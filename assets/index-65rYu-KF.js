var Mv=Object.defineProperty;var wv=(s,e,t)=>e in s?Mv(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var er=(s,e,t)=>wv(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function s0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ku={exports:{}},Va={},zu={exports:{}},At={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function bv(){if(qp)return At;qp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.iterator;function _(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,C={};function y(L,ee,be){this.props=L,this.context=ee,this.refs=C,this.updater=be||M}y.prototype.isReactComponent={},y.prototype.setState=function(L,ee){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,ee,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function S(){}S.prototype=y.prototype;function R(L,ee,be){this.props=L,this.context=ee,this.refs=C,this.updater=be||M}var k=R.prototype=new S;k.constructor=R,b(k,y.prototype),k.isPureReactComponent=!0;var P=Array.isArray,U=Object.prototype.hasOwnProperty,D={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function N(L,ee,be){var F,ve={},Me=null,Re=null;if(ee!=null)for(F in ee.ref!==void 0&&(Re=ee.ref),ee.key!==void 0&&(Me=""+ee.key),ee)U.call(ee,F)&&!w.hasOwnProperty(F)&&(ve[F]=ee[F]);var ye=arguments.length-2;if(ye===1)ve.children=be;else if(1<ye){for(var Ie=Array(ye),lt=0;lt<ye;lt++)Ie[lt]=arguments[lt+2];ve.children=Ie}if(L&&L.defaultProps)for(F in ye=L.defaultProps,ye)ve[F]===void 0&&(ve[F]=ye[F]);return{$$typeof:s,type:L,key:Me,ref:Re,props:ve,_owner:D.current}}function te(L,ee){return{$$typeof:s,type:L.type,key:ee,ref:L.ref,props:L.props,_owner:L._owner}}function $(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function H(L){var ee={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(be){return ee[be]})}var W=/\/+/g;function V(L,ee){return typeof L=="object"&&L!==null&&L.key!=null?H(""+L.key):ee.toString(36)}function G(L,ee,be,F,ve){var Me=typeof L;(Me==="undefined"||Me==="boolean")&&(L=null);var Re=!1;if(L===null)Re=!0;else switch(Me){case"string":case"number":Re=!0;break;case"object":switch(L.$$typeof){case s:case e:Re=!0}}if(Re)return Re=L,ve=ve(Re),L=F===""?"."+V(Re,0):F,P(ve)?(be="",L!=null&&(be=L.replace(W,"$&/")+"/"),G(ve,ee,be,"",function(lt){return lt})):ve!=null&&($(ve)&&(ve=te(ve,be+(!ve.key||Re&&Re.key===ve.key?"":(""+ve.key).replace(W,"$&/")+"/")+L)),ee.push(ve)),1;if(Re=0,F=F===""?".":F+":",P(L))for(var ye=0;ye<L.length;ye++){Me=L[ye];var Ie=F+V(Me,ye);Re+=G(Me,ee,be,Ie,ve)}else if(Ie=_(L),typeof Ie=="function")for(L=Ie.call(L),ye=0;!(Me=L.next()).done;)Me=Me.value,Ie=F+V(Me,ye++),Re+=G(Me,ee,be,Ie,ve);else if(Me==="object")throw ee=String(L),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return Re}function O(L,ee,be){if(L==null)return L;var F=[],ve=0;return G(L,F,"","",function(Me){return ee.call(be,Me,ve++)}),F}function re(L){if(L._status===-1){var ee=L._result;ee=ee(),ee.then(function(be){(L._status===0||L._status===-1)&&(L._status=1,L._result=be)},function(be){(L._status===0||L._status===-1)&&(L._status=2,L._result=be)}),L._status===-1&&(L._status=0,L._result=ee)}if(L._status===1)return L._result.default;throw L._result}var K={current:null},X={transition:null},j={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:X,ReactCurrentOwner:D};function Y(){throw Error("act(...) is not supported in production builds of React.")}return At.Children={map:O,forEach:function(L,ee,be){O(L,function(){ee.apply(this,arguments)},be)},count:function(L){var ee=0;return O(L,function(){ee++}),ee},toArray:function(L){return O(L,function(ee){return ee})||[]},only:function(L){if(!$(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},At.Component=y,At.Fragment=t,At.Profiler=o,At.PureComponent=R,At.StrictMode=r,At.Suspense=u,At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j,At.act=Y,At.cloneElement=function(L,ee,be){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var F=b({},L.props),ve=L.key,Me=L.ref,Re=L._owner;if(ee!=null){if(ee.ref!==void 0&&(Me=ee.ref,Re=D.current),ee.key!==void 0&&(ve=""+ee.key),L.type&&L.type.defaultProps)var ye=L.type.defaultProps;for(Ie in ee)U.call(ee,Ie)&&!w.hasOwnProperty(Ie)&&(F[Ie]=ee[Ie]===void 0&&ye!==void 0?ye[Ie]:ee[Ie])}var Ie=arguments.length-2;if(Ie===1)F.children=be;else if(1<Ie){ye=Array(Ie);for(var lt=0;lt<Ie;lt++)ye[lt]=arguments[lt+2];F.children=ye}return{$$typeof:s,type:L.type,key:ve,ref:Me,props:F,_owner:Re}},At.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:l,_context:L},L.Consumer=L},At.createElement=N,At.createFactory=function(L){var ee=N.bind(null,L);return ee.type=L,ee},At.createRef=function(){return{current:null}},At.forwardRef=function(L){return{$$typeof:p,render:L}},At.isValidElement=$,At.lazy=function(L){return{$$typeof:x,_payload:{_status:-1,_result:L},_init:re}},At.memo=function(L,ee){return{$$typeof:f,type:L,compare:ee===void 0?null:ee}},At.startTransition=function(L){var ee=X.transition;X.transition={};try{L()}finally{X.transition=ee}},At.unstable_act=Y,At.useCallback=function(L,ee){return K.current.useCallback(L,ee)},At.useContext=function(L){return K.current.useContext(L)},At.useDebugValue=function(){},At.useDeferredValue=function(L){return K.current.useDeferredValue(L)},At.useEffect=function(L,ee){return K.current.useEffect(L,ee)},At.useId=function(){return K.current.useId()},At.useImperativeHandle=function(L,ee,be){return K.current.useImperativeHandle(L,ee,be)},At.useInsertionEffect=function(L,ee){return K.current.useInsertionEffect(L,ee)},At.useLayoutEffect=function(L,ee){return K.current.useLayoutEffect(L,ee)},At.useMemo=function(L,ee){return K.current.useMemo(L,ee)},At.useReducer=function(L,ee,be){return K.current.useReducer(L,ee,be)},At.useRef=function(L){return K.current.useRef(L)},At.useState=function(L){return K.current.useState(L)},At.useSyncExternalStore=function(L,ee,be){return K.current.useSyncExternalStore(L,ee,be)},At.useTransition=function(){return K.current.useTransition()},At.version="18.3.1",At}var Kp;function ff(){return Kp||(Kp=1,zu.exports=bv()),zu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function Ev(){if(Zp)return Va;Zp=1;var s=ff(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(p,u,f){var x,v={},_=null,M=null;f!==void 0&&(_=""+f),u.key!==void 0&&(_=""+u.key),u.ref!==void 0&&(M=u.ref);for(x in u)r.call(u,x)&&!l.hasOwnProperty(x)&&(v[x]=u[x]);if(p&&p.defaultProps)for(x in u=p.defaultProps,u)v[x]===void 0&&(v[x]=u[x]);return{$$typeof:e,type:p,key:_,ref:M,props:v,_owner:o.current}}return Va.Fragment=t,Va.jsx=d,Va.jsxs=d,Va}var Jp;function Tv(){return Jp||(Jp=1,ku.exports=Ev()),ku.exports}var m=Tv(),we=ff();const Av=s0(we);var xl={},Ou={exports:{}},Zn={},Bu={exports:{}},Gu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function Cv(){return Qp||(Qp=1,(function(s){function e(X,j){var Y=X.length;X.push(j);e:for(;0<Y;){var L=Y-1>>>1,ee=X[L];if(0<o(ee,j))X[L]=j,X[Y]=ee,Y=L;else break e}}function t(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var j=X[0],Y=X.pop();if(Y!==j){X[0]=Y;e:for(var L=0,ee=X.length,be=ee>>>1;L<be;){var F=2*(L+1)-1,ve=X[F],Me=F+1,Re=X[Me];if(0>o(ve,Y))Me<ee&&0>o(Re,ve)?(X[L]=Re,X[Me]=Y,L=Me):(X[L]=ve,X[F]=Y,L=F);else if(Me<ee&&0>o(Re,Y))X[L]=Re,X[Me]=Y,L=Me;else break e}}return j}function o(X,j){var Y=X.sortIndex-j.sortIndex;return Y!==0?Y:X.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var d=Date,p=d.now();s.unstable_now=function(){return d.now()-p}}var u=[],f=[],x=1,v=null,_=3,M=!1,b=!1,C=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(X){for(var j=t(f);j!==null;){if(j.callback===null)r(f);else if(j.startTime<=X)r(f),j.sortIndex=j.expirationTime,e(u,j);else break;j=t(f)}}function P(X){if(C=!1,k(X),!b)if(t(u)!==null)b=!0,re(U);else{var j=t(f);j!==null&&K(P,j.startTime-X)}}function U(X,j){b=!1,C&&(C=!1,S(N),N=-1),M=!0;var Y=_;try{for(k(j),v=t(u);v!==null&&(!(v.expirationTime>j)||X&&!H());){var L=v.callback;if(typeof L=="function"){v.callback=null,_=v.priorityLevel;var ee=L(v.expirationTime<=j);j=s.unstable_now(),typeof ee=="function"?v.callback=ee:v===t(u)&&r(u),k(j)}else r(u);v=t(u)}if(v!==null)var be=!0;else{var F=t(f);F!==null&&K(P,F.startTime-j),be=!1}return be}finally{v=null,_=Y,M=!1}}var D=!1,w=null,N=-1,te=5,$=-1;function H(){return!(s.unstable_now()-$<te)}function W(){if(w!==null){var X=s.unstable_now();$=X;var j=!0;try{j=w(!0,X)}finally{j?V():(D=!1,w=null)}}else D=!1}var V;if(typeof R=="function")V=function(){R(W)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,O=G.port2;G.port1.onmessage=W,V=function(){O.postMessage(null)}}else V=function(){y(W,0)};function re(X){w=X,D||(D=!0,V())}function K(X,j){N=y(function(){X(s.unstable_now())},j)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(X){X.callback=null},s.unstable_continueExecution=function(){b||M||(b=!0,re(U))},s.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<X?Math.floor(1e3/X):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(u)},s.unstable_next=function(X){switch(_){case 1:case 2:case 3:var j=3;break;default:j=_}var Y=_;_=j;try{return X()}finally{_=Y}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(X,j){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var Y=_;_=X;try{return j()}finally{_=Y}},s.unstable_scheduleCallback=function(X,j,Y){var L=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?L+Y:L):Y=L,X){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=Y+ee,X={id:x++,callback:j,priorityLevel:X,startTime:Y,expirationTime:ee,sortIndex:-1},Y>L?(X.sortIndex=Y,e(f,X),t(u)===null&&X===t(f)&&(C?(S(N),N=-1):C=!0,K(P,Y-L))):(X.sortIndex=ee,e(u,X),b||M||(b=!0,re(U))),X},s.unstable_shouldYield=H,s.unstable_wrapCallback=function(X){var j=_;return function(){var Y=_;_=j;try{return X.apply(this,arguments)}finally{_=Y}}}})(Gu)),Gu}var em;function Rv(){return em||(em=1,Bu.exports=Cv()),Bu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function Nv(){if(tm)return Zn;tm=1;var s=ff(),e=Rv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){d(n,i),d(n+"Capture",i)}function d(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),u=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},v={};function _(n){return u.call(v,n)?!0:u.call(x,n)?!1:f.test(n)?v[n]=!0:(x[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function b(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,a,c,h,g,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=T}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(S,R);y[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(S,R);y[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(S,R);y[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function k(n,i,a,c){var h=y.hasOwnProperty(i)?y[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(b(i,a,h,c)&&(a=null),c||h===null?_(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),D=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),te=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),H=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),X=Symbol.iterator;function j(n){return n===null||typeof n!="object"?null:(n=X&&n[X]||n["@@iterator"],typeof n=="function"?n:null)}var Y=Object.assign,L;function ee(n){if(L===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);L=i&&i[1]||""}return`
`+L+n}var be=!1;function F(n,i){if(!n||be)return"";be=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ge){var c=ge}Reflect.construct(n,[],i)}else{try{i.call()}catch(ge){c=ge}n.call(i.prototype)}else{try{throw Error()}catch(ge){c=ge}n()}}catch(ge){if(ge&&c&&typeof ge.stack=="string"){for(var h=ge.stack.split(`
`),g=c.stack.split(`
`),T=h.length-1,B=g.length-1;1<=T&&0<=B&&h[T]!==g[B];)B--;for(;1<=T&&0<=B;T--,B--)if(h[T]!==g[B]){if(T!==1||B!==1)do if(T--,B--,0>B||h[T]!==g[B]){var Z=`
`+h[T].replace(" at new "," at ");return n.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",n.displayName)),Z}while(1<=T&&0<=B);break}}}finally{be=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ee(n):""}function ve(n){switch(n.tag){case 5:return ee(n.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return n=F(n.type,!1),n;case 11:return n=F(n.type.render,!1),n;case 1:return n=F(n.type,!0),n;default:return""}}function Me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case w:return"Fragment";case D:return"Portal";case te:return"Profiler";case N:return"StrictMode";case V:return"Suspense";case G:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case H:return(n.displayName||"Context")+".Consumer";case $:return(n._context.displayName||"Context")+".Provider";case W:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case O:return i=n.displayName||null,i!==null?i:Me(n.type)||"Memo";case re:i=n._payload,n=n._init;try{return Me(n(i))}catch{}}return null}function Re(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(i);case 8:return i===N?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ye(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ie(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function lt(n){var i=Ie(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(T){c=""+T,g.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function He(n){n._valueTracker||(n._valueTracker=lt(n))}function Ee(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ie(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function ze(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function We(n,i){var a=i.checked;return Y({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function _t(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=ye(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function yt(n,i){i=i.checked,i!=null&&k(n,"checked",i,!1)}function wt(n,i){yt(n,i);var a=ye(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?nn(n,i.type,a):i.hasOwnProperty("defaultValue")&&nn(n,i.type,ye(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function It(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function nn(n,i,a){(i!=="number"||ze(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Pt=Array.isArray;function Wt(n,i,a,c){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+ye(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function zt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return Y({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function rn(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Pt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:ye(a)}}function J(n,i){var a=ye(i.value),c=ye(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Yt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Lt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Lt(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ue,Et=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ue=Ue||document.createElement("div"),Ue.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ue.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function qe(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var rt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},I=["Webkit","ms","Moz","O"];Object.keys(rt).forEach(function(n){I.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),rt[i]=rt[n]})});function E(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||rt.hasOwnProperty(n)&&rt[n]?(""+i).trim():i+"px"}function ae(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=E(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var Ce=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _e(n,i){if(i){if(Ce[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Fe(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function ie(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var se=null,Se=null,z=null;function me(n){if(n=Ca(n)){if(typeof se!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Lo(i),se(n.stateNode,n.type,i))}}function de(n){Se?z?z.push(n):z=[n]:Se=n}function Pe(){if(Se){var n=Se,i=z;if(z=Se=null,me(n),i)for(n=0;n<i.length;n++)me(i[n])}}function Te(n,i){return n(i)}function Le(){}var Ze=!1;function ut(n,i,a){if(Ze)return n(i,a);Ze=!0;try{return Te(n,i,a)}finally{Ze=!1,(Se!==null||z!==null)&&(Le(),Pe())}}function Q(n,i){var a=n.stateNode;if(a===null)return null;var c=Lo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var je=!1;if(p)try{var $e={};Object.defineProperty($e,"passive",{get:function(){je=!0}}),window.addEventListener("test",$e,$e),window.removeEventListener("test",$e,$e)}catch{je=!1}function Oe(n,i,a,c,h,g,T,B,Z){var ge=Array.prototype.slice.call(arguments,3);try{i.apply(a,ge)}catch(De){this.onError(De)}}var xt=!1,Nt=null,ce=!1,Be=null,Ae={onError:function(n){xt=!0,Nt=n}};function mt(n,i,a,c,h,g,T,B,Z){xt=!1,Nt=null,Oe.apply(Ae,arguments)}function qt(n,i,a,c,h,g,T,B,Z){if(mt.apply(this,arguments),xt){if(xt){var ge=Nt;xt=!1,Nt=null}else throw Error(t(198));ce||(ce=!0,Be=ge)}}function mn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Mn(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ni(n){if(mn(n)!==n)throw Error(t(188))}function ms(n){var i=n.alternate;if(!i){if(i=mn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var h=a.return;if(h===null)break;var g=h.alternate;if(g===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===a)return Ni(h),n;if(g===c)return Ni(h),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=g;else{for(var T=!1,B=h.child;B;){if(B===a){T=!0,a=h,c=g;break}if(B===c){T=!0,c=h,a=g;break}B=B.sibling}if(!T){for(B=g.child;B;){if(B===a){T=!0,a=g,c=h;break}if(B===c){T=!0,c=g,a=h;break}B=B.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function ca(n){return n=ms(n),n!==null?Wr(n):null}function Wr(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Wr(n);if(i!==null)return i;n=n.sibling}return null}var ua=e.unstable_scheduleCallback,da=e.unstable_cancelCallback,jr=e.unstable_shouldYield,lc=e.unstable_requestPaint,Qt=e.unstable_now,mo=e.unstable_getCurrentPriorityLevel,fa=e.unstable_ImmediatePriority,go=e.unstable_UserBlockingPriority,gs=e.unstable_NormalPriority,xo=e.unstable_LowPriority,A=e.unstable_IdlePriority,q=null,fe=null;function le(n){if(fe&&typeof fe.onCommitFiberRoot=="function")try{fe.onCommitFiberRoot(q,n,void 0,(n.current.flags&128)===128)}catch{}}var oe=Math.clz32?Math.clz32:Ve,Xe=Math.log,Qe=Math.LN2;function Ve(n){return n>>>=0,n===0?32:31-(Xe(n)/Qe|0)|0}var Ye=64,tt=4194304;function ht(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function St(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,g=n.pingedLanes,T=a&268435455;if(T!==0){var B=T&~h;B!==0?c=ht(B):(g&=T,g!==0&&(c=ht(g)))}else T=a&~h,T!==0?c=ht(T):g!==0&&(c=ht(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,g=i&-i,h>=g||h===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-oe(i),h=1<<a,c|=n[a],i&=~h;return c}function nt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var T=31-oe(g),B=1<<T,Z=h[T];Z===-1?((B&a)===0||(B&c)!==0)&&(h[T]=nt(B,i)):Z<=i&&(n.expiredLanes|=B),g&=~B}}function en(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function jt(){var n=Ye;return Ye<<=1,(Ye&4194240)===0&&(Ye=64),n}function Ht(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function cn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-oe(i),n[i]=a}function it(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-oe(a),g=1<<h;i[h]=0,c[h]=-1,n[h]=-1,a&=~g}}function gn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-oe(a),h=1<<c;h&i|n[c]&i&&(n[c]|=i),a&=~h}}var ot=0;function Pi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var xn,ur,mi,Li,Dt,dn=!1,Pn=[],Bt=null,$t=null,wn=null,dr=new Map,ha=new Map,fr=[],Wg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lf(n,i){switch(n){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":$t=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":dr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ha.delete(i.pointerId)}}function pa(n,i,a,c,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[h]},i!==null&&(i=Ca(i),i!==null&&ur(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function jg(n,i,a,c,h){switch(i){case"focusin":return Bt=pa(Bt,n,i,a,c,h),!0;case"dragenter":return $t=pa($t,n,i,a,c,h),!0;case"mouseover":return wn=pa(wn,n,i,a,c,h),!0;case"pointerover":var g=h.pointerId;return dr.set(g,pa(dr.get(g)||null,n,i,a,c,h)),!0;case"gotpointercapture":return g=h.pointerId,ha.set(g,pa(ha.get(g)||null,n,i,a,c,h)),!0}return!1}function Df(n){var i=Xr(n.target);if(i!==null){var a=mn(i);if(a!==null){if(i=a.tag,i===13){if(i=Mn(a),i!==null){n.blockedOn=i,Dt(n.priority,function(){mi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function vo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=uc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);xe=c,a.target.dispatchEvent(c),xe=null}else return i=Ca(a),i!==null&&ur(i),n.blockedOn=a,!1;i.shift()}return!0}function If(n,i,a){vo(n)&&a.delete(i)}function Xg(){dn=!1,Bt!==null&&vo(Bt)&&(Bt=null),$t!==null&&vo($t)&&($t=null),wn!==null&&vo(wn)&&(wn=null),dr.forEach(If),ha.forEach(If)}function ma(n,i){n.blockedOn===i&&(n.blockedOn=null,dn||(dn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Xg)))}function ga(n){function i(h){return ma(h,n)}if(0<Pn.length){ma(Pn[0],n);for(var a=1;a<Pn.length;a++){var c=Pn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Bt!==null&&ma(Bt,n),$t!==null&&ma($t,n),wn!==null&&ma(wn,n),dr.forEach(i),ha.forEach(i),a=0;a<fr.length;a++)c=fr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<fr.length&&(a=fr[0],a.blockedOn===null);)Df(a),a.blockedOn===null&&fr.shift()}var xs=P.ReactCurrentBatchConfig,_o=!0;function $g(n,i,a,c){var h=ot,g=xs.transition;xs.transition=null;try{ot=1,cc(n,i,a,c)}finally{ot=h,xs.transition=g}}function Yg(n,i,a,c){var h=ot,g=xs.transition;xs.transition=null;try{ot=4,cc(n,i,a,c)}finally{ot=h,xs.transition=g}}function cc(n,i,a,c){if(_o){var h=uc(n,i,a,c);if(h===null)Ac(n,i,c,yo,a),Lf(n,c);else if(jg(h,n,i,a,c))c.stopPropagation();else if(Lf(n,c),i&4&&-1<Wg.indexOf(n)){for(;h!==null;){var g=Ca(h);if(g!==null&&xn(g),g=uc(n,i,a,c),g===null&&Ac(n,i,c,yo,a),g===h)break;h=g}h!==null&&c.stopPropagation()}else Ac(n,i,c,null,a)}}var yo=null;function uc(n,i,a,c){if(yo=null,n=ie(c),n=Xr(n),n!==null)if(i=mn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Mn(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return yo=n,null}function Uf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mo()){case fa:return 1;case go:return 4;case gs:case xo:return 16;case A:return 536870912;default:return 16}default:return 16}}var hr=null,dc=null,So=null;function Ff(){if(So)return So;var n,i=dc,a=i.length,c,h="value"in hr?hr.value:hr.textContent,g=h.length;for(n=0;n<a&&i[n]===h[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===h[g-c];c++);return So=h.slice(n,1<c?1-c:void 0)}function Mo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function wo(){return!0}function kf(){return!1}function Qn(n){function i(a,c,h,g,T){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var B in n)n.hasOwnProperty(B)&&(a=n[B],this[B]=a?a(g):g[B]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?wo:kf,this.isPropagationStopped=kf,this}return Y(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=wo)},persist:function(){},isPersistent:wo}),i}var vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fc=Qn(vs),xa=Y({},vs,{view:0,detail:0}),qg=Qn(xa),hc,pc,va,bo=Y({},xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==va&&(va&&n.type==="mousemove"?(hc=n.screenX-va.screenX,pc=n.screenY-va.screenY):pc=hc=0,va=n),hc)},movementY:function(n){return"movementY"in n?n.movementY:pc}}),zf=Qn(bo),Kg=Y({},bo,{dataTransfer:0}),Zg=Qn(Kg),Jg=Y({},xa,{relatedTarget:0}),mc=Qn(Jg),Qg=Y({},vs,{animationName:0,elapsedTime:0,pseudoElement:0}),ex=Qn(Qg),tx=Y({},vs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),nx=Qn(tx),ix=Y({},vs,{data:0}),Of=Qn(ix),rx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ax={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ox(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=ax[n])?!!i[n]:!1}function gc(){return ox}var lx=Y({},xa,{key:function(n){if(n.key){var i=rx[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Mo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?sx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gc,charCode:function(n){return n.type==="keypress"?Mo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Mo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),cx=Qn(lx),ux=Y({},bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bf=Qn(ux),dx=Y({},xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gc}),fx=Qn(dx),hx=Y({},vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),px=Qn(hx),mx=Y({},bo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),gx=Qn(mx),xx=[9,13,27,32],xc=p&&"CompositionEvent"in window,_a=null;p&&"documentMode"in document&&(_a=document.documentMode);var vx=p&&"TextEvent"in window&&!_a,Gf=p&&(!xc||_a&&8<_a&&11>=_a),Hf=" ",Vf=!1;function Wf(n,i){switch(n){case"keyup":return xx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var _s=!1;function _x(n,i){switch(n){case"compositionend":return jf(i);case"keypress":return i.which!==32?null:(Vf=!0,Hf);case"textInput":return n=i.data,n===Hf&&Vf?null:n;default:return null}}function yx(n,i){if(_s)return n==="compositionend"||!xc&&Wf(n,i)?(n=Ff(),So=dc=hr=null,_s=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Gf&&i.locale!=="ko"?null:i.data;default:return null}}var Sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Sx[n.type]:i==="textarea"}function $f(n,i,a,c){de(c),i=Ro(i,"onChange"),0<i.length&&(a=new fc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var ya=null,Sa=null;function Mx(n){dh(n,0)}function Eo(n){var i=bs(n);if(Ee(i))return n}function wx(n,i){if(n==="change")return i}var Yf=!1;if(p){var vc;if(p){var _c="oninput"in document;if(!_c){var qf=document.createElement("div");qf.setAttribute("oninput","return;"),_c=typeof qf.oninput=="function"}vc=_c}else vc=!1;Yf=vc&&(!document.documentMode||9<document.documentMode)}function Kf(){ya&&(ya.detachEvent("onpropertychange",Zf),Sa=ya=null)}function Zf(n){if(n.propertyName==="value"&&Eo(Sa)){var i=[];$f(i,Sa,n,ie(n)),ut(Mx,i)}}function bx(n,i,a){n==="focusin"?(Kf(),ya=i,Sa=a,ya.attachEvent("onpropertychange",Zf)):n==="focusout"&&Kf()}function Ex(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Eo(Sa)}function Tx(n,i){if(n==="click")return Eo(i)}function Ax(n,i){if(n==="input"||n==="change")return Eo(i)}function Cx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var gi=typeof Object.is=="function"?Object.is:Cx;function Ma(n,i){if(gi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!u.call(i,h)||!gi(n[h],i[h]))return!1}return!0}function Jf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Qf(n,i){var a=Jf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Jf(a)}}function eh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?eh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function th(){for(var n=window,i=ze();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=ze(n.document)}return i}function yc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Rx(n){var i=th(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&eh(a.ownerDocument.documentElement,a)){if(c!==null&&yc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,g=Math.min(c.start,h);c=c.end===void 0?g:Math.min(c.end,h),!n.extend&&g>c&&(h=c,c=g,g=h),h=Qf(a,g);var T=Qf(a,c);h&&T&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Nx=p&&"documentMode"in document&&11>=document.documentMode,ys=null,Sc=null,wa=null,Mc=!1;function nh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mc||ys==null||ys!==ze(c)||(c=ys,"selectionStart"in c&&yc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),wa&&Ma(wa,c)||(wa=c,c=Ro(Sc,"onSelect"),0<c.length&&(i=new fc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=ys)))}function To(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ss={animationend:To("Animation","AnimationEnd"),animationiteration:To("Animation","AnimationIteration"),animationstart:To("Animation","AnimationStart"),transitionend:To("Transition","TransitionEnd")},wc={},ih={};p&&(ih=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function Ao(n){if(wc[n])return wc[n];if(!Ss[n])return n;var i=Ss[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in ih)return wc[n]=i[a];return n}var rh=Ao("animationend"),sh=Ao("animationiteration"),ah=Ao("animationstart"),oh=Ao("transitionend"),lh=new Map,ch="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(n,i){lh.set(n,i),l(i,[n])}for(var bc=0;bc<ch.length;bc++){var Ec=ch[bc],Px=Ec.toLowerCase(),Lx=Ec[0].toUpperCase()+Ec.slice(1);pr(Px,"on"+Lx)}pr(rh,"onAnimationEnd"),pr(sh,"onAnimationIteration"),pr(ah,"onAnimationStart"),pr("dblclick","onDoubleClick"),pr("focusin","onFocus"),pr("focusout","onBlur"),pr(oh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dx=new Set("cancel close invalid load scroll toggle".split(" ").concat(ba));function uh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,qt(c,i,void 0,n),n.currentTarget=null}function dh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var T=c.length-1;0<=T;T--){var B=c[T],Z=B.instance,ge=B.currentTarget;if(B=B.listener,Z!==g&&h.isPropagationStopped())break e;uh(h,B,ge),g=Z}else for(T=0;T<c.length;T++){if(B=c[T],Z=B.instance,ge=B.currentTarget,B=B.listener,Z!==g&&h.isPropagationStopped())break e;uh(h,B,ge),g=Z}}}if(ce)throw n=Be,ce=!1,Be=null,n}function Zt(n,i){var a=i[Dc];a===void 0&&(a=i[Dc]=new Set);var c=n+"__bubble";a.has(c)||(fh(i,n,2,!1),a.add(c))}function Tc(n,i,a){var c=0;i&&(c|=4),fh(a,n,c,i)}var Co="_reactListening"+Math.random().toString(36).slice(2);function Ea(n){if(!n[Co]){n[Co]=!0,r.forEach(function(a){a!=="selectionchange"&&(Dx.has(a)||Tc(a,!1,n),Tc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Co]||(i[Co]=!0,Tc("selectionchange",!1,i))}}function fh(n,i,a,c){switch(Uf(i)){case 1:var h=$g;break;case 4:h=Yg;break;default:h=cc}a=h.bind(null,i,a,n),h=void 0,!je||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function Ac(n,i,a,c,h){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var B=c.stateNode.containerInfo;if(B===h||B.nodeType===8&&B.parentNode===h)break;if(T===4)for(T=c.return;T!==null;){var Z=T.tag;if((Z===3||Z===4)&&(Z=T.stateNode.containerInfo,Z===h||Z.nodeType===8&&Z.parentNode===h))return;T=T.return}for(;B!==null;){if(T=Xr(B),T===null)return;if(Z=T.tag,Z===5||Z===6){c=g=T;continue e}B=B.parentNode}}c=c.return}ut(function(){var ge=g,De=ie(a),ke=[];e:{var Ne=lh.get(n);if(Ne!==void 0){var Je=fc,st=n;switch(n){case"keypress":if(Mo(a)===0)break e;case"keydown":case"keyup":Je=cx;break;case"focusin":st="focus",Je=mc;break;case"focusout":st="blur",Je=mc;break;case"beforeblur":case"afterblur":Je=mc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Je=zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Je=Zg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Je=fx;break;case rh:case sh:case ah:Je=ex;break;case oh:Je=px;break;case"scroll":Je=qg;break;case"wheel":Je=gx;break;case"copy":case"cut":case"paste":Je=nx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Je=Bf}var at=(i&4)!==0,fn=!at&&n==="scroll",ue=at?Ne!==null?Ne+"Capture":null:Ne;at=[];for(var ne=ge,he;ne!==null;){he=ne;var Ge=he.stateNode;if(he.tag===5&&Ge!==null&&(he=Ge,ue!==null&&(Ge=Q(ne,ue),Ge!=null&&at.push(Ta(ne,Ge,he)))),fn)break;ne=ne.return}0<at.length&&(Ne=new Je(Ne,st,null,a,De),ke.push({event:Ne,listeners:at}))}}if((i&7)===0){e:{if(Ne=n==="mouseover"||n==="pointerover",Je=n==="mouseout"||n==="pointerout",Ne&&a!==xe&&(st=a.relatedTarget||a.fromElement)&&(Xr(st)||st[Xi]))break e;if((Je||Ne)&&(Ne=De.window===De?De:(Ne=De.ownerDocument)?Ne.defaultView||Ne.parentWindow:window,Je?(st=a.relatedTarget||a.toElement,Je=ge,st=st?Xr(st):null,st!==null&&(fn=mn(st),st!==fn||st.tag!==5&&st.tag!==6)&&(st=null)):(Je=null,st=ge),Je!==st)){if(at=zf,Ge="onMouseLeave",ue="onMouseEnter",ne="mouse",(n==="pointerout"||n==="pointerover")&&(at=Bf,Ge="onPointerLeave",ue="onPointerEnter",ne="pointer"),fn=Je==null?Ne:bs(Je),he=st==null?Ne:bs(st),Ne=new at(Ge,ne+"leave",Je,a,De),Ne.target=fn,Ne.relatedTarget=he,Ge=null,Xr(De)===ge&&(at=new at(ue,ne+"enter",st,a,De),at.target=he,at.relatedTarget=fn,Ge=at),fn=Ge,Je&&st)t:{for(at=Je,ue=st,ne=0,he=at;he;he=Ms(he))ne++;for(he=0,Ge=ue;Ge;Ge=Ms(Ge))he++;for(;0<ne-he;)at=Ms(at),ne--;for(;0<he-ne;)ue=Ms(ue),he--;for(;ne--;){if(at===ue||ue!==null&&at===ue.alternate)break t;at=Ms(at),ue=Ms(ue)}at=null}else at=null;Je!==null&&hh(ke,Ne,Je,at,!1),st!==null&&fn!==null&&hh(ke,fn,st,at,!0)}}e:{if(Ne=ge?bs(ge):window,Je=Ne.nodeName&&Ne.nodeName.toLowerCase(),Je==="select"||Je==="input"&&Ne.type==="file")var ct=wx;else if(Xf(Ne))if(Yf)ct=Ax;else{ct=Ex;var dt=bx}else(Je=Ne.nodeName)&&Je.toLowerCase()==="input"&&(Ne.type==="checkbox"||Ne.type==="radio")&&(ct=Tx);if(ct&&(ct=ct(n,ge))){$f(ke,ct,a,De);break e}dt&&dt(n,Ne,ge),n==="focusout"&&(dt=Ne._wrapperState)&&dt.controlled&&Ne.type==="number"&&nn(Ne,"number",Ne.value)}switch(dt=ge?bs(ge):window,n){case"focusin":(Xf(dt)||dt.contentEditable==="true")&&(ys=dt,Sc=ge,wa=null);break;case"focusout":wa=Sc=ys=null;break;case"mousedown":Mc=!0;break;case"contextmenu":case"mouseup":case"dragend":Mc=!1,nh(ke,a,De);break;case"selectionchange":if(Nx)break;case"keydown":case"keyup":nh(ke,a,De)}var ft;if(xc)e:{switch(n){case"compositionstart":var pt="onCompositionStart";break e;case"compositionend":pt="onCompositionEnd";break e;case"compositionupdate":pt="onCompositionUpdate";break e}pt=void 0}else _s?Wf(n,a)&&(pt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(pt="onCompositionStart");pt&&(Gf&&a.locale!=="ko"&&(_s||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&_s&&(ft=Ff()):(hr=De,dc="value"in hr?hr.value:hr.textContent,_s=!0)),dt=Ro(ge,pt),0<dt.length&&(pt=new Of(pt,n,null,a,De),ke.push({event:pt,listeners:dt}),ft?pt.data=ft:(ft=jf(a),ft!==null&&(pt.data=ft)))),(ft=vx?_x(n,a):yx(n,a))&&(ge=Ro(ge,"onBeforeInput"),0<ge.length&&(De=new Of("onBeforeInput","beforeinput",null,a,De),ke.push({event:De,listeners:ge}),De.data=ft))}dh(ke,i)})}function Ta(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ro(n,i){for(var a=i+"Capture",c=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=Q(n,a),g!=null&&c.unshift(Ta(n,g,h)),g=Q(n,i),g!=null&&c.push(Ta(n,g,h))),n=n.return}return c}function Ms(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function hh(n,i,a,c,h){for(var g=i._reactName,T=[];a!==null&&a!==c;){var B=a,Z=B.alternate,ge=B.stateNode;if(Z!==null&&Z===c)break;B.tag===5&&ge!==null&&(B=ge,h?(Z=Q(a,g),Z!=null&&T.unshift(Ta(a,Z,B))):h||(Z=Q(a,g),Z!=null&&T.push(Ta(a,Z,B)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var Ix=/\r\n?/g,Ux=/\u0000|\uFFFD/g;function ph(n){return(typeof n=="string"?n:""+n).replace(Ix,`
`).replace(Ux,"")}function No(n,i,a){if(i=ph(i),ph(n)!==i&&a)throw Error(t(425))}function Po(){}var Cc=null,Rc=null;function Nc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Pc=typeof setTimeout=="function"?setTimeout:void 0,Fx=typeof clearTimeout=="function"?clearTimeout:void 0,mh=typeof Promise=="function"?Promise:void 0,kx=typeof queueMicrotask=="function"?queueMicrotask:typeof mh<"u"?function(n){return mh.resolve(null).then(n).catch(zx)}:Pc;function zx(n){setTimeout(function(){throw n})}function Lc(n,i){var a=i,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),ga(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);ga(i)}function mr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function gh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ws=Math.random().toString(36).slice(2),Di="__reactFiber$"+ws,Aa="__reactProps$"+ws,Xi="__reactContainer$"+ws,Dc="__reactEvents$"+ws,Ox="__reactListeners$"+ws,Bx="__reactHandles$"+ws;function Xr(n){var i=n[Di];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Xi]||a[Di]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=gh(n);n!==null;){if(a=n[Di])return a;n=gh(n)}return i}n=a,a=n.parentNode}return null}function Ca(n){return n=n[Di]||n[Xi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function bs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Lo(n){return n[Aa]||null}var Ic=[],Es=-1;function gr(n){return{current:n}}function Jt(n){0>Es||(n.current=Ic[Es],Ic[Es]=null,Es--)}function Kt(n,i){Es++,Ic[Es]=n.current,n.current=i}var xr={},Ln=gr(xr),Xn=gr(!1),$r=xr;function Ts(n,i){var a=n.type.contextTypes;if(!a)return xr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in a)h[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function $n(n){return n=n.childContextTypes,n!=null}function Do(){Jt(Xn),Jt(Ln)}function xh(n,i,a){if(Ln.current!==xr)throw Error(t(168));Kt(Ln,i),Kt(Xn,a)}function vh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,Re(n)||"Unknown",h));return Y({},a,c)}function Io(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||xr,$r=Ln.current,Kt(Ln,n),Kt(Xn,Xn.current),!0}function _h(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=vh(n,i,$r),c.__reactInternalMemoizedMergedChildContext=n,Jt(Xn),Jt(Ln),Kt(Ln,n)):Jt(Xn),Kt(Xn,a)}var $i=null,Uo=!1,Uc=!1;function yh(n){$i===null?$i=[n]:$i.push(n)}function Gx(n){Uo=!0,yh(n)}function vr(){if(!Uc&&$i!==null){Uc=!0;var n=0,i=ot;try{var a=$i;for(ot=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}$i=null,Uo=!1}catch(h){throw $i!==null&&($i=$i.slice(n+1)),ua(fa,vr),h}finally{ot=i,Uc=!1}}return null}var As=[],Cs=0,Fo=null,ko=0,li=[],ci=0,Yr=null,Yi=1,qi="";function qr(n,i){As[Cs++]=ko,As[Cs++]=Fo,Fo=n,ko=i}function Sh(n,i,a){li[ci++]=Yi,li[ci++]=qi,li[ci++]=Yr,Yr=n;var c=Yi;n=qi;var h=32-oe(c)-1;c&=~(1<<h),a+=1;var g=32-oe(i)+h;if(30<g){var T=h-h%5;g=(c&(1<<T)-1).toString(32),c>>=T,h-=T,Yi=1<<32-oe(i)+h|a<<h|c,qi=g+n}else Yi=1<<g|a<<h|c,qi=n}function Fc(n){n.return!==null&&(qr(n,1),Sh(n,1,0))}function kc(n){for(;n===Fo;)Fo=As[--Cs],As[Cs]=null,ko=As[--Cs],As[Cs]=null;for(;n===Yr;)Yr=li[--ci],li[ci]=null,qi=li[--ci],li[ci]=null,Yi=li[--ci],li[ci]=null}var ei=null,ti=null,tn=!1,xi=null;function Mh(n,i){var a=hi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function wh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ei=n,ti=mr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ei=n,ti=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Yr!==null?{id:Yi,overflow:qi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=hi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,ei=n,ti=null,!0):!1;default:return!1}}function zc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Oc(n){if(tn){var i=ti;if(i){var a=i;if(!wh(n,i)){if(zc(n))throw Error(t(418));i=mr(a.nextSibling);var c=ei;i&&wh(n,i)?Mh(c,a):(n.flags=n.flags&-4097|2,tn=!1,ei=n)}}else{if(zc(n))throw Error(t(418));n.flags=n.flags&-4097|2,tn=!1,ei=n}}}function bh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ei=n}function zo(n){if(n!==ei)return!1;if(!tn)return bh(n),tn=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Nc(n.type,n.memoizedProps)),i&&(i=ti)){if(zc(n))throw Eh(),Error(t(418));for(;i;)Mh(n,i),i=mr(i.nextSibling)}if(bh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){ti=mr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}ti=null}}else ti=ei?mr(n.stateNode.nextSibling):null;return!0}function Eh(){for(var n=ti;n;)n=mr(n.nextSibling)}function Rs(){ti=ei=null,tn=!1}function Bc(n){xi===null?xi=[n]:xi.push(n)}var Hx=P.ReactCurrentBatchConfig;function Ra(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(T){var B=h.refs;T===null?delete B[g]:B[g]=T},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Oo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Th(n){var i=n._init;return i(n._payload)}function Ah(n){function i(ue,ne){if(n){var he=ue.deletions;he===null?(ue.deletions=[ne],ue.flags|=16):he.push(ne)}}function a(ue,ne){if(!n)return null;for(;ne!==null;)i(ue,ne),ne=ne.sibling;return null}function c(ue,ne){for(ue=new Map;ne!==null;)ne.key!==null?ue.set(ne.key,ne):ue.set(ne.index,ne),ne=ne.sibling;return ue}function h(ue,ne){return ue=Tr(ue,ne),ue.index=0,ue.sibling=null,ue}function g(ue,ne,he){return ue.index=he,n?(he=ue.alternate,he!==null?(he=he.index,he<ne?(ue.flags|=2,ne):he):(ue.flags|=2,ne)):(ue.flags|=1048576,ne)}function T(ue){return n&&ue.alternate===null&&(ue.flags|=2),ue}function B(ue,ne,he,Ge){return ne===null||ne.tag!==6?(ne=Pu(he,ue.mode,Ge),ne.return=ue,ne):(ne=h(ne,he),ne.return=ue,ne)}function Z(ue,ne,he,Ge){var ct=he.type;return ct===w?De(ue,ne,he.props.children,Ge,he.key):ne!==null&&(ne.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===re&&Th(ct)===ne.type)?(Ge=h(ne,he.props),Ge.ref=Ra(ue,ne,he),Ge.return=ue,Ge):(Ge=cl(he.type,he.key,he.props,null,ue.mode,Ge),Ge.ref=Ra(ue,ne,he),Ge.return=ue,Ge)}function ge(ue,ne,he,Ge){return ne===null||ne.tag!==4||ne.stateNode.containerInfo!==he.containerInfo||ne.stateNode.implementation!==he.implementation?(ne=Lu(he,ue.mode,Ge),ne.return=ue,ne):(ne=h(ne,he.children||[]),ne.return=ue,ne)}function De(ue,ne,he,Ge,ct){return ne===null||ne.tag!==7?(ne=is(he,ue.mode,Ge,ct),ne.return=ue,ne):(ne=h(ne,he),ne.return=ue,ne)}function ke(ue,ne,he){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return ne=Pu(""+ne,ue.mode,he),ne.return=ue,ne;if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case U:return he=cl(ne.type,ne.key,ne.props,null,ue.mode,he),he.ref=Ra(ue,null,ne),he.return=ue,he;case D:return ne=Lu(ne,ue.mode,he),ne.return=ue,ne;case re:var Ge=ne._init;return ke(ue,Ge(ne._payload),he)}if(Pt(ne)||j(ne))return ne=is(ne,ue.mode,he,null),ne.return=ue,ne;Oo(ue,ne)}return null}function Ne(ue,ne,he,Ge){var ct=ne!==null?ne.key:null;if(typeof he=="string"&&he!==""||typeof he=="number")return ct!==null?null:B(ue,ne,""+he,Ge);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case U:return he.key===ct?Z(ue,ne,he,Ge):null;case D:return he.key===ct?ge(ue,ne,he,Ge):null;case re:return ct=he._init,Ne(ue,ne,ct(he._payload),Ge)}if(Pt(he)||j(he))return ct!==null?null:De(ue,ne,he,Ge,null);Oo(ue,he)}return null}function Je(ue,ne,he,Ge,ct){if(typeof Ge=="string"&&Ge!==""||typeof Ge=="number")return ue=ue.get(he)||null,B(ne,ue,""+Ge,ct);if(typeof Ge=="object"&&Ge!==null){switch(Ge.$$typeof){case U:return ue=ue.get(Ge.key===null?he:Ge.key)||null,Z(ne,ue,Ge,ct);case D:return ue=ue.get(Ge.key===null?he:Ge.key)||null,ge(ne,ue,Ge,ct);case re:var dt=Ge._init;return Je(ue,ne,he,dt(Ge._payload),ct)}if(Pt(Ge)||j(Ge))return ue=ue.get(he)||null,De(ne,ue,Ge,ct,null);Oo(ne,Ge)}return null}function st(ue,ne,he,Ge){for(var ct=null,dt=null,ft=ne,pt=ne=0,Tn=null;ft!==null&&pt<he.length;pt++){ft.index>pt?(Tn=ft,ft=null):Tn=ft.sibling;var Gt=Ne(ue,ft,he[pt],Ge);if(Gt===null){ft===null&&(ft=Tn);break}n&&ft&&Gt.alternate===null&&i(ue,ft),ne=g(Gt,ne,pt),dt===null?ct=Gt:dt.sibling=Gt,dt=Gt,ft=Tn}if(pt===he.length)return a(ue,ft),tn&&qr(ue,pt),ct;if(ft===null){for(;pt<he.length;pt++)ft=ke(ue,he[pt],Ge),ft!==null&&(ne=g(ft,ne,pt),dt===null?ct=ft:dt.sibling=ft,dt=ft);return tn&&qr(ue,pt),ct}for(ft=c(ue,ft);pt<he.length;pt++)Tn=Je(ft,ue,pt,he[pt],Ge),Tn!==null&&(n&&Tn.alternate!==null&&ft.delete(Tn.key===null?pt:Tn.key),ne=g(Tn,ne,pt),dt===null?ct=Tn:dt.sibling=Tn,dt=Tn);return n&&ft.forEach(function(Ar){return i(ue,Ar)}),tn&&qr(ue,pt),ct}function at(ue,ne,he,Ge){var ct=j(he);if(typeof ct!="function")throw Error(t(150));if(he=ct.call(he),he==null)throw Error(t(151));for(var dt=ct=null,ft=ne,pt=ne=0,Tn=null,Gt=he.next();ft!==null&&!Gt.done;pt++,Gt=he.next()){ft.index>pt?(Tn=ft,ft=null):Tn=ft.sibling;var Ar=Ne(ue,ft,Gt.value,Ge);if(Ar===null){ft===null&&(ft=Tn);break}n&&ft&&Ar.alternate===null&&i(ue,ft),ne=g(Ar,ne,pt),dt===null?ct=Ar:dt.sibling=Ar,dt=Ar,ft=Tn}if(Gt.done)return a(ue,ft),tn&&qr(ue,pt),ct;if(ft===null){for(;!Gt.done;pt++,Gt=he.next())Gt=ke(ue,Gt.value,Ge),Gt!==null&&(ne=g(Gt,ne,pt),dt===null?ct=Gt:dt.sibling=Gt,dt=Gt);return tn&&qr(ue,pt),ct}for(ft=c(ue,ft);!Gt.done;pt++,Gt=he.next())Gt=Je(ft,ue,pt,Gt.value,Ge),Gt!==null&&(n&&Gt.alternate!==null&&ft.delete(Gt.key===null?pt:Gt.key),ne=g(Gt,ne,pt),dt===null?ct=Gt:dt.sibling=Gt,dt=Gt);return n&&ft.forEach(function(Sv){return i(ue,Sv)}),tn&&qr(ue,pt),ct}function fn(ue,ne,he,Ge){if(typeof he=="object"&&he!==null&&he.type===w&&he.key===null&&(he=he.props.children),typeof he=="object"&&he!==null){switch(he.$$typeof){case U:e:{for(var ct=he.key,dt=ne;dt!==null;){if(dt.key===ct){if(ct=he.type,ct===w){if(dt.tag===7){a(ue,dt.sibling),ne=h(dt,he.props.children),ne.return=ue,ue=ne;break e}}else if(dt.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===re&&Th(ct)===dt.type){a(ue,dt.sibling),ne=h(dt,he.props),ne.ref=Ra(ue,dt,he),ne.return=ue,ue=ne;break e}a(ue,dt);break}else i(ue,dt);dt=dt.sibling}he.type===w?(ne=is(he.props.children,ue.mode,Ge,he.key),ne.return=ue,ue=ne):(Ge=cl(he.type,he.key,he.props,null,ue.mode,Ge),Ge.ref=Ra(ue,ne,he),Ge.return=ue,ue=Ge)}return T(ue);case D:e:{for(dt=he.key;ne!==null;){if(ne.key===dt)if(ne.tag===4&&ne.stateNode.containerInfo===he.containerInfo&&ne.stateNode.implementation===he.implementation){a(ue,ne.sibling),ne=h(ne,he.children||[]),ne.return=ue,ue=ne;break e}else{a(ue,ne);break}else i(ue,ne);ne=ne.sibling}ne=Lu(he,ue.mode,Ge),ne.return=ue,ue=ne}return T(ue);case re:return dt=he._init,fn(ue,ne,dt(he._payload),Ge)}if(Pt(he))return st(ue,ne,he,Ge);if(j(he))return at(ue,ne,he,Ge);Oo(ue,he)}return typeof he=="string"&&he!==""||typeof he=="number"?(he=""+he,ne!==null&&ne.tag===6?(a(ue,ne.sibling),ne=h(ne,he),ne.return=ue,ue=ne):(a(ue,ne),ne=Pu(he,ue.mode,Ge),ne.return=ue,ue=ne),T(ue)):a(ue,ne)}return fn}var Ns=Ah(!0),Ch=Ah(!1),Bo=gr(null),Go=null,Ps=null,Gc=null;function Hc(){Gc=Ps=Go=null}function Vc(n){var i=Bo.current;Jt(Bo),n._currentValue=i}function Wc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ls(n,i){Go=n,Gc=Ps=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Yn=!0),n.firstContext=null)}function ui(n){var i=n._currentValue;if(Gc!==n)if(n={context:n,memoizedValue:i,next:null},Ps===null){if(Go===null)throw Error(t(308));Ps=n,Go.dependencies={lanes:0,firstContext:n}}else Ps=Ps.next=n;return i}var Kr=null;function jc(n){Kr===null?Kr=[n]:Kr.push(n)}function Rh(n,i,a,c){var h=i.interleaved;return h===null?(a.next=a,jc(i)):(a.next=h.next,h.next=a),i.interleaved=a,Ki(n,c)}function Ki(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var _r=!1;function Xc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Zi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function yr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ot&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,Ki(n,a)}return h=c.interleaved,h===null?(i.next=i,jc(c)):(i.next=h.next,h.next=i),c.interleaved=i,Ki(n,a)}function Ho(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,gn(n,a)}}function Ph(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?h=g=T:g=g.next=T,a=a.next}while(a!==null);g===null?h=g=i:g=g.next=i}else h=g=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Vo(n,i,a,c){var h=n.updateQueue;_r=!1;var g=h.firstBaseUpdate,T=h.lastBaseUpdate,B=h.shared.pending;if(B!==null){h.shared.pending=null;var Z=B,ge=Z.next;Z.next=null,T===null?g=ge:T.next=ge,T=Z;var De=n.alternate;De!==null&&(De=De.updateQueue,B=De.lastBaseUpdate,B!==T&&(B===null?De.firstBaseUpdate=ge:B.next=ge,De.lastBaseUpdate=Z))}if(g!==null){var ke=h.baseState;T=0,De=ge=Z=null,B=g;do{var Ne=B.lane,Je=B.eventTime;if((c&Ne)===Ne){De!==null&&(De=De.next={eventTime:Je,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var st=n,at=B;switch(Ne=i,Je=a,at.tag){case 1:if(st=at.payload,typeof st=="function"){ke=st.call(Je,ke,Ne);break e}ke=st;break e;case 3:st.flags=st.flags&-65537|128;case 0:if(st=at.payload,Ne=typeof st=="function"?st.call(Je,ke,Ne):st,Ne==null)break e;ke=Y({},ke,Ne);break e;case 2:_r=!0}}B.callback!==null&&B.lane!==0&&(n.flags|=64,Ne=h.effects,Ne===null?h.effects=[B]:Ne.push(B))}else Je={eventTime:Je,lane:Ne,tag:B.tag,payload:B.payload,callback:B.callback,next:null},De===null?(ge=De=Je,Z=ke):De=De.next=Je,T|=Ne;if(B=B.next,B===null){if(B=h.shared.pending,B===null)break;Ne=B,B=Ne.next,Ne.next=null,h.lastBaseUpdate=Ne,h.shared.pending=null}}while(!0);if(De===null&&(Z=ke),h.baseState=Z,h.firstBaseUpdate=ge,h.lastBaseUpdate=De,i=h.shared.interleaved,i!==null){h=i;do T|=h.lane,h=h.next;while(h!==i)}else g===null&&(h.shared.lanes=0);Qr|=T,n.lanes=T,n.memoizedState=ke}}function Lh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var Na={},Ii=gr(Na),Pa=gr(Na),La=gr(Na);function Zr(n){if(n===Na)throw Error(t(174));return n}function $c(n,i){switch(Kt(La,i),Kt(Pa,n),Kt(Ii,Na),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:bt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=bt(i,n)}Jt(Ii),Kt(Ii,i)}function Ds(){Jt(Ii),Jt(Pa),Jt(La)}function Dh(n){Zr(La.current);var i=Zr(Ii.current),a=bt(i,n.type);i!==a&&(Kt(Pa,n),Kt(Ii,a))}function Yc(n){Pa.current===n&&(Jt(Ii),Jt(Pa))}var sn=gr(0);function Wo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var qc=[];function Kc(){for(var n=0;n<qc.length;n++)qc[n]._workInProgressVersionPrimary=null;qc.length=0}var jo=P.ReactCurrentDispatcher,Zc=P.ReactCurrentBatchConfig,Jr=0,an=null,vn=null,bn=null,Xo=!1,Da=!1,Ia=0,Vx=0;function Dn(){throw Error(t(321))}function Jc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!gi(n[a],i[a]))return!1;return!0}function Qc(n,i,a,c,h,g){if(Jr=g,an=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,jo.current=n===null||n.memoizedState===null?$x:Yx,n=a(c,h),Da){g=0;do{if(Da=!1,Ia=0,25<=g)throw Error(t(301));g+=1,bn=vn=null,i.updateQueue=null,jo.current=qx,n=a(c,h)}while(Da)}if(jo.current=qo,i=vn!==null&&vn.next!==null,Jr=0,bn=vn=an=null,Xo=!1,i)throw Error(t(300));return n}function eu(){var n=Ia!==0;return Ia=0,n}function Ui(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bn===null?an.memoizedState=bn=n:bn=bn.next=n,bn}function di(){if(vn===null){var n=an.alternate;n=n!==null?n.memoizedState:null}else n=vn.next;var i=bn===null?an.memoizedState:bn.next;if(i!==null)bn=i,vn=n;else{if(n===null)throw Error(t(310));vn=n,n={memoizedState:vn.memoizedState,baseState:vn.baseState,baseQueue:vn.baseQueue,queue:vn.queue,next:null},bn===null?an.memoizedState=bn=n:bn=bn.next=n}return bn}function Ua(n,i){return typeof i=="function"?i(n):i}function tu(n){var i=di(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=vn,h=c.baseQueue,g=a.pending;if(g!==null){if(h!==null){var T=h.next;h.next=g.next,g.next=T}c.baseQueue=h=g,a.pending=null}if(h!==null){g=h.next,c=c.baseState;var B=T=null,Z=null,ge=g;do{var De=ge.lane;if((Jr&De)===De)Z!==null&&(Z=Z.next={lane:0,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null}),c=ge.hasEagerState?ge.eagerState:n(c,ge.action);else{var ke={lane:De,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null};Z===null?(B=Z=ke,T=c):Z=Z.next=ke,an.lanes|=De,Qr|=De}ge=ge.next}while(ge!==null&&ge!==g);Z===null?T=c:Z.next=B,gi(c,i.memoizedState)||(Yn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=Z,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do g=h.lane,an.lanes|=g,Qr|=g,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function nu(n){var i=di(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,g=i.memoizedState;if(h!==null){a.pending=null;var T=h=h.next;do g=n(g,T.action),T=T.next;while(T!==h);gi(g,i.memoizedState)||(Yn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function Ih(){}function Uh(n,i){var a=an,c=di(),h=i(),g=!gi(c.memoizedState,h);if(g&&(c.memoizedState=h,Yn=!0),c=c.queue,iu(zh.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||bn!==null&&bn.memoizedState.tag&1){if(a.flags|=2048,Fa(9,kh.bind(null,a,c,h,i),void 0,null),En===null)throw Error(t(349));(Jr&30)!==0||Fh(a,i,h)}return h}function Fh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=an.updateQueue,i===null?(i={lastEffect:null,stores:null},an.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function kh(n,i,a,c){i.value=a,i.getSnapshot=c,Oh(i)&&Bh(n)}function zh(n,i,a){return a(function(){Oh(i)&&Bh(n)})}function Oh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!gi(n,a)}catch{return!0}}function Bh(n){var i=Ki(n,1);i!==null&&Si(i,n,1,-1)}function Gh(n){var i=Ui();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:n},i.queue=n,n=n.dispatch=Xx.bind(null,an,n),[i.memoizedState,n]}function Fa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=an.updateQueue,i===null?(i={lastEffect:null,stores:null},an.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Hh(){return di().memoizedState}function $o(n,i,a,c){var h=Ui();an.flags|=n,h.memoizedState=Fa(1|i,a,void 0,c===void 0?null:c)}function Yo(n,i,a,c){var h=di();c=c===void 0?null:c;var g=void 0;if(vn!==null){var T=vn.memoizedState;if(g=T.destroy,c!==null&&Jc(c,T.deps)){h.memoizedState=Fa(i,a,g,c);return}}an.flags|=n,h.memoizedState=Fa(1|i,a,g,c)}function Vh(n,i){return $o(8390656,8,n,i)}function iu(n,i){return Yo(2048,8,n,i)}function Wh(n,i){return Yo(4,2,n,i)}function jh(n,i){return Yo(4,4,n,i)}function Xh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function $h(n,i,a){return a=a!=null?a.concat([n]):null,Yo(4,4,Xh.bind(null,i,n),a)}function ru(){}function Yh(n,i){var a=di();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Jc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function qh(n,i){var a=di();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Jc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Kh(n,i,a){return(Jr&21)===0?(n.baseState&&(n.baseState=!1,Yn=!0),n.memoizedState=a):(gi(a,i)||(a=jt(),an.lanes|=a,Qr|=a,n.baseState=!0),i)}function Wx(n,i){var a=ot;ot=a!==0&&4>a?a:4,n(!0);var c=Zc.transition;Zc.transition={};try{n(!1),i()}finally{ot=a,Zc.transition=c}}function Zh(){return di().memoizedState}function jx(n,i,a){var c=br(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Jh(n))Qh(i,a);else if(a=Rh(n,i,a,c),a!==null){var h=Hn();Si(a,n,c,h),ep(a,i,c)}}function Xx(n,i,a){var c=br(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Jh(n))Qh(i,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var T=i.lastRenderedState,B=g(T,a);if(h.hasEagerState=!0,h.eagerState=B,gi(B,T)){var Z=i.interleaved;Z===null?(h.next=h,jc(i)):(h.next=Z.next,Z.next=h),i.interleaved=h;return}}catch{}finally{}a=Rh(n,i,h,c),a!==null&&(h=Hn(),Si(a,n,c,h),ep(a,i,c))}}function Jh(n){var i=n.alternate;return n===an||i!==null&&i===an}function Qh(n,i){Da=Xo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function ep(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,gn(n,a)}}var qo={readContext:ui,useCallback:Dn,useContext:Dn,useEffect:Dn,useImperativeHandle:Dn,useInsertionEffect:Dn,useLayoutEffect:Dn,useMemo:Dn,useReducer:Dn,useRef:Dn,useState:Dn,useDebugValue:Dn,useDeferredValue:Dn,useTransition:Dn,useMutableSource:Dn,useSyncExternalStore:Dn,useId:Dn,unstable_isNewReconciler:!1},$x={readContext:ui,useCallback:function(n,i){return Ui().memoizedState=[n,i===void 0?null:i],n},useContext:ui,useEffect:Vh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,$o(4194308,4,Xh.bind(null,i,n),a)},useLayoutEffect:function(n,i){return $o(4194308,4,n,i)},useInsertionEffect:function(n,i){return $o(4,2,n,i)},useMemo:function(n,i){var a=Ui();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ui();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=jx.bind(null,an,n),[c.memoizedState,n]},useRef:function(n){var i=Ui();return n={current:n},i.memoizedState=n},useState:Gh,useDebugValue:ru,useDeferredValue:function(n){return Ui().memoizedState=n},useTransition:function(){var n=Gh(!1),i=n[0];return n=Wx.bind(null,n[1]),Ui().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=an,h=Ui();if(tn){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),En===null)throw Error(t(349));(Jr&30)!==0||Fh(c,i,a)}h.memoizedState=a;var g={value:a,getSnapshot:i};return h.queue=g,Vh(zh.bind(null,c,g,n),[n]),c.flags|=2048,Fa(9,kh.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=Ui(),i=En.identifierPrefix;if(tn){var a=qi,c=Yi;a=(c&~(1<<32-oe(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ia++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Vx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Yx={readContext:ui,useCallback:Yh,useContext:ui,useEffect:iu,useImperativeHandle:$h,useInsertionEffect:Wh,useLayoutEffect:jh,useMemo:qh,useReducer:tu,useRef:Hh,useState:function(){return tu(Ua)},useDebugValue:ru,useDeferredValue:function(n){var i=di();return Kh(i,vn.memoizedState,n)},useTransition:function(){var n=tu(Ua)[0],i=di().memoizedState;return[n,i]},useMutableSource:Ih,useSyncExternalStore:Uh,useId:Zh,unstable_isNewReconciler:!1},qx={readContext:ui,useCallback:Yh,useContext:ui,useEffect:iu,useImperativeHandle:$h,useInsertionEffect:Wh,useLayoutEffect:jh,useMemo:qh,useReducer:nu,useRef:Hh,useState:function(){return nu(Ua)},useDebugValue:ru,useDeferredValue:function(n){var i=di();return vn===null?i.memoizedState=n:Kh(i,vn.memoizedState,n)},useTransition:function(){var n=nu(Ua)[0],i=di().memoizedState;return[n,i]},useMutableSource:Ih,useSyncExternalStore:Uh,useId:Zh,unstable_isNewReconciler:!1};function vi(n,i){if(n&&n.defaultProps){i=Y({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function su(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:Y({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ko={isMounted:function(n){return(n=n._reactInternals)?mn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Hn(),h=br(n),g=Zi(c,h);g.payload=i,a!=null&&(g.callback=a),i=yr(n,g,h),i!==null&&(Si(i,n,h,c),Ho(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Hn(),h=br(n),g=Zi(c,h);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=yr(n,g,h),i!==null&&(Si(i,n,h,c),Ho(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Hn(),c=br(n),h=Zi(a,c);h.tag=2,i!=null&&(h.callback=i),i=yr(n,h,c),i!==null&&(Si(i,n,c,a),Ho(i,n,c))}};function tp(n,i,a,c,h,g,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,T):i.prototype&&i.prototype.isPureReactComponent?!Ma(a,c)||!Ma(h,g):!0}function np(n,i,a){var c=!1,h=xr,g=i.contextType;return typeof g=="object"&&g!==null?g=ui(g):(h=$n(i)?$r:Ln.current,c=i.contextTypes,g=(c=c!=null)?Ts(n,h):xr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ko,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),i}function ip(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Ko.enqueueReplaceState(i,i.state,null)}function au(n,i,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},Xc(n);var g=i.contextType;typeof g=="object"&&g!==null?h.context=ui(g):(g=$n(i)?$r:Ln.current,h.context=Ts(n,g)),h.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(su(n,i,g,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&Ko.enqueueReplaceState(h,h.state,null),Vo(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Is(n,i){try{var a="",c=i;do a+=ve(c),c=c.return;while(c);var h=a}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:h,digest:null}}function ou(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function lu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Kx=typeof WeakMap=="function"?WeakMap:Map;function rp(n,i,a){a=Zi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){il||(il=!0,wu=c),lu(n,i)},a}function sp(n,i,a){a=Zi(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){lu(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){lu(n,i),typeof c!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function ap(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Kx;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),n=uv.bind(null,n,i,a),i.then(n,n))}function op(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function lp(n,i,a,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Zi(-1,1),i.tag=2,yr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var Zx=P.ReactCurrentOwner,Yn=!1;function Gn(n,i,a,c){i.child=n===null?Ch(i,null,a,c):Ns(i,n.child,a,c)}function cp(n,i,a,c,h){a=a.render;var g=i.ref;return Ls(i,h),c=Qc(n,i,a,c,g,h),a=eu(),n!==null&&!Yn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Ji(n,i,h)):(tn&&a&&Fc(i),i.flags|=1,Gn(n,i,c,h),i.child)}function up(n,i,a,c,h){if(n===null){var g=a.type;return typeof g=="function"&&!Nu(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,dp(n,i,g,c,h)):(n=cl(a.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&h)===0){var T=g.memoizedProps;if(a=a.compare,a=a!==null?a:Ma,a(T,c)&&n.ref===i.ref)return Ji(n,i,h)}return i.flags|=1,n=Tr(g,c),n.ref=i.ref,n.return=i,i.child=n}function dp(n,i,a,c,h){if(n!==null){var g=n.memoizedProps;if(Ma(g,c)&&n.ref===i.ref)if(Yn=!1,i.pendingProps=c=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(Yn=!0);else return i.lanes=n.lanes,Ji(n,i,h)}return cu(n,i,a,c,h)}function fp(n,i,a){var c=i.pendingProps,h=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Kt(Fs,ni),ni|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Kt(Fs,ni),ni|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,Kt(Fs,ni),ni|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,Kt(Fs,ni),ni|=c;return Gn(n,i,h,a),i.child}function hp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function cu(n,i,a,c,h){var g=$n(a)?$r:Ln.current;return g=Ts(i,g),Ls(i,h),a=Qc(n,i,a,c,g,h),c=eu(),n!==null&&!Yn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Ji(n,i,h)):(tn&&c&&Fc(i),i.flags|=1,Gn(n,i,a,h),i.child)}function pp(n,i,a,c,h){if($n(a)){var g=!0;Io(i)}else g=!1;if(Ls(i,h),i.stateNode===null)Jo(n,i),np(i,a,c),au(i,a,c,h),c=!0;else if(n===null){var T=i.stateNode,B=i.memoizedProps;T.props=B;var Z=T.context,ge=a.contextType;typeof ge=="object"&&ge!==null?ge=ui(ge):(ge=$n(a)?$r:Ln.current,ge=Ts(i,ge));var De=a.getDerivedStateFromProps,ke=typeof De=="function"||typeof T.getSnapshotBeforeUpdate=="function";ke||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(B!==c||Z!==ge)&&ip(i,T,c,ge),_r=!1;var Ne=i.memoizedState;T.state=Ne,Vo(i,c,T,h),Z=i.memoizedState,B!==c||Ne!==Z||Xn.current||_r?(typeof De=="function"&&(su(i,a,De,c),Z=i.memoizedState),(B=_r||tp(i,a,B,c,Ne,Z,ge))?(ke||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=Z),T.props=c,T.state=Z,T.context=ge,c=B):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,Nh(n,i),B=i.memoizedProps,ge=i.type===i.elementType?B:vi(i.type,B),T.props=ge,ke=i.pendingProps,Ne=T.context,Z=a.contextType,typeof Z=="object"&&Z!==null?Z=ui(Z):(Z=$n(a)?$r:Ln.current,Z=Ts(i,Z));var Je=a.getDerivedStateFromProps;(De=typeof Je=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(B!==ke||Ne!==Z)&&ip(i,T,c,Z),_r=!1,Ne=i.memoizedState,T.state=Ne,Vo(i,c,T,h);var st=i.memoizedState;B!==ke||Ne!==st||Xn.current||_r?(typeof Je=="function"&&(su(i,a,Je,c),st=i.memoizedState),(ge=_r||tp(i,a,ge,c,Ne,st,Z)||!1)?(De||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,st,Z),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,st,Z)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||B===n.memoizedProps&&Ne===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Ne===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=st),T.props=c,T.state=st,T.context=Z,c=ge):(typeof T.componentDidUpdate!="function"||B===n.memoizedProps&&Ne===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Ne===n.memoizedState||(i.flags|=1024),c=!1)}return uu(n,i,a,c,g,h)}function uu(n,i,a,c,h,g){hp(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return h&&_h(i,a,!1),Ji(n,i,g);c=i.stateNode,Zx.current=i;var B=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=Ns(i,n.child,null,g),i.child=Ns(i,null,B,g)):Gn(n,i,B,g),i.memoizedState=c.state,h&&_h(i,a,!0),i.child}function mp(n){var i=n.stateNode;i.pendingContext?xh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&xh(n,i.context,!1),$c(n,i.containerInfo)}function gp(n,i,a,c,h){return Rs(),Bc(h),i.flags|=256,Gn(n,i,a,c),i.child}var du={dehydrated:null,treeContext:null,retryLane:0};function fu(n){return{baseLanes:n,cachePool:null,transitions:null}}function xp(n,i,a){var c=i.pendingProps,h=sn.current,g=!1,T=(i.flags&128)!==0,B;if((B=T)||(B=n!==null&&n.memoizedState===null?!1:(h&2)!==0),B?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Kt(sn,h&1),n===null)return Oc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,g?(c=i.mode,g=i.child,T={mode:"hidden",children:T},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=T):g=ul(T,c,0,null),n=is(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=fu(a),i.memoizedState=du,n):hu(i,T));if(h=n.memoizedState,h!==null&&(B=h.dehydrated,B!==null))return Jx(n,i,T,c,B,h,a);if(g){g=c.fallback,T=i.mode,h=n.child,B=h.sibling;var Z={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=Z,i.deletions=null):(c=Tr(h,Z),c.subtreeFlags=h.subtreeFlags&14680064),B!==null?g=Tr(B,g):(g=is(g,T,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,T=n.child.memoizedState,T=T===null?fu(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},g.memoizedState=T,g.childLanes=n.childLanes&~a,i.memoizedState=du,c}return g=n.child,n=g.sibling,c=Tr(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function hu(n,i){return i=ul({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Zo(n,i,a,c){return c!==null&&Bc(c),Ns(i,n.child,null,a),n=hu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Jx(n,i,a,c,h,g,T){if(a)return i.flags&256?(i.flags&=-257,c=ou(Error(t(422))),Zo(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,h=i.mode,c=ul({mode:"visible",children:c.children},h,0,null),g=is(g,h,T,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&Ns(i,n.child,null,T),i.child.memoizedState=fu(T),i.memoizedState=du,g);if((i.mode&1)===0)return Zo(n,i,T,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var B=c.dgst;return c=B,g=Error(t(419)),c=ou(g,c,void 0),Zo(n,i,T,c)}if(B=(T&n.childLanes)!==0,Yn||B){if(c=En,c!==null){switch(T&-T){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|T))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,Ki(n,h),Si(c,n,h,-1))}return Ru(),c=ou(Error(t(421))),Zo(n,i,T,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=dv.bind(null,n),h._reactRetry=i,null):(n=g.treeContext,ti=mr(h.nextSibling),ei=i,tn=!0,xi=null,n!==null&&(li[ci++]=Yi,li[ci++]=qi,li[ci++]=Yr,Yi=n.id,qi=n.overflow,Yr=i),i=hu(i,c.children),i.flags|=4096,i)}function vp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Wc(n.return,i,a)}function pu(n,i,a,c,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=h)}function _p(n,i,a){var c=i.pendingProps,h=c.revealOrder,g=c.tail;if(Gn(n,i,c.children,a),c=sn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&vp(n,a,i);else if(n.tag===19)vp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Kt(sn,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&Wo(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),pu(i,!1,h,a,g);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&Wo(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}pu(i,!0,a,null,g);break;case"together":pu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Jo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ji(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Qr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Tr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Tr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Qx(n,i,a){switch(i.tag){case 3:mp(i),Rs();break;case 5:Dh(i);break;case 1:$n(i.type)&&Io(i);break;case 4:$c(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;Kt(Bo,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Kt(sn,sn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?xp(n,i,a):(Kt(sn,sn.current&1),n=Ji(n,i,a),n!==null?n.sibling:null);Kt(sn,sn.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return _p(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Kt(sn,sn.current),c)break;return null;case 22:case 23:return i.lanes=0,fp(n,i,a)}return Ji(n,i,a)}var yp,mu,Sp,Mp;yp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},mu=function(){},Sp=function(n,i,a,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,Zr(Ii.current);var g=null;switch(a){case"input":h=We(n,h),c=We(n,c),g=[];break;case"select":h=Y({},h,{value:void 0}),c=Y({},c,{value:void 0}),g=[];break;case"textarea":h=zt(n,h),c=zt(n,c),g=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Po)}_e(a,c);var T;a=null;for(ge in h)if(!c.hasOwnProperty(ge)&&h.hasOwnProperty(ge)&&h[ge]!=null)if(ge==="style"){var B=h[ge];for(T in B)B.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else ge!=="dangerouslySetInnerHTML"&&ge!=="children"&&ge!=="suppressContentEditableWarning"&&ge!=="suppressHydrationWarning"&&ge!=="autoFocus"&&(o.hasOwnProperty(ge)?g||(g=[]):(g=g||[]).push(ge,null));for(ge in c){var Z=c[ge];if(B=h!=null?h[ge]:void 0,c.hasOwnProperty(ge)&&Z!==B&&(Z!=null||B!=null))if(ge==="style")if(B){for(T in B)!B.hasOwnProperty(T)||Z&&Z.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in Z)Z.hasOwnProperty(T)&&B[T]!==Z[T]&&(a||(a={}),a[T]=Z[T])}else a||(g||(g=[]),g.push(ge,a)),a=Z;else ge==="dangerouslySetInnerHTML"?(Z=Z?Z.__html:void 0,B=B?B.__html:void 0,Z!=null&&B!==Z&&(g=g||[]).push(ge,Z)):ge==="children"?typeof Z!="string"&&typeof Z!="number"||(g=g||[]).push(ge,""+Z):ge!=="suppressContentEditableWarning"&&ge!=="suppressHydrationWarning"&&(o.hasOwnProperty(ge)?(Z!=null&&ge==="onScroll"&&Zt("scroll",n),g||B===Z||(g=[])):(g=g||[]).push(ge,Z))}a&&(g=g||[]).push("style",a);var ge=g;(i.updateQueue=ge)&&(i.flags|=4)}},Mp=function(n,i,a,c){a!==c&&(i.flags|=4)};function ka(n,i){if(!tn)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function In(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function ev(n,i,a){var c=i.pendingProps;switch(kc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return In(i),null;case 1:return $n(i.type)&&Do(),In(i),null;case 3:return c=i.stateNode,Ds(),Jt(Xn),Jt(Ln),Kc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(zo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,xi!==null&&(Tu(xi),xi=null))),mu(n,i),In(i),null;case 5:Yc(i);var h=Zr(La.current);if(a=i.type,n!==null&&i.stateNode!=null)Sp(n,i,a,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return In(i),null}if(n=Zr(Ii.current),zo(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[Di]=i,c[Aa]=g,n=(i.mode&1)!==0,a){case"dialog":Zt("cancel",c),Zt("close",c);break;case"iframe":case"object":case"embed":Zt("load",c);break;case"video":case"audio":for(h=0;h<ba.length;h++)Zt(ba[h],c);break;case"source":Zt("error",c);break;case"img":case"image":case"link":Zt("error",c),Zt("load",c);break;case"details":Zt("toggle",c);break;case"input":_t(c,g),Zt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Zt("invalid",c);break;case"textarea":rn(c,g),Zt("invalid",c)}_e(a,g),h=null;for(var T in g)if(g.hasOwnProperty(T)){var B=g[T];T==="children"?typeof B=="string"?c.textContent!==B&&(g.suppressHydrationWarning!==!0&&No(c.textContent,B,n),h=["children",B]):typeof B=="number"&&c.textContent!==""+B&&(g.suppressHydrationWarning!==!0&&No(c.textContent,B,n),h=["children",""+B]):o.hasOwnProperty(T)&&B!=null&&T==="onScroll"&&Zt("scroll",c)}switch(a){case"input":He(c),It(c,g,!0);break;case"textarea":He(c),Yt(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Po)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Lt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[Di]=i,n[Aa]=c,yp(n,i,!1,!1),i.stateNode=n;e:{switch(T=Fe(a,c),a){case"dialog":Zt("cancel",n),Zt("close",n),h=c;break;case"iframe":case"object":case"embed":Zt("load",n),h=c;break;case"video":case"audio":for(h=0;h<ba.length;h++)Zt(ba[h],n);h=c;break;case"source":Zt("error",n),h=c;break;case"img":case"image":case"link":Zt("error",n),Zt("load",n),h=c;break;case"details":Zt("toggle",n),h=c;break;case"input":_t(n,c),h=We(n,c),Zt("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=Y({},c,{value:void 0}),Zt("invalid",n);break;case"textarea":rn(n,c),h=zt(n,c),Zt("invalid",n);break;default:h=c}_e(a,h),B=h;for(g in B)if(B.hasOwnProperty(g)){var Z=B[g];g==="style"?ae(n,Z):g==="dangerouslySetInnerHTML"?(Z=Z?Z.__html:void 0,Z!=null&&Et(n,Z)):g==="children"?typeof Z=="string"?(a!=="textarea"||Z!=="")&&qe(n,Z):typeof Z=="number"&&qe(n,""+Z):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?Z!=null&&g==="onScroll"&&Zt("scroll",n):Z!=null&&k(n,g,Z,T))}switch(a){case"input":He(n),It(n,c,!1);break;case"textarea":He(n),Yt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ye(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?Wt(n,!!c.multiple,g,!1):c.defaultValue!=null&&Wt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Po)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return In(i),null;case 6:if(n&&i.stateNode!=null)Mp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Zr(La.current),Zr(Ii.current),zo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Di]=i,(g=c.nodeValue!==a)&&(n=ei,n!==null))switch(n.tag){case 3:No(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&No(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Di]=i,i.stateNode=c}return In(i),null;case 13:if(Jt(sn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(tn&&ti!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Eh(),Rs(),i.flags|=98560,g=!1;else if(g=zo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Di]=i}else Rs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;In(i),g=!1}else xi!==null&&(Tu(xi),xi=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(sn.current&1)!==0?_n===0&&(_n=3):Ru())),i.updateQueue!==null&&(i.flags|=4),In(i),null);case 4:return Ds(),mu(n,i),n===null&&Ea(i.stateNode.containerInfo),In(i),null;case 10:return Vc(i.type._context),In(i),null;case 17:return $n(i.type)&&Do(),In(i),null;case 19:if(Jt(sn),g=i.memoizedState,g===null)return In(i),null;if(c=(i.flags&128)!==0,T=g.rendering,T===null)if(c)ka(g,!1);else{if(_n!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=Wo(n),T!==null){for(i.flags|=128,ka(g,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,T=g.alternate,T===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=T.childLanes,g.lanes=T.lanes,g.child=T.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=T.memoizedProps,g.memoizedState=T.memoizedState,g.updateQueue=T.updateQueue,g.type=T.type,n=T.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Kt(sn,sn.current&1|2),i.child}n=n.sibling}g.tail!==null&&Qt()>ks&&(i.flags|=128,c=!0,ka(g,!1),i.lanes=4194304)}else{if(!c)if(n=Wo(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ka(g,!0),g.tail===null&&g.tailMode==="hidden"&&!T.alternate&&!tn)return In(i),null}else 2*Qt()-g.renderingStartTime>ks&&a!==1073741824&&(i.flags|=128,c=!0,ka(g,!1),i.lanes=4194304);g.isBackwards?(T.sibling=i.child,i.child=T):(a=g.last,a!==null?a.sibling=T:i.child=T,g.last=T)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Qt(),i.sibling=null,a=sn.current,Kt(sn,c?a&1|2:a&1),i):(In(i),null);case 22:case 23:return Cu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ni&1073741824)!==0&&(In(i),i.subtreeFlags&6&&(i.flags|=8192)):In(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function tv(n,i){switch(kc(i),i.tag){case 1:return $n(i.type)&&Do(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ds(),Jt(Xn),Jt(Ln),Kc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Yc(i),null;case 13:if(Jt(sn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Rs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Jt(sn),null;case 4:return Ds(),null;case 10:return Vc(i.type._context),null;case 22:case 23:return Cu(),null;case 24:return null;default:return null}}var Qo=!1,Un=!1,nv=typeof WeakSet=="function"?WeakSet:Set,et=null;function Us(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){un(n,i,c)}else a.current=null}function gu(n,i,a){try{a()}catch(c){un(n,i,c)}}var wp=!1;function iv(n,i){if(Cc=_o,n=th(),yc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var T=0,B=-1,Z=-1,ge=0,De=0,ke=n,Ne=null;t:for(;;){for(var Je;ke!==a||h!==0&&ke.nodeType!==3||(B=T+h),ke!==g||c!==0&&ke.nodeType!==3||(Z=T+c),ke.nodeType===3&&(T+=ke.nodeValue.length),(Je=ke.firstChild)!==null;)Ne=ke,ke=Je;for(;;){if(ke===n)break t;if(Ne===a&&++ge===h&&(B=T),Ne===g&&++De===c&&(Z=T),(Je=ke.nextSibling)!==null)break;ke=Ne,Ne=ke.parentNode}ke=Je}a=B===-1||Z===-1?null:{start:B,end:Z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Rc={focusedElem:n,selectionRange:a},_o=!1,et=i;et!==null;)if(i=et,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,et=n;else for(;et!==null;){i=et;try{var st=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(st!==null){var at=st.memoizedProps,fn=st.memoizedState,ue=i.stateNode,ne=ue.getSnapshotBeforeUpdate(i.elementType===i.type?at:vi(i.type,at),fn);ue.__reactInternalSnapshotBeforeUpdate=ne}break;case 3:var he=i.stateNode.containerInfo;he.nodeType===1?he.textContent="":he.nodeType===9&&he.documentElement&&he.removeChild(he.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ge){un(i,i.return,Ge)}if(n=i.sibling,n!==null){n.return=i.return,et=n;break}et=i.return}return st=wp,wp=!1,st}function za(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&gu(i,a,g)}h=h.next}while(h!==c)}}function el(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function xu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function bp(n){var i=n.alternate;i!==null&&(n.alternate=null,bp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Di],delete i[Aa],delete i[Dc],delete i[Ox],delete i[Bx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Ep(n){return n.tag===5||n.tag===3||n.tag===4}function Tp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Ep(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function vu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Po));else if(c!==4&&(n=n.child,n!==null))for(vu(n,i,a),n=n.sibling;n!==null;)vu(n,i,a),n=n.sibling}function _u(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(_u(n,i,a),n=n.sibling;n!==null;)_u(n,i,a),n=n.sibling}var Cn=null,_i=!1;function Sr(n,i,a){for(a=a.child;a!==null;)Ap(n,i,a),a=a.sibling}function Ap(n,i,a){if(fe&&typeof fe.onCommitFiberUnmount=="function")try{fe.onCommitFiberUnmount(q,a)}catch{}switch(a.tag){case 5:Un||Us(a,i);case 6:var c=Cn,h=_i;Cn=null,Sr(n,i,a),Cn=c,_i=h,Cn!==null&&(_i?(n=Cn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Cn.removeChild(a.stateNode));break;case 18:Cn!==null&&(_i?(n=Cn,a=a.stateNode,n.nodeType===8?Lc(n.parentNode,a):n.nodeType===1&&Lc(n,a),ga(n)):Lc(Cn,a.stateNode));break;case 4:c=Cn,h=_i,Cn=a.stateNode.containerInfo,_i=!0,Sr(n,i,a),Cn=c,_i=h;break;case 0:case 11:case 14:case 15:if(!Un&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var g=h,T=g.destroy;g=g.tag,T!==void 0&&((g&2)!==0||(g&4)!==0)&&gu(a,i,T),h=h.next}while(h!==c)}Sr(n,i,a);break;case 1:if(!Un&&(Us(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(B){un(a,i,B)}Sr(n,i,a);break;case 21:Sr(n,i,a);break;case 22:a.mode&1?(Un=(c=Un)||a.memoizedState!==null,Sr(n,i,a),Un=c):Sr(n,i,a);break;default:Sr(n,i,a)}}function Cp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new nv),i.forEach(function(c){var h=fv.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function yi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var g=n,T=i,B=T;e:for(;B!==null;){switch(B.tag){case 5:Cn=B.stateNode,_i=!1;break e;case 3:Cn=B.stateNode.containerInfo,_i=!0;break e;case 4:Cn=B.stateNode.containerInfo,_i=!0;break e}B=B.return}if(Cn===null)throw Error(t(160));Ap(g,T,h),Cn=null,_i=!1;var Z=h.alternate;Z!==null&&(Z.return=null),h.return=null}catch(ge){un(h,i,ge)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Rp(i,n),i=i.sibling}function Rp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(yi(i,n),Fi(n),c&4){try{za(3,n,n.return),el(3,n)}catch(at){un(n,n.return,at)}try{za(5,n,n.return)}catch(at){un(n,n.return,at)}}break;case 1:yi(i,n),Fi(n),c&512&&a!==null&&Us(a,a.return);break;case 5:if(yi(i,n),Fi(n),c&512&&a!==null&&Us(a,a.return),n.flags&32){var h=n.stateNode;try{qe(h,"")}catch(at){un(n,n.return,at)}}if(c&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,T=a!==null?a.memoizedProps:g,B=n.type,Z=n.updateQueue;if(n.updateQueue=null,Z!==null)try{B==="input"&&g.type==="radio"&&g.name!=null&&yt(h,g),Fe(B,T);var ge=Fe(B,g);for(T=0;T<Z.length;T+=2){var De=Z[T],ke=Z[T+1];De==="style"?ae(h,ke):De==="dangerouslySetInnerHTML"?Et(h,ke):De==="children"?qe(h,ke):k(h,De,ke,ge)}switch(B){case"input":wt(h,g);break;case"textarea":J(h,g);break;case"select":var Ne=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var Je=g.value;Je!=null?Wt(h,!!g.multiple,Je,!1):Ne!==!!g.multiple&&(g.defaultValue!=null?Wt(h,!!g.multiple,g.defaultValue,!0):Wt(h,!!g.multiple,g.multiple?[]:"",!1))}h[Aa]=g}catch(at){un(n,n.return,at)}}break;case 6:if(yi(i,n),Fi(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(at){un(n,n.return,at)}}break;case 3:if(yi(i,n),Fi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ga(i.containerInfo)}catch(at){un(n,n.return,at)}break;case 4:yi(i,n),Fi(n);break;case 13:yi(i,n),Fi(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(Mu=Qt())),c&4&&Cp(n);break;case 22:if(De=a!==null&&a.memoizedState!==null,n.mode&1?(Un=(ge=Un)||De,yi(i,n),Un=ge):yi(i,n),Fi(n),c&8192){if(ge=n.memoizedState!==null,(n.stateNode.isHidden=ge)&&!De&&(n.mode&1)!==0)for(et=n,De=n.child;De!==null;){for(ke=et=De;et!==null;){switch(Ne=et,Je=Ne.child,Ne.tag){case 0:case 11:case 14:case 15:za(4,Ne,Ne.return);break;case 1:Us(Ne,Ne.return);var st=Ne.stateNode;if(typeof st.componentWillUnmount=="function"){c=Ne,a=Ne.return;try{i=c,st.props=i.memoizedProps,st.state=i.memoizedState,st.componentWillUnmount()}catch(at){un(c,a,at)}}break;case 5:Us(Ne,Ne.return);break;case 22:if(Ne.memoizedState!==null){Lp(ke);continue}}Je!==null?(Je.return=Ne,et=Je):Lp(ke)}De=De.sibling}e:for(De=null,ke=n;;){if(ke.tag===5){if(De===null){De=ke;try{h=ke.stateNode,ge?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(B=ke.stateNode,Z=ke.memoizedProps.style,T=Z!=null&&Z.hasOwnProperty("display")?Z.display:null,B.style.display=E("display",T))}catch(at){un(n,n.return,at)}}}else if(ke.tag===6){if(De===null)try{ke.stateNode.nodeValue=ge?"":ke.memoizedProps}catch(at){un(n,n.return,at)}}else if((ke.tag!==22&&ke.tag!==23||ke.memoizedState===null||ke===n)&&ke.child!==null){ke.child.return=ke,ke=ke.child;continue}if(ke===n)break e;for(;ke.sibling===null;){if(ke.return===null||ke.return===n)break e;De===ke&&(De=null),ke=ke.return}De===ke&&(De=null),ke.sibling.return=ke.return,ke=ke.sibling}}break;case 19:yi(i,n),Fi(n),c&4&&Cp(n);break;case 21:break;default:yi(i,n),Fi(n)}}function Fi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Ep(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(qe(h,""),c.flags&=-33);var g=Tp(n);_u(n,g,h);break;case 3:case 4:var T=c.stateNode.containerInfo,B=Tp(n);vu(n,B,T);break;default:throw Error(t(161))}}catch(Z){un(n,n.return,Z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function rv(n,i,a){et=n,Np(n)}function Np(n,i,a){for(var c=(n.mode&1)!==0;et!==null;){var h=et,g=h.child;if(h.tag===22&&c){var T=h.memoizedState!==null||Qo;if(!T){var B=h.alternate,Z=B!==null&&B.memoizedState!==null||Un;B=Qo;var ge=Un;if(Qo=T,(Un=Z)&&!ge)for(et=h;et!==null;)T=et,Z=T.child,T.tag===22&&T.memoizedState!==null?Dp(h):Z!==null?(Z.return=T,et=Z):Dp(h);for(;g!==null;)et=g,Np(g),g=g.sibling;et=h,Qo=B,Un=ge}Pp(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,et=g):Pp(n)}}function Pp(n){for(;et!==null;){var i=et;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Un||el(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Un)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:vi(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Lh(i,g,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Lh(i,T,a)}break;case 5:var B=i.stateNode;if(a===null&&i.flags&4){a=B;var Z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":Z.autoFocus&&a.focus();break;case"img":Z.src&&(a.src=Z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ge=i.alternate;if(ge!==null){var De=ge.memoizedState;if(De!==null){var ke=De.dehydrated;ke!==null&&ga(ke)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Un||i.flags&512&&xu(i)}catch(Ne){un(i,i.return,Ne)}}if(i===n){et=null;break}if(a=i.sibling,a!==null){a.return=i.return,et=a;break}et=i.return}}function Lp(n){for(;et!==null;){var i=et;if(i===n){et=null;break}var a=i.sibling;if(a!==null){a.return=i.return,et=a;break}et=i.return}}function Dp(n){for(;et!==null;){var i=et;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{el(4,i)}catch(Z){un(i,a,Z)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(Z){un(i,h,Z)}}var g=i.return;try{xu(i)}catch(Z){un(i,g,Z)}break;case 5:var T=i.return;try{xu(i)}catch(Z){un(i,T,Z)}}}catch(Z){un(i,i.return,Z)}if(i===n){et=null;break}var B=i.sibling;if(B!==null){B.return=i.return,et=B;break}et=i.return}}var sv=Math.ceil,tl=P.ReactCurrentDispatcher,yu=P.ReactCurrentOwner,fi=P.ReactCurrentBatchConfig,Ot=0,En=null,hn=null,Rn=0,ni=0,Fs=gr(0),_n=0,Oa=null,Qr=0,nl=0,Su=0,Ba=null,qn=null,Mu=0,ks=1/0,Qi=null,il=!1,wu=null,Mr=null,rl=!1,wr=null,sl=0,Ga=0,bu=null,al=-1,ol=0;function Hn(){return(Ot&6)!==0?Qt():al!==-1?al:al=Qt()}function br(n){return(n.mode&1)===0?1:(Ot&2)!==0&&Rn!==0?Rn&-Rn:Hx.transition!==null?(ol===0&&(ol=jt()),ol):(n=ot,n!==0||(n=window.event,n=n===void 0?16:Uf(n.type)),n)}function Si(n,i,a,c){if(50<Ga)throw Ga=0,bu=null,Error(t(185));cn(n,a,c),((Ot&2)===0||n!==En)&&(n===En&&((Ot&2)===0&&(nl|=a),_n===4&&Er(n,Rn)),Kn(n,c),a===1&&Ot===0&&(i.mode&1)===0&&(ks=Qt()+500,Uo&&vr()))}function Kn(n,i){var a=n.callbackNode;Tt(n,i);var c=St(n,n===En?Rn:0);if(c===0)a!==null&&da(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&da(a),i===1)n.tag===0?Gx(Up.bind(null,n)):yh(Up.bind(null,n)),kx(function(){(Ot&6)===0&&vr()}),a=null;else{switch(Pi(c)){case 1:a=fa;break;case 4:a=go;break;case 16:a=gs;break;case 536870912:a=A;break;default:a=gs}a=Vp(a,Ip.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Ip(n,i){if(al=-1,ol=0,(Ot&6)!==0)throw Error(t(327));var a=n.callbackNode;if(zs()&&n.callbackNode!==a)return null;var c=St(n,n===En?Rn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=ll(n,c);else{i=c;var h=Ot;Ot|=2;var g=kp();(En!==n||Rn!==i)&&(Qi=null,ks=Qt()+500,ts(n,i));do try{lv();break}catch(B){Fp(n,B)}while(!0);Hc(),tl.current=g,Ot=h,hn!==null?i=0:(En=null,Rn=0,i=_n)}if(i!==0){if(i===2&&(h=en(n),h!==0&&(c=h,i=Eu(n,h))),i===1)throw a=Oa,ts(n,0),Er(n,c),Kn(n,Qt()),a;if(i===6)Er(n,c);else{if(h=n.current.alternate,(c&30)===0&&!av(h)&&(i=ll(n,c),i===2&&(g=en(n),g!==0&&(c=g,i=Eu(n,g))),i===1))throw a=Oa,ts(n,0),Er(n,c),Kn(n,Qt()),a;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ns(n,qn,Qi);break;case 3:if(Er(n,c),(c&130023424)===c&&(i=Mu+500-Qt(),10<i)){if(St(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){Hn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Pc(ns.bind(null,n,qn,Qi),i);break}ns(n,qn,Qi);break;case 4:if(Er(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var T=31-oe(c);g=1<<T,T=i[T],T>h&&(h=T),c&=~g}if(c=h,c=Qt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*sv(c/1960))-c,10<c){n.timeoutHandle=Pc(ns.bind(null,n,qn,Qi),c);break}ns(n,qn,Qi);break;case 5:ns(n,qn,Qi);break;default:throw Error(t(329))}}}return Kn(n,Qt()),n.callbackNode===a?Ip.bind(null,n):null}function Eu(n,i){var a=Ba;return n.current.memoizedState.isDehydrated&&(ts(n,i).flags|=256),n=ll(n,i),n!==2&&(i=qn,qn=a,i!==null&&Tu(i)),n}function Tu(n){qn===null?qn=n:qn.push.apply(qn,n)}function av(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],g=h.getSnapshot;h=h.value;try{if(!gi(g(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Er(n,i){for(i&=~Su,i&=~nl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-oe(i),c=1<<a;n[a]=-1,i&=~c}}function Up(n){if((Ot&6)!==0)throw Error(t(327));zs();var i=St(n,0);if((i&1)===0)return Kn(n,Qt()),null;var a=ll(n,i);if(n.tag!==0&&a===2){var c=en(n);c!==0&&(i=c,a=Eu(n,c))}if(a===1)throw a=Oa,ts(n,0),Er(n,i),Kn(n,Qt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ns(n,qn,Qi),Kn(n,Qt()),null}function Au(n,i){var a=Ot;Ot|=1;try{return n(i)}finally{Ot=a,Ot===0&&(ks=Qt()+500,Uo&&vr())}}function es(n){wr!==null&&wr.tag===0&&(Ot&6)===0&&zs();var i=Ot;Ot|=1;var a=fi.transition,c=ot;try{if(fi.transition=null,ot=1,n)return n()}finally{ot=c,fi.transition=a,Ot=i,(Ot&6)===0&&vr()}}function Cu(){ni=Fs.current,Jt(Fs)}function ts(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Fx(a)),hn!==null)for(a=hn.return;a!==null;){var c=a;switch(kc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Do();break;case 3:Ds(),Jt(Xn),Jt(Ln),Kc();break;case 5:Yc(c);break;case 4:Ds();break;case 13:Jt(sn);break;case 19:Jt(sn);break;case 10:Vc(c.type._context);break;case 22:case 23:Cu()}a=a.return}if(En=n,hn=n=Tr(n.current,null),Rn=ni=i,_n=0,Oa=null,Su=nl=Qr=0,qn=Ba=null,Kr!==null){for(i=0;i<Kr.length;i++)if(a=Kr[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,g=a.pending;if(g!==null){var T=g.next;g.next=h,c.next=T}a.pending=c}Kr=null}return n}function Fp(n,i){do{var a=hn;try{if(Hc(),jo.current=qo,Xo){for(var c=an.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}Xo=!1}if(Jr=0,bn=vn=an=null,Da=!1,Ia=0,yu.current=null,a===null||a.return===null){_n=1,Oa=i,hn=null;break}e:{var g=n,T=a.return,B=a,Z=i;if(i=Rn,B.flags|=32768,Z!==null&&typeof Z=="object"&&typeof Z.then=="function"){var ge=Z,De=B,ke=De.tag;if((De.mode&1)===0&&(ke===0||ke===11||ke===15)){var Ne=De.alternate;Ne?(De.updateQueue=Ne.updateQueue,De.memoizedState=Ne.memoizedState,De.lanes=Ne.lanes):(De.updateQueue=null,De.memoizedState=null)}var Je=op(T);if(Je!==null){Je.flags&=-257,lp(Je,T,B,g,i),Je.mode&1&&ap(g,ge,i),i=Je,Z=ge;var st=i.updateQueue;if(st===null){var at=new Set;at.add(Z),i.updateQueue=at}else st.add(Z);break e}else{if((i&1)===0){ap(g,ge,i),Ru();break e}Z=Error(t(426))}}else if(tn&&B.mode&1){var fn=op(T);if(fn!==null){(fn.flags&65536)===0&&(fn.flags|=256),lp(fn,T,B,g,i),Bc(Is(Z,B));break e}}g=Z=Is(Z,B),_n!==4&&(_n=2),Ba===null?Ba=[g]:Ba.push(g),g=T;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var ue=rp(g,Z,i);Ph(g,ue);break e;case 1:B=Z;var ne=g.type,he=g.stateNode;if((g.flags&128)===0&&(typeof ne.getDerivedStateFromError=="function"||he!==null&&typeof he.componentDidCatch=="function"&&(Mr===null||!Mr.has(he)))){g.flags|=65536,i&=-i,g.lanes|=i;var Ge=sp(g,B,i);Ph(g,Ge);break e}}g=g.return}while(g!==null)}Op(a)}catch(ct){i=ct,hn===a&&a!==null&&(hn=a=a.return);continue}break}while(!0)}function kp(){var n=tl.current;return tl.current=qo,n===null?qo:n}function Ru(){(_n===0||_n===3||_n===2)&&(_n=4),En===null||(Qr&268435455)===0&&(nl&268435455)===0||Er(En,Rn)}function ll(n,i){var a=Ot;Ot|=2;var c=kp();(En!==n||Rn!==i)&&(Qi=null,ts(n,i));do try{ov();break}catch(h){Fp(n,h)}while(!0);if(Hc(),Ot=a,tl.current=c,hn!==null)throw Error(t(261));return En=null,Rn=0,_n}function ov(){for(;hn!==null;)zp(hn)}function lv(){for(;hn!==null&&!jr();)zp(hn)}function zp(n){var i=Hp(n.alternate,n,ni);n.memoizedProps=n.pendingProps,i===null?Op(n):hn=i,yu.current=null}function Op(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=ev(a,i,ni),a!==null){hn=a;return}}else{if(a=tv(a,i),a!==null){a.flags&=32767,hn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{_n=6,hn=null;return}}if(i=i.sibling,i!==null){hn=i;return}hn=i=n}while(i!==null);_n===0&&(_n=5)}function ns(n,i,a){var c=ot,h=fi.transition;try{fi.transition=null,ot=1,cv(n,i,a,c)}finally{fi.transition=h,ot=c}return null}function cv(n,i,a,c){do zs();while(wr!==null);if((Ot&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(it(n,g),n===En&&(hn=En=null,Rn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||rl||(rl=!0,Vp(gs,function(){return zs(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=fi.transition,fi.transition=null;var T=ot;ot=1;var B=Ot;Ot|=4,yu.current=null,iv(n,a),Rp(a,n),Rx(Rc),_o=!!Cc,Rc=Cc=null,n.current=a,rv(a),lc(),Ot=B,ot=T,fi.transition=g}else n.current=a;if(rl&&(rl=!1,wr=n,sl=h),g=n.pendingLanes,g===0&&(Mr=null),le(a.stateNode),Kn(n,Qt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(il)throw il=!1,n=wu,wu=null,n;return(sl&1)!==0&&n.tag!==0&&zs(),g=n.pendingLanes,(g&1)!==0?n===bu?Ga++:(Ga=0,bu=n):Ga=0,vr(),null}function zs(){if(wr!==null){var n=Pi(sl),i=fi.transition,a=ot;try{if(fi.transition=null,ot=16>n?16:n,wr===null)var c=!1;else{if(n=wr,wr=null,sl=0,(Ot&6)!==0)throw Error(t(331));var h=Ot;for(Ot|=4,et=n.current;et!==null;){var g=et,T=g.child;if((et.flags&16)!==0){var B=g.deletions;if(B!==null){for(var Z=0;Z<B.length;Z++){var ge=B[Z];for(et=ge;et!==null;){var De=et;switch(De.tag){case 0:case 11:case 15:za(8,De,g)}var ke=De.child;if(ke!==null)ke.return=De,et=ke;else for(;et!==null;){De=et;var Ne=De.sibling,Je=De.return;if(bp(De),De===ge){et=null;break}if(Ne!==null){Ne.return=Je,et=Ne;break}et=Je}}}var st=g.alternate;if(st!==null){var at=st.child;if(at!==null){st.child=null;do{var fn=at.sibling;at.sibling=null,at=fn}while(at!==null)}}et=g}}if((g.subtreeFlags&2064)!==0&&T!==null)T.return=g,et=T;else e:for(;et!==null;){if(g=et,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:za(9,g,g.return)}var ue=g.sibling;if(ue!==null){ue.return=g.return,et=ue;break e}et=g.return}}var ne=n.current;for(et=ne;et!==null;){T=et;var he=T.child;if((T.subtreeFlags&2064)!==0&&he!==null)he.return=T,et=he;else e:for(T=ne;et!==null;){if(B=et,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:el(9,B)}}catch(ct){un(B,B.return,ct)}if(B===T){et=null;break e}var Ge=B.sibling;if(Ge!==null){Ge.return=B.return,et=Ge;break e}et=B.return}}if(Ot=h,vr(),fe&&typeof fe.onPostCommitFiberRoot=="function")try{fe.onPostCommitFiberRoot(q,n)}catch{}c=!0}return c}finally{ot=a,fi.transition=i}}return!1}function Bp(n,i,a){i=Is(a,i),i=rp(n,i,1),n=yr(n,i,1),i=Hn(),n!==null&&(cn(n,1,i),Kn(n,i))}function un(n,i,a){if(n.tag===3)Bp(n,n,a);else for(;i!==null;){if(i.tag===3){Bp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Mr===null||!Mr.has(c))){n=Is(a,n),n=sp(i,n,1),i=yr(i,n,1),n=Hn(),i!==null&&(cn(i,1,n),Kn(i,n));break}}i=i.return}}function uv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Hn(),n.pingedLanes|=n.suspendedLanes&a,En===n&&(Rn&a)===a&&(_n===4||_n===3&&(Rn&130023424)===Rn&&500>Qt()-Mu?ts(n,0):Su|=a),Kn(n,i)}function Gp(n,i){i===0&&((n.mode&1)===0?i=1:(i=tt,tt<<=1,(tt&130023424)===0&&(tt=4194304)));var a=Hn();n=Ki(n,i),n!==null&&(cn(n,i,a),Kn(n,a))}function dv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Gp(n,a)}function fv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Gp(n,a)}var Hp;Hp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Xn.current)Yn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Yn=!1,Qx(n,i,a);Yn=(n.flags&131072)!==0}else Yn=!1,tn&&(i.flags&1048576)!==0&&Sh(i,ko,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Jo(n,i),n=i.pendingProps;var h=Ts(i,Ln.current);Ls(i,a),h=Qc(null,i,c,n,h,a);var g=eu();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,$n(c)?(g=!0,Io(i)):g=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Xc(i),h.updater=Ko,i.stateNode=h,h._reactInternals=i,au(i,c,n,a),i=uu(null,i,c,!0,g,a)):(i.tag=0,tn&&g&&Fc(i),Gn(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Jo(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=pv(c),n=vi(c,n),h){case 0:i=cu(null,i,c,n,a);break e;case 1:i=pp(null,i,c,n,a);break e;case 11:i=cp(null,i,c,n,a);break e;case 14:i=up(null,i,c,vi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:vi(c,h),cu(n,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:vi(c,h),pp(n,i,c,h,a);case 3:e:{if(mp(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,h=g.element,Nh(n,i),Vo(i,c,null,a);var T=i.memoizedState;if(c=T.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){h=Is(Error(t(423)),i),i=gp(n,i,c,a,h);break e}else if(c!==h){h=Is(Error(t(424)),i),i=gp(n,i,c,a,h);break e}else for(ti=mr(i.stateNode.containerInfo.firstChild),ei=i,tn=!0,xi=null,a=Ch(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Rs(),c===h){i=Ji(n,i,a);break e}Gn(n,i,c,a)}i=i.child}return i;case 5:return Dh(i),n===null&&Oc(i),c=i.type,h=i.pendingProps,g=n!==null?n.memoizedProps:null,T=h.children,Nc(c,h)?T=null:g!==null&&Nc(c,g)&&(i.flags|=32),hp(n,i),Gn(n,i,T,a),i.child;case 6:return n===null&&Oc(i),null;case 13:return xp(n,i,a);case 4:return $c(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ns(i,null,c,a):Gn(n,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:vi(c,h),cp(n,i,c,h,a);case 7:return Gn(n,i,i.pendingProps,a),i.child;case 8:return Gn(n,i,i.pendingProps.children,a),i.child;case 12:return Gn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,g=i.memoizedProps,T=h.value,Kt(Bo,c._currentValue),c._currentValue=T,g!==null)if(gi(g.value,T)){if(g.children===h.children&&!Xn.current){i=Ji(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var B=g.dependencies;if(B!==null){T=g.child;for(var Z=B.firstContext;Z!==null;){if(Z.context===c){if(g.tag===1){Z=Zi(-1,a&-a),Z.tag=2;var ge=g.updateQueue;if(ge!==null){ge=ge.shared;var De=ge.pending;De===null?Z.next=Z:(Z.next=De.next,De.next=Z),ge.pending=Z}}g.lanes|=a,Z=g.alternate,Z!==null&&(Z.lanes|=a),Wc(g.return,a,i),B.lanes|=a;break}Z=Z.next}}else if(g.tag===10)T=g.type===i.type?null:g.child;else if(g.tag===18){if(T=g.return,T===null)throw Error(t(341));T.lanes|=a,B=T.alternate,B!==null&&(B.lanes|=a),Wc(T,a,i),T=g.sibling}else T=g.child;if(T!==null)T.return=g;else for(T=g;T!==null;){if(T===i){T=null;break}if(g=T.sibling,g!==null){g.return=T.return,T=g;break}T=T.return}g=T}Gn(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,Ls(i,a),h=ui(h),c=c(h),i.flags|=1,Gn(n,i,c,a),i.child;case 14:return c=i.type,h=vi(c,i.pendingProps),h=vi(c.type,h),up(n,i,c,h,a);case 15:return dp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:vi(c,h),Jo(n,i),i.tag=1,$n(c)?(n=!0,Io(i)):n=!1,Ls(i,a),np(i,c,h),au(i,c,h,a),uu(null,i,c,!0,n,a);case 19:return _p(n,i,a);case 22:return fp(n,i,a)}throw Error(t(156,i.tag))};function Vp(n,i){return ua(n,i)}function hv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(n,i,a,c){return new hv(n,i,a,c)}function Nu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function pv(n){if(typeof n=="function")return Nu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===W)return 11;if(n===O)return 14}return 2}function Tr(n,i){var a=n.alternate;return a===null?(a=hi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function cl(n,i,a,c,h,g){var T=2;if(c=n,typeof n=="function")Nu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case w:return is(a.children,h,g,i);case N:T=8,h|=8;break;case te:return n=hi(12,a,i,h|2),n.elementType=te,n.lanes=g,n;case V:return n=hi(13,a,i,h),n.elementType=V,n.lanes=g,n;case G:return n=hi(19,a,i,h),n.elementType=G,n.lanes=g,n;case K:return ul(a,h,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case $:T=10;break e;case H:T=9;break e;case W:T=11;break e;case O:T=14;break e;case re:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=hi(T,a,i,h),i.elementType=n,i.type=c,i.lanes=g,i}function is(n,i,a,c){return n=hi(7,n,c,i),n.lanes=a,n}function ul(n,i,a,c){return n=hi(22,n,c,i),n.elementType=K,n.lanes=a,n.stateNode={isHidden:!1},n}function Pu(n,i,a){return n=hi(6,n,null,i),n.lanes=a,n}function Lu(n,i,a){return i=hi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function mv(n,i,a,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ht(0),this.expirationTimes=Ht(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ht(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Du(n,i,a,c,h,g,T,B,Z){return n=new mv(n,i,a,B,Z),i===1?(i=1,g===!0&&(i|=8)):i=0,g=hi(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xc(g),n}function gv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Wp(n){if(!n)return xr;n=n._reactInternals;e:{if(mn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if($n(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if($n(a))return vh(n,a,i)}return i}function jp(n,i,a,c,h,g,T,B,Z){return n=Du(a,c,!0,n,h,g,T,B,Z),n.context=Wp(null),a=n.current,c=Hn(),h=br(a),g=Zi(c,h),g.callback=i??null,yr(a,g,h),n.current.lanes=h,cn(n,h,c),Kn(n,c),n}function dl(n,i,a,c){var h=i.current,g=Hn(),T=br(h);return a=Wp(a),i.context===null?i.context=a:i.pendingContext=a,i=Zi(g,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=yr(h,i,T),n!==null&&(Si(n,h,T,g),Ho(n,h,T)),T}function fl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Xp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Iu(n,i){Xp(n,i),(n=n.alternate)&&Xp(n,i)}function xv(){return null}var $p=typeof reportError=="function"?reportError:function(n){console.error(n)};function Uu(n){this._internalRoot=n}hl.prototype.render=Uu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));dl(n,i,null,null)},hl.prototype.unmount=Uu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;es(function(){dl(null,n,null,null)}),i[Xi]=null}};function hl(n){this._internalRoot=n}hl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Li();n={blockedOn:null,target:n,priority:i};for(var a=0;a<fr.length&&i!==0&&i<fr[a].priority;a++);fr.splice(a,0,n),a===0&&Df(n)}};function Fu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function pl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Yp(){}function vv(n,i,a,c,h){if(h){if(typeof c=="function"){var g=c;c=function(){var ge=fl(T);g.call(ge)}}var T=jp(i,c,n,0,null,!1,!1,"",Yp);return n._reactRootContainer=T,n[Xi]=T.current,Ea(n.nodeType===8?n.parentNode:n),es(),T}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var B=c;c=function(){var ge=fl(Z);B.call(ge)}}var Z=Du(n,0,!1,null,null,!1,!1,"",Yp);return n._reactRootContainer=Z,n[Xi]=Z.current,Ea(n.nodeType===8?n.parentNode:n),es(function(){dl(i,Z,a,c)}),Z}function ml(n,i,a,c,h){var g=a._reactRootContainer;if(g){var T=g;if(typeof h=="function"){var B=h;h=function(){var Z=fl(T);B.call(Z)}}dl(i,T,n,h)}else T=vv(a,i,n,h,c);return fl(T)}xn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=ht(i.pendingLanes);a!==0&&(gn(i,a|1),Kn(i,Qt()),(Ot&6)===0&&(ks=Qt()+500,vr()))}break;case 13:es(function(){var c=Ki(n,1);if(c!==null){var h=Hn();Si(c,n,1,h)}}),Iu(n,1)}},ur=function(n){if(n.tag===13){var i=Ki(n,134217728);if(i!==null){var a=Hn();Si(i,n,134217728,a)}Iu(n,134217728)}},mi=function(n){if(n.tag===13){var i=br(n),a=Ki(n,i);if(a!==null){var c=Hn();Si(a,n,i,c)}Iu(n,i)}},Li=function(){return ot},Dt=function(n,i){var a=ot;try{return ot=n,i()}finally{ot=a}},se=function(n,i,a){switch(i){case"input":if(wt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var h=Lo(c);if(!h)throw Error(t(90));Ee(c),wt(c,h)}}}break;case"textarea":J(n,a);break;case"select":i=a.value,i!=null&&Wt(n,!!a.multiple,i,!1)}},Te=Au,Le=es;var _v={usingClientEntryPoint:!1,Events:[Ca,bs,Lo,de,Pe,Au]},Ha={findFiberByHostInstance:Xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yv={bundleType:Ha.bundleType,version:Ha.version,rendererPackageName:Ha.rendererPackageName,rendererConfig:Ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ca(n),n===null?null:n.stateNode},findFiberByHostInstance:Ha.findFiberByHostInstance||xv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gl.isDisabled&&gl.supportsFiber)try{q=gl.inject(yv),fe=gl}catch{}}return Zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_v,Zn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fu(i))throw Error(t(200));return gv(n,i,null,a)},Zn.createRoot=function(n,i){if(!Fu(n))throw Error(t(299));var a=!1,c="",h=$p;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=Du(n,1,!1,null,null,a,!1,c,h),n[Xi]=i.current,Ea(n.nodeType===8?n.parentNode:n),new Uu(i)},Zn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ca(i),n=n===null?null:n.stateNode,n},Zn.flushSync=function(n){return es(n)},Zn.hydrate=function(n,i,a){if(!pl(i))throw Error(t(200));return ml(null,n,i,!0,a)},Zn.hydrateRoot=function(n,i,a){if(!Fu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,g="",T=$p;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=jp(i,null,n,1,a??null,h,!1,g,T),n[Xi]=i.current,Ea(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new hl(i)},Zn.render=function(n,i,a){if(!pl(i))throw Error(t(200));return ml(null,n,i,!1,a)},Zn.unmountComponentAtNode=function(n){if(!pl(n))throw Error(t(40));return n._reactRootContainer?(es(function(){ml(null,null,n,!1,function(){n._reactRootContainer=null,n[Xi]=null})}),!0):!1},Zn.unstable_batchedUpdates=Au,Zn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!pl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ml(n,i,a,!1,c)},Zn.version="18.3.1-next-f1338f8080-20240426",Zn}var nm;function Pv(){if(nm)return Ou.exports;nm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ou.exports=Nv(),Ou.exports}var im;function Lv(){if(im)return xl;im=1;var s=Pv();return xl.createRoot=s.createRoot,xl.hydrateRoot=s.hydrateRoot,xl}var Dv=Lv();const Iv=s0(Dv),Qs=[{id:"brown-noise",title:"Brownian Deep Focus",category:"Deep Focus",tagline:"Warm sub-bass rumble for continuous coding & writing",description:"Mathematically integrated brownian spectrum with deep 450Hz low-pass rolloff. Proven to mask background distractions and alleviate cognitive fatigue.",frequency:"0 – 450 Hz Brown Spectrum",accentColor:"#f59e0b"},{id:"celestial-drone",title:"Celestial 432Hz Drone",category:"Mindfulness",tagline:"Harmonically tuned meditative Tibetan chords",description:"Multi-oscillator harmonic chord centered around the natural 432Hz tuning fork with gentle phase chorus and slow breathing resonance.",frequency:"432 Hz Pythagorean Fundamental",accentColor:"#a855f7"},{id:"binaural-gamma",title:"Gamma 40Hz Flow State",category:"Cognitive Flow",tagline:"High-cognition binaural carrier for intense problem-solving",description:"Stereo carrier tones (200Hz L / 240Hz R) inducing 40Hz gamma oscillations in the cerebral cortex, associated with high-level information processing and recall.",frequency:"40 Hz Gamma Difference Wave",accentColor:"#38bdf8"},{id:"binaural-alpha",title:"Alpha 10Hz Quiet Mind",category:"Mindfulness",tagline:"Calm relaxed alertness for reading and reflection",description:"Stereo carrier tones (210Hz L / 220Hz R) stimulating 10Hz alpha rhythms, optimal for sustained reading, journaling, and stress reduction.",frequency:"10 Hz Alpha Difference Wave",accentColor:"#34d399"},{id:"rain-storm",title:"Midnight Rain Sanctuary",category:"Deep Focus",tagline:"Gentle nocturnal rainfall with rolling thunder",description:"Procedurally shaped pink noise with gentle resonant filtering, simulating a peaceful rain shower against cabin windows in deep space.",frequency:"Pink Noise Spectrum & Low Rumble",accentColor:"#818cf8"}];class Uv{constructor(){er(this,"ctx",null);er(this,"masterGain",null);er(this,"analyser",null);er(this,"activeNodes",[]);er(this,"currentId",null);er(this,"_isPlaying",!1);er(this,"_volume",.65);er(this,"_isMuted",!1)}initContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this._isMuted?0:this._volume,this.ctx.currentTime),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=64,this.analyser.smoothingTimeConstant=.85,this.masterGain.connect(this.analyser),this.analyser.connect(this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume()}get isPlaying(){return this._isPlaying}get currentSoundscape(){return this.currentId}get volume(){return this._volume}get isMuted(){return this._isMuted}getAnalyser(){return this.analyser}setVolume(e){if(this._volume=Math.max(0,Math.min(1,e)),this.masterGain&&this.ctx){const t=this._isMuted?0:this._volume;this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime),this.masterGain.gain.linearRampToValueAtTime(t,this.ctx.currentTime+.05)}}toggleMute(){return this._isMuted=!this._isMuted,this.setVolume(this._volume),this._isMuted}stop(){!this.ctx||!this._isPlaying||(this.masterGain&&(this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime),this.masterGain.gain.linearRampToValueAtTime(.001,this.ctx.currentTime+.12)),setTimeout(()=>{this.cleanupNodes(),this._isPlaying=!1,this.currentId=null},130))}cleanupNodes(){for(const e of this.activeNodes)try{"stop"in e&&typeof e.stop=="function"&&e.stop(),e.disconnect()}catch{}this.activeNodes=[]}play(e){if(this.initContext(),!(!this.ctx||!this.masterGain)&&!(this._isPlaying&&this.currentId===e))switch(this.cleanupNodes(),this.currentId=e,this._isPlaying=!0,this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime),this.masterGain.gain.setValueAtTime(.001,this.ctx.currentTime),this.masterGain.gain.linearRampToValueAtTime(this._isMuted?0:this._volume,this.ctx.currentTime+.4),e){case"brown-noise":this.buildBrownNoise();break;case"celestial-drone":this.buildCelestialDrone();break;case"binaural-gamma":this.buildBinauralBeat(200,40);break;case"binaural-alpha":this.buildBinauralBeat(210,10);break;case"rain-storm":this.buildRainStorm();break}}buildBrownNoise(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.sampleRate*5,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),r=t.getChannelData(0);let o=0;for(let u=0;u<e;u++){const f=Math.random()*2-1;o=(o+.02*f)/1.02,r[u]=o*3.2}const l=2048;for(let u=0;u<l;u++){const f=u/l;r[u]=r[u]*f+r[e-l+u]*(1-f)}const d=this.ctx.createBufferSource();d.buffer=t,d.loop=!0;const p=this.ctx.createBiquadFilter();p.type="lowpass",p.frequency.setValueAtTime(450,this.ctx.currentTime),p.Q.setValueAtTime(.7,this.ctx.currentTime),d.connect(p),p.connect(this.masterGain),d.start(),this.activeNodes.push(d,p)}buildCelestialDrone(){if(!this.ctx||!this.masterGain)return;const e=216,t=[e,e*1.5,e*2,e*2.5],r=[-4,3,-2,5];t.forEach((o,l)=>{if(!this.ctx||!this.masterGain)return;const d=this.ctx.createOscillator();d.type=l%2===0?"sine":"triangle",d.frequency.setValueAtTime(o,this.ctx.currentTime),d.detune.setValueAtTime(r[l],this.ctx.currentTime);const p=this.ctx.createGain();p.gain.setValueAtTime(.18/(l+1),this.ctx.currentTime);const u=this.ctx.createOscillator();u.frequency.setValueAtTime(.08+l*.03,this.ctx.currentTime);const f=this.ctx.createGain();f.gain.setValueAtTime(.04,this.ctx.currentTime),u.connect(f),f.connect(p.gain),d.connect(p),p.connect(this.masterGain),d.start(),u.start(),this.activeNodes.push(d,u,p,f)})}buildBinauralBeat(e,t){if(!this.ctx||!this.masterGain)return;const r=this.ctx.createOscillator();r.type="sine",r.frequency.setValueAtTime(e,this.ctx.currentTime);const o=this.ctx.createGain();o.gain.setValueAtTime(.22,this.ctx.currentTime);const l=this.ctx.createOscillator();l.type="sine",l.frequency.setValueAtTime(e+t,this.ctx.currentTime);const d=this.ctx.createGain();d.gain.setValueAtTime(.22,this.ctx.currentTime);const p=this.ctx.createChannelMerger(2);r.connect(o),o.connect(p,0,0),l.connect(d),d.connect(p,0,1);const u=this.ctx.createOscillator();u.type="triangle",u.frequency.setValueAtTime(e/2,this.ctx.currentTime);const f=this.ctx.createGain();f.gain.setValueAtTime(.08,this.ctx.currentTime),u.connect(f),f.connect(this.masterGain),p.connect(this.masterGain),r.start(),l.start(),u.start(),this.activeNodes.push(r,l,u,o,d,f,p)}buildRainStorm(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.sampleRate*4,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),r=t.getChannelData(0);let o=0,l=0,d=0,p=0,u=0,f=0,x=0;for(let M=0;M<e;M++){const b=Math.random()*2-1;o=.99886*o+b*.0555179,l=.99332*l+b*.0750759,d=.969*d+b*.153852,p=.8665*p+b*.3104856,u=.55*u+b*.5329522,f=-.7616*f-b*.016898,r[M]=(o+l+d+p+u+f+x+b*.5362)*.12,x=b*.115926}const v=this.ctx.createBufferSource();v.buffer=t,v.loop=!0;const _=this.ctx.createBiquadFilter();_.type="lowpass",_.frequency.setValueAtTime(1200,this.ctx.currentTime),v.connect(_),_.connect(this.masterGain),v.start(),this.activeNodes.push(v,_)}}const cs=new Uv;class Fv{startKeepAlive(){}stopKeepAlive(){}updateMetadata(e){if(!(typeof window>"u"||!("mediaSession"in navigator)))try{const t=e.artworkUrl?[{src:e.artworkUrl,sizes:"96x96",type:"image/jpeg"},{src:e.artworkUrl,sizes:"128x128",type:"image/jpeg"},{src:e.artworkUrl,sizes:"192x192",type:"image/jpeg"},{src:e.artworkUrl,sizes:"256x256",type:"image/jpeg"},{src:e.artworkUrl,sizes:"512x512",type:"image/jpeg"}]:[];navigator.mediaSession.metadata=new MediaMetadata({title:e.title||"FOR ME Sanctuary",artist:e.artist||"Private Life Ledger",album:e.album||"Sanctuary Audio",artwork:t}),navigator.mediaSession.playbackState="playing",navigator.mediaSession.setActionHandler("play",()=>{e.onPlay(),navigator.mediaSession.playbackState="playing"}),navigator.mediaSession.setActionHandler("pause",()=>{e.onPause(),navigator.mediaSession.playbackState="paused"}),e.onNext?navigator.mediaSession.setActionHandler("nexttrack",e.onNext):navigator.mediaSession.setActionHandler("nexttrack",null),e.onPrev?navigator.mediaSession.setActionHandler("previoustrack",e.onPrev):navigator.mediaSession.setActionHandler("previoustrack",null)}catch(t){console.warn("[MediaSession] Metadata update error:",t)}}setPlaybackState(e){if(!(typeof window>"u"||!("mediaSession"in navigator)))try{navigator.mediaSession.playbackState=e}catch{}}}const Ei=new Fv;function kv(s){if(!s||typeof s!="string")return null;const e=s.trim();let t,r;const o=e.match(/[?&]list=([a-zA-Z0-9_-]+)/);o&&o[1]&&(r=o[1]);const l=e.match(/[?&]v=([a-zA-Z0-9_-]{11})/);if(l&&l[1]&&(t=l[1]),!t){const p=e.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);p&&p[1]&&(t=p[1])}if(!t){const p=e.match(/youtube\.com\/(?:live|embed|v|shorts)\/([a-zA-Z0-9_-]{11})/);p&&p[1]&&(t=p[1])}if(!t&&!r&&/^[a-zA-Z0-9_-]{11}$/.test(e)&&(t=e),!t&&!r&&/^(?:PL|RD|UU|FL|OLAK5uy_)[a-zA-Z0-9_-]+$/.test(e)&&(r=e),!t&&!r)return null;let d="video";return r&&t?d="video_in_playlist":r&&(d="playlist"),{type:d,videoId:t,playlistId:r,cleanUrl:e}}function zv(s){return s?`https://img.youtube.com/vi/${s}/hqdefault.jpg`:"https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=600&auto=format&fit=crop"}const Kl=[{id:"lofi-girl-main",title:"Lofi Girl — Beats to Relax / Study to",type:"video",videoId:"jfKfPfyJRdk",url:"https://www.youtube.com/watch?v=jfKfPfyJRdk",channel:"Lofi Girl",thumbnailUrl:"https://img.youtube.com/vi/jfKfPfyJRdk/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"synthwave-chilledcow",title:"Synthwave Radio — Chill Beats to Code & Chill",type:"video",videoId:"4xDzrJKXOOY",url:"https://www.youtube.com/watch?v=4xDzrJKXOOY",channel:"Lofi Girl / Synthwave Boy",thumbnailUrl:"https://img.youtube.com/vi/4xDzrJKXOOY/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"deep-focus-ambient",title:"Deep Focus Ambient — Flow State Alpha Waves",type:"video",videoId:"lTRiuFIWV54",url:"https://www.youtube.com/watch?v=lTRiuFIWV54",channel:"Greenred Productions",thumbnailUrl:"https://img.youtube.com/vi/lTRiuFIWV54/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"peaceful-piano-solitude",title:"Peaceful Piano & Soft Rain — Gentle Solitude",type:"video",videoId:"1WUEk0R79_Q",url:"https://www.youtube.com/watch?v=1WUEk0R79_Q",channel:"Quiet Quest",thumbnailUrl:"https://img.youtube.com/vi/1WUEk0R79_Q/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"classical-focus-mozart",title:"Classical Focus — Mozart, Beethoven, Bach",type:"video",videoId:"WPni755-Krg",url:"https://www.youtube.com/watch?v=WPni755-Krg",channel:"HALIDONMUSIC",thumbnailUrl:"https://img.youtube.com/vi/WPni755-Krg/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"cozy-coffee-shop-lofi",title:"Cozy Coffee Shop Lofi — Rainy Night Ambience",type:"video",videoId:"-5KAN9_CzSA",url:"https://www.youtube.com/watch?v=-5KAN9_CzSA",channel:"Calmed by Nature",thumbnailUrl:"https://img.youtube.com/vi/-5KAN9_CzSA/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()}],a0=we.createContext(void 0),Os={palette:"cosmic-royal",speed:"balanced",amplitude:"majestic",waveGeometry:"dunes",waveLayerDensity:"deep",celestialBody:"crescent-moon",showNebulaDust:!0,showConstellations:!0,showComet:!0,shootingStarMode:"occasional",showStars:!0,showCrossStars:!1,showOrbitalTrack:!1,showMeridian:!1,clockFontStyle:"tabular",clockSize:"standard",clockFormat:"12h",showSeconds:!0,showDate:!0,showGreeting:!0,clockHalo:"pulsar"},Wa={name:"Azan",motto:"Remember, you are here for you.",defaultFocusTopic:"Engineering",defaultFocusMode:"Deep Work"},vl=[{id:"r1",title:"Morning Protocol",timeRange:"06:00 – 09:00",description:"Hydration, natural sunlight, 30-min movement, deep work session.",iconType:"morning"},{id:"r2",title:"Core Deep Work",timeRange:"09:00 – 17:00",description:"High-leverage engineering problem solving, core building goals, focused sprints.",iconType:"afternoon"},{id:"r3",title:"Evening Wind-Down",timeRange:"17:00 – 22:30",description:"Reflection, physical cooldown, reading, digital sunset and deep recovery.",iconType:"evening"}],Ov=({children:s})=>{const[e,t]=we.useState(()=>{try{const ce=localStorage.getItem("for_me_profile");if(ce){const Be=JSON.parse(ce);return Be.name==="Viren"?{...Wa,name:"Azan"}:{...Wa,...Be}}return Wa}catch{return Wa}}),r=ce=>{t(Be=>{const Ae={...Be,...ce};return localStorage.setItem("for_me_profile",JSON.stringify(Ae)),Ae})};we.useEffect(()=>{localStorage.setItem("for_me_profile",JSON.stringify(e))},[e]);const[o,l]=we.useState(()=>{try{return localStorage.getItem("for_me_app_theme")==="light"?"light":"dark"}catch{return"dark"}}),d=()=>{l(ce=>ce==="light"?"dark":"light")};we.useEffect(()=>{localStorage.setItem("for_me_app_theme",o),o==="light"?(document.documentElement.classList.add("theme-light"),document.documentElement.classList.remove("theme-dark")):(document.documentElement.classList.add("theme-dark"),document.documentElement.classList.remove("theme-light"))},[o]);const[p,u]=we.useState(()=>{try{const ce=localStorage.getItem("for_me_is_hud_hidden");return ce?JSON.parse(ce):!1}catch{return!1}}),f=()=>u(ce=>!ce);we.useEffect(()=>{localStorage.setItem("for_me_is_hud_hidden",JSON.stringify(p))},[p]);const[x,v]=we.useState(()=>{try{return localStorage.getItem("for_me_wallpaper_theme")||"cosmic-cliffs"}catch{return"cosmic-cliffs"}});we.useEffect(()=>{localStorage.setItem("for_me_wallpaper_theme",x)},[x]);const[_,M]=we.useState(()=>{try{const ce=localStorage.getItem("for_me_wallpaper_settings_v3")||localStorage.getItem("for_me_wallpaper_settings_v2");return ce?{...Os,...JSON.parse(ce)}:Os}catch{return Os}}),b=ce=>{M(Be=>{const Ae={...Be,...ce};return localStorage.setItem("for_me_wallpaper_settings_v3",JSON.stringify(Ae)),Ae})},C=()=>{M(Os),localStorage.setItem("for_me_wallpaper_settings_v3",JSON.stringify(Os))},[y,S]=we.useState(()=>{try{const ce=localStorage.getItem("for_me_tasks");return ce?JSON.parse(ce):[{id:"1",text:"Core engineering deep focus sprint",completed:!1},{id:"2",text:"System architecture review & refinement",completed:!1},{id:"3",text:"Physical movement & hydration (8 glasses)",completed:!1}]}catch{return[{id:"1",text:"Core engineering deep focus sprint",completed:!1}]}});we.useEffect(()=>{localStorage.setItem("for_me_tasks",JSON.stringify(y))},[y]);const R=ce=>{S(Be=>Be.map(Ae=>Ae.id===ce?{...Ae,completed:!Ae.completed,completedAt:Ae.completed?void 0:new Date().toISOString()}:Ae))},k=ce=>{if(!ce.trim())return;const Be={id:`task_${Date.now()}`,text:ce.trim(),completed:!1};S(Ae=>[Be,...Ae])},P=ce=>{S(Be=>Be.filter(Ae=>Ae.id!==ce))},[U,D]=we.useState(()=>{try{const ce=localStorage.getItem("for_me_habits");return ce?JSON.parse(ce):[{id:"h1",name:"Deep Focus & Engineering Block",completed:!1,streak:3},{id:"h2",name:"Hydration Target (8 Glasses)",completed:!1,streak:5},{id:"h3",name:"Mindful Walk & Movement",completed:!1,streak:2}]}catch{return[{id:"h1",name:"Deep Focus & Engineering Block",completed:!1,streak:1}]}});we.useEffect(()=>{localStorage.setItem("for_me_habits",JSON.stringify(U))},[U]);const w=ce=>{D(Be=>Be.map(Ae=>{if(Ae.id===ce){const mt=!Ae.completed;return{...Ae,completed:mt,streak:mt?Ae.streak+1:Math.max(0,Ae.streak-1)}}return Ae}))},N=ce=>{if(!ce.trim())return;const Be={id:`habit_${Date.now()}`,name:ce.trim(),completed:!1,streak:0};D(Ae=>[...Ae,Be])},te=ce=>{D(Be=>Be.filter(Ae=>Ae.id!==ce))},[$,H]=we.useState(()=>{try{const ce=localStorage.getItem("for_me_routines");return ce?JSON.parse(ce):vl}catch{return vl}});we.useEffect(()=>{localStorage.setItem("for_me_routines",JSON.stringify($))},[$]);const W=ce=>{const Be={id:`routine_${Date.now()}`,...ce};H(Ae=>[...Ae,Be])},V=(ce,Be)=>{H(Ae=>Ae.map(mt=>mt.id===ce?{...mt,...Be}:mt))},G=ce=>{H(Be=>Be.filter(Ae=>Ae.id!==ce))},O=()=>{H(vl)},[re,K]=we.useState(0),[X,j]=we.useState(!1),[Y,L]=we.useState(e.defaultFocusTopic||"Engineering"),[ee,be]=we.useState(()=>{try{const ce=localStorage.getItem("for_me_study_sessions");return ce?JSON.parse(ce):[]}catch{return[]}});we.useEffect(()=>{let ce=null;return X?ce=setInterval(()=>{K(Be=>Be+1)},1e3):!X&&re!==0&&clearInterval(ce),()=>clearInterval(ce)},[X,re]);const F=()=>j(ce=>!ce),ve=()=>{if(re>30){const ce={id:`ses_${Date.now()}`,subject:Y,durationSeconds:re,timestamp:new Date().toISOString()};be(Be=>{const Ae=[ce,...Be];return localStorage.setItem("for_me_study_sessions",JSON.stringify(Ae)),Ae})}j(!1),K(0)},[Me,Re]=we.useState(()=>{try{const ce=localStorage.getItem("for_me_hydration");return ce?JSON.parse(ce):62.5}catch{return 62.5}});we.useEffect(()=>{localStorage.setItem("for_me_hydration",JSON.stringify(Me))},[Me]);const[ye,Ie]=we.useState(()=>{try{const ce=localStorage.getItem("for_me_sleep_hours");return ce?JSON.parse(ce):8}catch{return 8}}),lt=ce=>{Ie(ce),localStorage.setItem("for_me_sleep_hours",JSON.stringify(ce))},[He,Ee]=we.useState(()=>{try{const ce=localStorage.getItem("for_me_daily_rating");return ce?JSON.parse(ce):8}catch{return 8}});we.useEffect(()=>{localStorage.setItem("for_me_daily_rating",JSON.stringify(He))},[He]);const ze=()=>{const ce=new Date,Be=ce.getFullYear(),Ae=String(ce.getMonth()+1).padStart(2,"0"),mt=String(ce.getDate()).padStart(2,"0");return`${Be}-${Ae}-${mt}`},[We,_t]=we.useState(()=>{try{return localStorage.getItem("for_me_last_active_date")||ze()}catch{return ze()}}),yt=ce=>{if(S(Be=>{const Ae=Be.map(mt=>({...mt,completed:!1,completedAt:void 0}));return localStorage.setItem("for_me_tasks",JSON.stringify(Ae)),Ae}),D(Be=>{const Ae=Be.map(mt=>({...mt,completed:!1,streak:mt.completed?mt.streak:0}));return localStorage.setItem("for_me_habits",JSON.stringify(Ae)),Ae}),Re(0),localStorage.setItem("for_me_hydration",JSON.stringify(0)),re>30){const Be={id:`ses_${Date.now()}`,subject:Y,durationSeconds:re,timestamp:new Date().toISOString()};be(Ae=>{const mt=[Be,...Ae];return localStorage.setItem("for_me_study_sessions",JSON.stringify(mt)),mt})}j(!1),K(0),_t(ce),localStorage.setItem("for_me_last_active_date",ce)};we.useEffect(()=>{const ce=()=>{const Ae=ze(),mt=localStorage.getItem("for_me_last_active_date");mt?mt!==Ae&&yt(Ae):(localStorage.setItem("for_me_last_active_date",Ae),_t(Ae))};ce();const Be=setInterval(ce,1e4);return window.addEventListener("focus",ce),()=>{clearInterval(Be),window.removeEventListener("focus",ce)}},[re,Y]);const wt=()=>{const ce=ze();yt(ce)},It=()=>{["for_me_profile","for_me_tasks","for_me_habits","for_me_routines","for_me_hydration","for_me_sleep_hours","for_me_daily_rating","for_me_study_sessions","for_me_wallpaper_settings_v3","for_me_wallpaper_theme","for_me_app_theme","for_me_is_hud_hidden","for_me_last_active_date","for_me_active_yt","for_me_saved_yt_library"].forEach(Be=>localStorage.removeItem(Be)),t(Wa),S([{id:"1",text:"Core engineering deep focus sprint",completed:!1},{id:"2",text:"System architecture review & refinement",completed:!1},{id:"3",text:"Physical movement & hydration (8 glasses)",completed:!1}]),D([{id:"h1",name:"Deep Focus & Engineering Block",completed:!1,streak:0},{id:"h2",name:"Hydration Target (8 Glasses)",completed:!1,streak:0},{id:"h3",name:"Mindful Walk & Movement",completed:!1,streak:0}]),H(vl),Re(0),Ie(8),Ee(8),K(0),j(!1),be([]),M(Os),_t(ze())},[nn,Pt]=we.useState("youtube"),[Wt,zt]=we.useState(!1),[rn,J]=we.useState("brown-noise"),[Yt,Lt]=we.useState(.65),[bt,Ue]=we.useState(!1),[Et,qe]=we.useState(!1),[rt,I]=we.useState(!1),[E,ae]=we.useState(()=>{try{const ce=localStorage.getItem("for_me_active_yt");return ce?JSON.parse(ce):Kl[0]}catch{return Kl[0]}}),[Ce,_e]=we.useState(70),[Fe,xe]=we.useState(!1),[ie,se]=we.useState(!1),[Se,z]=we.useState(()=>{try{const ce=localStorage.getItem("for_me_saved_yt_library");return ce?JSON.parse(ce):[]}catch{return[]}});we.useEffect(()=>{E&&localStorage.setItem("for_me_active_yt",JSON.stringify(E))},[E]),we.useEffect(()=>{localStorage.setItem("for_me_saved_yt_library",JSON.stringify(Se))},[Se]);const me=ce=>{if(Et){qe(!1);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("pauseVideo")}catch{}}Pt("ambient");const Be=ce||rn;J(Be),cs.play(Be),zt(!0);const Ae=Qs.find(mt=>mt.id===Be);Ei.startKeepAlive(),Ei.updateMetadata({title:(Ae==null?void 0:Ae.title)||"Procedural Soundscape",artist:"FOR ME Sanctuary (Offline)",album:"Sound Sanctuary",onPlay:()=>me(Be),onPause:de})},de=()=>{cs.stop(),zt(!1),Ei.stopKeepAlive(),Ei.setPlaybackState("paused")},Pe=ce=>{Lt(ce),cs.setVolume(ce)},Te=()=>{const ce=cs.toggleMute();Ue(ce)},Le=ce=>{cs.stop(),zt(!1),ae(ce),Pt("youtube"),qe(!0),xe(!1);try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}},Ze=()=>{if(Et){qe(!1);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("pauseVideo")}catch{}}else{cs.stop(),zt(!1),Pt("youtube"),qe(!0),xe(!1);try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute(),typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("playVideo")}catch{}}},ut=()=>{qe(!1);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("stopVideo")}catch{}},Q=()=>{try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("nextVideo"),qe(!0)}catch{}},je=()=>{try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("previousVideo"),qe(!0)}catch{}},$e=ce=>{_e(ce);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("setVolume",[ce])}catch{}},Oe=()=>{xe(ce=>{const Be=!ce;try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand(Be?"mute":"unMute")}catch{}return Be})},xt=(ce,Be)=>{var mn;const Ae=kv(ce);if(!Ae)return{success:!1,error:"Could not recognize a valid YouTube video or playlist link. Please check the URL format and try again."};const mt=(Be==null?void 0:Be.trim())||(Ae.type==="playlist"?`Custom Playlist (${(mn=Ae.playlistId)==null?void 0:mn.slice(0,8)}...)`:`YouTube Audio (${Ae.videoId||"Stream"})`),qt={id:`yt-${Date.now()}-${Math.random().toString(36).substr(2,5)}`,title:mt,type:Ae.type,videoId:Ae.videoId,playlistId:Ae.playlistId,url:Ae.cleanUrl,thumbnailUrl:zv(Ae.videoId),channel:Ae.type==="playlist"?"Custom YouTube Playlist":"Custom YouTube Stream",createdAt:new Date().toISOString()};return z(Mn=>[qt,...Mn]),Le(qt),{success:!0,item:qt}},Nt=ce=>{z(Be=>Be.filter(Ae=>Ae.id!==ce))};return m.jsx(a0.Provider,{value:{profile:e,setProfile:t,updateProfile:r,appTheme:o,setAppTheme:l,toggleAppTheme:d,isHUDHidden:p,setIsHUDHidden:u,toggleHUDHidden:f,tasks:y,toggleTask:R,addTask:k,deleteTask:P,wallpaperTheme:x,setWallpaperTheme:v,wallpaperSettings:_,updateWallpaperSettings:b,resetWallpaperSettings:C,habits:U,toggleHabit:w,addHabit:N,deleteHabit:te,routines:$,addRoutineBlock:W,updateRoutineBlock:V,deleteRoutineBlock:G,resetRoutines:O,studySeconds:re,isStudyActive:X,studySubject:Y,setStudySubject:L,toggleStudyTimer:F,resetStudyTimer:ve,studySessions:ee,hydration:Me,setHydration:Re,sleepHours:ye,setSleep:lt,dailyRating:He,setDailyRating:Ee,lastActiveDate:We,resetDayProgress:wt,factoryReset:It,audioSource:nn,setAudioSource:Pt,isAudioPlaying:Wt,activeSoundscapeId:rn,audioVolume:Yt,isAudioMuted:bt,playSoundscape:me,stopSoundscape:de,setAudioVolume:Pe,toggleAudioMute:Te,isYouTubePlaying:Et,setYouTubeIsPlaying:qe,isYouTubePlayerReady:rt,setYouTubePlayerReady:I,activeYouTubeItem:E,youtubeVolume:Ce,isYouTubeMuted:Fe,savedYouTubeItems:Se,showYouTubePreview:ie,setShowYouTubePreview:se,playYouTubeItem:Le,toggleYouTubePlay:Ze,stopYouTube:ut,nextYouTubeTrack:Q,prevYouTubeTrack:je,setYouTubeVolume:$e,toggleYouTubeMute:Oe,addYouTubeToLibrary:xt,removeYouTubeFromLibrary:Nt},children:s})},Vr=()=>{const s=we.useContext(a0);if(!s)throw new Error("useData must be used within a DataProvider");return s},Bv=()=>{const s=we.useRef(null),{isHUDHidden:e,wallpaperSettings:t,appTheme:r}=Vr(),o=we.useRef(e),l=we.useRef(t),d=we.useRef(r);return we.useEffect(()=>{o.current=e},[e]),we.useEffect(()=>{l.current=t},[t]),we.useEffect(()=>{d.current=r},[r]),we.useEffect(()=>{const p=s.current;if(!p)return;const u=p.getContext("2d");if(!u)return;let f,x=0,v=0;const _=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let M=[];const b=()=>{M=[];const V=x<768?85:160;for(let G=0;G<V;G++){const O=Math.random()>.85?2:Math.random()>.45?1:0,re=Math.random()*.65+(O===2?.85:.35);M.push({x:Math.random()*x,y:Math.random()*v,z:O,radius:re,alpha:Math.random()*.55+.25,alphaSpeed:Math.random()*.015+.005,alphaPhase:Math.random()*Math.PI*2,vx:(Math.random()-.5)*.06,vy:(Math.random()-.5)*.06})}},C=()=>{if(!p)return;const V=Math.min(window.devicePixelRatio||1,2);x=window.innerWidth,v=window.innerHeight,p.width=x*V,p.height=v*V,p.style.width=`${x}px`,p.style.height=`${v}px`,u.scale(V,V),b()};C(),window.addEventListener("resize",C,{passive:!0});let y=x/2,S=v/2,R=x/2,k=v/2;const P=V=>{y=V.clientX,S=V.clientY};window.addEventListener("mousemove",P,{passive:!0});const U=(V,G,O,re)=>{u.save(),u.translate(V,G);const K=d.current==="light",X=Math.max(.15,Math.min(.95,re));u.globalAlpha=X;const j=u.createRadialGradient(0,0,0,0,0,O*.9);K?(j.addColorStop(0,"rgba(245, 158, 11, 0.75)"),j.addColorStop(.3,"rgba(217, 119, 6, 0.28)"),j.addColorStop(.7,"rgba(180, 83, 9, 0.06)"),j.addColorStop(1,"rgba(255, 255, 255, 0)")):(j.addColorStop(0,"rgba(255, 255, 255, 0.85)"),j.addColorStop(.3,"rgba(216, 180, 254, 0.35)"),j.addColorStop(.7,"rgba(147, 51, 234, 0.08)"),j.addColorStop(1,"rgba(0, 0, 0, 0)")),u.fillStyle=j,u.beginPath(),u.arc(0,0,O*.9,0,Math.PI*2),u.fill();const Y=u.createLinearGradient(-O,0,O,0);K?(Y.addColorStop(0,"rgba(245, 158, 11, 0)"),Y.addColorStop(.35,"rgba(217, 119, 6, 0.45)"),Y.addColorStop(.5,"#b45309"),Y.addColorStop(.65,"rgba(217, 119, 6, 0.45)"),Y.addColorStop(1,"rgba(245, 158, 11, 0)")):(Y.addColorStop(0,"rgba(255, 255, 255, 0)"),Y.addColorStop(.35,"rgba(233, 213, 255, 0.55)"),Y.addColorStop(.5,"#ffffff"),Y.addColorStop(.65,"rgba(233, 213, 255, 0.55)"),Y.addColorStop(1,"rgba(255, 255, 255, 0)")),u.strokeStyle=Y,u.lineWidth=.75,u.beginPath(),u.moveTo(-O,0),u.lineTo(O,0),u.stroke();const L=u.createLinearGradient(0,-O,0,O);K?(L.addColorStop(0,"rgba(245, 158, 11, 0)"),L.addColorStop(.35,"rgba(217, 119, 6, 0.45)"),L.addColorStop(.5,"#b45309"),L.addColorStop(.65,"rgba(217, 119, 6, 0.45)"),L.addColorStop(1,"rgba(245, 158, 11, 0)")):(L.addColorStop(0,"rgba(255, 255, 255, 0)"),L.addColorStop(.35,"rgba(233, 213, 255, 0.55)"),L.addColorStop(.5,"#ffffff"),L.addColorStop(.65,"rgba(233, 213, 255, 0.55)"),L.addColorStop(1,"rgba(255, 255, 255, 0)")),u.strokeStyle=L,u.lineWidth=.75,u.beginPath(),u.moveTo(0,-O),u.lineTo(0,O),u.stroke();const ee=O*.38;u.strokeStyle=K?"rgba(180, 83, 9, 0.35)":"rgba(255, 255, 255, 0.4)",u.lineWidth=.5,u.beginPath(),u.moveTo(-ee,-ee),u.lineTo(ee,ee),u.moveTo(-ee,ee),u.lineTo(ee,-ee),u.stroke(),u.fillStyle=K?"#d97706":"#ffffff",u.beginPath(),u.arc(0,0,1.2,0,Math.PI*2),u.fill(),u.restore()},D=[{x:-100,y:-100,length:100,speed:18,angle:Math.PI/4+.05,alpha:0,active:!1},{x:-100,y:-100,length:80,speed:16,angle:Math.PI/4-.08,alpha:0,active:!1},{x:-100,y:-100,length:110,speed:20,angle:Math.PI/4+.12,alpha:0,active:!1}];let w=120;const N=V=>{if(V==="off")return;w--;const G=V==="meteor-shower"?40:180;if(w<=0&&!_){w=Math.random()*(V==="meteor-shower"?60:200)+G;const O=D.find(re=>!re.active);O&&(O.active=!0,O.x=Math.random()*(x*.7),O.y=Math.random()*(v*.3),O.alpha=.95,O.length=Math.random()*50+70)}for(const O of D)if(O.active)if(O.x+=Math.cos(O.angle)*O.speed,O.y+=Math.sin(O.angle)*O.speed,O.alpha-=V==="meteor-shower"?.022:.016,O.alpha<=0||O.x>x+100||O.y>v+100)O.active=!1;else{u.save();const re=O.x-Math.cos(O.angle)*O.length,K=O.y-Math.sin(O.angle)*O.length,X=u.createLinearGradient(re,K,O.x,O.y);X.addColorStop(0,"rgba(255, 255, 255, 0)"),X.addColorStop(.7,"rgba(216, 180, 254, "+O.alpha*.6+")"),X.addColorStop(1,"#ffffff"),u.strokeStyle=X,u.lineWidth=1.3,u.beginPath(),u.moveTo(re,K),u.lineTo(O.x,O.y),u.stroke(),u.fillStyle="#ffffff",u.beginPath(),u.arc(O.x,O.y,1.8,0,Math.PI*2),u.fill(),u.restore()}};let te=0,$=!0;const H=()=>{$=!document.hidden};document.addEventListener("visibilitychange",H);const W=()=>{if(!$){f=requestAnimationFrame(W);return}const V=l.current,G=o.current;let O=1;V.speed==="frozen"?O=0:V.speed==="calm"?O=.45:V.speed==="dynamic"?O=1.45:O=.85,G&&O>0&&(O*=1.25),te+=_?.002:.014*O,u.clearRect(0,0,x,v),R+=(y-R)*.04,k+=(S-k)*.04;const re=(R-x/2)/(x/2),K=(k-v/2)/(v/2);let X=1;V.amplitude==="subtle"?X=.55:V.amplitude==="dramatic"?X=1.6:X=1,G&&(X*=1.2);const j=V.palette,Y=d.current==="light";let L="#030208",ee="#0b061c",be="#170a32",F="rgba(168, 85, 247, 0.22)",ve="rgba(99, 102, 241, 0.16)",Me="rgba(168, 85, 247, 0.30)",Re="rgba(192, 132, 252, 0.40)",ye=["#05030e","#090518","#0e0824"],Ie="rgba(168, 85, 247, 0.25)",lt=["#0a051d","#110930","#190c42"],He="rgba(168, 85, 247, 0.35)",Ee=["#11082e","#1c0c4b","#261063"],ze="rgba(192, 132, 252, 0.45)",We=["#180b3d","#260f64","#341584"],_t="rgba(216, 180, 254, 0.55)",yt=["#0c0620","#140833","#1e0c4a","#281061"],wt="rgba(233, 213, 255, 0.65)";Y?j==="celestial-cyan"?(L="#eef8ff",ee="#d7effe",be="#b5e3fd",F="rgba(14, 165, 233, 0.16)",ve="rgba(6, 182, 212, 0.12)",Me="rgba(2, 132, 199, 0.12)",Re="rgba(3, 105, 161, 0.20)",ye=["#93c5fd","#bfdbfe","#dbeafe"],Ie="rgba(29, 78, 216, 0.35)",lt=["#60a5fa","#93c5fd","#bfdbfe"],He="rgba(2, 132, 199, 0.42)",Ee=["#38bdf8","#7dd3fc","#bae6fd"],ze="rgba(14, 165, 233, 0.50)",We=["#bae6fd","#d7f0fd","#f0f9ff"],_t="rgba(56, 189, 248, 0.58)",yt=["#f0f9ff","#f8fcff","#ffffff","#ffffff"],wt="rgba(2, 132, 199, 0.68)"):j==="supernova-sunset"?(L="#fff1f2",ee="#fecdd3",be="#fda4af",F="rgba(244, 63, 94, 0.16)",ve="rgba(249, 115, 22, 0.12)",Me="rgba(225, 29, 72, 0.12)",Re="rgba(190, 18, 60, 0.20)",ye=["#f43f5e","#fb7185","#fda4af"],Ie="rgba(159, 18, 57, 0.35)",lt=["#fb7185","#fda4af","#fecdd3"],He="rgba(225, 29, 72, 0.42)",Ee=["#fda4af","#fecdd3","#ffe4e6"],ze="rgba(244, 63, 94, 0.50)",We=["#fecdd3","#ffe4e6","#fff1f2"],_t="rgba(251, 113, 133, 0.58)",yt=["#fff5f6","#fffafb","#ffffff","#ffffff"],wt="rgba(225, 29, 72, 0.68)"):j==="nocturne-silver"?(L="#fafafa",ee="#f4f4f6",be="#e4e4e7",F="rgba(113, 113, 122, 0.14)",ve="rgba(82, 82, 91, 0.10)",Me="rgba(82, 82, 91, 0.12)",Re="rgba(63, 63, 70, 0.20)",ye=["#a1a1aa","#d4d4d8","#e4e4e7"],Ie="rgba(63, 63, 70, 0.35)",lt=["#d4d4d8","#e4e4e7","#f1f1f3"],He="rgba(82, 82, 91, 0.42)",Ee=["#e4e4e7","#f1f1f3","#f4f4f6"],ze="rgba(113, 113, 122, 0.50)",We=["#f1f1f3","#f6f6f8","#fafafa"],_t="rgba(161, 161, 170, 0.58)",yt=["#f6f6f8","#fcfcfc","#ffffff","#ffffff"],wt="rgba(82, 82, 91, 0.68)"):j==="cyberpunk-neon"?(L="#fdf2f8",ee="#fae8ff",be="#f5d0fe",F="rgba(236, 72, 153, 0.18)",ve="rgba(6, 182, 212, 0.14)",Me="rgba(168, 85, 247, 0.15)",Re="rgba(236, 72, 153, 0.22)",ye=["#f472b6","#fbcfe8","#fdf2f8"],Ie="rgba(219, 39, 119, 0.35)",lt=["#c084fc","#e9d5ff","#fae8ff"],He="rgba(147, 51, 234, 0.42)",Ee=["#38bdf8","#bae6fd","#f0f9ff"],ze="rgba(2, 132, 199, 0.50)",We=["#fbcfe8","#fce7f3","#ffffff"],_t="rgba(236, 72, 153, 0.58)",yt=["#fdf2f8","#ffffff","#ffffff","#ffffff"],wt="rgba(168, 85, 247, 0.68)"):j==="solar-gold"?(L="#fffbeb",ee="#fef3c7",be="#fde68a",F="rgba(245, 158, 11, 0.20)",ve="rgba(234, 88, 12, 0.14)",Me="rgba(217, 119, 6, 0.15)",Re="rgba(245, 158, 11, 0.22)",ye=["#f59e0b","#fbbf24","#fef3c7"],Ie="rgba(180, 83, 9, 0.38)",lt=["#fbbf24","#fcd34d","#fef9c3"],He="rgba(217, 119, 6, 0.45)",Ee=["#fde047","#fef08a","#fefce8"],ze="rgba(234, 88, 12, 0.52)",We=["#fef08a","#fefce8","#ffffff"],_t="rgba(245, 158, 11, 0.60)",yt=["#fefce8","#ffffff","#ffffff","#ffffff"],wt="rgba(217, 119, 6, 0.70)"):(L="#fffbf3",ee="#feeccd",be="#fad4a0",F="rgba(245, 158, 11, 0.18)",ve="rgba(217, 119, 6, 0.12)",Me="rgba(180, 83, 9, 0.12)",Re="rgba(146, 64, 14, 0.20)",ye=["#d4a373","#bc8a5f","#a47148"],Ie="rgba(146, 64, 14, 0.38)",lt=["#e6ba8f","#d4a373","#bc8a5f"],He="rgba(180, 83, 9, 0.45)",Ee=["#f3d5b5","#e6ba8f","#d4a373"],ze="rgba(217, 119, 6, 0.52)",We=["#faedcd","#f3d5b5","#fefae0"],_t="rgba(245, 158, 11, 0.60)",yt=["#fefae0","#fffdfa","#ffffff","#ffffff"],wt="rgba(217, 119, 6, 0.70)"):j==="celestial-cyan"?(L="#020712",ee="#041322",be="#071f35",F="rgba(14, 165, 233, 0.18)",ve="rgba(6, 182, 212, 0.12)",Me="rgba(56, 189, 248, 0.12)",Re="rgba(103, 232, 249, 0.20)",ye=["#030914","#051221","#071c31"],Ie="rgba(56, 189, 248, 0.22)",lt=["#040f1f","#071b33","#0a2646"],He="rgba(56, 189, 248, 0.32)",Ee=["#06152a","#0a2544","#0f345c"],ze="rgba(56, 189, 248, 0.42)",We=["#081b34","#0d2e54","#134273"],_t="rgba(125, 211, 252, 0.52)",yt=["#051224","#091c36","#0e294d","#133866"],wt="rgba(186, 230, 253, 0.65)"):j==="supernova-sunset"?(L="#0a0208",ee="#160412",be="#24061c",F="rgba(244, 63, 94, 0.18)",ve="rgba(249, 115, 22, 0.12)",Me="rgba(251, 113, 133, 0.12)",Re="rgba(253, 186, 116, 0.20)",ye=["#0d020a","#170412","#22061b"],Ie="rgba(244, 63, 94, 0.22)",lt=["#150311","#24061d","#340929"],He="rgba(244, 63, 94, 0.32)",Ee=["#1e0518","#320827","#470c38"],ze="rgba(251, 113, 133, 0.42)",We=["#280620","#420b33","#5c0f47"],_t="rgba(251, 146, 60, 0.52)",yt=["#180314","#270620","#3b0930","#500d41"],wt="rgba(254, 215, 170, 0.65)"):j==="nocturne-silver"?(L="#030306",ee="#08080d",be="#101017",F="rgba(161, 161, 170, 0.16)",ve="rgba(113, 113, 122, 0.10)",Me="rgba(212, 212, 216, 0.12)",Re="rgba(228, 228, 231, 0.18)",ye=["#060609","#0c0c12","#13131c"],Ie="rgba(161, 161, 170, 0.20)",lt=["#0a0a0f","#12121b","#1a1a27"],He="rgba(161, 161, 170, 0.30)",Ee=["#0e0e16","#181824","#232333"],ze="rgba(212, 212, 216, 0.40)",We=["#13131e","#1f1f30","#2d2d42"],_t="rgba(228, 228, 231, 0.50)",yt=["#0c0c13","#14141f","#1d1d2b","#272738"],wt="rgba(244, 244, 245, 0.65)"):j==="cyberpunk-neon"?(L="#06000e",ee="#120024",be="#22003d",F="rgba(236, 72, 153, 0.22)",ve="rgba(6, 182, 212, 0.18)",Me="rgba(34, 211, 238, 0.15)",Re="rgba(244, 114, 182, 0.22)",ye=["#0a0014","#150029","#24003d"],Ie="rgba(168, 85, 247, 0.25)",lt=["#120021","#1f0038","#310052"],He="rgba(236, 72, 153, 0.35)",Ee=["#1c0030","#2d004d","#42006e"],ze="rgba(6, 182, 212, 0.45)",We=["#25003d","#3d0066","#59008f"],_t="rgba(244, 63, 94, 0.55)",yt=["#160029","#260045","#380062","#4e0085"],wt="rgba(34, 211, 238, 0.70)"):j==="solar-gold"&&(L="#080400",ee="#140900",be="#241000",F="rgba(245, 158, 11, 0.22)",ve="rgba(234, 88, 12, 0.16)",Me="rgba(251, 191, 36, 0.15)",Re="rgba(252, 211, 77, 0.22)",ye=["#0a0400","#170900","#261000"],Ie="rgba(217, 119, 6, 0.25)",lt=["#130700","#220e00","#361600"],He="rgba(245, 158, 11, 0.35)",Ee=["#1e0a00","#301300","#4a1e00"],ze="rgba(251, 191, 36, 0.45)",We=["#290e00","#421a00","#612700"],_t="rgba(252, 211, 77, 0.55)",yt=["#190800","#2a0e00","#401500","#592000"],wt="rgba(254, 240, 138, 0.70)");const It=u.createLinearGradient(0,0,0,v);It.addColorStop(0,L),It.addColorStop(.45,ee),It.addColorStop(1,be),u.fillStyle=It,u.fillRect(0,0,x,v);const nn=u.createRadialGradient(x*.8,v*.18,0,x*.8,v*.18,x*.5);nn.addColorStop(0,F),nn.addColorStop(.7,"rgba(0, 0, 0, 0.04)"),nn.addColorStop(1,"rgba(0, 0, 0, 0)"),u.fillStyle=nn,u.fillRect(0,0,x,v);const Pt=u.createRadialGradient(x*.18,v*.82,0,x*.18,v*.82,x*.55);if(Pt.addColorStop(0,ve),Pt.addColorStop(.65,"rgba(0, 0, 0, 0.03)"),Pt.addColorStop(1,"rgba(0, 0, 0, 0)"),u.fillStyle=Pt,u.fillRect(0,0,x,v),V.showNebulaDust){u.save();const xe=u.createRadialGradient(x*.35,v*.2,0,x*.35,v*.2,x*.38);xe.addColorStop(0,F),xe.addColorStop(.5,"rgba(126, 34, 206, 0.04)"),xe.addColorStop(1,"rgba(0, 0, 0, 0)"),u.fillStyle=xe,u.fillRect(0,0,x,v);const ie=u.createRadialGradient(x*.7,v*.14,0,x*.7,v*.14,x*.32);ie.addColorStop(0,ve),ie.addColorStop(.6,"rgba(14, 116, 144, 0.03)"),ie.addColorStop(1,"rgba(0, 0, 0, 0)"),u.fillStyle=ie,u.fillRect(0,0,x,v),u.restore()}if(V.showConstellations){u.save(),u.strokeStyle=Y?"rgba(180, 130, 80, 0.28)":"rgba(255, 255, 255, 0.14)",u.lineWidth=.75;const xe=[{x:x*.68,y:v*.1},{x:x*.72,y:v*.08},{x:x*.76,y:v*.09},{x:x*.78,y:v*.13},{x:x*.83,y:v*.14},{x:x*.84,y:v*.1},{x:x*.78,y:v*.09}];u.beginPath(),u.moveTo(xe[0].x,xe[0].y);for(let se=1;se<xe.length;se++)u.lineTo(xe[se].x,xe[se].y);u.stroke(),u.fillStyle=Y?"#b45309":"#ffffff";for(const se of xe)u.beginPath(),u.arc(se.x,se.y,1.4,0,Math.PI*2),u.fill();const ie=[{x:x*.28,y:v*.08},{x:x*.31,y:v*.12},{x:x*.34,y:v*.09},{x:x*.37,y:v*.13},{x:x*.4,y:v*.1}];u.beginPath(),u.moveTo(ie[0].x,ie[0].y);for(let se=1;se<ie.length;se++)u.lineTo(ie[se].x,ie[se].y);u.stroke();for(const se of ie)u.beginPath(),u.arc(se.x,se.y,1.3,0,Math.PI*2),u.fill();u.restore()}if(V.showComet){u.save();const xe=te*.04%1,ie=x*.75,se=v*.04,Se=x*.25,z=v*.22,me=ie+(Se-ie)*xe,de=se+(z-se)*xe,Pe=Math.atan2(z-se,Se-ie)+Math.PI,Te=140,Le=me+Math.cos(Pe)*Te,Ze=de+Math.sin(Pe)*Te,ut=u.createLinearGradient(Le,Ze,me,de);ut.addColorStop(0,"rgba(56, 189, 248, 0)"),ut.addColorStop(.5,"rgba(168, 85, 247, 0.25)"),ut.addColorStop(.85,"rgba(233, 213, 255, 0.65)"),ut.addColorStop(1,"#ffffff"),u.strokeStyle=ut,u.lineWidth=1.8,u.beginPath(),u.moveTo(Le,Ze),u.lineTo(me,de),u.stroke(),u.fillStyle="#ffffff",u.shadowColor="#67e8f9",u.shadowBlur=8,u.beginPath(),u.arc(me,de,2.2,0,Math.PI*2),u.fill(),u.restore()}if(V.showMeridian){u.save();const xe=x*.91;u.strokeStyle=Me,u.lineWidth=1,u.beginPath(),u.moveTo(xe,0),u.lineTo(xe,v),u.stroke(),u.strokeStyle="rgba(255, 255, 255, 0.18)",u.lineWidth=1;for(let ie=50;ie<v;ie+=70)u.beginPath(),u.moveTo(xe-4,ie),u.lineTo(xe+4,ie),u.stroke();u.restore()}if(V.showOrbitalTrack){u.save();const xe=x*.78,ie=v*.18,se=Math.min(x,v)*.45,Se=Math.min(x,v)*.22;u.shadowColor=Re,u.shadowBlur=6,u.strokeStyle=Re,u.lineWidth=1.2,u.beginPath(),u.ellipse(xe,ie,se,Se,-.22,Math.PI*.1,Math.PI*1.3),u.stroke(),u.setLineDash([3,8]),u.strokeStyle="rgba(255, 255, 255, 0.22)",u.lineWidth=.8,u.beginPath(),u.ellipse(xe,ie,se*1.08,Se*1.08,-.22,Math.PI*.05,Math.PI*1.25),u.stroke(),u.setLineDash([]),u.restore()}if(V.showStars)for(let xe=0;xe<M.length;xe++){const ie=M[xe];!_&&O>0&&(ie.x+=ie.vx*O,ie.y+=ie.vy*O,ie.alphaPhase+=ie.alphaSpeed*O,ie.x<0&&(ie.x=x),ie.x>x&&(ie.x=0),ie.y<0&&(ie.y=v),ie.y>v&&(ie.y=0));const se=(ie.z+1)*.35,Se=ie.x+re*12*se,z=ie.y+K*12*se,me=Math.max(.12,Math.min(.85,ie.alpha+Math.sin(ie.alphaPhase)*.22));u.beginPath(),u.arc(Se,z,ie.radius,0,Math.PI*2),u.fillStyle=Y?`rgba(180, 130, 80, ${(me*.65).toFixed(3)})`:`rgba(255, 255, 255, ${me.toFixed(3)})`,u.fill()}const Wt=V.waveGeometry,zt=V.waveLayerDensity,rn=(xe,ie,se,Se=2)=>{u.save(),u.translate(xe,ie);const z=u.createRadialGradient(0,0,0,0,0,Se*2.5);Y?(z.addColorStop(0,`rgba(245, 158, 11, ${se})`),z.addColorStop(.35,`rgba(217, 119, 6, ${se*.7})`),z.addColorStop(1,"rgba(255, 255, 255, 0)"),u.fillStyle=z,u.beginPath(),u.arc(0,0,Se*2.5,0,Math.PI*2),u.fill(),u.strokeStyle=`rgba(180, 83, 9, ${se*.8})`,u.lineWidth=.75,u.beginPath(),u.moveTo(-Se*2,0),u.lineTo(Se*2,0),u.moveTo(0,-Se*2),u.lineTo(0,Se*2),u.stroke()):(z.addColorStop(0,`rgba(255, 255, 255, ${se})`),z.addColorStop(.35,`rgba(233, 213, 255, ${se*.7})`),z.addColorStop(1,"rgba(255, 255, 255, 0)"),u.fillStyle=z,u.beginPath(),u.arc(0,0,Se*2.5,0,Math.PI*2),u.fill(),u.strokeStyle=`rgba(255, 255, 255, ${se*.9})`,u.lineWidth=.75,u.beginPath(),u.moveTo(-Se*2,0),u.lineTo(Se*2,0),u.moveTo(0,-Se*2),u.lineTo(0,Se*2),u.stroke()),u.restore()},J=(xe,ie,se,Se,z,me,de,Pe,Te,Le,Ze=[])=>{const ut=[0,x*.32,x*.68,x],Q=[];for(let ce=0;ce<4;ce++){const Be=Math.sin(te*se+Se+ce*1.4)*(ie*.75)+Math.cos(te*se*.7+Se*1.2+ce*2.1)*(ie*.35);Q.push({x:ut[ce],y:v*xe[ce]+Be})}const je=[Q[0],...Q,Q[Q.length-1]],$e=[],Oe=.5;for(let ce=1;ce<je.length-2;ce++){const Be=je[ce-1],Ae=je[ce],mt=je[ce+1],qt=je[ce+2],mn=(mt.x-Be.x)*Oe,Mn=(mt.y-Be.y)*Oe,Ni=(qt.x-Ae.x)*Oe,ms=(qt.y-Ae.y)*Oe;$e.push({p1:Ae,cp1:{x:Ae.x+mn/3,y:Ae.y+Mn/3},cp2:{x:mt.x-Ni/3,y:mt.y-ms/3},p2:mt})}u.save(),Te>0&&(u.shadowColor=Pe,u.shadowBlur=Te,u.shadowOffsetY=Le),u.beginPath(),u.moveTo(Q[0].x,Q[0].y);for(const ce of $e)u.bezierCurveTo(ce.cp1.x,ce.cp1.y,ce.cp2.x,ce.cp2.y,ce.p2.x,ce.p2.y);u.lineTo(x,v),u.lineTo(0,v),u.closePath(),u.fillStyle=z,u.fill(),u.save(),u.clip();const xt=Math.min(...Q.map(ce=>ce.y)),Nt=u.createLinearGradient(0,xt,0,xt+140);Y?(Nt.addColorStop(0,"rgba(255, 255, 255, 0.40)"),Nt.addColorStop(.25,"rgba(251, 191, 36, 0.14)"),Nt.addColorStop(.7,"rgba(217, 119, 6, 0.04)"),Nt.addColorStop(1,"rgba(255, 255, 255, 0)")):(Nt.addColorStop(0,"rgba(255, 255, 255, 0.26)"),Nt.addColorStop(.25,"rgba(216, 180, 254, 0.16)"),Nt.addColorStop(.7,"rgba(147, 51, 234, 0.05)"),Nt.addColorStop(1,"rgba(0, 0, 0, 0)")),u.fillStyle=Nt,u.fillRect(0,xt,x,v),u.beginPath();for(let ce=0;ce<$e.length;ce++){const Be=$e[ce],Ae=18+Math.sin(te*.75+ce*1.5)*4;ce===0&&u.moveTo(Be.p1.x,Be.p1.y+Ae),u.bezierCurveTo(Be.cp1.x,Be.cp1.y+Ae,Be.cp2.x,Be.cp2.y+Ae,Be.p2.x,Be.p2.y+Ae)}u.strokeStyle=Y?"rgba(160, 90, 40, 0.16)":"rgba(255, 255, 255, 0.10)",u.lineWidth=1,u.stroke(),u.beginPath();for(let ce=0;ce<$e.length;ce++){const Be=$e[ce],Ae=38+Math.cos(te*.65+ce*1.8)*5;ce===0&&u.moveTo(Be.p1.x,Be.p1.y+Ae),u.bezierCurveTo(Be.cp1.x,Be.cp1.y+Ae,Be.cp2.x,Be.cp2.y+Ae,Be.p2.x,Be.p2.y+Ae)}u.strokeStyle=Y?"rgba(160, 90, 40, 0.10)":"rgba(255, 255, 255, 0.06)",u.lineWidth=.8,u.stroke(),u.restore(),u.strokeStyle=me,u.lineWidth=de,u.stroke(),u.restore();for(const ce of Ze){const Be=Math.min($e.length-1,Math.floor(ce*$e.length)),Ae=ce*$e.length-Be,mt=$e[Be],qt=1-Ae,mn=qt*qt*qt*mt.p1.x+3*qt*qt*Ae*mt.cp1.x+3*qt*Ae*Ae*mt.cp2.x+Ae*Ae*Ae*mt.p2.x,Mn=qt*qt*qt*mt.p1.y+3*qt*qt*Ae*mt.cp1.y+3*qt*Ae*Ae*mt.cp2.y+Ae*Ae*Ae*mt.p2.y,Ni=.5+Math.sin(te*2+ce*8)*.35;rn(mn,Mn,Ni,2)}},Yt=(xe,ie,se,Se,z,me,de,Pe,Te,Le,Ze,ut)=>{const Q=Math.sin(te*z+me)*Se,je=[];je.push({x:0,y:v*xe+Q});for(let $e=0;$e<ie.length;$e++){const Oe=x*ie[$e],xt=v*(xe-se[$e])+Math.cos(te*z+$e+me)*(Se*.7);je.push({x:Oe,y:xt})}je.push({x,y:v*(xe+.03)+Q}),u.save(),Ze>0&&(u.shadowColor=Le,u.shadowBlur=Ze,u.shadowOffsetY=ut),u.beginPath(),u.moveTo(je[0].x,je[0].y);for(let $e=1;$e<je.length;$e++)u.lineTo(je[$e].x,je[$e].y);u.lineTo(x,v),u.lineTo(0,v),u.closePath(),u.fillStyle=de,u.fill(),u.strokeStyle=Pe,u.lineWidth=Te,u.stroke(),u.restore()},Lt=(xe,ie,se,Se,z,me)=>{u.save(),u.globalCompositeOperation="screen",u.beginPath(),u.moveTo(0,v*xe);const de=16;for(let Pe=0;Pe<=de;Pe++){const Te=Pe/de*x,Le=v*xe+Math.sin(Pe/de*Math.PI*2+te*se+Se)*ie;Pe===0?u.moveTo(Te,Le):u.lineTo(Te,Le)}u.lineTo(x,v),u.lineTo(0,v),u.closePath(),u.fillStyle=z,u.fill(),u.strokeStyle=me,u.lineWidth=1.8,u.shadowColor=me,u.shadowBlur=14,u.stroke(),u.restore()},bt=u.createLinearGradient(0,v*.46,0,v*.68);if(bt.addColorStop(0,"rgba(0, 0, 0, 0)"),Y)bt.addColorStop(.5,"rgba(255, 255, 255, 0.25)");else{const xe=j==="celestial-cyan"?"rgba(7, 31, 53, 0.45)":j==="supernova-sunset"?"rgba(36, 6, 28, 0.45)":j==="nocturne-silver"?"rgba(16, 16, 23, 0.45)":"rgba(20, 10, 40, 0.45)";bt.addColorStop(.5,xe)}bt.addColorStop(1,"rgba(0, 0, 0, 0)"),u.fillStyle=bt,u.fillRect(0,v*.46,x,v*.22);const Ue=u.createLinearGradient(0,v*.55,0,v);Ue.addColorStop(0,ye[0]),Ue.addColorStop(.5,ye[1]),Ue.addColorStop(1,ye[2]);const Et=u.createLinearGradient(0,v*.63,0,v);Et.addColorStop(0,lt[0]),Et.addColorStop(.5,lt[1]),Et.addColorStop(1,lt[2]);const qe=u.createLinearGradient(0,v*.71,0,v);qe.addColorStop(0,Ee[0]),qe.addColorStop(.5,Ee[1]),qe.addColorStop(1,Ee[2]);const rt=u.createLinearGradient(0,v*.79,0,v);rt.addColorStop(0,We[0]),rt.addColorStop(.5,We[1]),rt.addColorStop(1,We[2]);const I=u.createLinearGradient(0,v*.86,0,v);I.addColorStop(0,yt[0]),I.addColorStop(.35,yt[1]),I.addColorStop(.7,yt[2]),I.addColorStop(1,yt[3]);const E=Y?"rgba(160, 140, 120, 0.12)":"rgba(0,0,0,0.55)",ae=Y?"rgba(160, 140, 120, 0.16)":"rgba(0,0,0,0.65)",Ce=Y?"rgba(160, 140, 120, 0.20)":"rgba(0,0,0,0.70)",_e=Y?"rgba(160, 140, 120, 0.22)":"rgba(0,0,0,0.75)",Fe=Y?"rgba(160, 140, 120, 0.26)":"rgba(0,0,0,0.80)";if(Wt==="mountains"?(Yt(.48,[.18,.5,.82],[.14,.17,.12],12*X,.35,0,Ue,Ie,.8,E,16,-6),zt!=="airy"&&Yt(.58,[.32,.66,.9],[.12,.15,.11],14*X,.4,1.5,Et,He,.9,ae,20,-7),Yt(.68,[.15,.44,.75],[.11,.13,.1],15*X,.45,3.1,qe,ze,1,Ce,24,-8),zt==="dense"&&Yt(.78,[.28,.6,.86],[.09,.11,.08],14*X,.4,4.4,rt,_t,1.1,_e,28,-9),Yt(.88,[.4,.74],[.08,.07],12*X,.35,5.8,I,wt,1.2,Fe,32,-10)):Wt==="aurora"?(Lt(.28,32*X,.45,0,Ue,Ie),zt!=="airy"&&Lt(.4,30*X,.5,1.6,Et,He),Lt(.54,26*X,.55,3.2,qe,ze),zt==="dense"&&Lt(.68,22*X,.6,4.8,rt,_t),J([.86,.89,.85,.88],12*X,.35,6.2,I,wt,1.2,Fe,28,-9)):Wt==="ocean"?(J([.62,.58,.65,.6],16*X,.65,0,Ue,Ie,.8,E,16,-6,[.3]),zt!=="airy"&&J([.69,.73,.67,.71],18*X,.7,1.8,Et,He,.9,ae,20,-7,[.55]),J([.76,.73,.79,.75],20*X,.75,3.4,qe,ze,1,Ce,24,-8,[.38,.82]),zt==="dense"&&J([.83,.86,.81,.85],16*X,.65,4.9,rt,_t,1.1,_e,28,-9,[.65]),J([.89,.87,.92,.88],14*X,.55,6.2,I,wt,1.2,Fe,32,-10,[.5])):(J([.48,.56,.64,.68],16*X,.38,0,Ue,Ie,.8,E,16,-6,[.24,.68]),zt!=="airy"&&J([.66,.62,.55,.6],18*X,.42,1.8,Et,He,.9,ae,20,-7,[.35,.82]),J([.69,.76,.72,.76],19*X,.46,3.4,qe,ze,1,Ce,24,-8,[.42,.78]),zt==="dense"&&J([.8,.77,.84,.8],16*X,.4,4.9,rt,_t,1.1,_e,28,-9,[.18,.62]),J([.88,.91,.86,.9],13*X,.35,6.2,I,wt,1.2,Fe,32,-10,[.35,.8])),V.showCrossStars){const xe=.68+Math.sin(te*1.8)*.22,ie=.6+Math.sin(te*1.5+1.2)*.24,se=.64+Math.sin(te*1.9+2.5)*.2,Se=.58+Math.sin(te*1.4+3.8)*.25,z=.52+Math.sin(te*1.7+4.6)*.22;U(x*.5,v*.08,11,xe),U(x*.18,v*.16,9.5,ie),U(x*.84,v*.2,10,se),U(x*.72,v*.34,8.5,Se),U(x*.08,v*.28,8,z)}N(V.shootingStarMode||"occasional"),f=requestAnimationFrame(W)};return f=requestAnimationFrame(W),()=>{cancelAnimationFrame(f),window.removeEventListener("resize",C),window.removeEventListener("mousemove",P),document.removeEventListener("visibilitychange",H)}},[]),m.jsx("canvas",{ref:s,className:"fixed inset-0 pointer-events-none z-0 select-none","aria-hidden":"true"})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hf="187",Gv=0,rm=1,Hv=2,Gl=1,Vv=2,Ka=3,fs=0,zn=1,Bi=2,ea=0,Qa=1,eo=2,sm=3,am=4,Wv=5,Js=100,jv=101,Xv=102,$v=103,Yv=104,qv=200,Kv=201,Zv=202,Jv=203,o0=204,l0=205,Qv=206,e_=207,t_=208,n_=209,i_=210,r_=211,s_=212,a_=213,o_=214,_d=0,yd=1,Sd=2,no=3,Md=4,wd=5,bd=6,Ed=7,c0=0,l_=1,c_=2,or=0,u0=1,d0=2,f0=3,h0=4,p0=5,m0=6,g0=7,x0=300,na=301,io=302,Hu=303,Vu=304,ro=1e3,oi=1001,Td=1002,Nn=1003,u_=1004,_l=1005,Jn=1006,Wu=1007,kr=1008,ai=1009,v0=1010,_0=1011,so=1012,pf=1013,Wi=1014,Gi=1015,ji=1016,mf=1017,gf=1018,ia=1020,y0=35902,S0=35899,M0=1021,w0=1022,Hi=1023,Gr=1026,zr=1027,b0=1028,xf=1029,hs=1030,vf=1031,_f=1033,Hl=33776,Vl=33777,Wl=33778,jl=33779,Ad=35840,Cd=35841,Rd=35842,Nd=35843,Pd=36196,Ld=37492,Dd=37496,Id=37488,Ud=37489,Zl=37490,Fd=37491,kd=37808,zd=37809,Od=37810,Bd=37811,Gd=37812,Hd=37813,Vd=37814,Wd=37815,jd=37816,Xd=37817,$d=37818,Yd=37819,qd=37820,Kd=37821,Zd=36492,Jd=36494,Qd=36495,ef=36283,tf=36284,Jl=36285,nf=36286,d_=3200,rf=0,f_=1,Ur="",si="srgb",Ql="srgb-linear",ec="linear",Xt="srgb",ju=7680,h_=519,p_=512,m_=513,g_=514,E0=515,x_=516,v_=517,T0=518,A0=519,__=35044,om="300 es",Ci=2e3,ao=2001;function y_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function tc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function S_(){const s=tc("canvas");return s.style.display="block",s}const lm={};function cm(...s){const e="THREE."+s.shift();console.log(e,...s)}function C0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function gt(...s){s=C0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Vt(...s){s=C0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Xl(...s){const e=s.join(" ");e in lm||(lm[e]=!0,gt(...s))}function M_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const w_={[_d]:_d,[Sd]:bd,[Md]:Md,[no]:wd,[yd]:yd,[bd]:Sd,[Ed]:Ed,[wd]:no};class ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,d=o.length;l<d;l++)o[l].call(this,e);e.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xu=Math.PI/180,sf=180/Math.PI;function lo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Fn[s&255]+Fn[s>>8&255]+Fn[s>>16&255]+Fn[s>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[t&63|128]+Fn[t>>8&255]+"-"+Fn[t>>16&255]+Fn[t>>24&255]+Fn[r&255]+Fn[r>>8&255]+Fn[r>>16&255]+Fn[r>>24&255]).toLowerCase()}function Ft(s,e,t){return Math.max(e,Math.min(t,s))}function b_(s,e){return(s%e+e)%e}function $u(s,e,t){return(1-t)*s+t*e}function E_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function yf(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function T_(s,e){if(e.constructor===Float32Array)return s;const t=yf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function A_(s,e){if(e.constructor===Float32Array)return s;const t=yf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const Cf=class Cf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ft(this.x,e.x,t.x),this.y=Ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ft(this.x,e,t),this.y=Ft(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ft(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ft(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,d=this.y-e.y;return this.x=l*r-d*o+e.x,this.y=l*o+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Cf.prototype.isVector2=!0;let kt=Cf;class oa{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,d,p){let u=r[o+0],f=r[o+1],x=r[o+2],v=r[o+3],_=l[d+0],M=l[d+1],b=l[d+2],C=l[d+3];if(v!==C||u!==_||f!==M||x!==b){let y=u*_+f*M+x*b+v*C;y<0&&(_=-_,M=-M,b=-b,C=-C,y=-y);let S=1-p;if(y<.9995){const R=Math.acos(y),k=Math.sin(R);S=Math.sin(S*R)/k,p=Math.sin(p*R)/k,u=u*S+_*p,f=f*S+M*p,x=x*S+b*p,v=v*S+C*p}else{u=u*S+_*p,f=f*S+M*p,x=x*S+b*p,v=v*S+C*p;const R=1/Math.sqrt(u*u+f*f+x*x+v*v);u*=R,f*=R,x*=R,v*=R}}e[t]=u,e[t+1]=f,e[t+2]=x,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,l,d){const p=r[o],u=r[o+1],f=r[o+2],x=r[o+3],v=l[d],_=l[d+1],M=l[d+2],b=l[d+3];return e[t]=p*b+x*v+u*M-f*_,e[t+1]=u*b+x*_+f*v-p*M,e[t+2]=f*b+x*M+p*_-u*v,e[t+3]=x*b-p*v-u*_-f*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,d=e._order,p=Math.cos,u=Math.sin,f=p(r/2),x=p(o/2),v=p(l/2),_=u(r/2),M=u(o/2),b=u(l/2);switch(d){case"XYZ":this._x=_*x*v+f*M*b,this._y=f*M*v-_*x*b,this._z=f*x*b+_*M*v,this._w=f*x*v-_*M*b;break;case"YXZ":this._x=_*x*v+f*M*b,this._y=f*M*v-_*x*b,this._z=f*x*b-_*M*v,this._w=f*x*v+_*M*b;break;case"ZXY":this._x=_*x*v-f*M*b,this._y=f*M*v+_*x*b,this._z=f*x*b+_*M*v,this._w=f*x*v-_*M*b;break;case"ZYX":this._x=_*x*v-f*M*b,this._y=f*M*v+_*x*b,this._z=f*x*b-_*M*v,this._w=f*x*v+_*M*b;break;case"YZX":this._x=_*x*v+f*M*b,this._y=f*M*v+_*x*b,this._z=f*x*b-_*M*v,this._w=f*x*v-_*M*b;break;case"XZY":this._x=_*x*v-f*M*b,this._y=f*M*v-_*x*b,this._z=f*x*b+_*M*v,this._w=f*x*v+_*M*b;break;default:gt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],d=t[1],p=t[5],u=t[9],f=t[2],x=t[6],v=t[10],_=r+p+v;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(x-u)*M,this._y=(l-f)*M,this._z=(d-o)*M}else if(r>p&&r>v){const M=2*Math.sqrt(1+r-p-v);this._w=(x-u)/M,this._x=.25*M,this._y=(o+d)/M,this._z=(l+f)/M}else if(p>v){const M=2*Math.sqrt(1+p-r-v);this._w=(l-f)/M,this._x=(o+d)/M,this._y=.25*M,this._z=(u+x)/M}else{const M=2*Math.sqrt(1+v-r-p);this._w=(d-o)/M,this._x=(l+f)/M,this._y=(u+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,d=e._w,p=t._x,u=t._y,f=t._z,x=t._w;return this._x=r*x+d*p+o*f-l*u,this._y=o*x+d*u+l*p-r*f,this._z=l*x+d*f+r*u-o*p,this._w=d*x-r*p-o*u-l*f,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,d=e._w,p=this.dot(e);p<0&&(r=-r,o=-o,l=-l,d=-d,p=-p);let u=1-t;if(p<.9995){const f=Math.acos(p),x=Math.sin(f);u=Math.sin(u*f)/x,t=Math.sin(t*f)/x,this._x=this._x*u+r*t,this._y=this._y*u+o*t,this._z=this._z*u+l*t,this._w=this._w*u+d*t,this._onChangeCallback()}else this._x=this._x*u+r*t,this._y=this._y*u+o*t,this._z=this._z*u+l*t,this._w=this._w*u+d*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Rf=class Rf{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(um.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(um.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,d=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*d,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*d,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*d,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,d=e.y,p=e.z,u=e.w,f=2*(d*o-p*r),x=2*(p*t-l*o),v=2*(l*r-d*t);return this.x=t+u*f+d*v-p*x,this.y=r+u*x+p*f-l*v,this.z=o+u*v+l*x-d*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ft(this.x,e.x,t.x),this.y=Ft(this.y,e.y,t.y),this.z=Ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ft(this.x,e,t),this.y=Ft(this.y,e,t),this.z=Ft(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ft(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,d=t.x,p=t.y,u=t.z;return this.x=o*u-l*p,this.y=l*d-r*u,this.z=r*p-o*d,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Yu.copy(this).projectOnVector(e),this.sub(Yu)}reflect(e){return this.sub(Yu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ft(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Rf.prototype.isVector3=!0;let pe=Rf;const Yu=new pe,um=new oa,Nf=class Nf{constructor(e,t,r,o,l,d,p,u,f){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,d,p,u,f)}set(e,t,r,o,l,d,p,u,f){const x=this.elements;return x[0]=e,x[1]=o,x[2]=p,x[3]=t,x[4]=l,x[5]=u,x[6]=r,x[7]=d,x[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,d=r[0],p=r[3],u=r[6],f=r[1],x=r[4],v=r[7],_=r[2],M=r[5],b=r[8],C=o[0],y=o[3],S=o[6],R=o[1],k=o[4],P=o[7],U=o[2],D=o[5],w=o[8];return l[0]=d*C+p*R+u*U,l[3]=d*y+p*k+u*D,l[6]=d*S+p*P+u*w,l[1]=f*C+x*R+v*U,l[4]=f*y+x*k+v*D,l[7]=f*S+x*P+v*w,l[2]=_*C+M*R+b*U,l[5]=_*y+M*k+b*D,l[8]=_*S+M*P+b*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],p=e[5],u=e[6],f=e[7],x=e[8];return t*d*x-t*p*f-r*l*x+r*p*u+o*l*f-o*d*u}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],p=e[5],u=e[6],f=e[7],x=e[8],v=x*d-p*f,_=p*u-x*l,M=f*l-d*u,b=t*v+r*_+o*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=v*C,e[1]=(o*f-x*r)*C,e[2]=(p*r-o*d)*C,e[3]=_*C,e[4]=(x*t-o*u)*C,e[5]=(o*l-p*t)*C,e[6]=M*C,e[7]=(r*u-f*t)*C,e[8]=(d*t-r*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,d,p){const u=Math.cos(l),f=Math.sin(l);return this.set(r*u,r*f,-r*(u*d+f*p)+d+e,-o*f,o*u,-o*(-f*d+u*p)+p+t,0,0,1),this}scale(e,t){return Xl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qu.makeScale(e,t)),this}rotate(e){return Xl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qu.makeRotation(-e)),this}translate(e,t){return Xl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Nf.prototype.isMatrix3=!0;let vt=Nf;const qu=new vt,dm=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fm=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function C_(){const s={enabled:!0,workingColorSpace:Ql,spaces:{},convert:function(o,l,d){return this.enabled===!1||l===d||!l||!d||(this.spaces[l].transfer===Xt&&(o.r=lr(o.r),o.g=lr(o.g),o.b=lr(o.b)),this.spaces[l].primaries!==this.spaces[d].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Xt&&(o.r=ta(o.r),o.g=ta(o.g),o.b=ta(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ur?ec:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,d){return o.copy(this.spaces[d].fromXYZ).multiply(this.spaces[l].toXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ql]:{primaries:e,whitePoint:r,transfer:ec,toXYZ:dm,fromXYZ:fm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:e,whitePoint:r,transfer:Xt,toXYZ:dm,fromXYZ:fm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),s}const Ut=C_();function lr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ta(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Bs;class R_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Bs===void 0&&(Bs=tc("canvas")),Bs.width=e.width,Bs.height=e.height;const o=Bs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Bs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=tc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let d=0;d<l.length;d++)l[d]=lr(l[d]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(lr(t[r]/255)*255):t[r]=lr(t[r]);return{data:t,width:e.width,height:e.height}}else return gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let N_=0;class Sf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=lo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let d=0,p=o.length;d<p;d++)o[d].isDataTexture?l.push(Ku(o[d].image)):l.push(Ku(o[d]))}else l=Ku(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Ku(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?R_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(gt("Texture: Unable to serialize Texture."),{})}let P_=0;const Zu=new pe;class On extends ps{constructor(e=On.DEFAULT_IMAGE,t=On.DEFAULT_MAPPING,r=oi,o=oi,l=Jn,d=kr,p=Hi,u=ai,f=On.DEFAULT_ANISOTROPY,x=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=lo(),this.name="",this.source=new Sf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=d,this.anisotropy=f,this.format=p,this.internalFormat=null,this.type=u,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Zu).x}get height(){return this.source.getSize(Zu).y}get depth(){return this.source.getSize(Zu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){gt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){gt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==x0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ro:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ro:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=x0;On.DEFAULT_ANISOTROPY=1;const Pf=class Pf{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,d=e.elements;return this.x=d[0]*t+d[4]*r+d[8]*o+d[12]*l,this.y=d[1]*t+d[5]*r+d[9]*o+d[13]*l,this.z=d[2]*t+d[6]*r+d[10]*o+d[14]*l,this.w=d[3]*t+d[7]*r+d[11]*o+d[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const u=e.elements,f=u[0],x=u[4],v=u[8],_=u[1],M=u[5],b=u[9],C=u[2],y=u[6],S=u[10];if(Math.abs(x-_)<.01&&Math.abs(v-C)<.01&&Math.abs(b-y)<.01){if(Math.abs(x+_)<.1&&Math.abs(v+C)<.1&&Math.abs(b+y)<.1&&Math.abs(f+M+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const k=(f+1)/2,P=(M+1)/2,U=(S+1)/2,D=(x+_)/4,w=(v+C)/4,N=(b+y)/4;return k>P&&k>U?k<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(k),o=D/r,l=w/r):P>U?P<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),r=D/o,l=N/o):U<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(U),r=w/l,o=N/l),this.set(r,o,l,t),this}let R=Math.sqrt((y-b)*(y-b)+(v-C)*(v-C)+(_-x)*(_-x));return Math.abs(R)<.001&&(R=1),this.x=(y-b)/R,this.y=(v-C)/R,this.z=(_-x)/R,this.w=Math.acos((f+M+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ft(this.x,e.x,t.x),this.y=Ft(this.y,e.y,t.y),this.z=Ft(this.z,e.z,t.z),this.w=Ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ft(this.x,e,t),this.y=Ft(this.y,e,t),this.z=Ft(this.z,e,t),this.w=Ft(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ft(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Pf.prototype.isVector4=!0;let on=Pf;class L_ extends ps{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t),this.textures=[];const o=r.count;for(let l=0;l<o;l++)this.textures[l]=new On({width:e,height:t,depth:r.depth}),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Jn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Sf(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends L_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class R0 extends On{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class D_ extends On{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const sc=class sc{constructor(e,t,r,o,l,d,p,u,f,x,v,_,M,b,C,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,d,p,u,f,x,v,_,M,b,C,y)}set(e,t,r,o,l,d,p,u,f,x,v,_,M,b,C,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=r,S[12]=o,S[1]=l,S[5]=d,S[9]=p,S[13]=u,S[2]=f,S[6]=x,S[10]=v,S[14]=_,S[3]=M,S[7]=b,S[11]=C,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Gs.setFromMatrixColumn(e,0).length(),l=1/Gs.setFromMatrixColumn(e,1).length(),d=1/Gs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*d,t[9]=r[9]*d,t[10]=r[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,d=Math.cos(r),p=Math.sin(r),u=Math.cos(o),f=Math.sin(o),x=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const _=d*x,M=d*v,b=p*x,C=p*v;t[0]=u*x,t[4]=-u*v,t[8]=f,t[1]=M+b*f,t[5]=_-C*f,t[9]=-p*u,t[2]=C-_*f,t[6]=b+M*f,t[10]=d*u}else if(e.order==="YXZ"){const _=u*x,M=u*v,b=f*x,C=f*v;t[0]=_+C*p,t[4]=b*p-M,t[8]=d*f,t[1]=d*v,t[5]=d*x,t[9]=-p,t[2]=M*p-b,t[6]=C+_*p,t[10]=d*u}else if(e.order==="ZXY"){const _=u*x,M=u*v,b=f*x,C=f*v;t[0]=_-C*p,t[4]=-d*v,t[8]=b+M*p,t[1]=M+b*p,t[5]=d*x,t[9]=C-_*p,t[2]=-d*f,t[6]=p,t[10]=d*u}else if(e.order==="ZYX"){const _=d*x,M=d*v,b=p*x,C=p*v;t[0]=u*x,t[4]=b*f-M,t[8]=_*f+C,t[1]=u*v,t[5]=C*f+_,t[9]=M*f-b,t[2]=-f,t[6]=p*u,t[10]=d*u}else if(e.order==="YZX"){const _=d*u,M=d*f,b=p*u,C=p*f;t[0]=u*x,t[4]=C-_*v,t[8]=b*v+M,t[1]=v,t[5]=d*x,t[9]=-p*x,t[2]=-f*x,t[6]=M*v+b,t[10]=_-C*v}else if(e.order==="XZY"){const _=d*u,M=d*f,b=p*u,C=p*f;t[0]=u*x,t[4]=-v,t[8]=f*x,t[1]=_*v+C,t[5]=d*x,t[9]=M*v-b,t[2]=b*v-M,t[6]=p*x,t[10]=C*v+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(I_,e,U_)}lookAt(e,t,r){const o=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Cr.crossVectors(r,ii),Cr.lengthSq()===0&&(Math.abs(r.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Cr.crossVectors(r,ii)),Cr.normalize(),yl.crossVectors(ii,Cr),o[0]=Cr.x,o[4]=yl.x,o[8]=ii.x,o[1]=Cr.y,o[5]=yl.y,o[9]=ii.y,o[2]=Cr.z,o[6]=yl.z,o[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,d=r[0],p=r[4],u=r[8],f=r[12],x=r[1],v=r[5],_=r[9],M=r[13],b=r[2],C=r[6],y=r[10],S=r[14],R=r[3],k=r[7],P=r[11],U=r[15],D=o[0],w=o[4],N=o[8],te=o[12],$=o[1],H=o[5],W=o[9],V=o[13],G=o[2],O=o[6],re=o[10],K=o[14],X=o[3],j=o[7],Y=o[11],L=o[15];return l[0]=d*D+p*$+u*G+f*X,l[4]=d*w+p*H+u*O+f*j,l[8]=d*N+p*W+u*re+f*Y,l[12]=d*te+p*V+u*K+f*L,l[1]=x*D+v*$+_*G+M*X,l[5]=x*w+v*H+_*O+M*j,l[9]=x*N+v*W+_*re+M*Y,l[13]=x*te+v*V+_*K+M*L,l[2]=b*D+C*$+y*G+S*X,l[6]=b*w+C*H+y*O+S*j,l[10]=b*N+C*W+y*re+S*Y,l[14]=b*te+C*V+y*K+S*L,l[3]=R*D+k*$+P*G+U*X,l[7]=R*w+k*H+P*O+U*j,l[11]=R*N+k*W+P*re+U*Y,l[15]=R*te+k*V+P*K+U*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],d=e[1],p=e[5],u=e[9],f=e[13],x=e[2],v=e[6],_=e[10],M=e[14],b=e[3],C=e[7],y=e[11],S=e[15],R=u*M-f*_,k=p*M-f*v,P=p*_-u*v,U=d*M-f*x,D=d*_-u*x,w=d*v-p*x;return t*(C*R-y*k+S*P)-r*(b*R-y*U+S*D)+o*(b*k-C*U+S*w)-l*(b*P-C*D+y*w)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],d=e[5],p=e[9],u=e[2],f=e[6],x=e[10];return t*(d*x-p*f)-r*(l*x-p*u)+o*(l*f-d*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],p=e[5],u=e[6],f=e[7],x=e[8],v=e[9],_=e[10],M=e[11],b=e[12],C=e[13],y=e[14],S=e[15],R=t*p-r*d,k=t*u-o*d,P=t*f-l*d,U=r*u-o*p,D=r*f-l*p,w=o*f-l*u,N=x*C-v*b,te=x*y-_*b,$=x*S-M*b,H=v*y-_*C,W=v*S-M*C,V=_*S-M*y,G=R*V-k*W+P*H+U*$-D*te+w*N;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/G;return e[0]=(p*V-u*W+f*H)*O,e[1]=(o*W-r*V-l*H)*O,e[2]=(C*w-y*D+S*U)*O,e[3]=(_*D-v*w-M*U)*O,e[4]=(u*$-d*V-f*te)*O,e[5]=(t*V-o*$+l*te)*O,e[6]=(y*P-b*w-S*k)*O,e[7]=(x*w-_*P+M*k)*O,e[8]=(d*W-p*$+f*N)*O,e[9]=(r*$-t*W-l*N)*O,e[10]=(b*D-C*P+S*R)*O,e[11]=(v*P-x*D-M*R)*O,e[12]=(p*te-d*H-u*N)*O,e[13]=(t*H-r*te+o*N)*O,e[14]=(C*k-b*U-y*R)*O,e[15]=(x*U-v*k+_*R)*O,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,d=e.x,p=e.y,u=e.z,f=l*d,x=l*p;return this.set(f*d+r,f*p-o*u,f*u+o*p,0,f*p+o*u,x*p+r,x*u-o*d,0,f*u-o*p,x*u+o*d,l*u*u+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,d){return this.set(1,r,l,0,e,1,d,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,d=t._y,p=t._z,u=t._w,f=l+l,x=d+d,v=p+p,_=l*f,M=l*x,b=l*v,C=d*x,y=d*v,S=p*v,R=u*f,k=u*x,P=u*v,U=r.x,D=r.y,w=r.z;return o[0]=(1-(C+S))*U,o[1]=(M+P)*U,o[2]=(b-k)*U,o[3]=0,o[4]=(M-P)*D,o[5]=(1-(_+S))*D,o[6]=(y+R)*D,o[7]=0,o[8]=(b+k)*w,o[9]=(y-R)*w,o[10]=(1-(_+C))*w,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let d=Gs.set(o[0],o[1],o[2]).length();const p=Gs.set(o[4],o[5],o[6]).length(),u=Gs.set(o[8],o[9],o[10]).length();l<0&&(d=-d),Mi.copy(this);const f=1/d,x=1/p,v=1/u;return Mi.elements[0]*=f,Mi.elements[1]*=f,Mi.elements[2]*=f,Mi.elements[4]*=x,Mi.elements[5]*=x,Mi.elements[6]*=x,Mi.elements[8]*=v,Mi.elements[9]*=v,Mi.elements[10]*=v,t.setFromRotationMatrix(Mi),r.x=d,r.y=p,r.z=u,this}makePerspective(e,t,r,o,l,d,p=Ci,u=!1){const f=this.elements,x=2*l/(t-e),v=2*l/(r-o),_=(t+e)/(t-e),M=(r+o)/(r-o);let b,C;if(u)b=l/(d-l),C=d*l/(d-l);else if(p===Ci)b=-(d+l)/(d-l),C=-2*d*l/(d-l);else if(p===ao)b=-d/(d-l),C=-d*l/(d-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return f[0]=x,f[4]=0,f[8]=_,f[12]=0,f[1]=0,f[5]=v,f[9]=M,f[13]=0,f[2]=0,f[6]=0,f[10]=b,f[14]=C,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,r,o,l,d,p=Ci,u=!1){const f=this.elements,x=2/(t-e),v=2/(r-o),_=-(t+e)/(t-e),M=-(r+o)/(r-o);let b,C;if(u)b=1/(d-l),C=d/(d-l);else if(p===Ci)b=-2/(d-l),C=-(d+l)/(d-l);else if(p===ao)b=-1/(d-l),C=-l/(d-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return f[0]=x,f[4]=0,f[8]=0,f[12]=_,f[1]=0,f[5]=v,f[9]=0,f[13]=M,f[2]=0,f[6]=0,f[10]=b,f[14]=C,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};sc.prototype.isMatrix4=!0;let ln=sc;const Gs=new pe,Mi=new ln,I_=new pe(0,0,0),U_=new pe(1,1,1),Cr=new pe,yl=new pe,ii=new pe,hm=new ln,pm=new oa;class Hr{constructor(e=0,t=0,r=0,o=Hr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],d=o[4],p=o[8],u=o[1],f=o[5],x=o[9],v=o[2],_=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(Ft(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-d,l)):(this._x=Math.atan2(_,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(u,f)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-d,f)):(this._y=0,this._z=Math.atan2(u,l));break;case"ZYX":this._y=Math.asin(-Ft(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(u,l)):(this._x=0,this._z=Math.atan2(-d,f));break;case"YZX":this._z=Math.asin(Ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-x,f),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-Ft(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,f),this._y=Math.atan2(p,l)):(this._x=Math.atan2(-x,M),this._y=0);break;default:gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return hm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pm.setFromEuler(this),this.setFromQuaternion(pm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hr.DEFAULT_ORDER="XYZ";class N0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let F_=0;const mm=new pe,Hs=new oa,tr=new ln,Sl=new pe,ja=new pe,k_=new pe,z_=new oa,gm=new pe(1,0,0),xm=new pe(0,1,0),vm=new pe(0,0,1),_m={type:"added"},O_={type:"removed"},Vs={type:"childadded",child:null},Ju={type:"childremoved",child:null};class Bn extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new pe,t=new Hr,r=new oa,o=new pe(1,1,1);function l(){r.setFromEuler(t,!1)}function d(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new ln},normalMatrix:{value:new vt}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new N0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(gm,e)}rotateY(e){return this.rotateOnAxis(xm,e)}rotateZ(e){return this.rotateOnAxis(vm,e)}translateOnAxis(e,t){return mm.copy(e).applyQuaternion(this.quaternion),this.position.add(mm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gm,e)}translateY(e){return this.translateOnAxis(xm,e)}translateZ(e){return this.translateOnAxis(vm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Sl.copy(e):Sl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ja.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tr.lookAt(ja,Sl,this.up):tr.lookAt(Sl,ja,this.up),this.quaternion.setFromRotationMatrix(tr),o&&(tr.extractRotation(o.matrixWorld),Hs.setFromRotationMatrix(tr),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Vt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_m),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):Vt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(O_),Ju.child=e,this.dispatchEvent(Ju),Ju.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(tr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_m),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectByProperty(e,t);if(d!==void 0)return d}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,d=o.length;l<d;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ja,e,k_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ja,z_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let d=0,p=l.length;d<p;d++)l[d].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(p=>({...p})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(p,u){return p[u.uuid]===void 0&&(p[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const u=p.shapes;if(Array.isArray(u))for(let f=0,x=u.length;f<x;f++){const v=u[f];l(e.shapes,v)}else l(e.shapes,u)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let u=0,f=this.material.length;u<f;u++)p.push(l(e.materials,this.material[u]));o.material=p}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let p=0;p<this.children.length;p++)o.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let p=0;p<this.animations.length;p++){const u=this.animations[p];o.animations.push(l(e.animations,u))}}if(t){const p=d(e.geometries),u=d(e.materials),f=d(e.textures),x=d(e.images),v=d(e.shapes),_=d(e.skeletons),M=d(e.animations),b=d(e.nodes);p.length>0&&(r.geometries=p),u.length>0&&(r.materials=u),f.length>0&&(r.textures=f),x.length>0&&(r.images=x),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=o,r;function d(p){const u=[];for(const f in p){const x=p[f];delete x.metadata,u.push(x)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Bn.DEFAULT_UP=new pe(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Za extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const B_={type:"move"};class Qu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Za,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Za,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new pe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new pe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Za,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new pe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new pe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,d=null;const p=this._targetRay,u=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){d=!0;for(const C of e.hand.values()){const y=t.getJointPose(C,r),S=this._getHandJoint(f,C);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const x=f.joints["index-finger-tip"],v=f.joints["thumb-tip"],_=x.position.distanceTo(v.position),M=.02,b=.005;f.inputState.pinching&&_>M+b?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&_<=M-b&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(u.matrix.fromArray(l.transform.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale),u.matrixWorldNeedsUpdate=!0,l.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(l.linearVelocity)):u.hasLinearVelocity=!1,l.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(l.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(B_)))}return p!==null&&(p.visible=o!==null),u!==null&&(u.visible=l!==null),f!==null&&(f.visible=d!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Za;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const P0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rr={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function ed(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ct{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Ut.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ut.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Ut.workingColorSpace){if(e=b_(e,1),t=Ft(t,0,1),r=Ft(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,d=2*r-l;this.r=ed(d,l,e+1/3),this.g=ed(d,l,e),this.b=ed(d,l,e-1/3)}return Ut.colorSpaceToWorking(this,o),this}setStyle(e,t=si){function r(l){l!==void 0&&parseFloat(l)<1&&gt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const d=o[1],p=o[2];switch(d){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(p))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(p))return r(l[4]),this.setRGB(Math.min(100,parseFloat(l[1]))/100,Math.min(100,parseFloat(l[2]))/100,Math.min(100,parseFloat(l[3]))/100,t);break;case"hsl":case"hsla":if(l=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(p))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:gt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],d=l.length;if(d===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(d===6)return this.setHex(parseInt(l,16),t);gt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=si){const r=P0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):gt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return Ut.workingToColorSpace(kn.copy(this),e),Math.round(Ft(kn.r*255,0,255))*65536+Math.round(Ft(kn.g*255,0,255))*256+Math.round(Ft(kn.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ut.workingColorSpace){Ut.workingToColorSpace(kn.copy(this),t);const r=kn.r,o=kn.g,l=kn.b,d=Math.max(r,o,l),p=Math.min(r,o,l);let u,f;const x=(p+d)/2;if(p===d)u=0,f=0;else{const v=d-p;switch(f=x<=.5?v/(d+p):v/(2-d-p),d){case r:u=(o-l)/v+(o<l?6:0);break;case o:u=(l-r)/v+2;break;case l:u=(r-o)/v+4;break}u/=6}return e.h=u,e.s=f,e.l=x,e}getRGB(e,t=Ut.workingColorSpace){return Ut.workingToColorSpace(kn.copy(this),t),e.r=kn.r,e.g=kn.g,e.b=kn.b,e}getStyle(e=si){Ut.workingToColorSpace(kn.copy(this),e);const t=kn.r,r=kn.g,o=kn.b;return e!==si?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Rr),this.setHSL(Rr.h+e,Rr.s+t,Rr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Rr),e.getHSL(Ml);const r=$u(Rr.h,Ml.h,t),o=$u(Rr.s,Ml.s,t),l=$u(Rr.l,Ml.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new Ct;Ct.NAMES=P0;class G_ extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hr,this.environmentIntensity=1,this.environmentRotation=new Hr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const wi=new pe,nr=new pe,td=new pe,ir=new pe,Ws=new pe,js=new pe,ym=new pe,nd=new pe,id=new pe,rd=new pe,sd=new on,ad=new on,od=new on;class Ai{constructor(e=new pe,t=new pe,r=new pe){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),wi.subVectors(e,t),o.cross(wi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){wi.subVectors(o,t),nr.subVectors(r,t),td.subVectors(e,t);const d=wi.dot(wi),p=wi.dot(nr),u=wi.dot(td),f=nr.dot(nr),x=nr.dot(td),v=d*f-p*p;if(v===0)return l.set(0,0,0),null;const _=1/v,M=(f*u-p*x)*_,b=(d*x-p*u)*_;return l.set(1-M-b,b,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,ir)===null?!1:ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(e,t,r,o,l,d,p,u){return this.getBarycoord(e,t,r,o,ir)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(l,ir.x),u.addScaledVector(d,ir.y),u.addScaledVector(p,ir.z),u)}static getInterpolatedAttribute(e,t,r,o,l,d){return sd.setScalar(0),ad.setScalar(0),od.setScalar(0),sd.fromBufferAttribute(e,t),ad.fromBufferAttribute(e,r),od.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(sd,l.x),d.addScaledVector(ad,l.y),d.addScaledVector(od,l.z),d}static isFrontFacing(e,t,r,o){return wi.subVectors(r,t),nr.subVectors(e,t),wi.cross(nr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),wi.cross(nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ai.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Ai.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let d,p;Ws.subVectors(o,r),js.subVectors(l,r),nd.subVectors(e,r);const u=Ws.dot(nd),f=js.dot(nd);if(u<=0&&f<=0)return t.copy(r);id.subVectors(e,o);const x=Ws.dot(id),v=js.dot(id);if(x>=0&&v<=x)return t.copy(o);const _=u*v-x*f;if(_<=0&&u>=0&&x<=0&&u-x>0)return d=u/(u-x),t.copy(r).addScaledVector(Ws,d);rd.subVectors(e,l);const M=Ws.dot(rd),b=js.dot(rd);if(b>=0&&M<=b)return t.copy(l);const C=M*f-u*b;if(C<=0&&f>=0&&b<=0)return p=f/(f-b),t.copy(r).addScaledVector(js,p);const y=x*b-M*v;if(y<=0&&v-x>=0&&M-b>=0)return ym.subVectors(l,o),p=(v-x)/(v-x+(M-b)),t.copy(o).addScaledVector(ym,p);const S=1/(y+C+_);return d=C*S,p=_*S,t.copy(r).addScaledVector(Ws,d).addScaledVector(js,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class co{constructor(e=new pe(1/0,1/0,1/0),t=new pe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let d=0,p=l.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,bi):bi.fromBufferAttribute(l,d),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),wl.copy(r.boundingBox)),wl.applyMatrix4(e.matrixWorld),this.union(wl)}const o=e.children;for(let l=0,d=o.length;l<d;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xa),bl.subVectors(this.max,Xa),Xs.subVectors(e.a,Xa),$s.subVectors(e.b,Xa),Ys.subVectors(e.c,Xa),Nr.subVectors($s,Xs),Pr.subVectors(Ys,$s),rs.subVectors(Xs,Ys);let t=[0,-Nr.z,Nr.y,0,-Pr.z,Pr.y,0,-rs.z,rs.y,Nr.z,0,-Nr.x,Pr.z,0,-Pr.x,rs.z,0,-rs.x,-Nr.y,Nr.x,0,-Pr.y,Pr.x,0,-rs.y,rs.x,0];return!ld(t,Xs,$s,Ys,bl)||(t=[1,0,0,0,1,0,0,0,1],!ld(t,Xs,$s,Ys,bl))?!1:(El.crossVectors(Nr,Pr),t=[El.x,El.y,El.z],ld(t,Xs,$s,Ys,bl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const rr=[new pe,new pe,new pe,new pe,new pe,new pe,new pe,new pe],bi=new pe,wl=new co,Xs=new pe,$s=new pe,Ys=new pe,Nr=new pe,Pr=new pe,rs=new pe,Xa=new pe,bl=new pe,El=new pe,ss=new pe;function ld(s,e,t,r,o){for(let l=0,d=s.length-3;l<=d;l+=3){ss.fromArray(s,l);const p=o.x*Math.abs(ss.x)+o.y*Math.abs(ss.y)+o.z*Math.abs(ss.z),u=e.dot(ss),f=t.dot(ss),x=r.dot(ss);if(Math.max(-Math.max(u,f,x),Math.min(u,f,x))>p)return!1}return!0}const pn=new pe,Tl=new kt;let H_=0;class us extends ps{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:H_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=__,this.updateRanges=[],this.gpuType=Gi,this.version=0,this._normalizationScale=e!==void 0?yf(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Tl.fromBufferAttribute(this,t),Tl.applyMatrix3(e),this.setXY(t,Tl.x,Tl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix3(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):T_(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):A_(e,this.array)}}class L0 extends us{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class D0 extends us{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class jn extends us{constructor(e,t,r){super(new Float32Array(e),t,r)}}const V_=new co,$a=new pe,cd=new pe;class Mf{constructor(e=new pe,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):V_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,d=e.length;l<d;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$a.subVectors(e,this.center);const t=$a.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector($a,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($a.copy(e.center).add(cd)),this.expandByPoint($a.copy(e.center).sub(cd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let W_=0;const pi=new ln,ud=new Bn,qs=new pe,ri=new co,Ya=new co,An=new pe;class cr extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=lo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(y_(e)?D0:L0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new vt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,r){return pi.makeTranslation(e,t,r),this.applyMatrix4(pi),this}scale(e,t,r){return pi.makeScale(e,t,r),this.applyMatrix4(pi),this}lookAt(e){return ud.lookAt(e),ud.updateMatrix(),this.applyMatrix4(ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const d=e[o];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new jn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new co);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new pe(-1/0,-1/0,-1/0),new pe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];ri.setFromBufferAttribute(l),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new pe,1/0);return}if(e){const r=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let l=0,d=t.length;l<d;l++){const p=t[l];Ya.setFromBufferAttribute(p),this.morphTargetsRelative?(An.addVectors(ri.min,Ya.min),ri.expandByPoint(An),An.addVectors(ri.max,Ya.max),ri.expandByPoint(An)):(ri.expandByPoint(Ya.min),ri.expandByPoint(Ya.max))}ri.getCenter(r);let o=0;for(let l=0,d=e.count;l<d;l++)An.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(An));if(t)for(let l=0,d=t.length;l<d;l++){const p=t[l],u=this.morphTargetsRelative;for(let f=0,x=p.count;f<x;f++)An.fromBufferAttribute(p,f),u&&(qs.fromBufferAttribute(e,f),An.add(qs)),o=Math.max(o,r.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new us(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const p=[],u=[],f=new Uint8Array(r.count);for(let te=0;te<r.count;te++)p[te]=new pe,u[te]=new pe;const x=new pe,v=new pe,_=new pe,M=new kt,b=new kt,C=new kt,y=new pe,S=new pe;function R(te,$,H){f[te]=f[$]=f[H]=1,x.fromBufferAttribute(r,te),v.fromBufferAttribute(r,$),_.fromBufferAttribute(r,H),M.fromBufferAttribute(l,te),b.fromBufferAttribute(l,$),C.fromBufferAttribute(l,H),v.sub(x),_.sub(x),b.sub(M),C.sub(M);const W=1/(b.x*C.y-C.x*b.y);isFinite(W)&&(y.copy(v).multiplyScalar(C.y).addScaledVector(_,-b.y).multiplyScalar(W),S.copy(_).multiplyScalar(b.x).addScaledVector(v,-C.x).multiplyScalar(W),p[te].add(y),p[$].add(y),p[H].add(y),u[te].add(S),u[$].add(S),u[H].add(S))}let k=this.groups;k.length===0&&(k=[{start:0,count:e.count}]);for(let te=0,$=k.length;te<$;++te){const H=k[te],W=H.start,V=H.count;for(let G=W,O=W+V;G<O;G+=3)R(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const P=new pe,U=new pe,D=new pe,w=new pe;function N(te){D.fromBufferAttribute(o,te),w.copy(D);const $=p[te];P.copy($),P.sub(D.multiplyScalar(D.dot($))).normalize(),U.crossVectors(w,$);const W=U.dot(u[te])<0?-1:1;d.setXYZW(te,P.x,P.y,P.z,W)}for(let te=0,$=r.count;te<$;++te)f[te]&&N(te);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new us(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,M=r.count;_<M;_++)r.setXYZ(_,0,0,0);const o=new pe,l=new pe,d=new pe,p=new pe,u=new pe,f=new pe,x=new pe,v=new pe;if(e)for(let _=0,M=e.count;_<M;_+=3){const b=e.getX(_+0),C=e.getX(_+1),y=e.getX(_+2);o.fromBufferAttribute(t,b),l.fromBufferAttribute(t,C),d.fromBufferAttribute(t,y),x.subVectors(d,l),v.subVectors(o,l),x.cross(v),p.fromBufferAttribute(r,b),u.fromBufferAttribute(r,C),f.fromBufferAttribute(r,y),p.add(x),u.add(x),f.add(x),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(C,u.x,u.y,u.z),r.setXYZ(y,f.x,f.y,f.z)}else for(let _=0,M=t.count;_<M;_+=3)o.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),d.fromBufferAttribute(t,_+2),x.subVectors(d,l),v.subVectors(o,l),x.cross(v),r.setXYZ(_+0,x.x,x.y,x.z),r.setXYZ(_+1,x.x,x.y,x.z),r.setXYZ(_+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)An.fromBufferAttribute(e,t),An.normalize(),e.setXYZ(t,An.x,An.y,An.z)}toNonIndexed(){function e(p,u){const f=p.array,x=p.itemSize,v=p.normalized,_=new f.constructor(u.length*x);let M=0,b=0;for(let C=0,y=u.length;C<y;C++){p.isInterleavedBufferAttribute?M=u[C]*p.data.stride+p.offset:M=u[C]*x;for(let S=0;S<x;S++)_[b++]=f[M++]}return new us(_,x,v)}if(this.index===null)return gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cr,r=this.index.array,o=this.attributes;for(const p in o){const u=o[p],f=e(u,r);t.setAttribute(p,f)}const l=this.morphAttributes;for(const p in l){const u=[],f=l[p];for(let x=0,v=f.length;x<v;x++){const _=f[x],M=e(_,r);u.push(M)}t.morphAttributes[p]=u}t.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,u=d.length;p<u;p++){const f=d[p];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const u=this.parameters;for(const f in u)u[f]!==void 0&&(e[f]=u[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const u in r){const f=r[u];e.data.attributes[u]=f.toJSON(e.data)}const o={};let l=!1;for(const u in this.morphAttributes){const f=this.morphAttributes[u],x=[];for(let v=0,_=f.length;v<_;v++){const M=f[v];x.push(M.toJSON(e.data))}x.length>0&&(o[u]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const f in o){const x=o[f];this.setAttribute(f,x.clone(t))}const l=e.morphAttributes;for(const f in l){const x=[],v=l[f];for(let _=0,M=v.length;_<M;_++)x.push(v[_].clone(t));this.morphAttributes[f]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let f=0,x=d.length;f<x;f++){const v=d[f];this.addGroup(v.start,v.count,v.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dd=new pe,j_=new pe,X_=new vt;class Dr{constructor(e=new pe(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=dd.subVectors(r,t).cross(j_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(dd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(d<0||d>1)?null:t.copy(e.start).addScaledVector(o,d)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||X_.getNormalMatrix(e),o=this.coplanarPoint(dd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let $_=0;class uo extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=lo(),this.name="",this.type="Material",this.blending=Qa,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=o0,this.blendDst=l0,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=h_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ju,this.stencilZFail=ju,this.stencilZPass=ju,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){gt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){gt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const d=[];for(const p in l){const u=l[p];delete u.metadata,d.push(u)}return d}if(t){const l=o(e.textures),d=o(e.images);l.length>0&&(r.textures=l),d.length>0&&(r.images=d)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ct().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Dr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new kt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new kt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const sr=new pe,fd=new pe,Al=new pe,Cl=new pe;class Y_{constructor(e=new pe,t=new pe(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sr.copy(this.origin).addScaledVector(this.direction,t),sr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){fd.copy(e).add(t).multiplyScalar(.5),Al.copy(t).sub(e).normalize(),Cl.copy(this.origin).sub(fd);const l=e.distanceTo(t)*.5,d=-this.direction.dot(Al),p=Cl.dot(this.direction),u=-Cl.dot(Al),f=Cl.lengthSq(),x=Math.abs(1-d*d);let v,_,M,b;if(x>0)if(v=d*u-p,_=d*p-u,b=l*x,v>=0)if(_>=-b)if(_<=b){const C=1/x;v*=C,_*=C,M=v*(v+d*_+2*p)+_*(d*v+_+2*u)+f}else _=l,v=Math.max(0,-(d*_+p)),M=-v*v+_*(_+2*u)+f;else _=-l,v=Math.max(0,-(d*_+p)),M=-v*v+_*(_+2*u)+f;else _<=-b?(v=Math.max(0,-(-d*l+p)),_=v>0?-l:Math.min(Math.max(-l,-u),l),M=-v*v+_*(_+2*u)+f):_<=b?(v=0,_=Math.min(Math.max(-l,-u),l),M=_*(_+2*u)+f):(v=Math.max(0,-(d*l+p)),_=v>0?l:Math.min(Math.max(-l,-u),l),M=-v*v+_*(_+2*u)+f);else _=d>0?-l:l,v=Math.max(0,-(d*_+p)),M=-v*v+_*(_+2*u)+f;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(fd).addScaledVector(Al,_),M}intersectSphere(e,t){if(e.radius<0)return null;sr.subVectors(e.center,this.origin);const r=sr.dot(this.direction),o=sr.dot(sr)-r*r,l=e.radius*e.radius;if(o>l)return null;const d=Math.sqrt(l-o),p=r-d,u=r+d;return u<0?null:p<0?this.at(u,t):this.at(p,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,d,p,u;const f=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,_=this.origin;return f>=0?(r=(e.min.x-_.x)*f,o=(e.max.x-_.x)*f):(r=(e.max.x-_.x)*f,o=(e.min.x-_.x)*f),x>=0?(l=(e.min.y-_.y)*x,d=(e.max.y-_.y)*x):(l=(e.max.y-_.y)*x,d=(e.min.y-_.y)*x),r>d||l>o||((l>r||isNaN(r))&&(r=l),(d<o||isNaN(o))&&(o=d),v>=0?(p=(e.min.z-_.z)*v,u=(e.max.z-_.z)*v):(p=(e.max.z-_.z)*v,u=(e.min.z-_.z)*v),r>u||p>o)||((p>r||r!==r)&&(r=p),(u<o||o!==o)&&(o=u),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,sr)!==null}intersectTriangle(e,t,r,o,l){const d=this.origin,p=this.direction,u=p.x,f=p.y,x=p.z,v=e.x-d.x,_=e.y-d.y,M=e.z-d.z,b=t.x-d.x,C=t.y-d.y,y=t.z-d.z,S=r.x-d.x,R=r.y-d.y,k=r.z-d.z,P=Math.abs(u),U=Math.abs(f),D=Math.abs(x);let w,N,te,$,H,W,V,G,O,re,K,X;if(P>=U&&P>=D?(te=u,W=v,O=b,X=S,u>=0?(w=f,N=x,$=_,H=M,V=C,G=y,re=R,K=k):(w=x,N=f,$=M,H=_,V=y,G=C,re=k,K=R)):U>=D?(te=f,W=_,O=C,X=R,f>=0?(w=x,N=u,$=M,H=v,V=y,G=b,re=k,K=S):(w=u,N=x,$=v,H=M,V=b,G=y,re=S,K=k)):(te=x,W=M,O=y,X=k,x>=0?(w=u,N=f,$=v,H=_,V=b,G=C,re=S,K=R):(w=f,N=u,$=_,H=v,V=C,G=b,re=R,K=S)),te===0)return null;const j=w/te,Y=N/te,L=1/te,ee=$-j*W,be=H-Y*W,F=V-j*O,ve=G-Y*O,Me=re-j*X,Re=K-Y*X,ye=Me*ve-Re*F,Ie=ee*Re-be*Me,lt=F*be-ve*ee;if(o){if(ye<0||Ie<0||lt<0)return null}else if((ye<0||Ie<0||lt<0)&&(ye>0||Ie>0||lt>0))return null;const He=ye+Ie+lt;if(He===0)return null;const Ee=L*(ye*W+Ie*O+lt*X);return(He>0?Ee<0:Ee>0)?null:this.at(Ee/He,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class I0 extends uo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hr,this.combine=c0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Sm=new ln,as=new Y_,Rl=new Mf,Mm=new pe,Nl=new pe,Pl=new pe,Ll=new pe,hd=new pe,Dl=new pe,wm=new pe,Il=new pe;class Wn extends Bn{constructor(e=new cr,t=new I0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=o.length;l<d;l++){const p=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,d=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const p=this.morphTargetInfluences;if(l&&p){Dl.set(0,0,0);for(let u=0,f=l.length;u<f;u++){const x=p[u],v=l[u];x!==0&&(hd.fromBufferAttribute(v,e),d?Dl.addScaledVector(hd,x):Dl.addScaledVector(hd.sub(t),x))}t.add(Dl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Rl.copy(r.boundingSphere),Rl.applyMatrix4(l),as.copy(e.ray).recast(e.near),!(Rl.containsPoint(as.origin)===!1&&(as.intersectSphere(Rl,Mm)===null||as.origin.distanceToSquared(Mm)>(e.far-e.near)**2))&&(Sm.copy(l).invert(),as.copy(e.ray).applyMatrix4(Sm),!(r.boundingBox!==null&&as.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,r){let o;const l=this.geometry,d=this.material,p=l.index,u=l.attributes.position,f=l.attributes.uv,x=l.attributes.uv1,v=l.attributes.normal,_=l.groups,M=l.drawRange;if(p!==null)if(Array.isArray(d))for(let b=0,C=_.length;b<C;b++){const y=_[b],S=d[y.materialIndex],R=Math.max(y.start,M.start),k=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let P=R,U=k;P<U;P+=3){const D=p.getX(P),w=p.getX(P+1),N=p.getX(P+2);o=Ul(this,S,e,r,f,x,v,D,w,N),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const b=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let y=b,S=C;y<S;y+=3){const R=p.getX(y),k=p.getX(y+1),P=p.getX(y+2);o=Ul(this,d,e,r,f,x,v,R,k,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(u!==void 0)if(Array.isArray(d))for(let b=0,C=_.length;b<C;b++){const y=_[b],S=d[y.materialIndex],R=Math.max(y.start,M.start),k=Math.min(u.count,Math.min(y.start+y.count,M.start+M.count));for(let P=R,U=k;P<U;P+=3){const D=P,w=P+1,N=P+2;o=Ul(this,S,e,r,f,x,v,D,w,N),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const b=Math.max(0,M.start),C=Math.min(u.count,M.start+M.count);for(let y=b,S=C;y<S;y+=3){const R=y,k=y+1,P=y+2;o=Ul(this,d,e,r,f,x,v,R,k,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function q_(s,e,t,r,o,l,d,p){let u;if(e.side===zn?u=r.intersectTriangle(d,l,o,!0,p):u=r.intersectTriangle(o,l,d,e.side===fs,p),u===null)return null;Il.copy(p),Il.applyMatrix4(s.matrixWorld);const f=t.ray.origin.distanceTo(Il);return f<t.near||f>t.far?null:{distance:f,point:Il.clone(),object:s}}function Ul(s,e,t,r,o,l,d,p,u,f){s.getVertexPosition(p,Nl),s.getVertexPosition(u,Pl),s.getVertexPosition(f,Ll);const x=q_(s,e,t,r,Nl,Pl,Ll,wm);if(x){const v=new pe;Ai.getBarycoord(wm,Nl,Pl,Ll,v),o&&(x.uv=Ai.getInterpolatedAttribute(o,p,u,f,v,new kt)),l&&(x.uv1=Ai.getInterpolatedAttribute(l,p,u,f,v,new kt)),d&&(x.normal=Ai.getInterpolatedAttribute(d,p,u,f,v,new pe),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const _={a:p,b:u,c:f,normal:new pe,materialIndex:0};Ai.getNormal(Nl,Pl,Ll,_.normal),x.face=_,x.barycoord=v}return x}class K_ extends On{constructor(e=null,t=1,r=1,o,l,d,p,u,f=Nn,x=Nn,v,_){super(null,d,p,u,f,x,o,l,v,_),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const os=new Mf,Z_=new kt(.5,.5),Fl=new pe;class oo{constructor(e=new Dr,t=new Dr,r=new Dr,o=new Dr,l=new Dr,d=new Dr){this.planes=[e,t,r,o,l,d]}set(e,t,r,o,l,d){const p=this.planes;return p[0].copy(e),p[1].copy(t),p[2].copy(r),p[3].copy(o),p[4].copy(l),p[5].copy(d),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ci,r=!1){const o=this.planes,l=e.elements,d=l[0],p=l[1],u=l[2],f=l[3],x=l[4],v=l[5],_=l[6],M=l[7],b=l[8],C=l[9],y=l[10],S=l[11],R=l[12],k=l[13],P=l[14],U=l[15];if(o[0].setComponents(f-d,M-x,S-b,U-R).normalize(),o[1].setComponents(f+d,M+x,S+b,U+R).normalize(),o[2].setComponents(f+p,M+v,S+C,U+k).normalize(),o[3].setComponents(f-p,M-v,S-C,U-k).normalize(),r)o[4].setComponents(u,_,y,P).normalize(),o[5].setComponents(f-u,M-_,S-y,U-P).normalize();else if(o[4].setComponents(f-u,M-_,S-y,U-P).normalize(),t===Ci)o[5].setComponents(f+u,M+_,S+y,U+P).normalize();else if(t===ao)o[5].setComponents(u,_,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){os.center.set(0,0,0);const t=Z_.distanceTo(e.center);return os.radius=.7071067811865476+t,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Fl.x=o.normal.x>0?e.max.x:e.min.x,Fl.y=o.normal.y>0?e.max.y:e.min.y,Fl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Fl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const bm=new ln;class wf{constructor(){this.coordinateSystem=Ci,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let o=0;o<t.length;o++){const l=t[o];bm.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),r[o]===void 0&&(r[o]=new oo),r[o].setFromProjectionMatrix(bm,l.coordinateSystem,l.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let o=0;o<e._count;o++)t[o]===void 0&&(t[o]=new oo),t[o].copy(r[o]);return this._count=e._count,this}clone(){return new wf().copy(this)}}class U0 extends On{constructor(e=[],t=na,r,o,l,d,p,u,f,x){super(e,t,r,o,l,d,p,u,f,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bf extends On{constructor(e,t,r,o,l,d,p,u,f){super(e,t,r,o,l,d,p,u,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ra extends On{constructor(e,t,r=Wi,o,l,d,p=Nn,u=Nn,f,x=Gr,v=1){if(x!==Gr&&x!==zr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:v};super(_,o,l,d,p,u,x,r,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class F0 extends ra{constructor(e,t=Wi,r=na,o,l,d=Nn,p=Nn,u,f=Gr){const x={width:e,height:e,depth:1},v=[x,x,x,x,x,x];super(e,e,t,r,o,l,d,p,u,f),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class k0 extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fo extends cr{constructor(e=1,t=1,r=1,o=1,l=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:d};const p=this;o=Math.floor(o),l=Math.floor(l),d=Math.floor(d);const u=[],f=[],x=[],v=[];let _=0,M=0;b("z","y","x",-1,-1,r,t,e,d,l,0),b("z","y","x",1,-1,r,t,-e,d,l,1),b("x","z","y",1,1,e,r,t,o,d,2),b("x","z","y",1,-1,e,r,-t,o,d,3),b("x","y","z",1,-1,e,t,r,o,l,4),b("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(u),this.setAttribute("position",new jn(f,3)),this.setAttribute("normal",new jn(x,3)),this.setAttribute("uv",new jn(v,2));function b(C,y,S,R,k,P,U,D,w,N,te){const $=P/w,H=U/N,W=P/2,V=U/2,G=D/2,O=w+1,re=N+1;let K=0,X=0;const j=new pe;for(let Y=0;Y<re;Y++){const L=Y*H-V;for(let ee=0;ee<O;ee++){const be=ee*$-W;j[C]=be*R,j[y]=L*k,j[S]=G,f.push(j.x,j.y,j.z),j[C]=0,j[y]=0,j[S]=D>0?1:-1,x.push(j.x,j.y,j.z),v.push(ee/w),v.push(1-Y/N),K+=1}}for(let Y=0;Y<N;Y++)for(let L=0;L<w;L++){const ee=_+L+O*Y,be=_+L+O*(Y+1),F=_+(L+1)+O*(Y+1),ve=_+(L+1)+O*Y;u.push(ee,be,ve),u.push(be,F,ve),X+=6}p.addGroup(M,X,te),M+=X,_+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ho extends cr{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,d=t/2,p=Math.floor(r),u=Math.floor(o),f=p+1,x=u+1,v=e/p,_=t/u,M=[],b=[],C=[],y=[];for(let S=0;S<x;S++){const R=S*_-d;for(let k=0;k<f;k++){const P=k*v-l;b.push(P,-R,0),C.push(0,0,1),y.push(k/p),y.push(1-S/u)}}for(let S=0;S<u;S++)for(let R=0;R<p;R++){const k=R+f*S,P=R+f*(S+1),U=R+1+f*(S+1),D=R+1+f*S;M.push(k,P,D),M.push(P,U,D)}this.setIndex(M),this.setAttribute("position",new jn(b,3)),this.setAttribute("normal",new jn(C,3)),this.setAttribute("uv",new jn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ho(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ef extends cr{constructor(e=.5,t=1,r=32,o=1,l=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:d},r=Math.max(3,r),o=Math.max(1,o);const p=[],u=[],f=[],x=[];let v=e;const _=(t-e)/o,M=new pe,b=new kt;for(let C=0;C<=o;C++){for(let y=0;y<=r;y++){const S=l+y/r*d;M.x=v*Math.cos(S),M.y=v*Math.sin(S),u.push(M.x,M.y,M.z),f.push(0,0,1),b.x=(M.x/t+1)/2,b.y=(M.y/t+1)/2,x.push(b.x,b.y)}v+=_}for(let C=0;C<o;C++){const y=C*(r+1);for(let S=0;S<r;S++){const R=S+y,k=R,P=R+r+1,U=R+r+2,D=R+1;p.push(k,P,D),p.push(P,U,D)}}this.setIndex(p),this.setAttribute("position",new jn(u,3)),this.setAttribute("normal",new jn(f,3)),this.setAttribute("uv",new jn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ef(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ir extends cr{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,d=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:d,thetaLength:p},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const u=Math.min(d+p,Math.PI);let f=0;const x=[],v=new pe,_=new pe,M=[],b=[],C=[],y=[];for(let S=0;S<=r;S++){const R=[],k=S/r,P=d+k*p,U=e*Math.cos(P),D=Math.sqrt(e*e-U*U);let w=0;S===0&&d===0?w=.5/t:S===r&&u===Math.PI&&(w=-.5/t);for(let N=0;N<=t;N++){const te=N/t,$=o+te*l;v.x=-D*Math.cos($),v.y=U,v.z=D*Math.sin($),b.push(v.x,v.y,v.z),_.copy(v).normalize(),C.push(_.x,_.y,_.z),y.push(te+w,1-k),R.push(f++)}x.push(R)}for(let S=0;S<r;S++)for(let R=0;R<t;R++){const k=x[S][R+1],P=x[S][R],U=x[S+1][R],D=x[S+1][R+1];(S!==0||d>0)&&M.push(k,P,D),(S!==r-1||u<Math.PI)&&M.push(P,U,D)}this.setIndex(M),this.setAttribute("position",new jn(b,3)),this.setAttribute("normal",new jn(C,3)),this.setAttribute("uv",new jn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ir(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function sa(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(Em(o))o.isRenderTargetTexture?(gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Em(o[0])){const l=[];for(let d=0,p=o.length;d<p;d++)l[d]=o[d].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Vn(s){const e={};for(let t=0;t<s.length;t++){const r=sa(s[t]);for(const o in r)e[o]=r[o]}return e}function Em(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function J_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function z0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const Q_={clone:sa,merge:Vn};var ey=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ty=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends uo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ey,this.fragmentShader=ty,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sa(e.uniforms),this.uniformsGroups=J_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?t.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[o]={type:"m4",value:d.toArray()}:t.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new Ct().setHex(o.value);break;case"v2":this.uniforms[r].value=new kt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new pe().fromArray(o.value);break;case"v4":this.uniforms[r].value=new on().fromArray(o.value);break;case"m3":this.uniforms[r].value=new vt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new ln().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class ny extends Ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pd extends uo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rf,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class iy extends uo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=d_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ry extends uo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class O0 extends Bn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const md=new ln,Tm=new pe,Am=new pe;class sy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new ln,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oo,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Tm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tm),Am.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Am),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,o){md.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(md,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,d=o?o.z/l.x:1,p=o?o.w/l.y:1,u=o?o.x/l.x:0,f=o?o.y/l.y:0;e.coordinateSystem===ao||e.reversedDepth?t.set(.5*d,0,0,.5*d+u,0,.5*p,0,.5*p+f,0,0,1,0,0,0,0,1):t.set(.5*d,0,0,.5*d+u,0,.5*p,0,.5*p+f,0,0,.5,.5,0,0,0,1),t.multiply(md)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const kl=new pe,zl=new oa,ki=new pe;class B0 extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(kl,zl,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kl,zl,ki.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(kl,zl,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kl,zl,ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Lr=new pe,Cm=new kt,Rm=new kt;class Ti extends B0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sf*2*Math.atan(Math.tan(Xu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z),Lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z)}getViewSize(e,t){return this.getViewBounds(e,Cm,Rm),t.subVectors(Rm,Cm)}setViewOffset(e,t,r,o,l,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xu*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const u=d.fullWidth,f=d.fullHeight;l+=d.offsetX*o/u,t-=d.offsetY*r/f,o*=d.width/u,r*=d.height/f}const p=this.filmOffset;p!==0&&(l+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class G0 extends B0{constructor(e=-1,t=1,r=1,o=-1,l=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,d=r+e,p=o+t,u=o-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=f*this.view.offsetX,d=l+f*this.view.width,p-=x*this.view.offsetY,u=p-x*this.view.height}this.projectionMatrix.makeOrthographic(l,d,p,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ay extends sy{constructor(){super(new G0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oy extends O0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.target=new Bn,this.shadow=new ay}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class ly extends O0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ks=-90,Zs=1;class af extends Bn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ti(Ks,Zs,e,t);o.layers=this.layers,this.add(o);const l=new Ti(Ks,Zs,e,t);l.layers=this.layers,this.add(l);const d=new Ti(Ks,Zs,e,t);d.layers=this.layers,this.add(d);const p=new Ti(Ks,Zs,e,t);p.layers=this.layers,this.add(p);const u=new Ti(Ks,Zs,e,t);u.layers=this.layers,this.add(u);const f=new Ti(Ks,Zs,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,d,p,u]=t;for(const f of t)this.remove(f);if(e===Ci)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===ao)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,d,p,u,f,x]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),r.texture.mipmapsAutoUpdate=C,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,x),e.setRenderTarget(v,_,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class cy extends Ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Nm(s,e,t,r){const o=uy(r);switch(t){case M0:return s*e;case b0:return s*e/o.components*o.byteLength;case xf:return s*e/o.components*o.byteLength;case hs:return s*e*2/o.components*o.byteLength;case vf:return s*e*2/o.components*o.byteLength;case w0:return s*e*3/o.components*o.byteLength;case Hi:return s*e*4/o.components*o.byteLength;case _f:return s*e*4/o.components*o.byteLength;case Hl:case Vl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Wl:case jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cd:case Nd:return Math.max(s,16)*Math.max(e,8)/4;case Ad:case Rd:return Math.max(s,8)*Math.max(e,8)/2;case Pd:case Ld:case Id:case Ud:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Dd:case Zl:case Fd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Od:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case jd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case $d:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Yd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case qd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Kd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Zd:case Jd:case Qd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ef:case tf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Jl:case nf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function uy(s){switch(s){case ai:case v0:return{byteLength:1,components:1};case so:case _0:case ji:return{byteLength:2,components:1};case mf:case gf:return{byteLength:2,components:4};case Wi:case pf:case Gi:return{byteLength:4,components:1};case y0:case S0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hf}}));typeof window<"u"&&(window.__THREE__?gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function H0(){let s=null,e=!1,t=null,r=null;function o(l,d){r=s.requestAnimationFrame(o),t(l,d)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function dy(s){const e=new WeakMap;function t(p,u){const f=p.array,x=p.usage,v=f.byteLength,_=s.createBuffer();s.bindBuffer(u,_),s.bufferData(u,f,x),p.onUploadCallback();let M;if(f instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)M=s.HALF_FLOAT;else if(f instanceof Uint16Array)p.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)M=s.SHORT;else if(f instanceof Uint32Array)M=s.UNSIGNED_INT;else if(f instanceof Int32Array)M=s.INT;else if(f instanceof Int8Array)M=s.BYTE;else if(f instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:M,bytesPerElement:f.BYTES_PER_ELEMENT,version:p.version,size:v}}function r(p,u,f){const x=u.array,v=u.updateRanges;if(s.bindBuffer(f,p),v.length===0)s.bufferSubData(f,0,x);else{v.sort((M,b)=>M.start-b.start);let _=0;for(let M=1;M<v.length;M++){const b=v[_],C=v[M];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++_,v[_]=C)}v.length=_+1;for(let M=0,b=v.length;M<b;M++){const C=v[M];s.bufferSubData(f,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}u.clearUpdateRanges()}u.onUploadCallback()}function o(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function l(p){p.isInterleavedBufferAttribute&&(p=p.data);const u=e.get(p);u&&(s.deleteBuffer(u.buffer),e.delete(p))}function d(p,u){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const x=e.get(p);(!x||x.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const f=e.get(p);if(f===void 0)e.set(p,t(p,u));else if(f.version<p.version){if(f.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,p,u),f.version=p.version}}return{get:o,remove:l,update:d}}var fy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hy=`#ifdef USE_ALPHAHASH
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
#endif`,py=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,my=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vy=`#ifdef USE_AOMAP
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
#endif`,_y=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yy=`#ifdef USE_BATCHING
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
#endif`,Sy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,My=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,by=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ey=`#ifdef USE_IRIDESCENCE
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
#endif`,Ty=`#ifdef USE_BUMPMAP
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
#endif`,Ay=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ny=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Py=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ly=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Dy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Iy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Uy=`#define PI 3.141592653589793
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
} // validated`,Fy=`vec3 transformedNormal = objectNormal;
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
#endif`,ky=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Oy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,By=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vy=`#ifdef USE_ENVMAP
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
#endif`,Wy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,jy=`#ifdef USE_ENVMAP
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
#endif`,Xy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$y=`#ifdef USE_ENVMAP
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
#endif`,Yy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ky=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jy=`#ifdef USE_GRADIENTMAP
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
}`,Qy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,iS=`#ifdef USE_ENVMAP
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
#endif`,rS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lS=`PhysicalMaterial material;
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
#endif`,cS=`uniform sampler2D dfgLUT;
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
}`,uS=`
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
#endif`,dS=`#if defined( RE_IndirectDiffuse )
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
#endif`,fS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hS=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,pS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_S=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,SS=`#if defined( USE_POINTS_UV )
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
#endif`,MS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ES=`#if defined( USE_MORPHCOLORS )
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
#endif`,TS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AS=`#ifdef USE_MORPHTARGETS
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
#endif`,CS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,NS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,PS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,IS=`#ifdef USE_NORMALMAP
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
#endif`,US=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,GS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$S=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,KS=`float getShadowMask() {
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
}`,ZS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JS=`#ifdef USE_SKINNING
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
#endif`,QS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e1=`#ifdef USE_SKINNING
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
#endif`,t1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,s1=`#ifdef USE_TRANSMISSION
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
#endif`,a1=`#ifdef USE_TRANSMISSION
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
#endif`,o1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const d1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f1=`uniform sampler2D t2D;
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
}`,h1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p1=`uniform float backgroundBlurriness;
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
}`,m1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x1=`#include <common>
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
}`,v1=`#if DEPTH_PACKING == 3200
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
}`,_1=`#define DISTANCE
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
}`,y1=`#define DISTANCE
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
}`,S1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w1=`uniform float scale;
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
}`,b1=`uniform vec3 diffuse;
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
}`,E1=`#include <common>
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
}`,T1=`uniform vec3 diffuse;
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
}`,A1=`#define LAMBERT
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
}`,C1=`#define LAMBERT
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
}`,R1=`#define MATCAP
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
}`,N1=`#define MATCAP
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
}`,P1=`#define NORMAL
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
}`,L1=`#define NORMAL
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
}`,D1=`#define PHONG
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
}`,I1=`#define PHONG
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
}`,U1=`#define STANDARD
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
}`,F1=`#define STANDARD
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
}`,k1=`#define TOON
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
}`,z1=`#define TOON
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
}`,O1=`uniform float size;
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
}`,B1=`uniform vec3 diffuse;
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
}`,G1=`#include <common>
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
}`,H1=`uniform vec3 color;
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
}`,V1=`uniform float rotation;
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
}`,W1=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:fy,alphahash_pars_fragment:hy,alphamap_fragment:py,alphamap_pars_fragment:my,alphatest_fragment:gy,alphatest_pars_fragment:xy,aomap_fragment:vy,aomap_pars_fragment:_y,batching_pars_vertex:yy,batching_vertex:Sy,begin_vertex:My,beginnormal_vertex:wy,bsdfs:by,iridescence_fragment:Ey,bumpmap_pars_fragment:Ty,clipping_planes_fragment:Ay,clipping_planes_pars_fragment:Cy,clipping_planes_pars_vertex:Ry,clipping_planes_vertex:Ny,color_fragment:Py,color_pars_fragment:Ly,color_pars_vertex:Dy,color_vertex:Iy,common:Uy,defaultnormal_vertex:Fy,displacementmap_pars_vertex:ky,displacementmap_vertex:zy,emissivemap_fragment:Oy,emissivemap_pars_fragment:By,colorspace_fragment:Gy,colorspace_pars_fragment:Hy,envmap_fragment:Vy,envmap_common_pars_fragment:Wy,envmap_pars_fragment:jy,envmap_pars_vertex:Xy,envmap_physical_pars_fragment:iS,envmap_vertex:$y,fog_vertex:Yy,fog_pars_vertex:qy,fog_fragment:Ky,fog_pars_fragment:Zy,gradientmap_pars_fragment:Jy,lightmap_pars_fragment:Qy,lights_lambert_fragment:eS,lights_lambert_pars_fragment:tS,lights_pars_begin:nS,lights_toon_fragment:rS,lights_toon_pars_fragment:sS,lights_phong_fragment:aS,lights_phong_pars_fragment:oS,lights_physical_fragment:lS,lights_physical_pars_fragment:cS,lights_fragment_begin:uS,lights_fragment_maps:dS,lights_fragment_end:fS,lightprobes_pars_fragment:hS,logdepthbuf_fragment:pS,logdepthbuf_pars_fragment:mS,logdepthbuf_pars_vertex:gS,logdepthbuf_vertex:xS,map_fragment:vS,map_pars_fragment:_S,map_particle_fragment:yS,map_particle_pars_fragment:SS,metalnessmap_fragment:MS,metalnessmap_pars_fragment:wS,morphinstance_vertex:bS,morphcolor_vertex:ES,morphnormal_vertex:TS,morphtarget_pars_vertex:AS,morphtarget_vertex:CS,normal_fragment_begin:RS,normal_fragment_maps:NS,normal_pars_fragment:PS,normal_pars_vertex:LS,normal_vertex:DS,normalmap_pars_fragment:IS,clearcoat_normal_fragment_begin:US,clearcoat_normal_fragment_maps:FS,clearcoat_pars_fragment:kS,iridescence_pars_fragment:zS,opaque_fragment:OS,packing:BS,premultiplied_alpha_fragment:GS,project_vertex:HS,dithering_fragment:VS,dithering_pars_fragment:WS,roughnessmap_fragment:jS,roughnessmap_pars_fragment:XS,shadowmap_pars_fragment:$S,shadowmap_pars_vertex:YS,shadowmap_vertex:qS,shadowmask_pars_fragment:KS,skinbase_vertex:ZS,skinning_pars_vertex:JS,skinning_vertex:QS,skinnormal_vertex:e1,specularmap_fragment:t1,specularmap_pars_fragment:n1,tonemapping_fragment:i1,tonemapping_pars_fragment:r1,transmission_fragment:s1,transmission_pars_fragment:a1,uv_pars_fragment:o1,uv_pars_vertex:l1,uv_vertex:c1,worldpos_vertex:u1,background_vert:d1,background_frag:f1,backgroundCube_vert:h1,backgroundCube_frag:p1,cube_vert:m1,cube_frag:g1,depth_vert:x1,depth_frag:v1,distance_vert:_1,distance_frag:y1,equirect_vert:S1,equirect_frag:M1,linedashed_vert:w1,linedashed_frag:b1,meshbasic_vert:E1,meshbasic_frag:T1,meshlambert_vert:A1,meshlambert_frag:C1,meshmatcap_vert:R1,meshmatcap_frag:N1,meshnormal_vert:P1,meshnormal_frag:L1,meshphong_vert:D1,meshphong_frag:I1,meshphysical_vert:U1,meshphysical_frag:F1,meshtoon_vert:k1,meshtoon_frag:z1,points_vert:O1,points_frag:B1,shadow_vert:G1,shadow_frag:H1,sprite_vert:V1,sprite_frag:W1},Ke={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Oi={basic:{uniforms:Vn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:Vn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Ct(0)},envMapIntensity:{value:1}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:Vn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:Vn([Ke.common,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.roughnessmap,Ke.metalnessmap,Ke.fog,Ke.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:Vn([Ke.common,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.gradientmap,Ke.fog,Ke.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:Vn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:Vn([Ke.points,Ke.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:Vn([Ke.common,Ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:Vn([Ke.common,Ke.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:Vn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:Vn([Ke.sprite,Ke.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distance:{uniforms:Vn([Ke.common,Ke.displacementmap,{referencePosition:{value:new pe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distance_vert,fragmentShader:Mt.distance_frag},shadow:{uniforms:Vn([Ke.lights,Ke.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};Oi.physical={uniforms:Vn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const Ol={r:0,b:0,g:0},j1=new ln,V0=new vt;V0.set(-1,0,0,0,1,0,0,0,1);function X1(s,e,t,r,o,l){const d=new Ct(0);let p=o===!0?0:1,u,f,x=null,v=0,_=null;function M(R){let k=R.isScene===!0?R.background:null;if(k&&k.isTexture){const P=R.backgroundBlurriness>0;k=e.get(k,P)}return k}function b(R){let k=!1;const P=M(R);P===null?y(d,p):P&&P.isColor&&(y(P,1),k=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?t.buffers.color.setClear(0,0,0,1,l):U==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||k)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(R,k){const P=M(k);P&&P.isCubeTexture?(f===void 0&&(f=new Wn(new fo(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:sa(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(U,D,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=P,f.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(j1.makeRotationFromEuler(k.backgroundRotation)).transpose(),P.isRenderTargetTexture===!1&&f.material.uniforms.backgroundRotation.value.premultiply(V0),f.material.toneMapped=Ut.getTransfer(P.colorSpace)!==Xt,(x!==P||v!==P.version||_!==s.toneMapping)&&(f.material.needsUpdate=!0,x=P,v=P.version,_=s.toneMapping),f.layers.enableAll(),R.unshift(f,f.geometry,f.material,0,0,null)):P&&P.isTexture&&(u===void 0&&(u=new Wn(new ho(2,2),new Ri({name:"BackgroundMaterial",uniforms:sa(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=P,u.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,u.material.toneMapped=Ut.getTransfer(P.colorSpace)!==Xt,P.matrixAutoUpdate===!0&&P.updateMatrix(),u.material.uniforms.uvTransform.value.copy(P.matrix),(x!==P||v!==P.version||_!==s.toneMapping)&&(u.material.needsUpdate=!0,x=P,v=P.version,_=s.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null))}function y(R,k){R.getRGB(Ol,z0(s)),t.buffers.color.setClear(Ol.r,Ol.g,Ol.b,k,l)}function S(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return d},setClearColor:function(R,k=1){d.set(R),p=k,y(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(R){p=R,y(d,p)},render:b,addToRenderList:C,dispose:S}}function $1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=_(null);let l=o,d=!1;function p(H,W,V,G,O){let re=!1;const K=v(H,G,V,W);l!==K&&(l=K,f(l.object)),re=M(H,G,V,O),re&&b(H,G,V,O),O!==null&&e.update(O,s.ELEMENT_ARRAY_BUFFER),(re||d)&&(d=!1,P(H,W,V,G),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function u(){return s.createVertexArray()}function f(H){return s.bindVertexArray(H)}function x(H){return s.deleteVertexArray(H)}function v(H,W,V,G){const O=G.wireframe===!0;let re=r[W.id];re===void 0&&(re={},r[W.id]=re);const K=H.isInstancedMesh===!0?H.id:0;let X=re[K];X===void 0&&(X={},re[K]=X);let j=X[V.id];j===void 0&&(j={},X[V.id]=j);let Y=j[O];return Y===void 0&&(Y=_(u()),j[O]=Y),Y}function _(H){const W=[],V=[],G=[];for(let O=0;O<t;O++)W[O]=0,V[O]=0,G[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:V,attributeDivisors:G,object:H,attributes:{},index:null}}function M(H,W,V,G){const O=l.attributes,re=W.attributes;let K=0;const X=V.getAttributes();for(const j in X)if(X[j].location>=0){const L=O[j];let ee=re[j];if(ee===void 0&&(j==="instanceMatrix"&&H.instanceMatrix&&(ee=H.instanceMatrix),j==="instanceColor"&&H.instanceColor&&(ee=H.instanceColor)),L===void 0||L.attribute!==ee||ee&&L.data!==ee.data)return!0;K++}return l.attributesNum!==K||l.index!==G}function b(H,W,V,G){const O={},re=W.attributes;let K=0;const X=V.getAttributes();for(const j in X)if(X[j].location>=0){let L=re[j];L===void 0&&(j==="instanceMatrix"&&H.instanceMatrix&&(L=H.instanceMatrix),j==="instanceColor"&&H.instanceColor&&(L=H.instanceColor));const ee={};ee.attribute=L,L&&L.data&&(ee.data=L.data),O[j]=ee,K++}l.attributes=O,l.attributesNum=K,l.index=G}function C(){const H=l.newAttributes;for(let W=0,V=H.length;W<V;W++)H[W]=0}function y(H){S(H,0)}function S(H,W){const V=l.newAttributes,G=l.enabledAttributes,O=l.attributeDivisors;V[H]=1,G[H]===0&&(s.enableVertexAttribArray(H),G[H]=1),O[H]!==W&&(s.vertexAttribDivisor(H,W),O[H]=W)}function R(){const H=l.newAttributes,W=l.enabledAttributes;for(let V=0,G=W.length;V<G;V++)W[V]!==H[V]&&(s.disableVertexAttribArray(V),W[V]=0)}function k(H,W,V,G,O,re,K){K===!0?s.vertexAttribIPointer(H,W,V,O,re):s.vertexAttribPointer(H,W,V,G,O,re)}function P(H,W,V,G){C();const O=G.attributes,re=V.getAttributes(),K=W.defaultAttributeValues;for(const X in re){const j=re[X];if(j.location>=0){let Y=O[X];if(Y===void 0&&(X==="instanceMatrix"&&H.instanceMatrix&&(Y=H.instanceMatrix),X==="instanceColor"&&H.instanceColor&&(Y=H.instanceColor)),Y!==void 0){const L=Y.normalized,ee=Y.itemSize,be=e.get(Y);if(be===void 0)continue;const F=be.buffer,ve=be.type,Me=be.bytesPerElement,Re=ve===s.INT||ve===s.UNSIGNED_INT||Y.gpuType===pf;if(Y.isInterleavedBufferAttribute){const ye=Y.data,Ie=ye.isInterleavedBuffer===!0?ye.stride:ye.itemSize,lt=Y.offset;if(ye.isInstancedInterleavedBuffer||ye.isInstancedBufferAttribute){for(let He=0;He<j.locationSize;He++)S(j.location+He,ye.meshPerAttribute);H.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let He=0;He<j.locationSize;He++)y(j.location+He);s.bindBuffer(s.ARRAY_BUFFER,F);for(let He=0;He<j.locationSize;He++)k(j.location+He,ee/j.locationSize,ve,L,Ie*Me,(lt+ee/j.locationSize*He)*Me,Re)}else{if(Y.isInstancedBufferAttribute){for(let ye=0;ye<j.locationSize;ye++)S(j.location+ye,Y.meshPerAttribute);H.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ye=0;ye<j.locationSize;ye++)y(j.location+ye);s.bindBuffer(s.ARRAY_BUFFER,F);for(let ye=0;ye<j.locationSize;ye++)k(j.location+ye,ee/j.locationSize,ve,L,ee*Me,ee/j.locationSize*ye*Me,Re)}}else if(K!==void 0){const L=K[X];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(j.location,L);break;case 3:s.vertexAttrib3fv(j.location,L);break;case 4:s.vertexAttrib4fv(j.location,L);break;default:s.vertexAttrib1fv(j.location,L)}}}}R()}function U(){te();for(const H in r){const W=r[H];for(const V in W){const G=W[V];for(const O in G){const re=G[O];for(const K in re)x(re[K].object),delete re[K];delete G[O]}}delete r[H]}}function D(H){if(r[H.id]===void 0)return;const W=r[H.id];for(const V in W){const G=W[V];for(const O in G){const re=G[O];for(const K in re)x(re[K].object),delete re[K];delete G[O]}}delete r[H.id]}function w(H){for(const W in r){const V=r[W];for(const G in V){const O=V[G];if(O[H.id]===void 0)continue;const re=O[H.id];for(const K in re)x(re[K].object),delete re[K];delete O[H.id]}}}function N(H){for(const W in r){const V=r[W],G=H.isInstancedMesh===!0?H.id:0,O=V[G];if(O!==void 0){for(const re in O){const K=O[re];for(const X in K)x(K[X].object),delete K[X];delete O[re]}delete V[G],Object.keys(V).length===0&&delete r[W]}}}function te(){$(),d=!0,l!==o&&(l=o,f(l.object))}function $(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:p,reset:te,resetDefaultState:$,dispose:U,releaseStatesOfGeometry:D,releaseStatesOfObject:N,releaseStatesOfProgram:w,initAttributes:C,enableAttribute:y,disableUnusedAttributes:R}}function Y1(s,e,t){let r;function o(u){r=u}function l(u,f){s.drawArrays(r,u,f),t.update(f,r,1)}function d(u,f,x){x!==0&&(s.drawArraysInstanced(r,u,f,x),t.update(f,r,x))}function p(u,f,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,u,0,f,0,x);let _=0;for(let M=0;M<x;M++)_+=f[M];t.update(_,r,1)}this.setMode=o,this.render=l,this.renderInstances=d,this.renderMultiDraw=p}function q1(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(w){return!(w!==Hi&&r.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(w){const N=w===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ai&&w!==Gi&&!N&&r.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function u(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const x=u(f);x!==f&&(gt("WebGLRenderer:",f,"not supported, using",x,"instead."),f=x);const v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),_=t.logarithmicDepthBuffer===!0&&v===!1;t.reversedDepthBuffer===!0&&v===!1&&gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&v===!0&&gt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),R=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),k=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=s.getParameter(s.MAX_SAMPLES),D=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:u,textureFormatReadable:d,textureTypeReadable:p,precision:f,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:M,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:R,maxVaryings:k,maxFragmentUniforms:P,maxSamples:U,samples:D}}function K1(s){const e=this;let t=null,r=0,o=!1,l=!1;const d=new Dr,p=new vt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const M=v.length!==0||_||r!==0||o;return o=_,r=v.length,M},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,_){t=x(v,_,0)},this.setState=function(v,_,M){const b=v.clippingPlanes,C=v.clipIntersection,y=v.clipShadows,S=s.get(v);if(!o||b===null||b.length===0||l&&!y)l?x(null):f();else{const R=l?0:r,k=R*4;let P=S.clippingState||null;u.value=P,P=x(b,_,k,M);for(let U=0;U!==k;++U)P[U]=t[U];S.clippingState=P,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=R}};function f(){u.value!==t&&(u.value=t,u.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(v,_,M,b){const C=v!==null?v.length:0;let y=null;if(C!==0){if(y=u.value,b!==!0||y===null){const S=M+C*4,R=_.matrixWorldInverse;p.getNormalMatrix(R),(y===null||y.length<S)&&(y=new Float32Array(S));for(let k=0,P=M;k!==C;++k,P+=4)d.copy(v[k]).applyMatrix4(R,p),d.normal.toArray(y,P),y[P+3]=d.constant}u.value=y,u.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}class Tf extends Vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new U0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new fo(5,5,5),l=new Ri({name:"CubemapFromEquirect",uniforms:sa(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:zn,blending:ea});l.uniforms.tEquirect.value=t;const d=new Wn(o,l),p=t.minFilter;return t.minFilter===kr&&(t.minFilter=Jn),new af(1,10,this).update(e,d),t.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,r,o);e.setRenderTarget(l)}}const Pm=256,Z1=3,J1=20,W0=256,j0=16,Q1=3,eM=new pe,tM=new Ct;class nc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new af(1,10,null),this._boxMesh=new Wn(new fo(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:d=256,position:p=eM}=l,u=this._renderer;this._setSize(d);const f=this._allocateTarget(),x=this._getSourceTarget(!0);t>0&&(x.texture.mipmapsAutoUpdate=!1);const v=u.autoClear,_=u.autoClearColor,M=u.autoClearDepth,b=u.autoClearStencil,C=e.background;u.autoClear=!0,u.autoClearColor=!0,u.autoClearDepth=!0,u.autoClearStencil=!0,C===null&&(e.background=u.getClearColor(tM));const y=new af(r,o,x);return y.position.copy(p),y.update(u,e),u.autoClear=v,u.autoClearColor=_,u.autoClearDepth=M,u.autoClearStencil=b,e.background=C,t>0&&(x.texture.mipmapsAutoUpdate=!0,this._blur(f,t)),this._applyPMREM(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Im(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Pm,E_(e))}_fromTexture(e,t){e.mapping===na||e.mapping===io?this._setSize(e.image.length===0?Pm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=Lm(e,!1,!1),r=Math.log2(e)-Z1;for(let o=0;o<=r;o++)t.texture.mipmaps.push({width:e>>o,height:e>>o});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=Lm(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const o=this._boxMesh,l=this._cubeCamera;o.material=r,l.renderTarget=e,l.activeMipmapLevel=t;const d=e.width>>t;e.viewport.set(0,0,d,d),l.update(this._renderer,o),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===na||e.mapping===io?(this._cubemapMaterial===null&&(this._cubemapMaterial=Im()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Dm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=nM(),this._integrationMaterial=iM());const t=this._cubeSize,r=e.texture.mipmaps.length-1,o=this._ggxMaterial.uniforms;o.envMap.value=this._sourceTarget.texture;const l=this._integrationMaterial.uniforms;l.envMap.value=this._sourceTarget.texture,l.sourceLod.value=Math.log2(t/j0);for(let d=0;d<=r;d++){const p=nc.lodToRoughness(d,r);if(d>r-Q1)l.roughness.value=p,this._renderCube(e,d,this._integrationMaterial);else{const u=p>0?Math.log2(t)+.5*Math.log2(6/(W0*Math.pow(p,4)))+.5:0;o.roughness.value=p,o.lodBias.value=u,this._renderCube(e,d,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=rM());const r=this._blurMaterial,o=r.uniforms,l=this._sourceTarget;o.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,o.envMap.value=l.texture,this._renderCube(e,0,r),o.envMap.value=e.texture,this._renderCube(l,0,r)}}function Lm(s,e,t){return new Tf(s,{minFilter:kr,generateMipmaps:e,type:ji,colorSpace:Ql,depthBuffer:t})}function po(s,e,t){return new Ri({name:s,uniforms:e,vertexShader:Mt.cube_vert,fragmentShader:t,side:zn,blending:ea,depthTest:!1,depthWrite:!1})}function nM(){return po("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${W0}u

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
	`)}function iM(){return po("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:j0}},`

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
	`)}function rM(){return po("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${J1}
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
	`)}function Dm(){return po("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Im(){return po("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function sM(s){let e=new WeakMap,t=new WeakMap,r=null;function o(_,M=!1){return _==null?null:M?d(_):l(_)}function l(_){if(_&&_.isTexture){const M=_.mapping;if(M===Hu||M===Vu)if(e.has(_)){const b=e.get(_).texture;return p(b,_.mapping)}else{const b=_.image;if(b&&b.height>0){const C=new Tf(b.height);return C.fromEquirectangularTexture(s,_),e.set(_,C),_.addEventListener("dispose",f),p(C.texture,_.mapping)}else return null}}return _}function d(_){if(_&&_.isTexture&&_.isPMREMTexture!==!0){const M=_.mapping,b=M===Hu||M===Vu,C=M===na||M===io;if(b||C){let y=t.get(_);const S=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==S)return r===null&&(r=new nc(s)),y=b?r.fromEquirectangular(_,y):r.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,t.set(_,y),y.texture;if(y!==void 0)return y.texture;{const R=_.image;return b&&R&&R.height>0||C&&R&&u(R)?(r===null&&(r=new nc(s)),y=b?r.fromEquirectangular(_):r.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,t.set(_,y),_.addEventListener("dispose",x),y.texture):null}}}return _}function p(_,M){return M===Hu?_.mapping=na:M===Vu&&(_.mapping=io),_}function u(_){let M=0;const b=6;for(let C=0;C<b;C++)_[C]!==void 0&&M++;return M===b}function f(_){const M=_.target;M.removeEventListener("dispose",f);const b=e.get(M);b!==void 0&&(e.delete(M),b.dispose())}function x(_){const M=_.target;M.removeEventListener("dispose",x);const b=t.get(M);b!==void 0&&(t.delete(M),b.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function aM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Xl("WebGLRenderer: "+r+" extension not supported."),o}}}function oM(s,e,t,r){const o={},l=new WeakMap,d=new FinalizationRegistry(b=>delete o[b]);function p(b){u(b.target)}function u(b){b.index!==null&&e.remove(b.index);for(const y in b.attributes)e.remove(b.attributes[y]);b.removeEventListener("dispose",p),delete o[b.id],d.unregister(b);const C=l.get(b);C&&(e.remove(C),l.delete(b)),r.releaseStatesOfGeometry(b),b.isInstancedBufferGeometry===!0&&delete b._maxInstanceCount,t.memory.geometries--}function f(b,C){return o[C.id]!==void 0||(C.addEventListener("dispose",p),o[C.id]=new WeakRef(C),d.register(C,C.id,C),t.memory.geometries++),C}function x(b){const C=b.attributes;for(const y in C)e.update(C[y],s.ARRAY_BUFFER)}function v(b){const C=b.index,y=b.attributes.position;let S=0;if(y===void 0)return;const R=C!==null?C.array.length:y.array.length/3-1,k=y.count>=65535?D0:L0,P=new k(Math.ceil(R/3)*6,1),U=P.array;if(C!==null){const w=C.array;S=C.version;for(let N=0,te=0;N<R;N+=3){const $=w[N+0],H=w[N+1],W=w[N+2];U[te++]=$,U[te++]=H,U[te++]=H,U[te++]=W,U[te++]=W,U[te++]=$}}else{S=y.version;for(let w=0,N=0;w<R;w+=3){const te=w+0,$=w+1,H=w+2;U[N++]=te,U[N++]=$,U[N++]=$,U[N++]=H,U[N++]=H,U[N++]=te}}P.version=S;const D=l.get(b);D&&e.remove(D),l.set(b,P)}function _(b){const C=l.get(b);if(C){const y=b.index;y!==null&&C.version<y.version&&v(b)}else v(b);return l.get(b)}function M(){for(const b in o){const C=o[b].deref();C!==void 0&&u(C)}}return{get:f,update:x,getWireframeAttribute:_,dispose:M}}function lM(s,e,t){let r;function o(v){r=v}let l,d;function p(v){l=v.type,d=v.bytesPerElement}function u(v,_){s.drawElements(r,_,l,v*d),t.update(_,r,1)}function f(v,_,M){M!==0&&(s.drawElementsInstanced(r,_,l,v*d,M),t.update(_,r,M))}function x(v,_,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,l,v,0,M);let C=0;for(let y=0;y<M;y++)C+=_[y];t.update(C,r,1)}this.setMode=o,this.setIndex=p,this.render=u,this.renderInstances=f,this.renderMultiDraw=x}function cM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,d,p){switch(t.calls++,d){case s.TRIANGLES:t.triangles+=p*(l/3);break;case s.LINES:t.lines+=p*(l/2);break;case s.LINE_STRIP:t.lines+=p*(l-1);break;case s.LINE_LOOP:t.lines+=p*l;break;case s.POINTS:t.points+=p*l;break;default:Vt("WebGLInfo: Unknown draw mode:",d);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function uM(s,e,t){const r=new WeakMap,o=new on;function l(d,p,u){const f=d.morphTargetInfluences,x=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=x!==void 0?x.length:0;let _=r.get(p);if(_===void 0||_.count!==v){let $=function(){N.dispose(),r.delete(p),p.removeEventListener("dispose",$)};var M=$;_!==void 0&&_.texture.dispose();const b=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,S=p.morphAttributes.position||[],R=p.morphAttributes.normal||[],k=p.morphAttributes.color||[];let P=0;b===!0&&(P=1),C===!0&&(P=2),y===!0&&(P=3);let U=p.attributes.position.count*P,D=1;U>e.maxTextureSize&&(D=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const w=new Float32Array(U*D*4*v),N=new R0(w,U,D,v);N.type=Gi,N.needsUpdate=!0;const te=P*4;for(let H=0;H<v;H++){const W=S[H],V=R[H],G=k[H],O=U*D*4*H;for(let re=0;re<W.count;re++){const K=re*te;b===!0&&(o.fromBufferAttribute(W,re),w[O+K+0]=o.x,w[O+K+1]=o.y,w[O+K+2]=o.z,w[O+K+3]=0),C===!0&&(o.fromBufferAttribute(V,re),w[O+K+4]=o.x,w[O+K+5]=o.y,w[O+K+6]=o.z,w[O+K+7]=0),y===!0&&(o.fromBufferAttribute(G,re),w[O+K+8]=o.x,w[O+K+9]=o.y,w[O+K+10]=o.z,w[O+K+11]=G.itemSize===4?o.w:1)}}_={count:v,texture:N,size:new kt(U,D)},r.set(p,_),p.addEventListener("dispose",$)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)u.getUniforms().setValue(s,"morphTexture",d.morphTexture,t);else{let b=0;for(let y=0;y<f.length;y++)b+=f[y];const C=p.morphTargetsRelative?1:1-b;u.getUniforms().setValue(s,"morphTargetBaseInfluence",C),u.getUniforms().setValue(s,"morphTargetInfluences",f)}u.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:l}}function dM(s,e,t,r,o){let l=new WeakMap;function d(f){const x=o.render.frame,v=f.geometry,_=e.get(f,v);if(l.get(_)!==x&&(e.update(_),l.set(_,x)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),l.get(f)!==x&&(t.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,s.ARRAY_BUFFER),l.set(f,x))),f.isSkinnedMesh){const M=f.skeleton;l.get(M)!==x&&(M.update(),l.set(M,x))}return _}function p(){l=new WeakMap}function u(f){const x=f.target;x.removeEventListener("dispose",u),r.releaseStatesOfObject(x),t.remove(x.instanceMatrix),x.instanceColor!==null&&t.remove(x.instanceColor)}return{update:d,dispose:p}}const fM={[u0]:"LINEAR_TONE_MAPPING",[d0]:"REINHARD_TONE_MAPPING",[f0]:"CINEON_TONE_MAPPING",[h0]:"ACES_FILMIC_TONE_MAPPING",[m0]:"AGX_TONE_MAPPING",[g0]:"NEUTRAL_TONE_MAPPING",[p0]:"CUSTOM_TONE_MAPPING"};function hM(s,e,t,r,o,l){const d=new Vi(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let p=null,u=null,f=null;const x=new cr;x.setAttribute("position",new jn([-1,3,0,-1,-1,0,3,-1,0],3)),x.setAttribute("uv",new jn([0,2,0,0,2,0],2));const v=new ny({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new Wn(x,v),M=new G0(-1,1,1,-1,0,1);let b=null,C=null,y=!1,S,R=null,k=[],P=!1;this.setSize=function(U,D){d.setSize(U,D),p!==null&&p.setSize(U,D),u!==null&&u.setSize(U,D);for(let w=0;w<k.length;w++){const N=k[w];N.setSize&&N.setSize(U,D)}},this.setEffects=function(U){k=U,P=k.length>0&&k[0].isRenderPass===!0;const D=d.width,w=d.height;k.length>0&&p===null&&(p=new Vi(D,w,{type:ji,depthBuffer:!1,stencilBuffer:!1}),u=new Vi(D,w,{type:ji,depthBuffer:!1,stencilBuffer:!1}));const N=o===!0&&k.some(te=>te.needsDepthTexture===!0);N!==(d.depthTexture!==null)&&(N===!0&&f===null&&(f=new ra(D,w),l===!0&&(f.format=zr,f.type=ia)),d.dispose(),d.depthTexture=N?f:null,d.resolveDepthBuffer=N,d.storeMultisampledDepthBuffer=N);for(let te=0;te<k.length;te++){const $=k[te];$.setSize&&$.setSize(D,w),N&&$.needsDepthTexture===!0&&$.setDepthTexture&&$.setDepthTexture(f)}},this.begin=function(U,D){if(y||U.toneMapping===or&&k.length===0)return!1;if(R=D,D!==null){const w=D.width,N=D.height;(d.width!==w||d.height!==N)&&this.setSize(w,N)}return P===!1&&U.setRenderTarget(d),S=U.toneMapping,U.toneMapping=or,!0},this.hasRenderPass=function(){return P},this.end=function(U,D){U.toneMapping=S,y=!0;let w=d,N=p;for(let te=0;te<k.length;te++){const $=k[te];$.enabled!==!1&&($.render(U,N,w,D),$.needsSwap!==!1&&(w=N,N=N===p?u:p))}if(b!==U.outputColorSpace||C!==U.toneMapping){b=U.outputColorSpace,C=U.toneMapping,v.defines={},Ut.getTransfer(b)===Xt&&(v.defines.SRGB_TRANSFER="");const te=fM[C];te&&(v.defines[te]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=w.texture,U.setRenderTarget(R),U.render(_,M),R=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){d.dispose(),p!==null&&p.dispose(),u!==null&&u.dispose(),x.dispose(),v.dispose()}}const X0=new On,$0=new ra(1,1),Y0=new F0(1),q0=new R0,K0=new D_,Z0=new U0,Um=[],Fm=[],km=new Float32Array(16),zm=new Float32Array(9),Om=new Float32Array(4);function la(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=Um[o];if(l===void 0&&(l=new Float32Array(o),Um[o]=l),e!==0){r.toArray(l,0);for(let d=1,p=0;d!==e;++d)p+=t,s[d].toArray(l,p)}return l}function yn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Sn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function ac(s,e){let t=Fm[e];t===void 0&&(t=new Int32Array(e),Fm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function pM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function mM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;s.uniform2fv(this.addr,e),Sn(t,e)}}function gM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yn(t,e))return;s.uniform3fv(this.addr,e),Sn(t,e)}}function xM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;s.uniform4fv(this.addr,e),Sn(t,e)}}function vM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(yn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Sn(t,e)}else{if(yn(t,r))return;Om.set(r),s.uniformMatrix2fv(this.addr,!1,Om),Sn(t,r)}}function _M(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(yn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Sn(t,e)}else{if(yn(t,r))return;zm.set(r),s.uniformMatrix3fv(this.addr,!1,zm),Sn(t,r)}}function yM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(yn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Sn(t,e)}else{if(yn(t,r))return;km.set(r),s.uniformMatrix4fv(this.addr,!1,km),Sn(t,r)}}function SM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function MM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;s.uniform2iv(this.addr,e),Sn(t,e)}}function wM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;s.uniform3iv(this.addr,e),Sn(t,e)}}function bM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;s.uniform4iv(this.addr,e),Sn(t,e)}}function EM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function TM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;s.uniform2uiv(this.addr,e),Sn(t,e)}}function AM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;s.uniform3uiv(this.addr,e),Sn(t,e)}}function CM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;s.uniform4uiv(this.addr,e),Sn(t,e)}}function oc(s){return s.version===0&&(s.compareFunction=A0,s.needsUpdate=!0),s}function RM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?l=oc($0):l=X0,t.setTexture2D(e||l,o)}function NM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||K0,o)}function PM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_CUBE_SHADOW?l=oc(Y0):l=Z0,t.setTextureCube(e||l,o)}function LM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||q0,o)}function DM(s){switch(s){case 5126:return pM;case 35664:return mM;case 35665:return gM;case 35666:return xM;case 35674:return vM;case 35675:return _M;case 35676:return yM;case 5124:case 35670:return SM;case 35667:case 35671:return MM;case 35668:case 35672:return wM;case 35669:case 35673:return bM;case 5125:return EM;case 36294:return TM;case 36295:return AM;case 36296:return CM;case 35678:case 36198:case 36298:case 36306:case 35682:return RM;case 35679:case 36299:case 36307:return NM;case 35680:case 36300:case 36308:case 36293:return PM;case 36289:case 36303:case 36311:case 36292:return LM}}function IM(s,e){s.uniform1fv(this.addr,e)}function UM(s,e){const t=la(e,this.size,2);s.uniform2fv(this.addr,t)}function FM(s,e){const t=la(e,this.size,3);s.uniform3fv(this.addr,t)}function kM(s,e){const t=la(e,this.size,4);s.uniform4fv(this.addr,t)}function zM(s,e){const t=la(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function OM(s,e){const t=la(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function BM(s,e){const t=la(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function GM(s,e){s.uniform1iv(this.addr,e)}function HM(s,e){s.uniform2iv(this.addr,e)}function VM(s,e){s.uniform3iv(this.addr,e)}function WM(s,e){s.uniform4iv(this.addr,e)}function jM(s,e){s.uniform1uiv(this.addr,e)}function XM(s,e){s.uniform2uiv(this.addr,e)}function $M(s,e){s.uniform3uiv(this.addr,e)}function YM(s,e){s.uniform4uiv(this.addr,e)}function qM(s,e,t){const r=this.cache,o=e.length,l=ac(t,o);yn(r,l)||(s.uniform1iv(this.addr,l),Sn(r,l));let d;this.type===s.SAMPLER_2D_SHADOW?d=oc($0):d=X0;for(let p=0;p!==o;++p)t.setTexture2D(e[p]||d,l[p])}function KM(s,e,t){const r=this.cache,o=e.length,l=ac(t,o);yn(r,l)||(s.uniform1iv(this.addr,l),Sn(r,l));for(let d=0;d!==o;++d)t.setTexture3D(e[d]||K0,l[d])}function ZM(s,e,t){const r=this.cache,o=e.length,l=ac(t,o);yn(r,l)||(s.uniform1iv(this.addr,l),Sn(r,l));let d;this.type===s.SAMPLER_CUBE_SHADOW?d=oc(Y0):d=Z0;for(let p=0;p!==o;++p)t.setTextureCube(e[p]||d,l[p])}function JM(s,e,t){const r=this.cache,o=e.length,l=ac(t,o);yn(r,l)||(s.uniform1iv(this.addr,l),Sn(r,l));for(let d=0;d!==o;++d)t.setTexture2DArray(e[d]||q0,l[d])}function QM(s){switch(s){case 5126:return IM;case 35664:return UM;case 35665:return FM;case 35666:return kM;case 35674:return zM;case 35675:return OM;case 35676:return BM;case 5124:case 35670:return GM;case 35667:case 35671:return HM;case 35668:case 35672:return VM;case 35669:case 35673:return WM;case 5125:return jM;case 36294:return XM;case 36295:return $M;case 36296:return YM;case 35678:case 36198:case 36298:case 36306:case 35682:return qM;case 35679:case 36299:case 36307:return KM;case 35680:case 36300:case 36308:case 36293:return ZM;case 36289:case 36303:case 36311:case 36292:return JM}}class ew{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=DM(t.type)}}class tw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=QM(t.type)}}class nw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,d=o.length;l!==d;++l){const p=o[l];p.setValue(e,t[p.id],r)}}}const gd=/(\w+)(\])?(\[|\.)?/g;function Bm(s,e){s.seq.push(e),s.map[e.id]=e}function iw(s,e,t){const r=s.name,o=r.length;for(gd.lastIndex=0;;){const l=gd.exec(r),d=gd.lastIndex;let p=l[1];const u=l[2]==="]",f=l[3];if(u&&(p=p|0),f===void 0||f==="["&&d+2===o){Bm(t,f===void 0?new ew(p,s,e):new tw(p,s,e));break}else{let v=t.map[p];v===void 0&&(v=new nw(p),Bm(t,v)),t=v}}}class $l{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const p=e.getActiveUniform(t,d),u=e.getUniformLocation(t,p.name);iw(p,u,this)}const o=[],l=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(d):l.push(d);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,d=t.length;l!==d;++l){const p=t[l],u=r[p.id];u.needsUpdate!==!1&&p.setValue(e,u.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const d=e[o];d.id in t&&r.push(d)}return r}}function Gm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const rw=37297;let sw=0;function aw(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let d=o;d<l;d++){const p=d+1;r.push(`${p===e?">":" "} ${p}: ${t[d]}`)}return r.join(`
`)}const Hm=new vt;function ow(s){Ut._getMatrix(Hm,Ut.workingColorSpace,s);const e=`mat3( ${Hm.elements.map(t=>t.toFixed(4))} )`;switch(Ut.getTransfer(s)){case ec:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return gt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Vm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const d=/ERROR: 0:(\d+)/.exec(l);if(d){const p=parseInt(d[1]);return t.toUpperCase()+`

`+l+`

`+aw(s.getShaderSource(e),p)}else return l}function lw(s,e){const t=ow(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const cw={[u0]:"Linear",[d0]:"Reinhard",[f0]:"Cineon",[h0]:"ACESFilmic",[m0]:"AgX",[g0]:"Neutral",[p0]:"Custom"};function uw(s,e){const t=cw[e];return t===void 0?(gt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Bl=new pe;function dw(){Ut.getLuminanceCoefficients(Bl);const s=Bl.x.toFixed(4),e=Bl.y.toFixed(4),t=Bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ja).join(`
`)}function hw(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function pw(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),d=l.name;let p=1;l.type===s.FLOAT_MAT2&&(p=2),l.type===s.FLOAT_MAT3&&(p=3),l.type===s.FLOAT_MAT4&&(p=4),t[d]={type:l.type,location:s.getAttribLocation(e,d),locationSize:p}}return t}function Ja(s){return s!==""}function Wm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function jm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mw=/^[ \t]*#include +<([\w\d./]+)>/gm;function of(s){return s.replace(mw,gw)}function gw(s,e){const t=Mt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return of(t)}const xw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xm(s){return s.replace(xw,vw)}function vw(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function $m(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const _w={[Gl]:"SHADOWMAP_TYPE_PCF",[Ka]:"SHADOWMAP_TYPE_VSM"};function yw(s){return _w[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Sw={[io]:"ENVMAP_MODE_REFRACTION"};function Mw(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Sw[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ww={[c0]:"ENVMAP_BLENDING_MULTIPLY",[l_]:"ENVMAP_BLENDING_MIX",[c_]:"ENVMAP_BLENDING_ADD"};function bw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":ww[s.combine]||"ENVMAP_BLENDING_NONE"}function Ew(s,e,t,r){const o=s.getContext(),l=t.defines;let d=t.vertexShader,p=t.fragmentShader;const u=yw(t),f=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",x=Mw(t),v=bw(t),_=fw(t),M=hw(l),b=o.createProgram();let C,y,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(C=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ja).join(`
`),C.length>0&&(C+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ja).join(`
`),y.length>0&&(y+=`
`)):(C=[$m(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ja).join(`
`),y=[$m(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+x:"",t.envMap?"#define "+v:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==or?"#define TONE_MAPPING":"",t.toneMapping!==or?Mt.tonemapping_pars_fragment:"",t.toneMapping!==or?uw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,lw("linearToOutputTexel",t.outputColorSpace),dw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ja).join(`
`)),d=of(d),d=Wm(d,t),d=jm(d,t),p=of(p),p=Wm(p,t),p=jm(p,t),d=Xm(d),p=Xm(p),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,C=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+C,y=["#define varying in",t.glslVersion===om?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===om?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const R=S+C+d,k=S+y+p,P=Gm(o,o.VERTEX_SHADER,R),U=Gm(o,o.FRAGMENT_SHADER,k);o.attachShader(b,P),o.attachShader(b,U),t.index0AttributeName!==void 0?o.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function D($){if(s.debug.checkShaderErrors){const H=o.getProgramInfoLog(b)||"",W=o.getShaderInfoLog(P)||"",V=o.getShaderInfoLog(U)||"",G=H.trim(),O=W.trim(),re=V.trim();let K=!0,X=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,b,P,U);else{const j=Vm(o,P,"vertex"),Y=Vm(o,U,"fragment");Vt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+$.name+`
Material Type: `+$.type+`

Program Info Log: `+G+`
`+j+`
`+Y)}else G!==""?gt("WebGLProgram: Program Info Log:",G):(O===""||re==="")&&(X=!1);X&&($.diagnostics={runnable:K,programLog:G,vertexShader:{log:O,prefix:C},fragmentShader:{log:re,prefix:y}})}o.deleteShader(P),o.deleteShader(U),w=new $l(o,b),N=pw(o,b)}let w;this.getUniforms=function(){return w===void 0&&D(this),w};let N;this.getAttributes=function(){return N===void 0&&D(this),N};let te=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return te===!1&&(te=o.getProgramParameter(b,rw)),te},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sw++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=P,this.fragmentShader=U,this}let Tw=0;class Aw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Cw(e),t.set(e,r)),r}}class Cw{constructor(e){this.id=Tw++,this.code=e,this.usedTimes=0}}function Rw(s){return s===hs||s===Zl||s===Jl}function Nw(s,e,t,r,o,l){const d=new N0,p=new Aw,u=new Set,f=[],x=new Map,v=r.logarithmicDepthBuffer,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return u.add(w),w===0?"uv":`uv${w}`}function b(w,N,te,$,H,W){const V=$.fog,G=H.geometry,O=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?$.environment:null,re=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,K=e.get(w.envMap||O,re),X=_[w.type];let j=r.precision;w.precision!==null&&(j=r.getMaxPrecision(w.precision),j!==w.precision&&gt("WebGLProgram.getParameters:",w.precision,"not supported, using",j,"instead."));const Y=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,L=Y!==void 0?Y.length:0;let ee=0;G.morphAttributes.position!==void 0&&(ee=1),G.morphAttributes.normal!==void 0&&(ee=2),G.morphAttributes.color!==void 0&&(ee=3);let be,F,ve,Me;if(X){const Oe=Oi[X];be=Oe.vertexShader,F=Oe.fragmentShader}else{be=w.vertexShader,F=w.fragmentShader;const Oe=p.getVertexShaderStage(w),xt=p.getFragmentShaderStage(w);p.update(w,Oe,xt),ve=Oe.id,Me=xt.id}const Re=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),Ie=H.isInstancedMesh===!0,lt=H.isBatchedMesh===!0,He=!!w.map,Ee=!!w.matcap,ze=!!K,We=ze&&K.isPMREMTexture===!0,_t=!!w.aoMap,yt=!!w.lightMap,wt=!!w.bumpMap&&w.wireframe===!1,It=!!w.normalMap,nn=!!w.displacementMap,Pt=!!w.emissiveMap,Wt=!!w.metalnessMap,zt=!!w.roughnessMap,rn=w.anisotropy>0,J=w.clearcoat>0,Yt=w.diffuseRoughness>0,Lt=w.dispersion>0,bt=w.retroreflectivity>0,Ue=w.iridescence>0,Et=w.sheen>0,qe=w.transmission>0,rt=rn&&!!w.anisotropyMap,I=J&&!!w.clearcoatMap,E=J&&!!w.clearcoatNormalMap,ae=J&&!!w.clearcoatRoughnessMap,Ce=Yt&&!!w.diffuseRoughnessMap,_e=Ue&&!!w.iridescenceMap,Fe=Ue&&!!w.iridescenceThicknessMap,xe=Et&&!!w.sheenColorMap,ie=Et&&!!w.sheenRoughnessMap,se=!!w.specularMap,Se=!!w.specularColorMap,z=!!w.specularIntensityMap,me=qe&&!!w.transmissionMap,de=qe&&!!w.thicknessMap,Pe=!!w.gradientMap,Te=!!w.alphaMap,Le=w.alphaTest>0,Ze=!!w.alphaHash,ut=!!w.extensions;let Q=or;w.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(Q=s.toneMapping);const je=We?K.isCompressedCubeTexture?K.image[0].mipmaps:K.mipmaps:null,$e={shaderID:X,shaderType:w.type,shaderName:w.name,vertexShader:be,fragmentShader:F,defines:w.defines,customVertexShaderID:ve,customFragmentShaderID:Me,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:j,batching:lt,batchingColor:lt&&H._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&H.instanceColor!==null,instancingMorph:Ie&&H.morphTexture!==null,outputColorSpace:Re===null?s.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Ut.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:He,matcap:Ee,envMap:ze,envMapMode:ze&&K.mapping,envMapPMREM:We,envMapMaxLod:We?je.length-1:null,envMapSize:We?je[0].width:null,aoMap:_t,lightMap:yt,bumpMap:wt,normalMap:It,displacementMap:nn,emissiveMap:Pt,normalMapObjectSpace:It&&w.normalMapType===f_,normalMapTangentSpace:It&&w.normalMapType===rf,packedNormalMap:It&&w.normalMapType===rf&&Rw(w.normalMap.format),metalnessMap:Wt,roughnessMap:zt,anisotropy:rn,anisotropyMap:rt,clearcoat:J,clearcoatMap:I,clearcoatNormalMap:E,clearcoatRoughnessMap:ae,diffuseRoughness:Yt,diffuseRoughnessMap:Ce,dispersion:Lt,retroreflection:bt,iridescence:Ue,iridescenceMap:_e,iridescenceThicknessMap:Fe,sheen:Et,sheenColorMap:xe,sheenRoughnessMap:ie,specularMap:se,specularColorMap:Se,specularIntensityMap:z,transmission:qe,transmissionMap:me,thicknessMap:de,gradientMap:Pe,opaque:w.transparent===!1&&w.blending===Qa&&w.alphaToCoverage===!1,alphaMap:Te,alphaTest:Le,alphaHash:Ze,combine:w.combine,mapUv:He&&M(w.map.channel),aoMapUv:_t&&M(w.aoMap.channel),lightMapUv:yt&&M(w.lightMap.channel),bumpMapUv:wt&&M(w.bumpMap.channel),normalMapUv:It&&M(w.normalMap.channel),displacementMapUv:nn&&M(w.displacementMap.channel),emissiveMapUv:Pt&&M(w.emissiveMap.channel),metalnessMapUv:Wt&&M(w.metalnessMap.channel),roughnessMapUv:zt&&M(w.roughnessMap.channel),anisotropyMapUv:rt&&M(w.anisotropyMap.channel),clearcoatMapUv:I&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:E&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&M(w.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ce&&M(w.diffuseRoughnessMap.channel),iridescenceMapUv:_e&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:ie&&M(w.sheenRoughnessMap.channel),specularMapUv:se&&M(w.specularMap.channel),specularColorMapUv:Se&&M(w.specularColorMap.channel),specularIntensityMapUv:z&&M(w.specularIntensityMap.channel),transmissionMapUv:me&&M(w.transmissionMap.channel),thicknessMapUv:de&&M(w.thicknessMap.channel),alphaMapUv:Te&&M(w.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(It||rn),vertexNormals:!!G.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!G.attributes.uv&&(He||Te),fog:!!V,useFog:w.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||G.attributes.normal===void 0&&It===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:ye,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:ee,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:W.filter(Oe=>Oe.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&te.length>0,shadowMapType:s.shadowMap.type,toneMapping:Q,decodeVideoTexture:He&&w.map.isVideoTexture===!0&&Ut.getTransfer(w.map.colorSpace)===Xt,decodeVideoTextureEmissive:Pt&&w.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(w.emissiveMap.colorSpace)===Xt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Bi,flipSided:w.side===zn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ut&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&w.extensions.multiDraw===!0||lt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return $e.vertexUv1s=u.has(1),$e.vertexUv2s=u.has(2),$e.vertexUv3s=u.has(3),u.clear(),$e}function C(w){const N=[];if(w.shaderID?N.push(w.shaderID):(N.push(w.customVertexShaderID),N.push(w.customFragmentShaderID)),w.defines!==void 0)for(const te in w.defines)N.push(te),N.push(w.defines[te]);return w.isRawShaderMaterial===!1&&(y(N,w),S(N,w),N.push(s.outputColorSpace)),N.push(w.customProgramCacheKey),N.join()}function y(w,N){w.push(N.precision),w.push(N.outputColorSpace),w.push(N.envMapMode),w.push(N.envMapPMREM),w.push(N.envMapMaxLod),w.push(N.envMapSize),w.push(N.mapUv),w.push(N.alphaMapUv),w.push(N.lightMapUv),w.push(N.aoMapUv),w.push(N.bumpMapUv),w.push(N.normalMapUv),w.push(N.displacementMapUv),w.push(N.emissiveMapUv),w.push(N.metalnessMapUv),w.push(N.roughnessMapUv),w.push(N.anisotropyMapUv),w.push(N.clearcoatMapUv),w.push(N.clearcoatNormalMapUv),w.push(N.clearcoatRoughnessMapUv),w.push(N.diffuseRoughnessMapUv),w.push(N.iridescenceMapUv),w.push(N.iridescenceThicknessMapUv),w.push(N.sheenColorMapUv),w.push(N.sheenRoughnessMapUv),w.push(N.specularMapUv),w.push(N.specularColorMapUv),w.push(N.specularIntensityMapUv),w.push(N.transmissionMapUv),w.push(N.thicknessMapUv),w.push(N.combine),w.push(N.fogExp2),w.push(N.sizeAttenuation),w.push(N.morphTargetsCount),w.push(N.numSunLights),w.push(N.numDirLights),w.push(N.numPointLights),w.push(N.numSpotLights),w.push(N.numSpotLightMaps),w.push(N.numHemiLights),w.push(N.numRectAreaLights),w.push(N.numSunLightShadows),w.push(N.numDirLightShadows),w.push(N.numPointLightShadows),w.push(N.numSpotLightShadows),w.push(N.numSpotLightShadowsWithMaps),w.push(N.numLightProbes),w.push(N.numLightProbeGrids),w.push(N.shadowMapType),w.push(N.toneMapping),w.push(N.numClippingPlanes),w.push(N.numClipIntersection),w.push(N.depthPacking)}function S(w,N){d.disableAll(),N.instancing&&d.enable(0),N.instancingColor&&d.enable(1),N.instancingMorph&&d.enable(2),N.matcap&&d.enable(3),N.envMap&&d.enable(4),N.normalMapObjectSpace&&d.enable(5),N.normalMapTangentSpace&&d.enable(6),N.clearcoat&&d.enable(7),N.iridescence&&d.enable(8),N.alphaTest&&d.enable(9),N.vertexColors&&d.enable(10),N.vertexAlphas&&d.enable(11),N.vertexUv1s&&d.enable(12),N.vertexUv2s&&d.enable(13),N.vertexUv3s&&d.enable(14),N.vertexTangents&&d.enable(15),N.anisotropy&&d.enable(16),N.alphaHash&&d.enable(17),N.batching&&d.enable(18),N.dispersion&&d.enable(19),N.retroreflection&&d.enable(24),N.diffuseRoughness&&d.enable(25),N.batchingColor&&d.enable(20),N.gradientMap&&d.enable(21),N.packedNormalMap&&d.enable(22),N.vertexNormals&&d.enable(23),w.push(d.mask),d.disableAll(),N.fog&&d.enable(0),N.useFog&&d.enable(1),N.flatShading&&d.enable(2),N.logarithmicDepthBuffer&&d.enable(3),N.reversedDepthBuffer&&d.enable(4),N.skinning&&d.enable(5),N.morphTargets&&d.enable(6),N.morphNormals&&d.enable(7),N.morphColors&&d.enable(8),N.premultipliedAlpha&&d.enable(9),N.shadowMapEnabled&&d.enable(10),N.doubleSided&&d.enable(11),N.flipSided&&d.enable(12),N.useDepthPacking&&d.enable(13),N.dithering&&d.enable(14),N.transmission&&d.enable(15),N.sheen&&d.enable(16),N.opaque&&d.enable(17),N.pointsUvs&&d.enable(18),N.decodeVideoTexture&&d.enable(19),N.decodeVideoTextureEmissive&&d.enable(20),N.alphaToCoverage&&d.enable(21),N.numLightProbeGrids>0&&d.enable(22),N.hasPositionAttribute&&d.enable(23),w.push(d.mask)}function R(w){const N=_[w.type];let te;if(N){const $=Oi[N];te=Q_.clone($.uniforms)}else te=w.uniforms;return te}function k(w,N){let te=x.get(N);return te!==void 0?++te.usedTimes:(te=new Ew(s,N,w,o),f.push(te),x.set(N,te)),te}function P(w){if(--w.usedTimes===0){const N=f.indexOf(w);f[N]=f[f.length-1],f.pop(),x.delete(w.cacheKey),w.destroy()}}function U(w){p.remove(w)}function D(){p.dispose()}return{getParameters:b,getProgramCacheKey:C,getUniforms:R,acquireProgram:k,releaseProgram:P,releaseShaderCache:U,programs:f,dispose:D}}function Pw(){let s=new WeakMap;function e(d){return s.has(d)}function t(d){let p=s.get(d);return p===void 0&&(p={},s.set(d,p)),p}function r(d){s.delete(d)}function o(d,p,u){s.get(d)[p]=u}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function Lw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Ym(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function qm(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function d(_){let M=0;return _.isInstancedMesh&&(M+=2),_.isSkinnedMesh&&(M+=1),M}function p(_,M,b,C,y,S){let R=s[e];return R===void 0?(R={id:_.id,object:_,geometry:M,material:b,materialVariant:d(_),groupOrder:C,renderOrder:_.renderOrder,z:y,group:S},s[e]=R):(R.id=_.id,R.object=_,R.geometry=M,R.material=b,R.materialVariant=d(_),R.groupOrder=C,R.renderOrder=_.renderOrder,R.z=y,R.group=S),e++,R}function u(_,M,b,C,y,S,R){R.reversedDepth===!0&&(y=-y);const k=p(_,M,b,C,y,S);b.transmission>0?r.push(k):b.transparent===!0?o.push(k):t.push(k)}function f(_,M,b,C,y,S){const R=p(_,M,b,C,y,S);b.transmission>0?r.unshift(R):b.transparent===!0?o.unshift(R):t.unshift(R)}function x(_,M){t.length>1&&t.sort(_||Lw),r.length>1&&r.sort(M||Ym),o.length>1&&o.sort(M||Ym)}function v(){for(let _=e,M=s.length;_<M;_++){const b=s[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:u,unshift:f,finish:v,sort:x}}function Dw(){let s=new WeakMap;function e(r,o){const l=s.get(r);let d;return l===void 0?(d=new qm,s.set(r,[d])):o>=l.length?(d=new qm,l.push(d)):d=l[o],d}function t(){s=new WeakMap}return{get:e,dispose:t}}function Iw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new pe,color:new Ct};break;case"SpotLight":t={position:new pe,direction:new pe,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new pe,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new pe,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":t={color:new Ct,position:new pe,halfWidth:new pe,halfHeight:new pe};break}return s[e.id]=t,t}}}function Uw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Fw=0;function kw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function zw(s){const e=new Iw,t=Uw(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new pe);const o=new pe,l=new ln,d=new ln;function p(f){let x=0,v=0,_=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let M=0,b=0,C=0,y=0,S=0,R=0,k=0,P=0,U=0,D=0,w=0,N=0,te=0,$=0;f.sort(kw);for(let W=0,V=f.length;W<V;W++){const G=f[W],O=G.color,re=G.intensity,K=G.distance;let X=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===hs?X=G.shadow.map.texture:X=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)x+=O.r*re,v+=O.g*re,_+=O.b*re;else if(G.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(G.sh.coefficients[j],re);$++}else if(G.isSunLight){const j=e.get(G);if(j.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Y=G.shadow,L=t.get(G);L.shadowIntensity=Y.intensity,L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),r.sunShadow[b]=L,r.sunShadowMap[b]=X;const ee=Y.getViewportCount();for(let be=0;be<ee;be++)r.sunShadowMatrix[C+be]=Y.getMatrix(be),r.sunShadowCascade[C+be]=Y._cascadeData[be];C+=ee,b++}r.sun[M]=j,M++}else if(G.isDirectionalLight){const j=e.get(G);if(j.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Y=G.shadow,L=t.get(G);L.shadowIntensity=Y.intensity,L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize=Y.mapSize,r.directionalShadow[y]=L,r.directionalShadowMap[y]=X,r.directionalShadowMatrix[y]=G.shadow.matrix,U++}r.directional[y]=j,y++}else if(G.isSpotLight){const j=e.get(G);j.position.setFromMatrixPosition(G.matrixWorld),j.color.copy(O).multiplyScalar(re),j.distance=K,j.coneCos=Math.cos(G.angle),j.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),j.decay=G.decay,r.spot[R]=j;const Y=G.shadow;if(G.map&&(r.spotLightMap[N]=G.map,N++,Y.updateMatrices(G),G.castShadow&&te++),r.spotLightMatrix[R]=Y.matrix,G.castShadow){const L=t.get(G);L.shadowIntensity=Y.intensity,L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize=Y.mapSize,r.spotShadow[R]=L,r.spotShadowMap[R]=X,w++}R++}else if(G.isRectAreaLight){const j=e.get(G);j.color.copy(O).multiplyScalar(re),j.halfWidth.set(G.width*.5,0,0),j.halfHeight.set(0,G.height*.5,0),r.rectArea[k]=j,k++}else if(G.isPointLight){const j=e.get(G);if(j.color.copy(G.color).multiplyScalar(G.intensity),j.distance=G.distance,j.decay=G.decay,G.castShadow){const Y=G.shadow,L=t.get(G);L.shadowIntensity=Y.intensity,L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize=Y.mapSize,L.shadowCameraNear=Y.camera.near,L.shadowCameraFar=Y.camera.far,r.pointShadow[S]=L,r.pointShadowMap[S]=X,r.pointShadowMatrix[S]=G.shadow.matrix,D++}r.point[S]=j,S++}else if(G.isHemisphereLight){const j=e.get(G);j.skyColor.copy(G.color).multiplyScalar(re),j.groundColor.copy(G.groundColor).multiplyScalar(re),r.hemi[P]=j,P++}}k>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ke.LTC_FLOAT_1,r.rectAreaLTC2=Ke.LTC_FLOAT_2):(r.rectAreaLTC1=Ke.LTC_HALF_1,r.rectAreaLTC2=Ke.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=v,r.ambient[2]=_;const H=r.hash;(H.sunLength!==M||H.directionalLength!==y||H.pointLength!==S||H.spotLength!==R||H.rectAreaLength!==k||H.hemiLength!==P||H.numSunShadows!==b||H.numDirectionalShadows!==U||H.numPointShadows!==D||H.numSpotShadows!==w||H.numSpotMaps!==N||H.numLightProbes!==$)&&(r.sun.length=M,r.directional.length=y,r.spot.length=R,r.rectArea.length=k,r.point.length=S,r.hemi.length=P,r.sunShadow.length=b,r.sunShadowMap.length=b,r.sunShadowMatrix.length=C,r.sunShadowCascade.length=C,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.directionalShadowMatrix.length=U,r.pointShadow.length=D,r.pointShadowMap.length=D,r.pointShadowMatrix.length=D,r.spotShadow.length=w,r.spotShadowMap.length=w,r.spotLightMatrix.length=w+N-te,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=te,r.numLightProbes=$,H.sunLength=M,H.directionalLength=y,H.pointLength=S,H.spotLength=R,H.rectAreaLength=k,H.hemiLength=P,H.numSunShadows=b,H.numDirectionalShadows=U,H.numPointShadows=D,H.numSpotShadows=w,H.numSpotMaps=N,H.numLightProbes=$,r.version=Fw++)}function u(f,x){let v=0,_=0,M=0,b=0,C=0,y=0;const S=x.matrixWorldInverse;for(let R=0,k=f.length;R<k;R++){const P=f[R];if(P.isSunLight){const U=r.sun[v];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(S),v++}else if(P.isDirectionalLight){const U=r.directional[_];U.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(S),_++}else if(P.isSpotLight){const U=r.spot[b];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(S),b++}else if(P.isRectAreaLight){const U=r.rectArea[C];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(S),d.identity(),l.copy(P.matrixWorld),l.premultiply(S),d.extractRotation(l),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),C++}else if(P.isPointLight){const U=r.point[M];U.position.setFromMatrixPosition(P.matrixWorld),U.position.applyMatrix4(S),M++}else if(P.isHemisphereLight){const U=r.hemi[y];U.direction.setFromMatrixPosition(P.matrixWorld),U.direction.transformDirection(S),y++}}}return{setup:p,setupView:u,state:r}}function Km(s){const e=new zw(s),t=[],r=[],o=[];function l(v){x.camera=v,t.length=0,r.length=0,o.length=0}function d(v){v.isLightProbeGrid?o.push(v):t.push(v)}function p(v){r.push(v)}function u(){e.setup(t),o.sort((v,_)=>v.priority-_.priority||v.id-_.id)}function f(v){e.setupView(t,v)}const x={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:x,setupLights:u,setupLightsView:f,pushLight:d,pushShadow:p}}function Ow(s){let e=new WeakMap;function t(o,l=0){const d=e.get(o);let p;return d===void 0?(p=new Km(s),e.set(o,[p])):l>=d.length?(p=new Km(s),d.push(p)):p=d[l],p}function r(){e=new WeakMap}return{get:t,dispose:r}}const Bw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gw=`uniform sampler2D shadow_pass;
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
}`,Hw=[new pe(1,0,0),new pe(-1,0,0),new pe(0,1,0),new pe(0,-1,0),new pe(0,0,1),new pe(0,0,-1)],Vw=[new pe(0,-1,0),new pe(0,-1,0),new pe(0,0,1),new pe(0,0,-1),new pe(0,-1,0),new pe(0,-1,0)],Zm=new ln,qa=new pe,xd=new pe;function Ww(s,e,t){let r=new oo;const o=new kt,l=new kt,d=new on,p=new iy,u=new ry,f={},x=t.maxTextureSize,v={[fs]:zn,[zn]:fs,[Bi]:Bi},_=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:Bw,fragmentShader:Gw}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const b=new cr;b.setAttribute("position",new us(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Wn(b,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gl;let S=this.type;this.render=function(D,w,N){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;this.type===Vv&&(gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gl);const te=s.getRenderTarget(),$=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),W=s.state;W.setBlending(ea),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const V=S!==this.type;V&&w.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(O=>O.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,O=D.length;G<O;G++){const re=D[G],K=re.shadow;if(K===void 0){gt("WebGLShadowMap:",re,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;o.copy(K.mapSize);const X=K.getFrameExtents();o.multiply(X),l.copy(K.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/X.x),o.x=l.x*X.x,K.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/X.y),o.y=l.y*X.y,K.mapSize.y=l.y));const j=s.state.buffers.depth.getReversed();if(K.camera._reversedDepth=j,K.map===null||V===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Ka){if(re.isPointLight){gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Vi(o.x,o.y,{format:hs,type:ji,minFilter:Jn,magFilter:Jn,generateMipmaps:!1}),K.map.texture.name=re.name+".shadowMap",K.map.depthTexture=new ra(o.x,o.y,Gi),K.map.depthTexture.name=re.name+".shadowMapDepth",K.map.depthTexture.format=Gr,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Nn,K.map.depthTexture.magFilter=Nn}else re.isPointLight?(K.map=new Tf(o.x),K.map.depthTexture=new F0(o.x,Wi)):(K.map=new Vi(o.x,o.y),K.map.depthTexture=new ra(o.x,o.y,Wi)),K.map.depthTexture.name=re.name+".shadowMap",K.map.depthTexture.format=Gr,this.type===Gl?(K.map.depthTexture.compareFunction=j?T0:E0,K.map.depthTexture.minFilter=Jn,K.map.depthTexture.magFilter=Jn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Nn,K.map.depthTexture.magFilter=Nn);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==o.x||K.map.height!==o.y)&&K.map.setSize(o.x,o.y);const Y=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();re.isPointLight!==!0&&K.updateMatrices(re,N);const L=(K.camera.layers.mask&4294967294)!==0?K.camera.layers:N.layers;for(let ee=0;ee<Y;ee++){const be=K.getCamera(ee);if(re.isPointLight){const F=K.camera,ve=K.matrix,Me=re.distance||F.far;Me!==F.far&&(F.far=Me,F.updateProjectionMatrix()),qa.setFromMatrixPosition(re.matrixWorld),F.position.copy(qa),xd.copy(F.position),xd.add(Hw[ee]),F.up.copy(Vw[ee]),F.lookAt(xd),F.updateMatrixWorld(),ve.makeTranslation(-qa.x,-qa.y,-qa.z),Zm.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Zm,F.coordinateSystem,F.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)s.setRenderTarget(K.map,ee),s.clear();else{ee===0&&(s.setRenderTarget(K.map),s.clear());const F=K.getViewport(ee);d.set(l.x*F.x,l.y*F.y,l.x*F.z,l.y*F.w),W.viewport(d)}r=K.getFrustum(ee),P(w,N,be,re,L,this.type)}K.isPointLightShadow!==!0&&this.type===Ka&&R(K,N),K.needsUpdate=!1}S=this.type,y.needsUpdate=!1,s.setRenderTarget(te,$,H)};function R(D,w){const N=e.update(C);_.defines.VSM_SAMPLES!==D.blurSamples&&(_.defines.VSM_SAMPLES=D.blurSamples,M.defines.VSM_SAMPLES=D.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),D.mapPass===null?D.mapPass=new Vi(o.x,o.y,{format:hs,type:ji}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),_.uniforms.shadow_pass.value=D.map.depthTexture,_.uniforms.resolution.value.set(D.map.width,D.map.height),_.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(w,null,N,_,C,null),M.uniforms.shadow_pass.value=D.mapPass.texture,M.uniforms.resolution.value.set(D.map.width,D.map.height),M.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(w,null,N,M,C,null)}function k(D,w,N,te){let $=null;const H=N.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(H!==void 0)$=H;else if($=N.isPointLight===!0?u:p,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const W=$.uuid,V=w.uuid;let G=f[W];G===void 0&&(G={},f[W]=G);let O=G[V];O===void 0&&(O=$.clone(),G[V]=O,w.addEventListener("dispose",U)),$=O}if($.visible=w.visible,$.wireframe=w.wireframe,te===Ka?$.side=w.shadowSide!==null?w.shadowSide:w.side:$.side=w.shadowSide!==null?w.shadowSide:v[w.side],$.alphaMap=w.alphaMap,$.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,$.map=w.map,$.clipShadows=w.clipShadows,$.clippingPlanes=w.clippingPlanes,$.clipIntersection=w.clipIntersection,$.displacementMap=w.displacementMap,$.displacementScale=w.displacementScale,$.displacementBias=w.displacementBias,$.wireframeLinewidth=w.wireframeLinewidth,$.linewidth=w.linewidth,N.isPointLight===!0&&$.isMeshDistanceMaterial===!0){const W=s.properties.get($);W.light=N}return $}function P(D,w,N,te,$,H){if(D.visible===!1)return;if(D.layers.test($)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&H===Ka)&&(!D.frustumCulled||D.intersectsFrustum(r))){D.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,D.matrixWorld);const G=e.update(D),O=D.material;if(Array.isArray(O)){const re=G.groups;for(let K=0,X=re.length;K<X;K++){const j=re[K],Y=O[j.materialIndex];if(Y&&Y.visible){const L=k(D,Y,te,H);D.onBeforeShadow(s,D,w,N,G,L,j),s.renderBufferDirect(N,null,G,L,D,j),D.onAfterShadow(s,D,w,N,G,L,j)}}}else if(O.visible){const re=k(D,O,te,H);D.onBeforeShadow(s,D,w,N,G,re,null),s.renderBufferDirect(N,null,G,re,D,null),D.onAfterShadow(s,D,w,N,G,re,null)}}const V=D.children;for(let G=0,O=V.length;G<O;G++)P(V[G],w,N,te,$,H)}function U(D){D.target.removeEventListener("dispose",U);for(const N in f){const te=f[N],$=D.target.uuid;$ in te&&(te[$].dispose(),delete te[$])}}}function jw(s,e){function t(){let z=!1;const me=new on;let de=null;const Pe=new on(0,0,0,0);return{setMask:function(Te){de!==Te&&!z&&(s.colorMask(Te,Te,Te,Te),de=Te)},setLocked:function(Te){z=Te},setClear:function(Te,Le,Ze,ut,Q){Q===!0&&(Te*=ut,Le*=ut,Ze*=ut),me.set(Te,Le,Ze,ut),Pe.equals(me)===!1&&(s.clearColor(Te,Le,Ze,ut),Pe.copy(me))},reset:function(){z=!1,de=null,Pe.set(-1,0,0,0)}}}function r(){let z=!1,me=!1,de=null,Pe=null,Te=null;return{setReversed:function(Le){if(me!==Le){const Ze=e.get("EXT_clip_control");Le?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),me=Le;const ut=Te;Te=null,this.setClear(ut)}},getReversed:function(){return me},setTest:function(Le){Le?ye(s.DEPTH_TEST):Ie(s.DEPTH_TEST)},setMask:function(Le){de!==Le&&!z&&(s.depthMask(Le),de=Le)},setFunc:function(Le){if(me&&(Le=w_[Le]),Pe!==Le){switch(Le){case _d:s.depthFunc(s.NEVER);break;case yd:s.depthFunc(s.ALWAYS);break;case Sd:s.depthFunc(s.LESS);break;case no:s.depthFunc(s.LEQUAL);break;case Md:s.depthFunc(s.EQUAL);break;case wd:s.depthFunc(s.GEQUAL);break;case bd:s.depthFunc(s.GREATER);break;case Ed:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pe=Le}},setLocked:function(Le){z=Le},setClear:function(Le){Te!==Le&&(Te=Le,me&&(Le=1-Le),s.clearDepth(Le))},reset:function(){z=!1,de=null,Pe=null,Te=null,me=!1}}}function o(){let z=!1,me=null,de=null,Pe=null,Te=null,Le=null,Ze=null,ut=null,Q=null;return{setTest:function(je){z||(je?ye(s.STENCIL_TEST):Ie(s.STENCIL_TEST))},setMask:function(je){me!==je&&!z&&(s.stencilMask(je),me=je)},setFunc:function(je,$e,Oe){(de!==je||Pe!==$e||Te!==Oe)&&(s.stencilFunc(je,$e,Oe),de=je,Pe=$e,Te=Oe)},setOp:function(je,$e,Oe){(Le!==je||Ze!==$e||ut!==Oe)&&(s.stencilOp(je,$e,Oe),Le=je,Ze=$e,ut=Oe)},setLocked:function(je){z=je},setClear:function(je){Q!==je&&(s.clearStencil(je),Q=je)},reset:function(){z=!1,me=null,de=null,Pe=null,Te=null,Le=null,Ze=null,ut=null,Q=null}}}const l=new t,d=new r,p=new o;let u={};const f=new WeakMap;let x={},v={},_={},M=new WeakMap,b=[],C=null,y=!1,S=null,R=null,k=null,P=null,U=null,D=null,w=null,N=new Ct(0,0,0),te=0,$=!1,H=null,W=null,V=null,G=null,O=null;const re=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,X=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(j)[1]),K=X>=1):j.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),K=X>=2);let Y=null,L={};const ee=s.getParameter(s.SCISSOR_BOX),be=s.getParameter(s.VIEWPORT),F=new on().fromArray(ee),ve=new on().fromArray(be);function Me(z,me,de,Pe){const Te=new Uint8Array(4),Le=s.createTexture();s.bindTexture(z,Le),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ze=0;Ze<de;Ze++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(me,0,s.RGBA,1,1,Pe,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(me+Ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return Le}const Re={};Re[s.TEXTURE_2D]=Me(s.TEXTURE_2D,s.TEXTURE_2D,1),Re[s.TEXTURE_CUBE_MAP]=Me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[s.TEXTURE_2D_ARRAY]=Me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Re[s.TEXTURE_3D]=Me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),d.setClear(1),p.setClear(0),ye(s.DEPTH_TEST),d.setFunc(no),wt(!1),It(rm),ye(s.CULL_FACE),_t(ea);function ye(z){x[z]!==!0&&(s.enable(z),x[z]=!0)}function Ie(z){x[z]!==!1&&(s.disable(z),x[z]=!1)}function lt(z,me){return _[z]!==me?(s.bindFramebuffer(z,me),_[z]=me,z===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=me),z===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=me),!0):!1}function He(z,me){let de=b,Pe=!1;if(z){de=M.get(me),de===void 0&&(de=[],M.set(me,de));const Te=z.textures;if(de.length!==Te.length||de[0]!==s.COLOR_ATTACHMENT0){for(let Le=0,Ze=Te.length;Le<Ze;Le++)de[Le]=s.COLOR_ATTACHMENT0+Le;de.length=Te.length,Pe=!0}}else de[0]!==s.BACK&&(de[0]=s.BACK,Pe=!0);Pe&&s.drawBuffers(de)}function Ee(z){return C!==z?(s.useProgram(z),C=z,!0):!1}const ze={[Js]:s.FUNC_ADD,[jv]:s.FUNC_SUBTRACT,[Xv]:s.FUNC_REVERSE_SUBTRACT};ze[$v]=s.MIN,ze[Yv]=s.MAX;const We={[qv]:s.ZERO,[Kv]:s.ONE,[Zv]:s.SRC_COLOR,[o0]:s.SRC_ALPHA,[i_]:s.SRC_ALPHA_SATURATE,[t_]:s.DST_COLOR,[Qv]:s.DST_ALPHA,[Jv]:s.ONE_MINUS_SRC_COLOR,[l0]:s.ONE_MINUS_SRC_ALPHA,[n_]:s.ONE_MINUS_DST_COLOR,[e_]:s.ONE_MINUS_DST_ALPHA,[r_]:s.CONSTANT_COLOR,[s_]:s.ONE_MINUS_CONSTANT_COLOR,[a_]:s.CONSTANT_ALPHA,[o_]:s.ONE_MINUS_CONSTANT_ALPHA};function _t(z,me,de,Pe,Te,Le,Ze,ut,Q,je){if(z===ea){y===!0&&(Ie(s.BLEND),y=!1);return}if(y===!1&&(ye(s.BLEND),y=!0),z!==Wv){if(z!==S||je!==$){if((R!==Js||U!==Js)&&(s.blendEquation(s.FUNC_ADD),R=Js,U=Js),je)switch(z){case Qa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case eo:s.blendFunc(s.ONE,s.ONE);break;case sm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case am:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Vt("WebGLState: Invalid blending: ",z);break}else switch(z){case Qa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case eo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case sm:Vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case am:Vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Vt("WebGLState: Invalid blending: ",z);break}k=null,P=null,D=null,w=null,N.set(0,0,0),te=0,S=z,$=je}return}Te=Te||me,Le=Le||de,Ze=Ze||Pe,(me!==R||Te!==U)&&(s.blendEquationSeparate(ze[me],ze[Te]),R=me,U=Te),(de!==k||Pe!==P||Le!==D||Ze!==w)&&(s.blendFuncSeparate(We[de],We[Pe],We[Le],We[Ze]),k=de,P=Pe,D=Le,w=Ze),(ut.equals(N)===!1||Q!==te)&&(s.blendColor(ut.r,ut.g,ut.b,Q),N.copy(ut),te=Q),S=z,$=!1}function yt(z,me){z.side===Bi?Ie(s.CULL_FACE):ye(s.CULL_FACE);let de=z.side===zn;me&&(de=!de),wt(de),z.blending===Qa&&z.transparent===!1?_t(ea):_t(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),d.setFunc(z.depthFunc),d.setTest(z.depthTest),d.setMask(z.depthWrite),l.setMask(z.colorWrite);const Pe=z.stencilWrite;p.setTest(Pe),Pe&&(p.setMask(z.stencilWriteMask),p.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),p.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Pt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ye(s.SAMPLE_ALPHA_TO_COVERAGE):Ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function wt(z){H!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),H=z)}function It(z){z!==Gv?(ye(s.CULL_FACE),z!==W&&(z===rm?s.cullFace(s.BACK):z===Hv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ie(s.CULL_FACE),W=z}function nn(z){z!==V&&(K&&s.lineWidth(z),V=z)}function Pt(z,me,de){z?(ye(s.POLYGON_OFFSET_FILL),(G!==me||O!==de)&&(G=me,O=de,d.getReversed()&&(me=-me,de=-de),s.polygonOffset(me,de))):Ie(s.POLYGON_OFFSET_FILL)}function Wt(z){z?ye(s.SCISSOR_TEST):Ie(s.SCISSOR_TEST)}function zt(z){z===void 0&&(z=s.TEXTURE0+re-1),Y!==z&&(s.activeTexture(z),Y=z)}function rn(z,me,de){de===void 0&&(Y===null?de=s.TEXTURE0+re-1:de=Y);let Pe=L[de];Pe===void 0&&(Pe={type:void 0,texture:void 0},L[de]=Pe),(Pe.type!==z||Pe.texture!==me)&&(Y!==de&&(s.activeTexture(de),Y=de),s.bindTexture(z,me||Re[z]),Pe.type=z,Pe.texture=me)}function J(){const z=L[Y];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Yt(){try{s.compressedTexImage2D(...arguments)}catch(z){Vt("WebGLState:",z)}}function Lt(){try{s.compressedTexImage3D(...arguments)}catch(z){Vt("WebGLState:",z)}}function bt(){try{s.texSubImage2D(...arguments)}catch(z){Vt("WebGLState:",z)}}function Ue(){try{s.texSubImage3D(...arguments)}catch(z){Vt("WebGLState:",z)}}function Et(){try{s.compressedTexSubImage2D(...arguments)}catch(z){Vt("WebGLState:",z)}}function qe(){try{s.compressedTexSubImage3D(...arguments)}catch(z){Vt("WebGLState:",z)}}function rt(){try{s.texStorage2D(...arguments)}catch(z){Vt("WebGLState:",z)}}function I(){try{s.texStorage3D(...arguments)}catch(z){Vt("WebGLState:",z)}}function E(){try{s.texImage2D(...arguments)}catch(z){Vt("WebGLState:",z)}}function ae(){try{s.texImage3D(...arguments)}catch(z){Vt("WebGLState:",z)}}function Ce(z){return v[z]!==void 0?v[z]:s.getParameter(z)}function _e(z,me){v[z]!==me&&(s.pixelStorei(z,me),v[z]=me)}function Fe(z){F.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),F.copy(z))}function xe(z){ve.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),ve.copy(z))}function ie(z,me){let de=f.get(me);de===void 0&&(de=new WeakMap,f.set(me,de));let Pe=de.get(z);Pe===void 0&&(Pe=s.getUniformBlockIndex(me,z.name),s.uniformBlockBinding(me,Pe,Pe),de.set(z,Pe))}function se(z,me,de){const Te=f.get(me).get(z);u[Te]!==de&&(s.bindBufferBase(s.UNIFORM_BUFFER,Te,de),u[Te]=de)}function Se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),x={},v={},Y=null,L={},_={},u={},M=new WeakMap,b=[],C=null,y=!1,S=null,R=null,k=null,P=null,U=null,D=null,w=null,N=new Ct(0,0,0),te=0,$=!1,H=null,W=null,V=null,G=null,O=null,F.set(0,0,s.canvas.width,s.canvas.height),ve.set(0,0,s.canvas.width,s.canvas.height),l.reset(),d.reset(),p.reset()}return{buffers:{color:l,depth:d,stencil:p},enable:ye,disable:Ie,bindFramebuffer:lt,drawBuffers:He,useProgram:Ee,setBlending:_t,setMaterial:yt,setFlipSided:wt,setCullFace:It,setLineWidth:nn,setPolygonOffset:Pt,setScissorTest:Wt,activeTexture:zt,bindTexture:rn,unbindTexture:J,compressedTexImage2D:Yt,compressedTexImage3D:Lt,texImage2D:E,texImage3D:ae,pixelStorei:_e,getParameter:Ce,updateUBOMapping:ie,uniformBlockBinding:se,texStorage2D:rt,texStorage3D:I,texSubImage2D:bt,texSubImage3D:Ue,compressedTexSubImage2D:Et,compressedTexSubImage3D:qe,scissor:Fe,viewport:xe,reset:Se}}function Xw(s,e,t,r,o,l,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new kt,x=new WeakMap,v=new Set;let _;const M=new WeakMap,b=new Set,C=new FinalizationRegistry(I=>b.delete(I));let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(I,E){return y?new OffscreenCanvas(I,E):tc("canvas")}function R(I,E,ae){let Ce=1;const _e=rt(I);if((_e.width>ae||_e.height>ae)&&(Ce=ae/Math.max(_e.width,_e.height)),Ce<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Fe=Math.floor(Ce*_e.width),xe=Math.floor(Ce*_e.height);_===void 0&&(_=S(Fe,xe));const ie=E?S(Fe,xe):_;return ie.width=Fe,ie.height=xe,ie.getContext("2d").drawImage(I,0,0,Fe,xe),gt("WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+Fe+"x"+xe+")."),ie}else return"data"in I&&gt("WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),I;return I}function k(I){return I.generateMipmaps}function P(I){s.generateMipmap(I)}function U(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(I,E,ae,Ce,_e,Fe=!1){if(I!==null){if(s[I]!==void 0)return s[I];gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let xe;Ce&&(xe=e.get("EXT_texture_norm16"),xe||gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=E;if(E===s.RED&&(ae===s.FLOAT&&(ie=s.R32F),ae===s.HALF_FLOAT&&(ie=s.R16F),ae===s.UNSIGNED_BYTE&&(ie=s.R8),ae===s.UNSIGNED_SHORT&&xe&&(ie=xe.R16_EXT),ae===s.SHORT&&xe&&(ie=xe.R16_SNORM_EXT)),E===s.RED_INTEGER&&(ae===s.UNSIGNED_BYTE&&(ie=s.R8UI),ae===s.UNSIGNED_SHORT&&(ie=s.R16UI),ae===s.UNSIGNED_INT&&(ie=s.R32UI),ae===s.BYTE&&(ie=s.R8I),ae===s.SHORT&&(ie=s.R16I),ae===s.INT&&(ie=s.R32I)),E===s.RG&&(ae===s.FLOAT&&(ie=s.RG32F),ae===s.HALF_FLOAT&&(ie=s.RG16F),ae===s.UNSIGNED_BYTE&&(ie=s.RG8),ae===s.UNSIGNED_SHORT&&xe&&(ie=xe.RG16_EXT),ae===s.SHORT&&xe&&(ie=xe.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(ae===s.UNSIGNED_BYTE&&(ie=s.RG8UI),ae===s.UNSIGNED_SHORT&&(ie=s.RG16UI),ae===s.UNSIGNED_INT&&(ie=s.RG32UI),ae===s.BYTE&&(ie=s.RG8I),ae===s.SHORT&&(ie=s.RG16I),ae===s.INT&&(ie=s.RG32I)),E===s.RGB_INTEGER&&(ae===s.UNSIGNED_BYTE&&(ie=s.RGB8UI),ae===s.UNSIGNED_SHORT&&(ie=s.RGB16UI),ae===s.UNSIGNED_INT&&(ie=s.RGB32UI),ae===s.BYTE&&(ie=s.RGB8I),ae===s.SHORT&&(ie=s.RGB16I),ae===s.INT&&(ie=s.RGB32I)),E===s.RGBA_INTEGER&&(ae===s.UNSIGNED_BYTE&&(ie=s.RGBA8UI),ae===s.UNSIGNED_SHORT&&(ie=s.RGBA16UI),ae===s.UNSIGNED_INT&&(ie=s.RGBA32UI),ae===s.BYTE&&(ie=s.RGBA8I),ae===s.SHORT&&(ie=s.RGBA16I),ae===s.INT&&(ie=s.RGBA32I)),E===s.RGB&&(ae===s.UNSIGNED_SHORT&&xe&&(ie=xe.RGB16_EXT),ae===s.SHORT&&xe&&(ie=xe.RGB16_SNORM_EXT),ae===s.UNSIGNED_INT_5_9_9_9_REV&&(ie=s.RGB9_E5),ae===s.UNSIGNED_INT_10F_11F_11F_REV&&(ie=s.R11F_G11F_B10F)),E===s.RGBA){const se=Fe?ec:Ut.getTransfer(_e);ae===s.FLOAT&&(ie=s.RGBA32F),ae===s.HALF_FLOAT&&(ie=s.RGBA16F),ae===s.UNSIGNED_BYTE&&(ie=se===Xt?s.SRGB8_ALPHA8:s.RGBA8),ae===s.UNSIGNED_SHORT&&xe&&(ie=xe.RGBA16_EXT),ae===s.SHORT&&xe&&(ie=xe.RGBA16_SNORM_EXT),ae===s.UNSIGNED_SHORT_4_4_4_4&&(ie=s.RGBA4),ae===s.UNSIGNED_SHORT_5_5_5_1&&(ie=s.RGB5_A1)}return(ie===s.R16F||ie===s.R32F||ie===s.RG16F||ie===s.RG32F||ie===s.RGBA16F||ie===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function w(I,E){let ae;return I?E===null||E===Wi||E===ia?ae=s.DEPTH24_STENCIL8:E===Gi?ae=s.DEPTH32F_STENCIL8:E===so&&(ae=s.DEPTH24_STENCIL8,gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Wi||E===ia?ae=s.DEPTH_COMPONENT24:E===Gi?ae=s.DEPTH_COMPONENT32F:E===so&&(ae=s.DEPTH_COMPONENT16),ae}function N(I,E){return k(I)===!0||I.isFramebufferTexture&&I.minFilter!==Nn&&I.minFilter!==Jn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function te(I){const E=new WeakRef(I);r.get(I).__ref=E,b.add(E),C.register(I,E,E)}function $(I){const E=r.get(I).__ref;E!==void 0&&(b.delete(E),C.unregister(E))}function H(I){V(I.target)}function W(I){G(I.target)}function V(I){I.removeEventListener("dispose",H),$(I),re(I),I.isVideoTexture&&x.delete(I),I.isHTMLTexture&&v.delete(I)}function G(I){I.removeEventListener("dispose",W),$(I),X(I)}function O(){for(const I of b){const E=I.deref();E!==void 0&&(E.isRenderTarget===!0?G(E):V(E))}b.clear(),v.clear()}function re(I){const E=r.get(I);if(E.__webglInit===void 0)return;const ae=I.source,Ce=M.get(ae);if(Ce){const _e=Ce[E.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&K(I),Object.keys(Ce).length===0&&M.delete(ae)}r.remove(I)}function K(I){const E=r.get(I);s.deleteTexture(E.__webglTexture);const ae=I.source,Ce=M.get(ae);delete Ce[E.__cacheKey],d.memory.textures--}function X(I){const E=r.get(I);E.__depthDisposeCallback&&E.__depthDisposeCallback();const ae=I.depthTexture;if(ae&&ae.renderTarget===I&&V(ae),I.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(E.__webglFramebuffer[_e]))for(let Fe=0;Fe<E.__webglFramebuffer[_e].length;Fe++)s.deleteFramebuffer(E.__webglFramebuffer[_e][Fe]);else s.deleteFramebuffer(E.__webglFramebuffer[_e]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[_e])}else{if(Array.isArray(E.__webglFramebuffer))for(let _e=0;_e<E.__webglFramebuffer.length;_e++)s.deleteFramebuffer(E.__webglFramebuffer[_e]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let _e=0;_e<E.__webglColorRenderbuffer.length;_e++)E.__webglColorRenderbuffer[_e]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[_e]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Ce=I.textures;for(let _e=0,Fe=Ce.length;_e<Fe;_e++){const xe=r.get(Ce[_e]);xe.__webglTexture&&(s.deleteTexture(xe.__webglTexture),d.memory.textures--),r.remove(Ce[_e])}r.remove(I)}let j=0;function Y(){j=0}function L(){return j}function ee(I){j=I}function be(){const I=j;return I>=o.maxTextures&&gt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+o.maxTextures),j+=1,I}function F(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.mipmapsAutoUpdate),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function ve(I,E){const ae=r.get(I);if(I.isVideoTexture&&Et(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&ae.__version!==I.version){const Ce=I.image;if(Ce===null)gt("WebGLRenderer: Texture marked for update but no image data found.");else if(Ce.complete===!1)gt("WebGLRenderer: Texture marked for update but image is incomplete");else{yt(ae,I,E);return}}else I.isExternalTexture&&(ae.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ae.__webglTexture,s.TEXTURE0+E)}function Me(I,E){const ae=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ae.__version!==I.version){yt(ae,I,E);return}else I.isExternalTexture&&(ae.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ae.__webglTexture,s.TEXTURE0+E)}function Re(I,E){const ae=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ae.__version!==I.version){yt(ae,I,E);return}t.bindTexture(s.TEXTURE_3D,ae.__webglTexture,s.TEXTURE0+E)}function ye(I,E){const ae=r.get(I);if(I.version>0&&ae.__version!==I.version){wt(ae,I,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture,s.TEXTURE0+E)}const Ie={[ro]:s.REPEAT,[oi]:s.CLAMP_TO_EDGE,[Td]:s.MIRRORED_REPEAT},lt={[Nn]:s.NEAREST,[u_]:s.NEAREST_MIPMAP_NEAREST,[_l]:s.NEAREST_MIPMAP_LINEAR,[Jn]:s.LINEAR,[Wu]:s.LINEAR_MIPMAP_NEAREST,[kr]:s.LINEAR_MIPMAP_LINEAR},He={[p_]:s.NEVER,[A0]:s.ALWAYS,[m_]:s.LESS,[E0]:s.LEQUAL,[g_]:s.EQUAL,[T0]:s.GEQUAL,[x_]:s.GREATER,[v_]:s.NOTEQUAL};function Ee(I,E){if(E.type===Gi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Jn||E.magFilter===Wu||E.magFilter===_l||E.magFilter===kr||E.minFilter===Jn||E.minFilter===Wu||E.minFilter===_l||E.minFilter===kr)&&gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Ie[E.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Ie[E.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Ie[E.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,lt[E.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,lt[E.minFilter]),E.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,He[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Nn||E.minFilter!==_l&&E.minFilter!==kr||E.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ze(I,E){let ae=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",H),te(E));const Ce=E.source;let _e=M.get(Ce);_e===void 0&&(_e={},M.set(Ce,_e));const Fe=F(E);if(Fe!==I.__cacheKey){_e[Fe]===void 0&&(_e[Fe]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,ae=!0),_e[Fe].usedTimes++;const xe=_e[I.__cacheKey];xe!==void 0&&(_e[I.__cacheKey].usedTimes--,xe.usedTimes===0&&K(E)),I.__cacheKey=Fe,I.__webglTexture=_e[Fe].texture}return ae}function We(I,E,ae){return Math.floor(Math.floor(I/ae)/E)}function _t(I,E,ae,Ce){const Fe=I.updateRanges;if(Fe.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,ae,Ce,E.data);else{Fe.sort((z,me)=>z.start-me.start);let xe=0;for(let z=1;z<Fe.length;z++){const me=Fe[xe],de=Fe[z],Pe=me.start+me.count,Te=We(de.start,E.width,4),Le=We(me.start,E.width,4);de.start<=Pe+1&&Te===Le&&We(de.start+de.count-1,E.width,4)===Te?me.count=Math.max(me.count,de.start+de.count-me.start):(++xe,Fe[xe]=de)}Fe.length=xe+1;const ie=t.getParameter(s.UNPACK_ROW_LENGTH),se=t.getParameter(s.UNPACK_SKIP_PIXELS),Se=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let z=0,me=Fe.length;z<me;z++){const de=Fe[z],Pe=Math.floor(de.start/4),Te=Math.ceil(de.count/4),Le=Pe%E.width,Ze=Math.floor(Pe/E.width),ut=Te,Q=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Le),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ze),t.texSubImage2D(s.TEXTURE_2D,0,Le,Ze,ut,Q,ae,Ce,E.data)}I.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ie),t.pixelStorei(s.UNPACK_SKIP_PIXELS,se),t.pixelStorei(s.UNPACK_SKIP_ROWS,Se)}}function yt(I,E,ae){let Ce=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Ce=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Ce=s.TEXTURE_3D);const _e=ze(I,E),Fe=E.source;t.bindTexture(Ce,I.__webglTexture,s.TEXTURE0+ae);const xe=r.get(Fe);if(Fe.version!==xe.__version||_e===!0){if(t.activeTexture(s.TEXTURE0+ae),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const Q=Ut.getPrimaries(Ut.workingColorSpace),je=E.colorSpace===Ur?null:Ut.getPrimaries(E.colorSpace),$e=E.colorSpace===Ur||Q===je?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e)}t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let se=R(E.image,!1,o.maxTextureSize);se=qe(E,se);const Se=l.convert(E.format,E.colorSpace),z=l.convert(E.type);let me=D(E.internalFormat,Se,z,E.normalized,E.colorSpace,E.isVideoTexture);Ee(Ce,E);let de;const Pe=E.mipmaps,Te=E.isVideoTexture!==!0,Le=xe.__version===void 0||_e===!0,Ze=Fe.dataReady,ut=N(E,se);if(E.isDepthTexture)me=w(E.format===zr,E.type),Le&&(Te?t.texStorage2D(s.TEXTURE_2D,1,me,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,me,se.width,se.height,0,Se,z,null));else if(E.isDataTexture)if(Pe.length>0){Te&&Le&&t.texStorage2D(s.TEXTURE_2D,ut,me,Pe[0].width,Pe[0].height);for(let Q=0,je=Pe.length;Q<je;Q++)de=Pe[Q],Te?Ze&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,de.width,de.height,Se,z,de.data):t.texImage2D(s.TEXTURE_2D,Q,me,de.width,de.height,0,Se,z,de.data);E.generateMipmaps=!1}else Te?(Le&&t.texStorage2D(s.TEXTURE_2D,ut,me,se.width,se.height),Ze&&_t(E,se,Se,z)):t.texImage2D(s.TEXTURE_2D,0,me,se.width,se.height,0,Se,z,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Te&&Le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ut,me,Pe[0].width,Pe[0].height,se.depth);for(let Q=0,je=Pe.length;Q<je;Q++)if(de=Pe[Q],E.format!==Hi)if(Se!==null)if(Te){if(Ze)if(E.layerUpdates.size>0){const $e=Nm(de.width,de.height,E.format,E.type);for(const Oe of E.layerUpdates){const xt=de.data.subarray(Oe*$e/de.data.BYTES_PER_ELEMENT,(Oe+1)*$e/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,Oe,de.width,de.height,1,Se,xt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,se.depth,Se,de.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,me,de.width,de.height,se.depth,0,de.data,0,0);else gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?Ze&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,se.depth,Se,z,de.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Q,me,de.width,de.height,se.depth,0,Se,z,de.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Te&&Le&&t.texStorage2D(s.TEXTURE_2D,ut,me,Pe[0].width,Pe[0].height);for(let Q=0,je=Pe.length;Q<je;Q++)de=Pe[Q],E.format!==Hi?Se!==null?Te?Ze&&t.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,de.width,de.height,Se,de.data):t.compressedTexImage2D(s.TEXTURE_2D,Q,me,de.width,de.height,0,de.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?Ze&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,de.width,de.height,Se,z,de.data):t.texImage2D(s.TEXTURE_2D,Q,me,de.width,de.height,0,Se,z,de.data)}else if(E.isDataArrayTexture)if(Te){if(Le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ut,me,se.width,se.height,se.depth),Ze)if(E.layerUpdates.size>0){const Q=Nm(se.width,se.height,E.format,E.type);for(const je of E.layerUpdates){const $e=se.data.subarray(je*Q/se.data.BYTES_PER_ELEMENT,(je+1)*Q/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,je,se.width,se.height,1,Se,z,$e)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Se,z,se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,me,se.width,se.height,se.depth,0,Se,z,se.data);else if(E.isData3DTexture)Te?(Le&&t.texStorage3D(s.TEXTURE_3D,ut,me,se.width,se.height,se.depth),Ze&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Se,z,se.data)):t.texImage3D(s.TEXTURE_3D,0,me,se.width,se.height,se.depth,0,Se,z,se.data);else if(E.isFramebufferTexture){if(Le)if(Te)t.texStorage2D(s.TEXTURE_2D,ut,me,se.width,se.height);else{let Q=se.width,je=se.height;for(let $e=0;$e<ut;$e++)t.texImage2D(s.TEXTURE_2D,$e,me,Q,je,0,Se,z,null),Q>>=1,je>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const Q=s.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),se.parentNode!==Q){Q.appendChild(se),v.add(E),Q.onpaint=je=>{const $e=je.changedElements;for(const Oe of v)$e.includes(Oe.image)&&(Oe.needsUpdate=!0)},Q.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,se);else{const $e=s.RGBA,Oe=s.RGBA,xt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,$e,Oe,xt,se)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Te&&Le){const Q=rt(Pe[0]);t.texStorage2D(s.TEXTURE_2D,ut,me,Q.width,Q.height)}for(let Q=0,je=Pe.length;Q<je;Q++)de=Pe[Q],Te?Ze&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,Se,z,de):t.texImage2D(s.TEXTURE_2D,Q,me,Se,z,de);E.generateMipmaps=!1}else if(Te){if(Le){const Q=rt(se);t.texStorage2D(s.TEXTURE_2D,ut,me,Q.width,Q.height)}Ze&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Se,z,se)}else t.texImage2D(s.TEXTURE_2D,0,me,Se,z,se);k(E)&&E.mipmapsAutoUpdate===!0&&P(Ce),xe.__version=Fe.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function wt(I,E,ae){if(E.image.length!==6)return;const Ce=ze(I,E),_e=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+ae);const Fe=r.get(_e);if(_e.version!==Fe.__version||Ce===!0){t.activeTexture(s.TEXTURE0+ae);const xe=Ut.getPrimaries(Ut.workingColorSpace),ie=E.colorSpace===Ur?null:Ut.getPrimaries(E.colorSpace),se=E.colorSpace===Ur||xe===ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const Se=E.isCompressedTexture||E.image[0].isCompressedTexture,z=E.image[0]&&E.image[0].isDataTexture,me=[];for(let Oe=0;Oe<6;Oe++)!Se&&!z?me[Oe]=R(E.image[Oe],!0,o.maxCubemapSize):me[Oe]=z?E.image[Oe].image:E.image[Oe],me[Oe]=qe(E,me[Oe]);const de=me[0],Pe=l.convert(E.format,E.colorSpace),Te=l.convert(E.type);let Le=D(E.internalFormat,Pe,Te,E.normalized,E.colorSpace);const Ze=E.isVideoTexture!==!0,ut=Fe.__version===void 0||Ce===!0,Q=_e.dataReady;let je=N(E,de);Ee(s.TEXTURE_CUBE_MAP,E);let $e;if(E.isDepthTexture){if(Le=w(E.format===zr,E.type),ut)if(Ze)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Le,de.width,de.height);else for(let Oe=0;Oe<6;Oe++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Le,de.width,de.height,0,Pe,Te,null)}else if(Se){Ze&&ut&&t.texStorage2D(s.TEXTURE_CUBE_MAP,je,Le,de.width,de.height);for(let Oe=0;Oe<6;Oe++){$e=me[Oe].mipmaps;for(let xt=0;xt<$e.length;xt++){const Nt=$e[xt];E.format!==Hi?Pe!==null?Ze?Q&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,xt,0,0,Nt.width,Nt.height,Pe,Nt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,xt,Le,Nt.width,Nt.height,0,Nt.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,xt,0,0,Nt.width,Nt.height,Pe,Te,Nt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,xt,Le,Nt.width,Nt.height,0,Pe,Te,Nt.data)}}}else{if($e=E.mipmaps,Ze&&ut){$e.length>0&&je++;const Oe=rt(me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,je,Le,Oe.width,Oe.height)}for(let Oe=0;Oe<6;Oe++)if(z){Ze?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,me[Oe].width,me[Oe].height,Pe,Te,me[Oe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Le,me[Oe].width,me[Oe].height,0,Pe,Te,me[Oe].data);for(let xt=0;xt<$e.length;xt++){const ce=$e[xt].image[Oe].image;Ze?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,xt+1,0,0,ce.width,ce.height,Pe,Te,ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,xt+1,Le,ce.width,ce.height,0,Pe,Te,ce.data)}}else{Ze?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,Pe,Te,me[Oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Le,Pe,Te,me[Oe]);for(let xt=0;xt<$e.length;xt++){const Nt=$e[xt];Ze?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,xt+1,0,0,Pe,Te,Nt.image[Oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,xt+1,Le,Pe,Te,Nt.image[Oe])}}}k(E)&&E.mipmapsAutoUpdate===!0&&P(s.TEXTURE_CUBE_MAP),Fe.__version=_e.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function It(I,E,ae,Ce,_e,Fe){const xe=l.convert(ae.format,ae.colorSpace),ie=l.convert(ae.type),se=D(ae.internalFormat,xe,ie,ae.normalized,ae.colorSpace),Se=r.get(E),z=r.get(ae);if(z.__renderTarget=E,!Se.__hasExternalTextures){const me=Math.max(1,E.width>>Fe),de=Math.max(1,E.height>>Fe);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?t.texImage3D(_e,Fe,se,me,de,E.depth,0,xe,ie,null):t.texImage2D(_e,Fe,se,me,de,0,xe,ie,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),Ue(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ce,_e,z.__webglTexture,0,bt(E)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Ce,_e,z.__webglTexture,Fe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function nn(I,E,ae){if(s.bindRenderbuffer(s.RENDERBUFFER,I),E.depthBuffer){const Ce=E.depthTexture,_e=Ce&&Ce.isDepthTexture?Ce.type:null,Fe=w(E.stencilBuffer,_e),xe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ue(E)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,bt(E),Fe,E.width,E.height):ae?s.renderbufferStorageMultisample(s.RENDERBUFFER,bt(E),Fe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,I)}else{const Ce=E.textures;for(let _e=0;_e<Ce.length;_e++){const Fe=Ce[_e],xe=l.convert(Fe.format,Fe.colorSpace),ie=l.convert(Fe.type),se=D(Fe.internalFormat,xe,ie,Fe.normalized,Fe.colorSpace);Ue(E)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,bt(E),se,E.width,E.height):ae?s.renderbufferStorageMultisample(s.RENDERBUFFER,bt(E),se,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,se,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pt(I,E,ae){const Ce=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const _e=r.get(E.depthTexture);_e.__renderTarget=E;const Fe=Ce?E.depthTexture.image[0]:E.depthTexture.image;(!_e.__webglTexture||Fe.width!==E.width||Fe.height!==E.height)&&(Fe.width=E.width,Fe.height=E.height,E.depthTexture.needsUpdate=!0),Ce?ye(E.depthTexture,0):ve(E.depthTexture,0);const xe=_e.__webglTexture,ie=bt(E),se=Ce?s.TEXTURE_CUBE_MAP_POSITIVE_X+ae:s.TEXTURE_2D,Se=E.depthTexture.format===zr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Gr)Ue(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,se,xe,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,Se,se,xe,0);else if(E.depthTexture.format===zr)Ue(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,se,xe,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,Se,se,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Wt(I){const E=r.get(I),ae=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const Ce=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Ce){const _e=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Ce.removeEventListener("dispose",_e)};Ce.addEventListener("dispose",_e),E.__depthDisposeCallback=_e}E.__boundDepthTexture=Ce}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(ae)for(let Ce=0;Ce<6;Ce++)Pt(E.__webglFramebuffer[Ce],I,Ce);else I.texture.mipmaps.length>0?Pt(E.__webglFramebuffer[0],I,0):Pt(E.__webglFramebuffer,I,0);else if(ae){E.__webglDepthbuffer=[];for(let Ce=0;Ce<6;Ce++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[Ce]),E.__webglDepthbuffer[Ce]===void 0)E.__webglDepthbuffer[Ce]=s.createRenderbuffer(),nn(E.__webglDepthbuffer[Ce],I,!1);else{const _e=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Fe=E.__webglDepthbuffer[Ce];s.bindRenderbuffer(s.RENDERBUFFER,Fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,Fe)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),nn(E.__webglDepthbuffer,I,!1);else{const _e=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Fe=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,Fe)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function zt(I,E,ae){const Ce=r.get(I);E!==void 0&&It(Ce.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ae!==void 0&&Wt(I)}function rn(I){const E=I.texture,ae=r.get(I),Ce=r.get(E);I.addEventListener("dispose",W),te(I);const _e=I.textures,Fe=I.isWebGLCubeRenderTarget===!0,xe=_e.length>1;if(xe||(Ce.__webglTexture===void 0&&(Ce.__webglTexture=s.createTexture()),Ce.__version=E.version,d.memory.textures++),Fe){ae.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(E.mipmaps.length>0){ae.__webglFramebuffer[ie]=[];for(let se=0;se<E.mipmaps.length;se++)ae.__webglFramebuffer[ie][se]=s.createFramebuffer()}else ae.__webglFramebuffer[ie]=s.createFramebuffer()}else{if(E.mipmaps.length>0){ae.__webglFramebuffer=[];for(let ie=0;ie<E.mipmaps.length;ie++)ae.__webglFramebuffer[ie]=s.createFramebuffer()}else ae.__webglFramebuffer=s.createFramebuffer();if(xe)for(let ie=0,se=_e.length;ie<se;ie++){const Se=r.get(_e[ie]);Se.__webglTexture===void 0&&(Se.__webglTexture=s.createTexture(),d.memory.textures++)}if(I.samples>0&&Ue(I)===!1){ae.__webglMultisampledFramebuffer=s.createFramebuffer(),ae.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let ie=0;ie<_e.length;ie++){const se=_e[ie];ae.__webglColorRenderbuffer[ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ae.__webglColorRenderbuffer[ie]);const Se=l.convert(se.format,se.colorSpace),z=l.convert(se.type),me=D(se.internalFormat,Se,z,se.normalized,se.colorSpace,I.isXRRenderTarget===!0),de=bt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,de,me,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ie,s.RENDERBUFFER,ae.__webglColorRenderbuffer[ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(ae.__webglDepthRenderbuffer=s.createRenderbuffer(),nn(ae.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Fe){t.bindTexture(s.TEXTURE_CUBE_MAP,Ce.__webglTexture),Ee(s.TEXTURE_CUBE_MAP,E);for(let ie=0;ie<6;ie++)if(E.mipmaps.length>0)for(let se=0;se<E.mipmaps.length;se++)It(ae.__webglFramebuffer[ie][se],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,se);else It(ae.__webglFramebuffer[ie],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);k(E)?P(s.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(xe){for(let ie=0,se=_e.length;ie<se;ie++){const Se=_e[ie],z=r.get(Se);let me=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(me=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(me,z.__webglTexture),Ee(me,Se),It(ae.__webglFramebuffer,I,Se,s.COLOR_ATTACHMENT0+ie,me,0),k(Se)&&P(me)}t.unbindTexture()}else{let ie=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ie=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ie,Ce.__webglTexture),Ee(ie,E),E.mipmaps.length>0)for(let se=0;se<E.mipmaps.length;se++)It(ae.__webglFramebuffer[se],I,E,s.COLOR_ATTACHMENT0,ie,se);else It(ae.__webglFramebuffer,I,E,s.COLOR_ATTACHMENT0,ie,0);k(E)?P(ie):E.mipmaps.length>0&&s.texParameteri(ie,s.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&Wt(I)}function J(I){const E=I.textures;for(let ae=0,Ce=E.length;ae<Ce;ae++){const _e=E[ae];if(k(_e)&&_e.mipmapsAutoUpdate===!0){const Fe=U(I),xe=r.get(_e).__webglTexture;t.bindTexture(Fe,xe),P(Fe),t.unbindTexture()}}}const Yt=[];function Lt(I){if(I.samples>0){if(Ue(I)===!1){const E=I.textures,ae=I.width,Ce=I.height;let _e=s.COLOR_BUFFER_BIT;const Fe=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=r.get(I),ie=E.length>1;if(ie)for(let Se=0;Se<E.length;Se++)t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Se=0;Se<E.length;Se++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),ie){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xe.__webglColorRenderbuffer[Se]);const z=r.get(E[Se]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,z,0)}s.blitFramebuffer(0,0,ae,Ce,0,0,ae,Ce,_e,s.NEAREST),u===!0&&(Yt.length=0,Yt.push(s.COLOR_ATTACHMENT0+Se),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&Yt.push(Fe),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Yt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ie)for(let Se=0;Se<E.length;Se++){t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,xe.__webglColorRenderbuffer[Se]);const z=r.get(E[Se]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,z,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&u){const E=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function bt(I){return Math.min(o.maxSamples,I.samples)}function Ue(I){const E=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Et(I){const E=d.render.frame;x.get(I)!==E&&(x.set(I,E),I.update())}function qe(I,E){const ae=I.colorSpace,Ce=I.format,_e=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||ae!==Ql&&ae!==Ur&&(Ut.getTransfer(ae)===Xt?(Ce!==Hi||_e!==ai)&&gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Vt("WebGLTextures: Unsupported texture color space:",ae)),E}function rt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(f.width=I.naturalWidth||I.width,f.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(f.width=I.displayWidth,f.height=I.displayHeight):(f.width=I.width,f.height=I.height),f}this.allocateTextureUnit=be,this.resetTextureUnits=Y,this.getTextureUnits=L,this.setTextureUnits=ee,this.setTexture2D=ve,this.setTexture2DArray=Me,this.setTexture3D=Re,this.setTextureCube=ye,this.rebindTextures=zt,this.setupRenderTarget=rn,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=It,this.useMultisampledRTT=Ue,this.dispose=O}function $w(s,e){function t(r,o=Ur){let l;const d=Ut.getTransfer(o);if(r===ai)return s.UNSIGNED_BYTE;if(r===mf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===gf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===y0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===S0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===v0)return s.BYTE;if(r===_0)return s.SHORT;if(r===so)return s.UNSIGNED_SHORT;if(r===pf)return s.INT;if(r===Wi)return s.UNSIGNED_INT;if(r===Gi)return s.FLOAT;if(r===ji)return s.HALF_FLOAT;if(r===M0)return s.ALPHA;if(r===w0)return s.RGB;if(r===Hi)return s.RGBA;if(r===Gr)return s.DEPTH_COMPONENT;if(r===zr)return s.DEPTH_STENCIL;if(r===b0)return s.RED;if(r===xf)return s.RED_INTEGER;if(r===hs)return s.RG;if(r===vf)return s.RG_INTEGER;if(r===_f)return s.RGBA_INTEGER;if(r===Hl||r===Vl||r===Wl||r===jl)if(d===Xt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Hl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Wl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Hl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Wl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===jl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ad||r===Cd||r===Rd||r===Nd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Ad)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Cd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Rd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Nd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Pd||r===Ld||r===Dd||r===Id||r===Ud||r===Zl||r===Fd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Pd||r===Ld)return d===Xt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Dd)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Id)return l.COMPRESSED_R11_EAC;if(r===Ud)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Zl)return l.COMPRESSED_RG11_EAC;if(r===Fd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===kd||r===zd||r===Od||r===Bd||r===Gd||r===Hd||r===Vd||r===Wd||r===jd||r===Xd||r===$d||r===Yd||r===qd||r===Kd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===kd)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===zd)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Od)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bd)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gd)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hd)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vd)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Wd)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===jd)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Xd)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===$d)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yd)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===qd)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kd)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Zd||r===Jd||r===Qd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Zd)return d===Xt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Qd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ef||r===tf||r===Jl||r===nf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===ef)return l.COMPRESSED_RED_RGTC1_EXT;if(r===tf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Jl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===nf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ia?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const Yw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qw=`
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

}`;class Kw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new k0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ri({vertexShader:Yw,fragmentShader:qw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wn(new ho(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zw extends ps{constructor(e,t){super();const r=this;let o=null,l=1,d=null,p="local-floor",u=1,f=null,x=null,v=null,_=null,M=null,b=null;const C=typeof XRWebGLBinding<"u",y=new Kw,S={},R=t.getContextAttributes();let k=null,P=null;const U=[],D=[],w=new kt;let N=null,te=null;const $=new Ti;$.viewport=new on;const H=new Ti;H.viewport=new on;const W=[$,H],V=new cy;let G=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let ve=U[F];return ve===void 0&&(ve=new Qu,U[F]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(F){let ve=U[F];return ve===void 0&&(ve=new Qu,U[F]=ve),ve.getGripSpace()},this.getHand=function(F){let ve=U[F];return ve===void 0&&(ve=new Qu,U[F]=ve),ve.getHandSpace()};function re(F){const ve=D.indexOf(F.inputSource);if(ve===-1)return;const Me=U[ve];Me!==void 0&&(Me.update(F.inputSource,F.frame,f||d),Me.dispatchEvent({type:F.type,data:F.inputSource}))}function K(){o.removeEventListener("select",re),o.removeEventListener("selectstart",re),o.removeEventListener("selectend",re),o.removeEventListener("squeeze",re),o.removeEventListener("squeezestart",re),o.removeEventListener("squeezeend",re),o.removeEventListener("end",K),o.removeEventListener("inputsourceschange",X);for(let F=0;F<U.length;F++){const ve=D[F];ve!==null&&(D[F]=null,U[F].disconnect(ve))}G=null,O=null,y.reset();for(const F in S)delete S[F];if(e.setRenderTarget(k),M=null,_=null,v=null,o=null,P=null,be.stop(),r.isPresenting=!1,e.setPixelRatio(N),e.setSize(w.width,w.height,!1),te!==null){const F=te.camera;F.fov=te.fov,F.zoom=te.zoom,F.updateProjectionMatrix(),te=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){l=F,r.isPresenting===!0&&gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){p=F,r.isPresenting===!0&&gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||d},this.setReferenceSpace=function(F){f=F},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(F){if(o=F,o!==null){if(k=e.getRenderTarget(),o.addEventListener("select",re),o.addEventListener("selectstart",re),o.addEventListener("selectend",re),o.addEventListener("squeeze",re),o.addEventListener("squeezestart",re),o.addEventListener("squeezeend",re),o.addEventListener("end",K),o.addEventListener("inputsourceschange",X),R.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(w),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Re=null,ye=null;R.depth&&(ye=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=R.stencil?zr:Gr,Re=R.stencil?ia:Wi);const Ie={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:l};v=this.getBinding(),_=v.createProjectionLayer(Ie),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),P=new Vi(_.textureWidth,_.textureHeight,{format:Hi,type:ai,depthTexture:new ra(_.textureWidth,_.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const Me={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,Me),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Vi(M.framebufferWidth,M.framebufferHeight,{format:Hi,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(u),f=null,d=await o.requestReferenceSpace(p),be.setContext(o),be.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function X(F){for(let ve=0;ve<F.removed.length;ve++){const Me=F.removed[ve],Re=D.indexOf(Me);Re>=0&&(D[Re]=null,U[Re].disconnect(Me))}for(let ve=0;ve<F.added.length;ve++){const Me=F.added[ve];let Re=D.indexOf(Me);if(Re===-1){for(let Ie=0;Ie<U.length;Ie++)if(Ie>=D.length){D.push(Me),Re=Ie;break}else if(D[Ie]===null){D[Ie]=Me,Re=Ie;break}if(Re===-1)break}const ye=U[Re];ye&&ye.connect(Me)}}function j(F,ve){ve===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(ve.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(o===null)return;let ve=F.near,Me=F.far;y.texture!==null&&(y.depthNear>0&&(ve=y.depthNear),y.depthFar>0&&(Me=y.depthFar)),V.near=H.near=$.near=ve,V.far=H.far=$.far=Me,(G!==V.near||O!==V.far)&&(o.updateRenderState({depthNear:V.near,depthFar:V.far}),G=V.near,O=V.far),V.layers.mask=F.layers.mask|6,$.layers.mask=V.layers.mask&-5,H.layers.mask=V.layers.mask&-3;const Re=F.parent,ye=V.cameras;j(V,Re);for(let Ie=0;Ie<ye.length;Ie++)j(ye[Ie],Re);V.projectionMatrix.copy($.projectionMatrix),V.projectionMatrixInverse.copy($.projectionMatrixInverse),te===null&&F.isPerspectiveCamera&&(te={camera:F,fov:F.fov,zoom:F.zoom}),Y(F,V,Re)};function Y(F,ve,Me){Me===null?F.matrix.copy(ve.matrixWorld):(F.matrix.copy(Me.matrixWorld),F.matrix.invert(),F.matrix.multiply(ve.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(ve.projectionMatrix),F.projectionMatrixInverse.copy(ve.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=sf*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(_===null&&M===null))return u},this.setFoveation=function(F){u=F,_!==null&&(_.fixedFoveation=F),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=F)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(V)},this.getCameraTexture=function(F){return S[F]};let L=null;function ee(F,ve){if(x=ve.getViewerPose(f||d),b=ve,x!==null){const Me=x.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Re=!1;Me.length!==V.cameras.length&&(V.cameras.length=0,Re=!0);for(let He=0;He<Me.length;He++){const Ee=Me[He];let ze=null;if(M!==null)ze=M.getViewport(Ee);else{const _t=v.getViewSubImage(_,Ee);ze=_t.viewport,He===0&&(e.setRenderTargetTextures(P,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(P))}let We=W[He];We===void 0&&(We=new Ti,We.layers.enable(He),We.viewport=new on,W[He]=We),We.matrix.fromArray(Ee.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ee.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(ze.x,ze.y,ze.width,ze.height),He===0&&(V.matrix.copy(We.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Re===!0&&V.cameras.push(We)}const ye=o.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){v=r.getBinding();const He=v.getDepthInformation(Me[0]);He&&He.isValid&&He.texture&&y.init(He,o.renderState)}if(ye&&ye.includes("camera-access")&&C){e.state.unbindTexture(),v=r.getBinding();for(let He=0;He<Me.length;He++){const Ee=Me[He].camera;if(Ee){let ze=S[Ee];ze||(ze=new k0,S[Ee]=ze);const We=v.getCameraImage(Ee);ze.sourceTexture=We}}}}for(let Me=0;Me<U.length;Me++){const Re=D[Me],ye=U[Me];Re!==null&&ye!==void 0&&ye.update(Re,ve,f||d)}L&&L(F,ve),ve.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ve}),b=null}const be=new H0;be.setAnimationLoop(ee),this.setAnimationLoop=function(F){L=F},this.dispose=function(){}}}const Jw=new ln,J0=new vt;J0.set(-1,0,0,0,1,0,0,0,1);function Qw(s,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,z0(s)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function o(y,S,R,k,P){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?l(y,S):S.isMeshLambertMaterial?(l(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(y,S),v(y,S)):S.isMeshPhongMaterial?(l(y,S),x(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(y,S),_(y,S),S.isMeshPhysicalMaterial&&M(y,S,P)):S.isMeshMatcapMaterial?(l(y,S),b(y,S)):S.isMeshDepthMaterial?l(y,S):S.isMeshDistanceMaterial?(l(y,S),C(y,S)):S.isMeshNormalMaterial?l(y,S):S.isLineBasicMaterial?(d(y,S),S.isLineDashedMaterial&&p(y,S)):S.isPointsMaterial?u(y,S,R,k):S.isSpriteMaterial?f(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===zn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===zn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const R=e.get(S),k=R.envMap,P=R.envMapRotation;k&&(y.envMap.value=k,y.envMapRotation.value.setFromMatrix4(Jw.makeRotationFromEuler(P)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(J0),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function p(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function u(y,S,R,k){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*R,y.scale.value=k*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function f(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function x(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function _(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,R){y.ior.value=S.ior,S.diffuseRoughness>0&&(y.diffuseRoughness.value=S.diffuseRoughness,S.diffuseRoughnessMap&&(y.diffuseRoughnessMap.value=S.diffuseRoughnessMap,t(S.diffuseRoughnessMap,y.diffuseRoughnessMapTransform))),S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===zn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.retroreflectivity>0&&(y.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessMinimum,y.iridescenceThicknessMaximum.value=S.iridescenceThicknessMaximum,S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,S){S.matcap&&(y.matcap.value=S.matcap)}function C(y,S){const R=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function eb(s,e,t,r){let o={},l={};function d(R,k){const P=k.program;r.uniformBlockBinding(R,P,o[R.id])}function p(R,k){let P=o[R.id];P===void 0&&(b(R),P=u(R),o[R.id]=P,R.addEventListener("dispose",y));const U=k.program;r.updateUBOMapping(R,U);const D=e.render.frame;l[R.id]!==D&&(f(R),l[R.id]=D)}function u(R){const k=s.createBuffer(),P=R.__size,U=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,k),s.bufferData(s.UNIFORM_BUFFER,P,U),s.bindBuffer(s.UNIFORM_BUFFER,null),k}function f(R){const k=o[R.id],P=R.uniforms,U=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,k);for(let D=0,w=P.length;D<w;D++){const N=P[D];if(Array.isArray(N))for(let te=0,$=N.length;te<$;te++)x(N[te],D,te,U);else x(N,D,0,U)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(R,k,P,U){if(_(R,k,P,U)===!0){const D=R.__offset,w=R.value;if(Array.isArray(w)){let N=0;for(let te=0;te<w.length;te++){const $=w[te],H=C($,!0);v($,R.__data,N),N+=H.storage/Float32Array.BYTES_PER_ELEMENT}}else v(w,R.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,D,R.__data)}}function v(R,k,P){typeof R=="number"||typeof R=="boolean"?k[P]=R:R.isMatrix3?(k[P]=R.elements[0],k[P+1]=R.elements[1],k[P+2]=R.elements[2],k[P+3]=0,k[P+4]=R.elements[3],k[P+5]=R.elements[4],k[P+6]=R.elements[5],k[P+7]=0,k[P+8]=R.elements[6],k[P+9]=R.elements[7],k[P+10]=R.elements[8],k[P+11]=0):ArrayBuffer.isView(R)?k.set(R.subarray(0,k.length-P),P):R.toArray(k,P)}function _(R,k,P,U){const D=R.value,w=k+"_"+P;if(Array.isArray(D)){U[w]===void 0&&(U[w]=[]);const N=U[w];let te=!1;for(let $=0;$<D.length;$++)M(D[$],N,$)===!0&&(te=!0);return te}return M(D,U,w)}function M(R,k,P){if(k[P]===void 0)return typeof R=="number"||typeof R=="boolean"?k[P]=R:ArrayBuffer.isView(R)?k[P]=R.slice():k[P]=R.clone(),!0;{const U=k[P];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return k[P]=R,!0}else{if(ArrayBuffer.isView(R))return!0;if(U.equals(R)===!1)return U.copy(R),!0}}return!1}function b(R){const k=R.uniforms;let P=0;const U=16;for(let w=0,N=k.length;w<N;w++){const te=Array.isArray(k[w])?k[w]:[k[w]];for(let $=0,H=te.length;$<H;$++){const W=te[$],V=Array.isArray(W.value)?W.value:[W.value],G=Array.isArray(k[w])||Array.isArray(W.value);let O=P;for(let K=0,X=V.length;K<X;K++){const j=V[K],Y=C(j,G),L=P%U,ee=L%Y.boundary,be=L+ee;P+=ee,be!==0&&U-be<Y.storage&&(P+=U-be),K===0&&(O=P),P+=Y.storage}const re=W.type==="int"?Int32Array:W.type==="uint"?Uint32Array:Float32Array;W.__data=new re((P-O)/Float32Array.BYTES_PER_ELEMENT),W.__offset=O}}const D=P%U;return D>0&&(P+=U-D),R.__size=P,R.__cache={},this}function C(R,k){const P={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(P.boundary=4,P.storage=4):R.isVector2?(P.boundary=8,P.storage=8):R.isVector3||R.isColor?(P.boundary=16,P.storage=12):R.isVector4?(P.boundary=16,P.storage=16):R.isMatrix3?(P.boundary=16,P.storage=48):R.isMatrix4?(P.boundary=16,P.storage=64):R.isTexture?gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(P.boundary=16,P.storage=R.byteLength):gt("WebGLRenderer: Unsupported uniform value type.",R),k===!0&&(P.boundary=16,P.storage=Math.ceil(P.storage/16)*16),P}function y(R){const k=R.target;k.removeEventListener("dispose",y),s.deleteBuffer(o[k.id]),delete o[k.id],delete l[k.id]}function S(){for(const R in o)s.deleteBuffer(o[R]);o={},l={}}return{bind:d,update:p,dispose:S}}const tb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function nb(){return zi===null&&(zi=new K_(tb,16,16,hs,ji),zi.name="DFG_LUT",zi.minFilter=Jn,zi.magFilter=Jn,zi.wrapS=oi,zi.wrapT=oi,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class ib{constructor(e={}){const{canvas:t=S_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:M=ai}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=d;const C=M,y=new Set([_f,vf,xf]),S=new Set([ai,Wi,so,ia,mf,gf]),R=new Uint32Array(4),k=new Int32Array(4),P={textures:[],min:[],max:[],resolution:[]};let U=null,D=null;const w=[],N=[];let te=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=or,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const $=this;let H=!1,W=null,V=null,G=null,O=null;this._outputColorSpace=si;let re=0,K=0,X=null,j=-1,Y=null;const L=new on,ee=new on;let be=null;const F=new Ct(0);let ve=0,Me=t.width,Re=t.height,ye=1,Ie=null,lt=null;const He=new on(0,0,Me,Re),Ee=new on(0,0,Me,Re);let ze=!1;const We=new oo,_t=new wf;let yt=!1,wt=!1;const It=new ln,nn=new pe,Pt=new on,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function rn(){return X===null?ye:1}let J=r;function Yt(A,q){return t.getContext(A,q)}let Lt,bt,Ue,Et,qe,rt,I,E,ae,Ce,_e,Fe,xe,ie,se,Se,z,me,de,Pe,Te,Le,Ze;try{const A={alpha:!0,depth:o,stencil:l,antialias:p,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hf}`),t.addEventListener("webglcontextlost",je,!1),t.addEventListener("webglcontextrestored",$e,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),J===null){const q="webgl2";if(J=Yt(q,A),J===null)throw Yt(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ut()}catch(A){throw t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),Vt("WebGLRenderer: "+A.message),A}function ut(){Lt=new aM(J),Lt.init(),Te=new $w(J,Lt),bt=new q1(J,Lt,e,Te),Ue=new jw(J,Lt),bt.reversedDepthBuffer&&_&&Ue.buffers.depth.setReversed(!0),V=J.createFramebuffer(),G=J.createFramebuffer(),O=J.createFramebuffer(),Et=new cM(J),qe=new Pw,rt=new Xw(J,Lt,Ue,qe,bt,Te,Et),I=new sM($),E=new dy(J),Le=new $1(J,E),ae=new oM(J,E,Et,Le),Ce=new dM(J,ae,E,Le,Et),me=new uM(J,bt,rt),se=new K1(qe),_e=new Nw($,I,Lt,bt,Le,se),Fe=new Qw($,qe),xe=new Dw,ie=new Ow(Lt),z=new X1($,I,Ue,Ce,b,u),Se=new Ww($,Ce,bt),Ze=new eb(J,Et,bt,Ue),de=new Y1(J,Lt,Et),Pe=new lM(J,Lt,Et),Et.programs=_e.programs,$.capabilities=bt,$.extensions=Lt,$.properties=qe,$.renderLists=xe,$.shadowMap=Se,$.state=Ue,$.info=Et}C!==ai&&(te=new hM(C,t.width,t.height,p,o,l));const Q=new Zw($,J);this.xr=Q,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const A=Lt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Lt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(A){A!==void 0&&(ye=A,this.setSize(Me,Re,!1))},this.getSize=function(A){return A.set(Me,Re)},this.setSize=function(A,q,fe=!0){if(Q.isPresenting){gt("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=A,Re=q,t.width=Math.floor(A*ye),t.height=Math.floor(q*ye),fe===!0&&(t.style.width=A+"px",t.style.height=q+"px"),te!==null&&te.setSize(t.width,t.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(Me*ye,Re*ye).floor()},this.setDrawingBufferSize=function(A,q,fe){Me=A,Re=q,ye=fe,t.width=Math.floor(A*fe),t.height=Math.floor(q*fe),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(C===ai){Vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}te.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(He)},this.setViewport=function(A,q,fe,le){A.isVector4?He.set(A.x,A.y,A.z,A.w):He.set(A,q,fe,le),Ue.viewport(L.copy(He).multiplyScalar(rn()).round())},this.getScissor=function(A){return A.copy(Ee)},this.setScissor=function(A,q,fe,le){A.isVector4?Ee.set(A.x,A.y,A.z,A.w):Ee.set(A,q,fe,le),Ue.scissor(ee.copy(Ee).multiplyScalar(rn()).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(A){Ue.setScissorTest(ze=A)},this.setOpaqueSort=function(A){Ie=A},this.setTransparentSort=function(A){lt=A},this.getClearColor=function(A){return A.copy(z.getClearColor())},this.setClearColor=function(){z.setClearColor(...arguments)},this.getClearAlpha=function(){return z.getClearAlpha()},this.setClearAlpha=function(){z.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,fe=!0){let le=0;if(A){let oe=!1;if(X!==null){const Xe=X.texture.format;oe=y.has(Xe)}if(oe){const Xe=X.texture.type,Qe=S.has(Xe),Ve=z.getClearColor(),Ye=z.getClearAlpha(),tt=Ve.r,ht=Ve.g,St=Ve.b;Qe?(R[0]=tt,R[1]=ht,R[2]=St,R[3]=Ye,J.clearBufferuiv(J.COLOR,0,R)):(k[0]=tt,k[1]=ht,k[2]=St,k[3]=Ye,J.clearBufferiv(J.COLOR,0,k))}else le|=J.COLOR_BUFFER_BIT}q&&(le|=J.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(le|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&J.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),W=A},this.dispose=function(){t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),z.dispose(),xe.dispose(),ie.dispose(),rt.dispose(),qe.dispose(),I.dispose(),Ce.dispose(),ae.dispose(),Le.dispose(),Ze.dispose(),_e.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",qt),Q.removeEventListener("sessionend",mn),Mn.stop()};function je(A){A.preventDefault(),cm("WebGLRenderer: Context Lost."),H=!0}function $e(){cm("WebGLRenderer: Context Restored."),H=!1;const A=Et.autoReset,q=Se.enabled,fe=Se.autoUpdate,le=Se.needsUpdate,oe=Se.type;ut(),Et.autoReset=A,Se.enabled=q,Se.autoUpdate=fe,Se.needsUpdate=le,Se.type=oe}function Oe(A){Vt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function xt(A){const q=A.target;q.removeEventListener("dispose",xt),Nt(q)}function Nt(A){ce(A),qe.remove(A)}function ce(A){const q=qe.get(A).programs;q!==void 0&&(q.forEach(function(fe){_e.releaseProgram(fe)}),A.isShaderMaterial&&_e.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,fe,le,oe,Xe){q===null&&(q=Wt);const Qe=oe.isMesh&&oe.matrixWorld.determinantAffine()<0,Ve=fa(A,q,fe,le,oe);Ue.setMaterial(le,Qe);let Ye=fe.index,tt=1;if(le.wireframe===!0){if(Ye=ae.getWireframeAttribute(fe),Ye===void 0)return;tt=2}const ht=fe.drawRange,St=fe.attributes.position;let nt=ht.start*tt,Tt=(ht.start+ht.count)*tt;Xe!==null&&(nt=Math.max(nt,Xe.start*tt),Tt=Math.min(Tt,(Xe.start+Xe.count)*tt)),Ye!==null?(nt=Math.max(nt,0),Tt=Math.min(Tt,Ye.count)):St!=null&&(nt=Math.max(nt,0),Tt=Math.min(Tt,St.count));const en=Tt-nt;if(en<0||en===1/0)return;Le.setup(oe,le,Ve,fe,Ye);let jt,Ht=de;if(Ye!==null&&(jt=E.get(Ye),Ht=Pe,Ht.setIndex(jt)),oe.isMesh)le.wireframe===!0?(Ue.setLineWidth(le.wireframeLinewidth*rn()),Ht.setMode(J.LINES)):Ht.setMode(J.TRIANGLES);else if(oe.isLine){let cn=le.linewidth;cn===void 0&&(cn=1),Ue.setLineWidth(cn*rn()),oe.isLineSegments?Ht.setMode(J.LINES):oe.isLineLoop?Ht.setMode(J.LINE_LOOP):Ht.setMode(J.LINE_STRIP)}else oe.isPoints?Ht.setMode(J.POINTS):oe.isSprite&&Ht.setMode(J.TRIANGLES);if(oe.isBatchedMesh)if(Lt.get("WEBGL_multi_draw"))Ht.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{const cn=oe._multiDrawStarts,it=oe._multiDrawCounts,gn=oe._multiDrawCount,ot=Ye?E.get(Ye).bytesPerElement:1,Pi=qe.get(le).currentProgram.getUniforms();for(let xn=0;xn<gn;xn++)Pi.setValue(J,"_gl_DrawID",xn),Ht.render(cn[xn]/ot,it[xn])}else if(oe.isInstancedMesh)Ht.renderInstances(nt,en,oe.count);else if(fe.isInstancedBufferGeometry){const cn=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,it=Math.min(fe.instanceCount,cn);Ht.renderInstances(nt,en,it)}else Ht.render(nt,en)};function Be(A,q,fe,le){W!==null&&A.isNodeMaterial&&W.setObject(le,A),yt===!0&&se.setState(A,fe,!1),A.transparent===!0&&A.side===Bi&&A.forceSinglePass===!1?(A.side=zn,A.needsUpdate=!0,jr(A,q,le),A.side=fs,A.needsUpdate=!0,jr(A,q,le),A.side=Bi):jr(A,q,le)}this.compile=function(A,q,fe=null){fe===null&&(fe=A),W!==null&&W.renderStart(A,q,fe),D=ie.get(fe),D.init(q),N.push(D),fe.traverseVisible(function(oe){oe.isLight&&oe.layers.test(q.layers)&&(D.pushLight(oe),oe.castShadow&&D.pushShadow(oe))}),A!==fe&&A.traverseVisible(function(oe){oe.isLight&&oe.layers.test(q.layers)&&(D.pushLight(oe),oe.castShadow&&D.pushShadow(oe))}),D.setupLights(),W!==null&&W.updateLights(D.state.lightsArray),wt=this.localClippingEnabled,yt=se.init(this.clippingPlanes,wt),yt===!0&&se.setGlobalState(this.clippingPlanes,q),W!==null&&Se.render(D.state.shadowsArray,fe,q);const le=new Set;return A.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;const Xe=oe.material;if(Xe)if(Array.isArray(Xe))for(let Qe=0;Qe<Xe.length;Qe++){const Ve=Xe[Qe];Be(Ve,fe,q,oe),le.add(Ve)}else Be(Xe,fe,q,oe),le.add(Xe)}),D=N.pop(),W!==null&&W.renderEnd(),le},this.compileAsync=function(A,q,fe=null){const le=this.compile(A,q,fe);return new Promise(oe=>{function Xe(){if(le.forEach(function(Qe){const Ye=qe.get(Qe).currentProgram;(Ye===void 0||Ye.isReady())&&le.delete(Qe)}),le.size===0){oe(A);return}setTimeout(Xe,10)}Lt.get("KHR_parallel_shader_compile")!==null?Xe():setTimeout(Xe,10)})};let Ae=null;function mt(A){Ae&&Ae(A)}function qt(){Mn.stop()}function mn(){Mn.start()}const Mn=new H0;Mn.setAnimationLoop(mt),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(A){Ae=A,Q.setAnimationLoop(A),A===null?Mn.stop():Mn.start()},Q.addEventListener("sessionstart",qt),Q.addEventListener("sessionend",mn),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){Vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;W!==null&&W.renderStart(A,q);const fe=Q.enabled===!0&&Q.isPresenting===!0,le=te!==null&&(X===null||fe)&&te.begin($,X);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(te===null||te.isCompositing()===!1)&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(q),q=Q.getCamera()),A.isScene===!0&&A.onBeforeRender($,A,q,X),D=ie.get(A,N.length),D.init(q),D.state.textureUnits=rt.getTextureUnits(),N.push(D),It.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),q.isArrayCamera?_t.setFromArrayCamera(q):We.setFromProjectionMatrix(It,Ci,q.reversedDepth),wt=this.localClippingEnabled,yt=se.init(this.clippingPlanes,wt),U=xe.get(A,w.length),U.init(),w.push(U),this.info.render.frame++,Q.enabled===!0&&Q.isPresenting===!0){const Qe=$.xr.getDepthSensingMesh();Qe!==null&&Ni(Qe,q,-1/0,$.sortObjects)}Ni(A,q,0,$.sortObjects),U.finish(),W!==null&&W.updateLights(D.state.lightsArray),$.sortObjects===!0&&U.sort(Ie,lt),zt=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,zt&&z.addToRenderList(U,A),this.info.autoReset===!0&&this.info.reset(),yt===!0&&se.beginShadows();const oe=D.state.shadowsArray;if(Se.render(oe,A,q),yt===!0&&se.endShadows(),(le&&te.hasRenderPass())===!1){const Qe=U.opaque,Ve=U.transmissive;if(D.setupLights(),q.isArrayCamera){const Ye=q.cameras;if(Ve.length>0)for(let tt=0,ht=Ye.length;tt<ht;tt++){const St=Ye[tt];ca(Qe,Ve,A,St)}zt&&z.render(A);for(let tt=0,ht=Ye.length;tt<ht;tt++){const St=Ye[tt];ms(U,A,St,St.viewport)}}else Ve.length>0&&ca(Qe,Ve,A,q),zt&&z.render(A),ms(U,A,q)}X!==null&&K===0&&(rt.updateMultisampleRenderTarget(X),rt.updateRenderTargetMipmap(X)),le&&te.end($),A.isScene===!0&&A.onAfterRender($,A,q),Le.resetDefaultState(),j=-1,Y=null,N.pop(),N.length>0?(D=N[N.length-1],rt.setTextureUnits(D.state.textureUnits),yt===!0&&se.setGlobalState($.clippingPlanes,D.state.camera)):D=null,w.pop(),w.length>0?U=w[w.length-1]:U=null,W!==null&&W.renderEnd()};function Ni(A,q,fe,le){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)fe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)D.pushLight(A),A.castShadow&&D.pushShadow(A);else if(A.isSprite){const Qe=q.isArrayCamera?_t:We;if(!A.frustumCulled||A.intersectsFrustum(Qe)){le&&Pt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(It);const Ve=Ce.update(A),Ye=A.material;Ye.visible&&U.push(A,Ve,Ye,fe,Pt.z,null,q)}}else if(A.isMesh||A.isLine||A.isPoints){const Qe=q.isArrayCamera?_t:We;if(!A.frustumCulled||A.intersectsFrustum(Qe)){const Ve=Ce.update(A),Ye=A.material;if(le&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Pt.copy(A.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Pt.copy(Ve.boundingSphere.center)),Pt.applyMatrix4(A.matrixWorld).applyMatrix4(It)),Array.isArray(Ye)){const tt=Ve.groups;for(let ht=0,St=tt.length;ht<St;ht++){const nt=tt[ht],Tt=Ye[nt.materialIndex];Tt&&Tt.visible&&U.push(A,Ve,Tt,fe,Pt.z,nt,q)}}else Ye.visible&&U.push(A,Ve,Ye,fe,Pt.z,null,q)}}}const Xe=A.children;for(let Qe=0,Ve=Xe.length;Qe<Ve;Qe++)Ni(Xe[Qe],q,fe,le)}function ms(A,q,fe,le){const{opaque:oe,transmissive:Xe,transparent:Qe}=A;D.setupLightsView(fe),yt===!0&&se.setGlobalState($.clippingPlanes,fe),le&&Ue.viewport(L.copy(le)),oe.length>0&&Wr(oe,q,fe),Xe.length>0&&Wr(Xe,q,fe),Qe.length>0&&Wr(Qe,q,fe),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function ca(A,q,fe,le){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[le.id]===void 0){const nt=Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[le.id]=new Vi(1,1,{generateMipmaps:!0,type:nt?ji:ai,minFilter:kr,samples:Math.max(4,bt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ut.workingColorSpace})}const Xe=D.state.transmissionRenderTarget[le.id],Qe=le.viewport||L;Xe.setSize(Qe.z*$.transmissionResolutionScale,Qe.w*$.transmissionResolutionScale);const Ve=$.getRenderTarget(),Ye=$.getActiveCubeFace(),tt=$.getActiveMipmapLevel();$.setRenderTarget(Xe),$.getClearColor(F),ve=$.getClearAlpha(),ve<1&&$.setClearColor(16777215,.5),$.clear(),zt&&z.render(fe);const ht=$.toneMapping;$.toneMapping=or;const St=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),D.setupLightsView(le),yt===!0&&se.setGlobalState($.clippingPlanes,le),Wr(A,fe,le),rt.updateMultisampleRenderTarget(Xe),rt.updateRenderTargetMipmap(Xe),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Tt=0,en=q.length;Tt<en;Tt++){const jt=q[Tt],{object:Ht,geometry:cn,material:it,group:gn}=jt;if(it.side===Bi&&Ht.layers.test(le.layers)){const ot=it.side;it.side=zn,it.needsUpdate=!0,ua(Ht,fe,le,cn,it,gn),it.side=ot,it.needsUpdate=!0,nt=!0}}nt===!0&&(rt.updateMultisampleRenderTarget(Xe),rt.updateRenderTargetMipmap(Xe))}$.setRenderTarget(Ve,Ye,tt),$.setClearColor(F,ve),St!==void 0&&(le.viewport=St),$.toneMapping=ht}function Wr(A,q,fe){const le=q.isScene===!0?q.overrideMaterial:null;for(let oe=0,Xe=A.length;oe<Xe;oe++){const Qe=A[oe],{object:Ve,geometry:Ye,group:tt}=Qe;let ht=Qe.material;ht.allowOverride===!0&&le!==null&&(ht=le),Ve.layers.test(fe.layers)&&ua(Ve,q,fe,Ye,ht,tt)}}function ua(A,q,fe,le,oe,Xe){W!==null&&oe.isNodeMaterial&&W.setObject(A,oe),A.onBeforeRender($,q,fe,le,oe,Xe),A.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),oe.onBeforeRender($,q,fe,le,A,Xe),oe.transparent===!0&&oe.side===Bi&&oe.forceSinglePass===!1?(oe.side=zn,oe.needsUpdate=!0,$.renderBufferDirect(fe,q,le,oe,A,Xe),oe.side=fs,oe.needsUpdate=!0,$.renderBufferDirect(fe,q,le,oe,A,Xe),oe.side=Bi):$.renderBufferDirect(fe,q,le,oe,A,Xe),A.onAfterRender($,q,fe,le,oe,Xe)}function da(A){let q=0;for(const fe of A)fe.texture!==null&&q++;return q}function jr(A,q,fe){q.isScene!==!0&&(q=Wt);const le=qe.get(A),oe=D.state.lights,Xe=D.state.shadowsArray,Qe=oe.state.version,Ve=_e.getParameters(A,oe.state,Xe,q,fe,D.state.lightProbeGridArray),Ye=_e.getProgramCacheKey(Ve);let tt=le.programs;le.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,le.fog=q.fog;const ht=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;le.envMap=I.get(A.envMap||le.environment,ht),le.envMapRotation=le.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,tt===void 0&&(A.addEventListener("dispose",xt),tt=new Map,le.programs=tt,le.programVariants=new Map);let St=tt.get(Ye);if(St!==void 0){if(le.currentProgram===St&&le.lightsStateVersion===Qe)return mo(A,Ve),St}else Ve.uniforms=_e.getUniforms(A),W!==null&&A.isNodeMaterial&&W.build(A,fe,Ve),A.onBeforeCompile(Ve,$),St=_e.acquireProgram(Ve,Ye),tt.set(Ye,St),le.uniforms=Ve.uniforms;const nt=le.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(nt.clippingPlanes=se.uniform),mo(A,Ve),le.needsLights=gs(A),le.lightsStateVersion=Qe,le.needsLights&&(nt.ambientLightColor.value=oe.state.ambient,nt.lightProbe.value=oe.state.probe,nt.sunLights.value=oe.state.sun,nt.sunLightShadows.value=oe.state.sunShadow,nt.directionalLights.value=oe.state.directional,nt.directionalLightShadows.value=oe.state.directionalShadow,nt.spotLights.value=oe.state.spot,nt.spotLightShadows.value=oe.state.spotShadow,nt.rectAreaLights.value=oe.state.rectArea,nt.ltc_1.value=oe.state.rectAreaLTC1,nt.ltc_2.value=oe.state.rectAreaLTC2,nt.pointLights.value=oe.state.point,nt.pointLightShadows.value=oe.state.pointShadow,nt.hemisphereLights.value=oe.state.hemi,nt.sunShadowMatrix.value=oe.state.sunShadowMatrix,nt.sunShadowCascade.value=oe.state.sunShadowCascade,nt.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,nt.spotLightMatrix.value=oe.state.spotLightMatrix,nt.spotLightMap.value=oe.state.spotLightMap,nt.pointShadowMatrix.value=oe.state.pointShadowMatrix),le.numLightProbeGrids=da(D.state.lightProbeGridArray),le.currentProgram=St,le.uniformsList=null,St}function lc(A,q,fe,le,oe){const Xe=qe.get(A),Qe=Xe.currentProgram.id+","+le+","+oe;let Ve=Xe.programVariants.get(Qe);return Ve===void 0?(Ve=jr(A,q,fe),Xe.programVariants.set(Qe,Ve)):(Xe.currentProgram=Ve,Xe.uniformsList=null,Xe.outputColorSpace=le,Xe.toneMapping=oe),Ve}function Qt(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=$l.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function mo(A,q){const fe=qe.get(A);fe.outputColorSpace=q.outputColorSpace,fe.batching=q.batching,fe.batchingColor=q.batchingColor,fe.instancing=q.instancing,fe.instancingColor=q.instancingColor,fe.instancingMorph=q.instancingMorph,fe.skinning=q.skinning,fe.morphTargets=q.morphTargets,fe.morphNormals=q.morphNormals,fe.morphColors=q.morphColors,fe.morphTargetsCount=q.morphTargetsCount,fe.numClippingPlanes=q.numClippingPlanes,fe.numIntersection=q.numClipIntersection,fe.vertexAlphas=q.vertexAlphas,fe.vertexTangents=q.vertexTangents,fe.toneMapping=q.toneMapping}function fa(A,q,fe,le,oe){q.isScene!==!0&&(q=Wt),rt.resetTextureUnits();const Xe=q.fog,Qe=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?q.environment:null,Ve=X===null?$.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ut.workingColorSpace,Ye=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,tt=I.get(le.envMap||Qe,Ye),ht=le.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,St=!!fe.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),nt=!!fe.morphAttributes.position,Tt=!!fe.morphAttributes.normal,en=!!fe.morphAttributes.color;let jt=or;le.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(jt=$.toneMapping);const Ht=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,cn=Ht!==void 0?Ht.length:0,it=qe.get(le),gn=D.state.lights;if(yt===!0&&(wt===!0||A!==Y)){const Bt=A===Y&&le.id===j;se.setState(le,A,Bt)}let ot=!1,Pi=!1;le.version===it.__version?it.needsLights&&it.lightsStateVersion!==gn.state.version||oe.isBatchedMesh&&it.batching===!1||!oe.isBatchedMesh&&it.batching===!0||oe.isBatchedMesh&&it.batchingColor===!0&&oe._colorsTexture===null||oe.isBatchedMesh&&it.batchingColor===!1&&oe._colorsTexture!==null||oe.isInstancedMesh&&it.instancing===!1||!oe.isInstancedMesh&&it.instancing===!0||oe.isSkinnedMesh&&it.skinning===!1||!oe.isSkinnedMesh&&it.skinning===!0||oe.isInstancedMesh&&it.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&it.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&it.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&it.instancingMorph===!1&&oe.morphTexture!==null||it.envMap!==tt||le.fog===!0&&it.fog!==Xe||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==se.numPlanes||it.numIntersection!==se.numIntersection)||it.vertexAlphas!==ht||it.vertexTangents!==St||it.morphTargets!==nt||it.morphNormals!==Tt||it.morphColors!==en||it.morphTargetsCount!==cn||it.numLightProbeGrids!==da(D.state.lightProbeGridArray)?ot=!0:(it.outputColorSpace!==Ve||it.toneMapping!==jt)&&(Pi=!0):(ot=!0,it.__version=le.version);let xn=it.currentProgram;(ot===!0||Pi===!0)&&(xn=Pi===!0?lc(le,q,oe,Ve,jt):jr(le,q,oe),W&&le.isNodeMaterial&&W.onUpdateProgram(le,xn,it));let ur=!1,mi=!1,Li=!1;const Dt=xn.getUniforms(),dn=it.uniforms;if(Ue.useProgram(xn.program)&&(ur=!0,mi=!0,Li=!0),le.id!==j&&(j=le.id,mi=!0),ur||Y!==A){Ue.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Dt.setValue(J,"projectionMatrix",A.projectionMatrix),Dt.setValue(J,"viewMatrix",A.matrixWorldInverse);const $t=Dt.map.cameraPosition;$t!==void 0&&$t.setValue(J,nn.setFromMatrixPosition(A.matrixWorld)),bt.logarithmicDepthBuffer&&Dt.setValue(J,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Dt.setValue(J,"isOrthographic",A.isOrthographicCamera===!0),Y!==A&&(Y=A,mi=!0,Li=!0)}if(it.needsLights&&(gn.state.sunShadowMap.length>0&&Dt.setValue(J,"sunShadowMap",gn.state.sunShadowMap,rt),gn.state.directionalShadowMap.length>0&&Dt.setValue(J,"directionalShadowMap",gn.state.directionalShadowMap,rt),gn.state.spotShadowMap.length>0&&Dt.setValue(J,"spotShadowMap",gn.state.spotShadowMap,rt),gn.state.pointShadowMap.length>0&&Dt.setValue(J,"pointShadowMap",gn.state.pointShadowMap,rt)),oe.isSkinnedMesh){Dt.setOptional(J,oe,"bindMatrix"),Dt.setOptional(J,oe,"bindMatrixInverse");const Bt=oe.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Dt.setValue(J,"boneTexture",Bt.boneTexture,rt))}oe.isBatchedMesh&&(Dt.setOptional(J,oe,"batchingTexture"),Dt.setValue(J,"batchingTexture",oe._matricesTexture,rt),Dt.setOptional(J,oe,"batchingIdTexture"),Dt.setValue(J,"batchingIdTexture",oe._indirectTexture,rt),Dt.setOptional(J,oe,"batchingColorTexture"),oe._colorsTexture!==null&&Dt.setValue(J,"batchingColorTexture",oe._colorsTexture,rt));const Pn=fe.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&me.update(oe,fe,xn),(mi||it.receiveShadow!==oe.receiveShadow)&&(it.receiveShadow=oe.receiveShadow,Dt.setValue(J,"receiveShadow",oe.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&q.environment!==null&&(dn.envMapIntensity.value=q.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=nb()),mi){if(Dt.setValue(J,"toneMappingExposure",$.toneMappingExposure),it.needsLights&&go(dn,Li),Xe&&le.fog===!0&&Fe.refreshFogUniforms(dn,Xe),Fe.refreshMaterialUniforms(dn,le,ye,Re,D.state.transmissionRenderTarget[A.id]),it.needsLights&&it.numLightProbeGrids>0){const Bt=P;let $t=0;for(const wn of D.state.lightProbeGridArray)wn.texture!==null&&(Bt.textures[$t]=wn.texture,Bt.min[$t]=wn.boundingBox.min,Bt.max[$t]=wn.boundingBox.max,Bt.resolution[$t]=wn.resolution,$t++);for(const wn in Bt)Bt[wn].length=$t;dn.probesSH.value=Bt.textures,dn.probesMin.value=Bt.min,dn.probesMax.value=Bt.max,dn.probesResolution.value=Bt.resolution}$l.upload(J,Qt(it),dn,rt)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&($l.upload(J,Qt(it),dn,rt),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Dt.setValue(J,"center",oe.center),Dt.setValue(J,"modelViewMatrix",oe.modelViewMatrix),Dt.setValue(J,"normalMatrix",oe.normalMatrix),Dt.setValue(J,"modelMatrix",oe.matrixWorld),le.uniformsGroups!==void 0){const Bt=le.uniformsGroups;for(let $t=0,wn=Bt.length;$t<wn;$t++){const dr=Bt[$t];Ze.update(dr,xn),Ze.bind(dr,xn)}}return xn}function go(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.sunLights.needsUpdate=q,A.sunLightShadows.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function gs(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return re},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,q,fe){const le=qe.get(A);le.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),qe.get(A.texture).__webglTexture=q,qe.get(A.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:fe,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const fe=qe.get(A);fe.__webglFramebuffer=q,fe.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,fe=0){X=A,re=q,K=fe;let le=null,oe=!1,Xe=!1;if(A){const Ve=qe.get(A);if(Ve.__useDefaultFramebuffer!==void 0){Ue.bindFramebuffer(J.FRAMEBUFFER,Ve.__webglFramebuffer),L.copy(A.viewport),ee.copy(A.scissor),be=A.scissorTest,Ue.viewport(L),Ue.scissor(ee),Ue.setScissorTest(be),j=-1;return}else if(Ve.__webglFramebuffer===void 0)rt.setupRenderTarget(A);else if(Ve.__hasExternalTextures)rt.rebindTextures(A,qe.get(A.texture).__webglTexture,qe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ht=A.depthTexture;if(Ve.__boundDepthTexture!==ht){if(ht!==null&&qe.has(ht)&&(A.width!==ht.image.width||A.height!==ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(A)}}const Ye=A.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Xe=!0);const tt=qe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(tt[q])?le=tt[q][fe]:le=tt[q],oe=!0):A.samples>0&&rt.useMultisampledRTT(A)===!1?le=qe.get(A).__webglMultisampledFramebuffer:Array.isArray(tt)?le=tt[fe]:le=tt,L.copy(A.viewport),ee.copy(A.scissor),be=A.scissorTest}else L.copy(He).multiplyScalar(ye).floor(),ee.copy(Ee).multiplyScalar(ye).floor(),be=ze;if(fe!==0&&(le=V),Ue.bindFramebuffer(J.FRAMEBUFFER,le)&&Ue.drawBuffers(A,le),Ue.viewport(L),Ue.scissor(ee),Ue.setScissorTest(be),oe){const Ve=qe.get(A.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ve.__webglTexture,fe)}else if(Xe){const Ve=q;for(let Ye=0;Ye<A.textures.length;Ye++){const tt=qe.get(A.textures[Ye]);J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Ye,tt.__webglTexture,fe,Ve)}}else if(A!==null&&fe!==0){const Ve=qe.get(A.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Ve.__webglTexture,fe)}j=-1};function xo(A){const q=qe.get(A);return(q.__readFormat!==A.format||q.__readType!==A.type)&&(q.__readFormat=A.format,q.__readType=A.type,q.__formatReadable=bt.textureFormatReadable(A.format),q.__typeReadable=bt.textureTypeReadable(A.type)),q}this.readRenderTargetPixels=function(A,q,fe,le,oe,Xe,Qe,Ve=0){if(!(A&&A.isWebGLRenderTarget)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Qe!==void 0&&(Ye=Ye[Qe],Array.isArray(Ye)&&(Ye=Ye[0])),Ye){Ue.bindFramebuffer(J.FRAMEBUFFER,Ye);try{const tt=A.textures[Ve],ht=tt.format,St=tt.type;A.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Ve);const nt=xo(tt);if(nt.__formatReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(nt.__typeReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-le&&fe>=0&&fe<=A.height-oe&&J.readPixels(q,fe,le,oe,Te.convert(ht),Te.convert(St),Xe)}finally{const tt=X!==null?qe.get(X).__webglFramebuffer:null;Ue.bindFramebuffer(J.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(A,q,fe,le,oe,Xe,Qe,Ve=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Qe!==void 0&&(Ye=Ye[Qe],Array.isArray(Ye)&&(Ye=Ye[0])),Ye)if(q>=0&&q<=A.width-le&&fe>=0&&fe<=A.height-oe){Ue.bindFramebuffer(J.FRAMEBUFFER,Ye);const tt=A.textures[Ve],ht=tt.format,St=tt.type;A.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Ve);const nt=xo(tt);if(nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Tt=J.createBuffer();J.bindBuffer(J.PIXEL_PACK_BUFFER,Tt),J.bufferData(J.PIXEL_PACK_BUFFER,Xe.byteLength,J.STREAM_READ),J.readPixels(q,fe,le,oe,Te.convert(ht),Te.convert(St),0),J.bindBuffer(J.PIXEL_PACK_BUFFER,null);const en=X!==null?qe.get(X).__webglFramebuffer:null;Ue.bindFramebuffer(J.FRAMEBUFFER,en);const jt=J.fenceSync(J.SYNC_GPU_COMMANDS_COMPLETE,0);return J.flush(),await M_(J,jt,4),J.bindBuffer(J.PIXEL_PACK_BUFFER,Tt),J.getBufferSubData(J.PIXEL_PACK_BUFFER,0,Xe),J.bindBuffer(J.PIXEL_PACK_BUFFER,null),J.deleteBuffer(Tt),J.deleteSync(jt),Xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,fe=0){const le=Math.pow(2,-fe),oe=Math.floor(A.image.width*le),Xe=Math.floor(A.image.height*le),Qe=q!==null?q.x:0,Ve=q!==null?q.y:0;rt.setTexture2D(A,0),J.copyTexSubImage2D(J.TEXTURE_2D,fe,0,0,Qe,Ve,oe,Xe),Ue.unbindTexture()},this.copyTextureToTexture=function(A,q,fe=null,le=null,oe=0,Xe=0){let Qe,Ve,Ye,tt,ht,St,nt,Tt,en;const jt=A.isCompressedTexture?A.mipmaps[Xe]:A.image;if(fe!==null)Qe=fe.max.x-fe.min.x,Ve=fe.max.y-fe.min.y,Ye=fe.isBox3?fe.max.z-fe.min.z:1,tt=fe.min.x,ht=fe.min.y,St=fe.isBox3?fe.min.z:0;else{const Dt=Math.pow(2,-oe);Qe=Math.floor(jt.width*Dt),Ve=Math.floor(jt.height*Dt),A.isDataArrayTexture?Ye=jt.depth:A.isData3DTexture?Ye=Math.floor(jt.depth*Dt):Ye=1,tt=0,ht=0,St=0}le!==null?(nt=le.x,Tt=le.y,en=le.z):(nt=0,Tt=0,en=0);const Ht=Te.convert(q.format),cn=Te.convert(q.type);let it;q.isData3DTexture?(rt.setTexture3D(q,0),it=J.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(rt.setTexture2DArray(q,0),it=J.TEXTURE_2D_ARRAY):(rt.setTexture2D(q,0),it=J.TEXTURE_2D),Ue.activeTexture(J.TEXTURE0),Ue.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,q.flipY),Ue.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),Ue.pixelStorei(J.UNPACK_ALIGNMENT,q.unpackAlignment);const gn=Ue.getParameter(J.UNPACK_ROW_LENGTH),ot=Ue.getParameter(J.UNPACK_IMAGE_HEIGHT),Pi=Ue.getParameter(J.UNPACK_SKIP_PIXELS),xn=Ue.getParameter(J.UNPACK_SKIP_ROWS),ur=Ue.getParameter(J.UNPACK_SKIP_IMAGES);Ue.pixelStorei(J.UNPACK_ROW_LENGTH,jt.width),Ue.pixelStorei(J.UNPACK_IMAGE_HEIGHT,jt.height),Ue.pixelStorei(J.UNPACK_SKIP_PIXELS,tt),Ue.pixelStorei(J.UNPACK_SKIP_ROWS,ht),Ue.pixelStorei(J.UNPACK_SKIP_IMAGES,St);const mi=A.isDataArrayTexture||A.isData3DTexture,Li=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const Dt=qe.get(A),dn=qe.get(q),Pn=qe.get(Dt.__renderTarget),Bt=qe.get(dn.__renderTarget);Ue.bindFramebuffer(J.READ_FRAMEBUFFER,Pn.__webglFramebuffer),Ue.bindFramebuffer(J.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let $t=0;$t<Ye;$t++)mi&&(J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,qe.get(A).__webglTexture,oe,St+$t),J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,qe.get(q).__webglTexture,Xe,en+$t)),J.blitFramebuffer(tt,ht,tt+Qe,ht+Ve,nt,Tt,nt+Qe,Tt+Ve,J.DEPTH_BUFFER_BIT,J.NEAREST);Ue.bindFramebuffer(J.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else if(oe!==0||A.isRenderTargetTexture||qe.has(A)){const Dt=qe.get(A),dn=qe.get(q);Ue.bindFramebuffer(J.READ_FRAMEBUFFER,G),Ue.bindFramebuffer(J.DRAW_FRAMEBUFFER,O);for(let Pn=0;Pn<Ye;Pn++)mi?J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,Dt.__webglTexture,oe,St+Pn):J.framebufferTexture2D(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Dt.__webglTexture,oe),Li?J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,dn.__webglTexture,Xe,en+Pn):J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,dn.__webglTexture,Xe),oe!==0?J.blitFramebuffer(tt,ht,tt+Qe,ht+Ve,nt,Tt,nt+Qe,Tt+Ve,J.COLOR_BUFFER_BIT,J.NEAREST):Li?J.copyTexSubImage3D(it,Xe,nt,Tt,en+Pn,tt,ht,Qe,Ve):J.copyTexSubImage2D(it,Xe,nt,Tt,tt,ht,Qe,Ve);Ue.bindFramebuffer(J.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else Li?A.isDataTexture||A.isData3DTexture?J.texSubImage3D(it,Xe,nt,Tt,en,Qe,Ve,Ye,Ht,cn,jt.data):q.isCompressedArrayTexture?J.compressedTexSubImage3D(it,Xe,nt,Tt,en,Qe,Ve,Ye,Ht,jt.data):J.texSubImage3D(it,Xe,nt,Tt,en,Qe,Ve,Ye,Ht,cn,jt):A.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,Xe,nt,Tt,Qe,Ve,Ht,cn,jt.data):A.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,Xe,nt,Tt,jt.width,jt.height,Ht,jt.data):J.texSubImage2D(J.TEXTURE_2D,Xe,nt,Tt,Qe,Ve,Ht,cn,jt);Ue.pixelStorei(J.UNPACK_ROW_LENGTH,gn),Ue.pixelStorei(J.UNPACK_IMAGE_HEIGHT,ot),Ue.pixelStorei(J.UNPACK_SKIP_PIXELS,Pi),Ue.pixelStorei(J.UNPACK_SKIP_ROWS,xn),Ue.pixelStorei(J.UNPACK_SKIP_IMAGES,ur),Xe===0&&q.generateMipmaps===!0&&q.mipmapsAutoUpdate===!0&&J.generateMipmap(it),Ue.unbindTexture()},this.initRenderTarget=function(A){qe.get(A).__webglFramebuffer===void 0&&rt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?rt.setTextureCube(A,0):A.isData3DTexture?rt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?rt.setTexture2DArray(A,0):rt.setTexture2D(A,0),Ue.unbindTexture()},this.resetState=function(){re=0,K=0,X=null,Ue.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ut._getUnpackColorSpace()}}function rb(s,e){const t=document.createElement("canvas");t.width=2048,t.height=1024;const r=t.getContext("2d");let o;e?s==="celestial-cyan"?o=["#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#f0f9ff","#dbeafe"]:s==="supernova-sunset"?o=["#fff1f2","#fecdd3","#fda4af","#fb7185","#e11d48","#9f1239","#fff7ed","#fed7aa"]:s==="nocturne-silver"?o=["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#71717a","#ffffff","#e4e4e7"]:s==="cyberpunk-neon"?o=["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#d946ef","#c026d3","#a21caf"]:s==="solar-gold"?o=["#fffbeb","#fef3c7","#fde68a","#fcd34d","#f59e0b","#d97706","#b45309","#78350f"]:o=["#fffbeb","#fef3c7","#fde68a","#fcd34d","#f59e0b","#d97706","#fff7ed","#ffedd5"]:s==="celestial-cyan"?o=["#020b14","#041d33","#083358","#0e4a7d","#0284c7","#38bdf8","#075985","#0c4a6e","#06b6d4"]:s==="supernova-sunset"?o=["#12040d","#2b061c","#4a0a2f","#771146","#be123c","#f43f5e","#ea580c","#fb923c","#450a22"]:s==="nocturne-silver"?o=["#060609","#111119","#1e1e2d","#2f2f45","#4d4d6e","#7b7b9e","#a6a6c7","#252538","#d4d4e8"]:s==="cyberpunk-neon"?o=["#080014","#16002c","#2c004d","#550080","#9333ea","#db2777","#f43f5e","#06b6d4","#22d3ee"]:s==="solar-gold"?o=["#0d0500","#1f0c00","#3b1700","#5e2500","#92400e","#d97706","#f59e0b","#fbbf24","#fef08a"]:o=["#080415","#150933","#270e59","#3e1785","#5b21b6","#7c3aed","#a855f7","#c084fc","#2e1065","#d8b4fe"];const l=r.createLinearGradient(0,0,0,t.height);o.forEach((_,M)=>{l.addColorStop(M/(o.length-1),_)}),r.fillStyle=l,r.fillRect(0,0,t.width,t.height);const d=72;for(let _=0;_<d;_++){const b=_/d*t.height,C=t.height/d*(1.2+Math.sin(_*.7)*.5),y=o[_*3%o.length];r.fillStyle=y,r.globalAlpha=.25+Math.sin(_*.9)*.2,r.beginPath(),r.moveTo(0,b);const S=32;for(let R=0;R<=S;R++){const k=R/S*t.width,P=Math.sin(R*.8+_*1.5)*7+Math.cos(R*1.6+_*2.1)*4;r.lineTo(k,b+P)}r.lineTo(t.width,b+C),r.lineTo(0,b+C),r.closePath(),r.fill()}r.globalAlpha=e?.25:.4,r.fillStyle="#ffffff";for(let _=0;_<48;_++){const M=Math.random()*t.width,b=Math.random()*t.height,C=60+Math.random()*180,y=1.5+Math.random()*3.5;r.beginPath(),r.ellipse(M,b,C,y,Math.sin(b*.05)*.15,0,Math.PI*2),r.fill()}const p=t.width*.62,u=t.height*.58,f=85,x=r.createRadialGradient(p,u,5,p,u,f);e?(x.addColorStop(0,"#ffffff"),x.addColorStop(.4,o[o.length-2]),x.addColorStop(.8,o[o.length-1]),x.addColorStop(1,"rgba(255,255,255,0)")):(x.addColorStop(0,"#ffffff"),x.addColorStop(.3,o[o.length-3]||"#c084fc"),x.addColorStop(.7,o[o.length-1]||"#7c3aed"),x.addColorStop(1,"rgba(0,0,0,0)")),r.globalAlpha=.85,r.fillStyle=x,r.beginPath(),r.ellipse(p,u,f*1.6,f*.8,-.15,0,Math.PI*2),r.fill(),r.strokeStyle=e?"rgba(200, 150, 100, 0.45)":"rgba(255, 255, 255, 0.60)",r.lineWidth=2.5;for(let _=0;_<3;_++){r.beginPath();for(let M=0;M<Math.PI*2;M+=.2){const b=M/(Math.PI*2)*f*.7,C=p+Math.cos(M+_*2.1)*b*1.5,y=u+Math.sin(M+_*2.1)*b*.7;M===0?r.moveTo(C,y):r.lineTo(C,y)}r.stroke()}const v=new bf(t);return v.wrapS=ro,v.wrapT=oi,v}function sb(s,e){const t=document.createElement("canvas");t.width=1024,t.height=64;const r=t.getContext("2d");r.clearRect(0,0,t.width,t.height);let o,l;e?(o="rgba(217, 119, 6, 0.45)",l="rgba(245, 158, 11, 0.85)"):s==="celestial-cyan"?(o="rgba(56, 189, 248, 0.45)",l="rgba(186, 230, 253, 0.90)"):s==="supernova-sunset"?(o="rgba(251, 146, 60, 0.45)",l="rgba(254, 205, 211, 0.90)"):s==="nocturne-silver"?(o="rgba(212, 212, 216, 0.45)",l="rgba(255, 255, 255, 0.90)"):s==="cyberpunk-neon"?(o="rgba(6, 182, 212, 0.50)",l="rgba(244, 63, 94, 0.95)"):s==="solar-gold"?(o="rgba(245, 158, 11, 0.50)",l="rgba(254, 240, 138, 0.95)"):(o="rgba(192, 132, 252, 0.50)",l="rgba(243, 232, 255, 0.92)");for(let p=0;p<t.width;p++){const u=p/t.width;let f=0;u<.22?f=.12+Math.sin(u*60)*.08:u>=.22&&u<.65?f=.75+Math.sin(u*120)*.18+Math.cos(u*240)*.06:u>=.65&&u<.72?f=.02:u>=.72&&u<.95?u>.85&&u<.87?f=.05:f=.55+Math.sin(u*100)*.15:f=.2+Math.sin(u*200)*.15,r.fillStyle=f>.6?l:o,r.globalAlpha=Math.max(0,Math.min(1,f)),r.fillRect(p,0,1,t.height)}const d=new bf(t);return d.wrapS=oi,d.wrapT=oi,d}function ab(s){const e=document.createElement("canvas");e.width=2048,e.height=1024;const t=e.getContext("2d");t.fillStyle=s?"#d6d3d1":"#888899",t.fillRect(0,0,e.width,e.height),t.fillStyle=s?"#a8a29e":"#474755",[{x:.35,y:.4,rx:240,ry:160},{x:.55,y:.35,rx:280,ry:190},{x:.7,y:.45,rx:200,ry:140},{x:.4,y:.65,rx:220,ry:150},{x:.6,y:.6,rx:260,ry:180}].forEach(d=>{t.globalAlpha=.65,t.beginPath(),t.ellipse(d.x*e.width,d.y*e.height,d.rx,d.ry,.2,0,Math.PI*2),t.fill()});const o=320;for(let d=0;d<o;d++){const p=Math.random()*e.width,u=Math.random()*e.height,f=4+Math.random()*32;if(t.globalAlpha=.55,t.fillStyle=s?"#57534e":"#22222a",t.beginPath(),t.arc(p,u,f,0,Math.PI*2),t.fill(),t.globalAlpha=.7,t.strokeStyle=s?"#ffffff":"#e2e8f0",t.lineWidth=Math.max(1,f*.2),t.beginPath(),t.arc(p,u,f,Math.PI*.75,Math.PI*1.75),t.stroke(),f>24){t.globalAlpha=.25,t.strokeStyle=s?"#ffffff":"#cbd5e1",t.lineWidth=1;for(let x=0;x<8;x++){const v=x/8*Math.PI*2,_=f*(3+Math.random()*5);t.beginPath(),t.moveTo(p+Math.cos(v)*f,u+Math.sin(v)*f),t.lineTo(p+Math.cos(v)*_,u+Math.sin(v)*_),t.stroke()}}}const l=new bf(e);return l.wrapS=ro,l.wrapT=oi,l}const ob=()=>{const s=we.useRef(null),{wallpaperSettings:e,appTheme:t}=Vr(),r=e.celestialBody||"ringed-planet",o=e.palette||"cosmic-royal",l=t==="light";return we.useEffect(()=>{if(!s.current)return;if(r==="none"){s.current.innerHTML="";return}const d=s.current;d.innerHTML="";const p=d.clientWidth||window.innerWidth,u=d.clientHeight||window.innerHeight,f=p<768,x=new G_,v=new Ti(45,p/u,.1,100);v.position.set(0,0,10);const _=new ib({alpha:!0,antialias:!0,powerPreference:"high-performance"});_.setSize(p,u),_.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),_.outputColorSpace=si,d.appendChild(_.domElement);const M=new oy(l?16775149:16777215,l?2.8:2.5);x.add(M);const b=new ly(l?14870768:o==="celestial-cyan"?662832:o==="cyberpunk-neon"?2031672:o==="solar-gold"?2363651:1577516,l?.7:.4);x.add(b);const C=new Za;x.add(C);let y=3.4,S=1.8,R=.65;r==="ringed-planet"?(y=f?1.2:3.4,S=f?2.3:1.8,R=f?.48:.68,M.position.set(-8,5,4)):r==="crescent-moon"?(y=f?-1.2:-3.3,S=f?2.5:2,R=f?.42:.6,M.position.set(-8,2,-2)):r==="eclipse-corona"&&(y=0,S=f?2.5:2.4,R=f?.45:.64,M.position.set(0,0,4)),C.position.set(y,S,0),C.scale.set(R,R,R);let k=0,P=0,U=0,D=0;const w=re=>{const K=re.clientX/window.innerWidth*2-1;k=(-(re.clientY/window.innerHeight)*2+1)*.18,P=K*.25};window.addEventListener("mousemove",w,{passive:!0});let N=null,te=null,$=null,H=null;if(r==="ringed-planet"){const re=new Ir(1,64,64),K=rb(o,l),X=new pd({map:K,roughness:.55,metalness:.08});N=new Wn(re,X),C.add(N);const j=new Ir(1.04,48,48),Y=new Ri({vertexShader:`
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
        `,uniforms:{glowColor:{value:new Ct(l?o==="celestial-cyan"?165063:14251782:o==="celestial-cyan"?3718648:o==="supernova-sunset"?16007006:11032055)}},transparent:!0,blending:eo,side:zn}),L=new Wn(j,Y);C.add(L);const ee=new Ef(1.35,2.85,128),be=ee.attributes.position,F=ee.attributes.uv;for(let Ie=0;Ie<be.count;Ie++){const lt=be.getX(Ie),He=be.getY(Ie),ze=(Math.sqrt(lt*lt+He*He)-1.35)/(2.85-1.35);F.setXY(Ie,ze,.5)}F.needsUpdate=!0;const ve=sb(o,l),Me=new pd({map:ve,side:Bi,transparent:!0,opacity:.92,roughness:.45,metalness:.05});te=new Wn(ee,Me),te.rotation.x=Math.PI*.48,te.rotation.y=-.15,C.add(te);const Re=new Ir(.11,24,24),ye=new pd({color:l?14078929:13095678,roughness:.8});$=new Wn(Re,ye),C.add($),C.rotation.z=-.42}else if(r==="crescent-moon"){const re=new Ir(1,64,64),K=ab(l),X=new Ri({vertexShader:`
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
        `,uniforms:{moonTexture:{value:K},sunDir:{value:new pe(-1.6,.35,-.65).normalize()},sunlitColor:{value:new Ct(l?16776171:16710083)},earthshineColor:{value:new Ct(l?9741240:6583435)},earthshineAlpha:{value:l?.07:.05}},transparent:!0});N=new Wn(re,X),C.add(N);const j=new Ir(1.04,48,48),Y=new Ri({vertexShader:`
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
        `,uniforms:{sunDir:{value:new pe(-1.6,.35,-.65).normalize()},glowColor:{value:new Ct(l?16096779:16707722)}},transparent:!0,blending:eo,side:zn}),L=new Wn(j,Y);C.add(L),C.rotation.y=.45,C.rotation.z=-.22}else if(r==="eclipse-corona"){const re=new ho(3.8,3.8),K=new Ri({vertexShader:`
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
        `,uniforms:{uTime:{value:0},uColor:{value:new Ct(l?14251782:16638023)}},transparent:!0,blending:eo,depthWrite:!1});H=new Wn(re,K),C.add(H);const X=new Ir(.96,48,48),j=new I0({color:l?1579035:328970});N=new Wn(X,j),C.add(N)}let W;const V=performance.now(),G=()=>{W=requestAnimationFrame(G);const re=(performance.now()-V)*.001;if(U+=(k-U)*.06,D+=(P-D)*.06,C.position.x=y+D*.8,C.position.y=S+U*.8,N&&(N.rotation.y+=.0012),$){const X=re*.35;$.position.x=Math.cos(X)*4.8,$.position.z=Math.sin(X)*4.8*.4,$.position.y=Math.sin(X*1.5)*.6}H&&H.material.uniforms&&(H.material.uniforms.uTime.value=re),_.render(x,v)};G();const O=()=>{if(!d||!_||!v)return;const re=d.clientWidth||window.innerWidth,K=d.clientHeight||window.innerHeight;v.aspect=re/K,v.updateProjectionMatrix(),_.setSize(re,K),_.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const X=re<768;r==="ringed-planet"?(y=X?1.2:3.4,S=X?2.3:1.8,R=X?.48:.68):r==="crescent-moon"?(y=X?-1.2:-3.3,S=X?2.5:2,R=X?.42:.6):r==="eclipse-corona"&&(y=0,S=X?2.5:2.4,R=X?.45:.64),C.position.set(y,S,0),C.scale.set(R,R,R)};return window.addEventListener("resize",O,{passive:!0}),()=>{cancelAnimationFrame(W),window.removeEventListener("mousemove",w),window.removeEventListener("resize",O),_.dispose(),d&&_.domElement&&d.contains(_.domElement)&&d.removeChild(_.domElement)}},[r,o,l]),m.jsx("div",{ref:s,className:"fixed inset-0 pointer-events-none z-[1] select-none overflow-hidden","aria-hidden":"true"})};/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=s=>s==null?void 0:s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function cb(s,e,t=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:lb(s),size:24,node:e,...t.length>0?{aliases:t}:{}}}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=s=>{let e="",t=!1;for(const r of s){if(r==="-"||r==="_"||r<=" "){t=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=t?r.toUpperCase():r,t=!1}return e};/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=s=>{const e=ub(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function vd(s){return s!=null}function fb(s,e={}){var _,M;const t=e.attributeNames??{},r=b=>t[b]??b,o=s.size??s.width??ls.width,l=s.size??s.height??ls.height,d=((_=s.aliases)==null?void 0:_.filter(b=>typeof b=="string"&&b.trim()!=="").map(b=>`lucide-${b}`))??[],p=[...s.name?[`lucide-${s.name}`]:[],...d],u=((M=e.className)==null?void 0:M.split(" ").filter(Boolean))??[],f=e.includeDefaultClasses===!1?lf(...u):lf("lucide",...p,...u),x=e.absoluteStrokeWidth?Number(e.strokeWidth??ls["stroke-width"])*Number(s.size??s.width??ls.width)/Number(e.size??e.width??ls.width):e.strokeWidth??ls["stroke-width"];return["svg",{...Object.entries(ls).reduce((b,[C,y])=>(b[r(C)]=y,b),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&vd(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&vd(e.width)&&{[r("width")]:e.width},..."height"in e&&vd(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:x,...f&&{[r("class")]:f},[r("viewBox")]:`0 0 ${o} ${l}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},s.node.map(b=>{const[C,y,S]=b,R=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...y}:y;return S?[C,R,S]:[C,R]})]}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function hb(s,e={}){return fb(s,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},mb=we.createContext({}),gb=()=>we.useContext(mb),xb=we.forwardRef(({color:s,size:e,width:t,height:r,strokeWidth:o,absoluteStrokeWidth:l,nonScalingStroke:d,className:p="",children:u,iconNode:f=[],icon:x={node:f,aliases:[],size:24},...v},_)=>{const{size:M=24,strokeWidth:b=2,absoluteStrokeWidth:C=!1,nonScalingStroke:y=!1,color:S="currentColor",className:R=""}=gb()??{},k=!!u||pb(v),[P,U,D=[]]=hb(x,{color:s??S,width:t??e??M,height:r??e??M,strokeWidth:o??b,absoluteStrokeWidth:l??C,nonScalingStroke:d??y,className:lf(R,p),hasA11yProp:k,attributes:v});return we.createElement(P,{ref:_,...U},[...D.map(([w,N])=>we.createElement(w,N)),...Array.isArray(u)?u:[u]])});/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Rt(s,e=[],t=[]){const r=typeof s=="string"?cb(s,e,t):s,o=we.forwardRef(({className:l,...d},p)=>we.createElement(xb,{ref:p,icon:r,className:l,...d}));return r.name&&(o.displayName=db(r.name)),o}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0={name:"calendar-clock",size:24,node:[["path",{d:"M16 14v2.2l1.6 1",key:"fo4ql5"}],["path",{d:"M16 2v3",key:"otl347"}],["path",{d:"M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338",key:"7hb8p4"}],["path",{d:"M3 9h5.859",key:"numkqi"}],["path",{d:"M8 2v3",key:"1ioesn"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]};Q0.node;const Jm=Rt(Q0);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg={name:"calendar",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]]};eg.node;const vb=Rt(eg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};tg.node;const aa=Rt(tg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};ng.node;const ig=Rt(ng);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};rg.node;const Af=Rt(rg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg={name:"droplet",size:24,node:[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]};sg.node;const Qm=Rt(sg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag={name:"droplets",size:24,node:[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]};ag.node;const _b=Rt(ag);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og={name:"external-link",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]};og.node;const yb=Rt(og);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg={name:"eye-off",size:24,node:[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]};lg.node;const Sb=Rt(lg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg={name:"face-slightly-smiling",size:24,node:[["path",{d:"M15 10V9",key:"4dkmfx"}],["path",{d:"M16.472 15a6 6 0 01-8.943 0",key:"7qomzy"}],["path",{d:"M9 10V9",key:"1lazqi"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["smile"]};cg.node;const Mb=Rt(cg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug={name:"flame",size:24,node:[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]]};ug.node;const dg=Rt(ug);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg={name:"headphones",size:24,node:[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]};fg.node;const ic=Rt(fg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg={name:"list-music",size:24,node:[["path",{d:"M16 5H3",key:"m91uny"}],["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M11 19H3",key:"zflm78"}],["path",{d:"M21 16V5",key:"yxg4q8"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]};hg.node;const e0=Rt(hg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg={name:"maximize-2",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]};pg.node;const t0=Rt(pg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg={name:"minimize-2",size:24,node:[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]]};mg.node;const gg=Rt(mg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};xg.node;const Yl=Rt(xg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};vg.node;const Or=Rt(vg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};_g.node;const Br=Rt(_g);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};yg.node;const ql=Rt(yg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg={name:"quote",size:24,node:[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]};Sg.node;const wb=Rt(Sg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg={name:"radio",size:24,node:[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};Mg.node;const n0=Rt(Mg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};wg.node;const Fr=Rt(wg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg={name:"skip-back",size:24,node:[["path",{d:"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",key:"15892j"}],["path",{d:"M3 20V4",key:"1ptbpl"}]]};bg.node;const cf=Rt(bg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg={name:"skip-forward",size:24,node:[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]]};Eg.node;const uf=Rt(Eg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};Tg.node;const Ag=Rt(Tg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Cg.node;const ds=Rt(Cg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg={name:"square-check-big",size:24,node:[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-square"]};Rg.node;const i0=Rt(Rg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng={name:"star",size:24,node:[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]};Ng.node;const bb=Rt(Ng);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};Pg.node;const Eb=Rt(Pg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg={name:"sunrise",size:24,node:[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]};Lg.node;const Tb=Rt(Lg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg={name:"target",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};Dg.node;const Ab=Rt(Dg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};Ig.node;const rc=Rt(Ig);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug={name:"tv",size:24,node:[["path",{d:"m17 2-5 5-5-5",key:"16satq"}],["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",key:"1e6viu"}]]};Ug.node;const Cb=Rt(Ug);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg={name:"user",size:24,node:[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]};Fg.node;const kg=Rt(Fg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};zg.node;const df=Rt(zg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};Og.node;const Bg=Rt(Og);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg={name:"waves-horizontal",size:24,node:[["path",{d:"M2 12q2.5 2 5 0t5 0 5 0 5 0",key:"8ddzzs"}],["path",{d:"M2 19q2.5 2 5 0t5 0 5 0 5 0",key:"1wj4st"}],["path",{d:"M2 5q2.5 2 5 0t5 0 5 0 5 0",key:"69x50u"}]],aliases:["waves"]};Gg.node;const Rb=Rt(Gg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Hg.node;const ar=Rt(Hg),Nb=()=>{const{activeYouTubeItem:s,isYouTubePlaying:e,youtubeVolume:t,isYouTubeMuted:r,setYouTubeIsPlaying:o,setYouTubePlayerReady:l,showYouTubePreview:d,setShowYouTubePreview:p,toggleYouTubePlay:u,nextYouTubeTrack:f,prevYouTubeTrack:x,toggleYouTubeMute:v,setYouTubeVolume:_,audioSource:M}=Vr(),b=we.useRef(null),[C,y]=we.useState(null),S=we.useRef((s==null?void 0:s.id)||null),R=we.useRef(null),[k,P]=we.useState(!1),U=we.useRef(!1),D=we.useCallback((V,G="")=>{try{b.current&&b.current.contentWindow&&b.current.contentWindow.postMessage(JSON.stringify({event:"command",func:V,args:G}),"*")}catch(O){console.warn("[YouTube Audio] Command error:",O)}},[]),w=we.useCallback((V,G)=>{const O=G?"1":"0",re=typeof window<"u"&&window.location.origin?`&origin=${encodeURIComponent(window.location.origin)}`:"";if(!V)return`https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=${O}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${re}`;if(V.type==="playlist"&&V.playlistId)return`https://www.youtube.com/embed/videoseries?list=${encodeURIComponent(V.playlistId)}&autoplay=${O}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${re}`;if(V.type==="video_in_playlist"&&V.videoId&&V.playlistId)return`https://www.youtube.com/embed/${encodeURIComponent(V.videoId)}?list=${encodeURIComponent(V.playlistId)}&autoplay=${O}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${re}`;const K=V.videoId||"jfKfPfyJRdk";return`https://www.youtube.com/embed/${encodeURIComponent(K)}?autoplay=${O}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${re}`},[]),[N,te]=we.useState(()=>w(s,!1)),$=we.useCallback(()=>{D("unMute",""),D("setVolume",[t||75]),r&&v()},[D,t,r,v]);we.useEffect(()=>(window.__forMeSendYouTubeCommand=D,window.__forMeForceUnmute=$,l(!0),()=>{delete window.__forMeSendYouTubeCommand,delete window.__forMeForceUnmute}),[D,$,l]),we.useEffect(()=>{if(!s||S.current===s.id)return;S.current=s.id,y(null);const V=w(s,e);R.current=V,te(V),Ei.updateMetadata({title:s.title,artist:s.channel||"FOR ME Sanctuary",album:s.type==="playlist"?"YouTube Playlist":"YouTube Stream",artworkUrl:s.thumbnailUrl,onPlay:()=>{o(!0),D("playVideo",""),$()},onPause:()=>{o(!1),D("pauseVideo","")},onNext:s.type==="playlist"||s.type==="video_in_playlist"?f:void 0,onPrev:s.type==="playlist"||s.type==="video_in_playlist"?x:void 0})},[s,w,e,f,x,D,o,$]),we.useEffect(()=>{if(U.current){U.current=!1;return}e?(D("playVideo",""),setTimeout(()=>{D("unMute",""),D("setVolume",[t||75])},50),Ei.setPlaybackState("playing")):(D("pauseVideo",""),Ei.setPlaybackState("paused"))},[e,D,t]),we.useEffect(()=>{D("setVolume",[t||75])},[t,D]),we.useEffect(()=>{r?D("mute",""):(D("unMute",""),D("setVolume",[t||75]))},[r,t,D]),we.useEffect(()=>{const V=G=>{if(!(!G.data||typeof G.data!="string"))try{const O=JSON.parse(G.data);O.event==="onStateChange"?O.info===1?(U.current=!0,o(!0),y(null),Ei.setPlaybackState("playing"),r||(D("unMute",""),D("setVolume",[t||75]))):O.info===2?document.hidden||(U.current=!0,o(!1),Ei.setPlaybackState("paused")):O.info===0&&((s==null?void 0:s.type)==="playlist"||(s==null?void 0:s.type)==="video_in_playlist"?Ei.setPlaybackState("playing"):(U.current=!0,o(!1),Ei.setPlaybackState("none"))):O.event==="infoDelivery"&&O.info?typeof O.info.muted=="boolean"&&O.info.muted&&!r&&e&&(D("unMute",""),D("setVolume",[t||75])):O.event==="onError"&&(console.warn("[YouTube Audio Player Error]",O.info),(O.info===101||O.info===150)&&y("The owner of this video restricts playback outside of YouTube."))}catch{}};return window.addEventListener("message",V),()=>window.removeEventListener("message",V)},[o,r,t,D,s,e]);const H=M==="youtube"&&e||d,W=(s==null?void 0:s.type)==="playlist"||(s==null?void 0:s.type)==="video_in_playlist";return m.jsxs(m.Fragment,{children:[m.jsxs("div",{role:"region","aria-label":"YouTube Audio Player",style:{position:"fixed",bottom:!H||k?"0px":d?"84px":"16px",right:!H||k?"0px":d?"24px":"16px",width:!H||k?"2px":d?"380px":"250px",height:!H||k?"2px":d?"285px":"150px",zIndex:!H||k?-1:d?50:30,opacity:!H||k?.01:1,pointerEvents:!H||k?"none":"auto",borderRadius:"1.25rem",overflow:"hidden",boxShadow:d?"0 30px 70px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.18)":"0 15px 35px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.12)",transition:"all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"},className:"backdrop-blur-2xl bg-[#090b14]/95 flex flex-col border border-white/15",children:[m.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-black/60 shrink-0 select-none",children:[m.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[m.jsx("span",{className:`w-2 h-2 rounded-full shrink-0 ${e?"bg-red-500 animate-pulse":"bg-zinc-500"}`}),m.jsx("span",{className:"text-white text-xs font-display font-semibold truncate max-w-[110px] sm:max-w-[160px]",title:s==null?void 0:s.title,children:(s==null?void 0:s.title)||"YouTube Audio"})]}),m.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[m.jsxs("button",{type:"button",onClick:$,className:`px-1.5 py-0.5 rounded-md text-[10px] font-sans font-bold flex items-center gap-1 transition-colors cursor-pointer ${r?"bg-amber-500 text-black hover:bg-amber-400 animate-pulse":"bg-emerald-600/80 text-white hover:bg-emerald-500"}`,title:"Force Unmute & Restore Volume",children:[r?m.jsx(Bg,{className:"w-3 h-3"}):m.jsx(df,{className:"w-3 h-3"}),m.jsx("span",{className:"hidden sm:inline",children:r?"UNMUTE":`${t}%`})]}),m.jsx("button",{type:"button",onClick:()=>P(!0),className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer",title:"Audio Only (Hide Video Frame)",children:m.jsx(ic,{className:"w-3 h-3"})}),m.jsx("button",{type:"button",onClick:()=>p(!d),className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer",title:d?"Collapse to Mini Player":"Expand Video Preview",children:d?m.jsx(gg,{className:"w-3 h-3"}):m.jsx(t0,{className:"w-3 h-3"})}),m.jsx("button",{type:"button",onClick:()=>{o(!1),p(!1),D("pauseVideo","")},className:"p-1 rounded-md bg-white/10 hover:bg-red-500/80 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer",title:"Stop playback & close",children:m.jsx(ar,{className:"w-3 h-3"})})]})]}),C&&m.jsxs("div",{className:"absolute inset-0 z-30 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center space-y-2 pointer-events-auto",children:[m.jsx(ig,{className:"w-6 h-6 text-amber-400"}),m.jsx("p",{className:"text-xs text-white/95 font-sans leading-relaxed max-w-xs",children:C}),(s==null?void 0:s.url)&&m.jsxs("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold transition-colors shadow-md",children:[m.jsx(yb,{className:"w-3 h-3"}),m.jsx("span",{children:"Open in YouTube"})]})]}),m.jsx("div",{className:"flex-1 w-full bg-black relative min-h-0",children:m.jsx("iframe",{ref:b,id:"global-youtube-audio-iframe",title:"FOR ME Sanctuary Audio Stream",src:N,className:"w-full h-full border-0 absolute inset-0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),m.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 border-t border-white/10 bg-black/60 shrink-0 text-xs",children:[d?m.jsxs("div",{className:"flex items-center gap-1",children:[m.jsx("span",{className:"text-[10px] font-sans text-zinc-400 mr-1",children:"Vol:"}),[25,50,75,100].map(V=>m.jsxs("button",{type:"button",onClick:()=>{_(V),D("setVolume",[V]),$()},className:`px-1.5 py-0.5 rounded text-[10px] font-mono transition-colors cursor-pointer ${t===V?"bg-red-600 text-white font-bold":"bg-white/10 text-zinc-300 hover:bg-white/20"}`,children:[V,"%"]},V))]}):m.jsxs("div",{className:"flex items-center gap-1",children:[W&&m.jsxs(m.Fragment,{children:[m.jsx("button",{type:"button",onClick:x,className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer",title:"Previous track in playlist",children:m.jsx(cf,{className:"w-3 h-3"})}),m.jsx("button",{type:"button",onClick:f,className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer",title:"Next track in playlist",children:m.jsx(uf,{className:"w-3 h-3"})})]}),m.jsx("span",{className:"text-[10px] font-mono text-zinc-400",children:r?"Muted":`${t}%`})]}),m.jsxs("div",{className:"flex items-center gap-1.5",children:[d&&W&&m.jsxs(m.Fragment,{children:[m.jsx("button",{type:"button",onClick:x,className:"p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white transition-colors cursor-pointer",title:"Previous track",children:m.jsx(cf,{className:"w-3.5 h-3.5"})}),m.jsx("button",{type:"button",onClick:f,className:"p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white transition-colors cursor-pointer",title:"Next track",children:m.jsx(uf,{className:"w-3.5 h-3.5"})})]}),m.jsx("button",{type:"button",onClick:()=>{u(),$()},className:`px-3 py-1 rounded-lg text-white text-[11px] font-display font-semibold flex items-center gap-1 shadow-sm transition-all cursor-pointer ${e?"bg-red-600 hover:bg-red-500":"bg-emerald-600 hover:bg-emerald-500"}`,children:e?m.jsxs(m.Fragment,{children:[m.jsx(Or,{className:"w-3 h-3 fill-current"}),m.jsx("span",{children:"Pause"})]}):m.jsxs(m.Fragment,{children:[m.jsx(Br,{className:"w-3 h-3 fill-current ml-0.5"}),m.jsx("span",{children:"Play"})]})})]})]})]}),H&&k&&m.jsxs("button",{type:"button",onClick:()=>P(!1),className:"fixed bottom-4 right-4 z-40 px-3 py-1.5 rounded-xl cosmic-dock text-xs flex items-center gap-2 border border-white/15 text-white hover:border-violet-400/50 shadow-xl cursor-pointer transition-all animate-fadeIn",title:"Restore Video Frame",children:[m.jsx("span",{className:"w-2 h-2 rounded-full bg-red-500 animate-pulse"}),m.jsx("span",{className:"font-display text-[11px] font-medium",children:"Show Video"}),m.jsx(t0,{className:"w-3 h-3 text-zinc-400"})]})]})},Pb=[{id:"deep-space-obsidian",name:"Deep Space Obsidian",tagline:"Luminous Lavender & Crescent Moon",accent:"#a855f7",gradient:["#060814","#2d1252","#7c3aed","#ede9fe"],settings:{palette:"cosmic-royal",celestialBody:"crescent-moon",waveGeometry:"dunes",speed:"balanced",amplitude:"majestic",waveLayerDensity:"deep",clockFontStyle:"tabular",clockHalo:"pulsar",showConstellations:!0,showComet:!0,showNebulaDust:!0,shootingStarMode:"occasional"}},{id:"cyberpunk-neon",name:"Cyberpunk Neon",tagline:"High-Voltage Cyan & Ringed Gas Giant",accent:"#06b6d4",gradient:["#06000e","#3b0764","#06b6d4","#f43f5e"],settings:{palette:"cyberpunk-neon",celestialBody:"ringed-planet",waveGeometry:"aurora",speed:"dynamic",amplitude:"dramatic",waveLayerDensity:"dense",clockFontStyle:"mono",clockHalo:"pulsar",showCrossStars:!0,showOrbitalTrack:!0,shootingStarMode:"meteor-shower"}},{id:"sunset-dunes",name:"Sunset Dunes",tagline:"Velvet Crimson & Solar Eclipse Corona",accent:"#f43f5e",gradient:["#0a0208","#771146","#e11d48","#f59e0b"],settings:{palette:"supernova-sunset",celestialBody:"eclipse-corona",waveGeometry:"dunes",speed:"balanced",amplitude:"majestic",waveLayerDensity:"deep",clockFontStyle:"serif",clockHalo:"subtle",showNebulaDust:!0,showComet:!0,shootingStarMode:"occasional"}},{id:"nord-frost",name:"Nord Frost",tagline:"Glacial Sapphire & Shimmering Auroral Silk",accent:"#38bdf8",gradient:["#020712","#083358","#0284c7","#ecfeff"],settings:{palette:"celestial-cyan",celestialBody:"ringed-planet",waveGeometry:"aurora",speed:"calm",amplitude:"majestic",waveLayerDensity:"dense",clockFontStyle:"minimal",clockHalo:"none",showConstellations:!0,showCrossStars:!0,shootingStarMode:"occasional"}},{id:"monochrome-minimal",name:"Monochrome Mineral",tagline:"Architectural Platinum & Deep Void",accent:"#a1a1aa",gradient:["#030306","#181824","#71717a","#ffffff"],settings:{palette:"nocturne-silver",celestialBody:"none",waveGeometry:"mountains",speed:"calm",amplitude:"subtle",waveLayerDensity:"airy",clockFontStyle:"tabular",clockHalo:"none",showConstellations:!1,showComet:!1,showNebulaDust:!1,shootingStarMode:"off"}},{id:"solar-totality",name:"Solar Totality",tagline:"Golden Corona & Oceanic Horizon",accent:"#f59e0b",gradient:["#080400","#5e2500","#d97706","#fef08a"],settings:{palette:"solar-gold",celestialBody:"eclipse-corona",waveGeometry:"ocean",speed:"balanced",amplitude:"majestic",waveLayerDensity:"deep",clockFontStyle:"serif",clockHalo:"pulsar",showNebulaDust:!0,showOrbitalTrack:!0,shootingStarMode:"occasional"}}],Lb=[{id:"cosmic-royal",name:"Cosmic Royal",previewColors:["#060814","#2d1252","#7c3aed","#ede9fe"]},{id:"cyberpunk-neon",name:"Cyberpunk Neon",previewColors:["#06000e","#3b0764","#06b6d4","#f43f5e"]},{id:"supernova-sunset",name:"Supernova Sunset",previewColors:["#12050e","#6e133e","#e11d48","#fffbeb"]},{id:"celestial-cyan",name:"Celestial Cyan",previewColors:["#040a14","#0e3f57","#0284c7","#ecfeff"]},{id:"solar-gold",name:"Solar Gold",previewColors:["#0d0500","#5e2500","#d97706","#fef08a"]},{id:"nocturne-silver",name:"Nocturne Silver",previewColors:["#050508","#22222f","#707090","#ffffff"]}],Db=[{id:"crescent-moon",name:"Crescent Moon",desc:"Slender illuminated limb & earthshine"},{id:"ringed-planet",name:"Ringed Planet",desc:"Gas giant with Cassini ring system"},{id:"eclipse-corona",name:"Solar Eclipse",desc:"Totality disc with coronal flare rays"},{id:"none",name:"Deep Void",desc:"Pure atmospheric expanse without celestial body"}],Ib=[{id:"dunes",name:"Silky Dunes",desc:"Harmonic desert sand ridges"},{id:"aurora",name:"Aurora Ribbons",desc:"Translucent shimmering curtains"},{id:"mountains",name:"Alpine Peaks",desc:"Angular geometric mountain ridges"},{id:"ocean",name:"Ocean Swells",desc:"Deep rhythmic tidal waves"}],Ub=[{id:"tabular",label:"Tabular Modern",preview:"12:00"},{id:"serif",label:"Editorial Luxury",preview:"12:00"},{id:"mono",label:"Tech Monospace",preview:"12:00"},{id:"minimal",label:"Minimalist Light",preview:"12:00"}],Fb=({isOpen:s,onClose:e})=>{const{wallpaperSettings:t,updateWallpaperSettings:r,appTheme:o}=Vr(),l=o==="light",[d,p]=we.useState("presets");if(!s)return null;const u=()=>{r({palette:"cosmic-royal",speed:"balanced",amplitude:"majestic",waveGeometry:"dunes",waveLayerDensity:"deep",celestialBody:"crescent-moon",showNebulaDust:!0,showConstellations:!0,showComet:!0,shootingStarMode:"occasional",showStars:!0,showCrossStars:!0,showOrbitalTrack:!0,showMeridian:!0,clockFontStyle:"tabular",clockSize:"standard",clockFormat:"12h",showSeconds:!0,showDate:!0,showGreeting:!0,clockHalo:"pulsar"})};return m.jsxs("div",{className:"fixed inset-0 z-50 pointer-events-none select-none",children:[m.jsx("div",{className:"absolute inset-0 bg-black/15 sm:bg-black/10 backdrop-blur-[1px] pointer-events-auto transition-opacity",onClick:e,"aria-hidden":"true"}),m.jsxs("aside",{role:"dialog","aria-modal":"true","aria-label":"Wallpaper Studio Inspector",className:`absolute top-0 right-0 bottom-0 w-full sm:w-[440px] border-l shadow-[0_0_80px_rgba(0,0,0,0.8)] backdrop-blur-3xl flex flex-col z-10 pointer-events-auto transition-all animate-fadeIn ${l?"bg-white/94 border-zinc-200/90 text-zinc-900 shadow-2xl":"bg-[#090b16]/92 border-white/[0.12] text-white shadow-2xl"}`,children:[m.jsxs("div",{className:`flex items-center justify-between p-4 px-5 border-b shrink-0 ${l?"border-zinc-200 bg-white/50":"border-white/[0.08] bg-black/20"}`,children:[m.jsxs("div",{className:"flex items-center gap-2.5",children:[m.jsx("div",{className:`w-8 h-8 rounded-full border flex items-center justify-center ${l?"bg-violet-50 border-violet-200 text-violet-700":"bg-white/[0.06] border-white/15 text-zinc-200"}`,children:m.jsx(Ag,{className:"w-3.5 h-3.5"})}),m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("h2",{className:"text-xs font-display uppercase tracking-widest font-bold",children:"Wallpaper Studio"}),m.jsx("span",{className:`text-[9px] font-mono font-medium px-2 py-0.5 rounded-full border ${l?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-emerald-500/15 text-emerald-300 border-emerald-400/30"}`,children:"Live Preview"})]}),m.jsx("p",{className:`text-[10px] font-sans ${l?"text-zinc-500":"text-zinc-400"}`,children:"Changes apply instantly in real time"})]})]}),m.jsxs("div",{className:"flex items-center gap-1.5",children:[m.jsx("button",{type:"button",onClick:u,"aria-label":"Reset to default settings",title:"Reset to Defaults",className:`p-2 rounded-full transition-colors cursor-pointer ${l?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white"}`,children:m.jsx(Fr,{className:"w-3.5 h-3.5"})}),m.jsx("button",{type:"button",onClick:e,"aria-label":"Close Wallpaper Studio",className:`p-2 rounded-full transition-colors cursor-pointer ${l?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white"}`,children:m.jsx(ar,{className:"w-4 h-4"})})]})]}),m.jsx("div",{className:`flex items-center gap-1 px-4 py-2 border-b shrink-0 overflow-x-auto no-scrollbar ${l?"border-zinc-200 bg-zinc-50/80":"border-white/[0.06] bg-black/30"}`,children:[{id:"presets",label:"Master Themes",icon:ds},{id:"celestial",label:"Celestial 3D",icon:Yl},{id:"waves",label:"Waves",icon:Rb},{id:"clock",label:"Clock & Telemetry",icon:Af}].map(f=>{const x=f.icon,v=d===f.id;return m.jsxs("button",{type:"button",onClick:()=>p(f.id),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 cursor-pointer ${v?l?"bg-zinc-900 text-white font-semibold shadow-sm":"bg-white text-zinc-950 font-semibold shadow-sm":l?"hover:bg-zinc-200/80 text-zinc-600":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,children:[m.jsx(x,{className:"w-3 h-3"}),m.jsx("span",{children:f.label})]},f.id)})}),m.jsxs("div",{className:"flex-1 overflow-y-auto p-5 space-y-6",children:[d==="presets"&&m.jsxs("div",{className:"space-y-4 animate-fadeIn",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold ${l?"text-zinc-700":"text-zinc-300"}`,children:"Curated Aesthetic Realms"}),m.jsx("span",{className:`text-[10px] font-mono ${l?"text-zinc-500":"text-zinc-400"}`,children:"1-Tap Complete Transformation"})]}),m.jsx("div",{className:"grid grid-cols-1 gap-2.5",children:Pb.map(f=>{const x=t.palette===f.settings.palette&&t.celestialBody===f.settings.celestialBody&&t.waveGeometry===f.settings.waveGeometry;return m.jsxs("button",{type:"button",onClick:()=>r(f.settings),className:`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between group ${x?l?"bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900 shadow-md":"bg-white/[0.08] border-white/40 shadow-lg":l?"bg-white hover:bg-zinc-50 border-zinc-200/90":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08]"}`,children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("div",{className:"w-10 h-10 rounded-xl border border-white/20 shrink-0 shadow-sm flex items-center justify-center overflow-hidden",style:{background:`linear-gradient(135deg, ${f.gradient.join(", ")})`},children:x&&m.jsx(aa,{className:"w-4 h-4 text-white drop-shadow-md stroke-[3]"})}),m.jsxs("div",{children:[m.jsx("div",{className:`text-xs font-display font-bold ${x?l?"text-zinc-950 font-bold":"text-white":l?"text-zinc-800":"text-zinc-200"}`,children:f.name}),m.jsx("div",{className:`text-[10px] font-sans ${l?"text-zinc-500":"text-zinc-400"}`,children:f.tagline})]})]}),m.jsx("div",{className:"flex items-center gap-1.5 shrink-0 pl-2",children:f.gradient.map((v,_)=>m.jsx("div",{className:"w-2.5 h-2.5 rounded-full border border-black/20",style:{backgroundColor:v}},_))})]},f.id)})}),m.jsxs("div",{className:"pt-4 space-y-2.5 border-t border-white/10",children:[m.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${l?"text-zinc-700":"text-zinc-300"}`,children:"Harmonic Tonal Palette"}),m.jsx("div",{className:"grid grid-cols-2 gap-2",children:Lb.map(f=>{const x=t.palette===f.id;return m.jsxs("button",{type:"button",onClick:()=>r({palette:f.id}),className:`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col gap-1.5 ${x?l?"bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900 shadow-sm":"bg-white/[0.08] border-white/40 shadow-sm":l?"bg-white hover:bg-zinc-50 border-zinc-200":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]"}`,children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("span",{className:`text-[11px] font-semibold ${x?l?"text-zinc-950":"text-white":l?"text-zinc-700":"text-zinc-300"}`,children:f.name}),x&&m.jsx(aa,{className:"w-3 h-3 text-emerald-400"})]}),m.jsx("div",{className:"flex items-center gap-1",children:f.previewColors.map((v,_)=>m.jsx("span",{className:"w-3.5 h-3.5 rounded-full border border-black/20",style:{backgroundColor:v}},_))})]},f.id)})})]})]}),d==="celestial"&&m.jsxs("div",{className:"space-y-5 animate-fadeIn",children:[m.jsxs("div",{className:"space-y-2.5",children:[m.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${l?"text-zinc-700":"text-zinc-300"}`,children:"Primary 3D Celestial Body"}),m.jsx("div",{className:"grid grid-cols-2 gap-2",children:Db.map(f=>{const x=(t.celestialBody||"crescent-moon")===f.id;return m.jsxs("button",{type:"button",onClick:()=>r({celestialBody:f.id}),className:`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${x?l?"bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900 shadow-sm":"bg-white/[0.08] border-white/40 shadow-sm":l?"bg-white hover:bg-zinc-50 border-zinc-200":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]"}`,children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("span",{className:`text-xs font-display font-bold ${x?l?"text-zinc-950":"text-white":l?"text-zinc-700":"text-zinc-300"}`,children:f.name}),x&&m.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"})]}),m.jsx("span",{className:`text-[10px] font-sans mt-1 leading-snug ${l?"text-zinc-500":"text-zinc-400"}`,children:f.desc})]},f.id)})})]}),m.jsxs("div",{className:"space-y-2.5 pt-2 border-t border-white/10",children:[m.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${l?"text-zinc-700":"text-zinc-300"}`,children:"Astronomical Phenomena"}),m.jsx("div",{className:"grid grid-cols-1 gap-2 text-xs",children:[{key:"showConstellations",label:"Constellation Charts",desc:"Astronomical celestial chords"},{key:"showComet",label:"Cosmic Comet",desc:"Sweeping ion dust tail across the horizon"},{key:"showNebulaDust",label:"Volumetric Nebula",desc:"Interstellar atmospheric clouds"},{key:"showCrossStars",label:"Diffraction Cross Stars",desc:"4-point optical diamond flares"},{key:"showOrbitalTrack",label:"Orbital Arc Track",desc:"Elliptical planetary telemetry"}].map(f=>{const x=!!t[f.key];return m.jsxs("label",{className:`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-colors ${l?"bg-white hover:bg-zinc-50 border-zinc-200":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]"}`,children:[m.jsxs("div",{children:[m.jsx("div",{className:`font-medium ${l?"text-zinc-800":"text-zinc-200"}`,children:f.label}),m.jsx("div",{className:`text-[10px] font-sans ${l?"text-zinc-500":"text-zinc-400"}`,children:f.desc})]}),m.jsx("input",{type:"checkbox",checked:x,onChange:v=>r({[f.key]:v.target.checked}),className:"w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"})]},f.key)})})]}),m.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/10",children:[m.jsxs("div",{className:"flex items-center justify-between text-xs",children:[m.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold ${l?"text-zinc-700":"text-zinc-300"}`,children:"Shooting Star Frequency"}),m.jsx("span",{className:`text-[10px] font-mono capitalize ${l?"text-violet-700":"text-violet-300"}`,children:t.shootingStarMode||"occasional"})]}),m.jsx("div",{className:"grid grid-cols-3 gap-2",children:["off","occasional","meteor-shower"].map(f=>{const x=(t.shootingStarMode||"occasional")===f;return m.jsx("button",{type:"button",onClick:()=>r({shootingStarMode:f}),className:`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer text-xs capitalize font-medium ${x?l?"bg-zinc-900 text-white font-semibold border-zinc-900":"bg-white text-zinc-950 font-semibold border-white":l?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06] text-zinc-400"}`,children:f.replace("-"," ")},f)})})]})]}),d==="waves"&&m.jsxs("div",{className:"space-y-5 animate-fadeIn",children:[m.jsxs("div",{className:"space-y-2.5",children:[m.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${l?"text-zinc-700":"text-zinc-300"}`,children:"Wave Topographic Geometry"}),m.jsx("div",{className:"grid grid-cols-2 gap-2",children:Ib.map(f=>{const x=(t.waveGeometry||"dunes")===f.id;return m.jsxs("button",{type:"button",onClick:()=>r({waveGeometry:f.id}),className:`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${x?l?"bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900 shadow-sm":"bg-white/[0.08] border-white/40 shadow-sm":l?"bg-white hover:bg-zinc-50 border-zinc-200":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]"}`,children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("span",{className:`text-xs font-display font-bold ${x?l?"text-zinc-950":"text-white":l?"text-zinc-700":"text-zinc-300"}`,children:f.name}),x&&m.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"})]}),m.jsx("span",{className:`text-[10px] font-sans mt-1 leading-snug ${l?"text-zinc-500":"text-zinc-400"}`,children:f.desc})]},f.id)})})]}),m.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/10",children:[m.jsxs("div",{className:"flex items-center justify-between text-xs",children:[m.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold ${l?"text-zinc-700":"text-zinc-300"}`,children:"Kinetic Drift Speed"}),m.jsx("span",{className:`text-[10px] font-mono capitalize ${l?"text-zinc-600":"text-zinc-400"}`,children:t.speed||"balanced"})]}),m.jsx("div",{className:"grid grid-cols-4 gap-2",children:["frozen","calm","balanced","dynamic"].map(f=>{const x=(t.speed||"balanced")===f;return m.jsx("button",{type:"button",onClick:()=>r({speed:f}),className:`py-2 px-1 rounded-xl border text-center transition-all cursor-pointer text-xs capitalize font-medium ${x?l?"bg-zinc-900 text-white font-semibold border-zinc-900":"bg-white text-zinc-950 font-semibold border-white":l?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06] text-zinc-400"}`,children:f},f)})})]}),m.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/10",children:[m.jsxs("div",{className:"flex items-center justify-between text-xs",children:[m.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold ${l?"text-zinc-700":"text-zinc-300"}`,children:"Wave Amplitude"}),m.jsx("span",{className:`text-[10px] font-mono capitalize ${l?"text-zinc-600":"text-zinc-400"}`,children:t.amplitude||"majestic"})]}),m.jsx("div",{className:"grid grid-cols-3 gap-2",children:["subtle","majestic","dramatic"].map(f=>{const x=(t.amplitude||"majestic")===f;return m.jsx("button",{type:"button",onClick:()=>r({amplitude:f}),className:`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer text-xs capitalize font-medium ${x?l?"bg-zinc-900 text-white font-semibold border-zinc-900":"bg-white text-zinc-950 font-semibold border-white":l?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06] text-zinc-400"}`,children:f},f)})})]}),m.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/10",children:[m.jsxs("div",{className:"flex items-center justify-between text-xs",children:[m.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold ${l?"text-zinc-700":"text-zinc-300"}`,children:"Layer Density"}),m.jsx("span",{className:`text-[10px] font-mono capitalize ${l?"text-zinc-600":"text-zinc-400"}`,children:t.waveLayerDensity||"deep"})]}),m.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{id:"airy",label:"Airy (3)"},{id:"deep",label:"Deep (5)"},{id:"dense",label:"Dense (7)"}].map(f=>{const x=(t.waveLayerDensity||"deep")===f.id;return m.jsx("button",{type:"button",onClick:()=>r({waveLayerDensity:f.id}),className:`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer text-xs font-medium ${x?l?"bg-zinc-900 text-white font-semibold border-zinc-900":"bg-white text-zinc-950 font-semibold border-white":l?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06] text-zinc-400"}`,children:f.label},f.id)})})]})]}),d==="clock"&&m.jsxs("div",{className:"space-y-5 animate-fadeIn",children:[m.jsxs("div",{className:"space-y-2.5",children:[m.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${l?"text-zinc-700":"text-zinc-300"}`,children:"Clock Typography Face"}),m.jsx("div",{className:"grid grid-cols-2 gap-2",children:Ub.map(f=>{const x=(t.clockFontStyle||"tabular")===f.id;return m.jsxs("button",{type:"button",onClick:()=>r({clockFontStyle:f.id}),className:`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${x?l?"bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900 shadow-sm":"bg-white/[0.08] border-white/40 shadow-sm":l?"bg-white hover:bg-zinc-50 border-zinc-200":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]"}`,children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("span",{className:`text-xs font-display font-bold ${x?l?"text-zinc-950":"text-white":l?"text-zinc-700":"text-zinc-300"}`,children:f.label}),x&&m.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"})]}),m.jsx("span",{className:"text-xl font-bold mt-2 tabular-nums opacity-80",children:f.preview})]},f.id)})})]}),m.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/10",children:[m.jsxs("div",{className:"flex items-center justify-between text-xs",children:[m.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold ${l?"text-zinc-700":"text-zinc-300"}`,children:"Clock Scale"}),m.jsx("span",{className:`text-[10px] font-mono capitalize ${l?"text-zinc-600":"text-zinc-400"}`,children:t.clockSize||"standard"})]}),m.jsx("div",{className:"grid grid-cols-3 gap-2",children:["compact","standard","heroic"].map(f=>{const x=(t.clockSize||"standard")===f;return m.jsx("button",{type:"button",onClick:()=>r({clockSize:f}),className:`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer text-xs capitalize font-medium ${x?l?"bg-zinc-900 text-white font-semibold border-zinc-900":"bg-white text-zinc-950 font-semibold border-white":l?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06] text-zinc-400"}`,children:f},f)})})]}),m.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/10",children:[m.jsxs("div",{className:"flex items-center justify-between text-xs",children:[m.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold ${l?"text-zinc-700":"text-zinc-300"}`,children:"Celestial Breathing Halo"}),m.jsx("span",{className:`text-[10px] font-mono capitalize ${l?"text-zinc-600":"text-zinc-400"}`,children:t.clockHalo||"pulsar"})]}),m.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{id:"none",label:"None"},{id:"subtle",label:"Subtle Aura"},{id:"pulsar",label:"Pulsar Flare"}].map(f=>{const x=(t.clockHalo||"pulsar")===f.id;return m.jsx("button",{type:"button",onClick:()=>r({clockHalo:f.id}),className:`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer text-xs font-medium ${x?l?"bg-zinc-900 text-white font-semibold border-zinc-900":"bg-white text-zinc-950 font-semibold border-white":l?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06] text-zinc-400"}`,children:f.label},f.id)})})]}),m.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/10",children:[m.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${l?"text-zinc-700":"text-zinc-300"}`,children:"Display Options"}),m.jsx("div",{className:"grid grid-cols-1 gap-2 text-xs",children:[{key:"showSeconds",label:"Display Seconds",checked:t.showSeconds!==!1},{key:"showGreeting",label:"Display Living Greeting & Mantra",checked:t.showGreeting!==!1}].map(f=>m.jsxs("label",{className:`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-colors ${l?"bg-white hover:bg-zinc-50 border-zinc-200":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]"}`,children:[m.jsx("span",{className:`font-medium ${l?"text-zinc-800":"text-zinc-200"}`,children:f.label}),m.jsx("input",{type:"checkbox",checked:f.checked,onChange:x=>r({[f.key]:x.target.checked}),className:"w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"})]},f.key))})]})]})]}),m.jsxs("div",{className:`p-4 px-5 border-t shrink-0 flex items-center justify-between ${l?"border-zinc-200 bg-white/60":"border-white/[0.08] bg-black/30"}`,children:[m.jsx("span",{className:`text-[11px] font-mono ${l?"text-zinc-500":"text-zinc-400"}`,children:"Live Studio v3.0"}),m.jsx("button",{type:"button",onClick:e,className:`px-5 py-2 rounded-xl text-xs font-semibold shadow-md transition-all cursor-pointer ${l?"bg-zinc-900 hover:bg-zinc-800 text-white":"bg-white hover:bg-zinc-200 text-zinc-950 shadow-[0_0_20px_rgba(255,255,255,0.2)]"}`,children:"Done"})]})]})]})},to=({className:s="w-4 h-4"})=>m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:s,"aria-hidden":"true",children:m.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})}),Vg=({isPlaying:s,color:e="#a855f7",className:t="w-16 h-5",barCount:r=10})=>{const o=we.useRef(null);return we.useEffect(()=>{const l=o.current;if(!l)return;const d=l.getContext("2d");if(!d)return;let p;const u=cs.getAnalyser(),f=u?new Uint8Array(u.frequencyBinCount):null,x=()=>{if(d.clearRect(0,0,l.width,l.height),s&&u&&f){u.getByteFrequencyData(f);const v=l.width,_=l.height,M=2,b=M*(r-1),C=Math.max(2,(v-b)/r);for(let y=0;y<r;y++){const S=Math.min(f.length-1,Math.floor(y*(f.length/r)*.7)),R=f[S]/255,k=Math.max(3,R*(_-2)),P=y*(C+M),U=_-k;d.fillStyle=e,d.beginPath(),d.roundRect(P,U,C,k,1.5),d.fill()}}else{const v=l.width,_=l.height,M=2,b=M*(r-1),C=Math.max(2,(v-b)/r);for(let y=0;y<r;y++){const S=y*(C+M),R=_-2.5;d.fillStyle="rgba(255, 255, 255, 0.2)",d.beginPath(),d.roundRect(S,R,C,2.5,1),d.fill()}}p=requestAnimationFrame(x)};return x(),()=>{cancelAnimationFrame(p)}},[s,e,r]),m.jsx("canvas",{ref:o,width:64,height:20,className:t,"aria-hidden":"true"})},kb=({isOpen:s,onClose:e})=>{const{appTheme:t,audioSource:r,isAudioPlaying:o,activeSoundscapeId:l,audioVolume:d,isAudioMuted:p,playSoundscape:u,stopSoundscape:f,setAudioVolume:x,toggleAudioMute:v,isYouTubePlaying:_,activeYouTubeItem:M,youtubeVolume:b,isYouTubeMuted:C,savedYouTubeItems:y,showYouTubePreview:S,setShowYouTubePreview:R,playYouTubeItem:k,toggleYouTubePlay:P,stopYouTube:U,nextYouTubeTrack:D,prevYouTubeTrack:w,setYouTubeVolume:N,toggleYouTubeMute:te,addYouTubeToLibrary:$,removeYouTubeFromLibrary:H}=Vr(),W=t==="light",[V,G]=we.useState(r||"youtube"),[O,re]=we.useState(""),[K,X]=we.useState(""),[j,Y]=we.useState(null),[L,ee]=we.useState(null),[be,F]=we.useState(null),[ve,Me]=we.useState(null);if(we.useEffect(()=>{if(!be){Me(null);return}Me(be*60);const Ee=setInterval(()=>{Me(ze=>ze===null||ze<=1?(f(),U(),F(null),null):ze-1)},1e3);return()=>clearInterval(Ee)},[be,f,U]),we.useEffect(()=>{const Ee=ze=>{ze.key==="Escape"&&s&&e()};return window.addEventListener("keydown",Ee),()=>window.removeEventListener("keydown",Ee)},[s,e]),!s)return null;const Re=Qs.find(Ee=>Ee.id===l)||Qs[0],ye=Ee=>{const ze=Math.floor(Ee/60),We=Ee%60;return`${ze}:${We.toString().padStart(2,"0")}`},Ie=Ee=>{if(Ee.preventDefault(),Y(null),ee(null),!O.trim()){Y("Please enter a YouTube video or playlist link.");return}const ze=$(O.trim(),K.trim()||void 0);if(!ze.success||!ze.item){Y(ze.error||"Failed to parse YouTube link.");return}k(ze.item),re(""),X(""),ee(`Playing: ${ze.item.title}`),setTimeout(()=>ee(null),4e3)},lt=V==="youtube"?M?M.title:"No YouTube stream selected":Re.title,He=V==="youtube"?_:o;return m.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 backdrop-blur-xl animate-fadeIn select-none ${W?"bg-black/45":"bg-black/85"}`,role:"dialog","aria-modal":"true","aria-labelledby":"audio-modal-title",children:[m.jsx("div",{className:"fixed inset-0",onClick:e,"aria-hidden":"true"}),m.jsxs("div",{className:`relative z-10 w-full max-w-2xl border rounded-3xl shadow-[0_20px_70px_rgba(0,0,0,0.85)] flex flex-col max-h-[90vh] overflow-hidden ${W?"bg-white/95 border-zinc-200 text-zinc-900 shadow-2xl":"bg-[#0b0d1e] border-white/[0.12] text-white shadow-2xl"}`,children:[m.jsxs("div",{className:`flex items-center justify-between px-6 py-4 border-b shrink-0 ${W?"border-zinc-200 bg-zinc-50/80":"border-white/[0.08] bg-white/[0.02]"}`,children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("div",{className:`w-9 h-9 rounded-2xl border flex items-center justify-center ${W?"bg-rose-50 border-rose-200 text-red-600":"bg-red-500/20 border-red-400/40 text-red-400"}`,children:m.jsx(ic,{className:"w-5 h-5"})}),m.jsxs("div",{children:[m.jsxs("h2",{id:"audio-modal-title",className:`text-sm sm:text-base font-display font-semibold tracking-wide flex items-center gap-2 ${W?"text-zinc-900":"text-white"}`,children:["Focus Audio Sanctuary",m.jsx("span",{className:`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border ${V==="youtube"?W?"bg-red-50 text-red-700 border-red-200":"bg-red-500/15 text-red-300 border-red-500/30":W?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-emerald-500/15 text-emerald-300 border-emerald-500/30"}`,children:V==="youtube"?"YouTube Online • Infinite Audio":"Web Audio • Offline"})]}),m.jsx("p",{className:`text-xs font-sans mt-0.5 ${W?"text-zinc-500":"text-zinc-400"}`,children:V==="youtube"?"Paste any YouTube video or playlist link or choose curated study streams":"Procedurally synthesized ambient soundscapes. Zero network required."})]})]}),m.jsx("button",{type:"button",onClick:e,className:`w-8 h-8 rounded-xl flex items-center justify-center transition-colors cursor-pointer border ${W?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600 border-zinc-200":"bg-white/[0.05] hover:bg-white/[0.12] text-zinc-400 hover:text-white border-white/[0.08]"}`,"aria-label":"Close sound sanctuary",children:m.jsx(ar,{className:"w-4 h-4"})})]}),m.jsxs("div",{className:`flex items-center gap-2 px-6 pt-3 border-b shrink-0 ${W?"border-zinc-200 bg-zinc-50/50":"border-white/[0.06] bg-black/20"}`,children:[m.jsxs("button",{type:"button",onClick:()=>G("youtube"),className:`flex items-center gap-2 px-4 py-2.5 text-xs font-display font-semibold border-b-2 transition-all cursor-pointer ${V==="youtube"?W?"border-red-600 text-red-700":"border-red-500 text-white":W?"border-transparent text-zinc-500 hover:text-zinc-900":"border-transparent text-zinc-400 hover:text-zinc-200"}`,children:[m.jsx(to,{className:"w-4 h-4 text-red-500"}),m.jsx("span",{children:"YouTube Audio & Playlists"})]}),m.jsxs("button",{type:"button",onClick:()=>G("ambient"),className:`flex items-center gap-2 px-4 py-2.5 text-xs font-display font-semibold border-b-2 transition-all cursor-pointer ${V==="ambient"?W?"border-violet-600 text-violet-700":"border-violet-400 text-white":W?"border-transparent text-zinc-500 hover:text-zinc-900":"border-transparent text-zinc-400 hover:text-zinc-200"}`,children:[m.jsx(n0,{className:"w-4 h-4 text-violet-500"}),m.jsx("span",{children:"Procedural Soundscapes (Offline)"})]})]}),V==="youtube"&&m.jsxs("div",{className:"flex-1 overflow-y-auto p-5 sm:p-6 space-y-5 animate-fadeIn",children:[m.jsxs("form",{onSubmit:Ie,className:"space-y-2",children:[m.jsxs("div",{className:"flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold",children:[m.jsx("span",{className:W?"text-zinc-800":"text-zinc-300",children:"Play YouTube Link or Playlist"}),m.jsx("span",{className:`text-[10px] font-sans font-normal ${W?"text-zinc-500":"text-zinc-400"}`,children:"Supports videos, live streams & playlists"})]}),m.jsxs("div",{className:"flex flex-col sm:flex-row gap-2",children:[m.jsx("input",{type:"text",placeholder:"Paste YouTube link (e.g. https://www.youtube.com/watch?v=... or playlist?list=...)",value:O,onChange:Ee=>{re(Ee.target.value),j&&Y(null)},className:`flex-1 px-3.5 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-2 ${W?"bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:ring-red-500/20 focus:border-red-500":"bg-white/[0.04] border-white/[0.1] text-white placeholder-zinc-500 focus:ring-red-400/30 focus:border-red-400"}`}),m.jsxs("button",{type:"submit",className:"px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-display font-semibold flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer shrink-0",children:[m.jsx(ql,{className:"w-4 h-4"}),m.jsx("span",{children:"Load & Play"})]})]}),j&&m.jsxs("div",{className:"flex items-center gap-2 p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-sans",children:[m.jsx(ig,{className:"w-4 h-4 shrink-0"}),m.jsx("span",{children:j})]}),L&&m.jsxs("div",{className:"flex items-center gap-2 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-sans",children:[m.jsx(ds,{className:"w-4 h-4 shrink-0"}),m.jsx("span",{children:L})]})]}),M&&m.jsxs("div",{className:`p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${W?"bg-red-50/70 border-red-200 text-zinc-900 shadow-sm":"bg-red-950/20 border-red-500/30 text-white"}`,children:[m.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[m.jsxs("div",{className:"w-12 h-12 rounded-xl overflow-hidden bg-black/40 shrink-0 border border-white/10 relative",children:[m.jsx("img",{src:M.thumbnailUrl||Kl[0].thumbnailUrl,alt:"",className:"w-full h-full object-cover"}),_&&m.jsx("div",{className:"absolute inset-0 bg-black/35 flex items-center justify-center",children:m.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"})})]}),m.jsxs("div",{className:"min-w-0",children:[m.jsx("div",{className:"flex items-center gap-1.5",children:m.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-red-600 font-bold",children:M.type==="playlist"?"PLAYLIST":"NOW STREAMING"})}),m.jsx("h3",{className:`text-xs sm:text-sm font-display font-semibold truncate ${W?"text-zinc-900":"text-white"}`,children:M.title}),m.jsx("p",{className:`text-[11px] font-sans truncate ${W?"text-zinc-600":"text-zinc-400"}`,children:M.channel||"YouTube"})]})]}),m.jsxs("div",{className:"flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end",children:[M.type==="playlist"&&m.jsxs(m.Fragment,{children:[m.jsx("button",{type:"button",onClick:w,className:`p-2 rounded-xl border transition-colors cursor-pointer ${W?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-white"}`,title:"Previous Track in Playlist",children:m.jsx(cf,{className:"w-3.5 h-3.5"})}),m.jsx("button",{type:"button",onClick:D,className:`p-2 rounded-xl border transition-colors cursor-pointer ${W?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-white"}`,title:"Next Track in Playlist",children:m.jsx(uf,{className:"w-3.5 h-3.5"})})]}),m.jsxs("button",{type:"button",onClick:()=>{try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}},className:"px-2.5 py-1.5 rounded-xl border border-emerald-500/40 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-sans font-bold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer",title:"Force Unmute & Max Volume",children:[m.jsx(df,{className:"w-3.5 h-3.5"}),m.jsx("span",{children:"Unmute"})]}),m.jsxs("button",{type:"button",onClick:()=>R(!S),className:`px-3 py-1.5 rounded-xl border text-xs font-sans flex items-center gap-1.5 transition-colors cursor-pointer ${S?"bg-red-600 text-white border-red-600 font-medium":W?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-zinc-300"}`,title:"Toggle Floating Video Preview",children:[m.jsx(Cb,{className:"w-3.5 h-3.5"}),m.jsx("span",{children:S?"Hide Video":"View Video"})]})]})]}),m.jsxs("div",{className:"space-y-2.5",children:[m.jsxs("div",{className:`flex items-center gap-2 text-xs font-display uppercase tracking-wider font-semibold ${W?"text-zinc-800":"text-zinc-300"}`,children:[m.jsx(ds,{className:"w-3.5 h-3.5 text-amber-500"}),m.jsx("span",{children:"Curated Focus & Lo-Fi Streams"})]}),m.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:Kl.map(Ee=>{const ze=(M==null?void 0:M.id)===Ee.id||(M==null?void 0:M.videoId)===Ee.videoId&&Ee.videoId,We=ze&&_;return m.jsxs("button",{type:"button",onClick:()=>{We?P():k(Ee)},className:`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${ze?W?"bg-red-50 border-red-500 ring-2 ring-red-500/20 shadow-sm":"bg-red-500/15 border-red-400 shadow-[0_0_20px_rgba(239,68,68,0.2)]":W?"bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90 text-zinc-900":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]"}`,children:[m.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[m.jsx("div",{className:"w-9 h-9 rounded-xl overflow-hidden bg-black/40 shrink-0 border border-white/10",children:m.jsx("img",{src:Ee.thumbnailUrl,alt:"",onError:_t=>{_t.currentTarget.src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=400&auto=format&fit=crop"},className:"w-full h-full object-cover"})}),m.jsxs("div",{className:"min-w-0",children:[m.jsx("div",{className:`text-xs font-display font-semibold truncate ${ze?W?"text-red-950 font-bold":"text-white":W?"text-zinc-900":"text-zinc-200"}`,children:Ee.title}),m.jsx("div",{className:`text-[10px] font-sans truncate ${W?"text-zinc-500":"text-zinc-400"}`,children:Ee.channel})]})]}),m.jsx("div",{className:`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${We?"bg-red-600 text-white shadow-sm":W?"bg-zinc-200 text-zinc-700":"bg-white/10 text-white"}`,children:We?m.jsx(Or,{className:"w-3.5 h-3.5 fill-current"}):m.jsx(Br,{className:"w-3.5 h-3.5 ml-0.5 fill-current"})})]},Ee.id)})})]}),y.filter(Ee=>!Ee.isCurated).length>0&&m.jsxs("div",{className:"space-y-2.5",children:[m.jsx("div",{className:`flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold ${W?"text-zinc-800":"text-zinc-300"}`,children:m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(e0,{className:"w-3.5 h-3.5 text-red-500"}),m.jsx("span",{children:"My Saved YouTube Library"})]})}),m.jsx("div",{className:"space-y-2",children:y.filter(Ee=>!Ee.isCurated).map(Ee=>{const ze=(M==null?void 0:M.id)===Ee.id,We=ze&&_;return m.jsxs("div",{className:`p-3 rounded-2xl border flex items-center justify-between gap-3 transition-all ${ze?W?"bg-red-50 border-red-500 ring-2 ring-red-500/20":"bg-red-500/15 border-red-400":W?"bg-zinc-50 border-zinc-200":"bg-white/[0.03] border-white/[0.06]"}`,children:[m.jsxs("div",{onClick:()=>k(Ee),className:"flex items-center gap-3 min-w-0 flex-1 cursor-pointer",children:[m.jsx("div",{className:`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${Ee.type==="playlist"?"bg-purple-600/20 text-purple-400":"bg-red-600/20 text-red-400"}`,children:Ee.type==="playlist"?m.jsx(e0,{className:"w-4 h-4"}):m.jsx(to,{className:"w-4 h-4"})}),m.jsxs("div",{className:"min-w-0",children:[m.jsx("div",{className:`text-xs font-display font-semibold truncate ${W?"text-zinc-900":"text-white"}`,children:Ee.title}),m.jsxs("div",{className:`text-[10px] font-sans truncate ${W?"text-zinc-500":"text-zinc-400"}`,children:[Ee.type==="playlist"?"Playlist":"Single Stream"," • ",Ee.url]})]})]}),m.jsxs("div",{className:"flex items-center gap-1.5 shrink-0",children:[m.jsx("button",{type:"button",onClick:()=>{We?P():k(Ee)},className:`p-2 rounded-xl transition-colors cursor-pointer ${We?"bg-red-600 text-white":W?"bg-zinc-200 text-zinc-800 hover:bg-zinc-300":"bg-white/10 text-white hover:bg-white/20"}`,children:We?m.jsx(Or,{className:"w-3.5 h-3.5 fill-current"}):m.jsx(Br,{className:"w-3.5 h-3.5 fill-current"})}),m.jsx("button",{type:"button",onClick:()=>H(Ee.id),className:`p-2 rounded-xl transition-colors cursor-pointer ${W?"text-zinc-400 hover:text-red-600":"text-zinc-500 hover:text-red-400"}`,title:"Remove from library",children:m.jsx(rc,{className:"w-3.5 h-3.5"})})]})]},Ee.id)})})]})]}),V==="ambient"&&m.jsx("div",{className:"flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 animate-fadeIn",children:m.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3.5",children:Qs.map(Ee=>{const ze=l===Ee.id,We=ze&&o;return m.jsxs("div",{onClick:()=>{We?f():u(Ee.id)},className:`relative p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between select-none group ${ze?W?"bg-violet-50 border-violet-500 ring-2 ring-violet-500/20 shadow-sm":"bg-violet-950/35 border-violet-500/50 shadow-[0_0_25px_rgba(168,85,247,0.18)]":W?"bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90 text-zinc-900":"bg-white/[0.025] hover:bg-white/[0.05] border-white/[0.08] hover:border-white/[0.18]"}`,children:[m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center justify-between mb-2",children:[m.jsx("span",{className:`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md border ${W?"bg-zinc-200/60 text-zinc-700 border-zinc-300":"text-zinc-400 bg-white/[0.05] border-white/[0.06]"}`,children:Ee.category}),m.jsx("div",{className:`w-7 h-7 rounded-full flex items-center justify-center transition-all ${We?"bg-violet-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.6)]":W?"bg-zinc-200 text-zinc-700 group-hover:bg-zinc-300":"bg-white/[0.06] text-zinc-300 group-hover:bg-white/[0.15] group-hover:text-white"}`,children:We?m.jsx(Or,{className:"w-3.5 h-3.5 fill-current"}):m.jsx(Br,{className:"w-3.5 h-3.5 ml-0.5 fill-current"})})]}),m.jsx("h3",{className:`text-sm font-display font-semibold tracking-wide transition-colors ${W?"text-zinc-900":"text-white"}`,children:Ee.title}),m.jsx("p",{className:`text-xs font-sans mt-1 leading-snug line-clamp-2 ${W?"text-zinc-600":"text-zinc-400"}`,children:Ee.tagline})]}),m.jsxs("div",{className:`mt-3 pt-2.5 border-t flex items-center justify-between text-[10px] font-mono ${W?"border-zinc-200 text-zinc-500":"border-white/[0.06] text-zinc-400"}`,children:[m.jsx("span",{className:"truncate pr-2",children:Ee.frequency}),We&&m.jsxs("span",{className:"flex items-center gap-1 text-emerald-500 font-semibold shrink-0",children:[m.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"}),"PLAYING"]})]})]},Ee.id)})})}),m.jsxs("div",{className:`px-5 py-3 border-t flex flex-wrap items-center justify-between gap-3 shrink-0 ${W?"border-zinc-200 bg-zinc-50/60":"border-white/[0.06] bg-white/[0.01]"}`,children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(Af,{className:`w-4 h-4 ${W?"text-zinc-600":"text-violet-400"}`}),m.jsx("span",{className:`text-xs font-display font-medium ${W?"text-zinc-800":"text-zinc-300"}`,children:"Auto-Stop Timer:"}),ve!==null&&m.jsxs("span",{className:`text-xs font-mono font-bold px-2 py-0.5 rounded-md border ${W?"bg-amber-100 text-amber-900 border-amber-300":"text-amber-300 bg-amber-500/15 border-amber-500/30"}`,children:[ye(ve)," left"]})]}),m.jsx("div",{className:"flex items-center gap-1.5",children:[{label:"Off",val:null},{label:"15m",val:15},{label:"25m",val:25},{label:"45m",val:45},{label:"60m",val:60}].map(Ee=>m.jsx("button",{type:"button",onClick:()=>F(Ee.val),className:`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${be===Ee.val?W?"bg-zinc-900 text-white font-bold shadow-sm":"bg-violet-600 text-white font-bold shadow-sm":W?"bg-zinc-200/80 text-zinc-700 hover:bg-zinc-300":"bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08]"}`,children:Ee.label},Ee.label))})]}),m.jsxs("div",{className:`p-4 sm:p-5 border-t flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 ${W?"border-zinc-200 bg-zinc-100/90":"border-white/[0.08] bg-[#070914]/90 backdrop-blur-xl"}`,children:[m.jsxs("div",{className:"flex items-center gap-3 w-full sm:w-auto",children:[m.jsx("div",{className:`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${V==="youtube"?W?"bg-red-50 border-red-200 text-red-600":"bg-red-500/20 border-red-400/40 text-red-300":W?"bg-violet-50 border-violet-200 text-violet-700":"bg-violet-600/30 border-violet-400/40 text-violet-200"}`,children:V==="youtube"?m.jsx(to,{className:`w-5 h-5 ${_?"animate-pulse text-red-500":"text-zinc-400"}`}):m.jsx(n0,{className:`w-5 h-5 ${o?"text-violet-500 animate-pulse":"text-zinc-400"}`})}),m.jsxs("div",{className:"min-w-0 flex-1",children:[m.jsx("p",{className:`text-xs font-display font-medium truncate ${W?"text-zinc-900":"text-white"}`,children:lt}),m.jsxs("div",{className:"flex items-center gap-2 mt-0.5",children:[m.jsx(Vg,{isPlaying:He,color:V==="youtube"?"#ef4444":W?"#7c3aed":Re.accentColor,className:"w-16 h-4"}),m.jsx("span",{className:`text-[10px] font-mono ${W?"text-zinc-500":"text-zinc-400"}`,children:He?V==="youtube"?"Streaming YouTube...":"Synthesizing...":"Audio Paused"})]})]})]}),m.jsxs("div",{className:"flex items-center gap-4 w-full sm:w-auto justify-end",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("button",{type:"button",onClick:V==="youtube"?te:v,className:`transition-colors cursor-pointer ${W?"text-zinc-600 hover:text-black":"text-zinc-400 hover:text-white"}`,title:"Toggle Mute",children:(V==="youtube"?C:p)?m.jsx(Bg,{className:"w-4 h-4 text-red-500"}):m.jsx(df,{className:"w-4 h-4"})}),m.jsx("input",{type:"range",min:"0",max:V==="youtube"?100:1,step:V==="youtube"?1:.01,value:V==="youtube"?C?0:b:p?0:d,onChange:Ee=>{const ze=parseFloat(Ee.target.value);if(V==="youtube"){N(ze),C&&te();try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}}else x(ze)},className:"w-20 sm:w-24 h-1.5 bg-zinc-300 rounded-lg appearance-none cursor-pointer accent-red-600","aria-label":"Volume slider"}),m.jsx("span",{className:`text-[10px] font-mono w-8 tabular-nums ${W?"text-zinc-600":"text-zinc-400"}`,children:V==="youtube"?`${C?0:Math.round(b)}%`:`${p?0:Math.round(d*100)}%`})]}),m.jsx("button",{type:"button",onClick:()=>{V==="youtube"?P():o?f():u(l)},className:`px-5 py-2.5 rounded-xl text-white text-xs font-display font-semibold tracking-wider uppercase flex items-center gap-2 shadow-md transition-all cursor-pointer ${V==="youtube"?"bg-red-600 hover:bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.35)]":"bg-violet-600 hover:bg-violet-500 shadow-[0_0_20px_rgba(147,51,234,0.35)]"}`,children:He?m.jsxs(m.Fragment,{children:[m.jsx(Or,{className:"w-3.5 h-3.5 fill-current"}),m.jsx("span",{children:"Pause"})]}):m.jsxs(m.Fragment,{children:[m.jsx(Br,{className:"w-3.5 h-3.5 fill-current"}),m.jsx("span",{children:"Play"})]})})]})]})]})]})},zb=({isOpen:s,onClose:e})=>{const{profile:t,updateProfile:r,appTheme:o,setStudySubject:l,lastActiveDate:d,resetDayProgress:p,factoryReset:u}=Vr(),f=o==="light",[x,v]=we.useState(t.name||"Azan"),[_,M]=we.useState(t.motto||"Remember, you are here for you."),[b,C]=we.useState(t.defaultFocusTopic||"Engineering"),[y,S]=we.useState(t.defaultFocusMode||"Deep Work"),[R,k]=we.useState(!1),[P,U]=we.useState(null);if(we.useEffect(()=>{v(t.name||"Azan"),M(t.motto||"Remember, you are here for you."),C(t.defaultFocusTopic||"Engineering"),S(t.defaultFocusMode||"Deep Work")},[t,s]),we.useEffect(()=>{const H=W=>{W.key==="Escape"&&s&&e()};return window.addEventListener("keydown",H),()=>window.removeEventListener("keydown",H)},[s,e]),!s)return null;const D=H=>{H.preventDefault();const W=x.trim()||"Azan",V=_.trim()||"Remember, you are here for you.",G=b.trim()||"Engineering",O=y.trim()||"Deep Work";r({name:W,motto:V,defaultFocusTopic:G,defaultFocusMode:O}),l(G),k(!0),setTimeout(()=>{k(!1),e()},500)},w=()=>{v("Azan"),M("Remember, you are here for you."),C("Engineering"),S("Deep Work"),r({name:"Azan",motto:"Remember, you are here for you.",defaultFocusTopic:"Engineering",defaultFocusMode:"Deep Work"}),l("Engineering")},N=()=>{window.confirm("Start a fresh day? This will uncheck today's tasks & habits, reset hydration to 0%, and reset focus timer.")&&(p(),U("Today's progress has been reset!"),setTimeout(()=>U(null),3e3))},te=()=>{window.confirm("WARNING: Are you sure you want to perform a factory reset? All saved tasks, habits, focus history, and settings will be permanently wiped and restored to default.")&&(u(),U("All app data restored to factory defaults."),setTimeout(()=>{U(null),e()},1500))},$=()=>{const H=new Date().getHours();return H>=5&&H<12?"Good morning":H>=12&&H<17?"Good afternoon":H>=17&&H<22?"Good evening":"Late night focus"};return m.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-fadeIn select-none ${f?"bg-black/35":"bg-black/80"}`,children:[m.jsx("div",{className:"fixed inset-0",onClick:e,"aria-hidden":"true"}),m.jsxs("div",{role:"dialog","aria-modal":"true","aria-labelledby":"profile-modal-title",className:`relative w-full max-w-lg overflow-hidden rounded-3xl border shadow-2xl flex flex-col z-10 ${f?"bg-white/95 border-zinc-200 text-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)]":"cosmic-card border-white/[0.14] text-white shadow-2xl"}`,children:[m.jsxs("div",{className:`flex items-center justify-between p-5 pb-3 border-b shrink-0 ${f?"border-zinc-200":"border-white/[0.08]"}`,children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("div",{className:`w-8 h-8 rounded-xl border flex items-center justify-center ${f?"bg-amber-50 border-amber-200 text-amber-700":"bg-amber-500/20 border-amber-400/30 text-amber-300"}`,children:m.jsx(kg,{className:"w-4 h-4"})}),m.jsxs("div",{children:[m.jsx("h2",{id:"profile-modal-title",className:`text-sm font-display uppercase tracking-widest font-bold ${f?"text-zinc-900":"text-white"}`,children:"Personal Sanctuary Profile"}),m.jsx("p",{className:`text-[11px] font-sans ${f?"text-zinc-500":"text-zinc-400"}`,children:"Tailor your name, daily motto & focus targets"})]})]}),m.jsxs("div",{className:"flex items-center gap-1.5",children:[m.jsx("button",{type:"button",onClick:w,"aria-label":"Reset profile to defaults",title:"Reset to defaults",className:`p-2 rounded-xl transition-colors cursor-pointer ${f?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white"}`,children:m.jsx(Fr,{className:"w-3.5 h-3.5"})}),m.jsx("button",{type:"button",onClick:e,"aria-label":"Close Profile Modal",className:`p-2 rounded-xl transition-colors cursor-pointer ${f?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white"}`,children:m.jsx(ar,{className:"w-4 h-4"})})]})]}),m.jsxs("form",{onSubmit:D,className:"p-6 space-y-4",children:[m.jsxs("div",{className:`p-4 rounded-2xl border text-center space-y-1 transition-all ${f?"bg-zinc-50 border-zinc-200 text-zinc-800":"bg-white/[0.03] border-white/[0.08] text-zinc-200"}`,children:[m.jsx("span",{className:`text-[10px] font-mono uppercase tracking-widest ${f?"text-zinc-500":"text-zinc-400"}`,children:"Live Greeting Preview"}),m.jsxs("p",{className:"text-xs sm:text-sm font-sans leading-relaxed",children:[$(),","," ",m.jsx("strong",{className:f?"text-zinc-950":"text-white",children:x.trim()||"Azan"}),". •"," ",m.jsxs("span",{className:`italic ${f?"text-zinc-700 font-medium":"text-zinc-300"}`,children:["“",_.trim()||"Remember, you are here for you.","”"]})]})]}),m.jsxs("div",{className:"space-y-1.5",children:[m.jsxs("label",{className:`text-xs font-semibold flex items-center justify-between ${f?"text-zinc-800":"text-zinc-200"}`,children:[m.jsxs("span",{className:"flex items-center gap-1.5",children:[m.jsx(Mb,{className:"w-3.5 h-3.5 text-amber-500"}),m.jsx("span",{children:"Your Name"})]}),m.jsx("span",{className:`text-[10px] font-normal ${f?"text-zinc-500":"text-zinc-400"}`,children:"Used in greetings & daily focus"})]}),m.jsx("input",{type:"text",value:x,onChange:H=>v(H.target.value),placeholder:"e.g. Azan",className:"w-full cosmic-input rounded-xl px-3.5 py-2.5 text-xs font-medium"})]}),m.jsxs("div",{className:"space-y-1.5",children:[m.jsxs("label",{className:`text-xs font-semibold flex items-center justify-between ${f?"text-zinc-800":"text-zinc-200"}`,children:[m.jsxs("span",{className:"flex items-center gap-1.5",children:[m.jsx(wb,{className:"w-3.5 h-3.5 text-violet-400"}),m.jsx("span",{children:"Daily Mantra / Motto"})]}),m.jsx("span",{className:`text-[10px] font-normal ${f?"text-zinc-500":"text-zinc-400"}`,children:"Displayed on your wallpaper"})]}),m.jsx("input",{type:"text",value:_,onChange:H=>M(H.target.value),placeholder:"e.g. Remember, you are here for you.",className:"w-full cosmic-input rounded-xl px-3.5 py-2.5 text-xs font-medium"})]}),m.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-1",children:[m.jsxs("div",{className:"space-y-1.5",children:[m.jsxs("label",{className:`text-xs font-semibold flex items-center gap-1.5 ${f?"text-zinc-800":"text-zinc-200"}`,children:[m.jsx(Ab,{className:"w-3.5 h-3.5 text-emerald-400"}),m.jsx("span",{children:"Primary Focus Topic"})]}),m.jsx("input",{type:"text",value:b,onChange:H=>C(H.target.value),placeholder:"e.g. Engineering",className:"w-full cosmic-input rounded-xl px-3.5 py-2 text-xs"})]}),m.jsxs("div",{className:"space-y-1.5",children:[m.jsxs("label",{className:`text-xs font-semibold flex items-center gap-1.5 ${f?"text-zinc-800":"text-zinc-200"}`,children:[m.jsx(dg,{className:"w-3.5 h-3.5 text-amber-500"}),m.jsx("span",{children:"Default Focus Mode"})]}),m.jsx("input",{type:"text",value:y,onChange:H=>S(H.target.value),placeholder:"e.g. Deep Work",className:"w-full cosmic-input rounded-xl px-3.5 py-2 text-xs"})]})]}),m.jsxs("div",{className:"pt-2",children:[m.jsx("span",{className:`text-[10px] font-mono uppercase tracking-wider block mb-1.5 ${f?"text-zinc-500":"text-zinc-400"}`,children:"Quick Mantras"}),m.jsx("div",{className:"flex flex-wrap gap-1.5",children:["Remember, you are here for you.","Discipline equals true freedom.","Deep focus over scattered noise.","Build with relentless craft."].map(H=>m.jsxs("button",{type:"button",onClick:()=>M(H),className:`text-[11px] px-2.5 py-1 rounded-lg border transition-all text-left cursor-pointer ${_===H?f?"bg-violet-100 border-violet-300 text-violet-900 font-medium":"bg-violet-600/30 border-violet-400/50 text-violet-200 font-medium":f?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300"}`,children:["“",H,"”"]},H))})]}),m.jsxs("div",{className:`p-3.5 rounded-2xl border space-y-2.5 ${f?"bg-zinc-50 border-zinc-200":"bg-white/[0.02] border-white/[0.08]"}`,children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsxs("div",{className:"flex items-center gap-1.5",children:[m.jsx(vb,{className:`w-3.5 h-3.5 ${f?"text-violet-700":"text-violet-400"}`}),m.jsx("span",{className:`text-xs font-semibold ${f?"text-zinc-800":"text-zinc-200"}`,children:"Daily Rollover & Data Control"})]}),m.jsxs("span",{className:`text-[10px] font-mono ${f?"text-zinc-500":"text-zinc-400"}`,children:["Date: ",d]})]}),P&&m.jsxs("div",{className:"p-2 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs flex items-center gap-2",children:[m.jsx(aa,{className:"w-3.5 h-3.5 shrink-0"}),m.jsx("span",{children:P})]}),m.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1",children:[m.jsxs("button",{type:"button",onClick:N,className:`px-3 py-2 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${f?"bg-white hover:bg-zinc-100 text-zinc-800 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200 border-white/[0.10]"}`,title:"Uncheck today's tasks & habits, reset hydration",children:[m.jsx(Fr,{className:"w-3.5 h-3.5 text-violet-400"}),m.jsx("span",{children:"Start Fresh Day"})]}),m.jsxs("button",{type:"button",onClick:te,className:`px-3 py-2 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${f?"bg-rose-50 hover:bg-rose-100 text-rose-700 border-rose-200":"bg-rose-950/20 hover:bg-rose-900/40 text-rose-300 border-rose-500/20 hover:border-rose-500/40"}`,title:"Wipe data and restore factory defaults",children:[m.jsx(rc,{className:"w-3.5 h-3.5 text-rose-400"}),m.jsx("span",{children:"Factory Reset"})]})]})]}),m.jsxs("div",{className:"pt-4 flex items-center justify-end gap-2.5",children:[m.jsx("button",{type:"button",onClick:e,className:`px-4 py-2.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${f?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300"}`,children:"Cancel"}),m.jsx("button",{type:"submit",className:`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all cursor-pointer ${R?"bg-emerald-500 text-white":f?"bg-zinc-900 hover:bg-zinc-800 text-white":"bg-violet-600 hover:bg-violet-500 text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]"}`,children:R?m.jsxs(m.Fragment,{children:[m.jsx(aa,{className:"w-3.5 h-3.5"}),m.jsx("span",{children:"Saved!"})]}):m.jsxs(m.Fragment,{children:[m.jsx(ds,{className:"w-3.5 h-3.5"}),m.jsx("span",{children:"Save Profile"})]})})]})]})]})]})},Ob=()=>{const{profile:s,tasks:e,toggleTask:t,addTask:r,deleteTask:o,habits:l,toggleHabit:d,addHabit:p,routines:u,addRoutineBlock:f,deleteRoutineBlock:x,resetRoutines:v,studySeconds:_,isStudyActive:M,studySubject:b,setStudySubject:C,toggleStudyTimer:y,resetStudyTimer:S,studySessions:R,hydration:k,setHydration:P,sleepHours:U,setSleep:D,dailyRating:w,setDailyRating:N,lastActiveDate:te,resetDayProgress:$,isHUDHidden:H,setIsHUDHidden:W,wallpaperSettings:V,audioSource:G,isAudioPlaying:O,activeSoundscapeId:re,playSoundscape:K,stopSoundscape:X,isYouTubePlaying:j,activeYouTubeItem:Y,toggleYouTubePlay:L,appTheme:ee,toggleAppTheme:be}=Vr(),F=ee==="light",[ve,Me]=we.useState(!1),[Re,ye]=we.useState(!1),[Ie,lt]=we.useState(!1),[He,Ee]=we.useState(!1),[ze,We]=we.useState("none"),[_t,yt]=we.useState("12:00:00"),[wt,It]=we.useState("PM"),[nn,Pt]=we.useState(""),[Wt,zt]=we.useState(""),[rn,J]=we.useState(s.defaultFocusTopic||"Engineering"),[Yt,Lt]=we.useState(s.defaultFocusMode||"Deep Work"),[bt,Ue]=we.useState(!1),[Et,qe]=we.useState(""),[rt,I]=we.useState(""),[E,ae]=we.useState(""),Ce=()=>{const Q=new Date().getHours();return Q>=5&&Q<12?"Good morning":Q>=12&&Q<17?"Good afternoon":Q>=17&&Q<22?"Good evening":"Late night focus"};we.useEffect(()=>{const Q=()=>{const $e=new Date,Oe=$e.getHours(),xt=$e.getMinutes(),Nt=$e.getSeconds(),ce=Oe>=12?"PM":"AM",Be=V.clockFormat==="24h",Ae=Be?Oe.toString().padStart(2,"0"):(Oe%12||12).toString().padStart(2,"0"),mt=xt.toString().padStart(2,"0"),qt=Nt.toString().padStart(2,"0");V.showSeconds?yt(`${Ae}:${mt}:${qt}`):yt(`${Ae}:${mt}`),It(Be?"":ce);const mn=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Mn=["January","February","March","April","May","June","July","August","September","October","November","December"];Pt(`${mn[$e.getDay()]}, ${Mn[$e.getMonth()]} ${$e.getDate()}, ${$e.getFullYear()}`)};Q();const je=setInterval(Q,1e3);return()=>clearInterval(je)},[V.clockFormat,V.showSeconds]);const _e=V.clockFontStyle==="serif"?"font-serif tracking-normal":V.clockFontStyle==="mono"?"font-mono tracking-tight":V.clockFontStyle==="minimal"?"font-sans font-extralight tracking-[0.08em]":"font-display tracking-[0.05em]",Fe=V.clockSize==="compact"?"text-5xl sm:text-6xl md:text-8xl lg:text-[100px]":V.clockSize==="heroic"?"text-6xl sm:text-8xl md:text-9xl lg:text-[144px]":"text-5xl sm:text-7xl md:text-9xl lg:text-[124px]",xe=V.clockHalo==="none"?"opacity-0":V.clockHalo==="subtle"?"bg-violet-600/8 blur-[90px]":"bg-violet-600/18 blur-[120px] animate-pulse";we.useEffect(()=>{const Q=je=>{je.key==="Escape"&&(ze!=="none"?We("none"):H?W(!1):He&&Ee(!1))};return window.addEventListener("keydown",Q),()=>window.removeEventListener("keydown",Q)},[ze,H,He,W]);const ie=Q=>{Q.preventDefault(),Wt.trim()&&(r(Wt.trim()),zt(""))},se=e.filter(Q=>Q.completed).length,Se=e.length>0?Math.round(se/e.length*100):0,z=l.filter(Q=>Q.completed).length,me=l.length>0?Math.round(z/l.length*100):0,de=new Date;de.setDate(de.getDate()-7);const Te=+((R||[]).filter(Q=>new Date(Q.timestamp)>=de).reduce((Q,je)=>Q+je.durationSeconds,0)/3600).toFixed(1),Le=Math.min(100,Math.round(Te/15*100)),Ze=Q=>{const je=Math.floor(Q/60),$e=Q%60;return`${je.toString().padStart(2,"0")}:${$e.toString().padStart(2,"0")}`},ut=Qs.find(Q=>Q.id===re)||Qs[0];return m.jsxs("div",{className:"relative w-screen h-screen max-h-screen overflow-hidden flex flex-col justify-between pt-safe-top pt-6 sm:pt-6 px-4 sm:px-8 pb-safe-bottom pb-6 select-none z-10 animate-fadeIn",children:[m.jsx("h1",{className:"sr-only",children:"FOR ME — Living Wallpaper & Focus Sanctuary"}),m.jsxs("header",{className:`flex items-center justify-between w-full min-h-12 shrink-0 z-20 gap-3 transition-opacity duration-300 ${H?"opacity-0 pointer-events-none":"opacity-100"}`,children:[m.jsxs("button",{type:"button",onClick:()=>W(!0),className:"flex items-center gap-2.5 cursor-pointer group shrink-0 text-left",title:"Enter Zen Wallpaper Mode",children:[m.jsx("div",{className:`w-8 h-8 rounded-full border flex items-center justify-center text-[11px] font-mono font-medium tracking-tight shadow-sm transition-all ${F?"border-zinc-300/80 bg-white/80 text-zinc-900 group-hover:bg-white group-hover:border-zinc-400":"border-white/15 bg-white/[0.04] text-zinc-200 group-hover:bg-white/[0.1] group-hover:border-white/30"}`,children:"FM"}),m.jsx("span",{className:`font-sans font-bold text-[11px] tracking-[0.22em] uppercase group-hover:opacity-85 transition-opacity ${F?"text-zinc-900":"text-zinc-200"}`,children:"FOR ME"})]}),m.jsxs("div",{className:`hidden md:flex items-center gap-1.5 px-3.5 py-1 rounded-full backdrop-blur-2xl border text-[11px] font-sans font-medium shadow-sm shrink-0 ${F?"bg-white/85 border-zinc-200/90 text-zinc-700":"bg-[#090b16]/70 border-white/[0.08] text-zinc-300"}`,children:[m.jsx(ds,{className:"w-3 h-3 text-amber-400"}),m.jsx("span",{children:nn})]}),m.jsxs("nav",{"aria-label":"Wallpaper Quick Controls",className:`flex items-center gap-0.5 p-1 rounded-full backdrop-blur-2xl border transition-all ${F?"bg-white/90 border-zinc-200/90 text-zinc-700 shadow-[0_8px_24px_rgba(0,0,0,0.06)]":"bg-[#090b16]/75 border-white/[0.12] text-zinc-300 shadow-[0_12px_32px_rgba(0,0,0,0.6)]"}`,children:[m.jsx("button",{type:"button",onClick:()=>Me(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${F?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Wallpaper Studio (Celestial Objects, Waves & Lighting)","aria-label":"Wallpaper Studio",children:m.jsx(Ag,{className:"w-3.5 h-3.5"})}),m.jsx("button",{type:"button",onClick:()=>Ee(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${F?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Daily Routine Protocols","aria-label":"Daily Routine Protocols",children:m.jsx(Jm,{className:"w-3.5 h-3.5"})}),m.jsxs("button",{type:"button",onClick:()=>ye(!0),className:`relative w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${O||j?F?"text-violet-600 bg-violet-50":"text-violet-300 bg-violet-600/20":F?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Focus Audio Sanctuary (YouTube Streams & Ambient Soundscapes)","aria-label":"Focus Audio Sanctuary",children:[G==="youtube"&&j?m.jsx(to,{className:"w-3.5 h-3.5 text-red-500 animate-pulse"}):m.jsx(ic,{className:`w-3.5 h-3.5 ${O||j?"animate-pulse":""}`}),(O||j)&&m.jsx("span",{className:"absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse"})]}),m.jsx("button",{type:"button",onClick:()=>lt(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${F?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:`Profile & Motto (${s.name})`,"aria-label":"Profile and Daily Mantra",children:m.jsx(kg,{className:"w-3.5 h-3.5"})}),m.jsx("div",{className:`w-px h-3.5 mx-0.5 ${F?"bg-zinc-200":"bg-white/10"}`}),m.jsx("button",{type:"button",onClick:be,className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${F?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:`Switch to ${F?"Obsidian Dark":"Creamy Light"} Theme`,"aria-label":"Toggle Light/Dark Theme",children:F?m.jsx(Yl,{className:"w-3.5 h-3.5"}):m.jsx(Eb,{className:"w-3.5 h-3.5"})}),m.jsx("button",{type:"button",onClick:()=>W(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${F?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Zen Mode (Hide all controls)","aria-label":"Enter Zen Mode",children:m.jsx(Sb,{className:"w-3.5 h-3.5"})})]})]}),m.jsxs("main",{className:"my-auto text-center flex flex-col items-center justify-center relative z-20 py-4 select-none",children:[m.jsx("div",{className:`absolute w-[360px] h-[360px] sm:w-[520px] sm:h-[520px] lg:w-[680px] lg:h-[680px] rounded-full ${xe} pointer-events-none -z-10`}),m.jsxs("div",{className:`inline-flex items-baseline justify-center max-w-[94vw] px-2 gap-2 sm:gap-4 md:gap-6 ${_e} select-none leading-none flex-nowrap ${F?"text-zinc-900 drop-shadow-[0_4px_24px_rgba(200,180,160,0.30)]":"text-white drop-shadow-[0_12px_60px_rgba(0,0,0,0.95)]"}`,children:[m.jsx("span",{className:`${Fe} font-light tabular-nums whitespace-nowrap`,children:_t}),wt&&m.jsx("span",{className:`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal ${F?"text-zinc-600":"text-zinc-300"}`,children:wt})]}),V.showGreeting!==!1&&m.jsx("div",{className:"mt-5 sm:mt-7 flex justify-center w-full px-2",children:m.jsxs("button",{type:"button",onClick:()=>lt(!0),className:`text-xs sm:text-sm font-sans tracking-wide px-4 sm:px-6 py-2 rounded-2xl sm:rounded-full backdrop-blur-2xl max-w-xl text-center leading-relaxed shadow-lg cursor-pointer transition-all hover:scale-[1.01] ${F?"bg-white/92 text-zinc-900 border border-zinc-300/80 shadow-md hover:bg-white":"bg-[#0a0618]/85 text-zinc-200 border border-white/[0.14] shadow-lg hover:border-violet-400/40"}`,title:"Click to personalize name & daily mantra",children:[Ce(),", ",m.jsx("span",{className:`font-semibold ${F?"text-zinc-950":"text-white"}`,children:s.name}),". •"," ",m.jsxs("span",{className:`italic ${F?"text-zinc-700 font-medium":"text-zinc-300"}`,children:["“",s.motto||"Remember, you are here for you.","”"]})]})}),H&&m.jsxs("button",{type:"button",onClick:()=>W(!1),className:`mt-8 flex items-center gap-2 px-5 py-2.5 rounded-full text-xs transition-all border shadow-xl cursor-pointer ${F?"bg-white/90 text-zinc-800 border-zinc-300/80 hover:bg-white":"cosmic-dock text-zinc-300 hover:text-white border-white/[0.12] hover:border-violet-400/40"}`,children:[m.jsx(gg,{className:"w-3.5 h-3.5 text-amber-400"}),m.jsx("span",{className:"font-display tracking-wider",children:"Tap anywhere to restore controls"})]})]}),ze!=="none"&&!H&&m.jsxs("div",{className:"fixed inset-x-0 bottom-24 z-30 flex justify-center px-4 animate-fadeIn pointer-events-auto",children:[m.jsx("div",{className:"fixed inset-0 -z-10",onClick:()=>We("none")}),ze==="tasks"&&m.jsxs("div",{className:`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${F?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[m.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${F?"border-zinc-200":"border-white/[0.08]"}`,children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(i0,{className:`w-4 h-4 ${F?"text-violet-700":"text-violet-300"}`}),m.jsx("h2",{className:"text-xs font-display uppercase tracking-[0.18em] font-semibold",children:"Tasks for the Day"})]}),m.jsxs("div",{className:"flex items-center gap-1.5",children:[m.jsxs("span",{className:`text-[11px] font-display font-medium px-2.5 py-0.5 rounded-full border tabular-nums ${F?"bg-zinc-100 text-zinc-800 border-zinc-200":"bg-white/[0.06] text-violet-200 border-white/[0.10]"}`,children:[se,"/",e.length," done"]}),m.jsx("button",{type:"button",onClick:()=>{window.confirm("Reset and uncheck all tasks for today?")&&e.forEach(Q=>{Q.completed&&t(Q.id)})},className:`p-1 rounded-md border transition-colors cursor-pointer ${F?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-600":"bg-white/10 hover:bg-white/20 border-white/10 text-zinc-300 hover:text-white"}`,title:"Reset today's tasks","aria-label":"Reset tasks for today",children:m.jsx(Fr,{className:"w-3.5 h-3.5"})}),m.jsx("button",{type:"button",onClick:()=>We("none"),className:"p-1 text-zinc-400 hover:text-white cursor-pointer","aria-label":"Close Tasks Panel",children:m.jsx(ar,{className:"w-3.5 h-3.5"})})]})]}),m.jsxs("form",{onSubmit:ie,className:"flex items-center gap-2 shrink-0",children:[m.jsx("input",{type:"text",placeholder:"Add task for today...",value:Wt,onChange:Q=>zt(Q.target.value),className:"flex-1 cosmic-input rounded-xl px-3.5 py-2 text-xs placeholder-zinc-500",autoFocus:!0}),m.jsx("button",{type:"submit",disabled:!Wt.trim(),className:"w-8 h-8 rounded-xl bg-violet-600 hover:bg-violet-500 text-white disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all shrink-0 cursor-pointer shadow-sm",children:m.jsx(ql,{className:"w-4 h-4"})})]}),m.jsx("div",{className:"max-h-56 overflow-y-auto space-y-1.5 pr-1",children:e.map(Q=>m.jsxs("div",{className:`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs select-none group ${Q.completed?F?"bg-zinc-100/60 border-zinc-200/60 text-zinc-400":"bg-white/[0.015] border-white/[0.04] text-zinc-500":F?"bg-white/80 hover:bg-white border-zinc-200/80 text-zinc-800":"bg-white/[0.035] hover:bg-white/[0.07] border-white/[0.08] hover:border-violet-400/20 text-zinc-200"}`,children:[m.jsxs("div",{className:"flex items-center gap-2.5 truncate flex-1 cursor-pointer pr-2",onClick:()=>t(Q.id),children:[m.jsx("div",{className:`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border transition-all ${Q.completed?"bg-emerald-500 border-emerald-400 text-white shadow-sm":F?"border-zinc-300 group-hover:border-violet-500":"border-white/[0.25] group-hover:border-violet-400"}`,children:Q.completed&&m.jsx(aa,{className:"w-2.5 h-2.5 stroke-[3]"})}),m.jsx("span",{className:`font-sans truncate ${Q.completed?"line-through text-zinc-400":F?"text-zinc-800 font-medium":"text-zinc-200"}`,children:Q.text})]}),m.jsx("button",{type:"button",onClick:()=>o(Q.id),className:"opacity-0 group-hover:opacity-100 text-zinc-400 hover:text-red-400 transition-opacity p-1 cursor-pointer",children:m.jsx(rc,{className:"w-3.5 h-3.5"})})]},Q.id))}),m.jsxs("div",{className:`pt-2.5 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${F?"border-zinc-200 text-zinc-600":"border-white/[0.08] text-zinc-400"}`,children:[m.jsxs("span",{className:"flex items-center gap-1.5",children:[m.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400"}),"Day Progress"]}),m.jsxs("span",{className:`font-display font-medium tabular-nums ${F?"text-zinc-900":"text-zinc-200"}`,children:[Se,"% done"]})]})]}),ze==="habits"&&m.jsxs("div",{className:`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${F?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[m.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${F?"border-zinc-200":"border-white/[0.08]"}`,children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(Qm,{className:`w-4 h-4 ${F?"text-violet-700":"text-violet-300"}`}),m.jsx("h2",{className:"text-xs font-display uppercase tracking-[0.18em] font-semibold",children:"Daily Rhythm Pulse"})]}),m.jsxs("div",{className:"flex items-center gap-1.5",children:[m.jsxs("span",{className:`text-[11px] font-display font-medium px-2.5 py-0.5 rounded-full border tabular-nums ${F?"bg-zinc-100 text-zinc-800 border-zinc-200":"bg-white/[0.06] text-violet-200 border-white/[0.10]"}`,children:[z,"/",l.length," kept"]}),m.jsx("button",{type:"button",onClick:()=>{window.confirm("Reset today's habit checkmarks?")&&l.forEach(Q=>{Q.completed&&d(Q.id)})},className:`p-1 rounded-md border transition-colors cursor-pointer ${F?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-600":"bg-white/10 hover:bg-white/20 border-white/10 text-zinc-300 hover:text-white"}`,title:"Reset today's habits","aria-label":"Reset habits for today",children:m.jsx(Fr,{className:"w-3.5 h-3.5"})}),m.jsx("button",{type:"button",onClick:()=>{const Q=prompt("Add new daily habit:");Q&&p(Q)},className:`p-1 rounded-md border transition-colors cursor-pointer ${F?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/10 hover:bg-white/20 border-white/10 text-white"}`,title:"Add habit","aria-label":"Add new daily habit",children:m.jsx(ql,{className:"w-3.5 h-3.5"})}),m.jsx("button",{type:"button",onClick:()=>We("none"),className:"p-1 text-zinc-400 hover:text-white cursor-pointer","aria-label":"Close Habits Panel",children:m.jsx(ar,{className:"w-3.5 h-3.5"})})]})]}),m.jsx("div",{className:"max-h-56 overflow-y-auto space-y-1.5 pr-1",children:l.map(Q=>m.jsxs("div",{onClick:()=>d(Q.id),className:`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs cursor-pointer select-none group ${Q.completed?F?"bg-zinc-100/60 border-zinc-200/60 text-zinc-400":"bg-white/[0.015] border-white/[0.04] text-zinc-400":F?"bg-white/80 hover:bg-white border-zinc-200/80 text-zinc-800":"bg-white/[0.035] hover:bg-white/[0.07] border-white/[0.08] hover:border-violet-400/20 text-zinc-200"}`,children:[m.jsxs("div",{className:"flex flex-col gap-0.5 truncate pr-2",children:[m.jsx("span",{className:`font-sans truncate ${Q.completed?"line-through text-zinc-400":F?"text-zinc-800 font-medium":"text-zinc-200"}`,children:Q.name}),m.jsx("div",{className:"flex items-center gap-1.5 text-[10px] font-mono",children:Q.streak>0?m.jsxs("span",{className:"text-amber-500 flex items-center gap-0.5 font-medium",children:[m.jsx(dg,{className:"w-3 h-3 fill-amber-500"})," ",Q.streak," day streak"]}):m.jsx("span",{className:F?"text-zinc-500":"text-zinc-400",children:"Ready today"})})]}),m.jsx("div",{className:`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border transition-all ${Q.completed?"bg-emerald-500 border-emerald-400 text-white shadow-sm":F?"border-zinc-300 group-hover:border-violet-500":"border-white/[0.25] group-hover:border-violet-400"}`,children:Q.completed&&m.jsx(aa,{className:"w-2.5 h-2.5 stroke-[3]"})})]},Q.id))}),m.jsxs("div",{className:`pt-2.5 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${F?"border-zinc-200 text-zinc-600":"border-white/[0.08] text-zinc-400"}`,children:[m.jsxs("div",{className:`flex items-center gap-1.5 ${F?"text-zinc-700":"text-zinc-400"}`,children:[m.jsx(ds,{className:`w-3.5 h-3.5 ${F?"text-amber-500":"text-violet-300"}`}),m.jsx("span",{children:"Daily Consistency"})]}),m.jsxs("span",{className:`font-display font-medium tabular-nums ${F?"text-zinc-900":"text-zinc-200"}`,children:[me,"% kept"]})]})]}),ze==="timer"&&m.jsxs("div",{className:`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${F?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[m.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${F?"border-zinc-200":"border-white/[0.08]"}`,children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(Af,{className:`w-4 h-4 ${F?"text-violet-700":"text-violet-300"}`}),m.jsx("h2",{className:"text-xs font-display uppercase tracking-[0.18em] font-semibold",children:"Deep Study Console"})]}),m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("span",{className:`text-[10px] font-display px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${M?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 animate-pulse":F?"bg-zinc-100 text-zinc-600 border border-zinc-200":"bg-white/[0.06] text-zinc-400 border border-white/[0.08]"}`,children:M?"RUNNING":"STOPPED"}),m.jsx("button",{type:"button",onClick:()=>We("none"),className:"p-1 text-zinc-400 hover:text-white",children:m.jsx(ar,{className:"w-3.5 h-3.5"})})]})]}),m.jsxs("div",{className:"text-center py-2",children:[m.jsx("div",{className:`text-5xl font-display font-light tracking-widest leading-none tabular-nums ${F?"text-zinc-900":"text-white"}`,children:Ze(_)}),m.jsxs("p",{className:`text-[10px] font-display tracking-[0.2em] uppercase mt-2 ${F?"text-zinc-500":"text-zinc-400"}`,children:[b," • ",Yt]})]}),m.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[m.jsx("input",{type:"text",value:Yt,onChange:Q=>Lt(Q.target.value),placeholder:"Mode (e.g. Deep Work)",className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"}),m.jsx("input",{type:"text",value:rn,onChange:Q=>{J(Q.target.value),C(Q.target.value)},placeholder:"Subject (e.g. Engineering)",className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"})]}),m.jsxs("div",{className:"flex gap-2",children:[m.jsxs("button",{type:"button",onClick:y,className:`flex-1 py-2.5 rounded-xl font-display text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 border transition-all cursor-pointer ${F?"bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-800":"bg-violet-600 hover:bg-violet-500 text-white border-violet-400/30"}`,children:[M?m.jsx(Or,{className:"w-4 h-4"}):m.jsx(Br,{className:"w-4 h-4 ml-0.5 fill-current"}),m.jsx("span",{children:M?"Pause Focus":"Start Focus"})]}),m.jsx("button",{type:"button",onClick:S,className:`px-3 py-2.5 rounded-xl border transition-colors cursor-pointer ${F?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white border-white/[0.08]"}`,title:"Reset stopwatch",children:m.jsx(Fr,{className:"w-3.5 h-3.5"})})]}),m.jsxs("div",{className:`pt-2.5 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${F?"border-zinc-200 text-zinc-600":"border-white/[0.08] text-zinc-400"}`,children:[m.jsxs("span",{children:["Weekly: ",m.jsxs("strong",{className:`font-display ${F?"text-zinc-900":"text-zinc-200"}`,children:[Te,"h"]})," / 15h"]}),m.jsxs("span",{className:`font-display font-medium tabular-nums ${F?"text-zinc-900":"text-zinc-200"}`,children:[Le,"% quota"]})]})]}),ze==="wellness"&&m.jsxs("div",{className:`w-full max-w-sm p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${F?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[m.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-white/10",children:[m.jsxs("span",{className:"text-xs font-display uppercase tracking-widest font-semibold flex items-center gap-1.5",children:[m.jsx(ds,{className:"w-3.5 h-3.5 text-amber-400"}),"Daily Wellness Pulse"]}),m.jsx("button",{onClick:()=>We("none"),className:"p-1 text-zinc-400 hover:text-white",children:m.jsx(ar,{className:"w-3.5 h-3.5"})})]}),m.jsxs("div",{className:"flex items-center justify-between py-1 text-xs",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(_b,{className:"w-4 h-4 text-sky-400"}),m.jsx("span",{children:"Hydration Target"})]}),m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("button",{type:"button",onClick:()=>P(Q=>Math.max(0,Q-12.5)),className:"w-6 h-6 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center font-bold",children:"-"}),m.jsxs("span",{className:"font-mono font-bold w-12 text-center",children:[Math.round(k/100*8)," / 8"]}),m.jsx("button",{type:"button",onClick:()=>P(Q=>Math.min(100,Q+12.5)),className:"w-6 h-6 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center font-bold",children:"+"})]})]}),m.jsxs("div",{className:"flex items-center justify-between py-1 text-xs",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(Yl,{className:"w-4 h-4 text-violet-400"}),m.jsx("span",{children:"Sleep Duration"})]}),m.jsxs("button",{type:"button",onClick:()=>D(U%12+1),className:"px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 font-mono font-bold text-xs",children:[U," Hours (Click to Cycle)"]})]}),m.jsxs("div",{className:"flex items-center justify-between py-1 text-xs",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(bb,{className:"w-4 h-4 text-amber-400"}),m.jsx("span",{children:"Day Score"})]}),m.jsxs("button",{type:"button",onClick:()=>N(w>=10?1:w+1),className:"px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 font-mono font-bold text-xs text-amber-400",children:[w," / 10 ★"]})]}),m.jsxs("div",{className:`pt-3 mt-1 border-t flex items-center justify-between ${F?"border-zinc-200":"border-white/10"}`,children:[m.jsxs("div",{className:"flex flex-col",children:[m.jsxs("span",{className:"text-[11px] font-medium flex items-center gap-1",children:[m.jsx(Fr,{className:"w-3 h-3 text-violet-400"}),"Day Reset"]}),m.jsxs("span",{className:`text-[9px] font-mono ${F?"text-zinc-500":"text-zinc-400"}`,children:["Active: ",te]})]}),m.jsxs("button",{type:"button",onClick:()=>{window.confirm("Start a fresh day? This will uncheck today's tasks & habits and reset hydration to 0%.")&&$()},className:`px-3 py-1.5 rounded-xl border text-[11px] font-display uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${F?"bg-violet-50 hover:bg-violet-100 text-violet-700 border-violet-200":"bg-violet-600/30 hover:bg-violet-600/50 text-violet-200 border-violet-400/40 hover:border-violet-400"}`,title:"Reset daily progress for a fresh day",children:[m.jsx(Fr,{className:"w-3 h-3"}),m.jsx("span",{children:"Start Fresh Day"})]})]})]})]}),!H&&m.jsx("footer",{className:"relative shrink-0 flex items-center justify-center w-full z-20 pb-2",children:m.jsxs("nav",{"aria-label":"Sanctuary Focus Dock",className:`flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-full backdrop-blur-2xl border shadow-2xl transition-all ${F?"bg-white/85 border-zinc-200/90 text-zinc-800 shadow-[0_15px_40px_rgba(0,0,0,0.1)]":"bg-[#090b16]/80 border-white/[0.12] text-zinc-200 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"}`,children:[m.jsxs("div",{className:`flex items-center rounded-full border transition-all ${M?"bg-emerald-500/20 border-emerald-500/40 text-emerald-300":F?"bg-zinc-100/90 border-zinc-200 text-zinc-800":"bg-white/[0.04] border-white/[0.08] text-zinc-300"}`,children:[m.jsxs("button",{type:"button",onClick:y,className:"pl-3 pr-1.5 py-1.5 flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity",title:M?"Pause focus timer":"Start focus timer",children:[M?m.jsx(Or,{className:"w-3.5 h-3.5 text-emerald-400 animate-pulse"}):m.jsx(Br,{className:"w-3.5 h-3.5 text-zinc-400 fill-current"}),m.jsx("span",{className:"font-mono text-xs font-semibold tabular-nums",children:Ze(_)})]}),m.jsx("button",{type:"button",onClick:()=>We(Q=>Q==="timer"?"none":"timer"),className:`pr-3 pl-1 py-1.5 text-[11px] font-sans border-l transition-colors cursor-pointer ${F?"border-zinc-200 hover:text-black":"border-white/10 hover:text-white"}`,title:"Expand Focus Timer Panel",children:m.jsx("span",{children:rn})})]}),m.jsxs("button",{type:"button",onClick:()=>We(Q=>Q==="tasks"?"none":"tasks"),className:`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-sans transition-all cursor-pointer ${ze==="tasks"?"bg-violet-600 text-white border-violet-400":F?"bg-zinc-100/90 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300 hover:text-white"}`,title:"Daily Tasks",children:[m.jsx(i0,{className:"w-3.5 h-3.5 text-violet-400"}),m.jsx("span",{children:"Tasks"}),m.jsxs("span",{className:`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${F?"bg-zinc-200/90 text-zinc-800":"bg-white/10 text-violet-200"}`,children:[se,"/",e.length]})]}),m.jsxs("button",{type:"button",onClick:()=>We(Q=>Q==="habits"?"none":"habits"),className:`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-sans transition-all cursor-pointer ${ze==="habits"?"bg-violet-600 text-white border-violet-400":F?"bg-zinc-100/90 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300 hover:text-white"}`,title:"Daily Rhythm Habits",children:[m.jsx(Qm,{className:"w-3.5 h-3.5 text-sky-400"}),m.jsx("span",{children:"Rhythm"}),m.jsxs("span",{className:`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${F?"bg-zinc-200/90 text-zinc-800":"bg-white/10 text-sky-200"}`,children:[z,"/",l.length]})]}),m.jsxs("button",{type:"button",onClick:()=>We(Q=>Q==="wellness"?"none":"wellness"),className:`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-sans transition-all cursor-pointer ${ze==="wellness"?"bg-amber-500 text-black border-amber-400":F?"bg-zinc-100/90 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300 hover:text-white"}`,title:"Sleep, Water & Daily Rating",children:[m.jsx(Yl,{className:"w-3.5 h-3.5 text-amber-400"}),m.jsxs("span",{className:"font-mono text-[11px]",children:[U,"h"]}),m.jsx("span",{className:"text-white/20",children:"•"}),m.jsxs("span",{className:"font-mono text-[11px] text-sky-400",children:[Math.round(k/100*8),"/8💧"]})]}),m.jsxs("div",{onClick:()=>ye(!0),className:`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs cursor-pointer group transition-all ${O||j?G==="youtube"?"bg-red-600/30 border-red-500/40 text-red-200":"bg-violet-600/30 border-violet-500/40 text-violet-200":F?"bg-zinc-100/90 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300 hover:text-white"}`,title:"Open Audio Sanctuary",children:[G==="youtube"&&j?m.jsx(to,{className:"w-3.5 h-3.5 text-red-500 animate-pulse"}):m.jsx(ic,{className:`w-3.5 h-3.5 ${O||j?"text-violet-300 animate-pulse":"text-zinc-400"}`}),m.jsx("span",{className:"max-w-[80px] sm:max-w-[120px] truncate text-[11px] font-medium",children:G==="youtube"?Y?Y.title:"YouTube":ut.title}),m.jsx(Vg,{isPlaying:G==="youtube"?j:O,color:G==="youtube"?"#ef4444":F?"#7c3aed":ut.accentColor,className:"w-8 h-2.5",barCount:4}),m.jsx("button",{type:"button",onClick:Q=>{Q.stopPropagation(),G==="youtube"?L():O?X():K(re)},className:"w-5 h-5 rounded-md flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors",title:(G==="youtube"?j:O)?"Pause audio":"Play audio",children:(G==="youtube"?j:O)?m.jsx(Or,{className:"w-2.5 h-2.5 fill-current"}):m.jsx(Br,{className:"w-2.5 h-2.5 fill-current ml-0.5"})})]})]})}),He&&m.jsxs("div",{className:"fixed inset-0 z-50 flex",children:[m.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm",onClick:()=>Ee(!1)}),m.jsxs("aside",{className:`relative z-10 w-80 sm:w-96 max-w-[90vw] h-full backdrop-blur-3xl border-r shadow-2xl p-6 flex flex-col justify-between ${F?"bg-[#faf8f4]/98 border-zinc-200 text-zinc-900":"bg-[#0d0f17]/95 border-white/[0.1] text-white"}`,children:[m.jsxs("div",{className:"space-y-4",children:[m.jsxs("div",{className:`flex items-center justify-between pb-3.5 border-b ${F?"border-zinc-200":"border-white/[0.08]"}`,children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(Jm,{className:`w-4 h-4 ${F?"text-violet-700":"text-violet-300"}`}),m.jsx("h3",{className:`text-xs font-sans uppercase tracking-[0.16em] font-semibold ${F?"text-zinc-900":"text-white"}`,children:"Daily Routine Protocols"})]}),m.jsx("button",{onClick:()=>Ee(!1),className:`transition-colors cursor-pointer ${F?"text-zinc-500 hover:text-black":"text-zinc-400 hover:text-white"}`,children:m.jsx(ar,{className:"w-4 h-4"})})]}),m.jsxs("div",{className:"space-y-2.5 text-xs overflow-y-auto max-h-[58vh] pr-1",children:[u.map(Q=>m.jsxs("div",{className:`p-3.5 rounded-2xl border transition-all relative group ${F?"bg-white/80 border-zinc-200 shadow-sm":"bg-white/[0.03] border-white/[0.08]"}`,children:[m.jsxs("div",{className:"flex items-center justify-between pb-1.5",children:[m.jsxs("span",{className:"font-semibold text-amber-500 flex items-center gap-1.5",children:[m.jsx(Tb,{className:"w-3.5 h-3.5"})," ",Q.title]}),m.jsxs("div",{className:"flex items-center gap-1.5",children:[m.jsx("span",{className:`text-[10px] font-mono ${F?"text-zinc-500":"text-zinc-400"}`,children:Q.timeRange}),u.length>1&&m.jsx("button",{type:"button",onClick:()=>x(Q.id),className:"opacity-0 group-hover:opacity-100 p-1 text-zinc-400 hover:text-red-400 transition-opacity cursor-pointer",title:"Delete protocol block",children:m.jsx(rc,{className:"w-3 h-3"})})]})]}),m.jsx("p",{className:`text-[11px] leading-relaxed ${F?"text-zinc-700":"text-zinc-300"}`,children:Q.description})]},Q.id)),bt?m.jsxs("form",{onSubmit:Q=>{Q.preventDefault(),Et.trim()&&E.trim()&&(f({title:Et.trim(),timeRange:rt.trim()||"Flexible",description:E.trim(),iconType:"custom"}),qe(""),I(""),ae(""),Ue(!1))},className:`p-3 rounded-2xl border space-y-2 ${F?"bg-white border-zinc-300 shadow-sm":"bg-white/[0.05] border-white/[0.12]"}`,children:[m.jsx("input",{type:"text",placeholder:"Protocol title (e.g. Creative Sprint)",value:Et,onChange:Q=>qe(Q.target.value),className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs",required:!0}),m.jsx("input",{type:"text",placeholder:"Time range (e.g. 14:00 – 16:00)",value:rt,onChange:Q=>I(Q.target.value),className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"}),m.jsx("textarea",{placeholder:"Protocol description / intentions...",value:E,onChange:Q=>ae(Q.target.value),className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs resize-none h-16",required:!0}),m.jsxs("div",{className:"flex items-center justify-end gap-1.5",children:[m.jsx("button",{type:"button",onClick:()=>Ue(!1),className:`px-2.5 py-1 rounded-lg text-[11px] ${F?"text-zinc-600 hover:text-black":"text-zinc-400 hover:text-white"}`,children:"Cancel"}),m.jsx("button",{type:"submit",className:"px-3 py-1 rounded-lg text-[11px] bg-violet-600 hover:bg-violet-500 text-white font-medium cursor-pointer",children:"Add Block"})]})]}):m.jsxs("button",{type:"button",onClick:()=>Ue(!0),className:`w-full py-2 rounded-xl border border-dashed flex items-center justify-center gap-1.5 text-[11px] transition-all cursor-pointer ${F?"border-zinc-300 hover:border-zinc-400 text-zinc-600 hover:text-zinc-900 bg-white/40":"border-white/10 hover:border-white/20 text-zinc-400 hover:text-white bg-white/[0.01]"}`,children:[m.jsx(ql,{className:"w-3 h-3"}),m.jsx("span",{children:"Add Custom Protocol Block"})]})]})]}),m.jsxs("div",{className:"flex items-center gap-2 pt-2",children:[m.jsx("button",{type:"button",onClick:v,className:`px-3 py-2.5 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${F?"border-zinc-200 text-zinc-600 hover:bg-zinc-100":"border-white/10 text-zinc-400 hover:bg-white/[0.05] hover:text-white"}`,title:"Reset to default protocols",children:"Reset"}),m.jsx("button",{type:"button",onClick:()=>Ee(!1),className:`flex-1 py-2.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${F?"bg-zinc-900 hover:bg-zinc-800 text-white":"bg-white/[0.06] hover:bg-white/[0.12] text-white"}`,children:"Close Routine"})]})]})]}),m.jsx(zb,{isOpen:Ie,onClose:()=>lt(!1)}),m.jsx(Fb,{isOpen:ve,onClose:()=>Me(!1)}),m.jsx(kb,{isOpen:Re,onClose:()=>ye(!1)})]})},Bb=()=>{const{wallpaperTheme:s,appTheme:e}=Vr(),t=e==="light";return m.jsxs("div",{"data-theme":s,className:`theme-${e} relative w-screen h-screen max-h-screen overflow-hidden text-[var(--text-primary)] font-sans transition-colors duration-200 ${t?"bg-[#f7f5f0]/95":"bg-[#060814]"}`,children:[m.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--card-bg-elevated)] focus:text-[var(--text-primary)] focus:rounded-xl focus:border focus:border-[var(--card-border)] focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-violet-400 font-sans text-xs font-semibold",children:"Skip to main content"}),m.jsx(Bv,{}),m.jsx(ob,{}),m.jsx(Nb,{}),m.jsx("div",{className:"pointer-events-none fixed inset-0 z-20 dreamy-grain opacity-40 mix-blend-overlay"}),m.jsx("main",{id:"main-content",className:"w-full h-full overflow-y-auto lg:overflow-hidden relative z-10",children:m.jsx(Ob,{})})]})};function Gb(){return m.jsx(Ov,{children:m.jsx(Bb,{})})}const r0=document.getElementById("root");r0&&Iv.createRoot(r0).render(m.jsx(Av.StrictMode,{children:m.jsx(Gb,{})}));
