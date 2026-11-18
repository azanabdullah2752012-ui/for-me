var Sv=Object.defineProperty;var bv=(s,e,t)=>e in s?Sv(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var or=(s,e,t)=>bv(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function a0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Bu={exports:{}},qa={},Hu={exports:{}},Rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function Mv(){if(Jp)return Rt;Jp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,A={};function y(P,K,be){this.props=P,this.context=K,this.refs=A,this.updater=be||b}y.prototype.isReactComponent={},y.prototype.setState=function(P,K){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,K,"setState")},y.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function S(){}S.prototype=y.prototype;function R(P,K,be){this.props=P,this.context=K,this.refs=A,this.updater=be||b}var O=R.prototype=new S;O.constructor=R,w(O,y.prototype),O.isPureReactComponent=!0;var D=Array.isArray,F=Object.prototype.hasOwnProperty,L={current:null},M={key:!0,ref:!0,__self:!0,__source:!0};function N(P,K,be){var z,xe={},Se=null,Ne=null;if(K!=null)for(z in K.ref!==void 0&&(Ne=K.ref),K.key!==void 0&&(Se=""+K.key),K)F.call(K,z)&&!M.hasOwnProperty(z)&&(xe[z]=K[z]);var ve=arguments.length-2;if(ve===1)xe.children=be;else if(1<ve){for(var Ue=Array(ve),at=0;at<ve;at++)Ue[at]=arguments[at+2];xe.children=Ue}if(P&&P.defaultProps)for(z in ve=P.defaultProps,ve)xe[z]===void 0&&(xe[z]=ve[z]);return{$$typeof:s,type:P,key:Se,ref:Ne,props:xe,_owner:L.current}}function J(P,K){return{$$typeof:s,type:P.type,key:K,ref:P.ref,props:P.props,_owner:P._owner}}function $(P){return typeof P=="object"&&P!==null&&P.$$typeof===s}function j(P){var K={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(be){return K[be]})}var B=/\/+/g;function k(P,K){return typeof P=="object"&&P!==null&&P.key!=null?j(""+P.key):K.toString(36)}function V(P,K,be,z,xe){var Se=typeof P;(Se==="undefined"||Se==="boolean")&&(P=null);var Ne=!1;if(P===null)Ne=!0;else switch(Se){case"string":case"number":Ne=!0;break;case"object":switch(P.$$typeof){case s:case e:Ne=!0}}if(Ne)return Ne=P,xe=xe(Ne),P=z===""?"."+k(Ne,0):z,D(xe)?(be="",P!=null&&(be=P.replace(B,"$&/")+"/"),V(xe,K,be,"",function(at){return at})):xe!=null&&($(xe)&&(xe=J(xe,be+(!xe.key||Ne&&Ne.key===xe.key?"":(""+xe.key).replace(B,"$&/")+"/")+P)),K.push(xe)),1;if(Ne=0,z=z===""?".":z+":",D(P))for(var ve=0;ve<P.length;ve++){Se=P[ve];var Ue=z+k(Se,ve);Ne+=V(Se,K,be,Ue,xe)}else if(Ue=_(P),typeof Ue=="function")for(P=Ue.call(P),ve=0;!(Se=P.next()).done;)Se=Se.value,Ue=z+k(Se,ve++),Ne+=V(Se,K,be,Ue,xe);else if(Se==="object")throw K=String(P),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return Ne}function H(P,K,be){if(P==null)return P;var z=[],xe=0;return V(P,z,"","",function(Se){return K.call(be,Se,xe++)}),z}function se(P){if(P._status===-1){var K=P._result;K=K(),K.then(function(be){(P._status===0||P._status===-1)&&(P._status=1,P._result=be)},function(be){(P._status===0||P._status===-1)&&(P._status=2,P._result=be)}),P._status===-1&&(P._status=0,P._result=K)}if(P._status===1)return P._result.default;throw P._result}var ee={current:null},Y={transition:null},G={ReactCurrentDispatcher:ee,ReactCurrentBatchConfig:Y,ReactCurrentOwner:L};function X(){throw Error("act(...) is not supported in production builds of React.")}return Rt.Children={map:H,forEach:function(P,K,be){H(P,function(){K.apply(this,arguments)},be)},count:function(P){var K=0;return H(P,function(){K++}),K},toArray:function(P){return H(P,function(K){return K})||[]},only:function(P){if(!$(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},Rt.Component=y,Rt.Fragment=t,Rt.Profiler=o,Rt.PureComponent=R,Rt.StrictMode=r,Rt.Suspense=d,Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,Rt.act=X,Rt.cloneElement=function(P,K,be){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var z=w({},P.props),xe=P.key,Se=P.ref,Ne=P._owner;if(K!=null){if(K.ref!==void 0&&(Se=K.ref,Ne=L.current),K.key!==void 0&&(xe=""+K.key),P.type&&P.type.defaultProps)var ve=P.type.defaultProps;for(Ue in K)F.call(K,Ue)&&!M.hasOwnProperty(Ue)&&(z[Ue]=K[Ue]===void 0&&ve!==void 0?ve[Ue]:K[Ue])}var Ue=arguments.length-2;if(Ue===1)z.children=be;else if(1<Ue){ve=Array(Ue);for(var at=0;at<Ue;at++)ve[at]=arguments[at+2];z.children=ve}return{$$typeof:s,type:P.type,key:xe,ref:Se,props:z,_owner:Ne}},Rt.createContext=function(P){return P={$$typeof:u,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:l,_context:P},P.Consumer=P},Rt.createElement=N,Rt.createFactory=function(P){var K=N.bind(null,P);return K.type=P,K},Rt.createRef=function(){return{current:null}},Rt.forwardRef=function(P){return{$$typeof:h,render:P}},Rt.isValidElement=$,Rt.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:se}},Rt.memo=function(P,K){return{$$typeof:p,type:P,compare:K===void 0?null:K}},Rt.startTransition=function(P){var K=Y.transition;Y.transition={};try{P()}finally{Y.transition=K}},Rt.unstable_act=X,Rt.useCallback=function(P,K){return ee.current.useCallback(P,K)},Rt.useContext=function(P){return ee.current.useContext(P)},Rt.useDebugValue=function(){},Rt.useDeferredValue=function(P){return ee.current.useDeferredValue(P)},Rt.useEffect=function(P,K){return ee.current.useEffect(P,K)},Rt.useId=function(){return ee.current.useId()},Rt.useImperativeHandle=function(P,K,be){return ee.current.useImperativeHandle(P,K,be)},Rt.useInsertionEffect=function(P,K){return ee.current.useInsertionEffect(P,K)},Rt.useLayoutEffect=function(P,K){return ee.current.useLayoutEffect(P,K)},Rt.useMemo=function(P,K){return ee.current.useMemo(P,K)},Rt.useReducer=function(P,K,be){return ee.current.useReducer(P,K,be)},Rt.useRef=function(P){return ee.current.useRef(P)},Rt.useState=function(P){return ee.current.useState(P)},Rt.useSyncExternalStore=function(P,K,be){return ee.current.useSyncExternalStore(P,K,be)},Rt.useTransition=function(){return ee.current.useTransition()},Rt.version="18.3.1",Rt}var Qp;function pf(){return Qp||(Qp=1,Hu.exports=Mv()),Hu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function wv(){if(em)return qa;em=1;var s=pf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(h,d,p){var g,v={},_=null,b=null;p!==void 0&&(_=""+p),d.key!==void 0&&(_=""+d.key),d.ref!==void 0&&(b=d.ref);for(g in d)r.call(d,g)&&!l.hasOwnProperty(g)&&(v[g]=d[g]);if(h&&h.defaultProps)for(g in d=h.defaultProps,d)v[g]===void 0&&(v[g]=d[g]);return{$$typeof:e,type:h,key:_,ref:b,props:v,_owner:o.current}}return qa.Fragment=t,qa.jsx=u,qa.jsxs=u,qa}var tm;function Ev(){return tm||(tm=1,Bu.exports=wv()),Bu.exports}var m=Ev(),Me=pf();const Tv=a0(Me);var vl={},Gu={exports:{}},ti={},Vu={exports:{}},Wu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm;function Av(){return nm||(nm=1,(function(s){function e(Y,G){var X=Y.length;Y.push(G);e:for(;0<X;){var P=X-1>>>1,K=Y[P];if(0<o(K,G))Y[P]=G,Y[X]=K,X=P;else break e}}function t(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var G=Y[0],X=Y.pop();if(X!==G){Y[0]=X;e:for(var P=0,K=Y.length,be=K>>>1;P<be;){var z=2*(P+1)-1,xe=Y[z],Se=z+1,Ne=Y[Se];if(0>o(xe,X))Se<K&&0>o(Ne,xe)?(Y[P]=Ne,Y[Se]=X,P=Se):(Y[P]=xe,Y[z]=X,P=z);else if(Se<K&&0>o(Ne,X))Y[P]=Ne,Y[Se]=X,P=Se;else break e}}return G}function o(Y,G){var X=Y.sortIndex-G.sortIndex;return X!==0?X:Y.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,h=u.now();s.unstable_now=function(){return u.now()-h}}var d=[],p=[],g=1,v=null,_=3,b=!1,w=!1,A=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function O(Y){for(var G=t(p);G!==null;){if(G.callback===null)r(p);else if(G.startTime<=Y)r(p),G.sortIndex=G.expirationTime,e(d,G);else break;G=t(p)}}function D(Y){if(A=!1,O(Y),!w)if(t(d)!==null)w=!0,se(F);else{var G=t(p);G!==null&&ee(D,G.startTime-Y)}}function F(Y,G){w=!1,A&&(A=!1,S(N),N=-1),b=!0;var X=_;try{for(O(G),v=t(d);v!==null&&(!(v.expirationTime>G)||Y&&!j());){var P=v.callback;if(typeof P=="function"){v.callback=null,_=v.priorityLevel;var K=P(v.expirationTime<=G);G=s.unstable_now(),typeof K=="function"?v.callback=K:v===t(d)&&r(d),O(G)}else r(d);v=t(d)}if(v!==null)var be=!0;else{var z=t(p);z!==null&&ee(D,z.startTime-G),be=!1}return be}finally{v=null,_=X,b=!1}}var L=!1,M=null,N=-1,J=5,$=-1;function j(){return!(s.unstable_now()-$<J)}function B(){if(M!==null){var Y=s.unstable_now();$=Y;var G=!0;try{G=M(!0,Y)}finally{G?k():(L=!1,M=null)}}else L=!1}var k;if(typeof R=="function")k=function(){R(B)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,H=V.port2;V.port1.onmessage=B,k=function(){H.postMessage(null)}}else k=function(){y(B,0)};function se(Y){M=Y,L||(L=!0,k())}function ee(Y,G){N=y(function(){Y(s.unstable_now())},G)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Y){Y.callback=null},s.unstable_continueExecution=function(){w||b||(w=!0,se(F))},s.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<Y?Math.floor(1e3/Y):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function(Y){switch(_){case 1:case 2:case 3:var G=3;break;default:G=_}var X=_;_=G;try{return Y()}finally{_=X}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Y,G){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var X=_;_=Y;try{return G()}finally{_=X}},s.unstable_scheduleCallback=function(Y,G,X){var P=s.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?P+X:P):X=P,Y){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=X+K,Y={id:g++,callback:G,priorityLevel:Y,startTime:X,expirationTime:K,sortIndex:-1},X>P?(Y.sortIndex=X,e(p,Y),t(d)===null&&Y===t(p)&&(A?(S(N),N=-1):A=!0,ee(D,X-P))):(Y.sortIndex=K,e(d,Y),w||b||(w=!0,se(F))),Y},s.unstable_shouldYield=j,s.unstable_wrapCallback=function(Y){var G=_;return function(){var X=_;_=G;try{return Y.apply(this,arguments)}finally{_=X}}}})(Wu)),Wu}var im;function Cv(){return im||(im=1,Vu.exports=Av()),Vu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function Rv(){if(rm)return ti;rm=1;var s=pf(),e=Cv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function _(n){return d.call(v,n)?!0:d.call(g,n)?!1:p.test(n)?v[n]=!0:(g[n]=!0,!1)}function b(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,a,c){if(i===null||typeof i>"u"||b(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(n,i,a,c,f,x,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=x,this.removeEmptyString=T}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new A(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(S,R);y[i]=new A(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(S,R);y[i]=new A(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(S,R);y[i]=new A(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function O(n,i,a,c){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,f,c)&&(a=null),c||f===null?_(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var D=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),L=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),j=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),ee=Symbol.for("react.offscreen"),Y=Symbol.iterator;function G(n){return n===null||typeof n!="object"?null:(n=Y&&n[Y]||n["@@iterator"],typeof n=="function"?n:null)}var X=Object.assign,P;function K(n){if(P===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);P=i&&i[1]||""}return`
`+P+n}var be=!1;function z(n,i){if(!n||be)return"";be=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(he){var c=he}Reflect.construct(n,[],i)}else{try{i.call()}catch(he){c=he}n.call(i.prototype)}else{try{throw Error()}catch(he){c=he}n()}}catch(he){if(he&&c&&typeof he.stack=="string"){for(var f=he.stack.split(`
`),x=c.stack.split(`
`),T=f.length-1,W=x.length-1;1<=T&&0<=W&&f[T]!==x[W];)W--;for(;1<=T&&0<=W;T--,W--)if(f[T]!==x[W]){if(T!==1||W!==1)do if(T--,W--,0>W||f[T]!==x[W]){var Z=`
`+f[T].replace(" at new "," at ");return n.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",n.displayName)),Z}while(1<=T&&0<=W);break}}}finally{be=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?K(n):""}function xe(n){switch(n.tag){case 5:return K(n.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return n=z(n.type,!1),n;case 11:return n=z(n.type.render,!1),n;case 1:return n=z(n.type,!0),n;default:return""}}function Se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case M:return"Fragment";case L:return"Portal";case J:return"Profiler";case N:return"StrictMode";case k:return"Suspense";case V:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case j:return(n.displayName||"Context")+".Consumer";case $:return(n._context.displayName||"Context")+".Provider";case B:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case H:return i=n.displayName||null,i!==null?i:Se(n.type)||"Memo";case se:i=n._payload,n=n._init;try{return Se(n(i))}catch{}}return null}function Ne(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===N?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ve(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function at(n){var i=Ue(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,x=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(T){c=""+T,x.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Be(n){n._valueTracker||(n._valueTracker=at(n))}function we(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ue(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Ie(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function He(n,i){var a=i.checked;return X({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function xt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=ve(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function _t(n,i){i=i.checked,i!=null&&O(n,"checked",i,!1)}function Et(n,i){_t(n,i);var a=ve(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?rn(n,i.type,a):i.hasOwnProperty("defaultValue")&&rn(n,i.type,ve(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ft(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function rn(n,i,a){(i!=="number"||Ie(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Pt=Array.isArray;function Kt(n,i,a,c){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&c&&(n[a].defaultSelected=!0)}else{for(a=""+ve(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function Gt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return X({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function on(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Pt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:ve(a)}}function Q(n,i){var a=ve(i.value),c=ve(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function en(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Dt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Dt(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var fe,Mt=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(fe=fe||document.createElement("div"),fe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=fe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function qe(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var ot={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},I=["Webkit","ms","Moz","O"];Object.keys(ot).forEach(function(n){I.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ot[i]=ot[n]})});function E(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||ot.hasOwnProperty(n)&&ot[n]?(""+i).trim():i+"px"}function ne(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=E(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,f):n[a]=f}}var Ce=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(n,i){if(i){if(Ce[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ke(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oe=null;function pe(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var me=null,ge=null,U=null;function ie(n){if(n=Ia(n)){if(typeof me!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Lo(i),me(n.stateNode,n.type,i))}}function re(n){ge?U?U.push(n):U=[n]:ge=n}function Ee(){if(ge){var n=ge,i=U;if(U=ge=null,ie(n),i)for(n=0;n<i.length;n++)ie(i[n])}}function Ae(n,i){return n(i)}function Pe(){}var Xe=!1;function ft(n,i,a){if(Xe)return n(i,a);Xe=!0;try{return Ae(n,i,a)}finally{Xe=!1,(ge!==null||U!==null)&&(Pe(),Ee())}}function Te(n,i){var a=n.stateNode;if(a===null)return null;var c=Lo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Ze=!1;if(h)try{var ct={};Object.defineProperty(ct,"passive",{get:function(){Ze=!0}}),window.addEventListener("test",ct,ct),window.removeEventListener("test",ct,ct)}catch{Ze=!1}function Fe(n,i,a,c,f,x,T,W,Z){var he=Array.prototype.slice.call(arguments,3);try{i.apply(a,he)}catch(Le){this.onError(Le)}}var ht=!1,pt=null,_e=!1,Ke=null,Ve={onError:function(n){ht=!0,pt=n}};function Je(n,i,a,c,f,x,T,W,Z){ht=!1,pt=null,Fe.apply(Ve,arguments)}function Lt(n,i,a,c,f,x,T,W,Z){if(Je.apply(this,arguments),ht){if(ht){var he=pt;ht=!1,pt=null}else throw Error(t(198));_e||(_e=!0,Ke=he)}}function St(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function $t(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Re(n){if(St(n)!==n)throw Error(t(188))}function kn(n){var i=n.alternate;if(!i){if(i=St(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var f=a.return;if(f===null)break;var x=f.alternate;if(x===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===x.child){for(x=f.child;x;){if(x===a)return Re(f),n;if(x===c)return Re(f),i;x=x.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=x;else{for(var T=!1,W=f.child;W;){if(W===a){T=!0,a=f,c=x;break}if(W===c){T=!0,c=f,a=x;break}W=W.sibling}if(!T){for(W=x.child;W;){if(W===a){T=!0,a=x,c=f;break}if(W===c){T=!0,c=x,a=f;break}W=W.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function pn(n){return n=kn(n),n!==null?Fn(n):null}function Fn(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Fn(n);if(i!==null)return i;n=n.sibling}return null}var ki=e.unstable_scheduleCallback,xr=e.unstable_cancelCallback,Ji=e.unstable_shouldYield,Ms=e.unstable_requestPaint,Jt=e.unstable_now,ws=e.unstable_getCurrentPriorityLevel,Jr=e.unstable_ImmediatePriority,Es=e.unstable_UserBlockingPriority,vr=e.unstable_NormalPriority,Ts=e.unstable_LowPriority,C=e.unstable_IdlePriority,q=null,ce=null;function oe(n){if(ce&&typeof ce.onCommitFiberRoot=="function")try{ce.onCommitFiberRoot(q,n,void 0,(n.current.flags&128)===128)}catch{}}var ae=Math.clz32?Math.clz32:We,je=Math.log,et=Math.LN2;function We(n){return n>>>=0,n===0?32:31-(je(n)/et|0)|0}var $e=64,nt=4194304;function vt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Tt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,f=n.suspendedLanes,x=n.pingedLanes,T=a&268435455;if(T!==0){var W=T&~f;W!==0?c=vt(W):(x&=T,x!==0&&(c=vt(x)))}else T=a&~f,T!==0?c=vt(T):x!==0&&(c=vt(x));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,x=i&-i,f>=x||f===16&&(x&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-ae(i),f=1<<a,c|=n[a],i&=~f;return c}function it(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ct(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,x=n.pendingLanes;0<x;){var T=31-ae(x),W=1<<T,Z=f[T];Z===-1?((W&a)===0||(W&c)!==0)&&(f[T]=it(W,i)):Z<=i&&(n.expiredLanes|=W),x&=~W}}function sn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Yt(){var n=$e;return $e<<=1,($e&4194240)===0&&($e=64),n}function jt(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function fn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ae(i),n[i]=a}function rt(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-ae(a),x=1<<f;i[f]=0,c[f]=-1,n[f]=-1,a&=~x}}function yn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-ae(a),f=1<<c;f&i|n[c]&i&&(n[c]|=i),a&=~f}}var ut=0;function Fi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Sn,_r,yi,zi,It,mn=!1,zn=[],Vt=null,Zt=null,Tn=null,yr=new Map,_a=new Map,Sr=[],Vg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uf(n,i){switch(n){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Zt=null;break;case"mouseover":case"mouseout":Tn=null;break;case"pointerover":case"pointerout":yr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":_a.delete(i.pointerId)}}function ya(n,i,a,c,f,x){return n===null||n.nativeEvent!==x?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:x,targetContainers:[f]},i!==null&&(i=Ia(i),i!==null&&_r(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function Wg(n,i,a,c,f){switch(i){case"focusin":return Vt=ya(Vt,n,i,a,c,f),!0;case"dragenter":return Zt=ya(Zt,n,i,a,c,f),!0;case"mouseover":return Tn=ya(Tn,n,i,a,c,f),!0;case"pointerover":var x=f.pointerId;return yr.set(x,ya(yr.get(x)||null,n,i,a,c,f)),!0;case"gotpointercapture":return x=f.pointerId,_a.set(x,ya(_a.get(x)||null,n,i,a,c,f)),!0}return!1}function kf(n){var i=Qr(n.target);if(i!==null){var a=St(i);if(a!==null){if(i=a.tag,i===13){if(i=$t(a),i!==null){n.blockedOn=i,It(n.priority,function(){yi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function _o(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=hc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Oe=c,a.target.dispatchEvent(c),Oe=null}else return i=Ia(a),i!==null&&_r(i),n.blockedOn=a,!1;i.shift()}return!0}function Ff(n,i,a){_o(n)&&a.delete(i)}function jg(){mn=!1,Vt!==null&&_o(Vt)&&(Vt=null),Zt!==null&&_o(Zt)&&(Zt=null),Tn!==null&&_o(Tn)&&(Tn=null),yr.forEach(Ff),_a.forEach(Ff)}function Sa(n,i){n.blockedOn===i&&(n.blockedOn=null,mn||(mn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,jg)))}function ba(n){function i(f){return Sa(f,n)}if(0<zn.length){Sa(zn[0],n);for(var a=1;a<zn.length;a++){var c=zn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Vt!==null&&Sa(Vt,n),Zt!==null&&Sa(Zt,n),Tn!==null&&Sa(Tn,n),yr.forEach(i),_a.forEach(i),a=0;a<Sr.length;a++)c=Sr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Sr.length&&(a=Sr[0],a.blockedOn===null);)kf(a),a.blockedOn===null&&Sr.shift()}var As=D.ReactCurrentBatchConfig,yo=!0;function Xg(n,i,a,c){var f=ut,x=As.transition;As.transition=null;try{ut=1,fc(n,i,a,c)}finally{ut=f,As.transition=x}}function $g(n,i,a,c){var f=ut,x=As.transition;As.transition=null;try{ut=4,fc(n,i,a,c)}finally{ut=f,As.transition=x}}function fc(n,i,a,c){if(yo){var f=hc(n,i,a,c);if(f===null)Nc(n,i,c,So,a),Uf(n,c);else if(Wg(f,n,i,a,c))c.stopPropagation();else if(Uf(n,c),i&4&&-1<Vg.indexOf(n)){for(;f!==null;){var x=Ia(f);if(x!==null&&Sn(x),x=hc(n,i,a,c),x===null&&Nc(n,i,c,So,a),x===f)break;f=x}f!==null&&c.stopPropagation()}else Nc(n,i,c,null,a)}}var So=null;function hc(n,i,a,c){if(So=null,n=pe(c),n=Qr(n),n!==null)if(i=St(n),i===null)n=null;else if(a=i.tag,a===13){if(n=$t(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return So=n,null}function zf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ws()){case Jr:return 1;case Es:return 4;case vr:case Ts:return 16;case C:return 536870912;default:return 16}default:return 16}}var br=null,pc=null,bo=null;function Of(){if(bo)return bo;var n,i=pc,a=i.length,c,f="value"in br?br.value:br.textContent,x=f.length;for(n=0;n<a&&i[n]===f[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===f[x-c];c++);return bo=f.slice(n,1<c?1-c:void 0)}function Mo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function wo(){return!0}function Bf(){return!1}function ri(n){function i(a,c,f,x,T){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=x,this.target=T,this.currentTarget=null;for(var W in n)n.hasOwnProperty(W)&&(a=n[W],this[W]=a?a(x):x[W]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?wo:Bf,this.isPropagationStopped=Bf,this}return X(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=wo)},persist:function(){},isPersistent:wo}),i}var Cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mc=ri(Cs),Ma=X({},Cs,{view:0,detail:0}),Yg=ri(Ma),gc,xc,wa,Eo=X({},Ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_c,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==wa&&(wa&&n.type==="mousemove"?(gc=n.screenX-wa.screenX,xc=n.screenY-wa.screenY):xc=gc=0,wa=n),gc)},movementY:function(n){return"movementY"in n?n.movementY:xc}}),Hf=ri(Eo),qg=X({},Eo,{dataTransfer:0}),Kg=ri(qg),Zg=X({},Ma,{relatedTarget:0}),vc=ri(Zg),Jg=X({},Cs,{animationName:0,elapsedTime:0,pseudoElement:0}),Qg=ri(Jg),ex=X({},Cs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),tx=ri(ex),nx=X({},Cs,{data:0}),Gf=ri(nx),ix={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ax(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=sx[n])?!!i[n]:!1}function _c(){return ax}var ox=X({},Ma,{key:function(n){if(n.key){var i=ix[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Mo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?rx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_c,charCode:function(n){return n.type==="keypress"?Mo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Mo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),lx=ri(ox),cx=X({},Eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vf=ri(cx),ux=X({},Ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_c}),dx=ri(ux),fx=X({},Cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),hx=ri(fx),px=X({},Eo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),mx=ri(px),gx=[9,13,27,32],yc=h&&"CompositionEvent"in window,Ea=null;h&&"documentMode"in document&&(Ea=document.documentMode);var xx=h&&"TextEvent"in window&&!Ea,Wf=h&&(!yc||Ea&&8<Ea&&11>=Ea),jf=" ",Xf=!1;function $f(n,i){switch(n){case"keyup":return gx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Rs=!1;function vx(n,i){switch(n){case"compositionend":return Yf(i);case"keypress":return i.which!==32?null:(Xf=!0,jf);case"textInput":return n=i.data,n===jf&&Xf?null:n;default:return null}}function _x(n,i){if(Rs)return n==="compositionend"||!yc&&$f(n,i)?(n=Of(),bo=pc=br=null,Rs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Wf&&i.locale!=="ko"?null:i.data;default:return null}}var yx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!yx[n.type]:i==="textarea"}function Kf(n,i,a,c){re(c),i=No(i,"onChange"),0<i.length&&(a=new mc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Ta=null,Aa=null;function Sx(n){ph(n,0)}function To(n){var i=Is(n);if(we(i))return n}function bx(n,i){if(n==="change")return i}var Zf=!1;if(h){var Sc;if(h){var bc="oninput"in document;if(!bc){var Jf=document.createElement("div");Jf.setAttribute("oninput","return;"),bc=typeof Jf.oninput=="function"}Sc=bc}else Sc=!1;Zf=Sc&&(!document.documentMode||9<document.documentMode)}function Qf(){Ta&&(Ta.detachEvent("onpropertychange",eh),Aa=Ta=null)}function eh(n){if(n.propertyName==="value"&&To(Aa)){var i=[];Kf(i,Aa,n,pe(n)),ft(Sx,i)}}function Mx(n,i,a){n==="focusin"?(Qf(),Ta=i,Aa=a,Ta.attachEvent("onpropertychange",eh)):n==="focusout"&&Qf()}function wx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return To(Aa)}function Ex(n,i){if(n==="click")return To(i)}function Tx(n,i){if(n==="input"||n==="change")return To(i)}function Ax(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Si=typeof Object.is=="function"?Object.is:Ax;function Ca(n,i){if(Si(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!d.call(i,f)||!Si(n[f],i[f]))return!1}return!0}function th(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function nh(n,i){var a=th(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=th(a)}}function ih(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?ih(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function rh(){for(var n=window,i=Ie();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Ie(n.document)}return i}function Mc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Cx(n){var i=rh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&ih(a.ownerDocument.documentElement,a)){if(c!==null&&Mc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,x=Math.min(c.start,f);c=c.end===void 0?x:Math.min(c.end,f),!n.extend&&x>c&&(f=c,c=x,x=f),f=nh(a,x);var T=nh(a,c);f&&T&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),x>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Rx=h&&"documentMode"in document&&11>=document.documentMode,Ns=null,wc=null,Ra=null,Ec=!1;function sh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ec||Ns==null||Ns!==Ie(c)||(c=Ns,"selectionStart"in c&&Mc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ra&&Ca(Ra,c)||(Ra=c,c=No(wc,"onSelect"),0<c.length&&(i=new mc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ns)))}function Ao(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ps={animationend:Ao("Animation","AnimationEnd"),animationiteration:Ao("Animation","AnimationIteration"),animationstart:Ao("Animation","AnimationStart"),transitionend:Ao("Transition","TransitionEnd")},Tc={},ah={};h&&(ah=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function Co(n){if(Tc[n])return Tc[n];if(!Ps[n])return n;var i=Ps[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in ah)return Tc[n]=i[a];return n}var oh=Co("animationend"),lh=Co("animationiteration"),ch=Co("animationstart"),uh=Co("transitionend"),dh=new Map,fh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(n,i){dh.set(n,i),l(i,[n])}for(var Ac=0;Ac<fh.length;Ac++){var Cc=fh[Ac],Nx=Cc.toLowerCase(),Px=Cc[0].toUpperCase()+Cc.slice(1);Mr(Nx,"on"+Px)}Mr(oh,"onAnimationEnd"),Mr(lh,"onAnimationIteration"),Mr(ch,"onAnimationStart"),Mr("dblclick","onDoubleClick"),Mr("focusin","onFocus"),Mr("focusout","onBlur"),Mr(uh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Na));function hh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Lt(c,i,void 0,n),n.currentTarget=null}function ph(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],f=c.event;c=c.listeners;e:{var x=void 0;if(i)for(var T=c.length-1;0<=T;T--){var W=c[T],Z=W.instance,he=W.currentTarget;if(W=W.listener,Z!==x&&f.isPropagationStopped())break e;hh(f,W,he),x=Z}else for(T=0;T<c.length;T++){if(W=c[T],Z=W.instance,he=W.currentTarget,W=W.listener,Z!==x&&f.isPropagationStopped())break e;hh(f,W,he),x=Z}}}if(_e)throw n=Ke,_e=!1,Ke=null,n}function tn(n,i){var a=i[kc];a===void 0&&(a=i[kc]=new Set);var c=n+"__bubble";a.has(c)||(mh(i,n,2,!1),a.add(c))}function Rc(n,i,a){var c=0;i&&(c|=4),mh(a,n,c,i)}var Ro="_reactListening"+Math.random().toString(36).slice(2);function Pa(n){if(!n[Ro]){n[Ro]=!0,r.forEach(function(a){a!=="selectionchange"&&(Dx.has(a)||Rc(a,!1,n),Rc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ro]||(i[Ro]=!0,Rc("selectionchange",!1,i))}}function mh(n,i,a,c){switch(zf(i)){case 1:var f=Xg;break;case 4:f=$g;break;default:f=fc}a=f.bind(null,i,a,n),f=void 0,!Ze||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function Nc(n,i,a,c,f){var x=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var W=c.stateNode.containerInfo;if(W===f||W.nodeType===8&&W.parentNode===f)break;if(T===4)for(T=c.return;T!==null;){var Z=T.tag;if((Z===3||Z===4)&&(Z=T.stateNode.containerInfo,Z===f||Z.nodeType===8&&Z.parentNode===f))return;T=T.return}for(;W!==null;){if(T=Qr(W),T===null)return;if(Z=T.tag,Z===5||Z===6){c=x=T;continue e}W=W.parentNode}}c=c.return}ft(function(){var he=x,Le=pe(a),ze=[];e:{var De=dh.get(n);if(De!==void 0){var Qe=mc,st=n;switch(n){case"keypress":if(Mo(a)===0)break e;case"keydown":case"keyup":Qe=lx;break;case"focusin":st="focus",Qe=vc;break;case"focusout":st="blur",Qe=vc;break;case"beforeblur":case"afterblur":Qe=vc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Qe=Hf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Qe=Kg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Qe=dx;break;case oh:case lh:case ch:Qe=Qg;break;case uh:Qe=hx;break;case"scroll":Qe=Yg;break;case"wheel":Qe=mx;break;case"copy":case"cut":case"paste":Qe=tx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Qe=Vf}var lt=(i&4)!==0,gn=!lt&&n==="scroll",le=lt?De!==null?De+"Capture":null:De;lt=[];for(var te=he,ue;te!==null;){ue=te;var Ge=ue.stateNode;if(ue.tag===5&&Ge!==null&&(ue=Ge,le!==null&&(Ge=Te(te,le),Ge!=null&&lt.push(Da(te,Ge,ue)))),gn)break;te=te.return}0<lt.length&&(De=new Qe(De,st,null,a,Le),ze.push({event:De,listeners:lt}))}}if((i&7)===0){e:{if(De=n==="mouseover"||n==="pointerover",Qe=n==="mouseout"||n==="pointerout",De&&a!==Oe&&(st=a.relatedTarget||a.fromElement)&&(Qr(st)||st[Qi]))break e;if((Qe||De)&&(De=Le.window===Le?Le:(De=Le.ownerDocument)?De.defaultView||De.parentWindow:window,Qe?(st=a.relatedTarget||a.toElement,Qe=he,st=st?Qr(st):null,st!==null&&(gn=St(st),st!==gn||st.tag!==5&&st.tag!==6)&&(st=null)):(Qe=null,st=he),Qe!==st)){if(lt=Hf,Ge="onMouseLeave",le="onMouseEnter",te="mouse",(n==="pointerout"||n==="pointerover")&&(lt=Vf,Ge="onPointerLeave",le="onPointerEnter",te="pointer"),gn=Qe==null?De:Is(Qe),ue=st==null?De:Is(st),De=new lt(Ge,te+"leave",Qe,a,Le),De.target=gn,De.relatedTarget=ue,Ge=null,Qr(Le)===he&&(lt=new lt(le,te+"enter",st,a,Le),lt.target=ue,lt.relatedTarget=gn,Ge=lt),gn=Ge,Qe&&st)t:{for(lt=Qe,le=st,te=0,ue=lt;ue;ue=Ds(ue))te++;for(ue=0,Ge=le;Ge;Ge=Ds(Ge))ue++;for(;0<te-ue;)lt=Ds(lt),te--;for(;0<ue-te;)le=Ds(le),ue--;for(;te--;){if(lt===le||le!==null&&lt===le.alternate)break t;lt=Ds(lt),le=Ds(le)}lt=null}else lt=null;Qe!==null&&gh(ze,De,Qe,lt,!1),st!==null&&gn!==null&&gh(ze,gn,st,lt,!0)}}e:{if(De=he?Is(he):window,Qe=De.nodeName&&De.nodeName.toLowerCase(),Qe==="select"||Qe==="input"&&De.type==="file")var dt=bx;else if(qf(De))if(Zf)dt=Tx;else{dt=wx;var mt=Mx}else(Qe=De.nodeName)&&Qe.toLowerCase()==="input"&&(De.type==="checkbox"||De.type==="radio")&&(dt=Ex);if(dt&&(dt=dt(n,he))){Kf(ze,dt,a,Le);break e}mt&&mt(n,De,he),n==="focusout"&&(mt=De._wrapperState)&&mt.controlled&&De.type==="number"&&rn(De,"number",De.value)}switch(mt=he?Is(he):window,n){case"focusin":(qf(mt)||mt.contentEditable==="true")&&(Ns=mt,wc=he,Ra=null);break;case"focusout":Ra=wc=Ns=null;break;case"mousedown":Ec=!0;break;case"contextmenu":case"mouseup":case"dragend":Ec=!1,sh(ze,a,Le);break;case"selectionchange":if(Rx)break;case"keydown":case"keyup":sh(ze,a,Le)}var gt;if(yc)e:{switch(n){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else Rs?$f(n,a)&&(yt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(yt="onCompositionStart");yt&&(Wf&&a.locale!=="ko"&&(Rs||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&Rs&&(gt=Of()):(br=Le,pc="value"in br?br.value:br.textContent,Rs=!0)),mt=No(he,yt),0<mt.length&&(yt=new Gf(yt,n,null,a,Le),ze.push({event:yt,listeners:mt}),gt?yt.data=gt:(gt=Yf(a),gt!==null&&(yt.data=gt)))),(gt=xx?vx(n,a):_x(n,a))&&(he=No(he,"onBeforeInput"),0<he.length&&(Le=new Gf("onBeforeInput","beforeinput",null,a,Le),ze.push({event:Le,listeners:he}),Le.data=gt))}ph(ze,i)})}function Da(n,i,a){return{instance:n,listener:i,currentTarget:a}}function No(n,i){for(var a=i+"Capture",c=[];n!==null;){var f=n,x=f.stateNode;f.tag===5&&x!==null&&(f=x,x=Te(n,a),x!=null&&c.unshift(Da(n,x,f)),x=Te(n,i),x!=null&&c.push(Da(n,x,f))),n=n.return}return c}function Ds(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function gh(n,i,a,c,f){for(var x=i._reactName,T=[];a!==null&&a!==c;){var W=a,Z=W.alternate,he=W.stateNode;if(Z!==null&&Z===c)break;W.tag===5&&he!==null&&(W=he,f?(Z=Te(a,x),Z!=null&&T.unshift(Da(a,Z,W))):f||(Z=Te(a,x),Z!=null&&T.push(Da(a,Z,W)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var Lx=/\r\n?/g,Ix=/\u0000|\uFFFD/g;function xh(n){return(typeof n=="string"?n:""+n).replace(Lx,`
`).replace(Ix,"")}function Po(n,i,a){if(i=xh(i),xh(n)!==i&&a)throw Error(t(425))}function Do(){}var Pc=null,Dc=null;function Lc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ic=typeof setTimeout=="function"?setTimeout:void 0,Ux=typeof clearTimeout=="function"?clearTimeout:void 0,vh=typeof Promise=="function"?Promise:void 0,kx=typeof queueMicrotask=="function"?queueMicrotask:typeof vh<"u"?function(n){return vh.resolve(null).then(n).catch(Fx)}:Ic;function Fx(n){setTimeout(function(){throw n})}function Uc(n,i){var a=i,c=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){n.removeChild(f),ba(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);ba(i)}function wr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function _h(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),Oi="__reactFiber$"+Ls,La="__reactProps$"+Ls,Qi="__reactContainer$"+Ls,kc="__reactEvents$"+Ls,zx="__reactListeners$"+Ls,Ox="__reactHandles$"+Ls;function Qr(n){var i=n[Oi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Qi]||a[Oi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=_h(n);n!==null;){if(a=n[Oi])return a;n=_h(n)}return i}n=a,a=n.parentNode}return null}function Ia(n){return n=n[Oi]||n[Qi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Is(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Lo(n){return n[La]||null}var Fc=[],Us=-1;function Er(n){return{current:n}}function nn(n){0>Us||(n.current=Fc[Us],Fc[Us]=null,Us--)}function Qt(n,i){Us++,Fc[Us]=n.current,n.current=i}var Tr={},On=Er(Tr),Kn=Er(!1),es=Tr;function ks(n,i){var a=n.type.contextTypes;if(!a)return Tr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},x;for(x in a)f[x]=i[x];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Zn(n){return n=n.childContextTypes,n!=null}function Io(){nn(Kn),nn(On)}function yh(n,i,a){if(On.current!==Tr)throw Error(t(168));Qt(On,i),Qt(Kn,a)}function Sh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,Ne(n)||"Unknown",f));return X({},a,c)}function Uo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Tr,es=On.current,Qt(On,n),Qt(Kn,Kn.current),!0}function bh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Sh(n,i,es),c.__reactInternalMemoizedMergedChildContext=n,nn(Kn),nn(On),Qt(On,n)):nn(Kn),Qt(Kn,a)}var er=null,ko=!1,zc=!1;function Mh(n){er===null?er=[n]:er.push(n)}function Bx(n){ko=!0,Mh(n)}function Ar(){if(!zc&&er!==null){zc=!0;var n=0,i=ut;try{var a=er;for(ut=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}er=null,ko=!1}catch(f){throw er!==null&&(er=er.slice(n+1)),ki(Jr,Ar),f}finally{ut=i,zc=!1}}return null}var Fs=[],zs=0,Fo=null,zo=0,fi=[],hi=0,ts=null,tr=1,nr="";function ns(n,i){Fs[zs++]=zo,Fs[zs++]=Fo,Fo=n,zo=i}function wh(n,i,a){fi[hi++]=tr,fi[hi++]=nr,fi[hi++]=ts,ts=n;var c=tr;n=nr;var f=32-ae(c)-1;c&=~(1<<f),a+=1;var x=32-ae(i)+f;if(30<x){var T=f-f%5;x=(c&(1<<T)-1).toString(32),c>>=T,f-=T,tr=1<<32-ae(i)+f|a<<f|c,nr=x+n}else tr=1<<x|a<<f|c,nr=n}function Oc(n){n.return!==null&&(ns(n,1),wh(n,1,0))}function Bc(n){for(;n===Fo;)Fo=Fs[--zs],Fs[zs]=null,zo=Fs[--zs],Fs[zs]=null;for(;n===ts;)ts=fi[--hi],fi[hi]=null,nr=fi[--hi],fi[hi]=null,tr=fi[--hi],fi[hi]=null}var si=null,ai=null,an=!1,bi=null;function Eh(n,i){var a=xi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Th(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,si=n,ai=wr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,si=n,ai=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ts!==null?{id:tr,overflow:nr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=xi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,si=n,ai=null,!0):!1;default:return!1}}function Hc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Gc(n){if(an){var i=ai;if(i){var a=i;if(!Th(n,i)){if(Hc(n))throw Error(t(418));i=wr(a.nextSibling);var c=si;i&&Th(n,i)?Eh(c,a):(n.flags=n.flags&-4097|2,an=!1,si=n)}}else{if(Hc(n))throw Error(t(418));n.flags=n.flags&-4097|2,an=!1,si=n}}}function Ah(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;si=n}function Oo(n){if(n!==si)return!1;if(!an)return Ah(n),an=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Lc(n.type,n.memoizedProps)),i&&(i=ai)){if(Hc(n))throw Ch(),Error(t(418));for(;i;)Eh(n,i),i=wr(i.nextSibling)}if(Ah(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){ai=wr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}ai=null}}else ai=si?wr(n.stateNode.nextSibling):null;return!0}function Ch(){for(var n=ai;n;)n=wr(n.nextSibling)}function Os(){ai=si=null,an=!1}function Vc(n){bi===null?bi=[n]:bi.push(n)}var Hx=D.ReactCurrentBatchConfig;function Ua(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var f=c,x=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===x?i.ref:(i=function(T){var W=f.refs;T===null?delete W[x]:W[x]=T},i._stringRef=x,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Bo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Rh(n){var i=n._init;return i(n._payload)}function Nh(n){function i(le,te){if(n){var ue=le.deletions;ue===null?(le.deletions=[te],le.flags|=16):ue.push(te)}}function a(le,te){if(!n)return null;for(;te!==null;)i(le,te),te=te.sibling;return null}function c(le,te){for(le=new Map;te!==null;)te.key!==null?le.set(te.key,te):le.set(te.index,te),te=te.sibling;return le}function f(le,te){return le=Ur(le,te),le.index=0,le.sibling=null,le}function x(le,te,ue){return le.index=ue,n?(ue=le.alternate,ue!==null?(ue=ue.index,ue<te?(le.flags|=2,te):ue):(le.flags|=2,te)):(le.flags|=1048576,te)}function T(le){return n&&le.alternate===null&&(le.flags|=2),le}function W(le,te,ue,Ge){return te===null||te.tag!==6?(te=Iu(ue,le.mode,Ge),te.return=le,te):(te=f(te,ue),te.return=le,te)}function Z(le,te,ue,Ge){var dt=ue.type;return dt===M?Le(le,te,ue.props.children,Ge,ue.key):te!==null&&(te.elementType===dt||typeof dt=="object"&&dt!==null&&dt.$$typeof===se&&Rh(dt)===te.type)?(Ge=f(te,ue.props),Ge.ref=Ua(le,te,ue),Ge.return=le,Ge):(Ge=ul(ue.type,ue.key,ue.props,null,le.mode,Ge),Ge.ref=Ua(le,te,ue),Ge.return=le,Ge)}function he(le,te,ue,Ge){return te===null||te.tag!==4||te.stateNode.containerInfo!==ue.containerInfo||te.stateNode.implementation!==ue.implementation?(te=Uu(ue,le.mode,Ge),te.return=le,te):(te=f(te,ue.children||[]),te.return=le,te)}function Le(le,te,ue,Ge,dt){return te===null||te.tag!==7?(te=us(ue,le.mode,Ge,dt),te.return=le,te):(te=f(te,ue),te.return=le,te)}function ze(le,te,ue){if(typeof te=="string"&&te!==""||typeof te=="number")return te=Iu(""+te,le.mode,ue),te.return=le,te;if(typeof te=="object"&&te!==null){switch(te.$$typeof){case F:return ue=ul(te.type,te.key,te.props,null,le.mode,ue),ue.ref=Ua(le,null,te),ue.return=le,ue;case L:return te=Uu(te,le.mode,ue),te.return=le,te;case se:var Ge=te._init;return ze(le,Ge(te._payload),ue)}if(Pt(te)||G(te))return te=us(te,le.mode,ue,null),te.return=le,te;Bo(le,te)}return null}function De(le,te,ue,Ge){var dt=te!==null?te.key:null;if(typeof ue=="string"&&ue!==""||typeof ue=="number")return dt!==null?null:W(le,te,""+ue,Ge);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case F:return ue.key===dt?Z(le,te,ue,Ge):null;case L:return ue.key===dt?he(le,te,ue,Ge):null;case se:return dt=ue._init,De(le,te,dt(ue._payload),Ge)}if(Pt(ue)||G(ue))return dt!==null?null:Le(le,te,ue,Ge,null);Bo(le,ue)}return null}function Qe(le,te,ue,Ge,dt){if(typeof Ge=="string"&&Ge!==""||typeof Ge=="number")return le=le.get(ue)||null,W(te,le,""+Ge,dt);if(typeof Ge=="object"&&Ge!==null){switch(Ge.$$typeof){case F:return le=le.get(Ge.key===null?ue:Ge.key)||null,Z(te,le,Ge,dt);case L:return le=le.get(Ge.key===null?ue:Ge.key)||null,he(te,le,Ge,dt);case se:var mt=Ge._init;return Qe(le,te,ue,mt(Ge._payload),dt)}if(Pt(Ge)||G(Ge))return le=le.get(ue)||null,Le(te,le,Ge,dt,null);Bo(te,Ge)}return null}function st(le,te,ue,Ge){for(var dt=null,mt=null,gt=te,yt=te=0,Rn=null;gt!==null&&yt<ue.length;yt++){gt.index>yt?(Rn=gt,gt=null):Rn=gt.sibling;var Wt=De(le,gt,ue[yt],Ge);if(Wt===null){gt===null&&(gt=Rn);break}n&&gt&&Wt.alternate===null&&i(le,gt),te=x(Wt,te,yt),mt===null?dt=Wt:mt.sibling=Wt,mt=Wt,gt=Rn}if(yt===ue.length)return a(le,gt),an&&ns(le,yt),dt;if(gt===null){for(;yt<ue.length;yt++)gt=ze(le,ue[yt],Ge),gt!==null&&(te=x(gt,te,yt),mt===null?dt=gt:mt.sibling=gt,mt=gt);return an&&ns(le,yt),dt}for(gt=c(le,gt);yt<ue.length;yt++)Rn=Qe(gt,le,yt,ue[yt],Ge),Rn!==null&&(n&&Rn.alternate!==null&&gt.delete(Rn.key===null?yt:Rn.key),te=x(Rn,te,yt),mt===null?dt=Rn:mt.sibling=Rn,mt=Rn);return n&&gt.forEach(function(kr){return i(le,kr)}),an&&ns(le,yt),dt}function lt(le,te,ue,Ge){var dt=G(ue);if(typeof dt!="function")throw Error(t(150));if(ue=dt.call(ue),ue==null)throw Error(t(151));for(var mt=dt=null,gt=te,yt=te=0,Rn=null,Wt=ue.next();gt!==null&&!Wt.done;yt++,Wt=ue.next()){gt.index>yt?(Rn=gt,gt=null):Rn=gt.sibling;var kr=De(le,gt,Wt.value,Ge);if(kr===null){gt===null&&(gt=Rn);break}n&&gt&&kr.alternate===null&&i(le,gt),te=x(kr,te,yt),mt===null?dt=kr:mt.sibling=kr,mt=kr,gt=Rn}if(Wt.done)return a(le,gt),an&&ns(le,yt),dt;if(gt===null){for(;!Wt.done;yt++,Wt=ue.next())Wt=ze(le,Wt.value,Ge),Wt!==null&&(te=x(Wt,te,yt),mt===null?dt=Wt:mt.sibling=Wt,mt=Wt);return an&&ns(le,yt),dt}for(gt=c(le,gt);!Wt.done;yt++,Wt=ue.next())Wt=Qe(gt,le,yt,Wt.value,Ge),Wt!==null&&(n&&Wt.alternate!==null&&gt.delete(Wt.key===null?yt:Wt.key),te=x(Wt,te,yt),mt===null?dt=Wt:mt.sibling=Wt,mt=Wt);return n&&gt.forEach(function(yv){return i(le,yv)}),an&&ns(le,yt),dt}function gn(le,te,ue,Ge){if(typeof ue=="object"&&ue!==null&&ue.type===M&&ue.key===null&&(ue=ue.props.children),typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case F:e:{for(var dt=ue.key,mt=te;mt!==null;){if(mt.key===dt){if(dt=ue.type,dt===M){if(mt.tag===7){a(le,mt.sibling),te=f(mt,ue.props.children),te.return=le,le=te;break e}}else if(mt.elementType===dt||typeof dt=="object"&&dt!==null&&dt.$$typeof===se&&Rh(dt)===mt.type){a(le,mt.sibling),te=f(mt,ue.props),te.ref=Ua(le,mt,ue),te.return=le,le=te;break e}a(le,mt);break}else i(le,mt);mt=mt.sibling}ue.type===M?(te=us(ue.props.children,le.mode,Ge,ue.key),te.return=le,le=te):(Ge=ul(ue.type,ue.key,ue.props,null,le.mode,Ge),Ge.ref=Ua(le,te,ue),Ge.return=le,le=Ge)}return T(le);case L:e:{for(mt=ue.key;te!==null;){if(te.key===mt)if(te.tag===4&&te.stateNode.containerInfo===ue.containerInfo&&te.stateNode.implementation===ue.implementation){a(le,te.sibling),te=f(te,ue.children||[]),te.return=le,le=te;break e}else{a(le,te);break}else i(le,te);te=te.sibling}te=Uu(ue,le.mode,Ge),te.return=le,le=te}return T(le);case se:return mt=ue._init,gn(le,te,mt(ue._payload),Ge)}if(Pt(ue))return st(le,te,ue,Ge);if(G(ue))return lt(le,te,ue,Ge);Bo(le,ue)}return typeof ue=="string"&&ue!==""||typeof ue=="number"?(ue=""+ue,te!==null&&te.tag===6?(a(le,te.sibling),te=f(te,ue),te.return=le,le=te):(a(le,te),te=Iu(ue,le.mode,Ge),te.return=le,le=te),T(le)):a(le,te)}return gn}var Bs=Nh(!0),Ph=Nh(!1),Ho=Er(null),Go=null,Hs=null,Wc=null;function jc(){Wc=Hs=Go=null}function Xc(n){var i=Ho.current;nn(Ho),n._currentValue=i}function $c(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Gs(n,i){Go=n,Wc=Hs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Jn=!0),n.firstContext=null)}function pi(n){var i=n._currentValue;if(Wc!==n)if(n={context:n,memoizedValue:i,next:null},Hs===null){if(Go===null)throw Error(t(308));Hs=n,Go.dependencies={lanes:0,firstContext:n}}else Hs=Hs.next=n;return i}var is=null;function Yc(n){is===null?is=[n]:is.push(n)}function Dh(n,i,a,c){var f=i.interleaved;return f===null?(a.next=a,Yc(i)):(a.next=f.next,f.next=a),i.interleaved=a,ir(n,c)}function ir(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Cr=!1;function qc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function rr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Rr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ht&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,ir(n,a)}return f=c.interleaved,f===null?(i.next=i,Yc(c)):(i.next=f.next,f.next=i),c.interleaved=i,ir(n,a)}function Vo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,yn(n,a)}}function Ih(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,x=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};x===null?f=x=T:x=x.next=T,a=a.next}while(a!==null);x===null?f=x=i:x=x.next=i}else f=x=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:x,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Wo(n,i,a,c){var f=n.updateQueue;Cr=!1;var x=f.firstBaseUpdate,T=f.lastBaseUpdate,W=f.shared.pending;if(W!==null){f.shared.pending=null;var Z=W,he=Z.next;Z.next=null,T===null?x=he:T.next=he,T=Z;var Le=n.alternate;Le!==null&&(Le=Le.updateQueue,W=Le.lastBaseUpdate,W!==T&&(W===null?Le.firstBaseUpdate=he:W.next=he,Le.lastBaseUpdate=Z))}if(x!==null){var ze=f.baseState;T=0,Le=he=Z=null,W=x;do{var De=W.lane,Qe=W.eventTime;if((c&De)===De){Le!==null&&(Le=Le.next={eventTime:Qe,lane:0,tag:W.tag,payload:W.payload,callback:W.callback,next:null});e:{var st=n,lt=W;switch(De=i,Qe=a,lt.tag){case 1:if(st=lt.payload,typeof st=="function"){ze=st.call(Qe,ze,De);break e}ze=st;break e;case 3:st.flags=st.flags&-65537|128;case 0:if(st=lt.payload,De=typeof st=="function"?st.call(Qe,ze,De):st,De==null)break e;ze=X({},ze,De);break e;case 2:Cr=!0}}W.callback!==null&&W.lane!==0&&(n.flags|=64,De=f.effects,De===null?f.effects=[W]:De.push(W))}else Qe={eventTime:Qe,lane:De,tag:W.tag,payload:W.payload,callback:W.callback,next:null},Le===null?(he=Le=Qe,Z=ze):Le=Le.next=Qe,T|=De;if(W=W.next,W===null){if(W=f.shared.pending,W===null)break;De=W,W=De.next,De.next=null,f.lastBaseUpdate=De,f.shared.pending=null}}while(!0);if(Le===null&&(Z=ze),f.baseState=Z,f.firstBaseUpdate=he,f.lastBaseUpdate=Le,i=f.shared.interleaved,i!==null){f=i;do T|=f.lane,f=f.next;while(f!==i)}else x===null&&(f.shared.lanes=0);as|=T,n.lanes=T,n.memoizedState=ze}}function Uh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var ka={},Bi=Er(ka),Fa=Er(ka),za=Er(ka);function rs(n){if(n===ka)throw Error(t(174));return n}function Kc(n,i){switch(Qt(za,i),Qt(Fa,n),Qt(Bi,ka),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:zt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=zt(i,n)}nn(Bi),Qt(Bi,i)}function Vs(){nn(Bi),nn(Fa),nn(za)}function kh(n){rs(za.current);var i=rs(Bi.current),a=zt(i,n.type);i!==a&&(Qt(Fa,n),Qt(Bi,a))}function Zc(n){Fa.current===n&&(nn(Bi),nn(Fa))}var ln=Er(0);function jo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Jc=[];function Qc(){for(var n=0;n<Jc.length;n++)Jc[n]._workInProgressVersionPrimary=null;Jc.length=0}var Xo=D.ReactCurrentDispatcher,eu=D.ReactCurrentBatchConfig,ss=0,cn=null,bn=null,An=null,$o=!1,Oa=!1,Ba=0,Gx=0;function Bn(){throw Error(t(321))}function tu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Si(n[a],i[a]))return!1;return!0}function nu(n,i,a,c,f,x){if(ss=x,cn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Xo.current=n===null||n.memoizedState===null?Xx:$x,n=a(c,f),Oa){x=0;do{if(Oa=!1,Ba=0,25<=x)throw Error(t(301));x+=1,An=bn=null,i.updateQueue=null,Xo.current=Yx,n=a(c,f)}while(Oa)}if(Xo.current=Ko,i=bn!==null&&bn.next!==null,ss=0,An=bn=cn=null,$o=!1,i)throw Error(t(300));return n}function iu(){var n=Ba!==0;return Ba=0,n}function Hi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return An===null?cn.memoizedState=An=n:An=An.next=n,An}function mi(){if(bn===null){var n=cn.alternate;n=n!==null?n.memoizedState:null}else n=bn.next;var i=An===null?cn.memoizedState:An.next;if(i!==null)An=i,bn=n;else{if(n===null)throw Error(t(310));bn=n,n={memoizedState:bn.memoizedState,baseState:bn.baseState,baseQueue:bn.baseQueue,queue:bn.queue,next:null},An===null?cn.memoizedState=An=n:An=An.next=n}return An}function Ha(n,i){return typeof i=="function"?i(n):i}function ru(n){var i=mi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=bn,f=c.baseQueue,x=a.pending;if(x!==null){if(f!==null){var T=f.next;f.next=x.next,x.next=T}c.baseQueue=f=x,a.pending=null}if(f!==null){x=f.next,c=c.baseState;var W=T=null,Z=null,he=x;do{var Le=he.lane;if((ss&Le)===Le)Z!==null&&(Z=Z.next={lane:0,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),c=he.hasEagerState?he.eagerState:n(c,he.action);else{var ze={lane:Le,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null};Z===null?(W=Z=ze,T=c):Z=Z.next=ze,cn.lanes|=Le,as|=Le}he=he.next}while(he!==null&&he!==x);Z===null?T=c:Z.next=W,Si(c,i.memoizedState)||(Jn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=Z,a.lastRenderedState=c}if(n=a.interleaved,n!==null){f=n;do x=f.lane,cn.lanes|=x,as|=x,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function su(n){var i=mi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,f=a.pending,x=i.memoizedState;if(f!==null){a.pending=null;var T=f=f.next;do x=n(x,T.action),T=T.next;while(T!==f);Si(x,i.memoizedState)||(Jn=!0),i.memoizedState=x,i.baseQueue===null&&(i.baseState=x),a.lastRenderedState=x}return[x,c]}function Fh(){}function zh(n,i){var a=cn,c=mi(),f=i(),x=!Si(c.memoizedState,f);if(x&&(c.memoizedState=f,Jn=!0),c=c.queue,au(Hh.bind(null,a,c,n),[n]),c.getSnapshot!==i||x||An!==null&&An.memoizedState.tag&1){if(a.flags|=2048,Ga(9,Bh.bind(null,a,c,f,i),void 0,null),Cn===null)throw Error(t(349));(ss&30)!==0||Oh(a,i,f)}return f}function Oh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=cn.updateQueue,i===null?(i={lastEffect:null,stores:null},cn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Bh(n,i,a,c){i.value=a,i.getSnapshot=c,Gh(i)&&Vh(n)}function Hh(n,i,a){return a(function(){Gh(i)&&Vh(n)})}function Gh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Si(n,a)}catch{return!0}}function Vh(n){var i=ir(n,1);i!==null&&Ti(i,n,1,-1)}function Wh(n){var i=Hi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ha,lastRenderedState:n},i.queue=n,n=n.dispatch=jx.bind(null,cn,n),[i.memoizedState,n]}function Ga(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=cn.updateQueue,i===null?(i={lastEffect:null,stores:null},cn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function jh(){return mi().memoizedState}function Yo(n,i,a,c){var f=Hi();cn.flags|=n,f.memoizedState=Ga(1|i,a,void 0,c===void 0?null:c)}function qo(n,i,a,c){var f=mi();c=c===void 0?null:c;var x=void 0;if(bn!==null){var T=bn.memoizedState;if(x=T.destroy,c!==null&&tu(c,T.deps)){f.memoizedState=Ga(i,a,x,c);return}}cn.flags|=n,f.memoizedState=Ga(1|i,a,x,c)}function Xh(n,i){return Yo(8390656,8,n,i)}function au(n,i){return qo(2048,8,n,i)}function $h(n,i){return qo(4,2,n,i)}function Yh(n,i){return qo(4,4,n,i)}function qh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Kh(n,i,a){return a=a!=null?a.concat([n]):null,qo(4,4,qh.bind(null,i,n),a)}function ou(){}function Zh(n,i){var a=mi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&tu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Jh(n,i){var a=mi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&tu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Qh(n,i,a){return(ss&21)===0?(n.baseState&&(n.baseState=!1,Jn=!0),n.memoizedState=a):(Si(a,i)||(a=Yt(),cn.lanes|=a,as|=a,n.baseState=!0),i)}function Vx(n,i){var a=ut;ut=a!==0&&4>a?a:4,n(!0);var c=eu.transition;eu.transition={};try{n(!1),i()}finally{ut=a,eu.transition=c}}function ep(){return mi().memoizedState}function Wx(n,i,a){var c=Lr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},tp(n))np(i,a);else if(a=Dh(n,i,a,c),a!==null){var f=Yn();Ti(a,n,c,f),ip(a,i,c)}}function jx(n,i,a){var c=Lr(n),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(tp(n))np(i,f);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=i.lastRenderedReducer,x!==null))try{var T=i.lastRenderedState,W=x(T,a);if(f.hasEagerState=!0,f.eagerState=W,Si(W,T)){var Z=i.interleaved;Z===null?(f.next=f,Yc(i)):(f.next=Z.next,Z.next=f),i.interleaved=f;return}}catch{}finally{}a=Dh(n,i,f,c),a!==null&&(f=Yn(),Ti(a,n,c,f),ip(a,i,c))}}function tp(n){var i=n.alternate;return n===cn||i!==null&&i===cn}function np(n,i){Oa=$o=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function ip(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,yn(n,a)}}var Ko={readContext:pi,useCallback:Bn,useContext:Bn,useEffect:Bn,useImperativeHandle:Bn,useInsertionEffect:Bn,useLayoutEffect:Bn,useMemo:Bn,useReducer:Bn,useRef:Bn,useState:Bn,useDebugValue:Bn,useDeferredValue:Bn,useTransition:Bn,useMutableSource:Bn,useSyncExternalStore:Bn,useId:Bn,unstable_isNewReconciler:!1},Xx={readContext:pi,useCallback:function(n,i){return Hi().memoizedState=[n,i===void 0?null:i],n},useContext:pi,useEffect:Xh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Yo(4194308,4,qh.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Yo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Yo(4,2,n,i)},useMemo:function(n,i){var a=Hi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Hi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Wx.bind(null,cn,n),[c.memoizedState,n]},useRef:function(n){var i=Hi();return n={current:n},i.memoizedState=n},useState:Wh,useDebugValue:ou,useDeferredValue:function(n){return Hi().memoizedState=n},useTransition:function(){var n=Wh(!1),i=n[0];return n=Vx.bind(null,n[1]),Hi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=cn,f=Hi();if(an){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Cn===null)throw Error(t(349));(ss&30)!==0||Oh(c,i,a)}f.memoizedState=a;var x={value:a,getSnapshot:i};return f.queue=x,Xh(Hh.bind(null,c,x,n),[n]),c.flags|=2048,Ga(9,Bh.bind(null,c,x,a,i),void 0,null),a},useId:function(){var n=Hi(),i=Cn.identifierPrefix;if(an){var a=nr,c=tr;a=(c&~(1<<32-ae(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ba++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Gx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},$x={readContext:pi,useCallback:Zh,useContext:pi,useEffect:au,useImperativeHandle:Kh,useInsertionEffect:$h,useLayoutEffect:Yh,useMemo:Jh,useReducer:ru,useRef:jh,useState:function(){return ru(Ha)},useDebugValue:ou,useDeferredValue:function(n){var i=mi();return Qh(i,bn.memoizedState,n)},useTransition:function(){var n=ru(Ha)[0],i=mi().memoizedState;return[n,i]},useMutableSource:Fh,useSyncExternalStore:zh,useId:ep,unstable_isNewReconciler:!1},Yx={readContext:pi,useCallback:Zh,useContext:pi,useEffect:au,useImperativeHandle:Kh,useInsertionEffect:$h,useLayoutEffect:Yh,useMemo:Jh,useReducer:su,useRef:jh,useState:function(){return su(Ha)},useDebugValue:ou,useDeferredValue:function(n){var i=mi();return bn===null?i.memoizedState=n:Qh(i,bn.memoizedState,n)},useTransition:function(){var n=su(Ha)[0],i=mi().memoizedState;return[n,i]},useMutableSource:Fh,useSyncExternalStore:zh,useId:ep,unstable_isNewReconciler:!1};function Mi(n,i){if(n&&n.defaultProps){i=X({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function lu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:X({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Zo={isMounted:function(n){return(n=n._reactInternals)?St(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Yn(),f=Lr(n),x=rr(c,f);x.payload=i,a!=null&&(x.callback=a),i=Rr(n,x,f),i!==null&&(Ti(i,n,f,c),Vo(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Yn(),f=Lr(n),x=rr(c,f);x.tag=1,x.payload=i,a!=null&&(x.callback=a),i=Rr(n,x,f),i!==null&&(Ti(i,n,f,c),Vo(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Yn(),c=Lr(n),f=rr(a,c);f.tag=2,i!=null&&(f.callback=i),i=Rr(n,f,c),i!==null&&(Ti(i,n,c,a),Vo(i,n,c))}};function rp(n,i,a,c,f,x,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,x,T):i.prototype&&i.prototype.isPureReactComponent?!Ca(a,c)||!Ca(f,x):!0}function sp(n,i,a){var c=!1,f=Tr,x=i.contextType;return typeof x=="object"&&x!==null?x=pi(x):(f=Zn(i)?es:On.current,c=i.contextTypes,x=(c=c!=null)?ks(n,f):Tr),i=new i(a,x),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Zo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=x),i}function ap(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Zo.enqueueReplaceState(i,i.state,null)}function cu(n,i,a,c){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},qc(n);var x=i.contextType;typeof x=="object"&&x!==null?f.context=pi(x):(x=Zn(i)?es:On.current,f.context=ks(n,x)),f.state=n.memoizedState,x=i.getDerivedStateFromProps,typeof x=="function"&&(lu(n,i,x,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Zo.enqueueReplaceState(f,f.state,null),Wo(n,a,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Ws(n,i){try{var a="",c=i;do a+=xe(c),c=c.return;while(c);var f=a}catch(x){f=`
Error generating stack: `+x.message+`
`+x.stack}return{value:n,source:i,stack:f,digest:null}}function uu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function du(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var qx=typeof WeakMap=="function"?WeakMap:Map;function op(n,i,a){a=rr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){rl||(rl=!0,Tu=c),du(n,i)},a}function lp(n,i,a){a=rr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){du(n,i)}}var x=n.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(a.callback=function(){du(n,i),typeof c!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function cp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new qx;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),n=cv.bind(null,n,i,a),i.then(n,n))}function up(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function dp(n,i,a,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=rr(-1,1),i.tag=2,Rr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var Kx=D.ReactCurrentOwner,Jn=!1;function $n(n,i,a,c){i.child=n===null?Ph(i,null,a,c):Bs(i,n.child,a,c)}function fp(n,i,a,c,f){a=a.render;var x=i.ref;return Gs(i,f),c=nu(n,i,a,c,x,f),a=iu(),n!==null&&!Jn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,sr(n,i,f)):(an&&a&&Oc(i),i.flags|=1,$n(n,i,c,f),i.child)}function hp(n,i,a,c,f){if(n===null){var x=a.type;return typeof x=="function"&&!Lu(x)&&x.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=x,pp(n,i,x,c,f)):(n=ul(a.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(x=n.child,(n.lanes&f)===0){var T=x.memoizedProps;if(a=a.compare,a=a!==null?a:Ca,a(T,c)&&n.ref===i.ref)return sr(n,i,f)}return i.flags|=1,n=Ur(x,c),n.ref=i.ref,n.return=i,i.child=n}function pp(n,i,a,c,f){if(n!==null){var x=n.memoizedProps;if(Ca(x,c)&&n.ref===i.ref)if(Jn=!1,i.pendingProps=c=x,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Jn=!0);else return i.lanes=n.lanes,sr(n,i,f)}return fu(n,i,a,c,f)}function mp(n,i,a){var c=i.pendingProps,f=c.children,x=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qt(Xs,oi),oi|=a;else{if((a&1073741824)===0)return n=x!==null?x.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Qt(Xs,oi),oi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=x!==null?x.baseLanes:a,Qt(Xs,oi),oi|=c}else x!==null?(c=x.baseLanes|a,i.memoizedState=null):c=a,Qt(Xs,oi),oi|=c;return $n(n,i,f,a),i.child}function gp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function fu(n,i,a,c,f){var x=Zn(a)?es:On.current;return x=ks(i,x),Gs(i,f),a=nu(n,i,a,c,x,f),c=iu(),n!==null&&!Jn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,sr(n,i,f)):(an&&c&&Oc(i),i.flags|=1,$n(n,i,a,f),i.child)}function xp(n,i,a,c,f){if(Zn(a)){var x=!0;Uo(i)}else x=!1;if(Gs(i,f),i.stateNode===null)Qo(n,i),sp(i,a,c),cu(i,a,c,f),c=!0;else if(n===null){var T=i.stateNode,W=i.memoizedProps;T.props=W;var Z=T.context,he=a.contextType;typeof he=="object"&&he!==null?he=pi(he):(he=Zn(a)?es:On.current,he=ks(i,he));var Le=a.getDerivedStateFromProps,ze=typeof Le=="function"||typeof T.getSnapshotBeforeUpdate=="function";ze||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(W!==c||Z!==he)&&ap(i,T,c,he),Cr=!1;var De=i.memoizedState;T.state=De,Wo(i,c,T,f),Z=i.memoizedState,W!==c||De!==Z||Kn.current||Cr?(typeof Le=="function"&&(lu(i,a,Le,c),Z=i.memoizedState),(W=Cr||rp(i,a,W,c,De,Z,he))?(ze||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=Z),T.props=c,T.state=Z,T.context=he,c=W):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,Lh(n,i),W=i.memoizedProps,he=i.type===i.elementType?W:Mi(i.type,W),T.props=he,ze=i.pendingProps,De=T.context,Z=a.contextType,typeof Z=="object"&&Z!==null?Z=pi(Z):(Z=Zn(a)?es:On.current,Z=ks(i,Z));var Qe=a.getDerivedStateFromProps;(Le=typeof Qe=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(W!==ze||De!==Z)&&ap(i,T,c,Z),Cr=!1,De=i.memoizedState,T.state=De,Wo(i,c,T,f);var st=i.memoizedState;W!==ze||De!==st||Kn.current||Cr?(typeof Qe=="function"&&(lu(i,a,Qe,c),st=i.memoizedState),(he=Cr||rp(i,a,he,c,De,st,Z)||!1)?(Le||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,st,Z),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,st,Z)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||W===n.memoizedProps&&De===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||W===n.memoizedProps&&De===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=st),T.props=c,T.state=st,T.context=Z,c=he):(typeof T.componentDidUpdate!="function"||W===n.memoizedProps&&De===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||W===n.memoizedProps&&De===n.memoizedState||(i.flags|=1024),c=!1)}return hu(n,i,a,c,x,f)}function hu(n,i,a,c,f,x){gp(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return f&&bh(i,a,!1),sr(n,i,x);c=i.stateNode,Kx.current=i;var W=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=Bs(i,n.child,null,x),i.child=Bs(i,null,W,x)):$n(n,i,W,x),i.memoizedState=c.state,f&&bh(i,a,!0),i.child}function vp(n){var i=n.stateNode;i.pendingContext?yh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&yh(n,i.context,!1),Kc(n,i.containerInfo)}function _p(n,i,a,c,f){return Os(),Vc(f),i.flags|=256,$n(n,i,a,c),i.child}var pu={dehydrated:null,treeContext:null,retryLane:0};function mu(n){return{baseLanes:n,cachePool:null,transitions:null}}function yp(n,i,a){var c=i.pendingProps,f=ln.current,x=!1,T=(i.flags&128)!==0,W;if((W=T)||(W=n!==null&&n.memoizedState===null?!1:(f&2)!==0),W?(x=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Qt(ln,f&1),n===null)return Gc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,x?(c=i.mode,x=i.child,T={mode:"hidden",children:T},(c&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=T):x=dl(T,c,0,null),n=us(n,c,a,null),x.return=i,n.return=i,x.sibling=n,i.child=x,i.child.memoizedState=mu(a),i.memoizedState=pu,n):gu(i,T));if(f=n.memoizedState,f!==null&&(W=f.dehydrated,W!==null))return Zx(n,i,T,c,W,f,a);if(x){x=c.fallback,T=i.mode,f=n.child,W=f.sibling;var Z={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=Z,i.deletions=null):(c=Ur(f,Z),c.subtreeFlags=f.subtreeFlags&14680064),W!==null?x=Ur(W,x):(x=us(x,T,a,null),x.flags|=2),x.return=i,c.return=i,c.sibling=x,i.child=c,c=x,x=i.child,T=n.child.memoizedState,T=T===null?mu(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},x.memoizedState=T,x.childLanes=n.childLanes&~a,i.memoizedState=pu,c}return x=n.child,n=x.sibling,c=Ur(x,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function gu(n,i){return i=dl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Jo(n,i,a,c){return c!==null&&Vc(c),Bs(i,n.child,null,a),n=gu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Zx(n,i,a,c,f,x,T){if(a)return i.flags&256?(i.flags&=-257,c=uu(Error(t(422))),Jo(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(x=c.fallback,f=i.mode,c=dl({mode:"visible",children:c.children},f,0,null),x=us(x,f,T,null),x.flags|=2,c.return=i,x.return=i,c.sibling=x,i.child=c,(i.mode&1)!==0&&Bs(i,n.child,null,T),i.child.memoizedState=mu(T),i.memoizedState=pu,x);if((i.mode&1)===0)return Jo(n,i,T,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var W=c.dgst;return c=W,x=Error(t(419)),c=uu(x,c,void 0),Jo(n,i,T,c)}if(W=(T&n.childLanes)!==0,Jn||W){if(c=Cn,c!==null){switch(T&-T){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|T))!==0?0:f,f!==0&&f!==x.retryLane&&(x.retryLane=f,ir(n,f),Ti(c,n,f,-1))}return Du(),c=uu(Error(t(421))),Jo(n,i,T,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=uv.bind(null,n),f._reactRetry=i,null):(n=x.treeContext,ai=wr(f.nextSibling),si=i,an=!0,bi=null,n!==null&&(fi[hi++]=tr,fi[hi++]=nr,fi[hi++]=ts,tr=n.id,nr=n.overflow,ts=i),i=gu(i,c.children),i.flags|=4096,i)}function Sp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),$c(n.return,i,a)}function xu(n,i,a,c,f){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(x.isBackwards=i,x.rendering=null,x.renderingStartTime=0,x.last=c,x.tail=a,x.tailMode=f)}function bp(n,i,a){var c=i.pendingProps,f=c.revealOrder,x=c.tail;if($n(n,i,c.children,a),c=ln.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Sp(n,a,i);else if(n.tag===19)Sp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Qt(ln,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&jo(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),xu(i,!1,f,a,x);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&jo(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}xu(i,!0,a,null,x);break;case"together":xu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Qo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function sr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),as|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Ur(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Ur(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Jx(n,i,a){switch(i.tag){case 3:vp(i),Os();break;case 5:kh(i);break;case 1:Zn(i.type)&&Uo(i);break;case 4:Kc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Qt(Ho,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Qt(ln,ln.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?yp(n,i,a):(Qt(ln,ln.current&1),n=sr(n,i,a),n!==null?n.sibling:null);Qt(ln,ln.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return bp(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Qt(ln,ln.current),c)break;return null;case 22:case 23:return i.lanes=0,mp(n,i,a)}return sr(n,i,a)}var Mp,vu,wp,Ep;Mp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},vu=function(){},wp=function(n,i,a,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,rs(Bi.current);var x=null;switch(a){case"input":f=He(n,f),c=He(n,c),x=[];break;case"select":f=X({},f,{value:void 0}),c=X({},c,{value:void 0}),x=[];break;case"textarea":f=Gt(n,f),c=Gt(n,c),x=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Do)}ye(a,c);var T;a=null;for(he in f)if(!c.hasOwnProperty(he)&&f.hasOwnProperty(he)&&f[he]!=null)if(he==="style"){var W=f[he];for(T in W)W.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else he!=="dangerouslySetInnerHTML"&&he!=="children"&&he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&he!=="autoFocus"&&(o.hasOwnProperty(he)?x||(x=[]):(x=x||[]).push(he,null));for(he in c){var Z=c[he];if(W=f!=null?f[he]:void 0,c.hasOwnProperty(he)&&Z!==W&&(Z!=null||W!=null))if(he==="style")if(W){for(T in W)!W.hasOwnProperty(T)||Z&&Z.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in Z)Z.hasOwnProperty(T)&&W[T]!==Z[T]&&(a||(a={}),a[T]=Z[T])}else a||(x||(x=[]),x.push(he,a)),a=Z;else he==="dangerouslySetInnerHTML"?(Z=Z?Z.__html:void 0,W=W?W.__html:void 0,Z!=null&&W!==Z&&(x=x||[]).push(he,Z)):he==="children"?typeof Z!="string"&&typeof Z!="number"||(x=x||[]).push(he,""+Z):he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&(o.hasOwnProperty(he)?(Z!=null&&he==="onScroll"&&tn("scroll",n),x||W===Z||(x=[])):(x=x||[]).push(he,Z))}a&&(x=x||[]).push("style",a);var he=x;(i.updateQueue=he)&&(i.flags|=4)}},Ep=function(n,i,a,c){a!==c&&(i.flags|=4)};function Va(n,i){if(!an)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Hn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Qx(n,i,a){var c=i.pendingProps;switch(Bc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Hn(i),null;case 1:return Zn(i.type)&&Io(),Hn(i),null;case 3:return c=i.stateNode,Vs(),nn(Kn),nn(On),Qc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Oo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,bi!==null&&(Ru(bi),bi=null))),vu(n,i),Hn(i),null;case 5:Zc(i);var f=rs(za.current);if(a=i.type,n!==null&&i.stateNode!=null)wp(n,i,a,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Hn(i),null}if(n=rs(Bi.current),Oo(i)){c=i.stateNode,a=i.type;var x=i.memoizedProps;switch(c[Oi]=i,c[La]=x,n=(i.mode&1)!==0,a){case"dialog":tn("cancel",c),tn("close",c);break;case"iframe":case"object":case"embed":tn("load",c);break;case"video":case"audio":for(f=0;f<Na.length;f++)tn(Na[f],c);break;case"source":tn("error",c);break;case"img":case"image":case"link":tn("error",c),tn("load",c);break;case"details":tn("toggle",c);break;case"input":xt(c,x),tn("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!x.multiple},tn("invalid",c);break;case"textarea":on(c,x),tn("invalid",c)}ye(a,x),f=null;for(var T in x)if(x.hasOwnProperty(T)){var W=x[T];T==="children"?typeof W=="string"?c.textContent!==W&&(x.suppressHydrationWarning!==!0&&Po(c.textContent,W,n),f=["children",W]):typeof W=="number"&&c.textContent!==""+W&&(x.suppressHydrationWarning!==!0&&Po(c.textContent,W,n),f=["children",""+W]):o.hasOwnProperty(T)&&W!=null&&T==="onScroll"&&tn("scroll",c)}switch(a){case"input":Be(c),Ft(c,x,!0);break;case"textarea":Be(c),en(c);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(c.onclick=Do)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Dt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[Oi]=i,n[La]=c,Mp(n,i,!1,!1),i.stateNode=n;e:{switch(T=ke(a,c),a){case"dialog":tn("cancel",n),tn("close",n),f=c;break;case"iframe":case"object":case"embed":tn("load",n),f=c;break;case"video":case"audio":for(f=0;f<Na.length;f++)tn(Na[f],n);f=c;break;case"source":tn("error",n),f=c;break;case"img":case"image":case"link":tn("error",n),tn("load",n),f=c;break;case"details":tn("toggle",n),f=c;break;case"input":xt(n,c),f=He(n,c),tn("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=X({},c,{value:void 0}),tn("invalid",n);break;case"textarea":on(n,c),f=Gt(n,c),tn("invalid",n);break;default:f=c}ye(a,f),W=f;for(x in W)if(W.hasOwnProperty(x)){var Z=W[x];x==="style"?ne(n,Z):x==="dangerouslySetInnerHTML"?(Z=Z?Z.__html:void 0,Z!=null&&Mt(n,Z)):x==="children"?typeof Z=="string"?(a!=="textarea"||Z!=="")&&qe(n,Z):typeof Z=="number"&&qe(n,""+Z):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?Z!=null&&x==="onScroll"&&tn("scroll",n):Z!=null&&O(n,x,Z,T))}switch(a){case"input":Be(n),Ft(n,c,!1);break;case"textarea":Be(n),en(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ve(c.value));break;case"select":n.multiple=!!c.multiple,x=c.value,x!=null?Kt(n,!!c.multiple,x,!1):c.defaultValue!=null&&Kt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Do)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Hn(i),null;case 6:if(n&&i.stateNode!=null)Ep(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=rs(za.current),rs(Bi.current),Oo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Oi]=i,(x=c.nodeValue!==a)&&(n=si,n!==null))switch(n.tag){case 3:Po(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Po(c.nodeValue,a,(n.mode&1)!==0)}x&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Oi]=i,i.stateNode=c}return Hn(i),null;case 13:if(nn(ln),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(an&&ai!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Ch(),Os(),i.flags|=98560,x=!1;else if(x=Oo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!x)throw Error(t(318));if(x=i.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Oi]=i}else Os(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Hn(i),x=!1}else bi!==null&&(Ru(bi),bi=null),x=!0;if(!x)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(ln.current&1)!==0?Mn===0&&(Mn=3):Du())),i.updateQueue!==null&&(i.flags|=4),Hn(i),null);case 4:return Vs(),vu(n,i),n===null&&Pa(i.stateNode.containerInfo),Hn(i),null;case 10:return Xc(i.type._context),Hn(i),null;case 17:return Zn(i.type)&&Io(),Hn(i),null;case 19:if(nn(ln),x=i.memoizedState,x===null)return Hn(i),null;if(c=(i.flags&128)!==0,T=x.rendering,T===null)if(c)Va(x,!1);else{if(Mn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=jo(n),T!==null){for(i.flags|=128,Va(x,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)x=a,n=c,x.flags&=14680066,T=x.alternate,T===null?(x.childLanes=0,x.lanes=n,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=T.childLanes,x.lanes=T.lanes,x.child=T.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=T.memoizedProps,x.memoizedState=T.memoizedState,x.updateQueue=T.updateQueue,x.type=T.type,n=T.dependencies,x.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Qt(ln,ln.current&1|2),i.child}n=n.sibling}x.tail!==null&&Jt()>$s&&(i.flags|=128,c=!0,Va(x,!1),i.lanes=4194304)}else{if(!c)if(n=jo(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Va(x,!0),x.tail===null&&x.tailMode==="hidden"&&!T.alternate&&!an)return Hn(i),null}else 2*Jt()-x.renderingStartTime>$s&&a!==1073741824&&(i.flags|=128,c=!0,Va(x,!1),i.lanes=4194304);x.isBackwards?(T.sibling=i.child,i.child=T):(a=x.last,a!==null?a.sibling=T:i.child=T,x.last=T)}return x.tail!==null?(i=x.tail,x.rendering=i,x.tail=i.sibling,x.renderingStartTime=Jt(),i.sibling=null,a=ln.current,Qt(ln,c?a&1|2:a&1),i):(Hn(i),null);case 22:case 23:return Pu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(oi&1073741824)!==0&&(Hn(i),i.subtreeFlags&6&&(i.flags|=8192)):Hn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function ev(n,i){switch(Bc(i),i.tag){case 1:return Zn(i.type)&&Io(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Vs(),nn(Kn),nn(On),Qc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Zc(i),null;case 13:if(nn(ln),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Os()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return nn(ln),null;case 4:return Vs(),null;case 10:return Xc(i.type._context),null;case 22:case 23:return Pu(),null;case 24:return null;default:return null}}var el=!1,Gn=!1,tv=typeof WeakSet=="function"?WeakSet:Set,tt=null;function js(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){hn(n,i,c)}else a.current=null}function _u(n,i,a){try{a()}catch(c){hn(n,i,c)}}var Tp=!1;function nv(n,i){if(Pc=yo,n=rh(),Mc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,x=c.focusNode;c=c.focusOffset;try{a.nodeType,x.nodeType}catch{a=null;break e}var T=0,W=-1,Z=-1,he=0,Le=0,ze=n,De=null;t:for(;;){for(var Qe;ze!==a||f!==0&&ze.nodeType!==3||(W=T+f),ze!==x||c!==0&&ze.nodeType!==3||(Z=T+c),ze.nodeType===3&&(T+=ze.nodeValue.length),(Qe=ze.firstChild)!==null;)De=ze,ze=Qe;for(;;){if(ze===n)break t;if(De===a&&++he===f&&(W=T),De===x&&++Le===c&&(Z=T),(Qe=ze.nextSibling)!==null)break;ze=De,De=ze.parentNode}ze=Qe}a=W===-1||Z===-1?null:{start:W,end:Z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Dc={focusedElem:n,selectionRange:a},yo=!1,tt=i;tt!==null;)if(i=tt,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,tt=n;else for(;tt!==null;){i=tt;try{var st=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(st!==null){var lt=st.memoizedProps,gn=st.memoizedState,le=i.stateNode,te=le.getSnapshotBeforeUpdate(i.elementType===i.type?lt:Mi(i.type,lt),gn);le.__reactInternalSnapshotBeforeUpdate=te}break;case 3:var ue=i.stateNode.containerInfo;ue.nodeType===1?ue.textContent="":ue.nodeType===9&&ue.documentElement&&ue.removeChild(ue.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ge){hn(i,i.return,Ge)}if(n=i.sibling,n!==null){n.return=i.return,tt=n;break}tt=i.return}return st=Tp,Tp=!1,st}function Wa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var x=f.destroy;f.destroy=void 0,x!==void 0&&_u(i,a,x)}f=f.next}while(f!==c)}}function tl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function yu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Ap(n){var i=n.alternate;i!==null&&(n.alternate=null,Ap(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Oi],delete i[La],delete i[kc],delete i[zx],delete i[Ox])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Cp(n){return n.tag===5||n.tag===3||n.tag===4}function Rp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Cp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Su(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Do));else if(c!==4&&(n=n.child,n!==null))for(Su(n,i,a),n=n.sibling;n!==null;)Su(n,i,a),n=n.sibling}function bu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(bu(n,i,a),n=n.sibling;n!==null;)bu(n,i,a),n=n.sibling}var Dn=null,wi=!1;function Nr(n,i,a){for(a=a.child;a!==null;)Np(n,i,a),a=a.sibling}function Np(n,i,a){if(ce&&typeof ce.onCommitFiberUnmount=="function")try{ce.onCommitFiberUnmount(q,a)}catch{}switch(a.tag){case 5:Gn||js(a,i);case 6:var c=Dn,f=wi;Dn=null,Nr(n,i,a),Dn=c,wi=f,Dn!==null&&(wi?(n=Dn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Dn.removeChild(a.stateNode));break;case 18:Dn!==null&&(wi?(n=Dn,a=a.stateNode,n.nodeType===8?Uc(n.parentNode,a):n.nodeType===1&&Uc(n,a),ba(n)):Uc(Dn,a.stateNode));break;case 4:c=Dn,f=wi,Dn=a.stateNode.containerInfo,wi=!0,Nr(n,i,a),Dn=c,wi=f;break;case 0:case 11:case 14:case 15:if(!Gn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var x=f,T=x.destroy;x=x.tag,T!==void 0&&((x&2)!==0||(x&4)!==0)&&_u(a,i,T),f=f.next}while(f!==c)}Nr(n,i,a);break;case 1:if(!Gn&&(js(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(W){hn(a,i,W)}Nr(n,i,a);break;case 21:Nr(n,i,a);break;case 22:a.mode&1?(Gn=(c=Gn)||a.memoizedState!==null,Nr(n,i,a),Gn=c):Nr(n,i,a);break;default:Nr(n,i,a)}}function Pp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new tv),i.forEach(function(c){var f=dv.bind(null,n,c);a.has(c)||(a.add(c),c.then(f,f))})}}function Ei(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var x=n,T=i,W=T;e:for(;W!==null;){switch(W.tag){case 5:Dn=W.stateNode,wi=!1;break e;case 3:Dn=W.stateNode.containerInfo,wi=!0;break e;case 4:Dn=W.stateNode.containerInfo,wi=!0;break e}W=W.return}if(Dn===null)throw Error(t(160));Np(x,T,f),Dn=null,wi=!1;var Z=f.alternate;Z!==null&&(Z.return=null),f.return=null}catch(he){hn(f,i,he)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Dp(i,n),i=i.sibling}function Dp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ei(i,n),Gi(n),c&4){try{Wa(3,n,n.return),tl(3,n)}catch(lt){hn(n,n.return,lt)}try{Wa(5,n,n.return)}catch(lt){hn(n,n.return,lt)}}break;case 1:Ei(i,n),Gi(n),c&512&&a!==null&&js(a,a.return);break;case 5:if(Ei(i,n),Gi(n),c&512&&a!==null&&js(a,a.return),n.flags&32){var f=n.stateNode;try{qe(f,"")}catch(lt){hn(n,n.return,lt)}}if(c&4&&(f=n.stateNode,f!=null)){var x=n.memoizedProps,T=a!==null?a.memoizedProps:x,W=n.type,Z=n.updateQueue;if(n.updateQueue=null,Z!==null)try{W==="input"&&x.type==="radio"&&x.name!=null&&_t(f,x),ke(W,T);var he=ke(W,x);for(T=0;T<Z.length;T+=2){var Le=Z[T],ze=Z[T+1];Le==="style"?ne(f,ze):Le==="dangerouslySetInnerHTML"?Mt(f,ze):Le==="children"?qe(f,ze):O(f,Le,ze,he)}switch(W){case"input":Et(f,x);break;case"textarea":Q(f,x);break;case"select":var De=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!x.multiple;var Qe=x.value;Qe!=null?Kt(f,!!x.multiple,Qe,!1):De!==!!x.multiple&&(x.defaultValue!=null?Kt(f,!!x.multiple,x.defaultValue,!0):Kt(f,!!x.multiple,x.multiple?[]:"",!1))}f[La]=x}catch(lt){hn(n,n.return,lt)}}break;case 6:if(Ei(i,n),Gi(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,x=n.memoizedProps;try{f.nodeValue=x}catch(lt){hn(n,n.return,lt)}}break;case 3:if(Ei(i,n),Gi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ba(i.containerInfo)}catch(lt){hn(n,n.return,lt)}break;case 4:Ei(i,n),Gi(n);break;case 13:Ei(i,n),Gi(n),f=n.child,f.flags&8192&&(x=f.memoizedState!==null,f.stateNode.isHidden=x,!x||f.alternate!==null&&f.alternate.memoizedState!==null||(Eu=Jt())),c&4&&Pp(n);break;case 22:if(Le=a!==null&&a.memoizedState!==null,n.mode&1?(Gn=(he=Gn)||Le,Ei(i,n),Gn=he):Ei(i,n),Gi(n),c&8192){if(he=n.memoizedState!==null,(n.stateNode.isHidden=he)&&!Le&&(n.mode&1)!==0)for(tt=n,Le=n.child;Le!==null;){for(ze=tt=Le;tt!==null;){switch(De=tt,Qe=De.child,De.tag){case 0:case 11:case 14:case 15:Wa(4,De,De.return);break;case 1:js(De,De.return);var st=De.stateNode;if(typeof st.componentWillUnmount=="function"){c=De,a=De.return;try{i=c,st.props=i.memoizedProps,st.state=i.memoizedState,st.componentWillUnmount()}catch(lt){hn(c,a,lt)}}break;case 5:js(De,De.return);break;case 22:if(De.memoizedState!==null){Up(ze);continue}}Qe!==null?(Qe.return=De,tt=Qe):Up(ze)}Le=Le.sibling}e:for(Le=null,ze=n;;){if(ze.tag===5){if(Le===null){Le=ze;try{f=ze.stateNode,he?(x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(W=ze.stateNode,Z=ze.memoizedProps.style,T=Z!=null&&Z.hasOwnProperty("display")?Z.display:null,W.style.display=E("display",T))}catch(lt){hn(n,n.return,lt)}}}else if(ze.tag===6){if(Le===null)try{ze.stateNode.nodeValue=he?"":ze.memoizedProps}catch(lt){hn(n,n.return,lt)}}else if((ze.tag!==22&&ze.tag!==23||ze.memoizedState===null||ze===n)&&ze.child!==null){ze.child.return=ze,ze=ze.child;continue}if(ze===n)break e;for(;ze.sibling===null;){if(ze.return===null||ze.return===n)break e;Le===ze&&(Le=null),ze=ze.return}Le===ze&&(Le=null),ze.sibling.return=ze.return,ze=ze.sibling}}break;case 19:Ei(i,n),Gi(n),c&4&&Pp(n);break;case 21:break;default:Ei(i,n),Gi(n)}}function Gi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Cp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(qe(f,""),c.flags&=-33);var x=Rp(n);bu(n,x,f);break;case 3:case 4:var T=c.stateNode.containerInfo,W=Rp(n);Su(n,W,T);break;default:throw Error(t(161))}}catch(Z){hn(n,n.return,Z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function iv(n,i,a){tt=n,Lp(n)}function Lp(n,i,a){for(var c=(n.mode&1)!==0;tt!==null;){var f=tt,x=f.child;if(f.tag===22&&c){var T=f.memoizedState!==null||el;if(!T){var W=f.alternate,Z=W!==null&&W.memoizedState!==null||Gn;W=el;var he=Gn;if(el=T,(Gn=Z)&&!he)for(tt=f;tt!==null;)T=tt,Z=T.child,T.tag===22&&T.memoizedState!==null?kp(f):Z!==null?(Z.return=T,tt=Z):kp(f);for(;x!==null;)tt=x,Lp(x),x=x.sibling;tt=f,el=W,Gn=he}Ip(n)}else(f.subtreeFlags&8772)!==0&&x!==null?(x.return=f,tt=x):Ip(n)}}function Ip(n){for(;tt!==null;){var i=tt;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Gn||tl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Gn)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:Mi(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var x=i.updateQueue;x!==null&&Uh(i,x,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Uh(i,T,a)}break;case 5:var W=i.stateNode;if(a===null&&i.flags&4){a=W;var Z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":Z.autoFocus&&a.focus();break;case"img":Z.src&&(a.src=Z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var he=i.alternate;if(he!==null){var Le=he.memoizedState;if(Le!==null){var ze=Le.dehydrated;ze!==null&&ba(ze)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Gn||i.flags&512&&yu(i)}catch(De){hn(i,i.return,De)}}if(i===n){tt=null;break}if(a=i.sibling,a!==null){a.return=i.return,tt=a;break}tt=i.return}}function Up(n){for(;tt!==null;){var i=tt;if(i===n){tt=null;break}var a=i.sibling;if(a!==null){a.return=i.return,tt=a;break}tt=i.return}}function kp(n){for(;tt!==null;){var i=tt;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{tl(4,i)}catch(Z){hn(i,a,Z)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(Z){hn(i,f,Z)}}var x=i.return;try{yu(i)}catch(Z){hn(i,x,Z)}break;case 5:var T=i.return;try{yu(i)}catch(Z){hn(i,T,Z)}}}catch(Z){hn(i,i.return,Z)}if(i===n){tt=null;break}var W=i.sibling;if(W!==null){W.return=i.return,tt=W;break}tt=i.return}}var rv=Math.ceil,nl=D.ReactCurrentDispatcher,Mu=D.ReactCurrentOwner,gi=D.ReactCurrentBatchConfig,Ht=0,Cn=null,xn=null,Ln=0,oi=0,Xs=Er(0),Mn=0,ja=null,as=0,il=0,wu=0,Xa=null,Qn=null,Eu=0,$s=1/0,ar=null,rl=!1,Tu=null,Pr=null,sl=!1,Dr=null,al=0,$a=0,Au=null,ol=-1,ll=0;function Yn(){return(Ht&6)!==0?Jt():ol!==-1?ol:ol=Jt()}function Lr(n){return(n.mode&1)===0?1:(Ht&2)!==0&&Ln!==0?Ln&-Ln:Hx.transition!==null?(ll===0&&(ll=Yt()),ll):(n=ut,n!==0||(n=window.event,n=n===void 0?16:zf(n.type)),n)}function Ti(n,i,a,c){if(50<$a)throw $a=0,Au=null,Error(t(185));fn(n,a,c),((Ht&2)===0||n!==Cn)&&(n===Cn&&((Ht&2)===0&&(il|=a),Mn===4&&Ir(n,Ln)),ei(n,c),a===1&&Ht===0&&(i.mode&1)===0&&($s=Jt()+500,ko&&Ar()))}function ei(n,i){var a=n.callbackNode;Ct(n,i);var c=Tt(n,n===Cn?Ln:0);if(c===0)a!==null&&xr(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&xr(a),i===1)n.tag===0?Bx(zp.bind(null,n)):Mh(zp.bind(null,n)),kx(function(){(Ht&6)===0&&Ar()}),a=null;else{switch(Fi(c)){case 1:a=Jr;break;case 4:a=Es;break;case 16:a=vr;break;case 536870912:a=C;break;default:a=vr}a=Xp(a,Fp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Fp(n,i){if(ol=-1,ll=0,(Ht&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ys()&&n.callbackNode!==a)return null;var c=Tt(n,n===Cn?Ln:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=cl(n,c);else{i=c;var f=Ht;Ht|=2;var x=Bp();(Cn!==n||Ln!==i)&&(ar=null,$s=Jt()+500,ls(n,i));do try{ov();break}catch(W){Op(n,W)}while(!0);jc(),nl.current=x,Ht=f,xn!==null?i=0:(Cn=null,Ln=0,i=Mn)}if(i!==0){if(i===2&&(f=sn(n),f!==0&&(c=f,i=Cu(n,f))),i===1)throw a=ja,ls(n,0),Ir(n,c),ei(n,Jt()),a;if(i===6)Ir(n,c);else{if(f=n.current.alternate,(c&30)===0&&!sv(f)&&(i=cl(n,c),i===2&&(x=sn(n),x!==0&&(c=x,i=Cu(n,x))),i===1))throw a=ja,ls(n,0),Ir(n,c),ei(n,Jt()),a;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:cs(n,Qn,ar);break;case 3:if(Ir(n,c),(c&130023424)===c&&(i=Eu+500-Jt(),10<i)){if(Tt(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){Yn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Ic(cs.bind(null,n,Qn,ar),i);break}cs(n,Qn,ar);break;case 4:if(Ir(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var T=31-ae(c);x=1<<T,T=i[T],T>f&&(f=T),c&=~x}if(c=f,c=Jt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*rv(c/1960))-c,10<c){n.timeoutHandle=Ic(cs.bind(null,n,Qn,ar),c);break}cs(n,Qn,ar);break;case 5:cs(n,Qn,ar);break;default:throw Error(t(329))}}}return ei(n,Jt()),n.callbackNode===a?Fp.bind(null,n):null}function Cu(n,i){var a=Xa;return n.current.memoizedState.isDehydrated&&(ls(n,i).flags|=256),n=cl(n,i),n!==2&&(i=Qn,Qn=a,i!==null&&Ru(i)),n}function Ru(n){Qn===null?Qn=n:Qn.push.apply(Qn,n)}function sv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],x=f.getSnapshot;f=f.value;try{if(!Si(x(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ir(n,i){for(i&=~wu,i&=~il,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-ae(i),c=1<<a;n[a]=-1,i&=~c}}function zp(n){if((Ht&6)!==0)throw Error(t(327));Ys();var i=Tt(n,0);if((i&1)===0)return ei(n,Jt()),null;var a=cl(n,i);if(n.tag!==0&&a===2){var c=sn(n);c!==0&&(i=c,a=Cu(n,c))}if(a===1)throw a=ja,ls(n,0),Ir(n,i),ei(n,Jt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,cs(n,Qn,ar),ei(n,Jt()),null}function Nu(n,i){var a=Ht;Ht|=1;try{return n(i)}finally{Ht=a,Ht===0&&($s=Jt()+500,ko&&Ar())}}function os(n){Dr!==null&&Dr.tag===0&&(Ht&6)===0&&Ys();var i=Ht;Ht|=1;var a=gi.transition,c=ut;try{if(gi.transition=null,ut=1,n)return n()}finally{ut=c,gi.transition=a,Ht=i,(Ht&6)===0&&Ar()}}function Pu(){oi=Xs.current,nn(Xs)}function ls(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Ux(a)),xn!==null)for(a=xn.return;a!==null;){var c=a;switch(Bc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Io();break;case 3:Vs(),nn(Kn),nn(On),Qc();break;case 5:Zc(c);break;case 4:Vs();break;case 13:nn(ln);break;case 19:nn(ln);break;case 10:Xc(c.type._context);break;case 22:case 23:Pu()}a=a.return}if(Cn=n,xn=n=Ur(n.current,null),Ln=oi=i,Mn=0,ja=null,wu=il=as=0,Qn=Xa=null,is!==null){for(i=0;i<is.length;i++)if(a=is[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,x=a.pending;if(x!==null){var T=x.next;x.next=f,c.next=T}a.pending=c}is=null}return n}function Op(n,i){do{var a=xn;try{if(jc(),Xo.current=Ko,$o){for(var c=cn.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}$o=!1}if(ss=0,An=bn=cn=null,Oa=!1,Ba=0,Mu.current=null,a===null||a.return===null){Mn=1,ja=i,xn=null;break}e:{var x=n,T=a.return,W=a,Z=i;if(i=Ln,W.flags|=32768,Z!==null&&typeof Z=="object"&&typeof Z.then=="function"){var he=Z,Le=W,ze=Le.tag;if((Le.mode&1)===0&&(ze===0||ze===11||ze===15)){var De=Le.alternate;De?(Le.updateQueue=De.updateQueue,Le.memoizedState=De.memoizedState,Le.lanes=De.lanes):(Le.updateQueue=null,Le.memoizedState=null)}var Qe=up(T);if(Qe!==null){Qe.flags&=-257,dp(Qe,T,W,x,i),Qe.mode&1&&cp(x,he,i),i=Qe,Z=he;var st=i.updateQueue;if(st===null){var lt=new Set;lt.add(Z),i.updateQueue=lt}else st.add(Z);break e}else{if((i&1)===0){cp(x,he,i),Du();break e}Z=Error(t(426))}}else if(an&&W.mode&1){var gn=up(T);if(gn!==null){(gn.flags&65536)===0&&(gn.flags|=256),dp(gn,T,W,x,i),Vc(Ws(Z,W));break e}}x=Z=Ws(Z,W),Mn!==4&&(Mn=2),Xa===null?Xa=[x]:Xa.push(x),x=T;do{switch(x.tag){case 3:x.flags|=65536,i&=-i,x.lanes|=i;var le=op(x,Z,i);Ih(x,le);break e;case 1:W=Z;var te=x.type,ue=x.stateNode;if((x.flags&128)===0&&(typeof te.getDerivedStateFromError=="function"||ue!==null&&typeof ue.componentDidCatch=="function"&&(Pr===null||!Pr.has(ue)))){x.flags|=65536,i&=-i,x.lanes|=i;var Ge=lp(x,W,i);Ih(x,Ge);break e}}x=x.return}while(x!==null)}Gp(a)}catch(dt){i=dt,xn===a&&a!==null&&(xn=a=a.return);continue}break}while(!0)}function Bp(){var n=nl.current;return nl.current=Ko,n===null?Ko:n}function Du(){(Mn===0||Mn===3||Mn===2)&&(Mn=4),Cn===null||(as&268435455)===0&&(il&268435455)===0||Ir(Cn,Ln)}function cl(n,i){var a=Ht;Ht|=2;var c=Bp();(Cn!==n||Ln!==i)&&(ar=null,ls(n,i));do try{av();break}catch(f){Op(n,f)}while(!0);if(jc(),Ht=a,nl.current=c,xn!==null)throw Error(t(261));return Cn=null,Ln=0,Mn}function av(){for(;xn!==null;)Hp(xn)}function ov(){for(;xn!==null&&!Ji();)Hp(xn)}function Hp(n){var i=jp(n.alternate,n,oi);n.memoizedProps=n.pendingProps,i===null?Gp(n):xn=i,Mu.current=null}function Gp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Qx(a,i,oi),a!==null){xn=a;return}}else{if(a=ev(a,i),a!==null){a.flags&=32767,xn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Mn=6,xn=null;return}}if(i=i.sibling,i!==null){xn=i;return}xn=i=n}while(i!==null);Mn===0&&(Mn=5)}function cs(n,i,a){var c=ut,f=gi.transition;try{gi.transition=null,ut=1,lv(n,i,a,c)}finally{gi.transition=f,ut=c}return null}function lv(n,i,a,c){do Ys();while(Dr!==null);if((Ht&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var x=a.lanes|a.childLanes;if(rt(n,x),n===Cn&&(xn=Cn=null,Ln=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||sl||(sl=!0,Xp(vr,function(){return Ys(),null})),x=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||x){x=gi.transition,gi.transition=null;var T=ut;ut=1;var W=Ht;Ht|=4,Mu.current=null,nv(n,a),Dp(a,n),Cx(Dc),yo=!!Pc,Dc=Pc=null,n.current=a,iv(a),Ms(),Ht=W,ut=T,gi.transition=x}else n.current=a;if(sl&&(sl=!1,Dr=n,al=f),x=n.pendingLanes,x===0&&(Pr=null),oe(a.stateNode),ei(n,Jt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(rl)throw rl=!1,n=Tu,Tu=null,n;return(al&1)!==0&&n.tag!==0&&Ys(),x=n.pendingLanes,(x&1)!==0?n===Au?$a++:($a=0,Au=n):$a=0,Ar(),null}function Ys(){if(Dr!==null){var n=Fi(al),i=gi.transition,a=ut;try{if(gi.transition=null,ut=16>n?16:n,Dr===null)var c=!1;else{if(n=Dr,Dr=null,al=0,(Ht&6)!==0)throw Error(t(331));var f=Ht;for(Ht|=4,tt=n.current;tt!==null;){var x=tt,T=x.child;if((tt.flags&16)!==0){var W=x.deletions;if(W!==null){for(var Z=0;Z<W.length;Z++){var he=W[Z];for(tt=he;tt!==null;){var Le=tt;switch(Le.tag){case 0:case 11:case 15:Wa(8,Le,x)}var ze=Le.child;if(ze!==null)ze.return=Le,tt=ze;else for(;tt!==null;){Le=tt;var De=Le.sibling,Qe=Le.return;if(Ap(Le),Le===he){tt=null;break}if(De!==null){De.return=Qe,tt=De;break}tt=Qe}}}var st=x.alternate;if(st!==null){var lt=st.child;if(lt!==null){st.child=null;do{var gn=lt.sibling;lt.sibling=null,lt=gn}while(lt!==null)}}tt=x}}if((x.subtreeFlags&2064)!==0&&T!==null)T.return=x,tt=T;else e:for(;tt!==null;){if(x=tt,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:Wa(9,x,x.return)}var le=x.sibling;if(le!==null){le.return=x.return,tt=le;break e}tt=x.return}}var te=n.current;for(tt=te;tt!==null;){T=tt;var ue=T.child;if((T.subtreeFlags&2064)!==0&&ue!==null)ue.return=T,tt=ue;else e:for(T=te;tt!==null;){if(W=tt,(W.flags&2048)!==0)try{switch(W.tag){case 0:case 11:case 15:tl(9,W)}}catch(dt){hn(W,W.return,dt)}if(W===T){tt=null;break e}var Ge=W.sibling;if(Ge!==null){Ge.return=W.return,tt=Ge;break e}tt=W.return}}if(Ht=f,Ar(),ce&&typeof ce.onPostCommitFiberRoot=="function")try{ce.onPostCommitFiberRoot(q,n)}catch{}c=!0}return c}finally{ut=a,gi.transition=i}}return!1}function Vp(n,i,a){i=Ws(a,i),i=op(n,i,1),n=Rr(n,i,1),i=Yn(),n!==null&&(fn(n,1,i),ei(n,i))}function hn(n,i,a){if(n.tag===3)Vp(n,n,a);else for(;i!==null;){if(i.tag===3){Vp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Pr===null||!Pr.has(c))){n=Ws(a,n),n=lp(i,n,1),i=Rr(i,n,1),n=Yn(),i!==null&&(fn(i,1,n),ei(i,n));break}}i=i.return}}function cv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Yn(),n.pingedLanes|=n.suspendedLanes&a,Cn===n&&(Ln&a)===a&&(Mn===4||Mn===3&&(Ln&130023424)===Ln&&500>Jt()-Eu?ls(n,0):wu|=a),ei(n,i)}function Wp(n,i){i===0&&((n.mode&1)===0?i=1:(i=nt,nt<<=1,(nt&130023424)===0&&(nt=4194304)));var a=Yn();n=ir(n,i),n!==null&&(fn(n,i,a),ei(n,a))}function uv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Wp(n,a)}function dv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Wp(n,a)}var jp;jp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Kn.current)Jn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Jn=!1,Jx(n,i,a);Jn=(n.flags&131072)!==0}else Jn=!1,an&&(i.flags&1048576)!==0&&wh(i,zo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Qo(n,i),n=i.pendingProps;var f=ks(i,On.current);Gs(i,a),f=nu(null,i,c,n,f,a);var x=iu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Zn(c)?(x=!0,Uo(i)):x=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,qc(i),f.updater=Zo,i.stateNode=f,f._reactInternals=i,cu(i,c,n,a),i=hu(null,i,c,!0,x,a)):(i.tag=0,an&&x&&Oc(i),$n(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Qo(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=hv(c),n=Mi(c,n),f){case 0:i=fu(null,i,c,n,a);break e;case 1:i=xp(null,i,c,n,a);break e;case 11:i=fp(null,i,c,n,a);break e;case 14:i=hp(null,i,c,Mi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Mi(c,f),fu(n,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Mi(c,f),xp(n,i,c,f,a);case 3:e:{if(vp(i),n===null)throw Error(t(387));c=i.pendingProps,x=i.memoizedState,f=x.element,Lh(n,i),Wo(i,c,null,a);var T=i.memoizedState;if(c=T.element,x.isDehydrated)if(x={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=x,i.memoizedState=x,i.flags&256){f=Ws(Error(t(423)),i),i=_p(n,i,c,a,f);break e}else if(c!==f){f=Ws(Error(t(424)),i),i=_p(n,i,c,a,f);break e}else for(ai=wr(i.stateNode.containerInfo.firstChild),si=i,an=!0,bi=null,a=Ph(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Os(),c===f){i=sr(n,i,a);break e}$n(n,i,c,a)}i=i.child}return i;case 5:return kh(i),n===null&&Gc(i),c=i.type,f=i.pendingProps,x=n!==null?n.memoizedProps:null,T=f.children,Lc(c,f)?T=null:x!==null&&Lc(c,x)&&(i.flags|=32),gp(n,i),$n(n,i,T,a),i.child;case 6:return n===null&&Gc(i),null;case 13:return yp(n,i,a);case 4:return Kc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Bs(i,null,c,a):$n(n,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Mi(c,f),fp(n,i,c,f,a);case 7:return $n(n,i,i.pendingProps,a),i.child;case 8:return $n(n,i,i.pendingProps.children,a),i.child;case 12:return $n(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,x=i.memoizedProps,T=f.value,Qt(Ho,c._currentValue),c._currentValue=T,x!==null)if(Si(x.value,T)){if(x.children===f.children&&!Kn.current){i=sr(n,i,a);break e}}else for(x=i.child,x!==null&&(x.return=i);x!==null;){var W=x.dependencies;if(W!==null){T=x.child;for(var Z=W.firstContext;Z!==null;){if(Z.context===c){if(x.tag===1){Z=rr(-1,a&-a),Z.tag=2;var he=x.updateQueue;if(he!==null){he=he.shared;var Le=he.pending;Le===null?Z.next=Z:(Z.next=Le.next,Le.next=Z),he.pending=Z}}x.lanes|=a,Z=x.alternate,Z!==null&&(Z.lanes|=a),$c(x.return,a,i),W.lanes|=a;break}Z=Z.next}}else if(x.tag===10)T=x.type===i.type?null:x.child;else if(x.tag===18){if(T=x.return,T===null)throw Error(t(341));T.lanes|=a,W=T.alternate,W!==null&&(W.lanes|=a),$c(T,a,i),T=x.sibling}else T=x.child;if(T!==null)T.return=x;else for(T=x;T!==null;){if(T===i){T=null;break}if(x=T.sibling,x!==null){x.return=T.return,T=x;break}T=T.return}x=T}$n(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Gs(i,a),f=pi(f),c=c(f),i.flags|=1,$n(n,i,c,a),i.child;case 14:return c=i.type,f=Mi(c,i.pendingProps),f=Mi(c.type,f),hp(n,i,c,f,a);case 15:return pp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Mi(c,f),Qo(n,i),i.tag=1,Zn(c)?(n=!0,Uo(i)):n=!1,Gs(i,a),sp(i,c,f),cu(i,c,f,a),hu(null,i,c,!0,n,a);case 19:return bp(n,i,a);case 22:return mp(n,i,a)}throw Error(t(156,i.tag))};function Xp(n,i){return ki(n,i)}function fv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xi(n,i,a,c){return new fv(n,i,a,c)}function Lu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function hv(n){if(typeof n=="function")return Lu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===B)return 11;if(n===H)return 14}return 2}function Ur(n,i){var a=n.alternate;return a===null?(a=xi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ul(n,i,a,c,f,x){var T=2;if(c=n,typeof n=="function")Lu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case M:return us(a.children,f,x,i);case N:T=8,f|=8;break;case J:return n=xi(12,a,i,f|2),n.elementType=J,n.lanes=x,n;case k:return n=xi(13,a,i,f),n.elementType=k,n.lanes=x,n;case V:return n=xi(19,a,i,f),n.elementType=V,n.lanes=x,n;case ee:return dl(a,f,x,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case $:T=10;break e;case j:T=9;break e;case B:T=11;break e;case H:T=14;break e;case se:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=xi(T,a,i,f),i.elementType=n,i.type=c,i.lanes=x,i}function us(n,i,a,c){return n=xi(7,n,c,i),n.lanes=a,n}function dl(n,i,a,c){return n=xi(22,n,c,i),n.elementType=ee,n.lanes=a,n.stateNode={isHidden:!1},n}function Iu(n,i,a){return n=xi(6,n,null,i),n.lanes=a,n}function Uu(n,i,a){return i=xi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function pv(n,i,a,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jt(0),this.expirationTimes=jt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jt(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function ku(n,i,a,c,f,x,T,W,Z){return n=new pv(n,i,a,W,Z),i===1?(i=1,x===!0&&(i|=8)):i=0,x=xi(3,null,null,i),n.current=x,x.stateNode=n,x.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},qc(x),n}function mv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function $p(n){if(!n)return Tr;n=n._reactInternals;e:{if(St(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Zn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Zn(a))return Sh(n,a,i)}return i}function Yp(n,i,a,c,f,x,T,W,Z){return n=ku(a,c,!0,n,f,x,T,W,Z),n.context=$p(null),a=n.current,c=Yn(),f=Lr(a),x=rr(c,f),x.callback=i??null,Rr(a,x,f),n.current.lanes=f,fn(n,f,c),ei(n,c),n}function fl(n,i,a,c){var f=i.current,x=Yn(),T=Lr(f);return a=$p(a),i.context===null?i.context=a:i.pendingContext=a,i=rr(x,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Rr(f,i,T),n!==null&&(Ti(n,f,T,x),Vo(n,f,T)),T}function hl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function qp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Fu(n,i){qp(n,i),(n=n.alternate)&&qp(n,i)}function gv(){return null}var Kp=typeof reportError=="function"?reportError:function(n){console.error(n)};function zu(n){this._internalRoot=n}pl.prototype.render=zu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));fl(n,i,null,null)},pl.prototype.unmount=zu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;os(function(){fl(null,n,null,null)}),i[Qi]=null}};function pl(n){this._internalRoot=n}pl.prototype.unstable_scheduleHydration=function(n){if(n){var i=zi();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Sr.length&&i!==0&&i<Sr[a].priority;a++);Sr.splice(a,0,n),a===0&&kf(n)}};function Ou(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ml(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Zp(){}function xv(n,i,a,c,f){if(f){if(typeof c=="function"){var x=c;c=function(){var he=hl(T);x.call(he)}}var T=Yp(i,c,n,0,null,!1,!1,"",Zp);return n._reactRootContainer=T,n[Qi]=T.current,Pa(n.nodeType===8?n.parentNode:n),os(),T}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var W=c;c=function(){var he=hl(Z);W.call(he)}}var Z=ku(n,0,!1,null,null,!1,!1,"",Zp);return n._reactRootContainer=Z,n[Qi]=Z.current,Pa(n.nodeType===8?n.parentNode:n),os(function(){fl(i,Z,a,c)}),Z}function gl(n,i,a,c,f){var x=a._reactRootContainer;if(x){var T=x;if(typeof f=="function"){var W=f;f=function(){var Z=hl(T);W.call(Z)}}fl(i,T,n,f)}else T=xv(a,i,n,f,c);return hl(T)}Sn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=vt(i.pendingLanes);a!==0&&(yn(i,a|1),ei(i,Jt()),(Ht&6)===0&&($s=Jt()+500,Ar()))}break;case 13:os(function(){var c=ir(n,1);if(c!==null){var f=Yn();Ti(c,n,1,f)}}),Fu(n,1)}},_r=function(n){if(n.tag===13){var i=ir(n,134217728);if(i!==null){var a=Yn();Ti(i,n,134217728,a)}Fu(n,134217728)}},yi=function(n){if(n.tag===13){var i=Lr(n),a=ir(n,i);if(a!==null){var c=Yn();Ti(a,n,i,c)}Fu(n,i)}},zi=function(){return ut},It=function(n,i){var a=ut;try{return ut=n,i()}finally{ut=a}},me=function(n,i,a){switch(i){case"input":if(Et(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var f=Lo(c);if(!f)throw Error(t(90));we(c),Et(c,f)}}}break;case"textarea":Q(n,a);break;case"select":i=a.value,i!=null&&Kt(n,!!a.multiple,i,!1)}},Ae=Nu,Pe=os;var vv={usingClientEntryPoint:!1,Events:[Ia,Is,Lo,re,Ee,Nu]},Ya={findFiberByHostInstance:Qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_v={bundleType:Ya.bundleType,version:Ya.version,rendererPackageName:Ya.rendererPackageName,rendererConfig:Ya.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=pn(n),n===null?null:n.stateNode},findFiberByHostInstance:Ya.findFiberByHostInstance||gv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xl.isDisabled&&xl.supportsFiber)try{q=xl.inject(_v),ce=xl}catch{}}return ti.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vv,ti.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ou(i))throw Error(t(200));return mv(n,i,null,a)},ti.createRoot=function(n,i){if(!Ou(n))throw Error(t(299));var a=!1,c="",f=Kp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=ku(n,1,!1,null,null,a,!1,c,f),n[Qi]=i.current,Pa(n.nodeType===8?n.parentNode:n),new zu(i)},ti.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=pn(i),n=n===null?null:n.stateNode,n},ti.flushSync=function(n){return os(n)},ti.hydrate=function(n,i,a){if(!ml(i))throw Error(t(200));return gl(null,n,i,!0,a)},ti.hydrateRoot=function(n,i,a){if(!Ou(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,x="",T=Kp;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(x=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=Yp(i,null,n,1,a??null,f,!1,x,T),n[Qi]=i.current,Pa(n),c)for(n=0;n<c.length;n++)a=c[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new pl(i)},ti.render=function(n,i,a){if(!ml(i))throw Error(t(200));return gl(null,n,i,!1,a)},ti.unmountComponentAtNode=function(n){if(!ml(n))throw Error(t(40));return n._reactRootContainer?(os(function(){gl(null,null,n,!1,function(){n._reactRootContainer=null,n[Qi]=null})}),!0):!1},ti.unstable_batchedUpdates=Nu,ti.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!ml(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return gl(n,i,a,!1,c)},ti.version="18.3.1-next-f1338f8080-20240426",ti}var sm;function Nv(){if(sm)return Gu.exports;sm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Gu.exports=Rv(),Gu.exports}var am;function Pv(){if(am)return vl;am=1;var s=Nv();return vl.createRoot=s.createRoot,vl.hydrateRoot=s.hydrateRoot,vl}var Dv=Pv();const Lv=a0(Dv),ca=[{id:"brown-noise",title:"Brownian Deep Focus",category:"Deep Focus",tagline:"Warm sub-bass rumble for continuous coding & writing",description:"Mathematically integrated brownian spectrum with deep 450Hz low-pass rolloff. Proven to mask background distractions and alleviate cognitive fatigue.",frequency:"0 – 450 Hz Brown Spectrum",accentColor:"#f59e0b"},{id:"celestial-drone",title:"Celestial 432Hz Drone",category:"Mindfulness",tagline:"Harmonically tuned meditative Tibetan chords",description:"Multi-oscillator harmonic chord centered around the natural 432Hz tuning fork with gentle phase chorus and slow breathing resonance.",frequency:"432 Hz Pythagorean Fundamental",accentColor:"#a855f7"},{id:"binaural-gamma",title:"Gamma 40Hz Flow State",category:"Cognitive Flow",tagline:"High-cognition binaural carrier for intense problem-solving",description:"Stereo carrier tones (200Hz L / 240Hz R) inducing 40Hz gamma oscillations in the cerebral cortex, associated with high-level information processing and recall.",frequency:"40 Hz Gamma Difference Wave",accentColor:"#38bdf8"},{id:"binaural-alpha",title:"Alpha 10Hz Quiet Mind",category:"Mindfulness",tagline:"Calm relaxed alertness for reading and reflection",description:"Stereo carrier tones (210Hz L / 220Hz R) stimulating 10Hz alpha rhythms, optimal for sustained reading, journaling, and stress reduction.",frequency:"10 Hz Alpha Difference Wave",accentColor:"#34d399"},{id:"rain-storm",title:"Midnight Rain Sanctuary",category:"Deep Focus",tagline:"Gentle nocturnal rainfall with rolling thunder",description:"Procedurally shaped pink noise with gentle resonant filtering, simulating a peaceful rain shower against cabin windows in deep space.",frequency:"Pink Noise Spectrum & Low Rumble",accentColor:"#818cf8"}];class Iv{constructor(){or(this,"ctx",null);or(this,"masterGain",null);or(this,"analyser",null);or(this,"activeNodes",[]);or(this,"currentId",null);or(this,"_isPlaying",!1);or(this,"_volume",.65);or(this,"_isMuted",!1)}initContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this._isMuted?0:this._volume,this.ctx.currentTime),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=64,this.analyser.smoothingTimeConstant=.85,this.masterGain.connect(this.analyser),this.analyser.connect(this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume()}get isPlaying(){return this._isPlaying}get currentSoundscape(){return this.currentId}get volume(){return this._volume}get isMuted(){return this._isMuted}getAnalyser(){return this.analyser}setVolume(e){if(this._volume=Math.max(0,Math.min(1,e)),this.masterGain&&this.ctx){const t=this._isMuted?0:this._volume;this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime),this.masterGain.gain.linearRampToValueAtTime(t,this.ctx.currentTime+.05)}}toggleMute(){return this._isMuted=!this._isMuted,this.setVolume(this._volume),this._isMuted}stop(){!this.ctx||!this._isPlaying||(this.masterGain&&(this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime),this.masterGain.gain.linearRampToValueAtTime(.001,this.ctx.currentTime+.12)),setTimeout(()=>{this.cleanupNodes(),this._isPlaying=!1,this.currentId=null},130))}cleanupNodes(){for(const e of this.activeNodes)try{"stop"in e&&typeof e.stop=="function"&&e.stop(),e.disconnect()}catch{}this.activeNodes=[]}play(e){if(this.initContext(),!(!this.ctx||!this.masterGain)&&!(this._isPlaying&&this.currentId===e))switch(this.cleanupNodes(),this.currentId=e,this._isPlaying=!0,this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime),this.masterGain.gain.setValueAtTime(.001,this.ctx.currentTime),this.masterGain.gain.linearRampToValueAtTime(this._isMuted?0:this._volume,this.ctx.currentTime+.4),e){case"brown-noise":this.buildBrownNoise();break;case"celestial-drone":this.buildCelestialDrone();break;case"binaural-gamma":this.buildBinauralBeat(200,40);break;case"binaural-alpha":this.buildBinauralBeat(210,10);break;case"rain-storm":this.buildRainStorm();break}}buildBrownNoise(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.sampleRate*5,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),r=t.getChannelData(0);let o=0;for(let d=0;d<e;d++){const p=Math.random()*2-1;o=(o+.02*p)/1.02,r[d]=o*3.2}const l=2048;for(let d=0;d<l;d++){const p=d/l;r[d]=r[d]*p+r[e-l+d]*(1-p)}const u=this.ctx.createBufferSource();u.buffer=t,u.loop=!0;const h=this.ctx.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(450,this.ctx.currentTime),h.Q.setValueAtTime(.7,this.ctx.currentTime),u.connect(h),h.connect(this.masterGain),u.start(),this.activeNodes.push(u,h)}buildCelestialDrone(){if(!this.ctx||!this.masterGain)return;const e=216,t=[e,e*1.5,e*2,e*2.5],r=[-4,3,-2,5];t.forEach((o,l)=>{if(!this.ctx||!this.masterGain)return;const u=this.ctx.createOscillator();u.type=l%2===0?"sine":"triangle",u.frequency.setValueAtTime(o,this.ctx.currentTime),u.detune.setValueAtTime(r[l],this.ctx.currentTime);const h=this.ctx.createGain();h.gain.setValueAtTime(.18/(l+1),this.ctx.currentTime);const d=this.ctx.createOscillator();d.frequency.setValueAtTime(.08+l*.03,this.ctx.currentTime);const p=this.ctx.createGain();p.gain.setValueAtTime(.04,this.ctx.currentTime),d.connect(p),p.connect(h.gain),u.connect(h),h.connect(this.masterGain),u.start(),d.start(),this.activeNodes.push(u,d,h,p)})}buildBinauralBeat(e,t){if(!this.ctx||!this.masterGain)return;const r=this.ctx.createOscillator();r.type="sine",r.frequency.setValueAtTime(e,this.ctx.currentTime);const o=this.ctx.createGain();o.gain.setValueAtTime(.22,this.ctx.currentTime);const l=this.ctx.createOscillator();l.type="sine",l.frequency.setValueAtTime(e+t,this.ctx.currentTime);const u=this.ctx.createGain();u.gain.setValueAtTime(.22,this.ctx.currentTime);const h=this.ctx.createChannelMerger(2);r.connect(o),o.connect(h,0,0),l.connect(u),u.connect(h,0,1);const d=this.ctx.createOscillator();d.type="triangle",d.frequency.setValueAtTime(e/2,this.ctx.currentTime);const p=this.ctx.createGain();p.gain.setValueAtTime(.08,this.ctx.currentTime),d.connect(p),p.connect(this.masterGain),h.connect(this.masterGain),r.start(),l.start(),d.start(),this.activeNodes.push(r,l,d,o,u,p,h)}buildRainStorm(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.sampleRate*4,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),r=t.getChannelData(0);let o=0,l=0,u=0,h=0,d=0,p=0,g=0;for(let b=0;b<e;b++){const w=Math.random()*2-1;o=.99886*o+w*.0555179,l=.99332*l+w*.0750759,u=.969*u+w*.153852,h=.8665*h+w*.3104856,d=.55*d+w*.5329522,p=-.7616*p-w*.016898,r[b]=(o+l+u+h+d+p+g+w*.5362)*.12,g=w*.115926}const v=this.ctx.createBufferSource();v.buffer=t,v.loop=!0;const _=this.ctx.createBiquadFilter();_.type="lowpass",_.frequency.setValueAtTime(1200,this.ctx.currentTime),v.connect(_),_.connect(this.masterGain),v.start(),this.activeNodes.push(v,_)}}const gs=new Iv;class Uv{startKeepAlive(){}stopKeepAlive(){}updateMetadata(e){if(!(typeof window>"u"||!("mediaSession"in navigator)))try{const t=e.artworkUrl?[{src:e.artworkUrl,sizes:"96x96",type:"image/jpeg"},{src:e.artworkUrl,sizes:"128x128",type:"image/jpeg"},{src:e.artworkUrl,sizes:"192x192",type:"image/jpeg"},{src:e.artworkUrl,sizes:"256x256",type:"image/jpeg"},{src:e.artworkUrl,sizes:"512x512",type:"image/jpeg"}]:[];navigator.mediaSession.metadata=new MediaMetadata({title:e.title||"FOR ME Sanctuary",artist:e.artist||"Private Life Ledger",album:e.album||"Sanctuary Audio",artwork:t}),navigator.mediaSession.playbackState="playing",navigator.mediaSession.setActionHandler("play",()=>{e.onPlay(),navigator.mediaSession.playbackState="playing"}),navigator.mediaSession.setActionHandler("pause",()=>{e.onPause(),navigator.mediaSession.playbackState="paused"}),e.onNext?navigator.mediaSession.setActionHandler("nexttrack",e.onNext):navigator.mediaSession.setActionHandler("nexttrack",null),e.onPrev?navigator.mediaSession.setActionHandler("previoustrack",e.onPrev):navigator.mediaSession.setActionHandler("previoustrack",null)}catch(t){console.warn("[MediaSession] Metadata update error:",t)}}setPlaybackState(e){if(!(typeof window>"u"||!("mediaSession"in navigator)))try{navigator.mediaSession.playbackState=e}catch{}}}const Pi=new Uv;function kv(s){if(!s||typeof s!="string")return null;const e=s.trim();let t,r;const o=e.match(/[?&]list=([a-zA-Z0-9_-]+)/);o&&o[1]&&(r=o[1]);const l=e.match(/[?&]v=([a-zA-Z0-9_-]{11})/);if(l&&l[1]&&(t=l[1]),!t){const h=e.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);h&&h[1]&&(t=h[1])}if(!t){const h=e.match(/youtube\.com\/(?:live|embed|v|shorts)\/([a-zA-Z0-9_-]{11})/);h&&h[1]&&(t=h[1])}if(!t&&!r&&/^[a-zA-Z0-9_-]{11}$/.test(e)&&(t=e),!t&&!r&&/^(?:PL|RD|UU|FL|OLAK5uy_)[a-zA-Z0-9_-]+$/.test(e)&&(r=e),!t&&!r)return null;let u="video";return r&&t?u="video_in_playlist":r&&(u="playlist"),{type:u,videoId:t,playlistId:r,cleanUrl:e}}function Fv(s){return s?`https://img.youtube.com/vi/${s}/hqdefault.jpg`:"https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=600&auto=format&fit=crop"}const Jl=[{id:"lofi-girl-main",title:"Lofi Girl — Beats to Relax / Study to",type:"video",videoId:"jfKfPfyJRdk",url:"https://www.youtube.com/watch?v=jfKfPfyJRdk",channel:"Lofi Girl",thumbnailUrl:"https://img.youtube.com/vi/jfKfPfyJRdk/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"synthwave-chilledcow",title:"Synthwave Radio — Chill Beats to Code & Chill",type:"video",videoId:"4xDzrJKXOOY",url:"https://www.youtube.com/watch?v=4xDzrJKXOOY",channel:"Lofi Girl / Synthwave Boy",thumbnailUrl:"https://img.youtube.com/vi/4xDzrJKXOOY/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"deep-focus-ambient",title:"Deep Focus Ambient — Flow State Alpha Waves",type:"video",videoId:"lTRiuFIWV54",url:"https://www.youtube.com/watch?v=lTRiuFIWV54",channel:"Greenred Productions",thumbnailUrl:"https://img.youtube.com/vi/lTRiuFIWV54/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"peaceful-piano-solitude",title:"Peaceful Piano & Soft Rain — Gentle Solitude",type:"video",videoId:"1WUEk0R79_Q",url:"https://www.youtube.com/watch?v=1WUEk0R79_Q",channel:"Quiet Quest",thumbnailUrl:"https://img.youtube.com/vi/1WUEk0R79_Q/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"classical-focus-mozart",title:"Classical Focus — Mozart, Beethoven, Bach",type:"video",videoId:"WPni755-Krg",url:"https://www.youtube.com/watch?v=WPni755-Krg",channel:"HALIDONMUSIC",thumbnailUrl:"https://img.youtube.com/vi/WPni755-Krg/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"cozy-coffee-shop-lofi",title:"Cozy Coffee Shop Lofi — Rainy Night Ambience",type:"video",videoId:"-5KAN9_CzSA",url:"https://www.youtube.com/watch?v=-5KAN9_CzSA",channel:"Calmed by Nature",thumbnailUrl:"https://img.youtube.com/vi/-5KAN9_CzSA/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()}],o0=Me.createContext(void 0),qs={palette:"cosmic-royal",speed:"balanced",amplitude:"majestic",waveGeometry:"dunes",waveLayerDensity:"deep",horizonHeight:"balanced",waveStrokeOpacity:.5,interactiveParallax:!0,celestialBody:"crescent-moon",celestialPosition:"default",celestialScaleMultiplier:1,rotationSpeed:"standard",showNebulaDust:!0,nebulaIntensity:"vivid",showConstellations:!0,showComet:!0,shootingStarMode:"occasional",showStars:!0,starDensity:"balanced",showCrossStars:!1,showOrbitalTrack:!1,showMeridian:!1,clockFontStyle:"tabular",clockSize:"standard",clockPosition:"center",clockDivider:"colon",clockColor:"palette",clockFormat:"12h",showSeconds:!0,showDate:!0,showGreeting:!0,clockHalo:"pulsar"},Ka={name:"Azan",motto:"Remember, you are here for you.",defaultFocusTopic:"Engineering",defaultFocusMode:"Deep Work"},_l=[{id:"r1",title:"Morning Protocol",timeRange:"06:00 – 09:00",description:"Hydration, natural sunlight, 30-min movement, deep work session.",iconType:"morning"},{id:"r2",title:"Core Deep Work",timeRange:"09:00 – 17:00",description:"High-leverage engineering problem solving, core building goals, focused sprints.",iconType:"afternoon"},{id:"r3",title:"Evening Wind-Down",timeRange:"17:00 – 22:30",description:"Reflection, physical cooldown, reading, digital sunset and deep recovery.",iconType:"evening"}],zv=({children:s})=>{const[e,t]=Me.useState(()=>{try{const _e=localStorage.getItem("for_me_profile");if(_e){const Ke=JSON.parse(_e);return Ke.name==="Viren"?{...Ka,name:"Azan"}:{...Ka,...Ke}}return Ka}catch{return Ka}}),r=_e=>{t(Ke=>{const Ve={...Ke,..._e};return localStorage.setItem("for_me_profile",JSON.stringify(Ve)),Ve})};Me.useEffect(()=>{localStorage.setItem("for_me_profile",JSON.stringify(e))},[e]);const[o,l]=Me.useState(()=>{try{return localStorage.getItem("for_me_app_theme")==="light"?"light":"dark"}catch{return"dark"}}),u=()=>{l(_e=>_e==="light"?"dark":"light")};Me.useEffect(()=>{localStorage.setItem("for_me_app_theme",o),o==="light"?(document.documentElement.classList.add("theme-light"),document.documentElement.classList.remove("theme-dark")):(document.documentElement.classList.add("theme-dark"),document.documentElement.classList.remove("theme-light"))},[o]);const[h,d]=Me.useState(()=>{try{const _e=localStorage.getItem("for_me_is_hud_hidden");return _e?JSON.parse(_e):!1}catch{return!1}}),p=()=>d(_e=>!_e);Me.useEffect(()=>{localStorage.setItem("for_me_is_hud_hidden",JSON.stringify(h))},[h]);const[g,v]=Me.useState(()=>{try{return localStorage.getItem("for_me_wallpaper_theme")||"cosmic-cliffs"}catch{return"cosmic-cliffs"}});Me.useEffect(()=>{localStorage.setItem("for_me_wallpaper_theme",g)},[g]);const[_,b]=Me.useState(()=>{try{const _e=localStorage.getItem("for_me_wallpaper_settings_v3")||localStorage.getItem("for_me_wallpaper_settings_v2");return _e?{...qs,...JSON.parse(_e)}:qs}catch{return qs}}),w=_e=>{b(Ke=>{const Ve={...Ke,..._e};return localStorage.setItem("for_me_wallpaper_settings_v3",JSON.stringify(Ve)),Ve})},A=()=>{b(qs),localStorage.setItem("for_me_wallpaper_settings_v3",JSON.stringify(qs))},[y,S]=Me.useState(()=>{try{const _e=localStorage.getItem("for_me_tasks");return _e?JSON.parse(_e):[{id:"1",text:"Core engineering deep focus sprint",completed:!1},{id:"2",text:"System architecture review & refinement",completed:!1},{id:"3",text:"Physical movement & hydration (8 glasses)",completed:!1}]}catch{return[{id:"1",text:"Core engineering deep focus sprint",completed:!1}]}});Me.useEffect(()=>{localStorage.setItem("for_me_tasks",JSON.stringify(y))},[y]);const R=_e=>{S(Ke=>Ke.map(Ve=>Ve.id===_e?{...Ve,completed:!Ve.completed,completedAt:Ve.completed?void 0:new Date().toISOString()}:Ve))},O=_e=>{if(!_e.trim())return;const Ke={id:`task_${Date.now()}`,text:_e.trim(),completed:!1};S(Ve=>[Ke,...Ve])},D=_e=>{S(Ke=>Ke.filter(Ve=>Ve.id!==_e))},[F,L]=Me.useState(()=>{try{const _e=localStorage.getItem("for_me_habits");return _e?JSON.parse(_e):[{id:"h1",name:"Deep Focus & Engineering Block",completed:!1,streak:3},{id:"h2",name:"Hydration Target (8 Glasses)",completed:!1,streak:5},{id:"h3",name:"Mindful Walk & Movement",completed:!1,streak:2}]}catch{return[{id:"h1",name:"Deep Focus & Engineering Block",completed:!1,streak:1}]}});Me.useEffect(()=>{localStorage.setItem("for_me_habits",JSON.stringify(F))},[F]);const M=_e=>{L(Ke=>Ke.map(Ve=>{if(Ve.id===_e){const Je=!Ve.completed;return{...Ve,completed:Je,streak:Je?Ve.streak+1:Math.max(0,Ve.streak-1)}}return Ve}))},N=_e=>{if(!_e.trim())return;const Ke={id:`habit_${Date.now()}`,name:_e.trim(),completed:!1,streak:0};L(Ve=>[...Ve,Ke])},J=_e=>{L(Ke=>Ke.filter(Ve=>Ve.id!==_e))},[$,j]=Me.useState(()=>{try{const _e=localStorage.getItem("for_me_routines");return _e?JSON.parse(_e):_l}catch{return _l}});Me.useEffect(()=>{localStorage.setItem("for_me_routines",JSON.stringify($))},[$]);const B=_e=>{const Ke={id:`routine_${Date.now()}`,..._e};j(Ve=>[...Ve,Ke])},k=(_e,Ke)=>{j(Ve=>Ve.map(Je=>Je.id===_e?{...Je,...Ke}:Je))},V=_e=>{j(Ke=>Ke.filter(Ve=>Ve.id!==_e))},H=()=>{j(_l)},[se,ee]=Me.useState(0),[Y,G]=Me.useState(!1),[X,P]=Me.useState(e.defaultFocusTopic||"Engineering"),[K,be]=Me.useState(()=>{try{const _e=localStorage.getItem("for_me_study_sessions");return _e?JSON.parse(_e):[]}catch{return[]}});Me.useEffect(()=>{let _e=null;return Y?_e=setInterval(()=>{ee(Ke=>Ke+1)},1e3):!Y&&se!==0&&clearInterval(_e),()=>clearInterval(_e)},[Y,se]);const z=()=>G(_e=>!_e),xe=()=>{if(se>30){const _e={id:`ses_${Date.now()}`,subject:X,durationSeconds:se,timestamp:new Date().toISOString()};be(Ke=>{const Ve=[_e,...Ke];return localStorage.setItem("for_me_study_sessions",JSON.stringify(Ve)),Ve})}G(!1),ee(0)},[Se,Ne]=Me.useState(()=>{try{const _e=localStorage.getItem("for_me_hydration");return _e?JSON.parse(_e):62.5}catch{return 62.5}});Me.useEffect(()=>{localStorage.setItem("for_me_hydration",JSON.stringify(Se))},[Se]);const[ve,Ue]=Me.useState(()=>{try{const _e=localStorage.getItem("for_me_sleep_hours");return _e?JSON.parse(_e):8}catch{return 8}}),at=_e=>{Ue(_e),localStorage.setItem("for_me_sleep_hours",JSON.stringify(_e))},[Be,we]=Me.useState(()=>{try{const _e=localStorage.getItem("for_me_daily_rating");return _e?JSON.parse(_e):8}catch{return 8}});Me.useEffect(()=>{localStorage.setItem("for_me_daily_rating",JSON.stringify(Be))},[Be]);const Ie=()=>{const _e=new Date,Ke=_e.getFullYear(),Ve=String(_e.getMonth()+1).padStart(2,"0"),Je=String(_e.getDate()).padStart(2,"0");return`${Ke}-${Ve}-${Je}`},[He,xt]=Me.useState(()=>{try{return localStorage.getItem("for_me_last_active_date")||Ie()}catch{return Ie()}}),_t=_e=>{if(S(Ke=>{const Ve=Ke.map(Je=>({...Je,completed:!1,completedAt:void 0}));return localStorage.setItem("for_me_tasks",JSON.stringify(Ve)),Ve}),L(Ke=>{const Ve=Ke.map(Je=>({...Je,completed:!1,streak:Je.completed?Je.streak:0}));return localStorage.setItem("for_me_habits",JSON.stringify(Ve)),Ve}),Ne(0),localStorage.setItem("for_me_hydration",JSON.stringify(0)),se>30){const Ke={id:`ses_${Date.now()}`,subject:X,durationSeconds:se,timestamp:new Date().toISOString()};be(Ve=>{const Je=[Ke,...Ve];return localStorage.setItem("for_me_study_sessions",JSON.stringify(Je)),Je})}G(!1),ee(0),xt(_e),localStorage.setItem("for_me_last_active_date",_e)};Me.useEffect(()=>{const _e=()=>{const Ve=Ie(),Je=localStorage.getItem("for_me_last_active_date");Je?Je!==Ve&&_t(Ve):(localStorage.setItem("for_me_last_active_date",Ve),xt(Ve))};_e();const Ke=setInterval(_e,1e4);return window.addEventListener("focus",_e),()=>{clearInterval(Ke),window.removeEventListener("focus",_e)}},[se,X]);const Et=()=>{const _e=Ie();_t(_e)},Ft=()=>{["for_me_profile","for_me_tasks","for_me_habits","for_me_routines","for_me_hydration","for_me_sleep_hours","for_me_daily_rating","for_me_study_sessions","for_me_wallpaper_settings_v3","for_me_wallpaper_theme","for_me_app_theme","for_me_is_hud_hidden","for_me_last_active_date","for_me_active_yt","for_me_saved_yt_library"].forEach(Ke=>localStorage.removeItem(Ke)),t(Ka),S([{id:"1",text:"Core engineering deep focus sprint",completed:!1},{id:"2",text:"System architecture review & refinement",completed:!1},{id:"3",text:"Physical movement & hydration (8 glasses)",completed:!1}]),L([{id:"h1",name:"Deep Focus & Engineering Block",completed:!1,streak:0},{id:"h2",name:"Hydration Target (8 Glasses)",completed:!1,streak:0},{id:"h3",name:"Mindful Walk & Movement",completed:!1,streak:0}]),j(_l),Ne(0),Ue(8),we(8),ee(0),G(!1),be([]),b(qs),xt(Ie())},[rn,Pt]=Me.useState("youtube"),[Kt,Gt]=Me.useState(!1),[on,Q]=Me.useState("brown-noise"),[en,Dt]=Me.useState(.65),[zt,fe]=Me.useState(!1),[Mt,qe]=Me.useState(!1),[ot,I]=Me.useState(!1),[E,ne]=Me.useState(()=>{try{const _e=localStorage.getItem("for_me_active_yt");return _e?JSON.parse(_e):Jl[0]}catch{return Jl[0]}}),[Ce,ye]=Me.useState(70),[ke,Oe]=Me.useState(!1),[pe,me]=Me.useState(!1),[ge,U]=Me.useState(()=>{try{const _e=localStorage.getItem("for_me_saved_yt_library");return _e?JSON.parse(_e):[]}catch{return[]}});Me.useEffect(()=>{E&&localStorage.setItem("for_me_active_yt",JSON.stringify(E))},[E]),Me.useEffect(()=>{localStorage.setItem("for_me_saved_yt_library",JSON.stringify(ge))},[ge]);const ie=_e=>{if(Mt){qe(!1);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("pauseVideo")}catch{}}Pt("ambient");const Ke=_e||on;Q(Ke),gs.play(Ke),Gt(!0);const Ve=ca.find(Je=>Je.id===Ke);Pi.startKeepAlive(),Pi.updateMetadata({title:(Ve==null?void 0:Ve.title)||"Procedural Soundscape",artist:"FOR ME Sanctuary (Offline)",album:"Sound Sanctuary",onPlay:()=>ie(Ke),onPause:re})},re=()=>{gs.stop(),Gt(!1),Pi.stopKeepAlive(),Pi.setPlaybackState("paused")},Ee=_e=>{Dt(_e),gs.setVolume(_e)},Ae=()=>{const _e=gs.toggleMute();fe(_e)},Pe=_e=>{gs.stop(),Gt(!1),ne(_e),Pt("youtube"),qe(!0),Oe(!1);try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}},Xe=()=>{if(Mt){qe(!1);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("pauseVideo")}catch{}}else{gs.stop(),Gt(!1),Pt("youtube"),qe(!0),Oe(!1);try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute(),typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("playVideo")}catch{}}},ft=()=>{qe(!1);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("stopVideo")}catch{}},Te=()=>{try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("nextVideo"),qe(!0)}catch{}},Ze=()=>{try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("previousVideo"),qe(!0)}catch{}},ct=_e=>{ye(_e);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("setVolume",[_e])}catch{}},Fe=()=>{Oe(_e=>{const Ke=!_e;try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand(Ke?"mute":"unMute")}catch{}return Ke})},ht=(_e,Ke)=>{var St;const Ve=kv(_e);if(!Ve)return{success:!1,error:"Could not recognize a valid YouTube video or playlist link. Please check the URL format and try again."};const Je=(Ke==null?void 0:Ke.trim())||(Ve.type==="playlist"?`Custom Playlist (${(St=Ve.playlistId)==null?void 0:St.slice(0,8)}...)`:`YouTube Audio (${Ve.videoId||"Stream"})`),Lt={id:`yt-${Date.now()}-${Math.random().toString(36).substr(2,5)}`,title:Je,type:Ve.type,videoId:Ve.videoId,playlistId:Ve.playlistId,url:Ve.cleanUrl,thumbnailUrl:Fv(Ve.videoId),channel:Ve.type==="playlist"?"Custom YouTube Playlist":"Custom YouTube Stream",createdAt:new Date().toISOString()};return U($t=>[Lt,...$t]),Pe(Lt),{success:!0,item:Lt}},pt=_e=>{U(Ke=>Ke.filter(Ve=>Ve.id!==_e))};return m.jsx(o0.Provider,{value:{profile:e,setProfile:t,updateProfile:r,appTheme:o,setAppTheme:l,toggleAppTheme:u,isHUDHidden:h,setIsHUDHidden:d,toggleHUDHidden:p,tasks:y,toggleTask:R,addTask:O,deleteTask:D,wallpaperTheme:g,setWallpaperTheme:v,wallpaperSettings:_,updateWallpaperSettings:w,resetWallpaperSettings:A,habits:F,toggleHabit:M,addHabit:N,deleteHabit:J,routines:$,addRoutineBlock:B,updateRoutineBlock:k,deleteRoutineBlock:V,resetRoutines:H,studySeconds:se,isStudyActive:Y,studySubject:X,setStudySubject:P,toggleStudyTimer:z,resetStudyTimer:xe,studySessions:K,hydration:Se,setHydration:Ne,sleepHours:ve,setSleep:at,dailyRating:Be,setDailyRating:we,lastActiveDate:He,resetDayProgress:Et,factoryReset:Ft,audioSource:rn,setAudioSource:Pt,isAudioPlaying:Kt,activeSoundscapeId:on,audioVolume:en,isAudioMuted:zt,playSoundscape:ie,stopSoundscape:re,setAudioVolume:Ee,toggleAudioMute:Ae,isYouTubePlaying:Mt,setYouTubeIsPlaying:qe,isYouTubePlayerReady:ot,setYouTubePlayerReady:I,activeYouTubeItem:E,youtubeVolume:Ce,isYouTubeMuted:ke,savedYouTubeItems:ge,showYouTubePreview:pe,setShowYouTubePreview:me,playYouTubeItem:Pe,toggleYouTubePlay:Xe,stopYouTube:ft,nextYouTubeTrack:Te,prevYouTubeTrack:Ze,setYouTubeVolume:ct,toggleYouTubeMute:Fe,addYouTubeToLibrary:ht,removeYouTubeFromLibrary:pt},children:s})},Zr=()=>{const s=Me.useContext(o0);if(!s)throw new Error("useData must be used within a DataProvider");return s},Ov=()=>{const s=Me.useRef(null),{isHUDHidden:e,wallpaperSettings:t,appTheme:r}=Zr(),o=Me.useRef(e),l=Me.useRef(t),u=Me.useRef(r);return Me.useEffect(()=>{o.current=e},[e]),Me.useEffect(()=>{l.current=t},[t]),Me.useEffect(()=>{u.current=r},[r]),Me.useEffect(()=>{const h=s.current;if(!h)return;const d=h.getContext("2d");if(!d)return;let p,g=0,v=0;const _=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let b=[];const w=()=>{b=[];const k=l.current.starDensity||"balanced",V=k==="sparse"?.45:k==="dense"?1.6:k==="galaxy"?2.4:1,H=g<768?85:160,se=Math.round(H*V);for(let ee=0;ee<se;ee++){const Y=Math.random()>.85?2:Math.random()>.45?1:0,G=Math.random()*.65+(Y===2?.85:.35);b.push({x:Math.random()*g,y:Math.random()*v,z:Y,radius:G,alpha:Math.random()*.55+.25,alphaSpeed:Math.random()*.015+.005,alphaPhase:Math.random()*Math.PI*2,vx:(Math.random()-.5)*.06,vy:(Math.random()-.5)*.06})}},A=()=>{if(!h)return;const k=Math.min(window.devicePixelRatio||1,2);g=window.innerWidth,v=window.innerHeight,h.width=g*k,h.height=v*k,h.style.width=`${g}px`,h.style.height=`${v}px`,d.scale(k,k),w()};A(),window.addEventListener("resize",A,{passive:!0});let y=g/2,S=v/2,R=g/2,O=v/2;const D=k=>{l.current.interactiveParallax!==!1&&(y=k.clientX,S=k.clientY)};window.addEventListener("mousemove",D,{passive:!0});const F=(k,V,H,se)=>{d.save(),d.translate(k,V);const ee=u.current==="light",Y=Math.max(.15,Math.min(.95,se));d.globalAlpha=Y;const G=d.createRadialGradient(0,0,0,0,0,H*.9);ee?(G.addColorStop(0,"rgba(245, 158, 11, 0.75)"),G.addColorStop(.3,"rgba(217, 119, 6, 0.28)"),G.addColorStop(.7,"rgba(180, 83, 9, 0.06)"),G.addColorStop(1,"rgba(255, 255, 255, 0)")):(G.addColorStop(0,"rgba(255, 255, 255, 0.85)"),G.addColorStop(.3,"rgba(216, 180, 254, 0.35)"),G.addColorStop(.7,"rgba(147, 51, 234, 0.08)"),G.addColorStop(1,"rgba(0, 0, 0, 0)")),d.fillStyle=G,d.beginPath(),d.arc(0,0,H*.9,0,Math.PI*2),d.fill();const X=d.createLinearGradient(-H,0,H,0);ee?(X.addColorStop(0,"rgba(245, 158, 11, 0)"),X.addColorStop(.35,"rgba(217, 119, 6, 0.45)"),X.addColorStop(.5,"#b45309"),X.addColorStop(.65,"rgba(217, 119, 6, 0.45)"),X.addColorStop(1,"rgba(245, 158, 11, 0)")):(X.addColorStop(0,"rgba(255, 255, 255, 0)"),X.addColorStop(.35,"rgba(233, 213, 255, 0.55)"),X.addColorStop(.5,"#ffffff"),X.addColorStop(.65,"rgba(233, 213, 255, 0.55)"),X.addColorStop(1,"rgba(255, 255, 255, 0)")),d.strokeStyle=X,d.lineWidth=.75,d.beginPath(),d.moveTo(-H,0),d.lineTo(H,0),d.stroke();const P=d.createLinearGradient(0,-H,0,H);ee?(P.addColorStop(0,"rgba(245, 158, 11, 0)"),P.addColorStop(.35,"rgba(217, 119, 6, 0.45)"),P.addColorStop(.5,"#b45309"),P.addColorStop(.65,"rgba(217, 119, 6, 0.45)"),P.addColorStop(1,"rgba(245, 158, 11, 0)")):(P.addColorStop(0,"rgba(255, 255, 255, 0)"),P.addColorStop(.35,"rgba(233, 213, 255, 0.55)"),P.addColorStop(.5,"#ffffff"),P.addColorStop(.65,"rgba(233, 213, 255, 0.55)"),P.addColorStop(1,"rgba(255, 255, 255, 0)")),d.strokeStyle=P,d.lineWidth=.75,d.beginPath(),d.moveTo(0,-H),d.lineTo(0,H),d.stroke();const K=H*.38;d.strokeStyle=ee?"rgba(180, 83, 9, 0.35)":"rgba(255, 255, 255, 0.4)",d.lineWidth=.5,d.beginPath(),d.moveTo(-K,-K),d.lineTo(K,K),d.moveTo(-K,K),d.lineTo(K,-K),d.stroke(),d.fillStyle=ee?"#d97706":"#ffffff",d.beginPath(),d.arc(0,0,1.2,0,Math.PI*2),d.fill(),d.restore()},L=[{x:-100,y:-100,length:100,speed:18,angle:Math.PI/4+.05,alpha:0,active:!1},{x:-100,y:-100,length:80,speed:16,angle:Math.PI/4-.08,alpha:0,active:!1},{x:-100,y:-100,length:110,speed:20,angle:Math.PI/4+.12,alpha:0,active:!1}];let M=120;const N=k=>{if(k==="off")return;M--;const V=k==="meteor-shower"?40:180;if(M<=0&&!_){M=Math.random()*(k==="meteor-shower"?60:200)+V;const H=L.find(se=>!se.active);H&&(H.active=!0,H.x=Math.random()*(g*.7),H.y=Math.random()*(v*.3),H.alpha=.95,H.length=Math.random()*50+70)}for(const H of L)if(H.active)if(H.x+=Math.cos(H.angle)*H.speed,H.y+=Math.sin(H.angle)*H.speed,H.alpha-=k==="meteor-shower"?.022:.016,H.alpha<=0||H.x>g+100||H.y>v+100)H.active=!1;else{d.save();const se=H.x-Math.cos(H.angle)*H.length,ee=H.y-Math.sin(H.angle)*H.length,Y=d.createLinearGradient(se,ee,H.x,H.y);Y.addColorStop(0,"rgba(255, 255, 255, 0)"),Y.addColorStop(.7,"rgba(216, 180, 254, "+H.alpha*.6+")"),Y.addColorStop(1,"#ffffff"),d.strokeStyle=Y,d.lineWidth=1.3,d.beginPath(),d.moveTo(se,ee),d.lineTo(H.x,H.y),d.stroke(),d.fillStyle="#ffffff",d.beginPath(),d.arc(H.x,H.y,1.8,0,Math.PI*2),d.fill(),d.restore()}};let J=0,$=!0;const j=()=>{$=!document.hidden};document.addEventListener("visibilitychange",j);const B=()=>{if(!$){p=requestAnimationFrame(B);return}const k=l.current,V=o.current;let H=1;k.speed==="frozen"?H=0:k.speed==="calm"?H=.45:k.speed==="dynamic"?H=1.45:H=.85,V&&H>0&&(H*=1.25),J+=_?.002:.014*H,d.clearRect(0,0,g,v),R+=(y-R)*.04,O+=(S-O)*.04;const se=(R-g/2)/(g/2),ee=(O-v/2)/(v/2);let Y=1;k.amplitude==="subtle"?Y=.55:k.amplitude==="dramatic"?Y=1.6:Y=1,V&&(Y*=1.2);const G=k.palette,X=u.current==="light";let P="#030208",K="#0b061c",be="#170a32",z="rgba(168, 85, 247, 0.22)",xe="rgba(99, 102, 241, 0.16)",Se="rgba(168, 85, 247, 0.30)",Ne="rgba(192, 132, 252, 0.40)",ve=["#05030e","#090518","#0e0824"],Ue="rgba(168, 85, 247, 0.25)",at=["#0a051d","#110930","#190c42"],Be="rgba(168, 85, 247, 0.35)",we=["#11082e","#1c0c4b","#261063"],Ie="rgba(192, 132, 252, 0.45)",He=["#180b3d","#260f64","#341584"],xt="rgba(216, 180, 254, 0.55)",_t=["#0c0620","#140833","#1e0c4a","#281061"],Et="rgba(233, 213, 255, 0.65)";X?G==="celestial-cyan"?(P="#eef8ff",K="#d7effe",be="#b5e3fd",z="rgba(14, 165, 233, 0.16)",xe="rgba(6, 182, 212, 0.12)",Se="rgba(2, 132, 199, 0.12)",Ne="rgba(3, 105, 161, 0.20)",ve=["#93c5fd","#bfdbfe","#dbeafe"],Ue="rgba(29, 78, 216, 0.35)",at=["#60a5fa","#93c5fd","#bfdbfe"],Be="rgba(2, 132, 199, 0.42)",we=["#38bdf8","#7dd3fc","#bae6fd"],Ie="rgba(14, 165, 233, 0.50)",He=["#bae6fd","#d7f0fd","#f0f9ff"],xt="rgba(56, 189, 248, 0.58)",_t=["#f0f9ff","#f8fcff","#ffffff","#ffffff"],Et="rgba(2, 132, 199, 0.68)"):G==="supernova-sunset"?(P="#fff1f2",K="#fecdd3",be="#fda4af",z="rgba(244, 63, 94, 0.16)",xe="rgba(249, 115, 22, 0.12)",Se="rgba(225, 29, 72, 0.12)",Ne="rgba(190, 18, 60, 0.20)",ve=["#f43f5e","#fb7185","#fda4af"],Ue="rgba(159, 18, 57, 0.35)",at=["#fb7185","#fda4af","#fecdd3"],Be="rgba(225, 29, 72, 0.42)",we=["#fda4af","#fecdd3","#ffe4e6"],Ie="rgba(244, 63, 94, 0.50)",He=["#fecdd3","#ffe4e6","#fff1f2"],xt="rgba(251, 113, 133, 0.58)",_t=["#fff5f6","#fffafb","#ffffff","#ffffff"],Et="rgba(225, 29, 72, 0.68)"):G==="nocturne-silver"?(P="#fafafa",K="#f4f4f6",be="#e4e4e7",z="rgba(113, 113, 122, 0.14)",xe="rgba(82, 82, 91, 0.10)",Se="rgba(82, 82, 91, 0.12)",Ne="rgba(63, 63, 70, 0.20)",ve=["#a1a1aa","#d4d4d8","#e4e4e7"],Ue="rgba(63, 63, 70, 0.35)",at=["#d4d4d8","#e4e4e7","#f1f1f3"],Be="rgba(82, 82, 91, 0.42)",we=["#e4e4e7","#f1f1f3","#f4f4f6"],Ie="rgba(113, 113, 122, 0.50)",He=["#f1f1f3","#f6f6f8","#fafafa"],xt="rgba(161, 161, 170, 0.58)",_t=["#f6f6f8","#fcfcfc","#ffffff","#ffffff"],Et="rgba(82, 82, 91, 0.68)"):G==="cyberpunk-neon"?(P="#fdf2f8",K="#fae8ff",be="#f5d0fe",z="rgba(236, 72, 153, 0.18)",xe="rgba(6, 182, 212, 0.14)",Se="rgba(168, 85, 247, 0.15)",Ne="rgba(236, 72, 153, 0.22)",ve=["#f472b6","#fbcfe8","#fdf2f8"],Ue="rgba(219, 39, 119, 0.35)",at=["#c084fc","#e9d5ff","#fae8ff"],Be="rgba(147, 51, 234, 0.42)",we=["#38bdf8","#bae6fd","#f0f9ff"],Ie="rgba(2, 132, 199, 0.50)",He=["#fbcfe8","#fce7f3","#ffffff"],xt="rgba(236, 72, 153, 0.58)",_t=["#fdf2f8","#ffffff","#ffffff","#ffffff"],Et="rgba(168, 85, 247, 0.68)"):G==="solar-gold"?(P="#fffbeb",K="#fef3c7",be="#fde68a",z="rgba(245, 158, 11, 0.20)",xe="rgba(234, 88, 12, 0.14)",Se="rgba(217, 119, 6, 0.15)",Ne="rgba(245, 158, 11, 0.22)",ve=["#f59e0b","#fbbf24","#fef3c7"],Ue="rgba(180, 83, 9, 0.38)",at=["#fbbf24","#fcd34d","#fef9c3"],Be="rgba(217, 119, 6, 0.45)",we=["#fde047","#fef08a","#fefce8"],Ie="rgba(234, 88, 12, 0.52)",He=["#fef08a","#fefce8","#ffffff"],xt="rgba(245, 158, 11, 0.60)",_t=["#fefce8","#ffffff","#ffffff","#ffffff"],Et="rgba(217, 119, 6, 0.70)"):G==="emerald-aurora"?(P="#f0fdf4",K="#dcfce7",be="#bbf7d0",z="rgba(16, 185, 129, 0.20)",xe="rgba(34, 197, 94, 0.14)",Se="rgba(22, 163, 74, 0.15)",Ne="rgba(16, 185, 129, 0.22)",ve=["#86efac","#bbf7d0","#dcfce7"],Ue="rgba(22, 163, 74, 0.38)",at=["#4ade80","#86efac","#bbf7d0"],Be="rgba(21, 128, 61, 0.45)",we=["#22c55e","#4ade80","#86efac"],Ie="rgba(16, 185, 129, 0.52)",He=["#86efac","#bbf7d0","#f0fdf4"],xt="rgba(22, 163, 74, 0.60)",_t=["#f0fdf4","#f8fafc","#ffffff","#ffffff"],Et="rgba(16, 185, 129, 0.70)"):G==="pure-pitch-black"?(P="#ffffff",K="#f8fafc",be="#f1f5f9",z="rgba(148, 163, 184, 0.16)",xe="rgba(100, 116, 139, 0.10)",Se="rgba(71, 85, 105, 0.15)",Ne="rgba(51, 65, 85, 0.22)",ve=["#cbd5e1","#e2e8f0","#f1f5f9"],Ue="rgba(71, 85, 105, 0.38)",at=["#94a3b8","#cbd5e1","#e2e8f0"],Be="rgba(51, 65, 85, 0.45)",we=["#64748b","#94a3b8","#cbd5e1"],Ie="rgba(30, 41, 59, 0.52)",He=["#cbd5e1","#e2e8f0","#f8fafc"],xt="rgba(51, 65, 85, 0.60)",_t=["#f8fafc","#ffffff","#ffffff","#ffffff"],Et="rgba(15, 23, 42, 0.70)"):(P="#fffbf3",K="#feeccd",be="#fad4a0",z="rgba(245, 158, 11, 0.18)",xe="rgba(217, 119, 6, 0.12)",Se="rgba(180, 83, 9, 0.12)",Ne="rgba(146, 64, 14, 0.20)",ve=["#d4a373","#bc8a5f","#a47148"],Ue="rgba(146, 64, 14, 0.38)",at=["#e6ba8f","#d4a373","#bc8a5f"],Be="rgba(180, 83, 9, 0.45)",we=["#f3d5b5","#e6ba8f","#d4a373"],Ie="rgba(217, 119, 6, 0.52)",He=["#faedcd","#f3d5b5","#fefae0"],xt="rgba(245, 158, 11, 0.60)",_t=["#fefae0","#fffdfa","#ffffff","#ffffff"],Et="rgba(217, 119, 6, 0.70)"):G==="celestial-cyan"?(P="#020712",K="#041322",be="#071f35",z="rgba(14, 165, 233, 0.18)",xe="rgba(6, 182, 212, 0.12)",Se="rgba(56, 189, 248, 0.12)",Ne="rgba(103, 232, 249, 0.20)",ve=["#030914","#051221","#071c31"],Ue="rgba(56, 189, 248, 0.22)",at=["#040f1f","#071b33","#0a2646"],Be="rgba(56, 189, 248, 0.32)",we=["#06152a","#0a2544","#0f345c"],Ie="rgba(56, 189, 248, 0.42)",He=["#081b34","#0d2e54","#134273"],xt="rgba(125, 211, 252, 0.52)",_t=["#051224","#091c36","#0e294d","#133866"],Et="rgba(186, 230, 253, 0.65)"):G==="supernova-sunset"?(P="#0a0208",K="#160412",be="#24061c",z="rgba(244, 63, 94, 0.18)",xe="rgba(249, 115, 22, 0.12)",Se="rgba(251, 113, 133, 0.12)",Ne="rgba(253, 186, 116, 0.20)",ve=["#0d020a","#170412","#22061b"],Ue="rgba(244, 63, 94, 0.22)",at=["#150311","#24061d","#340929"],Be="rgba(244, 63, 94, 0.32)",we=["#1e0518","#320827","#470c38"],Ie="rgba(251, 113, 133, 0.42)",He=["#280620","#420b33","#5c0f47"],xt="rgba(251, 146, 60, 0.52)",_t=["#180314","#270620","#3b0930","#500d41"],Et="rgba(254, 215, 170, 0.65)"):G==="nocturne-silver"?(P="#030306",K="#08080d",be="#101017",z="rgba(161, 161, 170, 0.16)",xe="rgba(113, 113, 122, 0.10)",Se="rgba(212, 212, 216, 0.12)",Ne="rgba(228, 228, 231, 0.18)",ve=["#060609","#0c0c12","#13131c"],Ue="rgba(161, 161, 170, 0.20)",at=["#0a0a0f","#12121b","#1a1a27"],Be="rgba(161, 161, 170, 0.30)",we=["#0e0e16","#181824","#232333"],Ie="rgba(212, 212, 216, 0.40)",He=["#13131e","#1f1f30","#2d2d42"],xt="rgba(228, 228, 231, 0.50)",_t=["#0c0c13","#14141f","#1d1d2b","#272738"],Et="rgba(244, 244, 245, 0.65)"):G==="cyberpunk-neon"?(P="#06000e",K="#120024",be="#22003d",z="rgba(236, 72, 153, 0.22)",xe="rgba(6, 182, 212, 0.18)",Se="rgba(34, 211, 238, 0.15)",Ne="rgba(244, 114, 182, 0.22)",ve=["#0a0014","#150029","#24003d"],Ue="rgba(168, 85, 247, 0.25)",at=["#120021","#1f0038","#310052"],Be="rgba(236, 72, 153, 0.35)",we=["#1c0030","#2d004d","#42006e"],Ie="rgba(6, 182, 212, 0.45)",He=["#25003d","#3d0066","#59008f"],xt="rgba(244, 63, 94, 0.55)",_t=["#160029","#260045","#380062","#4e0085"],Et="rgba(34, 211, 238, 0.70)"):G==="solar-gold"?(P="#080400",K="#140900",be="#241000",z="rgba(245, 158, 11, 0.22)",xe="rgba(234, 88, 12, 0.16)",Se="rgba(251, 191, 36, 0.15)",Ne="rgba(252, 211, 77, 0.22)",ve=["#0a0400","#170900","#261000"],Ue="rgba(217, 119, 6, 0.25)",at=["#130700","#220e00","#361600"],Be="rgba(245, 158, 11, 0.35)",we=["#1e0a00","#301300","#4a1e00"],Ie="rgba(251, 191, 36, 0.45)",He=["#290e00","#421a00","#612700"],xt="rgba(252, 211, 77, 0.55)",_t=["#190800","#2a0e00","#401500","#592000"],Et="rgba(254, 240, 138, 0.70)"):G==="emerald-aurora"?(P="#010d05",K="#021a0a",be="#052e14",z="rgba(16, 185, 129, 0.22)",xe="rgba(52, 211, 153, 0.16)",Se="rgba(110, 231, 183, 0.15)",Ne="rgba(52, 211, 153, 0.22)",ve=["#021508","#04240f","#073918"],Ue="rgba(16, 185, 129, 0.25)",at=["#031f0c","#063316","#0a4b22"],Be="rgba(52, 211, 153, 0.35)",we=["#052b12","#09431e","#0e602c"],Ie="rgba(110, 231, 183, 0.45)",He=["#083818","#0d5426","#147738"],xt="rgba(167, 243, 208, 0.55)",_t=["#062e14","#0a4720","#10632d","#18863f"],Et="rgba(110, 231, 183, 0.70)"):G==="pure-pitch-black"&&(P="#000000",K="#020202",be="#060606",z="rgba(255, 255, 255, 0.08)",xe="rgba(161, 161, 170, 0.06)",Se="rgba(161, 161, 170, 0.10)",Ne="rgba(228, 228, 231, 0.15)",ve=["#020202","#060606","#0a0a0a"],Ue="rgba(161, 161, 170, 0.20)",at=["#050505","#0a0a0a","#101010"],Be="rgba(161, 161, 170, 0.30)",we=["#080808","#0e0e0e","#161616"],Ie="rgba(212, 212, 216, 0.40)",He=["#0c0c0c","#141414","#1e1e1e"],xt="rgba(228, 228, 231, 0.50)",_t=["#080808","#101010","#181818","#222222"],Et="rgba(255, 255, 255, 0.75)");const Ft=d.createLinearGradient(0,0,0,v);Ft.addColorStop(0,P),Ft.addColorStop(.45,K),Ft.addColorStop(1,be),d.fillStyle=Ft,d.fillRect(0,0,g,v);const rn=d.createRadialGradient(g*.8,v*.18,0,g*.8,v*.18,g*.5);rn.addColorStop(0,z),rn.addColorStop(.7,"rgba(0, 0, 0, 0.04)"),rn.addColorStop(1,"rgba(0, 0, 0, 0)"),d.fillStyle=rn,d.fillRect(0,0,g,v);const Pt=d.createRadialGradient(g*.18,v*.82,0,g*.18,v*.82,g*.55);if(Pt.addColorStop(0,xe),Pt.addColorStop(.65,"rgba(0, 0, 0, 0.03)"),Pt.addColorStop(1,"rgba(0, 0, 0, 0)"),d.fillStyle=Pt,d.fillRect(0,0,g,v),k.showNebulaDust){d.save();const ge=d.createRadialGradient(g*.35,v*.2,0,g*.35,v*.2,g*.38);ge.addColorStop(0,z),ge.addColorStop(.5,"rgba(126, 34, 206, 0.04)"),ge.addColorStop(1,"rgba(0, 0, 0, 0)"),d.fillStyle=ge,d.fillRect(0,0,g,v);const U=d.createRadialGradient(g*.7,v*.14,0,g*.7,v*.14,g*.32);U.addColorStop(0,xe),U.addColorStop(.6,"rgba(14, 116, 144, 0.03)"),U.addColorStop(1,"rgba(0, 0, 0, 0)"),d.fillStyle=U,d.fillRect(0,0,g,v),d.restore()}if(k.showConstellations){d.save(),d.strokeStyle=X?"rgba(180, 130, 80, 0.28)":"rgba(255, 255, 255, 0.14)",d.lineWidth=.75;const ge=[{x:g*.68,y:v*.1},{x:g*.72,y:v*.08},{x:g*.76,y:v*.09},{x:g*.78,y:v*.13},{x:g*.83,y:v*.14},{x:g*.84,y:v*.1},{x:g*.78,y:v*.09}];d.beginPath(),d.moveTo(ge[0].x,ge[0].y);for(let ie=1;ie<ge.length;ie++)d.lineTo(ge[ie].x,ge[ie].y);d.stroke(),d.fillStyle=X?"#b45309":"#ffffff";for(const ie of ge)d.beginPath(),d.arc(ie.x,ie.y,1.4,0,Math.PI*2),d.fill();const U=[{x:g*.28,y:v*.08},{x:g*.31,y:v*.12},{x:g*.34,y:v*.09},{x:g*.37,y:v*.13},{x:g*.4,y:v*.1}];d.beginPath(),d.moveTo(U[0].x,U[0].y);for(let ie=1;ie<U.length;ie++)d.lineTo(U[ie].x,U[ie].y);d.stroke();for(const ie of U)d.beginPath(),d.arc(ie.x,ie.y,1.3,0,Math.PI*2),d.fill();d.restore()}if(k.showComet){d.save();const ge=J*.04%1,U=g*.75,ie=v*.04,re=g*.25,Ee=v*.22,Ae=U+(re-U)*ge,Pe=ie+(Ee-ie)*ge,Xe=Math.atan2(Ee-ie,re-U)+Math.PI,ft=140,Te=Ae+Math.cos(Xe)*ft,Ze=Pe+Math.sin(Xe)*ft,ct=d.createLinearGradient(Te,Ze,Ae,Pe);ct.addColorStop(0,"rgba(56, 189, 248, 0)"),ct.addColorStop(.5,"rgba(168, 85, 247, 0.25)"),ct.addColorStop(.85,"rgba(233, 213, 255, 0.65)"),ct.addColorStop(1,"#ffffff"),d.strokeStyle=ct,d.lineWidth=1.8,d.beginPath(),d.moveTo(Te,Ze),d.lineTo(Ae,Pe),d.stroke(),d.fillStyle="#ffffff",d.shadowColor="#67e8f9",d.shadowBlur=8,d.beginPath(),d.arc(Ae,Pe,2.2,0,Math.PI*2),d.fill(),d.restore()}if(k.showMeridian){d.save();const ge=g*.91;d.strokeStyle=Se,d.lineWidth=1,d.beginPath(),d.moveTo(ge,0),d.lineTo(ge,v),d.stroke(),d.strokeStyle="rgba(255, 255, 255, 0.18)",d.lineWidth=1;for(let U=50;U<v;U+=70)d.beginPath(),d.moveTo(ge-4,U),d.lineTo(ge+4,U),d.stroke();d.restore()}if(k.showOrbitalTrack){d.save();const ge=g*.78,U=v*.18,ie=Math.min(g,v)*.45,re=Math.min(g,v)*.22;d.shadowColor=Ne,d.shadowBlur=6,d.strokeStyle=Ne,d.lineWidth=1.2,d.beginPath(),d.ellipse(ge,U,ie,re,-.22,Math.PI*.1,Math.PI*1.3),d.stroke(),d.setLineDash([3,8]),d.strokeStyle="rgba(255, 255, 255, 0.22)",d.lineWidth=.8,d.beginPath(),d.ellipse(ge,U,ie*1.08,re*1.08,-.22,Math.PI*.05,Math.PI*1.25),d.stroke(),d.setLineDash([]),d.restore()}if(k.showStars)for(let ge=0;ge<b.length;ge++){const U=b[ge];!_&&H>0&&(U.x+=U.vx*H,U.y+=U.vy*H,U.alphaPhase+=U.alphaSpeed*H,U.x<0&&(U.x=g),U.x>g&&(U.x=0),U.y<0&&(U.y=v),U.y>v&&(U.y=0));const ie=(U.z+1)*.35,re=U.x+se*12*ie,Ee=U.y+ee*12*ie,Ae=Math.max(.12,Math.min(.85,U.alpha+Math.sin(U.alphaPhase)*.22));d.beginPath(),d.arc(re,Ee,U.radius,0,Math.PI*2),d.fillStyle=X?`rgba(180, 130, 80, ${(Ae*.65).toFixed(3)})`:`rgba(255, 255, 255, ${Ae.toFixed(3)})`,d.fill()}const Kt=k.waveGeometry,Gt=k.waveLayerDensity,on=(ge,U,ie,re=2)=>{d.save(),d.translate(ge,U);const Ee=d.createRadialGradient(0,0,0,0,0,re*2.5);X?(Ee.addColorStop(0,`rgba(245, 158, 11, ${ie})`),Ee.addColorStop(.35,`rgba(217, 119, 6, ${ie*.7})`),Ee.addColorStop(1,"rgba(255, 255, 255, 0)"),d.fillStyle=Ee,d.beginPath(),d.arc(0,0,re*2.5,0,Math.PI*2),d.fill(),d.strokeStyle=`rgba(180, 83, 9, ${ie*.8})`,d.lineWidth=.75,d.beginPath(),d.moveTo(-re*2,0),d.lineTo(re*2,0),d.moveTo(0,-re*2),d.lineTo(0,re*2),d.stroke()):(Ee.addColorStop(0,`rgba(255, 255, 255, ${ie})`),Ee.addColorStop(.35,`rgba(233, 213, 255, ${ie*.7})`),Ee.addColorStop(1,"rgba(255, 255, 255, 0)"),d.fillStyle=Ee,d.beginPath(),d.arc(0,0,re*2.5,0,Math.PI*2),d.fill(),d.strokeStyle=`rgba(255, 255, 255, ${ie*.9})`,d.lineWidth=.75,d.beginPath(),d.moveTo(-re*2,0),d.lineTo(re*2,0),d.moveTo(0,-re*2),d.lineTo(0,re*2),d.stroke()),d.restore()},Q=(ge,U,ie,re,Ee,Ae,Pe,Xe,ft,Te,Ze=[])=>{const ct=[0,g*.32,g*.68,g],Fe=[];for(let Je=0;Je<4;Je++){const Lt=Math.sin(J*ie+re+Je*1.4)*(U*.75)+Math.cos(J*ie*.7+re*1.2+Je*2.1)*(U*.35);Fe.push({x:ct[Je],y:v*ge[Je]+Lt})}const ht=[Fe[0],...Fe,Fe[Fe.length-1]],pt=[],_e=.5;for(let Je=1;Je<ht.length-2;Je++){const Lt=ht[Je-1],St=ht[Je],$t=ht[Je+1],Re=ht[Je+2],kn=($t.x-Lt.x)*_e,pn=($t.y-Lt.y)*_e,Fn=(Re.x-St.x)*_e,ki=(Re.y-St.y)*_e;pt.push({p1:St,cp1:{x:St.x+kn/3,y:St.y+pn/3},cp2:{x:$t.x-Fn/3,y:$t.y-ki/3},p2:$t})}d.save(),ft>0&&(d.shadowColor=Xe,d.shadowBlur=ft,d.shadowOffsetY=Te),d.beginPath(),d.moveTo(Fe[0].x,Fe[0].y);for(const Je of pt)d.bezierCurveTo(Je.cp1.x,Je.cp1.y,Je.cp2.x,Je.cp2.y,Je.p2.x,Je.p2.y);d.lineTo(g,v),d.lineTo(0,v),d.closePath(),d.fillStyle=Ee,d.fill(),d.save(),d.clip();const Ke=Math.min(...Fe.map(Je=>Je.y)),Ve=d.createLinearGradient(0,Ke,0,Ke+140);X?(Ve.addColorStop(0,"rgba(255, 255, 255, 0.40)"),Ve.addColorStop(.25,"rgba(251, 191, 36, 0.14)"),Ve.addColorStop(.7,"rgba(217, 119, 6, 0.04)"),Ve.addColorStop(1,"rgba(255, 255, 255, 0)")):(Ve.addColorStop(0,"rgba(255, 255, 255, 0.26)"),Ve.addColorStop(.25,"rgba(216, 180, 254, 0.16)"),Ve.addColorStop(.7,"rgba(147, 51, 234, 0.05)"),Ve.addColorStop(1,"rgba(0, 0, 0, 0)")),d.fillStyle=Ve,d.fillRect(0,Ke,g,v),d.beginPath();for(let Je=0;Je<pt.length;Je++){const Lt=pt[Je],St=18+Math.sin(J*.75+Je*1.5)*4;Je===0&&d.moveTo(Lt.p1.x,Lt.p1.y+St),d.bezierCurveTo(Lt.cp1.x,Lt.cp1.y+St,Lt.cp2.x,Lt.cp2.y+St,Lt.p2.x,Lt.p2.y+St)}d.strokeStyle=X?"rgba(160, 90, 40, 0.16)":"rgba(255, 255, 255, 0.10)",d.lineWidth=1,d.stroke(),d.beginPath();for(let Je=0;Je<pt.length;Je++){const Lt=pt[Je],St=38+Math.cos(J*.65+Je*1.8)*5;Je===0&&d.moveTo(Lt.p1.x,Lt.p1.y+St),d.bezierCurveTo(Lt.cp1.x,Lt.cp1.y+St,Lt.cp2.x,Lt.cp2.y+St,Lt.p2.x,Lt.p2.y+St)}d.strokeStyle=X?"rgba(160, 90, 40, 0.10)":"rgba(255, 255, 255, 0.06)",d.lineWidth=.8,d.stroke(),d.restore(),d.strokeStyle=Ae,d.lineWidth=Pe,d.stroke(),d.restore();for(const Je of Ze){const Lt=Math.min(pt.length-1,Math.floor(Je*pt.length)),St=Je*pt.length-Lt,$t=pt[Lt],Re=1-St,kn=Re*Re*Re*$t.p1.x+3*Re*Re*St*$t.cp1.x+3*Re*St*St*$t.cp2.x+St*St*St*$t.p2.x,pn=Re*Re*Re*$t.p1.y+3*Re*Re*St*$t.cp1.y+3*Re*St*St*$t.cp2.y+St*St*St*$t.p2.y,Fn=.5+Math.sin(J*2+Je*8)*.35;on(kn,pn,Fn,2)}},en=(ge,U,ie,re,Ee,Ae,Pe,Xe,ft,Te,Ze,ct)=>{const Fe=Math.sin(J*Ee+Ae)*re,ht=[];ht.push({x:0,y:v*ge+Fe});for(let pt=0;pt<U.length;pt++){const _e=g*U[pt],Ke=v*(ge-ie[pt])+Math.cos(J*Ee+pt+Ae)*(re*.7);ht.push({x:_e,y:Ke})}ht.push({x:g,y:v*(ge+.03)+Fe}),d.save(),Ze>0&&(d.shadowColor=Te,d.shadowBlur=Ze,d.shadowOffsetY=ct),d.beginPath(),d.moveTo(ht[0].x,ht[0].y);for(let pt=1;pt<ht.length;pt++)d.lineTo(ht[pt].x,ht[pt].y);d.lineTo(g,v),d.lineTo(0,v),d.closePath(),d.fillStyle=Pe,d.fill(),d.strokeStyle=Xe,d.lineWidth=ft,d.stroke(),d.restore()},Dt=(ge,U,ie,re,Ee,Ae)=>{d.save(),d.globalCompositeOperation="screen",d.beginPath(),d.moveTo(0,v*ge);const Pe=16;for(let Xe=0;Xe<=Pe;Xe++){const ft=Xe/Pe*g,Te=v*ge+Math.sin(Xe/Pe*Math.PI*2+J*ie+re)*U;Xe===0?d.moveTo(ft,Te):d.lineTo(ft,Te)}d.lineTo(g,v),d.lineTo(0,v),d.closePath(),d.fillStyle=Ee,d.fill(),d.strokeStyle=Ae,d.lineWidth=1.8,d.shadowColor=Ae,d.shadowBlur=14,d.stroke(),d.restore()},zt=k.horizonHeight||"balanced",fe=zt==="low"?.08:zt==="high"?-.08:0,Mt=k.waveStrokeOpacity??1,qe=d.createLinearGradient(0,v*(.46+fe),0,v*(.68+fe));if(qe.addColorStop(0,"rgba(0, 0, 0, 0)"),X)qe.addColorStop(.5,"rgba(255, 255, 255, 0.25)");else{const ge=G==="celestial-cyan"?"rgba(7, 31, 53, 0.45)":G==="supernova-sunset"?"rgba(36, 6, 28, 0.45)":G==="nocturne-silver"?"rgba(16, 16, 23, 0.45)":G==="emerald-aurora"?"rgba(5, 46, 20, 0.45)":G==="pure-pitch-black"?"rgba(6, 6, 6, 0.45)":"rgba(20, 10, 40, 0.45)";qe.addColorStop(.5,ge)}qe.addColorStop(1,"rgba(0, 0, 0, 0)"),d.fillStyle=qe,d.fillRect(0,v*(.46+fe),g,v*.22);const ot=d.createLinearGradient(0,v*(.55+fe),0,v);ot.addColorStop(0,ve[0]),ot.addColorStop(.5,ve[1]),ot.addColorStop(1,ve[2]);const I=d.createLinearGradient(0,v*(.63+fe),0,v);I.addColorStop(0,at[0]),I.addColorStop(.5,at[1]),I.addColorStop(1,at[2]);const E=d.createLinearGradient(0,v*(.71+fe),0,v);E.addColorStop(0,we[0]),E.addColorStop(.5,we[1]),E.addColorStop(1,we[2]);const ne=d.createLinearGradient(0,v*(.79+fe),0,v);ne.addColorStop(0,He[0]),ne.addColorStop(.5,He[1]),ne.addColorStop(1,He[2]);const Ce=d.createLinearGradient(0,v*(.86+fe),0,v);Ce.addColorStop(0,_t[0]),Ce.addColorStop(.35,_t[1]),Ce.addColorStop(.7,_t[2]),Ce.addColorStop(1,_t[3]);const ye=X?"rgba(160, 140, 120, 0.12)":"rgba(0,0,0,0.55)",ke=X?"rgba(160, 140, 120, 0.16)":"rgba(0,0,0,0.65)",Oe=X?"rgba(160, 140, 120, 0.20)":"rgba(0,0,0,0.70)",pe=X?"rgba(160, 140, 120, 0.22)":"rgba(0,0,0,0.75)",me=X?"rgba(160, 140, 120, 0.26)":"rgba(0,0,0,0.80)";if(Kt==="mountains"?(en(.48+fe,[.18,.5,.82],[.14,.17,.12],12*Y,.35,0,ot,Ue,.8*Mt,ye,16,-6),Gt!=="airy"&&en(.58+fe,[.32,.66,.9],[.12,.15,.11],14*Y,.4,1.5,I,Be,.9*Mt,ke,20,-7),en(.68+fe,[.15,.44,.75],[.11,.13,.1],15*Y,.45,3.1,E,Ie,1*Mt,Oe,24,-8),Gt==="dense"&&en(.78+fe,[.28,.6,.86],[.09,.11,.08],14*Y,.4,4.4,ne,xt,1.1*Mt,pe,28,-9),en(.88+fe,[.4,.74],[.08,.07],12*Y,.35,5.8,Ce,Et,1.2*Mt,me,32,-10)):Kt==="aurora"?(Dt(.28+fe*.5,32*Y,.45,0,ot,Ue),Gt!=="airy"&&Dt(.4+fe*.5,30*Y,.5,1.6,I,Be),Dt(.54+fe*.5,26*Y,.55,3.2,E,Ie),Gt==="dense"&&Dt(.68+fe*.5,22*Y,.6,4.8,ne,xt),Q([.86+fe,.89+fe,.85+fe,.88+fe],12*Y,.35,6.2,Ce,Et,1.2*Mt,me,28,-9)):Kt==="ocean"?(Q([.62+fe,.58+fe,.65+fe,.6+fe],16*Y,.65,0,ot,Ue,.8*Mt,ye,16,-6,[.3]),Gt!=="airy"&&Q([.69+fe,.73+fe,.67+fe,.71+fe],18*Y,.7,1.8,I,Be,.9*Mt,ke,20,-7,[.55]),Q([.76+fe,.73+fe,.79+fe,.75+fe],20*Y,.75,3.4,E,Ie,1*Mt,Oe,24,-8,[.38,.82]),Gt==="dense"&&Q([.83+fe,.86+fe,.81+fe,.85+fe],16*Y,.65,4.9,ne,xt,1.1*Mt,pe,28,-9,[.65]),Q([.89+fe,.87+fe,.92+fe,.88+fe],14*Y,.55,6.2,Ce,Et,1.2*Mt,me,32,-10,[.5])):(Q([.48+fe,.56+fe,.64+fe,.68+fe],16*Y,.38,0,ot,Ue,.8*Mt,ye,16,-6,[.24,.68]),Gt!=="airy"&&Q([.66+fe,.62+fe,.55+fe,.6+fe],18*Y,.42,1.8,I,Be,.9*Mt,ke,20,-7,[.35,.82]),Q([.69+fe,.76+fe,.72+fe,.76+fe],19*Y,.46,3.4,E,Ie,1*Mt,Oe,24,-8,[.42,.78]),Gt==="dense"&&Q([.8+fe,.77+fe,.84+fe,.8+fe],16*Y,.4,4.9,ne,xt,1.1*Mt,pe,28,-9,[.18,.62]),Q([.88+fe,.91+fe,.86+fe,.9+fe],13*Y,.35,6.2,Ce,Et,1.2*Mt,me,32,-10,[.35,.8])),k.showCrossStars){const ge=.68+Math.sin(J*1.8)*.22,U=.6+Math.sin(J*1.5+1.2)*.24,ie=.64+Math.sin(J*1.9+2.5)*.2,re=.58+Math.sin(J*1.4+3.8)*.25,Ee=.52+Math.sin(J*1.7+4.6)*.22;F(g*.5,v*.08,11,ge),F(g*.18,v*.16,9.5,U),F(g*.84,v*.2,10,ie),F(g*.72,v*.34,8.5,re),F(g*.08,v*.28,8,Ee)}N(k.shootingStarMode||"occasional"),p=requestAnimationFrame(B)};return p=requestAnimationFrame(B),()=>{cancelAnimationFrame(p),window.removeEventListener("resize",A),window.removeEventListener("mousemove",D),document.removeEventListener("visibilitychange",j)}},[]),m.jsx("canvas",{ref:s,className:"fixed inset-0 pointer-events-none z-0 select-none","aria-hidden":"true"})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mf="187",Bv=0,om=1,Hv=2,Vl=1,Gv=2,no=3,ys=0,Un=1,Li=2,ua=0,so=1,xs=2,lm=3,cm=4,Vv=5,la=100,Wv=101,jv=102,Xv=103,$v=104,Yv=200,qv=201,Kv=202,Zv=203,l0=204,c0=205,Jv=206,Qv=207,e_=208,t_=209,n_=210,i_=211,r_=212,s_=213,a_=214,Sd=0,bd=1,Md=2,oo=3,wd=4,Ed=5,Td=6,Ad=7,u0=0,o_=1,l_=2,mr=0,d0=1,f0=2,h0=3,p0=4,m0=5,g0=6,x0=7,v0=300,fa=301,lo=302,ju=303,Xu=304,ha=1e3,ni=1001,Cd=1002,In=1003,c_=1004,yl=1005,ii=1006,$u=1007,jr=1008,di=1009,_0=1010,y0=1011,co=1012,gf=1013,qi=1014,Xi=1015,Ki=1016,xf=1017,vf=1018,pa=1020,S0=35902,b0=35899,M0=1021,w0=1022,$i=1023,qr=1026,Xr=1027,E0=1028,_f=1029,Ss=1030,yf=1031,Sf=1033,Wl=33776,jl=33777,Xl=33778,$l=33779,Rd=35840,Nd=35841,Pd=35842,Dd=35843,Ld=36196,Id=37492,Ud=37496,kd=37488,Fd=37489,Ql=37490,zd=37491,Od=37808,Bd=37809,Hd=37810,Gd=37811,Vd=37812,Wd=37813,jd=37814,Xd=37815,$d=37816,Yd=37817,qd=37818,Kd=37819,Zd=37820,Jd=37821,Qd=36492,ef=36494,tf=36495,nf=36283,rf=36284,ec=36285,sf=36286,u_=3200,af=0,d_=1,Vr="",ui="srgb",tc="srgb-linear",nc="linear",qt="srgb",Yu=7680,f_=519,h_=512,p_=513,m_=514,T0=515,g_=516,x_=517,A0=518,C0=519,v_=35044,um="300 es",Ui=2e3,uo=2001;function __(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ic(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function y_(){const s=ic("canvas");return s.style.display="block",s}const dm={};function fm(...s){const e="THREE."+s.shift();console.log(e,...s)}function R0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function bt(...s){s=R0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Xt(...s){s=R0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Yl(...s){const e=s.join(" ");e in dm||(dm[e]=!0,bt(...s))}function S_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const b_={[Sd]:Sd,[Md]:Td,[wd]:wd,[oo]:Ed,[bd]:bd,[Td]:Md,[Ad]:Ad,[Ed]:oo};class bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qu=Math.PI/180,of=180/Math.PI;function ho(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Vn[s&255]+Vn[s>>8&255]+Vn[s>>16&255]+Vn[s>>24&255]+"-"+Vn[e&255]+Vn[e>>8&255]+"-"+Vn[e>>16&15|64]+Vn[e>>24&255]+"-"+Vn[t&63|128]+Vn[t>>8&255]+"-"+Vn[t>>16&255]+Vn[t>>24&255]+Vn[r&255]+Vn[r>>8&255]+Vn[r>>16&255]+Vn[r>>24&255]).toLowerCase()}function Bt(s,e,t){return Math.max(e,Math.min(t,s))}function M_(s,e){return(s%e+e)%e}function Ku(s,e,t){return(1-t)*s+t*e}function w_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function bf(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function E_(s,e){if(e.constructor===Float32Array)return s;const t=bf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function T_(s,e){if(e.constructor===Float32Array)return s;const t=bf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const Pf=class Pf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Bt(this.x,e.x,t.x),this.y=Bt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Bt(this.x,e,t),this.y=Bt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Bt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Pf.prototype.isVector2=!0;let Ut=Pf;class xa{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,h){let d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3],_=l[u+0],b=l[u+1],w=l[u+2],A=l[u+3];if(v!==A||d!==_||p!==b||g!==w){let y=d*_+p*b+g*w+v*A;y<0&&(_=-_,b=-b,w=-w,A=-A,y=-y);let S=1-h;if(y<.9995){const R=Math.acos(y),O=Math.sin(R);S=Math.sin(S*R)/O,h=Math.sin(h*R)/O,d=d*S+_*h,p=p*S+b*h,g=g*S+w*h,v=v*S+A*h}else{d=d*S+_*h,p=p*S+b*h,g=g*S+w*h,v=v*S+A*h;const R=1/Math.sqrt(d*d+p*p+g*g+v*v);d*=R,p*=R,g*=R,v*=R}}e[t]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,l,u){const h=r[o],d=r[o+1],p=r[o+2],g=r[o+3],v=l[u],_=l[u+1],b=l[u+2],w=l[u+3];return e[t]=h*w+g*v+d*b-p*_,e[t+1]=d*w+g*_+p*v-h*b,e[t+2]=p*w+g*b+h*_-d*v,e[t+3]=g*w-h*v-d*_-p*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,h=Math.cos,d=Math.sin,p=h(r/2),g=h(o/2),v=h(l/2),_=d(r/2),b=d(o/2),w=d(l/2);switch(u){case"XYZ":this._x=_*g*v+p*b*w,this._y=p*b*v-_*g*w,this._z=p*g*w+_*b*v,this._w=p*g*v-_*b*w;break;case"YXZ":this._x=_*g*v+p*b*w,this._y=p*b*v-_*g*w,this._z=p*g*w-_*b*v,this._w=p*g*v+_*b*w;break;case"ZXY":this._x=_*g*v-p*b*w,this._y=p*b*v+_*g*w,this._z=p*g*w+_*b*v,this._w=p*g*v-_*b*w;break;case"ZYX":this._x=_*g*v-p*b*w,this._y=p*b*v+_*g*w,this._z=p*g*w-_*b*v,this._w=p*g*v+_*b*w;break;case"YZX":this._x=_*g*v+p*b*w,this._y=p*b*v+_*g*w,this._z=p*g*w-_*b*v,this._w=p*g*v-_*b*w;break;case"XZY":this._x=_*g*v-p*b*w,this._y=p*b*v-_*g*w,this._z=p*g*w+_*b*v,this._w=p*g*v+_*b*w;break;default:bt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],h=t[5],d=t[9],p=t[2],g=t[6],v=t[10],_=r+h+v;if(_>0){const b=.5/Math.sqrt(_+1);this._w=.25/b,this._x=(g-d)*b,this._y=(l-p)*b,this._z=(u-o)*b}else if(r>h&&r>v){const b=2*Math.sqrt(1+r-h-v);this._w=(g-d)/b,this._x=.25*b,this._y=(o+u)/b,this._z=(l+p)/b}else if(h>v){const b=2*Math.sqrt(1+h-r-v);this._w=(l-p)/b,this._x=(o+u)/b,this._y=.25*b,this._z=(d+g)/b}else{const b=2*Math.sqrt(1+v-r-h);this._w=(u-o)/b,this._x=(l+p)/b,this._y=(d+g)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,h=t._x,d=t._y,p=t._z,g=t._w;return this._x=r*g+u*h+o*p-l*d,this._y=o*g+u*d+l*h-r*p,this._z=l*g+u*p+r*d-o*h,this._w=u*g-r*h-o*d-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,h=this.dot(e);h<0&&(r=-r,o=-o,l=-l,u=-u,h=-h);let d=1-t;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);d=Math.sin(d*p)/g,t=Math.sin(t*p)/g,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+u*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Df=class Df{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,h=e.z,d=e.w,p=2*(u*o-h*r),g=2*(h*t-l*o),v=2*(l*r-u*t);return this.x=t+d*p+u*v-h*g,this.y=r+d*g+h*p-l*v,this.z=o+d*v+l*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Bt(this.x,e.x,t.x),this.y=Bt(this.y,e.y,t.y),this.z=Bt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Bt(this.x,e,t),this.y=Bt(this.y,e,t),this.z=Bt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Bt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,h=t.y,d=t.z;return this.x=o*d-l*h,this.y=l*u-r*d,this.z=r*h-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Zu.copy(this).projectOnVector(e),this.sub(Zu)}reflect(e){return this.sub(Zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Df.prototype.isVector3=!0;let de=Df;const Zu=new de,hm=new xa,Lf=class Lf{constructor(e,t,r,o,l,u,h,d,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,h,d,p)}set(e,t,r,o,l,u,h,d,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=h,g[3]=t,g[4]=l,g[5]=d,g[6]=r,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],h=r[3],d=r[6],p=r[1],g=r[4],v=r[7],_=r[2],b=r[5],w=r[8],A=o[0],y=o[3],S=o[6],R=o[1],O=o[4],D=o[7],F=o[2],L=o[5],M=o[8];return l[0]=u*A+h*R+d*F,l[3]=u*y+h*O+d*L,l[6]=u*S+h*D+d*M,l[1]=p*A+g*R+v*F,l[4]=p*y+g*O+v*L,l[7]=p*S+g*D+v*M,l[2]=_*A+b*R+w*F,l[5]=_*y+b*O+w*L,l[8]=_*S+b*D+w*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],h=e[5],d=e[6],p=e[7],g=e[8];return t*u*g-t*h*p-r*l*g+r*h*d+o*l*p-o*u*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],h=e[5],d=e[6],p=e[7],g=e[8],v=g*u-h*p,_=h*d-g*l,b=p*l-u*d,w=t*v+r*_+o*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=v*A,e[1]=(o*p-g*r)*A,e[2]=(h*r-o*u)*A,e[3]=_*A,e[4]=(g*t-o*d)*A,e[5]=(o*l-h*t)*A,e[6]=b*A,e[7]=(r*d-p*t)*A,e[8]=(u*t-r*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,h){const d=Math.cos(l),p=Math.sin(l);return this.set(r*d,r*p,-r*(d*u+p*h)+u+e,-o*p,o*d,-o*(-p*u+d*h)+h+t,0,0,1),this}scale(e,t){return Yl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ju.makeScale(e,t)),this}rotate(e){return Yl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ju.makeRotation(-e)),this}translate(e,t){return Yl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ju.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Lf.prototype.isMatrix3=!0;let wt=Lf;const Ju=new wt,pm=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mm=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function A_(){const s={enabled:!0,workingColorSpace:tc,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===qt&&(o.r=gr(o.r),o.g=gr(o.g),o.b=gr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===qt&&(o.r=da(o.r),o.g=da(o.g),o.b=da(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Vr?nc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[u].fromXYZ).multiply(this.spaces[l].toXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[tc]:{primaries:e,whitePoint:r,transfer:nc,toXYZ:pm,fromXYZ:mm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:e,whitePoint:r,transfer:qt,toXYZ:pm,fromXYZ:mm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),s}const Ot=A_();function gr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function da(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ks;class C_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ks===void 0&&(Ks=ic("canvas")),Ks.width=e.width,Ks.height=e.height;const o=Ks.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ks}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ic("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=gr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(gr(t[r]/255)*255):t[r]=gr(t[r]);return{data:t,width:e.width,height:e.height}}else return bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let R_=0;class Mf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=ho(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?l.push(Qu(o[u].image)):l.push(Qu(o[u]))}else l=Qu(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Qu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?C_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(bt("Texture: Unable to serialize Texture."),{})}let N_=0;const ed=new de;class jn extends bs{constructor(e=jn.DEFAULT_IMAGE,t=jn.DEFAULT_MAPPING,r=ni,o=ni,l=ii,u=jr,h=$i,d=di,p=jn.DEFAULT_ANISOTROPY,g=Vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=ho(),this.name="",this.source=new Mf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=d,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ed).x}get height(){return this.source.getSize(ed).y}get depth(){return this.source.getSize(ed).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){bt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){bt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==v0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ha:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case Cd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ha:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case Cd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=v0;jn.DEFAULT_ANISOTROPY=1;const If=class If{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,p=d[0],g=d[4],v=d[8],_=d[1],b=d[5],w=d[9],A=d[2],y=d[6],S=d[10];if(Math.abs(g-_)<.01&&Math.abs(v-A)<.01&&Math.abs(w-y)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+A)<.1&&Math.abs(w+y)<.1&&Math.abs(p+b+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const O=(p+1)/2,D=(b+1)/2,F=(S+1)/2,L=(g+_)/4,M=(v+A)/4,N=(w+y)/4;return O>D&&O>F?O<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(O),o=L/r,l=M/r):D>F?D<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(D),r=L/o,l=N/o):F<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(F),r=M/l,o=N/l),this.set(r,o,l,t),this}let R=Math.sqrt((y-w)*(y-w)+(v-A)*(v-A)+(_-g)*(_-g));return Math.abs(R)<.001&&(R=1),this.x=(y-w)/R,this.y=(v-A)/R,this.z=(_-g)/R,this.w=Math.acos((p+b+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Bt(this.x,e.x,t.x),this.y=Bt(this.y,e.y,t.y),this.z=Bt(this.z,e.z,t.z),this.w=Bt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Bt(this.x,e,t),this.y=Bt(this.y,e,t),this.z=Bt(this.z,e,t),this.w=Bt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Bt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};If.prototype.isVector4=!0;let un=If;class P_ extends bs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new un(0,0,e,t),this.scissorTest=!1,this.viewport=new un(0,0,e,t),this.textures=[];const o=r.count;for(let l=0;l<o;l++)this.textures[l]=new jn({width:e,height:t,depth:r.depth}),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:ii,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Mf(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends P_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class N0 extends jn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=In,this.minFilter=In,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class D_ extends jn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=In,this.minFilter=In,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const lc=class lc{constructor(e,t,r,o,l,u,h,d,p,g,v,_,b,w,A,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,h,d,p,g,v,_,b,w,A,y)}set(e,t,r,o,l,u,h,d,p,g,v,_,b,w,A,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=r,S[12]=o,S[1]=l,S[5]=u,S[9]=h,S[13]=d,S[2]=p,S[6]=g,S[10]=v,S[14]=_,S[3]=b,S[7]=w,S[11]=A,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Zs.setFromMatrixColumn(e,0).length(),l=1/Zs.setFromMatrixColumn(e,1).length(),u=1/Zs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),h=Math.sin(r),d=Math.cos(o),p=Math.sin(o),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const _=u*g,b=u*v,w=h*g,A=h*v;t[0]=d*g,t[4]=-d*v,t[8]=p,t[1]=b+w*p,t[5]=_-A*p,t[9]=-h*d,t[2]=A-_*p,t[6]=w+b*p,t[10]=u*d}else if(e.order==="YXZ"){const _=d*g,b=d*v,w=p*g,A=p*v;t[0]=_+A*h,t[4]=w*h-b,t[8]=u*p,t[1]=u*v,t[5]=u*g,t[9]=-h,t[2]=b*h-w,t[6]=A+_*h,t[10]=u*d}else if(e.order==="ZXY"){const _=d*g,b=d*v,w=p*g,A=p*v;t[0]=_-A*h,t[4]=-u*v,t[8]=w+b*h,t[1]=b+w*h,t[5]=u*g,t[9]=A-_*h,t[2]=-u*p,t[6]=h,t[10]=u*d}else if(e.order==="ZYX"){const _=u*g,b=u*v,w=h*g,A=h*v;t[0]=d*g,t[4]=w*p-b,t[8]=_*p+A,t[1]=d*v,t[5]=A*p+_,t[9]=b*p-w,t[2]=-p,t[6]=h*d,t[10]=u*d}else if(e.order==="YZX"){const _=u*d,b=u*p,w=h*d,A=h*p;t[0]=d*g,t[4]=A-_*v,t[8]=w*v+b,t[1]=v,t[5]=u*g,t[9]=-h*g,t[2]=-p*g,t[6]=b*v+w,t[10]=_-A*v}else if(e.order==="XZY"){const _=u*d,b=u*p,w=h*d,A=h*p;t[0]=d*g,t[4]=-v,t[8]=p*g,t[1]=_*v+A,t[5]=u*g,t[9]=b*v-w,t[2]=w*v-b,t[6]=h*g,t[10]=A*v+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(L_,e,I_)}lookAt(e,t,r){const o=this.elements;return li.subVectors(e,t),li.lengthSq()===0&&(li.z=1),li.normalize(),Fr.crossVectors(r,li),Fr.lengthSq()===0&&(Math.abs(r.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),Fr.crossVectors(r,li)),Fr.normalize(),Sl.crossVectors(li,Fr),o[0]=Fr.x,o[4]=Sl.x,o[8]=li.x,o[1]=Fr.y,o[5]=Sl.y,o[9]=li.y,o[2]=Fr.z,o[6]=Sl.z,o[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],h=r[4],d=r[8],p=r[12],g=r[1],v=r[5],_=r[9],b=r[13],w=r[2],A=r[6],y=r[10],S=r[14],R=r[3],O=r[7],D=r[11],F=r[15],L=o[0],M=o[4],N=o[8],J=o[12],$=o[1],j=o[5],B=o[9],k=o[13],V=o[2],H=o[6],se=o[10],ee=o[14],Y=o[3],G=o[7],X=o[11],P=o[15];return l[0]=u*L+h*$+d*V+p*Y,l[4]=u*M+h*j+d*H+p*G,l[8]=u*N+h*B+d*se+p*X,l[12]=u*J+h*k+d*ee+p*P,l[1]=g*L+v*$+_*V+b*Y,l[5]=g*M+v*j+_*H+b*G,l[9]=g*N+v*B+_*se+b*X,l[13]=g*J+v*k+_*ee+b*P,l[2]=w*L+A*$+y*V+S*Y,l[6]=w*M+A*j+y*H+S*G,l[10]=w*N+A*B+y*se+S*X,l[14]=w*J+A*k+y*ee+S*P,l[3]=R*L+O*$+D*V+F*Y,l[7]=R*M+O*j+D*H+F*G,l[11]=R*N+O*B+D*se+F*X,l[15]=R*J+O*k+D*ee+F*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],h=e[5],d=e[9],p=e[13],g=e[2],v=e[6],_=e[10],b=e[14],w=e[3],A=e[7],y=e[11],S=e[15],R=d*b-p*_,O=h*b-p*v,D=h*_-d*v,F=u*b-p*g,L=u*_-d*g,M=u*v-h*g;return t*(A*R-y*O+S*D)-r*(w*R-y*F+S*L)+o*(w*O-A*F+S*M)-l*(w*D-A*L+y*M)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],u=e[5],h=e[9],d=e[2],p=e[6],g=e[10];return t*(u*g-h*p)-r*(l*g-h*d)+o*(l*p-u*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],h=e[5],d=e[6],p=e[7],g=e[8],v=e[9],_=e[10],b=e[11],w=e[12],A=e[13],y=e[14],S=e[15],R=t*h-r*u,O=t*d-o*u,D=t*p-l*u,F=r*d-o*h,L=r*p-l*h,M=o*p-l*d,N=g*A-v*w,J=g*y-_*w,$=g*S-b*w,j=v*y-_*A,B=v*S-b*A,k=_*S-b*y,V=R*k-O*B+D*j+F*$-L*J+M*N;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/V;return e[0]=(h*k-d*B+p*j)*H,e[1]=(o*B-r*k-l*j)*H,e[2]=(A*M-y*L+S*F)*H,e[3]=(_*L-v*M-b*F)*H,e[4]=(d*$-u*k-p*J)*H,e[5]=(t*k-o*$+l*J)*H,e[6]=(y*D-w*M-S*O)*H,e[7]=(g*M-_*D+b*O)*H,e[8]=(u*B-h*$+p*N)*H,e[9]=(r*$-t*B-l*N)*H,e[10]=(w*L-A*D+S*R)*H,e[11]=(v*D-g*L-b*R)*H,e[12]=(h*J-u*j-d*N)*H,e[13]=(t*j-r*J+o*N)*H,e[14]=(A*O-w*F-y*R)*H,e[15]=(g*F-v*O+_*R)*H,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,h=e.y,d=e.z,p=l*u,g=l*h;return this.set(p*u+r,p*h-o*d,p*d+o*h,0,p*h+o*d,g*h+r,g*d-o*u,0,p*d-o*h,g*d+o*u,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,h=t._z,d=t._w,p=l+l,g=u+u,v=h+h,_=l*p,b=l*g,w=l*v,A=u*g,y=u*v,S=h*v,R=d*p,O=d*g,D=d*v,F=r.x,L=r.y,M=r.z;return o[0]=(1-(A+S))*F,o[1]=(b+D)*F,o[2]=(w-O)*F,o[3]=0,o[4]=(b-D)*L,o[5]=(1-(_+S))*L,o[6]=(y+R)*L,o[7]=0,o[8]=(w+O)*M,o[9]=(y-R)*M,o[10]=(1-(_+A))*M,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=Zs.set(o[0],o[1],o[2]).length();const h=Zs.set(o[4],o[5],o[6]).length(),d=Zs.set(o[8],o[9],o[10]).length();l<0&&(u=-u),Ai.copy(this);const p=1/u,g=1/h,v=1/d;return Ai.elements[0]*=p,Ai.elements[1]*=p,Ai.elements[2]*=p,Ai.elements[4]*=g,Ai.elements[5]*=g,Ai.elements[6]*=g,Ai.elements[8]*=v,Ai.elements[9]*=v,Ai.elements[10]*=v,t.setFromRotationMatrix(Ai),r.x=u,r.y=h,r.z=d,this}makePerspective(e,t,r,o,l,u,h=Ui,d=!1){const p=this.elements,g=2*l/(t-e),v=2*l/(r-o),_=(t+e)/(t-e),b=(r+o)/(r-o);let w,A;if(d)w=l/(u-l),A=u*l/(u-l);else if(h===Ui)w=-(u+l)/(u-l),A=-2*u*l/(u-l);else if(h===uo)w=-u/(u-l),A=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=b,p[13]=0,p[2]=0,p[6]=0,p[10]=w,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,h=Ui,d=!1){const p=this.elements,g=2/(t-e),v=2/(r-o),_=-(t+e)/(t-e),b=-(r+o)/(r-o);let w,A;if(d)w=1/(u-l),A=u/(u-l);else if(h===Ui)w=-2/(u-l),A=-(u+l)/(u-l);else if(h===uo)w=-1/(u-l),A=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=v,p[9]=0,p[13]=b,p[2]=0,p[6]=0,p[10]=w,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};lc.prototype.isMatrix4=!0;let dn=lc;const Zs=new de,Ai=new dn,L_=new de(0,0,0),I_=new de(1,1,1),Fr=new de,Sl=new de,li=new de,gm=new dn,xm=new xa;class Kr{constructor(e=0,t=0,r=0,o=Kr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],h=o[8],d=o[1],p=o[5],g=o[9],v=o[2],_=o[6],b=o[10];switch(t){case"XYZ":this._y=Math.asin(Bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,b),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,b),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,b),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Bt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,b),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(h,b));break;case"XZY":this._z=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(h,l)):(this._x=Math.atan2(-g,b),this._y=0);break;default:bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return gm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xm.setFromEuler(this),this.setFromQuaternion(xm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kr.DEFAULT_ORDER="XYZ";class P0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let U_=0;const vm=new de,Js=new xa,lr=new dn,bl=new de,Za=new de,k_=new de,F_=new xa,_m=new de(1,0,0),ym=new de(0,1,0),Sm=new de(0,0,1),bm={type:"added"},z_={type:"removed"},Qs={type:"childadded",child:null},td={type:"childremoved",child:null};class Xn extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new de,t=new Kr,r=new xa,o=new de(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new dn},normalMatrix:{value:new wt}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new P0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(_m,e)}rotateY(e){return this.rotateOnAxis(ym,e)}rotateZ(e){return this.rotateOnAxis(Sm,e)}translateOnAxis(e,t){return vm.copy(e).applyQuaternion(this.quaternion),this.position.add(vm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_m,e)}translateY(e){return this.translateOnAxis(ym,e)}translateZ(e){return this.translateOnAxis(Sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(lr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?bl.copy(e):bl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Za.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?lr.lookAt(Za,bl,this.up):lr.lookAt(bl,Za,this.up),this.quaternion.setFromRotationMatrix(lr),o&&(lr.extractRotation(o.matrixWorld),Js.setFromRotationMatrix(lr),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bm),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(z_),td.child=e,this.dispatchEvent(td),td.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),lr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),lr.multiply(e.parent.matrixWorld)),e.applyMatrix4(lr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bm),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Za,e,k_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Za,F_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(h,d){return h[d.uuid]===void 0&&(h[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const d=h.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const v=d[p];l(e.shapes,v)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let d=0,p=this.material.length;d<p;d++)h.push(l(e.materials,this.material[d]));o.material=h}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const d=this.animations[h];o.animations.push(l(e.animations,d))}}if(t){const h=u(e.geometries),d=u(e.materials),p=u(e.textures),g=u(e.images),v=u(e.shapes),_=u(e.skeletons),b=u(e.animations),w=u(e.nodes);h.length>0&&(r.geometries=h),d.length>0&&(r.materials=d),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),b.length>0&&(r.animations=b),w.length>0&&(r.nodes=w)}return r.object=o,r;function u(h){const d=[];for(const p in h){const g=h[p];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Xn.DEFAULT_UP=new de(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class io extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O_={type:"move"};class nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new io,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new io,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new de,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new de),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new io,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new de,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new de,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const h=this._targetRay,d=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const A of e.hand.values()){const y=t.getJointPose(A,r),S=this._getHandJoint(p,A);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=g.position.distanceTo(v.position),b=.02,w=.005;p.inputState.pinching&&_>b+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=b-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(O_)))}return h!==null&&(h.visible=o!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new io;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const D0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zr={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function id(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Nt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Ot.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ot.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Ot.workingColorSpace){if(e=M_(e,1),t=Bt(t,0,1),r=Bt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=id(u,l,e+1/3),this.g=id(u,l,e),this.b=id(u,l,e-1/3)}return Ot.colorSpaceToWorking(this,o),this}setStyle(e,t=ui){function r(l){l!==void 0&&parseFloat(l)<1&&bt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(100,parseFloat(l[1]))/100,Math.min(100,parseFloat(l[2]))/100,Math.min(100,parseFloat(l[3]))/100,t);break;case"hsl":case"hsla":if(l=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(h))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:bt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);bt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ui){const r=D0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):bt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}copyLinearToSRGB(e){return this.r=da(e.r),this.g=da(e.g),this.b=da(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return Ot.workingToColorSpace(Wn.copy(this),e),Math.round(Bt(Wn.r*255,0,255))*65536+Math.round(Bt(Wn.g*255,0,255))*256+Math.round(Bt(Wn.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ot.workingColorSpace){Ot.workingToColorSpace(Wn.copy(this),t);const r=Wn.r,o=Wn.g,l=Wn.b,u=Math.max(r,o,l),h=Math.min(r,o,l);let d,p;const g=(h+u)/2;if(h===u)d=0,p=0;else{const v=u-h;switch(p=g<=.5?v/(u+h):v/(2-u-h),u){case r:d=(o-l)/v+(o<l?6:0);break;case o:d=(l-r)/v+2;break;case l:d=(r-o)/v+4;break}d/=6}return e.h=d,e.s=p,e.l=g,e}getRGB(e,t=Ot.workingColorSpace){return Ot.workingToColorSpace(Wn.copy(this),t),e.r=Wn.r,e.g=Wn.g,e.b=Wn.b,e}getStyle(e=ui){Ot.workingToColorSpace(Wn.copy(this),e);const t=Wn.r,r=Wn.g,o=Wn.b;return e!==ui?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(zr),this.setHSL(zr.h+e,zr.s+t,zr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(zr),e.getHSL(Ml);const r=Ku(zr.h,Ml.h,t),o=Ku(zr.s,Ml.s,t),l=Ku(zr.l,Ml.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wn=new Nt;Nt.NAMES=D0;class B_ extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kr,this.environmentIntensity=1,this.environmentRotation=new Kr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ci=new de,cr=new de,rd=new de,ur=new de,ea=new de,ta=new de,Mm=new de,sd=new de,ad=new de,od=new de,ld=new un,cd=new un,ud=new un;class Ii{constructor(e=new de,t=new de,r=new de){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ci.subVectors(e,t),o.cross(Ci);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Ci.subVectors(o,t),cr.subVectors(r,t),rd.subVectors(e,t);const u=Ci.dot(Ci),h=Ci.dot(cr),d=Ci.dot(rd),p=cr.dot(cr),g=cr.dot(rd),v=u*p-h*h;if(v===0)return l.set(0,0,0),null;const _=1/v,b=(p*d-h*g)*_,w=(u*g-h*d)*_;return l.set(1-b-w,w,b)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,ur)===null?!1:ur.x>=0&&ur.y>=0&&ur.x+ur.y<=1}static getInterpolation(e,t,r,o,l,u,h,d){return this.getBarycoord(e,t,r,o,ur)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,ur.x),d.addScaledVector(u,ur.y),d.addScaledVector(h,ur.z),d)}static getInterpolatedAttribute(e,t,r,o,l,u){return ld.setScalar(0),cd.setScalar(0),ud.setScalar(0),ld.fromBufferAttribute(e,t),cd.fromBufferAttribute(e,r),ud.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(ld,l.x),u.addScaledVector(cd,l.y),u.addScaledVector(ud,l.z),u}static isFrontFacing(e,t,r,o){return Ci.subVectors(r,t),cr.subVectors(e,t),Ci.cross(cr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),cr.subVectors(this.a,this.b),Ci.cross(cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Ii.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,h;ea.subVectors(o,r),ta.subVectors(l,r),sd.subVectors(e,r);const d=ea.dot(sd),p=ta.dot(sd);if(d<=0&&p<=0)return t.copy(r);ad.subVectors(e,o);const g=ea.dot(ad),v=ta.dot(ad);if(g>=0&&v<=g)return t.copy(o);const _=d*v-g*p;if(_<=0&&d>=0&&g<=0&&d-g>0)return u=d/(d-g),t.copy(r).addScaledVector(ea,u);od.subVectors(e,l);const b=ea.dot(od),w=ta.dot(od);if(w>=0&&b<=w)return t.copy(l);const A=b*p-d*w;if(A<=0&&p>=0&&w<=0)return h=p/(p-w),t.copy(r).addScaledVector(ta,h);const y=g*w-b*v;if(y<=0&&v-g>=0&&b-w>=0)return Mm.subVectors(l,o),h=(v-g)/(v-g+(b-w)),t.copy(o).addScaledVector(Mm,h);const S=1/(y+A+_);return u=A*S,h=_*S,t.copy(r).addScaledVector(ea,u).addScaledVector(ta,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class po{constructor(e=new de(1/0,1/0,1/0),t=new de(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let u=0,h=l.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Ri):Ri.fromBufferAttribute(l,u),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),wl.copy(r.boundingBox)),wl.applyMatrix4(e.matrixWorld),this.union(wl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ja),El.subVectors(this.max,Ja),na.subVectors(e.a,Ja),ia.subVectors(e.b,Ja),ra.subVectors(e.c,Ja),Or.subVectors(ia,na),Br.subVectors(ra,ia),ds.subVectors(na,ra);let t=[0,-Or.z,Or.y,0,-Br.z,Br.y,0,-ds.z,ds.y,Or.z,0,-Or.x,Br.z,0,-Br.x,ds.z,0,-ds.x,-Or.y,Or.x,0,-Br.y,Br.x,0,-ds.y,ds.x,0];return!dd(t,na,ia,ra,El)||(t=[1,0,0,0,1,0,0,0,1],!dd(t,na,ia,ra,El))?!1:(Tl.crossVectors(Or,Br),t=[Tl.x,Tl.y,Tl.z],dd(t,na,ia,ra,El))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const dr=[new de,new de,new de,new de,new de,new de,new de,new de],Ri=new de,wl=new po,na=new de,ia=new de,ra=new de,Or=new de,Br=new de,ds=new de,Ja=new de,El=new de,Tl=new de,fs=new de;function dd(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){fs.fromArray(s,l);const h=o.x*Math.abs(fs.x)+o.y*Math.abs(fs.y)+o.z*Math.abs(fs.z),d=e.dot(fs),p=t.dot(fs),g=r.dot(fs);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>h)return!1}return!0}const vn=new de,Al=new Ut;let H_=0;class vs extends bs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:H_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=v_,this.updateRanges=[],this.gpuType=Xi,this.version=0,this._normalizationScale=e!==void 0?bf(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Al.fromBufferAttribute(this,t),Al.applyMatrix3(e),this.setXY(t,Al.x,Al.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix3(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):E_(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):T_(e,this.array)}}class L0 extends vs{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class I0 extends vs{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Pn extends vs{constructor(e,t,r){super(new Float32Array(e),t,r)}}const G_=new po,Qa=new de,fd=new de;class wf{constructor(e=new de,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):G_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qa.subVectors(e,this.center);const t=Qa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Qa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qa.copy(e.center).add(fd)),this.expandByPoint(Qa.copy(e.center).sub(fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let V_=0;const vi=new dn,hd=new Xn,sa=new de,ci=new po,eo=new po,Nn=new de;class Zi extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(__(e)?I0:L0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new wt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,t,r){return vi.makeTranslation(e,t,r),this.applyMatrix4(vi),this}scale(e,t,r){return vi.makeScale(e,t,r),this.applyMatrix4(vi),this}lookAt(e){return hd.lookAt(e),hd.updateMatrix(),this.applyMatrix4(hd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sa).negate(),this.translate(sa.x,sa.y,sa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Pn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new po);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new de(-1/0,-1/0,-1/0),new de(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];ci.setFromBufferAttribute(l),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new de,1/0);return}if(e){const r=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const h=t[l];eo.setFromBufferAttribute(h),this.morphTargetsRelative?(Nn.addVectors(ci.min,eo.min),ci.expandByPoint(Nn),Nn.addVectors(ci.max,eo.max),ci.expandByPoint(Nn)):(ci.expandByPoint(eo.min),ci.expandByPoint(eo.max))}ci.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)Nn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Nn));if(t)for(let l=0,u=t.length;l<u;l++){const h=t[l],d=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Nn.fromBufferAttribute(h,p),d&&(sa.fromBufferAttribute(e,p),Nn.add(sa)),o=Math.max(o,r.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new vs(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const h=[],d=[],p=new Uint8Array(r.count);for(let J=0;J<r.count;J++)h[J]=new de,d[J]=new de;const g=new de,v=new de,_=new de,b=new Ut,w=new Ut,A=new Ut,y=new de,S=new de;function R(J,$,j){p[J]=p[$]=p[j]=1,g.fromBufferAttribute(r,J),v.fromBufferAttribute(r,$),_.fromBufferAttribute(r,j),b.fromBufferAttribute(l,J),w.fromBufferAttribute(l,$),A.fromBufferAttribute(l,j),v.sub(g),_.sub(g),w.sub(b),A.sub(b);const B=1/(w.x*A.y-A.x*w.y);isFinite(B)&&(y.copy(v).multiplyScalar(A.y).addScaledVector(_,-w.y).multiplyScalar(B),S.copy(_).multiplyScalar(w.x).addScaledVector(v,-A.x).multiplyScalar(B),h[J].add(y),h[$].add(y),h[j].add(y),d[J].add(S),d[$].add(S),d[j].add(S))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let J=0,$=O.length;J<$;++J){const j=O[J],B=j.start,k=j.count;for(let V=B,H=B+k;V<H;V+=3)R(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const D=new de,F=new de,L=new de,M=new de;function N(J){L.fromBufferAttribute(o,J),M.copy(L);const $=h[J];D.copy($),D.sub(L.multiplyScalar(L.dot($))).normalize(),F.crossVectors(M,$);const B=F.dot(d[J])<0?-1:1;u.setXYZW(J,D.x,D.y,D.z,B)}for(let J=0,$=r.count;J<$;++J)p[J]&&N(J);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new vs(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,b=r.count;_<b;_++)r.setXYZ(_,0,0,0);const o=new de,l=new de,u=new de,h=new de,d=new de,p=new de,g=new de,v=new de;if(e)for(let _=0,b=e.count;_<b;_+=3){const w=e.getX(_+0),A=e.getX(_+1),y=e.getX(_+2);o.fromBufferAttribute(t,w),l.fromBufferAttribute(t,A),u.fromBufferAttribute(t,y),g.subVectors(u,l),v.subVectors(o,l),g.cross(v),h.fromBufferAttribute(r,w),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,y),h.add(g),d.add(g),p.add(g),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,b=t.count;_<b;_+=3)o.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),g.subVectors(u,l),v.subVectors(o,l),g.cross(v),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Nn.fromBufferAttribute(e,t),Nn.normalize(),e.setXYZ(t,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function e(h,d){const p=h.array,g=h.itemSize,v=h.normalized,_=new p.constructor(d.length*g);let b=0,w=0;for(let A=0,y=d.length;A<y;A++){h.isInterleavedBufferAttribute?b=d[A]*h.data.stride+h.offset:b=d[A]*g;for(let S=0;S<g;S++)_[w++]=p[b++]}return new vs(_,g,v)}if(this.index===null)return bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zi,r=this.index.array,o=this.attributes;for(const h in o){const d=o[h],p=e(d,r);t.setAttribute(h,p)}const l=this.morphAttributes;for(const h in l){const d=[],p=l[h];for(let g=0,v=p.length;g<v;g++){const _=p[g],b=e(_,r);d.push(b)}t.morphAttributes[h]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,d=u.length;h<d;h++){const p=u[h];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const p=r[d];e.data.attributes[d]=p.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let v=0,_=p.length;v<_;v++){const b=p[v];g.push(b.toJSON(e.data))}g.length>0&&(o[d]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],v=l[p];for(let _=0,b=v.length;_<b;_++)g.push(v[_].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pd=new de,W_=new de,j_=new wt;class Gr{constructor(e=new de(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=pd.subVectors(r,t).cross(W_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(pd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||j_.getNormalMatrix(e),o=this.coplanarPoint(pd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let X_=0;class mo extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=ho(),this.name="",this.type="Material",this.blending=so,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=l0,this.blendDst=c0,this.blendEquation=la,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=f_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yu,this.stencilZFail=Yu,this.stencilZPass=Yu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){bt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){bt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const h in l){const d=l[h];delete d.metadata,u.push(d)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Nt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Gr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Ut().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ut().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const fr=new de,md=new de,Cl=new de,Rl=new de;class $_{constructor(e=new de,t=new de(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fr.copy(this.origin).addScaledVector(this.direction,t),fr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){md.copy(e).add(t).multiplyScalar(.5),Cl.copy(t).sub(e).normalize(),Rl.copy(this.origin).sub(md);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Cl),h=Rl.dot(this.direction),d=-Rl.dot(Cl),p=Rl.lengthSq(),g=Math.abs(1-u*u);let v,_,b,w;if(g>0)if(v=u*d-h,_=u*h-d,w=l*g,v>=0)if(_>=-w)if(_<=w){const A=1/g;v*=A,_*=A,b=v*(v+u*_+2*h)+_*(u*v+_+2*d)+p}else _=l,v=Math.max(0,-(u*_+h)),b=-v*v+_*(_+2*d)+p;else _=-l,v=Math.max(0,-(u*_+h)),b=-v*v+_*(_+2*d)+p;else _<=-w?(v=Math.max(0,-(-u*l+h)),_=v>0?-l:Math.min(Math.max(-l,-d),l),b=-v*v+_*(_+2*d)+p):_<=w?(v=0,_=Math.min(Math.max(-l,-d),l),b=_*(_+2*d)+p):(v=Math.max(0,-(u*l+h)),_=v>0?l:Math.min(Math.max(-l,-d),l),b=-v*v+_*(_+2*d)+p);else _=u>0?-l:l,v=Math.max(0,-(u*_+h)),b=-v*v+_*(_+2*d)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(md).addScaledVector(Cl,_),b}intersectSphere(e,t){if(e.radius<0)return null;fr.subVectors(e.center,this.origin);const r=fr.dot(this.direction),o=fr.dot(fr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),h=r-u,d=r+u;return d<0?null:h<0?this.at(d,t):this.at(h,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,h,d;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(r=(e.min.x-_.x)*p,o=(e.max.x-_.x)*p):(r=(e.max.x-_.x)*p,o=(e.min.x-_.x)*p),g>=0?(l=(e.min.y-_.y)*g,u=(e.max.y-_.y)*g):(l=(e.max.y-_.y)*g,u=(e.min.y-_.y)*g),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),v>=0?(h=(e.min.z-_.z)*v,d=(e.max.z-_.z)*v):(h=(e.max.z-_.z)*v,d=(e.min.z-_.z)*v),r>d||h>o)||((h>r||r!==r)&&(r=h),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,fr)!==null}intersectTriangle(e,t,r,o,l){const u=this.origin,h=this.direction,d=h.x,p=h.y,g=h.z,v=e.x-u.x,_=e.y-u.y,b=e.z-u.z,w=t.x-u.x,A=t.y-u.y,y=t.z-u.z,S=r.x-u.x,R=r.y-u.y,O=r.z-u.z,D=Math.abs(d),F=Math.abs(p),L=Math.abs(g);let M,N,J,$,j,B,k,V,H,se,ee,Y;if(D>=F&&D>=L?(J=d,B=v,H=w,Y=S,d>=0?(M=p,N=g,$=_,j=b,k=A,V=y,se=R,ee=O):(M=g,N=p,$=b,j=_,k=y,V=A,se=O,ee=R)):F>=L?(J=p,B=_,H=A,Y=R,p>=0?(M=g,N=d,$=b,j=v,k=y,V=w,se=O,ee=S):(M=d,N=g,$=v,j=b,k=w,V=y,se=S,ee=O)):(J=g,B=b,H=y,Y=O,g>=0?(M=d,N=p,$=v,j=_,k=w,V=A,se=S,ee=R):(M=p,N=d,$=_,j=v,k=A,V=w,se=R,ee=S)),J===0)return null;const G=M/J,X=N/J,P=1/J,K=$-G*B,be=j-X*B,z=k-G*H,xe=V-X*H,Se=se-G*Y,Ne=ee-X*Y,ve=Se*xe-Ne*z,Ue=K*Ne-be*Se,at=z*be-xe*K;if(o){if(ve<0||Ue<0||at<0)return null}else if((ve<0||Ue<0||at<0)&&(ve>0||Ue>0||at>0))return null;const Be=ve+Ue+at;if(Be===0)return null;const we=P*(ve*B+Ue*H+at*Y);return(Be>0?we<0:we>0)?null:this.at(we/Be,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ql extends mo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kr,this.combine=u0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wm=new dn,hs=new $_,Nl=new wf,Em=new de,Pl=new de,Dl=new de,Ll=new de,gd=new de,Il=new de,Tm=new de,Ul=new de;class _n extends Xn{constructor(e=new Zi,t=new ql){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(l&&h){Il.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const g=h[d],v=l[d];g!==0&&(gd.fromBufferAttribute(v,e),u?Il.addScaledVector(gd,g):Il.addScaledVector(gd.sub(t),g))}t.add(Il)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Nl.copy(r.boundingSphere),Nl.applyMatrix4(l),hs.copy(e.ray).recast(e.near),!(Nl.containsPoint(hs.origin)===!1&&(hs.intersectSphere(Nl,Em)===null||hs.origin.distanceToSquared(Em)>(e.far-e.near)**2))&&(wm.copy(l).invert(),hs.copy(e.ray).applyMatrix4(wm),!(r.boundingBox!==null&&hs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,h=l.index,d=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,_=l.groups,b=l.drawRange;if(h!==null)if(Array.isArray(u))for(let w=0,A=_.length;w<A;w++){const y=_[w],S=u[y.materialIndex],R=Math.max(y.start,b.start),O=Math.min(h.count,Math.min(y.start+y.count,b.start+b.count));for(let D=R,F=O;D<F;D+=3){const L=h.getX(D),M=h.getX(D+1),N=h.getX(D+2);o=kl(this,S,e,r,p,g,v,L,M,N),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const w=Math.max(0,b.start),A=Math.min(h.count,b.start+b.count);for(let y=w,S=A;y<S;y+=3){const R=h.getX(y),O=h.getX(y+1),D=h.getX(y+2);o=kl(this,u,e,r,p,g,v,R,O,D),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let w=0,A=_.length;w<A;w++){const y=_[w],S=u[y.materialIndex],R=Math.max(y.start,b.start),O=Math.min(d.count,Math.min(y.start+y.count,b.start+b.count));for(let D=R,F=O;D<F;D+=3){const L=D,M=D+1,N=D+2;o=kl(this,S,e,r,p,g,v,L,M,N),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const w=Math.max(0,b.start),A=Math.min(d.count,b.start+b.count);for(let y=w,S=A;y<S;y+=3){const R=y,O=y+1,D=y+2;o=kl(this,u,e,r,p,g,v,R,O,D),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function Y_(s,e,t,r,o,l,u,h){let d;if(e.side===Un?d=r.intersectTriangle(u,l,o,!0,h):d=r.intersectTriangle(o,l,u,e.side===ys,h),d===null)return null;Ul.copy(h),Ul.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Ul);return p<t.near||p>t.far?null:{distance:p,point:Ul.clone(),object:s}}function kl(s,e,t,r,o,l,u,h,d,p){s.getVertexPosition(h,Pl),s.getVertexPosition(d,Dl),s.getVertexPosition(p,Ll);const g=Y_(s,e,t,r,Pl,Dl,Ll,Tm);if(g){const v=new de;Ii.getBarycoord(Tm,Pl,Dl,Ll,v),o&&(g.uv=Ii.getInterpolatedAttribute(o,h,d,p,v,new Ut)),l&&(g.uv1=Ii.getInterpolatedAttribute(l,h,d,p,v,new Ut)),u&&(g.normal=Ii.getInterpolatedAttribute(u,h,d,p,v,new de),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:d,c:p,normal:new de,materialIndex:0};Ii.getNormal(Pl,Dl,Ll,_.normal),g.face=_,g.barycoord=v}return g}class q_ extends jn{constructor(e=null,t=1,r=1,o,l,u,h,d,p=In,g=In,v,_){super(null,u,h,d,p,g,o,l,v,_),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ps=new wf,K_=new Ut(.5,.5),Fl=new de;class fo{constructor(e=new Gr,t=new Gr,r=new Gr,o=new Gr,l=new Gr,u=new Gr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(r),h[3].copy(o),h[4].copy(l),h[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ui,r=!1){const o=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],p=l[3],g=l[4],v=l[5],_=l[6],b=l[7],w=l[8],A=l[9],y=l[10],S=l[11],R=l[12],O=l[13],D=l[14],F=l[15];if(o[0].setComponents(p-u,b-g,S-w,F-R).normalize(),o[1].setComponents(p+u,b+g,S+w,F+R).normalize(),o[2].setComponents(p+h,b+v,S+A,F+O).normalize(),o[3].setComponents(p-h,b-v,S-A,F-O).normalize(),r)o[4].setComponents(d,_,y,D).normalize(),o[5].setComponents(p-d,b-_,S-y,F-D).normalize();else if(o[4].setComponents(p-d,b-_,S-y,F-D).normalize(),t===Ui)o[5].setComponents(p+d,b+_,S+y,F+D).normalize();else if(t===uo)o[5].setComponents(d,_,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){ps.center.set(0,0,0);const t=K_.distanceTo(e.center);return ps.radius=.7071067811865476+t,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Fl.x=o.normal.x>0?e.max.x:e.min.x,Fl.y=o.normal.y>0?e.max.y:e.min.y,Fl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Fl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Am=new dn;class Ef{constructor(){this.coordinateSystem=Ui,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let o=0;o<t.length;o++){const l=t[o];Am.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),r[o]===void 0&&(r[o]=new fo),r[o].setFromProjectionMatrix(Am,l.coordinateSystem,l.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let o=0;o<e._count;o++)t[o]===void 0&&(t[o]=new fo),t[o].copy(r[o]);return this._count=e._count,this}clone(){return new Ef().copy(this)}}class U0 extends jn{constructor(e=[],t=fa,r,o,l,u,h,d,p,g){super(e,t,r,o,l,u,h,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cc extends jn{constructor(e,t,r,o,l,u,h,d,p){super(e,t,r,o,l,u,h,d,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ma extends jn{constructor(e,t,r=qi,o,l,u,h=In,d=In,p,g=qr,v=1){if(g!==qr&&g!==Xr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:v};super(_,o,l,u,h,d,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class k0 extends ma{constructor(e,t=qi,r=fa,o,l,u=In,h=In,d,p=qr){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,t,r,o,l,u,h,d,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class F0 extends jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class go extends Zi{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const h=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const d=[],p=[],g=[],v=[];let _=0,b=0;w("z","y","x",-1,-1,r,t,e,u,l,0),w("z","y","x",1,-1,r,t,-e,u,l,1),w("x","z","y",1,1,e,r,t,o,u,2),w("x","z","y",1,-1,e,r,-t,o,u,3),w("x","y","z",1,-1,e,t,r,o,l,4),w("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new Pn(p,3)),this.setAttribute("normal",new Pn(g,3)),this.setAttribute("uv",new Pn(v,2));function w(A,y,S,R,O,D,F,L,M,N,J){const $=D/M,j=F/N,B=D/2,k=F/2,V=L/2,H=M+1,se=N+1;let ee=0,Y=0;const G=new de;for(let X=0;X<se;X++){const P=X*j-k;for(let K=0;K<H;K++){const be=K*$-B;G[A]=be*R,G[y]=P*O,G[S]=V,p.push(G.x,G.y,G.z),G[A]=0,G[y]=0,G[S]=L>0?1:-1,g.push(G.x,G.y,G.z),v.push(K/M),v.push(1-X/N),ee+=1}}for(let X=0;X<N;X++)for(let P=0;P<M;P++){const K=_+P+H*X,be=_+P+H*(X+1),z=_+(P+1)+H*(X+1),xe=_+(P+1)+H*X;d.push(K,be,xe),d.push(be,z,xe),Y+=6}h.addGroup(b,Y,J),b+=Y,_+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Tf extends Zi{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,h=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:h,thetaLength:d};const p=this;o=Math.floor(o),l=Math.floor(l);const g=[],v=[],_=[],b=[];let w=0;const A=[],y=r/2;let S=0;R(),u===!1&&(e>0&&O(!0),t>0&&O(!1)),this.setIndex(g),this.setAttribute("position",new Pn(v,3)),this.setAttribute("normal",new Pn(_,3)),this.setAttribute("uv",new Pn(b,2));function R(){const D=new de,F=new de;let L=0;const M=(t-e)/r;for(let N=0;N<=l;N++){const J=[],$=N/l,j=$*(t-e)+e;for(let B=0;B<=o;B++){const k=B/o,V=k*d+h,H=Math.sin(V),se=Math.cos(V);F.x=j*H,F.y=-$*r+y,F.z=j*se,v.push(F.x,F.y,F.z),D.set(H,M,se).normalize(),_.push(D.x,D.y,D.z),b.push(k,1-$),J.push(w++)}A.push(J)}for(let N=0;N<o;N++)for(let J=0;J<l;J++){const $=A[J][N],j=A[J+1][N],B=A[J+1][N+1],k=A[J][N+1];(e>0||J!==0)&&(g.push($,j,k),L+=3),(t>0||J!==l-1)&&(g.push(j,B,k),L+=3)}p.addGroup(S,L,0),S+=L}function O(D){const F=w,L=new Ut,M=new de;let N=0;const J=D===!0?e:t,$=D===!0?1:-1;for(let B=1;B<=o;B++)v.push(0,y*$,0),_.push(0,$,0),b.push(.5,.5),w++;const j=w;for(let B=0;B<=o;B++){const V=B/o*d+h,H=Math.cos(V),se=Math.sin(V);M.x=J*se,M.y=y*$,M.z=J*H,v.push(M.x,M.y,M.z),_.push(0,$,0),L.x=H*.5+.5,L.y=se*.5*$+.5,b.push(L.x,L.y),w++}for(let B=0;B<o;B++){const k=F+B,V=j+B;D===!0?g.push(V,V+1,k):g.push(V+1,V,k),N+=3}p.addGroup(S,N,D===!0?1:2),S+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Af extends Tf{constructor(e=1,t=1,r=32,o=1,l=!1,u=0,h=Math.PI*2){super(0,e,t,r,o,l,u,h),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:h}}static fromJSON(e){return new Af(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xo extends Zi{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,h=Math.floor(r),d=Math.floor(o),p=h+1,g=d+1,v=e/h,_=t/d,b=[],w=[],A=[],y=[];for(let S=0;S<g;S++){const R=S*_-u;for(let O=0;O<p;O++){const D=O*v-l;w.push(D,-R,0),A.push(0,0,1),y.push(O/h),y.push(1-S/d)}}for(let S=0;S<d;S++)for(let R=0;R<h;R++){const O=R+p*S,D=R+p*(S+1),F=R+1+p*(S+1),L=R+1+p*S;b.push(O,D,L),b.push(D,F,L)}this.setIndex(b),this.setAttribute("position",new Pn(w,3)),this.setAttribute("normal",new Pn(A,3)),this.setAttribute("uv",new Pn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Cf extends Zi{constructor(e=.5,t=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const h=[],d=[],p=[],g=[];let v=e;const _=(t-e)/o,b=new de,w=new Ut;for(let A=0;A<=o;A++){for(let y=0;y<=r;y++){const S=l+y/r*u;b.x=v*Math.cos(S),b.y=v*Math.sin(S),d.push(b.x,b.y,b.z),p.push(0,0,1),w.x=(b.x/t+1)/2,w.y=(b.y/t+1)/2,g.push(w.x,w.y)}v+=_}for(let A=0;A<o;A++){const y=A*(r+1);for(let S=0;S<r;S++){const R=S+y,O=R,D=R+r+1,F=R+r+2,L=R+1;h.push(O,D,L),h.push(D,F,L)}}this.setIndex(h),this.setAttribute("position",new Pn(d,3)),this.setAttribute("normal",new Pn(p,3)),this.setAttribute("uv",new Pn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ni extends Zi{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:h},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const d=Math.min(u+h,Math.PI);let p=0;const g=[],v=new de,_=new de,b=[],w=[],A=[],y=[];for(let S=0;S<=r;S++){const R=[],O=S/r,D=u+O*h,F=e*Math.cos(D),L=Math.sqrt(e*e-F*F);let M=0;S===0&&u===0?M=.5/t:S===r&&d===Math.PI&&(M=-.5/t);for(let N=0;N<=t;N++){const J=N/t,$=o+J*l;v.x=-L*Math.cos($),v.y=F,v.z=L*Math.sin($),w.push(v.x,v.y,v.z),_.copy(v).normalize(),A.push(_.x,_.y,_.z),y.push(J+M,1-O),R.push(p++)}g.push(R)}for(let S=0;S<r;S++)for(let R=0;R<t;R++){const O=g[S][R+1],D=g[S][R],F=g[S+1][R],L=g[S+1][R+1];(S!==0||u>0)&&b.push(O,D,L),(S!==r-1||d<Math.PI)&&b.push(D,F,L)}this.setIndex(b),this.setAttribute("position",new Pn(w,3)),this.setAttribute("normal",new Pn(A,3)),this.setAttribute("uv",new Pn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ga(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(Cm(o))o.isRenderTargetTexture?(bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Cm(o[0])){const l=[];for(let u=0,h=o.length;u<h;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function qn(s){const e={};for(let t=0;t<s.length;t++){const r=ga(s[t]);for(const o in r)e[o]=r[o]}return e}function Cm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Z_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function z0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ot.workingColorSpace}const J_={clone:ga,merge:qn};var Q_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ey=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends mo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Q_,this.fragmentShader=ey,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ga(e.uniforms),this.uniformsGroups=Z_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new Nt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Ut().fromArray(o.value);break;case"v3":this.uniforms[r].value=new de().fromArray(o.value);break;case"v4":this.uniforms[r].value=new un().fromArray(o.value);break;case"m3":this.uniforms[r].value=new wt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new dn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class ty extends _i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zl extends mo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=af,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ny extends mo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=u_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iy extends mo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class O0 extends Xn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const xd=new dn,Rm=new de,Nm=new de;class ry{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.mapType=di,this.map=null,this.mapPass=null,this.matrix=new dn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fo,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new un(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Rm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rm),Nm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,o){xd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(xd,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,h=o?o.w/l.y:1,d=o?o.x/l.x:0,p=o?o.y/l.y:0;e.coordinateSystem===uo||e.reversedDepth?t.set(.5*u,0,0,.5*u+d,0,.5*h,0,.5*h+p,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+d,0,.5*h,0,.5*h+p,0,0,.5,.5,0,0,0,1),t.multiply(xd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ol=new de,Bl=new xa,Vi=new de;class B0 extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ol,Bl,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ol,Bl,Vi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Ol,Bl,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ol,Bl,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Hr=new de,Pm=new Ut,Dm=new Ut;class Di extends B0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=of*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return of*2*Math.atan(Math.tan(qu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z),Hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z)}getViewSize(e,t){return this.getViewBounds(e,Pm,Dm),t.subVectors(Dm,Pm)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qu*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/d,t-=u.offsetY*r/p,o*=u.width/d,r*=u.height/p}const h=this.filmOffset;h!==0&&(l+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class H0 extends B0{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,h=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,h-=g*this.view.offsetY,d=h-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,h,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class sy extends ry{constructor(){super(new H0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ay extends O0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xn.DEFAULT_UP),this.updateMatrix(),this.target=new Xn,this.shadow=new sy}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class oy extends O0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const aa=-90,oa=1;class lf extends Xn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Di(aa,oa,e,t);o.layers=this.layers,this.add(o);const l=new Di(aa,oa,e,t);l.layers=this.layers,this.add(l);const u=new Di(aa,oa,e,t);u.layers=this.layers,this.add(u);const h=new Di(aa,oa,e,t);h.layers=this.layers,this.add(h);const d=new Di(aa,oa,e,t);d.layers=this.layers,this.add(d);const p=new Di(aa,oa,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,h,d]=t;for(const p of t)this.remove(p);if(e===Ui)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===uo)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,h,d,p,g]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.mipmapsAutoUpdate=A,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(v,_,b),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class ly extends Di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Lm(s,e,t,r){const o=cy(r);switch(t){case M0:return s*e;case E0:return s*e/o.components*o.byteLength;case _f:return s*e/o.components*o.byteLength;case Ss:return s*e*2/o.components*o.byteLength;case yf:return s*e*2/o.components*o.byteLength;case w0:return s*e*3/o.components*o.byteLength;case $i:return s*e*4/o.components*o.byteLength;case Sf:return s*e*4/o.components*o.byteLength;case Wl:case jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xl:case $l:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Nd:case Dd:return Math.max(s,16)*Math.max(e,8)/4;case Rd:case Pd:return Math.max(s,8)*Math.max(e,8)/2;case Ld:case Id:case kd:case Fd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ud:case Ql:case zd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Od:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Hd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case jd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Xd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case $d:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case qd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Kd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Zd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Jd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Qd:case ef:case tf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case nf:case rf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ec:case sf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cy(s){switch(s){case di:case _0:return{byteLength:1,components:1};case co:case y0:case Ki:return{byteLength:2,components:1};case xf:case vf:return{byteLength:2,components:4};case qi:case gf:case Xi:return{byteLength:4,components:1};case S0:case b0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mf}}));typeof window<"u"&&(window.__THREE__?bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function G0(){let s=null,e=!1,t=null,r=null;function o(l,u){r=s.requestAnimationFrame(o),t(l,u)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function uy(s){const e=new WeakMap;function t(h,d){const p=h.array,g=h.usage,v=p.byteLength,_=s.createBuffer();s.bindBuffer(d,_),s.bufferData(d,p,g),h.onUploadCallback();let b;if(p instanceof Float32Array)b=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)b=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?b=s.HALF_FLOAT:b=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=s.SHORT;else if(p instanceof Uint32Array)b=s.UNSIGNED_INT;else if(p instanceof Int32Array)b=s.INT;else if(p instanceof Int8Array)b=s.BYTE;else if(p instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,d,p){const g=d.array,v=d.updateRanges;if(s.bindBuffer(p,h),v.length===0)s.bufferSubData(p,0,g);else{v.sort((b,w)=>b.start-w.start);let _=0;for(let b=1;b<v.length;b++){const w=v[_],A=v[b];A.start<=w.start+w.count+1?w.count=Math.max(w.count,A.start+A.count-w.start):(++_,v[_]=A)}v.length=_+1;for(let b=0,w=v.length;b<w;b++){const A=v[b];s.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=e.get(h);d&&(s.deleteBuffer(d.buffer),e.delete(h))}function u(h,d){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,t(h,d));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,d),p.version=h.version}}return{get:o,remove:l,update:u}}var dy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fy=`#ifdef USE_ALPHAHASH
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
#endif`,hy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,py=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,my=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xy=`#ifdef USE_AOMAP
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
#endif`,vy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_y=`#ifdef USE_BATCHING
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
#endif`,yy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,by=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,My=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wy=`#ifdef USE_IRIDESCENCE
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
#endif`,Ey=`#ifdef USE_BUMPMAP
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
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ry=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ny=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Py=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Dy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ly=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Iy=`#define PI 3.141592653589793
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
} // validated`,Uy=`vec3 transformedNormal = objectNormal;
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
#endif`,Fy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Oy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,By="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gy=`#ifdef USE_ENVMAP
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
#endif`,Vy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Wy=`#ifdef USE_ENVMAP
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
#endif`,jy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xy=`#ifdef USE_ENVMAP
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
#endif`,$y=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ky=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zy=`#ifdef USE_GRADIENTMAP
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
}`,Jy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,n1=`#ifdef USE_ENVMAP
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
#endif`,i1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,r1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o1=`PhysicalMaterial material;
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
#endif`,l1=`uniform sampler2D dfgLUT;
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
}`,c1=`
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
#endif`,u1=`#if defined( RE_IndirectDiffuse )
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
#endif`,d1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f1=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,h1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,x1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,y1=`#if defined( USE_POINTS_UV )
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
#endif`,S1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,b1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,w1=`#if defined( USE_MORPHCOLORS )
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
#endif`,E1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T1=`#ifdef USE_MORPHTARGETS
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
#endif`,A1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,R1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,N1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,L1=`#ifdef USE_NORMALMAP
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
#endif`,I1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,k1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,F1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,B1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,q1=`float getShadowMask() {
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
}`,K1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z1=`#ifdef USE_SKINNING
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
#endif`,J1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q1=`#ifdef USE_SKINNING
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
#endif`,eS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rS=`#ifdef USE_TRANSMISSION
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
#endif`,sS=`#ifdef USE_TRANSMISSION
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
#endif`,aS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dS=`uniform sampler2D t2D;
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
}`,fS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hS=`uniform float backgroundBlurriness;
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
}`,pS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gS=`#include <common>
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
}`,xS=`#if DEPTH_PACKING == 3200
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
}`,vS=`#define DISTANCE
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
}`,_S=`#define DISTANCE
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
}`,yS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bS=`uniform float scale;
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
}`,MS=`uniform vec3 diffuse;
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
}`,wS=`#include <common>
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
}`,ES=`uniform vec3 diffuse;
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
}`,TS=`#define LAMBERT
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
}`,AS=`#define LAMBERT
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
}`,CS=`#define MATCAP
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
}`,RS=`#define MATCAP
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
}`,NS=`#define NORMAL
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
}`,PS=`#define NORMAL
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
}`,DS=`#define PHONG
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
}`,LS=`#define PHONG
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
}`,IS=`#define STANDARD
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
}`,US=`#define STANDARD
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
}`,kS=`#define TOON
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
}`,FS=`#define TOON
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
}`,zS=`uniform float size;
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
}`,OS=`uniform vec3 diffuse;
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
}`,BS=`#include <common>
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
}`,HS=`uniform vec3 color;
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
}`,GS=`uniform float rotation;
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
}`,VS=`uniform vec3 diffuse;
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
}`,At={alphahash_fragment:dy,alphahash_pars_fragment:fy,alphamap_fragment:hy,alphamap_pars_fragment:py,alphatest_fragment:my,alphatest_pars_fragment:gy,aomap_fragment:xy,aomap_pars_fragment:vy,batching_pars_vertex:_y,batching_vertex:yy,begin_vertex:Sy,beginnormal_vertex:by,bsdfs:My,iridescence_fragment:wy,bumpmap_pars_fragment:Ey,clipping_planes_fragment:Ty,clipping_planes_pars_fragment:Ay,clipping_planes_pars_vertex:Cy,clipping_planes_vertex:Ry,color_fragment:Ny,color_pars_fragment:Py,color_pars_vertex:Dy,color_vertex:Ly,common:Iy,defaultnormal_vertex:Uy,displacementmap_pars_vertex:ky,displacementmap_vertex:Fy,emissivemap_fragment:zy,emissivemap_pars_fragment:Oy,colorspace_fragment:By,colorspace_pars_fragment:Hy,envmap_fragment:Gy,envmap_common_pars_fragment:Vy,envmap_pars_fragment:Wy,envmap_pars_vertex:jy,envmap_physical_pars_fragment:n1,envmap_vertex:Xy,fog_vertex:$y,fog_pars_vertex:Yy,fog_fragment:qy,fog_pars_fragment:Ky,gradientmap_pars_fragment:Zy,lightmap_pars_fragment:Jy,lights_lambert_fragment:Qy,lights_lambert_pars_fragment:e1,lights_pars_begin:t1,lights_toon_fragment:i1,lights_toon_pars_fragment:r1,lights_phong_fragment:s1,lights_phong_pars_fragment:a1,lights_physical_fragment:o1,lights_physical_pars_fragment:l1,lights_fragment_begin:c1,lights_fragment_maps:u1,lights_fragment_end:d1,lightprobes_pars_fragment:f1,logdepthbuf_fragment:h1,logdepthbuf_pars_fragment:p1,logdepthbuf_pars_vertex:m1,logdepthbuf_vertex:g1,map_fragment:x1,map_pars_fragment:v1,map_particle_fragment:_1,map_particle_pars_fragment:y1,metalnessmap_fragment:S1,metalnessmap_pars_fragment:b1,morphinstance_vertex:M1,morphcolor_vertex:w1,morphnormal_vertex:E1,morphtarget_pars_vertex:T1,morphtarget_vertex:A1,normal_fragment_begin:C1,normal_fragment_maps:R1,normal_pars_fragment:N1,normal_pars_vertex:P1,normal_vertex:D1,normalmap_pars_fragment:L1,clearcoat_normal_fragment_begin:I1,clearcoat_normal_fragment_maps:U1,clearcoat_pars_fragment:k1,iridescence_pars_fragment:F1,opaque_fragment:z1,packing:O1,premultiplied_alpha_fragment:B1,project_vertex:H1,dithering_fragment:G1,dithering_pars_fragment:V1,roughnessmap_fragment:W1,roughnessmap_pars_fragment:j1,shadowmap_pars_fragment:X1,shadowmap_pars_vertex:$1,shadowmap_vertex:Y1,shadowmask_pars_fragment:q1,skinbase_vertex:K1,skinning_pars_vertex:Z1,skinning_vertex:J1,skinnormal_vertex:Q1,specularmap_fragment:eS,specularmap_pars_fragment:tS,tonemapping_fragment:nS,tonemapping_pars_fragment:iS,transmission_fragment:rS,transmission_pars_fragment:sS,uv_pars_fragment:aS,uv_pars_vertex:oS,uv_vertex:lS,worldpos_vertex:cS,background_vert:uS,background_frag:dS,backgroundCube_vert:fS,backgroundCube_frag:hS,cube_vert:pS,cube_frag:mS,depth_vert:gS,depth_frag:xS,distance_vert:vS,distance_frag:_S,equirect_vert:yS,equirect_frag:SS,linedashed_vert:bS,linedashed_frag:MS,meshbasic_vert:wS,meshbasic_frag:ES,meshlambert_vert:TS,meshlambert_frag:AS,meshmatcap_vert:CS,meshmatcap_frag:RS,meshnormal_vert:NS,meshnormal_frag:PS,meshphong_vert:DS,meshphong_frag:LS,meshphysical_vert:IS,meshphysical_frag:US,meshtoon_vert:kS,meshtoon_frag:FS,points_vert:zS,points_frag:OS,shadow_vert:BS,shadow_frag:HS,sprite_vert:GS,sprite_frag:VS},Ye={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},ji={basic:{uniforms:qn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:qn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Nt(0)},envMapIntensity:{value:1}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:qn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:qn([Ye.common,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.roughnessmap,Ye.metalnessmap,Ye.fog,Ye.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:qn([Ye.common,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.gradientmap,Ye.fog,Ye.lights,{emissive:{value:new Nt(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:qn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:qn([Ye.points,Ye.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:qn([Ye.common,Ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:qn([Ye.common,Ye.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:qn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:qn([Ye.sprite,Ye.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distance:{uniforms:qn([Ye.common,Ye.displacementmap,{referencePosition:{value:new de},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distance_vert,fragmentShader:At.distance_frag},shadow:{uniforms:qn([Ye.lights,Ye.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};ji.physical={uniforms:qn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};const Hl={r:0,b:0,g:0},WS=new dn,V0=new wt;V0.set(-1,0,0,0,1,0,0,0,1);function jS(s,e,t,r,o,l){const u=new Nt(0);let h=o===!0?0:1,d,p,g=null,v=0,_=null;function b(R){let O=R.isScene===!0?R.background:null;if(O&&O.isTexture){const D=R.backgroundBlurriness>0;O=e.get(O,D)}return O}function w(R){let O=!1;const D=b(R);D===null?y(u,h):D&&D.isColor&&(y(D,1),O=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?t.buffers.color.setClear(0,0,0,1,l):F==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||O)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function A(R,O){const D=b(O);D&&D.isCubeTexture?(p===void 0&&(p=new _n(new go(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:ga(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(F,L,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=D,p.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(WS.makeRotationFromEuler(O.backgroundRotation)).transpose(),D.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(V0),p.material.toneMapped=Ot.getTransfer(D.colorSpace)!==qt,(g!==D||v!==D.version||_!==s.toneMapping)&&(p.material.needsUpdate=!0,g=D,v=D.version,_=s.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null)):D&&D.isTexture&&(d===void 0&&(d=new _n(new xo(2,2),new _i({name:"BackgroundMaterial",uniforms:ga(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=D,d.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,d.material.toneMapped=Ot.getTransfer(D.colorSpace)!==qt,D.matrixAutoUpdate===!0&&D.updateMatrix(),d.material.uniforms.uvTransform.value.copy(D.matrix),(g!==D||v!==D.version||_!==s.toneMapping)&&(d.material.needsUpdate=!0,g=D,v=D.version,_=s.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null))}function y(R,O){R.getRGB(Hl,z0(s)),t.buffers.color.setClear(Hl.r,Hl.g,Hl.b,O,l)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(R,O=1){u.set(R),h=O,y(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(R){h=R,y(u,h)},render:w,addToRenderList:A,dispose:S}}function XS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=_(null);let l=o,u=!1;function h(j,B,k,V,H){let se=!1;const ee=v(j,V,k,B);l!==ee&&(l=ee,p(l.object)),se=b(j,V,k,H),se&&w(j,V,k,H),H!==null&&e.update(H,s.ELEMENT_ARRAY_BUFFER),(se||u)&&(u=!1,D(j,B,k,V),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function d(){return s.createVertexArray()}function p(j){return s.bindVertexArray(j)}function g(j){return s.deleteVertexArray(j)}function v(j,B,k,V){const H=V.wireframe===!0;let se=r[B.id];se===void 0&&(se={},r[B.id]=se);const ee=j.isInstancedMesh===!0?j.id:0;let Y=se[ee];Y===void 0&&(Y={},se[ee]=Y);let G=Y[k.id];G===void 0&&(G={},Y[k.id]=G);let X=G[H];return X===void 0&&(X=_(d()),G[H]=X),X}function _(j){const B=[],k=[],V=[];for(let H=0;H<t;H++)B[H]=0,k[H]=0,V[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:k,attributeDivisors:V,object:j,attributes:{},index:null}}function b(j,B,k,V){const H=l.attributes,se=B.attributes;let ee=0;const Y=k.getAttributes();for(const G in Y)if(Y[G].location>=0){const P=H[G];let K=se[G];if(K===void 0&&(G==="instanceMatrix"&&j.instanceMatrix&&(K=j.instanceMatrix),G==="instanceColor"&&j.instanceColor&&(K=j.instanceColor)),P===void 0||P.attribute!==K||K&&P.data!==K.data)return!0;ee++}return l.attributesNum!==ee||l.index!==V}function w(j,B,k,V){const H={},se=B.attributes;let ee=0;const Y=k.getAttributes();for(const G in Y)if(Y[G].location>=0){let P=se[G];P===void 0&&(G==="instanceMatrix"&&j.instanceMatrix&&(P=j.instanceMatrix),G==="instanceColor"&&j.instanceColor&&(P=j.instanceColor));const K={};K.attribute=P,P&&P.data&&(K.data=P.data),H[G]=K,ee++}l.attributes=H,l.attributesNum=ee,l.index=V}function A(){const j=l.newAttributes;for(let B=0,k=j.length;B<k;B++)j[B]=0}function y(j){S(j,0)}function S(j,B){const k=l.newAttributes,V=l.enabledAttributes,H=l.attributeDivisors;k[j]=1,V[j]===0&&(s.enableVertexAttribArray(j),V[j]=1),H[j]!==B&&(s.vertexAttribDivisor(j,B),H[j]=B)}function R(){const j=l.newAttributes,B=l.enabledAttributes;for(let k=0,V=B.length;k<V;k++)B[k]!==j[k]&&(s.disableVertexAttribArray(k),B[k]=0)}function O(j,B,k,V,H,se,ee){ee===!0?s.vertexAttribIPointer(j,B,k,H,se):s.vertexAttribPointer(j,B,k,V,H,se)}function D(j,B,k,V){A();const H=V.attributes,se=k.getAttributes(),ee=B.defaultAttributeValues;for(const Y in se){const G=se[Y];if(G.location>=0){let X=H[Y];if(X===void 0&&(Y==="instanceMatrix"&&j.instanceMatrix&&(X=j.instanceMatrix),Y==="instanceColor"&&j.instanceColor&&(X=j.instanceColor)),X!==void 0){const P=X.normalized,K=X.itemSize,be=e.get(X);if(be===void 0)continue;const z=be.buffer,xe=be.type,Se=be.bytesPerElement,Ne=xe===s.INT||xe===s.UNSIGNED_INT||X.gpuType===gf;if(X.isInterleavedBufferAttribute){const ve=X.data,Ue=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,at=X.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let Be=0;Be<G.locationSize;Be++)S(G.location+Be,ve.meshPerAttribute);j.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Be=0;Be<G.locationSize;Be++)y(G.location+Be);s.bindBuffer(s.ARRAY_BUFFER,z);for(let Be=0;Be<G.locationSize;Be++)O(G.location+Be,K/G.locationSize,xe,P,Ue*Se,(at+K/G.locationSize*Be)*Se,Ne)}else{if(X.isInstancedBufferAttribute){for(let ve=0;ve<G.locationSize;ve++)S(G.location+ve,X.meshPerAttribute);j.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ve=0;ve<G.locationSize;ve++)y(G.location+ve);s.bindBuffer(s.ARRAY_BUFFER,z);for(let ve=0;ve<G.locationSize;ve++)O(G.location+ve,K/G.locationSize,xe,P,K*Se,K/G.locationSize*ve*Se,Ne)}}else if(ee!==void 0){const P=ee[Y];if(P!==void 0)switch(P.length){case 2:s.vertexAttrib2fv(G.location,P);break;case 3:s.vertexAttrib3fv(G.location,P);break;case 4:s.vertexAttrib4fv(G.location,P);break;default:s.vertexAttrib1fv(G.location,P)}}}}R()}function F(){J();for(const j in r){const B=r[j];for(const k in B){const V=B[k];for(const H in V){const se=V[H];for(const ee in se)g(se[ee].object),delete se[ee];delete V[H]}}delete r[j]}}function L(j){if(r[j.id]===void 0)return;const B=r[j.id];for(const k in B){const V=B[k];for(const H in V){const se=V[H];for(const ee in se)g(se[ee].object),delete se[ee];delete V[H]}}delete r[j.id]}function M(j){for(const B in r){const k=r[B];for(const V in k){const H=k[V];if(H[j.id]===void 0)continue;const se=H[j.id];for(const ee in se)g(se[ee].object),delete se[ee];delete H[j.id]}}}function N(j){for(const B in r){const k=r[B],V=j.isInstancedMesh===!0?j.id:0,H=k[V];if(H!==void 0){for(const se in H){const ee=H[se];for(const Y in ee)g(ee[Y].object),delete ee[Y];delete H[se]}delete k[V],Object.keys(k).length===0&&delete r[B]}}}function J(){$(),u=!0,l!==o&&(l=o,p(l.object))}function $(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:J,resetDefaultState:$,dispose:F,releaseStatesOfGeometry:L,releaseStatesOfObject:N,releaseStatesOfProgram:M,initAttributes:A,enableAttribute:y,disableUnusedAttributes:R}}function $S(s,e,t){let r;function o(d){r=d}function l(d,p){s.drawArrays(r,d,p),t.update(p,r,1)}function u(d,p,g){g!==0&&(s.drawArraysInstanced(r,d,p,g),t.update(p,r,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,p,0,g);let _=0;for(let b=0;b<g;b++)_+=p[b];t.update(_,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=h}function YS(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(M){return!(M!==$i&&r.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(M){const N=M===Ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==di&&M!==Xi&&!N&&r.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function d(M){if(M==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=d(p);g!==p&&(bt("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),_=t.logarithmicDepthBuffer===!0&&v===!1;t.reversedDepthBuffer===!0&&v===!1&&bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&v===!0&&bt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const b=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),R=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),O=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:b,maxVertexTextures:w,maxTextureSize:A,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:R,maxVaryings:O,maxFragmentUniforms:D,maxSamples:F,samples:L}}function qS(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Gr,h=new wt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const b=v.length!==0||_||r!==0||o;return o=_,r=v.length,b},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,_){t=g(v,_,0)},this.setState=function(v,_,b){const w=v.clippingPlanes,A=v.clipIntersection,y=v.clipShadows,S=s.get(v);if(!o||w===null||w.length===0||l&&!y)l?g(null):p();else{const R=l?0:r,O=R*4;let D=S.clippingState||null;d.value=D,D=g(w,_,O,b);for(let F=0;F!==O;++F)D[F]=t[F];S.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=R}};function p(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,_,b,w){const A=v!==null?v.length:0;let y=null;if(A!==0){if(y=d.value,w!==!0||y===null){const S=b+A*4,R=_.matrixWorldInverse;h.getNormalMatrix(R),(y===null||y.length<S)&&(y=new Float32Array(S));for(let O=0,D=b;O!==A;++O,D+=4)u.copy(v[O]).applyMatrix4(R,h),u.normal.toArray(y,D),y[D+3]=u.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}class Rf extends Yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new U0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new go(5,5,5),l=new _i({name:"CubemapFromEquirect",uniforms:ga(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Un,blending:ua});l.uniforms.tEquirect.value=t;const u=new _n(o,l),h=t.minFilter;return t.minFilter===jr&&(t.minFilter=ii),new lf(1,10,this).update(e,u),t.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}const Im=256,KS=3,ZS=20,W0=256,j0=16,JS=3,QS=new de,eb=new Nt;class rc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new lf(1,10,null),this._boxMesh=new _n(new go(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:h=QS}=l,d=this._renderer;this._setSize(u);const p=this._allocateTarget(),g=this._getSourceTarget(!0);t>0&&(g.texture.mipmapsAutoUpdate=!1);const v=d.autoClear,_=d.autoClearColor,b=d.autoClearDepth,w=d.autoClearStencil,A=e.background;d.autoClear=!0,d.autoClearColor=!0,d.autoClearDepth=!0,d.autoClearStencil=!0,A===null&&(e.background=d.getClearColor(eb));const y=new lf(r,o,g);return y.position.copy(h),y.update(d,e),d.autoClear=v,d.autoClearColor=_,d.autoClearDepth=b,d.autoClearStencil=w,e.background=A,t>0&&(g.texture.mipmapsAutoUpdate=!0,this._blur(p,t)),this._applyPMREM(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=km(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Im,w_(e))}_fromTexture(e,t){e.mapping===fa||e.mapping===lo?this._setSize(e.image.length===0?Im:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=Um(e,!1,!1),r=Math.log2(e)-KS;for(let o=0;o<=r;o++)t.texture.mipmaps.push({width:e>>o,height:e>>o});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=Um(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const o=this._boxMesh,l=this._cubeCamera;o.material=r,l.renderTarget=e,l.activeMipmapLevel=t;const u=e.width>>t;e.viewport.set(0,0,u,u),l.update(this._renderer,o),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===fa||e.mapping===lo?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=km()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=tb(),this._integrationMaterial=nb());const t=this._cubeSize,r=e.texture.mipmaps.length-1,o=this._ggxMaterial.uniforms;o.envMap.value=this._sourceTarget.texture;const l=this._integrationMaterial.uniforms;l.envMap.value=this._sourceTarget.texture,l.sourceLod.value=Math.log2(t/j0);for(let u=0;u<=r;u++){const h=rc.lodToRoughness(u,r);if(u>r-JS)l.roughness.value=h,this._renderCube(e,u,this._integrationMaterial);else{const d=h>0?Math.log2(t)+.5*Math.log2(6/(W0*Math.pow(h,4)))+.5:0;o.roughness.value=h,o.lodBias.value=d,this._renderCube(e,u,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=ib());const r=this._blurMaterial,o=r.uniforms,l=this._sourceTarget;o.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,o.envMap.value=l.texture,this._renderCube(e,0,r),o.envMap.value=e.texture,this._renderCube(l,0,r)}}function Um(s,e,t){return new Rf(s,{minFilter:jr,generateMipmaps:e,type:Ki,colorSpace:tc,depthBuffer:t})}function vo(s,e,t){return new _i({name:s,uniforms:e,vertexShader:At.cube_vert,fragmentShader:t,side:Un,blending:ua,depthTest:!1,depthWrite:!1})}function tb(){return vo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

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
	`)}function nb(){return vo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:j0}},`

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
	`)}function ib(){return vo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ZS}
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
	`)}function km(){return vo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Fm(){return vo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function rb(s){let e=new WeakMap,t=new WeakMap,r=null;function o(_,b=!1){return _==null?null:b?u(_):l(_)}function l(_){if(_&&_.isTexture){const b=_.mapping;if(b===ju||b===Xu)if(e.has(_)){const w=e.get(_).texture;return h(w,_.mapping)}else{const w=_.image;if(w&&w.height>0){const A=new Rf(w.height);return A.fromEquirectangularTexture(s,_),e.set(_,A),_.addEventListener("dispose",p),h(A.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture&&_.isPMREMTexture!==!0){const b=_.mapping,w=b===ju||b===Xu,A=b===fa||b===lo;if(w||A){let y=t.get(_);const S=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==S)return r===null&&(r=new rc(s)),y=w?r.fromEquirectangular(_,y):r.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,t.set(_,y),y.texture;if(y!==void 0)return y.texture;{const R=_.image;return w&&R&&R.height>0||A&&R&&d(R)?(r===null&&(r=new rc(s)),y=w?r.fromEquirectangular(_):r.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,t.set(_,y),_.addEventListener("dispose",g),y.texture):null}}}return _}function h(_,b){return b===ju?_.mapping=fa:b===Xu&&(_.mapping=lo),_}function d(_){let b=0;const w=6;for(let A=0;A<w;A++)_[A]!==void 0&&b++;return b===w}function p(_){const b=_.target;b.removeEventListener("dispose",p);const w=e.get(b);w!==void 0&&(e.delete(b),w.dispose())}function g(_){const b=_.target;b.removeEventListener("dispose",g);const w=t.get(b);w!==void 0&&(t.delete(b),w.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function sb(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Yl("WebGLRenderer: "+r+" extension not supported."),o}}}function ab(s,e,t,r){const o={},l=new WeakMap,u=new FinalizationRegistry(w=>delete o[w]);function h(w){d(w.target)}function d(w){w.index!==null&&e.remove(w.index);for(const y in w.attributes)e.remove(w.attributes[y]);w.removeEventListener("dispose",h),delete o[w.id],u.unregister(w);const A=l.get(w);A&&(e.remove(A),l.delete(w)),r.releaseStatesOfGeometry(w),w.isInstancedBufferGeometry===!0&&delete w._maxInstanceCount,t.memory.geometries--}function p(w,A){return o[A.id]!==void 0||(A.addEventListener("dispose",h),o[A.id]=new WeakRef(A),u.register(A,A.id,A),t.memory.geometries++),A}function g(w){const A=w.attributes;for(const y in A)e.update(A[y],s.ARRAY_BUFFER)}function v(w){const A=w.index,y=w.attributes.position;let S=0;if(y===void 0)return;const R=A!==null?A.array.length:y.array.length/3-1,O=y.count>=65535?I0:L0,D=new O(Math.ceil(R/3)*6,1),F=D.array;if(A!==null){const M=A.array;S=A.version;for(let N=0,J=0;N<R;N+=3){const $=M[N+0],j=M[N+1],B=M[N+2];F[J++]=$,F[J++]=j,F[J++]=j,F[J++]=B,F[J++]=B,F[J++]=$}}else{S=y.version;for(let M=0,N=0;M<R;M+=3){const J=M+0,$=M+1,j=M+2;F[N++]=J,F[N++]=$,F[N++]=$,F[N++]=j,F[N++]=j,F[N++]=J}}D.version=S;const L=l.get(w);L&&e.remove(L),l.set(w,D)}function _(w){const A=l.get(w);if(A){const y=w.index;y!==null&&A.version<y.version&&v(w)}else v(w);return l.get(w)}function b(){for(const w in o){const A=o[w].deref();A!==void 0&&d(A)}}return{get:p,update:g,getWireframeAttribute:_,dispose:b}}function ob(s,e,t){let r;function o(v){r=v}let l,u;function h(v){l=v.type,u=v.bytesPerElement}function d(v,_){s.drawElements(r,_,l,v*u),t.update(_,r,1)}function p(v,_,b){b!==0&&(s.drawElementsInstanced(r,_,l,v*u,b),t.update(_,r,b))}function g(v,_,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,l,v,0,b);let A=0;for(let y=0;y<b;y++)A+=_[y];t.update(A,r,1)}this.setMode=o,this.setIndex=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=g}function lb(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,h){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=h*(l/3);break;case s.LINES:t.lines+=h*(l/2);break;case s.LINE_STRIP:t.lines+=h*(l-1);break;case s.LINE_LOOP:t.lines+=h*l;break;case s.POINTS:t.points+=h*l;break;default:Xt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function cb(s,e,t){const r=new WeakMap,o=new un;function l(u,h,d){const p=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let _=r.get(h);if(_===void 0||_.count!==v){let $=function(){N.dispose(),r.delete(h),h.removeEventListener("dispose",$)};var b=$;_!==void 0&&_.texture.dispose();const w=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let D=0;w===!0&&(D=1),A===!0&&(D=2),y===!0&&(D=3);let F=h.attributes.position.count*D,L=1;F>e.maxTextureSize&&(L=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const M=new Float32Array(F*L*4*v),N=new N0(M,F,L,v);N.type=Xi,N.needsUpdate=!0;const J=D*4;for(let j=0;j<v;j++){const B=S[j],k=R[j],V=O[j],H=F*L*4*j;for(let se=0;se<B.count;se++){const ee=se*J;w===!0&&(o.fromBufferAttribute(B,se),M[H+ee+0]=o.x,M[H+ee+1]=o.y,M[H+ee+2]=o.z,M[H+ee+3]=0),A===!0&&(o.fromBufferAttribute(k,se),M[H+ee+4]=o.x,M[H+ee+5]=o.y,M[H+ee+6]=o.z,M[H+ee+7]=0),y===!0&&(o.fromBufferAttribute(V,se),M[H+ee+8]=o.x,M[H+ee+9]=o.y,M[H+ee+10]=o.z,M[H+ee+11]=V.itemSize===4?o.w:1)}}_={count:v,texture:N,size:new Ut(F,L)},r.set(h,_),h.addEventListener("dispose",$)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let w=0;for(let y=0;y<p.length;y++)w+=p[y];const A=h.morphTargetsRelative?1:1-w;d.getUniforms().setValue(s,"morphTargetBaseInfluence",A),d.getUniforms().setValue(s,"morphTargetInfluences",p)}d.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:l}}function ub(s,e,t,r,o){let l=new WeakMap;function u(p){const g=o.render.frame,v=p.geometry,_=e.get(p,v);if(l.get(_)!==g&&(e.update(_),l.set(_,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==g&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,g))),p.isSkinnedMesh){const b=p.skeleton;l.get(b)!==g&&(b.update(),l.set(b,g))}return _}function h(){l=new WeakMap}function d(p){const g=p.target;g.removeEventListener("dispose",d),r.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:u,dispose:h}}const db={[d0]:"LINEAR_TONE_MAPPING",[f0]:"REINHARD_TONE_MAPPING",[h0]:"CINEON_TONE_MAPPING",[p0]:"ACES_FILMIC_TONE_MAPPING",[g0]:"AGX_TONE_MAPPING",[x0]:"NEUTRAL_TONE_MAPPING",[m0]:"CUSTOM_TONE_MAPPING"};function fb(s,e,t,r,o,l){const u=new Yi(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,d=null,p=null;const g=new Zi;g.setAttribute("position",new Pn([-1,3,0,-1,-1,0,3,-1,0],3)),g.setAttribute("uv",new Pn([0,2,0,0,2,0],2));const v=new ty({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new _n(g,v),b=new H0(-1,1,1,-1,0,1);let w=null,A=null,y=!1,S,R=null,O=[],D=!1;this.setSize=function(F,L){u.setSize(F,L),h!==null&&h.setSize(F,L),d!==null&&d.setSize(F,L);for(let M=0;M<O.length;M++){const N=O[M];N.setSize&&N.setSize(F,L)}},this.setEffects=function(F){O=F,D=O.length>0&&O[0].isRenderPass===!0;const L=u.width,M=u.height;O.length>0&&h===null&&(h=new Yi(L,M,{type:Ki,depthBuffer:!1,stencilBuffer:!1}),d=new Yi(L,M,{type:Ki,depthBuffer:!1,stencilBuffer:!1}));const N=o===!0&&O.some(J=>J.needsDepthTexture===!0);N!==(u.depthTexture!==null)&&(N===!0&&p===null&&(p=new ma(L,M),l===!0&&(p.format=Xr,p.type=pa)),u.dispose(),u.depthTexture=N?p:null,u.resolveDepthBuffer=N,u.storeMultisampledDepthBuffer=N);for(let J=0;J<O.length;J++){const $=O[J];$.setSize&&$.setSize(L,M),N&&$.needsDepthTexture===!0&&$.setDepthTexture&&$.setDepthTexture(p)}},this.begin=function(F,L){if(y||F.toneMapping===mr&&O.length===0)return!1;if(R=L,L!==null){const M=L.width,N=L.height;(u.width!==M||u.height!==N)&&this.setSize(M,N)}return D===!1&&F.setRenderTarget(u),S=F.toneMapping,F.toneMapping=mr,!0},this.hasRenderPass=function(){return D},this.end=function(F,L){F.toneMapping=S,y=!0;let M=u,N=h;for(let J=0;J<O.length;J++){const $=O[J];$.enabled!==!1&&($.render(F,N,M,L),$.needsSwap!==!1&&(M=N,N=N===h?d:h))}if(w!==F.outputColorSpace||A!==F.toneMapping){w=F.outputColorSpace,A=F.toneMapping,v.defines={},Ot.getTransfer(w)===qt&&(v.defines.SRGB_TRANSFER="");const J=db[A];J&&(v.defines[J]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=M.texture,F.setRenderTarget(R),F.render(_,b),R=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){u.dispose(),h!==null&&h.dispose(),d!==null&&d.dispose(),g.dispose(),v.dispose()}}const X0=new jn,$0=new ma(1,1),Y0=new k0(1),q0=new N0,K0=new D_,Z0=new U0,zm=[],Om=[],Bm=new Float32Array(16),Hm=new Float32Array(9),Gm=new Float32Array(4);function va(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=zm[o];if(l===void 0&&(l=new Float32Array(o),zm[o]=l),e!==0){r.toArray(l,0);for(let u=1,h=0;u!==e;++u)h+=t,s[u].toArray(l,h)}return l}function wn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function En(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function uc(s,e){let t=Om[e];t===void 0&&(t=new Int32Array(e),Om[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function hb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function pb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;s.uniform2fv(this.addr,e),En(t,e)}}function mb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wn(t,e))return;s.uniform3fv(this.addr,e),En(t,e)}}function gb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;s.uniform4fv(this.addr,e),En(t,e)}}function xb(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(wn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),En(t,e)}else{if(wn(t,r))return;Gm.set(r),s.uniformMatrix2fv(this.addr,!1,Gm),En(t,r)}}function vb(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(wn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),En(t,e)}else{if(wn(t,r))return;Hm.set(r),s.uniformMatrix3fv(this.addr,!1,Hm),En(t,r)}}function _b(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(wn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),En(t,e)}else{if(wn(t,r))return;Bm.set(r),s.uniformMatrix4fv(this.addr,!1,Bm),En(t,r)}}function yb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Sb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;s.uniform2iv(this.addr,e),En(t,e)}}function bb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wn(t,e))return;s.uniform3iv(this.addr,e),En(t,e)}}function Mb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;s.uniform4iv(this.addr,e),En(t,e)}}function wb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Eb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;s.uniform2uiv(this.addr,e),En(t,e)}}function Tb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wn(t,e))return;s.uniform3uiv(this.addr,e),En(t,e)}}function Ab(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;s.uniform4uiv(this.addr,e),En(t,e)}}function dc(s){return s.version===0&&(s.compareFunction=C0,s.needsUpdate=!0),s}function Cb(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?l=dc($0):l=X0,t.setTexture2D(e||l,o)}function Rb(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||K0,o)}function Nb(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_CUBE_SHADOW?l=dc(Y0):l=Z0,t.setTextureCube(e||l,o)}function Pb(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||q0,o)}function Db(s){switch(s){case 5126:return hb;case 35664:return pb;case 35665:return mb;case 35666:return gb;case 35674:return xb;case 35675:return vb;case 35676:return _b;case 5124:case 35670:return yb;case 35667:case 35671:return Sb;case 35668:case 35672:return bb;case 35669:case 35673:return Mb;case 5125:return wb;case 36294:return Eb;case 36295:return Tb;case 36296:return Ab;case 35678:case 36198:case 36298:case 36306:case 35682:return Cb;case 35679:case 36299:case 36307:return Rb;case 35680:case 36300:case 36308:case 36293:return Nb;case 36289:case 36303:case 36311:case 36292:return Pb}}function Lb(s,e){s.uniform1fv(this.addr,e)}function Ib(s,e){const t=va(e,this.size,2);s.uniform2fv(this.addr,t)}function Ub(s,e){const t=va(e,this.size,3);s.uniform3fv(this.addr,t)}function kb(s,e){const t=va(e,this.size,4);s.uniform4fv(this.addr,t)}function Fb(s,e){const t=va(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function zb(s,e){const t=va(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Ob(s,e){const t=va(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Bb(s,e){s.uniform1iv(this.addr,e)}function Hb(s,e){s.uniform2iv(this.addr,e)}function Gb(s,e){s.uniform3iv(this.addr,e)}function Vb(s,e){s.uniform4iv(this.addr,e)}function Wb(s,e){s.uniform1uiv(this.addr,e)}function jb(s,e){s.uniform2uiv(this.addr,e)}function Xb(s,e){s.uniform3uiv(this.addr,e)}function $b(s,e){s.uniform4uiv(this.addr,e)}function Yb(s,e,t){const r=this.cache,o=e.length,l=uc(t,o);wn(r,l)||(s.uniform1iv(this.addr,l),En(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=dc($0):u=X0;for(let h=0;h!==o;++h)t.setTexture2D(e[h]||u,l[h])}function qb(s,e,t){const r=this.cache,o=e.length,l=uc(t,o);wn(r,l)||(s.uniform1iv(this.addr,l),En(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||K0,l[u])}function Kb(s,e,t){const r=this.cache,o=e.length,l=uc(t,o);wn(r,l)||(s.uniform1iv(this.addr,l),En(r,l));let u;this.type===s.SAMPLER_CUBE_SHADOW?u=dc(Y0):u=Z0;for(let h=0;h!==o;++h)t.setTextureCube(e[h]||u,l[h])}function Zb(s,e,t){const r=this.cache,o=e.length,l=uc(t,o);wn(r,l)||(s.uniform1iv(this.addr,l),En(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||q0,l[u])}function Jb(s){switch(s){case 5126:return Lb;case 35664:return Ib;case 35665:return Ub;case 35666:return kb;case 35674:return Fb;case 35675:return zb;case 35676:return Ob;case 5124:case 35670:return Bb;case 35667:case 35671:return Hb;case 35668:case 35672:return Gb;case 35669:case 35673:return Vb;case 5125:return Wb;case 36294:return jb;case 36295:return Xb;case 36296:return $b;case 35678:case 36198:case 36298:case 36306:case 35682:return Yb;case 35679:case 36299:case 36307:return qb;case 35680:case 36300:case 36308:case 36293:return Kb;case 36289:case 36303:case 36311:case 36292:return Zb}}class Qb{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Db(t.type)}}class eM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jb(t.type)}}class tM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const h=o[l];h.setValue(e,t[h.id],r)}}}const vd=/(\w+)(\])?(\[|\.)?/g;function Vm(s,e){s.seq.push(e),s.map[e.id]=e}function nM(s,e,t){const r=s.name,o=r.length;for(vd.lastIndex=0;;){const l=vd.exec(r),u=vd.lastIndex;let h=l[1];const d=l[2]==="]",p=l[3];if(d&&(h=h|0),p===void 0||p==="["&&u+2===o){Vm(t,p===void 0?new Qb(h,s,e):new eM(h,s,e));break}else{let v=t.map[h];v===void 0&&(v=new tM(h),Vm(t,v)),t=v}}}class Kl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const h=e.getActiveUniform(t,u),d=e.getUniformLocation(t,h.name);nM(h,d,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const h=t[l],d=r[h.id];d.needsUpdate!==!1&&h.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function Wm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const iM=37297;let rM=0;function sM(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${t[u]}`)}return r.join(`
`)}const jm=new wt;function aM(s){Ot._getMatrix(jm,Ot.workingColorSpace,s);const e=`mat3( ${jm.elements.map(t=>t.toFixed(4))} )`;switch(Ot.getTransfer(s)){case nc:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return bt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Xm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+sM(s.getShaderSource(e),h)}else return l}function oM(s,e){const t=aM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const lM={[d0]:"Linear",[f0]:"Reinhard",[h0]:"Cineon",[p0]:"ACESFilmic",[g0]:"AgX",[x0]:"Neutral",[m0]:"Custom"};function cM(s,e){const t=lM[e];return t===void 0?(bt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Gl=new de;function uM(){Ot.getLuminanceCoefficients(Gl);const s=Gl.x.toFixed(4),e=Gl.y.toFixed(4),t=Gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ro).join(`
`)}function fM(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function hM(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let h=1;l.type===s.FLOAT_MAT2&&(h=2),l.type===s.FLOAT_MAT3&&(h=3),l.type===s.FLOAT_MAT4&&(h=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:h}}return t}function ro(s){return s!==""}function $m(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Ym(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pM=/^[ \t]*#include +<([\w\d./]+)>/gm;function cf(s){return s.replace(pM,mM)}function mM(s,e){const t=At[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return cf(t)}const gM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qm(s){return s.replace(gM,xM)}function xM(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Km(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const vM={[Vl]:"SHADOWMAP_TYPE_PCF",[no]:"SHADOWMAP_TYPE_VSM"};function _M(s){return vM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const yM={[lo]:"ENVMAP_MODE_REFRACTION"};function SM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":yM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const bM={[u0]:"ENVMAP_BLENDING_MULTIPLY",[o_]:"ENVMAP_BLENDING_MIX",[l_]:"ENVMAP_BLENDING_ADD"};function MM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":bM[s.combine]||"ENVMAP_BLENDING_NONE"}function wM(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,h=t.fragmentShader;const d=_M(t),p=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",g=SM(t),v=MM(t),_=dM(t),b=fM(l),w=o.createProgram();let A,y,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(A=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(ro).join(`
`),A.length>0&&(A+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(ro).join(`
`),y.length>0&&(y+=`
`)):(A=[Km(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ro).join(`
`),y=[Km(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mr?"#define TONE_MAPPING":"",t.toneMapping!==mr?At.tonemapping_pars_fragment:"",t.toneMapping!==mr?cM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,oM("linearToOutputTexel",t.outputColorSpace),uM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ro).join(`
`)),u=cf(u),u=$m(u,t),u=Ym(u,t),h=cf(h),h=$m(h,t),h=Ym(h,t),u=qm(u),h=qm(h),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,A=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,y=["#define varying in",t.glslVersion===um?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===um?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const R=S+A+u,O=S+y+h,D=Wm(o,o.VERTEX_SHADER,R),F=Wm(o,o.FRAGMENT_SHADER,O);o.attachShader(w,D),o.attachShader(w,F),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function L($){if(s.debug.checkShaderErrors){const j=o.getProgramInfoLog(w)||"",B=o.getShaderInfoLog(D)||"",k=o.getShaderInfoLog(F)||"",V=j.trim(),H=B.trim(),se=k.trim();let ee=!0,Y=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,D,F);else{const G=Xm(o,D,"vertex"),X=Xm(o,F,"fragment");Xt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+$.name+`
Material Type: `+$.type+`

Program Info Log: `+V+`
`+G+`
`+X)}else V!==""?bt("WebGLProgram: Program Info Log:",V):(H===""||se==="")&&(Y=!1);Y&&($.diagnostics={runnable:ee,programLog:V,vertexShader:{log:H,prefix:A},fragmentShader:{log:se,prefix:y}})}o.deleteShader(D),o.deleteShader(F),M=new Kl(o,w),N=hM(o,w)}let M;this.getUniforms=function(){return M===void 0&&L(this),M};let N;this.getAttributes=function(){return N===void 0&&L(this),N};let J=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return J===!1&&(J=o.getProgramParameter(w,iM)),J},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rM++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=D,this.fragmentShader=F,this}let EM=0;class TM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new AM(e),t.set(e,r)),r}}class AM{constructor(e){this.id=EM++,this.code=e,this.usedTimes=0}}function CM(s){return s===Ss||s===Ql||s===ec}function RM(s,e,t,r,o,l){const u=new P0,h=new TM,d=new Set,p=[],g=new Map,v=r.logarithmicDepthBuffer,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(M){return d.add(M),M===0?"uv":`uv${M}`}function w(M,N,J,$,j,B){const k=$.fog,V=j.geometry,H=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?$.environment:null,se=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,ee=e.get(M.envMap||H,se),Y=_[M.type];let G=r.precision;M.precision!==null&&(G=r.getMaxPrecision(M.precision),G!==M.precision&&bt("WebGLProgram.getParameters:",M.precision,"not supported, using",G,"instead."));const X=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,P=X!==void 0?X.length:0;let K=0;V.morphAttributes.position!==void 0&&(K=1),V.morphAttributes.normal!==void 0&&(K=2),V.morphAttributes.color!==void 0&&(K=3);let be,z,xe,Se;if(Y){const Fe=ji[Y];be=Fe.vertexShader,z=Fe.fragmentShader}else{be=M.vertexShader,z=M.fragmentShader;const Fe=h.getVertexShaderStage(M),ht=h.getFragmentShaderStage(M);h.update(M,Fe,ht),xe=Fe.id,Se=ht.id}const Ne=s.getRenderTarget(),ve=s.state.buffers.depth.getReversed(),Ue=j.isInstancedMesh===!0,at=j.isBatchedMesh===!0,Be=!!M.map,we=!!M.matcap,Ie=!!ee,He=Ie&&ee.isPMREMTexture===!0,xt=!!M.aoMap,_t=!!M.lightMap,Et=!!M.bumpMap&&M.wireframe===!1,Ft=!!M.normalMap,rn=!!M.displacementMap,Pt=!!M.emissiveMap,Kt=!!M.metalnessMap,Gt=!!M.roughnessMap,on=M.anisotropy>0,Q=M.clearcoat>0,en=M.diffuseRoughness>0,Dt=M.dispersion>0,zt=M.retroreflectivity>0,fe=M.iridescence>0,Mt=M.sheen>0,qe=M.transmission>0,ot=on&&!!M.anisotropyMap,I=Q&&!!M.clearcoatMap,E=Q&&!!M.clearcoatNormalMap,ne=Q&&!!M.clearcoatRoughnessMap,Ce=en&&!!M.diffuseRoughnessMap,ye=fe&&!!M.iridescenceMap,ke=fe&&!!M.iridescenceThicknessMap,Oe=Mt&&!!M.sheenColorMap,pe=Mt&&!!M.sheenRoughnessMap,me=!!M.specularMap,ge=!!M.specularColorMap,U=!!M.specularIntensityMap,ie=qe&&!!M.transmissionMap,re=qe&&!!M.thicknessMap,Ee=!!M.gradientMap,Ae=!!M.alphaMap,Pe=M.alphaTest>0,Xe=!!M.alphaHash,ft=!!M.extensions;let Te=mr;M.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(Te=s.toneMapping);const Ze=He?ee.isCompressedCubeTexture?ee.image[0].mipmaps:ee.mipmaps:null,ct={shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:be,fragmentShader:z,defines:M.defines,customVertexShaderID:xe,customFragmentShaderID:Se,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:G,batching:at,batchingColor:at&&j._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&j.instanceColor!==null,instancingMorph:Ue&&j.morphTexture!==null,outputColorSpace:Ne===null?s.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:Ot.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Be,matcap:we,envMap:Ie,envMapMode:Ie&&ee.mapping,envMapPMREM:He,envMapMaxLod:He?Ze.length-1:null,envMapSize:He?Ze[0].width:null,aoMap:xt,lightMap:_t,bumpMap:Et,normalMap:Ft,displacementMap:rn,emissiveMap:Pt,normalMapObjectSpace:Ft&&M.normalMapType===d_,normalMapTangentSpace:Ft&&M.normalMapType===af,packedNormalMap:Ft&&M.normalMapType===af&&CM(M.normalMap.format),metalnessMap:Kt,roughnessMap:Gt,anisotropy:on,anisotropyMap:ot,clearcoat:Q,clearcoatMap:I,clearcoatNormalMap:E,clearcoatRoughnessMap:ne,diffuseRoughness:en,diffuseRoughnessMap:Ce,dispersion:Dt,retroreflection:zt,iridescence:fe,iridescenceMap:ye,iridescenceThicknessMap:ke,sheen:Mt,sheenColorMap:Oe,sheenRoughnessMap:pe,specularMap:me,specularColorMap:ge,specularIntensityMap:U,transmission:qe,transmissionMap:ie,thicknessMap:re,gradientMap:Ee,opaque:M.transparent===!1&&M.blending===so&&M.alphaToCoverage===!1,alphaMap:Ae,alphaTest:Pe,alphaHash:Xe,combine:M.combine,mapUv:Be&&b(M.map.channel),aoMapUv:xt&&b(M.aoMap.channel),lightMapUv:_t&&b(M.lightMap.channel),bumpMapUv:Et&&b(M.bumpMap.channel),normalMapUv:Ft&&b(M.normalMap.channel),displacementMapUv:rn&&b(M.displacementMap.channel),emissiveMapUv:Pt&&b(M.emissiveMap.channel),metalnessMapUv:Kt&&b(M.metalnessMap.channel),roughnessMapUv:Gt&&b(M.roughnessMap.channel),anisotropyMapUv:ot&&b(M.anisotropyMap.channel),clearcoatMapUv:I&&b(M.clearcoatMap.channel),clearcoatNormalMapUv:E&&b(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&b(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ce&&b(M.diffuseRoughnessMap.channel),iridescenceMapUv:ye&&b(M.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&b(M.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&b(M.sheenColorMap.channel),sheenRoughnessMapUv:pe&&b(M.sheenRoughnessMap.channel),specularMapUv:me&&b(M.specularMap.channel),specularColorMapUv:ge&&b(M.specularColorMap.channel),specularIntensityMapUv:U&&b(M.specularIntensityMap.channel),transmissionMapUv:ie&&b(M.transmissionMap.channel),thicknessMapUv:re&&b(M.thicknessMap.channel),alphaMapUv:Ae&&b(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ft||on),vertexNormals:!!V.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!V.attributes.uv&&(Be||Ae),fog:!!k,useFog:M.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||V.attributes.normal===void 0&&Ft===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:ve,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:K,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:B.filter(Fe=>Fe.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&J.length>0,shadowMapType:s.shadowMap.type,toneMapping:Te,decodeVideoTexture:Be&&M.map.isVideoTexture===!0&&Ot.getTransfer(M.map.colorSpace)===qt,decodeVideoTextureEmissive:Pt&&M.emissiveMap.isVideoTexture===!0&&Ot.getTransfer(M.emissiveMap.colorSpace)===qt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Li,flipSided:M.side===Un,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ft&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&M.extensions.multiDraw===!0||at)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ct.vertexUv1s=d.has(1),ct.vertexUv2s=d.has(2),ct.vertexUv3s=d.has(3),d.clear(),ct}function A(M){const N=[];if(M.shaderID?N.push(M.shaderID):(N.push(M.customVertexShaderID),N.push(M.customFragmentShaderID)),M.defines!==void 0)for(const J in M.defines)N.push(J),N.push(M.defines[J]);return M.isRawShaderMaterial===!1&&(y(N,M),S(N,M),N.push(s.outputColorSpace)),N.push(M.customProgramCacheKey),N.join()}function y(M,N){M.push(N.precision),M.push(N.outputColorSpace),M.push(N.envMapMode),M.push(N.envMapPMREM),M.push(N.envMapMaxLod),M.push(N.envMapSize),M.push(N.mapUv),M.push(N.alphaMapUv),M.push(N.lightMapUv),M.push(N.aoMapUv),M.push(N.bumpMapUv),M.push(N.normalMapUv),M.push(N.displacementMapUv),M.push(N.emissiveMapUv),M.push(N.metalnessMapUv),M.push(N.roughnessMapUv),M.push(N.anisotropyMapUv),M.push(N.clearcoatMapUv),M.push(N.clearcoatNormalMapUv),M.push(N.clearcoatRoughnessMapUv),M.push(N.diffuseRoughnessMapUv),M.push(N.iridescenceMapUv),M.push(N.iridescenceThicknessMapUv),M.push(N.sheenColorMapUv),M.push(N.sheenRoughnessMapUv),M.push(N.specularMapUv),M.push(N.specularColorMapUv),M.push(N.specularIntensityMapUv),M.push(N.transmissionMapUv),M.push(N.thicknessMapUv),M.push(N.combine),M.push(N.fogExp2),M.push(N.sizeAttenuation),M.push(N.morphTargetsCount),M.push(N.numSunLights),M.push(N.numDirLights),M.push(N.numPointLights),M.push(N.numSpotLights),M.push(N.numSpotLightMaps),M.push(N.numHemiLights),M.push(N.numRectAreaLights),M.push(N.numSunLightShadows),M.push(N.numDirLightShadows),M.push(N.numPointLightShadows),M.push(N.numSpotLightShadows),M.push(N.numSpotLightShadowsWithMaps),M.push(N.numLightProbes),M.push(N.numLightProbeGrids),M.push(N.shadowMapType),M.push(N.toneMapping),M.push(N.numClippingPlanes),M.push(N.numClipIntersection),M.push(N.depthPacking)}function S(M,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.retroreflection&&u.enable(24),N.diffuseRoughness&&u.enable(25),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),N.packedNormalMap&&u.enable(22),N.vertexNormals&&u.enable(23),M.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),N.numLightProbeGrids>0&&u.enable(22),N.hasPositionAttribute&&u.enable(23),M.push(u.mask)}function R(M){const N=_[M.type];let J;if(N){const $=ji[N];J=J_.clone($.uniforms)}else J=M.uniforms;return J}function O(M,N){let J=g.get(N);return J!==void 0?++J.usedTimes:(J=new wM(s,N,M,o),p.push(J),g.set(N,J)),J}function D(M){if(--M.usedTimes===0){const N=p.indexOf(M);p[N]=p[p.length-1],p.pop(),g.delete(M.cacheKey),M.destroy()}}function F(M){h.remove(M)}function L(){h.dispose()}return{getParameters:w,getProgramCacheKey:A,getUniforms:R,acquireProgram:O,releaseProgram:D,releaseShaderCache:F,programs:p,dispose:L}}function NM(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let h=s.get(u);return h===void 0&&(h={},s.set(u,h)),h}function r(u){s.delete(u)}function o(u,h,d){s.get(u)[h]=d}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function PM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Zm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Jm(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(_){let b=0;return _.isInstancedMesh&&(b+=2),_.isSkinnedMesh&&(b+=1),b}function h(_,b,w,A,y,S){let R=s[e];return R===void 0?(R={id:_.id,object:_,geometry:b,material:w,materialVariant:u(_),groupOrder:A,renderOrder:_.renderOrder,z:y,group:S},s[e]=R):(R.id=_.id,R.object=_,R.geometry=b,R.material=w,R.materialVariant=u(_),R.groupOrder=A,R.renderOrder=_.renderOrder,R.z=y,R.group=S),e++,R}function d(_,b,w,A,y,S,R){R.reversedDepth===!0&&(y=-y);const O=h(_,b,w,A,y,S);w.transmission>0?r.push(O):w.transparent===!0?o.push(O):t.push(O)}function p(_,b,w,A,y,S){const R=h(_,b,w,A,y,S);w.transmission>0?r.unshift(R):w.transparent===!0?o.unshift(R):t.unshift(R)}function g(_,b){t.length>1&&t.sort(_||PM),r.length>1&&r.sort(b||Zm),o.length>1&&o.sort(b||Zm)}function v(){for(let _=e,b=s.length;_<b;_++){const w=s[_];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:p,finish:v,sort:g}}function DM(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new Jm,s.set(r,[u])):o>=l.length?(u=new Jm,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function LM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new de,color:new Nt};break;case"SpotLight":t={position:new de,direction:new de,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new de,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new de,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":t={color:new Nt,position:new de,halfWidth:new de,halfHeight:new de};break}return s[e.id]=t,t}}}function IM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let UM=0;function kM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function FM(s){const e=new LM,t=IM(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new de);const o=new de,l=new dn,u=new dn;function h(p){let g=0,v=0,_=0;for(let B=0;B<9;B++)r.probe[B].set(0,0,0);let b=0,w=0,A=0,y=0,S=0,R=0,O=0,D=0,F=0,L=0,M=0,N=0,J=0,$=0;p.sort(kM);for(let B=0,k=p.length;B<k;B++){const V=p[B],H=V.color,se=V.intensity,ee=V.distance;let Y=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Ss?Y=V.shadow.map.texture:Y=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)g+=H.r*se,v+=H.g*se,_+=H.b*se;else if(V.isLightProbe){for(let G=0;G<9;G++)r.probe[G].addScaledVector(V.sh.coefficients[G],se);$++}else if(V.isSunLight){const G=e.get(V);if(G.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const X=V.shadow,P=t.get(V);P.shadowIntensity=X.intensity,P.shadowBias=X.bias,P.shadowNormalBias=X.normalBias,P.shadowRadius=X.radius,P.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),r.sunShadow[w]=P,r.sunShadowMap[w]=Y;const K=X.getViewportCount();for(let be=0;be<K;be++)r.sunShadowMatrix[A+be]=X.getMatrix(be),r.sunShadowCascade[A+be]=X._cascadeData[be];A+=K,w++}r.sun[b]=G,b++}else if(V.isDirectionalLight){const G=e.get(V);if(G.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const X=V.shadow,P=t.get(V);P.shadowIntensity=X.intensity,P.shadowBias=X.bias,P.shadowNormalBias=X.normalBias,P.shadowRadius=X.radius,P.shadowMapSize=X.mapSize,r.directionalShadow[y]=P,r.directionalShadowMap[y]=Y,r.directionalShadowMatrix[y]=V.shadow.matrix,F++}r.directional[y]=G,y++}else if(V.isSpotLight){const G=e.get(V);G.position.setFromMatrixPosition(V.matrixWorld),G.color.copy(H).multiplyScalar(se),G.distance=ee,G.coneCos=Math.cos(V.angle),G.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),G.decay=V.decay,r.spot[R]=G;const X=V.shadow;if(V.map&&(r.spotLightMap[N]=V.map,N++,X.updateMatrices(V),V.castShadow&&J++),r.spotLightMatrix[R]=X.matrix,V.castShadow){const P=t.get(V);P.shadowIntensity=X.intensity,P.shadowBias=X.bias,P.shadowNormalBias=X.normalBias,P.shadowRadius=X.radius,P.shadowMapSize=X.mapSize,r.spotShadow[R]=P,r.spotShadowMap[R]=Y,M++}R++}else if(V.isRectAreaLight){const G=e.get(V);G.color.copy(H).multiplyScalar(se),G.halfWidth.set(V.width*.5,0,0),G.halfHeight.set(0,V.height*.5,0),r.rectArea[O]=G,O++}else if(V.isPointLight){const G=e.get(V);if(G.color.copy(V.color).multiplyScalar(V.intensity),G.distance=V.distance,G.decay=V.decay,V.castShadow){const X=V.shadow,P=t.get(V);P.shadowIntensity=X.intensity,P.shadowBias=X.bias,P.shadowNormalBias=X.normalBias,P.shadowRadius=X.radius,P.shadowMapSize=X.mapSize,P.shadowCameraNear=X.camera.near,P.shadowCameraFar=X.camera.far,r.pointShadow[S]=P,r.pointShadowMap[S]=Y,r.pointShadowMatrix[S]=V.shadow.matrix,L++}r.point[S]=G,S++}else if(V.isHemisphereLight){const G=e.get(V);G.skyColor.copy(V.color).multiplyScalar(se),G.groundColor.copy(V.groundColor).multiplyScalar(se),r.hemi[D]=G,D++}}O>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ye.LTC_FLOAT_1,r.rectAreaLTC2=Ye.LTC_FLOAT_2):(r.rectAreaLTC1=Ye.LTC_HALF_1,r.rectAreaLTC2=Ye.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=_;const j=r.hash;(j.sunLength!==b||j.directionalLength!==y||j.pointLength!==S||j.spotLength!==R||j.rectAreaLength!==O||j.hemiLength!==D||j.numSunShadows!==w||j.numDirectionalShadows!==F||j.numPointShadows!==L||j.numSpotShadows!==M||j.numSpotMaps!==N||j.numLightProbes!==$)&&(r.sun.length=b,r.directional.length=y,r.spot.length=R,r.rectArea.length=O,r.point.length=S,r.hemi.length=D,r.sunShadow.length=w,r.sunShadowMap.length=w,r.sunShadowMatrix.length=A,r.sunShadowCascade.length=A,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.directionalShadowMatrix.length=F,r.pointShadow.length=L,r.pointShadowMap.length=L,r.pointShadowMatrix.length=L,r.spotShadow.length=M,r.spotShadowMap.length=M,r.spotLightMatrix.length=M+N-J,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=J,r.numLightProbes=$,j.sunLength=b,j.directionalLength=y,j.pointLength=S,j.spotLength=R,j.rectAreaLength=O,j.hemiLength=D,j.numSunShadows=w,j.numDirectionalShadows=F,j.numPointShadows=L,j.numSpotShadows=M,j.numSpotMaps=N,j.numLightProbes=$,r.version=UM++)}function d(p,g){let v=0,_=0,b=0,w=0,A=0,y=0;const S=g.matrixWorldInverse;for(let R=0,O=p.length;R<O;R++){const D=p[R];if(D.isSunLight){const F=r.sun[v];F.direction.setFromMatrixPosition(D.matrixWorld),F.direction.transformDirection(S),v++}else if(D.isDirectionalLight){const F=r.directional[_];F.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),F.direction.sub(o),F.direction.transformDirection(S),_++}else if(D.isSpotLight){const F=r.spot[w];F.position.setFromMatrixPosition(D.matrixWorld),F.position.applyMatrix4(S),F.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),F.direction.sub(o),F.direction.transformDirection(S),w++}else if(D.isRectAreaLight){const F=r.rectArea[A];F.position.setFromMatrixPosition(D.matrixWorld),F.position.applyMatrix4(S),u.identity(),l.copy(D.matrixWorld),l.premultiply(S),u.extractRotation(l),F.halfWidth.set(D.width*.5,0,0),F.halfHeight.set(0,D.height*.5,0),F.halfWidth.applyMatrix4(u),F.halfHeight.applyMatrix4(u),A++}else if(D.isPointLight){const F=r.point[b];F.position.setFromMatrixPosition(D.matrixWorld),F.position.applyMatrix4(S),b++}else if(D.isHemisphereLight){const F=r.hemi[y];F.direction.setFromMatrixPosition(D.matrixWorld),F.direction.transformDirection(S),y++}}}return{setup:h,setupView:d,state:r}}function Qm(s){const e=new FM(s),t=[],r=[],o=[];function l(v){g.camera=v,t.length=0,r.length=0,o.length=0}function u(v){v.isLightProbeGrid?o.push(v):t.push(v)}function h(v){r.push(v)}function d(){e.setup(t),o.sort((v,_)=>v.priority-_.priority||v.id-_.id)}function p(v){e.setupView(t,v)}const g={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:g,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:h}}function zM(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let h;return u===void 0?(h=new Qm(s),e.set(o,[h])):l>=u.length?(h=new Qm(s),u.push(h)):h=u[l],h}function r(){e=new WeakMap}return{get:t,dispose:r}}const OM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BM=`uniform sampler2D shadow_pass;
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
}`,HM=[new de(1,0,0),new de(-1,0,0),new de(0,1,0),new de(0,-1,0),new de(0,0,1),new de(0,0,-1)],GM=[new de(0,-1,0),new de(0,-1,0),new de(0,0,1),new de(0,0,-1),new de(0,-1,0),new de(0,-1,0)],e0=new dn,to=new de,_d=new de;function VM(s,e,t){let r=new fo;const o=new Ut,l=new Ut,u=new un,h=new ny,d=new iy,p={},g=t.maxTextureSize,v={[ys]:Un,[Un]:ys,[Li]:Li},_=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:OM,fragmentShader:BM}),b=_.clone();b.defines.HORIZONTAL_PASS=1;const w=new Zi;w.setAttribute("position",new vs(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new _n(w,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vl;let S=this.type;this.render=function(L,M,N){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===Gv&&(bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vl);const J=s.getRenderTarget(),$=s.getActiveCubeFace(),j=s.getActiveMipmapLevel(),B=s.state;B.setBlending(ua),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const k=S!==this.type;k&&M.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(H=>H.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,H=L.length;V<H;V++){const se=L[V],ee=se.shadow;if(ee===void 0){bt("WebGLShadowMap:",se,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;o.copy(ee.mapSize);const Y=ee.getFrameExtents();o.multiply(Y),l.copy(ee.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/Y.x),o.x=l.x*Y.x,ee.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/Y.y),o.y=l.y*Y.y,ee.mapSize.y=l.y));const G=s.state.buffers.depth.getReversed();if(ee.camera._reversedDepth=G,ee.map===null||k===!0){if(ee.map!==null&&(ee.map.depthTexture!==null&&(ee.map.depthTexture.dispose(),ee.map.depthTexture=null),ee.map.dispose()),this.type===no){if(se.isPointLight){bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ee.map=new Yi(o.x,o.y,{format:Ss,type:Ki,minFilter:ii,magFilter:ii,generateMipmaps:!1}),ee.map.texture.name=se.name+".shadowMap",ee.map.depthTexture=new ma(o.x,o.y,Xi),ee.map.depthTexture.name=se.name+".shadowMapDepth",ee.map.depthTexture.format=qr,ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=In,ee.map.depthTexture.magFilter=In}else se.isPointLight?(ee.map=new Rf(o.x),ee.map.depthTexture=new k0(o.x,qi)):(ee.map=new Yi(o.x,o.y),ee.map.depthTexture=new ma(o.x,o.y,qi)),ee.map.depthTexture.name=se.name+".shadowMap",ee.map.depthTexture.format=qr,this.type===Vl?(ee.map.depthTexture.compareFunction=G?A0:T0,ee.map.depthTexture.minFilter=ii,ee.map.depthTexture.magFilter=ii):(ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=In,ee.map.depthTexture.magFilter=In);ee.camera.updateProjectionMatrix()}ee.map.isWebGLCubeRenderTarget!==!0&&(ee.map.width!==o.x||ee.map.height!==o.y)&&ee.map.setSize(o.x,o.y);const X=ee.map.isWebGLCubeRenderTarget?6:ee.getViewportCount();se.isPointLight!==!0&&ee.updateMatrices(se,N);const P=(ee.camera.layers.mask&4294967294)!==0?ee.camera.layers:N.layers;for(let K=0;K<X;K++){const be=ee.getCamera(K);if(se.isPointLight){const z=ee.camera,xe=ee.matrix,Se=se.distance||z.far;Se!==z.far&&(z.far=Se,z.updateProjectionMatrix()),to.setFromMatrixPosition(se.matrixWorld),z.position.copy(to),_d.copy(z.position),_d.add(HM[K]),z.up.copy(GM[K]),z.lookAt(_d),z.updateMatrixWorld(),xe.makeTranslation(-to.x,-to.y,-to.z),e0.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ee._frustum.setFromProjectionMatrix(e0,z.coordinateSystem,z.reversedDepth)}if(ee.map.isWebGLCubeRenderTarget)s.setRenderTarget(ee.map,K),s.clear();else{K===0&&(s.setRenderTarget(ee.map),s.clear());const z=ee.getViewport(K);u.set(l.x*z.x,l.y*z.y,l.x*z.z,l.y*z.w),B.viewport(u)}r=ee.getFrustum(K),D(M,N,be,se,P,this.type)}ee.isPointLightShadow!==!0&&this.type===no&&R(ee,N),ee.needsUpdate=!1}S=this.type,y.needsUpdate=!1,s.setRenderTarget(J,$,j)};function R(L,M){const N=e.update(A);_.defines.VSM_SAMPLES!==L.blurSamples&&(_.defines.VSM_SAMPLES=L.blurSamples,b.defines.VSM_SAMPLES=L.blurSamples,_.needsUpdate=!0,b.needsUpdate=!0),L.mapPass===null?L.mapPass=new Yi(o.x,o.y,{format:Ss,type:Ki}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),_.uniforms.shadow_pass.value=L.map.depthTexture,_.uniforms.resolution.value.set(L.map.width,L.map.height),_.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(M,null,N,_,A,null),b.uniforms.shadow_pass.value=L.mapPass.texture,b.uniforms.resolution.value.set(L.map.width,L.map.height),b.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(M,null,N,b,A,null)}function O(L,M,N,J){let $=null;const j=N.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(j!==void 0)$=j;else if($=N.isPointLight===!0?d:h,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const B=$.uuid,k=M.uuid;let V=p[B];V===void 0&&(V={},p[B]=V);let H=V[k];H===void 0&&(H=$.clone(),V[k]=H,M.addEventListener("dispose",F)),$=H}if($.visible=M.visible,$.wireframe=M.wireframe,J===no?$.side=M.shadowSide!==null?M.shadowSide:M.side:$.side=M.shadowSide!==null?M.shadowSide:v[M.side],$.alphaMap=M.alphaMap,$.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,$.map=M.map,$.clipShadows=M.clipShadows,$.clippingPlanes=M.clippingPlanes,$.clipIntersection=M.clipIntersection,$.displacementMap=M.displacementMap,$.displacementScale=M.displacementScale,$.displacementBias=M.displacementBias,$.wireframeLinewidth=M.wireframeLinewidth,$.linewidth=M.linewidth,N.isPointLight===!0&&$.isMeshDistanceMaterial===!0){const B=s.properties.get($);B.light=N}return $}function D(L,M,N,J,$,j){if(L.visible===!1)return;if(L.layers.test($)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&j===no)&&(!L.frustumCulled||L.intersectsFrustum(r))){L.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,L.matrixWorld);const V=e.update(L),H=L.material;if(Array.isArray(H)){const se=V.groups;for(let ee=0,Y=se.length;ee<Y;ee++){const G=se[ee],X=H[G.materialIndex];if(X&&X.visible){const P=O(L,X,J,j);L.onBeforeShadow(s,L,M,N,V,P,G),s.renderBufferDirect(N,null,V,P,L,G),L.onAfterShadow(s,L,M,N,V,P,G)}}}else if(H.visible){const se=O(L,H,J,j);L.onBeforeShadow(s,L,M,N,V,se,null),s.renderBufferDirect(N,null,V,se,L,null),L.onAfterShadow(s,L,M,N,V,se,null)}}const k=L.children;for(let V=0,H=k.length;V<H;V++)D(k[V],M,N,J,$,j)}function F(L){L.target.removeEventListener("dispose",F);for(const N in p){const J=p[N],$=L.target.uuid;$ in J&&(J[$].dispose(),delete J[$])}}}function WM(s,e){function t(){let U=!1;const ie=new un;let re=null;const Ee=new un(0,0,0,0);return{setMask:function(Ae){re!==Ae&&!U&&(s.colorMask(Ae,Ae,Ae,Ae),re=Ae)},setLocked:function(Ae){U=Ae},setClear:function(Ae,Pe,Xe,ft,Te){Te===!0&&(Ae*=ft,Pe*=ft,Xe*=ft),ie.set(Ae,Pe,Xe,ft),Ee.equals(ie)===!1&&(s.clearColor(Ae,Pe,Xe,ft),Ee.copy(ie))},reset:function(){U=!1,re=null,Ee.set(-1,0,0,0)}}}function r(){let U=!1,ie=!1,re=null,Ee=null,Ae=null;return{setReversed:function(Pe){if(ie!==Pe){const Xe=e.get("EXT_clip_control");Pe?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),ie=Pe;const ft=Ae;Ae=null,this.setClear(ft)}},getReversed:function(){return ie},setTest:function(Pe){Pe?ve(s.DEPTH_TEST):Ue(s.DEPTH_TEST)},setMask:function(Pe){re!==Pe&&!U&&(s.depthMask(Pe),re=Pe)},setFunc:function(Pe){if(ie&&(Pe=b_[Pe]),Ee!==Pe){switch(Pe){case Sd:s.depthFunc(s.NEVER);break;case bd:s.depthFunc(s.ALWAYS);break;case Md:s.depthFunc(s.LESS);break;case oo:s.depthFunc(s.LEQUAL);break;case wd:s.depthFunc(s.EQUAL);break;case Ed:s.depthFunc(s.GEQUAL);break;case Td:s.depthFunc(s.GREATER);break;case Ad:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ee=Pe}},setLocked:function(Pe){U=Pe},setClear:function(Pe){Ae!==Pe&&(Ae=Pe,ie&&(Pe=1-Pe),s.clearDepth(Pe))},reset:function(){U=!1,re=null,Ee=null,Ae=null,ie=!1}}}function o(){let U=!1,ie=null,re=null,Ee=null,Ae=null,Pe=null,Xe=null,ft=null,Te=null;return{setTest:function(Ze){U||(Ze?ve(s.STENCIL_TEST):Ue(s.STENCIL_TEST))},setMask:function(Ze){ie!==Ze&&!U&&(s.stencilMask(Ze),ie=Ze)},setFunc:function(Ze,ct,Fe){(re!==Ze||Ee!==ct||Ae!==Fe)&&(s.stencilFunc(Ze,ct,Fe),re=Ze,Ee=ct,Ae=Fe)},setOp:function(Ze,ct,Fe){(Pe!==Ze||Xe!==ct||ft!==Fe)&&(s.stencilOp(Ze,ct,Fe),Pe=Ze,Xe=ct,ft=Fe)},setLocked:function(Ze){U=Ze},setClear:function(Ze){Te!==Ze&&(s.clearStencil(Ze),Te=Ze)},reset:function(){U=!1,ie=null,re=null,Ee=null,Ae=null,Pe=null,Xe=null,ft=null,Te=null}}}const l=new t,u=new r,h=new o;let d={};const p=new WeakMap;let g={},v={},_={},b=new WeakMap,w=[],A=null,y=!1,S=null,R=null,O=null,D=null,F=null,L=null,M=null,N=new Nt(0,0,0),J=0,$=!1,j=null,B=null,k=null,V=null,H=null;const se=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,Y=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(G)[1]),ee=Y>=1):G.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),ee=Y>=2);let X=null,P={};const K=s.getParameter(s.SCISSOR_BOX),be=s.getParameter(s.VIEWPORT),z=new un().fromArray(K),xe=new un().fromArray(be);function Se(U,ie,re,Ee){const Ae=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(U,Pe),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xe=0;Xe<re;Xe++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(ie,0,s.RGBA,1,1,Ee,0,s.RGBA,s.UNSIGNED_BYTE,Ae):s.texImage2D(ie+Xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ae);return Pe}const Ne={};Ne[s.TEXTURE_2D]=Se(s.TEXTURE_2D,s.TEXTURE_2D,1),Ne[s.TEXTURE_CUBE_MAP]=Se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ne[s.TEXTURE_2D_ARRAY]=Se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ne[s.TEXTURE_3D]=Se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),h.setClear(0),ve(s.DEPTH_TEST),u.setFunc(oo),Et(!1),Ft(om),ve(s.CULL_FACE),xt(ua);function ve(U){g[U]!==!0&&(s.enable(U),g[U]=!0)}function Ue(U){g[U]!==!1&&(s.disable(U),g[U]=!1)}function at(U,ie){return _[U]!==ie?(s.bindFramebuffer(U,ie),_[U]=ie,U===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=ie),U===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=ie),!0):!1}function Be(U,ie){let re=w,Ee=!1;if(U){re=b.get(ie),re===void 0&&(re=[],b.set(ie,re));const Ae=U.textures;if(re.length!==Ae.length||re[0]!==s.COLOR_ATTACHMENT0){for(let Pe=0,Xe=Ae.length;Pe<Xe;Pe++)re[Pe]=s.COLOR_ATTACHMENT0+Pe;re.length=Ae.length,Ee=!0}}else re[0]!==s.BACK&&(re[0]=s.BACK,Ee=!0);Ee&&s.drawBuffers(re)}function we(U){return A!==U?(s.useProgram(U),A=U,!0):!1}const Ie={[la]:s.FUNC_ADD,[Wv]:s.FUNC_SUBTRACT,[jv]:s.FUNC_REVERSE_SUBTRACT};Ie[Xv]=s.MIN,Ie[$v]=s.MAX;const He={[Yv]:s.ZERO,[qv]:s.ONE,[Kv]:s.SRC_COLOR,[l0]:s.SRC_ALPHA,[n_]:s.SRC_ALPHA_SATURATE,[e_]:s.DST_COLOR,[Jv]:s.DST_ALPHA,[Zv]:s.ONE_MINUS_SRC_COLOR,[c0]:s.ONE_MINUS_SRC_ALPHA,[t_]:s.ONE_MINUS_DST_COLOR,[Qv]:s.ONE_MINUS_DST_ALPHA,[i_]:s.CONSTANT_COLOR,[r_]:s.ONE_MINUS_CONSTANT_COLOR,[s_]:s.CONSTANT_ALPHA,[a_]:s.ONE_MINUS_CONSTANT_ALPHA};function xt(U,ie,re,Ee,Ae,Pe,Xe,ft,Te,Ze){if(U===ua){y===!0&&(Ue(s.BLEND),y=!1);return}if(y===!1&&(ve(s.BLEND),y=!0),U!==Vv){if(U!==S||Ze!==$){if((R!==la||F!==la)&&(s.blendEquation(s.FUNC_ADD),R=la,F=la),Ze)switch(U){case so:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xs:s.blendFunc(s.ONE,s.ONE);break;case lm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case cm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Xt("WebGLState: Invalid blending: ",U);break}else switch(U){case so:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case lm:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cm:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",U);break}O=null,D=null,L=null,M=null,N.set(0,0,0),J=0,S=U,$=Ze}return}Ae=Ae||ie,Pe=Pe||re,Xe=Xe||Ee,(ie!==R||Ae!==F)&&(s.blendEquationSeparate(Ie[ie],Ie[Ae]),R=ie,F=Ae),(re!==O||Ee!==D||Pe!==L||Xe!==M)&&(s.blendFuncSeparate(He[re],He[Ee],He[Pe],He[Xe]),O=re,D=Ee,L=Pe,M=Xe),(ft.equals(N)===!1||Te!==J)&&(s.blendColor(ft.r,ft.g,ft.b,Te),N.copy(ft),J=Te),S=U,$=!1}function _t(U,ie){U.side===Li?Ue(s.CULL_FACE):ve(s.CULL_FACE);let re=U.side===Un;ie&&(re=!re),Et(re),U.blending===so&&U.transparent===!1?xt(ua):xt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),u.setFunc(U.depthFunc),u.setTest(U.depthTest),u.setMask(U.depthWrite),l.setMask(U.colorWrite);const Ee=U.stencilWrite;h.setTest(Ee),Ee&&(h.setMask(U.stencilWriteMask),h.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),h.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Pt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):Ue(s.SAMPLE_ALPHA_TO_COVERAGE)}function Et(U){j!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),j=U)}function Ft(U){U!==Bv?(ve(s.CULL_FACE),U!==B&&(U===om?s.cullFace(s.BACK):U===Hv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ue(s.CULL_FACE),B=U}function rn(U){U!==k&&(ee&&s.lineWidth(U),k=U)}function Pt(U,ie,re){U?(ve(s.POLYGON_OFFSET_FILL),(V!==ie||H!==re)&&(V=ie,H=re,u.getReversed()&&(ie=-ie,re=-re),s.polygonOffset(ie,re))):Ue(s.POLYGON_OFFSET_FILL)}function Kt(U){U?ve(s.SCISSOR_TEST):Ue(s.SCISSOR_TEST)}function Gt(U){U===void 0&&(U=s.TEXTURE0+se-1),X!==U&&(s.activeTexture(U),X=U)}function on(U,ie,re){re===void 0&&(X===null?re=s.TEXTURE0+se-1:re=X);let Ee=P[re];Ee===void 0&&(Ee={type:void 0,texture:void 0},P[re]=Ee),(Ee.type!==U||Ee.texture!==ie)&&(X!==re&&(s.activeTexture(re),X=re),s.bindTexture(U,ie||Ne[U]),Ee.type=U,Ee.texture=ie)}function Q(){const U=P[X];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function en(){try{s.compressedTexImage2D(...arguments)}catch(U){Xt("WebGLState:",U)}}function Dt(){try{s.compressedTexImage3D(...arguments)}catch(U){Xt("WebGLState:",U)}}function zt(){try{s.texSubImage2D(...arguments)}catch(U){Xt("WebGLState:",U)}}function fe(){try{s.texSubImage3D(...arguments)}catch(U){Xt("WebGLState:",U)}}function Mt(){try{s.compressedTexSubImage2D(...arguments)}catch(U){Xt("WebGLState:",U)}}function qe(){try{s.compressedTexSubImage3D(...arguments)}catch(U){Xt("WebGLState:",U)}}function ot(){try{s.texStorage2D(...arguments)}catch(U){Xt("WebGLState:",U)}}function I(){try{s.texStorage3D(...arguments)}catch(U){Xt("WebGLState:",U)}}function E(){try{s.texImage2D(...arguments)}catch(U){Xt("WebGLState:",U)}}function ne(){try{s.texImage3D(...arguments)}catch(U){Xt("WebGLState:",U)}}function Ce(U){return v[U]!==void 0?v[U]:s.getParameter(U)}function ye(U,ie){v[U]!==ie&&(s.pixelStorei(U,ie),v[U]=ie)}function ke(U){z.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),z.copy(U))}function Oe(U){xe.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),xe.copy(U))}function pe(U,ie){let re=p.get(ie);re===void 0&&(re=new WeakMap,p.set(ie,re));let Ee=re.get(U);Ee===void 0&&(Ee=s.getUniformBlockIndex(ie,U.name),s.uniformBlockBinding(ie,Ee,Ee),re.set(U,Ee))}function me(U,ie,re){const Ae=p.get(ie).get(U);d[Ae]!==re&&(s.bindBufferBase(s.UNIFORM_BUFFER,Ae,re),d[Ae]=re)}function ge(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),g={},v={},X=null,P={},_={},d={},b=new WeakMap,w=[],A=null,y=!1,S=null,R=null,O=null,D=null,F=null,L=null,M=null,N=new Nt(0,0,0),J=0,$=!1,j=null,B=null,k=null,V=null,H=null,z.set(0,0,s.canvas.width,s.canvas.height),xe.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),h.reset()}return{buffers:{color:l,depth:u,stencil:h},enable:ve,disable:Ue,bindFramebuffer:at,drawBuffers:Be,useProgram:we,setBlending:xt,setMaterial:_t,setFlipSided:Et,setCullFace:Ft,setLineWidth:rn,setPolygonOffset:Pt,setScissorTest:Kt,activeTexture:Gt,bindTexture:on,unbindTexture:Q,compressedTexImage2D:en,compressedTexImage3D:Dt,texImage2D:E,texImage3D:ne,pixelStorei:ye,getParameter:Ce,updateUBOMapping:pe,uniformBlockBinding:me,texStorage2D:ot,texStorage3D:I,texSubImage2D:zt,texSubImage3D:fe,compressedTexSubImage2D:Mt,compressedTexSubImage3D:qe,scissor:ke,viewport:Oe,reset:ge}}function jM(s,e,t,r,o,l,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ut,g=new WeakMap,v=new Set;let _;const b=new WeakMap,w=new Set,A=new FinalizationRegistry(I=>w.delete(I));let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(I,E){return y?new OffscreenCanvas(I,E):ic("canvas")}function R(I,E,ne){let Ce=1;const ye=ot(I);if((ye.width>ne||ye.height>ne)&&(Ce=ne/Math.max(ye.width,ye.height)),Ce<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ke=Math.floor(Ce*ye.width),Oe=Math.floor(Ce*ye.height);_===void 0&&(_=S(ke,Oe));const pe=E?S(ke,Oe):_;return pe.width=ke,pe.height=Oe,pe.getContext("2d").drawImage(I,0,0,ke,Oe),bt("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+ke+"x"+Oe+")."),pe}else return"data"in I&&bt("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),I;return I}function O(I){return I.generateMipmaps}function D(I){s.generateMipmap(I)}function F(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(I,E,ne,Ce,ye,ke=!1){if(I!==null){if(s[I]!==void 0)return s[I];bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Oe;Ce&&(Oe=e.get("EXT_texture_norm16"),Oe||bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=E;if(E===s.RED&&(ne===s.FLOAT&&(pe=s.R32F),ne===s.HALF_FLOAT&&(pe=s.R16F),ne===s.UNSIGNED_BYTE&&(pe=s.R8),ne===s.UNSIGNED_SHORT&&Oe&&(pe=Oe.R16_EXT),ne===s.SHORT&&Oe&&(pe=Oe.R16_SNORM_EXT)),E===s.RED_INTEGER&&(ne===s.UNSIGNED_BYTE&&(pe=s.R8UI),ne===s.UNSIGNED_SHORT&&(pe=s.R16UI),ne===s.UNSIGNED_INT&&(pe=s.R32UI),ne===s.BYTE&&(pe=s.R8I),ne===s.SHORT&&(pe=s.R16I),ne===s.INT&&(pe=s.R32I)),E===s.RG&&(ne===s.FLOAT&&(pe=s.RG32F),ne===s.HALF_FLOAT&&(pe=s.RG16F),ne===s.UNSIGNED_BYTE&&(pe=s.RG8),ne===s.UNSIGNED_SHORT&&Oe&&(pe=Oe.RG16_EXT),ne===s.SHORT&&Oe&&(pe=Oe.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(ne===s.UNSIGNED_BYTE&&(pe=s.RG8UI),ne===s.UNSIGNED_SHORT&&(pe=s.RG16UI),ne===s.UNSIGNED_INT&&(pe=s.RG32UI),ne===s.BYTE&&(pe=s.RG8I),ne===s.SHORT&&(pe=s.RG16I),ne===s.INT&&(pe=s.RG32I)),E===s.RGB_INTEGER&&(ne===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),ne===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),ne===s.UNSIGNED_INT&&(pe=s.RGB32UI),ne===s.BYTE&&(pe=s.RGB8I),ne===s.SHORT&&(pe=s.RGB16I),ne===s.INT&&(pe=s.RGB32I)),E===s.RGBA_INTEGER&&(ne===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),ne===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),ne===s.UNSIGNED_INT&&(pe=s.RGBA32UI),ne===s.BYTE&&(pe=s.RGBA8I),ne===s.SHORT&&(pe=s.RGBA16I),ne===s.INT&&(pe=s.RGBA32I)),E===s.RGB&&(ne===s.UNSIGNED_SHORT&&Oe&&(pe=Oe.RGB16_EXT),ne===s.SHORT&&Oe&&(pe=Oe.RGB16_SNORM_EXT),ne===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),ne===s.UNSIGNED_INT_10F_11F_11F_REV&&(pe=s.R11F_G11F_B10F)),E===s.RGBA){const me=ke?nc:Ot.getTransfer(ye);ne===s.FLOAT&&(pe=s.RGBA32F),ne===s.HALF_FLOAT&&(pe=s.RGBA16F),ne===s.UNSIGNED_BYTE&&(pe=me===qt?s.SRGB8_ALPHA8:s.RGBA8),ne===s.UNSIGNED_SHORT&&Oe&&(pe=Oe.RGBA16_EXT),ne===s.SHORT&&Oe&&(pe=Oe.RGBA16_SNORM_EXT),ne===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),ne===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function M(I,E){let ne;return I?E===null||E===qi||E===pa?ne=s.DEPTH24_STENCIL8:E===Xi?ne=s.DEPTH32F_STENCIL8:E===co&&(ne=s.DEPTH24_STENCIL8,bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===qi||E===pa?ne=s.DEPTH_COMPONENT24:E===Xi?ne=s.DEPTH_COMPONENT32F:E===co&&(ne=s.DEPTH_COMPONENT16),ne}function N(I,E){return O(I)===!0||I.isFramebufferTexture&&I.minFilter!==In&&I.minFilter!==ii?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function J(I){const E=new WeakRef(I);r.get(I).__ref=E,w.add(E),A.register(I,E,E)}function $(I){const E=r.get(I).__ref;E!==void 0&&(w.delete(E),A.unregister(E))}function j(I){k(I.target)}function B(I){V(I.target)}function k(I){I.removeEventListener("dispose",j),$(I),se(I),I.isVideoTexture&&g.delete(I),I.isHTMLTexture&&v.delete(I)}function V(I){I.removeEventListener("dispose",B),$(I),Y(I)}function H(){for(const I of w){const E=I.deref();E!==void 0&&(E.isRenderTarget===!0?V(E):k(E))}w.clear(),v.clear()}function se(I){const E=r.get(I);if(E.__webglInit===void 0)return;const ne=I.source,Ce=b.get(ne);if(Ce){const ye=Ce[E.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&ee(I),Object.keys(Ce).length===0&&b.delete(ne)}r.remove(I)}function ee(I){const E=r.get(I);s.deleteTexture(E.__webglTexture);const ne=I.source,Ce=b.get(ne);delete Ce[E.__cacheKey],u.memory.textures--}function Y(I){const E=r.get(I);E.__depthDisposeCallback&&E.__depthDisposeCallback();const ne=I.depthTexture;if(ne&&ne.renderTarget===I&&k(ne),I.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(E.__webglFramebuffer[ye]))for(let ke=0;ke<E.__webglFramebuffer[ye].length;ke++)s.deleteFramebuffer(E.__webglFramebuffer[ye][ke]);else s.deleteFramebuffer(E.__webglFramebuffer[ye]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ye])}else{if(Array.isArray(E.__webglFramebuffer))for(let ye=0;ye<E.__webglFramebuffer.length;ye++)s.deleteFramebuffer(E.__webglFramebuffer[ye]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ye=0;ye<E.__webglColorRenderbuffer.length;ye++)E.__webglColorRenderbuffer[ye]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ye]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Ce=I.textures;for(let ye=0,ke=Ce.length;ye<ke;ye++){const Oe=r.get(Ce[ye]);Oe.__webglTexture&&(s.deleteTexture(Oe.__webglTexture),u.memory.textures--),r.remove(Ce[ye])}r.remove(I)}let G=0;function X(){G=0}function P(){return G}function K(I){G=I}function be(){const I=G;return I>=o.maxTextures&&bt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+o.maxTextures),G+=1,I}function z(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.mipmapsAutoUpdate),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function xe(I,E){const ne=r.get(I);if(I.isVideoTexture&&Mt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&ne.__version!==I.version){const Ce=I.image;if(Ce===null)bt("WebGLRenderer: Texture marked for update but no image data found.");else if(Ce.complete===!1)bt("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(ne,I,E);return}}else I.isExternalTexture&&(ne.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ne.__webglTexture,s.TEXTURE0+E)}function Se(I,E){const ne=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ne.__version!==I.version){_t(ne,I,E);return}else I.isExternalTexture&&(ne.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ne.__webglTexture,s.TEXTURE0+E)}function Ne(I,E){const ne=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ne.__version!==I.version){_t(ne,I,E);return}t.bindTexture(s.TEXTURE_3D,ne.__webglTexture,s.TEXTURE0+E)}function ve(I,E){const ne=r.get(I);if(I.version>0&&ne.__version!==I.version){Et(ne,I,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture,s.TEXTURE0+E)}const Ue={[ha]:s.REPEAT,[ni]:s.CLAMP_TO_EDGE,[Cd]:s.MIRRORED_REPEAT},at={[In]:s.NEAREST,[c_]:s.NEAREST_MIPMAP_NEAREST,[yl]:s.NEAREST_MIPMAP_LINEAR,[ii]:s.LINEAR,[$u]:s.LINEAR_MIPMAP_NEAREST,[jr]:s.LINEAR_MIPMAP_LINEAR},Be={[h_]:s.NEVER,[C0]:s.ALWAYS,[p_]:s.LESS,[T0]:s.LEQUAL,[m_]:s.EQUAL,[A0]:s.GEQUAL,[g_]:s.GREATER,[x_]:s.NOTEQUAL};function we(I,E){if(E.type===Xi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ii||E.magFilter===$u||E.magFilter===yl||E.magFilter===jr||E.minFilter===ii||E.minFilter===$u||E.minFilter===yl||E.minFilter===jr)&&bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Ue[E.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Ue[E.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Ue[E.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,at[E.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,at[E.minFilter]),E.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Be[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===In||E.minFilter!==yl&&E.minFilter!==jr||E.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ie(I,E){let ne=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",j),J(E));const Ce=E.source;let ye=b.get(Ce);ye===void 0&&(ye={},b.set(Ce,ye));const ke=z(E);if(ke!==I.__cacheKey){ye[ke]===void 0&&(ye[ke]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,ne=!0),ye[ke].usedTimes++;const Oe=ye[I.__cacheKey];Oe!==void 0&&(ye[I.__cacheKey].usedTimes--,Oe.usedTimes===0&&ee(E)),I.__cacheKey=ke,I.__webglTexture=ye[ke].texture}return ne}function He(I,E,ne){return Math.floor(Math.floor(I/ne)/E)}function xt(I,E,ne,Ce){const ke=I.updateRanges;if(ke.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,ne,Ce,E.data);else{ke.sort((U,ie)=>U.start-ie.start);let Oe=0;for(let U=1;U<ke.length;U++){const ie=ke[Oe],re=ke[U],Ee=ie.start+ie.count,Ae=He(re.start,E.width,4),Pe=He(ie.start,E.width,4);re.start<=Ee+1&&Ae===Pe&&He(re.start+re.count-1,E.width,4)===Ae?ie.count=Math.max(ie.count,re.start+re.count-ie.start):(++Oe,ke[Oe]=re)}ke.length=Oe+1;const pe=t.getParameter(s.UNPACK_ROW_LENGTH),me=t.getParameter(s.UNPACK_SKIP_PIXELS),ge=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let U=0,ie=ke.length;U<ie;U++){const re=ke[U],Ee=Math.floor(re.start/4),Ae=Math.ceil(re.count/4),Pe=Ee%E.width,Xe=Math.floor(Ee/E.width),ft=Ae,Te=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Xe),t.texSubImage2D(s.TEXTURE_2D,0,Pe,Xe,ft,Te,ne,Ce,E.data)}I.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,pe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,me),t.pixelStorei(s.UNPACK_SKIP_ROWS,ge)}}function _t(I,E,ne){let Ce=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Ce=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Ce=s.TEXTURE_3D);const ye=Ie(I,E),ke=E.source;t.bindTexture(Ce,I.__webglTexture,s.TEXTURE0+ne);const Oe=r.get(ke);if(ke.version!==Oe.__version||ye===!0){if(t.activeTexture(s.TEXTURE0+ne),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const Te=Ot.getPrimaries(Ot.workingColorSpace),Ze=E.colorSpace===Vr?null:Ot.getPrimaries(E.colorSpace),ct=E.colorSpace===Vr||Te===Ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct)}t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let me=R(E.image,!1,o.maxTextureSize);me=qe(E,me);const ge=l.convert(E.format,E.colorSpace),U=l.convert(E.type);let ie=L(E.internalFormat,ge,U,E.normalized,E.colorSpace,E.isVideoTexture);we(Ce,E);let re;const Ee=E.mipmaps,Ae=E.isVideoTexture!==!0,Pe=Oe.__version===void 0||ye===!0,Xe=ke.dataReady,ft=N(E,me);if(E.isDepthTexture)ie=M(E.format===Xr,E.type),Pe&&(Ae?t.texStorage2D(s.TEXTURE_2D,1,ie,me.width,me.height):t.texImage2D(s.TEXTURE_2D,0,ie,me.width,me.height,0,ge,U,null));else if(E.isDataTexture)if(Ee.length>0){Ae&&Pe&&t.texStorage2D(s.TEXTURE_2D,ft,ie,Ee[0].width,Ee[0].height);for(let Te=0,Ze=Ee.length;Te<Ze;Te++)re=Ee[Te],Ae?Xe&&t.texSubImage2D(s.TEXTURE_2D,Te,0,0,re.width,re.height,ge,U,re.data):t.texImage2D(s.TEXTURE_2D,Te,ie,re.width,re.height,0,ge,U,re.data);E.generateMipmaps=!1}else Ae?(Pe&&t.texStorage2D(s.TEXTURE_2D,ft,ie,me.width,me.height),Xe&&xt(E,me,ge,U)):t.texImage2D(s.TEXTURE_2D,0,ie,me.width,me.height,0,ge,U,me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ae&&Pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ft,ie,Ee[0].width,Ee[0].height,me.depth);for(let Te=0,Ze=Ee.length;Te<Ze;Te++)if(re=Ee[Te],E.format!==$i)if(ge!==null)if(Ae){if(Xe)if(E.layerUpdates.size>0){const ct=Lm(re.width,re.height,E.format,E.type);for(const Fe of E.layerUpdates){const ht=re.data.subarray(Fe*ct/re.data.BYTES_PER_ELEMENT,(Fe+1)*ct/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,Fe,re.width,re.height,1,ge,ht)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,re.width,re.height,me.depth,ge,re.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Te,ie,re.width,re.height,me.depth,0,re.data,0,0);else bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?Xe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,re.width,re.height,me.depth,ge,U,re.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Te,ie,re.width,re.height,me.depth,0,ge,U,re.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Ae&&Pe&&t.texStorage2D(s.TEXTURE_2D,ft,ie,Ee[0].width,Ee[0].height);for(let Te=0,Ze=Ee.length;Te<Ze;Te++)re=Ee[Te],E.format!==$i?ge!==null?Ae?Xe&&t.compressedTexSubImage2D(s.TEXTURE_2D,Te,0,0,re.width,re.height,ge,re.data):t.compressedTexImage2D(s.TEXTURE_2D,Te,ie,re.width,re.height,0,re.data):bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?Xe&&t.texSubImage2D(s.TEXTURE_2D,Te,0,0,re.width,re.height,ge,U,re.data):t.texImage2D(s.TEXTURE_2D,Te,ie,re.width,re.height,0,ge,U,re.data)}else if(E.isDataArrayTexture)if(Ae){if(Pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ft,ie,me.width,me.height,me.depth),Xe)if(E.layerUpdates.size>0){const Te=Lm(me.width,me.height,E.format,E.type);for(const Ze of E.layerUpdates){const ct=me.data.subarray(Ze*Te/me.data.BYTES_PER_ELEMENT,(Ze+1)*Te/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ze,me.width,me.height,1,ge,U,ct)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,ge,U,me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ie,me.width,me.height,me.depth,0,ge,U,me.data);else if(E.isData3DTexture)Ae?(Pe&&t.texStorage3D(s.TEXTURE_3D,ft,ie,me.width,me.height,me.depth),Xe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,ge,U,me.data)):t.texImage3D(s.TEXTURE_3D,0,ie,me.width,me.height,me.depth,0,ge,U,me.data);else if(E.isFramebufferTexture){if(Pe)if(Ae)t.texStorage2D(s.TEXTURE_2D,ft,ie,me.width,me.height);else{let Te=me.width,Ze=me.height;for(let ct=0;ct<ft;ct++)t.texImage2D(s.TEXTURE_2D,ct,ie,Te,Ze,0,ge,U,null),Te>>=1,Ze>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const Te=s.canvas;if(Te.hasAttribute("layoutsubtree")||Te.setAttribute("layoutsubtree","true"),me.parentNode!==Te){Te.appendChild(me),v.add(E),Te.onpaint=Ze=>{const ct=Ze.changedElements;for(const Fe of v)ct.includes(Fe.image)&&(Fe.needsUpdate=!0)},Te.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,me);else{const ct=s.RGBA,Fe=s.RGBA,ht=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ct,Fe,ht,me)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(Ae&&Pe){const Te=ot(Ee[0]);t.texStorage2D(s.TEXTURE_2D,ft,ie,Te.width,Te.height)}for(let Te=0,Ze=Ee.length;Te<Ze;Te++)re=Ee[Te],Ae?Xe&&t.texSubImage2D(s.TEXTURE_2D,Te,0,0,ge,U,re):t.texImage2D(s.TEXTURE_2D,Te,ie,ge,U,re);E.generateMipmaps=!1}else if(Ae){if(Pe){const Te=ot(me);t.texStorage2D(s.TEXTURE_2D,ft,ie,Te.width,Te.height)}Xe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ge,U,me)}else t.texImage2D(s.TEXTURE_2D,0,ie,ge,U,me);O(E)&&E.mipmapsAutoUpdate===!0&&D(Ce),Oe.__version=ke.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Et(I,E,ne){if(E.image.length!==6)return;const Ce=Ie(I,E),ye=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+ne);const ke=r.get(ye);if(ye.version!==ke.__version||Ce===!0){t.activeTexture(s.TEXTURE0+ne);const Oe=Ot.getPrimaries(Ot.workingColorSpace),pe=E.colorSpace===Vr?null:Ot.getPrimaries(E.colorSpace),me=E.colorSpace===Vr||Oe===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const ge=E.isCompressedTexture||E.image[0].isCompressedTexture,U=E.image[0]&&E.image[0].isDataTexture,ie=[];for(let Fe=0;Fe<6;Fe++)!ge&&!U?ie[Fe]=R(E.image[Fe],!0,o.maxCubemapSize):ie[Fe]=U?E.image[Fe].image:E.image[Fe],ie[Fe]=qe(E,ie[Fe]);const re=ie[0],Ee=l.convert(E.format,E.colorSpace),Ae=l.convert(E.type);let Pe=L(E.internalFormat,Ee,Ae,E.normalized,E.colorSpace);const Xe=E.isVideoTexture!==!0,ft=ke.__version===void 0||Ce===!0,Te=ye.dataReady;let Ze=N(E,re);we(s.TEXTURE_CUBE_MAP,E);let ct;if(E.isDepthTexture){if(Pe=M(E.format===Xr,E.type),ft)if(Xe)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Pe,re.width,re.height);else for(let Fe=0;Fe<6;Fe++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Pe,re.width,re.height,0,Ee,Ae,null)}else if(ge){Xe&&ft&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ze,Pe,re.width,re.height);for(let Fe=0;Fe<6;Fe++){ct=ie[Fe].mipmaps;for(let ht=0;ht<ct.length;ht++){const pt=ct[ht];E.format!==$i?Ee!==null?Xe?Te&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,ht,0,0,pt.width,pt.height,Ee,pt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,ht,Pe,pt.width,pt.height,0,pt.data):bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?Te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,ht,0,0,pt.width,pt.height,Ee,Ae,pt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,ht,Pe,pt.width,pt.height,0,Ee,Ae,pt.data)}}}else{if(ct=E.mipmaps,Xe&&ft){ct.length>0&&Ze++;const Fe=ot(ie[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ze,Pe,Fe.width,Fe.height)}for(let Fe=0;Fe<6;Fe++)if(U){Xe?Te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,ie[Fe].width,ie[Fe].height,Ee,Ae,ie[Fe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Pe,ie[Fe].width,ie[Fe].height,0,Ee,Ae,ie[Fe].data);for(let ht=0;ht<ct.length;ht++){const _e=ct[ht].image[Fe].image;Xe?Te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,ht+1,0,0,_e.width,_e.height,Ee,Ae,_e.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,ht+1,Pe,_e.width,_e.height,0,Ee,Ae,_e.data)}}else{Xe?Te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,Ee,Ae,ie[Fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Pe,Ee,Ae,ie[Fe]);for(let ht=0;ht<ct.length;ht++){const pt=ct[ht];Xe?Te&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,ht+1,0,0,Ee,Ae,pt.image[Fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,ht+1,Pe,Ee,Ae,pt.image[Fe])}}}O(E)&&E.mipmapsAutoUpdate===!0&&D(s.TEXTURE_CUBE_MAP),ke.__version=ye.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Ft(I,E,ne,Ce,ye,ke){const Oe=l.convert(ne.format,ne.colorSpace),pe=l.convert(ne.type),me=L(ne.internalFormat,Oe,pe,ne.normalized,ne.colorSpace),ge=r.get(E),U=r.get(ne);if(U.__renderTarget=E,!ge.__hasExternalTextures){const ie=Math.max(1,E.width>>ke),re=Math.max(1,E.height>>ke);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?t.texImage3D(ye,ke,me,ie,re,E.depth,0,Oe,pe,null):t.texImage2D(ye,ke,me,ie,re,0,Oe,pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),fe(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ce,ye,U.__webglTexture,0,zt(E)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Ce,ye,U.__webglTexture,ke),t.bindFramebuffer(s.FRAMEBUFFER,null)}function rn(I,E,ne){if(s.bindRenderbuffer(s.RENDERBUFFER,I),E.depthBuffer){const Ce=E.depthTexture,ye=Ce&&Ce.isDepthTexture?Ce.type:null,ke=M(E.stencilBuffer,ye),Oe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;fe(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,zt(E),ke,E.width,E.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,zt(E),ke,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ke,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Oe,s.RENDERBUFFER,I)}else{const Ce=E.textures;for(let ye=0;ye<Ce.length;ye++){const ke=Ce[ye],Oe=l.convert(ke.format,ke.colorSpace),pe=l.convert(ke.type),me=L(ke.internalFormat,Oe,pe,ke.normalized,ke.colorSpace);fe(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,zt(E),me,E.width,E.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,zt(E),me,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,me,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pt(I,E,ne){const Ce=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ye=r.get(E.depthTexture);ye.__renderTarget=E;const ke=Ce?E.depthTexture.image[0]:E.depthTexture.image;(!ye.__webglTexture||ke.width!==E.width||ke.height!==E.height)&&(ke.width=E.width,ke.height=E.height,E.depthTexture.needsUpdate=!0),Ce?ve(E.depthTexture,0):xe(E.depthTexture,0);const Oe=ye.__webglTexture,pe=zt(E),me=Ce?s.TEXTURE_CUBE_MAP_POSITIVE_X+ne:s.TEXTURE_2D,ge=E.depthTexture.format===Xr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===qr)fe(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,me,Oe,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,ge,me,Oe,0);else if(E.depthTexture.format===Xr)fe(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,me,Oe,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,ge,me,Oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Kt(I){const E=r.get(I),ne=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const Ce=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Ce){const ye=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Ce.removeEventListener("dispose",ye)};Ce.addEventListener("dispose",ye),E.__depthDisposeCallback=ye}E.__boundDepthTexture=Ce}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(ne)for(let Ce=0;Ce<6;Ce++)Pt(E.__webglFramebuffer[Ce],I,Ce);else I.texture.mipmaps.length>0?Pt(E.__webglFramebuffer[0],I,0):Pt(E.__webglFramebuffer,I,0);else if(ne){E.__webglDepthbuffer=[];for(let Ce=0;Ce<6;Ce++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[Ce]),E.__webglDepthbuffer[Ce]===void 0)E.__webglDepthbuffer[Ce]=s.createRenderbuffer(),rn(E.__webglDepthbuffer[Ce],I,!1);else{const ye=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ke=E.__webglDepthbuffer[Ce];s.bindRenderbuffer(s.RENDERBUFFER,ke),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,ke)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),rn(E.__webglDepthbuffer,I,!1);else{const ye=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ke=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ke),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,ke)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Gt(I,E,ne){const Ce=r.get(I);E!==void 0&&Ft(Ce.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ne!==void 0&&Kt(I)}function on(I){const E=I.texture,ne=r.get(I),Ce=r.get(E);I.addEventListener("dispose",B),J(I);const ye=I.textures,ke=I.isWebGLCubeRenderTarget===!0,Oe=ye.length>1;if(Oe||(Ce.__webglTexture===void 0&&(Ce.__webglTexture=s.createTexture()),Ce.__version=E.version,u.memory.textures++),ke){ne.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(E.mipmaps.length>0){ne.__webglFramebuffer[pe]=[];for(let me=0;me<E.mipmaps.length;me++)ne.__webglFramebuffer[pe][me]=s.createFramebuffer()}else ne.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(E.mipmaps.length>0){ne.__webglFramebuffer=[];for(let pe=0;pe<E.mipmaps.length;pe++)ne.__webglFramebuffer[pe]=s.createFramebuffer()}else ne.__webglFramebuffer=s.createFramebuffer();if(Oe)for(let pe=0,me=ye.length;pe<me;pe++){const ge=r.get(ye[pe]);ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture(),u.memory.textures++)}if(I.samples>0&&fe(I)===!1){ne.__webglMultisampledFramebuffer=s.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let pe=0;pe<ye.length;pe++){const me=ye[pe];ne.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ne.__webglColorRenderbuffer[pe]);const ge=l.convert(me.format,me.colorSpace),U=l.convert(me.type),ie=L(me.internalFormat,ge,U,me.normalized,me.colorSpace,I.isXRRenderTarget===!0),re=zt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,re,ie,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,ne.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(ne.__webglDepthRenderbuffer=s.createRenderbuffer(),rn(ne.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ke){t.bindTexture(s.TEXTURE_CUBE_MAP,Ce.__webglTexture),we(s.TEXTURE_CUBE_MAP,E);for(let pe=0;pe<6;pe++)if(E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)Ft(ne.__webglFramebuffer[pe][me],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,me);else Ft(ne.__webglFramebuffer[pe],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);O(E)?D(s.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(Oe){for(let pe=0,me=ye.length;pe<me;pe++){const ge=ye[pe],U=r.get(ge);let ie=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ie=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ie,U.__webglTexture),we(ie,ge),Ft(ne.__webglFramebuffer,I,ge,s.COLOR_ATTACHMENT0+pe,ie,0),O(ge)&&D(ie)}t.unbindTexture()}else{let pe=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pe=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,Ce.__webglTexture),we(pe,E),E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)Ft(ne.__webglFramebuffer[me],I,E,s.COLOR_ATTACHMENT0,pe,me);else Ft(ne.__webglFramebuffer,I,E,s.COLOR_ATTACHMENT0,pe,0);O(E)?D(pe):E.mipmaps.length>0&&s.texParameteri(pe,s.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&Kt(I)}function Q(I){const E=I.textures;for(let ne=0,Ce=E.length;ne<Ce;ne++){const ye=E[ne];if(O(ye)&&ye.mipmapsAutoUpdate===!0){const ke=F(I),Oe=r.get(ye).__webglTexture;t.bindTexture(ke,Oe),D(ke),t.unbindTexture()}}}const en=[];function Dt(I){if(I.samples>0){if(fe(I)===!1){const E=I.textures,ne=I.width,Ce=I.height;let ye=s.COLOR_BUFFER_BIT;const ke=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Oe=r.get(I),pe=E.length>1;if(pe)for(let ge=0;ge<E.length;ge++)t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let ge=0;ge<E.length;ge++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[ge]);const U=r.get(E[ge]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,U,0)}s.blitFramebuffer(0,0,ne,Ce,0,0,ne,Ce,ye,s.NEAREST),d===!0&&(en.length=0,en.push(s.COLOR_ATTACHMENT0+ge),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&en.push(ke),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,en))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let ge=0;ge<E.length;ge++){t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[ge]);const U=r.get(E[ge]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,U,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&d){const E=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function zt(I){return Math.min(o.maxSamples,I.samples)}function fe(I){const E=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Mt(I){const E=u.render.frame;g.get(I)!==E&&(g.set(I,E),I.update())}function qe(I,E){const ne=I.colorSpace,Ce=I.format,ye=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||ne!==tc&&ne!==Vr&&(Ot.getTransfer(ne)===qt?(Ce!==$i||ye!==di)&&bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",ne)),E}function ot(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=be,this.resetTextureUnits=X,this.getTextureUnits=P,this.setTextureUnits=K,this.setTexture2D=xe,this.setTexture2DArray=Se,this.setTexture3D=Ne,this.setTextureCube=ve,this.rebindTextures=Gt,this.setupRenderTarget=on,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=fe,this.dispose=H}function XM(s,e){function t(r,o=Vr){let l;const u=Ot.getTransfer(o);if(r===di)return s.UNSIGNED_BYTE;if(r===xf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===vf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===S0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===b0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===_0)return s.BYTE;if(r===y0)return s.SHORT;if(r===co)return s.UNSIGNED_SHORT;if(r===gf)return s.INT;if(r===qi)return s.UNSIGNED_INT;if(r===Xi)return s.FLOAT;if(r===Ki)return s.HALF_FLOAT;if(r===M0)return s.ALPHA;if(r===w0)return s.RGB;if(r===$i)return s.RGBA;if(r===qr)return s.DEPTH_COMPONENT;if(r===Xr)return s.DEPTH_STENCIL;if(r===E0)return s.RED;if(r===_f)return s.RED_INTEGER;if(r===Ss)return s.RG;if(r===yf)return s.RG_INTEGER;if(r===Sf)return s.RGBA_INTEGER;if(r===Wl||r===jl||r===Xl||r===$l)if(u===qt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Wl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$l)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Wl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===jl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$l)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rd||r===Nd||r===Pd||r===Dd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Rd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Nd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Pd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ld||r===Id||r===Ud||r===kd||r===Fd||r===Ql||r===zd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Ld||r===Id)return u===qt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Ud)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===kd)return l.COMPRESSED_R11_EAC;if(r===Fd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Ql)return l.COMPRESSED_RG11_EAC;if(r===zd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Od||r===Bd||r===Hd||r===Gd||r===Vd||r===Wd||r===jd||r===Xd||r===$d||r===Yd||r===qd||r===Kd||r===Zd||r===Jd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Od)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Bd)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Hd)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Gd)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Vd)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Wd)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===jd)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xd)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===$d)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yd)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qd)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Kd)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zd)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Jd)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Qd||r===ef||r===tf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Qd)return u===qt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ef)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===tf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===nf||r===rf||r===ec||r===sf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===nf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===rf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ec)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===sf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===pa?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const $M=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YM=`
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

}`;class qM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new F0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new _i({vertexShader:$M,fragmentShader:YM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _n(new xo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KM extends bs{constructor(e,t){super();const r=this;let o=null,l=1,u=null,h="local-floor",d=1,p=null,g=null,v=null,_=null,b=null,w=null;const A=typeof XRWebGLBinding<"u",y=new qM,S={},R=t.getContextAttributes();let O=null,D=null;const F=[],L=[],M=new Ut;let N=null,J=null;const $=new Di;$.viewport=new un;const j=new Di;j.viewport=new un;const B=[$,j],k=new ly;let V=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let xe=F[z];return xe===void 0&&(xe=new nd,F[z]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(z){let xe=F[z];return xe===void 0&&(xe=new nd,F[z]=xe),xe.getGripSpace()},this.getHand=function(z){let xe=F[z];return xe===void 0&&(xe=new nd,F[z]=xe),xe.getHandSpace()};function se(z){const xe=L.indexOf(z.inputSource);if(xe===-1)return;const Se=F[xe];Se!==void 0&&(Se.update(z.inputSource,z.frame,p||u),Se.dispatchEvent({type:z.type,data:z.inputSource}))}function ee(){o.removeEventListener("select",se),o.removeEventListener("selectstart",se),o.removeEventListener("selectend",se),o.removeEventListener("squeeze",se),o.removeEventListener("squeezestart",se),o.removeEventListener("squeezeend",se),o.removeEventListener("end",ee),o.removeEventListener("inputsourceschange",Y);for(let z=0;z<F.length;z++){const xe=L[z];xe!==null&&(L[z]=null,F[z].disconnect(xe))}V=null,H=null,y.reset();for(const z in S)delete S[z];if(e.setRenderTarget(O),b=null,_=null,v=null,o=null,D=null,be.stop(),r.isPresenting=!1,e.setPixelRatio(N),e.setSize(M.width,M.height,!1),J!==null){const z=J.camera;z.fov=J.fov,z.zoom=J.zoom,z.updateProjectionMatrix(),J=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){l=z,r.isPresenting===!0&&bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){h=z,r.isPresenting===!0&&bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(z){p=z},this.getBaseLayer=function(){return _!==null?_:b},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(z){if(o=z,o!==null){if(O=e.getRenderTarget(),o.addEventListener("select",se),o.addEventListener("selectstart",se),o.addEventListener("selectend",se),o.addEventListener("squeeze",se),o.addEventListener("squeezestart",se),o.addEventListener("squeezeend",se),o.addEventListener("end",ee),o.addEventListener("inputsourceschange",Y),R.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(M),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Ne=null,ve=null;R.depth&&(ve=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=R.stencil?Xr:qr,Ne=R.stencil?pa:qi);const Ue={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:l};v=this.getBinding(),_=v.createProjectionLayer(Ue),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),D=new Yi(_.textureWidth,_.textureHeight,{format:$i,type:di,depthTexture:new ma(_.textureWidth,_.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const Se={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:l};b=new XRWebGLLayer(o,t,Se),o.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),D=new Yi(b.framebufferWidth,b.framebufferHeight,{format:$i,type:di,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1,storeMultisampledDepthBuffer:b.ignoreDepthValues===!1,storeMultisampledStencilBuffer:b.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(d),p=null,u=await o.requestReferenceSpace(h),be.setContext(o),be.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Y(z){for(let xe=0;xe<z.removed.length;xe++){const Se=z.removed[xe],Ne=L.indexOf(Se);Ne>=0&&(L[Ne]=null,F[Ne].disconnect(Se))}for(let xe=0;xe<z.added.length;xe++){const Se=z.added[xe];let Ne=L.indexOf(Se);if(Ne===-1){for(let Ue=0;Ue<F.length;Ue++)if(Ue>=L.length){L.push(Se),Ne=Ue;break}else if(L[Ue]===null){L[Ue]=Se,Ne=Ue;break}if(Ne===-1)break}const ve=F[Ne];ve&&ve.connect(Se)}}function G(z,xe){xe===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(xe.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(o===null)return;let xe=z.near,Se=z.far;y.texture!==null&&(y.depthNear>0&&(xe=y.depthNear),y.depthFar>0&&(Se=y.depthFar)),k.near=j.near=$.near=xe,k.far=j.far=$.far=Se,(V!==k.near||H!==k.far)&&(o.updateRenderState({depthNear:k.near,depthFar:k.far}),V=k.near,H=k.far),k.layers.mask=z.layers.mask|6,$.layers.mask=k.layers.mask&-5,j.layers.mask=k.layers.mask&-3;const Ne=z.parent,ve=k.cameras;G(k,Ne);for(let Ue=0;Ue<ve.length;Ue++)G(ve[Ue],Ne);k.projectionMatrix.copy($.projectionMatrix),k.projectionMatrixInverse.copy($.projectionMatrixInverse),J===null&&z.isPerspectiveCamera&&(J={camera:z,fov:z.fov,zoom:z.zoom}),X(z,k,Ne)};function X(z,xe,Se){Se===null?z.matrix.copy(xe.matrixWorld):(z.matrix.copy(Se.matrixWorld),z.matrix.invert(),z.matrix.multiply(xe.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(xe.projectionMatrix),z.projectionMatrixInverse.copy(xe.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=of*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(_===null&&b===null))return d},this.setFoveation=function(z){d=z,_!==null&&(_.fixedFoveation=z),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(k)},this.getCameraTexture=function(z){return S[z]};let P=null;function K(z,xe){if(g=xe.getViewerPose(p||u),w=xe,g!==null){const Se=g.views;b!==null&&(e.setRenderTargetFramebuffer(D,b.framebuffer),e.setRenderTarget(D));let Ne=!1;Se.length!==k.cameras.length&&(k.cameras.length=0,Ne=!0);for(let Be=0;Be<Se.length;Be++){const we=Se[Be];let Ie=null;if(b!==null)Ie=b.getViewport(we);else{const xt=v.getViewSubImage(_,we);Ie=xt.viewport,Be===0&&(e.setRenderTargetTextures(D,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(D))}let He=B[Be];He===void 0&&(He=new Di,He.layers.enable(Be),He.viewport=new un,B[Be]=He),He.matrix.fromArray(we.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(we.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Be===0&&(k.matrix.copy(He.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ne===!0&&k.cameras.push(He)}const ve=o.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){v=r.getBinding();const Be=v.getDepthInformation(Se[0]);Be&&Be.isValid&&Be.texture&&y.init(Be,o.renderState)}if(ve&&ve.includes("camera-access")&&A){e.state.unbindTexture(),v=r.getBinding();for(let Be=0;Be<Se.length;Be++){const we=Se[Be].camera;if(we){let Ie=S[we];Ie||(Ie=new F0,S[we]=Ie);const He=v.getCameraImage(we);Ie.sourceTexture=He}}}}for(let Se=0;Se<F.length;Se++){const Ne=L[Se],ve=F[Se];Ne!==null&&ve!==void 0&&ve.update(Ne,xe,p||u)}P&&P(z,xe),xe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:xe}),w=null}const be=new G0;be.setAnimationLoop(K),this.setAnimationLoop=function(z){P=z},this.dispose=function(){}}}const ZM=new dn,J0=new wt;J0.set(-1,0,0,0,1,0,0,0,1);function JM(s,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,z0(s)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function o(y,S,R,O,D){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?l(y,S):S.isMeshLambertMaterial?(l(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(y,S),v(y,S)):S.isMeshPhongMaterial?(l(y,S),g(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(y,S),_(y,S),S.isMeshPhysicalMaterial&&b(y,S,D)):S.isMeshMatcapMaterial?(l(y,S),w(y,S)):S.isMeshDepthMaterial?l(y,S):S.isMeshDistanceMaterial?(l(y,S),A(y,S)):S.isMeshNormalMaterial?l(y,S):S.isLineBasicMaterial?(u(y,S),S.isLineDashedMaterial&&h(y,S)):S.isPointsMaterial?d(y,S,R,O):S.isSpriteMaterial?p(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Un&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Un&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const R=e.get(S),O=R.envMap,D=R.envMapRotation;O&&(y.envMap.value=O,y.envMapRotation.value.setFromMatrix4(ZM.makeRotationFromEuler(D)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(J0),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function u(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function h(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function d(y,S,R,O){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*R,y.scale.value=O*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function g(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function _(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function b(y,S,R){y.ior.value=S.ior,S.diffuseRoughness>0&&(y.diffuseRoughness.value=S.diffuseRoughness,S.diffuseRoughnessMap&&(y.diffuseRoughnessMap.value=S.diffuseRoughnessMap,t(S.diffuseRoughnessMap,y.diffuseRoughnessMapTransform))),S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Un&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.retroreflectivity>0&&(y.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessMinimum,y.iridescenceThicknessMaximum.value=S.iridescenceThicknessMaximum,S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,S){S.matcap&&(y.matcap.value=S.matcap)}function A(y,S){const R=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function QM(s,e,t,r){let o={},l={};function u(R,O){const D=O.program;r.uniformBlockBinding(R,D,o[R.id])}function h(R,O){let D=o[R.id];D===void 0&&(w(R),D=d(R),o[R.id]=D,R.addEventListener("dispose",y));const F=O.program;r.updateUBOMapping(R,F);const L=e.render.frame;l[R.id]!==L&&(p(R),l[R.id]=L)}function d(R){const O=s.createBuffer(),D=R.__size,F=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,O),s.bufferData(s.UNIFORM_BUFFER,D,F),s.bindBuffer(s.UNIFORM_BUFFER,null),O}function p(R){const O=o[R.id],D=R.uniforms,F=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,O);for(let L=0,M=D.length;L<M;L++){const N=D[L];if(Array.isArray(N))for(let J=0,$=N.length;J<$;J++)g(N[J],L,J,F);else g(N,L,0,F)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function g(R,O,D,F){if(_(R,O,D,F)===!0){const L=R.__offset,M=R.value;if(Array.isArray(M)){let N=0;for(let J=0;J<M.length;J++){const $=M[J],j=A($,!0);v($,R.__data,N),N+=j.storage/Float32Array.BYTES_PER_ELEMENT}}else v(M,R.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,L,R.__data)}}function v(R,O,D){typeof R=="number"||typeof R=="boolean"?O[D]=R:R.isMatrix3?(O[D]=R.elements[0],O[D+1]=R.elements[1],O[D+2]=R.elements[2],O[D+3]=0,O[D+4]=R.elements[3],O[D+5]=R.elements[4],O[D+6]=R.elements[5],O[D+7]=0,O[D+8]=R.elements[6],O[D+9]=R.elements[7],O[D+10]=R.elements[8],O[D+11]=0):ArrayBuffer.isView(R)?O.set(R.subarray(0,O.length-D),D):R.toArray(O,D)}function _(R,O,D,F){const L=R.value,M=O+"_"+D;if(Array.isArray(L)){F[M]===void 0&&(F[M]=[]);const N=F[M];let J=!1;for(let $=0;$<L.length;$++)b(L[$],N,$)===!0&&(J=!0);return J}return b(L,F,M)}function b(R,O,D){if(O[D]===void 0)return typeof R=="number"||typeof R=="boolean"?O[D]=R:ArrayBuffer.isView(R)?O[D]=R.slice():O[D]=R.clone(),!0;{const F=O[D];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return O[D]=R,!0}else{if(ArrayBuffer.isView(R))return!0;if(F.equals(R)===!1)return F.copy(R),!0}}return!1}function w(R){const O=R.uniforms;let D=0;const F=16;for(let M=0,N=O.length;M<N;M++){const J=Array.isArray(O[M])?O[M]:[O[M]];for(let $=0,j=J.length;$<j;$++){const B=J[$],k=Array.isArray(B.value)?B.value:[B.value],V=Array.isArray(O[M])||Array.isArray(B.value);let H=D;for(let ee=0,Y=k.length;ee<Y;ee++){const G=k[ee],X=A(G,V),P=D%F,K=P%X.boundary,be=P+K;D+=K,be!==0&&F-be<X.storage&&(D+=F-be),ee===0&&(H=D),D+=X.storage}const se=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new se((D-H)/Float32Array.BYTES_PER_ELEMENT),B.__offset=H}}const L=D%F;return L>0&&(D+=F-L),R.__size=D,R.__cache={},this}function A(R,O){const D={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(D.boundary=4,D.storage=4):R.isVector2?(D.boundary=8,D.storage=8):R.isVector3||R.isColor?(D.boundary=16,D.storage=12):R.isVector4?(D.boundary=16,D.storage=16):R.isMatrix3?(D.boundary=16,D.storage=48):R.isMatrix4?(D.boundary=16,D.storage=64):R.isTexture?bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(D.boundary=16,D.storage=R.byteLength):bt("WebGLRenderer: Unsupported uniform value type.",R),O===!0&&(D.boundary=16,D.storage=Math.ceil(D.storage/16)*16),D}function y(R){const O=R.target;O.removeEventListener("dispose",y),s.deleteBuffer(o[O.id]),delete o[O.id],delete l[O.id]}function S(){for(const R in o)s.deleteBuffer(o[R]);o={},l={}}return{bind:u,update:h,dispose:S}}const ew=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Wi=null;function tw(){return Wi===null&&(Wi=new q_(ew,16,16,Ss,Ki),Wi.name="DFG_LUT",Wi.minFilter=ii,Wi.magFilter=ii,Wi.wrapS=ni,Wi.wrapT=ni,Wi.generateMipmaps=!1,Wi.needsUpdate=!0),Wi}class nw{constructor(e={}){const{canvas:t=y_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:b=di}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=u;const A=b,y=new Set([Sf,yf,_f]),S=new Set([di,qi,co,pa,xf,vf]),R=new Uint32Array(4),O=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]};let F=null,L=null;const M=[],N=[];let J=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const $=this;let j=!1,B=null,k=null,V=null,H=null;this._outputColorSpace=ui;let se=0,ee=0,Y=null,G=-1,X=null;const P=new un,K=new un;let be=null;const z=new Nt(0);let xe=0,Se=t.width,Ne=t.height,ve=1,Ue=null,at=null;const Be=new un(0,0,Se,Ne),we=new un(0,0,Se,Ne);let Ie=!1;const He=new fo,xt=new Ef;let _t=!1,Et=!1;const Ft=new dn,rn=new de,Pt=new un,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function on(){return Y===null?ve:1}let Q=r;function en(C,q){return t.getContext(C,q)}let Dt,zt,fe,Mt,qe,ot,I,E,ne,Ce,ye,ke,Oe,pe,me,ge,U,ie,re,Ee,Ae,Pe,Xe;try{const C={alpha:!0,depth:o,stencil:l,antialias:h,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mf}`),t.addEventListener("webglcontextlost",Ze,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),Q===null){const q="webgl2";if(Q=en(q,C),Q===null)throw en(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ft()}catch(C){throw t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),Xt("WebGLRenderer: "+C.message),C}function ft(){Dt=new sb(Q),Dt.init(),Ae=new XM(Q,Dt),zt=new YS(Q,Dt,e,Ae),fe=new WM(Q,Dt),zt.reversedDepthBuffer&&_&&fe.buffers.depth.setReversed(!0),k=Q.createFramebuffer(),V=Q.createFramebuffer(),H=Q.createFramebuffer(),Mt=new lb(Q),qe=new NM,ot=new jM(Q,Dt,fe,qe,zt,Ae,Mt),I=new rb($),E=new uy(Q),Pe=new XS(Q,E),ne=new ab(Q,E,Mt,Pe),Ce=new ub(Q,ne,E,Pe,Mt),ie=new cb(Q,zt,ot),me=new qS(qe),ye=new RM($,I,Dt,zt,Pe,me),ke=new JM($,qe),Oe=new DM,pe=new zM(Dt),U=new jS($,I,fe,Ce,w,d),ge=new VM($,Ce,zt),Xe=new QM(Q,Mt,zt,fe),re=new $S(Q,Dt,Mt),Ee=new ob(Q,Dt,Mt),Mt.programs=ye.programs,$.capabilities=zt,$.extensions=Dt,$.properties=qe,$.renderLists=Oe,$.shadowMap=ge,$.state=fe,$.info=Mt}A!==di&&(J=new fb(A,t.width,t.height,h,o,l));const Te=new KM($,Q);this.xr=Te,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const C=Dt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Dt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(C){C!==void 0&&(ve=C,this.setSize(Se,Ne,!1))},this.getSize=function(C){return C.set(Se,Ne)},this.setSize=function(C,q,ce=!0){if(Te.isPresenting){bt("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=C,Ne=q,t.width=Math.floor(C*ve),t.height=Math.floor(q*ve),ce===!0&&(t.style.width=C+"px",t.style.height=q+"px"),J!==null&&J.setSize(t.width,t.height),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(Se*ve,Ne*ve).floor()},this.setDrawingBufferSize=function(C,q,ce){Se=C,Ne=q,ve=ce,t.width=Math.floor(C*ce),t.height=Math.floor(q*ce),this.setViewport(0,0,C,q)},this.setEffects=function(C){if(A===di){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let q=0;q<C.length;q++)if(C[q].isOutputPass===!0){bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}J.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(Be)},this.setViewport=function(C,q,ce,oe){C.isVector4?Be.set(C.x,C.y,C.z,C.w):Be.set(C,q,ce,oe),fe.viewport(P.copy(Be).multiplyScalar(on()).round())},this.getScissor=function(C){return C.copy(we)},this.setScissor=function(C,q,ce,oe){C.isVector4?we.set(C.x,C.y,C.z,C.w):we.set(C,q,ce,oe),fe.scissor(K.copy(we).multiplyScalar(on()).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(C){fe.setScissorTest(Ie=C)},this.setOpaqueSort=function(C){Ue=C},this.setTransparentSort=function(C){at=C},this.getClearColor=function(C){return C.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,ce=!0){let oe=0;if(C){let ae=!1;if(Y!==null){const je=Y.texture.format;ae=y.has(je)}if(ae){const je=Y.texture.type,et=S.has(je),We=U.getClearColor(),$e=U.getClearAlpha(),nt=We.r,vt=We.g,Tt=We.b;et?(R[0]=nt,R[1]=vt,R[2]=Tt,R[3]=$e,Q.clearBufferuiv(Q.COLOR,0,R)):(O[0]=nt,O[1]=vt,O[2]=Tt,O[3]=$e,Q.clearBufferiv(Q.COLOR,0,O))}else oe|=Q.COLOR_BUFFER_BIT}q&&(oe|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(oe|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&Q.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),B=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),U.dispose(),Oe.dispose(),pe.dispose(),ot.dispose(),qe.dispose(),I.dispose(),Ce.dispose(),ne.dispose(),Pe.dispose(),Xe.dispose(),ye.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Lt),Te.removeEventListener("sessionend",St),$t.stop()};function Ze(C){C.preventDefault(),fm("WebGLRenderer: Context Lost."),j=!0}function ct(){fm("WebGLRenderer: Context Restored."),j=!1;const C=Mt.autoReset,q=ge.enabled,ce=ge.autoUpdate,oe=ge.needsUpdate,ae=ge.type;ft(),Mt.autoReset=C,ge.enabled=q,ge.autoUpdate=ce,ge.needsUpdate=oe,ge.type=ae}function Fe(C){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ht(C){const q=C.target;q.removeEventListener("dispose",ht),pt(q)}function pt(C){_e(C),qe.remove(C)}function _e(C){const q=qe.get(C).programs;q!==void 0&&(q.forEach(function(ce){ye.releaseProgram(ce)}),C.isShaderMaterial&&ye.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,ce,oe,ae,je){q===null&&(q=Kt);const et=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,We=Jr(C,q,ce,oe,ae);fe.setMaterial(oe,et);let $e=ce.index,nt=1;if(oe.wireframe===!0){if($e=ne.getWireframeAttribute(ce),$e===void 0)return;nt=2}const vt=ce.drawRange,Tt=ce.attributes.position;let it=vt.start*nt,Ct=(vt.start+vt.count)*nt;je!==null&&(it=Math.max(it,je.start*nt),Ct=Math.min(Ct,(je.start+je.count)*nt)),$e!==null?(it=Math.max(it,0),Ct=Math.min(Ct,$e.count)):Tt!=null&&(it=Math.max(it,0),Ct=Math.min(Ct,Tt.count));const sn=Ct-it;if(sn<0||sn===1/0)return;Pe.setup(ae,oe,We,ce,$e);let Yt,jt=re;if($e!==null&&(Yt=E.get($e),jt=Ee,jt.setIndex(Yt)),ae.isMesh)oe.wireframe===!0?(fe.setLineWidth(oe.wireframeLinewidth*on()),jt.setMode(Q.LINES)):jt.setMode(Q.TRIANGLES);else if(ae.isLine){let fn=oe.linewidth;fn===void 0&&(fn=1),fe.setLineWidth(fn*on()),ae.isLineSegments?jt.setMode(Q.LINES):ae.isLineLoop?jt.setMode(Q.LINE_LOOP):jt.setMode(Q.LINE_STRIP)}else ae.isPoints?jt.setMode(Q.POINTS):ae.isSprite&&jt.setMode(Q.TRIANGLES);if(ae.isBatchedMesh)if(Dt.get("WEBGL_multi_draw"))jt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const fn=ae._multiDrawStarts,rt=ae._multiDrawCounts,yn=ae._multiDrawCount,ut=$e?E.get($e).bytesPerElement:1,Fi=qe.get(oe).currentProgram.getUniforms();for(let Sn=0;Sn<yn;Sn++)Fi.setValue(Q,"_gl_DrawID",Sn),jt.render(fn[Sn]/ut,rt[Sn])}else if(ae.isInstancedMesh)jt.renderInstances(it,sn,ae.count);else if(ce.isInstancedBufferGeometry){const fn=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,rt=Math.min(ce.instanceCount,fn);jt.renderInstances(it,sn,rt)}else jt.render(it,sn)};function Ke(C,q,ce,oe){B!==null&&C.isNodeMaterial&&B.setObject(oe,C),_t===!0&&me.setState(C,ce,!1),C.transparent===!0&&C.side===Li&&C.forceSinglePass===!1?(C.side=Un,C.needsUpdate=!0,Ji(C,q,oe),C.side=ys,C.needsUpdate=!0,Ji(C,q,oe),C.side=Li):Ji(C,q,oe)}this.compile=function(C,q,ce=null){ce===null&&(ce=C),B!==null&&B.renderStart(C,q,ce),L=pe.get(ce),L.init(q),N.push(L),ce.traverseVisible(function(ae){ae.isLight&&ae.layers.test(q.layers)&&(L.pushLight(ae),ae.castShadow&&L.pushShadow(ae))}),C!==ce&&C.traverseVisible(function(ae){ae.isLight&&ae.layers.test(q.layers)&&(L.pushLight(ae),ae.castShadow&&L.pushShadow(ae))}),L.setupLights(),B!==null&&B.updateLights(L.state.lightsArray),Et=this.localClippingEnabled,_t=me.init(this.clippingPlanes,Et),_t===!0&&me.setGlobalState(this.clippingPlanes,q),B!==null&&ge.render(L.state.shadowsArray,ce,q);const oe=new Set;return C.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const je=ae.material;if(je)if(Array.isArray(je))for(let et=0;et<je.length;et++){const We=je[et];Ke(We,ce,q,ae),oe.add(We)}else Ke(je,ce,q,ae),oe.add(je)}),L=N.pop(),B!==null&&B.renderEnd(),oe},this.compileAsync=function(C,q,ce=null){const oe=this.compile(C,q,ce);return new Promise(ae=>{function je(){if(oe.forEach(function(et){const $e=qe.get(et).currentProgram;($e===void 0||$e.isReady())&&oe.delete(et)}),oe.size===0){ae(C);return}setTimeout(je,10)}Dt.get("KHR_parallel_shader_compile")!==null?je():setTimeout(je,10)})};let Ve=null;function Je(C){Ve&&Ve(C)}function Lt(){$t.stop()}function St(){$t.start()}const $t=new G0;$t.setAnimationLoop(Je),typeof self<"u"&&$t.setContext(self),this.setAnimationLoop=function(C){Ve=C,Te.setAnimationLoop(C),C===null?$t.stop():$t.start()},Te.addEventListener("sessionstart",Lt),Te.addEventListener("sessionend",St),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;B!==null&&B.renderStart(C,q);const ce=Te.enabled===!0&&Te.isPresenting===!0,oe=J!==null&&(Y===null||ce)&&J.begin($,Y);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(J===null||J.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(q),q=Te.getCamera()),C.isScene===!0&&C.onBeforeRender($,C,q,Y),L=pe.get(C,N.length),L.init(q),L.state.textureUnits=ot.getTextureUnits(),N.push(L),Ft.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),q.isArrayCamera?xt.setFromArrayCamera(q):He.setFromProjectionMatrix(Ft,Ui,q.reversedDepth),Et=this.localClippingEnabled,_t=me.init(this.clippingPlanes,Et),F=Oe.get(C,M.length),F.init(),M.push(F),this.info.render.frame++,Te.enabled===!0&&Te.isPresenting===!0){const et=$.xr.getDepthSensingMesh();et!==null&&Re(et,q,-1/0,$.sortObjects)}Re(C,q,0,$.sortObjects),F.finish(),B!==null&&B.updateLights(L.state.lightsArray),$.sortObjects===!0&&F.sort(Ue,at),Gt=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,Gt&&U.addToRenderList(F,C),this.info.autoReset===!0&&this.info.reset(),_t===!0&&me.beginShadows();const ae=L.state.shadowsArray;if(ge.render(ae,C,q),_t===!0&&me.endShadows(),(oe&&J.hasRenderPass())===!1){const et=F.opaque,We=F.transmissive;if(L.setupLights(),q.isArrayCamera){const $e=q.cameras;if(We.length>0)for(let nt=0,vt=$e.length;nt<vt;nt++){const Tt=$e[nt];pn(et,We,C,Tt)}Gt&&U.render(C);for(let nt=0,vt=$e.length;nt<vt;nt++){const Tt=$e[nt];kn(F,C,Tt,Tt.viewport)}}else We.length>0&&pn(et,We,C,q),Gt&&U.render(C),kn(F,C,q)}Y!==null&&ee===0&&(ot.updateMultisampleRenderTarget(Y),ot.updateRenderTargetMipmap(Y)),oe&&J.end($),C.isScene===!0&&C.onAfterRender($,C,q),Pe.resetDefaultState(),G=-1,X=null,N.pop(),N.length>0?(L=N[N.length-1],ot.setTextureUnits(L.state.textureUnits),_t===!0&&me.setGlobalState($.clippingPlanes,L.state.camera)):L=null,M.pop(),M.length>0?F=M[M.length-1]:F=null,B!==null&&B.renderEnd()};function Re(C,q,ce,oe){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)ce=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)L.pushLight(C),C.castShadow&&L.pushShadow(C);else if(C.isSprite){const et=q.isArrayCamera?xt:He;if(!C.frustumCulled||C.intersectsFrustum(et)){oe&&Pt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ft);const We=Ce.update(C),$e=C.material;$e.visible&&F.push(C,We,$e,ce,Pt.z,null,q)}}else if(C.isMesh||C.isLine||C.isPoints){const et=q.isArrayCamera?xt:He;if(!C.frustumCulled||C.intersectsFrustum(et)){const We=Ce.update(C),$e=C.material;if(oe&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Pt.copy(C.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),Pt.copy(We.boundingSphere.center)),Pt.applyMatrix4(C.matrixWorld).applyMatrix4(Ft)),Array.isArray($e)){const nt=We.groups;for(let vt=0,Tt=nt.length;vt<Tt;vt++){const it=nt[vt],Ct=$e[it.materialIndex];Ct&&Ct.visible&&F.push(C,We,Ct,ce,Pt.z,it,q)}}else $e.visible&&F.push(C,We,$e,ce,Pt.z,null,q)}}}const je=C.children;for(let et=0,We=je.length;et<We;et++)Re(je[et],q,ce,oe)}function kn(C,q,ce,oe){const{opaque:ae,transmissive:je,transparent:et}=C;L.setupLightsView(ce),_t===!0&&me.setGlobalState($.clippingPlanes,ce),oe&&fe.viewport(P.copy(oe)),ae.length>0&&Fn(ae,q,ce),je.length>0&&Fn(je,q,ce),et.length>0&&Fn(et,q,ce),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function pn(C,q,ce,oe){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[oe.id]===void 0){const it=Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[oe.id]=new Yi(1,1,{generateMipmaps:!0,type:it?Ki:di,minFilter:jr,samples:Math.max(4,zt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ot.workingColorSpace})}const je=L.state.transmissionRenderTarget[oe.id],et=oe.viewport||P;je.setSize(et.z*$.transmissionResolutionScale,et.w*$.transmissionResolutionScale);const We=$.getRenderTarget(),$e=$.getActiveCubeFace(),nt=$.getActiveMipmapLevel();$.setRenderTarget(je),$.getClearColor(z),xe=$.getClearAlpha(),xe<1&&$.setClearColor(16777215,.5),$.clear(),Gt&&U.render(ce);const vt=$.toneMapping;$.toneMapping=mr;const Tt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),L.setupLightsView(oe),_t===!0&&me.setGlobalState($.clippingPlanes,oe),Fn(C,ce,oe),ot.updateMultisampleRenderTarget(je),ot.updateRenderTargetMipmap(je),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Ct=0,sn=q.length;Ct<sn;Ct++){const Yt=q[Ct],{object:jt,geometry:fn,material:rt,group:yn}=Yt;if(rt.side===Li&&jt.layers.test(oe.layers)){const ut=rt.side;rt.side=Un,rt.needsUpdate=!0,ki(jt,ce,oe,fn,rt,yn),rt.side=ut,rt.needsUpdate=!0,it=!0}}it===!0&&(ot.updateMultisampleRenderTarget(je),ot.updateRenderTargetMipmap(je))}$.setRenderTarget(We,$e,nt),$.setClearColor(z,xe),Tt!==void 0&&(oe.viewport=Tt),$.toneMapping=vt}function Fn(C,q,ce){const oe=q.isScene===!0?q.overrideMaterial:null;for(let ae=0,je=C.length;ae<je;ae++){const et=C[ae],{object:We,geometry:$e,group:nt}=et;let vt=et.material;vt.allowOverride===!0&&oe!==null&&(vt=oe),We.layers.test(ce.layers)&&ki(We,q,ce,$e,vt,nt)}}function ki(C,q,ce,oe,ae,je){B!==null&&ae.isNodeMaterial&&B.setObject(C,ae),C.onBeforeRender($,q,ce,oe,ae,je),C.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ae.onBeforeRender($,q,ce,oe,C,je),ae.transparent===!0&&ae.side===Li&&ae.forceSinglePass===!1?(ae.side=Un,ae.needsUpdate=!0,$.renderBufferDirect(ce,q,oe,ae,C,je),ae.side=ys,ae.needsUpdate=!0,$.renderBufferDirect(ce,q,oe,ae,C,je),ae.side=Li):$.renderBufferDirect(ce,q,oe,ae,C,je),C.onAfterRender($,q,ce,oe,ae,je)}function xr(C){let q=0;for(const ce of C)ce.texture!==null&&q++;return q}function Ji(C,q,ce){q.isScene!==!0&&(q=Kt);const oe=qe.get(C),ae=L.state.lights,je=L.state.shadowsArray,et=ae.state.version,We=ye.getParameters(C,ae.state,je,q,ce,L.state.lightProbeGridArray),$e=ye.getProgramCacheKey(We);let nt=oe.programs;oe.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?q.environment:null,oe.fog=q.fog;const vt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;oe.envMap=I.get(C.envMap||oe.environment,vt),oe.envMapRotation=oe.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,nt===void 0&&(C.addEventListener("dispose",ht),nt=new Map,oe.programs=nt,oe.programVariants=new Map);let Tt=nt.get($e);if(Tt!==void 0){if(oe.currentProgram===Tt&&oe.lightsStateVersion===et)return ws(C,We),Tt}else We.uniforms=ye.getUniforms(C),B!==null&&C.isNodeMaterial&&B.build(C,ce,We),C.onBeforeCompile(We,$),Tt=ye.acquireProgram(We,$e),nt.set($e,Tt),oe.uniforms=We.uniforms;const it=oe.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(it.clippingPlanes=me.uniform),ws(C,We),oe.needsLights=vr(C),oe.lightsStateVersion=et,oe.needsLights&&(it.ambientLightColor.value=ae.state.ambient,it.lightProbe.value=ae.state.probe,it.sunLights.value=ae.state.sun,it.sunLightShadows.value=ae.state.sunShadow,it.directionalLights.value=ae.state.directional,it.directionalLightShadows.value=ae.state.directionalShadow,it.spotLights.value=ae.state.spot,it.spotLightShadows.value=ae.state.spotShadow,it.rectAreaLights.value=ae.state.rectArea,it.ltc_1.value=ae.state.rectAreaLTC1,it.ltc_2.value=ae.state.rectAreaLTC2,it.pointLights.value=ae.state.point,it.pointLightShadows.value=ae.state.pointShadow,it.hemisphereLights.value=ae.state.hemi,it.sunShadowMatrix.value=ae.state.sunShadowMatrix,it.sunShadowCascade.value=ae.state.sunShadowCascade,it.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,it.spotLightMatrix.value=ae.state.spotLightMatrix,it.spotLightMap.value=ae.state.spotLightMap,it.pointShadowMatrix.value=ae.state.pointShadowMatrix),oe.numLightProbeGrids=xr(L.state.lightProbeGridArray),oe.currentProgram=Tt,oe.uniformsList=null,Tt}function Ms(C,q,ce,oe,ae){const je=qe.get(C),et=je.currentProgram.id+","+oe+","+ae;let We=je.programVariants.get(et);return We===void 0?(We=Ji(C,q,ce),je.programVariants.set(et,We)):(je.currentProgram=We,je.uniformsList=null,je.outputColorSpace=oe,je.toneMapping=ae),We}function Jt(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=Kl.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function ws(C,q){const ce=qe.get(C);ce.outputColorSpace=q.outputColorSpace,ce.batching=q.batching,ce.batchingColor=q.batchingColor,ce.instancing=q.instancing,ce.instancingColor=q.instancingColor,ce.instancingMorph=q.instancingMorph,ce.skinning=q.skinning,ce.morphTargets=q.morphTargets,ce.morphNormals=q.morphNormals,ce.morphColors=q.morphColors,ce.morphTargetsCount=q.morphTargetsCount,ce.numClippingPlanes=q.numClippingPlanes,ce.numIntersection=q.numClipIntersection,ce.vertexAlphas=q.vertexAlphas,ce.vertexTangents=q.vertexTangents,ce.toneMapping=q.toneMapping}function Jr(C,q,ce,oe,ae){q.isScene!==!0&&(q=Kt),ot.resetTextureUnits();const je=q.fog,et=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?q.environment:null,We=Y===null?$.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Ot.workingColorSpace,$e=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,nt=I.get(oe.envMap||et,$e),vt=oe.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,Tt=!!ce.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),it=!!ce.morphAttributes.position,Ct=!!ce.morphAttributes.normal,sn=!!ce.morphAttributes.color;let Yt=mr;oe.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Yt=$.toneMapping);const jt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,fn=jt!==void 0?jt.length:0,rt=qe.get(oe),yn=L.state.lights;if(_t===!0&&(Et===!0||C!==X)){const Vt=C===X&&oe.id===G;me.setState(oe,C,Vt)}let ut=!1,Fi=!1;oe.version===rt.__version?rt.needsLights&&rt.lightsStateVersion!==yn.state.version||ae.isBatchedMesh&&rt.batching===!1||!ae.isBatchedMesh&&rt.batching===!0||ae.isBatchedMesh&&rt.batchingColor===!0&&ae._colorsTexture===null||ae.isBatchedMesh&&rt.batchingColor===!1&&ae._colorsTexture!==null||ae.isInstancedMesh&&rt.instancing===!1||!ae.isInstancedMesh&&rt.instancing===!0||ae.isSkinnedMesh&&rt.skinning===!1||!ae.isSkinnedMesh&&rt.skinning===!0||ae.isInstancedMesh&&rt.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&rt.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&rt.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&rt.instancingMorph===!1&&ae.morphTexture!==null||rt.envMap!==nt||oe.fog===!0&&rt.fog!==je||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==me.numPlanes||rt.numIntersection!==me.numIntersection)||rt.vertexAlphas!==vt||rt.vertexTangents!==Tt||rt.morphTargets!==it||rt.morphNormals!==Ct||rt.morphColors!==sn||rt.morphTargetsCount!==fn||rt.numLightProbeGrids!==xr(L.state.lightProbeGridArray)?ut=!0:(rt.outputColorSpace!==We||rt.toneMapping!==Yt)&&(Fi=!0):(ut=!0,rt.__version=oe.version);let Sn=rt.currentProgram;(ut===!0||Fi===!0)&&(Sn=Fi===!0?Ms(oe,q,ae,We,Yt):Ji(oe,q,ae),B&&oe.isNodeMaterial&&B.onUpdateProgram(oe,Sn,rt));let _r=!1,yi=!1,zi=!1;const It=Sn.getUniforms(),mn=rt.uniforms;if(fe.useProgram(Sn.program)&&(_r=!0,yi=!0,zi=!0),oe.id!==G&&(G=oe.id,yi=!0),_r||X!==C){fe.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),It.setValue(Q,"projectionMatrix",C.projectionMatrix),It.setValue(Q,"viewMatrix",C.matrixWorldInverse);const Zt=It.map.cameraPosition;Zt!==void 0&&Zt.setValue(Q,rn.setFromMatrixPosition(C.matrixWorld)),zt.logarithmicDepthBuffer&&It.setValue(Q,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&It.setValue(Q,"isOrthographic",C.isOrthographicCamera===!0),X!==C&&(X=C,yi=!0,zi=!0)}if(rt.needsLights&&(yn.state.sunShadowMap.length>0&&It.setValue(Q,"sunShadowMap",yn.state.sunShadowMap,ot),yn.state.directionalShadowMap.length>0&&It.setValue(Q,"directionalShadowMap",yn.state.directionalShadowMap,ot),yn.state.spotShadowMap.length>0&&It.setValue(Q,"spotShadowMap",yn.state.spotShadowMap,ot),yn.state.pointShadowMap.length>0&&It.setValue(Q,"pointShadowMap",yn.state.pointShadowMap,ot)),ae.isSkinnedMesh){It.setOptional(Q,ae,"bindMatrix"),It.setOptional(Q,ae,"bindMatrixInverse");const Vt=ae.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),It.setValue(Q,"boneTexture",Vt.boneTexture,ot))}ae.isBatchedMesh&&(It.setOptional(Q,ae,"batchingTexture"),It.setValue(Q,"batchingTexture",ae._matricesTexture,ot),It.setOptional(Q,ae,"batchingIdTexture"),It.setValue(Q,"batchingIdTexture",ae._indirectTexture,ot),It.setOptional(Q,ae,"batchingColorTexture"),ae._colorsTexture!==null&&It.setValue(Q,"batchingColorTexture",ae._colorsTexture,ot));const zn=ce.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&ie.update(ae,ce,Sn),(yi||rt.receiveShadow!==ae.receiveShadow)&&(rt.receiveShadow=ae.receiveShadow,It.setValue(Q,"receiveShadow",ae.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&q.environment!==null&&(mn.envMapIntensity.value=q.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=tw()),yi){if(It.setValue(Q,"toneMappingExposure",$.toneMappingExposure),rt.needsLights&&Es(mn,zi),je&&oe.fog===!0&&ke.refreshFogUniforms(mn,je),ke.refreshMaterialUniforms(mn,oe,ve,Ne,L.state.transmissionRenderTarget[C.id]),rt.needsLights&&rt.numLightProbeGrids>0){const Vt=D;let Zt=0;for(const Tn of L.state.lightProbeGridArray)Tn.texture!==null&&(Vt.textures[Zt]=Tn.texture,Vt.min[Zt]=Tn.boundingBox.min,Vt.max[Zt]=Tn.boundingBox.max,Vt.resolution[Zt]=Tn.resolution,Zt++);for(const Tn in Vt)Vt[Tn].length=Zt;mn.probesSH.value=Vt.textures,mn.probesMin.value=Vt.min,mn.probesMax.value=Vt.max,mn.probesResolution.value=Vt.resolution}Kl.upload(Q,Jt(rt),mn,ot)}if(oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Kl.upload(Q,Jt(rt),mn,ot),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&It.setValue(Q,"center",ae.center),It.setValue(Q,"modelViewMatrix",ae.modelViewMatrix),It.setValue(Q,"normalMatrix",ae.normalMatrix),It.setValue(Q,"modelMatrix",ae.matrixWorld),oe.uniformsGroups!==void 0){const Vt=oe.uniformsGroups;for(let Zt=0,Tn=Vt.length;Zt<Tn;Zt++){const yr=Vt[Zt];Xe.update(yr,Sn),Xe.bind(yr,Sn)}}return Sn}function Es(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.sunLights.needsUpdate=q,C.sunLightShadows.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function vr(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(C,q,ce){const oe=qe.get(C);oe.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),qe.get(C.texture).__webglTexture=q,qe.get(C.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:ce,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const ce=qe.get(C);ce.__webglFramebuffer=q,ce.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(C,q=0,ce=0){Y=C,se=q,ee=ce;let oe=null,ae=!1,je=!1;if(C){const We=qe.get(C);if(We.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(Q.FRAMEBUFFER,We.__webglFramebuffer),P.copy(C.viewport),K.copy(C.scissor),be=C.scissorTest,fe.viewport(P),fe.scissor(K),fe.setScissorTest(be),G=-1;return}else if(We.__webglFramebuffer===void 0)ot.setupRenderTarget(C);else if(We.__hasExternalTextures)ot.rebindTextures(C,qe.get(C.texture).__webglTexture,qe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const vt=C.depthTexture;if(We.__boundDepthTexture!==vt){if(vt!==null&&qe.has(vt)&&(C.width!==vt.image.width||C.height!==vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(C)}}const $e=C.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(je=!0);const nt=qe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(nt[q])?oe=nt[q][ce]:oe=nt[q],ae=!0):C.samples>0&&ot.useMultisampledRTT(C)===!1?oe=qe.get(C).__webglMultisampledFramebuffer:Array.isArray(nt)?oe=nt[ce]:oe=nt,P.copy(C.viewport),K.copy(C.scissor),be=C.scissorTest}else P.copy(Be).multiplyScalar(ve).floor(),K.copy(we).multiplyScalar(ve).floor(),be=Ie;if(ce!==0&&(oe=k),fe.bindFramebuffer(Q.FRAMEBUFFER,oe)&&fe.drawBuffers(C,oe),fe.viewport(P),fe.scissor(K),fe.setScissorTest(be),ae){const We=qe.get(C.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+q,We.__webglTexture,ce)}else if(je){const We=q;for(let $e=0;$e<C.textures.length;$e++){const nt=qe.get(C.textures[$e]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+$e,nt.__webglTexture,ce,We)}}else if(C!==null&&ce!==0){const We=qe.get(C.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,We.__webglTexture,ce)}G=-1};function Ts(C){const q=qe.get(C);return(q.__readFormat!==C.format||q.__readType!==C.type)&&(q.__readFormat=C.format,q.__readType=C.type,q.__formatReadable=zt.textureFormatReadable(C.format),q.__typeReadable=zt.textureTypeReadable(C.type)),q}this.readRenderTargetPixels=function(C,q,ce,oe,ae,je,et,We=0){if(!(C&&C.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=qe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&et!==void 0&&($e=$e[et],Array.isArray($e)&&($e=$e[0])),$e){fe.bindFramebuffer(Q.FRAMEBUFFER,$e);try{const nt=C.textures[We],vt=nt.format,Tt=nt.type;C.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+We);const it=Ts(nt);if(it.__formatReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(it.__typeReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-oe&&ce>=0&&ce<=C.height-ae&&Q.readPixels(q,ce,oe,ae,Ae.convert(vt),Ae.convert(Tt),je)}finally{const nt=Y!==null?qe.get(Y).__webglFramebuffer:null;fe.bindFramebuffer(Q.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(C,q,ce,oe,ae,je,et,We=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=qe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&et!==void 0&&($e=$e[et],Array.isArray($e)&&($e=$e[0])),$e)if(q>=0&&q<=C.width-oe&&ce>=0&&ce<=C.height-ae){fe.bindFramebuffer(Q.FRAMEBUFFER,$e);const nt=C.textures[We],vt=nt.format,Tt=nt.type;C.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+We);const it=Ts(nt);if(it.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(it.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ct=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Ct),Q.bufferData(Q.PIXEL_PACK_BUFFER,je.byteLength,Q.STREAM_READ),Q.readPixels(q,ce,oe,ae,Ae.convert(vt),Ae.convert(Tt),0),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null);const sn=Y!==null?qe.get(Y).__webglFramebuffer:null;fe.bindFramebuffer(Q.FRAMEBUFFER,sn);const Yt=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await S_(Q,Yt,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Ct),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,je),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null),Q.deleteBuffer(Ct),Q.deleteSync(Yt),je}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,ce=0){const oe=Math.pow(2,-ce),ae=Math.floor(C.image.width*oe),je=Math.floor(C.image.height*oe),et=q!==null?q.x:0,We=q!==null?q.y:0;ot.setTexture2D(C,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,ce,0,0,et,We,ae,je),fe.unbindTexture()},this.copyTextureToTexture=function(C,q,ce=null,oe=null,ae=0,je=0){let et,We,$e,nt,vt,Tt,it,Ct,sn;const Yt=C.isCompressedTexture?C.mipmaps[je]:C.image;if(ce!==null)et=ce.max.x-ce.min.x,We=ce.max.y-ce.min.y,$e=ce.isBox3?ce.max.z-ce.min.z:1,nt=ce.min.x,vt=ce.min.y,Tt=ce.isBox3?ce.min.z:0;else{const It=Math.pow(2,-ae);et=Math.floor(Yt.width*It),We=Math.floor(Yt.height*It),C.isDataArrayTexture?$e=Yt.depth:C.isData3DTexture?$e=Math.floor(Yt.depth*It):$e=1,nt=0,vt=0,Tt=0}oe!==null?(it=oe.x,Ct=oe.y,sn=oe.z):(it=0,Ct=0,sn=0);const jt=Ae.convert(q.format),fn=Ae.convert(q.type);let rt;q.isData3DTexture?(ot.setTexture3D(q,0),rt=Q.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ot.setTexture2DArray(q,0),rt=Q.TEXTURE_2D_ARRAY):(ot.setTexture2D(q,0),rt=Q.TEXTURE_2D),fe.activeTexture(Q.TEXTURE0),fe.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,q.flipY),fe.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),fe.pixelStorei(Q.UNPACK_ALIGNMENT,q.unpackAlignment);const yn=fe.getParameter(Q.UNPACK_ROW_LENGTH),ut=fe.getParameter(Q.UNPACK_IMAGE_HEIGHT),Fi=fe.getParameter(Q.UNPACK_SKIP_PIXELS),Sn=fe.getParameter(Q.UNPACK_SKIP_ROWS),_r=fe.getParameter(Q.UNPACK_SKIP_IMAGES);fe.pixelStorei(Q.UNPACK_ROW_LENGTH,Yt.width),fe.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Yt.height),fe.pixelStorei(Q.UNPACK_SKIP_PIXELS,nt),fe.pixelStorei(Q.UNPACK_SKIP_ROWS,vt),fe.pixelStorei(Q.UNPACK_SKIP_IMAGES,Tt);const yi=C.isDataArrayTexture||C.isData3DTexture,zi=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const It=qe.get(C),mn=qe.get(q),zn=qe.get(It.__renderTarget),Vt=qe.get(mn.__renderTarget);fe.bindFramebuffer(Q.READ_FRAMEBUFFER,zn.__webglFramebuffer),fe.bindFramebuffer(Q.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let Zt=0;Zt<$e;Zt++)yi&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,qe.get(C).__webglTexture,ae,Tt+Zt),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,qe.get(q).__webglTexture,je,sn+Zt)),Q.blitFramebuffer(nt,vt,nt+et,vt+We,it,Ct,it+et,Ct+We,Q.DEPTH_BUFFER_BIT,Q.NEAREST);fe.bindFramebuffer(Q.READ_FRAMEBUFFER,null),fe.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(ae!==0||C.isRenderTargetTexture||qe.has(C)){const It=qe.get(C),mn=qe.get(q);fe.bindFramebuffer(Q.READ_FRAMEBUFFER,V),fe.bindFramebuffer(Q.DRAW_FRAMEBUFFER,H);for(let zn=0;zn<$e;zn++)yi?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,It.__webglTexture,ae,Tt+zn):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,It.__webglTexture,ae),zi?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,mn.__webglTexture,je,sn+zn):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,mn.__webglTexture,je),ae!==0?Q.blitFramebuffer(nt,vt,nt+et,vt+We,it,Ct,it+et,Ct+We,Q.COLOR_BUFFER_BIT,Q.NEAREST):zi?Q.copyTexSubImage3D(rt,je,it,Ct,sn+zn,nt,vt,et,We):Q.copyTexSubImage2D(rt,je,it,Ct,nt,vt,et,We);fe.bindFramebuffer(Q.READ_FRAMEBUFFER,null),fe.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else zi?C.isDataTexture||C.isData3DTexture?Q.texSubImage3D(rt,je,it,Ct,sn,et,We,$e,jt,fn,Yt.data):q.isCompressedArrayTexture?Q.compressedTexSubImage3D(rt,je,it,Ct,sn,et,We,$e,jt,Yt.data):Q.texSubImage3D(rt,je,it,Ct,sn,et,We,$e,jt,fn,Yt):C.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,je,it,Ct,et,We,jt,fn,Yt.data):C.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,je,it,Ct,Yt.width,Yt.height,jt,Yt.data):Q.texSubImage2D(Q.TEXTURE_2D,je,it,Ct,et,We,jt,fn,Yt);fe.pixelStorei(Q.UNPACK_ROW_LENGTH,yn),fe.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,ut),fe.pixelStorei(Q.UNPACK_SKIP_PIXELS,Fi),fe.pixelStorei(Q.UNPACK_SKIP_ROWS,Sn),fe.pixelStorei(Q.UNPACK_SKIP_IMAGES,_r),je===0&&q.generateMipmaps===!0&&q.mipmapsAutoUpdate===!0&&Q.generateMipmap(rt),fe.unbindTexture()},this.initRenderTarget=function(C){qe.get(C).__webglFramebuffer===void 0&&ot.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ot.setTextureCube(C,0):C.isData3DTexture?ot.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ot.setTexture2DArray(C,0):ot.setTexture2D(C,0),fe.unbindTexture()},this.resetState=function(){se=0,ee=0,Y=null,fe.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ot._getUnpackColorSpace()}}function iw(s,e){const t=document.createElement("canvas");t.width=2048,t.height=1024;const r=t.getContext("2d");let o;e?s==="celestial-cyan"?o=["#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#f0f9ff","#dbeafe"]:s==="supernova-sunset"?o=["#fff1f2","#fecdd3","#fda4af","#fb7185","#e11d48","#9f1239","#fff7ed","#fed7aa"]:s==="nocturne-silver"?o=["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#71717a","#ffffff","#e4e4e7"]:s==="cyberpunk-neon"?o=["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#d946ef","#c026d3","#a21caf"]:s==="solar-gold"?o=["#fffbeb","#fef3c7","#fde68a","#fcd34d","#f59e0b","#d97706","#b45309","#78350f"]:s==="emerald-aurora"?o=["#f0fdf4","#dcfce7","#bbf7d0","#86efac","#4ade80","#22c55e","#16a34a","#15803d"]:s==="pure-pitch-black"?o=["#ffffff","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#71717a","#3f3f46","#18181b"]:o=["#fffbeb","#fef3c7","#fde68a","#fcd34d","#f59e0b","#d97706","#fff7ed","#ffedd5"]:s==="celestial-cyan"?o=["#020b14","#041d33","#083358","#0e4a7d","#0284c7","#38bdf8","#075985","#0c4a6e","#06b6d4"]:s==="supernova-sunset"?o=["#12040d","#2b061c","#4a0a2f","#771146","#be123c","#f43f5e","#ea580c","#fb923c","#450a22"]:s==="nocturne-silver"?o=["#060609","#111119","#1e1e2d","#2f2f45","#4d4d6e","#7b7b9e","#a6a6c7","#252538","#d4d4e8"]:s==="cyberpunk-neon"?o=["#080014","#16002c","#2c004d","#550080","#9333ea","#db2777","#f43f5e","#06b6d4","#22d3ee"]:s==="solar-gold"?o=["#0d0500","#1f0c00","#3b1700","#5e2500","#92400e","#d97706","#f59e0b","#fbbf24","#fef08a"]:s==="emerald-aurora"?o=["#020d06","#052110","#0a381d","#14532d","#16a34a","#22c55e","#4ade80","#10b981","#34d399"]:s==="pure-pitch-black"?o=["#000000","#050505","#0a0a0a","#121212","#1a1a1a","#262626","#404040","#737373","#a3a3a3"]:o=["#080415","#150933","#270e59","#3e1785","#5b21b6","#7c3aed","#a855f7","#c084fc","#2e1065","#d8b4fe"];const l=r.createLinearGradient(0,0,0,t.height);o.forEach((_,b)=>{l.addColorStop(b/(o.length-1),_)}),r.fillStyle=l,r.fillRect(0,0,t.width,t.height);const u=72;for(let _=0;_<u;_++){const w=_/u*t.height,A=t.height/u*(1.2+Math.sin(_*.7)*.5),y=o[_*3%o.length];r.fillStyle=y,r.globalAlpha=.25+Math.sin(_*.9)*.2,r.beginPath(),r.moveTo(0,w);const S=32;for(let R=0;R<=S;R++){const O=R/S*t.width,D=Math.sin(R*.8+_*1.5)*7+Math.cos(R*1.6+_*2.1)*4;r.lineTo(O,w+D)}r.lineTo(t.width,w+A),r.lineTo(0,w+A),r.closePath(),r.fill()}r.globalAlpha=e?.25:.4,r.fillStyle="#ffffff";for(let _=0;_<48;_++){const b=Math.random()*t.width,w=Math.random()*t.height,A=60+Math.random()*180,y=1.5+Math.random()*3.5;r.beginPath(),r.ellipse(b,w,A,y,Math.sin(w*.05)*.15,0,Math.PI*2),r.fill()}const h=t.width*.62,d=t.height*.58,p=85,g=r.createRadialGradient(h,d,5,h,d,p);e?(g.addColorStop(0,"#ffffff"),g.addColorStop(.4,o[o.length-2]),g.addColorStop(.8,o[o.length-1]),g.addColorStop(1,"rgba(255,255,255,0)")):(g.addColorStop(0,"#ffffff"),g.addColorStop(.3,o[o.length-3]||"#c084fc"),g.addColorStop(.7,o[o.length-1]||"#7c3aed"),g.addColorStop(1,"rgba(0,0,0,0)")),r.globalAlpha=.85,r.fillStyle=g,r.beginPath(),r.ellipse(h,d,p*1.6,p*.8,-.15,0,Math.PI*2),r.fill(),r.strokeStyle=e?"rgba(200, 150, 100, 0.45)":"rgba(255, 255, 255, 0.60)",r.lineWidth=2.5;for(let _=0;_<3;_++){r.beginPath();for(let b=0;b<Math.PI*2;b+=.2){const w=b/(Math.PI*2)*p*.7,A=h+Math.cos(b+_*2.1)*w*1.5,y=d+Math.sin(b+_*2.1)*w*.7;b===0?r.moveTo(A,y):r.lineTo(A,y)}r.stroke()}const v=new cc(t);return v.wrapS=ha,v.wrapT=ni,v}function rw(s,e){const t=document.createElement("canvas");t.width=1024,t.height=64;const r=t.getContext("2d");r.clearRect(0,0,t.width,t.height);let o,l;e?(o="rgba(217, 119, 6, 0.45)",l="rgba(245, 158, 11, 0.85)"):s==="celestial-cyan"?(o="rgba(56, 189, 248, 0.45)",l="rgba(186, 230, 253, 0.90)"):s==="supernova-sunset"?(o="rgba(251, 146, 60, 0.45)",l="rgba(254, 205, 211, 0.90)"):s==="nocturne-silver"?(o="rgba(212, 212, 216, 0.45)",l="rgba(255, 255, 255, 0.90)"):s==="cyberpunk-neon"?(o="rgba(6, 182, 212, 0.50)",l="rgba(244, 63, 94, 0.95)"):s==="solar-gold"?(o="rgba(245, 158, 11, 0.50)",l="rgba(254, 240, 138, 0.95)"):s==="emerald-aurora"?(o="rgba(16, 185, 129, 0.45)",l="rgba(110, 231, 183, 0.90)"):s==="pure-pitch-black"?(o="rgba(115, 115, 115, 0.35)",l="rgba(245, 245, 245, 0.90)"):(o="rgba(192, 132, 252, 0.50)",l="rgba(243, 232, 255, 0.92)");for(let h=0;h<t.width;h++){const d=h/t.width;let p=0;d<.22?p=.12+Math.sin(d*60)*.08:d>=.22&&d<.65?p=.75+Math.sin(d*120)*.18+Math.cos(d*240)*.06:d>=.65&&d<.72?p=.02:d>=.72&&d<.95?d>.85&&d<.87?p=.05:p=.55+Math.sin(d*100)*.15:p=.2+Math.sin(d*200)*.15,r.fillStyle=p>.6?l:o,r.globalAlpha=Math.max(0,Math.min(1,p)),r.fillRect(h,0,1,t.height)}const u=new cc(t);return u.wrapS=ni,u.wrapT=ni,u}function sw(s){const e=document.createElement("canvas");e.width=2048,e.height=1024;const t=e.getContext("2d");t.fillStyle=s?"#d6d3d1":"#888899",t.fillRect(0,0,e.width,e.height),t.fillStyle=s?"#a8a29e":"#474755",[{x:.35,y:.4,rx:240,ry:160},{x:.55,y:.35,rx:280,ry:190},{x:.7,y:.45,rx:200,ry:140},{x:.4,y:.65,rx:220,ry:150},{x:.6,y:.6,rx:260,ry:180}].forEach(u=>{t.globalAlpha=.65,t.beginPath(),t.ellipse(u.x*e.width,u.y*e.height,u.rx,u.ry,.2,0,Math.PI*2),t.fill()});const o=320;for(let u=0;u<o;u++){const h=Math.random()*e.width,d=Math.random()*e.height,p=4+Math.random()*32;if(t.globalAlpha=.55,t.fillStyle=s?"#57534e":"#22222a",t.beginPath(),t.arc(h,d,p,0,Math.PI*2),t.fill(),t.globalAlpha=.7,t.strokeStyle=s?"#ffffff":"#e2e8f0",t.lineWidth=Math.max(1,p*.2),t.beginPath(),t.arc(h,d,p,Math.PI*.75,Math.PI*1.75),t.stroke(),p>24){t.globalAlpha=.25,t.strokeStyle=s?"#ffffff":"#cbd5e1",t.lineWidth=1;for(let g=0;g<8;g++){const v=g/8*Math.PI*2,_=p*(3+Math.random()*5);t.beginPath(),t.moveTo(h+Math.cos(v)*p,d+Math.sin(v)*p),t.lineTo(h+Math.cos(v)*_,d+Math.sin(v)*_),t.stroke()}}}const l=new cc(e);return l.wrapS=ha,l.wrapT=ni,l}function aw(s){const e=document.createElement("canvas");e.width=2048,e.height=1024;const t=e.getContext("2d");t.fillStyle=s?"#991b1b":"#450a0a",t.fillRect(0,0,e.width,e.height),t.fillStyle=s?"#7f1d1d":"#1c0404",[{x:.35,y:.4,rx:240,ry:160},{x:.55,y:.35,rx:280,ry:190},{x:.7,y:.45,rx:200,ry:140},{x:.4,y:.65,rx:220,ry:150},{x:.6,y:.6,rx:260,ry:180}].forEach(u=>{t.globalAlpha=.75,t.beginPath(),t.ellipse(u.x*e.width,u.y*e.height,u.rx,u.ry,.2,0,Math.PI*2),t.fill()});const o=280;for(let u=0;u<o;u++){const h=Math.random()*e.width,d=Math.random()*e.height,p=4+Math.random()*30;t.globalAlpha=.6,t.fillStyle="#1c0404",t.beginPath(),t.arc(h,d,p,0,Math.PI*2),t.fill(),t.globalAlpha=.85,t.strokeStyle="#f87171",t.lineWidth=Math.max(1,p*.2),t.beginPath(),t.arc(h,d,p,Math.PI*.75,Math.PI*1.75),t.stroke()}const l=new cc(e);return l.wrapS=ha,l.wrapT=ni,l}const ow=()=>{const s=Me.useRef(null),{wallpaperSettings:e,appTheme:t}=Zr(),r=e.celestialBody||"ringed-planet",o=e.palette||"cosmic-royal",l=t==="light";return Me.useEffect(()=>{if(!s.current)return;if(r==="none"){s.current.innerHTML="";return}const u=s.current;u.innerHTML="";const h=u.clientWidth||window.innerWidth,d=u.clientHeight||window.innerHeight,p=h<768,g=new B_,v=new Di(45,h/d,.1,100);v.position.set(0,0,10);const _=new nw({alpha:!0,antialias:!0,powerPreference:"high-performance"});_.setSize(h,d),_.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),_.outputColorSpace=ui,u.appendChild(_.domElement);const b=new ay(l?16775149:16777215,l?2.8:2.5);g.add(b);const w=new oy(l?14870768:o==="celestial-cyan"?662832:o==="cyberpunk-neon"?2031672:o==="solar-gold"?2363651:o==="emerald-aurora"?270096:o==="pure-pitch-black"?197379:1577516,l?.7:.4);g.add(w);const A=new io;g.add(A);let y=3.4,S=1.8,R=.65;const O=e.celestialPosition||"default";O==="upper-right"?(y=p?1.2:3.4,S=p?2.3:1.8,b.position.set(-8,5,4)):O==="upper-left"?(y=p?-1.2:-3.3,S=p?2.5:2,b.position.set(-8,2,-2)):O==="zenith-center"?(y=0,S=p?2.5:2.4,b.position.set(0,0,4)):r==="ringed-planet"||r==="pulsar-star"?(y=p?1.2:3.4,S=p?2.3:1.8,R=p?.48:.68,b.position.set(-8,5,4)):r==="crescent-moon"||r==="blood-moon"?(y=p?-1.2:-3.3,S=p?2.5:2,R=p?.42:.6,b.position.set(-8,2,-2)):r==="eclipse-corona"&&(y=0,S=p?2.5:2.4,R=p?.45:.64,b.position.set(0,0,4));const D=e.celestialScaleMultiplier||1;R*=D,A.position.set(y,S,0),A.scale.set(R,R,R);let F=0,L=0,M=0,N=0;const J=Y=>{const G=Y.clientX/window.innerWidth*2-1;F=(-(Y.clientY/window.innerHeight)*2+1)*.18,L=G*.25};window.addEventListener("mousemove",J,{passive:!0});let $=null,j=null,B=null,k=null;if(r==="ringed-planet"){const Y=new Ni(1,64,64),G=iw(o,l),X=new zl({map:G,roughness:.55,metalness:.08});$=new _n(Y,X),A.add($);const P=new Ni(1.04,48,48),K=new _i({vertexShader:`
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
        `,uniforms:{glowColor:{value:new Nt(l?o==="celestial-cyan"?165063:14251782:o==="celestial-cyan"?3718648:o==="supernova-sunset"?16007006:11032055)}},transparent:!0,blending:xs,side:Un}),be=new _n(P,K);A.add(be);const z=new Cf(1.35,2.85,128),xe=z.attributes.position,Se=z.attributes.uv;for(let Be=0;Be<xe.count;Be++){const we=xe.getX(Be),Ie=xe.getY(Be),xt=(Math.sqrt(we*we+Ie*Ie)-1.35)/(2.85-1.35);Se.setXY(Be,xt,.5)}Se.needsUpdate=!0;const Ne=rw(o,l),ve=new zl({map:Ne,side:Li,transparent:!0,opacity:.92,roughness:.45,metalness:.05});j=new _n(z,ve),j.rotation.x=Math.PI*.48,j.rotation.y=-.15,A.add(j);const Ue=new Ni(.11,24,24),at=new zl({color:l?14078929:13095678,roughness:.8});B=new _n(Ue,at),A.add(B),A.rotation.z=-.42}else if(r==="crescent-moon"){const Y=new Ni(1,64,64),G=sw(l),X=new _i({vertexShader:`
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
        `,uniforms:{moonTexture:{value:G},sunDir:{value:new de(-1.6,.35,-.65).normalize()},sunlitColor:{value:new Nt(l?16776171:16710083)},earthshineColor:{value:new Nt(l?9741240:6583435)},earthshineAlpha:{value:l?.07:.05}},transparent:!0});$=new _n(Y,X),A.add($);const P=new Ni(1.04,48,48),K=new _i({vertexShader:`
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
        `,uniforms:{sunDir:{value:new de(-1.6,.35,-.65).normalize()},glowColor:{value:new Nt(l?16096779:16707722)}},transparent:!0,blending:xs,side:Un}),be=new _n(P,K);A.add(be),A.rotation.y=.45,A.rotation.z=-.22}else if(r==="eclipse-corona"){const Y=new xo(3.8,3.8),G=new _i({vertexShader:`
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
        `,uniforms:{uTime:{value:0},uColor:{value:new Nt(l?14251782:16638023)}},transparent:!0,blending:xs,depthWrite:!1});k=new _n(Y,G),A.add(k);const X=new Ni(.96,48,48),P=new ql({color:l?1579035:328970});$=new _n(X,P),A.add($)}else if(r==="blood-moon"){const Y=new Ni(1,64,64),G=aw(l),X=new zl({map:G,roughness:.7,metalness:.05});$=new _n(Y,X),A.add($);const P=new Ni(1.05,48,48),K=new _i({vertexShader:`
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
        `,transparent:!0,blending:xs,side:Un}),be=new _n(P,K);A.add(be),A.rotation.y=.5,A.rotation.z=-.2}else if(r==="pulsar-star"){const Y=new Ni(.72,48,48),G=new ql({color:l?165063:14742270});$=new _n(Y,G),A.add($);const X=new Af(1.4,5,32,1,!0),P=new ql({color:l?223649:3718648,transparent:!0,opacity:.5,side:Li,blending:xs}),K=new _n(X,P);K.position.y=2.6,A.add(K);const be=new _n(X,P);be.position.y=-2.6,be.rotation.x=Math.PI,A.add(be),k=K}let V;const H=performance.now(),se=()=>{V=requestAnimationFrame(se);const Y=(performance.now()-H)*.001;M+=(F-M)*.06,N+=(L-N)*.06,A.position.x=y+N*.8,A.position.y=S+M*.8;const G=e.rotationSpeed||"standard",X=G==="static"?0:G==="slow"?.35:G==="fast"?2.4:1;if($&&($.rotation.y+=.0012*X),B){const K=Y*.35*X;B.position.x=Math.cos(K)*4.8,B.position.z=Math.sin(K)*4.8*.4,B.position.y=Math.sin(K*1.5)*.6}k&&k.material.uniforms&&(k.material.uniforms.uTime.value=Y),_.render(g,v)};se();const ee=()=>{if(!u||!_||!v)return;const Y=u.clientWidth||window.innerWidth,G=u.clientHeight||window.innerHeight;v.aspect=Y/G,v.updateProjectionMatrix(),_.setSize(Y,G),_.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const X=Y<768,P=e.celestialPosition||"default";P==="upper-right"?(y=X?1.2:3.4,S=X?2.3:1.8):P==="upper-left"?(y=X?-1.2:-3.3,S=X?2.5:2):P==="zenith-center"?(y=0,S=X?2.5:2.4):r==="ringed-planet"||r==="pulsar-star"?(y=X?1.2:3.4,S=X?2.3:1.8,R=X?.48:.68):r==="crescent-moon"||r==="blood-moon"?(y=X?-1.2:-3.3,S=X?2.5:2,R=X?.42:.6):r==="eclipse-corona"&&(y=0,S=X?2.5:2.4,R=X?.45:.64),R*=e.celestialScaleMultiplier||1,A.position.set(y,S,0),A.scale.set(R,R,R)};return window.addEventListener("resize",ee,{passive:!0}),()=>{cancelAnimationFrame(V),window.removeEventListener("mousemove",J),window.removeEventListener("resize",ee),_.dispose(),u&&_.domElement&&u.contains(_.domElement)&&u.removeChild(_.domElement)}},[r,o,l,e.celestialPosition,e.celestialScaleMultiplier,e.rotationSpeed]),m.jsx("div",{ref:s,className:"fixed inset-0 pointer-events-none z-[1] select-none overflow-hidden","aria-hidden":"true"})};/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=s=>s==null?void 0:s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function cw(s,e,t=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:lw(s),size:24,node:e,...t.length>0?{aliases:t}:{}}}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=s=>{let e="",t=!1;for(const r of s){if(r==="-"||r==="_"||r<=" "){t=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=t?r.toUpperCase():r,t=!1}return e};/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=s=>{const e=uw(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function yd(s){return s!=null}function fw(s,e={}){var _,b;const t=e.attributeNames??{},r=w=>t[w]??w,o=s.size??s.width??ms.width,l=s.size??s.height??ms.height,u=((_=s.aliases)==null?void 0:_.filter(w=>typeof w=="string"&&w.trim()!=="").map(w=>`lucide-${w}`))??[],h=[...s.name?[`lucide-${s.name}`]:[],...u],d=((b=e.className)==null?void 0:b.split(" ").filter(Boolean))??[],p=e.includeDefaultClasses===!1?uf(...d):uf("lucide",...h,...d),g=e.absoluteStrokeWidth?Number(e.strokeWidth??ms["stroke-width"])*Number(s.size??s.width??ms.width)/Number(e.size??e.width??ms.width):e.strokeWidth??ms["stroke-width"];return["svg",{...Object.entries(ms).reduce((w,[A,y])=>(w[r(A)]=y,w),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&yd(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&yd(e.width)&&{[r("width")]:e.width},..."height"in e&&yd(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:g,...p&&{[r("class")]:p},[r("viewBox")]:`0 0 ${o} ${l}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},s.node.map(w=>{const[A,y,S]=w,R=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...y}:y;return S?[A,R,S]:[A,R]})]}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function hw(s,e={}){return fw(s,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},mw=Me.createContext({}),gw=()=>Me.useContext(mw),xw=Me.forwardRef(({color:s,size:e,width:t,height:r,strokeWidth:o,absoluteStrokeWidth:l,nonScalingStroke:u,className:h="",children:d,iconNode:p=[],icon:g={node:p,aliases:[],size:24},...v},_)=>{const{size:b=24,strokeWidth:w=2,absoluteStrokeWidth:A=!1,nonScalingStroke:y=!1,color:S="currentColor",className:R=""}=gw()??{},O=!!d||pw(v),[D,F,L=[]]=hw(g,{color:s??S,width:t??e??b,height:r??e??b,strokeWidth:o??w,absoluteStrokeWidth:l??A,nonScalingStroke:u??y,className:uf(R,h),hasA11yProp:O,attributes:v});return Me.createElement(D,{ref:_,...F},[...L.map(([M,N])=>Me.createElement(M,N)),...Array.isArray(d)?d:[d]])});/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function kt(s,e=[],t=[]){const r=typeof s=="string"?cw(s,e,t):s,o=Me.forwardRef(({className:l,...u},h)=>Me.createElement(xw,{ref:h,icon:r,className:l,...u}));return r.name&&(o.displayName=dw(r.name)),o}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0={name:"calendar-clock",size:24,node:[["path",{d:"M16 14v2.2l1.6 1",key:"fo4ql5"}],["path",{d:"M16 2v3",key:"otl347"}],["path",{d:"M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338",key:"7hb8p4"}],["path",{d:"M3 9h5.859",key:"numkqi"}],["path",{d:"M8 2v3",key:"1ioesn"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]};Q0.node;const t0=kt(Q0);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg={name:"calendar",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]]};eg.node;const vw=kt(eg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};tg.node;const hr=kt(tg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};ng.node;const ig=kt(ng);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};rg.node;const Nf=kt(rg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg={name:"droplets",size:24,node:[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]};sg.node;const _w=kt(sg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag={name:"external-link",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]};ag.node;const yw=kt(ag);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og={name:"eye-off",size:24,node:[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]};og.node;const Sw=kt(og);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg={name:"face-slightly-smiling",size:24,node:[["path",{d:"M15 10V9",key:"4dkmfx"}],["path",{d:"M16.472 15a6 6 0 01-8.943 0",key:"7qomzy"}],["path",{d:"M9 10V9",key:"1lazqi"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["smile"]};lg.node;const bw=kt(lg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg={name:"flame",size:24,node:[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]]};cg.node;const ug=kt(cg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg={name:"headphones",size:24,node:[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]};dg.node;const sc=kt(dg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg={name:"list-music",size:24,node:[["path",{d:"M16 5H3",key:"m91uny"}],["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M11 19H3",key:"zflm78"}],["path",{d:"M21 16V5",key:"yxg4q8"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]};fg.node;const n0=kt(fg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg={name:"maximize-2",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]};hg.node;const i0=kt(hg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg={name:"minimize-2",size:24,node:[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]]};pg.node;const mg=kt(pg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};gg.node;const ac=kt(gg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};xg.node;const $r=kt(xg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};vg.node;const Yr=kt(vg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};_g.node;const Zl=kt(_g);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg={name:"quote",size:24,node:[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]};yg.node;const Mw=kt(yg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg={name:"radio",size:24,node:[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};Sg.node;const r0=kt(Sg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};bg.node;const Wr=kt(bg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg={name:"skip-back",size:24,node:[["path",{d:"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",key:"15892j"}],["path",{d:"M3 20V4",key:"1ptbpl"}]]};Mg.node;const df=kt(Mg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg={name:"skip-forward",size:24,node:[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]]};wg.node;const ff=kt(wg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};Eg.node;const Tg=kt(Eg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Ag.node;const _s=kt(Ag);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg={name:"square-check-big",size:24,node:[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-square"]};Cg.node;const ww=kt(Cg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg={name:"star",size:24,node:[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]};Rg.node;const Ew=kt(Rg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};Ng.node;const Pg=kt(Ng);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg={name:"sunrise",size:24,node:[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]};Dg.node;const Tw=kt(Dg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg={name:"target",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};Lg.node;const Aw=kt(Lg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};Ig.node;const oc=kt(Ig);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug={name:"tv",size:24,node:[["path",{d:"m17 2-5 5-5-5",key:"16satq"}],["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",key:"1e6viu"}]]};Ug.node;const Cw=kt(Ug);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg={name:"user",size:24,node:[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]};kg.node;const Fg=kt(kg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};zg.node;const hf=kt(zg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};Og.node;const Bg=kt(Og);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Hg.node;const pr=kt(Hg),Rw=()=>{const{activeYouTubeItem:s,isYouTubePlaying:e,youtubeVolume:t,isYouTubeMuted:r,setYouTubeIsPlaying:o,setYouTubePlayerReady:l,showYouTubePreview:u,setShowYouTubePreview:h,toggleYouTubePlay:d,nextYouTubeTrack:p,prevYouTubeTrack:g,toggleYouTubeMute:v,setYouTubeVolume:_,audioSource:b}=Zr(),w=Me.useRef(null),[A,y]=Me.useState(null),S=Me.useRef((s==null?void 0:s.id)||null),R=Me.useRef(null),[O,D]=Me.useState(!1),F=Me.useRef(!1),L=Me.useCallback((k,V="")=>{try{w.current&&w.current.contentWindow&&w.current.contentWindow.postMessage(JSON.stringify({event:"command",func:k,args:V}),"*")}catch(H){console.warn("[YouTube Audio] Command error:",H)}},[]),M=Me.useCallback((k,V)=>{const H=V?"1":"0",se=typeof window<"u"&&window.location.origin?`&origin=${encodeURIComponent(window.location.origin)}`:"";if(!k)return`https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=${H}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${se}`;if(k.type==="playlist"&&k.playlistId)return`https://www.youtube.com/embed/videoseries?list=${encodeURIComponent(k.playlistId)}&autoplay=${H}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${se}`;if(k.type==="video_in_playlist"&&k.videoId&&k.playlistId)return`https://www.youtube.com/embed/${encodeURIComponent(k.videoId)}?list=${encodeURIComponent(k.playlistId)}&autoplay=${H}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${se}`;const ee=k.videoId||"jfKfPfyJRdk";return`https://www.youtube.com/embed/${encodeURIComponent(ee)}?autoplay=${H}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${se}`},[]),[N,J]=Me.useState(()=>M(s,!1)),$=Me.useCallback(()=>{L("unMute",""),L("setVolume",[t||75]),r&&v()},[L,t,r,v]);Me.useEffect(()=>(window.__forMeSendYouTubeCommand=L,window.__forMeForceUnmute=$,l(!0),()=>{delete window.__forMeSendYouTubeCommand,delete window.__forMeForceUnmute}),[L,$,l]),Me.useEffect(()=>{if(!s||S.current===s.id)return;S.current=s.id,y(null);const k=M(s,e);R.current=k,J(k),Pi.updateMetadata({title:s.title,artist:s.channel||"FOR ME Sanctuary",album:s.type==="playlist"?"YouTube Playlist":"YouTube Stream",artworkUrl:s.thumbnailUrl,onPlay:()=>{o(!0),L("playVideo",""),$()},onPause:()=>{o(!1),L("pauseVideo","")},onNext:s.type==="playlist"||s.type==="video_in_playlist"?p:void 0,onPrev:s.type==="playlist"||s.type==="video_in_playlist"?g:void 0})},[s,M,e,p,g,L,o,$]),Me.useEffect(()=>{if(F.current){F.current=!1;return}e?(L("playVideo",""),setTimeout(()=>{L("unMute",""),L("setVolume",[t||75])},50),Pi.setPlaybackState("playing")):(L("pauseVideo",""),Pi.setPlaybackState("paused"))},[e,L,t]),Me.useEffect(()=>{L("setVolume",[t||75])},[t,L]),Me.useEffect(()=>{r?L("mute",""):(L("unMute",""),L("setVolume",[t||75]))},[r,t,L]),Me.useEffect(()=>{const k=V=>{if(!(!V.data||typeof V.data!="string"))try{const H=JSON.parse(V.data);H.event==="onStateChange"?H.info===1?(F.current=!0,o(!0),y(null),Pi.setPlaybackState("playing"),r||(L("unMute",""),L("setVolume",[t||75]))):H.info===2?document.hidden||(F.current=!0,o(!1),Pi.setPlaybackState("paused")):H.info===0&&((s==null?void 0:s.type)==="playlist"||(s==null?void 0:s.type)==="video_in_playlist"?Pi.setPlaybackState("playing"):(F.current=!0,o(!1),Pi.setPlaybackState("none"))):H.event==="infoDelivery"&&H.info?typeof H.info.muted=="boolean"&&H.info.muted&&!r&&e&&(L("unMute",""),L("setVolume",[t||75])):H.event==="onError"&&(console.warn("[YouTube Audio Player Error]",H.info),(H.info===101||H.info===150)&&y("The owner of this video restricts playback outside of YouTube."))}catch{}};return window.addEventListener("message",k),()=>window.removeEventListener("message",k)},[o,r,t,L,s,e]);const j=b==="youtube"&&e||u,B=(s==null?void 0:s.type)==="playlist"||(s==null?void 0:s.type)==="video_in_playlist";return m.jsxs(m.Fragment,{children:[m.jsxs("div",{role:"region","aria-label":"YouTube Audio Player",style:{position:"fixed",bottom:!j||O?"0px":u?"84px":"16px",right:!j||O?"0px":u?"24px":"16px",width:!j||O?"2px":u?"380px":"250px",height:!j||O?"2px":u?"285px":"150px",zIndex:!j||O?-1:u?50:30,opacity:!j||O?.01:1,pointerEvents:!j||O?"none":"auto",borderRadius:"1.25rem",overflow:"hidden",boxShadow:u?"0 30px 70px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.18)":"0 15px 35px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.12)",transition:"all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"},className:"backdrop-blur-2xl bg-[#090b14]/95 flex flex-col border border-white/15",children:[m.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-black/60 shrink-0 select-none",children:[m.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[m.jsx("span",{className:`w-2 h-2 rounded-full shrink-0 ${e?"bg-red-500 animate-pulse":"bg-zinc-500"}`}),m.jsx("span",{className:"text-white text-xs font-display font-semibold truncate max-w-[110px] sm:max-w-[160px]",title:s==null?void 0:s.title,children:(s==null?void 0:s.title)||"YouTube Audio"})]}),m.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[m.jsxs("button",{type:"button",onClick:$,className:`px-1.5 py-0.5 rounded-md text-[10px] font-sans font-bold flex items-center gap-1 transition-colors cursor-pointer ${r?"bg-amber-500 text-black hover:bg-amber-400 animate-pulse":"bg-emerald-600/80 text-white hover:bg-emerald-500"}`,title:"Force Unmute & Restore Volume",children:[r?m.jsx(Bg,{className:"w-3 h-3"}):m.jsx(hf,{className:"w-3 h-3"}),m.jsx("span",{className:"hidden sm:inline",children:r?"UNMUTE":`${t}%`})]}),m.jsx("button",{type:"button",onClick:()=>D(!0),className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer",title:"Audio Only (Hide Video Frame)",children:m.jsx(sc,{className:"w-3 h-3"})}),m.jsx("button",{type:"button",onClick:()=>h(!u),className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer",title:u?"Collapse to Mini Player":"Expand Video Preview",children:u?m.jsx(mg,{className:"w-3 h-3"}):m.jsx(i0,{className:"w-3 h-3"})}),m.jsx("button",{type:"button",onClick:()=>{o(!1),h(!1),L("pauseVideo","")},className:"p-1 rounded-md bg-white/10 hover:bg-red-500/80 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer",title:"Stop playback & close",children:m.jsx(pr,{className:"w-3 h-3"})})]})]}),A&&m.jsxs("div",{className:"absolute inset-0 z-30 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center space-y-2 pointer-events-auto",children:[m.jsx(ig,{className:"w-6 h-6 text-amber-400"}),m.jsx("p",{className:"text-xs text-white/95 font-sans leading-relaxed max-w-xs",children:A}),(s==null?void 0:s.url)&&m.jsxs("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold transition-colors shadow-md",children:[m.jsx(yw,{className:"w-3 h-3"}),m.jsx("span",{children:"Open in YouTube"})]})]}),m.jsx("div",{className:"flex-1 w-full bg-black relative min-h-0",children:m.jsx("iframe",{ref:w,id:"global-youtube-audio-iframe",title:"FOR ME Sanctuary Audio Stream",src:N,className:"w-full h-full border-0 absolute inset-0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),m.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 border-t border-white/10 bg-black/60 shrink-0 text-xs",children:[u?m.jsxs("div",{className:"flex items-center gap-1",children:[m.jsx("span",{className:"text-[10px] font-sans text-zinc-400 mr-1",children:"Vol:"}),[25,50,75,100].map(k=>m.jsxs("button",{type:"button",onClick:()=>{_(k),L("setVolume",[k]),$()},className:`px-1.5 py-0.5 rounded text-[10px] font-mono transition-colors cursor-pointer ${t===k?"bg-red-600 text-white font-bold":"bg-white/10 text-zinc-300 hover:bg-white/20"}`,children:[k,"%"]},k))]}):m.jsxs("div",{className:"flex items-center gap-1",children:[B&&m.jsxs(m.Fragment,{children:[m.jsx("button",{type:"button",onClick:g,className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer",title:"Previous track in playlist",children:m.jsx(df,{className:"w-3 h-3"})}),m.jsx("button",{type:"button",onClick:p,className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer",title:"Next track in playlist",children:m.jsx(ff,{className:"w-3 h-3"})})]}),m.jsx("span",{className:"text-[10px] font-mono text-zinc-400",children:r?"Muted":`${t}%`})]}),m.jsxs("div",{className:"flex items-center gap-1.5",children:[u&&B&&m.jsxs(m.Fragment,{children:[m.jsx("button",{type:"button",onClick:g,className:"p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white transition-colors cursor-pointer",title:"Previous track",children:m.jsx(df,{className:"w-3.5 h-3.5"})}),m.jsx("button",{type:"button",onClick:p,className:"p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white transition-colors cursor-pointer",title:"Next track",children:m.jsx(ff,{className:"w-3.5 h-3.5"})})]}),m.jsx("button",{type:"button",onClick:()=>{d(),$()},className:`px-3 py-1 rounded-lg text-white text-[11px] font-display font-semibold flex items-center gap-1 shadow-sm transition-all cursor-pointer ${e?"bg-red-600 hover:bg-red-500":"bg-emerald-600 hover:bg-emerald-500"}`,children:e?m.jsxs(m.Fragment,{children:[m.jsx($r,{className:"w-3 h-3 fill-current"}),m.jsx("span",{children:"Pause"})]}):m.jsxs(m.Fragment,{children:[m.jsx(Yr,{className:"w-3 h-3 fill-current ml-0.5"}),m.jsx("span",{children:"Play"})]})})]})]})]}),j&&O&&m.jsxs("button",{type:"button",onClick:()=>D(!1),className:"fixed bottom-4 right-4 z-40 px-3 py-1.5 rounded-xl cosmic-dock text-xs flex items-center gap-2 border border-white/15 text-white hover:border-violet-400/50 shadow-xl cursor-pointer transition-all animate-fadeIn",title:"Restore Video Frame",children:[m.jsx("span",{className:"w-2 h-2 rounded-full bg-red-500 animate-pulse"}),m.jsx("span",{className:"font-display text-[11px] font-medium",children:"Show Video"}),m.jsx(i0,{className:"w-3 h-3 text-zinc-400"})]})]})},Nw=[{id:"deep-space-obsidian",name:"Deep Space Obsidian",tagline:"Luminous Lavender & Crescent Moon",accent:"#a855f7",gradient:["#060814","#2d1252","#7c3aed","#ede9fe"],settings:{palette:"cosmic-royal",celestialBody:"crescent-moon",celestialPosition:"default",celestialScaleMultiplier:1,rotationSpeed:"standard",waveGeometry:"dunes",speed:"balanced",amplitude:"majestic",waveLayerDensity:"deep",horizonHeight:"balanced",clockFontStyle:"tabular",clockHalo:"pulsar",clockColor:"palette",clockPosition:"center",clockDivider:"colon",showConstellations:!0,showComet:!0,showNebulaDust:!0,starDensity:"balanced",shootingStarMode:"occasional"}},{id:"cyberpunk-neon",name:"Cyberpunk Neon",tagline:"High-Voltage Cyan & Ringed Gas Giant",accent:"#06b6d4",gradient:["#06000e","#3b0764","#06b6d4","#f43f5e"],settings:{palette:"cyberpunk-neon",celestialBody:"ringed-planet",celestialPosition:"upper-right",celestialScaleMultiplier:1.15,rotationSpeed:"fast",waveGeometry:"aurora",speed:"dynamic",amplitude:"dramatic",waveLayerDensity:"dense",horizonHeight:"balanced",clockFontStyle:"mono",clockHalo:"pulsar",clockColor:"cyan",clockPosition:"center",clockDivider:"colon",showCrossStars:!0,showOrbitalTrack:!0,starDensity:"dense",shootingStarMode:"meteor-shower"}},{id:"emerald-borealis",name:"Emerald Borealis",tagline:"Northern Aurora Ribbons & Pulsar Star",accent:"#10b981",gradient:["#010d05","#064e3b","#10b981","#a7f3d0"],settings:{palette:"emerald-aurora",celestialBody:"pulsar-star",celestialPosition:"zenith-center",celestialScaleMultiplier:1.1,rotationSpeed:"fast",waveGeometry:"aurora",speed:"balanced",amplitude:"majestic",waveLayerDensity:"dense",horizonHeight:"balanced",clockFontStyle:"minimal",clockHalo:"pulsar",clockColor:"cyan",clockPosition:"center",clockDivider:"dot",showConstellations:!0,showComet:!0,starDensity:"galaxy",shootingStarMode:"occasional"}},{id:"sunset-dunes",name:"Sunset Dunes",tagline:"Velvet Crimson & Solar Eclipse Corona",accent:"#f43f5e",gradient:["#0a0208","#771146","#e11d48","#f59e0b"],settings:{palette:"supernova-sunset",celestialBody:"eclipse-corona",celestialPosition:"zenith-center",celestialScaleMultiplier:1,rotationSpeed:"standard",waveGeometry:"dunes",speed:"balanced",amplitude:"majestic",waveLayerDensity:"deep",horizonHeight:"balanced",clockFontStyle:"serif",clockHalo:"subtle",clockColor:"gold",clockPosition:"center",clockDivider:"space",showConstellations:!1,showComet:!0,starDensity:"balanced",shootingStarMode:"off"}},{id:"blood-moon-totality",name:"Blood Moon Totality",tagline:"Crimson Eclipse & Ruby Stardust",accent:"#ef4444",gradient:["#0d0202","#450a0a","#b91c1c","#f87171"],settings:{palette:"supernova-sunset",celestialBody:"blood-moon",celestialPosition:"upper-left",celestialScaleMultiplier:1.25,rotationSpeed:"slow",waveGeometry:"mountains",speed:"calm",amplitude:"dramatic",waveLayerDensity:"deep",horizonHeight:"balanced",clockFontStyle:"serif",clockHalo:"pulsar",clockColor:"rose",clockPosition:"center",clockDivider:"colon",showConstellations:!0,showCrossStars:!0,starDensity:"dense",shootingStarMode:"meteor-shower"}},{id:"nord-frost",name:"Nord Frost",tagline:"Sub-Zero Arctic & Crystalline Torus",accent:"#38bdf8",gradient:["#020b14","#0c2e4e","#0284c7","#e0f2fe"],settings:{palette:"celestial-cyan",celestialBody:"crescent-moon",celestialPosition:"upper-right",celestialScaleMultiplier:1.1,rotationSpeed:"standard",waveGeometry:"ocean",speed:"balanced",amplitude:"majestic",waveLayerDensity:"dense",horizonHeight:"low",clockFontStyle:"minimal",clockHalo:"none",clockColor:"white",clockPosition:"center",clockDivider:"colon",showConstellations:!0,showCrossStars:!0,starDensity:"dense",shootingStarMode:"occasional"}},{id:"monochrome-mineral",name:"Monochrome Mineral",tagline:"Architectural Platinum & Deep Void",accent:"#a1a1aa",gradient:["#030306","#181824","#71717a","#ffffff"],settings:{palette:"nocturne-silver",celestialBody:"none",celestialPosition:"default",celestialScaleMultiplier:1,rotationSpeed:"static",waveGeometry:"mountains",speed:"calm",amplitude:"subtle",waveLayerDensity:"airy",horizonHeight:"balanced",clockFontStyle:"tabular",clockHalo:"none",clockColor:"white",clockPosition:"center",clockDivider:"space",showConstellations:!1,showComet:!1,showNebulaDust:!1,starDensity:"sparse",shootingStarMode:"off"}},{id:"pure-pitch-black",name:"Pitch Black Void",tagline:"OLED Zero-Light Battery Sanctuary",accent:"#71717a",gradient:["#000000","#050505","#171717","#e5e5e5"],settings:{palette:"pure-pitch-black",celestialBody:"crescent-moon",celestialPosition:"upper-right",celestialScaleMultiplier:.8,rotationSpeed:"slow",waveGeometry:"dunes",speed:"frozen",amplitude:"subtle",waveLayerDensity:"airy",horizonHeight:"low",clockFontStyle:"tabular",clockHalo:"none",clockColor:"white",clockPosition:"center",clockDivider:"colon",showConstellations:!1,showComet:!1,showNebulaDust:!1,starDensity:"sparse",shootingStarMode:"off"}}],Pw=[{id:"cosmic-royal",name:"Cosmic Royal",previewColors:["#060814","#2d1252","#7c3aed","#ede9fe"]},{id:"cyberpunk-neon",name:"Cyber Neon",previewColors:["#06000e","#3b0764","#06b6d4","#f43f5e"]},{id:"emerald-aurora",name:"Emerald Aurora",previewColors:["#010d05","#064e3b","#10b981","#a7f3d0"]},{id:"supernova-sunset",name:"Sunset Supernova",previewColors:["#12050e","#6e133e","#e11d48","#fffbeb"]},{id:"celestial-cyan",name:"Celestial Cyan",previewColors:["#030b14","#0c2e4e","#0284c7","#e0f2fe"]},{id:"solar-gold",name:"Solar Gold",previewColors:["#140d02","#523405","#f59e0b","#fef3c7"]},{id:"nocturne-silver",name:"Nocturne Silver",previewColors:["#050508","#1e1e24","#71717a","#f4f4f5"]},{id:"pure-pitch-black",name:"Pitch Black OLED",previewColors:["#000000","#09090b","#27272a","#fafafa"]}],Dw=({isOpen:s,onClose:e})=>{const{wallpaperSettings:t,updateWallpaperSettings:r,appTheme:o,toggleAppTheme:l}=Zr(),u=o==="light",[h,d]=Me.useState("realms");if(!s)return null;const p=()=>{r({palette:"cosmic-royal",speed:"balanced",amplitude:"majestic",waveGeometry:"dunes",waveLayerDensity:"deep",horizonHeight:"balanced",waveStrokeOpacity:.8,interactiveParallax:!0,celestialBody:"crescent-moon",celestialPosition:"default",celestialScaleMultiplier:1,rotationSpeed:"standard",showNebulaDust:!0,nebulaIntensity:"vivid",showConstellations:!0,showComet:!0,shootingStarMode:"occasional",showStars:!0,starDensity:"balanced",showCrossStars:!1,showOrbitalTrack:!1,showMeridian:!1,clockFontStyle:"tabular",clockSize:"standard",clockPosition:"center",clockDivider:"colon",clockColor:"palette",clockFormat:"12h",showSeconds:!0,showDate:!0,showGreeting:!0,clockHalo:"pulsar"})};return m.jsxs("div",{className:"fixed inset-0 z-50 pointer-events-none select-none",children:[m.jsx("div",{className:"absolute inset-0 bg-black/20 backdrop-blur-[2px] pointer-events-auto transition-opacity",onClick:e,"aria-hidden":"true"}),m.jsxs("aside",{role:"dialog","aria-modal":"true","aria-label":"Wallpaper Studio Inspector",className:`absolute top-8 sm:top-10 bottom-3 sm:bottom-6 right-2 sm:right-6 w-[calc(100%-1rem)] sm:w-[440px] rounded-3xl border shadow-[0_24px_80px_rgba(0,0,0,0.85)] backdrop-blur-3xl flex flex-col z-10 pointer-events-auto transition-all animate-fadeIn overflow-hidden ${u?"bg-white/95 border-zinc-200/90 text-zinc-900":"bg-[#090b16]/95 border-white/[0.12] text-white"}`,children:[m.jsxs("div",{className:`flex items-center justify-between p-4 px-5 border-b shrink-0 ${u?"border-zinc-200/80 bg-white/70":"border-white/[0.08] bg-white/[0.02]"}`,children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("div",{className:`w-8 h-8 rounded-xl border flex items-center justify-center shadow-sm ${u?"bg-zinc-100 border-zinc-200 text-zinc-800":"bg-white/[0.08] border-white/15 text-zinc-200"}`,children:m.jsx(Tg,{className:"w-3.5 h-3.5"})}),m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("h2",{className:"text-xs font-display uppercase tracking-widest font-bold",children:"Studio"}),m.jsx("span",{className:`text-[9px] font-mono font-medium px-2 py-0.5 rounded-full border ${u?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-emerald-500/15 text-emerald-300 border-emerald-400/30"}`,children:"Live"})]}),m.jsx("p",{className:`text-[10px] font-sans ${u?"text-zinc-500":"text-zinc-400"}`,children:"Sanctuary customization"})]})]}),m.jsxs("div",{className:"flex items-center gap-1.5",children:[m.jsx("button",{type:"button",onClick:p,"aria-label":"Reset to default settings",title:"Reset to Defaults",className:`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${u?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.06] hover:bg-white/[0.12] text-zinc-400 hover:text-white"}`,children:m.jsx(Wr,{className:"w-3.5 h-3.5"})}),m.jsx("button",{type:"button",onClick:e,"aria-label":"Close Studio",className:`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${u?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.06] hover:bg-white/[0.12] text-zinc-400 hover:text-white"}`,children:m.jsx(pr,{className:"w-4 h-4"})})]})]}),m.jsx("div",{className:`p-2.5 border-b shrink-0 ${u?"border-zinc-200/90 bg-zinc-50/70":"border-white/[0.06] bg-black/25"}`,children:m.jsx("div",{className:`grid grid-cols-3 gap-1.5 p-1 rounded-2xl ${u?"bg-zinc-200/60":"bg-white/[0.04]"}`,children:[{id:"realms",label:"Realms",desc:"1-Tap Themes",icon:_s},{id:"cosmos",label:"Cosmos",desc:"Planet & Waves",icon:ac},{id:"timepiece",label:"Timepiece",desc:"Clock Style",icon:Nf}].map(g=>{const v=g.icon,_=h===g.id;return m.jsxs("button",{type:"button",onClick:()=>d(g.id),className:`flex items-center justify-center gap-2 py-2 px-2 rounded-xl text-xs font-sans font-medium transition-all cursor-pointer ${_?u?"bg-white text-zinc-950 font-bold shadow-sm":"bg-white text-zinc-950 font-bold shadow-[0_2px_12px_rgba(255,255,255,0.18)]":u?"hover:bg-white/60 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.06] text-zinc-400 hover:text-white"}`,children:[m.jsx(v,{className:"w-3.5 h-3.5 shrink-0"}),m.jsx("span",{children:g.label})]},g.id)})})}),m.jsxs("div",{className:"flex-1 overflow-y-auto p-5 space-y-6",children:[h==="realms"&&m.jsxs("div",{className:"space-y-4 animate-fadeIn",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold ${u?"text-zinc-700":"text-zinc-300"}`,children:"Curated Aesthetic Realms"}),m.jsx("span",{className:`text-[10px] font-mono ${u?"text-zinc-500":"text-zinc-400"}`,children:"Instant Harmony"})]}),m.jsx("div",{className:"grid grid-cols-1 gap-2",children:Nw.map(g=>{const v=t.palette===g.settings.palette&&t.celestialBody===g.settings.celestialBody;return m.jsxs("button",{type:"button",onClick:()=>r(g.settings),className:`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between group ${v?u?"bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900 shadow-md":"bg-white/[0.08] border-white/40 shadow-lg":u?"bg-white hover:bg-zinc-50 border-zinc-200/90":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08]"}`,children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("div",{className:"w-10 h-10 rounded-xl border border-white/20 shrink-0 shadow-sm flex items-center justify-center overflow-hidden",style:{background:`linear-gradient(135deg, ${g.gradient.join(", ")})`},children:v&&m.jsx(hr,{className:"w-4 h-4 text-white drop-shadow-md stroke-[3]"})}),m.jsxs("div",{children:[m.jsx("div",{className:`text-xs font-display font-bold ${v?u?"text-zinc-950 font-bold":"text-white":u?"text-zinc-800":"text-zinc-200"}`,children:g.name}),m.jsx("div",{className:`text-[10px] font-sans ${u?"text-zinc-500":"text-zinc-400"}`,children:g.tagline})]})]}),m.jsx("div",{className:"flex items-center gap-1 shrink-0 pl-2",children:g.gradient.map((_,b)=>m.jsx("div",{className:"w-2.5 h-2.5 rounded-full border border-black/20",style:{backgroundColor:_}},b))})]},g.id)})})]}),h==="cosmos"&&m.jsxs("div",{className:"space-y-5 animate-fadeIn",children:[m.jsxs("div",{className:"space-y-2",children:[m.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${u?"text-zinc-700":"text-zinc-300"}`,children:"3D Celestial Object"}),m.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:[{id:"crescent-moon",label:"Crescent Moon"},{id:"ringed-planet",label:"Saturn Rings"},{id:"blood-moon",label:"Blood Moon"},{id:"pulsar-star",label:"Pulsar Star"},{id:"eclipse-corona",label:"Eclipse Corona"},{id:"none",label:"No Planet (Pure Waves)"}].map(g=>{const v=t.celestialBody===g.id;return m.jsxs("button",{type:"button",onClick:()=>r({celestialBody:g.id}),className:`p-2.5 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer flex items-center justify-between ${v?u?"bg-zinc-900 text-white font-semibold":"bg-white text-zinc-950 font-semibold shadow-sm":u?"bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300"}`,children:[m.jsx("span",{className:"truncate",children:g.label}),v&&m.jsx(hr,{className:"w-3.5 h-3.5 shrink-0 ml-1"})]},g.id)})})]}),m.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[m.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${u?"text-zinc-700":"text-zinc-300"}`,children:"Atmospheric Palette"}),m.jsx("div",{className:"grid grid-cols-2 gap-2",children:Pw.map(g=>{const v=t.palette===g.id;return m.jsxs("button",{type:"button",onClick:()=>r({palette:g.id}),className:`p-2 rounded-xl border text-left transition-all cursor-pointer flex flex-col gap-1.5 ${v?u?"bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900 shadow-sm":"bg-white/[0.08] border-white/40 shadow-sm":u?"bg-white hover:bg-zinc-50 border-zinc-200":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]"}`,children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("span",{className:`text-[11px] font-semibold ${v?u?"text-zinc-950":"text-white":u?"text-zinc-700":"text-zinc-300"}`,children:g.name}),v&&m.jsx(hr,{className:"w-3 h-3 text-emerald-400"})]}),m.jsx("div",{className:"flex items-center gap-1",children:g.previewColors.map((_,b)=>m.jsx("span",{className:"w-3 h-3 rounded-full border border-black/20",style:{backgroundColor:_}},b))})]},g.id)})})]}),m.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[m.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${u?"text-zinc-700":"text-zinc-300"}`,children:"Wave Topography"}),m.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{id:"dunes",label:"Cosmic Dunes"},{id:"aurora",label:"Aurora Ribbon"},{id:"mountains",label:"Ridge Peaks"},{id:"ocean",label:"Ocean Swell"}].map(g=>{const v=t.waveGeometry===g.id;return m.jsx("button",{type:"button",onClick:()=>r({waveGeometry:g.id}),className:`p-2.5 rounded-xl border text-center text-xs font-medium transition-all cursor-pointer ${v?u?"bg-zinc-900 text-white font-semibold":"bg-white text-zinc-950 font-semibold shadow-sm":u?"bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300"}`,children:g.label},g.id)})})]}),m.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[m.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${u?"text-zinc-700":"text-zinc-300"}`,children:"Motion Speed"}),m.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:[{id:"calm",label:"Calm Drift"},{id:"balanced",label:"Balanced"},{id:"dynamic",label:"Dynamic"}].map(g=>{const v=t.speed===g.id;return m.jsx("button",{type:"button",onClick:()=>r({speed:g.id}),className:`p-2 rounded-xl border text-center text-xs font-medium transition-all cursor-pointer ${v?u?"bg-zinc-900 text-white font-semibold":"bg-white text-zinc-950 font-semibold shadow-sm":u?"bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300"}`,children:g.label},g.id)})})]}),m.jsx("div",{className:"pt-2 border-t border-white/[0.06]",children:m.jsxs("button",{type:"button",onClick:l,className:`w-full p-2.5 rounded-xl border text-xs font-medium transition-all cursor-pointer flex items-center justify-center gap-2 ${u?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-white"}`,children:[u?m.jsx(ac,{className:"w-4 h-4 text-zinc-700"}):m.jsx(Pg,{className:"w-4 h-4 text-amber-300"}),m.jsxs("span",{children:["Switch to ",u?"Obsidian Dark":"Creamy Light"," Theme"]})]})})]}),h==="timepiece"&&m.jsxs("div",{className:"space-y-5 animate-fadeIn",children:[m.jsxs("div",{className:"space-y-2",children:[m.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${u?"text-zinc-700":"text-zinc-300"}`,children:"Clock Typography Face"}),m.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{id:"tabular",label:"Tabular Modern",preview:"12:00"},{id:"serif",label:"Editorial Luxury",preview:"12:00"},{id:"mono",label:"Tech Monospace",preview:"12:00"},{id:"minimal",label:"Minimalist Light",preview:"12:00"}].map(g=>{const v=t.clockFontStyle===g.id;return m.jsxs("button",{type:"button",onClick:()=>r({clockFontStyle:g.id}),className:`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${v?u?"bg-zinc-900 text-white font-semibold":"bg-white text-zinc-950 font-semibold shadow-sm":u?"bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300"}`,children:[m.jsx("span",{className:"text-xs",children:g.label}),v&&m.jsx(hr,{className:"w-3.5 h-3.5"})]},g.id)})})]}),m.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[m.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${u?"text-zinc-700":"text-zinc-300"}`,children:"Dial Accent Tint"}),m.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{id:"palette",label:"Palette Match",dot:"#a855f7"},{id:"white",label:"Pure White",dot:"#ffffff"},{id:"gold",label:"Stardust Gold",dot:"#fbbf24"},{id:"cyan",label:"Cyber Cyan",dot:"#22d3ee"},{id:"rose",label:"Rose Quartz",dot:"#f43f5e"}].map(g=>{const v=t.clockColor===g.id;return m.jsxs("button",{type:"button",onClick:()=>r({clockColor:g.id}),className:`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${v?u?"bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900":"bg-white/[0.08] border-white/40":u?"bg-white hover:bg-zinc-50 border-zinc-200":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]"}`,children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("span",{className:"w-3 h-3 rounded-full border border-black/20",style:{backgroundColor:g.dot}}),m.jsx("span",{className:`text-xs ${v?"font-bold":""}`,children:g.label})]}),v&&m.jsx(hr,{className:"w-3.5 h-3.5 text-emerald-400"})]},g.id)})})]}),m.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[m.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${u?"text-zinc-700":"text-zinc-300"}`,children:"Display Options"}),m.jsxs("div",{className:"space-y-2",children:[m.jsxs("div",{className:`p-3 rounded-xl border flex items-center justify-between ${u?"bg-white border-zinc-200":"bg-white/[0.03] border-white/[0.06]"}`,children:[m.jsxs("div",{children:[m.jsx("div",{className:"text-xs font-semibold",children:"Orbital Seconds Capsule"}),m.jsx("div",{className:`text-[10px] ${u?"text-zinc-500":"text-zinc-400"}`,children:"Show live orbiting seconds gauge"})]}),m.jsx("button",{type:"button",onClick:()=>r({showSeconds:!t.showSeconds}),className:`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${t.showSeconds?"bg-violet-600":u?"bg-zinc-300":"bg-white/20"}`,children:m.jsx("span",{className:`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${t.showSeconds?"left-6":"left-1"}`})})]}),m.jsxs("div",{className:`p-3 rounded-xl border flex items-center justify-between ${u?"bg-white border-zinc-200":"bg-white/[0.03] border-white/[0.06]"}`,children:[m.jsxs("div",{children:[m.jsx("div",{className:"text-xs font-semibold",children:"Breathing Atmospheric Aura"}),m.jsx("div",{className:`text-[10px] ${u?"text-zinc-500":"text-zinc-400"}`,children:"Ambient radial glow behind timepiece"})]}),m.jsx("button",{type:"button",onClick:()=>r({clockHalo:t.clockHalo==="none"?"pulsar":"none"}),className:`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${t.clockHalo!=="none"?"bg-violet-600":u?"bg-zinc-300":"bg-white/20"}`,children:m.jsx("span",{className:`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${t.clockHalo!=="none"?"left-6":"left-1"}`})})]})]})]})]})]})]})]})},ao=({className:s="w-4 h-4"})=>m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:s,"aria-hidden":"true",children:m.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})}),Gg=({isPlaying:s,color:e="#a855f7",className:t="w-16 h-5",barCount:r=10})=>{const o=Me.useRef(null);return Me.useEffect(()=>{const l=o.current;if(!l)return;const u=l.getContext("2d");if(!u)return;let h;const d=gs.getAnalyser(),p=d?new Uint8Array(d.frequencyBinCount):null,g=()=>{if(u.clearRect(0,0,l.width,l.height),s&&d&&p){d.getByteFrequencyData(p);const v=l.width,_=l.height,b=2,w=b*(r-1),A=Math.max(2,(v-w)/r);for(let y=0;y<r;y++){const S=Math.min(p.length-1,Math.floor(y*(p.length/r)*.7)),R=p[S]/255,O=Math.max(3,R*(_-2)),D=y*(A+b),F=_-O;u.fillStyle=e,u.beginPath(),u.roundRect(D,F,A,O,1.5),u.fill()}}else{const v=l.width,_=l.height,b=2,w=b*(r-1),A=Math.max(2,(v-w)/r);for(let y=0;y<r;y++){const S=y*(A+b),R=_-2.5;u.fillStyle="rgba(255, 255, 255, 0.2)",u.beginPath(),u.roundRect(S,R,A,2.5,1),u.fill()}}h=requestAnimationFrame(g)};return g(),()=>{cancelAnimationFrame(h)}},[s,e,r]),m.jsx("canvas",{ref:o,width:64,height:20,className:t,"aria-hidden":"true"})},Lw=({isOpen:s,onClose:e})=>{const{appTheme:t,audioSource:r,isAudioPlaying:o,activeSoundscapeId:l,audioVolume:u,isAudioMuted:h,playSoundscape:d,stopSoundscape:p,setAudioVolume:g,toggleAudioMute:v,isYouTubePlaying:_,activeYouTubeItem:b,youtubeVolume:w,isYouTubeMuted:A,savedYouTubeItems:y,showYouTubePreview:S,setShowYouTubePreview:R,playYouTubeItem:O,toggleYouTubePlay:D,stopYouTube:F,nextYouTubeTrack:L,prevYouTubeTrack:M,setYouTubeVolume:N,toggleYouTubeMute:J,addYouTubeToLibrary:$,removeYouTubeFromLibrary:j}=Zr(),B=t==="light",[k,V]=Me.useState(r||"youtube"),[H,se]=Me.useState(""),[ee,Y]=Me.useState(""),[G,X]=Me.useState(null),[P,K]=Me.useState(null),[be,z]=Me.useState(null),[xe,Se]=Me.useState(null);if(Me.useEffect(()=>{if(!be){Se(null);return}Se(be*60);const we=setInterval(()=>{Se(Ie=>Ie===null||Ie<=1?(p(),F(),z(null),null):Ie-1)},1e3);return()=>clearInterval(we)},[be,p,F]),Me.useEffect(()=>{const we=Ie=>{Ie.key==="Escape"&&s&&e()};return window.addEventListener("keydown",we),()=>window.removeEventListener("keydown",we)},[s,e]),!s)return null;const Ne=ca.find(we=>we.id===l)||ca[0],ve=we=>{const Ie=Math.floor(we/60),He=we%60;return`${Ie}:${He.toString().padStart(2,"0")}`},Ue=we=>{if(we.preventDefault(),X(null),K(null),!H.trim()){X("Please enter a YouTube video or playlist link.");return}const Ie=$(H.trim(),ee.trim()||void 0);if(!Ie.success||!Ie.item){X(Ie.error||"Failed to parse YouTube link.");return}O(Ie.item),se(""),Y(""),K(`Playing: ${Ie.item.title}`),setTimeout(()=>K(null),4e3)},at=k==="youtube"?b?b.title:"No YouTube stream selected":Ne.title,Be=k==="youtube"?_:o;return m.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 backdrop-blur-xl animate-fadeIn select-none ${B?"bg-black/45":"bg-black/85"}`,role:"dialog","aria-modal":"true","aria-labelledby":"audio-modal-title",children:[m.jsx("div",{className:"fixed inset-0",onClick:e,"aria-hidden":"true"}),m.jsxs("div",{className:`relative z-10 w-full max-w-2xl border rounded-3xl shadow-[0_20px_70px_rgba(0,0,0,0.85)] flex flex-col max-h-[90vh] overflow-hidden ${B?"bg-white/95 border-zinc-200 text-zinc-900 shadow-2xl":"bg-[#0b0d1e] border-white/[0.12] text-white shadow-2xl"}`,children:[m.jsxs("div",{className:`flex items-center justify-between px-6 py-4 border-b shrink-0 ${B?"border-zinc-200 bg-zinc-50/80":"border-white/[0.08] bg-white/[0.02]"}`,children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("div",{className:`w-9 h-9 rounded-2xl border flex items-center justify-center ${B?"bg-rose-50 border-rose-200 text-red-600":"bg-red-500/20 border-red-400/40 text-red-400"}`,children:m.jsx(sc,{className:"w-5 h-5"})}),m.jsxs("div",{children:[m.jsxs("h2",{id:"audio-modal-title",className:`text-sm sm:text-base font-display font-semibold tracking-wide flex items-center gap-2 ${B?"text-zinc-900":"text-white"}`,children:["Focus Audio Sanctuary",m.jsx("span",{className:`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border ${k==="youtube"?B?"bg-red-50 text-red-700 border-red-200":"bg-red-500/15 text-red-300 border-red-500/30":B?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-emerald-500/15 text-emerald-300 border-emerald-500/30"}`,children:k==="youtube"?"YouTube Online • Infinite Audio":"Web Audio • Offline"})]}),m.jsx("p",{className:`text-xs font-sans mt-0.5 ${B?"text-zinc-500":"text-zinc-400"}`,children:k==="youtube"?"Paste any YouTube video or playlist link or choose curated study streams":"Procedurally synthesized ambient soundscapes. Zero network required."})]})]}),m.jsx("button",{type:"button",onClick:e,className:`w-8 h-8 rounded-xl flex items-center justify-center transition-colors cursor-pointer border ${B?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600 border-zinc-200":"bg-white/[0.05] hover:bg-white/[0.12] text-zinc-400 hover:text-white border-white/[0.08]"}`,"aria-label":"Close sound sanctuary",children:m.jsx(pr,{className:"w-4 h-4"})})]}),m.jsxs("div",{className:`flex items-center gap-2 px-6 pt-3 border-b shrink-0 ${B?"border-zinc-200 bg-zinc-50/50":"border-white/[0.06] bg-black/20"}`,children:[m.jsxs("button",{type:"button",onClick:()=>V("youtube"),className:`flex items-center gap-2 px-4 py-2.5 text-xs font-display font-semibold border-b-2 transition-all cursor-pointer ${k==="youtube"?B?"border-red-600 text-red-700":"border-red-500 text-white":B?"border-transparent text-zinc-500 hover:text-zinc-900":"border-transparent text-zinc-400 hover:text-zinc-200"}`,children:[m.jsx(ao,{className:"w-4 h-4 text-red-500"}),m.jsx("span",{children:"YouTube Audio & Playlists"})]}),m.jsxs("button",{type:"button",onClick:()=>V("ambient"),className:`flex items-center gap-2 px-4 py-2.5 text-xs font-display font-semibold border-b-2 transition-all cursor-pointer ${k==="ambient"?B?"border-violet-600 text-violet-700":"border-violet-400 text-white":B?"border-transparent text-zinc-500 hover:text-zinc-900":"border-transparent text-zinc-400 hover:text-zinc-200"}`,children:[m.jsx(r0,{className:"w-4 h-4 text-violet-500"}),m.jsx("span",{children:"Procedural Soundscapes (Offline)"})]})]}),k==="youtube"&&m.jsxs("div",{className:"flex-1 overflow-y-auto p-5 sm:p-6 space-y-5 animate-fadeIn",children:[m.jsxs("form",{onSubmit:Ue,className:"space-y-2",children:[m.jsxs("div",{className:"flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold",children:[m.jsx("span",{className:B?"text-zinc-800":"text-zinc-300",children:"Play YouTube Link or Playlist"}),m.jsx("span",{className:`text-[10px] font-sans font-normal ${B?"text-zinc-500":"text-zinc-400"}`,children:"Supports videos, live streams & playlists"})]}),m.jsxs("div",{className:"flex flex-col sm:flex-row gap-2",children:[m.jsx("input",{type:"text",placeholder:"Paste YouTube link (e.g. https://www.youtube.com/watch?v=... or playlist?list=...)",value:H,onChange:we=>{se(we.target.value),G&&X(null)},className:`flex-1 px-3.5 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-2 ${B?"bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:ring-red-500/20 focus:border-red-500":"bg-white/[0.04] border-white/[0.1] text-white placeholder-zinc-500 focus:ring-red-400/30 focus:border-red-400"}`}),m.jsxs("button",{type:"submit",className:"px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-display font-semibold flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer shrink-0",children:[m.jsx(Zl,{className:"w-4 h-4"}),m.jsx("span",{children:"Load & Play"})]})]}),G&&m.jsxs("div",{className:"flex items-center gap-2 p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-sans",children:[m.jsx(ig,{className:"w-4 h-4 shrink-0"}),m.jsx("span",{children:G})]}),P&&m.jsxs("div",{className:"flex items-center gap-2 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-sans",children:[m.jsx(_s,{className:"w-4 h-4 shrink-0"}),m.jsx("span",{children:P})]})]}),b&&m.jsxs("div",{className:`p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${B?"bg-red-50/70 border-red-200 text-zinc-900 shadow-sm":"bg-red-950/20 border-red-500/30 text-white"}`,children:[m.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[m.jsxs("div",{className:"w-12 h-12 rounded-xl overflow-hidden bg-black/40 shrink-0 border border-white/10 relative",children:[m.jsx("img",{src:b.thumbnailUrl||Jl[0].thumbnailUrl,alt:"",className:"w-full h-full object-cover"}),_&&m.jsx("div",{className:"absolute inset-0 bg-black/35 flex items-center justify-center",children:m.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"})})]}),m.jsxs("div",{className:"min-w-0",children:[m.jsx("div",{className:"flex items-center gap-1.5",children:m.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-red-600 font-bold",children:b.type==="playlist"?"PLAYLIST":"NOW STREAMING"})}),m.jsx("h3",{className:`text-xs sm:text-sm font-display font-semibold truncate ${B?"text-zinc-900":"text-white"}`,children:b.title}),m.jsx("p",{className:`text-[11px] font-sans truncate ${B?"text-zinc-600":"text-zinc-400"}`,children:b.channel||"YouTube"})]})]}),m.jsxs("div",{className:"flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end",children:[b.type==="playlist"&&m.jsxs(m.Fragment,{children:[m.jsx("button",{type:"button",onClick:M,className:`p-2 rounded-xl border transition-colors cursor-pointer ${B?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-white"}`,title:"Previous Track in Playlist",children:m.jsx(df,{className:"w-3.5 h-3.5"})}),m.jsx("button",{type:"button",onClick:L,className:`p-2 rounded-xl border transition-colors cursor-pointer ${B?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-white"}`,title:"Next Track in Playlist",children:m.jsx(ff,{className:"w-3.5 h-3.5"})})]}),m.jsxs("button",{type:"button",onClick:()=>{try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}},className:"px-2.5 py-1.5 rounded-xl border border-emerald-500/40 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-sans font-bold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer",title:"Force Unmute & Max Volume",children:[m.jsx(hf,{className:"w-3.5 h-3.5"}),m.jsx("span",{children:"Unmute"})]}),m.jsxs("button",{type:"button",onClick:()=>R(!S),className:`px-3 py-1.5 rounded-xl border text-xs font-sans flex items-center gap-1.5 transition-colors cursor-pointer ${S?"bg-red-600 text-white border-red-600 font-medium":B?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-zinc-300"}`,title:"Toggle Floating Video Preview",children:[m.jsx(Cw,{className:"w-3.5 h-3.5"}),m.jsx("span",{children:S?"Hide Video":"View Video"})]})]})]}),m.jsxs("div",{className:"space-y-2.5",children:[m.jsxs("div",{className:`flex items-center gap-2 text-xs font-display uppercase tracking-wider font-semibold ${B?"text-zinc-800":"text-zinc-300"}`,children:[m.jsx(_s,{className:"w-3.5 h-3.5 text-amber-500"}),m.jsx("span",{children:"Curated Focus & Lo-Fi Streams"})]}),m.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:Jl.map(we=>{const Ie=(b==null?void 0:b.id)===we.id||(b==null?void 0:b.videoId)===we.videoId&&we.videoId,He=Ie&&_;return m.jsxs("button",{type:"button",onClick:()=>{He?D():O(we)},className:`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${Ie?B?"bg-red-50 border-red-500 ring-2 ring-red-500/20 shadow-sm":"bg-red-500/15 border-red-400 shadow-[0_0_20px_rgba(239,68,68,0.2)]":B?"bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90 text-zinc-900":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]"}`,children:[m.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[m.jsx("div",{className:"w-9 h-9 rounded-xl overflow-hidden bg-black/40 shrink-0 border border-white/10",children:m.jsx("img",{src:we.thumbnailUrl,alt:"",onError:xt=>{xt.currentTarget.src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=400&auto=format&fit=crop"},className:"w-full h-full object-cover"})}),m.jsxs("div",{className:"min-w-0",children:[m.jsx("div",{className:`text-xs font-display font-semibold truncate ${Ie?B?"text-red-950 font-bold":"text-white":B?"text-zinc-900":"text-zinc-200"}`,children:we.title}),m.jsx("div",{className:`text-[10px] font-sans truncate ${B?"text-zinc-500":"text-zinc-400"}`,children:we.channel})]})]}),m.jsx("div",{className:`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${He?"bg-red-600 text-white shadow-sm":B?"bg-zinc-200 text-zinc-700":"bg-white/10 text-white"}`,children:He?m.jsx($r,{className:"w-3.5 h-3.5 fill-current"}):m.jsx(Yr,{className:"w-3.5 h-3.5 ml-0.5 fill-current"})})]},we.id)})})]}),y.filter(we=>!we.isCurated).length>0&&m.jsxs("div",{className:"space-y-2.5",children:[m.jsx("div",{className:`flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold ${B?"text-zinc-800":"text-zinc-300"}`,children:m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(n0,{className:"w-3.5 h-3.5 text-red-500"}),m.jsx("span",{children:"My Saved YouTube Library"})]})}),m.jsx("div",{className:"space-y-2",children:y.filter(we=>!we.isCurated).map(we=>{const Ie=(b==null?void 0:b.id)===we.id,He=Ie&&_;return m.jsxs("div",{className:`p-3 rounded-2xl border flex items-center justify-between gap-3 transition-all ${Ie?B?"bg-red-50 border-red-500 ring-2 ring-red-500/20":"bg-red-500/15 border-red-400":B?"bg-zinc-50 border-zinc-200":"bg-white/[0.03] border-white/[0.06]"}`,children:[m.jsxs("div",{onClick:()=>O(we),className:"flex items-center gap-3 min-w-0 flex-1 cursor-pointer",children:[m.jsx("div",{className:`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${we.type==="playlist"?"bg-purple-600/20 text-purple-400":"bg-red-600/20 text-red-400"}`,children:we.type==="playlist"?m.jsx(n0,{className:"w-4 h-4"}):m.jsx(ao,{className:"w-4 h-4"})}),m.jsxs("div",{className:"min-w-0",children:[m.jsx("div",{className:`text-xs font-display font-semibold truncate ${B?"text-zinc-900":"text-white"}`,children:we.title}),m.jsxs("div",{className:`text-[10px] font-sans truncate ${B?"text-zinc-500":"text-zinc-400"}`,children:[we.type==="playlist"?"Playlist":"Single Stream"," • ",we.url]})]})]}),m.jsxs("div",{className:"flex items-center gap-1.5 shrink-0",children:[m.jsx("button",{type:"button",onClick:()=>{He?D():O(we)},className:`p-2 rounded-xl transition-colors cursor-pointer ${He?"bg-red-600 text-white":B?"bg-zinc-200 text-zinc-800 hover:bg-zinc-300":"bg-white/10 text-white hover:bg-white/20"}`,children:He?m.jsx($r,{className:"w-3.5 h-3.5 fill-current"}):m.jsx(Yr,{className:"w-3.5 h-3.5 fill-current"})}),m.jsx("button",{type:"button",onClick:()=>j(we.id),className:`p-2 rounded-xl transition-colors cursor-pointer ${B?"text-zinc-400 hover:text-red-600":"text-zinc-500 hover:text-red-400"}`,title:"Remove from library",children:m.jsx(oc,{className:"w-3.5 h-3.5"})})]})]},we.id)})})]})]}),k==="ambient"&&m.jsx("div",{className:"flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 animate-fadeIn",children:m.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3.5",children:ca.map(we=>{const Ie=l===we.id,He=Ie&&o;return m.jsxs("div",{onClick:()=>{He?p():d(we.id)},className:`relative p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between select-none group ${Ie?B?"bg-violet-50 border-violet-500 ring-2 ring-violet-500/20 shadow-sm":"bg-violet-950/35 border-violet-500/50 shadow-[0_0_25px_rgba(168,85,247,0.18)]":B?"bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90 text-zinc-900":"bg-white/[0.025] hover:bg-white/[0.05] border-white/[0.08] hover:border-white/[0.18]"}`,children:[m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center justify-between mb-2",children:[m.jsx("span",{className:`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md border ${B?"bg-zinc-200/60 text-zinc-700 border-zinc-300":"text-zinc-400 bg-white/[0.05] border-white/[0.06]"}`,children:we.category}),m.jsx("div",{className:`w-7 h-7 rounded-full flex items-center justify-center transition-all ${He?"bg-violet-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.6)]":B?"bg-zinc-200 text-zinc-700 group-hover:bg-zinc-300":"bg-white/[0.06] text-zinc-300 group-hover:bg-white/[0.15] group-hover:text-white"}`,children:He?m.jsx($r,{className:"w-3.5 h-3.5 fill-current"}):m.jsx(Yr,{className:"w-3.5 h-3.5 ml-0.5 fill-current"})})]}),m.jsx("h3",{className:`text-sm font-display font-semibold tracking-wide transition-colors ${B?"text-zinc-900":"text-white"}`,children:we.title}),m.jsx("p",{className:`text-xs font-sans mt-1 leading-snug line-clamp-2 ${B?"text-zinc-600":"text-zinc-400"}`,children:we.tagline})]}),m.jsxs("div",{className:`mt-3 pt-2.5 border-t flex items-center justify-between text-[10px] font-mono ${B?"border-zinc-200 text-zinc-500":"border-white/[0.06] text-zinc-400"}`,children:[m.jsx("span",{className:"truncate pr-2",children:we.frequency}),He&&m.jsxs("span",{className:"flex items-center gap-1 text-emerald-500 font-semibold shrink-0",children:[m.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"}),"PLAYING"]})]})]},we.id)})})}),m.jsxs("div",{className:`px-5 py-3 border-t flex flex-wrap items-center justify-between gap-3 shrink-0 ${B?"border-zinc-200 bg-zinc-50/60":"border-white/[0.06] bg-white/[0.01]"}`,children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(Nf,{className:`w-4 h-4 ${B?"text-zinc-600":"text-violet-400"}`}),m.jsx("span",{className:`text-xs font-display font-medium ${B?"text-zinc-800":"text-zinc-300"}`,children:"Auto-Stop Timer:"}),xe!==null&&m.jsxs("span",{className:`text-xs font-mono font-bold px-2 py-0.5 rounded-md border ${B?"bg-amber-100 text-amber-900 border-amber-300":"text-amber-300 bg-amber-500/15 border-amber-500/30"}`,children:[ve(xe)," left"]})]}),m.jsx("div",{className:"flex items-center gap-1.5",children:[{label:"Off",val:null},{label:"15m",val:15},{label:"25m",val:25},{label:"45m",val:45},{label:"60m",val:60}].map(we=>m.jsx("button",{type:"button",onClick:()=>z(we.val),className:`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${be===we.val?B?"bg-zinc-900 text-white font-bold shadow-sm":"bg-violet-600 text-white font-bold shadow-sm":B?"bg-zinc-200/80 text-zinc-700 hover:bg-zinc-300":"bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08]"}`,children:we.label},we.label))})]}),m.jsxs("div",{className:`p-4 sm:p-5 border-t flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 ${B?"border-zinc-200 bg-zinc-100/90":"border-white/[0.08] bg-[#070914]/90 backdrop-blur-xl"}`,children:[m.jsxs("div",{className:"flex items-center gap-3 w-full sm:w-auto",children:[m.jsx("div",{className:`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${k==="youtube"?B?"bg-red-50 border-red-200 text-red-600":"bg-red-500/20 border-red-400/40 text-red-300":B?"bg-violet-50 border-violet-200 text-violet-700":"bg-violet-600/30 border-violet-400/40 text-violet-200"}`,children:k==="youtube"?m.jsx(ao,{className:`w-5 h-5 ${_?"animate-pulse text-red-500":"text-zinc-400"}`}):m.jsx(r0,{className:`w-5 h-5 ${o?"text-violet-500 animate-pulse":"text-zinc-400"}`})}),m.jsxs("div",{className:"min-w-0 flex-1",children:[m.jsx("p",{className:`text-xs font-display font-medium truncate ${B?"text-zinc-900":"text-white"}`,children:at}),m.jsxs("div",{className:"flex items-center gap-2 mt-0.5",children:[m.jsx(Gg,{isPlaying:Be,color:k==="youtube"?"#ef4444":B?"#7c3aed":Ne.accentColor,className:"w-16 h-4"}),m.jsx("span",{className:`text-[10px] font-mono ${B?"text-zinc-500":"text-zinc-400"}`,children:Be?k==="youtube"?"Streaming YouTube...":"Synthesizing...":"Audio Paused"})]})]})]}),m.jsxs("div",{className:"flex items-center gap-4 w-full sm:w-auto justify-end",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("button",{type:"button",onClick:k==="youtube"?J:v,className:`transition-colors cursor-pointer ${B?"text-zinc-600 hover:text-black":"text-zinc-400 hover:text-white"}`,title:"Toggle Mute",children:(k==="youtube"?A:h)?m.jsx(Bg,{className:"w-4 h-4 text-red-500"}):m.jsx(hf,{className:"w-4 h-4"})}),m.jsx("input",{type:"range",min:"0",max:k==="youtube"?100:1,step:k==="youtube"?1:.01,value:k==="youtube"?A?0:w:h?0:u,onChange:we=>{const Ie=parseFloat(we.target.value);if(k==="youtube"){N(Ie),A&&J();try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}}else g(Ie)},className:"w-20 sm:w-24 h-1.5 bg-zinc-300 rounded-lg appearance-none cursor-pointer accent-red-600","aria-label":"Volume slider"}),m.jsx("span",{className:`text-[10px] font-mono w-8 tabular-nums ${B?"text-zinc-600":"text-zinc-400"}`,children:k==="youtube"?`${A?0:Math.round(w)}%`:`${h?0:Math.round(u*100)}%`})]}),m.jsx("button",{type:"button",onClick:()=>{k==="youtube"?D():o?p():d(l)},className:`px-5 py-2.5 rounded-xl text-white text-xs font-display font-semibold tracking-wider uppercase flex items-center gap-2 shadow-md transition-all cursor-pointer ${k==="youtube"?"bg-red-600 hover:bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.35)]":"bg-violet-600 hover:bg-violet-500 shadow-[0_0_20px_rgba(147,51,234,0.35)]"}`,children:Be?m.jsxs(m.Fragment,{children:[m.jsx($r,{className:"w-3.5 h-3.5 fill-current"}),m.jsx("span",{children:"Pause"})]}):m.jsxs(m.Fragment,{children:[m.jsx(Yr,{className:"w-3.5 h-3.5 fill-current"}),m.jsx("span",{children:"Play"})]})})]})]})]})]})},Iw=({isOpen:s,onClose:e})=>{const{profile:t,updateProfile:r,appTheme:o,setStudySubject:l,lastActiveDate:u,resetDayProgress:h,factoryReset:d}=Zr(),p=o==="light",[g,v]=Me.useState(t.name||"Azan"),[_,b]=Me.useState(t.motto||"Remember, you are here for you."),[w,A]=Me.useState(t.defaultFocusTopic||"Engineering"),[y,S]=Me.useState(t.defaultFocusMode||"Deep Work"),[R,O]=Me.useState(!1),[D,F]=Me.useState(null);if(Me.useEffect(()=>{v(t.name||"Azan"),b(t.motto||"Remember, you are here for you."),A(t.defaultFocusTopic||"Engineering"),S(t.defaultFocusMode||"Deep Work")},[t,s]),Me.useEffect(()=>{const j=B=>{B.key==="Escape"&&s&&e()};return window.addEventListener("keydown",j),()=>window.removeEventListener("keydown",j)},[s,e]),!s)return null;const L=j=>{j.preventDefault();const B=g.trim()||"Azan",k=_.trim()||"Remember, you are here for you.",V=w.trim()||"Engineering",H=y.trim()||"Deep Work";r({name:B,motto:k,defaultFocusTopic:V,defaultFocusMode:H}),l(V),O(!0),setTimeout(()=>{O(!1),e()},500)},M=()=>{v("Azan"),b("Remember, you are here for you."),A("Engineering"),S("Deep Work"),r({name:"Azan",motto:"Remember, you are here for you.",defaultFocusTopic:"Engineering",defaultFocusMode:"Deep Work"}),l("Engineering")},N=()=>{window.confirm("Start a fresh day? This will uncheck today's tasks & habits, reset hydration to 0%, and reset focus timer.")&&(h(),F("Today's progress has been reset!"),setTimeout(()=>F(null),3e3))},J=()=>{window.confirm("WARNING: Are you sure you want to perform a factory reset? All saved tasks, habits, focus history, and settings will be permanently wiped and restored to default.")&&(d(),F("All app data restored to factory defaults."),setTimeout(()=>{F(null),e()},1500))},$=()=>{const j=new Date().getHours();return j>=5&&j<12?"Good morning":j>=12&&j<17?"Good afternoon":j>=17&&j<22?"Good evening":"Late night focus"};return m.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-fadeIn select-none ${p?"bg-black/35":"bg-black/80"}`,children:[m.jsx("div",{className:"fixed inset-0",onClick:e,"aria-hidden":"true"}),m.jsxs("div",{role:"dialog","aria-modal":"true","aria-labelledby":"profile-modal-title",className:`relative w-full max-w-lg overflow-hidden rounded-3xl border shadow-2xl flex flex-col z-10 ${p?"bg-white/95 border-zinc-200 text-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)]":"cosmic-card border-white/[0.14] text-white shadow-2xl"}`,children:[m.jsxs("div",{className:`flex items-center justify-between p-5 pb-3 border-b shrink-0 ${p?"border-zinc-200":"border-white/[0.08]"}`,children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("div",{className:`w-8 h-8 rounded-xl border flex items-center justify-center ${p?"bg-amber-50 border-amber-200 text-amber-700":"bg-amber-500/20 border-amber-400/30 text-amber-300"}`,children:m.jsx(Fg,{className:"w-4 h-4"})}),m.jsxs("div",{children:[m.jsx("h2",{id:"profile-modal-title",className:`text-sm font-display uppercase tracking-widest font-bold ${p?"text-zinc-900":"text-white"}`,children:"Personal Sanctuary Profile"}),m.jsx("p",{className:`text-[11px] font-sans ${p?"text-zinc-500":"text-zinc-400"}`,children:"Tailor your name, daily motto & focus targets"})]})]}),m.jsxs("div",{className:"flex items-center gap-1.5",children:[m.jsx("button",{type:"button",onClick:M,"aria-label":"Reset profile to defaults",title:"Reset to defaults",className:`p-2 rounded-xl transition-colors cursor-pointer ${p?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white"}`,children:m.jsx(Wr,{className:"w-3.5 h-3.5"})}),m.jsx("button",{type:"button",onClick:e,"aria-label":"Close Profile Modal",className:`p-2 rounded-xl transition-colors cursor-pointer ${p?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white"}`,children:m.jsx(pr,{className:"w-4 h-4"})})]})]}),m.jsxs("form",{onSubmit:L,className:"p-6 space-y-4",children:[m.jsxs("div",{className:`p-4 rounded-2xl border text-center space-y-1 transition-all ${p?"bg-zinc-50 border-zinc-200 text-zinc-800":"bg-white/[0.03] border-white/[0.08] text-zinc-200"}`,children:[m.jsx("span",{className:`text-[10px] font-mono uppercase tracking-widest ${p?"text-zinc-500":"text-zinc-400"}`,children:"Live Greeting Preview"}),m.jsxs("p",{className:"text-xs sm:text-sm font-sans leading-relaxed",children:[$(),","," ",m.jsx("strong",{className:p?"text-zinc-950":"text-white",children:g.trim()||"Azan"}),". •"," ",m.jsxs("span",{className:`italic ${p?"text-zinc-700 font-medium":"text-zinc-300"}`,children:["“",_.trim()||"Remember, you are here for you.","”"]})]})]}),m.jsxs("div",{className:"space-y-1.5",children:[m.jsxs("label",{className:`text-xs font-semibold flex items-center justify-between ${p?"text-zinc-800":"text-zinc-200"}`,children:[m.jsxs("span",{className:"flex items-center gap-1.5",children:[m.jsx(bw,{className:"w-3.5 h-3.5 text-amber-500"}),m.jsx("span",{children:"Your Name"})]}),m.jsx("span",{className:`text-[10px] font-normal ${p?"text-zinc-500":"text-zinc-400"}`,children:"Used in greetings & daily focus"})]}),m.jsx("input",{type:"text",value:g,onChange:j=>v(j.target.value),placeholder:"e.g. Azan",className:"w-full cosmic-input rounded-xl px-3.5 py-2.5 text-xs font-medium"})]}),m.jsxs("div",{className:"space-y-1.5",children:[m.jsxs("label",{className:`text-xs font-semibold flex items-center justify-between ${p?"text-zinc-800":"text-zinc-200"}`,children:[m.jsxs("span",{className:"flex items-center gap-1.5",children:[m.jsx(Mw,{className:"w-3.5 h-3.5 text-violet-400"}),m.jsx("span",{children:"Daily Mantra / Motto"})]}),m.jsx("span",{className:`text-[10px] font-normal ${p?"text-zinc-500":"text-zinc-400"}`,children:"Displayed on your wallpaper"})]}),m.jsx("input",{type:"text",value:_,onChange:j=>b(j.target.value),placeholder:"e.g. Remember, you are here for you.",className:"w-full cosmic-input rounded-xl px-3.5 py-2.5 text-xs font-medium"})]}),m.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-1",children:[m.jsxs("div",{className:"space-y-1.5",children:[m.jsxs("label",{className:`text-xs font-semibold flex items-center gap-1.5 ${p?"text-zinc-800":"text-zinc-200"}`,children:[m.jsx(Aw,{className:"w-3.5 h-3.5 text-emerald-400"}),m.jsx("span",{children:"Primary Focus Topic"})]}),m.jsx("input",{type:"text",value:w,onChange:j=>A(j.target.value),placeholder:"e.g. Engineering",className:"w-full cosmic-input rounded-xl px-3.5 py-2 text-xs"})]}),m.jsxs("div",{className:"space-y-1.5",children:[m.jsxs("label",{className:`text-xs font-semibold flex items-center gap-1.5 ${p?"text-zinc-800":"text-zinc-200"}`,children:[m.jsx(ug,{className:"w-3.5 h-3.5 text-amber-500"}),m.jsx("span",{children:"Default Focus Mode"})]}),m.jsx("input",{type:"text",value:y,onChange:j=>S(j.target.value),placeholder:"e.g. Deep Work",className:"w-full cosmic-input rounded-xl px-3.5 py-2 text-xs"})]})]}),m.jsxs("div",{className:"pt-2",children:[m.jsx("span",{className:`text-[10px] font-mono uppercase tracking-wider block mb-1.5 ${p?"text-zinc-500":"text-zinc-400"}`,children:"Quick Mantras"}),m.jsx("div",{className:"flex flex-wrap gap-1.5",children:["Remember, you are here for you.","Discipline equals true freedom.","Deep focus over scattered noise.","Build with relentless craft."].map(j=>m.jsxs("button",{type:"button",onClick:()=>b(j),className:`text-[11px] px-2.5 py-1 rounded-lg border transition-all text-left cursor-pointer ${_===j?p?"bg-violet-100 border-violet-300 text-violet-900 font-medium":"bg-violet-600/30 border-violet-400/50 text-violet-200 font-medium":p?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300"}`,children:["“",j,"”"]},j))})]}),m.jsxs("div",{className:`p-3.5 rounded-2xl border space-y-2.5 ${p?"bg-zinc-50 border-zinc-200":"bg-white/[0.02] border-white/[0.08]"}`,children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsxs("div",{className:"flex items-center gap-1.5",children:[m.jsx(vw,{className:`w-3.5 h-3.5 ${p?"text-violet-700":"text-violet-400"}`}),m.jsx("span",{className:`text-xs font-semibold ${p?"text-zinc-800":"text-zinc-200"}`,children:"Daily Rollover & Data Control"})]}),m.jsxs("span",{className:`text-[10px] font-mono ${p?"text-zinc-500":"text-zinc-400"}`,children:["Date: ",u]})]}),D&&m.jsxs("div",{className:"p-2 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs flex items-center gap-2",children:[m.jsx(hr,{className:"w-3.5 h-3.5 shrink-0"}),m.jsx("span",{children:D})]}),m.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1",children:[m.jsxs("button",{type:"button",onClick:N,className:`px-3 py-2 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${p?"bg-white hover:bg-zinc-100 text-zinc-800 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200 border-white/[0.10]"}`,title:"Uncheck today's tasks & habits, reset hydration",children:[m.jsx(Wr,{className:"w-3.5 h-3.5 text-violet-400"}),m.jsx("span",{children:"Start Fresh Day"})]}),m.jsxs("button",{type:"button",onClick:J,className:`px-3 py-2 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${p?"bg-rose-50 hover:bg-rose-100 text-rose-700 border-rose-200":"bg-rose-950/20 hover:bg-rose-900/40 text-rose-300 border-rose-500/20 hover:border-rose-500/40"}`,title:"Wipe data and restore factory defaults",children:[m.jsx(oc,{className:"w-3.5 h-3.5 text-rose-400"}),m.jsx("span",{children:"Factory Reset"})]})]})]}),m.jsxs("div",{className:"pt-4 flex items-center justify-end gap-2.5",children:[m.jsx("button",{type:"button",onClick:e,className:`px-4 py-2.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${p?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300"}`,children:"Cancel"}),m.jsx("button",{type:"submit",className:`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all cursor-pointer ${R?"bg-emerald-500 text-white":p?"bg-zinc-900 hover:bg-zinc-800 text-white":"bg-violet-600 hover:bg-violet-500 text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]"}`,children:R?m.jsxs(m.Fragment,{children:[m.jsx(hr,{className:"w-3.5 h-3.5"}),m.jsx("span",{children:"Saved!"})]}):m.jsxs(m.Fragment,{children:[m.jsx(_s,{className:"w-3.5 h-3.5"}),m.jsx("span",{children:"Save Profile"})]})})]})]})]})]})},Uw=()=>{const{profile:s,tasks:e,toggleTask:t,addTask:r,deleteTask:o,habits:l,toggleHabit:u,addHabit:h,routines:d,addRoutineBlock:p,deleteRoutineBlock:g,resetRoutines:v,studySeconds:_,isStudyActive:b,studySubject:w,setStudySubject:A,toggleStudyTimer:y,resetStudyTimer:S,studySessions:R,hydration:O,setHydration:D,sleepHours:F,setSleep:L,dailyRating:M,setDailyRating:N,lastActiveDate:J,resetDayProgress:$,isHUDHidden:j,setIsHUDHidden:B,wallpaperSettings:k,audioSource:V,isAudioPlaying:H,activeSoundscapeId:se,playSoundscape:ee,stopSoundscape:Y,isYouTubePlaying:G,activeYouTubeItem:X,toggleYouTubePlay:P,appTheme:K,toggleAppTheme:be}=Zr(),z=K==="light",[xe,Se]=Me.useState(!1),[Ne,ve]=Me.useState(!1),[Ue,at]=Me.useState(!1),[Be,we]=Me.useState(!1),[Ie,He]=Me.useState("none"),[xt,_t]=Me.useState("12"),[Et,Ft]=Me.useState("00"),[rn,Pt]=Me.useState("00"),[Kt,Gt]=Me.useState(0),[on,Q]=Me.useState("PM"),[en,Dt]=Me.useState(""),[zt,fe]=Me.useState(322),[Mt,qe]=Me.useState(80),ot=`${xt}:${Et}:${rn}`,[I,E]=Me.useState(""),[ne,Ce]=Me.useState(s.defaultFocusTopic||"Engineering"),[ye,ke]=Me.useState(s.defaultFocusMode||"Deep Work"),[Oe,pe]=Me.useState(!1),[me,ge]=Me.useState(""),[U,ie]=Me.useState(""),[re,Ee]=Me.useState(""),Ae=()=>{const Re=new Date().getHours();return Re>=5&&Re<12?"Good morning":Re>=12&&Re<17?"Good afternoon":Re>=17&&Re<22?"Good evening":"Late night focus"};Me.useEffect(()=>{const Re=()=>{const pn=new Date,Fn=pn.getHours(),ki=pn.getMinutes(),xr=pn.getSeconds(),Ji=Fn>=12?"PM":"AM",Ms=k.clockFormat==="24h",Jt=Ms?Fn.toString().padStart(2,"0"):(Fn%12||12).toString().padStart(2,"0"),ws=ki.toString().padStart(2,"0"),Jr=xr.toString().padStart(2,"0");_t(Jt),Ft(ws),Pt(Jr),Gt(xr/60),Q(Ms?"":Ji);const Es=new Date(pn.getFullYear(),0,0),vr=pn.getTime()-Es.getTime(),Ts=1e3*60*60*24,C=Math.floor(vr/Ts);fe(C);const q=Math.round((Fn*60+ki)/1440*100);qe(q);const ce=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],oe=["January","February","March","April","May","June","July","August","September","October","November","December"];Dt(`${ce[pn.getDay()]}, ${oe[pn.getMonth()]} ${pn.getDate()}, ${pn.getFullYear()}`)};Re();const kn=setInterval(Re,1e3);return()=>clearInterval(kn)},[k.clockFormat,k.showSeconds,k.clockDivider]);const Pe=k.clockFontStyle==="serif"?"font-serif font-bold tracking-tight":k.clockFontStyle==="mono"?"font-mono font-bold tracking-tight":k.clockFontStyle==="minimal"?"font-sans font-light tracking-[0.06em]":"font-display font-extrabold tracking-tight",Xe=k.clockSize==="compact"?"text-6xl sm:text-7xl md:text-8xl lg:text-[110px]":k.clockSize==="heroic"?"text-7xl sm:text-9xl md:text-[11rem] lg:text-[160px]":"text-7xl sm:text-8xl md:text-9xl lg:text-[136px]",ft=k.clockHalo==="none"?"opacity-0":k.clockHalo==="subtle"?"bg-violet-600/12 blur-[100px]":"bg-violet-600/25 blur-[140px] animate-pulse",Te=k.clockColor==="white"?z?"text-zinc-950 drop-shadow-[0_4px_24px_rgba(0,0,0,0.1)]":"text-white drop-shadow-[0_15px_60px_rgba(0,0,0,0.95)]":k.clockColor==="gold"?"text-amber-300 drop-shadow-[0_8px_40px_rgba(245,158,11,0.6)]":k.clockColor==="cyan"?"text-cyan-300 drop-shadow-[0_8px_40px_rgba(6,182,212,0.6)]":k.clockColor==="rose"?"text-rose-300 drop-shadow-[0_8px_40px_rgba(244,63,94,0.6)]":z?"text-zinc-900 drop-shadow-[0_4px_24px_rgba(200,180,160,0.30)]":"text-white drop-shadow-[0_15px_60px_rgba(0,0,0,0.95)]",Ze=k.clockPosition==="zenith"?"mt-6 sm:mt-12 mb-auto":k.clockPosition==="bottom"?"mt-auto mb-16 sm:mb-20":"my-auto";Me.useEffect(()=>{const Re=kn=>{kn.key==="Escape"&&(Ie!=="none"?He("none"):j?B(!1):Be&&we(!1))};return window.addEventListener("keydown",Re),()=>window.removeEventListener("keydown",Re)},[Ie,j,Be,B]);const ct=Re=>{Re.preventDefault(),I.trim()&&(r(I.trim()),E(""))},Fe=e.filter(Re=>Re.completed).length,ht=e.length>0?Math.round(Fe/e.length*100):0,pt=l.filter(Re=>Re.completed).length,_e=l.length>0?Math.round(pt/l.length*100):0,Ke=new Date;Ke.setDate(Ke.getDate()-7);const Je=+((R||[]).filter(Re=>new Date(Re.timestamp)>=Ke).reduce((Re,kn)=>Re+kn.durationSeconds,0)/3600).toFixed(1),Lt=Math.min(100,Math.round(Je/15*100)),St=Re=>{const kn=Math.floor(Re/60),pn=Re%60;return`${kn.toString().padStart(2,"0")}:${pn.toString().padStart(2,"0")}`},$t=ca.find(Re=>Re.id===se)||ca[0];return m.jsxs("div",{className:"relative w-screen h-screen max-h-screen overflow-hidden flex flex-col justify-between pt-safe-top pt-8 sm:pt-10 px-4 sm:px-8 pb-safe-bottom pb-6 select-none z-10 animate-fadeIn",children:[m.jsx("h1",{className:"sr-only",children:"FOR ME — Living Wallpaper & Focus Sanctuary"}),m.jsxs("header",{className:`relative flex items-center justify-between w-full min-h-12 shrink-0 z-20 gap-3 transition-opacity duration-300 ${j?"opacity-0 pointer-events-none":"opacity-100"}`,children:[m.jsxs("button",{type:"button",onClick:()=>B(!0),className:"flex items-center gap-2.5 cursor-pointer group shrink-0 text-left",title:"Enter Zen Wallpaper Mode",children:[m.jsx("div",{className:`w-8 h-8 rounded-full border flex items-center justify-center text-[11px] font-mono font-medium tracking-tight shadow-sm transition-all ${z?"border-zinc-300/80 bg-white/80 text-zinc-900 group-hover:bg-white group-hover:border-zinc-400":"border-white/15 bg-white/[0.04] text-zinc-200 group-hover:bg-white/[0.1] group-hover:border-white/30"}`,children:"FM"}),m.jsx("span",{className:`font-sans font-bold text-[11px] tracking-[0.22em] uppercase group-hover:opacity-85 transition-opacity ${z?"text-zinc-900":"text-zinc-200"}`,children:"FOR ME"})]}),m.jsx("div",{className:"hidden md:flex absolute left-1/2 -translate-x-1/2 items-center pointer-events-none",children:m.jsxs("div",{className:`pointer-events-auto flex items-center gap-1.5 px-3.5 py-1.5 rounded-full backdrop-blur-2xl border text-[11px] font-sans font-medium shadow-sm transition-all ${z?"bg-white/85 border-zinc-200/90 text-zinc-700":"bg-[#090b16]/75 border-white/[0.08] text-zinc-300"}`,children:[m.jsx(_s,{className:"w-3 h-3 text-amber-400"}),m.jsx("span",{children:en})]})}),m.jsxs("nav",{"aria-label":"Wallpaper Quick Controls",className:`flex items-center gap-0.5 p-1 rounded-full backdrop-blur-2xl border transition-all ${z?"bg-white/90 border-zinc-200/90 text-zinc-700 shadow-[0_8px_24px_rgba(0,0,0,0.06)]":"bg-[#090b16]/75 border-white/[0.12] text-zinc-300 shadow-[0_12px_32px_rgba(0,0,0,0.6)]"}`,children:[m.jsx("button",{type:"button",onClick:()=>Se(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${z?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Wallpaper Studio (Celestial Objects, Waves & Lighting)","aria-label":"Wallpaper Studio",children:m.jsx(Tg,{className:"w-3.5 h-3.5"})}),m.jsx("button",{type:"button",onClick:()=>we(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${z?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Daily Routine Protocols","aria-label":"Daily Routine Protocols",children:m.jsx(t0,{className:"w-3.5 h-3.5"})}),m.jsxs("button",{type:"button",onClick:()=>ve(!0),className:`relative w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${H||G?z?"text-violet-600 bg-violet-50":"text-violet-300 bg-violet-600/20":z?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Focus Audio Sanctuary (YouTube Streams & Ambient Soundscapes)","aria-label":"Focus Audio Sanctuary",children:[V==="youtube"&&G?m.jsx(ao,{className:"w-3.5 h-3.5 text-red-500 animate-pulse"}):m.jsx(sc,{className:`w-3.5 h-3.5 ${H||G?"animate-pulse":""}`}),(H||G)&&m.jsx("span",{className:"absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse"})]}),m.jsx("button",{type:"button",onClick:()=>at(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${z?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:`Profile & Motto (${s.name})`,"aria-label":"Profile and Daily Mantra",children:m.jsx(Fg,{className:"w-3.5 h-3.5"})}),m.jsx("div",{className:`w-px h-3.5 mx-0.5 ${z?"bg-zinc-200":"bg-white/10"}`}),m.jsx("button",{type:"button",onClick:be,className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${z?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:`Switch to ${z?"Obsidian Dark":"Creamy Light"} Theme`,"aria-label":"Toggle Light/Dark Theme",children:z?m.jsx(ac,{className:"w-3.5 h-3.5"}):m.jsx(Pg,{className:"w-3.5 h-3.5"})}),m.jsx("button",{type:"button",onClick:()=>B(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${z?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Zen Mode (Hide all controls)","aria-label":"Enter Zen Mode",children:m.jsx(Sw,{className:"w-3.5 h-3.5"})})]})]}),m.jsxs("main",{"aria-label":`Current time ${ot}`,className:`${Ze} text-center flex flex-col items-center justify-center relative z-20 py-4 select-none transition-all duration-300`,children:[m.jsx("div",{className:`absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[780px] lg:h-[780px] rounded-full ${ft} pointer-events-none -z-10`}),m.jsxs("div",{className:"relative flex flex-col items-center group",children:[m.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none -z-10",children:m.jsxs("div",{className:`relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] md:w-[640px] md:h-[640px] rounded-full border border-dashed transition-all ${z?"border-zinc-300/70":"border-white/[0.08]"}`,children:[m.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-violet-400 shadow-[0_0_12px_rgba(168,85,247,0.9)]"}),m.jsx("div",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-white/40"}),m.jsx("div",{className:"absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-white/40"}),m.jsx("div",{className:"absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-white/40"}),m.jsx("div",{className:"absolute inset-0 transition-transform duration-1000 ease-linear pointer-events-none",style:{transform:`rotate(${Kt*360}deg)`},children:m.jsxs("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center",children:[m.jsx("div",{className:`w-3.5 h-3.5 rounded-full animate-ping opacity-75 ${k.clockColor==="gold"?"bg-amber-400":k.clockColor==="cyan"?"bg-cyan-400":k.clockColor==="rose"?"bg-rose-400":"bg-violet-400"}`}),m.jsx("div",{className:`absolute w-3 h-3 rounded-full shadow-lg ${k.clockColor==="gold"?"bg-amber-300 shadow-[0_0_20px_rgba(251,191,36,1)]":k.clockColor==="cyan"?"bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,1)]":k.clockColor==="rose"?"bg-rose-300 shadow-[0_0_20px_rgba(244,63,94,1)]":"bg-violet-300 shadow-[0_0_20px_rgba(168,85,247,1)]"}`})]})}),m.jsx("div",{className:`absolute inset-8 sm:inset-12 md:inset-16 rounded-full border transition-all ${z?"border-zinc-200/50":"border-white/[0.04]"}`})]})}),m.jsxs("div",{className:`flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3 px-4 py-1 rounded-full border backdrop-blur-2xl text-[10px] sm:text-[11px] font-mono tracking-widest uppercase transition-all shadow-md ${z?"bg-white/80 border-zinc-200 text-zinc-700":"bg-[#090b16]/75 border-white/[0.12] text-zinc-300 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"}`,children:[m.jsxs("span",{className:"flex items-center gap-1.5 text-emerald-400 font-semibold",children:[m.jsxs("span",{className:"relative flex h-2 w-2",children:[m.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),m.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-emerald-500"})]}),"EPHEMERIS"]}),m.jsx("span",{className:"opacity-25",children:"•"}),m.jsxs("span",{className:"tabular-nums",children:["DAY ",zt]}),m.jsx("span",{className:"opacity-25",children:"•"}),m.jsxs("span",{className:"tabular-nums text-violet-400 font-semibold",children:[Mt,"% SOLAR"]}),m.jsx("span",{className:"opacity-25 hidden sm:inline",children:"•"}),m.jsx("span",{className:"hidden sm:inline opacity-70",children:"AZAN ZENITH"})]}),m.jsxs("div",{className:`inline-flex items-center justify-center max-w-[95vw] px-2 select-none leading-none flex-nowrap transition-all ${Pe} ${Te}`,children:[m.jsx("span",{className:`${Xe} tracking-tight tabular-nums transition-all drop-shadow-[0_16px_50px_rgba(0,0,0,0.95)] ${z?"text-zinc-950 font-bold":"bg-gradient-to-b from-white via-white/95 to-zinc-400/90 bg-clip-text text-transparent font-bold"}`,children:xt}),m.jsx("span",{className:`inline-flex items-center justify-center px-1.5 sm:px-3 text-3xl sm:text-5xl md:text-6xl lg:text-7xl select-none transition-colors ${k.clockColor==="gold"?"text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.8)]":k.clockColor==="cyan"?"text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]":k.clockColor==="rose"?"text-rose-400 drop-shadow-[0_0_20px_rgba(244,63,94,0.8)]":z?"text-zinc-600":"text-violet-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]"} animate-pulse`,children:k.clockDivider==="dot"?"·":k.clockDivider==="space"?" ":":"}),m.jsx("span",{className:`${Xe} tracking-tight tabular-nums transition-all drop-shadow-[0_16px_50px_rgba(0,0,0,0.95)] ${z?"text-zinc-950 font-bold":"bg-gradient-to-b from-white via-white/95 to-zinc-400/90 bg-clip-text text-transparent font-bold"}`,children:Et}),m.jsxs("div",{className:"flex flex-col items-center justify-center ml-3 sm:ml-5 md:ml-7 gap-2 self-center",children:[k.showSeconds&&m.jsxs("div",{className:`relative flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl border backdrop-blur-3xl transition-all shadow-2xl ${z?"bg-white/95 border-zinc-300 text-zinc-950 shadow-md":"bg-[#090b16]/90 border-white/20 text-white shadow-[0_12px_40px_rgba(0,0,0,0.8)]"}`,children:[m.jsxs("svg",{className:"absolute inset-1.5 w-[calc(100%-12px)] h-[calc(100%-12px)] -rotate-90 pointer-events-none",viewBox:"0 0 36 36",children:[m.jsx("circle",{cx:"18",cy:"18",r:"15",stroke:"currentColor",strokeWidth:"2.5",className:"opacity-15",fill:"none"}),m.jsx("circle",{cx:"18",cy:"18",r:"15",stroke:"currentColor",strokeWidth:"2.8",className:`transition-all duration-300 ${k.clockColor==="gold"?"text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]":k.clockColor==="cyan"?"text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]":k.clockColor==="rose"?"text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.9)]":"text-violet-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]"}`,strokeDasharray:"94.25",strokeDashoffset:94.25*(1-Kt),strokeLinecap:"round",fill:"none"})]}),m.jsx("span",{className:"font-mono text-base sm:text-xl md:text-2xl font-extrabold tabular-nums tracking-wider leading-none z-10 drop-shadow-sm",children:rn}),m.jsx("span",{className:"text-[7px] sm:text-[8px] font-mono tracking-widest uppercase opacity-60 mt-1 z-10 font-bold",children:"SEC"})]}),on&&m.jsx("span",{className:`text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase px-3 py-1 rounded-xl border backdrop-blur-2xl transition-all ${z?"bg-zinc-100 border-zinc-200 text-zinc-800 shadow-sm":"bg-white/[0.08] border-white/15 text-zinc-200 shadow-md"}`,children:on})]})]})]}),k.showGreeting!==!1&&m.jsx("div",{className:"mt-7 sm:mt-9 flex justify-center w-full px-3",children:m.jsx("button",{type:"button",onClick:()=>at(!0),className:`group relative text-xs sm:text-sm font-sans tracking-wide px-6 sm:px-8 py-3 rounded-2xl sm:rounded-full backdrop-blur-3xl max-w-xl text-center leading-relaxed shadow-xl cursor-pointer transition-all hover:scale-[1.01] border ${z?"bg-white/95 text-zinc-900 border-zinc-300/90 shadow-md hover:bg-white hover:border-zinc-400":"bg-[#0a0618]/90 text-zinc-200 border-white/[0.18] shadow-[0_16px_50px_rgba(0,0,0,0.7)] hover:border-violet-400/50 hover:shadow-[0_16px_60px_rgba(168,85,247,0.25)]"}`,title:"Click to personalize name & daily mantra",children:m.jsxs("div",{className:"flex items-center justify-center gap-2 flex-wrap",children:[m.jsxs("span",{className:`font-bold tracking-normal ${z?"text-zinc-950":"text-white"}`,children:[Ae(),", ",s.name]}),m.jsx("span",{className:"opacity-30",children:"•"}),m.jsxs("span",{className:`italic font-medium ${z?"text-zinc-800":"text-zinc-200"}`,children:["“",s.motto||"Discipline equals true freedom.","”"]})]})})}),j&&m.jsxs("button",{type:"button",onClick:()=>B(!1),className:`mt-8 flex items-center gap-2 px-5 py-2.5 rounded-full text-xs transition-all border shadow-xl cursor-pointer ${z?"bg-white/90 text-zinc-800 border-zinc-300/80 hover:bg-white":"cosmic-dock text-zinc-300 hover:text-white border-white/[0.12] hover:border-violet-400/40"}`,children:[m.jsx(mg,{className:"w-3.5 h-3.5 text-amber-400"}),m.jsx("span",{className:"font-display tracking-wider",children:"Tap anywhere to restore controls"})]})]}),Ie!=="none"&&!j&&m.jsxs("div",{className:"fixed inset-x-0 bottom-24 z-30 flex justify-center px-4 animate-fadeIn pointer-events-auto",children:[m.jsx("div",{className:"fixed inset-0 -z-10",onClick:()=>He("none")}),Ie==="tasks"&&m.jsxs("div",{className:`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${z?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[m.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${z?"border-zinc-200":"border-white/[0.08]"}`,children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("h2",{className:"text-xs font-display uppercase tracking-[0.18em] font-semibold",children:"Tasks for the Day"}),m.jsxs("div",{className:"flex items-center gap-1 p-0.5 rounded-lg border bg-black/10 border-white/10",children:[m.jsxs("button",{type:"button",onClick:()=>He("tasks"),className:"px-2 py-0.5 rounded text-[10px] font-semibold bg-violet-600 text-white",children:["Tasks (",Fe,"/",e.length,")"]}),m.jsxs("button",{type:"button",onClick:()=>He("habits"),className:"px-2 py-0.5 rounded text-[10px] font-medium text-zinc-400 hover:text-white",children:["Habits (",pt,"/",l.length,")"]})]})]}),m.jsxs("div",{className:"flex items-center gap-1.5",children:[m.jsx("button",{type:"button",onClick:()=>{window.confirm("Reset and uncheck all tasks for today?")&&e.forEach(Re=>{Re.completed&&t(Re.id)})},className:`p-1 rounded-md border transition-colors cursor-pointer ${z?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-600":"bg-white/10 hover:bg-white/20 border-white/10 text-zinc-300 hover:text-white"}`,title:"Reset today's tasks","aria-label":"Reset tasks for today",children:m.jsx(Wr,{className:"w-3.5 h-3.5"})}),m.jsx("button",{type:"button",onClick:()=>He("none"),className:"p-1 text-zinc-400 hover:text-white cursor-pointer","aria-label":"Close Tasks Panel",children:m.jsx(pr,{className:"w-3.5 h-3.5"})})]})]}),m.jsxs("form",{onSubmit:ct,className:"flex items-center gap-2 shrink-0",children:[m.jsx("input",{type:"text",placeholder:"Add task for today...",value:I,onChange:Re=>E(Re.target.value),className:"flex-1 cosmic-input rounded-xl px-3.5 py-2 text-xs placeholder-zinc-500",autoFocus:!0}),m.jsx("button",{type:"submit",disabled:!I.trim(),className:"w-8 h-8 rounded-xl bg-violet-600 hover:bg-violet-500 text-white disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all shrink-0 cursor-pointer shadow-sm",children:m.jsx(Zl,{className:"w-4 h-4"})})]}),m.jsx("div",{className:"max-h-56 overflow-y-auto space-y-1.5 pr-1",children:e.map(Re=>m.jsxs("div",{className:`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs select-none group ${Re.completed?z?"bg-zinc-100/60 border-zinc-200/60 text-zinc-400":"bg-white/[0.015] border-white/[0.04] text-zinc-500":z?"bg-white/80 hover:bg-white border-zinc-200/80 text-zinc-800":"bg-white/[0.035] hover:bg-white/[0.07] border-white/[0.08] hover:border-violet-400/20 text-zinc-200"}`,children:[m.jsxs("div",{className:"flex items-center gap-2.5 truncate flex-1 cursor-pointer pr-2",onClick:()=>t(Re.id),children:[m.jsx("div",{className:`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border transition-all ${Re.completed?"bg-emerald-500 border-emerald-400 text-white shadow-sm":z?"border-zinc-300 group-hover:border-violet-500":"border-white/[0.25] group-hover:border-violet-400"}`,children:Re.completed&&m.jsx(hr,{className:"w-2.5 h-2.5 stroke-[3]"})}),m.jsx("span",{className:`font-sans truncate ${Re.completed?"line-through text-zinc-400":z?"text-zinc-800 font-medium":"text-zinc-200"}`,children:Re.text})]}),m.jsx("button",{type:"button",onClick:()=>o(Re.id),className:"opacity-0 group-hover:opacity-100 text-zinc-400 hover:text-red-400 transition-opacity p-1 cursor-pointer",children:m.jsx(oc,{className:"w-3.5 h-3.5"})})]},Re.id))}),m.jsxs("div",{className:`pt-2.5 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${z?"border-zinc-200 text-zinc-600":"border-white/[0.08] text-zinc-400"}`,children:[m.jsxs("span",{className:"flex items-center gap-1.5",children:[m.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400"}),"Day Progress"]}),m.jsxs("span",{className:`font-display font-medium tabular-nums ${z?"text-zinc-900":"text-zinc-200"}`,children:[ht,"% done"]})]})]}),Ie==="habits"&&m.jsxs("div",{className:`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${z?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[m.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${z?"border-zinc-200":"border-white/[0.08]"}`,children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("h2",{className:"text-xs font-display uppercase tracking-[0.18em] font-semibold",children:"Daily Rhythm Pulse"}),m.jsxs("div",{className:"flex items-center gap-1 p-0.5 rounded-lg border bg-black/10 border-white/10",children:[m.jsxs("button",{type:"button",onClick:()=>He("tasks"),className:"px-2 py-0.5 rounded text-[10px] font-medium text-zinc-400 hover:text-white",children:["Tasks (",Fe,"/",e.length,")"]}),m.jsxs("button",{type:"button",onClick:()=>He("habits"),className:"px-2 py-0.5 rounded text-[10px] font-semibold bg-violet-600 text-white",children:["Habits (",pt,"/",l.length,")"]})]})]}),m.jsxs("div",{className:"flex items-center gap-1.5",children:[m.jsx("button",{type:"button",onClick:()=>{window.confirm("Reset today's habit checkmarks?")&&l.forEach(Re=>{Re.completed&&u(Re.id)})},className:`p-1 rounded-md border transition-colors cursor-pointer ${z?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-600":"bg-white/10 hover:bg-white/20 border-white/10 text-zinc-300 hover:text-white"}`,title:"Reset today's habits","aria-label":"Reset habits for today",children:m.jsx(Wr,{className:"w-3.5 h-3.5"})}),m.jsx("button",{type:"button",onClick:()=>{const Re=prompt("Add new daily habit:");Re&&h(Re)},className:`p-1 rounded-md border transition-colors cursor-pointer ${z?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/10 hover:bg-white/20 border-white/10 text-white"}`,title:"Add habit","aria-label":"Add new daily habit",children:m.jsx(Zl,{className:"w-3.5 h-3.5"})}),m.jsx("button",{type:"button",onClick:()=>He("none"),className:"p-1 text-zinc-400 hover:text-white cursor-pointer","aria-label":"Close Habits Panel",children:m.jsx(pr,{className:"w-3.5 h-3.5"})})]})]}),m.jsx("div",{className:"max-h-56 overflow-y-auto space-y-1.5 pr-1",children:l.map(Re=>m.jsxs("div",{onClick:()=>u(Re.id),className:`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs cursor-pointer select-none group ${Re.completed?z?"bg-zinc-100/60 border-zinc-200/60 text-zinc-400":"bg-white/[0.015] border-white/[0.04] text-zinc-400":z?"bg-white/80 hover:bg-white border-zinc-200/80 text-zinc-800":"bg-white/[0.035] hover:bg-white/[0.07] border-white/[0.08] hover:border-violet-400/20 text-zinc-200"}`,children:[m.jsxs("div",{className:"flex flex-col gap-0.5 truncate pr-2",children:[m.jsx("span",{className:`font-sans truncate ${Re.completed?"line-through text-zinc-400":z?"text-zinc-800 font-medium":"text-zinc-200"}`,children:Re.name}),m.jsx("div",{className:"flex items-center gap-1.5 text-[10px] font-mono",children:Re.streak>0?m.jsxs("span",{className:"text-amber-500 flex items-center gap-0.5 font-medium",children:[m.jsx(ug,{className:"w-3 h-3 fill-amber-500"})," ",Re.streak," day streak"]}):m.jsx("span",{className:z?"text-zinc-500":"text-zinc-400",children:"Ready today"})})]}),m.jsx("div",{className:`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border transition-all ${Re.completed?"bg-emerald-500 border-emerald-400 text-white shadow-sm":z?"border-zinc-300 group-hover:border-violet-500":"border-white/[0.25] group-hover:border-violet-400"}`,children:Re.completed&&m.jsx(hr,{className:"w-2.5 h-2.5 stroke-[3]"})})]},Re.id))}),m.jsxs("div",{className:`pt-2.5 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${z?"border-zinc-200 text-zinc-600":"border-white/[0.08] text-zinc-400"}`,children:[m.jsxs("div",{className:`flex items-center gap-1.5 ${z?"text-zinc-700":"text-zinc-400"}`,children:[m.jsx(_s,{className:`w-3.5 h-3.5 ${z?"text-amber-500":"text-violet-300"}`}),m.jsx("span",{children:"Daily Consistency"})]}),m.jsxs("span",{className:`font-display font-medium tabular-nums ${z?"text-zinc-900":"text-zinc-200"}`,children:[_e,"% kept"]})]})]}),Ie==="timer"&&m.jsxs("div",{className:`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${z?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[m.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${z?"border-zinc-200":"border-white/[0.08]"}`,children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(Nf,{className:`w-4 h-4 ${z?"text-violet-700":"text-violet-300"}`}),m.jsx("h2",{className:"text-xs font-display uppercase tracking-[0.18em] font-semibold",children:"Deep Study Console"})]}),m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("span",{className:`text-[10px] font-display px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${b?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 animate-pulse":z?"bg-zinc-100 text-zinc-600 border border-zinc-200":"bg-white/[0.06] text-zinc-400 border border-white/[0.08]"}`,children:b?"RUNNING":"STOPPED"}),m.jsx("button",{type:"button",onClick:()=>He("none"),className:"p-1 text-zinc-400 hover:text-white",children:m.jsx(pr,{className:"w-3.5 h-3.5"})})]})]}),m.jsxs("div",{className:"text-center py-2",children:[m.jsx("div",{className:`text-5xl font-display font-light tracking-widest leading-none tabular-nums ${z?"text-zinc-900":"text-white"}`,children:St(_)}),m.jsxs("p",{className:`text-[10px] font-display tracking-[0.2em] uppercase mt-2 ${z?"text-zinc-500":"text-zinc-400"}`,children:[w," • ",ye]})]}),m.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[m.jsx("input",{type:"text",value:ye,onChange:Re=>ke(Re.target.value),placeholder:"Mode (e.g. Deep Work)",className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"}),m.jsx("input",{type:"text",value:ne,onChange:Re=>{Ce(Re.target.value),A(Re.target.value)},placeholder:"Subject (e.g. Engineering)",className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"})]}),m.jsxs("div",{className:"flex gap-2",children:[m.jsxs("button",{type:"button",onClick:y,className:`flex-1 py-2.5 rounded-xl font-display text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 border transition-all cursor-pointer ${z?"bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-800":"bg-violet-600 hover:bg-violet-500 text-white border-violet-400/30"}`,children:[b?m.jsx($r,{className:"w-4 h-4"}):m.jsx(Yr,{className:"w-4 h-4 ml-0.5 fill-current"}),m.jsx("span",{children:b?"Pause Focus":"Start Focus"})]}),m.jsx("button",{type:"button",onClick:S,className:`px-3 py-2.5 rounded-xl border transition-colors cursor-pointer ${z?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white border-white/[0.08]"}`,title:"Reset stopwatch",children:m.jsx(Wr,{className:"w-3.5 h-3.5"})})]}),m.jsxs("div",{className:`pt-2.5 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${z?"border-zinc-200 text-zinc-600":"border-white/[0.08] text-zinc-400"}`,children:[m.jsxs("span",{children:["Weekly: ",m.jsxs("strong",{className:`font-display ${z?"text-zinc-900":"text-zinc-200"}`,children:[Je,"h"]})," / 15h"]}),m.jsxs("span",{className:`font-display font-medium tabular-nums ${z?"text-zinc-900":"text-zinc-200"}`,children:[Lt,"% quota"]})]})]}),Ie==="wellness"&&m.jsxs("div",{className:`w-full max-w-sm p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${z?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[m.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-white/10",children:[m.jsxs("span",{className:"text-xs font-display uppercase tracking-widest font-semibold flex items-center gap-1.5",children:[m.jsx(_s,{className:"w-3.5 h-3.5 text-amber-400"}),"Daily Wellness Pulse"]}),m.jsx("button",{onClick:()=>He("none"),className:"p-1 text-zinc-400 hover:text-white",children:m.jsx(pr,{className:"w-3.5 h-3.5"})})]}),m.jsxs("div",{className:"flex items-center justify-between py-1 text-xs",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(_w,{className:"w-4 h-4 text-sky-400"}),m.jsx("span",{children:"Hydration Target"})]}),m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("button",{type:"button",onClick:()=>D(Re=>Math.max(0,Re-12.5)),className:"w-6 h-6 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center font-bold",children:"-"}),m.jsxs("span",{className:"font-mono font-bold w-12 text-center",children:[Math.round(O/100*8)," / 8"]}),m.jsx("button",{type:"button",onClick:()=>D(Re=>Math.min(100,Re+12.5)),className:"w-6 h-6 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center font-bold",children:"+"})]})]}),m.jsxs("div",{className:"flex items-center justify-between py-1 text-xs",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(ac,{className:"w-4 h-4 text-violet-400"}),m.jsx("span",{children:"Sleep Duration"})]}),m.jsxs("button",{type:"button",onClick:()=>L(F%12+1),className:"px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 font-mono font-bold text-xs",children:[F," Hours (Click to Cycle)"]})]}),m.jsxs("div",{className:"flex items-center justify-between py-1 text-xs",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(Ew,{className:"w-4 h-4 text-amber-400"}),m.jsx("span",{children:"Day Score"})]}),m.jsxs("button",{type:"button",onClick:()=>N(M>=10?1:M+1),className:"px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 font-mono font-bold text-xs text-amber-400",children:[M," / 10 ★"]})]}),m.jsxs("div",{className:`pt-3 mt-1 border-t flex items-center justify-between ${z?"border-zinc-200":"border-white/10"}`,children:[m.jsxs("div",{className:"flex flex-col",children:[m.jsxs("span",{className:"text-[11px] font-medium flex items-center gap-1",children:[m.jsx(Wr,{className:"w-3 h-3 text-violet-400"}),"Day Reset"]}),m.jsxs("span",{className:`text-[9px] font-mono ${z?"text-zinc-500":"text-zinc-400"}`,children:["Active: ",J]})]}),m.jsxs("button",{type:"button",onClick:()=>{window.confirm("Start a fresh day? This will uncheck today's tasks & habits and reset hydration to 0%.")&&$()},className:`px-3 py-1.5 rounded-xl border text-[11px] font-display uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${z?"bg-violet-50 hover:bg-violet-100 text-violet-700 border-violet-200":"bg-violet-600/30 hover:bg-violet-600/50 text-violet-200 border-violet-400/40 hover:border-violet-400"}`,title:"Reset daily progress for a fresh day",children:[m.jsx(Wr,{className:"w-3 h-3"}),m.jsx("span",{children:"Start Fresh Day"})]})]})]})]}),!j&&m.jsx("footer",{className:"relative shrink-0 flex items-center justify-center w-full z-20 pb-2",children:m.jsxs("nav",{"aria-label":"Sanctuary Focus Dock",className:`flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-full backdrop-blur-2xl border shadow-2xl transition-all ${z?"bg-white/85 border-zinc-200/90 text-zinc-800 shadow-[0_15px_40px_rgba(0,0,0,0.1)]":"bg-[#090b16]/80 border-white/[0.12] text-zinc-200 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"}`,children:[m.jsxs("div",{className:`flex items-center rounded-full border transition-all ${b?"bg-emerald-500/20 border-emerald-500/40 text-emerald-300":z?"bg-zinc-100/90 border-zinc-200 text-zinc-800":"bg-white/[0.04] border-white/[0.08] text-zinc-300"}`,children:[m.jsxs("button",{type:"button",onClick:y,className:"pl-3 pr-1.5 py-1.5 flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity",title:b?"Pause focus timer":"Start focus timer",children:[b?m.jsx($r,{className:"w-3.5 h-3.5 text-emerald-400 animate-pulse"}):m.jsx(Yr,{className:"w-3.5 h-3.5 text-zinc-400 fill-current"}),m.jsx("span",{className:"font-mono text-xs font-semibold tabular-nums",children:St(_)})]}),m.jsx("button",{type:"button",onClick:()=>He(Re=>Re==="timer"?"none":"timer"),className:`pr-3 pl-1 py-1.5 text-[11px] font-sans border-l transition-colors cursor-pointer ${z?"border-zinc-200 hover:text-black":"border-white/10 hover:text-white"}`,title:"Expand Focus Timer Panel",children:m.jsx("span",{children:ne})})]}),m.jsxs("button",{type:"button",onClick:()=>He(Re=>Re==="tasks"?"none":"tasks"),className:`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-sans transition-all cursor-pointer ${Ie==="tasks"||Ie==="habits"?"bg-violet-600 text-white border-violet-400":z?"bg-zinc-100/90 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300 hover:text-white"}`,title:"Daily Flow (Tasks & Habits)",children:[m.jsx(ww,{className:"w-3.5 h-3.5 text-violet-400"}),m.jsx("span",{children:"Flow"}),m.jsxs("span",{className:`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${z?"bg-zinc-200/90 text-zinc-800":"bg-white/10 text-violet-200"}`,children:[Fe+pt,"/",e.length+l.length]})]}),m.jsxs("div",{onClick:()=>ve(!0),className:`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs cursor-pointer group transition-all ${H||G?V==="youtube"?"bg-red-600/30 border-red-500/40 text-red-200":"bg-violet-600/30 border-violet-500/40 text-violet-200":z?"bg-zinc-100/90 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300 hover:text-white"}`,title:"Open Audio Sanctuary",children:[V==="youtube"&&G?m.jsx(ao,{className:"w-3.5 h-3.5 text-red-500 animate-pulse"}):m.jsx(sc,{className:`w-3.5 h-3.5 ${H||G?"text-violet-300 animate-pulse":"text-zinc-400"}`}),m.jsx("span",{className:"max-w-[80px] sm:max-w-[120px] truncate text-[11px] font-medium",children:V==="youtube"?X?X.title:"YouTube":$t.title}),m.jsx(Gg,{isPlaying:V==="youtube"?G:H,color:V==="youtube"?"#ef4444":z?"#7c3aed":$t.accentColor,className:"w-8 h-2.5",barCount:4}),m.jsx("button",{type:"button",onClick:Re=>{Re.stopPropagation(),V==="youtube"?P():H?Y():ee(se)},className:"w-5 h-5 rounded-md flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors",title:(V==="youtube"?G:H)?"Pause audio":"Play audio",children:(V==="youtube"?G:H)?m.jsx($r,{className:"w-2.5 h-2.5 fill-current"}):m.jsx(Yr,{className:"w-2.5 h-2.5 fill-current ml-0.5"})})]})]})}),Be&&m.jsxs("div",{className:"fixed inset-0 z-50 flex",children:[m.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm",onClick:()=>we(!1)}),m.jsxs("aside",{className:`relative z-10 w-80 sm:w-96 max-w-[90vw] h-full backdrop-blur-3xl border-r shadow-2xl pt-14 sm:pt-16 px-6 pb-6 flex flex-col justify-between ${z?"bg-[#faf8f4]/98 border-zinc-200 text-zinc-900":"bg-[#0d0f17]/95 border-white/[0.1] text-white"}`,children:[m.jsxs("div",{className:"space-y-4",children:[m.jsxs("div",{className:`flex items-center justify-between pb-3.5 border-b ${z?"border-zinc-200":"border-white/[0.08]"}`,children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(t0,{className:`w-4 h-4 ${z?"text-violet-700":"text-violet-300"}`}),m.jsx("h3",{className:`text-xs font-sans uppercase tracking-[0.16em] font-semibold ${z?"text-zinc-900":"text-white"}`,children:"Daily Routine Protocols"})]}),m.jsx("button",{onClick:()=>we(!1),className:`transition-colors cursor-pointer ${z?"text-zinc-500 hover:text-black":"text-zinc-400 hover:text-white"}`,children:m.jsx(pr,{className:"w-4 h-4"})})]}),m.jsxs("div",{className:"space-y-2.5 text-xs overflow-y-auto max-h-[58vh] pr-1",children:[d.map(Re=>m.jsxs("div",{className:`p-3.5 rounded-2xl border transition-all relative group ${z?"bg-white/80 border-zinc-200 shadow-sm":"bg-white/[0.03] border-white/[0.08]"}`,children:[m.jsxs("div",{className:"flex items-center justify-between pb-1.5",children:[m.jsxs("span",{className:"font-semibold text-amber-500 flex items-center gap-1.5",children:[m.jsx(Tw,{className:"w-3.5 h-3.5"})," ",Re.title]}),m.jsxs("div",{className:"flex items-center gap-1.5",children:[m.jsx("span",{className:`text-[10px] font-mono ${z?"text-zinc-500":"text-zinc-400"}`,children:Re.timeRange}),d.length>1&&m.jsx("button",{type:"button",onClick:()=>g(Re.id),className:"opacity-0 group-hover:opacity-100 p-1 text-zinc-400 hover:text-red-400 transition-opacity cursor-pointer",title:"Delete protocol block",children:m.jsx(oc,{className:"w-3 h-3"})})]})]}),m.jsx("p",{className:`text-[11px] leading-relaxed ${z?"text-zinc-700":"text-zinc-300"}`,children:Re.description})]},Re.id)),Oe?m.jsxs("form",{onSubmit:Re=>{Re.preventDefault(),me.trim()&&re.trim()&&(p({title:me.trim(),timeRange:U.trim()||"Flexible",description:re.trim(),iconType:"custom"}),ge(""),ie(""),Ee(""),pe(!1))},className:`p-3 rounded-2xl border space-y-2 ${z?"bg-white border-zinc-300 shadow-sm":"bg-white/[0.05] border-white/[0.12]"}`,children:[m.jsx("input",{type:"text",placeholder:"Protocol title (e.g. Creative Sprint)",value:me,onChange:Re=>ge(Re.target.value),className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs",required:!0}),m.jsx("input",{type:"text",placeholder:"Time range (e.g. 14:00 – 16:00)",value:U,onChange:Re=>ie(Re.target.value),className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"}),m.jsx("textarea",{placeholder:"Protocol description / intentions...",value:re,onChange:Re=>Ee(Re.target.value),className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs resize-none h-16",required:!0}),m.jsxs("div",{className:"flex items-center justify-end gap-1.5",children:[m.jsx("button",{type:"button",onClick:()=>pe(!1),className:`px-2.5 py-1 rounded-lg text-[11px] ${z?"text-zinc-600 hover:text-black":"text-zinc-400 hover:text-white"}`,children:"Cancel"}),m.jsx("button",{type:"submit",className:"px-3 py-1 rounded-lg text-[11px] bg-violet-600 hover:bg-violet-500 text-white font-medium cursor-pointer",children:"Add Block"})]})]}):m.jsxs("button",{type:"button",onClick:()=>pe(!0),className:`w-full py-2 rounded-xl border border-dashed flex items-center justify-center gap-1.5 text-[11px] transition-all cursor-pointer ${z?"border-zinc-300 hover:border-zinc-400 text-zinc-600 hover:text-zinc-900 bg-white/40":"border-white/10 hover:border-white/20 text-zinc-400 hover:text-white bg-white/[0.01]"}`,children:[m.jsx(Zl,{className:"w-3 h-3"}),m.jsx("span",{children:"Add Custom Protocol Block"})]})]})]}),m.jsxs("div",{className:"flex items-center gap-2 pt-2",children:[m.jsx("button",{type:"button",onClick:v,className:`px-3 py-2.5 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${z?"border-zinc-200 text-zinc-600 hover:bg-zinc-100":"border-white/10 text-zinc-400 hover:bg-white/[0.05] hover:text-white"}`,title:"Reset to default protocols",children:"Reset"}),m.jsx("button",{type:"button",onClick:()=>we(!1),className:`flex-1 py-2.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${z?"bg-zinc-900 hover:bg-zinc-800 text-white":"bg-white/[0.06] hover:bg-white/[0.12] text-white"}`,children:"Close Routine"})]})]})]}),m.jsx(Iw,{isOpen:Ue,onClose:()=>at(!1)}),m.jsx(Dw,{isOpen:xe,onClose:()=>Se(!1)}),m.jsx(Lw,{isOpen:Ne,onClose:()=>ve(!1)})]})},kw=()=>{const{wallpaperTheme:s,appTheme:e}=Zr(),t=e==="light";return m.jsxs("div",{"data-theme":s,className:`theme-${e} relative w-screen h-screen max-h-screen overflow-hidden text-[var(--text-primary)] font-sans transition-colors duration-200 ${t?"bg-[#f7f5f0]/95":"bg-[#060814]"}`,children:[m.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--card-bg-elevated)] focus:text-[var(--text-primary)] focus:rounded-xl focus:border focus:border-[var(--card-border)] focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-violet-400 font-sans text-xs font-semibold",children:"Skip to main content"}),m.jsx(Ov,{}),m.jsx(ow,{}),m.jsx(Rw,{}),m.jsx("div",{className:"pointer-events-none fixed inset-0 z-20 dreamy-grain opacity-40 mix-blend-overlay"}),m.jsx("main",{id:"main-content",className:"w-full h-full overflow-y-auto lg:overflow-hidden relative z-10",children:m.jsx(Uw,{})})]})};function Fw(){return m.jsx(zv,{children:m.jsx(kw,{})})}const s0=document.getElementById("root");s0&&Lv.createRoot(s0).render(m.jsx(Tv.StrictMode,{children:m.jsx(Fw,{})}));
