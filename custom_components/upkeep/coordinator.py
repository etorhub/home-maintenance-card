"""Data coordinator for Upkeep."""

import logging
from datetime import timedelta

from dateutil.relativedelta import relativedelta
from homeassistant.core import HomeAssistant
from homeassistant.helpers.update_coordinator import DataUpdateCoordinator
from homeassistant.util import dt as dt_util

from . import const

_LOGGER = logging.getLogger(__name__)


class UpkeepCoordinator(DataUpdateCoordinator[None]):
    """Coordinator for polling task due dates and firing events."""

    def __init__(self, hass: HomeAssistant) -> None:
        """Initialize the coordinator."""
        super().__init__(
            hass,
            _LOGGER,
            name=const.DOMAIN,
            update_interval=timedelta(seconds=const.COORDINATOR_UPDATE_INTERVAL),
        )
        self._last_due_task_ids: set[str] = set()

    async def _async_update_data(self) -> None:
        """Poll and fire events for tasks that transition to due."""
        if const.DOMAIN not in self.hass.data:
            return

        store = self.hass.data[const.DOMAIN].get("store")
        entities = self.hass.data[const.DOMAIN].get("entities", {})
        if not store or not entities:
            return

        now = dt_util.now()
        currently_due: set[str] = set()

        for task_id, entity in entities.items():
            if not hasattr(entity, "task"):
                continue
            task = entity.task
            if not task.get("enabled", True):
                continue
            if task.get("task_type") == const.TASK_TYPE_FREQUENCY:
                target = task.get("frequency_target") or 1
                current = task.get("current_count", 0)
                if current >= target:
                    currently_due.add(task_id)
            else:
                last_str = task.get("last_performed")
                if not last_str:
                    currently_due.add(task_id)
                    continue
                last = dt_util.parse_datetime(last_str)
                if last is None:
                    currently_due.add(task_id)
                    continue
                if last.tzinfo is None:
                    last = dt_util.as_utc(last)
                interval_value = task.get("interval_value", 30)
                interval_type = task.get("interval_type", "days")
                if interval_type == "days":
                    due = last + timedelta(days=interval_value)
                elif interval_type == "weeks":
                    due = last + timedelta(weeks=interval_value)
                else:
                    due = last + relativedelta(months=interval_value)
                due = due.replace(hour=0, minute=0, second=0, microsecond=0)
                now_midnight = now.replace(hour=0, minute=0, second=0, microsecond=0)
                if now_midnight >= due:
                    currently_due.add(task_id)

        # Fire events for tasks that newly became due
        for task_id in currently_due:
            if task_id not in self._last_due_task_ids:
                task_data = store.get(task_id)
                if task_data:
                    self._fire_task_due_event(task_id, task_data, entities.get(task_id))

        self._last_due_task_ids = currently_due

        # Auto-re-enable tasks when snoozed_until has passed
        for task_id, entity in entities.items():
            if not hasattr(entity, "task"):
                continue
            task = entity.task
            if not task.get("enabled") and task.get("snoozed_until"):
                try:
                    snooze_str = task["snoozed_until"]
                    if isinstance(snooze_str, str) and len(snooze_str) >= 10:
                        snooze_date = dt_util.parse_datetime(snooze_str[:10] + "T00:00:00")
                        if snooze_date:
                            snooze_local = dt_util.as_local(snooze_date)
                            now_local = dt_util.as_local(now)
                            if now_local >= snooze_local:
                                store.enable_task(task_id)
                                _LOGGER.debug("Auto-re-enabled task %s (snooze expired)", task_id)
                except Exception:
                    pass

    def _fire_task_due_event(
        self, task_id: str, task_data: dict, entity
    ) -> None:
        """Fire upkeep_task_due event and optionally create notification."""
        entity_id = entity.entity_id if entity else None
        urgency = "overdue"
        if entity and hasattr(entity, "_attr_extra_state_attributes"):
            urgency = entity._attr_extra_state_attributes.get("urgency", "overdue")

        self.hass.bus.async_fire(
            const.EVENT_TASK_DUE,
            {
                "task_id": task_id,
                "title": task_data.get("title", ""),
                "urgency": urgency,
                "entity_id": entity_id,
            },
        )

        if task_data.get("notify_when_due"):
            self.hass.async_create_task(
                self.hass.services.async_call(
                    "persistent_notification",
                    "create",
                    {
                        "title": "Upkeep",
                        "message": f"Task due: {task_data.get('title', '')}",
                        "notification_id": f"upkeep_{task_id}",
                    },
                )
            )
