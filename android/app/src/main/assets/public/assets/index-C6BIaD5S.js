var Cv=Object.defineProperty;var Av=(s,e,t)=>e in s?Cv(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var _r=(s,e,t)=>Av(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function dm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var qu={exports:{}},Za={},Ku={exports:{}},Dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i0;function Rv(){if(i0)return Dt;i0=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),E=Symbol.iterator;function h(k){return k===null||typeof k!="object"?null:(k=E&&k[E]||k["@@iterator"],typeof k=="function"?k:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,w={};function v(k,q,pe){this.props=k,this.context=q,this.refs=w,this.updater=pe||S}v.prototype.isReactComponent={},v.prototype.setState=function(k,q){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,q,"setState")},v.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function y(){}y.prototype=v.prototype;function N(k,q,pe){this.props=k,this.context=q,this.refs=w,this.updater=pe||S}var U=N.prototype=new y;U.constructor=N,b(U,v.prototype),U.isPureReactComponent=!0;var P=Array.isArray,z=Object.prototype.hasOwnProperty,I={current:null},M={key:!0,ref:!0,__self:!0,__source:!0};function D(k,q,pe){var Y,oe={},me=null,ge=null;if(q!=null)for(Y in q.ref!==void 0&&(ge=q.ref),q.key!==void 0&&(me=""+q.key),q)z.call(q,Y)&&!M.hasOwnProperty(Y)&&(oe[Y]=q[Y]);var be=arguments.length-2;if(be===1)oe.children=pe;else if(1<be){for(var Ie=Array(be),it=0;it<be;it++)Ie[it]=arguments[it+2];oe.children=Ie}if(k&&k.defaultProps)for(Y in be=k.defaultProps,be)oe[Y]===void 0&&(oe[Y]=be[Y]);return{$$typeof:s,type:k,key:me,ref:ge,props:oe,_owner:I.current}}function J(k,q){return{$$typeof:s,type:k.type,key:q,ref:k.ref,props:k.props,_owner:k._owner}}function W(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function V(k){var q={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(pe){return q[pe]})}var B=/\/+/g;function X(k,q){return typeof k=="object"&&k!==null&&k.key!=null?V(""+k.key):q.toString(36)}function F(k,q,pe,Y,oe){var me=typeof k;(me==="undefined"||me==="boolean")&&(k=null);var ge=!1;if(k===null)ge=!0;else switch(me){case"string":case"number":ge=!0;break;case"object":switch(k.$$typeof){case s:case e:ge=!0}}if(ge)return ge=k,oe=oe(ge),k=Y===""?"."+X(ge,0):Y,P(oe)?(pe="",k!=null&&(pe=k.replace(B,"$&/")+"/"),F(oe,q,pe,"",function(it){return it})):oe!=null&&(W(oe)&&(oe=J(oe,pe+(!oe.key||ge&&ge.key===oe.key?"":(""+oe.key).replace(B,"$&/")+"/")+k)),q.push(oe)),1;if(ge=0,Y=Y===""?".":Y+":",P(k))for(var be=0;be<k.length;be++){me=k[be];var Ie=Y+X(me,be);ge+=F(me,q,pe,Ie,oe)}else if(Ie=h(k),typeof Ie=="function")for(k=Ie.call(k),be=0;!(me=k.next()).done;)me=me.value,Ie=Y+X(me,be++),ge+=F(me,q,pe,Ie,oe);else if(me==="object")throw q=String(k),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return ge}function te(k,q,pe){if(k==null)return k;var Y=[],oe=0;return F(k,Y,"","",function(me){return q.call(pe,me,oe++)}),Y}function de(k){if(k._status===-1){var q=k._result;q=q(),q.then(function(pe){(k._status===0||k._status===-1)&&(k._status=1,k._result=pe)},function(pe){(k._status===0||k._status===-1)&&(k._status=2,k._result=pe)}),k._status===-1&&(k._status=0,k._result=q)}if(k._status===1)return k._result.default;throw k._result}var $={current:null},ie={transition:null},O={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:ie,ReactCurrentOwner:I};function ee(){throw Error("act(...) is not supported in production builds of React.")}return Dt.Children={map:te,forEach:function(k,q,pe){te(k,function(){q.apply(this,arguments)},pe)},count:function(k){var q=0;return te(k,function(){q++}),q},toArray:function(k){return te(k,function(q){return q})||[]},only:function(k){if(!W(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},Dt.Component=v,Dt.Fragment=t,Dt.Profiler=o,Dt.PureComponent=N,Dt.StrictMode=r,Dt.Suspense=g,Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,Dt.act=ee,Dt.cloneElement=function(k,q,pe){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var Y=b({},k.props),oe=k.key,me=k.ref,ge=k._owner;if(q!=null){if(q.ref!==void 0&&(me=q.ref,ge=I.current),q.key!==void 0&&(oe=""+q.key),k.type&&k.type.defaultProps)var be=k.type.defaultProps;for(Ie in q)z.call(q,Ie)&&!M.hasOwnProperty(Ie)&&(Y[Ie]=q[Ie]===void 0&&be!==void 0?be[Ie]:q[Ie])}var Ie=arguments.length-2;if(Ie===1)Y.children=pe;else if(1<Ie){be=Array(Ie);for(var it=0;it<Ie;it++)be[it]=arguments[it+2];Y.children=be}return{$$typeof:s,type:k.type,key:oe,ref:me,props:Y,_owner:ge}},Dt.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},Dt.createElement=D,Dt.createFactory=function(k){var q=D.bind(null,k);return q.type=k,q},Dt.createRef=function(){return{current:null}},Dt.forwardRef=function(k){return{$$typeof:f,render:k}},Dt.isValidElement=W,Dt.lazy=function(k){return{$$typeof:_,_payload:{_status:-1,_result:k},_init:de}},Dt.memo=function(k,q){return{$$typeof:m,type:k,compare:q===void 0?null:q}},Dt.startTransition=function(k){var q=ie.transition;ie.transition={};try{k()}finally{ie.transition=q}},Dt.unstable_act=ee,Dt.useCallback=function(k,q){return $.current.useCallback(k,q)},Dt.useContext=function(k){return $.current.useContext(k)},Dt.useDebugValue=function(){},Dt.useDeferredValue=function(k){return $.current.useDeferredValue(k)},Dt.useEffect=function(k,q){return $.current.useEffect(k,q)},Dt.useId=function(){return $.current.useId()},Dt.useImperativeHandle=function(k,q,pe){return $.current.useImperativeHandle(k,q,pe)},Dt.useInsertionEffect=function(k,q){return $.current.useInsertionEffect(k,q)},Dt.useLayoutEffect=function(k,q){return $.current.useLayoutEffect(k,q)},Dt.useMemo=function(k,q){return $.current.useMemo(k,q)},Dt.useReducer=function(k,q,pe){return $.current.useReducer(k,q,pe)},Dt.useRef=function(k){return $.current.useRef(k)},Dt.useState=function(k){return $.current.useState(k)},Dt.useSyncExternalStore=function(k,q,pe){return $.current.useSyncExternalStore(k,q,pe)},Dt.useTransition=function(){return $.current.useTransition()},Dt.version="18.3.1",Dt}var r0;function wf(){return r0||(r0=1,Ku.exports=Rv()),Ku.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0;function Nv(){if(s0)return Za;s0=1;var s=wf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,g,m){var _,E={},h=null,S=null;m!==void 0&&(h=""+m),g.key!==void 0&&(h=""+g.key),g.ref!==void 0&&(S=g.ref);for(_ in g)r.call(g,_)&&!l.hasOwnProperty(_)&&(E[_]=g[_]);if(f&&f.defaultProps)for(_ in g=f.defaultProps,g)E[_]===void 0&&(E[_]=g[_]);return{$$typeof:e,type:f,key:h,ref:S,props:E,_owner:o.current}}return Za.Fragment=t,Za.jsx=u,Za.jsxs=u,Za}var a0;function Pv(){return a0||(a0=1,qu.exports=Nv()),qu.exports}var d=Pv(),xe=wf();const Dv=dm(xe);var wl={},Zu={exports:{}},oi={},Ju={exports:{}},Qu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o0;function Lv(){return o0||(o0=1,(function(s){function e(ie,O){var ee=ie.length;ie.push(O);e:for(;0<ee;){var k=ee-1>>>1,q=ie[k];if(0<o(q,O))ie[k]=O,ie[ee]=q,ee=k;else break e}}function t(ie){return ie.length===0?null:ie[0]}function r(ie){if(ie.length===0)return null;var O=ie[0],ee=ie.pop();if(ee!==O){ie[0]=ee;e:for(var k=0,q=ie.length,pe=q>>>1;k<pe;){var Y=2*(k+1)-1,oe=ie[Y],me=Y+1,ge=ie[me];if(0>o(oe,ee))me<q&&0>o(ge,oe)?(ie[k]=ge,ie[me]=ee,k=me):(ie[k]=oe,ie[Y]=ee,k=Y);else if(me<q&&0>o(ge,ee))ie[k]=ge,ie[me]=ee,k=me;else break e}}return O}function o(ie,O){var ee=ie.sortIndex-O.sortIndex;return ee!==0?ee:ie.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var g=[],m=[],_=1,E=null,h=3,S=!1,b=!1,w=!1,v=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function U(ie){for(var O=t(m);O!==null;){if(O.callback===null)r(m);else if(O.startTime<=ie)r(m),O.sortIndex=O.expirationTime,e(g,O);else break;O=t(m)}}function P(ie){if(w=!1,U(ie),!b)if(t(g)!==null)b=!0,de(z);else{var O=t(m);O!==null&&$(P,O.startTime-ie)}}function z(ie,O){b=!1,w&&(w=!1,y(D),D=-1),S=!0;var ee=h;try{for(U(O),E=t(g);E!==null&&(!(E.expirationTime>O)||ie&&!V());){var k=E.callback;if(typeof k=="function"){E.callback=null,h=E.priorityLevel;var q=k(E.expirationTime<=O);O=s.unstable_now(),typeof q=="function"?E.callback=q:E===t(g)&&r(g),U(O)}else r(g);E=t(g)}if(E!==null)var pe=!0;else{var Y=t(m);Y!==null&&$(P,Y.startTime-O),pe=!1}return pe}finally{E=null,h=ee,S=!1}}var I=!1,M=null,D=-1,J=5,W=-1;function V(){return!(s.unstable_now()-W<J)}function B(){if(M!==null){var ie=s.unstable_now();W=ie;var O=!0;try{O=M(!0,ie)}finally{O?X():(I=!1,M=null)}}else I=!1}var X;if(typeof N=="function")X=function(){N(B)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,te=F.port2;F.port1.onmessage=B,X=function(){te.postMessage(null)}}else X=function(){v(B,0)};function de(ie){M=ie,I||(I=!0,X())}function $(ie,O){D=v(function(){ie(s.unstable_now())},O)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(ie){ie.callback=null},s.unstable_continueExecution=function(){b||S||(b=!0,de(z))},s.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<ie?Math.floor(1e3/ie):5},s.unstable_getCurrentPriorityLevel=function(){return h},s.unstable_getFirstCallbackNode=function(){return t(g)},s.unstable_next=function(ie){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var ee=h;h=O;try{return ie()}finally{h=ee}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(ie,O){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var ee=h;h=ie;try{return O()}finally{h=ee}},s.unstable_scheduleCallback=function(ie,O,ee){var k=s.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?k+ee:k):ee=k,ie){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=ee+q,ie={id:_++,callback:O,priorityLevel:ie,startTime:ee,expirationTime:q,sortIndex:-1},ee>k?(ie.sortIndex=ee,e(m,ie),t(g)===null&&ie===t(m)&&(w?(y(D),D=-1):w=!0,$(P,ee-k))):(ie.sortIndex=q,e(g,ie),b||S||(b=!0,de(z))),ie},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(ie){var O=h;return function(){var ee=h;h=O;try{return ie.apply(this,arguments)}finally{h=ee}}}})(Qu)),Qu}var l0;function Iv(){return l0||(l0=1,Ju.exports=Lv()),Ju.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c0;function kv(){if(c0)return oi;c0=1;var s=wf(),e=Iv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},E={};function h(n){return g.call(E,n)?!0:g.call(_,n)?!1:m.test(n)?E[n]=!0:(_[n]=!0,!1)}function S(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function b(n,i,a,c){if(i===null||typeof i>"u"||S(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,a,c,p,x,C){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=x,this.removeEmptyString=C}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){v[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];v[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){v[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){v[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){v[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){v[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){v[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){v[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){v[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function N(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,N);v[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,N);v[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,N);v[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){v[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),v.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){v[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function U(n,i,a,c){var p=v.hasOwnProperty(i)?v[i]:null;(p!==null?p.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(b(i,a,p,c)&&(a=null),c||p===null?h(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):p.mustUseProperty?n[p.propertyName]=a===null?p.type===3?!1:"":a:(i=p.attributeName,c=p.attributeNamespace,a===null?n.removeAttribute(i):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),I=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),V=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),ie=Symbol.iterator;function O(n){return n===null||typeof n!="object"?null:(n=ie&&n[ie]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Object.assign,k;function q(n){if(k===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+n}var pe=!1;function Y(n,i){if(!n||pe)return"";pe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(Se){var c=Se}Reflect.construct(n,[],i)}else{try{i.call()}catch(Se){c=Se}n.call(i.prototype)}else{try{throw Error()}catch(Se){c=Se}n()}}catch(Se){if(Se&&c&&typeof Se.stack=="string"){for(var p=Se.stack.split(`
`),x=c.stack.split(`
`),C=p.length-1,G=x.length-1;1<=C&&0<=G&&p[C]!==x[G];)G--;for(;1<=C&&0<=G;C--,G--)if(p[C]!==x[G]){if(C!==1||G!==1)do if(C--,G--,0>G||p[C]!==x[G]){var Z=`
`+p[C].replace(" at new "," at ");return n.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",n.displayName)),Z}while(1<=C&&0<=G);break}}}finally{pe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?q(n):""}function oe(n){switch(n.tag){case 5:return q(n.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return n=Y(n.type,!1),n;case 11:return n=Y(n.type.render,!1),n;case 1:return n=Y(n.type,!0),n;default:return""}}function me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case M:return"Fragment";case I:return"Portal";case J:return"Profiler";case D:return"StrictMode";case X:return"Suspense";case F:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case W:return(n._context.displayName||"Context")+".Provider";case B:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case te:return i=n.displayName||null,i!==null?i:me(n.type)||"Memo";case de:i=n._payload,n=n._init;try{return me(n(i))}catch{}}return null}function ge(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return me(i);case 8:return i===D?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function be(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ie(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function it(n){var i=Ie(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,x=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return p.call(this)},set:function(C){c=""+C,x.call(this,C)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(C){c=""+C},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function $e(n){n._valueTracker||(n._valueTracker=it(n))}function De(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ie(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Ve(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Xe(n,i){var a=i.checked;return ee({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function nt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=be(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function _t(n,i){i=i.checked,i!=null&&U(n,"checked",i,!1)}function ht(n,i){_t(n,i);var a=be(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?At(n,i.type,a):i.hasOwnProperty("defaultValue")&&At(n,i.type,be(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function lt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function At(n,i,a){(i!=="number"||Ve(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var le=Array.isArray;function Mt(n,i,a,c){if(n=n.options,i){i={};for(var p=0;p<a.length;p++)i["$"+a[p]]=!0;for(a=0;a<n.length;a++)p=i.hasOwnProperty("$"+n[a].value),n[a].selected!==p&&(n[a].selected=p),p&&c&&(n[a].defaultSelected=!0)}else{for(a=""+be(a),i=null,p=0;p<n.length;p++){if(n[p].value===a){n[p].selected=!0,c&&(n[p].defaultSelected=!0);return}i!==null||n[p].disabled||(i=n[p])}i!==null&&(i.selected=!0)}}function jt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function an(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(le(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:be(a)}}function Q(n,i){var a=be(i.value),c=be(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function hn(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Tt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Tt(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ke,Rt=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,p){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,p)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ke=ke||document.createElement("div"),ke.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ke.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ye(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var ut={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},R=["Webkit","ms","Moz","O"];Object.keys(ut).forEach(function(n){R.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ut[i]=ut[n]})});function T(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||ut.hasOwnProperty(n)&&ut[n]?(""+i).trim():i+"px"}function se(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,p=T(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,p):n[a]=p}}var Pe=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Me(n,i){if(i){if(Pe[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Le(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Be=null;function _e(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var we=null,Oe=null,j=null;function Te(n){if(n=Ua(n)){if(typeof we!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Fo(i),we(n.stateNode,n.type,i))}}function ye(n){Oe?j?j.push(n):j=[n]:Oe=n}function Ce(){if(Oe){var n=Oe,i=j;if(j=Oe=null,Te(n),i)for(n=0;n<i.length;n++)Te(i[n])}}function he(n,i){return n(i)}function Ee(){}var Ge=!1;function Qe(n,i,a){if(Ge)return n(i,a);Ge=!0;try{return he(n,i,a)}finally{Ge=!1,(Oe!==null||j!==null)&&(Ee(),Ce())}}function Ae(n,i){var a=n.stateNode;if(a===null)return null;var c=Fo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Ke=!1;if(f)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){Ke=!0}}),window.addEventListener("test",rt,rt),window.removeEventListener("test",rt,rt)}catch{Ke=!1}function je(n,i,a,c,p,x,C,G,Z){var Se=Array.prototype.slice.call(arguments,3);try{i.apply(a,Se)}catch(Fe){this.onError(Fe)}}var pt=!1,Ht=null,Qt=!1,tn=null,on={onError:function(n){pt=!0,Ht=n}};function qt(n,i,a,c,p,x,C,G,Z){pt=!1,Ht=null,je.apply(on,arguments)}function Bn(n,i,a,c,p,x,C,G,Z){if(qt.apply(this,arguments),pt){if(pt){var Se=Ht;pt=!1,Ht=null}else throw Error(t(198));Qt||(Qt=!0,tn=Se)}}function wn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function nn(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function xt(n){if(wn(n)!==n)throw Error(t(188))}function Ut(n){var i=n.alternate;if(!i){if(i=wn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var p=a.return;if(p===null)break;var x=p.alternate;if(x===null){if(c=p.return,c!==null){a=c;continue}break}if(p.child===x.child){for(x=p.child;x;){if(x===a)return xt(p),n;if(x===c)return xt(p),i;x=x.sibling}throw Error(t(188))}if(a.return!==c.return)a=p,c=x;else{for(var C=!1,G=p.child;G;){if(G===a){C=!0,a=p,c=x;break}if(G===c){C=!0,c=p,a=x;break}G=G.sibling}if(!C){for(G=x.child;G;){if(G===a){C=!0,a=x,c=p;break}if(G===c){C=!0,c=x,a=p;break}G=G.sibling}if(!C)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Ct(n){return n=Ut(n),n!==null?Jt(n):null}function Jt(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Jt(n);if(i!==null)return i;n=n.sibling}return null}var en=e.unstable_scheduleCallback,Hn=e.unstable_cancelCallback,Gn=e.unstable_shouldYield,ei=e.unstable_requestPaint,Gt=e.unstable_now,lr=e.unstable_getCurrentPriorityLevel,cr=e.unstable_ImmediatePriority,ur=e.unstable_UserBlockingPriority,ji=e.unstable_NormalPriority,ln=e.unstable_LowPriority,A=e.unstable_IdlePriority,K=null,ce=null;function L(n){if(ce&&typeof ce.onCommitFiberRoot=="function")try{ce.onCommitFiberRoot(K,n,void 0,(n.current.flags&128)===128)}catch{}}var H=Math.clz32?Math.clz32:Re,re=Math.log,Ne=Math.LN2;function Re(n){return n>>>=0,n===0?32:31-(re(n)/Ne|0)|0}var ze=64,qe=4194304;function st(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function vt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,p=n.suspendedLanes,x=n.pingedLanes,C=a&268435455;if(C!==0){var G=C&~p;G!==0?c=st(G):(x&=C,x!==0&&(c=st(x)))}else C=a&~p,C!==0?c=st(C):x!==0&&(c=st(x));if(c===0)return 0;if(i!==0&&i!==c&&(i&p)===0&&(p=c&-c,x=i&-i,p>=x||p===16&&(x&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-H(i),p=1<<a,c|=n[a],i&=~p;return c}function Ze(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,p=n.expirationTimes,x=n.pendingLanes;0<x;){var C=31-H(x),G=1<<C,Z=p[C];Z===-1?((G&a)===0||(G&c)!==0)&&(p[C]=Ze(G,i)):Z<=i&&(n.expiredLanes|=G),x&=~G}}function rn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Xt(){var n=ze;return ze<<=1,(ze&4194240)===0&&(ze=64),n}function zt(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function dn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-H(i),n[i]=a}function et(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var p=31-H(a),x=1<<p;i[p]=0,c[p]=-1,n[p]=-1,a&=~x}}function yn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-H(a),p=1<<c;p&i|n[c]&i&&(n[c]|=i),a&=~p}}var ot=0;function Ci(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var vn,Wi,ti,ui,ae,bt=!1,Wt=[],It=null,Kt=null,Sn=null,$i=new Map,Pr=new Map,Xi=[],vc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bo(n,i){switch(n){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":$i.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pr.delete(i.pointerId)}}function as(n,i,a,c,p,x){return n===null||n.nativeEvent!==x?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:x,targetContainers:[p]},i!==null&&(i=Ua(i),i!==null&&Wi(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),n)}function _c(n,i,a,c,p){switch(i){case"focusin":return It=as(It,n,i,a,c,p),!0;case"dragenter":return Kt=as(Kt,n,i,a,c,p),!0;case"mouseover":return Sn=as(Sn,n,i,a,c,p),!0;case"pointerover":var x=p.pointerId;return $i.set(x,as($i.get(x)||null,n,i,a,c,p)),!0;case"gotpointercapture":return x=p.pointerId,Pr.set(x,as(Pr.get(x)||null,n,i,a,c,p)),!0}return!1}function wo(n){var i=ls(n.target);if(i!==null){var a=wn(i);if(a!==null){if(i=a.tag,i===13){if(i=nn(a),i!==null){n.blockedOn=i,ae(n.priority,function(){ti(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ps(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=bc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Be=c,a.target.dispatchEvent(c),Be=null}else return i=Ua(a),i!==null&&Wi(i),n.blockedOn=a,!1;i.shift()}return!0}function Mo(n,i,a){Ps(n)&&a.delete(i)}function yc(){bt=!1,It!==null&&Ps(It)&&(It=null),Kt!==null&&Ps(Kt)&&(Kt=null),Sn!==null&&Ps(Sn)&&(Sn=null),$i.forEach(Mo),Pr.forEach(Mo)}function os(n,i){n.blockedOn===i&&(n.blockedOn=null,bt||(bt=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,yc)))}function Ma(n){function i(p){return os(p,n)}if(0<Wt.length){os(Wt[0],n);for(var a=1;a<Wt.length;a++){var c=Wt[a];c.blockedOn===n&&(c.blockedOn=null)}}for(It!==null&&os(It,n),Kt!==null&&os(Kt,n),Sn!==null&&os(Sn,n),$i.forEach(i),Pr.forEach(i),a=0;a<Xi.length;a++)c=Xi[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Xi.length&&(a=Xi[0],a.blockedOn===null);)wo(a),a.blockedOn===null&&Xi.shift()}var Ds=P.ReactCurrentBatchConfig,Eo=!0;function Jg(n,i,a,c){var p=ot,x=Ds.transition;Ds.transition=null;try{ot=1,Sc(n,i,a,c)}finally{ot=p,Ds.transition=x}}function Qg(n,i,a,c){var p=ot,x=Ds.transition;Ds.transition=null;try{ot=4,Sc(n,i,a,c)}finally{ot=p,Ds.transition=x}}function Sc(n,i,a,c){if(Eo){var p=bc(n,i,a,c);if(p===null)Oc(n,i,c,To,a),bo(n,c);else if(_c(p,n,i,a,c))c.stopPropagation();else if(bo(n,c),i&4&&-1<vc.indexOf(n)){for(;p!==null;){var x=Ua(p);if(x!==null&&vn(x),x=bc(n,i,a,c),x===null&&Oc(n,i,c,To,a),x===p)break;p=x}p!==null&&c.stopPropagation()}else Oc(n,i,c,null,a)}}var To=null;function bc(n,i,a,c){if(To=null,n=_e(c),n=ls(n),n!==null)if(i=wn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=nn(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return To=n,null}function Vf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lr()){case cr:return 1;case ur:return 4;case ji:case ln:return 16;case A:return 536870912;default:return 16}default:return 16}}var Dr=null,wc=null,Co=null;function jf(){if(Co)return Co;var n,i=wc,a=i.length,c,p="value"in Dr?Dr.value:Dr.textContent,x=p.length;for(n=0;n<a&&i[n]===p[n];n++);var C=a-n;for(c=1;c<=C&&i[a-c]===p[x-c];c++);return Co=p.slice(n,1<c?1-c:void 0)}function Ao(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ro(){return!0}function Wf(){return!1}function di(n){function i(a,c,p,x,C){this._reactName=a,this._targetInst=p,this.type=c,this.nativeEvent=x,this.target=C,this.currentTarget=null;for(var G in n)n.hasOwnProperty(G)&&(a=n[G],this[G]=a?a(x):x[G]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Ro:Wf,this.isPropagationStopped=Wf,this}return ee(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ro)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ro)},persist:function(){},isPersistent:Ro}),i}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mc=di(Ls),Ea=ee({},Ls,{view:0,detail:0}),ex=di(Ea),Ec,Tc,Ta,No=ee({},Ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ac,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ta&&(Ta&&n.type==="mousemove"?(Ec=n.screenX-Ta.screenX,Tc=n.screenY-Ta.screenY):Tc=Ec=0,Ta=n),Ec)},movementY:function(n){return"movementY"in n?n.movementY:Tc}}),$f=di(No),tx=ee({},No,{dataTransfer:0}),nx=di(tx),ix=ee({},Ea,{relatedTarget:0}),Cc=di(ix),rx=ee({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),sx=di(rx),ax=ee({},Ls,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ox=di(ax),lx=ee({},Ls,{data:0}),Xf=di(lx),cx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ux={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fx(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=dx[n])?!!i[n]:!1}function Ac(){return fx}var hx=ee({},Ea,{key:function(n){if(n.key){var i=cx[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ao(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ux[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ac,charCode:function(n){return n.type==="keypress"?Ao(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ao(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),px=di(hx),mx=ee({},No,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yf=di(mx),gx=ee({},Ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ac}),xx=di(gx),vx=ee({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),_x=di(vx),yx=ee({},No,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Sx=di(yx),bx=[9,13,27,32],Rc=f&&"CompositionEvent"in window,Ca=null;f&&"documentMode"in document&&(Ca=document.documentMode);var wx=f&&"TextEvent"in window&&!Ca,qf=f&&(!Rc||Ca&&8<Ca&&11>=Ca),Kf=" ",Zf=!1;function Jf(n,i){switch(n){case"keyup":return bx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Is=!1;function Mx(n,i){switch(n){case"compositionend":return Qf(i);case"keypress":return i.which!==32?null:(Zf=!0,Kf);case"textInput":return n=i.data,n===Kf&&Zf?null:n;default:return null}}function Ex(n,i){if(Is)return n==="compositionend"||!Rc&&Jf(n,i)?(n=jf(),Co=wc=Dr=null,Is=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return qf&&i.locale!=="ko"?null:i.data;default:return null}}var Tx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Tx[n.type]:i==="textarea"}function th(n,i,a,c){ye(c),i=ko(i,"onChange"),0<i.length&&(a=new Mc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Aa=null,Ra=null;function Cx(n){_h(n,0)}function Po(n){var i=Os(n);if(De(i))return n}function Ax(n,i){if(n==="change")return i}var nh=!1;if(f){var Nc;if(f){var Pc="oninput"in document;if(!Pc){var ih=document.createElement("div");ih.setAttribute("oninput","return;"),Pc=typeof ih.oninput=="function"}Nc=Pc}else Nc=!1;nh=Nc&&(!document.documentMode||9<document.documentMode)}function rh(){Aa&&(Aa.detachEvent("onpropertychange",sh),Ra=Aa=null)}function sh(n){if(n.propertyName==="value"&&Po(Ra)){var i=[];th(i,Ra,n,_e(n)),Qe(Cx,i)}}function Rx(n,i,a){n==="focusin"?(rh(),Aa=i,Ra=a,Aa.attachEvent("onpropertychange",sh)):n==="focusout"&&rh()}function Nx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Po(Ra)}function Px(n,i){if(n==="click")return Po(i)}function Dx(n,i){if(n==="input"||n==="change")return Po(i)}function Lx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ai=typeof Object.is=="function"?Object.is:Lx;function Na(n,i){if(Ai(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var p=a[c];if(!g.call(i,p)||!Ai(n[p],i[p]))return!1}return!0}function ah(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function oh(n,i){var a=ah(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ah(a)}}function lh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?lh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function ch(){for(var n=window,i=Ve();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Ve(n.document)}return i}function Dc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Ix(n){var i=ch(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&lh(a.ownerDocument.documentElement,a)){if(c!==null&&Dc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var p=a.textContent.length,x=Math.min(c.start,p);c=c.end===void 0?x:Math.min(c.end,p),!n.extend&&x>c&&(p=c,c=x,x=p),p=oh(a,x);var C=oh(a,c);p&&C&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==C.node||n.focusOffset!==C.offset)&&(i=i.createRange(),i.setStart(p.node,p.offset),n.removeAllRanges(),x>c?(n.addRange(i),n.extend(C.node,C.offset)):(i.setEnd(C.node,C.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var kx=f&&"documentMode"in document&&11>=document.documentMode,ks=null,Lc=null,Pa=null,Ic=!1;function uh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ic||ks==null||ks!==Ve(c)||(c=ks,"selectionStart"in c&&Dc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Pa&&Na(Pa,c)||(Pa=c,c=ko(Lc,"onSelect"),0<c.length&&(i=new Mc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=ks)))}function Do(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Us={animationend:Do("Animation","AnimationEnd"),animationiteration:Do("Animation","AnimationIteration"),animationstart:Do("Animation","AnimationStart"),transitionend:Do("Transition","TransitionEnd")},kc={},dh={};f&&(dh=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function Lo(n){if(kc[n])return kc[n];if(!Us[n])return n;var i=Us[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in dh)return kc[n]=i[a];return n}var fh=Lo("animationend"),hh=Lo("animationiteration"),ph=Lo("animationstart"),mh=Lo("transitionend"),gh=new Map,xh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(n,i){gh.set(n,i),l(i,[n])}for(var Uc=0;Uc<xh.length;Uc++){var zc=xh[Uc],Ux=zc.toLowerCase(),zx=zc[0].toUpperCase()+zc.slice(1);Lr(Ux,"on"+zx)}Lr(fh,"onAnimationEnd"),Lr(hh,"onAnimationIteration"),Lr(ph,"onAnimationStart"),Lr("dblclick","onDoubleClick"),Lr("focusin","onFocus"),Lr("focusout","onBlur"),Lr(mh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));function vh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Bn(c,i,void 0,n),n.currentTarget=null}function _h(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],p=c.event;c=c.listeners;e:{var x=void 0;if(i)for(var C=c.length-1;0<=C;C--){var G=c[C],Z=G.instance,Se=G.currentTarget;if(G=G.listener,Z!==x&&p.isPropagationStopped())break e;vh(p,G,Se),x=Z}else for(C=0;C<c.length;C++){if(G=c[C],Z=G.instance,Se=G.currentTarget,G=G.listener,Z!==x&&p.isPropagationStopped())break e;vh(p,G,Se),x=Z}}}if(Qt)throw n=tn,Qt=!1,tn=null,n}function cn(n,i){var a=i[Wc];a===void 0&&(a=i[Wc]=new Set);var c=n+"__bubble";a.has(c)||(yh(i,n,2,!1),a.add(c))}function Fc(n,i,a){var c=0;i&&(c|=4),yh(a,n,c,i)}var Io="_reactListening"+Math.random().toString(36).slice(2);function La(n){if(!n[Io]){n[Io]=!0,r.forEach(function(a){a!=="selectionchange"&&(Fx.has(a)||Fc(a,!1,n),Fc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Io]||(i[Io]=!0,Fc("selectionchange",!1,i))}}function yh(n,i,a,c){switch(Vf(i)){case 1:var p=Jg;break;case 4:p=Qg;break;default:p=Sc}a=p.bind(null,i,a,n),p=void 0,!Ke||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),c?p!==void 0?n.addEventListener(i,a,{capture:!0,passive:p}):n.addEventListener(i,a,!0):p!==void 0?n.addEventListener(i,a,{passive:p}):n.addEventListener(i,a,!1)}function Oc(n,i,a,c,p){var x=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var C=c.tag;if(C===3||C===4){var G=c.stateNode.containerInfo;if(G===p||G.nodeType===8&&G.parentNode===p)break;if(C===4)for(C=c.return;C!==null;){var Z=C.tag;if((Z===3||Z===4)&&(Z=C.stateNode.containerInfo,Z===p||Z.nodeType===8&&Z.parentNode===p))return;C=C.return}for(;G!==null;){if(C=ls(G),C===null)return;if(Z=C.tag,Z===5||Z===6){c=x=C;continue e}G=G.parentNode}}c=c.return}Qe(function(){var Se=x,Fe=_e(a),He=[];e:{var Ue=gh.get(n);if(Ue!==void 0){var tt=Mc,ct=n;switch(n){case"keypress":if(Ao(a)===0)break e;case"keydown":case"keyup":tt=px;break;case"focusin":ct="focus",tt=Cc;break;case"focusout":ct="blur",tt=Cc;break;case"beforeblur":case"afterblur":tt=Cc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":tt=$f;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":tt=nx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":tt=xx;break;case fh:case hh:case ph:tt=sx;break;case mh:tt=_x;break;case"scroll":tt=ex;break;case"wheel":tt=Sx;break;case"copy":case"cut":case"paste":tt=ox;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":tt=Yf}var dt=(i&4)!==0,bn=!dt&&n==="scroll",ue=dt?Ue!==null?Ue+"Capture":null:Ue;dt=[];for(var ne=Se,fe;ne!==null;){fe=ne;var We=fe.stateNode;if(fe.tag===5&&We!==null&&(fe=We,ue!==null&&(We=Ae(ne,ue),We!=null&&dt.push(Ia(ne,We,fe)))),bn)break;ne=ne.return}0<dt.length&&(Ue=new tt(Ue,ct,null,a,Fe),He.push({event:Ue,listeners:dt}))}}if((i&7)===0){e:{if(Ue=n==="mouseover"||n==="pointerover",tt=n==="mouseout"||n==="pointerout",Ue&&a!==Be&&(ct=a.relatedTarget||a.fromElement)&&(ls(ct)||ct[dr]))break e;if((tt||Ue)&&(Ue=Fe.window===Fe?Fe:(Ue=Fe.ownerDocument)?Ue.defaultView||Ue.parentWindow:window,tt?(ct=a.relatedTarget||a.toElement,tt=Se,ct=ct?ls(ct):null,ct!==null&&(bn=wn(ct),ct!==bn||ct.tag!==5&&ct.tag!==6)&&(ct=null)):(tt=null,ct=Se),tt!==ct)){if(dt=$f,We="onMouseLeave",ue="onMouseEnter",ne="mouse",(n==="pointerout"||n==="pointerover")&&(dt=Yf,We="onPointerLeave",ue="onPointerEnter",ne="pointer"),bn=tt==null?Ue:Os(tt),fe=ct==null?Ue:Os(ct),Ue=new dt(We,ne+"leave",tt,a,Fe),Ue.target=bn,Ue.relatedTarget=fe,We=null,ls(Fe)===Se&&(dt=new dt(ue,ne+"enter",ct,a,Fe),dt.target=fe,dt.relatedTarget=bn,We=dt),bn=We,tt&&ct)t:{for(dt=tt,ue=ct,ne=0,fe=dt;fe;fe=zs(fe))ne++;for(fe=0,We=ue;We;We=zs(We))fe++;for(;0<ne-fe;)dt=zs(dt),ne--;for(;0<fe-ne;)ue=zs(ue),fe--;for(;ne--;){if(dt===ue||ue!==null&&dt===ue.alternate)break t;dt=zs(dt),ue=zs(ue)}dt=null}else dt=null;tt!==null&&Sh(He,Ue,tt,dt,!1),ct!==null&&bn!==null&&Sh(He,bn,ct,dt,!0)}}e:{if(Ue=Se?Os(Se):window,tt=Ue.nodeName&&Ue.nodeName.toLowerCase(),tt==="select"||tt==="input"&&Ue.type==="file")var ft=Ax;else if(eh(Ue))if(nh)ft=Dx;else{ft=Nx;var mt=Rx}else(tt=Ue.nodeName)&&tt.toLowerCase()==="input"&&(Ue.type==="checkbox"||Ue.type==="radio")&&(ft=Px);if(ft&&(ft=ft(n,Se))){th(He,ft,a,Fe);break e}mt&&mt(n,Ue,Se),n==="focusout"&&(mt=Ue._wrapperState)&&mt.controlled&&Ue.type==="number"&&At(Ue,"number",Ue.value)}switch(mt=Se?Os(Se):window,n){case"focusin":(eh(mt)||mt.contentEditable==="true")&&(ks=mt,Lc=Se,Pa=null);break;case"focusout":Pa=Lc=ks=null;break;case"mousedown":Ic=!0;break;case"contextmenu":case"mouseup":case"dragend":Ic=!1,uh(He,a,Fe);break;case"selectionchange":if(kx)break;case"keydown":case"keyup":uh(He,a,Fe)}var gt;if(Rc)e:{switch(n){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else Is?Jf(n,a)&&(St="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(St="onCompositionStart");St&&(qf&&a.locale!=="ko"&&(Is||St!=="onCompositionStart"?St==="onCompositionEnd"&&Is&&(gt=jf()):(Dr=Fe,wc="value"in Dr?Dr.value:Dr.textContent,Is=!0)),mt=ko(Se,St),0<mt.length&&(St=new Xf(St,n,null,a,Fe),He.push({event:St,listeners:mt}),gt?St.data=gt:(gt=Qf(a),gt!==null&&(St.data=gt)))),(gt=wx?Mx(n,a):Ex(n,a))&&(Se=ko(Se,"onBeforeInput"),0<Se.length&&(Fe=new Xf("onBeforeInput","beforeinput",null,a,Fe),He.push({event:Fe,listeners:Se}),Fe.data=gt))}_h(He,i)})}function Ia(n,i,a){return{instance:n,listener:i,currentTarget:a}}function ko(n,i){for(var a=i+"Capture",c=[];n!==null;){var p=n,x=p.stateNode;p.tag===5&&x!==null&&(p=x,x=Ae(n,a),x!=null&&c.unshift(Ia(n,x,p)),x=Ae(n,i),x!=null&&c.push(Ia(n,x,p))),n=n.return}return c}function zs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Sh(n,i,a,c,p){for(var x=i._reactName,C=[];a!==null&&a!==c;){var G=a,Z=G.alternate,Se=G.stateNode;if(Z!==null&&Z===c)break;G.tag===5&&Se!==null&&(G=Se,p?(Z=Ae(a,x),Z!=null&&C.unshift(Ia(a,Z,G))):p||(Z=Ae(a,x),Z!=null&&C.push(Ia(a,Z,G)))),a=a.return}C.length!==0&&n.push({event:i,listeners:C})}var Ox=/\r\n?/g,Bx=/\u0000|\uFFFD/g;function bh(n){return(typeof n=="string"?n:""+n).replace(Ox,`
`).replace(Bx,"")}function Uo(n,i,a){if(i=bh(i),bh(n)!==i&&a)throw Error(t(425))}function zo(){}var Bc=null,Hc=null;function Gc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Vc=typeof setTimeout=="function"?setTimeout:void 0,Hx=typeof clearTimeout=="function"?clearTimeout:void 0,wh=typeof Promise=="function"?Promise:void 0,Gx=typeof queueMicrotask=="function"?queueMicrotask:typeof wh<"u"?function(n){return wh.resolve(null).then(n).catch(Vx)}:Vc;function Vx(n){setTimeout(function(){throw n})}function jc(n,i){var a=i,c=0;do{var p=a.nextSibling;if(n.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(c===0){n.removeChild(p),Ma(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=p}while(a);Ma(i)}function Ir(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Mh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),Yi="__reactFiber$"+Fs,ka="__reactProps$"+Fs,dr="__reactContainer$"+Fs,Wc="__reactEvents$"+Fs,jx="__reactListeners$"+Fs,Wx="__reactHandles$"+Fs;function ls(n){var i=n[Yi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[dr]||a[Yi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Mh(n);n!==null;){if(a=n[Yi])return a;n=Mh(n)}return i}n=a,a=n.parentNode}return null}function Ua(n){return n=n[Yi]||n[dr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Os(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Fo(n){return n[ka]||null}var $c=[],Bs=-1;function kr(n){return{current:n}}function un(n){0>Bs||(n.current=$c[Bs],$c[Bs]=null,Bs--)}function sn(n,i){Bs++,$c[Bs]=n.current,n.current=i}var Ur={},Vn=kr(Ur),ni=kr(!1),cs=Ur;function Hs(n,i){var a=n.type.contextTypes;if(!a)return Ur;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var p={},x;for(x in a)p[x]=i[x];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=p),p}function ii(n){return n=n.childContextTypes,n!=null}function Oo(){un(ni),un(Vn)}function Eh(n,i,a){if(Vn.current!==Ur)throw Error(t(168));sn(Vn,i),sn(ni,a)}function Th(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var p in c)if(!(p in i))throw Error(t(108,ge(n)||"Unknown",p));return ee({},a,c)}function Bo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ur,cs=Vn.current,sn(Vn,n),sn(ni,ni.current),!0}function Ch(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Th(n,i,cs),c.__reactInternalMemoizedMergedChildContext=n,un(ni),un(Vn),sn(Vn,n)):un(ni),sn(ni,a)}var fr=null,Ho=!1,Xc=!1;function Ah(n){fr===null?fr=[n]:fr.push(n)}function $x(n){Ho=!0,Ah(n)}function zr(){if(!Xc&&fr!==null){Xc=!0;var n=0,i=ot;try{var a=fr;for(ot=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}fr=null,Ho=!1}catch(p){throw fr!==null&&(fr=fr.slice(n+1)),en(cr,zr),p}finally{ot=i,Xc=!1}}return null}var Gs=[],Vs=0,Go=null,Vo=0,_i=[],yi=0,us=null,hr=1,pr="";function ds(n,i){Gs[Vs++]=Vo,Gs[Vs++]=Go,Go=n,Vo=i}function Rh(n,i,a){_i[yi++]=hr,_i[yi++]=pr,_i[yi++]=us,us=n;var c=hr;n=pr;var p=32-H(c)-1;c&=~(1<<p),a+=1;var x=32-H(i)+p;if(30<x){var C=p-p%5;x=(c&(1<<C)-1).toString(32),c>>=C,p-=C,hr=1<<32-H(i)+p|a<<p|c,pr=x+n}else hr=1<<x|a<<p|c,pr=n}function Yc(n){n.return!==null&&(ds(n,1),Rh(n,1,0))}function qc(n){for(;n===Go;)Go=Gs[--Vs],Gs[Vs]=null,Vo=Gs[--Vs],Gs[Vs]=null;for(;n===us;)us=_i[--yi],_i[yi]=null,pr=_i[--yi],_i[yi]=null,hr=_i[--yi],_i[yi]=null}var fi=null,hi=null,fn=!1,Ri=null;function Nh(n,i){var a=Mi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Ph(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,fi=n,hi=Ir(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,fi=n,hi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=us!==null?{id:hr,overflow:pr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Mi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,fi=n,hi=null,!0):!1;default:return!1}}function Kc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Zc(n){if(fn){var i=hi;if(i){var a=i;if(!Ph(n,i)){if(Kc(n))throw Error(t(418));i=Ir(a.nextSibling);var c=fi;i&&Ph(n,i)?Nh(c,a):(n.flags=n.flags&-4097|2,fn=!1,fi=n)}}else{if(Kc(n))throw Error(t(418));n.flags=n.flags&-4097|2,fn=!1,fi=n}}}function Dh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;fi=n}function jo(n){if(n!==fi)return!1;if(!fn)return Dh(n),fn=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Gc(n.type,n.memoizedProps)),i&&(i=hi)){if(Kc(n))throw Lh(),Error(t(418));for(;i;)Nh(n,i),i=Ir(i.nextSibling)}if(Dh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){hi=Ir(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}hi=null}}else hi=fi?Ir(n.stateNode.nextSibling):null;return!0}function Lh(){for(var n=hi;n;)n=Ir(n.nextSibling)}function js(){hi=fi=null,fn=!1}function Jc(n){Ri===null?Ri=[n]:Ri.push(n)}var Xx=P.ReactCurrentBatchConfig;function za(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var p=c,x=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===x?i.ref:(i=function(C){var G=p.refs;C===null?delete G[x]:G[x]=C},i._stringRef=x,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Wo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Ih(n){var i=n._init;return i(n._payload)}function kh(n){function i(ue,ne){if(n){var fe=ue.deletions;fe===null?(ue.deletions=[ne],ue.flags|=16):fe.push(ne)}}function a(ue,ne){if(!n)return null;for(;ne!==null;)i(ue,ne),ne=ne.sibling;return null}function c(ue,ne){for(ue=new Map;ne!==null;)ne.key!==null?ue.set(ne.key,ne):ue.set(ne.index,ne),ne=ne.sibling;return ue}function p(ue,ne){return ue=Wr(ue,ne),ue.index=0,ue.sibling=null,ue}function x(ue,ne,fe){return ue.index=fe,n?(fe=ue.alternate,fe!==null?(fe=fe.index,fe<ne?(ue.flags|=2,ne):fe):(ue.flags|=2,ne)):(ue.flags|=1048576,ne)}function C(ue){return n&&ue.alternate===null&&(ue.flags|=2),ue}function G(ue,ne,fe,We){return ne===null||ne.tag!==6?(ne=Vu(fe,ue.mode,We),ne.return=ue,ne):(ne=p(ne,fe),ne.return=ue,ne)}function Z(ue,ne,fe,We){var ft=fe.type;return ft===M?Fe(ue,ne,fe.props.children,We,fe.key):ne!==null&&(ne.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===de&&Ih(ft)===ne.type)?(We=p(ne,fe.props),We.ref=za(ue,ne,fe),We.return=ue,We):(We=ml(fe.type,fe.key,fe.props,null,ue.mode,We),We.ref=za(ue,ne,fe),We.return=ue,We)}function Se(ue,ne,fe,We){return ne===null||ne.tag!==4||ne.stateNode.containerInfo!==fe.containerInfo||ne.stateNode.implementation!==fe.implementation?(ne=ju(fe,ue.mode,We),ne.return=ue,ne):(ne=p(ne,fe.children||[]),ne.return=ue,ne)}function Fe(ue,ne,fe,We,ft){return ne===null||ne.tag!==7?(ne=_s(fe,ue.mode,We,ft),ne.return=ue,ne):(ne=p(ne,fe),ne.return=ue,ne)}function He(ue,ne,fe){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return ne=Vu(""+ne,ue.mode,fe),ne.return=ue,ne;if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case z:return fe=ml(ne.type,ne.key,ne.props,null,ue.mode,fe),fe.ref=za(ue,null,ne),fe.return=ue,fe;case I:return ne=ju(ne,ue.mode,fe),ne.return=ue,ne;case de:var We=ne._init;return He(ue,We(ne._payload),fe)}if(le(ne)||O(ne))return ne=_s(ne,ue.mode,fe,null),ne.return=ue,ne;Wo(ue,ne)}return null}function Ue(ue,ne,fe,We){var ft=ne!==null?ne.key:null;if(typeof fe=="string"&&fe!==""||typeof fe=="number")return ft!==null?null:G(ue,ne,""+fe,We);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case z:return fe.key===ft?Z(ue,ne,fe,We):null;case I:return fe.key===ft?Se(ue,ne,fe,We):null;case de:return ft=fe._init,Ue(ue,ne,ft(fe._payload),We)}if(le(fe)||O(fe))return ft!==null?null:Fe(ue,ne,fe,We,null);Wo(ue,fe)}return null}function tt(ue,ne,fe,We,ft){if(typeof We=="string"&&We!==""||typeof We=="number")return ue=ue.get(fe)||null,G(ne,ue,""+We,ft);if(typeof We=="object"&&We!==null){switch(We.$$typeof){case z:return ue=ue.get(We.key===null?fe:We.key)||null,Z(ne,ue,We,ft);case I:return ue=ue.get(We.key===null?fe:We.key)||null,Se(ne,ue,We,ft);case de:var mt=We._init;return tt(ue,ne,fe,mt(We._payload),ft)}if(le(We)||O(We))return ue=ue.get(fe)||null,Fe(ne,ue,We,ft,null);Wo(ne,We)}return null}function ct(ue,ne,fe,We){for(var ft=null,mt=null,gt=ne,St=ne=0,Ln=null;gt!==null&&St<fe.length;St++){gt.index>St?(Ln=gt,gt=null):Ln=gt.sibling;var $t=Ue(ue,gt,fe[St],We);if($t===null){gt===null&&(gt=Ln);break}n&&gt&&$t.alternate===null&&i(ue,gt),ne=x($t,ne,St),mt===null?ft=$t:mt.sibling=$t,mt=$t,gt=Ln}if(St===fe.length)return a(ue,gt),fn&&ds(ue,St),ft;if(gt===null){for(;St<fe.length;St++)gt=He(ue,fe[St],We),gt!==null&&(ne=x(gt,ne,St),mt===null?ft=gt:mt.sibling=gt,mt=gt);return fn&&ds(ue,St),ft}for(gt=c(ue,gt);St<fe.length;St++)Ln=tt(gt,ue,St,fe[St],We),Ln!==null&&(n&&Ln.alternate!==null&&gt.delete(Ln.key===null?St:Ln.key),ne=x(Ln,ne,St),mt===null?ft=Ln:mt.sibling=Ln,mt=Ln);return n&&gt.forEach(function($r){return i(ue,$r)}),fn&&ds(ue,St),ft}function dt(ue,ne,fe,We){var ft=O(fe);if(typeof ft!="function")throw Error(t(150));if(fe=ft.call(fe),fe==null)throw Error(t(151));for(var mt=ft=null,gt=ne,St=ne=0,Ln=null,$t=fe.next();gt!==null&&!$t.done;St++,$t=fe.next()){gt.index>St?(Ln=gt,gt=null):Ln=gt.sibling;var $r=Ue(ue,gt,$t.value,We);if($r===null){gt===null&&(gt=Ln);break}n&&gt&&$r.alternate===null&&i(ue,gt),ne=x($r,ne,St),mt===null?ft=$r:mt.sibling=$r,mt=$r,gt=Ln}if($t.done)return a(ue,gt),fn&&ds(ue,St),ft;if(gt===null){for(;!$t.done;St++,$t=fe.next())$t=He(ue,$t.value,We),$t!==null&&(ne=x($t,ne,St),mt===null?ft=$t:mt.sibling=$t,mt=$t);return fn&&ds(ue,St),ft}for(gt=c(ue,gt);!$t.done;St++,$t=fe.next())$t=tt(gt,ue,St,$t.value,We),$t!==null&&(n&&$t.alternate!==null&&gt.delete($t.key===null?St:$t.key),ne=x($t,ne,St),mt===null?ft=$t:mt.sibling=$t,mt=$t);return n&&gt.forEach(function(Tv){return i(ue,Tv)}),fn&&ds(ue,St),ft}function bn(ue,ne,fe,We){if(typeof fe=="object"&&fe!==null&&fe.type===M&&fe.key===null&&(fe=fe.props.children),typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case z:e:{for(var ft=fe.key,mt=ne;mt!==null;){if(mt.key===ft){if(ft=fe.type,ft===M){if(mt.tag===7){a(ue,mt.sibling),ne=p(mt,fe.props.children),ne.return=ue,ue=ne;break e}}else if(mt.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===de&&Ih(ft)===mt.type){a(ue,mt.sibling),ne=p(mt,fe.props),ne.ref=za(ue,mt,fe),ne.return=ue,ue=ne;break e}a(ue,mt);break}else i(ue,mt);mt=mt.sibling}fe.type===M?(ne=_s(fe.props.children,ue.mode,We,fe.key),ne.return=ue,ue=ne):(We=ml(fe.type,fe.key,fe.props,null,ue.mode,We),We.ref=za(ue,ne,fe),We.return=ue,ue=We)}return C(ue);case I:e:{for(mt=fe.key;ne!==null;){if(ne.key===mt)if(ne.tag===4&&ne.stateNode.containerInfo===fe.containerInfo&&ne.stateNode.implementation===fe.implementation){a(ue,ne.sibling),ne=p(ne,fe.children||[]),ne.return=ue,ue=ne;break e}else{a(ue,ne);break}else i(ue,ne);ne=ne.sibling}ne=ju(fe,ue.mode,We),ne.return=ue,ue=ne}return C(ue);case de:return mt=fe._init,bn(ue,ne,mt(fe._payload),We)}if(le(fe))return ct(ue,ne,fe,We);if(O(fe))return dt(ue,ne,fe,We);Wo(ue,fe)}return typeof fe=="string"&&fe!==""||typeof fe=="number"?(fe=""+fe,ne!==null&&ne.tag===6?(a(ue,ne.sibling),ne=p(ne,fe),ne.return=ue,ue=ne):(a(ue,ne),ne=Vu(fe,ue.mode,We),ne.return=ue,ue=ne),C(ue)):a(ue,ne)}return bn}var Ws=kh(!0),Uh=kh(!1),$o=kr(null),Xo=null,$s=null,Qc=null;function eu(){Qc=$s=Xo=null}function tu(n){var i=$o.current;un($o),n._currentValue=i}function nu(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Xs(n,i){Xo=n,Qc=$s=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(ri=!0),n.firstContext=null)}function Si(n){var i=n._currentValue;if(Qc!==n)if(n={context:n,memoizedValue:i,next:null},$s===null){if(Xo===null)throw Error(t(308));$s=n,Xo.dependencies={lanes:0,firstContext:n}}else $s=$s.next=n;return i}var fs=null;function iu(n){fs===null?fs=[n]:fs.push(n)}function zh(n,i,a,c){var p=i.interleaved;return p===null?(a.next=a,iu(i)):(a.next=p.next,p.next=a),i.interleaved=a,mr(n,c)}function mr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Fr=!1;function ru(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function gr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Or(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Vt&2)!==0){var p=c.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),c.pending=i,mr(n,a)}return p=c.interleaved,p===null?(i.next=i,iu(c)):(i.next=p.next,p.next=i),c.interleaved=i,mr(n,a)}function Yo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,yn(n,a)}}function Oh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var p=null,x=null;if(a=a.firstBaseUpdate,a!==null){do{var C={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};x===null?p=x=C:x=x.next=C,a=a.next}while(a!==null);x===null?p=x=i:x=x.next=i}else p=x=i;a={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:x,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function qo(n,i,a,c){var p=n.updateQueue;Fr=!1;var x=p.firstBaseUpdate,C=p.lastBaseUpdate,G=p.shared.pending;if(G!==null){p.shared.pending=null;var Z=G,Se=Z.next;Z.next=null,C===null?x=Se:C.next=Se,C=Z;var Fe=n.alternate;Fe!==null&&(Fe=Fe.updateQueue,G=Fe.lastBaseUpdate,G!==C&&(G===null?Fe.firstBaseUpdate=Se:G.next=Se,Fe.lastBaseUpdate=Z))}if(x!==null){var He=p.baseState;C=0,Fe=Se=Z=null,G=x;do{var Ue=G.lane,tt=G.eventTime;if((c&Ue)===Ue){Fe!==null&&(Fe=Fe.next={eventTime:tt,lane:0,tag:G.tag,payload:G.payload,callback:G.callback,next:null});e:{var ct=n,dt=G;switch(Ue=i,tt=a,dt.tag){case 1:if(ct=dt.payload,typeof ct=="function"){He=ct.call(tt,He,Ue);break e}He=ct;break e;case 3:ct.flags=ct.flags&-65537|128;case 0:if(ct=dt.payload,Ue=typeof ct=="function"?ct.call(tt,He,Ue):ct,Ue==null)break e;He=ee({},He,Ue);break e;case 2:Fr=!0}}G.callback!==null&&G.lane!==0&&(n.flags|=64,Ue=p.effects,Ue===null?p.effects=[G]:Ue.push(G))}else tt={eventTime:tt,lane:Ue,tag:G.tag,payload:G.payload,callback:G.callback,next:null},Fe===null?(Se=Fe=tt,Z=He):Fe=Fe.next=tt,C|=Ue;if(G=G.next,G===null){if(G=p.shared.pending,G===null)break;Ue=G,G=Ue.next,Ue.next=null,p.lastBaseUpdate=Ue,p.shared.pending=null}}while(!0);if(Fe===null&&(Z=He),p.baseState=Z,p.firstBaseUpdate=Se,p.lastBaseUpdate=Fe,i=p.shared.interleaved,i!==null){p=i;do C|=p.lane,p=p.next;while(p!==i)}else x===null&&(p.shared.lanes=0);ms|=C,n.lanes=C,n.memoizedState=He}}function Bh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],p=c.callback;if(p!==null){if(c.callback=null,c=a,typeof p!="function")throw Error(t(191,p));p.call(c)}}}var Fa={},qi=kr(Fa),Oa=kr(Fa),Ba=kr(Fa);function hs(n){if(n===Fa)throw Error(t(174));return n}function su(n,i){switch(sn(Ba,i),sn(Oa,n),sn(qi,Fa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:kt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=kt(i,n)}un(qi),sn(qi,i)}function Ys(){un(qi),un(Oa),un(Ba)}function Hh(n){hs(Ba.current);var i=hs(qi.current),a=kt(i,n.type);i!==a&&(sn(Oa,n),sn(qi,a))}function au(n){Oa.current===n&&(un(qi),un(Oa))}var pn=kr(0);function Ko(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ou=[];function lu(){for(var n=0;n<ou.length;n++)ou[n]._workInProgressVersionPrimary=null;ou.length=0}var Zo=P.ReactCurrentDispatcher,cu=P.ReactCurrentBatchConfig,ps=0,mn=null,Cn=null,Pn=null,Jo=!1,Ha=!1,Ga=0,Yx=0;function jn(){throw Error(t(321))}function uu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Ai(n[a],i[a]))return!1;return!0}function du(n,i,a,c,p,x){if(ps=x,mn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Zo.current=n===null||n.memoizedState===null?Jx:Qx,n=a(c,p),Ha){x=0;do{if(Ha=!1,Ga=0,25<=x)throw Error(t(301));x+=1,Pn=Cn=null,i.updateQueue=null,Zo.current=ev,n=a(c,p)}while(Ha)}if(Zo.current=tl,i=Cn!==null&&Cn.next!==null,ps=0,Pn=Cn=mn=null,Jo=!1,i)throw Error(t(300));return n}function fu(){var n=Ga!==0;return Ga=0,n}function Ki(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pn===null?mn.memoizedState=Pn=n:Pn=Pn.next=n,Pn}function bi(){if(Cn===null){var n=mn.alternate;n=n!==null?n.memoizedState:null}else n=Cn.next;var i=Pn===null?mn.memoizedState:Pn.next;if(i!==null)Pn=i,Cn=n;else{if(n===null)throw Error(t(310));Cn=n,n={memoizedState:Cn.memoizedState,baseState:Cn.baseState,baseQueue:Cn.baseQueue,queue:Cn.queue,next:null},Pn===null?mn.memoizedState=Pn=n:Pn=Pn.next=n}return Pn}function Va(n,i){return typeof i=="function"?i(n):i}function hu(n){var i=bi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Cn,p=c.baseQueue,x=a.pending;if(x!==null){if(p!==null){var C=p.next;p.next=x.next,x.next=C}c.baseQueue=p=x,a.pending=null}if(p!==null){x=p.next,c=c.baseState;var G=C=null,Z=null,Se=x;do{var Fe=Se.lane;if((ps&Fe)===Fe)Z!==null&&(Z=Z.next={lane:0,action:Se.action,hasEagerState:Se.hasEagerState,eagerState:Se.eagerState,next:null}),c=Se.hasEagerState?Se.eagerState:n(c,Se.action);else{var He={lane:Fe,action:Se.action,hasEagerState:Se.hasEagerState,eagerState:Se.eagerState,next:null};Z===null?(G=Z=He,C=c):Z=Z.next=He,mn.lanes|=Fe,ms|=Fe}Se=Se.next}while(Se!==null&&Se!==x);Z===null?C=c:Z.next=G,Ai(c,i.memoizedState)||(ri=!0),i.memoizedState=c,i.baseState=C,i.baseQueue=Z,a.lastRenderedState=c}if(n=a.interleaved,n!==null){p=n;do x=p.lane,mn.lanes|=x,ms|=x,p=p.next;while(p!==n)}else p===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function pu(n){var i=bi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,p=a.pending,x=i.memoizedState;if(p!==null){a.pending=null;var C=p=p.next;do x=n(x,C.action),C=C.next;while(C!==p);Ai(x,i.memoizedState)||(ri=!0),i.memoizedState=x,i.baseQueue===null&&(i.baseState=x),a.lastRenderedState=x}return[x,c]}function Gh(){}function Vh(n,i){var a=mn,c=bi(),p=i(),x=!Ai(c.memoizedState,p);if(x&&(c.memoizedState=p,ri=!0),c=c.queue,mu($h.bind(null,a,c,n),[n]),c.getSnapshot!==i||x||Pn!==null&&Pn.memoizedState.tag&1){if(a.flags|=2048,ja(9,Wh.bind(null,a,c,p,i),void 0,null),Dn===null)throw Error(t(349));(ps&30)!==0||jh(a,i,p)}return p}function jh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=mn.updateQueue,i===null?(i={lastEffect:null,stores:null},mn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Wh(n,i,a,c){i.value=a,i.getSnapshot=c,Xh(i)&&Yh(n)}function $h(n,i,a){return a(function(){Xh(i)&&Yh(n)})}function Xh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Ai(n,a)}catch{return!0}}function Yh(n){var i=mr(n,1);i!==null&&Li(i,n,1,-1)}function qh(n){var i=Ki();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:n},i.queue=n,n=n.dispatch=Zx.bind(null,mn,n),[i.memoizedState,n]}function ja(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=mn.updateQueue,i===null?(i={lastEffect:null,stores:null},mn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Kh(){return bi().memoizedState}function Qo(n,i,a,c){var p=Ki();mn.flags|=n,p.memoizedState=ja(1|i,a,void 0,c===void 0?null:c)}function el(n,i,a,c){var p=bi();c=c===void 0?null:c;var x=void 0;if(Cn!==null){var C=Cn.memoizedState;if(x=C.destroy,c!==null&&uu(c,C.deps)){p.memoizedState=ja(i,a,x,c);return}}mn.flags|=n,p.memoizedState=ja(1|i,a,x,c)}function Zh(n,i){return Qo(8390656,8,n,i)}function mu(n,i){return el(2048,8,n,i)}function Jh(n,i){return el(4,2,n,i)}function Qh(n,i){return el(4,4,n,i)}function ep(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function tp(n,i,a){return a=a!=null?a.concat([n]):null,el(4,4,ep.bind(null,i,n),a)}function gu(){}function np(n,i){var a=bi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&uu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function ip(n,i){var a=bi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&uu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function rp(n,i,a){return(ps&21)===0?(n.baseState&&(n.baseState=!1,ri=!0),n.memoizedState=a):(Ai(a,i)||(a=Xt(),mn.lanes|=a,ms|=a,n.baseState=!0),i)}function qx(n,i){var a=ot;ot=a!==0&&4>a?a:4,n(!0);var c=cu.transition;cu.transition={};try{n(!1),i()}finally{ot=a,cu.transition=c}}function sp(){return bi().memoizedState}function Kx(n,i,a){var c=Vr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},ap(n))op(i,a);else if(a=zh(n,i,a,c),a!==null){var p=Jn();Li(a,n,c,p),lp(a,i,c)}}function Zx(n,i,a){var c=Vr(n),p={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(ap(n))op(i,p);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=i.lastRenderedReducer,x!==null))try{var C=i.lastRenderedState,G=x(C,a);if(p.hasEagerState=!0,p.eagerState=G,Ai(G,C)){var Z=i.interleaved;Z===null?(p.next=p,iu(i)):(p.next=Z.next,Z.next=p),i.interleaved=p;return}}catch{}finally{}a=zh(n,i,p,c),a!==null&&(p=Jn(),Li(a,n,c,p),lp(a,i,c))}}function ap(n){var i=n.alternate;return n===mn||i!==null&&i===mn}function op(n,i){Ha=Jo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function lp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,yn(n,a)}}var tl={readContext:Si,useCallback:jn,useContext:jn,useEffect:jn,useImperativeHandle:jn,useInsertionEffect:jn,useLayoutEffect:jn,useMemo:jn,useReducer:jn,useRef:jn,useState:jn,useDebugValue:jn,useDeferredValue:jn,useTransition:jn,useMutableSource:jn,useSyncExternalStore:jn,useId:jn,unstable_isNewReconciler:!1},Jx={readContext:Si,useCallback:function(n,i){return Ki().memoizedState=[n,i===void 0?null:i],n},useContext:Si,useEffect:Zh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Qo(4194308,4,ep.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Qo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Qo(4,2,n,i)},useMemo:function(n,i){var a=Ki();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ki();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Kx.bind(null,mn,n),[c.memoizedState,n]},useRef:function(n){var i=Ki();return n={current:n},i.memoizedState=n},useState:qh,useDebugValue:gu,useDeferredValue:function(n){return Ki().memoizedState=n},useTransition:function(){var n=qh(!1),i=n[0];return n=qx.bind(null,n[1]),Ki().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=mn,p=Ki();if(fn){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Dn===null)throw Error(t(349));(ps&30)!==0||jh(c,i,a)}p.memoizedState=a;var x={value:a,getSnapshot:i};return p.queue=x,Zh($h.bind(null,c,x,n),[n]),c.flags|=2048,ja(9,Wh.bind(null,c,x,a,i),void 0,null),a},useId:function(){var n=Ki(),i=Dn.identifierPrefix;if(fn){var a=pr,c=hr;a=(c&~(1<<32-H(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ga++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Yx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Qx={readContext:Si,useCallback:np,useContext:Si,useEffect:mu,useImperativeHandle:tp,useInsertionEffect:Jh,useLayoutEffect:Qh,useMemo:ip,useReducer:hu,useRef:Kh,useState:function(){return hu(Va)},useDebugValue:gu,useDeferredValue:function(n){var i=bi();return rp(i,Cn.memoizedState,n)},useTransition:function(){var n=hu(Va)[0],i=bi().memoizedState;return[n,i]},useMutableSource:Gh,useSyncExternalStore:Vh,useId:sp,unstable_isNewReconciler:!1},ev={readContext:Si,useCallback:np,useContext:Si,useEffect:mu,useImperativeHandle:tp,useInsertionEffect:Jh,useLayoutEffect:Qh,useMemo:ip,useReducer:pu,useRef:Kh,useState:function(){return pu(Va)},useDebugValue:gu,useDeferredValue:function(n){var i=bi();return Cn===null?i.memoizedState=n:rp(i,Cn.memoizedState,n)},useTransition:function(){var n=pu(Va)[0],i=bi().memoizedState;return[n,i]},useMutableSource:Gh,useSyncExternalStore:Vh,useId:sp,unstable_isNewReconciler:!1};function Ni(n,i){if(n&&n.defaultProps){i=ee({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function xu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ee({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var nl={isMounted:function(n){return(n=n._reactInternals)?wn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Jn(),p=Vr(n),x=gr(c,p);x.payload=i,a!=null&&(x.callback=a),i=Or(n,x,p),i!==null&&(Li(i,n,p,c),Yo(i,n,p))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Jn(),p=Vr(n),x=gr(c,p);x.tag=1,x.payload=i,a!=null&&(x.callback=a),i=Or(n,x,p),i!==null&&(Li(i,n,p,c),Yo(i,n,p))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Jn(),c=Vr(n),p=gr(a,c);p.tag=2,i!=null&&(p.callback=i),i=Or(n,p,c),i!==null&&(Li(i,n,c,a),Yo(i,n,c))}};function cp(n,i,a,c,p,x,C){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,x,C):i.prototype&&i.prototype.isPureReactComponent?!Na(a,c)||!Na(p,x):!0}function up(n,i,a){var c=!1,p=Ur,x=i.contextType;return typeof x=="object"&&x!==null?x=Si(x):(p=ii(i)?cs:Vn.current,c=i.contextTypes,x=(c=c!=null)?Hs(n,p):Ur),i=new i(a,x),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=nl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=x),i}function dp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&nl.enqueueReplaceState(i,i.state,null)}function vu(n,i,a,c){var p=n.stateNode;p.props=a,p.state=n.memoizedState,p.refs={},ru(n);var x=i.contextType;typeof x=="object"&&x!==null?p.context=Si(x):(x=ii(i)?cs:Vn.current,p.context=Hs(n,x)),p.state=n.memoizedState,x=i.getDerivedStateFromProps,typeof x=="function"&&(xu(n,i,x,a),p.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(i=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),i!==p.state&&nl.enqueueReplaceState(p,p.state,null),qo(n,a,p,c),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function qs(n,i){try{var a="",c=i;do a+=oe(c),c=c.return;while(c);var p=a}catch(x){p=`
Error generating stack: `+x.message+`
`+x.stack}return{value:n,source:i,stack:p,digest:null}}function _u(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function yu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var tv=typeof WeakMap=="function"?WeakMap:Map;function fp(n,i,a){a=gr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){cl||(cl=!0,ku=c),yu(n,i)},a}function hp(n,i,a){a=gr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var p=i.value;a.payload=function(){return c(p)},a.callback=function(){yu(n,i)}}var x=n.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(a.callback=function(){yu(n,i),typeof c!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var C=i.stack;this.componentDidCatch(i.value,{componentStack:C!==null?C:""})}),a}function pp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new tv;var p=new Set;c.set(i,p)}else p=c.get(i),p===void 0&&(p=new Set,c.set(i,p));p.has(a)||(p.add(a),n=mv.bind(null,n,i,a),i.then(n,n))}function mp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function gp(n,i,a,c,p){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=gr(-1,1),i.tag=2,Or(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var nv=P.ReactCurrentOwner,ri=!1;function Zn(n,i,a,c){i.child=n===null?Uh(i,null,a,c):Ws(i,n.child,a,c)}function xp(n,i,a,c,p){a=a.render;var x=i.ref;return Xs(i,p),c=du(n,i,a,c,x,p),a=fu(),n!==null&&!ri?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,xr(n,i,p)):(fn&&a&&Yc(i),i.flags|=1,Zn(n,i,c,p),i.child)}function vp(n,i,a,c,p){if(n===null){var x=a.type;return typeof x=="function"&&!Gu(x)&&x.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=x,_p(n,i,x,c,p)):(n=ml(a.type,null,c,i,i.mode,p),n.ref=i.ref,n.return=i,i.child=n)}if(x=n.child,(n.lanes&p)===0){var C=x.memoizedProps;if(a=a.compare,a=a!==null?a:Na,a(C,c)&&n.ref===i.ref)return xr(n,i,p)}return i.flags|=1,n=Wr(x,c),n.ref=i.ref,n.return=i,i.child=n}function _p(n,i,a,c,p){if(n!==null){var x=n.memoizedProps;if(Na(x,c)&&n.ref===i.ref)if(ri=!1,i.pendingProps=c=x,(n.lanes&p)!==0)(n.flags&131072)!==0&&(ri=!0);else return i.lanes=n.lanes,xr(n,i,p)}return Su(n,i,a,c,p)}function yp(n,i,a){var c=i.pendingProps,p=c.children,x=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},sn(Zs,pi),pi|=a;else{if((a&1073741824)===0)return n=x!==null?x.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,sn(Zs,pi),pi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=x!==null?x.baseLanes:a,sn(Zs,pi),pi|=c}else x!==null?(c=x.baseLanes|a,i.memoizedState=null):c=a,sn(Zs,pi),pi|=c;return Zn(n,i,p,a),i.child}function Sp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Su(n,i,a,c,p){var x=ii(a)?cs:Vn.current;return x=Hs(i,x),Xs(i,p),a=du(n,i,a,c,x,p),c=fu(),n!==null&&!ri?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,xr(n,i,p)):(fn&&c&&Yc(i),i.flags|=1,Zn(n,i,a,p),i.child)}function bp(n,i,a,c,p){if(ii(a)){var x=!0;Bo(i)}else x=!1;if(Xs(i,p),i.stateNode===null)rl(n,i),up(i,a,c),vu(i,a,c,p),c=!0;else if(n===null){var C=i.stateNode,G=i.memoizedProps;C.props=G;var Z=C.context,Se=a.contextType;typeof Se=="object"&&Se!==null?Se=Si(Se):(Se=ii(a)?cs:Vn.current,Se=Hs(i,Se));var Fe=a.getDerivedStateFromProps,He=typeof Fe=="function"||typeof C.getSnapshotBeforeUpdate=="function";He||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(G!==c||Z!==Se)&&dp(i,C,c,Se),Fr=!1;var Ue=i.memoizedState;C.state=Ue,qo(i,c,C,p),Z=i.memoizedState,G!==c||Ue!==Z||ni.current||Fr?(typeof Fe=="function"&&(xu(i,a,Fe,c),Z=i.memoizedState),(G=Fr||cp(i,a,G,c,Ue,Z,Se))?(He||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(i.flags|=4194308)):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=Z),C.props=c,C.state=Z,C.context=Se,c=G):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{C=i.stateNode,Fh(n,i),G=i.memoizedProps,Se=i.type===i.elementType?G:Ni(i.type,G),C.props=Se,He=i.pendingProps,Ue=C.context,Z=a.contextType,typeof Z=="object"&&Z!==null?Z=Si(Z):(Z=ii(a)?cs:Vn.current,Z=Hs(i,Z));var tt=a.getDerivedStateFromProps;(Fe=typeof tt=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(G!==He||Ue!==Z)&&dp(i,C,c,Z),Fr=!1,Ue=i.memoizedState,C.state=Ue,qo(i,c,C,p);var ct=i.memoizedState;G!==He||Ue!==ct||ni.current||Fr?(typeof tt=="function"&&(xu(i,a,tt,c),ct=i.memoizedState),(Se=Fr||cp(i,a,Se,c,Ue,ct,Z)||!1)?(Fe||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(c,ct,Z),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(c,ct,Z)),typeof C.componentDidUpdate=="function"&&(i.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof C.componentDidUpdate!="function"||G===n.memoizedProps&&Ue===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||G===n.memoizedProps&&Ue===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ct),C.props=c,C.state=ct,C.context=Z,c=Se):(typeof C.componentDidUpdate!="function"||G===n.memoizedProps&&Ue===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||G===n.memoizedProps&&Ue===n.memoizedState||(i.flags|=1024),c=!1)}return bu(n,i,a,c,x,p)}function bu(n,i,a,c,p,x){Sp(n,i);var C=(i.flags&128)!==0;if(!c&&!C)return p&&Ch(i,a,!1),xr(n,i,x);c=i.stateNode,nv.current=i;var G=C&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&C?(i.child=Ws(i,n.child,null,x),i.child=Ws(i,null,G,x)):Zn(n,i,G,x),i.memoizedState=c.state,p&&Ch(i,a,!0),i.child}function wp(n){var i=n.stateNode;i.pendingContext?Eh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Eh(n,i.context,!1),su(n,i.containerInfo)}function Mp(n,i,a,c,p){return js(),Jc(p),i.flags|=256,Zn(n,i,a,c),i.child}var wu={dehydrated:null,treeContext:null,retryLane:0};function Mu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Ep(n,i,a){var c=i.pendingProps,p=pn.current,x=!1,C=(i.flags&128)!==0,G;if((G=C)||(G=n!==null&&n.memoizedState===null?!1:(p&2)!==0),G?(x=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),sn(pn,p&1),n===null)return Zc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(C=c.children,n=c.fallback,x?(c=i.mode,x=i.child,C={mode:"hidden",children:C},(c&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=C):x=gl(C,c,0,null),n=_s(n,c,a,null),x.return=i,n.return=i,x.sibling=n,i.child=x,i.child.memoizedState=Mu(a),i.memoizedState=wu,n):Eu(i,C));if(p=n.memoizedState,p!==null&&(G=p.dehydrated,G!==null))return iv(n,i,C,c,G,p,a);if(x){x=c.fallback,C=i.mode,p=n.child,G=p.sibling;var Z={mode:"hidden",children:c.children};return(C&1)===0&&i.child!==p?(c=i.child,c.childLanes=0,c.pendingProps=Z,i.deletions=null):(c=Wr(p,Z),c.subtreeFlags=p.subtreeFlags&14680064),G!==null?x=Wr(G,x):(x=_s(x,C,a,null),x.flags|=2),x.return=i,c.return=i,c.sibling=x,i.child=c,c=x,x=i.child,C=n.child.memoizedState,C=C===null?Mu(a):{baseLanes:C.baseLanes|a,cachePool:null,transitions:C.transitions},x.memoizedState=C,x.childLanes=n.childLanes&~a,i.memoizedState=wu,c}return x=n.child,n=x.sibling,c=Wr(x,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Eu(n,i){return i=gl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function il(n,i,a,c){return c!==null&&Jc(c),Ws(i,n.child,null,a),n=Eu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function iv(n,i,a,c,p,x,C){if(a)return i.flags&256?(i.flags&=-257,c=_u(Error(t(422))),il(n,i,C,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(x=c.fallback,p=i.mode,c=gl({mode:"visible",children:c.children},p,0,null),x=_s(x,p,C,null),x.flags|=2,c.return=i,x.return=i,c.sibling=x,i.child=c,(i.mode&1)!==0&&Ws(i,n.child,null,C),i.child.memoizedState=Mu(C),i.memoizedState=wu,x);if((i.mode&1)===0)return il(n,i,C,null);if(p.data==="$!"){if(c=p.nextSibling&&p.nextSibling.dataset,c)var G=c.dgst;return c=G,x=Error(t(419)),c=_u(x,c,void 0),il(n,i,C,c)}if(G=(C&n.childLanes)!==0,ri||G){if(c=Dn,c!==null){switch(C&-C){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(c.suspendedLanes|C))!==0?0:p,p!==0&&p!==x.retryLane&&(x.retryLane=p,mr(n,p),Li(c,n,p,-1))}return Hu(),c=_u(Error(t(421))),il(n,i,C,c)}return p.data==="$?"?(i.flags|=128,i.child=n.child,i=gv.bind(null,n),p._reactRetry=i,null):(n=x.treeContext,hi=Ir(p.nextSibling),fi=i,fn=!0,Ri=null,n!==null&&(_i[yi++]=hr,_i[yi++]=pr,_i[yi++]=us,hr=n.id,pr=n.overflow,us=i),i=Eu(i,c.children),i.flags|=4096,i)}function Tp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),nu(n.return,i,a)}function Tu(n,i,a,c,p){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:p}:(x.isBackwards=i,x.rendering=null,x.renderingStartTime=0,x.last=c,x.tail=a,x.tailMode=p)}function Cp(n,i,a){var c=i.pendingProps,p=c.revealOrder,x=c.tail;if(Zn(n,i,c.children,a),c=pn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Tp(n,a,i);else if(n.tag===19)Tp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(sn(pn,c),(i.mode&1)===0)i.memoizedState=null;else switch(p){case"forwards":for(a=i.child,p=null;a!==null;)n=a.alternate,n!==null&&Ko(n)===null&&(p=a),a=a.sibling;a=p,a===null?(p=i.child,i.child=null):(p=a.sibling,a.sibling=null),Tu(i,!1,p,a,x);break;case"backwards":for(a=null,p=i.child,i.child=null;p!==null;){if(n=p.alternate,n!==null&&Ko(n)===null){i.child=p;break}n=p.sibling,p.sibling=a,a=p,p=n}Tu(i,!0,a,null,x);break;case"together":Tu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function rl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function xr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ms|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Wr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Wr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function rv(n,i,a){switch(i.tag){case 3:wp(i),js();break;case 5:Hh(i);break;case 1:ii(i.type)&&Bo(i);break;case 4:su(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,p=i.memoizedProps.value;sn($o,c._currentValue),c._currentValue=p;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(sn(pn,pn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Ep(n,i,a):(sn(pn,pn.current&1),n=xr(n,i,a),n!==null?n.sibling:null);sn(pn,pn.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Cp(n,i,a);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),sn(pn,pn.current),c)break;return null;case 22:case 23:return i.lanes=0,yp(n,i,a)}return xr(n,i,a)}var Ap,Cu,Rp,Np;Ap=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Cu=function(){},Rp=function(n,i,a,c){var p=n.memoizedProps;if(p!==c){n=i.stateNode,hs(qi.current);var x=null;switch(a){case"input":p=Xe(n,p),c=Xe(n,c),x=[];break;case"select":p=ee({},p,{value:void 0}),c=ee({},c,{value:void 0}),x=[];break;case"textarea":p=jt(n,p),c=jt(n,c),x=[];break;default:typeof p.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=zo)}Me(a,c);var C;a=null;for(Se in p)if(!c.hasOwnProperty(Se)&&p.hasOwnProperty(Se)&&p[Se]!=null)if(Se==="style"){var G=p[Se];for(C in G)G.hasOwnProperty(C)&&(a||(a={}),a[C]="")}else Se!=="dangerouslySetInnerHTML"&&Se!=="children"&&Se!=="suppressContentEditableWarning"&&Se!=="suppressHydrationWarning"&&Se!=="autoFocus"&&(o.hasOwnProperty(Se)?x||(x=[]):(x=x||[]).push(Se,null));for(Se in c){var Z=c[Se];if(G=p!=null?p[Se]:void 0,c.hasOwnProperty(Se)&&Z!==G&&(Z!=null||G!=null))if(Se==="style")if(G){for(C in G)!G.hasOwnProperty(C)||Z&&Z.hasOwnProperty(C)||(a||(a={}),a[C]="");for(C in Z)Z.hasOwnProperty(C)&&G[C]!==Z[C]&&(a||(a={}),a[C]=Z[C])}else a||(x||(x=[]),x.push(Se,a)),a=Z;else Se==="dangerouslySetInnerHTML"?(Z=Z?Z.__html:void 0,G=G?G.__html:void 0,Z!=null&&G!==Z&&(x=x||[]).push(Se,Z)):Se==="children"?typeof Z!="string"&&typeof Z!="number"||(x=x||[]).push(Se,""+Z):Se!=="suppressContentEditableWarning"&&Se!=="suppressHydrationWarning"&&(o.hasOwnProperty(Se)?(Z!=null&&Se==="onScroll"&&cn("scroll",n),x||G===Z||(x=[])):(x=x||[]).push(Se,Z))}a&&(x=x||[]).push("style",a);var Se=x;(i.updateQueue=Se)&&(i.flags|=4)}},Np=function(n,i,a,c){a!==c&&(i.flags|=4)};function Wa(n,i){if(!fn)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Wn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var p=n.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags&14680064,c|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function sv(n,i,a){var c=i.pendingProps;switch(qc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wn(i),null;case 1:return ii(i.type)&&Oo(),Wn(i),null;case 3:return c=i.stateNode,Ys(),un(ni),un(Vn),lu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(jo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ri!==null&&(Fu(Ri),Ri=null))),Cu(n,i),Wn(i),null;case 5:au(i);var p=hs(Ba.current);if(a=i.type,n!==null&&i.stateNode!=null)Rp(n,i,a,c,p),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Wn(i),null}if(n=hs(qi.current),jo(i)){c=i.stateNode,a=i.type;var x=i.memoizedProps;switch(c[Yi]=i,c[ka]=x,n=(i.mode&1)!==0,a){case"dialog":cn("cancel",c),cn("close",c);break;case"iframe":case"object":case"embed":cn("load",c);break;case"video":case"audio":for(p=0;p<Da.length;p++)cn(Da[p],c);break;case"source":cn("error",c);break;case"img":case"image":case"link":cn("error",c),cn("load",c);break;case"details":cn("toggle",c);break;case"input":nt(c,x),cn("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!x.multiple},cn("invalid",c);break;case"textarea":an(c,x),cn("invalid",c)}Me(a,x),p=null;for(var C in x)if(x.hasOwnProperty(C)){var G=x[C];C==="children"?typeof G=="string"?c.textContent!==G&&(x.suppressHydrationWarning!==!0&&Uo(c.textContent,G,n),p=["children",G]):typeof G=="number"&&c.textContent!==""+G&&(x.suppressHydrationWarning!==!0&&Uo(c.textContent,G,n),p=["children",""+G]):o.hasOwnProperty(C)&&G!=null&&C==="onScroll"&&cn("scroll",c)}switch(a){case"input":$e(c),lt(c,x,!0);break;case"textarea":$e(c),hn(c);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(c.onclick=zo)}c=p,i.updateQueue=c,c!==null&&(i.flags|=4)}else{C=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Tt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=C.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=C.createElement(a,{is:c.is}):(n=C.createElement(a),a==="select"&&(C=n,c.multiple?C.multiple=!0:c.size&&(C.size=c.size))):n=C.createElementNS(n,a),n[Yi]=i,n[ka]=c,Ap(n,i,!1,!1),i.stateNode=n;e:{switch(C=Le(a,c),a){case"dialog":cn("cancel",n),cn("close",n),p=c;break;case"iframe":case"object":case"embed":cn("load",n),p=c;break;case"video":case"audio":for(p=0;p<Da.length;p++)cn(Da[p],n);p=c;break;case"source":cn("error",n),p=c;break;case"img":case"image":case"link":cn("error",n),cn("load",n),p=c;break;case"details":cn("toggle",n),p=c;break;case"input":nt(n,c),p=Xe(n,c),cn("invalid",n);break;case"option":p=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},p=ee({},c,{value:void 0}),cn("invalid",n);break;case"textarea":an(n,c),p=jt(n,c),cn("invalid",n);break;default:p=c}Me(a,p),G=p;for(x in G)if(G.hasOwnProperty(x)){var Z=G[x];x==="style"?se(n,Z):x==="dangerouslySetInnerHTML"?(Z=Z?Z.__html:void 0,Z!=null&&Rt(n,Z)):x==="children"?typeof Z=="string"?(a!=="textarea"||Z!=="")&&Ye(n,Z):typeof Z=="number"&&Ye(n,""+Z):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?Z!=null&&x==="onScroll"&&cn("scroll",n):Z!=null&&U(n,x,Z,C))}switch(a){case"input":$e(n),lt(n,c,!1);break;case"textarea":$e(n),hn(n);break;case"option":c.value!=null&&n.setAttribute("value",""+be(c.value));break;case"select":n.multiple=!!c.multiple,x=c.value,x!=null?Mt(n,!!c.multiple,x,!1):c.defaultValue!=null&&Mt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=zo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Wn(i),null;case 6:if(n&&i.stateNode!=null)Np(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=hs(Ba.current),hs(qi.current),jo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Yi]=i,(x=c.nodeValue!==a)&&(n=fi,n!==null))switch(n.tag){case 3:Uo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Uo(c.nodeValue,a,(n.mode&1)!==0)}x&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Yi]=i,i.stateNode=c}return Wn(i),null;case 13:if(un(pn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(fn&&hi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Lh(),js(),i.flags|=98560,x=!1;else if(x=jo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!x)throw Error(t(318));if(x=i.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Yi]=i}else js(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Wn(i),x=!1}else Ri!==null&&(Fu(Ri),Ri=null),x=!0;if(!x)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(pn.current&1)!==0?An===0&&(An=3):Hu())),i.updateQueue!==null&&(i.flags|=4),Wn(i),null);case 4:return Ys(),Cu(n,i),n===null&&La(i.stateNode.containerInfo),Wn(i),null;case 10:return tu(i.type._context),Wn(i),null;case 17:return ii(i.type)&&Oo(),Wn(i),null;case 19:if(un(pn),x=i.memoizedState,x===null)return Wn(i),null;if(c=(i.flags&128)!==0,C=x.rendering,C===null)if(c)Wa(x,!1);else{if(An!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(C=Ko(n),C!==null){for(i.flags|=128,Wa(x,!1),c=C.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)x=a,n=c,x.flags&=14680066,C=x.alternate,C===null?(x.childLanes=0,x.lanes=n,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=C.childLanes,x.lanes=C.lanes,x.child=C.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=C.memoizedProps,x.memoizedState=C.memoizedState,x.updateQueue=C.updateQueue,x.type=C.type,n=C.dependencies,x.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return sn(pn,pn.current&1|2),i.child}n=n.sibling}x.tail!==null&&Gt()>Js&&(i.flags|=128,c=!0,Wa(x,!1),i.lanes=4194304)}else{if(!c)if(n=Ko(C),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Wa(x,!0),x.tail===null&&x.tailMode==="hidden"&&!C.alternate&&!fn)return Wn(i),null}else 2*Gt()-x.renderingStartTime>Js&&a!==1073741824&&(i.flags|=128,c=!0,Wa(x,!1),i.lanes=4194304);x.isBackwards?(C.sibling=i.child,i.child=C):(a=x.last,a!==null?a.sibling=C:i.child=C,x.last=C)}return x.tail!==null?(i=x.tail,x.rendering=i,x.tail=i.sibling,x.renderingStartTime=Gt(),i.sibling=null,a=pn.current,sn(pn,c?a&1|2:a&1),i):(Wn(i),null);case 22:case 23:return Bu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(pi&1073741824)!==0&&(Wn(i),i.subtreeFlags&6&&(i.flags|=8192)):Wn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function av(n,i){switch(qc(i),i.tag){case 1:return ii(i.type)&&Oo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ys(),un(ni),un(Vn),lu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return au(i),null;case 13:if(un(pn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));js()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return un(pn),null;case 4:return Ys(),null;case 10:return tu(i.type._context),null;case 22:case 23:return Bu(),null;case 24:return null;default:return null}}var sl=!1,$n=!1,ov=typeof WeakSet=="function"?WeakSet:Set,at=null;function Ks(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){_n(n,i,c)}else a.current=null}function Au(n,i,a){try{a()}catch(c){_n(n,i,c)}}var Pp=!1;function lv(n,i){if(Bc=Eo,n=ch(),Dc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var p=c.anchorOffset,x=c.focusNode;c=c.focusOffset;try{a.nodeType,x.nodeType}catch{a=null;break e}var C=0,G=-1,Z=-1,Se=0,Fe=0,He=n,Ue=null;t:for(;;){for(var tt;He!==a||p!==0&&He.nodeType!==3||(G=C+p),He!==x||c!==0&&He.nodeType!==3||(Z=C+c),He.nodeType===3&&(C+=He.nodeValue.length),(tt=He.firstChild)!==null;)Ue=He,He=tt;for(;;){if(He===n)break t;if(Ue===a&&++Se===p&&(G=C),Ue===x&&++Fe===c&&(Z=C),(tt=He.nextSibling)!==null)break;He=Ue,Ue=He.parentNode}He=tt}a=G===-1||Z===-1?null:{start:G,end:Z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hc={focusedElem:n,selectionRange:a},Eo=!1,at=i;at!==null;)if(i=at,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,at=n;else for(;at!==null;){i=at;try{var ct=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ct!==null){var dt=ct.memoizedProps,bn=ct.memoizedState,ue=i.stateNode,ne=ue.getSnapshotBeforeUpdate(i.elementType===i.type?dt:Ni(i.type,dt),bn);ue.__reactInternalSnapshotBeforeUpdate=ne}break;case 3:var fe=i.stateNode.containerInfo;fe.nodeType===1?fe.textContent="":fe.nodeType===9&&fe.documentElement&&fe.removeChild(fe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(We){_n(i,i.return,We)}if(n=i.sibling,n!==null){n.return=i.return,at=n;break}at=i.return}return ct=Pp,Pp=!1,ct}function $a(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var p=c=c.next;do{if((p.tag&n)===n){var x=p.destroy;p.destroy=void 0,x!==void 0&&Au(i,a,x)}p=p.next}while(p!==c)}}function al(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Ru(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Dp(n){var i=n.alternate;i!==null&&(n.alternate=null,Dp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Yi],delete i[ka],delete i[Wc],delete i[jx],delete i[Wx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Lp(n){return n.tag===5||n.tag===3||n.tag===4}function Ip(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Lp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Nu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=zo));else if(c!==4&&(n=n.child,n!==null))for(Nu(n,i,a),n=n.sibling;n!==null;)Nu(n,i,a),n=n.sibling}function Pu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Pu(n,i,a),n=n.sibling;n!==null;)Pu(n,i,a),n=n.sibling}var Un=null,Pi=!1;function Br(n,i,a){for(a=a.child;a!==null;)kp(n,i,a),a=a.sibling}function kp(n,i,a){if(ce&&typeof ce.onCommitFiberUnmount=="function")try{ce.onCommitFiberUnmount(K,a)}catch{}switch(a.tag){case 5:$n||Ks(a,i);case 6:var c=Un,p=Pi;Un=null,Br(n,i,a),Un=c,Pi=p,Un!==null&&(Pi?(n=Un,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Un.removeChild(a.stateNode));break;case 18:Un!==null&&(Pi?(n=Un,a=a.stateNode,n.nodeType===8?jc(n.parentNode,a):n.nodeType===1&&jc(n,a),Ma(n)):jc(Un,a.stateNode));break;case 4:c=Un,p=Pi,Un=a.stateNode.containerInfo,Pi=!0,Br(n,i,a),Un=c,Pi=p;break;case 0:case 11:case 14:case 15:if(!$n&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){p=c=c.next;do{var x=p,C=x.destroy;x=x.tag,C!==void 0&&((x&2)!==0||(x&4)!==0)&&Au(a,i,C),p=p.next}while(p!==c)}Br(n,i,a);break;case 1:if(!$n&&(Ks(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(G){_n(a,i,G)}Br(n,i,a);break;case 21:Br(n,i,a);break;case 22:a.mode&1?($n=(c=$n)||a.memoizedState!==null,Br(n,i,a),$n=c):Br(n,i,a);break;default:Br(n,i,a)}}function Up(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new ov),i.forEach(function(c){var p=xv.bind(null,n,c);a.has(c)||(a.add(c),c.then(p,p))})}}function Di(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var p=a[c];try{var x=n,C=i,G=C;e:for(;G!==null;){switch(G.tag){case 5:Un=G.stateNode,Pi=!1;break e;case 3:Un=G.stateNode.containerInfo,Pi=!0;break e;case 4:Un=G.stateNode.containerInfo,Pi=!0;break e}G=G.return}if(Un===null)throw Error(t(160));kp(x,C,p),Un=null,Pi=!1;var Z=p.alternate;Z!==null&&(Z.return=null),p.return=null}catch(Se){_n(p,i,Se)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)zp(i,n),i=i.sibling}function zp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Di(i,n),Zi(n),c&4){try{$a(3,n,n.return),al(3,n)}catch(dt){_n(n,n.return,dt)}try{$a(5,n,n.return)}catch(dt){_n(n,n.return,dt)}}break;case 1:Di(i,n),Zi(n),c&512&&a!==null&&Ks(a,a.return);break;case 5:if(Di(i,n),Zi(n),c&512&&a!==null&&Ks(a,a.return),n.flags&32){var p=n.stateNode;try{Ye(p,"")}catch(dt){_n(n,n.return,dt)}}if(c&4&&(p=n.stateNode,p!=null)){var x=n.memoizedProps,C=a!==null?a.memoizedProps:x,G=n.type,Z=n.updateQueue;if(n.updateQueue=null,Z!==null)try{G==="input"&&x.type==="radio"&&x.name!=null&&_t(p,x),Le(G,C);var Se=Le(G,x);for(C=0;C<Z.length;C+=2){var Fe=Z[C],He=Z[C+1];Fe==="style"?se(p,He):Fe==="dangerouslySetInnerHTML"?Rt(p,He):Fe==="children"?Ye(p,He):U(p,Fe,He,Se)}switch(G){case"input":ht(p,x);break;case"textarea":Q(p,x);break;case"select":var Ue=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!x.multiple;var tt=x.value;tt!=null?Mt(p,!!x.multiple,tt,!1):Ue!==!!x.multiple&&(x.defaultValue!=null?Mt(p,!!x.multiple,x.defaultValue,!0):Mt(p,!!x.multiple,x.multiple?[]:"",!1))}p[ka]=x}catch(dt){_n(n,n.return,dt)}}break;case 6:if(Di(i,n),Zi(n),c&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,x=n.memoizedProps;try{p.nodeValue=x}catch(dt){_n(n,n.return,dt)}}break;case 3:if(Di(i,n),Zi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Ma(i.containerInfo)}catch(dt){_n(n,n.return,dt)}break;case 4:Di(i,n),Zi(n);break;case 13:Di(i,n),Zi(n),p=n.child,p.flags&8192&&(x=p.memoizedState!==null,p.stateNode.isHidden=x,!x||p.alternate!==null&&p.alternate.memoizedState!==null||(Iu=Gt())),c&4&&Up(n);break;case 22:if(Fe=a!==null&&a.memoizedState!==null,n.mode&1?($n=(Se=$n)||Fe,Di(i,n),$n=Se):Di(i,n),Zi(n),c&8192){if(Se=n.memoizedState!==null,(n.stateNode.isHidden=Se)&&!Fe&&(n.mode&1)!==0)for(at=n,Fe=n.child;Fe!==null;){for(He=at=Fe;at!==null;){switch(Ue=at,tt=Ue.child,Ue.tag){case 0:case 11:case 14:case 15:$a(4,Ue,Ue.return);break;case 1:Ks(Ue,Ue.return);var ct=Ue.stateNode;if(typeof ct.componentWillUnmount=="function"){c=Ue,a=Ue.return;try{i=c,ct.props=i.memoizedProps,ct.state=i.memoizedState,ct.componentWillUnmount()}catch(dt){_n(c,a,dt)}}break;case 5:Ks(Ue,Ue.return);break;case 22:if(Ue.memoizedState!==null){Bp(He);continue}}tt!==null?(tt.return=Ue,at=tt):Bp(He)}Fe=Fe.sibling}e:for(Fe=null,He=n;;){if(He.tag===5){if(Fe===null){Fe=He;try{p=He.stateNode,Se?(x=p.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(G=He.stateNode,Z=He.memoizedProps.style,C=Z!=null&&Z.hasOwnProperty("display")?Z.display:null,G.style.display=T("display",C))}catch(dt){_n(n,n.return,dt)}}}else if(He.tag===6){if(Fe===null)try{He.stateNode.nodeValue=Se?"":He.memoizedProps}catch(dt){_n(n,n.return,dt)}}else if((He.tag!==22&&He.tag!==23||He.memoizedState===null||He===n)&&He.child!==null){He.child.return=He,He=He.child;continue}if(He===n)break e;for(;He.sibling===null;){if(He.return===null||He.return===n)break e;Fe===He&&(Fe=null),He=He.return}Fe===He&&(Fe=null),He.sibling.return=He.return,He=He.sibling}}break;case 19:Di(i,n),Zi(n),c&4&&Up(n);break;case 21:break;default:Di(i,n),Zi(n)}}function Zi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Lp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var p=c.stateNode;c.flags&32&&(Ye(p,""),c.flags&=-33);var x=Ip(n);Pu(n,x,p);break;case 3:case 4:var C=c.stateNode.containerInfo,G=Ip(n);Nu(n,G,C);break;default:throw Error(t(161))}}catch(Z){_n(n,n.return,Z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function cv(n,i,a){at=n,Fp(n)}function Fp(n,i,a){for(var c=(n.mode&1)!==0;at!==null;){var p=at,x=p.child;if(p.tag===22&&c){var C=p.memoizedState!==null||sl;if(!C){var G=p.alternate,Z=G!==null&&G.memoizedState!==null||$n;G=sl;var Se=$n;if(sl=C,($n=Z)&&!Se)for(at=p;at!==null;)C=at,Z=C.child,C.tag===22&&C.memoizedState!==null?Hp(p):Z!==null?(Z.return=C,at=Z):Hp(p);for(;x!==null;)at=x,Fp(x),x=x.sibling;at=p,sl=G,$n=Se}Op(n)}else(p.subtreeFlags&8772)!==0&&x!==null?(x.return=p,at=x):Op(n)}}function Op(n){for(;at!==null;){var i=at;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:$n||al(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!$n)if(a===null)c.componentDidMount();else{var p=i.elementType===i.type?a.memoizedProps:Ni(i.type,a.memoizedProps);c.componentDidUpdate(p,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var x=i.updateQueue;x!==null&&Bh(i,x,c);break;case 3:var C=i.updateQueue;if(C!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Bh(i,C,a)}break;case 5:var G=i.stateNode;if(a===null&&i.flags&4){a=G;var Z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":Z.autoFocus&&a.focus();break;case"img":Z.src&&(a.src=Z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var Se=i.alternate;if(Se!==null){var Fe=Se.memoizedState;if(Fe!==null){var He=Fe.dehydrated;He!==null&&Ma(He)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}$n||i.flags&512&&Ru(i)}catch(Ue){_n(i,i.return,Ue)}}if(i===n){at=null;break}if(a=i.sibling,a!==null){a.return=i.return,at=a;break}at=i.return}}function Bp(n){for(;at!==null;){var i=at;if(i===n){at=null;break}var a=i.sibling;if(a!==null){a.return=i.return,at=a;break}at=i.return}}function Hp(n){for(;at!==null;){var i=at;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{al(4,i)}catch(Z){_n(i,a,Z)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var p=i.return;try{c.componentDidMount()}catch(Z){_n(i,p,Z)}}var x=i.return;try{Ru(i)}catch(Z){_n(i,x,Z)}break;case 5:var C=i.return;try{Ru(i)}catch(Z){_n(i,C,Z)}}}catch(Z){_n(i,i.return,Z)}if(i===n){at=null;break}var G=i.sibling;if(G!==null){G.return=i.return,at=G;break}at=i.return}}var uv=Math.ceil,ol=P.ReactCurrentDispatcher,Du=P.ReactCurrentOwner,wi=P.ReactCurrentBatchConfig,Vt=0,Dn=null,Mn=null,zn=0,pi=0,Zs=kr(0),An=0,Xa=null,ms=0,ll=0,Lu=0,Ya=null,si=null,Iu=0,Js=1/0,vr=null,cl=!1,ku=null,Hr=null,ul=!1,Gr=null,dl=0,qa=0,Uu=null,fl=-1,hl=0;function Jn(){return(Vt&6)!==0?Gt():fl!==-1?fl:fl=Gt()}function Vr(n){return(n.mode&1)===0?1:(Vt&2)!==0&&zn!==0?zn&-zn:Xx.transition!==null?(hl===0&&(hl=Xt()),hl):(n=ot,n!==0||(n=window.event,n=n===void 0?16:Vf(n.type)),n)}function Li(n,i,a,c){if(50<qa)throw qa=0,Uu=null,Error(t(185));dn(n,a,c),((Vt&2)===0||n!==Dn)&&(n===Dn&&((Vt&2)===0&&(ll|=a),An===4&&jr(n,zn)),ai(n,c),a===1&&Vt===0&&(i.mode&1)===0&&(Js=Gt()+500,Ho&&zr()))}function ai(n,i){var a=n.callbackNode;yt(n,i);var c=vt(n,n===Dn?zn:0);if(c===0)a!==null&&Hn(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Hn(a),i===1)n.tag===0?$x(Vp.bind(null,n)):Ah(Vp.bind(null,n)),Gx(function(){(Vt&6)===0&&zr()}),a=null;else{switch(Ci(c)){case 1:a=cr;break;case 4:a=ur;break;case 16:a=ji;break;case 536870912:a=A;break;default:a=ji}a=Zp(a,Gp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Gp(n,i){if(fl=-1,hl=0,(Vt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Qs()&&n.callbackNode!==a)return null;var c=vt(n,n===Dn?zn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=pl(n,c);else{i=c;var p=Vt;Vt|=2;var x=Wp();(Dn!==n||zn!==i)&&(vr=null,Js=Gt()+500,xs(n,i));do try{hv();break}catch(G){jp(n,G)}while(!0);eu(),ol.current=x,Vt=p,Mn!==null?i=0:(Dn=null,zn=0,i=An)}if(i!==0){if(i===2&&(p=rn(n),p!==0&&(c=p,i=zu(n,p))),i===1)throw a=Xa,xs(n,0),jr(n,c),ai(n,Gt()),a;if(i===6)jr(n,c);else{if(p=n.current.alternate,(c&30)===0&&!dv(p)&&(i=pl(n,c),i===2&&(x=rn(n),x!==0&&(c=x,i=zu(n,x))),i===1))throw a=Xa,xs(n,0),jr(n,c),ai(n,Gt()),a;switch(n.finishedWork=p,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:vs(n,si,vr);break;case 3:if(jr(n,c),(c&130023424)===c&&(i=Iu+500-Gt(),10<i)){if(vt(n,0)!==0)break;if(p=n.suspendedLanes,(p&c)!==c){Jn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Vc(vs.bind(null,n,si,vr),i);break}vs(n,si,vr);break;case 4:if(jr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,p=-1;0<c;){var C=31-H(c);x=1<<C,C=i[C],C>p&&(p=C),c&=~x}if(c=p,c=Gt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*uv(c/1960))-c,10<c){n.timeoutHandle=Vc(vs.bind(null,n,si,vr),c);break}vs(n,si,vr);break;case 5:vs(n,si,vr);break;default:throw Error(t(329))}}}return ai(n,Gt()),n.callbackNode===a?Gp.bind(null,n):null}function zu(n,i){var a=Ya;return n.current.memoizedState.isDehydrated&&(xs(n,i).flags|=256),n=pl(n,i),n!==2&&(i=si,si=a,i!==null&&Fu(i)),n}function Fu(n){si===null?si=n:si.push.apply(si,n)}function dv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var p=a[c],x=p.getSnapshot;p=p.value;try{if(!Ai(x(),p))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function jr(n,i){for(i&=~Lu,i&=~ll,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-H(i),c=1<<a;n[a]=-1,i&=~c}}function Vp(n){if((Vt&6)!==0)throw Error(t(327));Qs();var i=vt(n,0);if((i&1)===0)return ai(n,Gt()),null;var a=pl(n,i);if(n.tag!==0&&a===2){var c=rn(n);c!==0&&(i=c,a=zu(n,c))}if(a===1)throw a=Xa,xs(n,0),jr(n,i),ai(n,Gt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,vs(n,si,vr),ai(n,Gt()),null}function Ou(n,i){var a=Vt;Vt|=1;try{return n(i)}finally{Vt=a,Vt===0&&(Js=Gt()+500,Ho&&zr())}}function gs(n){Gr!==null&&Gr.tag===0&&(Vt&6)===0&&Qs();var i=Vt;Vt|=1;var a=wi.transition,c=ot;try{if(wi.transition=null,ot=1,n)return n()}finally{ot=c,wi.transition=a,Vt=i,(Vt&6)===0&&zr()}}function Bu(){pi=Zs.current,un(Zs)}function xs(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Hx(a)),Mn!==null)for(a=Mn.return;a!==null;){var c=a;switch(qc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Oo();break;case 3:Ys(),un(ni),un(Vn),lu();break;case 5:au(c);break;case 4:Ys();break;case 13:un(pn);break;case 19:un(pn);break;case 10:tu(c.type._context);break;case 22:case 23:Bu()}a=a.return}if(Dn=n,Mn=n=Wr(n.current,null),zn=pi=i,An=0,Xa=null,Lu=ll=ms=0,si=Ya=null,fs!==null){for(i=0;i<fs.length;i++)if(a=fs[i],c=a.interleaved,c!==null){a.interleaved=null;var p=c.next,x=a.pending;if(x!==null){var C=x.next;x.next=p,c.next=C}a.pending=c}fs=null}return n}function jp(n,i){do{var a=Mn;try{if(eu(),Zo.current=tl,Jo){for(var c=mn.memoizedState;c!==null;){var p=c.queue;p!==null&&(p.pending=null),c=c.next}Jo=!1}if(ps=0,Pn=Cn=mn=null,Ha=!1,Ga=0,Du.current=null,a===null||a.return===null){An=1,Xa=i,Mn=null;break}e:{var x=n,C=a.return,G=a,Z=i;if(i=zn,G.flags|=32768,Z!==null&&typeof Z=="object"&&typeof Z.then=="function"){var Se=Z,Fe=G,He=Fe.tag;if((Fe.mode&1)===0&&(He===0||He===11||He===15)){var Ue=Fe.alternate;Ue?(Fe.updateQueue=Ue.updateQueue,Fe.memoizedState=Ue.memoizedState,Fe.lanes=Ue.lanes):(Fe.updateQueue=null,Fe.memoizedState=null)}var tt=mp(C);if(tt!==null){tt.flags&=-257,gp(tt,C,G,x,i),tt.mode&1&&pp(x,Se,i),i=tt,Z=Se;var ct=i.updateQueue;if(ct===null){var dt=new Set;dt.add(Z),i.updateQueue=dt}else ct.add(Z);break e}else{if((i&1)===0){pp(x,Se,i),Hu();break e}Z=Error(t(426))}}else if(fn&&G.mode&1){var bn=mp(C);if(bn!==null){(bn.flags&65536)===0&&(bn.flags|=256),gp(bn,C,G,x,i),Jc(qs(Z,G));break e}}x=Z=qs(Z,G),An!==4&&(An=2),Ya===null?Ya=[x]:Ya.push(x),x=C;do{switch(x.tag){case 3:x.flags|=65536,i&=-i,x.lanes|=i;var ue=fp(x,Z,i);Oh(x,ue);break e;case 1:G=Z;var ne=x.type,fe=x.stateNode;if((x.flags&128)===0&&(typeof ne.getDerivedStateFromError=="function"||fe!==null&&typeof fe.componentDidCatch=="function"&&(Hr===null||!Hr.has(fe)))){x.flags|=65536,i&=-i,x.lanes|=i;var We=hp(x,G,i);Oh(x,We);break e}}x=x.return}while(x!==null)}Xp(a)}catch(ft){i=ft,Mn===a&&a!==null&&(Mn=a=a.return);continue}break}while(!0)}function Wp(){var n=ol.current;return ol.current=tl,n===null?tl:n}function Hu(){(An===0||An===3||An===2)&&(An=4),Dn===null||(ms&268435455)===0&&(ll&268435455)===0||jr(Dn,zn)}function pl(n,i){var a=Vt;Vt|=2;var c=Wp();(Dn!==n||zn!==i)&&(vr=null,xs(n,i));do try{fv();break}catch(p){jp(n,p)}while(!0);if(eu(),Vt=a,ol.current=c,Mn!==null)throw Error(t(261));return Dn=null,zn=0,An}function fv(){for(;Mn!==null;)$p(Mn)}function hv(){for(;Mn!==null&&!Gn();)$p(Mn)}function $p(n){var i=Kp(n.alternate,n,pi);n.memoizedProps=n.pendingProps,i===null?Xp(n):Mn=i,Du.current=null}function Xp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=sv(a,i,pi),a!==null){Mn=a;return}}else{if(a=av(a,i),a!==null){a.flags&=32767,Mn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{An=6,Mn=null;return}}if(i=i.sibling,i!==null){Mn=i;return}Mn=i=n}while(i!==null);An===0&&(An=5)}function vs(n,i,a){var c=ot,p=wi.transition;try{wi.transition=null,ot=1,pv(n,i,a,c)}finally{wi.transition=p,ot=c}return null}function pv(n,i,a,c){do Qs();while(Gr!==null);if((Vt&6)!==0)throw Error(t(327));a=n.finishedWork;var p=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var x=a.lanes|a.childLanes;if(et(n,x),n===Dn&&(Mn=Dn=null,zn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ul||(ul=!0,Zp(ji,function(){return Qs(),null})),x=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||x){x=wi.transition,wi.transition=null;var C=ot;ot=1;var G=Vt;Vt|=4,Du.current=null,lv(n,a),zp(a,n),Ix(Hc),Eo=!!Bc,Hc=Bc=null,n.current=a,cv(a),ei(),Vt=G,ot=C,wi.transition=x}else n.current=a;if(ul&&(ul=!1,Gr=n,dl=p),x=n.pendingLanes,x===0&&(Hr=null),L(a.stateNode),ai(n,Gt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)p=i[a],c(p.value,{componentStack:p.stack,digest:p.digest});if(cl)throw cl=!1,n=ku,ku=null,n;return(dl&1)!==0&&n.tag!==0&&Qs(),x=n.pendingLanes,(x&1)!==0?n===Uu?qa++:(qa=0,Uu=n):qa=0,zr(),null}function Qs(){if(Gr!==null){var n=Ci(dl),i=wi.transition,a=ot;try{if(wi.transition=null,ot=16>n?16:n,Gr===null)var c=!1;else{if(n=Gr,Gr=null,dl=0,(Vt&6)!==0)throw Error(t(331));var p=Vt;for(Vt|=4,at=n.current;at!==null;){var x=at,C=x.child;if((at.flags&16)!==0){var G=x.deletions;if(G!==null){for(var Z=0;Z<G.length;Z++){var Se=G[Z];for(at=Se;at!==null;){var Fe=at;switch(Fe.tag){case 0:case 11:case 15:$a(8,Fe,x)}var He=Fe.child;if(He!==null)He.return=Fe,at=He;else for(;at!==null;){Fe=at;var Ue=Fe.sibling,tt=Fe.return;if(Dp(Fe),Fe===Se){at=null;break}if(Ue!==null){Ue.return=tt,at=Ue;break}at=tt}}}var ct=x.alternate;if(ct!==null){var dt=ct.child;if(dt!==null){ct.child=null;do{var bn=dt.sibling;dt.sibling=null,dt=bn}while(dt!==null)}}at=x}}if((x.subtreeFlags&2064)!==0&&C!==null)C.return=x,at=C;else e:for(;at!==null;){if(x=at,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:$a(9,x,x.return)}var ue=x.sibling;if(ue!==null){ue.return=x.return,at=ue;break e}at=x.return}}var ne=n.current;for(at=ne;at!==null;){C=at;var fe=C.child;if((C.subtreeFlags&2064)!==0&&fe!==null)fe.return=C,at=fe;else e:for(C=ne;at!==null;){if(G=at,(G.flags&2048)!==0)try{switch(G.tag){case 0:case 11:case 15:al(9,G)}}catch(ft){_n(G,G.return,ft)}if(G===C){at=null;break e}var We=G.sibling;if(We!==null){We.return=G.return,at=We;break e}at=G.return}}if(Vt=p,zr(),ce&&typeof ce.onPostCommitFiberRoot=="function")try{ce.onPostCommitFiberRoot(K,n)}catch{}c=!0}return c}finally{ot=a,wi.transition=i}}return!1}function Yp(n,i,a){i=qs(a,i),i=fp(n,i,1),n=Or(n,i,1),i=Jn(),n!==null&&(dn(n,1,i),ai(n,i))}function _n(n,i,a){if(n.tag===3)Yp(n,n,a);else for(;i!==null;){if(i.tag===3){Yp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Hr===null||!Hr.has(c))){n=qs(a,n),n=hp(i,n,1),i=Or(i,n,1),n=Jn(),i!==null&&(dn(i,1,n),ai(i,n));break}}i=i.return}}function mv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Jn(),n.pingedLanes|=n.suspendedLanes&a,Dn===n&&(zn&a)===a&&(An===4||An===3&&(zn&130023424)===zn&&500>Gt()-Iu?xs(n,0):Lu|=a),ai(n,i)}function qp(n,i){i===0&&((n.mode&1)===0?i=1:(i=qe,qe<<=1,(qe&130023424)===0&&(qe=4194304)));var a=Jn();n=mr(n,i),n!==null&&(dn(n,i,a),ai(n,a))}function gv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),qp(n,a)}function xv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,p=n.memoizedState;p!==null&&(a=p.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),qp(n,a)}var Kp;Kp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||ni.current)ri=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return ri=!1,rv(n,i,a);ri=(n.flags&131072)!==0}else ri=!1,fn&&(i.flags&1048576)!==0&&Rh(i,Vo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;rl(n,i),n=i.pendingProps;var p=Hs(i,Vn.current);Xs(i,a),p=du(null,i,c,n,p,a);var x=fu();return i.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ii(c)?(x=!0,Bo(i)):x=!1,i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,ru(i),p.updater=nl,i.stateNode=p,p._reactInternals=i,vu(i,c,n,a),i=bu(null,i,c,!0,x,a)):(i.tag=0,fn&&x&&Yc(i),Zn(null,i,p,a),i=i.child),i;case 16:c=i.elementType;e:{switch(rl(n,i),n=i.pendingProps,p=c._init,c=p(c._payload),i.type=c,p=i.tag=_v(c),n=Ni(c,n),p){case 0:i=Su(null,i,c,n,a);break e;case 1:i=bp(null,i,c,n,a);break e;case 11:i=xp(null,i,c,n,a);break e;case 14:i=vp(null,i,c,Ni(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,p=i.pendingProps,p=i.elementType===c?p:Ni(c,p),Su(n,i,c,p,a);case 1:return c=i.type,p=i.pendingProps,p=i.elementType===c?p:Ni(c,p),bp(n,i,c,p,a);case 3:e:{if(wp(i),n===null)throw Error(t(387));c=i.pendingProps,x=i.memoizedState,p=x.element,Fh(n,i),qo(i,c,null,a);var C=i.memoizedState;if(c=C.element,x.isDehydrated)if(x={element:c,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},i.updateQueue.baseState=x,i.memoizedState=x,i.flags&256){p=qs(Error(t(423)),i),i=Mp(n,i,c,a,p);break e}else if(c!==p){p=qs(Error(t(424)),i),i=Mp(n,i,c,a,p);break e}else for(hi=Ir(i.stateNode.containerInfo.firstChild),fi=i,fn=!0,Ri=null,a=Uh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(js(),c===p){i=xr(n,i,a);break e}Zn(n,i,c,a)}i=i.child}return i;case 5:return Hh(i),n===null&&Zc(i),c=i.type,p=i.pendingProps,x=n!==null?n.memoizedProps:null,C=p.children,Gc(c,p)?C=null:x!==null&&Gc(c,x)&&(i.flags|=32),Sp(n,i),Zn(n,i,C,a),i.child;case 6:return n===null&&Zc(i),null;case 13:return Ep(n,i,a);case 4:return su(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ws(i,null,c,a):Zn(n,i,c,a),i.child;case 11:return c=i.type,p=i.pendingProps,p=i.elementType===c?p:Ni(c,p),xp(n,i,c,p,a);case 7:return Zn(n,i,i.pendingProps,a),i.child;case 8:return Zn(n,i,i.pendingProps.children,a),i.child;case 12:return Zn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,p=i.pendingProps,x=i.memoizedProps,C=p.value,sn($o,c._currentValue),c._currentValue=C,x!==null)if(Ai(x.value,C)){if(x.children===p.children&&!ni.current){i=xr(n,i,a);break e}}else for(x=i.child,x!==null&&(x.return=i);x!==null;){var G=x.dependencies;if(G!==null){C=x.child;for(var Z=G.firstContext;Z!==null;){if(Z.context===c){if(x.tag===1){Z=gr(-1,a&-a),Z.tag=2;var Se=x.updateQueue;if(Se!==null){Se=Se.shared;var Fe=Se.pending;Fe===null?Z.next=Z:(Z.next=Fe.next,Fe.next=Z),Se.pending=Z}}x.lanes|=a,Z=x.alternate,Z!==null&&(Z.lanes|=a),nu(x.return,a,i),G.lanes|=a;break}Z=Z.next}}else if(x.tag===10)C=x.type===i.type?null:x.child;else if(x.tag===18){if(C=x.return,C===null)throw Error(t(341));C.lanes|=a,G=C.alternate,G!==null&&(G.lanes|=a),nu(C,a,i),C=x.sibling}else C=x.child;if(C!==null)C.return=x;else for(C=x;C!==null;){if(C===i){C=null;break}if(x=C.sibling,x!==null){x.return=C.return,C=x;break}C=C.return}x=C}Zn(n,i,p.children,a),i=i.child}return i;case 9:return p=i.type,c=i.pendingProps.children,Xs(i,a),p=Si(p),c=c(p),i.flags|=1,Zn(n,i,c,a),i.child;case 14:return c=i.type,p=Ni(c,i.pendingProps),p=Ni(c.type,p),vp(n,i,c,p,a);case 15:return _p(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,p=i.pendingProps,p=i.elementType===c?p:Ni(c,p),rl(n,i),i.tag=1,ii(c)?(n=!0,Bo(i)):n=!1,Xs(i,a),up(i,c,p),vu(i,c,p,a),bu(null,i,c,!0,n,a);case 19:return Cp(n,i,a);case 22:return yp(n,i,a)}throw Error(t(156,i.tag))};function Zp(n,i){return en(n,i)}function vv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mi(n,i,a,c){return new vv(n,i,a,c)}function Gu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function _v(n){if(typeof n=="function")return Gu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===B)return 11;if(n===te)return 14}return 2}function Wr(n,i){var a=n.alternate;return a===null?(a=Mi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ml(n,i,a,c,p,x){var C=2;if(c=n,typeof n=="function")Gu(n)&&(C=1);else if(typeof n=="string")C=5;else e:switch(n){case M:return _s(a.children,p,x,i);case D:C=8,p|=8;break;case J:return n=Mi(12,a,i,p|2),n.elementType=J,n.lanes=x,n;case X:return n=Mi(13,a,i,p),n.elementType=X,n.lanes=x,n;case F:return n=Mi(19,a,i,p),n.elementType=F,n.lanes=x,n;case $:return gl(a,p,x,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case W:C=10;break e;case V:C=9;break e;case B:C=11;break e;case te:C=14;break e;case de:C=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Mi(C,a,i,p),i.elementType=n,i.type=c,i.lanes=x,i}function _s(n,i,a,c){return n=Mi(7,n,c,i),n.lanes=a,n}function gl(n,i,a,c){return n=Mi(22,n,c,i),n.elementType=$,n.lanes=a,n.stateNode={isHidden:!1},n}function Vu(n,i,a){return n=Mi(6,n,null,i),n.lanes=a,n}function ju(n,i,a){return i=Mi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function yv(n,i,a,c,p){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zt(0),this.expirationTimes=zt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zt(0),this.identifierPrefix=c,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Wu(n,i,a,c,p,x,C,G,Z){return n=new yv(n,i,a,G,Z),i===1?(i=1,x===!0&&(i|=8)):i=0,x=Mi(3,null,null,i),n.current=x,x.stateNode=n,x.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ru(x),n}function Sv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Jp(n){if(!n)return Ur;n=n._reactInternals;e:{if(wn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ii(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(ii(a))return Th(n,a,i)}return i}function Qp(n,i,a,c,p,x,C,G,Z){return n=Wu(a,c,!0,n,p,x,C,G,Z),n.context=Jp(null),a=n.current,c=Jn(),p=Vr(a),x=gr(c,p),x.callback=i??null,Or(a,x,p),n.current.lanes=p,dn(n,p,c),ai(n,c),n}function xl(n,i,a,c){var p=i.current,x=Jn(),C=Vr(p);return a=Jp(a),i.context===null?i.context=a:i.pendingContext=a,i=gr(x,C),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Or(p,i,C),n!==null&&(Li(n,p,C,x),Yo(n,p,C)),C}function vl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function e0(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function $u(n,i){e0(n,i),(n=n.alternate)&&e0(n,i)}function bv(){return null}var t0=typeof reportError=="function"?reportError:function(n){console.error(n)};function Xu(n){this._internalRoot=n}_l.prototype.render=Xu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));xl(n,i,null,null)},_l.prototype.unmount=Xu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;gs(function(){xl(null,n,null,null)}),i[dr]=null}};function _l(n){this._internalRoot=n}_l.prototype.unstable_scheduleHydration=function(n){if(n){var i=ui();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Xi.length&&i!==0&&i<Xi[a].priority;a++);Xi.splice(a,0,n),a===0&&wo(n)}};function Yu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function yl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function n0(){}function wv(n,i,a,c,p){if(p){if(typeof c=="function"){var x=c;c=function(){var Se=vl(C);x.call(Se)}}var C=Qp(i,c,n,0,null,!1,!1,"",n0);return n._reactRootContainer=C,n[dr]=C.current,La(n.nodeType===8?n.parentNode:n),gs(),C}for(;p=n.lastChild;)n.removeChild(p);if(typeof c=="function"){var G=c;c=function(){var Se=vl(Z);G.call(Se)}}var Z=Wu(n,0,!1,null,null,!1,!1,"",n0);return n._reactRootContainer=Z,n[dr]=Z.current,La(n.nodeType===8?n.parentNode:n),gs(function(){xl(i,Z,a,c)}),Z}function Sl(n,i,a,c,p){var x=a._reactRootContainer;if(x){var C=x;if(typeof p=="function"){var G=p;p=function(){var Z=vl(C);G.call(Z)}}xl(i,C,n,p)}else C=wv(a,i,n,p,c);return vl(C)}vn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=st(i.pendingLanes);a!==0&&(yn(i,a|1),ai(i,Gt()),(Vt&6)===0&&(Js=Gt()+500,zr()))}break;case 13:gs(function(){var c=mr(n,1);if(c!==null){var p=Jn();Li(c,n,1,p)}}),$u(n,1)}},Wi=function(n){if(n.tag===13){var i=mr(n,134217728);if(i!==null){var a=Jn();Li(i,n,134217728,a)}$u(n,134217728)}},ti=function(n){if(n.tag===13){var i=Vr(n),a=mr(n,i);if(a!==null){var c=Jn();Li(a,n,i,c)}$u(n,i)}},ui=function(){return ot},ae=function(n,i){var a=ot;try{return ot=n,i()}finally{ot=a}},we=function(n,i,a){switch(i){case"input":if(ht(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var p=Fo(c);if(!p)throw Error(t(90));De(c),ht(c,p)}}}break;case"textarea":Q(n,a);break;case"select":i=a.value,i!=null&&Mt(n,!!a.multiple,i,!1)}},he=Ou,Ee=gs;var Mv={usingClientEntryPoint:!1,Events:[Ua,Os,Fo,ye,Ce,Ou]},Ka={findFiberByHostInstance:ls,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ev={bundleType:Ka.bundleType,version:Ka.version,rendererPackageName:Ka.rendererPackageName,rendererConfig:Ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ct(n),n===null?null:n.stateNode},findFiberByHostInstance:Ka.findFiberByHostInstance||bv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bl.isDisabled&&bl.supportsFiber)try{K=bl.inject(Ev),ce=bl}catch{}}return oi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mv,oi.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yu(i))throw Error(t(200));return Sv(n,i,null,a)},oi.createRoot=function(n,i){if(!Yu(n))throw Error(t(299));var a=!1,c="",p=t0;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(p=i.onRecoverableError)),i=Wu(n,1,!1,null,null,a,!1,c,p),n[dr]=i.current,La(n.nodeType===8?n.parentNode:n),new Xu(i)},oi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ct(i),n=n===null?null:n.stateNode,n},oi.flushSync=function(n){return gs(n)},oi.hydrate=function(n,i,a){if(!yl(i))throw Error(t(200));return Sl(null,n,i,!0,a)},oi.hydrateRoot=function(n,i,a){if(!Yu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,p=!1,x="",C=t0;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(x=a.identifierPrefix),a.onRecoverableError!==void 0&&(C=a.onRecoverableError)),i=Qp(i,null,n,1,a??null,p,!1,x,C),n[dr]=i.current,La(n),c)for(n=0;n<c.length;n++)a=c[n],p=a._getVersion,p=p(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,p]:i.mutableSourceEagerHydrationData.push(a,p);return new _l(i)},oi.render=function(n,i,a){if(!yl(i))throw Error(t(200));return Sl(null,n,i,!1,a)},oi.unmountComponentAtNode=function(n){if(!yl(n))throw Error(t(40));return n._reactRootContainer?(gs(function(){Sl(null,null,n,!1,function(){n._reactRootContainer=null,n[dr]=null})}),!0):!1},oi.unstable_batchedUpdates=Ou,oi.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!yl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Sl(n,i,a,!1,c)},oi.version="18.3.1-next-f1338f8080-20240426",oi}var u0;function Uv(){if(u0)return Zu.exports;u0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Zu.exports=kv(),Zu.exports}var d0;function zv(){if(d0)return wl;d0=1;var s=Uv();return wl.createRoot=s.createRoot,wl.hydrateRoot=s.hydrateRoot,wl}var Fv=zv();const Ov=dm(Fv),pa=[{id:"brown-noise",title:"Brownian Deep Focus",category:"Deep Focus",tagline:"Warm sub-bass rumble for continuous coding & writing",description:"Mathematically integrated brownian spectrum with deep 450Hz low-pass rolloff. Proven to mask background distractions and alleviate cognitive fatigue.",frequency:"0 – 450 Hz Brown Spectrum",accentColor:"#f59e0b"},{id:"celestial-drone",title:"Celestial 432Hz Drone",category:"Mindfulness",tagline:"Harmonically tuned meditative Tibetan chords",description:"Multi-oscillator harmonic chord centered around the natural 432Hz tuning fork with gentle phase chorus and slow breathing resonance.",frequency:"432 Hz Pythagorean Fundamental",accentColor:"#a855f7"},{id:"binaural-gamma",title:"Gamma 40Hz Flow State",category:"Cognitive Flow",tagline:"High-cognition binaural carrier for intense problem-solving",description:"Stereo carrier tones (200Hz L / 240Hz R) inducing 40Hz gamma oscillations in the cerebral cortex, associated with high-level information processing and recall.",frequency:"40 Hz Gamma Difference Wave",accentColor:"#38bdf8"},{id:"binaural-alpha",title:"Alpha 10Hz Quiet Mind",category:"Mindfulness",tagline:"Calm relaxed alertness for reading and reflection",description:"Stereo carrier tones (210Hz L / 220Hz R) stimulating 10Hz alpha rhythms, optimal for sustained reading, journaling, and stress reduction.",frequency:"10 Hz Alpha Difference Wave",accentColor:"#34d399"},{id:"rain-storm",title:"Midnight Rain Sanctuary",category:"Deep Focus",tagline:"Gentle nocturnal rainfall with rolling thunder",description:"Procedurally shaped pink noise with gentle resonant filtering, simulating a peaceful rain shower against cabin windows in deep space.",frequency:"Pink Noise Spectrum & Low Rumble",accentColor:"#818cf8"}];class Bv{constructor(){_r(this,"ctx",null);_r(this,"masterGain",null);_r(this,"analyser",null);_r(this,"activeNodes",[]);_r(this,"currentId",null);_r(this,"_isPlaying",!1);_r(this,"_volume",.65);_r(this,"_isMuted",!1)}initContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this._isMuted?0:this._volume,this.ctx.currentTime),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=64,this.analyser.smoothingTimeConstant=.85,this.masterGain.connect(this.analyser),this.analyser.connect(this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume()}get isPlaying(){return this._isPlaying}get currentSoundscape(){return this.currentId}get volume(){return this._volume}get isMuted(){return this._isMuted}getAnalyser(){return this.analyser}setVolume(e){if(this._volume=Math.max(0,Math.min(1,e)),this.masterGain&&this.ctx){const t=this._isMuted?0:this._volume;this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime),this.masterGain.gain.linearRampToValueAtTime(t,this.ctx.currentTime+.05)}}toggleMute(){return this._isMuted=!this._isMuted,this.setVolume(this._volume),this._isMuted}stop(){!this.ctx||!this._isPlaying||(this.masterGain&&(this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime),this.masterGain.gain.linearRampToValueAtTime(.001,this.ctx.currentTime+.12)),setTimeout(()=>{this.cleanupNodes(),this._isPlaying=!1,this.currentId=null},130))}cleanupNodes(){for(const e of this.activeNodes)try{"stop"in e&&typeof e.stop=="function"&&e.stop(),e.disconnect()}catch{}this.activeNodes=[]}play(e){if(this.initContext(),!(!this.ctx||!this.masterGain)&&!(this._isPlaying&&this.currentId===e))switch(this.cleanupNodes(),this.currentId=e,this._isPlaying=!0,this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime),this.masterGain.gain.setValueAtTime(.001,this.ctx.currentTime),this.masterGain.gain.linearRampToValueAtTime(this._isMuted?0:this._volume,this.ctx.currentTime+.4),e){case"brown-noise":this.buildBrownNoise();break;case"celestial-drone":this.buildCelestialDrone();break;case"binaural-gamma":this.buildBinauralBeat(200,40);break;case"binaural-alpha":this.buildBinauralBeat(210,10);break;case"rain-storm":this.buildRainStorm();break}}buildBrownNoise(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.sampleRate*5,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),r=t.getChannelData(0);let o=0;for(let g=0;g<e;g++){const m=Math.random()*2-1;o=(o+.02*m)/1.02,r[g]=o*3.2}const l=2048;for(let g=0;g<l;g++){const m=g/l;r[g]=r[g]*m+r[e-l+g]*(1-m)}const u=this.ctx.createBufferSource();u.buffer=t,u.loop=!0;const f=this.ctx.createBiquadFilter();f.type="lowpass",f.frequency.setValueAtTime(450,this.ctx.currentTime),f.Q.setValueAtTime(.7,this.ctx.currentTime),u.connect(f),f.connect(this.masterGain),u.start(),this.activeNodes.push(u,f)}buildCelestialDrone(){if(!this.ctx||!this.masterGain)return;const e=216,t=[e,e*1.5,e*2,e*2.5],r=[-4,3,-2,5];t.forEach((o,l)=>{if(!this.ctx||!this.masterGain)return;const u=this.ctx.createOscillator();u.type=l%2===0?"sine":"triangle",u.frequency.setValueAtTime(o,this.ctx.currentTime),u.detune.setValueAtTime(r[l],this.ctx.currentTime);const f=this.ctx.createGain();f.gain.setValueAtTime(.18/(l+1),this.ctx.currentTime);const g=this.ctx.createOscillator();g.frequency.setValueAtTime(.08+l*.03,this.ctx.currentTime);const m=this.ctx.createGain();m.gain.setValueAtTime(.04,this.ctx.currentTime),g.connect(m),m.connect(f.gain),u.connect(f),f.connect(this.masterGain),u.start(),g.start(),this.activeNodes.push(u,g,f,m)})}buildBinauralBeat(e,t){if(!this.ctx||!this.masterGain)return;const r=this.ctx.createOscillator();r.type="sine",r.frequency.setValueAtTime(e,this.ctx.currentTime);const o=this.ctx.createGain();o.gain.setValueAtTime(.22,this.ctx.currentTime);const l=this.ctx.createOscillator();l.type="sine",l.frequency.setValueAtTime(e+t,this.ctx.currentTime);const u=this.ctx.createGain();u.gain.setValueAtTime(.22,this.ctx.currentTime);const f=this.ctx.createChannelMerger(2);r.connect(o),o.connect(f,0,0),l.connect(u),u.connect(f,0,1);const g=this.ctx.createOscillator();g.type="triangle",g.frequency.setValueAtTime(e/2,this.ctx.currentTime);const m=this.ctx.createGain();m.gain.setValueAtTime(.08,this.ctx.currentTime),g.connect(m),m.connect(this.masterGain),f.connect(this.masterGain),r.start(),l.start(),g.start(),this.activeNodes.push(r,l,g,o,u,m,f)}buildRainStorm(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.sampleRate*4,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),r=t.getChannelData(0);let o=0,l=0,u=0,f=0,g=0,m=0,_=0;for(let S=0;S<e;S++){const b=Math.random()*2-1;o=.99886*o+b*.0555179,l=.99332*l+b*.0750759,u=.969*u+b*.153852,f=.8665*f+b*.3104856,g=.55*g+b*.5329522,m=-.7616*m-b*.016898,r[S]=(o+l+u+f+g+m+_+b*.5362)*.12,_=b*.115926}const E=this.ctx.createBufferSource();E.buffer=t,E.loop=!0;const h=this.ctx.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(1200,this.ctx.currentTime),E.connect(h),h.connect(this.masterGain),E.start(),this.activeNodes.push(E,h)}playFocusChime(){try{if(this.initContext(),!this.ctx)return;const e=this.ctx.currentTime,t=[528,1056,1584],r=[.28,.09,.03],o=this.ctx.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.45,e+.04),o.gain.exponentialRampToValueAtTime(1e-4,e+3.4),o.connect(this.ctx.destination),t.forEach((l,u)=>{if(!this.ctx)return;const f=this.ctx.createOscillator(),g=this.ctx.createGain();f.type="sine",f.frequency.setValueAtTime(l,e),g.gain.setValueAtTime(r[u],e),f.connect(g),g.connect(o),f.start(e),f.stop(e+3.5)})}catch(e){console.warn("Focus chime could not play:",e)}}playBreakChime(){try{if(this.initContext(),!this.ctx)return;const e=this.ctx.currentTime;[{freq:523.25,start:0,dur:1.8,vol:.22},{freq:659.25,start:.22,dur:1.8,vol:.2},{freq:783.99,start:.44,dur:2.2,vol:.25},{freq:1046.5,start:.66,dur:2.8,vol:.18}].forEach(({freq:r,start:o,dur:l,vol:u})=>{if(!this.ctx)return;const f=e+o,g=this.ctx.createOscillator(),m=this.ctx.createGain();g.type="sine",g.frequency.setValueAtTime(r,f),m.gain.setValueAtTime(0,f),m.gain.linearRampToValueAtTime(u,f+.04),m.gain.exponentialRampToValueAtTime(1e-4,f+l),g.connect(m),m.connect(this.ctx.destination),g.start(f),g.stop(f+l+.1)})}catch(e){console.warn("Break chime could not play:",e)}}}const Er=new Bv;class Hv{startKeepAlive(){}stopKeepAlive(){}updateMetadata(e){if(!(typeof window>"u"||!("mediaSession"in navigator)))try{const t=e.artworkUrl?[{src:e.artworkUrl,sizes:"96x96",type:"image/jpeg"},{src:e.artworkUrl,sizes:"128x128",type:"image/jpeg"},{src:e.artworkUrl,sizes:"192x192",type:"image/jpeg"},{src:e.artworkUrl,sizes:"256x256",type:"image/jpeg"},{src:e.artworkUrl,sizes:"512x512",type:"image/jpeg"}]:[];navigator.mediaSession.metadata=new MediaMetadata({title:e.title||"FOR ME Sanctuary",artist:e.artist||"Private Life Ledger",album:e.album||"Sanctuary Audio",artwork:t}),navigator.mediaSession.playbackState="playing",navigator.mediaSession.setActionHandler("play",()=>{e.onPlay(),navigator.mediaSession.playbackState="playing"}),navigator.mediaSession.setActionHandler("pause",()=>{e.onPause(),navigator.mediaSession.playbackState="paused"}),e.onNext?navigator.mediaSession.setActionHandler("nexttrack",e.onNext):navigator.mediaSession.setActionHandler("nexttrack",null),e.onPrev?navigator.mediaSession.setActionHandler("previoustrack",e.onPrev):navigator.mediaSession.setActionHandler("previoustrack",null)}catch(t){console.warn("[MediaSession] Metadata update error:",t)}}setPlaybackState(e){if(!(typeof window>"u"||!("mediaSession"in navigator)))try{navigator.mediaSession.playbackState=e}catch{}}}const Fi=new Hv;function Gv(s){if(!s||typeof s!="string")return null;const e=s.trim();let t,r;const o=e.match(/[?&]list=([a-zA-Z0-9_-]+)/);o&&o[1]&&(r=o[1]);const l=e.match(/[?&]v=([a-zA-Z0-9_-]{11})/);if(l&&l[1]&&(t=l[1]),!t){const f=e.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);f&&f[1]&&(t=f[1])}if(!t){const f=e.match(/youtube\.com\/(?:live|embed|v|shorts)\/([a-zA-Z0-9_-]{11})/);f&&f[1]&&(t=f[1])}if(!t&&!r&&/^[a-zA-Z0-9_-]{11}$/.test(e)&&(t=e),!t&&!r&&/^(?:PL|RD|UU|FL|OLAK5uy_)[a-zA-Z0-9_-]+$/.test(e)&&(r=e),!t&&!r)return null;let u="video";return r&&t?u="video_in_playlist":r&&(u="playlist"),{type:u,videoId:t,playlistId:r,cleanUrl:e}}function Vv(s){return s?`https://img.youtube.com/vi/${s}/hqdefault.jpg`:"https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=600&auto=format&fit=crop"}const ic=[{id:"lofi-girl-main",title:"Lofi Girl — Beats to Relax / Study to",type:"video",videoId:"jfKfPfyJRdk",url:"https://www.youtube.com/watch?v=jfKfPfyJRdk",channel:"Lofi Girl",thumbnailUrl:"https://img.youtube.com/vi/jfKfPfyJRdk/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"synthwave-chilledcow",title:"Synthwave Radio — Chill Beats to Code & Chill",type:"video",videoId:"4xDzrJKXOOY",url:"https://www.youtube.com/watch?v=4xDzrJKXOOY",channel:"Lofi Girl / Synthwave Boy",thumbnailUrl:"https://img.youtube.com/vi/4xDzrJKXOOY/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"deep-focus-ambient",title:"Deep Focus Ambient — Flow State Alpha Waves",type:"video",videoId:"lTRiuFIWV54",url:"https://www.youtube.com/watch?v=lTRiuFIWV54",channel:"Greenred Productions",thumbnailUrl:"https://img.youtube.com/vi/lTRiuFIWV54/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"peaceful-piano-solitude",title:"Peaceful Piano & Soft Rain — Gentle Solitude",type:"video",videoId:"1WUEk0R79_Q",url:"https://www.youtube.com/watch?v=1WUEk0R79_Q",channel:"Quiet Quest",thumbnailUrl:"https://img.youtube.com/vi/1WUEk0R79_Q/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"classical-focus-mozart",title:"Classical Focus — Mozart, Beethoven, Bach",type:"video",videoId:"WPni755-Krg",url:"https://www.youtube.com/watch?v=WPni755-Krg",channel:"HALIDONMUSIC",thumbnailUrl:"https://img.youtube.com/vi/WPni755-Krg/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"cozy-coffee-shop-lofi",title:"Cozy Coffee Shop Lofi — Rainy Night Ambience",type:"video",videoId:"-5KAN9_CzSA",url:"https://www.youtube.com/watch?v=-5KAN9_CzSA",channel:"Calmed by Nature",thumbnailUrl:"https://img.youtube.com/vi/-5KAN9_CzSA/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()}],fm=xe.createContext(void 0),ea={palette:"cosmic-royal",speed:"balanced",amplitude:"majestic",waveGeometry:"dunes",waveLayerDensity:"deep",horizonHeight:"balanced",waveStrokeOpacity:.5,interactiveParallax:!0,celestialBody:"crescent-moon",celestialPosition:"default",celestialScaleMultiplier:1,rotationSpeed:"standard",showNebulaDust:!0,nebulaIntensity:"vivid",showConstellations:!0,showComet:!0,shootingStarMode:"occasional",showStars:!0,starDensity:"balanced",showCrossStars:!1,showOrbitalTrack:!1,showMeridian:!1,clockFontStyle:"tabular",clockSize:"standard",clockPosition:"center",clockDivider:"colon",clockColor:"palette",clockFormat:"12h",showSeconds:!0,showDate:!0,showGreeting:!0,clockHalo:"pulsar",ecoSleepMinutes:7.5},Ja={name:"Azan",motto:"Remember, you are here for you.",defaultFocusTopic:"Engineering",defaultFocusMode:"Deep Work"},ed={focusDurationMinutes:25,breakDurationMinutes:5,displayMode:"telemetry",autoStartBreaks:!0,soundEnabled:!0},Jr=(s,e)=>{var u;if(!s)return e;const t=s.trim().match(/(\d+)(?::(\d+))?\s*(am|pm)?/i);if(!t)return e;let r=parseInt(t[1],10);const o=t[2]?parseInt(t[2],10):0,l=(u=t[3])==null?void 0:u.toLowerCase();return l==="pm"&&r<12&&(r+=12),l==="am"&&r===12&&(r=0),Math.min(24,Math.max(0,r+o/60))},Ml=[{id:"r1",title:"Morning Protocol",timeRange:"06:00 – 09:00",startHour:6,endHour:9,description:"Hydration, natural sunlight, 30-min movement, deep work session.",iconType:"morning",colorTag:"#f59e0b"},{id:"r2",title:"Core Deep Work",timeRange:"09:00 – 17:00",startHour:9,endHour:17,description:"High-leverage engineering problem solving, core building goals, focused sprints.",iconType:"afternoon",colorTag:"#8b5cf6"},{id:"r3",title:"Evening Wind-Down",timeRange:"17:00 – 22:30",startHour:17,endHour:22.5,description:"Reflection, physical cooldown, reading, digital sunset and deep recovery.",iconType:"evening",colorTag:"#3b82f6"}],jv=({children:s})=>{const[e,t]=xe.useState(()=>{try{const L=localStorage.getItem("for_me_profile");if(L){const H=JSON.parse(L);return H.name==="Viren"?{...Ja,name:"Azan"}:{...Ja,...H}}return Ja}catch{return Ja}}),r=L=>{t(H=>{const re={...H,...L};return localStorage.setItem("for_me_profile",JSON.stringify(re)),re})};xe.useEffect(()=>{localStorage.setItem("for_me_profile",JSON.stringify(e))},[e]);const[o,l]=xe.useState(()=>{try{return localStorage.getItem("for_me_app_theme")==="light"?"light":"dark"}catch{return"dark"}}),u=()=>{l(L=>L==="light"?"dark":"light")};xe.useEffect(()=>{localStorage.setItem("for_me_app_theme",o),o==="light"?(document.documentElement.classList.add("theme-light"),document.documentElement.classList.remove("theme-dark")):(document.documentElement.classList.add("theme-dark"),document.documentElement.classList.remove("theme-light"))},[o]);const[f,g]=xe.useState(()=>{try{const L=localStorage.getItem("for_me_is_hud_hidden");return L?JSON.parse(L):!1}catch{return!1}}),m=()=>g(L=>!L);xe.useEffect(()=>{localStorage.setItem("for_me_is_hud_hidden",JSON.stringify(f))},[f]);const[_,E]=xe.useState(()=>{try{return localStorage.getItem("for_me_wallpaper_theme")||"cosmic-cliffs"}catch{return"cosmic-cliffs"}});xe.useEffect(()=>{localStorage.setItem("for_me_wallpaper_theme",_)},[_]);const[h,S]=xe.useState(()=>{try{const L=localStorage.getItem("for_me_wallpaper_settings_v3")||localStorage.getItem("for_me_wallpaper_settings_v2");return L?{...ea,...JSON.parse(L)}:ea}catch{return ea}}),b=L=>{S(H=>{const re={...H,...L};return localStorage.setItem("for_me_wallpaper_settings_v3",JSON.stringify(re)),re})},w=()=>{S(ea),localStorage.setItem("for_me_wallpaper_settings_v3",JSON.stringify(ea))},[v,y]=xe.useState(!1),N=xe.useRef(!1);N.current=v,xe.useEffect(()=>{const L=h.ecoSleepMinutes??7.5;if(L<=0){N.current&&y(!1);return}const H=L*60*1e3;let re;const Ne=()=>{N.current&&y(!1),clearTimeout(re),re=setTimeout(()=>{y(!0)},H)};re=setTimeout(()=>{y(!0)},H);const Re=["mousemove","mousedown","keydown","touchstart","scroll","pointerdown"];let ze=Date.now();const qe=()=>{const st=Date.now();if(N.current){y(!1),Ne(),ze=st;return}st-ze>2e3&&(ze=st,Ne())};return Re.forEach(st=>{window.addEventListener(st,qe,{passive:!0})}),()=>{clearTimeout(re),Re.forEach(st=>{window.removeEventListener(st,qe)})}},[h.ecoSleepMinutes]);const[U,P]=xe.useState(()=>{try{const L=localStorage.getItem("for_me_tasks");return L?JSON.parse(L):[{id:"1",text:"Core engineering deep focus sprint",completed:!1},{id:"2",text:"System architecture review & refinement",completed:!1},{id:"3",text:"Physical movement & hydration (8 glasses)",completed:!1}]}catch{return[{id:"1",text:"Core engineering deep focus sprint",completed:!1}]}});xe.useEffect(()=>{localStorage.setItem("for_me_tasks",JSON.stringify(U))},[U]);const z=L=>{P(H=>H.map(re=>re.id===L?{...re,completed:!re.completed,completedAt:re.completed?void 0:new Date().toISOString()}:re))},I=L=>{if(!L.trim())return;const H={id:`task_${Date.now()}`,text:L.trim(),completed:!1};P(re=>[H,...re])},M=L=>{P(H=>H.filter(re=>re.id!==L))},[D,J]=xe.useState(()=>{try{const L=localStorage.getItem("for_me_habits");return L?JSON.parse(L):[{id:"h1",name:"Deep Focus & Engineering Block",completed:!1,streak:3},{id:"h2",name:"Hydration Target (8 Glasses)",completed:!1,streak:5},{id:"h3",name:"Mindful Walk & Movement",completed:!1,streak:2}]}catch{return[{id:"h1",name:"Deep Focus & Engineering Block",completed:!1,streak:1}]}});xe.useEffect(()=>{localStorage.setItem("for_me_habits",JSON.stringify(D))},[D]);const W=L=>{J(H=>H.map(re=>{if(re.id===L){const Ne=!re.completed;return{...re,completed:Ne,streak:Ne?re.streak+1:Math.max(0,re.streak-1)}}return re}))},V=L=>{if(!L.trim())return;const H={id:`habit_${Date.now()}`,name:L.trim(),completed:!1,streak:0};J(re=>[...re,H])},B=L=>{J(H=>H.filter(re=>re.id!==L))},[X,F]=xe.useState(()=>{try{const L=localStorage.getItem("for_me_routines");return L?JSON.parse(L):Ml}catch{return Ml}});xe.useEffect(()=>{localStorage.setItem("for_me_routines",JSON.stringify(X))},[X]);const te=L=>{const H=L.timeRange.split(/[-–—to]/i),re=L.startHour!==void 0?L.startHour:Jr(H[0],9),Ne=L.endHour!==void 0?L.endHour:Jr(H[1],re+1),Re={id:`routine_${Date.now()}`,...L,startHour:re,endHour:Ne,colorTag:L.colorTag||"#8b5cf6"};F(ze=>[...ze,Re])},de=(L,H)=>{F(re=>re.map(Ne=>{if(Ne.id!==L)return Ne;const Re={...Ne,...H};if(H.timeRange&&(H.startHour===void 0||H.endHour===void 0)){const ze=H.timeRange.split(/[-–—to]/i);Re.startHour=Jr(ze[0],Re.startHour||9),Re.endHour=Jr(ze[1],Re.endHour||17)}return Re}))},$=L=>{F(H=>H.filter(re=>re.id!==L))},ie=()=>{F(Ml)},[O,ee]=xe.useState(null),[k,q]=xe.useState(0);xe.useEffect(()=>{const L=()=>{const re=new Date,Ne=re.getHours()+re.getMinutes()/60,Re=re.getHours()*60+re.getMinutes();let ze=null,qe=0;for(const st of X){let vt=st.startHour,Ze=st.endHour;if(vt===void 0||Ze===void 0){const yt=st.timeRange.split(/[-–—to]/i);vt=Jr(yt[0],0),Ze=Jr(yt[1],24)}if(vt<=Ze){if(Ne>=vt&&Ne<Ze){ze=st;const yt=Math.round(Ze*60);qe=Math.max(0,yt-Re);break}}else if(Ne>=vt||Ne<Ze){ze=st;const yt=Math.round(Ze*60);Ne>=vt?qe=Math.max(0,1440-Re+yt):qe=Math.max(0,yt-Re);break}}ee(ze),q(qe)};L();const H=setInterval(L,15e3);return()=>clearInterval(H)},[X]);const[pe,Y]=xe.useState(0),[oe,me]=xe.useState(!1),[ge,be]=xe.useState(e.defaultFocusTopic||"Engineering"),[Ie,it]=xe.useState(()=>{try{const L=localStorage.getItem("for_me_study_sessions");return L?JSON.parse(L):[]}catch{return[]}});xe.useEffect(()=>{let L=null;return oe?L=setInterval(()=>{Y(H=>H+1)},1e3):!oe&&pe!==0&&clearInterval(L),()=>clearInterval(L)},[oe,pe]);const $e=()=>me(L=>!L),De=()=>{if(pe>30){const L={id:`ses_${Date.now()}`,subject:ge,durationSeconds:pe,timestamp:new Date().toISOString()};it(H=>{const re=[L,...H];return localStorage.setItem("for_me_study_sessions",JSON.stringify(re)),re})}me(!1),Y(0)},Ve=(L,H,re)=>{if(L<=0)return;const Ne={id:`ses_manual_${Date.now()}`,subject:(H==null?void 0:H.trim())||ge||"Engineering",mode:(re==null?void 0:re.trim())||"Manual Entry",durationSeconds:Math.round(L*60),timestamp:new Date().toISOString()};it(Re=>{const ze=[Ne,...Re];return localStorage.setItem("for_me_study_sessions",JSON.stringify(ze)),ze})},Xe=L=>{it(H=>{const re=H.filter(Ne=>Ne.id!==L);return localStorage.setItem("for_me_study_sessions",JSON.stringify(re)),re})},[nt,_t]=xe.useState(()=>{try{const L=localStorage.getItem("for_me_pomodoro_settings");return L?{...ed,...JSON.parse(L)}:ed}catch{return ed}});xe.useEffect(()=>{localStorage.setItem("for_me_pomodoro_settings",JSON.stringify(nt))},[nt]);const[ht,lt]=xe.useState("idle"),[At,le]=xe.useState(()=>nt.focusDurationMinutes*60),[Mt,jt]=xe.useState(()=>nt.focusDurationMinutes*60);xe.useEffect(()=>{let L=null;return(ht==="focus"||ht==="break")&&(L=setInterval(()=>{le(H=>{if(H<=1)if(ht==="focus"){nt.soundEnabled&&Er.playFocusChime();const re=Mt,Ne={id:`ses_${Date.now()}`,subject:ge,mode:"Pomodoro Focus",durationSeconds:re,timestamp:new Date().toISOString()};if(it(Re=>{const ze=[Ne,...Re];return localStorage.setItem("for_me_study_sessions",JSON.stringify(ze)),ze}),nt.autoStartBreaks){lt("break");const Re=nt.breakDurationMinutes*60;return jt(Re),Re}else{lt("idle");const Re=nt.focusDurationMinutes*60;return jt(Re),Re}}else{nt.soundEnabled&&Er.playBreakChime(),lt("idle");const re=nt.focusDurationMinutes*60;return jt(re),re}return H-1})},1e3)),()=>{L&&clearInterval(L)}},[ht,Mt,nt,ge]);const an=L=>{const re=(L||nt.focusDurationMinutes)*60;jt(re),le(re),lt("focus")},Q=()=>{(ht==="focus"||ht==="break")&&lt("paused")},hn=()=>{ht==="paused"&&lt("focus")},Tt=()=>{ht==="focus"?lt("paused"):ht==="paused"?lt("focus"):ht==="break"?lt("paused"):an()},kt=()=>{lt("idle");const L=nt.focusDurationMinutes*60;jt(L),le(L)},ke=()=>{if(ht==="focus"){lt("break");const L=nt.breakDurationMinutes*60;jt(L),le(L)}else{lt("idle");const L=nt.focusDurationMinutes*60;jt(L),le(L)}},Rt=()=>{_t(L=>({...L,displayMode:L.displayMode==="telemetry"?"numbers":"telemetry"}))},[Ye,ut]=xe.useState(()=>{try{const L=localStorage.getItem("for_me_hydration");return L?JSON.parse(L):62.5}catch{return 62.5}});xe.useEffect(()=>{localStorage.setItem("for_me_hydration",JSON.stringify(Ye))},[Ye]);const[R,T]=xe.useState(()=>{try{const L=localStorage.getItem("for_me_sleep_hours");return L?JSON.parse(L):8}catch{return 8}}),se=L=>{T(L),localStorage.setItem("for_me_sleep_hours",JSON.stringify(L))},[Pe,Me]=xe.useState(()=>{try{const L=localStorage.getItem("for_me_daily_rating");return L?JSON.parse(L):8}catch{return 8}});xe.useEffect(()=>{localStorage.setItem("for_me_daily_rating",JSON.stringify(Pe))},[Pe]);const Le=()=>{const L=new Date,H=L.getFullYear(),re=String(L.getMonth()+1).padStart(2,"0"),Ne=String(L.getDate()).padStart(2,"0");return`${H}-${re}-${Ne}`},[Be,_e]=xe.useState(()=>{try{return localStorage.getItem("for_me_last_active_date")||Le()}catch{return Le()}}),we=L=>{if(P(H=>{const re=H.map(Ne=>({...Ne,completed:!1,completedAt:void 0}));return localStorage.setItem("for_me_tasks",JSON.stringify(re)),re}),J(H=>{const re=H.map(Ne=>({...Ne,completed:!1,streak:Ne.completed?Ne.streak:0}));return localStorage.setItem("for_me_habits",JSON.stringify(re)),re}),ut(0),localStorage.setItem("for_me_hydration",JSON.stringify(0)),pe>30){const H={id:`ses_${Date.now()}`,subject:ge,durationSeconds:pe,timestamp:new Date().toISOString()};it(re=>{const Ne=[H,...re];return localStorage.setItem("for_me_study_sessions",JSON.stringify(Ne)),Ne})}me(!1),Y(0),_e(L),localStorage.setItem("for_me_last_active_date",L)};xe.useEffect(()=>{const L=()=>{const re=Le(),Ne=localStorage.getItem("for_me_last_active_date");Ne?Ne!==re&&we(re):(localStorage.setItem("for_me_last_active_date",re),_e(re))};L();const H=setInterval(L,1e4);return window.addEventListener("focus",L),()=>{clearInterval(H),window.removeEventListener("focus",L)}},[pe,ge]);const Oe=()=>{const L=Le();we(L)},j=()=>{["for_me_profile","for_me_tasks","for_me_habits","for_me_routines","for_me_hydration","for_me_sleep_hours","for_me_daily_rating","for_me_study_sessions","for_me_pomodoro_settings","for_me_wallpaper_settings_v3","for_me_wallpaper_theme","for_me_app_theme","for_me_is_hud_hidden","for_me_last_active_date","for_me_active_yt","for_me_saved_yt_library"].forEach(H=>localStorage.removeItem(H)),t(Ja),P([{id:"1",text:"Core engineering deep focus sprint",completed:!1},{id:"2",text:"System architecture review & refinement",completed:!1},{id:"3",text:"Physical movement & hydration (8 glasses)",completed:!1}]),J([{id:"h1",name:"Deep Focus & Engineering Block",completed:!1,streak:0},{id:"h2",name:"Hydration Target (8 Glasses)",completed:!1,streak:0},{id:"h3",name:"Mindful Walk & Movement",completed:!1,streak:0}]),F(Ml),ut(0),T(8),Me(8),Y(0),me(!1),it([]),S(ea),_e(Le())},[Te,ye]=xe.useState("youtube"),[Ce,he]=xe.useState(!1),[Ee,Ge]=xe.useState("brown-noise"),[Qe,Ae]=xe.useState(.65),[Ke,rt]=xe.useState(!1),[je,pt]=xe.useState(!1),[Ht,Qt]=xe.useState(!1),[tn,on]=xe.useState(()=>{try{const L=localStorage.getItem("for_me_active_yt");return L?JSON.parse(L):ic[0]}catch{return ic[0]}}),[qt,Bn]=xe.useState(70),[wn,nn]=xe.useState(!1),[xt,Ut]=xe.useState(!1),[Ct,Jt]=xe.useState(()=>{try{const L=localStorage.getItem("for_me_saved_yt_library");return L?JSON.parse(L):[]}catch{return[]}});xe.useEffect(()=>{tn&&localStorage.setItem("for_me_active_yt",JSON.stringify(tn))},[tn]),xe.useEffect(()=>{localStorage.setItem("for_me_saved_yt_library",JSON.stringify(Ct))},[Ct]);const en=L=>{if(je){pt(!1);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("pauseVideo")}catch{}}ye("ambient");const H=L||Ee;Ge(H),Er.play(H),he(!0);const re=pa.find(Ne=>Ne.id===H);Fi.startKeepAlive(),Fi.updateMetadata({title:(re==null?void 0:re.title)||"Procedural Soundscape",artist:"FOR ME Sanctuary (Offline)",album:"Sound Sanctuary",onPlay:()=>en(H),onPause:Hn})},Hn=()=>{Er.stop(),he(!1),Fi.stopKeepAlive(),Fi.setPlaybackState("paused")},Gn=L=>{Ae(L),Er.setVolume(L)},ei=()=>{const L=Er.toggleMute();rt(L)},Gt=L=>{Er.stop(),he(!1),on(L),ye("youtube"),pt(!0),nn(!1);try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}},lr=()=>{if(je){pt(!1);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("pauseVideo")}catch{}}else{Er.stop(),he(!1),ye("youtube"),pt(!0),nn(!1);try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute(),typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("playVideo")}catch{}}},cr=()=>{pt(!1);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("stopVideo")}catch{}},ur=()=>{try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("nextVideo"),pt(!0)}catch{}},ji=()=>{try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("previousVideo"),pt(!0)}catch{}},ln=L=>{Bn(L);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("setVolume",[L])}catch{}},A=()=>{nn(L=>{const H=!L;try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand(H?"mute":"unMute")}catch{}return H})},K=(L,H)=>{var ze;const re=Gv(L);if(!re)return{success:!1,error:"Could not recognize a valid YouTube video or playlist link. Please check the URL format and try again."};const Ne=(H==null?void 0:H.trim())||(re.type==="playlist"?`Custom Playlist (${(ze=re.playlistId)==null?void 0:ze.slice(0,8)}...)`:`YouTube Audio (${re.videoId||"Stream"})`),Re={id:`yt-${Date.now()}-${Math.random().toString(36).substr(2,5)}`,title:Ne,type:re.type,videoId:re.videoId,playlistId:re.playlistId,url:re.cleanUrl,thumbnailUrl:Vv(re.videoId),channel:re.type==="playlist"?"Custom YouTube Playlist":"Custom YouTube Stream",createdAt:new Date().toISOString()};return Jt(qe=>[Re,...qe]),Gt(Re),{success:!0,item:Re}},ce=L=>{Jt(H=>H.filter(re=>re.id!==L))};return d.jsx(fm.Provider,{value:{profile:e,setProfile:t,updateProfile:r,appTheme:o,setAppTheme:l,toggleAppTheme:u,isHUDHidden:f,setIsHUDHidden:g,toggleHUDHidden:m,tasks:U,toggleTask:z,addTask:I,deleteTask:M,wallpaperTheme:_,setWallpaperTheme:E,wallpaperSettings:h,updateWallpaperSettings:b,resetWallpaperSettings:w,habits:D,toggleHabit:W,addHabit:V,deleteHabit:B,routines:X,addRoutineBlock:te,updateRoutineBlock:de,deleteRoutineBlock:$,resetRoutines:ie,activeRoutineBlock:O,activeRoutineMinutesLeft:k,studySeconds:pe,isStudyActive:oe,studySubject:ge,setStudySubject:be,toggleStudyTimer:$e,resetStudyTimer:De,studySessions:Ie,logManualStudyTime:Ve,deleteStudySession:Xe,pomodoroPhase:ht,pomodoroSecondsLeft:At,pomodoroTotalSeconds:Mt,pomodoroSettings:nt,setPomodoroSettings:_t,startPomodoro:an,pausePomodoro:Q,resumePomodoro:hn,togglePomodoro:Tt,resetPomodoro:kt,skipPomodoroPhase:ke,togglePomodoroDisplayMode:Rt,hydration:Ye,setHydration:ut,sleepHours:R,setSleep:se,dailyRating:Pe,setDailyRating:Me,lastActiveDate:Be,resetDayProgress:Oe,factoryReset:j,audioSource:Te,setAudioSource:ye,isAudioPlaying:Ce,activeSoundscapeId:Ee,audioVolume:Qe,isAudioMuted:Ke,playSoundscape:en,stopSoundscape:Hn,setAudioVolume:Gn,toggleAudioMute:ei,isYouTubePlaying:je,setYouTubeIsPlaying:pt,isYouTubePlayerReady:Ht,setYouTubePlayerReady:Qt,activeYouTubeItem:tn,youtubeVolume:qt,isYouTubeMuted:wn,savedYouTubeItems:Ct,showYouTubePreview:xt,setShowYouTubePreview:Ut,playYouTubeItem:Gt,toggleYouTubePlay:lr,stopYouTube:cr,nextYouTubeTrack:ur,prevYouTubeTrack:ji,setYouTubeVolume:ln,toggleYouTubeMute:A,addYouTubeToLibrary:K,removeYouTubeFromLibrary:ce,isEcoSleeping:v,setIsEcoSleeping:y},children:s})},ss=()=>{const s=xe.useContext(fm);if(!s)throw new Error("useData must be used within a DataProvider");return s},Wv=()=>{const s=xe.useRef(null),{isHUDHidden:e,wallpaperSettings:t,appTheme:r,isEcoSleeping:o}=ss(),l=xe.useRef(e),u=xe.useRef(t),f=xe.useRef(r),g=xe.useRef(o);g.current=o;const m=xe.useRef(!1),_=xe.useRef(null);return xe.useEffect(()=>{l.current=e},[e]),xe.useEffect(()=>{u.current=t},[t]),xe.useEffect(()=>{f.current=r},[r]),xe.useEffect(()=>{!o&&!m.current&&_.current&&_.current()},[o]),xe.useEffect(()=>{const E=s.current;if(!E)return;const h=E.getContext("2d");if(!h)return;let S,b=0,w=0;const v=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let y=[];const N=()=>{y=[];const $=u.current.starDensity||"balanced",ie=$==="sparse"?.45:$==="dense"?1.6:$==="galaxy"?2.4:1,O=b<768?85:160,ee=Math.round(O*ie);for(let k=0;k<ee;k++){const q=Math.random()>.85?2:Math.random()>.45?1:0,pe=Math.random()*.65+(q===2?.85:.35);y.push({x:Math.random()*b,y:Math.random()*w,z:q,radius:pe,alpha:Math.random()*.55+.25,alphaSpeed:Math.random()*.015+.005,alphaPhase:Math.random()*Math.PI*2,vx:(Math.random()-.5)*.06,vy:(Math.random()-.5)*.06})}},U=()=>{if(!E)return;const $=Math.min(window.devicePixelRatio||1,1.25);b=window.innerWidth,w=window.innerHeight,E.width=b*$,E.height=w*$,E.style.width=`${b}px`,E.style.height=`${w}px`,h.scale($,$),N()};U(),window.addEventListener("resize",U,{passive:!0});let P=b/2,z=w/2,I=b/2,M=w/2;const D=$=>{u.current.interactiveParallax!==!1&&(P=$.clientX,z=$.clientY)};window.addEventListener("mousemove",D,{passive:!0});const J=($,ie,O,ee)=>{h.save(),h.translate($,ie);const k=f.current==="light",q=Math.max(.15,Math.min(.95,ee));h.globalAlpha=q;const pe=h.createRadialGradient(0,0,0,0,0,O*.9);k?(pe.addColorStop(0,"rgba(245, 158, 11, 0.75)"),pe.addColorStop(.3,"rgba(217, 119, 6, 0.28)"),pe.addColorStop(.7,"rgba(180, 83, 9, 0.06)"),pe.addColorStop(1,"rgba(255, 255, 255, 0)")):(pe.addColorStop(0,"rgba(255, 255, 255, 0.85)"),pe.addColorStop(.3,"rgba(216, 180, 254, 0.35)"),pe.addColorStop(.7,"rgba(147, 51, 234, 0.08)"),pe.addColorStop(1,"rgba(0, 0, 0, 0)")),h.fillStyle=pe,h.beginPath(),h.arc(0,0,O*.9,0,Math.PI*2),h.fill();const Y=h.createLinearGradient(-O,0,O,0);k?(Y.addColorStop(0,"rgba(245, 158, 11, 0)"),Y.addColorStop(.35,"rgba(217, 119, 6, 0.45)"),Y.addColorStop(.5,"#b45309"),Y.addColorStop(.65,"rgba(217, 119, 6, 0.45)"),Y.addColorStop(1,"rgba(245, 158, 11, 0)")):(Y.addColorStop(0,"rgba(255, 255, 255, 0)"),Y.addColorStop(.35,"rgba(233, 213, 255, 0.55)"),Y.addColorStop(.5,"#ffffff"),Y.addColorStop(.65,"rgba(233, 213, 255, 0.55)"),Y.addColorStop(1,"rgba(255, 255, 255, 0)")),h.strokeStyle=Y,h.lineWidth=.75,h.beginPath(),h.moveTo(-O,0),h.lineTo(O,0),h.stroke();const oe=h.createLinearGradient(0,-O,0,O);k?(oe.addColorStop(0,"rgba(245, 158, 11, 0)"),oe.addColorStop(.35,"rgba(217, 119, 6, 0.45)"),oe.addColorStop(.5,"#b45309"),oe.addColorStop(.65,"rgba(217, 119, 6, 0.45)"),oe.addColorStop(1,"rgba(245, 158, 11, 0)")):(oe.addColorStop(0,"rgba(255, 255, 255, 0)"),oe.addColorStop(.35,"rgba(233, 213, 255, 0.55)"),oe.addColorStop(.5,"#ffffff"),oe.addColorStop(.65,"rgba(233, 213, 255, 0.55)"),oe.addColorStop(1,"rgba(255, 255, 255, 0)")),h.strokeStyle=oe,h.lineWidth=.75,h.beginPath(),h.moveTo(0,-O),h.lineTo(0,O),h.stroke();const me=O*.38;h.strokeStyle=k?"rgba(180, 83, 9, 0.35)":"rgba(255, 255, 255, 0.4)",h.lineWidth=.5,h.beginPath(),h.moveTo(-me,-me),h.lineTo(me,me),h.moveTo(-me,me),h.lineTo(me,-me),h.stroke(),h.fillStyle=k?"#d97706":"#ffffff",h.beginPath(),h.arc(0,0,1.2,0,Math.PI*2),h.fill(),h.restore()},W=[{x:-100,y:-100,length:100,speed:18,angle:Math.PI/4+.05,alpha:0,active:!1},{x:-100,y:-100,length:80,speed:16,angle:Math.PI/4-.08,alpha:0,active:!1},{x:-100,y:-100,length:110,speed:20,angle:Math.PI/4+.12,alpha:0,active:!1}];let V=120;const B=$=>{if($==="off")return;V--;const ie=$==="meteor-shower"?40:180;if(V<=0&&!v){V=Math.random()*($==="meteor-shower"?60:200)+ie;const O=W.find(ee=>!ee.active);O&&(O.active=!0,O.x=Math.random()*(b*.7),O.y=Math.random()*(w*.3),O.alpha=.95,O.length=Math.random()*50+70)}for(const O of W)if(O.active)if(O.x+=Math.cos(O.angle)*O.speed,O.y+=Math.sin(O.angle)*O.speed,O.alpha-=$==="meteor-shower"?.022:.016,O.alpha<=0||O.x>b+100||O.y>w+100)O.active=!1;else{h.save();const ee=O.x-Math.cos(O.angle)*O.length,k=O.y-Math.sin(O.angle)*O.length,q=h.createLinearGradient(ee,k,O.x,O.y);q.addColorStop(0,"rgba(255, 255, 255, 0)"),q.addColorStop(.7,"rgba(216, 180, 254, "+O.alpha*.6+")"),q.addColorStop(1,"#ffffff"),h.strokeStyle=q,h.lineWidth=1.3,h.beginPath(),h.moveTo(ee,k),h.lineTo(O.x,O.y),h.stroke(),h.fillStyle="#ffffff",h.beginPath(),h.arc(O.x,O.y,1.8,0,Math.PI*2),h.fill(),h.restore()}};let X=0,F=!0;const te=()=>{F=!document.hidden};document.addEventListener("visibilitychange",te);const de=()=>{if(!F){S=requestAnimationFrame(de);return}const $=u.current,ie=l.current;let O=1;$.speed==="frozen"?O=0:$.speed==="calm"?O=.45:$.speed==="dynamic"?O=1.45:O=.85,ie&&O>0&&(O*=1.25),X+=v?.002:.014*O,h.clearRect(0,0,b,w),I+=(P-I)*.04,M+=(z-M)*.04;const ee=(I-b/2)/(b/2),k=(M-w/2)/(w/2);let q=1;$.amplitude==="subtle"?q=.55:$.amplitude==="dramatic"?q=1.6:q=1,ie&&(q*=1.2);const pe=$.palette,Y=f.current==="light";let oe="#030208",me="#0b061c",ge="#170a32",be="rgba(168, 85, 247, 0.22)",Ie="rgba(99, 102, 241, 0.16)",it="rgba(168, 85, 247, 0.30)",$e="rgba(192, 132, 252, 0.40)",De=["#05030e","#090518","#0e0824"],Ve="rgba(168, 85, 247, 0.25)",Xe=["#0a051d","#110930","#190c42"],nt="rgba(168, 85, 247, 0.35)",_t=["#11082e","#1c0c4b","#261063"],ht="rgba(192, 132, 252, 0.45)",lt=["#180b3d","#260f64","#341584"],At="rgba(216, 180, 254, 0.55)",le=["#0c0620","#140833","#1e0c4a","#281061"],Mt="rgba(233, 213, 255, 0.65)";Y?pe==="celestial-cyan"?(oe="#eef8ff",me="#d7effe",ge="#b5e3fd",be="rgba(14, 165, 233, 0.16)",Ie="rgba(6, 182, 212, 0.12)",it="rgba(2, 132, 199, 0.12)",$e="rgba(3, 105, 161, 0.20)",De=["#93c5fd","#bfdbfe","#dbeafe"],Ve="rgba(29, 78, 216, 0.35)",Xe=["#60a5fa","#93c5fd","#bfdbfe"],nt="rgba(2, 132, 199, 0.42)",_t=["#38bdf8","#7dd3fc","#bae6fd"],ht="rgba(14, 165, 233, 0.50)",lt=["#bae6fd","#d7f0fd","#f0f9ff"],At="rgba(56, 189, 248, 0.58)",le=["#f0f9ff","#f8fcff","#ffffff","#ffffff"],Mt="rgba(2, 132, 199, 0.68)"):pe==="supernova-sunset"?(oe="#fff1f2",me="#fecdd3",ge="#fda4af",be="rgba(244, 63, 94, 0.16)",Ie="rgba(249, 115, 22, 0.12)",it="rgba(225, 29, 72, 0.12)",$e="rgba(190, 18, 60, 0.20)",De=["#f43f5e","#fb7185","#fda4af"],Ve="rgba(159, 18, 57, 0.35)",Xe=["#fb7185","#fda4af","#fecdd3"],nt="rgba(225, 29, 72, 0.42)",_t=["#fda4af","#fecdd3","#ffe4e6"],ht="rgba(244, 63, 94, 0.50)",lt=["#fecdd3","#ffe4e6","#fff1f2"],At="rgba(251, 113, 133, 0.58)",le=["#fff5f6","#fffafb","#ffffff","#ffffff"],Mt="rgba(225, 29, 72, 0.68)"):pe==="nocturne-silver"?(oe="#fafafa",me="#f4f4f6",ge="#e4e4e7",be="rgba(113, 113, 122, 0.14)",Ie="rgba(82, 82, 91, 0.10)",it="rgba(82, 82, 91, 0.12)",$e="rgba(63, 63, 70, 0.20)",De=["#a1a1aa","#d4d4d8","#e4e4e7"],Ve="rgba(63, 63, 70, 0.35)",Xe=["#d4d4d8","#e4e4e7","#f1f1f3"],nt="rgba(82, 82, 91, 0.42)",_t=["#e4e4e7","#f1f1f3","#f4f4f6"],ht="rgba(113, 113, 122, 0.50)",lt=["#f1f1f3","#f6f6f8","#fafafa"],At="rgba(161, 161, 170, 0.58)",le=["#f6f6f8","#fcfcfc","#ffffff","#ffffff"],Mt="rgba(82, 82, 91, 0.68)"):pe==="cyberpunk-neon"?(oe="#fdf2f8",me="#fae8ff",ge="#f5d0fe",be="rgba(236, 72, 153, 0.18)",Ie="rgba(6, 182, 212, 0.14)",it="rgba(168, 85, 247, 0.15)",$e="rgba(236, 72, 153, 0.22)",De=["#f472b6","#fbcfe8","#fdf2f8"],Ve="rgba(219, 39, 119, 0.35)",Xe=["#c084fc","#e9d5ff","#fae8ff"],nt="rgba(147, 51, 234, 0.42)",_t=["#38bdf8","#bae6fd","#f0f9ff"],ht="rgba(2, 132, 199, 0.50)",lt=["#fbcfe8","#fce7f3","#ffffff"],At="rgba(236, 72, 153, 0.58)",le=["#fdf2f8","#ffffff","#ffffff","#ffffff"],Mt="rgba(168, 85, 247, 0.68)"):pe==="solar-gold"?(oe="#fffbeb",me="#fef3c7",ge="#fde68a",be="rgba(245, 158, 11, 0.20)",Ie="rgba(234, 88, 12, 0.14)",it="rgba(217, 119, 6, 0.15)",$e="rgba(245, 158, 11, 0.22)",De=["#f59e0b","#fbbf24","#fef3c7"],Ve="rgba(180, 83, 9, 0.38)",Xe=["#fbbf24","#fcd34d","#fef9c3"],nt="rgba(217, 119, 6, 0.45)",_t=["#fde047","#fef08a","#fefce8"],ht="rgba(234, 88, 12, 0.52)",lt=["#fef08a","#fefce8","#ffffff"],At="rgba(245, 158, 11, 0.60)",le=["#fefce8","#ffffff","#ffffff","#ffffff"],Mt="rgba(217, 119, 6, 0.70)"):pe==="emerald-aurora"?(oe="#f0fdf4",me="#dcfce7",ge="#bbf7d0",be="rgba(16, 185, 129, 0.20)",Ie="rgba(34, 197, 94, 0.14)",it="rgba(22, 163, 74, 0.15)",$e="rgba(16, 185, 129, 0.22)",De=["#86efac","#bbf7d0","#dcfce7"],Ve="rgba(22, 163, 74, 0.38)",Xe=["#4ade80","#86efac","#bbf7d0"],nt="rgba(21, 128, 61, 0.45)",_t=["#22c55e","#4ade80","#86efac"],ht="rgba(16, 185, 129, 0.52)",lt=["#86efac","#bbf7d0","#f0fdf4"],At="rgba(22, 163, 74, 0.60)",le=["#f0fdf4","#f8fafc","#ffffff","#ffffff"],Mt="rgba(16, 185, 129, 0.70)"):pe==="pure-pitch-black"?(oe="#ffffff",me="#f8fafc",ge="#f1f5f9",be="rgba(148, 163, 184, 0.16)",Ie="rgba(100, 116, 139, 0.10)",it="rgba(71, 85, 105, 0.15)",$e="rgba(51, 65, 85, 0.22)",De=["#cbd5e1","#e2e8f0","#f1f5f9"],Ve="rgba(71, 85, 105, 0.38)",Xe=["#94a3b8","#cbd5e1","#e2e8f0"],nt="rgba(51, 65, 85, 0.45)",_t=["#64748b","#94a3b8","#cbd5e1"],ht="rgba(30, 41, 59, 0.52)",lt=["#cbd5e1","#e2e8f0","#f8fafc"],At="rgba(51, 65, 85, 0.60)",le=["#f8fafc","#ffffff","#ffffff","#ffffff"],Mt="rgba(15, 23, 42, 0.70)"):(oe="#fffbf3",me="#feeccd",ge="#fad4a0",be="rgba(245, 158, 11, 0.18)",Ie="rgba(217, 119, 6, 0.12)",it="rgba(180, 83, 9, 0.12)",$e="rgba(146, 64, 14, 0.20)",De=["#d4a373","#bc8a5f","#a47148"],Ve="rgba(146, 64, 14, 0.38)",Xe=["#e6ba8f","#d4a373","#bc8a5f"],nt="rgba(180, 83, 9, 0.45)",_t=["#f3d5b5","#e6ba8f","#d4a373"],ht="rgba(217, 119, 6, 0.52)",lt=["#faedcd","#f3d5b5","#fefae0"],At="rgba(245, 158, 11, 0.60)",le=["#fefae0","#fffdfa","#ffffff","#ffffff"],Mt="rgba(217, 119, 6, 0.70)"):pe==="celestial-cyan"?(oe="#020712",me="#041322",ge="#071f35",be="rgba(14, 165, 233, 0.18)",Ie="rgba(6, 182, 212, 0.12)",it="rgba(56, 189, 248, 0.12)",$e="rgba(103, 232, 249, 0.20)",De=["#030914","#051221","#071c31"],Ve="rgba(56, 189, 248, 0.22)",Xe=["#040f1f","#071b33","#0a2646"],nt="rgba(56, 189, 248, 0.32)",_t=["#06152a","#0a2544","#0f345c"],ht="rgba(56, 189, 248, 0.42)",lt=["#081b34","#0d2e54","#134273"],At="rgba(125, 211, 252, 0.52)",le=["#051224","#091c36","#0e294d","#133866"],Mt="rgba(186, 230, 253, 0.65)"):pe==="supernova-sunset"?(oe="#0a0208",me="#160412",ge="#24061c",be="rgba(244, 63, 94, 0.18)",Ie="rgba(249, 115, 22, 0.12)",it="rgba(251, 113, 133, 0.12)",$e="rgba(253, 186, 116, 0.20)",De=["#0d020a","#170412","#22061b"],Ve="rgba(244, 63, 94, 0.22)",Xe=["#150311","#24061d","#340929"],nt="rgba(244, 63, 94, 0.32)",_t=["#1e0518","#320827","#470c38"],ht="rgba(251, 113, 133, 0.42)",lt=["#280620","#420b33","#5c0f47"],At="rgba(251, 146, 60, 0.52)",le=["#180314","#270620","#3b0930","#500d41"],Mt="rgba(254, 215, 170, 0.65)"):pe==="nocturne-silver"?(oe="#030306",me="#08080d",ge="#101017",be="rgba(161, 161, 170, 0.16)",Ie="rgba(113, 113, 122, 0.10)",it="rgba(212, 212, 216, 0.12)",$e="rgba(228, 228, 231, 0.18)",De=["#060609","#0c0c12","#13131c"],Ve="rgba(161, 161, 170, 0.20)",Xe=["#0a0a0f","#12121b","#1a1a27"],nt="rgba(161, 161, 170, 0.30)",_t=["#0e0e16","#181824","#232333"],ht="rgba(212, 212, 216, 0.40)",lt=["#13131e","#1f1f30","#2d2d42"],At="rgba(228, 228, 231, 0.50)",le=["#0c0c13","#14141f","#1d1d2b","#272738"],Mt="rgba(244, 244, 245, 0.65)"):pe==="cyberpunk-neon"?(oe="#06000e",me="#120024",ge="#22003d",be="rgba(236, 72, 153, 0.22)",Ie="rgba(6, 182, 212, 0.18)",it="rgba(34, 211, 238, 0.15)",$e="rgba(244, 114, 182, 0.22)",De=["#0a0014","#150029","#24003d"],Ve="rgba(168, 85, 247, 0.25)",Xe=["#120021","#1f0038","#310052"],nt="rgba(236, 72, 153, 0.35)",_t=["#1c0030","#2d004d","#42006e"],ht="rgba(6, 182, 212, 0.45)",lt=["#25003d","#3d0066","#59008f"],At="rgba(244, 63, 94, 0.55)",le=["#160029","#260045","#380062","#4e0085"],Mt="rgba(34, 211, 238, 0.70)"):pe==="solar-gold"?(oe="#080400",me="#140900",ge="#241000",be="rgba(245, 158, 11, 0.22)",Ie="rgba(234, 88, 12, 0.16)",it="rgba(251, 191, 36, 0.15)",$e="rgba(252, 211, 77, 0.22)",De=["#0a0400","#170900","#261000"],Ve="rgba(217, 119, 6, 0.25)",Xe=["#130700","#220e00","#361600"],nt="rgba(245, 158, 11, 0.35)",_t=["#1e0a00","#301300","#4a1e00"],ht="rgba(251, 191, 36, 0.45)",lt=["#290e00","#421a00","#612700"],At="rgba(252, 211, 77, 0.55)",le=["#190800","#2a0e00","#401500","#592000"],Mt="rgba(254, 240, 138, 0.70)"):pe==="emerald-aurora"?(oe="#010d05",me="#021a0a",ge="#052e14",be="rgba(16, 185, 129, 0.22)",Ie="rgba(52, 211, 153, 0.16)",it="rgba(110, 231, 183, 0.15)",$e="rgba(52, 211, 153, 0.22)",De=["#021508","#04240f","#073918"],Ve="rgba(16, 185, 129, 0.25)",Xe=["#031f0c","#063316","#0a4b22"],nt="rgba(52, 211, 153, 0.35)",_t=["#052b12","#09431e","#0e602c"],ht="rgba(110, 231, 183, 0.45)",lt=["#083818","#0d5426","#147738"],At="rgba(167, 243, 208, 0.55)",le=["#062e14","#0a4720","#10632d","#18863f"],Mt="rgba(110, 231, 183, 0.70)"):pe==="pure-pitch-black"&&(oe="#000000",me="#020202",ge="#060606",be="rgba(255, 255, 255, 0.08)",Ie="rgba(161, 161, 170, 0.06)",it="rgba(161, 161, 170, 0.10)",$e="rgba(228, 228, 231, 0.15)",De=["#020202","#060606","#0a0a0a"],Ve="rgba(161, 161, 170, 0.20)",Xe=["#050505","#0a0a0a","#101010"],nt="rgba(161, 161, 170, 0.30)",_t=["#080808","#0e0e0e","#161616"],ht="rgba(212, 212, 216, 0.40)",lt=["#0c0c0c","#141414","#1e1e1e"],At="rgba(228, 228, 231, 0.50)",le=["#080808","#101010","#181818","#222222"],Mt="rgba(255, 255, 255, 0.75)");const jt=h.createLinearGradient(0,0,0,w);jt.addColorStop(0,oe),jt.addColorStop(.45,me),jt.addColorStop(1,ge),h.fillStyle=jt,h.fillRect(0,0,b,w);const an=h.createRadialGradient(b*.8,w*.18,0,b*.8,w*.18,b*.5);an.addColorStop(0,be),an.addColorStop(.7,"rgba(0, 0, 0, 0.04)"),an.addColorStop(1,"rgba(0, 0, 0, 0)"),h.fillStyle=an,h.fillRect(0,0,b,w);const Q=h.createRadialGradient(b*.18,w*.82,0,b*.18,w*.82,b*.55);if(Q.addColorStop(0,Ie),Q.addColorStop(.65,"rgba(0, 0, 0, 0.03)"),Q.addColorStop(1,"rgba(0, 0, 0, 0)"),h.fillStyle=Q,h.fillRect(0,0,b,w),$.showNebulaDust){h.save();const Ce=h.createRadialGradient(b*.35,w*.2,0,b*.35,w*.2,b*.38);Ce.addColorStop(0,be),Ce.addColorStop(.5,"rgba(126, 34, 206, 0.04)"),Ce.addColorStop(1,"rgba(0, 0, 0, 0)"),h.fillStyle=Ce,h.fillRect(0,0,b,w);const he=h.createRadialGradient(b*.7,w*.14,0,b*.7,w*.14,b*.32);he.addColorStop(0,Ie),he.addColorStop(.6,"rgba(14, 116, 144, 0.03)"),he.addColorStop(1,"rgba(0, 0, 0, 0)"),h.fillStyle=he,h.fillRect(0,0,b,w),h.restore()}if($.showConstellations){h.save(),h.strokeStyle=Y?"rgba(180, 130, 80, 0.28)":"rgba(255, 255, 255, 0.14)",h.lineWidth=.75;const Ce=[{x:b*.68,y:w*.1},{x:b*.72,y:w*.08},{x:b*.76,y:w*.09},{x:b*.78,y:w*.13},{x:b*.83,y:w*.14},{x:b*.84,y:w*.1},{x:b*.78,y:w*.09}];h.beginPath(),h.moveTo(Ce[0].x,Ce[0].y);for(let Ee=1;Ee<Ce.length;Ee++)h.lineTo(Ce[Ee].x,Ce[Ee].y);h.stroke(),h.fillStyle=Y?"#b45309":"#ffffff";for(const Ee of Ce)h.beginPath(),h.arc(Ee.x,Ee.y,1.4,0,Math.PI*2),h.fill();const he=[{x:b*.28,y:w*.08},{x:b*.31,y:w*.12},{x:b*.34,y:w*.09},{x:b*.37,y:w*.13},{x:b*.4,y:w*.1}];h.beginPath(),h.moveTo(he[0].x,he[0].y);for(let Ee=1;Ee<he.length;Ee++)h.lineTo(he[Ee].x,he[Ee].y);h.stroke();for(const Ee of he)h.beginPath(),h.arc(Ee.x,Ee.y,1.3,0,Math.PI*2),h.fill();h.restore()}if($.showComet){h.save();const Ce=X*.04%1,he=b*.75,Ee=w*.04,Ge=b*.25,Qe=w*.22,Ae=he+(Ge-he)*Ce,Ke=Ee+(Qe-Ee)*Ce,rt=Math.atan2(Qe-Ee,Ge-he)+Math.PI,je=140,pt=Ae+Math.cos(rt)*je,Ht=Ke+Math.sin(rt)*je,Qt=h.createLinearGradient(pt,Ht,Ae,Ke);Qt.addColorStop(0,"rgba(56, 189, 248, 0)"),Qt.addColorStop(.5,"rgba(168, 85, 247, 0.25)"),Qt.addColorStop(.85,"rgba(233, 213, 255, 0.65)"),Qt.addColorStop(1,"#ffffff"),h.strokeStyle=Qt,h.lineWidth=1.8,h.beginPath(),h.moveTo(pt,Ht),h.lineTo(Ae,Ke),h.stroke(),h.fillStyle="#ffffff",h.shadowColor="#67e8f9",h.shadowBlur=8,h.beginPath(),h.arc(Ae,Ke,2.2,0,Math.PI*2),h.fill(),h.restore()}if($.showMeridian){h.save();const Ce=b*.91;h.strokeStyle=it,h.lineWidth=1,h.beginPath(),h.moveTo(Ce,0),h.lineTo(Ce,w),h.stroke(),h.strokeStyle="rgba(255, 255, 255, 0.18)",h.lineWidth=1;for(let he=50;he<w;he+=70)h.beginPath(),h.moveTo(Ce-4,he),h.lineTo(Ce+4,he),h.stroke();h.restore()}if($.showOrbitalTrack){h.save();const Ce=b*.78,he=w*.18,Ee=Math.min(b,w)*.45,Ge=Math.min(b,w)*.22;h.shadowColor=$e,h.shadowBlur=6,h.strokeStyle=$e,h.lineWidth=1.2,h.beginPath(),h.ellipse(Ce,he,Ee,Ge,-.22,Math.PI*.1,Math.PI*1.3),h.stroke(),h.setLineDash([3,8]),h.strokeStyle="rgba(255, 255, 255, 0.22)",h.lineWidth=.8,h.beginPath(),h.ellipse(Ce,he,Ee*1.08,Ge*1.08,-.22,Math.PI*.05,Math.PI*1.25),h.stroke(),h.setLineDash([]),h.restore()}if($.showStars)for(let Ce=0;Ce<y.length;Ce++){const he=y[Ce];!v&&O>0&&(he.x+=he.vx*O,he.y+=he.vy*O,he.alphaPhase+=he.alphaSpeed*O,he.x<0&&(he.x=b),he.x>b&&(he.x=0),he.y<0&&(he.y=w),he.y>w&&(he.y=0));const Ee=(he.z+1)*.35,Ge=he.x+ee*12*Ee,Qe=he.y+k*12*Ee,Ae=Math.max(.12,Math.min(.85,he.alpha+Math.sin(he.alphaPhase)*.22));h.beginPath(),h.arc(Ge,Qe,he.radius,0,Math.PI*2),h.fillStyle=Y?`rgba(180, 130, 80, ${(Ae*.65).toFixed(3)})`:`rgba(255, 255, 255, ${Ae.toFixed(3)})`,h.fill()}const hn=$.waveGeometry,Tt=$.waveLayerDensity,kt=(Ce,he,Ee,Ge=2)=>{h.save(),h.translate(Ce,he);const Qe=h.createRadialGradient(0,0,0,0,0,Ge*2.5);Y?(Qe.addColorStop(0,`rgba(245, 158, 11, ${Ee})`),Qe.addColorStop(.35,`rgba(217, 119, 6, ${Ee*.7})`),Qe.addColorStop(1,"rgba(255, 255, 255, 0)"),h.fillStyle=Qe,h.beginPath(),h.arc(0,0,Ge*2.5,0,Math.PI*2),h.fill(),h.strokeStyle=`rgba(180, 83, 9, ${Ee*.8})`,h.lineWidth=.75,h.beginPath(),h.moveTo(-Ge*2,0),h.lineTo(Ge*2,0),h.moveTo(0,-Ge*2),h.lineTo(0,Ge*2),h.stroke()):(Qe.addColorStop(0,`rgba(255, 255, 255, ${Ee})`),Qe.addColorStop(.35,`rgba(233, 213, 255, ${Ee*.7})`),Qe.addColorStop(1,"rgba(255, 255, 255, 0)"),h.fillStyle=Qe,h.beginPath(),h.arc(0,0,Ge*2.5,0,Math.PI*2),h.fill(),h.strokeStyle=`rgba(255, 255, 255, ${Ee*.9})`,h.lineWidth=.75,h.beginPath(),h.moveTo(-Ge*2,0),h.lineTo(Ge*2,0),h.moveTo(0,-Ge*2),h.lineTo(0,Ge*2),h.stroke()),h.restore()},ke=(Ce,he,Ee,Ge,Qe,Ae,Ke,rt,je,pt,Ht=[])=>{const Qt=[0,b*.32,b*.68,b],tn=[];for(let xt=0;xt<4;xt++){const Ut=Math.sin(X*Ee+Ge+xt*1.4)*(he*.75)+Math.cos(X*Ee*.7+Ge*1.2+xt*2.1)*(he*.35);tn.push({x:Qt[xt],y:w*Ce[xt]+Ut})}const on=[tn[0],...tn,tn[tn.length-1]],qt=[],Bn=.5;for(let xt=1;xt<on.length-2;xt++){const Ut=on[xt-1],Ct=on[xt],Jt=on[xt+1],en=on[xt+2],Hn=(Jt.x-Ut.x)*Bn,Gn=(Jt.y-Ut.y)*Bn,ei=(en.x-Ct.x)*Bn,Gt=(en.y-Ct.y)*Bn;qt.push({p1:Ct,cp1:{x:Ct.x+Hn/3,y:Ct.y+Gn/3},cp2:{x:Jt.x-ei/3,y:Jt.y-Gt/3},p2:Jt})}h.save(),h.beginPath(),h.moveTo(tn[0].x,tn[0].y);for(const xt of qt)h.bezierCurveTo(xt.cp1.x,xt.cp1.y,xt.cp2.x,xt.cp2.y,xt.p2.x,xt.p2.y);h.lineTo(b,w),h.lineTo(0,w),h.closePath(),h.fillStyle=Qe,h.fill(),h.save(),h.clip();const wn=Math.min(...tn.map(xt=>xt.y)),nn=h.createLinearGradient(0,wn,0,wn+140);Y?(nn.addColorStop(0,"rgba(255, 255, 255, 0.40)"),nn.addColorStop(.25,"rgba(251, 191, 36, 0.14)"),nn.addColorStop(.7,"rgba(217, 119, 6, 0.04)"),nn.addColorStop(1,"rgba(255, 255, 255, 0)")):(nn.addColorStop(0,"rgba(255, 255, 255, 0.26)"),nn.addColorStop(.25,"rgba(216, 180, 254, 0.16)"),nn.addColorStop(.7,"rgba(147, 51, 234, 0.05)"),nn.addColorStop(1,"rgba(0, 0, 0, 0)")),h.fillStyle=nn,h.fillRect(0,wn,b,w),h.beginPath();for(let xt=0;xt<qt.length;xt++){const Ut=qt[xt],Ct=18+Math.sin(X*.75+xt*1.5)*4;xt===0&&h.moveTo(Ut.p1.x,Ut.p1.y+Ct),h.bezierCurveTo(Ut.cp1.x,Ut.cp1.y+Ct,Ut.cp2.x,Ut.cp2.y+Ct,Ut.p2.x,Ut.p2.y+Ct)}h.strokeStyle=Y?"rgba(160, 90, 40, 0.16)":"rgba(255, 255, 255, 0.10)",h.lineWidth=1,h.stroke(),h.beginPath();for(let xt=0;xt<qt.length;xt++){const Ut=qt[xt],Ct=38+Math.cos(X*.65+xt*1.8)*5;xt===0&&h.moveTo(Ut.p1.x,Ut.p1.y+Ct),h.bezierCurveTo(Ut.cp1.x,Ut.cp1.y+Ct,Ut.cp2.x,Ut.cp2.y+Ct,Ut.p2.x,Ut.p2.y+Ct)}h.strokeStyle=Y?"rgba(160, 90, 40, 0.10)":"rgba(255, 255, 255, 0.06)",h.lineWidth=.8,h.stroke(),h.restore(),h.strokeStyle=Ae,h.lineWidth=Ke,h.stroke(),h.restore();for(const xt of Ht){const Ut=Math.min(qt.length-1,Math.floor(xt*qt.length)),Ct=xt*qt.length-Ut,Jt=qt[Ut],en=1-Ct,Hn=en*en*en*Jt.p1.x+3*en*en*Ct*Jt.cp1.x+3*en*Ct*Ct*Jt.cp2.x+Ct*Ct*Ct*Jt.p2.x,Gn=en*en*en*Jt.p1.y+3*en*en*Ct*Jt.cp1.y+3*en*Ct*Ct*Jt.cp2.y+Ct*Ct*Ct*Jt.p2.y,ei=.5+Math.sin(X*2+xt*8)*.35;kt(Hn,Gn,ei,2)}},Rt=(Ce,he,Ee,Ge,Qe,Ae,Ke,rt,je,pt,Ht,Qt)=>{const tn=Math.sin(X*Qe+Ae)*Ge,on=[];on.push({x:0,y:w*Ce+tn});for(let qt=0;qt<he.length;qt++){const Bn=b*he[qt],wn=w*(Ce-Ee[qt])+Math.cos(X*Qe+qt+Ae)*(Ge*.7);on.push({x:Bn,y:wn})}on.push({x:b,y:w*(Ce+.03)+tn}),h.save(),h.beginPath(),h.moveTo(on[0].x,on[0].y);for(let qt=1;qt<on.length;qt++)h.lineTo(on[qt].x,on[qt].y);h.lineTo(b,w),h.lineTo(0,w),h.closePath(),h.fillStyle=Ke,h.fill(),h.strokeStyle=rt,h.lineWidth=je,h.stroke(),h.restore()},Ye=(Ce,he,Ee,Ge,Qe,Ae)=>{h.save(),h.globalCompositeOperation="screen",h.beginPath(),h.moveTo(0,w*Ce);const Ke=16;for(let rt=0;rt<=Ke;rt++){const je=rt/Ke*b,pt=w*Ce+Math.sin(rt/Ke*Math.PI*2+X*Ee+Ge)*he;rt===0?h.moveTo(je,pt):h.lineTo(je,pt)}h.lineTo(b,w),h.lineTo(0,w),h.closePath(),h.fillStyle=Qe,h.fill(),h.strokeStyle=Ae,h.lineWidth=1.8,h.stroke(),h.restore()},ut=$.horizonHeight||"balanced",R=ut==="low"?.08:ut==="high"?-.08:0,T=$.waveStrokeOpacity??1,se=h.createLinearGradient(0,w*(.46+R),0,w*(.68+R));if(se.addColorStop(0,"rgba(0, 0, 0, 0)"),Y)se.addColorStop(.5,"rgba(255, 255, 255, 0.25)");else{const Ce=pe==="celestial-cyan"?"rgba(7, 31, 53, 0.45)":pe==="supernova-sunset"?"rgba(36, 6, 28, 0.45)":pe==="nocturne-silver"?"rgba(16, 16, 23, 0.45)":pe==="emerald-aurora"?"rgba(5, 46, 20, 0.45)":pe==="pure-pitch-black"?"rgba(6, 6, 6, 0.45)":"rgba(20, 10, 40, 0.45)";se.addColorStop(.5,Ce)}se.addColorStop(1,"rgba(0, 0, 0, 0)"),h.fillStyle=se,h.fillRect(0,w*(.46+R),b,w*.22);const Pe=h.createLinearGradient(0,w*(.55+R),0,w);Pe.addColorStop(0,De[0]),Pe.addColorStop(.5,De[1]),Pe.addColorStop(1,De[2]);const Me=h.createLinearGradient(0,w*(.63+R),0,w);Me.addColorStop(0,Xe[0]),Me.addColorStop(.5,Xe[1]),Me.addColorStop(1,Xe[2]);const Le=h.createLinearGradient(0,w*(.71+R),0,w);Le.addColorStop(0,_t[0]),Le.addColorStop(.5,_t[1]),Le.addColorStop(1,_t[2]);const Be=h.createLinearGradient(0,w*(.79+R),0,w);Be.addColorStop(0,lt[0]),Be.addColorStop(.5,lt[1]),Be.addColorStop(1,lt[2]);const _e=h.createLinearGradient(0,w*(.86+R),0,w);_e.addColorStop(0,le[0]),_e.addColorStop(.35,le[1]),_e.addColorStop(.7,le[2]),_e.addColorStop(1,le[3]);const we=Y?"rgba(160, 140, 120, 0.12)":"rgba(0,0,0,0.55)",Oe=Y?"rgba(160, 140, 120, 0.16)":"rgba(0,0,0,0.65)",j=Y?"rgba(160, 140, 120, 0.20)":"rgba(0,0,0,0.70)",Te=Y?"rgba(160, 140, 120, 0.22)":"rgba(0,0,0,0.75)",ye=Y?"rgba(160, 140, 120, 0.26)":"rgba(0,0,0,0.80)";if(hn==="mountains"?(Rt(.48+R,[.18,.5,.82],[.14,.17,.12],12*q,.35,0,Pe,Ve,.8*T),Tt!=="airy"&&Rt(.58+R,[.32,.66,.9],[.12,.15,.11],14*q,.4,1.5,Me,nt,.9*T),Rt(.68+R,[.15,.44,.75],[.11,.13,.1],15*q,.45,3.1,Le,ht,1*T),Tt==="dense"&&Rt(.78+R,[.28,.6,.86],[.09,.11,.08],14*q,.4,4.4,Be,At,1.1*T),Rt(.88+R,[.4,.74],[.08,.07],12*q,.35,5.8,_e,Mt,1.2*T)):hn==="aurora"?(Ye(.28+R*.5,32*q,.45,0,Pe,Ve),Tt!=="airy"&&Ye(.4+R*.5,30*q,.5,1.6,Me,nt),Ye(.54+R*.5,26*q,.55,3.2,Le,ht),Tt==="dense"&&Ye(.68+R*.5,22*q,.6,4.8,Be,At),ke([.86+R,.89+R,.85+R,.88+R],12*q,.35,6.2,_e,Mt,1.2*T)):hn==="ocean"?(ke([.62+R,.58+R,.65+R,.6+R],16*q,.65,0,Pe,Ve,.8*T,we,16,-6,[.3]),Tt!=="airy"&&ke([.69+R,.73+R,.67+R,.71+R],18*q,.7,1.8,Me,nt,.9*T,Oe,20,-7,[.55]),ke([.76+R,.73+R,.79+R,.75+R],20*q,.75,3.4,Le,ht,1*T,j,24,-8,[.38,.82]),Tt==="dense"&&ke([.83+R,.86+R,.81+R,.85+R],16*q,.65,4.9,Be,At,1.1*T,Te,28,-9,[.65]),ke([.89+R,.87+R,.92+R,.88+R],14*q,.55,6.2,_e,Mt,1.2*T,ye,32,-10,[.5])):(ke([.48+R,.56+R,.64+R,.68+R],16*q,.38,0,Pe,Ve,.8*T,we,16,-6,[.24,.68]),Tt!=="airy"&&ke([.66+R,.62+R,.55+R,.6+R],18*q,.42,1.8,Me,nt,.9*T,Oe,20,-7,[.35,.82]),ke([.69+R,.76+R,.72+R,.76+R],19*q,.46,3.4,Le,ht,1*T,j,24,-8,[.42,.78]),Tt==="dense"&&ke([.8+R,.77+R,.84+R,.8+R],16*q,.4,4.9,Be,At,1.1*T,Te,28,-9,[.18,.62]),ke([.88+R,.91+R,.86+R,.9+R],13*q,.35,6.2,_e,Mt,1.2*T,ye,32,-10,[.35,.8])),$.showCrossStars){const Ce=.68+Math.sin(X*1.8)*.22,he=.6+Math.sin(X*1.5+1.2)*.24,Ee=.64+Math.sin(X*1.9+2.5)*.2,Ge=.58+Math.sin(X*1.4+3.8)*.25,Qe=.52+Math.sin(X*1.7+4.6)*.22;J(b*.5,w*.08,11,Ce),J(b*.18,w*.16,9.5,he),J(b*.84,w*.2,10,Ee),J(b*.72,w*.34,8.5,Ge),J(b*.08,w*.28,8,Qe)}if(B($.shootingStarMode||"occasional"),g.current){m.current=!1;return}m.current=!0,S=requestAnimationFrame(de)};return _.current=()=>{m.current||(m.current=!0,de())},S=requestAnimationFrame(de),()=>{_.current=null,m.current=!1,cancelAnimationFrame(S),window.removeEventListener("resize",U),window.removeEventListener("mousemove",D),document.removeEventListener("visibilitychange",te)}},[]),d.jsx("canvas",{ref:s,className:"fixed inset-0 pointer-events-none z-0 select-none","aria-hidden":"true"})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mf="187",$v=0,f0=1,Xv=2,Yl=1,Yv=2,ro=3,As=0,On=1,Hi=2,ma=0,oo=1,Es=2,h0=3,p0=4,qv=5,ha=100,Kv=101,Zv=102,Jv=103,Qv=104,e_=200,t_=201,n_=202,i_=203,hm=204,pm=205,r_=206,s_=207,a_=208,o_=209,l_=210,c_=211,u_=212,d_=213,f_=214,Pd=0,Dd=1,Ld=2,uo=3,Id=4,kd=5,Ud=6,zd=7,mm=0,h_=1,p_=2,Rr=0,gm=1,xm=2,vm=3,_m=4,ym=5,Sm=6,bm=7,wm=300,xa=301,fo=302,td=303,nd=304,va=1e3,li=1001,Fd=1002,Fn=1003,m_=1004,El=1005,ci=1006,id=1007,ts=1008,vi=1009,Mm=1010,Em=1011,ho=1012,Ef=1013,sr=1014,nr=1015,ar=1016,Tf=1017,Cf=1018,_a=1020,Tm=35902,Cm=35899,Am=1021,Rm=1022,ir=1023,is=1026,ns=1027,Nm=1028,Af=1029,Rs=1030,Rf=1031,Nf=1033,ql=33776,Kl=33777,Zl=33778,Jl=33779,Od=35840,Bd=35841,Hd=35842,Gd=35843,Vd=36196,jd=37492,Wd=37496,$d=37488,Xd=37489,rc=37490,Yd=37491,qd=37808,Kd=37809,Zd=37810,Jd=37811,Qd=37812,ef=37813,tf=37814,nf=37815,rf=37816,sf=37817,af=37818,of=37819,lf=37820,cf=37821,uf=36492,df=36494,ff=36495,hf=36283,pf=36284,sc=36285,mf=36286,g_=3200,gf=0,x_=1,es="",xi="srgb",ac="srgb-linear",oc="linear",Zt="srgb",rd=7680,v_=519,__=512,y_=513,S_=514,Pm=515,b_=516,w_=517,Dm=518,Lm=519,M_=35044,m0="300 es",Vi=2e3,po=2001;function E_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function lc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function T_(){const s=lc("canvas");return s.style.display="block",s}const g0={};function x0(...s){const e="THREE."+s.shift();console.log(e,...s)}function Im(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function wt(...s){s=Im(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Yt(...s){s=Im(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ql(...s){const e=s.join(" ");e in g0||(g0[e]=!0,wt(...s))}function C_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const A_={[Pd]:Pd,[Ld]:Ud,[Id]:Id,[uo]:kd,[Dd]:Dd,[Ud]:Ld,[zd]:zd,[kd]:uo};class Ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sd=Math.PI/180,xf=180/Math.PI;function go(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Xn[s&255]+Xn[s>>8&255]+Xn[s>>16&255]+Xn[s>>24&255]+"-"+Xn[e&255]+Xn[e>>8&255]+"-"+Xn[e>>16&15|64]+Xn[e>>24&255]+"-"+Xn[t&63|128]+Xn[t>>8&255]+"-"+Xn[t>>16&255]+Xn[t>>24&255]+Xn[r&255]+Xn[r>>8&255]+Xn[r>>16&255]+Xn[r>>24&255]).toLowerCase()}function Bt(s,e,t){return Math.max(e,Math.min(t,s))}function R_(s,e){return(s%e+e)%e}function ad(s,e,t){return(1-t)*s+t*e}function N_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Pf(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function P_(s,e){if(e.constructor===Float32Array)return s;const t=Pf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function D_(s,e){if(e.constructor===Float32Array)return s;const t=Pf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const Of=class Of{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Bt(this.x,e.x,t.x),this.y=Bt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Bt(this.x,e,t),this.y=Bt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Bt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Of.prototype.isVector2=!0;let Ft=Of;class ba{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let g=r[o+0],m=r[o+1],_=r[o+2],E=r[o+3],h=l[u+0],S=l[u+1],b=l[u+2],w=l[u+3];if(E!==w||g!==h||m!==S||_!==b){let v=g*h+m*S+_*b+E*w;v<0&&(h=-h,S=-S,b=-b,w=-w,v=-v);let y=1-f;if(v<.9995){const N=Math.acos(v),U=Math.sin(N);y=Math.sin(y*N)/U,f=Math.sin(f*N)/U,g=g*y+h*f,m=m*y+S*f,_=_*y+b*f,E=E*y+w*f}else{g=g*y+h*f,m=m*y+S*f,_=_*y+b*f,E=E*y+w*f;const N=1/Math.sqrt(g*g+m*m+_*_+E*E);g*=N,m*=N,_*=N,E*=N}}e[t]=g,e[t+1]=m,e[t+2]=_,e[t+3]=E}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],g=r[o+1],m=r[o+2],_=r[o+3],E=l[u],h=l[u+1],S=l[u+2],b=l[u+3];return e[t]=f*b+_*E+g*S-m*h,e[t+1]=g*b+_*h+m*E-f*S,e[t+2]=m*b+_*S+f*h-g*E,e[t+3]=_*b-f*E-g*h-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,g=Math.sin,m=f(r/2),_=f(o/2),E=f(l/2),h=g(r/2),S=g(o/2),b=g(l/2);switch(u){case"XYZ":this._x=h*_*E+m*S*b,this._y=m*S*E-h*_*b,this._z=m*_*b+h*S*E,this._w=m*_*E-h*S*b;break;case"YXZ":this._x=h*_*E+m*S*b,this._y=m*S*E-h*_*b,this._z=m*_*b-h*S*E,this._w=m*_*E+h*S*b;break;case"ZXY":this._x=h*_*E-m*S*b,this._y=m*S*E+h*_*b,this._z=m*_*b+h*S*E,this._w=m*_*E-h*S*b;break;case"ZYX":this._x=h*_*E-m*S*b,this._y=m*S*E+h*_*b,this._z=m*_*b-h*S*E,this._w=m*_*E+h*S*b;break;case"YZX":this._x=h*_*E+m*S*b,this._y=m*S*E+h*_*b,this._z=m*_*b-h*S*E,this._w=m*_*E-h*S*b;break;case"XZY":this._x=h*_*E-m*S*b,this._y=m*S*E-h*_*b,this._z=m*_*b+h*S*E,this._w=m*_*E+h*S*b;break;default:wt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],g=t[9],m=t[2],_=t[6],E=t[10],h=r+f+E;if(h>0){const S=.5/Math.sqrt(h+1);this._w=.25/S,this._x=(_-g)*S,this._y=(l-m)*S,this._z=(u-o)*S}else if(r>f&&r>E){const S=2*Math.sqrt(1+r-f-E);this._w=(_-g)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+m)/S}else if(f>E){const S=2*Math.sqrt(1+f-r-E);this._w=(l-m)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(g+_)/S}else{const S=2*Math.sqrt(1+E-r-f);this._w=(u-o)/S,this._x=(l+m)/S,this._y=(g+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,g=t._y,m=t._z,_=t._w;return this._x=r*_+u*f+o*m-l*g,this._y=o*_+u*g+l*f-r*m,this._z=l*_+u*m+r*g-o*f,this._w=u*_-r*f-o*g-l*m,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let g=1-t;if(f<.9995){const m=Math.acos(f),_=Math.sin(m);g=Math.sin(g*m)/_,t=Math.sin(t*m)/_,this._x=this._x*g+r*t,this._y=this._y*g+o*t,this._z=this._z*g+l*t,this._w=this._w*g+u*t,this._onChangeCallback()}else this._x=this._x*g+r*t,this._y=this._y*g+o*t,this._z=this._z*g+l*t,this._w=this._w*g+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Bf=class Bf{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(v0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(v0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,g=e.w,m=2*(u*o-f*r),_=2*(f*t-l*o),E=2*(l*r-u*t);return this.x=t+g*m+u*E-f*_,this.y=r+g*_+f*m-l*E,this.z=o+g*E+l*_-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Bt(this.x,e.x,t.x),this.y=Bt(this.y,e.y,t.y),this.z=Bt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Bt(this.x,e,t),this.y=Bt(this.y,e,t),this.z=Bt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Bt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,g=t.z;return this.x=o*g-l*f,this.y=l*u-r*g,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return od.copy(this).projectOnVector(e),this.sub(od)}reflect(e){return this.sub(od.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bf.prototype.isVector3=!0;let ve=Bf;const od=new ve,v0=new ba,Hf=class Hf{constructor(e,t,r,o,l,u,f,g,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,g,m)}set(e,t,r,o,l,u,f,g,m){const _=this.elements;return _[0]=e,_[1]=o,_[2]=f,_[3]=t,_[4]=l,_[5]=g,_[6]=r,_[7]=u,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],g=r[6],m=r[1],_=r[4],E=r[7],h=r[2],S=r[5],b=r[8],w=o[0],v=o[3],y=o[6],N=o[1],U=o[4],P=o[7],z=o[2],I=o[5],M=o[8];return l[0]=u*w+f*N+g*z,l[3]=u*v+f*U+g*I,l[6]=u*y+f*P+g*M,l[1]=m*w+_*N+E*z,l[4]=m*v+_*U+E*I,l[7]=m*y+_*P+E*M,l[2]=h*w+S*N+b*z,l[5]=h*v+S*U+b*I,l[8]=h*y+S*P+b*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],g=e[6],m=e[7],_=e[8];return t*u*_-t*f*m-r*l*_+r*f*g+o*l*m-o*u*g}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],g=e[6],m=e[7],_=e[8],E=_*u-f*m,h=f*g-_*l,S=m*l-u*g,b=t*E+r*h+o*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=E*w,e[1]=(o*m-_*r)*w,e[2]=(f*r-o*u)*w,e[3]=h*w,e[4]=(_*t-o*g)*w,e[5]=(o*l-f*t)*w,e[6]=S*w,e[7]=(r*g-m*t)*w,e[8]=(u*t-r*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const g=Math.cos(l),m=Math.sin(l);return this.set(r*g,r*m,-r*(g*u+m*f)+u+e,-o*m,o*g,-o*(-m*u+g*f)+f+t,0,0,1),this}scale(e,t){return Ql("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ld.makeScale(e,t)),this}rotate(e){return Ql("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ld.makeRotation(-e)),this}translate(e,t){return Ql("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ld.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Hf.prototype.isMatrix3=!0;let Et=Hf;const ld=new Et,_0=new Et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),y0=new Et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function L_(){const s={enabled:!0,workingColorSpace:ac,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Zt&&(o.r=Nr(o.r),o.g=Nr(o.g),o.b=Nr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Zt&&(o.r=ga(o.r),o.g=ga(o.g),o.b=ga(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===es?oc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[u].fromXYZ).multiply(this.spaces[l].toXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[ac]:{primaries:e,whitePoint:r,transfer:oc,toXYZ:_0,fromXYZ:y0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:e,whitePoint:r,transfer:Zt,toXYZ:_0,fromXYZ:y0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),s}const Ot=L_();function Nr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ga(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ta;class I_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ta===void 0&&(ta=lc("canvas")),ta.width=e.width,ta.height=e.height;const o=ta.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=ta}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Nr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Nr(t[r]/255)*255):t[r]=Nr(t[r]);return{data:t,width:e.width,height:e.height}}else return wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let k_=0;class Df{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=go(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(cd(o[u].image)):l.push(cd(o[u]))}else l=cd(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function cd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?I_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(wt("Texture: Unable to serialize Texture."),{})}let U_=0;const ud=new ve;class qn extends Ns{constructor(e=qn.DEFAULT_IMAGE,t=qn.DEFAULT_MAPPING,r=li,o=li,l=ci,u=ts,f=ir,g=vi,m=qn.DEFAULT_ANISOTROPY,_=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=go(),this.name="",this.source=new Df(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=g,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ud).x}get height(){return this.source.getSize(ud).y}get depth(){return this.source.getSize(ud).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){wt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){wt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case va:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case Fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case va:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case Fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=wm;qn.DEFAULT_ANISOTROPY=1;const Gf=class Gf{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const g=e.elements,m=g[0],_=g[4],E=g[8],h=g[1],S=g[5],b=g[9],w=g[2],v=g[6],y=g[10];if(Math.abs(_-h)<.01&&Math.abs(E-w)<.01&&Math.abs(b-v)<.01){if(Math.abs(_+h)<.1&&Math.abs(E+w)<.1&&Math.abs(b+v)<.1&&Math.abs(m+S+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const U=(m+1)/2,P=(S+1)/2,z=(y+1)/2,I=(_+h)/4,M=(E+w)/4,D=(b+v)/4;return U>P&&U>z?U<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(U),o=I/r,l=M/r):P>z?P<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),r=I/o,l=D/o):z<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(z),r=M/l,o=D/l),this.set(r,o,l,t),this}let N=Math.sqrt((v-b)*(v-b)+(E-w)*(E-w)+(h-_)*(h-_));return Math.abs(N)<.001&&(N=1),this.x=(v-b)/N,this.y=(E-w)/N,this.z=(h-_)/N,this.w=Math.acos((m+S+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Bt(this.x,e.x,t.x),this.y=Bt(this.y,e.y,t.y),this.z=Bt(this.z,e.z,t.z),this.w=Bt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Bt(this.x,e,t),this.y=Bt(this.y,e,t),this.z=Bt(this.z,e,t),this.w=Bt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Bt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Gf.prototype.isVector4=!0;let gn=Gf;class z_ extends Ns{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new gn(0,0,e,t),this.scissorTest=!1,this.viewport=new gn(0,0,e,t),this.textures=[];const o=r.count;for(let l=0;l<o;l++)this.textures[l]=new qn({width:e,height:t,depth:r.depth}),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:ci,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Df(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rr extends z_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class km extends qn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class F_ extends qn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const pc=class pc{constructor(e,t,r,o,l,u,f,g,m,_,E,h,S,b,w,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,g,m,_,E,h,S,b,w,v)}set(e,t,r,o,l,u,f,g,m,_,E,h,S,b,w,v){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=l,y[5]=u,y[9]=f,y[13]=g,y[2]=m,y[6]=_,y[10]=E,y[14]=h,y[3]=S,y[7]=b,y[11]=w,y[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/na.setFromMatrixColumn(e,0).length(),l=1/na.setFromMatrixColumn(e,1).length(),u=1/na.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),g=Math.cos(o),m=Math.sin(o),_=Math.cos(l),E=Math.sin(l);if(e.order==="XYZ"){const h=u*_,S=u*E,b=f*_,w=f*E;t[0]=g*_,t[4]=-g*E,t[8]=m,t[1]=S+b*m,t[5]=h-w*m,t[9]=-f*g,t[2]=w-h*m,t[6]=b+S*m,t[10]=u*g}else if(e.order==="YXZ"){const h=g*_,S=g*E,b=m*_,w=m*E;t[0]=h+w*f,t[4]=b*f-S,t[8]=u*m,t[1]=u*E,t[5]=u*_,t[9]=-f,t[2]=S*f-b,t[6]=w+h*f,t[10]=u*g}else if(e.order==="ZXY"){const h=g*_,S=g*E,b=m*_,w=m*E;t[0]=h-w*f,t[4]=-u*E,t[8]=b+S*f,t[1]=S+b*f,t[5]=u*_,t[9]=w-h*f,t[2]=-u*m,t[6]=f,t[10]=u*g}else if(e.order==="ZYX"){const h=u*_,S=u*E,b=f*_,w=f*E;t[0]=g*_,t[4]=b*m-S,t[8]=h*m+w,t[1]=g*E,t[5]=w*m+h,t[9]=S*m-b,t[2]=-m,t[6]=f*g,t[10]=u*g}else if(e.order==="YZX"){const h=u*g,S=u*m,b=f*g,w=f*m;t[0]=g*_,t[4]=w-h*E,t[8]=b*E+S,t[1]=E,t[5]=u*_,t[9]=-f*_,t[2]=-m*_,t[6]=S*E+b,t[10]=h-w*E}else if(e.order==="XZY"){const h=u*g,S=u*m,b=f*g,w=f*m;t[0]=g*_,t[4]=-E,t[8]=m*_,t[1]=h*E+w,t[5]=u*_,t[9]=S*E-b,t[2]=b*E-S,t[6]=f*_,t[10]=w*E+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(O_,e,B_)}lookAt(e,t,r){const o=this.elements;return mi.subVectors(e,t),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),Xr.crossVectors(r,mi),Xr.lengthSq()===0&&(Math.abs(r.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),Xr.crossVectors(r,mi)),Xr.normalize(),Tl.crossVectors(mi,Xr),o[0]=Xr.x,o[4]=Tl.x,o[8]=mi.x,o[1]=Xr.y,o[5]=Tl.y,o[9]=mi.y,o[2]=Xr.z,o[6]=Tl.z,o[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],g=r[8],m=r[12],_=r[1],E=r[5],h=r[9],S=r[13],b=r[2],w=r[6],v=r[10],y=r[14],N=r[3],U=r[7],P=r[11],z=r[15],I=o[0],M=o[4],D=o[8],J=o[12],W=o[1],V=o[5],B=o[9],X=o[13],F=o[2],te=o[6],de=o[10],$=o[14],ie=o[3],O=o[7],ee=o[11],k=o[15];return l[0]=u*I+f*W+g*F+m*ie,l[4]=u*M+f*V+g*te+m*O,l[8]=u*D+f*B+g*de+m*ee,l[12]=u*J+f*X+g*$+m*k,l[1]=_*I+E*W+h*F+S*ie,l[5]=_*M+E*V+h*te+S*O,l[9]=_*D+E*B+h*de+S*ee,l[13]=_*J+E*X+h*$+S*k,l[2]=b*I+w*W+v*F+y*ie,l[6]=b*M+w*V+v*te+y*O,l[10]=b*D+w*B+v*de+y*ee,l[14]=b*J+w*X+v*$+y*k,l[3]=N*I+U*W+P*F+z*ie,l[7]=N*M+U*V+P*te+z*O,l[11]=N*D+U*B+P*de+z*ee,l[15]=N*J+U*X+P*$+z*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],g=e[9],m=e[13],_=e[2],E=e[6],h=e[10],S=e[14],b=e[3],w=e[7],v=e[11],y=e[15],N=g*S-m*h,U=f*S-m*E,P=f*h-g*E,z=u*S-m*_,I=u*h-g*_,M=u*E-f*_;return t*(w*N-v*U+y*P)-r*(b*N-v*z+y*I)+o*(b*U-w*z+y*M)-l*(b*P-w*I+v*M)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],u=e[5],f=e[9],g=e[2],m=e[6],_=e[10];return t*(u*_-f*m)-r*(l*_-f*g)+o*(l*m-u*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],g=e[6],m=e[7],_=e[8],E=e[9],h=e[10],S=e[11],b=e[12],w=e[13],v=e[14],y=e[15],N=t*f-r*u,U=t*g-o*u,P=t*m-l*u,z=r*g-o*f,I=r*m-l*f,M=o*m-l*g,D=_*w-E*b,J=_*v-h*b,W=_*y-S*b,V=E*v-h*w,B=E*y-S*w,X=h*y-S*v,F=N*X-U*B+P*V+z*W-I*J+M*D;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const te=1/F;return e[0]=(f*X-g*B+m*V)*te,e[1]=(o*B-r*X-l*V)*te,e[2]=(w*M-v*I+y*z)*te,e[3]=(h*I-E*M-S*z)*te,e[4]=(g*W-u*X-m*J)*te,e[5]=(t*X-o*W+l*J)*te,e[6]=(v*P-b*M-y*U)*te,e[7]=(_*M-h*P+S*U)*te,e[8]=(u*B-f*W+m*D)*te,e[9]=(r*W-t*B-l*D)*te,e[10]=(b*I-w*P+y*N)*te,e[11]=(E*P-_*I-S*N)*te,e[12]=(f*J-u*V-g*D)*te,e[13]=(t*V-r*J+o*D)*te,e[14]=(w*U-b*z-v*N)*te,e[15]=(_*z-E*U+h*N)*te,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,g=e.z,m=l*u,_=l*f;return this.set(m*u+r,m*f-o*g,m*g+o*f,0,m*f+o*g,_*f+r,_*g-o*u,0,m*g-o*f,_*g+o*u,l*g*g+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,g=t._w,m=l+l,_=u+u,E=f+f,h=l*m,S=l*_,b=l*E,w=u*_,v=u*E,y=f*E,N=g*m,U=g*_,P=g*E,z=r.x,I=r.y,M=r.z;return o[0]=(1-(w+y))*z,o[1]=(S+P)*z,o[2]=(b-U)*z,o[3]=0,o[4]=(S-P)*I,o[5]=(1-(h+y))*I,o[6]=(v+N)*I,o[7]=0,o[8]=(b+U)*M,o[9]=(v-N)*M,o[10]=(1-(h+w))*M,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=na.set(o[0],o[1],o[2]).length();const f=na.set(o[4],o[5],o[6]).length(),g=na.set(o[8],o[9],o[10]).length();l<0&&(u=-u),Ii.copy(this);const m=1/u,_=1/f,E=1/g;return Ii.elements[0]*=m,Ii.elements[1]*=m,Ii.elements[2]*=m,Ii.elements[4]*=_,Ii.elements[5]*=_,Ii.elements[6]*=_,Ii.elements[8]*=E,Ii.elements[9]*=E,Ii.elements[10]*=E,t.setFromRotationMatrix(Ii),r.x=u,r.y=f,r.z=g,this}makePerspective(e,t,r,o,l,u,f=Vi,g=!1){const m=this.elements,_=2*l/(t-e),E=2*l/(r-o),h=(t+e)/(t-e),S=(r+o)/(r-o);let b,w;if(g)b=l/(u-l),w=u*l/(u-l);else if(f===Vi)b=-(u+l)/(u-l),w=-2*u*l/(u-l);else if(f===po)b=-u/(u-l),w=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=_,m[4]=0,m[8]=h,m[12]=0,m[1]=0,m[5]=E,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=b,m[14]=w,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=Vi,g=!1){const m=this.elements,_=2/(t-e),E=2/(r-o),h=-(t+e)/(t-e),S=-(r+o)/(r-o);let b,w;if(g)b=1/(u-l),w=u/(u-l);else if(f===Vi)b=-2/(u-l),w=-(u+l)/(u-l);else if(f===po)b=-1/(u-l),w=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=_,m[4]=0,m[8]=0,m[12]=h,m[1]=0,m[5]=E,m[9]=0,m[13]=S,m[2]=0,m[6]=0,m[10]=b,m[14]=w,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};pc.prototype.isMatrix4=!0;let xn=pc;const na=new ve,Ii=new xn,O_=new ve(0,0,0),B_=new ve(1,1,1),Xr=new ve,Tl=new ve,mi=new ve,S0=new xn,b0=new ba;class rs{constructor(e=0,t=0,r=0,o=rs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],g=o[1],m=o[5],_=o[9],E=o[2],h=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(Bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(h,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(g,m)):(this._y=Math.atan2(-E,l),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-E,S),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(g,l));break;case"ZYX":this._y=Math.asin(-Bt(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(h,S),this._z=Math.atan2(g,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Bt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-E,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,S),this._y=0);break;default:wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return S0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(S0,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return b0.setFromEuler(this),this.setFromQuaternion(b0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rs.DEFAULT_ORDER="XYZ";class Um{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let H_=0;const w0=new ve,ia=new ba,yr=new xn,Cl=new ve,Qa=new ve,G_=new ve,V_=new ba,M0=new ve(1,0,0),E0=new ve(0,1,0),T0=new ve(0,0,1),C0={type:"added"},j_={type:"removed"},ra={type:"childadded",child:null},dd={type:"childremoved",child:null};class Kn extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=go(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kn.DEFAULT_UP.clone();const e=new ve,t=new rs,r=new ba,o=new ve(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new xn},normalMatrix:{value:new Et}}),this.matrix=new xn,this.matrixWorld=new xn,this.matrixAutoUpdate=Kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Um,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ia.setFromAxisAngle(e,t),this.quaternion.multiply(ia),this}rotateOnWorldAxis(e,t){return ia.setFromAxisAngle(e,t),this.quaternion.premultiply(ia),this}rotateX(e){return this.rotateOnAxis(M0,e)}rotateY(e){return this.rotateOnAxis(E0,e)}rotateZ(e){return this.rotateOnAxis(T0,e)}translateOnAxis(e,t){return w0.copy(e).applyQuaternion(this.quaternion),this.position.add(w0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(M0,e)}translateY(e){return this.translateOnAxis(E0,e)}translateZ(e){return this.translateOnAxis(T0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Cl.copy(e):Cl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yr.lookAt(Qa,Cl,this.up):yr.lookAt(Cl,Qa,this.up),this.quaternion.setFromRotationMatrix(yr),o&&(yr.extractRotation(o.matrixWorld),ia.setFromRotationMatrix(yr),this.quaternion.premultiply(ia.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Yt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(C0),ra.child=e,this.dispatchEvent(ra),ra.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(j_),dd.child=e,this.dispatchEvent(dd),dd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yr.multiply(e.parent.matrixWorld)),e.applyMatrix4(yr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(C0),ra.child=e,this.dispatchEvent(ra),ra.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,e,G_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,V_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,g){return f[g.uuid]===void 0&&(f[g.uuid]=g.toJSON(e)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const g=f.shapes;if(Array.isArray(g))for(let m=0,_=g.length;m<_;m++){const E=g[m];l(e.shapes,E)}else l(e.shapes,g)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let g=0,m=this.material.length;g<m;g++)f.push(l(e.materials,this.material[g]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const g=this.animations[f];o.animations.push(l(e.animations,g))}}if(t){const f=u(e.geometries),g=u(e.materials),m=u(e.textures),_=u(e.images),E=u(e.shapes),h=u(e.skeletons),S=u(e.animations),b=u(e.nodes);f.length>0&&(r.geometries=f),g.length>0&&(r.materials=g),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),E.length>0&&(r.shapes=E),h.length>0&&(r.skeletons=h),S.length>0&&(r.animations=S),b.length>0&&(r.nodes=b)}return r.object=o,r;function u(f){const g=[];for(const m in f){const _=f[m];delete _.metadata,g.push(_)}return g}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Kn.DEFAULT_UP=new ve(0,1,0);Kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class so extends Kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const W_={type:"move"};class fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new so,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new so,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ve,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ve),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new so,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ve,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ve,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,g=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const w of e.hand.values()){const v=t.getJointPose(w,r),y=this._getHandJoint(m,w);v!==null&&(y.matrix.fromArray(v.transform.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=v.radius),y.visible=v!==null}const _=m.joints["index-finger-tip"],E=m.joints["thumb-tip"],h=_.position.distanceTo(E.position),S=.02,b=.005;m.inputState.pinching&&h>S+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&h<=S-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else g!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(g.matrix.fromArray(l.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,l.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(l.linearVelocity)):g.hasLinearVelocity=!1,l.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(l.angularVelocity)):g.hasAngularVelocity=!1,g.eventsEnabled&&g.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(W_)))}return f!==null&&(f.visible=o!==null),g!==null&&(g.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new so;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const zm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yr={h:0,s:0,l:0},Al={h:0,s:0,l:0};function hd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Lt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Ot.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ot.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Ot.workingColorSpace){if(e=R_(e,1),t=Bt(t,0,1),r=Bt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=hd(u,l,e+1/3),this.g=hd(u,l,e),this.b=hd(u,l,e-1/3)}return Ot.colorSpaceToWorking(this,o),this}setStyle(e,t=xi){function r(l){l!==void 0&&parseFloat(l)<1&&wt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseFloat(l[1]))/100,Math.min(100,parseFloat(l[2]))/100,Math.min(100,parseFloat(l[3]))/100,t);break;case"hsl":case"hsla":if(l=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:wt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);wt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xi){const r=zm[e.toLowerCase()];return r!==void 0?this.setHex(r,t):wt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}copyLinearToSRGB(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return Ot.workingToColorSpace(Yn.copy(this),e),Math.round(Bt(Yn.r*255,0,255))*65536+Math.round(Bt(Yn.g*255,0,255))*256+Math.round(Bt(Yn.b*255,0,255))}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ot.workingColorSpace){Ot.workingToColorSpace(Yn.copy(this),t);const r=Yn.r,o=Yn.g,l=Yn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let g,m;const _=(f+u)/2;if(f===u)g=0,m=0;else{const E=u-f;switch(m=_<=.5?E/(u+f):E/(2-u-f),u){case r:g=(o-l)/E+(o<l?6:0);break;case o:g=(l-r)/E+2;break;case l:g=(r-o)/E+4;break}g/=6}return e.h=g,e.s=m,e.l=_,e}getRGB(e,t=Ot.workingColorSpace){return Ot.workingToColorSpace(Yn.copy(this),t),e.r=Yn.r,e.g=Yn.g,e.b=Yn.b,e}getStyle(e=xi){Ot.workingToColorSpace(Yn.copy(this),e);const t=Yn.r,r=Yn.g,o=Yn.b;return e!==xi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Yr),this.setHSL(Yr.h+e,Yr.s+t,Yr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Yr),e.getHSL(Al);const r=ad(Yr.h,Al.h,t),o=ad(Yr.s,Al.s,t),l=ad(Yr.l,Al.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yn=new Lt;Lt.NAMES=zm;class $_ extends Kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rs,this.environmentIntensity=1,this.environmentRotation=new rs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ki=new ve,Sr=new ve,pd=new ve,br=new ve,sa=new ve,aa=new ve,A0=new ve,md=new ve,gd=new ve,xd=new ve,vd=new gn,_d=new gn,yd=new gn;class Gi{constructor(e=new ve,t=new ve,r=new ve){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),ki.subVectors(e,t),o.cross(ki);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){ki.subVectors(o,t),Sr.subVectors(r,t),pd.subVectors(e,t);const u=ki.dot(ki),f=ki.dot(Sr),g=ki.dot(pd),m=Sr.dot(Sr),_=Sr.dot(pd),E=u*m-f*f;if(E===0)return l.set(0,0,0),null;const h=1/E,S=(m*g-f*_)*h,b=(u*_-f*g)*h;return l.set(1-S-b,b,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,br)===null?!1:br.x>=0&&br.y>=0&&br.x+br.y<=1}static getInterpolation(e,t,r,o,l,u,f,g){return this.getBarycoord(e,t,r,o,br)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(l,br.x),g.addScaledVector(u,br.y),g.addScaledVector(f,br.z),g)}static getInterpolatedAttribute(e,t,r,o,l,u){return vd.setScalar(0),_d.setScalar(0),yd.setScalar(0),vd.fromBufferAttribute(e,t),_d.fromBufferAttribute(e,r),yd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(vd,l.x),u.addScaledVector(_d,l.y),u.addScaledVector(yd,l.z),u}static isFrontFacing(e,t,r,o){return ki.subVectors(r,t),Sr.subVectors(e,t),ki.cross(Sr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ki.subVectors(this.c,this.b),Sr.subVectors(this.a,this.b),ki.cross(Sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Gi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;sa.subVectors(o,r),aa.subVectors(l,r),md.subVectors(e,r);const g=sa.dot(md),m=aa.dot(md);if(g<=0&&m<=0)return t.copy(r);gd.subVectors(e,o);const _=sa.dot(gd),E=aa.dot(gd);if(_>=0&&E<=_)return t.copy(o);const h=g*E-_*m;if(h<=0&&g>=0&&_<=0&&g-_>0)return u=g/(g-_),t.copy(r).addScaledVector(sa,u);xd.subVectors(e,l);const S=sa.dot(xd),b=aa.dot(xd);if(b>=0&&S<=b)return t.copy(l);const w=S*m-g*b;if(w<=0&&m>=0&&b<=0)return f=m/(m-b),t.copy(r).addScaledVector(aa,f);const v=_*b-S*E;if(v<=0&&E-_>=0&&S-b>=0)return A0.subVectors(l,o),f=(E-_)/(E-_+(S-b)),t.copy(o).addScaledVector(A0,f);const y=1/(v+w+h);return u=w*y,f=h*y,t.copy(r).addScaledVector(sa,u).addScaledVector(aa,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xo{constructor(e=new ve(1/0,1/0,1/0),t=new ve(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Ui):Ui.fromBufferAttribute(l,u),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Rl.copy(r.boundingBox)),Rl.applyMatrix4(e.matrixWorld),this.union(Rl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(eo),Nl.subVectors(this.max,eo),oa.subVectors(e.a,eo),la.subVectors(e.b,eo),ca.subVectors(e.c,eo),qr.subVectors(la,oa),Kr.subVectors(ca,la),ys.subVectors(oa,ca);let t=[0,-qr.z,qr.y,0,-Kr.z,Kr.y,0,-ys.z,ys.y,qr.z,0,-qr.x,Kr.z,0,-Kr.x,ys.z,0,-ys.x,-qr.y,qr.x,0,-Kr.y,Kr.x,0,-ys.y,ys.x,0];return!Sd(t,oa,la,ca,Nl)||(t=[1,0,0,0,1,0,0,0,1],!Sd(t,oa,la,ca,Nl))?!1:(Pl.crossVectors(qr,Kr),t=[Pl.x,Pl.y,Pl.z],Sd(t,oa,la,ca,Nl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wr=[new ve,new ve,new ve,new ve,new ve,new ve,new ve,new ve],Ui=new ve,Rl=new xo,oa=new ve,la=new ve,ca=new ve,qr=new ve,Kr=new ve,ys=new ve,eo=new ve,Nl=new ve,Pl=new ve,Ss=new ve;function Sd(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){Ss.fromArray(s,l);const f=o.x*Math.abs(Ss.x)+o.y*Math.abs(Ss.y)+o.z*Math.abs(Ss.z),g=e.dot(Ss),m=t.dot(Ss),_=r.dot(Ss);if(Math.max(-Math.max(g,m,_),Math.min(g,m,_))>f)return!1}return!0}const En=new ve,Dl=new Ft;let X_=0;class Ts extends Ns{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:X_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=M_,this.updateRanges=[],this.gpuType=nr,this.version=0,this._normalizationScale=e!==void 0?Pf(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Dl.fromBufferAttribute(this,t),Dl.applyMatrix3(e),this.setXY(t,Dl.x,Dl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)En.fromBufferAttribute(this,t),En.applyMatrix3(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):P_(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):D_(e,this.array)}}class Fm extends Ts{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Om extends Ts{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class kn extends Ts{constructor(e,t,r){super(new Float32Array(e),t,r)}}const Y_=new xo,to=new ve,bd=new ve;class Lf{constructor(e=new ve,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Y_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;to.subVectors(e,this.center);const t=to.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(to,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(to.copy(e.center).add(bd)),this.expandByPoint(to.copy(e.center).sub(bd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let q_=0;const Ei=new xn,wd=new Kn,ua=new ve,gi=new xo,no=new xo,In=new ve;class or extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=go(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(E_(e)?Om:Fm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new Et().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,t,r){return Ei.makeTranslation(e,t,r),this.applyMatrix4(Ei),this}scale(e,t,r){return Ei.makeScale(e,t,r),this.applyMatrix4(Ei),this}lookAt(e){return wd.lookAt(e),wd.updateMatrix(),this.applyMatrix4(wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ua).negate(),this.translate(ua.x,ua.y,ua.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new kn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ve(-1/0,-1/0,-1/0),new ve(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];gi.setFromBufferAttribute(l),this.morphTargetsRelative?(In.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(In),In.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(In)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ve,1/0);return}if(e){const r=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];no.setFromBufferAttribute(f),this.morphTargetsRelative?(In.addVectors(gi.min,no.min),gi.expandByPoint(In),In.addVectors(gi.max,no.max),gi.expandByPoint(In)):(gi.expandByPoint(no.min),gi.expandByPoint(no.max))}gi.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)In.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(In));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],g=this.morphTargetsRelative;for(let m=0,_=f.count;m<_;m++)In.fromBufferAttribute(f,m),g&&(ua.fromBufferAttribute(e,m),In.add(ua)),o=Math.max(o,r.distanceToSquared(In))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Ts(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const f=[],g=[],m=new Uint8Array(r.count);for(let J=0;J<r.count;J++)f[J]=new ve,g[J]=new ve;const _=new ve,E=new ve,h=new ve,S=new Ft,b=new Ft,w=new Ft,v=new ve,y=new ve;function N(J,W,V){m[J]=m[W]=m[V]=1,_.fromBufferAttribute(r,J),E.fromBufferAttribute(r,W),h.fromBufferAttribute(r,V),S.fromBufferAttribute(l,J),b.fromBufferAttribute(l,W),w.fromBufferAttribute(l,V),E.sub(_),h.sub(_),b.sub(S),w.sub(S);const B=1/(b.x*w.y-w.x*b.y);isFinite(B)&&(v.copy(E).multiplyScalar(w.y).addScaledVector(h,-b.y).multiplyScalar(B),y.copy(h).multiplyScalar(b.x).addScaledVector(E,-w.x).multiplyScalar(B),f[J].add(v),f[W].add(v),f[V].add(v),g[J].add(y),g[W].add(y),g[V].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let J=0,W=U.length;J<W;++J){const V=U[J],B=V.start,X=V.count;for(let F=B,te=B+X;F<te;F+=3)N(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const P=new ve,z=new ve,I=new ve,M=new ve;function D(J){I.fromBufferAttribute(o,J),M.copy(I);const W=f[J];P.copy(W),P.sub(I.multiplyScalar(I.dot(W))).normalize(),z.crossVectors(M,W);const B=z.dot(g[J])<0?-1:1;u.setXYZW(J,P.x,P.y,P.z,B)}for(let J=0,W=r.count;J<W;++J)m[J]&&D(J);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new Ts(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let h=0,S=r.count;h<S;h++)r.setXYZ(h,0,0,0);const o=new ve,l=new ve,u=new ve,f=new ve,g=new ve,m=new ve,_=new ve,E=new ve;if(e)for(let h=0,S=e.count;h<S;h+=3){const b=e.getX(h+0),w=e.getX(h+1),v=e.getX(h+2);o.fromBufferAttribute(t,b),l.fromBufferAttribute(t,w),u.fromBufferAttribute(t,v),_.subVectors(u,l),E.subVectors(o,l),_.cross(E),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,w),m.fromBufferAttribute(r,v),f.add(_),g.add(_),m.add(_),r.setXYZ(b,f.x,f.y,f.z),r.setXYZ(w,g.x,g.y,g.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let h=0,S=t.count;h<S;h+=3)o.fromBufferAttribute(t,h+0),l.fromBufferAttribute(t,h+1),u.fromBufferAttribute(t,h+2),_.subVectors(u,l),E.subVectors(o,l),_.cross(E),r.setXYZ(h+0,_.x,_.y,_.z),r.setXYZ(h+1,_.x,_.y,_.z),r.setXYZ(h+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)In.fromBufferAttribute(e,t),In.normalize(),e.setXYZ(t,In.x,In.y,In.z)}toNonIndexed(){function e(f,g){const m=f.array,_=f.itemSize,E=f.normalized,h=new m.constructor(g.length*_);let S=0,b=0;for(let w=0,v=g.length;w<v;w++){f.isInterleavedBufferAttribute?S=g[w]*f.data.stride+f.offset:S=g[w]*_;for(let y=0;y<_;y++)h[b++]=m[S++]}return new Ts(h,_,E)}if(this.index===null)return wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new or,r=this.index.array,o=this.attributes;for(const f in o){const g=o[f],m=e(g,r);t.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const g=[],m=l[f];for(let _=0,E=m.length;_<E;_++){const h=m[_],S=e(h,r);g.push(S)}t.morphAttributes[f]=g}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,g=u.length;f<g;f++){const m=u[f];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const g=this.parameters;for(const m in g)g[m]!==void 0&&(e[m]=g[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const g in r){const m=r[g];e.data.attributes[g]=m.toJSON(e.data)}const o={};let l=!1;for(const g in this.morphAttributes){const m=this.morphAttributes[g],_=[];for(let E=0,h=m.length;E<h;E++){const S=m[E];_.push(S.toJSON(e.data))}_.length>0&&(o[g]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const _=o[m];this.setAttribute(m,_.clone(t))}const l=e.morphAttributes;for(const m in l){const _=[],E=l[m];for(let h=0,S=E.length;h<S;h++)_.push(E[h].clone(t));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,_=u.length;m<_;m++){const E=u[m];this.addGroup(E.start,E.count,E.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const g=e.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Md=new ve,K_=new ve,Z_=new Et;class Qr{constructor(e=new ve(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Md.subVectors(r,t).cross(K_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Md),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Z_.getNormalMatrix(e),o=this.coplanarPoint(Md).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let J_=0;class vo extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=go(),this.name="",this.type="Material",this.blending=oo,this.side=As,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hm,this.blendDst=pm,this.blendEquation=ha,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=v_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rd,this.stencilZFail=rd,this.stencilZPass=rd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){wt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){wt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const g=l[f];delete g.metadata,u.push(g)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Lt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Qr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Ft().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ft().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Mr=new ve,Ed=new ve,Ll=new ve,Il=new ve;class Q_{constructor(e=new ve,t=new ve(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mr.copy(this.origin).addScaledVector(this.direction,t),Mr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Ed.copy(e).add(t).multiplyScalar(.5),Ll.copy(t).sub(e).normalize(),Il.copy(this.origin).sub(Ed);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Ll),f=Il.dot(this.direction),g=-Il.dot(Ll),m=Il.lengthSq(),_=Math.abs(1-u*u);let E,h,S,b;if(_>0)if(E=u*g-f,h=u*f-g,b=l*_,E>=0)if(h>=-b)if(h<=b){const w=1/_;E*=w,h*=w,S=E*(E+u*h+2*f)+h*(u*E+h+2*g)+m}else h=l,E=Math.max(0,-(u*h+f)),S=-E*E+h*(h+2*g)+m;else h=-l,E=Math.max(0,-(u*h+f)),S=-E*E+h*(h+2*g)+m;else h<=-b?(E=Math.max(0,-(-u*l+f)),h=E>0?-l:Math.min(Math.max(-l,-g),l),S=-E*E+h*(h+2*g)+m):h<=b?(E=0,h=Math.min(Math.max(-l,-g),l),S=h*(h+2*g)+m):(E=Math.max(0,-(u*l+f)),h=E>0?l:Math.min(Math.max(-l,-g),l),S=-E*E+h*(h+2*g)+m);else h=u>0?-l:l,E=Math.max(0,-(u*h+f)),S=-E*E+h*(h+2*g)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,E),o&&o.copy(Ed).addScaledVector(Ll,h),S}intersectSphere(e,t){if(e.radius<0)return null;Mr.subVectors(e.center,this.origin);const r=Mr.dot(this.direction),o=Mr.dot(Mr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,g=r+u;return g<0?null:f<0?this.at(g,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,g;const m=1/this.direction.x,_=1/this.direction.y,E=1/this.direction.z,h=this.origin;return m>=0?(r=(e.min.x-h.x)*m,o=(e.max.x-h.x)*m):(r=(e.max.x-h.x)*m,o=(e.min.x-h.x)*m),_>=0?(l=(e.min.y-h.y)*_,u=(e.max.y-h.y)*_):(l=(e.max.y-h.y)*_,u=(e.min.y-h.y)*_),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),E>=0?(f=(e.min.z-h.z)*E,g=(e.max.z-h.z)*E):(f=(e.max.z-h.z)*E,g=(e.min.z-h.z)*E),r>g||f>o)||((f>r||r!==r)&&(r=f),(g<o||o!==o)&&(o=g),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Mr)!==null}intersectTriangle(e,t,r,o,l){const u=this.origin,f=this.direction,g=f.x,m=f.y,_=f.z,E=e.x-u.x,h=e.y-u.y,S=e.z-u.z,b=t.x-u.x,w=t.y-u.y,v=t.z-u.z,y=r.x-u.x,N=r.y-u.y,U=r.z-u.z,P=Math.abs(g),z=Math.abs(m),I=Math.abs(_);let M,D,J,W,V,B,X,F,te,de,$,ie;if(P>=z&&P>=I?(J=g,B=E,te=b,ie=y,g>=0?(M=m,D=_,W=h,V=S,X=w,F=v,de=N,$=U):(M=_,D=m,W=S,V=h,X=v,F=w,de=U,$=N)):z>=I?(J=m,B=h,te=w,ie=N,m>=0?(M=_,D=g,W=S,V=E,X=v,F=b,de=U,$=y):(M=g,D=_,W=E,V=S,X=b,F=v,de=y,$=U)):(J=_,B=S,te=v,ie=U,_>=0?(M=g,D=m,W=E,V=h,X=b,F=w,de=y,$=N):(M=m,D=g,W=h,V=E,X=w,F=b,de=N,$=y)),J===0)return null;const O=M/J,ee=D/J,k=1/J,q=W-O*B,pe=V-ee*B,Y=X-O*te,oe=F-ee*te,me=de-O*ie,ge=$-ee*ie,be=me*oe-ge*Y,Ie=q*ge-pe*me,it=Y*pe-oe*q;if(o){if(be<0||Ie<0||it<0)return null}else if((be<0||Ie<0||it<0)&&(be>0||Ie>0||it>0))return null;const $e=be+Ie+it;if($e===0)return null;const De=k*(be*B+Ie*te+it*ie);return($e>0?De<0:De>0)?null:this.at(De/$e,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ec extends vo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rs,this.combine=mm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const R0=new xn,bs=new Q_,kl=new Lf,N0=new ve,Ul=new ve,zl=new ve,Fl=new ve,Td=new ve,Ol=new ve,P0=new ve,Bl=new ve;class Tn extends Kn{constructor(e=new or,t=new ec){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Ol.set(0,0,0);for(let g=0,m=l.length;g<m;g++){const _=f[g],E=l[g];_!==0&&(Td.fromBufferAttribute(E,e),u?Ol.addScaledVector(Td,_):Ol.addScaledVector(Td.sub(t),_))}t.add(Ol)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),kl.copy(r.boundingSphere),kl.applyMatrix4(l),bs.copy(e.ray).recast(e.near),!(kl.containsPoint(bs.origin)===!1&&(bs.intersectSphere(kl,N0)===null||bs.origin.distanceToSquared(N0)>(e.far-e.near)**2))&&(R0.copy(l).invert(),bs.copy(e.ray).applyMatrix4(R0),!(r.boundingBox!==null&&bs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,bs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,g=l.attributes.position,m=l.attributes.uv,_=l.attributes.uv1,E=l.attributes.normal,h=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let b=0,w=h.length;b<w;b++){const v=h[b],y=u[v.materialIndex],N=Math.max(v.start,S.start),U=Math.min(f.count,Math.min(v.start+v.count,S.start+S.count));for(let P=N,z=U;P<z;P+=3){const I=f.getX(P),M=f.getX(P+1),D=f.getX(P+2);o=Hl(this,y,e,r,m,_,E,I,M,D),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const b=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let v=b,y=w;v<y;v+=3){const N=f.getX(v),U=f.getX(v+1),P=f.getX(v+2);o=Hl(this,u,e,r,m,_,E,N,U,P),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(g!==void 0)if(Array.isArray(u))for(let b=0,w=h.length;b<w;b++){const v=h[b],y=u[v.materialIndex],N=Math.max(v.start,S.start),U=Math.min(g.count,Math.min(v.start+v.count,S.start+S.count));for(let P=N,z=U;P<z;P+=3){const I=P,M=P+1,D=P+2;o=Hl(this,y,e,r,m,_,E,I,M,D),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const b=Math.max(0,S.start),w=Math.min(g.count,S.start+S.count);for(let v=b,y=w;v<y;v+=3){const N=v,U=v+1,P=v+2;o=Hl(this,u,e,r,m,_,E,N,U,P),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function ey(s,e,t,r,o,l,u,f){let g;if(e.side===On?g=r.intersectTriangle(u,l,o,!0,f):g=r.intersectTriangle(o,l,u,e.side===As,f),g===null)return null;Bl.copy(f),Bl.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(Bl);return m<t.near||m>t.far?null:{distance:m,point:Bl.clone(),object:s}}function Hl(s,e,t,r,o,l,u,f,g,m){s.getVertexPosition(f,Ul),s.getVertexPosition(g,zl),s.getVertexPosition(m,Fl);const _=ey(s,e,t,r,Ul,zl,Fl,P0);if(_){const E=new ve;Gi.getBarycoord(P0,Ul,zl,Fl,E),o&&(_.uv=Gi.getInterpolatedAttribute(o,f,g,m,E,new Ft)),l&&(_.uv1=Gi.getInterpolatedAttribute(l,f,g,m,E,new Ft)),u&&(_.normal=Gi.getInterpolatedAttribute(u,f,g,m,E,new ve),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const h={a:f,b:g,c:m,normal:new ve,materialIndex:0};Gi.getNormal(Ul,zl,Fl,h.normal),_.face=h,_.barycoord=E}return _}class ty extends qn{constructor(e=null,t=1,r=1,o,l,u,f,g,m=Fn,_=Fn,E,h){super(null,u,f,g,m,_,o,l,E,h),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ws=new Lf,ny=new Ft(.5,.5),Gl=new ve;class mo{constructor(e=new Qr,t=new Qr,r=new Qr,o=new Qr,l=new Qr,u=new Qr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Vi,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],g=l[2],m=l[3],_=l[4],E=l[5],h=l[6],S=l[7],b=l[8],w=l[9],v=l[10],y=l[11],N=l[12],U=l[13],P=l[14],z=l[15];if(o[0].setComponents(m-u,S-_,y-b,z-N).normalize(),o[1].setComponents(m+u,S+_,y+b,z+N).normalize(),o[2].setComponents(m+f,S+E,y+w,z+U).normalize(),o[3].setComponents(m-f,S-E,y-w,z-U).normalize(),r)o[4].setComponents(g,h,v,P).normalize(),o[5].setComponents(m-g,S-h,y-v,z-P).normalize();else if(o[4].setComponents(m-g,S-h,y-v,z-P).normalize(),t===Vi)o[5].setComponents(m+g,S+h,y+v,z+P).normalize();else if(t===po)o[5].setComponents(g,h,v,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){ws.center.set(0,0,0);const t=ny.distanceTo(e.center);return ws.radius=.7071067811865476+t,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Gl.x=o.normal.x>0?e.max.x:e.min.x,Gl.y=o.normal.y>0?e.max.y:e.min.y,Gl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Gl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const D0=new xn;class If{constructor(){this.coordinateSystem=Vi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let o=0;o<t.length;o++){const l=t[o];D0.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),r[o]===void 0&&(r[o]=new mo),r[o].setFromProjectionMatrix(D0,l.coordinateSystem,l.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let o=0;o<e._count;o++)t[o]===void 0&&(t[o]=new mo),t[o].copy(r[o]);return this._count=e._count,this}clone(){return new If().copy(this)}}class Bm extends qn{constructor(e=[],t=xa,r,o,l,u,f,g,m,_){super(e,t,r,o,l,u,f,g,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mc extends qn{constructor(e,t,r,o,l,u,f,g,m){super(e,t,r,o,l,u,f,g,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ya extends qn{constructor(e,t,r=sr,o,l,u,f=Fn,g=Fn,m,_=is,E=1){if(_!==is&&_!==ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:E};super(h,o,l,u,f,g,_,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Df(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Hm extends ya{constructor(e,t=sr,r=xa,o,l,u=Fn,f=Fn,g,m=is){const _={width:e,height:e,depth:1},E=[_,_,_,_,_,_];super(e,e,t,r,o,l,u,f,g,m),this.image=E,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Gm extends qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _o extends or{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const g=[],m=[],_=[],E=[];let h=0,S=0;b("z","y","x",-1,-1,r,t,e,u,l,0),b("z","y","x",1,-1,r,t,-e,u,l,1),b("x","z","y",1,1,e,r,t,o,u,2),b("x","z","y",1,-1,e,r,-t,o,u,3),b("x","y","z",1,-1,e,t,r,o,l,4),b("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(g),this.setAttribute("position",new kn(m,3)),this.setAttribute("normal",new kn(_,3)),this.setAttribute("uv",new kn(E,2));function b(w,v,y,N,U,P,z,I,M,D,J){const W=P/M,V=z/D,B=P/2,X=z/2,F=I/2,te=M+1,de=D+1;let $=0,ie=0;const O=new ve;for(let ee=0;ee<de;ee++){const k=ee*V-X;for(let q=0;q<te;q++){const pe=q*W-B;O[w]=pe*N,O[v]=k*U,O[y]=F,m.push(O.x,O.y,O.z),O[w]=0,O[v]=0,O[y]=I>0?1:-1,_.push(O.x,O.y,O.z),E.push(q/M),E.push(1-ee/D),$+=1}}for(let ee=0;ee<D;ee++)for(let k=0;k<M;k++){const q=h+k+te*ee,pe=h+k+te*(ee+1),Y=h+(k+1)+te*(ee+1),oe=h+(k+1)+te*ee;g.push(q,pe,oe),g.push(pe,Y,oe),ie+=6}f.addGroup(S,ie,J),S+=ie,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class kf extends or{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,f=0,g=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:g};const m=this;o=Math.floor(o),l=Math.floor(l);const _=[],E=[],h=[],S=[];let b=0;const w=[],v=r/2;let y=0;N(),u===!1&&(e>0&&U(!0),t>0&&U(!1)),this.setIndex(_),this.setAttribute("position",new kn(E,3)),this.setAttribute("normal",new kn(h,3)),this.setAttribute("uv",new kn(S,2));function N(){const P=new ve,z=new ve;let I=0;const M=(t-e)/r;for(let D=0;D<=l;D++){const J=[],W=D/l,V=W*(t-e)+e;for(let B=0;B<=o;B++){const X=B/o,F=X*g+f,te=Math.sin(F),de=Math.cos(F);z.x=V*te,z.y=-W*r+v,z.z=V*de,E.push(z.x,z.y,z.z),P.set(te,M,de).normalize(),h.push(P.x,P.y,P.z),S.push(X,1-W),J.push(b++)}w.push(J)}for(let D=0;D<o;D++)for(let J=0;J<l;J++){const W=w[J][D],V=w[J+1][D],B=w[J+1][D+1],X=w[J][D+1];(e>0||J!==0)&&(_.push(W,V,X),I+=3),(t>0||J!==l-1)&&(_.push(V,B,X),I+=3)}m.addGroup(y,I,0),y+=I}function U(P){const z=b,I=new Ft,M=new ve;let D=0;const J=P===!0?e:t,W=P===!0?1:-1;for(let B=1;B<=o;B++)E.push(0,v*W,0),h.push(0,W,0),S.push(.5,.5),b++;const V=b;for(let B=0;B<=o;B++){const F=B/o*g+f,te=Math.cos(F),de=Math.sin(F);M.x=J*de,M.y=v*W,M.z=J*te,E.push(M.x,M.y,M.z),h.push(0,W,0),I.x=te*.5+.5,I.y=de*.5*W+.5,S.push(I.x,I.y),b++}for(let B=0;B<o;B++){const X=z+B,F=V+B;P===!0?_.push(F,F+1,X):_.push(F+1,F,X),D+=3}m.addGroup(y,D,P===!0?1:2),y+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Uf extends kf{constructor(e=1,t=1,r=32,o=1,l=!1,u=0,f=Math.PI*2){super(0,e,t,r,o,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new Uf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yo extends or{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),g=Math.floor(o),m=f+1,_=g+1,E=e/f,h=t/g,S=[],b=[],w=[],v=[];for(let y=0;y<_;y++){const N=y*h-u;for(let U=0;U<m;U++){const P=U*E-l;b.push(P,-N,0),w.push(0,0,1),v.push(U/f),v.push(1-y/g)}}for(let y=0;y<g;y++)for(let N=0;N<f;N++){const U=N+m*y,P=N+m*(y+1),z=N+1+m*(y+1),I=N+1+m*y;S.push(U,P,I),S.push(P,z,I)}this.setIndex(S),this.setAttribute("position",new kn(b,3)),this.setAttribute("normal",new kn(w,3)),this.setAttribute("uv",new kn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.width,e.height,e.widthSegments,e.heightSegments)}}class zf extends or{constructor(e=.5,t=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const f=[],g=[],m=[],_=[];let E=e;const h=(t-e)/o,S=new ve,b=new Ft;for(let w=0;w<=o;w++){for(let v=0;v<=r;v++){const y=l+v/r*u;S.x=E*Math.cos(y),S.y=E*Math.sin(y),g.push(S.x,S.y,S.z),m.push(0,0,1),b.x=(S.x/t+1)/2,b.y=(S.y/t+1)/2,_.push(b.x,b.y)}E+=h}for(let w=0;w<o;w++){const v=w*(r+1);for(let y=0;y<r;y++){const N=y+v,U=N,P=N+r+1,z=N+r+2,I=N+1;f.push(U,P,I),f.push(P,z,I)}}this.setIndex(f),this.setAttribute("position",new kn(g,3)),this.setAttribute("normal",new kn(m,3)),this.setAttribute("uv",new kn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class zi extends or{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const g=Math.min(u+f,Math.PI);let m=0;const _=[],E=new ve,h=new ve,S=[],b=[],w=[],v=[];for(let y=0;y<=r;y++){const N=[],U=y/r,P=u+U*f,z=e*Math.cos(P),I=Math.sqrt(e*e-z*z);let M=0;y===0&&u===0?M=.5/t:y===r&&g===Math.PI&&(M=-.5/t);for(let D=0;D<=t;D++){const J=D/t,W=o+J*l;E.x=-I*Math.cos(W),E.y=z,E.z=I*Math.sin(W),b.push(E.x,E.y,E.z),h.copy(E).normalize(),w.push(h.x,h.y,h.z),v.push(J+M,1-U),N.push(m++)}_.push(N)}for(let y=0;y<r;y++)for(let N=0;N<t;N++){const U=_[y][N+1],P=_[y][N],z=_[y+1][N],I=_[y+1][N+1];(y!==0||u>0)&&S.push(U,P,I),(y!==r-1||g<Math.PI)&&S.push(P,z,I)}this.setIndex(S),this.setAttribute("position",new kn(b,3)),this.setAttribute("normal",new kn(w,3)),this.setAttribute("uv",new kn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Sa(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(L0(o))o.isRenderTargetTexture?(wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(L0(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Qn(s){const e={};for(let t=0;t<s.length;t++){const r=Sa(s[t]);for(const o in r)e[o]=r[o]}return e}function L0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function iy(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Vm(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ot.workingColorSpace}const ry={clone:Sa,merge:Qn};var sy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ay=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends vo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sy,this.fragmentShader=ay,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sa(e.uniforms),this.uniformsGroups=iy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new Lt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Ft().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ve().fromArray(o.value);break;case"v4":this.uniforms[r].value=new gn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new Et().fromArray(o.value);break;case"m4":this.uniforms[r].value=new xn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class oy extends Ti{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vl extends vo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gf,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ly extends vo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=g_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cy extends vo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class jm extends Kn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Cd=new xn,I0=new ve,k0=new ve;class uy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.mapType=vi,this.map=null,this.mapPass=null,this.matrix=new xn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mo,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new gn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;I0.setFromMatrixPosition(e.matrixWorld),t.position.copy(I0),k0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(k0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,o){Cd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(Cd,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,f=o?o.w/l.y:1,g=o?o.x/l.x:0,m=o?o.y/l.y:0;e.coordinateSystem===po||e.reversedDepth?t.set(.5*u,0,0,.5*u+g,0,.5*f,0,.5*f+m,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+g,0,.5*f,0,.5*f+m,0,0,.5,.5,0,0,0,1),t.multiply(Cd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const jl=new ve,Wl=new ba,Ji=new ve;class Wm extends Kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xn,this.projectionMatrix=new xn,this.projectionMatrixInverse=new xn,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(jl,Wl,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jl,Wl,Ji.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(jl,Wl,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jl,Wl,Ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Zr=new ve,U0=new Ft,z0=new Ft;class Oi extends Wm{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xf*2*Math.atan(Math.tan(sd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z),Zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z)}getViewSize(e,t){return this.getViewBounds(e,U0,z0),t.subVectors(z0,U0)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sd*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const g=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/g,t-=u.offsetY*r/m,o*=u.width/g,r*=u.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class $m extends Wm{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,g=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,f-=_*this.view.offsetY,g=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class dy extends uy{constructor(){super(new $m(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fy extends jm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kn.DEFAULT_UP),this.updateMatrix(),this.target=new Kn,this.shadow=new dy}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class hy extends jm{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const da=-90,fa=1;class vf extends Kn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Oi(da,fa,e,t);o.layers=this.layers,this.add(o);const l=new Oi(da,fa,e,t);l.layers=this.layers,this.add(l);const u=new Oi(da,fa,e,t);u.layers=this.layers,this.add(u);const f=new Oi(da,fa,e,t);f.layers=this.layers,this.add(f);const g=new Oi(da,fa,e,t);g.layers=this.layers,this.add(g);const m=new Oi(da,fa,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,g]=t;for(const m of t)this.remove(m);if(e===Vi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(e===po)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,g,m,_]=this.children,E=e.getRenderTarget(),h=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(r,4,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),r.texture.mipmapsAutoUpdate=w,e.setRenderTarget(r,5,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,_),e.setRenderTarget(E,h,S),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class py extends Oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function F0(s,e,t,r){const o=my(r);switch(t){case Am:return s*e;case Nm:return s*e/o.components*o.byteLength;case Af:return s*e/o.components*o.byteLength;case Rs:return s*e*2/o.components*o.byteLength;case Rf:return s*e*2/o.components*o.byteLength;case Rm:return s*e*3/o.components*o.byteLength;case ir:return s*e*4/o.components*o.byteLength;case Nf:return s*e*4/o.components*o.byteLength;case ql:case Kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Zl:case Jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bd:case Gd:return Math.max(s,16)*Math.max(e,8)/4;case Od:case Hd:return Math.max(s,8)*Math.max(e,8)/2;case Vd:case jd:case $d:case Xd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Wd:case rc:case Yd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ef:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case tf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case nf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case rf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case sf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case af:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case of:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case lf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case cf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case uf:case df:case ff:return Math.ceil(s/4)*Math.ceil(e/4)*16;case hf:case pf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case sc:case mf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function my(s){switch(s){case vi:case Mm:return{byteLength:1,components:1};case ho:case Em:case ar:return{byteLength:2,components:1};case Tf:case Cf:return{byteLength:2,components:4};case sr:case Ef:case nr:return{byteLength:4,components:1};case Tm:case Cm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mf}}));typeof window<"u"&&(window.__THREE__?wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xm(){let s=null,e=!1,t=null,r=null;function o(l,u){r=s.requestAnimationFrame(o),t(l,u)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function gy(s){const e=new WeakMap;function t(f,g){const m=f.array,_=f.usage,E=m.byteLength,h=s.createBuffer();s.bindBuffer(g,h),s.bufferData(g,m,_),f.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=s.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:h,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:E}}function r(f,g,m){const _=g.array,E=g.updateRanges;if(s.bindBuffer(m,f),E.length===0)s.bufferSubData(m,0,_);else{E.sort((S,b)=>S.start-b.start);let h=0;for(let S=1;S<E.length;S++){const b=E[h],w=E[S];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++h,E[h]=w)}E.length=h+1;for(let S=0,b=E.length;S<b;S++){const w=E[S];s.bufferSubData(m,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}g.clearUpdateRanges()}g.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const g=e.get(f);g&&(s.deleteBuffer(g.buffer),e.delete(f))}function u(f,g){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,t(f,g));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,g),m.version=f.version}}return{get:o,remove:l,update:u}}var xy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vy=`#ifdef USE_ALPHAHASH
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
#endif`,_y=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,by=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wy=`#ifdef USE_AOMAP
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
#endif`,My=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ey=`#ifdef USE_BATCHING
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
#endif`,Ty=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ay=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ry=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ny=`#ifdef USE_IRIDESCENCE
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
#endif`,Py=`#ifdef USE_BUMPMAP
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
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Iy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ky=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Fy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Oy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,By=`#define PI 3.141592653589793
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
} // validated`,Hy=`vec3 transformedNormal = objectNormal;
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
#endif`,Gy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$y="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yy=`#ifdef USE_ENVMAP
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
#endif`,qy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Ky=`#ifdef USE_ENVMAP
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
#endif`,Zy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jy=`#ifdef USE_ENVMAP
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
#endif`,Qy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,t1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i1=`#ifdef USE_GRADIENTMAP
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
}`,r1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,l1=`#ifdef USE_ENVMAP
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
#endif`,c1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,f1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h1=`PhysicalMaterial material;
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
#endif`,p1=`uniform sampler2D dfgLUT;
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
}`,m1=`
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
#endif`,g1=`#if defined( RE_IndirectDiffuse )
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
#endif`,x1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v1=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,_1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,E1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,T1=`#if defined( USE_POINTS_UV )
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
#endif`,C1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N1=`#if defined( USE_MORPHCOLORS )
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
#endif`,P1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D1=`#ifdef USE_MORPHTARGETS
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
#endif`,L1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,k1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,U1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,O1=`#ifdef USE_NORMALMAP
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
#endif`,B1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,H1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,X1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tS=`float getShadowMask() {
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
}`,nS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iS=`#ifdef USE_SKINNING
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
#endif`,rS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sS=`#ifdef USE_SKINNING
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
#endif`,aS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uS=`#ifdef USE_TRANSMISSION
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
#endif`,dS=`#ifdef USE_TRANSMISSION
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
#endif`,fS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xS=`uniform sampler2D t2D;
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
}`,vS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_S=`uniform float backgroundBlurriness;
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
}`,yS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bS=`#include <common>
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
}`,wS=`#if DEPTH_PACKING == 3200
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
}`,MS=`#define DISTANCE
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
}`,ES=`#define DISTANCE
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
}`,TS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AS=`uniform float scale;
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
}`,RS=`uniform vec3 diffuse;
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
}`,NS=`#include <common>
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
}`,PS=`uniform vec3 diffuse;
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
}`,DS=`#define LAMBERT
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
}`,LS=`#define LAMBERT
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
}`,IS=`#define MATCAP
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
}`,kS=`#define MATCAP
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
}`,US=`#define NORMAL
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
}`,zS=`#define NORMAL
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
}`,FS=`#define PHONG
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
}`,OS=`#define PHONG
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
}`,BS=`#define STANDARD
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
}`,HS=`#define STANDARD
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
}`,GS=`#define TOON
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
}`,VS=`#define TOON
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
}`,jS=`uniform float size;
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
}`,WS=`uniform vec3 diffuse;
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
}`,$S=`#include <common>
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
}`,XS=`uniform vec3 color;
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
}`,YS=`uniform float rotation;
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
}`,qS=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:xy,alphahash_pars_fragment:vy,alphamap_fragment:_y,alphamap_pars_fragment:yy,alphatest_fragment:Sy,alphatest_pars_fragment:by,aomap_fragment:wy,aomap_pars_fragment:My,batching_pars_vertex:Ey,batching_vertex:Ty,begin_vertex:Cy,beginnormal_vertex:Ay,bsdfs:Ry,iridescence_fragment:Ny,bumpmap_pars_fragment:Py,clipping_planes_fragment:Dy,clipping_planes_pars_fragment:Ly,clipping_planes_pars_vertex:Iy,clipping_planes_vertex:ky,color_fragment:Uy,color_pars_fragment:zy,color_pars_vertex:Fy,color_vertex:Oy,common:By,defaultnormal_vertex:Hy,displacementmap_pars_vertex:Gy,displacementmap_vertex:Vy,emissivemap_fragment:jy,emissivemap_pars_fragment:Wy,colorspace_fragment:$y,colorspace_pars_fragment:Xy,envmap_fragment:Yy,envmap_common_pars_fragment:qy,envmap_pars_fragment:Ky,envmap_pars_vertex:Zy,envmap_physical_pars_fragment:l1,envmap_vertex:Jy,fog_vertex:Qy,fog_pars_vertex:e1,fog_fragment:t1,fog_pars_fragment:n1,gradientmap_pars_fragment:i1,lightmap_pars_fragment:r1,lights_lambert_fragment:s1,lights_lambert_pars_fragment:a1,lights_pars_begin:o1,lights_toon_fragment:c1,lights_toon_pars_fragment:u1,lights_phong_fragment:d1,lights_phong_pars_fragment:f1,lights_physical_fragment:h1,lights_physical_pars_fragment:p1,lights_fragment_begin:m1,lights_fragment_maps:g1,lights_fragment_end:x1,lightprobes_pars_fragment:v1,logdepthbuf_fragment:_1,logdepthbuf_pars_fragment:y1,logdepthbuf_pars_vertex:S1,logdepthbuf_vertex:b1,map_fragment:w1,map_pars_fragment:M1,map_particle_fragment:E1,map_particle_pars_fragment:T1,metalnessmap_fragment:C1,metalnessmap_pars_fragment:A1,morphinstance_vertex:R1,morphcolor_vertex:N1,morphnormal_vertex:P1,morphtarget_pars_vertex:D1,morphtarget_vertex:L1,normal_fragment_begin:I1,normal_fragment_maps:k1,normal_pars_fragment:U1,normal_pars_vertex:z1,normal_vertex:F1,normalmap_pars_fragment:O1,clearcoat_normal_fragment_begin:B1,clearcoat_normal_fragment_maps:H1,clearcoat_pars_fragment:G1,iridescence_pars_fragment:V1,opaque_fragment:j1,packing:W1,premultiplied_alpha_fragment:$1,project_vertex:X1,dithering_fragment:Y1,dithering_pars_fragment:q1,roughnessmap_fragment:K1,roughnessmap_pars_fragment:Z1,shadowmap_pars_fragment:J1,shadowmap_pars_vertex:Q1,shadowmap_vertex:eS,shadowmask_pars_fragment:tS,skinbase_vertex:nS,skinning_pars_vertex:iS,skinning_vertex:rS,skinnormal_vertex:sS,specularmap_fragment:aS,specularmap_pars_fragment:oS,tonemapping_fragment:lS,tonemapping_pars_fragment:cS,transmission_fragment:uS,transmission_pars_fragment:dS,uv_pars_fragment:fS,uv_pars_vertex:hS,uv_vertex:pS,worldpos_vertex:mS,background_vert:gS,background_frag:xS,backgroundCube_vert:vS,backgroundCube_frag:_S,cube_vert:yS,cube_frag:SS,depth_vert:bS,depth_frag:wS,distance_vert:MS,distance_frag:ES,equirect_vert:TS,equirect_frag:CS,linedashed_vert:AS,linedashed_frag:RS,meshbasic_vert:NS,meshbasic_frag:PS,meshlambert_vert:DS,meshlambert_frag:LS,meshmatcap_vert:IS,meshmatcap_frag:kS,meshnormal_vert:US,meshnormal_frag:zS,meshphong_vert:FS,meshphong_frag:OS,meshphysical_vert:BS,meshphysical_frag:HS,meshtoon_vert:GS,meshtoon_frag:VS,points_vert:jS,points_frag:WS,shadow_vert:$S,shadow_frag:XS,sprite_vert:YS,sprite_frag:qS},Je={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},envMapRotation:{value:new Et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},er={basic:{uniforms:Qn([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Qn([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Qn([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Qn([Je.common,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.roughnessmap,Je.metalnessmap,Je.fog,Je.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Qn([Je.common,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.gradientmap,Je.fog,Je.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Qn([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Qn([Je.points,Je.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Qn([Je.common,Je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Qn([Je.common,Je.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Qn([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Qn([Je.sprite,Je.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Et}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distance:{uniforms:Qn([Je.common,Je.displacementmap,{referencePosition:{value:new ve},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distance_vert,fragmentShader:Nt.distance_frag},shadow:{uniforms:Qn([Je.lights,Je.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};er.physical={uniforms:Qn([er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const $l={r:0,b:0,g:0},KS=new xn,Ym=new Et;Ym.set(-1,0,0,0,1,0,0,0,1);function ZS(s,e,t,r,o,l){const u=new Lt(0);let f=o===!0?0:1,g,m,_=null,E=0,h=null;function S(N){let U=N.isScene===!0?N.background:null;if(U&&U.isTexture){const P=N.backgroundBlurriness>0;U=e.get(U,P)}return U}function b(N){let U=!1;const P=S(N);P===null?v(u,f):P&&P.isColor&&(v(P,1),U=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?t.buffers.color.setClear(0,0,0,1,l):z==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||U)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function w(N,U){const P=S(U);P&&P.isCubeTexture?(m===void 0&&(m=new Tn(new _o(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:Sa(er.backgroundCube.uniforms),vertexShader:er.backgroundCube.vertexShader,fragmentShader:er.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(z,I,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=P,m.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(KS.makeRotationFromEuler(U.backgroundRotation)).transpose(),P.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(Ym),m.material.toneMapped=Ot.getTransfer(P.colorSpace)!==Zt,(_!==P||E!==P.version||h!==s.toneMapping)&&(m.material.needsUpdate=!0,_=P,E=P.version,h=s.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null)):P&&P.isTexture&&(g===void 0&&(g=new Tn(new yo(2,2),new Ti({name:"BackgroundMaterial",uniforms:Sa(er.background.uniforms),vertexShader:er.background.vertexShader,fragmentShader:er.background.fragmentShader,side:As,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(g)),g.material.uniforms.t2D.value=P,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.toneMapped=Ot.getTransfer(P.colorSpace)!==Zt,P.matrixAutoUpdate===!0&&P.updateMatrix(),g.material.uniforms.uvTransform.value.copy(P.matrix),(_!==P||E!==P.version||h!==s.toneMapping)&&(g.material.needsUpdate=!0,_=P,E=P.version,h=s.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null))}function v(N,U){N.getRGB($l,Vm(s)),t.buffers.color.setClear($l.r,$l.g,$l.b,U,l)}function y(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return u},setClearColor:function(N,U=1){u.set(N),f=U,v(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(N){f=N,v(u,f)},render:b,addToRenderList:w,dispose:y}}function JS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=h(null);let l=o,u=!1;function f(V,B,X,F,te){let de=!1;const $=E(V,F,X,B);l!==$&&(l=$,m(l.object)),de=S(V,F,X,te),de&&b(V,F,X,te),te!==null&&e.update(te,s.ELEMENT_ARRAY_BUFFER),(de||u)&&(u=!1,P(V,B,X,F),te!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function g(){return s.createVertexArray()}function m(V){return s.bindVertexArray(V)}function _(V){return s.deleteVertexArray(V)}function E(V,B,X,F){const te=F.wireframe===!0;let de=r[B.id];de===void 0&&(de={},r[B.id]=de);const $=V.isInstancedMesh===!0?V.id:0;let ie=de[$];ie===void 0&&(ie={},de[$]=ie);let O=ie[X.id];O===void 0&&(O={},ie[X.id]=O);let ee=O[te];return ee===void 0&&(ee=h(g()),O[te]=ee),ee}function h(V){const B=[],X=[],F=[];for(let te=0;te<t;te++)B[te]=0,X[te]=0,F[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:X,attributeDivisors:F,object:V,attributes:{},index:null}}function S(V,B,X,F){const te=l.attributes,de=B.attributes;let $=0;const ie=X.getAttributes();for(const O in ie)if(ie[O].location>=0){const k=te[O];let q=de[O];if(q===void 0&&(O==="instanceMatrix"&&V.instanceMatrix&&(q=V.instanceMatrix),O==="instanceColor"&&V.instanceColor&&(q=V.instanceColor)),k===void 0||k.attribute!==q||q&&k.data!==q.data)return!0;$++}return l.attributesNum!==$||l.index!==F}function b(V,B,X,F){const te={},de=B.attributes;let $=0;const ie=X.getAttributes();for(const O in ie)if(ie[O].location>=0){let k=de[O];k===void 0&&(O==="instanceMatrix"&&V.instanceMatrix&&(k=V.instanceMatrix),O==="instanceColor"&&V.instanceColor&&(k=V.instanceColor));const q={};q.attribute=k,k&&k.data&&(q.data=k.data),te[O]=q,$++}l.attributes=te,l.attributesNum=$,l.index=F}function w(){const V=l.newAttributes;for(let B=0,X=V.length;B<X;B++)V[B]=0}function v(V){y(V,0)}function y(V,B){const X=l.newAttributes,F=l.enabledAttributes,te=l.attributeDivisors;X[V]=1,F[V]===0&&(s.enableVertexAttribArray(V),F[V]=1),te[V]!==B&&(s.vertexAttribDivisor(V,B),te[V]=B)}function N(){const V=l.newAttributes,B=l.enabledAttributes;for(let X=0,F=B.length;X<F;X++)B[X]!==V[X]&&(s.disableVertexAttribArray(X),B[X]=0)}function U(V,B,X,F,te,de,$){$===!0?s.vertexAttribIPointer(V,B,X,te,de):s.vertexAttribPointer(V,B,X,F,te,de)}function P(V,B,X,F){w();const te=F.attributes,de=X.getAttributes(),$=B.defaultAttributeValues;for(const ie in de){const O=de[ie];if(O.location>=0){let ee=te[ie];if(ee===void 0&&(ie==="instanceMatrix"&&V.instanceMatrix&&(ee=V.instanceMatrix),ie==="instanceColor"&&V.instanceColor&&(ee=V.instanceColor)),ee!==void 0){const k=ee.normalized,q=ee.itemSize,pe=e.get(ee);if(pe===void 0)continue;const Y=pe.buffer,oe=pe.type,me=pe.bytesPerElement,ge=oe===s.INT||oe===s.UNSIGNED_INT||ee.gpuType===Ef;if(ee.isInterleavedBufferAttribute){const be=ee.data,Ie=be.isInterleavedBuffer===!0?be.stride:be.itemSize,it=ee.offset;if(be.isInstancedInterleavedBuffer||be.isInstancedBufferAttribute){for(let $e=0;$e<O.locationSize;$e++)y(O.location+$e,be.meshPerAttribute);V.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let $e=0;$e<O.locationSize;$e++)v(O.location+$e);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let $e=0;$e<O.locationSize;$e++)U(O.location+$e,q/O.locationSize,oe,k,Ie*me,(it+q/O.locationSize*$e)*me,ge)}else{if(ee.isInstancedBufferAttribute){for(let be=0;be<O.locationSize;be++)y(O.location+be,ee.meshPerAttribute);V.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let be=0;be<O.locationSize;be++)v(O.location+be);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let be=0;be<O.locationSize;be++)U(O.location+be,q/O.locationSize,oe,k,q*me,q/O.locationSize*be*me,ge)}}else if($!==void 0){const k=$[ie];if(k!==void 0)switch(k.length){case 2:s.vertexAttrib2fv(O.location,k);break;case 3:s.vertexAttrib3fv(O.location,k);break;case 4:s.vertexAttrib4fv(O.location,k);break;default:s.vertexAttrib1fv(O.location,k)}}}}N()}function z(){J();for(const V in r){const B=r[V];for(const X in B){const F=B[X];for(const te in F){const de=F[te];for(const $ in de)_(de[$].object),delete de[$];delete F[te]}}delete r[V]}}function I(V){if(r[V.id]===void 0)return;const B=r[V.id];for(const X in B){const F=B[X];for(const te in F){const de=F[te];for(const $ in de)_(de[$].object),delete de[$];delete F[te]}}delete r[V.id]}function M(V){for(const B in r){const X=r[B];for(const F in X){const te=X[F];if(te[V.id]===void 0)continue;const de=te[V.id];for(const $ in de)_(de[$].object),delete de[$];delete te[V.id]}}}function D(V){for(const B in r){const X=r[B],F=V.isInstancedMesh===!0?V.id:0,te=X[F];if(te!==void 0){for(const de in te){const $=te[de];for(const ie in $)_($[ie].object),delete $[ie];delete te[de]}delete X[F],Object.keys(X).length===0&&delete r[B]}}}function J(){W(),u=!0,l!==o&&(l=o,m(l.object))}function W(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:J,resetDefaultState:W,dispose:z,releaseStatesOfGeometry:I,releaseStatesOfObject:D,releaseStatesOfProgram:M,initAttributes:w,enableAttribute:v,disableUnusedAttributes:N}}function QS(s,e,t){let r;function o(g){r=g}function l(g,m){s.drawArrays(r,g,m),t.update(m,r,1)}function u(g,m,_){_!==0&&(s.drawArraysInstanced(r,g,m,_),t.update(m,r,_))}function f(g,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,m,0,_);let h=0;for(let S=0;S<_;S++)h+=m[S];t.update(h,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function eb(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(M){return!(M!==ir&&r.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(M){const D=M===ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==vi&&M!==nr&&!D&&r.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function g(M){if(M==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const _=g(m);_!==m&&(wt("WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const E=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&E===!1;t.reversedDepthBuffer===!0&&E===!1&&wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&E===!0&&wt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:g,textureFormatReadable:u,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:h,reversedDepthBuffer:E,maxTextures:S,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:v,maxAttributes:y,maxVertexUniforms:N,maxVaryings:U,maxFragmentUniforms:P,maxSamples:z,samples:I}}function tb(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Qr,f=new Et,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(E,h){const S=E.length!==0||h||r!==0||o;return o=h,r=E.length,S},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(E,h){t=_(E,h,0)},this.setState=function(E,h,S){const b=E.clippingPlanes,w=E.clipIntersection,v=E.clipShadows,y=s.get(E);if(!o||b===null||b.length===0||l&&!v)l?_(null):m();else{const N=l?0:r,U=N*4;let P=y.clippingState||null;g.value=P,P=_(b,h,U,S);for(let z=0;z!==U;++z)P[z]=t[z];y.clippingState=P,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=N}};function m(){g.value!==t&&(g.value=t,g.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(E,h,S,b){const w=E!==null?E.length:0;let v=null;if(w!==0){if(v=g.value,b!==!0||v===null){const y=S+w*4,N=h.matrixWorldInverse;f.getNormalMatrix(N),(v===null||v.length<y)&&(v=new Float32Array(y));for(let U=0,P=S;U!==w;++U,P+=4)u.copy(E[U]).applyMatrix4(N,f),u.normal.toArray(v,P),v[P+3]=u.constant}g.value=v,g.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,v}}class Ff extends rr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Bm(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new _o(5,5,5),l=new Ti({name:"CubemapFromEquirect",uniforms:Sa(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:On,blending:ma});l.uniforms.tEquirect.value=t;const u=new Tn(o,l),f=t.minFilter;return t.minFilter===ts&&(t.minFilter=ci),new vf(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}const O0=256,nb=3,ib=20,qm=256,Km=16,rb=3,sb=new ve,ab=new Lt;class cc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new vf(1,10,null),this._boxMesh=new Tn(new _o(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=sb}=l,g=this._renderer;this._setSize(u);const m=this._allocateTarget(),_=this._getSourceTarget(!0);t>0&&(_.texture.mipmapsAutoUpdate=!1);const E=g.autoClear,h=g.autoClearColor,S=g.autoClearDepth,b=g.autoClearStencil,w=e.background;g.autoClear=!0,g.autoClearColor=!0,g.autoClearDepth=!0,g.autoClearStencil=!0,w===null&&(e.background=g.getClearColor(ab));const v=new vf(r,o,_);return v.position.copy(f),v.update(g,e),g.autoClear=E,g.autoClearColor=h,g.autoClearDepth=S,g.autoClearStencil=b,e.background=w,t>0&&(_.texture.mipmapsAutoUpdate=!0,this._blur(m,t)),this._applyPMREM(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=G0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=H0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(O0,N_(e))}_fromTexture(e,t){e.mapping===xa||e.mapping===fo?this._setSize(e.image.length===0?O0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=B0(e,!1,!1),r=Math.log2(e)-nb;for(let o=0;o<=r;o++)t.texture.mipmaps.push({width:e>>o,height:e>>o});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=B0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const o=this._boxMesh,l=this._cubeCamera;o.material=r,l.renderTarget=e,l.activeMipmapLevel=t;const u=e.width>>t;e.viewport.set(0,0,u,u),l.update(this._renderer,o),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===xa||e.mapping===fo?(this._cubemapMaterial===null&&(this._cubemapMaterial=G0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=H0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=ob(),this._integrationMaterial=lb());const t=this._cubeSize,r=e.texture.mipmaps.length-1,o=this._ggxMaterial.uniforms;o.envMap.value=this._sourceTarget.texture;const l=this._integrationMaterial.uniforms;l.envMap.value=this._sourceTarget.texture,l.sourceLod.value=Math.log2(t/Km);for(let u=0;u<=r;u++){const f=cc.lodToRoughness(u,r);if(u>r-rb)l.roughness.value=f,this._renderCube(e,u,this._integrationMaterial);else{const g=f>0?Math.log2(t)+.5*Math.log2(6/(qm*Math.pow(f,4)))+.5:0;o.roughness.value=f,o.lodBias.value=g,this._renderCube(e,u,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=cb());const r=this._blurMaterial,o=r.uniforms,l=this._sourceTarget;o.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,o.envMap.value=l.texture,this._renderCube(e,0,r),o.envMap.value=e.texture,this._renderCube(l,0,r)}}function B0(s,e,t){return new Ff(s,{minFilter:ts,generateMipmaps:e,type:ar,colorSpace:ac,depthBuffer:t})}function So(s,e,t){return new Ti({name:s,uniforms:e,vertexShader:Nt.cube_vert,fragmentShader:t,side:On,blending:ma,depthTest:!1,depthWrite:!1})}function ob(){return So("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${qm}u

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
	`)}function lb(){return So("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Km}},`

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
	`)}function cb(){return So("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ib}
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
	`)}function H0(){return So("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function G0(){return So("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ub(s){let e=new WeakMap,t=new WeakMap,r=null;function o(h,S=!1){return h==null?null:S?u(h):l(h)}function l(h){if(h&&h.isTexture){const S=h.mapping;if(S===td||S===nd)if(e.has(h)){const b=e.get(h).texture;return f(b,h.mapping)}else{const b=h.image;if(b&&b.height>0){const w=new Ff(b.height);return w.fromEquirectangularTexture(s,h),e.set(h,w),h.addEventListener("dispose",m),f(w.texture,h.mapping)}else return null}}return h}function u(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const S=h.mapping,b=S===td||S===nd,w=S===xa||S===fo;if(b||w){let v=t.get(h);const y=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return r===null&&(r=new cc(s)),v=b?r.fromEquirectangular(h,v):r.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const N=h.image;return b&&N&&N.height>0||w&&N&&g(N)?(r===null&&(r=new cc(s)),v=b?r.fromEquirectangular(h):r.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",_),v.texture):null}}}return h}function f(h,S){return S===td?h.mapping=xa:S===nd&&(h.mapping=fo),h}function g(h){let S=0;const b=6;for(let w=0;w<b;w++)h[w]!==void 0&&S++;return S===b}function m(h){const S=h.target;S.removeEventListener("dispose",m);const b=e.get(S);b!==void 0&&(e.delete(S),b.dispose())}function _(h){const S=h.target;S.removeEventListener("dispose",_);const b=t.get(S);b!==void 0&&(t.delete(S),b.dispose())}function E(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:E}}function db(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Ql("WebGLRenderer: "+r+" extension not supported."),o}}}function fb(s,e,t,r){const o={},l=new WeakMap,u=new FinalizationRegistry(b=>delete o[b]);function f(b){g(b.target)}function g(b){b.index!==null&&e.remove(b.index);for(const v in b.attributes)e.remove(b.attributes[v]);b.removeEventListener("dispose",f),delete o[b.id],u.unregister(b);const w=l.get(b);w&&(e.remove(w),l.delete(b)),r.releaseStatesOfGeometry(b),b.isInstancedBufferGeometry===!0&&delete b._maxInstanceCount,t.memory.geometries--}function m(b,w){return o[w.id]!==void 0||(w.addEventListener("dispose",f),o[w.id]=new WeakRef(w),u.register(w,w.id,w),t.memory.geometries++),w}function _(b){const w=b.attributes;for(const v in w)e.update(w[v],s.ARRAY_BUFFER)}function E(b){const w=b.index,v=b.attributes.position;let y=0;if(v===void 0)return;const N=w!==null?w.array.length:v.array.length/3-1,U=v.count>=65535?Om:Fm,P=new U(Math.ceil(N/3)*6,1),z=P.array;if(w!==null){const M=w.array;y=w.version;for(let D=0,J=0;D<N;D+=3){const W=M[D+0],V=M[D+1],B=M[D+2];z[J++]=W,z[J++]=V,z[J++]=V,z[J++]=B,z[J++]=B,z[J++]=W}}else{y=v.version;for(let M=0,D=0;M<N;M+=3){const J=M+0,W=M+1,V=M+2;z[D++]=J,z[D++]=W,z[D++]=W,z[D++]=V,z[D++]=V,z[D++]=J}}P.version=y;const I=l.get(b);I&&e.remove(I),l.set(b,P)}function h(b){const w=l.get(b);if(w){const v=b.index;v!==null&&w.version<v.version&&E(b)}else E(b);return l.get(b)}function S(){for(const b in o){const w=o[b].deref();w!==void 0&&g(w)}}return{get:m,update:_,getWireframeAttribute:h,dispose:S}}function hb(s,e,t){let r;function o(E){r=E}let l,u;function f(E){l=E.type,u=E.bytesPerElement}function g(E,h){s.drawElements(r,h,l,E*u),t.update(h,r,1)}function m(E,h,S){S!==0&&(s.drawElementsInstanced(r,h,l,E*u,S),t.update(h,r,S))}function _(E,h,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,h,0,l,E,0,S);let w=0;for(let v=0;v<S;v++)w+=h[v];t.update(w,r,1)}this.setMode=o,this.setIndex=f,this.render=g,this.renderInstances=m,this.renderMultiDraw=_}function pb(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Yt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function mb(s,e,t){const r=new WeakMap,o=new gn;function l(u,f,g){const m=u.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,E=_!==void 0?_.length:0;let h=r.get(f);if(h===void 0||h.count!==E){let W=function(){D.dispose(),r.delete(f),f.removeEventListener("dispose",W)};var S=W;h!==void 0&&h.texture.dispose();const b=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,v=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],N=f.morphAttributes.normal||[],U=f.morphAttributes.color||[];let P=0;b===!0&&(P=1),w===!0&&(P=2),v===!0&&(P=3);let z=f.attributes.position.count*P,I=1;z>e.maxTextureSize&&(I=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const M=new Float32Array(z*I*4*E),D=new km(M,z,I,E);D.type=nr,D.needsUpdate=!0;const J=P*4;for(let V=0;V<E;V++){const B=y[V],X=N[V],F=U[V],te=z*I*4*V;for(let de=0;de<B.count;de++){const $=de*J;b===!0&&(o.fromBufferAttribute(B,de),M[te+$+0]=o.x,M[te+$+1]=o.y,M[te+$+2]=o.z,M[te+$+3]=0),w===!0&&(o.fromBufferAttribute(X,de),M[te+$+4]=o.x,M[te+$+5]=o.y,M[te+$+6]=o.z,M[te+$+7]=0),v===!0&&(o.fromBufferAttribute(F,de),M[te+$+8]=o.x,M[te+$+9]=o.y,M[te+$+10]=o.z,M[te+$+11]=F.itemSize===4?o.w:1)}}h={count:E,texture:D,size:new Ft(z,I)},r.set(f,h),f.addEventListener("dispose",W)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)g.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let b=0;for(let v=0;v<m.length;v++)b+=m[v];const w=f.morphTargetsRelative?1:1-b;g.getUniforms().setValue(s,"morphTargetBaseInfluence",w),g.getUniforms().setValue(s,"morphTargetInfluences",m)}g.getUniforms().setValue(s,"morphTargetsTexture",h.texture,t),g.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:l}}function gb(s,e,t,r,o){let l=new WeakMap;function u(m){const _=o.render.frame,E=m.geometry,h=e.get(m,E);if(l.get(h)!==_&&(e.update(h),l.set(h,_)),m.isInstancedMesh&&(m.hasEventListener("dispose",g)===!1&&m.addEventListener("dispose",g),l.get(m)!==_&&(t.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,_))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==_&&(S.update(),l.set(S,_))}return h}function f(){l=new WeakMap}function g(m){const _=m.target;_.removeEventListener("dispose",g),r.releaseStatesOfObject(_),t.remove(_.instanceMatrix),_.instanceColor!==null&&t.remove(_.instanceColor)}return{update:u,dispose:f}}const xb={[gm]:"LINEAR_TONE_MAPPING",[xm]:"REINHARD_TONE_MAPPING",[vm]:"CINEON_TONE_MAPPING",[_m]:"ACES_FILMIC_TONE_MAPPING",[Sm]:"AGX_TONE_MAPPING",[bm]:"NEUTRAL_TONE_MAPPING",[ym]:"CUSTOM_TONE_MAPPING"};function vb(s,e,t,r,o,l){const u=new rr(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,g=null,m=null;const _=new or;_.setAttribute("position",new kn([-1,3,0,-1,-1,0,3,-1,0],3)),_.setAttribute("uv",new kn([0,2,0,0,2,0],2));const E=new oy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Tn(_,E),S=new $m(-1,1,1,-1,0,1);let b=null,w=null,v=!1,y,N=null,U=[],P=!1;this.setSize=function(z,I){u.setSize(z,I),f!==null&&f.setSize(z,I),g!==null&&g.setSize(z,I);for(let M=0;M<U.length;M++){const D=U[M];D.setSize&&D.setSize(z,I)}},this.setEffects=function(z){U=z,P=U.length>0&&U[0].isRenderPass===!0;const I=u.width,M=u.height;U.length>0&&f===null&&(f=new rr(I,M,{type:ar,depthBuffer:!1,stencilBuffer:!1}),g=new rr(I,M,{type:ar,depthBuffer:!1,stencilBuffer:!1}));const D=o===!0&&U.some(J=>J.needsDepthTexture===!0);D!==(u.depthTexture!==null)&&(D===!0&&m===null&&(m=new ya(I,M),l===!0&&(m.format=ns,m.type=_a)),u.dispose(),u.depthTexture=D?m:null,u.resolveDepthBuffer=D,u.storeMultisampledDepthBuffer=D);for(let J=0;J<U.length;J++){const W=U[J];W.setSize&&W.setSize(I,M),D&&W.needsDepthTexture===!0&&W.setDepthTexture&&W.setDepthTexture(m)}},this.begin=function(z,I){if(v||z.toneMapping===Rr&&U.length===0)return!1;if(N=I,I!==null){const M=I.width,D=I.height;(u.width!==M||u.height!==D)&&this.setSize(M,D)}return P===!1&&z.setRenderTarget(u),y=z.toneMapping,z.toneMapping=Rr,!0},this.hasRenderPass=function(){return P},this.end=function(z,I){z.toneMapping=y,v=!0;let M=u,D=f;for(let J=0;J<U.length;J++){const W=U[J];W.enabled!==!1&&(W.render(z,D,M,I),W.needsSwap!==!1&&(M=D,D=D===f?g:f))}if(b!==z.outputColorSpace||w!==z.toneMapping){b=z.outputColorSpace,w=z.toneMapping,E.defines={},Ot.getTransfer(b)===Zt&&(E.defines.SRGB_TRANSFER="");const J=xb[w];J&&(E.defines[J]=""),E.needsUpdate=!0}E.uniforms.tDiffuse.value=M.texture,z.setRenderTarget(N),z.render(h,S),N=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){u.dispose(),f!==null&&f.dispose(),g!==null&&g.dispose(),_.dispose(),E.dispose()}}const Zm=new qn,Jm=new ya(1,1),Qm=new Hm(1),eg=new km,tg=new F_,ng=new Bm,V0=[],j0=[],W0=new Float32Array(16),$0=new Float32Array(9),X0=new Float32Array(4);function wa(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=V0[o];if(l===void 0&&(l=new Float32Array(o),V0[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function Rn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Nn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function gc(s,e){let t=j0[e];t===void 0&&(t=new Int32Array(e),j0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function _b(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function yb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;s.uniform2fv(this.addr,e),Nn(t,e)}}function Sb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rn(t,e))return;s.uniform3fv(this.addr,e),Nn(t,e)}}function bb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;s.uniform4fv(this.addr,e),Nn(t,e)}}function wb(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Rn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Nn(t,e)}else{if(Rn(t,r))return;X0.set(r),s.uniformMatrix2fv(this.addr,!1,X0),Nn(t,r)}}function Mb(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Rn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Nn(t,e)}else{if(Rn(t,r))return;$0.set(r),s.uniformMatrix3fv(this.addr,!1,$0),Nn(t,r)}}function Eb(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Rn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Nn(t,e)}else{if(Rn(t,r))return;W0.set(r),s.uniformMatrix4fv(this.addr,!1,W0),Nn(t,r)}}function Tb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Cb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;s.uniform2iv(this.addr,e),Nn(t,e)}}function Ab(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rn(t,e))return;s.uniform3iv(this.addr,e),Nn(t,e)}}function Rb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;s.uniform4iv(this.addr,e),Nn(t,e)}}function Nb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Pb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;s.uniform2uiv(this.addr,e),Nn(t,e)}}function Db(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rn(t,e))return;s.uniform3uiv(this.addr,e),Nn(t,e)}}function Lb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;s.uniform4uiv(this.addr,e),Nn(t,e)}}function xc(s){return s.version===0&&(s.compareFunction=Lm,s.needsUpdate=!0),s}function Ib(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?l=xc(Jm):l=Zm,t.setTexture2D(e||l,o)}function kb(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||tg,o)}function Ub(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_CUBE_SHADOW?l=xc(Qm):l=ng,t.setTextureCube(e||l,o)}function zb(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||eg,o)}function Fb(s){switch(s){case 5126:return _b;case 35664:return yb;case 35665:return Sb;case 35666:return bb;case 35674:return wb;case 35675:return Mb;case 35676:return Eb;case 5124:case 35670:return Tb;case 35667:case 35671:return Cb;case 35668:case 35672:return Ab;case 35669:case 35673:return Rb;case 5125:return Nb;case 36294:return Pb;case 36295:return Db;case 36296:return Lb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ib;case 35679:case 36299:case 36307:return kb;case 35680:case 36300:case 36308:case 36293:return Ub;case 36289:case 36303:case 36311:case 36292:return zb}}function Ob(s,e){s.uniform1fv(this.addr,e)}function Bb(s,e){const t=wa(e,this.size,2);s.uniform2fv(this.addr,t)}function Hb(s,e){const t=wa(e,this.size,3);s.uniform3fv(this.addr,t)}function Gb(s,e){const t=wa(e,this.size,4);s.uniform4fv(this.addr,t)}function Vb(s,e){const t=wa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function jb(s,e){const t=wa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Wb(s,e){const t=wa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function $b(s,e){s.uniform1iv(this.addr,e)}function Xb(s,e){s.uniform2iv(this.addr,e)}function Yb(s,e){s.uniform3iv(this.addr,e)}function qb(s,e){s.uniform4iv(this.addr,e)}function Kb(s,e){s.uniform1uiv(this.addr,e)}function Zb(s,e){s.uniform2uiv(this.addr,e)}function Jb(s,e){s.uniform3uiv(this.addr,e)}function Qb(s,e){s.uniform4uiv(this.addr,e)}function ew(s,e,t){const r=this.cache,o=e.length,l=gc(t,o);Rn(r,l)||(s.uniform1iv(this.addr,l),Nn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=xc(Jm):u=Zm;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function tw(s,e,t){const r=this.cache,o=e.length,l=gc(t,o);Rn(r,l)||(s.uniform1iv(this.addr,l),Nn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||tg,l[u])}function nw(s,e,t){const r=this.cache,o=e.length,l=gc(t,o);Rn(r,l)||(s.uniform1iv(this.addr,l),Nn(r,l));let u;this.type===s.SAMPLER_CUBE_SHADOW?u=xc(Qm):u=ng;for(let f=0;f!==o;++f)t.setTextureCube(e[f]||u,l[f])}function iw(s,e,t){const r=this.cache,o=e.length,l=gc(t,o);Rn(r,l)||(s.uniform1iv(this.addr,l),Nn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||eg,l[u])}function rw(s){switch(s){case 5126:return Ob;case 35664:return Bb;case 35665:return Hb;case 35666:return Gb;case 35674:return Vb;case 35675:return jb;case 35676:return Wb;case 5124:case 35670:return $b;case 35667:case 35671:return Xb;case 35668:case 35672:return Yb;case 35669:case 35673:return qb;case 5125:return Kb;case 36294:return Zb;case 36295:return Jb;case 36296:return Qb;case 35678:case 36198:case 36298:case 36306:case 35682:return ew;case 35679:case 36299:case 36307:return tw;case 35680:case 36300:case 36308:case 36293:return nw;case 36289:case 36303:case 36311:case 36292:return iw}}class sw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Fb(t.type)}}class aw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rw(t.type)}}class ow{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Ad=/(\w+)(\])?(\[|\.)?/g;function Y0(s,e){s.seq.push(e),s.map[e.id]=e}function lw(s,e,t){const r=s.name,o=r.length;for(Ad.lastIndex=0;;){const l=Ad.exec(r),u=Ad.lastIndex;let f=l[1];const g=l[2]==="]",m=l[3];if(g&&(f=f|0),m===void 0||m==="["&&u+2===o){Y0(t,m===void 0?new sw(f,s,e):new aw(f,s,e));break}else{let E=t.map[f];E===void 0&&(E=new ow(f),Y0(t,E)),t=E}}}class tc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),g=e.getUniformLocation(t,f.name);lw(f,g,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],g=r[f.id];g.needsUpdate!==!1&&f.setValue(e,g.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function q0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const cw=37297;let uw=0;function dw(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const K0=new Et;function fw(s){Ot._getMatrix(K0,Ot.workingColorSpace,s);const e=`mat3( ${K0.elements.map(t=>t.toFixed(4))} )`;switch(Ot.getTransfer(s)){case oc:return[e,"LinearTransferOETF"];case Zt:return[e,"sRGBTransferOETF"];default:return wt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Z0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+dw(s.getShaderSource(e),f)}else return l}function hw(s,e){const t=fw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const pw={[gm]:"Linear",[xm]:"Reinhard",[vm]:"Cineon",[_m]:"ACESFilmic",[Sm]:"AgX",[bm]:"Neutral",[ym]:"Custom"};function mw(s,e){const t=pw[e];return t===void 0?(wt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xl=new ve;function gw(){Ot.getLuminanceCoefficients(Xl);const s=Xl.x.toFixed(4),e=Xl.y.toFixed(4),t=Xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function vw(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function _w(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function ao(s){return s!==""}function J0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Q0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yw=/^[ \t]*#include +<([\w\d./]+)>/gm;function _f(s){return s.replace(yw,Sw)}function Sw(s,e){const t=Nt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return _f(t)}const bw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function em(s){return s.replace(bw,ww)}function ww(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function tm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const Mw={[Yl]:"SHADOWMAP_TYPE_PCF",[ro]:"SHADOWMAP_TYPE_VSM"};function Ew(s){return Mw[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Tw={[fo]:"ENVMAP_MODE_REFRACTION"};function Cw(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Tw[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Aw={[mm]:"ENVMAP_BLENDING_MULTIPLY",[h_]:"ENVMAP_BLENDING_MIX",[p_]:"ENVMAP_BLENDING_ADD"};function Rw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Aw[s.combine]||"ENVMAP_BLENDING_NONE"}function Nw(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const g=Ew(t),m=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",_=Cw(t),E=Rw(t),h=xw(t),S=vw(l),b=o.createProgram();let w,v,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(w=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(ao).join(`
`),w.length>0&&(w+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(ao).join(`
`),v.length>0&&(v+=`
`)):(w=[tm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+g:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),v=[tm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",t.envMap?"#define "+E:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+g:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rr?"#define TONE_MAPPING":"",t.toneMapping!==Rr?Nt.tonemapping_pars_fragment:"",t.toneMapping!==Rr?mw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,hw("linearToOutputTexel",t.outputColorSpace),gw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ao).join(`
`)),u=_f(u),u=J0(u,t),u=Q0(u,t),f=_f(f),f=J0(f,t),f=Q0(f,t),u=em(u),f=em(f),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,w=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w,v=["#define varying in",t.glslVersion===m0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===m0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=y+w+u,U=y+v+f,P=q0(o,o.VERTEX_SHADER,N),z=q0(o,o.FRAGMENT_SHADER,U);o.attachShader(b,P),o.attachShader(b,z),t.index0AttributeName!==void 0?o.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function I(W){if(s.debug.checkShaderErrors){const V=o.getProgramInfoLog(b)||"",B=o.getShaderInfoLog(P)||"",X=o.getShaderInfoLog(z)||"",F=V.trim(),te=B.trim(),de=X.trim();let $=!0,ie=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,b,P,z);else{const O=Z0(o,P,"vertex"),ee=Z0(o,z,"fragment");Yt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+F+`
`+O+`
`+ee)}else F!==""?wt("WebGLProgram: Program Info Log:",F):(te===""||de==="")&&(ie=!1);ie&&(W.diagnostics={runnable:$,programLog:F,vertexShader:{log:te,prefix:w},fragmentShader:{log:de,prefix:v}})}o.deleteShader(P),o.deleteShader(z),M=new tc(o,b),D=_w(o,b)}let M;this.getUniforms=function(){return M===void 0&&I(this),M};let D;this.getAttributes=function(){return D===void 0&&I(this),D};let J=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return J===!1&&(J=o.getProgramParameter(b,cw)),J},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uw++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=P,this.fragmentShader=z,this}let Pw=0;class Dw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Lw(e),t.set(e,r)),r}}class Lw{constructor(e){this.id=Pw++,this.code=e,this.usedTimes=0}}function Iw(s){return s===Rs||s===rc||s===sc}function kw(s,e,t,r,o,l){const u=new Um,f=new Dw,g=new Set,m=[],_=new Map,E=r.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(M){return g.add(M),M===0?"uv":`uv${M}`}function b(M,D,J,W,V,B){const X=W.fog,F=V.geometry,te=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?W.environment:null,de=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,$=e.get(M.envMap||te,de),ie=h[M.type];let O=r.precision;M.precision!==null&&(O=r.getMaxPrecision(M.precision),O!==M.precision&&wt("WebGLProgram.getParameters:",M.precision,"not supported, using",O,"instead."));const ee=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,k=ee!==void 0?ee.length:0;let q=0;F.morphAttributes.position!==void 0&&(q=1),F.morphAttributes.normal!==void 0&&(q=2),F.morphAttributes.color!==void 0&&(q=3);let pe,Y,oe,me;if(ie){const je=er[ie];pe=je.vertexShader,Y=je.fragmentShader}else{pe=M.vertexShader,Y=M.fragmentShader;const je=f.getVertexShaderStage(M),pt=f.getFragmentShaderStage(M);f.update(M,je,pt),oe=je.id,me=pt.id}const ge=s.getRenderTarget(),be=s.state.buffers.depth.getReversed(),Ie=V.isInstancedMesh===!0,it=V.isBatchedMesh===!0,$e=!!M.map,De=!!M.matcap,Ve=!!$,Xe=Ve&&$.isPMREMTexture===!0,nt=!!M.aoMap,_t=!!M.lightMap,ht=!!M.bumpMap&&M.wireframe===!1,lt=!!M.normalMap,At=!!M.displacementMap,le=!!M.emissiveMap,Mt=!!M.metalnessMap,jt=!!M.roughnessMap,an=M.anisotropy>0,Q=M.clearcoat>0,hn=M.diffuseRoughness>0,Tt=M.dispersion>0,kt=M.retroreflectivity>0,ke=M.iridescence>0,Rt=M.sheen>0,Ye=M.transmission>0,ut=an&&!!M.anisotropyMap,R=Q&&!!M.clearcoatMap,T=Q&&!!M.clearcoatNormalMap,se=Q&&!!M.clearcoatRoughnessMap,Pe=hn&&!!M.diffuseRoughnessMap,Me=ke&&!!M.iridescenceMap,Le=ke&&!!M.iridescenceThicknessMap,Be=Rt&&!!M.sheenColorMap,_e=Rt&&!!M.sheenRoughnessMap,we=!!M.specularMap,Oe=!!M.specularColorMap,j=!!M.specularIntensityMap,Te=Ye&&!!M.transmissionMap,ye=Ye&&!!M.thicknessMap,Ce=!!M.gradientMap,he=!!M.alphaMap,Ee=M.alphaTest>0,Ge=!!M.alphaHash,Qe=!!M.extensions;let Ae=Rr;M.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Ae=s.toneMapping);const Ke=Xe?$.isCompressedCubeTexture?$.image[0].mipmaps:$.mipmaps:null,rt={shaderID:ie,shaderType:M.type,shaderName:M.name,vertexShader:pe,fragmentShader:Y,defines:M.defines,customVertexShaderID:oe,customFragmentShaderID:me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:O,batching:it,batchingColor:it&&V._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&V.instanceColor!==null,instancingMorph:Ie&&V.morphTexture!==null,outputColorSpace:ge===null?s.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Ot.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:$e,matcap:De,envMap:Ve,envMapMode:Ve&&$.mapping,envMapPMREM:Xe,envMapMaxLod:Xe?Ke.length-1:null,envMapSize:Xe?Ke[0].width:null,aoMap:nt,lightMap:_t,bumpMap:ht,normalMap:lt,displacementMap:At,emissiveMap:le,normalMapObjectSpace:lt&&M.normalMapType===x_,normalMapTangentSpace:lt&&M.normalMapType===gf,packedNormalMap:lt&&M.normalMapType===gf&&Iw(M.normalMap.format),metalnessMap:Mt,roughnessMap:jt,anisotropy:an,anisotropyMap:ut,clearcoat:Q,clearcoatMap:R,clearcoatNormalMap:T,clearcoatRoughnessMap:se,diffuseRoughness:hn,diffuseRoughnessMap:Pe,dispersion:Tt,retroreflection:kt,iridescence:ke,iridescenceMap:Me,iridescenceThicknessMap:Le,sheen:Rt,sheenColorMap:Be,sheenRoughnessMap:_e,specularMap:we,specularColorMap:Oe,specularIntensityMap:j,transmission:Ye,transmissionMap:Te,thicknessMap:ye,gradientMap:Ce,opaque:M.transparent===!1&&M.blending===oo&&M.alphaToCoverage===!1,alphaMap:he,alphaTest:Ee,alphaHash:Ge,combine:M.combine,mapUv:$e&&S(M.map.channel),aoMapUv:nt&&S(M.aoMap.channel),lightMapUv:_t&&S(M.lightMap.channel),bumpMapUv:ht&&S(M.bumpMap.channel),normalMapUv:lt&&S(M.normalMap.channel),displacementMapUv:At&&S(M.displacementMap.channel),emissiveMapUv:le&&S(M.emissiveMap.channel),metalnessMapUv:Mt&&S(M.metalnessMap.channel),roughnessMapUv:jt&&S(M.roughnessMap.channel),anisotropyMapUv:ut&&S(M.anisotropyMap.channel),clearcoatMapUv:R&&S(M.clearcoatMap.channel),clearcoatNormalMapUv:T&&S(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&S(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Pe&&S(M.diffuseRoughnessMap.channel),iridescenceMapUv:Me&&S(M.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&S(M.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&S(M.sheenColorMap.channel),sheenRoughnessMapUv:_e&&S(M.sheenRoughnessMap.channel),specularMapUv:we&&S(M.specularMap.channel),specularColorMapUv:Oe&&S(M.specularColorMap.channel),specularIntensityMapUv:j&&S(M.specularIntensityMap.channel),transmissionMapUv:Te&&S(M.transmissionMap.channel),thicknessMapUv:ye&&S(M.thicknessMap.channel),alphaMapUv:he&&S(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(lt||an),vertexNormals:!!F.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!F.attributes.uv&&($e||he),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||F.attributes.normal===void 0&&lt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:E,reversedDepthBuffer:be,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:q,numSunLights:D.sun.length,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numSunLightShadows:D.sunShadowMap.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:B.filter(je=>je.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&J.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ae,decodeVideoTexture:$e&&M.map.isVideoTexture===!0&&Ot.getTransfer(M.map.colorSpace)===Zt,decodeVideoTextureEmissive:le&&M.emissiveMap.isVideoTexture===!0&&Ot.getTransfer(M.emissiveMap.colorSpace)===Zt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Hi,flipSided:M.side===On,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Qe&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&M.extensions.multiDraw===!0||it)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return rt.vertexUv1s=g.has(1),rt.vertexUv2s=g.has(2),rt.vertexUv3s=g.has(3),g.clear(),rt}function w(M){const D=[];if(M.shaderID?D.push(M.shaderID):(D.push(M.customVertexShaderID),D.push(M.customFragmentShaderID)),M.defines!==void 0)for(const J in M.defines)D.push(J),D.push(M.defines[J]);return M.isRawShaderMaterial===!1&&(v(D,M),y(D,M),D.push(s.outputColorSpace)),D.push(M.customProgramCacheKey),D.join()}function v(M,D){M.push(D.precision),M.push(D.outputColorSpace),M.push(D.envMapMode),M.push(D.envMapPMREM),M.push(D.envMapMaxLod),M.push(D.envMapSize),M.push(D.mapUv),M.push(D.alphaMapUv),M.push(D.lightMapUv),M.push(D.aoMapUv),M.push(D.bumpMapUv),M.push(D.normalMapUv),M.push(D.displacementMapUv),M.push(D.emissiveMapUv),M.push(D.metalnessMapUv),M.push(D.roughnessMapUv),M.push(D.anisotropyMapUv),M.push(D.clearcoatMapUv),M.push(D.clearcoatNormalMapUv),M.push(D.clearcoatRoughnessMapUv),M.push(D.diffuseRoughnessMapUv),M.push(D.iridescenceMapUv),M.push(D.iridescenceThicknessMapUv),M.push(D.sheenColorMapUv),M.push(D.sheenRoughnessMapUv),M.push(D.specularMapUv),M.push(D.specularColorMapUv),M.push(D.specularIntensityMapUv),M.push(D.transmissionMapUv),M.push(D.thicknessMapUv),M.push(D.combine),M.push(D.fogExp2),M.push(D.sizeAttenuation),M.push(D.morphTargetsCount),M.push(D.numSunLights),M.push(D.numDirLights),M.push(D.numPointLights),M.push(D.numSpotLights),M.push(D.numSpotLightMaps),M.push(D.numHemiLights),M.push(D.numRectAreaLights),M.push(D.numSunLightShadows),M.push(D.numDirLightShadows),M.push(D.numPointLightShadows),M.push(D.numSpotLightShadows),M.push(D.numSpotLightShadowsWithMaps),M.push(D.numLightProbes),M.push(D.numLightProbeGrids),M.push(D.shadowMapType),M.push(D.toneMapping),M.push(D.numClippingPlanes),M.push(D.numClipIntersection),M.push(D.depthPacking)}function y(M,D){u.disableAll(),D.instancing&&u.enable(0),D.instancingColor&&u.enable(1),D.instancingMorph&&u.enable(2),D.matcap&&u.enable(3),D.envMap&&u.enable(4),D.normalMapObjectSpace&&u.enable(5),D.normalMapTangentSpace&&u.enable(6),D.clearcoat&&u.enable(7),D.iridescence&&u.enable(8),D.alphaTest&&u.enable(9),D.vertexColors&&u.enable(10),D.vertexAlphas&&u.enable(11),D.vertexUv1s&&u.enable(12),D.vertexUv2s&&u.enable(13),D.vertexUv3s&&u.enable(14),D.vertexTangents&&u.enable(15),D.anisotropy&&u.enable(16),D.alphaHash&&u.enable(17),D.batching&&u.enable(18),D.dispersion&&u.enable(19),D.retroreflection&&u.enable(24),D.diffuseRoughness&&u.enable(25),D.batchingColor&&u.enable(20),D.gradientMap&&u.enable(21),D.packedNormalMap&&u.enable(22),D.vertexNormals&&u.enable(23),M.push(u.mask),u.disableAll(),D.fog&&u.enable(0),D.useFog&&u.enable(1),D.flatShading&&u.enable(2),D.logarithmicDepthBuffer&&u.enable(3),D.reversedDepthBuffer&&u.enable(4),D.skinning&&u.enable(5),D.morphTargets&&u.enable(6),D.morphNormals&&u.enable(7),D.morphColors&&u.enable(8),D.premultipliedAlpha&&u.enable(9),D.shadowMapEnabled&&u.enable(10),D.doubleSided&&u.enable(11),D.flipSided&&u.enable(12),D.useDepthPacking&&u.enable(13),D.dithering&&u.enable(14),D.transmission&&u.enable(15),D.sheen&&u.enable(16),D.opaque&&u.enable(17),D.pointsUvs&&u.enable(18),D.decodeVideoTexture&&u.enable(19),D.decodeVideoTextureEmissive&&u.enable(20),D.alphaToCoverage&&u.enable(21),D.numLightProbeGrids>0&&u.enable(22),D.hasPositionAttribute&&u.enable(23),M.push(u.mask)}function N(M){const D=h[M.type];let J;if(D){const W=er[D];J=ry.clone(W.uniforms)}else J=M.uniforms;return J}function U(M,D){let J=_.get(D);return J!==void 0?++J.usedTimes:(J=new Nw(s,D,M,o),m.push(J),_.set(D,J)),J}function P(M){if(--M.usedTimes===0){const D=m.indexOf(M);m[D]=m[m.length-1],m.pop(),_.delete(M.cacheKey),M.destroy()}}function z(M){f.remove(M)}function I(){f.dispose()}return{getParameters:b,getProgramCacheKey:w,getUniforms:N,acquireProgram:U,releaseProgram:P,releaseShaderCache:z,programs:m,dispose:I}}function Uw(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,g){s.get(u)[f]=g}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function zw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function nm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function im(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(h){let S=0;return h.isInstancedMesh&&(S+=2),h.isSkinnedMesh&&(S+=1),S}function f(h,S,b,w,v,y){let N=s[e];return N===void 0?(N={id:h.id,object:h,geometry:S,material:b,materialVariant:u(h),groupOrder:w,renderOrder:h.renderOrder,z:v,group:y},s[e]=N):(N.id=h.id,N.object=h,N.geometry=S,N.material=b,N.materialVariant=u(h),N.groupOrder=w,N.renderOrder=h.renderOrder,N.z=v,N.group=y),e++,N}function g(h,S,b,w,v,y,N){N.reversedDepth===!0&&(v=-v);const U=f(h,S,b,w,v,y);b.transmission>0?r.push(U):b.transparent===!0?o.push(U):t.push(U)}function m(h,S,b,w,v,y){const N=f(h,S,b,w,v,y);b.transmission>0?r.unshift(N):b.transparent===!0?o.unshift(N):t.unshift(N)}function _(h,S){t.length>1&&t.sort(h||zw),r.length>1&&r.sort(S||nm),o.length>1&&o.sort(S||nm)}function E(){for(let h=e,S=s.length;h<S;h++){const b=s[h];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:g,unshift:m,finish:E,sort:_}}function Fw(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new im,s.set(r,[u])):o>=l.length?(u=new im,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ow(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ve,color:new Lt};break;case"SpotLight":t={position:new ve,direction:new ve,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ve,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ve,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":t={color:new Lt,position:new ve,halfWidth:new ve,halfHeight:new ve};break}return s[e.id]=t,t}}}function Bw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Hw=0;function Gw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Vw(s){const e=new Ow,t=Bw(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ve);const o=new ve,l=new xn,u=new xn;function f(m){let _=0,E=0,h=0;for(let B=0;B<9;B++)r.probe[B].set(0,0,0);let S=0,b=0,w=0,v=0,y=0,N=0,U=0,P=0,z=0,I=0,M=0,D=0,J=0,W=0;m.sort(Gw);for(let B=0,X=m.length;B<X;B++){const F=m[B],te=F.color,de=F.intensity,$=F.distance;let ie=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Rs?ie=F.shadow.map.texture:ie=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)_+=te.r*de,E+=te.g*de,h+=te.b*de;else if(F.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(F.sh.coefficients[O],de);W++}else if(F.isSunLight){const O=e.get(F);if(O.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const ee=F.shadow,k=t.get(F);k.shadowIntensity=ee.intensity,k.shadowBias=ee.bias,k.shadowNormalBias=ee.normalBias,k.shadowRadius=ee.radius,k.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),r.sunShadow[b]=k,r.sunShadowMap[b]=ie;const q=ee.getViewportCount();for(let pe=0;pe<q;pe++)r.sunShadowMatrix[w+pe]=ee.getMatrix(pe),r.sunShadowCascade[w+pe]=ee._cascadeData[pe];w+=q,b++}r.sun[S]=O,S++}else if(F.isDirectionalLight){const O=e.get(F);if(O.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const ee=F.shadow,k=t.get(F);k.shadowIntensity=ee.intensity,k.shadowBias=ee.bias,k.shadowNormalBias=ee.normalBias,k.shadowRadius=ee.radius,k.shadowMapSize=ee.mapSize,r.directionalShadow[v]=k,r.directionalShadowMap[v]=ie,r.directionalShadowMatrix[v]=F.shadow.matrix,z++}r.directional[v]=O,v++}else if(F.isSpotLight){const O=e.get(F);O.position.setFromMatrixPosition(F.matrixWorld),O.color.copy(te).multiplyScalar(de),O.distance=$,O.coneCos=Math.cos(F.angle),O.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),O.decay=F.decay,r.spot[N]=O;const ee=F.shadow;if(F.map&&(r.spotLightMap[D]=F.map,D++,ee.updateMatrices(F),F.castShadow&&J++),r.spotLightMatrix[N]=ee.matrix,F.castShadow){const k=t.get(F);k.shadowIntensity=ee.intensity,k.shadowBias=ee.bias,k.shadowNormalBias=ee.normalBias,k.shadowRadius=ee.radius,k.shadowMapSize=ee.mapSize,r.spotShadow[N]=k,r.spotShadowMap[N]=ie,M++}N++}else if(F.isRectAreaLight){const O=e.get(F);O.color.copy(te).multiplyScalar(de),O.halfWidth.set(F.width*.5,0,0),O.halfHeight.set(0,F.height*.5,0),r.rectArea[U]=O,U++}else if(F.isPointLight){const O=e.get(F);if(O.color.copy(F.color).multiplyScalar(F.intensity),O.distance=F.distance,O.decay=F.decay,F.castShadow){const ee=F.shadow,k=t.get(F);k.shadowIntensity=ee.intensity,k.shadowBias=ee.bias,k.shadowNormalBias=ee.normalBias,k.shadowRadius=ee.radius,k.shadowMapSize=ee.mapSize,k.shadowCameraNear=ee.camera.near,k.shadowCameraFar=ee.camera.far,r.pointShadow[y]=k,r.pointShadowMap[y]=ie,r.pointShadowMatrix[y]=F.shadow.matrix,I++}r.point[y]=O,y++}else if(F.isHemisphereLight){const O=e.get(F);O.skyColor.copy(F.color).multiplyScalar(de),O.groundColor.copy(F.groundColor).multiplyScalar(de),r.hemi[P]=O,P++}}U>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Je.LTC_FLOAT_1,r.rectAreaLTC2=Je.LTC_FLOAT_2):(r.rectAreaLTC1=Je.LTC_HALF_1,r.rectAreaLTC2=Je.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=E,r.ambient[2]=h;const V=r.hash;(V.sunLength!==S||V.directionalLength!==v||V.pointLength!==y||V.spotLength!==N||V.rectAreaLength!==U||V.hemiLength!==P||V.numSunShadows!==b||V.numDirectionalShadows!==z||V.numPointShadows!==I||V.numSpotShadows!==M||V.numSpotMaps!==D||V.numLightProbes!==W)&&(r.sun.length=S,r.directional.length=v,r.spot.length=N,r.rectArea.length=U,r.point.length=y,r.hemi.length=P,r.sunShadow.length=b,r.sunShadowMap.length=b,r.sunShadowMatrix.length=w,r.sunShadowCascade.length=w,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.directionalShadowMatrix.length=z,r.pointShadow.length=I,r.pointShadowMap.length=I,r.pointShadowMatrix.length=I,r.spotShadow.length=M,r.spotShadowMap.length=M,r.spotLightMatrix.length=M+D-J,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=J,r.numLightProbes=W,V.sunLength=S,V.directionalLength=v,V.pointLength=y,V.spotLength=N,V.rectAreaLength=U,V.hemiLength=P,V.numSunShadows=b,V.numDirectionalShadows=z,V.numPointShadows=I,V.numSpotShadows=M,V.numSpotMaps=D,V.numLightProbes=W,r.version=Hw++)}function g(m,_){let E=0,h=0,S=0,b=0,w=0,v=0;const y=_.matrixWorldInverse;for(let N=0,U=m.length;N<U;N++){const P=m[N];if(P.isSunLight){const z=r.sun[E];z.direction.setFromMatrixPosition(P.matrixWorld),z.direction.transformDirection(y),E++}else if(P.isDirectionalLight){const z=r.directional[h];z.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),z.direction.sub(o),z.direction.transformDirection(y),h++}else if(P.isSpotLight){const z=r.spot[b];z.position.setFromMatrixPosition(P.matrixWorld),z.position.applyMatrix4(y),z.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),z.direction.sub(o),z.direction.transformDirection(y),b++}else if(P.isRectAreaLight){const z=r.rectArea[w];z.position.setFromMatrixPosition(P.matrixWorld),z.position.applyMatrix4(y),u.identity(),l.copy(P.matrixWorld),l.premultiply(y),u.extractRotation(l),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),z.halfWidth.applyMatrix4(u),z.halfHeight.applyMatrix4(u),w++}else if(P.isPointLight){const z=r.point[S];z.position.setFromMatrixPosition(P.matrixWorld),z.position.applyMatrix4(y),S++}else if(P.isHemisphereLight){const z=r.hemi[v];z.direction.setFromMatrixPosition(P.matrixWorld),z.direction.transformDirection(y),v++}}}return{setup:f,setupView:g,state:r}}function rm(s){const e=new Vw(s),t=[],r=[],o=[];function l(E){_.camera=E,t.length=0,r.length=0,o.length=0}function u(E){E.isLightProbeGrid?o.push(E):t.push(E)}function f(E){r.push(E)}function g(){e.setup(t),o.sort((E,h)=>E.priority-h.priority||E.id-h.id)}function m(E){e.setupView(t,E)}const _={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:_,setupLights:g,setupLightsView:m,pushLight:u,pushShadow:f}}function jw(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new rm(s),e.set(o,[f])):l>=u.length?(f=new rm(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const Ww=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$w=`uniform sampler2D shadow_pass;
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
}`,Xw=[new ve(1,0,0),new ve(-1,0,0),new ve(0,1,0),new ve(0,-1,0),new ve(0,0,1),new ve(0,0,-1)],Yw=[new ve(0,-1,0),new ve(0,-1,0),new ve(0,0,1),new ve(0,0,-1),new ve(0,-1,0),new ve(0,-1,0)],sm=new xn,io=new ve,Rd=new ve;function qw(s,e,t){let r=new mo;const o=new Ft,l=new Ft,u=new gn,f=new ly,g=new cy,m={},_=t.maxTextureSize,E={[As]:On,[On]:As,[Hi]:Hi},h=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:Ww,fragmentShader:$w}),S=h.clone();S.defines.HORIZONTAL_PASS=1;const b=new or;b.setAttribute("position",new Ts(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Tn(b,h),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yl;let y=this.type;this.render=function(I,M,D){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||I.length===0)return;this.type===Yv&&(wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Yl);const J=s.getRenderTarget(),W=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),B=s.state;B.setBlending(ma),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const X=y!==this.type;X&&M.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(te=>te.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,te=I.length;F<te;F++){const de=I[F],$=de.shadow;if($===void 0){wt("WebGLShadowMap:",de,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;o.copy($.mapSize);const ie=$.getFrameExtents();o.multiply(ie),l.copy($.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/ie.x),o.x=l.x*ie.x,$.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/ie.y),o.y=l.y*ie.y,$.mapSize.y=l.y));const O=s.state.buffers.depth.getReversed();if($.camera._reversedDepth=O,$.map===null||X===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===ro){if(de.isPointLight){wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new rr(o.x,o.y,{format:Rs,type:ar,minFilter:ci,magFilter:ci,generateMipmaps:!1}),$.map.texture.name=de.name+".shadowMap",$.map.depthTexture=new ya(o.x,o.y,nr),$.map.depthTexture.name=de.name+".shadowMapDepth",$.map.depthTexture.format=is,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Fn,$.map.depthTexture.magFilter=Fn}else de.isPointLight?($.map=new Ff(o.x),$.map.depthTexture=new Hm(o.x,sr)):($.map=new rr(o.x,o.y),$.map.depthTexture=new ya(o.x,o.y,sr)),$.map.depthTexture.name=de.name+".shadowMap",$.map.depthTexture.format=is,this.type===Yl?($.map.depthTexture.compareFunction=O?Dm:Pm,$.map.depthTexture.minFilter=ci,$.map.depthTexture.magFilter=ci):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Fn,$.map.depthTexture.magFilter=Fn);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==o.x||$.map.height!==o.y)&&$.map.setSize(o.x,o.y);const ee=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();de.isPointLight!==!0&&$.updateMatrices(de,D);const k=($.camera.layers.mask&4294967294)!==0?$.camera.layers:D.layers;for(let q=0;q<ee;q++){const pe=$.getCamera(q);if(de.isPointLight){const Y=$.camera,oe=$.matrix,me=de.distance||Y.far;me!==Y.far&&(Y.far=me,Y.updateProjectionMatrix()),io.setFromMatrixPosition(de.matrixWorld),Y.position.copy(io),Rd.copy(Y.position),Rd.add(Xw[q]),Y.up.copy(Yw[q]),Y.lookAt(Rd),Y.updateMatrixWorld(),oe.makeTranslation(-io.x,-io.y,-io.z),sm.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),$._frustum.setFromProjectionMatrix(sm,Y.coordinateSystem,Y.reversedDepth)}if($.map.isWebGLCubeRenderTarget)s.setRenderTarget($.map,q),s.clear();else{q===0&&(s.setRenderTarget($.map),s.clear());const Y=$.getViewport(q);u.set(l.x*Y.x,l.y*Y.y,l.x*Y.z,l.y*Y.w),B.viewport(u)}r=$.getFrustum(q),P(M,D,pe,de,k,this.type)}$.isPointLightShadow!==!0&&this.type===ro&&N($,D),$.needsUpdate=!1}y=this.type,v.needsUpdate=!1,s.setRenderTarget(J,W,V)};function N(I,M){const D=e.update(w);h.defines.VSM_SAMPLES!==I.blurSamples&&(h.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,h.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null?I.mapPass=new rr(o.x,o.y,{format:Rs,type:ar}):(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)&&I.mapPass.setSize(I.map.width,I.map.height),h.uniforms.shadow_pass.value=I.map.depthTexture,h.uniforms.resolution.value.set(I.map.width,I.map.height),h.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(M,null,D,h,w,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value.set(I.map.width,I.map.height),S.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(M,null,D,S,w,null)}function U(I,M,D,J){let W=null;const V=D.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(V!==void 0)W=V;else if(W=D.isPointLight===!0?g:f,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const B=W.uuid,X=M.uuid;let F=m[B];F===void 0&&(F={},m[B]=F);let te=F[X];te===void 0&&(te=W.clone(),F[X]=te,M.addEventListener("dispose",z)),W=te}if(W.visible=M.visible,W.wireframe=M.wireframe,J===ro?W.side=M.shadowSide!==null?M.shadowSide:M.side:W.side=M.shadowSide!==null?M.shadowSide:E[M.side],W.alphaMap=M.alphaMap,W.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,W.map=M.map,W.clipShadows=M.clipShadows,W.clippingPlanes=M.clippingPlanes,W.clipIntersection=M.clipIntersection,W.displacementMap=M.displacementMap,W.displacementScale=M.displacementScale,W.displacementBias=M.displacementBias,W.wireframeLinewidth=M.wireframeLinewidth,W.linewidth=M.linewidth,D.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const B=s.properties.get(W);B.light=D}return W}function P(I,M,D,J,W,V){if(I.visible===!1)return;if(I.layers.test(W)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&V===ro)&&(!I.frustumCulled||I.intersectsFrustum(r))){I.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,I.matrixWorld);const F=e.update(I),te=I.material;if(Array.isArray(te)){const de=F.groups;for(let $=0,ie=de.length;$<ie;$++){const O=de[$],ee=te[O.materialIndex];if(ee&&ee.visible){const k=U(I,ee,J,V);I.onBeforeShadow(s,I,M,D,F,k,O),s.renderBufferDirect(D,null,F,k,I,O),I.onAfterShadow(s,I,M,D,F,k,O)}}}else if(te.visible){const de=U(I,te,J,V);I.onBeforeShadow(s,I,M,D,F,de,null),s.renderBufferDirect(D,null,F,de,I,null),I.onAfterShadow(s,I,M,D,F,de,null)}}const X=I.children;for(let F=0,te=X.length;F<te;F++)P(X[F],M,D,J,W,V)}function z(I){I.target.removeEventListener("dispose",z);for(const D in m){const J=m[D],W=I.target.uuid;W in J&&(J[W].dispose(),delete J[W])}}}function Kw(s,e){function t(){let j=!1;const Te=new gn;let ye=null;const Ce=new gn(0,0,0,0);return{setMask:function(he){ye!==he&&!j&&(s.colorMask(he,he,he,he),ye=he)},setLocked:function(he){j=he},setClear:function(he,Ee,Ge,Qe,Ae){Ae===!0&&(he*=Qe,Ee*=Qe,Ge*=Qe),Te.set(he,Ee,Ge,Qe),Ce.equals(Te)===!1&&(s.clearColor(he,Ee,Ge,Qe),Ce.copy(Te))},reset:function(){j=!1,ye=null,Ce.set(-1,0,0,0)}}}function r(){let j=!1,Te=!1,ye=null,Ce=null,he=null;return{setReversed:function(Ee){if(Te!==Ee){const Ge=e.get("EXT_clip_control");Ee?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Te=Ee;const Qe=he;he=null,this.setClear(Qe)}},getReversed:function(){return Te},setTest:function(Ee){Ee?be(s.DEPTH_TEST):Ie(s.DEPTH_TEST)},setMask:function(Ee){ye!==Ee&&!j&&(s.depthMask(Ee),ye=Ee)},setFunc:function(Ee){if(Te&&(Ee=A_[Ee]),Ce!==Ee){switch(Ee){case Pd:s.depthFunc(s.NEVER);break;case Dd:s.depthFunc(s.ALWAYS);break;case Ld:s.depthFunc(s.LESS);break;case uo:s.depthFunc(s.LEQUAL);break;case Id:s.depthFunc(s.EQUAL);break;case kd:s.depthFunc(s.GEQUAL);break;case Ud:s.depthFunc(s.GREATER);break;case zd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ce=Ee}},setLocked:function(Ee){j=Ee},setClear:function(Ee){he!==Ee&&(he=Ee,Te&&(Ee=1-Ee),s.clearDepth(Ee))},reset:function(){j=!1,ye=null,Ce=null,he=null,Te=!1}}}function o(){let j=!1,Te=null,ye=null,Ce=null,he=null,Ee=null,Ge=null,Qe=null,Ae=null;return{setTest:function(Ke){j||(Ke?be(s.STENCIL_TEST):Ie(s.STENCIL_TEST))},setMask:function(Ke){Te!==Ke&&!j&&(s.stencilMask(Ke),Te=Ke)},setFunc:function(Ke,rt,je){(ye!==Ke||Ce!==rt||he!==je)&&(s.stencilFunc(Ke,rt,je),ye=Ke,Ce=rt,he=je)},setOp:function(Ke,rt,je){(Ee!==Ke||Ge!==rt||Qe!==je)&&(s.stencilOp(Ke,rt,je),Ee=Ke,Ge=rt,Qe=je)},setLocked:function(Ke){j=Ke},setClear:function(Ke){Ae!==Ke&&(s.clearStencil(Ke),Ae=Ke)},reset:function(){j=!1,Te=null,ye=null,Ce=null,he=null,Ee=null,Ge=null,Qe=null,Ae=null}}}const l=new t,u=new r,f=new o;let g={};const m=new WeakMap;let _={},E={},h={},S=new WeakMap,b=[],w=null,v=!1,y=null,N=null,U=null,P=null,z=null,I=null,M=null,D=new Lt(0,0,0),J=0,W=!1,V=null,B=null,X=null,F=null,te=null;const de=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ie=0;const O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(O)[1]),$=ie>=1):O.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),$=ie>=2);let ee=null,k={};const q=s.getParameter(s.SCISSOR_BOX),pe=s.getParameter(s.VIEWPORT),Y=new gn().fromArray(q),oe=new gn().fromArray(pe);function me(j,Te,ye,Ce){const he=new Uint8Array(4),Ee=s.createTexture();s.bindTexture(j,Ee),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ge=0;Ge<ye;Ge++)j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?s.texImage3D(Te,0,s.RGBA,1,1,Ce,0,s.RGBA,s.UNSIGNED_BYTE,he):s.texImage2D(Te+Ge,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,he);return Ee}const ge={};ge[s.TEXTURE_2D]=me(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[s.TEXTURE_2D_ARRAY]=me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),be(s.DEPTH_TEST),u.setFunc(uo),ht(!1),lt(f0),be(s.CULL_FACE),nt(ma);function be(j){_[j]!==!0&&(s.enable(j),_[j]=!0)}function Ie(j){_[j]!==!1&&(s.disable(j),_[j]=!1)}function it(j,Te){return h[j]!==Te?(s.bindFramebuffer(j,Te),h[j]=Te,j===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=Te),j===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=Te),!0):!1}function $e(j,Te){let ye=b,Ce=!1;if(j){ye=S.get(Te),ye===void 0&&(ye=[],S.set(Te,ye));const he=j.textures;if(ye.length!==he.length||ye[0]!==s.COLOR_ATTACHMENT0){for(let Ee=0,Ge=he.length;Ee<Ge;Ee++)ye[Ee]=s.COLOR_ATTACHMENT0+Ee;ye.length=he.length,Ce=!0}}else ye[0]!==s.BACK&&(ye[0]=s.BACK,Ce=!0);Ce&&s.drawBuffers(ye)}function De(j){return w!==j?(s.useProgram(j),w=j,!0):!1}const Ve={[ha]:s.FUNC_ADD,[Kv]:s.FUNC_SUBTRACT,[Zv]:s.FUNC_REVERSE_SUBTRACT};Ve[Jv]=s.MIN,Ve[Qv]=s.MAX;const Xe={[e_]:s.ZERO,[t_]:s.ONE,[n_]:s.SRC_COLOR,[hm]:s.SRC_ALPHA,[l_]:s.SRC_ALPHA_SATURATE,[a_]:s.DST_COLOR,[r_]:s.DST_ALPHA,[i_]:s.ONE_MINUS_SRC_COLOR,[pm]:s.ONE_MINUS_SRC_ALPHA,[o_]:s.ONE_MINUS_DST_COLOR,[s_]:s.ONE_MINUS_DST_ALPHA,[c_]:s.CONSTANT_COLOR,[u_]:s.ONE_MINUS_CONSTANT_COLOR,[d_]:s.CONSTANT_ALPHA,[f_]:s.ONE_MINUS_CONSTANT_ALPHA};function nt(j,Te,ye,Ce,he,Ee,Ge,Qe,Ae,Ke){if(j===ma){v===!0&&(Ie(s.BLEND),v=!1);return}if(v===!1&&(be(s.BLEND),v=!0),j!==qv){if(j!==y||Ke!==W){if((N!==ha||z!==ha)&&(s.blendEquation(s.FUNC_ADD),N=ha,z=ha),Ke)switch(j){case oo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Es:s.blendFunc(s.ONE,s.ONE);break;case h0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case p0:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Yt("WebGLState: Invalid blending: ",j);break}else switch(j){case oo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case h0:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case p0:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",j);break}U=null,P=null,I=null,M=null,D.set(0,0,0),J=0,y=j,W=Ke}return}he=he||Te,Ee=Ee||ye,Ge=Ge||Ce,(Te!==N||he!==z)&&(s.blendEquationSeparate(Ve[Te],Ve[he]),N=Te,z=he),(ye!==U||Ce!==P||Ee!==I||Ge!==M)&&(s.blendFuncSeparate(Xe[ye],Xe[Ce],Xe[Ee],Xe[Ge]),U=ye,P=Ce,I=Ee,M=Ge),(Qe.equals(D)===!1||Ae!==J)&&(s.blendColor(Qe.r,Qe.g,Qe.b,Ae),D.copy(Qe),J=Ae),y=j,W=!1}function _t(j,Te){j.side===Hi?Ie(s.CULL_FACE):be(s.CULL_FACE);let ye=j.side===On;Te&&(ye=!ye),ht(ye),j.blending===oo&&j.transparent===!1?nt(ma):nt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),u.setFunc(j.depthFunc),u.setTest(j.depthTest),u.setMask(j.depthWrite),l.setMask(j.colorWrite);const Ce=j.stencilWrite;f.setTest(Ce),Ce&&(f.setMask(j.stencilWriteMask),f.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),f.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),le(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?be(s.SAMPLE_ALPHA_TO_COVERAGE):Ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht(j){V!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),V=j)}function lt(j){j!==$v?(be(s.CULL_FACE),j!==B&&(j===f0?s.cullFace(s.BACK):j===Xv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ie(s.CULL_FACE),B=j}function At(j){j!==X&&($&&s.lineWidth(j),X=j)}function le(j,Te,ye){j?(be(s.POLYGON_OFFSET_FILL),(F!==Te||te!==ye)&&(F=Te,te=ye,u.getReversed()&&(Te=-Te,ye=-ye),s.polygonOffset(Te,ye))):Ie(s.POLYGON_OFFSET_FILL)}function Mt(j){j?be(s.SCISSOR_TEST):Ie(s.SCISSOR_TEST)}function jt(j){j===void 0&&(j=s.TEXTURE0+de-1),ee!==j&&(s.activeTexture(j),ee=j)}function an(j,Te,ye){ye===void 0&&(ee===null?ye=s.TEXTURE0+de-1:ye=ee);let Ce=k[ye];Ce===void 0&&(Ce={type:void 0,texture:void 0},k[ye]=Ce),(Ce.type!==j||Ce.texture!==Te)&&(ee!==ye&&(s.activeTexture(ye),ee=ye),s.bindTexture(j,Te||ge[j]),Ce.type=j,Ce.texture=Te)}function Q(){const j=k[ee];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function hn(){try{s.compressedTexImage2D(...arguments)}catch(j){Yt("WebGLState:",j)}}function Tt(){try{s.compressedTexImage3D(...arguments)}catch(j){Yt("WebGLState:",j)}}function kt(){try{s.texSubImage2D(...arguments)}catch(j){Yt("WebGLState:",j)}}function ke(){try{s.texSubImage3D(...arguments)}catch(j){Yt("WebGLState:",j)}}function Rt(){try{s.compressedTexSubImage2D(...arguments)}catch(j){Yt("WebGLState:",j)}}function Ye(){try{s.compressedTexSubImage3D(...arguments)}catch(j){Yt("WebGLState:",j)}}function ut(){try{s.texStorage2D(...arguments)}catch(j){Yt("WebGLState:",j)}}function R(){try{s.texStorage3D(...arguments)}catch(j){Yt("WebGLState:",j)}}function T(){try{s.texImage2D(...arguments)}catch(j){Yt("WebGLState:",j)}}function se(){try{s.texImage3D(...arguments)}catch(j){Yt("WebGLState:",j)}}function Pe(j){return E[j]!==void 0?E[j]:s.getParameter(j)}function Me(j,Te){E[j]!==Te&&(s.pixelStorei(j,Te),E[j]=Te)}function Le(j){Y.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),Y.copy(j))}function Be(j){oe.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),oe.copy(j))}function _e(j,Te){let ye=m.get(Te);ye===void 0&&(ye=new WeakMap,m.set(Te,ye));let Ce=ye.get(j);Ce===void 0&&(Ce=s.getUniformBlockIndex(Te,j.name),s.uniformBlockBinding(Te,Ce,Ce),ye.set(j,Ce))}function we(j,Te,ye){const he=m.get(Te).get(j);g[he]!==ye&&(s.bindBufferBase(s.UNIFORM_BUFFER,he,ye),g[he]=ye)}function Oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),_={},E={},ee=null,k={},h={},g={},S=new WeakMap,b=[],w=null,v=!1,y=null,N=null,U=null,P=null,z=null,I=null,M=null,D=new Lt(0,0,0),J=0,W=!1,V=null,B=null,X=null,F=null,te=null,Y.set(0,0,s.canvas.width,s.canvas.height),oe.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:be,disable:Ie,bindFramebuffer:it,drawBuffers:$e,useProgram:De,setBlending:nt,setMaterial:_t,setFlipSided:ht,setCullFace:lt,setLineWidth:At,setPolygonOffset:le,setScissorTest:Mt,activeTexture:jt,bindTexture:an,unbindTexture:Q,compressedTexImage2D:hn,compressedTexImage3D:Tt,texImage2D:T,texImage3D:se,pixelStorei:Me,getParameter:Pe,updateUBOMapping:_e,uniformBlockBinding:we,texStorage2D:ut,texStorage3D:R,texSubImage2D:kt,texSubImage3D:ke,compressedTexSubImage2D:Rt,compressedTexSubImage3D:Ye,scissor:Le,viewport:Be,reset:Oe}}function Zw(s,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ft,_=new WeakMap,E=new Set;let h;const S=new WeakMap,b=new Set,w=new FinalizationRegistry(R=>b.delete(R));let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,T){return v?new OffscreenCanvas(R,T):lc("canvas")}function N(R,T,se){let Pe=1;const Me=ut(R);if((Me.width>se||Me.height>se)&&(Pe=se/Math.max(Me.width,Me.height)),Pe<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Le=Math.floor(Pe*Me.width),Be=Math.floor(Pe*Me.height);h===void 0&&(h=y(Le,Be));const _e=T?y(Le,Be):h;return _e.width=Le,_e.height=Be,_e.getContext("2d").drawImage(R,0,0,Le,Be),wt("WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+Le+"x"+Be+")."),_e}else return"data"in R&&wt("WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),R;return R}function U(R){return R.generateMipmaps}function P(R){s.generateMipmap(R)}function z(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function I(R,T,se,Pe,Me,Le=!1){if(R!==null){if(s[R]!==void 0)return s[R];wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Be;Pe&&(Be=e.get("EXT_texture_norm16"),Be||wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let _e=T;if(T===s.RED&&(se===s.FLOAT&&(_e=s.R32F),se===s.HALF_FLOAT&&(_e=s.R16F),se===s.UNSIGNED_BYTE&&(_e=s.R8),se===s.UNSIGNED_SHORT&&Be&&(_e=Be.R16_EXT),se===s.SHORT&&Be&&(_e=Be.R16_SNORM_EXT)),T===s.RED_INTEGER&&(se===s.UNSIGNED_BYTE&&(_e=s.R8UI),se===s.UNSIGNED_SHORT&&(_e=s.R16UI),se===s.UNSIGNED_INT&&(_e=s.R32UI),se===s.BYTE&&(_e=s.R8I),se===s.SHORT&&(_e=s.R16I),se===s.INT&&(_e=s.R32I)),T===s.RG&&(se===s.FLOAT&&(_e=s.RG32F),se===s.HALF_FLOAT&&(_e=s.RG16F),se===s.UNSIGNED_BYTE&&(_e=s.RG8),se===s.UNSIGNED_SHORT&&Be&&(_e=Be.RG16_EXT),se===s.SHORT&&Be&&(_e=Be.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(se===s.UNSIGNED_BYTE&&(_e=s.RG8UI),se===s.UNSIGNED_SHORT&&(_e=s.RG16UI),se===s.UNSIGNED_INT&&(_e=s.RG32UI),se===s.BYTE&&(_e=s.RG8I),se===s.SHORT&&(_e=s.RG16I),se===s.INT&&(_e=s.RG32I)),T===s.RGB_INTEGER&&(se===s.UNSIGNED_BYTE&&(_e=s.RGB8UI),se===s.UNSIGNED_SHORT&&(_e=s.RGB16UI),se===s.UNSIGNED_INT&&(_e=s.RGB32UI),se===s.BYTE&&(_e=s.RGB8I),se===s.SHORT&&(_e=s.RGB16I),se===s.INT&&(_e=s.RGB32I)),T===s.RGBA_INTEGER&&(se===s.UNSIGNED_BYTE&&(_e=s.RGBA8UI),se===s.UNSIGNED_SHORT&&(_e=s.RGBA16UI),se===s.UNSIGNED_INT&&(_e=s.RGBA32UI),se===s.BYTE&&(_e=s.RGBA8I),se===s.SHORT&&(_e=s.RGBA16I),se===s.INT&&(_e=s.RGBA32I)),T===s.RGB&&(se===s.UNSIGNED_SHORT&&Be&&(_e=Be.RGB16_EXT),se===s.SHORT&&Be&&(_e=Be.RGB16_SNORM_EXT),se===s.UNSIGNED_INT_5_9_9_9_REV&&(_e=s.RGB9_E5),se===s.UNSIGNED_INT_10F_11F_11F_REV&&(_e=s.R11F_G11F_B10F)),T===s.RGBA){const we=Le?oc:Ot.getTransfer(Me);se===s.FLOAT&&(_e=s.RGBA32F),se===s.HALF_FLOAT&&(_e=s.RGBA16F),se===s.UNSIGNED_BYTE&&(_e=we===Zt?s.SRGB8_ALPHA8:s.RGBA8),se===s.UNSIGNED_SHORT&&Be&&(_e=Be.RGBA16_EXT),se===s.SHORT&&Be&&(_e=Be.RGBA16_SNORM_EXT),se===s.UNSIGNED_SHORT_4_4_4_4&&(_e=s.RGBA4),se===s.UNSIGNED_SHORT_5_5_5_1&&(_e=s.RGB5_A1)}return(_e===s.R16F||_e===s.R32F||_e===s.RG16F||_e===s.RG32F||_e===s.RGBA16F||_e===s.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function M(R,T){let se;return R?T===null||T===sr||T===_a?se=s.DEPTH24_STENCIL8:T===nr?se=s.DEPTH32F_STENCIL8:T===ho&&(se=s.DEPTH24_STENCIL8,wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===sr||T===_a?se=s.DEPTH_COMPONENT24:T===nr?se=s.DEPTH_COMPONENT32F:T===ho&&(se=s.DEPTH_COMPONENT16),se}function D(R,T){return U(R)===!0||R.isFramebufferTexture&&R.minFilter!==Fn&&R.minFilter!==ci?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function J(R){const T=new WeakRef(R);r.get(R).__ref=T,b.add(T),w.register(R,T,T)}function W(R){const T=r.get(R).__ref;T!==void 0&&(b.delete(T),w.unregister(T))}function V(R){X(R.target)}function B(R){F(R.target)}function X(R){R.removeEventListener("dispose",V),W(R),de(R),R.isVideoTexture&&_.delete(R),R.isHTMLTexture&&E.delete(R)}function F(R){R.removeEventListener("dispose",B),W(R),ie(R)}function te(){for(const R of b){const T=R.deref();T!==void 0&&(T.isRenderTarget===!0?F(T):X(T))}b.clear(),E.clear()}function de(R){const T=r.get(R);if(T.__webglInit===void 0)return;const se=R.source,Pe=S.get(se);if(Pe){const Me=Pe[T.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&$(R),Object.keys(Pe).length===0&&S.delete(se)}r.remove(R)}function $(R){const T=r.get(R);s.deleteTexture(T.__webglTexture);const se=R.source,Pe=S.get(se);delete Pe[T.__cacheKey],u.memory.textures--}function ie(R){const T=r.get(R);T.__depthDisposeCallback&&T.__depthDisposeCallback();const se=R.depthTexture;if(se&&se.renderTarget===R&&X(se),R.isWebGLCubeRenderTarget)for(let Me=0;Me<6;Me++){if(Array.isArray(T.__webglFramebuffer[Me]))for(let Le=0;Le<T.__webglFramebuffer[Me].length;Le++)s.deleteFramebuffer(T.__webglFramebuffer[Me][Le]);else s.deleteFramebuffer(T.__webglFramebuffer[Me]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[Me])}else{if(Array.isArray(T.__webglFramebuffer))for(let Me=0;Me<T.__webglFramebuffer.length;Me++)s.deleteFramebuffer(T.__webglFramebuffer[Me]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Me=0;Me<T.__webglColorRenderbuffer.length;Me++)T.__webglColorRenderbuffer[Me]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[Me]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Pe=R.textures;for(let Me=0,Le=Pe.length;Me<Le;Me++){const Be=r.get(Pe[Me]);Be.__webglTexture&&(s.deleteTexture(Be.__webglTexture),u.memory.textures--),r.remove(Pe[Me])}r.remove(R)}let O=0;function ee(){O=0}function k(){return O}function q(R){O=R}function pe(){const R=O;return R>=o.maxTextures&&wt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+o.maxTextures),O+=1,R}function Y(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.mipmapsAutoUpdate),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function oe(R,T){const se=r.get(R);if(R.isVideoTexture&&Rt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&se.__version!==R.version){const Pe=R.image;if(Pe===null)wt("WebGLRenderer: Texture marked for update but no image data found.");else if(Pe.complete===!1)wt("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(se,R,T);return}}else R.isExternalTexture&&(se.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,se.__webglTexture,s.TEXTURE0+T)}function me(R,T){const se=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&se.__version!==R.version){_t(se,R,T);return}else R.isExternalTexture&&(se.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,se.__webglTexture,s.TEXTURE0+T)}function ge(R,T){const se=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&se.__version!==R.version){_t(se,R,T);return}t.bindTexture(s.TEXTURE_3D,se.__webglTexture,s.TEXTURE0+T)}function be(R,T){const se=r.get(R);if(R.version>0&&se.__version!==R.version){ht(se,R,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture,s.TEXTURE0+T)}const Ie={[va]:s.REPEAT,[li]:s.CLAMP_TO_EDGE,[Fd]:s.MIRRORED_REPEAT},it={[Fn]:s.NEAREST,[m_]:s.NEAREST_MIPMAP_NEAREST,[El]:s.NEAREST_MIPMAP_LINEAR,[ci]:s.LINEAR,[id]:s.LINEAR_MIPMAP_NEAREST,[ts]:s.LINEAR_MIPMAP_LINEAR},$e={[__]:s.NEVER,[Lm]:s.ALWAYS,[y_]:s.LESS,[Pm]:s.LEQUAL,[S_]:s.EQUAL,[Dm]:s.GEQUAL,[b_]:s.GREATER,[w_]:s.NOTEQUAL};function De(R,T){if(T.type===nr&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===ci||T.magFilter===id||T.magFilter===El||T.magFilter===ts||T.minFilter===ci||T.minFilter===id||T.minFilter===El||T.minFilter===ts)&&wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,Ie[T.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Ie[T.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Ie[T.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,it[T.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,it[T.minFilter]),T.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,$e[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Fn||T.minFilter!==El&&T.minFilter!==ts||T.type===nr&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ve(R,T){let se=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",V),J(T));const Pe=T.source;let Me=S.get(Pe);Me===void 0&&(Me={},S.set(Pe,Me));const Le=Y(T);if(Le!==R.__cacheKey){Me[Le]===void 0&&(Me[Le]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,se=!0),Me[Le].usedTimes++;const Be=Me[R.__cacheKey];Be!==void 0&&(Me[R.__cacheKey].usedTimes--,Be.usedTimes===0&&$(T)),R.__cacheKey=Le,R.__webglTexture=Me[Le].texture}return se}function Xe(R,T,se){return Math.floor(Math.floor(R/se)/T)}function nt(R,T,se,Pe){const Le=R.updateRanges;if(Le.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,se,Pe,T.data);else{Le.sort((j,Te)=>j.start-Te.start);let Be=0;for(let j=1;j<Le.length;j++){const Te=Le[Be],ye=Le[j],Ce=Te.start+Te.count,he=Xe(ye.start,T.width,4),Ee=Xe(Te.start,T.width,4);ye.start<=Ce+1&&he===Ee&&Xe(ye.start+ye.count-1,T.width,4)===he?Te.count=Math.max(Te.count,ye.start+ye.count-Te.start):(++Be,Le[Be]=ye)}Le.length=Be+1;const _e=t.getParameter(s.UNPACK_ROW_LENGTH),we=t.getParameter(s.UNPACK_SKIP_PIXELS),Oe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let j=0,Te=Le.length;j<Te;j++){const ye=Le[j],Ce=Math.floor(ye.start/4),he=Math.ceil(ye.count/4),Ee=Ce%T.width,Ge=Math.floor(Ce/T.width),Qe=he,Ae=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ee),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ge),t.texSubImage2D(s.TEXTURE_2D,0,Ee,Ge,Qe,Ae,se,Pe,T.data)}R.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,_e),t.pixelStorei(s.UNPACK_SKIP_PIXELS,we),t.pixelStorei(s.UNPACK_SKIP_ROWS,Oe)}}function _t(R,T,se){let Pe=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Pe=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Pe=s.TEXTURE_3D);const Me=Ve(R,T),Le=T.source;t.bindTexture(Pe,R.__webglTexture,s.TEXTURE0+se);const Be=r.get(Le);if(Le.version!==Be.__version||Me===!0){if(t.activeTexture(s.TEXTURE0+se),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const Ae=Ot.getPrimaries(Ot.workingColorSpace),Ke=T.colorSpace===es?null:Ot.getPrimaries(T.colorSpace),rt=T.colorSpace===es||Ae===Ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt)}t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let we=N(T.image,!1,o.maxTextureSize);we=Ye(T,we);const Oe=l.convert(T.format,T.colorSpace),j=l.convert(T.type);let Te=I(T.internalFormat,Oe,j,T.normalized,T.colorSpace,T.isVideoTexture);De(Pe,T);let ye;const Ce=T.mipmaps,he=T.isVideoTexture!==!0,Ee=Be.__version===void 0||Me===!0,Ge=Le.dataReady,Qe=D(T,we);if(T.isDepthTexture)Te=M(T.format===ns,T.type),Ee&&(he?t.texStorage2D(s.TEXTURE_2D,1,Te,we.width,we.height):t.texImage2D(s.TEXTURE_2D,0,Te,we.width,we.height,0,Oe,j,null));else if(T.isDataTexture)if(Ce.length>0){he&&Ee&&t.texStorage2D(s.TEXTURE_2D,Qe,Te,Ce[0].width,Ce[0].height);for(let Ae=0,Ke=Ce.length;Ae<Ke;Ae++)ye=Ce[Ae],he?Ge&&t.texSubImage2D(s.TEXTURE_2D,Ae,0,0,ye.width,ye.height,Oe,j,ye.data):t.texImage2D(s.TEXTURE_2D,Ae,Te,ye.width,ye.height,0,Oe,j,ye.data);T.generateMipmaps=!1}else he?(Ee&&t.texStorage2D(s.TEXTURE_2D,Qe,Te,we.width,we.height),Ge&&nt(T,we,Oe,j)):t.texImage2D(s.TEXTURE_2D,0,Te,we.width,we.height,0,Oe,j,we.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){he&&Ee&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Qe,Te,Ce[0].width,Ce[0].height,we.depth);for(let Ae=0,Ke=Ce.length;Ae<Ke;Ae++)if(ye=Ce[Ae],T.format!==ir)if(Oe!==null)if(he){if(Ge)if(T.layerUpdates.size>0){const rt=F0(ye.width,ye.height,T.format,T.type);for(const je of T.layerUpdates){const pt=ye.data.subarray(je*rt/ye.data.BYTES_PER_ELEMENT,(je+1)*rt/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,je,ye.width,ye.height,1,Oe,pt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,ye.width,ye.height,we.depth,Oe,ye.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ae,Te,ye.width,ye.height,we.depth,0,ye.data,0,0);else wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?Ge&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,ye.width,ye.height,we.depth,Oe,j,ye.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Ae,Te,ye.width,ye.height,we.depth,0,Oe,j,ye.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{he&&Ee&&t.texStorage2D(s.TEXTURE_2D,Qe,Te,Ce[0].width,Ce[0].height);for(let Ae=0,Ke=Ce.length;Ae<Ke;Ae++)ye=Ce[Ae],T.format!==ir?Oe!==null?he?Ge&&t.compressedTexSubImage2D(s.TEXTURE_2D,Ae,0,0,ye.width,ye.height,Oe,ye.data):t.compressedTexImage2D(s.TEXTURE_2D,Ae,Te,ye.width,ye.height,0,ye.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?Ge&&t.texSubImage2D(s.TEXTURE_2D,Ae,0,0,ye.width,ye.height,Oe,j,ye.data):t.texImage2D(s.TEXTURE_2D,Ae,Te,ye.width,ye.height,0,Oe,j,ye.data)}else if(T.isDataArrayTexture)if(he){if(Ee&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Qe,Te,we.width,we.height,we.depth),Ge)if(T.layerUpdates.size>0){const Ae=F0(we.width,we.height,T.format,T.type);for(const Ke of T.layerUpdates){const rt=we.data.subarray(Ke*Ae/we.data.BYTES_PER_ELEMENT,(Ke+1)*Ae/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ke,we.width,we.height,1,Oe,j,rt)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Oe,j,we.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Te,we.width,we.height,we.depth,0,Oe,j,we.data);else if(T.isData3DTexture)he?(Ee&&t.texStorage3D(s.TEXTURE_3D,Qe,Te,we.width,we.height,we.depth),Ge&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Oe,j,we.data)):t.texImage3D(s.TEXTURE_3D,0,Te,we.width,we.height,we.depth,0,Oe,j,we.data);else if(T.isFramebufferTexture){if(Ee)if(he)t.texStorage2D(s.TEXTURE_2D,Qe,Te,we.width,we.height);else{let Ae=we.width,Ke=we.height;for(let rt=0;rt<Qe;rt++)t.texImage2D(s.TEXTURE_2D,rt,Te,Ae,Ke,0,Oe,j,null),Ae>>=1,Ke>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){const Ae=s.canvas;if(Ae.hasAttribute("layoutsubtree")||Ae.setAttribute("layoutsubtree","true"),we.parentNode!==Ae){Ae.appendChild(we),E.add(T),Ae.onpaint=Ke=>{const rt=Ke.changedElements;for(const je of E)rt.includes(je.image)&&(je.needsUpdate=!0)},Ae.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,we);else{const rt=s.RGBA,je=s.RGBA,pt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,rt,je,pt,we)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(he&&Ee){const Ae=ut(Ce[0]);t.texStorage2D(s.TEXTURE_2D,Qe,Te,Ae.width,Ae.height)}for(let Ae=0,Ke=Ce.length;Ae<Ke;Ae++)ye=Ce[Ae],he?Ge&&t.texSubImage2D(s.TEXTURE_2D,Ae,0,0,Oe,j,ye):t.texImage2D(s.TEXTURE_2D,Ae,Te,Oe,j,ye);T.generateMipmaps=!1}else if(he){if(Ee){const Ae=ut(we);t.texStorage2D(s.TEXTURE_2D,Qe,Te,Ae.width,Ae.height)}Ge&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,j,we)}else t.texImage2D(s.TEXTURE_2D,0,Te,Oe,j,we);U(T)&&T.mipmapsAutoUpdate===!0&&P(Pe),Be.__version=Le.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function ht(R,T,se){if(T.image.length!==6)return;const Pe=Ve(R,T),Me=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+se);const Le=r.get(Me);if(Me.version!==Le.__version||Pe===!0){t.activeTexture(s.TEXTURE0+se);const Be=Ot.getPrimaries(Ot.workingColorSpace),_e=T.colorSpace===es?null:Ot.getPrimaries(T.colorSpace),we=T.colorSpace===es||Be===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Oe=T.isCompressedTexture||T.image[0].isCompressedTexture,j=T.image[0]&&T.image[0].isDataTexture,Te=[];for(let je=0;je<6;je++)!Oe&&!j?Te[je]=N(T.image[je],!0,o.maxCubemapSize):Te[je]=j?T.image[je].image:T.image[je],Te[je]=Ye(T,Te[je]);const ye=Te[0],Ce=l.convert(T.format,T.colorSpace),he=l.convert(T.type);let Ee=I(T.internalFormat,Ce,he,T.normalized,T.colorSpace);const Ge=T.isVideoTexture!==!0,Qe=Le.__version===void 0||Pe===!0,Ae=Me.dataReady;let Ke=D(T,ye);De(s.TEXTURE_CUBE_MAP,T);let rt;if(T.isDepthTexture){if(Ee=M(T.format===ns,T.type),Qe)if(Ge)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Ee,ye.width,ye.height);else for(let je=0;je<6;je++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+je,0,Ee,ye.width,ye.height,0,Ce,he,null)}else if(Oe){Ge&&Qe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ke,Ee,ye.width,ye.height);for(let je=0;je<6;je++){rt=Te[je].mipmaps;for(let pt=0;pt<rt.length;pt++){const Ht=rt[pt];T.format!==ir?Ce!==null?Ge?Ae&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+je,pt,0,0,Ht.width,Ht.height,Ce,Ht.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+je,pt,Ee,Ht.width,Ht.height,0,Ht.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+je,pt,0,0,Ht.width,Ht.height,Ce,he,Ht.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+je,pt,Ee,Ht.width,Ht.height,0,Ce,he,Ht.data)}}}else{if(rt=T.mipmaps,Ge&&Qe){rt.length>0&&Ke++;const je=ut(Te[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ke,Ee,je.width,je.height)}for(let je=0;je<6;je++)if(j){Ge?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+je,0,0,0,Te[je].width,Te[je].height,Ce,he,Te[je].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+je,0,Ee,Te[je].width,Te[je].height,0,Ce,he,Te[je].data);for(let pt=0;pt<rt.length;pt++){const Qt=rt[pt].image[je].image;Ge?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+je,pt+1,0,0,Qt.width,Qt.height,Ce,he,Qt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+je,pt+1,Ee,Qt.width,Qt.height,0,Ce,he,Qt.data)}}else{Ge?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+je,0,0,0,Ce,he,Te[je]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+je,0,Ee,Ce,he,Te[je]);for(let pt=0;pt<rt.length;pt++){const Ht=rt[pt];Ge?Ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+je,pt+1,0,0,Ce,he,Ht.image[je]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+je,pt+1,Ee,Ce,he,Ht.image[je])}}}U(T)&&T.mipmapsAutoUpdate===!0&&P(s.TEXTURE_CUBE_MAP),Le.__version=Me.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function lt(R,T,se,Pe,Me,Le){const Be=l.convert(se.format,se.colorSpace),_e=l.convert(se.type),we=I(se.internalFormat,Be,_e,se.normalized,se.colorSpace),Oe=r.get(T),j=r.get(se);if(j.__renderTarget=T,!Oe.__hasExternalTextures){const Te=Math.max(1,T.width>>Le),ye=Math.max(1,T.height>>Le);Me===s.TEXTURE_3D||Me===s.TEXTURE_2D_ARRAY?t.texImage3D(Me,Le,we,Te,ye,T.depth,0,Be,_e,null):t.texImage2D(Me,Le,we,Te,ye,0,Be,_e,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),ke(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Pe,Me,j.__webglTexture,0,kt(T)):(Me===s.TEXTURE_2D||Me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Pe,Me,j.__webglTexture,Le),t.bindFramebuffer(s.FRAMEBUFFER,null)}function At(R,T,se){if(s.bindRenderbuffer(s.RENDERBUFFER,R),T.depthBuffer){const Pe=T.depthTexture,Me=Pe&&Pe.isDepthTexture?Pe.type:null,Le=M(T.stencilBuffer,Me),Be=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ke(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,kt(T),Le,T.width,T.height):se?s.renderbufferStorageMultisample(s.RENDERBUFFER,kt(T),Le,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Le,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Be,s.RENDERBUFFER,R)}else{const Pe=T.textures;for(let Me=0;Me<Pe.length;Me++){const Le=Pe[Me],Be=l.convert(Le.format,Le.colorSpace),_e=l.convert(Le.type),we=I(Le.internalFormat,Be,_e,Le.normalized,Le.colorSpace);ke(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,kt(T),we,T.width,T.height):se?s.renderbufferStorageMultisample(s.RENDERBUFFER,kt(T),we,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,we,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function le(R,T,se){const Pe=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Me=r.get(T.depthTexture);Me.__renderTarget=T;const Le=Pe?T.depthTexture.image[0]:T.depthTexture.image;(!Me.__webglTexture||Le.width!==T.width||Le.height!==T.height)&&(Le.width=T.width,Le.height=T.height,T.depthTexture.needsUpdate=!0),Pe?be(T.depthTexture,0):oe(T.depthTexture,0);const Be=Me.__webglTexture,_e=kt(T),we=Pe?s.TEXTURE_CUBE_MAP_POSITIVE_X+se:s.TEXTURE_2D,Oe=T.depthTexture.format===ns?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===is)ke(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Oe,we,Be,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,Oe,we,Be,0);else if(T.depthTexture.format===ns)ke(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Oe,we,Be,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,Oe,we,Be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Mt(R){const T=r.get(R),se=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){const Pe=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Pe){const Me=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Pe.removeEventListener("dispose",Me)};Pe.addEventListener("dispose",Me),T.__depthDisposeCallback=Me}T.__boundDepthTexture=Pe}if(R.depthTexture&&!T.__autoAllocateDepthBuffer)if(se)for(let Pe=0;Pe<6;Pe++)le(T.__webglFramebuffer[Pe],R,Pe);else R.texture.mipmaps.length>0?le(T.__webglFramebuffer[0],R,0):le(T.__webglFramebuffer,R,0);else if(se){T.__webglDepthbuffer=[];for(let Pe=0;Pe<6;Pe++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[Pe]),T.__webglDepthbuffer[Pe]===void 0)T.__webglDepthbuffer[Pe]=s.createRenderbuffer(),At(T.__webglDepthbuffer[Pe],R,!1);else{const Me=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=T.__webglDepthbuffer[Pe];s.bindRenderbuffer(s.RENDERBUFFER,Le),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,Le)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),At(T.__webglDepthbuffer,R,!1);else{const Me=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Le),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,Le)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function jt(R,T,se){const Pe=r.get(R);T!==void 0&&lt(Pe.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),se!==void 0&&Mt(R)}function an(R){const T=R.texture,se=r.get(R),Pe=r.get(T);R.addEventListener("dispose",B),J(R);const Me=R.textures,Le=R.isWebGLCubeRenderTarget===!0,Be=Me.length>1;if(Be||(Pe.__webglTexture===void 0&&(Pe.__webglTexture=s.createTexture()),Pe.__version=T.version,u.memory.textures++),Le){se.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(T.mipmaps.length>0){se.__webglFramebuffer[_e]=[];for(let we=0;we<T.mipmaps.length;we++)se.__webglFramebuffer[_e][we]=s.createFramebuffer()}else se.__webglFramebuffer[_e]=s.createFramebuffer()}else{if(T.mipmaps.length>0){se.__webglFramebuffer=[];for(let _e=0;_e<T.mipmaps.length;_e++)se.__webglFramebuffer[_e]=s.createFramebuffer()}else se.__webglFramebuffer=s.createFramebuffer();if(Be)for(let _e=0,we=Me.length;_e<we;_e++){const Oe=r.get(Me[_e]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=s.createTexture(),u.memory.textures++)}if(R.samples>0&&ke(R)===!1){se.__webglMultisampledFramebuffer=s.createFramebuffer(),se.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let _e=0;_e<Me.length;_e++){const we=Me[_e];se.__webglColorRenderbuffer[_e]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,se.__webglColorRenderbuffer[_e]);const Oe=l.convert(we.format,we.colorSpace),j=l.convert(we.type),Te=I(we.internalFormat,Oe,j,we.normalized,we.colorSpace,R.isXRRenderTarget===!0),ye=kt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,Te,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,se.__webglColorRenderbuffer[_e])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(se.__webglDepthRenderbuffer=s.createRenderbuffer(),At(se.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Le){t.bindTexture(s.TEXTURE_CUBE_MAP,Pe.__webglTexture),De(s.TEXTURE_CUBE_MAP,T);for(let _e=0;_e<6;_e++)if(T.mipmaps.length>0)for(let we=0;we<T.mipmaps.length;we++)lt(se.__webglFramebuffer[_e][we],R,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,we);else lt(se.__webglFramebuffer[_e],R,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);U(T)?P(s.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(Be){for(let _e=0,we=Me.length;_e<we;_e++){const Oe=Me[_e],j=r.get(Oe);let Te=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Te=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Te,j.__webglTexture),De(Te,Oe),lt(se.__webglFramebuffer,R,Oe,s.COLOR_ATTACHMENT0+_e,Te,0),U(Oe)&&P(Te)}t.unbindTexture()}else{let _e=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_e=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(_e,Pe.__webglTexture),De(_e,T),T.mipmaps.length>0)for(let we=0;we<T.mipmaps.length;we++)lt(se.__webglFramebuffer[we],R,T,s.COLOR_ATTACHMENT0,_e,we);else lt(se.__webglFramebuffer,R,T,s.COLOR_ATTACHMENT0,_e,0);U(T)?P(_e):T.mipmaps.length>0&&s.texParameteri(_e,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&Mt(R)}function Q(R){const T=R.textures;for(let se=0,Pe=T.length;se<Pe;se++){const Me=T[se];if(U(Me)&&Me.mipmapsAutoUpdate===!0){const Le=z(R),Be=r.get(Me).__webglTexture;t.bindTexture(Le,Be),P(Le),t.unbindTexture()}}}const hn=[];function Tt(R){if(R.samples>0){if(ke(R)===!1){const T=R.textures,se=R.width,Pe=R.height;let Me=s.COLOR_BUFFER_BIT;const Le=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Be=r.get(R),_e=T.length>1;if(_e)for(let Oe=0;Oe<T.length;Oe++)t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Oe=0;Oe<T.length;Oe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Me|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Me|=s.STENCIL_BUFFER_BIT)),_e){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Be.__webglColorRenderbuffer[Oe]);const j=r.get(T[Oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,j,0)}s.blitFramebuffer(0,0,se,Pe,0,0,se,Pe,Me,s.NEAREST),g===!0&&(hn.length=0,hn.push(s.COLOR_ATTACHMENT0+Oe),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&hn.push(Le),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,hn))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),_e)for(let Oe=0;Oe<T.length;Oe++){t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,Be.__webglColorRenderbuffer[Oe]);const j=r.get(T[Oe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,j,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&g){const T=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function kt(R){return Math.min(o.maxSamples,R.samples)}function ke(R){const T=r.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Rt(R){const T=u.render.frame;_.get(R)!==T&&(_.set(R,T),R.update())}function Ye(R,T){const se=R.colorSpace,Pe=R.format,Me=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||se!==ac&&se!==es&&(Ot.getTransfer(se)===Zt?(Pe!==ir||Me!==vi)&&wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",se)),T}function ut(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(m.width=R.naturalWidth||R.width,m.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(m.width=R.displayWidth,m.height=R.displayHeight):(m.width=R.width,m.height=R.height),m}this.allocateTextureUnit=pe,this.resetTextureUnits=ee,this.getTextureUnits=k,this.setTextureUnits=q,this.setTexture2D=oe,this.setTexture2DArray=me,this.setTexture3D=ge,this.setTextureCube=be,this.rebindTextures=jt,this.setupRenderTarget=an,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=ke,this.dispose=te}function Jw(s,e){function t(r,o=es){let l;const u=Ot.getTransfer(o);if(r===vi)return s.UNSIGNED_BYTE;if(r===Tf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Cf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Tm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Cm)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Mm)return s.BYTE;if(r===Em)return s.SHORT;if(r===ho)return s.UNSIGNED_SHORT;if(r===Ef)return s.INT;if(r===sr)return s.UNSIGNED_INT;if(r===nr)return s.FLOAT;if(r===ar)return s.HALF_FLOAT;if(r===Am)return s.ALPHA;if(r===Rm)return s.RGB;if(r===ir)return s.RGBA;if(r===is)return s.DEPTH_COMPONENT;if(r===ns)return s.DEPTH_STENCIL;if(r===Nm)return s.RED;if(r===Af)return s.RED_INTEGER;if(r===Rs)return s.RG;if(r===Rf)return s.RG_INTEGER;if(r===Nf)return s.RGBA_INTEGER;if(r===ql||r===Kl||r===Zl||r===Jl)if(u===Zt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===ql)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===ql)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Kl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Zl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Jl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Od||r===Bd||r===Hd||r===Gd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Od)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Bd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Hd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Vd||r===jd||r===Wd||r===$d||r===Xd||r===rc||r===Yd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Vd||r===jd)return u===Zt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Wd)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===$d)return l.COMPRESSED_R11_EAC;if(r===Xd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===rc)return l.COMPRESSED_RG11_EAC;if(r===Yd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===qd||r===Kd||r===Zd||r===Jd||r===Qd||r===ef||r===tf||r===nf||r===rf||r===sf||r===af||r===of||r===lf||r===cf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===qd)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Kd)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Zd)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Jd)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qd)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ef)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===tf)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===nf)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===rf)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===sf)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===af)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===of)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lf)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===cf)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===uf||r===df||r===ff)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===uf)return u===Zt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===df)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ff)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===hf||r===pf||r===sc||r===mf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===hf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===pf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===sc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===mf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===_a?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const Qw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eM=`
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

}`;class tM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Gm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ti({vertexShader:Qw,fragmentShader:eM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tn(new yo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nM extends Ns{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",g=1,m=null,_=null,E=null,h=null,S=null,b=null;const w=typeof XRWebGLBinding<"u",v=new tM,y={},N=t.getContextAttributes();let U=null,P=null;const z=[],I=[],M=new Ft;let D=null,J=null;const W=new Oi;W.viewport=new gn;const V=new Oi;V.viewport=new gn;const B=[W,V],X=new py;let F=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let oe=z[Y];return oe===void 0&&(oe=new fd,z[Y]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Y){let oe=z[Y];return oe===void 0&&(oe=new fd,z[Y]=oe),oe.getGripSpace()},this.getHand=function(Y){let oe=z[Y];return oe===void 0&&(oe=new fd,z[Y]=oe),oe.getHandSpace()};function de(Y){const oe=I.indexOf(Y.inputSource);if(oe===-1)return;const me=z[oe];me!==void 0&&(me.update(Y.inputSource,Y.frame,m||u),me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function $(){o.removeEventListener("select",de),o.removeEventListener("selectstart",de),o.removeEventListener("selectend",de),o.removeEventListener("squeeze",de),o.removeEventListener("squeezestart",de),o.removeEventListener("squeezeend",de),o.removeEventListener("end",$),o.removeEventListener("inputsourceschange",ie);for(let Y=0;Y<z.length;Y++){const oe=I[Y];oe!==null&&(I[Y]=null,z[Y].disconnect(oe))}F=null,te=null,v.reset();for(const Y in y)delete y[Y];if(e.setRenderTarget(U),S=null,h=null,E=null,o=null,P=null,pe.stop(),r.isPresenting=!1,e.setPixelRatio(D),e.setSize(M.width,M.height,!1),J!==null){const Y=J.camera;Y.fov=J.fov,Y.zoom=J.zoom,Y.updateProjectionMatrix(),J=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){l=Y,r.isPresenting===!0&&wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){f=Y,r.isPresenting===!0&&wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(Y){m=Y},this.getBaseLayer=function(){return h!==null?h:S},this.getBinding=function(){return E===null&&w&&(E=new XRWebGLBinding(o,t)),E},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(Y){if(o=Y,o!==null){if(U=e.getRenderTarget(),o.addEventListener("select",de),o.addEventListener("selectstart",de),o.addEventListener("selectend",de),o.addEventListener("squeeze",de),o.addEventListener("squeezestart",de),o.addEventListener("squeezeend",de),o.addEventListener("end",$),o.addEventListener("inputsourceschange",ie),N.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(M),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,ge=null,be=null;N.depth&&(be=N.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=N.stencil?ns:is,ge=N.stencil?_a:sr);const Ie={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:l};E=this.getBinding(),h=E.createProjectionLayer(Ie),o.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),P=new rr(h.textureWidth,h.textureHeight,{format:ir,type:vi,depthTexture:new ya(h.textureWidth,h.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const me={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,me),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new rr(S.framebufferWidth,S.framebufferHeight,{format:ir,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(g),m=null,u=await o.requestReferenceSpace(f),pe.setContext(o),pe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ie(Y){for(let oe=0;oe<Y.removed.length;oe++){const me=Y.removed[oe],ge=I.indexOf(me);ge>=0&&(I[ge]=null,z[ge].disconnect(me))}for(let oe=0;oe<Y.added.length;oe++){const me=Y.added[oe];let ge=I.indexOf(me);if(ge===-1){for(let Ie=0;Ie<z.length;Ie++)if(Ie>=I.length){I.push(me),ge=Ie;break}else if(I[Ie]===null){I[Ie]=me,ge=Ie;break}if(ge===-1)break}const be=z[ge];be&&be.connect(me)}}function O(Y,oe){oe===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(oe.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(o===null)return;let oe=Y.near,me=Y.far;v.texture!==null&&(v.depthNear>0&&(oe=v.depthNear),v.depthFar>0&&(me=v.depthFar)),X.near=V.near=W.near=oe,X.far=V.far=W.far=me,(F!==X.near||te!==X.far)&&(o.updateRenderState({depthNear:X.near,depthFar:X.far}),F=X.near,te=X.far),X.layers.mask=Y.layers.mask|6,W.layers.mask=X.layers.mask&-5,V.layers.mask=X.layers.mask&-3;const ge=Y.parent,be=X.cameras;O(X,ge);for(let Ie=0;Ie<be.length;Ie++)O(be[Ie],ge);X.projectionMatrix.copy(W.projectionMatrix),X.projectionMatrixInverse.copy(W.projectionMatrixInverse),J===null&&Y.isPerspectiveCamera&&(J={camera:Y,fov:Y.fov,zoom:Y.zoom}),ee(Y,X,ge)};function ee(Y,oe,me){me===null?Y.matrix.copy(oe.matrixWorld):(Y.matrix.copy(me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(oe.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(oe.projectionMatrix),Y.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=xf*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(h===null&&S===null))return g},this.setFoveation=function(Y){g=Y,h!==null&&(h.fixedFoveation=Y),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(X)},this.getCameraTexture=function(Y){return y[Y]};let k=null;function q(Y,oe){if(_=oe.getViewerPose(m||u),b=oe,_!==null){const me=_.views;S!==null&&(e.setRenderTargetFramebuffer(P,S.framebuffer),e.setRenderTarget(P));let ge=!1;me.length!==X.cameras.length&&(X.cameras.length=0,ge=!0);for(let $e=0;$e<me.length;$e++){const De=me[$e];let Ve=null;if(S!==null)Ve=S.getViewport(De);else{const nt=E.getViewSubImage(h,De);Ve=nt.viewport,$e===0&&(e.setRenderTargetTextures(P,nt.colorTexture,nt.depthStencilTexture),e.setRenderTarget(P))}let Xe=B[$e];Xe===void 0&&(Xe=new Oi,Xe.layers.enable($e),Xe.viewport=new gn,B[$e]=Xe),Xe.matrix.fromArray(De.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(De.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),$e===0&&(X.matrix.copy(Xe.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),ge===!0&&X.cameras.push(Xe)}const be=o.enabledFeatures;if(be&&be.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){E=r.getBinding();const $e=E.getDepthInformation(me[0]);$e&&$e.isValid&&$e.texture&&v.init($e,o.renderState)}if(be&&be.includes("camera-access")&&w){e.state.unbindTexture(),E=r.getBinding();for(let $e=0;$e<me.length;$e++){const De=me[$e].camera;if(De){let Ve=y[De];Ve||(Ve=new Gm,y[De]=Ve);const Xe=E.getCameraImage(De);Ve.sourceTexture=Xe}}}}for(let me=0;me<z.length;me++){const ge=I[me],be=z[me];ge!==null&&be!==void 0&&be.update(ge,oe,m||u)}k&&k(Y,oe),oe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:oe}),b=null}const pe=new Xm;pe.setAnimationLoop(q),this.setAnimationLoop=function(Y){k=Y},this.dispose=function(){}}}const iM=new xn,ig=new Et;ig.set(-1,0,0,0,1,0,0,0,1);function rM(s,e){function t(v,y){v.matrixAutoUpdate===!0&&v.updateMatrix(),y.value.copy(v.matrix)}function r(v,y){y.color.getRGB(v.fogColor.value,Vm(s)),y.isFog?(v.fogNear.value=y.near,v.fogFar.value=y.far):y.isFogExp2&&(v.fogDensity.value=y.density)}function o(v,y,N,U,P){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?l(v,y):y.isMeshLambertMaterial?(l(v,y),y.envMap&&(v.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(l(v,y),E(v,y)):y.isMeshPhongMaterial?(l(v,y),_(v,y),y.envMap&&(v.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(l(v,y),h(v,y),y.isMeshPhysicalMaterial&&S(v,y,P)):y.isMeshMatcapMaterial?(l(v,y),b(v,y)):y.isMeshDepthMaterial?l(v,y):y.isMeshDistanceMaterial?(l(v,y),w(v,y)):y.isMeshNormalMaterial?l(v,y):y.isLineBasicMaterial?(u(v,y),y.isLineDashedMaterial&&f(v,y)):y.isPointsMaterial?g(v,y,N,U):y.isSpriteMaterial?m(v,y):y.isShadowMaterial?(v.color.value.copy(y.color),v.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(v,y){v.opacity.value=y.opacity,y.color&&v.diffuse.value.copy(y.color),y.emissive&&v.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(v.map.value=y.map,t(y.map,v.mapTransform)),y.alphaMap&&(v.alphaMap.value=y.alphaMap,t(y.alphaMap,v.alphaMapTransform)),y.bumpMap&&(v.bumpMap.value=y.bumpMap,t(y.bumpMap,v.bumpMapTransform),v.bumpScale.value=y.bumpScale,y.side===On&&(v.bumpScale.value*=-1)),y.normalMap&&(v.normalMap.value=y.normalMap,t(y.normalMap,v.normalMapTransform),v.normalScale.value.copy(y.normalScale),y.side===On&&v.normalScale.value.negate()),y.displacementMap&&(v.displacementMap.value=y.displacementMap,t(y.displacementMap,v.displacementMapTransform),v.displacementScale.value=y.displacementScale,v.displacementBias.value=y.displacementBias),y.emissiveMap&&(v.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,v.emissiveMapTransform)),y.specularMap&&(v.specularMap.value=y.specularMap,t(y.specularMap,v.specularMapTransform)),y.alphaTest>0&&(v.alphaTest.value=y.alphaTest);const N=e.get(y),U=N.envMap,P=N.envMapRotation;U&&(v.envMap.value=U,v.envMapRotation.value.setFromMatrix4(iM.makeRotationFromEuler(P)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(ig),v.reflectivity.value=y.reflectivity,v.ior.value=y.ior,v.refractionRatio.value=y.refractionRatio),y.lightMap&&(v.lightMap.value=y.lightMap,v.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,v.lightMapTransform)),y.aoMap&&(v.aoMap.value=y.aoMap,v.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,v.aoMapTransform))}function u(v,y){v.diffuse.value.copy(y.color),v.opacity.value=y.opacity,y.map&&(v.map.value=y.map,t(y.map,v.mapTransform))}function f(v,y){v.dashSize.value=y.dashSize,v.totalSize.value=y.dashSize+y.gapSize,v.scale.value=y.scale}function g(v,y,N,U){v.diffuse.value.copy(y.color),v.opacity.value=y.opacity,v.size.value=y.size*N,v.scale.value=U*.5,y.map&&(v.map.value=y.map,t(y.map,v.uvTransform)),y.alphaMap&&(v.alphaMap.value=y.alphaMap,t(y.alphaMap,v.alphaMapTransform)),y.alphaTest>0&&(v.alphaTest.value=y.alphaTest)}function m(v,y){v.diffuse.value.copy(y.color),v.opacity.value=y.opacity,v.rotation.value=y.rotation,y.map&&(v.map.value=y.map,t(y.map,v.mapTransform)),y.alphaMap&&(v.alphaMap.value=y.alphaMap,t(y.alphaMap,v.alphaMapTransform)),y.alphaTest>0&&(v.alphaTest.value=y.alphaTest)}function _(v,y){v.specular.value.copy(y.specular),v.shininess.value=Math.max(y.shininess,1e-4)}function E(v,y){y.gradientMap&&(v.gradientMap.value=y.gradientMap)}function h(v,y){v.metalness.value=y.metalness,y.metalnessMap&&(v.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,v.metalnessMapTransform)),v.roughness.value=y.roughness,y.roughnessMap&&(v.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,v.roughnessMapTransform)),y.envMap&&(v.envMapIntensity.value=y.envMapIntensity)}function S(v,y,N){v.ior.value=y.ior,y.diffuseRoughness>0&&(v.diffuseRoughness.value=y.diffuseRoughness,y.diffuseRoughnessMap&&(v.diffuseRoughnessMap.value=y.diffuseRoughnessMap,t(y.diffuseRoughnessMap,v.diffuseRoughnessMapTransform))),y.sheen>0&&(v.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),v.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(v.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,v.sheenColorMapTransform)),y.sheenRoughnessMap&&(v.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,v.sheenRoughnessMapTransform))),y.clearcoat>0&&(v.clearcoat.value=y.clearcoat,v.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(v.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,v.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(v.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===On&&v.clearcoatNormalScale.value.negate())),y.dispersion>0&&(v.dispersion.value=y.dispersion),y.retroreflectivity>0&&(v.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(v.iridescence.value=y.iridescence,v.iridescenceIOR.value=y.iridescenceIOR,v.iridescenceThicknessMinimum.value=y.iridescenceThicknessMinimum,v.iridescenceThicknessMaximum.value=y.iridescenceThicknessMaximum,y.iridescenceMap&&(v.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,v.iridescenceMapTransform)),y.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),y.transmission>0&&(v.transmission.value=y.transmission,v.transmissionSamplerMap.value=N.texture,v.transmissionSamplerSize.value.set(N.width,N.height),y.transmissionMap&&(v.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,v.transmissionMapTransform)),v.thickness.value=y.thickness,y.thicknessMap&&(v.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=y.attenuationDistance,v.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(v.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(v.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=y.specularIntensity,v.specularColor.value.copy(y.specularColor),y.specularColorMap&&(v.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,v.specularColorMapTransform)),y.specularIntensityMap&&(v.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,v.specularIntensityMapTransform))}function b(v,y){y.matcap&&(v.matcap.value=y.matcap)}function w(v,y){const N=e.get(y).light;v.referencePosition.value.setFromMatrixPosition(N.matrixWorld),v.nearDistance.value=N.shadow.camera.near,v.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function sM(s,e,t,r){let o={},l={};function u(N,U){const P=U.program;r.uniformBlockBinding(N,P,o[N.id])}function f(N,U){let P=o[N.id];P===void 0&&(b(N),P=g(N),o[N.id]=P,N.addEventListener("dispose",v));const z=U.program;r.updateUBOMapping(N,z);const I=e.render.frame;l[N.id]!==I&&(m(N),l[N.id]=I)}function g(N){const U=s.createBuffer(),P=N.__size,z=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,P,z),s.bindBuffer(s.UNIFORM_BUFFER,null),U}function m(N){const U=o[N.id],P=N.uniforms,z=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let I=0,M=P.length;I<M;I++){const D=P[I];if(Array.isArray(D))for(let J=0,W=D.length;J<W;J++)_(D[J],I,J,z);else _(D,I,0,z)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(N,U,P,z){if(h(N,U,P,z)===!0){const I=N.__offset,M=N.value;if(Array.isArray(M)){let D=0;for(let J=0;J<M.length;J++){const W=M[J],V=w(W,!0);E(W,N.__data,D),D+=V.storage/Float32Array.BYTES_PER_ELEMENT}}else E(M,N.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,I,N.__data)}}function E(N,U,P){typeof N=="number"||typeof N=="boolean"?U[P]=N:N.isMatrix3?(U[P]=N.elements[0],U[P+1]=N.elements[1],U[P+2]=N.elements[2],U[P+3]=0,U[P+4]=N.elements[3],U[P+5]=N.elements[4],U[P+6]=N.elements[5],U[P+7]=0,U[P+8]=N.elements[6],U[P+9]=N.elements[7],U[P+10]=N.elements[8],U[P+11]=0):ArrayBuffer.isView(N)?U.set(N.subarray(0,U.length-P),P):N.toArray(U,P)}function h(N,U,P,z){const I=N.value,M=U+"_"+P;if(Array.isArray(I)){z[M]===void 0&&(z[M]=[]);const D=z[M];let J=!1;for(let W=0;W<I.length;W++)S(I[W],D,W)===!0&&(J=!0);return J}return S(I,z,M)}function S(N,U,P){if(U[P]===void 0)return typeof N=="number"||typeof N=="boolean"?U[P]=N:ArrayBuffer.isView(N)?U[P]=N.slice():U[P]=N.clone(),!0;{const z=U[P];if(typeof N=="number"||typeof N=="boolean"){if(z!==N)return U[P]=N,!0}else{if(ArrayBuffer.isView(N))return!0;if(z.equals(N)===!1)return z.copy(N),!0}}return!1}function b(N){const U=N.uniforms;let P=0;const z=16;for(let M=0,D=U.length;M<D;M++){const J=Array.isArray(U[M])?U[M]:[U[M]];for(let W=0,V=J.length;W<V;W++){const B=J[W],X=Array.isArray(B.value)?B.value:[B.value],F=Array.isArray(U[M])||Array.isArray(B.value);let te=P;for(let $=0,ie=X.length;$<ie;$++){const O=X[$],ee=w(O,F),k=P%z,q=k%ee.boundary,pe=k+q;P+=q,pe!==0&&z-pe<ee.storage&&(P+=z-pe),$===0&&(te=P),P+=ee.storage}const de=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new de((P-te)/Float32Array.BYTES_PER_ELEMENT),B.__offset=te}}const I=P%z;return I>0&&(P+=z-I),N.__size=P,N.__cache={},this}function w(N,U){const P={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(P.boundary=4,P.storage=4):N.isVector2?(P.boundary=8,P.storage=8):N.isVector3||N.isColor?(P.boundary=16,P.storage=12):N.isVector4?(P.boundary=16,P.storage=16):N.isMatrix3?(P.boundary=16,P.storage=48):N.isMatrix4?(P.boundary=16,P.storage=64):N.isTexture?wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(N)?(P.boundary=16,P.storage=N.byteLength):wt("WebGLRenderer: Unsupported uniform value type.",N),U===!0&&(P.boundary=16,P.storage=Math.ceil(P.storage/16)*16),P}function v(N){const U=N.target;U.removeEventListener("dispose",v),s.deleteBuffer(o[U.id]),delete o[U.id],delete l[U.id]}function y(){for(const N in o)s.deleteBuffer(o[N]);o={},l={}}return{bind:u,update:f,dispose:y}}const aM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qi=null;function oM(){return Qi===null&&(Qi=new ty(aM,16,16,Rs,ar),Qi.name="DFG_LUT",Qi.minFilter=ci,Qi.magFilter=ci,Qi.wrapS=li,Qi.wrapT=li,Qi.generateMipmaps=!1,Qi.needsUpdate=!0),Qi}class lM{constructor(e={}){const{canvas:t=T_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:E=!1,reversedDepthBuffer:h=!1,outputBufferType:S=vi}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=u;const w=S,v=new Set([Nf,Rf,Af]),y=new Set([vi,sr,ho,_a,Tf,Cf]),N=new Uint32Array(4),U=new Int32Array(4),P={textures:[],min:[],max:[],resolution:[]};let z=null,I=null;const M=[],D=[];let J=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const W=this;let V=!1,B=null,X=null,F=null,te=null;this._outputColorSpace=xi;let de=0,$=0,ie=null,O=-1,ee=null;const k=new gn,q=new gn;let pe=null;const Y=new Lt(0);let oe=0,me=t.width,ge=t.height,be=1,Ie=null,it=null;const $e=new gn(0,0,me,ge),De=new gn(0,0,me,ge);let Ve=!1;const Xe=new mo,nt=new If;let _t=!1,ht=!1;const lt=new xn,At=new ve,le=new gn,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function an(){return ie===null?be:1}let Q=r;function hn(A,K){return t.getContext(A,K)}let Tt,kt,ke,Rt,Ye,ut,R,T,se,Pe,Me,Le,Be,_e,we,Oe,j,Te,ye,Ce,he,Ee,Ge;try{const A={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:g,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:E};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mf}`),t.addEventListener("webglcontextlost",Ke,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",je,!1),Q===null){const K="webgl2";if(Q=hn(K,A),Q===null)throw hn(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qe()}catch(A){throw t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",je,!1),Yt("WebGLRenderer: "+A.message),A}function Qe(){Tt=new db(Q),Tt.init(),he=new Jw(Q,Tt),kt=new eb(Q,Tt,e,he),ke=new Kw(Q,Tt),kt.reversedDepthBuffer&&h&&ke.buffers.depth.setReversed(!0),X=Q.createFramebuffer(),F=Q.createFramebuffer(),te=Q.createFramebuffer(),Rt=new pb(Q),Ye=new Uw,ut=new Zw(Q,Tt,ke,Ye,kt,he,Rt),R=new ub(W),T=new gy(Q),Ee=new JS(Q,T),se=new fb(Q,T,Rt,Ee),Pe=new gb(Q,se,T,Ee,Rt),Te=new mb(Q,kt,ut),we=new tb(Ye),Me=new kw(W,R,Tt,kt,Ee,we),Le=new rM(W,Ye),Be=new Fw,_e=new jw(Tt),j=new ZS(W,R,ke,Pe,b,g),Oe=new qw(W,Pe,kt),Ge=new sM(Q,Rt,kt,ke),ye=new QS(Q,Tt,Rt),Ce=new hb(Q,Tt,Rt),Rt.programs=Me.programs,W.capabilities=kt,W.extensions=Tt,W.properties=Ye,W.renderLists=Be,W.shadowMap=Oe,W.state=ke,W.info=Rt}w!==vi&&(J=new vb(w,t.width,t.height,f,o,l));const Ae=new nM(W,Q);this.xr=Ae,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const A=Tt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Tt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(A){A!==void 0&&(be=A,this.setSize(me,ge,!1))},this.getSize=function(A){return A.set(me,ge)},this.setSize=function(A,K,ce=!0){if(Ae.isPresenting){wt("WebGLRenderer: Can't change size while VR device is presenting.");return}me=A,ge=K,t.width=Math.floor(A*be),t.height=Math.floor(K*be),ce===!0&&(t.style.width=A+"px",t.style.height=K+"px"),J!==null&&J.setSize(t.width,t.height),this.setViewport(0,0,A,K)},this.getDrawingBufferSize=function(A){return A.set(me*be,ge*be).floor()},this.setDrawingBufferSize=function(A,K,ce){me=A,ge=K,be=ce,t.width=Math.floor(A*ce),t.height=Math.floor(K*ce),this.setViewport(0,0,A,K)},this.setEffects=function(A){if(w===vi){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let K=0;K<A.length;K++)if(A[K].isOutputPass===!0){wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}J.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(k)},this.getViewport=function(A){return A.copy($e)},this.setViewport=function(A,K,ce,L){A.isVector4?$e.set(A.x,A.y,A.z,A.w):$e.set(A,K,ce,L),ke.viewport(k.copy($e).multiplyScalar(an()).round())},this.getScissor=function(A){return A.copy(De)},this.setScissor=function(A,K,ce,L){A.isVector4?De.set(A.x,A.y,A.z,A.w):De.set(A,K,ce,L),ke.scissor(q.copy(De).multiplyScalar(an()).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(A){ke.setScissorTest(Ve=A)},this.setOpaqueSort=function(A){Ie=A},this.setTransparentSort=function(A){it=A},this.getClearColor=function(A){return A.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor(...arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha(...arguments)},this.clear=function(A=!0,K=!0,ce=!0){let L=0;if(A){let H=!1;if(ie!==null){const re=ie.texture.format;H=v.has(re)}if(H){const re=ie.texture.type,Ne=y.has(re),Re=j.getClearColor(),ze=j.getClearAlpha(),qe=Re.r,st=Re.g,vt=Re.b;Ne?(N[0]=qe,N[1]=st,N[2]=vt,N[3]=ze,Q.clearBufferuiv(Q.COLOR,0,N)):(U[0]=qe,U[1]=st,U[2]=vt,U[3]=ze,Q.clearBufferiv(Q.COLOR,0,U))}else L|=Q.COLOR_BUFFER_BIT}K&&(L|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(L|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L!==0&&Q.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),B=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",je,!1),j.dispose(),Be.dispose(),_e.dispose(),ut.dispose(),Ye.dispose(),R.dispose(),Pe.dispose(),se.dispose(),Ee.dispose(),Ge.dispose(),Me.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",Bn),Ae.removeEventListener("sessionend",wn),nn.stop()};function Ke(A){A.preventDefault(),x0("WebGLRenderer: Context Lost."),V=!0}function rt(){x0("WebGLRenderer: Context Restored."),V=!1;const A=Rt.autoReset,K=Oe.enabled,ce=Oe.autoUpdate,L=Oe.needsUpdate,H=Oe.type;Qe(),Rt.autoReset=A,Oe.enabled=K,Oe.autoUpdate=ce,Oe.needsUpdate=L,Oe.type=H}function je(A){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function pt(A){const K=A.target;K.removeEventListener("dispose",pt),Ht(K)}function Ht(A){Qt(A),Ye.remove(A)}function Qt(A){const K=Ye.get(A).programs;K!==void 0&&(K.forEach(function(ce){Me.releaseProgram(ce)}),A.isShaderMaterial&&Me.releaseShaderCache(A))}this.renderBufferDirect=function(A,K,ce,L,H,re){K===null&&(K=Mt);const Ne=H.isMesh&&H.matrixWorld.determinantAffine()<0,Re=cr(A,K,ce,L,H);ke.setMaterial(L,Ne);let ze=ce.index,qe=1;if(L.wireframe===!0){if(ze=se.getWireframeAttribute(ce),ze===void 0)return;qe=2}const st=ce.drawRange,vt=ce.attributes.position;let Ze=st.start*qe,yt=(st.start+st.count)*qe;re!==null&&(Ze=Math.max(Ze,re.start*qe),yt=Math.min(yt,(re.start+re.count)*qe)),ze!==null?(Ze=Math.max(Ze,0),yt=Math.min(yt,ze.count)):vt!=null&&(Ze=Math.max(Ze,0),yt=Math.min(yt,vt.count));const rn=yt-Ze;if(rn<0||rn===1/0)return;Ee.setup(H,L,Re,ce,ze);let Xt,zt=ye;if(ze!==null&&(Xt=T.get(ze),zt=Ce,zt.setIndex(Xt)),H.isMesh)L.wireframe===!0?(ke.setLineWidth(L.wireframeLinewidth*an()),zt.setMode(Q.LINES)):zt.setMode(Q.TRIANGLES);else if(H.isLine){let dn=L.linewidth;dn===void 0&&(dn=1),ke.setLineWidth(dn*an()),H.isLineSegments?zt.setMode(Q.LINES):H.isLineLoop?zt.setMode(Q.LINE_LOOP):zt.setMode(Q.LINE_STRIP)}else H.isPoints?zt.setMode(Q.POINTS):H.isSprite&&zt.setMode(Q.TRIANGLES);if(H.isBatchedMesh)if(Tt.get("WEBGL_multi_draw"))zt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const dn=H._multiDrawStarts,et=H._multiDrawCounts,yn=H._multiDrawCount,ot=ze?T.get(ze).bytesPerElement:1,Ci=Ye.get(L).currentProgram.getUniforms();for(let vn=0;vn<yn;vn++)Ci.setValue(Q,"_gl_DrawID",vn),zt.render(dn[vn]/ot,et[vn])}else if(H.isInstancedMesh)zt.renderInstances(Ze,rn,H.count);else if(ce.isInstancedBufferGeometry){const dn=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,et=Math.min(ce.instanceCount,dn);zt.renderInstances(Ze,rn,et)}else zt.render(Ze,rn)};function tn(A,K,ce,L){B!==null&&A.isNodeMaterial&&B.setObject(L,A),_t===!0&&we.setState(A,ce,!1),A.transparent===!0&&A.side===Hi&&A.forceSinglePass===!1?(A.side=On,A.needsUpdate=!0,Gn(A,K,L),A.side=As,A.needsUpdate=!0,Gn(A,K,L),A.side=Hi):Gn(A,K,L)}this.compile=function(A,K,ce=null){ce===null&&(ce=A),B!==null&&B.renderStart(A,K,ce),I=_e.get(ce),I.init(K),D.push(I),ce.traverseVisible(function(H){H.isLight&&H.layers.test(K.layers)&&(I.pushLight(H),H.castShadow&&I.pushShadow(H))}),A!==ce&&A.traverseVisible(function(H){H.isLight&&H.layers.test(K.layers)&&(I.pushLight(H),H.castShadow&&I.pushShadow(H))}),I.setupLights(),B!==null&&B.updateLights(I.state.lightsArray),ht=this.localClippingEnabled,_t=we.init(this.clippingPlanes,ht),_t===!0&&we.setGlobalState(this.clippingPlanes,K),B!==null&&Oe.render(I.state.shadowsArray,ce,K);const L=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const re=H.material;if(re)if(Array.isArray(re))for(let Ne=0;Ne<re.length;Ne++){const Re=re[Ne];tn(Re,ce,K,H),L.add(Re)}else tn(re,ce,K,H),L.add(re)}),I=D.pop(),B!==null&&B.renderEnd(),L},this.compileAsync=function(A,K,ce=null){const L=this.compile(A,K,ce);return new Promise(H=>{function re(){if(L.forEach(function(Ne){const ze=Ye.get(Ne).currentProgram;(ze===void 0||ze.isReady())&&L.delete(Ne)}),L.size===0){H(A);return}setTimeout(re,10)}Tt.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let on=null;function qt(A){on&&on(A)}function Bn(){nn.stop()}function wn(){nn.start()}const nn=new Xm;nn.setAnimationLoop(qt),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(A){on=A,Ae.setAnimationLoop(A),A===null?nn.stop():nn.start()},Ae.addEventListener("sessionstart",Bn),Ae.addEventListener("sessionend",wn),this.render=function(A,K){if(K!==void 0&&K.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;B!==null&&B.renderStart(A,K);const ce=Ae.enabled===!0&&Ae.isPresenting===!0,L=J!==null&&(ie===null||ce)&&J.begin(W,ie);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(J===null||J.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(K),K=Ae.getCamera()),A.isScene===!0&&A.onBeforeRender(W,A,K,ie),I=_e.get(A,D.length),I.init(K),I.state.textureUnits=ut.getTextureUnits(),D.push(I),lt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),K.isArrayCamera?nt.setFromArrayCamera(K):Xe.setFromProjectionMatrix(lt,Vi,K.reversedDepth),ht=this.localClippingEnabled,_t=we.init(this.clippingPlanes,ht),z=Be.get(A,M.length),z.init(),M.push(z),this.info.render.frame++,Ae.enabled===!0&&Ae.isPresenting===!0){const Ne=W.xr.getDepthSensingMesh();Ne!==null&&xt(Ne,K,-1/0,W.sortObjects)}xt(A,K,0,W.sortObjects),z.finish(),B!==null&&B.updateLights(I.state.lightsArray),W.sortObjects===!0&&z.sort(Ie,it),jt=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,jt&&j.addToRenderList(z,A),this.info.autoReset===!0&&this.info.reset(),_t===!0&&we.beginShadows();const H=I.state.shadowsArray;if(Oe.render(H,A,K),_t===!0&&we.endShadows(),(L&&J.hasRenderPass())===!1){const Ne=z.opaque,Re=z.transmissive;if(I.setupLights(),K.isArrayCamera){const ze=K.cameras;if(Re.length>0)for(let qe=0,st=ze.length;qe<st;qe++){const vt=ze[qe];Ct(Ne,Re,A,vt)}jt&&j.render(A);for(let qe=0,st=ze.length;qe<st;qe++){const vt=ze[qe];Ut(z,A,vt,vt.viewport)}}else Re.length>0&&Ct(Ne,Re,A,K),jt&&j.render(A),Ut(z,A,K)}ie!==null&&$===0&&(ut.updateMultisampleRenderTarget(ie),ut.updateRenderTargetMipmap(ie)),L&&J.end(W),A.isScene===!0&&A.onAfterRender(W,A,K),Ee.resetDefaultState(),O=-1,ee=null,D.pop(),D.length>0?(I=D[D.length-1],ut.setTextureUnits(I.state.textureUnits),_t===!0&&we.setGlobalState(W.clippingPlanes,I.state.camera)):I=null,M.pop(),M.length>0?z=M[M.length-1]:z=null,B!==null&&B.renderEnd()};function xt(A,K,ce,L){if(A.visible===!1)return;if(A.layers.test(K.layers)){if(A.isGroup)ce=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(K);else if(A.isLight)I.pushLight(A),A.castShadow&&I.pushShadow(A);else if(A.isSprite){const Ne=K.isArrayCamera?nt:Xe;if(!A.frustumCulled||A.intersectsFrustum(Ne)){L&&le.setFromMatrixPosition(A.matrixWorld).applyMatrix4(lt);const Re=Pe.update(A),ze=A.material;ze.visible&&z.push(A,Re,ze,ce,le.z,null,K)}}else if(A.isMesh||A.isLine||A.isPoints){const Ne=K.isArrayCamera?nt:Xe;if(!A.frustumCulled||A.intersectsFrustum(Ne)){const Re=Pe.update(A),ze=A.material;if(L&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),le.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),le.copy(Re.boundingSphere.center)),le.applyMatrix4(A.matrixWorld).applyMatrix4(lt)),Array.isArray(ze)){const qe=Re.groups;for(let st=0,vt=qe.length;st<vt;st++){const Ze=qe[st],yt=ze[Ze.materialIndex];yt&&yt.visible&&z.push(A,Re,yt,ce,le.z,Ze,K)}}else ze.visible&&z.push(A,Re,ze,ce,le.z,null,K)}}}const re=A.children;for(let Ne=0,Re=re.length;Ne<Re;Ne++)xt(re[Ne],K,ce,L)}function Ut(A,K,ce,L){const{opaque:H,transmissive:re,transparent:Ne}=A;I.setupLightsView(ce),_t===!0&&we.setGlobalState(W.clippingPlanes,ce),L&&ke.viewport(k.copy(L)),H.length>0&&Jt(H,K,ce),re.length>0&&Jt(re,K,ce),Ne.length>0&&Jt(Ne,K,ce),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function Ct(A,K,ce,L){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[L.id]===void 0){const Ze=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[L.id]=new rr(1,1,{generateMipmaps:!0,type:Ze?ar:vi,minFilter:ts,samples:Math.max(4,kt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ot.workingColorSpace})}const re=I.state.transmissionRenderTarget[L.id],Ne=L.viewport||k;re.setSize(Ne.z*W.transmissionResolutionScale,Ne.w*W.transmissionResolutionScale);const Re=W.getRenderTarget(),ze=W.getActiveCubeFace(),qe=W.getActiveMipmapLevel();W.setRenderTarget(re),W.getClearColor(Y),oe=W.getClearAlpha(),oe<1&&W.setClearColor(16777215,.5),W.clear(),jt&&j.render(ce);const st=W.toneMapping;W.toneMapping=Rr;const vt=L.viewport;if(L.viewport!==void 0&&(L.viewport=void 0),I.setupLightsView(L),_t===!0&&we.setGlobalState(W.clippingPlanes,L),Jt(A,ce,L),ut.updateMultisampleRenderTarget(re),ut.updateRenderTargetMipmap(re),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let yt=0,rn=K.length;yt<rn;yt++){const Xt=K[yt],{object:zt,geometry:dn,material:et,group:yn}=Xt;if(et.side===Hi&&zt.layers.test(L.layers)){const ot=et.side;et.side=On,et.needsUpdate=!0,en(zt,ce,L,dn,et,yn),et.side=ot,et.needsUpdate=!0,Ze=!0}}Ze===!0&&(ut.updateMultisampleRenderTarget(re),ut.updateRenderTargetMipmap(re))}W.setRenderTarget(Re,ze,qe),W.setClearColor(Y,oe),vt!==void 0&&(L.viewport=vt),W.toneMapping=st}function Jt(A,K,ce){const L=K.isScene===!0?K.overrideMaterial:null;for(let H=0,re=A.length;H<re;H++){const Ne=A[H],{object:Re,geometry:ze,group:qe}=Ne;let st=Ne.material;st.allowOverride===!0&&L!==null&&(st=L),Re.layers.test(ce.layers)&&en(Re,K,ce,ze,st,qe)}}function en(A,K,ce,L,H,re){B!==null&&H.isNodeMaterial&&B.setObject(A,H),A.onBeforeRender(W,K,ce,L,H,re),A.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(W,K,ce,L,A,re),H.transparent===!0&&H.side===Hi&&H.forceSinglePass===!1?(H.side=On,H.needsUpdate=!0,W.renderBufferDirect(ce,K,L,H,A,re),H.side=As,H.needsUpdate=!0,W.renderBufferDirect(ce,K,L,H,A,re),H.side=Hi):W.renderBufferDirect(ce,K,L,H,A,re),A.onAfterRender(W,K,ce,L,H,re)}function Hn(A){let K=0;for(const ce of A)ce.texture!==null&&K++;return K}function Gn(A,K,ce){K.isScene!==!0&&(K=Mt);const L=Ye.get(A),H=I.state.lights,re=I.state.shadowsArray,Ne=H.state.version,Re=Me.getParameters(A,H.state,re,K,ce,I.state.lightProbeGridArray),ze=Me.getProgramCacheKey(Re);let qe=L.programs;L.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?K.environment:null,L.fog=K.fog;const st=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;L.envMap=R.get(A.envMap||L.environment,st),L.envMapRotation=L.environment!==null&&A.envMap===null?K.environmentRotation:A.envMapRotation,qe===void 0&&(A.addEventListener("dispose",pt),qe=new Map,L.programs=qe,L.programVariants=new Map);let vt=qe.get(ze);if(vt!==void 0){if(L.currentProgram===vt&&L.lightsStateVersion===Ne)return lr(A,Re),vt}else Re.uniforms=Me.getUniforms(A),B!==null&&A.isNodeMaterial&&B.build(A,ce,Re),A.onBeforeCompile(Re,W),vt=Me.acquireProgram(Re,ze),qe.set(ze,vt),L.uniforms=Re.uniforms;const Ze=L.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=we.uniform),lr(A,Re),L.needsLights=ji(A),L.lightsStateVersion=Ne,L.needsLights&&(Ze.ambientLightColor.value=H.state.ambient,Ze.lightProbe.value=H.state.probe,Ze.sunLights.value=H.state.sun,Ze.sunLightShadows.value=H.state.sunShadow,Ze.directionalLights.value=H.state.directional,Ze.directionalLightShadows.value=H.state.directionalShadow,Ze.spotLights.value=H.state.spot,Ze.spotLightShadows.value=H.state.spotShadow,Ze.rectAreaLights.value=H.state.rectArea,Ze.ltc_1.value=H.state.rectAreaLTC1,Ze.ltc_2.value=H.state.rectAreaLTC2,Ze.pointLights.value=H.state.point,Ze.pointLightShadows.value=H.state.pointShadow,Ze.hemisphereLights.value=H.state.hemi,Ze.sunShadowMatrix.value=H.state.sunShadowMatrix,Ze.sunShadowCascade.value=H.state.sunShadowCascade,Ze.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ze.spotLightMatrix.value=H.state.spotLightMatrix,Ze.spotLightMap.value=H.state.spotLightMap,Ze.pointShadowMatrix.value=H.state.pointShadowMatrix),L.numLightProbeGrids=Hn(I.state.lightProbeGridArray),L.currentProgram=vt,L.uniformsList=null,vt}function ei(A,K,ce,L,H){const re=Ye.get(A),Ne=re.currentProgram.id+","+L+","+H;let Re=re.programVariants.get(Ne);return Re===void 0?(Re=Gn(A,K,ce),re.programVariants.set(Ne,Re)):(re.currentProgram=Re,re.uniformsList=null,re.outputColorSpace=L,re.toneMapping=H),Re}function Gt(A){if(A.uniformsList===null){const K=A.currentProgram.getUniforms();A.uniformsList=tc.seqWithValue(K.seq,A.uniforms)}return A.uniformsList}function lr(A,K){const ce=Ye.get(A);ce.outputColorSpace=K.outputColorSpace,ce.batching=K.batching,ce.batchingColor=K.batchingColor,ce.instancing=K.instancing,ce.instancingColor=K.instancingColor,ce.instancingMorph=K.instancingMorph,ce.skinning=K.skinning,ce.morphTargets=K.morphTargets,ce.morphNormals=K.morphNormals,ce.morphColors=K.morphColors,ce.morphTargetsCount=K.morphTargetsCount,ce.numClippingPlanes=K.numClippingPlanes,ce.numIntersection=K.numClipIntersection,ce.vertexAlphas=K.vertexAlphas,ce.vertexTangents=K.vertexTangents,ce.toneMapping=K.toneMapping}function cr(A,K,ce,L,H){K.isScene!==!0&&(K=Mt),ut.resetTextureUnits();const re=K.fog,Ne=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?K.environment:null,Re=ie===null?W.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ot.workingColorSpace,ze=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap,qe=R.get(L.envMap||Ne,ze),st=L.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,vt=!!ce.attributes.tangent&&(!!L.normalMap||L.anisotropy>0),Ze=!!ce.morphAttributes.position,yt=!!ce.morphAttributes.normal,rn=!!ce.morphAttributes.color;let Xt=Rr;L.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Xt=W.toneMapping);const zt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,dn=zt!==void 0?zt.length:0,et=Ye.get(L),yn=I.state.lights;if(_t===!0&&(ht===!0||A!==ee)){const It=A===ee&&L.id===O;we.setState(L,A,It)}let ot=!1,Ci=!1;L.version===et.__version?et.needsLights&&et.lightsStateVersion!==yn.state.version||H.isBatchedMesh&&et.batching===!1||!H.isBatchedMesh&&et.batching===!0||H.isBatchedMesh&&et.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&et.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&et.instancing===!1||!H.isInstancedMesh&&et.instancing===!0||H.isSkinnedMesh&&et.skinning===!1||!H.isSkinnedMesh&&et.skinning===!0||H.isInstancedMesh&&et.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&et.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&et.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&et.instancingMorph===!1&&H.morphTexture!==null||et.envMap!==qe||L.fog===!0&&et.fog!==re||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==we.numPlanes||et.numIntersection!==we.numIntersection)||et.vertexAlphas!==st||et.vertexTangents!==vt||et.morphTargets!==Ze||et.morphNormals!==yt||et.morphColors!==rn||et.morphTargetsCount!==dn||et.numLightProbeGrids!==Hn(I.state.lightProbeGridArray)?ot=!0:(et.outputColorSpace!==Re||et.toneMapping!==Xt)&&(Ci=!0):(ot=!0,et.__version=L.version);let vn=et.currentProgram;(ot===!0||Ci===!0)&&(vn=Ci===!0?ei(L,K,H,Re,Xt):Gn(L,K,H),B&&L.isNodeMaterial&&B.onUpdateProgram(L,vn,et));let Wi=!1,ti=!1,ui=!1;const ae=vn.getUniforms(),bt=et.uniforms;if(ke.useProgram(vn.program)&&(Wi=!0,ti=!0,ui=!0),L.id!==O&&(O=L.id,ti=!0),Wi||ee!==A){ke.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ae.setValue(Q,"projectionMatrix",A.projectionMatrix),ae.setValue(Q,"viewMatrix",A.matrixWorldInverse);const Kt=ae.map.cameraPosition;Kt!==void 0&&Kt.setValue(Q,At.setFromMatrixPosition(A.matrixWorld)),kt.logarithmicDepthBuffer&&ae.setValue(Q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&ae.setValue(Q,"isOrthographic",A.isOrthographicCamera===!0),ee!==A&&(ee=A,ti=!0,ui=!0)}if(et.needsLights&&(yn.state.sunShadowMap.length>0&&ae.setValue(Q,"sunShadowMap",yn.state.sunShadowMap,ut),yn.state.directionalShadowMap.length>0&&ae.setValue(Q,"directionalShadowMap",yn.state.directionalShadowMap,ut),yn.state.spotShadowMap.length>0&&ae.setValue(Q,"spotShadowMap",yn.state.spotShadowMap,ut),yn.state.pointShadowMap.length>0&&ae.setValue(Q,"pointShadowMap",yn.state.pointShadowMap,ut)),H.isSkinnedMesh){ae.setOptional(Q,H,"bindMatrix"),ae.setOptional(Q,H,"bindMatrixInverse");const It=H.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),ae.setValue(Q,"boneTexture",It.boneTexture,ut))}H.isBatchedMesh&&(ae.setOptional(Q,H,"batchingTexture"),ae.setValue(Q,"batchingTexture",H._matricesTexture,ut),ae.setOptional(Q,H,"batchingIdTexture"),ae.setValue(Q,"batchingIdTexture",H._indirectTexture,ut),ae.setOptional(Q,H,"batchingColorTexture"),H._colorsTexture!==null&&ae.setValue(Q,"batchingColorTexture",H._colorsTexture,ut));const Wt=ce.morphAttributes;if((Wt.position!==void 0||Wt.normal!==void 0||Wt.color!==void 0)&&Te.update(H,ce,vn),(ti||et.receiveShadow!==H.receiveShadow)&&(et.receiveShadow=H.receiveShadow,ae.setValue(Q,"receiveShadow",H.receiveShadow)),(L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial)&&L.envMap===null&&K.environment!==null&&(bt.envMapIntensity.value=K.environmentIntensity),bt.dfgLUT!==void 0&&(bt.dfgLUT.value=oM()),ti){if(ae.setValue(Q,"toneMappingExposure",W.toneMappingExposure),et.needsLights&&ur(bt,ui),re&&L.fog===!0&&Le.refreshFogUniforms(bt,re),Le.refreshMaterialUniforms(bt,L,be,ge,I.state.transmissionRenderTarget[A.id]),et.needsLights&&et.numLightProbeGrids>0){const It=P;let Kt=0;for(const Sn of I.state.lightProbeGridArray)Sn.texture!==null&&(It.textures[Kt]=Sn.texture,It.min[Kt]=Sn.boundingBox.min,It.max[Kt]=Sn.boundingBox.max,It.resolution[Kt]=Sn.resolution,Kt++);for(const Sn in It)It[Sn].length=Kt;bt.probesSH.value=It.textures,bt.probesMin.value=It.min,bt.probesMax.value=It.max,bt.probesResolution.value=It.resolution}tc.upload(Q,Gt(et),bt,ut)}if(L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(tc.upload(Q,Gt(et),bt,ut),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&ae.setValue(Q,"center",H.center),ae.setValue(Q,"modelViewMatrix",H.modelViewMatrix),ae.setValue(Q,"normalMatrix",H.normalMatrix),ae.setValue(Q,"modelMatrix",H.matrixWorld),L.uniformsGroups!==void 0){const It=L.uniformsGroups;for(let Kt=0,Sn=It.length;Kt<Sn;Kt++){const $i=It[Kt];Ge.update($i,vn),Ge.bind($i,vn)}}return vn}function ur(A,K){A.ambientLightColor.needsUpdate=K,A.lightProbe.needsUpdate=K,A.sunLights.needsUpdate=K,A.sunLightShadows.needsUpdate=K,A.directionalLights.needsUpdate=K,A.directionalLightShadows.needsUpdate=K,A.pointLights.needsUpdate=K,A.pointLightShadows.needsUpdate=K,A.spotLights.needsUpdate=K,A.spotLightShadows.needsUpdate=K,A.rectAreaLights.needsUpdate=K,A.hemisphereLights.needsUpdate=K}function ji(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return de},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(A,K,ce){const L=Ye.get(A);L.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,L.__autoAllocateDepthBuffer===!1&&(L.__useRenderToTexture=!1),Ye.get(A.texture).__webglTexture=K,Ye.get(A.depthTexture).__webglTexture=L.__autoAllocateDepthBuffer?void 0:ce,L.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,K){const ce=Ye.get(A);ce.__webglFramebuffer=K,ce.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(A,K=0,ce=0){ie=A,de=K,$=ce;let L=null,H=!1,re=!1;if(A){const Re=Ye.get(A);if(Re.__useDefaultFramebuffer!==void 0){ke.bindFramebuffer(Q.FRAMEBUFFER,Re.__webglFramebuffer),k.copy(A.viewport),q.copy(A.scissor),pe=A.scissorTest,ke.viewport(k),ke.scissor(q),ke.setScissorTest(pe),O=-1;return}else if(Re.__webglFramebuffer===void 0)ut.setupRenderTarget(A);else if(Re.__hasExternalTextures)ut.rebindTextures(A,Ye.get(A.texture).__webglTexture,Ye.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const st=A.depthTexture;if(Re.__boundDepthTexture!==st){if(st!==null&&Ye.has(st)&&(A.width!==st.image.width||A.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ut.setupDepthRenderbuffer(A)}}const ze=A.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(re=!0);const qe=Ye.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(qe[K])?L=qe[K][ce]:L=qe[K],H=!0):A.samples>0&&ut.useMultisampledRTT(A)===!1?L=Ye.get(A).__webglMultisampledFramebuffer:Array.isArray(qe)?L=qe[ce]:L=qe,k.copy(A.viewport),q.copy(A.scissor),pe=A.scissorTest}else k.copy($e).multiplyScalar(be).floor(),q.copy(De).multiplyScalar(be).floor(),pe=Ve;if(ce!==0&&(L=X),ke.bindFramebuffer(Q.FRAMEBUFFER,L)&&ke.drawBuffers(A,L),ke.viewport(k),ke.scissor(q),ke.setScissorTest(pe),H){const Re=Ye.get(A.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+K,Re.__webglTexture,ce)}else if(re){const Re=K;for(let ze=0;ze<A.textures.length;ze++){const qe=Ye.get(A.textures[ze]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+ze,qe.__webglTexture,ce,Re)}}else if(A!==null&&ce!==0){const Re=Ye.get(A.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Re.__webglTexture,ce)}O=-1};function ln(A){const K=Ye.get(A);return(K.__readFormat!==A.format||K.__readType!==A.type)&&(K.__readFormat=A.format,K.__readType=A.type,K.__formatReadable=kt.textureFormatReadable(A.format),K.__typeReadable=kt.textureTypeReadable(A.type)),K}this.readRenderTargetPixels=function(A,K,ce,L,H,re,Ne,Re=0){if(!(A&&A.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(ze=ze[Ne],Array.isArray(ze)&&(ze=ze[0])),ze){ke.bindFramebuffer(Q.FRAMEBUFFER,ze);try{const qe=A.textures[Re],st=qe.format,vt=qe.type;A.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Re);const Ze=ln(qe);if(Ze.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ze.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=A.width-L&&ce>=0&&ce<=A.height-H&&Q.readPixels(K,ce,L,H,he.convert(st),he.convert(vt),re)}finally{const qe=ie!==null?Ye.get(ie).__webglFramebuffer:null;ke.bindFramebuffer(Q.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(A,K,ce,L,H,re,Ne,Re=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=Ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(ze=ze[Ne],Array.isArray(ze)&&(ze=ze[0])),ze)if(K>=0&&K<=A.width-L&&ce>=0&&ce<=A.height-H){ke.bindFramebuffer(Q.FRAMEBUFFER,ze);const qe=A.textures[Re],st=qe.format,vt=qe.type;A.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Re);const Ze=ln(qe);if(Ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const yt=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,yt),Q.bufferData(Q.PIXEL_PACK_BUFFER,re.byteLength,Q.STREAM_READ),Q.readPixels(K,ce,L,H,he.convert(st),he.convert(vt),0),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null);const rn=ie!==null?Ye.get(ie).__webglFramebuffer:null;ke.bindFramebuffer(Q.FRAMEBUFFER,rn);const Xt=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await C_(Q,Xt,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,yt),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,re),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null),Q.deleteBuffer(yt),Q.deleteSync(Xt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,K=null,ce=0){const L=Math.pow(2,-ce),H=Math.floor(A.image.width*L),re=Math.floor(A.image.height*L),Ne=K!==null?K.x:0,Re=K!==null?K.y:0;ut.setTexture2D(A,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,ce,0,0,Ne,Re,H,re),ke.unbindTexture()},this.copyTextureToTexture=function(A,K,ce=null,L=null,H=0,re=0){let Ne,Re,ze,qe,st,vt,Ze,yt,rn;const Xt=A.isCompressedTexture?A.mipmaps[re]:A.image;if(ce!==null)Ne=ce.max.x-ce.min.x,Re=ce.max.y-ce.min.y,ze=ce.isBox3?ce.max.z-ce.min.z:1,qe=ce.min.x,st=ce.min.y,vt=ce.isBox3?ce.min.z:0;else{const ae=Math.pow(2,-H);Ne=Math.floor(Xt.width*ae),Re=Math.floor(Xt.height*ae),A.isDataArrayTexture?ze=Xt.depth:A.isData3DTexture?ze=Math.floor(Xt.depth*ae):ze=1,qe=0,st=0,vt=0}L!==null?(Ze=L.x,yt=L.y,rn=L.z):(Ze=0,yt=0,rn=0);const zt=he.convert(K.format),dn=he.convert(K.type);let et;K.isData3DTexture?(ut.setTexture3D(K,0),et=Q.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(ut.setTexture2DArray(K,0),et=Q.TEXTURE_2D_ARRAY):(ut.setTexture2D(K,0),et=Q.TEXTURE_2D),ke.activeTexture(Q.TEXTURE0),ke.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,K.flipY),ke.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),ke.pixelStorei(Q.UNPACK_ALIGNMENT,K.unpackAlignment);const yn=ke.getParameter(Q.UNPACK_ROW_LENGTH),ot=ke.getParameter(Q.UNPACK_IMAGE_HEIGHT),Ci=ke.getParameter(Q.UNPACK_SKIP_PIXELS),vn=ke.getParameter(Q.UNPACK_SKIP_ROWS),Wi=ke.getParameter(Q.UNPACK_SKIP_IMAGES);ke.pixelStorei(Q.UNPACK_ROW_LENGTH,Xt.width),ke.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Xt.height),ke.pixelStorei(Q.UNPACK_SKIP_PIXELS,qe),ke.pixelStorei(Q.UNPACK_SKIP_ROWS,st),ke.pixelStorei(Q.UNPACK_SKIP_IMAGES,vt);const ti=A.isDataArrayTexture||A.isData3DTexture,ui=K.isDataArrayTexture||K.isData3DTexture;if(A.isDepthTexture){const ae=Ye.get(A),bt=Ye.get(K),Wt=Ye.get(ae.__renderTarget),It=Ye.get(bt.__renderTarget);ke.bindFramebuffer(Q.READ_FRAMEBUFFER,Wt.__webglFramebuffer),ke.bindFramebuffer(Q.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Kt=0;Kt<ze;Kt++)ti&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Ye.get(A).__webglTexture,H,vt+Kt),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Ye.get(K).__webglTexture,re,rn+Kt)),Q.blitFramebuffer(qe,st,qe+Ne,st+Re,Ze,yt,Ze+Ne,yt+Re,Q.DEPTH_BUFFER_BIT,Q.NEAREST);ke.bindFramebuffer(Q.READ_FRAMEBUFFER,null),ke.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(H!==0||A.isRenderTargetTexture||Ye.has(A)){const ae=Ye.get(A),bt=Ye.get(K);ke.bindFramebuffer(Q.READ_FRAMEBUFFER,F),ke.bindFramebuffer(Q.DRAW_FRAMEBUFFER,te);for(let Wt=0;Wt<ze;Wt++)ti?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,ae.__webglTexture,H,vt+Wt):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,ae.__webglTexture,H),ui?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,bt.__webglTexture,re,rn+Wt):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,bt.__webglTexture,re),H!==0?Q.blitFramebuffer(qe,st,qe+Ne,st+Re,Ze,yt,Ze+Ne,yt+Re,Q.COLOR_BUFFER_BIT,Q.NEAREST):ui?Q.copyTexSubImage3D(et,re,Ze,yt,rn+Wt,qe,st,Ne,Re):Q.copyTexSubImage2D(et,re,Ze,yt,qe,st,Ne,Re);ke.bindFramebuffer(Q.READ_FRAMEBUFFER,null),ke.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else ui?A.isDataTexture||A.isData3DTexture?Q.texSubImage3D(et,re,Ze,yt,rn,Ne,Re,ze,zt,dn,Xt.data):K.isCompressedArrayTexture?Q.compressedTexSubImage3D(et,re,Ze,yt,rn,Ne,Re,ze,zt,Xt.data):Q.texSubImage3D(et,re,Ze,yt,rn,Ne,Re,ze,zt,dn,Xt):A.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,re,Ze,yt,Ne,Re,zt,dn,Xt.data):A.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,re,Ze,yt,Xt.width,Xt.height,zt,Xt.data):Q.texSubImage2D(Q.TEXTURE_2D,re,Ze,yt,Ne,Re,zt,dn,Xt);ke.pixelStorei(Q.UNPACK_ROW_LENGTH,yn),ke.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,ot),ke.pixelStorei(Q.UNPACK_SKIP_PIXELS,Ci),ke.pixelStorei(Q.UNPACK_SKIP_ROWS,vn),ke.pixelStorei(Q.UNPACK_SKIP_IMAGES,Wi),re===0&&K.generateMipmaps===!0&&K.mipmapsAutoUpdate===!0&&Q.generateMipmap(et),ke.unbindTexture()},this.initRenderTarget=function(A){Ye.get(A).__webglFramebuffer===void 0&&ut.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ut.setTextureCube(A,0):A.isData3DTexture?ut.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ut.setTexture2DArray(A,0):ut.setTexture2D(A,0),ke.unbindTexture()},this.resetState=function(){de=0,$=0,ie=null,ke.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ot._getUnpackColorSpace()}}function cM(s,e){const t=document.createElement("canvas");t.width=2048,t.height=1024;const r=t.getContext("2d");let o;e?s==="celestial-cyan"?o=["#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#f0f9ff","#dbeafe"]:s==="supernova-sunset"?o=["#fff1f2","#fecdd3","#fda4af","#fb7185","#e11d48","#9f1239","#fff7ed","#fed7aa"]:s==="nocturne-silver"?o=["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#71717a","#ffffff","#e4e4e7"]:s==="cyberpunk-neon"?o=["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#d946ef","#c026d3","#a21caf"]:s==="solar-gold"?o=["#fffbeb","#fef3c7","#fde68a","#fcd34d","#f59e0b","#d97706","#b45309","#78350f"]:s==="emerald-aurora"?o=["#f0fdf4","#dcfce7","#bbf7d0","#86efac","#4ade80","#22c55e","#16a34a","#15803d"]:s==="pure-pitch-black"?o=["#ffffff","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#71717a","#3f3f46","#18181b"]:o=["#fffbeb","#fef3c7","#fde68a","#fcd34d","#f59e0b","#d97706","#fff7ed","#ffedd5"]:s==="celestial-cyan"?o=["#020b14","#041d33","#083358","#0e4a7d","#0284c7","#38bdf8","#075985","#0c4a6e","#06b6d4"]:s==="supernova-sunset"?o=["#12040d","#2b061c","#4a0a2f","#771146","#be123c","#f43f5e","#ea580c","#fb923c","#450a22"]:s==="nocturne-silver"?o=["#060609","#111119","#1e1e2d","#2f2f45","#4d4d6e","#7b7b9e","#a6a6c7","#252538","#d4d4e8"]:s==="cyberpunk-neon"?o=["#080014","#16002c","#2c004d","#550080","#9333ea","#db2777","#f43f5e","#06b6d4","#22d3ee"]:s==="solar-gold"?o=["#0d0500","#1f0c00","#3b1700","#5e2500","#92400e","#d97706","#f59e0b","#fbbf24","#fef08a"]:s==="emerald-aurora"?o=["#020d06","#052110","#0a381d","#14532d","#16a34a","#22c55e","#4ade80","#10b981","#34d399"]:s==="pure-pitch-black"?o=["#000000","#050505","#0a0a0a","#121212","#1a1a1a","#262626","#404040","#737373","#a3a3a3"]:o=["#080415","#150933","#270e59","#3e1785","#5b21b6","#7c3aed","#a855f7","#c084fc","#2e1065","#d8b4fe"];const l=r.createLinearGradient(0,0,0,t.height);o.forEach((h,S)=>{l.addColorStop(S/(o.length-1),h)}),r.fillStyle=l,r.fillRect(0,0,t.width,t.height);const u=72;for(let h=0;h<u;h++){const b=h/u*t.height,w=t.height/u*(1.2+Math.sin(h*.7)*.5),v=o[h*3%o.length];r.fillStyle=v,r.globalAlpha=.25+Math.sin(h*.9)*.2,r.beginPath(),r.moveTo(0,b);const y=32;for(let N=0;N<=y;N++){const U=N/y*t.width,P=Math.sin(N*.8+h*1.5)*7+Math.cos(N*1.6+h*2.1)*4;r.lineTo(U,b+P)}r.lineTo(t.width,b+w),r.lineTo(0,b+w),r.closePath(),r.fill()}r.globalAlpha=e?.25:.4,r.fillStyle="#ffffff";for(let h=0;h<48;h++){const S=Math.random()*t.width,b=Math.random()*t.height,w=60+Math.random()*180,v=1.5+Math.random()*3.5;r.beginPath(),r.ellipse(S,b,w,v,Math.sin(b*.05)*.15,0,Math.PI*2),r.fill()}const f=t.width*.62,g=t.height*.58,m=85,_=r.createRadialGradient(f,g,5,f,g,m);e?(_.addColorStop(0,"#ffffff"),_.addColorStop(.4,o[o.length-2]),_.addColorStop(.8,o[o.length-1]),_.addColorStop(1,"rgba(255,255,255,0)")):(_.addColorStop(0,"#ffffff"),_.addColorStop(.3,o[o.length-3]||"#c084fc"),_.addColorStop(.7,o[o.length-1]||"#7c3aed"),_.addColorStop(1,"rgba(0,0,0,0)")),r.globalAlpha=.85,r.fillStyle=_,r.beginPath(),r.ellipse(f,g,m*1.6,m*.8,-.15,0,Math.PI*2),r.fill(),r.strokeStyle=e?"rgba(200, 150, 100, 0.45)":"rgba(255, 255, 255, 0.60)",r.lineWidth=2.5;for(let h=0;h<3;h++){r.beginPath();for(let S=0;S<Math.PI*2;S+=.2){const b=S/(Math.PI*2)*m*.7,w=f+Math.cos(S+h*2.1)*b*1.5,v=g+Math.sin(S+h*2.1)*b*.7;S===0?r.moveTo(w,v):r.lineTo(w,v)}r.stroke()}const E=new mc(t);return E.wrapS=va,E.wrapT=li,E}function uM(s,e){const t=document.createElement("canvas");t.width=1024,t.height=64;const r=t.getContext("2d");r.clearRect(0,0,t.width,t.height);let o,l;e?(o="rgba(217, 119, 6, 0.45)",l="rgba(245, 158, 11, 0.85)"):s==="celestial-cyan"?(o="rgba(56, 189, 248, 0.45)",l="rgba(186, 230, 253, 0.90)"):s==="supernova-sunset"?(o="rgba(251, 146, 60, 0.45)",l="rgba(254, 205, 211, 0.90)"):s==="nocturne-silver"?(o="rgba(212, 212, 216, 0.45)",l="rgba(255, 255, 255, 0.90)"):s==="cyberpunk-neon"?(o="rgba(6, 182, 212, 0.50)",l="rgba(244, 63, 94, 0.95)"):s==="solar-gold"?(o="rgba(245, 158, 11, 0.50)",l="rgba(254, 240, 138, 0.95)"):s==="emerald-aurora"?(o="rgba(16, 185, 129, 0.45)",l="rgba(110, 231, 183, 0.90)"):s==="pure-pitch-black"?(o="rgba(115, 115, 115, 0.35)",l="rgba(245, 245, 245, 0.90)"):(o="rgba(192, 132, 252, 0.50)",l="rgba(243, 232, 255, 0.92)");for(let f=0;f<t.width;f++){const g=f/t.width;let m=0;g<.22?m=.12+Math.sin(g*60)*.08:g>=.22&&g<.65?m=.75+Math.sin(g*120)*.18+Math.cos(g*240)*.06:g>=.65&&g<.72?m=.02:g>=.72&&g<.95?g>.85&&g<.87?m=.05:m=.55+Math.sin(g*100)*.15:m=.2+Math.sin(g*200)*.15,r.fillStyle=m>.6?l:o,r.globalAlpha=Math.max(0,Math.min(1,m)),r.fillRect(f,0,1,t.height)}const u=new mc(t);return u.wrapS=li,u.wrapT=li,u}function dM(s){const e=document.createElement("canvas");e.width=2048,e.height=1024;const t=e.getContext("2d");t.fillStyle=s?"#d6d3d1":"#888899",t.fillRect(0,0,e.width,e.height),t.fillStyle=s?"#a8a29e":"#474755",[{x:.35,y:.4,rx:240,ry:160},{x:.55,y:.35,rx:280,ry:190},{x:.7,y:.45,rx:200,ry:140},{x:.4,y:.65,rx:220,ry:150},{x:.6,y:.6,rx:260,ry:180}].forEach(u=>{t.globalAlpha=.65,t.beginPath(),t.ellipse(u.x*e.width,u.y*e.height,u.rx,u.ry,.2,0,Math.PI*2),t.fill()});const o=320;for(let u=0;u<o;u++){const f=Math.random()*e.width,g=Math.random()*e.height,m=4+Math.random()*32;if(t.globalAlpha=.55,t.fillStyle=s?"#57534e":"#22222a",t.beginPath(),t.arc(f,g,m,0,Math.PI*2),t.fill(),t.globalAlpha=.7,t.strokeStyle=s?"#ffffff":"#e2e8f0",t.lineWidth=Math.max(1,m*.2),t.beginPath(),t.arc(f,g,m,Math.PI*.75,Math.PI*1.75),t.stroke(),m>24){t.globalAlpha=.25,t.strokeStyle=s?"#ffffff":"#cbd5e1",t.lineWidth=1;for(let _=0;_<8;_++){const E=_/8*Math.PI*2,h=m*(3+Math.random()*5);t.beginPath(),t.moveTo(f+Math.cos(E)*m,g+Math.sin(E)*m),t.lineTo(f+Math.cos(E)*h,g+Math.sin(E)*h),t.stroke()}}}const l=new mc(e);return l.wrapS=va,l.wrapT=li,l}function fM(s){const e=document.createElement("canvas");e.width=2048,e.height=1024;const t=e.getContext("2d");t.fillStyle=s?"#991b1b":"#450a0a",t.fillRect(0,0,e.width,e.height),t.fillStyle=s?"#7f1d1d":"#1c0404",[{x:.35,y:.4,rx:240,ry:160},{x:.55,y:.35,rx:280,ry:190},{x:.7,y:.45,rx:200,ry:140},{x:.4,y:.65,rx:220,ry:150},{x:.6,y:.6,rx:260,ry:180}].forEach(u=>{t.globalAlpha=.75,t.beginPath(),t.ellipse(u.x*e.width,u.y*e.height,u.rx,u.ry,.2,0,Math.PI*2),t.fill()});const o=280;for(let u=0;u<o;u++){const f=Math.random()*e.width,g=Math.random()*e.height,m=4+Math.random()*30;t.globalAlpha=.6,t.fillStyle="#1c0404",t.beginPath(),t.arc(f,g,m,0,Math.PI*2),t.fill(),t.globalAlpha=.85,t.strokeStyle="#f87171",t.lineWidth=Math.max(1,m*.2),t.beginPath(),t.arc(f,g,m,Math.PI*.75,Math.PI*1.75),t.stroke()}const l=new mc(e);return l.wrapS=va,l.wrapT=li,l}const hM=()=>{const s=xe.useRef(null),{wallpaperSettings:e,appTheme:t,isEcoSleeping:r}=ss(),o=xe.useRef(r);o.current=r;const l=xe.useRef(!1),u=xe.useRef(null);xe.useEffect(()=>{!r&&!l.current&&u.current&&u.current()},[r]);const f=e.celestialBody||"ringed-planet",g=e.palette||"cosmic-royal",m=t==="light";return xe.useEffect(()=>{if(!s.current)return;if(f==="none"){s.current.innerHTML="";return}const _=s.current;_.innerHTML="";const E=_.clientWidth||window.innerWidth,h=_.clientHeight||window.innerHeight,S=E<768,b=new $_,w=new Oi(45,E/h,.1,100);w.position.set(0,0,10);const v=new lM({alpha:!0,antialias:!0,powerPreference:"high-performance"});v.setSize(E,h),v.setPixelRatio(Math.min(window.devicePixelRatio||1,1.25)),v.outputColorSpace=xi,_.appendChild(v.domElement);const y=new fy(m?16775149:16777215,m?2.8:2.5);b.add(y);const N=new hy(m?14870768:g==="celestial-cyan"?662832:g==="cyberpunk-neon"?2031672:g==="solar-gold"?2363651:g==="emerald-aurora"?270096:g==="pure-pitch-black"?197379:1577516,m?.7:.4);b.add(N);const U=new so;b.add(U);let P=3.4,z=1.8,I=.65;const M=e.celestialPosition||"default";M==="upper-right"?(P=S?1.2:3.4,z=S?2.3:1.8,y.position.set(-8,5,4)):M==="upper-left"?(P=S?-1.2:-3.3,z=S?2.5:2,y.position.set(-8,2,-2)):M==="zenith-center"?(P=0,z=S?2.5:2.4,y.position.set(0,0,4)):f==="ringed-planet"||f==="pulsar-star"?(P=S?1.2:3.4,z=S?2.3:1.8,I=S?.48:.68,y.position.set(-8,5,4)):f==="crescent-moon"||f==="blood-moon"?(P=S?-1.2:-3.3,z=S?2.5:2,I=S?.42:.6,y.position.set(-8,2,-2)):f==="eclipse-corona"&&(P=0,z=S?2.5:2.4,I=S?.45:.64,y.position.set(0,0,4));const D=e.celestialScaleMultiplier||1;I*=D,U.position.set(P,z,0),U.scale.set(I,I,I);let J=0,W=0,V=0,B=0;const X=q=>{const pe=q.clientX/window.innerWidth*2-1;J=(-(q.clientY/window.innerHeight)*2+1)*.18,W=pe*.25};window.addEventListener("mousemove",X,{passive:!0});let F=null,te=null,de=null,$=null;if(f==="ringed-planet"){const q=new zi(1,64,64),pe=cM(g,m),Y=new Vl({map:pe,roughness:.55,metalness:.08});F=new Tn(q,Y),U.add(F);const oe=new zi(1.04,48,48),me=new Ti({vertexShader:`
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
        `,uniforms:{glowColor:{value:new Lt(m?g==="celestial-cyan"?165063:14251782:g==="celestial-cyan"?3718648:g==="supernova-sunset"?16007006:11032055)}},transparent:!0,blending:Es,side:On}),ge=new Tn(oe,me);U.add(ge);const be=new zf(1.35,2.85,128),Ie=be.attributes.position,it=be.attributes.uv;for(let nt=0;nt<Ie.count;nt++){const _t=Ie.getX(nt),ht=Ie.getY(nt),At=(Math.sqrt(_t*_t+ht*ht)-1.35)/(2.85-1.35);it.setXY(nt,At,.5)}it.needsUpdate=!0;const $e=uM(g,m),De=new Vl({map:$e,side:Hi,transparent:!0,opacity:.92,roughness:.45,metalness:.05});te=new Tn(be,De),te.rotation.x=Math.PI*.48,te.rotation.y=-.15,U.add(te);const Ve=new zi(.11,24,24),Xe=new Vl({color:m?14078929:13095678,roughness:.8});de=new Tn(Ve,Xe),U.add(de),U.rotation.z=-.42}else if(f==="crescent-moon"){const q=new zi(1,64,64),pe=dM(m),Y=new Ti({vertexShader:`
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
        `,uniforms:{moonTexture:{value:pe},sunDir:{value:new ve(-1.6,.35,-.65).normalize()},sunlitColor:{value:new Lt(m?16776171:16710083)},earthshineColor:{value:new Lt(m?9741240:6583435)},earthshineAlpha:{value:m?.07:.05}},transparent:!0});F=new Tn(q,Y),U.add(F);const oe=new zi(1.04,48,48),me=new Ti({vertexShader:`
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
        `,uniforms:{sunDir:{value:new ve(-1.6,.35,-.65).normalize()},glowColor:{value:new Lt(m?16096779:16707722)}},transparent:!0,blending:Es,side:On}),ge=new Tn(oe,me);U.add(ge),U.rotation.y=.45,U.rotation.z=-.22}else if(f==="eclipse-corona"){const q=new yo(3.8,3.8),pe=new Ti({vertexShader:`
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
        `,uniforms:{uTime:{value:0},uColor:{value:new Lt(m?14251782:16638023)}},transparent:!0,blending:Es,depthWrite:!1});$=new Tn(q,pe),U.add($);const Y=new zi(.96,48,48),oe=new ec({color:m?1579035:328970});F=new Tn(Y,oe),U.add(F)}else if(f==="blood-moon"){const q=new zi(1,64,64),pe=fM(m),Y=new Vl({map:pe,roughness:.7,metalness:.05});F=new Tn(q,Y),U.add(F);const oe=new zi(1.05,48,48),me=new Ti({vertexShader:`
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
        `,transparent:!0,blending:Es,side:On}),ge=new Tn(oe,me);U.add(ge),U.rotation.y=.5,U.rotation.z=-.2}else if(f==="pulsar-star"){const q=new zi(.72,48,48),pe=new ec({color:m?165063:14742270});F=new Tn(q,pe),U.add(F);const Y=new Uf(1.4,5,32,1,!0),oe=new ec({color:m?223649:3718648,transparent:!0,opacity:.5,side:Hi,blending:Es}),me=new Tn(Y,oe);me.position.y=2.6,U.add(me);const ge=new Tn(Y,oe);ge.position.y=-2.6,ge.rotation.x=Math.PI,U.add(ge),$=me}let ie;const O=performance.now(),ee=()=>{if(o.current){v.render(b,w),l.current=!1;return}if(l.current=!0,ie=requestAnimationFrame(ee),document.hidden)return;const q=(performance.now()-O)*.001;V+=(J-V)*.06,B+=(W-B)*.06,U.position.x=P+B*.8,U.position.y=z+V*.8;const pe=e.rotationSpeed||"standard",Y=pe==="static"?0:pe==="slow"?.35:pe==="fast"?2.4:1;if(F&&(F.rotation.y+=.0012*Y),de){const me=q*.35*Y;de.position.x=Math.cos(me)*4.8,de.position.z=Math.sin(me)*4.8*.4,de.position.y=Math.sin(me*1.5)*.6}$&&$.material.uniforms&&($.material.uniforms.uTime.value=q),v.render(b,w)};u.current=()=>{l.current||(l.current=!0,ee())},ee();const k=()=>{if(!_||!v||!w)return;const q=_.clientWidth||window.innerWidth,pe=_.clientHeight||window.innerHeight;w.aspect=q/pe,w.updateProjectionMatrix(),v.setSize(q,pe),v.setPixelRatio(Math.min(window.devicePixelRatio||1,1.25));const Y=q<768,oe=e.celestialPosition||"default";oe==="upper-right"?(P=Y?1.2:3.4,z=Y?2.3:1.8):oe==="upper-left"?(P=Y?-1.2:-3.3,z=Y?2.5:2):oe==="zenith-center"?(P=0,z=Y?2.5:2.4):f==="ringed-planet"||f==="pulsar-star"?(P=Y?1.2:3.4,z=Y?2.3:1.8,I=Y?.48:.68):f==="crescent-moon"||f==="blood-moon"?(P=Y?-1.2:-3.3,z=Y?2.5:2,I=Y?.42:.6):f==="eclipse-corona"&&(P=0,z=Y?2.5:2.4,I=Y?.45:.64),I*=e.celestialScaleMultiplier||1,U.position.set(P,z,0),U.scale.set(I,I,I)};return window.addEventListener("resize",k,{passive:!0}),()=>{u.current=null,l.current=!1,cancelAnimationFrame(ie),window.removeEventListener("mousemove",X),window.removeEventListener("resize",k),v.dispose(),_&&v.domElement&&_.contains(v.domElement)&&_.removeChild(v.domElement)}},[f,g,m,e.celestialPosition,e.celestialScaleMultiplier,e.rotationSpeed]),d.jsx("div",{ref:s,className:"fixed inset-0 pointer-events-none z-[1] select-none overflow-hidden","aria-hidden":"true"})};/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=s=>s==null?void 0:s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function mM(s,e,t=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:pM(s),size:24,node:e,...t.length>0?{aliases:t}:{}}}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=s=>{let e="",t=!1;for(const r of s){if(r==="-"||r==="_"||r<=" "){t=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=t?r.toUpperCase():r,t=!1}return e};/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=s=>{const e=gM(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Nd(s){return s!=null}function vM(s,e={}){var h,S;const t=e.attributeNames??{},r=b=>t[b]??b,o=s.size??s.width??Ms.width,l=s.size??s.height??Ms.height,u=((h=s.aliases)==null?void 0:h.filter(b=>typeof b=="string"&&b.trim()!=="").map(b=>`lucide-${b}`))??[],f=[...s.name?[`lucide-${s.name}`]:[],...u],g=((S=e.className)==null?void 0:S.split(" ").filter(Boolean))??[],m=e.includeDefaultClasses===!1?yf(...g):yf("lucide",...f,...g),_=e.absoluteStrokeWidth?Number(e.strokeWidth??Ms["stroke-width"])*Number(s.size??s.width??Ms.width)/Number(e.size??e.width??Ms.width):e.strokeWidth??Ms["stroke-width"];return["svg",{...Object.entries(Ms).reduce((b,[w,v])=>(b[r(w)]=v,b),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&Nd(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&Nd(e.width)&&{[r("width")]:e.width},..."height"in e&&Nd(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:_,...m&&{[r("class")]:m},[r("viewBox")]:`0 0 ${o} ${l}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},s.node.map(b=>{const[w,v,y]=b,N=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...v}:v;return y?[w,N,y]:[w,N]})]}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function _M(s,e={}){return vM(s,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},SM=xe.createContext({}),bM=()=>xe.useContext(SM),wM=xe.forwardRef(({color:s,size:e,width:t,height:r,strokeWidth:o,absoluteStrokeWidth:l,nonScalingStroke:u,className:f="",children:g,iconNode:m=[],icon:_={node:m,aliases:[],size:24},...E},h)=>{const{size:S=24,strokeWidth:b=2,absoluteStrokeWidth:w=!1,nonScalingStroke:v=!1,color:y="currentColor",className:N=""}=bM()??{},U=!!g||yM(E),[P,z,I=[]]=_M(_,{color:s??y,width:t??e??S,height:r??e??S,strokeWidth:o??b,absoluteStrokeWidth:l??w,nonScalingStroke:u??v,className:yf(N,f),hasA11yProp:U,attributes:E});return xe.createElement(P,{ref:h,...z},[...I.map(([M,D])=>xe.createElement(M,D)),...Array.isArray(g)?g:[g]])});/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Pt(s,e=[],t=[]){const r=typeof s=="string"?mM(s,e,t):s,o=xe.forwardRef(({className:l,...u},f)=>xe.createElement(wM,{ref:f,icon:r,className:l,...u}));return r.name&&(o.displayName=xM(r.name)),o}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg={name:"bell",size:24,node:[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]};rg.node;const MM=Pt(rg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg={name:"calendar-clock",size:24,node:[["path",{d:"M16 14v2.2l1.6 1",key:"fo4ql5"}],["path",{d:"M16 2v3",key:"otl347"}],["path",{d:"M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338",key:"7hb8p4"}],["path",{d:"M3 9h5.859",key:"numkqi"}],["path",{d:"M8 2v3",key:"1ioesn"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]};sg.node;const am=Pt(sg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag={name:"calendar",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]]};ag.node;const EM=Pt(ag);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};og.node;const Cr=Pt(og);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};lg.node;const cg=Pt(lg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};ug.node;const uc=Pt(ug);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg={name:"coffee",size:24,node:[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]};dg.node;const TM=Pt(dg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg={name:"droplets",size:24,node:[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]};fg.node;const CM=Pt(fg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg={name:"external-link",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]};hg.node;const AM=Pt(hg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg={name:"eye-off",size:24,node:[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]};pg.node;const RM=Pt(pg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg={name:"face-slightly-smiling",size:24,node:[["path",{d:"M15 10V9",key:"4dkmfx"}],["path",{d:"M16.472 15a6 6 0 01-8.943 0",key:"7qomzy"}],["path",{d:"M9 10V9",key:"1lazqi"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["smile"]};mg.node;const NM=Pt(mg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg={name:"flame",size:24,node:[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]]};gg.node;const xg=Pt(gg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg={name:"headphones",size:24,node:[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]};vg.node;const dc=Pt(vg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g={name:"leaf",size:24,node:[["path",{d:"M11 20a10 10 0 0010-10 25.9 25.9 0 00-1.04-7.281 1 1 0 00-1.755-.325C15.833 5.5 13 5.5 9.8 6.1A7 7 0 0011 20",key:"1wjnjv"}],["path",{d:"M2 21a5 5 0 012.911-4.544C7.613 15.212 8.351 15.24 11 13",key:"c1ejpn"}]]};_g.node;const PM=Pt(_g);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg={name:"list-music",size:24,node:[["path",{d:"M16 5H3",key:"m91uny"}],["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M11 19H3",key:"zflm78"}],["path",{d:"M21 16V5",key:"yxg4q8"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]};yg.node;const om=Pt(yg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg={name:"maximize-2",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]};Sg.node;const lm=Pt(Sg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg={name:"minimize-2",size:24,node:[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]]};bg.node;const wg=Pt(bg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};Mg.node;const fc=Pt(Mg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};Eg.node;const tr=Pt(Eg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};Tg.node;const Bi=Pt(Tg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};Cg.node;const nc=Pt(Cg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag={name:"quote",size:24,node:[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]};Ag.node;const DM=Pt(Ag);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg={name:"radio",size:24,node:[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};Rg.node;const cm=Pt(Rg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};Ng.node;const Tr=Pt(Ng);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg={name:"skip-back",size:24,node:[["path",{d:"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",key:"15892j"}],["path",{d:"M3 20V4",key:"1ptbpl"}]]};Pg.node;const Sf=Pt(Pg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg={name:"skip-forward",size:24,node:[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]]};Dg.node;const hc=Pt(Dg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};Lg.node;const Ig=Pt(Lg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};kg.node;const Cs=Pt(kg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug={name:"square-check-big",size:24,node:[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-square"]};Ug.node;const LM=Pt(Ug);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg={name:"star",size:24,node:[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]};zg.node;const IM=Pt(zg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};Fg.node;const Og=Pt(Fg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg={name:"sunrise",size:24,node:[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]};Bg.node;const kM=Pt(Bg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg={name:"target",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};Hg.node;const UM=Pt(Hg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg={name:"timer",size:24,node:[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]};Gg.node;const zM=Pt(Gg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};Vg.node;const lo=Pt(Vg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg={name:"tv",size:24,node:[["path",{d:"m17 2-5 5-5-5",key:"16satq"}],["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",key:"1e6viu"}]]};jg.node;const FM=Pt(jg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg={name:"user",size:24,node:[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]};Wg.node;const $g=Pt(Wg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};Xg.node;const bf=Pt(Xg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};Yg.node;const qg=Pt(Yg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Kg.node;const Ar=Pt(Kg),OM=()=>{const{activeYouTubeItem:s,isYouTubePlaying:e,youtubeVolume:t,isYouTubeMuted:r,setYouTubeIsPlaying:o,setYouTubePlayerReady:l,showYouTubePreview:u,setShowYouTubePreview:f,toggleYouTubePlay:g,nextYouTubeTrack:m,prevYouTubeTrack:_,toggleYouTubeMute:E,setYouTubeVolume:h,audioSource:S}=ss(),b=xe.useRef(null),[w,v]=xe.useState(null),y=xe.useRef((s==null?void 0:s.id)||null),N=xe.useRef(null),[U,P]=xe.useState(!1),z=xe.useRef(!1),I=xe.useCallback((X,F="")=>{try{b.current&&b.current.contentWindow&&b.current.contentWindow.postMessage(JSON.stringify({event:"command",func:X,args:F}),"*")}catch(te){console.warn("[YouTube Audio] Command error:",te)}},[]),M=xe.useCallback((X,F)=>{const te=F?"1":"0",de=typeof window<"u"&&window.location.origin?`&origin=${encodeURIComponent(window.location.origin)}`:"";if(!X)return`https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=${te}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${de}`;if(X.type==="playlist"&&X.playlistId)return`https://www.youtube.com/embed/videoseries?list=${encodeURIComponent(X.playlistId)}&autoplay=${te}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${de}`;if(X.type==="video_in_playlist"&&X.videoId&&X.playlistId)return`https://www.youtube.com/embed/${encodeURIComponent(X.videoId)}?list=${encodeURIComponent(X.playlistId)}&autoplay=${te}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${de}`;const $=X.videoId||"jfKfPfyJRdk";return`https://www.youtube.com/embed/${encodeURIComponent($)}?autoplay=${te}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${de}`},[]),[D,J]=xe.useState(()=>M(s,!1)),W=xe.useCallback(()=>{I("unMute",""),I("setVolume",[t||75]),r&&E()},[I,t,r,E]);xe.useEffect(()=>(window.__forMeSendYouTubeCommand=I,window.__forMeForceUnmute=W,l(!0),()=>{delete window.__forMeSendYouTubeCommand,delete window.__forMeForceUnmute}),[I,W,l]),xe.useEffect(()=>{if(!s||y.current===s.id)return;y.current=s.id,v(null);const X=M(s,e);N.current=X,J(X),Fi.updateMetadata({title:s.title,artist:s.channel||"FOR ME Sanctuary",album:s.type==="playlist"?"YouTube Playlist":"YouTube Stream",artworkUrl:s.thumbnailUrl,onPlay:()=>{o(!0),I("playVideo",""),W()},onPause:()=>{o(!1),I("pauseVideo","")},onNext:s.type==="playlist"||s.type==="video_in_playlist"?m:void 0,onPrev:s.type==="playlist"||s.type==="video_in_playlist"?_:void 0})},[s,M,e,m,_,I,o,W]),xe.useEffect(()=>{if(z.current){z.current=!1;return}e?(I("playVideo",""),setTimeout(()=>{I("unMute",""),I("setVolume",[t||75])},50),Fi.setPlaybackState("playing")):(I("pauseVideo",""),Fi.setPlaybackState("paused"))},[e,I,t]),xe.useEffect(()=>{I("setVolume",[t||75])},[t,I]),xe.useEffect(()=>{r?I("mute",""):(I("unMute",""),I("setVolume",[t||75]))},[r,t,I]),xe.useEffect(()=>{const X=F=>{if(!(!F.data||typeof F.data!="string"))try{const te=JSON.parse(F.data);te.event==="onStateChange"?te.info===1?(z.current=!0,o(!0),v(null),Fi.setPlaybackState("playing"),r||(I("unMute",""),I("setVolume",[t||75]))):te.info===2?document.hidden||(z.current=!0,o(!1),Fi.setPlaybackState("paused")):te.info===0&&((s==null?void 0:s.type)==="playlist"||(s==null?void 0:s.type)==="video_in_playlist"?Fi.setPlaybackState("playing"):(z.current=!0,o(!1),Fi.setPlaybackState("none"))):te.event==="infoDelivery"&&te.info?typeof te.info.muted=="boolean"&&te.info.muted&&!r&&e&&(I("unMute",""),I("setVolume",[t||75])):te.event==="onError"&&(console.warn("[YouTube Audio Player Error]",te.info),(te.info===101||te.info===150)&&v("The owner of this video restricts playback outside of YouTube."))}catch{}};return window.addEventListener("message",X),()=>window.removeEventListener("message",X)},[o,r,t,I,s,e]);const V=S==="youtube"&&e||u,B=(s==null?void 0:s.type)==="playlist"||(s==null?void 0:s.type)==="video_in_playlist";return d.jsxs(d.Fragment,{children:[d.jsxs("div",{role:"region","aria-label":"YouTube Audio Player",style:{position:"fixed",bottom:!V||U?"0px":u?"84px":"16px",right:!V||U?"0px":u?"24px":"16px",width:!V||U?"2px":u?"380px":"250px",height:!V||U?"2px":u?"285px":"150px",zIndex:!V||U?-1:u?50:30,opacity:!V||U?.01:1,pointerEvents:!V||U?"none":"auto",borderRadius:"1.25rem",overflow:"hidden",boxShadow:u?"0 30px 70px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.18)":"0 15px 35px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.12)",transition:"all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"},className:"backdrop-blur-2xl bg-[#090b14]/95 flex flex-col border border-white/15",children:[d.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-black/60 shrink-0 select-none",children:[d.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[d.jsx("span",{className:`w-2 h-2 rounded-full shrink-0 ${e?"bg-red-500 animate-pulse":"bg-zinc-500"}`}),d.jsx("span",{className:"text-white text-xs font-display font-semibold truncate max-w-[110px] sm:max-w-[160px]",title:s==null?void 0:s.title,children:(s==null?void 0:s.title)||"YouTube Audio"})]}),d.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[d.jsxs("button",{type:"button",onClick:W,className:`px-1.5 py-0.5 rounded-md text-[10px] font-sans font-bold flex items-center gap-1 transition-colors cursor-pointer ${r?"bg-amber-500 text-black hover:bg-amber-400 animate-pulse":"bg-emerald-600/80 text-white hover:bg-emerald-500"}`,title:"Force Unmute & Restore Volume",children:[r?d.jsx(qg,{className:"w-3 h-3"}):d.jsx(bf,{className:"w-3 h-3"}),d.jsx("span",{className:"hidden sm:inline",children:r?"UNMUTE":`${t}%`})]}),d.jsx("button",{type:"button",onClick:()=>P(!0),className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer",title:"Audio Only (Hide Video Frame)",children:d.jsx(dc,{className:"w-3 h-3"})}),d.jsx("button",{type:"button",onClick:()=>f(!u),className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer",title:u?"Collapse to Mini Player":"Expand Video Preview",children:u?d.jsx(wg,{className:"w-3 h-3"}):d.jsx(lm,{className:"w-3 h-3"})}),d.jsx("button",{type:"button",onClick:()=>{o(!1),f(!1),I("pauseVideo","")},className:"p-1 rounded-md bg-white/10 hover:bg-red-500/80 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer",title:"Stop playback & close",children:d.jsx(Ar,{className:"w-3 h-3"})})]})]}),w&&d.jsxs("div",{className:"absolute inset-0 z-30 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center space-y-2 pointer-events-auto",children:[d.jsx(cg,{className:"w-6 h-6 text-amber-400"}),d.jsx("p",{className:"text-xs text-white/95 font-sans leading-relaxed max-w-xs",children:w}),(s==null?void 0:s.url)&&d.jsxs("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold transition-colors shadow-md",children:[d.jsx(AM,{className:"w-3 h-3"}),d.jsx("span",{children:"Open in YouTube"})]})]}),d.jsx("div",{className:"flex-1 w-full bg-black relative min-h-0",children:d.jsx("iframe",{ref:b,id:"global-youtube-audio-iframe",title:"FOR ME Sanctuary Audio Stream",src:D,className:"w-full h-full border-0 absolute inset-0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),d.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 border-t border-white/10 bg-black/60 shrink-0 text-xs",children:[u?d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx("span",{className:"text-[10px] font-sans text-zinc-400 mr-1",children:"Vol:"}),[25,50,75,100].map(X=>d.jsxs("button",{type:"button",onClick:()=>{h(X),I("setVolume",[X]),W()},className:`px-1.5 py-0.5 rounded text-[10px] font-mono transition-colors cursor-pointer ${t===X?"bg-red-600 text-white font-bold":"bg-white/10 text-zinc-300 hover:bg-white/20"}`,children:[X,"%"]},X))]}):d.jsxs("div",{className:"flex items-center gap-1",children:[B&&d.jsxs(d.Fragment,{children:[d.jsx("button",{type:"button",onClick:_,className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer",title:"Previous track in playlist",children:d.jsx(Sf,{className:"w-3 h-3"})}),d.jsx("button",{type:"button",onClick:m,className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer",title:"Next track in playlist",children:d.jsx(hc,{className:"w-3 h-3"})})]}),d.jsx("span",{className:"text-[10px] font-mono text-zinc-400",children:r?"Muted":`${t}%`})]}),d.jsxs("div",{className:"flex items-center gap-1.5",children:[u&&B&&d.jsxs(d.Fragment,{children:[d.jsx("button",{type:"button",onClick:_,className:"p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white transition-colors cursor-pointer",title:"Previous track",children:d.jsx(Sf,{className:"w-3.5 h-3.5"})}),d.jsx("button",{type:"button",onClick:m,className:"p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white transition-colors cursor-pointer",title:"Next track",children:d.jsx(hc,{className:"w-3.5 h-3.5"})})]}),d.jsx("button",{type:"button",onClick:()=>{g(),W()},className:`px-3 py-1 rounded-lg text-white text-[11px] font-display font-semibold flex items-center gap-1 shadow-sm transition-all cursor-pointer ${e?"bg-red-600 hover:bg-red-500":"bg-emerald-600 hover:bg-emerald-500"}`,children:e?d.jsxs(d.Fragment,{children:[d.jsx(tr,{className:"w-3 h-3 fill-current"}),d.jsx("span",{children:"Pause"})]}):d.jsxs(d.Fragment,{children:[d.jsx(Bi,{className:"w-3 h-3 fill-current ml-0.5"}),d.jsx("span",{children:"Play"})]})})]})]})]}),V&&U&&d.jsxs("button",{type:"button",onClick:()=>P(!1),className:"fixed bottom-4 right-4 z-40 px-3 py-1.5 rounded-xl cosmic-dock text-xs flex items-center gap-2 border border-white/15 text-white hover:border-violet-400/50 shadow-xl cursor-pointer transition-all animate-fadeIn",title:"Restore Video Frame",children:[d.jsx("span",{className:"w-2 h-2 rounded-full bg-red-500 animate-pulse"}),d.jsx("span",{className:"font-display text-[11px] font-medium",children:"Show Video"}),d.jsx(lm,{className:"w-3 h-3 text-zinc-400"})]})]})},BM=[{id:"deep-space-obsidian",name:"Deep Space Obsidian",tagline:"Luminous Lavender & Crescent Moon",accent:"#a855f7",gradient:["#060814","#2d1252","#7c3aed","#ede9fe"],settings:{palette:"cosmic-royal",celestialBody:"crescent-moon",celestialPosition:"default",celestialScaleMultiplier:1,rotationSpeed:"standard",waveGeometry:"dunes",speed:"balanced",amplitude:"majestic",waveLayerDensity:"deep",horizonHeight:"balanced",clockFontStyle:"tabular",clockHalo:"pulsar",clockColor:"palette",clockPosition:"center",clockDivider:"colon",showConstellations:!0,showComet:!0,showNebulaDust:!0,starDensity:"balanced",shootingStarMode:"occasional"}},{id:"cyberpunk-neon",name:"Cyberpunk Neon",tagline:"High-Voltage Cyan & Ringed Gas Giant",accent:"#06b6d4",gradient:["#06000e","#3b0764","#06b6d4","#f43f5e"],settings:{palette:"cyberpunk-neon",celestialBody:"ringed-planet",celestialPosition:"upper-right",celestialScaleMultiplier:1.15,rotationSpeed:"fast",waveGeometry:"aurora",speed:"dynamic",amplitude:"dramatic",waveLayerDensity:"dense",horizonHeight:"balanced",clockFontStyle:"mono",clockHalo:"pulsar",clockColor:"cyan",clockPosition:"center",clockDivider:"colon",showCrossStars:!0,showOrbitalTrack:!0,starDensity:"dense",shootingStarMode:"meteor-shower"}},{id:"emerald-borealis",name:"Emerald Borealis",tagline:"Northern Aurora Ribbons & Pulsar Star",accent:"#10b981",gradient:["#010d05","#064e3b","#10b981","#a7f3d0"],settings:{palette:"emerald-aurora",celestialBody:"pulsar-star",celestialPosition:"zenith-center",celestialScaleMultiplier:1.1,rotationSpeed:"fast",waveGeometry:"aurora",speed:"balanced",amplitude:"majestic",waveLayerDensity:"dense",horizonHeight:"balanced",clockFontStyle:"minimal",clockHalo:"pulsar",clockColor:"cyan",clockPosition:"center",clockDivider:"dot",showConstellations:!0,showComet:!0,starDensity:"galaxy",shootingStarMode:"occasional"}},{id:"sunset-dunes",name:"Sunset Dunes",tagline:"Velvet Crimson & Solar Eclipse Corona",accent:"#f43f5e",gradient:["#0a0208","#771146","#e11d48","#f59e0b"],settings:{palette:"supernova-sunset",celestialBody:"eclipse-corona",celestialPosition:"zenith-center",celestialScaleMultiplier:1,rotationSpeed:"standard",waveGeometry:"dunes",speed:"balanced",amplitude:"majestic",waveLayerDensity:"deep",horizonHeight:"balanced",clockFontStyle:"serif",clockHalo:"subtle",clockColor:"gold",clockPosition:"center",clockDivider:"space",showConstellations:!1,showComet:!0,starDensity:"balanced",shootingStarMode:"off"}},{id:"blood-moon-totality",name:"Blood Moon Totality",tagline:"Crimson Eclipse & Ruby Stardust",accent:"#ef4444",gradient:["#0d0202","#450a0a","#b91c1c","#f87171"],settings:{palette:"supernova-sunset",celestialBody:"blood-moon",celestialPosition:"upper-left",celestialScaleMultiplier:1.25,rotationSpeed:"slow",waveGeometry:"mountains",speed:"calm",amplitude:"dramatic",waveLayerDensity:"deep",horizonHeight:"balanced",clockFontStyle:"serif",clockHalo:"pulsar",clockColor:"rose",clockPosition:"center",clockDivider:"colon",showConstellations:!0,showCrossStars:!0,starDensity:"dense",shootingStarMode:"meteor-shower"}},{id:"nord-frost",name:"Nord Frost",tagline:"Sub-Zero Arctic & Crystalline Torus",accent:"#38bdf8",gradient:["#020b14","#0c2e4e","#0284c7","#e0f2fe"],settings:{palette:"celestial-cyan",celestialBody:"crescent-moon",celestialPosition:"upper-right",celestialScaleMultiplier:1.1,rotationSpeed:"standard",waveGeometry:"ocean",speed:"balanced",amplitude:"majestic",waveLayerDensity:"dense",horizonHeight:"low",clockFontStyle:"minimal",clockHalo:"none",clockColor:"white",clockPosition:"center",clockDivider:"colon",showConstellations:!0,showCrossStars:!0,starDensity:"dense",shootingStarMode:"occasional"}},{id:"monochrome-mineral",name:"Monochrome Mineral",tagline:"Architectural Platinum & Deep Void",accent:"#a1a1aa",gradient:["#030306","#181824","#71717a","#ffffff"],settings:{palette:"nocturne-silver",celestialBody:"none",celestialPosition:"default",celestialScaleMultiplier:1,rotationSpeed:"static",waveGeometry:"mountains",speed:"calm",amplitude:"subtle",waveLayerDensity:"airy",horizonHeight:"balanced",clockFontStyle:"tabular",clockHalo:"none",clockColor:"white",clockPosition:"center",clockDivider:"space",showConstellations:!1,showComet:!1,showNebulaDust:!1,starDensity:"sparse",shootingStarMode:"off"}},{id:"pure-pitch-black",name:"Pitch Black Void",tagline:"OLED Zero-Light Battery Sanctuary",accent:"#71717a",gradient:["#000000","#050505","#171717","#e5e5e5"],settings:{palette:"pure-pitch-black",celestialBody:"crescent-moon",celestialPosition:"upper-right",celestialScaleMultiplier:.8,rotationSpeed:"slow",waveGeometry:"dunes",speed:"frozen",amplitude:"subtle",waveLayerDensity:"airy",horizonHeight:"low",clockFontStyle:"tabular",clockHalo:"none",clockColor:"white",clockPosition:"center",clockDivider:"colon",showConstellations:!1,showComet:!1,showNebulaDust:!1,starDensity:"sparse",shootingStarMode:"off"}}],HM=[{id:"cosmic-royal",name:"Cosmic Royal",previewColors:["#060814","#2d1252","#7c3aed","#ede9fe"]},{id:"cyberpunk-neon",name:"Cyber Neon",previewColors:["#06000e","#3b0764","#06b6d4","#f43f5e"]},{id:"emerald-aurora",name:"Emerald Aurora",previewColors:["#010d05","#064e3b","#10b981","#a7f3d0"]},{id:"supernova-sunset",name:"Sunset Supernova",previewColors:["#12050e","#6e133e","#e11d48","#fffbeb"]},{id:"celestial-cyan",name:"Celestial Cyan",previewColors:["#030b14","#0c2e4e","#0284c7","#e0f2fe"]},{id:"solar-gold",name:"Solar Gold",previewColors:["#140d02","#523405","#f59e0b","#fef3c7"]},{id:"nocturne-silver",name:"Nocturne Silver",previewColors:["#050508","#1e1e24","#71717a","#f4f4f5"]},{id:"pure-pitch-black",name:"Pitch Black OLED",previewColors:["#000000","#09090b","#27272a","#fafafa"]}],GM=({isOpen:s,onClose:e})=>{const{wallpaperSettings:t,updateWallpaperSettings:r,appTheme:o,toggleAppTheme:l,setIsEcoSleeping:u}=ss(),f=o==="light",[g,m]=xe.useState("realms"),[_,E]=xe.useState(String(t.ecoSleepMinutes??7.5)),[h,S]=xe.useState(!1);if(!s)return null;const b=()=>{r({palette:"cosmic-royal",speed:"balanced",amplitude:"majestic",waveGeometry:"dunes",waveLayerDensity:"deep",horizonHeight:"balanced",waveStrokeOpacity:.8,interactiveParallax:!0,celestialBody:"crescent-moon",celestialPosition:"default",celestialScaleMultiplier:1,rotationSpeed:"standard",showNebulaDust:!0,nebulaIntensity:"vivid",showConstellations:!0,showComet:!0,shootingStarMode:"occasional",showStars:!0,starDensity:"balanced",showCrossStars:!1,showOrbitalTrack:!1,showMeridian:!1,clockFontStyle:"tabular",clockSize:"standard",clockPosition:"center",clockDivider:"colon",clockColor:"palette",clockFormat:"12h",showSeconds:!0,showDate:!0,showGreeting:!0,clockHalo:"pulsar"})};return d.jsxs("div",{className:"fixed inset-0 z-50 pointer-events-none select-none",children:[d.jsx("div",{className:"absolute inset-0 bg-black/20 backdrop-blur-[2px] pointer-events-auto transition-opacity",onClick:e,"aria-hidden":"true"}),d.jsxs("aside",{role:"dialog","aria-modal":"true","aria-label":"Wallpaper Studio Inspector",className:`absolute top-8 sm:top-10 bottom-3 sm:bottom-6 right-2 sm:right-6 w-[calc(100%-1rem)] sm:w-[440px] rounded-3xl border shadow-[0_24px_80px_rgba(0,0,0,0.85)] backdrop-blur-3xl flex flex-col z-10 pointer-events-auto transition-all animate-fadeIn overflow-hidden ${f?"bg-white/95 border-zinc-200/90 text-zinc-900":"bg-[#090b16]/95 border-white/[0.12] text-white"}`,children:[d.jsxs("div",{className:`flex items-center justify-between p-4 px-5 border-b shrink-0 ${f?"border-zinc-200/80 bg-white/70":"border-white/[0.08] bg-white/[0.02]"}`,children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:`w-8 h-8 rounded-xl border flex items-center justify-center shadow-sm ${f?"bg-zinc-100 border-zinc-200 text-zinc-800":"bg-white/[0.08] border-white/15 text-zinc-200"}`,children:d.jsx(Ig,{className:"w-3.5 h-3.5"})}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("h2",{className:"text-xs font-display uppercase tracking-widest font-bold",children:"Studio"}),d.jsx("span",{className:`text-[9px] font-mono font-medium px-2 py-0.5 rounded-full border ${f?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-emerald-500/15 text-emerald-300 border-emerald-400/30"}`,children:"Live"})]}),d.jsx("p",{className:`text-[10px] font-sans ${f?"text-zinc-500":"text-zinc-400"}`,children:"Sanctuary customization"})]})]}),d.jsxs("div",{className:"flex items-center gap-1.5",children:[d.jsx("button",{type:"button",onClick:b,"aria-label":"Reset to default settings",title:"Reset to Defaults",className:`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${f?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.06] hover:bg-white/[0.12] text-zinc-400 hover:text-white"}`,children:d.jsx(Tr,{className:"w-3.5 h-3.5"})}),d.jsx("button",{type:"button",onClick:e,"aria-label":"Close Studio",className:`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${f?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.06] hover:bg-white/[0.12] text-zinc-400 hover:text-white"}`,children:d.jsx(Ar,{className:"w-4 h-4"})})]})]}),d.jsx("div",{className:`p-2.5 border-b shrink-0 ${f?"border-zinc-200/90 bg-zinc-50/70":"border-white/[0.06] bg-black/25"}`,children:d.jsx("div",{className:`grid grid-cols-3 gap-1.5 p-1 rounded-2xl ${f?"bg-zinc-200/60":"bg-white/[0.04]"}`,children:[{id:"realms",label:"Realms",desc:"1-Tap Themes",icon:Cs},{id:"cosmos",label:"Cosmos",desc:"Planet & Waves",icon:fc},{id:"timepiece",label:"Timepiece",desc:"Clock Style",icon:uc}].map(w=>{const v=w.icon,y=g===w.id;return d.jsxs("button",{type:"button",onClick:()=>m(w.id),className:`flex items-center justify-center gap-2 py-2 px-2 rounded-xl text-xs font-sans font-medium transition-all cursor-pointer ${y?f?"bg-white text-zinc-950 font-bold shadow-sm":"bg-white text-zinc-950 font-bold shadow-[0_2px_12px_rgba(255,255,255,0.18)]":f?"hover:bg-white/60 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.06] text-zinc-400 hover:text-white"}`,children:[d.jsx(v,{className:"w-3.5 h-3.5 shrink-0"}),d.jsx("span",{children:w.label})]},w.id)})})}),d.jsxs("div",{className:"flex-1 overflow-y-auto p-5 space-y-6",children:[g==="realms"&&d.jsxs("div",{className:"space-y-4 animate-fadeIn",children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold ${f?"text-zinc-700":"text-zinc-300"}`,children:"Curated Aesthetic Realms"}),d.jsx("span",{className:`text-[10px] font-mono ${f?"text-zinc-500":"text-zinc-400"}`,children:"Instant Harmony"})]}),d.jsx("div",{className:"grid grid-cols-1 gap-2",children:BM.map(w=>{const v=t.palette===w.settings.palette&&t.celestialBody===w.settings.celestialBody;return d.jsxs("button",{type:"button",onClick:()=>r(w.settings),className:`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between group ${v?f?"bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900 shadow-md":"bg-white/[0.08] border-white/40 shadow-lg":f?"bg-white hover:bg-zinc-50 border-zinc-200/90":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08]"}`,children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:"w-10 h-10 rounded-xl border border-white/20 shrink-0 shadow-sm flex items-center justify-center overflow-hidden",style:{background:`linear-gradient(135deg, ${w.gradient.join(", ")})`},children:v&&d.jsx(Cr,{className:"w-4 h-4 text-white drop-shadow-md stroke-[3]"})}),d.jsxs("div",{children:[d.jsx("div",{className:`text-xs font-display font-bold ${v?f?"text-zinc-950 font-bold":"text-white":f?"text-zinc-800":"text-zinc-200"}`,children:w.name}),d.jsx("div",{className:`text-[10px] font-sans ${f?"text-zinc-500":"text-zinc-400"}`,children:w.tagline})]})]}),d.jsx("div",{className:"flex items-center gap-1 shrink-0 pl-2",children:w.gradient.map((y,N)=>d.jsx("div",{className:"w-2.5 h-2.5 rounded-full border border-black/20",style:{backgroundColor:y}},N))})]},w.id)})})]}),g==="cosmos"&&d.jsxs("div",{className:"space-y-5 animate-fadeIn",children:[d.jsxs("div",{className:"space-y-2",children:[d.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${f?"text-zinc-700":"text-zinc-300"}`,children:"3D Celestial Object"}),d.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:[{id:"crescent-moon",label:"Crescent Moon"},{id:"ringed-planet",label:"Saturn Rings"},{id:"blood-moon",label:"Blood Moon"},{id:"pulsar-star",label:"Pulsar Star"},{id:"eclipse-corona",label:"Eclipse Corona"},{id:"none",label:"No Planet (Pure Waves)"}].map(w=>{const v=t.celestialBody===w.id;return d.jsxs("button",{type:"button",onClick:()=>r({celestialBody:w.id}),className:`p-2.5 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer flex items-center justify-between ${v?f?"bg-zinc-900 text-white font-semibold":"bg-white text-zinc-950 font-semibold shadow-sm":f?"bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300"}`,children:[d.jsx("span",{className:"truncate",children:w.label}),v&&d.jsx(Cr,{className:"w-3.5 h-3.5 shrink-0 ml-1"})]},w.id)})})]}),d.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[d.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${f?"text-zinc-700":"text-zinc-300"}`,children:"Atmospheric Palette"}),d.jsx("div",{className:"grid grid-cols-2 gap-2",children:HM.map(w=>{const v=t.palette===w.id;return d.jsxs("button",{type:"button",onClick:()=>r({palette:w.id}),className:`p-2 rounded-xl border text-left transition-all cursor-pointer flex flex-col gap-1.5 ${v?f?"bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900 shadow-sm":"bg-white/[0.08] border-white/40 shadow-sm":f?"bg-white hover:bg-zinc-50 border-zinc-200":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]"}`,children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:`text-[11px] font-semibold ${v?f?"text-zinc-950":"text-white":f?"text-zinc-700":"text-zinc-300"}`,children:w.name}),v&&d.jsx(Cr,{className:"w-3 h-3 text-emerald-400"})]}),d.jsx("div",{className:"flex items-center gap-1",children:w.previewColors.map((y,N)=>d.jsx("span",{className:"w-3 h-3 rounded-full border border-black/20",style:{backgroundColor:y}},N))})]},w.id)})})]}),d.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[d.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${f?"text-zinc-700":"text-zinc-300"}`,children:"Wave Topography"}),d.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{id:"dunes",label:"Cosmic Dunes"},{id:"aurora",label:"Aurora Ribbon"},{id:"mountains",label:"Ridge Peaks"},{id:"ocean",label:"Ocean Swell"}].map(w=>{const v=t.waveGeometry===w.id;return d.jsx("button",{type:"button",onClick:()=>r({waveGeometry:w.id}),className:`p-2.5 rounded-xl border text-center text-xs font-medium transition-all cursor-pointer ${v?f?"bg-zinc-900 text-white font-semibold":"bg-white text-zinc-950 font-semibold shadow-sm":f?"bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300"}`,children:w.label},w.id)})})]}),d.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[d.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${f?"text-zinc-700":"text-zinc-300"}`,children:"Motion Speed"}),d.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:[{id:"calm",label:"Calm Drift"},{id:"balanced",label:"Balanced"},{id:"dynamic",label:"Dynamic"}].map(w=>{const v=t.speed===w.id;return d.jsx("button",{type:"button",onClick:()=>r({speed:w.id}),className:`p-2 rounded-xl border text-center text-xs font-medium transition-all cursor-pointer ${v?f?"bg-zinc-900 text-white font-semibold":"bg-white text-zinc-950 font-semibold shadow-sm":f?"bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300"}`,children:w.label},w.id)})})]}),d.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${f?"text-zinc-700":"text-zinc-300"}`,children:"Battery Saver (Eco Sleep)"}),d.jsx("span",{className:`text-[10px] ${f?"text-zinc-500":"text-zinc-400"}`,children:"0% GPU when idle"})]}),d.jsx("div",{className:"grid grid-cols-4 gap-1.5",children:[{val:7.5,label:"7.5m"},{val:5,label:"5 min"},{val:10,label:"10 min"},{val:0,label:"Off"}].map(w=>{const v=(t.ecoSleepMinutes??7.5)===w.val;return d.jsx("button",{type:"button",onClick:()=>{r({ecoSleepMinutes:w.val}),E(String(w.val))},className:`p-2 rounded-xl border text-center text-xs font-medium transition-all cursor-pointer ${v?f?"bg-zinc-900 text-white font-semibold":"bg-white text-zinc-950 font-semibold shadow-sm":f?"bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300"}`,children:w.label},w.val)})}),d.jsxs("div",{className:"flex items-center gap-2 pt-1",children:[d.jsxs("div",{className:`flex items-center flex-1 px-3 py-1.5 rounded-xl border transition-all ${f?"bg-zinc-50 border-zinc-200":"bg-white/[0.04] border-white/10"}`,children:[d.jsx("span",{className:`text-[11px] font-sans mr-2 shrink-0 ${f?"text-zinc-500":"text-zinc-400"}`,children:"Custom idle:"}),d.jsx("input",{type:"number",min:"0.5",max:"180",step:"0.5",value:_,onChange:w=>E(w.target.value),placeholder:"e.g. 8",className:`w-14 bg-transparent text-xs font-mono font-medium outline-none text-center ${f?"text-zinc-900":"text-white"}`}),d.jsx("span",{className:`text-[11px] font-mono ml-1 ${f?"text-zinc-500":"text-zinc-400"}`,children:"min"})]}),d.jsx("button",{type:"button",onClick:()=>{const w=parseFloat(_);!isNaN(w)&&w>0&&(r({ecoSleepMinutes:w}),S(!0),setTimeout(()=>S(!1),2500))},className:`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${f?"bg-zinc-900 text-white hover:bg-zinc-800 border-zinc-900":"bg-white text-zinc-950 hover:bg-zinc-200 border-white"}`,children:"Set Custom"})]}),h&&d.jsxs("p",{className:"text-[10px] font-mono text-emerald-400 animate-fadeIn font-semibold",children:["✓ Custom sleep timer set to ",t.ecoSleepMinutes," minutes"]}),d.jsx("p",{className:`text-[11px] leading-relaxed ${f?"text-zinc-500":"text-zinc-400"}`,children:"Auto-pauses heavy 3D celestial motion and wave loops after inactivity to eliminate battery drain while preserving the tranquil wallpaper aesthetic."}),d.jsxs("button",{type:"button",onClick:()=>{u(!0),e()},className:`w-full py-2 px-3 rounded-xl border text-xs font-medium transition-all cursor-pointer flex items-center justify-center gap-2 ${f?"bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100":"bg-emerald-950/40 text-emerald-300 border-emerald-500/30 hover:bg-emerald-900/50"}`,children:[d.jsx(PM,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Preview Eco Sleep Mode"})]})]}),d.jsx("div",{className:"pt-2 border-t border-white/[0.06]",children:d.jsxs("button",{type:"button",onClick:l,className:`w-full p-2.5 rounded-xl border text-xs font-medium transition-all cursor-pointer flex items-center justify-center gap-2 ${f?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-white"}`,children:[f?d.jsx(fc,{className:"w-4 h-4 text-zinc-700"}):d.jsx(Og,{className:"w-4 h-4 text-amber-300"}),d.jsxs("span",{children:["Switch to ",f?"Obsidian Dark":"Creamy Light"," Theme"]})]})})]}),g==="timepiece"&&d.jsxs("div",{className:"space-y-5 animate-fadeIn",children:[d.jsxs("div",{className:"space-y-2",children:[d.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${f?"text-zinc-700":"text-zinc-300"}`,children:"Clock Typography Face"}),d.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{id:"tabular",label:"Tabular Modern",preview:"12:00"},{id:"serif",label:"Editorial Luxury",preview:"12:00"},{id:"mono",label:"Tech Monospace",preview:"12:00"},{id:"minimal",label:"Minimalist Light",preview:"12:00"}].map(w=>{const v=t.clockFontStyle===w.id;return d.jsxs("button",{type:"button",onClick:()=>r({clockFontStyle:w.id}),className:`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${v?f?"bg-zinc-900 text-white font-semibold":"bg-white text-zinc-950 font-semibold shadow-sm":f?"bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300"}`,children:[d.jsx("span",{className:"text-xs",children:w.label}),v&&d.jsx(Cr,{className:"w-3.5 h-3.5"})]},w.id)})})]}),d.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[d.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${f?"text-zinc-700":"text-zinc-300"}`,children:"Dial Accent Tint"}),d.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{id:"palette",label:"Palette Match",dot:"#a855f7"},{id:"white",label:"Pure White",dot:"#ffffff"},{id:"gold",label:"Stardust Gold",dot:"#fbbf24"},{id:"cyan",label:"Cyber Cyan",dot:"#22d3ee"},{id:"rose",label:"Rose Quartz",dot:"#f43f5e"}].map(w=>{const v=t.clockColor===w.id;return d.jsxs("button",{type:"button",onClick:()=>r({clockColor:w.id}),className:`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${v?f?"bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900":"bg-white/[0.08] border-white/40":f?"bg-white hover:bg-zinc-50 border-zinc-200":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]"}`,children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:"w-3 h-3 rounded-full border border-black/20",style:{backgroundColor:w.dot}}),d.jsx("span",{className:`text-xs ${v?"font-bold":""}`,children:w.label})]}),v&&d.jsx(Cr,{className:"w-3.5 h-3.5 text-emerald-400"})]},w.id)})})]}),d.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[d.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${f?"text-zinc-700":"text-zinc-300"}`,children:"Display Options"}),d.jsxs("div",{className:"space-y-2",children:[d.jsxs("div",{className:`p-3 rounded-xl border flex items-center justify-between ${f?"bg-white border-zinc-200":"bg-white/[0.03] border-white/[0.06]"}`,children:[d.jsxs("div",{children:[d.jsx("div",{className:"text-xs font-semibold",children:"Orbital Seconds Capsule"}),d.jsx("div",{className:`text-[10px] ${f?"text-zinc-500":"text-zinc-400"}`,children:"Show live orbiting seconds gauge"})]}),d.jsx("button",{type:"button",onClick:()=>r({showSeconds:!t.showSeconds}),className:`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${t.showSeconds?"bg-violet-600":f?"bg-zinc-300":"bg-white/20"}`,children:d.jsx("span",{className:`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${t.showSeconds?"left-6":"left-1"}`})})]}),d.jsxs("div",{className:`p-3 rounded-xl border flex items-center justify-between ${f?"bg-white border-zinc-200":"bg-white/[0.03] border-white/[0.06]"}`,children:[d.jsxs("div",{children:[d.jsx("div",{className:"text-xs font-semibold",children:"Breathing Atmospheric Aura"}),d.jsx("div",{className:`text-[10px] ${f?"text-zinc-500":"text-zinc-400"}`,children:"Ambient radial glow behind timepiece"})]}),d.jsx("button",{type:"button",onClick:()=>r({clockHalo:t.clockHalo==="none"?"pulsar":"none"}),className:`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${t.clockHalo!=="none"?"bg-violet-600":f?"bg-zinc-300":"bg-white/20"}`,children:d.jsx("span",{className:`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${t.clockHalo!=="none"?"left-6":"left-1"}`})})]})]})]})]})]})]})]})},co=({className:s="w-4 h-4"})=>d.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:s,"aria-hidden":"true",children:d.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})}),Zg=({isPlaying:s,color:e="#a855f7",className:t="w-16 h-5",barCount:r=10})=>{const o=xe.useRef(null);return xe.useEffect(()=>{const l=o.current;if(!l)return;const u=l.getContext("2d");if(!u)return;let f;const g=Er.getAnalyser(),m=g?new Uint8Array(g.frequencyBinCount):null,_=()=>{if(u.clearRect(0,0,l.width,l.height),s&&g&&m){g.getByteFrequencyData(m);const E=l.width,h=l.height,S=2,b=S*(r-1),w=Math.max(2,(E-b)/r);for(let v=0;v<r;v++){const y=Math.min(m.length-1,Math.floor(v*(m.length/r)*.7)),N=m[y]/255,U=Math.max(3,N*(h-2)),P=v*(w+S),z=h-U;u.fillStyle=e,u.beginPath(),u.roundRect(P,z,w,U,1.5),u.fill()}}else{const E=l.width,h=l.height,S=2,b=S*(r-1),w=Math.max(2,(E-b)/r);for(let v=0;v<r;v++){const y=v*(w+S),N=h-2.5;u.fillStyle="rgba(255, 255, 255, 0.2)",u.beginPath(),u.roundRect(y,N,w,2.5,1),u.fill()}}f=requestAnimationFrame(_)};return _(),()=>{cancelAnimationFrame(f)}},[s,e,r]),d.jsx("canvas",{ref:o,width:64,height:20,className:t,"aria-hidden":"true"})},VM=({isOpen:s,onClose:e})=>{const{appTheme:t,audioSource:r,isAudioPlaying:o,activeSoundscapeId:l,audioVolume:u,isAudioMuted:f,playSoundscape:g,stopSoundscape:m,setAudioVolume:_,toggleAudioMute:E,isYouTubePlaying:h,activeYouTubeItem:S,youtubeVolume:b,isYouTubeMuted:w,savedYouTubeItems:v,showYouTubePreview:y,setShowYouTubePreview:N,playYouTubeItem:U,toggleYouTubePlay:P,stopYouTube:z,nextYouTubeTrack:I,prevYouTubeTrack:M,setYouTubeVolume:D,toggleYouTubeMute:J,addYouTubeToLibrary:W,removeYouTubeFromLibrary:V}=ss(),B=t==="light",[X,F]=xe.useState(r||"youtube"),[te,de]=xe.useState(""),[$,ie]=xe.useState(""),[O,ee]=xe.useState(null),[k,q]=xe.useState(null),[pe,Y]=xe.useState(null),[oe,me]=xe.useState(null);if(xe.useEffect(()=>{if(!pe){me(null);return}me(pe*60);const De=setInterval(()=>{me(Ve=>Ve===null||Ve<=1?(m(),z(),Y(null),null):Ve-1)},1e3);return()=>clearInterval(De)},[pe,m,z]),xe.useEffect(()=>{const De=Ve=>{Ve.key==="Escape"&&s&&e()};return window.addEventListener("keydown",De),()=>window.removeEventListener("keydown",De)},[s,e]),!s)return null;const ge=pa.find(De=>De.id===l)||pa[0],be=De=>{const Ve=Math.floor(De/60),Xe=De%60;return`${Ve}:${Xe.toString().padStart(2,"0")}`},Ie=De=>{if(De.preventDefault(),ee(null),q(null),!te.trim()){ee("Please enter a YouTube video or playlist link.");return}const Ve=W(te.trim(),$.trim()||void 0);if(!Ve.success||!Ve.item){ee(Ve.error||"Failed to parse YouTube link.");return}U(Ve.item),de(""),ie(""),q(`Playing: ${Ve.item.title}`),setTimeout(()=>q(null),4e3)},it=X==="youtube"?S?S.title:"No YouTube stream selected":ge.title,$e=X==="youtube"?h:o;return d.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 backdrop-blur-xl animate-fadeIn select-none ${B?"bg-black/45":"bg-black/85"}`,role:"dialog","aria-modal":"true","aria-labelledby":"audio-modal-title",children:[d.jsx("div",{className:"fixed inset-0",onClick:e,"aria-hidden":"true"}),d.jsxs("div",{className:`relative z-10 w-full max-w-2xl border rounded-3xl shadow-[0_20px_70px_rgba(0,0,0,0.85)] flex flex-col max-h-[90vh] overflow-hidden ${B?"bg-white/95 border-zinc-200 text-zinc-900 shadow-2xl":"bg-[#0b0d1e] border-white/[0.12] text-white shadow-2xl"}`,children:[d.jsxs("div",{className:`flex items-center justify-between px-6 py-4 border-b shrink-0 ${B?"border-zinc-200 bg-zinc-50/80":"border-white/[0.08] bg-white/[0.02]"}`,children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:`w-9 h-9 rounded-2xl border flex items-center justify-center ${B?"bg-rose-50 border-rose-200 text-red-600":"bg-red-500/20 border-red-400/40 text-red-400"}`,children:d.jsx(dc,{className:"w-5 h-5"})}),d.jsxs("div",{children:[d.jsxs("h2",{id:"audio-modal-title",className:`text-sm sm:text-base font-display font-semibold tracking-wide flex items-center gap-2 ${B?"text-zinc-900":"text-white"}`,children:["Focus Audio Sanctuary",d.jsx("span",{className:`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border ${X==="youtube"?B?"bg-red-50 text-red-700 border-red-200":"bg-red-500/15 text-red-300 border-red-500/30":B?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-emerald-500/15 text-emerald-300 border-emerald-500/30"}`,children:X==="youtube"?"YouTube Online • Infinite Audio":"Web Audio • Offline"})]}),d.jsx("p",{className:`text-xs font-sans mt-0.5 ${B?"text-zinc-500":"text-zinc-400"}`,children:X==="youtube"?"Paste any YouTube video or playlist link or choose curated study streams":"Procedurally synthesized ambient soundscapes. Zero network required."})]})]}),d.jsx("button",{type:"button",onClick:e,className:`w-8 h-8 rounded-xl flex items-center justify-center transition-colors cursor-pointer border ${B?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600 border-zinc-200":"bg-white/[0.05] hover:bg-white/[0.12] text-zinc-400 hover:text-white border-white/[0.08]"}`,"aria-label":"Close sound sanctuary",children:d.jsx(Ar,{className:"w-4 h-4"})})]}),d.jsxs("div",{className:`flex items-center gap-2 px-6 pt-3 border-b shrink-0 ${B?"border-zinc-200 bg-zinc-50/50":"border-white/[0.06] bg-black/20"}`,children:[d.jsxs("button",{type:"button",onClick:()=>F("youtube"),className:`flex items-center gap-2 px-4 py-2.5 text-xs font-display font-semibold border-b-2 transition-all cursor-pointer ${X==="youtube"?B?"border-red-600 text-red-700":"border-red-500 text-white":B?"border-transparent text-zinc-500 hover:text-zinc-900":"border-transparent text-zinc-400 hover:text-zinc-200"}`,children:[d.jsx(co,{className:"w-4 h-4 text-red-500"}),d.jsx("span",{children:"YouTube Audio & Playlists"})]}),d.jsxs("button",{type:"button",onClick:()=>F("ambient"),className:`flex items-center gap-2 px-4 py-2.5 text-xs font-display font-semibold border-b-2 transition-all cursor-pointer ${X==="ambient"?B?"border-violet-600 text-violet-700":"border-violet-400 text-white":B?"border-transparent text-zinc-500 hover:text-zinc-900":"border-transparent text-zinc-400 hover:text-zinc-200"}`,children:[d.jsx(cm,{className:"w-4 h-4 text-violet-500"}),d.jsx("span",{children:"Procedural Soundscapes (Offline)"})]})]}),X==="youtube"&&d.jsxs("div",{className:"flex-1 overflow-y-auto p-5 sm:p-6 space-y-5 animate-fadeIn",children:[d.jsxs("form",{onSubmit:Ie,className:"space-y-2",children:[d.jsxs("div",{className:"flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold",children:[d.jsx("span",{className:B?"text-zinc-800":"text-zinc-300",children:"Play YouTube Link or Playlist"}),d.jsx("span",{className:`text-[10px] font-sans font-normal ${B?"text-zinc-500":"text-zinc-400"}`,children:"Supports videos, live streams & playlists"})]}),d.jsxs("div",{className:"flex flex-col sm:flex-row gap-2",children:[d.jsx("input",{type:"text",placeholder:"Paste YouTube link (e.g. https://www.youtube.com/watch?v=... or playlist?list=...)",value:te,onChange:De=>{de(De.target.value),O&&ee(null)},className:`flex-1 px-3.5 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-2 ${B?"bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:ring-red-500/20 focus:border-red-500":"bg-white/[0.04] border-white/[0.1] text-white placeholder-zinc-500 focus:ring-red-400/30 focus:border-red-400"}`}),d.jsxs("button",{type:"submit",className:"px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-display font-semibold flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer shrink-0",children:[d.jsx(nc,{className:"w-4 h-4"}),d.jsx("span",{children:"Load & Play"})]})]}),O&&d.jsxs("div",{className:"flex items-center gap-2 p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-sans",children:[d.jsx(cg,{className:"w-4 h-4 shrink-0"}),d.jsx("span",{children:O})]}),k&&d.jsxs("div",{className:"flex items-center gap-2 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-sans",children:[d.jsx(Cs,{className:"w-4 h-4 shrink-0"}),d.jsx("span",{children:k})]})]}),S&&d.jsxs("div",{className:`p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${B?"bg-red-50/70 border-red-200 text-zinc-900 shadow-sm":"bg-red-950/20 border-red-500/30 text-white"}`,children:[d.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[d.jsxs("div",{className:"w-12 h-12 rounded-xl overflow-hidden bg-black/40 shrink-0 border border-white/10 relative",children:[d.jsx("img",{src:S.thumbnailUrl||ic[0].thumbnailUrl,alt:"",className:"w-full h-full object-cover"}),h&&d.jsx("div",{className:"absolute inset-0 bg-black/35 flex items-center justify-center",children:d.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"})})]}),d.jsxs("div",{className:"min-w-0",children:[d.jsx("div",{className:"flex items-center gap-1.5",children:d.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-red-600 font-bold",children:S.type==="playlist"?"PLAYLIST":"NOW STREAMING"})}),d.jsx("h3",{className:`text-xs sm:text-sm font-display font-semibold truncate ${B?"text-zinc-900":"text-white"}`,children:S.title}),d.jsx("p",{className:`text-[11px] font-sans truncate ${B?"text-zinc-600":"text-zinc-400"}`,children:S.channel||"YouTube"})]})]}),d.jsxs("div",{className:"flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end",children:[S.type==="playlist"&&d.jsxs(d.Fragment,{children:[d.jsx("button",{type:"button",onClick:M,className:`p-2 rounded-xl border transition-colors cursor-pointer ${B?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-white"}`,title:"Previous Track in Playlist",children:d.jsx(Sf,{className:"w-3.5 h-3.5"})}),d.jsx("button",{type:"button",onClick:I,className:`p-2 rounded-xl border transition-colors cursor-pointer ${B?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-white"}`,title:"Next Track in Playlist",children:d.jsx(hc,{className:"w-3.5 h-3.5"})})]}),d.jsxs("button",{type:"button",onClick:()=>{try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}},className:"px-2.5 py-1.5 rounded-xl border border-emerald-500/40 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-sans font-bold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer",title:"Force Unmute & Max Volume",children:[d.jsx(bf,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Unmute"})]}),d.jsxs("button",{type:"button",onClick:()=>N(!y),className:`px-3 py-1.5 rounded-xl border text-xs font-sans flex items-center gap-1.5 transition-colors cursor-pointer ${y?"bg-red-600 text-white border-red-600 font-medium":B?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-zinc-300"}`,title:"Toggle Floating Video Preview",children:[d.jsx(FM,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:y?"Hide Video":"View Video"})]})]})]}),d.jsxs("div",{className:"space-y-2.5",children:[d.jsxs("div",{className:`flex items-center gap-2 text-xs font-display uppercase tracking-wider font-semibold ${B?"text-zinc-800":"text-zinc-300"}`,children:[d.jsx(Cs,{className:"w-3.5 h-3.5 text-amber-500"}),d.jsx("span",{children:"Curated Focus & Lo-Fi Streams"})]}),d.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:ic.map(De=>{const Ve=(S==null?void 0:S.id)===De.id||(S==null?void 0:S.videoId)===De.videoId&&De.videoId,Xe=Ve&&h;return d.jsxs("button",{type:"button",onClick:()=>{Xe?P():U(De)},className:`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${Ve?B?"bg-red-50 border-red-500 ring-2 ring-red-500/20 shadow-sm":"bg-red-500/15 border-red-400 shadow-[0_0_20px_rgba(239,68,68,0.2)]":B?"bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90 text-zinc-900":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]"}`,children:[d.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[d.jsx("div",{className:"w-9 h-9 rounded-xl overflow-hidden bg-black/40 shrink-0 border border-white/10",children:d.jsx("img",{src:De.thumbnailUrl,alt:"",onError:nt=>{nt.currentTarget.src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=400&auto=format&fit=crop"},className:"w-full h-full object-cover"})}),d.jsxs("div",{className:"min-w-0",children:[d.jsx("div",{className:`text-xs font-display font-semibold truncate ${Ve?B?"text-red-950 font-bold":"text-white":B?"text-zinc-900":"text-zinc-200"}`,children:De.title}),d.jsx("div",{className:`text-[10px] font-sans truncate ${B?"text-zinc-500":"text-zinc-400"}`,children:De.channel})]})]}),d.jsx("div",{className:`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${Xe?"bg-red-600 text-white shadow-sm":B?"bg-zinc-200 text-zinc-700":"bg-white/10 text-white"}`,children:Xe?d.jsx(tr,{className:"w-3.5 h-3.5 fill-current"}):d.jsx(Bi,{className:"w-3.5 h-3.5 ml-0.5 fill-current"})})]},De.id)})})]}),v.filter(De=>!De.isCurated).length>0&&d.jsxs("div",{className:"space-y-2.5",children:[d.jsx("div",{className:`flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold ${B?"text-zinc-800":"text-zinc-300"}`,children:d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(om,{className:"w-3.5 h-3.5 text-red-500"}),d.jsx("span",{children:"My Saved YouTube Library"})]})}),d.jsx("div",{className:"space-y-2",children:v.filter(De=>!De.isCurated).map(De=>{const Ve=(S==null?void 0:S.id)===De.id,Xe=Ve&&h;return d.jsxs("div",{className:`p-3 rounded-2xl border flex items-center justify-between gap-3 transition-all ${Ve?B?"bg-red-50 border-red-500 ring-2 ring-red-500/20":"bg-red-500/15 border-red-400":B?"bg-zinc-50 border-zinc-200":"bg-white/[0.03] border-white/[0.06]"}`,children:[d.jsxs("div",{onClick:()=>U(De),className:"flex items-center gap-3 min-w-0 flex-1 cursor-pointer",children:[d.jsx("div",{className:`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${De.type==="playlist"?"bg-purple-600/20 text-purple-400":"bg-red-600/20 text-red-400"}`,children:De.type==="playlist"?d.jsx(om,{className:"w-4 h-4"}):d.jsx(co,{className:"w-4 h-4"})}),d.jsxs("div",{className:"min-w-0",children:[d.jsx("div",{className:`text-xs font-display font-semibold truncate ${B?"text-zinc-900":"text-white"}`,children:De.title}),d.jsxs("div",{className:`text-[10px] font-sans truncate ${B?"text-zinc-500":"text-zinc-400"}`,children:[De.type==="playlist"?"Playlist":"Single Stream"," • ",De.url]})]})]}),d.jsxs("div",{className:"flex items-center gap-1.5 shrink-0",children:[d.jsx("button",{type:"button",onClick:()=>{Xe?P():U(De)},className:`p-2 rounded-xl transition-colors cursor-pointer ${Xe?"bg-red-600 text-white":B?"bg-zinc-200 text-zinc-800 hover:bg-zinc-300":"bg-white/10 text-white hover:bg-white/20"}`,children:Xe?d.jsx(tr,{className:"w-3.5 h-3.5 fill-current"}):d.jsx(Bi,{className:"w-3.5 h-3.5 fill-current"})}),d.jsx("button",{type:"button",onClick:()=>V(De.id),className:`p-2 rounded-xl transition-colors cursor-pointer ${B?"text-zinc-400 hover:text-red-600":"text-zinc-500 hover:text-red-400"}`,title:"Remove from library",children:d.jsx(lo,{className:"w-3.5 h-3.5"})})]})]},De.id)})})]})]}),X==="ambient"&&d.jsx("div",{className:"flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 animate-fadeIn",children:d.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3.5",children:pa.map(De=>{const Ve=l===De.id,Xe=Ve&&o;return d.jsxs("div",{onClick:()=>{Xe?m():g(De.id)},className:`relative p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between select-none group ${Ve?B?"bg-violet-50 border-violet-500 ring-2 ring-violet-500/20 shadow-sm":"bg-violet-950/35 border-violet-500/50 shadow-[0_0_25px_rgba(168,85,247,0.18)]":B?"bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90 text-zinc-900":"bg-white/[0.025] hover:bg-white/[0.05] border-white/[0.08] hover:border-white/[0.18]"}`,children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsx("span",{className:`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md border ${B?"bg-zinc-200/60 text-zinc-700 border-zinc-300":"text-zinc-400 bg-white/[0.05] border-white/[0.06]"}`,children:De.category}),d.jsx("div",{className:`w-7 h-7 rounded-full flex items-center justify-center transition-all ${Xe?"bg-violet-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.6)]":B?"bg-zinc-200 text-zinc-700 group-hover:bg-zinc-300":"bg-white/[0.06] text-zinc-300 group-hover:bg-white/[0.15] group-hover:text-white"}`,children:Xe?d.jsx(tr,{className:"w-3.5 h-3.5 fill-current"}):d.jsx(Bi,{className:"w-3.5 h-3.5 ml-0.5 fill-current"})})]}),d.jsx("h3",{className:`text-sm font-display font-semibold tracking-wide transition-colors ${B?"text-zinc-900":"text-white"}`,children:De.title}),d.jsx("p",{className:`text-xs font-sans mt-1 leading-snug line-clamp-2 ${B?"text-zinc-600":"text-zinc-400"}`,children:De.tagline})]}),d.jsxs("div",{className:`mt-3 pt-2.5 border-t flex items-center justify-between text-[10px] font-mono ${B?"border-zinc-200 text-zinc-500":"border-white/[0.06] text-zinc-400"}`,children:[d.jsx("span",{className:"truncate pr-2",children:De.frequency}),Xe&&d.jsxs("span",{className:"flex items-center gap-1 text-emerald-500 font-semibold shrink-0",children:[d.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"}),"PLAYING"]})]})]},De.id)})})}),d.jsxs("div",{className:`px-5 py-3 border-t flex flex-wrap items-center justify-between gap-3 shrink-0 ${B?"border-zinc-200 bg-zinc-50/60":"border-white/[0.06] bg-white/[0.01]"}`,children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(uc,{className:`w-4 h-4 ${B?"text-zinc-600":"text-violet-400"}`}),d.jsx("span",{className:`text-xs font-display font-medium ${B?"text-zinc-800":"text-zinc-300"}`,children:"Auto-Stop Timer:"}),oe!==null&&d.jsxs("span",{className:`text-xs font-mono font-bold px-2 py-0.5 rounded-md border ${B?"bg-amber-100 text-amber-900 border-amber-300":"text-amber-300 bg-amber-500/15 border-amber-500/30"}`,children:[be(oe)," left"]})]}),d.jsx("div",{className:"flex items-center gap-1.5",children:[{label:"Off",val:null},{label:"15m",val:15},{label:"25m",val:25},{label:"45m",val:45},{label:"60m",val:60}].map(De=>d.jsx("button",{type:"button",onClick:()=>Y(De.val),className:`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${pe===De.val?B?"bg-zinc-900 text-white font-bold shadow-sm":"bg-violet-600 text-white font-bold shadow-sm":B?"bg-zinc-200/80 text-zinc-700 hover:bg-zinc-300":"bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08]"}`,children:De.label},De.label))})]}),d.jsxs("div",{className:`p-4 sm:p-5 border-t flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 ${B?"border-zinc-200 bg-zinc-100/90":"border-white/[0.08] bg-[#070914]/90 backdrop-blur-xl"}`,children:[d.jsxs("div",{className:"flex items-center gap-3 w-full sm:w-auto",children:[d.jsx("div",{className:`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${X==="youtube"?B?"bg-red-50 border-red-200 text-red-600":"bg-red-500/20 border-red-400/40 text-red-300":B?"bg-violet-50 border-violet-200 text-violet-700":"bg-violet-600/30 border-violet-400/40 text-violet-200"}`,children:X==="youtube"?d.jsx(co,{className:`w-5 h-5 ${h?"animate-pulse text-red-500":"text-zinc-400"}`}):d.jsx(cm,{className:`w-5 h-5 ${o?"text-violet-500 animate-pulse":"text-zinc-400"}`})}),d.jsxs("div",{className:"min-w-0 flex-1",children:[d.jsx("p",{className:`text-xs font-display font-medium truncate ${B?"text-zinc-900":"text-white"}`,children:it}),d.jsxs("div",{className:"flex items-center gap-2 mt-0.5",children:[d.jsx(Zg,{isPlaying:$e,color:X==="youtube"?"#ef4444":B?"#7c3aed":ge.accentColor,className:"w-16 h-4"}),d.jsx("span",{className:`text-[10px] font-mono ${B?"text-zinc-500":"text-zinc-400"}`,children:$e?X==="youtube"?"Streaming YouTube...":"Synthesizing...":"Audio Paused"})]})]})]}),d.jsxs("div",{className:"flex items-center gap-4 w-full sm:w-auto justify-end",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("button",{type:"button",onClick:X==="youtube"?J:E,className:`transition-colors cursor-pointer ${B?"text-zinc-600 hover:text-black":"text-zinc-400 hover:text-white"}`,title:"Toggle Mute",children:(X==="youtube"?w:f)?d.jsx(qg,{className:"w-4 h-4 text-red-500"}):d.jsx(bf,{className:"w-4 h-4"})}),d.jsx("input",{type:"range",min:"0",max:X==="youtube"?100:1,step:X==="youtube"?1:.01,value:X==="youtube"?w?0:b:f?0:u,onChange:De=>{const Ve=parseFloat(De.target.value);if(X==="youtube"){D(Ve),w&&J();try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}}else _(Ve)},className:"w-20 sm:w-24 h-1.5 bg-zinc-300 rounded-lg appearance-none cursor-pointer accent-red-600","aria-label":"Volume slider"}),d.jsx("span",{className:`text-[10px] font-mono w-8 tabular-nums ${B?"text-zinc-600":"text-zinc-400"}`,children:X==="youtube"?`${w?0:Math.round(b)}%`:`${f?0:Math.round(u*100)}%`})]}),d.jsx("button",{type:"button",onClick:()=>{X==="youtube"?P():o?m():g(l)},className:`px-5 py-2.5 rounded-xl text-white text-xs font-display font-semibold tracking-wider uppercase flex items-center gap-2 shadow-md transition-all cursor-pointer ${X==="youtube"?"bg-red-600 hover:bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.35)]":"bg-violet-600 hover:bg-violet-500 shadow-[0_0_20px_rgba(147,51,234,0.35)]"}`,children:$e?d.jsxs(d.Fragment,{children:[d.jsx(tr,{className:"w-3.5 h-3.5 fill-current"}),d.jsx("span",{children:"Pause"})]}):d.jsxs(d.Fragment,{children:[d.jsx(Bi,{className:"w-3.5 h-3.5 fill-current"}),d.jsx("span",{children:"Play"})]})})]})]})]})]})},jM=({isOpen:s,onClose:e})=>{const{profile:t,updateProfile:r,appTheme:o,setStudySubject:l,lastActiveDate:u,resetDayProgress:f,factoryReset:g}=ss(),m=o==="light",[_,E]=xe.useState(t.name||"Azan"),[h,S]=xe.useState(t.motto||"Remember, you are here for you."),[b,w]=xe.useState(t.defaultFocusTopic||"Engineering"),[v,y]=xe.useState(t.defaultFocusMode||"Deep Work"),[N,U]=xe.useState(!1),[P,z]=xe.useState(null);if(xe.useEffect(()=>{E(t.name||"Azan"),S(t.motto||"Remember, you are here for you."),w(t.defaultFocusTopic||"Engineering"),y(t.defaultFocusMode||"Deep Work")},[t,s]),xe.useEffect(()=>{const V=B=>{B.key==="Escape"&&s&&e()};return window.addEventListener("keydown",V),()=>window.removeEventListener("keydown",V)},[s,e]),!s)return null;const I=V=>{V.preventDefault();const B=_.trim()||"Azan",X=h.trim()||"Remember, you are here for you.",F=b.trim()||"Engineering",te=v.trim()||"Deep Work";r({name:B,motto:X,defaultFocusTopic:F,defaultFocusMode:te}),l(F),U(!0),setTimeout(()=>{U(!1),e()},500)},M=()=>{E("Azan"),S("Remember, you are here for you."),w("Engineering"),y("Deep Work"),r({name:"Azan",motto:"Remember, you are here for you.",defaultFocusTopic:"Engineering",defaultFocusMode:"Deep Work"}),l("Engineering")},D=()=>{window.confirm("Start a fresh day? This will uncheck today's tasks & habits, reset hydration to 0%, and reset focus timer.")&&(f(),z("Today's progress has been reset!"),setTimeout(()=>z(null),3e3))},J=()=>{window.confirm("WARNING: Are you sure you want to perform a factory reset? All saved tasks, habits, focus history, and settings will be permanently wiped and restored to default.")&&(g(),z("All app data restored to factory defaults."),setTimeout(()=>{z(null),e()},1500))},W=()=>{const V=new Date().getHours();return V>=5&&V<12?"Good morning":V>=12&&V<17?"Good afternoon":V>=17&&V<22?"Good evening":"Late night focus"};return d.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-fadeIn select-none ${m?"bg-black/35":"bg-black/80"}`,children:[d.jsx("div",{className:"fixed inset-0",onClick:e,"aria-hidden":"true"}),d.jsxs("div",{role:"dialog","aria-modal":"true","aria-labelledby":"profile-modal-title",className:`relative w-full max-w-lg overflow-hidden rounded-3xl border shadow-2xl flex flex-col z-10 ${m?"bg-white/95 border-zinc-200 text-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)]":"cosmic-card border-white/[0.14] text-white shadow-2xl"}`,children:[d.jsxs("div",{className:`flex items-center justify-between p-5 pb-3 border-b shrink-0 ${m?"border-zinc-200":"border-white/[0.08]"}`,children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:`w-8 h-8 rounded-xl border flex items-center justify-center ${m?"bg-amber-50 border-amber-200 text-amber-700":"bg-amber-500/20 border-amber-400/30 text-amber-300"}`,children:d.jsx($g,{className:"w-4 h-4"})}),d.jsxs("div",{children:[d.jsx("h2",{id:"profile-modal-title",className:`text-sm font-display uppercase tracking-widest font-bold ${m?"text-zinc-900":"text-white"}`,children:"Personal Sanctuary Profile"}),d.jsx("p",{className:`text-[11px] font-sans ${m?"text-zinc-500":"text-zinc-400"}`,children:"Tailor your name, daily motto & focus targets"})]})]}),d.jsxs("div",{className:"flex items-center gap-1.5",children:[d.jsx("button",{type:"button",onClick:M,"aria-label":"Reset profile to defaults",title:"Reset to defaults",className:`p-2 rounded-xl transition-colors cursor-pointer ${m?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white"}`,children:d.jsx(Tr,{className:"w-3.5 h-3.5"})}),d.jsx("button",{type:"button",onClick:e,"aria-label":"Close Profile Modal",className:`p-2 rounded-xl transition-colors cursor-pointer ${m?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white"}`,children:d.jsx(Ar,{className:"w-4 h-4"})})]})]}),d.jsxs("form",{onSubmit:I,className:"p-6 space-y-4",children:[d.jsxs("div",{className:`p-4 rounded-2xl border text-center space-y-1 transition-all ${m?"bg-zinc-50 border-zinc-200 text-zinc-800":"bg-white/[0.03] border-white/[0.08] text-zinc-200"}`,children:[d.jsx("span",{className:`text-[10px] font-mono uppercase tracking-widest ${m?"text-zinc-500":"text-zinc-400"}`,children:"Live Greeting Preview"}),d.jsxs("p",{className:"text-xs sm:text-sm font-sans leading-relaxed",children:[W(),","," ",d.jsx("strong",{className:m?"text-zinc-950":"text-white",children:_.trim()||"Azan"}),". •"," ",d.jsxs("span",{className:`italic ${m?"text-zinc-700 font-medium":"text-zinc-300"}`,children:["“",h.trim()||"Remember, you are here for you.","”"]})]})]}),d.jsxs("div",{className:"space-y-1.5",children:[d.jsxs("label",{className:`text-xs font-semibold flex items-center justify-between ${m?"text-zinc-800":"text-zinc-200"}`,children:[d.jsxs("span",{className:"flex items-center gap-1.5",children:[d.jsx(NM,{className:"w-3.5 h-3.5 text-amber-500"}),d.jsx("span",{children:"Your Name"})]}),d.jsx("span",{className:`text-[10px] font-normal ${m?"text-zinc-500":"text-zinc-400"}`,children:"Used in greetings & daily focus"})]}),d.jsx("input",{type:"text",value:_,onChange:V=>E(V.target.value),placeholder:"e.g. Azan",className:"w-full cosmic-input rounded-xl px-3.5 py-2.5 text-xs font-medium"})]}),d.jsxs("div",{className:"space-y-1.5",children:[d.jsxs("label",{className:`text-xs font-semibold flex items-center justify-between ${m?"text-zinc-800":"text-zinc-200"}`,children:[d.jsxs("span",{className:"flex items-center gap-1.5",children:[d.jsx(DM,{className:"w-3.5 h-3.5 text-violet-400"}),d.jsx("span",{children:"Daily Mantra / Motto"})]}),d.jsx("span",{className:`text-[10px] font-normal ${m?"text-zinc-500":"text-zinc-400"}`,children:"Displayed on your wallpaper"})]}),d.jsx("input",{type:"text",value:h,onChange:V=>S(V.target.value),placeholder:"e.g. Remember, you are here for you.",className:"w-full cosmic-input rounded-xl px-3.5 py-2.5 text-xs font-medium"})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-1",children:[d.jsxs("div",{className:"space-y-1.5",children:[d.jsxs("label",{className:`text-xs font-semibold flex items-center gap-1.5 ${m?"text-zinc-800":"text-zinc-200"}`,children:[d.jsx(UM,{className:"w-3.5 h-3.5 text-emerald-400"}),d.jsx("span",{children:"Primary Focus Topic"})]}),d.jsx("input",{type:"text",value:b,onChange:V=>w(V.target.value),placeholder:"e.g. Engineering",className:"w-full cosmic-input rounded-xl px-3.5 py-2 text-xs"})]}),d.jsxs("div",{className:"space-y-1.5",children:[d.jsxs("label",{className:`text-xs font-semibold flex items-center gap-1.5 ${m?"text-zinc-800":"text-zinc-200"}`,children:[d.jsx(xg,{className:"w-3.5 h-3.5 text-amber-500"}),d.jsx("span",{children:"Default Focus Mode"})]}),d.jsx("input",{type:"text",value:v,onChange:V=>y(V.target.value),placeholder:"e.g. Deep Work",className:"w-full cosmic-input rounded-xl px-3.5 py-2 text-xs"})]})]}),d.jsxs("div",{className:"pt-2",children:[d.jsx("span",{className:`text-[10px] font-mono uppercase tracking-wider block mb-1.5 ${m?"text-zinc-500":"text-zinc-400"}`,children:"Quick Mantras"}),d.jsx("div",{className:"flex flex-wrap gap-1.5",children:["Remember, you are here for you.","Discipline equals true freedom.","Deep focus over scattered noise.","Build with relentless craft."].map(V=>d.jsxs("button",{type:"button",onClick:()=>S(V),className:`text-[11px] px-2.5 py-1 rounded-lg border transition-all text-left cursor-pointer ${h===V?m?"bg-violet-100 border-violet-300 text-violet-900 font-medium":"bg-violet-600/30 border-violet-400/50 text-violet-200 font-medium":m?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300"}`,children:["“",V,"”"]},V))})]}),d.jsxs("div",{className:`p-3.5 rounded-2xl border space-y-2.5 ${m?"bg-zinc-50 border-zinc-200":"bg-white/[0.02] border-white/[0.08]"}`,children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{className:"flex items-center gap-1.5",children:[d.jsx(EM,{className:`w-3.5 h-3.5 ${m?"text-violet-700":"text-violet-400"}`}),d.jsx("span",{className:`text-xs font-semibold ${m?"text-zinc-800":"text-zinc-200"}`,children:"Daily Rollover & Data Control"})]}),d.jsxs("span",{className:`text-[10px] font-mono ${m?"text-zinc-500":"text-zinc-400"}`,children:["Date: ",u]})]}),P&&d.jsxs("div",{className:"p-2 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs flex items-center gap-2",children:[d.jsx(Cr,{className:"w-3.5 h-3.5 shrink-0"}),d.jsx("span",{children:P})]}),d.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1",children:[d.jsxs("button",{type:"button",onClick:D,className:`px-3 py-2 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${m?"bg-white hover:bg-zinc-100 text-zinc-800 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200 border-white/[0.10]"}`,title:"Uncheck today's tasks & habits, reset hydration",children:[d.jsx(Tr,{className:"w-3.5 h-3.5 text-violet-400"}),d.jsx("span",{children:"Start Fresh Day"})]}),d.jsxs("button",{type:"button",onClick:J,className:`px-3 py-2 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${m?"bg-rose-50 hover:bg-rose-100 text-rose-700 border-rose-200":"bg-rose-950/20 hover:bg-rose-900/40 text-rose-300 border-rose-500/20 hover:border-rose-500/40"}`,title:"Wipe data and restore factory defaults",children:[d.jsx(lo,{className:"w-3.5 h-3.5 text-rose-400"}),d.jsx("span",{children:"Factory Reset"})]})]})]}),d.jsxs("div",{className:"pt-4 flex items-center justify-end gap-2.5",children:[d.jsx("button",{type:"button",onClick:e,className:`px-4 py-2.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${m?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300"}`,children:"Cancel"}),d.jsx("button",{type:"submit",className:`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all cursor-pointer ${N?"bg-emerald-500 text-white":m?"bg-zinc-900 hover:bg-zinc-800 text-white":"bg-violet-600 hover:bg-violet-500 text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]"}`,children:N?d.jsxs(d.Fragment,{children:[d.jsx(Cr,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Saved!"})]}):d.jsxs(d.Fragment,{children:[d.jsx(Cs,{className:"w-3.5 h-3.5"}),d.jsx("span",{children:"Save Profile"})]})})]})]})]})]})},WM=({routines:s,activeBlock:e,activeMinutesLeft:t,onSelectBlock:r,isLight:o=!1})=>{const[l,u]=xe.useState(50),[f,g]=xe.useState("12:00");xe.useEffect(()=>{const _=()=>{const h=new Date,S=h.getHours(),b=h.getMinutes(),w=(S+b/60)/24*100;u(w),g(`${S.toString().padStart(2,"0")}:${b.toString().padStart(2,"0")}`)};_();const E=setInterval(_,1e4);return()=>clearInterval(E)},[]);const m=_=>{if(_<=0)return"Ending soon";const E=Math.floor(_/60),h=_%60;return E===0?`${h}m remaining`:`${E}h ${h}m remaining`};return d.jsxs("div",{className:"w-full flex flex-col gap-2.5 select-none pt-1",children:[d.jsxs("div",{className:"flex items-center justify-between text-[11px] font-sans",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${e?"bg-amber-400":"bg-zinc-500"}`}),d.jsx("span",{className:`font-medium tracking-tight ${o?"text-zinc-900":"text-zinc-200"}`,children:e?e.title:"Free Rhythm"}),e&&t>0&&d.jsxs("span",{className:`text-[10px] font-mono tabular-nums ${o?"text-zinc-500":"text-zinc-400"}`,children:["· ",m(t)]})]}),d.jsx("span",{className:`font-mono text-[10px] tabular-nums tracking-wider ${o?"text-zinc-500":"text-zinc-400"}`,children:f})]}),d.jsxs("div",{className:"relative w-full py-1",children:[d.jsxs("div",{className:`relative h-2 rounded-full overflow-hidden transition-all ${o?"bg-zinc-200":"bg-white/[0.08]"}`,children:[d.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-zinc-700/30 via-amber-500/20 via-sky-500/20 via-indigo-500/20 to-zinc-700/30"}),s.map(_=>{let E=_.startHour,h=_.endHour;if(E===void 0||h===void 0){const v=_.timeRange.split(/[-–—to]/i);E=Jr(v[0],0),h=Jr(v[1],24)}const S=(e==null?void 0:e.id)===_.id,b=Math.min(24,Math.max(0,E))/24*100,w=(Math.min(24,Math.max(0,h))-Math.min(24,Math.max(0,E)))/24*100;return d.jsx("div",{onClick:()=>r&&r(_),className:`absolute top-0 bottom-0 transition-opacity cursor-pointer ${S?"bg-amber-400/50 shadow-sm z-10":"bg-white/10 hover:bg-white/20"}`,style:{left:`${b}%`,width:`${Math.max(2,w)}%`,borderLeft:"1px solid rgba(255,255,255,0.15)"},title:`${_.title} (${_.timeRange})`},_.id)})]}),d.jsx("div",{className:"absolute top-0 bottom-0 pointer-events-none transition-all duration-1000 ease-linear flex flex-col items-center justify-center -translate-x-1/2",style:{left:`${Math.min(99,Math.max(1,l))}%`},children:d.jsx("div",{className:"w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] border border-black/40"})})]}),d.jsxs("div",{className:`flex justify-between text-[9px] font-mono tabular-nums px-0.5 ${o?"text-zinc-500":"text-zinc-400"}`,children:[d.jsx("span",{children:"06:00"}),d.jsx("span",{children:"12:00"}),d.jsx("span",{children:"18:00"}),d.jsx("span",{children:"24:00"})]})]})},$M=()=>{const{profile:s,tasks:e,toggleTask:t,addTask:r,deleteTask:o,habits:l,toggleHabit:u,addHabit:f,routines:g,addRoutineBlock:m,deleteRoutineBlock:_,resetRoutines:E,activeRoutineBlock:h,activeRoutineMinutesLeft:S,studySeconds:b,isStudyActive:w,studySubject:v,setStudySubject:y,toggleStudyTimer:N,resetStudyTimer:U,studySessions:P,logManualStudyTime:z,deleteStudySession:I,pomodoroPhase:M,pomodoroSecondsLeft:D,pomodoroTotalSeconds:J,pomodoroSettings:W,setPomodoroSettings:V,startPomodoro:B,togglePomodoro:X,resetPomodoro:F,skipPomodoroPhase:te,togglePomodoroDisplayMode:de,hydration:$,setHydration:ie,sleepHours:O,setSleep:ee,dailyRating:k,setDailyRating:q,lastActiveDate:pe,resetDayProgress:Y,isHUDHidden:oe,setIsHUDHidden:me,wallpaperSettings:ge,audioSource:be,isAudioPlaying:Ie,activeSoundscapeId:it,playSoundscape:$e,stopSoundscape:De,isYouTubePlaying:Ve,activeYouTubeItem:Xe,toggleYouTubePlay:nt,appTheme:_t,toggleAppTheme:ht,isEcoSleeping:lt,setIsEcoSleeping:At}=ss(),le=_t==="light",[Mt,jt]=xe.useState(!1),[an,Q]=xe.useState(!1),[hn,Tt]=xe.useState(!1),[kt,ke]=xe.useState(!1),[Rt,Ye]=xe.useState("none"),[ut,R]=xe.useState("pomodoro"),[T,se]=xe.useState("12"),[Pe,Me]=xe.useState("00"),[Le,Be]=xe.useState("00"),[_e,we]=xe.useState(0),[Oe,j]=xe.useState("PM"),[Te,ye]=xe.useState(""),[Ce,he]=xe.useState(322),[Ee,Ge]=xe.useState(80),Qe=`${T}:${Pe}:${Le}`,[Ae,Ke]=xe.useState(""),[rt,je]=xe.useState(s.defaultFocusTopic||"Engineering"),[pt,Ht]=xe.useState(s.defaultFocusMode||"Deep Work"),[Qt,tn]=xe.useState("60"),[on,qt]=xe.useState(""),Bn=ae=>{z(ae,rt||v||"Engineering",pt||"Manual Entry");const bt=ae>=60?`${(ae/60).toFixed(1)}h`:`${ae}m`;qt(`+${bt} recorded to ${rt||v}!`),setTimeout(()=>qt(""),3e3)},wn=ae=>{ae.preventDefault();const bt=parseFloat(Qt);!isNaN(bt)&&bt>0&&(Bn(bt),tn(""))},[nn,xt]=xe.useState(!1),[Ut,Ct]=xe.useState(""),[Jt,en]=xe.useState(""),[Hn,Gn]=xe.useState(""),[ei,Gt]=xe.useState(!1),[lr,cr]=xe.useState("30"),[ur,ji]=xe.useState("5"),ln=M==="focus"||M==="break"||M==="paused",A=Math.floor(D/60),K=D%60,ce=A.toString().padStart(2,"0"),L=K.toString().padStart(2,"0"),H=J>0?1-D/J:0,re=ln?H*360:_e*360,Ne=ln&&W.displayMode==="numbers",Re=Ne?ce:T,ze=Ne?L:Pe,qe=()=>{const ae=new Date().getHours();return ae>=5&&ae<12?"Good morning":ae>=12&&ae<17?"Good afternoon":ae>=17&&ae<22?"Good evening":"Late night focus"};xe.useEffect(()=>{const ae=()=>{const Wt=new Date,It=Wt.getHours(),Kt=Wt.getMinutes(),Sn=Wt.getSeconds(),$i=It>=12?"PM":"AM",Pr=ge.clockFormat==="24h",Xi=Pr?It.toString().padStart(2,"0"):(It%12||12).toString().padStart(2,"0"),vc=Kt.toString().padStart(2,"0"),bo=Sn.toString().padStart(2,"0");se(Xi),Me(vc),Be(bo),we(Sn/60),j(Pr?"":$i);const as=new Date(Wt.getFullYear(),0,0),_c=Wt.getTime()-as.getTime(),wo=1e3*60*60*24,Ps=Math.floor(_c/wo);he(Ps);const Mo=Math.round((It*60+Kt)/1440*100);Ge(Mo);const yc=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],os=["January","February","March","April","May","June","July","August","September","October","November","December"];ye(`${yc[Wt.getDay()]}, ${os[Wt.getMonth()]} ${Wt.getDate()}, ${Wt.getFullYear()}`)};ae();const bt=setInterval(ae,1e3);return()=>clearInterval(bt)},[ge.clockFormat,ge.showSeconds,ge.clockDivider]);const st=ge.clockFontStyle==="serif"?"font-serif font-bold tracking-tight":ge.clockFontStyle==="mono"?"font-mono font-bold tracking-tight":ge.clockFontStyle==="minimal"?"font-sans font-light tracking-[0.06em]":"font-display font-extrabold tracking-tight",vt=ge.clockSize==="compact"?"text-6xl sm:text-7xl md:text-8xl lg:text-[110px]":ge.clockSize==="heroic"?"text-7xl sm:text-9xl md:text-[11rem] lg:text-[160px]":"text-7xl sm:text-8xl md:text-9xl lg:text-[136px]",Ze=ge.clockHalo==="none"?"opacity-0":ge.clockHalo==="subtle"?"bg-[radial-gradient(circle,rgba(139,92,246,0.14)_0%,rgba(139,92,246,0.03)_50%,transparent_70%)]":"bg-[radial-gradient(circle,rgba(139,92,246,0.22)_0%,rgba(139,92,246,0.06)_50%,transparent_75%)]",yt=ge.clockColor==="white"?le?"text-zinc-950 [text-shadow:0_2px_12px_rgba(0,0,0,0.1)]":"text-white [text-shadow:0_8px_32px_rgba(0,0,0,0.85)]":ge.clockColor==="gold"?"text-amber-300 [text-shadow:0_4px_24px_rgba(245,158,11,0.5)]":ge.clockColor==="cyan"?"text-cyan-300 [text-shadow:0_4px_24px_rgba(6,182,212,0.5)]":ge.clockColor==="rose"?"text-rose-300 [text-shadow:0_4px_24px_rgba(244,63,94,0.5)]":le?"text-zinc-900 [text-shadow:0_2px_12px_rgba(200,180,160,0.25)]":"text-white [text-shadow:0_8px_32px_rgba(0,0,0,0.85)]",rn=ge.clockPosition==="zenith"?"mt-6 sm:mt-12 mb-auto":ge.clockPosition==="bottom"?"mt-auto mb-16 sm:mb-20":"my-auto";xe.useEffect(()=>{const ae=bt=>{bt.key==="Escape"&&(Rt!=="none"?Ye("none"):oe?me(!1):kt&&ke(!1))};return window.addEventListener("keydown",ae),()=>window.removeEventListener("keydown",ae)},[Rt,oe,kt,me]);const Xt=ae=>{ae.preventDefault(),Ae.trim()&&(r(Ae.trim()),Ke(""))},zt=e.filter(ae=>ae.completed).length,dn=e.length>0?Math.round(zt/e.length*100):0,et=l.filter(ae=>ae.completed).length,yn=l.length>0?Math.round(et/l.length*100):0,ot=new Date;ot.setDate(ot.getDate()-7);const vn=+((P||[]).filter(ae=>new Date(ae.timestamp)>=ot).reduce((ae,bt)=>ae+bt.durationSeconds,0)/3600).toFixed(1),Wi=Math.min(100,Math.round(vn/15*100)),ti=ae=>{const bt=Math.floor(ae/60),Wt=ae%60;return`${bt.toString().padStart(2,"0")}:${Wt.toString().padStart(2,"0")}`},ui=pa.find(ae=>ae.id===it)||pa[0];return d.jsxs("div",{className:"relative w-screen h-screen max-h-screen overflow-hidden flex flex-col justify-between pt-safe-top pt-8 sm:pt-10 px-4 sm:px-8 pb-safe-bottom pb-6 select-none z-10 animate-fadeIn",children:[d.jsx("h1",{className:"sr-only",children:"FOR ME — Living Wallpaper & Focus Sanctuary"}),d.jsxs("header",{className:`relative flex items-center justify-between w-full min-h-12 shrink-0 z-20 gap-3 transition-opacity duration-700 ${oe||lt?"opacity-0 pointer-events-none":"opacity-100"}`,children:[d.jsxs("button",{type:"button",onClick:()=>me(!0),className:"flex items-center gap-2.5 cursor-pointer group shrink-0 text-left",title:"Enter Zen Wallpaper Mode",children:[d.jsx("div",{className:`w-8 h-8 rounded-full border flex items-center justify-center text-[11px] font-mono font-medium tracking-tight shadow-sm transition-all ${le?"border-zinc-300/80 bg-white/80 text-zinc-900 group-hover:bg-white group-hover:border-zinc-400":"border-white/15 bg-white/[0.04] text-zinc-200 group-hover:bg-white/[0.1] group-hover:border-white/30"}`,children:"FM"}),d.jsx("span",{className:`font-sans font-bold text-[11px] tracking-[0.22em] uppercase group-hover:opacity-85 transition-opacity ${le?"text-zinc-900":"text-zinc-200"}`,children:"FOR ME"})]}),d.jsx("div",{className:"hidden md:flex absolute left-1/2 -translate-x-1/2 items-center pointer-events-none",children:d.jsxs("div",{className:`pointer-events-auto flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-2xl border text-[11px] font-sans font-medium shadow-sm transition-all ${le?"bg-white/85 border-zinc-200/90 text-zinc-700":"bg-[#090b16]/75 border-white/[0.08] text-zinc-300"}`,children:[d.jsx(Cs,{className:"w-3 h-3 text-amber-400"}),d.jsx("span",{children:Te}),h&&d.jsxs(d.Fragment,{children:[d.jsx("span",{className:"opacity-25",children:"•"}),d.jsxs("button",{type:"button",onClick:()=>ke(!0),className:"hover:underline flex items-center gap-1 font-mono text-[10px] text-violet-400 cursor-pointer",title:"Open Daily Routine Protocols & 24h Timeline",children:[d.jsx(kM,{className:"w-3 h-3 text-amber-400"}),d.jsx("span",{children:h.title})]})]})]})}),d.jsxs("nav",{"aria-label":"Wallpaper Quick Controls",className:`flex items-center gap-0.5 p-1 rounded-full backdrop-blur-2xl border transition-all ${le?"bg-white/90 border-zinc-200/90 text-zinc-700 shadow-[0_8px_24px_rgba(0,0,0,0.06)]":"bg-[#090b16]/75 border-white/[0.12] text-zinc-300 shadow-[0_12px_32px_rgba(0,0,0,0.6)]"}`,children:[d.jsx("button",{type:"button",onClick:()=>jt(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${le?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Wallpaper Studio (Celestial Objects, Waves & Lighting)","aria-label":"Wallpaper Studio",children:d.jsx(Ig,{className:"w-3.5 h-3.5"})}),d.jsx("button",{type:"button",onClick:()=>ke(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${le?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Daily Routine Protocols","aria-label":"Daily Routine Protocols",children:d.jsx(am,{className:"w-3.5 h-3.5"})}),d.jsxs("button",{type:"button",onClick:()=>Q(!0),className:`relative w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${Ie||Ve?le?"text-violet-600 bg-violet-50":"text-violet-300 bg-violet-600/20":le?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Focus Audio Sanctuary (YouTube Streams & Ambient Soundscapes)","aria-label":"Focus Audio Sanctuary",children:[be==="youtube"&&Ve?d.jsx(co,{className:"w-3.5 h-3.5 text-red-500 animate-pulse"}):d.jsx(dc,{className:`w-3.5 h-3.5 ${Ie||Ve?"animate-pulse":""}`}),(Ie||Ve)&&d.jsx("span",{className:"absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse"})]}),d.jsx("button",{type:"button",onClick:()=>Tt(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${le?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:`Profile & Motto (${s.name})`,"aria-label":"Profile and Daily Mantra",children:d.jsx($g,{className:"w-3.5 h-3.5"})}),d.jsx("div",{className:`w-px h-3.5 mx-0.5 ${le?"bg-zinc-200":"bg-white/10"}`}),d.jsx("button",{type:"button",onClick:ht,className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${le?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:`Switch to ${le?"Obsidian Dark":"Creamy Light"} Theme`,"aria-label":"Toggle Light/Dark Theme",children:le?d.jsx(fc,{className:"w-3.5 h-3.5"}):d.jsx(Og,{className:"w-3.5 h-3.5"})}),d.jsx("button",{type:"button",onClick:()=>me(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${le?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Zen Mode (Hide all controls)","aria-label":"Enter Zen Mode",children:d.jsx(RM,{className:"w-3.5 h-3.5"})})]})]}),d.jsxs("main",{"aria-label":`Current time ${Qe}`,className:`${rn} text-center flex flex-col items-center justify-center relative z-20 py-4 select-none transition-all duration-300`,children:[d.jsx("div",{className:`absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[780px] lg:h-[780px] rounded-full ${Ze} pointer-events-none -z-10`}),d.jsxs("div",{className:"relative flex flex-col items-center group",children:[d.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none -z-10",children:d.jsxs("div",{className:`relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] md:w-[640px] md:h-[640px] rounded-full border border-dashed transition-all ${le?"border-zinc-300/70":"border-white/[0.08]"}`,children:[d.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-violet-400 shadow-[0_0_12px_rgba(168,85,247,0.9)]"}),d.jsx("div",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-white/40"}),d.jsx("div",{className:"absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-white/40"}),d.jsx("div",{className:"absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-white/40"}),d.jsx("div",{className:"absolute inset-0 transition-transform duration-1000 ease-linear pointer-events-none",style:{transform:`rotate(${re}deg)`},children:d.jsxs("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center",children:[d.jsx("div",{className:`w-3.5 h-3.5 rounded-full animate-ping opacity-75 ${ln?M==="break"?"bg-cyan-400":"bg-violet-400":ge.clockColor==="gold"?"bg-amber-400":ge.clockColor==="cyan"?"bg-cyan-400":ge.clockColor==="rose"?"bg-rose-400":"bg-violet-400"}`}),d.jsx("div",{className:`absolute w-3 h-3 rounded-full shadow-lg ${ln?M==="break"?"bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,1)]":"bg-violet-300 shadow-[0_0_20px_rgba(168,85,247,1)]":ge.clockColor==="gold"?"bg-amber-300 shadow-[0_0_20px_rgba(251,191,36,1)]":ge.clockColor==="cyan"?"bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,1)]":ge.clockColor==="rose"?"bg-rose-300 shadow-[0_0_20px_rgba(244,63,94,1)]":"bg-violet-300 shadow-[0_0_20px_rgba(168,85,247,1)]"}`})]})}),d.jsx("div",{className:`absolute inset-8 sm:inset-12 md:inset-16 rounded-full border transition-all ${le?"border-zinc-200/50":"border-white/[0.04]"}`})]})}),ln?d.jsxs("button",{type:"button",onClick:de,className:`flex items-center gap-2 sm:gap-2.5 mb-2 sm:mb-3 px-4 py-1.5 rounded-full border backdrop-blur-2xl text-[10px] sm:text-[11px] font-mono tracking-widest uppercase transition-all shadow-md cursor-pointer group ${M==="break"?le?"bg-cyan-50/90 border-cyan-200 text-cyan-900 shadow-sm":"bg-cyan-950/60 border-cyan-500/40 text-cyan-300 shadow-[0_4px_24px_rgba(6,182,212,0.3)]":le?"bg-violet-50/90 border-violet-200 text-violet-900 shadow-sm":"bg-[#090b16]/85 border-violet-500/40 text-violet-300 shadow-[0_4px_24px_rgba(139,92,246,0.35)]"}`,title:"Click to toggle countdown digits vs wall clock digits",children:[d.jsxs("span",{className:"flex items-center gap-1.5 font-bold",children:[d.jsxs("span",{className:"relative flex h-2 w-2",children:[d.jsx("span",{className:`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${M==="break"?"bg-cyan-400":"bg-violet-400"}`}),d.jsx("span",{className:`relative inline-flex rounded-full h-2 w-2 ${M==="break"?"bg-cyan-500":"bg-violet-500"}`})]}),M==="break"?"RECOVERY BREAK":"FOCUS SPRINT"]}),d.jsx("span",{className:"opacity-25",children:"•"}),d.jsxs("span",{className:"tabular-nums font-bold",children:[ce,":",L," REMAINING"]}),d.jsx("span",{className:"opacity-25 hidden sm:inline",children:"•"}),d.jsx("span",{className:"hidden sm:inline opacity-80 uppercase",children:v}),d.jsx("span",{className:"opacity-25 hidden md:inline",children:"•"}),d.jsx("span",{className:"hidden md:inline text-[9px] opacity-60 group-hover:text-amber-400 transition-colors",children:Ne?"SHOW CLOCK":"SHOW COUNTDOWN"})]}):d.jsxs("div",{className:`flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3 px-4 py-1 rounded-full border backdrop-blur-2xl text-[10px] sm:text-[11px] font-mono tracking-widest uppercase transition-all shadow-md ${le?"bg-white/80 border-zinc-200 text-zinc-700":"bg-[#090b16]/75 border-white/[0.12] text-zinc-300 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"}`,children:[d.jsxs("span",{className:"flex items-center gap-1.5 text-emerald-400 font-semibold",children:[d.jsxs("span",{className:"relative flex h-2 w-2",children:[d.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),d.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-emerald-500"})]}),"EPHEMERIS"]}),d.jsx("span",{className:"opacity-25",children:"•"}),d.jsxs("span",{className:"tabular-nums",children:["DAY ",Ce]}),d.jsx("span",{className:"opacity-25",children:"•"}),d.jsxs("span",{className:"tabular-nums text-violet-400 font-semibold",children:[Ee,"% SOLAR"]}),d.jsx("span",{className:"opacity-25 hidden sm:inline",children:"•"}),d.jsx("span",{className:"hidden sm:inline opacity-70",children:"AZAN ZENITH"})]}),d.jsxs("div",{onClick:ln?de:void 0,className:`inline-flex items-center justify-center max-w-[95vw] px-2 select-none leading-none flex-nowrap transition-all ${ln?"cursor-pointer":""} ${st} ${yt}`,title:ln?"Click to toggle countdown / real time digits":void 0,children:[d.jsx("span",{className:`${vt} tracking-tight tabular-nums transition-all ${le?"text-zinc-950 font-bold":"bg-gradient-to-b from-white via-white/95 to-zinc-400/90 bg-clip-text text-transparent font-bold"}`,children:Re}),d.jsx("span",{className:`inline-flex items-center justify-center px-1.5 sm:px-3 text-3xl sm:text-5xl md:text-6xl lg:text-7xl select-none transition-colors ${ln?M==="break"?"text-cyan-400":"text-violet-400":ge.clockColor==="gold"?"text-amber-400":ge.clockColor==="cyan"?"text-cyan-400":ge.clockColor==="rose"?"text-rose-400":le?"text-zinc-600":"text-violet-400"}`,children:ge.clockDivider==="dot"?"·":ge.clockDivider==="space"?" ":":"}),d.jsx("span",{className:`${vt} tracking-tight tabular-nums transition-all ${le?"text-zinc-950 font-bold":"bg-gradient-to-b from-white via-white/95 to-zinc-400/90 bg-clip-text text-transparent font-bold"}`,children:ze}),d.jsxs("div",{className:"flex flex-col items-center justify-center ml-3 sm:ml-5 md:ml-7 gap-2 self-center",children:[ln?d.jsxs("button",{type:"button",onClick:ae=>{ae.stopPropagation(),X()},className:`relative flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl border backdrop-blur-3xl transition-all shadow-2xl cursor-pointer group/pod ${le?"bg-white/95 border-violet-200 text-zinc-950 shadow-md hover:border-violet-400":"bg-[#090b16]/95 border-violet-500/30 text-white shadow-[0_12px_40px_rgba(0,0,0,0.8)] hover:border-violet-400/60"}`,title:M==="paused"?"Resume focus":"Pause focus (Tap to toggle)",children:[d.jsxs("svg",{className:"absolute inset-1.5 w-[calc(100%-12px)] h-[calc(100%-12px)] -rotate-90 pointer-events-none",viewBox:"0 0 36 36",children:[d.jsx("circle",{cx:"18",cy:"18",r:"15",stroke:"currentColor",strokeWidth:"2.5",className:"opacity-15",fill:"none"}),d.jsx("circle",{cx:"18",cy:"18",r:"15",stroke:"currentColor",strokeWidth:"2.8",className:`transition-all duration-300 ${M==="break"?"text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]":"text-violet-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]"}`,strokeDasharray:"94.25",strokeDashoffset:94.25*(1-H),strokeLinecap:"round",fill:"none"})]}),d.jsx("span",{className:"font-mono text-xs sm:text-sm md:text-base font-extrabold tabular-nums tracking-wider leading-none z-10 drop-shadow-sm",children:Ne?`${T}:${Pe}`:`${ce}:${L}`}),d.jsx("span",{className:`text-[7px] sm:text-[8px] font-mono tracking-widest uppercase mt-1 z-10 font-bold ${M==="paused"?"text-amber-400":M==="break"?"text-cyan-400":"text-violet-400"}`,children:M==="paused"?"PAUSED":Ne?"CLOCK":M==="break"?"BREAK":"FOCUS"})]}):ge.showSeconds&&d.jsxs("div",{className:`relative flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl border backdrop-blur-3xl transition-all shadow-2xl ${le?"bg-white/95 border-zinc-300 text-zinc-950 shadow-md":"bg-[#090b16]/90 border-white/20 text-white shadow-[0_12px_40px_rgba(0,0,0,0.8)]"}`,children:[d.jsxs("svg",{className:"absolute inset-1.5 w-[calc(100%-12px)] h-[calc(100%-12px)] -rotate-90 pointer-events-none",viewBox:"0 0 36 36",children:[d.jsx("circle",{cx:"18",cy:"18",r:"15",stroke:"currentColor",strokeWidth:"2.5",className:"opacity-15",fill:"none"}),d.jsx("circle",{cx:"18",cy:"18",r:"15",stroke:"currentColor",strokeWidth:"2.8",className:`transition-all duration-300 ${ge.clockColor==="gold"?"text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]":ge.clockColor==="cyan"?"text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]":ge.clockColor==="rose"?"text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.9)]":"text-violet-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]"}`,strokeDasharray:"94.25",strokeDashoffset:94.25*(1-_e),strokeLinecap:"round",fill:"none"})]}),d.jsx("span",{className:"font-mono text-base sm:text-xl md:text-2xl font-extrabold tabular-nums tracking-wider leading-none z-10 drop-shadow-sm",children:Le}),d.jsx("span",{className:"text-[7px] sm:text-[8px] font-mono tracking-widest uppercase opacity-60 mt-1 z-10 font-bold",children:"SEC"})]}),ln?d.jsxs("div",{className:"flex items-center gap-1 z-10",children:[d.jsx("button",{type:"button",onClick:ae=>{ae.stopPropagation(),te()},className:`text-[9px] font-mono px-2 py-0.5 rounded-lg border backdrop-blur-xl transition-all cursor-pointer ${le?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/10 hover:bg-white/20 border-white/15 text-zinc-300"}`,title:"Skip to next phase",children:"SKIP"}),d.jsx("button",{type:"button",onClick:ae=>{ae.stopPropagation(),F()},className:`text-[9px] font-mono px-2 py-0.5 rounded-lg border backdrop-blur-xl transition-all cursor-pointer ${le?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/10 hover:bg-white/20 border-white/15 text-zinc-300"}`,title:"Reset Pomodoro",children:"RESET"})]}):Oe?d.jsx("span",{className:`text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase px-3 py-1 rounded-xl border backdrop-blur-2xl transition-all ${le?"bg-zinc-100 border-zinc-200 text-zinc-800 shadow-sm":"bg-white/[0.08] border-white/15 text-zinc-200 shadow-md"}`,children:Oe}):null]})]})]}),ge.showGreeting!==!1&&d.jsx("div",{className:"mt-7 sm:mt-9 flex justify-center w-full px-3",children:d.jsx("button",{type:"button",onClick:()=>Tt(!0),className:`group relative text-xs sm:text-sm font-sans tracking-wide px-6 sm:px-8 py-3 rounded-2xl sm:rounded-full backdrop-blur-3xl max-w-xl text-center leading-relaxed shadow-xl cursor-pointer transition-all hover:scale-[1.01] border ${le?"bg-white/95 text-zinc-900 border-zinc-300/90 shadow-md hover:bg-white hover:border-zinc-400":"bg-[#0a0618]/90 text-zinc-200 border-white/[0.18] shadow-[0_16px_50px_rgba(0,0,0,0.7)] hover:border-violet-400/50 hover:shadow-[0_16px_60px_rgba(168,85,247,0.25)]"}`,title:"Click to personalize name & daily mantra",children:d.jsxs("div",{className:"flex items-center justify-center gap-2 flex-wrap",children:[d.jsxs("span",{className:`font-bold tracking-normal ${le?"text-zinc-950":"text-white"}`,children:[qe(),", ",s.name]}),d.jsx("span",{className:"opacity-30",children:"•"}),d.jsxs("span",{className:`italic font-medium ${le?"text-zinc-800":"text-zinc-200"}`,children:["“",s.motto||"Discipline equals true freedom.","”"]})]})})}),lt?d.jsxs("button",{type:"button",onClick:()=>At(!1),className:"mt-8 flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs transition-all border shadow-2xl cursor-pointer bg-black/60 text-white/80 border-white/15 hover:bg-black/80 hover:text-white backdrop-blur-xl",children:[d.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),d.jsx("span",{className:"font-sans tracking-widest text-[11px] uppercase",children:"Eco Sleep Active • Move cursor or tap to wake"})]}):oe?d.jsxs("button",{type:"button",onClick:()=>me(!1),className:`mt-8 flex items-center gap-2 px-5 py-2.5 rounded-full text-xs transition-all border shadow-xl cursor-pointer ${le?"bg-white/90 text-zinc-800 border-zinc-300/80 hover:bg-white":"cosmic-dock text-zinc-300 hover:text-white border-white/[0.12] hover:border-violet-400/40"}`,children:[d.jsx(wg,{className:"w-3.5 h-3.5 text-amber-400"}),d.jsx("span",{className:"font-display tracking-wider",children:"Tap anywhere to restore controls"})]}):null]}),Rt!=="none"&&!oe&&!lt&&d.jsxs("div",{className:"fixed inset-x-0 bottom-24 z-30 flex justify-center px-4 animate-fadeIn pointer-events-auto",children:[d.jsx("div",{className:"fixed inset-0 -z-10",onClick:()=>Ye("none")}),Rt==="tasks"&&d.jsxs("div",{className:`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${le?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[d.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${le?"border-zinc-200":"border-white/[0.08]"}`,children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("h2",{className:"text-xs font-display uppercase tracking-[0.18em] font-semibold",children:"Tasks for the Day"}),d.jsxs("div",{className:"flex items-center gap-1 p-0.5 rounded-lg border bg-black/10 border-white/10",children:[d.jsxs("button",{type:"button",onClick:()=>Ye("tasks"),className:"px-2 py-0.5 rounded text-[10px] font-semibold bg-violet-600 text-white",children:["Tasks (",zt,"/",e.length,")"]}),d.jsxs("button",{type:"button",onClick:()=>Ye("habits"),className:"px-2 py-0.5 rounded text-[10px] font-medium text-zinc-400 hover:text-white",children:["Habits (",et,"/",l.length,")"]})]})]}),d.jsxs("div",{className:"flex items-center gap-1.5",children:[d.jsx("button",{type:"button",onClick:()=>{window.confirm("Reset and uncheck all tasks for today?")&&e.forEach(ae=>{ae.completed&&t(ae.id)})},className:`p-1 rounded-md border transition-colors cursor-pointer ${le?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-600":"bg-white/10 hover:bg-white/20 border-white/10 text-zinc-300 hover:text-white"}`,title:"Reset today's tasks","aria-label":"Reset tasks for today",children:d.jsx(Tr,{className:"w-3.5 h-3.5"})}),d.jsx("button",{type:"button",onClick:()=>Ye("none"),className:"p-1 text-zinc-400 hover:text-white cursor-pointer","aria-label":"Close Tasks Panel",children:d.jsx(Ar,{className:"w-3.5 h-3.5"})})]})]}),d.jsxs("form",{onSubmit:Xt,className:"flex items-center gap-2 shrink-0",children:[d.jsx("input",{type:"text",placeholder:"Add task for today...",value:Ae,onChange:ae=>Ke(ae.target.value),className:"flex-1 cosmic-input rounded-xl px-3.5 py-2 text-xs placeholder-zinc-500",autoFocus:!0}),d.jsx("button",{type:"submit",disabled:!Ae.trim(),className:"w-8 h-8 rounded-xl bg-violet-600 hover:bg-violet-500 text-white disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all shrink-0 cursor-pointer shadow-sm",children:d.jsx(nc,{className:"w-4 h-4"})})]}),d.jsx("div",{className:"max-h-56 overflow-y-auto space-y-1.5 pr-1",children:e.map(ae=>d.jsxs("div",{className:`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs select-none group ${ae.completed?le?"bg-zinc-100/60 border-zinc-200/60 text-zinc-400":"bg-white/[0.015] border-white/[0.04] text-zinc-500":le?"bg-white/80 hover:bg-white border-zinc-200/80 text-zinc-800":"bg-white/[0.035] hover:bg-white/[0.07] border-white/[0.08] hover:border-violet-400/20 text-zinc-200"}`,children:[d.jsxs("div",{className:"flex items-center gap-2.5 truncate flex-1 cursor-pointer pr-2",onClick:()=>t(ae.id),children:[d.jsx("div",{className:`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border transition-all ${ae.completed?"bg-emerald-500 border-emerald-400 text-white shadow-sm":le?"border-zinc-300 group-hover:border-violet-500":"border-white/[0.25] group-hover:border-violet-400"}`,children:ae.completed&&d.jsx(Cr,{className:"w-2.5 h-2.5 stroke-[3]"})}),d.jsx("span",{className:`font-sans truncate ${ae.completed?"line-through text-zinc-400":le?"text-zinc-800 font-medium":"text-zinc-200"}`,children:ae.text})]}),d.jsx("button",{type:"button",onClick:()=>o(ae.id),className:"opacity-0 group-hover:opacity-100 text-zinc-400 hover:text-red-400 transition-opacity p-1 cursor-pointer",children:d.jsx(lo,{className:"w-3.5 h-3.5"})})]},ae.id))}),d.jsxs("div",{className:`pt-2.5 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${le?"border-zinc-200 text-zinc-600":"border-white/[0.08] text-zinc-400"}`,children:[d.jsxs("span",{className:"flex items-center gap-1.5",children:[d.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400"}),"Day Progress"]}),d.jsxs("span",{className:`font-display font-medium tabular-nums ${le?"text-zinc-900":"text-zinc-200"}`,children:[dn,"% done"]})]})]}),Rt==="habits"&&d.jsxs("div",{className:`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${le?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[d.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${le?"border-zinc-200":"border-white/[0.08]"}`,children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("h2",{className:"text-xs font-display uppercase tracking-[0.18em] font-semibold",children:"Daily Rhythm Pulse"}),d.jsxs("div",{className:"flex items-center gap-1 p-0.5 rounded-lg border bg-black/10 border-white/10",children:[d.jsxs("button",{type:"button",onClick:()=>Ye("tasks"),className:"px-2 py-0.5 rounded text-[10px] font-medium text-zinc-400 hover:text-white",children:["Tasks (",zt,"/",e.length,")"]}),d.jsxs("button",{type:"button",onClick:()=>Ye("habits"),className:"px-2 py-0.5 rounded text-[10px] font-semibold bg-violet-600 text-white",children:["Habits (",et,"/",l.length,")"]})]})]}),d.jsxs("div",{className:"flex items-center gap-1.5",children:[d.jsx("button",{type:"button",onClick:()=>{window.confirm("Reset today's habit checkmarks?")&&l.forEach(ae=>{ae.completed&&u(ae.id)})},className:`p-1 rounded-md border transition-colors cursor-pointer ${le?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-600":"bg-white/10 hover:bg-white/20 border-white/10 text-zinc-300 hover:text-white"}`,title:"Reset today's habits","aria-label":"Reset habits for today",children:d.jsx(Tr,{className:"w-3.5 h-3.5"})}),d.jsx("button",{type:"button",onClick:()=>{const ae=prompt("Add new daily habit:");ae&&f(ae)},className:`p-1 rounded-md border transition-colors cursor-pointer ${le?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/10 hover:bg-white/20 border-white/10 text-white"}`,title:"Add habit","aria-label":"Add new daily habit",children:d.jsx(nc,{className:"w-3.5 h-3.5"})}),d.jsx("button",{type:"button",onClick:()=>Ye("none"),className:"p-1 text-zinc-400 hover:text-white cursor-pointer","aria-label":"Close Habits Panel",children:d.jsx(Ar,{className:"w-3.5 h-3.5"})})]})]}),d.jsx("div",{className:"max-h-56 overflow-y-auto space-y-1.5 pr-1",children:l.map(ae=>d.jsxs("div",{onClick:()=>u(ae.id),className:`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs cursor-pointer select-none group ${ae.completed?le?"bg-zinc-100/60 border-zinc-200/60 text-zinc-400":"bg-white/[0.015] border-white/[0.04] text-zinc-400":le?"bg-white/80 hover:bg-white border-zinc-200/80 text-zinc-800":"bg-white/[0.035] hover:bg-white/[0.07] border-white/[0.08] hover:border-violet-400/20 text-zinc-200"}`,children:[d.jsxs("div",{className:"flex flex-col gap-0.5 truncate pr-2",children:[d.jsx("span",{className:`font-sans truncate ${ae.completed?"line-through text-zinc-400":le?"text-zinc-800 font-medium":"text-zinc-200"}`,children:ae.name}),d.jsx("div",{className:"flex items-center gap-1.5 text-[10px] font-mono",children:ae.streak>0?d.jsxs("span",{className:"text-amber-500 flex items-center gap-0.5 font-medium",children:[d.jsx(xg,{className:"w-3 h-3 fill-amber-500"})," ",ae.streak," day streak"]}):d.jsx("span",{className:le?"text-zinc-500":"text-zinc-400",children:"Ready today"})})]}),d.jsx("div",{className:`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border transition-all ${ae.completed?"bg-emerald-500 border-emerald-400 text-white shadow-sm":le?"border-zinc-300 group-hover:border-violet-500":"border-white/[0.25] group-hover:border-violet-400"}`,children:ae.completed&&d.jsx(Cr,{className:"w-2.5 h-2.5 stroke-[3]"})})]},ae.id))}),d.jsxs("div",{className:`pt-2.5 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${le?"border-zinc-200 text-zinc-600":"border-white/[0.08] text-zinc-400"}`,children:[d.jsxs("div",{className:`flex items-center gap-1.5 ${le?"text-zinc-700":"text-zinc-400"}`,children:[d.jsx(Cs,{className:`w-3.5 h-3.5 ${le?"text-amber-500":"text-violet-300"}`}),d.jsx("span",{children:"Daily Consistency"})]}),d.jsxs("span",{className:`font-display font-medium tabular-nums ${le?"text-zinc-900":"text-zinc-200"}`,children:[yn,"% kept"]})]})]}),Rt==="timer"&&d.jsxs("div",{className:`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${le?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[d.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${le?"border-zinc-200":"border-white/[0.08]"}`,children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(uc,{className:`w-4 h-4 ${le?"text-violet-700":"text-violet-300"}`}),d.jsx("h2",{className:"text-xs font-display uppercase tracking-[0.18em] font-semibold",children:"Deep Study Console"})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsxs("div",{className:"flex items-center gap-1 p-0.5 rounded-lg border bg-black/10 border-white/10",children:[d.jsx("button",{type:"button",onClick:()=>R("pomodoro"),className:`px-2 py-0.5 rounded text-[10px] font-semibold transition-all cursor-pointer ${ut==="pomodoro"?"bg-violet-600 text-white":le?"text-zinc-600 hover:text-zinc-950":"text-zinc-400 hover:text-white"}`,children:"Pomodoro Sprint"}),d.jsx("button",{type:"button",onClick:()=>R("stopwatch"),className:`px-2 py-0.5 rounded text-[10px] font-medium transition-all cursor-pointer ${ut==="stopwatch"?"bg-violet-600 text-white":le?"text-zinc-600 hover:text-zinc-950":"text-zinc-400 hover:text-white"}`,children:"Open Stopwatch"})]}),d.jsx("button",{type:"button",onClick:()=>Ye("none"),className:"p-1 text-zinc-400 hover:text-white cursor-pointer",children:d.jsx(Ar,{className:"w-3.5 h-3.5"})})]})]}),ut==="pomodoro"?d.jsxs("div",{className:"space-y-3",children:[d.jsxs("div",{className:"flex items-center justify-between gap-1.5",children:[[{label:"25m / 5m",focus:25,brk:5},{label:"50m / 10m",focus:50,brk:10},{label:"15m Rapid",focus:15,brk:3}].map(ae=>{const bt=!ei&&W.focusDurationMinutes===ae.focus&&W.breakDurationMinutes===ae.brk;return d.jsx("button",{type:"button",onClick:()=>{Gt(!1),V(Wt=>({...Wt,focusDurationMinutes:ae.focus,breakDurationMinutes:ae.brk})),M==="idle"&&B(ae.focus)},className:`flex-1 py-1 px-2 rounded-xl text-[10px] font-mono font-medium border transition-all cursor-pointer ${bt?"bg-violet-600 text-white border-violet-400/50 shadow-sm":le?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 border-white/[0.08]"}`,children:ae.label},ae.label)}),d.jsx("button",{type:"button",onClick:()=>Gt(!ei),className:`flex-1 py-1 px-2 rounded-xl text-[10px] font-mono font-medium border transition-all cursor-pointer ${ei||![25,50,15].includes(W.focusDurationMinutes)?"bg-violet-600 text-white border-violet-400/50 shadow-sm":le?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 border-white/[0.08]"}`,children:"Custom"})]}),ei&&d.jsxs("div",{className:`p-2.5 rounded-xl border flex items-center justify-between gap-2 animate-fadeIn ${le?"bg-zinc-50 border-zinc-200":"bg-white/[0.03] border-white/10"}`,children:[d.jsxs("div",{className:"flex items-center gap-1 text-[11px] font-mono",children:[d.jsx("span",{className:le?"text-zinc-600":"text-zinc-400",children:"Focus:"}),d.jsx("input",{type:"number",min:"1",max:"180",value:lr,onChange:ae=>cr(ae.target.value),className:`w-12 px-1.5 py-0.5 rounded border text-center text-xs font-mono outline-none ${le?"bg-white border-zinc-300 text-zinc-900":"bg-black/40 border-white/15 text-white"}`}),d.jsx("span",{className:le?"text-zinc-500":"text-zinc-400",children:"m"})]}),d.jsxs("div",{className:"flex items-center gap-1 text-[11px] font-mono",children:[d.jsx("span",{className:le?"text-zinc-600":"text-zinc-400",children:"Break:"}),d.jsx("input",{type:"number",min:"1",max:"60",value:ur,onChange:ae=>ji(ae.target.value),className:`w-12 px-1.5 py-0.5 rounded border text-center text-xs font-mono outline-none ${le?"bg-white border-zinc-300 text-zinc-900":"bg-black/40 border-white/15 text-white"}`}),d.jsx("span",{className:le?"text-zinc-500":"text-zinc-400",children:"m"})]}),d.jsx("button",{type:"button",onClick:()=>{const ae=parseInt(lr,10),bt=parseInt(ur,10);!isNaN(ae)&&ae>0&&(V(Wt=>({...Wt,focusDurationMinutes:ae,breakDurationMinutes:isNaN(bt)||bt<=0?5:bt})),M==="idle"&&B(ae),Gt(!1))},className:"px-2.5 py-1 rounded-lg text-[10px] font-bold bg-violet-600 hover:bg-violet-500 text-white cursor-pointer shadow-xs transition-colors",children:"Set Sprint"})]}),d.jsxs("div",{className:"text-center py-2 relative",children:[d.jsxs("div",{className:`text-5xl font-display font-bold tracking-tight leading-none tabular-nums ${le?"text-zinc-950":"text-white"}`,children:[ce,":",L]}),d.jsx("div",{className:"flex items-center justify-center gap-2 mt-2",children:d.jsx("span",{className:`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${M==="break"?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 animate-pulse":M==="focus"?"bg-violet-500/20 text-violet-300 border border-violet-500/30 animate-pulse":M==="paused"?"bg-amber-500/20 text-amber-300 border border-amber-500/30":le?"bg-zinc-100 text-zinc-600 border border-zinc-200":"bg-white/[0.06] text-zinc-400 border border-white/[0.08]"}`,children:M==="break"?"RECOVERY BREAK":M==="focus"?"FOCUS SPRINT":M==="paused"?"PAUSED":"READY TO SPRINT"})}),d.jsx("div",{className:"w-full bg-white/[0.06] h-1.5 rounded-full mt-3 overflow-hidden",children:d.jsx("div",{className:`h-full transition-all duration-1000 ${M==="break"?"bg-cyan-400":"bg-violet-500"}`,style:{width:`${Math.round(H*100)}%`}})})]}),d.jsxs("div",{className:"flex items-center justify-between text-[11px] px-1 font-mono",children:[d.jsxs("button",{type:"button",onClick:de,className:`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${W.displayMode==="numbers"?"bg-violet-500/20 border-violet-500/40 text-violet-300":le?"bg-zinc-100 border-zinc-200 text-zinc-600":"bg-white/[0.04] border-white/[0.08] text-zinc-400"}`,children:[d.jsx(zM,{className:"w-3.5 h-3.5"}),d.jsxs("span",{children:["Clock: ",W.displayMode==="numbers"?"Countdown Digits":"Wall Clock"]})]}),d.jsxs("button",{type:"button",onClick:()=>V(ae=>({...ae,soundEnabled:!ae.soundEnabled})),className:`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${W.soundEnabled?"bg-emerald-500/20 border-emerald-500/40 text-emerald-300":le?"bg-zinc-100 border-zinc-200 text-zinc-600":"bg-white/[0.04] border-white/[0.08] text-zinc-400"}`,children:[d.jsx(MM,{className:"w-3.5 h-3.5"}),d.jsxs("span",{children:["Chime: ",W.soundEnabled?"ON":"OFF"]})]})]}),d.jsxs("div",{className:"flex gap-2",children:[d.jsx("button",{type:"button",onClick:X,className:`flex-1 py-2.5 rounded-xl font-display text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 border transition-all cursor-pointer ${le?"bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-800":"bg-violet-600 hover:bg-violet-500 text-white border-violet-400/30"}`,children:M==="focus"?d.jsxs(d.Fragment,{children:[d.jsx(tr,{className:"w-4 h-4"}),d.jsx("span",{children:"Pause Focus"})]}):M==="paused"?d.jsxs(d.Fragment,{children:[d.jsx(Bi,{className:"w-4 h-4 fill-current"}),d.jsx("span",{children:"Resume Focus"})]}):M==="break"?d.jsxs(d.Fragment,{children:[d.jsx(TM,{className:"w-4 h-4"}),d.jsx("span",{children:"Pause Break"})]}):d.jsxs(d.Fragment,{children:[d.jsx(Bi,{className:"w-4 h-4 ml-0.5 fill-current"}),d.jsxs("span",{children:["Start Focus (",W.focusDurationMinutes,"m)"]})]})}),d.jsx("button",{type:"button",onClick:te,className:`px-3 py-2.5 rounded-xl border text-xs font-medium transition-colors cursor-pointer ${le?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white border-white/[0.08]"}`,title:M==="focus"?"Skip directly to break":"Skip back to focus",children:d.jsx(hc,{className:"w-4 h-4"})}),d.jsx("button",{type:"button",onClick:F,className:`px-3 py-2.5 rounded-xl border transition-colors cursor-pointer ${le?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white border-white/[0.08]"}`,title:"Reset Pomodoro",children:d.jsx(Tr,{className:"w-3.5 h-3.5"})})]})]}):d.jsxs("div",{className:"space-y-3",children:[d.jsxs("div",{className:"text-center py-2",children:[d.jsx("div",{className:`text-5xl font-display font-light tracking-widest leading-none tabular-nums ${le?"text-zinc-900":"text-white"}`,children:ti(b)}),d.jsxs("p",{className:`text-[10px] font-display tracking-[0.2em] uppercase mt-2 ${le?"text-zinc-500":"text-zinc-400"}`,children:[v," • ",pt]})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[d.jsx("input",{type:"text",value:pt,onChange:ae=>Ht(ae.target.value),placeholder:"Mode (e.g. Deep Work)",className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"}),d.jsx("input",{type:"text",value:rt,onChange:ae=>{je(ae.target.value),y(ae.target.value)},placeholder:"Subject (e.g. Engineering)",className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"})]}),d.jsxs("div",{className:"flex gap-2",children:[d.jsxs("button",{type:"button",onClick:N,className:`flex-1 py-2.5 rounded-xl font-display text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 border transition-all cursor-pointer ${le?"bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-800":"bg-violet-600 hover:bg-violet-500 text-white border-violet-400/30"}`,children:[w?d.jsx(tr,{className:"w-4 h-4"}):d.jsx(Bi,{className:"w-4 h-4 ml-0.5 fill-current"}),d.jsx("span",{children:w?"Pause Focus":"Start Focus"})]}),d.jsx("button",{type:"button",onClick:U,className:`px-3 py-2.5 rounded-xl border transition-colors cursor-pointer ${le?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white border-white/[0.08]"}`,title:"Reset stopwatch",children:d.jsx(Tr,{className:"w-3.5 h-3.5"})})]})]}),d.jsxs("div",{className:`p-3 rounded-2xl border transition-all ${le?"bg-zinc-50 border-zinc-200":"bg-white/[0.025] border-white/[0.08]"}`,children:[d.jsxs("div",{className:"flex items-center justify-between text-[11px] mb-2",children:[d.jsxs("span",{className:`font-sans font-medium flex items-center gap-1.5 ${le?"text-zinc-800":"text-zinc-200"}`,children:[d.jsx(uc,{className:"w-3.5 h-3.5 text-amber-400"}),d.jsx("span",{children:"Forgot to start timer? Log past focus:"})]}),on&&d.jsx("span",{className:"text-[10px] font-mono text-emerald-400 animate-fadeIn font-semibold",children:on})]}),d.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[[30,45,60,90,120].map(ae=>d.jsxs("button",{type:"button",onClick:()=>Bn(ae),className:`px-2.5 py-1 rounded-xl text-[10px] font-mono font-medium border transition-all cursor-pointer ${le?"bg-white hover:bg-zinc-100 text-zinc-800 border-zinc-200 shadow-xs":"bg-white/[0.05] hover:bg-white/[0.12] text-zinc-300 hover:text-white border-white/[0.1]"}`,title:`Log ${ae>=60?ae/60+" hours":ae+" minutes"} past study`,children:["+",ae>=60?`${ae/60}h`:`${ae}m`]},ae)),d.jsxs("form",{onSubmit:wn,className:"flex items-center gap-1 ml-auto",children:[d.jsx("input",{type:"number",min:"1",max:"720",value:Qt,onChange:ae=>tn(ae.target.value),placeholder:"Mins",className:"w-14 cosmic-input rounded-lg px-2 py-0.5 text-[10px] font-mono text-center"}),d.jsx("button",{type:"submit",className:"px-2.5 py-0.5 rounded-lg text-[10px] font-medium bg-amber-400 hover:bg-amber-300 text-black font-semibold cursor-pointer transition-colors",children:"+ Add"})]})]}),P.length>0&&d.jsxs("div",{className:"pt-2 mt-2 border-t border-white/[0.06] space-y-1",children:[d.jsx("span",{className:`text-[10px] font-mono uppercase tracking-wider block ${le?"text-zinc-500":"text-zinc-400"}`,children:"Recent Focus Logs:"}),d.jsx("div",{className:"max-h-20 overflow-y-auto space-y-1 pr-1 text-[11px] font-mono",children:P.slice(0,3).map(ae=>d.jsxs("div",{className:`flex items-center justify-between px-2 py-1 rounded-lg ${le?"bg-zinc-100 text-zinc-800":"bg-white/[0.03] text-zinc-300"}`,children:[d.jsxs("span",{className:"truncate",children:[ae.subject," · ",Math.round(ae.durationSeconds/60),"m"]}),d.jsx("button",{type:"button",onClick:()=>I(ae.id),className:"text-zinc-500 hover:text-red-400 p-0.5 transition-colors cursor-pointer",title:"Remove logged entry",children:d.jsx(lo,{className:"w-3 h-3"})})]},ae.id))})]})]}),d.jsxs("div",{className:`pt-2.5 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${le?"border-zinc-200 text-zinc-600":"border-white/[0.08] text-zinc-400"}`,children:[d.jsxs("span",{children:["Weekly: ",d.jsxs("strong",{className:`font-display ${le?"text-zinc-900":"text-zinc-200"}`,children:[vn,"h"]})," / 15h"]}),d.jsxs("span",{className:`font-display font-medium tabular-nums ${le?"text-zinc-900":"text-zinc-200"}`,children:[Wi,"% quota"]})]})]}),Rt==="wellness"&&d.jsxs("div",{className:`w-full max-w-sm p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${le?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[d.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-white/10",children:[d.jsxs("span",{className:"text-xs font-display uppercase tracking-widest font-semibold flex items-center gap-1.5",children:[d.jsx(Cs,{className:"w-3.5 h-3.5 text-amber-400"}),"Daily Wellness Pulse"]}),d.jsx("button",{onClick:()=>Ye("none"),className:"p-1 text-zinc-400 hover:text-white",children:d.jsx(Ar,{className:"w-3.5 h-3.5"})})]}),d.jsxs("div",{className:"flex items-center justify-between py-1 text-xs",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(CM,{className:"w-4 h-4 text-sky-400"}),d.jsx("span",{children:"Hydration Target"})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("button",{type:"button",onClick:()=>ie(ae=>Math.max(0,ae-12.5)),className:"w-6 h-6 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center font-bold",children:"-"}),d.jsxs("span",{className:"font-mono font-bold w-12 text-center",children:[Math.round($/100*8)," / 8"]}),d.jsx("button",{type:"button",onClick:()=>ie(ae=>Math.min(100,ae+12.5)),className:"w-6 h-6 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center font-bold",children:"+"})]})]}),d.jsxs("div",{className:"flex items-center justify-between py-1 text-xs",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(fc,{className:"w-4 h-4 text-violet-400"}),d.jsx("span",{children:"Sleep Duration"})]}),d.jsxs("button",{type:"button",onClick:()=>ee(O%12+1),className:"px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 font-mono font-bold text-xs",children:[O," Hours (Click to Cycle)"]})]}),d.jsxs("div",{className:"flex items-center justify-between py-1 text-xs",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(IM,{className:"w-4 h-4 text-amber-400"}),d.jsx("span",{children:"Day Score"})]}),d.jsxs("button",{type:"button",onClick:()=>q(k>=10?1:k+1),className:"px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 font-mono font-bold text-xs text-amber-400",children:[k," / 10 ★"]})]}),d.jsxs("div",{className:`pt-3 mt-1 border-t flex items-center justify-between ${le?"border-zinc-200":"border-white/10"}`,children:[d.jsxs("div",{className:"flex flex-col",children:[d.jsxs("span",{className:"text-[11px] font-medium flex items-center gap-1",children:[d.jsx(Tr,{className:"w-3 h-3 text-violet-400"}),"Day Reset"]}),d.jsxs("span",{className:`text-[9px] font-mono ${le?"text-zinc-500":"text-zinc-400"}`,children:["Active: ",pe]})]}),d.jsxs("button",{type:"button",onClick:()=>{window.confirm("Start a fresh day? This will uncheck today's tasks & habits and reset hydration to 0%.")&&Y()},className:`px-3 py-1.5 rounded-xl border text-[11px] font-display uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${le?"bg-violet-50 hover:bg-violet-100 text-violet-700 border-violet-200":"bg-violet-600/30 hover:bg-violet-600/50 text-violet-200 border-violet-400/40 hover:border-violet-400"}`,title:"Reset daily progress for a fresh day",children:[d.jsx(Tr,{className:"w-3 h-3"}),d.jsx("span",{children:"Start Fresh Day"})]})]})]})]}),!oe&&!lt&&d.jsx("footer",{className:"relative shrink-0 flex items-center justify-center w-full z-20 pb-2",children:d.jsxs("nav",{"aria-label":"Sanctuary Focus Dock",className:`flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-full backdrop-blur-2xl border shadow-2xl transition-all ${le?"bg-white/85 border-zinc-200/90 text-zinc-800 shadow-[0_15px_40px_rgba(0,0,0,0.1)]":"bg-[#090b16]/80 border-white/[0.12] text-zinc-200 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"}`,children:[d.jsxs("div",{className:`flex items-center rounded-full border transition-all ${ln?M==="break"?"bg-cyan-500/20 border-cyan-500/40 text-cyan-300":"bg-violet-600/25 border-violet-500/40 text-violet-300":w?"bg-emerald-500/20 border-emerald-500/40 text-emerald-300":le?"bg-zinc-100/90 border-zinc-200 text-zinc-800":"bg-white/[0.04] border-white/[0.08] text-zinc-300"}`,children:[d.jsxs("button",{type:"button",onClick:ln?X:w?N:()=>B(),className:"pl-3 pr-1.5 py-1.5 flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity",title:ln?M==="paused"?"Resume Pomodoro":"Pause Pomodoro":w?"Pause focus timer":"Start Pomodoro Focus",children:[ln?M==="paused"?d.jsx(Bi,{className:"w-3.5 h-3.5 text-amber-400 fill-current"}):d.jsx(tr,{className:"w-3.5 h-3.5 text-violet-400 animate-pulse"}):w?d.jsx(tr,{className:"w-3.5 h-3.5 text-emerald-400 animate-pulse"}):d.jsx(Bi,{className:"w-3.5 h-3.5 text-zinc-400 fill-current"}),d.jsx("span",{className:"font-mono text-xs font-semibold tabular-nums",children:ln?`${ce}:${L}`:ti(b)})]}),d.jsx("button",{type:"button",onClick:()=>{R(ln?"pomodoro":"stopwatch"),Ye(ae=>ae==="timer"?"none":"timer")},className:`pr-3 pl-1.5 py-1.5 text-[11px] font-sans border-l transition-colors cursor-pointer ${le?"border-zinc-200 hover:text-black":"border-white/10 hover:text-white"}`,title:"Expand Deep Study Console",children:d.jsx("span",{children:ln?M==="break"?"Break":"Sprint":rt})})]}),d.jsxs("button",{type:"button",onClick:()=>Ye(ae=>ae==="tasks"?"none":"tasks"),className:`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-sans transition-all cursor-pointer ${Rt==="tasks"||Rt==="habits"?"bg-violet-600 text-white border-violet-400":le?"bg-zinc-100/90 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300 hover:text-white"}`,title:"Daily Flow (Tasks & Habits)",children:[d.jsx(LM,{className:"w-3.5 h-3.5 text-violet-400"}),d.jsx("span",{children:"Flow"}),d.jsxs("span",{className:`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${le?"bg-zinc-200/90 text-zinc-800":"bg-white/10 text-violet-200"}`,children:[zt+et,"/",e.length+l.length]})]}),d.jsxs("div",{onClick:()=>Q(!0),className:`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs cursor-pointer group transition-all ${Ie||Ve?be==="youtube"?"bg-red-600/30 border-red-500/40 text-red-200":"bg-violet-600/30 border-violet-500/40 text-violet-200":le?"bg-zinc-100/90 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300 hover:text-white"}`,title:"Open Audio Sanctuary",children:[be==="youtube"&&Ve?d.jsx(co,{className:"w-3.5 h-3.5 text-red-500 animate-pulse"}):d.jsx(dc,{className:`w-3.5 h-3.5 ${Ie||Ve?"text-violet-300 animate-pulse":"text-zinc-400"}`}),d.jsx("span",{className:"max-w-[80px] sm:max-w-[120px] truncate text-[11px] font-medium",children:be==="youtube"?Xe?Xe.title:"YouTube":ui.title}),d.jsx(Zg,{isPlaying:be==="youtube"?Ve:Ie,color:be==="youtube"?"#ef4444":le?"#7c3aed":ui.accentColor,className:"w-8 h-2.5",barCount:4}),d.jsx("button",{type:"button",onClick:ae=>{ae.stopPropagation(),be==="youtube"?nt():Ie?De():$e(it)},className:"w-5 h-5 rounded-md flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors",title:(be==="youtube"?Ve:Ie)?"Pause audio":"Play audio",children:(be==="youtube"?Ve:Ie)?d.jsx(tr,{className:"w-2.5 h-2.5 fill-current"}):d.jsx(Bi,{className:"w-2.5 h-2.5 fill-current ml-0.5"})})]})]})}),kt&&d.jsxs("div",{className:"fixed inset-0 z-50 flex",children:[d.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm",onClick:()=>ke(!1)}),d.jsxs("aside",{className:`relative z-10 w-84 sm:w-96 max-w-[92vw] h-full backdrop-blur-3xl border-r shadow-2xl pt-16 sm:pt-20 px-6 pb-6 flex flex-col justify-between ${le?"bg-[#faf8f4]/98 border-zinc-200 text-zinc-900":"bg-[#0d0f17]/95 border-white/[0.1] text-white"}`,children:[d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:`flex items-center justify-between pb-3.5 border-b ${le?"border-zinc-200":"border-white/[0.08]"}`,children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(am,{className:`w-4 h-4 ${le?"text-zinc-700":"text-zinc-300"}`}),d.jsx("h3",{className:`text-xs font-sans uppercase tracking-[0.16em] font-semibold ${le?"text-zinc-900":"text-white"}`,children:"Daily Rhythm"})]}),d.jsx("button",{onClick:()=>ke(!1),className:`transition-colors cursor-pointer ${le?"text-zinc-500 hover:text-black":"text-zinc-400 hover:text-white"}`,children:d.jsx(Ar,{className:"w-4 h-4"})})]}),d.jsx("div",{className:"py-1",children:d.jsx(WM,{routines:g,activeBlock:h,activeMinutesLeft:S,isLight:le})}),d.jsxs("div",{className:"space-y-2.5 text-xs overflow-y-auto max-h-[50vh] pr-1",children:[g.map(ae=>{const bt=(h==null?void 0:h.id)===ae.id;return d.jsxs("div",{className:`p-3.5 rounded-2xl border transition-all relative group ${bt?le?"bg-amber-50/90 border-amber-300 shadow-sm":"bg-white/[0.04] border-amber-400/40 shadow-md ring-1 ring-amber-400/20":le?"bg-white/80 border-zinc-200 shadow-xs":"bg-white/[0.02] border-white/[0.07]"}`,children:[d.jsxs("div",{className:"flex items-center justify-between pb-1.5",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("span",{className:`w-2 h-2 rounded-full ${bt?"bg-amber-400":"bg-zinc-600"}`}),d.jsx("span",{className:`font-semibold tracking-tight ${bt?"text-white font-bold":le?"text-zinc-800":"text-zinc-200"}`,children:ae.title}),bt&&d.jsx("span",{className:"text-[9px] font-mono px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/25 font-semibold uppercase tracking-wider",children:"Current"})]}),d.jsxs("div",{className:"flex items-center gap-1.5",children:[d.jsx("span",{className:`text-[10px] font-mono tabular-nums ${le?"text-zinc-500":"text-zinc-400"}`,children:ae.timeRange}),g.length>1&&d.jsx("button",{type:"button",onClick:()=>_(ae.id),className:"opacity-0 group-hover:opacity-100 p-1 text-zinc-400 hover:text-red-400 transition-opacity cursor-pointer",title:"Delete routine block",children:d.jsx(lo,{className:"w-3 h-3"})})]})]}),d.jsx("p",{className:`text-[11px] leading-relaxed ${le?"text-zinc-600":"text-zinc-400"}`,children:ae.description})]},ae.id)}),nn?d.jsxs("form",{onSubmit:ae=>{ae.preventDefault(),Ut.trim()&&Hn.trim()&&(m({title:Ut.trim(),timeRange:Jt.trim()||"Flexible",description:Hn.trim(),iconType:"custom"}),Ct(""),en(""),Gn(""),xt(!1))},className:`p-3.5 rounded-2xl border space-y-2.5 ${le?"bg-white border-zinc-300 shadow-sm":"bg-white/[0.04] border-white/[0.1]"}`,children:[d.jsx("input",{type:"text",placeholder:"Title (e.g. Creative Sprint)",value:Ut,onChange:ae=>Ct(ae.target.value),className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs",required:!0}),d.jsx("input",{type:"text",placeholder:"Time range (e.g. 14:00 – 16:00)",value:Jt,onChange:ae=>en(ae.target.value),className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"}),d.jsx("textarea",{placeholder:"Intentions / Focus areas...",value:Hn,onChange:ae=>Gn(ae.target.value),className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs resize-none h-16",required:!0}),d.jsxs("div",{className:"flex items-center justify-end gap-2 pt-1",children:[d.jsx("button",{type:"button",onClick:()=>xt(!1),className:`px-3 py-1 rounded-lg text-[11px] transition-colors ${le?"text-zinc-600 hover:text-black":"text-zinc-400 hover:text-white"}`,children:"Cancel"}),d.jsx("button",{type:"submit",className:"px-3.5 py-1.5 rounded-lg text-[11px] bg-amber-400 hover:bg-amber-300 text-black font-semibold cursor-pointer transition-colors",children:"Add Block"})]})]}):d.jsxs("button",{type:"button",onClick:()=>xt(!0),className:`w-full py-2.5 rounded-xl border border-dashed flex items-center justify-center gap-1.5 text-[11px] transition-all cursor-pointer ${le?"border-zinc-300 hover:border-zinc-400 text-zinc-600 hover:text-zinc-900 bg-white/40":"border-white/10 hover:border-white/20 text-zinc-400 hover:text-white bg-white/[0.01]"}`,children:[d.jsx(nc,{className:"w-3 h-3"}),d.jsx("span",{children:"Add Custom Routine Block"})]})]})]}),d.jsxs("div",{className:"flex items-center gap-2 pt-2",children:[d.jsx("button",{type:"button",onClick:E,className:`px-3 py-2.5 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${le?"border-zinc-200 text-zinc-600 hover:bg-zinc-100":"border-white/10 text-zinc-400 hover:bg-white/[0.05] hover:text-white"}`,title:"Reset to default protocols",children:"Reset"}),d.jsx("button",{type:"button",onClick:()=>ke(!1),className:`flex-1 py-2.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${le?"bg-zinc-900 hover:bg-zinc-800 text-white":"bg-white/[0.06] hover:bg-white/[0.12] text-white"}`,children:"Close"})]})]})]}),d.jsx(jM,{isOpen:hn,onClose:()=>Tt(!1)}),d.jsx(GM,{isOpen:Mt,onClose:()=>jt(!1)}),d.jsx(VM,{isOpen:an,onClose:()=>Q(!1)})]})},XM=()=>{const{wallpaperTheme:s,appTheme:e}=ss(),t=e==="light";return d.jsxs("div",{"data-theme":s,className:`theme-${e} relative w-screen h-screen max-h-screen overflow-hidden text-[var(--text-primary)] font-sans transition-colors duration-200 ${t?"bg-[#f7f5f0]/95":"bg-[#060814]"}`,children:[d.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--card-bg-elevated)] focus:text-[var(--text-primary)] focus:rounded-xl focus:border focus:border-[var(--card-border)] focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-violet-400 font-sans text-xs font-semibold",children:"Skip to main content"}),d.jsx(Wv,{}),d.jsx(hM,{}),d.jsx(OM,{}),d.jsx("div",{className:"pointer-events-none fixed inset-0 z-20 dreamy-grain opacity-15"}),d.jsx("main",{id:"main-content",className:"w-full h-full overflow-y-auto lg:overflow-hidden relative z-10",children:d.jsx($M,{})})]})};function YM(){return d.jsx(jv,{children:d.jsx(XM,{})})}const um=document.getElementById("root");um&&Ov.createRoot(um).render(d.jsx(Dv.StrictMode,{children:d.jsx(YM,{})}));
