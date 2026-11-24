var zv=Object.defineProperty;var Uv=(s,e,t)=>e in s?zv(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var _r=(s,e,t)=>Uv(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function pm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var qu={exports:{}},eo={},Ku={exports:{}},Ot={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0;function Fv(){if(s0)return Ot;s0=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),_=Symbol.iterator;function h(k){return k===null||typeof k!="object"?null:(k=_&&k[_]||k["@@iterator"],typeof k=="function"?k:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function v(k,L,re){this.props=k,this.context=L,this.refs=M,this.updater=re||b}v.prototype.isReactComponent={},v.prototype.setState=function(k,L){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,L,"setState")},v.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function S(){}S.prototype=v.prototype;function N(k,L,re){this.props=k,this.context=L,this.refs=M,this.updater=re||b}var z=N.prototype=new S;z.constructor=N,w(z,v.prototype),z.isPureReactComponent=!0;var P=Array.isArray,U=Object.prototype.hasOwnProperty,I={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function D(k,L,re){var F,te={},ce=null,ue=null;if(L!=null)for(F in L.ref!==void 0&&(ue=L.ref),L.key!==void 0&&(ce=""+L.key),L)U.call(L,F)&&!E.hasOwnProperty(F)&&(te[F]=L[F]);var xe=arguments.length-2;if(xe===1)te.children=re;else if(1<xe){for(var Ne=Array(xe),Qe=0;Qe<xe;Qe++)Ne[Qe]=arguments[Qe+2];te.children=Ne}if(k&&k.defaultProps)for(F in xe=k.defaultProps,xe)te[F]===void 0&&(te[F]=xe[F]);return{$$typeof:s,type:k,key:ce,ref:ue,props:te,_owner:I.current}}function K(k,L){return{$$typeof:s,type:k.type,key:L,ref:k.ref,props:k.props,_owner:k._owner}}function G(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function V(k){var L={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(re){return L[re]})}var H=/\/+/g;function $(k,L){return typeof k=="object"&&k!==null&&k.key!=null?V(""+k.key):L.toString(36)}function B(k,L,re,F,te){var ce=typeof k;(ce==="undefined"||ce==="boolean")&&(k=null);var ue=!1;if(k===null)ue=!0;else switch(ce){case"string":case"number":ue=!0;break;case"object":switch(k.$$typeof){case s:case e:ue=!0}}if(ue)return ue=k,te=te(ue),k=F===""?"."+$(ue,0):F,P(te)?(re="",k!=null&&(re=k.replace(H,"$&/")+"/"),B(te,L,re,"",function(Qe){return Qe})):te!=null&&(G(te)&&(te=K(te,re+(!te.key||ue&&ue.key===te.key?"":(""+te.key).replace(H,"$&/")+"/")+k)),L.push(te)),1;if(ue=0,F=F===""?".":F+":",P(k))for(var xe=0;xe<k.length;xe++){ce=k[xe];var Ne=F+$(ce,xe);ue+=B(ce,L,re,Ne,te)}else if(Ne=h(k),typeof Ne=="function")for(k=Ne.call(k),xe=0;!(ce=k.next()).done;)ce=ce.value,Ne=F+$(ce,xe++),ue+=B(ce,L,re,Ne,te);else if(ce==="object")throw L=String(k),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.");return ue}function ee(k,L,re){if(k==null)return k;var F=[],te=0;return B(k,F,"","",function(ce){return L.call(re,ce,te++)}),F}function he(k){if(k._status===-1){var L=k._result;L=L(),L.then(function(re){(k._status===0||k._status===-1)&&(k._status=1,k._result=re)},function(re){(k._status===0||k._status===-1)&&(k._status=2,k._result=re)}),k._status===-1&&(k._status=0,k._result=L)}if(k._status===1)return k._result.default;throw k._result}var X={current:null},ie={transition:null},O={ReactCurrentDispatcher:X,ReactCurrentBatchConfig:ie,ReactCurrentOwner:I};function Q(){throw Error("act(...) is not supported in production builds of React.")}return Ot.Children={map:ee,forEach:function(k,L,re){ee(k,function(){L.apply(this,arguments)},re)},count:function(k){var L=0;return ee(k,function(){L++}),L},toArray:function(k){return ee(k,function(L){return L})||[]},only:function(k){if(!G(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},Ot.Component=v,Ot.Fragment=t,Ot.Profiler=o,Ot.PureComponent=N,Ot.StrictMode=r,Ot.Suspense=g,Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,Ot.act=Q,Ot.cloneElement=function(k,L,re){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var F=w({},k.props),te=k.key,ce=k.ref,ue=k._owner;if(L!=null){if(L.ref!==void 0&&(ce=L.ref,ue=I.current),L.key!==void 0&&(te=""+L.key),k.type&&k.type.defaultProps)var xe=k.type.defaultProps;for(Ne in L)U.call(L,Ne)&&!E.hasOwnProperty(Ne)&&(F[Ne]=L[Ne]===void 0&&xe!==void 0?xe[Ne]:L[Ne])}var Ne=arguments.length-2;if(Ne===1)F.children=re;else if(1<Ne){xe=Array(Ne);for(var Qe=0;Qe<Ne;Qe++)xe[Qe]=arguments[Qe+2];F.children=xe}return{$$typeof:s,type:k.type,key:te,ref:ce,props:F,_owner:ue}},Ot.createContext=function(k){return k={$$typeof:d,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},Ot.createElement=D,Ot.createFactory=function(k){var L=D.bind(null,k);return L.type=k,L},Ot.createRef=function(){return{current:null}},Ot.forwardRef=function(k){return{$$typeof:f,render:k}},Ot.isValidElement=G,Ot.lazy=function(k){return{$$typeof:y,_payload:{_status:-1,_result:k},_init:he}},Ot.memo=function(k,L){return{$$typeof:m,type:k,compare:L===void 0?null:L}},Ot.startTransition=function(k){var L=ie.transition;ie.transition={};try{k()}finally{ie.transition=L}},Ot.unstable_act=Q,Ot.useCallback=function(k,L){return X.current.useCallback(k,L)},Ot.useContext=function(k){return X.current.useContext(k)},Ot.useDebugValue=function(){},Ot.useDeferredValue=function(k){return X.current.useDeferredValue(k)},Ot.useEffect=function(k,L){return X.current.useEffect(k,L)},Ot.useId=function(){return X.current.useId()},Ot.useImperativeHandle=function(k,L,re){return X.current.useImperativeHandle(k,L,re)},Ot.useInsertionEffect=function(k,L){return X.current.useInsertionEffect(k,L)},Ot.useLayoutEffect=function(k,L){return X.current.useLayoutEffect(k,L)},Ot.useMemo=function(k,L){return X.current.useMemo(k,L)},Ot.useReducer=function(k,L,re){return X.current.useReducer(k,L,re)},Ot.useRef=function(k){return X.current.useRef(k)},Ot.useState=function(k){return X.current.useState(k)},Ot.useSyncExternalStore=function(k,L,re){return X.current.useSyncExternalStore(k,L,re)},Ot.useTransition=function(){return X.current.useTransition()},Ot.version="18.3.1",Ot}var a0;function Mf(){return a0||(a0=1,Ku.exports=Fv()),Ku.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o0;function Ov(){if(o0)return eo;o0=1;var s=Mf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(f,g,m){var y,_={},h=null,b=null;m!==void 0&&(h=""+m),g.key!==void 0&&(h=""+g.key),g.ref!==void 0&&(b=g.ref);for(y in g)r.call(g,y)&&!l.hasOwnProperty(y)&&(_[y]=g[y]);if(f&&f.defaultProps)for(y in g=f.defaultProps,g)_[y]===void 0&&(_[y]=g[y]);return{$$typeof:e,type:f,key:h,ref:b,props:_,_owner:o.current}}return eo.Fragment=t,eo.jsx=d,eo.jsxs=d,eo}var l0;function Bv(){return l0||(l0=1,qu.exports=Ov()),qu.exports}var u=Bv(),fe=Mf();const Hv=pm(fe);var El={},Zu={exports:{}},si={},Ju={exports:{}},Qu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c0;function Gv(){return c0||(c0=1,(function(s){function e(ie,O){var Q=ie.length;ie.push(O);e:for(;0<Q;){var k=Q-1>>>1,L=ie[k];if(0<o(L,O))ie[k]=O,ie[Q]=L,Q=k;else break e}}function t(ie){return ie.length===0?null:ie[0]}function r(ie){if(ie.length===0)return null;var O=ie[0],Q=ie.pop();if(Q!==O){ie[0]=Q;e:for(var k=0,L=ie.length,re=L>>>1;k<re;){var F=2*(k+1)-1,te=ie[F],ce=F+1,ue=ie[ce];if(0>o(te,Q))ce<L&&0>o(ue,te)?(ie[k]=ue,ie[ce]=Q,k=ce):(ie[k]=te,ie[F]=Q,k=F);else if(ce<L&&0>o(ue,Q))ie[k]=ue,ie[ce]=Q,k=ce;else break e}}return O}function o(ie,O){var Q=ie.sortIndex-O.sortIndex;return Q!==0?Q:ie.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var g=[],m=[],y=1,_=null,h=3,b=!1,w=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function z(ie){for(var O=t(m);O!==null;){if(O.callback===null)r(m);else if(O.startTime<=ie)r(m),O.sortIndex=O.expirationTime,e(g,O);else break;O=t(m)}}function P(ie){if(M=!1,z(ie),!w)if(t(g)!==null)w=!0,he(U);else{var O=t(m);O!==null&&X(P,O.startTime-ie)}}function U(ie,O){w=!1,M&&(M=!1,S(D),D=-1),b=!0;var Q=h;try{for(z(O),_=t(g);_!==null&&(!(_.expirationTime>O)||ie&&!V());){var k=_.callback;if(typeof k=="function"){_.callback=null,h=_.priorityLevel;var L=k(_.expirationTime<=O);O=s.unstable_now(),typeof L=="function"?_.callback=L:_===t(g)&&r(g),z(O)}else r(g);_=t(g)}if(_!==null)var re=!0;else{var F=t(m);F!==null&&X(P,F.startTime-O),re=!1}return re}finally{_=null,h=Q,b=!1}}var I=!1,E=null,D=-1,K=5,G=-1;function V(){return!(s.unstable_now()-G<K)}function H(){if(E!==null){var ie=s.unstable_now();G=ie;var O=!0;try{O=E(!0,ie)}finally{O?$():(I=!1,E=null)}}else I=!1}var $;if(typeof N=="function")$=function(){N(H)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,ee=B.port2;B.port1.onmessage=H,$=function(){ee.postMessage(null)}}else $=function(){v(H,0)};function he(ie){E=ie,I||(I=!0,$())}function X(ie,O){D=v(function(){ie(s.unstable_now())},O)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(ie){ie.callback=null},s.unstable_continueExecution=function(){w||b||(w=!0,he(U))},s.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<ie?Math.floor(1e3/ie):5},s.unstable_getCurrentPriorityLevel=function(){return h},s.unstable_getFirstCallbackNode=function(){return t(g)},s.unstable_next=function(ie){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var Q=h;h=O;try{return ie()}finally{h=Q}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(ie,O){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var Q=h;h=ie;try{return O()}finally{h=Q}},s.unstable_scheduleCallback=function(ie,O,Q){var k=s.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?k+Q:k):Q=k,ie){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=Q+L,ie={id:y++,callback:O,priorityLevel:ie,startTime:Q,expirationTime:L,sortIndex:-1},Q>k?(ie.sortIndex=Q,e(m,ie),t(g)===null&&ie===t(m)&&(M?(S(D),D=-1):M=!0,X(P,Q-k))):(ie.sortIndex=L,e(g,ie),w||b||(w=!0,he(U))),ie},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(ie){var O=h;return function(){var Q=h;h=O;try{return ie.apply(this,arguments)}finally{h=Q}}}})(Qu)),Qu}var u0;function jv(){return u0||(u0=1,Ju.exports=Gv()),Ju.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0;function Vv(){if(d0)return si;d0=1;var s=Mf(),e=jv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){d(n,i),d(n+"Capture",i)}function d(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},_={};function h(n){return g.call(_,n)?!0:g.call(y,n)?!1:m.test(n)?_[n]=!0:(y[n]=!0,!1)}function b(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,a,c){if(i===null||typeof i>"u"||b(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function M(n,i,a,c,p,x,C){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=x,this.removeEmptyString=C}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){v[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];v[i]=new M(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){v[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){v[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){v[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){v[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){v[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){v[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){v[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function N(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(S,N);v[i]=new M(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(S,N);v[i]=new M(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(S,N);v[i]=new M(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){v[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),v.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){v[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function z(n,i,a,c){var p=v.hasOwnProperty(i)?v[i]:null;(p!==null?p.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,p,c)&&(a=null),c||p===null?h(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):p.mustUseProperty?n[p.propertyName]=a===null?p.type===3?!1:"":a:(i=p.attributeName,c=p.attributeNamespace,a===null?n.removeAttribute(i):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),I=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),V=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),ie=Symbol.iterator;function O(n){return n===null||typeof n!="object"?null:(n=ie&&n[ie]||n["@@iterator"],typeof n=="function"?n:null)}var Q=Object.assign,k;function L(n){if(k===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+n}var re=!1;function F(n,i){if(!n||re)return"";re=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(be){var c=be}Reflect.construct(n,[],i)}else{try{i.call()}catch(be){c=be}n.call(i.prototype)}else{try{throw Error()}catch(be){c=be}n()}}catch(be){if(be&&c&&typeof be.stack=="string"){for(var p=be.stack.split(`
`),x=c.stack.split(`
`),C=p.length-1,j=x.length-1;1<=C&&0<=j&&p[C]!==x[j];)j--;for(;1<=C&&0<=j;C--,j--)if(p[C]!==x[j]){if(C!==1||j!==1)do if(C--,j--,0>j||p[C]!==x[j]){var J=`
`+p[C].replace(" at new "," at ");return n.displayName&&J.includes("<anonymous>")&&(J=J.replace("<anonymous>",n.displayName)),J}while(1<=C&&0<=j);break}}}finally{re=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?L(n):""}function te(n){switch(n.tag){case 5:return L(n.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return n=F(n.type,!1),n;case 11:return n=F(n.type.render,!1),n;case 1:return n=F(n.type,!0),n;default:return""}}function ce(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case E:return"Fragment";case I:return"Portal";case K:return"Profiler";case D:return"StrictMode";case $:return"Suspense";case B:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case G:return(n._context.displayName||"Context")+".Provider";case H:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ee:return i=n.displayName||null,i!==null?i:ce(n.type)||"Memo";case he:i=n._payload,n=n._init;try{return ce(n(i))}catch{}}return null}function ue(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ce(i);case 8:return i===D?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function xe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ne(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(n){var i=Ne(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,x=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return p.call(this)},set:function(C){c=""+C,x.call(this,C)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(C){c=""+C},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Xe(n){n._valueTracker||(n._valueTracker=Qe(n))}function De(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ne(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function je(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ke(n,i){var a=i.checked;return Q({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function xt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=xe(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function wt(n,i){i=i.checked,i!=null&&z(n,"checked",i,!1)}function yt(n,i){wt(n,i);var a=xe(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Pt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Pt(n,i.type,xe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function gt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Pt(n,i,a){(i!=="number"||je(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Mt=Array.isArray;function ge(n,i,a,c){if(n=n.options,i){i={};for(var p=0;p<a.length;p++)i["$"+a[p]]=!0;for(a=0;a<n.length;a++)p=i.hasOwnProperty("$"+n[a].value),n[a].selected!==p&&(n[a].selected=p),p&&c&&(n[a].defaultSelected=!0)}else{for(a=""+xe(a),i=null,p=0;p<n.length;p++){if(n[p].value===a){n[p].selected=!0,c&&(n[p].defaultSelected=!0);return}i!==null||n[p].disabled||(i=n[p])}i!==null&&(i.selected=!0)}}function Dt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return Q({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function sn(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Mt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:xe(a)}}function Z(n,i){var a=xe(i.value),c=xe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Gt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Lt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function It(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Lt(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ie,Nt=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,p){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,p)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ie=Ie||document.createElement("div"),Ie.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ie.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function at(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var dt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},R=["Webkit","ms","Moz","O"];Object.keys(dt).forEach(function(n){R.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),dt[i]=dt[n]})});function T(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||dt.hasOwnProperty(n)&&dt[n]?(""+i).trim():i+"px"}function ae(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,p=T(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,p):n[a]=p}}var Le=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ee(n,i){if(i){if(Le[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ze(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ue=null;function we(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Me=null,Oe=null,W=null;function Ce(n){if(n=Oa(n)){if(typeof Me!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Bo(i),Me(n.stateNode,n.type,i))}}function Se(n){Oe?W?W.push(n):W=[n]:Oe=n}function Ae(){if(Oe){var n=Oe,i=W;if(W=Oe=null,Ce(n),i)for(n=0;n<i.length;n++)Ce(i[n])}}function _e(n,i){return n(i)}function Te(){}var Ge=!1;function rt(n,i,a){if(Ge)return n(i,a);Ge=!0;try{return _e(n,i,a)}finally{Ge=!1,(Oe!==null||W!==null)&&(Te(),Ae())}}function Pe(n,i){var a=n.stateNode;if(a===null)return null;var c=Bo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Ze=!1;if(f)try{var ct={};Object.defineProperty(ct,"passive",{get:function(){Ze=!0}}),window.addEventListener("test",ct,ct),window.removeEventListener("test",ct,ct)}catch{Ze=!1}function Be(n,i,a,c,p,x,C,j,J){var be=Array.prototype.slice.call(arguments,3);try{i.apply(a,be)}catch(Fe){this.onError(Fe)}}var bt=!1,jt=null,an=!1,dn=null,fn={onError:function(n){bt=!0,jt=n}};function Qt(n,i,a,c,p,x,C,j,J){bt=!1,jt=null,Be.apply(fn,arguments)}function Nn(n,i,a,c,p,x,C,j,J){if(Qt.apply(this,arguments),bt){if(bt){var be=jt;bt=!1,jt=null}else throw Error(t(198));an||(an=!0,dn=be)}}function tn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function ln(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function St(n){if(tn(n)!==n)throw Error(t(188))}function Ht(n){var i=n.alternate;if(!i){if(i=tn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var p=a.return;if(p===null)break;var x=p.alternate;if(x===null){if(c=p.return,c!==null){a=c;continue}break}if(p.child===x.child){for(x=p.child;x;){if(x===a)return St(p),n;if(x===c)return St(p),i;x=x.sibling}throw Error(t(188))}if(a.return!==c.return)a=p,c=x;else{for(var C=!1,j=p.child;j;){if(j===a){C=!0,a=p,c=x;break}if(j===c){C=!0,c=p,a=x;break}j=j.sibling}if(!C){for(j=x.child;j;){if(j===a){C=!0,a=x,c=p;break}if(j===c){C=!0,c=x,a=p;break}j=j.sibling}if(!C)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function zt(n){return n=Ht(n),n!==null?nn(n):null}function nn(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=nn(n);if(i!==null)return i;n=n.sibling}return null}var rn=e.unstable_scheduleCallback,Qn=e.unstable_cancelCallback,Pn=e.unstable_shouldYield,_i=e.unstable_requestPaint,qt=e.unstable_now,Pi=e.unstable_getCurrentPriorityLevel,li=e.unstable_ImmediatePriority,Di=e.unstable_UserBlockingPriority,yi=e.unstable_NormalPriority,Pr=e.unstable_LowPriority,A=e.unstable_IdlePriority,Y=null,se=null;function de(n){if(se&&typeof se.onCommitFiberRoot=="function")try{se.onCommitFiberRoot(Y,n,void 0,(n.current.flags&128)===128)}catch{}}var oe=Math.clz32?Math.clz32:We,Ve=Math.log,et=Math.LN2;function We(n){return n>>>=0,n===0?32:31-(Ve(n)/et|0)|0}var qe=64,nt=4194304;function q(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Re(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,p=n.suspendedLanes,x=n.pingedLanes,C=a&268435455;if(C!==0){var j=C&~p;j!==0?c=q(j):(x&=C,x!==0&&(c=q(x)))}else C=a&~p,C!==0?c=q(C):x!==0&&(c=q(x));if(c===0)return 0;if(i!==0&&i!==c&&(i&p)===0&&(p=c&-c,x=i&-i,p>=x||p===16&&(x&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-oe(i),p=1<<a,c|=n[a],i&=~p;return c}function pe(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ye(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,p=n.expirationTimes,x=n.pendingLanes;0<x;){var C=31-oe(x),j=1<<C,J=p[C];J===-1?((j&a)===0||(j&c)!==0)&&(p[C]=pe(j,i)):J<=i&&(n.expiredLanes|=j),x&=~j}}function ht(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function pt(){var n=qe;return qe<<=1,(qe&4194240)===0&&(qe=64),n}function Tt(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Ut(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-oe(i),n[i]=a}function tt(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var p=31-oe(a),x=1<<p;i[p]=0,c[p]=-1,n[p]=-1,a&=~x}}function Kt(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-oe(a),p=1<<c;p&i|n[c]&i&&(n[c]|=i),a&=~p}}var it=0;function qn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var yn,Si,bi,ci,Ft,hn=!1,En=[],le=null,mt=null,Xt=null,ui=new Map,Dr=new Map,Li=[],vc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ca(n,i){switch(n){case"focusin":case"focusout":le=null;break;case"dragenter":case"dragleave":mt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":ui.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dr.delete(i.pointerId)}}function os(n,i,a,c,p,x){return n===null||n.nativeEvent!==x?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:x,targetContainers:[p]},i!==null&&(i=Oa(i),i!==null&&Si(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),n)}function _c(n,i,a,c,p){switch(i){case"focusin":return le=os(le,n,i,a,c,p),!0;case"dragenter":return mt=os(mt,n,i,a,c,p),!0;case"mouseover":return Xt=os(Xt,n,i,a,c,p),!0;case"pointerover":var x=p.pointerId;return ui.set(x,os(ui.get(x)||null,n,i,a,c,p)),!0;case"gotpointercapture":return x=p.pointerId,Dr.set(x,os(Dr.get(x)||null,n,i,a,c,p)),!0}return!1}function To(n){var i=us(n.target);if(i!==null){var a=tn(i);if(a!==null){if(i=a.tag,i===13){if(i=ln(a),i!==null){n.blockedOn=i,Ft(n.priority,function(){bi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Is(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=bc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ue=c,a.target.dispatchEvent(c),Ue=null}else return i=Oa(a),i!==null&&Si(i),n.blockedOn=a,!1;i.shift()}return!0}function Co(n,i,a){Is(n)&&a.delete(i)}function yc(){hn=!1,le!==null&&Is(le)&&(le=null),mt!==null&&Is(mt)&&(mt=null),Xt!==null&&Is(Xt)&&(Xt=null),ui.forEach(Co),Dr.forEach(Co)}function ls(n,i){n.blockedOn===i&&(n.blockedOn=null,hn||(hn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,yc)))}function cs(n){function i(p){return ls(p,n)}if(0<En.length){ls(En[0],n);for(var a=1;a<En.length;a++){var c=En[a];c.blockedOn===n&&(c.blockedOn=null)}}for(le!==null&&ls(le,n),mt!==null&&ls(mt,n),Xt!==null&&ls(Xt,n),ui.forEach(i),Dr.forEach(i),a=0;a<Li.length;a++)c=Li[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Li.length&&(a=Li[0],a.blockedOn===null);)To(a),a.blockedOn===null&&Li.shift()}var Lr=P.ReactCurrentBatchConfig,ks=!0;function ox(n,i,a,c){var p=it,x=Lr.transition;Lr.transition=null;try{it=1,Sc(n,i,a,c)}finally{it=p,Lr.transition=x}}function lx(n,i,a,c){var p=it,x=Lr.transition;Lr.transition=null;try{it=4,Sc(n,i,a,c)}finally{it=p,Lr.transition=x}}function Sc(n,i,a,c){if(ks){var p=bc(n,i,a,c);if(p===null)Oc(n,i,c,Ao,a),Ca(n,c);else if(_c(p,n,i,a,c))c.stopPropagation();else if(Ca(n,c),i&4&&-1<vc.indexOf(n)){for(;p!==null;){var x=Oa(p);if(x!==null&&yn(x),x=bc(n,i,a,c),x===null&&Oc(n,i,c,Ao,a),x===p)break;p=x}p!==null&&c.stopPropagation()}else Oc(n,i,c,null,a)}}var Ao=null;function bc(n,i,a,c){if(Ao=null,n=we(c),n=us(n),n!==null)if(i=tn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=ln(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ao=n,null}function Wf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pi()){case li:return 1;case Di:return 4;case yi:case Pr:return 16;case A:return 536870912;default:return 16}default:return 16}}var Ir=null,wc=null,Ro=null;function $f(){if(Ro)return Ro;var n,i=wc,a=i.length,c,p="value"in Ir?Ir.value:Ir.textContent,x=p.length;for(n=0;n<a&&i[n]===p[n];n++);var C=a-n;for(c=1;c<=C&&i[a-c]===p[x-c];c++);return Ro=p.slice(n,1<c?1-c:void 0)}function No(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Po(){return!0}function Xf(){return!1}function di(n){function i(a,c,p,x,C){this._reactName=a,this._targetInst=p,this.type=c,this.nativeEvent=x,this.target=C,this.currentTarget=null;for(var j in n)n.hasOwnProperty(j)&&(a=n[j],this[j]=a?a(x):x[j]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Po:Xf,this.isPropagationStopped=Xf,this}return Q(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),i}var zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mc=di(zs),Aa=Q({},zs,{view:0,detail:0}),cx=di(Aa),Ec,Tc,Ra,Do=Q({},Aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ac,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ra&&(Ra&&n.type==="mousemove"?(Ec=n.screenX-Ra.screenX,Tc=n.screenY-Ra.screenY):Tc=Ec=0,Ra=n),Ec)},movementY:function(n){return"movementY"in n?n.movementY:Tc}}),Yf=di(Do),ux=Q({},Do,{dataTransfer:0}),dx=di(ux),fx=Q({},Aa,{relatedTarget:0}),Cc=di(fx),hx=Q({},zs,{animationName:0,elapsedTime:0,pseudoElement:0}),px=di(hx),mx=Q({},zs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),gx=di(mx),xx=Q({},zs,{data:0}),qf=di(xx),vx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_x={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sx(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=yx[n])?!!i[n]:!1}function Ac(){return Sx}var bx=Q({},Aa,{key:function(n){if(n.key){var i=vx[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=No(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?_x[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ac,charCode:function(n){return n.type==="keypress"?No(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?No(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),wx=di(bx),Mx=Q({},Do,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kf=di(Mx),Ex=Q({},Aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ac}),Tx=di(Ex),Cx=Q({},zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ax=di(Cx),Rx=Q({},Do,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Nx=di(Rx),Px=[9,13,27,32],Rc=f&&"CompositionEvent"in window,Na=null;f&&"documentMode"in document&&(Na=document.documentMode);var Dx=f&&"TextEvent"in window&&!Na,Zf=f&&(!Rc||Na&&8<Na&&11>=Na),Jf=" ",Qf=!1;function eh(n,i){switch(n){case"keyup":return Px.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function th(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Us=!1;function Lx(n,i){switch(n){case"compositionend":return th(i);case"keypress":return i.which!==32?null:(Qf=!0,Jf);case"textInput":return n=i.data,n===Jf&&Qf?null:n;default:return null}}function Ix(n,i){if(Us)return n==="compositionend"||!Rc&&eh(n,i)?(n=$f(),Ro=wc=Ir=null,Us=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Zf&&i.locale!=="ko"?null:i.data;default:return null}}var kx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!kx[n.type]:i==="textarea"}function ih(n,i,a,c){Se(c),i=Uo(i,"onChange"),0<i.length&&(a=new Mc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Pa=null,Da=null;function zx(n){Sh(n,0)}function Lo(n){var i=Gs(n);if(De(i))return n}function Ux(n,i){if(n==="change")return i}var rh=!1;if(f){var Nc;if(f){var Pc="oninput"in document;if(!Pc){var sh=document.createElement("div");sh.setAttribute("oninput","return;"),Pc=typeof sh.oninput=="function"}Nc=Pc}else Nc=!1;rh=Nc&&(!document.documentMode||9<document.documentMode)}function ah(){Pa&&(Pa.detachEvent("onpropertychange",oh),Da=Pa=null)}function oh(n){if(n.propertyName==="value"&&Lo(Da)){var i=[];ih(i,Da,n,we(n)),rt(zx,i)}}function Fx(n,i,a){n==="focusin"?(ah(),Pa=i,Da=a,Pa.attachEvent("onpropertychange",oh)):n==="focusout"&&ah()}function Ox(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Lo(Da)}function Bx(n,i){if(n==="click")return Lo(i)}function Hx(n,i){if(n==="input"||n==="change")return Lo(i)}function Gx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ii=typeof Object.is=="function"?Object.is:Gx;function La(n,i){if(Ii(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var p=a[c];if(!g.call(i,p)||!Ii(n[p],i[p]))return!1}return!0}function lh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ch(n,i){var a=lh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=lh(a)}}function uh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?uh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function dh(){for(var n=window,i=je();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=je(n.document)}return i}function Dc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function jx(n){var i=dh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&uh(a.ownerDocument.documentElement,a)){if(c!==null&&Dc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var p=a.textContent.length,x=Math.min(c.start,p);c=c.end===void 0?x:Math.min(c.end,p),!n.extend&&x>c&&(p=c,c=x,x=p),p=ch(a,x);var C=ch(a,c);p&&C&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==C.node||n.focusOffset!==C.offset)&&(i=i.createRange(),i.setStart(p.node,p.offset),n.removeAllRanges(),x>c?(n.addRange(i),n.extend(C.node,C.offset)):(i.setEnd(C.node,C.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Vx=f&&"documentMode"in document&&11>=document.documentMode,Fs=null,Lc=null,Ia=null,Ic=!1;function fh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ic||Fs==null||Fs!==je(c)||(c=Fs,"selectionStart"in c&&Dc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ia&&La(Ia,c)||(Ia=c,c=Uo(Lc,"onSelect"),0<c.length&&(i=new Mc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Fs)))}function Io(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Os={animationend:Io("Animation","AnimationEnd"),animationiteration:Io("Animation","AnimationIteration"),animationstart:Io("Animation","AnimationStart"),transitionend:Io("Transition","TransitionEnd")},kc={},hh={};f&&(hh=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function ko(n){if(kc[n])return kc[n];if(!Os[n])return n;var i=Os[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in hh)return kc[n]=i[a];return n}var ph=ko("animationend"),mh=ko("animationiteration"),gh=ko("animationstart"),xh=ko("transitionend"),vh=new Map,_h="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(n,i){vh.set(n,i),l(i,[n])}for(var zc=0;zc<_h.length;zc++){var Uc=_h[zc],Wx=Uc.toLowerCase(),$x=Uc[0].toUpperCase()+Uc.slice(1);kr(Wx,"on"+$x)}kr(ph,"onAnimationEnd"),kr(mh,"onAnimationIteration"),kr(gh,"onAnimationStart"),kr("dblclick","onDoubleClick"),kr("focusin","onFocus"),kr("focusout","onBlur"),kr(xh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ka="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xx=new Set("cancel close invalid load scroll toggle".split(" ").concat(ka));function yh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Nn(c,i,void 0,n),n.currentTarget=null}function Sh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],p=c.event;c=c.listeners;e:{var x=void 0;if(i)for(var C=c.length-1;0<=C;C--){var j=c[C],J=j.instance,be=j.currentTarget;if(j=j.listener,J!==x&&p.isPropagationStopped())break e;yh(p,j,be),x=J}else for(C=0;C<c.length;C++){if(j=c[C],J=j.instance,be=j.currentTarget,j=j.listener,J!==x&&p.isPropagationStopped())break e;yh(p,j,be),x=J}}}if(an)throw n=dn,an=!1,dn=null,n}function cn(n,i){var a=i[Wc];a===void 0&&(a=i[Wc]=new Set);var c=n+"__bubble";a.has(c)||(bh(i,n,2,!1),a.add(c))}function Fc(n,i,a){var c=0;i&&(c|=4),bh(a,n,c,i)}var zo="_reactListening"+Math.random().toString(36).slice(2);function za(n){if(!n[zo]){n[zo]=!0,r.forEach(function(a){a!=="selectionchange"&&(Xx.has(a)||Fc(a,!1,n),Fc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[zo]||(i[zo]=!0,Fc("selectionchange",!1,i))}}function bh(n,i,a,c){switch(Wf(i)){case 1:var p=ox;break;case 4:p=lx;break;default:p=Sc}a=p.bind(null,i,a,n),p=void 0,!Ze||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),c?p!==void 0?n.addEventListener(i,a,{capture:!0,passive:p}):n.addEventListener(i,a,!0):p!==void 0?n.addEventListener(i,a,{passive:p}):n.addEventListener(i,a,!1)}function Oc(n,i,a,c,p){var x=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var C=c.tag;if(C===3||C===4){var j=c.stateNode.containerInfo;if(j===p||j.nodeType===8&&j.parentNode===p)break;if(C===4)for(C=c.return;C!==null;){var J=C.tag;if((J===3||J===4)&&(J=C.stateNode.containerInfo,J===p||J.nodeType===8&&J.parentNode===p))return;C=C.return}for(;j!==null;){if(C=us(j),C===null)return;if(J=C.tag,J===5||J===6){c=x=C;continue e}j=j.parentNode}}c=c.return}rt(function(){var be=x,Fe=we(a),He=[];e:{var ke=vh.get(n);if(ke!==void 0){var st=Mc,lt=n;switch(n){case"keypress":if(No(a)===0)break e;case"keydown":case"keyup":st=wx;break;case"focusin":lt="focus",st=Cc;break;case"focusout":lt="blur",st=Cc;break;case"beforeblur":case"afterblur":st=Cc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=Yf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=dx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=Tx;break;case ph:case mh:case gh:st=px;break;case xh:st=Ax;break;case"scroll":st=cx;break;case"wheel":st=Nx;break;case"copy":case"cut":case"paste":st=gx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=Kf}var ut=(i&4)!==0,Sn=!ut&&n==="scroll",me=ut?ke!==null?ke+"Capture":null:ke;ut=[];for(var ne=be,ve;ne!==null;){ve=ne;var $e=ve.stateNode;if(ve.tag===5&&$e!==null&&(ve=$e,me!==null&&($e=Pe(ne,me),$e!=null&&ut.push(Ua(ne,$e,ve)))),Sn)break;ne=ne.return}0<ut.length&&(ke=new st(ke,lt,null,a,Fe),He.push({event:ke,listeners:ut}))}}if((i&7)===0){e:{if(ke=n==="mouseover"||n==="pointerover",st=n==="mouseout"||n==="pointerout",ke&&a!==Ue&&(lt=a.relatedTarget||a.fromElement)&&(us(lt)||lt[dr]))break e;if((st||ke)&&(ke=Fe.window===Fe?Fe:(ke=Fe.ownerDocument)?ke.defaultView||ke.parentWindow:window,st?(lt=a.relatedTarget||a.toElement,st=be,lt=lt?us(lt):null,lt!==null&&(Sn=tn(lt),lt!==Sn||lt.tag!==5&&lt.tag!==6)&&(lt=null)):(st=null,lt=be),st!==lt)){if(ut=Yf,$e="onMouseLeave",me="onMouseEnter",ne="mouse",(n==="pointerout"||n==="pointerover")&&(ut=Kf,$e="onPointerLeave",me="onPointerEnter",ne="pointer"),Sn=st==null?ke:Gs(st),ve=lt==null?ke:Gs(lt),ke=new ut($e,ne+"leave",st,a,Fe),ke.target=Sn,ke.relatedTarget=ve,$e=null,us(Fe)===be&&(ut=new ut(me,ne+"enter",lt,a,Fe),ut.target=ve,ut.relatedTarget=Sn,$e=ut),Sn=$e,st&&lt)t:{for(ut=st,me=lt,ne=0,ve=ut;ve;ve=Bs(ve))ne++;for(ve=0,$e=me;$e;$e=Bs($e))ve++;for(;0<ne-ve;)ut=Bs(ut),ne--;for(;0<ve-ne;)me=Bs(me),ve--;for(;ne--;){if(ut===me||me!==null&&ut===me.alternate)break t;ut=Bs(ut),me=Bs(me)}ut=null}else ut=null;st!==null&&wh(He,ke,st,ut,!1),lt!==null&&Sn!==null&&wh(He,Sn,lt,ut,!0)}}e:{if(ke=be?Gs(be):window,st=ke.nodeName&&ke.nodeName.toLowerCase(),st==="select"||st==="input"&&ke.type==="file")var ft=Ux;else if(nh(ke))if(rh)ft=Hx;else{ft=Ox;var vt=Fx}else(st=ke.nodeName)&&st.toLowerCase()==="input"&&(ke.type==="checkbox"||ke.type==="radio")&&(ft=Bx);if(ft&&(ft=ft(n,be))){ih(He,ft,a,Fe);break e}vt&&vt(n,ke,be),n==="focusout"&&(vt=ke._wrapperState)&&vt.controlled&&ke.type==="number"&&Pt(ke,"number",ke.value)}switch(vt=be?Gs(be):window,n){case"focusin":(nh(vt)||vt.contentEditable==="true")&&(Fs=vt,Lc=be,Ia=null);break;case"focusout":Ia=Lc=Fs=null;break;case"mousedown":Ic=!0;break;case"contextmenu":case"mouseup":case"dragend":Ic=!1,fh(He,a,Fe);break;case"selectionchange":if(Vx)break;case"keydown":case"keyup":fh(He,a,Fe)}var _t;if(Rc)e:{switch(n){case"compositionstart":var Et="onCompositionStart";break e;case"compositionend":Et="onCompositionEnd";break e;case"compositionupdate":Et="onCompositionUpdate";break e}Et=void 0}else Us?eh(n,a)&&(Et="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Et="onCompositionStart");Et&&(Zf&&a.locale!=="ko"&&(Us||Et!=="onCompositionStart"?Et==="onCompositionEnd"&&Us&&(_t=$f()):(Ir=Fe,wc="value"in Ir?Ir.value:Ir.textContent,Us=!0)),vt=Uo(be,Et),0<vt.length&&(Et=new qf(Et,n,null,a,Fe),He.push({event:Et,listeners:vt}),_t?Et.data=_t:(_t=th(a),_t!==null&&(Et.data=_t)))),(_t=Dx?Lx(n,a):Ix(n,a))&&(be=Uo(be,"onBeforeInput"),0<be.length&&(Fe=new qf("onBeforeInput","beforeinput",null,a,Fe),He.push({event:Fe,listeners:be}),Fe.data=_t))}Sh(He,i)})}function Ua(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Uo(n,i){for(var a=i+"Capture",c=[];n!==null;){var p=n,x=p.stateNode;p.tag===5&&x!==null&&(p=x,x=Pe(n,a),x!=null&&c.unshift(Ua(n,x,p)),x=Pe(n,i),x!=null&&c.push(Ua(n,x,p))),n=n.return}return c}function Bs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function wh(n,i,a,c,p){for(var x=i._reactName,C=[];a!==null&&a!==c;){var j=a,J=j.alternate,be=j.stateNode;if(J!==null&&J===c)break;j.tag===5&&be!==null&&(j=be,p?(J=Pe(a,x),J!=null&&C.unshift(Ua(a,J,j))):p||(J=Pe(a,x),J!=null&&C.push(Ua(a,J,j)))),a=a.return}C.length!==0&&n.push({event:i,listeners:C})}var Yx=/\r\n?/g,qx=/\u0000|\uFFFD/g;function Mh(n){return(typeof n=="string"?n:""+n).replace(Yx,`
`).replace(qx,"")}function Fo(n,i,a){if(i=Mh(i),Mh(n)!==i&&a)throw Error(t(425))}function Oo(){}var Bc=null,Hc=null;function Gc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var jc=typeof setTimeout=="function"?setTimeout:void 0,Kx=typeof clearTimeout=="function"?clearTimeout:void 0,Eh=typeof Promise=="function"?Promise:void 0,Zx=typeof queueMicrotask=="function"?queueMicrotask:typeof Eh<"u"?function(n){return Eh.resolve(null).then(n).catch(Jx)}:jc;function Jx(n){setTimeout(function(){throw n})}function Vc(n,i){var a=i,c=0;do{var p=a.nextSibling;if(n.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(c===0){n.removeChild(p),cs(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=p}while(a);cs(i)}function zr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Th(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Hs=Math.random().toString(36).slice(2),Ki="__reactFiber$"+Hs,Fa="__reactProps$"+Hs,dr="__reactContainer$"+Hs,Wc="__reactEvents$"+Hs,Qx="__reactListeners$"+Hs,ev="__reactHandles$"+Hs;function us(n){var i=n[Ki];if(i)return i;for(var a=n.parentNode;a;){if(i=a[dr]||a[Ki]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Th(n);n!==null;){if(a=n[Ki])return a;n=Th(n)}return i}n=a,a=n.parentNode}return null}function Oa(n){return n=n[Ki]||n[dr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Gs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Bo(n){return n[Fa]||null}var $c=[],js=-1;function Ur(n){return{current:n}}function un(n){0>js||(n.current=$c[js],$c[js]=null,js--)}function on(n,i){js++,$c[js]=n.current,n.current=i}var Fr={},Hn=Ur(Fr),ei=Ur(!1),ds=Fr;function Vs(n,i){var a=n.type.contextTypes;if(!a)return Fr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var p={},x;for(x in a)p[x]=i[x];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=p),p}function ti(n){return n=n.childContextTypes,n!=null}function Ho(){un(ei),un(Hn)}function Ch(n,i,a){if(Hn.current!==Fr)throw Error(t(168));on(Hn,i),on(ei,a)}function Ah(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var p in c)if(!(p in i))throw Error(t(108,ue(n)||"Unknown",p));return Q({},a,c)}function Go(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Fr,ds=Hn.current,on(Hn,n),on(ei,ei.current),!0}function Rh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Ah(n,i,ds),c.__reactInternalMemoizedMergedChildContext=n,un(ei),un(Hn),on(Hn,n)):un(ei),on(ei,a)}var fr=null,jo=!1,Xc=!1;function Nh(n){fr===null?fr=[n]:fr.push(n)}function tv(n){jo=!0,Nh(n)}function Or(){if(!Xc&&fr!==null){Xc=!0;var n=0,i=it;try{var a=fr;for(it=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}fr=null,jo=!1}catch(p){throw fr!==null&&(fr=fr.slice(n+1)),rn(li,Or),p}finally{it=i,Xc=!1}}return null}var Ws=[],$s=0,Vo=null,Wo=0,wi=[],Mi=0,fs=null,hr=1,pr="";function hs(n,i){Ws[$s++]=Wo,Ws[$s++]=Vo,Vo=n,Wo=i}function Ph(n,i,a){wi[Mi++]=hr,wi[Mi++]=pr,wi[Mi++]=fs,fs=n;var c=hr;n=pr;var p=32-oe(c)-1;c&=~(1<<p),a+=1;var x=32-oe(i)+p;if(30<x){var C=p-p%5;x=(c&(1<<C)-1).toString(32),c>>=C,p-=C,hr=1<<32-oe(i)+p|a<<p|c,pr=x+n}else hr=1<<x|a<<p|c,pr=n}function Yc(n){n.return!==null&&(hs(n,1),Ph(n,1,0))}function qc(n){for(;n===Vo;)Vo=Ws[--$s],Ws[$s]=null,Wo=Ws[--$s],Ws[$s]=null;for(;n===fs;)fs=wi[--Mi],wi[Mi]=null,pr=wi[--Mi],wi[Mi]=null,hr=wi[--Mi],wi[Mi]=null}var fi=null,hi=null,pn=!1,ki=null;function Dh(n,i){var a=Ai(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Lh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,fi=n,hi=zr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,fi=n,hi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=fs!==null?{id:hr,overflow:pr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Ai(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,fi=n,hi=null,!0):!1;default:return!1}}function Kc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Zc(n){if(pn){var i=hi;if(i){var a=i;if(!Lh(n,i)){if(Kc(n))throw Error(t(418));i=zr(a.nextSibling);var c=fi;i&&Lh(n,i)?Dh(c,a):(n.flags=n.flags&-4097|2,pn=!1,fi=n)}}else{if(Kc(n))throw Error(t(418));n.flags=n.flags&-4097|2,pn=!1,fi=n}}}function Ih(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;fi=n}function $o(n){if(n!==fi)return!1;if(!pn)return Ih(n),pn=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Gc(n.type,n.memoizedProps)),i&&(i=hi)){if(Kc(n))throw kh(),Error(t(418));for(;i;)Dh(n,i),i=zr(i.nextSibling)}if(Ih(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){hi=zr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}hi=null}}else hi=fi?zr(n.stateNode.nextSibling):null;return!0}function kh(){for(var n=hi;n;)n=zr(n.nextSibling)}function Xs(){hi=fi=null,pn=!1}function Jc(n){ki===null?ki=[n]:ki.push(n)}var nv=P.ReactCurrentBatchConfig;function Ba(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var p=c,x=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===x?i.ref:(i=function(C){var j=p.refs;C===null?delete j[x]:j[x]=C},i._stringRef=x,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Xo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function zh(n){var i=n._init;return i(n._payload)}function Uh(n){function i(me,ne){if(n){var ve=me.deletions;ve===null?(me.deletions=[ne],me.flags|=16):ve.push(ne)}}function a(me,ne){if(!n)return null;for(;ne!==null;)i(me,ne),ne=ne.sibling;return null}function c(me,ne){for(me=new Map;ne!==null;)ne.key!==null?me.set(ne.key,ne):me.set(ne.index,ne),ne=ne.sibling;return me}function p(me,ne){return me=Xr(me,ne),me.index=0,me.sibling=null,me}function x(me,ne,ve){return me.index=ve,n?(ve=me.alternate,ve!==null?(ve=ve.index,ve<ne?(me.flags|=2,ne):ve):(me.flags|=2,ne)):(me.flags|=1048576,ne)}function C(me){return n&&me.alternate===null&&(me.flags|=2),me}function j(me,ne,ve,$e){return ne===null||ne.tag!==6?(ne=ju(ve,me.mode,$e),ne.return=me,ne):(ne=p(ne,ve),ne.return=me,ne)}function J(me,ne,ve,$e){var ft=ve.type;return ft===E?Fe(me,ne,ve.props.children,$e,ve.key):ne!==null&&(ne.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===he&&zh(ft)===ne.type)?($e=p(ne,ve.props),$e.ref=Ba(me,ne,ve),$e.return=me,$e):($e=xl(ve.type,ve.key,ve.props,null,me.mode,$e),$e.ref=Ba(me,ne,ve),$e.return=me,$e)}function be(me,ne,ve,$e){return ne===null||ne.tag!==4||ne.stateNode.containerInfo!==ve.containerInfo||ne.stateNode.implementation!==ve.implementation?(ne=Vu(ve,me.mode,$e),ne.return=me,ne):(ne=p(ne,ve.children||[]),ne.return=me,ne)}function Fe(me,ne,ve,$e,ft){return ne===null||ne.tag!==7?(ne=Ss(ve,me.mode,$e,ft),ne.return=me,ne):(ne=p(ne,ve),ne.return=me,ne)}function He(me,ne,ve){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return ne=ju(""+ne,me.mode,ve),ne.return=me,ne;if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case U:return ve=xl(ne.type,ne.key,ne.props,null,me.mode,ve),ve.ref=Ba(me,null,ne),ve.return=me,ve;case I:return ne=Vu(ne,me.mode,ve),ne.return=me,ne;case he:var $e=ne._init;return He(me,$e(ne._payload),ve)}if(Mt(ne)||O(ne))return ne=Ss(ne,me.mode,ve,null),ne.return=me,ne;Xo(me,ne)}return null}function ke(me,ne,ve,$e){var ft=ne!==null?ne.key:null;if(typeof ve=="string"&&ve!==""||typeof ve=="number")return ft!==null?null:j(me,ne,""+ve,$e);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case U:return ve.key===ft?J(me,ne,ve,$e):null;case I:return ve.key===ft?be(me,ne,ve,$e):null;case he:return ft=ve._init,ke(me,ne,ft(ve._payload),$e)}if(Mt(ve)||O(ve))return ft!==null?null:Fe(me,ne,ve,$e,null);Xo(me,ve)}return null}function st(me,ne,ve,$e,ft){if(typeof $e=="string"&&$e!==""||typeof $e=="number")return me=me.get(ve)||null,j(ne,me,""+$e,ft);if(typeof $e=="object"&&$e!==null){switch($e.$$typeof){case U:return me=me.get($e.key===null?ve:$e.key)||null,J(ne,me,$e,ft);case I:return me=me.get($e.key===null?ve:$e.key)||null,be(ne,me,$e,ft);case he:var vt=$e._init;return st(me,ne,ve,vt($e._payload),ft)}if(Mt($e)||O($e))return me=me.get(ve)||null,Fe(ne,me,$e,ft,null);Xo(ne,$e)}return null}function lt(me,ne,ve,$e){for(var ft=null,vt=null,_t=ne,Et=ne=0,In=null;_t!==null&&Et<ve.length;Et++){_t.index>Et?(In=_t,_t=null):In=_t.sibling;var Zt=ke(me,_t,ve[Et],$e);if(Zt===null){_t===null&&(_t=In);break}n&&_t&&Zt.alternate===null&&i(me,_t),ne=x(Zt,ne,Et),vt===null?ft=Zt:vt.sibling=Zt,vt=Zt,_t=In}if(Et===ve.length)return a(me,_t),pn&&hs(me,Et),ft;if(_t===null){for(;Et<ve.length;Et++)_t=He(me,ve[Et],$e),_t!==null&&(ne=x(_t,ne,Et),vt===null?ft=_t:vt.sibling=_t,vt=_t);return pn&&hs(me,Et),ft}for(_t=c(me,_t);Et<ve.length;Et++)In=st(_t,me,Et,ve[Et],$e),In!==null&&(n&&In.alternate!==null&&_t.delete(In.key===null?Et:In.key),ne=x(In,ne,Et),vt===null?ft=In:vt.sibling=In,vt=In);return n&&_t.forEach(function(Yr){return i(me,Yr)}),pn&&hs(me,Et),ft}function ut(me,ne,ve,$e){var ft=O(ve);if(typeof ft!="function")throw Error(t(150));if(ve=ft.call(ve),ve==null)throw Error(t(151));for(var vt=ft=null,_t=ne,Et=ne=0,In=null,Zt=ve.next();_t!==null&&!Zt.done;Et++,Zt=ve.next()){_t.index>Et?(In=_t,_t=null):In=_t.sibling;var Yr=ke(me,_t,Zt.value,$e);if(Yr===null){_t===null&&(_t=In);break}n&&_t&&Yr.alternate===null&&i(me,_t),ne=x(Yr,ne,Et),vt===null?ft=Yr:vt.sibling=Yr,vt=Yr,_t=In}if(Zt.done)return a(me,_t),pn&&hs(me,Et),ft;if(_t===null){for(;!Zt.done;Et++,Zt=ve.next())Zt=He(me,Zt.value,$e),Zt!==null&&(ne=x(Zt,ne,Et),vt===null?ft=Zt:vt.sibling=Zt,vt=Zt);return pn&&hs(me,Et),ft}for(_t=c(me,_t);!Zt.done;Et++,Zt=ve.next())Zt=st(_t,me,Et,Zt.value,$e),Zt!==null&&(n&&Zt.alternate!==null&&_t.delete(Zt.key===null?Et:Zt.key),ne=x(Zt,ne,Et),vt===null?ft=Zt:vt.sibling=Zt,vt=Zt);return n&&_t.forEach(function(kv){return i(me,kv)}),pn&&hs(me,Et),ft}function Sn(me,ne,ve,$e){if(typeof ve=="object"&&ve!==null&&ve.type===E&&ve.key===null&&(ve=ve.props.children),typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case U:e:{for(var ft=ve.key,vt=ne;vt!==null;){if(vt.key===ft){if(ft=ve.type,ft===E){if(vt.tag===7){a(me,vt.sibling),ne=p(vt,ve.props.children),ne.return=me,me=ne;break e}}else if(vt.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===he&&zh(ft)===vt.type){a(me,vt.sibling),ne=p(vt,ve.props),ne.ref=Ba(me,vt,ve),ne.return=me,me=ne;break e}a(me,vt);break}else i(me,vt);vt=vt.sibling}ve.type===E?(ne=Ss(ve.props.children,me.mode,$e,ve.key),ne.return=me,me=ne):($e=xl(ve.type,ve.key,ve.props,null,me.mode,$e),$e.ref=Ba(me,ne,ve),$e.return=me,me=$e)}return C(me);case I:e:{for(vt=ve.key;ne!==null;){if(ne.key===vt)if(ne.tag===4&&ne.stateNode.containerInfo===ve.containerInfo&&ne.stateNode.implementation===ve.implementation){a(me,ne.sibling),ne=p(ne,ve.children||[]),ne.return=me,me=ne;break e}else{a(me,ne);break}else i(me,ne);ne=ne.sibling}ne=Vu(ve,me.mode,$e),ne.return=me,me=ne}return C(me);case he:return vt=ve._init,Sn(me,ne,vt(ve._payload),$e)}if(Mt(ve))return lt(me,ne,ve,$e);if(O(ve))return ut(me,ne,ve,$e);Xo(me,ve)}return typeof ve=="string"&&ve!==""||typeof ve=="number"?(ve=""+ve,ne!==null&&ne.tag===6?(a(me,ne.sibling),ne=p(ne,ve),ne.return=me,me=ne):(a(me,ne),ne=ju(ve,me.mode,$e),ne.return=me,me=ne),C(me)):a(me,ne)}return Sn}var Ys=Uh(!0),Fh=Uh(!1),Yo=Ur(null),qo=null,qs=null,Qc=null;function eu(){Qc=qs=qo=null}function tu(n){var i=Yo.current;un(Yo),n._currentValue=i}function nu(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ks(n,i){qo=n,Qc=qs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(ni=!0),n.firstContext=null)}function Ei(n){var i=n._currentValue;if(Qc!==n)if(n={context:n,memoizedValue:i,next:null},qs===null){if(qo===null)throw Error(t(308));qs=n,qo.dependencies={lanes:0,firstContext:n}}else qs=qs.next=n;return i}var ps=null;function iu(n){ps===null?ps=[n]:ps.push(n)}function Oh(n,i,a,c){var p=i.interleaved;return p===null?(a.next=a,iu(i)):(a.next=p.next,p.next=a),i.interleaved=a,mr(n,c)}function mr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Br=!1;function ru(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function gr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Hr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Yt&2)!==0){var p=c.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),c.pending=i,mr(n,a)}return p=c.interleaved,p===null?(i.next=i,iu(c)):(i.next=p.next,p.next=i),c.interleaved=i,mr(n,a)}function Ko(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Kt(n,a)}}function Hh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var p=null,x=null;if(a=a.firstBaseUpdate,a!==null){do{var C={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};x===null?p=x=C:x=x.next=C,a=a.next}while(a!==null);x===null?p=x=i:x=x.next=i}else p=x=i;a={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:x,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Zo(n,i,a,c){var p=n.updateQueue;Br=!1;var x=p.firstBaseUpdate,C=p.lastBaseUpdate,j=p.shared.pending;if(j!==null){p.shared.pending=null;var J=j,be=J.next;J.next=null,C===null?x=be:C.next=be,C=J;var Fe=n.alternate;Fe!==null&&(Fe=Fe.updateQueue,j=Fe.lastBaseUpdate,j!==C&&(j===null?Fe.firstBaseUpdate=be:j.next=be,Fe.lastBaseUpdate=J))}if(x!==null){var He=p.baseState;C=0,Fe=be=J=null,j=x;do{var ke=j.lane,st=j.eventTime;if((c&ke)===ke){Fe!==null&&(Fe=Fe.next={eventTime:st,lane:0,tag:j.tag,payload:j.payload,callback:j.callback,next:null});e:{var lt=n,ut=j;switch(ke=i,st=a,ut.tag){case 1:if(lt=ut.payload,typeof lt=="function"){He=lt.call(st,He,ke);break e}He=lt;break e;case 3:lt.flags=lt.flags&-65537|128;case 0:if(lt=ut.payload,ke=typeof lt=="function"?lt.call(st,He,ke):lt,ke==null)break e;He=Q({},He,ke);break e;case 2:Br=!0}}j.callback!==null&&j.lane!==0&&(n.flags|=64,ke=p.effects,ke===null?p.effects=[j]:ke.push(j))}else st={eventTime:st,lane:ke,tag:j.tag,payload:j.payload,callback:j.callback,next:null},Fe===null?(be=Fe=st,J=He):Fe=Fe.next=st,C|=ke;if(j=j.next,j===null){if(j=p.shared.pending,j===null)break;ke=j,j=ke.next,ke.next=null,p.lastBaseUpdate=ke,p.shared.pending=null}}while(!0);if(Fe===null&&(J=He),p.baseState=J,p.firstBaseUpdate=be,p.lastBaseUpdate=Fe,i=p.shared.interleaved,i!==null){p=i;do C|=p.lane,p=p.next;while(p!==i)}else x===null&&(p.shared.lanes=0);xs|=C,n.lanes=C,n.memoizedState=He}}function Gh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],p=c.callback;if(p!==null){if(c.callback=null,c=a,typeof p!="function")throw Error(t(191,p));p.call(c)}}}var Ha={},Zi=Ur(Ha),Ga=Ur(Ha),ja=Ur(Ha);function ms(n){if(n===Ha)throw Error(t(174));return n}function su(n,i){switch(on(ja,i),on(Ga,n),on(Zi,Ha),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:It(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=It(i,n)}un(Zi),on(Zi,i)}function Zs(){un(Zi),un(Ga),un(ja)}function jh(n){ms(ja.current);var i=ms(Zi.current),a=It(i,n.type);i!==a&&(on(Ga,n),on(Zi,a))}function au(n){Ga.current===n&&(un(Zi),un(Ga))}var mn=Ur(0);function Jo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ou=[];function lu(){for(var n=0;n<ou.length;n++)ou[n]._workInProgressVersionPrimary=null;ou.length=0}var Qo=P.ReactCurrentDispatcher,cu=P.ReactCurrentBatchConfig,gs=0,gn=null,Tn=null,Dn=null,el=!1,Va=!1,Wa=0,iv=0;function Gn(){throw Error(t(321))}function uu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Ii(n[a],i[a]))return!1;return!0}function du(n,i,a,c,p,x){if(gs=x,gn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Qo.current=n===null||n.memoizedState===null?ov:lv,n=a(c,p),Va){x=0;do{if(Va=!1,Wa=0,25<=x)throw Error(t(301));x+=1,Dn=Tn=null,i.updateQueue=null,Qo.current=cv,n=a(c,p)}while(Va)}if(Qo.current=il,i=Tn!==null&&Tn.next!==null,gs=0,Dn=Tn=gn=null,el=!1,i)throw Error(t(300));return n}function fu(){var n=Wa!==0;return Wa=0,n}function Ji(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dn===null?gn.memoizedState=Dn=n:Dn=Dn.next=n,Dn}function Ti(){if(Tn===null){var n=gn.alternate;n=n!==null?n.memoizedState:null}else n=Tn.next;var i=Dn===null?gn.memoizedState:Dn.next;if(i!==null)Dn=i,Tn=n;else{if(n===null)throw Error(t(310));Tn=n,n={memoizedState:Tn.memoizedState,baseState:Tn.baseState,baseQueue:Tn.baseQueue,queue:Tn.queue,next:null},Dn===null?gn.memoizedState=Dn=n:Dn=Dn.next=n}return Dn}function $a(n,i){return typeof i=="function"?i(n):i}function hu(n){var i=Ti(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Tn,p=c.baseQueue,x=a.pending;if(x!==null){if(p!==null){var C=p.next;p.next=x.next,x.next=C}c.baseQueue=p=x,a.pending=null}if(p!==null){x=p.next,c=c.baseState;var j=C=null,J=null,be=x;do{var Fe=be.lane;if((gs&Fe)===Fe)J!==null&&(J=J.next={lane:0,action:be.action,hasEagerState:be.hasEagerState,eagerState:be.eagerState,next:null}),c=be.hasEagerState?be.eagerState:n(c,be.action);else{var He={lane:Fe,action:be.action,hasEagerState:be.hasEagerState,eagerState:be.eagerState,next:null};J===null?(j=J=He,C=c):J=J.next=He,gn.lanes|=Fe,xs|=Fe}be=be.next}while(be!==null&&be!==x);J===null?C=c:J.next=j,Ii(c,i.memoizedState)||(ni=!0),i.memoizedState=c,i.baseState=C,i.baseQueue=J,a.lastRenderedState=c}if(n=a.interleaved,n!==null){p=n;do x=p.lane,gn.lanes|=x,xs|=x,p=p.next;while(p!==n)}else p===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function pu(n){var i=Ti(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,p=a.pending,x=i.memoizedState;if(p!==null){a.pending=null;var C=p=p.next;do x=n(x,C.action),C=C.next;while(C!==p);Ii(x,i.memoizedState)||(ni=!0),i.memoizedState=x,i.baseQueue===null&&(i.baseState=x),a.lastRenderedState=x}return[x,c]}function Vh(){}function Wh(n,i){var a=gn,c=Ti(),p=i(),x=!Ii(c.memoizedState,p);if(x&&(c.memoizedState=p,ni=!0),c=c.queue,mu(Yh.bind(null,a,c,n),[n]),c.getSnapshot!==i||x||Dn!==null&&Dn.memoizedState.tag&1){if(a.flags|=2048,Xa(9,Xh.bind(null,a,c,p,i),void 0,null),Ln===null)throw Error(t(349));(gs&30)!==0||$h(a,i,p)}return p}function $h(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=gn.updateQueue,i===null?(i={lastEffect:null,stores:null},gn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Xh(n,i,a,c){i.value=a,i.getSnapshot=c,qh(i)&&Kh(n)}function Yh(n,i,a){return a(function(){qh(i)&&Kh(n)})}function qh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Ii(n,a)}catch{return!0}}function Kh(n){var i=mr(n,1);i!==null&&Oi(i,n,1,-1)}function Zh(n){var i=Ji();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:n},i.queue=n,n=n.dispatch=av.bind(null,gn,n),[i.memoizedState,n]}function Xa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=gn.updateQueue,i===null?(i={lastEffect:null,stores:null},gn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Jh(){return Ti().memoizedState}function tl(n,i,a,c){var p=Ji();gn.flags|=n,p.memoizedState=Xa(1|i,a,void 0,c===void 0?null:c)}function nl(n,i,a,c){var p=Ti();c=c===void 0?null:c;var x=void 0;if(Tn!==null){var C=Tn.memoizedState;if(x=C.destroy,c!==null&&uu(c,C.deps)){p.memoizedState=Xa(i,a,x,c);return}}gn.flags|=n,p.memoizedState=Xa(1|i,a,x,c)}function Qh(n,i){return tl(8390656,8,n,i)}function mu(n,i){return nl(2048,8,n,i)}function ep(n,i){return nl(4,2,n,i)}function tp(n,i){return nl(4,4,n,i)}function np(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function ip(n,i,a){return a=a!=null?a.concat([n]):null,nl(4,4,np.bind(null,i,n),a)}function gu(){}function rp(n,i){var a=Ti();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&uu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function sp(n,i){var a=Ti();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&uu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function ap(n,i,a){return(gs&21)===0?(n.baseState&&(n.baseState=!1,ni=!0),n.memoizedState=a):(Ii(a,i)||(a=pt(),gn.lanes|=a,xs|=a,n.baseState=!0),i)}function rv(n,i){var a=it;it=a!==0&&4>a?a:4,n(!0);var c=cu.transition;cu.transition={};try{n(!1),i()}finally{it=a,cu.transition=c}}function op(){return Ti().memoizedState}function sv(n,i,a){var c=Wr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},lp(n))cp(i,a);else if(a=Oh(n,i,a,c),a!==null){var p=Zn();Oi(a,n,c,p),up(a,i,c)}}function av(n,i,a){var c=Wr(n),p={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(lp(n))cp(i,p);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=i.lastRenderedReducer,x!==null))try{var C=i.lastRenderedState,j=x(C,a);if(p.hasEagerState=!0,p.eagerState=j,Ii(j,C)){var J=i.interleaved;J===null?(p.next=p,iu(i)):(p.next=J.next,J.next=p),i.interleaved=p;return}}catch{}finally{}a=Oh(n,i,p,c),a!==null&&(p=Zn(),Oi(a,n,c,p),up(a,i,c))}}function lp(n){var i=n.alternate;return n===gn||i!==null&&i===gn}function cp(n,i){Va=el=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function up(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Kt(n,a)}}var il={readContext:Ei,useCallback:Gn,useContext:Gn,useEffect:Gn,useImperativeHandle:Gn,useInsertionEffect:Gn,useLayoutEffect:Gn,useMemo:Gn,useReducer:Gn,useRef:Gn,useState:Gn,useDebugValue:Gn,useDeferredValue:Gn,useTransition:Gn,useMutableSource:Gn,useSyncExternalStore:Gn,useId:Gn,unstable_isNewReconciler:!1},ov={readContext:Ei,useCallback:function(n,i){return Ji().memoizedState=[n,i===void 0?null:i],n},useContext:Ei,useEffect:Qh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,tl(4194308,4,np.bind(null,i,n),a)},useLayoutEffect:function(n,i){return tl(4194308,4,n,i)},useInsertionEffect:function(n,i){return tl(4,2,n,i)},useMemo:function(n,i){var a=Ji();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ji();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=sv.bind(null,gn,n),[c.memoizedState,n]},useRef:function(n){var i=Ji();return n={current:n},i.memoizedState=n},useState:Zh,useDebugValue:gu,useDeferredValue:function(n){return Ji().memoizedState=n},useTransition:function(){var n=Zh(!1),i=n[0];return n=rv.bind(null,n[1]),Ji().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=gn,p=Ji();if(pn){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Ln===null)throw Error(t(349));(gs&30)!==0||$h(c,i,a)}p.memoizedState=a;var x={value:a,getSnapshot:i};return p.queue=x,Qh(Yh.bind(null,c,x,n),[n]),c.flags|=2048,Xa(9,Xh.bind(null,c,x,a,i),void 0,null),a},useId:function(){var n=Ji(),i=Ln.identifierPrefix;if(pn){var a=pr,c=hr;a=(c&~(1<<32-oe(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Wa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=iv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},lv={readContext:Ei,useCallback:rp,useContext:Ei,useEffect:mu,useImperativeHandle:ip,useInsertionEffect:ep,useLayoutEffect:tp,useMemo:sp,useReducer:hu,useRef:Jh,useState:function(){return hu($a)},useDebugValue:gu,useDeferredValue:function(n){var i=Ti();return ap(i,Tn.memoizedState,n)},useTransition:function(){var n=hu($a)[0],i=Ti().memoizedState;return[n,i]},useMutableSource:Vh,useSyncExternalStore:Wh,useId:op,unstable_isNewReconciler:!1},cv={readContext:Ei,useCallback:rp,useContext:Ei,useEffect:mu,useImperativeHandle:ip,useInsertionEffect:ep,useLayoutEffect:tp,useMemo:sp,useReducer:pu,useRef:Jh,useState:function(){return pu($a)},useDebugValue:gu,useDeferredValue:function(n){var i=Ti();return Tn===null?i.memoizedState=n:ap(i,Tn.memoizedState,n)},useTransition:function(){var n=pu($a)[0],i=Ti().memoizedState;return[n,i]},useMutableSource:Vh,useSyncExternalStore:Wh,useId:op,unstable_isNewReconciler:!1};function zi(n,i){if(n&&n.defaultProps){i=Q({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function xu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:Q({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var rl={isMounted:function(n){return(n=n._reactInternals)?tn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Zn(),p=Wr(n),x=gr(c,p);x.payload=i,a!=null&&(x.callback=a),i=Hr(n,x,p),i!==null&&(Oi(i,n,p,c),Ko(i,n,p))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Zn(),p=Wr(n),x=gr(c,p);x.tag=1,x.payload=i,a!=null&&(x.callback=a),i=Hr(n,x,p),i!==null&&(Oi(i,n,p,c),Ko(i,n,p))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Zn(),c=Wr(n),p=gr(a,c);p.tag=2,i!=null&&(p.callback=i),i=Hr(n,p,c),i!==null&&(Oi(i,n,c,a),Ko(i,n,c))}};function dp(n,i,a,c,p,x,C){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,x,C):i.prototype&&i.prototype.isPureReactComponent?!La(a,c)||!La(p,x):!0}function fp(n,i,a){var c=!1,p=Fr,x=i.contextType;return typeof x=="object"&&x!==null?x=Ei(x):(p=ti(i)?ds:Hn.current,c=i.contextTypes,x=(c=c!=null)?Vs(n,p):Fr),i=new i(a,x),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=rl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=x),i}function hp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&rl.enqueueReplaceState(i,i.state,null)}function vu(n,i,a,c){var p=n.stateNode;p.props=a,p.state=n.memoizedState,p.refs={},ru(n);var x=i.contextType;typeof x=="object"&&x!==null?p.context=Ei(x):(x=ti(i)?ds:Hn.current,p.context=Vs(n,x)),p.state=n.memoizedState,x=i.getDerivedStateFromProps,typeof x=="function"&&(xu(n,i,x,a),p.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(i=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),i!==p.state&&rl.enqueueReplaceState(p,p.state,null),Zo(n,a,p,c),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Js(n,i){try{var a="",c=i;do a+=te(c),c=c.return;while(c);var p=a}catch(x){p=`
Error generating stack: `+x.message+`
`+x.stack}return{value:n,source:i,stack:p,digest:null}}function _u(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function yu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var uv=typeof WeakMap=="function"?WeakMap:Map;function pp(n,i,a){a=gr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){dl||(dl=!0,ku=c),yu(n,i)},a}function mp(n,i,a){a=gr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var p=i.value;a.payload=function(){return c(p)},a.callback=function(){yu(n,i)}}var x=n.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(a.callback=function(){yu(n,i),typeof c!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var C=i.stack;this.componentDidCatch(i.value,{componentStack:C!==null?C:""})}),a}function gp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new uv;var p=new Set;c.set(i,p)}else p=c.get(i),p===void 0&&(p=new Set,c.set(i,p));p.has(a)||(p.add(a),n=Mv.bind(null,n,i,a),i.then(n,n))}function xp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function vp(n,i,a,c,p){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=gr(-1,1),i.tag=2,Hr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var dv=P.ReactCurrentOwner,ni=!1;function Kn(n,i,a,c){i.child=n===null?Fh(i,null,a,c):Ys(i,n.child,a,c)}function _p(n,i,a,c,p){a=a.render;var x=i.ref;return Ks(i,p),c=du(n,i,a,c,x,p),a=fu(),n!==null&&!ni?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,xr(n,i,p)):(pn&&a&&Yc(i),i.flags|=1,Kn(n,i,c,p),i.child)}function yp(n,i,a,c,p){if(n===null){var x=a.type;return typeof x=="function"&&!Gu(x)&&x.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=x,Sp(n,i,x,c,p)):(n=xl(a.type,null,c,i,i.mode,p),n.ref=i.ref,n.return=i,i.child=n)}if(x=n.child,(n.lanes&p)===0){var C=x.memoizedProps;if(a=a.compare,a=a!==null?a:La,a(C,c)&&n.ref===i.ref)return xr(n,i,p)}return i.flags|=1,n=Xr(x,c),n.ref=i.ref,n.return=i,i.child=n}function Sp(n,i,a,c,p){if(n!==null){var x=n.memoizedProps;if(La(x,c)&&n.ref===i.ref)if(ni=!1,i.pendingProps=c=x,(n.lanes&p)!==0)(n.flags&131072)!==0&&(ni=!0);else return i.lanes=n.lanes,xr(n,i,p)}return Su(n,i,a,c,p)}function bp(n,i,a){var c=i.pendingProps,p=c.children,x=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},on(ea,pi),pi|=a;else{if((a&1073741824)===0)return n=x!==null?x.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,on(ea,pi),pi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=x!==null?x.baseLanes:a,on(ea,pi),pi|=c}else x!==null?(c=x.baseLanes|a,i.memoizedState=null):c=a,on(ea,pi),pi|=c;return Kn(n,i,p,a),i.child}function wp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Su(n,i,a,c,p){var x=ti(a)?ds:Hn.current;return x=Vs(i,x),Ks(i,p),a=du(n,i,a,c,x,p),c=fu(),n!==null&&!ni?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,xr(n,i,p)):(pn&&c&&Yc(i),i.flags|=1,Kn(n,i,a,p),i.child)}function Mp(n,i,a,c,p){if(ti(a)){var x=!0;Go(i)}else x=!1;if(Ks(i,p),i.stateNode===null)al(n,i),fp(i,a,c),vu(i,a,c,p),c=!0;else if(n===null){var C=i.stateNode,j=i.memoizedProps;C.props=j;var J=C.context,be=a.contextType;typeof be=="object"&&be!==null?be=Ei(be):(be=ti(a)?ds:Hn.current,be=Vs(i,be));var Fe=a.getDerivedStateFromProps,He=typeof Fe=="function"||typeof C.getSnapshotBeforeUpdate=="function";He||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(j!==c||J!==be)&&hp(i,C,c,be),Br=!1;var ke=i.memoizedState;C.state=ke,Zo(i,c,C,p),J=i.memoizedState,j!==c||ke!==J||ei.current||Br?(typeof Fe=="function"&&(xu(i,a,Fe,c),J=i.memoizedState),(j=Br||dp(i,a,j,c,ke,J,be))?(He||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(i.flags|=4194308)):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=J),C.props=c,C.state=J,C.context=be,c=j):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{C=i.stateNode,Bh(n,i),j=i.memoizedProps,be=i.type===i.elementType?j:zi(i.type,j),C.props=be,He=i.pendingProps,ke=C.context,J=a.contextType,typeof J=="object"&&J!==null?J=Ei(J):(J=ti(a)?ds:Hn.current,J=Vs(i,J));var st=a.getDerivedStateFromProps;(Fe=typeof st=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(j!==He||ke!==J)&&hp(i,C,c,J),Br=!1,ke=i.memoizedState,C.state=ke,Zo(i,c,C,p);var lt=i.memoizedState;j!==He||ke!==lt||ei.current||Br?(typeof st=="function"&&(xu(i,a,st,c),lt=i.memoizedState),(be=Br||dp(i,a,be,c,ke,lt,J)||!1)?(Fe||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(c,lt,J),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(c,lt,J)),typeof C.componentDidUpdate=="function"&&(i.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof C.componentDidUpdate!="function"||j===n.memoizedProps&&ke===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||j===n.memoizedProps&&ke===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=lt),C.props=c,C.state=lt,C.context=J,c=be):(typeof C.componentDidUpdate!="function"||j===n.memoizedProps&&ke===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||j===n.memoizedProps&&ke===n.memoizedState||(i.flags|=1024),c=!1)}return bu(n,i,a,c,x,p)}function bu(n,i,a,c,p,x){wp(n,i);var C=(i.flags&128)!==0;if(!c&&!C)return p&&Rh(i,a,!1),xr(n,i,x);c=i.stateNode,dv.current=i;var j=C&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&C?(i.child=Ys(i,n.child,null,x),i.child=Ys(i,null,j,x)):Kn(n,i,j,x),i.memoizedState=c.state,p&&Rh(i,a,!0),i.child}function Ep(n){var i=n.stateNode;i.pendingContext?Ch(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Ch(n,i.context,!1),su(n,i.containerInfo)}function Tp(n,i,a,c,p){return Xs(),Jc(p),i.flags|=256,Kn(n,i,a,c),i.child}var wu={dehydrated:null,treeContext:null,retryLane:0};function Mu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Cp(n,i,a){var c=i.pendingProps,p=mn.current,x=!1,C=(i.flags&128)!==0,j;if((j=C)||(j=n!==null&&n.memoizedState===null?!1:(p&2)!==0),j?(x=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),on(mn,p&1),n===null)return Zc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(C=c.children,n=c.fallback,x?(c=i.mode,x=i.child,C={mode:"hidden",children:C},(c&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=C):x=vl(C,c,0,null),n=Ss(n,c,a,null),x.return=i,n.return=i,x.sibling=n,i.child=x,i.child.memoizedState=Mu(a),i.memoizedState=wu,n):Eu(i,C));if(p=n.memoizedState,p!==null&&(j=p.dehydrated,j!==null))return fv(n,i,C,c,j,p,a);if(x){x=c.fallback,C=i.mode,p=n.child,j=p.sibling;var J={mode:"hidden",children:c.children};return(C&1)===0&&i.child!==p?(c=i.child,c.childLanes=0,c.pendingProps=J,i.deletions=null):(c=Xr(p,J),c.subtreeFlags=p.subtreeFlags&14680064),j!==null?x=Xr(j,x):(x=Ss(x,C,a,null),x.flags|=2),x.return=i,c.return=i,c.sibling=x,i.child=c,c=x,x=i.child,C=n.child.memoizedState,C=C===null?Mu(a):{baseLanes:C.baseLanes|a,cachePool:null,transitions:C.transitions},x.memoizedState=C,x.childLanes=n.childLanes&~a,i.memoizedState=wu,c}return x=n.child,n=x.sibling,c=Xr(x,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Eu(n,i){return i=vl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function sl(n,i,a,c){return c!==null&&Jc(c),Ys(i,n.child,null,a),n=Eu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function fv(n,i,a,c,p,x,C){if(a)return i.flags&256?(i.flags&=-257,c=_u(Error(t(422))),sl(n,i,C,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(x=c.fallback,p=i.mode,c=vl({mode:"visible",children:c.children},p,0,null),x=Ss(x,p,C,null),x.flags|=2,c.return=i,x.return=i,c.sibling=x,i.child=c,(i.mode&1)!==0&&Ys(i,n.child,null,C),i.child.memoizedState=Mu(C),i.memoizedState=wu,x);if((i.mode&1)===0)return sl(n,i,C,null);if(p.data==="$!"){if(c=p.nextSibling&&p.nextSibling.dataset,c)var j=c.dgst;return c=j,x=Error(t(419)),c=_u(x,c,void 0),sl(n,i,C,c)}if(j=(C&n.childLanes)!==0,ni||j){if(c=Ln,c!==null){switch(C&-C){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(c.suspendedLanes|C))!==0?0:p,p!==0&&p!==x.retryLane&&(x.retryLane=p,mr(n,p),Oi(c,n,p,-1))}return Hu(),c=_u(Error(t(421))),sl(n,i,C,c)}return p.data==="$?"?(i.flags|=128,i.child=n.child,i=Ev.bind(null,n),p._reactRetry=i,null):(n=x.treeContext,hi=zr(p.nextSibling),fi=i,pn=!0,ki=null,n!==null&&(wi[Mi++]=hr,wi[Mi++]=pr,wi[Mi++]=fs,hr=n.id,pr=n.overflow,fs=i),i=Eu(i,c.children),i.flags|=4096,i)}function Ap(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),nu(n.return,i,a)}function Tu(n,i,a,c,p){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:p}:(x.isBackwards=i,x.rendering=null,x.renderingStartTime=0,x.last=c,x.tail=a,x.tailMode=p)}function Rp(n,i,a){var c=i.pendingProps,p=c.revealOrder,x=c.tail;if(Kn(n,i,c.children,a),c=mn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ap(n,a,i);else if(n.tag===19)Ap(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(on(mn,c),(i.mode&1)===0)i.memoizedState=null;else switch(p){case"forwards":for(a=i.child,p=null;a!==null;)n=a.alternate,n!==null&&Jo(n)===null&&(p=a),a=a.sibling;a=p,a===null?(p=i.child,i.child=null):(p=a.sibling,a.sibling=null),Tu(i,!1,p,a,x);break;case"backwards":for(a=null,p=i.child,i.child=null;p!==null;){if(n=p.alternate,n!==null&&Jo(n)===null){i.child=p;break}n=p.sibling,p.sibling=a,a=p,p=n}Tu(i,!0,a,null,x);break;case"together":Tu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function al(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function xr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),xs|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Xr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Xr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function hv(n,i,a){switch(i.tag){case 3:Ep(i),Xs();break;case 5:jh(i);break;case 1:ti(i.type)&&Go(i);break;case 4:su(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,p=i.memoizedProps.value;on(Yo,c._currentValue),c._currentValue=p;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(on(mn,mn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Cp(n,i,a):(on(mn,mn.current&1),n=xr(n,i,a),n!==null?n.sibling:null);on(mn,mn.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Rp(n,i,a);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),on(mn,mn.current),c)break;return null;case 22:case 23:return i.lanes=0,bp(n,i,a)}return xr(n,i,a)}var Np,Cu,Pp,Dp;Np=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Cu=function(){},Pp=function(n,i,a,c){var p=n.memoizedProps;if(p!==c){n=i.stateNode,ms(Zi.current);var x=null;switch(a){case"input":p=Ke(n,p),c=Ke(n,c),x=[];break;case"select":p=Q({},p,{value:void 0}),c=Q({},c,{value:void 0}),x=[];break;case"textarea":p=Dt(n,p),c=Dt(n,c),x=[];break;default:typeof p.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Oo)}Ee(a,c);var C;a=null;for(be in p)if(!c.hasOwnProperty(be)&&p.hasOwnProperty(be)&&p[be]!=null)if(be==="style"){var j=p[be];for(C in j)j.hasOwnProperty(C)&&(a||(a={}),a[C]="")}else be!=="dangerouslySetInnerHTML"&&be!=="children"&&be!=="suppressContentEditableWarning"&&be!=="suppressHydrationWarning"&&be!=="autoFocus"&&(o.hasOwnProperty(be)?x||(x=[]):(x=x||[]).push(be,null));for(be in c){var J=c[be];if(j=p!=null?p[be]:void 0,c.hasOwnProperty(be)&&J!==j&&(J!=null||j!=null))if(be==="style")if(j){for(C in j)!j.hasOwnProperty(C)||J&&J.hasOwnProperty(C)||(a||(a={}),a[C]="");for(C in J)J.hasOwnProperty(C)&&j[C]!==J[C]&&(a||(a={}),a[C]=J[C])}else a||(x||(x=[]),x.push(be,a)),a=J;else be==="dangerouslySetInnerHTML"?(J=J?J.__html:void 0,j=j?j.__html:void 0,J!=null&&j!==J&&(x=x||[]).push(be,J)):be==="children"?typeof J!="string"&&typeof J!="number"||(x=x||[]).push(be,""+J):be!=="suppressContentEditableWarning"&&be!=="suppressHydrationWarning"&&(o.hasOwnProperty(be)?(J!=null&&be==="onScroll"&&cn("scroll",n),x||j===J||(x=[])):(x=x||[]).push(be,J))}a&&(x=x||[]).push("style",a);var be=x;(i.updateQueue=be)&&(i.flags|=4)}},Dp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ya(n,i){if(!pn)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function jn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var p=n.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags&14680064,c|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function pv(n,i,a){var c=i.pendingProps;switch(qc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jn(i),null;case 1:return ti(i.type)&&Ho(),jn(i),null;case 3:return c=i.stateNode,Zs(),un(ei),un(Hn),lu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&($o(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ki!==null&&(Fu(ki),ki=null))),Cu(n,i),jn(i),null;case 5:au(i);var p=ms(ja.current);if(a=i.type,n!==null&&i.stateNode!=null)Pp(n,i,a,c,p),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return jn(i),null}if(n=ms(Zi.current),$o(i)){c=i.stateNode,a=i.type;var x=i.memoizedProps;switch(c[Ki]=i,c[Fa]=x,n=(i.mode&1)!==0,a){case"dialog":cn("cancel",c),cn("close",c);break;case"iframe":case"object":case"embed":cn("load",c);break;case"video":case"audio":for(p=0;p<ka.length;p++)cn(ka[p],c);break;case"source":cn("error",c);break;case"img":case"image":case"link":cn("error",c),cn("load",c);break;case"details":cn("toggle",c);break;case"input":xt(c,x),cn("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!x.multiple},cn("invalid",c);break;case"textarea":sn(c,x),cn("invalid",c)}Ee(a,x),p=null;for(var C in x)if(x.hasOwnProperty(C)){var j=x[C];C==="children"?typeof j=="string"?c.textContent!==j&&(x.suppressHydrationWarning!==!0&&Fo(c.textContent,j,n),p=["children",j]):typeof j=="number"&&c.textContent!==""+j&&(x.suppressHydrationWarning!==!0&&Fo(c.textContent,j,n),p=["children",""+j]):o.hasOwnProperty(C)&&j!=null&&C==="onScroll"&&cn("scroll",c)}switch(a){case"input":Xe(c),gt(c,x,!0);break;case"textarea":Xe(c),Gt(c);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(c.onclick=Oo)}c=p,i.updateQueue=c,c!==null&&(i.flags|=4)}else{C=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Lt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=C.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=C.createElement(a,{is:c.is}):(n=C.createElement(a),a==="select"&&(C=n,c.multiple?C.multiple=!0:c.size&&(C.size=c.size))):n=C.createElementNS(n,a),n[Ki]=i,n[Fa]=c,Np(n,i,!1,!1),i.stateNode=n;e:{switch(C=ze(a,c),a){case"dialog":cn("cancel",n),cn("close",n),p=c;break;case"iframe":case"object":case"embed":cn("load",n),p=c;break;case"video":case"audio":for(p=0;p<ka.length;p++)cn(ka[p],n);p=c;break;case"source":cn("error",n),p=c;break;case"img":case"image":case"link":cn("error",n),cn("load",n),p=c;break;case"details":cn("toggle",n),p=c;break;case"input":xt(n,c),p=Ke(n,c),cn("invalid",n);break;case"option":p=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},p=Q({},c,{value:void 0}),cn("invalid",n);break;case"textarea":sn(n,c),p=Dt(n,c),cn("invalid",n);break;default:p=c}Ee(a,p),j=p;for(x in j)if(j.hasOwnProperty(x)){var J=j[x];x==="style"?ae(n,J):x==="dangerouslySetInnerHTML"?(J=J?J.__html:void 0,J!=null&&Nt(n,J)):x==="children"?typeof J=="string"?(a!=="textarea"||J!=="")&&at(n,J):typeof J=="number"&&at(n,""+J):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?J!=null&&x==="onScroll"&&cn("scroll",n):J!=null&&z(n,x,J,C))}switch(a){case"input":Xe(n),gt(n,c,!1);break;case"textarea":Xe(n),Gt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+xe(c.value));break;case"select":n.multiple=!!c.multiple,x=c.value,x!=null?ge(n,!!c.multiple,x,!1):c.defaultValue!=null&&ge(n,!!c.multiple,c.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=Oo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return jn(i),null;case 6:if(n&&i.stateNode!=null)Dp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=ms(ja.current),ms(Zi.current),$o(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ki]=i,(x=c.nodeValue!==a)&&(n=fi,n!==null))switch(n.tag){case 3:Fo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Fo(c.nodeValue,a,(n.mode&1)!==0)}x&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ki]=i,i.stateNode=c}return jn(i),null;case 13:if(un(mn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(pn&&hi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)kh(),Xs(),i.flags|=98560,x=!1;else if(x=$o(i),c!==null&&c.dehydrated!==null){if(n===null){if(!x)throw Error(t(318));if(x=i.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Ki]=i}else Xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;jn(i),x=!1}else ki!==null&&(Fu(ki),ki=null),x=!0;if(!x)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(mn.current&1)!==0?Cn===0&&(Cn=3):Hu())),i.updateQueue!==null&&(i.flags|=4),jn(i),null);case 4:return Zs(),Cu(n,i),n===null&&za(i.stateNode.containerInfo),jn(i),null;case 10:return tu(i.type._context),jn(i),null;case 17:return ti(i.type)&&Ho(),jn(i),null;case 19:if(un(mn),x=i.memoizedState,x===null)return jn(i),null;if(c=(i.flags&128)!==0,C=x.rendering,C===null)if(c)Ya(x,!1);else{if(Cn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(C=Jo(n),C!==null){for(i.flags|=128,Ya(x,!1),c=C.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)x=a,n=c,x.flags&=14680066,C=x.alternate,C===null?(x.childLanes=0,x.lanes=n,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=C.childLanes,x.lanes=C.lanes,x.child=C.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=C.memoizedProps,x.memoizedState=C.memoizedState,x.updateQueue=C.updateQueue,x.type=C.type,n=C.dependencies,x.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return on(mn,mn.current&1|2),i.child}n=n.sibling}x.tail!==null&&qt()>ta&&(i.flags|=128,c=!0,Ya(x,!1),i.lanes=4194304)}else{if(!c)if(n=Jo(C),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ya(x,!0),x.tail===null&&x.tailMode==="hidden"&&!C.alternate&&!pn)return jn(i),null}else 2*qt()-x.renderingStartTime>ta&&a!==1073741824&&(i.flags|=128,c=!0,Ya(x,!1),i.lanes=4194304);x.isBackwards?(C.sibling=i.child,i.child=C):(a=x.last,a!==null?a.sibling=C:i.child=C,x.last=C)}return x.tail!==null?(i=x.tail,x.rendering=i,x.tail=i.sibling,x.renderingStartTime=qt(),i.sibling=null,a=mn.current,on(mn,c?a&1|2:a&1),i):(jn(i),null);case 22:case 23:return Bu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(pi&1073741824)!==0&&(jn(i),i.subtreeFlags&6&&(i.flags|=8192)):jn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function mv(n,i){switch(qc(i),i.tag){case 1:return ti(i.type)&&Ho(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Zs(),un(ei),un(Hn),lu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return au(i),null;case 13:if(un(mn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Xs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return un(mn),null;case 4:return Zs(),null;case 10:return tu(i.type._context),null;case 22:case 23:return Bu(),null;case 24:return null;default:return null}}var ol=!1,Vn=!1,gv=typeof WeakSet=="function"?WeakSet:Set,ot=null;function Qs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){_n(n,i,c)}else a.current=null}function Au(n,i,a){try{a()}catch(c){_n(n,i,c)}}var Lp=!1;function xv(n,i){if(Bc=ks,n=dh(),Dc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var p=c.anchorOffset,x=c.focusNode;c=c.focusOffset;try{a.nodeType,x.nodeType}catch{a=null;break e}var C=0,j=-1,J=-1,be=0,Fe=0,He=n,ke=null;t:for(;;){for(var st;He!==a||p!==0&&He.nodeType!==3||(j=C+p),He!==x||c!==0&&He.nodeType!==3||(J=C+c),He.nodeType===3&&(C+=He.nodeValue.length),(st=He.firstChild)!==null;)ke=He,He=st;for(;;){if(He===n)break t;if(ke===a&&++be===p&&(j=C),ke===x&&++Fe===c&&(J=C),(st=He.nextSibling)!==null)break;He=ke,ke=He.parentNode}He=st}a=j===-1||J===-1?null:{start:j,end:J}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hc={focusedElem:n,selectionRange:a},ks=!1,ot=i;ot!==null;)if(i=ot,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ot=n;else for(;ot!==null;){i=ot;try{var lt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(lt!==null){var ut=lt.memoizedProps,Sn=lt.memoizedState,me=i.stateNode,ne=me.getSnapshotBeforeUpdate(i.elementType===i.type?ut:zi(i.type,ut),Sn);me.__reactInternalSnapshotBeforeUpdate=ne}break;case 3:var ve=i.stateNode.containerInfo;ve.nodeType===1?ve.textContent="":ve.nodeType===9&&ve.documentElement&&ve.removeChild(ve.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch($e){_n(i,i.return,$e)}if(n=i.sibling,n!==null){n.return=i.return,ot=n;break}ot=i.return}return lt=Lp,Lp=!1,lt}function qa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var p=c=c.next;do{if((p.tag&n)===n){var x=p.destroy;p.destroy=void 0,x!==void 0&&Au(i,a,x)}p=p.next}while(p!==c)}}function ll(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Ru(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Ip(n){var i=n.alternate;i!==null&&(n.alternate=null,Ip(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ki],delete i[Fa],delete i[Wc],delete i[Qx],delete i[ev])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function kp(n){return n.tag===5||n.tag===3||n.tag===4}function zp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||kp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Nu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Oo));else if(c!==4&&(n=n.child,n!==null))for(Nu(n,i,a),n=n.sibling;n!==null;)Nu(n,i,a),n=n.sibling}function Pu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Pu(n,i,a),n=n.sibling;n!==null;)Pu(n,i,a),n=n.sibling}var Un=null,Ui=!1;function Gr(n,i,a){for(a=a.child;a!==null;)Up(n,i,a),a=a.sibling}function Up(n,i,a){if(se&&typeof se.onCommitFiberUnmount=="function")try{se.onCommitFiberUnmount(Y,a)}catch{}switch(a.tag){case 5:Vn||Qs(a,i);case 6:var c=Un,p=Ui;Un=null,Gr(n,i,a),Un=c,Ui=p,Un!==null&&(Ui?(n=Un,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Un.removeChild(a.stateNode));break;case 18:Un!==null&&(Ui?(n=Un,a=a.stateNode,n.nodeType===8?Vc(n.parentNode,a):n.nodeType===1&&Vc(n,a),cs(n)):Vc(Un,a.stateNode));break;case 4:c=Un,p=Ui,Un=a.stateNode.containerInfo,Ui=!0,Gr(n,i,a),Un=c,Ui=p;break;case 0:case 11:case 14:case 15:if(!Vn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){p=c=c.next;do{var x=p,C=x.destroy;x=x.tag,C!==void 0&&((x&2)!==0||(x&4)!==0)&&Au(a,i,C),p=p.next}while(p!==c)}Gr(n,i,a);break;case 1:if(!Vn&&(Qs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(j){_n(a,i,j)}Gr(n,i,a);break;case 21:Gr(n,i,a);break;case 22:a.mode&1?(Vn=(c=Vn)||a.memoizedState!==null,Gr(n,i,a),Vn=c):Gr(n,i,a);break;default:Gr(n,i,a)}}function Fp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new gv),i.forEach(function(c){var p=Tv.bind(null,n,c);a.has(c)||(a.add(c),c.then(p,p))})}}function Fi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var p=a[c];try{var x=n,C=i,j=C;e:for(;j!==null;){switch(j.tag){case 5:Un=j.stateNode,Ui=!1;break e;case 3:Un=j.stateNode.containerInfo,Ui=!0;break e;case 4:Un=j.stateNode.containerInfo,Ui=!0;break e}j=j.return}if(Un===null)throw Error(t(160));Up(x,C,p),Un=null,Ui=!1;var J=p.alternate;J!==null&&(J.return=null),p.return=null}catch(be){_n(p,i,be)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Op(i,n),i=i.sibling}function Op(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Fi(i,n),Qi(n),c&4){try{qa(3,n,n.return),ll(3,n)}catch(ut){_n(n,n.return,ut)}try{qa(5,n,n.return)}catch(ut){_n(n,n.return,ut)}}break;case 1:Fi(i,n),Qi(n),c&512&&a!==null&&Qs(a,a.return);break;case 5:if(Fi(i,n),Qi(n),c&512&&a!==null&&Qs(a,a.return),n.flags&32){var p=n.stateNode;try{at(p,"")}catch(ut){_n(n,n.return,ut)}}if(c&4&&(p=n.stateNode,p!=null)){var x=n.memoizedProps,C=a!==null?a.memoizedProps:x,j=n.type,J=n.updateQueue;if(n.updateQueue=null,J!==null)try{j==="input"&&x.type==="radio"&&x.name!=null&&wt(p,x),ze(j,C);var be=ze(j,x);for(C=0;C<J.length;C+=2){var Fe=J[C],He=J[C+1];Fe==="style"?ae(p,He):Fe==="dangerouslySetInnerHTML"?Nt(p,He):Fe==="children"?at(p,He):z(p,Fe,He,be)}switch(j){case"input":yt(p,x);break;case"textarea":Z(p,x);break;case"select":var ke=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!x.multiple;var st=x.value;st!=null?ge(p,!!x.multiple,st,!1):ke!==!!x.multiple&&(x.defaultValue!=null?ge(p,!!x.multiple,x.defaultValue,!0):ge(p,!!x.multiple,x.multiple?[]:"",!1))}p[Fa]=x}catch(ut){_n(n,n.return,ut)}}break;case 6:if(Fi(i,n),Qi(n),c&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,x=n.memoizedProps;try{p.nodeValue=x}catch(ut){_n(n,n.return,ut)}}break;case 3:if(Fi(i,n),Qi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{cs(i.containerInfo)}catch(ut){_n(n,n.return,ut)}break;case 4:Fi(i,n),Qi(n);break;case 13:Fi(i,n),Qi(n),p=n.child,p.flags&8192&&(x=p.memoizedState!==null,p.stateNode.isHidden=x,!x||p.alternate!==null&&p.alternate.memoizedState!==null||(Iu=qt())),c&4&&Fp(n);break;case 22:if(Fe=a!==null&&a.memoizedState!==null,n.mode&1?(Vn=(be=Vn)||Fe,Fi(i,n),Vn=be):Fi(i,n),Qi(n),c&8192){if(be=n.memoizedState!==null,(n.stateNode.isHidden=be)&&!Fe&&(n.mode&1)!==0)for(ot=n,Fe=n.child;Fe!==null;){for(He=ot=Fe;ot!==null;){switch(ke=ot,st=ke.child,ke.tag){case 0:case 11:case 14:case 15:qa(4,ke,ke.return);break;case 1:Qs(ke,ke.return);var lt=ke.stateNode;if(typeof lt.componentWillUnmount=="function"){c=ke,a=ke.return;try{i=c,lt.props=i.memoizedProps,lt.state=i.memoizedState,lt.componentWillUnmount()}catch(ut){_n(c,a,ut)}}break;case 5:Qs(ke,ke.return);break;case 22:if(ke.memoizedState!==null){Gp(He);continue}}st!==null?(st.return=ke,ot=st):Gp(He)}Fe=Fe.sibling}e:for(Fe=null,He=n;;){if(He.tag===5){if(Fe===null){Fe=He;try{p=He.stateNode,be?(x=p.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(j=He.stateNode,J=He.memoizedProps.style,C=J!=null&&J.hasOwnProperty("display")?J.display:null,j.style.display=T("display",C))}catch(ut){_n(n,n.return,ut)}}}else if(He.tag===6){if(Fe===null)try{He.stateNode.nodeValue=be?"":He.memoizedProps}catch(ut){_n(n,n.return,ut)}}else if((He.tag!==22&&He.tag!==23||He.memoizedState===null||He===n)&&He.child!==null){He.child.return=He,He=He.child;continue}if(He===n)break e;for(;He.sibling===null;){if(He.return===null||He.return===n)break e;Fe===He&&(Fe=null),He=He.return}Fe===He&&(Fe=null),He.sibling.return=He.return,He=He.sibling}}break;case 19:Fi(i,n),Qi(n),c&4&&Fp(n);break;case 21:break;default:Fi(i,n),Qi(n)}}function Qi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(kp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var p=c.stateNode;c.flags&32&&(at(p,""),c.flags&=-33);var x=zp(n);Pu(n,x,p);break;case 3:case 4:var C=c.stateNode.containerInfo,j=zp(n);Nu(n,j,C);break;default:throw Error(t(161))}}catch(J){_n(n,n.return,J)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function vv(n,i,a){ot=n,Bp(n)}function Bp(n,i,a){for(var c=(n.mode&1)!==0;ot!==null;){var p=ot,x=p.child;if(p.tag===22&&c){var C=p.memoizedState!==null||ol;if(!C){var j=p.alternate,J=j!==null&&j.memoizedState!==null||Vn;j=ol;var be=Vn;if(ol=C,(Vn=J)&&!be)for(ot=p;ot!==null;)C=ot,J=C.child,C.tag===22&&C.memoizedState!==null?jp(p):J!==null?(J.return=C,ot=J):jp(p);for(;x!==null;)ot=x,Bp(x),x=x.sibling;ot=p,ol=j,Vn=be}Hp(n)}else(p.subtreeFlags&8772)!==0&&x!==null?(x.return=p,ot=x):Hp(n)}}function Hp(n){for(;ot!==null;){var i=ot;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Vn||ll(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Vn)if(a===null)c.componentDidMount();else{var p=i.elementType===i.type?a.memoizedProps:zi(i.type,a.memoizedProps);c.componentDidUpdate(p,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var x=i.updateQueue;x!==null&&Gh(i,x,c);break;case 3:var C=i.updateQueue;if(C!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Gh(i,C,a)}break;case 5:var j=i.stateNode;if(a===null&&i.flags&4){a=j;var J=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":J.autoFocus&&a.focus();break;case"img":J.src&&(a.src=J.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var be=i.alternate;if(be!==null){var Fe=be.memoizedState;if(Fe!==null){var He=Fe.dehydrated;He!==null&&cs(He)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Vn||i.flags&512&&Ru(i)}catch(ke){_n(i,i.return,ke)}}if(i===n){ot=null;break}if(a=i.sibling,a!==null){a.return=i.return,ot=a;break}ot=i.return}}function Gp(n){for(;ot!==null;){var i=ot;if(i===n){ot=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ot=a;break}ot=i.return}}function jp(n){for(;ot!==null;){var i=ot;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{ll(4,i)}catch(J){_n(i,a,J)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var p=i.return;try{c.componentDidMount()}catch(J){_n(i,p,J)}}var x=i.return;try{Ru(i)}catch(J){_n(i,x,J)}break;case 5:var C=i.return;try{Ru(i)}catch(J){_n(i,C,J)}}}catch(J){_n(i,i.return,J)}if(i===n){ot=null;break}var j=i.sibling;if(j!==null){j.return=i.return,ot=j;break}ot=i.return}}var _v=Math.ceil,cl=P.ReactCurrentDispatcher,Du=P.ReactCurrentOwner,Ci=P.ReactCurrentBatchConfig,Yt=0,Ln=null,bn=null,Fn=0,pi=0,ea=Ur(0),Cn=0,Ka=null,xs=0,ul=0,Lu=0,Za=null,ii=null,Iu=0,ta=1/0,vr=null,dl=!1,ku=null,jr=null,fl=!1,Vr=null,hl=0,Ja=0,zu=null,pl=-1,ml=0;function Zn(){return(Yt&6)!==0?qt():pl!==-1?pl:pl=qt()}function Wr(n){return(n.mode&1)===0?1:(Yt&2)!==0&&Fn!==0?Fn&-Fn:nv.transition!==null?(ml===0&&(ml=pt()),ml):(n=it,n!==0||(n=window.event,n=n===void 0?16:Wf(n.type)),n)}function Oi(n,i,a,c){if(50<Ja)throw Ja=0,zu=null,Error(t(185));Ut(n,a,c),((Yt&2)===0||n!==Ln)&&(n===Ln&&((Yt&2)===0&&(ul|=a),Cn===4&&$r(n,Fn)),ri(n,c),a===1&&Yt===0&&(i.mode&1)===0&&(ta=qt()+500,jo&&Or()))}function ri(n,i){var a=n.callbackNode;Ye(n,i);var c=Re(n,n===Ln?Fn:0);if(c===0)a!==null&&Qn(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Qn(a),i===1)n.tag===0?tv(Wp.bind(null,n)):Nh(Wp.bind(null,n)),Zx(function(){(Yt&6)===0&&Or()}),a=null;else{switch(qn(c)){case 1:a=li;break;case 4:a=Di;break;case 16:a=yi;break;case 536870912:a=A;break;default:a=yi}a=Qp(a,Vp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Vp(n,i){if(pl=-1,ml=0,(Yt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(na()&&n.callbackNode!==a)return null;var c=Re(n,n===Ln?Fn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=gl(n,c);else{i=c;var p=Yt;Yt|=2;var x=Xp();(Ln!==n||Fn!==i)&&(vr=null,ta=qt()+500,_s(n,i));do try{bv();break}catch(j){$p(n,j)}while(!0);eu(),cl.current=x,Yt=p,bn!==null?i=0:(Ln=null,Fn=0,i=Cn)}if(i!==0){if(i===2&&(p=ht(n),p!==0&&(c=p,i=Uu(n,p))),i===1)throw a=Ka,_s(n,0),$r(n,c),ri(n,qt()),a;if(i===6)$r(n,c);else{if(p=n.current.alternate,(c&30)===0&&!yv(p)&&(i=gl(n,c),i===2&&(x=ht(n),x!==0&&(c=x,i=Uu(n,x))),i===1))throw a=Ka,_s(n,0),$r(n,c),ri(n,qt()),a;switch(n.finishedWork=p,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ys(n,ii,vr);break;case 3:if($r(n,c),(c&130023424)===c&&(i=Iu+500-qt(),10<i)){if(Re(n,0)!==0)break;if(p=n.suspendedLanes,(p&c)!==c){Zn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=jc(ys.bind(null,n,ii,vr),i);break}ys(n,ii,vr);break;case 4:if($r(n,c),(c&4194240)===c)break;for(i=n.eventTimes,p=-1;0<c;){var C=31-oe(c);x=1<<C,C=i[C],C>p&&(p=C),c&=~x}if(c=p,c=qt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*_v(c/1960))-c,10<c){n.timeoutHandle=jc(ys.bind(null,n,ii,vr),c);break}ys(n,ii,vr);break;case 5:ys(n,ii,vr);break;default:throw Error(t(329))}}}return ri(n,qt()),n.callbackNode===a?Vp.bind(null,n):null}function Uu(n,i){var a=Za;return n.current.memoizedState.isDehydrated&&(_s(n,i).flags|=256),n=gl(n,i),n!==2&&(i=ii,ii=a,i!==null&&Fu(i)),n}function Fu(n){ii===null?ii=n:ii.push.apply(ii,n)}function yv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var p=a[c],x=p.getSnapshot;p=p.value;try{if(!Ii(x(),p))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function $r(n,i){for(i&=~Lu,i&=~ul,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-oe(i),c=1<<a;n[a]=-1,i&=~c}}function Wp(n){if((Yt&6)!==0)throw Error(t(327));na();var i=Re(n,0);if((i&1)===0)return ri(n,qt()),null;var a=gl(n,i);if(n.tag!==0&&a===2){var c=ht(n);c!==0&&(i=c,a=Uu(n,c))}if(a===1)throw a=Ka,_s(n,0),$r(n,i),ri(n,qt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ys(n,ii,vr),ri(n,qt()),null}function Ou(n,i){var a=Yt;Yt|=1;try{return n(i)}finally{Yt=a,Yt===0&&(ta=qt()+500,jo&&Or())}}function vs(n){Vr!==null&&Vr.tag===0&&(Yt&6)===0&&na();var i=Yt;Yt|=1;var a=Ci.transition,c=it;try{if(Ci.transition=null,it=1,n)return n()}finally{it=c,Ci.transition=a,Yt=i,(Yt&6)===0&&Or()}}function Bu(){pi=ea.current,un(ea)}function _s(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Kx(a)),bn!==null)for(a=bn.return;a!==null;){var c=a;switch(qc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ho();break;case 3:Zs(),un(ei),un(Hn),lu();break;case 5:au(c);break;case 4:Zs();break;case 13:un(mn);break;case 19:un(mn);break;case 10:tu(c.type._context);break;case 22:case 23:Bu()}a=a.return}if(Ln=n,bn=n=Xr(n.current,null),Fn=pi=i,Cn=0,Ka=null,Lu=ul=xs=0,ii=Za=null,ps!==null){for(i=0;i<ps.length;i++)if(a=ps[i],c=a.interleaved,c!==null){a.interleaved=null;var p=c.next,x=a.pending;if(x!==null){var C=x.next;x.next=p,c.next=C}a.pending=c}ps=null}return n}function $p(n,i){do{var a=bn;try{if(eu(),Qo.current=il,el){for(var c=gn.memoizedState;c!==null;){var p=c.queue;p!==null&&(p.pending=null),c=c.next}el=!1}if(gs=0,Dn=Tn=gn=null,Va=!1,Wa=0,Du.current=null,a===null||a.return===null){Cn=1,Ka=i,bn=null;break}e:{var x=n,C=a.return,j=a,J=i;if(i=Fn,j.flags|=32768,J!==null&&typeof J=="object"&&typeof J.then=="function"){var be=J,Fe=j,He=Fe.tag;if((Fe.mode&1)===0&&(He===0||He===11||He===15)){var ke=Fe.alternate;ke?(Fe.updateQueue=ke.updateQueue,Fe.memoizedState=ke.memoizedState,Fe.lanes=ke.lanes):(Fe.updateQueue=null,Fe.memoizedState=null)}var st=xp(C);if(st!==null){st.flags&=-257,vp(st,C,j,x,i),st.mode&1&&gp(x,be,i),i=st,J=be;var lt=i.updateQueue;if(lt===null){var ut=new Set;ut.add(J),i.updateQueue=ut}else lt.add(J);break e}else{if((i&1)===0){gp(x,be,i),Hu();break e}J=Error(t(426))}}else if(pn&&j.mode&1){var Sn=xp(C);if(Sn!==null){(Sn.flags&65536)===0&&(Sn.flags|=256),vp(Sn,C,j,x,i),Jc(Js(J,j));break e}}x=J=Js(J,j),Cn!==4&&(Cn=2),Za===null?Za=[x]:Za.push(x),x=C;do{switch(x.tag){case 3:x.flags|=65536,i&=-i,x.lanes|=i;var me=pp(x,J,i);Hh(x,me);break e;case 1:j=J;var ne=x.type,ve=x.stateNode;if((x.flags&128)===0&&(typeof ne.getDerivedStateFromError=="function"||ve!==null&&typeof ve.componentDidCatch=="function"&&(jr===null||!jr.has(ve)))){x.flags|=65536,i&=-i,x.lanes|=i;var $e=mp(x,j,i);Hh(x,$e);break e}}x=x.return}while(x!==null)}qp(a)}catch(ft){i=ft,bn===a&&a!==null&&(bn=a=a.return);continue}break}while(!0)}function Xp(){var n=cl.current;return cl.current=il,n===null?il:n}function Hu(){(Cn===0||Cn===3||Cn===2)&&(Cn=4),Ln===null||(xs&268435455)===0&&(ul&268435455)===0||$r(Ln,Fn)}function gl(n,i){var a=Yt;Yt|=2;var c=Xp();(Ln!==n||Fn!==i)&&(vr=null,_s(n,i));do try{Sv();break}catch(p){$p(n,p)}while(!0);if(eu(),Yt=a,cl.current=c,bn!==null)throw Error(t(261));return Ln=null,Fn=0,Cn}function Sv(){for(;bn!==null;)Yp(bn)}function bv(){for(;bn!==null&&!Pn();)Yp(bn)}function Yp(n){var i=Jp(n.alternate,n,pi);n.memoizedProps=n.pendingProps,i===null?qp(n):bn=i,Du.current=null}function qp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=pv(a,i,pi),a!==null){bn=a;return}}else{if(a=mv(a,i),a!==null){a.flags&=32767,bn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Cn=6,bn=null;return}}if(i=i.sibling,i!==null){bn=i;return}bn=i=n}while(i!==null);Cn===0&&(Cn=5)}function ys(n,i,a){var c=it,p=Ci.transition;try{Ci.transition=null,it=1,wv(n,i,a,c)}finally{Ci.transition=p,it=c}return null}function wv(n,i,a,c){do na();while(Vr!==null);if((Yt&6)!==0)throw Error(t(327));a=n.finishedWork;var p=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var x=a.lanes|a.childLanes;if(tt(n,x),n===Ln&&(bn=Ln=null,Fn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||fl||(fl=!0,Qp(yi,function(){return na(),null})),x=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||x){x=Ci.transition,Ci.transition=null;var C=it;it=1;var j=Yt;Yt|=4,Du.current=null,xv(n,a),Op(a,n),jx(Hc),ks=!!Bc,Hc=Bc=null,n.current=a,vv(a),_i(),Yt=j,it=C,Ci.transition=x}else n.current=a;if(fl&&(fl=!1,Vr=n,hl=p),x=n.pendingLanes,x===0&&(jr=null),de(a.stateNode),ri(n,qt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)p=i[a],c(p.value,{componentStack:p.stack,digest:p.digest});if(dl)throw dl=!1,n=ku,ku=null,n;return(hl&1)!==0&&n.tag!==0&&na(),x=n.pendingLanes,(x&1)!==0?n===zu?Ja++:(Ja=0,zu=n):Ja=0,Or(),null}function na(){if(Vr!==null){var n=qn(hl),i=Ci.transition,a=it;try{if(Ci.transition=null,it=16>n?16:n,Vr===null)var c=!1;else{if(n=Vr,Vr=null,hl=0,(Yt&6)!==0)throw Error(t(331));var p=Yt;for(Yt|=4,ot=n.current;ot!==null;){var x=ot,C=x.child;if((ot.flags&16)!==0){var j=x.deletions;if(j!==null){for(var J=0;J<j.length;J++){var be=j[J];for(ot=be;ot!==null;){var Fe=ot;switch(Fe.tag){case 0:case 11:case 15:qa(8,Fe,x)}var He=Fe.child;if(He!==null)He.return=Fe,ot=He;else for(;ot!==null;){Fe=ot;var ke=Fe.sibling,st=Fe.return;if(Ip(Fe),Fe===be){ot=null;break}if(ke!==null){ke.return=st,ot=ke;break}ot=st}}}var lt=x.alternate;if(lt!==null){var ut=lt.child;if(ut!==null){lt.child=null;do{var Sn=ut.sibling;ut.sibling=null,ut=Sn}while(ut!==null)}}ot=x}}if((x.subtreeFlags&2064)!==0&&C!==null)C.return=x,ot=C;else e:for(;ot!==null;){if(x=ot,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:qa(9,x,x.return)}var me=x.sibling;if(me!==null){me.return=x.return,ot=me;break e}ot=x.return}}var ne=n.current;for(ot=ne;ot!==null;){C=ot;var ve=C.child;if((C.subtreeFlags&2064)!==0&&ve!==null)ve.return=C,ot=ve;else e:for(C=ne;ot!==null;){if(j=ot,(j.flags&2048)!==0)try{switch(j.tag){case 0:case 11:case 15:ll(9,j)}}catch(ft){_n(j,j.return,ft)}if(j===C){ot=null;break e}var $e=j.sibling;if($e!==null){$e.return=j.return,ot=$e;break e}ot=j.return}}if(Yt=p,Or(),se&&typeof se.onPostCommitFiberRoot=="function")try{se.onPostCommitFiberRoot(Y,n)}catch{}c=!0}return c}finally{it=a,Ci.transition=i}}return!1}function Kp(n,i,a){i=Js(a,i),i=pp(n,i,1),n=Hr(n,i,1),i=Zn(),n!==null&&(Ut(n,1,i),ri(n,i))}function _n(n,i,a){if(n.tag===3)Kp(n,n,a);else for(;i!==null;){if(i.tag===3){Kp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(jr===null||!jr.has(c))){n=Js(a,n),n=mp(i,n,1),i=Hr(i,n,1),n=Zn(),i!==null&&(Ut(i,1,n),ri(i,n));break}}i=i.return}}function Mv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Zn(),n.pingedLanes|=n.suspendedLanes&a,Ln===n&&(Fn&a)===a&&(Cn===4||Cn===3&&(Fn&130023424)===Fn&&500>qt()-Iu?_s(n,0):Lu|=a),ri(n,i)}function Zp(n,i){i===0&&((n.mode&1)===0?i=1:(i=nt,nt<<=1,(nt&130023424)===0&&(nt=4194304)));var a=Zn();n=mr(n,i),n!==null&&(Ut(n,i,a),ri(n,a))}function Ev(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Zp(n,a)}function Tv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,p=n.memoizedState;p!==null&&(a=p.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Zp(n,a)}var Jp;Jp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||ei.current)ni=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return ni=!1,hv(n,i,a);ni=(n.flags&131072)!==0}else ni=!1,pn&&(i.flags&1048576)!==0&&Ph(i,Wo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;al(n,i),n=i.pendingProps;var p=Vs(i,Hn.current);Ks(i,a),p=du(null,i,c,n,p,a);var x=fu();return i.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ti(c)?(x=!0,Go(i)):x=!1,i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,ru(i),p.updater=rl,i.stateNode=p,p._reactInternals=i,vu(i,c,n,a),i=bu(null,i,c,!0,x,a)):(i.tag=0,pn&&x&&Yc(i),Kn(null,i,p,a),i=i.child),i;case 16:c=i.elementType;e:{switch(al(n,i),n=i.pendingProps,p=c._init,c=p(c._payload),i.type=c,p=i.tag=Av(c),n=zi(c,n),p){case 0:i=Su(null,i,c,n,a);break e;case 1:i=Mp(null,i,c,n,a);break e;case 11:i=_p(null,i,c,n,a);break e;case 14:i=yp(null,i,c,zi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,p=i.pendingProps,p=i.elementType===c?p:zi(c,p),Su(n,i,c,p,a);case 1:return c=i.type,p=i.pendingProps,p=i.elementType===c?p:zi(c,p),Mp(n,i,c,p,a);case 3:e:{if(Ep(i),n===null)throw Error(t(387));c=i.pendingProps,x=i.memoizedState,p=x.element,Bh(n,i),Zo(i,c,null,a);var C=i.memoizedState;if(c=C.element,x.isDehydrated)if(x={element:c,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},i.updateQueue.baseState=x,i.memoizedState=x,i.flags&256){p=Js(Error(t(423)),i),i=Tp(n,i,c,a,p);break e}else if(c!==p){p=Js(Error(t(424)),i),i=Tp(n,i,c,a,p);break e}else for(hi=zr(i.stateNode.containerInfo.firstChild),fi=i,pn=!0,ki=null,a=Fh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Xs(),c===p){i=xr(n,i,a);break e}Kn(n,i,c,a)}i=i.child}return i;case 5:return jh(i),n===null&&Zc(i),c=i.type,p=i.pendingProps,x=n!==null?n.memoizedProps:null,C=p.children,Gc(c,p)?C=null:x!==null&&Gc(c,x)&&(i.flags|=32),wp(n,i),Kn(n,i,C,a),i.child;case 6:return n===null&&Zc(i),null;case 13:return Cp(n,i,a);case 4:return su(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ys(i,null,c,a):Kn(n,i,c,a),i.child;case 11:return c=i.type,p=i.pendingProps,p=i.elementType===c?p:zi(c,p),_p(n,i,c,p,a);case 7:return Kn(n,i,i.pendingProps,a),i.child;case 8:return Kn(n,i,i.pendingProps.children,a),i.child;case 12:return Kn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,p=i.pendingProps,x=i.memoizedProps,C=p.value,on(Yo,c._currentValue),c._currentValue=C,x!==null)if(Ii(x.value,C)){if(x.children===p.children&&!ei.current){i=xr(n,i,a);break e}}else for(x=i.child,x!==null&&(x.return=i);x!==null;){var j=x.dependencies;if(j!==null){C=x.child;for(var J=j.firstContext;J!==null;){if(J.context===c){if(x.tag===1){J=gr(-1,a&-a),J.tag=2;var be=x.updateQueue;if(be!==null){be=be.shared;var Fe=be.pending;Fe===null?J.next=J:(J.next=Fe.next,Fe.next=J),be.pending=J}}x.lanes|=a,J=x.alternate,J!==null&&(J.lanes|=a),nu(x.return,a,i),j.lanes|=a;break}J=J.next}}else if(x.tag===10)C=x.type===i.type?null:x.child;else if(x.tag===18){if(C=x.return,C===null)throw Error(t(341));C.lanes|=a,j=C.alternate,j!==null&&(j.lanes|=a),nu(C,a,i),C=x.sibling}else C=x.child;if(C!==null)C.return=x;else for(C=x;C!==null;){if(C===i){C=null;break}if(x=C.sibling,x!==null){x.return=C.return,C=x;break}C=C.return}x=C}Kn(n,i,p.children,a),i=i.child}return i;case 9:return p=i.type,c=i.pendingProps.children,Ks(i,a),p=Ei(p),c=c(p),i.flags|=1,Kn(n,i,c,a),i.child;case 14:return c=i.type,p=zi(c,i.pendingProps),p=zi(c.type,p),yp(n,i,c,p,a);case 15:return Sp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,p=i.pendingProps,p=i.elementType===c?p:zi(c,p),al(n,i),i.tag=1,ti(c)?(n=!0,Go(i)):n=!1,Ks(i,a),fp(i,c,p),vu(i,c,p,a),bu(null,i,c,!0,n,a);case 19:return Rp(n,i,a);case 22:return bp(n,i,a)}throw Error(t(156,i.tag))};function Qp(n,i){return rn(n,i)}function Cv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ai(n,i,a,c){return new Cv(n,i,a,c)}function Gu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Av(n){if(typeof n=="function")return Gu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===H)return 11;if(n===ee)return 14}return 2}function Xr(n,i){var a=n.alternate;return a===null?(a=Ai(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function xl(n,i,a,c,p,x){var C=2;if(c=n,typeof n=="function")Gu(n)&&(C=1);else if(typeof n=="string")C=5;else e:switch(n){case E:return Ss(a.children,p,x,i);case D:C=8,p|=8;break;case K:return n=Ai(12,a,i,p|2),n.elementType=K,n.lanes=x,n;case $:return n=Ai(13,a,i,p),n.elementType=$,n.lanes=x,n;case B:return n=Ai(19,a,i,p),n.elementType=B,n.lanes=x,n;case X:return vl(a,p,x,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case G:C=10;break e;case V:C=9;break e;case H:C=11;break e;case ee:C=14;break e;case he:C=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Ai(C,a,i,p),i.elementType=n,i.type=c,i.lanes=x,i}function Ss(n,i,a,c){return n=Ai(7,n,c,i),n.lanes=a,n}function vl(n,i,a,c){return n=Ai(22,n,c,i),n.elementType=X,n.lanes=a,n.stateNode={isHidden:!1},n}function ju(n,i,a){return n=Ai(6,n,null,i),n.lanes=a,n}function Vu(n,i,a){return i=Ai(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Rv(n,i,a,c,p){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tt(0),this.expirationTimes=Tt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tt(0),this.identifierPrefix=c,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Wu(n,i,a,c,p,x,C,j,J){return n=new Rv(n,i,a,j,J),i===1?(i=1,x===!0&&(i|=8)):i=0,x=Ai(3,null,null,i),n.current=x,x.stateNode=n,x.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ru(x),n}function Nv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function e0(n){if(!n)return Fr;n=n._reactInternals;e:{if(tn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ti(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(ti(a))return Ah(n,a,i)}return i}function t0(n,i,a,c,p,x,C,j,J){return n=Wu(a,c,!0,n,p,x,C,j,J),n.context=e0(null),a=n.current,c=Zn(),p=Wr(a),x=gr(c,p),x.callback=i??null,Hr(a,x,p),n.current.lanes=p,Ut(n,p,c),ri(n,c),n}function _l(n,i,a,c){var p=i.current,x=Zn(),C=Wr(p);return a=e0(a),i.context===null?i.context=a:i.pendingContext=a,i=gr(x,C),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Hr(p,i,C),n!==null&&(Oi(n,p,C,x),Ko(n,p,C)),C}function yl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function n0(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function $u(n,i){n0(n,i),(n=n.alternate)&&n0(n,i)}function Pv(){return null}var i0=typeof reportError=="function"?reportError:function(n){console.error(n)};function Xu(n){this._internalRoot=n}Sl.prototype.render=Xu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));_l(n,i,null,null)},Sl.prototype.unmount=Xu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;vs(function(){_l(null,n,null,null)}),i[dr]=null}};function Sl(n){this._internalRoot=n}Sl.prototype.unstable_scheduleHydration=function(n){if(n){var i=ci();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Li.length&&i!==0&&i<Li[a].priority;a++);Li.splice(a,0,n),a===0&&To(n)}};function Yu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function bl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function r0(){}function Dv(n,i,a,c,p){if(p){if(typeof c=="function"){var x=c;c=function(){var be=yl(C);x.call(be)}}var C=t0(i,c,n,0,null,!1,!1,"",r0);return n._reactRootContainer=C,n[dr]=C.current,za(n.nodeType===8?n.parentNode:n),vs(),C}for(;p=n.lastChild;)n.removeChild(p);if(typeof c=="function"){var j=c;c=function(){var be=yl(J);j.call(be)}}var J=Wu(n,0,!1,null,null,!1,!1,"",r0);return n._reactRootContainer=J,n[dr]=J.current,za(n.nodeType===8?n.parentNode:n),vs(function(){_l(i,J,a,c)}),J}function wl(n,i,a,c,p){var x=a._reactRootContainer;if(x){var C=x;if(typeof p=="function"){var j=p;p=function(){var J=yl(C);j.call(J)}}_l(i,C,n,p)}else C=Dv(a,i,n,p,c);return yl(C)}yn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=q(i.pendingLanes);a!==0&&(Kt(i,a|1),ri(i,qt()),(Yt&6)===0&&(ta=qt()+500,Or()))}break;case 13:vs(function(){var c=mr(n,1);if(c!==null){var p=Zn();Oi(c,n,1,p)}}),$u(n,1)}},Si=function(n){if(n.tag===13){var i=mr(n,134217728);if(i!==null){var a=Zn();Oi(i,n,134217728,a)}$u(n,134217728)}},bi=function(n){if(n.tag===13){var i=Wr(n),a=mr(n,i);if(a!==null){var c=Zn();Oi(a,n,i,c)}$u(n,i)}},ci=function(){return it},Ft=function(n,i){var a=it;try{return it=n,i()}finally{it=a}},Me=function(n,i,a){switch(i){case"input":if(yt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var p=Bo(c);if(!p)throw Error(t(90));De(c),yt(c,p)}}}break;case"textarea":Z(n,a);break;case"select":i=a.value,i!=null&&ge(n,!!a.multiple,i,!1)}},_e=Ou,Te=vs;var Lv={usingClientEntryPoint:!1,Events:[Oa,Gs,Bo,Se,Ae,Ou]},Qa={findFiberByHostInstance:us,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Iv={bundleType:Qa.bundleType,version:Qa.version,rendererPackageName:Qa.rendererPackageName,rendererConfig:Qa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=zt(n),n===null?null:n.stateNode},findFiberByHostInstance:Qa.findFiberByHostInstance||Pv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ml.isDisabled&&Ml.supportsFiber)try{Y=Ml.inject(Iv),se=Ml}catch{}}return si.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lv,si.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yu(i))throw Error(t(200));return Nv(n,i,null,a)},si.createRoot=function(n,i){if(!Yu(n))throw Error(t(299));var a=!1,c="",p=i0;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(p=i.onRecoverableError)),i=Wu(n,1,!1,null,null,a,!1,c,p),n[dr]=i.current,za(n.nodeType===8?n.parentNode:n),new Xu(i)},si.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=zt(i),n=n===null?null:n.stateNode,n},si.flushSync=function(n){return vs(n)},si.hydrate=function(n,i,a){if(!bl(i))throw Error(t(200));return wl(null,n,i,!0,a)},si.hydrateRoot=function(n,i,a){if(!Yu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,p=!1,x="",C=i0;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(x=a.identifierPrefix),a.onRecoverableError!==void 0&&(C=a.onRecoverableError)),i=t0(i,null,n,1,a??null,p,!1,x,C),n[dr]=i.current,za(n),c)for(n=0;n<c.length;n++)a=c[n],p=a._getVersion,p=p(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,p]:i.mutableSourceEagerHydrationData.push(a,p);return new Sl(i)},si.render=function(n,i,a){if(!bl(i))throw Error(t(200));return wl(null,n,i,!1,a)},si.unmountComponentAtNode=function(n){if(!bl(n))throw Error(t(40));return n._reactRootContainer?(vs(function(){wl(null,null,n,!1,function(){n._reactRootContainer=null,n[dr]=null})}),!0):!1},si.unstable_batchedUpdates=Ou,si.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!bl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return wl(n,i,a,!1,c)},si.version="18.3.1-next-f1338f8080-20240426",si}var f0;function Wv(){if(f0)return Zu.exports;f0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Zu.exports=Vv(),Zu.exports}var h0;function $v(){if(h0)return El;h0=1;var s=Wv();return El.createRoot=s.createRoot,El.hydrateRoot=s.hydrateRoot,El}var Xv=$v();const Yv=pm(Xv),xa=[{id:"brown-noise",title:"Brownian Deep Focus",category:"Deep Focus",tagline:"Warm sub-bass rumble for continuous coding & writing",description:"Mathematically integrated brownian spectrum with deep 450Hz low-pass rolloff. Proven to mask background distractions and alleviate cognitive fatigue.",frequency:"0 – 450 Hz Brown Spectrum",accentColor:"#f59e0b"},{id:"celestial-drone",title:"Celestial 432Hz Drone",category:"Mindfulness",tagline:"Harmonically tuned meditative Tibetan chords",description:"Multi-oscillator harmonic chord centered around the natural 432Hz tuning fork with gentle phase chorus and slow breathing resonance.",frequency:"432 Hz Pythagorean Fundamental",accentColor:"#a855f7"},{id:"binaural-gamma",title:"Gamma 40Hz Flow State",category:"Cognitive Flow",tagline:"High-cognition binaural carrier for intense problem-solving",description:"Stereo carrier tones (200Hz L / 240Hz R) inducing 40Hz gamma oscillations in the cerebral cortex, associated with high-level information processing and recall.",frequency:"40 Hz Gamma Difference Wave",accentColor:"#38bdf8"},{id:"binaural-alpha",title:"Alpha 10Hz Quiet Mind",category:"Mindfulness",tagline:"Calm relaxed alertness for reading and reflection",description:"Stereo carrier tones (210Hz L / 220Hz R) stimulating 10Hz alpha rhythms, optimal for sustained reading, journaling, and stress reduction.",frequency:"10 Hz Alpha Difference Wave",accentColor:"#34d399"},{id:"rain-storm",title:"Midnight Rain Sanctuary",category:"Deep Focus",tagline:"Gentle nocturnal rainfall with rolling thunder",description:"Procedurally shaped pink noise with gentle resonant filtering, simulating a peaceful rain shower against cabin windows in deep space.",frequency:"Pink Noise Spectrum & Low Rumble",accentColor:"#818cf8"}];class qv{constructor(){_r(this,"ctx",null);_r(this,"masterGain",null);_r(this,"analyser",null);_r(this,"activeNodes",[]);_r(this,"currentId",null);_r(this,"_isPlaying",!1);_r(this,"_volume",.65);_r(this,"_isMuted",!1)}initContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this._isMuted?0:this._volume,this.ctx.currentTime),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=64,this.analyser.smoothingTimeConstant=.85,this.masterGain.connect(this.analyser),this.analyser.connect(this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume()}get isPlaying(){return this._isPlaying}get currentSoundscape(){return this.currentId}get volume(){return this._volume}get isMuted(){return this._isMuted}getAnalyser(){return this.analyser}setVolume(e){if(this._volume=Math.max(0,Math.min(1,e)),this.masterGain&&this.ctx){const t=this._isMuted?0:this._volume;this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime),this.masterGain.gain.linearRampToValueAtTime(t,this.ctx.currentTime+.05)}}toggleMute(){return this._isMuted=!this._isMuted,this.setVolume(this._volume),this._isMuted}stop(){!this.ctx||!this._isPlaying||(this.masterGain&&(this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime),this.masterGain.gain.linearRampToValueAtTime(.001,this.ctx.currentTime+.12)),setTimeout(()=>{this.cleanupNodes(),this._isPlaying=!1,this.currentId=null},130))}cleanupNodes(){for(const e of this.activeNodes)try{"stop"in e&&typeof e.stop=="function"&&e.stop(),e.disconnect()}catch{}this.activeNodes=[]}play(e){if(this.initContext(),!(!this.ctx||!this.masterGain)&&!(this._isPlaying&&this.currentId===e))switch(this.cleanupNodes(),this.currentId=e,this._isPlaying=!0,this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime),this.masterGain.gain.setValueAtTime(.001,this.ctx.currentTime),this.masterGain.gain.linearRampToValueAtTime(this._isMuted?0:this._volume,this.ctx.currentTime+.4),e){case"brown-noise":this.buildBrownNoise();break;case"celestial-drone":this.buildCelestialDrone();break;case"binaural-gamma":this.buildBinauralBeat(200,40);break;case"binaural-alpha":this.buildBinauralBeat(210,10);break;case"rain-storm":this.buildRainStorm();break}}buildBrownNoise(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.sampleRate*5,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),r=t.getChannelData(0);let o=0;for(let g=0;g<e;g++){const m=Math.random()*2-1;o=(o+.02*m)/1.02,r[g]=o*3.2}const l=2048;for(let g=0;g<l;g++){const m=g/l;r[g]=r[g]*m+r[e-l+g]*(1-m)}const d=this.ctx.createBufferSource();d.buffer=t,d.loop=!0;const f=this.ctx.createBiquadFilter();f.type="lowpass",f.frequency.setValueAtTime(450,this.ctx.currentTime),f.Q.setValueAtTime(.7,this.ctx.currentTime),d.connect(f),f.connect(this.masterGain),d.start(),this.activeNodes.push(d,f)}buildCelestialDrone(){if(!this.ctx||!this.masterGain)return;const e=216,t=[e,e*1.5,e*2,e*2.5],r=[-4,3,-2,5];t.forEach((o,l)=>{if(!this.ctx||!this.masterGain)return;const d=this.ctx.createOscillator();d.type=l%2===0?"sine":"triangle",d.frequency.setValueAtTime(o,this.ctx.currentTime),d.detune.setValueAtTime(r[l],this.ctx.currentTime);const f=this.ctx.createGain();f.gain.setValueAtTime(.18/(l+1),this.ctx.currentTime);const g=this.ctx.createOscillator();g.frequency.setValueAtTime(.08+l*.03,this.ctx.currentTime);const m=this.ctx.createGain();m.gain.setValueAtTime(.04,this.ctx.currentTime),g.connect(m),m.connect(f.gain),d.connect(f),f.connect(this.masterGain),d.start(),g.start(),this.activeNodes.push(d,g,f,m)})}buildBinauralBeat(e,t){if(!this.ctx||!this.masterGain)return;const r=this.ctx.createOscillator();r.type="sine",r.frequency.setValueAtTime(e,this.ctx.currentTime);const o=this.ctx.createGain();o.gain.setValueAtTime(.22,this.ctx.currentTime);const l=this.ctx.createOscillator();l.type="sine",l.frequency.setValueAtTime(e+t,this.ctx.currentTime);const d=this.ctx.createGain();d.gain.setValueAtTime(.22,this.ctx.currentTime);const f=this.ctx.createChannelMerger(2);r.connect(o),o.connect(f,0,0),l.connect(d),d.connect(f,0,1);const g=this.ctx.createOscillator();g.type="triangle",g.frequency.setValueAtTime(e/2,this.ctx.currentTime);const m=this.ctx.createGain();m.gain.setValueAtTime(.08,this.ctx.currentTime),g.connect(m),m.connect(this.masterGain),f.connect(this.masterGain),r.start(),l.start(),g.start(),this.activeNodes.push(r,l,g,o,d,m,f)}buildRainStorm(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.sampleRate*4,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),r=t.getChannelData(0);let o=0,l=0,d=0,f=0,g=0,m=0,y=0;for(let b=0;b<e;b++){const w=Math.random()*2-1;o=.99886*o+w*.0555179,l=.99332*l+w*.0750759,d=.969*d+w*.153852,f=.8665*f+w*.3104856,g=.55*g+w*.5329522,m=-.7616*m-w*.016898,r[b]=(o+l+d+f+g+m+y+w*.5362)*.12,y=w*.115926}const _=this.ctx.createBufferSource();_.buffer=t,_.loop=!0;const h=this.ctx.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(1200,this.ctx.currentTime),_.connect(h),h.connect(this.masterGain),_.start(),this.activeNodes.push(_,h)}playFocusChime(){try{if(this.initContext(),!this.ctx)return;const e=this.ctx.currentTime,t=[528,1056,1584],r=[.28,.09,.03],o=this.ctx.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.45,e+.04),o.gain.exponentialRampToValueAtTime(1e-4,e+3.4),o.connect(this.ctx.destination),t.forEach((l,d)=>{if(!this.ctx)return;const f=this.ctx.createOscillator(),g=this.ctx.createGain();f.type="sine",f.frequency.setValueAtTime(l,e),g.gain.setValueAtTime(r[d],e),f.connect(g),g.connect(o),f.start(e),f.stop(e+3.5)})}catch(e){console.warn("Focus chime could not play:",e)}}playBreakChime(){try{if(this.initContext(),!this.ctx)return;const e=this.ctx.currentTime;[{freq:523.25,start:0,dur:1.8,vol:.22},{freq:659.25,start:.22,dur:1.8,vol:.2},{freq:783.99,start:.44,dur:2.2,vol:.25},{freq:1046.5,start:.66,dur:2.8,vol:.18}].forEach(({freq:r,start:o,dur:l,vol:d})=>{if(!this.ctx)return;const f=e+o,g=this.ctx.createOscillator(),m=this.ctx.createGain();g.type="sine",g.frequency.setValueAtTime(r,f),m.gain.setValueAtTime(0,f),m.gain.linearRampToValueAtTime(d,f+.04),m.gain.exponentialRampToValueAtTime(1e-4,f+l),g.connect(m),m.connect(this.ctx.destination),g.start(f),g.stop(f+l+.1)})}catch(e){console.warn("Break chime could not play:",e)}}}const Er=new qv;class Kv{startKeepAlive(){}stopKeepAlive(){}updateMetadata(e){if(!(typeof window>"u"||!("mediaSession"in navigator)))try{const t=e.artworkUrl?[{src:e.artworkUrl,sizes:"96x96",type:"image/jpeg"},{src:e.artworkUrl,sizes:"128x128",type:"image/jpeg"},{src:e.artworkUrl,sizes:"192x192",type:"image/jpeg"},{src:e.artworkUrl,sizes:"256x256",type:"image/jpeg"},{src:e.artworkUrl,sizes:"512x512",type:"image/jpeg"}]:[];navigator.mediaSession.metadata=new MediaMetadata({title:e.title||"FOR ME Sanctuary",artist:e.artist||"Private Life Ledger",album:e.album||"Sanctuary Audio",artwork:t}),navigator.mediaSession.playbackState="playing",navigator.mediaSession.setActionHandler("play",()=>{e.onPlay(),navigator.mediaSession.playbackState="playing"}),navigator.mediaSession.setActionHandler("pause",()=>{e.onPause(),navigator.mediaSession.playbackState="paused"}),e.onNext?navigator.mediaSession.setActionHandler("nexttrack",e.onNext):navigator.mediaSession.setActionHandler("nexttrack",null),e.onPrev?navigator.mediaSession.setActionHandler("previoustrack",e.onPrev):navigator.mediaSession.setActionHandler("previoustrack",null)}catch(t){console.warn("[MediaSession] Metadata update error:",t)}}setPlaybackState(e){if(!(typeof window>"u"||!("mediaSession"in navigator)))try{navigator.mediaSession.playbackState=e}catch{}}}const Vi=new Kv;function Zv(s){if(!s||typeof s!="string")return null;const e=s.trim();let t,r;const o=e.match(/[?&]list=([a-zA-Z0-9_-]+)/);o&&o[1]&&(r=o[1]);const l=e.match(/[?&]v=([a-zA-Z0-9_-]{11})/);if(l&&l[1]&&(t=l[1]),!t){const f=e.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);f&&f[1]&&(t=f[1])}if(!t){const f=e.match(/youtube\.com\/(?:live|embed|v|shorts)\/([a-zA-Z0-9_-]{11})/);f&&f[1]&&(t=f[1])}if(!t&&!r&&/^[a-zA-Z0-9_-]{11}$/.test(e)&&(t=e),!t&&!r&&/^(?:PL|RD|UU|FL|OLAK5uy_)[a-zA-Z0-9_-]+$/.test(e)&&(r=e),!t&&!r)return null;let d="video";return r&&t?d="video_in_playlist":r&&(d="playlist"),{type:d,videoId:t,playlistId:r,cleanUrl:e}}function Jv(s){return s?`https://img.youtube.com/vi/${s}/hqdefault.jpg`:"https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=600&auto=format&fit=crop"}const rc=[{id:"lofi-girl-main",title:"Lofi Girl — Beats to Relax / Study to",type:"video",videoId:"jfKfPfyJRdk",url:"https://www.youtube.com/watch?v=jfKfPfyJRdk",channel:"Lofi Girl",thumbnailUrl:"https://img.youtube.com/vi/jfKfPfyJRdk/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"synthwave-chilledcow",title:"Synthwave Radio — Chill Beats to Code & Chill",type:"video",videoId:"4xDzrJKXOOY",url:"https://www.youtube.com/watch?v=4xDzrJKXOOY",channel:"Lofi Girl / Synthwave Boy",thumbnailUrl:"https://img.youtube.com/vi/4xDzrJKXOOY/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"deep-focus-ambient",title:"Deep Focus Ambient — Flow State Alpha Waves",type:"video",videoId:"lTRiuFIWV54",url:"https://www.youtube.com/watch?v=lTRiuFIWV54",channel:"Greenred Productions",thumbnailUrl:"https://img.youtube.com/vi/lTRiuFIWV54/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"peaceful-piano-solitude",title:"Peaceful Piano & Soft Rain — Gentle Solitude",type:"video",videoId:"1WUEk0R79_Q",url:"https://www.youtube.com/watch?v=1WUEk0R79_Q",channel:"Quiet Quest",thumbnailUrl:"https://img.youtube.com/vi/1WUEk0R79_Q/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"classical-focus-mozart",title:"Classical Focus — Mozart, Beethoven, Bach",type:"video",videoId:"WPni755-Krg",url:"https://www.youtube.com/watch?v=WPni755-Krg",channel:"HALIDONMUSIC",thumbnailUrl:"https://img.youtube.com/vi/WPni755-Krg/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"cozy-coffee-shop-lofi",title:"Cozy Coffee Shop Lofi — Rainy Night Ambience",type:"video",videoId:"-5KAN9_CzSA",url:"https://www.youtube.com/watch?v=-5KAN9_CzSA",channel:"Calmed by Nature",thumbnailUrl:"https://img.youtube.com/vi/-5KAN9_CzSA/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()}],mm=fe.createContext(void 0),ia={palette:"cosmic-royal",speed:"balanced",amplitude:"majestic",waveGeometry:"dunes",waveLayerDensity:"deep",horizonHeight:"balanced",waveStrokeOpacity:.5,interactiveParallax:!0,celestialBody:"crescent-moon",celestialPosition:"default",celestialScaleMultiplier:1,rotationSpeed:"standard",showNebulaDust:!0,nebulaIntensity:"vivid",showConstellations:!0,showComet:!0,shootingStarMode:"occasional",showStars:!0,starDensity:"balanced",showCrossStars:!1,showOrbitalTrack:!1,showMeridian:!1,clockFontStyle:"tabular",clockSize:"standard",clockPosition:"center",clockDivider:"colon",clockColor:"palette",clockFormat:"12h",showSeconds:!0,showDate:!0,showGreeting:!0,clockHalo:"pulsar",ecoSleepMinutes:7.5},to={name:"Azan",motto:"Remember, you are here for you.",defaultFocusTopic:"Engineering",defaultFocusMode:"Deep Work"},p0=[{id:"subj_eng",name:"Engineering",color:"#8b5cf6"},{id:"subj_math",name:"Mathematics",color:"#06b6d4"},{id:"subj_code",name:"Coding",color:"#10b981"},{id:"subj_read",name:"Reading",color:"#f59e0b"},{id:"subj_deep",name:"Deep Work",color:"#f43f5e"}],ed={focusDurationMinutes:25,breakDurationMinutes:5,displayMode:"telemetry",autoStartBreaks:!0,soundEnabled:!0},es=(s,e)=>{var d;if(!s)return e;const t=s.trim().match(/(\d+)(?::(\d+))?\s*(am|pm)?/i);if(!t)return e;let r=parseInt(t[1],10);const o=t[2]?parseInt(t[2],10):0,l=(d=t[3])==null?void 0:d.toLowerCase();return l==="pm"&&r<12&&(r+=12),l==="am"&&r===12&&(r=0),Math.min(24,Math.max(0,r+o/60))},Tl=[{id:"r1",title:"Morning Protocol",timeRange:"06:00 – 09:00",startHour:6,endHour:9,description:"Hydration, natural sunlight, 30-min movement, deep work session.",iconType:"morning",colorTag:"#f59e0b"},{id:"r2",title:"Core Deep Work",timeRange:"09:00 – 17:00",startHour:9,endHour:17,description:"High-leverage engineering problem solving, core building goals, focused sprints.",iconType:"afternoon",colorTag:"#8b5cf6"},{id:"r3",title:"Evening Wind-Down",timeRange:"17:00 – 22:30",startHour:17,endHour:22.5,description:"Reflection, physical cooldown, reading, digital sunset and deep recovery.",iconType:"evening",colorTag:"#3b82f6"}],Qv=({children:s})=>{const[e,t]=fe.useState(()=>{try{const q=localStorage.getItem("for_me_profile");if(q){const Re=JSON.parse(q);return Re.name==="Viren"?{...to,name:"Azan"}:{...to,...Re}}return to}catch{return to}}),r=q=>{t(Re=>{const pe={...Re,...q};return localStorage.setItem("for_me_profile",JSON.stringify(pe)),pe})};fe.useEffect(()=>{localStorage.setItem("for_me_profile",JSON.stringify(e))},[e]);const[o,l]=fe.useState(()=>{try{return localStorage.getItem("for_me_app_theme")==="light"?"light":"dark"}catch{return"dark"}}),d=()=>{l(q=>q==="light"?"dark":"light")};fe.useEffect(()=>{localStorage.setItem("for_me_app_theme",o),o==="light"?(document.documentElement.classList.add("theme-light"),document.documentElement.classList.remove("theme-dark")):(document.documentElement.classList.add("theme-dark"),document.documentElement.classList.remove("theme-light"))},[o]);const[f,g]=fe.useState(()=>{try{const q=localStorage.getItem("for_me_is_hud_hidden");return q?JSON.parse(q):!1}catch{return!1}}),m=()=>g(q=>!q);fe.useEffect(()=>{localStorage.setItem("for_me_is_hud_hidden",JSON.stringify(f))},[f]);const[y,_]=fe.useState(()=>{try{return localStorage.getItem("for_me_wallpaper_theme")||"cosmic-cliffs"}catch{return"cosmic-cliffs"}});fe.useEffect(()=>{localStorage.setItem("for_me_wallpaper_theme",y)},[y]);const[h,b]=fe.useState(()=>{try{const q=localStorage.getItem("for_me_wallpaper_settings_v3")||localStorage.getItem("for_me_wallpaper_settings_v2");return q?{...ia,...JSON.parse(q)}:ia}catch{return ia}}),w=q=>{b(Re=>{const pe={...Re,...q};return localStorage.setItem("for_me_wallpaper_settings_v3",JSON.stringify(pe)),pe})},M=()=>{b(ia),localStorage.setItem("for_me_wallpaper_settings_v3",JSON.stringify(ia))},[v,S]=fe.useState(!1),N=fe.useRef(!1);N.current=v,fe.useEffect(()=>{const q=h.ecoSleepMinutes??7.5;if(q<=0){N.current&&S(!1);return}const Re=q*60*1e3;let pe;const Ye=()=>{N.current&&S(!1),clearTimeout(pe),pe=setTimeout(()=>{S(!0)},Re)};pe=setTimeout(()=>{S(!0)},Re);const ht=["mousemove","mousedown","keydown","touchstart","scroll","pointerdown"];let pt=Date.now();const Tt=()=>{const Ut=Date.now();if(N.current){S(!1),Ye(),pt=Ut;return}Ut-pt>2e3&&(pt=Ut,Ye())};return ht.forEach(Ut=>{window.addEventListener(Ut,Tt,{passive:!0})}),()=>{clearTimeout(pe),ht.forEach(Ut=>{window.removeEventListener(Ut,Tt)})}},[h.ecoSleepMinutes]);const[z,P]=fe.useState(()=>{try{const q=localStorage.getItem("for_me_tasks");return q?JSON.parse(q):[{id:"1",text:"Core engineering deep focus sprint",completed:!1},{id:"2",text:"System architecture review & refinement",completed:!1},{id:"3",text:"Physical movement & hydration (8 glasses)",completed:!1}]}catch{return[{id:"1",text:"Core engineering deep focus sprint",completed:!1}]}});fe.useEffect(()=>{localStorage.setItem("for_me_tasks",JSON.stringify(z))},[z]);const U=q=>{P(Re=>Re.map(pe=>pe.id===q?{...pe,completed:!pe.completed,completedAt:pe.completed?void 0:new Date().toISOString()}:pe))},I=q=>{if(!q.trim())return;const Re={id:`task_${Date.now()}`,text:q.trim(),completed:!1};P(pe=>[Re,...pe])},E=q=>{P(Re=>Re.filter(pe=>pe.id!==q))},[D,K]=fe.useState(()=>{try{const q=localStorage.getItem("for_me_habits");return q?JSON.parse(q):[{id:"h1",name:"Deep Focus & Engineering Block",completed:!1,streak:3},{id:"h2",name:"Hydration Target (8 Glasses)",completed:!1,streak:5},{id:"h3",name:"Mindful Walk & Movement",completed:!1,streak:2}]}catch{return[{id:"h1",name:"Deep Focus & Engineering Block",completed:!1,streak:1}]}});fe.useEffect(()=>{localStorage.setItem("for_me_habits",JSON.stringify(D))},[D]);const G=q=>{K(Re=>Re.map(pe=>{if(pe.id===q){const Ye=!pe.completed;return{...pe,completed:Ye,streak:Ye?pe.streak+1:Math.max(0,pe.streak-1)}}return pe}))},V=q=>{if(!q.trim())return;const Re={id:`habit_${Date.now()}`,name:q.trim(),completed:!1,streak:0};K(pe=>[...pe,Re])},H=q=>{K(Re=>Re.filter(pe=>pe.id!==q))},[$,B]=fe.useState(()=>{try{const q=localStorage.getItem("for_me_routines");return q?JSON.parse(q):Tl}catch{return Tl}});fe.useEffect(()=>{localStorage.setItem("for_me_routines",JSON.stringify($))},[$]);const ee=q=>{const Re=q.timeRange.split(/[-–—to]/i),pe=q.startHour!==void 0?q.startHour:es(Re[0],9),Ye=q.endHour!==void 0?q.endHour:es(Re[1],pe+1),ht={id:`routine_${Date.now()}`,...q,startHour:pe,endHour:Ye,colorTag:q.colorTag||"#8b5cf6"};B(pt=>[...pt,ht])},he=(q,Re)=>{B(pe=>pe.map(Ye=>{if(Ye.id!==q)return Ye;const ht={...Ye,...Re};if(Re.timeRange&&(Re.startHour===void 0||Re.endHour===void 0)){const pt=Re.timeRange.split(/[-–—to]/i);ht.startHour=es(pt[0],ht.startHour||9),ht.endHour=es(pt[1],ht.endHour||17)}return ht}))},X=q=>{B(Re=>Re.filter(pe=>pe.id!==q))},ie=()=>{B(Tl)},[O,Q]=fe.useState(null),[k,L]=fe.useState(0);fe.useEffect(()=>{const q=()=>{const pe=new Date,Ye=pe.getHours()+pe.getMinutes()/60,ht=pe.getHours()*60+pe.getMinutes();let pt=null,Tt=0;for(const Ut of $){let tt=Ut.startHour,Kt=Ut.endHour;if(tt===void 0||Kt===void 0){const it=Ut.timeRange.split(/[-–—to]/i);tt=es(it[0],0),Kt=es(it[1],24)}if(tt<=Kt){if(Ye>=tt&&Ye<Kt){pt=Ut;const it=Math.round(Kt*60);Tt=Math.max(0,it-ht);break}}else if(Ye>=tt||Ye<Kt){pt=Ut;const it=Math.round(Kt*60);Ye>=tt?Tt=Math.max(0,1440-ht+it):Tt=Math.max(0,it-ht);break}}Q(pt),L(Tt)};q();const Re=setInterval(q,15e3);return()=>clearInterval(Re)},[$]);const[re,F]=fe.useState(0),[te,ce]=fe.useState(!1),[ue,xe]=fe.useState(e.defaultFocusTopic||"Engineering"),[Ne,Qe]=fe.useState(()=>{try{const q=localStorage.getItem("for_me_study_subjects");return q?JSON.parse(q):p0}catch{return p0}}),Xe=(q,Re)=>{if(!q.trim())return;const pe=["#8b5cf6","#06b6d4","#10b981","#f59e0b","#f43f5e","#ec4899","#3b82f6"],Ye=Re||pe[Ne.length%pe.length],ht={id:`subj_${Date.now()}`,name:q.trim(),color:Ye};Qe(pt=>{const Tt=[...pt,ht];return localStorage.setItem("for_me_study_subjects",JSON.stringify(Tt)),Tt})},De=q=>{Qe(Re=>{const pe=Re.filter(Ye=>Ye.id!==q);return localStorage.setItem("for_me_study_subjects",JSON.stringify(pe)),pe})},[je,Ke]=fe.useState(()=>{try{const q=localStorage.getItem("for_me_daily_study_target");return q?parseFloat(q):4}catch{return 4}}),xt=q=>{Ke(q),localStorage.setItem("for_me_daily_study_target",String(q))},[wt,yt]=fe.useState(()=>{try{const q=localStorage.getItem("for_me_study_sessions");return q?JSON.parse(q):[]}catch{return[]}});fe.useEffect(()=>{let q=null;return te?q=setInterval(()=>{F(Re=>Re+1)},1e3):!te&&re!==0&&clearInterval(q),()=>clearInterval(q)},[te,re]);const gt=()=>ce(q=>!q),Pt=()=>{if(re>30){const q={id:`ses_${Date.now()}`,subject:ue,durationSeconds:re,timestamp:new Date().toISOString()};yt(Re=>{const pe=[q,...Re];return localStorage.setItem("for_me_study_sessions",JSON.stringify(pe)),pe})}ce(!1),F(0)},Mt=(q,Re,pe)=>{if(q<=0)return;const Ye={id:`ses_manual_${Date.now()}`,subject:(Re==null?void 0:Re.trim())||ue||"Engineering",mode:(pe==null?void 0:pe.trim())||"Manual Entry",durationSeconds:Math.round(q*60),timestamp:new Date().toISOString()};yt(ht=>{const pt=[Ye,...ht];return localStorage.setItem("for_me_study_sessions",JSON.stringify(pt)),pt})},ge=q=>{yt(Re=>{const pe=Re.filter(Ye=>Ye.id!==q);return localStorage.setItem("for_me_study_sessions",JSON.stringify(pe)),pe})},[Dt,sn]=fe.useState(()=>{try{const q=localStorage.getItem("for_me_pomodoro_settings");return q?{...ed,...JSON.parse(q)}:ed}catch{return ed}});fe.useEffect(()=>{localStorage.setItem("for_me_pomodoro_settings",JSON.stringify(Dt))},[Dt]);const[Z,Gt]=fe.useState("idle"),[Lt,It]=fe.useState(()=>Dt.focusDurationMinutes*60),[Ie,Nt]=fe.useState(()=>Dt.focusDurationMinutes*60);fe.useEffect(()=>{let q=null;return(Z==="focus"||Z==="break")&&(q=setInterval(()=>{It(Re=>{if(Re<=1)if(Z==="focus"){Dt.soundEnabled&&Er.playFocusChime();const pe=Ie,Ye={id:`ses_${Date.now()}`,subject:ue,mode:"Pomodoro Focus",durationSeconds:pe,timestamp:new Date().toISOString()};if(yt(ht=>{const pt=[Ye,...ht];return localStorage.setItem("for_me_study_sessions",JSON.stringify(pt)),pt}),Dt.autoStartBreaks){Gt("break");const ht=Dt.breakDurationMinutes*60;return Nt(ht),ht}else{Gt("idle");const ht=Dt.focusDurationMinutes*60;return Nt(ht),ht}}else{Dt.soundEnabled&&Er.playBreakChime(),Gt("idle");const pe=Dt.focusDurationMinutes*60;return Nt(pe),pe}return Re-1})},1e3)),()=>{q&&clearInterval(q)}},[Z,Ie,Dt,ue]);const at=q=>{const pe=(q||Dt.focusDurationMinutes)*60;Nt(pe),It(pe),Gt("focus")},dt=()=>{(Z==="focus"||Z==="break")&&Gt("paused")},R=()=>{Z==="paused"&&Gt("focus")},T=()=>{Z==="focus"?Gt("paused"):Z==="paused"?Gt("focus"):Z==="break"?Gt("paused"):at()},ae=()=>{Gt("idle");const q=Dt.focusDurationMinutes*60;Nt(q),It(q)},Le=()=>{if(Z==="focus"){Gt("break");const q=Dt.breakDurationMinutes*60;Nt(q),It(q)}else{Gt("idle");const q=Dt.focusDurationMinutes*60;Nt(q),It(q)}},Ee=()=>{sn(q=>({...q,displayMode:q.displayMode==="telemetry"?"numbers":"telemetry"}))},[ze,Ue]=fe.useState(()=>{try{const q=localStorage.getItem("for_me_hydration");return q?JSON.parse(q):62.5}catch{return 62.5}});fe.useEffect(()=>{localStorage.setItem("for_me_hydration",JSON.stringify(ze))},[ze]);const[we,Me]=fe.useState(()=>{try{const q=localStorage.getItem("for_me_sleep_hours");return q?JSON.parse(q):8}catch{return 8}}),Oe=q=>{Me(q),localStorage.setItem("for_me_sleep_hours",JSON.stringify(q))},[W,Ce]=fe.useState(()=>{try{const q=localStorage.getItem("for_me_daily_rating");return q?JSON.parse(q):8}catch{return 8}});fe.useEffect(()=>{localStorage.setItem("for_me_daily_rating",JSON.stringify(W))},[W]);const Se=()=>{const q=new Date,Re=q.getFullYear(),pe=String(q.getMonth()+1).padStart(2,"0"),Ye=String(q.getDate()).padStart(2,"0");return`${Re}-${pe}-${Ye}`},[Ae,_e]=fe.useState(()=>{try{return localStorage.getItem("for_me_last_active_date")||Se()}catch{return Se()}}),Te=q=>{if(P(Re=>{const pe=Re.map(Ye=>({...Ye,completed:!1,completedAt:void 0}));return localStorage.setItem("for_me_tasks",JSON.stringify(pe)),pe}),K(Re=>{const pe=Re.map(Ye=>({...Ye,completed:!1,streak:Ye.completed?Ye.streak:0}));return localStorage.setItem("for_me_habits",JSON.stringify(pe)),pe}),Ue(0),localStorage.setItem("for_me_hydration",JSON.stringify(0)),re>30){const Re={id:`ses_${Date.now()}`,subject:ue,durationSeconds:re,timestamp:new Date().toISOString()};yt(pe=>{const Ye=[Re,...pe];return localStorage.setItem("for_me_study_sessions",JSON.stringify(Ye)),Ye})}ce(!1),F(0),_e(q),localStorage.setItem("for_me_last_active_date",q)};fe.useEffect(()=>{const q=()=>{const pe=Se(),Ye=localStorage.getItem("for_me_last_active_date");Ye?Ye!==pe&&Te(pe):(localStorage.setItem("for_me_last_active_date",pe),_e(pe))};q();const Re=setInterval(q,1e4);return window.addEventListener("focus",q),()=>{clearInterval(Re),window.removeEventListener("focus",q)}},[re,ue]);const Ge=()=>{const q=Se();Te(q)},rt=()=>{["for_me_profile","for_me_tasks","for_me_habits","for_me_routines","for_me_hydration","for_me_sleep_hours","for_me_daily_rating","for_me_study_sessions","for_me_pomodoro_settings","for_me_wallpaper_settings_v3","for_me_wallpaper_theme","for_me_app_theme","for_me_is_hud_hidden","for_me_last_active_date","for_me_active_yt","for_me_saved_yt_library"].forEach(Re=>localStorage.removeItem(Re)),t(to),P([{id:"1",text:"Core engineering deep focus sprint",completed:!1},{id:"2",text:"System architecture review & refinement",completed:!1},{id:"3",text:"Physical movement & hydration (8 glasses)",completed:!1}]),K([{id:"h1",name:"Deep Focus & Engineering Block",completed:!1,streak:0},{id:"h2",name:"Hydration Target (8 Glasses)",completed:!1,streak:0},{id:"h3",name:"Mindful Walk & Movement",completed:!1,streak:0}]),B(Tl),Ue(0),Me(8),Ce(8),F(0),ce(!1),yt([]),b(ia),_e(Se())},[Pe,Ze]=fe.useState("youtube"),[ct,Be]=fe.useState(!1),[bt,jt]=fe.useState("brown-noise"),[an,dn]=fe.useState(.65),[fn,Qt]=fe.useState(!1),[Nn,tn]=fe.useState(!1),[ln,St]=fe.useState(!1),[Ht,zt]=fe.useState(()=>{try{const q=localStorage.getItem("for_me_active_yt");return q?JSON.parse(q):rc[0]}catch{return rc[0]}}),[nn,rn]=fe.useState(70),[Qn,Pn]=fe.useState(!1),[_i,qt]=fe.useState(!1),[Pi,li]=fe.useState(()=>{try{const q=localStorage.getItem("for_me_saved_yt_library");return q?JSON.parse(q):[]}catch{return[]}});fe.useEffect(()=>{Ht&&localStorage.setItem("for_me_active_yt",JSON.stringify(Ht))},[Ht]),fe.useEffect(()=>{localStorage.setItem("for_me_saved_yt_library",JSON.stringify(Pi))},[Pi]);const Di=q=>{if(Nn){tn(!1);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("pauseVideo")}catch{}}Ze("ambient");const Re=q||bt;jt(Re),Er.play(Re),Be(!0);const pe=xa.find(Ye=>Ye.id===Re);Vi.startKeepAlive(),Vi.updateMetadata({title:(pe==null?void 0:pe.title)||"Procedural Soundscape",artist:"FOR ME Sanctuary (Offline)",album:"Sound Sanctuary",onPlay:()=>Di(Re),onPause:yi})},yi=()=>{Er.stop(),Be(!1),Vi.stopKeepAlive(),Vi.setPlaybackState("paused")},Pr=q=>{dn(q),Er.setVolume(q)},A=()=>{const q=Er.toggleMute();Qt(q)},Y=q=>{Er.stop(),Be(!1),zt(q),Ze("youtube"),tn(!0),Pn(!1);try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}},se=()=>{if(Nn){tn(!1);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("pauseVideo")}catch{}}else{Er.stop(),Be(!1),Ze("youtube"),tn(!0),Pn(!1);try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute(),typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("playVideo")}catch{}}},de=()=>{tn(!1);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("stopVideo")}catch{}},oe=()=>{try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("nextVideo"),tn(!0)}catch{}},Ve=()=>{try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("previousVideo"),tn(!0)}catch{}},et=q=>{rn(q);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("setVolume",[q])}catch{}},We=()=>{Pn(q=>{const Re=!q;try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand(Re?"mute":"unMute")}catch{}return Re})},qe=(q,Re)=>{var pt;const pe=Zv(q);if(!pe)return{success:!1,error:"Could not recognize a valid YouTube video or playlist link. Please check the URL format and try again."};const Ye=(Re==null?void 0:Re.trim())||(pe.type==="playlist"?`Custom Playlist (${(pt=pe.playlistId)==null?void 0:pt.slice(0,8)}...)`:`YouTube Audio (${pe.videoId||"Stream"})`),ht={id:`yt-${Date.now()}-${Math.random().toString(36).substr(2,5)}`,title:Ye,type:pe.type,videoId:pe.videoId,playlistId:pe.playlistId,url:pe.cleanUrl,thumbnailUrl:Jv(pe.videoId),channel:pe.type==="playlist"?"Custom YouTube Playlist":"Custom YouTube Stream",createdAt:new Date().toISOString()};return li(Tt=>[ht,...Tt]),Y(ht),{success:!0,item:ht}},nt=q=>{li(Re=>Re.filter(pe=>pe.id!==q))};return u.jsx(mm.Provider,{value:{profile:e,setProfile:t,updateProfile:r,appTheme:o,setAppTheme:l,toggleAppTheme:d,isHUDHidden:f,setIsHUDHidden:g,toggleHUDHidden:m,tasks:z,toggleTask:U,addTask:I,deleteTask:E,wallpaperTheme:y,setWallpaperTheme:_,wallpaperSettings:h,updateWallpaperSettings:w,resetWallpaperSettings:M,habits:D,toggleHabit:G,addHabit:V,deleteHabit:H,routines:$,addRoutineBlock:ee,updateRoutineBlock:he,deleteRoutineBlock:X,resetRoutines:ie,activeRoutineBlock:O,activeRoutineMinutesLeft:k,studySeconds:re,isStudyActive:te,studySubject:ue,setStudySubject:xe,studySubjects:Ne,addStudySubject:Xe,deleteStudySubject:De,dailyStudyTargetHours:je,setDailyStudyTargetHours:xt,toggleStudyTimer:gt,resetStudyTimer:Pt,studySessions:wt,logManualStudyTime:Mt,deleteStudySession:ge,pomodoroPhase:Z,pomodoroSecondsLeft:Lt,pomodoroTotalSeconds:Ie,pomodoroSettings:Dt,setPomodoroSettings:sn,startPomodoro:at,pausePomodoro:dt,resumePomodoro:R,togglePomodoro:T,resetPomodoro:ae,skipPomodoroPhase:Le,togglePomodoroDisplayMode:Ee,hydration:ze,setHydration:Ue,sleepHours:we,setSleep:Oe,dailyRating:W,setDailyRating:Ce,lastActiveDate:Ae,resetDayProgress:Ge,factoryReset:rt,audioSource:Pe,setAudioSource:Ze,isAudioPlaying:ct,activeSoundscapeId:bt,audioVolume:an,isAudioMuted:fn,playSoundscape:Di,stopSoundscape:yi,setAudioVolume:Pr,toggleAudioMute:A,isYouTubePlaying:Nn,setYouTubeIsPlaying:tn,isYouTubePlayerReady:ln,setYouTubePlayerReady:St,activeYouTubeItem:Ht,youtubeVolume:nn,isYouTubeMuted:Qn,savedYouTubeItems:Pi,showYouTubePreview:_i,setShowYouTubePreview:qt,playYouTubeItem:Y,toggleYouTubePlay:se,stopYouTube:de,nextYouTubeTrack:oe,prevYouTubeTrack:Ve,setYouTubeVolume:et,toggleYouTubeMute:We,addYouTubeToLibrary:qe,removeYouTubeFromLibrary:nt,isEcoSleeping:v,setIsEcoSleeping:S},children:s})},Nr=()=>{const s=fe.useContext(mm);if(!s)throw new Error("useData must be used within a DataProvider");return s},e_=()=>{const s=fe.useRef(null),{isHUDHidden:e,wallpaperSettings:t,appTheme:r,isEcoSleeping:o}=Nr(),l=fe.useRef(e),d=fe.useRef(t),f=fe.useRef(r),g=fe.useRef(o);g.current=o;const m=fe.useRef(!1),y=fe.useRef(null);return fe.useEffect(()=>{l.current=e},[e]),fe.useEffect(()=>{d.current=t},[t]),fe.useEffect(()=>{f.current=r},[r]),fe.useEffect(()=>{!o&&!m.current&&y.current&&y.current()},[o]),fe.useEffect(()=>{const _=s.current;if(!_)return;const h=_.getContext("2d");if(!h)return;let b,w=0,M=0;const v=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let S=[];const N=()=>{S=[];const X=d.current.starDensity||"balanced",ie=X==="sparse"?.45:X==="dense"?1.6:X==="galaxy"?2.4:1,O=w<768?85:160,Q=Math.round(O*ie);for(let k=0;k<Q;k++){const L=Math.random()>.85?2:Math.random()>.45?1:0,re=Math.random()*.65+(L===2?.85:.35);S.push({x:Math.random()*w,y:Math.random()*M,z:L,radius:re,alpha:Math.random()*.55+.25,alphaSpeed:Math.random()*.015+.005,alphaPhase:Math.random()*Math.PI*2,vx:(Math.random()-.5)*.06,vy:(Math.random()-.5)*.06})}},z=()=>{if(!_)return;const X=Math.min(window.devicePixelRatio||1,1.25);w=window.innerWidth,M=window.innerHeight,_.width=w*X,_.height=M*X,_.style.width=`${w}px`,_.style.height=`${M}px`,h.scale(X,X),N()};z(),window.addEventListener("resize",z,{passive:!0});let P=w/2,U=M/2,I=w/2,E=M/2;const D=X=>{d.current.interactiveParallax!==!1&&(P=X.clientX,U=X.clientY)};window.addEventListener("mousemove",D,{passive:!0});const K=(X,ie,O,Q)=>{h.save(),h.translate(X,ie);const k=f.current==="light",L=Math.max(.15,Math.min(.95,Q));h.globalAlpha=L;const re=h.createRadialGradient(0,0,0,0,0,O*.9);k?(re.addColorStop(0,"rgba(245, 158, 11, 0.75)"),re.addColorStop(.3,"rgba(217, 119, 6, 0.28)"),re.addColorStop(.7,"rgba(180, 83, 9, 0.06)"),re.addColorStop(1,"rgba(255, 255, 255, 0)")):(re.addColorStop(0,"rgba(255, 255, 255, 0.85)"),re.addColorStop(.3,"rgba(216, 180, 254, 0.35)"),re.addColorStop(.7,"rgba(147, 51, 234, 0.08)"),re.addColorStop(1,"rgba(0, 0, 0, 0)")),h.fillStyle=re,h.beginPath(),h.arc(0,0,O*.9,0,Math.PI*2),h.fill();const F=h.createLinearGradient(-O,0,O,0);k?(F.addColorStop(0,"rgba(245, 158, 11, 0)"),F.addColorStop(.35,"rgba(217, 119, 6, 0.45)"),F.addColorStop(.5,"#b45309"),F.addColorStop(.65,"rgba(217, 119, 6, 0.45)"),F.addColorStop(1,"rgba(245, 158, 11, 0)")):(F.addColorStop(0,"rgba(255, 255, 255, 0)"),F.addColorStop(.35,"rgba(233, 213, 255, 0.55)"),F.addColorStop(.5,"#ffffff"),F.addColorStop(.65,"rgba(233, 213, 255, 0.55)"),F.addColorStop(1,"rgba(255, 255, 255, 0)")),h.strokeStyle=F,h.lineWidth=.75,h.beginPath(),h.moveTo(-O,0),h.lineTo(O,0),h.stroke();const te=h.createLinearGradient(0,-O,0,O);k?(te.addColorStop(0,"rgba(245, 158, 11, 0)"),te.addColorStop(.35,"rgba(217, 119, 6, 0.45)"),te.addColorStop(.5,"#b45309"),te.addColorStop(.65,"rgba(217, 119, 6, 0.45)"),te.addColorStop(1,"rgba(245, 158, 11, 0)")):(te.addColorStop(0,"rgba(255, 255, 255, 0)"),te.addColorStop(.35,"rgba(233, 213, 255, 0.55)"),te.addColorStop(.5,"#ffffff"),te.addColorStop(.65,"rgba(233, 213, 255, 0.55)"),te.addColorStop(1,"rgba(255, 255, 255, 0)")),h.strokeStyle=te,h.lineWidth=.75,h.beginPath(),h.moveTo(0,-O),h.lineTo(0,O),h.stroke();const ce=O*.38;h.strokeStyle=k?"rgba(180, 83, 9, 0.35)":"rgba(255, 255, 255, 0.4)",h.lineWidth=.5,h.beginPath(),h.moveTo(-ce,-ce),h.lineTo(ce,ce),h.moveTo(-ce,ce),h.lineTo(ce,-ce),h.stroke(),h.fillStyle=k?"#d97706":"#ffffff",h.beginPath(),h.arc(0,0,1.2,0,Math.PI*2),h.fill(),h.restore()},G=[{x:-100,y:-100,length:100,speed:18,angle:Math.PI/4+.05,alpha:0,active:!1},{x:-100,y:-100,length:80,speed:16,angle:Math.PI/4-.08,alpha:0,active:!1},{x:-100,y:-100,length:110,speed:20,angle:Math.PI/4+.12,alpha:0,active:!1}];let V=120;const H=X=>{if(X==="off")return;V--;const ie=X==="meteor-shower"?40:180;if(V<=0&&!v){V=Math.random()*(X==="meteor-shower"?60:200)+ie;const O=G.find(Q=>!Q.active);O&&(O.active=!0,O.x=Math.random()*(w*.7),O.y=Math.random()*(M*.3),O.alpha=.95,O.length=Math.random()*50+70)}for(const O of G)if(O.active)if(O.x+=Math.cos(O.angle)*O.speed,O.y+=Math.sin(O.angle)*O.speed,O.alpha-=X==="meteor-shower"?.022:.016,O.alpha<=0||O.x>w+100||O.y>M+100)O.active=!1;else{h.save();const Q=O.x-Math.cos(O.angle)*O.length,k=O.y-Math.sin(O.angle)*O.length,L=h.createLinearGradient(Q,k,O.x,O.y);L.addColorStop(0,"rgba(255, 255, 255, 0)"),L.addColorStop(.7,"rgba(216, 180, 254, "+O.alpha*.6+")"),L.addColorStop(1,"#ffffff"),h.strokeStyle=L,h.lineWidth=1.3,h.beginPath(),h.moveTo(Q,k),h.lineTo(O.x,O.y),h.stroke(),h.fillStyle="#ffffff",h.beginPath(),h.arc(O.x,O.y,1.8,0,Math.PI*2),h.fill(),h.restore()}};let $=0,B=!0;const ee=()=>{B=!document.hidden};document.addEventListener("visibilitychange",ee);const he=()=>{if(!B){b=requestAnimationFrame(he);return}const X=d.current,ie=l.current;let O=1;X.speed==="frozen"?O=0:X.speed==="calm"?O=.45:X.speed==="dynamic"?O=1.45:O=.85,ie&&O>0&&(O*=1.25),$+=v?.002:.014*O,h.clearRect(0,0,w,M),I+=(P-I)*.04,E+=(U-E)*.04;const Q=(I-w/2)/(w/2),k=(E-M/2)/(M/2);let L=1;X.amplitude==="subtle"?L=.55:X.amplitude==="dramatic"?L=1.6:L=1,ie&&(L*=1.2);const re=X.palette,F=f.current==="light";let te="#030208",ce="#0b061c",ue="#170a32",xe="rgba(168, 85, 247, 0.22)",Ne="rgba(99, 102, 241, 0.16)",Qe="rgba(168, 85, 247, 0.30)",Xe="rgba(192, 132, 252, 0.40)",De=["#05030e","#090518","#0e0824"],je="rgba(168, 85, 247, 0.25)",Ke=["#0a051d","#110930","#190c42"],xt="rgba(168, 85, 247, 0.35)",wt=["#11082e","#1c0c4b","#261063"],yt="rgba(192, 132, 252, 0.45)",gt=["#180b3d","#260f64","#341584"],Pt="rgba(216, 180, 254, 0.55)",Mt=["#0c0620","#140833","#1e0c4a","#281061"],ge="rgba(233, 213, 255, 0.65)";F?re==="celestial-cyan"?(te="#eef8ff",ce="#d7effe",ue="#b5e3fd",xe="rgba(14, 165, 233, 0.16)",Ne="rgba(6, 182, 212, 0.12)",Qe="rgba(2, 132, 199, 0.12)",Xe="rgba(3, 105, 161, 0.20)",De=["#93c5fd","#bfdbfe","#dbeafe"],je="rgba(29, 78, 216, 0.35)",Ke=["#60a5fa","#93c5fd","#bfdbfe"],xt="rgba(2, 132, 199, 0.42)",wt=["#38bdf8","#7dd3fc","#bae6fd"],yt="rgba(14, 165, 233, 0.50)",gt=["#bae6fd","#d7f0fd","#f0f9ff"],Pt="rgba(56, 189, 248, 0.58)",Mt=["#f0f9ff","#f8fcff","#ffffff","#ffffff"],ge="rgba(2, 132, 199, 0.68)"):re==="supernova-sunset"?(te="#fff1f2",ce="#fecdd3",ue="#fda4af",xe="rgba(244, 63, 94, 0.16)",Ne="rgba(249, 115, 22, 0.12)",Qe="rgba(225, 29, 72, 0.12)",Xe="rgba(190, 18, 60, 0.20)",De=["#f43f5e","#fb7185","#fda4af"],je="rgba(159, 18, 57, 0.35)",Ke=["#fb7185","#fda4af","#fecdd3"],xt="rgba(225, 29, 72, 0.42)",wt=["#fda4af","#fecdd3","#ffe4e6"],yt="rgba(244, 63, 94, 0.50)",gt=["#fecdd3","#ffe4e6","#fff1f2"],Pt="rgba(251, 113, 133, 0.58)",Mt=["#fff5f6","#fffafb","#ffffff","#ffffff"],ge="rgba(225, 29, 72, 0.68)"):re==="nocturne-silver"?(te="#fafafa",ce="#f4f4f6",ue="#e4e4e7",xe="rgba(113, 113, 122, 0.14)",Ne="rgba(82, 82, 91, 0.10)",Qe="rgba(82, 82, 91, 0.12)",Xe="rgba(63, 63, 70, 0.20)",De=["#a1a1aa","#d4d4d8","#e4e4e7"],je="rgba(63, 63, 70, 0.35)",Ke=["#d4d4d8","#e4e4e7","#f1f1f3"],xt="rgba(82, 82, 91, 0.42)",wt=["#e4e4e7","#f1f1f3","#f4f4f6"],yt="rgba(113, 113, 122, 0.50)",gt=["#f1f1f3","#f6f6f8","#fafafa"],Pt="rgba(161, 161, 170, 0.58)",Mt=["#f6f6f8","#fcfcfc","#ffffff","#ffffff"],ge="rgba(82, 82, 91, 0.68)"):re==="cyberpunk-neon"?(te="#fdf2f8",ce="#fae8ff",ue="#f5d0fe",xe="rgba(236, 72, 153, 0.18)",Ne="rgba(6, 182, 212, 0.14)",Qe="rgba(168, 85, 247, 0.15)",Xe="rgba(236, 72, 153, 0.22)",De=["#f472b6","#fbcfe8","#fdf2f8"],je="rgba(219, 39, 119, 0.35)",Ke=["#c084fc","#e9d5ff","#fae8ff"],xt="rgba(147, 51, 234, 0.42)",wt=["#38bdf8","#bae6fd","#f0f9ff"],yt="rgba(2, 132, 199, 0.50)",gt=["#fbcfe8","#fce7f3","#ffffff"],Pt="rgba(236, 72, 153, 0.58)",Mt=["#fdf2f8","#ffffff","#ffffff","#ffffff"],ge="rgba(168, 85, 247, 0.68)"):re==="solar-gold"?(te="#fffbeb",ce="#fef3c7",ue="#fde68a",xe="rgba(245, 158, 11, 0.20)",Ne="rgba(234, 88, 12, 0.14)",Qe="rgba(217, 119, 6, 0.15)",Xe="rgba(245, 158, 11, 0.22)",De=["#f59e0b","#fbbf24","#fef3c7"],je="rgba(180, 83, 9, 0.38)",Ke=["#fbbf24","#fcd34d","#fef9c3"],xt="rgba(217, 119, 6, 0.45)",wt=["#fde047","#fef08a","#fefce8"],yt="rgba(234, 88, 12, 0.52)",gt=["#fef08a","#fefce8","#ffffff"],Pt="rgba(245, 158, 11, 0.60)",Mt=["#fefce8","#ffffff","#ffffff","#ffffff"],ge="rgba(217, 119, 6, 0.70)"):re==="emerald-aurora"?(te="#f0fdf4",ce="#dcfce7",ue="#bbf7d0",xe="rgba(16, 185, 129, 0.20)",Ne="rgba(34, 197, 94, 0.14)",Qe="rgba(22, 163, 74, 0.15)",Xe="rgba(16, 185, 129, 0.22)",De=["#86efac","#bbf7d0","#dcfce7"],je="rgba(22, 163, 74, 0.38)",Ke=["#4ade80","#86efac","#bbf7d0"],xt="rgba(21, 128, 61, 0.45)",wt=["#22c55e","#4ade80","#86efac"],yt="rgba(16, 185, 129, 0.52)",gt=["#86efac","#bbf7d0","#f0fdf4"],Pt="rgba(22, 163, 74, 0.60)",Mt=["#f0fdf4","#f8fafc","#ffffff","#ffffff"],ge="rgba(16, 185, 129, 0.70)"):re==="pure-pitch-black"?(te="#ffffff",ce="#f8fafc",ue="#f1f5f9",xe="rgba(148, 163, 184, 0.16)",Ne="rgba(100, 116, 139, 0.10)",Qe="rgba(71, 85, 105, 0.15)",Xe="rgba(51, 65, 85, 0.22)",De=["#cbd5e1","#e2e8f0","#f1f5f9"],je="rgba(71, 85, 105, 0.38)",Ke=["#94a3b8","#cbd5e1","#e2e8f0"],xt="rgba(51, 65, 85, 0.45)",wt=["#64748b","#94a3b8","#cbd5e1"],yt="rgba(30, 41, 59, 0.52)",gt=["#cbd5e1","#e2e8f0","#f8fafc"],Pt="rgba(51, 65, 85, 0.60)",Mt=["#f8fafc","#ffffff","#ffffff","#ffffff"],ge="rgba(15, 23, 42, 0.70)"):(te="#fffbf3",ce="#feeccd",ue="#fad4a0",xe="rgba(245, 158, 11, 0.18)",Ne="rgba(217, 119, 6, 0.12)",Qe="rgba(180, 83, 9, 0.12)",Xe="rgba(146, 64, 14, 0.20)",De=["#d4a373","#bc8a5f","#a47148"],je="rgba(146, 64, 14, 0.38)",Ke=["#e6ba8f","#d4a373","#bc8a5f"],xt="rgba(180, 83, 9, 0.45)",wt=["#f3d5b5","#e6ba8f","#d4a373"],yt="rgba(217, 119, 6, 0.52)",gt=["#faedcd","#f3d5b5","#fefae0"],Pt="rgba(245, 158, 11, 0.60)",Mt=["#fefae0","#fffdfa","#ffffff","#ffffff"],ge="rgba(217, 119, 6, 0.70)"):re==="celestial-cyan"?(te="#020712",ce="#041322",ue="#071f35",xe="rgba(14, 165, 233, 0.18)",Ne="rgba(6, 182, 212, 0.12)",Qe="rgba(56, 189, 248, 0.12)",Xe="rgba(103, 232, 249, 0.20)",De=["#030914","#051221","#071c31"],je="rgba(56, 189, 248, 0.22)",Ke=["#040f1f","#071b33","#0a2646"],xt="rgba(56, 189, 248, 0.32)",wt=["#06152a","#0a2544","#0f345c"],yt="rgba(56, 189, 248, 0.42)",gt=["#081b34","#0d2e54","#134273"],Pt="rgba(125, 211, 252, 0.52)",Mt=["#051224","#091c36","#0e294d","#133866"],ge="rgba(186, 230, 253, 0.65)"):re==="supernova-sunset"?(te="#0a0208",ce="#160412",ue="#24061c",xe="rgba(244, 63, 94, 0.18)",Ne="rgba(249, 115, 22, 0.12)",Qe="rgba(251, 113, 133, 0.12)",Xe="rgba(253, 186, 116, 0.20)",De=["#0d020a","#170412","#22061b"],je="rgba(244, 63, 94, 0.22)",Ke=["#150311","#24061d","#340929"],xt="rgba(244, 63, 94, 0.32)",wt=["#1e0518","#320827","#470c38"],yt="rgba(251, 113, 133, 0.42)",gt=["#280620","#420b33","#5c0f47"],Pt="rgba(251, 146, 60, 0.52)",Mt=["#180314","#270620","#3b0930","#500d41"],ge="rgba(254, 215, 170, 0.65)"):re==="nocturne-silver"?(te="#030306",ce="#08080d",ue="#101017",xe="rgba(161, 161, 170, 0.16)",Ne="rgba(113, 113, 122, 0.10)",Qe="rgba(212, 212, 216, 0.12)",Xe="rgba(228, 228, 231, 0.18)",De=["#060609","#0c0c12","#13131c"],je="rgba(161, 161, 170, 0.20)",Ke=["#0a0a0f","#12121b","#1a1a27"],xt="rgba(161, 161, 170, 0.30)",wt=["#0e0e16","#181824","#232333"],yt="rgba(212, 212, 216, 0.40)",gt=["#13131e","#1f1f30","#2d2d42"],Pt="rgba(228, 228, 231, 0.50)",Mt=["#0c0c13","#14141f","#1d1d2b","#272738"],ge="rgba(244, 244, 245, 0.65)"):re==="cyberpunk-neon"?(te="#06000e",ce="#120024",ue="#22003d",xe="rgba(236, 72, 153, 0.22)",Ne="rgba(6, 182, 212, 0.18)",Qe="rgba(34, 211, 238, 0.15)",Xe="rgba(244, 114, 182, 0.22)",De=["#0a0014","#150029","#24003d"],je="rgba(168, 85, 247, 0.25)",Ke=["#120021","#1f0038","#310052"],xt="rgba(236, 72, 153, 0.35)",wt=["#1c0030","#2d004d","#42006e"],yt="rgba(6, 182, 212, 0.45)",gt=["#25003d","#3d0066","#59008f"],Pt="rgba(244, 63, 94, 0.55)",Mt=["#160029","#260045","#380062","#4e0085"],ge="rgba(34, 211, 238, 0.70)"):re==="solar-gold"?(te="#080400",ce="#140900",ue="#241000",xe="rgba(245, 158, 11, 0.22)",Ne="rgba(234, 88, 12, 0.16)",Qe="rgba(251, 191, 36, 0.15)",Xe="rgba(252, 211, 77, 0.22)",De=["#0a0400","#170900","#261000"],je="rgba(217, 119, 6, 0.25)",Ke=["#130700","#220e00","#361600"],xt="rgba(245, 158, 11, 0.35)",wt=["#1e0a00","#301300","#4a1e00"],yt="rgba(251, 191, 36, 0.45)",gt=["#290e00","#421a00","#612700"],Pt="rgba(252, 211, 77, 0.55)",Mt=["#190800","#2a0e00","#401500","#592000"],ge="rgba(254, 240, 138, 0.70)"):re==="emerald-aurora"?(te="#010d05",ce="#021a0a",ue="#052e14",xe="rgba(16, 185, 129, 0.22)",Ne="rgba(52, 211, 153, 0.16)",Qe="rgba(110, 231, 183, 0.15)",Xe="rgba(52, 211, 153, 0.22)",De=["#021508","#04240f","#073918"],je="rgba(16, 185, 129, 0.25)",Ke=["#031f0c","#063316","#0a4b22"],xt="rgba(52, 211, 153, 0.35)",wt=["#052b12","#09431e","#0e602c"],yt="rgba(110, 231, 183, 0.45)",gt=["#083818","#0d5426","#147738"],Pt="rgba(167, 243, 208, 0.55)",Mt=["#062e14","#0a4720","#10632d","#18863f"],ge="rgba(110, 231, 183, 0.70)"):re==="pure-pitch-black"&&(te="#000000",ce="#020202",ue="#060606",xe="rgba(255, 255, 255, 0.08)",Ne="rgba(161, 161, 170, 0.06)",Qe="rgba(161, 161, 170, 0.10)",Xe="rgba(228, 228, 231, 0.15)",De=["#020202","#060606","#0a0a0a"],je="rgba(161, 161, 170, 0.20)",Ke=["#050505","#0a0a0a","#101010"],xt="rgba(161, 161, 170, 0.30)",wt=["#080808","#0e0e0e","#161616"],yt="rgba(212, 212, 216, 0.40)",gt=["#0c0c0c","#141414","#1e1e1e"],Pt="rgba(228, 228, 231, 0.50)",Mt=["#080808","#101010","#181818","#222222"],ge="rgba(255, 255, 255, 0.75)");const Dt=h.createLinearGradient(0,0,0,M);Dt.addColorStop(0,te),Dt.addColorStop(.45,ce),Dt.addColorStop(1,ue),h.fillStyle=Dt,h.fillRect(0,0,w,M);const sn=h.createRadialGradient(w*.8,M*.18,0,w*.8,M*.18,w*.5);sn.addColorStop(0,xe),sn.addColorStop(.7,"rgba(0, 0, 0, 0.04)"),sn.addColorStop(1,"rgba(0, 0, 0, 0)"),h.fillStyle=sn,h.fillRect(0,0,w,M);const Z=h.createRadialGradient(w*.18,M*.82,0,w*.18,M*.82,w*.55);if(Z.addColorStop(0,Ne),Z.addColorStop(.65,"rgba(0, 0, 0, 0.03)"),Z.addColorStop(1,"rgba(0, 0, 0, 0)"),h.fillStyle=Z,h.fillRect(0,0,w,M),X.showNebulaDust){h.save();const Ae=h.createRadialGradient(w*.35,M*.2,0,w*.35,M*.2,w*.38);Ae.addColorStop(0,xe),Ae.addColorStop(.5,"rgba(126, 34, 206, 0.04)"),Ae.addColorStop(1,"rgba(0, 0, 0, 0)"),h.fillStyle=Ae,h.fillRect(0,0,w,M);const _e=h.createRadialGradient(w*.7,M*.14,0,w*.7,M*.14,w*.32);_e.addColorStop(0,Ne),_e.addColorStop(.6,"rgba(14, 116, 144, 0.03)"),_e.addColorStop(1,"rgba(0, 0, 0, 0)"),h.fillStyle=_e,h.fillRect(0,0,w,M),h.restore()}if(X.showConstellations){h.save(),h.strokeStyle=F?"rgba(180, 130, 80, 0.28)":"rgba(255, 255, 255, 0.14)",h.lineWidth=.75;const Ae=[{x:w*.68,y:M*.1},{x:w*.72,y:M*.08},{x:w*.76,y:M*.09},{x:w*.78,y:M*.13},{x:w*.83,y:M*.14},{x:w*.84,y:M*.1},{x:w*.78,y:M*.09}];h.beginPath(),h.moveTo(Ae[0].x,Ae[0].y);for(let Te=1;Te<Ae.length;Te++)h.lineTo(Ae[Te].x,Ae[Te].y);h.stroke(),h.fillStyle=F?"#b45309":"#ffffff";for(const Te of Ae)h.beginPath(),h.arc(Te.x,Te.y,1.4,0,Math.PI*2),h.fill();const _e=[{x:w*.28,y:M*.08},{x:w*.31,y:M*.12},{x:w*.34,y:M*.09},{x:w*.37,y:M*.13},{x:w*.4,y:M*.1}];h.beginPath(),h.moveTo(_e[0].x,_e[0].y);for(let Te=1;Te<_e.length;Te++)h.lineTo(_e[Te].x,_e[Te].y);h.stroke();for(const Te of _e)h.beginPath(),h.arc(Te.x,Te.y,1.3,0,Math.PI*2),h.fill();h.restore()}if(X.showComet){h.save();const Ae=$*.04%1,_e=w*.75,Te=M*.04,Ge=w*.25,rt=M*.22,Pe=_e+(Ge-_e)*Ae,Ze=Te+(rt-Te)*Ae,ct=Math.atan2(rt-Te,Ge-_e)+Math.PI,Be=140,bt=Pe+Math.cos(ct)*Be,jt=Ze+Math.sin(ct)*Be,an=h.createLinearGradient(bt,jt,Pe,Ze);an.addColorStop(0,"rgba(56, 189, 248, 0)"),an.addColorStop(.5,"rgba(168, 85, 247, 0.25)"),an.addColorStop(.85,"rgba(233, 213, 255, 0.65)"),an.addColorStop(1,"#ffffff"),h.strokeStyle=an,h.lineWidth=1.8,h.beginPath(),h.moveTo(bt,jt),h.lineTo(Pe,Ze),h.stroke(),h.fillStyle="#ffffff",h.shadowColor="#67e8f9",h.shadowBlur=8,h.beginPath(),h.arc(Pe,Ze,2.2,0,Math.PI*2),h.fill(),h.restore()}if(X.showMeridian){h.save();const Ae=w*.91;h.strokeStyle=Qe,h.lineWidth=1,h.beginPath(),h.moveTo(Ae,0),h.lineTo(Ae,M),h.stroke(),h.strokeStyle="rgba(255, 255, 255, 0.18)",h.lineWidth=1;for(let _e=50;_e<M;_e+=70)h.beginPath(),h.moveTo(Ae-4,_e),h.lineTo(Ae+4,_e),h.stroke();h.restore()}if(X.showOrbitalTrack){h.save();const Ae=w*.78,_e=M*.18,Te=Math.min(w,M)*.45,Ge=Math.min(w,M)*.22;h.shadowColor=Xe,h.shadowBlur=6,h.strokeStyle=Xe,h.lineWidth=1.2,h.beginPath(),h.ellipse(Ae,_e,Te,Ge,-.22,Math.PI*.1,Math.PI*1.3),h.stroke(),h.setLineDash([3,8]),h.strokeStyle="rgba(255, 255, 255, 0.22)",h.lineWidth=.8,h.beginPath(),h.ellipse(Ae,_e,Te*1.08,Ge*1.08,-.22,Math.PI*.05,Math.PI*1.25),h.stroke(),h.setLineDash([]),h.restore()}if(X.showStars)for(let Ae=0;Ae<S.length;Ae++){const _e=S[Ae];!v&&O>0&&(_e.x+=_e.vx*O,_e.y+=_e.vy*O,_e.alphaPhase+=_e.alphaSpeed*O,_e.x<0&&(_e.x=w),_e.x>w&&(_e.x=0),_e.y<0&&(_e.y=M),_e.y>M&&(_e.y=0));const Te=(_e.z+1)*.35,Ge=_e.x+Q*12*Te,rt=_e.y+k*12*Te,Pe=Math.max(.12,Math.min(.85,_e.alpha+Math.sin(_e.alphaPhase)*.22));h.beginPath(),h.arc(Ge,rt,_e.radius,0,Math.PI*2),h.fillStyle=F?`rgba(180, 130, 80, ${(Pe*.65).toFixed(3)})`:`rgba(255, 255, 255, ${Pe.toFixed(3)})`,h.fill()}const Gt=X.waveGeometry,Lt=X.waveLayerDensity,It=(Ae,_e,Te,Ge=2)=>{h.save(),h.translate(Ae,_e);const rt=h.createRadialGradient(0,0,0,0,0,Ge*2.5);F?(rt.addColorStop(0,`rgba(245, 158, 11, ${Te})`),rt.addColorStop(.35,`rgba(217, 119, 6, ${Te*.7})`),rt.addColorStop(1,"rgba(255, 255, 255, 0)"),h.fillStyle=rt,h.beginPath(),h.arc(0,0,Ge*2.5,0,Math.PI*2),h.fill(),h.strokeStyle=`rgba(180, 83, 9, ${Te*.8})`,h.lineWidth=.75,h.beginPath(),h.moveTo(-Ge*2,0),h.lineTo(Ge*2,0),h.moveTo(0,-Ge*2),h.lineTo(0,Ge*2),h.stroke()):(rt.addColorStop(0,`rgba(255, 255, 255, ${Te})`),rt.addColorStop(.35,`rgba(233, 213, 255, ${Te*.7})`),rt.addColorStop(1,"rgba(255, 255, 255, 0)"),h.fillStyle=rt,h.beginPath(),h.arc(0,0,Ge*2.5,0,Math.PI*2),h.fill(),h.strokeStyle=`rgba(255, 255, 255, ${Te*.9})`,h.lineWidth=.75,h.beginPath(),h.moveTo(-Ge*2,0),h.lineTo(Ge*2,0),h.moveTo(0,-Ge*2),h.lineTo(0,Ge*2),h.stroke()),h.restore()},Ie=(Ae,_e,Te,Ge,rt,Pe,Ze,ct,Be,bt,jt=[])=>{const an=[0,w*.32,w*.68,w],dn=[];for(let St=0;St<4;St++){const Ht=Math.sin($*Te+Ge+St*1.4)*(_e*.75)+Math.cos($*Te*.7+Ge*1.2+St*2.1)*(_e*.35);dn.push({x:an[St],y:M*Ae[St]+Ht})}const fn=[dn[0],...dn,dn[dn.length-1]],Qt=[],Nn=.5;for(let St=1;St<fn.length-2;St++){const Ht=fn[St-1],zt=fn[St],nn=fn[St+1],rn=fn[St+2],Qn=(nn.x-Ht.x)*Nn,Pn=(nn.y-Ht.y)*Nn,_i=(rn.x-zt.x)*Nn,qt=(rn.y-zt.y)*Nn;Qt.push({p1:zt,cp1:{x:zt.x+Qn/3,y:zt.y+Pn/3},cp2:{x:nn.x-_i/3,y:nn.y-qt/3},p2:nn})}h.save(),h.beginPath(),h.moveTo(dn[0].x,dn[0].y);for(const St of Qt)h.bezierCurveTo(St.cp1.x,St.cp1.y,St.cp2.x,St.cp2.y,St.p2.x,St.p2.y);h.lineTo(w,M),h.lineTo(0,M),h.closePath(),h.fillStyle=rt,h.fill(),h.save(),h.clip();const tn=Math.min(...dn.map(St=>St.y)),ln=h.createLinearGradient(0,tn,0,tn+140);F?(ln.addColorStop(0,"rgba(255, 255, 255, 0.40)"),ln.addColorStop(.25,"rgba(251, 191, 36, 0.14)"),ln.addColorStop(.7,"rgba(217, 119, 6, 0.04)"),ln.addColorStop(1,"rgba(255, 255, 255, 0)")):(ln.addColorStop(0,"rgba(255, 255, 255, 0.26)"),ln.addColorStop(.25,"rgba(216, 180, 254, 0.16)"),ln.addColorStop(.7,"rgba(147, 51, 234, 0.05)"),ln.addColorStop(1,"rgba(0, 0, 0, 0)")),h.fillStyle=ln,h.fillRect(0,tn,w,M),h.beginPath();for(let St=0;St<Qt.length;St++){const Ht=Qt[St],zt=18+Math.sin($*.75+St*1.5)*4;St===0&&h.moveTo(Ht.p1.x,Ht.p1.y+zt),h.bezierCurveTo(Ht.cp1.x,Ht.cp1.y+zt,Ht.cp2.x,Ht.cp2.y+zt,Ht.p2.x,Ht.p2.y+zt)}h.strokeStyle=F?"rgba(160, 90, 40, 0.16)":"rgba(255, 255, 255, 0.10)",h.lineWidth=1,h.stroke(),h.beginPath();for(let St=0;St<Qt.length;St++){const Ht=Qt[St],zt=38+Math.cos($*.65+St*1.8)*5;St===0&&h.moveTo(Ht.p1.x,Ht.p1.y+zt),h.bezierCurveTo(Ht.cp1.x,Ht.cp1.y+zt,Ht.cp2.x,Ht.cp2.y+zt,Ht.p2.x,Ht.p2.y+zt)}h.strokeStyle=F?"rgba(160, 90, 40, 0.10)":"rgba(255, 255, 255, 0.06)",h.lineWidth=.8,h.stroke(),h.restore(),h.strokeStyle=Pe,h.lineWidth=Ze,h.stroke(),h.restore();for(const St of jt){const Ht=Math.min(Qt.length-1,Math.floor(St*Qt.length)),zt=St*Qt.length-Ht,nn=Qt[Ht],rn=1-zt,Qn=rn*rn*rn*nn.p1.x+3*rn*rn*zt*nn.cp1.x+3*rn*zt*zt*nn.cp2.x+zt*zt*zt*nn.p2.x,Pn=rn*rn*rn*nn.p1.y+3*rn*rn*zt*nn.cp1.y+3*rn*zt*zt*nn.cp2.y+zt*zt*zt*nn.p2.y,_i=.5+Math.sin($*2+St*8)*.35;It(Qn,Pn,_i,2)}},Nt=(Ae,_e,Te,Ge,rt,Pe,Ze,ct,Be,bt,jt,an)=>{const dn=Math.sin($*rt+Pe)*Ge,fn=[];fn.push({x:0,y:M*Ae+dn});for(let Qt=0;Qt<_e.length;Qt++){const Nn=w*_e[Qt],tn=M*(Ae-Te[Qt])+Math.cos($*rt+Qt+Pe)*(Ge*.7);fn.push({x:Nn,y:tn})}fn.push({x:w,y:M*(Ae+.03)+dn}),h.save(),h.beginPath(),h.moveTo(fn[0].x,fn[0].y);for(let Qt=1;Qt<fn.length;Qt++)h.lineTo(fn[Qt].x,fn[Qt].y);h.lineTo(w,M),h.lineTo(0,M),h.closePath(),h.fillStyle=Ze,h.fill(),h.strokeStyle=ct,h.lineWidth=Be,h.stroke(),h.restore()},at=(Ae,_e,Te,Ge,rt,Pe)=>{h.save(),h.globalCompositeOperation="screen",h.beginPath(),h.moveTo(0,M*Ae);const Ze=16;for(let ct=0;ct<=Ze;ct++){const Be=ct/Ze*w,bt=M*Ae+Math.sin(ct/Ze*Math.PI*2+$*Te+Ge)*_e;ct===0?h.moveTo(Be,bt):h.lineTo(Be,bt)}h.lineTo(w,M),h.lineTo(0,M),h.closePath(),h.fillStyle=rt,h.fill(),h.strokeStyle=Pe,h.lineWidth=1.8,h.stroke(),h.restore()},dt=X.horizonHeight||"balanced",R=dt==="low"?.08:dt==="high"?-.08:0,T=X.waveStrokeOpacity??1,ae=h.createLinearGradient(0,M*(.46+R),0,M*(.68+R));if(ae.addColorStop(0,"rgba(0, 0, 0, 0)"),F)ae.addColorStop(.5,"rgba(255, 255, 255, 0.25)");else{const Ae=re==="celestial-cyan"?"rgba(7, 31, 53, 0.45)":re==="supernova-sunset"?"rgba(36, 6, 28, 0.45)":re==="nocturne-silver"?"rgba(16, 16, 23, 0.45)":re==="emerald-aurora"?"rgba(5, 46, 20, 0.45)":re==="pure-pitch-black"?"rgba(6, 6, 6, 0.45)":"rgba(20, 10, 40, 0.45)";ae.addColorStop(.5,Ae)}ae.addColorStop(1,"rgba(0, 0, 0, 0)"),h.fillStyle=ae,h.fillRect(0,M*(.46+R),w,M*.22);const Le=h.createLinearGradient(0,M*(.55+R),0,M);Le.addColorStop(0,De[0]),Le.addColorStop(.5,De[1]),Le.addColorStop(1,De[2]);const Ee=h.createLinearGradient(0,M*(.63+R),0,M);Ee.addColorStop(0,Ke[0]),Ee.addColorStop(.5,Ke[1]),Ee.addColorStop(1,Ke[2]);const ze=h.createLinearGradient(0,M*(.71+R),0,M);ze.addColorStop(0,wt[0]),ze.addColorStop(.5,wt[1]),ze.addColorStop(1,wt[2]);const Ue=h.createLinearGradient(0,M*(.79+R),0,M);Ue.addColorStop(0,gt[0]),Ue.addColorStop(.5,gt[1]),Ue.addColorStop(1,gt[2]);const we=h.createLinearGradient(0,M*(.86+R),0,M);we.addColorStop(0,Mt[0]),we.addColorStop(.35,Mt[1]),we.addColorStop(.7,Mt[2]),we.addColorStop(1,Mt[3]);const Me=F?"rgba(160, 140, 120, 0.12)":"rgba(0,0,0,0.55)",Oe=F?"rgba(160, 140, 120, 0.16)":"rgba(0,0,0,0.65)",W=F?"rgba(160, 140, 120, 0.20)":"rgba(0,0,0,0.70)",Ce=F?"rgba(160, 140, 120, 0.22)":"rgba(0,0,0,0.75)",Se=F?"rgba(160, 140, 120, 0.26)":"rgba(0,0,0,0.80)";if(Gt==="mountains"?(Nt(.48+R,[.18,.5,.82],[.14,.17,.12],12*L,.35,0,Le,je,.8*T),Lt!=="airy"&&Nt(.58+R,[.32,.66,.9],[.12,.15,.11],14*L,.4,1.5,Ee,xt,.9*T),Nt(.68+R,[.15,.44,.75],[.11,.13,.1],15*L,.45,3.1,ze,yt,1*T),Lt==="dense"&&Nt(.78+R,[.28,.6,.86],[.09,.11,.08],14*L,.4,4.4,Ue,Pt,1.1*T),Nt(.88+R,[.4,.74],[.08,.07],12*L,.35,5.8,we,ge,1.2*T)):Gt==="aurora"?(at(.28+R*.5,32*L,.45,0,Le,je),Lt!=="airy"&&at(.4+R*.5,30*L,.5,1.6,Ee,xt),at(.54+R*.5,26*L,.55,3.2,ze,yt),Lt==="dense"&&at(.68+R*.5,22*L,.6,4.8,Ue,Pt),Ie([.86+R,.89+R,.85+R,.88+R],12*L,.35,6.2,we,ge,1.2*T)):Gt==="ocean"?(Ie([.62+R,.58+R,.65+R,.6+R],16*L,.65,0,Le,je,.8*T,Me,16,-6,[.3]),Lt!=="airy"&&Ie([.69+R,.73+R,.67+R,.71+R],18*L,.7,1.8,Ee,xt,.9*T,Oe,20,-7,[.55]),Ie([.76+R,.73+R,.79+R,.75+R],20*L,.75,3.4,ze,yt,1*T,W,24,-8,[.38,.82]),Lt==="dense"&&Ie([.83+R,.86+R,.81+R,.85+R],16*L,.65,4.9,Ue,Pt,1.1*T,Ce,28,-9,[.65]),Ie([.89+R,.87+R,.92+R,.88+R],14*L,.55,6.2,we,ge,1.2*T,Se,32,-10,[.5])):(Ie([.48+R,.56+R,.64+R,.68+R],16*L,.38,0,Le,je,.8*T,Me,16,-6,[.24,.68]),Lt!=="airy"&&Ie([.66+R,.62+R,.55+R,.6+R],18*L,.42,1.8,Ee,xt,.9*T,Oe,20,-7,[.35,.82]),Ie([.69+R,.76+R,.72+R,.76+R],19*L,.46,3.4,ze,yt,1*T,W,24,-8,[.42,.78]),Lt==="dense"&&Ie([.8+R,.77+R,.84+R,.8+R],16*L,.4,4.9,Ue,Pt,1.1*T,Ce,28,-9,[.18,.62]),Ie([.88+R,.91+R,.86+R,.9+R],13*L,.35,6.2,we,ge,1.2*T,Se,32,-10,[.35,.8])),X.showCrossStars){const Ae=.68+Math.sin($*1.8)*.22,_e=.6+Math.sin($*1.5+1.2)*.24,Te=.64+Math.sin($*1.9+2.5)*.2,Ge=.58+Math.sin($*1.4+3.8)*.25,rt=.52+Math.sin($*1.7+4.6)*.22;K(w*.5,M*.08,11,Ae),K(w*.18,M*.16,9.5,_e),K(w*.84,M*.2,10,Te),K(w*.72,M*.34,8.5,Ge),K(w*.08,M*.28,8,rt)}if(H(X.shootingStarMode||"occasional"),g.current){m.current=!1;return}m.current=!0,b=requestAnimationFrame(he)};return y.current=()=>{m.current||(m.current=!0,he())},b=requestAnimationFrame(he),()=>{y.current=null,m.current=!1,cancelAnimationFrame(b),window.removeEventListener("resize",z),window.removeEventListener("mousemove",D),document.removeEventListener("visibilitychange",ee)}},[]),u.jsx("canvas",{ref:s,className:"fixed inset-0 pointer-events-none z-0 select-none","aria-hidden":"true"})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ef="187",t_=0,m0=1,n_=2,Kl=1,i_=2,oo=3,Ps=0,Bn=1,Xi=2,va=0,uo=1,Cs=2,g0=3,x0=4,r_=5,ga=100,s_=101,a_=102,o_=103,l_=104,c_=200,u_=201,d_=202,f_=203,gm=204,xm=205,h_=206,p_=207,m_=208,g_=209,x_=210,v_=211,__=212,y_=213,S_=214,Pd=0,Dd=1,Ld=2,po=3,Id=4,kd=5,zd=6,Ud=7,vm=0,b_=1,w_=2,Ar=0,_m=1,ym=2,Sm=3,bm=4,wm=5,Mm=6,Em=7,Tm=300,ya=301,mo=302,td=303,nd=304,Sa=1e3,ai=1001,Fd=1002,On=1003,M_=1004,Cl=1005,oi=1006,id=1007,is=1008,vi=1009,Cm=1010,Am=1011,go=1012,Tf=1013,lr=1014,sr=1015,cr=1016,Cf=1017,Af=1018,ba=1020,Rm=35902,Nm=35899,Pm=1021,Dm=1022,ar=1023,ss=1026,rs=1027,Lm=1028,Rf=1029,Ds=1030,Nf=1031,Pf=1033,Zl=33776,Jl=33777,Ql=33778,ec=33779,Od=35840,Bd=35841,Hd=35842,Gd=35843,jd=36196,Vd=37492,Wd=37496,$d=37488,Xd=37489,sc=37490,Yd=37491,qd=37808,Kd=37809,Zd=37810,Jd=37811,Qd=37812,ef=37813,tf=37814,nf=37815,rf=37816,sf=37817,af=37818,of=37819,lf=37820,cf=37821,uf=36492,df=36494,ff=36495,hf=36283,pf=36284,ac=36285,mf=36286,E_=3200,gf=0,T_=1,ns="",xi="srgb",oc="srgb-linear",lc="linear",en="srgb",rd=7680,C_=519,A_=512,R_=513,N_=514,Im=515,P_=516,D_=517,km=518,zm=519,L_=35044,v0="300 es",qi=2e3,xo=2001;function I_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function cc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function k_(){const s=cc("canvas");return s.style.display="block",s}const _0={};function y0(...s){const e="THREE."+s.shift();console.log(e,...s)}function Um(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ct(...s){s=Um(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Jt(...s){s=Um(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function tc(...s){const e=s.join(" ");e in _0||(_0[e]=!0,Ct(...s))}function z_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const U_={[Pd]:Pd,[Ld]:zd,[Id]:Id,[po]:kd,[Dd]:Dd,[zd]:Ld,[Ud]:Ud,[kd]:po};class Ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,d=o.length;l<d;l++)o[l].call(this,e);e.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sd=Math.PI/180,xf=180/Math.PI;function yo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Wn[s&255]+Wn[s>>8&255]+Wn[s>>16&255]+Wn[s>>24&255]+"-"+Wn[e&255]+Wn[e>>8&255]+"-"+Wn[e>>16&15|64]+Wn[e>>24&255]+"-"+Wn[t&63|128]+Wn[t>>8&255]+"-"+Wn[t>>16&255]+Wn[t>>24&255]+Wn[r&255]+Wn[r>>8&255]+Wn[r>>16&255]+Wn[r>>24&255]).toLowerCase()}function $t(s,e,t){return Math.max(e,Math.min(t,s))}function F_(s,e){return(s%e+e)%e}function ad(s,e,t){return(1-t)*s+t*e}function O_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Df(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function B_(s,e){if(e.constructor===Float32Array)return s;const t=Df(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function H_(s,e){if(e.constructor===Float32Array)return s;const t=Df(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const Hf=class Hf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$t(this.x,e.x,t.x),this.y=$t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$t(this.x,e,t),this.y=$t(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar($t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos($t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,d=this.y-e.y;return this.x=l*r-d*o+e.x,this.y=l*o+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hf.prototype.isVector2=!0;let Vt=Hf;class Ea{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,d,f){let g=r[o+0],m=r[o+1],y=r[o+2],_=r[o+3],h=l[d+0],b=l[d+1],w=l[d+2],M=l[d+3];if(_!==M||g!==h||m!==b||y!==w){let v=g*h+m*b+y*w+_*M;v<0&&(h=-h,b=-b,w=-w,M=-M,v=-v);let S=1-f;if(v<.9995){const N=Math.acos(v),z=Math.sin(N);S=Math.sin(S*N)/z,f=Math.sin(f*N)/z,g=g*S+h*f,m=m*S+b*f,y=y*S+w*f,_=_*S+M*f}else{g=g*S+h*f,m=m*S+b*f,y=y*S+w*f,_=_*S+M*f;const N=1/Math.sqrt(g*g+m*m+y*y+_*_);g*=N,m*=N,y*=N,_*=N}}e[t]=g,e[t+1]=m,e[t+2]=y,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,o,l,d){const f=r[o],g=r[o+1],m=r[o+2],y=r[o+3],_=l[d],h=l[d+1],b=l[d+2],w=l[d+3];return e[t]=f*w+y*_+g*b-m*h,e[t+1]=g*w+y*h+m*_-f*b,e[t+2]=m*w+y*b+f*h-g*_,e[t+3]=y*w-f*_-g*h-m*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,d=e._order,f=Math.cos,g=Math.sin,m=f(r/2),y=f(o/2),_=f(l/2),h=g(r/2),b=g(o/2),w=g(l/2);switch(d){case"XYZ":this._x=h*y*_+m*b*w,this._y=m*b*_-h*y*w,this._z=m*y*w+h*b*_,this._w=m*y*_-h*b*w;break;case"YXZ":this._x=h*y*_+m*b*w,this._y=m*b*_-h*y*w,this._z=m*y*w-h*b*_,this._w=m*y*_+h*b*w;break;case"ZXY":this._x=h*y*_-m*b*w,this._y=m*b*_+h*y*w,this._z=m*y*w+h*b*_,this._w=m*y*_-h*b*w;break;case"ZYX":this._x=h*y*_-m*b*w,this._y=m*b*_+h*y*w,this._z=m*y*w-h*b*_,this._w=m*y*_+h*b*w;break;case"YZX":this._x=h*y*_+m*b*w,this._y=m*b*_+h*y*w,this._z=m*y*w-h*b*_,this._w=m*y*_-h*b*w;break;case"XZY":this._x=h*y*_-m*b*w,this._y=m*b*_-h*y*w,this._z=m*y*w+h*b*_,this._w=m*y*_+h*b*w;break;default:Ct("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],d=t[1],f=t[5],g=t[9],m=t[2],y=t[6],_=t[10],h=r+f+_;if(h>0){const b=.5/Math.sqrt(h+1);this._w=.25/b,this._x=(y-g)*b,this._y=(l-m)*b,this._z=(d-o)*b}else if(r>f&&r>_){const b=2*Math.sqrt(1+r-f-_);this._w=(y-g)/b,this._x=.25*b,this._y=(o+d)/b,this._z=(l+m)/b}else if(f>_){const b=2*Math.sqrt(1+f-r-_);this._w=(l-m)/b,this._x=(o+d)/b,this._y=.25*b,this._z=(g+y)/b}else{const b=2*Math.sqrt(1+_-r-f);this._w=(d-o)/b,this._x=(l+m)/b,this._y=(g+y)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,d=e._w,f=t._x,g=t._y,m=t._z,y=t._w;return this._x=r*y+d*f+o*m-l*g,this._y=o*y+d*g+l*f-r*m,this._z=l*y+d*m+r*g-o*f,this._w=d*y-r*f-o*g-l*m,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,d=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,d=-d,f=-f);let g=1-t;if(f<.9995){const m=Math.acos(f),y=Math.sin(m);g=Math.sin(g*m)/y,t=Math.sin(t*m)/y,this._x=this._x*g+r*t,this._y=this._y*g+o*t,this._z=this._z*g+l*t,this._w=this._w*g+d*t,this._onChangeCallback()}else this._x=this._x*g+r*t,this._y=this._y*g+o*t,this._z=this._z*g+l*t,this._w=this._w*g+d*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Gf=class Gf{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(S0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(S0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,d=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*d,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*d,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*d,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,d=e.y,f=e.z,g=e.w,m=2*(d*o-f*r),y=2*(f*t-l*o),_=2*(l*r-d*t);return this.x=t+g*m+d*_-f*y,this.y=r+g*y+f*m-l*_,this.z=o+g*_+l*y-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$t(this.x,e.x,t.x),this.y=$t(this.y,e.y,t.y),this.z=$t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$t(this.x,e,t),this.y=$t(this.y,e,t),this.z=$t(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar($t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,d=t.x,f=t.y,g=t.z;return this.x=o*g-l*f,this.y=l*d-r*g,this.z=r*f-o*d,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return od.copy(this).projectOnVector(e),this.sub(od)}reflect(e){return this.sub(od.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos($t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gf.prototype.isVector3=!0;let ye=Gf;const od=new ye,S0=new Ea,jf=class jf{constructor(e,t,r,o,l,d,f,g,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,d,f,g,m)}set(e,t,r,o,l,d,f,g,m){const y=this.elements;return y[0]=e,y[1]=o,y[2]=f,y[3]=t,y[4]=l,y[5]=g,y[6]=r,y[7]=d,y[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,d=r[0],f=r[3],g=r[6],m=r[1],y=r[4],_=r[7],h=r[2],b=r[5],w=r[8],M=o[0],v=o[3],S=o[6],N=o[1],z=o[4],P=o[7],U=o[2],I=o[5],E=o[8];return l[0]=d*M+f*N+g*U,l[3]=d*v+f*z+g*I,l[6]=d*S+f*P+g*E,l[1]=m*M+y*N+_*U,l[4]=m*v+y*z+_*I,l[7]=m*S+y*P+_*E,l[2]=h*M+b*N+w*U,l[5]=h*v+b*z+w*I,l[8]=h*S+b*P+w*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],f=e[5],g=e[6],m=e[7],y=e[8];return t*d*y-t*f*m-r*l*y+r*f*g+o*l*m-o*d*g}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],f=e[5],g=e[6],m=e[7],y=e[8],_=y*d-f*m,h=f*g-y*l,b=m*l-d*g,w=t*_+r*h+o*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=_*M,e[1]=(o*m-y*r)*M,e[2]=(f*r-o*d)*M,e[3]=h*M,e[4]=(y*t-o*g)*M,e[5]=(o*l-f*t)*M,e[6]=b*M,e[7]=(r*g-m*t)*M,e[8]=(d*t-r*l)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,d,f){const g=Math.cos(l),m=Math.sin(l);return this.set(r*g,r*m,-r*(g*d+m*f)+d+e,-o*m,o*g,-o*(-m*d+g*f)+f+t,0,0,1),this}scale(e,t){return tc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ld.makeScale(e,t)),this}rotate(e){return tc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ld.makeRotation(-e)),this}translate(e,t){return tc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ld.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};jf.prototype.isMatrix3=!0;let Rt=jf;const ld=new Rt,b0=new Rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),w0=new Rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function G_(){const s={enabled:!0,workingColorSpace:oc,spaces:{},convert:function(o,l,d){return this.enabled===!1||l===d||!l||!d||(this.spaces[l].transfer===en&&(o.r=Rr(o.r),o.g=Rr(o.g),o.b=Rr(o.b)),this.spaces[l].primaries!==this.spaces[d].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===en&&(o.r=_a(o.r),o.g=_a(o.g),o.b=_a(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ns?lc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,d){return o.copy(this.spaces[d].fromXYZ).multiply(this.spaces[l].toXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[oc]:{primaries:e,whitePoint:r,transfer:lc,toXYZ:b0,fromXYZ:w0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:e,whitePoint:r,transfer:en,toXYZ:b0,fromXYZ:w0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),s}const Wt=G_();function Rr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _a(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ra;class j_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ra===void 0&&(ra=cc("canvas")),ra.width=e.width,ra.height=e.height;const o=ra.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=ra}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let d=0;d<l.length;d++)l[d]=Rr(l[d]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Rr(t[r]/255)*255):t[r]=Rr(t[r]);return{data:t,width:e.width,height:e.height}}else return Ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let V_=0;class Lf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=yo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let d=0,f=o.length;d<f;d++)o[d].isDataTexture?l.push(cd(o[d].image)):l.push(cd(o[d]))}else l=cd(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function cd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?j_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ct("Texture: Unable to serialize Texture."),{})}let W_=0;const ud=new ye;class Xn extends Ls{constructor(e=Xn.DEFAULT_IMAGE,t=Xn.DEFAULT_MAPPING,r=ai,o=ai,l=oi,d=is,f=ar,g=vi,m=Xn.DEFAULT_ANISOTROPY,y=ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=yo(),this.name="",this.source=new Lf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=d,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=g,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ud).x}get height(){return this.source.getSize(ud).y}get depth(){return this.source.getSize(ud).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){Ct(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){Ct(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sa:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case Fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sa:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case Fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Tm;Xn.DEFAULT_ANISOTROPY=1;const Vf=class Vf{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,d=e.elements;return this.x=d[0]*t+d[4]*r+d[8]*o+d[12]*l,this.y=d[1]*t+d[5]*r+d[9]*o+d[13]*l,this.z=d[2]*t+d[6]*r+d[10]*o+d[14]*l,this.w=d[3]*t+d[7]*r+d[11]*o+d[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const g=e.elements,m=g[0],y=g[4],_=g[8],h=g[1],b=g[5],w=g[9],M=g[2],v=g[6],S=g[10];if(Math.abs(y-h)<.01&&Math.abs(_-M)<.01&&Math.abs(w-v)<.01){if(Math.abs(y+h)<.1&&Math.abs(_+M)<.1&&Math.abs(w+v)<.1&&Math.abs(m+b+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const z=(m+1)/2,P=(b+1)/2,U=(S+1)/2,I=(y+h)/4,E=(_+M)/4,D=(w+v)/4;return z>P&&z>U?z<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(z),o=I/r,l=E/r):P>U?P<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),r=I/o,l=D/o):U<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(U),r=E/l,o=D/l),this.set(r,o,l,t),this}let N=Math.sqrt((v-w)*(v-w)+(_-M)*(_-M)+(h-y)*(h-y));return Math.abs(N)<.001&&(N=1),this.x=(v-w)/N,this.y=(_-M)/N,this.z=(h-y)/N,this.w=Math.acos((m+b+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$t(this.x,e.x,t.x),this.y=$t(this.y,e.y,t.y),this.z=$t(this.z,e.z,t.z),this.w=$t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$t(this.x,e,t),this.y=$t(this.y,e,t),this.z=$t(this.z,e,t),this.w=$t(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar($t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Vf.prototype.isVector4=!0;let xn=Vf;class $_ extends Ls{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new xn(0,0,e,t),this.scissorTest=!1,this.viewport=new xn(0,0,e,t),this.textures=[];const o=r.count;for(let l=0;l<o;l++)this.textures[l]=new Xn({width:e,height:t,depth:r.depth}),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:oi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Lf(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class or extends $_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Fm extends Xn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=On,this.minFilter=On,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class X_ extends Xn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=On,this.minFilter=On,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const pc=class pc{constructor(e,t,r,o,l,d,f,g,m,y,_,h,b,w,M,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,d,f,g,m,y,_,h,b,w,M,v)}set(e,t,r,o,l,d,f,g,m,y,_,h,b,w,M,v){const S=this.elements;return S[0]=e,S[4]=t,S[8]=r,S[12]=o,S[1]=l,S[5]=d,S[9]=f,S[13]=g,S[2]=m,S[6]=y,S[10]=_,S[14]=h,S[3]=b,S[7]=w,S[11]=M,S[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/sa.setFromMatrixColumn(e,0).length(),l=1/sa.setFromMatrixColumn(e,1).length(),d=1/sa.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*d,t[9]=r[9]*d,t[10]=r[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,d=Math.cos(r),f=Math.sin(r),g=Math.cos(o),m=Math.sin(o),y=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const h=d*y,b=d*_,w=f*y,M=f*_;t[0]=g*y,t[4]=-g*_,t[8]=m,t[1]=b+w*m,t[5]=h-M*m,t[9]=-f*g,t[2]=M-h*m,t[6]=w+b*m,t[10]=d*g}else if(e.order==="YXZ"){const h=g*y,b=g*_,w=m*y,M=m*_;t[0]=h+M*f,t[4]=w*f-b,t[8]=d*m,t[1]=d*_,t[5]=d*y,t[9]=-f,t[2]=b*f-w,t[6]=M+h*f,t[10]=d*g}else if(e.order==="ZXY"){const h=g*y,b=g*_,w=m*y,M=m*_;t[0]=h-M*f,t[4]=-d*_,t[8]=w+b*f,t[1]=b+w*f,t[5]=d*y,t[9]=M-h*f,t[2]=-d*m,t[6]=f,t[10]=d*g}else if(e.order==="ZYX"){const h=d*y,b=d*_,w=f*y,M=f*_;t[0]=g*y,t[4]=w*m-b,t[8]=h*m+M,t[1]=g*_,t[5]=M*m+h,t[9]=b*m-w,t[2]=-m,t[6]=f*g,t[10]=d*g}else if(e.order==="YZX"){const h=d*g,b=d*m,w=f*g,M=f*m;t[0]=g*y,t[4]=M-h*_,t[8]=w*_+b,t[1]=_,t[5]=d*y,t[9]=-f*y,t[2]=-m*y,t[6]=b*_+w,t[10]=h-M*_}else if(e.order==="XZY"){const h=d*g,b=d*m,w=f*g,M=f*m;t[0]=g*y,t[4]=-_,t[8]=m*y,t[1]=h*_+M,t[5]=d*y,t[9]=b*_-w,t[2]=w*_-b,t[6]=f*y,t[10]=M*_+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Y_,e,q_)}lookAt(e,t,r){const o=this.elements;return mi.subVectors(e,t),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),qr.crossVectors(r,mi),qr.lengthSq()===0&&(Math.abs(r.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),qr.crossVectors(r,mi)),qr.normalize(),Al.crossVectors(mi,qr),o[0]=qr.x,o[4]=Al.x,o[8]=mi.x,o[1]=qr.y,o[5]=Al.y,o[9]=mi.y,o[2]=qr.z,o[6]=Al.z,o[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,d=r[0],f=r[4],g=r[8],m=r[12],y=r[1],_=r[5],h=r[9],b=r[13],w=r[2],M=r[6],v=r[10],S=r[14],N=r[3],z=r[7],P=r[11],U=r[15],I=o[0],E=o[4],D=o[8],K=o[12],G=o[1],V=o[5],H=o[9],$=o[13],B=o[2],ee=o[6],he=o[10],X=o[14],ie=o[3],O=o[7],Q=o[11],k=o[15];return l[0]=d*I+f*G+g*B+m*ie,l[4]=d*E+f*V+g*ee+m*O,l[8]=d*D+f*H+g*he+m*Q,l[12]=d*K+f*$+g*X+m*k,l[1]=y*I+_*G+h*B+b*ie,l[5]=y*E+_*V+h*ee+b*O,l[9]=y*D+_*H+h*he+b*Q,l[13]=y*K+_*$+h*X+b*k,l[2]=w*I+M*G+v*B+S*ie,l[6]=w*E+M*V+v*ee+S*O,l[10]=w*D+M*H+v*he+S*Q,l[14]=w*K+M*$+v*X+S*k,l[3]=N*I+z*G+P*B+U*ie,l[7]=N*E+z*V+P*ee+U*O,l[11]=N*D+z*H+P*he+U*Q,l[15]=N*K+z*$+P*X+U*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],d=e[1],f=e[5],g=e[9],m=e[13],y=e[2],_=e[6],h=e[10],b=e[14],w=e[3],M=e[7],v=e[11],S=e[15],N=g*b-m*h,z=f*b-m*_,P=f*h-g*_,U=d*b-m*y,I=d*h-g*y,E=d*_-f*y;return t*(M*N-v*z+S*P)-r*(w*N-v*U+S*I)+o*(w*z-M*U+S*E)-l*(w*P-M*I+v*E)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],d=e[5],f=e[9],g=e[2],m=e[6],y=e[10];return t*(d*y-f*m)-r*(l*y-f*g)+o*(l*m-d*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],f=e[5],g=e[6],m=e[7],y=e[8],_=e[9],h=e[10],b=e[11],w=e[12],M=e[13],v=e[14],S=e[15],N=t*f-r*d,z=t*g-o*d,P=t*m-l*d,U=r*g-o*f,I=r*m-l*f,E=o*m-l*g,D=y*M-_*w,K=y*v-h*w,G=y*S-b*w,V=_*v-h*M,H=_*S-b*M,$=h*S-b*v,B=N*$-z*H+P*V+U*G-I*K+E*D;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/B;return e[0]=(f*$-g*H+m*V)*ee,e[1]=(o*H-r*$-l*V)*ee,e[2]=(M*E-v*I+S*U)*ee,e[3]=(h*I-_*E-b*U)*ee,e[4]=(g*G-d*$-m*K)*ee,e[5]=(t*$-o*G+l*K)*ee,e[6]=(v*P-w*E-S*z)*ee,e[7]=(y*E-h*P+b*z)*ee,e[8]=(d*H-f*G+m*D)*ee,e[9]=(r*G-t*H-l*D)*ee,e[10]=(w*I-M*P+S*N)*ee,e[11]=(_*P-y*I-b*N)*ee,e[12]=(f*K-d*V-g*D)*ee,e[13]=(t*V-r*K+o*D)*ee,e[14]=(M*z-w*U-v*N)*ee,e[15]=(y*U-_*z+h*N)*ee,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,d=e.x,f=e.y,g=e.z,m=l*d,y=l*f;return this.set(m*d+r,m*f-o*g,m*g+o*f,0,m*f+o*g,y*f+r,y*g-o*d,0,m*g-o*f,y*g+o*d,l*g*g+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,d){return this.set(1,r,l,0,e,1,d,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,d=t._y,f=t._z,g=t._w,m=l+l,y=d+d,_=f+f,h=l*m,b=l*y,w=l*_,M=d*y,v=d*_,S=f*_,N=g*m,z=g*y,P=g*_,U=r.x,I=r.y,E=r.z;return o[0]=(1-(M+S))*U,o[1]=(b+P)*U,o[2]=(w-z)*U,o[3]=0,o[4]=(b-P)*I,o[5]=(1-(h+S))*I,o[6]=(v+N)*I,o[7]=0,o[8]=(w+z)*E,o[9]=(v-N)*E,o[10]=(1-(h+M))*E,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let d=sa.set(o[0],o[1],o[2]).length();const f=sa.set(o[4],o[5],o[6]).length(),g=sa.set(o[8],o[9],o[10]).length();l<0&&(d=-d),Bi.copy(this);const m=1/d,y=1/f,_=1/g;return Bi.elements[0]*=m,Bi.elements[1]*=m,Bi.elements[2]*=m,Bi.elements[4]*=y,Bi.elements[5]*=y,Bi.elements[6]*=y,Bi.elements[8]*=_,Bi.elements[9]*=_,Bi.elements[10]*=_,t.setFromRotationMatrix(Bi),r.x=d,r.y=f,r.z=g,this}makePerspective(e,t,r,o,l,d,f=qi,g=!1){const m=this.elements,y=2*l/(t-e),_=2*l/(r-o),h=(t+e)/(t-e),b=(r+o)/(r-o);let w,M;if(g)w=l/(d-l),M=d*l/(d-l);else if(f===qi)w=-(d+l)/(d-l),M=-2*d*l/(d-l);else if(f===xo)w=-d/(d-l),M=-d*l/(d-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=y,m[4]=0,m[8]=h,m[12]=0,m[1]=0,m[5]=_,m[9]=b,m[13]=0,m[2]=0,m[6]=0,m[10]=w,m[14]=M,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,o,l,d,f=qi,g=!1){const m=this.elements,y=2/(t-e),_=2/(r-o),h=-(t+e)/(t-e),b=-(r+o)/(r-o);let w,M;if(g)w=1/(d-l),M=d/(d-l);else if(f===qi)w=-2/(d-l),M=-(d+l)/(d-l);else if(f===xo)w=-1/(d-l),M=-l/(d-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=y,m[4]=0,m[8]=0,m[12]=h,m[1]=0,m[5]=_,m[9]=0,m[13]=b,m[2]=0,m[6]=0,m[10]=w,m[14]=M,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};pc.prototype.isMatrix4=!0;let vn=pc;const sa=new ye,Bi=new vn,Y_=new ye(0,0,0),q_=new ye(1,1,1),qr=new ye,Al=new ye,mi=new ye,M0=new vn,E0=new Ea;class as{constructor(e=0,t=0,r=0,o=as.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],d=o[4],f=o[8],g=o[1],m=o[5],y=o[9],_=o[2],h=o[6],b=o[10];switch(t){case"XYZ":this._y=Math.asin($t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-y,b),this._z=Math.atan2(-d,l)):(this._x=Math.atan2(h,m),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(f,b),this._z=Math.atan2(g,m)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin($t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-_,b),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(g,l));break;case"ZYX":this._y=Math.asin(-$t(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(h,b),this._z=Math.atan2(g,l)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin($t(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-y,m),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,b));break;case"XZY":this._z=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-y,b),this._y=0);break;default:Ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return M0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(M0,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return E0.setFromEuler(this),this.setFromQuaternion(E0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}as.DEFAULT_ORDER="XYZ";class Om{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let K_=0;const T0=new ye,aa=new Ea,yr=new vn,Rl=new ye,no=new ye,Z_=new ye,J_=new Ea,C0=new ye(1,0,0),A0=new ye(0,1,0),R0=new ye(0,0,1),N0={type:"added"},Q_={type:"removed"},oa={type:"childadded",child:null},dd={type:"childremoved",child:null};class Yn extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yn.DEFAULT_UP.clone();const e=new ye,t=new as,r=new Ea,o=new ye(1,1,1);function l(){r.setFromEuler(t,!1)}function d(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new vn},normalMatrix:{value:new Rt}}),this.matrix=new vn,this.matrixWorld=new vn,this.matrixAutoUpdate=Yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Om,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return aa.setFromAxisAngle(e,t),this.quaternion.multiply(aa),this}rotateOnWorldAxis(e,t){return aa.setFromAxisAngle(e,t),this.quaternion.premultiply(aa),this}rotateX(e){return this.rotateOnAxis(C0,e)}rotateY(e){return this.rotateOnAxis(A0,e)}rotateZ(e){return this.rotateOnAxis(R0,e)}translateOnAxis(e,t){return T0.copy(e).applyQuaternion(this.quaternion),this.position.add(T0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(C0,e)}translateY(e){return this.translateOnAxis(A0,e)}translateZ(e){return this.translateOnAxis(R0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Rl.copy(e):Rl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yr.lookAt(no,Rl,this.up):yr.lookAt(Rl,no,this.up),this.quaternion.setFromRotationMatrix(yr),o&&(yr.extractRotation(o.matrixWorld),aa.setFromRotationMatrix(yr),this.quaternion.premultiply(aa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Jt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(N0),oa.child=e,this.dispatchEvent(oa),oa.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Q_),dd.child=e,this.dispatchEvent(dd),dd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yr.multiply(e.parent.matrixWorld)),e.applyMatrix4(yr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(N0),oa.child=e,this.dispatchEvent(oa),oa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectByProperty(e,t);if(d!==void 0)return d}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,d=o.length;l<d;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,e,Z_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,J_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let d=0,f=l.length;d<f;d++)l[d].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,g){return f[g.uuid]===void 0&&(f[g.uuid]=g.toJSON(e)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const g=f.shapes;if(Array.isArray(g))for(let m=0,y=g.length;m<y;m++){const _=g[m];l(e.shapes,_)}else l(e.shapes,g)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let g=0,m=this.material.length;g<m;g++)f.push(l(e.materials,this.material[g]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const g=this.animations[f];o.animations.push(l(e.animations,g))}}if(t){const f=d(e.geometries),g=d(e.materials),m=d(e.textures),y=d(e.images),_=d(e.shapes),h=d(e.skeletons),b=d(e.animations),w=d(e.nodes);f.length>0&&(r.geometries=f),g.length>0&&(r.materials=g),m.length>0&&(r.textures=m),y.length>0&&(r.images=y),_.length>0&&(r.shapes=_),h.length>0&&(r.skeletons=h),b.length>0&&(r.animations=b),w.length>0&&(r.nodes=w)}return r.object=o,r;function d(f){const g=[];for(const m in f){const y=f[m];delete y.metadata,g.push(y)}return g}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Yn.DEFAULT_UP=new ye(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class lo extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ey={type:"move"};class fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ye,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ye),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ye,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ye,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,d=null;const f=this._targetRay,g=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const M of e.hand.values()){const v=t.getJointPose(M,r),S=this._getHandJoint(m,M);v!==null&&(S.matrix.fromArray(v.transform.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=v.radius),S.visible=v!==null}const y=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],h=y.position.distanceTo(_.position),b=.02,w=.005;m.inputState.pinching&&h>b+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&h<=b-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else g!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(g.matrix.fromArray(l.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,l.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(l.linearVelocity)):g.hasLinearVelocity=!1,l.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(l.angularVelocity)):g.hasAngularVelocity=!1,g.eventsEnabled&&g.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(ey)))}return f!==null&&(f.visible=o!==null),g!==null&&(g.visible=l!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new lo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Bm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kr={h:0,s:0,l:0},Nl={h:0,s:0,l:0};function hd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Bt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Wt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Wt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Wt.workingColorSpace){if(e=F_(e,1),t=$t(t,0,1),r=$t(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,d=2*r-l;this.r=hd(d,l,e+1/3),this.g=hd(d,l,e),this.b=hd(d,l,e-1/3)}return Wt.colorSpaceToWorking(this,o),this}setStyle(e,t=xi){function r(l){l!==void 0&&parseFloat(l)<1&&Ct("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const d=o[1],f=o[2];switch(d){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseFloat(l[1]))/100,Math.min(100,parseFloat(l[2]))/100,Math.min(100,parseFloat(l[3]))/100,t);break;case"hsl":case"hsla":if(l=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:Ct("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],d=l.length;if(d===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(d===6)return this.setHex(parseInt(l,16),t);Ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xi){const r=Bm[e.toLowerCase()];return r!==void 0?this.setHex(r,t):Ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}copyLinearToSRGB(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return Wt.workingToColorSpace($n.copy(this),e),Math.round($t($n.r*255,0,255))*65536+Math.round($t($n.g*255,0,255))*256+Math.round($t($n.b*255,0,255))}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Wt.workingColorSpace){Wt.workingToColorSpace($n.copy(this),t);const r=$n.r,o=$n.g,l=$n.b,d=Math.max(r,o,l),f=Math.min(r,o,l);let g,m;const y=(f+d)/2;if(f===d)g=0,m=0;else{const _=d-f;switch(m=y<=.5?_/(d+f):_/(2-d-f),d){case r:g=(o-l)/_+(o<l?6:0);break;case o:g=(l-r)/_+2;break;case l:g=(r-o)/_+4;break}g/=6}return e.h=g,e.s=m,e.l=y,e}getRGB(e,t=Wt.workingColorSpace){return Wt.workingToColorSpace($n.copy(this),t),e.r=$n.r,e.g=$n.g,e.b=$n.b,e}getStyle(e=xi){Wt.workingToColorSpace($n.copy(this),e);const t=$n.r,r=$n.g,o=$n.b;return e!==xi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Kr),this.setHSL(Kr.h+e,Kr.s+t,Kr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Kr),e.getHSL(Nl);const r=ad(Kr.h,Nl.h,t),o=ad(Kr.s,Nl.s,t),l=ad(Kr.l,Nl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $n=new Bt;Bt.NAMES=Bm;class ty extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new as,this.environmentIntensity=1,this.environmentRotation=new as,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Hi=new ye,Sr=new ye,pd=new ye,br=new ye,la=new ye,ca=new ye,P0=new ye,md=new ye,gd=new ye,xd=new ye,vd=new xn,_d=new xn,yd=new xn;class Yi{constructor(e=new ye,t=new ye,r=new ye){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Hi.subVectors(e,t),o.cross(Hi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Hi.subVectors(o,t),Sr.subVectors(r,t),pd.subVectors(e,t);const d=Hi.dot(Hi),f=Hi.dot(Sr),g=Hi.dot(pd),m=Sr.dot(Sr),y=Sr.dot(pd),_=d*m-f*f;if(_===0)return l.set(0,0,0),null;const h=1/_,b=(m*g-f*y)*h,w=(d*y-f*g)*h;return l.set(1-b-w,w,b)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,br)===null?!1:br.x>=0&&br.y>=0&&br.x+br.y<=1}static getInterpolation(e,t,r,o,l,d,f,g){return this.getBarycoord(e,t,r,o,br)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(l,br.x),g.addScaledVector(d,br.y),g.addScaledVector(f,br.z),g)}static getInterpolatedAttribute(e,t,r,o,l,d){return vd.setScalar(0),_d.setScalar(0),yd.setScalar(0),vd.fromBufferAttribute(e,t),_d.fromBufferAttribute(e,r),yd.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(vd,l.x),d.addScaledVector(_d,l.y),d.addScaledVector(yd,l.z),d}static isFrontFacing(e,t,r,o){return Hi.subVectors(r,t),Sr.subVectors(e,t),Hi.cross(Sr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hi.subVectors(this.c,this.b),Sr.subVectors(this.a,this.b),Hi.cross(Sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Yi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let d,f;la.subVectors(o,r),ca.subVectors(l,r),md.subVectors(e,r);const g=la.dot(md),m=ca.dot(md);if(g<=0&&m<=0)return t.copy(r);gd.subVectors(e,o);const y=la.dot(gd),_=ca.dot(gd);if(y>=0&&_<=y)return t.copy(o);const h=g*_-y*m;if(h<=0&&g>=0&&y<=0&&g-y>0)return d=g/(g-y),t.copy(r).addScaledVector(la,d);xd.subVectors(e,l);const b=la.dot(xd),w=ca.dot(xd);if(w>=0&&b<=w)return t.copy(l);const M=b*m-g*w;if(M<=0&&m>=0&&w<=0)return f=m/(m-w),t.copy(r).addScaledVector(ca,f);const v=y*w-b*_;if(v<=0&&_-y>=0&&b-w>=0)return P0.subVectors(l,o),f=(_-y)/(_-y+(b-w)),t.copy(o).addScaledVector(P0,f);const S=1/(v+M+h);return d=M*S,f=h*S,t.copy(r).addScaledVector(la,d).addScaledVector(ca,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class So{constructor(e=new ye(1/0,1/0,1/0),t=new ye(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let d=0,f=l.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,Gi):Gi.fromBufferAttribute(l,d),Gi.applyMatrix4(e.matrixWorld),this.expandByPoint(Gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Pl.copy(r.boundingBox)),Pl.applyMatrix4(e.matrixWorld),this.union(Pl)}const o=e.children;for(let l=0,d=o.length;l<d;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gi),Gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(io),Dl.subVectors(this.max,io),ua.subVectors(e.a,io),da.subVectors(e.b,io),fa.subVectors(e.c,io),Zr.subVectors(da,ua),Jr.subVectors(fa,da),bs.subVectors(ua,fa);let t=[0,-Zr.z,Zr.y,0,-Jr.z,Jr.y,0,-bs.z,bs.y,Zr.z,0,-Zr.x,Jr.z,0,-Jr.x,bs.z,0,-bs.x,-Zr.y,Zr.x,0,-Jr.y,Jr.x,0,-bs.y,bs.x,0];return!Sd(t,ua,da,fa,Dl)||(t=[1,0,0,0,1,0,0,0,1],!Sd(t,ua,da,fa,Dl))?!1:(Ll.crossVectors(Zr,Jr),t=[Ll.x,Ll.y,Ll.z],Sd(t,ua,da,fa,Dl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wr=[new ye,new ye,new ye,new ye,new ye,new ye,new ye,new ye],Gi=new ye,Pl=new So,ua=new ye,da=new ye,fa=new ye,Zr=new ye,Jr=new ye,bs=new ye,io=new ye,Dl=new ye,Ll=new ye,ws=new ye;function Sd(s,e,t,r,o){for(let l=0,d=s.length-3;l<=d;l+=3){ws.fromArray(s,l);const f=o.x*Math.abs(ws.x)+o.y*Math.abs(ws.y)+o.z*Math.abs(ws.z),g=e.dot(ws),m=t.dot(ws),y=r.dot(ws);if(Math.max(-Math.max(g,m,y),Math.min(g,m,y))>f)return!1}return!0}const wn=new ye,Il=new Vt;let ny=0;class As extends Ls{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ny++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=L_,this.updateRanges=[],this.gpuType=sr,this.version=0,this._normalizationScale=e!==void 0?Df(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Il.fromBufferAttribute(this,t),Il.applyMatrix3(e),this.setXY(t,Il.x,Il.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix3(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):B_(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):H_(e,this.array)}}class Hm extends As{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Gm extends As{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class zn extends As{constructor(e,t,r){super(new Float32Array(e),t,r)}}const iy=new So,ro=new ye,bd=new ye;class If{constructor(e=new ye,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):iy.setFromPoints(e).getCenter(r);let o=0;for(let l=0,d=e.length;l<d;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ro.subVectors(e,this.center);const t=ro.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(ro,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ro.copy(e.center).add(bd)),this.expandByPoint(ro.copy(e.center).sub(bd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ry=0;const Ri=new vn,wd=new Yn,ha=new ye,gi=new So,so=new So,kn=new ye;class ur extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(I_(e)?Gm:Hm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new Rt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,t,r){return Ri.makeTranslation(e,t,r),this.applyMatrix4(Ri),this}scale(e,t,r){return Ri.makeScale(e,t,r),this.applyMatrix4(Ri),this}lookAt(e){return wd.lookAt(e),wd.updateMatrix(),this.applyMatrix4(wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ha).negate(),this.translate(ha.x,ha.y,ha.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const d=e[o];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new zn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&Ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new So);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ye(-1/0,-1/0,-1/0),new ye(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];gi.setFromBufferAttribute(l),this.morphTargetsRelative?(kn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(kn),kn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(kn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new If);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ye,1/0);return}if(e){const r=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),t)for(let l=0,d=t.length;l<d;l++){const f=t[l];so.setFromBufferAttribute(f),this.morphTargetsRelative?(kn.addVectors(gi.min,so.min),gi.expandByPoint(kn),kn.addVectors(gi.max,so.max),gi.expandByPoint(kn)):(gi.expandByPoint(so.min),gi.expandByPoint(so.max))}gi.getCenter(r);let o=0;for(let l=0,d=e.count;l<d;l++)kn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(kn));if(t)for(let l=0,d=t.length;l<d;l++){const f=t[l],g=this.morphTargetsRelative;for(let m=0,y=f.count;m<y;m++)kn.fromBufferAttribute(f,m),g&&(ha.fromBufferAttribute(e,m),kn.add(ha)),o=Math.max(o,r.distanceToSquared(kn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new As(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const f=[],g=[],m=new Uint8Array(r.count);for(let K=0;K<r.count;K++)f[K]=new ye,g[K]=new ye;const y=new ye,_=new ye,h=new ye,b=new Vt,w=new Vt,M=new Vt,v=new ye,S=new ye;function N(K,G,V){m[K]=m[G]=m[V]=1,y.fromBufferAttribute(r,K),_.fromBufferAttribute(r,G),h.fromBufferAttribute(r,V),b.fromBufferAttribute(l,K),w.fromBufferAttribute(l,G),M.fromBufferAttribute(l,V),_.sub(y),h.sub(y),w.sub(b),M.sub(b);const H=1/(w.x*M.y-M.x*w.y);isFinite(H)&&(v.copy(_).multiplyScalar(M.y).addScaledVector(h,-w.y).multiplyScalar(H),S.copy(h).multiplyScalar(w.x).addScaledVector(_,-M.x).multiplyScalar(H),f[K].add(v),f[G].add(v),f[V].add(v),g[K].add(S),g[G].add(S),g[V].add(S))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let K=0,G=z.length;K<G;++K){const V=z[K],H=V.start,$=V.count;for(let B=H,ee=H+$;B<ee;B+=3)N(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const P=new ye,U=new ye,I=new ye,E=new ye;function D(K){I.fromBufferAttribute(o,K),E.copy(I);const G=f[K];P.copy(G),P.sub(I.multiplyScalar(I.dot(G))).normalize(),U.crossVectors(E,G);const H=U.dot(g[K])<0?-1:1;d.setXYZW(K,P.x,P.y,P.z,H)}for(let K=0,G=r.count;K<G;++K)m[K]&&D(K);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new As(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let h=0,b=r.count;h<b;h++)r.setXYZ(h,0,0,0);const o=new ye,l=new ye,d=new ye,f=new ye,g=new ye,m=new ye,y=new ye,_=new ye;if(e)for(let h=0,b=e.count;h<b;h+=3){const w=e.getX(h+0),M=e.getX(h+1),v=e.getX(h+2);o.fromBufferAttribute(t,w),l.fromBufferAttribute(t,M),d.fromBufferAttribute(t,v),y.subVectors(d,l),_.subVectors(o,l),y.cross(_),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,M),m.fromBufferAttribute(r,v),f.add(y),g.add(y),m.add(y),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(M,g.x,g.y,g.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let h=0,b=t.count;h<b;h+=3)o.fromBufferAttribute(t,h+0),l.fromBufferAttribute(t,h+1),d.fromBufferAttribute(t,h+2),y.subVectors(d,l),_.subVectors(o,l),y.cross(_),r.setXYZ(h+0,y.x,y.y,y.z),r.setXYZ(h+1,y.x,y.y,y.z),r.setXYZ(h+2,y.x,y.y,y.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)kn.fromBufferAttribute(e,t),kn.normalize(),e.setXYZ(t,kn.x,kn.y,kn.z)}toNonIndexed(){function e(f,g){const m=f.array,y=f.itemSize,_=f.normalized,h=new m.constructor(g.length*y);let b=0,w=0;for(let M=0,v=g.length;M<v;M++){f.isInterleavedBufferAttribute?b=g[M]*f.data.stride+f.offset:b=g[M]*y;for(let S=0;S<y;S++)h[w++]=m[b++]}return new As(h,y,_)}if(this.index===null)return Ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ur,r=this.index.array,o=this.attributes;for(const f in o){const g=o[f],m=e(g,r);t.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const g=[],m=l[f];for(let y=0,_=m.length;y<_;y++){const h=m[y],b=e(h,r);g.push(b)}t.morphAttributes[f]=g}t.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,g=d.length;f<g;f++){const m=d[f];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const g=this.parameters;for(const m in g)g[m]!==void 0&&(e[m]=g[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const g in r){const m=r[g];e.data.attributes[g]=m.toJSON(e.data)}const o={};let l=!1;for(const g in this.morphAttributes){const m=this.morphAttributes[g],y=[];for(let _=0,h=m.length;_<h;_++){const b=m[_];y.push(b.toJSON(e.data))}y.length>0&&(o[g]=y,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const y=o[m];this.setAttribute(m,y.clone(t))}const l=e.morphAttributes;for(const m in l){const y=[],_=l[m];for(let h=0,b=_.length;h<b;h++)y.push(_[h].clone(t));this.morphAttributes[m]=y}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,y=d.length;m<y;m++){const _=d[m];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const g=e.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Md=new ye,sy=new ye,ay=new Rt;class ts{constructor(e=new ye(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Md.subVectors(r,t).cross(sy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Md),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(d<0||d>1)?null:t.copy(e.start).addScaledVector(o,d)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||ay.getNormalMatrix(e),o=this.coplanarPoint(Md).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let oy=0;class bo extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=yo(),this.name="",this.type="Material",this.blending=uo,this.side=Ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gm,this.blendDst=xm,this.blendEquation=ga,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=C_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rd,this.stencilZFail=rd,this.stencilZPass=rd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){Ct(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){Ct(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const d=[];for(const f in l){const g=l[f];delete g.metadata,d.push(g)}return d}if(t){const l=o(e.textures),d=o(e.images);l.length>0&&(r.textures=l),d.length>0&&(r.images=d)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Bt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new ts().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Vt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Vt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Mr=new ye,Ed=new ye,kl=new ye,zl=new ye;class ly{constructor(e=new ye,t=new ye(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mr.copy(this.origin).addScaledVector(this.direction,t),Mr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Ed.copy(e).add(t).multiplyScalar(.5),kl.copy(t).sub(e).normalize(),zl.copy(this.origin).sub(Ed);const l=e.distanceTo(t)*.5,d=-this.direction.dot(kl),f=zl.dot(this.direction),g=-zl.dot(kl),m=zl.lengthSq(),y=Math.abs(1-d*d);let _,h,b,w;if(y>0)if(_=d*g-f,h=d*f-g,w=l*y,_>=0)if(h>=-w)if(h<=w){const M=1/y;_*=M,h*=M,b=_*(_+d*h+2*f)+h*(d*_+h+2*g)+m}else h=l,_=Math.max(0,-(d*h+f)),b=-_*_+h*(h+2*g)+m;else h=-l,_=Math.max(0,-(d*h+f)),b=-_*_+h*(h+2*g)+m;else h<=-w?(_=Math.max(0,-(-d*l+f)),h=_>0?-l:Math.min(Math.max(-l,-g),l),b=-_*_+h*(h+2*g)+m):h<=w?(_=0,h=Math.min(Math.max(-l,-g),l),b=h*(h+2*g)+m):(_=Math.max(0,-(d*l+f)),h=_>0?l:Math.min(Math.max(-l,-g),l),b=-_*_+h*(h+2*g)+m);else h=d>0?-l:l,_=Math.max(0,-(d*h+f)),b=-_*_+h*(h+2*g)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Ed).addScaledVector(kl,h),b}intersectSphere(e,t){if(e.radius<0)return null;Mr.subVectors(e.center,this.origin);const r=Mr.dot(this.direction),o=Mr.dot(Mr)-r*r,l=e.radius*e.radius;if(o>l)return null;const d=Math.sqrt(l-o),f=r-d,g=r+d;return g<0?null:f<0?this.at(g,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,d,f,g;const m=1/this.direction.x,y=1/this.direction.y,_=1/this.direction.z,h=this.origin;return m>=0?(r=(e.min.x-h.x)*m,o=(e.max.x-h.x)*m):(r=(e.max.x-h.x)*m,o=(e.min.x-h.x)*m),y>=0?(l=(e.min.y-h.y)*y,d=(e.max.y-h.y)*y):(l=(e.max.y-h.y)*y,d=(e.min.y-h.y)*y),r>d||l>o||((l>r||isNaN(r))&&(r=l),(d<o||isNaN(o))&&(o=d),_>=0?(f=(e.min.z-h.z)*_,g=(e.max.z-h.z)*_):(f=(e.max.z-h.z)*_,g=(e.min.z-h.z)*_),r>g||f>o)||((f>r||r!==r)&&(r=f),(g<o||o!==o)&&(o=g),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Mr)!==null}intersectTriangle(e,t,r,o,l){const d=this.origin,f=this.direction,g=f.x,m=f.y,y=f.z,_=e.x-d.x,h=e.y-d.y,b=e.z-d.z,w=t.x-d.x,M=t.y-d.y,v=t.z-d.z,S=r.x-d.x,N=r.y-d.y,z=r.z-d.z,P=Math.abs(g),U=Math.abs(m),I=Math.abs(y);let E,D,K,G,V,H,$,B,ee,he,X,ie;if(P>=U&&P>=I?(K=g,H=_,ee=w,ie=S,g>=0?(E=m,D=y,G=h,V=b,$=M,B=v,he=N,X=z):(E=y,D=m,G=b,V=h,$=v,B=M,he=z,X=N)):U>=I?(K=m,H=h,ee=M,ie=N,m>=0?(E=y,D=g,G=b,V=_,$=v,B=w,he=z,X=S):(E=g,D=y,G=_,V=b,$=w,B=v,he=S,X=z)):(K=y,H=b,ee=v,ie=z,y>=0?(E=g,D=m,G=_,V=h,$=w,B=M,he=S,X=N):(E=m,D=g,G=h,V=_,$=M,B=w,he=N,X=S)),K===0)return null;const O=E/K,Q=D/K,k=1/K,L=G-O*H,re=V-Q*H,F=$-O*ee,te=B-Q*ee,ce=he-O*ie,ue=X-Q*ie,xe=ce*te-ue*F,Ne=L*ue-re*ce,Qe=F*re-te*L;if(o){if(xe<0||Ne<0||Qe<0)return null}else if((xe<0||Ne<0||Qe<0)&&(xe>0||Ne>0||Qe>0))return null;const Xe=xe+Ne+Qe;if(Xe===0)return null;const De=k*(xe*H+Ne*ee+Qe*ie);return(Xe>0?De<0:De>0)?null:this.at(De/Xe,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nc extends bo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new as,this.combine=vm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const D0=new vn,Ms=new ly,Ul=new If,L0=new ye,Fl=new ye,Ol=new ye,Bl=new ye,Td=new ye,Hl=new ye,I0=new ye,Gl=new ye;class Mn extends Yn{constructor(e=new ur,t=new nc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=o.length;l<d;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,d=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Hl.set(0,0,0);for(let g=0,m=l.length;g<m;g++){const y=f[g],_=l[g];y!==0&&(Td.fromBufferAttribute(_,e),d?Hl.addScaledVector(Td,y):Hl.addScaledVector(Td.sub(t),y))}t.add(Hl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ul.copy(r.boundingSphere),Ul.applyMatrix4(l),Ms.copy(e.ray).recast(e.near),!(Ul.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(Ul,L0)===null||Ms.origin.distanceToSquared(L0)>(e.far-e.near)**2))&&(D0.copy(l).invert(),Ms.copy(e.ray).applyMatrix4(D0),!(r.boundingBox!==null&&Ms.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Ms)))}_computeIntersections(e,t,r){let o;const l=this.geometry,d=this.material,f=l.index,g=l.attributes.position,m=l.attributes.uv,y=l.attributes.uv1,_=l.attributes.normal,h=l.groups,b=l.drawRange;if(f!==null)if(Array.isArray(d))for(let w=0,M=h.length;w<M;w++){const v=h[w],S=d[v.materialIndex],N=Math.max(v.start,b.start),z=Math.min(f.count,Math.min(v.start+v.count,b.start+b.count));for(let P=N,U=z;P<U;P+=3){const I=f.getX(P),E=f.getX(P+1),D=f.getX(P+2);o=jl(this,S,e,r,m,y,_,I,E,D),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const w=Math.max(0,b.start),M=Math.min(f.count,b.start+b.count);for(let v=w,S=M;v<S;v+=3){const N=f.getX(v),z=f.getX(v+1),P=f.getX(v+2);o=jl(this,d,e,r,m,y,_,N,z,P),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(g!==void 0)if(Array.isArray(d))for(let w=0,M=h.length;w<M;w++){const v=h[w],S=d[v.materialIndex],N=Math.max(v.start,b.start),z=Math.min(g.count,Math.min(v.start+v.count,b.start+b.count));for(let P=N,U=z;P<U;P+=3){const I=P,E=P+1,D=P+2;o=jl(this,S,e,r,m,y,_,I,E,D),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const w=Math.max(0,b.start),M=Math.min(g.count,b.start+b.count);for(let v=w,S=M;v<S;v+=3){const N=v,z=v+1,P=v+2;o=jl(this,d,e,r,m,y,_,N,z,P),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function cy(s,e,t,r,o,l,d,f){let g;if(e.side===Bn?g=r.intersectTriangle(d,l,o,!0,f):g=r.intersectTriangle(o,l,d,e.side===Ps,f),g===null)return null;Gl.copy(f),Gl.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(Gl);return m<t.near||m>t.far?null:{distance:m,point:Gl.clone(),object:s}}function jl(s,e,t,r,o,l,d,f,g,m){s.getVertexPosition(f,Fl),s.getVertexPosition(g,Ol),s.getVertexPosition(m,Bl);const y=cy(s,e,t,r,Fl,Ol,Bl,I0);if(y){const _=new ye;Yi.getBarycoord(I0,Fl,Ol,Bl,_),o&&(y.uv=Yi.getInterpolatedAttribute(o,f,g,m,_,new Vt)),l&&(y.uv1=Yi.getInterpolatedAttribute(l,f,g,m,_,new Vt)),d&&(y.normal=Yi.getInterpolatedAttribute(d,f,g,m,_,new ye),y.normal.dot(r.direction)>0&&y.normal.multiplyScalar(-1));const h={a:f,b:g,c:m,normal:new ye,materialIndex:0};Yi.getNormal(Fl,Ol,Bl,h.normal),y.face=h,y.barycoord=_}return y}class uy extends Xn{constructor(e=null,t=1,r=1,o,l,d,f,g,m=On,y=On,_,h){super(null,d,f,g,m,y,o,l,_,h),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Es=new If,dy=new Vt(.5,.5),Vl=new ye;class vo{constructor(e=new ts,t=new ts,r=new ts,o=new ts,l=new ts,d=new ts){this.planes=[e,t,r,o,l,d]}set(e,t,r,o,l,d){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(d),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=qi,r=!1){const o=this.planes,l=e.elements,d=l[0],f=l[1],g=l[2],m=l[3],y=l[4],_=l[5],h=l[6],b=l[7],w=l[8],M=l[9],v=l[10],S=l[11],N=l[12],z=l[13],P=l[14],U=l[15];if(o[0].setComponents(m-d,b-y,S-w,U-N).normalize(),o[1].setComponents(m+d,b+y,S+w,U+N).normalize(),o[2].setComponents(m+f,b+_,S+M,U+z).normalize(),o[3].setComponents(m-f,b-_,S-M,U-z).normalize(),r)o[4].setComponents(g,h,v,P).normalize(),o[5].setComponents(m-g,b-h,S-v,U-P).normalize();else if(o[4].setComponents(m-g,b-h,S-v,U-P).normalize(),t===qi)o[5].setComponents(m+g,b+h,S+v,U+P).normalize();else if(t===xo)o[5].setComponents(g,h,v,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){Es.center.set(0,0,0);const t=dy.distanceTo(e.center);return Es.radius=.7071067811865476+t,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Vl.x=o.normal.x>0?e.max.x:e.min.x,Vl.y=o.normal.y>0?e.max.y:e.min.y,Vl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Vl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const k0=new vn;class kf{constructor(){this.coordinateSystem=qi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let o=0;o<t.length;o++){const l=t[o];k0.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),r[o]===void 0&&(r[o]=new vo),r[o].setFromProjectionMatrix(k0,l.coordinateSystem,l.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let o=0;o<e._count;o++)t[o]===void 0&&(t[o]=new vo),t[o].copy(r[o]);return this._count=e._count,this}clone(){return new kf().copy(this)}}class jm extends Xn{constructor(e=[],t=ya,r,o,l,d,f,g,m,y){super(e,t,r,o,l,d,f,g,m,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mc extends Xn{constructor(e,t,r,o,l,d,f,g,m){super(e,t,r,o,l,d,f,g,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wa extends Xn{constructor(e,t,r=lr,o,l,d,f=On,g=On,m,y=ss,_=1){if(y!==ss&&y!==rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:_};super(h,o,l,d,f,g,y,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Vm extends wa{constructor(e,t=lr,r=ya,o,l,d=On,f=On,g,m=ss){const y={width:e,height:e,depth:1},_=[y,y,y,y,y,y];super(e,e,t,r,o,l,d,f,g,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Wm extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wo extends ur{constructor(e=1,t=1,r=1,o=1,l=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:d};const f=this;o=Math.floor(o),l=Math.floor(l),d=Math.floor(d);const g=[],m=[],y=[],_=[];let h=0,b=0;w("z","y","x",-1,-1,r,t,e,d,l,0),w("z","y","x",1,-1,r,t,-e,d,l,1),w("x","z","y",1,1,e,r,t,o,d,2),w("x","z","y",1,-1,e,r,-t,o,d,3),w("x","y","z",1,-1,e,t,r,o,l,4),w("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(g),this.setAttribute("position",new zn(m,3)),this.setAttribute("normal",new zn(y,3)),this.setAttribute("uv",new zn(_,2));function w(M,v,S,N,z,P,U,I,E,D,K){const G=P/E,V=U/D,H=P/2,$=U/2,B=I/2,ee=E+1,he=D+1;let X=0,ie=0;const O=new ye;for(let Q=0;Q<he;Q++){const k=Q*V-$;for(let L=0;L<ee;L++){const re=L*G-H;O[M]=re*N,O[v]=k*z,O[S]=B,m.push(O.x,O.y,O.z),O[M]=0,O[v]=0,O[S]=I>0?1:-1,y.push(O.x,O.y,O.z),_.push(L/E),_.push(1-Q/D),X+=1}}for(let Q=0;Q<D;Q++)for(let k=0;k<E;k++){const L=h+k+ee*Q,re=h+k+ee*(Q+1),F=h+(k+1)+ee*(Q+1),te=h+(k+1)+ee*Q;g.push(L,re,te),g.push(re,F,te),ie+=6}f.addGroup(b,ie,K),b+=ie,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class zf extends ur{constructor(e=1,t=1,r=1,o=32,l=1,d=!1,f=0,g=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:d,thetaStart:f,thetaLength:g};const m=this;o=Math.floor(o),l=Math.floor(l);const y=[],_=[],h=[],b=[];let w=0;const M=[],v=r/2;let S=0;N(),d===!1&&(e>0&&z(!0),t>0&&z(!1)),this.setIndex(y),this.setAttribute("position",new zn(_,3)),this.setAttribute("normal",new zn(h,3)),this.setAttribute("uv",new zn(b,2));function N(){const P=new ye,U=new ye;let I=0;const E=(t-e)/r;for(let D=0;D<=l;D++){const K=[],G=D/l,V=G*(t-e)+e;for(let H=0;H<=o;H++){const $=H/o,B=$*g+f,ee=Math.sin(B),he=Math.cos(B);U.x=V*ee,U.y=-G*r+v,U.z=V*he,_.push(U.x,U.y,U.z),P.set(ee,E,he).normalize(),h.push(P.x,P.y,P.z),b.push($,1-G),K.push(w++)}M.push(K)}for(let D=0;D<o;D++)for(let K=0;K<l;K++){const G=M[K][D],V=M[K+1][D],H=M[K+1][D+1],$=M[K][D+1];(e>0||K!==0)&&(y.push(G,V,$),I+=3),(t>0||K!==l-1)&&(y.push(V,H,$),I+=3)}m.addGroup(S,I,0),S+=I}function z(P){const U=w,I=new Vt,E=new ye;let D=0;const K=P===!0?e:t,G=P===!0?1:-1;for(let H=1;H<=o;H++)_.push(0,v*G,0),h.push(0,G,0),b.push(.5,.5),w++;const V=w;for(let H=0;H<=o;H++){const B=H/o*g+f,ee=Math.cos(B),he=Math.sin(B);E.x=K*he,E.y=v*G,E.z=K*ee,_.push(E.x,E.y,E.z),h.push(0,G,0),I.x=ee*.5+.5,I.y=he*.5*G+.5,b.push(I.x,I.y),w++}for(let H=0;H<o;H++){const $=U+H,B=V+H;P===!0?y.push(B,B+1,$):y.push(B+1,B,$),D+=3}m.addGroup(S,D,P===!0?1:2),S+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Uf extends zf{constructor(e=1,t=1,r=32,o=1,l=!1,d=0,f=Math.PI*2){super(0,e,t,r,o,l,d,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:d,thetaLength:f}}static fromJSON(e){return new Uf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Mo extends ur{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,d=t/2,f=Math.floor(r),g=Math.floor(o),m=f+1,y=g+1,_=e/f,h=t/g,b=[],w=[],M=[],v=[];for(let S=0;S<y;S++){const N=S*h-d;for(let z=0;z<m;z++){const P=z*_-l;w.push(P,-N,0),M.push(0,0,1),v.push(z/f),v.push(1-S/g)}}for(let S=0;S<g;S++)for(let N=0;N<f;N++){const z=N+m*S,P=N+m*(S+1),U=N+1+m*(S+1),I=N+1+m*S;b.push(z,P,I),b.push(P,U,I)}this.setIndex(b),this.setAttribute("position",new zn(w,3)),this.setAttribute("normal",new zn(M,3)),this.setAttribute("uv",new zn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ff extends ur{constructor(e=.5,t=1,r=32,o=1,l=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:d},r=Math.max(3,r),o=Math.max(1,o);const f=[],g=[],m=[],y=[];let _=e;const h=(t-e)/o,b=new ye,w=new Vt;for(let M=0;M<=o;M++){for(let v=0;v<=r;v++){const S=l+v/r*d;b.x=_*Math.cos(S),b.y=_*Math.sin(S),g.push(b.x,b.y,b.z),m.push(0,0,1),w.x=(b.x/t+1)/2,w.y=(b.y/t+1)/2,y.push(w.x,w.y)}_+=h}for(let M=0;M<o;M++){const v=M*(r+1);for(let S=0;S<r;S++){const N=S+v,z=N,P=N+r+1,U=N+r+2,I=N+1;f.push(z,P,I),f.push(P,U,I)}}this.setIndex(f),this.setAttribute("position",new zn(g,3)),this.setAttribute("normal",new zn(m,3)),this.setAttribute("uv",new zn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ff(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ji extends ur{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,d=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:d,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const g=Math.min(d+f,Math.PI);let m=0;const y=[],_=new ye,h=new ye,b=[],w=[],M=[],v=[];for(let S=0;S<=r;S++){const N=[],z=S/r,P=d+z*f,U=e*Math.cos(P),I=Math.sqrt(e*e-U*U);let E=0;S===0&&d===0?E=.5/t:S===r&&g===Math.PI&&(E=-.5/t);for(let D=0;D<=t;D++){const K=D/t,G=o+K*l;_.x=-I*Math.cos(G),_.y=U,_.z=I*Math.sin(G),w.push(_.x,_.y,_.z),h.copy(_).normalize(),M.push(h.x,h.y,h.z),v.push(K+E,1-z),N.push(m++)}y.push(N)}for(let S=0;S<r;S++)for(let N=0;N<t;N++){const z=y[S][N+1],P=y[S][N],U=y[S+1][N],I=y[S+1][N+1];(S!==0||d>0)&&b.push(z,P,I),(S!==r-1||g<Math.PI)&&b.push(P,U,I)}this.setIndex(b),this.setAttribute("position",new zn(w,3)),this.setAttribute("normal",new zn(M,3)),this.setAttribute("uv",new zn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ma(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(z0(o))o.isRenderTargetTexture?(Ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(z0(o[0])){const l=[];for(let d=0,f=o.length;d<f;d++)l[d]=o[d].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Jn(s){const e={};for(let t=0;t<s.length;t++){const r=Ma(s[t]);for(const o in r)e[o]=r[o]}return e}function z0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function fy(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function $m(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Wt.workingColorSpace}const hy={clone:Ma,merge:Jn};var py=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,my=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends bo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=py,this.fragmentShader=my,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ma(e.uniforms),this.uniformsGroups=fy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?t.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[o]={type:"m4",value:d.toArray()}:t.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new Bt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Vt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ye().fromArray(o.value);break;case"v4":this.uniforms[r].value=new xn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new Rt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new vn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class gy extends Ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wl extends bo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gf,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new as,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xy extends bo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vy extends bo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Xm extends Yn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Cd=new vn,U0=new ye,F0=new ye;class _y{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.mapType=vi,this.map=null,this.mapPass=null,this.matrix=new vn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vo,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new xn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;U0.setFromMatrixPosition(e.matrixWorld),t.position.copy(U0),F0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(F0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,o){Cd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(Cd,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,d=o?o.z/l.x:1,f=o?o.w/l.y:1,g=o?o.x/l.x:0,m=o?o.y/l.y:0;e.coordinateSystem===xo||e.reversedDepth?t.set(.5*d,0,0,.5*d+g,0,.5*f,0,.5*f+m,0,0,1,0,0,0,0,1):t.set(.5*d,0,0,.5*d+g,0,.5*f,0,.5*f+m,0,0,.5,.5,0,0,0,1),t.multiply(Cd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const $l=new ye,Xl=new Ea,er=new ye;class Ym extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vn,this.projectionMatrix=new vn,this.projectionMatrixInverse=new vn,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose($l,Xl,er),er.x===1&&er.y===1&&er.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($l,Xl,er.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose($l,Xl,er),er.x===1&&er.y===1&&er.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($l,Xl,er.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qr=new ye,O0=new Vt,B0=new Vt;class Wi extends Ym{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xf*2*Math.atan(Math.tan(sd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z),Qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z)}getViewSize(e,t){return this.getViewBounds(e,O0,B0),t.subVectors(B0,O0)}setViewOffset(e,t,r,o,l,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sd*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const g=d.fullWidth,m=d.fullHeight;l+=d.offsetX*o/g,t-=d.offsetY*r/m,o*=d.width/g,r*=d.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class qm extends Ym{constructor(e=-1,t=1,r=1,o=-1,l=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,d=r+e,f=o+t,g=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,d=l+m*this.view.width,f-=y*this.view.offsetY,g=f-y*this.view.height}this.projectionMatrix.makeOrthographic(l,d,f,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class yy extends _y{constructor(){super(new qm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sy extends Xm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yn.DEFAULT_UP),this.updateMatrix(),this.target=new Yn,this.shadow=new yy}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class by extends Xm{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const pa=-90,ma=1;class vf extends Yn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Wi(pa,ma,e,t);o.layers=this.layers,this.add(o);const l=new Wi(pa,ma,e,t);l.layers=this.layers,this.add(l);const d=new Wi(pa,ma,e,t);d.layers=this.layers,this.add(d);const f=new Wi(pa,ma,e,t);f.layers=this.layers,this.add(f);const g=new Wi(pa,ma,e,t);g.layers=this.layers,this.add(g);const m=new Wi(pa,ma,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,d,f,g]=t;for(const m of t)this.remove(m);if(e===qi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(e===xo)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,d,f,g,m,y]=this.children,_=e.getRenderTarget(),h=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const M=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,2,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(r,4,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),r.texture.mipmapsAutoUpdate=M,e.setRenderTarget(r,5,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,y),e.setRenderTarget(_,h,b),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class wy extends Wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function H0(s,e,t,r){const o=My(r);switch(t){case Pm:return s*e;case Lm:return s*e/o.components*o.byteLength;case Rf:return s*e/o.components*o.byteLength;case Ds:return s*e*2/o.components*o.byteLength;case Nf:return s*e*2/o.components*o.byteLength;case Dm:return s*e*3/o.components*o.byteLength;case ar:return s*e*4/o.components*o.byteLength;case Pf:return s*e*4/o.components*o.byteLength;case Zl:case Jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ql:case ec:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bd:case Gd:return Math.max(s,16)*Math.max(e,8)/4;case Od:case Hd:return Math.max(s,8)*Math.max(e,8)/2;case jd:case Vd:case $d:case Xd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Wd:case sc:case Yd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ef:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case tf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case nf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case rf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case sf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case af:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case of:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case lf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case cf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case uf:case df:case ff:return Math.ceil(s/4)*Math.ceil(e/4)*16;case hf:case pf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ac:case mf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function My(s){switch(s){case vi:case Cm:return{byteLength:1,components:1};case go:case Am:case cr:return{byteLength:2,components:1};case Cf:case Af:return{byteLength:2,components:4};case lr:case Tf:case sr:return{byteLength:4,components:1};case Rm:case Nm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ef}}));typeof window<"u"&&(window.__THREE__?Ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ef);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Km(){let s=null,e=!1,t=null,r=null;function o(l,d){r=s.requestAnimationFrame(o),t(l,d)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Ey(s){const e=new WeakMap;function t(f,g){const m=f.array,y=f.usage,_=m.byteLength,h=s.createBuffer();s.bindBuffer(g,h),s.bufferData(g,m,y),f.onUploadCallback();let b;if(m instanceof Float32Array)b=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)b=s.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?b=s.HALF_FLOAT:b=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)b=s.SHORT;else if(m instanceof Uint32Array)b=s.UNSIGNED_INT;else if(m instanceof Int32Array)b=s.INT;else if(m instanceof Int8Array)b=s.BYTE;else if(m instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:h,type:b,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,g,m){const y=g.array,_=g.updateRanges;if(s.bindBuffer(m,f),_.length===0)s.bufferSubData(m,0,y);else{_.sort((b,w)=>b.start-w.start);let h=0;for(let b=1;b<_.length;b++){const w=_[h],M=_[b];M.start<=w.start+w.count+1?w.count=Math.max(w.count,M.start+M.count-w.start):(++h,_[h]=M)}_.length=h+1;for(let b=0,w=_.length;b<w;b++){const M=_[b];s.bufferSubData(m,M.start*y.BYTES_PER_ELEMENT,y,M.start,M.count)}g.clearUpdateRanges()}g.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const g=e.get(f);g&&(s.deleteBuffer(g.buffer),e.delete(f))}function d(f,g){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const y=e.get(f);(!y||y.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,t(f,g));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,g),m.version=f.version}}return{get:o,remove:l,update:d}}var Ty=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ay=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ry=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ny=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Py=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ly=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Iy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ky=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Oy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,By=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$y=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Yy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,qy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ky=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Zy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t1="gl_FragColor = linearToOutputTexel( gl_FragColor );",n1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,r1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,s1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,a1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,l1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,u1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,d1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,h1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,x1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,v1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,w1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,M1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,E1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,T1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,C1=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,A1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,D1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,L1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,I1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,k1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,F1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,O1=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,B1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,G1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,V1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,W1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Y1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,q1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,K1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,tS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,lS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,uS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_S=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,SS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,MS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ES=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AS=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,DS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,LS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,IS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,kS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,US=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,BS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,VS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$S=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,XS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,KS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,eb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ib=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:Ty,alphahash_pars_fragment:Cy,alphamap_fragment:Ay,alphamap_pars_fragment:Ry,alphatest_fragment:Ny,alphatest_pars_fragment:Py,aomap_fragment:Dy,aomap_pars_fragment:Ly,batching_pars_vertex:Iy,batching_vertex:ky,begin_vertex:zy,beginnormal_vertex:Uy,bsdfs:Fy,iridescence_fragment:Oy,bumpmap_pars_fragment:By,clipping_planes_fragment:Hy,clipping_planes_pars_fragment:Gy,clipping_planes_pars_vertex:jy,clipping_planes_vertex:Vy,color_fragment:Wy,color_pars_fragment:$y,color_pars_vertex:Xy,color_vertex:Yy,common:qy,defaultnormal_vertex:Ky,displacementmap_pars_vertex:Zy,displacementmap_vertex:Jy,emissivemap_fragment:Qy,emissivemap_pars_fragment:e1,colorspace_fragment:t1,colorspace_pars_fragment:n1,envmap_fragment:i1,envmap_common_pars_fragment:r1,envmap_pars_fragment:s1,envmap_pars_vertex:a1,envmap_physical_pars_fragment:x1,envmap_vertex:o1,fog_vertex:l1,fog_pars_vertex:c1,fog_fragment:u1,fog_pars_fragment:d1,gradientmap_pars_fragment:f1,lightmap_pars_fragment:h1,lights_lambert_fragment:p1,lights_lambert_pars_fragment:m1,lights_pars_begin:g1,lights_toon_fragment:v1,lights_toon_pars_fragment:_1,lights_phong_fragment:y1,lights_phong_pars_fragment:S1,lights_physical_fragment:b1,lights_physical_pars_fragment:w1,lights_fragment_begin:M1,lights_fragment_maps:E1,lights_fragment_end:T1,lightprobes_pars_fragment:C1,logdepthbuf_fragment:A1,logdepthbuf_pars_fragment:R1,logdepthbuf_pars_vertex:N1,logdepthbuf_vertex:P1,map_fragment:D1,map_pars_fragment:L1,map_particle_fragment:I1,map_particle_pars_fragment:k1,metalnessmap_fragment:z1,metalnessmap_pars_fragment:U1,morphinstance_vertex:F1,morphcolor_vertex:O1,morphnormal_vertex:B1,morphtarget_pars_vertex:H1,morphtarget_vertex:G1,normal_fragment_begin:j1,normal_fragment_maps:V1,normal_pars_fragment:W1,normal_pars_vertex:$1,normal_vertex:X1,normalmap_pars_fragment:Y1,clearcoat_normal_fragment_begin:q1,clearcoat_normal_fragment_maps:K1,clearcoat_pars_fragment:Z1,iridescence_pars_fragment:J1,opaque_fragment:Q1,packing:eS,premultiplied_alpha_fragment:tS,project_vertex:nS,dithering_fragment:iS,dithering_pars_fragment:rS,roughnessmap_fragment:sS,roughnessmap_pars_fragment:aS,shadowmap_pars_fragment:oS,shadowmap_pars_vertex:lS,shadowmap_vertex:cS,shadowmask_pars_fragment:uS,skinbase_vertex:dS,skinning_pars_vertex:fS,skinning_vertex:hS,skinnormal_vertex:pS,specularmap_fragment:mS,specularmap_pars_fragment:gS,tonemapping_fragment:xS,tonemapping_pars_fragment:vS,transmission_fragment:_S,transmission_pars_fragment:yS,uv_pars_fragment:SS,uv_pars_vertex:bS,uv_vertex:wS,worldpos_vertex:MS,background_vert:ES,background_frag:TS,backgroundCube_vert:CS,backgroundCube_frag:AS,cube_vert:RS,cube_frag:NS,depth_vert:PS,depth_frag:DS,distance_vert:LS,distance_frag:IS,equirect_vert:kS,equirect_frag:zS,linedashed_vert:US,linedashed_frag:FS,meshbasic_vert:OS,meshbasic_frag:BS,meshlambert_vert:HS,meshlambert_frag:GS,meshmatcap_vert:jS,meshmatcap_frag:VS,meshnormal_vert:WS,meshnormal_frag:$S,meshphong_vert:XS,meshphong_frag:YS,meshphysical_vert:qS,meshphysical_frag:KS,meshtoon_vert:ZS,meshtoon_frag:JS,points_vert:QS,points_frag:eb,shadow_vert:tb,shadow_frag:nb,sprite_vert:ib,sprite_frag:rb},Je={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Rt}},envmap:{envMap:{value:null},envMapRotation:{value:new Rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Rt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}}},nr={basic:{uniforms:Jn([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Jn([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Jn([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Jn([Je.common,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.roughnessmap,Je.metalnessmap,Je.fog,Je.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Jn([Je.common,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.gradientmap,Je.fog,Je.lights,{emissive:{value:new Bt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Jn([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Jn([Je.points,Je.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Jn([Je.common,Je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Jn([Je.common,Je.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Jn([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Jn([Je.sprite,Je.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Rt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:Jn([Je.common,Je.displacementmap,{referencePosition:{value:new ye},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:Jn([Je.lights,Je.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};nr.physical={uniforms:Jn([nr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Rt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Rt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Rt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Rt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Rt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Rt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Rt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Rt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const Yl={r:0,b:0,g:0},sb=new vn,Zm=new Rt;Zm.set(-1,0,0,0,1,0,0,0,1);function ab(s,e,t,r,o,l){const d=new Bt(0);let f=o===!0?0:1,g,m,y=null,_=0,h=null;function b(N){let z=N.isScene===!0?N.background:null;if(z&&z.isTexture){const P=N.backgroundBlurriness>0;z=e.get(z,P)}return z}function w(N){let z=!1;const P=b(N);P===null?v(d,f):P&&P.isColor&&(v(P,1),z=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?t.buffers.color.setClear(0,0,0,1,l):U==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||z)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(N,z){const P=b(z);P&&P.isCubeTexture?(m===void 0&&(m=new Mn(new wo(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:Ma(nr.backgroundCube.uniforms),vertexShader:nr.backgroundCube.vertexShader,fragmentShader:nr.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(U,I,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=P,m.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(sb.makeRotationFromEuler(z.backgroundRotation)).transpose(),P.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(Zm),m.material.toneMapped=Wt.getTransfer(P.colorSpace)!==en,(y!==P||_!==P.version||h!==s.toneMapping)&&(m.material.needsUpdate=!0,y=P,_=P.version,h=s.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null)):P&&P.isTexture&&(g===void 0&&(g=new Mn(new Mo(2,2),new Ni({name:"BackgroundMaterial",uniforms:Ma(nr.background.uniforms),vertexShader:nr.background.vertexShader,fragmentShader:nr.background.fragmentShader,side:Ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(g)),g.material.uniforms.t2D.value=P,g.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,g.material.toneMapped=Wt.getTransfer(P.colorSpace)!==en,P.matrixAutoUpdate===!0&&P.updateMatrix(),g.material.uniforms.uvTransform.value.copy(P.matrix),(y!==P||_!==P.version||h!==s.toneMapping)&&(g.material.needsUpdate=!0,y=P,_=P.version,h=s.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null))}function v(N,z){N.getRGB(Yl,$m(s)),t.buffers.color.setClear(Yl.r,Yl.g,Yl.b,z,l)}function S(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,z=1){d.set(N),f=z,v(d,f)},getClearAlpha:function(){return f},setClearAlpha:function(N){f=N,v(d,f)},render:w,addToRenderList:M,dispose:S}}function ob(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=h(null);let l=o,d=!1;function f(V,H,$,B,ee){let he=!1;const X=_(V,B,$,H);l!==X&&(l=X,m(l.object)),he=b(V,B,$,ee),he&&w(V,B,$,ee),ee!==null&&e.update(ee,s.ELEMENT_ARRAY_BUFFER),(he||d)&&(d=!1,P(V,H,$,B),ee!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function g(){return s.createVertexArray()}function m(V){return s.bindVertexArray(V)}function y(V){return s.deleteVertexArray(V)}function _(V,H,$,B){const ee=B.wireframe===!0;let he=r[H.id];he===void 0&&(he={},r[H.id]=he);const X=V.isInstancedMesh===!0?V.id:0;let ie=he[X];ie===void 0&&(ie={},he[X]=ie);let O=ie[$.id];O===void 0&&(O={},ie[$.id]=O);let Q=O[ee];return Q===void 0&&(Q=h(g()),O[ee]=Q),Q}function h(V){const H=[],$=[],B=[];for(let ee=0;ee<t;ee++)H[ee]=0,$[ee]=0,B[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:$,attributeDivisors:B,object:V,attributes:{},index:null}}function b(V,H,$,B){const ee=l.attributes,he=H.attributes;let X=0;const ie=$.getAttributes();for(const O in ie)if(ie[O].location>=0){const k=ee[O];let L=he[O];if(L===void 0&&(O==="instanceMatrix"&&V.instanceMatrix&&(L=V.instanceMatrix),O==="instanceColor"&&V.instanceColor&&(L=V.instanceColor)),k===void 0||k.attribute!==L||L&&k.data!==L.data)return!0;X++}return l.attributesNum!==X||l.index!==B}function w(V,H,$,B){const ee={},he=H.attributes;let X=0;const ie=$.getAttributes();for(const O in ie)if(ie[O].location>=0){let k=he[O];k===void 0&&(O==="instanceMatrix"&&V.instanceMatrix&&(k=V.instanceMatrix),O==="instanceColor"&&V.instanceColor&&(k=V.instanceColor));const L={};L.attribute=k,k&&k.data&&(L.data=k.data),ee[O]=L,X++}l.attributes=ee,l.attributesNum=X,l.index=B}function M(){const V=l.newAttributes;for(let H=0,$=V.length;H<$;H++)V[H]=0}function v(V){S(V,0)}function S(V,H){const $=l.newAttributes,B=l.enabledAttributes,ee=l.attributeDivisors;$[V]=1,B[V]===0&&(s.enableVertexAttribArray(V),B[V]=1),ee[V]!==H&&(s.vertexAttribDivisor(V,H),ee[V]=H)}function N(){const V=l.newAttributes,H=l.enabledAttributes;for(let $=0,B=H.length;$<B;$++)H[$]!==V[$]&&(s.disableVertexAttribArray($),H[$]=0)}function z(V,H,$,B,ee,he,X){X===!0?s.vertexAttribIPointer(V,H,$,ee,he):s.vertexAttribPointer(V,H,$,B,ee,he)}function P(V,H,$,B){M();const ee=B.attributes,he=$.getAttributes(),X=H.defaultAttributeValues;for(const ie in he){const O=he[ie];if(O.location>=0){let Q=ee[ie];if(Q===void 0&&(ie==="instanceMatrix"&&V.instanceMatrix&&(Q=V.instanceMatrix),ie==="instanceColor"&&V.instanceColor&&(Q=V.instanceColor)),Q!==void 0){const k=Q.normalized,L=Q.itemSize,re=e.get(Q);if(re===void 0)continue;const F=re.buffer,te=re.type,ce=re.bytesPerElement,ue=te===s.INT||te===s.UNSIGNED_INT||Q.gpuType===Tf;if(Q.isInterleavedBufferAttribute){const xe=Q.data,Ne=xe.isInterleavedBuffer===!0?xe.stride:xe.itemSize,Qe=Q.offset;if(xe.isInstancedInterleavedBuffer||xe.isInstancedBufferAttribute){for(let Xe=0;Xe<O.locationSize;Xe++)S(O.location+Xe,xe.meshPerAttribute);V.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Xe=0;Xe<O.locationSize;Xe++)v(O.location+Xe);s.bindBuffer(s.ARRAY_BUFFER,F);for(let Xe=0;Xe<O.locationSize;Xe++)z(O.location+Xe,L/O.locationSize,te,k,Ne*ce,(Qe+L/O.locationSize*Xe)*ce,ue)}else{if(Q.isInstancedBufferAttribute){for(let xe=0;xe<O.locationSize;xe++)S(O.location+xe,Q.meshPerAttribute);V.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let xe=0;xe<O.locationSize;xe++)v(O.location+xe);s.bindBuffer(s.ARRAY_BUFFER,F);for(let xe=0;xe<O.locationSize;xe++)z(O.location+xe,L/O.locationSize,te,k,L*ce,L/O.locationSize*xe*ce,ue)}}else if(X!==void 0){const k=X[ie];if(k!==void 0)switch(k.length){case 2:s.vertexAttrib2fv(O.location,k);break;case 3:s.vertexAttrib3fv(O.location,k);break;case 4:s.vertexAttrib4fv(O.location,k);break;default:s.vertexAttrib1fv(O.location,k)}}}}N()}function U(){K();for(const V in r){const H=r[V];for(const $ in H){const B=H[$];for(const ee in B){const he=B[ee];for(const X in he)y(he[X].object),delete he[X];delete B[ee]}}delete r[V]}}function I(V){if(r[V.id]===void 0)return;const H=r[V.id];for(const $ in H){const B=H[$];for(const ee in B){const he=B[ee];for(const X in he)y(he[X].object),delete he[X];delete B[ee]}}delete r[V.id]}function E(V){for(const H in r){const $=r[H];for(const B in $){const ee=$[B];if(ee[V.id]===void 0)continue;const he=ee[V.id];for(const X in he)y(he[X].object),delete he[X];delete ee[V.id]}}}function D(V){for(const H in r){const $=r[H],B=V.isInstancedMesh===!0?V.id:0,ee=$[B];if(ee!==void 0){for(const he in ee){const X=ee[he];for(const ie in X)y(X[ie].object),delete X[ie];delete ee[he]}delete $[B],Object.keys($).length===0&&delete r[H]}}}function K(){G(),d=!0,l!==o&&(l=o,m(l.object))}function G(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:K,resetDefaultState:G,dispose:U,releaseStatesOfGeometry:I,releaseStatesOfObject:D,releaseStatesOfProgram:E,initAttributes:M,enableAttribute:v,disableUnusedAttributes:N}}function lb(s,e,t){let r;function o(g){r=g}function l(g,m){s.drawArrays(r,g,m),t.update(m,r,1)}function d(g,m,y){y!==0&&(s.drawArraysInstanced(r,g,m,y),t.update(m,r,y))}function f(g,m,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,m,0,y);let h=0;for(let b=0;b<y;b++)h+=m[b];t.update(h,r,1)}this.setMode=o,this.render=l,this.renderInstances=d,this.renderMultiDraw=f}function cb(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(E){return!(E!==ar&&r.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(E){const D=E===cr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==vi&&E!==sr&&!D&&r.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function g(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const y=g(m);y!==m&&(Ct("WebGLRenderer:",m,"not supported, using",y,"instead."),m=y);const _=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&_===!1;t.reversedDepthBuffer===!0&&_===!1&&Ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&_===!0&&Ct("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const b=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),z=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:g,textureFormatReadable:d,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:h,reversedDepthBuffer:_,maxTextures:b,maxVertexTextures:w,maxTextureSize:M,maxCubemapSize:v,maxAttributes:S,maxVertexUniforms:N,maxVaryings:z,maxFragmentUniforms:P,maxSamples:U,samples:I}}function ub(s){const e=this;let t=null,r=0,o=!1,l=!1;const d=new ts,f=new Rt,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(_,h){const b=_.length!==0||h||r!==0||o;return o=h,r=_.length,b},this.beginShadows=function(){l=!0,y(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,h){t=y(_,h,0)},this.setState=function(_,h,b){const w=_.clippingPlanes,M=_.clipIntersection,v=_.clipShadows,S=s.get(_);if(!o||w===null||w.length===0||l&&!v)l?y(null):m();else{const N=l?0:r,z=N*4;let P=S.clippingState||null;g.value=P,P=y(w,h,z,b);for(let U=0;U!==z;++U)P[U]=t[U];S.clippingState=P,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=N}};function m(){g.value!==t&&(g.value=t,g.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function y(_,h,b,w){const M=_!==null?_.length:0;let v=null;if(M!==0){if(v=g.value,w!==!0||v===null){const S=b+M*4,N=h.matrixWorldInverse;f.getNormalMatrix(N),(v===null||v.length<S)&&(v=new Float32Array(S));for(let z=0,P=b;z!==M;++z,P+=4)d.copy(_[z]).applyMatrix4(N,f),d.normal.toArray(v,P),v[P+3]=d.constant}g.value=v,g.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,v}}class Of extends or{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new jm(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new wo(5,5,5),l=new Ni({name:"CubemapFromEquirect",uniforms:Ma(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:va});l.uniforms.tEquirect.value=t;const d=new Mn(o,l),f=t.minFilter;return t.minFilter===is&&(t.minFilter=oi),new vf(1,10,this).update(e,d),t.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,r,o);e.setRenderTarget(l)}}const G0=256,db=3,fb=20,Jm=256,Qm=16,hb=3,pb=new ye,mb=new Bt;class uc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new vf(1,10,null),this._boxMesh=new Mn(new wo(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:d=256,position:f=pb}=l,g=this._renderer;this._setSize(d);const m=this._allocateTarget(),y=this._getSourceTarget(!0);t>0&&(y.texture.mipmapsAutoUpdate=!1);const _=g.autoClear,h=g.autoClearColor,b=g.autoClearDepth,w=g.autoClearStencil,M=e.background;g.autoClear=!0,g.autoClearColor=!0,g.autoClearDepth=!0,g.autoClearStencil=!0,M===null&&(e.background=g.getClearColor(mb));const v=new vf(r,o,y);return v.position.copy(f),v.update(g,e),g.autoClear=_,g.autoClearColor=h,g.autoClearDepth=b,g.autoClearStencil=w,e.background=M,t>0&&(y.texture.mipmapsAutoUpdate=!0,this._blur(m,t)),this._applyPMREM(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=W0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=V0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(G0,O_(e))}_fromTexture(e,t){e.mapping===ya||e.mapping===mo?this._setSize(e.image.length===0?G0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=j0(e,!1,!1),r=Math.log2(e)-db;for(let o=0;o<=r;o++)t.texture.mipmaps.push({width:e>>o,height:e>>o});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=j0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const o=this._boxMesh,l=this._cubeCamera;o.material=r,l.renderTarget=e,l.activeMipmapLevel=t;const d=e.width>>t;e.viewport.set(0,0,d,d),l.update(this._renderer,o),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ya||e.mapping===mo?(this._cubemapMaterial===null&&(this._cubemapMaterial=W0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=V0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=gb(),this._integrationMaterial=xb());const t=this._cubeSize,r=e.texture.mipmaps.length-1,o=this._ggxMaterial.uniforms;o.envMap.value=this._sourceTarget.texture;const l=this._integrationMaterial.uniforms;l.envMap.value=this._sourceTarget.texture,l.sourceLod.value=Math.log2(t/Qm);for(let d=0;d<=r;d++){const f=uc.lodToRoughness(d,r);if(d>r-hb)l.roughness.value=f,this._renderCube(e,d,this._integrationMaterial);else{const g=f>0?Math.log2(t)+.5*Math.log2(6/(Jm*Math.pow(f,4)))+.5:0;o.roughness.value=f,o.lodBias.value=g,this._renderCube(e,d,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=vb());const r=this._blurMaterial,o=r.uniforms,l=this._sourceTarget;o.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,o.envMap.value=l.texture,this._renderCube(e,0,r),o.envMap.value=e.texture,this._renderCube(l,0,r)}}function j0(s,e,t){return new Of(s,{minFilter:is,generateMipmaps:e,type:cr,colorSpace:oc,depthBuffer:t})}function Eo(s,e,t){return new Ni({name:s,uniforms:e,vertexShader:kt.cube_vert,fragmentShader:t,side:Bn,blending:va,depthTest:!1,depthWrite:!1})}function gb(){return Eo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Jm}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function xb(){return Eo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Qm}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function vb(){return Eo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${fb}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function V0(){return Eo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function W0(){return Eo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function _b(s){let e=new WeakMap,t=new WeakMap,r=null;function o(h,b=!1){return h==null?null:b?d(h):l(h)}function l(h){if(h&&h.isTexture){const b=h.mapping;if(b===td||b===nd)if(e.has(h)){const w=e.get(h).texture;return f(w,h.mapping)}else{const w=h.image;if(w&&w.height>0){const M=new Of(w.height);return M.fromEquirectangularTexture(s,h),e.set(h,M),h.addEventListener("dispose",m),f(M.texture,h.mapping)}else return null}}return h}function d(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const b=h.mapping,w=b===td||b===nd,M=b===ya||b===mo;if(w||M){let v=t.get(h);const S=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return r===null&&(r=new uc(s)),v=w?r.fromEquirectangular(h,v):r.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const N=h.image;return w&&N&&N.height>0||M&&N&&g(N)?(r===null&&(r=new uc(s)),v=w?r.fromEquirectangular(h):r.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",y),v.texture):null}}}return h}function f(h,b){return b===td?h.mapping=ya:b===nd&&(h.mapping=mo),h}function g(h){let b=0;const w=6;for(let M=0;M<w;M++)h[M]!==void 0&&b++;return b===w}function m(h){const b=h.target;b.removeEventListener("dispose",m);const w=e.get(b);w!==void 0&&(e.delete(b),w.dispose())}function y(h){const b=h.target;b.removeEventListener("dispose",y);const w=t.get(b);w!==void 0&&(t.delete(b),w.dispose())}function _(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:_}}function yb(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&tc("WebGLRenderer: "+r+" extension not supported."),o}}}function Sb(s,e,t,r){const o={},l=new WeakMap,d=new FinalizationRegistry(w=>delete o[w]);function f(w){g(w.target)}function g(w){w.index!==null&&e.remove(w.index);for(const v in w.attributes)e.remove(w.attributes[v]);w.removeEventListener("dispose",f),delete o[w.id],d.unregister(w);const M=l.get(w);M&&(e.remove(M),l.delete(w)),r.releaseStatesOfGeometry(w),w.isInstancedBufferGeometry===!0&&delete w._maxInstanceCount,t.memory.geometries--}function m(w,M){return o[M.id]!==void 0||(M.addEventListener("dispose",f),o[M.id]=new WeakRef(M),d.register(M,M.id,M),t.memory.geometries++),M}function y(w){const M=w.attributes;for(const v in M)e.update(M[v],s.ARRAY_BUFFER)}function _(w){const M=w.index,v=w.attributes.position;let S=0;if(v===void 0)return;const N=M!==null?M.array.length:v.array.length/3-1,z=v.count>=65535?Gm:Hm,P=new z(Math.ceil(N/3)*6,1),U=P.array;if(M!==null){const E=M.array;S=M.version;for(let D=0,K=0;D<N;D+=3){const G=E[D+0],V=E[D+1],H=E[D+2];U[K++]=G,U[K++]=V,U[K++]=V,U[K++]=H,U[K++]=H,U[K++]=G}}else{S=v.version;for(let E=0,D=0;E<N;E+=3){const K=E+0,G=E+1,V=E+2;U[D++]=K,U[D++]=G,U[D++]=G,U[D++]=V,U[D++]=V,U[D++]=K}}P.version=S;const I=l.get(w);I&&e.remove(I),l.set(w,P)}function h(w){const M=l.get(w);if(M){const v=w.index;v!==null&&M.version<v.version&&_(w)}else _(w);return l.get(w)}function b(){for(const w in o){const M=o[w].deref();M!==void 0&&g(M)}}return{get:m,update:y,getWireframeAttribute:h,dispose:b}}function bb(s,e,t){let r;function o(_){r=_}let l,d;function f(_){l=_.type,d=_.bytesPerElement}function g(_,h){s.drawElements(r,h,l,_*d),t.update(h,r,1)}function m(_,h,b){b!==0&&(s.drawElementsInstanced(r,h,l,_*d,b),t.update(h,r,b))}function y(_,h,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,h,0,l,_,0,b);let M=0;for(let v=0;v<b;v++)M+=h[v];t.update(M,r,1)}this.setMode=o,this.setIndex=f,this.render=g,this.renderInstances=m,this.renderMultiDraw=y}function wb(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,d,f){switch(t.calls++,d){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Jt("WebGLInfo: Unknown draw mode:",d);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function Mb(s,e,t){const r=new WeakMap,o=new xn;function l(d,f,g){const m=d.morphTargetInfluences,y=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=y!==void 0?y.length:0;let h=r.get(f);if(h===void 0||h.count!==_){let G=function(){D.dispose(),r.delete(f),f.removeEventListener("dispose",G)};var b=G;h!==void 0&&h.texture.dispose();const w=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,v=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],N=f.morphAttributes.normal||[],z=f.morphAttributes.color||[];let P=0;w===!0&&(P=1),M===!0&&(P=2),v===!0&&(P=3);let U=f.attributes.position.count*P,I=1;U>e.maxTextureSize&&(I=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const E=new Float32Array(U*I*4*_),D=new Fm(E,U,I,_);D.type=sr,D.needsUpdate=!0;const K=P*4;for(let V=0;V<_;V++){const H=S[V],$=N[V],B=z[V],ee=U*I*4*V;for(let he=0;he<H.count;he++){const X=he*K;w===!0&&(o.fromBufferAttribute(H,he),E[ee+X+0]=o.x,E[ee+X+1]=o.y,E[ee+X+2]=o.z,E[ee+X+3]=0),M===!0&&(o.fromBufferAttribute($,he),E[ee+X+4]=o.x,E[ee+X+5]=o.y,E[ee+X+6]=o.z,E[ee+X+7]=0),v===!0&&(o.fromBufferAttribute(B,he),E[ee+X+8]=o.x,E[ee+X+9]=o.y,E[ee+X+10]=o.z,E[ee+X+11]=B.itemSize===4?o.w:1)}}h={count:_,texture:D,size:new Vt(U,I)},r.set(f,h),f.addEventListener("dispose",G)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)g.getUniforms().setValue(s,"morphTexture",d.morphTexture,t);else{let w=0;for(let v=0;v<m.length;v++)w+=m[v];const M=f.morphTargetsRelative?1:1-w;g.getUniforms().setValue(s,"morphTargetBaseInfluence",M),g.getUniforms().setValue(s,"morphTargetInfluences",m)}g.getUniforms().setValue(s,"morphTargetsTexture",h.texture,t),g.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:l}}function Eb(s,e,t,r,o){let l=new WeakMap;function d(m){const y=o.render.frame,_=m.geometry,h=e.get(m,_);if(l.get(h)!==y&&(e.update(h),l.set(h,y)),m.isInstancedMesh&&(m.hasEventListener("dispose",g)===!1&&m.addEventListener("dispose",g),l.get(m)!==y&&(t.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,y))),m.isSkinnedMesh){const b=m.skeleton;l.get(b)!==y&&(b.update(),l.set(b,y))}return h}function f(){l=new WeakMap}function g(m){const y=m.target;y.removeEventListener("dispose",g),r.releaseStatesOfObject(y),t.remove(y.instanceMatrix),y.instanceColor!==null&&t.remove(y.instanceColor)}return{update:d,dispose:f}}const Tb={[_m]:"LINEAR_TONE_MAPPING",[ym]:"REINHARD_TONE_MAPPING",[Sm]:"CINEON_TONE_MAPPING",[bm]:"ACES_FILMIC_TONE_MAPPING",[Mm]:"AGX_TONE_MAPPING",[Em]:"NEUTRAL_TONE_MAPPING",[wm]:"CUSTOM_TONE_MAPPING"};function Cb(s,e,t,r,o,l){const d=new or(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,g=null,m=null;const y=new ur;y.setAttribute("position",new zn([-1,3,0,-1,-1,0,3,-1,0],3)),y.setAttribute("uv",new zn([0,2,0,0,2,0],2));const _=new gy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Mn(y,_),b=new qm(-1,1,1,-1,0,1);let w=null,M=null,v=!1,S,N=null,z=[],P=!1;this.setSize=function(U,I){d.setSize(U,I),f!==null&&f.setSize(U,I),g!==null&&g.setSize(U,I);for(let E=0;E<z.length;E++){const D=z[E];D.setSize&&D.setSize(U,I)}},this.setEffects=function(U){z=U,P=z.length>0&&z[0].isRenderPass===!0;const I=d.width,E=d.height;z.length>0&&f===null&&(f=new or(I,E,{type:cr,depthBuffer:!1,stencilBuffer:!1}),g=new or(I,E,{type:cr,depthBuffer:!1,stencilBuffer:!1}));const D=o===!0&&z.some(K=>K.needsDepthTexture===!0);D!==(d.depthTexture!==null)&&(D===!0&&m===null&&(m=new wa(I,E),l===!0&&(m.format=rs,m.type=ba)),d.dispose(),d.depthTexture=D?m:null,d.resolveDepthBuffer=D,d.storeMultisampledDepthBuffer=D);for(let K=0;K<z.length;K++){const G=z[K];G.setSize&&G.setSize(I,E),D&&G.needsDepthTexture===!0&&G.setDepthTexture&&G.setDepthTexture(m)}},this.begin=function(U,I){if(v||U.toneMapping===Ar&&z.length===0)return!1;if(N=I,I!==null){const E=I.width,D=I.height;(d.width!==E||d.height!==D)&&this.setSize(E,D)}return P===!1&&U.setRenderTarget(d),S=U.toneMapping,U.toneMapping=Ar,!0},this.hasRenderPass=function(){return P},this.end=function(U,I){U.toneMapping=S,v=!0;let E=d,D=f;for(let K=0;K<z.length;K++){const G=z[K];G.enabled!==!1&&(G.render(U,D,E,I),G.needsSwap!==!1&&(E=D,D=D===f?g:f))}if(w!==U.outputColorSpace||M!==U.toneMapping){w=U.outputColorSpace,M=U.toneMapping,_.defines={},Wt.getTransfer(w)===en&&(_.defines.SRGB_TRANSFER="");const K=Tb[M];K&&(_.defines[K]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=E.texture,U.setRenderTarget(N),U.render(h,b),N=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){d.dispose(),f!==null&&f.dispose(),g!==null&&g.dispose(),y.dispose(),_.dispose()}}const eg=new Xn,tg=new wa(1,1),ng=new Vm(1),ig=new Fm,rg=new X_,sg=new jm,$0=[],X0=[],Y0=new Float32Array(16),q0=new Float32Array(9),K0=new Float32Array(4);function Ta(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=$0[o];if(l===void 0&&(l=new Float32Array(o),$0[o]=l),e!==0){r.toArray(l,0);for(let d=1,f=0;d!==e;++d)f+=t,s[d].toArray(l,f)}return l}function An(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Rn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function gc(s,e){let t=X0[e];t===void 0&&(t=new Int32Array(e),X0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function Ab(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Rb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(An(t,e))return;s.uniform2fv(this.addr,e),Rn(t,e)}}function Nb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(An(t,e))return;s.uniform3fv(this.addr,e),Rn(t,e)}}function Pb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(An(t,e))return;s.uniform4fv(this.addr,e),Rn(t,e)}}function Db(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(An(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Rn(t,e)}else{if(An(t,r))return;K0.set(r),s.uniformMatrix2fv(this.addr,!1,K0),Rn(t,r)}}function Lb(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(An(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Rn(t,e)}else{if(An(t,r))return;q0.set(r),s.uniformMatrix3fv(this.addr,!1,q0),Rn(t,r)}}function Ib(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(An(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Rn(t,e)}else{if(An(t,r))return;Y0.set(r),s.uniformMatrix4fv(this.addr,!1,Y0),Rn(t,r)}}function kb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function zb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(An(t,e))return;s.uniform2iv(this.addr,e),Rn(t,e)}}function Ub(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(An(t,e))return;s.uniform3iv(this.addr,e),Rn(t,e)}}function Fb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(An(t,e))return;s.uniform4iv(this.addr,e),Rn(t,e)}}function Ob(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Bb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(An(t,e))return;s.uniform2uiv(this.addr,e),Rn(t,e)}}function Hb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(An(t,e))return;s.uniform3uiv(this.addr,e),Rn(t,e)}}function Gb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(An(t,e))return;s.uniform4uiv(this.addr,e),Rn(t,e)}}function xc(s){return s.version===0&&(s.compareFunction=zm,s.needsUpdate=!0),s}function jb(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?l=xc(tg):l=eg,t.setTexture2D(e||l,o)}function Vb(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||rg,o)}function Wb(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_CUBE_SHADOW?l=xc(ng):l=sg,t.setTextureCube(e||l,o)}function $b(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||ig,o)}function Xb(s){switch(s){case 5126:return Ab;case 35664:return Rb;case 35665:return Nb;case 35666:return Pb;case 35674:return Db;case 35675:return Lb;case 35676:return Ib;case 5124:case 35670:return kb;case 35667:case 35671:return zb;case 35668:case 35672:return Ub;case 35669:case 35673:return Fb;case 5125:return Ob;case 36294:return Bb;case 36295:return Hb;case 36296:return Gb;case 35678:case 36198:case 36298:case 36306:case 35682:return jb;case 35679:case 36299:case 36307:return Vb;case 35680:case 36300:case 36308:case 36293:return Wb;case 36289:case 36303:case 36311:case 36292:return $b}}function Yb(s,e){s.uniform1fv(this.addr,e)}function qb(s,e){const t=Ta(e,this.size,2);s.uniform2fv(this.addr,t)}function Kb(s,e){const t=Ta(e,this.size,3);s.uniform3fv(this.addr,t)}function Zb(s,e){const t=Ta(e,this.size,4);s.uniform4fv(this.addr,t)}function Jb(s,e){const t=Ta(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Qb(s,e){const t=Ta(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function ew(s,e){const t=Ta(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function tw(s,e){s.uniform1iv(this.addr,e)}function nw(s,e){s.uniform2iv(this.addr,e)}function iw(s,e){s.uniform3iv(this.addr,e)}function rw(s,e){s.uniform4iv(this.addr,e)}function sw(s,e){s.uniform1uiv(this.addr,e)}function aw(s,e){s.uniform2uiv(this.addr,e)}function ow(s,e){s.uniform3uiv(this.addr,e)}function lw(s,e){s.uniform4uiv(this.addr,e)}function cw(s,e,t){const r=this.cache,o=e.length,l=gc(t,o);An(r,l)||(s.uniform1iv(this.addr,l),Rn(r,l));let d;this.type===s.SAMPLER_2D_SHADOW?d=xc(tg):d=eg;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||d,l[f])}function uw(s,e,t){const r=this.cache,o=e.length,l=gc(t,o);An(r,l)||(s.uniform1iv(this.addr,l),Rn(r,l));for(let d=0;d!==o;++d)t.setTexture3D(e[d]||rg,l[d])}function dw(s,e,t){const r=this.cache,o=e.length,l=gc(t,o);An(r,l)||(s.uniform1iv(this.addr,l),Rn(r,l));let d;this.type===s.SAMPLER_CUBE_SHADOW?d=xc(ng):d=sg;for(let f=0;f!==o;++f)t.setTextureCube(e[f]||d,l[f])}function fw(s,e,t){const r=this.cache,o=e.length,l=gc(t,o);An(r,l)||(s.uniform1iv(this.addr,l),Rn(r,l));for(let d=0;d!==o;++d)t.setTexture2DArray(e[d]||ig,l[d])}function hw(s){switch(s){case 5126:return Yb;case 35664:return qb;case 35665:return Kb;case 35666:return Zb;case 35674:return Jb;case 35675:return Qb;case 35676:return ew;case 5124:case 35670:return tw;case 35667:case 35671:return nw;case 35668:case 35672:return iw;case 35669:case 35673:return rw;case 5125:return sw;case 36294:return aw;case 36295:return ow;case 36296:return lw;case 35678:case 36198:case 36298:case 36306:case 35682:return cw;case 35679:case 36299:case 36307:return uw;case 35680:case 36300:case 36308:case 36293:return dw;case 36289:case 36303:case 36311:case 36292:return fw}}class pw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Xb(t.type)}}class mw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hw(t.type)}}class gw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,d=o.length;l!==d;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Ad=/(\w+)(\])?(\[|\.)?/g;function Z0(s,e){s.seq.push(e),s.map[e.id]=e}function xw(s,e,t){const r=s.name,o=r.length;for(Ad.lastIndex=0;;){const l=Ad.exec(r),d=Ad.lastIndex;let f=l[1];const g=l[2]==="]",m=l[3];if(g&&(f=f|0),m===void 0||m==="["&&d+2===o){Z0(t,m===void 0?new pw(f,s,e):new mw(f,s,e));break}else{let _=t.map[f];_===void 0&&(_=new gw(f),Z0(t,_)),t=_}}}class ic{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const f=e.getActiveUniform(t,d),g=e.getUniformLocation(t,f.name);xw(f,g,this)}const o=[],l=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(d):l.push(d);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,d=t.length;l!==d;++l){const f=t[l],g=r[f.id];g.needsUpdate!==!1&&f.setValue(e,g.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const d=e[o];d.id in t&&r.push(d)}return r}}function J0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const vw=37297;let _w=0;function yw(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let d=o;d<l;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${t[d]}`)}return r.join(`
`)}const Q0=new Rt;function Sw(s){Wt._getMatrix(Q0,Wt.workingColorSpace,s);const e=`mat3( ${Q0.elements.map(t=>t.toFixed(4))} )`;switch(Wt.getTransfer(s)){case lc:return[e,"LinearTransferOETF"];case en:return[e,"sRGBTransferOETF"];default:return Ct("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function em(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const d=/ERROR: 0:(\d+)/.exec(l);if(d){const f=parseInt(d[1]);return t.toUpperCase()+`

`+l+`

`+yw(s.getShaderSource(e),f)}else return l}function bw(s,e){const t=Sw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const ww={[_m]:"Linear",[ym]:"Reinhard",[Sm]:"Cineon",[bm]:"ACESFilmic",[Mm]:"AgX",[Em]:"Neutral",[wm]:"Custom"};function Mw(s,e){const t=ww[e];return t===void 0?(Ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ql=new ye;function Ew(){Wt.getLuminanceCoefficients(ql);const s=ql.x.toFixed(4),e=ql.y.toFixed(4),t=ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(co).join(`
`)}function Cw(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Aw(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),d=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[d]={type:l.type,location:s.getAttribLocation(e,d),locationSize:f}}return t}function co(s){return s!==""}function tm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function nm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Rw=/^[ \t]*#include +<([\w\d./]+)>/gm;function _f(s){return s.replace(Rw,Nw)}function Nw(s,e){const t=kt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return _f(t)}const Pw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function im(s){return s.replace(Pw,Dw)}function Dw(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function rm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Lw={[Kl]:"SHADOWMAP_TYPE_PCF",[oo]:"SHADOWMAP_TYPE_VSM"};function Iw(s){return Lw[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const kw={[mo]:"ENVMAP_MODE_REFRACTION"};function zw(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":kw[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Uw={[vm]:"ENVMAP_BLENDING_MULTIPLY",[b_]:"ENVMAP_BLENDING_MIX",[w_]:"ENVMAP_BLENDING_ADD"};function Fw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Uw[s.combine]||"ENVMAP_BLENDING_NONE"}function Ow(s,e,t,r){const o=s.getContext(),l=t.defines;let d=t.vertexShader,f=t.fragmentShader;const g=Iw(t),m=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",y=zw(t),_=Fw(t),h=Tw(t),b=Cw(l),w=o.createProgram();let M,v,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(co).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(co).join(`
`),v.length>0&&(v+=`
`)):(M=[rm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+y:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+g:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),v=[rm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+y:"",t.envMap?"#define "+_:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+g:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ar?"#define TONE_MAPPING":"",t.toneMapping!==Ar?kt.tonemapping_pars_fragment:"",t.toneMapping!==Ar?Mw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,bw("linearToOutputTexel",t.outputColorSpace),Ew(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(co).join(`
`)),d=_f(d),d=tm(d,t),d=nm(d,t),f=_f(f),f=tm(f,t),f=nm(f,t),d=im(d),f=im(f),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,M=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",t.glslVersion===v0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===v0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=S+M+d,z=S+v+f,P=J0(o,o.VERTEX_SHADER,N),U=J0(o,o.FRAGMENT_SHADER,z);o.attachShader(w,P),o.attachShader(w,U),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function I(G){if(s.debug.checkShaderErrors){const V=o.getProgramInfoLog(w)||"",H=o.getShaderInfoLog(P)||"",$=o.getShaderInfoLog(U)||"",B=V.trim(),ee=H.trim(),he=$.trim();let X=!0,ie=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,P,U);else{const O=em(o,P,"vertex"),Q=em(o,U,"fragment");Jt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+B+`
`+O+`
`+Q)}else B!==""?Ct("WebGLProgram: Program Info Log:",B):(ee===""||he==="")&&(ie=!1);ie&&(G.diagnostics={runnable:X,programLog:B,vertexShader:{log:ee,prefix:M},fragmentShader:{log:he,prefix:v}})}o.deleteShader(P),o.deleteShader(U),E=new ic(o,w),D=Aw(o,w)}let E;this.getUniforms=function(){return E===void 0&&I(this),E};let D;this.getAttributes=function(){return D===void 0&&I(this),D};let K=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return K===!1&&(K=o.getProgramParameter(w,vw)),K},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_w++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=P,this.fragmentShader=U,this}let Bw=0;class Hw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Gw(e),t.set(e,r)),r}}class Gw{constructor(e){this.id=Bw++,this.code=e,this.usedTimes=0}}function jw(s){return s===Ds||s===sc||s===ac}function Vw(s,e,t,r,o,l){const d=new Om,f=new Hw,g=new Set,m=[],y=new Map,_=r.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(E){return g.add(E),E===0?"uv":`uv${E}`}function w(E,D,K,G,V,H){const $=G.fog,B=V.geometry,ee=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?G.environment:null,he=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,X=e.get(E.envMap||ee,he),ie=h[E.type];let O=r.precision;E.precision!==null&&(O=r.getMaxPrecision(E.precision),O!==E.precision&&Ct("WebGLProgram.getParameters:",E.precision,"not supported, using",O,"instead."));const Q=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,k=Q!==void 0?Q.length:0;let L=0;B.morphAttributes.position!==void 0&&(L=1),B.morphAttributes.normal!==void 0&&(L=2),B.morphAttributes.color!==void 0&&(L=3);let re,F,te,ce;if(ie){const Be=nr[ie];re=Be.vertexShader,F=Be.fragmentShader}else{re=E.vertexShader,F=E.fragmentShader;const Be=f.getVertexShaderStage(E),bt=f.getFragmentShaderStage(E);f.update(E,Be,bt),te=Be.id,ce=bt.id}const ue=s.getRenderTarget(),xe=s.state.buffers.depth.getReversed(),Ne=V.isInstancedMesh===!0,Qe=V.isBatchedMesh===!0,Xe=!!E.map,De=!!E.matcap,je=!!X,Ke=je&&X.isPMREMTexture===!0,xt=!!E.aoMap,wt=!!E.lightMap,yt=!!E.bumpMap&&E.wireframe===!1,gt=!!E.normalMap,Pt=!!E.displacementMap,Mt=!!E.emissiveMap,ge=!!E.metalnessMap,Dt=!!E.roughnessMap,sn=E.anisotropy>0,Z=E.clearcoat>0,Gt=E.diffuseRoughness>0,Lt=E.dispersion>0,It=E.retroreflectivity>0,Ie=E.iridescence>0,Nt=E.sheen>0,at=E.transmission>0,dt=sn&&!!E.anisotropyMap,R=Z&&!!E.clearcoatMap,T=Z&&!!E.clearcoatNormalMap,ae=Z&&!!E.clearcoatRoughnessMap,Le=Gt&&!!E.diffuseRoughnessMap,Ee=Ie&&!!E.iridescenceMap,ze=Ie&&!!E.iridescenceThicknessMap,Ue=Nt&&!!E.sheenColorMap,we=Nt&&!!E.sheenRoughnessMap,Me=!!E.specularMap,Oe=!!E.specularColorMap,W=!!E.specularIntensityMap,Ce=at&&!!E.transmissionMap,Se=at&&!!E.thicknessMap,Ae=!!E.gradientMap,_e=!!E.alphaMap,Te=E.alphaTest>0,Ge=!!E.alphaHash,rt=!!E.extensions;let Pe=Ar;E.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Pe=s.toneMapping);const Ze=Ke?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,ct={shaderID:ie,shaderType:E.type,shaderName:E.name,vertexShader:re,fragmentShader:F,defines:E.defines,customVertexShaderID:te,customFragmentShaderID:ce,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:O,batching:Qe,batchingColor:Qe&&V._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&V.instanceColor!==null,instancingMorph:Ne&&V.morphTexture!==null,outputColorSpace:ue===null?s.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Wt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Xe,matcap:De,envMap:je,envMapMode:je&&X.mapping,envMapPMREM:Ke,envMapMaxLod:Ke?Ze.length-1:null,envMapSize:Ke?Ze[0].width:null,aoMap:xt,lightMap:wt,bumpMap:yt,normalMap:gt,displacementMap:Pt,emissiveMap:Mt,normalMapObjectSpace:gt&&E.normalMapType===T_,normalMapTangentSpace:gt&&E.normalMapType===gf,packedNormalMap:gt&&E.normalMapType===gf&&jw(E.normalMap.format),metalnessMap:ge,roughnessMap:Dt,anisotropy:sn,anisotropyMap:dt,clearcoat:Z,clearcoatMap:R,clearcoatNormalMap:T,clearcoatRoughnessMap:ae,diffuseRoughness:Gt,diffuseRoughnessMap:Le,dispersion:Lt,retroreflection:It,iridescence:Ie,iridescenceMap:Ee,iridescenceThicknessMap:ze,sheen:Nt,sheenColorMap:Ue,sheenRoughnessMap:we,specularMap:Me,specularColorMap:Oe,specularIntensityMap:W,transmission:at,transmissionMap:Ce,thicknessMap:Se,gradientMap:Ae,opaque:E.transparent===!1&&E.blending===uo&&E.alphaToCoverage===!1,alphaMap:_e,alphaTest:Te,alphaHash:Ge,combine:E.combine,mapUv:Xe&&b(E.map.channel),aoMapUv:xt&&b(E.aoMap.channel),lightMapUv:wt&&b(E.lightMap.channel),bumpMapUv:yt&&b(E.bumpMap.channel),normalMapUv:gt&&b(E.normalMap.channel),displacementMapUv:Pt&&b(E.displacementMap.channel),emissiveMapUv:Mt&&b(E.emissiveMap.channel),metalnessMapUv:ge&&b(E.metalnessMap.channel),roughnessMapUv:Dt&&b(E.roughnessMap.channel),anisotropyMapUv:dt&&b(E.anisotropyMap.channel),clearcoatMapUv:R&&b(E.clearcoatMap.channel),clearcoatNormalMapUv:T&&b(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&b(E.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Le&&b(E.diffuseRoughnessMap.channel),iridescenceMapUv:Ee&&b(E.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&b(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&b(E.sheenColorMap.channel),sheenRoughnessMapUv:we&&b(E.sheenRoughnessMap.channel),specularMapUv:Me&&b(E.specularMap.channel),specularColorMapUv:Oe&&b(E.specularColorMap.channel),specularIntensityMapUv:W&&b(E.specularIntensityMap.channel),transmissionMapUv:Ce&&b(E.transmissionMap.channel),thicknessMapUv:Se&&b(E.thicknessMap.channel),alphaMapUv:_e&&b(E.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(gt||sn),vertexNormals:!!B.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!B.attributes.uv&&(Xe||_e),fog:!!$,useFog:E.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||B.attributes.normal===void 0&&gt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:xe,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:L,numSunLights:D.sun.length,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numSunLightShadows:D.sunShadowMap.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:H.filter(Be=>Be.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&K.length>0,shadowMapType:s.shadowMap.type,toneMapping:Pe,decodeVideoTexture:Xe&&E.map.isVideoTexture===!0&&Wt.getTransfer(E.map.colorSpace)===en,decodeVideoTextureEmissive:Mt&&E.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(E.emissiveMap.colorSpace)===en,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Xi,flipSided:E.side===Bn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:rt&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&E.extensions.multiDraw===!0||Qe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ct.vertexUv1s=g.has(1),ct.vertexUv2s=g.has(2),ct.vertexUv3s=g.has(3),g.clear(),ct}function M(E){const D=[];if(E.shaderID?D.push(E.shaderID):(D.push(E.customVertexShaderID),D.push(E.customFragmentShaderID)),E.defines!==void 0)for(const K in E.defines)D.push(K),D.push(E.defines[K]);return E.isRawShaderMaterial===!1&&(v(D,E),S(D,E),D.push(s.outputColorSpace)),D.push(E.customProgramCacheKey),D.join()}function v(E,D){E.push(D.precision),E.push(D.outputColorSpace),E.push(D.envMapMode),E.push(D.envMapPMREM),E.push(D.envMapMaxLod),E.push(D.envMapSize),E.push(D.mapUv),E.push(D.alphaMapUv),E.push(D.lightMapUv),E.push(D.aoMapUv),E.push(D.bumpMapUv),E.push(D.normalMapUv),E.push(D.displacementMapUv),E.push(D.emissiveMapUv),E.push(D.metalnessMapUv),E.push(D.roughnessMapUv),E.push(D.anisotropyMapUv),E.push(D.clearcoatMapUv),E.push(D.clearcoatNormalMapUv),E.push(D.clearcoatRoughnessMapUv),E.push(D.diffuseRoughnessMapUv),E.push(D.iridescenceMapUv),E.push(D.iridescenceThicknessMapUv),E.push(D.sheenColorMapUv),E.push(D.sheenRoughnessMapUv),E.push(D.specularMapUv),E.push(D.specularColorMapUv),E.push(D.specularIntensityMapUv),E.push(D.transmissionMapUv),E.push(D.thicknessMapUv),E.push(D.combine),E.push(D.fogExp2),E.push(D.sizeAttenuation),E.push(D.morphTargetsCount),E.push(D.numSunLights),E.push(D.numDirLights),E.push(D.numPointLights),E.push(D.numSpotLights),E.push(D.numSpotLightMaps),E.push(D.numHemiLights),E.push(D.numRectAreaLights),E.push(D.numSunLightShadows),E.push(D.numDirLightShadows),E.push(D.numPointLightShadows),E.push(D.numSpotLightShadows),E.push(D.numSpotLightShadowsWithMaps),E.push(D.numLightProbes),E.push(D.numLightProbeGrids),E.push(D.shadowMapType),E.push(D.toneMapping),E.push(D.numClippingPlanes),E.push(D.numClipIntersection),E.push(D.depthPacking)}function S(E,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.retroreflection&&d.enable(24),D.diffuseRoughness&&d.enable(25),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),D.packedNormalMap&&d.enable(22),D.vertexNormals&&d.enable(23),E.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),D.numLightProbeGrids>0&&d.enable(22),D.hasPositionAttribute&&d.enable(23),E.push(d.mask)}function N(E){const D=h[E.type];let K;if(D){const G=nr[D];K=hy.clone(G.uniforms)}else K=E.uniforms;return K}function z(E,D){let K=y.get(D);return K!==void 0?++K.usedTimes:(K=new Ow(s,D,E,o),m.push(K),y.set(D,K)),K}function P(E){if(--E.usedTimes===0){const D=m.indexOf(E);m[D]=m[m.length-1],m.pop(),y.delete(E.cacheKey),E.destroy()}}function U(E){f.remove(E)}function I(){f.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:N,acquireProgram:z,releaseProgram:P,releaseShaderCache:U,programs:m,dispose:I}}function Ww(){let s=new WeakMap;function e(d){return s.has(d)}function t(d){let f=s.get(d);return f===void 0&&(f={},s.set(d,f)),f}function r(d){s.delete(d)}function o(d,f,g){s.get(d)[f]=g}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function $w(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function sm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function am(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function d(h){let b=0;return h.isInstancedMesh&&(b+=2),h.isSkinnedMesh&&(b+=1),b}function f(h,b,w,M,v,S){let N=s[e];return N===void 0?(N={id:h.id,object:h,geometry:b,material:w,materialVariant:d(h),groupOrder:M,renderOrder:h.renderOrder,z:v,group:S},s[e]=N):(N.id=h.id,N.object=h,N.geometry=b,N.material=w,N.materialVariant=d(h),N.groupOrder=M,N.renderOrder=h.renderOrder,N.z=v,N.group=S),e++,N}function g(h,b,w,M,v,S,N){N.reversedDepth===!0&&(v=-v);const z=f(h,b,w,M,v,S);w.transmission>0?r.push(z):w.transparent===!0?o.push(z):t.push(z)}function m(h,b,w,M,v,S){const N=f(h,b,w,M,v,S);w.transmission>0?r.unshift(N):w.transparent===!0?o.unshift(N):t.unshift(N)}function y(h,b){t.length>1&&t.sort(h||$w),r.length>1&&r.sort(b||sm),o.length>1&&o.sort(b||sm)}function _(){for(let h=e,b=s.length;h<b;h++){const w=s[h];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:g,unshift:m,finish:_,sort:y}}function Xw(){let s=new WeakMap;function e(r,o){const l=s.get(r);let d;return l===void 0?(d=new am,s.set(r,[d])):o>=l.length?(d=new am,l.push(d)):d=l[o],d}function t(){s=new WeakMap}return{get:e,dispose:t}}function Yw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ye,color:new Bt};break;case"SpotLight":t={position:new ye,direction:new ye,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ye,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ye,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":t={color:new Bt,position:new ye,halfWidth:new ye,halfHeight:new ye};break}return s[e.id]=t,t}}}function qw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Kw=0;function Zw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Jw(s){const e=new Yw,t=qw(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ye);const o=new ye,l=new vn,d=new vn;function f(m){let y=0,_=0,h=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let b=0,w=0,M=0,v=0,S=0,N=0,z=0,P=0,U=0,I=0,E=0,D=0,K=0,G=0;m.sort(Zw);for(let H=0,$=m.length;H<$;H++){const B=m[H],ee=B.color,he=B.intensity,X=B.distance;let ie=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Ds?ie=B.shadow.map.texture:ie=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)y+=ee.r*he,_+=ee.g*he,h+=ee.b*he;else if(B.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(B.sh.coefficients[O],he);G++}else if(B.isSunLight){const O=e.get(B);if(O.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const Q=B.shadow,k=t.get(B);k.shadowIntensity=Q.intensity,k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),r.sunShadow[w]=k,r.sunShadowMap[w]=ie;const L=Q.getViewportCount();for(let re=0;re<L;re++)r.sunShadowMatrix[M+re]=Q.getMatrix(re),r.sunShadowCascade[M+re]=Q._cascadeData[re];M+=L,w++}r.sun[b]=O,b++}else if(B.isDirectionalLight){const O=e.get(B);if(O.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const Q=B.shadow,k=t.get(B);k.shadowIntensity=Q.intensity,k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,r.directionalShadow[v]=k,r.directionalShadowMap[v]=ie,r.directionalShadowMatrix[v]=B.shadow.matrix,U++}r.directional[v]=O,v++}else if(B.isSpotLight){const O=e.get(B);O.position.setFromMatrixPosition(B.matrixWorld),O.color.copy(ee).multiplyScalar(he),O.distance=X,O.coneCos=Math.cos(B.angle),O.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),O.decay=B.decay,r.spot[N]=O;const Q=B.shadow;if(B.map&&(r.spotLightMap[D]=B.map,D++,Q.updateMatrices(B),B.castShadow&&K++),r.spotLightMatrix[N]=Q.matrix,B.castShadow){const k=t.get(B);k.shadowIntensity=Q.intensity,k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,r.spotShadow[N]=k,r.spotShadowMap[N]=ie,E++}N++}else if(B.isRectAreaLight){const O=e.get(B);O.color.copy(ee).multiplyScalar(he),O.halfWidth.set(B.width*.5,0,0),O.halfHeight.set(0,B.height*.5,0),r.rectArea[z]=O,z++}else if(B.isPointLight){const O=e.get(B);if(O.color.copy(B.color).multiplyScalar(B.intensity),O.distance=B.distance,O.decay=B.decay,B.castShadow){const Q=B.shadow,k=t.get(B);k.shadowIntensity=Q.intensity,k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,k.shadowCameraNear=Q.camera.near,k.shadowCameraFar=Q.camera.far,r.pointShadow[S]=k,r.pointShadowMap[S]=ie,r.pointShadowMatrix[S]=B.shadow.matrix,I++}r.point[S]=O,S++}else if(B.isHemisphereLight){const O=e.get(B);O.skyColor.copy(B.color).multiplyScalar(he),O.groundColor.copy(B.groundColor).multiplyScalar(he),r.hemi[P]=O,P++}}z>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Je.LTC_FLOAT_1,r.rectAreaLTC2=Je.LTC_FLOAT_2):(r.rectAreaLTC1=Je.LTC_HALF_1,r.rectAreaLTC2=Je.LTC_HALF_2)),r.ambient[0]=y,r.ambient[1]=_,r.ambient[2]=h;const V=r.hash;(V.sunLength!==b||V.directionalLength!==v||V.pointLength!==S||V.spotLength!==N||V.rectAreaLength!==z||V.hemiLength!==P||V.numSunShadows!==w||V.numDirectionalShadows!==U||V.numPointShadows!==I||V.numSpotShadows!==E||V.numSpotMaps!==D||V.numLightProbes!==G)&&(r.sun.length=b,r.directional.length=v,r.spot.length=N,r.rectArea.length=z,r.point.length=S,r.hemi.length=P,r.sunShadow.length=w,r.sunShadowMap.length=w,r.sunShadowMatrix.length=M,r.sunShadowCascade.length=M,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.directionalShadowMatrix.length=U,r.pointShadow.length=I,r.pointShadowMap.length=I,r.pointShadowMatrix.length=I,r.spotShadow.length=E,r.spotShadowMap.length=E,r.spotLightMatrix.length=E+D-K,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=K,r.numLightProbes=G,V.sunLength=b,V.directionalLength=v,V.pointLength=S,V.spotLength=N,V.rectAreaLength=z,V.hemiLength=P,V.numSunShadows=w,V.numDirectionalShadows=U,V.numPointShadows=I,V.numSpotShadows=E,V.numSpotMaps=D,V.numLightProbes=G,r.version=Kw++)}function g(m,y){let _=0,h=0,b=0,w=0,M=0,v=0;const S=y.matrixWorldInverse;for(let N=0,z=m.length;N<z;N++){const P=m[N];if(P.isSunLight){const U=r.sun[_];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(S),_++}else if(P.isDirectionalLight){const U=r.directional[h];U.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(S),h++}else if(P.isSpotLight){const U=r.spot[w];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(S),w++}else if(P.isRectAreaLight){const U=r.rectArea[M];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(S),d.identity(),l.copy(P.matrixWorld),l.premultiply(S),d.extractRotation(l),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),M++}else if(P.isPointLight){const U=r.point[b];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(S),b++}else if(P.isHemisphereLight){const U=r.hemi[v];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(S),v++}}}return{setup:f,setupView:g,state:r}}function om(s){const e=new Jw(s),t=[],r=[],o=[];function l(_){y.camera=_,t.length=0,r.length=0,o.length=0}function d(_){_.isLightProbeGrid?o.push(_):t.push(_)}function f(_){r.push(_)}function g(){e.setup(t),o.sort((_,h)=>_.priority-h.priority||_.id-h.id)}function m(_){e.setupView(t,_)}const y={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:y,setupLights:g,setupLightsView:m,pushLight:d,pushShadow:f}}function Qw(s){let e=new WeakMap;function t(o,l=0){const d=e.get(o);let f;return d===void 0?(f=new om(s),e.set(o,[f])):l>=d.length?(f=new om(s),d.push(f)):f=d[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const eM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,nM=[new ye(1,0,0),new ye(-1,0,0),new ye(0,1,0),new ye(0,-1,0),new ye(0,0,1),new ye(0,0,-1)],iM=[new ye(0,-1,0),new ye(0,-1,0),new ye(0,0,1),new ye(0,0,-1),new ye(0,-1,0),new ye(0,-1,0)],lm=new vn,ao=new ye,Rd=new ye;function rM(s,e,t){let r=new vo;const o=new Vt,l=new Vt,d=new xn,f=new xy,g=new vy,m={},y=t.maxTextureSize,_={[Ps]:Bn,[Bn]:Ps,[Xi]:Xi},h=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:eM,fragmentShader:tM}),b=h.clone();b.defines.HORIZONTAL_PASS=1;const w=new ur;w.setAttribute("position",new As(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Mn(w,h),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kl;let S=this.type;this.render=function(I,E,D){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||I.length===0)return;this.type===i_&&(Ct("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Kl);const K=s.getRenderTarget(),G=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),H=s.state;H.setBlending(va),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const $=S!==this.type;$&&E.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(ee=>ee.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,ee=I.length;B<ee;B++){const he=I[B],X=he.shadow;if(X===void 0){Ct("WebGLShadowMap:",he,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;o.copy(X.mapSize);const ie=X.getFrameExtents();o.multiply(ie),l.copy(X.mapSize),(o.x>y||o.y>y)&&(o.x>y&&(l.x=Math.floor(y/ie.x),o.x=l.x*ie.x,X.mapSize.x=l.x),o.y>y&&(l.y=Math.floor(y/ie.y),o.y=l.y*ie.y,X.mapSize.y=l.y));const O=s.state.buffers.depth.getReversed();if(X.camera._reversedDepth=O,X.map===null||$===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===oo){if(he.isPointLight){Ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new or(o.x,o.y,{format:Ds,type:cr,minFilter:oi,magFilter:oi,generateMipmaps:!1}),X.map.texture.name=he.name+".shadowMap",X.map.depthTexture=new wa(o.x,o.y,sr),X.map.depthTexture.name=he.name+".shadowMapDepth",X.map.depthTexture.format=ss,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=On,X.map.depthTexture.magFilter=On}else he.isPointLight?(X.map=new Of(o.x),X.map.depthTexture=new Vm(o.x,lr)):(X.map=new or(o.x,o.y),X.map.depthTexture=new wa(o.x,o.y,lr)),X.map.depthTexture.name=he.name+".shadowMap",X.map.depthTexture.format=ss,this.type===Kl?(X.map.depthTexture.compareFunction=O?km:Im,X.map.depthTexture.minFilter=oi,X.map.depthTexture.magFilter=oi):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=On,X.map.depthTexture.magFilter=On);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==o.x||X.map.height!==o.y)&&X.map.setSize(o.x,o.y);const Q=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();he.isPointLight!==!0&&X.updateMatrices(he,D);const k=(X.camera.layers.mask&4294967294)!==0?X.camera.layers:D.layers;for(let L=0;L<Q;L++){const re=X.getCamera(L);if(he.isPointLight){const F=X.camera,te=X.matrix,ce=he.distance||F.far;ce!==F.far&&(F.far=ce,F.updateProjectionMatrix()),ao.setFromMatrixPosition(he.matrixWorld),F.position.copy(ao),Rd.copy(F.position),Rd.add(nM[L]),F.up.copy(iM[L]),F.lookAt(Rd),F.updateMatrixWorld(),te.makeTranslation(-ao.x,-ao.y,-ao.z),lm.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),X._frustum.setFromProjectionMatrix(lm,F.coordinateSystem,F.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)s.setRenderTarget(X.map,L),s.clear();else{L===0&&(s.setRenderTarget(X.map),s.clear());const F=X.getViewport(L);d.set(l.x*F.x,l.y*F.y,l.x*F.z,l.y*F.w),H.viewport(d)}r=X.getFrustum(L),P(E,D,re,he,k,this.type)}X.isPointLightShadow!==!0&&this.type===oo&&N(X,D),X.needsUpdate=!1}S=this.type,v.needsUpdate=!1,s.setRenderTarget(K,G,V)};function N(I,E){const D=e.update(M);h.defines.VSM_SAMPLES!==I.blurSamples&&(h.defines.VSM_SAMPLES=I.blurSamples,b.defines.VSM_SAMPLES=I.blurSamples,h.needsUpdate=!0,b.needsUpdate=!0),I.mapPass===null?I.mapPass=new or(o.x,o.y,{format:Ds,type:cr}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),h.uniforms.shadow_pass.value=I.map.depthTexture,h.uniforms.resolution.value.set(I.map.width,I.map.height),h.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(E,null,D,h,M,null),b.uniforms.shadow_pass.value=I.mapPass.texture,b.uniforms.resolution.value.set(I.map.width,I.map.height),b.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(E,null,D,b,M,null)}function z(I,E,D,K){let G=null;const V=D.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(V!==void 0)G=V;else if(G=D.isPointLight===!0?g:f,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const H=G.uuid,$=E.uuid;let B=m[H];B===void 0&&(B={},m[H]=B);let ee=B[$];ee===void 0&&(ee=G.clone(),B[$]=ee,E.addEventListener("dispose",U)),G=ee}if(G.visible=E.visible,G.wireframe=E.wireframe,K===oo?G.side=E.shadowSide!==null?E.shadowSide:E.side:G.side=E.shadowSide!==null?E.shadowSide:_[E.side],G.alphaMap=E.alphaMap,G.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,G.map=E.map,G.clipShadows=E.clipShadows,G.clippingPlanes=E.clippingPlanes,G.clipIntersection=E.clipIntersection,G.displacementMap=E.displacementMap,G.displacementScale=E.displacementScale,G.displacementBias=E.displacementBias,G.wireframeLinewidth=E.wireframeLinewidth,G.linewidth=E.linewidth,D.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const H=s.properties.get(G);H.light=D}return G}function P(I,E,D,K,G,V){if(I.visible===!1)return;if(I.layers.test(G)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&V===oo)&&(!I.frustumCulled||I.intersectsFrustum(r))){I.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,I.matrixWorld);const B=e.update(I),ee=I.material;if(Array.isArray(ee)){const he=B.groups;for(let X=0,ie=he.length;X<ie;X++){const O=he[X],Q=ee[O.materialIndex];if(Q&&Q.visible){const k=z(I,Q,K,V);I.onBeforeShadow(s,I,E,D,B,k,O),s.renderBufferDirect(D,null,B,k,I,O),I.onAfterShadow(s,I,E,D,B,k,O)}}}else if(ee.visible){const he=z(I,ee,K,V);I.onBeforeShadow(s,I,E,D,B,he,null),s.renderBufferDirect(D,null,B,he,I,null),I.onAfterShadow(s,I,E,D,B,he,null)}}const $=I.children;for(let B=0,ee=$.length;B<ee;B++)P($[B],E,D,K,G,V)}function U(I){I.target.removeEventListener("dispose",U);for(const D in m){const K=m[D],G=I.target.uuid;G in K&&(K[G].dispose(),delete K[G])}}}function sM(s,e){function t(){let W=!1;const Ce=new xn;let Se=null;const Ae=new xn(0,0,0,0);return{setMask:function(_e){Se!==_e&&!W&&(s.colorMask(_e,_e,_e,_e),Se=_e)},setLocked:function(_e){W=_e},setClear:function(_e,Te,Ge,rt,Pe){Pe===!0&&(_e*=rt,Te*=rt,Ge*=rt),Ce.set(_e,Te,Ge,rt),Ae.equals(Ce)===!1&&(s.clearColor(_e,Te,Ge,rt),Ae.copy(Ce))},reset:function(){W=!1,Se=null,Ae.set(-1,0,0,0)}}}function r(){let W=!1,Ce=!1,Se=null,Ae=null,_e=null;return{setReversed:function(Te){if(Ce!==Te){const Ge=e.get("EXT_clip_control");Te?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Ce=Te;const rt=_e;_e=null,this.setClear(rt)}},getReversed:function(){return Ce},setTest:function(Te){Te?xe(s.DEPTH_TEST):Ne(s.DEPTH_TEST)},setMask:function(Te){Se!==Te&&!W&&(s.depthMask(Te),Se=Te)},setFunc:function(Te){if(Ce&&(Te=U_[Te]),Ae!==Te){switch(Te){case Pd:s.depthFunc(s.NEVER);break;case Dd:s.depthFunc(s.ALWAYS);break;case Ld:s.depthFunc(s.LESS);break;case po:s.depthFunc(s.LEQUAL);break;case Id:s.depthFunc(s.EQUAL);break;case kd:s.depthFunc(s.GEQUAL);break;case zd:s.depthFunc(s.GREATER);break;case Ud:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ae=Te}},setLocked:function(Te){W=Te},setClear:function(Te){_e!==Te&&(_e=Te,Ce&&(Te=1-Te),s.clearDepth(Te))},reset:function(){W=!1,Se=null,Ae=null,_e=null,Ce=!1}}}function o(){let W=!1,Ce=null,Se=null,Ae=null,_e=null,Te=null,Ge=null,rt=null,Pe=null;return{setTest:function(Ze){W||(Ze?xe(s.STENCIL_TEST):Ne(s.STENCIL_TEST))},setMask:function(Ze){Ce!==Ze&&!W&&(s.stencilMask(Ze),Ce=Ze)},setFunc:function(Ze,ct,Be){(Se!==Ze||Ae!==ct||_e!==Be)&&(s.stencilFunc(Ze,ct,Be),Se=Ze,Ae=ct,_e=Be)},setOp:function(Ze,ct,Be){(Te!==Ze||Ge!==ct||rt!==Be)&&(s.stencilOp(Ze,ct,Be),Te=Ze,Ge=ct,rt=Be)},setLocked:function(Ze){W=Ze},setClear:function(Ze){Pe!==Ze&&(s.clearStencil(Ze),Pe=Ze)},reset:function(){W=!1,Ce=null,Se=null,Ae=null,_e=null,Te=null,Ge=null,rt=null,Pe=null}}}const l=new t,d=new r,f=new o;let g={};const m=new WeakMap;let y={},_={},h={},b=new WeakMap,w=[],M=null,v=!1,S=null,N=null,z=null,P=null,U=null,I=null,E=null,D=new Bt(0,0,0),K=0,G=!1,V=null,H=null,$=null,B=null,ee=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ie=0;const O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(O)[1]),X=ie>=1):O.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),X=ie>=2);let Q=null,k={};const L=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),F=new xn().fromArray(L),te=new xn().fromArray(re);function ce(W,Ce,Se,Ae){const _e=new Uint8Array(4),Te=s.createTexture();s.bindTexture(W,Te),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ge=0;Ge<Se;Ge++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,Ae,0,s.RGBA,s.UNSIGNED_BYTE,_e):s.texImage2D(Ce+Ge,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_e);return Te}const ue={};ue[s.TEXTURE_2D]=ce(s.TEXTURE_2D,s.TEXTURE_2D,1),ue[s.TEXTURE_CUBE_MAP]=ce(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[s.TEXTURE_2D_ARRAY]=ce(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ue[s.TEXTURE_3D]=ce(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),d.setClear(1),f.setClear(0),xe(s.DEPTH_TEST),d.setFunc(po),yt(!1),gt(m0),xe(s.CULL_FACE),xt(va);function xe(W){y[W]!==!0&&(s.enable(W),y[W]=!0)}function Ne(W){y[W]!==!1&&(s.disable(W),y[W]=!1)}function Qe(W,Ce){return h[W]!==Ce?(s.bindFramebuffer(W,Ce),h[W]=Ce,W===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=Ce),W===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Xe(W,Ce){let Se=w,Ae=!1;if(W){Se=b.get(Ce),Se===void 0&&(Se=[],b.set(Ce,Se));const _e=W.textures;if(Se.length!==_e.length||Se[0]!==s.COLOR_ATTACHMENT0){for(let Te=0,Ge=_e.length;Te<Ge;Te++)Se[Te]=s.COLOR_ATTACHMENT0+Te;Se.length=_e.length,Ae=!0}}else Se[0]!==s.BACK&&(Se[0]=s.BACK,Ae=!0);Ae&&s.drawBuffers(Se)}function De(W){return M!==W?(s.useProgram(W),M=W,!0):!1}const je={[ga]:s.FUNC_ADD,[s_]:s.FUNC_SUBTRACT,[a_]:s.FUNC_REVERSE_SUBTRACT};je[o_]=s.MIN,je[l_]=s.MAX;const Ke={[c_]:s.ZERO,[u_]:s.ONE,[d_]:s.SRC_COLOR,[gm]:s.SRC_ALPHA,[x_]:s.SRC_ALPHA_SATURATE,[m_]:s.DST_COLOR,[h_]:s.DST_ALPHA,[f_]:s.ONE_MINUS_SRC_COLOR,[xm]:s.ONE_MINUS_SRC_ALPHA,[g_]:s.ONE_MINUS_DST_COLOR,[p_]:s.ONE_MINUS_DST_ALPHA,[v_]:s.CONSTANT_COLOR,[__]:s.ONE_MINUS_CONSTANT_COLOR,[y_]:s.CONSTANT_ALPHA,[S_]:s.ONE_MINUS_CONSTANT_ALPHA};function xt(W,Ce,Se,Ae,_e,Te,Ge,rt,Pe,Ze){if(W===va){v===!0&&(Ne(s.BLEND),v=!1);return}if(v===!1&&(xe(s.BLEND),v=!0),W!==r_){if(W!==S||Ze!==G){if((N!==ga||U!==ga)&&(s.blendEquation(s.FUNC_ADD),N=ga,U=ga),Ze)switch(W){case uo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Cs:s.blendFunc(s.ONE,s.ONE);break;case g0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case x0:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Jt("WebGLState: Invalid blending: ",W);break}else switch(W){case uo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Cs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case g0:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case x0:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",W);break}z=null,P=null,I=null,E=null,D.set(0,0,0),K=0,S=W,G=Ze}return}_e=_e||Ce,Te=Te||Se,Ge=Ge||Ae,(Ce!==N||_e!==U)&&(s.blendEquationSeparate(je[Ce],je[_e]),N=Ce,U=_e),(Se!==z||Ae!==P||Te!==I||Ge!==E)&&(s.blendFuncSeparate(Ke[Se],Ke[Ae],Ke[Te],Ke[Ge]),z=Se,P=Ae,I=Te,E=Ge),(rt.equals(D)===!1||Pe!==K)&&(s.blendColor(rt.r,rt.g,rt.b,Pe),D.copy(rt),K=Pe),S=W,G=!1}function wt(W,Ce){W.side===Xi?Ne(s.CULL_FACE):xe(s.CULL_FACE);let Se=W.side===Bn;Ce&&(Se=!Se),yt(Se),W.blending===uo&&W.transparent===!1?xt(va):xt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),l.setMask(W.colorWrite);const Ae=W.stencilWrite;f.setTest(Ae),Ae&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Mt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):Ne(s.SAMPLE_ALPHA_TO_COVERAGE)}function yt(W){V!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),V=W)}function gt(W){W!==t_?(xe(s.CULL_FACE),W!==H&&(W===m0?s.cullFace(s.BACK):W===n_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ne(s.CULL_FACE),H=W}function Pt(W){W!==$&&(X&&s.lineWidth(W),$=W)}function Mt(W,Ce,Se){W?(xe(s.POLYGON_OFFSET_FILL),(B!==Ce||ee!==Se)&&(B=Ce,ee=Se,d.getReversed()&&(Ce=-Ce,Se=-Se),s.polygonOffset(Ce,Se))):Ne(s.POLYGON_OFFSET_FILL)}function ge(W){W?xe(s.SCISSOR_TEST):Ne(s.SCISSOR_TEST)}function Dt(W){W===void 0&&(W=s.TEXTURE0+he-1),Q!==W&&(s.activeTexture(W),Q=W)}function sn(W,Ce,Se){Se===void 0&&(Q===null?Se=s.TEXTURE0+he-1:Se=Q);let Ae=k[Se];Ae===void 0&&(Ae={type:void 0,texture:void 0},k[Se]=Ae),(Ae.type!==W||Ae.texture!==Ce)&&(Q!==Se&&(s.activeTexture(Se),Q=Se),s.bindTexture(W,Ce||ue[W]),Ae.type=W,Ae.texture=Ce)}function Z(){const W=k[Q];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Gt(){try{s.compressedTexImage2D(...arguments)}catch(W){Jt("WebGLState:",W)}}function Lt(){try{s.compressedTexImage3D(...arguments)}catch(W){Jt("WebGLState:",W)}}function It(){try{s.texSubImage2D(...arguments)}catch(W){Jt("WebGLState:",W)}}function Ie(){try{s.texSubImage3D(...arguments)}catch(W){Jt("WebGLState:",W)}}function Nt(){try{s.compressedTexSubImage2D(...arguments)}catch(W){Jt("WebGLState:",W)}}function at(){try{s.compressedTexSubImage3D(...arguments)}catch(W){Jt("WebGLState:",W)}}function dt(){try{s.texStorage2D(...arguments)}catch(W){Jt("WebGLState:",W)}}function R(){try{s.texStorage3D(...arguments)}catch(W){Jt("WebGLState:",W)}}function T(){try{s.texImage2D(...arguments)}catch(W){Jt("WebGLState:",W)}}function ae(){try{s.texImage3D(...arguments)}catch(W){Jt("WebGLState:",W)}}function Le(W){return _[W]!==void 0?_[W]:s.getParameter(W)}function Ee(W,Ce){_[W]!==Ce&&(s.pixelStorei(W,Ce),_[W]=Ce)}function ze(W){F.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),F.copy(W))}function Ue(W){te.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),te.copy(W))}function we(W,Ce){let Se=m.get(Ce);Se===void 0&&(Se=new WeakMap,m.set(Ce,Se));let Ae=Se.get(W);Ae===void 0&&(Ae=s.getUniformBlockIndex(Ce,W.name),s.uniformBlockBinding(Ce,Ae,Ae),Se.set(W,Ae))}function Me(W,Ce,Se){const _e=m.get(Ce).get(W);g[_e]!==Se&&(s.bindBufferBase(s.UNIFORM_BUFFER,_e,Se),g[_e]=Se)}function Oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),y={},_={},Q=null,k={},h={},g={},b=new WeakMap,w=[],M=null,v=!1,S=null,N=null,z=null,P=null,U=null,I=null,E=null,D=new Bt(0,0,0),K=0,G=!1,V=null,H=null,$=null,B=null,ee=null,F.set(0,0,s.canvas.width,s.canvas.height),te.set(0,0,s.canvas.width,s.canvas.height),l.reset(),d.reset(),f.reset()}return{buffers:{color:l,depth:d,stencil:f},enable:xe,disable:Ne,bindFramebuffer:Qe,drawBuffers:Xe,useProgram:De,setBlending:xt,setMaterial:wt,setFlipSided:yt,setCullFace:gt,setLineWidth:Pt,setPolygonOffset:Mt,setScissorTest:ge,activeTexture:Dt,bindTexture:sn,unbindTexture:Z,compressedTexImage2D:Gt,compressedTexImage3D:Lt,texImage2D:T,texImage3D:ae,pixelStorei:Ee,getParameter:Le,updateUBOMapping:we,uniformBlockBinding:Me,texStorage2D:dt,texStorage3D:R,texSubImage2D:It,texSubImage3D:Ie,compressedTexSubImage2D:Nt,compressedTexSubImage3D:at,scissor:ze,viewport:Ue,reset:Oe}}function aM(s,e,t,r,o,l,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Vt,y=new WeakMap,_=new Set;let h;const b=new WeakMap,w=new Set,M=new FinalizationRegistry(R=>w.delete(R));let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(R,T){return v?new OffscreenCanvas(R,T):cc("canvas")}function N(R,T,ae){let Le=1;const Ee=dt(R);if((Ee.width>ae||Ee.height>ae)&&(Le=ae/Math.max(Ee.width,Ee.height)),Le<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ze=Math.floor(Le*Ee.width),Ue=Math.floor(Le*Ee.height);h===void 0&&(h=S(ze,Ue));const we=T?S(ze,Ue):h;return we.width=ze,we.height=Ue,we.getContext("2d").drawImage(R,0,0,ze,Ue),Ct("WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+ze+"x"+Ue+")."),we}else return"data"in R&&Ct("WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),R;return R}function z(R){return R.generateMipmaps}function P(R){s.generateMipmap(R)}function U(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function I(R,T,ae,Le,Ee,ze=!1){if(R!==null){if(s[R]!==void 0)return s[R];Ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Ue;Le&&(Ue=e.get("EXT_texture_norm16"),Ue||Ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let we=T;if(T===s.RED&&(ae===s.FLOAT&&(we=s.R32F),ae===s.HALF_FLOAT&&(we=s.R16F),ae===s.UNSIGNED_BYTE&&(we=s.R8),ae===s.UNSIGNED_SHORT&&Ue&&(we=Ue.R16_EXT),ae===s.SHORT&&Ue&&(we=Ue.R16_SNORM_EXT)),T===s.RED_INTEGER&&(ae===s.UNSIGNED_BYTE&&(we=s.R8UI),ae===s.UNSIGNED_SHORT&&(we=s.R16UI),ae===s.UNSIGNED_INT&&(we=s.R32UI),ae===s.BYTE&&(we=s.R8I),ae===s.SHORT&&(we=s.R16I),ae===s.INT&&(we=s.R32I)),T===s.RG&&(ae===s.FLOAT&&(we=s.RG32F),ae===s.HALF_FLOAT&&(we=s.RG16F),ae===s.UNSIGNED_BYTE&&(we=s.RG8),ae===s.UNSIGNED_SHORT&&Ue&&(we=Ue.RG16_EXT),ae===s.SHORT&&Ue&&(we=Ue.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(ae===s.UNSIGNED_BYTE&&(we=s.RG8UI),ae===s.UNSIGNED_SHORT&&(we=s.RG16UI),ae===s.UNSIGNED_INT&&(we=s.RG32UI),ae===s.BYTE&&(we=s.RG8I),ae===s.SHORT&&(we=s.RG16I),ae===s.INT&&(we=s.RG32I)),T===s.RGB_INTEGER&&(ae===s.UNSIGNED_BYTE&&(we=s.RGB8UI),ae===s.UNSIGNED_SHORT&&(we=s.RGB16UI),ae===s.UNSIGNED_INT&&(we=s.RGB32UI),ae===s.BYTE&&(we=s.RGB8I),ae===s.SHORT&&(we=s.RGB16I),ae===s.INT&&(we=s.RGB32I)),T===s.RGBA_INTEGER&&(ae===s.UNSIGNED_BYTE&&(we=s.RGBA8UI),ae===s.UNSIGNED_SHORT&&(we=s.RGBA16UI),ae===s.UNSIGNED_INT&&(we=s.RGBA32UI),ae===s.BYTE&&(we=s.RGBA8I),ae===s.SHORT&&(we=s.RGBA16I),ae===s.INT&&(we=s.RGBA32I)),T===s.RGB&&(ae===s.UNSIGNED_SHORT&&Ue&&(we=Ue.RGB16_EXT),ae===s.SHORT&&Ue&&(we=Ue.RGB16_SNORM_EXT),ae===s.UNSIGNED_INT_5_9_9_9_REV&&(we=s.RGB9_E5),ae===s.UNSIGNED_INT_10F_11F_11F_REV&&(we=s.R11F_G11F_B10F)),T===s.RGBA){const Me=ze?lc:Wt.getTransfer(Ee);ae===s.FLOAT&&(we=s.RGBA32F),ae===s.HALF_FLOAT&&(we=s.RGBA16F),ae===s.UNSIGNED_BYTE&&(we=Me===en?s.SRGB8_ALPHA8:s.RGBA8),ae===s.UNSIGNED_SHORT&&Ue&&(we=Ue.RGBA16_EXT),ae===s.SHORT&&Ue&&(we=Ue.RGBA16_SNORM_EXT),ae===s.UNSIGNED_SHORT_4_4_4_4&&(we=s.RGBA4),ae===s.UNSIGNED_SHORT_5_5_5_1&&(we=s.RGB5_A1)}return(we===s.R16F||we===s.R32F||we===s.RG16F||we===s.RG32F||we===s.RGBA16F||we===s.RGBA32F)&&e.get("EXT_color_buffer_float"),we}function E(R,T){let ae;return R?T===null||T===lr||T===ba?ae=s.DEPTH24_STENCIL8:T===sr?ae=s.DEPTH32F_STENCIL8:T===go&&(ae=s.DEPTH24_STENCIL8,Ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===lr||T===ba?ae=s.DEPTH_COMPONENT24:T===sr?ae=s.DEPTH_COMPONENT32F:T===go&&(ae=s.DEPTH_COMPONENT16),ae}function D(R,T){return z(R)===!0||R.isFramebufferTexture&&R.minFilter!==On&&R.minFilter!==oi?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function K(R){const T=new WeakRef(R);r.get(R).__ref=T,w.add(T),M.register(R,T,T)}function G(R){const T=r.get(R).__ref;T!==void 0&&(w.delete(T),M.unregister(T))}function V(R){$(R.target)}function H(R){B(R.target)}function $(R){R.removeEventListener("dispose",V),G(R),he(R),R.isVideoTexture&&y.delete(R),R.isHTMLTexture&&_.delete(R)}function B(R){R.removeEventListener("dispose",H),G(R),ie(R)}function ee(){for(const R of w){const T=R.deref();T!==void 0&&(T.isRenderTarget===!0?B(T):$(T))}w.clear(),_.clear()}function he(R){const T=r.get(R);if(T.__webglInit===void 0)return;const ae=R.source,Le=b.get(ae);if(Le){const Ee=Le[T.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&X(R),Object.keys(Le).length===0&&b.delete(ae)}r.remove(R)}function X(R){const T=r.get(R);s.deleteTexture(T.__webglTexture);const ae=R.source,Le=b.get(ae);delete Le[T.__cacheKey],d.memory.textures--}function ie(R){const T=r.get(R);T.__depthDisposeCallback&&T.__depthDisposeCallback();const ae=R.depthTexture;if(ae&&ae.renderTarget===R&&$(ae),R.isWebGLCubeRenderTarget)for(let Ee=0;Ee<6;Ee++){if(Array.isArray(T.__webglFramebuffer[Ee]))for(let ze=0;ze<T.__webglFramebuffer[Ee].length;ze++)s.deleteFramebuffer(T.__webglFramebuffer[Ee][ze]);else s.deleteFramebuffer(T.__webglFramebuffer[Ee]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[Ee])}else{if(Array.isArray(T.__webglFramebuffer))for(let Ee=0;Ee<T.__webglFramebuffer.length;Ee++)s.deleteFramebuffer(T.__webglFramebuffer[Ee]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Ee=0;Ee<T.__webglColorRenderbuffer.length;Ee++)T.__webglColorRenderbuffer[Ee]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[Ee]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Le=R.textures;for(let Ee=0,ze=Le.length;Ee<ze;Ee++){const Ue=r.get(Le[Ee]);Ue.__webglTexture&&(s.deleteTexture(Ue.__webglTexture),d.memory.textures--),r.remove(Le[Ee])}r.remove(R)}let O=0;function Q(){O=0}function k(){return O}function L(R){O=R}function re(){const R=O;return R>=o.maxTextures&&Ct("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+o.maxTextures),O+=1,R}function F(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.mipmapsAutoUpdate),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function te(R,T){const ae=r.get(R);if(R.isVideoTexture&&Nt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&ae.__version!==R.version){const Le=R.image;if(Le===null)Ct("WebGLRenderer: Texture marked for update but no image data found.");else if(Le.complete===!1)Ct("WebGLRenderer: Texture marked for update but image is incomplete");else{wt(ae,R,T);return}}else R.isExternalTexture&&(ae.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ae.__webglTexture,s.TEXTURE0+T)}function ce(R,T){const ae=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&ae.__version!==R.version){wt(ae,R,T);return}else R.isExternalTexture&&(ae.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ae.__webglTexture,s.TEXTURE0+T)}function ue(R,T){const ae=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&ae.__version!==R.version){wt(ae,R,T);return}t.bindTexture(s.TEXTURE_3D,ae.__webglTexture,s.TEXTURE0+T)}function xe(R,T){const ae=r.get(R);if(R.version>0&&ae.__version!==R.version){yt(ae,R,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture,s.TEXTURE0+T)}const Ne={[Sa]:s.REPEAT,[ai]:s.CLAMP_TO_EDGE,[Fd]:s.MIRRORED_REPEAT},Qe={[On]:s.NEAREST,[M_]:s.NEAREST_MIPMAP_NEAREST,[Cl]:s.NEAREST_MIPMAP_LINEAR,[oi]:s.LINEAR,[id]:s.LINEAR_MIPMAP_NEAREST,[is]:s.LINEAR_MIPMAP_LINEAR},Xe={[A_]:s.NEVER,[zm]:s.ALWAYS,[R_]:s.LESS,[Im]:s.LEQUAL,[N_]:s.EQUAL,[km]:s.GEQUAL,[P_]:s.GREATER,[D_]:s.NOTEQUAL};function De(R,T){if(T.type===sr&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===oi||T.magFilter===id||T.magFilter===Cl||T.magFilter===is||T.minFilter===oi||T.minFilter===id||T.minFilter===Cl||T.minFilter===is)&&Ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,Ne[T.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Ne[T.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Ne[T.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,Qe[T.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,Qe[T.minFilter]),T.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Xe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===On||T.minFilter!==Cl&&T.minFilter!==is||T.type===sr&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function je(R,T){let ae=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",V),K(T));const Le=T.source;let Ee=b.get(Le);Ee===void 0&&(Ee={},b.set(Le,Ee));const ze=F(T);if(ze!==R.__cacheKey){Ee[ze]===void 0&&(Ee[ze]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,ae=!0),Ee[ze].usedTimes++;const Ue=Ee[R.__cacheKey];Ue!==void 0&&(Ee[R.__cacheKey].usedTimes--,Ue.usedTimes===0&&X(T)),R.__cacheKey=ze,R.__webglTexture=Ee[ze].texture}return ae}function Ke(R,T,ae){return Math.floor(Math.floor(R/ae)/T)}function xt(R,T,ae,Le){const ze=R.updateRanges;if(ze.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,ae,Le,T.data);else{ze.sort((W,Ce)=>W.start-Ce.start);let Ue=0;for(let W=1;W<ze.length;W++){const Ce=ze[Ue],Se=ze[W],Ae=Ce.start+Ce.count,_e=Ke(Se.start,T.width,4),Te=Ke(Ce.start,T.width,4);Se.start<=Ae+1&&_e===Te&&Ke(Se.start+Se.count-1,T.width,4)===_e?Ce.count=Math.max(Ce.count,Se.start+Se.count-Ce.start):(++Ue,ze[Ue]=Se)}ze.length=Ue+1;const we=t.getParameter(s.UNPACK_ROW_LENGTH),Me=t.getParameter(s.UNPACK_SKIP_PIXELS),Oe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let W=0,Ce=ze.length;W<Ce;W++){const Se=ze[W],Ae=Math.floor(Se.start/4),_e=Math.ceil(Se.count/4),Te=Ae%T.width,Ge=Math.floor(Ae/T.width),rt=_e,Pe=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Te),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ge),t.texSubImage2D(s.TEXTURE_2D,0,Te,Ge,rt,Pe,ae,Le,T.data)}R.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,we),t.pixelStorei(s.UNPACK_SKIP_PIXELS,Me),t.pixelStorei(s.UNPACK_SKIP_ROWS,Oe)}}function wt(R,T,ae){let Le=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Le=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Le=s.TEXTURE_3D);const Ee=je(R,T),ze=T.source;t.bindTexture(Le,R.__webglTexture,s.TEXTURE0+ae);const Ue=r.get(ze);if(ze.version!==Ue.__version||Ee===!0){if(t.activeTexture(s.TEXTURE0+ae),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const Pe=Wt.getPrimaries(Wt.workingColorSpace),Ze=T.colorSpace===ns?null:Wt.getPrimaries(T.colorSpace),ct=T.colorSpace===ns||Pe===Ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct)}t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let Me=N(T.image,!1,o.maxTextureSize);Me=at(T,Me);const Oe=l.convert(T.format,T.colorSpace),W=l.convert(T.type);let Ce=I(T.internalFormat,Oe,W,T.normalized,T.colorSpace,T.isVideoTexture);De(Le,T);let Se;const Ae=T.mipmaps,_e=T.isVideoTexture!==!0,Te=Ue.__version===void 0||Ee===!0,Ge=ze.dataReady,rt=D(T,Me);if(T.isDepthTexture)Ce=E(T.format===rs,T.type),Te&&(_e?t.texStorage2D(s.TEXTURE_2D,1,Ce,Me.width,Me.height):t.texImage2D(s.TEXTURE_2D,0,Ce,Me.width,Me.height,0,Oe,W,null));else if(T.isDataTexture)if(Ae.length>0){_e&&Te&&t.texStorage2D(s.TEXTURE_2D,rt,Ce,Ae[0].width,Ae[0].height);for(let Pe=0,Ze=Ae.length;Pe<Ze;Pe++)Se=Ae[Pe],_e?Ge&&t.texSubImage2D(s.TEXTURE_2D,Pe,0,0,Se.width,Se.height,Oe,W,Se.data):t.texImage2D(s.TEXTURE_2D,Pe,Ce,Se.width,Se.height,0,Oe,W,Se.data);T.generateMipmaps=!1}else _e?(Te&&t.texStorage2D(s.TEXTURE_2D,rt,Ce,Me.width,Me.height),Ge&&xt(T,Me,Oe,W)):t.texImage2D(s.TEXTURE_2D,0,Ce,Me.width,Me.height,0,Oe,W,Me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){_e&&Te&&t.texStorage3D(s.TEXTURE_2D_ARRAY,rt,Ce,Ae[0].width,Ae[0].height,Me.depth);for(let Pe=0,Ze=Ae.length;Pe<Ze;Pe++)if(Se=Ae[Pe],T.format!==ar)if(Oe!==null)if(_e){if(Ge)if(T.layerUpdates.size>0){const ct=H0(Se.width,Se.height,T.format,T.type);for(const Be of T.layerUpdates){const bt=Se.data.subarray(Be*ct/Se.data.BYTES_PER_ELEMENT,(Be+1)*ct/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Pe,0,0,Be,Se.width,Se.height,1,Oe,bt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Pe,0,0,0,Se.width,Se.height,Me.depth,Oe,Se.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Pe,Ce,Se.width,Se.height,Me.depth,0,Se.data,0,0);else Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _e?Ge&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Pe,0,0,0,Se.width,Se.height,Me.depth,Oe,W,Se.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Pe,Ce,Se.width,Se.height,Me.depth,0,Oe,W,Se.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{_e&&Te&&t.texStorage2D(s.TEXTURE_2D,rt,Ce,Ae[0].width,Ae[0].height);for(let Pe=0,Ze=Ae.length;Pe<Ze;Pe++)Se=Ae[Pe],T.format!==ar?Oe!==null?_e?Ge&&t.compressedTexSubImage2D(s.TEXTURE_2D,Pe,0,0,Se.width,Se.height,Oe,Se.data):t.compressedTexImage2D(s.TEXTURE_2D,Pe,Ce,Se.width,Se.height,0,Se.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?Ge&&t.texSubImage2D(s.TEXTURE_2D,Pe,0,0,Se.width,Se.height,Oe,W,Se.data):t.texImage2D(s.TEXTURE_2D,Pe,Ce,Se.width,Se.height,0,Oe,W,Se.data)}else if(T.isDataArrayTexture)if(_e){if(Te&&t.texStorage3D(s.TEXTURE_2D_ARRAY,rt,Ce,Me.width,Me.height,Me.depth),Ge)if(T.layerUpdates.size>0){const Pe=H0(Me.width,Me.height,T.format,T.type);for(const Ze of T.layerUpdates){const ct=Me.data.subarray(Ze*Pe/Me.data.BYTES_PER_ELEMENT,(Ze+1)*Pe/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ze,Me.width,Me.height,1,Oe,W,ct)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Oe,W,Me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ce,Me.width,Me.height,Me.depth,0,Oe,W,Me.data);else if(T.isData3DTexture)_e?(Te&&t.texStorage3D(s.TEXTURE_3D,rt,Ce,Me.width,Me.height,Me.depth),Ge&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Oe,W,Me.data)):t.texImage3D(s.TEXTURE_3D,0,Ce,Me.width,Me.height,Me.depth,0,Oe,W,Me.data);else if(T.isFramebufferTexture){if(Te)if(_e)t.texStorage2D(s.TEXTURE_2D,rt,Ce,Me.width,Me.height);else{let Pe=Me.width,Ze=Me.height;for(let ct=0;ct<rt;ct++)t.texImage2D(s.TEXTURE_2D,ct,Ce,Pe,Ze,0,Oe,W,null),Pe>>=1,Ze>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){const Pe=s.canvas;if(Pe.hasAttribute("layoutsubtree")||Pe.setAttribute("layoutsubtree","true"),Me.parentNode!==Pe){Pe.appendChild(Me),_.add(T),Pe.onpaint=Ze=>{const ct=Ze.changedElements;for(const Be of _)ct.includes(Be.image)&&(Be.needsUpdate=!0)},Pe.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Me);else{const ct=s.RGBA,Be=s.RGBA,bt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ct,Be,bt,Me)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(_e&&Te){const Pe=dt(Ae[0]);t.texStorage2D(s.TEXTURE_2D,rt,Ce,Pe.width,Pe.height)}for(let Pe=0,Ze=Ae.length;Pe<Ze;Pe++)Se=Ae[Pe],_e?Ge&&t.texSubImage2D(s.TEXTURE_2D,Pe,0,0,Oe,W,Se):t.texImage2D(s.TEXTURE_2D,Pe,Ce,Oe,W,Se);T.generateMipmaps=!1}else if(_e){if(Te){const Pe=dt(Me);t.texStorage2D(s.TEXTURE_2D,rt,Ce,Pe.width,Pe.height)}Ge&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,W,Me)}else t.texImage2D(s.TEXTURE_2D,0,Ce,Oe,W,Me);z(T)&&T.mipmapsAutoUpdate===!0&&P(Le),Ue.__version=ze.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function yt(R,T,ae){if(T.image.length!==6)return;const Le=je(R,T),Ee=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+ae);const ze=r.get(Ee);if(Ee.version!==ze.__version||Le===!0){t.activeTexture(s.TEXTURE0+ae);const Ue=Wt.getPrimaries(Wt.workingColorSpace),we=T.colorSpace===ns?null:Wt.getPrimaries(T.colorSpace),Me=T.colorSpace===ns||Ue===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Oe=T.isCompressedTexture||T.image[0].isCompressedTexture,W=T.image[0]&&T.image[0].isDataTexture,Ce=[];for(let Be=0;Be<6;Be++)!Oe&&!W?Ce[Be]=N(T.image[Be],!0,o.maxCubemapSize):Ce[Be]=W?T.image[Be].image:T.image[Be],Ce[Be]=at(T,Ce[Be]);const Se=Ce[0],Ae=l.convert(T.format,T.colorSpace),_e=l.convert(T.type);let Te=I(T.internalFormat,Ae,_e,T.normalized,T.colorSpace);const Ge=T.isVideoTexture!==!0,rt=ze.__version===void 0||Le===!0,Pe=Ee.dataReady;let Ze=D(T,Se);De(s.TEXTURE_CUBE_MAP,T);let ct;if(T.isDepthTexture){if(Te=E(T.format===rs,T.type),rt)if(Ge)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Te,Se.width,Se.height);else for(let Be=0;Be<6;Be++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,Te,Se.width,Se.height,0,Ae,_e,null)}else if(Oe){Ge&&rt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ze,Te,Se.width,Se.height);for(let Be=0;Be<6;Be++){ct=Ce[Be].mipmaps;for(let bt=0;bt<ct.length;bt++){const jt=ct[bt];T.format!==ar?Ae!==null?Ge?Pe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,bt,0,0,jt.width,jt.height,Ae,jt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,bt,Te,jt.width,jt.height,0,jt.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?Pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,bt,0,0,jt.width,jt.height,Ae,_e,jt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,bt,Te,jt.width,jt.height,0,Ae,_e,jt.data)}}}else{if(ct=T.mipmaps,Ge&&rt){ct.length>0&&Ze++;const Be=dt(Ce[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ze,Te,Be.width,Be.height)}for(let Be=0;Be<6;Be++)if(W){Ge?Pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,0,0,Ce[Be].width,Ce[Be].height,Ae,_e,Ce[Be].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,Te,Ce[Be].width,Ce[Be].height,0,Ae,_e,Ce[Be].data);for(let bt=0;bt<ct.length;bt++){const an=ct[bt].image[Be].image;Ge?Pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,bt+1,0,0,an.width,an.height,Ae,_e,an.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,bt+1,Te,an.width,an.height,0,Ae,_e,an.data)}}else{Ge?Pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,0,0,Ae,_e,Ce[Be]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,Te,Ae,_e,Ce[Be]);for(let bt=0;bt<ct.length;bt++){const jt=ct[bt];Ge?Pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,bt+1,0,0,Ae,_e,jt.image[Be]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,bt+1,Te,Ae,_e,jt.image[Be])}}}z(T)&&T.mipmapsAutoUpdate===!0&&P(s.TEXTURE_CUBE_MAP),ze.__version=Ee.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function gt(R,T,ae,Le,Ee,ze){const Ue=l.convert(ae.format,ae.colorSpace),we=l.convert(ae.type),Me=I(ae.internalFormat,Ue,we,ae.normalized,ae.colorSpace),Oe=r.get(T),W=r.get(ae);if(W.__renderTarget=T,!Oe.__hasExternalTextures){const Ce=Math.max(1,T.width>>ze),Se=Math.max(1,T.height>>ze);Ee===s.TEXTURE_3D||Ee===s.TEXTURE_2D_ARRAY?t.texImage3D(Ee,ze,Me,Ce,Se,T.depth,0,Ue,we,null):t.texImage2D(Ee,ze,Me,Ce,Se,0,Ue,we,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),Ie(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Le,Ee,W.__webglTexture,0,It(T)):(Ee===s.TEXTURE_2D||Ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Le,Ee,W.__webglTexture,ze),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(R,T,ae){if(s.bindRenderbuffer(s.RENDERBUFFER,R),T.depthBuffer){const Le=T.depthTexture,Ee=Le&&Le.isDepthTexture?Le.type:null,ze=E(T.stencilBuffer,Ee),Ue=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ie(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,It(T),ze,T.width,T.height):ae?s.renderbufferStorageMultisample(s.RENDERBUFFER,It(T),ze,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ze,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ue,s.RENDERBUFFER,R)}else{const Le=T.textures;for(let Ee=0;Ee<Le.length;Ee++){const ze=Le[Ee],Ue=l.convert(ze.format,ze.colorSpace),we=l.convert(ze.type),Me=I(ze.internalFormat,Ue,we,ze.normalized,ze.colorSpace);Ie(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,It(T),Me,T.width,T.height):ae?s.renderbufferStorageMultisample(s.RENDERBUFFER,It(T),Me,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Me,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Mt(R,T,ae){const Le=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Ee=r.get(T.depthTexture);Ee.__renderTarget=T;const ze=Le?T.depthTexture.image[0]:T.depthTexture.image;(!Ee.__webglTexture||ze.width!==T.width||ze.height!==T.height)&&(ze.width=T.width,ze.height=T.height,T.depthTexture.needsUpdate=!0),Le?xe(T.depthTexture,0):te(T.depthTexture,0);const Ue=Ee.__webglTexture,we=It(T),Me=Le?s.TEXTURE_CUBE_MAP_POSITIVE_X+ae:s.TEXTURE_2D,Oe=T.depthTexture.format===rs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===ss)Ie(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Oe,Me,Ue,0,we):s.framebufferTexture2D(s.FRAMEBUFFER,Oe,Me,Ue,0);else if(T.depthTexture.format===rs)Ie(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Oe,Me,Ue,0,we):s.framebufferTexture2D(s.FRAMEBUFFER,Oe,Me,Ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ge(R){const T=r.get(R),ae=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){const Le=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Le){const Ee=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Le.removeEventListener("dispose",Ee)};Le.addEventListener("dispose",Ee),T.__depthDisposeCallback=Ee}T.__boundDepthTexture=Le}if(R.depthTexture&&!T.__autoAllocateDepthBuffer)if(ae)for(let Le=0;Le<6;Le++)Mt(T.__webglFramebuffer[Le],R,Le);else R.texture.mipmaps.length>0?Mt(T.__webglFramebuffer[0],R,0):Mt(T.__webglFramebuffer,R,0);else if(ae){T.__webglDepthbuffer=[];for(let Le=0;Le<6;Le++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[Le]),T.__webglDepthbuffer[Le]===void 0)T.__webglDepthbuffer[Le]=s.createRenderbuffer(),Pt(T.__webglDepthbuffer[Le],R,!1);else{const Ee=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ze=T.__webglDepthbuffer[Le];s.bindRenderbuffer(s.RENDERBUFFER,ze),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,ze)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Pt(T.__webglDepthbuffer,R,!1);else{const Ee=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ze=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ze),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,ze)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Dt(R,T,ae){const Le=r.get(R);T!==void 0&&gt(Le.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ae!==void 0&&ge(R)}function sn(R){const T=R.texture,ae=r.get(R),Le=r.get(T);R.addEventListener("dispose",H),K(R);const Ee=R.textures,ze=R.isWebGLCubeRenderTarget===!0,Ue=Ee.length>1;if(Ue||(Le.__webglTexture===void 0&&(Le.__webglTexture=s.createTexture()),Le.__version=T.version,d.memory.textures++),ze){ae.__webglFramebuffer=[];for(let we=0;we<6;we++)if(T.mipmaps.length>0){ae.__webglFramebuffer[we]=[];for(let Me=0;Me<T.mipmaps.length;Me++)ae.__webglFramebuffer[we][Me]=s.createFramebuffer()}else ae.__webglFramebuffer[we]=s.createFramebuffer()}else{if(T.mipmaps.length>0){ae.__webglFramebuffer=[];for(let we=0;we<T.mipmaps.length;we++)ae.__webglFramebuffer[we]=s.createFramebuffer()}else ae.__webglFramebuffer=s.createFramebuffer();if(Ue)for(let we=0,Me=Ee.length;we<Me;we++){const Oe=r.get(Ee[we]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=s.createTexture(),d.memory.textures++)}if(R.samples>0&&Ie(R)===!1){ae.__webglMultisampledFramebuffer=s.createFramebuffer(),ae.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let we=0;we<Ee.length;we++){const Me=Ee[we];ae.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ae.__webglColorRenderbuffer[we]);const Oe=l.convert(Me.format,Me.colorSpace),W=l.convert(Me.type),Ce=I(Me.internalFormat,Oe,W,Me.normalized,Me.colorSpace,R.isXRRenderTarget===!0),Se=It(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Se,Ce,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,ae.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(ae.__webglDepthRenderbuffer=s.createRenderbuffer(),Pt(ae.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ze){t.bindTexture(s.TEXTURE_CUBE_MAP,Le.__webglTexture),De(s.TEXTURE_CUBE_MAP,T);for(let we=0;we<6;we++)if(T.mipmaps.length>0)for(let Me=0;Me<T.mipmaps.length;Me++)gt(ae.__webglFramebuffer[we][Me],R,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Me);else gt(ae.__webglFramebuffer[we],R,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);z(T)?P(s.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(Ue){for(let we=0,Me=Ee.length;we<Me;we++){const Oe=Ee[we],W=r.get(Oe);let Ce=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Ce=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ce,W.__webglTexture),De(Ce,Oe),gt(ae.__webglFramebuffer,R,Oe,s.COLOR_ATTACHMENT0+we,Ce,0),z(Oe)&&P(Ce)}t.unbindTexture()}else{let we=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(we=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(we,Le.__webglTexture),De(we,T),T.mipmaps.length>0)for(let Me=0;Me<T.mipmaps.length;Me++)gt(ae.__webglFramebuffer[Me],R,T,s.COLOR_ATTACHMENT0,we,Me);else gt(ae.__webglFramebuffer,R,T,s.COLOR_ATTACHMENT0,we,0);z(T)?P(we):T.mipmaps.length>0&&s.texParameteri(we,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&ge(R)}function Z(R){const T=R.textures;for(let ae=0,Le=T.length;ae<Le;ae++){const Ee=T[ae];if(z(Ee)&&Ee.mipmapsAutoUpdate===!0){const ze=U(R),Ue=r.get(Ee).__webglTexture;t.bindTexture(ze,Ue),P(ze),t.unbindTexture()}}}const Gt=[];function Lt(R){if(R.samples>0){if(Ie(R)===!1){const T=R.textures,ae=R.width,Le=R.height;let Ee=s.COLOR_BUFFER_BIT;const ze=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=r.get(R),we=T.length>1;if(we)for(let Oe=0;Oe<T.length;Oe++)t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Oe=0;Oe<T.length;Oe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Ee|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Ee|=s.STENCIL_BUFFER_BIT)),we){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Oe]);const W=r.get(T[Oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,W,0)}s.blitFramebuffer(0,0,ae,Le,0,0,ae,Le,Ee,s.NEAREST),g===!0&&(Gt.length=0,Gt.push(s.COLOR_ATTACHMENT0+Oe),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Gt.push(ze),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Gt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let Oe=0;Oe<T.length;Oe++){t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[Oe]);const W=r.get(T[Oe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,W,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&g){const T=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function It(R){return Math.min(o.maxSamples,R.samples)}function Ie(R){const T=r.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Nt(R){const T=d.render.frame;y.get(R)!==T&&(y.set(R,T),R.update())}function at(R,T){const ae=R.colorSpace,Le=R.format,Ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||ae!==oc&&ae!==ns&&(Wt.getTransfer(ae)===en?(Le!==ar||Ee!==vi)&&Ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",ae)),T}function dt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(m.width=R.naturalWidth||R.width,m.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(m.width=R.displayWidth,m.height=R.displayHeight):(m.width=R.width,m.height=R.height),m}this.allocateTextureUnit=re,this.resetTextureUnits=Q,this.getTextureUnits=k,this.setTextureUnits=L,this.setTexture2D=te,this.setTexture2DArray=ce,this.setTexture3D=ue,this.setTextureCube=xe,this.rebindTextures=Dt,this.setupRenderTarget=sn,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Ie,this.dispose=ee}function oM(s,e){function t(r,o=ns){let l;const d=Wt.getTransfer(o);if(r===vi)return s.UNSIGNED_BYTE;if(r===Cf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Af)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Rm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Nm)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Cm)return s.BYTE;if(r===Am)return s.SHORT;if(r===go)return s.UNSIGNED_SHORT;if(r===Tf)return s.INT;if(r===lr)return s.UNSIGNED_INT;if(r===sr)return s.FLOAT;if(r===cr)return s.HALF_FLOAT;if(r===Pm)return s.ALPHA;if(r===Dm)return s.RGB;if(r===ar)return s.RGBA;if(r===ss)return s.DEPTH_COMPONENT;if(r===rs)return s.DEPTH_STENCIL;if(r===Lm)return s.RED;if(r===Rf)return s.RED_INTEGER;if(r===Ds)return s.RG;if(r===Nf)return s.RG_INTEGER;if(r===Pf)return s.RGBA_INTEGER;if(r===Zl||r===Jl||r===Ql||r===ec)if(d===en)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Zl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ec)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Zl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Jl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ql)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ec)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Od||r===Bd||r===Hd||r===Gd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Od)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Bd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Hd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===jd||r===Vd||r===Wd||r===$d||r===Xd||r===sc||r===Yd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===jd||r===Vd)return d===en?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Wd)return d===en?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===$d)return l.COMPRESSED_R11_EAC;if(r===Xd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===sc)return l.COMPRESSED_RG11_EAC;if(r===Yd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===qd||r===Kd||r===Zd||r===Jd||r===Qd||r===ef||r===tf||r===nf||r===rf||r===sf||r===af||r===of||r===lf||r===cf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===qd)return d===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Kd)return d===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Zd)return d===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Jd)return d===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qd)return d===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ef)return d===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===tf)return d===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===nf)return d===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===rf)return d===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===sf)return d===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===af)return d===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===of)return d===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lf)return d===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===cf)return d===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===uf||r===df||r===ff)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===uf)return d===en?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===df)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ff)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===hf||r===pf||r===ac||r===mf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===hf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===pf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ac)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===mf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ba?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const lM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class uM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Wm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ni({vertexShader:lM,fragmentShader:cM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mn(new Mo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dM extends Ls{constructor(e,t){super();const r=this;let o=null,l=1,d=null,f="local-floor",g=1,m=null,y=null,_=null,h=null,b=null,w=null;const M=typeof XRWebGLBinding<"u",v=new uM,S={},N=t.getContextAttributes();let z=null,P=null;const U=[],I=[],E=new Vt;let D=null,K=null;const G=new Wi;G.viewport=new xn;const V=new Wi;V.viewport=new xn;const H=[G,V],$=new wy;let B=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let te=U[F];return te===void 0&&(te=new fd,U[F]=te),te.getTargetRaySpace()},this.getControllerGrip=function(F){let te=U[F];return te===void 0&&(te=new fd,U[F]=te),te.getGripSpace()},this.getHand=function(F){let te=U[F];return te===void 0&&(te=new fd,U[F]=te),te.getHandSpace()};function he(F){const te=I.indexOf(F.inputSource);if(te===-1)return;const ce=U[te];ce!==void 0&&(ce.update(F.inputSource,F.frame,m||d),ce.dispatchEvent({type:F.type,data:F.inputSource}))}function X(){o.removeEventListener("select",he),o.removeEventListener("selectstart",he),o.removeEventListener("selectend",he),o.removeEventListener("squeeze",he),o.removeEventListener("squeezestart",he),o.removeEventListener("squeezeend",he),o.removeEventListener("end",X),o.removeEventListener("inputsourceschange",ie);for(let F=0;F<U.length;F++){const te=I[F];te!==null&&(I[F]=null,U[F].disconnect(te))}B=null,ee=null,v.reset();for(const F in S)delete S[F];if(e.setRenderTarget(z),b=null,h=null,_=null,o=null,P=null,re.stop(),r.isPresenting=!1,e.setPixelRatio(D),e.setSize(E.width,E.height,!1),K!==null){const F=K.camera;F.fov=K.fov,F.zoom=K.zoom,F.updateProjectionMatrix(),K=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){l=F,r.isPresenting===!0&&Ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){f=F,r.isPresenting===!0&&Ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(F){m=F},this.getBaseLayer=function(){return h!==null?h:b},this.getBinding=function(){return _===null&&M&&(_=new XRWebGLBinding(o,t)),_},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(F){if(o=F,o!==null){if(z=e.getRenderTarget(),o.addEventListener("select",he),o.addEventListener("selectstart",he),o.addEventListener("selectend",he),o.addEventListener("squeeze",he),o.addEventListener("squeezestart",he),o.addEventListener("squeezeend",he),o.addEventListener("end",X),o.addEventListener("inputsourceschange",ie),N.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(E),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,ue=null,xe=null;N.depth&&(xe=N.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=N.stencil?rs:ss,ue=N.stencil?ba:lr);const Ne={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:l};_=this.getBinding(),h=_.createProjectionLayer(Ne),o.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),P=new or(h.textureWidth,h.textureHeight,{format:ar,type:vi,depthTexture:new wa(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const ce={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:l};b=new XRWebGLLayer(o,t,ce),o.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),P=new or(b.framebufferWidth,b.framebufferHeight,{format:ar,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1,storeMultisampledDepthBuffer:b.ignoreDepthValues===!1,storeMultisampledStencilBuffer:b.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(g),m=null,d=await o.requestReferenceSpace(f),re.setContext(o),re.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ie(F){for(let te=0;te<F.removed.length;te++){const ce=F.removed[te],ue=I.indexOf(ce);ue>=0&&(I[ue]=null,U[ue].disconnect(ce))}for(let te=0;te<F.added.length;te++){const ce=F.added[te];let ue=I.indexOf(ce);if(ue===-1){for(let Ne=0;Ne<U.length;Ne++)if(Ne>=I.length){I.push(ce),ue=Ne;break}else if(I[Ne]===null){I[Ne]=ce,ue=Ne;break}if(ue===-1)break}const xe=U[ue];xe&&xe.connect(ce)}}function O(F,te){te===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(te.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(o===null)return;let te=F.near,ce=F.far;v.texture!==null&&(v.depthNear>0&&(te=v.depthNear),v.depthFar>0&&(ce=v.depthFar)),$.near=V.near=G.near=te,$.far=V.far=G.far=ce,(B!==$.near||ee!==$.far)&&(o.updateRenderState({depthNear:$.near,depthFar:$.far}),B=$.near,ee=$.far),$.layers.mask=F.layers.mask|6,G.layers.mask=$.layers.mask&-5,V.layers.mask=$.layers.mask&-3;const ue=F.parent,xe=$.cameras;O($,ue);for(let Ne=0;Ne<xe.length;Ne++)O(xe[Ne],ue);$.projectionMatrix.copy(G.projectionMatrix),$.projectionMatrixInverse.copy(G.projectionMatrixInverse),K===null&&F.isPerspectiveCamera&&(K={camera:F,fov:F.fov,zoom:F.zoom}),Q(F,$,ue)};function Q(F,te,ce){ce===null?F.matrix.copy(te.matrixWorld):(F.matrix.copy(ce.matrixWorld),F.matrix.invert(),F.matrix.multiply(te.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(te.projectionMatrix),F.projectionMatrixInverse.copy(te.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=xf*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(h===null&&b===null))return g},this.setFoveation=function(F){g=F,h!==null&&(h.fixedFoveation=F),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=F)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh($)},this.getCameraTexture=function(F){return S[F]};let k=null;function L(F,te){if(y=te.getViewerPose(m||d),w=te,y!==null){const ce=y.views;b!==null&&(e.setRenderTargetFramebuffer(P,b.framebuffer),e.setRenderTarget(P));let ue=!1;ce.length!==$.cameras.length&&($.cameras.length=0,ue=!0);for(let Xe=0;Xe<ce.length;Xe++){const De=ce[Xe];let je=null;if(b!==null)je=b.getViewport(De);else{const xt=_.getViewSubImage(h,De);je=xt.viewport,Xe===0&&(e.setRenderTargetTextures(P,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(P))}let Ke=H[Xe];Ke===void 0&&(Ke=new Wi,Ke.layers.enable(Xe),Ke.viewport=new xn,H[Xe]=Ke),Ke.matrix.fromArray(De.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(De.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(je.x,je.y,je.width,je.height),Xe===0&&($.matrix.copy(Ke.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),ue===!0&&$.cameras.push(Ke)}const xe=o.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&M){_=r.getBinding();const Xe=_.getDepthInformation(ce[0]);Xe&&Xe.isValid&&Xe.texture&&v.init(Xe,o.renderState)}if(xe&&xe.includes("camera-access")&&M){e.state.unbindTexture(),_=r.getBinding();for(let Xe=0;Xe<ce.length;Xe++){const De=ce[Xe].camera;if(De){let je=S[De];je||(je=new Wm,S[De]=je);const Ke=_.getCameraImage(De);je.sourceTexture=Ke}}}}for(let ce=0;ce<U.length;ce++){const ue=I[ce],xe=U[ce];ue!==null&&xe!==void 0&&xe.update(ue,te,m||d)}k&&k(F,te),te.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:te}),w=null}const re=new Km;re.setAnimationLoop(L),this.setAnimationLoop=function(F){k=F},this.dispose=function(){}}}const fM=new vn,ag=new Rt;ag.set(-1,0,0,0,1,0,0,0,1);function hM(s,e){function t(v,S){v.matrixAutoUpdate===!0&&v.updateMatrix(),S.value.copy(v.matrix)}function r(v,S){S.color.getRGB(v.fogColor.value,$m(s)),S.isFog?(v.fogNear.value=S.near,v.fogFar.value=S.far):S.isFogExp2&&(v.fogDensity.value=S.density)}function o(v,S,N,z,P){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?l(v,S):S.isMeshLambertMaterial?(l(v,S),S.envMap&&(v.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(v,S),_(v,S)):S.isMeshPhongMaterial?(l(v,S),y(v,S),S.envMap&&(v.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(v,S),h(v,S),S.isMeshPhysicalMaterial&&b(v,S,P)):S.isMeshMatcapMaterial?(l(v,S),w(v,S)):S.isMeshDepthMaterial?l(v,S):S.isMeshDistanceMaterial?(l(v,S),M(v,S)):S.isMeshNormalMaterial?l(v,S):S.isLineBasicMaterial?(d(v,S),S.isLineDashedMaterial&&f(v,S)):S.isPointsMaterial?g(v,S,N,z):S.isSpriteMaterial?m(v,S):S.isShadowMaterial?(v.color.value.copy(S.color),v.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(v,S){v.opacity.value=S.opacity,S.color&&v.diffuse.value.copy(S.color),S.emissive&&v.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(v.map.value=S.map,t(S.map,v.mapTransform)),S.alphaMap&&(v.alphaMap.value=S.alphaMap,t(S.alphaMap,v.alphaMapTransform)),S.bumpMap&&(v.bumpMap.value=S.bumpMap,t(S.bumpMap,v.bumpMapTransform),v.bumpScale.value=S.bumpScale,S.side===Bn&&(v.bumpScale.value*=-1)),S.normalMap&&(v.normalMap.value=S.normalMap,t(S.normalMap,v.normalMapTransform),v.normalScale.value.copy(S.normalScale),S.side===Bn&&v.normalScale.value.negate()),S.displacementMap&&(v.displacementMap.value=S.displacementMap,t(S.displacementMap,v.displacementMapTransform),v.displacementScale.value=S.displacementScale,v.displacementBias.value=S.displacementBias),S.emissiveMap&&(v.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,v.emissiveMapTransform)),S.specularMap&&(v.specularMap.value=S.specularMap,t(S.specularMap,v.specularMapTransform)),S.alphaTest>0&&(v.alphaTest.value=S.alphaTest);const N=e.get(S),z=N.envMap,P=N.envMapRotation;z&&(v.envMap.value=z,v.envMapRotation.value.setFromMatrix4(fM.makeRotationFromEuler(P)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(ag),v.reflectivity.value=S.reflectivity,v.ior.value=S.ior,v.refractionRatio.value=S.refractionRatio),S.lightMap&&(v.lightMap.value=S.lightMap,v.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,v.lightMapTransform)),S.aoMap&&(v.aoMap.value=S.aoMap,v.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,v.aoMapTransform))}function d(v,S){v.diffuse.value.copy(S.color),v.opacity.value=S.opacity,S.map&&(v.map.value=S.map,t(S.map,v.mapTransform))}function f(v,S){v.dashSize.value=S.dashSize,v.totalSize.value=S.dashSize+S.gapSize,v.scale.value=S.scale}function g(v,S,N,z){v.diffuse.value.copy(S.color),v.opacity.value=S.opacity,v.size.value=S.size*N,v.scale.value=z*.5,S.map&&(v.map.value=S.map,t(S.map,v.uvTransform)),S.alphaMap&&(v.alphaMap.value=S.alphaMap,t(S.alphaMap,v.alphaMapTransform)),S.alphaTest>0&&(v.alphaTest.value=S.alphaTest)}function m(v,S){v.diffuse.value.copy(S.color),v.opacity.value=S.opacity,v.rotation.value=S.rotation,S.map&&(v.map.value=S.map,t(S.map,v.mapTransform)),S.alphaMap&&(v.alphaMap.value=S.alphaMap,t(S.alphaMap,v.alphaMapTransform)),S.alphaTest>0&&(v.alphaTest.value=S.alphaTest)}function y(v,S){v.specular.value.copy(S.specular),v.shininess.value=Math.max(S.shininess,1e-4)}function _(v,S){S.gradientMap&&(v.gradientMap.value=S.gradientMap)}function h(v,S){v.metalness.value=S.metalness,S.metalnessMap&&(v.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,v.metalnessMapTransform)),v.roughness.value=S.roughness,S.roughnessMap&&(v.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,v.roughnessMapTransform)),S.envMap&&(v.envMapIntensity.value=S.envMapIntensity)}function b(v,S,N){v.ior.value=S.ior,S.diffuseRoughness>0&&(v.diffuseRoughness.value=S.diffuseRoughness,S.diffuseRoughnessMap&&(v.diffuseRoughnessMap.value=S.diffuseRoughnessMap,t(S.diffuseRoughnessMap,v.diffuseRoughnessMapTransform))),S.sheen>0&&(v.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),v.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(v.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,v.sheenColorMapTransform)),S.sheenRoughnessMap&&(v.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,v.sheenRoughnessMapTransform))),S.clearcoat>0&&(v.clearcoat.value=S.clearcoat,v.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(v.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,v.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(v.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Bn&&v.clearcoatNormalScale.value.negate())),S.dispersion>0&&(v.dispersion.value=S.dispersion),S.retroreflectivity>0&&(v.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(v.iridescence.value=S.iridescence,v.iridescenceIOR.value=S.iridescenceIOR,v.iridescenceThicknessMinimum.value=S.iridescenceThicknessMinimum,v.iridescenceThicknessMaximum.value=S.iridescenceThicknessMaximum,S.iridescenceMap&&(v.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,v.iridescenceMapTransform)),S.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),S.transmission>0&&(v.transmission.value=S.transmission,v.transmissionSamplerMap.value=N.texture,v.transmissionSamplerSize.value.set(N.width,N.height),S.transmissionMap&&(v.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,v.transmissionMapTransform)),v.thickness.value=S.thickness,S.thicknessMap&&(v.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=S.attenuationDistance,v.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(v.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(v.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=S.specularIntensity,v.specularColor.value.copy(S.specularColor),S.specularColorMap&&(v.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,v.specularColorMapTransform)),S.specularIntensityMap&&(v.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,v.specularIntensityMapTransform))}function w(v,S){S.matcap&&(v.matcap.value=S.matcap)}function M(v,S){const N=e.get(S).light;v.referencePosition.value.setFromMatrixPosition(N.matrixWorld),v.nearDistance.value=N.shadow.camera.near,v.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function pM(s,e,t,r){let o={},l={};function d(N,z){const P=z.program;r.uniformBlockBinding(N,P,o[N.id])}function f(N,z){let P=o[N.id];P===void 0&&(w(N),P=g(N),o[N.id]=P,N.addEventListener("dispose",v));const U=z.program;r.updateUBOMapping(N,U);const I=e.render.frame;l[N.id]!==I&&(m(N),l[N.id]=I)}function g(N){const z=s.createBuffer(),P=N.__size,U=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,z),s.bufferData(s.UNIFORM_BUFFER,P,U),s.bindBuffer(s.UNIFORM_BUFFER,null),z}function m(N){const z=o[N.id],P=N.uniforms,U=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,z);for(let I=0,E=P.length;I<E;I++){const D=P[I];if(Array.isArray(D))for(let K=0,G=D.length;K<G;K++)y(D[K],I,K,U);else y(D,I,0,U)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(N,z,P,U){if(h(N,z,P,U)===!0){const I=N.__offset,E=N.value;if(Array.isArray(E)){let D=0;for(let K=0;K<E.length;K++){const G=E[K],V=M(G,!0);_(G,N.__data,D),D+=V.storage/Float32Array.BYTES_PER_ELEMENT}}else _(E,N.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,I,N.__data)}}function _(N,z,P){typeof N=="number"||typeof N=="boolean"?z[P]=N:N.isMatrix3?(z[P]=N.elements[0],z[P+1]=N.elements[1],z[P+2]=N.elements[2],z[P+3]=0,z[P+4]=N.elements[3],z[P+5]=N.elements[4],z[P+6]=N.elements[5],z[P+7]=0,z[P+8]=N.elements[6],z[P+9]=N.elements[7],z[P+10]=N.elements[8],z[P+11]=0):ArrayBuffer.isView(N)?z.set(N.subarray(0,z.length-P),P):N.toArray(z,P)}function h(N,z,P,U){const I=N.value,E=z+"_"+P;if(Array.isArray(I)){U[E]===void 0&&(U[E]=[]);const D=U[E];let K=!1;for(let G=0;G<I.length;G++)b(I[G],D,G)===!0&&(K=!0);return K}return b(I,U,E)}function b(N,z,P){if(z[P]===void 0)return typeof N=="number"||typeof N=="boolean"?z[P]=N:ArrayBuffer.isView(N)?z[P]=N.slice():z[P]=N.clone(),!0;{const U=z[P];if(typeof N=="number"||typeof N=="boolean"){if(U!==N)return z[P]=N,!0}else{if(ArrayBuffer.isView(N))return!0;if(U.equals(N)===!1)return U.copy(N),!0}}return!1}function w(N){const z=N.uniforms;let P=0;const U=16;for(let E=0,D=z.length;E<D;E++){const K=Array.isArray(z[E])?z[E]:[z[E]];for(let G=0,V=K.length;G<V;G++){const H=K[G],$=Array.isArray(H.value)?H.value:[H.value],B=Array.isArray(z[E])||Array.isArray(H.value);let ee=P;for(let X=0,ie=$.length;X<ie;X++){const O=$[X],Q=M(O,B),k=P%U,L=k%Q.boundary,re=k+L;P+=L,re!==0&&U-re<Q.storage&&(P+=U-re),X===0&&(ee=P),P+=Q.storage}const he=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new he((P-ee)/Float32Array.BYTES_PER_ELEMENT),H.__offset=ee}}const I=P%U;return I>0&&(P+=U-I),N.__size=P,N.__cache={},this}function M(N,z){const P={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(P.boundary=4,P.storage=4):N.isVector2?(P.boundary=8,P.storage=8):N.isVector3||N.isColor?(P.boundary=16,P.storage=12):N.isVector4?(P.boundary=16,P.storage=16):N.isMatrix3?(P.boundary=16,P.storage=48):N.isMatrix4?(P.boundary=16,P.storage=64):N.isTexture?Ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(N)?(P.boundary=16,P.storage=N.byteLength):Ct("WebGLRenderer: Unsupported uniform value type.",N),z===!0&&(P.boundary=16,P.storage=Math.ceil(P.storage/16)*16),P}function v(N){const z=N.target;z.removeEventListener("dispose",v),s.deleteBuffer(o[z.id]),delete o[z.id],delete l[z.id]}function S(){for(const N in o)s.deleteBuffer(o[N]);o={},l={}}return{bind:d,update:f,dispose:S}}const mM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let tr=null;function gM(){return tr===null&&(tr=new uy(mM,16,16,Ds,cr),tr.name="DFG_LUT",tr.minFilter=oi,tr.magFilter=oi,tr.wrapS=ai,tr.wrapT=ai,tr.generateMipmaps=!1,tr.needsUpdate=!0),tr}class xM{constructor(e={}){const{canvas:t=k_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:m=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:h=!1,outputBufferType:b=vi}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=d;const M=b,v=new Set([Pf,Nf,Rf]),S=new Set([vi,lr,go,ba,Cf,Af]),N=new Uint32Array(4),z=new Int32Array(4),P={textures:[],min:[],max:[],resolution:[]};let U=null,I=null;const E=[],D=[];let K=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ar,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const G=this;let V=!1,H=null,$=null,B=null,ee=null;this._outputColorSpace=xi;let he=0,X=0,ie=null,O=-1,Q=null;const k=new xn,L=new xn;let re=null;const F=new Bt(0);let te=0,ce=t.width,ue=t.height,xe=1,Ne=null,Qe=null;const Xe=new xn(0,0,ce,ue),De=new xn(0,0,ce,ue);let je=!1;const Ke=new vo,xt=new kf;let wt=!1,yt=!1;const gt=new vn,Pt=new ye,Mt=new xn,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Dt=!1;function sn(){return ie===null?xe:1}let Z=r;function Gt(A,Y){return t.getContext(A,Y)}let Lt,It,Ie,Nt,at,dt,R,T,ae,Le,Ee,ze,Ue,we,Me,Oe,W,Ce,Se,Ae,_e,Te,Ge;try{const A={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:g,preserveDrawingBuffer:m,powerPreference:y,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ef}`),t.addEventListener("webglcontextlost",Ze,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",Be,!1),Z===null){const Y="webgl2";if(Z=Gt(Y,A),Z===null)throw Gt(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}rt()}catch(A){throw t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),Jt("WebGLRenderer: "+A.message),A}function rt(){Lt=new yb(Z),Lt.init(),_e=new oM(Z,Lt),It=new cb(Z,Lt,e,_e),Ie=new sM(Z,Lt),It.reversedDepthBuffer&&h&&Ie.buffers.depth.setReversed(!0),$=Z.createFramebuffer(),B=Z.createFramebuffer(),ee=Z.createFramebuffer(),Nt=new wb(Z),at=new Ww,dt=new aM(Z,Lt,Ie,at,It,_e,Nt),R=new _b(G),T=new Ey(Z),Te=new ob(Z,T),ae=new Sb(Z,T,Nt,Te),Le=new Eb(Z,ae,T,Te,Nt),Ce=new Mb(Z,It,dt),Me=new ub(at),Ee=new Vw(G,R,Lt,It,Te,Me),ze=new hM(G,at),Ue=new Xw,we=new Qw(Lt),W=new ab(G,R,Ie,Le,w,g),Oe=new rM(G,Le,It),Ge=new pM(Z,Nt,It,Ie),Se=new lb(Z,Lt,Nt),Ae=new bb(Z,Lt,Nt),Nt.programs=Ee.programs,G.capabilities=It,G.extensions=Lt,G.properties=at,G.renderLists=Ue,G.shadowMap=Oe,G.state=Ie,G.info=Nt}M!==vi&&(K=new Cb(M,t.width,t.height,f,o,l));const Pe=new dM(G,Z);this.xr=Pe,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const A=Lt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Lt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(A){A!==void 0&&(xe=A,this.setSize(ce,ue,!1))},this.getSize=function(A){return A.set(ce,ue)},this.setSize=function(A,Y,se=!0){if(Pe.isPresenting){Ct("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=A,ue=Y,t.width=Math.floor(A*xe),t.height=Math.floor(Y*xe),se===!0&&(t.style.width=A+"px",t.style.height=Y+"px"),K!==null&&K.setSize(t.width,t.height),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(ce*xe,ue*xe).floor()},this.setDrawingBufferSize=function(A,Y,se){ce=A,ue=Y,xe=se,t.width=Math.floor(A*se),t.height=Math.floor(Y*se),this.setViewport(0,0,A,Y)},this.setEffects=function(A){if(M===vi){Jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Y=0;Y<A.length;Y++)if(A[Y].isOutputPass===!0){Ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}K.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(k)},this.getViewport=function(A){return A.copy(Xe)},this.setViewport=function(A,Y,se,de){A.isVector4?Xe.set(A.x,A.y,A.z,A.w):Xe.set(A,Y,se,de),Ie.viewport(k.copy(Xe).multiplyScalar(sn()).round())},this.getScissor=function(A){return A.copy(De)},this.setScissor=function(A,Y,se,de){A.isVector4?De.set(A.x,A.y,A.z,A.w):De.set(A,Y,se,de),Ie.scissor(L.copy(De).multiplyScalar(sn()).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(A){Ie.setScissorTest(je=A)},this.setOpaqueSort=function(A){Ne=A},this.setTransparentSort=function(A){Qe=A},this.getClearColor=function(A){return A.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor(...arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,se=!0){let de=0;if(A){let oe=!1;if(ie!==null){const Ve=ie.texture.format;oe=v.has(Ve)}if(oe){const Ve=ie.texture.type,et=S.has(Ve),We=W.getClearColor(),qe=W.getClearAlpha(),nt=We.r,q=We.g,Re=We.b;et?(N[0]=nt,N[1]=q,N[2]=Re,N[3]=qe,Z.clearBufferuiv(Z.COLOR,0,N)):(z[0]=nt,z[1]=q,z[2]=Re,z[3]=qe,Z.clearBufferiv(Z.COLOR,0,z))}else de|=Z.COLOR_BUFFER_BIT}Y&&(de|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(de|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),de!==0&&Z.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),H=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),W.dispose(),Ue.dispose(),we.dispose(),dt.dispose(),at.dispose(),R.dispose(),Le.dispose(),ae.dispose(),Te.dispose(),Ge.dispose(),Ee.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",Nn),Pe.removeEventListener("sessionend",tn),ln.stop()};function Ze(A){A.preventDefault(),y0("WebGLRenderer: Context Lost."),V=!0}function ct(){y0("WebGLRenderer: Context Restored."),V=!1;const A=Nt.autoReset,Y=Oe.enabled,se=Oe.autoUpdate,de=Oe.needsUpdate,oe=Oe.type;rt(),Nt.autoReset=A,Oe.enabled=Y,Oe.autoUpdate=se,Oe.needsUpdate=de,Oe.type=oe}function Be(A){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function bt(A){const Y=A.target;Y.removeEventListener("dispose",bt),jt(Y)}function jt(A){an(A),at.remove(A)}function an(A){const Y=at.get(A).programs;Y!==void 0&&(Y.forEach(function(se){Ee.releaseProgram(se)}),A.isShaderMaterial&&Ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,se,de,oe,Ve){Y===null&&(Y=ge);const et=oe.isMesh&&oe.matrixWorld.determinantAffine()<0,We=li(A,Y,se,de,oe);Ie.setMaterial(de,et);let qe=se.index,nt=1;if(de.wireframe===!0){if(qe=ae.getWireframeAttribute(se),qe===void 0)return;nt=2}const q=se.drawRange,Re=se.attributes.position;let pe=q.start*nt,Ye=(q.start+q.count)*nt;Ve!==null&&(pe=Math.max(pe,Ve.start*nt),Ye=Math.min(Ye,(Ve.start+Ve.count)*nt)),qe!==null?(pe=Math.max(pe,0),Ye=Math.min(Ye,qe.count)):Re!=null&&(pe=Math.max(pe,0),Ye=Math.min(Ye,Re.count));const ht=Ye-pe;if(ht<0||ht===1/0)return;Te.setup(oe,de,We,se,qe);let pt,Tt=Se;if(qe!==null&&(pt=T.get(qe),Tt=Ae,Tt.setIndex(pt)),oe.isMesh)de.wireframe===!0?(Ie.setLineWidth(de.wireframeLinewidth*sn()),Tt.setMode(Z.LINES)):Tt.setMode(Z.TRIANGLES);else if(oe.isLine){let Ut=de.linewidth;Ut===void 0&&(Ut=1),Ie.setLineWidth(Ut*sn()),oe.isLineSegments?Tt.setMode(Z.LINES):oe.isLineLoop?Tt.setMode(Z.LINE_LOOP):Tt.setMode(Z.LINE_STRIP)}else oe.isPoints?Tt.setMode(Z.POINTS):oe.isSprite&&Tt.setMode(Z.TRIANGLES);if(oe.isBatchedMesh)if(Lt.get("WEBGL_multi_draw"))Tt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{const Ut=oe._multiDrawStarts,tt=oe._multiDrawCounts,Kt=oe._multiDrawCount,it=qe?T.get(qe).bytesPerElement:1,qn=at.get(de).currentProgram.getUniforms();for(let yn=0;yn<Kt;yn++)qn.setValue(Z,"_gl_DrawID",yn),Tt.render(Ut[yn]/it,tt[yn])}else if(oe.isInstancedMesh)Tt.renderInstances(pe,ht,oe.count);else if(se.isInstancedBufferGeometry){const Ut=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,tt=Math.min(se.instanceCount,Ut);Tt.renderInstances(pe,ht,tt)}else Tt.render(pe,ht)};function dn(A,Y,se,de){H!==null&&A.isNodeMaterial&&H.setObject(de,A),wt===!0&&Me.setState(A,se,!1),A.transparent===!0&&A.side===Xi&&A.forceSinglePass===!1?(A.side=Bn,A.needsUpdate=!0,Pn(A,Y,de),A.side=Ps,A.needsUpdate=!0,Pn(A,Y,de),A.side=Xi):Pn(A,Y,de)}this.compile=function(A,Y,se=null){se===null&&(se=A),H!==null&&H.renderStart(A,Y,se),I=we.get(se),I.init(Y),D.push(I),se.traverseVisible(function(oe){oe.isLight&&oe.layers.test(Y.layers)&&(I.pushLight(oe),oe.castShadow&&I.pushShadow(oe))}),A!==se&&A.traverseVisible(function(oe){oe.isLight&&oe.layers.test(Y.layers)&&(I.pushLight(oe),oe.castShadow&&I.pushShadow(oe))}),I.setupLights(),H!==null&&H.updateLights(I.state.lightsArray),yt=this.localClippingEnabled,wt=Me.init(this.clippingPlanes,yt),wt===!0&&Me.setGlobalState(this.clippingPlanes,Y),H!==null&&Oe.render(I.state.shadowsArray,se,Y);const de=new Set;return A.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;const Ve=oe.material;if(Ve)if(Array.isArray(Ve))for(let et=0;et<Ve.length;et++){const We=Ve[et];dn(We,se,Y,oe),de.add(We)}else dn(Ve,se,Y,oe),de.add(Ve)}),I=D.pop(),H!==null&&H.renderEnd(),de},this.compileAsync=function(A,Y,se=null){const de=this.compile(A,Y,se);return new Promise(oe=>{function Ve(){if(de.forEach(function(et){const qe=at.get(et).currentProgram;(qe===void 0||qe.isReady())&&de.delete(et)}),de.size===0){oe(A);return}setTimeout(Ve,10)}Lt.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let fn=null;function Qt(A){fn&&fn(A)}function Nn(){ln.stop()}function tn(){ln.start()}const ln=new Km;ln.setAnimationLoop(Qt),typeof self<"u"&&ln.setContext(self),this.setAnimationLoop=function(A){fn=A,Pe.setAnimationLoop(A),A===null?ln.stop():ln.start()},Pe.addEventListener("sessionstart",Nn),Pe.addEventListener("sessionend",tn),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;H!==null&&H.renderStart(A,Y);const se=Pe.enabled===!0&&Pe.isPresenting===!0,de=K!==null&&(ie===null||se)&&K.begin(G,ie);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(K===null||K.isCompositing()===!1)&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(Y),Y=Pe.getCamera()),A.isScene===!0&&A.onBeforeRender(G,A,Y,ie),I=we.get(A,D.length),I.init(Y),I.state.textureUnits=dt.getTextureUnits(),D.push(I),gt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Y.isArrayCamera?xt.setFromArrayCamera(Y):Ke.setFromProjectionMatrix(gt,qi,Y.reversedDepth),yt=this.localClippingEnabled,wt=Me.init(this.clippingPlanes,yt),U=Ue.get(A,E.length),U.init(),E.push(U),this.info.render.frame++,Pe.enabled===!0&&Pe.isPresenting===!0){const et=G.xr.getDepthSensingMesh();et!==null&&St(et,Y,-1/0,G.sortObjects)}St(A,Y,0,G.sortObjects),U.finish(),H!==null&&H.updateLights(I.state.lightsArray),G.sortObjects===!0&&U.sort(Ne,Qe),Dt=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,Dt&&W.addToRenderList(U,A),this.info.autoReset===!0&&this.info.reset(),wt===!0&&Me.beginShadows();const oe=I.state.shadowsArray;if(Oe.render(oe,A,Y),wt===!0&&Me.endShadows(),(de&&K.hasRenderPass())===!1){const et=U.opaque,We=U.transmissive;if(I.setupLights(),Y.isArrayCamera){const qe=Y.cameras;if(We.length>0)for(let nt=0,q=qe.length;nt<q;nt++){const Re=qe[nt];zt(et,We,A,Re)}Dt&&W.render(A);for(let nt=0,q=qe.length;nt<q;nt++){const Re=qe[nt];Ht(U,A,Re,Re.viewport)}}else We.length>0&&zt(et,We,A,Y),Dt&&W.render(A),Ht(U,A,Y)}ie!==null&&X===0&&(dt.updateMultisampleRenderTarget(ie),dt.updateRenderTargetMipmap(ie)),de&&K.end(G),A.isScene===!0&&A.onAfterRender(G,A,Y),Te.resetDefaultState(),O=-1,Q=null,D.pop(),D.length>0?(I=D[D.length-1],dt.setTextureUnits(I.state.textureUnits),wt===!0&&Me.setGlobalState(G.clippingPlanes,I.state.camera)):I=null,E.pop(),E.length>0?U=E[E.length-1]:U=null,H!==null&&H.renderEnd()};function St(A,Y,se,de){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)I.pushLight(A),A.castShadow&&I.pushShadow(A);else if(A.isSprite){const et=Y.isArrayCamera?xt:Ke;if(!A.frustumCulled||A.intersectsFrustum(et)){de&&Mt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(gt);const We=Le.update(A),qe=A.material;qe.visible&&U.push(A,We,qe,se,Mt.z,null,Y)}}else if(A.isMesh||A.isLine||A.isPoints){const et=Y.isArrayCamera?xt:Ke;if(!A.frustumCulled||A.intersectsFrustum(et)){const We=Le.update(A),qe=A.material;if(de&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Mt.copy(A.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),Mt.copy(We.boundingSphere.center)),Mt.applyMatrix4(A.matrixWorld).applyMatrix4(gt)),Array.isArray(qe)){const nt=We.groups;for(let q=0,Re=nt.length;q<Re;q++){const pe=nt[q],Ye=qe[pe.materialIndex];Ye&&Ye.visible&&U.push(A,We,Ye,se,Mt.z,pe,Y)}}else qe.visible&&U.push(A,We,qe,se,Mt.z,null,Y)}}}const Ve=A.children;for(let et=0,We=Ve.length;et<We;et++)St(Ve[et],Y,se,de)}function Ht(A,Y,se,de){const{opaque:oe,transmissive:Ve,transparent:et}=A;I.setupLightsView(se),wt===!0&&Me.setGlobalState(G.clippingPlanes,se),de&&Ie.viewport(k.copy(de)),oe.length>0&&nn(oe,Y,se),Ve.length>0&&nn(Ve,Y,se),et.length>0&&nn(et,Y,se),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function zt(A,Y,se,de){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[de.id]===void 0){const pe=Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[de.id]=new or(1,1,{generateMipmaps:!0,type:pe?cr:vi,minFilter:is,samples:Math.max(4,It.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Wt.workingColorSpace})}const Ve=I.state.transmissionRenderTarget[de.id],et=de.viewport||k;Ve.setSize(et.z*G.transmissionResolutionScale,et.w*G.transmissionResolutionScale);const We=G.getRenderTarget(),qe=G.getActiveCubeFace(),nt=G.getActiveMipmapLevel();G.setRenderTarget(Ve),G.getClearColor(F),te=G.getClearAlpha(),te<1&&G.setClearColor(16777215,.5),G.clear(),Dt&&W.render(se);const q=G.toneMapping;G.toneMapping=Ar;const Re=de.viewport;if(de.viewport!==void 0&&(de.viewport=void 0),I.setupLightsView(de),wt===!0&&Me.setGlobalState(G.clippingPlanes,de),nn(A,se,de),dt.updateMultisampleRenderTarget(Ve),dt.updateRenderTargetMipmap(Ve),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let Ye=0,ht=Y.length;Ye<ht;Ye++){const pt=Y[Ye],{object:Tt,geometry:Ut,material:tt,group:Kt}=pt;if(tt.side===Xi&&Tt.layers.test(de.layers)){const it=tt.side;tt.side=Bn,tt.needsUpdate=!0,rn(Tt,se,de,Ut,tt,Kt),tt.side=it,tt.needsUpdate=!0,pe=!0}}pe===!0&&(dt.updateMultisampleRenderTarget(Ve),dt.updateRenderTargetMipmap(Ve))}G.setRenderTarget(We,qe,nt),G.setClearColor(F,te),Re!==void 0&&(de.viewport=Re),G.toneMapping=q}function nn(A,Y,se){const de=Y.isScene===!0?Y.overrideMaterial:null;for(let oe=0,Ve=A.length;oe<Ve;oe++){const et=A[oe],{object:We,geometry:qe,group:nt}=et;let q=et.material;q.allowOverride===!0&&de!==null&&(q=de),We.layers.test(se.layers)&&rn(We,Y,se,qe,q,nt)}}function rn(A,Y,se,de,oe,Ve){H!==null&&oe.isNodeMaterial&&H.setObject(A,oe),A.onBeforeRender(G,Y,se,de,oe,Ve),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),oe.onBeforeRender(G,Y,se,de,A,Ve),oe.transparent===!0&&oe.side===Xi&&oe.forceSinglePass===!1?(oe.side=Bn,oe.needsUpdate=!0,G.renderBufferDirect(se,Y,de,oe,A,Ve),oe.side=Ps,oe.needsUpdate=!0,G.renderBufferDirect(se,Y,de,oe,A,Ve),oe.side=Xi):G.renderBufferDirect(se,Y,de,oe,A,Ve),A.onAfterRender(G,Y,se,de,oe,Ve)}function Qn(A){let Y=0;for(const se of A)se.texture!==null&&Y++;return Y}function Pn(A,Y,se){Y.isScene!==!0&&(Y=ge);const de=at.get(A),oe=I.state.lights,Ve=I.state.shadowsArray,et=oe.state.version,We=Ee.getParameters(A,oe.state,Ve,Y,se,I.state.lightProbeGridArray),qe=Ee.getProgramCacheKey(We);let nt=de.programs;de.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Y.environment:null,de.fog=Y.fog;const q=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;de.envMap=R.get(A.envMap||de.environment,q),de.envMapRotation=de.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,nt===void 0&&(A.addEventListener("dispose",bt),nt=new Map,de.programs=nt,de.programVariants=new Map);let Re=nt.get(qe);if(Re!==void 0){if(de.currentProgram===Re&&de.lightsStateVersion===et)return Pi(A,We),Re}else We.uniforms=Ee.getUniforms(A),H!==null&&A.isNodeMaterial&&H.build(A,se,We),A.onBeforeCompile(We,G),Re=Ee.acquireProgram(We,qe),nt.set(qe,Re),de.uniforms=We.uniforms;const pe=de.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(pe.clippingPlanes=Me.uniform),Pi(A,We),de.needsLights=yi(A),de.lightsStateVersion=et,de.needsLights&&(pe.ambientLightColor.value=oe.state.ambient,pe.lightProbe.value=oe.state.probe,pe.sunLights.value=oe.state.sun,pe.sunLightShadows.value=oe.state.sunShadow,pe.directionalLights.value=oe.state.directional,pe.directionalLightShadows.value=oe.state.directionalShadow,pe.spotLights.value=oe.state.spot,pe.spotLightShadows.value=oe.state.spotShadow,pe.rectAreaLights.value=oe.state.rectArea,pe.ltc_1.value=oe.state.rectAreaLTC1,pe.ltc_2.value=oe.state.rectAreaLTC2,pe.pointLights.value=oe.state.point,pe.pointLightShadows.value=oe.state.pointShadow,pe.hemisphereLights.value=oe.state.hemi,pe.sunShadowMatrix.value=oe.state.sunShadowMatrix,pe.sunShadowCascade.value=oe.state.sunShadowCascade,pe.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,pe.spotLightMatrix.value=oe.state.spotLightMatrix,pe.spotLightMap.value=oe.state.spotLightMap,pe.pointShadowMatrix.value=oe.state.pointShadowMatrix),de.numLightProbeGrids=Qn(I.state.lightProbeGridArray),de.currentProgram=Re,de.uniformsList=null,Re}function _i(A,Y,se,de,oe){const Ve=at.get(A),et=Ve.currentProgram.id+","+de+","+oe;let We=Ve.programVariants.get(et);return We===void 0?(We=Pn(A,Y,se),Ve.programVariants.set(et,We)):(Ve.currentProgram=We,Ve.uniformsList=null,Ve.outputColorSpace=de,Ve.toneMapping=oe),We}function qt(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=ic.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function Pi(A,Y){const se=at.get(A);se.outputColorSpace=Y.outputColorSpace,se.batching=Y.batching,se.batchingColor=Y.batchingColor,se.instancing=Y.instancing,se.instancingColor=Y.instancingColor,se.instancingMorph=Y.instancingMorph,se.skinning=Y.skinning,se.morphTargets=Y.morphTargets,se.morphNormals=Y.morphNormals,se.morphColors=Y.morphColors,se.morphTargetsCount=Y.morphTargetsCount,se.numClippingPlanes=Y.numClippingPlanes,se.numIntersection=Y.numClipIntersection,se.vertexAlphas=Y.vertexAlphas,se.vertexTangents=Y.vertexTangents,se.toneMapping=Y.toneMapping}function li(A,Y,se,de,oe){Y.isScene!==!0&&(Y=ge),dt.resetTextureUnits();const Ve=Y.fog,et=de.isMeshStandardMaterial||de.isMeshLambertMaterial||de.isMeshPhongMaterial?Y.environment:null,We=ie===null?G.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Wt.workingColorSpace,qe=de.isMeshStandardMaterial||de.isMeshLambertMaterial&&!de.envMap||de.isMeshPhongMaterial&&!de.envMap,nt=R.get(de.envMap||et,qe),q=de.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,Re=!!se.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),pe=!!se.morphAttributes.position,Ye=!!se.morphAttributes.normal,ht=!!se.morphAttributes.color;let pt=Ar;de.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(pt=G.toneMapping);const Tt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Ut=Tt!==void 0?Tt.length:0,tt=at.get(de),Kt=I.state.lights;if(wt===!0&&(yt===!0||A!==Q)){const le=A===Q&&de.id===O;Me.setState(de,A,le)}let it=!1,qn=!1;de.version===tt.__version?tt.needsLights&&tt.lightsStateVersion!==Kt.state.version||oe.isBatchedMesh&&tt.batching===!1||!oe.isBatchedMesh&&tt.batching===!0||oe.isBatchedMesh&&tt.batchingColor===!0&&oe._colorsTexture===null||oe.isBatchedMesh&&tt.batchingColor===!1&&oe._colorsTexture!==null||oe.isInstancedMesh&&tt.instancing===!1||!oe.isInstancedMesh&&tt.instancing===!0||oe.isSkinnedMesh&&tt.skinning===!1||!oe.isSkinnedMesh&&tt.skinning===!0||oe.isInstancedMesh&&tt.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&tt.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&tt.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&tt.instancingMorph===!1&&oe.morphTexture!==null||tt.envMap!==nt||de.fog===!0&&tt.fog!==Ve||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Me.numPlanes||tt.numIntersection!==Me.numIntersection)||tt.vertexAlphas!==q||tt.vertexTangents!==Re||tt.morphTargets!==pe||tt.morphNormals!==Ye||tt.morphColors!==ht||tt.morphTargetsCount!==Ut||tt.numLightProbeGrids!==Qn(I.state.lightProbeGridArray)?it=!0:(tt.outputColorSpace!==We||tt.toneMapping!==pt)&&(qn=!0):(it=!0,tt.__version=de.version);let yn=tt.currentProgram;(it===!0||qn===!0)&&(yn=qn===!0?_i(de,Y,oe,We,pt):Pn(de,Y,oe),H&&de.isNodeMaterial&&H.onUpdateProgram(de,yn,tt));let Si=!1,bi=!1,ci=!1;const Ft=yn.getUniforms(),hn=tt.uniforms;if(Ie.useProgram(yn.program)&&(Si=!0,bi=!0,ci=!0),de.id!==O&&(O=de.id,bi=!0),Si||Q!==A){Ie.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ft.setValue(Z,"projectionMatrix",A.projectionMatrix),Ft.setValue(Z,"viewMatrix",A.matrixWorldInverse);const mt=Ft.map.cameraPosition;mt!==void 0&&mt.setValue(Z,Pt.setFromMatrixPosition(A.matrixWorld)),It.logarithmicDepthBuffer&&Ft.setValue(Z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&Ft.setValue(Z,"isOrthographic",A.isOrthographicCamera===!0),Q!==A&&(Q=A,bi=!0,ci=!0)}if(tt.needsLights&&(Kt.state.sunShadowMap.length>0&&Ft.setValue(Z,"sunShadowMap",Kt.state.sunShadowMap,dt),Kt.state.directionalShadowMap.length>0&&Ft.setValue(Z,"directionalShadowMap",Kt.state.directionalShadowMap,dt),Kt.state.spotShadowMap.length>0&&Ft.setValue(Z,"spotShadowMap",Kt.state.spotShadowMap,dt),Kt.state.pointShadowMap.length>0&&Ft.setValue(Z,"pointShadowMap",Kt.state.pointShadowMap,dt)),oe.isSkinnedMesh){Ft.setOptional(Z,oe,"bindMatrix"),Ft.setOptional(Z,oe,"bindMatrixInverse");const le=oe.skeleton;le&&(le.boneTexture===null&&le.computeBoneTexture(),Ft.setValue(Z,"boneTexture",le.boneTexture,dt))}oe.isBatchedMesh&&(Ft.setOptional(Z,oe,"batchingTexture"),Ft.setValue(Z,"batchingTexture",oe._matricesTexture,dt),Ft.setOptional(Z,oe,"batchingIdTexture"),Ft.setValue(Z,"batchingIdTexture",oe._indirectTexture,dt),Ft.setOptional(Z,oe,"batchingColorTexture"),oe._colorsTexture!==null&&Ft.setValue(Z,"batchingColorTexture",oe._colorsTexture,dt));const En=se.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&Ce.update(oe,se,yn),(bi||tt.receiveShadow!==oe.receiveShadow)&&(tt.receiveShadow=oe.receiveShadow,Ft.setValue(Z,"receiveShadow",oe.receiveShadow)),(de.isMeshStandardMaterial||de.isMeshLambertMaterial||de.isMeshPhongMaterial)&&de.envMap===null&&Y.environment!==null&&(hn.envMapIntensity.value=Y.environmentIntensity),hn.dfgLUT!==void 0&&(hn.dfgLUT.value=gM()),bi){if(Ft.setValue(Z,"toneMappingExposure",G.toneMappingExposure),tt.needsLights&&Di(hn,ci),Ve&&de.fog===!0&&ze.refreshFogUniforms(hn,Ve),ze.refreshMaterialUniforms(hn,de,xe,ue,I.state.transmissionRenderTarget[A.id]),tt.needsLights&&tt.numLightProbeGrids>0){const le=P;let mt=0;for(const Xt of I.state.lightProbeGridArray)Xt.texture!==null&&(le.textures[mt]=Xt.texture,le.min[mt]=Xt.boundingBox.min,le.max[mt]=Xt.boundingBox.max,le.resolution[mt]=Xt.resolution,mt++);for(const Xt in le)le[Xt].length=mt;hn.probesSH.value=le.textures,hn.probesMin.value=le.min,hn.probesMax.value=le.max,hn.probesResolution.value=le.resolution}ic.upload(Z,qt(tt),hn,dt)}if(de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(ic.upload(Z,qt(tt),hn,dt),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&Ft.setValue(Z,"center",oe.center),Ft.setValue(Z,"modelViewMatrix",oe.modelViewMatrix),Ft.setValue(Z,"normalMatrix",oe.normalMatrix),Ft.setValue(Z,"modelMatrix",oe.matrixWorld),de.uniformsGroups!==void 0){const le=de.uniformsGroups;for(let mt=0,Xt=le.length;mt<Xt;mt++){const ui=le[mt];Ge.update(ui,yn),Ge.bind(ui,yn)}}return yn}function Di(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.sunLights.needsUpdate=Y,A.sunLightShadows.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function yi(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return he},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(A,Y,se){const de=at.get(A);de.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,de.__autoAllocateDepthBuffer===!1&&(de.__useRenderToTexture=!1),at.get(A.texture).__webglTexture=Y,at.get(A.depthTexture).__webglTexture=de.__autoAllocateDepthBuffer?void 0:se,de.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const se=at.get(A);se.__webglFramebuffer=Y,se.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(A,Y=0,se=0){ie=A,he=Y,X=se;let de=null,oe=!1,Ve=!1;if(A){const We=at.get(A);if(We.__useDefaultFramebuffer!==void 0){Ie.bindFramebuffer(Z.FRAMEBUFFER,We.__webglFramebuffer),k.copy(A.viewport),L.copy(A.scissor),re=A.scissorTest,Ie.viewport(k),Ie.scissor(L),Ie.setScissorTest(re),O=-1;return}else if(We.__webglFramebuffer===void 0)dt.setupRenderTarget(A);else if(We.__hasExternalTextures)dt.rebindTextures(A,at.get(A.texture).__webglTexture,at.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const q=A.depthTexture;if(We.__boundDepthTexture!==q){if(q!==null&&at.has(q)&&(A.width!==q.image.width||A.height!==q.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");dt.setupDepthRenderbuffer(A)}}const qe=A.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ve=!0);const nt=at.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(nt[Y])?de=nt[Y][se]:de=nt[Y],oe=!0):A.samples>0&&dt.useMultisampledRTT(A)===!1?de=at.get(A).__webglMultisampledFramebuffer:Array.isArray(nt)?de=nt[se]:de=nt,k.copy(A.viewport),L.copy(A.scissor),re=A.scissorTest}else k.copy(Xe).multiplyScalar(xe).floor(),L.copy(De).multiplyScalar(xe).floor(),re=je;if(se!==0&&(de=$),Ie.bindFramebuffer(Z.FRAMEBUFFER,de)&&Ie.drawBuffers(A,de),Ie.viewport(k),Ie.scissor(L),Ie.setScissorTest(re),oe){const We=at.get(A.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+Y,We.__webglTexture,se)}else if(Ve){const We=Y;for(let qe=0;qe<A.textures.length;qe++){const nt=at.get(A.textures[qe]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+qe,nt.__webglTexture,se,We)}}else if(A!==null&&se!==0){const We=at.get(A.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,We.__webglTexture,se)}O=-1};function Pr(A){const Y=at.get(A);return(Y.__readFormat!==A.format||Y.__readType!==A.type)&&(Y.__readFormat=A.format,Y.__readType=A.type,Y.__formatReadable=It.textureFormatReadable(A.format),Y.__typeReadable=It.textureTypeReadable(A.type)),Y}this.readRenderTargetPixels=function(A,Y,se,de,oe,Ve,et,We=0){if(!(A&&A.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=at.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&et!==void 0&&(qe=qe[et],Array.isArray(qe)&&(qe=qe[0])),qe){Ie.bindFramebuffer(Z.FRAMEBUFFER,qe);try{const nt=A.textures[We],q=nt.format,Re=nt.type;A.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+We);const pe=Pr(nt);if(pe.__formatReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(pe.__typeReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-de&&se>=0&&se<=A.height-oe&&Z.readPixels(Y,se,de,oe,_e.convert(q),_e.convert(Re),Ve)}finally{const nt=ie!==null?at.get(ie).__webglFramebuffer:null;Ie.bindFramebuffer(Z.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(A,Y,se,de,oe,Ve,et,We=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=at.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&et!==void 0&&(qe=qe[et],Array.isArray(qe)&&(qe=qe[0])),qe)if(Y>=0&&Y<=A.width-de&&se>=0&&se<=A.height-oe){Ie.bindFramebuffer(Z.FRAMEBUFFER,qe);const nt=A.textures[We],q=nt.format,Re=nt.type;A.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+We);const pe=Pr(nt);if(pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ye),Z.bufferData(Z.PIXEL_PACK_BUFFER,Ve.byteLength,Z.STREAM_READ),Z.readPixels(Y,se,de,oe,_e.convert(q),_e.convert(Re),0),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null);const ht=ie!==null?at.get(ie).__webglFramebuffer:null;Ie.bindFramebuffer(Z.FRAMEBUFFER,ht);const pt=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await z_(Z,pt,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ye),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Ve),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null),Z.deleteBuffer(Ye),Z.deleteSync(pt),Ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,se=0){const de=Math.pow(2,-se),oe=Math.floor(A.image.width*de),Ve=Math.floor(A.image.height*de),et=Y!==null?Y.x:0,We=Y!==null?Y.y:0;dt.setTexture2D(A,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,se,0,0,et,We,oe,Ve),Ie.unbindTexture()},this.copyTextureToTexture=function(A,Y,se=null,de=null,oe=0,Ve=0){let et,We,qe,nt,q,Re,pe,Ye,ht;const pt=A.isCompressedTexture?A.mipmaps[Ve]:A.image;if(se!==null)et=se.max.x-se.min.x,We=se.max.y-se.min.y,qe=se.isBox3?se.max.z-se.min.z:1,nt=se.min.x,q=se.min.y,Re=se.isBox3?se.min.z:0;else{const Ft=Math.pow(2,-oe);et=Math.floor(pt.width*Ft),We=Math.floor(pt.height*Ft),A.isDataArrayTexture?qe=pt.depth:A.isData3DTexture?qe=Math.floor(pt.depth*Ft):qe=1,nt=0,q=0,Re=0}de!==null?(pe=de.x,Ye=de.y,ht=de.z):(pe=0,Ye=0,ht=0);const Tt=_e.convert(Y.format),Ut=_e.convert(Y.type);let tt;Y.isData3DTexture?(dt.setTexture3D(Y,0),tt=Z.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(dt.setTexture2DArray(Y,0),tt=Z.TEXTURE_2D_ARRAY):(dt.setTexture2D(Y,0),tt=Z.TEXTURE_2D),Ie.activeTexture(Z.TEXTURE0),Ie.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,Y.flipY),Ie.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),Ie.pixelStorei(Z.UNPACK_ALIGNMENT,Y.unpackAlignment);const Kt=Ie.getParameter(Z.UNPACK_ROW_LENGTH),it=Ie.getParameter(Z.UNPACK_IMAGE_HEIGHT),qn=Ie.getParameter(Z.UNPACK_SKIP_PIXELS),yn=Ie.getParameter(Z.UNPACK_SKIP_ROWS),Si=Ie.getParameter(Z.UNPACK_SKIP_IMAGES);Ie.pixelStorei(Z.UNPACK_ROW_LENGTH,pt.width),Ie.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,pt.height),Ie.pixelStorei(Z.UNPACK_SKIP_PIXELS,nt),Ie.pixelStorei(Z.UNPACK_SKIP_ROWS,q),Ie.pixelStorei(Z.UNPACK_SKIP_IMAGES,Re);const bi=A.isDataArrayTexture||A.isData3DTexture,ci=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const Ft=at.get(A),hn=at.get(Y),En=at.get(Ft.__renderTarget),le=at.get(hn.__renderTarget);Ie.bindFramebuffer(Z.READ_FRAMEBUFFER,En.__webglFramebuffer),Ie.bindFramebuffer(Z.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let mt=0;mt<qe;mt++)bi&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,at.get(A).__webglTexture,oe,Re+mt),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,at.get(Y).__webglTexture,Ve,ht+mt)),Z.blitFramebuffer(nt,q,nt+et,q+We,pe,Ye,pe+et,Ye+We,Z.DEPTH_BUFFER_BIT,Z.NEAREST);Ie.bindFramebuffer(Z.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(oe!==0||A.isRenderTargetTexture||at.has(A)){const Ft=at.get(A),hn=at.get(Y);Ie.bindFramebuffer(Z.READ_FRAMEBUFFER,B),Ie.bindFramebuffer(Z.DRAW_FRAMEBUFFER,ee);for(let En=0;En<qe;En++)bi?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ft.__webglTexture,oe,Re+En):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Ft.__webglTexture,oe),ci?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,hn.__webglTexture,Ve,ht+En):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,hn.__webglTexture,Ve),oe!==0?Z.blitFramebuffer(nt,q,nt+et,q+We,pe,Ye,pe+et,Ye+We,Z.COLOR_BUFFER_BIT,Z.NEAREST):ci?Z.copyTexSubImage3D(tt,Ve,pe,Ye,ht+En,nt,q,et,We):Z.copyTexSubImage2D(tt,Ve,pe,Ye,nt,q,et,We);Ie.bindFramebuffer(Z.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else ci?A.isDataTexture||A.isData3DTexture?Z.texSubImage3D(tt,Ve,pe,Ye,ht,et,We,qe,Tt,Ut,pt.data):Y.isCompressedArrayTexture?Z.compressedTexSubImage3D(tt,Ve,pe,Ye,ht,et,We,qe,Tt,pt.data):Z.texSubImage3D(tt,Ve,pe,Ye,ht,et,We,qe,Tt,Ut,pt):A.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Ve,pe,Ye,et,We,Tt,Ut,pt.data):A.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Ve,pe,Ye,pt.width,pt.height,Tt,pt.data):Z.texSubImage2D(Z.TEXTURE_2D,Ve,pe,Ye,et,We,Tt,Ut,pt);Ie.pixelStorei(Z.UNPACK_ROW_LENGTH,Kt),Ie.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,it),Ie.pixelStorei(Z.UNPACK_SKIP_PIXELS,qn),Ie.pixelStorei(Z.UNPACK_SKIP_ROWS,yn),Ie.pixelStorei(Z.UNPACK_SKIP_IMAGES,Si),Ve===0&&Y.generateMipmaps===!0&&Y.mipmapsAutoUpdate===!0&&Z.generateMipmap(tt),Ie.unbindTexture()},this.initRenderTarget=function(A){at.get(A).__webglFramebuffer===void 0&&dt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?dt.setTextureCube(A,0):A.isData3DTexture?dt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?dt.setTexture2DArray(A,0):dt.setTexture2D(A,0),Ie.unbindTexture()},this.resetState=function(){he=0,X=0,ie=null,Ie.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Wt._getUnpackColorSpace()}}function vM(s,e){const t=document.createElement("canvas");t.width=2048,t.height=1024;const r=t.getContext("2d");let o;e?s==="celestial-cyan"?o=["#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#f0f9ff","#dbeafe"]:s==="supernova-sunset"?o=["#fff1f2","#fecdd3","#fda4af","#fb7185","#e11d48","#9f1239","#fff7ed","#fed7aa"]:s==="nocturne-silver"?o=["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#71717a","#ffffff","#e4e4e7"]:s==="cyberpunk-neon"?o=["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#d946ef","#c026d3","#a21caf"]:s==="solar-gold"?o=["#fffbeb","#fef3c7","#fde68a","#fcd34d","#f59e0b","#d97706","#b45309","#78350f"]:s==="emerald-aurora"?o=["#f0fdf4","#dcfce7","#bbf7d0","#86efac","#4ade80","#22c55e","#16a34a","#15803d"]:s==="pure-pitch-black"?o=["#ffffff","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#71717a","#3f3f46","#18181b"]:o=["#fffbeb","#fef3c7","#fde68a","#fcd34d","#f59e0b","#d97706","#fff7ed","#ffedd5"]:s==="celestial-cyan"?o=["#020b14","#041d33","#083358","#0e4a7d","#0284c7","#38bdf8","#075985","#0c4a6e","#06b6d4"]:s==="supernova-sunset"?o=["#12040d","#2b061c","#4a0a2f","#771146","#be123c","#f43f5e","#ea580c","#fb923c","#450a22"]:s==="nocturne-silver"?o=["#060609","#111119","#1e1e2d","#2f2f45","#4d4d6e","#7b7b9e","#a6a6c7","#252538","#d4d4e8"]:s==="cyberpunk-neon"?o=["#080014","#16002c","#2c004d","#550080","#9333ea","#db2777","#f43f5e","#06b6d4","#22d3ee"]:s==="solar-gold"?o=["#0d0500","#1f0c00","#3b1700","#5e2500","#92400e","#d97706","#f59e0b","#fbbf24","#fef08a"]:s==="emerald-aurora"?o=["#020d06","#052110","#0a381d","#14532d","#16a34a","#22c55e","#4ade80","#10b981","#34d399"]:s==="pure-pitch-black"?o=["#000000","#050505","#0a0a0a","#121212","#1a1a1a","#262626","#404040","#737373","#a3a3a3"]:o=["#080415","#150933","#270e59","#3e1785","#5b21b6","#7c3aed","#a855f7","#c084fc","#2e1065","#d8b4fe"];const l=r.createLinearGradient(0,0,0,t.height);o.forEach((h,b)=>{l.addColorStop(b/(o.length-1),h)}),r.fillStyle=l,r.fillRect(0,0,t.width,t.height);const d=72;for(let h=0;h<d;h++){const w=h/d*t.height,M=t.height/d*(1.2+Math.sin(h*.7)*.5),v=o[h*3%o.length];r.fillStyle=v,r.globalAlpha=.25+Math.sin(h*.9)*.2,r.beginPath(),r.moveTo(0,w);const S=32;for(let N=0;N<=S;N++){const z=N/S*t.width,P=Math.sin(N*.8+h*1.5)*7+Math.cos(N*1.6+h*2.1)*4;r.lineTo(z,w+P)}r.lineTo(t.width,w+M),r.lineTo(0,w+M),r.closePath(),r.fill()}r.globalAlpha=e?.25:.4,r.fillStyle="#ffffff";for(let h=0;h<48;h++){const b=Math.random()*t.width,w=Math.random()*t.height,M=60+Math.random()*180,v=1.5+Math.random()*3.5;r.beginPath(),r.ellipse(b,w,M,v,Math.sin(w*.05)*.15,0,Math.PI*2),r.fill()}const f=t.width*.62,g=t.height*.58,m=85,y=r.createRadialGradient(f,g,5,f,g,m);e?(y.addColorStop(0,"#ffffff"),y.addColorStop(.4,o[o.length-2]),y.addColorStop(.8,o[o.length-1]),y.addColorStop(1,"rgba(255,255,255,0)")):(y.addColorStop(0,"#ffffff"),y.addColorStop(.3,o[o.length-3]||"#c084fc"),y.addColorStop(.7,o[o.length-1]||"#7c3aed"),y.addColorStop(1,"rgba(0,0,0,0)")),r.globalAlpha=.85,r.fillStyle=y,r.beginPath(),r.ellipse(f,g,m*1.6,m*.8,-.15,0,Math.PI*2),r.fill(),r.strokeStyle=e?"rgba(200, 150, 100, 0.45)":"rgba(255, 255, 255, 0.60)",r.lineWidth=2.5;for(let h=0;h<3;h++){r.beginPath();for(let b=0;b<Math.PI*2;b+=.2){const w=b/(Math.PI*2)*m*.7,M=f+Math.cos(b+h*2.1)*w*1.5,v=g+Math.sin(b+h*2.1)*w*.7;b===0?r.moveTo(M,v):r.lineTo(M,v)}r.stroke()}const _=new mc(t);return _.wrapS=Sa,_.wrapT=ai,_}function _M(s,e){const t=document.createElement("canvas");t.width=1024,t.height=64;const r=t.getContext("2d");r.clearRect(0,0,t.width,t.height);let o,l;e?(o="rgba(217, 119, 6, 0.45)",l="rgba(245, 158, 11, 0.85)"):s==="celestial-cyan"?(o="rgba(56, 189, 248, 0.45)",l="rgba(186, 230, 253, 0.90)"):s==="supernova-sunset"?(o="rgba(251, 146, 60, 0.45)",l="rgba(254, 205, 211, 0.90)"):s==="nocturne-silver"?(o="rgba(212, 212, 216, 0.45)",l="rgba(255, 255, 255, 0.90)"):s==="cyberpunk-neon"?(o="rgba(6, 182, 212, 0.50)",l="rgba(244, 63, 94, 0.95)"):s==="solar-gold"?(o="rgba(245, 158, 11, 0.50)",l="rgba(254, 240, 138, 0.95)"):s==="emerald-aurora"?(o="rgba(16, 185, 129, 0.45)",l="rgba(110, 231, 183, 0.90)"):s==="pure-pitch-black"?(o="rgba(115, 115, 115, 0.35)",l="rgba(245, 245, 245, 0.90)"):(o="rgba(192, 132, 252, 0.50)",l="rgba(243, 232, 255, 0.92)");for(let f=0;f<t.width;f++){const g=f/t.width;let m=0;g<.22?m=.12+Math.sin(g*60)*.08:g>=.22&&g<.65?m=.75+Math.sin(g*120)*.18+Math.cos(g*240)*.06:g>=.65&&g<.72?m=.02:g>=.72&&g<.95?g>.85&&g<.87?m=.05:m=.55+Math.sin(g*100)*.15:m=.2+Math.sin(g*200)*.15,r.fillStyle=m>.6?l:o,r.globalAlpha=Math.max(0,Math.min(1,m)),r.fillRect(f,0,1,t.height)}const d=new mc(t);return d.wrapS=ai,d.wrapT=ai,d}function yM(s){const e=document.createElement("canvas");e.width=2048,e.height=1024;const t=e.getContext("2d");t.fillStyle=s?"#d6d3d1":"#888899",t.fillRect(0,0,e.width,e.height),t.fillStyle=s?"#a8a29e":"#474755",[{x:.35,y:.4,rx:240,ry:160},{x:.55,y:.35,rx:280,ry:190},{x:.7,y:.45,rx:200,ry:140},{x:.4,y:.65,rx:220,ry:150},{x:.6,y:.6,rx:260,ry:180}].forEach(d=>{t.globalAlpha=.65,t.beginPath(),t.ellipse(d.x*e.width,d.y*e.height,d.rx,d.ry,.2,0,Math.PI*2),t.fill()});const o=320;for(let d=0;d<o;d++){const f=Math.random()*e.width,g=Math.random()*e.height,m=4+Math.random()*32;if(t.globalAlpha=.55,t.fillStyle=s?"#57534e":"#22222a",t.beginPath(),t.arc(f,g,m,0,Math.PI*2),t.fill(),t.globalAlpha=.7,t.strokeStyle=s?"#ffffff":"#e2e8f0",t.lineWidth=Math.max(1,m*.2),t.beginPath(),t.arc(f,g,m,Math.PI*.75,Math.PI*1.75),t.stroke(),m>24){t.globalAlpha=.25,t.strokeStyle=s?"#ffffff":"#cbd5e1",t.lineWidth=1;for(let y=0;y<8;y++){const _=y/8*Math.PI*2,h=m*(3+Math.random()*5);t.beginPath(),t.moveTo(f+Math.cos(_)*m,g+Math.sin(_)*m),t.lineTo(f+Math.cos(_)*h,g+Math.sin(_)*h),t.stroke()}}}const l=new mc(e);return l.wrapS=Sa,l.wrapT=ai,l}function SM(s){const e=document.createElement("canvas");e.width=2048,e.height=1024;const t=e.getContext("2d");t.fillStyle=s?"#991b1b":"#450a0a",t.fillRect(0,0,e.width,e.height),t.fillStyle=s?"#7f1d1d":"#1c0404",[{x:.35,y:.4,rx:240,ry:160},{x:.55,y:.35,rx:280,ry:190},{x:.7,y:.45,rx:200,ry:140},{x:.4,y:.65,rx:220,ry:150},{x:.6,y:.6,rx:260,ry:180}].forEach(d=>{t.globalAlpha=.75,t.beginPath(),t.ellipse(d.x*e.width,d.y*e.height,d.rx,d.ry,.2,0,Math.PI*2),t.fill()});const o=280;for(let d=0;d<o;d++){const f=Math.random()*e.width,g=Math.random()*e.height,m=4+Math.random()*30;t.globalAlpha=.6,t.fillStyle="#1c0404",t.beginPath(),t.arc(f,g,m,0,Math.PI*2),t.fill(),t.globalAlpha=.85,t.strokeStyle="#f87171",t.lineWidth=Math.max(1,m*.2),t.beginPath(),t.arc(f,g,m,Math.PI*.75,Math.PI*1.75),t.stroke()}const l=new mc(e);return l.wrapS=Sa,l.wrapT=ai,l}const bM=()=>{const s=fe.useRef(null),{wallpaperSettings:e,appTheme:t,isEcoSleeping:r}=Nr(),o=fe.useRef(r);o.current=r;const l=fe.useRef(!1),d=fe.useRef(null);fe.useEffect(()=>{!r&&!l.current&&d.current&&d.current()},[r]);const f=e.celestialBody||"ringed-planet",g=e.palette||"cosmic-royal",m=t==="light";return fe.useEffect(()=>{if(!s.current)return;if(f==="none"){s.current.innerHTML="";return}const y=s.current;y.innerHTML="";const _=y.clientWidth||window.innerWidth,h=y.clientHeight||window.innerHeight,b=_<768,w=new ty,M=new Wi(45,_/h,.1,100);M.position.set(0,0,10);const v=new xM({alpha:!0,antialias:!0,powerPreference:"high-performance"});v.setSize(_,h),v.setPixelRatio(Math.min(window.devicePixelRatio||1,1.25)),v.outputColorSpace=xi,y.appendChild(v.domElement);const S=new Sy(m?16775149:16777215,m?2.8:2.5);w.add(S);const N=new by(m?14870768:g==="celestial-cyan"?662832:g==="cyberpunk-neon"?2031672:g==="solar-gold"?2363651:g==="emerald-aurora"?270096:g==="pure-pitch-black"?197379:1577516,m?.7:.4);w.add(N);const z=new lo;w.add(z);let P=3.4,U=1.8,I=.65;const E=e.celestialPosition||"default";E==="upper-right"?(P=b?1.2:3.4,U=b?2.3:1.8,S.position.set(-8,5,4)):E==="upper-left"?(P=b?-1.2:-3.3,U=b?2.5:2,S.position.set(-8,2,-2)):E==="zenith-center"?(P=0,U=b?2.5:2.4,S.position.set(0,0,4)):f==="ringed-planet"||f==="pulsar-star"?(P=b?1.2:3.4,U=b?2.3:1.8,I=b?.48:.68,S.position.set(-8,5,4)):f==="crescent-moon"||f==="blood-moon"?(P=b?-1.2:-3.3,U=b?2.5:2,I=b?.42:.6,S.position.set(-8,2,-2)):f==="eclipse-corona"&&(P=0,U=b?2.5:2.4,I=b?.45:.64,S.position.set(0,0,4));const D=e.celestialScaleMultiplier||1;I*=D,z.position.set(P,U,0),z.scale.set(I,I,I);let K=0,G=0,V=0,H=0;const $=L=>{const re=L.clientX/window.innerWidth*2-1;K=(-(L.clientY/window.innerHeight)*2+1)*.18,G=re*.25};window.addEventListener("mousemove",$,{passive:!0});let B=null,ee=null,he=null,X=null;if(f==="ringed-planet"){const L=new ji(1,64,64),re=vM(g,m),F=new Wl({map:re,roughness:.55,metalness:.08});B=new Mn(L,F),z.add(B);const te=new ji(1.04,48,48),ce=new Ni({vertexShader:`
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vViewPosition = -mvPosition.xyz;
            gl_Position = projectionMatrix * mvPosition;
          }
        `,fragmentShader:`
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          uniform vec3 glowColor;
          void main() {
            vec3 normal = normalize(vNormal);
            vec3 viewDir = normalize(vViewPosition);
            float fresnel = pow(1.0 - max(0.0, dot(normal, viewDir)), 3.2);
            gl_FragColor = vec4(glowColor, fresnel * 0.88);
          }
        `,uniforms:{glowColor:{value:new Bt(m?g==="celestial-cyan"?165063:14251782:g==="celestial-cyan"?3718648:g==="supernova-sunset"?16007006:11032055)}},transparent:!0,blending:Cs,side:Bn}),ue=new Mn(te,ce);z.add(ue);const xe=new Ff(1.35,2.85,128),Ne=xe.attributes.position,Qe=xe.attributes.uv;for(let xt=0;xt<Ne.count;xt++){const wt=Ne.getX(xt),yt=Ne.getY(xt),Pt=(Math.sqrt(wt*wt+yt*yt)-1.35)/(2.85-1.35);Qe.setXY(xt,Pt,.5)}Qe.needsUpdate=!0;const Xe=_M(g,m),De=new Wl({map:Xe,side:Xi,transparent:!0,opacity:.92,roughness:.45,metalness:.05});ee=new Mn(xe,De),ee.rotation.x=Math.PI*.48,ee.rotation.y=-.15,z.add(ee);const je=new ji(.11,24,24),Ke=new Wl({color:m?14078929:13095678,roughness:.8});he=new Mn(je,Ke),z.add(he),z.rotation.z=-.42}else if(f==="crescent-moon"){const L=new ji(1,64,64),re=yM(m),F=new Ni({vertexShader:`
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          varying vec2 vUv;
          void main() {
            vUv = uv;
            vNormal = normalize(normalMatrix * normal);
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vViewPosition = -mvPosition.xyz;
            gl_Position = projectionMatrix * mvPosition;
          }
        `,fragmentShader:`
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          varying vec2 vUv;
          uniform sampler2D moonTexture;
          uniform vec3 sunDir;
          uniform vec3 sunlitColor;
          uniform vec3 earthshineColor;
          uniform float earthshineAlpha;

          void main() {
            vec3 N = normalize(vNormal);
            vec3 V = normalize(vViewPosition);
            vec3 L = normalize(sunDir);

            // Sunlight incidence dot product
            float NdotL = dot(N, L);

            // Razor-sharp yet anti-aliased lunar terminator
            float crescent = smoothstep(-0.02, 0.08, NdotL);

            // Crater texture mapping
            vec4 tex = texture2D(moonTexture, vUv);

            // Sunlit crescent: radiant ivory/gold with crater topography
            float spec = pow(max(0.0, dot(reflect(-L, N), V)), 6.0) * 0.35;
            vec3 litColor = tex.rgb * sunlitColor * (2.2 + spec);

            // Faint, ghostly earthshine on dark side (astronomically authentic silhouette)
            vec3 darkColor = tex.rgb * earthshineColor * 0.10;

            vec3 col = mix(darkColor, litColor, crescent);
            float alpha = mix(earthshineAlpha, 1.0, crescent);

            gl_FragColor = vec4(col, alpha);
          }
        `,uniforms:{moonTexture:{value:re},sunDir:{value:new ye(-1.6,.35,-.65).normalize()},sunlitColor:{value:new Bt(m?16776171:16710083)},earthshineColor:{value:new Bt(m?9741240:6583435)},earthshineAlpha:{value:m?.07:.05}},transparent:!0});B=new Mn(L,F),z.add(B);const te=new ji(1.04,48,48),ce=new Ni({vertexShader:`
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vViewPosition = -mvPosition.xyz;
            gl_Position = projectionMatrix * mvPosition;
          }
        `,fragmentShader:`
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          uniform vec3 sunDir;
          uniform vec3 glowColor;
          void main() {
            vec3 normal = normalize(vNormal);
            vec3 viewDir = normalize(vViewPosition);
            float fresnel = pow(1.0 - max(0.0, dot(normal, viewDir)), 3.5);
            // Mask glow so it strictly radiates along the sunlit crescent arc
            float crescentMask = max(0.0, dot(normal, normalize(sunDir)) + 0.15);
            gl_FragColor = vec4(glowColor, fresnel * crescentMask * 0.85);
          }
        `,uniforms:{sunDir:{value:new ye(-1.6,.35,-.65).normalize()},glowColor:{value:new Bt(m?16096779:16707722)}},transparent:!0,blending:Cs,side:Bn}),ue=new Mn(te,ce);z.add(ue),z.rotation.y=.45,z.rotation.z=-.22}else if(f==="eclipse-corona"){const L=new Mo(3.8,3.8),re=new Ni({vertexShader:`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          varying vec2 vUv;
          uniform float uTime;
          uniform vec3 uColor;
          void main() {
            vec2 p = vUv - 0.5;
            float r = length(p) * 2.0;
            float theta = atan(p.y, p.x);
            
            // Radiating magnetic coronal streamers
            float streamers = sin(theta * 12.0 + uTime * 0.8) * 0.15 + cos(theta * 24.0 - uTime * 1.2) * 0.08;
            float flare = 0.28 / (r - streamers);
            float alpha = smoothstep(1.0, 0.22, r) * flare;
            
            gl_FragColor = vec4(uColor, clamp(alpha, 0.0, 0.95));
          }
        `,uniforms:{uTime:{value:0},uColor:{value:new Bt(m?14251782:16638023)}},transparent:!0,blending:Cs,depthWrite:!1});X=new Mn(L,re),z.add(X);const F=new ji(.96,48,48),te=new nc({color:m?1579035:328970});B=new Mn(F,te),z.add(B)}else if(f==="blood-moon"){const L=new ji(1,64,64),re=SM(m),F=new Wl({map:re,roughness:.7,metalness:.05});B=new Mn(L,F),z.add(B);const te=new ji(1.05,48,48),ce=new Ni({vertexShader:`
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vViewPosition = -mvPosition.xyz;
            gl_Position = projectionMatrix * mvPosition;
          }
        `,fragmentShader:`
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          void main() {
            vec3 normal = normalize(vNormal);
            vec3 viewDir = normalize(vViewPosition);
            float fresnel = pow(1.0 - max(0.0, dot(normal, viewDir)), 3.0);
            gl_FragColor = vec4(1.0, 0.15, 0.15, fresnel * 0.90);
          }
        `,transparent:!0,blending:Cs,side:Bn}),ue=new Mn(te,ce);z.add(ue),z.rotation.y=.5,z.rotation.z=-.2}else if(f==="pulsar-star"){const L=new ji(.72,48,48),re=new nc({color:m?165063:14742270});B=new Mn(L,re),z.add(B);const F=new Uf(1.4,5,32,1,!0),te=new nc({color:m?223649:3718648,transparent:!0,opacity:.5,side:Xi,blending:Cs}),ce=new Mn(F,te);ce.position.y=2.6,z.add(ce);const ue=new Mn(F,te);ue.position.y=-2.6,ue.rotation.x=Math.PI,z.add(ue),X=ce}let ie;const O=performance.now(),Q=()=>{if(o.current){v.render(w,M),l.current=!1;return}if(l.current=!0,ie=requestAnimationFrame(Q),document.hidden)return;const L=(performance.now()-O)*.001;V+=(K-V)*.06,H+=(G-H)*.06,z.position.x=P+H*.8,z.position.y=U+V*.8;const re=e.rotationSpeed||"standard",F=re==="static"?0:re==="slow"?.35:re==="fast"?2.4:1;if(B&&(B.rotation.y+=.0012*F),he){const ce=L*.35*F;he.position.x=Math.cos(ce)*4.8,he.position.z=Math.sin(ce)*4.8*.4,he.position.y=Math.sin(ce*1.5)*.6}X&&X.material.uniforms&&(X.material.uniforms.uTime.value=L),v.render(w,M)};d.current=()=>{l.current||(l.current=!0,Q())},Q();const k=()=>{if(!y||!v||!M)return;const L=y.clientWidth||window.innerWidth,re=y.clientHeight||window.innerHeight;M.aspect=L/re,M.updateProjectionMatrix(),v.setSize(L,re),v.setPixelRatio(Math.min(window.devicePixelRatio||1,1.25));const F=L<768,te=e.celestialPosition||"default";te==="upper-right"?(P=F?1.2:3.4,U=F?2.3:1.8):te==="upper-left"?(P=F?-1.2:-3.3,U=F?2.5:2):te==="zenith-center"?(P=0,U=F?2.5:2.4):f==="ringed-planet"||f==="pulsar-star"?(P=F?1.2:3.4,U=F?2.3:1.8,I=F?.48:.68):f==="crescent-moon"||f==="blood-moon"?(P=F?-1.2:-3.3,U=F?2.5:2,I=F?.42:.6):f==="eclipse-corona"&&(P=0,U=F?2.5:2.4,I=F?.45:.64),I*=e.celestialScaleMultiplier||1,z.position.set(P,U,0),z.scale.set(I,I,I)};return window.addEventListener("resize",k,{passive:!0}),()=>{d.current=null,l.current=!1,cancelAnimationFrame(ie),window.removeEventListener("mousemove",$),window.removeEventListener("resize",k),v.dispose(),y&&v.domElement&&y.contains(v.domElement)&&y.removeChild(v.domElement)}},[f,g,m,e.celestialPosition,e.celestialScaleMultiplier,e.rotationSpeed]),u.jsx("div",{ref:s,className:"fixed inset-0 pointer-events-none z-[1] select-none overflow-hidden","aria-hidden":"true"})};/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=s=>s==null?void 0:s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function MM(s,e,t=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:wM(s),size:24,node:e,...t.length>0?{aliases:t}:{}}}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=s=>{let e="",t=!1;for(const r of s){if(r==="-"||r==="_"||r<=" "){t=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=t?r.toUpperCase():r,t=!1}return e};/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=s=>{const e=EM(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Nd(s){return s!=null}function CM(s,e={}){var h,b;const t=e.attributeNames??{},r=w=>t[w]??w,o=s.size??s.width??Ts.width,l=s.size??s.height??Ts.height,d=((h=s.aliases)==null?void 0:h.filter(w=>typeof w=="string"&&w.trim()!=="").map(w=>`lucide-${w}`))??[],f=[...s.name?[`lucide-${s.name}`]:[],...d],g=((b=e.className)==null?void 0:b.split(" ").filter(Boolean))??[],m=e.includeDefaultClasses===!1?yf(...g):yf("lucide",...f,...g),y=e.absoluteStrokeWidth?Number(e.strokeWidth??Ts["stroke-width"])*Number(s.size??s.width??Ts.width)/Number(e.size??e.width??Ts.width):e.strokeWidth??Ts["stroke-width"];return["svg",{...Object.entries(Ts).reduce((w,[M,v])=>(w[r(M)]=v,w),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&Nd(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&Nd(e.width)&&{[r("width")]:e.width},..."height"in e&&Nd(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:y,...m&&{[r("class")]:m},[r("viewBox")]:`0 0 ${o} ${l}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},s.node.map(w=>{const[M,v,S]=w,N=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...v}:v;return S?[M,N,S]:[M,N]})]}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function AM(s,e={}){return CM(s,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},NM=fe.createContext({}),PM=()=>fe.useContext(NM),DM=fe.forwardRef(({color:s,size:e,width:t,height:r,strokeWidth:o,absoluteStrokeWidth:l,nonScalingStroke:d,className:f="",children:g,iconNode:m=[],icon:y={node:m,aliases:[],size:24},..._},h)=>{const{size:b=24,strokeWidth:w=2,absoluteStrokeWidth:M=!1,nonScalingStroke:v=!1,color:S="currentColor",className:N=""}=PM()??{},z=!!g||RM(_),[P,U,I=[]]=AM(y,{color:s??S,width:t??e??b,height:r??e??b,strokeWidth:o??w,absoluteStrokeWidth:l??M,nonScalingStroke:d??v,className:yf(N,f),hasA11yProp:z,attributes:_});return fe.createElement(P,{ref:h,...U},[...I.map(([E,D])=>fe.createElement(E,D)),...Array.isArray(g)?g:[g]])});/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function At(s,e=[],t=[]){const r=typeof s=="string"?MM(s,e,t):s,o=fe.forwardRef(({className:l,...d},f)=>fe.createElement(DM,{ref:f,icon:r,className:l,...d}));return r.name&&(o.displayName=TM(r.name)),o}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og={name:"bell",size:24,node:[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]};og.node;const LM=At(og);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg={name:"book-open",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]]};lg.node;const IM=At(lg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg={name:"calendar-clock",size:24,node:[["path",{d:"M16 14v2.2l1.6 1",key:"fo4ql5"}],["path",{d:"M16 2v3",key:"otl347"}],["path",{d:"M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338",key:"7hb8p4"}],["path",{d:"M3 9h5.859",key:"numkqi"}],["path",{d:"M8 2v3",key:"1ioesn"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]};cg.node;const cm=At(cg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug={name:"calendar",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]]};ug.node;const dg=At(ug);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg={name:"chart-no-axes-column",size:24,node:[["path",{d:"M5 21v-6",key:"1hz6c0"}],["path",{d:"M12 21V3",key:"1lcnhd"}],["path",{d:"M19 21V9",key:"unv183"}]],aliases:["bar-chart-2"]};fg.node;const Sf=At(fg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};hg.node;const Cr=At(hg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};pg.node;const kM=At(pg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};mg.node;const gg=At(mg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};xg.node;const zM=At(xg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};vg.node;const _o=At(vg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g={name:"coffee",size:24,node:[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]};_g.node;const UM=At(_g);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg={name:"droplets",size:24,node:[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]};yg.node;const FM=At(yg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg={name:"external-link",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]};Sg.node;const OM=At(Sg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg={name:"eye-off",size:24,node:[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]};bg.node;const BM=At(bg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg={name:"face-slightly-smiling",size:24,node:[["path",{d:"M15 10V9",key:"4dkmfx"}],["path",{d:"M16.472 15a6 6 0 01-8.943 0",key:"7qomzy"}],["path",{d:"M9 10V9",key:"1lazqi"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["smile"]};wg.node;const HM=At(wg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg={name:"flame",size:24,node:[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]]};Mg.node;const Bf=At(Mg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg={name:"headphones",size:24,node:[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]};Eg.node;const dc=At(Eg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg={name:"leaf",size:24,node:[["path",{d:"M11 20a10 10 0 0010-10 25.9 25.9 0 00-1.04-7.281 1 1 0 00-1.755-.325C15.833 5.5 13 5.5 9.8 6.1A7 7 0 0011 20",key:"1wjnjv"}],["path",{d:"M2 21a5 5 0 012.911-4.544C7.613 15.212 8.351 15.24 11 13",key:"c1ejpn"}]]};Tg.node;const GM=At(Tg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg={name:"list-music",size:24,node:[["path",{d:"M16 5H3",key:"m91uny"}],["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M11 19H3",key:"zflm78"}],["path",{d:"M21 16V5",key:"yxg4q8"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]};Cg.node;const um=At(Cg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag={name:"maximize-2",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]};Ag.node;const dm=At(Ag);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg={name:"minimize-2",size:24,node:[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]]};Rg.node;const Ng=At(Rg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};Pg.node;const fc=At(Pg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};Dg.node;const ir=At(Dg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};Lg.node;const $i=At(Lg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};Ig.node;const fo=At(Ig);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg={name:"quote",size:24,node:[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]};kg.node;const jM=At(kg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg={name:"radio",size:24,node:[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};zg.node;const fm=At(zg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};Ug.node;const Tr=At(Ug);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg={name:"skip-back",size:24,node:[["path",{d:"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",key:"15892j"}],["path",{d:"M3 20V4",key:"1ptbpl"}]]};Fg.node;const bf=At(Fg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og={name:"skip-forward",size:24,node:[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]]};Og.node;const hc=At(Og);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};Bg.node;const Hg=At(Bg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Gg.node;const Rs=At(Gg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg={name:"square-check-big",size:24,node:[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-square"]};jg.node;const VM=At(jg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg={name:"star",size:24,node:[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]};Vg.node;const WM=At(Vg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};Wg.node;const $g=At(Wg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg={name:"sunrise",size:24,node:[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]};Xg.node;const $M=At(Xg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg={name:"tag",size:24,node:[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]};Yg.node;const XM=At(Yg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg={name:"target",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};qg.node;const YM=At(qg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg={name:"timer",size:24,node:[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]};Kg.node;const qM=At(Kg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};Zg.node;const Ns=At(Zg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg={name:"trending-up",size:24,node:[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]};Jg.node;const KM=At(Jg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg={name:"tv",size:24,node:[["path",{d:"m17 2-5 5-5-5",key:"16satq"}],["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",key:"1e6viu"}]]};Qg.node;const ZM=At(Qg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex={name:"user",size:24,node:[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]};ex.node;const tx=At(ex);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};nx.node;const wf=At(nx);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};ix.node;const rx=At(ix);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};sx.node;const rr=At(sx),JM=()=>{const{activeYouTubeItem:s,isYouTubePlaying:e,youtubeVolume:t,isYouTubeMuted:r,setYouTubeIsPlaying:o,setYouTubePlayerReady:l,showYouTubePreview:d,setShowYouTubePreview:f,toggleYouTubePlay:g,nextYouTubeTrack:m,prevYouTubeTrack:y,toggleYouTubeMute:_,setYouTubeVolume:h,audioSource:b}=Nr(),w=fe.useRef(null),[M,v]=fe.useState(null),S=fe.useRef((s==null?void 0:s.id)||null),N=fe.useRef(null),[z,P]=fe.useState(!1),U=fe.useRef(!1),I=fe.useCallback(($,B="")=>{try{w.current&&w.current.contentWindow&&w.current.contentWindow.postMessage(JSON.stringify({event:"command",func:$,args:B}),"*")}catch(ee){console.warn("[YouTube Audio] Command error:",ee)}},[]),E=fe.useCallback(($,B)=>{const ee=B?"1":"0",he=typeof window<"u"&&window.location.origin?`&origin=${encodeURIComponent(window.location.origin)}`:"";if(!$)return`https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=${ee}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${he}`;if($.type==="playlist"&&$.playlistId)return`https://www.youtube.com/embed/videoseries?list=${encodeURIComponent($.playlistId)}&autoplay=${ee}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${he}`;if($.type==="video_in_playlist"&&$.videoId&&$.playlistId)return`https://www.youtube.com/embed/${encodeURIComponent($.videoId)}?list=${encodeURIComponent($.playlistId)}&autoplay=${ee}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${he}`;const X=$.videoId||"jfKfPfyJRdk";return`https://www.youtube.com/embed/${encodeURIComponent(X)}?autoplay=${ee}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${he}`},[]),[D,K]=fe.useState(()=>E(s,!1)),G=fe.useCallback(()=>{I("unMute",""),I("setVolume",[t||75]),r&&_()},[I,t,r,_]);fe.useEffect(()=>(window.__forMeSendYouTubeCommand=I,window.__forMeForceUnmute=G,l(!0),()=>{delete window.__forMeSendYouTubeCommand,delete window.__forMeForceUnmute}),[I,G,l]),fe.useEffect(()=>{if(!s||S.current===s.id)return;S.current=s.id,v(null);const $=E(s,e);N.current=$,K($),Vi.updateMetadata({title:s.title,artist:s.channel||"FOR ME Sanctuary",album:s.type==="playlist"?"YouTube Playlist":"YouTube Stream",artworkUrl:s.thumbnailUrl,onPlay:()=>{o(!0),I("playVideo",""),G()},onPause:()=>{o(!1),I("pauseVideo","")},onNext:s.type==="playlist"||s.type==="video_in_playlist"?m:void 0,onPrev:s.type==="playlist"||s.type==="video_in_playlist"?y:void 0})},[s,E,e,m,y,I,o,G]),fe.useEffect(()=>{if(U.current){U.current=!1;return}e?(I("playVideo",""),setTimeout(()=>{I("unMute",""),I("setVolume",[t||75])},50),Vi.setPlaybackState("playing")):(I("pauseVideo",""),Vi.setPlaybackState("paused"))},[e,I,t]),fe.useEffect(()=>{I("setVolume",[t||75])},[t,I]),fe.useEffect(()=>{r?I("mute",""):(I("unMute",""),I("setVolume",[t||75]))},[r,t,I]),fe.useEffect(()=>{const $=B=>{if(!(!B.data||typeof B.data!="string"))try{const ee=JSON.parse(B.data);ee.event==="onStateChange"?ee.info===1?(U.current=!0,o(!0),v(null),Vi.setPlaybackState("playing"),r||(I("unMute",""),I("setVolume",[t||75]))):ee.info===2?document.hidden||(U.current=!0,o(!1),Vi.setPlaybackState("paused")):ee.info===0&&((s==null?void 0:s.type)==="playlist"||(s==null?void 0:s.type)==="video_in_playlist"?Vi.setPlaybackState("playing"):(U.current=!0,o(!1),Vi.setPlaybackState("none"))):ee.event==="infoDelivery"&&ee.info?typeof ee.info.muted=="boolean"&&ee.info.muted&&!r&&e&&(I("unMute",""),I("setVolume",[t||75])):ee.event==="onError"&&(console.warn("[YouTube Audio Player Error]",ee.info),(ee.info===101||ee.info===150)&&v("The owner of this video restricts playback outside of YouTube."))}catch{}};return window.addEventListener("message",$),()=>window.removeEventListener("message",$)},[o,r,t,I,s,e]);const V=b==="youtube"&&e||d,H=(s==null?void 0:s.type)==="playlist"||(s==null?void 0:s.type)==="video_in_playlist";return u.jsxs(u.Fragment,{children:[u.jsxs("div",{role:"region","aria-label":"YouTube Audio Player",style:{position:"fixed",bottom:!V||z?"0px":d?"84px":"16px",right:!V||z?"0px":d?"24px":"16px",width:!V||z?"2px":d?"380px":"250px",height:!V||z?"2px":d?"285px":"150px",zIndex:!V||z?-1:d?50:30,opacity:!V||z?.01:1,pointerEvents:!V||z?"none":"auto",borderRadius:"1.25rem",overflow:"hidden",boxShadow:d?"0 30px 70px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.18)":"0 15px 35px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.12)",transition:"all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"},className:"backdrop-blur-2xl bg-[#090b14]/95 flex flex-col border border-white/15",children:[u.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-black/60 shrink-0 select-none",children:[u.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[u.jsx("span",{className:`w-2 h-2 rounded-full shrink-0 ${e?"bg-red-500 animate-pulse":"bg-zinc-500"}`}),u.jsx("span",{className:"text-white text-xs font-display font-semibold truncate max-w-[110px] sm:max-w-[160px]",title:s==null?void 0:s.title,children:(s==null?void 0:s.title)||"YouTube Audio"})]}),u.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[u.jsxs("button",{type:"button",onClick:G,className:`px-1.5 py-0.5 rounded-md text-[10px] font-sans font-bold flex items-center gap-1 transition-colors cursor-pointer ${r?"bg-amber-500 text-black hover:bg-amber-400 animate-pulse":"bg-emerald-600/80 text-white hover:bg-emerald-500"}`,title:"Force Unmute & Restore Volume",children:[r?u.jsx(rx,{className:"w-3 h-3"}):u.jsx(wf,{className:"w-3 h-3"}),u.jsx("span",{className:"hidden sm:inline",children:r?"UNMUTE":`${t}%`})]}),u.jsx("button",{type:"button",onClick:()=>P(!0),className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer",title:"Audio Only (Hide Video Frame)",children:u.jsx(dc,{className:"w-3 h-3"})}),u.jsx("button",{type:"button",onClick:()=>f(!d),className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer",title:d?"Collapse to Mini Player":"Expand Video Preview",children:d?u.jsx(Ng,{className:"w-3 h-3"}):u.jsx(dm,{className:"w-3 h-3"})}),u.jsx("button",{type:"button",onClick:()=>{o(!1),f(!1),I("pauseVideo","")},className:"p-1 rounded-md bg-white/10 hover:bg-red-500/80 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer",title:"Stop playback & close",children:u.jsx(rr,{className:"w-3 h-3"})})]})]}),M&&u.jsxs("div",{className:"absolute inset-0 z-30 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center space-y-2 pointer-events-auto",children:[u.jsx(gg,{className:"w-6 h-6 text-amber-400"}),u.jsx("p",{className:"text-xs text-white/95 font-sans leading-relaxed max-w-xs",children:M}),(s==null?void 0:s.url)&&u.jsxs("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold transition-colors shadow-md",children:[u.jsx(OM,{className:"w-3 h-3"}),u.jsx("span",{children:"Open in YouTube"})]})]}),u.jsx("div",{className:"flex-1 w-full bg-black relative min-h-0",children:u.jsx("iframe",{ref:w,id:"global-youtube-audio-iframe",title:"FOR ME Sanctuary Audio Stream",src:D,className:"w-full h-full border-0 absolute inset-0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),u.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 border-t border-white/10 bg-black/60 shrink-0 text-xs",children:[d?u.jsxs("div",{className:"flex items-center gap-1",children:[u.jsx("span",{className:"text-[10px] font-sans text-zinc-400 mr-1",children:"Vol:"}),[25,50,75,100].map($=>u.jsxs("button",{type:"button",onClick:()=>{h($),I("setVolume",[$]),G()},className:`px-1.5 py-0.5 rounded text-[10px] font-mono transition-colors cursor-pointer ${t===$?"bg-red-600 text-white font-bold":"bg-white/10 text-zinc-300 hover:bg-white/20"}`,children:[$,"%"]},$))]}):u.jsxs("div",{className:"flex items-center gap-1",children:[H&&u.jsxs(u.Fragment,{children:[u.jsx("button",{type:"button",onClick:y,className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer",title:"Previous track in playlist",children:u.jsx(bf,{className:"w-3 h-3"})}),u.jsx("button",{type:"button",onClick:m,className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer",title:"Next track in playlist",children:u.jsx(hc,{className:"w-3 h-3"})})]}),u.jsx("span",{className:"text-[10px] font-mono text-zinc-400",children:r?"Muted":`${t}%`})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[d&&H&&u.jsxs(u.Fragment,{children:[u.jsx("button",{type:"button",onClick:y,className:"p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white transition-colors cursor-pointer",title:"Previous track",children:u.jsx(bf,{className:"w-3.5 h-3.5"})}),u.jsx("button",{type:"button",onClick:m,className:"p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white transition-colors cursor-pointer",title:"Next track",children:u.jsx(hc,{className:"w-3.5 h-3.5"})})]}),u.jsx("button",{type:"button",onClick:()=>{g(),G()},className:`px-3 py-1 rounded-lg text-white text-[11px] font-display font-semibold flex items-center gap-1 shadow-sm transition-all cursor-pointer ${e?"bg-red-600 hover:bg-red-500":"bg-emerald-600 hover:bg-emerald-500"}`,children:e?u.jsxs(u.Fragment,{children:[u.jsx(ir,{className:"w-3 h-3 fill-current"}),u.jsx("span",{children:"Pause"})]}):u.jsxs(u.Fragment,{children:[u.jsx($i,{className:"w-3 h-3 fill-current ml-0.5"}),u.jsx("span",{children:"Play"})]})})]})]})]}),V&&z&&u.jsxs("button",{type:"button",onClick:()=>P(!1),className:"fixed bottom-4 right-4 z-40 px-3 py-1.5 rounded-xl cosmic-dock text-xs flex items-center gap-2 border border-white/15 text-white hover:border-violet-400/50 shadow-xl cursor-pointer transition-all animate-fadeIn",title:"Restore Video Frame",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-red-500 animate-pulse"}),u.jsx("span",{className:"font-display text-[11px] font-medium",children:"Show Video"}),u.jsx(dm,{className:"w-3 h-3 text-zinc-400"})]})]})},QM=[{id:"deep-space-obsidian",name:"Deep Space Obsidian",tagline:"Luminous Lavender & Crescent Moon",accent:"#a855f7",gradient:["#060814","#2d1252","#7c3aed","#ede9fe"],settings:{palette:"cosmic-royal",celestialBody:"crescent-moon",celestialPosition:"default",celestialScaleMultiplier:1,rotationSpeed:"standard",waveGeometry:"dunes",speed:"balanced",amplitude:"majestic",waveLayerDensity:"deep",horizonHeight:"balanced",clockFontStyle:"tabular",clockHalo:"pulsar",clockColor:"palette",clockPosition:"center",clockDivider:"colon",showConstellations:!0,showComet:!0,showNebulaDust:!0,starDensity:"balanced",shootingStarMode:"occasional"}},{id:"cyberpunk-neon",name:"Cyberpunk Neon",tagline:"High-Voltage Cyan & Ringed Gas Giant",accent:"#06b6d4",gradient:["#06000e","#3b0764","#06b6d4","#f43f5e"],settings:{palette:"cyberpunk-neon",celestialBody:"ringed-planet",celestialPosition:"upper-right",celestialScaleMultiplier:1.15,rotationSpeed:"fast",waveGeometry:"aurora",speed:"dynamic",amplitude:"dramatic",waveLayerDensity:"dense",horizonHeight:"balanced",clockFontStyle:"mono",clockHalo:"pulsar",clockColor:"cyan",clockPosition:"center",clockDivider:"colon",showCrossStars:!0,showOrbitalTrack:!0,starDensity:"dense",shootingStarMode:"meteor-shower"}},{id:"emerald-borealis",name:"Emerald Borealis",tagline:"Northern Aurora Ribbons & Pulsar Star",accent:"#10b981",gradient:["#010d05","#064e3b","#10b981","#a7f3d0"],settings:{palette:"emerald-aurora",celestialBody:"pulsar-star",celestialPosition:"zenith-center",celestialScaleMultiplier:1.1,rotationSpeed:"fast",waveGeometry:"aurora",speed:"balanced",amplitude:"majestic",waveLayerDensity:"dense",horizonHeight:"balanced",clockFontStyle:"minimal",clockHalo:"pulsar",clockColor:"cyan",clockPosition:"center",clockDivider:"dot",showConstellations:!0,showComet:!0,starDensity:"galaxy",shootingStarMode:"occasional"}},{id:"sunset-dunes",name:"Sunset Dunes",tagline:"Velvet Crimson & Solar Eclipse Corona",accent:"#f43f5e",gradient:["#0a0208","#771146","#e11d48","#f59e0b"],settings:{palette:"supernova-sunset",celestialBody:"eclipse-corona",celestialPosition:"zenith-center",celestialScaleMultiplier:1,rotationSpeed:"standard",waveGeometry:"dunes",speed:"balanced",amplitude:"majestic",waveLayerDensity:"deep",horizonHeight:"balanced",clockFontStyle:"serif",clockHalo:"subtle",clockColor:"gold",clockPosition:"center",clockDivider:"space",showConstellations:!1,showComet:!0,starDensity:"balanced",shootingStarMode:"off"}},{id:"blood-moon-totality",name:"Blood Moon Totality",tagline:"Crimson Eclipse & Ruby Stardust",accent:"#ef4444",gradient:["#0d0202","#450a0a","#b91c1c","#f87171"],settings:{palette:"supernova-sunset",celestialBody:"blood-moon",celestialPosition:"upper-left",celestialScaleMultiplier:1.25,rotationSpeed:"slow",waveGeometry:"mountains",speed:"calm",amplitude:"dramatic",waveLayerDensity:"deep",horizonHeight:"balanced",clockFontStyle:"serif",clockHalo:"pulsar",clockColor:"rose",clockPosition:"center",clockDivider:"colon",showConstellations:!0,showCrossStars:!0,starDensity:"dense",shootingStarMode:"meteor-shower"}},{id:"nord-frost",name:"Nord Frost",tagline:"Sub-Zero Arctic & Crystalline Torus",accent:"#38bdf8",gradient:["#020b14","#0c2e4e","#0284c7","#e0f2fe"],settings:{palette:"celestial-cyan",celestialBody:"crescent-moon",celestialPosition:"upper-right",celestialScaleMultiplier:1.1,rotationSpeed:"standard",waveGeometry:"ocean",speed:"balanced",amplitude:"majestic",waveLayerDensity:"dense",horizonHeight:"low",clockFontStyle:"minimal",clockHalo:"none",clockColor:"white",clockPosition:"center",clockDivider:"colon",showConstellations:!0,showCrossStars:!0,starDensity:"dense",shootingStarMode:"occasional"}},{id:"monochrome-mineral",name:"Monochrome Mineral",tagline:"Architectural Platinum & Deep Void",accent:"#a1a1aa",gradient:["#030306","#181824","#71717a","#ffffff"],settings:{palette:"nocturne-silver",celestialBody:"none",celestialPosition:"default",celestialScaleMultiplier:1,rotationSpeed:"static",waveGeometry:"mountains",speed:"calm",amplitude:"subtle",waveLayerDensity:"airy",horizonHeight:"balanced",clockFontStyle:"tabular",clockHalo:"none",clockColor:"white",clockPosition:"center",clockDivider:"space",showConstellations:!1,showComet:!1,showNebulaDust:!1,starDensity:"sparse",shootingStarMode:"off"}},{id:"pure-pitch-black",name:"Pitch Black Void",tagline:"OLED Zero-Light Battery Sanctuary",accent:"#71717a",gradient:["#000000","#050505","#171717","#e5e5e5"],settings:{palette:"pure-pitch-black",celestialBody:"crescent-moon",celestialPosition:"upper-right",celestialScaleMultiplier:.8,rotationSpeed:"slow",waveGeometry:"dunes",speed:"frozen",amplitude:"subtle",waveLayerDensity:"airy",horizonHeight:"low",clockFontStyle:"tabular",clockHalo:"none",clockColor:"white",clockPosition:"center",clockDivider:"colon",showConstellations:!1,showComet:!1,showNebulaDust:!1,starDensity:"sparse",shootingStarMode:"off"}}],e2=[{id:"cosmic-royal",name:"Cosmic Royal",previewColors:["#060814","#2d1252","#7c3aed","#ede9fe"]},{id:"cyberpunk-neon",name:"Cyber Neon",previewColors:["#06000e","#3b0764","#06b6d4","#f43f5e"]},{id:"emerald-aurora",name:"Emerald Aurora",previewColors:["#010d05","#064e3b","#10b981","#a7f3d0"]},{id:"supernova-sunset",name:"Sunset Supernova",previewColors:["#12050e","#6e133e","#e11d48","#fffbeb"]},{id:"celestial-cyan",name:"Celestial Cyan",previewColors:["#030b14","#0c2e4e","#0284c7","#e0f2fe"]},{id:"solar-gold",name:"Solar Gold",previewColors:["#140d02","#523405","#f59e0b","#fef3c7"]},{id:"nocturne-silver",name:"Nocturne Silver",previewColors:["#050508","#1e1e24","#71717a","#f4f4f5"]},{id:"pure-pitch-black",name:"Pitch Black OLED",previewColors:["#000000","#09090b","#27272a","#fafafa"]}],t2=({isOpen:s,onClose:e})=>{const{wallpaperSettings:t,updateWallpaperSettings:r,appTheme:o,toggleAppTheme:l,setIsEcoSleeping:d}=Nr(),f=o==="light",[g,m]=fe.useState("realms"),[y,_]=fe.useState(String(t.ecoSleepMinutes??7.5)),[h,b]=fe.useState(!1);if(!s)return null;const w=()=>{r({palette:"cosmic-royal",speed:"balanced",amplitude:"majestic",waveGeometry:"dunes",waveLayerDensity:"deep",horizonHeight:"balanced",waveStrokeOpacity:.8,interactiveParallax:!0,celestialBody:"crescent-moon",celestialPosition:"default",celestialScaleMultiplier:1,rotationSpeed:"standard",showNebulaDust:!0,nebulaIntensity:"vivid",showConstellations:!0,showComet:!0,shootingStarMode:"occasional",showStars:!0,starDensity:"balanced",showCrossStars:!1,showOrbitalTrack:!1,showMeridian:!1,clockFontStyle:"tabular",clockSize:"standard",clockPosition:"center",clockDivider:"colon",clockColor:"palette",clockFormat:"12h",showSeconds:!0,showDate:!0,showGreeting:!0,clockHalo:"pulsar"})};return u.jsxs("div",{className:"fixed inset-0 z-50 pointer-events-none select-none",children:[u.jsx("div",{className:"absolute inset-0 bg-black/20 backdrop-blur-[2px] pointer-events-auto transition-opacity",onClick:e,"aria-hidden":"true"}),u.jsxs("aside",{role:"dialog","aria-modal":"true","aria-label":"Wallpaper Studio Inspector",className:`absolute top-8 sm:top-10 bottom-3 sm:bottom-6 right-2 sm:right-6 w-[calc(100%-1rem)] sm:w-[440px] rounded-3xl border shadow-[0_24px_80px_rgba(0,0,0,0.85)] backdrop-blur-3xl flex flex-col z-10 pointer-events-auto transition-all animate-fadeIn overflow-hidden ${f?"bg-white/95 border-zinc-200/90 text-zinc-900":"bg-[#090b16]/95 border-white/[0.12] text-white"}`,children:[u.jsxs("div",{className:`flex items-center justify-between p-4 px-5 border-b shrink-0 ${f?"border-zinc-200/80 bg-white/70":"border-white/[0.08] bg-white/[0.02]"}`,children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:`w-8 h-8 rounded-xl border flex items-center justify-center shadow-sm ${f?"bg-zinc-100 border-zinc-200 text-zinc-800":"bg-white/[0.08] border-white/15 text-zinc-200"}`,children:u.jsx(Hg,{className:"w-3.5 h-3.5"})}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("h2",{className:"text-xs font-display uppercase tracking-widest font-bold",children:"Studio"}),u.jsx("span",{className:`text-[9px] font-mono font-medium px-2 py-0.5 rounded-full border ${f?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-emerald-500/15 text-emerald-300 border-emerald-400/30"}`,children:"Live"})]}),u.jsx("p",{className:`text-[10px] font-sans ${f?"text-zinc-500":"text-zinc-400"}`,children:"Sanctuary customization"})]})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("button",{type:"button",onClick:w,"aria-label":"Reset to default settings",title:"Reset to Defaults",className:`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${f?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.06] hover:bg-white/[0.12] text-zinc-400 hover:text-white"}`,children:u.jsx(Tr,{className:"w-3.5 h-3.5"})}),u.jsx("button",{type:"button",onClick:e,"aria-label":"Close Studio",className:`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${f?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.06] hover:bg-white/[0.12] text-zinc-400 hover:text-white"}`,children:u.jsx(rr,{className:"w-4 h-4"})})]})]}),u.jsx("div",{className:`p-2.5 border-b shrink-0 ${f?"border-zinc-200/90 bg-zinc-50/70":"border-white/[0.06] bg-black/25"}`,children:u.jsx("div",{className:`grid grid-cols-3 gap-1.5 p-1 rounded-2xl ${f?"bg-zinc-200/60":"bg-white/[0.04]"}`,children:[{id:"realms",label:"Realms",desc:"1-Tap Themes",icon:Rs},{id:"cosmos",label:"Cosmos",desc:"Planet & Waves",icon:fc},{id:"timepiece",label:"Timepiece",desc:"Clock Style",icon:_o}].map(M=>{const v=M.icon,S=g===M.id;return u.jsxs("button",{type:"button",onClick:()=>m(M.id),className:`flex items-center justify-center gap-2 py-2 px-2 rounded-xl text-xs font-sans font-medium transition-all cursor-pointer ${S?f?"bg-white text-zinc-950 font-bold shadow-sm":"bg-white text-zinc-950 font-bold shadow-[0_2px_12px_rgba(255,255,255,0.18)]":f?"hover:bg-white/60 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.06] text-zinc-400 hover:text-white"}`,children:[u.jsx(v,{className:"w-3.5 h-3.5 shrink-0"}),u.jsx("span",{children:M.label})]},M.id)})})}),u.jsxs("div",{className:"flex-1 overflow-y-auto p-5 space-y-6",children:[g==="realms"&&u.jsxs("div",{className:"space-y-4 animate-fadeIn",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold ${f?"text-zinc-700":"text-zinc-300"}`,children:"Curated Aesthetic Realms"}),u.jsx("span",{className:`text-[10px] font-mono ${f?"text-zinc-500":"text-zinc-400"}`,children:"Instant Harmony"})]}),u.jsx("div",{className:"grid grid-cols-1 gap-2",children:QM.map(M=>{const v=t.palette===M.settings.palette&&t.celestialBody===M.settings.celestialBody;return u.jsxs("button",{type:"button",onClick:()=>r(M.settings),className:`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between group ${v?f?"bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900 shadow-md":"bg-white/[0.08] border-white/40 shadow-lg":f?"bg-white hover:bg-zinc-50 border-zinc-200/90":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08]"}`,children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"w-10 h-10 rounded-xl border border-white/20 shrink-0 shadow-sm flex items-center justify-center overflow-hidden",style:{background:`linear-gradient(135deg, ${M.gradient.join(", ")})`},children:v&&u.jsx(Cr,{className:"w-4 h-4 text-white drop-shadow-md stroke-[3]"})}),u.jsxs("div",{children:[u.jsx("div",{className:`text-xs font-display font-bold ${v?f?"text-zinc-950 font-bold":"text-white":f?"text-zinc-800":"text-zinc-200"}`,children:M.name}),u.jsx("div",{className:`text-[10px] font-sans ${f?"text-zinc-500":"text-zinc-400"}`,children:M.tagline})]})]}),u.jsx("div",{className:"flex items-center gap-1 shrink-0 pl-2",children:M.gradient.map((S,N)=>u.jsx("div",{className:"w-2.5 h-2.5 rounded-full border border-black/20",style:{backgroundColor:S}},N))})]},M.id)})})]}),g==="cosmos"&&u.jsxs("div",{className:"space-y-5 animate-fadeIn",children:[u.jsxs("div",{className:"space-y-2",children:[u.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${f?"text-zinc-700":"text-zinc-300"}`,children:"3D Celestial Object"}),u.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:[{id:"crescent-moon",label:"Crescent Moon"},{id:"ringed-planet",label:"Saturn Rings"},{id:"blood-moon",label:"Blood Moon"},{id:"pulsar-star",label:"Pulsar Star"},{id:"eclipse-corona",label:"Eclipse Corona"},{id:"none",label:"No Planet (Pure Waves)"}].map(M=>{const v=t.celestialBody===M.id;return u.jsxs("button",{type:"button",onClick:()=>r({celestialBody:M.id}),className:`p-2.5 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer flex items-center justify-between ${v?f?"bg-zinc-900 text-white font-semibold":"bg-white text-zinc-950 font-semibold shadow-sm":f?"bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300"}`,children:[u.jsx("span",{className:"truncate",children:M.label}),v&&u.jsx(Cr,{className:"w-3.5 h-3.5 shrink-0 ml-1"})]},M.id)})})]}),u.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[u.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${f?"text-zinc-700":"text-zinc-300"}`,children:"Atmospheric Palette"}),u.jsx("div",{className:"grid grid-cols-2 gap-2",children:e2.map(M=>{const v=t.palette===M.id;return u.jsxs("button",{type:"button",onClick:()=>r({palette:M.id}),className:`p-2 rounded-xl border text-left transition-all cursor-pointer flex flex-col gap-1.5 ${v?f?"bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900 shadow-sm":"bg-white/[0.08] border-white/40 shadow-sm":f?"bg-white hover:bg-zinc-50 border-zinc-200":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]"}`,children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:`text-[11px] font-semibold ${v?f?"text-zinc-950":"text-white":f?"text-zinc-700":"text-zinc-300"}`,children:M.name}),v&&u.jsx(Cr,{className:"w-3 h-3 text-emerald-400"})]}),u.jsx("div",{className:"flex items-center gap-1",children:M.previewColors.map((S,N)=>u.jsx("span",{className:"w-3 h-3 rounded-full border border-black/20",style:{backgroundColor:S}},N))})]},M.id)})})]}),u.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[u.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${f?"text-zinc-700":"text-zinc-300"}`,children:"Wave Topography"}),u.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{id:"dunes",label:"Cosmic Dunes"},{id:"aurora",label:"Aurora Ribbon"},{id:"mountains",label:"Ridge Peaks"},{id:"ocean",label:"Ocean Swell"}].map(M=>{const v=t.waveGeometry===M.id;return u.jsx("button",{type:"button",onClick:()=>r({waveGeometry:M.id}),className:`p-2.5 rounded-xl border text-center text-xs font-medium transition-all cursor-pointer ${v?f?"bg-zinc-900 text-white font-semibold":"bg-white text-zinc-950 font-semibold shadow-sm":f?"bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300"}`,children:M.label},M.id)})})]}),u.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[u.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${f?"text-zinc-700":"text-zinc-300"}`,children:"Motion Speed"}),u.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:[{id:"calm",label:"Calm Drift"},{id:"balanced",label:"Balanced"},{id:"dynamic",label:"Dynamic"}].map(M=>{const v=t.speed===M.id;return u.jsx("button",{type:"button",onClick:()=>r({speed:M.id}),className:`p-2 rounded-xl border text-center text-xs font-medium transition-all cursor-pointer ${v?f?"bg-zinc-900 text-white font-semibold":"bg-white text-zinc-950 font-semibold shadow-sm":f?"bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300"}`,children:M.label},M.id)})})]}),u.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${f?"text-zinc-700":"text-zinc-300"}`,children:"Battery Saver (Eco Sleep)"}),u.jsx("span",{className:`text-[10px] ${f?"text-zinc-500":"text-zinc-400"}`,children:"0% GPU when idle"})]}),u.jsx("div",{className:"grid grid-cols-4 gap-1.5",children:[{val:7.5,label:"7.5m"},{val:5,label:"5 min"},{val:10,label:"10 min"},{val:0,label:"Off"}].map(M=>{const v=(t.ecoSleepMinutes??7.5)===M.val;return u.jsx("button",{type:"button",onClick:()=>{r({ecoSleepMinutes:M.val}),_(String(M.val))},className:`p-2 rounded-xl border text-center text-xs font-medium transition-all cursor-pointer ${v?f?"bg-zinc-900 text-white font-semibold":"bg-white text-zinc-950 font-semibold shadow-sm":f?"bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300"}`,children:M.label},M.val)})}),u.jsxs("div",{className:"flex items-center gap-2 pt-1",children:[u.jsxs("div",{className:`flex items-center flex-1 px-3 py-1.5 rounded-xl border transition-all ${f?"bg-zinc-50 border-zinc-200":"bg-white/[0.04] border-white/10"}`,children:[u.jsx("span",{className:`text-[11px] font-sans mr-2 shrink-0 ${f?"text-zinc-500":"text-zinc-400"}`,children:"Custom idle:"}),u.jsx("input",{type:"number",min:"0.5",max:"180",step:"0.5",value:y,onChange:M=>_(M.target.value),placeholder:"e.g. 8",className:`w-14 bg-transparent text-xs font-mono font-medium outline-none text-center ${f?"text-zinc-900":"text-white"}`}),u.jsx("span",{className:`text-[11px] font-mono ml-1 ${f?"text-zinc-500":"text-zinc-400"}`,children:"min"})]}),u.jsx("button",{type:"button",onClick:()=>{const M=parseFloat(y);!isNaN(M)&&M>0&&(r({ecoSleepMinutes:M}),b(!0),setTimeout(()=>b(!1),2500))},className:`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${f?"bg-zinc-900 text-white hover:bg-zinc-800 border-zinc-900":"bg-white text-zinc-950 hover:bg-zinc-200 border-white"}`,children:"Set Custom"})]}),h&&u.jsxs("p",{className:"text-[10px] font-mono text-emerald-400 animate-fadeIn font-semibold",children:["✓ Custom sleep timer set to ",t.ecoSleepMinutes," minutes"]}),u.jsx("p",{className:`text-[11px] leading-relaxed ${f?"text-zinc-500":"text-zinc-400"}`,children:"Auto-pauses heavy 3D celestial motion and wave loops after inactivity to eliminate battery drain while preserving the tranquil wallpaper aesthetic."}),u.jsxs("button",{type:"button",onClick:()=>{d(!0),e()},className:`w-full py-2 px-3 rounded-xl border text-xs font-medium transition-all cursor-pointer flex items-center justify-center gap-2 ${f?"bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100":"bg-emerald-950/40 text-emerald-300 border-emerald-500/30 hover:bg-emerald-900/50"}`,children:[u.jsx(GM,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Preview Eco Sleep Mode"})]})]}),u.jsx("div",{className:"pt-2 border-t border-white/[0.06]",children:u.jsxs("button",{type:"button",onClick:l,className:`w-full p-2.5 rounded-xl border text-xs font-medium transition-all cursor-pointer flex items-center justify-center gap-2 ${f?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-white"}`,children:[f?u.jsx(fc,{className:"w-4 h-4 text-zinc-700"}):u.jsx($g,{className:"w-4 h-4 text-amber-300"}),u.jsxs("span",{children:["Switch to ",f?"Obsidian Dark":"Creamy Light"," Theme"]})]})})]}),g==="timepiece"&&u.jsxs("div",{className:"space-y-5 animate-fadeIn",children:[u.jsxs("div",{className:"space-y-2",children:[u.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${f?"text-zinc-700":"text-zinc-300"}`,children:"Clock Typography Face"}),u.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{id:"tabular",label:"Tabular Modern",preview:"12:00"},{id:"serif",label:"Editorial Luxury",preview:"12:00"},{id:"mono",label:"Tech Monospace",preview:"12:00"},{id:"minimal",label:"Minimalist Light",preview:"12:00"}].map(M=>{const v=t.clockFontStyle===M.id;return u.jsxs("button",{type:"button",onClick:()=>r({clockFontStyle:M.id}),className:`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${v?f?"bg-zinc-900 text-white font-semibold":"bg-white text-zinc-950 font-semibold shadow-sm":f?"bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300"}`,children:[u.jsx("span",{className:"text-xs",children:M.label}),v&&u.jsx(Cr,{className:"w-3.5 h-3.5"})]},M.id)})})]}),u.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[u.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${f?"text-zinc-700":"text-zinc-300"}`,children:"Dial Accent Tint"}),u.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{id:"palette",label:"Palette Match",dot:"#a855f7"},{id:"white",label:"Pure White",dot:"#ffffff"},{id:"gold",label:"Stardust Gold",dot:"#fbbf24"},{id:"cyan",label:"Cyber Cyan",dot:"#22d3ee"},{id:"rose",label:"Rose Quartz",dot:"#f43f5e"}].map(M=>{const v=t.clockColor===M.id;return u.jsxs("button",{type:"button",onClick:()=>r({clockColor:M.id}),className:`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${v?f?"bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900":"bg-white/[0.08] border-white/40":f?"bg-white hover:bg-zinc-50 border-zinc-200":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]"}`,children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-3 h-3 rounded-full border border-black/20",style:{backgroundColor:M.dot}}),u.jsx("span",{className:`text-xs ${v?"font-bold":""}`,children:M.label})]}),v&&u.jsx(Cr,{className:"w-3.5 h-3.5 text-emerald-400"})]},M.id)})})]}),u.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[u.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${f?"text-zinc-700":"text-zinc-300"}`,children:"Display Options"}),u.jsxs("div",{className:"space-y-2",children:[u.jsxs("div",{className:`p-3 rounded-xl border flex items-center justify-between ${f?"bg-white border-zinc-200":"bg-white/[0.03] border-white/[0.06]"}`,children:[u.jsxs("div",{children:[u.jsx("div",{className:"text-xs font-semibold",children:"Orbital Seconds Capsule"}),u.jsx("div",{className:`text-[10px] ${f?"text-zinc-500":"text-zinc-400"}`,children:"Show live orbiting seconds gauge"})]}),u.jsx("button",{type:"button",onClick:()=>r({showSeconds:!t.showSeconds}),className:`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${t.showSeconds?"bg-violet-600":f?"bg-zinc-300":"bg-white/20"}`,children:u.jsx("span",{className:`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${t.showSeconds?"left-6":"left-1"}`})})]}),u.jsxs("div",{className:`p-3 rounded-xl border flex items-center justify-between ${f?"bg-white border-zinc-200":"bg-white/[0.03] border-white/[0.06]"}`,children:[u.jsxs("div",{children:[u.jsx("div",{className:"text-xs font-semibold",children:"Breathing Atmospheric Aura"}),u.jsx("div",{className:`text-[10px] ${f?"text-zinc-500":"text-zinc-400"}`,children:"Ambient radial glow behind timepiece"})]}),u.jsx("button",{type:"button",onClick:()=>r({clockHalo:t.clockHalo==="none"?"pulsar":"none"}),className:`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${t.clockHalo!=="none"?"bg-violet-600":f?"bg-zinc-300":"bg-white/20"}`,children:u.jsx("span",{className:`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${t.clockHalo!=="none"?"left-6":"left-1"}`})})]})]})]})]})]})]})]})},ho=({className:s="w-4 h-4"})=>u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:s,"aria-hidden":"true",children:u.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})}),ax=({isPlaying:s,color:e="#a855f7",className:t="w-16 h-5",barCount:r=10})=>{const o=fe.useRef(null);return fe.useEffect(()=>{const l=o.current;if(!l)return;const d=l.getContext("2d");if(!d)return;let f;const g=Er.getAnalyser(),m=g?new Uint8Array(g.frequencyBinCount):null,y=()=>{if(d.clearRect(0,0,l.width,l.height),s&&g&&m){g.getByteFrequencyData(m);const _=l.width,h=l.height,b=2,w=b*(r-1),M=Math.max(2,(_-w)/r);for(let v=0;v<r;v++){const S=Math.min(m.length-1,Math.floor(v*(m.length/r)*.7)),N=m[S]/255,z=Math.max(3,N*(h-2)),P=v*(M+b),U=h-z;d.fillStyle=e,d.beginPath(),d.roundRect(P,U,M,z,1.5),d.fill()}}else{const _=l.width,h=l.height,b=2,w=b*(r-1),M=Math.max(2,(_-w)/r);for(let v=0;v<r;v++){const S=v*(M+b),N=h-2.5;d.fillStyle="rgba(255, 255, 255, 0.2)",d.beginPath(),d.roundRect(S,N,M,2.5,1),d.fill()}}f=requestAnimationFrame(y)};return y(),()=>{cancelAnimationFrame(f)}},[s,e,r]),u.jsx("canvas",{ref:o,width:64,height:20,className:t,"aria-hidden":"true"})},n2=({isOpen:s,onClose:e})=>{const{appTheme:t,audioSource:r,isAudioPlaying:o,activeSoundscapeId:l,audioVolume:d,isAudioMuted:f,playSoundscape:g,stopSoundscape:m,setAudioVolume:y,toggleAudioMute:_,isYouTubePlaying:h,activeYouTubeItem:b,youtubeVolume:w,isYouTubeMuted:M,savedYouTubeItems:v,showYouTubePreview:S,setShowYouTubePreview:N,playYouTubeItem:z,toggleYouTubePlay:P,stopYouTube:U,nextYouTubeTrack:I,prevYouTubeTrack:E,setYouTubeVolume:D,toggleYouTubeMute:K,addYouTubeToLibrary:G,removeYouTubeFromLibrary:V}=Nr(),H=t==="light",[$,B]=fe.useState(r||"youtube"),[ee,he]=fe.useState(""),[X,ie]=fe.useState(""),[O,Q]=fe.useState(null),[k,L]=fe.useState(null),[re,F]=fe.useState(null),[te,ce]=fe.useState(null);if(fe.useEffect(()=>{if(!re){ce(null);return}ce(re*60);const De=setInterval(()=>{ce(je=>je===null||je<=1?(m(),U(),F(null),null):je-1)},1e3);return()=>clearInterval(De)},[re,m,U]),fe.useEffect(()=>{const De=je=>{je.key==="Escape"&&s&&e()};return window.addEventListener("keydown",De),()=>window.removeEventListener("keydown",De)},[s,e]),!s)return null;const ue=xa.find(De=>De.id===l)||xa[0],xe=De=>{const je=Math.floor(De/60),Ke=De%60;return`${je}:${Ke.toString().padStart(2,"0")}`},Ne=De=>{if(De.preventDefault(),Q(null),L(null),!ee.trim()){Q("Please enter a YouTube video or playlist link.");return}const je=G(ee.trim(),X.trim()||void 0);if(!je.success||!je.item){Q(je.error||"Failed to parse YouTube link.");return}z(je.item),he(""),ie(""),L(`Playing: ${je.item.title}`),setTimeout(()=>L(null),4e3)},Qe=$==="youtube"?b?b.title:"No YouTube stream selected":ue.title,Xe=$==="youtube"?h:o;return u.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 backdrop-blur-xl animate-fadeIn select-none ${H?"bg-black/45":"bg-black/85"}`,role:"dialog","aria-modal":"true","aria-labelledby":"audio-modal-title",children:[u.jsx("div",{className:"fixed inset-0",onClick:e,"aria-hidden":"true"}),u.jsxs("div",{className:`relative z-10 w-full max-w-2xl border rounded-3xl shadow-[0_20px_70px_rgba(0,0,0,0.85)] flex flex-col max-h-[90vh] overflow-hidden ${H?"bg-white/95 border-zinc-200 text-zinc-900 shadow-2xl":"bg-[#0b0d1e] border-white/[0.12] text-white shadow-2xl"}`,children:[u.jsxs("div",{className:`flex items-center justify-between px-6 py-4 border-b shrink-0 ${H?"border-zinc-200 bg-zinc-50/80":"border-white/[0.08] bg-white/[0.02]"}`,children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:`w-9 h-9 rounded-2xl border flex items-center justify-center ${H?"bg-rose-50 border-rose-200 text-red-600":"bg-red-500/20 border-red-400/40 text-red-400"}`,children:u.jsx(dc,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsxs("h2",{id:"audio-modal-title",className:`text-sm sm:text-base font-display font-semibold tracking-wide flex items-center gap-2 ${H?"text-zinc-900":"text-white"}`,children:["Focus Audio Sanctuary",u.jsx("span",{className:`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border ${$==="youtube"?H?"bg-red-50 text-red-700 border-red-200":"bg-red-500/15 text-red-300 border-red-500/30":H?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-emerald-500/15 text-emerald-300 border-emerald-500/30"}`,children:$==="youtube"?"YouTube Online • Infinite Audio":"Web Audio • Offline"})]}),u.jsx("p",{className:`text-xs font-sans mt-0.5 ${H?"text-zinc-500":"text-zinc-400"}`,children:$==="youtube"?"Paste any YouTube video or playlist link or choose curated study streams":"Procedurally synthesized ambient soundscapes. Zero network required."})]})]}),u.jsx("button",{type:"button",onClick:e,className:`w-8 h-8 rounded-xl flex items-center justify-center transition-colors cursor-pointer border ${H?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600 border-zinc-200":"bg-white/[0.05] hover:bg-white/[0.12] text-zinc-400 hover:text-white border-white/[0.08]"}`,"aria-label":"Close sound sanctuary",children:u.jsx(rr,{className:"w-4 h-4"})})]}),u.jsxs("div",{className:`flex items-center gap-2 px-6 pt-3 border-b shrink-0 ${H?"border-zinc-200 bg-zinc-50/50":"border-white/[0.06] bg-black/20"}`,children:[u.jsxs("button",{type:"button",onClick:()=>B("youtube"),className:`flex items-center gap-2 px-4 py-2.5 text-xs font-display font-semibold border-b-2 transition-all cursor-pointer ${$==="youtube"?H?"border-red-600 text-red-700":"border-red-500 text-white":H?"border-transparent text-zinc-500 hover:text-zinc-900":"border-transparent text-zinc-400 hover:text-zinc-200"}`,children:[u.jsx(ho,{className:"w-4 h-4 text-red-500"}),u.jsx("span",{children:"YouTube Audio & Playlists"})]}),u.jsxs("button",{type:"button",onClick:()=>B("ambient"),className:`flex items-center gap-2 px-4 py-2.5 text-xs font-display font-semibold border-b-2 transition-all cursor-pointer ${$==="ambient"?H?"border-violet-600 text-violet-700":"border-violet-400 text-white":H?"border-transparent text-zinc-500 hover:text-zinc-900":"border-transparent text-zinc-400 hover:text-zinc-200"}`,children:[u.jsx(fm,{className:"w-4 h-4 text-violet-500"}),u.jsx("span",{children:"Procedural Soundscapes (Offline)"})]})]}),$==="youtube"&&u.jsxs("div",{className:"flex-1 overflow-y-auto p-5 sm:p-6 space-y-5 animate-fadeIn",children:[u.jsxs("form",{onSubmit:Ne,className:"space-y-2",children:[u.jsxs("div",{className:"flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold",children:[u.jsx("span",{className:H?"text-zinc-800":"text-zinc-300",children:"Play YouTube Link or Playlist"}),u.jsx("span",{className:`text-[10px] font-sans font-normal ${H?"text-zinc-500":"text-zinc-400"}`,children:"Supports videos, live streams & playlists"})]}),u.jsxs("div",{className:"flex flex-col sm:flex-row gap-2",children:[u.jsx("input",{type:"text",placeholder:"Paste YouTube link (e.g. https://www.youtube.com/watch?v=... or playlist?list=...)",value:ee,onChange:De=>{he(De.target.value),O&&Q(null)},className:`flex-1 px-3.5 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-2 ${H?"bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:ring-red-500/20 focus:border-red-500":"bg-white/[0.04] border-white/[0.1] text-white placeholder-zinc-500 focus:ring-red-400/30 focus:border-red-400"}`}),u.jsxs("button",{type:"submit",className:"px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-display font-semibold flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer shrink-0",children:[u.jsx(fo,{className:"w-4 h-4"}),u.jsx("span",{children:"Load & Play"})]})]}),O&&u.jsxs("div",{className:"flex items-center gap-2 p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-sans",children:[u.jsx(gg,{className:"w-4 h-4 shrink-0"}),u.jsx("span",{children:O})]}),k&&u.jsxs("div",{className:"flex items-center gap-2 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-sans",children:[u.jsx(Rs,{className:"w-4 h-4 shrink-0"}),u.jsx("span",{children:k})]})]}),b&&u.jsxs("div",{className:`p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${H?"bg-red-50/70 border-red-200 text-zinc-900 shadow-sm":"bg-red-950/20 border-red-500/30 text-white"}`,children:[u.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[u.jsxs("div",{className:"w-12 h-12 rounded-xl overflow-hidden bg-black/40 shrink-0 border border-white/10 relative",children:[u.jsx("img",{src:b.thumbnailUrl||rc[0].thumbnailUrl,alt:"",className:"w-full h-full object-cover"}),h&&u.jsx("div",{className:"absolute inset-0 bg-black/35 flex items-center justify-center",children:u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"})})]}),u.jsxs("div",{className:"min-w-0",children:[u.jsx("div",{className:"flex items-center gap-1.5",children:u.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-red-600 font-bold",children:b.type==="playlist"?"PLAYLIST":"NOW STREAMING"})}),u.jsx("h3",{className:`text-xs sm:text-sm font-display font-semibold truncate ${H?"text-zinc-900":"text-white"}`,children:b.title}),u.jsx("p",{className:`text-[11px] font-sans truncate ${H?"text-zinc-600":"text-zinc-400"}`,children:b.channel||"YouTube"})]})]}),u.jsxs("div",{className:"flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end",children:[b.type==="playlist"&&u.jsxs(u.Fragment,{children:[u.jsx("button",{type:"button",onClick:E,className:`p-2 rounded-xl border transition-colors cursor-pointer ${H?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-white"}`,title:"Previous Track in Playlist",children:u.jsx(bf,{className:"w-3.5 h-3.5"})}),u.jsx("button",{type:"button",onClick:I,className:`p-2 rounded-xl border transition-colors cursor-pointer ${H?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-white"}`,title:"Next Track in Playlist",children:u.jsx(hc,{className:"w-3.5 h-3.5"})})]}),u.jsxs("button",{type:"button",onClick:()=>{try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}},className:"px-2.5 py-1.5 rounded-xl border border-emerald-500/40 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-sans font-bold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer",title:"Force Unmute & Max Volume",children:[u.jsx(wf,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Unmute"})]}),u.jsxs("button",{type:"button",onClick:()=>N(!S),className:`px-3 py-1.5 rounded-xl border text-xs font-sans flex items-center gap-1.5 transition-colors cursor-pointer ${S?"bg-red-600 text-white border-red-600 font-medium":H?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-zinc-300"}`,title:"Toggle Floating Video Preview",children:[u.jsx(ZM,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:S?"Hide Video":"View Video"})]})]})]}),u.jsxs("div",{className:"space-y-2.5",children:[u.jsxs("div",{className:`flex items-center gap-2 text-xs font-display uppercase tracking-wider font-semibold ${H?"text-zinc-800":"text-zinc-300"}`,children:[u.jsx(Rs,{className:"w-3.5 h-3.5 text-amber-500"}),u.jsx("span",{children:"Curated Focus & Lo-Fi Streams"})]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:rc.map(De=>{const je=(b==null?void 0:b.id)===De.id||(b==null?void 0:b.videoId)===De.videoId&&De.videoId,Ke=je&&h;return u.jsxs("button",{type:"button",onClick:()=>{Ke?P():z(De)},className:`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${je?H?"bg-red-50 border-red-500 ring-2 ring-red-500/20 shadow-sm":"bg-red-500/15 border-red-400 shadow-[0_0_20px_rgba(239,68,68,0.2)]":H?"bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90 text-zinc-900":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]"}`,children:[u.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[u.jsx("div",{className:"w-9 h-9 rounded-xl overflow-hidden bg-black/40 shrink-0 border border-white/10",children:u.jsx("img",{src:De.thumbnailUrl,alt:"",onError:xt=>{xt.currentTarget.src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=400&auto=format&fit=crop"},className:"w-full h-full object-cover"})}),u.jsxs("div",{className:"min-w-0",children:[u.jsx("div",{className:`text-xs font-display font-semibold truncate ${je?H?"text-red-950 font-bold":"text-white":H?"text-zinc-900":"text-zinc-200"}`,children:De.title}),u.jsx("div",{className:`text-[10px] font-sans truncate ${H?"text-zinc-500":"text-zinc-400"}`,children:De.channel})]})]}),u.jsx("div",{className:`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${Ke?"bg-red-600 text-white shadow-sm":H?"bg-zinc-200 text-zinc-700":"bg-white/10 text-white"}`,children:Ke?u.jsx(ir,{className:"w-3.5 h-3.5 fill-current"}):u.jsx($i,{className:"w-3.5 h-3.5 ml-0.5 fill-current"})})]},De.id)})})]}),v.filter(De=>!De.isCurated).length>0&&u.jsxs("div",{className:"space-y-2.5",children:[u.jsx("div",{className:`flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold ${H?"text-zinc-800":"text-zinc-300"}`,children:u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(um,{className:"w-3.5 h-3.5 text-red-500"}),u.jsx("span",{children:"My Saved YouTube Library"})]})}),u.jsx("div",{className:"space-y-2",children:v.filter(De=>!De.isCurated).map(De=>{const je=(b==null?void 0:b.id)===De.id,Ke=je&&h;return u.jsxs("div",{className:`p-3 rounded-2xl border flex items-center justify-between gap-3 transition-all ${je?H?"bg-red-50 border-red-500 ring-2 ring-red-500/20":"bg-red-500/15 border-red-400":H?"bg-zinc-50 border-zinc-200":"bg-white/[0.03] border-white/[0.06]"}`,children:[u.jsxs("div",{onClick:()=>z(De),className:"flex items-center gap-3 min-w-0 flex-1 cursor-pointer",children:[u.jsx("div",{className:`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${De.type==="playlist"?"bg-purple-600/20 text-purple-400":"bg-red-600/20 text-red-400"}`,children:De.type==="playlist"?u.jsx(um,{className:"w-4 h-4"}):u.jsx(ho,{className:"w-4 h-4"})}),u.jsxs("div",{className:"min-w-0",children:[u.jsx("div",{className:`text-xs font-display font-semibold truncate ${H?"text-zinc-900":"text-white"}`,children:De.title}),u.jsxs("div",{className:`text-[10px] font-sans truncate ${H?"text-zinc-500":"text-zinc-400"}`,children:[De.type==="playlist"?"Playlist":"Single Stream"," • ",De.url]})]})]}),u.jsxs("div",{className:"flex items-center gap-1.5 shrink-0",children:[u.jsx("button",{type:"button",onClick:()=>{Ke?P():z(De)},className:`p-2 rounded-xl transition-colors cursor-pointer ${Ke?"bg-red-600 text-white":H?"bg-zinc-200 text-zinc-800 hover:bg-zinc-300":"bg-white/10 text-white hover:bg-white/20"}`,children:Ke?u.jsx(ir,{className:"w-3.5 h-3.5 fill-current"}):u.jsx($i,{className:"w-3.5 h-3.5 fill-current"})}),u.jsx("button",{type:"button",onClick:()=>V(De.id),className:`p-2 rounded-xl transition-colors cursor-pointer ${H?"text-zinc-400 hover:text-red-600":"text-zinc-500 hover:text-red-400"}`,title:"Remove from library",children:u.jsx(Ns,{className:"w-3.5 h-3.5"})})]})]},De.id)})})]})]}),$==="ambient"&&u.jsx("div",{className:"flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 animate-fadeIn",children:u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3.5",children:xa.map(De=>{const je=l===De.id,Ke=je&&o;return u.jsxs("div",{onClick:()=>{Ke?m():g(De.id)},className:`relative p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between select-none group ${je?H?"bg-violet-50 border-violet-500 ring-2 ring-violet-500/20 shadow-sm":"bg-violet-950/35 border-violet-500/50 shadow-[0_0_25px_rgba(168,85,247,0.18)]":H?"bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90 text-zinc-900":"bg-white/[0.025] hover:bg-white/[0.05] border-white/[0.08] hover:border-white/[0.18]"}`,children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-2",children:[u.jsx("span",{className:`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md border ${H?"bg-zinc-200/60 text-zinc-700 border-zinc-300":"text-zinc-400 bg-white/[0.05] border-white/[0.06]"}`,children:De.category}),u.jsx("div",{className:`w-7 h-7 rounded-full flex items-center justify-center transition-all ${Ke?"bg-violet-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.6)]":H?"bg-zinc-200 text-zinc-700 group-hover:bg-zinc-300":"bg-white/[0.06] text-zinc-300 group-hover:bg-white/[0.15] group-hover:text-white"}`,children:Ke?u.jsx(ir,{className:"w-3.5 h-3.5 fill-current"}):u.jsx($i,{className:"w-3.5 h-3.5 ml-0.5 fill-current"})})]}),u.jsx("h3",{className:`text-sm font-display font-semibold tracking-wide transition-colors ${H?"text-zinc-900":"text-white"}`,children:De.title}),u.jsx("p",{className:`text-xs font-sans mt-1 leading-snug line-clamp-2 ${H?"text-zinc-600":"text-zinc-400"}`,children:De.tagline})]}),u.jsxs("div",{className:`mt-3 pt-2.5 border-t flex items-center justify-between text-[10px] font-mono ${H?"border-zinc-200 text-zinc-500":"border-white/[0.06] text-zinc-400"}`,children:[u.jsx("span",{className:"truncate pr-2",children:De.frequency}),Ke&&u.jsxs("span",{className:"flex items-center gap-1 text-emerald-500 font-semibold shrink-0",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"}),"PLAYING"]})]})]},De.id)})})}),u.jsxs("div",{className:`px-5 py-3 border-t flex flex-wrap items-center justify-between gap-3 shrink-0 ${H?"border-zinc-200 bg-zinc-50/60":"border-white/[0.06] bg-white/[0.01]"}`,children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(_o,{className:`w-4 h-4 ${H?"text-zinc-600":"text-violet-400"}`}),u.jsx("span",{className:`text-xs font-display font-medium ${H?"text-zinc-800":"text-zinc-300"}`,children:"Auto-Stop Timer:"}),te!==null&&u.jsxs("span",{className:`text-xs font-mono font-bold px-2 py-0.5 rounded-md border ${H?"bg-amber-100 text-amber-900 border-amber-300":"text-amber-300 bg-amber-500/15 border-amber-500/30"}`,children:[xe(te)," left"]})]}),u.jsx("div",{className:"flex items-center gap-1.5",children:[{label:"Off",val:null},{label:"15m",val:15},{label:"25m",val:25},{label:"45m",val:45},{label:"60m",val:60}].map(De=>u.jsx("button",{type:"button",onClick:()=>F(De.val),className:`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${re===De.val?H?"bg-zinc-900 text-white font-bold shadow-sm":"bg-violet-600 text-white font-bold shadow-sm":H?"bg-zinc-200/80 text-zinc-700 hover:bg-zinc-300":"bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08]"}`,children:De.label},De.label))})]}),u.jsxs("div",{className:`p-4 sm:p-5 border-t flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 ${H?"border-zinc-200 bg-zinc-100/90":"border-white/[0.08] bg-[#070914]/90 backdrop-blur-xl"}`,children:[u.jsxs("div",{className:"flex items-center gap-3 w-full sm:w-auto",children:[u.jsx("div",{className:`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${$==="youtube"?H?"bg-red-50 border-red-200 text-red-600":"bg-red-500/20 border-red-400/40 text-red-300":H?"bg-violet-50 border-violet-200 text-violet-700":"bg-violet-600/30 border-violet-400/40 text-violet-200"}`,children:$==="youtube"?u.jsx(ho,{className:`w-5 h-5 ${h?"animate-pulse text-red-500":"text-zinc-400"}`}):u.jsx(fm,{className:`w-5 h-5 ${o?"text-violet-500 animate-pulse":"text-zinc-400"}`})}),u.jsxs("div",{className:"min-w-0 flex-1",children:[u.jsx("p",{className:`text-xs font-display font-medium truncate ${H?"text-zinc-900":"text-white"}`,children:Qe}),u.jsxs("div",{className:"flex items-center gap-2 mt-0.5",children:[u.jsx(ax,{isPlaying:Xe,color:$==="youtube"?"#ef4444":H?"#7c3aed":ue.accentColor,className:"w-16 h-4"}),u.jsx("span",{className:`text-[10px] font-mono ${H?"text-zinc-500":"text-zinc-400"}`,children:Xe?$==="youtube"?"Streaming YouTube...":"Synthesizing...":"Audio Paused"})]})]})]}),u.jsxs("div",{className:"flex items-center gap-4 w-full sm:w-auto justify-end",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("button",{type:"button",onClick:$==="youtube"?K:_,className:`transition-colors cursor-pointer ${H?"text-zinc-600 hover:text-black":"text-zinc-400 hover:text-white"}`,title:"Toggle Mute",children:($==="youtube"?M:f)?u.jsx(rx,{className:"w-4 h-4 text-red-500"}):u.jsx(wf,{className:"w-4 h-4"})}),u.jsx("input",{type:"range",min:"0",max:$==="youtube"?100:1,step:$==="youtube"?1:.01,value:$==="youtube"?M?0:w:f?0:d,onChange:De=>{const je=parseFloat(De.target.value);if($==="youtube"){D(je),M&&K();try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}}else y(je)},className:"w-20 sm:w-24 h-1.5 bg-zinc-300 rounded-lg appearance-none cursor-pointer accent-red-600","aria-label":"Volume slider"}),u.jsx("span",{className:`text-[10px] font-mono w-8 tabular-nums ${H?"text-zinc-600":"text-zinc-400"}`,children:$==="youtube"?`${M?0:Math.round(w)}%`:`${f?0:Math.round(d*100)}%`})]}),u.jsx("button",{type:"button",onClick:()=>{$==="youtube"?P():o?m():g(l)},className:`px-5 py-2.5 rounded-xl text-white text-xs font-display font-semibold tracking-wider uppercase flex items-center gap-2 shadow-md transition-all cursor-pointer ${$==="youtube"?"bg-red-600 hover:bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.35)]":"bg-violet-600 hover:bg-violet-500 shadow-[0_0_20px_rgba(147,51,234,0.35)]"}`,children:Xe?u.jsxs(u.Fragment,{children:[u.jsx(ir,{className:"w-3.5 h-3.5 fill-current"}),u.jsx("span",{children:"Pause"})]}):u.jsxs(u.Fragment,{children:[u.jsx($i,{className:"w-3.5 h-3.5 fill-current"}),u.jsx("span",{children:"Play"})]})})]})]})]})]})},i2=({isOpen:s,onClose:e})=>{const{profile:t,updateProfile:r,appTheme:o,setStudySubject:l,lastActiveDate:d,resetDayProgress:f,factoryReset:g}=Nr(),m=o==="light",[y,_]=fe.useState(t.name||"Azan"),[h,b]=fe.useState(t.motto||"Remember, you are here for you."),[w,M]=fe.useState(t.defaultFocusTopic||"Engineering"),[v,S]=fe.useState(t.defaultFocusMode||"Deep Work"),[N,z]=fe.useState(!1),[P,U]=fe.useState(null);if(fe.useEffect(()=>{_(t.name||"Azan"),b(t.motto||"Remember, you are here for you."),M(t.defaultFocusTopic||"Engineering"),S(t.defaultFocusMode||"Deep Work")},[t,s]),fe.useEffect(()=>{const V=H=>{H.key==="Escape"&&s&&e()};return window.addEventListener("keydown",V),()=>window.removeEventListener("keydown",V)},[s,e]),!s)return null;const I=V=>{V.preventDefault();const H=y.trim()||"Azan",$=h.trim()||"Remember, you are here for you.",B=w.trim()||"Engineering",ee=v.trim()||"Deep Work";r({name:H,motto:$,defaultFocusTopic:B,defaultFocusMode:ee}),l(B),z(!0),setTimeout(()=>{z(!1),e()},500)},E=()=>{_("Azan"),b("Remember, you are here for you."),M("Engineering"),S("Deep Work"),r({name:"Azan",motto:"Remember, you are here for you.",defaultFocusTopic:"Engineering",defaultFocusMode:"Deep Work"}),l("Engineering")},D=()=>{window.confirm("Start a fresh day? This will uncheck today's tasks & habits, reset hydration to 0%, and reset focus timer.")&&(f(),U("Today's progress has been reset!"),setTimeout(()=>U(null),3e3))},K=()=>{window.confirm("WARNING: Are you sure you want to perform a factory reset? All saved tasks, habits, focus history, and settings will be permanently wiped and restored to default.")&&(g(),U("All app data restored to factory defaults."),setTimeout(()=>{U(null),e()},1500))},G=()=>{const V=new Date().getHours();return V>=5&&V<12?"Good morning":V>=12&&V<17?"Good afternoon":V>=17&&V<22?"Good evening":"Late night focus"};return u.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-fadeIn select-none ${m?"bg-black/35":"bg-black/80"}`,children:[u.jsx("div",{className:"fixed inset-0",onClick:e,"aria-hidden":"true"}),u.jsxs("div",{role:"dialog","aria-modal":"true","aria-labelledby":"profile-modal-title",className:`relative w-full max-w-lg overflow-hidden rounded-3xl border shadow-2xl flex flex-col z-10 ${m?"bg-white/95 border-zinc-200 text-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)]":"cosmic-card border-white/[0.14] text-white shadow-2xl"}`,children:[u.jsxs("div",{className:`flex items-center justify-between p-5 pb-3 border-b shrink-0 ${m?"border-zinc-200":"border-white/[0.08]"}`,children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:`w-8 h-8 rounded-xl border flex items-center justify-center ${m?"bg-amber-50 border-amber-200 text-amber-700":"bg-amber-500/20 border-amber-400/30 text-amber-300"}`,children:u.jsx(tx,{className:"w-4 h-4"})}),u.jsxs("div",{children:[u.jsx("h2",{id:"profile-modal-title",className:`text-sm font-display uppercase tracking-widest font-bold ${m?"text-zinc-900":"text-white"}`,children:"Personal Sanctuary Profile"}),u.jsx("p",{className:`text-[11px] font-sans ${m?"text-zinc-500":"text-zinc-400"}`,children:"Tailor your name, daily motto & focus targets"})]})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("button",{type:"button",onClick:E,"aria-label":"Reset profile to defaults",title:"Reset to defaults",className:`p-2 rounded-xl transition-colors cursor-pointer ${m?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white"}`,children:u.jsx(Tr,{className:"w-3.5 h-3.5"})}),u.jsx("button",{type:"button",onClick:e,"aria-label":"Close Profile Modal",className:`p-2 rounded-xl transition-colors cursor-pointer ${m?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white"}`,children:u.jsx(rr,{className:"w-4 h-4"})})]})]}),u.jsxs("form",{onSubmit:I,className:"p-6 space-y-4",children:[u.jsxs("div",{className:`p-4 rounded-2xl border text-center space-y-1 transition-all ${m?"bg-zinc-50 border-zinc-200 text-zinc-800":"bg-white/[0.03] border-white/[0.08] text-zinc-200"}`,children:[u.jsx("span",{className:`text-[10px] font-mono uppercase tracking-widest ${m?"text-zinc-500":"text-zinc-400"}`,children:"Live Greeting Preview"}),u.jsxs("p",{className:"text-xs sm:text-sm font-sans leading-relaxed",children:[G(),","," ",u.jsx("strong",{className:m?"text-zinc-950":"text-white",children:y.trim()||"Azan"}),". •"," ",u.jsxs("span",{className:`italic ${m?"text-zinc-700 font-medium":"text-zinc-300"}`,children:["“",h.trim()||"Remember, you are here for you.","”"]})]})]}),u.jsxs("div",{className:"space-y-1.5",children:[u.jsxs("label",{className:`text-xs font-semibold flex items-center justify-between ${m?"text-zinc-800":"text-zinc-200"}`,children:[u.jsxs("span",{className:"flex items-center gap-1.5",children:[u.jsx(HM,{className:"w-3.5 h-3.5 text-amber-500"}),u.jsx("span",{children:"Your Name"})]}),u.jsx("span",{className:`text-[10px] font-normal ${m?"text-zinc-500":"text-zinc-400"}`,children:"Used in greetings & daily focus"})]}),u.jsx("input",{type:"text",value:y,onChange:V=>_(V.target.value),placeholder:"e.g. Azan",className:"w-full cosmic-input rounded-xl px-3.5 py-2.5 text-xs font-medium"})]}),u.jsxs("div",{className:"space-y-1.5",children:[u.jsxs("label",{className:`text-xs font-semibold flex items-center justify-between ${m?"text-zinc-800":"text-zinc-200"}`,children:[u.jsxs("span",{className:"flex items-center gap-1.5",children:[u.jsx(jM,{className:"w-3.5 h-3.5 text-violet-400"}),u.jsx("span",{children:"Daily Mantra / Motto"})]}),u.jsx("span",{className:`text-[10px] font-normal ${m?"text-zinc-500":"text-zinc-400"}`,children:"Displayed on your wallpaper"})]}),u.jsx("input",{type:"text",value:h,onChange:V=>b(V.target.value),placeholder:"e.g. Remember, you are here for you.",className:"w-full cosmic-input rounded-xl px-3.5 py-2.5 text-xs font-medium"})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-1",children:[u.jsxs("div",{className:"space-y-1.5",children:[u.jsxs("label",{className:`text-xs font-semibold flex items-center gap-1.5 ${m?"text-zinc-800":"text-zinc-200"}`,children:[u.jsx(YM,{className:"w-3.5 h-3.5 text-emerald-400"}),u.jsx("span",{children:"Primary Focus Topic"})]}),u.jsx("input",{type:"text",value:w,onChange:V=>M(V.target.value),placeholder:"e.g. Engineering",className:"w-full cosmic-input rounded-xl px-3.5 py-2 text-xs"})]}),u.jsxs("div",{className:"space-y-1.5",children:[u.jsxs("label",{className:`text-xs font-semibold flex items-center gap-1.5 ${m?"text-zinc-800":"text-zinc-200"}`,children:[u.jsx(Bf,{className:"w-3.5 h-3.5 text-amber-500"}),u.jsx("span",{children:"Default Focus Mode"})]}),u.jsx("input",{type:"text",value:v,onChange:V=>S(V.target.value),placeholder:"e.g. Deep Work",className:"w-full cosmic-input rounded-xl px-3.5 py-2 text-xs"})]})]}),u.jsxs("div",{className:"pt-2",children:[u.jsx("span",{className:`text-[10px] font-mono uppercase tracking-wider block mb-1.5 ${m?"text-zinc-500":"text-zinc-400"}`,children:"Quick Mantras"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:["Remember, you are here for you.","Discipline equals true freedom.","Deep focus over scattered noise.","Build with relentless craft."].map(V=>u.jsxs("button",{type:"button",onClick:()=>b(V),className:`text-[11px] px-2.5 py-1 rounded-lg border transition-all text-left cursor-pointer ${h===V?m?"bg-violet-100 border-violet-300 text-violet-900 font-medium":"bg-violet-600/30 border-violet-400/50 text-violet-200 font-medium":m?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300"}`,children:["“",V,"”"]},V))})]}),u.jsxs("div",{className:`p-3.5 rounded-2xl border space-y-2.5 ${m?"bg-zinc-50 border-zinc-200":"bg-white/[0.02] border-white/[0.08]"}`,children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx(dg,{className:`w-3.5 h-3.5 ${m?"text-violet-700":"text-violet-400"}`}),u.jsx("span",{className:`text-xs font-semibold ${m?"text-zinc-800":"text-zinc-200"}`,children:"Daily Rollover & Data Control"})]}),u.jsxs("span",{className:`text-[10px] font-mono ${m?"text-zinc-500":"text-zinc-400"}`,children:["Date: ",d]})]}),P&&u.jsxs("div",{className:"p-2 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs flex items-center gap-2",children:[u.jsx(Cr,{className:"w-3.5 h-3.5 shrink-0"}),u.jsx("span",{children:P})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1",children:[u.jsxs("button",{type:"button",onClick:D,className:`px-3 py-2 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${m?"bg-white hover:bg-zinc-100 text-zinc-800 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200 border-white/[0.10]"}`,title:"Uncheck today's tasks & habits, reset hydration",children:[u.jsx(Tr,{className:"w-3.5 h-3.5 text-violet-400"}),u.jsx("span",{children:"Start Fresh Day"})]}),u.jsxs("button",{type:"button",onClick:K,className:`px-3 py-2 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${m?"bg-rose-50 hover:bg-rose-100 text-rose-700 border-rose-200":"bg-rose-950/20 hover:bg-rose-900/40 text-rose-300 border-rose-500/20 hover:border-rose-500/40"}`,title:"Wipe data and restore factory defaults",children:[u.jsx(Ns,{className:"w-3.5 h-3.5 text-rose-400"}),u.jsx("span",{children:"Factory Reset"})]})]})]}),u.jsxs("div",{className:"pt-4 flex items-center justify-end gap-2.5",children:[u.jsx("button",{type:"button",onClick:e,className:`px-4 py-2.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${m?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300"}`,children:"Cancel"}),u.jsx("button",{type:"submit",className:`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all cursor-pointer ${N?"bg-emerald-500 text-white":m?"bg-zinc-900 hover:bg-zinc-800 text-white":"bg-violet-600 hover:bg-violet-500 text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]"}`,children:N?u.jsxs(u.Fragment,{children:[u.jsx(Cr,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Saved!"})]}):u.jsxs(u.Fragment,{children:[u.jsx(Rs,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Save Profile"})]})})]})]})]})]})},r2=({isOpen:s,onClose:e})=>{const{studySessions:t,deleteStudySession:r,studySubjects:o,addStudySubject:l,deleteStudySubject:d,dailyStudyTargetHours:f,setDailyStudyTargetHours:g,setStudySubject:m,appTheme:y}=Nr(),_=y==="light",[h,b]=fe.useState("analytics"),[w,M]=fe.useState("7d"),[v,S]=fe.useState("all"),[N,z]=fe.useState(""),[P,U]=fe.useState("#8b5cf6"),[I,E]=fe.useState(!1);fe.useEffect(()=>{const L=re=>{re.key==="Escape"&&s&&e()};return window.addEventListener("keydown",L),()=>window.removeEventListener("keydown",L)},[s,e]);const D=["#8b5cf6","#06b6d4","#10b981","#f59e0b","#f43f5e","#3b82f6","#ec4899","#a855f7"],K=fe.useMemo(()=>new Date().toISOString().slice(0,10),[]),G=L=>{const re=Math.round(L),F=Math.floor(re/60),te=re%60;return F===0?`${te}m`:te===0?`${F}h`:`${F}h ${te}m`},V=fe.useMemo(()=>t.filter(L=>L.timestamp.slice(0,10)===K).reduce((L,re)=>L+re.durationSeconds/60,0),[t,K]),H=f*60,$=Math.min(100,Math.round(V/Math.max(1,H)*100)),B=Math.max(0,H-V),ee=fe.useMemo(()=>{const L=[],re=new Date;for(let F=6;F>=0;F--){const te=new Date(re);te.setDate(te.getDate()-F);const ce=te.toISOString().slice(0,10),ue=te.toLocaleDateString("en-US",{weekday:"short"}),xe=te.toLocaleDateString("en-US",{month:"numeric",day:"numeric"}),Ne=t.filter(Qe=>Qe.timestamp.slice(0,10)===ce).reduce((Qe,Xe)=>Qe+Xe.durationSeconds/60,0);L.push({dateStr:ce,label:xe,dayName:ue,minutes:Ne,isToday:ce===K})}return L},[t,K]),he=fe.useMemo(()=>{const L=[],re=new Date;for(let F=29;F>=0;F--){const te=new Date(re);te.setDate(te.getDate()-F);const ce=te.toISOString().slice(0,10),ue=te.toLocaleDateString("en-US",{month:"numeric",day:"numeric"}),xe=t.filter(Ne=>Ne.timestamp.slice(0,10)===ce).reduce((Ne,Qe)=>Ne+Qe.durationSeconds/60,0);L.push({dateStr:ce,label:ue,minutes:xe,isToday:ce===K})}return L},[t,K]),X=fe.useMemo(()=>(w==="7d"?ee:he).reduce((re,F)=>re+F.minutes,0),[w,ee,he]),ie=fe.useMemo(()=>{let L=0;const re=new Date;let F=new Date(re);t.some(ce=>ce.timestamp.slice(0,10)===K&&ce.durationSeconds>=60)||F.setDate(F.getDate()-1);for(let ce=0;ce<90;ce++){const ue=F.toISOString().slice(0,10);if(t.filter(Ne=>Ne.timestamp.slice(0,10)===ue).reduce((Ne,Qe)=>Ne+Qe.durationSeconds/60,0)>0)L++,F.setDate(F.getDate()-1);else break}return L},[t,K]),O=fe.useMemo(()=>{const L=new Date;L.setDate(L.getDate()-(w==="7d"?7:30));const re=L.toISOString().slice(0,10),F=t.filter(ue=>ue.timestamp.slice(0,10)>=re),te={};F.forEach(ue=>{const xe=ue.subject||"Engineering";te[xe]=(te[xe]||0)+ue.durationSeconds/60});const ce=Object.values(te).reduce((ue,xe)=>ue+xe,0);return Object.entries(te).map(([ue,xe])=>{const Ne=o.find(De=>De.name.toLowerCase()===ue.toLowerCase()),Qe=(Ne==null?void 0:Ne.color)||"#8b5cf6",Xe=ce>0?Math.round(xe/ce*100):0;return{name:ue,minutes:xe,color:Qe,percentage:Xe}}).sort((ue,xe)=>xe.minutes-ue.minutes)},[t,o,w]),Q=fe.useMemo(()=>{let L=[...t];return v!=="all"&&(L=L.filter(re=>(re.subject||"Engineering").toLowerCase()===v.toLowerCase())),L.sort((re,F)=>new Date(F.timestamp).getTime()-new Date(re.timestamp).getTime())},[t,v]),k=L=>{L.preventDefault(),N.trim()&&(l(N.trim(),P),z(""),E(!1))};return s?u.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto backdrop-blur-2xl bg-black/75 animate-fadeIn select-none",role:"dialog","aria-modal":"true","aria-label":"Study & Focus Analytics Dashboard",children:[u.jsx("div",{className:"fixed inset-0",onClick:e}),u.jsxs("div",{className:`relative w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col rounded-3xl border shadow-2xl z-10 transition-all ${_?"bg-white/95 border-zinc-200/90 text-zinc-900 shadow-[0_25px_70px_rgba(0,0,0,0.15)]":"bg-[#0b0d18]/95 border-white/[0.12] text-zinc-100 shadow-[0_30px_90px_rgba(0,0,0,0.9)]"}`,children:[u.jsxs("div",{className:`flex items-center justify-between px-6 py-4 border-b shrink-0 ${_?"border-zinc-200/90 bg-zinc-50/70":"border-white/[0.06] bg-black/25"}`,children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:`w-9 h-9 rounded-2xl flex items-center justify-center border shadow-xs ${_?"bg-violet-100 border-violet-200 text-violet-700":"bg-violet-600/20 border-violet-500/40 text-violet-400"}`,children:u.jsx(Sf,{className:"w-4 h-4"})}),u.jsxs("div",{children:[u.jsx("h2",{className:"text-sm font-sans font-bold tracking-tight",children:"Study & Focus Analytics"}),u.jsx("p",{className:`text-[11px] font-sans ${_?"text-zinc-500":"text-zinc-400"}`,children:"Clear daily follow-through, weekly trajectories, and subject logs"})]})]}),u.jsx("button",{type:"button",onClick:e,"aria-label":"Close Analytics Dashboard",className:`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${_?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.06] hover:bg-white/[0.12] text-zinc-400 hover:text-white"}`,children:u.jsx(rr,{className:"w-4 h-4"})})]}),u.jsxs("div",{className:`px-6 py-2.5 border-b shrink-0 flex items-center justify-between gap-3 ${_?"border-zinc-200/80 bg-zinc-50/40":"border-white/[0.04] bg-white/[0.015]"}`,children:[u.jsx("div",{className:`grid grid-cols-3 gap-1 p-1 rounded-2xl ${_?"bg-zinc-200/60":"bg-white/[0.04]"}`,children:[{id:"analytics",label:"Analytics & Trajectory",icon:KM},{id:"history",label:`Session Ledger (${t.length})`,icon:_o},{id:"subjects",label:`Subjects (${o.length})`,icon:XM}].map(L=>{const re=L.icon,F=h===L.id;return u.jsxs("button",{type:"button",onClick:()=>b(L.id),className:`flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl text-xs font-sans font-medium transition-all cursor-pointer ${F?_?"bg-white text-zinc-950 font-bold shadow-xs":"bg-white text-zinc-950 font-bold shadow-[0_2px_10px_rgba(255,255,255,0.15)]":_?"text-zinc-600 hover:text-zinc-950 hover:bg-white/60":"text-zinc-400 hover:text-white hover:bg-white/[0.06]"}`,children:[u.jsx(re,{className:"w-3.5 h-3.5 shrink-0"}),u.jsx("span",{className:"truncate",children:L.label})]},L.id)})}),h==="analytics"&&u.jsxs("div",{className:`flex items-center gap-1 p-0.5 rounded-xl border ${_?"bg-zinc-100 border-zinc-200":"bg-white/[0.04] border-white/10"}`,children:[u.jsx("button",{type:"button",onClick:()=>M("7d"),className:`px-2.5 py-1 rounded-lg text-[10px] font-mono font-medium transition-all cursor-pointer ${w==="7d"?_?"bg-white text-zinc-900 shadow-xs font-bold":"bg-white/15 text-white font-bold":_?"text-zinc-500 hover:text-zinc-900":"text-zinc-400 hover:text-white"}`,children:"7 Days"}),u.jsx("button",{type:"button",onClick:()=>M("30d"),className:`px-2.5 py-1 rounded-lg text-[10px] font-mono font-medium transition-all cursor-pointer ${w==="30d"?_?"bg-white text-zinc-900 shadow-xs font-bold":"bg-white/15 text-white font-bold":_?"text-zinc-500 hover:text-zinc-900":"text-zinc-400 hover:text-white"}`,children:"30 Days"})]})]}),u.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-6",children:[h==="analytics"&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:`p-5 rounded-3xl border transition-all ${_?"bg-zinc-50/90 border-zinc-200 shadow-xs":"bg-white/[0.03] border-white/[0.08]"}`,children:[u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4",children:[u.jsxs("div",{children:[u.jsx("span",{className:`text-[10px] font-mono uppercase tracking-widest font-semibold block ${_?"text-zinc-500":"text-zinc-400"}`,children:"Today's Study Follow-Through"}),u.jsxs("div",{className:"flex items-baseline gap-2 mt-1",children:[u.jsx("span",{className:"text-3xl font-display font-bold tabular-nums",children:G(V)}),u.jsxs("span",{className:`text-xs font-mono ${_?"text-zinc-500":"text-zinc-400"}`,children:["/ ",f,"h target (",$,"%)"]})]})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs("div",{className:`flex items-center gap-1.5 px-3 py-1.5 rounded-2xl border ${ie>0?_?"bg-amber-50 border-amber-200 text-amber-800":"bg-amber-500/15 border-amber-500/30 text-amber-300":_?"bg-zinc-100 border-zinc-200 text-zinc-600":"bg-white/[0.04] border-white/[0.08] text-zinc-400"}`,children:[u.jsx(Bf,{className:"w-4 h-4 text-amber-400 fill-amber-400"}),u.jsxs("span",{className:"text-xs font-mono font-bold",children:[ie," Day Streak"]})]}),u.jsxs("div",{className:`flex items-center gap-1.5 px-3 py-1.5 rounded-2xl border ${_?"bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.04] border-white/[0.08] text-zinc-300"}`,children:[u.jsx(dg,{className:"w-3.5 h-3.5 text-cyan-400"}),u.jsxs("span",{className:"text-xs font-mono",children:[G(X)," total (",w,")"]})]})]})]}),u.jsx("div",{className:"w-full bg-white/[0.08] h-2.5 rounded-full overflow-hidden p-0.5",children:u.jsx("div",{className:`h-full rounded-full transition-all duration-1000 ${$>=100?"bg-gradient-to-r from-emerald-500 to-emerald-400":"bg-gradient-to-r from-violet-500 to-cyan-400"}`,style:{width:`${$}%`}})}),u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mt-3 pt-3 border-t border-white/[0.06] text-xs",children:[u.jsx("div",{className:"flex items-center gap-1.5",children:$>=100?u.jsxs("span",{className:"text-emerald-400 font-sans font-medium flex items-center gap-1",children:[u.jsx(zM,{className:"w-3.5 h-3.5"}),"Target reached for today! Great dedication."]}):u.jsxs("span",{className:_?"text-zinc-600":"text-zinc-400",children:[G(B)," remaining to hit your daily goal."]})}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:`text-[11px] font-sans ${_?"text-zinc-500":"text-zinc-400"}`,children:"Daily Goal:"}),[2,3,4,5,6].map(L=>u.jsxs("button",{type:"button",onClick:()=>g(L),className:`px-2 py-0.5 rounded-lg text-[10px] font-mono transition-all cursor-pointer ${f===L?_?"bg-zinc-900 text-white font-bold":"bg-white text-zinc-950 font-bold":_?"bg-zinc-200/70 hover:bg-zinc-200 text-zinc-700":"bg-white/[0.06] hover:bg-white/[0.1] text-zinc-300"}`,children:[L,"h"]},L))]})]})]}),u.jsxs("div",{className:`p-5 rounded-3xl border transition-all ${_?"bg-zinc-50/70 border-zinc-200":"bg-white/[0.025] border-white/[0.08]"}`,children:[u.jsx("div",{className:"flex items-center justify-between mb-4",children:u.jsxs("div",{children:[u.jsx("h3",{className:"text-xs font-sans font-bold uppercase tracking-wider",children:w==="7d"?"7-Day Focus Distribution":"30-Day Focus Activity"}),u.jsxs("p",{className:`text-[11px] font-sans mt-0.5 ${_?"text-zinc-500":"text-zinc-400"}`,children:["Visualizing hours invested per day vs. ",f,"h daily target"]})]})}),w==="7d"?u.jsx("div",{className:"grid grid-cols-7 gap-2 pt-6 pb-2 items-end min-h-[160px]",children:ee.map(L=>{const re=Math.max(f*1.4,6),F=L.minutes/60,te=Math.min(100,Math.round(F/re*100)),ce=F>=f;return u.jsxs("div",{className:"flex flex-col items-center gap-2 group",children:[u.jsx("span",{className:`text-[10px] font-mono transition-opacity ${L.minutes>0?_?"text-zinc-700 font-semibold":"text-zinc-300 font-semibold":"opacity-40 text-zinc-500"}`,children:L.minutes>0?G(L.minutes):"—"}),u.jsxs("div",{className:"w-full max-w-[42px] h-28 bg-white/[0.04] rounded-xl flex items-end p-1 overflow-hidden relative",children:[u.jsx("div",{className:"absolute inset-x-0 border-b border-dashed border-white/20 pointer-events-none z-10",style:{bottom:`${Math.round(f/re*100)}%`},title:`Target: ${f}h`}),u.jsx("div",{className:`w-full rounded-lg transition-all duration-700 ${ce?"bg-gradient-to-t from-emerald-500 to-emerald-400":L.minutes>0?"bg-gradient-to-t from-violet-600 to-cyan-400":"bg-transparent"} ${L.isToday?"ring-2 ring-white/50":""}`,style:{height:`${Math.max(L.minutes>0?8:0,te)}%`}})]}),u.jsxs("div",{className:"text-center",children:[u.jsx("span",{className:`text-xs font-sans font-bold block ${L.isToday?"text-violet-400":_?"text-zinc-800":"text-zinc-200"}`,children:L.dayName}),u.jsx("span",{className:`text-[10px] font-mono block ${_?"text-zinc-500":"text-zinc-400"}`,children:L.label})]})]},L.dateStr)})}):u.jsxs("div",{className:"space-y-2 pt-2",children:[u.jsx("div",{className:"grid grid-cols-10 sm:grid-cols-15 gap-1.5 pt-2",children:he.map(L=>{const re=L.minutes/60,F=re>=f,te=re===0?"bg-white/[0.04]":re<1?"bg-violet-600/30":re<2.5?"bg-violet-500/60":F?"bg-emerald-400":"bg-cyan-400";return u.jsxs("div",{title:`${L.dateStr}: ${G(L.minutes)} studied`,className:`h-9 rounded-lg flex flex-col items-center justify-center text-[10px] font-mono cursor-pointer transition-transform hover:scale-105 border ${L.isToday?"border-white/80 ring-1 ring-white/40":"border-transparent"} ${te}`,children:[u.jsx("span",{className:"text-[9px] opacity-70 leading-none",children:L.label.split("/")[1]}),L.minutes>0&&u.jsxs("span",{className:"text-[9px] font-bold leading-none mt-0.5",children:[Math.round(re*10)/10,"h"]})]},L.dateStr)})}),u.jsxs("div",{className:"flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-2",children:[u.jsx("span",{children:"30 days ago"}),u.jsxs("div",{className:"flex items-center gap-1.5 text-[10px]",children:[u.jsx("span",{children:"0h"}),u.jsx("div",{className:"w-2.5 h-2.5 rounded bg-white/[0.04]"}),u.jsx("div",{className:"w-2.5 h-2.5 rounded bg-violet-600/40"}),u.jsx("div",{className:"w-2.5 h-2.5 rounded bg-violet-500/70"}),u.jsx("div",{className:"w-2.5 h-2.5 rounded bg-emerald-400"}),u.jsx("span",{children:"Target hit"})]}),u.jsx("span",{children:"Today"})]})]})]}),u.jsxs("div",{className:`p-5 rounded-3xl border transition-all ${_?"bg-zinc-50/70 border-zinc-200":"bg-white/[0.025] border-white/[0.08]"}`,children:[u.jsxs("div",{className:"flex items-center justify-between mb-3",children:[u.jsxs("div",{children:[u.jsxs("h3",{className:"text-xs font-sans font-bold uppercase tracking-wider",children:["Subject Distribution (",w,")"]}),u.jsx("p",{className:`text-[11px] font-sans ${_?"text-zinc-500":"text-zinc-400"}`,children:"Proportion of time invested across different subjects"})]}),u.jsxs("button",{type:"button",onClick:()=>b("subjects"),className:"text-xs text-violet-400 hover:text-violet-300 font-sans flex items-center gap-1 cursor-pointer",children:["Manage Subjects",u.jsx(kM,{className:"w-3.5 h-3.5"})]})]}),O.length===0?u.jsx("div",{className:"py-6 text-center text-xs text-zinc-500",children:"No focus sessions logged in this timeframe yet. Start a timer or log past study!"}):u.jsxs("div",{className:"space-y-3",children:[u.jsx("div",{className:"w-full h-3 rounded-full overflow-hidden flex bg-white/[0.05]",children:O.map(L=>u.jsx("div",{style:{width:`${L.percentage}%`,backgroundColor:L.color},title:`${L.name}: ${L.percentage}% (${G(L.minutes)})`,className:"h-full transition-all duration-500"},L.name))}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-2",children:O.map(L=>u.jsxs("div",{className:`p-2.5 rounded-2xl border flex items-center justify-between gap-2 ${_?"bg-white border-zinc-200":"bg-white/[0.03] border-white/[0.06]"}`,children:[u.jsxs("div",{className:"flex items-center gap-2 truncate",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{backgroundColor:L.color}}),u.jsx("span",{className:"text-xs font-sans font-medium truncate",children:L.name})]}),u.jsxs("div",{className:"text-right shrink-0",children:[u.jsx("span",{className:"text-xs font-mono font-bold block",children:G(L.minutes)}),u.jsxs("span",{className:"text-[10px] font-mono text-zinc-500",children:[L.percentage,"%"]})]})]},L.name))})]})]})]}),h==="history"&&u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-xs font-sans font-bold uppercase tracking-wider",children:"Focus Session History"}),u.jsx("p",{className:`text-[11px] font-sans ${_?"text-zinc-500":"text-zinc-400"}`,children:"Chronological record of completed stopwatch, pomodoro, and manual logs"})]}),u.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[u.jsx("span",{className:`text-[11px] font-sans ${_?"text-zinc-500":"text-zinc-400"}`,children:"Filter:"}),u.jsx("button",{type:"button",onClick:()=>S("all"),className:`px-2.5 py-1 rounded-xl text-xs font-sans transition-all cursor-pointer ${v==="all"?_?"bg-zinc-900 text-white font-bold":"bg-white text-zinc-950 font-bold":_?"bg-zinc-100 text-zinc-700":"bg-white/[0.05] text-zinc-300"}`,children:"All"}),o.map(L=>u.jsxs("button",{type:"button",onClick:()=>S(L.name),className:`px-2.5 py-1 rounded-xl text-xs font-sans transition-all cursor-pointer flex items-center gap-1.5 ${v.toLowerCase()===L.name.toLowerCase()?_?"bg-zinc-900 text-white font-bold":"bg-white text-zinc-950 font-bold":_?"bg-zinc-100 text-zinc-700":"bg-white/[0.05] text-zinc-300"}`,children:[u.jsx("span",{className:"w-2 h-2 rounded-full",style:{backgroundColor:L.color}}),u.jsx("span",{children:L.name})]},L.id))]})]}),Q.length===0?u.jsxs("div",{className:`p-8 rounded-3xl border text-center ${_?"bg-zinc-50 border-zinc-200 text-zinc-500":"bg-white/[0.02] border-white/10 text-zinc-400"}`,children:[u.jsx(IM,{className:"w-8 h-8 mx-auto mb-2 opacity-50 text-violet-400"}),u.jsx("p",{className:"text-sm font-sans font-medium",children:"No sessions found."}),u.jsx("p",{className:"text-xs mt-1",children:"Start a timer or log past study to record your focus history."})]}):u.jsx("div",{className:"space-y-2",children:Q.map(L=>{const re=new Date(L.timestamp),te=L.timestamp.slice(0,10)===K?"Today":re.toLocaleDateString("en-US",{month:"short",day:"numeric",weekday:"short"}),ce=re.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"}),ue=Math.round(L.durationSeconds/60),xe=o.find(Qe=>Qe.name.toLowerCase()===(L.subject||"").toLowerCase()),Ne=(xe==null?void 0:xe.color)||"#8b5cf6";return u.jsxs("div",{className:`p-3 sm:p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 ${_?"bg-white hover:bg-zinc-50 border-zinc-200/90 shadow-xs":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]"}`,children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("span",{className:"w-3 h-3 rounded-full shrink-0 shadow-xs",style:{backgroundColor:Ne}}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"text-xs font-sans font-bold",children:L.subject||"Engineering"}),u.jsx("span",{className:`text-[10px] font-mono px-2 py-0.5 rounded-full border ${_?"bg-zinc-100 border-zinc-200 text-zinc-600":"bg-white/[0.04] border-white/10 text-zinc-400"}`,children:L.mode||"Stopwatch"})]}),u.jsxs("span",{className:`text-[11px] font-mono ${_?"text-zinc-500":"text-zinc-400"}`,children:[te," at ",ce]})]})]}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsxs("span",{className:"text-sm font-mono font-bold text-violet-400",children:["+",G(ue)]}),u.jsx("button",{type:"button",onClick:()=>r(L.id),className:"p-1.5 rounded-lg text-zinc-500 hover:text-rose-400 transition-colors cursor-pointer",title:"Delete this session record",children:u.jsx(Ns,{className:"w-3.5 h-3.5"})})]})]},L.id)})})]}),h==="subjects"&&u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-xs font-sans font-bold uppercase tracking-wider",children:"Study Subjects & Categories"}),u.jsx("p",{className:`text-[11px] font-sans ${_?"text-zinc-500":"text-zinc-400"}`,children:"Customize the subjects you tag when running focus sprints or logging study"})]}),!I&&u.jsxs("button",{type:"button",onClick:()=>E(!0),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-violet-600 hover:bg-violet-500 text-white cursor-pointer shadow-xs transition-colors",children:[u.jsx(fo,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Add Subject"})]})]}),I&&u.jsxs("form",{onSubmit:k,className:`p-4 rounded-2xl border space-y-3 animate-fadeIn ${_?"bg-zinc-50 border-zinc-200":"bg-white/[0.03] border-white/10"}`,children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:"text-xs font-sans font-bold",children:"New Subject Tag"}),u.jsx("button",{type:"button",onClick:()=>E(!1),className:"text-xs text-zinc-500 hover:text-zinc-300 cursor-pointer",children:"Cancel"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("input",{type:"text",required:!0,placeholder:"e.g. Neuroscience, Physics, Design",value:N,onChange:L=>z(L.target.value),className:`flex-1 px-3 py-2 rounded-xl border text-xs outline-none ${_?"bg-white border-zinc-300 text-zinc-900":"bg-black/50 border-white/15 text-white"}`}),u.jsx("div",{className:"flex items-center gap-1",children:D.map(L=>u.jsx("button",{type:"button",onClick:()=>U(L),style:{backgroundColor:L},className:`w-6 h-6 rounded-full cursor-pointer transition-transform ${P===L?"scale-125 ring-2 ring-white ring-offset-2":"hover:scale-110"}`},L))}),u.jsx("button",{type:"submit",className:"px-4 py-2 rounded-xl text-xs font-bold bg-violet-600 hover:bg-violet-500 text-white cursor-pointer",children:"Save"})]})]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:o.map(L=>u.jsxs("div",{className:`p-3.5 rounded-2xl border flex items-center justify-between transition-all ${_?"bg-white border-zinc-200 shadow-xs":"bg-white/[0.03] border-white/[0.08]"}`,children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("span",{className:"w-3.5 h-3.5 rounded-full",style:{backgroundColor:L.color}}),u.jsx("span",{className:"text-xs font-sans font-bold",children:L.name})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("button",{type:"button",onClick:()=>{m(L.name),e()},className:`px-2.5 py-1 rounded-xl text-[10px] font-sans font-medium border transition-colors cursor-pointer ${_?"bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border-zinc-200":"bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 border-white/10"}`,title:"Set as current active focus subject",children:"Set Active"}),o.length>1&&u.jsx("button",{type:"button",onClick:()=>d(L.id),className:"p-1 text-zinc-500 hover:text-rose-400 cursor-pointer",title:"Delete subject",children:u.jsx(Ns,{className:"w-3.5 h-3.5"})})]})]},L.id))})]})]})]})]}):null},s2=({routines:s,activeBlock:e,activeMinutesLeft:t,onSelectBlock:r,isLight:o=!1})=>{const[l,d]=fe.useState(50),[f,g]=fe.useState("12:00");fe.useEffect(()=>{const y=()=>{const h=new Date,b=h.getHours(),w=h.getMinutes(),M=(b+w/60)/24*100;d(M),g(`${b.toString().padStart(2,"0")}:${w.toString().padStart(2,"0")}`)};y();const _=setInterval(y,1e4);return()=>clearInterval(_)},[]);const m=y=>{if(y<=0)return"Ending soon";const _=Math.floor(y/60),h=y%60;return _===0?`${h}m remaining`:`${_}h ${h}m remaining`};return u.jsxs("div",{className:"w-full flex flex-col gap-2.5 select-none pt-1",children:[u.jsxs("div",{className:"flex items-center justify-between text-[11px] font-sans",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${e?"bg-amber-400":"bg-zinc-500"}`}),u.jsx("span",{className:`font-medium tracking-tight ${o?"text-zinc-900":"text-zinc-200"}`,children:e?e.title:"Free Rhythm"}),e&&t>0&&u.jsxs("span",{className:`text-[10px] font-mono tabular-nums ${o?"text-zinc-500":"text-zinc-400"}`,children:["· ",m(t)]})]}),u.jsx("span",{className:`font-mono text-[10px] tabular-nums tracking-wider ${o?"text-zinc-500":"text-zinc-400"}`,children:f})]}),u.jsxs("div",{className:"relative w-full py-1",children:[u.jsxs("div",{className:`relative h-2 rounded-full overflow-hidden transition-all ${o?"bg-zinc-200":"bg-white/[0.08]"}`,children:[u.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-zinc-700/30 via-amber-500/20 via-sky-500/20 via-indigo-500/20 to-zinc-700/30"}),s.map(y=>{let _=y.startHour,h=y.endHour;if(_===void 0||h===void 0){const v=y.timeRange.split(/[-–—to]/i);_=es(v[0],0),h=es(v[1],24)}const b=(e==null?void 0:e.id)===y.id,w=Math.min(24,Math.max(0,_))/24*100,M=(Math.min(24,Math.max(0,h))-Math.min(24,Math.max(0,_)))/24*100;return u.jsx("div",{onClick:()=>r&&r(y),className:`absolute top-0 bottom-0 transition-opacity cursor-pointer ${b?"bg-amber-400/50 shadow-sm z-10":"bg-white/10 hover:bg-white/20"}`,style:{left:`${w}%`,width:`${Math.max(2,M)}%`,borderLeft:"1px solid rgba(255,255,255,0.15)"},title:`${y.title} (${y.timeRange})`},y.id)})]}),u.jsx("div",{className:"absolute top-0 bottom-0 pointer-events-none transition-all duration-1000 ease-linear flex flex-col items-center justify-center -translate-x-1/2",style:{left:`${Math.min(99,Math.max(1,l))}%`},children:u.jsx("div",{className:"w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] border border-black/40"})})]}),u.jsxs("div",{className:`flex justify-between text-[9px] font-mono tabular-nums px-0.5 ${o?"text-zinc-500":"text-zinc-400"}`,children:[u.jsx("span",{children:"06:00"}),u.jsx("span",{children:"12:00"}),u.jsx("span",{children:"18:00"}),u.jsx("span",{children:"24:00"})]})]})},a2=()=>{const{profile:s,tasks:e,toggleTask:t,addTask:r,deleteTask:o,habits:l,toggleHabit:d,addHabit:f,routines:g,addRoutineBlock:m,deleteRoutineBlock:y,resetRoutines:_,activeRoutineBlock:h,activeRoutineMinutesLeft:b,studySeconds:w,isStudyActive:M,studySubject:v,setStudySubject:S,toggleStudyTimer:N,resetStudyTimer:z,studySessions:P,logManualStudyTime:U,deleteStudySession:I,pomodoroPhase:E,pomodoroSecondsLeft:D,pomodoroTotalSeconds:K,pomodoroSettings:G,setPomodoroSettings:V,startPomodoro:H,togglePomodoro:$,resetPomodoro:B,skipPomodoroPhase:ee,togglePomodoroDisplayMode:he,hydration:X,setHydration:ie,sleepHours:O,setSleep:Q,dailyRating:k,setDailyRating:L,lastActiveDate:re,resetDayProgress:F,isHUDHidden:te,setIsHUDHidden:ce,wallpaperSettings:ue,audioSource:xe,isAudioPlaying:Ne,activeSoundscapeId:Qe,playSoundscape:Xe,stopSoundscape:De,isYouTubePlaying:je,activeYouTubeItem:Ke,toggleYouTubePlay:xt,appTheme:wt,toggleAppTheme:yt,isEcoSleeping:gt,setIsEcoSleeping:Pt,studySubjects:Mt}=Nr(),ge=wt==="light",[Dt,sn]=fe.useState(!1),[Z,Gt]=fe.useState(!1),[Lt,It]=fe.useState(!1),[Ie,Nt]=fe.useState(!1),[at,dt]=fe.useState(!1),[R,T]=fe.useState("none"),[ae,Le]=fe.useState("pomodoro"),[Ee,ze]=fe.useState("12"),[Ue,we]=fe.useState("00"),[Me,Oe]=fe.useState("00"),[W,Ce]=fe.useState(0),[Se,Ae]=fe.useState("PM"),[_e,Te]=fe.useState(""),[Ge,rt]=fe.useState(322),[Pe,Ze]=fe.useState(80),ct=`${Ee}:${Ue}:${Me}`,[Be,bt]=fe.useState(""),[jt,an]=fe.useState(s.defaultFocusTopic||"Engineering"),[dn,fn]=fe.useState(s.defaultFocusMode||"Deep Work"),[Qt,Nn]=fe.useState("60"),[tn,ln]=fe.useState(""),St=le=>{U(le,jt||v||"Engineering",dn||"Manual Entry");const mt=le>=60?`${(le/60).toFixed(1)}h`:`${le}m`;ln(`+${mt} recorded to ${jt||v}!`),setTimeout(()=>ln(""),3e3)},Ht=le=>{le.preventDefault();const mt=parseFloat(Qt);!isNaN(mt)&&mt>0&&(St(mt),Nn(""))},[zt,nn]=fe.useState(!1),[rn,Qn]=fe.useState(""),[Pn,_i]=fe.useState(""),[qt,Pi]=fe.useState(""),[li,Di]=fe.useState(!1),[yi,Pr]=fe.useState("30"),[A,Y]=fe.useState("5"),se=E==="focus"||E==="break"||E==="paused",de=Math.floor(D/60),oe=D%60,Ve=de.toString().padStart(2,"0"),et=oe.toString().padStart(2,"0"),We=K>0?1-D/K:0,qe=se?We*360:W*360,nt=se&&G.displayMode==="numbers",q=nt?Ve:Ee,Re=nt?et:Ue,pe=()=>{const le=new Date().getHours();return le>=5&&le<12?"Good morning":le>=12&&le<17?"Good afternoon":le>=17&&le<22?"Good evening":"Late night focus"};fe.useEffect(()=>{const le=()=>{const Xt=new Date,ui=Xt.getHours(),Dr=Xt.getMinutes(),Li=Xt.getSeconds(),vc=ui>=12?"PM":"AM",Ca=ue.clockFormat==="24h",os=Ca?ui.toString().padStart(2,"0"):(ui%12||12).toString().padStart(2,"0"),_c=Dr.toString().padStart(2,"0"),To=Li.toString().padStart(2,"0");ze(os),we(_c),Oe(To),Ce(Li/60),Ae(Ca?"":vc);const Is=new Date(Xt.getFullYear(),0,0),Co=Xt.getTime()-Is.getTime(),yc=1e3*60*60*24,ls=Math.floor(Co/yc);rt(ls);const cs=Math.round((ui*60+Dr)/1440*100);Ze(cs);const Lr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ks=["January","February","March","April","May","June","July","August","September","October","November","December"];Te(`${Lr[Xt.getDay()]}, ${ks[Xt.getMonth()]} ${Xt.getDate()}, ${Xt.getFullYear()}`)};le();const mt=setInterval(le,1e3);return()=>clearInterval(mt)},[ue.clockFormat,ue.showSeconds,ue.clockDivider]);const Ye=ue.clockFontStyle==="serif"?"font-serif font-bold tracking-tight":ue.clockFontStyle==="mono"?"font-mono font-bold tracking-tight":ue.clockFontStyle==="minimal"?"font-sans font-light tracking-[0.06em]":"font-display font-extrabold tracking-tight",ht=ue.clockSize==="compact"?"text-6xl sm:text-7xl md:text-8xl lg:text-[110px]":ue.clockSize==="heroic"?"text-7xl sm:text-9xl md:text-[11rem] lg:text-[160px]":"text-7xl sm:text-8xl md:text-9xl lg:text-[136px]",pt=ue.clockHalo==="none"?"opacity-0":ue.clockHalo==="subtle"?"bg-[radial-gradient(circle,rgba(139,92,246,0.14)_0%,rgba(139,92,246,0.03)_50%,transparent_70%)]":"bg-[radial-gradient(circle,rgba(139,92,246,0.22)_0%,rgba(139,92,246,0.06)_50%,transparent_75%)]",Tt=ue.clockColor==="white"?ge?"text-zinc-950 [text-shadow:0_2px_12px_rgba(0,0,0,0.1)]":"text-white [text-shadow:0_8px_32px_rgba(0,0,0,0.85)]":ue.clockColor==="gold"?"text-amber-300 [text-shadow:0_4px_24px_rgba(245,158,11,0.5)]":ue.clockColor==="cyan"?"text-cyan-300 [text-shadow:0_4px_24px_rgba(6,182,212,0.5)]":ue.clockColor==="rose"?"text-rose-300 [text-shadow:0_4px_24px_rgba(244,63,94,0.5)]":ge?"text-zinc-900 [text-shadow:0_2px_12px_rgba(200,180,160,0.25)]":"text-white [text-shadow:0_8px_32px_rgba(0,0,0,0.85)]",Ut=ue.clockPosition==="zenith"?"mt-6 sm:mt-12 mb-auto":ue.clockPosition==="bottom"?"mt-auto mb-16 sm:mb-20":"my-auto";fe.useEffect(()=>{const le=mt=>{mt.key==="Escape"&&(R!=="none"?T("none"):te?ce(!1):Ie&&Nt(!1))};return window.addEventListener("keydown",le),()=>window.removeEventListener("keydown",le)},[R,te,Ie,ce]);const tt=le=>{le.preventDefault(),Be.trim()&&(r(Be.trim()),bt(""))},Kt=e.filter(le=>le.completed).length,it=e.length>0?Math.round(Kt/e.length*100):0,qn=l.filter(le=>le.completed).length,yn=l.length>0?Math.round(qn/l.length*100):0,Si=new Date;Si.setDate(Si.getDate()-7);const ci=+((P||[]).filter(le=>new Date(le.timestamp)>=Si).reduce((le,mt)=>le+mt.durationSeconds,0)/3600).toFixed(1),Ft=Math.min(100,Math.round(ci/15*100)),hn=le=>{const mt=Math.floor(le/60),Xt=le%60;return`${mt.toString().padStart(2,"0")}:${Xt.toString().padStart(2,"0")}`},En=xa.find(le=>le.id===Qe)||xa[0];return u.jsxs("div",{className:"relative w-screen h-screen max-h-screen overflow-hidden flex flex-col justify-between pt-safe-top pt-8 sm:pt-10 px-4 sm:px-8 pb-safe-bottom pb-6 select-none z-10 animate-fadeIn",children:[u.jsx("h1",{className:"sr-only",children:"FOR ME — Living Wallpaper & Focus Sanctuary"}),u.jsxs("header",{className:`relative flex items-center justify-between w-full min-h-12 shrink-0 z-20 gap-3 transition-opacity duration-700 ${te||gt?"opacity-0 pointer-events-none":"opacity-100"}`,children:[u.jsxs("button",{type:"button",onClick:()=>ce(!0),className:"flex items-center gap-2.5 cursor-pointer group shrink-0 text-left",title:"Enter Zen Wallpaper Mode",children:[u.jsx("div",{className:`w-8 h-8 rounded-full border flex items-center justify-center text-[11px] font-mono font-medium tracking-tight shadow-sm transition-all ${ge?"border-zinc-300/80 bg-white/80 text-zinc-900 group-hover:bg-white group-hover:border-zinc-400":"border-white/15 bg-white/[0.04] text-zinc-200 group-hover:bg-white/[0.1] group-hover:border-white/30"}`,children:"FM"}),u.jsx("span",{className:`font-sans font-bold text-[11px] tracking-[0.22em] uppercase group-hover:opacity-85 transition-opacity ${ge?"text-zinc-900":"text-zinc-200"}`,children:"FOR ME"})]}),u.jsx("div",{className:"hidden md:flex absolute left-1/2 -translate-x-1/2 items-center pointer-events-none",children:u.jsxs("div",{className:`pointer-events-auto flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-2xl border text-[11px] font-sans font-medium shadow-sm transition-all ${ge?"bg-white/85 border-zinc-200/90 text-zinc-700":"bg-[#090b16]/75 border-white/[0.08] text-zinc-300"}`,children:[u.jsx(Rs,{className:"w-3 h-3 text-amber-400"}),u.jsx("span",{children:_e}),h&&u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"opacity-25",children:"•"}),u.jsxs("button",{type:"button",onClick:()=>Nt(!0),className:"hover:underline flex items-center gap-1 font-mono text-[10px] text-violet-400 cursor-pointer",title:"Open Daily Routine Protocols & 24h Timeline",children:[u.jsx($M,{className:"w-3 h-3 text-amber-400"}),u.jsx("span",{children:h.title})]})]})]})}),u.jsxs("nav",{"aria-label":"Wallpaper Quick Controls",className:`flex items-center gap-0.5 p-1 rounded-full backdrop-blur-2xl border transition-all ${ge?"bg-white/90 border-zinc-200/90 text-zinc-700 shadow-[0_8px_24px_rgba(0,0,0,0.06)]":"bg-[#090b16]/75 border-white/[0.12] text-zinc-300 shadow-[0_12px_32px_rgba(0,0,0,0.6)]"}`,children:[u.jsx("button",{type:"button",onClick:()=>sn(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${ge?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Wallpaper Studio (Celestial Objects, Waves & Lighting)","aria-label":"Wallpaper Studio",children:u.jsx(Hg,{className:"w-3.5 h-3.5"})}),u.jsx("button",{type:"button",onClick:()=>Nt(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${ge?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Daily Routine Protocols","aria-label":"Daily Routine Protocols",children:u.jsx(cm,{className:"w-3.5 h-3.5"})}),u.jsx("button",{type:"button",onClick:()=>dt(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${ge?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Study & Focus Analytics Dashboard (7-Day & 30-Day Trajectories)","aria-label":"Study & Focus Analytics Dashboard",children:u.jsx(Sf,{className:"w-3.5 h-3.5 text-violet-400"})}),u.jsxs("button",{type:"button",onClick:()=>Gt(!0),className:`relative w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${Ne||je?ge?"text-violet-600 bg-violet-50":"text-violet-300 bg-violet-600/20":ge?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Focus Audio Sanctuary (YouTube Streams & Ambient Soundscapes)","aria-label":"Focus Audio Sanctuary",children:[xe==="youtube"&&je?u.jsx(ho,{className:"w-3.5 h-3.5 text-red-500 animate-pulse"}):u.jsx(dc,{className:`w-3.5 h-3.5 ${Ne||je?"animate-pulse":""}`}),(Ne||je)&&u.jsx("span",{className:"absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse"})]}),u.jsx("button",{type:"button",onClick:()=>It(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${ge?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:`Profile & Motto (${s.name})`,"aria-label":"Profile and Daily Mantra",children:u.jsx(tx,{className:"w-3.5 h-3.5"})}),u.jsx("div",{className:`w-px h-3.5 mx-0.5 ${ge?"bg-zinc-200":"bg-white/10"}`}),u.jsx("button",{type:"button",onClick:yt,className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${ge?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:`Switch to ${ge?"Obsidian Dark":"Creamy Light"} Theme`,"aria-label":"Toggle Light/Dark Theme",children:ge?u.jsx(fc,{className:"w-3.5 h-3.5"}):u.jsx($g,{className:"w-3.5 h-3.5"})}),u.jsx("button",{type:"button",onClick:()=>ce(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${ge?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Zen Mode (Hide all controls)","aria-label":"Enter Zen Mode",children:u.jsx(BM,{className:"w-3.5 h-3.5"})})]})]}),u.jsxs("main",{"aria-label":`Current time ${ct}`,className:`${Ut} text-center flex flex-col items-center justify-center relative z-20 py-4 select-none transition-all duration-300`,children:[u.jsx("div",{className:`absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[780px] lg:h-[780px] rounded-full ${pt} pointer-events-none -z-10`}),u.jsxs("div",{className:"relative flex flex-col items-center group",children:[u.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none -z-10",children:u.jsxs("div",{className:`relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] md:w-[640px] md:h-[640px] rounded-full border border-dashed transition-all ${ge?"border-zinc-300/70":"border-white/[0.08]"}`,children:[u.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-violet-400 shadow-[0_0_12px_rgba(168,85,247,0.9)]"}),u.jsx("div",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-white/40"}),u.jsx("div",{className:"absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-white/40"}),u.jsx("div",{className:"absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-white/40"}),u.jsx("div",{className:"absolute inset-0 transition-transform duration-1000 ease-linear pointer-events-none",style:{transform:`rotate(${qe}deg)`},children:u.jsxs("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center",children:[u.jsx("div",{className:`w-3.5 h-3.5 rounded-full animate-ping opacity-75 ${se?E==="break"?"bg-cyan-400":"bg-violet-400":ue.clockColor==="gold"?"bg-amber-400":ue.clockColor==="cyan"?"bg-cyan-400":ue.clockColor==="rose"?"bg-rose-400":"bg-violet-400"}`}),u.jsx("div",{className:`absolute w-3 h-3 rounded-full shadow-lg ${se?E==="break"?"bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,1)]":"bg-violet-300 shadow-[0_0_20px_rgba(168,85,247,1)]":ue.clockColor==="gold"?"bg-amber-300 shadow-[0_0_20px_rgba(251,191,36,1)]":ue.clockColor==="cyan"?"bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,1)]":ue.clockColor==="rose"?"bg-rose-300 shadow-[0_0_20px_rgba(244,63,94,1)]":"bg-violet-300 shadow-[0_0_20px_rgba(168,85,247,1)]"}`})]})}),u.jsx("div",{className:`absolute inset-8 sm:inset-12 md:inset-16 rounded-full border transition-all ${ge?"border-zinc-200/50":"border-white/[0.04]"}`})]})}),se?u.jsxs("button",{type:"button",onClick:he,className:`flex items-center gap-2 sm:gap-2.5 mb-2 sm:mb-3 px-4 py-1.5 rounded-full border backdrop-blur-2xl text-[10px] sm:text-[11px] font-mono tracking-widest uppercase transition-all shadow-md cursor-pointer group ${E==="break"?ge?"bg-cyan-50/90 border-cyan-200 text-cyan-900 shadow-sm":"bg-cyan-950/60 border-cyan-500/40 text-cyan-300 shadow-[0_4px_24px_rgba(6,182,212,0.3)]":ge?"bg-violet-50/90 border-violet-200 text-violet-900 shadow-sm":"bg-[#090b16]/85 border-violet-500/40 text-violet-300 shadow-[0_4px_24px_rgba(139,92,246,0.35)]"}`,title:"Click to toggle countdown digits vs wall clock digits",children:[u.jsxs("span",{className:"flex items-center gap-1.5 font-bold",children:[u.jsxs("span",{className:"relative flex h-2 w-2",children:[u.jsx("span",{className:`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${E==="break"?"bg-cyan-400":"bg-violet-400"}`}),u.jsx("span",{className:`relative inline-flex rounded-full h-2 w-2 ${E==="break"?"bg-cyan-500":"bg-violet-500"}`})]}),E==="break"?"RECOVERY BREAK":"FOCUS SPRINT"]}),u.jsx("span",{className:"opacity-25",children:"•"}),u.jsxs("span",{className:"tabular-nums font-bold",children:[Ve,":",et," REMAINING"]}),u.jsx("span",{className:"opacity-25 hidden sm:inline",children:"•"}),u.jsx("span",{className:"hidden sm:inline opacity-80 uppercase",children:v}),u.jsx("span",{className:"opacity-25 hidden md:inline",children:"•"}),u.jsx("span",{className:"hidden md:inline text-[9px] opacity-60 group-hover:text-amber-400 transition-colors",children:nt?"SHOW CLOCK":"SHOW COUNTDOWN"})]}):u.jsxs("div",{className:`flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3 px-4 py-1 rounded-full border backdrop-blur-2xl text-[10px] sm:text-[11px] font-mono tracking-widest uppercase transition-all shadow-md ${ge?"bg-white/80 border-zinc-200 text-zinc-700":"bg-[#090b16]/75 border-white/[0.12] text-zinc-300 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"}`,children:[u.jsxs("span",{className:"flex items-center gap-1.5 text-emerald-400 font-semibold",children:[u.jsxs("span",{className:"relative flex h-2 w-2",children:[u.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),u.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-emerald-500"})]}),"EPHEMERIS"]}),u.jsx("span",{className:"opacity-25",children:"•"}),u.jsxs("span",{className:"tabular-nums",children:["DAY ",Ge]}),u.jsx("span",{className:"opacity-25",children:"•"}),u.jsxs("span",{className:"tabular-nums text-violet-400 font-semibold",children:[Pe,"% SOLAR"]}),u.jsx("span",{className:"opacity-25 hidden sm:inline",children:"•"}),u.jsx("span",{className:"hidden sm:inline opacity-70",children:"AZAN ZENITH"})]}),u.jsxs("div",{onClick:se?he:void 0,className:`inline-flex items-center justify-center max-w-[95vw] px-2 select-none leading-none flex-nowrap transition-all ${se?"cursor-pointer":""} ${Ye} ${Tt}`,title:se?"Click to toggle countdown / real time digits":void 0,children:[u.jsx("span",{className:`${ht} tracking-tight tabular-nums transition-all ${ge?"text-zinc-950 font-bold":"bg-gradient-to-b from-white via-white/95 to-zinc-400/90 bg-clip-text text-transparent font-bold"}`,children:q}),u.jsx("span",{className:`inline-flex items-center justify-center px-1.5 sm:px-3 text-3xl sm:text-5xl md:text-6xl lg:text-7xl select-none transition-colors ${se?E==="break"?"text-cyan-400":"text-violet-400":ue.clockColor==="gold"?"text-amber-400":ue.clockColor==="cyan"?"text-cyan-400":ue.clockColor==="rose"?"text-rose-400":ge?"text-zinc-600":"text-violet-400"}`,children:ue.clockDivider==="dot"?"·":ue.clockDivider==="space"?" ":":"}),u.jsx("span",{className:`${ht} tracking-tight tabular-nums transition-all ${ge?"text-zinc-950 font-bold":"bg-gradient-to-b from-white via-white/95 to-zinc-400/90 bg-clip-text text-transparent font-bold"}`,children:Re}),u.jsxs("div",{className:"flex flex-col items-center justify-center ml-3 sm:ml-5 md:ml-7 gap-2 self-center",children:[se?u.jsxs("button",{type:"button",onClick:le=>{le.stopPropagation(),$()},className:`relative flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl border backdrop-blur-3xl transition-all shadow-2xl cursor-pointer group/pod ${ge?"bg-white/95 border-violet-200 text-zinc-950 shadow-md hover:border-violet-400":"bg-[#090b16]/95 border-violet-500/30 text-white shadow-[0_12px_40px_rgba(0,0,0,0.8)] hover:border-violet-400/60"}`,title:E==="paused"?"Resume focus":"Pause focus (Tap to toggle)",children:[u.jsxs("svg",{className:"absolute inset-1.5 w-[calc(100%-12px)] h-[calc(100%-12px)] -rotate-90 pointer-events-none",viewBox:"0 0 36 36",children:[u.jsx("circle",{cx:"18",cy:"18",r:"15",stroke:"currentColor",strokeWidth:"2.5",className:"opacity-15",fill:"none"}),u.jsx("circle",{cx:"18",cy:"18",r:"15",stroke:"currentColor",strokeWidth:"2.8",className:`transition-all duration-300 ${E==="break"?"text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]":"text-violet-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]"}`,strokeDasharray:"94.25",strokeDashoffset:94.25*(1-We),strokeLinecap:"round",fill:"none"})]}),u.jsx("span",{className:"font-mono text-xs sm:text-sm md:text-base font-extrabold tabular-nums tracking-wider leading-none z-10 drop-shadow-sm",children:nt?`${Ee}:${Ue}`:`${Ve}:${et}`}),u.jsx("span",{className:`text-[7px] sm:text-[8px] font-mono tracking-widest uppercase mt-1 z-10 font-bold ${E==="paused"?"text-amber-400":E==="break"?"text-cyan-400":"text-violet-400"}`,children:E==="paused"?"PAUSED":nt?"CLOCK":E==="break"?"BREAK":"FOCUS"})]}):ue.showSeconds&&u.jsxs("div",{className:`relative flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl border backdrop-blur-3xl transition-all shadow-2xl ${ge?"bg-white/95 border-zinc-300 text-zinc-950 shadow-md":"bg-[#090b16]/90 border-white/20 text-white shadow-[0_12px_40px_rgba(0,0,0,0.8)]"}`,children:[u.jsxs("svg",{className:"absolute inset-1.5 w-[calc(100%-12px)] h-[calc(100%-12px)] -rotate-90 pointer-events-none",viewBox:"0 0 36 36",children:[u.jsx("circle",{cx:"18",cy:"18",r:"15",stroke:"currentColor",strokeWidth:"2.5",className:"opacity-15",fill:"none"}),u.jsx("circle",{cx:"18",cy:"18",r:"15",stroke:"currentColor",strokeWidth:"2.8",className:`transition-all duration-300 ${ue.clockColor==="gold"?"text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]":ue.clockColor==="cyan"?"text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]":ue.clockColor==="rose"?"text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.9)]":"text-violet-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]"}`,strokeDasharray:"94.25",strokeDashoffset:94.25*(1-W),strokeLinecap:"round",fill:"none"})]}),u.jsx("span",{className:"font-mono text-base sm:text-xl md:text-2xl font-extrabold tabular-nums tracking-wider leading-none z-10 drop-shadow-sm",children:Me}),u.jsx("span",{className:"text-[7px] sm:text-[8px] font-mono tracking-widest uppercase opacity-60 mt-1 z-10 font-bold",children:"SEC"})]}),se?u.jsxs("div",{className:"flex items-center gap-1 z-10",children:[u.jsx("button",{type:"button",onClick:le=>{le.stopPropagation(),ee()},className:`text-[9px] font-mono px-2 py-0.5 rounded-lg border backdrop-blur-xl transition-all cursor-pointer ${ge?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/10 hover:bg-white/20 border-white/15 text-zinc-300"}`,title:"Skip to next phase",children:"SKIP"}),u.jsx("button",{type:"button",onClick:le=>{le.stopPropagation(),B()},className:`text-[9px] font-mono px-2 py-0.5 rounded-lg border backdrop-blur-xl transition-all cursor-pointer ${ge?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/10 hover:bg-white/20 border-white/15 text-zinc-300"}`,title:"Reset Pomodoro",children:"RESET"})]}):Se?u.jsx("span",{className:`text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase px-3 py-1 rounded-xl border backdrop-blur-2xl transition-all ${ge?"bg-zinc-100 border-zinc-200 text-zinc-800 shadow-sm":"bg-white/[0.08] border-white/15 text-zinc-200 shadow-md"}`,children:Se}):null]})]})]}),ue.showGreeting!==!1&&u.jsx("div",{className:"mt-7 sm:mt-9 flex justify-center w-full px-3",children:u.jsx("button",{type:"button",onClick:()=>It(!0),className:`group relative text-xs sm:text-sm font-sans tracking-wide px-6 sm:px-8 py-3 rounded-2xl sm:rounded-full backdrop-blur-3xl max-w-xl text-center leading-relaxed shadow-xl cursor-pointer transition-all hover:scale-[1.01] border ${ge?"bg-white/95 text-zinc-900 border-zinc-300/90 shadow-md hover:bg-white hover:border-zinc-400":"bg-[#0a0618]/90 text-zinc-200 border-white/[0.18] shadow-[0_16px_50px_rgba(0,0,0,0.7)] hover:border-violet-400/50 hover:shadow-[0_16px_60px_rgba(168,85,247,0.25)]"}`,title:"Click to personalize name & daily mantra",children:u.jsxs("div",{className:"flex items-center justify-center gap-2 flex-wrap",children:[u.jsxs("span",{className:`font-bold tracking-normal ${ge?"text-zinc-950":"text-white"}`,children:[pe(),", ",s.name]}),u.jsx("span",{className:"opacity-30",children:"•"}),u.jsxs("span",{className:`italic font-medium ${ge?"text-zinc-800":"text-zinc-200"}`,children:["“",s.motto||"Discipline equals true freedom.","”"]})]})})}),gt?u.jsxs("button",{type:"button",onClick:()=>Pt(!1),className:"mt-8 flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs transition-all border shadow-2xl cursor-pointer bg-black/60 text-white/80 border-white/15 hover:bg-black/80 hover:text-white backdrop-blur-xl",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),u.jsx("span",{className:"font-sans tracking-widest text-[11px] uppercase",children:"Eco Sleep Active • Move cursor or tap to wake"})]}):te?u.jsxs("button",{type:"button",onClick:()=>ce(!1),className:`mt-8 flex items-center gap-2 px-5 py-2.5 rounded-full text-xs transition-all border shadow-xl cursor-pointer ${ge?"bg-white/90 text-zinc-800 border-zinc-300/80 hover:bg-white":"cosmic-dock text-zinc-300 hover:text-white border-white/[0.12] hover:border-violet-400/40"}`,children:[u.jsx(Ng,{className:"w-3.5 h-3.5 text-amber-400"}),u.jsx("span",{className:"font-display tracking-wider",children:"Tap anywhere to restore controls"})]}):null]}),R!=="none"&&!te&&!gt&&u.jsxs("div",{className:"fixed inset-x-0 bottom-24 z-30 flex justify-center px-4 animate-fadeIn pointer-events-auto",children:[u.jsx("div",{className:"fixed inset-0 -z-10",onClick:()=>T("none")}),R==="tasks"&&u.jsxs("div",{className:`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${ge?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[u.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${ge?"border-zinc-200":"border-white/[0.08]"}`,children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("h2",{className:"text-xs font-display uppercase tracking-[0.18em] font-semibold",children:"Tasks for the Day"}),u.jsxs("div",{className:"flex items-center gap-1 p-0.5 rounded-lg border bg-black/10 border-white/10",children:[u.jsxs("button",{type:"button",onClick:()=>T("tasks"),className:"px-2 py-0.5 rounded text-[10px] font-semibold bg-violet-600 text-white",children:["Tasks (",Kt,"/",e.length,")"]}),u.jsxs("button",{type:"button",onClick:()=>T("habits"),className:"px-2 py-0.5 rounded text-[10px] font-medium text-zinc-400 hover:text-white",children:["Habits (",qn,"/",l.length,")"]})]})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("button",{type:"button",onClick:()=>{window.confirm("Reset and uncheck all tasks for today?")&&e.forEach(le=>{le.completed&&t(le.id)})},className:`p-1 rounded-md border transition-colors cursor-pointer ${ge?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-600":"bg-white/10 hover:bg-white/20 border-white/10 text-zinc-300 hover:text-white"}`,title:"Reset today's tasks","aria-label":"Reset tasks for today",children:u.jsx(Tr,{className:"w-3.5 h-3.5"})}),u.jsx("button",{type:"button",onClick:()=>T("none"),className:"p-1 text-zinc-400 hover:text-white cursor-pointer","aria-label":"Close Tasks Panel",children:u.jsx(rr,{className:"w-3.5 h-3.5"})})]})]}),u.jsxs("form",{onSubmit:tt,className:"flex items-center gap-2 shrink-0",children:[u.jsx("input",{type:"text",placeholder:"Add task for today...",value:Be,onChange:le=>bt(le.target.value),className:"flex-1 cosmic-input rounded-xl px-3.5 py-2 text-xs placeholder-zinc-500",autoFocus:!0}),u.jsx("button",{type:"submit",disabled:!Be.trim(),className:"w-8 h-8 rounded-xl bg-violet-600 hover:bg-violet-500 text-white disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all shrink-0 cursor-pointer shadow-sm",children:u.jsx(fo,{className:"w-4 h-4"})})]}),u.jsx("div",{className:"max-h-56 overflow-y-auto space-y-1.5 pr-1",children:e.map(le=>u.jsxs("div",{className:`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs select-none group ${le.completed?ge?"bg-zinc-100/60 border-zinc-200/60 text-zinc-400":"bg-white/[0.015] border-white/[0.04] text-zinc-500":ge?"bg-white/80 hover:bg-white border-zinc-200/80 text-zinc-800":"bg-white/[0.035] hover:bg-white/[0.07] border-white/[0.08] hover:border-violet-400/20 text-zinc-200"}`,children:[u.jsxs("div",{className:"flex items-center gap-2.5 truncate flex-1 cursor-pointer pr-2",onClick:()=>t(le.id),children:[u.jsx("div",{className:`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border transition-all ${le.completed?"bg-emerald-500 border-emerald-400 text-white shadow-sm":ge?"border-zinc-300 group-hover:border-violet-500":"border-white/[0.25] group-hover:border-violet-400"}`,children:le.completed&&u.jsx(Cr,{className:"w-2.5 h-2.5 stroke-[3]"})}),u.jsx("span",{className:`font-sans truncate ${le.completed?"line-through text-zinc-400":ge?"text-zinc-800 font-medium":"text-zinc-200"}`,children:le.text})]}),u.jsx("button",{type:"button",onClick:()=>o(le.id),className:"opacity-0 group-hover:opacity-100 text-zinc-400 hover:text-red-400 transition-opacity p-1 cursor-pointer",children:u.jsx(Ns,{className:"w-3.5 h-3.5"})})]},le.id))}),u.jsxs("div",{className:`pt-2.5 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${ge?"border-zinc-200 text-zinc-600":"border-white/[0.08] text-zinc-400"}`,children:[u.jsxs("span",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400"}),"Day Progress"]}),u.jsxs("span",{className:`font-display font-medium tabular-nums ${ge?"text-zinc-900":"text-zinc-200"}`,children:[it,"% done"]})]})]}),R==="habits"&&u.jsxs("div",{className:`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${ge?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[u.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${ge?"border-zinc-200":"border-white/[0.08]"}`,children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("h2",{className:"text-xs font-display uppercase tracking-[0.18em] font-semibold",children:"Daily Rhythm Pulse"}),u.jsxs("div",{className:"flex items-center gap-1 p-0.5 rounded-lg border bg-black/10 border-white/10",children:[u.jsxs("button",{type:"button",onClick:()=>T("tasks"),className:"px-2 py-0.5 rounded text-[10px] font-medium text-zinc-400 hover:text-white",children:["Tasks (",Kt,"/",e.length,")"]}),u.jsxs("button",{type:"button",onClick:()=>T("habits"),className:"px-2 py-0.5 rounded text-[10px] font-semibold bg-violet-600 text-white",children:["Habits (",qn,"/",l.length,")"]})]})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("button",{type:"button",onClick:()=>{window.confirm("Reset today's habit checkmarks?")&&l.forEach(le=>{le.completed&&d(le.id)})},className:`p-1 rounded-md border transition-colors cursor-pointer ${ge?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-600":"bg-white/10 hover:bg-white/20 border-white/10 text-zinc-300 hover:text-white"}`,title:"Reset today's habits","aria-label":"Reset habits for today",children:u.jsx(Tr,{className:"w-3.5 h-3.5"})}),u.jsx("button",{type:"button",onClick:()=>{const le=prompt("Add new daily habit:");le&&f(le)},className:`p-1 rounded-md border transition-colors cursor-pointer ${ge?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/10 hover:bg-white/20 border-white/10 text-white"}`,title:"Add habit","aria-label":"Add new daily habit",children:u.jsx(fo,{className:"w-3.5 h-3.5"})}),u.jsx("button",{type:"button",onClick:()=>T("none"),className:"p-1 text-zinc-400 hover:text-white cursor-pointer","aria-label":"Close Habits Panel",children:u.jsx(rr,{className:"w-3.5 h-3.5"})})]})]}),u.jsx("div",{className:"max-h-56 overflow-y-auto space-y-1.5 pr-1",children:l.map(le=>u.jsxs("div",{onClick:()=>d(le.id),className:`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs cursor-pointer select-none group ${le.completed?ge?"bg-zinc-100/60 border-zinc-200/60 text-zinc-400":"bg-white/[0.015] border-white/[0.04] text-zinc-400":ge?"bg-white/80 hover:bg-white border-zinc-200/80 text-zinc-800":"bg-white/[0.035] hover:bg-white/[0.07] border-white/[0.08] hover:border-violet-400/20 text-zinc-200"}`,children:[u.jsxs("div",{className:"flex flex-col gap-0.5 truncate pr-2",children:[u.jsx("span",{className:`font-sans truncate ${le.completed?"line-through text-zinc-400":ge?"text-zinc-800 font-medium":"text-zinc-200"}`,children:le.name}),u.jsx("div",{className:"flex items-center gap-1.5 text-[10px] font-mono",children:le.streak>0?u.jsxs("span",{className:"text-amber-500 flex items-center gap-0.5 font-medium",children:[u.jsx(Bf,{className:"w-3 h-3 fill-amber-500"})," ",le.streak," day streak"]}):u.jsx("span",{className:ge?"text-zinc-500":"text-zinc-400",children:"Ready today"})})]}),u.jsx("div",{className:`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border transition-all ${le.completed?"bg-emerald-500 border-emerald-400 text-white shadow-sm":ge?"border-zinc-300 group-hover:border-violet-500":"border-white/[0.25] group-hover:border-violet-400"}`,children:le.completed&&u.jsx(Cr,{className:"w-2.5 h-2.5 stroke-[3]"})})]},le.id))}),u.jsxs("div",{className:`pt-2.5 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${ge?"border-zinc-200 text-zinc-600":"border-white/[0.08] text-zinc-400"}`,children:[u.jsxs("div",{className:`flex items-center gap-1.5 ${ge?"text-zinc-700":"text-zinc-400"}`,children:[u.jsx(Rs,{className:`w-3.5 h-3.5 ${ge?"text-amber-500":"text-violet-300"}`}),u.jsx("span",{children:"Daily Consistency"})]}),u.jsxs("span",{className:`font-display font-medium tabular-nums ${ge?"text-zinc-900":"text-zinc-200"}`,children:[yn,"% kept"]})]})]}),R==="timer"&&u.jsxs("div",{className:`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${ge?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[u.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${ge?"border-zinc-200":"border-white/[0.08]"}`,children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(_o,{className:`w-4 h-4 ${ge?"text-violet-700":"text-violet-300"}`}),u.jsx("h2",{className:"text-xs font-display uppercase tracking-[0.18em] font-semibold",children:"Deep Study Console"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs("div",{className:"flex items-center gap-1 p-0.5 rounded-lg border bg-black/10 border-white/10",children:[u.jsx("button",{type:"button",onClick:()=>Le("pomodoro"),className:`px-2 py-0.5 rounded text-[10px] font-semibold transition-all cursor-pointer ${ae==="pomodoro"?"bg-violet-600 text-white":ge?"text-zinc-600 hover:text-zinc-950":"text-zinc-400 hover:text-white"}`,children:"Pomodoro Sprint"}),u.jsx("button",{type:"button",onClick:()=>Le("stopwatch"),className:`px-2 py-0.5 rounded text-[10px] font-medium transition-all cursor-pointer ${ae==="stopwatch"?"bg-violet-600 text-white":ge?"text-zinc-600 hover:text-zinc-950":"text-zinc-400 hover:text-white"}`,children:"Open Stopwatch"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsxs("button",{type:"button",onClick:()=>{dt(!0),T("none")},className:"flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-sans font-medium text-violet-400 hover:text-violet-300 border border-violet-500/20 hover:border-violet-500/40 cursor-pointer",title:"Open Full Study Analytics Dashboard",children:[u.jsx(Sf,{className:"w-3 h-3"}),u.jsx("span",{children:"Analytics"})]}),u.jsx("button",{type:"button",onClick:()=>T("none"),className:"p-1 text-zinc-400 hover:text-white cursor-pointer",children:u.jsx(rr,{className:"w-3.5 h-3.5"})})]})]}),u.jsxs("div",{className:"flex items-center justify-between gap-1.5 px-0.5 pt-0.5",children:[u.jsx("span",{className:`text-[10px] font-sans shrink-0 ${ge?"text-zinc-500":"text-zinc-400"}`,children:"Subject:"}),u.jsx("div",{className:"flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5 flex-1",children:Mt.map(le=>{const mt=(v||"").toLowerCase()===le.name.toLowerCase();return u.jsxs("button",{type:"button",onClick:()=>S(le.name),className:`px-2 py-0.5 rounded-full text-[10px] font-sans font-medium transition-all shrink-0 cursor-pointer flex items-center gap-1 border ${mt?ge?"bg-zinc-900 text-white border-zinc-900 shadow-xs":"bg-white text-zinc-950 border-white shadow-xs font-bold":ge?"bg-zinc-100 border-zinc-200 text-zinc-700 hover:bg-zinc-200":"bg-white/[0.04] border-white/10 text-zinc-300 hover:bg-white/[0.08]"}`,children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full",style:{backgroundColor:le.color}}),u.jsx("span",{children:le.name})]},le.id)})})]})]}),ae==="pomodoro"?u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{className:"flex items-center justify-between gap-1.5",children:[[{label:"25m / 5m",focus:25,brk:5},{label:"50m / 10m",focus:50,brk:10},{label:"15m Rapid",focus:15,brk:3}].map(le=>{const mt=!li&&G.focusDurationMinutes===le.focus&&G.breakDurationMinutes===le.brk;return u.jsx("button",{type:"button",onClick:()=>{Di(!1),V(Xt=>({...Xt,focusDurationMinutes:le.focus,breakDurationMinutes:le.brk})),E==="idle"&&H(le.focus)},className:`flex-1 py-1 px-2 rounded-xl text-[10px] font-mono font-medium border transition-all cursor-pointer ${mt?"bg-violet-600 text-white border-violet-400/50 shadow-sm":ge?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 border-white/[0.08]"}`,children:le.label},le.label)}),u.jsx("button",{type:"button",onClick:()=>Di(!li),className:`flex-1 py-1 px-2 rounded-xl text-[10px] font-mono font-medium border transition-all cursor-pointer ${li||![25,50,15].includes(G.focusDurationMinutes)?"bg-violet-600 text-white border-violet-400/50 shadow-sm":ge?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 border-white/[0.08]"}`,children:"Custom"})]}),li&&u.jsxs("div",{className:`p-2.5 rounded-xl border flex items-center justify-between gap-2 animate-fadeIn ${ge?"bg-zinc-50 border-zinc-200":"bg-white/[0.03] border-white/10"}`,children:[u.jsxs("div",{className:"flex items-center gap-1 text-[11px] font-mono",children:[u.jsx("span",{className:ge?"text-zinc-600":"text-zinc-400",children:"Focus:"}),u.jsx("input",{type:"number",min:"1",max:"180",value:yi,onChange:le=>Pr(le.target.value),className:`w-12 px-1.5 py-0.5 rounded border text-center text-xs font-mono outline-none ${ge?"bg-white border-zinc-300 text-zinc-900":"bg-black/40 border-white/15 text-white"}`}),u.jsx("span",{className:ge?"text-zinc-500":"text-zinc-400",children:"m"})]}),u.jsxs("div",{className:"flex items-center gap-1 text-[11px] font-mono",children:[u.jsx("span",{className:ge?"text-zinc-600":"text-zinc-400",children:"Break:"}),u.jsx("input",{type:"number",min:"1",max:"60",value:A,onChange:le=>Y(le.target.value),className:`w-12 px-1.5 py-0.5 rounded border text-center text-xs font-mono outline-none ${ge?"bg-white border-zinc-300 text-zinc-900":"bg-black/40 border-white/15 text-white"}`}),u.jsx("span",{className:ge?"text-zinc-500":"text-zinc-400",children:"m"})]}),u.jsx("button",{type:"button",onClick:()=>{const le=parseInt(yi,10),mt=parseInt(A,10);!isNaN(le)&&le>0&&(V(Xt=>({...Xt,focusDurationMinutes:le,breakDurationMinutes:isNaN(mt)||mt<=0?5:mt})),E==="idle"&&H(le),Di(!1))},className:"px-2.5 py-1 rounded-lg text-[10px] font-bold bg-violet-600 hover:bg-violet-500 text-white cursor-pointer shadow-xs transition-colors",children:"Set Sprint"})]}),u.jsxs("div",{className:"text-center py-2 relative",children:[u.jsxs("div",{className:`text-5xl font-display font-bold tracking-tight leading-none tabular-nums ${ge?"text-zinc-950":"text-white"}`,children:[Ve,":",et]}),u.jsx("div",{className:"flex items-center justify-center gap-2 mt-2",children:u.jsx("span",{className:`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${E==="break"?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 animate-pulse":E==="focus"?"bg-violet-500/20 text-violet-300 border border-violet-500/30 animate-pulse":E==="paused"?"bg-amber-500/20 text-amber-300 border border-amber-500/30":ge?"bg-zinc-100 text-zinc-600 border border-zinc-200":"bg-white/[0.06] text-zinc-400 border border-white/[0.08]"}`,children:E==="break"?"RECOVERY BREAK":E==="focus"?"FOCUS SPRINT":E==="paused"?"PAUSED":"READY TO SPRINT"})}),u.jsx("div",{className:"w-full bg-white/[0.06] h-1.5 rounded-full mt-3 overflow-hidden",children:u.jsx("div",{className:`h-full transition-all duration-1000 ${E==="break"?"bg-cyan-400":"bg-violet-500"}`,style:{width:`${Math.round(We*100)}%`}})})]}),u.jsxs("div",{className:"flex items-center justify-between text-[11px] px-1 font-mono",children:[u.jsxs("button",{type:"button",onClick:he,className:`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${G.displayMode==="numbers"?"bg-violet-500/20 border-violet-500/40 text-violet-300":ge?"bg-zinc-100 border-zinc-200 text-zinc-600":"bg-white/[0.04] border-white/[0.08] text-zinc-400"}`,children:[u.jsx(qM,{className:"w-3.5 h-3.5"}),u.jsxs("span",{children:["Clock: ",G.displayMode==="numbers"?"Countdown Digits":"Wall Clock"]})]}),u.jsxs("button",{type:"button",onClick:()=>V(le=>({...le,soundEnabled:!le.soundEnabled})),className:`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${G.soundEnabled?"bg-emerald-500/20 border-emerald-500/40 text-emerald-300":ge?"bg-zinc-100 border-zinc-200 text-zinc-600":"bg-white/[0.04] border-white/[0.08] text-zinc-400"}`,children:[u.jsx(LM,{className:"w-3.5 h-3.5"}),u.jsxs("span",{children:["Chime: ",G.soundEnabled?"ON":"OFF"]})]})]}),u.jsxs("div",{className:"flex gap-2",children:[u.jsx("button",{type:"button",onClick:$,className:`flex-1 py-2.5 rounded-xl font-display text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 border transition-all cursor-pointer ${ge?"bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-800":"bg-violet-600 hover:bg-violet-500 text-white border-violet-400/30"}`,children:E==="focus"?u.jsxs(u.Fragment,{children:[u.jsx(ir,{className:"w-4 h-4"}),u.jsx("span",{children:"Pause Focus"})]}):E==="paused"?u.jsxs(u.Fragment,{children:[u.jsx($i,{className:"w-4 h-4 fill-current"}),u.jsx("span",{children:"Resume Focus"})]}):E==="break"?u.jsxs(u.Fragment,{children:[u.jsx(UM,{className:"w-4 h-4"}),u.jsx("span",{children:"Pause Break"})]}):u.jsxs(u.Fragment,{children:[u.jsx($i,{className:"w-4 h-4 ml-0.5 fill-current"}),u.jsxs("span",{children:["Start Focus (",G.focusDurationMinutes,"m)"]})]})}),u.jsx("button",{type:"button",onClick:ee,className:`px-3 py-2.5 rounded-xl border text-xs font-medium transition-colors cursor-pointer ${ge?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white border-white/[0.08]"}`,title:E==="focus"?"Skip directly to break":"Skip back to focus",children:u.jsx(hc,{className:"w-4 h-4"})}),u.jsx("button",{type:"button",onClick:B,className:`px-3 py-2.5 rounded-xl border transition-colors cursor-pointer ${ge?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white border-white/[0.08]"}`,title:"Reset Pomodoro",children:u.jsx(Tr,{className:"w-3.5 h-3.5"})})]})]}):u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{className:"text-center py-2",children:[u.jsx("div",{className:`text-5xl font-display font-light tracking-widest leading-none tabular-nums ${ge?"text-zinc-900":"text-white"}`,children:hn(w)}),u.jsxs("p",{className:`text-[10px] font-display tracking-[0.2em] uppercase mt-2 ${ge?"text-zinc-500":"text-zinc-400"}`,children:[v," • ",dn]})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[u.jsx("input",{type:"text",value:dn,onChange:le=>fn(le.target.value),placeholder:"Mode (e.g. Deep Work)",className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"}),u.jsx("input",{type:"text",value:jt,onChange:le=>{an(le.target.value),S(le.target.value)},placeholder:"Subject (e.g. Engineering)",className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"})]}),u.jsxs("div",{className:"flex gap-2",children:[u.jsxs("button",{type:"button",onClick:N,className:`flex-1 py-2.5 rounded-xl font-display text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 border transition-all cursor-pointer ${ge?"bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-800":"bg-violet-600 hover:bg-violet-500 text-white border-violet-400/30"}`,children:[M?u.jsx(ir,{className:"w-4 h-4"}):u.jsx($i,{className:"w-4 h-4 ml-0.5 fill-current"}),u.jsx("span",{children:M?"Pause Focus":"Start Focus"})]}),u.jsx("button",{type:"button",onClick:z,className:`px-3 py-2.5 rounded-xl border transition-colors cursor-pointer ${ge?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white border-white/[0.08]"}`,title:"Reset stopwatch",children:u.jsx(Tr,{className:"w-3.5 h-3.5"})})]})]}),u.jsxs("div",{className:`p-3 rounded-2xl border transition-all ${ge?"bg-zinc-50 border-zinc-200":"bg-white/[0.025] border-white/[0.08]"}`,children:[u.jsxs("div",{className:"flex items-center justify-between text-[11px] mb-2",children:[u.jsxs("span",{className:`font-sans font-medium flex items-center gap-1.5 ${ge?"text-zinc-800":"text-zinc-200"}`,children:[u.jsx(_o,{className:"w-3.5 h-3.5 text-amber-400"}),u.jsx("span",{children:"Forgot to start timer? Log past focus:"})]}),tn&&u.jsx("span",{className:"text-[10px] font-mono text-emerald-400 animate-fadeIn font-semibold",children:tn})]}),u.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[[30,45,60,90,120].map(le=>u.jsxs("button",{type:"button",onClick:()=>St(le),className:`px-2.5 py-1 rounded-xl text-[10px] font-mono font-medium border transition-all cursor-pointer ${ge?"bg-white hover:bg-zinc-100 text-zinc-800 border-zinc-200 shadow-xs":"bg-white/[0.05] hover:bg-white/[0.12] text-zinc-300 hover:text-white border-white/[0.1]"}`,title:`Log ${le>=60?le/60+" hours":le+" minutes"} past study`,children:["+",le>=60?`${le/60}h`:`${le}m`]},le)),u.jsxs("form",{onSubmit:Ht,className:"flex items-center gap-1 ml-auto",children:[u.jsx("input",{type:"number",min:"1",max:"720",value:Qt,onChange:le=>Nn(le.target.value),placeholder:"Mins",className:"w-14 cosmic-input rounded-lg px-2 py-0.5 text-[10px] font-mono text-center"}),u.jsx("button",{type:"submit",className:"px-2.5 py-0.5 rounded-lg text-[10px] font-medium bg-amber-400 hover:bg-amber-300 text-black font-semibold cursor-pointer transition-colors",children:"+ Add"})]})]}),P.length>0&&u.jsxs("div",{className:"pt-2 mt-2 border-t border-white/[0.06] space-y-1",children:[u.jsx("span",{className:`text-[10px] font-mono uppercase tracking-wider block ${ge?"text-zinc-500":"text-zinc-400"}`,children:"Recent Focus Logs:"}),u.jsx("div",{className:"max-h-20 overflow-y-auto space-y-1 pr-1 text-[11px] font-mono",children:P.slice(0,3).map(le=>u.jsxs("div",{className:`flex items-center justify-between px-2 py-1 rounded-lg ${ge?"bg-zinc-100 text-zinc-800":"bg-white/[0.03] text-zinc-300"}`,children:[u.jsxs("span",{className:"truncate",children:[le.subject," · ",Math.round(le.durationSeconds/60),"m"]}),u.jsx("button",{type:"button",onClick:()=>I(le.id),className:"text-zinc-500 hover:text-red-400 p-0.5 transition-colors cursor-pointer",title:"Remove logged entry",children:u.jsx(Ns,{className:"w-3 h-3"})})]},le.id))})]})]}),u.jsxs("div",{className:`pt-2.5 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${ge?"border-zinc-200 text-zinc-600":"border-white/[0.08] text-zinc-400"}`,children:[u.jsxs("span",{children:["Weekly: ",u.jsxs("strong",{className:`font-display ${ge?"text-zinc-900":"text-zinc-200"}`,children:[ci,"h"]})," / 15h"]}),u.jsxs("span",{className:`font-display font-medium tabular-nums ${ge?"text-zinc-900":"text-zinc-200"}`,children:[Ft,"% quota"]})]})]}),R==="wellness"&&u.jsxs("div",{className:`w-full max-w-sm p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${ge?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[u.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-white/10",children:[u.jsxs("span",{className:"text-xs font-display uppercase tracking-widest font-semibold flex items-center gap-1.5",children:[u.jsx(Rs,{className:"w-3.5 h-3.5 text-amber-400"}),"Daily Wellness Pulse"]}),u.jsx("button",{onClick:()=>T("none"),className:"p-1 text-zinc-400 hover:text-white",children:u.jsx(rr,{className:"w-3.5 h-3.5"})})]}),u.jsxs("div",{className:"flex items-center justify-between py-1 text-xs",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(FM,{className:"w-4 h-4 text-sky-400"}),u.jsx("span",{children:"Hydration Target"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("button",{type:"button",onClick:()=>ie(le=>Math.max(0,le-12.5)),className:"w-6 h-6 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center font-bold",children:"-"}),u.jsxs("span",{className:"font-mono font-bold w-12 text-center",children:[Math.round(X/100*8)," / 8"]}),u.jsx("button",{type:"button",onClick:()=>ie(le=>Math.min(100,le+12.5)),className:"w-6 h-6 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center font-bold",children:"+"})]})]}),u.jsxs("div",{className:"flex items-center justify-between py-1 text-xs",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(fc,{className:"w-4 h-4 text-violet-400"}),u.jsx("span",{children:"Sleep Duration"})]}),u.jsxs("button",{type:"button",onClick:()=>Q(O%12+1),className:"px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 font-mono font-bold text-xs",children:[O," Hours (Click to Cycle)"]})]}),u.jsxs("div",{className:"flex items-center justify-between py-1 text-xs",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(WM,{className:"w-4 h-4 text-amber-400"}),u.jsx("span",{children:"Day Score"})]}),u.jsxs("button",{type:"button",onClick:()=>L(k>=10?1:k+1),className:"px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 font-mono font-bold text-xs text-amber-400",children:[k," / 10 ★"]})]}),u.jsxs("div",{className:`pt-3 mt-1 border-t flex items-center justify-between ${ge?"border-zinc-200":"border-white/10"}`,children:[u.jsxs("div",{className:"flex flex-col",children:[u.jsxs("span",{className:"text-[11px] font-medium flex items-center gap-1",children:[u.jsx(Tr,{className:"w-3 h-3 text-violet-400"}),"Day Reset"]}),u.jsxs("span",{className:`text-[9px] font-mono ${ge?"text-zinc-500":"text-zinc-400"}`,children:["Active: ",re]})]}),u.jsxs("button",{type:"button",onClick:()=>{window.confirm("Start a fresh day? This will uncheck today's tasks & habits and reset hydration to 0%.")&&F()},className:`px-3 py-1.5 rounded-xl border text-[11px] font-display uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${ge?"bg-violet-50 hover:bg-violet-100 text-violet-700 border-violet-200":"bg-violet-600/30 hover:bg-violet-600/50 text-violet-200 border-violet-400/40 hover:border-violet-400"}`,title:"Reset daily progress for a fresh day",children:[u.jsx(Tr,{className:"w-3 h-3"}),u.jsx("span",{children:"Start Fresh Day"})]})]})]})]}),!te&&!gt&&u.jsx("footer",{className:"relative shrink-0 flex items-center justify-center w-full z-20 pb-2",children:u.jsxs("nav",{"aria-label":"Sanctuary Focus Dock",className:`flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-full backdrop-blur-2xl border shadow-2xl transition-all ${ge?"bg-white/85 border-zinc-200/90 text-zinc-800 shadow-[0_15px_40px_rgba(0,0,0,0.1)]":"bg-[#090b16]/80 border-white/[0.12] text-zinc-200 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"}`,children:[u.jsxs("div",{className:`flex items-center rounded-full border transition-all ${se?E==="break"?"bg-cyan-500/20 border-cyan-500/40 text-cyan-300":"bg-violet-600/25 border-violet-500/40 text-violet-300":M?"bg-emerald-500/20 border-emerald-500/40 text-emerald-300":ge?"bg-zinc-100/90 border-zinc-200 text-zinc-800":"bg-white/[0.04] border-white/[0.08] text-zinc-300"}`,children:[u.jsxs("button",{type:"button",onClick:se?$:M?N:()=>H(),className:"pl-3 pr-1.5 py-1.5 flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity",title:se?E==="paused"?"Resume Pomodoro":"Pause Pomodoro":M?"Pause focus timer":"Start Pomodoro Focus",children:[se?E==="paused"?u.jsx($i,{className:"w-3.5 h-3.5 text-amber-400 fill-current"}):u.jsx(ir,{className:"w-3.5 h-3.5 text-violet-400 animate-pulse"}):M?u.jsx(ir,{className:"w-3.5 h-3.5 text-emerald-400 animate-pulse"}):u.jsx($i,{className:"w-3.5 h-3.5 text-zinc-400 fill-current"}),u.jsx("span",{className:"font-mono text-xs font-semibold tabular-nums",children:se?`${Ve}:${et}`:hn(w)})]}),u.jsx("button",{type:"button",onClick:()=>{Le(se?"pomodoro":"stopwatch"),T(le=>le==="timer"?"none":"timer")},className:`pr-3 pl-1.5 py-1.5 text-[11px] font-sans border-l transition-colors cursor-pointer ${ge?"border-zinc-200 hover:text-black":"border-white/10 hover:text-white"}`,title:"Expand Deep Study Console",children:u.jsx("span",{children:se?E==="break"?"Break":"Sprint":jt})})]}),u.jsxs("button",{type:"button",onClick:()=>T(le=>le==="tasks"?"none":"tasks"),className:`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-sans transition-all cursor-pointer ${R==="tasks"||R==="habits"?"bg-violet-600 text-white border-violet-400":ge?"bg-zinc-100/90 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300 hover:text-white"}`,title:"Daily Flow (Tasks & Habits)",children:[u.jsx(VM,{className:"w-3.5 h-3.5 text-violet-400"}),u.jsx("span",{children:"Flow"}),u.jsxs("span",{className:`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${ge?"bg-zinc-200/90 text-zinc-800":"bg-white/10 text-violet-200"}`,children:[Kt+qn,"/",e.length+l.length]})]}),u.jsxs("div",{onClick:()=>Gt(!0),className:`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs cursor-pointer group transition-all ${Ne||je?xe==="youtube"?"bg-red-600/30 border-red-500/40 text-red-200":"bg-violet-600/30 border-violet-500/40 text-violet-200":ge?"bg-zinc-100/90 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300 hover:text-white"}`,title:"Open Audio Sanctuary",children:[xe==="youtube"&&je?u.jsx(ho,{className:"w-3.5 h-3.5 text-red-500 animate-pulse"}):u.jsx(dc,{className:`w-3.5 h-3.5 ${Ne||je?"text-violet-300 animate-pulse":"text-zinc-400"}`}),u.jsx("span",{className:"max-w-[80px] sm:max-w-[120px] truncate text-[11px] font-medium",children:xe==="youtube"?Ke?Ke.title:"YouTube":En.title}),u.jsx(ax,{isPlaying:xe==="youtube"?je:Ne,color:xe==="youtube"?"#ef4444":ge?"#7c3aed":En.accentColor,className:"w-8 h-2.5",barCount:4}),u.jsx("button",{type:"button",onClick:le=>{le.stopPropagation(),xe==="youtube"?xt():Ne?De():Xe(Qe)},className:"w-5 h-5 rounded-md flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors",title:(xe==="youtube"?je:Ne)?"Pause audio":"Play audio",children:(xe==="youtube"?je:Ne)?u.jsx(ir,{className:"w-2.5 h-2.5 fill-current"}):u.jsx($i,{className:"w-2.5 h-2.5 fill-current ml-0.5"})})]})]})}),Ie&&u.jsxs("div",{className:"fixed inset-0 z-50 flex",children:[u.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm",onClick:()=>Nt(!1)}),u.jsxs("aside",{className:`relative z-10 w-84 sm:w-96 max-w-[92vw] h-full backdrop-blur-3xl border-r shadow-2xl pt-16 sm:pt-20 px-6 pb-6 flex flex-col justify-between ${ge?"bg-[#faf8f4]/98 border-zinc-200 text-zinc-900":"bg-[#0d0f17]/95 border-white/[0.1] text-white"}`,children:[u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:`flex items-center justify-between pb-3.5 border-b ${ge?"border-zinc-200":"border-white/[0.08]"}`,children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(cm,{className:`w-4 h-4 ${ge?"text-zinc-700":"text-zinc-300"}`}),u.jsx("h3",{className:`text-xs font-sans uppercase tracking-[0.16em] font-semibold ${ge?"text-zinc-900":"text-white"}`,children:"Daily Rhythm"})]}),u.jsx("button",{onClick:()=>Nt(!1),className:`transition-colors cursor-pointer ${ge?"text-zinc-500 hover:text-black":"text-zinc-400 hover:text-white"}`,children:u.jsx(rr,{className:"w-4 h-4"})})]}),u.jsx("div",{className:"py-1",children:u.jsx(s2,{routines:g,activeBlock:h,activeMinutesLeft:b,isLight:ge})}),u.jsxs("div",{className:"space-y-2.5 text-xs overflow-y-auto max-h-[50vh] pr-1",children:[g.map(le=>{const mt=(h==null?void 0:h.id)===le.id;return u.jsxs("div",{className:`p-3.5 rounded-2xl border transition-all relative group ${mt?ge?"bg-amber-50/90 border-amber-300 shadow-sm":"bg-white/[0.04] border-amber-400/40 shadow-md ring-1 ring-amber-400/20":ge?"bg-white/80 border-zinc-200 shadow-xs":"bg-white/[0.02] border-white/[0.07]"}`,children:[u.jsxs("div",{className:"flex items-center justify-between pb-1.5",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:`w-2 h-2 rounded-full ${mt?"bg-amber-400":"bg-zinc-600"}`}),u.jsx("span",{className:`font-semibold tracking-tight ${mt?"text-white font-bold":ge?"text-zinc-800":"text-zinc-200"}`,children:le.title}),mt&&u.jsx("span",{className:"text-[9px] font-mono px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/25 font-semibold uppercase tracking-wider",children:"Current"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:`text-[10px] font-mono tabular-nums ${ge?"text-zinc-500":"text-zinc-400"}`,children:le.timeRange}),g.length>1&&u.jsx("button",{type:"button",onClick:()=>y(le.id),className:"opacity-0 group-hover:opacity-100 p-1 text-zinc-400 hover:text-red-400 transition-opacity cursor-pointer",title:"Delete routine block",children:u.jsx(Ns,{className:"w-3 h-3"})})]})]}),u.jsx("p",{className:`text-[11px] leading-relaxed ${ge?"text-zinc-600":"text-zinc-400"}`,children:le.description})]},le.id)}),zt?u.jsxs("form",{onSubmit:le=>{le.preventDefault(),rn.trim()&&qt.trim()&&(m({title:rn.trim(),timeRange:Pn.trim()||"Flexible",description:qt.trim(),iconType:"custom"}),Qn(""),_i(""),Pi(""),nn(!1))},className:`p-3.5 rounded-2xl border space-y-2.5 ${ge?"bg-white border-zinc-300 shadow-sm":"bg-white/[0.04] border-white/[0.1]"}`,children:[u.jsx("input",{type:"text",placeholder:"Title (e.g. Creative Sprint)",value:rn,onChange:le=>Qn(le.target.value),className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs",required:!0}),u.jsx("input",{type:"text",placeholder:"Time range (e.g. 14:00 – 16:00)",value:Pn,onChange:le=>_i(le.target.value),className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"}),u.jsx("textarea",{placeholder:"Intentions / Focus areas...",value:qt,onChange:le=>Pi(le.target.value),className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs resize-none h-16",required:!0}),u.jsxs("div",{className:"flex items-center justify-end gap-2 pt-1",children:[u.jsx("button",{type:"button",onClick:()=>nn(!1),className:`px-3 py-1 rounded-lg text-[11px] transition-colors ${ge?"text-zinc-600 hover:text-black":"text-zinc-400 hover:text-white"}`,children:"Cancel"}),u.jsx("button",{type:"submit",className:"px-3.5 py-1.5 rounded-lg text-[11px] bg-amber-400 hover:bg-amber-300 text-black font-semibold cursor-pointer transition-colors",children:"Add Block"})]})]}):u.jsxs("button",{type:"button",onClick:()=>nn(!0),className:`w-full py-2.5 rounded-xl border border-dashed flex items-center justify-center gap-1.5 text-[11px] transition-all cursor-pointer ${ge?"border-zinc-300 hover:border-zinc-400 text-zinc-600 hover:text-zinc-900 bg-white/40":"border-white/10 hover:border-white/20 text-zinc-400 hover:text-white bg-white/[0.01]"}`,children:[u.jsx(fo,{className:"w-3 h-3"}),u.jsx("span",{children:"Add Custom Routine Block"})]})]})]}),u.jsxs("div",{className:"flex items-center gap-2 pt-2",children:[u.jsx("button",{type:"button",onClick:_,className:`px-3 py-2.5 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${ge?"border-zinc-200 text-zinc-600 hover:bg-zinc-100":"border-white/10 text-zinc-400 hover:bg-white/[0.05] hover:text-white"}`,title:"Reset to default protocols",children:"Reset"}),u.jsx("button",{type:"button",onClick:()=>Nt(!1),className:`flex-1 py-2.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${ge?"bg-zinc-900 hover:bg-zinc-800 text-white":"bg-white/[0.06] hover:bg-white/[0.12] text-white"}`,children:"Close"})]})]})]}),u.jsx(i2,{isOpen:Lt,onClose:()=>It(!1)}),u.jsx(t2,{isOpen:Dt,onClose:()=>sn(!1)}),u.jsx(n2,{isOpen:Z,onClose:()=>Gt(!1)}),u.jsx(r2,{isOpen:at,onClose:()=>dt(!1)})]})},o2=()=>{const{wallpaperTheme:s,appTheme:e}=Nr(),t=e==="light";return u.jsxs("div",{"data-theme":s,className:`theme-${e} relative w-screen h-screen max-h-screen overflow-hidden text-[var(--text-primary)] font-sans transition-colors duration-200 ${t?"bg-[#f7f5f0]/95":"bg-[#060814]"}`,children:[u.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--card-bg-elevated)] focus:text-[var(--text-primary)] focus:rounded-xl focus:border focus:border-[var(--card-border)] focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-violet-400 font-sans text-xs font-semibold",children:"Skip to main content"}),u.jsx(e_,{}),u.jsx(bM,{}),u.jsx(JM,{}),u.jsx("div",{className:"pointer-events-none fixed inset-0 z-20 dreamy-grain opacity-15"}),u.jsx("main",{id:"main-content",className:"w-full h-full overflow-y-auto lg:overflow-hidden relative z-10",children:u.jsx(a2,{})})]})};function l2(){return u.jsx(Qv,{children:u.jsx(o2,{})})}const hm=document.getElementById("root");hm&&Yv.createRoot(hm).render(u.jsx(Hv.StrictMode,{children:u.jsx(l2,{})}));
