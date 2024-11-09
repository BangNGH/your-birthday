const __vite__fileDeps=["assets/dotlottie-state-machine-manager-2E7RUGJG-NTQ25VSR-Cz6HA7Wv.js","assets/react-BXn1aEkb.js","assets/dotlottie-audio-75C54RUV-C4ThZgkY.js","assets/chunk-HDDX7F4A-DsTJlkT1.js","assets/lottie_worker-Q23FJ6ZR-YP5OKMTN-Dl7j5H7l.js","assets/lottie_light-KMJEUZFY-TNG7ODX7-Cz6KFPKl.js","assets/lottie_svg-MJGYILXD-NRTSROOT-Ci_7qTj4.js","assets/lottie_light_canvas-B5UTTNXA-PRI6IBWW-CV9yTcpO.js","assets/lottie_canvas-CDSUBMCL-MZNYH5VV-iWywsrJi.js","assets/lottie_light_html-SLCECTRT-SYWXEBDN-Bl2Og0kV.js","assets/lottie_html-X3TYKVQI-L6774NQS-DBjbmfli.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var Oo=Object.defineProperty;var Po=(e,t,i)=>t in e?Oo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var S=(e,t,i)=>(Po(e,typeof t!="symbol"?t+"":t,i),i);import{r as P,a as To,R as N}from"./react-BXn1aEkb.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=i(n);fetch(n.href,r)}})();var Fi={exports:{}},be={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mo=P,jo=Symbol.for("react.element"),No=Symbol.for("react.fragment"),zo=Object.prototype.hasOwnProperty,Uo=Mo.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Do={key:!0,ref:!0,__self:!0,__source:!0};function Vi(e,t,i){var o,n={},r=null,s=null;i!==void 0&&(r=""+i),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(s=t.ref);for(o in t)zo.call(t,o)&&!Do.hasOwnProperty(o)&&(n[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)n[o]===void 0&&(n[o]=t[o]);return{$$typeof:jo,type:e,key:r,ref:s,props:n,_owner:Uo.current}}be.Fragment=No;be.jsx=Vi;be.jsxs=Vi;Fi.exports=be;var x=Fi.exports,Ro={exports:{}};(function(e){var t=function(i){var o=Object.prototype,n=o.hasOwnProperty,r=Object.defineProperty||function(v,m,_){v[m]=_.value},s,l=typeof Symbol=="function"?Symbol:{},a=l.iterator||"@@iterator",d=l.asyncIterator||"@@asyncIterator",u=l.toStringTag||"@@toStringTag";function h(v,m,_){return Object.defineProperty(v,m,{value:_,enumerable:!0,configurable:!0,writable:!0}),v[m]}try{h({},"")}catch{h=function(m,_,E){return m[_]=E}}function c(v,m,_,E){var k=m&&m.prototype instanceof b?m:b,O=Object.create(k.prototype),R=new et(E||[]);return r(O,"_invoke",{value:U(v,_,R)}),O}i.wrap=c;function f(v,m,_){try{return{type:"normal",arg:v.call(m,_)}}catch(E){return{type:"throw",arg:E}}}var y="suspendedStart",p="suspendedYield",w="executing",g="completed",C={};function b(){}function A(){}function j(){}var D={};h(D,a,function(){return this});var I=Object.getPrototypeOf,$=I&&I(I(K([])));$&&$!==o&&n.call($,a)&&(D=$);var L=j.prototype=b.prototype=Object.create(D);A.prototype=j,r(L,"constructor",{value:j,configurable:!0}),r(j,"constructor",{value:A,configurable:!0}),A.displayName=h(j,u,"GeneratorFunction");function M(v){["next","throw","return"].forEach(function(m){h(v,m,function(_){return this._invoke(m,_)})})}i.isGeneratorFunction=function(v){var m=typeof v=="function"&&v.constructor;return m?m===A||(m.displayName||m.name)==="GeneratorFunction":!1},i.mark=function(v){return Object.setPrototypeOf?Object.setPrototypeOf(v,j):(v.__proto__=j,h(v,u,"GeneratorFunction")),v.prototype=Object.create(L),v},i.awrap=function(v){return{__await:v}};function T(v,m){function _(O,R,J,X){var Q=f(v[O],v,R);if(Q.type==="throw")X(Q.arg);else{var jt=Q.arg,Et=jt.value;return Et&&typeof Et=="object"&&n.call(Et,"__await")?m.resolve(Et.__await).then(function(gt){_("next",gt,J,X)},function(gt){_("throw",gt,J,X)}):m.resolve(Et).then(function(gt){jt.value=gt,J(jt)},function(gt){return _("throw",gt,J,X)})}}var E;function k(O,R){function J(){return new m(function(X,Q){_(O,R,X,Q)})}return E=E?E.then(J,J):J()}r(this,"_invoke",{value:k})}M(T.prototype),h(T.prototype,d,function(){return this}),i.AsyncIterator=T,i.async=function(v,m,_,E,k){k===void 0&&(k=Promise);var O=new T(c(v,m,_,E),k);return i.isGeneratorFunction(m)?O:O.next().then(function(R){return R.done?R.value:O.next()})};function U(v,m,_){var E=y;return function(O,R){if(E===w)throw new Error("Generator is already running");if(E===g){if(O==="throw")throw R;return st()}for(_.method=O,_.arg=R;;){var J=_.delegate;if(J){var X=H(J,_);if(X){if(X===C)continue;return X}}if(_.method==="next")_.sent=_._sent=_.arg;else if(_.method==="throw"){if(E===y)throw E=g,_.arg;_.dispatchException(_.arg)}else _.method==="return"&&_.abrupt("return",_.arg);E=w;var Q=f(v,m,_);if(Q.type==="normal"){if(E=_.done?g:p,Q.arg===C)continue;return{value:Q.arg,done:_.done}}else Q.type==="throw"&&(E=g,_.method="throw",_.arg=Q.arg)}}}function H(v,m){var _=m.method,E=v.iterator[_];if(E===s)return m.delegate=null,_==="throw"&&v.iterator.return&&(m.method="return",m.arg=s,H(v,m),m.method==="throw")||_!=="return"&&(m.method="throw",m.arg=new TypeError("The iterator does not provide a '"+_+"' method")),C;var k=f(E,v.iterator,m.arg);if(k.type==="throw")return m.method="throw",m.arg=k.arg,m.delegate=null,C;var O=k.arg;if(!O)return m.method="throw",m.arg=new TypeError("iterator result is not an object"),m.delegate=null,C;if(O.done)m[v.resultName]=O.value,m.next=v.nextLoc,m.method!=="return"&&(m.method="next",m.arg=s);else return O;return m.delegate=null,C}M(L),h(L,u,"Generator"),h(L,a,function(){return this}),h(L,"toString",function(){return"[object Generator]"});function W(v){var m={tryLoc:v[0]};1 in v&&(m.catchLoc=v[1]),2 in v&&(m.finallyLoc=v[2],m.afterLoc=v[3]),this.tryEntries.push(m)}function q(v){var m=v.completion||{};m.type="normal",delete m.arg,v.completion=m}function et(v){this.tryEntries=[{tryLoc:"root"}],v.forEach(W,this),this.reset(!0)}i.keys=function(v){var m=Object(v),_=[];for(var E in m)_.push(E);return _.reverse(),function k(){for(;_.length;){var O=_.pop();if(O in m)return k.value=O,k.done=!1,k}return k.done=!0,k}};function K(v){if(v!=null){var m=v[a];if(m)return m.call(v);if(typeof v.next=="function")return v;if(!isNaN(v.length)){var _=-1,E=function k(){for(;++_<v.length;)if(n.call(v,_))return k.value=v[_],k.done=!1,k;return k.value=s,k.done=!0,k};return E.next=E}}throw new TypeError(typeof v+" is not iterable")}i.values=K;function st(){return{value:s,done:!0}}return et.prototype={constructor:et,reset:function(v){if(this.prev=0,this.next=0,this.sent=this._sent=s,this.done=!1,this.delegate=null,this.method="next",this.arg=s,this.tryEntries.forEach(q),!v)for(var m in this)m.charAt(0)==="t"&&n.call(this,m)&&!isNaN(+m.slice(1))&&(this[m]=s)},stop:function(){this.done=!0;var v=this.tryEntries[0],m=v.completion;if(m.type==="throw")throw m.arg;return this.rval},dispatchException:function(v){if(this.done)throw v;var m=this;function _(X,Q){return O.type="throw",O.arg=v,m.next=X,Q&&(m.method="next",m.arg=s),!!Q}for(var E=this.tryEntries.length-1;E>=0;--E){var k=this.tryEntries[E],O=k.completion;if(k.tryLoc==="root")return _("end");if(k.tryLoc<=this.prev){var R=n.call(k,"catchLoc"),J=n.call(k,"finallyLoc");if(R&&J){if(this.prev<k.catchLoc)return _(k.catchLoc,!0);if(this.prev<k.finallyLoc)return _(k.finallyLoc)}else if(R){if(this.prev<k.catchLoc)return _(k.catchLoc,!0)}else if(J){if(this.prev<k.finallyLoc)return _(k.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(v,m){for(var _=this.tryEntries.length-1;_>=0;--_){var E=this.tryEntries[_];if(E.tryLoc<=this.prev&&n.call(E,"finallyLoc")&&this.prev<E.finallyLoc){var k=E;break}}k&&(v==="break"||v==="continue")&&k.tryLoc<=m&&m<=k.finallyLoc&&(k=null);var O=k?k.completion:{};return O.type=v,O.arg=m,k?(this.method="next",this.next=k.finallyLoc,C):this.complete(O)},complete:function(v,m){if(v.type==="throw")throw v.arg;return v.type==="break"||v.type==="continue"?this.next=v.arg:v.type==="return"?(this.rval=this.arg=v.arg,this.method="return",this.next="end"):v.type==="normal"&&m&&(this.next=m),C},finish:function(v){for(var m=this.tryEntries.length-1;m>=0;--m){var _=this.tryEntries[m];if(_.finallyLoc===v)return this.complete(_.completion,_.afterLoc),q(_),C}},catch:function(v){for(var m=this.tryEntries.length-1;m>=0;--m){var _=this.tryEntries[m];if(_.tryLoc===v){var E=_.completion;if(E.type==="throw"){var k=E.arg;q(_)}return k}}throw new Error("illegal catch attempt")},delegateYield:function(v,m,_){return this.delegate={iterator:K(v),resultName:m,nextLoc:_},this.method==="next"&&(this.arg=s),C}},i}(e.exports);try{regeneratorRuntime=t}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}})(Ro);var De={},pi=To;De.createRoot=pi.createRoot,De.hydrateRoot=pi.hydrateRoot;var le=window,Qe=le.ShadowRoot&&(le.ShadyCSS===void 0||le.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ti=Symbol(),fi=new WeakMap,Hi=class{constructor(t,i,o){if(this._$cssResult$=!0,o!==ti)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o,i=this.t;if(Qe&&t===void 0){let o=i!==void 0&&i.length===1;o&&(t=fi.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&fi.set(i,t))}return t}toString(){return this.cssText}},Bo=e=>new Hi(typeof e=="string"?e:e+"",void 0,ti),Fo=(e,...t)=>{let i=e.length===1?e[0]:t.reduce((o,n,r)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[r+1],e[0]);return new Hi(i,e,ti)},Vo=(e,t)=>{Qe?e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):t.forEach(i=>{let o=document.createElement("style"),n=le.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=i.cssText,e.appendChild(o)})},mi=Qe?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(let o of t.cssRules)i+=o.cssText;return Bo(i)})(e):e,Ee,ce=window,vi=ce.trustedTypes,Ho=vi?vi.emptyScript:"",yi=ce.reactiveElementPolyfillSupport,Re={toAttribute(e,t){switch(t){case Boolean:e=e?Ho:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},qi=(e,t)=>t!==e&&(t==t||e==e),xe={attribute:!0,type:String,converter:Re,reflect:!1,hasChanged:qi},Be="finalized",zt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var i;this.finalize(),((i=this.h)!==null&&i!==void 0?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((i,o)=>{let n=this._$Ep(o,i);n!==void 0&&(this._$Ev.set(n,o),t.push(n))}),t}static createProperty(t,i=xe){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){let o=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,o,i);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,i,o){return{get(){return this[i]},set(n){let r=this[t];this[i]=n,this.requestUpdate(t,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||xe}static finalize(){if(this.hasOwnProperty(Be))return!1;this[Be]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let i=this.properties,o=[...Object.getOwnPropertyNames(i),...Object.getOwnPropertySymbols(i)];for(let n of o)this.createProperty(n,i[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let i=[];if(Array.isArray(t)){let o=new Set(t.flat(1/0).reverse());for(let n of o)i.unshift(mi(n))}else t!==void 0&&i.push(mi(t));return i}static _$Ep(t,i){let o=i.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(i=>i(this))}addController(t){var i,o;((i=this._$ES)!==null&&i!==void 0?i:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var i;(i=this._$ES)===null||i===void 0||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])})}createRenderRoot(){var t;let i=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Vo(i,this.constructor.elementStyles),i}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostConnected)===null||o===void 0?void 0:o.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostDisconnected)===null||o===void 0?void 0:o.call(i)})}attributeChangedCallback(t,i,o){this._$AK(t,o)}_$EO(t,i,o=xe){var n;let r=this.constructor._$Ep(t,o);if(r!==void 0&&o.reflect===!0){let s=(((n=o.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?o.converter:Re).toAttribute(i,o.type);this._$El=t,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$El=null}}_$AK(t,i){var o;let n=this.constructor,r=n._$Ev.get(t);if(r!==void 0&&this._$El!==r){let s=n.getPropertyOptions(r),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?s.converter:Re;this._$El=r,this[r]=l.fromAttribute(i,s.type),this._$El=null}}requestUpdate(t,i,o){let n=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||qi)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(i){Promise.reject(i)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,r)=>this[r]=n),this._$Ei=void 0);let i=!1,o=this._$AL;try{i=this.shouldUpdate(o),i?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdate)===null||r===void 0?void 0:r.call(n)}),this.update(o)):this._$Ek()}catch(n){throw i=!1,this._$Ek(),n}i&&this._$AE(o)}willUpdate(t){}_$AE(t){var i;(i=this._$ES)===null||i===void 0||i.forEach(o=>{var n;return(n=o.hostUpdated)===null||n===void 0?void 0:n.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((i,o)=>this._$EO(o,this[o],i)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};zt[Be]=!0,zt.elementProperties=new Map,zt.elementStyles=[],zt.shadowRootOptions={mode:"open"},yi==null||yi({ReactiveElement:zt}),((Ee=ce.reactiveElementVersions)!==null&&Ee!==void 0?Ee:ce.reactiveElementVersions=[]).push("1.6.3");var Ae,pe=window,Bt=pe.trustedTypes,gi=Bt?Bt.createPolicy("lit-html",{createHTML:e=>e}):void 0,Fe="$lit$",St=`lit$${(Math.random()+"").slice(9)}$`,Wi="?"+St,qo=`<${Wi}>`,Pt=document,Kt=()=>Pt.createComment(""),Xt=e=>e===null||typeof e!="object"&&typeof e!="function",Ji=Array.isArray,Wo=e=>Ji(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Ie=`[ 	
\f\r]`,qt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_i=/-->/g,bi=/>/g,xt=RegExp(`>|${Ie}(?:([^\\s"'>=/]+)(${Ie}*=${Ie}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wi=/'/g,Ci=/"/g,Zi=/^(?:script|style|textarea|title)$/i,Jo=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),z=Jo(1),Ft=Symbol.for("lit-noChange"),ot=Symbol.for("lit-nothing"),Li=new WeakMap,At=Pt.createTreeWalker(Pt,129,null,!1);function Gi(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return gi!==void 0?gi.createHTML(t):t}var Zo=(e,t)=>{let i=e.length-1,o=[],n,r=t===2?"<svg>":"",s=qt;for(let l=0;l<i;l++){let a=e[l],d,u,h=-1,c=0;for(;c<a.length&&(s.lastIndex=c,u=s.exec(a),u!==null);)c=s.lastIndex,s===qt?u[1]==="!--"?s=_i:u[1]!==void 0?s=bi:u[2]!==void 0?(Zi.test(u[2])&&(n=RegExp("</"+u[2],"g")),s=xt):u[3]!==void 0&&(s=xt):s===xt?u[0]===">"?(s=n??qt,h=-1):u[1]===void 0?h=-2:(h=s.lastIndex-u[2].length,d=u[1],s=u[3]===void 0?xt:u[3]==='"'?Ci:wi):s===Ci||s===wi?s=xt:s===_i||s===bi?s=qt:(s=xt,n=void 0);let f=s===xt&&e[l+1].startsWith("/>")?" ":"";r+=s===qt?a+qo:h>=0?(o.push(d),a.slice(0,h)+Fe+a.slice(h)+St+f):a+St+(h===-2?(o.push(void 0),l):f)}return[Gi(e,r+(e[i]||"<?>")+(t===2?"</svg>":"")),o]},Ve=class Ki{constructor({strings:t,_$litType$:i},o){let n;this.parts=[];let r=0,s=0,l=t.length-1,a=this.parts,[d,u]=Zo(t,i);if(this.el=Ki.createElement(d,o),At.currentNode=this.el.content,i===2){let h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(n=At.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes()){let h=[];for(let c of n.getAttributeNames())if(c.endsWith(Fe)||c.startsWith(St)){let f=u[s++];if(h.push(c),f!==void 0){let y=n.getAttribute(f.toLowerCase()+Fe).split(St),p=/([.?@])?(.*)/.exec(f);a.push({type:1,index:r,name:p[2],strings:y,ctor:p[1]==="."?Ko:p[1]==="?"?Yo:p[1]==="@"?Qo:we})}else a.push({type:6,index:r})}for(let c of h)n.removeAttribute(c)}if(Zi.test(n.tagName)){let h=n.textContent.split(St),c=h.length-1;if(c>0){n.textContent=Bt?Bt.emptyScript:"";for(let f=0;f<c;f++)n.append(h[f],Kt()),At.nextNode(),a.push({type:2,index:++r});n.append(h[c],Kt())}}}else if(n.nodeType===8)if(n.data===Wi)a.push({type:2,index:r});else{let h=-1;for(;(h=n.data.indexOf(St,h+1))!==-1;)a.push({type:7,index:r}),h+=St.length-1}r++}}static createElement(t,i){let o=Pt.createElement("template");return o.innerHTML=t,o}};function Vt(e,t,i=e,o){var n,r,s,l;if(t===Ft)return t;let a=o!==void 0?(n=i._$Co)===null||n===void 0?void 0:n[o]:i._$Cl,d=Xt(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==d&&((r=a==null?void 0:a._$AO)===null||r===void 0||r.call(a,!1),d===void 0?a=void 0:(a=new d(e),a._$AT(e,i,o)),o!==void 0?((s=(l=i)._$Co)!==null&&s!==void 0?s:l._$Co=[])[o]=a:i._$Cl=a),a!==void 0&&(t=Vt(e,a._$AS(e,t.values),a,o)),t}var Go=class{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;let{el:{content:o},parts:n}=this._$AD,r=((i=t==null?void 0:t.creationScope)!==null&&i!==void 0?i:Pt).importNode(o,!0);At.currentNode=r;let s=At.nextNode(),l=0,a=0,d=n[0];for(;d!==void 0;){if(l===d.index){let u;d.type===2?u=new ei(s,s.nextSibling,this,t):d.type===1?u=new d.ctor(s,d.name,d.strings,this,t):d.type===6&&(u=new tn(s,this,t)),this._$AV.push(u),d=n[++a]}l!==(d==null?void 0:d.index)&&(s=At.nextNode(),l++)}return At.currentNode=Pt,r}v(t){let i=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,i),i+=o.strings.length-2):o._$AI(t[i])),i++}},ei=class Xi{constructor(t,i,o,n){var r;this.type=2,this._$AH=ot,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=o,this.options=n,this._$Cp=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var t,i;return(i=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&i!==void 0?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode,i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=Vt(this,t,i),Xt(t)?t===ot||t==null||t===""?(this._$AH!==ot&&this._$AR(),this._$AH=ot):t!==this._$AH&&t!==Ft&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Wo(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==ot&&Xt(this._$AH)?this._$AA.nextSibling.data=t:this.$(Pt.createTextNode(t)),this._$AH=t}g(t){var i;let{values:o,_$litType$:n}=t,r=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Ve.createElement(Gi(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===r)this._$AH.v(o);else{let s=new Go(r,this),l=s.u(this.options);s.v(o),this.$(l),this._$AH=s}}_$AC(t){let i=Li.get(t.strings);return i===void 0&&Li.set(t.strings,i=new Ve(t)),i}T(t){Ji(this._$AH)||(this._$AH=[],this._$AR());let i=this._$AH,o,n=0;for(let r of t)n===i.length?i.push(o=new Xi(this.k(Kt()),this.k(Kt()),this,this.options)):o=i[n],o._$AI(r),n++;n<i.length&&(this._$AR(o&&o._$AB.nextSibling,n),i.length=n)}_$AR(t=this._$AA.nextSibling,i){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,i);t&&t!==this._$AB;){let n=t.nextSibling;t.remove(),t=n}}setConnected(t){var i;this._$AM===void 0&&(this._$Cp=t,(i=this._$AP)===null||i===void 0||i.call(this,t))}},we=class{constructor(t,i,o,n,r){this.type=1,this._$AH=ot,this._$AN=void 0,this.element=t,this.name=i,this._$AM=n,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=ot}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,o,n){let r=this.strings,s=!1;if(r===void 0)t=Vt(this,t,i,0),s=!Xt(t)||t!==this._$AH&&t!==Ft,s&&(this._$AH=t);else{let l=t,a,d;for(t=r[0],a=0;a<r.length-1;a++)d=Vt(this,l[o+a],i,a),d===Ft&&(d=this._$AH[a]),s||(s=!Xt(d)||d!==this._$AH[a]),d===ot?t=ot:t!==ot&&(t+=(d??"")+r[a+1]),this._$AH[a]=d}s&&!n&&this.j(t)}j(t){t===ot?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ko=class extends we{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ot?void 0:t}},Xo=Bt?Bt.emptyScript:"",Yo=class extends we{constructor(){super(...arguments),this.type=4}j(t){t&&t!==ot?this.element.setAttribute(this.name,Xo):this.element.removeAttribute(this.name)}},Qo=class extends we{constructor(t,i,o,n,r){super(t,i,o,n,r),this.type=5}_$AI(t,i=this){var o;if((t=(o=Vt(this,t,i,0))!==null&&o!==void 0?o:ot)===Ft)return;let n=this._$AH,r=t===ot&&n!==ot||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==ot&&(n===ot||r);r&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,o;typeof this._$AH=="function"?this._$AH.call((o=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}},tn=class{constructor(t,i,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){Vt(this,t)}},Si=pe.litHtmlPolyfillSupport;Si==null||Si(Ve,ei),((Ae=pe.litHtmlVersions)!==null&&Ae!==void 0?Ae:pe.litHtmlVersions=[]).push("2.8.0");var en=(e,t,i)=>{var o,n;let r=(o=i==null?void 0:i.renderBefore)!==null&&o!==void 0?o:t,s=r._$litPart$;if(s===void 0){let l=(n=i==null?void 0:i.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=s=new ei(t.insertBefore(Kt(),l),l,void 0,i??{})}return s._$AI(e),s},Oe,Pe,Wt=class extends zt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;let o=super.createRenderRoot();return(t=(i=this.renderOptions).renderBefore)!==null&&t!==void 0||(i.renderBefore=o.firstChild),o}update(t){let i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=en(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Ft}};Wt.finalized=!0,Wt._$litElement$=!0,(Oe=globalThis.litElementHydrateSupport)===null||Oe===void 0||Oe.call(globalThis,{LitElement:Wt});var $i=globalThis.litElementPolyfillSupport;$i==null||$i({LitElement:Wt});((Pe=globalThis.litElementVersions)!==null&&Pe!==void 0?Pe:globalThis.litElementVersions=[]).push("3.3.3");var on=Fo`
  @font-face {
    font-family: 'Karla';
    font-weight: regular;
    src: url('./fonts/Karla-regular.woff') format('woff');
  }

  :host {
    --lottie-player-toolbar-height: 35px;
    --lottie-player-toolbar-background-color: transparent;
    --lottie-player-toolbar-hover-background-color: #f3f6f8;
    --lottie-player-toolbar-icon-color: #20272c;
    --lottie-player-toolbar-icon-hover-color: #f3f6f8;
    --lottie-player-toolbar-icon-active-color: #00ddb3;
    --lottie-player-seeker-track-color: #00ddb3;
    --lottie-player-seeker-accent-color: #00c1a2;
    --lottie-player-seeker-thumb-color: #00c1a2;
    --lottie-player-options-separator: #d9e0e6;

    display: block;
    width: 100%;
    height: 100%;

    font-family: 'Karla', sans-serif;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host * {
    box-sizing: border-box;
  }

  .active {
    color: var(--lottie-player-toolbar-icon-active-color) !important;
  }

  .main {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .animation {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
  }
  .animation.controls {
    height: calc(100% - var(--lottie-player-toolbar-height));
  }

  .toolbar {
    display: flex;
    align-items: center;
    justify-items: center;
    background-color: var(--lottie-player-toolbar-background-color);
    margin: 0 8px;
    height: var(--lottie-player-toolbar-height);
  }

  .btn-spacing-left {
    margin-right: 4px;
    margin-left: 8px;
  }

  .btn-spacing-center {
    margin-right: 4px;
    margin-left: 4px;
  }

  .btn-spacing-right {
    margin-right: 8px;
    margin-left: 4px;
  }

  .toolbar button {
    color: #20272c;
    cursor: pointer;
    fill: var(--lottie-player-toolbar-icon-color);
    display: flex;
    background: none;
    border: 0px;
    border-radius: 4px;
    padding: 4px;
    outline: none;
    width: 24px;
    height: 24px;
    align-items: center;
  }

  .toolbar button:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
    border-style: solid;
    border-radius: 2px;
  }

  .toolbar button.active {
    fill: var(--lottie-player-toolbar-icon-active-color);
  }

  .toolbar button.active:hover {
    fill: var(--lottie-player-toolbar-icon-hover-color);
    border-radius: 4px;
  }

  .toolbar button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .toolbar button svg {
    width: 16px;
    height: 16px;
  }

  .toolbar button.disabled svg {
    display: none;
  }

  .popover {
    position: absolute;
    bottom: 40px;
    left: calc(100% - 239px);
    width: 224px;
    min-height: 84px;
    max-height: 300px;
    background-color: #ffffff;
    box-shadow: 0px 8px 48px 0px rgba(243, 246, 248, 0.15), 0px 8px 16px 0px rgba(61, 72, 83, 0.16),
      0px 0px 1px 0px rgba(61, 72, 83, 0.36);
    border-radius: 8px;
    padding: 8px;
    z-index: 100;
    overflow-y: scroll;
    scrollbar-width: none;
  }
  .popover:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .popover::-webkit-scrollbar {
    width: 0px;
  }

  .popover-button {
    background: none;
    border: none;
    font-family: inherit;
    width: 100%;
    flex-direction: row;
    cursor: pointer;
    height: 32px;
    color: #20272c;
    justify-content: space-between;
    display: flex;
    padding: 4px 8px;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    border-radius: 4px;
  }

  .popover-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .popover-button:hover {
    background-color: var(--lottie-player-toolbar-hover-background-color);
  }

  .popover-button-text {
    display: flex;
    color: #20272c;
    flex-direction: column;
    align-self: stretch;
    justify-content: center;
    font-family: inherit;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.28px;
  }

  .reset-btn {
    font-size: 12px;
    cursor: pointer;
    font-family: inherit;
    background: none;
    border: none;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #63727e;
    padding: 0;
    width: 31px;
    height: 18px;
  }
  .reset-btn:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }
  .reset-btn:hover {
    color: #20272c;
  }

  .option-title-button {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 32px;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    cursor: pointer;
    color: var(--lottie-player-toolbar-icon-color);
    border: none;
    background: none;
    padding: 4px;
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.32px;
  }
  .option-title-button.themes {
    width: auto;
    padding: 0;
  }
  .option-title-button:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
  }

  .option-title-themes-row {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
  }
  .option-title-themes-row:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
  }

  .option-title-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .option-title-text {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.32px;
  }

  .option-title-separator {
    margin: 8px -8px;
    border-bottom: 1px solid var(--lottie-player-options-separator);
  }

  .option-title-chevron {
    display: flex;
    padding: 4px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .option-row {
    display: flex;
    flex-direction: column;
  }
  .option-row > ul {
    padding: 0;
    margin: 0;
  }

  .option-button {
    width: 100%;
    background: none;
    border: none;
    font-family: inherit;
    display: flex;
    padding: 4px 8px;
    color: #20272c;
    overflow: hidden;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    cursor: pointer;
    height: 32px;
    font-family: inherit;
    font-size: 14px;
    border-radius: 4px;
  }
  .option-button:hover {
    background-color: var(--lottie-player-toolbar-hover-background-color);
  }
  .option-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .option-tick {
    display: flex;
    width: 24px;
    height: 24px;
    align-items: flex-start;
    gap: 8px;
  }

  .seeker {
    height: 4px;
    width: 95%;
    outline: none;
    -webkit-appearance: none;
    -moz-apperance: none;
    border-radius: 9999px;
    cursor: pointer;
    background-image: linear-gradient(
      to right,
      rgb(0, 221, 179) calc(var(--seeker) * 1%),
      rgb(217, 224, 230) calc(var(--seeker) * 1%)
    );
  }
  .seeker.to-left {
    background-image: linear-gradient(
      to right,
      rgb(217, 224, 230) calc(var(--seeker) * 1%),
      rgb(0, 221, 179) calc(var(--seeker) * 1%)
    );
  }
  .seeker::-webkit-slider-runnable-track:focus-visible {
    color: #f07167;
    accent-color: #00ddb3;
  }

  .seeker::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
  }
  .seeker::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--lottie-player-seeker-thumb-color);
    cursor: pointer;
    margin-top: -5px;
  }
  .seeker:focus-visible::-webkit-slider-thumb {
    background: var(--lottie-player-seeker-thumb-color);
    outline: 2px solid var(--lottie-player-seeker-track-color);
    border: 1.5px solid #ffffff;
  }
  .seeker::-webkit-slider-thumb:hover {
    background: #019d91;
  }
  .seeker::-moz-range-thumb {
    appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--lottie-player-seeker-thumb-color);
    cursor: pointer;
    margin-top: -5px;
    border-color: transparent;
  }
  .seeker:focus-visible::-moz-range-thumb {
    background: var(--lottie-player-seeker-thumb-color);
    outline: 2px solid var(--lottie-player-seeker-track-color);
    border: 1.5px solid #ffffff;
  }

  .error {
    display: flex;
    justify-content: center;
    margin: auto;
    height: 100%;
    align-items: center;
  }
