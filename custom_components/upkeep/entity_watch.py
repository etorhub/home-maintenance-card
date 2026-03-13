"""Entity watch for Upkeep frequency-based tasks."""

import logging
from typing import Callable

from homeassistant.core import Event, HomeAssistant, callback
from homeassistant.helpers.event import async_track_state_change_event

from . import const

_LOGGER = logging.getLogger(__name__)


def _get_tasks_watching_entity(store, entity_id: str) -> list[str]:
    """Get task IDs that watch the given entity."""
    task_ids = []
    for task in store.get_all():
        if task.get("task_type") == const.TASK_TYPE_FREQUENCY and task.get(
            "watched_entity"
        ) == entity_id:
            task_ids.append(task["id"])
    return task_ids


def setup_entity_watch(hass: HomeAssistant) -> Callable[[], None]:
    """Set up state change tracking for frequency tasks with watched_entity."""
    store = hass.data.get(const.DOMAIN, {}).get("store")
    if not store:
        return lambda: None

    watched_entities: set[str] = set()
    for task in store.get_all():
        we = task.get("watched_entity")
        if we and task.get("task_type") == const.TASK_TYPE_FREQUENCY:
            watched_entities.add(we)

    if not watched_entities:
        return lambda: None

    @callback
    def _state_changed(event: Event) -> None:
        data = event.data
        old_state = data.get("old_state")
        new_state = data.get("new_state")
        entity_id = data.get("entity_id")
        if not entity_id or not store:
            return
        if old_state is None or new_state is None:
            return
        old_s = getattr(old_state, "state", str(old_state))
        new_s = getattr(new_state, "state", str(new_state))
        if str(old_s).lower() == "on" and str(new_s).lower() != "on":
            for task_id in _get_tasks_watching_entity(store, entity_id):
                try:
                    store.increment_counter(task_id)
                    _LOGGER.debug("Auto-incremented task %s from watched entity %s", task_id, entity_id)
                except RuntimeError:
                    pass

    unsub = async_track_state_change_event(
        hass, list(watched_entities), _state_changed
    )
    return unsub
