function f(s,e,r,t){var i=arguments.length,o=i<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,r):t,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,r,t);else for(var c=s.length-1;c>=0;c--)(n=s[c])&&(o=(i<3?n(o):i>3?n(e,r,o):n(e,r))||o);return i>3&&o&&Object.defineProperty(e,r,o),o}typeof SuppressedError=="function"&&SuppressedError;const j=globalThis,Y=j.ShadowRoot&&(j.ShadyCSS===void 0||j.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol(),ue=new WeakMap;let he=class{constructor(e,r,t){if(this._$cssResult$=!0,t!==Q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Y&&e===void 0){const t=r!==void 0&&r.length===1;t&&(e=ue.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&ue.set(r,e))}return e}toString(){return this.cssText}};const ot=s=>new he(typeof s=="string"?s:s+"",void 0,Q),D=(s,...e)=>{const r=s.length===1?s[0]:e.reduce((t,i,o)=>t+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[o+1],s[0]);return new he(r,s,Q)},nt=(s,e)=>{if(Y)s.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const t=document.createElement("style"),i=j.litNonce;i!==void 0&&t.setAttribute("nonce",i),t.textContent=r.cssText,s.appendChild(t)}},pe=Y?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let r="";for(const t of e.cssRules)r+=t.cssText;return ot(r)})(s):s;const{is:at,defineProperty:ct,getOwnPropertyDescriptor:dt,getOwnPropertyNames:lt,getOwnPropertySymbols:ut,getPrototypeOf:ht}=Object,W=globalThis,_e=W.trustedTypes,pt=_e?_e.emptyScript:"",_t=W.reactiveElementPolyfillSupport,O=(s,e)=>s,G={toAttribute(s,e){switch(e){case Boolean:s=s?pt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let r=s;switch(e){case Boolean:r=s!==null;break;case Number:r=s===null?null:Number(s);break;case Object:case Array:try{r=JSON.parse(s)}catch{r=null}}return r}},X=(s,e)=>!at(s,e),fe={attribute:!0,type:String,converter:G,reflect:!1,useDefault:!1,hasChanged:X};Symbol.metadata??=Symbol("metadata"),W.litPropertyMetadata??=new WeakMap;let C=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=fe){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){const t=Symbol(),i=this.getPropertyDescriptor(e,t,r);i!==void 0&&ct(this.prototype,e,i)}}static getPropertyDescriptor(e,r,t){const{get:i,set:o}=dt(this.prototype,e)??{get(){return this[r]},set(n){this[r]=n}};return{get:i,set(n){const c=i?.call(this);o?.call(this,n),this.requestUpdate(e,c,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??fe}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;const e=ht(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){const r=this.properties,t=[...lt(r),...ut(r)];for(const i of t)this.createProperty(i,r[i])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[t,i]of r)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[r,t]of this.elementProperties){const i=this._$Eu(r,t);i!==void 0&&this._$Eh.set(i,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const t=new Set(e.flat(1/0).reverse());for(const i of t)r.unshift(pe(i))}else e!==void 0&&r.push(pe(e));return r}static _$Eu(e,r){const t=r.attribute;return t===!1?void 0:typeof t=="string"?t:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const t of r.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return nt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,t){this._$AK(e,t)}_$ET(e,r){const t=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,t);if(i!==void 0&&t.reflect===!0){const o=(t.converter?.toAttribute!==void 0?t.converter:G).toAttribute(r,t.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,r){const t=this.constructor,i=t._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const o=t.getPropertyOptions(i),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:G;this._$Em=i;const c=n.fromAttribute(r,o.type);this[i]=c??this._$Ej?.get(i)??c,this._$Em=null}}requestUpdate(e,r,t,i=!1,o){if(e!==void 0){const n=this.constructor;if(i===!1&&(o=this[e]),t??=n.getPropertyOptions(e),!((t.hasChanged??X)(o,r)||t.useDefault&&t.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,t))))return;this.C(e,r,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:t,reflect:i,wrapped:o},n){t&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??r??this[e]),o!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||t||(r=void 0),this._$AL.set(e,r)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[i,o]of t){const{wrapped:n}=o,c=this[i];n!==!0||this._$AL.has(i)||c===void 0||this.C(i,void 0,o,c)}}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(r)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(e){}firstUpdated(e){}};C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[O("elementProperties")]=new Map,C[O("finalized")]=new Map,_t?.({ReactiveElement:C}),(W.reactiveElementVersions??=[]).push("2.1.2");const ee=globalThis,ge=s=>s,q=ee.trustedTypes,me=q?q.createPolicy("lit-html",{createHTML:s=>s}):void 0,ve="$lit$",b=`lit$${Math.random().toFixed(9).slice(2)}$`,ye="?"+b,ft=`<${ye}>`,w=document,N=()=>w.createComment(""),R=s=>s===null||typeof s!="object"&&typeof s!="function",te=Array.isArray,gt=s=>te(s)||typeof s?.[Symbol.iterator]=="function",re=`[ 	
\f\r]`,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$e=/-->/g,be=/>/g,A=RegExp(`>|${re}(?:([^\\s"'>=/]+)(${re}*=${re}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xe=/'/g,ke=/"/g,we=/^(?:script|style|textarea|title)$/i,Ae=s=>(e,...r)=>({_$litType$:s,strings:e,values:r}),l=Ae(1),mt=Ae(2),T=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),Ee=new WeakMap,E=w.createTreeWalker(w,129);function Se(s,e){if(!te(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return me!==void 0?me.createHTML(e):e}const vt=(s,e)=>{const r=s.length-1,t=[];let i,o=e===2?"<svg>":e===3?"<math>":"",n=H;for(let c=0;c<r;c++){const a=s[c];let h,_,u=-1,g=0;for(;g<a.length&&(n.lastIndex=g,_=n.exec(a),_!==null);)g=n.lastIndex,n===H?_[1]==="!--"?n=$e:_[1]!==void 0?n=be:_[2]!==void 0?(we.test(_[2])&&(i=RegExp("</"+_[2],"g")),n=A):_[3]!==void 0&&(n=A):n===A?_[0]===">"?(n=i??H,u=-1):_[1]===void 0?u=-2:(u=n.lastIndex-_[2].length,h=_[1],n=_[3]===void 0?A:_[3]==='"'?ke:xe):n===ke||n===xe?n=A:n===$e||n===be?n=H:(n=A,i=void 0);const y=n===A&&s[c+1].startsWith("/>")?" ":"";o+=n===H?a+ft:u>=0?(t.push(h),a.slice(0,u)+ve+a.slice(u)+b+y):a+b+(u===-2?c:y)}return[Se(s,o+(s[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),t]};class I{constructor({strings:e,_$litType$:r},t){let i;this.parts=[];let o=0,n=0;const c=e.length-1,a=this.parts,[h,_]=vt(e,r);if(this.el=I.createElement(h,t),E.currentNode=this.el.content,r===2||r===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=E.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const u of i.getAttributeNames())if(u.endsWith(ve)){const g=_[n++],y=i.getAttribute(u).split(b),k=/([.?@])?(.*)/.exec(g);a.push({type:1,index:o,name:k[2],strings:y,ctor:k[1]==="."?$t:k[1]==="?"?bt:k[1]==="@"?xt:K}),i.removeAttribute(u)}else u.startsWith(b)&&(a.push({type:6,index:o}),i.removeAttribute(u));if(we.test(i.tagName)){const u=i.textContent.split(b),g=u.length-1;if(g>0){i.textContent=q?q.emptyScript:"";for(let y=0;y<g;y++)i.append(u[y],N()),E.nextNode(),a.push({type:2,index:++o});i.append(u[g],N())}}}else if(i.nodeType===8)if(i.data===ye)a.push({type:2,index:o});else{let u=-1;for(;(u=i.data.indexOf(b,u+1))!==-1;)a.push({type:7,index:o}),u+=b.length-1}o++}}static createElement(e,r){const t=w.createElement("template");return t.innerHTML=e,t}}function M(s,e,r=s,t){if(e===T)return e;let i=t!==void 0?r._$Co?.[t]:r._$Cl;const o=R(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(s),i._$AT(s,r,t)),t!==void 0?(r._$Co??=[])[t]=i:r._$Cl=i),i!==void 0&&(e=M(s,i._$AS(s,e.values),i,t)),e}class yt{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:t}=this._$AD,i=(e?.creationScope??w).importNode(r,!0);E.currentNode=i;let o=E.nextNode(),n=0,c=0,a=t[0];for(;a!==void 0;){if(n===a.index){let h;a.type===2?h=new B(o,o.nextSibling,this,e):a.type===1?h=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(h=new kt(o,this,e)),this._$AV.push(h),a=t[++c]}n!==a?.index&&(o=E.nextNode(),n++)}return E.currentNode=w,i}p(e){let r=0;for(const t of this._$AV)t!==void 0&&(t.strings!==void 0?(t._$AI(e,t,r),r+=t.strings.length-2):t._$AI(e[r])),r++}}class B{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,t,i){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=t,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=M(this,e,r),R(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==T&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):gt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==p&&R(this._$AH)?this._$AA.nextSibling.data=e:this.T(w.createTextNode(e)),this._$AH=e}$(e){const{values:r,_$litType$:t}=e,i=typeof t=="number"?this._$AC(e):(t.el===void 0&&(t.el=I.createElement(Se(t.h,t.h[0]),this.options)),t);if(this._$AH?._$AD===i)this._$AH.p(r);else{const o=new yt(i,this),n=o.u(this.options);o.p(r),this.T(n),this._$AH=o}}_$AC(e){let r=Ee.get(e.strings);return r===void 0&&Ee.set(e.strings,r=new I(e)),r}k(e){te(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let t,i=0;for(const o of e)i===r.length?r.push(t=new B(this.O(N()),this.O(N()),this,this.options)):t=r[i],t._$AI(o),i++;i<r.length&&(this._$AR(t&&t._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e!==this._$AB;){const t=ge(e).nextSibling;ge(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class K{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,t,i,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=r,this._$AM=i,this.options=o,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=p}_$AI(e,r=this,t,i){const o=this.strings;let n=!1;if(o===void 0)e=M(this,e,r,0),n=!R(e)||e!==this._$AH&&e!==T,n&&(this._$AH=e);else{const c=e;let a,h;for(e=o[0],a=0;a<o.length-1;a++)h=M(this,c[t+a],r,a),h===T&&(h=this._$AH[a]),n||=!R(h)||h!==this._$AH[a],h===p?e=p:e!==p&&(e+=(h??"")+o[a+1]),this._$AH[a]=h}n&&!i&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class $t extends K{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}}class bt extends K{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}}class xt extends K{constructor(e,r,t,i,o){super(e,r,t,i,o),this.type=5}_$AI(e,r=this){if((e=M(this,e,r,0)??p)===T)return;const t=this._$AH,i=e===p&&t!==p||e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive,o=e!==p&&(t===p||i);i&&this.element.removeEventListener(this.name,this,t),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class kt{constructor(e,r,t){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(e){M(this,e)}}const wt=ee.litHtmlPolyfillSupport;wt?.(I,B),(ee.litHtmlVersions??=[]).push("3.3.2");const At=(s,e,r)=>{const t=r?.renderBefore??e;let i=t._$litPart$;if(i===void 0){const o=r?.renderBefore??null;t._$litPart$=i=new B(e.insertBefore(N(),o),o,void 0,r??{})}return i._$AI(s),i};const ie=globalThis;class $ extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=At(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return T}}$._$litElement$=!0,$.finalized=!0,ie.litElementHydrateSupport?.({LitElement:$});const Et=ie.litElementPolyfillSupport;Et?.({LitElement:$}),(ie.litElementVersions??=[]).push("4.2.2");const V=s=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};const St={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:X},Ct=(s=St,e,r)=>{const{kind:t,metadata:i}=r;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),t==="setter"&&((s=Object.create(s)).wrapped=!0),o.set(r.name,s),t==="accessor"){const{name:n}=r;return{set(c){const a=e.get.call(this);e.set.call(this,c),this.requestUpdate(n,a,s,!0,c)},init(c){return c!==void 0&&this.C(n,void 0,s,c),c}}}if(t==="setter"){const{name:n}=r;return function(c){const a=this[n];e.call(this,c),this.requestUpdate(n,a,s,!0,c)}}throw Error("Unsupported decorator location: "+t)};function v(s){return(e,r)=>typeof r=="object"?Ct(s,e,r):((t,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,t),n?Object.getOwnPropertyDescriptor(i,o):void 0})(s,e,r)}function z(s){return v({...s,state:!0,attribute:!1})}const Tt="1.0.0",Ce="upkeep-card",Mt="upkeep-card-editor",m={title:"Upkeep",view_mode:"grid",progress_type:"ring",sort_by:"urgency",filter:"all",due_soon_days:7,show_header:!0,show_filter_bar:!1},se={on_track:"var(--success-color, #4caf50)",due_soon:"var(--warning-color, #ff9800)",overdue:"var(--error-color, #f44336)"},oe={due_soon:75,overdue:100},zt=["last_performed","next_due","interval_value","interval_type"],Pt=["progress","task_type"];function Ut(s){if(!s.entity_id.startsWith("binary_sensor."))return!1;const e=s.attributes||{},r=zt.every(i=>i in e),t=Pt.some(i=>i in e);return r||t}function Te(s,e,r){if(e&&e.length>0){const i=new Set(r??[]);return e.filter(o=>!i.has(o)&&o in s.states)}const t=new Set(r??[]);return Object.keys(s.states).filter(i=>t.has(i)?!1:Ut(s.states[i]))}function Me(s,e,r=new Date){const t=s.attributes||{},i=t.task_type;if(!(t.enabled!==!1))return{entity_id:s.entity_id,name:t.friendly_name??s.entity_id,icon:t.icon??"mdi:calendar-check",state:s.state,last_performed:new Date(0),next_due:new Date(0),interval_value:t.interval_value??0,interval_type:t.interval_type??"days",progress:0,days_remaining:0,urgency:"snoozed",task_type:i??"time",assigned_user:t.assigned_user};if(i==="frequency"){const F=t.frequency_target??1,de=t.current_count??0,J=F>0?Math.round(de/F*100):0;let le=J>=oe.overdue?"overdue":J>=oe.due_soon?"due_soon":"on_track";return t.urgency&&(le=t.urgency),{entity_id:s.entity_id,name:t.friendly_name??s.entity_id,icon:t.icon??"mdi:calendar-check",state:s.state,last_performed:new Date(0),next_due:new Date(0),interval_value:F,interval_type:"uses",progress:Math.min(100,J),days_remaining:Math.max(0,F-de),urgency:le,task_type:"frequency",assigned_user:t.assigned_user}}const n=t.last_performed,c=t.next_due;if(!n||!c||c==="unknown")return{entity_id:s.entity_id,name:t.friendly_name??s.entity_id,icon:t.icon??"mdi:calendar-check",state:s.state,last_performed:n?new Date(n):new Date(0),next_due:new Date(0),interval_value:t.interval_value??0,interval_type:t.interval_type??"days",progress:100,days_remaining:0,urgency:"overdue",task_type:"time",assigned_user:t.assigned_user};const a=new Date(n),h=new Date(c),_=h.getTime()-a.getTime(),u=r.getTime()-a.getTime(),g=_>0?Math.round(u/_*100):100,y=h.getTime()-r.getTime(),k=Math.ceil(y/(1e3*60*60*24));let L;return g>=oe.overdue?L="overdue":k<=e?L="due_soon":L="on_track",{entity_id:s.entity_id,name:t.friendly_name??s.entity_id,icon:t.icon??"mdi:calendar-check",state:s.state,last_performed:a,next_due:h,interval_value:t.interval_value??0,interval_type:t.interval_type??"days",progress:Math.max(0,g),days_remaining:k,urgency:L,task_type:"time",assigned_user:t.assigned_user}}function Dt(s,e){const r=[...s];switch(e){case"urgency":r.sort((t,i)=>i.progress-t.progress);break;case"name":r.sort((t,i)=>t.name.localeCompare(i.name));break;case"due_date":r.sort((t,i)=>t.next_due.getTime()-i.next_due.getTime());break}return r}function Ot(s,e){return e==="all"?s:s.filter(r=>r.urgency===e)}function Nt(s){switch(s){case"overdue":return"var(--error-color, #f44336)";case"due_soon":return"var(--warning-color, #ff9800)";case"snoozed":return"var(--secondary-text-color, #9e9e9e)";case"on_track":default:return"var(--success-color, #4caf50)"}}function Rt(s,e,r){if(r==="frequency")return s<=0?ze(e):`${s} use${s!==1?"s":""} left`;if(s<0){const t=Math.abs(s);return Pe(t,e,!0)}return s===0?ze(e):Pe(s,e,!1)}function ze(s){return s.startsWith("ca")?"Avui":s.startsWith("es")?"Hoy":"Today"}function Pe(s,e,r){if(e.startsWith("ca")){const i=s===1?"dia":"dies";return r?`${s} ${i} de retard`:`${s} ${i} restants`}if(e.startsWith("es")){const i=s===1?"d\xEDa":"d\xEDas";return r?`${s} ${i} de retraso`:`${s} ${i} restantes`}const t=s===1?"day":"days";return r?`${s} ${t} overdue`:`${s} ${t} left`}var Ue={version:"Version",invalid_configuration:"Invalid configuration"},De={title:"Upkeep",overdue:"Overdue",due_soon:"Due soon",on_track:"On track",mark_done:"Done",confirm_done:"Mark this task as done?",no_tasks:"No maintenance tasks found",days_left:"{count} {unit} left",days_overdue:"{count} {unit} overdue",today:"Due today",last_performed:"Last performed",next_due:"Next due",every:"Every {value} {type}"},Oe={general:"General",entities:"Entities",display:"Display",features:"Features",title:"Title",view_mode:"View mode",progress_type:"Progress type",sort_by:"Sort by",filter:"Filter",columns:"Columns",due_soon_days:"Due soon threshold (days)",show_header:"Show summary header",show_filter_bar:"Show filter bar",grid:"Grid",list:"List",compact:"Compact",ring:"Ring",bar:"Bar",urgency:"Urgency",name:"Name",due_date:"Due date",all:"All",snoozed:"Snoozed",auto_discover:"Auto-discover entities"},Ht={common:Ue,card:De,editor:Oe},Vt=Object.freeze({__proto__:null,card:De,common:Ue,default:Ht,editor:Oe}),Ne={version:"Versi\xF3n",invalid_configuration:"Configuraci\xF3n inv\xE1lida"},Re={title:"Mantenimiento del hogar",overdue:"Vencida",due_soon:"Pr\xF3xima",on_track:"Al d\xEDa",mark_done:"Hecho",confirm_done:"\xBFMarcar esta tarea como hecha?",no_tasks:"No se encontraron tareas de mantenimiento",days_left:"{count} {unit} restantes",days_overdue:"{count} {unit} de retraso",today:"Vence hoy",last_performed:"\xDAltima vez",next_due:"Pr\xF3xima vez",every:"Cada {value} {type}"},He={general:"General",entities:"Entidades",display:"Visualizaci\xF3n",features:"Funciones",title:"T\xEDtulo",view_mode:"Modo de vista",progress_type:"Tipo de progreso",sort_by:"Ordenar por",filter:"Filtrar",columns:"Columnas",due_soon_days:"Umbral de pr\xF3xima (d\xEDas)",show_header:"Mostrar resumen",show_filter_bar:"Mostrar barra de filtros",grid:"Cuadr\xEDcula",list:"Lista",compact:"Compacto",ring:"Anillo",bar:"Barra",urgency:"Urgencia",name:"Nombre",due_date:"Fecha de vencimiento",all:"Todas",auto_discover:"Auto-descubrir entidades"},It={common:Ne,card:Re,editor:He},Bt=Object.freeze({__proto__:null,card:Re,common:Ne,default:It,editor:He}),Ve={version:"Versi\xF3",invalid_configuration:"Configuraci\xF3 inv\xE0lida"},Ie={title:"Manteniments",overdue:"Ven\xE7uda",due_soon:"Propera",on_track:"Al dia",mark_done:"Fet",confirm_done:"Marcar aquesta tasca com a feta?",no_tasks:"No s'han trobat tasques de manteniment",days_left:"{count} {unit} restants",days_overdue:"{count} {unit} de retard",today:"Ven\xE7 avui",last_performed:"\xDAltima vegada",next_due:"Propera vegada",every:"Cada {value} {type}"},Be={general:"General",entities:"Entitats",display:"Visualitzaci\xF3",features:"Funcions",title:"T\xEDtol",view_mode:"Mode de vista",progress_type:"Tipus de progr\xE9s",sort_by:"Ordenar per",filter:"Filtrar",columns:"Columnes",due_soon_days:"Llindar de propera (dies)",show_header:"Mostrar resum",show_filter_bar:"Mostrar barra de filtres",grid:"Quadr\xEDcula",list:"Llista",compact:"Compacte",ring:"Anell",bar:"Barra",urgency:"Urg\xE8ncia",name:"Nom",due_date:"Data de venciment",all:"Totes",auto_discover:"Auto-descobrir entitats"},Lt={common:Ve,card:Ie,editor:Be},Ft=Object.freeze({__proto__:null,card:Ie,common:Ve,default:Lt,editor:Be}),Le={version:"Version",invalid_configuration:"Configuration invalide"},Fe={title:"Entretien de la maison",overdue:"En retard",due_soon:"Bient\xF4t due",on_track:"\xC0 jour",mark_done:"Termin\xE9",confirm_done:"Marquer cette t\xE2che comme termin\xE9e ?",no_tasks:"Aucune t\xE2che d'entretien trouv\xE9e",days_left:"{count} {unit} restant(s)",days_overdue:"{count} {unit} en retard",today:"\xC9ch\xE9ance aujourd'hui",last_performed:"Derni\xE8re fois",next_due:"Prochaine fois",every:"Tous les {value} {type}"},je={general:"G\xE9n\xE9ral",entities:"Entit\xE9s",display:"Affichage",features:"Fonctionnalit\xE9s",title:"Titre",view_mode:"Mode d'affichage",progress_type:"Type de progression",sort_by:"Trier par",filter:"Filtrer",columns:"Colonnes",due_soon_days:"Seuil de prochaine (jours)",show_header:"Afficher le r\xE9sum\xE9",show_filter_bar:"Afficher la barre de filtres",grid:"Grille",list:"Liste",compact:"Compact",ring:"Anneau",bar:"Barre",urgency:"Urgence",name:"Nom",due_date:"Date d'\xE9ch\xE9ance",all:"Toutes",auto_discover:"D\xE9couverte automatique des entit\xE9s"},jt={common:Le,card:Fe,editor:je},Wt=Object.freeze({__proto__:null,card:Fe,common:Le,default:jt,editor:je}),We={version:"Version",invalid_configuration:"Ung\xFCltige Konfiguration"},Ge={title:"Hauswartung",overdue:"\xDCberf\xE4llig",due_soon:"Demn\xE4chst f\xE4llig",on_track:"Im Plan",mark_done:"Erledigt",confirm_done:"Diese Aufgabe als erledigt markieren?",no_tasks:"Keine Wartungsaufgaben gefunden",days_left:"{count} {unit} \xFCbrig",days_overdue:"{count} {unit} \xFCberf\xE4llig",today:"Heute f\xE4llig",last_performed:"Zuletzt durchgef\xFChrt",next_due:"N\xE4chste F\xE4lligkeit",every:"Alle {value} {type}"},qe={general:"Allgemein",entities:"Entit\xE4ten",display:"Anzeige",features:"Funktionen",title:"Titel",view_mode:"Ansichtsmodus",progress_type:"Fortschrittstyp",sort_by:"Sortieren nach",filter:"Filter",columns:"Spalten",due_soon_days:"Schwellenwert f\xFCr demn\xE4chst (Tage)",show_header:"Zusammenfassung anzeigen",show_filter_bar:"Filterleiste anzeigen",grid:"Raster",list:"Liste",compact:"Kompakt",ring:"Ring",bar:"Balken",urgency:"Dringlichkeit",name:"Name",due_date:"F\xE4lligkeitsdatum",all:"Alle",auto_discover:"Entit\xE4ten automatisch erkennen"},Gt={common:We,card:Ge,editor:qe},qt=Object.freeze({__proto__:null,card:Ge,common:We,default:Gt,editor:qe}),Ke={version:"Versione",invalid_configuration:"Configurazione non valida"},Ze={title:"Manutenzione della casa",overdue:"Scaduta",due_soon:"In scadenza",on_track:"In regola",mark_done:"Completato",confirm_done:"Segnare questa attivit\xE0 come completata?",no_tasks:"Nessuna attivit\xE0 di manutenzione trovata",days_left:"{count} {unit} rimanenti",days_overdue:"{count} {unit} in ritardo",today:"Scade oggi",last_performed:"Ultima volta",next_due:"Prossima scadenza",every:"Ogni {value} {type}"},Je={general:"Generale",entities:"Entit\xE0",display:"Visualizzazione",features:"Funzionalit\xE0",title:"Titolo",view_mode:"Modalit\xE0 visualizzazione",progress_type:"Tipo di progresso",sort_by:"Ordina per",filter:"Filtra",columns:"Colonne",due_soon_days:"Soglia prossima (giorni)",show_header:"Mostra riepilogo",show_filter_bar:"Mostra barra filtri",grid:"Griglia",list:"Elenco",compact:"Compatto",ring:"Anello",bar:"Barra",urgency:"Urgenza",name:"Nome",due_date:"Data di scadenza",all:"Tutte",auto_discover:"Scopri automaticamente le entit\xE0"},Kt={common:Ke,card:Ze,editor:Je},Zt=Object.freeze({__proto__:null,card:Ze,common:Ke,default:Kt,editor:Je}),Ye={version:"Vers\xE3o",invalid_configuration:"Configura\xE7\xE3o inv\xE1lida"},Qe={title:"Manuten\xE7\xE3o da casa",overdue:"Atrasada",due_soon:"Em breve",on_track:"Em dia",mark_done:"Conclu\xEDdo",confirm_done:"Marcar esta tarefa como conclu\xEDda?",no_tasks:"Nenhuma tarefa de manuten\xE7\xE3o encontrada",days_left:"{count} {unit} restante(s)",days_overdue:"{count} {unit} atrasado(s)",today:"Vence hoje",last_performed:"\xDAltima vez",next_due:"Pr\xF3xima vez",every:"A cada {value} {type}"},Xe={general:"Geral",entities:"Entidades",display:"Visualiza\xE7\xE3o",features:"Funcionalidades",title:"T\xEDtulo",view_mode:"Modo de visualiza\xE7\xE3o",progress_type:"Tipo de progresso",sort_by:"Ordenar por",filter:"Filtrar",columns:"Colunas",due_soon_days:"Limite de pr\xF3xima (dias)",show_header:"Mostrar resumo",show_filter_bar:"Mostrar barra de filtros",grid:"Grelha",list:"Lista",compact:"Compacto",ring:"Anel",bar:"Barra",urgency:"Urg\xEAncia",name:"Nome",due_date:"Data de vencimento",all:"Todas",auto_discover:"Descobrir entidades automaticamente"},Jt={common:Ye,card:Qe,editor:Xe},Yt=Object.freeze({__proto__:null,card:Qe,common:Ye,default:Jt,editor:Xe}),et={version:"Versie",invalid_configuration:"Ongeldige configuratie"},tt={title:"Huisonderhoud",overdue:"Verlopen",due_soon:"Binnenkort",on_track:"Op schema",mark_done:"Gereed",confirm_done:"Deze taak als voltooid markeren?",no_tasks:"Geen onderhoudstaken gevonden",days_left:"{count} {unit} over",days_overdue:"{count} {unit} verlopen",today:"Vandaag verschuldigd",last_performed:"Laatst uitgevoerd",next_due:"Volgende keer",every:"Elke {value} {type}"},rt={general:"Algemeen",entities:"Entiteiten",display:"Weergave",features:"Functies",title:"Titel",view_mode:"Weergavemodus",progress_type:"Voortgangstype",sort_by:"Sorteren op",filter:"Filter",columns:"Kolommen",due_soon_days:"Drempel binnenkort (dagen)",show_header:"Samenvatting tonen",show_filter_bar:"Filterbalk tonen",grid:"Raster",list:"Lijst",compact:"Compact",ring:"Ring",bar:"Balk",urgency:"Urgentie",name:"Naam",due_date:"Vervaldatum",all:"Alle",auto_discover:"Entiteiten automatisch ontdekken"},Qt={common:et,card:tt,editor:rt},Xt=Object.freeze({__proto__:null,card:tt,common:et,default:Qt,editor:rt});const ne={en:Vt,es:Bt,ca:Ft,fr:Wt,de:qt,it:Zt,pt:Yt,nl:Xt};function ae(s,e){const r=e.split(".");let t=s;for(const i of r){if(t==null||typeof t!="object")return;t=t[i]}return typeof t=="string"?t:void 0}function d(s,e,r){const t=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let i=ae(ne[t],s);if(!i){const o=t.split("_")[0];i=ae(ne[o],s)}return i||(i=ae(ne.en,s)),i??s}const er=D`
  :host {
    --hm-grid-columns: var(--grid-columns, 3);
  }

  ha-card {
    overflow: hidden;
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 16px 0 16px;
  }
  .card-title {
    font-size: 18px;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .card-content {
    padding: 16px;
  }

  /* Filter bar */
  .filter-bar {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    padding: 0 0 12px 0;
  }
  .filter-chip {
    border: none;
    border-radius: 16px;
    padding: 4px 12px;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    background: var(--secondary-background-color);
    color: var(--secondary-text-color);
    transition: all 0.15s ease;
  }
  .filter-chip:hover {
    background: var(--divider-color);
  }
  .filter-chip.active {
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
  }

  /* Grid layout - min() ensures media queries override config columns */
  .task-grid {
    display: grid;
    grid-template-columns: repeat(min(var(--hm-grid-columns), var(--hm-max-columns, 99)), 1fr);
    gap: 12px;
  }
  .task-grid > * {
    min-width: 0; /* Allow grid items to shrink below content size */
  }

  /* List layout */
  .task-list {
    display: flex;
    flex-direction: column;
  }

  /* Compact layout */
  .task-compact {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  /* Empty state */
  .empty {
    text-align: center;
    padding: 32px 16px;
    color: var(--secondary-text-color);
    font-size: 14px;
  }
  .empty ha-icon {
    --mdc-icon-size: 48px;
    color: var(--divider-color);
    margin-bottom: 12px;
    display: block;
  }

  /* Skeleton */
  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
  .skeleton-tile {
    border-radius: 12px;
    height: 140px;
    background: linear-gradient(
      90deg,
      var(--secondary-background-color) 25%,
      var(--divider-color) 50%,
      var(--secondary-background-color) 75%
    );
    background-size: 200% 100%;
    animation: shimmer 1.5s ease-in-out infinite;
  }

  /* Responsive - --hm-max-columns caps config columns at viewport breakpoints */
  @media (max-width: 900px) {
    :host {
      --hm-max-columns: 2;
    }
  }
  @media (max-width: 500px) {
    :host {
      --hm-max-columns: 1;
    }
    .card-content {
      padding: 12px;
    }
    .task-grid {
      gap: 8px;
    }
  }
`;let P=class extends ${constructor(){super(...arguments),this.progress=0,this.color="var(--primary-color)",this.size=48,this.strokeWidth=4}render(){const e=(this.size-this.strokeWidth)/2,r=2*Math.PI*e,t=Math.min(this.progress,100),i=r-t/100*r,o=this.size/2,n=Math.min(this.progress,999);return l`
      <svg width="${this.size}" height="${this.size}" viewBox="0 0 ${this.size} ${this.size}">
        ${mt`
          <circle
            class="track"
            cx="${o}"
            cy="${o}"
            r="${e}"
            fill="none"
            stroke="var(--divider-color, #e0e0e0)"
            stroke-width="${this.strokeWidth}"
          />
          <circle
            class="progress"
            cx="${o}"
            cy="${o}"
            r="${e}"
            fill="none"
            stroke="${this.color}"
            stroke-width="${this.strokeWidth}"
            stroke-dasharray="${r}"
            stroke-dashoffset="${i}"
            stroke-linecap="round"
            transform="rotate(-90 ${o} ${o})"
          />
          <text
            x="${o}"
            y="${o}"
            text-anchor="middle"
            dominant-baseline="central"
            class="pct-text"
            fill="var(--primary-text-color)"
          >${n}%</text>
        `}
      </svg>
    `}static get styles(){return D`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .progress {
        transition:
          stroke-dashoffset 0.6s ease,
          stroke 0.3s ease;
      }
      .pct-text {
        font-size: 11px;
        font-weight: 600;
      }
    `}};f([v({type:Number})],P.prototype,"progress",void 0),f([v({type:String})],P.prototype,"color",void 0),f([v({type:Number})],P.prototype,"size",void 0),f([v({type:Number})],P.prototype,"strokeWidth",void 0),P=f([V("hm-progress-ring")],P);let x=class extends ${constructor(){super(...arguments),this.progressType="ring",this.viewMode="grid",this._confirming=!1,this._done=!1}_handleDone(){if(!this._confirming){this._confirming=!0;return}this.hass.callService("upkeep","reset_last_performed",{entity_id:this.task.entity_id}),this._confirming=!1,this._done=!0,setTimeout(()=>{this._done=!1},1500)}_cancelConfirm(){this._confirming=!1}_showMoreInfo(){const e=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:this.task.entity_id}});this.dispatchEvent(e)}render(){const{task:e}=this,r=Nt(e.urgency),t=this.hass?.locale?.language??this.hass?.language??"en",i=Rt(e.days_remaining,t,e.task_type),o=e.urgency==="overdue";return this.viewMode==="list"?this._renderList(r,i,o):this.viewMode==="compact"?this._renderCompact(r,i,o):this._renderGrid(r,i,o)}_renderGrid(e,r,t){const{task:i}=this;return l`
      <div class="tile grid ${t?"overdue":""} ${this._done?"done-anim":""}">
        <div class="tile-top" @click=${this._showMoreInfo}>
          <div class="icon-wrap" style="color: ${e}">
            <ha-icon .icon=${i.icon}></ha-icon>
          </div>
          ${this._renderProgress(e)}
        </div>
        <div class="tile-body" @click=${this._showMoreInfo}>
          <div class="name">${i.name}</div>
          <div class="due" style="color: ${e}">${r}</div>
        </div>
        <div class="tile-actions">${this._renderDoneButton()}</div>
      </div>
    `}_renderList(e,r,t){const{task:i}=this,o=this.progressType==="bar";return l`
      <div
        class="tile list ${o?"list-bar":""} ${t?"overdue":""} ${this._done?"done-anim":""}"
      >
        <div class="list-row">
          <div class="icon-wrap list-icon" style="color: ${e}" @click=${this._showMoreInfo}>
            <ha-icon .icon=${i.icon}></ha-icon>
          </div>
          <div class="list-info" @click=${this._showMoreInfo}>
            <div class="name">${i.name}</div>
            <div class="due" style="color: ${e}">${r}</div>
          </div>
          ${o?p:l`<div class="list-progress">${this._renderProgress(e)}</div>`}
          <div class="list-action">${this._renderDoneButton()}</div>
        </div>
        ${o?l`<div class="list-bar-footer">${this._renderProgress(e)}</div>`:p}
      </div>
    `}_renderCompact(e,r,t){const{task:i}=this;return l`
      <div
        class="tile compact ${t?"overdue":""} ${this._done?"done-anim":""}"
        @click=${this._showMoreInfo}
      >
        <div class="icon-wrap compact-icon" style="color: ${e}">
          <ha-icon .icon=${i.icon}></ha-icon>
        </div>
        <div class="compact-name">${i.name}</div>
        ${this._renderProgress(e,32,3)}
      </div>
    `}_renderProgress(e,r=48,t=4){if(this.progressType==="bar"){const i=Math.min(this.task.progress,100);return l`
        <div class="bar-wrap">
          <div class="bar-track">
            <div class="bar-fill" style="width:${i}%;background:${e};"></div>
          </div>
        </div>
      `}return l`
      <hm-progress-ring
        .progress=${this.task.progress}
        .color=${e}
        .size=${r}
        .strokeWidth=${t}
      ></hm-progress-ring>
    `}_renderDoneButton(){return this._done?l`
        <div class="done-check">
          <ha-icon icon="mdi:check-circle" style="color:var(--success-color, #4caf50)"></ha-icon>
        </div>
      `:this._confirming?l`
        <div class="confirm-row">
          <button class="btn btn-confirm" @click=${this._handleDone}>
            <ha-icon icon="mdi:check"></ha-icon>
          </button>
          <button class="btn btn-cancel" @click=${this._cancelConfirm}>
            <ha-icon icon="mdi:close"></ha-icon>
          </button>
        </div>
      `:l`
      <button class="btn btn-done" @click=${this._handleDone}>${d("card.mark_done")}</button>
    `}static get styles(){return D`
      :host {
        display: block;
      }

      /* Grid tile */
      .tile.grid {
        background: var(--card-background-color, var(--ha-card-background, #fff));
        border-radius: 12px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        border: 1px solid var(--divider-color, #e0e0e0);
        transition:
          box-shadow 0.2s ease,
          transform 0.2s ease,
          border-color 0.2s ease;
        position: relative;
        overflow: hidden;
      }
      .tile.grid:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        transform: translateY(-2px);
      }
      .tile-top {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        cursor: pointer;
        width: 100%;
      }
      .tile-body {
        text-align: center;
        cursor: pointer;
        width: 100%;
      }
      .tile-actions {
        margin-top: 4px;
      }

      /* List tile */
      .tile.list {
        display: flex;
        flex-direction: column;
        gap: 0;
        padding: 0;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
        transition: background 0.15s ease;
      }
      .tile.list:hover {
        background: var(--secondary-background-color);
      }
      .tile.list .list-row {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 16px;
      }
      .tile.list.list-bar .list-row {
        padding-bottom: 8px;
      }
      .tile.list .list-bar-footer {
        padding: 0 16px 12px 16px;
        width: 100%;
        box-sizing: border-box;
      }
      .tile.list .list-bar-footer .bar-wrap {
        padding: 0;
      }
      .tile.list .list-bar-footer .bar-track {
        height: 8px;
      }
      .list-info {
        flex: 1;
        min-width: 0;
        cursor: pointer;
      }
      .list-progress {
        flex-shrink: 0;
      }
      .list-action {
        flex-shrink: 0;
      }

      /* Compact tile */
      .tile.compact {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        cursor: pointer;
        border-radius: 8px;
        transition: background 0.15s ease;
      }
      .tile.compact:hover {
        background: var(--secondary-background-color);
      }
      .compact-name {
        flex: 1;
        font-size: 13px;
        font-weight: 500;
        color: var(--primary-text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      /* Icon */
      .icon-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .icon-wrap ha-icon {
        --mdc-icon-size: 28px;
      }
      .compact-icon ha-icon {
        --mdc-icon-size: 20px;
      }
      .list-icon {
        cursor: pointer;
      }

      /* Text */
      .name {
        font-weight: 500;
        font-size: 14px;
        color: var(--primary-text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .due {
        font-size: 12px;
        margin-top: 2px;
        font-weight: 500;
      }

      /* Progress bar variant */
      .bar-wrap {
        width: 100%;
        padding: 0 4px;
      }
      .bar-track {
        background: var(--divider-color, #e0e0e0);
        border-radius: 4px;
        height: 6px;
        width: 100%;
        overflow: hidden;
      }
      .bar-fill {
        height: 100%;
        border-radius: 4px;
        transition:
          width 0.6s ease,
          background 0.3s ease;
      }

      /* Buttons */
      .btn {
        border: none;
        border-radius: 8px;
        padding: 6px 14px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 4px;
        transition: all 0.15s ease;
      }
      .btn-done {
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }
      .btn-done:hover {
        filter: brightness(1.1);
        transform: scale(1.03);
      }
      .btn-confirm {
        background: var(--success-color, #4caf50);
        color: #fff;
      }
      .btn-cancel {
        background: var(--secondary-background-color);
        color: var(--primary-text-color);
      }
      .btn-confirm ha-icon,
      .btn-cancel ha-icon {
        --mdc-icon-size: 16px;
      }
      .confirm-row {
        display: flex;
        gap: 6px;
      }
      .done-check {
        animation: popIn 0.3s ease;
      }
      .done-check ha-icon {
        --mdc-icon-size: 28px;
      }

      /* Overdue pulse */
      .tile.overdue {
        border-color: var(--error-color, #f44336);
      }
      .tile.overdue.grid {
        animation: overduePulse 2s ease-in-out infinite;
      }

      /* Done animation */
      .done-anim {
        animation: donePop 0.4s ease;
      }

      @keyframes overduePulse {
        0%,
        100% {
          box-shadow: 0 0 0 0 rgba(244, 67, 54, 0);
        }
        50% {
          box-shadow: 0 0 12px 2px rgba(244, 67, 54, 0.2);
        }
      }
      @keyframes popIn {
        0% {
          transform: scale(0);
          opacity: 0;
        }
        70% {
          transform: scale(1.2);
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      @keyframes donePop {
        0% {
          transform: scale(1);
        }
        30% {
          transform: scale(0.97);
        }
        60% {
          transform: scale(1.02);
        }
        100% {
          transform: scale(1);
        }
      }
    `}};f([v({attribute:!1})],x.prototype,"hass",void 0),f([v({attribute:!1})],x.prototype,"task",void 0),f([v({type:String})],x.prototype,"progressType",void 0),f([v({type:String})],x.prototype,"viewMode",void 0),f([z()],x.prototype,"_confirming",void 0),f([z()],x.prototype,"_done",void 0),x=f([V("hm-task-tile")],x);let ce=class extends ${constructor(){super(...arguments),this.tasks=[]}render(){const e=this.tasks.filter(i=>i.urgency==="overdue").length,r=this.tasks.filter(i=>i.urgency==="due_soon").length,t=this.tasks.filter(i=>i.urgency==="on_track").length;return l`
      <div class="header">
        ${e>0?l`
              <span class="badge overdue" style="--badge-color:${se.overdue}">
                ${e} ${d("card.overdue")}
              </span>
            `:""}
        ${r>0?l`
              <span class="badge due-soon" style="--badge-color:${se.due_soon}">
                ${r} ${d("card.due_soon")}
              </span>
            `:""}
        ${t>0?l`
              <span class="badge on-track" style="--badge-color:${se.on_track}">
                ${t} ${d("card.on_track")}
              </span>
            `:""}
      </div>
    `}static get styles(){return D`
      .header {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        padding: 0 0 12px 0;
      }
      .badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 13px;
        font-weight: 600;
        color: var(--badge-color);
        background: color-mix(in srgb, var(--badge-color) 12%, transparent);
        border: 1px solid color-mix(in srgb, var(--badge-color) 30%, transparent);
      }
    `}};f([v({attribute:!1})],ce.prototype,"tasks",void 0),ce=f([V("hm-summary-header")],ce),console.info(`%c UPKEEP 
%c ${d("common.version")} ${Tt} `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:Ce,name:"Upkeep Card",description:"Visual task tracker for the Upkeep integration with progress rings, auto-discovery, and one-tap completion.",preview:!0});let S=class extends ${constructor(){super(...arguments),this._activeFilter=m.filter}static async getConfigElement(){return await Promise.resolve().then(function(){return tr}),document.createElement("upkeep-card-editor")}static getStubConfig(){return{title:m.title}}setConfig(e){if(!e)throw new Error(d("common.invalid_configuration"));this._config={...e},this._activeFilter=e.filter??m.filter}getCardSize(){return 3}shouldUpdate(e){if(e.has("_config")||e.has("_activeFilter"))return!0;if(!e.has("hass"))return!1;const r=e.get("hass");return r?Te(this.hass,this._config.entities,this._config.exclude_entities).some(i=>r.states[i]!==this.hass.states[i]):!0}render(){if(!this.hass||!this._config)return l`
        <ha-card>
          <div class="card-content">
            <div class="task-grid" style="--hm-grid-columns:${this._columns()}">
              ${[1,2,3].map(()=>l`<div class="skeleton-tile"></div>`)}
            </div>
          </div>
        </ha-card>
      `;const e=Te(this.hass,this._config.entities,this._config.exclude_entities),r=this._config.due_soon_days??m.due_soon_days;let t=e.map(g=>this.hass.states[g]).filter(Boolean).map(g=>Me(g,r));const i=this._config.sort_by??m.sort_by;t=Dt(t,i),t=Ot(t,this._activeFilter);const o=e.map(g=>this.hass.states[g]).filter(Boolean).map(g=>Me(g,r)),n=this._config.view_mode??m.view_mode,c=this._config.progress_type??m.progress_type,a=this._config.show_header??m.show_header,h=this._config.show_filter_bar??m.show_filter_bar,_=this._config.title,u=this._columns();return l`
      <ha-card>
        ${_?l`
              <div class="card-header">
                <span class="card-title">${_}</span>
              </div>
            `:p}
        <div class="card-content">
          ${a?l`<hm-summary-header .tasks=${o}></hm-summary-header>`:p}
          ${h?this._renderFilterBar():p}
          ${t.length===0?l`
                <div class="empty">
                  <ha-icon icon="mdi:check-circle-outline"></ha-icon>
                  ${d("card.no_tasks")}
                </div>
              `:this._renderTasks(t,n,c,u)}
        </div>
      </ha-card>
    `}_renderFilterBar(){return l`
      <div class="filter-bar">
        ${["all","overdue","due_soon","on_track","snoozed"].map(r=>l`
            <button
              class="filter-chip ${this._activeFilter===r?"active":""}"
              @click=${()=>{this._activeFilter=r}}
            >
              ${d(`editor.${r}`)}
            </button>
          `)}
      </div>
    `}_renderTasks(e,r,t,i){const o=r==="list"?"task-list":r==="compact"?"task-compact":"task-grid",n=r==="grid"?`--hm-grid-columns:${i}`:"";return l`
      <div class="${o}" style="${n}">
        ${e.map(c=>l`
            <hm-task-tile
              .hass=${this.hass}
              .task=${c}
              .progressType=${t}
              .viewMode=${r}
            ></hm-task-tile>
          `)}
      </div>
    `}_columns(){return this._config?.columns??3}};S.styles=er,f([v({attribute:!1})],S.prototype,"hass",void 0),f([z()],S.prototype,"_config",void 0),f([z()],S.prototype,"_activeFilter",void 0),S=f([V(Ce)],S);var it;(function(s){s.language="language",s.system="system",s.comma_decimal="comma_decimal",s.decimal_comma="decimal_comma",s.space_comma="space_comma",s.none="none"})(it||(it={}));var st;(function(s){s.language="language",s.system="system",s.am_pm="12",s.twenty_four="24"})(st||(st={}));const Z=(s,e,r,t)=>{t=t||{},r=r??{};const i=new Event(e,{bubbles:t.bubbles===void 0?!0:t.bubbles,cancelable:!!t.cancelable,composed:t.composed===void 0?!0:t.composed});return i.detail=r,s.dispatchEvent(i),i};let U=class extends ${constructor(){super(...arguments),this._openSection="general"}setConfig(e){this._config={...e}}render(){return!this.hass||!this._config?l``:l`
      ${this._renderSection("general",d("editor.general"),this._renderGeneral())}
      ${this._renderSection("entities",d("editor.entities"),this._renderEntities())}
      ${this._renderSection("display",d("editor.display"),this._renderDisplay())}
      ${this._renderSection("features",d("editor.features"),this._renderFeatures())}
    `}_renderGeneral(){const e=this._config;return l`
      <ha-textfield
        .label=${d("editor.title")}
        .value=${e.title??""}
        .configValue=${"title"}
        @input=${this._valueChanged}
      ></ha-textfield>

      <ha-select
        .label=${d("editor.view_mode")}
        .value=${e.view_mode??m.view_mode}
        .configValue=${"view_mode"}
        .options=${[{value:"grid",label:d("editor.grid")},{value:"list",label:d("editor.list")},{value:"compact",label:d("editor.compact")}]}
        @selected=${this._selectChanged}
      ></ha-select>

      <ha-select
        .label=${d("editor.progress_type")}
        .value=${e.progress_type??m.progress_type}
        .configValue=${"progress_type"}
        .options=${[{value:"ring",label:d("editor.ring")},{value:"bar",label:d("editor.bar")}]}
        @selected=${this._selectChanged}
      ></ha-select>
    `}_renderEntities(){return l`
      <p style="color:var(--secondary-text-color);font-size:13px;margin:0 0 12px 0;">
        ${d("editor.auto_discover")}
      </p>
    `}_renderDisplay(){const e=this._config;return l`
      <ha-select
        .label=${d("editor.sort_by")}
        .value=${e.sort_by??m.sort_by}
        .configValue=${"sort_by"}
        .options=${[{value:"urgency",label:d("editor.urgency")},{value:"name",label:d("editor.name")},{value:"due_date",label:d("editor.due_date")}]}
        @selected=${this._selectChanged}
      ></ha-select>

      <ha-select
        .label=${d("editor.filter")}
        .value=${e.filter??m.filter}
        .configValue=${"filter"}
        .options=${[{value:"all",label:d("editor.all")},{value:"overdue",label:d("card.overdue")},{value:"due_soon",label:d("card.due_soon")},{value:"on_track",label:d("card.on_track")}]}
        @selected=${this._selectChanged}
      ></ha-select>

      <ha-textfield
        .label=${d("editor.columns")}
        type="number"
        min="1"
        max="6"
        .value=${String(e.columns??3)}
        .configValue=${"columns"}
        @input=${this._numChanged}
      ></ha-textfield>

      <ha-textfield
        .label=${d("editor.due_soon_days")}
        type="number"
        min="1"
        max="90"
        .value=${String(e.due_soon_days??m.due_soon_days)}
        .configValue=${"due_soon_days"}
        @input=${this._numChanged}
      ></ha-textfield>
    `}_renderFeatures(){const e=this._config;return l`
      <ha-formfield .label=${d("editor.show_header")}>
        <ha-switch
          .checked=${e.show_header??m.show_header}
          .configValue=${"show_header"}
          @change=${this._boolChanged}
        ></ha-switch>
      </ha-formfield>

      <ha-formfield .label=${d("editor.show_filter_bar")}>
        <ha-switch
          .checked=${e.show_filter_bar??m.show_filter_bar}
          .configValue=${"show_filter_bar"}
          @change=${this._boolChanged}
        ></ha-switch>
      </ha-formfield>
    `}_renderSection(e,r,t){const i=this._openSection===e;return l`
      <div class="accordion ${i?"accordion--open":""}">
        <button
          class="accordion__header"
          @click=${o=>{o.stopPropagation(),this._openSection=this._openSection===e?"":e}}
          aria-expanded=${i}
        >
          <span>${r}</span>
          <ha-icon .icon=${i?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
        </button>
        <div class="accordion__body">
          <div class="accordion__content">${t}</div>
        </div>
      </div>
    `}_selectChanged(e){if(!this._config)return;const t=e.target.configValue;if(!t)return;const i=e.detail?.value;i!==void 0&&this._config[t]!==i&&(this._config={...this._config,[t]:i===""?void 0:i},Z(this,"config-changed",{config:this._config}))}_valueChanged(e){if(!this._config)return;const r=e.target,t=r.configValue;if(!t)return;const i=r.value;this._config[t]!==i&&(this._config={...this._config,[t]:i===""?void 0:i},Z(this,"config-changed",{config:this._config}))}_numChanged(e){if(!this._config)return;const r=e.target,t=r.configValue;if(!t)return;const i=parseInt(r.value,10);isNaN(i)||this._config[t]!==i&&(this._config={...this._config,[t]:i},Z(this,"config-changed",{config:this._config}))}_boolChanged(e){if(!this._config)return;const r=e.target,t=r.configValue;t&&this._config[t]!==r.checked&&(this._config={...this._config,[t]:r.checked},Z(this,"config-changed",{config:this._config}))}static get styles(){return D`
      ha-select,
      ha-textfield {
        margin-bottom: 16px;
        display: block;
      }
      ha-formfield {
        display: block;
        padding: 8px 0;
      }
      .accordion {
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        margin-bottom: 8px;
        /* overflow: visible so ha-select dropdowns are not clipped */
      }
      .accordion__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 12px 16px;
        background: var(--secondary-background-color);
        border: none;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        color: var(--primary-text-color);
        text-align: left;
        transition: background 0.15s ease;
      }
      .accordion__header:hover {
        background: var(--divider-color);
      }
      .accordion--open .accordion__header {
        border-bottom: 1px solid var(--divider-color);
      }
      .accordion__body {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 0.25s ease;
      }
      .accordion--open .accordion__body {
        grid-template-rows: 1fr;
      }
      .accordion__content {
        min-height: 0;
        overflow: hidden;
        padding: 0 16px;
      }
      .accordion--open .accordion__content {
        overflow: visible;
        padding: 16px;
      }
    `}};f([v({attribute:!1})],U.prototype,"hass",void 0),f([z()],U.prototype,"_config",void 0),f([z()],U.prototype,"_openSection",void 0),U=f([V(Mt)],U);var tr=Object.freeze({__proto__:null,get UpkeepCardEditor(){return U}});export{S as HomeMaintenanceCard};