`;/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/const nn="modulepreload",rn=function(e){return"/"+e},ki={},Ct=function(t,i,o){let n=Promise.resolve();if(i&&i.length>0){const r=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=Promise.all(i.map(a=>{if(a=rn(a),a in ki)return;ki[a]=!0;const d=a.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(!!o)for(let f=r.length-1;f>=0;f--){const y=r[f];if(y.href===a&&(!d||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${u}`))return;const c=document.createElement("link");if(c.rel=d?"stylesheet":nn,d||(c.as="script",c.crossOrigin=""),c.href=a,l&&c.setAttribute("nonce",l),document.head.appendChild(c),d)return new Promise((f,y)=>{c.addEventListener("load",f),c.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${a}`)))})}))}return n.then(()=>t()).catch(r=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=r,window.dispatchEvent(s),!s.defaultPrevented)throw r})};var Ei={},sn=function(e,t,i,o,n){var r=new Worker(Ei[t]||(Ei[t]=URL.createObjectURL(new Blob([e+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return r.onmessage=function(s){var l=s.data,a=l.$e$;if(a){var d=new Error(a[0]);d.code=a[1],d.stack=a[2],n(d,null)}else n(null,l)},r.postMessage(i,o),r},lt=Uint8Array,It=Uint16Array,Yi=Int32Array,ii=new lt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),oi=new lt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Qi=new lt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),to=function(e,t){for(var i=new It(31),o=0;o<31;++o)i[o]=t+=1<<e[o-1];for(var n=new Yi(i[30]),o=1;o<30;++o)for(var r=i[o];r<i[o+1];++r)n[r]=r-i[o]<<5|o;return{b:i,r:n}},eo=to(ii,2),ni=eo.b,an=eo.r;ni[28]=258,an[258]=28;var ln=to(oi,0),io=ln.b,fe=new It(32768);for(F=0;F<32768;++F)wt=(F&43690)>>1|(F&21845)<<1,wt=(wt&52428)>>2|(wt&13107)<<2,wt=(wt&61680)>>4|(wt&3855)<<4,fe[F]=((wt&65280)>>8|(wt&255)<<8)>>1;var wt,F,Dt=function(e,t,i){for(var o=e.length,n=0,r=new It(t);n<o;++n)e[n]&&++r[e[n]-1];var s=new It(t);for(n=1;n<t;++n)s[n]=s[n-1]+r[n-1]<<1;var l;if(i){l=new It(1<<t);var a=15-t;for(n=0;n<o;++n)if(e[n])for(var d=n<<4|e[n],u=t-e[n],h=s[e[n]-1]++<<u,c=h|(1<<u)-1;h<=c;++h)l[fe[h]>>a]=d}else for(l=new It(o),n=0;n<o;++n)e[n]&&(l[n]=fe[s[e[n]-1]++]>>15-e[n]);return l},te=new lt(288);for(F=0;F<144;++F)te[F]=8;var F;for(F=144;F<256;++F)te[F]=9;var F;for(F=256;F<280;++F)te[F]=7;var F;for(F=280;F<288;++F)te[F]=8;var F,oo=new lt(32);for(F=0;F<32;++F)oo[F]=5;var F,no=Dt(te,9,1),ro=Dt(oo,5,1),de=function(e){for(var t=e[0],i=1;i<e.length;++i)e[i]>t&&(t=e[i]);return t},pt=function(e,t,i){var o=t/8|0;return(e[o]|e[o+1]<<8)>>(t&7)&i},he=function(e,t){var i=t/8|0;return(e[i]|e[i+1]<<8|e[i+2]<<16)>>(t&7)},so=function(e){return(e+7)/8|0},Ce=function(e,t,i){return(t==null||t<0)&&(t=0),(i==null||i>e.length)&&(i=e.length),new lt(e.subarray(t,i))},ao=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],at=function(e,t,i){var o=new Error(t||ao[e]);if(o.code=e,Error.captureStackTrace&&Error.captureStackTrace(o,at),!i)throw o;return o},lo=function(e,t,i,o){var n=e.length,r=o?o.length:0;if(!n||t.f&&!t.l)return i||new lt(0);var s=!i,l=s||t.i!=2,a=t.i;s&&(i=new lt(n*3));var d=function(gt){var ui=i.length;if(gt>ui){var ci=new lt(Math.max(ui*2,gt));ci.set(i),i=ci}},u=t.f||0,h=t.p||0,c=t.b||0,f=t.l,y=t.d,p=t.m,w=t.n,g=n*8;do{if(!f){u=pt(e,h,1);var C=pt(e,h+1,3);if(h+=3,C)if(C==1)f=no,y=ro,p=9,w=5;else if(C==2){var b=pt(e,h,31)+257,A=pt(e,h+10,15)+4,j=b+pt(e,h+5,31)+1;h+=14;for(var D=new lt(j),I=new lt(19),$=0;$<A;++$)I[Qi[$]]=pt(e,h+$*3,7);h+=A*3;for(var L=de(I),M=(1<<L)-1,T=Dt(I,L,1),$=0;$<j;){var U=T[pt(e,h,M)];h+=U&15;var H=U>>4;if(H<16)D[$++]=H;else{var W=0,q=0;for(H==16?(q=3+pt(e,h,3),h+=2,W=D[$-1]):H==17?(q=3+pt(e,h,7),h+=3):H==18&&(q=11+pt(e,h,127),h+=7);q--;)D[$++]=W}}var et=D.subarray(0,b),K=D.subarray(b);p=de(et),w=de(K),f=Dt(et,p,1),y=Dt(K,w,1)}else at(1);else{var H=so(h)+4,st=e[H-4]|e[H-3]<<8,v=H+st;if(v>n){a&&at(0);break}l&&d(c+st),i.set(e.subarray(H,v),c),t.b=c+=st,t.p=h=v*8,t.f=u;continue}if(h>g){a&&at(0);break}}l&&d(c+131072);for(var m=(1<<p)-1,_=(1<<w)-1,E=h;;E=h){var W=f[he(e,h)&m],k=W>>4;if(h+=W&15,h>g){a&&at(0);break}if(W||at(2),k<256)i[c++]=k;else if(k==256){E=h,f=null;break}else{var O=k-254;if(k>264){var $=k-257,R=ii[$];O=pt(e,h,(1<<R)-1)+ni[$],h+=R}var J=y[he(e,h)&_],X=J>>4;J||at(3),h+=J&15;var K=io[X];if(X>3){var R=oi[X];K+=he(e,h)&(1<<R)-1,h+=R}if(h>g){a&&at(0);break}l&&d(c+131072);var Q=c+O;if(c<K){var jt=r-K,Et=Math.min(K,Q);for(jt+c<0&&at(3);c<Et;++c)i[c]=o[jt+c]}for(;c<Q;++c)i[c]=i[c-K]}}t.l=f,t.p=E,t.b=c,t.f=u,f&&(u=1,t.m=p,t.d=y,t.n=w)}while(!u);return c!=i.length&&s?Ce(i,0,c):i.subarray(0,c)},dn=new lt(0),hn=function(e,t){var i={};for(var o in e)i[o]=e[o];for(var o in t)i[o]=t[o];return i},xi=function(e,t,i){for(var o=e(),n=e.toString(),r=n.slice(n.indexOf("[")+1,n.lastIndexOf("]")).replace(/\s+/g,"").split(","),s=0;s<o.length;++s){var l=o[s],a=r[s];if(typeof l=="function"){t+=";"+a+"=";var d=l.toString();if(l.prototype)if(d.indexOf("[native code]")!=-1){var u=d.indexOf(" ",8)+1;t+=d.slice(u,d.indexOf("(",u))}else{t+=d;for(var h in l.prototype)t+=";"+a+".prototype."+h+"="+l.prototype[h].toString()}else t+=d}else i[a]=l}return t},re=[],un=function(e){var t=[];for(var i in e)e[i].buffer&&t.push((e[i]=new e[i].constructor(e[i])).buffer);return t},cn=function(e,t,i,o){if(!re[i]){for(var n="",r={},s=e.length-1,l=0;l<s;++l)n=xi(e[l],n,r);re[i]={c:xi(e[s],n,r),e:r}}var a=hn({},re[i].e);return sn(re[i].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+t.toString()+"}",i,a,un(a),o)},pn=function(){return[lt,It,Yi,ii,oi,Qi,ni,io,no,ro,fe,ao,Dt,de,pt,he,so,Ce,at,lo,ri,ho,uo]},ho=function(e){return postMessage(e,[e.buffer])},uo=function(e){return e&&{out:e.size&&new lt(e.size),dictionary:e.dictionary}},fn=function(e,t,i,o,n,r){var s=cn(i,o,n,function(l,a){s.terminate(),r(l,a)});return s.postMessage([e,t],t.consume?[e.buffer]:[]),function(){s.terminate()}},_t=function(e,t){return e[t]|e[t+1]<<8},mt=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},Te=function(e,t){return mt(e,t)+mt(e,t+4)*4294967296};function mn(e,t,i){return i||(i=t,t={}),typeof i!="function"&&at(7),fn(e,t,[pn],function(o){return ho(ri(o.data[0],uo(o.data[1])))},1,i)}function ri(e,t){return lo(e,{i:2},t&&t.out,t&&t.dictionary)}var He=typeof TextDecoder<"u"&&new TextDecoder,vn=0;try{He.decode(dn,{stream:!0}),vn=1}catch{}var yn=function(e){for(var t="",i=0;;){var o=e[i++],n=(o>127)+(o>223)+(o>239);if(i+n>e.length)return{s:t,r:Ce(e,i-1)};n?n==3?(o=((o&15)<<18|(e[i++]&63)<<12|(e[i++]&63)<<6|e[i++]&63)-65536,t+=String.fromCharCode(55296|o>>10,56320|o&1023)):n&1?t+=String.fromCharCode((o&31)<<6|e[i++]&63):t+=String.fromCharCode((o&15)<<12|(e[i++]&63)<<6|e[i++]&63):t+=String.fromCharCode(o)}};function Ht(e,t){if(t){for(var i="",o=0;o<e.length;o+=16384)i+=String.fromCharCode.apply(null,e.subarray(o,o+16384));return i}else{if(He)return He.decode(e);var n=yn(e),r=n.s,i=n.r;return i.length&&at(8),r}}var gn=function(e,t){return t+30+_t(e,t+26)+_t(e,t+28)},_n=function(e,t,i){var o=_t(e,t+28),n=Ht(e.subarray(t+46,t+46+o),!(_t(e,t+8)&2048)),r=t+46+o,s=mt(e,t+20),l=i&&s==4294967295?bn(e,r):[s,mt(e,t+24),mt(e,t+42)],a=l[0],d=l[1],u=l[2];return[_t(e,t+10),a,d,n,r+_t(e,t+30)+_t(e,t+32),u]},bn=function(e,t){for(;_t(e,t)!=1;t+=4+_t(e,t+2));return[Te(e,t+12),Te(e,t+4),Te(e,t+20)]},Ai=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function wn(e,t,i){i||(i=t,t={}),typeof i!="function"&&at(7);var o=[],n=function(){for(var w=0;w<o.length;++w)o[w]()},r={},s=function(w,g){Ai(function(){i(w,g)})};Ai(function(){s=i});for(var l=e.length-22;mt(e,l)!=101010256;--l)if(!l||e.length-l>65558)return s(at(13,0,1),null),n;var a=_t(e,l+8);if(a){var d=a,u=mt(e,l+16),h=u==4294967295||d==65535;if(h){var c=mt(e,l-12);h=mt(e,c)==101075792,h&&(d=a=mt(e,c+32),u=mt(e,c+48))}for(var f=t&&t.filter,y=function(w){var g=_n(e,u,h),C=g[0],b=g[1],A=g[2],j=g[3],D=g[4],I=g[5],$=gn(e,I);u=D;var L=function(T,U){T?(n(),s(T,null)):(U&&(r[j]=U),--a||s(null,r))};if(!f||f({name:j,size:b,originalSize:A,compression:C}))if(!C)L(null,Ce(e,$,$+b));else if(C==8){var M=e.subarray($,$+b);if(b<32e4)try{L(null,ri(M,{out:new lt(A)}))}catch(T){L(T,null)}else o.push(mn(M,{size:A},L))}else L(at(14,"unknown compression type "+C,1),null);else L(null,null)},p=0;p<d;++p)y(p)}else s(null,{});return n}function Cn(e){return(Array.isArray(e)?e:e.issues).reduce((t,i)=>{if(i.path){let o=i.path.map(({key:n})=>n).join(".");t.nested[o]=[...t.nested[o]||[],i.message]}else t.root=[...t.root||[],i.message];return t},{nested:{}})}var Ln=class extends Error{constructor(t){super(t[0].message);S(this,"issues");this.name="ValiError",this.issues=t}};function Sn(e,t){return{reason:e==null?void 0:e.reason,validation:t.validation,origin:(e==null?void 0:e.origin)||"value",message:t.message,input:t.input,abortEarly:e==null?void 0:e.abortEarly,abortPipeEarly:e==null?void 0:e.abortPipeEarly}}function $n(e,t){return{reason:t,origin:e==null?void 0:e.origin,abortEarly:e==null?void 0:e.abortEarly,abortPipeEarly:e==null?void 0:e.abortPipeEarly}}function kt(e,t,i,o){if(!t||!t.length)return{output:e};let n,r,s=e;for(let l of t){let a=l(s);if(a.issue){n=n||$n(i,o);let d=Sn(n,a.issue);if(r?r.push(d):r=[d],n.abortEarly||n.abortPipeEarly)break}else s=a.output}return r?{issues:r}:{output:s}}function yt(e,t){return!e||typeof e=="string"?[e,t]:[void 0,e]}function bt(e,t,i,o,n,r){return{issues:[{reason:t,validation:i,origin:(e==null?void 0:e.origin)||"value",message:o,input:n,issues:r,abortEarly:e==null?void 0:e.abortEarly,abortPipeEarly:e==null?void 0:e.abortPipeEarly}]}}function kn(e=[]){return{schema:"any",async:!1,_parse(t,i){return kt(t,e,i,"any")}}}function Jt(e,t,i){let[o,n]=yt(t,i);return{schema:"array",array:{item:e},async:!1,_parse(r,s){if(!Array.isArray(r))return bt(s,"type","array",o||"Invalid type",r);let l,a=[];for(let d=0;d<r.length;d++){let u=r[d],h=e._parse(u,s);if(h.issues){let c={schema:"array",input:r,key:d,value:u};for(let f of h.issues)f.path?f.path.unshift(c):f.path=[c],l==null||l.push(f);if(l||(l=h.issues),s!=null&&s.abortEarly)break}else a.push(h.output)}return l?{issues:l}:kt(a,n,s,"array")}}}function Me(e,t){let[i,o]=yt(e,t);return{schema:"boolean",async:!1,_parse(n,r){return typeof n!="boolean"?bt(r,"type","boolean",i||"Invalid type",n):kt(n,o,r,"boolean")}}}function Ii(e,t){return{schema:"literal",literal:e,async:!1,_parse(i,o){return i!==e?bt(o,"type","literal",t||"Invalid type",i):{output:i}}}}function En(e,t){return{schema:"native_enum",nativeEnum:e,async:!1,_parse(i,o){return Object.values(e).includes(i)?{output:i}:bt(o,"type","native_enum",t||"Invalid type",i)}}}function vt(e,t){let[i,o]=yt(e,t);return{schema:"number",async:!1,_parse(n,r){return typeof n!="number"?bt(r,"type","number",i||"Invalid type",n):kt(n,o,r,"number")}}}function ft(e,t,i){let[o,n]=yt(t,i),r;return{schema:"object",object:e,async:!1,_parse(s,l){if(!s||typeof s!="object")return bt(l,"type","object",o||"Invalid type",s);r=r||Object.entries(e);let a,d={};for(let[u,h]of r){let c=s[u],f=h._parse(c,l);if(f.issues){let y={schema:"object",input:s,key:u,value:c};for(let p of f.issues)p.path?p.path.unshift(y):p.path=[y],a==null||a.push(p);if(a||(a=f.issues),l!=null&&l.abortEarly)break}else d[u]=f.output}return a?{issues:a}:kt(d,n,l,"object")}}}function V(e){return{schema:"optional",wrapped:e,async:!1,_parse(t,i){return t===void 0?{output:t}:e._parse(t,i)}}}function rt(e,t){let[i,o]=yt(e,t);return{schema:"string",async:!1,_parse(n,r){return typeof n!="string"?bt(r,"type","string",i||"Invalid type",n):kt(n,o,r,"string")}}}function xn(e,t,i,o){if(typeof t=="object"&&!Array.isArray(t)){let[s,l]=yt(i,o);return[e,t,s,l]}let[n,r]=yt(t,i);return[rt(),e,n,r]}var An=["__proto__","prototype","constructor"];function In(e,t,i,o){let[n,r,s,l]=xn(e,t,i,o);return{schema:"record",record:{key:n,value:r},async:!1,_parse(a,d){if(!a||typeof a!="object")return bt(d,"type","record",s||"Invalid type",a);let u,h={};for(let[c,f]of Object.entries(a))if(!An.includes(c)){let y,p=n._parse(c,{origin:"key",abortEarly:d==null?void 0:d.abortEarly,abortPipeEarly:d==null?void 0:d.abortPipeEarly});if(p.issues){y={schema:"record",input:a,key:c,value:f};for(let g of p.issues)g.path=[y],u==null||u.push(g);if(u||(u=p.issues),d!=null&&d.abortEarly)break}let w=r._parse(f,d);if(w.issues){y=y||{schema:"record",input:a,key:c,value:f};for(let g of w.issues)g.path?g.path.unshift(y):g.path=[y],u==null||u.push(g);if(u||(u=w.issues),d!=null&&d.abortEarly)break}!p.issues&&!w.issues&&(h[p.output]=w.output)}return u?{issues:u}:kt(h,l,d,"record")}}}function On(e,t,i){if(typeof e=="object"&&!Array.isArray(e)){let[r,s]=yt(t,i);return[e,r,s]}let[o,n]=yt(e,t);return[void 0,o,n]}function Oi(e,t,i,o){let[n,r,s]=On(t,i,o);return{schema:"tuple",tuple:{items:e,rest:n},async:!1,_parse(l,a){if(!Array.isArray(l)||!n&&e.length!==l.length||n&&e.length>l.length)return bt(a,"type","tuple",r||"Invalid type",l);let d,u=[];for(let h=0;h<e.length;h++){let c=l[h],f=e[h]._parse(c,a);if(f.issues){let y={schema:"tuple",input:l,key:h,value:c};for(let p of f.issues)p.path?p.path.unshift(y):p.path=[y],d==null||d.push(p);if(d||(d=f.issues),a!=null&&a.abortEarly)break}else u[h]=f.output}if(n)for(let h=e.length;h<l.length;h++){let c=l[h],f=n._parse(c,a);if(f.issues){let y={schema:"tuple",input:l,key:h,value:c};for(let p of f.issues)p.path?p.path.unshift(y):p.path=[y],d==null||d.push(p);if(d||(d=f.issues),a!=null&&a.abortEarly)break}else u[h]=f.output}return d?{issues:d}:kt(u,s,a,"tuple")}}}function qe(e,t){return{schema:"union",union:e,async:!1,_parse(i,o){let n,r;for(let s of e){let l=s._parse(i,o);if(l.issues)if(n)for(let a of l.issues)n.push(a);else n=l.issues;else{r=[l.output];break}}return r?{output:r[0]}:bt(o,"type","union",t||"Invalid type",i,n)}}}function ee(e,t,i){let[o,n]=yt(t,i);return ft(e.reduce((r,s)=>({...r,...s.object}),{}),o,n)}function Pn(e,t,i,o){let[n,r]=yt(i,o);return ft(Object.entries(e.object).reduce((s,[l,a])=>t.includes(l)?s:{...s,[l]:a},{}),n,r)}function Tn(e,t,i){let o=e._parse(t,i);return o.issues?{success:!1,error:new Ln(o.issues),issues:o.issues}:{success:!0,data:o.output,output:o.output}}function We(e,t){return i=>i>e?{issue:{validation:"max_value",message:t||"Invalid value",input:i}}:{output:i}}function Je(e,t){return i=>i<e?{issue:{validation:"min_value",message:t||"Invalid value",input:i}}:{output:i}}var Mn=Object.create,si=Object.defineProperty,jn=Object.getOwnPropertyDescriptor,co=Object.getOwnPropertyNames,Nn=Object.getPrototypeOf,zn=Object.prototype.hasOwnProperty,Un=(e,t,i)=>t in e?si(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,ie=(e,t)=>function(){return t||(0,e[co(e)[0]])((t={exports:{}}).exports,t),t.exports},Dn=(e,t,i,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of co(t))!zn.call(e,n)&&n!==i&&si(e,n,{get:()=>t[n],enumerable:!(o=jn(t,n))||o.enumerable});return e},Rn=(e,t,i)=>(i=e!=null?Mn(Nn(e)):{},Dn(t||!e||!e.__esModule?si(i,"default",{value:e,enumerable:!0}):i,e)),Bn=(e,t,i)=>(Un(e,typeof t!="symbol"?t+"":t,i),i),Fn=ie({"../../node_modules/.pnpm/@rgba-image+copy@0.1.3/node_modules/@rgba-image/copy/dist/index.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.copy=void 0;var t=(i,o,n=0,r=0,s=i.width-n,l=i.height-r,a=0,d=0)=>{if(n=n|0,r=r|0,s=s|0,l=l|0,a=a|0,d=d|0,s<=0||l<=0)return;let u=new Uint32Array(i.data.buffer),h=new Uint32Array(o.data.buffer);for(let c=0;c<l;c++){let f=r+c;if(f<0||f>=i.height)continue;let y=d+c;if(!(y<0||y>=o.height))for(let p=0;p<s;p++){let w=n+p;if(w<0||w>=i.width)continue;let g=a+p;if(g<0||g>=o.width)continue;let C=f*i.width+w,b=y*o.width+g;h[b]=u[C]}}};e.copy=t}}),Vn=ie({"../../node_modules/.pnpm/@rgba-image+create-image@0.1.1/node_modules/@rgba-image/create-image/dist/index.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.CreateImageFactory=(t=[0,0,0,0],i=4)=>{if(i=Math.floor(i),isNaN(i)||i<1)throw TypeError("channels should be a positive non-zero number");if(!("length"in t)||t.length<i)throw TypeError(`fill should be iterable with at least ${i} members`);t=new Uint8ClampedArray(t).slice(0,i);let o=t.every(n=>n===0);return(n,r,s)=>{if(n===void 0||r===void 0)throw TypeError("Not enough arguments");if(n=Math.floor(n),r=Math.floor(r),isNaN(n)||n<1||isNaN(r)||r<1)throw TypeError("Index or size is negative or greater than the allowed amount");let l=n*r*i;if(s===void 0&&(s=new Uint8ClampedArray(l)),s instanceof Uint8ClampedArray){if(s.length!==l)throw TypeError("Index or size is negative or greater than the allowed amount");if(!o)for(let a=0;a<r;a++)for(let d=0;d<n;d++){let u=(a*n+d)*i;for(let h=0;h<i;h++)s[u+h]=t[h]}return{get width(){return n},get height(){return r},get data(){return s}}}throw TypeError("Expected data to be Uint8ClampedArray or undefined")}},e.createImage=e.CreateImageFactory()}}),Hn=ie({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/filters.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.filters=void 0;var t=14,i=(r,s)=>{if(r<=-s||r>=s||r==0)return 0;let l=r*Math.PI;return Math.sin(l)/l*Math.sin(l/s)/(l/s)},o=r=>Math.round(r*((1<<t)-1)),n=(r,s,l,a,d)=>{let u=d?2:3,h=1/l,c=Math.min(1,l),f=u/c,y=Math.floor((f+1)*2),p=new Int16Array((y+2)*s),w=0;for(let g=0;g<s;g++){let C=(g+.5)*h+a,b=Math.max(0,Math.floor(C-f)),A=Math.min(r-1,Math.ceil(C+f)),j=A-b+1,D=new Float32Array(j),I=new Int16Array(j),$=0,L=0;for(let q=b;q<=A;q++){let et=i((q+.5-C)*c,u);$+=et,D[L]=et,L++}let M=0;for(let q=0;q<D.length;q++){let et=D[q]/$;M+=et,I[q]=o(et)}I[s>>1]+=o(1-M);let T=0;for(;T<I.length&&I[T]===0;)T++;let U=I.length-1;for(;U>0&&I[U]===0;)U--;let H=b+T,W=U-T+1;p[w++]=H,p[w++]=W,p.set(I.subarray(T,U+1),w),w+=W}return p};e.filters=n}}),qn=ie({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/convolve.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.convolve=void 0;var t=14,i=(o,n,r,s,l,a)=>{let d=0,u=0;for(let h=0;h<s;h++){let c=0;for(let f=0;f<l;f++){let y=a[c++],p=d+y*4|0,w=0,g=0,C=0,b=0;for(let A=a[c++];A>0;A--){let j=a[c++];w=w+j*o[p]|0,g=g+j*o[p+1]|0,C=C+j*o[p+2]|0,b=b+j*o[p+3]|0,p=p+4|0}n[u]=w+8192>>t,n[u+1]=g+8192>>t,n[u+2]=C+8192>>t,n[u+3]=b+8192>>t,u=u+s*4|0}u=(h+1)*4|0,d=(h+1)*r*4|0}};e.convolve=i}}),Wn=ie({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/index.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.lanczos2=e.lanczos=void 0;var t=Fn(),i=Vn(),o=Hn(),n=qn(),r=(a,d,u=!1)=>{let h=d.width/a.width,c=d.height/a.height,f=o.filters(a.width,d.width,h,0,u),y=o.filters(a.height,d.height,c,0,u),p=new Uint8ClampedArray(d.width*a.height*4);n.convolve(a.data,p,a.width,a.height,d.width,f),n.convolve(p,d.data,a.height,d.width,d.height,y)},s=(a,d,u=0,h=0,c=a.width-u,f=a.height-h,y=0,p=0,w=d.width-y,g=d.height-p)=>{if(u=u|0,h=h|0,c=c|0,f=f|0,y=y|0,p=p|0,w=w|0,g=g|0,c<=0||f<=0||w<=0||g<=0)return;if(u===0&&h===0&&c===a.width&&f===a.height&&y===0&&p===0&&w===d.width&&g===d.height){r(a,d);return}let C=i.createImage(c,f),b=i.createImage(w,g);t.copy(a,C,u,h),r(C,b),t.copy(b,d,0,0,b.width,b.height,y,p)};e.lanczos=s;var l=(a,d,u=0,h=0,c=a.width-u,f=a.height-h,y=0,p=0,w=d.width-y,g=d.height-p)=>{if(u=u|0,h=h|0,c=c|0,f=f|0,y=y|0,p=p|0,w=w|0,g=g|0,c<=0||f<=0||w<=0||g<=0)return;if(u===0&&h===0&&c===a.width&&f===a.height&&y===0&&p===0&&w===d.width&&g===d.height){r(a,d,!0);return}let C=i.createImage(c,f),b=i.createImage(w,g);t.copy(a,C,u,h),r(C,b,!0),t.copy(b,d,0,0,b.width,b.height,y,p)};e.lanczos2=l}}),po=(e=>(e.Bounce="bounce",e.Normal="normal",e))(po||{}),Jn=En(po),fo=ft({autoplay:V(Me()),defaultTheme:V(rt()),direction:V(qe([Ii(1),Ii(-1)])),hover:V(Me()),id:rt(),intermission:V(vt()),loop:V(qe([Me(),vt()])),playMode:V(Jn),speed:V(vt()),themeColor:V(rt())}),Zn=ft({animations:Jt(rt()),id:rt()}),Gn=ft({activeAnimationId:V(rt()),animations:Jt(fo),author:V(rt()),custom:V(In(rt(),kn())),description:V(rt()),generator:V(rt()),keywords:V(rt()),revision:V(vt()),themes:V(Jt(Zn)),states:V(Jt(rt())),version:V(rt())}),mo=Pn(fo,["id"]),Tt=ft({state:rt()}),Kn=Tt,Xn=ee([Tt,ft({ms:vt()})]),Yn=ee([Tt,ft({count:vt()})]),Qn=Tt,tr=Tt,er=Tt,ir=ee([Tt,ft({threshold:V(Jt(vt([Je(0),We(1)])))})]),or=ft({onAfter:V(Xn),onClick:V(Kn),onComplete:V(er),onEnter:V(Yn),onMouseEnter:V(Qn),onMouseLeave:V(tr),onShow:V(ir)}),nr=ee([mo,ft({playOnScroll:V(Oi([vt([Je(0),We(1)]),vt([Je(0),We(1)])])),segments:V(qe([Oi([vt(),vt()]),rt()]))})]);ee([or,ft({animationId:V(rt()),playbackSettings:nr})]);var rr={jpeg:"image/jpeg",png:"image/png",gif:"image/gif",bmp:"image/bmp",svg:"image/svg+xml",webp:"image/webp",mpeg:"audio/mpeg",mp3:"audio/mp3"},Pi={jpeg:[255,216,255],png:[137,80,78,71,13,10,26,10],gif:[71,73,70],bmp:[66,77],webp:[82,73,70,70,87,69,66,80],svg:[60,63,120],mp3:[73,68,51,3,0,0,0,0],mpeg:[73,68,51,3,0,0,0,0]},sr=e=>{let t=null,i=[];if(!e)return null;let o=e.substring(e.indexOf(",")+1);typeof window>"u"?t=Buffer.from(o,"base64").toString("binary"):t=atob(o);let n=new Uint8Array(t.length);for(let r=0;r<t.length;r+=1)n[r]=t.charCodeAt(r);i=Array.from(n.subarray(0,8));for(let r in Pi){let s=Pi[r];if(s&&i.every((l,a)=>l===s[a]))return rr[r]}return null},ai=class extends Error{constructor(e,t){super(e),Bn(this,"code"),this.name="[dotlottie-js]",this.code=t}};function vo(e){let t;if(typeof window>"u")t=Buffer.from(e).toString("base64");else{let i=Array.prototype.map.call(e,o=>String.fromCharCode(o)).join("");t=window.btoa(i)}return`data:${sr(t)};base64,${t}`}function Ti(e){return"w"in e&&"h"in e&&!("xt"in e)&&"p"in e}function Ze(e){return!("h"in e)&&!("w"in e)&&"p"in e&&"e"in e&&"u"in e&&"id"in e}async function oe(e,t=()=>!0){if(!(e instanceof Uint8Array))throw new ai("DotLottie not found","INVALID_DOTLOTTIE");return await new Promise((i,o)=>{wn(e,{filter:t},(n,r)=>{n&&o(n),i(r)})})}async function li(e,t,i){if(!(e instanceof Uint8Array))throw new ai("DotLottie not found","INVALID_DOTLOTTIE");return(await oe(e,o=>o.name===t&&(!i||i(o))))[t]}async function Ge(e){let t="manifest.json",i=(await oe(e,o=>o.name===t))[t];if(!(typeof i>"u"))return JSON.parse(Ht(i,!1))}async function ar(e){if(!(e instanceof Uint8Array))return{success:!1,error:"DotLottie not found"};let t=await Ge(e);if(typeof t>"u")return{success:!1,error:"Invalid .lottie file, manifest.json is missing"};let i=Tn(Gn,t);return i.success?{success:!0}:{success:!1,error:`Invalid .lottie file, manifest.json structure is invalid, ${JSON.stringify(Cn(i.error).nested,null,2)}`}}async function Mi(e){let t=new Uint8Array(e),i=await ar(t);if(i.error)throw new ai(i.error,"INVALID_DOTLOTTIE");return t}async function lr(e,t){let i=await oe(e,n=>{let r=n.name.replace("audio/","");return n.name.startsWith("audio/")&&(!t||t({...n,name:r}))}),o={};for(let n in i){let r=i[n];if(r instanceof Uint8Array){let s=n.replace("audio/","");o[s]=vo(r)}}return o}async function dr(e,t){var i;let o=new Map;for(let[r,s]of Object.entries(t))for(let l of s.assets||[])if(Ze(l)){let a=l.p;o.has(a)||o.set(a,new Set),(i=o.get(a))==null||i.add(r)}let n=await lr(e,r=>o.has(r.name));for(let[r,s]of o){let l=n[r];if(l)for(let a of s){let d=t[a];for(let u of(d==null?void 0:d.assets)||[])Ze(u)&&u.p===r&&(u.p=l,u.u="",u.e=1)}}}async function hr(e,t){let i=await oe(e,n=>{let r=n.name.replace("images/","");return n.name.startsWith("images/")&&(!t||t({...n,name:r}))}),o={};for(let n in i){let r=i[n];if(r instanceof Uint8Array){let s=n.replace("images/","");o[s]=vo(r)}}return o}async function ur(e,t){var i;let o=new Map;for(let[r,s]of Object.entries(t))for(let l of s.assets||[])if(Ti(l)){let a=l.p;o.has(a)||o.set(a,new Set),(i=o.get(a))==null||i.add(r)}let n=await hr(e,r=>o.has(r.name));for(let[r,s]of o){let l=n[r];if(l)for(let a of s){let d=t[a];for(let u of(d==null?void 0:d.assets)||[])Ti(u)&&u.p===r&&(u.p=l,u.u="",u.e=1)}}}async function cr(e,t,{inlineAssets:i}={},o){let n=`animations/${t}.json`,r=await li(e,n,o);if(typeof r>"u")return;let s=JSON.parse(Ht(r,!1));if(!i)return s;let l={[t]:s};return await ur(e,l),await dr(e,l),s}async function pr(e,t,i){let o=`themes/${t}.json`,n=await li(e,o,i);if(!(typeof n>"u"))return JSON.parse(Ht(n,!1))}async function fr(e,t){let i={},o=await oe(e,n=>{let r=n.name.replace("states/","").replace(".json","");return n.name.startsWith("states/")&&(!t||t({...n,name:r}))});for(let n in o){let r=o[n];if(r instanceof Uint8Array){let s=n.replace("states/","").replace(".json","");i[s]=Ht(r,!1)}}return i}async function mr(e,t,i){let o=`states/${t}.json`,n=await li(e,o,i);return typeof n>"u"?void 0:JSON.parse(Ht(n,!1))}Rn(Wn());function B(e,t="dotLottie-common"){return new Error(`[${t}]: ${e}`)}function Nt(e,t="dotLottie-common",...i){console.error(`[${t}]:`,e,...i)}function G(e,t="dotLottie-common",...i){console.warn(`[${t}]:`,e,...i)}function vr(e=""){let t=e.trim(),i=t.lastIndexOf("/"),o=t.substring(i+1),n=o.indexOf(".");return n!==-1?o.substring(0,n):o}function me(e){return["v","ip","op","layers","fr","w","h"].every(t=>Object.prototype.hasOwnProperty.call(e,t))}function yr(e){let t=e.assets;return t?t.some(i=>Ze(i)):!1}function gr(e){try{let t=JSON.parse(e);return me(t)}catch{return!1}}function vs(e,t){let i=Object.keys(e).find(o=>e[o]===t);if(i===void 0)throw new Error("Value not found in the object.");return i}function je(e){return JSON.parse(JSON.stringify(e))}var _r=class{constructor(){S(this,"_dotLottie");S(this,"_animationsMap",new Map);S(this,"_themeMap",new Map);S(this,"_stateMachinesMap",new Map);S(this,"_manifest")}get dotLottie(){return this._dotLottie}get animationsMap(){return this._animationsMap}get themeMap(){return this._themeMap}get stateMachinesMap(){return this._stateMachinesMap}get manifest(){return this._manifest}async loadFromUrl(e){let t=await fetch(e,{method:"GET",mode:"cors"});if(!t.ok)throw new Error(`Failed to load dotLottie from ${e} with status ${t.status}`);let i=t.headers.get("content-type");if(i!=null&&i.includes("application/json")){let o=await t.json();if(!me(o))throw new Error(`Invalid lottie JSON at ${e}`);let n=vr(e);this._animationsMap.set(n,o);let r={activeAnimationId:n,animations:[{id:n}]};this._manifest=r}else{this._dotLottie=await Mi(await t.arrayBuffer());let o=await Ge(this._dotLottie);if(!o)throw new Error("Manifest not found");this._manifest=o}}loadFromLottieJSON(e){if(!me(e))throw new Error("Invalid lottie JSON");let t="my-animation";this._animationsMap.set(t,e);let i={activeAnimationId:t,animations:[{id:t}]};this._manifest=i}async loadFromArrayBuffer(e){this._dotLottie=await Mi(e);let t=await Ge(this._dotLottie);if(!t)throw new Error("Manifest not found");this._manifest=t}async getAnimation(e){if(this._animationsMap.get(e))return this._animationsMap.get(e);if(!this._dotLottie)return;let t=await cr(this._dotLottie,e,{inlineAssets:!0});return t&&this._animationsMap.set(e,t),t}async getTheme(e){if(this._themeMap.get(e))return this._themeMap.get(e);if(!this._dotLottie)return;let t=await pr(this._dotLottie,e);return t&&this._themeMap.set(e,t),t}async getStateMachines(){if(!this._dotLottie)return;let e=await fr(this._dotLottie);for(let t in e)if(t){let i=e[t];if(i){let o=JSON.parse(i);if(o){let n=o.descriptor.id;this._stateMachinesMap.get(n)||this._stateMachinesMap.set(n,o)}}}return Array.from(this._stateMachinesMap.values())}async getStateMachine(e){if(this._stateMachinesMap.get(e))return this._stateMachinesMap.get(e);if(!this._dotLottie)return;let t=await mr(this._dotLottie,e);return t&&this._stateMachinesMap.set(t.descriptor.id,t),t}};function Le(){throw new Error("Cycle detected")}function di(){if(Rt>1)Rt--;else{for(var e,t=!1;Zt!==void 0;){var i=Zt;for(Zt=void 0,Ke++;i!==void 0;){var o=i.o;if(i.o=void 0,i.f&=-3,!(8&i.f)&&go(i))try{i.c()}catch(n){t||(e=n,t=!0)}i=o}}if(Ke=0,Rt--,t)throw e}}var Y=void 0,Zt=void 0,Rt=0,Ke=0,ve=0;function yo(e){if(Y!==void 0){var t=e.n;if(t===void 0||t.t!==Y)return t={i:0,S:e,p:Y.s,n:void 0,t:Y,e:void 0,x:void 0,r:t},Y.s!==void 0&&(Y.s.n=t),Y.s=t,e.n=t,32&Y.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=Y.s,t.n=void 0,Y.s.n=t,Y.s=t),t}}function ht(e){this.v=e,this.i=0,this.n=void 0,this.t=void 0}ht.prototype.h=function(){return!0};ht.prototype.S=function(e){this.t!==e&&e.e===void 0&&(e.x=this.t,this.t!==void 0&&(this.t.e=e),this.t=e)};ht.prototype.U=function(e){if(this.t!==void 0){var t=e.e,i=e.x;t!==void 0&&(t.x=i,e.e=void 0),i!==void 0&&(i.e=t,e.x=void 0),e===this.t&&(this.t=i)}};ht.prototype.subscribe=function(e){var t=this;return Cr(function(){var i=t.value,o=32&this.f;this.f&=-33;try{e(i)}finally{this.f|=o}})};ht.prototype.valueOf=function(){return this.value};ht.prototype.toString=function(){return this.value+""};ht.prototype.toJSON=function(){return this.value};ht.prototype.peek=function(){return this.v};Object.defineProperty(ht.prototype,"value",{get:function(){var e=yo(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(Y instanceof Mt&&function(){throw new Error("Computed cannot have side-effects")}(),e!==this.v){Ke>100&&Le(),this.v=e,this.i++,ve++,Rt++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{di()}}}});function br(e){return new ht(e)}function go(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function _o(e){for(var t=e.s;t!==void 0;t=t.n){var i=t.S.n;if(i!==void 0&&(t.r=i),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function bo(e){for(var t=e.s,i=void 0;t!==void 0;){var o=t.p;t.i===-1?(t.S.U(t),o!==void 0&&(o.n=t.n),t.n!==void 0&&(t.n.p=o)):i=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=o}e.s=i}function Mt(e){ht.call(this,void 0),this.x=e,this.s=void 0,this.g=ve-1,this.f=4}(Mt.prototype=new ht).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===ve))return!0;if(this.g=ve,this.f|=1,this.i>0&&!go(this))return this.f&=-2,!0;var e=Y;try{_o(this),Y=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(i){this.v=i,this.f|=16,this.i++}return Y=e,bo(this),this.f&=-2,!0};Mt.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}ht.prototype.S.call(this,e)};Mt.prototype.U=function(e){if(this.t!==void 0&&(ht.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};Mt.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Mt.prototype.peek=function(){if(this.h()||Le(),16&this.f)throw this.v;return this.v};Object.defineProperty(Mt.prototype,"value",{get:function(){1&this.f&&Le();var e=yo(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function wo(e){var t=e.u;if(e.u=void 0,typeof t=="function"){Rt++;var i=Y;Y=void 0;try{t()}catch(o){throw e.f&=-2,e.f|=8,hi(e),o}finally{Y=i,di()}}}function hi(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,wo(e)}function wr(e){if(Y!==this)throw new Error("Out-of-order effect");bo(this),Y=e,this.f&=-2,8&this.f&&hi(this),di()}function ne(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}ne.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};ne.prototype.S=function(){1&this.f&&Le(),this.f|=1,this.f&=-9,wo(this),_o(this),Rt++;var e=Y;return Y=this,wr.bind(this,e)};ne.prototype.N=function(){2&this.f||(this.f|=2,this.o=Zt,Zt=this)};ne.prototype.d=function(){this.f|=8,1&this.f||hi(this)};function Cr(e){var t=new ne(e);try{t.c()}catch(i){throw t.d(),i}return t.d.bind(t)}var Lr=class{constructor(e){S(this,"_state");S(this,"_prevState");this._prevState=e,this._state=br(e)}setState(e){this._prevState=this._state.value,this._state.value=e}subscribe(e){return this._state.subscribe(t=>e(t,this._prevState))}};async function Sr(e,t){let[{DotLottieStateMachineManager:i}]=await Promise.all([Ct(()=>import("./dotlottie-state-machine-manager-2E7RUGJG-NTQ25VSR-Cz6HA7Wv.js"),__vite__mapDeps([0,1]))]);if(!e.length)throw B("No state machines available inside this .lottie!");return new i(e,t)}var $r={name:"@dotlottie/common",version:"0.7.11",type:"module",description:"",author:"Afsal <afsal@lottiefiles.com>, Sam Osborne <sam@lottiefiles.com>",license:"MIT",engines:{node:">18.0.0"},module:"dist/index.js",main:"dist/index.js",types:"dist/index.d.ts",files:["dist"],keywords:[],scripts:{build:"tsup",dev:"tsup --watch",lint:"eslint .","type-check":"tsc --noEmit"},dependencies:{"@dotlottie/dotlottie-js":"^0.7.0","@preact/signals-core":"^1.2.3",howler:"^2.2.3","lottie-web":"^5.12.2",xstate:"^4.38.1"},devDependencies:{"@lottiefiles/lottie-types":"^1.2.0","@types/howler":"^2.2.8",tsup:"^7.2.0",typescript:"^4.7.4"},publishConfig:{access:"public"}},Lt=(e=>(e.Complete="complete",e.DataFail="data_fail",e.DataReady="data_ready",e.Error="error",e.Frame="frame",e.Freeze="freeze",e.LoopComplete="loopComplete",e.Pause="pause",e.Play="play",e.Ready="ready",e.Stop="stop",e.VisibilityChange="visibilityChange",e))(Lt||{}),Ut=(e=>(e.Completed="completed",e.Error="error",e.Fetching="fetching",e.Frozen="frozen",e.Initial="initial",e.Loading="loading",e.Paused="paused",e.Playing="playing",e.Ready="ready",e.Stopped="stopped",e))(Ut||{}),Co=(e=>(e.Bounce="bounce",e.Normal="normal",e))(Co||{}),ct={autoplay:!1,direction:1,hover:!1,intermission:0,loop:!1,playMode:"normal",speed:1,defaultTheme:""},Lo={activeStateId:"",autoplay:!1,currentState:"initial",frame:0,seeker:0,direction:1,hover:!1,loop:!1,playMode:"normal",speed:1,background:"transparent",intermission:0,currentAnimationId:void 0,visibilityPercentage:0},ji=class{constructor(e,t,i){S(this,"_lottie");S(this,"_src");S(this,"_animationConfig");S(this,"_prevUserPlaybackOptions",{});S(this,"_userPlaybackOptions");S(this,"_hover",!1);S(this,"_loop",!1);S(this,"_counter",0);S(this,"_intermission",0);S(this,"_counterInterval",null);S(this,"_container",null);S(this,"_name");S(this,"_mode","normal");S(this,"_background","transparent");S(this,"_animation");S(this,"_defaultTheme");S(this,"_activeAnimationId");S(this,"_currentAnimationId");S(this,"_testId");S(this,"_listeners",new Map);S(this,"_currentState","initial");S(this,"_stateBeforeFreeze","initial");S(this,"state",new Lr(Lo));S(this,"_light",!1);S(this,"_worker",!1);S(this,"_dotLottieLoader",new _r);S(this,"_activeStateId");S(this,"_inInteractiveMode",!1);S(this,"_scrollTicking",!1);S(this,"_scrollCallback");S(this,"_onShowIntersectionObserver");S(this,"_visibilityPercentage",0);S(this,"_audios",[]);S(this,"_stateMachineManager");typeof e=="string"?this._src=e:this._src=je(e),i!=null&&i.testId&&(this._testId=i.testId),this._defaultTheme=(i==null?void 0:i.defaultTheme)||"",this._userPlaybackOptions=this._validatePlaybackOptions(i||{}),typeof(i==null?void 0:i.activeAnimationId)=="string"&&(this._activeAnimationId=i.activeAnimationId),this._container=t||null,typeof(i==null?void 0:i.background)=="string"&&this.setBackground(i.background),typeof(i==null?void 0:i.activeStateId)<"u"&&(this._activeStateId=i.activeStateId);let{rendererSettings:o,...n}=i||{};this._animationConfig={loop:!1,autoplay:!1,renderer:"svg",rendererSettings:{clearCanvas:!0,progressiveLoad:!0,hideOnTransparent:!0,filterSize:{width:"200%",height:"200%",x:"-50%",y:"-50%"},...o},...n},i!=null&&i.light&&(this._light=i.light),i!=null&&i.worker&&(this._worker=i.worker),this._listenToHover(),this._listenToVisibilityChange()}_listenToHover(){var e,t,i,o;let n=()=>{this._hover&&this.currentState!=="playing"&&this.play()},r=()=>{this._hover&&this.currentState==="playing"&&this.stop()};(e=this._container)==null||e.removeEventListener("mouseenter",n),(t=this._container)==null||t.removeEventListener("mouseleave",r),(i=this._container)==null||i.addEventListener("mouseleave",r),(o=this._container)==null||o.addEventListener("mouseenter",n)}_onVisibilityChange(){!this._lottie||typeof document>"u"||(document.hidden&&this.currentState==="playing"?this.freeze():this.currentState==="frozen"&&this.unfreeze())}_listenToVisibilityChange(){typeof document<"u"&&typeof document.hidden<"u"&&document.addEventListener("visibilitychange",()=>this._onVisibilityChange())}_getOption(e){var t;if(typeof this._userPlaybackOptions[e]<"u")return this._userPlaybackOptions[e];let i=(t=this._dotLottieLoader.manifest)==null?void 0:t.animations.find(o=>o.id===this._currentAnimationId);return i&&typeof i[e]<"u"?i[e]:ct[e]}_getPlaybackOptions(){let e={};for(let t in ct)typeof ct[t]<"u"&&(e[t]=this._getOption(t));return e}_setPlayerState(e){var t,i,o;let n=e(this._getPlaybackOptions());try{mo._parse(n)}catch{G(`Invalid PlaybackOptions, ${JSON.stringify(n,null,2)}`);return}typeof n.defaultTheme<"u"&&(this._defaultTheme=n.defaultTheme),typeof n.playMode<"u"&&(this._mode=n.playMode),typeof n.intermission<"u"&&(this._intermission=n.intermission),typeof n.hover<"u"&&(this._hover=n.hover),typeof n.loop<"u"&&(this.clearCountTimer(),this._loop=n.loop,this._counter=0,(t=this._lottie)==null||t.setLoop(typeof n.loop=="number"?!0:n.loop)),typeof n.speed<"u"&&((i=this._lottie)==null||i.setSpeed(n.speed)),typeof n.autoplay<"u"&&this._lottie&&(this._lottie.autoplay=n.autoplay),typeof n.direction<"u"&&((o=this._lottie)==null||o.setDirection(n.direction))}_getOptionsFromAnimation(e){let{id:t,...i}=e;return{...ct,...i}}_updateTestData(){!this._testId||!this._lottie||(window.dotLottiePlayer||(window.dotLottiePlayer={[this._testId]:{}}),window.dotLottiePlayer[this._testId]={direction:this._lottie.playDirection,currentState:this._currentState,loop:this.loop,mode:this._mode,speed:this._lottie.playSpeed})}setContainer(e){e!==this._container&&(this._container=e,this.setBackground(this._background),this._listenToHover())}get currentState(){return this._currentState}clearCountTimer(){this._counterInterval&&clearInterval(this._counterInterval)}setCurrentState(e){this._currentState=e,this._notify(),this._updateTestData()}static isPathJSON(e){var t;return((t=e.split(".").pop())==null?void 0:t.toLowerCase())==="json"}get src(){return this._src}updateSrc(e){this._src!==e&&(typeof e=="string"?this._src=e:this._src=je(e),this._activeAnimationId=void 0,this._currentAnimationId=void 0,this.load())}get intermission(){return this._intermission}get hover(){return this._hover}setHover(e){typeof e=="boolean"&&(this._hover=e,this._userPlaybackOptions.hover=e,this._notify())}setIntermission(e){this._intermission=e,this._userPlaybackOptions.intermission=e,this._notify()}get mode(){return this._mode}get animations(){return this._dotLottieLoader.animationsMap}get themes(){return this._dotLottieLoader.themeMap}setMode(e){typeof e=="string"&&(this._mode=e,this._userPlaybackOptions.playMode=e,this._setPlayerState(()=>({playMode:e})),this._notify(),this._updateTestData())}get container(){if(this._container)return this._container}goToAndPlay(e,t,i){if(!this._lottie||["loading"].includes(this._currentState)){G("goToAndPlay() Can't use whilst loading.");return}this._lottie.goToAndPlay(e,t,i),this.setCurrentState("playing")}goToAndStop(e,t,i){if(!this._lottie||["loading"].includes(this._currentState)){G("goToAndStop() Can't use whilst loading.");return}this._lottie.goToAndStop(e,t,i),this.setCurrentState("stopped")}seek(e){if(!this._lottie||["loading"].includes(this._currentState)){G("seek() Can't use whilst loading.");return}let t=e;typeof t=="number"&&(t=Math.round(t));let i=/^(\d+)(%?)$/u.exec(t.toString());if(!i)return;let o=i[2]==="%"?this.totalFrames*Number(i[1])/100:i[1];o!==void 0&&(this._lottie.goToAndPlay(o,!0),this.currentState==="playing"?this.play():this.currentState==="frozen"?this.freeze():this.pause())}_areNumbersInRange(e,t){return e>=0&&e<=1&&t>=0&&t<=1}_updatePosition(e,t,i){let[o,n]=e??[0,this.totalFrames-1],[r,s]=t??[0,1];if(!this._areNumbersInRange(r,s)){Nt("threshold values must be between 0 and 1");return}if(this.container){let{height:l,top:a}=this.container.getBoundingClientRect(),d=window.innerHeight-a,u=window.innerHeight+l,h=d/u,c=o+Math.round((h-r)/(s-r)*(n-o));i&&i(h),this.goToAndStop(c,!0),(c>=n||h>=s)&&this._handleAnimationComplete()}this._scrollTicking=!1}_requestTick(e,t,i){this._scrollTicking||(requestAnimationFrame(()=>this._updatePosition(e,t,i)),this._scrollTicking=!0)}playOnScroll(e){this.stop(),this._scrollCallback&&this.stopPlayOnScroll(),this._scrollCallback=()=>this._requestTick(e==null?void 0:e.segments,e==null?void 0:e.threshold,e==null?void 0:e.positionCallback),window.addEventListener("scroll",this._scrollCallback)}stopPlayOnScroll(){this._scrollCallback&&(window.removeEventListener("scroll",this._scrollCallback),this._scrollCallback=void 0)}stopPlayOnShow(){this._onShowIntersectionObserver&&(this._onShowIntersectionObserver.disconnect(),this._onShowIntersectionObserver=void 0)}addIntersectionObserver(e){if(!this.container)throw B("Can't play on show, player container element not available.");let t={root:null,rootMargin:"0px",threshold:e!=null&&e.threshold?e.threshold:[0,1]},i=o=>{o.forEach(n=>{var r,s;this._visibilityPercentage=n.intersectionRatio*100,n.isIntersecting?(e!=null&&e.callbackOnIntersect&&e.callbackOnIntersect(this._visibilityPercentage),(r=this._container)==null||r.dispatchEvent(new Event("visibilityChange"))):e!=null&&e.callbackOnIntersect&&(e.callbackOnIntersect(0),(s=this._container)==null||s.dispatchEvent(new Event("visibilityChange")))})};this._onShowIntersectionObserver=new IntersectionObserver(i,t),this._onShowIntersectionObserver.observe(this.container)}playOnShow(e){var t;if(this.stop(),!this.container)throw B("Can't play on show, player container element not available.");this._onShowIntersectionObserver&&this.stopPlayOnShow(),this.addIntersectionObserver({threshold:(t=e==null?void 0:e.threshold)!=null?t:[],callbackOnIntersect:i=>{i===0?this.pause():this.play()}})}_validatePlaybackOptions(e){if(!e)return{};let t={};for(let[i,o]of Object.entries(e))switch(i){case"autoplay":typeof o=="boolean"&&(t.autoplay=o);break;case"direction":typeof o=="number"&&[1,-1].includes(o)&&(t.direction=o);break;case"loop":(typeof o=="boolean"||typeof o=="number")&&(t.loop=o);break;case"playMode":typeof o=="string"&&["normal","bounce"].includes(o)&&(t.playMode=o);break;case"speed":typeof o=="number"&&(t.speed=o);break;case"themeColor":typeof o=="string"&&(t.themeColor=o);break;case"hover":typeof o=="boolean"&&(t.hover=o);break;case"intermission":typeof o=="number"&&(t.intermission=o);break;case"defaultTheme":typeof o=="string"&&(t.defaultTheme=o);break}return this._requireValidPlaybackOptions(t),t}_requireAnimationsInTheManifest(){var e;if(!((e=this._dotLottieLoader.manifest)!=null&&e.animations.length))throw B("No animations found in manifest.")}_requireAnimationsToBeLoaded(){if(this._dotLottieLoader.animationsMap.size===0)throw B("No animations have been loaded.")}async play(e,t){var i,o;if(["initial","loading"].includes(this._currentState)){G("Player unable to play whilst loading.");return}if(this._requireAnimationsInTheManifest(),this._requireAnimationsToBeLoaded(),this._lottie&&!e){this._lottie.playDirection===-1&&this._lottie.currentFrame===0?this._lottie.goToAndPlay(this._lottie.totalFrames,!0):this._lottie.play(),this.setCurrentState("playing");return}if(typeof e=="number"){let n=(i=this._dotLottieLoader.manifest)==null?void 0:i.animations[e];if(!n)throw B("animation not found.");typeof t=="function"?await this.render({id:n.id,...t(this._getPlaybackOptions(),this._getOptionsFromAnimation(n))}):await this.render({id:n.id})}if(typeof e=="string"){let n=(o=this._dotLottieLoader.manifest)==null?void 0:o.animations.find(r=>r.id===e);if(!n)throw B("animation not found.");typeof t=="function"?await this.render({id:n.id,...t(this._getPlaybackOptions(),this._getOptionsFromAnimation(n))}):await this.render({id:n.id})}}playSegments(e,t){if(!this._lottie||["loading"].includes(this._currentState)){G("playSegments() Can't use whilst loading.");return}this._lottie.playSegments(e,t),this.setCurrentState("playing")}resetSegments(e){if(!this._lottie||["loading"].includes(this._currentState)){G("resetSegments() Can't use whilst loading.");return}this._lottie.resetSegments(e)}togglePlay(){this.currentState==="playing"?this.pause():this.play()}_getAnimationByIdOrIndex(e){var t,i;if(this._requireAnimationsInTheManifest(),this._requireAnimationsToBeLoaded(),typeof e=="number"){let o=(t=this._dotLottieLoader.manifest)==null?void 0:t.animations[e];if(!o)throw B("animation not found.");return o}if(typeof e=="string"){let o=(i=this._dotLottieLoader.manifest)==null?void 0:i.animations.find(n=>n.id===e);if(!o)throw B("animation not found.");return o}throw B("first param must be a number or string")}get activeAnimationId(){return this._getActiveAnimationId()}get currentAnimationId(){return this._currentAnimationId}get activeStateId(){return this._activeStateId}async _startInteractivity(e){if(!this._inInteractiveMode){Nt("Can't start interactivity. Not in interactive mode. Call enterInteractiveMode(stateId: string) to start.");return}if(this._dotLottieLoader.stateMachinesMap.size===0&&await this._dotLottieLoader.getStateMachines(),this._dotLottieLoader.stateMachinesMap.size===0)throw B("No interactivity states are available.");if(e==="undefined")throw B("stateId is not specified.");this._stateMachineManager||(this._stateMachineManager=await Sr(Array.from(this._dotLottieLoader.stateMachinesMap.values()),this)),this._stateMachineManager.start(e)}enterInteractiveMode(e){var t;if(e)this._inInteractiveMode||(this._prevUserPlaybackOptions={...this._userPlaybackOptions}),this._inInteractiveMode&&((t=this._stateMachineManager)==null||t.stop()),this._activeStateId=e,this._inInteractiveMode=!0,this._startInteractivity(e);else throw B("stateId must be a non-empty string.")}exitInteractiveMode(){var e;this._inInteractiveMode&&(this._inInteractiveMode=!1,this._activeStateId="",(e=this._stateMachineManager)==null||e.stop(),this._userPlaybackOptions={},this._userPlaybackOptions={...this._prevUserPlaybackOptions},this._prevUserPlaybackOptions={},this.reset())}reset(){var e;let t=this._getActiveAnimationId(),i=(e=this._dotLottieLoader.manifest)==null?void 0:e.animations.find(o=>o.id===t);if(this._inInteractiveMode&&this.exitInteractiveMode(),!i)throw B("animation not found.");this.play(t)}previous(e){if(!this._dotLottieLoader.manifest||!this._dotLottieLoader.manifest.animations.length)throw B("manifest not found.");if(this._inInteractiveMode){G("previous() is not supported in interactive mode.");return}let t=this._dotLottieLoader.manifest.animations.findIndex(o=>o.id===this._currentAnimationId);if(t===-1)throw B("animation not found.");let i=this._dotLottieLoader.manifest.animations[(t-1+this._dotLottieLoader.manifest.animations.length)%this._dotLottieLoader.manifest.animations.length];if(!i||!i.id)throw B("animation not found.");typeof e=="function"?this.render({id:i.id,...e(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):this.render({id:i.id})}next(e){if(!this._dotLottieLoader.manifest||!this._dotLottieLoader.manifest.animations.length)throw B("manifest not found.");if(this._inInteractiveMode){G("next() is not supported in interactive mode.");return}let t=this._dotLottieLoader.manifest.animations.findIndex(o=>o.id===this._currentAnimationId);if(t===-1)throw B("animation not found.");let i=this._dotLottieLoader.manifest.animations[(t+1)%this._dotLottieLoader.manifest.animations.length];if(!i||!i.id)throw B("animation not found.");typeof e=="function"?this.render({id:i.id,...e(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):this.render({id:i.id})}getManifest(){return this._dotLottieLoader.manifest}resize(){if(!this._lottie||["loading"].includes(this._currentState)){G("resize() Can't use whilst loading.");return}this._lottie.resize()}stop(){if(!this._lottie||["loading"].includes(this._currentState)){G("stop() Can't use whilst loading.");return}this.clearCountTimer(),this._counter=0,this._setPlayerState(()=>({direction:this._getOption("direction")})),this._lottie.stop(),this.setCurrentState("stopped")}pause(){if(!this._lottie||["loading"].includes(this._currentState)){G("pause() Can't use whilst loading.");return}this.clearCountTimer(),this._lottie.pause(),this.setCurrentState("paused")}freeze(){if(!this._lottie||["loading"].includes(this._currentState)){G("freeze() Can't use whilst loading.");return}this.currentState!=="frozen"&&(this._stateBeforeFreeze=this.currentState),this._lottie.pause(),this.setCurrentState("frozen")}unfreeze(){if(!this._lottie||["loading"].includes(this._currentState)){G("unfreeze() Can't use whilst loading.");return}this._stateBeforeFreeze==="playing"?this.play():this.pause()}destroy(){var e,t;(e=this._container)!=null&&e.__lottie&&(this._container.__lottie.destroy(),this._container.__lottie=null),this._audios.length&&(this._audios.forEach(i=>{i.unload()}),this._audios=[]),this.clearCountTimer(),typeof document<"u"&&document.removeEventListener("visibilitychange",()=>this._onVisibilityChange()),this._counter=0,(t=this._lottie)==null||t.destroy(),this._lottie=void 0}getAnimationInstance(){return this._lottie}static getLottieWebVersion(){return`${$r.dependencies["lottie-web"]}`}addEventListener(e,t){var i,o,n;this._listeners.has(e)||this._listeners.set(e,new Set),(i=this._listeners.get(e))==null||i.add(t);try{e==="complete"?(o=this._container)==null||o.addEventListener(e,t):(n=this._lottie)==null||n.addEventListener(e,t)}catch(r){Nt(`addEventListener ${r}`)}}getState(){var e,t,i,o,n,r,s;return{autoplay:(t=(e=this._lottie)==null?void 0:e.autoplay)!=null?t:!1,currentState:this._currentState,frame:this._frame,visibilityPercentage:this._visibilityPercentage,seeker:this._seeker,direction:(o=(i=this._lottie)==null?void 0:i.playDirection)!=null?o:1,hover:this._hover,loop:this._loop||!1,playMode:this._mode,speed:(r=(n=this._lottie)==null?void 0:n.playSpeed)!=null?r:1,background:this._background,intermission:this._intermission,defaultTheme:this._defaultTheme,currentAnimationId:this._currentAnimationId,activeStateId:(s=this._activeStateId)!=null?s:""}}_notify(){this.state.setState(this.getState())}get totalFrames(){var e;return((e=this._lottie)==null?void 0:e.totalFrames)||0}get direction(){return this._lottie?this._lottie.playDirection:1}setDirection(e){this._requireValidDirection(e),this._setPlayerState(()=>({direction:e})),this._userPlaybackOptions.direction=e}get speed(){var e;return((e=this._lottie)==null?void 0:e.playSpeed)||1}setSpeed(e){this._requireValidSpeed(e),this._setPlayerState(()=>({speed:e})),this._userPlaybackOptions.speed=e}get autoplay(){var e,t;return(t=(e=this._lottie)==null?void 0:e.autoplay)!=null?t:!1}setAutoplay(e){if(this._requireValidAutoplay(e),!this._lottie||["loading"].includes(this._currentState)){G("setAutoplay() Can't use whilst loading.");return}this._setPlayerState(()=>({autoplay:e})),this._userPlaybackOptions.autoplay=e}toggleAutoplay(){if(!this._lottie||["loading"].includes(this._currentState)){G("toggleAutoplay() Can't use whilst loading.");return}this.setAutoplay(!this._lottie.autoplay)}get defaultTheme(){return this._defaultTheme}setDefaultTheme(e){this._setPlayerState(()=>({defaultTheme:e})),this._userPlaybackOptions.defaultTheme=e,this._animation&&this.render()}get loop(){return this._loop}setLoop(e){this._requireValidLoop(e),this._setPlayerState(()=>({loop:e})),this._userPlaybackOptions.loop=e}toggleLoop(){if(!this._lottie||["loading"].includes(this._currentState)){G("toggleLoop() Can't use whilst loading.");return}this.setLoop(!this._loop)}get background(){return this._background}setBackground(e){this._requireValidBackground(e),this._background=e,this._container&&(this._container.style.backgroundColor=e)}get _frame(){return this._lottie?this.currentState==="completed"?this.direction===-1?0:this._lottie.totalFrames:this._lottie.currentFrame:0}get _seeker(){return this._lottie?this._frame/this._lottie.totalFrames*100:0}async revertToManifestValues(e){var t;let i;!Array.isArray(e)||e.length===0?i=["autoplay","defaultTheme","direction","hover","intermission","loop","playMode","speed","activeAnimationId"]:i=e;let o=!1;if(i.includes("activeAnimationId")){let n=(t=this._dotLottieLoader.manifest)==null?void 0:t.activeAnimationId,r=this._getAnimationByIdOrIndex(n||0);this._activeAnimationId=n,await this._setCurrentAnimation(r.id),o=!0}i.forEach(n=>{switch(n){case"autoplay":delete this._userPlaybackOptions.autoplay,this.setAutoplay(this._getOption("autoplay"));break;case"defaultTheme":delete this._userPlaybackOptions.defaultTheme,this.setDefaultTheme(this._getOption("defaultTheme"));break;case"direction":delete this._userPlaybackOptions.direction,this.setDirection(this._getOption("direction"));break;case"hover":delete this._userPlaybackOptions.hover,this.setHover(this._getOption("hover"));break;case"intermission":delete this._userPlaybackOptions.intermission,this.setIntermission(this._getOption("intermission"));break;case"loop":delete this._userPlaybackOptions.loop,this.setLoop(this._getOption("loop"));break;case"playMode":delete this._userPlaybackOptions.playMode,this.setMode(this._getOption("playMode")),this.setDirection(this._getOption("direction"));break;case"speed":delete this._userPlaybackOptions.speed,this.setSpeed(this._getOption("speed"));break}}),o&&this.render()}removeEventListener(e,t){var i,o,n;try{e==="complete"?(i=this._container)==null||i.removeEventListener(e,t):(o=this._lottie)==null||o.removeEventListener(e,t),(n=this._listeners.get(e))==null||n.delete(t)}catch(r){Nt("removeEventListener",r)}}_handleAnimationComplete(){var e;typeof this._loop=="number"&&this.stop();let t=this.direction===-1?0:this.totalFrames-1;this.goToAndStop(t,!0),this._counter=0,this.clearCountTimer(),this.setCurrentState("completed"),(e=this._container)==null||e.dispatchEvent(new Event("complete"))}addEventListeners(){var e;if(!this._lottie||["loading"].includes(this._currentState)){G("addEventListeners() Can't use whilst loading.");return}this._lottie.addEventListener("enterFrame",()=>{var t;if(!this._lottie){G("enterFrame event : Lottie is undefined.");return}Math.floor(this._lottie.currentFrame)===0&&this.direction===-1&&((t=this._container)==null||t.dispatchEvent(new Event("complete")),this.loop||this.setCurrentState("completed")),this._notify()}),this._lottie.addEventListener("loopComplete",()=>{var t;if(!this._lottie){G("loopComplete event : Lottie is undefined.");return}(t=this._container)==null||t.dispatchEvent(new Event("loopComplete")),this.intermission>0&&this.pause();let i=this._lottie.playDirection;if(typeof this._loop=="number"&&this._loop>0&&(this._counter+=this._mode==="bounce"?.5:1,this._counter>=this._loop)){this._handleAnimationComplete();return}this._mode==="bounce"&&typeof i=="number"&&(i=Number(i)*-1);let o=i===-1?this._lottie.totalFrames-1:0;this.intermission?(this.goToAndPlay(o,!0),this.pause(),this._counterInterval=window.setTimeout(()=>{this._lottie&&(this._setPlayerState(()=>({direction:i})),this.goToAndPlay(o,!0))},this._intermission)):(this._setPlayerState(()=>({direction:i})),this.goToAndPlay(i===-1?this.totalFrames-1:0,!0))}),this._lottie.addEventListener("complete",()=>{if(this._lottie&&this._loop===!1&&this._mode==="bounce"){if(this._counter+=.5,this._counter>=1){this._handleAnimationComplete();return}this._counterInterval=window.setTimeout(()=>{if(!this._lottie)return;let t=this._lottie.playDirection;this._mode==="bounce"&&typeof t=="number"&&(t=Number(t)*-1);let i=t===-1?this.totalFrames-1:0;this._setPlayerState(()=>({direction:t})),this.goToAndPlay(i,!0)},this._intermission)}else this._handleAnimationComplete()});for(let[t,i]of this._listeners)if(t==="complete")for(let o of i)(e=this._container)==null||e.addEventListener(t,o);else for(let o of i)this._lottie.addEventListener(t,o)}async _setCurrentAnimation(e){this._currentState="loading";let t=await this._dotLottieLoader.getAnimation(e);this._currentAnimationId=e,this._animation=t,this._currentState="ready"}async _getAudioFactory(){if(this._animation&&yr(this._animation)){let{DotLottieAudio:e}=await Ct(()=>import("./dotlottie-audio-75C54RUV-C4ThZgkY.js"),__vite__mapDeps([2,3]));return t=>{let i=new e({src:[t]});return this._audios.push(i),i}}return null}async render(e){var t,i,o,n,r,s,l,a,d,u,h,c,f,y,p,w,g,C;if(e!=null&&e.id)await this._setCurrentAnimation(e.id);else if(!this._animation)throw B("no animation selected");let b=(t=ct.loop)!=null?t:!1,A=(i=ct.autoplay)!=null?i:!1,j=(o=ct.playMode)!=null?o:"normal",D=(n=ct.intermission)!=null?n:0,I=(r=ct.hover)!=null?r:!1,$=(s=ct.direction)!=null?s:1,L=(l=ct.speed)!=null?l:1,M=(a=ct.defaultTheme)!=null?a:"";b=(d=e==null?void 0:e.loop)!=null?d:this._getOption("loop"),A=(u=e==null?void 0:e.autoplay)!=null?u:this._getOption("autoplay"),j=(h=e==null?void 0:e.playMode)!=null?h:this._getOption("playMode"),D=(c=e==null?void 0:e.intermission)!=null?c:this._getOption("intermission"),I=(f=e==null?void 0:e.hover)!=null?f:this._getOption("hover"),$=(y=e==null?void 0:e.direction)!=null?y:this._getOption("direction"),L=(p=e==null?void 0:e.speed)!=null?p:this._getOption("speed"),M=(w=e==null?void 0:e.defaultTheme)!=null?w:this._getOption("defaultTheme");let T={...this._animationConfig,autoplay:I?!1:A,loop:typeof b=="number"?!0:b,renderer:this._worker?"svg":(g=this._animationConfig.renderer)!=null?g:"svg"},[U,H,W]=await Promise.all([this._dotLottieLoader.getTheme(M),this._getLottiePlayerInstance(),this._getAudioFactory()]);if(U&&this._animation?(this._animation=je(this._animation),this._animation.slots=U):this._animation=await this._dotLottieLoader.getAnimation((C=this._currentAnimationId)!=null?C:""),this._activeStateId&&!this._inInteractiveMode){this.enterInteractiveMode(this._activeStateId);return}this.destroy(),this._setPlayerState(()=>({defaultTheme:M,playMode:j,intermission:D,hover:I,loop:b})),W?this._lottie=H.loadAnimation({...T,container:this._container,animationData:this._animation,audioFactory:W}):this._lottie=H.loadAnimation({...T,container:this._container,animationData:this._animation}),typeof this._lottie.resetSegments>"u"&&(this._lottie.resetSegments=()=>{var q;(q=this._lottie)==null||q.playSegments([0,this._lottie.totalFrames],!0)}),this.addEventListeners(),this._container&&(this._container.__lottie=this._lottie),this._setPlayerState(()=>({direction:$,speed:L})),A&&!I&&(b===!1&&$===-1?this.play():this.setCurrentState("playing")),this._updateTestData()}async _getLottiePlayerInstance(){var e;let t=(e=this._animationConfig.renderer)!=null?e:"svg",i;if(this._worker)return t!=="svg"&&G("Worker is only supported with svg renderer. Change or remove renderer prop to get rid of this warning."),i=await Ct(()=>import("./lottie_worker-Q23FJ6ZR-YP5OKMTN-Dl7j5H7l.js"),__vite__mapDeps([4,3])),i.default;switch(t){case"svg":{this._light?i=await Ct(()=>import("./lottie_light-KMJEUZFY-TNG7ODX7-Cz6KFPKl.js"),__vite__mapDeps([5,3])):i=await Ct(()=>import("./lottie_svg-MJGYILXD-NRTSROOT-Ci_7qTj4.js"),__vite__mapDeps([6,3]));break}case"canvas":{this._light?i=await Ct(()=>import("./lottie_light_canvas-B5UTTNXA-PRI6IBWW-CV9yTcpO.js"),__vite__mapDeps([7,3])):i=await Ct(()=>import("./lottie_canvas-CDSUBMCL-MZNYH5VV-iWywsrJi.js"),__vite__mapDeps([8,3]));break}case"html":{this._light?i=await Ct(()=>import("./lottie_light_html-SLCECTRT-SYWXEBDN-Bl2Og0kV.js"),__vite__mapDeps([9,3])):i=await Ct(()=>import("./lottie_html-X3TYKVQI-L6774NQS-DBjbmfli.js"),__vite__mapDeps([10,3]));break}default:throw new Error(`Invalid renderer: ${t}`)}return i.default}_getActiveAnimationId(){var e,t,i,o;let n=this._dotLottieLoader.manifest;return(o=(i=(e=this._activeAnimationId)!=null?e:n==null?void 0:n.activeAnimationId)!=null?i:(t=n==null?void 0:n.animations[0])==null?void 0:t.id)!=null?o:void 0}async load(e){if(this._currentState==="loading"){G("Loading in progress..");return}try{if(this.setCurrentState("loading"),typeof this._src=="string")if(gr(this._src)){let i=JSON.parse(this._src);this._dotLottieLoader.loadFromLottieJSON(i)}else{let i=new URL(this._src,window.location.href);await this._dotLottieLoader.loadFromUrl(i.toString())}else if(typeof this._src=="object"&&me(this._src))this._dotLottieLoader.loadFromLottieJSON(this._src);else throw B("Invalid src provided");if(!this._dotLottieLoader.manifest)throw B("No manifest found");let t=this._getActiveAnimationId();if(!t)throw B("No active animation found");await this._setCurrentAnimation(t),await this.render(e)}catch(t){this.setCurrentState("error"),t instanceof Error&&Nt(`Error loading animation: ${t.message}`)}}setErrorState(e){this.setCurrentState("error"),Nt(e)}_requireValidDirection(e){if(e!==-1&&e!==1)throw B("Direction can only be -1 (backwards) or 1 (forwards)")}_requireValidIntermission(e){if(e<0||!Number.isInteger(e))throw B("intermission must be a positive number")}_requireValidLoop(e){if(typeof e=="number"&&(!Number.isInteger(e)||e<0))throw B("loop must be a positive number or boolean")}_requireValidSpeed(e){if(typeof e!="number")throw B("speed must be a number")}_requireValidBackground(e){if(typeof e!="string")throw B("background must be a string")}_requireValidAutoplay(e){if(typeof e!="boolean")throw B("autoplay must be a boolean")}_requireValidPlaybackOptions(e){e.direction&&this._requireValidDirection(e.direction),e.intermission&&this._requireValidIntermission(e.intermission),e.loop&&this._requireValidLoop(e.loop),e.speed&&this._requireValidSpeed(e.speed)}},kr=Object.defineProperty,Er=Object.getOwnPropertyDescriptor,it=(e,t,i,o)=>{for(var n=o>1?void 0:o?Er(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(n=(o?s(t,i,n):s(n))||n);return o&&n&&kr(t,i,n),n},xr=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}},Ar=(e,t,i)=>{t.constructor.createProperty(i,e)};function nt(e){return(t,i)=>i!==void 0?Ar(e,t,i):xr(e,t)}function Ir(e){return nt({...e,state:!0})}var Or=({finisher:e,descriptor:t})=>(i,o)=>{var n;if(o===void 0){let r=(n=i.originalKey)!==null&&n!==void 0?n:i.key,s=t!=null?{kind:"method",placement:"prototype",key:r,descriptor:t(i.key)}:{...i,key:r};return e!=null&&(s.finisher=function(l){e(l,r)}),s}{let r=i.constructor;t!==void 0&&Object.defineProperty(i,o,t(o)),e==null||e(r,o)}};function Pr(e,t){return Or({descriptor:i=>{let o={get(){var n,r;return(r=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(e))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(t){let n=typeof i=="symbol"?Symbol():"__"+i;o.get=function(){var r,s;return this[n]===void 0&&(this[n]=(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(e))!==null&&s!==void 0?s:null),this[n]}}return o}})}var Ne;((Ne=window.HTMLSlotElement)===null||Ne===void 0?void 0:Ne.prototype.assignedElements)!=null;var Tr={name:"@dotlottie/player-component",version:"2.7.12",description:"dotLottie animation player web component.",repository:"https://github.com/dotlottie/player-component.git",homepage:"https://dotlottie.io/players",bugs:"https://github.com/dotlottie/player-component/issues",author:"Jawish Hameed <jawish@lottiefiles.com>",license:"MIT",main:"dist/dotlottie-player.js",module:"dist/dotlottie-player.mjs",types:"dist/dotlottie-player.d.ts",files:["dist"],keywords:["dotlottie","animation","web component","component","lit-element","player"],scripts:{build:"tsup","cypress:open":"cypress open --component",dev:"tsup --watch",lint:"eslint .","lint:fix":"eslint --fix",test:"cypress run --component","type-check":"tsc --noEmit"},dependencies:{"@dotlottie/common":"workspace:*",lit:"^2.7.5"},devDependencies:{"@vitejs/plugin-legacy":"^4.1.0","axe-core":"^4.7.2",cypress:"^12.11.0","cypress-axe":"^1.4.0","cypress-ct-lit":"^0.3.2","lottie-web":"^5.12.2",terser:"^5.19.0",tsup:"^7.2.0",typescript:"^4.7.4",vite:"^4.3.9"},publishConfig:{access:"public"},browserslist:["> 3%"]},Ni="dotlottie-player",tt=class extends Wt{constructor(){super(...arguments);S(this,"defaultTheme","");S(this,"container");S(this,"playMode",Co.Normal);S(this,"autoplay",!1);S(this,"background","transparent");S(this,"controls",!1);S(this,"direction",1);S(this,"hover",!1);S(this,"loop");S(this,"renderer","svg");S(this,"speed",1);S(this,"src");S(this,"intermission",0);S(this,"activeAnimationId",null);S(this,"light",!1);S(this,"worker",!1);S(this,"activeStateId");S(this,"_seeker",0);S(this,"_dotLottieCommonPlayer");S(this,"_io");S(this,"_loop");S(this,"_renderer","svg");S(this,"_unsubscribeListeners");S(this,"_hasMultipleAnimations",!1);S(this,"_hasMultipleThemes",!1);S(this,"_hasMultipleStates",!1);S(this,"_popoverIsOpen",!1);S(this,"_animationsTabIsOpen",!1);S(this,"_statesTabIsOpen",!1);S(this,"_styleTabIsOpen",!1);S(this,"_themesForCurrentAnimation",[]);S(this,"_statesForCurrentAnimation",[])}_parseLoop(t){let i=parseInt(t,10);return Number.isInteger(i)&&i>0?(this._loop=i,i):typeof t=="string"&&["true","false"].includes(t)?(this._loop=t==="true",this._loop):(G("loop must be a positive integer or a boolean"),!1)}_handleSeekChange(t){let i=t.currentTarget;try{let o=parseInt(i.value,10);if(!this._dotLottieCommonPlayer)return;let n=o/100*this._dotLottieCommonPlayer.totalFrames;this.seek(n)}catch{throw B("Error while seeking animation")}}_initListeners(){let t=this._dotLottieCommonPlayer;if(t===void 0){G("player not initialized - cannot add event listeners","dotlottie-player-component");return}this._unsubscribeListeners=t.state.subscribe((i,o)=>{this._seeker=i.seeker,this.requestUpdate(),o.currentState!==i.currentState&&this.dispatchEvent(new CustomEvent(i.currentState)),this.dispatchEvent(new CustomEvent(Lt.Frame,{detail:{frame:i.frame,seeker:i.seeker}})),this.dispatchEvent(new CustomEvent(Lt.VisibilityChange,{detail:{visibilityPercentage:i.visibilityPercentage}}))}),t.addEventListener("complete",()=>{this.dispatchEvent(new CustomEvent(Lt.Complete))}),t.addEventListener("loopComplete",()=>{this.dispatchEvent(new CustomEvent(Lt.LoopComplete))}),t.addEventListener("DOMLoaded",()=>{let i=this.getManifest();i&&i.themes&&(this._themesForCurrentAnimation=i.themes.filter(o=>o.animations.includes(this.getCurrentAnimationId()||""))),i&&i.states&&(this._hasMultipleStates=i.states.length>0,this._statesForCurrentAnimation=[],i.states.forEach(o=>{this._statesForCurrentAnimation.push(o)})),this.dispatchEvent(new CustomEvent(Lt.Ready))}),t.addEventListener("data_ready",()=>{this.dispatchEvent(new CustomEvent(Lt.DataReady))}),t.addEventListener("data_failed",()=>{this.dispatchEvent(new CustomEvent(Lt.DataFail))}),window&&window.addEventListener("click",i=>this._clickOutListener(i))}async load(t,i,o){if(!this.shadowRoot)return;this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.destroy(),this._dotLottieCommonPlayer=new ji(t,this.container,{rendererSettings:i??{scaleMode:"noScale",clearCanvas:!0,progressiveLoad:!0,hideOnTransparent:!0},hover:this.hasAttribute("hover")?this.hover:void 0,renderer:this.hasAttribute("renderer")?this._renderer:void 0,loop:this.hasAttribute("loop")?this._loop:void 0,direction:this.hasAttribute("direction")?this.direction===1?1:-1:void 0,speed:this.hasAttribute("speed")?this.speed:void 0,intermission:this.hasAttribute("intermission")?Number(this.intermission):void 0,playMode:this.hasAttribute("playMode")?this.playMode:void 0,autoplay:this.hasAttribute("autoplay")?this.autoplay:void 0,activeAnimationId:this.hasAttribute("activeAnimationId")?this.activeAnimationId:void 0,defaultTheme:this.hasAttribute("defaultTheme")?this.defaultTheme:void 0,light:this.light,worker:this.worker,activeStateId:this.hasAttribute("activeStateId")?this.activeStateId:void 0}),await this._dotLottieCommonPlayer.load(o);let n=this.getManifest();this._hasMultipleAnimations=this.animationCount()>1,n&&(n.themes&&(this._themesForCurrentAnimation=n.themes.filter(r=>r.animations.includes(this.getCurrentAnimationId()||"")),this._hasMultipleThemes=n.themes.length>0),n.states&&(this._hasMultipleStates=n.states.length>0,this._statesForCurrentAnimation=[],n.states.forEach(r=>{this._statesForCurrentAnimation.push(r)}))),this._initListeners()}getCurrentAnimationId(){var t;return(t=this._dotLottieCommonPlayer)==null?void 0:t.currentAnimationId}animationCount(){var t;return this._dotLottieCommonPlayer&&((t=this._dotLottieCommonPlayer.getManifest())==null?void 0:t.animations.length)||0}animations(){if(!this._dotLottieCommonPlayer)return[];let t=this._dotLottieCommonPlayer.getManifest();return(t==null?void 0:t.animations.map(i=>i.id))||[]}currentAnimation(){return!this._dotLottieCommonPlayer||!this._dotLottieCommonPlayer.currentAnimationId?"":this._dotLottieCommonPlayer.currentAnimationId}getState(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.getState():Lo}getManifest(){var t;return(t=this._dotLottieCommonPlayer)==null?void 0:t.getManifest()}getLottie(){var t;return(t=this._dotLottieCommonPlayer)==null?void 0:t.getAnimationInstance()}getVersions(){return{lottieWebVersion:ji.getLottieWebVersion(),dotLottiePlayerVersion:`${Tr.version}`}}previous(t){var i;(i=this._dotLottieCommonPlayer)==null||i.previous(t)}next(t){var i;(i=this._dotLottieCommonPlayer)==null||i.next(t)}reset(){var t;(t=this._dotLottieCommonPlayer)==null||t.reset()}play(t,i){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.play(t,i)}pause(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.pause()}stop(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stop()}playOnShow(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.playOnShow(t)}stopPlayOnShow(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stopPlayOnShow()}playOnScroll(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.playOnScroll(t)}stopPlayOnScroll(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stopPlayOnScroll()}seek(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.seek(t)}snapshot(t=!0){if(!this.shadowRoot)return"";let i=this.shadowRoot.querySelector(".animation svg"),o=new XMLSerializer().serializeToString(i);if(t){let n=document.createElement("a");n.href=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(o)}`,n.download=`download_${this._seeker}.svg`,document.body.appendChild(n),n.click(),document.body.removeChild(n)}return o}setTheme(t){var i;(i=this._dotLottieCommonPlayer)==null||i.setDefaultTheme(t)}themes(){var t;if(!this._dotLottieCommonPlayer)return[];let i=this._dotLottieCommonPlayer.getManifest();return((t=i==null?void 0:i.themes)==null?void 0:t.map(o=>o.id))||[]}getDefaultTheme(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.defaultTheme:""}getActiveStateMachine(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.activeStateId:""}_freeze(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.freeze()}setSpeed(t=1){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setSpeed(t)}setDirection(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setDirection(t)}setLooping(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setLoop(t)}isLooping(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.loop:!1}togglePlay(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.togglePlay()}toggleLooping(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.toggleLoop()}setPlayMode(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setMode(t)}enterInteractiveMode(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.enterInteractiveMode(t)}exitInteractiveMode(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.exitInteractiveMode()}revertToManifestValues(t){var i;(i=this._dotLottieCommonPlayer)==null||i.revertToManifestValues(t)}static get styles(){return on}async firstUpdated(){var t;this.container=(t=this.shadowRoot)==null?void 0:t.querySelector("#animation"),"IntersectionObserver"in window&&(this._io=new IntersectionObserver(i=>{var o,n;i[0]!==void 0&&i[0].isIntersecting?((o=this._dotLottieCommonPlayer)==null?void 0:o.currentState)===Ut.Frozen&&this.play():((n=this._dotLottieCommonPlayer)==null?void 0:n.currentState)===Ut.Playing&&this._freeze()}),this._io.observe(this.container)),this.loop?this._parseLoop(this.loop):this.hasAttribute("loop")&&this._parseLoop("true"),this.renderer==="svg"?this._renderer="svg":this.renderer==="canvas"?this._renderer="canvas":this.renderer==="html"&&(this._renderer="html"),this.src&&await this.load(this.src)}disconnectedCallback(){var t,i;this._io&&(this._io.disconnect(),this._io=void 0),(t=this._dotLottieCommonPlayer)==null||t.destroy(),(i=this._unsubscribeListeners)==null||i.call(this),window&&window.removeEventListener("click",o=>this._clickOutListener(o))}_clickOutListener(t){!t.composedPath().some(i=>i instanceof HTMLElement?i.classList.contains("popover")||i.id==="lottie-animation-options":!1)&&this._popoverIsOpen&&(this._popoverIsOpen=!1,this.requestUpdate())}renderControls(){var t,i,o,n,r;let s=((t=this._dotLottieCommonPlayer)==null?void 0:t.currentState)===Ut.Playing,l=((i=this._dotLottieCommonPlayer)==null?void 0:i.currentState)===Ut.Paused;return z`
      <div id="lottie-controls" aria-label="lottie-animation-controls" class="toolbar">
        ${this._hasMultipleAnimations?z`
              <button @click=${()=>this.previous()} aria-label="Previous animation" class="btn-spacing-left">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.69214 13.5C1.69214 13.7761 1.916 14 2.19214 14C2.46828 14 2.69214 13.7761 2.69214 13.5L2.69214 2.5C2.69214 2.22386 2.46828 2 2.19214 2C1.916 2 1.69214 2.22386 1.69214 2.5V13.5ZM12.5192 13.7828C13.1859 14.174 14.0254 13.6933 14.0254 12.9204L14.0254 3.0799C14.0254 2.30692 13.1859 1.8262 12.5192 2.21747L4.13612 7.13769C3.47769 7.52414 3.47769 8.4761 4.13612 8.86255L12.5192 13.7828Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:z``}
        <button
          id="lottie-play-button"
          @click=${()=>{this.togglePlay()}}
          class=${s||l?`active ${this._hasMultipleAnimations?"btn-spacing-center":"btn-spacing-right"}`:`${this._hasMultipleAnimations?"btn-spacing-center":"btn-spacing-right"}`}
          aria-label="play / pause animation"
        >
          ${s?z`
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.99996 2C3.26358 2 2.66663 2.59695 2.66663 3.33333V12.6667C2.66663 13.403 3.26358 14 3.99996 14H5.33329C6.06967 14 6.66663 13.403 6.66663 12.6667V3.33333C6.66663 2.59695 6.06967 2 5.33329 2H3.99996Z"
                    fill="#20272C"
                  />
                  <path
                    d="M10.6666 2C9.93025 2 9.33329 2.59695 9.33329 3.33333V12.6667C9.33329 13.403 9.93025 14 10.6666 14H12C12.7363 14 13.3333 13.403 13.3333 12.6667V3.33333C13.3333 2.59695 12.7363 2 12 2H10.6666Z"
                    fill="#20272C"
                  />
                </svg>
              `:z`
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.33337 3.46787C3.33337 2.52312 4.35948 1.93558 5.17426 2.41379L12.8961 6.94592C13.7009 7.41824 13.7009 8.58176 12.8961 9.05408L5.17426 13.5862C4.35948 14.0644 3.33337 13.4769 3.33337 12.5321V3.46787Z"
                    fill="#20272C"
                  />
                </svg>
              `}
        </button>
        ${this._hasMultipleAnimations?z`
              <button @click=${()=>this.next()} aria-label="Next animation" class="btn-spacing-right">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.3336 2.5C14.3336 2.22386 14.1097 2 13.8336 2C13.5574 2 13.3336 2.22386 13.3336 2.5V13.5C13.3336 13.7761 13.5574 14 13.8336 14C14.1097 14 14.3336 13.7761 14.3336 13.5V2.5ZM3.50618 2.21722C2.83954 1.82595 2 2.30667 2 3.07965V12.9201C2 13.6931 2.83954 14.1738 3.50618 13.7825L11.8893 8.86231C12.5477 8.47586 12.5477 7.52389 11.8893 7.13745L3.50618 2.21722Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:z``}
        <input
          id="lottie-seeker-input"
          class="seeker ${((o=this._dotLottieCommonPlayer)==null?void 0:o.direction)===-1?"to-left":""}"
          type="range"
          min="0"
          step="1"
          max="100"
          .value=${this._seeker}
          @input=${a=>this._handleSeekChange(a)}
          @mousedown=${()=>{this._freeze()}}
          @mouseup=${()=>{var a;(a=this._dotLottieCommonPlayer)==null||a.unfreeze()}}
          aria-valuemin="1"
          aria-valuemax="100"
          role="slider"
          aria-valuenow=${this._seeker}
          aria-label="lottie-seek-input"
          style=${`--seeker: ${this._seeker}`}
        />
        <button
          id="lottie-loop-toggle"
          @click=${()=>this.toggleLooping()}
          class=${(n=this._dotLottieCommonPlayer)!=null&&n.loop?"active btn-spacing-left":"btn-spacing-left"}
          aria-label="loop-toggle"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8654 2.31319C11.0607 2.11793 11.3772 2.11793 11.5725 2.31319L13.4581 4.19881C13.6534 4.39407 13.6534 4.71066 13.4581 4.90592L11.5725 6.79154C11.3772 6.9868 11.0607 6.9868 10.8654 6.79154C10.6701 6.59628 10.6701 6.27969 10.8654 6.08443L11.6162 5.33362H4V6.66695C4 7.03514 3.70152 7.33362 3.33333 7.33362C2.96514 7.33362 2.66666 7.03514 2.66666 6.66695L2.66666 4.66695C2.66666 4.29876 2.96514 4.00028 3.33333 4.00028H11.8454L10.8654 3.0203C10.6701 2.82504 10.6701 2.50846 10.8654 2.31319Z"
              fill="currentColor"
            />
            <path
              d="M12.4375 11.9999C12.8057 11.9999 13.1042 11.7014 13.1042 11.3332V9.33321C13.1042 8.96502 12.8057 8.66655 12.4375 8.66655C12.0693 8.66655 11.7708 8.96502 11.7708 9.33321V10.6665H4.15462L4.90543 9.91573C5.10069 9.72047 5.10069 9.40389 4.90543 9.20862C4.71017 9.01336 4.39359 9.01336 4.19832 9.20862L2.31271 11.0942C2.11744 11.2895 2.11744 11.6061 2.31271 11.8013L4.19832 13.687C4.39359 13.8822 4.71017 13.8822 4.90543 13.687C5.10069 13.4917 5.10069 13.1751 4.90543 12.9799L3.92545 11.9999H12.4375Z"
              fill="currentColor"
            />
          </svg>
        </button>
        ${this._hasMultipleAnimations||this._hasMultipleThemes||this._hasMultipleStates?z`
              <button
                id="lottie-animation-options"
                @click=${()=>{this._popoverIsOpen=!this._popoverIsOpen,this.requestUpdate()}}
                aria-label="options"
                class="btn-spacing-right"
                style=${`background-color: ${this._popoverIsOpen?"var(--lottie-player-toolbar-icon-hover-color)":""}`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.33337 11.6666C7.78109 11.6666 7.33337 12.1143 7.33337 12.6666C7.33337 13.2189 7.78109 13.6666 8.33337 13.6666C8.88566 13.6666 9.33337 13.2189 9.33337 12.6666C9.33337 12.1143 8.88566 11.6666 8.33337 11.6666Z"
                    fill="#20272C"
                  />
                  <path
                    d="M7.33337 7.99992C7.33337 7.44763 7.78109 6.99992 8.33337 6.99992C8.88566 6.99992 9.33338 7.44763 9.33338 7.99992C9.33338 8.5522 8.88566 8.99992 8.33337 8.99992C7.78109 8.99992 7.33337 8.5522 7.33337 7.99992Z"
                    fill="#20272C"
                  />
                  <path
                    d="M7.33337 3.33325C7.33337 2.78097 7.78109 2.33325 8.33337 2.33325C8.88566 2.33325 9.33338 2.78097 9.33338 3.33325C9.33338 3.88554 8.88566 4.33325 8.33337 4.33325C7.78109 4.33325 7.33337 3.88554 7.33337 3.33325Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:z``}
      </div>
      ${this._popoverIsOpen?z`
            <div
              id="popover"
              class="popover"
              tabindex="0"
              aria-label="lottie animations themes popover"
              style="min-height: ${this.themes().length>0?"84px":"auto"}"
            >
              ${!this._animationsTabIsOpen&&!this._styleTabIsOpen&&!this._statesTabIsOpen?z`
                    <button
                      class="popover-button"
                      tabindex="0"
                      aria-label="animations"
                      @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate()}}
                      @keydown=${a=>{(a.code==="Space"||a.code==="Enter")&&(this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate())}}
                    >
                      <div class="popover-button-text">Animations</div>
                      <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                            fill="#4C5863"
                          />
                        </svg>
                      </div>
                    </button>
                  `:z``}
              ${this._hasMultipleThemes&&!this._styleTabIsOpen&&!this._animationsTabIsOpen&&!this._statesTabIsOpen?z` <button
                    class="popover-button"
                    aria-label="Themes"
                    @click=${()=>{this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate()}}
                    @keydown=${a=>{(a.code==="Space"||a.code==="Enter")&&(this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate())}}
                  >
                    <div class="popover-button-text">Themes</div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                          fill="#4C5863"
                        />
                      </svg>
                    </div>
                  </button>`:""}
              ${this._hasMultipleStates&&!this._styleTabIsOpen&&!this._animationsTabIsOpen&&!this._statesTabIsOpen?z` <button
                    class="popover-button"
                    aria-label="States"
                    @click=${()=>{this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate()}}
                    @keydown=${a=>{(a.code==="Space"||a.code==="Enter")&&(this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate())}}
                  >
                    <div class="popover-button-text">States</div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                          fill="#4C5863"
                        />
                      </svg>
                    </div>
                  </button>`:""}
              ${this._animationsTabIsOpen?z`<button
                      class="option-title-button"
                      aria-label="Back to main popover menu"
                      @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate()}}
                    >
                      <div class="option-title-chevron">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                            fill="#20272C"
                          />
                        </svg>
                      </div>
                      <div>Animations</div>
                    </button>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this.animations().map(a=>z`
                            <li>
                              <button
                                class="option-button"
                                aria-label=${`${a}`}
                                @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this._popoverIsOpen=!this._popoverIsOpen,this.play(a),this.requestUpdate()}}
                                @keydown=${d=>{(d.code==="Space"||d.code==="Enter")&&(this._animationsTabIsOpen=!this._animationsTabIsOpen,this._popoverIsOpen=!this._popoverIsOpen,this.play(a),this.requestUpdate())}}
                              >
                                <div class="option-tick">
                                  ${this.currentAnimation()===a?z`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:z`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${a}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div> `:z``}
              ${this._styleTabIsOpen?z`<div class="option-title-themes-row">
                      <button
                        class="option-title-button themes"
                        aria-label="Back to main popover menu"
                        @click=${()=>{this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate()}}
                      >
                        <div class="option-title-chevron">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                              fill="#20272C"
                            />
                          </svg>
                        </div>
                        <div class="option-title-text">Themes</div>
                        ${((r=this._dotLottieCommonPlayer)==null?void 0:r.defaultTheme)===""?z``:z`
                              <button
                                class="reset-btn"
                                @click=${()=>{this.setTheme(""),this.requestUpdate()}}
                              >
                                Reset
                              </button>
                            `}
                      </button>
                    </div>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this._themesForCurrentAnimation.map(a=>z`
                            <li>
                              <button
                                class="option-button"
                                aria-label="${a.id}"
                                @click=${()=>{this.setTheme(a.id)}}
                                @keydown=${d=>{(d.code==="Space"||d.code==="Enter")&&this.setTheme(a.id)}}
                              >
                                <div class="option-tick">
                                  ${this.getDefaultTheme()===a.id?z`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:z`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${a.id}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div>`:z``}
              ${this._statesTabIsOpen?z`<div class="option-title-themes-row">
                      <button
                        class="option-title-button themes"
                        aria-label="Back to main popover menu"
                        @click=${()=>{this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate()}}
                      >
                        <div class="option-title-chevron">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                              fill="#20272C"
                            />
                          </svg>
                        </div>
                        <div class="option-title-text">States</div>
                        <button
                          class="reset-btn"
                          @click=${()=>{this.exitInteractiveMode(),this.requestUpdate()}}
                        >
                          Reset
                        </button>
                      </button>
                    </div>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this._statesForCurrentAnimation.map(a=>z`
                            <li>
                              <button
                                class="option-button"
                                aria-label="${a}"
                                @click=${()=>{this.enterInteractiveMode(a)}}
                                @keydown=${d=>{(d.code==="Space"||d.code==="Enter")&&this.enterInteractiveMode(a)}}
                              >
                                <div class="option-tick">
                                  ${this.getActiveStateMachine()===a?z`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:z`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${a}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div>`:z``}
            </div>
          `:z``}
    `}render(){var t;let i=this.controls?"main controls":"main",o=this.controls?"animation controls":"animation";return z`
      <div id="animation-container" class=${i} lang="en" role="img" aria-label="lottie-animation-container">
        <div id="animation" class=${o} style="background:${this.background};">
          ${((t=this._dotLottieCommonPlayer)==null?void 0:t.currentState)===Ut.Error?z` <div class="error">⚠️</div> `:void 0}
        </div>
        ${this.controls?this.renderControls():void 0}
      </div>
    `}};it([nt({type:String})],tt.prototype,"defaultTheme",2),it([Pr("#animation")],tt.prototype,"container",2),it([nt()],tt.prototype,"playMode",2),it([nt({type:Boolean})],tt.prototype,"autoplay",2),it([nt({type:String})],tt.prototype,"background",2),it([nt({type:Boolean})],tt.prototype,"controls",2),it([nt({type:Number})],tt.prototype,"direction",2),it([nt({type:Boolean})],tt.prototype,"hover",2),it([nt({type:String})],tt.prototype,"loop",2),it([nt({type:String})],tt.prototype,"renderer",2),it([nt({type:Number})],tt.prototype,"speed",2),it([nt({type:String})],tt.prototype,"src",2),it([nt()],tt.prototype,"intermission",2),it([nt({type:String})],tt.prototype,"activeAnimationId",2),it([nt({type:Boolean})],tt.prototype,"light",2),it([nt({type:Boolean})],tt.prototype,"worker",2),it([nt({type:String})],tt.prototype,"activeStateId",2),it([Ir()],tt.prototype,"_seeker",2);customElements.get(Ni)||customElements.define(Ni,tt);/*! Bundled license information:

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/const Mr=({candleVisible:e,userName:t})=>x.jsxs("div",{className:"cake",children:[x.jsx("div",{className:"plate"}),x.jsx("div",{className:"layer layer-bottom"}),x.jsx("div",{className:"layer layer-middle"}),x.jsx("div",{className:"layer layer-top"}),x.jsx("div",{className:"icing"}),x.jsx("div",{className:"drip drip1"}),x.jsx("div",{className:"drip drip2"}),x.jsx("div",{className:"drip drip3"}),x.jsx("div",{className:"candle",children:e?x.jsx("div",{id:"flame",className:"flame"}):x.jsx("div",{id:"flame",className:"flame out"})}),x.jsx("div",{className:"name",children:t})]});var So={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},zi=N.createContext&&N.createContext(So),jr=["attr","size","title"];function Nr(e,t){if(e==null)return{};var i=zr(e,t),o,n;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}function zr(e,t){if(e==null)return{};var i={},o=Object.keys(e),n,r;for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&(i[n]=e[n]);return i}function ye(){return ye=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},ye.apply(this,arguments)}function Ui(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),i.push.apply(i,o)}return i}function ge(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?Ui(Object(i),!0).forEach(function(o){Ur(e,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Ui(Object(i)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(i,o))})}return e}function Ur(e,t,i){return t=Dr(t),t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function Dr(e){var t=Rr(e,"string");return typeof t=="symbol"?t:String(t)}function Rr(e,t){if(typeof e!="object"||e===null)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var o=i.call(e,t||"default");if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function $o(e){return e&&e.map((t,i)=>N.createElement(t.tag,ge({key:i},t.attr),$o(t.child)))}function Se(e){return t=>N.createElement(Br,ye({attr:ge({},e.attr)},t),$o(e.child))}function Br(e){var t=i=>{var{attr:o,size:n,title:r}=e,s=Nr(e,jr),l=n||i.size||"1em",a;return i.className&&(a=i.className),e.className&&(a=(a?a+" ":"")+e.className),N.createElement("svg",ye({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,o,s,{className:a,style:ge(ge({color:e.color||i.color},i.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),r&&N.createElement("title",null,r),e.children)};return zi!==void 0?N.createElement(zi.Consumer,null,i=>t(i)):t(So)}function Fr(e){return Se({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},child:[]},{tag:"path",attr:{d:"M8.973 8.974c-.335 .378 -.67 .716 -.973 1.026c-1.226 1.26 -2 3.24 -2 5a6 6 0 0 0 11.472 2.466m.383 -3.597c-.32 -1.409 -1.122 -3.045 -1.855 -3.869c-.281 .472 -.543 .87 -.79 1.202m-2.358 -2.35c-.068 -2.157 -1.182 -4.184 -1.852 -4.852c0 .968 -.18 1.801 -.465 2.527"},child:[]},{tag:"path",attr:{d:"M3 3l18 18"},child:[]}]})(e)}function Vr(e){return Se({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},child:[]},{tag:"path",attr:{d:"M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z"},child:[]}]})(e)}function Hr(e){return Se({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},child:[]},{tag:"path",attr:{d:"M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z",strokeWidth:"0",fill:"currentColor"},child:[]}]})(e)}function qr(e){return Se({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},child:[]},{tag:"path",attr:{d:"M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z",strokeWidth:"0",fill:"currentColor"},child:[]}]})(e)}const Di=new URL("/",import.meta.url).href,ze={color:"#ffffff",opacity:.9,borderWidth:0,display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#000000"};function Wr(){const[e,t]=P.useState(!1),i=P.useRef(void 0),[o,n]=P.useState(!1),[r,s]=P.useState(!1),l=r||o,a=P.useCallback(()=>t(!0),[]),[d,u]=P.useState(""),[h,c]=P.useState(""),[f,y]=P.useState(null),[p,w]=P.useState(null);P.useEffect(()=>{const L=localStorage.getItem("birthdayUserInfo");if(L){const M=JSON.parse(L);w(M)}},[]);const g=L=>{if(L.target.files&&L.target.files[0]){const M=L.target.files[0],T=new FileReader;T.onloadend=()=>{y(T.result)},T.readAsDataURL(M)}},C=L=>{L.preventDefault();const M=new Date(h).toLocaleDateString("en-GB");localStorage.setItem("birthdayUserInfo",JSON.stringify({name:d,birthday:M,imagePreview:f}));const T=localStorage.getItem("birthdayUserInfo");if(T){const U=JSON.parse(T);w(U)}},b=()=>{w(null),localStorage.removeItem("birthdayUserInfo")},A=P.useCallback(()=>{t(L=>!L)},[]),j=P.useRef(new Audio(Di)),D=P.useCallback(()=>{n(!0),j.current.load(),j.current.play()},[]),I=P.useCallback(()=>{D(),a()},[a,D]);P.useEffect(()=>{I()},[I]);const $=P.useCallback(async L=>{try{i.current=L;const M=new AudioContext,T=M.createMediaStreamSource(L),U=M.createAnalyser();T.connect(U),U.fftSize=2048;const H=U.frequencyBinCount,W=new Uint8Array(H);setInterval(()=>{U.getByteFrequencyData(W),W.reduce((st,v)=>st+v,0)/H>=25&&p&&(t(!1),setTimeout(()=>{window.location.href="/banner.html"},1e3))},100)}catch(M){console.error("Error accessing microphone:",M)}},[p]);return P.useEffect(()=>{if(p)return(async()=>{try{const L=await navigator.mediaDevices.getUserMedia({audio:!0});L&&$(L)}catch(L){console.error("Error accessing microphone:",L)}})(),()=>{i.current&&i.current.getTracks().forEach(L=>L.stop())}},[p,$]),P.useLayoutEffect(()=>{const L=window.location.search;new URLSearchParams(L).get("shared")&&(t(!0),s(!0))},[]),x.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100dvh",justifyContent:"space-between"},children:[x.jsx(x.Fragment,{children:!p&&x.jsxs(x.Fragment,{children:[x.jsx("div",{className:"overlay"}),x.jsxs("div",{className:"form-container",children:[x.jsx("h2",{children:"Infomation"}),x.jsxs("form",{onSubmit:C,children:[x.jsxs("div",{className:"form-group",children:[x.jsx("label",{htmlFor:"name",children:"Name:"}),x.jsx("input",{type:"text",id:"name",maxlength:20,placeholder:"Nhập tên trên bánh",required:!0,className:"input-field",value:d,onChange:L=>u(L.target.value)})]}),x.jsxs("div",{className:"form-group",children:[x.jsx("label",{htmlFor:"birthday",children:"Birthday:"}),x.jsx("input",{type:"date",id:"birthday",required:!0,className:"input-field",value:h,onChange:L=>c(L.target.value)})]}),x.jsxs("div",{className:"form-group",children:[x.jsx("label",{htmlFor:"image",children:"Ảnh:"}),x.jsx("input",{type:"file",id:"image",accept:"image/*",onChange:g,className:"input-field"})]}),f&&x.jsx("div",{className:"image-preview",children:x.jsx("img",{src:f,alt:"Preview",className:"preview-image"})}),x.jsx("button",{type:"submit",className:"submit-button",children:"Continue"})]})]})]})}),x.jsx("audio",{src:Di,ref:j,preload:"auto"}),x.jsx("div",{children:x.jsx(Mr,{candleVisible:e,userName:p==null?void 0:p.name})}),x.jsx("div",{style:{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)"},children:x.jsx("dotlottie-player",{src:"./assets/hbd.lottie",autoplay:!0,loop:!0,style:{zIndex:20,visibility:l?"visible":"hidden",width:400}})}),x.jsx("div",{style:{position:"absolute",top:"25%",left:"50%",transform:"translateX(-50%)"},children:x.jsx("dotlottie-player",{src:"./assets/confetti.lottie",autoplay:!0,loop:!0,style:{zIndex:30,visibility:l?"visible":"hidden",width:400}})}),x.jsx("div",{style:{position:"absolute",bottom:"1.25%",left:"50%",transform:"translateX(-50%)"},children:x.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",gap:16,padding:16,height:50},children:[x.jsx("button",{id:"start",style:{display:"none"},onClick:I,children:x.jsx(qr,{})}),x.jsx("button",{id:"toggle-candle",style:ze,onClick:A,children:e?x.jsx(Fr,{}):x.jsx(Vr,{})}),x.jsx("button",{style:ze,onClick:b,children:x.jsx(Hr,{})})]})})]})}function ko(e){var t,i,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(t=0;t<n;t++)e[t]&&(i=ko(e[t]))&&(o&&(o+=" "),o+=i)}else for(i in e)e[i]&&(o&&(o+=" "),o+=i);return o}function $t(){for(var e,t,i=0,o="",n=arguments.length;i<n;i++)(e=arguments[i])&&(t=ko(e))&&(o&&(o+=" "),o+=t);return o}const Yt=e=>typeof e=="number"&&!isNaN(e),Ot=e=>typeof e=="string",ut=e=>typeof e=="function",ue=e=>Ot(e)||ut(e)?e:null,Xe=e=>P.isValidElement(e)||Ot(e)||ut(e)||Yt(e);function Jr(e,t,i){i===void 0&&(i=300);const{scrollHeight:o,style:n}=e;requestAnimationFrame(()=>{n.minHeight="initial",n.height=o+"px",n.transition=`all ${i}ms`,requestAnimationFrame(()=>{n.height="0",n.padding="0",n.margin="0",setTimeout(t,i)})})}function $e(e){let{enter:t,exit:i,appendPosition:o=!1,collapse:n=!0,collapseDuration:r=300}=e;return function(s){let{children:l,position:a,preventExitTransition:d,done:u,nodeRef:h,isIn:c,playToast:f}=s;const y=o?`${t}--${a}`:t,p=o?`${i}--${a}`:i,w=P.useRef(0);return P.useLayoutEffect(()=>{const g=h.current,C=y.split(" "),b=A=>{A.target===h.current&&(f(),g.removeEventListener("animationend",b),g.removeEventListener("animationcancel",b),w.current===0&&A.type!=="animationcancel"&&g.classList.remove(...C))};g.classList.add(...C),g.addEventListener("animationend",b),g.addEventListener("animationcancel",b)},[]),P.useEffect(()=>{const g=h.current,C=()=>{g.removeEventListener("animationend",C),n?Jr(g,u,r):u()};c||(d?C():(w.current=1,g.className+=` ${p}`,g.addEventListener("animationend",C)))},[c]),N.createElement(N.Fragment,null,l)}}function Ri(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const dt=new Map;let Qt=[];const Ye=new Set,Zr=e=>Ye.forEach(t=>t(e)),Eo=()=>dt.size>0;function xo(e,t){var i;if(t)return!((i=dt.get(t))==null||!i.isToastActive(e));let o=!1;return dt.forEach(n=>{n.isToastActive(e)&&(o=!0)}),o}function Ao(e,t){Xe(e)&&(Eo()||Qt.push({content:e,options:t}),dt.forEach(i=>{i.buildToast(e,t)}))}function Bi(e,t){dt.forEach(i=>{t!=null&&t!=null&&t.containerId?(t==null?void 0:t.containerId)===i.id&&i.toggle(e,t==null?void 0:t.id):i.toggle(e,t==null?void 0:t.id)})}function Gr(e){const{subscribe:t,getSnapshot:i,setProps:o}=P.useRef(function(r){const s=r.containerId||1;return{subscribe(l){const a=function(u,h,c){let f=1,y=0,p=[],w=[],g=[],C=h;const b=new Map,A=new Set,j=()=>{g=Array.from(b.values()),A.forEach($=>$())},D=$=>{w=$==null?[]:w.filter(L=>L!==$),j()},I=$=>{const{toastId:L,onOpen:M,updateId:T,children:U}=$.props,H=T==null;$.staleId&&b.delete($.staleId),b.set(L,$),w=[...w,$.props.toastId].filter(W=>W!==$.staleId),j(),c(Ri($,H?"added":"updated")),H&&ut(M)&&M(P.isValidElement(U)&&U.props)};return{id:u,props:C,observe:$=>(A.add($),()=>A.delete($)),toggle:($,L)=>{b.forEach(M=>{L!=null&&L!==M.props.toastId||ut(M.toggle)&&M.toggle($)})},removeToast:D,toasts:b,clearQueue:()=>{y-=p.length,p=[]},buildToast:($,L)=>{if((E=>{let{containerId:k,toastId:O,updateId:R}=E;const J=k?k!==u:u!==1,X=b.has(O)&&R==null;return J||X})(L))return;const{toastId:M,updateId:T,data:U,staleId:H,delay:W}=L,q=()=>{D(M)},et=T==null;et&&y++;const K={...C,style:C.toastStyle,key:f++,...Object.fromEntries(Object.entries(L).filter(E=>{let[k,O]=E;return O!=null})),toastId:M,updateId:T,data:U,closeToast:q,isIn:!1,className:ue(L.className||C.toastClassName),bodyClassName:ue(L.bodyClassName||C.bodyClassName),progressClassName:ue(L.progressClassName||C.progressClassName),autoClose:!L.isLoading&&(st=L.autoClose,v=C.autoClose,st===!1||Yt(st)&&st>0?st:v),deleteToast(){const E=b.get(M),{onClose:k,children:O}=E.props;ut(k)&&k(P.isValidElement(O)&&O.props),c(Ri(E,"removed")),b.delete(M),y--,y<0&&(y=0),p.length>0?I(p.shift()):j()}};var st,v;K.closeButton=C.closeButton,L.closeButton===!1||Xe(L.closeButton)?K.closeButton=L.closeButton:L.closeButton===!0&&(K.closeButton=!Xe(C.closeButton)||C.closeButton);let m=$;P.isValidElement($)&&!Ot($.type)?m=P.cloneElement($,{closeToast:q,toastProps:K,data:U}):ut($)&&(m=$({closeToast:q,toastProps:K,data:U}));const _={content:m,props:K,staleId:H};C.limit&&C.limit>0&&y>C.limit&&et?p.push(_):Yt(W)?setTimeout(()=>{I(_)},W):I(_)},setProps($){C=$},setToggle:($,L)=>{b.get($).toggle=L},isToastActive:$=>w.some(L=>L===$),getSnapshot:()=>C.newestOnTop?g.reverse():g}}(s,r,Zr);dt.set(s,a);const d=a.observe(l);return Qt.forEach(u=>Ao(u.content,u.options)),Qt=[],()=>{d(),dt.delete(s)}},setProps(l){var a;(a=dt.get(s))==null||a.setProps(l)},getSnapshot(){var l;return(l=dt.get(s))==null?void 0:l.getSnapshot()}}}(e)).current;o(e);const n=P.useSyncExternalStore(t,i,i);return{getToastToRender:function(r){if(!n)return[];const s=new Map;return n.forEach(l=>{const{position:a}=l.props;s.has(a)||s.set(a,[]),s.get(a).push(l)}),Array.from(s,l=>r(l[0],l[1]))},isToastActive:xo,count:n==null?void 0:n.length}}function Kr(e){const[t,i]=P.useState(!1),[o,n]=P.useState(!1),r=P.useRef(null),s=P.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:a,closeToast:d,onClick:u,closeOnClick:h}=e;var c,f;function y(){i(!0)}function p(){i(!1)}function w(b){const A=r.current;s.canDrag&&A&&(s.didMove=!0,t&&p(),s.delta=e.draggableDirection==="x"?b.clientX-s.start:b.clientY-s.start,s.start!==b.clientX&&(s.canCloseOnClick=!1),A.style.transform=`translate3d(${e.draggableDirection==="x"?`${s.delta}px, var(--y)`:`0, calc(${s.delta}px + var(--y))`},0)`,A.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function g(){document.removeEventListener("pointermove",w),document.removeEventListener("pointerup",g);const b=r.current;if(s.canDrag&&s.didMove&&b){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return n(!0),e.closeToast(),void e.collapseAll();b.style.transition="transform 0.2s, opacity 0.2s",b.style.removeProperty("transform"),b.style.removeProperty("opacity")}}(f=dt.get((c={id:e.toastId,containerId:e.containerId,fn:i}).containerId||1))==null||f.setToggle(c.id,c.fn),P.useEffect(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||p(),window.addEventListener("focus",y),window.addEventListener("blur",p),()=>{window.removeEventListener("focus",y),window.removeEventListener("blur",p)}},[e.pauseOnFocusLoss]);const C={onPointerDown:function(b){if(e.draggable===!0||e.draggable===b.pointerType){s.didMove=!1,document.addEventListener("pointermove",w),document.addEventListener("pointerup",g);const A=r.current;s.canCloseOnClick=!0,s.canDrag=!0,A.style.transition="none",e.draggableDirection==="x"?(s.start=b.clientX,s.removalDistance=A.offsetWidth*(e.draggablePercent/100)):(s.start=b.clientY,s.removalDistance=A.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(b){const{top:A,bottom:j,left:D,right:I}=r.current.getBoundingClientRect();b.nativeEvent.type!=="touchend"&&e.pauseOnHover&&b.clientX>=D&&b.clientX<=I&&b.clientY>=A&&b.clientY<=j?p():y()}};return l&&a&&(C.onMouseEnter=p,e.stacked||(C.onMouseLeave=y)),h&&(C.onClick=b=>{u&&u(b),s.canCloseOnClick&&d()}),{playToast:y,pauseToast:p,isRunning:t,preventExitTransition:o,toastRef:r,eventHandlers:C}}function Xr(e){let{delay:t,isRunning:i,closeToast:o,type:n="default",hide:r,className:s,style:l,controlledProgress:a,progress:d,rtl:u,isIn:h,theme:c}=e;const f=r||a&&d===0,y={...l,animationDuration:`${t}ms`,animationPlayState:i?"running":"paused"};a&&(y.transform=`scaleX(${d})`);const p=$t("Toastify__progress-bar",a?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${c}`,`Toastify__progress-bar--${n}`,{"Toastify__progress-bar--rtl":u}),w=ut(s)?s({rtl:u,type:n,defaultClassName:p}):$t(p,s),g={[a&&d>=1?"onTransitionEnd":"onAnimationEnd"]:a&&d<1?null:()=>{h&&o()}};return N.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":f},N.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${c} Toastify__progress-bar--${n}`}),N.createElement("div",{role:"progressbar","aria-hidden":f?"true":"false","aria-label":"notification timer",className:w,style:y,...g}))}let Yr=1;const Io=()=>""+Yr++;function Qr(e){return e&&(Ot(e.toastId)||Yt(e.toastId))?e.toastId:Io()}function Gt(e,t){return Ao(e,t),t.toastId}function _e(e,t){return{...t,type:t&&t.type||e,toastId:Qr(t)}}function se(e){return(t,i)=>Gt(t,_e(e,i))}function Z(e,t){return Gt(e,_e("default",t))}Z.loading=(e,t)=>Gt(e,_e("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),Z.promise=function(e,t,i){let o,{pending:n,error:r,success:s}=t;n&&(o=Ot(n)?Z.loading(n,i):Z.loading(n.render,{...i,...n}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},a=(u,h,c)=>{if(h==null)return void Z.dismiss(o);const f={type:u,...l,...i,data:c},y=Ot(h)?{render:h}:h;return o?Z.update(o,{...f,...y}):Z(y.render,{...f,...y}),c},d=ut(e)?e():e;return d.then(u=>a("success",s,u)).catch(u=>a("error",r,u)),d},Z.success=se("success"),Z.info=se("info"),Z.error=se("error"),Z.warning=se("warning"),Z.warn=Z.warning,Z.dark=(e,t)=>Gt(e,_e("default",{theme:"dark",...t})),Z.dismiss=function(e){(function(t){var i;if(Eo()){if(t==null||Ot(i=t)||Yt(i))dt.forEach(o=>{o.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){const o=dt.get(t.containerId);o?o.removeToast(t.id):dt.forEach(n=>{n.removeToast(t.id)})}}else Qt=Qt.filter(o=>t!=null&&o.options.toastId!==t)})(e)},Z.clearWaitingQueue=function(e){e===void 0&&(e={}),dt.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},Z.isActive=xo,Z.update=function(e,t){t===void 0&&(t={});const i=((o,n)=>{var r;let{containerId:s}=n;return(r=dt.get(s||1))==null?void 0:r.toasts.get(o)})(e,t);if(i){const{props:o,content:n}=i,r={delay:100,...o,...t,toastId:t.toastId||e,updateId:Io()};r.toastId!==e&&(r.staleId=e);const s=r.render||n;delete r.render,Gt(s,r)}},Z.done=e=>{Z.update(e,{progress:1})},Z.onChange=function(e){return Ye.add(e),()=>{Ye.delete(e)}},Z.play=e=>Bi(!0,e),Z.pause=e=>Bi(!1,e);const ts=typeof window<"u"?P.useLayoutEffect:P.useEffect,ae=e=>{let{theme:t,type:i,isLoading:o,...n}=e;return N.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${i})`,...n})},Ue={info:function(e){return N.createElement(ae,{...e},N.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return N.createElement(ae,{...e},N.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return N.createElement(ae,{...e},N.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return N.createElement(ae,{...e},N.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return N.createElement("div",{className:"Toastify__spinner"})}},es=e=>{const{isRunning:t,preventExitTransition:i,toastRef:o,eventHandlers:n,playToast:r}=Kr(e),{closeButton:s,children:l,autoClose:a,onClick:d,type:u,hideProgressBar:h,closeToast:c,transition:f,position:y,className:p,style:w,bodyClassName:g,bodyStyle:C,progressClassName:b,progressStyle:A,updateId:j,role:D,progress:I,rtl:$,toastId:L,deleteToast:M,isIn:T,isLoading:U,closeOnClick:H,theme:W}=e,q=$t("Toastify__toast",`Toastify__toast-theme--${W}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":$},{"Toastify__toast--close-on-click":H}),et=ut(p)?p({rtl:$,position:y,type:u,defaultClassName:q}):$t(q,p),K=function(_){let{theme:E,type:k,isLoading:O,icon:R}=_,J=null;const X={theme:E,type:k};return R===!1||(ut(R)?J=R({...X,isLoading:O}):P.isValidElement(R)?J=P.cloneElement(R,X):O?J=Ue.spinner():(Q=>Q in Ue)(k)&&(J=Ue[k](X))),J}(e),st=!!I||!a,v={closeToast:c,type:u,theme:W};let m=null;return s===!1||(m=ut(s)?s(v):P.isValidElement(s)?P.cloneElement(s,v):function(_){let{closeToast:E,theme:k,ariaLabel:O="close"}=_;return N.createElement("button",{className:`Toastify__close-button Toastify__close-button--${k}`,type:"button",onClick:R=>{R.stopPropagation(),E(R)},"aria-label":O},N.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},N.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(v)),N.createElement(f,{isIn:T,done:M,position:y,preventExitTransition:i,nodeRef:o,playToast:r},N.createElement("div",{id:L,onClick:d,"data-in":T,className:et,...n,style:w,ref:o},N.createElement("div",{...T&&{role:D},className:ut(g)?g({type:u}):$t("Toastify__toast-body",g),style:C},K!=null&&N.createElement("div",{className:$t("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!U})},K),N.createElement("div",null,l)),m,N.createElement(Xr,{...j&&!st?{key:`pb-${j}`}:{},rtl:$,theme:W,delay:a,isRunning:t,isIn:T,closeToast:c,hide:h,type:u,style:A,className:b,controlledProgress:st,progress:I||0})))},ke=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},is=$e(ke("bounce",!0));$e(ke("slide",!0));$e(ke("zoom"));$e(ke("flip"));const os={position:"top-right",transition:is,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function ns(e){let t={...os,...e};const i=e.stacked,[o,n]=P.useState(!0),r=P.useRef(null),{getToastToRender:s,isToastActive:l,count:a}=Gr(t),{className:d,style:u,rtl:h,containerId:c}=t;function f(p){const w=$t("Toastify__toast-container",`Toastify__toast-container--${p}`,{"Toastify__toast-container--rtl":h});return ut(d)?d({position:p,rtl:h,defaultClassName:w}):$t(w,ue(d))}function y(){i&&(n(!0),Z.play())}return ts(()=>{if(i){var p;const w=r.current.querySelectorAll('[data-in="true"]'),g=12,C=(p=t.position)==null?void 0:p.includes("top");let b=0,A=0;Array.from(w).reverse().forEach((j,D)=>{const I=j;I.classList.add("Toastify__toast--stacked"),D>0&&(I.dataset.collapsed=`${o}`),I.dataset.pos||(I.dataset.pos=C?"top":"bot");const $=b*(o?.2:1)+(o?0:g*D);I.style.setProperty("--y",`${C?$:-1*$}px`),I.style.setProperty("--g",`${g}`),I.style.setProperty("--s",""+(1-(o?A:0))),b+=I.offsetHeight,A+=.025})}},[o,a,i]),N.createElement("div",{ref:r,className:"Toastify",id:c,onMouseEnter:()=>{i&&(n(!1),Z.pause())},onMouseLeave:y},s((p,w)=>{const g=w.length?{...u}:{...u,pointerEvents:"none"};return N.createElement("div",{className:f(p),style:g,key:`container-${p}`},w.map(C=>{let{content:b,props:A}=C;return N.createElement(es,{...A,stacked:i,collapseAll:y,isIn:l(A.toastId,A.containerId),style:A.style,key:`toast-${A.key}`},b)}))}))}De.createRoot(document.getElementById("root")).render(x.jsxs(N.StrictMode,{children:[x.jsx(Wr,{}),x.jsx(ns,{})]}));export{Nt as e,B as g,ct as q,vs as r};
