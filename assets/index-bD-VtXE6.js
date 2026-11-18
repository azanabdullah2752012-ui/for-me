var Av=Object.defineProperty;var Cv=(s,e,t)=>e in s?Av(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var mr=(s,e,t)=>Cv(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function cm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Vu={exports:{}},Ka={},Wu={exports:{}},Pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e0;function Rv(){if(e0)return Pt;e0=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,C={};function y(P,q,Ee){this.props=P,this.context=q,this.refs=C,this.updater=Ee||b}y.prototype.isReactComponent={},y.prototype.setState=function(P,q){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,q,"setState")},y.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function S(){}S.prototype=y.prototype;function R(P,q,Ee){this.props=P,this.context=q,this.refs=C,this.updater=Ee||b}var F=R.prototype=new S;F.constructor=R,E(F,y.prototype),F.isPureReactComponent=!0;var D=Array.isArray,I=Object.prototype.hasOwnProperty,L={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function N(P,q,Ee){var ee,le={},be=null,Ae=null;if(q!=null)for(ee in q.ref!==void 0&&(Ae=q.ref),q.key!==void 0&&(be=""+q.key),q)I.call(q,ee)&&!w.hasOwnProperty(ee)&&(le[ee]=q[ee]);var we=arguments.length-2;if(we===1)le.children=Ee;else if(1<we){for(var ze=Array(we),qe=0;qe<we;qe++)ze[qe]=arguments[qe+2];le.children=ze}if(P&&P.defaultProps)for(ee in we=P.defaultProps,we)le[ee]===void 0&&(le[ee]=we[ee]);return{$$typeof:s,type:P,key:be,ref:Ae,props:le,_owner:L.current}}function Z(P,q){return{$$typeof:s,type:P.type,key:q,ref:P.ref,props:P.props,_owner:P._owner}}function V(P){return typeof P=="object"&&P!==null&&P.$$typeof===s}function $(P){var q={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(Ee){return q[Ee]})}var z=/\/+/g;function B(P,q){return typeof P=="object"&&P!==null&&P.key!=null?$(""+P.key):q.toString(36)}function W(P,q,Ee,ee,le){var be=typeof P;(be==="undefined"||be==="boolean")&&(P=null);var Ae=!1;if(P===null)Ae=!0;else switch(be){case"string":case"number":Ae=!0;break;case"object":switch(P.$$typeof){case s:case e:Ae=!0}}if(Ae)return Ae=P,le=le(Ae),P=ee===""?"."+B(Ae,0):ee,D(le)?(Ee="",P!=null&&(Ee=P.replace(z,"$&/")+"/"),W(le,q,Ee,"",function(qe){return qe})):le!=null&&(V(le)&&(le=Z(le,Ee+(!le.key||Ae&&Ae.key===le.key?"":(""+le.key).replace(z,"$&/")+"/")+P)),q.push(le)),1;if(Ae=0,ee=ee===""?".":ee+":",D(P))for(var we=0;we<P.length;we++){be=P[we];var ze=ee+B(be,we);Ae+=W(be,q,Ee,ze,le)}else if(ze=_(P),typeof ze=="function")for(P=ze.call(P),we=0;!(be=P.next()).done;)be=be.value,ze=ee+B(be,we++),Ae+=W(be,q,Ee,ze,le);else if(be==="object")throw q=String(P),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return Ae}function j(P,q,Ee){if(P==null)return P;var ee=[],le=0;return W(P,ee,"","",function(be){return q.call(Ee,be,le++)}),ee}function ce(P){if(P._status===-1){var q=P._result;q=q(),q.then(function(Ee){(P._status===0||P._status===-1)&&(P._status=1,P._result=Ee)},function(Ee){(P._status===0||P._status===-1)&&(P._status=2,P._result=Ee)}),P._status===-1&&(P._status=0,P._result=q)}if(P._status===1)return P._result.default;throw P._result}var Q={current:null},Y={transition:null},X={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:Y,ReactCurrentOwner:L};function H(){throw Error("act(...) is not supported in production builds of React.")}return Pt.Children={map:j,forEach:function(P,q,Ee){j(P,function(){q.apply(this,arguments)},Ee)},count:function(P){var q=0;return j(P,function(){q++}),q},toArray:function(P){return j(P,function(q){return q})||[]},only:function(P){if(!V(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},Pt.Component=y,Pt.Fragment=t,Pt.Profiler=o,Pt.PureComponent=R,Pt.StrictMode=r,Pt.Suspense=d,Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,Pt.act=H,Pt.cloneElement=function(P,q,Ee){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var ee=E({},P.props),le=P.key,be=P.ref,Ae=P._owner;if(q!=null){if(q.ref!==void 0&&(be=q.ref,Ae=L.current),q.key!==void 0&&(le=""+q.key),P.type&&P.type.defaultProps)var we=P.type.defaultProps;for(ze in q)I.call(q,ze)&&!w.hasOwnProperty(ze)&&(ee[ze]=q[ze]===void 0&&we!==void 0?we[ze]:q[ze])}var ze=arguments.length-2;if(ze===1)ee.children=Ee;else if(1<ze){we=Array(ze);for(var qe=0;qe<ze;qe++)we[qe]=arguments[qe+2];ee.children=we}return{$$typeof:s,type:P.type,key:le,ref:be,props:ee,_owner:Ae}},Pt.createContext=function(P){return P={$$typeof:u,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:l,_context:P},P.Consumer=P},Pt.createElement=N,Pt.createFactory=function(P){var q=N.bind(null,P);return q.type=P,q},Pt.createRef=function(){return{current:null}},Pt.forwardRef=function(P){return{$$typeof:p,render:P}},Pt.isValidElement=V,Pt.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:ce}},Pt.memo=function(P,q){return{$$typeof:m,type:P,compare:q===void 0?null:q}},Pt.startTransition=function(P){var q=Y.transition;Y.transition={};try{P()}finally{Y.transition=q}},Pt.unstable_act=H,Pt.useCallback=function(P,q){return Q.current.useCallback(P,q)},Pt.useContext=function(P){return Q.current.useContext(P)},Pt.useDebugValue=function(){},Pt.useDeferredValue=function(P){return Q.current.useDeferredValue(P)},Pt.useEffect=function(P,q){return Q.current.useEffect(P,q)},Pt.useId=function(){return Q.current.useId()},Pt.useImperativeHandle=function(P,q,Ee){return Q.current.useImperativeHandle(P,q,Ee)},Pt.useInsertionEffect=function(P,q){return Q.current.useInsertionEffect(P,q)},Pt.useLayoutEffect=function(P,q){return Q.current.useLayoutEffect(P,q)},Pt.useMemo=function(P,q){return Q.current.useMemo(P,q)},Pt.useReducer=function(P,q,Ee){return Q.current.useReducer(P,q,Ee)},Pt.useRef=function(P){return Q.current.useRef(P)},Pt.useState=function(P){return Q.current.useState(P)},Pt.useSyncExternalStore=function(P,q,Ee){return Q.current.useSyncExternalStore(P,q,Ee)},Pt.useTransition=function(){return Q.current.useTransition()},Pt.version="18.3.1",Pt}var t0;function xf(){return t0||(t0=1,Wu.exports=Rv()),Wu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n0;function Nv(){if(n0)return Ka;n0=1;var s=xf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(p,d,m){var g,v={},_=null,b=null;m!==void 0&&(_=""+m),d.key!==void 0&&(_=""+d.key),d.ref!==void 0&&(b=d.ref);for(g in d)r.call(d,g)&&!l.hasOwnProperty(g)&&(v[g]=d[g]);if(p&&p.defaultProps)for(g in d=p.defaultProps,d)v[g]===void 0&&(v[g]=d[g]);return{$$typeof:e,type:p,key:_,ref:b,props:v,_owner:o.current}}return Ka.Fragment=t,Ka.jsx=u,Ka.jsxs=u,Ka}var i0;function Pv(){return i0||(i0=1,Vu.exports=Nv()),Vu.exports}var f=Pv(),Se=xf();const Dv=cm(Se);var _l={},ju={exports:{}},ri={},$u={exports:{}},Xu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r0;function Lv(){return r0||(r0=1,(function(s){function e(Y,X){var H=Y.length;Y.push(X);e:for(;0<H;){var P=H-1>>>1,q=Y[P];if(0<o(q,X))Y[P]=X,Y[H]=q,H=P;else break e}}function t(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var X=Y[0],H=Y.pop();if(H!==X){Y[0]=H;e:for(var P=0,q=Y.length,Ee=q>>>1;P<Ee;){var ee=2*(P+1)-1,le=Y[ee],be=ee+1,Ae=Y[be];if(0>o(le,H))be<q&&0>o(Ae,le)?(Y[P]=Ae,Y[be]=H,P=be):(Y[P]=le,Y[ee]=H,P=ee);else if(be<q&&0>o(Ae,H))Y[P]=Ae,Y[be]=H,P=be;else break e}}return X}function o(Y,X){var H=Y.sortIndex-X.sortIndex;return H!==0?H:Y.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,p=u.now();s.unstable_now=function(){return u.now()-p}}var d=[],m=[],g=1,v=null,_=3,b=!1,E=!1,C=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(Y){for(var X=t(m);X!==null;){if(X.callback===null)r(m);else if(X.startTime<=Y)r(m),X.sortIndex=X.expirationTime,e(d,X);else break;X=t(m)}}function D(Y){if(C=!1,F(Y),!E)if(t(d)!==null)E=!0,ce(I);else{var X=t(m);X!==null&&Q(D,X.startTime-Y)}}function I(Y,X){E=!1,C&&(C=!1,S(N),N=-1),b=!0;var H=_;try{for(F(X),v=t(d);v!==null&&(!(v.expirationTime>X)||Y&&!$());){var P=v.callback;if(typeof P=="function"){v.callback=null,_=v.priorityLevel;var q=P(v.expirationTime<=X);X=s.unstable_now(),typeof q=="function"?v.callback=q:v===t(d)&&r(d),F(X)}else r(d);v=t(d)}if(v!==null)var Ee=!0;else{var ee=t(m);ee!==null&&Q(D,ee.startTime-X),Ee=!1}return Ee}finally{v=null,_=H,b=!1}}var L=!1,w=null,N=-1,Z=5,V=-1;function $(){return!(s.unstable_now()-V<Z)}function z(){if(w!==null){var Y=s.unstable_now();V=Y;var X=!0;try{X=w(!0,Y)}finally{X?B():(L=!1,w=null)}}else L=!1}var B;if(typeof R=="function")B=function(){R(z)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,j=W.port2;W.port1.onmessage=z,B=function(){j.postMessage(null)}}else B=function(){y(z,0)};function ce(Y){w=Y,L||(L=!0,B())}function Q(Y,X){N=y(function(){Y(s.unstable_now())},X)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Y){Y.callback=null},s.unstable_continueExecution=function(){E||b||(E=!0,ce(I))},s.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<Y?Math.floor(1e3/Y):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function(Y){switch(_){case 1:case 2:case 3:var X=3;break;default:X=_}var H=_;_=X;try{return Y()}finally{_=H}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Y,X){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var H=_;_=Y;try{return X()}finally{_=H}},s.unstable_scheduleCallback=function(Y,X,H){var P=s.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?P+H:P):H=P,Y){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=H+q,Y={id:g++,callback:X,priorityLevel:Y,startTime:H,expirationTime:q,sortIndex:-1},H>P?(Y.sortIndex=H,e(m,Y),t(d)===null&&Y===t(m)&&(C?(S(N),N=-1):C=!0,Q(D,H-P))):(Y.sortIndex=q,e(d,Y),E||b||(E=!0,ce(I))),Y},s.unstable_shouldYield=$,s.unstable_wrapCallback=function(Y){var X=_;return function(){var H=_;_=X;try{return Y.apply(this,arguments)}finally{_=H}}}})(Xu)),Xu}var s0;function Iv(){return s0||(s0=1,$u.exports=Lv()),$u.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a0;function kv(){if(a0)return ri;a0=1;var s=xf(),e=Iv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function _(n){return d.call(v,n)?!0:d.call(g,n)?!1:m.test(n)?v[n]=!0:(g[n]=!0,!1)}function b(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,c){if(i===null||typeof i>"u"||b(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,a,c,h,x,A){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=x,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(S,R);y[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(S,R);y[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(S,R);y[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function F(n,i,a,c){var h=y.hasOwnProperty(i)?y[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,h,c)&&(a=null),c||h===null?_(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var D=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),L=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),$=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),Y=Symbol.iterator;function X(n){return n===null||typeof n!="object"?null:(n=Y&&n[Y]||n["@@iterator"],typeof n=="function"?n:null)}var H=Object.assign,P;function q(n){if(P===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);P=i&&i[1]||""}return`
`+P+n}var Ee=!1;function ee(n,i){if(!n||Ee)return"";Ee=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(xe){var c=xe}Reflect.construct(n,[],i)}else{try{i.call()}catch(xe){c=xe}n.call(i.prototype)}else{try{throw Error()}catch(xe){c=xe}n()}}catch(xe){if(xe&&c&&typeof xe.stack=="string"){for(var h=xe.stack.split(`
`),x=c.stack.split(`
`),A=h.length-1,G=x.length-1;1<=A&&0<=G&&h[A]!==x[G];)G--;for(;1<=A&&0<=G;A--,G--)if(h[A]!==x[G]){if(A!==1||G!==1)do if(A--,G--,0>G||h[A]!==x[G]){var J=`
`+h[A].replace(" at new "," at ");return n.displayName&&J.includes("<anonymous>")&&(J=J.replace("<anonymous>",n.displayName)),J}while(1<=A&&0<=G);break}}}finally{Ee=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?q(n):""}function le(n){switch(n.tag){case 5:return q(n.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return n=ee(n.type,!1),n;case 11:return n=ee(n.type.render,!1),n;case 1:return n=ee(n.type,!0),n;default:return""}}function be(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case w:return"Fragment";case L:return"Portal";case Z:return"Profiler";case N:return"StrictMode";case B:return"Suspense";case W:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case $:return(n.displayName||"Context")+".Consumer";case V:return(n._context.displayName||"Context")+".Provider";case z:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case j:return i=n.displayName||null,i!==null?i:be(n.type)||"Memo";case ce:i=n._payload,n=n._init;try{return be(n(i))}catch{}}return null}function Ae(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(i);case 8:return i===N?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function qe(n){var i=ze(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,x=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(A){c=""+A,x.call(this,A)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(A){c=""+A},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ke(n){n._valueTracker||(n._valueTracker=qe(n))}function Te(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=ze(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Ue(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Xe(n,i){var a=i.checked;return H({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function mt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=we(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function me(n,i){i=i.checked,i!=null&&F(n,"checked",i,!1)}function yt(n,i){me(n,i);var a=we(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?on(n,i.type,a):i.hasOwnProperty("defaultValue")&&on(n,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Lt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function on(n,i,a){(i!=="number"||Ue(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ut=Array.isArray;function Zt(n,i,a,c){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+we(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function jt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return H({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ln(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Ut(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:we(a)}}function K(n,i){var a=we(i.value),c=we(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Ft(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function _t(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function It(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?_t(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var he,Mt=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(he=he||document.createElement("div"),he.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=he.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function tt(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var rt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},k=["Webkit","ms","Moz","O"];Object.keys(rt).forEach(function(n){k.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),rt[i]=rt[n]})});function T(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||rt.hasOwnProperty(n)&&rt[n]?(""+i).trim():i+"px"}function se(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=T(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var Pe=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Me(n,i){if(i){if(Pe[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Fe(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ge=null;function ve(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ye=null,_e=null,U=null;function ae(n){if(n=ka(n)){if(typeof ye!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Io(i),ye(n.stateNode,n.type,i))}}function oe(n){_e?U?U.push(n):U=[n]:_e=n}function Re(){if(_e){var n=_e,i=U;if(U=_e=null,ae(n),i)for(n=0;n<i.length;n++)ae(i[n])}}function Ce(n,i){return n(i)}function De(){}var $e=!1;function at(n,i,a){if($e)return n(i,a);$e=!0;try{return Ce(n,i,a)}finally{$e=!1,(_e!==null||U!==null)&&(De(),Re())}}function Ne(n,i){var a=n.stateNode;if(a===null)return null;var c=Io(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Qe=!1;if(p)try{var ot={};Object.defineProperty(ot,"passive",{get:function(){Qe=!0}}),window.addEventListener("test",ot,ot),window.removeEventListener("test",ot,ot)}catch{Qe=!1}function Be(n,i,a,c,h,x,A,G,J){var xe=Array.prototype.slice.call(arguments,3);try{i.apply(a,xe)}catch(Ie){this.onError(Ie)}}var ft=!1,vt=null,tn=!1,bn=null,mn={onError:function(n){ft=!0,vt=n}};function St(n,i,a,c,h,x,A,G,J){ft=!1,vt=null,Be.apply(mn,arguments)}function pt(n,i,a,c,h,x,A,G,J){if(St.apply(this,arguments),ft){if(ft){var xe=vt;ft=!1,vt=null}else throw Error(t(198));tn||(tn=!0,bn=xe)}}function Et(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Yt(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function $t(n){if(Et(n)!==n)throw Error(t(188))}function Fn(n){var i=n.alternate;if(!i){if(i=Et(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var h=a.return;if(h===null)break;var x=h.alternate;if(x===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===x.child){for(x=h.child;x;){if(x===a)return $t(h),n;if(x===c)return $t(h),i;x=x.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=x;else{for(var A=!1,G=h.child;G;){if(G===a){A=!0,a=h,c=x;break}if(G===c){A=!0,c=h,a=x;break}G=G.sibling}if(!A){for(G=x.child;G;){if(G===a){A=!0,a=x,c=h;break}if(G===c){A=!0,c=x,a=h;break}G=G.sibling}if(!A)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Yn(n){return n=Fn(n),n!==null?zn(n):null}function zn(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=zn(n);if(i!==null)return i;n=n.sibling}return null}var qn=e.unstable_scheduleCallback,rr=e.unstable_cancelCallback,Ti=e.unstable_shouldYield,rs=e.unstable_requestPaint,Kt=e.unstable_now,sr=e.unstable_getCurrentPriorityLevel,ar=e.unstable_ImmediatePriority,Ar=e.unstable_UserBlockingPriority,ge=e.unstable_NormalPriority,Je=e.unstable_LowPriority,M=e.unstable_IdlePriority,O=null,ne=null;function ie(n){if(ne&&typeof ne.onCommitFiberRoot=="function")try{ne.onCommitFiberRoot(O,n,void 0,(n.current.flags&128)===128)}catch{}}var re=Math.clz32?Math.clz32:He,Ve=Math.log,Ke=Math.LN2;function He(n){return n>>>=0,n===0?32:31-(Ve(n)/Ke|0)|0}var We=64,nt=4194304;function fe(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ht(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,x=n.pingedLanes,A=a&268435455;if(A!==0){var G=A&~h;G!==0?c=fe(G):(x&=A,x!==0&&(c=fe(x)))}else A=a&~h,A!==0?c=fe(A):x!==0&&(c=fe(x));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,x=i&-i,h>=x||h===16&&(x&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-re(i),h=1<<a,c|=n[a],i&=~h;return c}function Ye(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function At(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,x=n.pendingLanes;0<x;){var A=31-re(x),G=1<<A,J=h[A];J===-1?((G&a)===0||(G&c)!==0)&&(h[A]=Ye(G,i)):J<=i&&(n.expiredLanes|=G),x&=~G}}function Jt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Gt(){var n=We;return We<<=1,(We&4194240)===0&&(We=64),n}function Bt(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function nn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-re(i),n[i]=a}function it(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-re(a),x=1<<h;i[h]=0,c[h]=-1,n[h]=-1,a&=~x}}function gn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-re(a),h=1<<c;h&i|n[c]&i&&(n[c]|=i),a&=~h}}var ct=0;function gi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var xn,Vi,oi,xi,Nt,cn=!1,On=[],Vt=null,Qt=null,An=null,Cr=new Map,ya=new Map,Rr=[],qg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ff(n,i){switch(n){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Qt=null;break;case"mouseover":case"mouseout":An=null;break;case"pointerover":case"pointerout":Cr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ya.delete(i.pointerId)}}function Sa(n,i,a,c,h,x){return n===null||n.nativeEvent!==x?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:x,targetContainers:[h]},i!==null&&(i=ka(i),i!==null&&Vi(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function Kg(n,i,a,c,h){switch(i){case"focusin":return Vt=Sa(Vt,n,i,a,c,h),!0;case"dragenter":return Qt=Sa(Qt,n,i,a,c,h),!0;case"mouseover":return An=Sa(An,n,i,a,c,h),!0;case"pointerover":var x=h.pointerId;return Cr.set(x,Sa(Cr.get(x)||null,n,i,a,c,h)),!0;case"gotpointercapture":return x=h.pointerId,ya.set(x,Sa(ya.get(x)||null,n,i,a,c,h)),!0}return!1}function zf(n){var i=ss(n.target);if(i!==null){var a=Et(i);if(a!==null){if(i=a.tag,i===13){if(i=Yt(a),i!==null){n.blockedOn=i,Nt(n.priority,function(){oi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function yo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=gc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ge=c,a.target.dispatchEvent(c),Ge=null}else return i=ka(a),i!==null&&Vi(i),n.blockedOn=a,!1;i.shift()}return!0}function Of(n,i,a){yo(n)&&a.delete(i)}function Zg(){cn=!1,Vt!==null&&yo(Vt)&&(Vt=null),Qt!==null&&yo(Qt)&&(Qt=null),An!==null&&yo(An)&&(An=null),Cr.forEach(Of),ya.forEach(Of)}function ba(n,i){n.blockedOn===i&&(n.blockedOn=null,cn||(cn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Zg)))}function wa(n){function i(h){return ba(h,n)}if(0<On.length){ba(On[0],n);for(var a=1;a<On.length;a++){var c=On[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Vt!==null&&ba(Vt,n),Qt!==null&&ba(Qt,n),An!==null&&ba(An,n),Cr.forEach(i),ya.forEach(i),a=0;a<Rr.length;a++)c=Rr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Rr.length&&(a=Rr[0],a.blockedOn===null);)zf(a),a.blockedOn===null&&Rr.shift()}var Cs=D.ReactCurrentBatchConfig,So=!0;function Jg(n,i,a,c){var h=ct,x=Cs.transition;Cs.transition=null;try{ct=1,mc(n,i,a,c)}finally{ct=h,Cs.transition=x}}function Qg(n,i,a,c){var h=ct,x=Cs.transition;Cs.transition=null;try{ct=4,mc(n,i,a,c)}finally{ct=h,Cs.transition=x}}function mc(n,i,a,c){if(So){var h=gc(n,i,a,c);if(h===null)Lc(n,i,c,bo,a),Ff(n,c);else if(Kg(h,n,i,a,c))c.stopPropagation();else if(Ff(n,c),i&4&&-1<qg.indexOf(n)){for(;h!==null;){var x=ka(h);if(x!==null&&xn(x),x=gc(n,i,a,c),x===null&&Lc(n,i,c,bo,a),x===h)break;h=x}h!==null&&c.stopPropagation()}else Lc(n,i,c,null,a)}}var bo=null;function gc(n,i,a,c){if(bo=null,n=ve(c),n=ss(n),n!==null)if(i=Et(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Yt(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return bo=n,null}function Bf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sr()){case ar:return 1;case Ar:return 4;case ge:case Je:return 16;case M:return 536870912;default:return 16}default:return 16}}var Nr=null,xc=null,wo=null;function Hf(){if(wo)return wo;var n,i=xc,a=i.length,c,h="value"in Nr?Nr.value:Nr.textContent,x=h.length;for(n=0;n<a&&i[n]===h[n];n++);var A=a-n;for(c=1;c<=A&&i[a-c]===h[x-c];c++);return wo=h.slice(n,1<c?1-c:void 0)}function Mo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Eo(){return!0}function Gf(){return!1}function li(n){function i(a,c,h,x,A){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=x,this.target=A,this.currentTarget=null;for(var G in n)n.hasOwnProperty(G)&&(a=n[G],this[G]=a?a(x):x[G]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Eo:Gf,this.isPropagationStopped=Gf,this}return H(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Eo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Eo)},persist:function(){},isPersistent:Eo}),i}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vc=li(Rs),Ma=H({},Rs,{view:0,detail:0}),ex=li(Ma),_c,yc,Ea,To=H({},Ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ea&&(Ea&&n.type==="mousemove"?(_c=n.screenX-Ea.screenX,yc=n.screenY-Ea.screenY):yc=_c=0,Ea=n),_c)},movementY:function(n){return"movementY"in n?n.movementY:yc}}),Vf=li(To),tx=H({},To,{dataTransfer:0}),nx=li(tx),ix=H({},Ma,{relatedTarget:0}),Sc=li(ix),rx=H({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),sx=li(rx),ax=H({},Rs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ox=li(ax),lx=H({},Rs,{data:0}),Wf=li(lx),cx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ux={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fx(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=dx[n])?!!i[n]:!1}function bc(){return fx}var hx=H({},Ma,{key:function(n){if(n.key){var i=cx[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Mo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ux[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bc,charCode:function(n){return n.type==="keypress"?Mo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Mo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),px=li(hx),mx=H({},To,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jf=li(mx),gx=H({},Ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bc}),xx=li(gx),vx=H({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),_x=li(vx),yx=H({},To,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Sx=li(yx),bx=[9,13,27,32],wc=p&&"CompositionEvent"in window,Ta=null;p&&"documentMode"in document&&(Ta=document.documentMode);var wx=p&&"TextEvent"in window&&!Ta,$f=p&&(!wc||Ta&&8<Ta&&11>=Ta),Xf=" ",Yf=!1;function qf(n,i){switch(n){case"keyup":return bx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ns=!1;function Mx(n,i){switch(n){case"compositionend":return Kf(i);case"keypress":return i.which!==32?null:(Yf=!0,Xf);case"textInput":return n=i.data,n===Xf&&Yf?null:n;default:return null}}function Ex(n,i){if(Ns)return n==="compositionend"||!wc&&qf(n,i)?(n=Hf(),wo=xc=Nr=null,Ns=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return $f&&i.locale!=="ko"?null:i.data;default:return null}}var Tx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Tx[n.type]:i==="textarea"}function Jf(n,i,a,c){oe(c),i=Po(i,"onChange"),0<i.length&&(a=new vc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Aa=null,Ca=null;function Ax(n){gh(n,0)}function Ao(n){var i=ks(n);if(Te(i))return n}function Cx(n,i){if(n==="change")return i}var Qf=!1;if(p){var Mc;if(p){var Ec="oninput"in document;if(!Ec){var eh=document.createElement("div");eh.setAttribute("oninput","return;"),Ec=typeof eh.oninput=="function"}Mc=Ec}else Mc=!1;Qf=Mc&&(!document.documentMode||9<document.documentMode)}function th(){Aa&&(Aa.detachEvent("onpropertychange",nh),Ca=Aa=null)}function nh(n){if(n.propertyName==="value"&&Ao(Ca)){var i=[];Jf(i,Ca,n,ve(n)),at(Ax,i)}}function Rx(n,i,a){n==="focusin"?(th(),Aa=i,Ca=a,Aa.attachEvent("onpropertychange",nh)):n==="focusout"&&th()}function Nx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ao(Ca)}function Px(n,i){if(n==="click")return Ao(i)}function Dx(n,i){if(n==="input"||n==="change")return Ao(i)}function Lx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ai=typeof Object.is=="function"?Object.is:Lx;function Ra(n,i){if(Ai(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!d.call(i,h)||!Ai(n[h],i[h]))return!1}return!0}function ih(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function rh(n,i){var a=ih(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ih(a)}}function sh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?sh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function ah(){for(var n=window,i=Ue();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Ue(n.document)}return i}function Tc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Ix(n){var i=ah(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&sh(a.ownerDocument.documentElement,a)){if(c!==null&&Tc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,x=Math.min(c.start,h);c=c.end===void 0?x:Math.min(c.end,h),!n.extend&&x>c&&(h=c,c=x,x=h),h=rh(a,x);var A=rh(a,c);h&&A&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),x>c?(n.addRange(i),n.extend(A.node,A.offset)):(i.setEnd(A.node,A.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var kx=p&&"documentMode"in document&&11>=document.documentMode,Ps=null,Ac=null,Na=null,Cc=!1;function oh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cc||Ps==null||Ps!==Ue(c)||(c=Ps,"selectionStart"in c&&Tc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Na&&Ra(Na,c)||(Na=c,c=Po(Ac,"onSelect"),0<c.length&&(i=new vc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ps)))}function Co(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ds={animationend:Co("Animation","AnimationEnd"),animationiteration:Co("Animation","AnimationIteration"),animationstart:Co("Animation","AnimationStart"),transitionend:Co("Transition","TransitionEnd")},Rc={},lh={};p&&(lh=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Ro(n){if(Rc[n])return Rc[n];if(!Ds[n])return n;var i=Ds[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in lh)return Rc[n]=i[a];return n}var ch=Ro("animationend"),uh=Ro("animationiteration"),dh=Ro("animationstart"),fh=Ro("transitionend"),hh=new Map,ph="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(n,i){hh.set(n,i),l(i,[n])}for(var Nc=0;Nc<ph.length;Nc++){var Pc=ph[Nc],Ux=Pc.toLowerCase(),Fx=Pc[0].toUpperCase()+Pc.slice(1);Pr(Ux,"on"+Fx)}Pr(ch,"onAnimationEnd"),Pr(uh,"onAnimationIteration"),Pr(dh,"onAnimationStart"),Pr("dblclick","onDoubleClick"),Pr("focusin","onFocus"),Pr("focusout","onBlur"),Pr(fh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pa));function mh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,pt(c,i,void 0,n),n.currentTarget=null}function gh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var x=void 0;if(i)for(var A=c.length-1;0<=A;A--){var G=c[A],J=G.instance,xe=G.currentTarget;if(G=G.listener,J!==x&&h.isPropagationStopped())break e;mh(h,G,xe),x=J}else for(A=0;A<c.length;A++){if(G=c[A],J=G.instance,xe=G.currentTarget,G=G.listener,J!==x&&h.isPropagationStopped())break e;mh(h,G,xe),x=J}}}if(tn)throw n=bn,tn=!1,bn=null,n}function rn(n,i){var a=i[Oc];a===void 0&&(a=i[Oc]=new Set);var c=n+"__bubble";a.has(c)||(xh(i,n,2,!1),a.add(c))}function Dc(n,i,a){var c=0;i&&(c|=4),xh(a,n,c,i)}var No="_reactListening"+Math.random().toString(36).slice(2);function Da(n){if(!n[No]){n[No]=!0,r.forEach(function(a){a!=="selectionchange"&&(zx.has(a)||Dc(a,!1,n),Dc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[No]||(i[No]=!0,Dc("selectionchange",!1,i))}}function xh(n,i,a,c){switch(Bf(i)){case 1:var h=Jg;break;case 4:h=Qg;break;default:h=mc}a=h.bind(null,i,a,n),h=void 0,!Qe||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function Lc(n,i,a,c,h){var x=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var A=c.tag;if(A===3||A===4){var G=c.stateNode.containerInfo;if(G===h||G.nodeType===8&&G.parentNode===h)break;if(A===4)for(A=c.return;A!==null;){var J=A.tag;if((J===3||J===4)&&(J=A.stateNode.containerInfo,J===h||J.nodeType===8&&J.parentNode===h))return;A=A.return}for(;G!==null;){if(A=ss(G),A===null)return;if(J=A.tag,J===5||J===6){c=x=A;continue e}G=G.parentNode}}c=c.return}at(function(){var xe=x,Ie=ve(a),Oe=[];e:{var Le=hh.get(n);if(Le!==void 0){var et=vc,lt=n;switch(n){case"keypress":if(Mo(a)===0)break e;case"keydown":case"keyup":et=px;break;case"focusin":lt="focus",et=Sc;break;case"focusout":lt="blur",et=Sc;break;case"beforeblur":case"afterblur":et=Sc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":et=Vf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":et=nx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":et=xx;break;case ch:case uh:case dh:et=sx;break;case fh:et=_x;break;case"scroll":et=ex;break;case"wheel":et=Sx;break;case"copy":case"cut":case"paste":et=ox;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":et=jf}var ut=(i&4)!==0,vn=!ut&&n==="scroll",ue=ut?Le!==null?Le+"Capture":null:Le;ut=[];for(var te=xe,de;te!==null;){de=te;var je=de.stateNode;if(de.tag===5&&je!==null&&(de=je,ue!==null&&(je=Ne(te,ue),je!=null&&ut.push(La(te,je,de)))),vn)break;te=te.return}0<ut.length&&(Le=new et(Le,lt,null,a,Ie),Oe.push({event:Le,listeners:ut}))}}if((i&7)===0){e:{if(Le=n==="mouseover"||n==="pointerover",et=n==="mouseout"||n==="pointerout",Le&&a!==Ge&&(lt=a.relatedTarget||a.fromElement)&&(ss(lt)||lt[or]))break e;if((et||Le)&&(Le=Ie.window===Ie?Ie:(Le=Ie.ownerDocument)?Le.defaultView||Le.parentWindow:window,et?(lt=a.relatedTarget||a.toElement,et=xe,lt=lt?ss(lt):null,lt!==null&&(vn=Et(lt),lt!==vn||lt.tag!==5&&lt.tag!==6)&&(lt=null)):(et=null,lt=xe),et!==lt)){if(ut=Vf,je="onMouseLeave",ue="onMouseEnter",te="mouse",(n==="pointerout"||n==="pointerover")&&(ut=jf,je="onPointerLeave",ue="onPointerEnter",te="pointer"),vn=et==null?Le:ks(et),de=lt==null?Le:ks(lt),Le=new ut(je,te+"leave",et,a,Ie),Le.target=vn,Le.relatedTarget=de,je=null,ss(Ie)===xe&&(ut=new ut(ue,te+"enter",lt,a,Ie),ut.target=de,ut.relatedTarget=vn,je=ut),vn=je,et&&lt)t:{for(ut=et,ue=lt,te=0,de=ut;de;de=Ls(de))te++;for(de=0,je=ue;je;je=Ls(je))de++;for(;0<te-de;)ut=Ls(ut),te--;for(;0<de-te;)ue=Ls(ue),de--;for(;te--;){if(ut===ue||ue!==null&&ut===ue.alternate)break t;ut=Ls(ut),ue=Ls(ue)}ut=null}else ut=null;et!==null&&vh(Oe,Le,et,ut,!1),lt!==null&&vn!==null&&vh(Oe,vn,lt,ut,!0)}}e:{if(Le=xe?ks(xe):window,et=Le.nodeName&&Le.nodeName.toLowerCase(),et==="select"||et==="input"&&Le.type==="file")var dt=Cx;else if(Zf(Le))if(Qf)dt=Dx;else{dt=Nx;var gt=Rx}else(et=Le.nodeName)&&et.toLowerCase()==="input"&&(Le.type==="checkbox"||Le.type==="radio")&&(dt=Px);if(dt&&(dt=dt(n,xe))){Jf(Oe,dt,a,Ie);break e}gt&&gt(n,Le,xe),n==="focusout"&&(gt=Le._wrapperState)&&gt.controlled&&Le.type==="number"&&on(Le,"number",Le.value)}switch(gt=xe?ks(xe):window,n){case"focusin":(Zf(gt)||gt.contentEditable==="true")&&(Ps=gt,Ac=xe,Na=null);break;case"focusout":Na=Ac=Ps=null;break;case"mousedown":Cc=!0;break;case"contextmenu":case"mouseup":case"dragend":Cc=!1,oh(Oe,a,Ie);break;case"selectionchange":if(kx)break;case"keydown":case"keyup":oh(Oe,a,Ie)}var xt;if(wc)e:{switch(n){case"compositionstart":var bt="onCompositionStart";break e;case"compositionend":bt="onCompositionEnd";break e;case"compositionupdate":bt="onCompositionUpdate";break e}bt=void 0}else Ns?qf(n,a)&&(bt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(bt="onCompositionStart");bt&&($f&&a.locale!=="ko"&&(Ns||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&Ns&&(xt=Hf()):(Nr=Ie,xc="value"in Nr?Nr.value:Nr.textContent,Ns=!0)),gt=Po(xe,bt),0<gt.length&&(bt=new Wf(bt,n,null,a,Ie),Oe.push({event:bt,listeners:gt}),xt?bt.data=xt:(xt=Kf(a),xt!==null&&(bt.data=xt)))),(xt=wx?Mx(n,a):Ex(n,a))&&(xe=Po(xe,"onBeforeInput"),0<xe.length&&(Ie=new Wf("onBeforeInput","beforeinput",null,a,Ie),Oe.push({event:Ie,listeners:xe}),Ie.data=xt))}gh(Oe,i)})}function La(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Po(n,i){for(var a=i+"Capture",c=[];n!==null;){var h=n,x=h.stateNode;h.tag===5&&x!==null&&(h=x,x=Ne(n,a),x!=null&&c.unshift(La(n,x,h)),x=Ne(n,i),x!=null&&c.push(La(n,x,h))),n=n.return}return c}function Ls(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function vh(n,i,a,c,h){for(var x=i._reactName,A=[];a!==null&&a!==c;){var G=a,J=G.alternate,xe=G.stateNode;if(J!==null&&J===c)break;G.tag===5&&xe!==null&&(G=xe,h?(J=Ne(a,x),J!=null&&A.unshift(La(a,J,G))):h||(J=Ne(a,x),J!=null&&A.push(La(a,J,G)))),a=a.return}A.length!==0&&n.push({event:i,listeners:A})}var Ox=/\r\n?/g,Bx=/\u0000|\uFFFD/g;function _h(n){return(typeof n=="string"?n:""+n).replace(Ox,`
`).replace(Bx,"")}function Do(n,i,a){if(i=_h(i),_h(n)!==i&&a)throw Error(t(425))}function Lo(){}var Ic=null,kc=null;function Uc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Fc=typeof setTimeout=="function"?setTimeout:void 0,Hx=typeof clearTimeout=="function"?clearTimeout:void 0,yh=typeof Promise=="function"?Promise:void 0,Gx=typeof queueMicrotask=="function"?queueMicrotask:typeof yh<"u"?function(n){return yh.resolve(null).then(n).catch(Vx)}:Fc;function Vx(n){setTimeout(function(){throw n})}function zc(n,i){var a=i,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),wa(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);wa(i)}function Dr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Sh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Is=Math.random().toString(36).slice(2),Wi="__reactFiber$"+Is,Ia="__reactProps$"+Is,or="__reactContainer$"+Is,Oc="__reactEvents$"+Is,Wx="__reactListeners$"+Is,jx="__reactHandles$"+Is;function ss(n){var i=n[Wi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[or]||a[Wi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Sh(n);n!==null;){if(a=n[Wi])return a;n=Sh(n)}return i}n=a,a=n.parentNode}return null}function ka(n){return n=n[Wi]||n[or],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ks(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Io(n){return n[Ia]||null}var Bc=[],Us=-1;function Lr(n){return{current:n}}function sn(n){0>Us||(n.current=Bc[Us],Bc[Us]=null,Us--)}function en(n,i){Us++,Bc[Us]=n.current,n.current=i}var Ir={},Bn=Lr(Ir),Qn=Lr(!1),as=Ir;function Fs(n,i){var a=n.type.contextTypes;if(!a)return Ir;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},x;for(x in a)h[x]=i[x];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function ei(n){return n=n.childContextTypes,n!=null}function ko(){sn(Qn),sn(Bn)}function bh(n,i,a){if(Bn.current!==Ir)throw Error(t(168));en(Bn,i),en(Qn,a)}function wh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,Ae(n)||"Unknown",h));return H({},a,c)}function Uo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ir,as=Bn.current,en(Bn,n),en(Qn,Qn.current),!0}function Mh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=wh(n,i,as),c.__reactInternalMemoizedMergedChildContext=n,sn(Qn),sn(Bn),en(Bn,n)):sn(Qn),en(Qn,a)}var lr=null,Fo=!1,Hc=!1;function Eh(n){lr===null?lr=[n]:lr.push(n)}function $x(n){Fo=!0,Eh(n)}function kr(){if(!Hc&&lr!==null){Hc=!0;var n=0,i=ct;try{var a=lr;for(ct=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}lr=null,Fo=!1}catch(h){throw lr!==null&&(lr=lr.slice(n+1)),qn(ar,kr),h}finally{ct=i,Hc=!1}}return null}var zs=[],Os=0,zo=null,Oo=0,vi=[],_i=0,os=null,cr=1,ur="";function ls(n,i){zs[Os++]=Oo,zs[Os++]=zo,zo=n,Oo=i}function Th(n,i,a){vi[_i++]=cr,vi[_i++]=ur,vi[_i++]=os,os=n;var c=cr;n=ur;var h=32-re(c)-1;c&=~(1<<h),a+=1;var x=32-re(i)+h;if(30<x){var A=h-h%5;x=(c&(1<<A)-1).toString(32),c>>=A,h-=A,cr=1<<32-re(i)+h|a<<h|c,ur=x+n}else cr=1<<x|a<<h|c,ur=n}function Gc(n){n.return!==null&&(ls(n,1),Th(n,1,0))}function Vc(n){for(;n===zo;)zo=zs[--Os],zs[Os]=null,Oo=zs[--Os],zs[Os]=null;for(;n===os;)os=vi[--_i],vi[_i]=null,ur=vi[--_i],vi[_i]=null,cr=vi[--_i],vi[_i]=null}var ci=null,ui=null,an=!1,Ci=null;function Ah(n,i){var a=wi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Ch(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ci=n,ui=Dr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ci=n,ui=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=os!==null?{id:cr,overflow:ur}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=wi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,ci=n,ui=null,!0):!1;default:return!1}}function Wc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function jc(n){if(an){var i=ui;if(i){var a=i;if(!Ch(n,i)){if(Wc(n))throw Error(t(418));i=Dr(a.nextSibling);var c=ci;i&&Ch(n,i)?Ah(c,a):(n.flags=n.flags&-4097|2,an=!1,ci=n)}}else{if(Wc(n))throw Error(t(418));n.flags=n.flags&-4097|2,an=!1,ci=n}}}function Rh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ci=n}function Bo(n){if(n!==ci)return!1;if(!an)return Rh(n),an=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Uc(n.type,n.memoizedProps)),i&&(i=ui)){if(Wc(n))throw Nh(),Error(t(418));for(;i;)Ah(n,i),i=Dr(i.nextSibling)}if(Rh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){ui=Dr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}ui=null}}else ui=ci?Dr(n.stateNode.nextSibling):null;return!0}function Nh(){for(var n=ui;n;)n=Dr(n.nextSibling)}function Bs(){ui=ci=null,an=!1}function $c(n){Ci===null?Ci=[n]:Ci.push(n)}var Xx=D.ReactCurrentBatchConfig;function Ua(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,x=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===x?i.ref:(i=function(A){var G=h.refs;A===null?delete G[x]:G[x]=A},i._stringRef=x,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ho(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Ph(n){var i=n._init;return i(n._payload)}function Dh(n){function i(ue,te){if(n){var de=ue.deletions;de===null?(ue.deletions=[te],ue.flags|=16):de.push(te)}}function a(ue,te){if(!n)return null;for(;te!==null;)i(ue,te),te=te.sibling;return null}function c(ue,te){for(ue=new Map;te!==null;)te.key!==null?ue.set(te.key,te):ue.set(te.index,te),te=te.sibling;return ue}function h(ue,te){return ue=Vr(ue,te),ue.index=0,ue.sibling=null,ue}function x(ue,te,de){return ue.index=de,n?(de=ue.alternate,de!==null?(de=de.index,de<te?(ue.flags|=2,te):de):(ue.flags|=2,te)):(ue.flags|=1048576,te)}function A(ue){return n&&ue.alternate===null&&(ue.flags|=2),ue}function G(ue,te,de,je){return te===null||te.tag!==6?(te=Fu(de,ue.mode,je),te.return=ue,te):(te=h(te,de),te.return=ue,te)}function J(ue,te,de,je){var dt=de.type;return dt===w?Ie(ue,te,de.props.children,je,de.key):te!==null&&(te.elementType===dt||typeof dt=="object"&&dt!==null&&dt.$$typeof===ce&&Ph(dt)===te.type)?(je=h(te,de.props),je.ref=Ua(ue,te,de),je.return=ue,je):(je=dl(de.type,de.key,de.props,null,ue.mode,je),je.ref=Ua(ue,te,de),je.return=ue,je)}function xe(ue,te,de,je){return te===null||te.tag!==4||te.stateNode.containerInfo!==de.containerInfo||te.stateNode.implementation!==de.implementation?(te=zu(de,ue.mode,je),te.return=ue,te):(te=h(te,de.children||[]),te.return=ue,te)}function Ie(ue,te,de,je,dt){return te===null||te.tag!==7?(te=gs(de,ue.mode,je,dt),te.return=ue,te):(te=h(te,de),te.return=ue,te)}function Oe(ue,te,de){if(typeof te=="string"&&te!==""||typeof te=="number")return te=Fu(""+te,ue.mode,de),te.return=ue,te;if(typeof te=="object"&&te!==null){switch(te.$$typeof){case I:return de=dl(te.type,te.key,te.props,null,ue.mode,de),de.ref=Ua(ue,null,te),de.return=ue,de;case L:return te=zu(te,ue.mode,de),te.return=ue,te;case ce:var je=te._init;return Oe(ue,je(te._payload),de)}if(Ut(te)||X(te))return te=gs(te,ue.mode,de,null),te.return=ue,te;Ho(ue,te)}return null}function Le(ue,te,de,je){var dt=te!==null?te.key:null;if(typeof de=="string"&&de!==""||typeof de=="number")return dt!==null?null:G(ue,te,""+de,je);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case I:return de.key===dt?J(ue,te,de,je):null;case L:return de.key===dt?xe(ue,te,de,je):null;case ce:return dt=de._init,Le(ue,te,dt(de._payload),je)}if(Ut(de)||X(de))return dt!==null?null:Ie(ue,te,de,je,null);Ho(ue,de)}return null}function et(ue,te,de,je,dt){if(typeof je=="string"&&je!==""||typeof je=="number")return ue=ue.get(de)||null,G(te,ue,""+je,dt);if(typeof je=="object"&&je!==null){switch(je.$$typeof){case I:return ue=ue.get(je.key===null?de:je.key)||null,J(te,ue,je,dt);case L:return ue=ue.get(je.key===null?de:je.key)||null,xe(te,ue,je,dt);case ce:var gt=je._init;return et(ue,te,de,gt(je._payload),dt)}if(Ut(je)||X(je))return ue=ue.get(de)||null,Ie(te,ue,je,dt,null);Ho(te,je)}return null}function lt(ue,te,de,je){for(var dt=null,gt=null,xt=te,bt=te=0,Nn=null;xt!==null&&bt<de.length;bt++){xt.index>bt?(Nn=xt,xt=null):Nn=xt.sibling;var Wt=Le(ue,xt,de[bt],je);if(Wt===null){xt===null&&(xt=Nn);break}n&&xt&&Wt.alternate===null&&i(ue,xt),te=x(Wt,te,bt),gt===null?dt=Wt:gt.sibling=Wt,gt=Wt,xt=Nn}if(bt===de.length)return a(ue,xt),an&&ls(ue,bt),dt;if(xt===null){for(;bt<de.length;bt++)xt=Oe(ue,de[bt],je),xt!==null&&(te=x(xt,te,bt),gt===null?dt=xt:gt.sibling=xt,gt=xt);return an&&ls(ue,bt),dt}for(xt=c(ue,xt);bt<de.length;bt++)Nn=et(xt,ue,bt,de[bt],je),Nn!==null&&(n&&Nn.alternate!==null&&xt.delete(Nn.key===null?bt:Nn.key),te=x(Nn,te,bt),gt===null?dt=Nn:gt.sibling=Nn,gt=Nn);return n&&xt.forEach(function(Wr){return i(ue,Wr)}),an&&ls(ue,bt),dt}function ut(ue,te,de,je){var dt=X(de);if(typeof dt!="function")throw Error(t(150));if(de=dt.call(de),de==null)throw Error(t(151));for(var gt=dt=null,xt=te,bt=te=0,Nn=null,Wt=de.next();xt!==null&&!Wt.done;bt++,Wt=de.next()){xt.index>bt?(Nn=xt,xt=null):Nn=xt.sibling;var Wr=Le(ue,xt,Wt.value,je);if(Wr===null){xt===null&&(xt=Nn);break}n&&xt&&Wr.alternate===null&&i(ue,xt),te=x(Wr,te,bt),gt===null?dt=Wr:gt.sibling=Wr,gt=Wr,xt=Nn}if(Wt.done)return a(ue,xt),an&&ls(ue,bt),dt;if(xt===null){for(;!Wt.done;bt++,Wt=de.next())Wt=Oe(ue,Wt.value,je),Wt!==null&&(te=x(Wt,te,bt),gt===null?dt=Wt:gt.sibling=Wt,gt=Wt);return an&&ls(ue,bt),dt}for(xt=c(ue,xt);!Wt.done;bt++,Wt=de.next())Wt=et(xt,ue,bt,Wt.value,je),Wt!==null&&(n&&Wt.alternate!==null&&xt.delete(Wt.key===null?bt:Wt.key),te=x(Wt,te,bt),gt===null?dt=Wt:gt.sibling=Wt,gt=Wt);return n&&xt.forEach(function(Tv){return i(ue,Tv)}),an&&ls(ue,bt),dt}function vn(ue,te,de,je){if(typeof de=="object"&&de!==null&&de.type===w&&de.key===null&&(de=de.props.children),typeof de=="object"&&de!==null){switch(de.$$typeof){case I:e:{for(var dt=de.key,gt=te;gt!==null;){if(gt.key===dt){if(dt=de.type,dt===w){if(gt.tag===7){a(ue,gt.sibling),te=h(gt,de.props.children),te.return=ue,ue=te;break e}}else if(gt.elementType===dt||typeof dt=="object"&&dt!==null&&dt.$$typeof===ce&&Ph(dt)===gt.type){a(ue,gt.sibling),te=h(gt,de.props),te.ref=Ua(ue,gt,de),te.return=ue,ue=te;break e}a(ue,gt);break}else i(ue,gt);gt=gt.sibling}de.type===w?(te=gs(de.props.children,ue.mode,je,de.key),te.return=ue,ue=te):(je=dl(de.type,de.key,de.props,null,ue.mode,je),je.ref=Ua(ue,te,de),je.return=ue,ue=je)}return A(ue);case L:e:{for(gt=de.key;te!==null;){if(te.key===gt)if(te.tag===4&&te.stateNode.containerInfo===de.containerInfo&&te.stateNode.implementation===de.implementation){a(ue,te.sibling),te=h(te,de.children||[]),te.return=ue,ue=te;break e}else{a(ue,te);break}else i(ue,te);te=te.sibling}te=zu(de,ue.mode,je),te.return=ue,ue=te}return A(ue);case ce:return gt=de._init,vn(ue,te,gt(de._payload),je)}if(Ut(de))return lt(ue,te,de,je);if(X(de))return ut(ue,te,de,je);Ho(ue,de)}return typeof de=="string"&&de!==""||typeof de=="number"?(de=""+de,te!==null&&te.tag===6?(a(ue,te.sibling),te=h(te,de),te.return=ue,ue=te):(a(ue,te),te=Fu(de,ue.mode,je),te.return=ue,ue=te),A(ue)):a(ue,te)}return vn}var Hs=Dh(!0),Lh=Dh(!1),Go=Lr(null),Vo=null,Gs=null,Xc=null;function Yc(){Xc=Gs=Vo=null}function qc(n){var i=Go.current;sn(Go),n._currentValue=i}function Kc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Vs(n,i){Vo=n,Xc=Gs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(ti=!0),n.firstContext=null)}function yi(n){var i=n._currentValue;if(Xc!==n)if(n={context:n,memoizedValue:i,next:null},Gs===null){if(Vo===null)throw Error(t(308));Gs=n,Vo.dependencies={lanes:0,firstContext:n}}else Gs=Gs.next=n;return i}var cs=null;function Zc(n){cs===null?cs=[n]:cs.push(n)}function Ih(n,i,a,c){var h=i.interleaved;return h===null?(a.next=a,Zc(i)):(a.next=h.next,h.next=a),i.interleaved=a,dr(n,c)}function dr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Ur=!1;function Jc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function fr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Fr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ht&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,dr(n,a)}return h=c.interleaved,h===null?(i.next=i,Zc(c)):(i.next=h.next,h.next=i),c.interleaved=i,dr(n,a)}function Wo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,gn(n,a)}}function Uh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,x=null;if(a=a.firstBaseUpdate,a!==null){do{var A={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};x===null?h=x=A:x=x.next=A,a=a.next}while(a!==null);x===null?h=x=i:x=x.next=i}else h=x=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:x,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function jo(n,i,a,c){var h=n.updateQueue;Ur=!1;var x=h.firstBaseUpdate,A=h.lastBaseUpdate,G=h.shared.pending;if(G!==null){h.shared.pending=null;var J=G,xe=J.next;J.next=null,A===null?x=xe:A.next=xe,A=J;var Ie=n.alternate;Ie!==null&&(Ie=Ie.updateQueue,G=Ie.lastBaseUpdate,G!==A&&(G===null?Ie.firstBaseUpdate=xe:G.next=xe,Ie.lastBaseUpdate=J))}if(x!==null){var Oe=h.baseState;A=0,Ie=xe=J=null,G=x;do{var Le=G.lane,et=G.eventTime;if((c&Le)===Le){Ie!==null&&(Ie=Ie.next={eventTime:et,lane:0,tag:G.tag,payload:G.payload,callback:G.callback,next:null});e:{var lt=n,ut=G;switch(Le=i,et=a,ut.tag){case 1:if(lt=ut.payload,typeof lt=="function"){Oe=lt.call(et,Oe,Le);break e}Oe=lt;break e;case 3:lt.flags=lt.flags&-65537|128;case 0:if(lt=ut.payload,Le=typeof lt=="function"?lt.call(et,Oe,Le):lt,Le==null)break e;Oe=H({},Oe,Le);break e;case 2:Ur=!0}}G.callback!==null&&G.lane!==0&&(n.flags|=64,Le=h.effects,Le===null?h.effects=[G]:Le.push(G))}else et={eventTime:et,lane:Le,tag:G.tag,payload:G.payload,callback:G.callback,next:null},Ie===null?(xe=Ie=et,J=Oe):Ie=Ie.next=et,A|=Le;if(G=G.next,G===null){if(G=h.shared.pending,G===null)break;Le=G,G=Le.next,Le.next=null,h.lastBaseUpdate=Le,h.shared.pending=null}}while(!0);if(Ie===null&&(J=Oe),h.baseState=J,h.firstBaseUpdate=xe,h.lastBaseUpdate=Ie,i=h.shared.interleaved,i!==null){h=i;do A|=h.lane,h=h.next;while(h!==i)}else x===null&&(h.shared.lanes=0);fs|=A,n.lanes=A,n.memoizedState=Oe}}function Fh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var Fa={},ji=Lr(Fa),za=Lr(Fa),Oa=Lr(Fa);function us(n){if(n===Fa)throw Error(t(174));return n}function Qc(n,i){switch(en(Oa,i),en(za,n),en(ji,Fa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:It(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=It(i,n)}sn(ji),en(ji,i)}function Ws(){sn(ji),sn(za),sn(Oa)}function zh(n){us(Oa.current);var i=us(ji.current),a=It(i,n.type);i!==a&&(en(za,n),en(ji,a))}function eu(n){za.current===n&&(sn(ji),sn(za))}var un=Lr(0);function $o(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var tu=[];function nu(){for(var n=0;n<tu.length;n++)tu[n]._workInProgressVersionPrimary=null;tu.length=0}var Xo=D.ReactCurrentDispatcher,iu=D.ReactCurrentBatchConfig,ds=0,dn=null,wn=null,Cn=null,Yo=!1,Ba=!1,Ha=0,Yx=0;function Hn(){throw Error(t(321))}function ru(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Ai(n[a],i[a]))return!1;return!0}function su(n,i,a,c,h,x){if(ds=x,dn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Xo.current=n===null||n.memoizedState===null?Jx:Qx,n=a(c,h),Ba){x=0;do{if(Ba=!1,Ha=0,25<=x)throw Error(t(301));x+=1,Cn=wn=null,i.updateQueue=null,Xo.current=ev,n=a(c,h)}while(Ba)}if(Xo.current=Zo,i=wn!==null&&wn.next!==null,ds=0,Cn=wn=dn=null,Yo=!1,i)throw Error(t(300));return n}function au(){var n=Ha!==0;return Ha=0,n}function $i(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cn===null?dn.memoizedState=Cn=n:Cn=Cn.next=n,Cn}function Si(){if(wn===null){var n=dn.alternate;n=n!==null?n.memoizedState:null}else n=wn.next;var i=Cn===null?dn.memoizedState:Cn.next;if(i!==null)Cn=i,wn=n;else{if(n===null)throw Error(t(310));wn=n,n={memoizedState:wn.memoizedState,baseState:wn.baseState,baseQueue:wn.baseQueue,queue:wn.queue,next:null},Cn===null?dn.memoizedState=Cn=n:Cn=Cn.next=n}return Cn}function Ga(n,i){return typeof i=="function"?i(n):i}function ou(n){var i=Si(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=wn,h=c.baseQueue,x=a.pending;if(x!==null){if(h!==null){var A=h.next;h.next=x.next,x.next=A}c.baseQueue=h=x,a.pending=null}if(h!==null){x=h.next,c=c.baseState;var G=A=null,J=null,xe=x;do{var Ie=xe.lane;if((ds&Ie)===Ie)J!==null&&(J=J.next={lane:0,action:xe.action,hasEagerState:xe.hasEagerState,eagerState:xe.eagerState,next:null}),c=xe.hasEagerState?xe.eagerState:n(c,xe.action);else{var Oe={lane:Ie,action:xe.action,hasEagerState:xe.hasEagerState,eagerState:xe.eagerState,next:null};J===null?(G=J=Oe,A=c):J=J.next=Oe,dn.lanes|=Ie,fs|=Ie}xe=xe.next}while(xe!==null&&xe!==x);J===null?A=c:J.next=G,Ai(c,i.memoizedState)||(ti=!0),i.memoizedState=c,i.baseState=A,i.baseQueue=J,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do x=h.lane,dn.lanes|=x,fs|=x,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function lu(n){var i=Si(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,x=i.memoizedState;if(h!==null){a.pending=null;var A=h=h.next;do x=n(x,A.action),A=A.next;while(A!==h);Ai(x,i.memoizedState)||(ti=!0),i.memoizedState=x,i.baseQueue===null&&(i.baseState=x),a.lastRenderedState=x}return[x,c]}function Oh(){}function Bh(n,i){var a=dn,c=Si(),h=i(),x=!Ai(c.memoizedState,h);if(x&&(c.memoizedState=h,ti=!0),c=c.queue,cu(Vh.bind(null,a,c,n),[n]),c.getSnapshot!==i||x||Cn!==null&&Cn.memoizedState.tag&1){if(a.flags|=2048,Va(9,Gh.bind(null,a,c,h,i),void 0,null),Rn===null)throw Error(t(349));(ds&30)!==0||Hh(a,i,h)}return h}function Hh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=dn.updateQueue,i===null?(i={lastEffect:null,stores:null},dn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Gh(n,i,a,c){i.value=a,i.getSnapshot=c,Wh(i)&&jh(n)}function Vh(n,i,a){return a(function(){Wh(i)&&jh(n)})}function Wh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Ai(n,a)}catch{return!0}}function jh(n){var i=dr(n,1);i!==null&&Di(i,n,1,-1)}function $h(n){var i=$i();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:n},i.queue=n,n=n.dispatch=Zx.bind(null,dn,n),[i.memoizedState,n]}function Va(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=dn.updateQueue,i===null?(i={lastEffect:null,stores:null},dn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Xh(){return Si().memoizedState}function qo(n,i,a,c){var h=$i();dn.flags|=n,h.memoizedState=Va(1|i,a,void 0,c===void 0?null:c)}function Ko(n,i,a,c){var h=Si();c=c===void 0?null:c;var x=void 0;if(wn!==null){var A=wn.memoizedState;if(x=A.destroy,c!==null&&ru(c,A.deps)){h.memoizedState=Va(i,a,x,c);return}}dn.flags|=n,h.memoizedState=Va(1|i,a,x,c)}function Yh(n,i){return qo(8390656,8,n,i)}function cu(n,i){return Ko(2048,8,n,i)}function qh(n,i){return Ko(4,2,n,i)}function Kh(n,i){return Ko(4,4,n,i)}function Zh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Jh(n,i,a){return a=a!=null?a.concat([n]):null,Ko(4,4,Zh.bind(null,i,n),a)}function uu(){}function Qh(n,i){var a=Si();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&ru(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function ep(n,i){var a=Si();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&ru(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function tp(n,i,a){return(ds&21)===0?(n.baseState&&(n.baseState=!1,ti=!0),n.memoizedState=a):(Ai(a,i)||(a=Gt(),dn.lanes|=a,fs|=a,n.baseState=!0),i)}function qx(n,i){var a=ct;ct=a!==0&&4>a?a:4,n(!0);var c=iu.transition;iu.transition={};try{n(!1),i()}finally{ct=a,iu.transition=c}}function np(){return Si().memoizedState}function Kx(n,i,a){var c=Hr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},ip(n))rp(i,a);else if(a=Ih(n,i,a,c),a!==null){var h=Zn();Di(a,n,c,h),sp(a,i,c)}}function Zx(n,i,a){var c=Hr(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(ip(n))rp(i,h);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=i.lastRenderedReducer,x!==null))try{var A=i.lastRenderedState,G=x(A,a);if(h.hasEagerState=!0,h.eagerState=G,Ai(G,A)){var J=i.interleaved;J===null?(h.next=h,Zc(i)):(h.next=J.next,J.next=h),i.interleaved=h;return}}catch{}finally{}a=Ih(n,i,h,c),a!==null&&(h=Zn(),Di(a,n,c,h),sp(a,i,c))}}function ip(n){var i=n.alternate;return n===dn||i!==null&&i===dn}function rp(n,i){Ba=Yo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function sp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,gn(n,a)}}var Zo={readContext:yi,useCallback:Hn,useContext:Hn,useEffect:Hn,useImperativeHandle:Hn,useInsertionEffect:Hn,useLayoutEffect:Hn,useMemo:Hn,useReducer:Hn,useRef:Hn,useState:Hn,useDebugValue:Hn,useDeferredValue:Hn,useTransition:Hn,useMutableSource:Hn,useSyncExternalStore:Hn,useId:Hn,unstable_isNewReconciler:!1},Jx={readContext:yi,useCallback:function(n,i){return $i().memoizedState=[n,i===void 0?null:i],n},useContext:yi,useEffect:Yh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,qo(4194308,4,Zh.bind(null,i,n),a)},useLayoutEffect:function(n,i){return qo(4194308,4,n,i)},useInsertionEffect:function(n,i){return qo(4,2,n,i)},useMemo:function(n,i){var a=$i();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=$i();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Kx.bind(null,dn,n),[c.memoizedState,n]},useRef:function(n){var i=$i();return n={current:n},i.memoizedState=n},useState:$h,useDebugValue:uu,useDeferredValue:function(n){return $i().memoizedState=n},useTransition:function(){var n=$h(!1),i=n[0];return n=qx.bind(null,n[1]),$i().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=dn,h=$i();if(an){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Rn===null)throw Error(t(349));(ds&30)!==0||Hh(c,i,a)}h.memoizedState=a;var x={value:a,getSnapshot:i};return h.queue=x,Yh(Vh.bind(null,c,x,n),[n]),c.flags|=2048,Va(9,Gh.bind(null,c,x,a,i),void 0,null),a},useId:function(){var n=$i(),i=Rn.identifierPrefix;if(an){var a=ur,c=cr;a=(c&~(1<<32-re(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ha++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Yx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Qx={readContext:yi,useCallback:Qh,useContext:yi,useEffect:cu,useImperativeHandle:Jh,useInsertionEffect:qh,useLayoutEffect:Kh,useMemo:ep,useReducer:ou,useRef:Xh,useState:function(){return ou(Ga)},useDebugValue:uu,useDeferredValue:function(n){var i=Si();return tp(i,wn.memoizedState,n)},useTransition:function(){var n=ou(Ga)[0],i=Si().memoizedState;return[n,i]},useMutableSource:Oh,useSyncExternalStore:Bh,useId:np,unstable_isNewReconciler:!1},ev={readContext:yi,useCallback:Qh,useContext:yi,useEffect:cu,useImperativeHandle:Jh,useInsertionEffect:qh,useLayoutEffect:Kh,useMemo:ep,useReducer:lu,useRef:Xh,useState:function(){return lu(Ga)},useDebugValue:uu,useDeferredValue:function(n){var i=Si();return wn===null?i.memoizedState=n:tp(i,wn.memoizedState,n)},useTransition:function(){var n=lu(Ga)[0],i=Si().memoizedState;return[n,i]},useMutableSource:Oh,useSyncExternalStore:Bh,useId:np,unstable_isNewReconciler:!1};function Ri(n,i){if(n&&n.defaultProps){i=H({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function du(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:H({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Jo={isMounted:function(n){return(n=n._reactInternals)?Et(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Zn(),h=Hr(n),x=fr(c,h);x.payload=i,a!=null&&(x.callback=a),i=Fr(n,x,h),i!==null&&(Di(i,n,h,c),Wo(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Zn(),h=Hr(n),x=fr(c,h);x.tag=1,x.payload=i,a!=null&&(x.callback=a),i=Fr(n,x,h),i!==null&&(Di(i,n,h,c),Wo(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Zn(),c=Hr(n),h=fr(a,c);h.tag=2,i!=null&&(h.callback=i),i=Fr(n,h,c),i!==null&&(Di(i,n,c,a),Wo(i,n,c))}};function ap(n,i,a,c,h,x,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,x,A):i.prototype&&i.prototype.isPureReactComponent?!Ra(a,c)||!Ra(h,x):!0}function op(n,i,a){var c=!1,h=Ir,x=i.contextType;return typeof x=="object"&&x!==null?x=yi(x):(h=ei(i)?as:Bn.current,c=i.contextTypes,x=(c=c!=null)?Fs(n,h):Ir),i=new i(a,x),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Jo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=x),i}function lp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Jo.enqueueReplaceState(i,i.state,null)}function fu(n,i,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},Jc(n);var x=i.contextType;typeof x=="object"&&x!==null?h.context=yi(x):(x=ei(i)?as:Bn.current,h.context=Fs(n,x)),h.state=n.memoizedState,x=i.getDerivedStateFromProps,typeof x=="function"&&(du(n,i,x,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&Jo.enqueueReplaceState(h,h.state,null),jo(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function js(n,i){try{var a="",c=i;do a+=le(c),c=c.return;while(c);var h=a}catch(x){h=`
Error generating stack: `+x.message+`
`+x.stack}return{value:n,source:i,stack:h,digest:null}}function hu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function pu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var tv=typeof WeakMap=="function"?WeakMap:Map;function cp(n,i,a){a=fr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){sl||(sl=!0,Ru=c),pu(n,i)},a}function up(n,i,a){a=fr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){pu(n,i)}}var x=n.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(a.callback=function(){pu(n,i),typeof c!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var A=i.stack;this.componentDidCatch(i.value,{componentStack:A!==null?A:""})}),a}function dp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new tv;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),n=mv.bind(null,n,i,a),i.then(n,n))}function fp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function hp(n,i,a,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=fr(-1,1),i.tag=2,Fr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var nv=D.ReactCurrentOwner,ti=!1;function Kn(n,i,a,c){i.child=n===null?Lh(i,null,a,c):Hs(i,n.child,a,c)}function pp(n,i,a,c,h){a=a.render;var x=i.ref;return Vs(i,h),c=su(n,i,a,c,x,h),a=au(),n!==null&&!ti?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,hr(n,i,h)):(an&&a&&Gc(i),i.flags|=1,Kn(n,i,c,h),i.child)}function mp(n,i,a,c,h){if(n===null){var x=a.type;return typeof x=="function"&&!Uu(x)&&x.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=x,gp(n,i,x,c,h)):(n=dl(a.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(x=n.child,(n.lanes&h)===0){var A=x.memoizedProps;if(a=a.compare,a=a!==null?a:Ra,a(A,c)&&n.ref===i.ref)return hr(n,i,h)}return i.flags|=1,n=Vr(x,c),n.ref=i.ref,n.return=i,i.child=n}function gp(n,i,a,c,h){if(n!==null){var x=n.memoizedProps;if(Ra(x,c)&&n.ref===i.ref)if(ti=!1,i.pendingProps=c=x,(n.lanes&h)!==0)(n.flags&131072)!==0&&(ti=!0);else return i.lanes=n.lanes,hr(n,i,h)}return mu(n,i,a,c,h)}function xp(n,i,a){var c=i.pendingProps,h=c.children,x=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},en(Xs,di),di|=a;else{if((a&1073741824)===0)return n=x!==null?x.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,en(Xs,di),di|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=x!==null?x.baseLanes:a,en(Xs,di),di|=c}else x!==null?(c=x.baseLanes|a,i.memoizedState=null):c=a,en(Xs,di),di|=c;return Kn(n,i,h,a),i.child}function vp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function mu(n,i,a,c,h){var x=ei(a)?as:Bn.current;return x=Fs(i,x),Vs(i,h),a=su(n,i,a,c,x,h),c=au(),n!==null&&!ti?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,hr(n,i,h)):(an&&c&&Gc(i),i.flags|=1,Kn(n,i,a,h),i.child)}function _p(n,i,a,c,h){if(ei(a)){var x=!0;Uo(i)}else x=!1;if(Vs(i,h),i.stateNode===null)el(n,i),op(i,a,c),fu(i,a,c,h),c=!0;else if(n===null){var A=i.stateNode,G=i.memoizedProps;A.props=G;var J=A.context,xe=a.contextType;typeof xe=="object"&&xe!==null?xe=yi(xe):(xe=ei(a)?as:Bn.current,xe=Fs(i,xe));var Ie=a.getDerivedStateFromProps,Oe=typeof Ie=="function"||typeof A.getSnapshotBeforeUpdate=="function";Oe||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(G!==c||J!==xe)&&lp(i,A,c,xe),Ur=!1;var Le=i.memoizedState;A.state=Le,jo(i,c,A,h),J=i.memoizedState,G!==c||Le!==J||Qn.current||Ur?(typeof Ie=="function"&&(du(i,a,Ie,c),J=i.memoizedState),(G=Ur||ap(i,a,G,c,Le,J,xe))?(Oe||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(i.flags|=4194308)):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=J),A.props=c,A.state=J,A.context=xe,c=G):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{A=i.stateNode,kh(n,i),G=i.memoizedProps,xe=i.type===i.elementType?G:Ri(i.type,G),A.props=xe,Oe=i.pendingProps,Le=A.context,J=a.contextType,typeof J=="object"&&J!==null?J=yi(J):(J=ei(a)?as:Bn.current,J=Fs(i,J));var et=a.getDerivedStateFromProps;(Ie=typeof et=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(G!==Oe||Le!==J)&&lp(i,A,c,J),Ur=!1,Le=i.memoizedState,A.state=Le,jo(i,c,A,h);var lt=i.memoizedState;G!==Oe||Le!==lt||Qn.current||Ur?(typeof et=="function"&&(du(i,a,et,c),lt=i.memoizedState),(xe=Ur||ap(i,a,xe,c,Le,lt,J)||!1)?(Ie||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(c,lt,J),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(c,lt,J)),typeof A.componentDidUpdate=="function"&&(i.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof A.componentDidUpdate!="function"||G===n.memoizedProps&&Le===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||G===n.memoizedProps&&Le===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=lt),A.props=c,A.state=lt,A.context=J,c=xe):(typeof A.componentDidUpdate!="function"||G===n.memoizedProps&&Le===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||G===n.memoizedProps&&Le===n.memoizedState||(i.flags|=1024),c=!1)}return gu(n,i,a,c,x,h)}function gu(n,i,a,c,h,x){vp(n,i);var A=(i.flags&128)!==0;if(!c&&!A)return h&&Mh(i,a,!1),hr(n,i,x);c=i.stateNode,nv.current=i;var G=A&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&A?(i.child=Hs(i,n.child,null,x),i.child=Hs(i,null,G,x)):Kn(n,i,G,x),i.memoizedState=c.state,h&&Mh(i,a,!0),i.child}function yp(n){var i=n.stateNode;i.pendingContext?bh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&bh(n,i.context,!1),Qc(n,i.containerInfo)}function Sp(n,i,a,c,h){return Bs(),$c(h),i.flags|=256,Kn(n,i,a,c),i.child}var xu={dehydrated:null,treeContext:null,retryLane:0};function vu(n){return{baseLanes:n,cachePool:null,transitions:null}}function bp(n,i,a){var c=i.pendingProps,h=un.current,x=!1,A=(i.flags&128)!==0,G;if((G=A)||(G=n!==null&&n.memoizedState===null?!1:(h&2)!==0),G?(x=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),en(un,h&1),n===null)return jc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(A=c.children,n=c.fallback,x?(c=i.mode,x=i.child,A={mode:"hidden",children:A},(c&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=A):x=fl(A,c,0,null),n=gs(n,c,a,null),x.return=i,n.return=i,x.sibling=n,i.child=x,i.child.memoizedState=vu(a),i.memoizedState=xu,n):_u(i,A));if(h=n.memoizedState,h!==null&&(G=h.dehydrated,G!==null))return iv(n,i,A,c,G,h,a);if(x){x=c.fallback,A=i.mode,h=n.child,G=h.sibling;var J={mode:"hidden",children:c.children};return(A&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=J,i.deletions=null):(c=Vr(h,J),c.subtreeFlags=h.subtreeFlags&14680064),G!==null?x=Vr(G,x):(x=gs(x,A,a,null),x.flags|=2),x.return=i,c.return=i,c.sibling=x,i.child=c,c=x,x=i.child,A=n.child.memoizedState,A=A===null?vu(a):{baseLanes:A.baseLanes|a,cachePool:null,transitions:A.transitions},x.memoizedState=A,x.childLanes=n.childLanes&~a,i.memoizedState=xu,c}return x=n.child,n=x.sibling,c=Vr(x,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function _u(n,i){return i=fl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Qo(n,i,a,c){return c!==null&&$c(c),Hs(i,n.child,null,a),n=_u(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function iv(n,i,a,c,h,x,A){if(a)return i.flags&256?(i.flags&=-257,c=hu(Error(t(422))),Qo(n,i,A,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(x=c.fallback,h=i.mode,c=fl({mode:"visible",children:c.children},h,0,null),x=gs(x,h,A,null),x.flags|=2,c.return=i,x.return=i,c.sibling=x,i.child=c,(i.mode&1)!==0&&Hs(i,n.child,null,A),i.child.memoizedState=vu(A),i.memoizedState=xu,x);if((i.mode&1)===0)return Qo(n,i,A,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var G=c.dgst;return c=G,x=Error(t(419)),c=hu(x,c,void 0),Qo(n,i,A,c)}if(G=(A&n.childLanes)!==0,ti||G){if(c=Rn,c!==null){switch(A&-A){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|A))!==0?0:h,h!==0&&h!==x.retryLane&&(x.retryLane=h,dr(n,h),Di(c,n,h,-1))}return ku(),c=hu(Error(t(421))),Qo(n,i,A,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=gv.bind(null,n),h._reactRetry=i,null):(n=x.treeContext,ui=Dr(h.nextSibling),ci=i,an=!0,Ci=null,n!==null&&(vi[_i++]=cr,vi[_i++]=ur,vi[_i++]=os,cr=n.id,ur=n.overflow,os=i),i=_u(i,c.children),i.flags|=4096,i)}function wp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Kc(n.return,i,a)}function yu(n,i,a,c,h){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(x.isBackwards=i,x.rendering=null,x.renderingStartTime=0,x.last=c,x.tail=a,x.tailMode=h)}function Mp(n,i,a){var c=i.pendingProps,h=c.revealOrder,x=c.tail;if(Kn(n,i,c.children,a),c=un.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&wp(n,a,i);else if(n.tag===19)wp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(en(un,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&$o(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),yu(i,!1,h,a,x);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&$o(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}yu(i,!0,a,null,x);break;case"together":yu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function el(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function hr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),fs|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Vr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Vr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function rv(n,i,a){switch(i.tag){case 3:yp(i),Bs();break;case 5:zh(i);break;case 1:ei(i.type)&&Uo(i);break;case 4:Qc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;en(Go,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(en(un,un.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?bp(n,i,a):(en(un,un.current&1),n=hr(n,i,a),n!==null?n.sibling:null);en(un,un.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Mp(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),en(un,un.current),c)break;return null;case 22:case 23:return i.lanes=0,xp(n,i,a)}return hr(n,i,a)}var Ep,Su,Tp,Ap;Ep=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Su=function(){},Tp=function(n,i,a,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,us(ji.current);var x=null;switch(a){case"input":h=Xe(n,h),c=Xe(n,c),x=[];break;case"select":h=H({},h,{value:void 0}),c=H({},c,{value:void 0}),x=[];break;case"textarea":h=jt(n,h),c=jt(n,c),x=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Lo)}Me(a,c);var A;a=null;for(xe in h)if(!c.hasOwnProperty(xe)&&h.hasOwnProperty(xe)&&h[xe]!=null)if(xe==="style"){var G=h[xe];for(A in G)G.hasOwnProperty(A)&&(a||(a={}),a[A]="")}else xe!=="dangerouslySetInnerHTML"&&xe!=="children"&&xe!=="suppressContentEditableWarning"&&xe!=="suppressHydrationWarning"&&xe!=="autoFocus"&&(o.hasOwnProperty(xe)?x||(x=[]):(x=x||[]).push(xe,null));for(xe in c){var J=c[xe];if(G=h!=null?h[xe]:void 0,c.hasOwnProperty(xe)&&J!==G&&(J!=null||G!=null))if(xe==="style")if(G){for(A in G)!G.hasOwnProperty(A)||J&&J.hasOwnProperty(A)||(a||(a={}),a[A]="");for(A in J)J.hasOwnProperty(A)&&G[A]!==J[A]&&(a||(a={}),a[A]=J[A])}else a||(x||(x=[]),x.push(xe,a)),a=J;else xe==="dangerouslySetInnerHTML"?(J=J?J.__html:void 0,G=G?G.__html:void 0,J!=null&&G!==J&&(x=x||[]).push(xe,J)):xe==="children"?typeof J!="string"&&typeof J!="number"||(x=x||[]).push(xe,""+J):xe!=="suppressContentEditableWarning"&&xe!=="suppressHydrationWarning"&&(o.hasOwnProperty(xe)?(J!=null&&xe==="onScroll"&&rn("scroll",n),x||G===J||(x=[])):(x=x||[]).push(xe,J))}a&&(x=x||[]).push("style",a);var xe=x;(i.updateQueue=xe)&&(i.flags|=4)}},Ap=function(n,i,a,c){a!==c&&(i.flags|=4)};function Wa(n,i){if(!an)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Gn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function sv(n,i,a){var c=i.pendingProps;switch(Vc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gn(i),null;case 1:return ei(i.type)&&ko(),Gn(i),null;case 3:return c=i.stateNode,Ws(),sn(Qn),sn(Bn),nu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Bo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ci!==null&&(Du(Ci),Ci=null))),Su(n,i),Gn(i),null;case 5:eu(i);var h=us(Oa.current);if(a=i.type,n!==null&&i.stateNode!=null)Tp(n,i,a,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Gn(i),null}if(n=us(ji.current),Bo(i)){c=i.stateNode,a=i.type;var x=i.memoizedProps;switch(c[Wi]=i,c[Ia]=x,n=(i.mode&1)!==0,a){case"dialog":rn("cancel",c),rn("close",c);break;case"iframe":case"object":case"embed":rn("load",c);break;case"video":case"audio":for(h=0;h<Pa.length;h++)rn(Pa[h],c);break;case"source":rn("error",c);break;case"img":case"image":case"link":rn("error",c),rn("load",c);break;case"details":rn("toggle",c);break;case"input":mt(c,x),rn("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!x.multiple},rn("invalid",c);break;case"textarea":ln(c,x),rn("invalid",c)}Me(a,x),h=null;for(var A in x)if(x.hasOwnProperty(A)){var G=x[A];A==="children"?typeof G=="string"?c.textContent!==G&&(x.suppressHydrationWarning!==!0&&Do(c.textContent,G,n),h=["children",G]):typeof G=="number"&&c.textContent!==""+G&&(x.suppressHydrationWarning!==!0&&Do(c.textContent,G,n),h=["children",""+G]):o.hasOwnProperty(A)&&G!=null&&A==="onScroll"&&rn("scroll",c)}switch(a){case"input":ke(c),Lt(c,x,!0);break;case"textarea":ke(c),Ft(c);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(c.onclick=Lo)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{A=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=_t(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=A.createElement(a,{is:c.is}):(n=A.createElement(a),a==="select"&&(A=n,c.multiple?A.multiple=!0:c.size&&(A.size=c.size))):n=A.createElementNS(n,a),n[Wi]=i,n[Ia]=c,Ep(n,i,!1,!1),i.stateNode=n;e:{switch(A=Fe(a,c),a){case"dialog":rn("cancel",n),rn("close",n),h=c;break;case"iframe":case"object":case"embed":rn("load",n),h=c;break;case"video":case"audio":for(h=0;h<Pa.length;h++)rn(Pa[h],n);h=c;break;case"source":rn("error",n),h=c;break;case"img":case"image":case"link":rn("error",n),rn("load",n),h=c;break;case"details":rn("toggle",n),h=c;break;case"input":mt(n,c),h=Xe(n,c),rn("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=H({},c,{value:void 0}),rn("invalid",n);break;case"textarea":ln(n,c),h=jt(n,c),rn("invalid",n);break;default:h=c}Me(a,h),G=h;for(x in G)if(G.hasOwnProperty(x)){var J=G[x];x==="style"?se(n,J):x==="dangerouslySetInnerHTML"?(J=J?J.__html:void 0,J!=null&&Mt(n,J)):x==="children"?typeof J=="string"?(a!=="textarea"||J!=="")&&tt(n,J):typeof J=="number"&&tt(n,""+J):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?J!=null&&x==="onScroll"&&rn("scroll",n):J!=null&&F(n,x,J,A))}switch(a){case"input":ke(n),Lt(n,c,!1);break;case"textarea":ke(n),Ft(n);break;case"option":c.value!=null&&n.setAttribute("value",""+we(c.value));break;case"select":n.multiple=!!c.multiple,x=c.value,x!=null?Zt(n,!!c.multiple,x,!1):c.defaultValue!=null&&Zt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Lo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Gn(i),null;case 6:if(n&&i.stateNode!=null)Ap(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=us(Oa.current),us(ji.current),Bo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Wi]=i,(x=c.nodeValue!==a)&&(n=ci,n!==null))switch(n.tag){case 3:Do(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Do(c.nodeValue,a,(n.mode&1)!==0)}x&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Wi]=i,i.stateNode=c}return Gn(i),null;case 13:if(sn(un),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(an&&ui!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Nh(),Bs(),i.flags|=98560,x=!1;else if(x=Bo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!x)throw Error(t(318));if(x=i.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Wi]=i}else Bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Gn(i),x=!1}else Ci!==null&&(Du(Ci),Ci=null),x=!0;if(!x)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(un.current&1)!==0?Mn===0&&(Mn=3):ku())),i.updateQueue!==null&&(i.flags|=4),Gn(i),null);case 4:return Ws(),Su(n,i),n===null&&Da(i.stateNode.containerInfo),Gn(i),null;case 10:return qc(i.type._context),Gn(i),null;case 17:return ei(i.type)&&ko(),Gn(i),null;case 19:if(sn(un),x=i.memoizedState,x===null)return Gn(i),null;if(c=(i.flags&128)!==0,A=x.rendering,A===null)if(c)Wa(x,!1);else{if(Mn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(A=$o(n),A!==null){for(i.flags|=128,Wa(x,!1),c=A.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)x=a,n=c,x.flags&=14680066,A=x.alternate,A===null?(x.childLanes=0,x.lanes=n,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=A.childLanes,x.lanes=A.lanes,x.child=A.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=A.memoizedProps,x.memoizedState=A.memoizedState,x.updateQueue=A.updateQueue,x.type=A.type,n=A.dependencies,x.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return en(un,un.current&1|2),i.child}n=n.sibling}x.tail!==null&&Kt()>Ys&&(i.flags|=128,c=!0,Wa(x,!1),i.lanes=4194304)}else{if(!c)if(n=$o(A),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Wa(x,!0),x.tail===null&&x.tailMode==="hidden"&&!A.alternate&&!an)return Gn(i),null}else 2*Kt()-x.renderingStartTime>Ys&&a!==1073741824&&(i.flags|=128,c=!0,Wa(x,!1),i.lanes=4194304);x.isBackwards?(A.sibling=i.child,i.child=A):(a=x.last,a!==null?a.sibling=A:i.child=A,x.last=A)}return x.tail!==null?(i=x.tail,x.rendering=i,x.tail=i.sibling,x.renderingStartTime=Kt(),i.sibling=null,a=un.current,en(un,c?a&1|2:a&1),i):(Gn(i),null);case 22:case 23:return Iu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(di&1073741824)!==0&&(Gn(i),i.subtreeFlags&6&&(i.flags|=8192)):Gn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function av(n,i){switch(Vc(i),i.tag){case 1:return ei(i.type)&&ko(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ws(),sn(Qn),sn(Bn),nu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return eu(i),null;case 13:if(sn(un),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Bs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return sn(un),null;case 4:return Ws(),null;case 10:return qc(i.type._context),null;case 22:case 23:return Iu(),null;case 24:return null;default:return null}}var tl=!1,Vn=!1,ov=typeof WeakSet=="function"?WeakSet:Set,st=null;function $s(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){pn(n,i,c)}else a.current=null}function bu(n,i,a){try{a()}catch(c){pn(n,i,c)}}var Cp=!1;function lv(n,i){if(Ic=So,n=ah(),Tc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,x=c.focusNode;c=c.focusOffset;try{a.nodeType,x.nodeType}catch{a=null;break e}var A=0,G=-1,J=-1,xe=0,Ie=0,Oe=n,Le=null;t:for(;;){for(var et;Oe!==a||h!==0&&Oe.nodeType!==3||(G=A+h),Oe!==x||c!==0&&Oe.nodeType!==3||(J=A+c),Oe.nodeType===3&&(A+=Oe.nodeValue.length),(et=Oe.firstChild)!==null;)Le=Oe,Oe=et;for(;;){if(Oe===n)break t;if(Le===a&&++xe===h&&(G=A),Le===x&&++Ie===c&&(J=A),(et=Oe.nextSibling)!==null)break;Oe=Le,Le=Oe.parentNode}Oe=et}a=G===-1||J===-1?null:{start:G,end:J}}else a=null}a=a||{start:0,end:0}}else a=null;for(kc={focusedElem:n,selectionRange:a},So=!1,st=i;st!==null;)if(i=st,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,st=n;else for(;st!==null;){i=st;try{var lt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(lt!==null){var ut=lt.memoizedProps,vn=lt.memoizedState,ue=i.stateNode,te=ue.getSnapshotBeforeUpdate(i.elementType===i.type?ut:Ri(i.type,ut),vn);ue.__reactInternalSnapshotBeforeUpdate=te}break;case 3:var de=i.stateNode.containerInfo;de.nodeType===1?de.textContent="":de.nodeType===9&&de.documentElement&&de.removeChild(de.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(je){pn(i,i.return,je)}if(n=i.sibling,n!==null){n.return=i.return,st=n;break}st=i.return}return lt=Cp,Cp=!1,lt}function ja(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var x=h.destroy;h.destroy=void 0,x!==void 0&&bu(i,a,x)}h=h.next}while(h!==c)}}function nl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function wu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Rp(n){var i=n.alternate;i!==null&&(n.alternate=null,Rp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Wi],delete i[Ia],delete i[Oc],delete i[Wx],delete i[jx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Np(n){return n.tag===5||n.tag===3||n.tag===4}function Pp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Np(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Mu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Lo));else if(c!==4&&(n=n.child,n!==null))for(Mu(n,i,a),n=n.sibling;n!==null;)Mu(n,i,a),n=n.sibling}function Eu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Eu(n,i,a),n=n.sibling;n!==null;)Eu(n,i,a),n=n.sibling}var Ln=null,Ni=!1;function zr(n,i,a){for(a=a.child;a!==null;)Dp(n,i,a),a=a.sibling}function Dp(n,i,a){if(ne&&typeof ne.onCommitFiberUnmount=="function")try{ne.onCommitFiberUnmount(O,a)}catch{}switch(a.tag){case 5:Vn||$s(a,i);case 6:var c=Ln,h=Ni;Ln=null,zr(n,i,a),Ln=c,Ni=h,Ln!==null&&(Ni?(n=Ln,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Ln.removeChild(a.stateNode));break;case 18:Ln!==null&&(Ni?(n=Ln,a=a.stateNode,n.nodeType===8?zc(n.parentNode,a):n.nodeType===1&&zc(n,a),wa(n)):zc(Ln,a.stateNode));break;case 4:c=Ln,h=Ni,Ln=a.stateNode.containerInfo,Ni=!0,zr(n,i,a),Ln=c,Ni=h;break;case 0:case 11:case 14:case 15:if(!Vn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var x=h,A=x.destroy;x=x.tag,A!==void 0&&((x&2)!==0||(x&4)!==0)&&bu(a,i,A),h=h.next}while(h!==c)}zr(n,i,a);break;case 1:if(!Vn&&($s(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(G){pn(a,i,G)}zr(n,i,a);break;case 21:zr(n,i,a);break;case 22:a.mode&1?(Vn=(c=Vn)||a.memoizedState!==null,zr(n,i,a),Vn=c):zr(n,i,a);break;default:zr(n,i,a)}}function Lp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new ov),i.forEach(function(c){var h=xv.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function Pi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var x=n,A=i,G=A;e:for(;G!==null;){switch(G.tag){case 5:Ln=G.stateNode,Ni=!1;break e;case 3:Ln=G.stateNode.containerInfo,Ni=!0;break e;case 4:Ln=G.stateNode.containerInfo,Ni=!0;break e}G=G.return}if(Ln===null)throw Error(t(160));Dp(x,A,h),Ln=null,Ni=!1;var J=h.alternate;J!==null&&(J.return=null),h.return=null}catch(xe){pn(h,i,xe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Ip(i,n),i=i.sibling}function Ip(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Pi(i,n),Xi(n),c&4){try{ja(3,n,n.return),nl(3,n)}catch(ut){pn(n,n.return,ut)}try{ja(5,n,n.return)}catch(ut){pn(n,n.return,ut)}}break;case 1:Pi(i,n),Xi(n),c&512&&a!==null&&$s(a,a.return);break;case 5:if(Pi(i,n),Xi(n),c&512&&a!==null&&$s(a,a.return),n.flags&32){var h=n.stateNode;try{tt(h,"")}catch(ut){pn(n,n.return,ut)}}if(c&4&&(h=n.stateNode,h!=null)){var x=n.memoizedProps,A=a!==null?a.memoizedProps:x,G=n.type,J=n.updateQueue;if(n.updateQueue=null,J!==null)try{G==="input"&&x.type==="radio"&&x.name!=null&&me(h,x),Fe(G,A);var xe=Fe(G,x);for(A=0;A<J.length;A+=2){var Ie=J[A],Oe=J[A+1];Ie==="style"?se(h,Oe):Ie==="dangerouslySetInnerHTML"?Mt(h,Oe):Ie==="children"?tt(h,Oe):F(h,Ie,Oe,xe)}switch(G){case"input":yt(h,x);break;case"textarea":K(h,x);break;case"select":var Le=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!x.multiple;var et=x.value;et!=null?Zt(h,!!x.multiple,et,!1):Le!==!!x.multiple&&(x.defaultValue!=null?Zt(h,!!x.multiple,x.defaultValue,!0):Zt(h,!!x.multiple,x.multiple?[]:"",!1))}h[Ia]=x}catch(ut){pn(n,n.return,ut)}}break;case 6:if(Pi(i,n),Xi(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,x=n.memoizedProps;try{h.nodeValue=x}catch(ut){pn(n,n.return,ut)}}break;case 3:if(Pi(i,n),Xi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{wa(i.containerInfo)}catch(ut){pn(n,n.return,ut)}break;case 4:Pi(i,n),Xi(n);break;case 13:Pi(i,n),Xi(n),h=n.child,h.flags&8192&&(x=h.memoizedState!==null,h.stateNode.isHidden=x,!x||h.alternate!==null&&h.alternate.memoizedState!==null||(Cu=Kt())),c&4&&Lp(n);break;case 22:if(Ie=a!==null&&a.memoizedState!==null,n.mode&1?(Vn=(xe=Vn)||Ie,Pi(i,n),Vn=xe):Pi(i,n),Xi(n),c&8192){if(xe=n.memoizedState!==null,(n.stateNode.isHidden=xe)&&!Ie&&(n.mode&1)!==0)for(st=n,Ie=n.child;Ie!==null;){for(Oe=st=Ie;st!==null;){switch(Le=st,et=Le.child,Le.tag){case 0:case 11:case 14:case 15:ja(4,Le,Le.return);break;case 1:$s(Le,Le.return);var lt=Le.stateNode;if(typeof lt.componentWillUnmount=="function"){c=Le,a=Le.return;try{i=c,lt.props=i.memoizedProps,lt.state=i.memoizedState,lt.componentWillUnmount()}catch(ut){pn(c,a,ut)}}break;case 5:$s(Le,Le.return);break;case 22:if(Le.memoizedState!==null){Fp(Oe);continue}}et!==null?(et.return=Le,st=et):Fp(Oe)}Ie=Ie.sibling}e:for(Ie=null,Oe=n;;){if(Oe.tag===5){if(Ie===null){Ie=Oe;try{h=Oe.stateNode,xe?(x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(G=Oe.stateNode,J=Oe.memoizedProps.style,A=J!=null&&J.hasOwnProperty("display")?J.display:null,G.style.display=T("display",A))}catch(ut){pn(n,n.return,ut)}}}else if(Oe.tag===6){if(Ie===null)try{Oe.stateNode.nodeValue=xe?"":Oe.memoizedProps}catch(ut){pn(n,n.return,ut)}}else if((Oe.tag!==22&&Oe.tag!==23||Oe.memoizedState===null||Oe===n)&&Oe.child!==null){Oe.child.return=Oe,Oe=Oe.child;continue}if(Oe===n)break e;for(;Oe.sibling===null;){if(Oe.return===null||Oe.return===n)break e;Ie===Oe&&(Ie=null),Oe=Oe.return}Ie===Oe&&(Ie=null),Oe.sibling.return=Oe.return,Oe=Oe.sibling}}break;case 19:Pi(i,n),Xi(n),c&4&&Lp(n);break;case 21:break;default:Pi(i,n),Xi(n)}}function Xi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Np(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(tt(h,""),c.flags&=-33);var x=Pp(n);Eu(n,x,h);break;case 3:case 4:var A=c.stateNode.containerInfo,G=Pp(n);Mu(n,G,A);break;default:throw Error(t(161))}}catch(J){pn(n,n.return,J)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function cv(n,i,a){st=n,kp(n)}function kp(n,i,a){for(var c=(n.mode&1)!==0;st!==null;){var h=st,x=h.child;if(h.tag===22&&c){var A=h.memoizedState!==null||tl;if(!A){var G=h.alternate,J=G!==null&&G.memoizedState!==null||Vn;G=tl;var xe=Vn;if(tl=A,(Vn=J)&&!xe)for(st=h;st!==null;)A=st,J=A.child,A.tag===22&&A.memoizedState!==null?zp(h):J!==null?(J.return=A,st=J):zp(h);for(;x!==null;)st=x,kp(x),x=x.sibling;st=h,tl=G,Vn=xe}Up(n)}else(h.subtreeFlags&8772)!==0&&x!==null?(x.return=h,st=x):Up(n)}}function Up(n){for(;st!==null;){var i=st;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Vn||nl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Vn)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:Ri(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var x=i.updateQueue;x!==null&&Fh(i,x,c);break;case 3:var A=i.updateQueue;if(A!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Fh(i,A,a)}break;case 5:var G=i.stateNode;if(a===null&&i.flags&4){a=G;var J=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":J.autoFocus&&a.focus();break;case"img":J.src&&(a.src=J.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var xe=i.alternate;if(xe!==null){var Ie=xe.memoizedState;if(Ie!==null){var Oe=Ie.dehydrated;Oe!==null&&wa(Oe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Vn||i.flags&512&&wu(i)}catch(Le){pn(i,i.return,Le)}}if(i===n){st=null;break}if(a=i.sibling,a!==null){a.return=i.return,st=a;break}st=i.return}}function Fp(n){for(;st!==null;){var i=st;if(i===n){st=null;break}var a=i.sibling;if(a!==null){a.return=i.return,st=a;break}st=i.return}}function zp(n){for(;st!==null;){var i=st;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{nl(4,i)}catch(J){pn(i,a,J)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(J){pn(i,h,J)}}var x=i.return;try{wu(i)}catch(J){pn(i,x,J)}break;case 5:var A=i.return;try{wu(i)}catch(J){pn(i,A,J)}}}catch(J){pn(i,i.return,J)}if(i===n){st=null;break}var G=i.sibling;if(G!==null){G.return=i.return,st=G;break}st=i.return}}var uv=Math.ceil,il=D.ReactCurrentDispatcher,Tu=D.ReactCurrentOwner,bi=D.ReactCurrentBatchConfig,Ht=0,Rn=null,_n=null,In=0,di=0,Xs=Lr(0),Mn=0,$a=null,fs=0,rl=0,Au=0,Xa=null,ni=null,Cu=0,Ys=1/0,pr=null,sl=!1,Ru=null,Or=null,al=!1,Br=null,ol=0,Ya=0,Nu=null,ll=-1,cl=0;function Zn(){return(Ht&6)!==0?Kt():ll!==-1?ll:ll=Kt()}function Hr(n){return(n.mode&1)===0?1:(Ht&2)!==0&&In!==0?In&-In:Xx.transition!==null?(cl===0&&(cl=Gt()),cl):(n=ct,n!==0||(n=window.event,n=n===void 0?16:Bf(n.type)),n)}function Di(n,i,a,c){if(50<Ya)throw Ya=0,Nu=null,Error(t(185));nn(n,a,c),((Ht&2)===0||n!==Rn)&&(n===Rn&&((Ht&2)===0&&(rl|=a),Mn===4&&Gr(n,In)),ii(n,c),a===1&&Ht===0&&(i.mode&1)===0&&(Ys=Kt()+500,Fo&&kr()))}function ii(n,i){var a=n.callbackNode;At(n,i);var c=ht(n,n===Rn?In:0);if(c===0)a!==null&&rr(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&rr(a),i===1)n.tag===0?$x(Bp.bind(null,n)):Eh(Bp.bind(null,n)),Gx(function(){(Ht&6)===0&&kr()}),a=null;else{switch(gi(c)){case 1:a=ar;break;case 4:a=Ar;break;case 16:a=ge;break;case 536870912:a=M;break;default:a=ge}a=Yp(a,Op.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Op(n,i){if(ll=-1,cl=0,(Ht&6)!==0)throw Error(t(327));var a=n.callbackNode;if(qs()&&n.callbackNode!==a)return null;var c=ht(n,n===Rn?In:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=ul(n,c);else{i=c;var h=Ht;Ht|=2;var x=Gp();(Rn!==n||In!==i)&&(pr=null,Ys=Kt()+500,ps(n,i));do try{hv();break}catch(G){Hp(n,G)}while(!0);Yc(),il.current=x,Ht=h,_n!==null?i=0:(Rn=null,In=0,i=Mn)}if(i!==0){if(i===2&&(h=Jt(n),h!==0&&(c=h,i=Pu(n,h))),i===1)throw a=$a,ps(n,0),Gr(n,c),ii(n,Kt()),a;if(i===6)Gr(n,c);else{if(h=n.current.alternate,(c&30)===0&&!dv(h)&&(i=ul(n,c),i===2&&(x=Jt(n),x!==0&&(c=x,i=Pu(n,x))),i===1))throw a=$a,ps(n,0),Gr(n,c),ii(n,Kt()),a;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ms(n,ni,pr);break;case 3:if(Gr(n,c),(c&130023424)===c&&(i=Cu+500-Kt(),10<i)){if(ht(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){Zn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Fc(ms.bind(null,n,ni,pr),i);break}ms(n,ni,pr);break;case 4:if(Gr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var A=31-re(c);x=1<<A,A=i[A],A>h&&(h=A),c&=~x}if(c=h,c=Kt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*uv(c/1960))-c,10<c){n.timeoutHandle=Fc(ms.bind(null,n,ni,pr),c);break}ms(n,ni,pr);break;case 5:ms(n,ni,pr);break;default:throw Error(t(329))}}}return ii(n,Kt()),n.callbackNode===a?Op.bind(null,n):null}function Pu(n,i){var a=Xa;return n.current.memoizedState.isDehydrated&&(ps(n,i).flags|=256),n=ul(n,i),n!==2&&(i=ni,ni=a,i!==null&&Du(i)),n}function Du(n){ni===null?ni=n:ni.push.apply(ni,n)}function dv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],x=h.getSnapshot;h=h.value;try{if(!Ai(x(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Gr(n,i){for(i&=~Au,i&=~rl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-re(i),c=1<<a;n[a]=-1,i&=~c}}function Bp(n){if((Ht&6)!==0)throw Error(t(327));qs();var i=ht(n,0);if((i&1)===0)return ii(n,Kt()),null;var a=ul(n,i);if(n.tag!==0&&a===2){var c=Jt(n);c!==0&&(i=c,a=Pu(n,c))}if(a===1)throw a=$a,ps(n,0),Gr(n,i),ii(n,Kt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ms(n,ni,pr),ii(n,Kt()),null}function Lu(n,i){var a=Ht;Ht|=1;try{return n(i)}finally{Ht=a,Ht===0&&(Ys=Kt()+500,Fo&&kr())}}function hs(n){Br!==null&&Br.tag===0&&(Ht&6)===0&&qs();var i=Ht;Ht|=1;var a=bi.transition,c=ct;try{if(bi.transition=null,ct=1,n)return n()}finally{ct=c,bi.transition=a,Ht=i,(Ht&6)===0&&kr()}}function Iu(){di=Xs.current,sn(Xs)}function ps(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Hx(a)),_n!==null)for(a=_n.return;a!==null;){var c=a;switch(Vc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ko();break;case 3:Ws(),sn(Qn),sn(Bn),nu();break;case 5:eu(c);break;case 4:Ws();break;case 13:sn(un);break;case 19:sn(un);break;case 10:qc(c.type._context);break;case 22:case 23:Iu()}a=a.return}if(Rn=n,_n=n=Vr(n.current,null),In=di=i,Mn=0,$a=null,Au=rl=fs=0,ni=Xa=null,cs!==null){for(i=0;i<cs.length;i++)if(a=cs[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,x=a.pending;if(x!==null){var A=x.next;x.next=h,c.next=A}a.pending=c}cs=null}return n}function Hp(n,i){do{var a=_n;try{if(Yc(),Xo.current=Zo,Yo){for(var c=dn.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}Yo=!1}if(ds=0,Cn=wn=dn=null,Ba=!1,Ha=0,Tu.current=null,a===null||a.return===null){Mn=1,$a=i,_n=null;break}e:{var x=n,A=a.return,G=a,J=i;if(i=In,G.flags|=32768,J!==null&&typeof J=="object"&&typeof J.then=="function"){var xe=J,Ie=G,Oe=Ie.tag;if((Ie.mode&1)===0&&(Oe===0||Oe===11||Oe===15)){var Le=Ie.alternate;Le?(Ie.updateQueue=Le.updateQueue,Ie.memoizedState=Le.memoizedState,Ie.lanes=Le.lanes):(Ie.updateQueue=null,Ie.memoizedState=null)}var et=fp(A);if(et!==null){et.flags&=-257,hp(et,A,G,x,i),et.mode&1&&dp(x,xe,i),i=et,J=xe;var lt=i.updateQueue;if(lt===null){var ut=new Set;ut.add(J),i.updateQueue=ut}else lt.add(J);break e}else{if((i&1)===0){dp(x,xe,i),ku();break e}J=Error(t(426))}}else if(an&&G.mode&1){var vn=fp(A);if(vn!==null){(vn.flags&65536)===0&&(vn.flags|=256),hp(vn,A,G,x,i),$c(js(J,G));break e}}x=J=js(J,G),Mn!==4&&(Mn=2),Xa===null?Xa=[x]:Xa.push(x),x=A;do{switch(x.tag){case 3:x.flags|=65536,i&=-i,x.lanes|=i;var ue=cp(x,J,i);Uh(x,ue);break e;case 1:G=J;var te=x.type,de=x.stateNode;if((x.flags&128)===0&&(typeof te.getDerivedStateFromError=="function"||de!==null&&typeof de.componentDidCatch=="function"&&(Or===null||!Or.has(de)))){x.flags|=65536,i&=-i,x.lanes|=i;var je=up(x,G,i);Uh(x,je);break e}}x=x.return}while(x!==null)}Wp(a)}catch(dt){i=dt,_n===a&&a!==null&&(_n=a=a.return);continue}break}while(!0)}function Gp(){var n=il.current;return il.current=Zo,n===null?Zo:n}function ku(){(Mn===0||Mn===3||Mn===2)&&(Mn=4),Rn===null||(fs&268435455)===0&&(rl&268435455)===0||Gr(Rn,In)}function ul(n,i){var a=Ht;Ht|=2;var c=Gp();(Rn!==n||In!==i)&&(pr=null,ps(n,i));do try{fv();break}catch(h){Hp(n,h)}while(!0);if(Yc(),Ht=a,il.current=c,_n!==null)throw Error(t(261));return Rn=null,In=0,Mn}function fv(){for(;_n!==null;)Vp(_n)}function hv(){for(;_n!==null&&!Ti();)Vp(_n)}function Vp(n){var i=Xp(n.alternate,n,di);n.memoizedProps=n.pendingProps,i===null?Wp(n):_n=i,Tu.current=null}function Wp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=sv(a,i,di),a!==null){_n=a;return}}else{if(a=av(a,i),a!==null){a.flags&=32767,_n=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Mn=6,_n=null;return}}if(i=i.sibling,i!==null){_n=i;return}_n=i=n}while(i!==null);Mn===0&&(Mn=5)}function ms(n,i,a){var c=ct,h=bi.transition;try{bi.transition=null,ct=1,pv(n,i,a,c)}finally{bi.transition=h,ct=c}return null}function pv(n,i,a,c){do qs();while(Br!==null);if((Ht&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var x=a.lanes|a.childLanes;if(it(n,x),n===Rn&&(_n=Rn=null,In=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||al||(al=!0,Yp(ge,function(){return qs(),null})),x=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||x){x=bi.transition,bi.transition=null;var A=ct;ct=1;var G=Ht;Ht|=4,Tu.current=null,lv(n,a),Ip(a,n),Ix(kc),So=!!Ic,kc=Ic=null,n.current=a,cv(a),rs(),Ht=G,ct=A,bi.transition=x}else n.current=a;if(al&&(al=!1,Br=n,ol=h),x=n.pendingLanes,x===0&&(Or=null),ie(a.stateNode),ii(n,Kt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(sl)throw sl=!1,n=Ru,Ru=null,n;return(ol&1)!==0&&n.tag!==0&&qs(),x=n.pendingLanes,(x&1)!==0?n===Nu?Ya++:(Ya=0,Nu=n):Ya=0,kr(),null}function qs(){if(Br!==null){var n=gi(ol),i=bi.transition,a=ct;try{if(bi.transition=null,ct=16>n?16:n,Br===null)var c=!1;else{if(n=Br,Br=null,ol=0,(Ht&6)!==0)throw Error(t(331));var h=Ht;for(Ht|=4,st=n.current;st!==null;){var x=st,A=x.child;if((st.flags&16)!==0){var G=x.deletions;if(G!==null){for(var J=0;J<G.length;J++){var xe=G[J];for(st=xe;st!==null;){var Ie=st;switch(Ie.tag){case 0:case 11:case 15:ja(8,Ie,x)}var Oe=Ie.child;if(Oe!==null)Oe.return=Ie,st=Oe;else for(;st!==null;){Ie=st;var Le=Ie.sibling,et=Ie.return;if(Rp(Ie),Ie===xe){st=null;break}if(Le!==null){Le.return=et,st=Le;break}st=et}}}var lt=x.alternate;if(lt!==null){var ut=lt.child;if(ut!==null){lt.child=null;do{var vn=ut.sibling;ut.sibling=null,ut=vn}while(ut!==null)}}st=x}}if((x.subtreeFlags&2064)!==0&&A!==null)A.return=x,st=A;else e:for(;st!==null;){if(x=st,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:ja(9,x,x.return)}var ue=x.sibling;if(ue!==null){ue.return=x.return,st=ue;break e}st=x.return}}var te=n.current;for(st=te;st!==null;){A=st;var de=A.child;if((A.subtreeFlags&2064)!==0&&de!==null)de.return=A,st=de;else e:for(A=te;st!==null;){if(G=st,(G.flags&2048)!==0)try{switch(G.tag){case 0:case 11:case 15:nl(9,G)}}catch(dt){pn(G,G.return,dt)}if(G===A){st=null;break e}var je=G.sibling;if(je!==null){je.return=G.return,st=je;break e}st=G.return}}if(Ht=h,kr(),ne&&typeof ne.onPostCommitFiberRoot=="function")try{ne.onPostCommitFiberRoot(O,n)}catch{}c=!0}return c}finally{ct=a,bi.transition=i}}return!1}function jp(n,i,a){i=js(a,i),i=cp(n,i,1),n=Fr(n,i,1),i=Zn(),n!==null&&(nn(n,1,i),ii(n,i))}function pn(n,i,a){if(n.tag===3)jp(n,n,a);else for(;i!==null;){if(i.tag===3){jp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Or===null||!Or.has(c))){n=js(a,n),n=up(i,n,1),i=Fr(i,n,1),n=Zn(),i!==null&&(nn(i,1,n),ii(i,n));break}}i=i.return}}function mv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Zn(),n.pingedLanes|=n.suspendedLanes&a,Rn===n&&(In&a)===a&&(Mn===4||Mn===3&&(In&130023424)===In&&500>Kt()-Cu?ps(n,0):Au|=a),ii(n,i)}function $p(n,i){i===0&&((n.mode&1)===0?i=1:(i=nt,nt<<=1,(nt&130023424)===0&&(nt=4194304)));var a=Zn();n=dr(n,i),n!==null&&(nn(n,i,a),ii(n,a))}function gv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),$p(n,a)}function xv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),$p(n,a)}var Xp;Xp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Qn.current)ti=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return ti=!1,rv(n,i,a);ti=(n.flags&131072)!==0}else ti=!1,an&&(i.flags&1048576)!==0&&Th(i,Oo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;el(n,i),n=i.pendingProps;var h=Fs(i,Bn.current);Vs(i,a),h=su(null,i,c,n,h,a);var x=au();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ei(c)?(x=!0,Uo(i)):x=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Jc(i),h.updater=Jo,i.stateNode=h,h._reactInternals=i,fu(i,c,n,a),i=gu(null,i,c,!0,x,a)):(i.tag=0,an&&x&&Gc(i),Kn(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(el(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=_v(c),n=Ri(c,n),h){case 0:i=mu(null,i,c,n,a);break e;case 1:i=_p(null,i,c,n,a);break e;case 11:i=pp(null,i,c,n,a);break e;case 14:i=mp(null,i,c,Ri(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ri(c,h),mu(n,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ri(c,h),_p(n,i,c,h,a);case 3:e:{if(yp(i),n===null)throw Error(t(387));c=i.pendingProps,x=i.memoizedState,h=x.element,kh(n,i),jo(i,c,null,a);var A=i.memoizedState;if(c=A.element,x.isDehydrated)if(x={element:c,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},i.updateQueue.baseState=x,i.memoizedState=x,i.flags&256){h=js(Error(t(423)),i),i=Sp(n,i,c,a,h);break e}else if(c!==h){h=js(Error(t(424)),i),i=Sp(n,i,c,a,h);break e}else for(ui=Dr(i.stateNode.containerInfo.firstChild),ci=i,an=!0,Ci=null,a=Lh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Bs(),c===h){i=hr(n,i,a);break e}Kn(n,i,c,a)}i=i.child}return i;case 5:return zh(i),n===null&&jc(i),c=i.type,h=i.pendingProps,x=n!==null?n.memoizedProps:null,A=h.children,Uc(c,h)?A=null:x!==null&&Uc(c,x)&&(i.flags|=32),vp(n,i),Kn(n,i,A,a),i.child;case 6:return n===null&&jc(i),null;case 13:return bp(n,i,a);case 4:return Qc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Hs(i,null,c,a):Kn(n,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ri(c,h),pp(n,i,c,h,a);case 7:return Kn(n,i,i.pendingProps,a),i.child;case 8:return Kn(n,i,i.pendingProps.children,a),i.child;case 12:return Kn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,x=i.memoizedProps,A=h.value,en(Go,c._currentValue),c._currentValue=A,x!==null)if(Ai(x.value,A)){if(x.children===h.children&&!Qn.current){i=hr(n,i,a);break e}}else for(x=i.child,x!==null&&(x.return=i);x!==null;){var G=x.dependencies;if(G!==null){A=x.child;for(var J=G.firstContext;J!==null;){if(J.context===c){if(x.tag===1){J=fr(-1,a&-a),J.tag=2;var xe=x.updateQueue;if(xe!==null){xe=xe.shared;var Ie=xe.pending;Ie===null?J.next=J:(J.next=Ie.next,Ie.next=J),xe.pending=J}}x.lanes|=a,J=x.alternate,J!==null&&(J.lanes|=a),Kc(x.return,a,i),G.lanes|=a;break}J=J.next}}else if(x.tag===10)A=x.type===i.type?null:x.child;else if(x.tag===18){if(A=x.return,A===null)throw Error(t(341));A.lanes|=a,G=A.alternate,G!==null&&(G.lanes|=a),Kc(A,a,i),A=x.sibling}else A=x.child;if(A!==null)A.return=x;else for(A=x;A!==null;){if(A===i){A=null;break}if(x=A.sibling,x!==null){x.return=A.return,A=x;break}A=A.return}x=A}Kn(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,Vs(i,a),h=yi(h),c=c(h),i.flags|=1,Kn(n,i,c,a),i.child;case 14:return c=i.type,h=Ri(c,i.pendingProps),h=Ri(c.type,h),mp(n,i,c,h,a);case 15:return gp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ri(c,h),el(n,i),i.tag=1,ei(c)?(n=!0,Uo(i)):n=!1,Vs(i,a),op(i,c,h),fu(i,c,h,a),gu(null,i,c,!0,n,a);case 19:return Mp(n,i,a);case 22:return xp(n,i,a)}throw Error(t(156,i.tag))};function Yp(n,i){return qn(n,i)}function vv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wi(n,i,a,c){return new vv(n,i,a,c)}function Uu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function _v(n){if(typeof n=="function")return Uu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===z)return 11;if(n===j)return 14}return 2}function Vr(n,i){var a=n.alternate;return a===null?(a=wi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function dl(n,i,a,c,h,x){var A=2;if(c=n,typeof n=="function")Uu(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case w:return gs(a.children,h,x,i);case N:A=8,h|=8;break;case Z:return n=wi(12,a,i,h|2),n.elementType=Z,n.lanes=x,n;case B:return n=wi(13,a,i,h),n.elementType=B,n.lanes=x,n;case W:return n=wi(19,a,i,h),n.elementType=W,n.lanes=x,n;case Q:return fl(a,h,x,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case V:A=10;break e;case $:A=9;break e;case z:A=11;break e;case j:A=14;break e;case ce:A=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=wi(A,a,i,h),i.elementType=n,i.type=c,i.lanes=x,i}function gs(n,i,a,c){return n=wi(7,n,c,i),n.lanes=a,n}function fl(n,i,a,c){return n=wi(22,n,c,i),n.elementType=Q,n.lanes=a,n.stateNode={isHidden:!1},n}function Fu(n,i,a){return n=wi(6,n,null,i),n.lanes=a,n}function zu(n,i,a){return i=wi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function yv(n,i,a,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bt(0),this.expirationTimes=Bt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bt(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Ou(n,i,a,c,h,x,A,G,J){return n=new yv(n,i,a,G,J),i===1?(i=1,x===!0&&(i|=8)):i=0,x=wi(3,null,null,i),n.current=x,x.stateNode=n,x.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jc(x),n}function Sv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function qp(n){if(!n)return Ir;n=n._reactInternals;e:{if(Et(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ei(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(ei(a))return wh(n,a,i)}return i}function Kp(n,i,a,c,h,x,A,G,J){return n=Ou(a,c,!0,n,h,x,A,G,J),n.context=qp(null),a=n.current,c=Zn(),h=Hr(a),x=fr(c,h),x.callback=i??null,Fr(a,x,h),n.current.lanes=h,nn(n,h,c),ii(n,c),n}function hl(n,i,a,c){var h=i.current,x=Zn(),A=Hr(h);return a=qp(a),i.context===null?i.context=a:i.pendingContext=a,i=fr(x,A),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Fr(h,i,A),n!==null&&(Di(n,h,A,x),Wo(n,h,A)),A}function pl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Zp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Bu(n,i){Zp(n,i),(n=n.alternate)&&Zp(n,i)}function bv(){return null}var Jp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Hu(n){this._internalRoot=n}ml.prototype.render=Hu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));hl(n,i,null,null)},ml.prototype.unmount=Hu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;hs(function(){hl(null,n,null,null)}),i[or]=null}};function ml(n){this._internalRoot=n}ml.prototype.unstable_scheduleHydration=function(n){if(n){var i=xi();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Rr.length&&i!==0&&i<Rr[a].priority;a++);Rr.splice(a,0,n),a===0&&zf(n)}};function Gu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function gl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Qp(){}function wv(n,i,a,c,h){if(h){if(typeof c=="function"){var x=c;c=function(){var xe=pl(A);x.call(xe)}}var A=Kp(i,c,n,0,null,!1,!1,"",Qp);return n._reactRootContainer=A,n[or]=A.current,Da(n.nodeType===8?n.parentNode:n),hs(),A}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var G=c;c=function(){var xe=pl(J);G.call(xe)}}var J=Ou(n,0,!1,null,null,!1,!1,"",Qp);return n._reactRootContainer=J,n[or]=J.current,Da(n.nodeType===8?n.parentNode:n),hs(function(){hl(i,J,a,c)}),J}function xl(n,i,a,c,h){var x=a._reactRootContainer;if(x){var A=x;if(typeof h=="function"){var G=h;h=function(){var J=pl(A);G.call(J)}}hl(i,A,n,h)}else A=wv(a,i,n,h,c);return pl(A)}xn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=fe(i.pendingLanes);a!==0&&(gn(i,a|1),ii(i,Kt()),(Ht&6)===0&&(Ys=Kt()+500,kr()))}break;case 13:hs(function(){var c=dr(n,1);if(c!==null){var h=Zn();Di(c,n,1,h)}}),Bu(n,1)}},Vi=function(n){if(n.tag===13){var i=dr(n,134217728);if(i!==null){var a=Zn();Di(i,n,134217728,a)}Bu(n,134217728)}},oi=function(n){if(n.tag===13){var i=Hr(n),a=dr(n,i);if(a!==null){var c=Zn();Di(a,n,i,c)}Bu(n,i)}},xi=function(){return ct},Nt=function(n,i){var a=ct;try{return ct=n,i()}finally{ct=a}},ye=function(n,i,a){switch(i){case"input":if(yt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var h=Io(c);if(!h)throw Error(t(90));Te(c),yt(c,h)}}}break;case"textarea":K(n,a);break;case"select":i=a.value,i!=null&&Zt(n,!!a.multiple,i,!1)}},Ce=Lu,De=hs;var Mv={usingClientEntryPoint:!1,Events:[ka,ks,Io,oe,Re,Lu]},qa={findFiberByHostInstance:ss,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ev={bundleType:qa.bundleType,version:qa.version,rendererPackageName:qa.rendererPackageName,rendererConfig:qa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Yn(n),n===null?null:n.stateNode},findFiberByHostInstance:qa.findFiberByHostInstance||bv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{O=vl.inject(Ev),ne=vl}catch{}}return ri.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mv,ri.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gu(i))throw Error(t(200));return Sv(n,i,null,a)},ri.createRoot=function(n,i){if(!Gu(n))throw Error(t(299));var a=!1,c="",h=Jp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=Ou(n,1,!1,null,null,a,!1,c,h),n[or]=i.current,Da(n.nodeType===8?n.parentNode:n),new Hu(i)},ri.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Yn(i),n=n===null?null:n.stateNode,n},ri.flushSync=function(n){return hs(n)},ri.hydrate=function(n,i,a){if(!gl(i))throw Error(t(200));return xl(null,n,i,!0,a)},ri.hydrateRoot=function(n,i,a){if(!Gu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,x="",A=Jp;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(x=a.identifierPrefix),a.onRecoverableError!==void 0&&(A=a.onRecoverableError)),i=Kp(i,null,n,1,a??null,h,!1,x,A),n[or]=i.current,Da(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new ml(i)},ri.render=function(n,i,a){if(!gl(i))throw Error(t(200));return xl(null,n,i,!1,a)},ri.unmountComponentAtNode=function(n){if(!gl(n))throw Error(t(40));return n._reactRootContainer?(hs(function(){xl(null,null,n,!1,function(){n._reactRootContainer=null,n[or]=null})}),!0):!1},ri.unstable_batchedUpdates=Lu,ri.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!gl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return xl(n,i,a,!1,c)},ri.version="18.3.1-next-f1338f8080-20240426",ri}var o0;function Uv(){if(o0)return ju.exports;o0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ju.exports=kv(),ju.exports}var l0;function Fv(){if(l0)return _l;l0=1;var s=Uv();return _l.createRoot=s.createRoot,_l.hydrateRoot=s.hydrateRoot,_l}var zv=Fv();const Ov=cm(zv),ua=[{id:"brown-noise",title:"Brownian Deep Focus",category:"Deep Focus",tagline:"Warm sub-bass rumble for continuous coding & writing",description:"Mathematically integrated brownian spectrum with deep 450Hz low-pass rolloff. Proven to mask background distractions and alleviate cognitive fatigue.",frequency:"0 – 450 Hz Brown Spectrum",accentColor:"#f59e0b"},{id:"celestial-drone",title:"Celestial 432Hz Drone",category:"Mindfulness",tagline:"Harmonically tuned meditative Tibetan chords",description:"Multi-oscillator harmonic chord centered around the natural 432Hz tuning fork with gentle phase chorus and slow breathing resonance.",frequency:"432 Hz Pythagorean Fundamental",accentColor:"#a855f7"},{id:"binaural-gamma",title:"Gamma 40Hz Flow State",category:"Cognitive Flow",tagline:"High-cognition binaural carrier for intense problem-solving",description:"Stereo carrier tones (200Hz L / 240Hz R) inducing 40Hz gamma oscillations in the cerebral cortex, associated with high-level information processing and recall.",frequency:"40 Hz Gamma Difference Wave",accentColor:"#38bdf8"},{id:"binaural-alpha",title:"Alpha 10Hz Quiet Mind",category:"Mindfulness",tagline:"Calm relaxed alertness for reading and reflection",description:"Stereo carrier tones (210Hz L / 220Hz R) stimulating 10Hz alpha rhythms, optimal for sustained reading, journaling, and stress reduction.",frequency:"10 Hz Alpha Difference Wave",accentColor:"#34d399"},{id:"rain-storm",title:"Midnight Rain Sanctuary",category:"Deep Focus",tagline:"Gentle nocturnal rainfall with rolling thunder",description:"Procedurally shaped pink noise with gentle resonant filtering, simulating a peaceful rain shower against cabin windows in deep space.",frequency:"Pink Noise Spectrum & Low Rumble",accentColor:"#818cf8"}];class Bv{constructor(){mr(this,"ctx",null);mr(this,"masterGain",null);mr(this,"analyser",null);mr(this,"activeNodes",[]);mr(this,"currentId",null);mr(this,"_isPlaying",!1);mr(this,"_volume",.65);mr(this,"_isMuted",!1)}initContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this._isMuted?0:this._volume,this.ctx.currentTime),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=64,this.analyser.smoothingTimeConstant=.85,this.masterGain.connect(this.analyser),this.analyser.connect(this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume()}get isPlaying(){return this._isPlaying}get currentSoundscape(){return this.currentId}get volume(){return this._volume}get isMuted(){return this._isMuted}getAnalyser(){return this.analyser}setVolume(e){if(this._volume=Math.max(0,Math.min(1,e)),this.masterGain&&this.ctx){const t=this._isMuted?0:this._volume;this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime),this.masterGain.gain.linearRampToValueAtTime(t,this.ctx.currentTime+.05)}}toggleMute(){return this._isMuted=!this._isMuted,this.setVolume(this._volume),this._isMuted}stop(){!this.ctx||!this._isPlaying||(this.masterGain&&(this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime),this.masterGain.gain.linearRampToValueAtTime(.001,this.ctx.currentTime+.12)),setTimeout(()=>{this.cleanupNodes(),this._isPlaying=!1,this.currentId=null},130))}cleanupNodes(){for(const e of this.activeNodes)try{"stop"in e&&typeof e.stop=="function"&&e.stop(),e.disconnect()}catch{}this.activeNodes=[]}play(e){if(this.initContext(),!(!this.ctx||!this.masterGain)&&!(this._isPlaying&&this.currentId===e))switch(this.cleanupNodes(),this.currentId=e,this._isPlaying=!0,this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime),this.masterGain.gain.setValueAtTime(.001,this.ctx.currentTime),this.masterGain.gain.linearRampToValueAtTime(this._isMuted?0:this._volume,this.ctx.currentTime+.4),e){case"brown-noise":this.buildBrownNoise();break;case"celestial-drone":this.buildCelestialDrone();break;case"binaural-gamma":this.buildBinauralBeat(200,40);break;case"binaural-alpha":this.buildBinauralBeat(210,10);break;case"rain-storm":this.buildRainStorm();break}}buildBrownNoise(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.sampleRate*5,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),r=t.getChannelData(0);let o=0;for(let d=0;d<e;d++){const m=Math.random()*2-1;o=(o+.02*m)/1.02,r[d]=o*3.2}const l=2048;for(let d=0;d<l;d++){const m=d/l;r[d]=r[d]*m+r[e-l+d]*(1-m)}const u=this.ctx.createBufferSource();u.buffer=t,u.loop=!0;const p=this.ctx.createBiquadFilter();p.type="lowpass",p.frequency.setValueAtTime(450,this.ctx.currentTime),p.Q.setValueAtTime(.7,this.ctx.currentTime),u.connect(p),p.connect(this.masterGain),u.start(),this.activeNodes.push(u,p)}buildCelestialDrone(){if(!this.ctx||!this.masterGain)return;const e=216,t=[e,e*1.5,e*2,e*2.5],r=[-4,3,-2,5];t.forEach((o,l)=>{if(!this.ctx||!this.masterGain)return;const u=this.ctx.createOscillator();u.type=l%2===0?"sine":"triangle",u.frequency.setValueAtTime(o,this.ctx.currentTime),u.detune.setValueAtTime(r[l],this.ctx.currentTime);const p=this.ctx.createGain();p.gain.setValueAtTime(.18/(l+1),this.ctx.currentTime);const d=this.ctx.createOscillator();d.frequency.setValueAtTime(.08+l*.03,this.ctx.currentTime);const m=this.ctx.createGain();m.gain.setValueAtTime(.04,this.ctx.currentTime),d.connect(m),m.connect(p.gain),u.connect(p),p.connect(this.masterGain),u.start(),d.start(),this.activeNodes.push(u,d,p,m)})}buildBinauralBeat(e,t){if(!this.ctx||!this.masterGain)return;const r=this.ctx.createOscillator();r.type="sine",r.frequency.setValueAtTime(e,this.ctx.currentTime);const o=this.ctx.createGain();o.gain.setValueAtTime(.22,this.ctx.currentTime);const l=this.ctx.createOscillator();l.type="sine",l.frequency.setValueAtTime(e+t,this.ctx.currentTime);const u=this.ctx.createGain();u.gain.setValueAtTime(.22,this.ctx.currentTime);const p=this.ctx.createChannelMerger(2);r.connect(o),o.connect(p,0,0),l.connect(u),u.connect(p,0,1);const d=this.ctx.createOscillator();d.type="triangle",d.frequency.setValueAtTime(e/2,this.ctx.currentTime);const m=this.ctx.createGain();m.gain.setValueAtTime(.08,this.ctx.currentTime),d.connect(m),m.connect(this.masterGain),p.connect(this.masterGain),r.start(),l.start(),d.start(),this.activeNodes.push(r,l,d,o,u,m,p)}buildRainStorm(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.sampleRate*4,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),r=t.getChannelData(0);let o=0,l=0,u=0,p=0,d=0,m=0,g=0;for(let b=0;b<e;b++){const E=Math.random()*2-1;o=.99886*o+E*.0555179,l=.99332*l+E*.0750759,u=.969*u+E*.153852,p=.8665*p+E*.3104856,d=.55*d+E*.5329522,m=-.7616*m-E*.016898,r[b]=(o+l+u+p+d+m+g+E*.5362)*.12,g=E*.115926}const v=this.ctx.createBufferSource();v.buffer=t,v.loop=!0;const _=this.ctx.createBiquadFilter();_.type="lowpass",_.frequency.setValueAtTime(1200,this.ctx.currentTime),v.connect(_),_.connect(this.masterGain),v.start(),this.activeNodes.push(v,_)}playFocusChime(){try{if(this.initContext(),!this.ctx)return;const e=this.ctx.currentTime,t=[528,1056,1584],r=[.28,.09,.03],o=this.ctx.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.45,e+.04),o.gain.exponentialRampToValueAtTime(1e-4,e+3.4),o.connect(this.ctx.destination),t.forEach((l,u)=>{if(!this.ctx)return;const p=this.ctx.createOscillator(),d=this.ctx.createGain();p.type="sine",p.frequency.setValueAtTime(l,e),d.gain.setValueAtTime(r[u],e),p.connect(d),d.connect(o),p.start(e),p.stop(e+3.5)})}catch(e){console.warn("Focus chime could not play:",e)}}playBreakChime(){try{if(this.initContext(),!this.ctx)return;const e=this.ctx.currentTime;[{freq:523.25,start:0,dur:1.8,vol:.22},{freq:659.25,start:.22,dur:1.8,vol:.2},{freq:783.99,start:.44,dur:2.2,vol:.25},{freq:1046.5,start:.66,dur:2.8,vol:.18}].forEach(({freq:r,start:o,dur:l,vol:u})=>{if(!this.ctx)return;const p=e+o,d=this.ctx.createOscillator(),m=this.ctx.createGain();d.type="sine",d.frequency.setValueAtTime(r,p),m.gain.setValueAtTime(0,p),m.gain.linearRampToValueAtTime(u,p+.04),m.gain.exponentialRampToValueAtTime(1e-4,p+l),d.connect(m),m.connect(this.ctx.destination),d.start(p),d.stop(p+l+.1)})}catch(e){console.warn("Break chime could not play:",e)}}}const Sr=new Bv;class Hv{startKeepAlive(){}stopKeepAlive(){}updateMetadata(e){if(!(typeof window>"u"||!("mediaSession"in navigator)))try{const t=e.artworkUrl?[{src:e.artworkUrl,sizes:"96x96",type:"image/jpeg"},{src:e.artworkUrl,sizes:"128x128",type:"image/jpeg"},{src:e.artworkUrl,sizes:"192x192",type:"image/jpeg"},{src:e.artworkUrl,sizes:"256x256",type:"image/jpeg"},{src:e.artworkUrl,sizes:"512x512",type:"image/jpeg"}]:[];navigator.mediaSession.metadata=new MediaMetadata({title:e.title||"FOR ME Sanctuary",artist:e.artist||"Private Life Ledger",album:e.album||"Sanctuary Audio",artwork:t}),navigator.mediaSession.playbackState="playing",navigator.mediaSession.setActionHandler("play",()=>{e.onPlay(),navigator.mediaSession.playbackState="playing"}),navigator.mediaSession.setActionHandler("pause",()=>{e.onPause(),navigator.mediaSession.playbackState="paused"}),e.onNext?navigator.mediaSession.setActionHandler("nexttrack",e.onNext):navigator.mediaSession.setActionHandler("nexttrack",null),e.onPrev?navigator.mediaSession.setActionHandler("previoustrack",e.onPrev):navigator.mediaSession.setActionHandler("previoustrack",null)}catch(t){console.warn("[MediaSession] Metadata update error:",t)}}setPlaybackState(e){if(!(typeof window>"u"||!("mediaSession"in navigator)))try{navigator.mediaSession.playbackState=e}catch{}}}const Fi=new Hv;function Gv(s){if(!s||typeof s!="string")return null;const e=s.trim();let t,r;const o=e.match(/[?&]list=([a-zA-Z0-9_-]+)/);o&&o[1]&&(r=o[1]);const l=e.match(/[?&]v=([a-zA-Z0-9_-]{11})/);if(l&&l[1]&&(t=l[1]),!t){const p=e.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);p&&p[1]&&(t=p[1])}if(!t){const p=e.match(/youtube\.com\/(?:live|embed|v|shorts)\/([a-zA-Z0-9_-]{11})/);p&&p[1]&&(t=p[1])}if(!t&&!r&&/^[a-zA-Z0-9_-]{11}$/.test(e)&&(t=e),!t&&!r&&/^(?:PL|RD|UU|FL|OLAK5uy_)[a-zA-Z0-9_-]+$/.test(e)&&(r=e),!t&&!r)return null;let u="video";return r&&t?u="video_in_playlist":r&&(u="playlist"),{type:u,videoId:t,playlistId:r,cleanUrl:e}}function Vv(s){return s?`https://img.youtube.com/vi/${s}/hqdefault.jpg`:"https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=600&auto=format&fit=crop"}const Ql=[{id:"lofi-girl-main",title:"Lofi Girl — Beats to Relax / Study to",type:"video",videoId:"jfKfPfyJRdk",url:"https://www.youtube.com/watch?v=jfKfPfyJRdk",channel:"Lofi Girl",thumbnailUrl:"https://img.youtube.com/vi/jfKfPfyJRdk/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"synthwave-chilledcow",title:"Synthwave Radio — Chill Beats to Code & Chill",type:"video",videoId:"4xDzrJKXOOY",url:"https://www.youtube.com/watch?v=4xDzrJKXOOY",channel:"Lofi Girl / Synthwave Boy",thumbnailUrl:"https://img.youtube.com/vi/4xDzrJKXOOY/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"deep-focus-ambient",title:"Deep Focus Ambient — Flow State Alpha Waves",type:"video",videoId:"lTRiuFIWV54",url:"https://www.youtube.com/watch?v=lTRiuFIWV54",channel:"Greenred Productions",thumbnailUrl:"https://img.youtube.com/vi/lTRiuFIWV54/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"peaceful-piano-solitude",title:"Peaceful Piano & Soft Rain — Gentle Solitude",type:"video",videoId:"1WUEk0R79_Q",url:"https://www.youtube.com/watch?v=1WUEk0R79_Q",channel:"Quiet Quest",thumbnailUrl:"https://img.youtube.com/vi/1WUEk0R79_Q/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"classical-focus-mozart",title:"Classical Focus — Mozart, Beethoven, Bach",type:"video",videoId:"WPni755-Krg",url:"https://www.youtube.com/watch?v=WPni755-Krg",channel:"HALIDONMUSIC",thumbnailUrl:"https://img.youtube.com/vi/WPni755-Krg/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"cozy-coffee-shop-lofi",title:"Cozy Coffee Shop Lofi — Rainy Night Ambience",type:"video",videoId:"-5KAN9_CzSA",url:"https://www.youtube.com/watch?v=-5KAN9_CzSA",channel:"Calmed by Nature",thumbnailUrl:"https://img.youtube.com/vi/-5KAN9_CzSA/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()}],um=Se.createContext(void 0),Ks={palette:"cosmic-royal",speed:"balanced",amplitude:"majestic",waveGeometry:"dunes",waveLayerDensity:"deep",horizonHeight:"balanced",waveStrokeOpacity:.5,interactiveParallax:!0,celestialBody:"crescent-moon",celestialPosition:"default",celestialScaleMultiplier:1,rotationSpeed:"standard",showNebulaDust:!0,nebulaIntensity:"vivid",showConstellations:!0,showComet:!0,shootingStarMode:"occasional",showStars:!0,starDensity:"balanced",showCrossStars:!1,showOrbitalTrack:!1,showMeridian:!1,clockFontStyle:"tabular",clockSize:"standard",clockPosition:"center",clockDivider:"colon",clockColor:"palette",clockFormat:"12h",showSeconds:!0,showDate:!0,showGreeting:!0,clockHalo:"pulsar"},Za={name:"Azan",motto:"Remember, you are here for you.",defaultFocusTopic:"Engineering",defaultFocusMode:"Deep Work"},Yu={focusDurationMinutes:25,breakDurationMinutes:5,displayMode:"telemetry",autoStartBreaks:!0,soundEnabled:!0},Kr=(s,e)=>{var u;if(!s)return e;const t=s.trim().match(/(\d+)(?::(\d+))?\s*(am|pm)?/i);if(!t)return e;let r=parseInt(t[1],10);const o=t[2]?parseInt(t[2],10):0,l=(u=t[3])==null?void 0:u.toLowerCase();return l==="pm"&&r<12&&(r+=12),l==="am"&&r===12&&(r=0),Math.min(24,Math.max(0,r+o/60))},yl=[{id:"r1",title:"Morning Protocol",timeRange:"06:00 – 09:00",startHour:6,endHour:9,description:"Hydration, natural sunlight, 30-min movement, deep work session.",iconType:"morning",colorTag:"#f59e0b"},{id:"r2",title:"Core Deep Work",timeRange:"09:00 – 17:00",startHour:9,endHour:17,description:"High-leverage engineering problem solving, core building goals, focused sprints.",iconType:"afternoon",colorTag:"#8b5cf6"},{id:"r3",title:"Evening Wind-Down",timeRange:"17:00 – 22:30",startHour:17,endHour:22.5,description:"Reflection, physical cooldown, reading, digital sunset and deep recovery.",iconType:"evening",colorTag:"#3b82f6"}],Wv=({children:s})=>{const[e,t]=Se.useState(()=>{try{const ge=localStorage.getItem("for_me_profile");if(ge){const Je=JSON.parse(ge);return Je.name==="Viren"?{...Za,name:"Azan"}:{...Za,...Je}}return Za}catch{return Za}}),r=ge=>{t(Je=>{const M={...Je,...ge};return localStorage.setItem("for_me_profile",JSON.stringify(M)),M})};Se.useEffect(()=>{localStorage.setItem("for_me_profile",JSON.stringify(e))},[e]);const[o,l]=Se.useState(()=>{try{return localStorage.getItem("for_me_app_theme")==="light"?"light":"dark"}catch{return"dark"}}),u=()=>{l(ge=>ge==="light"?"dark":"light")};Se.useEffect(()=>{localStorage.setItem("for_me_app_theme",o),o==="light"?(document.documentElement.classList.add("theme-light"),document.documentElement.classList.remove("theme-dark")):(document.documentElement.classList.add("theme-dark"),document.documentElement.classList.remove("theme-light"))},[o]);const[p,d]=Se.useState(()=>{try{const ge=localStorage.getItem("for_me_is_hud_hidden");return ge?JSON.parse(ge):!1}catch{return!1}}),m=()=>d(ge=>!ge);Se.useEffect(()=>{localStorage.setItem("for_me_is_hud_hidden",JSON.stringify(p))},[p]);const[g,v]=Se.useState(()=>{try{return localStorage.getItem("for_me_wallpaper_theme")||"cosmic-cliffs"}catch{return"cosmic-cliffs"}});Se.useEffect(()=>{localStorage.setItem("for_me_wallpaper_theme",g)},[g]);const[_,b]=Se.useState(()=>{try{const ge=localStorage.getItem("for_me_wallpaper_settings_v3")||localStorage.getItem("for_me_wallpaper_settings_v2");return ge?{...Ks,...JSON.parse(ge)}:Ks}catch{return Ks}}),E=ge=>{b(Je=>{const M={...Je,...ge};return localStorage.setItem("for_me_wallpaper_settings_v3",JSON.stringify(M)),M})},C=()=>{b(Ks),localStorage.setItem("for_me_wallpaper_settings_v3",JSON.stringify(Ks))},[y,S]=Se.useState(()=>{try{const ge=localStorage.getItem("for_me_tasks");return ge?JSON.parse(ge):[{id:"1",text:"Core engineering deep focus sprint",completed:!1},{id:"2",text:"System architecture review & refinement",completed:!1},{id:"3",text:"Physical movement & hydration (8 glasses)",completed:!1}]}catch{return[{id:"1",text:"Core engineering deep focus sprint",completed:!1}]}});Se.useEffect(()=>{localStorage.setItem("for_me_tasks",JSON.stringify(y))},[y]);const R=ge=>{S(Je=>Je.map(M=>M.id===ge?{...M,completed:!M.completed,completedAt:M.completed?void 0:new Date().toISOString()}:M))},F=ge=>{if(!ge.trim())return;const Je={id:`task_${Date.now()}`,text:ge.trim(),completed:!1};S(M=>[Je,...M])},D=ge=>{S(Je=>Je.filter(M=>M.id!==ge))},[I,L]=Se.useState(()=>{try{const ge=localStorage.getItem("for_me_habits");return ge?JSON.parse(ge):[{id:"h1",name:"Deep Focus & Engineering Block",completed:!1,streak:3},{id:"h2",name:"Hydration Target (8 Glasses)",completed:!1,streak:5},{id:"h3",name:"Mindful Walk & Movement",completed:!1,streak:2}]}catch{return[{id:"h1",name:"Deep Focus & Engineering Block",completed:!1,streak:1}]}});Se.useEffect(()=>{localStorage.setItem("for_me_habits",JSON.stringify(I))},[I]);const w=ge=>{L(Je=>Je.map(M=>{if(M.id===ge){const O=!M.completed;return{...M,completed:O,streak:O?M.streak+1:Math.max(0,M.streak-1)}}return M}))},N=ge=>{if(!ge.trim())return;const Je={id:`habit_${Date.now()}`,name:ge.trim(),completed:!1,streak:0};L(M=>[...M,Je])},Z=ge=>{L(Je=>Je.filter(M=>M.id!==ge))},[V,$]=Se.useState(()=>{try{const ge=localStorage.getItem("for_me_routines");return ge?JSON.parse(ge):yl}catch{return yl}});Se.useEffect(()=>{localStorage.setItem("for_me_routines",JSON.stringify(V))},[V]);const z=ge=>{const Je=ge.timeRange.split(/[-–—to]/i),M=ge.startHour!==void 0?ge.startHour:Kr(Je[0],9),O=ge.endHour!==void 0?ge.endHour:Kr(Je[1],M+1),ne={id:`routine_${Date.now()}`,...ge,startHour:M,endHour:O,colorTag:ge.colorTag||"#8b5cf6"};$(ie=>[...ie,ne])},B=(ge,Je)=>{$(M=>M.map(O=>{if(O.id!==ge)return O;const ne={...O,...Je};if(Je.timeRange&&(Je.startHour===void 0||Je.endHour===void 0)){const ie=Je.timeRange.split(/[-–—to]/i);ne.startHour=Kr(ie[0],ne.startHour||9),ne.endHour=Kr(ie[1],ne.endHour||17)}return ne}))},W=ge=>{$(Je=>Je.filter(M=>M.id!==ge))},j=()=>{$(yl)},[ce,Q]=Se.useState(null),[Y,X]=Se.useState(0);Se.useEffect(()=>{const ge=()=>{const M=new Date,O=M.getHours()+M.getMinutes()/60,ne=M.getHours()*60+M.getMinutes();let ie=null,re=0;for(const Ve of V){let Ke=Ve.startHour,He=Ve.endHour;if(Ke===void 0||He===void 0){const We=Ve.timeRange.split(/[-–—to]/i);Ke=Kr(We[0],0),He=Kr(We[1],24)}if(Ke<=He){if(O>=Ke&&O<He){ie=Ve;const We=Math.round(He*60);re=Math.max(0,We-ne);break}}else if(O>=Ke||O<He){ie=Ve;const We=Math.round(He*60);O>=Ke?re=Math.max(0,1440-ne+We):re=Math.max(0,We-ne);break}}Q(ie),X(re)};ge();const Je=setInterval(ge,15e3);return()=>clearInterval(Je)},[V]);const[H,P]=Se.useState(0),[q,Ee]=Se.useState(!1),[ee,le]=Se.useState(e.defaultFocusTopic||"Engineering"),[be,Ae]=Se.useState(()=>{try{const ge=localStorage.getItem("for_me_study_sessions");return ge?JSON.parse(ge):[]}catch{return[]}});Se.useEffect(()=>{let ge=null;return q?ge=setInterval(()=>{P(Je=>Je+1)},1e3):!q&&H!==0&&clearInterval(ge),()=>clearInterval(ge)},[q,H]);const we=()=>Ee(ge=>!ge),ze=()=>{if(H>30){const ge={id:`ses_${Date.now()}`,subject:ee,durationSeconds:H,timestamp:new Date().toISOString()};Ae(Je=>{const M=[ge,...Je];return localStorage.setItem("for_me_study_sessions",JSON.stringify(M)),M})}Ee(!1),P(0)},[qe,ke]=Se.useState(()=>{try{const ge=localStorage.getItem("for_me_pomodoro_settings");return ge?{...Yu,...JSON.parse(ge)}:Yu}catch{return Yu}});Se.useEffect(()=>{localStorage.setItem("for_me_pomodoro_settings",JSON.stringify(qe))},[qe]);const[Te,Ue]=Se.useState("idle"),[Xe,mt]=Se.useState(()=>qe.focusDurationMinutes*60),[me,yt]=Se.useState(()=>qe.focusDurationMinutes*60);Se.useEffect(()=>{let ge=null;return(Te==="focus"||Te==="break")&&(ge=setInterval(()=>{mt(Je=>{if(Je<=1)if(Te==="focus"){qe.soundEnabled&&Sr.playFocusChime();const M=me,O={id:`ses_${Date.now()}`,subject:ee,mode:"Pomodoro Focus",durationSeconds:M,timestamp:new Date().toISOString()};if(Ae(ne=>{const ie=[O,...ne];return localStorage.setItem("for_me_study_sessions",JSON.stringify(ie)),ie}),qe.autoStartBreaks){Ue("break");const ne=qe.breakDurationMinutes*60;return yt(ne),ne}else{Ue("idle");const ne=qe.focusDurationMinutes*60;return yt(ne),ne}}else{qe.soundEnabled&&Sr.playBreakChime(),Ue("idle");const M=qe.focusDurationMinutes*60;return yt(M),M}return Je-1})},1e3)),()=>{ge&&clearInterval(ge)}},[Te,me,qe,ee]);const Lt=ge=>{const M=(ge||qe.focusDurationMinutes)*60;yt(M),mt(M),Ue("focus")},on=()=>{(Te==="focus"||Te==="break")&&Ue("paused")},Ut=()=>{Te==="paused"&&Ue("focus")},Zt=()=>{Te==="focus"?Ue("paused"):Te==="paused"?Ue("focus"):Te==="break"?Ue("paused"):Lt()},jt=()=>{Ue("idle");const ge=qe.focusDurationMinutes*60;yt(ge),mt(ge)},ln=()=>{if(Te==="focus"){Ue("break");const ge=qe.breakDurationMinutes*60;yt(ge),mt(ge)}else{Ue("idle");const ge=qe.focusDurationMinutes*60;yt(ge),mt(ge)}},K=()=>{ke(ge=>({...ge,displayMode:ge.displayMode==="telemetry"?"numbers":"telemetry"}))},[Ft,_t]=Se.useState(()=>{try{const ge=localStorage.getItem("for_me_hydration");return ge?JSON.parse(ge):62.5}catch{return 62.5}});Se.useEffect(()=>{localStorage.setItem("for_me_hydration",JSON.stringify(Ft))},[Ft]);const[It,he]=Se.useState(()=>{try{const ge=localStorage.getItem("for_me_sleep_hours");return ge?JSON.parse(ge):8}catch{return 8}}),Mt=ge=>{he(ge),localStorage.setItem("for_me_sleep_hours",JSON.stringify(ge))},[tt,rt]=Se.useState(()=>{try{const ge=localStorage.getItem("for_me_daily_rating");return ge?JSON.parse(ge):8}catch{return 8}});Se.useEffect(()=>{localStorage.setItem("for_me_daily_rating",JSON.stringify(tt))},[tt]);const k=()=>{const ge=new Date,Je=ge.getFullYear(),M=String(ge.getMonth()+1).padStart(2,"0"),O=String(ge.getDate()).padStart(2,"0");return`${Je}-${M}-${O}`},[T,se]=Se.useState(()=>{try{return localStorage.getItem("for_me_last_active_date")||k()}catch{return k()}}),Pe=ge=>{if(S(Je=>{const M=Je.map(O=>({...O,completed:!1,completedAt:void 0}));return localStorage.setItem("for_me_tasks",JSON.stringify(M)),M}),L(Je=>{const M=Je.map(O=>({...O,completed:!1,streak:O.completed?O.streak:0}));return localStorage.setItem("for_me_habits",JSON.stringify(M)),M}),_t(0),localStorage.setItem("for_me_hydration",JSON.stringify(0)),H>30){const Je={id:`ses_${Date.now()}`,subject:ee,durationSeconds:H,timestamp:new Date().toISOString()};Ae(M=>{const O=[Je,...M];return localStorage.setItem("for_me_study_sessions",JSON.stringify(O)),O})}Ee(!1),P(0),se(ge),localStorage.setItem("for_me_last_active_date",ge)};Se.useEffect(()=>{const ge=()=>{const M=k(),O=localStorage.getItem("for_me_last_active_date");O?O!==M&&Pe(M):(localStorage.setItem("for_me_last_active_date",M),se(M))};ge();const Je=setInterval(ge,1e4);return window.addEventListener("focus",ge),()=>{clearInterval(Je),window.removeEventListener("focus",ge)}},[H,ee]);const Me=()=>{const ge=k();Pe(ge)},Fe=()=>{["for_me_profile","for_me_tasks","for_me_habits","for_me_routines","for_me_hydration","for_me_sleep_hours","for_me_daily_rating","for_me_study_sessions","for_me_pomodoro_settings","for_me_wallpaper_settings_v3","for_me_wallpaper_theme","for_me_app_theme","for_me_is_hud_hidden","for_me_last_active_date","for_me_active_yt","for_me_saved_yt_library"].forEach(Je=>localStorage.removeItem(Je)),t(Za),S([{id:"1",text:"Core engineering deep focus sprint",completed:!1},{id:"2",text:"System architecture review & refinement",completed:!1},{id:"3",text:"Physical movement & hydration (8 glasses)",completed:!1}]),L([{id:"h1",name:"Deep Focus & Engineering Block",completed:!1,streak:0},{id:"h2",name:"Hydration Target (8 Glasses)",completed:!1,streak:0},{id:"h3",name:"Mindful Walk & Movement",completed:!1,streak:0}]),$(yl),_t(0),he(8),rt(8),P(0),Ee(!1),Ae([]),b(Ks),se(k())},[Ge,ve]=Se.useState("youtube"),[ye,_e]=Se.useState(!1),[U,ae]=Se.useState("brown-noise"),[oe,Re]=Se.useState(.65),[Ce,De]=Se.useState(!1),[$e,at]=Se.useState(!1),[Ne,Qe]=Se.useState(!1),[ot,Be]=Se.useState(()=>{try{const ge=localStorage.getItem("for_me_active_yt");return ge?JSON.parse(ge):Ql[0]}catch{return Ql[0]}}),[ft,vt]=Se.useState(70),[tn,bn]=Se.useState(!1),[mn,St]=Se.useState(!1),[pt,Et]=Se.useState(()=>{try{const ge=localStorage.getItem("for_me_saved_yt_library");return ge?JSON.parse(ge):[]}catch{return[]}});Se.useEffect(()=>{ot&&localStorage.setItem("for_me_active_yt",JSON.stringify(ot))},[ot]),Se.useEffect(()=>{localStorage.setItem("for_me_saved_yt_library",JSON.stringify(pt))},[pt]);const Yt=ge=>{if($e){at(!1);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("pauseVideo")}catch{}}ve("ambient");const Je=ge||U;ae(Je),Sr.play(Je),_e(!0);const M=ua.find(O=>O.id===Je);Fi.startKeepAlive(),Fi.updateMetadata({title:(M==null?void 0:M.title)||"Procedural Soundscape",artist:"FOR ME Sanctuary (Offline)",album:"Sound Sanctuary",onPlay:()=>Yt(Je),onPause:$t})},$t=()=>{Sr.stop(),_e(!1),Fi.stopKeepAlive(),Fi.setPlaybackState("paused")},Fn=ge=>{Re(ge),Sr.setVolume(ge)},Yn=()=>{const ge=Sr.toggleMute();De(ge)},zn=ge=>{Sr.stop(),_e(!1),Be(ge),ve("youtube"),at(!0),bn(!1);try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}},qn=()=>{if($e){at(!1);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("pauseVideo")}catch{}}else{Sr.stop(),_e(!1),ve("youtube"),at(!0),bn(!1);try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute(),typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("playVideo")}catch{}}},rr=()=>{at(!1);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("stopVideo")}catch{}},Ti=()=>{try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("nextVideo"),at(!0)}catch{}},rs=()=>{try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("previousVideo"),at(!0)}catch{}},Kt=ge=>{vt(ge);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("setVolume",[ge])}catch{}},sr=()=>{bn(ge=>{const Je=!ge;try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand(Je?"mute":"unMute")}catch{}return Je})},ar=(ge,Je)=>{var ie;const M=Gv(ge);if(!M)return{success:!1,error:"Could not recognize a valid YouTube video or playlist link. Please check the URL format and try again."};const O=(Je==null?void 0:Je.trim())||(M.type==="playlist"?`Custom Playlist (${(ie=M.playlistId)==null?void 0:ie.slice(0,8)}...)`:`YouTube Audio (${M.videoId||"Stream"})`),ne={id:`yt-${Date.now()}-${Math.random().toString(36).substr(2,5)}`,title:O,type:M.type,videoId:M.videoId,playlistId:M.playlistId,url:M.cleanUrl,thumbnailUrl:Vv(M.videoId),channel:M.type==="playlist"?"Custom YouTube Playlist":"Custom YouTube Stream",createdAt:new Date().toISOString()};return Et(re=>[ne,...re]),zn(ne),{success:!0,item:ne}},Ar=ge=>{Et(Je=>Je.filter(M=>M.id!==ge))};return f.jsx(um.Provider,{value:{profile:e,setProfile:t,updateProfile:r,appTheme:o,setAppTheme:l,toggleAppTheme:u,isHUDHidden:p,setIsHUDHidden:d,toggleHUDHidden:m,tasks:y,toggleTask:R,addTask:F,deleteTask:D,wallpaperTheme:g,setWallpaperTheme:v,wallpaperSettings:_,updateWallpaperSettings:E,resetWallpaperSettings:C,habits:I,toggleHabit:w,addHabit:N,deleteHabit:Z,routines:V,addRoutineBlock:z,updateRoutineBlock:B,deleteRoutineBlock:W,resetRoutines:j,activeRoutineBlock:ce,activeRoutineMinutesLeft:Y,studySeconds:H,isStudyActive:q,studySubject:ee,setStudySubject:le,toggleStudyTimer:we,resetStudyTimer:ze,studySessions:be,pomodoroPhase:Te,pomodoroSecondsLeft:Xe,pomodoroTotalSeconds:me,pomodoroSettings:qe,setPomodoroSettings:ke,startPomodoro:Lt,pausePomodoro:on,resumePomodoro:Ut,togglePomodoro:Zt,resetPomodoro:jt,skipPomodoroPhase:ln,togglePomodoroDisplayMode:K,hydration:Ft,setHydration:_t,sleepHours:It,setSleep:Mt,dailyRating:tt,setDailyRating:rt,lastActiveDate:T,resetDayProgress:Me,factoryReset:Fe,audioSource:Ge,setAudioSource:ve,isAudioPlaying:ye,activeSoundscapeId:U,audioVolume:oe,isAudioMuted:Ce,playSoundscape:Yt,stopSoundscape:$t,setAudioVolume:Fn,toggleAudioMute:Yn,isYouTubePlaying:$e,setYouTubeIsPlaying:at,isYouTubePlayerReady:Ne,setYouTubePlayerReady:Qe,activeYouTubeItem:ot,youtubeVolume:ft,isYouTubeMuted:tn,savedYouTubeItems:pt,showYouTubePreview:mn,setShowYouTubePreview:St,playYouTubeItem:zn,toggleYouTubePlay:qn,stopYouTube:rr,nextYouTubeTrack:Ti,prevYouTubeTrack:rs,setYouTubeVolume:Kt,toggleYouTubeMute:sr,addYouTubeToLibrary:ar,removeYouTubeFromLibrary:Ar},children:s})},is=()=>{const s=Se.useContext(um);if(!s)throw new Error("useData must be used within a DataProvider");return s},jv=()=>{const s=Se.useRef(null),{isHUDHidden:e,wallpaperSettings:t,appTheme:r}=is(),o=Se.useRef(e),l=Se.useRef(t),u=Se.useRef(r);return Se.useEffect(()=>{o.current=e},[e]),Se.useEffect(()=>{l.current=t},[t]),Se.useEffect(()=>{u.current=r},[r]),Se.useEffect(()=>{const p=s.current;if(!p)return;const d=p.getContext("2d");if(!d)return;let m,g=0,v=0;const _=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let b=[];const E=()=>{b=[];const B=l.current.starDensity||"balanced",W=B==="sparse"?.45:B==="dense"?1.6:B==="galaxy"?2.4:1,j=g<768?85:160,ce=Math.round(j*W);for(let Q=0;Q<ce;Q++){const Y=Math.random()>.85?2:Math.random()>.45?1:0,X=Math.random()*.65+(Y===2?.85:.35);b.push({x:Math.random()*g,y:Math.random()*v,z:Y,radius:X,alpha:Math.random()*.55+.25,alphaSpeed:Math.random()*.015+.005,alphaPhase:Math.random()*Math.PI*2,vx:(Math.random()-.5)*.06,vy:(Math.random()-.5)*.06})}},C=()=>{if(!p)return;const B=Math.min(window.devicePixelRatio||1,2);g=window.innerWidth,v=window.innerHeight,p.width=g*B,p.height=v*B,p.style.width=`${g}px`,p.style.height=`${v}px`,d.scale(B,B),E()};C(),window.addEventListener("resize",C,{passive:!0});let y=g/2,S=v/2,R=g/2,F=v/2;const D=B=>{l.current.interactiveParallax!==!1&&(y=B.clientX,S=B.clientY)};window.addEventListener("mousemove",D,{passive:!0});const I=(B,W,j,ce)=>{d.save(),d.translate(B,W);const Q=u.current==="light",Y=Math.max(.15,Math.min(.95,ce));d.globalAlpha=Y;const X=d.createRadialGradient(0,0,0,0,0,j*.9);Q?(X.addColorStop(0,"rgba(245, 158, 11, 0.75)"),X.addColorStop(.3,"rgba(217, 119, 6, 0.28)"),X.addColorStop(.7,"rgba(180, 83, 9, 0.06)"),X.addColorStop(1,"rgba(255, 255, 255, 0)")):(X.addColorStop(0,"rgba(255, 255, 255, 0.85)"),X.addColorStop(.3,"rgba(216, 180, 254, 0.35)"),X.addColorStop(.7,"rgba(147, 51, 234, 0.08)"),X.addColorStop(1,"rgba(0, 0, 0, 0)")),d.fillStyle=X,d.beginPath(),d.arc(0,0,j*.9,0,Math.PI*2),d.fill();const H=d.createLinearGradient(-j,0,j,0);Q?(H.addColorStop(0,"rgba(245, 158, 11, 0)"),H.addColorStop(.35,"rgba(217, 119, 6, 0.45)"),H.addColorStop(.5,"#b45309"),H.addColorStop(.65,"rgba(217, 119, 6, 0.45)"),H.addColorStop(1,"rgba(245, 158, 11, 0)")):(H.addColorStop(0,"rgba(255, 255, 255, 0)"),H.addColorStop(.35,"rgba(233, 213, 255, 0.55)"),H.addColorStop(.5,"#ffffff"),H.addColorStop(.65,"rgba(233, 213, 255, 0.55)"),H.addColorStop(1,"rgba(255, 255, 255, 0)")),d.strokeStyle=H,d.lineWidth=.75,d.beginPath(),d.moveTo(-j,0),d.lineTo(j,0),d.stroke();const P=d.createLinearGradient(0,-j,0,j);Q?(P.addColorStop(0,"rgba(245, 158, 11, 0)"),P.addColorStop(.35,"rgba(217, 119, 6, 0.45)"),P.addColorStop(.5,"#b45309"),P.addColorStop(.65,"rgba(217, 119, 6, 0.45)"),P.addColorStop(1,"rgba(245, 158, 11, 0)")):(P.addColorStop(0,"rgba(255, 255, 255, 0)"),P.addColorStop(.35,"rgba(233, 213, 255, 0.55)"),P.addColorStop(.5,"#ffffff"),P.addColorStop(.65,"rgba(233, 213, 255, 0.55)"),P.addColorStop(1,"rgba(255, 255, 255, 0)")),d.strokeStyle=P,d.lineWidth=.75,d.beginPath(),d.moveTo(0,-j),d.lineTo(0,j),d.stroke();const q=j*.38;d.strokeStyle=Q?"rgba(180, 83, 9, 0.35)":"rgba(255, 255, 255, 0.4)",d.lineWidth=.5,d.beginPath(),d.moveTo(-q,-q),d.lineTo(q,q),d.moveTo(-q,q),d.lineTo(q,-q),d.stroke(),d.fillStyle=Q?"#d97706":"#ffffff",d.beginPath(),d.arc(0,0,1.2,0,Math.PI*2),d.fill(),d.restore()},L=[{x:-100,y:-100,length:100,speed:18,angle:Math.PI/4+.05,alpha:0,active:!1},{x:-100,y:-100,length:80,speed:16,angle:Math.PI/4-.08,alpha:0,active:!1},{x:-100,y:-100,length:110,speed:20,angle:Math.PI/4+.12,alpha:0,active:!1}];let w=120;const N=B=>{if(B==="off")return;w--;const W=B==="meteor-shower"?40:180;if(w<=0&&!_){w=Math.random()*(B==="meteor-shower"?60:200)+W;const j=L.find(ce=>!ce.active);j&&(j.active=!0,j.x=Math.random()*(g*.7),j.y=Math.random()*(v*.3),j.alpha=.95,j.length=Math.random()*50+70)}for(const j of L)if(j.active)if(j.x+=Math.cos(j.angle)*j.speed,j.y+=Math.sin(j.angle)*j.speed,j.alpha-=B==="meteor-shower"?.022:.016,j.alpha<=0||j.x>g+100||j.y>v+100)j.active=!1;else{d.save();const ce=j.x-Math.cos(j.angle)*j.length,Q=j.y-Math.sin(j.angle)*j.length,Y=d.createLinearGradient(ce,Q,j.x,j.y);Y.addColorStop(0,"rgba(255, 255, 255, 0)"),Y.addColorStop(.7,"rgba(216, 180, 254, "+j.alpha*.6+")"),Y.addColorStop(1,"#ffffff"),d.strokeStyle=Y,d.lineWidth=1.3,d.beginPath(),d.moveTo(ce,Q),d.lineTo(j.x,j.y),d.stroke(),d.fillStyle="#ffffff",d.beginPath(),d.arc(j.x,j.y,1.8,0,Math.PI*2),d.fill(),d.restore()}};let Z=0,V=!0;const $=()=>{V=!document.hidden};document.addEventListener("visibilitychange",$);const z=()=>{if(!V){m=requestAnimationFrame(z);return}const B=l.current,W=o.current;let j=1;B.speed==="frozen"?j=0:B.speed==="calm"?j=.45:B.speed==="dynamic"?j=1.45:j=.85,W&&j>0&&(j*=1.25),Z+=_?.002:.014*j,d.clearRect(0,0,g,v),R+=(y-R)*.04,F+=(S-F)*.04;const ce=(R-g/2)/(g/2),Q=(F-v/2)/(v/2);let Y=1;B.amplitude==="subtle"?Y=.55:B.amplitude==="dramatic"?Y=1.6:Y=1,W&&(Y*=1.2);const X=B.palette,H=u.current==="light";let P="#030208",q="#0b061c",Ee="#170a32",ee="rgba(168, 85, 247, 0.22)",le="rgba(99, 102, 241, 0.16)",be="rgba(168, 85, 247, 0.30)",Ae="rgba(192, 132, 252, 0.40)",we=["#05030e","#090518","#0e0824"],ze="rgba(168, 85, 247, 0.25)",qe=["#0a051d","#110930","#190c42"],ke="rgba(168, 85, 247, 0.35)",Te=["#11082e","#1c0c4b","#261063"],Ue="rgba(192, 132, 252, 0.45)",Xe=["#180b3d","#260f64","#341584"],mt="rgba(216, 180, 254, 0.55)",me=["#0c0620","#140833","#1e0c4a","#281061"],yt="rgba(233, 213, 255, 0.65)";H?X==="celestial-cyan"?(P="#eef8ff",q="#d7effe",Ee="#b5e3fd",ee="rgba(14, 165, 233, 0.16)",le="rgba(6, 182, 212, 0.12)",be="rgba(2, 132, 199, 0.12)",Ae="rgba(3, 105, 161, 0.20)",we=["#93c5fd","#bfdbfe","#dbeafe"],ze="rgba(29, 78, 216, 0.35)",qe=["#60a5fa","#93c5fd","#bfdbfe"],ke="rgba(2, 132, 199, 0.42)",Te=["#38bdf8","#7dd3fc","#bae6fd"],Ue="rgba(14, 165, 233, 0.50)",Xe=["#bae6fd","#d7f0fd","#f0f9ff"],mt="rgba(56, 189, 248, 0.58)",me=["#f0f9ff","#f8fcff","#ffffff","#ffffff"],yt="rgba(2, 132, 199, 0.68)"):X==="supernova-sunset"?(P="#fff1f2",q="#fecdd3",Ee="#fda4af",ee="rgba(244, 63, 94, 0.16)",le="rgba(249, 115, 22, 0.12)",be="rgba(225, 29, 72, 0.12)",Ae="rgba(190, 18, 60, 0.20)",we=["#f43f5e","#fb7185","#fda4af"],ze="rgba(159, 18, 57, 0.35)",qe=["#fb7185","#fda4af","#fecdd3"],ke="rgba(225, 29, 72, 0.42)",Te=["#fda4af","#fecdd3","#ffe4e6"],Ue="rgba(244, 63, 94, 0.50)",Xe=["#fecdd3","#ffe4e6","#fff1f2"],mt="rgba(251, 113, 133, 0.58)",me=["#fff5f6","#fffafb","#ffffff","#ffffff"],yt="rgba(225, 29, 72, 0.68)"):X==="nocturne-silver"?(P="#fafafa",q="#f4f4f6",Ee="#e4e4e7",ee="rgba(113, 113, 122, 0.14)",le="rgba(82, 82, 91, 0.10)",be="rgba(82, 82, 91, 0.12)",Ae="rgba(63, 63, 70, 0.20)",we=["#a1a1aa","#d4d4d8","#e4e4e7"],ze="rgba(63, 63, 70, 0.35)",qe=["#d4d4d8","#e4e4e7","#f1f1f3"],ke="rgba(82, 82, 91, 0.42)",Te=["#e4e4e7","#f1f1f3","#f4f4f6"],Ue="rgba(113, 113, 122, 0.50)",Xe=["#f1f1f3","#f6f6f8","#fafafa"],mt="rgba(161, 161, 170, 0.58)",me=["#f6f6f8","#fcfcfc","#ffffff","#ffffff"],yt="rgba(82, 82, 91, 0.68)"):X==="cyberpunk-neon"?(P="#fdf2f8",q="#fae8ff",Ee="#f5d0fe",ee="rgba(236, 72, 153, 0.18)",le="rgba(6, 182, 212, 0.14)",be="rgba(168, 85, 247, 0.15)",Ae="rgba(236, 72, 153, 0.22)",we=["#f472b6","#fbcfe8","#fdf2f8"],ze="rgba(219, 39, 119, 0.35)",qe=["#c084fc","#e9d5ff","#fae8ff"],ke="rgba(147, 51, 234, 0.42)",Te=["#38bdf8","#bae6fd","#f0f9ff"],Ue="rgba(2, 132, 199, 0.50)",Xe=["#fbcfe8","#fce7f3","#ffffff"],mt="rgba(236, 72, 153, 0.58)",me=["#fdf2f8","#ffffff","#ffffff","#ffffff"],yt="rgba(168, 85, 247, 0.68)"):X==="solar-gold"?(P="#fffbeb",q="#fef3c7",Ee="#fde68a",ee="rgba(245, 158, 11, 0.20)",le="rgba(234, 88, 12, 0.14)",be="rgba(217, 119, 6, 0.15)",Ae="rgba(245, 158, 11, 0.22)",we=["#f59e0b","#fbbf24","#fef3c7"],ze="rgba(180, 83, 9, 0.38)",qe=["#fbbf24","#fcd34d","#fef9c3"],ke="rgba(217, 119, 6, 0.45)",Te=["#fde047","#fef08a","#fefce8"],Ue="rgba(234, 88, 12, 0.52)",Xe=["#fef08a","#fefce8","#ffffff"],mt="rgba(245, 158, 11, 0.60)",me=["#fefce8","#ffffff","#ffffff","#ffffff"],yt="rgba(217, 119, 6, 0.70)"):X==="emerald-aurora"?(P="#f0fdf4",q="#dcfce7",Ee="#bbf7d0",ee="rgba(16, 185, 129, 0.20)",le="rgba(34, 197, 94, 0.14)",be="rgba(22, 163, 74, 0.15)",Ae="rgba(16, 185, 129, 0.22)",we=["#86efac","#bbf7d0","#dcfce7"],ze="rgba(22, 163, 74, 0.38)",qe=["#4ade80","#86efac","#bbf7d0"],ke="rgba(21, 128, 61, 0.45)",Te=["#22c55e","#4ade80","#86efac"],Ue="rgba(16, 185, 129, 0.52)",Xe=["#86efac","#bbf7d0","#f0fdf4"],mt="rgba(22, 163, 74, 0.60)",me=["#f0fdf4","#f8fafc","#ffffff","#ffffff"],yt="rgba(16, 185, 129, 0.70)"):X==="pure-pitch-black"?(P="#ffffff",q="#f8fafc",Ee="#f1f5f9",ee="rgba(148, 163, 184, 0.16)",le="rgba(100, 116, 139, 0.10)",be="rgba(71, 85, 105, 0.15)",Ae="rgba(51, 65, 85, 0.22)",we=["#cbd5e1","#e2e8f0","#f1f5f9"],ze="rgba(71, 85, 105, 0.38)",qe=["#94a3b8","#cbd5e1","#e2e8f0"],ke="rgba(51, 65, 85, 0.45)",Te=["#64748b","#94a3b8","#cbd5e1"],Ue="rgba(30, 41, 59, 0.52)",Xe=["#cbd5e1","#e2e8f0","#f8fafc"],mt="rgba(51, 65, 85, 0.60)",me=["#f8fafc","#ffffff","#ffffff","#ffffff"],yt="rgba(15, 23, 42, 0.70)"):(P="#fffbf3",q="#feeccd",Ee="#fad4a0",ee="rgba(245, 158, 11, 0.18)",le="rgba(217, 119, 6, 0.12)",be="rgba(180, 83, 9, 0.12)",Ae="rgba(146, 64, 14, 0.20)",we=["#d4a373","#bc8a5f","#a47148"],ze="rgba(146, 64, 14, 0.38)",qe=["#e6ba8f","#d4a373","#bc8a5f"],ke="rgba(180, 83, 9, 0.45)",Te=["#f3d5b5","#e6ba8f","#d4a373"],Ue="rgba(217, 119, 6, 0.52)",Xe=["#faedcd","#f3d5b5","#fefae0"],mt="rgba(245, 158, 11, 0.60)",me=["#fefae0","#fffdfa","#ffffff","#ffffff"],yt="rgba(217, 119, 6, 0.70)"):X==="celestial-cyan"?(P="#020712",q="#041322",Ee="#071f35",ee="rgba(14, 165, 233, 0.18)",le="rgba(6, 182, 212, 0.12)",be="rgba(56, 189, 248, 0.12)",Ae="rgba(103, 232, 249, 0.20)",we=["#030914","#051221","#071c31"],ze="rgba(56, 189, 248, 0.22)",qe=["#040f1f","#071b33","#0a2646"],ke="rgba(56, 189, 248, 0.32)",Te=["#06152a","#0a2544","#0f345c"],Ue="rgba(56, 189, 248, 0.42)",Xe=["#081b34","#0d2e54","#134273"],mt="rgba(125, 211, 252, 0.52)",me=["#051224","#091c36","#0e294d","#133866"],yt="rgba(186, 230, 253, 0.65)"):X==="supernova-sunset"?(P="#0a0208",q="#160412",Ee="#24061c",ee="rgba(244, 63, 94, 0.18)",le="rgba(249, 115, 22, 0.12)",be="rgba(251, 113, 133, 0.12)",Ae="rgba(253, 186, 116, 0.20)",we=["#0d020a","#170412","#22061b"],ze="rgba(244, 63, 94, 0.22)",qe=["#150311","#24061d","#340929"],ke="rgba(244, 63, 94, 0.32)",Te=["#1e0518","#320827","#470c38"],Ue="rgba(251, 113, 133, 0.42)",Xe=["#280620","#420b33","#5c0f47"],mt="rgba(251, 146, 60, 0.52)",me=["#180314","#270620","#3b0930","#500d41"],yt="rgba(254, 215, 170, 0.65)"):X==="nocturne-silver"?(P="#030306",q="#08080d",Ee="#101017",ee="rgba(161, 161, 170, 0.16)",le="rgba(113, 113, 122, 0.10)",be="rgba(212, 212, 216, 0.12)",Ae="rgba(228, 228, 231, 0.18)",we=["#060609","#0c0c12","#13131c"],ze="rgba(161, 161, 170, 0.20)",qe=["#0a0a0f","#12121b","#1a1a27"],ke="rgba(161, 161, 170, 0.30)",Te=["#0e0e16","#181824","#232333"],Ue="rgba(212, 212, 216, 0.40)",Xe=["#13131e","#1f1f30","#2d2d42"],mt="rgba(228, 228, 231, 0.50)",me=["#0c0c13","#14141f","#1d1d2b","#272738"],yt="rgba(244, 244, 245, 0.65)"):X==="cyberpunk-neon"?(P="#06000e",q="#120024",Ee="#22003d",ee="rgba(236, 72, 153, 0.22)",le="rgba(6, 182, 212, 0.18)",be="rgba(34, 211, 238, 0.15)",Ae="rgba(244, 114, 182, 0.22)",we=["#0a0014","#150029","#24003d"],ze="rgba(168, 85, 247, 0.25)",qe=["#120021","#1f0038","#310052"],ke="rgba(236, 72, 153, 0.35)",Te=["#1c0030","#2d004d","#42006e"],Ue="rgba(6, 182, 212, 0.45)",Xe=["#25003d","#3d0066","#59008f"],mt="rgba(244, 63, 94, 0.55)",me=["#160029","#260045","#380062","#4e0085"],yt="rgba(34, 211, 238, 0.70)"):X==="solar-gold"?(P="#080400",q="#140900",Ee="#241000",ee="rgba(245, 158, 11, 0.22)",le="rgba(234, 88, 12, 0.16)",be="rgba(251, 191, 36, 0.15)",Ae="rgba(252, 211, 77, 0.22)",we=["#0a0400","#170900","#261000"],ze="rgba(217, 119, 6, 0.25)",qe=["#130700","#220e00","#361600"],ke="rgba(245, 158, 11, 0.35)",Te=["#1e0a00","#301300","#4a1e00"],Ue="rgba(251, 191, 36, 0.45)",Xe=["#290e00","#421a00","#612700"],mt="rgba(252, 211, 77, 0.55)",me=["#190800","#2a0e00","#401500","#592000"],yt="rgba(254, 240, 138, 0.70)"):X==="emerald-aurora"?(P="#010d05",q="#021a0a",Ee="#052e14",ee="rgba(16, 185, 129, 0.22)",le="rgba(52, 211, 153, 0.16)",be="rgba(110, 231, 183, 0.15)",Ae="rgba(52, 211, 153, 0.22)",we=["#021508","#04240f","#073918"],ze="rgba(16, 185, 129, 0.25)",qe=["#031f0c","#063316","#0a4b22"],ke="rgba(52, 211, 153, 0.35)",Te=["#052b12","#09431e","#0e602c"],Ue="rgba(110, 231, 183, 0.45)",Xe=["#083818","#0d5426","#147738"],mt="rgba(167, 243, 208, 0.55)",me=["#062e14","#0a4720","#10632d","#18863f"],yt="rgba(110, 231, 183, 0.70)"):X==="pure-pitch-black"&&(P="#000000",q="#020202",Ee="#060606",ee="rgba(255, 255, 255, 0.08)",le="rgba(161, 161, 170, 0.06)",be="rgba(161, 161, 170, 0.10)",Ae="rgba(228, 228, 231, 0.15)",we=["#020202","#060606","#0a0a0a"],ze="rgba(161, 161, 170, 0.20)",qe=["#050505","#0a0a0a","#101010"],ke="rgba(161, 161, 170, 0.30)",Te=["#080808","#0e0e0e","#161616"],Ue="rgba(212, 212, 216, 0.40)",Xe=["#0c0c0c","#141414","#1e1e1e"],mt="rgba(228, 228, 231, 0.50)",me=["#080808","#101010","#181818","#222222"],yt="rgba(255, 255, 255, 0.75)");const Lt=d.createLinearGradient(0,0,0,v);Lt.addColorStop(0,P),Lt.addColorStop(.45,q),Lt.addColorStop(1,Ee),d.fillStyle=Lt,d.fillRect(0,0,g,v);const on=d.createRadialGradient(g*.8,v*.18,0,g*.8,v*.18,g*.5);on.addColorStop(0,ee),on.addColorStop(.7,"rgba(0, 0, 0, 0.04)"),on.addColorStop(1,"rgba(0, 0, 0, 0)"),d.fillStyle=on,d.fillRect(0,0,g,v);const Ut=d.createRadialGradient(g*.18,v*.82,0,g*.18,v*.82,g*.55);if(Ut.addColorStop(0,le),Ut.addColorStop(.65,"rgba(0, 0, 0, 0.03)"),Ut.addColorStop(1,"rgba(0, 0, 0, 0)"),d.fillStyle=Ut,d.fillRect(0,0,g,v),B.showNebulaDust){d.save();const _e=d.createRadialGradient(g*.35,v*.2,0,g*.35,v*.2,g*.38);_e.addColorStop(0,ee),_e.addColorStop(.5,"rgba(126, 34, 206, 0.04)"),_e.addColorStop(1,"rgba(0, 0, 0, 0)"),d.fillStyle=_e,d.fillRect(0,0,g,v);const U=d.createRadialGradient(g*.7,v*.14,0,g*.7,v*.14,g*.32);U.addColorStop(0,le),U.addColorStop(.6,"rgba(14, 116, 144, 0.03)"),U.addColorStop(1,"rgba(0, 0, 0, 0)"),d.fillStyle=U,d.fillRect(0,0,g,v),d.restore()}if(B.showConstellations){d.save(),d.strokeStyle=H?"rgba(180, 130, 80, 0.28)":"rgba(255, 255, 255, 0.14)",d.lineWidth=.75;const _e=[{x:g*.68,y:v*.1},{x:g*.72,y:v*.08},{x:g*.76,y:v*.09},{x:g*.78,y:v*.13},{x:g*.83,y:v*.14},{x:g*.84,y:v*.1},{x:g*.78,y:v*.09}];d.beginPath(),d.moveTo(_e[0].x,_e[0].y);for(let ae=1;ae<_e.length;ae++)d.lineTo(_e[ae].x,_e[ae].y);d.stroke(),d.fillStyle=H?"#b45309":"#ffffff";for(const ae of _e)d.beginPath(),d.arc(ae.x,ae.y,1.4,0,Math.PI*2),d.fill();const U=[{x:g*.28,y:v*.08},{x:g*.31,y:v*.12},{x:g*.34,y:v*.09},{x:g*.37,y:v*.13},{x:g*.4,y:v*.1}];d.beginPath(),d.moveTo(U[0].x,U[0].y);for(let ae=1;ae<U.length;ae++)d.lineTo(U[ae].x,U[ae].y);d.stroke();for(const ae of U)d.beginPath(),d.arc(ae.x,ae.y,1.3,0,Math.PI*2),d.fill();d.restore()}if(B.showComet){d.save();const _e=Z*.04%1,U=g*.75,ae=v*.04,oe=g*.25,Re=v*.22,Ce=U+(oe-U)*_e,De=ae+(Re-ae)*_e,$e=Math.atan2(Re-ae,oe-U)+Math.PI,at=140,Ne=Ce+Math.cos($e)*at,Qe=De+Math.sin($e)*at,ot=d.createLinearGradient(Ne,Qe,Ce,De);ot.addColorStop(0,"rgba(56, 189, 248, 0)"),ot.addColorStop(.5,"rgba(168, 85, 247, 0.25)"),ot.addColorStop(.85,"rgba(233, 213, 255, 0.65)"),ot.addColorStop(1,"#ffffff"),d.strokeStyle=ot,d.lineWidth=1.8,d.beginPath(),d.moveTo(Ne,Qe),d.lineTo(Ce,De),d.stroke(),d.fillStyle="#ffffff",d.shadowColor="#67e8f9",d.shadowBlur=8,d.beginPath(),d.arc(Ce,De,2.2,0,Math.PI*2),d.fill(),d.restore()}if(B.showMeridian){d.save();const _e=g*.91;d.strokeStyle=be,d.lineWidth=1,d.beginPath(),d.moveTo(_e,0),d.lineTo(_e,v),d.stroke(),d.strokeStyle="rgba(255, 255, 255, 0.18)",d.lineWidth=1;for(let U=50;U<v;U+=70)d.beginPath(),d.moveTo(_e-4,U),d.lineTo(_e+4,U),d.stroke();d.restore()}if(B.showOrbitalTrack){d.save();const _e=g*.78,U=v*.18,ae=Math.min(g,v)*.45,oe=Math.min(g,v)*.22;d.shadowColor=Ae,d.shadowBlur=6,d.strokeStyle=Ae,d.lineWidth=1.2,d.beginPath(),d.ellipse(_e,U,ae,oe,-.22,Math.PI*.1,Math.PI*1.3),d.stroke(),d.setLineDash([3,8]),d.strokeStyle="rgba(255, 255, 255, 0.22)",d.lineWidth=.8,d.beginPath(),d.ellipse(_e,U,ae*1.08,oe*1.08,-.22,Math.PI*.05,Math.PI*1.25),d.stroke(),d.setLineDash([]),d.restore()}if(B.showStars)for(let _e=0;_e<b.length;_e++){const U=b[_e];!_&&j>0&&(U.x+=U.vx*j,U.y+=U.vy*j,U.alphaPhase+=U.alphaSpeed*j,U.x<0&&(U.x=g),U.x>g&&(U.x=0),U.y<0&&(U.y=v),U.y>v&&(U.y=0));const ae=(U.z+1)*.35,oe=U.x+ce*12*ae,Re=U.y+Q*12*ae,Ce=Math.max(.12,Math.min(.85,U.alpha+Math.sin(U.alphaPhase)*.22));d.beginPath(),d.arc(oe,Re,U.radius,0,Math.PI*2),d.fillStyle=H?`rgba(180, 130, 80, ${(Ce*.65).toFixed(3)})`:`rgba(255, 255, 255, ${Ce.toFixed(3)})`,d.fill()}const Zt=B.waveGeometry,jt=B.waveLayerDensity,ln=(_e,U,ae,oe=2)=>{d.save(),d.translate(_e,U);const Re=d.createRadialGradient(0,0,0,0,0,oe*2.5);H?(Re.addColorStop(0,`rgba(245, 158, 11, ${ae})`),Re.addColorStop(.35,`rgba(217, 119, 6, ${ae*.7})`),Re.addColorStop(1,"rgba(255, 255, 255, 0)"),d.fillStyle=Re,d.beginPath(),d.arc(0,0,oe*2.5,0,Math.PI*2),d.fill(),d.strokeStyle=`rgba(180, 83, 9, ${ae*.8})`,d.lineWidth=.75,d.beginPath(),d.moveTo(-oe*2,0),d.lineTo(oe*2,0),d.moveTo(0,-oe*2),d.lineTo(0,oe*2),d.stroke()):(Re.addColorStop(0,`rgba(255, 255, 255, ${ae})`),Re.addColorStop(.35,`rgba(233, 213, 255, ${ae*.7})`),Re.addColorStop(1,"rgba(255, 255, 255, 0)"),d.fillStyle=Re,d.beginPath(),d.arc(0,0,oe*2.5,0,Math.PI*2),d.fill(),d.strokeStyle=`rgba(255, 255, 255, ${ae*.9})`,d.lineWidth=.75,d.beginPath(),d.moveTo(-oe*2,0),d.lineTo(oe*2,0),d.moveTo(0,-oe*2),d.lineTo(0,oe*2),d.stroke()),d.restore()},K=(_e,U,ae,oe,Re,Ce,De,$e,at,Ne,Qe=[])=>{const ot=[0,g*.32,g*.68,g],Be=[];for(let St=0;St<4;St++){const pt=Math.sin(Z*ae+oe+St*1.4)*(U*.75)+Math.cos(Z*ae*.7+oe*1.2+St*2.1)*(U*.35);Be.push({x:ot[St],y:v*_e[St]+pt})}const ft=[Be[0],...Be,Be[Be.length-1]],vt=[],tn=.5;for(let St=1;St<ft.length-2;St++){const pt=ft[St-1],Et=ft[St],Yt=ft[St+1],$t=ft[St+2],Fn=(Yt.x-pt.x)*tn,Yn=(Yt.y-pt.y)*tn,zn=($t.x-Et.x)*tn,qn=($t.y-Et.y)*tn;vt.push({p1:Et,cp1:{x:Et.x+Fn/3,y:Et.y+Yn/3},cp2:{x:Yt.x-zn/3,y:Yt.y-qn/3},p2:Yt})}d.save(),at>0&&(d.shadowColor=$e,d.shadowBlur=at,d.shadowOffsetY=Ne),d.beginPath(),d.moveTo(Be[0].x,Be[0].y);for(const St of vt)d.bezierCurveTo(St.cp1.x,St.cp1.y,St.cp2.x,St.cp2.y,St.p2.x,St.p2.y);d.lineTo(g,v),d.lineTo(0,v),d.closePath(),d.fillStyle=Re,d.fill(),d.save(),d.clip();const bn=Math.min(...Be.map(St=>St.y)),mn=d.createLinearGradient(0,bn,0,bn+140);H?(mn.addColorStop(0,"rgba(255, 255, 255, 0.40)"),mn.addColorStop(.25,"rgba(251, 191, 36, 0.14)"),mn.addColorStop(.7,"rgba(217, 119, 6, 0.04)"),mn.addColorStop(1,"rgba(255, 255, 255, 0)")):(mn.addColorStop(0,"rgba(255, 255, 255, 0.26)"),mn.addColorStop(.25,"rgba(216, 180, 254, 0.16)"),mn.addColorStop(.7,"rgba(147, 51, 234, 0.05)"),mn.addColorStop(1,"rgba(0, 0, 0, 0)")),d.fillStyle=mn,d.fillRect(0,bn,g,v),d.beginPath();for(let St=0;St<vt.length;St++){const pt=vt[St],Et=18+Math.sin(Z*.75+St*1.5)*4;St===0&&d.moveTo(pt.p1.x,pt.p1.y+Et),d.bezierCurveTo(pt.cp1.x,pt.cp1.y+Et,pt.cp2.x,pt.cp2.y+Et,pt.p2.x,pt.p2.y+Et)}d.strokeStyle=H?"rgba(160, 90, 40, 0.16)":"rgba(255, 255, 255, 0.10)",d.lineWidth=1,d.stroke(),d.beginPath();for(let St=0;St<vt.length;St++){const pt=vt[St],Et=38+Math.cos(Z*.65+St*1.8)*5;St===0&&d.moveTo(pt.p1.x,pt.p1.y+Et),d.bezierCurveTo(pt.cp1.x,pt.cp1.y+Et,pt.cp2.x,pt.cp2.y+Et,pt.p2.x,pt.p2.y+Et)}d.strokeStyle=H?"rgba(160, 90, 40, 0.10)":"rgba(255, 255, 255, 0.06)",d.lineWidth=.8,d.stroke(),d.restore(),d.strokeStyle=Ce,d.lineWidth=De,d.stroke(),d.restore();for(const St of Qe){const pt=Math.min(vt.length-1,Math.floor(St*vt.length)),Et=St*vt.length-pt,Yt=vt[pt],$t=1-Et,Fn=$t*$t*$t*Yt.p1.x+3*$t*$t*Et*Yt.cp1.x+3*$t*Et*Et*Yt.cp2.x+Et*Et*Et*Yt.p2.x,Yn=$t*$t*$t*Yt.p1.y+3*$t*$t*Et*Yt.cp1.y+3*$t*Et*Et*Yt.cp2.y+Et*Et*Et*Yt.p2.y,zn=.5+Math.sin(Z*2+St*8)*.35;ln(Fn,Yn,zn,2)}},Ft=(_e,U,ae,oe,Re,Ce,De,$e,at,Ne,Qe,ot)=>{const Be=Math.sin(Z*Re+Ce)*oe,ft=[];ft.push({x:0,y:v*_e+Be});for(let vt=0;vt<U.length;vt++){const tn=g*U[vt],bn=v*(_e-ae[vt])+Math.cos(Z*Re+vt+Ce)*(oe*.7);ft.push({x:tn,y:bn})}ft.push({x:g,y:v*(_e+.03)+Be}),d.save(),Qe>0&&(d.shadowColor=Ne,d.shadowBlur=Qe,d.shadowOffsetY=ot),d.beginPath(),d.moveTo(ft[0].x,ft[0].y);for(let vt=1;vt<ft.length;vt++)d.lineTo(ft[vt].x,ft[vt].y);d.lineTo(g,v),d.lineTo(0,v),d.closePath(),d.fillStyle=De,d.fill(),d.strokeStyle=$e,d.lineWidth=at,d.stroke(),d.restore()},_t=(_e,U,ae,oe,Re,Ce)=>{d.save(),d.globalCompositeOperation="screen",d.beginPath(),d.moveTo(0,v*_e);const De=16;for(let $e=0;$e<=De;$e++){const at=$e/De*g,Ne=v*_e+Math.sin($e/De*Math.PI*2+Z*ae+oe)*U;$e===0?d.moveTo(at,Ne):d.lineTo(at,Ne)}d.lineTo(g,v),d.lineTo(0,v),d.closePath(),d.fillStyle=Re,d.fill(),d.strokeStyle=Ce,d.lineWidth=1.8,d.shadowColor=Ce,d.shadowBlur=14,d.stroke(),d.restore()},It=B.horizonHeight||"balanced",he=It==="low"?.08:It==="high"?-.08:0,Mt=B.waveStrokeOpacity??1,tt=d.createLinearGradient(0,v*(.46+he),0,v*(.68+he));if(tt.addColorStop(0,"rgba(0, 0, 0, 0)"),H)tt.addColorStop(.5,"rgba(255, 255, 255, 0.25)");else{const _e=X==="celestial-cyan"?"rgba(7, 31, 53, 0.45)":X==="supernova-sunset"?"rgba(36, 6, 28, 0.45)":X==="nocturne-silver"?"rgba(16, 16, 23, 0.45)":X==="emerald-aurora"?"rgba(5, 46, 20, 0.45)":X==="pure-pitch-black"?"rgba(6, 6, 6, 0.45)":"rgba(20, 10, 40, 0.45)";tt.addColorStop(.5,_e)}tt.addColorStop(1,"rgba(0, 0, 0, 0)"),d.fillStyle=tt,d.fillRect(0,v*(.46+he),g,v*.22);const rt=d.createLinearGradient(0,v*(.55+he),0,v);rt.addColorStop(0,we[0]),rt.addColorStop(.5,we[1]),rt.addColorStop(1,we[2]);const k=d.createLinearGradient(0,v*(.63+he),0,v);k.addColorStop(0,qe[0]),k.addColorStop(.5,qe[1]),k.addColorStop(1,qe[2]);const T=d.createLinearGradient(0,v*(.71+he),0,v);T.addColorStop(0,Te[0]),T.addColorStop(.5,Te[1]),T.addColorStop(1,Te[2]);const se=d.createLinearGradient(0,v*(.79+he),0,v);se.addColorStop(0,Xe[0]),se.addColorStop(.5,Xe[1]),se.addColorStop(1,Xe[2]);const Pe=d.createLinearGradient(0,v*(.86+he),0,v);Pe.addColorStop(0,me[0]),Pe.addColorStop(.35,me[1]),Pe.addColorStop(.7,me[2]),Pe.addColorStop(1,me[3]);const Me=H?"rgba(160, 140, 120, 0.12)":"rgba(0,0,0,0.55)",Fe=H?"rgba(160, 140, 120, 0.16)":"rgba(0,0,0,0.65)",Ge=H?"rgba(160, 140, 120, 0.20)":"rgba(0,0,0,0.70)",ve=H?"rgba(160, 140, 120, 0.22)":"rgba(0,0,0,0.75)",ye=H?"rgba(160, 140, 120, 0.26)":"rgba(0,0,0,0.80)";if(Zt==="mountains"?(Ft(.48+he,[.18,.5,.82],[.14,.17,.12],12*Y,.35,0,rt,ze,.8*Mt,Me,16,-6),jt!=="airy"&&Ft(.58+he,[.32,.66,.9],[.12,.15,.11],14*Y,.4,1.5,k,ke,.9*Mt,Fe,20,-7),Ft(.68+he,[.15,.44,.75],[.11,.13,.1],15*Y,.45,3.1,T,Ue,1*Mt,Ge,24,-8),jt==="dense"&&Ft(.78+he,[.28,.6,.86],[.09,.11,.08],14*Y,.4,4.4,se,mt,1.1*Mt,ve,28,-9),Ft(.88+he,[.4,.74],[.08,.07],12*Y,.35,5.8,Pe,yt,1.2*Mt,ye,32,-10)):Zt==="aurora"?(_t(.28+he*.5,32*Y,.45,0,rt,ze),jt!=="airy"&&_t(.4+he*.5,30*Y,.5,1.6,k,ke),_t(.54+he*.5,26*Y,.55,3.2,T,Ue),jt==="dense"&&_t(.68+he*.5,22*Y,.6,4.8,se,mt),K([.86+he,.89+he,.85+he,.88+he],12*Y,.35,6.2,Pe,yt,1.2*Mt,ye,28,-9)):Zt==="ocean"?(K([.62+he,.58+he,.65+he,.6+he],16*Y,.65,0,rt,ze,.8*Mt,Me,16,-6,[.3]),jt!=="airy"&&K([.69+he,.73+he,.67+he,.71+he],18*Y,.7,1.8,k,ke,.9*Mt,Fe,20,-7,[.55]),K([.76+he,.73+he,.79+he,.75+he],20*Y,.75,3.4,T,Ue,1*Mt,Ge,24,-8,[.38,.82]),jt==="dense"&&K([.83+he,.86+he,.81+he,.85+he],16*Y,.65,4.9,se,mt,1.1*Mt,ve,28,-9,[.65]),K([.89+he,.87+he,.92+he,.88+he],14*Y,.55,6.2,Pe,yt,1.2*Mt,ye,32,-10,[.5])):(K([.48+he,.56+he,.64+he,.68+he],16*Y,.38,0,rt,ze,.8*Mt,Me,16,-6,[.24,.68]),jt!=="airy"&&K([.66+he,.62+he,.55+he,.6+he],18*Y,.42,1.8,k,ke,.9*Mt,Fe,20,-7,[.35,.82]),K([.69+he,.76+he,.72+he,.76+he],19*Y,.46,3.4,T,Ue,1*Mt,Ge,24,-8,[.42,.78]),jt==="dense"&&K([.8+he,.77+he,.84+he,.8+he],16*Y,.4,4.9,se,mt,1.1*Mt,ve,28,-9,[.18,.62]),K([.88+he,.91+he,.86+he,.9+he],13*Y,.35,6.2,Pe,yt,1.2*Mt,ye,32,-10,[.35,.8])),B.showCrossStars){const _e=.68+Math.sin(Z*1.8)*.22,U=.6+Math.sin(Z*1.5+1.2)*.24,ae=.64+Math.sin(Z*1.9+2.5)*.2,oe=.58+Math.sin(Z*1.4+3.8)*.25,Re=.52+Math.sin(Z*1.7+4.6)*.22;I(g*.5,v*.08,11,_e),I(g*.18,v*.16,9.5,U),I(g*.84,v*.2,10,ae),I(g*.72,v*.34,8.5,oe),I(g*.08,v*.28,8,Re)}N(B.shootingStarMode||"occasional"),m=requestAnimationFrame(z)};return m=requestAnimationFrame(z),()=>{cancelAnimationFrame(m),window.removeEventListener("resize",C),window.removeEventListener("mousemove",D),document.removeEventListener("visibilitychange",$)}},[]),f.jsx("canvas",{ref:s,className:"fixed inset-0 pointer-events-none z-0 select-none","aria-hidden":"true"})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vf="187",$v=0,c0=1,Xv=2,Wl=1,Yv=2,io=3,Es=0,Un=1,Bi=2,da=0,ao=1,bs=2,u0=3,d0=4,qv=5,ca=100,Kv=101,Zv=102,Jv=103,Qv=104,e_=200,t_=201,n_=202,i_=203,dm=204,fm=205,r_=206,s_=207,a_=208,o_=209,l_=210,c_=211,u_=212,d_=213,f_=214,Ed=0,Td=1,Ad=2,lo=3,Cd=4,Rd=5,Nd=6,Pd=7,hm=0,h_=1,p_=2,Er=0,pm=1,mm=2,gm=3,xm=4,vm=5,_m=6,ym=7,Sm=300,ha=301,co=302,qu=303,Ku=304,pa=1e3,si=1001,Dd=1002,kn=1003,m_=1004,Sl=1005,ai=1006,Zu=1007,Qr=1008,mi=1009,bm=1010,wm=1011,uo=1012,_f=1013,tr=1014,Ji=1015,nr=1016,yf=1017,Sf=1018,ma=1020,Mm=35902,Em=35899,Tm=1021,Am=1022,Qi=1023,ts=1026,es=1027,Cm=1028,bf=1029,Ts=1030,wf=1031,Mf=1033,jl=33776,$l=33777,Xl=33778,Yl=33779,Ld=35840,Id=35841,kd=35842,Ud=35843,Fd=36196,zd=37492,Od=37496,Bd=37488,Hd=37489,ec=37490,Gd=37491,Vd=37808,Wd=37809,jd=37810,$d=37811,Xd=37812,Yd=37813,qd=37814,Kd=37815,Zd=37816,Jd=37817,Qd=37818,ef=37819,tf=37820,nf=37821,rf=36492,sf=36494,af=36495,of=36283,lf=36284,tc=36285,cf=36286,g_=3200,uf=0,x_=1,Jr="",pi="srgb",nc="srgb-linear",ic="linear",qt="srgb",Ju=7680,v_=519,__=512,y_=513,S_=514,Rm=515,b_=516,w_=517,Nm=518,Pm=519,M_=35044,f0="300 es",Gi=2e3,fo=2001;function E_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function rc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function T_(){const s=rc("canvas");return s.style.display="block",s}const h0={};function p0(...s){const e="THREE."+s.shift();console.log(e,...s)}function Dm(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function wt(...s){s=Dm(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Xt(...s){s=Dm(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ql(...s){const e=s.join(" ");e in h0||(h0[e]=!0,wt(...s))}function A_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const C_={[Ed]:Ed,[Ad]:Nd,[Cd]:Cd,[lo]:Rd,[Td]:Td,[Nd]:Ad,[Pd]:Pd,[Rd]:lo};class As{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qu=Math.PI/180,df=180/Math.PI;function po(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Wn[s&255]+Wn[s>>8&255]+Wn[s>>16&255]+Wn[s>>24&255]+"-"+Wn[e&255]+Wn[e>>8&255]+"-"+Wn[e>>16&15|64]+Wn[e>>24&255]+"-"+Wn[t&63|128]+Wn[t>>8&255]+"-"+Wn[t>>16&255]+Wn[t>>24&255]+Wn[r&255]+Wn[r>>8&255]+Wn[r>>16&255]+Wn[r>>24&255]).toLowerCase()}function Ot(s,e,t){return Math.max(e,Math.min(t,s))}function R_(s,e){return(s%e+e)%e}function ed(s,e,t){return(1-t)*s+t*e}function N_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ef(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function P_(s,e){if(e.constructor===Float32Array)return s;const t=Ef(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function D_(s,e){if(e.constructor===Float32Array)return s;const t=Ef(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const Lf=class Lf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ot(this.x,e.x,t.x),this.y=Ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ot(this.x,e,t),this.y=Ot(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ot(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ot(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Lf.prototype.isVector2=!0;let kt=Lf;class va{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,p){let d=r[o+0],m=r[o+1],g=r[o+2],v=r[o+3],_=l[u+0],b=l[u+1],E=l[u+2],C=l[u+3];if(v!==C||d!==_||m!==b||g!==E){let y=d*_+m*b+g*E+v*C;y<0&&(_=-_,b=-b,E=-E,C=-C,y=-y);let S=1-p;if(y<.9995){const R=Math.acos(y),F=Math.sin(R);S=Math.sin(S*R)/F,p=Math.sin(p*R)/F,d=d*S+_*p,m=m*S+b*p,g=g*S+E*p,v=v*S+C*p}else{d=d*S+_*p,m=m*S+b*p,g=g*S+E*p,v=v*S+C*p;const R=1/Math.sqrt(d*d+m*m+g*g+v*v);d*=R,m*=R,g*=R,v*=R}}e[t]=d,e[t+1]=m,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,l,u){const p=r[o],d=r[o+1],m=r[o+2],g=r[o+3],v=l[u],_=l[u+1],b=l[u+2],E=l[u+3];return e[t]=p*E+g*v+d*b-m*_,e[t+1]=d*E+g*_+m*v-p*b,e[t+2]=m*E+g*b+p*_-d*v,e[t+3]=g*E-p*v-d*_-m*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,p=Math.cos,d=Math.sin,m=p(r/2),g=p(o/2),v=p(l/2),_=d(r/2),b=d(o/2),E=d(l/2);switch(u){case"XYZ":this._x=_*g*v+m*b*E,this._y=m*b*v-_*g*E,this._z=m*g*E+_*b*v,this._w=m*g*v-_*b*E;break;case"YXZ":this._x=_*g*v+m*b*E,this._y=m*b*v-_*g*E,this._z=m*g*E-_*b*v,this._w=m*g*v+_*b*E;break;case"ZXY":this._x=_*g*v-m*b*E,this._y=m*b*v+_*g*E,this._z=m*g*E+_*b*v,this._w=m*g*v-_*b*E;break;case"ZYX":this._x=_*g*v-m*b*E,this._y=m*b*v+_*g*E,this._z=m*g*E-_*b*v,this._w=m*g*v+_*b*E;break;case"YZX":this._x=_*g*v+m*b*E,this._y=m*b*v+_*g*E,this._z=m*g*E-_*b*v,this._w=m*g*v-_*b*E;break;case"XZY":this._x=_*g*v-m*b*E,this._y=m*b*v-_*g*E,this._z=m*g*E+_*b*v,this._w=m*g*v+_*b*E;break;default:wt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],p=t[5],d=t[9],m=t[2],g=t[6],v=t[10],_=r+p+v;if(_>0){const b=.5/Math.sqrt(_+1);this._w=.25/b,this._x=(g-d)*b,this._y=(l-m)*b,this._z=(u-o)*b}else if(r>p&&r>v){const b=2*Math.sqrt(1+r-p-v);this._w=(g-d)/b,this._x=.25*b,this._y=(o+u)/b,this._z=(l+m)/b}else if(p>v){const b=2*Math.sqrt(1+p-r-v);this._w=(l-m)/b,this._x=(o+u)/b,this._y=.25*b,this._z=(d+g)/b}else{const b=2*Math.sqrt(1+v-r-p);this._w=(u-o)/b,this._x=(l+m)/b,this._y=(d+g)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,p=t._x,d=t._y,m=t._z,g=t._w;return this._x=r*g+u*p+o*m-l*d,this._y=o*g+u*d+l*p-r*m,this._z=l*g+u*m+r*d-o*p,this._w=u*g-r*p-o*d-l*m,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,p=this.dot(e);p<0&&(r=-r,o=-o,l=-l,u=-u,p=-p);let d=1-t;if(p<.9995){const m=Math.acos(p),g=Math.sin(m);d=Math.sin(d*m)/g,t=Math.sin(t*m)/g,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+u*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const If=class If{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(m0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(m0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,p=e.z,d=e.w,m=2*(u*o-p*r),g=2*(p*t-l*o),v=2*(l*r-u*t);return this.x=t+d*m+u*v-p*g,this.y=r+d*g+p*m-l*v,this.z=o+d*v+l*g-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ot(this.x,e.x,t.x),this.y=Ot(this.y,e.y,t.y),this.z=Ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ot(this.x,e,t),this.y=Ot(this.y,e,t),this.z=Ot(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ot(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,p=t.y,d=t.z;return this.x=o*d-l*p,this.y=l*u-r*d,this.z=r*p-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return td.copy(this).projectOnVector(e),this.sub(td)}reflect(e){return this.sub(td.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ot(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};If.prototype.isVector3=!0;let pe=If;const td=new pe,m0=new va,kf=class kf{constructor(e,t,r,o,l,u,p,d,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,p,d,m)}set(e,t,r,o,l,u,p,d,m){const g=this.elements;return g[0]=e,g[1]=o,g[2]=p,g[3]=t,g[4]=l,g[5]=d,g[6]=r,g[7]=u,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],p=r[3],d=r[6],m=r[1],g=r[4],v=r[7],_=r[2],b=r[5],E=r[8],C=o[0],y=o[3],S=o[6],R=o[1],F=o[4],D=o[7],I=o[2],L=o[5],w=o[8];return l[0]=u*C+p*R+d*I,l[3]=u*y+p*F+d*L,l[6]=u*S+p*D+d*w,l[1]=m*C+g*R+v*I,l[4]=m*y+g*F+v*L,l[7]=m*S+g*D+v*w,l[2]=_*C+b*R+E*I,l[5]=_*y+b*F+E*L,l[8]=_*S+b*D+E*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],p=e[5],d=e[6],m=e[7],g=e[8];return t*u*g-t*p*m-r*l*g+r*p*d+o*l*m-o*u*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],p=e[5],d=e[6],m=e[7],g=e[8],v=g*u-p*m,_=p*d-g*l,b=m*l-u*d,E=t*v+r*_+o*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=v*C,e[1]=(o*m-g*r)*C,e[2]=(p*r-o*u)*C,e[3]=_*C,e[4]=(g*t-o*d)*C,e[5]=(o*l-p*t)*C,e[6]=b*C,e[7]=(r*d-m*t)*C,e[8]=(u*t-r*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,p){const d=Math.cos(l),m=Math.sin(l);return this.set(r*d,r*m,-r*(d*u+m*p)+u+e,-o*m,o*d,-o*(-m*u+d*p)+p+t,0,0,1),this}scale(e,t){return ql("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nd.makeScale(e,t)),this}rotate(e){return ql("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nd.makeRotation(-e)),this}translate(e,t){return ql("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};kf.prototype.isMatrix3=!0;let Tt=kf;const nd=new Tt,g0=new Tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),x0=new Tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function L_(){const s={enabled:!0,workingColorSpace:nc,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===qt&&(o.r=Tr(o.r),o.g=Tr(o.g),o.b=Tr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===qt&&(o.r=fa(o.r),o.g=fa(o.g),o.b=fa(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Jr?ic:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[u].fromXYZ).multiply(this.spaces[l].toXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[nc]:{primaries:e,whitePoint:r,transfer:ic,toXYZ:g0,fromXYZ:x0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:e,whitePoint:r,transfer:qt,toXYZ:g0,fromXYZ:x0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),s}const zt=L_();function Tr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Zs;class I_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Zs===void 0&&(Zs=rc("canvas")),Zs.width=e.width,Zs.height=e.height;const o=Zs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Zs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Tr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Tr(t[r]/255)*255):t[r]=Tr(t[r]);return{data:t,width:e.width,height:e.height}}else return wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let k_=0;class Tf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=po(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,p=o.length;u<p;u++)o[u].isDataTexture?l.push(id(o[u].image)):l.push(id(o[u]))}else l=id(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function id(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?I_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(wt("Texture: Unable to serialize Texture."),{})}let U_=0;const rd=new pe;class $n extends As{constructor(e=$n.DEFAULT_IMAGE,t=$n.DEFAULT_MAPPING,r=si,o=si,l=ai,u=Qr,p=Qi,d=mi,m=$n.DEFAULT_ANISOTROPY,g=Jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=po(),this.name="",this.source=new Tf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=p,this.internalFormat=null,this.type=d,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(rd).x}get height(){return this.source.getSize(rd).y}get depth(){return this.source.getSize(rd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){wt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){wt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pa:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case Dd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pa:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case Dd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=Sm;$n.DEFAULT_ANISOTROPY=1;const Uf=class Uf{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,m=d[0],g=d[4],v=d[8],_=d[1],b=d[5],E=d[9],C=d[2],y=d[6],S=d[10];if(Math.abs(g-_)<.01&&Math.abs(v-C)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+C)<.1&&Math.abs(E+y)<.1&&Math.abs(m+b+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(m+1)/2,D=(b+1)/2,I=(S+1)/2,L=(g+_)/4,w=(v+C)/4,N=(E+y)/4;return F>D&&F>I?F<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(F),o=L/r,l=w/r):D>I?D<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(D),r=L/o,l=N/o):I<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(I),r=w/l,o=N/l),this.set(r,o,l,t),this}let R=Math.sqrt((y-E)*(y-E)+(v-C)*(v-C)+(_-g)*(_-g));return Math.abs(R)<.001&&(R=1),this.x=(y-E)/R,this.y=(v-C)/R,this.z=(_-g)/R,this.w=Math.acos((m+b+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ot(this.x,e.x,t.x),this.y=Ot(this.y,e.y,t.y),this.z=Ot(this.z,e.z,t.z),this.w=Ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ot(this.x,e,t),this.y=Ot(this.y,e,t),this.z=Ot(this.z,e,t),this.w=Ot(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ot(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Uf.prototype.isVector4=!0;let fn=Uf;class F_ extends As{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new fn(0,0,e,t),this.scissorTest=!1,this.viewport=new fn(0,0,e,t),this.textures=[];const o=r.count;for(let l=0;l<o;l++)this.textures[l]=new $n({width:e,height:t,depth:r.depth}),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:ai,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Tf(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class er extends F_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Lm extends $n{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=kn,this.minFilter=kn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class z_ extends $n{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=kn,this.minFilter=kn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const uc=class uc{constructor(e,t,r,o,l,u,p,d,m,g,v,_,b,E,C,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,p,d,m,g,v,_,b,E,C,y)}set(e,t,r,o,l,u,p,d,m,g,v,_,b,E,C,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=r,S[12]=o,S[1]=l,S[5]=u,S[9]=p,S[13]=d,S[2]=m,S[6]=g,S[10]=v,S[14]=_,S[3]=b,S[7]=E,S[11]=C,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new uc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Js.setFromMatrixColumn(e,0).length(),l=1/Js.setFromMatrixColumn(e,1).length(),u=1/Js.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),p=Math.sin(r),d=Math.cos(o),m=Math.sin(o),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const _=u*g,b=u*v,E=p*g,C=p*v;t[0]=d*g,t[4]=-d*v,t[8]=m,t[1]=b+E*m,t[5]=_-C*m,t[9]=-p*d,t[2]=C-_*m,t[6]=E+b*m,t[10]=u*d}else if(e.order==="YXZ"){const _=d*g,b=d*v,E=m*g,C=m*v;t[0]=_+C*p,t[4]=E*p-b,t[8]=u*m,t[1]=u*v,t[5]=u*g,t[9]=-p,t[2]=b*p-E,t[6]=C+_*p,t[10]=u*d}else if(e.order==="ZXY"){const _=d*g,b=d*v,E=m*g,C=m*v;t[0]=_-C*p,t[4]=-u*v,t[8]=E+b*p,t[1]=b+E*p,t[5]=u*g,t[9]=C-_*p,t[2]=-u*m,t[6]=p,t[10]=u*d}else if(e.order==="ZYX"){const _=u*g,b=u*v,E=p*g,C=p*v;t[0]=d*g,t[4]=E*m-b,t[8]=_*m+C,t[1]=d*v,t[5]=C*m+_,t[9]=b*m-E,t[2]=-m,t[6]=p*d,t[10]=u*d}else if(e.order==="YZX"){const _=u*d,b=u*m,E=p*d,C=p*m;t[0]=d*g,t[4]=C-_*v,t[8]=E*v+b,t[1]=v,t[5]=u*g,t[9]=-p*g,t[2]=-m*g,t[6]=b*v+E,t[10]=_-C*v}else if(e.order==="XZY"){const _=u*d,b=u*m,E=p*d,C=p*m;t[0]=d*g,t[4]=-v,t[8]=m*g,t[1]=_*v+C,t[5]=u*g,t[9]=b*v-E,t[2]=E*v-b,t[6]=p*g,t[10]=C*v+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(O_,e,B_)}lookAt(e,t,r){const o=this.elements;return fi.subVectors(e,t),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),jr.crossVectors(r,fi),jr.lengthSq()===0&&(Math.abs(r.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),jr.crossVectors(r,fi)),jr.normalize(),bl.crossVectors(fi,jr),o[0]=jr.x,o[4]=bl.x,o[8]=fi.x,o[1]=jr.y,o[5]=bl.y,o[9]=fi.y,o[2]=jr.z,o[6]=bl.z,o[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],p=r[4],d=r[8],m=r[12],g=r[1],v=r[5],_=r[9],b=r[13],E=r[2],C=r[6],y=r[10],S=r[14],R=r[3],F=r[7],D=r[11],I=r[15],L=o[0],w=o[4],N=o[8],Z=o[12],V=o[1],$=o[5],z=o[9],B=o[13],W=o[2],j=o[6],ce=o[10],Q=o[14],Y=o[3],X=o[7],H=o[11],P=o[15];return l[0]=u*L+p*V+d*W+m*Y,l[4]=u*w+p*$+d*j+m*X,l[8]=u*N+p*z+d*ce+m*H,l[12]=u*Z+p*B+d*Q+m*P,l[1]=g*L+v*V+_*W+b*Y,l[5]=g*w+v*$+_*j+b*X,l[9]=g*N+v*z+_*ce+b*H,l[13]=g*Z+v*B+_*Q+b*P,l[2]=E*L+C*V+y*W+S*Y,l[6]=E*w+C*$+y*j+S*X,l[10]=E*N+C*z+y*ce+S*H,l[14]=E*Z+C*B+y*Q+S*P,l[3]=R*L+F*V+D*W+I*Y,l[7]=R*w+F*$+D*j+I*X,l[11]=R*N+F*z+D*ce+I*H,l[15]=R*Z+F*B+D*Q+I*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],p=e[5],d=e[9],m=e[13],g=e[2],v=e[6],_=e[10],b=e[14],E=e[3],C=e[7],y=e[11],S=e[15],R=d*b-m*_,F=p*b-m*v,D=p*_-d*v,I=u*b-m*g,L=u*_-d*g,w=u*v-p*g;return t*(C*R-y*F+S*D)-r*(E*R-y*I+S*L)+o*(E*F-C*I+S*w)-l*(E*D-C*L+y*w)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],u=e[5],p=e[9],d=e[2],m=e[6],g=e[10];return t*(u*g-p*m)-r*(l*g-p*d)+o*(l*m-u*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],p=e[5],d=e[6],m=e[7],g=e[8],v=e[9],_=e[10],b=e[11],E=e[12],C=e[13],y=e[14],S=e[15],R=t*p-r*u,F=t*d-o*u,D=t*m-l*u,I=r*d-o*p,L=r*m-l*p,w=o*m-l*d,N=g*C-v*E,Z=g*y-_*E,V=g*S-b*E,$=v*y-_*C,z=v*S-b*C,B=_*S-b*y,W=R*B-F*z+D*$+I*V-L*Z+w*N;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/W;return e[0]=(p*B-d*z+m*$)*j,e[1]=(o*z-r*B-l*$)*j,e[2]=(C*w-y*L+S*I)*j,e[3]=(_*L-v*w-b*I)*j,e[4]=(d*V-u*B-m*Z)*j,e[5]=(t*B-o*V+l*Z)*j,e[6]=(y*D-E*w-S*F)*j,e[7]=(g*w-_*D+b*F)*j,e[8]=(u*z-p*V+m*N)*j,e[9]=(r*V-t*z-l*N)*j,e[10]=(E*L-C*D+S*R)*j,e[11]=(v*D-g*L-b*R)*j,e[12]=(p*Z-u*$-d*N)*j,e[13]=(t*$-r*Z+o*N)*j,e[14]=(C*F-E*I-y*R)*j,e[15]=(g*I-v*F+_*R)*j,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,p=e.y,d=e.z,m=l*u,g=l*p;return this.set(m*u+r,m*p-o*d,m*d+o*p,0,m*p+o*d,g*p+r,g*d-o*u,0,m*d-o*p,g*d+o*u,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,p=t._z,d=t._w,m=l+l,g=u+u,v=p+p,_=l*m,b=l*g,E=l*v,C=u*g,y=u*v,S=p*v,R=d*m,F=d*g,D=d*v,I=r.x,L=r.y,w=r.z;return o[0]=(1-(C+S))*I,o[1]=(b+D)*I,o[2]=(E-F)*I,o[3]=0,o[4]=(b-D)*L,o[5]=(1-(_+S))*L,o[6]=(y+R)*L,o[7]=0,o[8]=(E+F)*w,o[9]=(y-R)*w,o[10]=(1-(_+C))*w,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=Js.set(o[0],o[1],o[2]).length();const p=Js.set(o[4],o[5],o[6]).length(),d=Js.set(o[8],o[9],o[10]).length();l<0&&(u=-u),Li.copy(this);const m=1/u,g=1/p,v=1/d;return Li.elements[0]*=m,Li.elements[1]*=m,Li.elements[2]*=m,Li.elements[4]*=g,Li.elements[5]*=g,Li.elements[6]*=g,Li.elements[8]*=v,Li.elements[9]*=v,Li.elements[10]*=v,t.setFromRotationMatrix(Li),r.x=u,r.y=p,r.z=d,this}makePerspective(e,t,r,o,l,u,p=Gi,d=!1){const m=this.elements,g=2*l/(t-e),v=2*l/(r-o),_=(t+e)/(t-e),b=(r+o)/(r-o);let E,C;if(d)E=l/(u-l),C=u*l/(u-l);else if(p===Gi)E=-(u+l)/(u-l),C=-2*u*l/(u-l);else if(p===fo)E=-u/(u-l),C=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return m[0]=g,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=v,m[9]=b,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,o,l,u,p=Gi,d=!1){const m=this.elements,g=2/(t-e),v=2/(r-o),_=-(t+e)/(t-e),b=-(r+o)/(r-o);let E,C;if(d)E=1/(u-l),C=u/(u-l);else if(p===Gi)E=-2/(u-l),C=-(u+l)/(u-l);else if(p===fo)E=-1/(u-l),C=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return m[0]=g,m[4]=0,m[8]=0,m[12]=_,m[1]=0,m[5]=v,m[9]=0,m[13]=b,m[2]=0,m[6]=0,m[10]=E,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};uc.prototype.isMatrix4=!0;let hn=uc;const Js=new pe,Li=new hn,O_=new pe(0,0,0),B_=new pe(1,1,1),jr=new pe,bl=new pe,fi=new pe,v0=new hn,_0=new va;class ns{constructor(e=0,t=0,r=0,o=ns.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],p=o[8],d=o[1],m=o[5],g=o[9],v=o[2],_=o[6],b=o[10];switch(t){case"XYZ":this._y=Math.asin(Ot(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,b),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(p,b),this._z=Math.atan2(d,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,b),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Ot(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,b),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(p,b));break;case"XZY":this._z=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(p,l)):(this._x=Math.atan2(-g,b),this._y=0);break;default:wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return v0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(v0,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _0.setFromEuler(this),this.setFromQuaternion(_0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ns.DEFAULT_ORDER="XYZ";class Im{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let H_=0;const y0=new pe,Qs=new va,gr=new hn,wl=new pe,Ja=new pe,G_=new pe,V_=new va,S0=new pe(1,0,0),b0=new pe(0,1,0),w0=new pe(0,0,1),M0={type:"added"},W_={type:"removed"},ea={type:"childadded",child:null},sd={type:"childremoved",child:null};class Xn extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new pe,t=new ns,r=new va,o=new pe(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new hn},normalMatrix:{value:new Tt}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Im,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.premultiply(Qs),this}rotateX(e){return this.rotateOnAxis(S0,e)}rotateY(e){return this.rotateOnAxis(b0,e)}rotateZ(e){return this.rotateOnAxis(w0,e)}translateOnAxis(e,t){return y0.copy(e).applyQuaternion(this.quaternion),this.position.add(y0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(S0,e)}translateY(e){return this.translateOnAxis(b0,e)}translateZ(e){return this.translateOnAxis(w0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?wl.copy(e):wl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ja.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gr.lookAt(Ja,wl,this.up):gr.lookAt(wl,Ja,this.up),this.quaternion.setFromRotationMatrix(gr),o&&(gr.extractRotation(o.matrixWorld),Qs.setFromRotationMatrix(gr),this.quaternion.premultiply(Qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(M0),ea.child=e,this.dispatchEvent(ea),ea.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(W_),sd.child=e,this.dispatchEvent(sd),sd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gr.multiply(e.parent.matrixWorld)),e.applyMatrix4(gr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(M0),ea.child=e,this.dispatchEvent(ea),ea.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ja,e,G_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ja,V_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,p=l.length;u<p;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(p=>({...p})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(p,d){return p[d.uuid]===void 0&&(p[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const d=p.shapes;if(Array.isArray(d))for(let m=0,g=d.length;m<g;m++){const v=d[m];l(e.shapes,v)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let d=0,m=this.material.length;d<m;d++)p.push(l(e.materials,this.material[d]));o.material=p}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let p=0;p<this.children.length;p++)o.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let p=0;p<this.animations.length;p++){const d=this.animations[p];o.animations.push(l(e.animations,d))}}if(t){const p=u(e.geometries),d=u(e.materials),m=u(e.textures),g=u(e.images),v=u(e.shapes),_=u(e.skeletons),b=u(e.animations),E=u(e.nodes);p.length>0&&(r.geometries=p),d.length>0&&(r.materials=d),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),b.length>0&&(r.animations=b),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(p){const d=[];for(const m in p){const g=p[m];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Xn.DEFAULT_UP=new pe(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ro extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j_={type:"move"};class ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ro,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ro,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new pe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new pe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ro,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new pe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new pe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const p=this._targetRay,d=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const C of e.hand.values()){const y=t.getJointPose(C,r),S=this._getHandJoint(m,C);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],_=g.position.distanceTo(v.position),b=.02,E=.005;m.inputState.pinching&&_>b+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&_<=b-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(j_)))}return p!==null&&(p.visible=o!==null),d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ro;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const km={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$r={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function od(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Dt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=zt.workingColorSpace){return this.r=e,this.g=t,this.b=r,zt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=zt.workingColorSpace){if(e=R_(e,1),t=Ot(t,0,1),r=Ot(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=od(u,l,e+1/3),this.g=od(u,l,e),this.b=od(u,l,e-1/3)}return zt.colorSpaceToWorking(this,o),this}setStyle(e,t=pi){function r(l){l!==void 0&&parseFloat(l)<1&&wt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],p=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(p))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(p))return r(l[4]),this.setRGB(Math.min(100,parseFloat(l[1]))/100,Math.min(100,parseFloat(l[2]))/100,Math.min(100,parseFloat(l[3]))/100,t);break;case"hsl":case"hsla":if(l=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(p))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:wt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);wt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pi){const r=km[e.toLowerCase()];return r!==void 0?this.setHex(r,t):wt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}copyLinearToSRGB(e){return this.r=fa(e.r),this.g=fa(e.g),this.b=fa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return zt.workingToColorSpace(jn.copy(this),e),Math.round(Ot(jn.r*255,0,255))*65536+Math.round(Ot(jn.g*255,0,255))*256+Math.round(Ot(jn.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.workingToColorSpace(jn.copy(this),t);const r=jn.r,o=jn.g,l=jn.b,u=Math.max(r,o,l),p=Math.min(r,o,l);let d,m;const g=(p+u)/2;if(p===u)d=0,m=0;else{const v=u-p;switch(m=g<=.5?v/(u+p):v/(2-u-p),u){case r:d=(o-l)/v+(o<l?6:0);break;case o:d=(l-r)/v+2;break;case l:d=(r-o)/v+4;break}d/=6}return e.h=d,e.s=m,e.l=g,e}getRGB(e,t=zt.workingColorSpace){return zt.workingToColorSpace(jn.copy(this),t),e.r=jn.r,e.g=jn.g,e.b=jn.b,e}getStyle(e=pi){zt.workingToColorSpace(jn.copy(this),e);const t=jn.r,r=jn.g,o=jn.b;return e!==pi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL($r),this.setHSL($r.h+e,$r.s+t,$r.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL($r),e.getHSL(Ml);const r=ed($r.h,Ml.h,t),o=ed($r.s,Ml.s,t),l=ed($r.l,Ml.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jn=new Dt;Dt.NAMES=km;class $_ extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ns,this.environmentIntensity=1,this.environmentRotation=new ns,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ii=new pe,xr=new pe,ld=new pe,vr=new pe,ta=new pe,na=new pe,E0=new pe,cd=new pe,ud=new pe,dd=new pe,fd=new fn,hd=new fn,pd=new fn;class Hi{constructor(e=new pe,t=new pe,r=new pe){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ii.subVectors(e,t),o.cross(Ii);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Ii.subVectors(o,t),xr.subVectors(r,t),ld.subVectors(e,t);const u=Ii.dot(Ii),p=Ii.dot(xr),d=Ii.dot(ld),m=xr.dot(xr),g=xr.dot(ld),v=u*m-p*p;if(v===0)return l.set(0,0,0),null;const _=1/v,b=(m*d-p*g)*_,E=(u*g-p*d)*_;return l.set(1-b-E,E,b)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,vr)===null?!1:vr.x>=0&&vr.y>=0&&vr.x+vr.y<=1}static getInterpolation(e,t,r,o,l,u,p,d){return this.getBarycoord(e,t,r,o,vr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,vr.x),d.addScaledVector(u,vr.y),d.addScaledVector(p,vr.z),d)}static getInterpolatedAttribute(e,t,r,o,l,u){return fd.setScalar(0),hd.setScalar(0),pd.setScalar(0),fd.fromBufferAttribute(e,t),hd.fromBufferAttribute(e,r),pd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(fd,l.x),u.addScaledVector(hd,l.y),u.addScaledVector(pd,l.z),u}static isFrontFacing(e,t,r,o){return Ii.subVectors(r,t),xr.subVectors(e,t),Ii.cross(xr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ii.subVectors(this.c,this.b),xr.subVectors(this.a,this.b),Ii.cross(xr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Hi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,p;ta.subVectors(o,r),na.subVectors(l,r),cd.subVectors(e,r);const d=ta.dot(cd),m=na.dot(cd);if(d<=0&&m<=0)return t.copy(r);ud.subVectors(e,o);const g=ta.dot(ud),v=na.dot(ud);if(g>=0&&v<=g)return t.copy(o);const _=d*v-g*m;if(_<=0&&d>=0&&g<=0&&d-g>0)return u=d/(d-g),t.copy(r).addScaledVector(ta,u);dd.subVectors(e,l);const b=ta.dot(dd),E=na.dot(dd);if(E>=0&&b<=E)return t.copy(l);const C=b*m-d*E;if(C<=0&&m>=0&&E<=0)return p=m/(m-E),t.copy(r).addScaledVector(na,p);const y=g*E-b*v;if(y<=0&&v-g>=0&&b-E>=0)return E0.subVectors(l,o),p=(v-g)/(v-g+(b-E)),t.copy(o).addScaledVector(E0,p);const S=1/(y+C+_);return u=C*S,p=_*S,t.copy(r).addScaledVector(ta,u).addScaledVector(na,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class mo{constructor(e=new pe(1/0,1/0,1/0),t=new pe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let u=0,p=l.count;u<p;u++)e.isMesh===!0?e.getVertexPosition(u,ki):ki.fromBufferAttribute(l,u),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),El.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),El.copy(r.boundingBox)),El.applyMatrix4(e.matrixWorld),this.union(El)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qa),Tl.subVectors(this.max,Qa),ia.subVectors(e.a,Qa),ra.subVectors(e.b,Qa),sa.subVectors(e.c,Qa),Xr.subVectors(ra,ia),Yr.subVectors(sa,ra),xs.subVectors(ia,sa);let t=[0,-Xr.z,Xr.y,0,-Yr.z,Yr.y,0,-xs.z,xs.y,Xr.z,0,-Xr.x,Yr.z,0,-Yr.x,xs.z,0,-xs.x,-Xr.y,Xr.x,0,-Yr.y,Yr.x,0,-xs.y,xs.x,0];return!md(t,ia,ra,sa,Tl)||(t=[1,0,0,0,1,0,0,0,1],!md(t,ia,ra,sa,Tl))?!1:(Al.crossVectors(Xr,Yr),t=[Al.x,Al.y,Al.z],md(t,ia,ra,sa,Tl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_r[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_r[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_r[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_r[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_r[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_r[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_r[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_r[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_r),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _r=[new pe,new pe,new pe,new pe,new pe,new pe,new pe,new pe],ki=new pe,El=new mo,ia=new pe,ra=new pe,sa=new pe,Xr=new pe,Yr=new pe,xs=new pe,Qa=new pe,Tl=new pe,Al=new pe,vs=new pe;function md(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){vs.fromArray(s,l);const p=o.x*Math.abs(vs.x)+o.y*Math.abs(vs.y)+o.z*Math.abs(vs.z),d=e.dot(vs),m=t.dot(vs),g=r.dot(vs);if(Math.max(-Math.max(d,m,g),Math.min(d,m,g))>p)return!1}return!0}const yn=new pe,Cl=new kt;let X_=0;class ws extends As{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:X_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=M_,this.updateRanges=[],this.gpuType=Ji,this.version=0,this._normalizationScale=e!==void 0?Ef(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Cl.fromBufferAttribute(this,t),Cl.applyMatrix3(e),this.setXY(t,Cl.x,Cl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix3(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):P_(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):D_(e,this.array)}}class Um extends ws{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Fm extends ws{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Dn extends ws{constructor(e,t,r){super(new Float32Array(e),t,r)}}const Y_=new mo,eo=new pe,gd=new pe;class Af{constructor(e=new pe,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Y_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);const t=eo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(eo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(gd)),this.expandByPoint(eo.copy(e.center).sub(gd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let q_=0;const Mi=new hn,xd=new Xn,aa=new pe,hi=new mo,to=new mo,Pn=new pe;class ir extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=po(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(E_(e)?Fm:Um)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new Tt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,t,r){return Mi.makeTranslation(e,t,r),this.applyMatrix4(Mi),this}scale(e,t,r){return Mi.makeScale(e,t,r),this.applyMatrix4(Mi),this}lookAt(e){return xd.lookAt(e),xd.updateMatrix(),this.applyMatrix4(xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(aa).negate(),this.translate(aa.x,aa.y,aa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Dn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new pe(-1/0,-1/0,-1/0),new pe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];hi.setFromBufferAttribute(l),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Af);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new pe,1/0);return}if(e){const r=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const p=t[l];to.setFromBufferAttribute(p),this.morphTargetsRelative?(Pn.addVectors(hi.min,to.min),hi.expandByPoint(Pn),Pn.addVectors(hi.max,to.max),hi.expandByPoint(Pn)):(hi.expandByPoint(to.min),hi.expandByPoint(to.max))}hi.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)Pn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Pn));if(t)for(let l=0,u=t.length;l<u;l++){const p=t[l],d=this.morphTargetsRelative;for(let m=0,g=p.count;m<g;m++)Pn.fromBufferAttribute(p,m),d&&(aa.fromBufferAttribute(e,m),Pn.add(aa)),o=Math.max(o,r.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new ws(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const p=[],d=[],m=new Uint8Array(r.count);for(let Z=0;Z<r.count;Z++)p[Z]=new pe,d[Z]=new pe;const g=new pe,v=new pe,_=new pe,b=new kt,E=new kt,C=new kt,y=new pe,S=new pe;function R(Z,V,$){m[Z]=m[V]=m[$]=1,g.fromBufferAttribute(r,Z),v.fromBufferAttribute(r,V),_.fromBufferAttribute(r,$),b.fromBufferAttribute(l,Z),E.fromBufferAttribute(l,V),C.fromBufferAttribute(l,$),v.sub(g),_.sub(g),E.sub(b),C.sub(b);const z=1/(E.x*C.y-C.x*E.y);isFinite(z)&&(y.copy(v).multiplyScalar(C.y).addScaledVector(_,-E.y).multiplyScalar(z),S.copy(_).multiplyScalar(E.x).addScaledVector(v,-C.x).multiplyScalar(z),p[Z].add(y),p[V].add(y),p[$].add(y),d[Z].add(S),d[V].add(S),d[$].add(S))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let Z=0,V=F.length;Z<V;++Z){const $=F[Z],z=$.start,B=$.count;for(let W=z,j=z+B;W<j;W+=3)R(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const D=new pe,I=new pe,L=new pe,w=new pe;function N(Z){L.fromBufferAttribute(o,Z),w.copy(L);const V=p[Z];D.copy(V),D.sub(L.multiplyScalar(L.dot(V))).normalize(),I.crossVectors(w,V);const z=I.dot(d[Z])<0?-1:1;u.setXYZW(Z,D.x,D.y,D.z,z)}for(let Z=0,V=r.count;Z<V;++Z)m[Z]&&N(Z);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new ws(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,b=r.count;_<b;_++)r.setXYZ(_,0,0,0);const o=new pe,l=new pe,u=new pe,p=new pe,d=new pe,m=new pe,g=new pe,v=new pe;if(e)for(let _=0,b=e.count;_<b;_+=3){const E=e.getX(_+0),C=e.getX(_+1),y=e.getX(_+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,C),u.fromBufferAttribute(t,y),g.subVectors(u,l),v.subVectors(o,l),g.cross(v),p.fromBufferAttribute(r,E),d.fromBufferAttribute(r,C),m.fromBufferAttribute(r,y),p.add(g),d.add(g),m.add(g),r.setXYZ(E,p.x,p.y,p.z),r.setXYZ(C,d.x,d.y,d.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let _=0,b=t.count;_<b;_+=3)o.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),g.subVectors(u,l),v.subVectors(o,l),g.cross(v),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Pn.fromBufferAttribute(e,t),Pn.normalize(),e.setXYZ(t,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(p,d){const m=p.array,g=p.itemSize,v=p.normalized,_=new m.constructor(d.length*g);let b=0,E=0;for(let C=0,y=d.length;C<y;C++){p.isInterleavedBufferAttribute?b=d[C]*p.data.stride+p.offset:b=d[C]*g;for(let S=0;S<g;S++)_[E++]=m[b++]}return new ws(_,g,v)}if(this.index===null)return wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ir,r=this.index.array,o=this.attributes;for(const p in o){const d=o[p],m=e(d,r);t.setAttribute(p,m)}const l=this.morphAttributes;for(const p in l){const d=[],m=l[p];for(let g=0,v=m.length;g<v;g++){const _=m[g],b=e(_,r);d.push(b)}t.morphAttributes[p]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let p=0,d=u.length;p<d;p++){const m=u[p];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const m in d)d[m]!==void 0&&(e[m]=d[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const m=r[d];e.data.attributes[d]=m.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const m=this.morphAttributes[d],g=[];for(let v=0,_=m.length;v<_;v++){const b=m[v];g.push(b.toJSON(e.data))}g.length>0&&(o[d]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const g=o[m];this.setAttribute(m,g.clone(t))}const l=e.morphAttributes;for(const m in l){const g=[],v=l[m];for(let _=0,b=v.length;_<b;_++)g.push(v[_].clone(t));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,g=u.length;m<g;m++){const v=u[m];this.addGroup(v.start,v.count,v.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vd=new pe,K_=new pe,Z_=new Tt;class Zr{constructor(e=new pe(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=vd.subVectors(r,t).cross(K_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(vd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Z_.getNormalMatrix(e),o=this.coplanarPoint(vd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let J_=0;class go extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=po(),this.name="",this.type="Material",this.blending=ao,this.side=Es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dm,this.blendDst=fm,this.blendEquation=ca,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=v_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ju,this.stencilZFail=Ju,this.stencilZPass=Ju,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){wt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){wt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const p in l){const d=l[p];delete d.metadata,u.push(d)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Dt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Zr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new kt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new kt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const yr=new pe,_d=new pe,Rl=new pe,Nl=new pe;class Q_{constructor(e=new pe,t=new pe(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yr.copy(this.origin).addScaledVector(this.direction,t),yr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){_d.copy(e).add(t).multiplyScalar(.5),Rl.copy(t).sub(e).normalize(),Nl.copy(this.origin).sub(_d);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Rl),p=Nl.dot(this.direction),d=-Nl.dot(Rl),m=Nl.lengthSq(),g=Math.abs(1-u*u);let v,_,b,E;if(g>0)if(v=u*d-p,_=u*p-d,E=l*g,v>=0)if(_>=-E)if(_<=E){const C=1/g;v*=C,_*=C,b=v*(v+u*_+2*p)+_*(u*v+_+2*d)+m}else _=l,v=Math.max(0,-(u*_+p)),b=-v*v+_*(_+2*d)+m;else _=-l,v=Math.max(0,-(u*_+p)),b=-v*v+_*(_+2*d)+m;else _<=-E?(v=Math.max(0,-(-u*l+p)),_=v>0?-l:Math.min(Math.max(-l,-d),l),b=-v*v+_*(_+2*d)+m):_<=E?(v=0,_=Math.min(Math.max(-l,-d),l),b=_*(_+2*d)+m):(v=Math.max(0,-(u*l+p)),_=v>0?l:Math.min(Math.max(-l,-d),l),b=-v*v+_*(_+2*d)+m);else _=u>0?-l:l,v=Math.max(0,-(u*_+p)),b=-v*v+_*(_+2*d)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(_d).addScaledVector(Rl,_),b}intersectSphere(e,t){if(e.radius<0)return null;yr.subVectors(e.center,this.origin);const r=yr.dot(this.direction),o=yr.dot(yr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),p=r-u,d=r+u;return d<0?null:p<0?this.at(d,t):this.at(p,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,p,d;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return m>=0?(r=(e.min.x-_.x)*m,o=(e.max.x-_.x)*m):(r=(e.max.x-_.x)*m,o=(e.min.x-_.x)*m),g>=0?(l=(e.min.y-_.y)*g,u=(e.max.y-_.y)*g):(l=(e.max.y-_.y)*g,u=(e.min.y-_.y)*g),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),v>=0?(p=(e.min.z-_.z)*v,d=(e.max.z-_.z)*v):(p=(e.max.z-_.z)*v,d=(e.min.z-_.z)*v),r>d||p>o)||((p>r||r!==r)&&(r=p),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,yr)!==null}intersectTriangle(e,t,r,o,l){const u=this.origin,p=this.direction,d=p.x,m=p.y,g=p.z,v=e.x-u.x,_=e.y-u.y,b=e.z-u.z,E=t.x-u.x,C=t.y-u.y,y=t.z-u.z,S=r.x-u.x,R=r.y-u.y,F=r.z-u.z,D=Math.abs(d),I=Math.abs(m),L=Math.abs(g);let w,N,Z,V,$,z,B,W,j,ce,Q,Y;if(D>=I&&D>=L?(Z=d,z=v,j=E,Y=S,d>=0?(w=m,N=g,V=_,$=b,B=C,W=y,ce=R,Q=F):(w=g,N=m,V=b,$=_,B=y,W=C,ce=F,Q=R)):I>=L?(Z=m,z=_,j=C,Y=R,m>=0?(w=g,N=d,V=b,$=v,B=y,W=E,ce=F,Q=S):(w=d,N=g,V=v,$=b,B=E,W=y,ce=S,Q=F)):(Z=g,z=b,j=y,Y=F,g>=0?(w=d,N=m,V=v,$=_,B=E,W=C,ce=S,Q=R):(w=m,N=d,V=_,$=v,B=C,W=E,ce=R,Q=S)),Z===0)return null;const X=w/Z,H=N/Z,P=1/Z,q=V-X*z,Ee=$-H*z,ee=B-X*j,le=W-H*j,be=ce-X*Y,Ae=Q-H*Y,we=be*le-Ae*ee,ze=q*Ae-Ee*be,qe=ee*Ee-le*q;if(o){if(we<0||ze<0||qe<0)return null}else if((we<0||ze<0||qe<0)&&(we>0||ze>0||qe>0))return null;const ke=we+ze+qe;if(ke===0)return null;const Te=P*(we*z+ze*j+qe*Y);return(ke>0?Te<0:Te>0)?null:this.at(Te/ke,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kl extends go{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=hm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const T0=new hn,_s=new Q_,Pl=new Af,A0=new pe,Dl=new pe,Ll=new pe,Il=new pe,yd=new pe,kl=new pe,C0=new pe,Ul=new pe;class Sn extends Xn{constructor(e=new ir,t=new Kl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const p=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const p=this.morphTargetInfluences;if(l&&p){kl.set(0,0,0);for(let d=0,m=l.length;d<m;d++){const g=p[d],v=l[d];g!==0&&(yd.fromBufferAttribute(v,e),u?kl.addScaledVector(yd,g):kl.addScaledVector(yd.sub(t),g))}t.add(kl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Pl.copy(r.boundingSphere),Pl.applyMatrix4(l),_s.copy(e.ray).recast(e.near),!(Pl.containsPoint(_s.origin)===!1&&(_s.intersectSphere(Pl,A0)===null||_s.origin.distanceToSquared(A0)>(e.far-e.near)**2))&&(T0.copy(l).invert(),_s.copy(e.ray).applyMatrix4(T0),!(r.boundingBox!==null&&_s.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,_s)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,p=l.index,d=l.attributes.position,m=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,_=l.groups,b=l.drawRange;if(p!==null)if(Array.isArray(u))for(let E=0,C=_.length;E<C;E++){const y=_[E],S=u[y.materialIndex],R=Math.max(y.start,b.start),F=Math.min(p.count,Math.min(y.start+y.count,b.start+b.count));for(let D=R,I=F;D<I;D+=3){const L=p.getX(D),w=p.getX(D+1),N=p.getX(D+2);o=Fl(this,S,e,r,m,g,v,L,w,N),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const E=Math.max(0,b.start),C=Math.min(p.count,b.start+b.count);for(let y=E,S=C;y<S;y+=3){const R=p.getX(y),F=p.getX(y+1),D=p.getX(y+2);o=Fl(this,u,e,r,m,g,v,R,F,D),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let E=0,C=_.length;E<C;E++){const y=_[E],S=u[y.materialIndex],R=Math.max(y.start,b.start),F=Math.min(d.count,Math.min(y.start+y.count,b.start+b.count));for(let D=R,I=F;D<I;D+=3){const L=D,w=D+1,N=D+2;o=Fl(this,S,e,r,m,g,v,L,w,N),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const E=Math.max(0,b.start),C=Math.min(d.count,b.start+b.count);for(let y=E,S=C;y<S;y+=3){const R=y,F=y+1,D=y+2;o=Fl(this,u,e,r,m,g,v,R,F,D),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function ey(s,e,t,r,o,l,u,p){let d;if(e.side===Un?d=r.intersectTriangle(u,l,o,!0,p):d=r.intersectTriangle(o,l,u,e.side===Es,p),d===null)return null;Ul.copy(p),Ul.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(Ul);return m<t.near||m>t.far?null:{distance:m,point:Ul.clone(),object:s}}function Fl(s,e,t,r,o,l,u,p,d,m){s.getVertexPosition(p,Dl),s.getVertexPosition(d,Ll),s.getVertexPosition(m,Il);const g=ey(s,e,t,r,Dl,Ll,Il,C0);if(g){const v=new pe;Hi.getBarycoord(C0,Dl,Ll,Il,v),o&&(g.uv=Hi.getInterpolatedAttribute(o,p,d,m,v,new kt)),l&&(g.uv1=Hi.getInterpolatedAttribute(l,p,d,m,v,new kt)),u&&(g.normal=Hi.getInterpolatedAttribute(u,p,d,m,v,new pe),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:p,b:d,c:m,normal:new pe,materialIndex:0};Hi.getNormal(Dl,Ll,Il,_.normal),g.face=_,g.barycoord=v}return g}class ty extends $n{constructor(e=null,t=1,r=1,o,l,u,p,d,m=kn,g=kn,v,_){super(null,u,p,d,m,g,o,l,v,_),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ys=new Af,ny=new kt(.5,.5),zl=new pe;class ho{constructor(e=new Zr,t=new Zr,r=new Zr,o=new Zr,l=new Zr,u=new Zr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const p=this.planes;return p[0].copy(e),p[1].copy(t),p[2].copy(r),p[3].copy(o),p[4].copy(l),p[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Gi,r=!1){const o=this.planes,l=e.elements,u=l[0],p=l[1],d=l[2],m=l[3],g=l[4],v=l[5],_=l[6],b=l[7],E=l[8],C=l[9],y=l[10],S=l[11],R=l[12],F=l[13],D=l[14],I=l[15];if(o[0].setComponents(m-u,b-g,S-E,I-R).normalize(),o[1].setComponents(m+u,b+g,S+E,I+R).normalize(),o[2].setComponents(m+p,b+v,S+C,I+F).normalize(),o[3].setComponents(m-p,b-v,S-C,I-F).normalize(),r)o[4].setComponents(d,_,y,D).normalize(),o[5].setComponents(m-d,b-_,S-y,I-D).normalize();else if(o[4].setComponents(m-d,b-_,S-y,I-D).normalize(),t===Gi)o[5].setComponents(m+d,b+_,S+y,I+D).normalize();else if(t===fo)o[5].setComponents(d,_,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(e){ys.center.set(0,0,0);const t=ny.distanceTo(e.center);return ys.radius=.7071067811865476+t,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(zl.x=o.normal.x>0?e.max.x:e.min.x,zl.y=o.normal.y>0?e.max.y:e.min.y,zl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(zl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const R0=new hn;class Cf{constructor(){this.coordinateSystem=Gi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let o=0;o<t.length;o++){const l=t[o];R0.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),r[o]===void 0&&(r[o]=new ho),r[o].setFromProjectionMatrix(R0,l.coordinateSystem,l.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let o=0;o<e._count;o++)t[o]===void 0&&(t[o]=new ho),t[o].copy(r[o]);return this._count=e._count,this}clone(){return new Cf().copy(this)}}class zm extends $n{constructor(e=[],t=ha,r,o,l,u,p,d,m,g){super(e,t,r,o,l,u,p,d,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dc extends $n{constructor(e,t,r,o,l,u,p,d,m){super(e,t,r,o,l,u,p,d,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ga extends $n{constructor(e,t,r=tr,o,l,u,p=kn,d=kn,m,g=ts,v=1){if(g!==ts&&g!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:v};super(_,o,l,u,p,d,g,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Om extends ga{constructor(e,t=tr,r=ha,o,l,u=kn,p=kn,d,m=ts){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,t,r,o,l,u,p,d,m),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Bm extends $n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class xo extends ir{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const p=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const d=[],m=[],g=[],v=[];let _=0,b=0;E("z","y","x",-1,-1,r,t,e,u,l,0),E("z","y","x",1,-1,r,t,-e,u,l,1),E("x","z","y",1,1,e,r,t,o,u,2),E("x","z","y",1,-1,e,r,-t,o,u,3),E("x","y","z",1,-1,e,t,r,o,l,4),E("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new Dn(m,3)),this.setAttribute("normal",new Dn(g,3)),this.setAttribute("uv",new Dn(v,2));function E(C,y,S,R,F,D,I,L,w,N,Z){const V=D/w,$=I/N,z=D/2,B=I/2,W=L/2,j=w+1,ce=N+1;let Q=0,Y=0;const X=new pe;for(let H=0;H<ce;H++){const P=H*$-B;for(let q=0;q<j;q++){const Ee=q*V-z;X[C]=Ee*R,X[y]=P*F,X[S]=W,m.push(X.x,X.y,X.z),X[C]=0,X[y]=0,X[S]=L>0?1:-1,g.push(X.x,X.y,X.z),v.push(q/w),v.push(1-H/N),Q+=1}}for(let H=0;H<N;H++)for(let P=0;P<w;P++){const q=_+P+j*H,Ee=_+P+j*(H+1),ee=_+(P+1)+j*(H+1),le=_+(P+1)+j*H;d.push(q,Ee,le),d.push(Ee,ee,le),Y+=6}p.addGroup(b,Y,Z),b+=Y,_+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Rf extends ir{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,p=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:p,thetaLength:d};const m=this;o=Math.floor(o),l=Math.floor(l);const g=[],v=[],_=[],b=[];let E=0;const C=[],y=r/2;let S=0;R(),u===!1&&(e>0&&F(!0),t>0&&F(!1)),this.setIndex(g),this.setAttribute("position",new Dn(v,3)),this.setAttribute("normal",new Dn(_,3)),this.setAttribute("uv",new Dn(b,2));function R(){const D=new pe,I=new pe;let L=0;const w=(t-e)/r;for(let N=0;N<=l;N++){const Z=[],V=N/l,$=V*(t-e)+e;for(let z=0;z<=o;z++){const B=z/o,W=B*d+p,j=Math.sin(W),ce=Math.cos(W);I.x=$*j,I.y=-V*r+y,I.z=$*ce,v.push(I.x,I.y,I.z),D.set(j,w,ce).normalize(),_.push(D.x,D.y,D.z),b.push(B,1-V),Z.push(E++)}C.push(Z)}for(let N=0;N<o;N++)for(let Z=0;Z<l;Z++){const V=C[Z][N],$=C[Z+1][N],z=C[Z+1][N+1],B=C[Z][N+1];(e>0||Z!==0)&&(g.push(V,$,B),L+=3),(t>0||Z!==l-1)&&(g.push($,z,B),L+=3)}m.addGroup(S,L,0),S+=L}function F(D){const I=E,L=new kt,w=new pe;let N=0;const Z=D===!0?e:t,V=D===!0?1:-1;for(let z=1;z<=o;z++)v.push(0,y*V,0),_.push(0,V,0),b.push(.5,.5),E++;const $=E;for(let z=0;z<=o;z++){const W=z/o*d+p,j=Math.cos(W),ce=Math.sin(W);w.x=Z*ce,w.y=y*V,w.z=Z*j,v.push(w.x,w.y,w.z),_.push(0,V,0),L.x=j*.5+.5,L.y=ce*.5*V+.5,b.push(L.x,L.y),E++}for(let z=0;z<o;z++){const B=I+z,W=$+z;D===!0?g.push(W,W+1,B):g.push(W+1,W,B),N+=3}m.addGroup(S,N,D===!0?1:2),S+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Nf extends Rf{constructor(e=1,t=1,r=32,o=1,l=!1,u=0,p=Math.PI*2){super(0,e,t,r,o,l,u,p),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:p}}static fromJSON(e){return new Nf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vo extends ir{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,p=Math.floor(r),d=Math.floor(o),m=p+1,g=d+1,v=e/p,_=t/d,b=[],E=[],C=[],y=[];for(let S=0;S<g;S++){const R=S*_-u;for(let F=0;F<m;F++){const D=F*v-l;E.push(D,-R,0),C.push(0,0,1),y.push(F/p),y.push(1-S/d)}}for(let S=0;S<d;S++)for(let R=0;R<p;R++){const F=R+m*S,D=R+m*(S+1),I=R+1+m*(S+1),L=R+1+m*S;b.push(F,D,L),b.push(D,I,L)}this.setIndex(b),this.setAttribute("position",new Dn(E,3)),this.setAttribute("normal",new Dn(C,3)),this.setAttribute("uv",new Dn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pf extends ir{constructor(e=.5,t=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const p=[],d=[],m=[],g=[];let v=e;const _=(t-e)/o,b=new pe,E=new kt;for(let C=0;C<=o;C++){for(let y=0;y<=r;y++){const S=l+y/r*u;b.x=v*Math.cos(S),b.y=v*Math.sin(S),d.push(b.x,b.y,b.z),m.push(0,0,1),E.x=(b.x/t+1)/2,E.y=(b.y/t+1)/2,g.push(E.x,E.y)}v+=_}for(let C=0;C<o;C++){const y=C*(r+1);for(let S=0;S<r;S++){const R=S+y,F=R,D=R+r+1,I=R+r+2,L=R+1;p.push(F,D,L),p.push(D,I,L)}}this.setIndex(p),this.setAttribute("position",new Dn(d,3)),this.setAttribute("normal",new Dn(m,3)),this.setAttribute("uv",new Dn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ui extends ir{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:p},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const d=Math.min(u+p,Math.PI);let m=0;const g=[],v=new pe,_=new pe,b=[],E=[],C=[],y=[];for(let S=0;S<=r;S++){const R=[],F=S/r,D=u+F*p,I=e*Math.cos(D),L=Math.sqrt(e*e-I*I);let w=0;S===0&&u===0?w=.5/t:S===r&&d===Math.PI&&(w=-.5/t);for(let N=0;N<=t;N++){const Z=N/t,V=o+Z*l;v.x=-L*Math.cos(V),v.y=I,v.z=L*Math.sin(V),E.push(v.x,v.y,v.z),_.copy(v).normalize(),C.push(_.x,_.y,_.z),y.push(Z+w,1-F),R.push(m++)}g.push(R)}for(let S=0;S<r;S++)for(let R=0;R<t;R++){const F=g[S][R+1],D=g[S][R],I=g[S+1][R],L=g[S+1][R+1];(S!==0||u>0)&&b.push(F,D,L),(S!==r-1||d<Math.PI)&&b.push(D,I,L)}this.setIndex(b),this.setAttribute("position",new Dn(E,3)),this.setAttribute("normal",new Dn(C,3)),this.setAttribute("uv",new Dn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function xa(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(N0(o))o.isRenderTargetTexture?(wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(N0(o[0])){const l=[];for(let u=0,p=o.length;u<p;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Jn(s){const e={};for(let t=0;t<s.length;t++){const r=xa(s[t]);for(const o in r)e[o]=r[o]}return e}function N0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function iy(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Hm(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:zt.workingColorSpace}const ry={clone:xa,merge:Jn};var sy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ay=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends go{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sy,this.fragmentShader=ay,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xa(e.uniforms),this.uniformsGroups=iy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new Dt().setHex(o.value);break;case"v2":this.uniforms[r].value=new kt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new pe().fromArray(o.value);break;case"v4":this.uniforms[r].value=new fn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new Tt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new hn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class oy extends Ei{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ol extends go{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uf,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ly extends go{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=g_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cy extends go{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Gm extends Xn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Sd=new hn,P0=new pe,D0=new pe;class uy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new hn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ho,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new fn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;P0.setFromMatrixPosition(e.matrixWorld),t.position.copy(P0),D0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(D0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,o){Sd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(Sd,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,p=o?o.w/l.y:1,d=o?o.x/l.x:0,m=o?o.y/l.y:0;e.coordinateSystem===fo||e.reversedDepth?t.set(.5*u,0,0,.5*u+d,0,.5*p,0,.5*p+m,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+d,0,.5*p,0,.5*p+m,0,0,.5,.5,0,0,0,1),t.multiply(Sd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Bl=new pe,Hl=new va,Yi=new pe;class Vm extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Bl,Hl,Yi),Yi.x===1&&Yi.y===1&&Yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bl,Hl,Yi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Bl,Hl,Yi),Yi.x===1&&Yi.y===1&&Yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bl,Hl,Yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const qr=new pe,L0=new kt,I0=new kt;class zi extends Vm{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=df*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return df*2*Math.atan(Math.tan(Qu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qr.x,qr.y).multiplyScalar(-e/qr.z),qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(qr.x,qr.y).multiplyScalar(-e/qr.z)}getViewSize(e,t){return this.getViewBounds(e,L0,I0),t.subVectors(I0,L0)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qu*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/d,t-=u.offsetY*r/m,o*=u.width/d,r*=u.height/m}const p=this.filmOffset;p!==0&&(l+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Wm extends Vm{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,p=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,p-=g*this.view.offsetY,d=p-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,p,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class dy extends uy{constructor(){super(new Wm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fy extends Gm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xn.DEFAULT_UP),this.updateMatrix(),this.target=new Xn,this.shadow=new dy}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class hy extends Gm{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const oa=-90,la=1;class ff extends Xn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new zi(oa,la,e,t);o.layers=this.layers,this.add(o);const l=new zi(oa,la,e,t);l.layers=this.layers,this.add(l);const u=new zi(oa,la,e,t);u.layers=this.layers,this.add(u);const p=new zi(oa,la,e,t);p.layers=this.layers,this.add(p);const d=new zi(oa,la,e,t);d.layers=this.layers,this.add(d);const m=new zi(oa,la,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,p,d]=t;for(const m of t)this.remove(m);if(e===Gi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===fo)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,p,d,m,g]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),r.texture.mipmapsAutoUpdate=C,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(v,_,b),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class py extends zi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function k0(s,e,t,r){const o=my(r);switch(t){case Tm:return s*e;case Cm:return s*e/o.components*o.byteLength;case bf:return s*e/o.components*o.byteLength;case Ts:return s*e*2/o.components*o.byteLength;case wf:return s*e*2/o.components*o.byteLength;case Am:return s*e*3/o.components*o.byteLength;case Qi:return s*e*4/o.components*o.byteLength;case Mf:return s*e*4/o.components*o.byteLength;case jl:case $l:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xl:case Yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Id:case Ud:return Math.max(s,16)*Math.max(e,8)/4;case Ld:case kd:return Math.max(s,8)*Math.max(e,8)/2;case Fd:case zd:case Bd:case Hd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Od:case ec:case Gd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case jd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case $d:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Yd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case qd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Kd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Zd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Qd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ef:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case tf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case nf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case rf:case sf:case af:return Math.ceil(s/4)*Math.ceil(e/4)*16;case of:case lf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case tc:case cf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function my(s){switch(s){case mi:case bm:return{byteLength:1,components:1};case uo:case wm:case nr:return{byteLength:2,components:1};case yf:case Sf:return{byteLength:2,components:4};case tr:case _f:case Ji:return{byteLength:4,components:1};case Mm:case Em:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vf}}));typeof window<"u"&&(window.__THREE__?wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jm(){let s=null,e=!1,t=null,r=null;function o(l,u){r=s.requestAnimationFrame(o),t(l,u)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function gy(s){const e=new WeakMap;function t(p,d){const m=p.array,g=p.usage,v=m.byteLength,_=s.createBuffer();s.bindBuffer(d,_),s.bufferData(d,m,g),p.onUploadCallback();let b;if(m instanceof Float32Array)b=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)b=s.HALF_FLOAT;else if(m instanceof Uint16Array)p.isFloat16BufferAttribute?b=s.HALF_FLOAT:b=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)b=s.SHORT;else if(m instanceof Uint32Array)b=s.UNSIGNED_INT;else if(m instanceof Int32Array)b=s.INT;else if(m instanceof Int8Array)b=s.BYTE;else if(m instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:b,bytesPerElement:m.BYTES_PER_ELEMENT,version:p.version,size:v}}function r(p,d,m){const g=d.array,v=d.updateRanges;if(s.bindBuffer(m,p),v.length===0)s.bufferSubData(m,0,g);else{v.sort((b,E)=>b.start-E.start);let _=0;for(let b=1;b<v.length;b++){const E=v[_],C=v[b];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++_,v[_]=C)}v.length=_+1;for(let b=0,E=v.length;b<E;b++){const C=v[b];s.bufferSubData(m,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function l(p){p.isInterleavedBufferAttribute&&(p=p.data);const d=e.get(p);d&&(s.deleteBuffer(d.buffer),e.delete(p))}function u(p,d){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const g=e.get(p);(!g||g.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const m=e.get(p);if(m===void 0)e.set(p,t(p,d));else if(m.version<p.version){if(m.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,p,d),m.version=p.version}}return{get:o,remove:l,update:u}}var xy=`#ifdef USE_ALPHAHASH
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
#endif`,Ay=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cy=`vec3 objectNormal = vec3( normal );
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
#endif`,Fy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Wy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jy=`#ifdef USE_EMISSIVEMAP
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
#endif`,A1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C1=`#ifdef USE_METALNESSMAP
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
#endif`,F1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z1=`#ifndef FLAT_SHADED
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
#endif`,W1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,AS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CS=`uniform float scale;
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
}`,FS=`#define NORMAL
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
}`,zS=`#define PHONG
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
}`,WS=`uniform float size;
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
}`,jS=`uniform vec3 diffuse;
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
}`,Ct={alphahash_fragment:xy,alphahash_pars_fragment:vy,alphamap_fragment:_y,alphamap_pars_fragment:yy,alphatest_fragment:Sy,alphatest_pars_fragment:by,aomap_fragment:wy,aomap_pars_fragment:My,batching_pars_vertex:Ey,batching_vertex:Ty,begin_vertex:Ay,beginnormal_vertex:Cy,bsdfs:Ry,iridescence_fragment:Ny,bumpmap_pars_fragment:Py,clipping_planes_fragment:Dy,clipping_planes_pars_fragment:Ly,clipping_planes_pars_vertex:Iy,clipping_planes_vertex:ky,color_fragment:Uy,color_pars_fragment:Fy,color_pars_vertex:zy,color_vertex:Oy,common:By,defaultnormal_vertex:Hy,displacementmap_pars_vertex:Gy,displacementmap_vertex:Vy,emissivemap_fragment:Wy,emissivemap_pars_fragment:jy,colorspace_fragment:$y,colorspace_pars_fragment:Xy,envmap_fragment:Yy,envmap_common_pars_fragment:qy,envmap_pars_fragment:Ky,envmap_pars_vertex:Zy,envmap_physical_pars_fragment:l1,envmap_vertex:Jy,fog_vertex:Qy,fog_pars_vertex:e1,fog_fragment:t1,fog_pars_fragment:n1,gradientmap_pars_fragment:i1,lightmap_pars_fragment:r1,lights_lambert_fragment:s1,lights_lambert_pars_fragment:a1,lights_pars_begin:o1,lights_toon_fragment:c1,lights_toon_pars_fragment:u1,lights_phong_fragment:d1,lights_phong_pars_fragment:f1,lights_physical_fragment:h1,lights_physical_pars_fragment:p1,lights_fragment_begin:m1,lights_fragment_maps:g1,lights_fragment_end:x1,lightprobes_pars_fragment:v1,logdepthbuf_fragment:_1,logdepthbuf_pars_fragment:y1,logdepthbuf_pars_vertex:S1,logdepthbuf_vertex:b1,map_fragment:w1,map_pars_fragment:M1,map_particle_fragment:E1,map_particle_pars_fragment:T1,metalnessmap_fragment:A1,metalnessmap_pars_fragment:C1,morphinstance_vertex:R1,morphcolor_vertex:N1,morphnormal_vertex:P1,morphtarget_pars_vertex:D1,morphtarget_vertex:L1,normal_fragment_begin:I1,normal_fragment_maps:k1,normal_pars_fragment:U1,normal_pars_vertex:F1,normal_vertex:z1,normalmap_pars_fragment:O1,clearcoat_normal_fragment_begin:B1,clearcoat_normal_fragment_maps:H1,clearcoat_pars_fragment:G1,iridescence_pars_fragment:V1,opaque_fragment:W1,packing:j1,premultiplied_alpha_fragment:$1,project_vertex:X1,dithering_fragment:Y1,dithering_pars_fragment:q1,roughnessmap_fragment:K1,roughnessmap_pars_fragment:Z1,shadowmap_pars_fragment:J1,shadowmap_pars_vertex:Q1,shadowmap_vertex:eS,shadowmask_pars_fragment:tS,skinbase_vertex:nS,skinning_pars_vertex:iS,skinning_vertex:rS,skinnormal_vertex:sS,specularmap_fragment:aS,specularmap_pars_fragment:oS,tonemapping_fragment:lS,tonemapping_pars_fragment:cS,transmission_fragment:uS,transmission_pars_fragment:dS,uv_pars_fragment:fS,uv_pars_vertex:hS,uv_vertex:pS,worldpos_vertex:mS,background_vert:gS,background_frag:xS,backgroundCube_vert:vS,backgroundCube_frag:_S,cube_vert:yS,cube_frag:SS,depth_vert:bS,depth_frag:wS,distance_vert:MS,distance_frag:ES,equirect_vert:TS,equirect_frag:AS,linedashed_vert:CS,linedashed_frag:RS,meshbasic_vert:NS,meshbasic_frag:PS,meshlambert_vert:DS,meshlambert_frag:LS,meshmatcap_vert:IS,meshmatcap_frag:kS,meshnormal_vert:US,meshnormal_frag:FS,meshphong_vert:zS,meshphong_frag:OS,meshphysical_vert:BS,meshphysical_frag:HS,meshtoon_vert:GS,meshtoon_frag:VS,points_vert:WS,points_frag:jS,shadow_vert:$S,shadow_frag:XS,sprite_vert:YS,sprite_frag:qS},Ze={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Tt}},envmap:{envMap:{value:null},envMapRotation:{value:new Tt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Tt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}}},Ki={basic:{uniforms:Jn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:Jn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new Dt(0)},envMapIntensity:{value:1}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:Jn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:Jn([Ze.common,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.roughnessmap,Ze.metalnessmap,Ze.fog,Ze.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:Jn([Ze.common,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.gradientmap,Ze.fog,Ze.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:Jn([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:Jn([Ze.points,Ze.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:Jn([Ze.common,Ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:Jn([Ze.common,Ze.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:Jn([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:Jn([Ze.sprite,Ze.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Tt}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distance:{uniforms:Jn([Ze.common,Ze.displacementmap,{referencePosition:{value:new pe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distance_vert,fragmentShader:Ct.distance_frag},shadow:{uniforms:Jn([Ze.lights,Ze.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};Ki.physical={uniforms:Jn([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Tt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Tt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Tt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Tt},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Tt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Tt},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Tt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Tt}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};const Gl={r:0,b:0,g:0},KS=new hn,$m=new Tt;$m.set(-1,0,0,0,1,0,0,0,1);function ZS(s,e,t,r,o,l){const u=new Dt(0);let p=o===!0?0:1,d,m,g=null,v=0,_=null;function b(R){let F=R.isScene===!0?R.background:null;if(F&&F.isTexture){const D=R.backgroundBlurriness>0;F=e.get(F,D)}return F}function E(R){let F=!1;const D=b(R);D===null?y(u,p):D&&D.isColor&&(y(D,1),F=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,l):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||F)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(R,F){const D=b(F);D&&D.isCubeTexture?(m===void 0&&(m=new Sn(new xo(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:xa(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(I,L,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=D,m.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(KS.makeRotationFromEuler(F.backgroundRotation)).transpose(),D.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply($m),m.material.toneMapped=zt.getTransfer(D.colorSpace)!==qt,(g!==D||v!==D.version||_!==s.toneMapping)&&(m.material.needsUpdate=!0,g=D,v=D.version,_=s.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null)):D&&D.isTexture&&(d===void 0&&(d=new Sn(new vo(2,2),new Ei({name:"BackgroundMaterial",uniforms:xa(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:Es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=D,d.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,d.material.toneMapped=zt.getTransfer(D.colorSpace)!==qt,D.matrixAutoUpdate===!0&&D.updateMatrix(),d.material.uniforms.uvTransform.value.copy(D.matrix),(g!==D||v!==D.version||_!==s.toneMapping)&&(d.material.needsUpdate=!0,g=D,v=D.version,_=s.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null))}function y(R,F){R.getRGB(Gl,Hm(s)),t.buffers.color.setClear(Gl.r,Gl.g,Gl.b,F,l)}function S(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(R,F=1){u.set(R),p=F,y(u,p)},getClearAlpha:function(){return p},setClearAlpha:function(R){p=R,y(u,p)},render:E,addToRenderList:C,dispose:S}}function JS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=_(null);let l=o,u=!1;function p($,z,B,W,j){let ce=!1;const Q=v($,W,B,z);l!==Q&&(l=Q,m(l.object)),ce=b($,W,B,j),ce&&E($,W,B,j),j!==null&&e.update(j,s.ELEMENT_ARRAY_BUFFER),(ce||u)&&(u=!1,D($,z,B,W),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function d(){return s.createVertexArray()}function m($){return s.bindVertexArray($)}function g($){return s.deleteVertexArray($)}function v($,z,B,W){const j=W.wireframe===!0;let ce=r[z.id];ce===void 0&&(ce={},r[z.id]=ce);const Q=$.isInstancedMesh===!0?$.id:0;let Y=ce[Q];Y===void 0&&(Y={},ce[Q]=Y);let X=Y[B.id];X===void 0&&(X={},Y[B.id]=X);let H=X[j];return H===void 0&&(H=_(d()),X[j]=H),H}function _($){const z=[],B=[],W=[];for(let j=0;j<t;j++)z[j]=0,B[j]=0,W[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:B,attributeDivisors:W,object:$,attributes:{},index:null}}function b($,z,B,W){const j=l.attributes,ce=z.attributes;let Q=0;const Y=B.getAttributes();for(const X in Y)if(Y[X].location>=0){const P=j[X];let q=ce[X];if(q===void 0&&(X==="instanceMatrix"&&$.instanceMatrix&&(q=$.instanceMatrix),X==="instanceColor"&&$.instanceColor&&(q=$.instanceColor)),P===void 0||P.attribute!==q||q&&P.data!==q.data)return!0;Q++}return l.attributesNum!==Q||l.index!==W}function E($,z,B,W){const j={},ce=z.attributes;let Q=0;const Y=B.getAttributes();for(const X in Y)if(Y[X].location>=0){let P=ce[X];P===void 0&&(X==="instanceMatrix"&&$.instanceMatrix&&(P=$.instanceMatrix),X==="instanceColor"&&$.instanceColor&&(P=$.instanceColor));const q={};q.attribute=P,P&&P.data&&(q.data=P.data),j[X]=q,Q++}l.attributes=j,l.attributesNum=Q,l.index=W}function C(){const $=l.newAttributes;for(let z=0,B=$.length;z<B;z++)$[z]=0}function y($){S($,0)}function S($,z){const B=l.newAttributes,W=l.enabledAttributes,j=l.attributeDivisors;B[$]=1,W[$]===0&&(s.enableVertexAttribArray($),W[$]=1),j[$]!==z&&(s.vertexAttribDivisor($,z),j[$]=z)}function R(){const $=l.newAttributes,z=l.enabledAttributes;for(let B=0,W=z.length;B<W;B++)z[B]!==$[B]&&(s.disableVertexAttribArray(B),z[B]=0)}function F($,z,B,W,j,ce,Q){Q===!0?s.vertexAttribIPointer($,z,B,j,ce):s.vertexAttribPointer($,z,B,W,j,ce)}function D($,z,B,W){C();const j=W.attributes,ce=B.getAttributes(),Q=z.defaultAttributeValues;for(const Y in ce){const X=ce[Y];if(X.location>=0){let H=j[Y];if(H===void 0&&(Y==="instanceMatrix"&&$.instanceMatrix&&(H=$.instanceMatrix),Y==="instanceColor"&&$.instanceColor&&(H=$.instanceColor)),H!==void 0){const P=H.normalized,q=H.itemSize,Ee=e.get(H);if(Ee===void 0)continue;const ee=Ee.buffer,le=Ee.type,be=Ee.bytesPerElement,Ae=le===s.INT||le===s.UNSIGNED_INT||H.gpuType===_f;if(H.isInterleavedBufferAttribute){const we=H.data,ze=we.isInterleavedBuffer===!0?we.stride:we.itemSize,qe=H.offset;if(we.isInstancedInterleavedBuffer||we.isInstancedBufferAttribute){for(let ke=0;ke<X.locationSize;ke++)S(X.location+ke,we.meshPerAttribute);$.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let ke=0;ke<X.locationSize;ke++)y(X.location+ke);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let ke=0;ke<X.locationSize;ke++)F(X.location+ke,q/X.locationSize,le,P,ze*be,(qe+q/X.locationSize*ke)*be,Ae)}else{if(H.isInstancedBufferAttribute){for(let we=0;we<X.locationSize;we++)S(X.location+we,H.meshPerAttribute);$.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let we=0;we<X.locationSize;we++)y(X.location+we);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let we=0;we<X.locationSize;we++)F(X.location+we,q/X.locationSize,le,P,q*be,q/X.locationSize*we*be,Ae)}}else if(Q!==void 0){const P=Q[Y];if(P!==void 0)switch(P.length){case 2:s.vertexAttrib2fv(X.location,P);break;case 3:s.vertexAttrib3fv(X.location,P);break;case 4:s.vertexAttrib4fv(X.location,P);break;default:s.vertexAttrib1fv(X.location,P)}}}}R()}function I(){Z();for(const $ in r){const z=r[$];for(const B in z){const W=z[B];for(const j in W){const ce=W[j];for(const Q in ce)g(ce[Q].object),delete ce[Q];delete W[j]}}delete r[$]}}function L($){if(r[$.id]===void 0)return;const z=r[$.id];for(const B in z){const W=z[B];for(const j in W){const ce=W[j];for(const Q in ce)g(ce[Q].object),delete ce[Q];delete W[j]}}delete r[$.id]}function w($){for(const z in r){const B=r[z];for(const W in B){const j=B[W];if(j[$.id]===void 0)continue;const ce=j[$.id];for(const Q in ce)g(ce[Q].object),delete ce[Q];delete j[$.id]}}}function N($){for(const z in r){const B=r[z],W=$.isInstancedMesh===!0?$.id:0,j=B[W];if(j!==void 0){for(const ce in j){const Q=j[ce];for(const Y in Q)g(Q[Y].object),delete Q[Y];delete j[ce]}delete B[W],Object.keys(B).length===0&&delete r[z]}}}function Z(){V(),u=!0,l!==o&&(l=o,m(l.object))}function V(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:p,reset:Z,resetDefaultState:V,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfObject:N,releaseStatesOfProgram:w,initAttributes:C,enableAttribute:y,disableUnusedAttributes:R}}function QS(s,e,t){let r;function o(d){r=d}function l(d,m){s.drawArrays(r,d,m),t.update(m,r,1)}function u(d,m,g){g!==0&&(s.drawArraysInstanced(r,d,m,g),t.update(m,r,g))}function p(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,m,0,g);let _=0;for(let b=0;b<g;b++)_+=m[b];t.update(_,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=p}function eb(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(w){return!(w!==Qi&&r.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(w){const N=w===nr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==mi&&w!==Ji&&!N&&r.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function d(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const g=d(m);g!==m&&(wt("WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),_=t.logarithmicDepthBuffer===!0&&v===!1;t.reversedDepthBuffer===!0&&v===!1&&wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&v===!0&&wt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const b=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),R=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),F=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:p,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:b,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:R,maxVaryings:F,maxFragmentUniforms:D,maxSamples:I,samples:L}}function tb(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Zr,p=new Tt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const b=v.length!==0||_||r!==0||o;return o=_,r=v.length,b},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,_){t=g(v,_,0)},this.setState=function(v,_,b){const E=v.clippingPlanes,C=v.clipIntersection,y=v.clipShadows,S=s.get(v);if(!o||E===null||E.length===0||l&&!y)l?g(null):m();else{const R=l?0:r,F=R*4;let D=S.clippingState||null;d.value=D,D=g(E,_,F,b);for(let I=0;I!==F;++I)D[I]=t[I];S.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=R}};function m(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,_,b,E){const C=v!==null?v.length:0;let y=null;if(C!==0){if(y=d.value,E!==!0||y===null){const S=b+C*4,R=_.matrixWorldInverse;p.getNormalMatrix(R),(y===null||y.length<S)&&(y=new Float32Array(S));for(let F=0,D=b;F!==C;++F,D+=4)u.copy(v[F]).applyMatrix4(R,p),u.normal.toArray(y,D),y[D+3]=u.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}class Df extends er{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new zm(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new xo(5,5,5),l=new Ei({name:"CubemapFromEquirect",uniforms:xa(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Un,blending:da});l.uniforms.tEquirect.value=t;const u=new Sn(o,l),p=t.minFilter;return t.minFilter===Qr&&(t.minFilter=ai),new ff(1,10,this).update(e,u),t.minFilter=p,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}const U0=256,nb=3,ib=20,Xm=256,Ym=16,rb=3,sb=new pe,ab=new Dt;class sc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ff(1,10,null),this._boxMesh=new Sn(new xo(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:p=sb}=l,d=this._renderer;this._setSize(u);const m=this._allocateTarget(),g=this._getSourceTarget(!0);t>0&&(g.texture.mipmapsAutoUpdate=!1);const v=d.autoClear,_=d.autoClearColor,b=d.autoClearDepth,E=d.autoClearStencil,C=e.background;d.autoClear=!0,d.autoClearColor=!0,d.autoClearDepth=!0,d.autoClearStencil=!0,C===null&&(e.background=d.getClearColor(ab));const y=new ff(r,o,g);return y.position.copy(p),y.update(d,e),d.autoClear=v,d.autoClearColor=_,d.autoClearDepth=b,d.autoClearStencil=E,e.background=C,t>0&&(g.texture.mipmapsAutoUpdate=!0,this._blur(m,t)),this._applyPMREM(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=O0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=z0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(U0,N_(e))}_fromTexture(e,t){e.mapping===ha||e.mapping===co?this._setSize(e.image.length===0?U0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=F0(e,!1,!1),r=Math.log2(e)-nb;for(let o=0;o<=r;o++)t.texture.mipmaps.push({width:e>>o,height:e>>o});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=F0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const o=this._boxMesh,l=this._cubeCamera;o.material=r,l.renderTarget=e,l.activeMipmapLevel=t;const u=e.width>>t;e.viewport.set(0,0,u,u),l.update(this._renderer,o),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ha||e.mapping===co?(this._cubemapMaterial===null&&(this._cubemapMaterial=O0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=z0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=ob(),this._integrationMaterial=lb());const t=this._cubeSize,r=e.texture.mipmaps.length-1,o=this._ggxMaterial.uniforms;o.envMap.value=this._sourceTarget.texture;const l=this._integrationMaterial.uniforms;l.envMap.value=this._sourceTarget.texture,l.sourceLod.value=Math.log2(t/Ym);for(let u=0;u<=r;u++){const p=sc.lodToRoughness(u,r);if(u>r-rb)l.roughness.value=p,this._renderCube(e,u,this._integrationMaterial);else{const d=p>0?Math.log2(t)+.5*Math.log2(6/(Xm*Math.pow(p,4)))+.5:0;o.roughness.value=p,o.lodBias.value=d,this._renderCube(e,u,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=cb());const r=this._blurMaterial,o=r.uniforms,l=this._sourceTarget;o.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,o.envMap.value=l.texture,this._renderCube(e,0,r),o.envMap.value=e.texture,this._renderCube(l,0,r)}}function F0(s,e,t){return new Df(s,{minFilter:Qr,generateMipmaps:e,type:nr,colorSpace:nc,depthBuffer:t})}function _o(s,e,t){return new Ei({name:s,uniforms:e,vertexShader:Ct.cube_vert,fragmentShader:t,side:Un,blending:da,depthTest:!1,depthWrite:!1})}function ob(){return _o("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Xm}u

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
	`)}function lb(){return _o("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ym}},`

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
	`)}function cb(){return _o("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

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
	`)}function z0(){return _o("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function O0(){return _o("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ub(s){let e=new WeakMap,t=new WeakMap,r=null;function o(_,b=!1){return _==null?null:b?u(_):l(_)}function l(_){if(_&&_.isTexture){const b=_.mapping;if(b===qu||b===Ku)if(e.has(_)){const E=e.get(_).texture;return p(E,_.mapping)}else{const E=_.image;if(E&&E.height>0){const C=new Df(E.height);return C.fromEquirectangularTexture(s,_),e.set(_,C),_.addEventListener("dispose",m),p(C.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture&&_.isPMREMTexture!==!0){const b=_.mapping,E=b===qu||b===Ku,C=b===ha||b===co;if(E||C){let y=t.get(_);const S=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==S)return r===null&&(r=new sc(s)),y=E?r.fromEquirectangular(_,y):r.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,t.set(_,y),y.texture;if(y!==void 0)return y.texture;{const R=_.image;return E&&R&&R.height>0||C&&R&&d(R)?(r===null&&(r=new sc(s)),y=E?r.fromEquirectangular(_):r.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,t.set(_,y),_.addEventListener("dispose",g),y.texture):null}}}return _}function p(_,b){return b===qu?_.mapping=ha:b===Ku&&(_.mapping=co),_}function d(_){let b=0;const E=6;for(let C=0;C<E;C++)_[C]!==void 0&&b++;return b===E}function m(_){const b=_.target;b.removeEventListener("dispose",m);const E=e.get(b);E!==void 0&&(e.delete(b),E.dispose())}function g(_){const b=_.target;b.removeEventListener("dispose",g);const E=t.get(b);E!==void 0&&(t.delete(b),E.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function db(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&ql("WebGLRenderer: "+r+" extension not supported."),o}}}function fb(s,e,t,r){const o={},l=new WeakMap,u=new FinalizationRegistry(E=>delete o[E]);function p(E){d(E.target)}function d(E){E.index!==null&&e.remove(E.index);for(const y in E.attributes)e.remove(E.attributes[y]);E.removeEventListener("dispose",p),delete o[E.id],u.unregister(E);const C=l.get(E);C&&(e.remove(C),l.delete(E)),r.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,t.memory.geometries--}function m(E,C){return o[C.id]!==void 0||(C.addEventListener("dispose",p),o[C.id]=new WeakRef(C),u.register(C,C.id,C),t.memory.geometries++),C}function g(E){const C=E.attributes;for(const y in C)e.update(C[y],s.ARRAY_BUFFER)}function v(E){const C=E.index,y=E.attributes.position;let S=0;if(y===void 0)return;const R=C!==null?C.array.length:y.array.length/3-1,F=y.count>=65535?Fm:Um,D=new F(Math.ceil(R/3)*6,1),I=D.array;if(C!==null){const w=C.array;S=C.version;for(let N=0,Z=0;N<R;N+=3){const V=w[N+0],$=w[N+1],z=w[N+2];I[Z++]=V,I[Z++]=$,I[Z++]=$,I[Z++]=z,I[Z++]=z,I[Z++]=V}}else{S=y.version;for(let w=0,N=0;w<R;w+=3){const Z=w+0,V=w+1,$=w+2;I[N++]=Z,I[N++]=V,I[N++]=V,I[N++]=$,I[N++]=$,I[N++]=Z}}D.version=S;const L=l.get(E);L&&e.remove(L),l.set(E,D)}function _(E){const C=l.get(E);if(C){const y=E.index;y!==null&&C.version<y.version&&v(E)}else v(E);return l.get(E)}function b(){for(const E in o){const C=o[E].deref();C!==void 0&&d(C)}}return{get:m,update:g,getWireframeAttribute:_,dispose:b}}function hb(s,e,t){let r;function o(v){r=v}let l,u;function p(v){l=v.type,u=v.bytesPerElement}function d(v,_){s.drawElements(r,_,l,v*u),t.update(_,r,1)}function m(v,_,b){b!==0&&(s.drawElementsInstanced(r,_,l,v*u,b),t.update(_,r,b))}function g(v,_,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,l,v,0,b);let C=0;for(let y=0;y<b;y++)C+=_[y];t.update(C,r,1)}this.setMode=o,this.setIndex=p,this.render=d,this.renderInstances=m,this.renderMultiDraw=g}function pb(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,p){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=p*(l/3);break;case s.LINES:t.lines+=p*(l/2);break;case s.LINE_STRIP:t.lines+=p*(l-1);break;case s.LINE_LOOP:t.lines+=p*l;break;case s.POINTS:t.points+=p*l;break;default:Xt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function mb(s,e,t){const r=new WeakMap,o=new fn;function l(u,p,d){const m=u.morphTargetInfluences,g=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=g!==void 0?g.length:0;let _=r.get(p);if(_===void 0||_.count!==v){let V=function(){N.dispose(),r.delete(p),p.removeEventListener("dispose",V)};var b=V;_!==void 0&&_.texture.dispose();const E=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,S=p.morphAttributes.position||[],R=p.morphAttributes.normal||[],F=p.morphAttributes.color||[];let D=0;E===!0&&(D=1),C===!0&&(D=2),y===!0&&(D=3);let I=p.attributes.position.count*D,L=1;I>e.maxTextureSize&&(L=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const w=new Float32Array(I*L*4*v),N=new Lm(w,I,L,v);N.type=Ji,N.needsUpdate=!0;const Z=D*4;for(let $=0;$<v;$++){const z=S[$],B=R[$],W=F[$],j=I*L*4*$;for(let ce=0;ce<z.count;ce++){const Q=ce*Z;E===!0&&(o.fromBufferAttribute(z,ce),w[j+Q+0]=o.x,w[j+Q+1]=o.y,w[j+Q+2]=o.z,w[j+Q+3]=0),C===!0&&(o.fromBufferAttribute(B,ce),w[j+Q+4]=o.x,w[j+Q+5]=o.y,w[j+Q+6]=o.z,w[j+Q+7]=0),y===!0&&(o.fromBufferAttribute(W,ce),w[j+Q+8]=o.x,w[j+Q+9]=o.y,w[j+Q+10]=o.z,w[j+Q+11]=W.itemSize===4?o.w:1)}}_={count:v,texture:N,size:new kt(I,L)},r.set(p,_),p.addEventListener("dispose",V)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const C=p.morphTargetsRelative?1:1-E;d.getUniforms().setValue(s,"morphTargetBaseInfluence",C),d.getUniforms().setValue(s,"morphTargetInfluences",m)}d.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:l}}function gb(s,e,t,r,o){let l=new WeakMap;function u(m){const g=o.render.frame,v=m.geometry,_=e.get(m,v);if(l.get(_)!==g&&(e.update(_),l.set(_,g)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==g&&(t.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,g))),m.isSkinnedMesh){const b=m.skeleton;l.get(b)!==g&&(b.update(),l.set(b,g))}return _}function p(){l=new WeakMap}function d(m){const g=m.target;g.removeEventListener("dispose",d),r.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:u,dispose:p}}const xb={[pm]:"LINEAR_TONE_MAPPING",[mm]:"REINHARD_TONE_MAPPING",[gm]:"CINEON_TONE_MAPPING",[xm]:"ACES_FILMIC_TONE_MAPPING",[_m]:"AGX_TONE_MAPPING",[ym]:"NEUTRAL_TONE_MAPPING",[vm]:"CUSTOM_TONE_MAPPING"};function vb(s,e,t,r,o,l){const u=new er(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let p=null,d=null,m=null;const g=new ir;g.setAttribute("position",new Dn([-1,3,0,-1,-1,0,3,-1,0],3)),g.setAttribute("uv",new Dn([0,2,0,0,2,0],2));const v=new oy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new Sn(g,v),b=new Wm(-1,1,1,-1,0,1);let E=null,C=null,y=!1,S,R=null,F=[],D=!1;this.setSize=function(I,L){u.setSize(I,L),p!==null&&p.setSize(I,L),d!==null&&d.setSize(I,L);for(let w=0;w<F.length;w++){const N=F[w];N.setSize&&N.setSize(I,L)}},this.setEffects=function(I){F=I,D=F.length>0&&F[0].isRenderPass===!0;const L=u.width,w=u.height;F.length>0&&p===null&&(p=new er(L,w,{type:nr,depthBuffer:!1,stencilBuffer:!1}),d=new er(L,w,{type:nr,depthBuffer:!1,stencilBuffer:!1}));const N=o===!0&&F.some(Z=>Z.needsDepthTexture===!0);N!==(u.depthTexture!==null)&&(N===!0&&m===null&&(m=new ga(L,w),l===!0&&(m.format=es,m.type=ma)),u.dispose(),u.depthTexture=N?m:null,u.resolveDepthBuffer=N,u.storeMultisampledDepthBuffer=N);for(let Z=0;Z<F.length;Z++){const V=F[Z];V.setSize&&V.setSize(L,w),N&&V.needsDepthTexture===!0&&V.setDepthTexture&&V.setDepthTexture(m)}},this.begin=function(I,L){if(y||I.toneMapping===Er&&F.length===0)return!1;if(R=L,L!==null){const w=L.width,N=L.height;(u.width!==w||u.height!==N)&&this.setSize(w,N)}return D===!1&&I.setRenderTarget(u),S=I.toneMapping,I.toneMapping=Er,!0},this.hasRenderPass=function(){return D},this.end=function(I,L){I.toneMapping=S,y=!0;let w=u,N=p;for(let Z=0;Z<F.length;Z++){const V=F[Z];V.enabled!==!1&&(V.render(I,N,w,L),V.needsSwap!==!1&&(w=N,N=N===p?d:p))}if(E!==I.outputColorSpace||C!==I.toneMapping){E=I.outputColorSpace,C=I.toneMapping,v.defines={},zt.getTransfer(E)===qt&&(v.defines.SRGB_TRANSFER="");const Z=xb[C];Z&&(v.defines[Z]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=w.texture,I.setRenderTarget(R),I.render(_,b),R=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){u.dispose(),p!==null&&p.dispose(),d!==null&&d.dispose(),g.dispose(),v.dispose()}}const qm=new $n,Km=new ga(1,1),Zm=new Om(1),Jm=new Lm,Qm=new z_,eg=new zm,B0=[],H0=[],G0=new Float32Array(16),V0=new Float32Array(9),W0=new Float32Array(4);function _a(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=B0[o];if(l===void 0&&(l=new Float32Array(o),B0[o]=l),e!==0){r.toArray(l,0);for(let u=1,p=0;u!==e;++u)p+=t,s[u].toArray(l,p)}return l}function En(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Tn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function fc(s,e){let t=H0[e];t===void 0&&(t=new Int32Array(e),H0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function _b(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function yb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;s.uniform2fv(this.addr,e),Tn(t,e)}}function Sb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(En(t,e))return;s.uniform3fv(this.addr,e),Tn(t,e)}}function bb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;s.uniform4fv(this.addr,e),Tn(t,e)}}function wb(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(En(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Tn(t,e)}else{if(En(t,r))return;W0.set(r),s.uniformMatrix2fv(this.addr,!1,W0),Tn(t,r)}}function Mb(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(En(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Tn(t,e)}else{if(En(t,r))return;V0.set(r),s.uniformMatrix3fv(this.addr,!1,V0),Tn(t,r)}}function Eb(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(En(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Tn(t,e)}else{if(En(t,r))return;G0.set(r),s.uniformMatrix4fv(this.addr,!1,G0),Tn(t,r)}}function Tb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Ab(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;s.uniform2iv(this.addr,e),Tn(t,e)}}function Cb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(En(t,e))return;s.uniform3iv(this.addr,e),Tn(t,e)}}function Rb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;s.uniform4iv(this.addr,e),Tn(t,e)}}function Nb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Pb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(En(t,e))return;s.uniform2uiv(this.addr,e),Tn(t,e)}}function Db(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(En(t,e))return;s.uniform3uiv(this.addr,e),Tn(t,e)}}function Lb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(En(t,e))return;s.uniform4uiv(this.addr,e),Tn(t,e)}}function hc(s){return s.version===0&&(s.compareFunction=Pm,s.needsUpdate=!0),s}function Ib(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?l=hc(Km):l=qm,t.setTexture2D(e||l,o)}function kb(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Qm,o)}function Ub(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_CUBE_SHADOW?l=hc(Zm):l=eg,t.setTextureCube(e||l,o)}function Fb(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Jm,o)}function zb(s){switch(s){case 5126:return _b;case 35664:return yb;case 35665:return Sb;case 35666:return bb;case 35674:return wb;case 35675:return Mb;case 35676:return Eb;case 5124:case 35670:return Tb;case 35667:case 35671:return Ab;case 35668:case 35672:return Cb;case 35669:case 35673:return Rb;case 5125:return Nb;case 36294:return Pb;case 36295:return Db;case 36296:return Lb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ib;case 35679:case 36299:case 36307:return kb;case 35680:case 36300:case 36308:case 36293:return Ub;case 36289:case 36303:case 36311:case 36292:return Fb}}function Ob(s,e){s.uniform1fv(this.addr,e)}function Bb(s,e){const t=_a(e,this.size,2);s.uniform2fv(this.addr,t)}function Hb(s,e){const t=_a(e,this.size,3);s.uniform3fv(this.addr,t)}function Gb(s,e){const t=_a(e,this.size,4);s.uniform4fv(this.addr,t)}function Vb(s,e){const t=_a(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Wb(s,e){const t=_a(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function jb(s,e){const t=_a(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function $b(s,e){s.uniform1iv(this.addr,e)}function Xb(s,e){s.uniform2iv(this.addr,e)}function Yb(s,e){s.uniform3iv(this.addr,e)}function qb(s,e){s.uniform4iv(this.addr,e)}function Kb(s,e){s.uniform1uiv(this.addr,e)}function Zb(s,e){s.uniform2uiv(this.addr,e)}function Jb(s,e){s.uniform3uiv(this.addr,e)}function Qb(s,e){s.uniform4uiv(this.addr,e)}function ew(s,e,t){const r=this.cache,o=e.length,l=fc(t,o);En(r,l)||(s.uniform1iv(this.addr,l),Tn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=hc(Km):u=qm;for(let p=0;p!==o;++p)t.setTexture2D(e[p]||u,l[p])}function tw(s,e,t){const r=this.cache,o=e.length,l=fc(t,o);En(r,l)||(s.uniform1iv(this.addr,l),Tn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Qm,l[u])}function nw(s,e,t){const r=this.cache,o=e.length,l=fc(t,o);En(r,l)||(s.uniform1iv(this.addr,l),Tn(r,l));let u;this.type===s.SAMPLER_CUBE_SHADOW?u=hc(Zm):u=eg;for(let p=0;p!==o;++p)t.setTextureCube(e[p]||u,l[p])}function iw(s,e,t){const r=this.cache,o=e.length,l=fc(t,o);En(r,l)||(s.uniform1iv(this.addr,l),Tn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Jm,l[u])}function rw(s){switch(s){case 5126:return Ob;case 35664:return Bb;case 35665:return Hb;case 35666:return Gb;case 35674:return Vb;case 35675:return Wb;case 35676:return jb;case 5124:case 35670:return $b;case 35667:case 35671:return Xb;case 35668:case 35672:return Yb;case 35669:case 35673:return qb;case 5125:return Kb;case 36294:return Zb;case 36295:return Jb;case 36296:return Qb;case 35678:case 36198:case 36298:case 36306:case 35682:return ew;case 35679:case 36299:case 36307:return tw;case 35680:case 36300:case 36308:case 36293:return nw;case 36289:case 36303:case 36311:case 36292:return iw}}class sw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=zb(t.type)}}class aw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rw(t.type)}}class ow{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const p=o[l];p.setValue(e,t[p.id],r)}}}const bd=/(\w+)(\])?(\[|\.)?/g;function j0(s,e){s.seq.push(e),s.map[e.id]=e}function lw(s,e,t){const r=s.name,o=r.length;for(bd.lastIndex=0;;){const l=bd.exec(r),u=bd.lastIndex;let p=l[1];const d=l[2]==="]",m=l[3];if(d&&(p=p|0),m===void 0||m==="["&&u+2===o){j0(t,m===void 0?new sw(p,s,e):new aw(p,s,e));break}else{let v=t.map[p];v===void 0&&(v=new ow(p),j0(t,v)),t=v}}}class Zl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const p=e.getActiveUniform(t,u),d=e.getUniformLocation(t,p.name);lw(p,d,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const p=t[l],d=r[p.id];d.needsUpdate!==!1&&p.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function $0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const cw=37297;let uw=0;function dw(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const p=u+1;r.push(`${p===e?">":" "} ${p}: ${t[u]}`)}return r.join(`
`)}const X0=new Tt;function fw(s){zt._getMatrix(X0,zt.workingColorSpace,s);const e=`mat3( ${X0.elements.map(t=>t.toFixed(4))} )`;switch(zt.getTransfer(s)){case ic:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return wt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Y0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const p=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+dw(s.getShaderSource(e),p)}else return l}function hw(s,e){const t=fw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const pw={[pm]:"Linear",[mm]:"Reinhard",[gm]:"Cineon",[xm]:"ACESFilmic",[_m]:"AgX",[ym]:"Neutral",[vm]:"Custom"};function mw(s,e){const t=pw[e];return t===void 0?(wt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vl=new pe;function gw(){zt.getLuminanceCoefficients(Vl);const s=Vl.x.toFixed(4),e=Vl.y.toFixed(4),t=Vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function vw(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function _w(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let p=1;l.type===s.FLOAT_MAT2&&(p=2),l.type===s.FLOAT_MAT3&&(p=3),l.type===s.FLOAT_MAT4&&(p=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:p}}return t}function so(s){return s!==""}function q0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function K0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yw=/^[ \t]*#include +<([\w\d./]+)>/gm;function hf(s){return s.replace(yw,Sw)}function Sw(s,e){const t=Ct[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return hf(t)}const bw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Z0(s){return s.replace(bw,ww)}function ww(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function J0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const Mw={[Wl]:"SHADOWMAP_TYPE_PCF",[io]:"SHADOWMAP_TYPE_VSM"};function Ew(s){return Mw[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Tw={[co]:"ENVMAP_MODE_REFRACTION"};function Aw(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Tw[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Cw={[hm]:"ENVMAP_BLENDING_MULTIPLY",[h_]:"ENVMAP_BLENDING_MIX",[p_]:"ENVMAP_BLENDING_ADD"};function Rw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Cw[s.combine]||"ENVMAP_BLENDING_NONE"}function Nw(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,p=t.fragmentShader;const d=Ew(t),m=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",g=Aw(t),v=Rw(t),_=xw(t),b=vw(l),E=o.createProgram();let C,y,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(C=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(so).join(`
`),C.length>0&&(C+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(so).join(`
`),y.length>0&&(y+=`
`)):(C=[J0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),y=[J0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Er?"#define TONE_MAPPING":"",t.toneMapping!==Er?Ct.tonemapping_pars_fragment:"",t.toneMapping!==Er?mw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,hw("linearToOutputTexel",t.outputColorSpace),gw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(so).join(`
`)),u=hf(u),u=q0(u,t),u=K0(u,t),p=hf(p),p=q0(p,t),p=K0(p,t),u=Z0(u),p=Z0(p),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,C=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+C,y=["#define varying in",t.glslVersion===f0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===f0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const R=S+C+u,F=S+y+p,D=$0(o,o.VERTEX_SHADER,R),I=$0(o,o.FRAGMENT_SHADER,F);o.attachShader(E,D),o.attachShader(E,I),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function L(V){if(s.debug.checkShaderErrors){const $=o.getProgramInfoLog(E)||"",z=o.getShaderInfoLog(D)||"",B=o.getShaderInfoLog(I)||"",W=$.trim(),j=z.trim(),ce=B.trim();let Q=!0,Y=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,E,D,I);else{const X=Y0(o,D,"vertex"),H=Y0(o,I,"fragment");Xt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+W+`
`+X+`
`+H)}else W!==""?wt("WebGLProgram: Program Info Log:",W):(j===""||ce==="")&&(Y=!1);Y&&(V.diagnostics={runnable:Q,programLog:W,vertexShader:{log:j,prefix:C},fragmentShader:{log:ce,prefix:y}})}o.deleteShader(D),o.deleteShader(I),w=new Zl(o,E),N=_w(o,E)}let w;this.getUniforms=function(){return w===void 0&&L(this),w};let N;this.getAttributes=function(){return N===void 0&&L(this),N};let Z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=o.getProgramParameter(E,cw)),Z},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uw++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=D,this.fragmentShader=I,this}let Pw=0;class Dw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Lw(e),t.set(e,r)),r}}class Lw{constructor(e){this.id=Pw++,this.code=e,this.usedTimes=0}}function Iw(s){return s===Ts||s===ec||s===tc}function kw(s,e,t,r,o,l){const u=new Im,p=new Dw,d=new Set,m=[],g=new Map,v=r.logarithmicDepthBuffer,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(w){return d.add(w),w===0?"uv":`uv${w}`}function E(w,N,Z,V,$,z){const B=V.fog,W=$.geometry,j=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?V.environment:null,ce=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,Q=e.get(w.envMap||j,ce),Y=_[w.type];let X=r.precision;w.precision!==null&&(X=r.getMaxPrecision(w.precision),X!==w.precision&&wt("WebGLProgram.getParameters:",w.precision,"not supported, using",X,"instead."));const H=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,P=H!==void 0?H.length:0;let q=0;W.morphAttributes.position!==void 0&&(q=1),W.morphAttributes.normal!==void 0&&(q=2),W.morphAttributes.color!==void 0&&(q=3);let Ee,ee,le,be;if(Y){const Be=Ki[Y];Ee=Be.vertexShader,ee=Be.fragmentShader}else{Ee=w.vertexShader,ee=w.fragmentShader;const Be=p.getVertexShaderStage(w),ft=p.getFragmentShaderStage(w);p.update(w,Be,ft),le=Be.id,be=ft.id}const Ae=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),ze=$.isInstancedMesh===!0,qe=$.isBatchedMesh===!0,ke=!!w.map,Te=!!w.matcap,Ue=!!Q,Xe=Ue&&Q.isPMREMTexture===!0,mt=!!w.aoMap,me=!!w.lightMap,yt=!!w.bumpMap&&w.wireframe===!1,Lt=!!w.normalMap,on=!!w.displacementMap,Ut=!!w.emissiveMap,Zt=!!w.metalnessMap,jt=!!w.roughnessMap,ln=w.anisotropy>0,K=w.clearcoat>0,Ft=w.diffuseRoughness>0,_t=w.dispersion>0,It=w.retroreflectivity>0,he=w.iridescence>0,Mt=w.sheen>0,tt=w.transmission>0,rt=ln&&!!w.anisotropyMap,k=K&&!!w.clearcoatMap,T=K&&!!w.clearcoatNormalMap,se=K&&!!w.clearcoatRoughnessMap,Pe=Ft&&!!w.diffuseRoughnessMap,Me=he&&!!w.iridescenceMap,Fe=he&&!!w.iridescenceThicknessMap,Ge=Mt&&!!w.sheenColorMap,ve=Mt&&!!w.sheenRoughnessMap,ye=!!w.specularMap,_e=!!w.specularColorMap,U=!!w.specularIntensityMap,ae=tt&&!!w.transmissionMap,oe=tt&&!!w.thicknessMap,Re=!!w.gradientMap,Ce=!!w.alphaMap,De=w.alphaTest>0,$e=!!w.alphaHash,at=!!w.extensions;let Ne=Er;w.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(Ne=s.toneMapping);const Qe=Xe?Q.isCompressedCubeTexture?Q.image[0].mipmaps:Q.mipmaps:null,ot={shaderID:Y,shaderType:w.type,shaderName:w.name,vertexShader:Ee,fragmentShader:ee,defines:w.defines,customVertexShaderID:le,customFragmentShaderID:be,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:X,batching:qe,batchingColor:qe&&$._colorsTexture!==null,instancing:ze,instancingColor:ze&&$.instanceColor!==null,instancingMorph:ze&&$.morphTexture!==null,outputColorSpace:Ae===null?s.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:zt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:ke,matcap:Te,envMap:Ue,envMapMode:Ue&&Q.mapping,envMapPMREM:Xe,envMapMaxLod:Xe?Qe.length-1:null,envMapSize:Xe?Qe[0].width:null,aoMap:mt,lightMap:me,bumpMap:yt,normalMap:Lt,displacementMap:on,emissiveMap:Ut,normalMapObjectSpace:Lt&&w.normalMapType===x_,normalMapTangentSpace:Lt&&w.normalMapType===uf,packedNormalMap:Lt&&w.normalMapType===uf&&Iw(w.normalMap.format),metalnessMap:Zt,roughnessMap:jt,anisotropy:ln,anisotropyMap:rt,clearcoat:K,clearcoatMap:k,clearcoatNormalMap:T,clearcoatRoughnessMap:se,diffuseRoughness:Ft,diffuseRoughnessMap:Pe,dispersion:_t,retroreflection:It,iridescence:he,iridescenceMap:Me,iridescenceThicknessMap:Fe,sheen:Mt,sheenColorMap:Ge,sheenRoughnessMap:ve,specularMap:ye,specularColorMap:_e,specularIntensityMap:U,transmission:tt,transmissionMap:ae,thicknessMap:oe,gradientMap:Re,opaque:w.transparent===!1&&w.blending===ao&&w.alphaToCoverage===!1,alphaMap:Ce,alphaTest:De,alphaHash:$e,combine:w.combine,mapUv:ke&&b(w.map.channel),aoMapUv:mt&&b(w.aoMap.channel),lightMapUv:me&&b(w.lightMap.channel),bumpMapUv:yt&&b(w.bumpMap.channel),normalMapUv:Lt&&b(w.normalMap.channel),displacementMapUv:on&&b(w.displacementMap.channel),emissiveMapUv:Ut&&b(w.emissiveMap.channel),metalnessMapUv:Zt&&b(w.metalnessMap.channel),roughnessMapUv:jt&&b(w.roughnessMap.channel),anisotropyMapUv:rt&&b(w.anisotropyMap.channel),clearcoatMapUv:k&&b(w.clearcoatMap.channel),clearcoatNormalMapUv:T&&b(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&b(w.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Pe&&b(w.diffuseRoughnessMap.channel),iridescenceMapUv:Me&&b(w.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&b(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&b(w.sheenColorMap.channel),sheenRoughnessMapUv:ve&&b(w.sheenRoughnessMap.channel),specularMapUv:ye&&b(w.specularMap.channel),specularColorMapUv:_e&&b(w.specularColorMap.channel),specularIntensityMapUv:U&&b(w.specularIntensityMap.channel),transmissionMapUv:ae&&b(w.transmissionMap.channel),thicknessMapUv:oe&&b(w.thicknessMap.channel),alphaMapUv:Ce&&b(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Lt||ln),vertexNormals:!!W.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!W.attributes.uv&&(ke||Ce),fog:!!B,useFog:w.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||W.attributes.normal===void 0&&Lt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:we,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:q,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:z.filter(Be=>Be.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&Z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ne,decodeVideoTexture:ke&&w.map.isVideoTexture===!0&&zt.getTransfer(w.map.colorSpace)===qt,decodeVideoTextureEmissive:Ut&&w.emissiveMap.isVideoTexture===!0&&zt.getTransfer(w.emissiveMap.colorSpace)===qt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Bi,flipSided:w.side===Un,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:at&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&w.extensions.multiDraw===!0||qe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ot.vertexUv1s=d.has(1),ot.vertexUv2s=d.has(2),ot.vertexUv3s=d.has(3),d.clear(),ot}function C(w){const N=[];if(w.shaderID?N.push(w.shaderID):(N.push(w.customVertexShaderID),N.push(w.customFragmentShaderID)),w.defines!==void 0)for(const Z in w.defines)N.push(Z),N.push(w.defines[Z]);return w.isRawShaderMaterial===!1&&(y(N,w),S(N,w),N.push(s.outputColorSpace)),N.push(w.customProgramCacheKey),N.join()}function y(w,N){w.push(N.precision),w.push(N.outputColorSpace),w.push(N.envMapMode),w.push(N.envMapPMREM),w.push(N.envMapMaxLod),w.push(N.envMapSize),w.push(N.mapUv),w.push(N.alphaMapUv),w.push(N.lightMapUv),w.push(N.aoMapUv),w.push(N.bumpMapUv),w.push(N.normalMapUv),w.push(N.displacementMapUv),w.push(N.emissiveMapUv),w.push(N.metalnessMapUv),w.push(N.roughnessMapUv),w.push(N.anisotropyMapUv),w.push(N.clearcoatMapUv),w.push(N.clearcoatNormalMapUv),w.push(N.clearcoatRoughnessMapUv),w.push(N.diffuseRoughnessMapUv),w.push(N.iridescenceMapUv),w.push(N.iridescenceThicknessMapUv),w.push(N.sheenColorMapUv),w.push(N.sheenRoughnessMapUv),w.push(N.specularMapUv),w.push(N.specularColorMapUv),w.push(N.specularIntensityMapUv),w.push(N.transmissionMapUv),w.push(N.thicknessMapUv),w.push(N.combine),w.push(N.fogExp2),w.push(N.sizeAttenuation),w.push(N.morphTargetsCount),w.push(N.numSunLights),w.push(N.numDirLights),w.push(N.numPointLights),w.push(N.numSpotLights),w.push(N.numSpotLightMaps),w.push(N.numHemiLights),w.push(N.numRectAreaLights),w.push(N.numSunLightShadows),w.push(N.numDirLightShadows),w.push(N.numPointLightShadows),w.push(N.numSpotLightShadows),w.push(N.numSpotLightShadowsWithMaps),w.push(N.numLightProbes),w.push(N.numLightProbeGrids),w.push(N.shadowMapType),w.push(N.toneMapping),w.push(N.numClippingPlanes),w.push(N.numClipIntersection),w.push(N.depthPacking)}function S(w,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.retroreflection&&u.enable(24),N.diffuseRoughness&&u.enable(25),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),N.packedNormalMap&&u.enable(22),N.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),N.numLightProbeGrids>0&&u.enable(22),N.hasPositionAttribute&&u.enable(23),w.push(u.mask)}function R(w){const N=_[w.type];let Z;if(N){const V=Ki[N];Z=ry.clone(V.uniforms)}else Z=w.uniforms;return Z}function F(w,N){let Z=g.get(N);return Z!==void 0?++Z.usedTimes:(Z=new Nw(s,N,w,o),m.push(Z),g.set(N,Z)),Z}function D(w){if(--w.usedTimes===0){const N=m.indexOf(w);m[N]=m[m.length-1],m.pop(),g.delete(w.cacheKey),w.destroy()}}function I(w){p.remove(w)}function L(){p.dispose()}return{getParameters:E,getProgramCacheKey:C,getUniforms:R,acquireProgram:F,releaseProgram:D,releaseShaderCache:I,programs:m,dispose:L}}function Uw(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let p=s.get(u);return p===void 0&&(p={},s.set(u,p)),p}function r(u){s.delete(u)}function o(u,p,d){s.get(u)[p]=d}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function Fw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Q0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function em(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(_){let b=0;return _.isInstancedMesh&&(b+=2),_.isSkinnedMesh&&(b+=1),b}function p(_,b,E,C,y,S){let R=s[e];return R===void 0?(R={id:_.id,object:_,geometry:b,material:E,materialVariant:u(_),groupOrder:C,renderOrder:_.renderOrder,z:y,group:S},s[e]=R):(R.id=_.id,R.object=_,R.geometry=b,R.material=E,R.materialVariant=u(_),R.groupOrder=C,R.renderOrder=_.renderOrder,R.z=y,R.group=S),e++,R}function d(_,b,E,C,y,S,R){R.reversedDepth===!0&&(y=-y);const F=p(_,b,E,C,y,S);E.transmission>0?r.push(F):E.transparent===!0?o.push(F):t.push(F)}function m(_,b,E,C,y,S){const R=p(_,b,E,C,y,S);E.transmission>0?r.unshift(R):E.transparent===!0?o.unshift(R):t.unshift(R)}function g(_,b){t.length>1&&t.sort(_||Fw),r.length>1&&r.sort(b||Q0),o.length>1&&o.sort(b||Q0)}function v(){for(let _=e,b=s.length;_<b;_++){const E=s[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:m,finish:v,sort:g}}function zw(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new em,s.set(r,[u])):o>=l.length?(u=new em,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ow(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new pe,color:new Dt};break;case"SpotLight":t={position:new pe,direction:new pe,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new pe,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new pe,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":t={color:new Dt,position:new pe,halfWidth:new pe,halfHeight:new pe};break}return s[e.id]=t,t}}}function Bw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Hw=0;function Gw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Vw(s){const e=new Ow,t=Bw(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new pe);const o=new pe,l=new hn,u=new hn;function p(m){let g=0,v=0,_=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let b=0,E=0,C=0,y=0,S=0,R=0,F=0,D=0,I=0,L=0,w=0,N=0,Z=0,V=0;m.sort(Gw);for(let z=0,B=m.length;z<B;z++){const W=m[z],j=W.color,ce=W.intensity,Q=W.distance;let Y=null;if(W.shadow&&W.shadow.map&&(W.shadow.map.texture.format===Ts?Y=W.shadow.map.texture:Y=W.shadow.map.depthTexture||W.shadow.map.texture),W.isAmbientLight)g+=j.r*ce,v+=j.g*ce,_+=j.b*ce;else if(W.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(W.sh.coefficients[X],ce);V++}else if(W.isSunLight){const X=e.get(W);if(X.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){const H=W.shadow,P=t.get(W);P.shadowIntensity=H.intensity,P.shadowBias=H.bias,P.shadowNormalBias=H.normalBias,P.shadowRadius=H.radius,P.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),r.sunShadow[E]=P,r.sunShadowMap[E]=Y;const q=H.getViewportCount();for(let Ee=0;Ee<q;Ee++)r.sunShadowMatrix[C+Ee]=H.getMatrix(Ee),r.sunShadowCascade[C+Ee]=H._cascadeData[Ee];C+=q,E++}r.sun[b]=X,b++}else if(W.isDirectionalLight){const X=e.get(W);if(X.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){const H=W.shadow,P=t.get(W);P.shadowIntensity=H.intensity,P.shadowBias=H.bias,P.shadowNormalBias=H.normalBias,P.shadowRadius=H.radius,P.shadowMapSize=H.mapSize,r.directionalShadow[y]=P,r.directionalShadowMap[y]=Y,r.directionalShadowMatrix[y]=W.shadow.matrix,I++}r.directional[y]=X,y++}else if(W.isSpotLight){const X=e.get(W);X.position.setFromMatrixPosition(W.matrixWorld),X.color.copy(j).multiplyScalar(ce),X.distance=Q,X.coneCos=Math.cos(W.angle),X.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),X.decay=W.decay,r.spot[R]=X;const H=W.shadow;if(W.map&&(r.spotLightMap[N]=W.map,N++,H.updateMatrices(W),W.castShadow&&Z++),r.spotLightMatrix[R]=H.matrix,W.castShadow){const P=t.get(W);P.shadowIntensity=H.intensity,P.shadowBias=H.bias,P.shadowNormalBias=H.normalBias,P.shadowRadius=H.radius,P.shadowMapSize=H.mapSize,r.spotShadow[R]=P,r.spotShadowMap[R]=Y,w++}R++}else if(W.isRectAreaLight){const X=e.get(W);X.color.copy(j).multiplyScalar(ce),X.halfWidth.set(W.width*.5,0,0),X.halfHeight.set(0,W.height*.5,0),r.rectArea[F]=X,F++}else if(W.isPointLight){const X=e.get(W);if(X.color.copy(W.color).multiplyScalar(W.intensity),X.distance=W.distance,X.decay=W.decay,W.castShadow){const H=W.shadow,P=t.get(W);P.shadowIntensity=H.intensity,P.shadowBias=H.bias,P.shadowNormalBias=H.normalBias,P.shadowRadius=H.radius,P.shadowMapSize=H.mapSize,P.shadowCameraNear=H.camera.near,P.shadowCameraFar=H.camera.far,r.pointShadow[S]=P,r.pointShadowMap[S]=Y,r.pointShadowMatrix[S]=W.shadow.matrix,L++}r.point[S]=X,S++}else if(W.isHemisphereLight){const X=e.get(W);X.skyColor.copy(W.color).multiplyScalar(ce),X.groundColor.copy(W.groundColor).multiplyScalar(ce),r.hemi[D]=X,D++}}F>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ze.LTC_FLOAT_1,r.rectAreaLTC2=Ze.LTC_FLOAT_2):(r.rectAreaLTC1=Ze.LTC_HALF_1,r.rectAreaLTC2=Ze.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=_;const $=r.hash;($.sunLength!==b||$.directionalLength!==y||$.pointLength!==S||$.spotLength!==R||$.rectAreaLength!==F||$.hemiLength!==D||$.numSunShadows!==E||$.numDirectionalShadows!==I||$.numPointShadows!==L||$.numSpotShadows!==w||$.numSpotMaps!==N||$.numLightProbes!==V)&&(r.sun.length=b,r.directional.length=y,r.spot.length=R,r.rectArea.length=F,r.point.length=S,r.hemi.length=D,r.sunShadow.length=E,r.sunShadowMap.length=E,r.sunShadowMatrix.length=C,r.sunShadowCascade.length=C,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.directionalShadowMatrix.length=I,r.pointShadow.length=L,r.pointShadowMap.length=L,r.pointShadowMatrix.length=L,r.spotShadow.length=w,r.spotShadowMap.length=w,r.spotLightMatrix.length=w+N-Z,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=Z,r.numLightProbes=V,$.sunLength=b,$.directionalLength=y,$.pointLength=S,$.spotLength=R,$.rectAreaLength=F,$.hemiLength=D,$.numSunShadows=E,$.numDirectionalShadows=I,$.numPointShadows=L,$.numSpotShadows=w,$.numSpotMaps=N,$.numLightProbes=V,r.version=Hw++)}function d(m,g){let v=0,_=0,b=0,E=0,C=0,y=0;const S=g.matrixWorldInverse;for(let R=0,F=m.length;R<F;R++){const D=m[R];if(D.isSunLight){const I=r.sun[v];I.direction.setFromMatrixPosition(D.matrixWorld),I.direction.transformDirection(S),v++}else if(D.isDirectionalLight){const I=r.directional[_];I.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(S),_++}else if(D.isSpotLight){const I=r.spot[E];I.position.setFromMatrixPosition(D.matrixWorld),I.position.applyMatrix4(S),I.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(S),E++}else if(D.isRectAreaLight){const I=r.rectArea[C];I.position.setFromMatrixPosition(D.matrixWorld),I.position.applyMatrix4(S),u.identity(),l.copy(D.matrixWorld),l.premultiply(S),u.extractRotation(l),I.halfWidth.set(D.width*.5,0,0),I.halfHeight.set(0,D.height*.5,0),I.halfWidth.applyMatrix4(u),I.halfHeight.applyMatrix4(u),C++}else if(D.isPointLight){const I=r.point[b];I.position.setFromMatrixPosition(D.matrixWorld),I.position.applyMatrix4(S),b++}else if(D.isHemisphereLight){const I=r.hemi[y];I.direction.setFromMatrixPosition(D.matrixWorld),I.direction.transformDirection(S),y++}}}return{setup:p,setupView:d,state:r}}function tm(s){const e=new Vw(s),t=[],r=[],o=[];function l(v){g.camera=v,t.length=0,r.length=0,o.length=0}function u(v){v.isLightProbeGrid?o.push(v):t.push(v)}function p(v){r.push(v)}function d(){e.setup(t),o.sort((v,_)=>v.priority-_.priority||v.id-_.id)}function m(v){e.setupView(t,v)}const g={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:g,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:p}}function Ww(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let p;return u===void 0?(p=new tm(s),e.set(o,[p])):l>=u.length?(p=new tm(s),u.push(p)):p=u[l],p}function r(){e=new WeakMap}return{get:t,dispose:r}}const jw=`void main() {
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
}`,Xw=[new pe(1,0,0),new pe(-1,0,0),new pe(0,1,0),new pe(0,-1,0),new pe(0,0,1),new pe(0,0,-1)],Yw=[new pe(0,-1,0),new pe(0,-1,0),new pe(0,0,1),new pe(0,0,-1),new pe(0,-1,0),new pe(0,-1,0)],nm=new hn,no=new pe,wd=new pe;function qw(s,e,t){let r=new ho;const o=new kt,l=new kt,u=new fn,p=new ly,d=new cy,m={},g=t.maxTextureSize,v={[Es]:Un,[Un]:Es,[Bi]:Bi},_=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:jw,fragmentShader:$w}),b=_.clone();b.defines.HORIZONTAL_PASS=1;const E=new ir;E.setAttribute("position",new ws(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Sn(E,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wl;let S=this.type;this.render=function(L,w,N){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===Yv&&(wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Wl);const Z=s.getRenderTarget(),V=s.getActiveCubeFace(),$=s.getActiveMipmapLevel(),z=s.state;z.setBlending(da),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const B=S!==this.type;B&&w.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(j=>j.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,j=L.length;W<j;W++){const ce=L[W],Q=ce.shadow;if(Q===void 0){wt("WebGLShadowMap:",ce,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;o.copy(Q.mapSize);const Y=Q.getFrameExtents();o.multiply(Y),l.copy(Q.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/Y.x),o.x=l.x*Y.x,Q.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/Y.y),o.y=l.y*Y.y,Q.mapSize.y=l.y));const X=s.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=X,Q.map===null||B===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===io){if(ce.isPointLight){wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new er(o.x,o.y,{format:Ts,type:nr,minFilter:ai,magFilter:ai,generateMipmaps:!1}),Q.map.texture.name=ce.name+".shadowMap",Q.map.depthTexture=new ga(o.x,o.y,Ji),Q.map.depthTexture.name=ce.name+".shadowMapDepth",Q.map.depthTexture.format=ts,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=kn,Q.map.depthTexture.magFilter=kn}else ce.isPointLight?(Q.map=new Df(o.x),Q.map.depthTexture=new Om(o.x,tr)):(Q.map=new er(o.x,o.y),Q.map.depthTexture=new ga(o.x,o.y,tr)),Q.map.depthTexture.name=ce.name+".shadowMap",Q.map.depthTexture.format=ts,this.type===Wl?(Q.map.depthTexture.compareFunction=X?Nm:Rm,Q.map.depthTexture.minFilter=ai,Q.map.depthTexture.magFilter=ai):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=kn,Q.map.depthTexture.magFilter=kn);Q.camera.updateProjectionMatrix()}Q.map.isWebGLCubeRenderTarget!==!0&&(Q.map.width!==o.x||Q.map.height!==o.y)&&Q.map.setSize(o.x,o.y);const H=Q.map.isWebGLCubeRenderTarget?6:Q.getViewportCount();ce.isPointLight!==!0&&Q.updateMatrices(ce,N);const P=(Q.camera.layers.mask&4294967294)!==0?Q.camera.layers:N.layers;for(let q=0;q<H;q++){const Ee=Q.getCamera(q);if(ce.isPointLight){const ee=Q.camera,le=Q.matrix,be=ce.distance||ee.far;be!==ee.far&&(ee.far=be,ee.updateProjectionMatrix()),no.setFromMatrixPosition(ce.matrixWorld),ee.position.copy(no),wd.copy(ee.position),wd.add(Xw[q]),ee.up.copy(Yw[q]),ee.lookAt(wd),ee.updateMatrixWorld(),le.makeTranslation(-no.x,-no.y,-no.z),nm.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(nm,ee.coordinateSystem,ee.reversedDepth)}if(Q.map.isWebGLCubeRenderTarget)s.setRenderTarget(Q.map,q),s.clear();else{q===0&&(s.setRenderTarget(Q.map),s.clear());const ee=Q.getViewport(q);u.set(l.x*ee.x,l.y*ee.y,l.x*ee.z,l.y*ee.w),z.viewport(u)}r=Q.getFrustum(q),D(w,N,Ee,ce,P,this.type)}Q.isPointLightShadow!==!0&&this.type===io&&R(Q,N),Q.needsUpdate=!1}S=this.type,y.needsUpdate=!1,s.setRenderTarget(Z,V,$)};function R(L,w){const N=e.update(C);_.defines.VSM_SAMPLES!==L.blurSamples&&(_.defines.VSM_SAMPLES=L.blurSamples,b.defines.VSM_SAMPLES=L.blurSamples,_.needsUpdate=!0,b.needsUpdate=!0),L.mapPass===null?L.mapPass=new er(o.x,o.y,{format:Ts,type:nr}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),_.uniforms.shadow_pass.value=L.map.depthTexture,_.uniforms.resolution.value.set(L.map.width,L.map.height),_.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(w,null,N,_,C,null),b.uniforms.shadow_pass.value=L.mapPass.texture,b.uniforms.resolution.value.set(L.map.width,L.map.height),b.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(w,null,N,b,C,null)}function F(L,w,N,Z){let V=null;const $=N.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if($!==void 0)V=$;else if(V=N.isPointLight===!0?d:p,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const z=V.uuid,B=w.uuid;let W=m[z];W===void 0&&(W={},m[z]=W);let j=W[B];j===void 0&&(j=V.clone(),W[B]=j,w.addEventListener("dispose",I)),V=j}if(V.visible=w.visible,V.wireframe=w.wireframe,Z===io?V.side=w.shadowSide!==null?w.shadowSide:w.side:V.side=w.shadowSide!==null?w.shadowSide:v[w.side],V.alphaMap=w.alphaMap,V.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,V.map=w.map,V.clipShadows=w.clipShadows,V.clippingPlanes=w.clippingPlanes,V.clipIntersection=w.clipIntersection,V.displacementMap=w.displacementMap,V.displacementScale=w.displacementScale,V.displacementBias=w.displacementBias,V.wireframeLinewidth=w.wireframeLinewidth,V.linewidth=w.linewidth,N.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const z=s.properties.get(V);z.light=N}return V}function D(L,w,N,Z,V,$){if(L.visible===!1)return;if(L.layers.test(V)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&$===io)&&(!L.frustumCulled||L.intersectsFrustum(r))){L.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,L.matrixWorld);const W=e.update(L),j=L.material;if(Array.isArray(j)){const ce=W.groups;for(let Q=0,Y=ce.length;Q<Y;Q++){const X=ce[Q],H=j[X.materialIndex];if(H&&H.visible){const P=F(L,H,Z,$);L.onBeforeShadow(s,L,w,N,W,P,X),s.renderBufferDirect(N,null,W,P,L,X),L.onAfterShadow(s,L,w,N,W,P,X)}}}else if(j.visible){const ce=F(L,j,Z,$);L.onBeforeShadow(s,L,w,N,W,ce,null),s.renderBufferDirect(N,null,W,ce,L,null),L.onAfterShadow(s,L,w,N,W,ce,null)}}const B=L.children;for(let W=0,j=B.length;W<j;W++)D(B[W],w,N,Z,V,$)}function I(L){L.target.removeEventListener("dispose",I);for(const N in m){const Z=m[N],V=L.target.uuid;V in Z&&(Z[V].dispose(),delete Z[V])}}}function Kw(s,e){function t(){let U=!1;const ae=new fn;let oe=null;const Re=new fn(0,0,0,0);return{setMask:function(Ce){oe!==Ce&&!U&&(s.colorMask(Ce,Ce,Ce,Ce),oe=Ce)},setLocked:function(Ce){U=Ce},setClear:function(Ce,De,$e,at,Ne){Ne===!0&&(Ce*=at,De*=at,$e*=at),ae.set(Ce,De,$e,at),Re.equals(ae)===!1&&(s.clearColor(Ce,De,$e,at),Re.copy(ae))},reset:function(){U=!1,oe=null,Re.set(-1,0,0,0)}}}function r(){let U=!1,ae=!1,oe=null,Re=null,Ce=null;return{setReversed:function(De){if(ae!==De){const $e=e.get("EXT_clip_control");De?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),ae=De;const at=Ce;Ce=null,this.setClear(at)}},getReversed:function(){return ae},setTest:function(De){De?we(s.DEPTH_TEST):ze(s.DEPTH_TEST)},setMask:function(De){oe!==De&&!U&&(s.depthMask(De),oe=De)},setFunc:function(De){if(ae&&(De=C_[De]),Re!==De){switch(De){case Ed:s.depthFunc(s.NEVER);break;case Td:s.depthFunc(s.ALWAYS);break;case Ad:s.depthFunc(s.LESS);break;case lo:s.depthFunc(s.LEQUAL);break;case Cd:s.depthFunc(s.EQUAL);break;case Rd:s.depthFunc(s.GEQUAL);break;case Nd:s.depthFunc(s.GREATER);break;case Pd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Re=De}},setLocked:function(De){U=De},setClear:function(De){Ce!==De&&(Ce=De,ae&&(De=1-De),s.clearDepth(De))},reset:function(){U=!1,oe=null,Re=null,Ce=null,ae=!1}}}function o(){let U=!1,ae=null,oe=null,Re=null,Ce=null,De=null,$e=null,at=null,Ne=null;return{setTest:function(Qe){U||(Qe?we(s.STENCIL_TEST):ze(s.STENCIL_TEST))},setMask:function(Qe){ae!==Qe&&!U&&(s.stencilMask(Qe),ae=Qe)},setFunc:function(Qe,ot,Be){(oe!==Qe||Re!==ot||Ce!==Be)&&(s.stencilFunc(Qe,ot,Be),oe=Qe,Re=ot,Ce=Be)},setOp:function(Qe,ot,Be){(De!==Qe||$e!==ot||at!==Be)&&(s.stencilOp(Qe,ot,Be),De=Qe,$e=ot,at=Be)},setLocked:function(Qe){U=Qe},setClear:function(Qe){Ne!==Qe&&(s.clearStencil(Qe),Ne=Qe)},reset:function(){U=!1,ae=null,oe=null,Re=null,Ce=null,De=null,$e=null,at=null,Ne=null}}}const l=new t,u=new r,p=new o;let d={};const m=new WeakMap;let g={},v={},_={},b=new WeakMap,E=[],C=null,y=!1,S=null,R=null,F=null,D=null,I=null,L=null,w=null,N=new Dt(0,0,0),Z=0,V=!1,$=null,z=null,B=null,W=null,j=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,Y=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(X)[1]),Q=Y>=1):X.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Q=Y>=2);let H=null,P={};const q=s.getParameter(s.SCISSOR_BOX),Ee=s.getParameter(s.VIEWPORT),ee=new fn().fromArray(q),le=new fn().fromArray(Ee);function be(U,ae,oe,Re){const Ce=new Uint8Array(4),De=s.createTexture();s.bindTexture(U,De),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<oe;$e++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(ae,0,s.RGBA,1,1,Re,0,s.RGBA,s.UNSIGNED_BYTE,Ce):s.texImage2D(ae+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ce);return De}const Ae={};Ae[s.TEXTURE_2D]=be(s.TEXTURE_2D,s.TEXTURE_2D,1),Ae[s.TEXTURE_CUBE_MAP]=be(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[s.TEXTURE_2D_ARRAY]=be(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ae[s.TEXTURE_3D]=be(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),p.setClear(0),we(s.DEPTH_TEST),u.setFunc(lo),yt(!1),Lt(c0),we(s.CULL_FACE),mt(da);function we(U){g[U]!==!0&&(s.enable(U),g[U]=!0)}function ze(U){g[U]!==!1&&(s.disable(U),g[U]=!1)}function qe(U,ae){return _[U]!==ae?(s.bindFramebuffer(U,ae),_[U]=ae,U===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=ae),U===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=ae),!0):!1}function ke(U,ae){let oe=E,Re=!1;if(U){oe=b.get(ae),oe===void 0&&(oe=[],b.set(ae,oe));const Ce=U.textures;if(oe.length!==Ce.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let De=0,$e=Ce.length;De<$e;De++)oe[De]=s.COLOR_ATTACHMENT0+De;oe.length=Ce.length,Re=!0}}else oe[0]!==s.BACK&&(oe[0]=s.BACK,Re=!0);Re&&s.drawBuffers(oe)}function Te(U){return C!==U?(s.useProgram(U),C=U,!0):!1}const Ue={[ca]:s.FUNC_ADD,[Kv]:s.FUNC_SUBTRACT,[Zv]:s.FUNC_REVERSE_SUBTRACT};Ue[Jv]=s.MIN,Ue[Qv]=s.MAX;const Xe={[e_]:s.ZERO,[t_]:s.ONE,[n_]:s.SRC_COLOR,[dm]:s.SRC_ALPHA,[l_]:s.SRC_ALPHA_SATURATE,[a_]:s.DST_COLOR,[r_]:s.DST_ALPHA,[i_]:s.ONE_MINUS_SRC_COLOR,[fm]:s.ONE_MINUS_SRC_ALPHA,[o_]:s.ONE_MINUS_DST_COLOR,[s_]:s.ONE_MINUS_DST_ALPHA,[c_]:s.CONSTANT_COLOR,[u_]:s.ONE_MINUS_CONSTANT_COLOR,[d_]:s.CONSTANT_ALPHA,[f_]:s.ONE_MINUS_CONSTANT_ALPHA};function mt(U,ae,oe,Re,Ce,De,$e,at,Ne,Qe){if(U===da){y===!0&&(ze(s.BLEND),y=!1);return}if(y===!1&&(we(s.BLEND),y=!0),U!==qv){if(U!==S||Qe!==V){if((R!==ca||I!==ca)&&(s.blendEquation(s.FUNC_ADD),R=ca,I=ca),Qe)switch(U){case ao:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bs:s.blendFunc(s.ONE,s.ONE);break;case u0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case d0:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Xt("WebGLState: Invalid blending: ",U);break}else switch(U){case ao:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case u0:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case d0:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",U);break}F=null,D=null,L=null,w=null,N.set(0,0,0),Z=0,S=U,V=Qe}return}Ce=Ce||ae,De=De||oe,$e=$e||Re,(ae!==R||Ce!==I)&&(s.blendEquationSeparate(Ue[ae],Ue[Ce]),R=ae,I=Ce),(oe!==F||Re!==D||De!==L||$e!==w)&&(s.blendFuncSeparate(Xe[oe],Xe[Re],Xe[De],Xe[$e]),F=oe,D=Re,L=De,w=$e),(at.equals(N)===!1||Ne!==Z)&&(s.blendColor(at.r,at.g,at.b,Ne),N.copy(at),Z=Ne),S=U,V=!1}function me(U,ae){U.side===Bi?ze(s.CULL_FACE):we(s.CULL_FACE);let oe=U.side===Un;ae&&(oe=!oe),yt(oe),U.blending===ao&&U.transparent===!1?mt(da):mt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),u.setFunc(U.depthFunc),u.setTest(U.depthTest),u.setMask(U.depthWrite),l.setMask(U.colorWrite);const Re=U.stencilWrite;p.setTest(Re),Re&&(p.setMask(U.stencilWriteMask),p.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),p.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ut(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?we(s.SAMPLE_ALPHA_TO_COVERAGE):ze(s.SAMPLE_ALPHA_TO_COVERAGE)}function yt(U){$!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),$=U)}function Lt(U){U!==$v?(we(s.CULL_FACE),U!==z&&(U===c0?s.cullFace(s.BACK):U===Xv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ze(s.CULL_FACE),z=U}function on(U){U!==B&&(Q&&s.lineWidth(U),B=U)}function Ut(U,ae,oe){U?(we(s.POLYGON_OFFSET_FILL),(W!==ae||j!==oe)&&(W=ae,j=oe,u.getReversed()&&(ae=-ae,oe=-oe),s.polygonOffset(ae,oe))):ze(s.POLYGON_OFFSET_FILL)}function Zt(U){U?we(s.SCISSOR_TEST):ze(s.SCISSOR_TEST)}function jt(U){U===void 0&&(U=s.TEXTURE0+ce-1),H!==U&&(s.activeTexture(U),H=U)}function ln(U,ae,oe){oe===void 0&&(H===null?oe=s.TEXTURE0+ce-1:oe=H);let Re=P[oe];Re===void 0&&(Re={type:void 0,texture:void 0},P[oe]=Re),(Re.type!==U||Re.texture!==ae)&&(H!==oe&&(s.activeTexture(oe),H=oe),s.bindTexture(U,ae||Ae[U]),Re.type=U,Re.texture=ae)}function K(){const U=P[H];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Ft(){try{s.compressedTexImage2D(...arguments)}catch(U){Xt("WebGLState:",U)}}function _t(){try{s.compressedTexImage3D(...arguments)}catch(U){Xt("WebGLState:",U)}}function It(){try{s.texSubImage2D(...arguments)}catch(U){Xt("WebGLState:",U)}}function he(){try{s.texSubImage3D(...arguments)}catch(U){Xt("WebGLState:",U)}}function Mt(){try{s.compressedTexSubImage2D(...arguments)}catch(U){Xt("WebGLState:",U)}}function tt(){try{s.compressedTexSubImage3D(...arguments)}catch(U){Xt("WebGLState:",U)}}function rt(){try{s.texStorage2D(...arguments)}catch(U){Xt("WebGLState:",U)}}function k(){try{s.texStorage3D(...arguments)}catch(U){Xt("WebGLState:",U)}}function T(){try{s.texImage2D(...arguments)}catch(U){Xt("WebGLState:",U)}}function se(){try{s.texImage3D(...arguments)}catch(U){Xt("WebGLState:",U)}}function Pe(U){return v[U]!==void 0?v[U]:s.getParameter(U)}function Me(U,ae){v[U]!==ae&&(s.pixelStorei(U,ae),v[U]=ae)}function Fe(U){ee.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),ee.copy(U))}function Ge(U){le.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),le.copy(U))}function ve(U,ae){let oe=m.get(ae);oe===void 0&&(oe=new WeakMap,m.set(ae,oe));let Re=oe.get(U);Re===void 0&&(Re=s.getUniformBlockIndex(ae,U.name),s.uniformBlockBinding(ae,Re,Re),oe.set(U,Re))}function ye(U,ae,oe){const Ce=m.get(ae).get(U);d[Ce]!==oe&&(s.bindBufferBase(s.UNIFORM_BUFFER,Ce,oe),d[Ce]=oe)}function _e(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),g={},v={},H=null,P={},_={},d={},b=new WeakMap,E=[],C=null,y=!1,S=null,R=null,F=null,D=null,I=null,L=null,w=null,N=new Dt(0,0,0),Z=0,V=!1,$=null,z=null,B=null,W=null,j=null,ee.set(0,0,s.canvas.width,s.canvas.height),le.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),p.reset()}return{buffers:{color:l,depth:u,stencil:p},enable:we,disable:ze,bindFramebuffer:qe,drawBuffers:ke,useProgram:Te,setBlending:mt,setMaterial:me,setFlipSided:yt,setCullFace:Lt,setLineWidth:on,setPolygonOffset:Ut,setScissorTest:Zt,activeTexture:jt,bindTexture:ln,unbindTexture:K,compressedTexImage2D:Ft,compressedTexImage3D:_t,texImage2D:T,texImage3D:se,pixelStorei:Me,getParameter:Pe,updateUBOMapping:ve,uniformBlockBinding:ye,texStorage2D:rt,texStorage3D:k,texSubImage2D:It,texSubImage3D:he,compressedTexSubImage2D:Mt,compressedTexSubImage3D:tt,scissor:Fe,viewport:Ge,reset:_e}}function Zw(s,e,t,r,o,l,u){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new kt,g=new WeakMap,v=new Set;let _;const b=new WeakMap,E=new Set,C=new FinalizationRegistry(k=>E.delete(k));let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(k,T){return y?new OffscreenCanvas(k,T):rc("canvas")}function R(k,T,se){let Pe=1;const Me=rt(k);if((Me.width>se||Me.height>se)&&(Pe=se/Math.max(Me.width,Me.height)),Pe<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const Fe=Math.floor(Pe*Me.width),Ge=Math.floor(Pe*Me.height);_===void 0&&(_=S(Fe,Ge));const ve=T?S(Fe,Ge):_;return ve.width=Fe,ve.height=Ge,ve.getContext("2d").drawImage(k,0,0,Fe,Ge),wt("WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+Fe+"x"+Ge+")."),ve}else return"data"in k&&wt("WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),k;return k}function F(k){return k.generateMipmaps}function D(k){s.generateMipmap(k)}function I(k){return k.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?s.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(k,T,se,Pe,Me,Fe=!1){if(k!==null){if(s[k]!==void 0)return s[k];wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let Ge;Pe&&(Ge=e.get("EXT_texture_norm16"),Ge||wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ve=T;if(T===s.RED&&(se===s.FLOAT&&(ve=s.R32F),se===s.HALF_FLOAT&&(ve=s.R16F),se===s.UNSIGNED_BYTE&&(ve=s.R8),se===s.UNSIGNED_SHORT&&Ge&&(ve=Ge.R16_EXT),se===s.SHORT&&Ge&&(ve=Ge.R16_SNORM_EXT)),T===s.RED_INTEGER&&(se===s.UNSIGNED_BYTE&&(ve=s.R8UI),se===s.UNSIGNED_SHORT&&(ve=s.R16UI),se===s.UNSIGNED_INT&&(ve=s.R32UI),se===s.BYTE&&(ve=s.R8I),se===s.SHORT&&(ve=s.R16I),se===s.INT&&(ve=s.R32I)),T===s.RG&&(se===s.FLOAT&&(ve=s.RG32F),se===s.HALF_FLOAT&&(ve=s.RG16F),se===s.UNSIGNED_BYTE&&(ve=s.RG8),se===s.UNSIGNED_SHORT&&Ge&&(ve=Ge.RG16_EXT),se===s.SHORT&&Ge&&(ve=Ge.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(se===s.UNSIGNED_BYTE&&(ve=s.RG8UI),se===s.UNSIGNED_SHORT&&(ve=s.RG16UI),se===s.UNSIGNED_INT&&(ve=s.RG32UI),se===s.BYTE&&(ve=s.RG8I),se===s.SHORT&&(ve=s.RG16I),se===s.INT&&(ve=s.RG32I)),T===s.RGB_INTEGER&&(se===s.UNSIGNED_BYTE&&(ve=s.RGB8UI),se===s.UNSIGNED_SHORT&&(ve=s.RGB16UI),se===s.UNSIGNED_INT&&(ve=s.RGB32UI),se===s.BYTE&&(ve=s.RGB8I),se===s.SHORT&&(ve=s.RGB16I),se===s.INT&&(ve=s.RGB32I)),T===s.RGBA_INTEGER&&(se===s.UNSIGNED_BYTE&&(ve=s.RGBA8UI),se===s.UNSIGNED_SHORT&&(ve=s.RGBA16UI),se===s.UNSIGNED_INT&&(ve=s.RGBA32UI),se===s.BYTE&&(ve=s.RGBA8I),se===s.SHORT&&(ve=s.RGBA16I),se===s.INT&&(ve=s.RGBA32I)),T===s.RGB&&(se===s.UNSIGNED_SHORT&&Ge&&(ve=Ge.RGB16_EXT),se===s.SHORT&&Ge&&(ve=Ge.RGB16_SNORM_EXT),se===s.UNSIGNED_INT_5_9_9_9_REV&&(ve=s.RGB9_E5),se===s.UNSIGNED_INT_10F_11F_11F_REV&&(ve=s.R11F_G11F_B10F)),T===s.RGBA){const ye=Fe?ic:zt.getTransfer(Me);se===s.FLOAT&&(ve=s.RGBA32F),se===s.HALF_FLOAT&&(ve=s.RGBA16F),se===s.UNSIGNED_BYTE&&(ve=ye===qt?s.SRGB8_ALPHA8:s.RGBA8),se===s.UNSIGNED_SHORT&&Ge&&(ve=Ge.RGBA16_EXT),se===s.SHORT&&Ge&&(ve=Ge.RGBA16_SNORM_EXT),se===s.UNSIGNED_SHORT_4_4_4_4&&(ve=s.RGBA4),se===s.UNSIGNED_SHORT_5_5_5_1&&(ve=s.RGB5_A1)}return(ve===s.R16F||ve===s.R32F||ve===s.RG16F||ve===s.RG32F||ve===s.RGBA16F||ve===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function w(k,T){let se;return k?T===null||T===tr||T===ma?se=s.DEPTH24_STENCIL8:T===Ji?se=s.DEPTH32F_STENCIL8:T===uo&&(se=s.DEPTH24_STENCIL8,wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===tr||T===ma?se=s.DEPTH_COMPONENT24:T===Ji?se=s.DEPTH_COMPONENT32F:T===uo&&(se=s.DEPTH_COMPONENT16),se}function N(k,T){return F(k)===!0||k.isFramebufferTexture&&k.minFilter!==kn&&k.minFilter!==ai?Math.log2(Math.max(T.width,T.height))+1:k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?T.mipmaps.length:1}function Z(k){const T=new WeakRef(k);r.get(k).__ref=T,E.add(T),C.register(k,T,T)}function V(k){const T=r.get(k).__ref;T!==void 0&&(E.delete(T),C.unregister(T))}function $(k){B(k.target)}function z(k){W(k.target)}function B(k){k.removeEventListener("dispose",$),V(k),ce(k),k.isVideoTexture&&g.delete(k),k.isHTMLTexture&&v.delete(k)}function W(k){k.removeEventListener("dispose",z),V(k),Y(k)}function j(){for(const k of E){const T=k.deref();T!==void 0&&(T.isRenderTarget===!0?W(T):B(T))}E.clear(),v.clear()}function ce(k){const T=r.get(k);if(T.__webglInit===void 0)return;const se=k.source,Pe=b.get(se);if(Pe){const Me=Pe[T.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&Q(k),Object.keys(Pe).length===0&&b.delete(se)}r.remove(k)}function Q(k){const T=r.get(k);s.deleteTexture(T.__webglTexture);const se=k.source,Pe=b.get(se);delete Pe[T.__cacheKey],u.memory.textures--}function Y(k){const T=r.get(k);T.__depthDisposeCallback&&T.__depthDisposeCallback();const se=k.depthTexture;if(se&&se.renderTarget===k&&B(se),k.isWebGLCubeRenderTarget)for(let Me=0;Me<6;Me++){if(Array.isArray(T.__webglFramebuffer[Me]))for(let Fe=0;Fe<T.__webglFramebuffer[Me].length;Fe++)s.deleteFramebuffer(T.__webglFramebuffer[Me][Fe]);else s.deleteFramebuffer(T.__webglFramebuffer[Me]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[Me])}else{if(Array.isArray(T.__webglFramebuffer))for(let Me=0;Me<T.__webglFramebuffer.length;Me++)s.deleteFramebuffer(T.__webglFramebuffer[Me]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Me=0;Me<T.__webglColorRenderbuffer.length;Me++)T.__webglColorRenderbuffer[Me]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[Me]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Pe=k.textures;for(let Me=0,Fe=Pe.length;Me<Fe;Me++){const Ge=r.get(Pe[Me]);Ge.__webglTexture&&(s.deleteTexture(Ge.__webglTexture),u.memory.textures--),r.remove(Pe[Me])}r.remove(k)}let X=0;function H(){X=0}function P(){return X}function q(k){X=k}function Ee(){const k=X;return k>=o.maxTextures&&wt("WebGLTextures: Trying to use "+(k+1)+" texture units while this GPU supports only "+o.maxTextures),X+=1,k}function ee(k){const T=[];return T.push(k.wrapS),T.push(k.wrapT),T.push(k.wrapR||0),T.push(k.magFilter),T.push(k.minFilter),T.push(k.anisotropy),T.push(k.internalFormat),T.push(k.format),T.push(k.type),T.push(k.generateMipmaps),T.push(k.mipmapsAutoUpdate),T.push(k.premultiplyAlpha),T.push(k.flipY),T.push(k.unpackAlignment),T.push(k.colorSpace),T.join()}function le(k,T){const se=r.get(k);if(k.isVideoTexture&&Mt(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&se.__version!==k.version){const Pe=k.image;if(Pe===null)wt("WebGLRenderer: Texture marked for update but no image data found.");else if(Pe.complete===!1)wt("WebGLRenderer: Texture marked for update but image is incomplete");else{me(se,k,T);return}}else k.isExternalTexture&&(se.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,se.__webglTexture,s.TEXTURE0+T)}function be(k,T){const se=r.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&se.__version!==k.version){me(se,k,T);return}else k.isExternalTexture&&(se.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,se.__webglTexture,s.TEXTURE0+T)}function Ae(k,T){const se=r.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&se.__version!==k.version){me(se,k,T);return}t.bindTexture(s.TEXTURE_3D,se.__webglTexture,s.TEXTURE0+T)}function we(k,T){const se=r.get(k);if(k.version>0&&se.__version!==k.version){yt(se,k,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture,s.TEXTURE0+T)}const ze={[pa]:s.REPEAT,[si]:s.CLAMP_TO_EDGE,[Dd]:s.MIRRORED_REPEAT},qe={[kn]:s.NEAREST,[m_]:s.NEAREST_MIPMAP_NEAREST,[Sl]:s.NEAREST_MIPMAP_LINEAR,[ai]:s.LINEAR,[Zu]:s.LINEAR_MIPMAP_NEAREST,[Qr]:s.LINEAR_MIPMAP_LINEAR},ke={[__]:s.NEVER,[Pm]:s.ALWAYS,[y_]:s.LESS,[Rm]:s.LEQUAL,[S_]:s.EQUAL,[Nm]:s.GEQUAL,[b_]:s.GREATER,[w_]:s.NOTEQUAL};function Te(k,T){if(T.type===Ji&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===ai||T.magFilter===Zu||T.magFilter===Sl||T.magFilter===Qr||T.minFilter===ai||T.minFilter===Zu||T.minFilter===Sl||T.minFilter===Qr)&&wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(k,s.TEXTURE_WRAP_S,ze[T.wrapS]),s.texParameteri(k,s.TEXTURE_WRAP_T,ze[T.wrapT]),(k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY)&&s.texParameteri(k,s.TEXTURE_WRAP_R,ze[T.wrapR]),s.texParameteri(k,s.TEXTURE_MAG_FILTER,qe[T.magFilter]),s.texParameteri(k,s.TEXTURE_MIN_FILTER,qe[T.minFilter]),T.compareFunction&&(s.texParameteri(k,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(k,s.TEXTURE_COMPARE_FUNC,ke[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===kn||T.minFilter!==Sl&&T.minFilter!==Qr||T.type===Ji&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");s.texParameterf(k,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ue(k,T){let se=!1;k.__webglInit===void 0&&(k.__webglInit=!0,T.addEventListener("dispose",$),Z(T));const Pe=T.source;let Me=b.get(Pe);Me===void 0&&(Me={},b.set(Pe,Me));const Fe=ee(T);if(Fe!==k.__cacheKey){Me[Fe]===void 0&&(Me[Fe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,se=!0),Me[Fe].usedTimes++;const Ge=Me[k.__cacheKey];Ge!==void 0&&(Me[k.__cacheKey].usedTimes--,Ge.usedTimes===0&&Q(T)),k.__cacheKey=Fe,k.__webglTexture=Me[Fe].texture}return se}function Xe(k,T,se){return Math.floor(Math.floor(k/se)/T)}function mt(k,T,se,Pe){const Fe=k.updateRanges;if(Fe.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,se,Pe,T.data);else{Fe.sort((U,ae)=>U.start-ae.start);let Ge=0;for(let U=1;U<Fe.length;U++){const ae=Fe[Ge],oe=Fe[U],Re=ae.start+ae.count,Ce=Xe(oe.start,T.width,4),De=Xe(ae.start,T.width,4);oe.start<=Re+1&&Ce===De&&Xe(oe.start+oe.count-1,T.width,4)===Ce?ae.count=Math.max(ae.count,oe.start+oe.count-ae.start):(++Ge,Fe[Ge]=oe)}Fe.length=Ge+1;const ve=t.getParameter(s.UNPACK_ROW_LENGTH),ye=t.getParameter(s.UNPACK_SKIP_PIXELS),_e=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let U=0,ae=Fe.length;U<ae;U++){const oe=Fe[U],Re=Math.floor(oe.start/4),Ce=Math.ceil(oe.count/4),De=Re%T.width,$e=Math.floor(Re/T.width),at=Ce,Ne=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,De),t.pixelStorei(s.UNPACK_SKIP_ROWS,$e),t.texSubImage2D(s.TEXTURE_2D,0,De,$e,at,Ne,se,Pe,T.data)}k.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ve),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ye),t.pixelStorei(s.UNPACK_SKIP_ROWS,_e)}}function me(k,T,se){let Pe=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Pe=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Pe=s.TEXTURE_3D);const Me=Ue(k,T),Fe=T.source;t.bindTexture(Pe,k.__webglTexture,s.TEXTURE0+se);const Ge=r.get(Fe);if(Fe.version!==Ge.__version||Me===!0){if(t.activeTexture(s.TEXTURE0+se),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const Ne=zt.getPrimaries(zt.workingColorSpace),Qe=T.colorSpace===Jr?null:zt.getPrimaries(T.colorSpace),ot=T.colorSpace===Jr||Ne===Qe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot)}t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let ye=R(T.image,!1,o.maxTextureSize);ye=tt(T,ye);const _e=l.convert(T.format,T.colorSpace),U=l.convert(T.type);let ae=L(T.internalFormat,_e,U,T.normalized,T.colorSpace,T.isVideoTexture);Te(Pe,T);let oe;const Re=T.mipmaps,Ce=T.isVideoTexture!==!0,De=Ge.__version===void 0||Me===!0,$e=Fe.dataReady,at=N(T,ye);if(T.isDepthTexture)ae=w(T.format===es,T.type),De&&(Ce?t.texStorage2D(s.TEXTURE_2D,1,ae,ye.width,ye.height):t.texImage2D(s.TEXTURE_2D,0,ae,ye.width,ye.height,0,_e,U,null));else if(T.isDataTexture)if(Re.length>0){Ce&&De&&t.texStorage2D(s.TEXTURE_2D,at,ae,Re[0].width,Re[0].height);for(let Ne=0,Qe=Re.length;Ne<Qe;Ne++)oe=Re[Ne],Ce?$e&&t.texSubImage2D(s.TEXTURE_2D,Ne,0,0,oe.width,oe.height,_e,U,oe.data):t.texImage2D(s.TEXTURE_2D,Ne,ae,oe.width,oe.height,0,_e,U,oe.data);T.generateMipmaps=!1}else Ce?(De&&t.texStorage2D(s.TEXTURE_2D,at,ae,ye.width,ye.height),$e&&mt(T,ye,_e,U)):t.texImage2D(s.TEXTURE_2D,0,ae,ye.width,ye.height,0,_e,U,ye.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ce&&De&&t.texStorage3D(s.TEXTURE_2D_ARRAY,at,ae,Re[0].width,Re[0].height,ye.depth);for(let Ne=0,Qe=Re.length;Ne<Qe;Ne++)if(oe=Re[Ne],T.format!==Qi)if(_e!==null)if(Ce){if($e)if(T.layerUpdates.size>0){const ot=k0(oe.width,oe.height,T.format,T.type);for(const Be of T.layerUpdates){const ft=oe.data.subarray(Be*ot/oe.data.BYTES_PER_ELEMENT,(Be+1)*ot/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ne,0,0,Be,oe.width,oe.height,1,_e,ft)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ne,0,0,0,oe.width,oe.height,ye.depth,_e,oe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ne,ae,oe.width,oe.height,ye.depth,0,oe.data,0,0);else wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?$e&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Ne,0,0,0,oe.width,oe.height,ye.depth,_e,U,oe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Ne,ae,oe.width,oe.height,ye.depth,0,_e,U,oe.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Ce&&De&&t.texStorage2D(s.TEXTURE_2D,at,ae,Re[0].width,Re[0].height);for(let Ne=0,Qe=Re.length;Ne<Qe;Ne++)oe=Re[Ne],T.format!==Qi?_e!==null?Ce?$e&&t.compressedTexSubImage2D(s.TEXTURE_2D,Ne,0,0,oe.width,oe.height,_e,oe.data):t.compressedTexImage2D(s.TEXTURE_2D,Ne,ae,oe.width,oe.height,0,oe.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?$e&&t.texSubImage2D(s.TEXTURE_2D,Ne,0,0,oe.width,oe.height,_e,U,oe.data):t.texImage2D(s.TEXTURE_2D,Ne,ae,oe.width,oe.height,0,_e,U,oe.data)}else if(T.isDataArrayTexture)if(Ce){if(De&&t.texStorage3D(s.TEXTURE_2D_ARRAY,at,ae,ye.width,ye.height,ye.depth),$e)if(T.layerUpdates.size>0){const Ne=k0(ye.width,ye.height,T.format,T.type);for(const Qe of T.layerUpdates){const ot=ye.data.subarray(Qe*Ne/ye.data.BYTES_PER_ELEMENT,(Qe+1)*Ne/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Qe,ye.width,ye.height,1,_e,U,ot)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,_e,U,ye.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ae,ye.width,ye.height,ye.depth,0,_e,U,ye.data);else if(T.isData3DTexture)Ce?(De&&t.texStorage3D(s.TEXTURE_3D,at,ae,ye.width,ye.height,ye.depth),$e&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,_e,U,ye.data)):t.texImage3D(s.TEXTURE_3D,0,ae,ye.width,ye.height,ye.depth,0,_e,U,ye.data);else if(T.isFramebufferTexture){if(De)if(Ce)t.texStorage2D(s.TEXTURE_2D,at,ae,ye.width,ye.height);else{let Ne=ye.width,Qe=ye.height;for(let ot=0;ot<at;ot++)t.texImage2D(s.TEXTURE_2D,ot,ae,Ne,Qe,0,_e,U,null),Ne>>=1,Qe>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){const Ne=s.canvas;if(Ne.hasAttribute("layoutsubtree")||Ne.setAttribute("layoutsubtree","true"),ye.parentNode!==Ne){Ne.appendChild(ye),v.add(T),Ne.onpaint=Qe=>{const ot=Qe.changedElements;for(const Be of v)ot.includes(Be.image)&&(Be.needsUpdate=!0)},Ne.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ye);else{const ot=s.RGBA,Be=s.RGBA,ft=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ot,Be,ft,ye)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Ce&&De){const Ne=rt(Re[0]);t.texStorage2D(s.TEXTURE_2D,at,ae,Ne.width,Ne.height)}for(let Ne=0,Qe=Re.length;Ne<Qe;Ne++)oe=Re[Ne],Ce?$e&&t.texSubImage2D(s.TEXTURE_2D,Ne,0,0,_e,U,oe):t.texImage2D(s.TEXTURE_2D,Ne,ae,_e,U,oe);T.generateMipmaps=!1}else if(Ce){if(De){const Ne=rt(ye);t.texStorage2D(s.TEXTURE_2D,at,ae,Ne.width,Ne.height)}$e&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,_e,U,ye)}else t.texImage2D(s.TEXTURE_2D,0,ae,_e,U,ye);F(T)&&T.mipmapsAutoUpdate===!0&&D(Pe),Ge.__version=Fe.version,T.onUpdate&&T.onUpdate(T)}k.__version=T.version}function yt(k,T,se){if(T.image.length!==6)return;const Pe=Ue(k,T),Me=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+se);const Fe=r.get(Me);if(Me.version!==Fe.__version||Pe===!0){t.activeTexture(s.TEXTURE0+se);const Ge=zt.getPrimaries(zt.workingColorSpace),ve=T.colorSpace===Jr?null:zt.getPrimaries(T.colorSpace),ye=T.colorSpace===Jr||Ge===ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const _e=T.isCompressedTexture||T.image[0].isCompressedTexture,U=T.image[0]&&T.image[0].isDataTexture,ae=[];for(let Be=0;Be<6;Be++)!_e&&!U?ae[Be]=R(T.image[Be],!0,o.maxCubemapSize):ae[Be]=U?T.image[Be].image:T.image[Be],ae[Be]=tt(T,ae[Be]);const oe=ae[0],Re=l.convert(T.format,T.colorSpace),Ce=l.convert(T.type);let De=L(T.internalFormat,Re,Ce,T.normalized,T.colorSpace);const $e=T.isVideoTexture!==!0,at=Fe.__version===void 0||Pe===!0,Ne=Me.dataReady;let Qe=N(T,oe);Te(s.TEXTURE_CUBE_MAP,T);let ot;if(T.isDepthTexture){if(De=w(T.format===es,T.type),at)if($e)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,De,oe.width,oe.height);else for(let Be=0;Be<6;Be++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,De,oe.width,oe.height,0,Re,Ce,null)}else if(_e){$e&&at&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Qe,De,oe.width,oe.height);for(let Be=0;Be<6;Be++){ot=ae[Be].mipmaps;for(let ft=0;ft<ot.length;ft++){const vt=ot[ft];T.format!==Qi?Re!==null?$e?Ne&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,ft,0,0,vt.width,vt.height,Re,vt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,ft,De,vt.width,vt.height,0,vt.data):wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?Ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,ft,0,0,vt.width,vt.height,Re,Ce,vt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,ft,De,vt.width,vt.height,0,Re,Ce,vt.data)}}}else{if(ot=T.mipmaps,$e&&at){ot.length>0&&Qe++;const Be=rt(ae[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Qe,De,Be.width,Be.height)}for(let Be=0;Be<6;Be++)if(U){$e?Ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,0,0,ae[Be].width,ae[Be].height,Re,Ce,ae[Be].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,De,ae[Be].width,ae[Be].height,0,Re,Ce,ae[Be].data);for(let ft=0;ft<ot.length;ft++){const tn=ot[ft].image[Be].image;$e?Ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,ft+1,0,0,tn.width,tn.height,Re,Ce,tn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,ft+1,De,tn.width,tn.height,0,Re,Ce,tn.data)}}else{$e?Ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,0,0,Re,Ce,ae[Be]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,De,Re,Ce,ae[Be]);for(let ft=0;ft<ot.length;ft++){const vt=ot[ft];$e?Ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,ft+1,0,0,Re,Ce,vt.image[Be]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,ft+1,De,Re,Ce,vt.image[Be])}}}F(T)&&T.mipmapsAutoUpdate===!0&&D(s.TEXTURE_CUBE_MAP),Fe.__version=Me.version,T.onUpdate&&T.onUpdate(T)}k.__version=T.version}function Lt(k,T,se,Pe,Me,Fe){const Ge=l.convert(se.format,se.colorSpace),ve=l.convert(se.type),ye=L(se.internalFormat,Ge,ve,se.normalized,se.colorSpace),_e=r.get(T),U=r.get(se);if(U.__renderTarget=T,!_e.__hasExternalTextures){const ae=Math.max(1,T.width>>Fe),oe=Math.max(1,T.height>>Fe);Me===s.TEXTURE_3D||Me===s.TEXTURE_2D_ARRAY?t.texImage3D(Me,Fe,ye,ae,oe,T.depth,0,Ge,ve,null):t.texImage2D(Me,Fe,ye,ae,oe,0,Ge,ve,null)}t.bindFramebuffer(s.FRAMEBUFFER,k),he(T)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Pe,Me,U.__webglTexture,0,It(T)):(Me===s.TEXTURE_2D||Me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Pe,Me,U.__webglTexture,Fe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function on(k,T,se){if(s.bindRenderbuffer(s.RENDERBUFFER,k),T.depthBuffer){const Pe=T.depthTexture,Me=Pe&&Pe.isDepthTexture?Pe.type:null,Fe=w(T.stencilBuffer,Me),Ge=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;he(T)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,It(T),Fe,T.width,T.height):se?s.renderbufferStorageMultisample(s.RENDERBUFFER,It(T),Fe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ge,s.RENDERBUFFER,k)}else{const Pe=T.textures;for(let Me=0;Me<Pe.length;Me++){const Fe=Pe[Me],Ge=l.convert(Fe.format,Fe.colorSpace),ve=l.convert(Fe.type),ye=L(Fe.internalFormat,Ge,ve,Fe.normalized,Fe.colorSpace);he(T)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,It(T),ye,T.width,T.height):se?s.renderbufferStorageMultisample(s.RENDERBUFFER,It(T),ye,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ye,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ut(k,T,se){const Pe=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,k),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Me=r.get(T.depthTexture);Me.__renderTarget=T;const Fe=Pe?T.depthTexture.image[0]:T.depthTexture.image;(!Me.__webglTexture||Fe.width!==T.width||Fe.height!==T.height)&&(Fe.width=T.width,Fe.height=T.height,T.depthTexture.needsUpdate=!0),Pe?we(T.depthTexture,0):le(T.depthTexture,0);const Ge=Me.__webglTexture,ve=It(T),ye=Pe?s.TEXTURE_CUBE_MAP_POSITIVE_X+se:s.TEXTURE_2D,_e=T.depthTexture.format===es?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===ts)he(T)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,ye,Ge,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,_e,ye,Ge,0);else if(T.depthTexture.format===es)he(T)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,ye,Ge,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,_e,ye,Ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Zt(k){const T=r.get(k),se=k.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==k.depthTexture){const Pe=k.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Pe){const Me=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Pe.removeEventListener("dispose",Me)};Pe.addEventListener("dispose",Me),T.__depthDisposeCallback=Me}T.__boundDepthTexture=Pe}if(k.depthTexture&&!T.__autoAllocateDepthBuffer)if(se)for(let Pe=0;Pe<6;Pe++)Ut(T.__webglFramebuffer[Pe],k,Pe);else k.texture.mipmaps.length>0?Ut(T.__webglFramebuffer[0],k,0):Ut(T.__webglFramebuffer,k,0);else if(se){T.__webglDepthbuffer=[];for(let Pe=0;Pe<6;Pe++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[Pe]),T.__webglDepthbuffer[Pe]===void 0)T.__webglDepthbuffer[Pe]=s.createRenderbuffer(),on(T.__webglDepthbuffer[Pe],k,!1);else{const Me=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Fe=T.__webglDepthbuffer[Pe];s.bindRenderbuffer(s.RENDERBUFFER,Fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,Fe)}}else if(k.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),on(T.__webglDepthbuffer,k,!1);else{const Me=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Fe=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,Fe)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function jt(k,T,se){const Pe=r.get(k);T!==void 0&&Lt(Pe.__webglFramebuffer,k,k.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),se!==void 0&&Zt(k)}function ln(k){const T=k.texture,se=r.get(k),Pe=r.get(T);k.addEventListener("dispose",z),Z(k);const Me=k.textures,Fe=k.isWebGLCubeRenderTarget===!0,Ge=Me.length>1;if(Ge||(Pe.__webglTexture===void 0&&(Pe.__webglTexture=s.createTexture()),Pe.__version=T.version,u.memory.textures++),Fe){se.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(T.mipmaps.length>0){se.__webglFramebuffer[ve]=[];for(let ye=0;ye<T.mipmaps.length;ye++)se.__webglFramebuffer[ve][ye]=s.createFramebuffer()}else se.__webglFramebuffer[ve]=s.createFramebuffer()}else{if(T.mipmaps.length>0){se.__webglFramebuffer=[];for(let ve=0;ve<T.mipmaps.length;ve++)se.__webglFramebuffer[ve]=s.createFramebuffer()}else se.__webglFramebuffer=s.createFramebuffer();if(Ge)for(let ve=0,ye=Me.length;ve<ye;ve++){const _e=r.get(Me[ve]);_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture(),u.memory.textures++)}if(k.samples>0&&he(k)===!1){se.__webglMultisampledFramebuffer=s.createFramebuffer(),se.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let ve=0;ve<Me.length;ve++){const ye=Me[ve];se.__webglColorRenderbuffer[ve]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,se.__webglColorRenderbuffer[ve]);const _e=l.convert(ye.format,ye.colorSpace),U=l.convert(ye.type),ae=L(ye.internalFormat,_e,U,ye.normalized,ye.colorSpace,k.isXRRenderTarget===!0),oe=It(k);s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,ae,k.width,k.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,se.__webglColorRenderbuffer[ve])}s.bindRenderbuffer(s.RENDERBUFFER,null),k.depthBuffer&&(se.__webglDepthRenderbuffer=s.createRenderbuffer(),on(se.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Fe){t.bindTexture(s.TEXTURE_CUBE_MAP,Pe.__webglTexture),Te(s.TEXTURE_CUBE_MAP,T);for(let ve=0;ve<6;ve++)if(T.mipmaps.length>0)for(let ye=0;ye<T.mipmaps.length;ye++)Lt(se.__webglFramebuffer[ve][ye],k,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ye);else Lt(se.__webglFramebuffer[ve],k,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);F(T)?D(s.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(Ge){for(let ve=0,ye=Me.length;ve<ye;ve++){const _e=Me[ve],U=r.get(_e);let ae=s.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(ae=k.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ae,U.__webglTexture),Te(ae,_e),Lt(se.__webglFramebuffer,k,_e,s.COLOR_ATTACHMENT0+ve,ae,0),F(_e)&&D(ae)}t.unbindTexture()}else{let ve=s.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(ve=k.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ve,Pe.__webglTexture),Te(ve,T),T.mipmaps.length>0)for(let ye=0;ye<T.mipmaps.length;ye++)Lt(se.__webglFramebuffer[ye],k,T,s.COLOR_ATTACHMENT0,ve,ye);else Lt(se.__webglFramebuffer,k,T,s.COLOR_ATTACHMENT0,ve,0);F(T)?D(ve):T.mipmaps.length>0&&s.texParameteri(ve,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}k.depthBuffer&&Zt(k)}function K(k){const T=k.textures;for(let se=0,Pe=T.length;se<Pe;se++){const Me=T[se];if(F(Me)&&Me.mipmapsAutoUpdate===!0){const Fe=I(k),Ge=r.get(Me).__webglTexture;t.bindTexture(Fe,Ge),D(Fe),t.unbindTexture()}}}const Ft=[];function _t(k){if(k.samples>0){if(he(k)===!1){const T=k.textures,se=k.width,Pe=k.height;let Me=s.COLOR_BUFFER_BIT;const Fe=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ge=r.get(k),ve=T.length>1;if(ve)for(let _e=0;_e<T.length;_e++)t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),k.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let _e=0;_e<T.length;_e++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(Me|=s.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(Me|=s.STENCIL_BUFFER_BIT)),ve){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[_e]);const U=r.get(T[_e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,U,0)}s.blitFramebuffer(0,0,se,Pe,0,0,se,Pe,Me,s.NEAREST),d===!0&&(Ft.length=0,Ft.push(s.COLOR_ATTACHMENT0+_e),k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&Ft.push(Fe),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ft))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ve)for(let _e=0;_e<T.length;_e++){t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[_e]);const U=r.get(T[_e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,U,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&d){const T=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function It(k){return Math.min(o.maxSamples,k.samples)}function he(k){const T=r.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Mt(k){const T=u.render.frame;g.get(k)!==T&&(g.set(k,T),k.update())}function tt(k,T){const se=k.colorSpace,Pe=k.format,Me=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||se!==nc&&se!==Jr&&(zt.getTransfer(se)===qt?(Pe!==Qi||Me!==mi)&&wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",se)),T}function rt(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(m.width=k.naturalWidth||k.width,m.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(m.width=k.displayWidth,m.height=k.displayHeight):(m.width=k.width,m.height=k.height),m}this.allocateTextureUnit=Ee,this.resetTextureUnits=H,this.getTextureUnits=P,this.setTextureUnits=q,this.setTexture2D=le,this.setTexture2DArray=be,this.setTexture3D=Ae,this.setTextureCube=we,this.rebindTextures=jt,this.setupRenderTarget=ln,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=he,this.dispose=j}function Jw(s,e){function t(r,o=Jr){let l;const u=zt.getTransfer(o);if(r===mi)return s.UNSIGNED_BYTE;if(r===yf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Sf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Mm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Em)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===bm)return s.BYTE;if(r===wm)return s.SHORT;if(r===uo)return s.UNSIGNED_SHORT;if(r===_f)return s.INT;if(r===tr)return s.UNSIGNED_INT;if(r===Ji)return s.FLOAT;if(r===nr)return s.HALF_FLOAT;if(r===Tm)return s.ALPHA;if(r===Am)return s.RGB;if(r===Qi)return s.RGBA;if(r===ts)return s.DEPTH_COMPONENT;if(r===es)return s.DEPTH_STENCIL;if(r===Cm)return s.RED;if(r===bf)return s.RED_INTEGER;if(r===Ts)return s.RG;if(r===wf)return s.RG_INTEGER;if(r===Mf)return s.RGBA_INTEGER;if(r===jl||r===$l||r===Xl||r===Yl)if(u===qt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===jl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===$l)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Yl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===jl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===$l)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Yl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ld||r===Id||r===kd||r===Ud)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Ld)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Id)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===kd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ud)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Fd||r===zd||r===Od||r===Bd||r===Hd||r===ec||r===Gd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Fd||r===zd)return u===qt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Od)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Bd)return l.COMPRESSED_R11_EAC;if(r===Hd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===ec)return l.COMPRESSED_RG11_EAC;if(r===Gd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Vd||r===Wd||r===jd||r===$d||r===Xd||r===Yd||r===qd||r===Kd||r===Zd||r===Jd||r===Qd||r===ef||r===tf||r===nf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Vd)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wd)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===jd)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===$d)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xd)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Yd)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===qd)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Kd)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Zd)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Jd)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qd)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ef)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===tf)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===nf)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===rf||r===sf||r===af)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===rf)return u===qt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===sf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===af)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===of||r===lf||r===tc||r===cf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===of)return l.COMPRESSED_RED_RGTC1_EXT;if(r===lf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===tc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===cf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ma?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const Qw=`
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

}`;class tM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Bm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ei({vertexShader:Qw,fragmentShader:eM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Sn(new vo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nM extends As{constructor(e,t){super();const r=this;let o=null,l=1,u=null,p="local-floor",d=1,m=null,g=null,v=null,_=null,b=null,E=null;const C=typeof XRWebGLBinding<"u",y=new tM,S={},R=t.getContextAttributes();let F=null,D=null;const I=[],L=[],w=new kt;let N=null,Z=null;const V=new zi;V.viewport=new fn;const $=new zi;$.viewport=new fn;const z=[V,$],B=new py;let W=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let le=I[ee];return le===void 0&&(le=new ad,I[ee]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ee){let le=I[ee];return le===void 0&&(le=new ad,I[ee]=le),le.getGripSpace()},this.getHand=function(ee){let le=I[ee];return le===void 0&&(le=new ad,I[ee]=le),le.getHandSpace()};function ce(ee){const le=L.indexOf(ee.inputSource);if(le===-1)return;const be=I[le];be!==void 0&&(be.update(ee.inputSource,ee.frame,m||u),be.dispatchEvent({type:ee.type,data:ee.inputSource}))}function Q(){o.removeEventListener("select",ce),o.removeEventListener("selectstart",ce),o.removeEventListener("selectend",ce),o.removeEventListener("squeeze",ce),o.removeEventListener("squeezestart",ce),o.removeEventListener("squeezeend",ce),o.removeEventListener("end",Q),o.removeEventListener("inputsourceschange",Y);for(let ee=0;ee<I.length;ee++){const le=L[ee];le!==null&&(L[ee]=null,I[ee].disconnect(le))}W=null,j=null,y.reset();for(const ee in S)delete S[ee];if(e.setRenderTarget(F),b=null,_=null,v=null,o=null,D=null,Ee.stop(),r.isPresenting=!1,e.setPixelRatio(N),e.setSize(w.width,w.height,!1),Z!==null){const ee=Z.camera;ee.fov=Z.fov,ee.zoom=Z.zoom,ee.updateProjectionMatrix(),Z=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){l=ee,r.isPresenting===!0&&wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){p=ee,r.isPresenting===!0&&wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(ee){m=ee},this.getBaseLayer=function(){return _!==null?_:b},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(ee){if(o=ee,o!==null){if(F=e.getRenderTarget(),o.addEventListener("select",ce),o.addEventListener("selectstart",ce),o.addEventListener("selectend",ce),o.addEventListener("squeeze",ce),o.addEventListener("squeezestart",ce),o.addEventListener("squeezeend",ce),o.addEventListener("end",Q),o.addEventListener("inputsourceschange",Y),R.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(w),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Ae=null,we=null;R.depth&&(we=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=R.stencil?es:ts,Ae=R.stencil?ma:tr);const ze={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:l};v=this.getBinding(),_=v.createProjectionLayer(ze),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),D=new er(_.textureWidth,_.textureHeight,{format:Qi,type:mi,depthTexture:new ga(_.textureWidth,_.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const be={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:l};b=new XRWebGLLayer(o,t,be),o.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),D=new er(b.framebufferWidth,b.framebufferHeight,{format:Qi,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1,storeMultisampledDepthBuffer:b.ignoreDepthValues===!1,storeMultisampledStencilBuffer:b.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(d),m=null,u=await o.requestReferenceSpace(p),Ee.setContext(o),Ee.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Y(ee){for(let le=0;le<ee.removed.length;le++){const be=ee.removed[le],Ae=L.indexOf(be);Ae>=0&&(L[Ae]=null,I[Ae].disconnect(be))}for(let le=0;le<ee.added.length;le++){const be=ee.added[le];let Ae=L.indexOf(be);if(Ae===-1){for(let ze=0;ze<I.length;ze++)if(ze>=L.length){L.push(be),Ae=ze;break}else if(L[ze]===null){L[ze]=be,Ae=ze;break}if(Ae===-1)break}const we=I[Ae];we&&we.connect(be)}}function X(ee,le){le===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(le.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(o===null)return;let le=ee.near,be=ee.far;y.texture!==null&&(y.depthNear>0&&(le=y.depthNear),y.depthFar>0&&(be=y.depthFar)),B.near=$.near=V.near=le,B.far=$.far=V.far=be,(W!==B.near||j!==B.far)&&(o.updateRenderState({depthNear:B.near,depthFar:B.far}),W=B.near,j=B.far),B.layers.mask=ee.layers.mask|6,V.layers.mask=B.layers.mask&-5,$.layers.mask=B.layers.mask&-3;const Ae=ee.parent,we=B.cameras;X(B,Ae);for(let ze=0;ze<we.length;ze++)X(we[ze],Ae);B.projectionMatrix.copy(V.projectionMatrix),B.projectionMatrixInverse.copy(V.projectionMatrixInverse),Z===null&&ee.isPerspectiveCamera&&(Z={camera:ee,fov:ee.fov,zoom:ee.zoom}),H(ee,B,Ae)};function H(ee,le,be){be===null?ee.matrix.copy(le.matrixWorld):(ee.matrix.copy(be.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(le.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(le.projectionMatrix),ee.projectionMatrixInverse.copy(le.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=df*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(_===null&&b===null))return d},this.setFoveation=function(ee){d=ee,_!==null&&(_.fixedFoveation=ee),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=ee)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(B)},this.getCameraTexture=function(ee){return S[ee]};let P=null;function q(ee,le){if(g=le.getViewerPose(m||u),E=le,g!==null){const be=g.views;b!==null&&(e.setRenderTargetFramebuffer(D,b.framebuffer),e.setRenderTarget(D));let Ae=!1;be.length!==B.cameras.length&&(B.cameras.length=0,Ae=!0);for(let ke=0;ke<be.length;ke++){const Te=be[ke];let Ue=null;if(b!==null)Ue=b.getViewport(Te);else{const mt=v.getViewSubImage(_,Te);Ue=mt.viewport,ke===0&&(e.setRenderTargetTextures(D,mt.colorTexture,mt.depthStencilTexture),e.setRenderTarget(D))}let Xe=z[ke];Xe===void 0&&(Xe=new zi,Xe.layers.enable(ke),Xe.viewport=new fn,z[ke]=Xe),Xe.matrix.fromArray(Te.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Te.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),ke===0&&(B.matrix.copy(Xe.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ae===!0&&B.cameras.push(Xe)}const we=o.enabledFeatures;if(we&&we.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){v=r.getBinding();const ke=v.getDepthInformation(be[0]);ke&&ke.isValid&&ke.texture&&y.init(ke,o.renderState)}if(we&&we.includes("camera-access")&&C){e.state.unbindTexture(),v=r.getBinding();for(let ke=0;ke<be.length;ke++){const Te=be[ke].camera;if(Te){let Ue=S[Te];Ue||(Ue=new Bm,S[Te]=Ue);const Xe=v.getCameraImage(Te);Ue.sourceTexture=Xe}}}}for(let be=0;be<I.length;be++){const Ae=L[be],we=I[be];Ae!==null&&we!==void 0&&we.update(Ae,le,m||u)}P&&P(ee,le),le.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:le}),E=null}const Ee=new jm;Ee.setAnimationLoop(q),this.setAnimationLoop=function(ee){P=ee},this.dispose=function(){}}}const iM=new hn,tg=new Tt;tg.set(-1,0,0,0,1,0,0,0,1);function rM(s,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,Hm(s)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function o(y,S,R,F,D){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?l(y,S):S.isMeshLambertMaterial?(l(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(y,S),v(y,S)):S.isMeshPhongMaterial?(l(y,S),g(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(y,S),_(y,S),S.isMeshPhysicalMaterial&&b(y,S,D)):S.isMeshMatcapMaterial?(l(y,S),E(y,S)):S.isMeshDepthMaterial?l(y,S):S.isMeshDistanceMaterial?(l(y,S),C(y,S)):S.isMeshNormalMaterial?l(y,S):S.isLineBasicMaterial?(u(y,S),S.isLineDashedMaterial&&p(y,S)):S.isPointsMaterial?d(y,S,R,F):S.isSpriteMaterial?m(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Un&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Un&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const R=e.get(S),F=R.envMap,D=R.envMapRotation;F&&(y.envMap.value=F,y.envMapRotation.value.setFromMatrix4(iM.makeRotationFromEuler(D)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(tg),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function u(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function p(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function d(y,S,R,F){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*R,y.scale.value=F*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function m(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function g(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function _(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function b(y,S,R){y.ior.value=S.ior,S.diffuseRoughness>0&&(y.diffuseRoughness.value=S.diffuseRoughness,S.diffuseRoughnessMap&&(y.diffuseRoughnessMap.value=S.diffuseRoughnessMap,t(S.diffuseRoughnessMap,y.diffuseRoughnessMapTransform))),S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Un&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.retroreflectivity>0&&(y.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessMinimum,y.iridescenceThicknessMaximum.value=S.iridescenceThicknessMaximum,S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,S){S.matcap&&(y.matcap.value=S.matcap)}function C(y,S){const R=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function sM(s,e,t,r){let o={},l={};function u(R,F){const D=F.program;r.uniformBlockBinding(R,D,o[R.id])}function p(R,F){let D=o[R.id];D===void 0&&(E(R),D=d(R),o[R.id]=D,R.addEventListener("dispose",y));const I=F.program;r.updateUBOMapping(R,I);const L=e.render.frame;l[R.id]!==L&&(m(R),l[R.id]=L)}function d(R){const F=s.createBuffer(),D=R.__size,I=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,F),s.bufferData(s.UNIFORM_BUFFER,D,I),s.bindBuffer(s.UNIFORM_BUFFER,null),F}function m(R){const F=o[R.id],D=R.uniforms,I=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,F);for(let L=0,w=D.length;L<w;L++){const N=D[L];if(Array.isArray(N))for(let Z=0,V=N.length;Z<V;Z++)g(N[Z],L,Z,I);else g(N,L,0,I)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function g(R,F,D,I){if(_(R,F,D,I)===!0){const L=R.__offset,w=R.value;if(Array.isArray(w)){let N=0;for(let Z=0;Z<w.length;Z++){const V=w[Z],$=C(V,!0);v(V,R.__data,N),N+=$.storage/Float32Array.BYTES_PER_ELEMENT}}else v(w,R.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,L,R.__data)}}function v(R,F,D){typeof R=="number"||typeof R=="boolean"?F[D]=R:R.isMatrix3?(F[D]=R.elements[0],F[D+1]=R.elements[1],F[D+2]=R.elements[2],F[D+3]=0,F[D+4]=R.elements[3],F[D+5]=R.elements[4],F[D+6]=R.elements[5],F[D+7]=0,F[D+8]=R.elements[6],F[D+9]=R.elements[7],F[D+10]=R.elements[8],F[D+11]=0):ArrayBuffer.isView(R)?F.set(R.subarray(0,F.length-D),D):R.toArray(F,D)}function _(R,F,D,I){const L=R.value,w=F+"_"+D;if(Array.isArray(L)){I[w]===void 0&&(I[w]=[]);const N=I[w];let Z=!1;for(let V=0;V<L.length;V++)b(L[V],N,V)===!0&&(Z=!0);return Z}return b(L,I,w)}function b(R,F,D){if(F[D]===void 0)return typeof R=="number"||typeof R=="boolean"?F[D]=R:ArrayBuffer.isView(R)?F[D]=R.slice():F[D]=R.clone(),!0;{const I=F[D];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return F[D]=R,!0}else{if(ArrayBuffer.isView(R))return!0;if(I.equals(R)===!1)return I.copy(R),!0}}return!1}function E(R){const F=R.uniforms;let D=0;const I=16;for(let w=0,N=F.length;w<N;w++){const Z=Array.isArray(F[w])?F[w]:[F[w]];for(let V=0,$=Z.length;V<$;V++){const z=Z[V],B=Array.isArray(z.value)?z.value:[z.value],W=Array.isArray(F[w])||Array.isArray(z.value);let j=D;for(let Q=0,Y=B.length;Q<Y;Q++){const X=B[Q],H=C(X,W),P=D%I,q=P%H.boundary,Ee=P+q;D+=q,Ee!==0&&I-Ee<H.storage&&(D+=I-Ee),Q===0&&(j=D),D+=H.storage}const ce=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new ce((D-j)/Float32Array.BYTES_PER_ELEMENT),z.__offset=j}}const L=D%I;return L>0&&(D+=I-L),R.__size=D,R.__cache={},this}function C(R,F){const D={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(D.boundary=4,D.storage=4):R.isVector2?(D.boundary=8,D.storage=8):R.isVector3||R.isColor?(D.boundary=16,D.storage=12):R.isVector4?(D.boundary=16,D.storage=16):R.isMatrix3?(D.boundary=16,D.storage=48):R.isMatrix4?(D.boundary=16,D.storage=64):R.isTexture?wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(D.boundary=16,D.storage=R.byteLength):wt("WebGLRenderer: Unsupported uniform value type.",R),F===!0&&(D.boundary=16,D.storage=Math.ceil(D.storage/16)*16),D}function y(R){const F=R.target;F.removeEventListener("dispose",y),s.deleteBuffer(o[F.id]),delete o[F.id],delete l[F.id]}function S(){for(const R in o)s.deleteBuffer(o[R]);o={},l={}}return{bind:u,update:p,dispose:S}}const aM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qi=null;function oM(){return qi===null&&(qi=new ty(aM,16,16,Ts,nr),qi.name="DFG_LUT",qi.minFilter=ai,qi.magFilter=ai,qi.wrapS=si,qi.wrapT=si,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}class lM{constructor(e={}){const{canvas:t=T_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:p=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:b=mi}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const C=b,y=new Set([Mf,wf,bf]),S=new Set([mi,tr,uo,ma,yf,Sf]),R=new Uint32Array(4),F=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]};let I=null,L=null;const w=[],N=[];let Z=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let $=!1,z=null,B=null,W=null,j=null;this._outputColorSpace=pi;let ce=0,Q=0,Y=null,X=-1,H=null;const P=new fn,q=new fn;let Ee=null;const ee=new Dt(0);let le=0,be=t.width,Ae=t.height,we=1,ze=null,qe=null;const ke=new fn(0,0,be,Ae),Te=new fn(0,0,be,Ae);let Ue=!1;const Xe=new ho,mt=new Cf;let me=!1,yt=!1;const Lt=new hn,on=new pe,Ut=new fn,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function ln(){return Y===null?we:1}let K=r;function Ft(M,O){return t.getContext(M,O)}let _t,It,he,Mt,tt,rt,k,T,se,Pe,Me,Fe,Ge,ve,ye,_e,U,ae,oe,Re,Ce,De,$e;try{const M={alpha:!0,depth:o,stencil:l,antialias:p,premultipliedAlpha:d,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vf}`),t.addEventListener("webglcontextlost",Qe,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",Be,!1),K===null){const O="webgl2";if(K=Ft(O,M),K===null)throw Ft(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}at()}catch(M){throw t.removeEventListener("webglcontextlost",Qe,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),Xt("WebGLRenderer: "+M.message),M}function at(){_t=new db(K),_t.init(),Ce=new Jw(K,_t),It=new eb(K,_t,e,Ce),he=new Kw(K,_t),It.reversedDepthBuffer&&_&&he.buffers.depth.setReversed(!0),B=K.createFramebuffer(),W=K.createFramebuffer(),j=K.createFramebuffer(),Mt=new pb(K),tt=new Uw,rt=new Zw(K,_t,he,tt,It,Ce,Mt),k=new ub(V),T=new gy(K),De=new JS(K,T),se=new fb(K,T,Mt,De),Pe=new gb(K,se,T,De,Mt),ae=new mb(K,It,rt),ye=new tb(tt),Me=new kw(V,k,_t,It,De,ye),Fe=new rM(V,tt),Ge=new zw,ve=new Ww(_t),U=new ZS(V,k,he,Pe,E,d),_e=new qw(V,Pe,It),$e=new sM(K,Mt,It,he),oe=new QS(K,_t,Mt),Re=new hb(K,_t,Mt),Mt.programs=Me.programs,V.capabilities=It,V.extensions=_t,V.properties=tt,V.renderLists=Ge,V.shadowMap=_e,V.state=he,V.info=Mt}C!==mi&&(Z=new vb(C,t.width,t.height,p,o,l));const Ne=new nM(V,K);this.xr=Ne,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const M=_t.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=_t.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return we},this.setPixelRatio=function(M){M!==void 0&&(we=M,this.setSize(be,Ae,!1))},this.getSize=function(M){return M.set(be,Ae)},this.setSize=function(M,O,ne=!0){if(Ne.isPresenting){wt("WebGLRenderer: Can't change size while VR device is presenting.");return}be=M,Ae=O,t.width=Math.floor(M*we),t.height=Math.floor(O*we),ne===!0&&(t.style.width=M+"px",t.style.height=O+"px"),Z!==null&&Z.setSize(t.width,t.height),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(be*we,Ae*we).floor()},this.setDrawingBufferSize=function(M,O,ne){be=M,Ae=O,we=ne,t.width=Math.floor(M*ne),t.height=Math.floor(O*ne),this.setViewport(0,0,M,O)},this.setEffects=function(M){if(C===mi){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let O=0;O<M.length;O++)if(M[O].isOutputPass===!0){wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Z.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(ke)},this.setViewport=function(M,O,ne,ie){M.isVector4?ke.set(M.x,M.y,M.z,M.w):ke.set(M,O,ne,ie),he.viewport(P.copy(ke).multiplyScalar(ln()).round())},this.getScissor=function(M){return M.copy(Te)},this.setScissor=function(M,O,ne,ie){M.isVector4?Te.set(M.x,M.y,M.z,M.w):Te.set(M,O,ne,ie),he.scissor(q.copy(Te).multiplyScalar(ln()).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(M){he.setScissorTest(Ue=M)},this.setOpaqueSort=function(M){ze=M},this.setTransparentSort=function(M){qe=M},this.getClearColor=function(M){return M.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,ne=!0){let ie=0;if(M){let re=!1;if(Y!==null){const Ve=Y.texture.format;re=y.has(Ve)}if(re){const Ve=Y.texture.type,Ke=S.has(Ve),He=U.getClearColor(),We=U.getClearAlpha(),nt=He.r,fe=He.g,ht=He.b;Ke?(R[0]=nt,R[1]=fe,R[2]=ht,R[3]=We,K.clearBufferuiv(K.COLOR,0,R)):(F[0]=nt,F[1]=fe,F[2]=ht,F[3]=We,K.clearBufferiv(K.COLOR,0,F))}else ie|=K.COLOR_BUFFER_BIT}O&&(ie|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ne&&(ie|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&K.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),z=M},this.dispose=function(){t.removeEventListener("webglcontextlost",Qe,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),U.dispose(),Ge.dispose(),ve.dispose(),rt.dispose(),tt.dispose(),k.dispose(),Pe.dispose(),se.dispose(),De.dispose(),$e.dispose(),Me.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",pt),Ne.removeEventListener("sessionend",Et),Yt.stop()};function Qe(M){M.preventDefault(),p0("WebGLRenderer: Context Lost."),$=!0}function ot(){p0("WebGLRenderer: Context Restored."),$=!1;const M=Mt.autoReset,O=_e.enabled,ne=_e.autoUpdate,ie=_e.needsUpdate,re=_e.type;at(),Mt.autoReset=M,_e.enabled=O,_e.autoUpdate=ne,_e.needsUpdate=ie,_e.type=re}function Be(M){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ft(M){const O=M.target;O.removeEventListener("dispose",ft),vt(O)}function vt(M){tn(M),tt.remove(M)}function tn(M){const O=tt.get(M).programs;O!==void 0&&(O.forEach(function(ne){Me.releaseProgram(ne)}),M.isShaderMaterial&&Me.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,ne,ie,re,Ve){O===null&&(O=Zt);const Ke=re.isMesh&&re.matrixWorld.determinantAffine()<0,He=ar(M,O,ne,ie,re);he.setMaterial(ie,Ke);let We=ne.index,nt=1;if(ie.wireframe===!0){if(We=se.getWireframeAttribute(ne),We===void 0)return;nt=2}const fe=ne.drawRange,ht=ne.attributes.position;let Ye=fe.start*nt,At=(fe.start+fe.count)*nt;Ve!==null&&(Ye=Math.max(Ye,Ve.start*nt),At=Math.min(At,(Ve.start+Ve.count)*nt)),We!==null?(Ye=Math.max(Ye,0),At=Math.min(At,We.count)):ht!=null&&(Ye=Math.max(Ye,0),At=Math.min(At,ht.count));const Jt=At-Ye;if(Jt<0||Jt===1/0)return;De.setup(re,ie,He,ne,We);let Gt,Bt=oe;if(We!==null&&(Gt=T.get(We),Bt=Re,Bt.setIndex(Gt)),re.isMesh)ie.wireframe===!0?(he.setLineWidth(ie.wireframeLinewidth*ln()),Bt.setMode(K.LINES)):Bt.setMode(K.TRIANGLES);else if(re.isLine){let nn=ie.linewidth;nn===void 0&&(nn=1),he.setLineWidth(nn*ln()),re.isLineSegments?Bt.setMode(K.LINES):re.isLineLoop?Bt.setMode(K.LINE_LOOP):Bt.setMode(K.LINE_STRIP)}else re.isPoints?Bt.setMode(K.POINTS):re.isSprite&&Bt.setMode(K.TRIANGLES);if(re.isBatchedMesh)if(_t.get("WEBGL_multi_draw"))Bt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const nn=re._multiDrawStarts,it=re._multiDrawCounts,gn=re._multiDrawCount,ct=We?T.get(We).bytesPerElement:1,gi=tt.get(ie).currentProgram.getUniforms();for(let xn=0;xn<gn;xn++)gi.setValue(K,"_gl_DrawID",xn),Bt.render(nn[xn]/ct,it[xn])}else if(re.isInstancedMesh)Bt.renderInstances(Ye,Jt,re.count);else if(ne.isInstancedBufferGeometry){const nn=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,it=Math.min(ne.instanceCount,nn);Bt.renderInstances(Ye,Jt,it)}else Bt.render(Ye,Jt)};function bn(M,O,ne,ie){z!==null&&M.isNodeMaterial&&z.setObject(ie,M),me===!0&&ye.setState(M,ne,!1),M.transparent===!0&&M.side===Bi&&M.forceSinglePass===!1?(M.side=Un,M.needsUpdate=!0,Ti(M,O,ie),M.side=Es,M.needsUpdate=!0,Ti(M,O,ie),M.side=Bi):Ti(M,O,ie)}this.compile=function(M,O,ne=null){ne===null&&(ne=M),z!==null&&z.renderStart(M,O,ne),L=ve.get(ne),L.init(O),N.push(L),ne.traverseVisible(function(re){re.isLight&&re.layers.test(O.layers)&&(L.pushLight(re),re.castShadow&&L.pushShadow(re))}),M!==ne&&M.traverseVisible(function(re){re.isLight&&re.layers.test(O.layers)&&(L.pushLight(re),re.castShadow&&L.pushShadow(re))}),L.setupLights(),z!==null&&z.updateLights(L.state.lightsArray),yt=this.localClippingEnabled,me=ye.init(this.clippingPlanes,yt),me===!0&&ye.setGlobalState(this.clippingPlanes,O),z!==null&&_e.render(L.state.shadowsArray,ne,O);const ie=new Set;return M.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Ve=re.material;if(Ve)if(Array.isArray(Ve))for(let Ke=0;Ke<Ve.length;Ke++){const He=Ve[Ke];bn(He,ne,O,re),ie.add(He)}else bn(Ve,ne,O,re),ie.add(Ve)}),L=N.pop(),z!==null&&z.renderEnd(),ie},this.compileAsync=function(M,O,ne=null){const ie=this.compile(M,O,ne);return new Promise(re=>{function Ve(){if(ie.forEach(function(Ke){const We=tt.get(Ke).currentProgram;(We===void 0||We.isReady())&&ie.delete(Ke)}),ie.size===0){re(M);return}setTimeout(Ve,10)}_t.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let mn=null;function St(M){mn&&mn(M)}function pt(){Yt.stop()}function Et(){Yt.start()}const Yt=new jm;Yt.setAnimationLoop(St),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(M){mn=M,Ne.setAnimationLoop(M),M===null?Yt.stop():Yt.start()},Ne.addEventListener("sessionstart",pt),Ne.addEventListener("sessionend",Et),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;z!==null&&z.renderStart(M,O);const ne=Ne.enabled===!0&&Ne.isPresenting===!0,ie=Z!==null&&(Y===null||ne)&&Z.begin(V,Y);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(Z===null||Z.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(O),O=Ne.getCamera()),M.isScene===!0&&M.onBeforeRender(V,M,O,Y),L=ve.get(M,N.length),L.init(O),L.state.textureUnits=rt.getTextureUnits(),N.push(L),Lt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?mt.setFromArrayCamera(O):Xe.setFromProjectionMatrix(Lt,Gi,O.reversedDepth),yt=this.localClippingEnabled,me=ye.init(this.clippingPlanes,yt),I=Ge.get(M,w.length),I.init(),w.push(I),this.info.render.frame++,Ne.enabled===!0&&Ne.isPresenting===!0){const Ke=V.xr.getDepthSensingMesh();Ke!==null&&$t(Ke,O,-1/0,V.sortObjects)}$t(M,O,0,V.sortObjects),I.finish(),z!==null&&z.updateLights(L.state.lightsArray),V.sortObjects===!0&&I.sort(ze,qe),jt=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,jt&&U.addToRenderList(I,M),this.info.autoReset===!0&&this.info.reset(),me===!0&&ye.beginShadows();const re=L.state.shadowsArray;if(_e.render(re,M,O),me===!0&&ye.endShadows(),(ie&&Z.hasRenderPass())===!1){const Ke=I.opaque,He=I.transmissive;if(L.setupLights(),O.isArrayCamera){const We=O.cameras;if(He.length>0)for(let nt=0,fe=We.length;nt<fe;nt++){const ht=We[nt];Yn(Ke,He,M,ht)}jt&&U.render(M);for(let nt=0,fe=We.length;nt<fe;nt++){const ht=We[nt];Fn(I,M,ht,ht.viewport)}}else He.length>0&&Yn(Ke,He,M,O),jt&&U.render(M),Fn(I,M,O)}Y!==null&&Q===0&&(rt.updateMultisampleRenderTarget(Y),rt.updateRenderTargetMipmap(Y)),ie&&Z.end(V),M.isScene===!0&&M.onAfterRender(V,M,O),De.resetDefaultState(),X=-1,H=null,N.pop(),N.length>0?(L=N[N.length-1],rt.setTextureUnits(L.state.textureUnits),me===!0&&ye.setGlobalState(V.clippingPlanes,L.state.camera)):L=null,w.pop(),w.length>0?I=w[w.length-1]:I=null,z!==null&&z.renderEnd()};function $t(M,O,ne,ie){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)ne=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)L.pushLight(M),M.castShadow&&L.pushShadow(M);else if(M.isSprite){const Ke=O.isArrayCamera?mt:Xe;if(!M.frustumCulled||M.intersectsFrustum(Ke)){ie&&Ut.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Lt);const He=Pe.update(M),We=M.material;We.visible&&I.push(M,He,We,ne,Ut.z,null,O)}}else if(M.isMesh||M.isLine||M.isPoints){const Ke=O.isArrayCamera?mt:Xe;if(!M.frustumCulled||M.intersectsFrustum(Ke)){const He=Pe.update(M),We=M.material;if(ie&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ut.copy(M.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),Ut.copy(He.boundingSphere.center)),Ut.applyMatrix4(M.matrixWorld).applyMatrix4(Lt)),Array.isArray(We)){const nt=He.groups;for(let fe=0,ht=nt.length;fe<ht;fe++){const Ye=nt[fe],At=We[Ye.materialIndex];At&&At.visible&&I.push(M,He,At,ne,Ut.z,Ye,O)}}else We.visible&&I.push(M,He,We,ne,Ut.z,null,O)}}}const Ve=M.children;for(let Ke=0,He=Ve.length;Ke<He;Ke++)$t(Ve[Ke],O,ne,ie)}function Fn(M,O,ne,ie){const{opaque:re,transmissive:Ve,transparent:Ke}=M;L.setupLightsView(ne),me===!0&&ye.setGlobalState(V.clippingPlanes,ne),ie&&he.viewport(P.copy(ie)),re.length>0&&zn(re,O,ne),Ve.length>0&&zn(Ve,O,ne),Ke.length>0&&zn(Ke,O,ne),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Yn(M,O,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ie.id]===void 0){const Ye=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ie.id]=new er(1,1,{generateMipmaps:!0,type:Ye?nr:mi,minFilter:Qr,samples:Math.max(4,It.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:zt.workingColorSpace})}const Ve=L.state.transmissionRenderTarget[ie.id],Ke=ie.viewport||P;Ve.setSize(Ke.z*V.transmissionResolutionScale,Ke.w*V.transmissionResolutionScale);const He=V.getRenderTarget(),We=V.getActiveCubeFace(),nt=V.getActiveMipmapLevel();V.setRenderTarget(Ve),V.getClearColor(ee),le=V.getClearAlpha(),le<1&&V.setClearColor(16777215,.5),V.clear(),jt&&U.render(ne);const fe=V.toneMapping;V.toneMapping=Er;const ht=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),L.setupLightsView(ie),me===!0&&ye.setGlobalState(V.clippingPlanes,ie),zn(M,ne,ie),rt.updateMultisampleRenderTarget(Ve),rt.updateRenderTargetMipmap(Ve),_t.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let At=0,Jt=O.length;At<Jt;At++){const Gt=O[At],{object:Bt,geometry:nn,material:it,group:gn}=Gt;if(it.side===Bi&&Bt.layers.test(ie.layers)){const ct=it.side;it.side=Un,it.needsUpdate=!0,qn(Bt,ne,ie,nn,it,gn),it.side=ct,it.needsUpdate=!0,Ye=!0}}Ye===!0&&(rt.updateMultisampleRenderTarget(Ve),rt.updateRenderTargetMipmap(Ve))}V.setRenderTarget(He,We,nt),V.setClearColor(ee,le),ht!==void 0&&(ie.viewport=ht),V.toneMapping=fe}function zn(M,O,ne){const ie=O.isScene===!0?O.overrideMaterial:null;for(let re=0,Ve=M.length;re<Ve;re++){const Ke=M[re],{object:He,geometry:We,group:nt}=Ke;let fe=Ke.material;fe.allowOverride===!0&&ie!==null&&(fe=ie),He.layers.test(ne.layers)&&qn(He,O,ne,We,fe,nt)}}function qn(M,O,ne,ie,re,Ve){z!==null&&re.isNodeMaterial&&z.setObject(M,re),M.onBeforeRender(V,O,ne,ie,re,Ve),M.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),re.onBeforeRender(V,O,ne,ie,M,Ve),re.transparent===!0&&re.side===Bi&&re.forceSinglePass===!1?(re.side=Un,re.needsUpdate=!0,V.renderBufferDirect(ne,O,ie,re,M,Ve),re.side=Es,re.needsUpdate=!0,V.renderBufferDirect(ne,O,ie,re,M,Ve),re.side=Bi):V.renderBufferDirect(ne,O,ie,re,M,Ve),M.onAfterRender(V,O,ne,ie,re,Ve)}function rr(M){let O=0;for(const ne of M)ne.texture!==null&&O++;return O}function Ti(M,O,ne){O.isScene!==!0&&(O=Zt);const ie=tt.get(M),re=L.state.lights,Ve=L.state.shadowsArray,Ke=re.state.version,He=Me.getParameters(M,re.state,Ve,O,ne,L.state.lightProbeGridArray),We=Me.getProgramCacheKey(He);let nt=ie.programs;ie.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?O.environment:null,ie.fog=O.fog;const fe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;ie.envMap=k.get(M.envMap||ie.environment,fe),ie.envMapRotation=ie.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,nt===void 0&&(M.addEventListener("dispose",ft),nt=new Map,ie.programs=nt,ie.programVariants=new Map);let ht=nt.get(We);if(ht!==void 0){if(ie.currentProgram===ht&&ie.lightsStateVersion===Ke)return sr(M,He),ht}else He.uniforms=Me.getUniforms(M),z!==null&&M.isNodeMaterial&&z.build(M,ne,He),M.onBeforeCompile(He,V),ht=Me.acquireProgram(He,We),nt.set(We,ht),ie.uniforms=He.uniforms;const Ye=ie.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ye.clippingPlanes=ye.uniform),sr(M,He),ie.needsLights=ge(M),ie.lightsStateVersion=Ke,ie.needsLights&&(Ye.ambientLightColor.value=re.state.ambient,Ye.lightProbe.value=re.state.probe,Ye.sunLights.value=re.state.sun,Ye.sunLightShadows.value=re.state.sunShadow,Ye.directionalLights.value=re.state.directional,Ye.directionalLightShadows.value=re.state.directionalShadow,Ye.spotLights.value=re.state.spot,Ye.spotLightShadows.value=re.state.spotShadow,Ye.rectAreaLights.value=re.state.rectArea,Ye.ltc_1.value=re.state.rectAreaLTC1,Ye.ltc_2.value=re.state.rectAreaLTC2,Ye.pointLights.value=re.state.point,Ye.pointLightShadows.value=re.state.pointShadow,Ye.hemisphereLights.value=re.state.hemi,Ye.sunShadowMatrix.value=re.state.sunShadowMatrix,Ye.sunShadowCascade.value=re.state.sunShadowCascade,Ye.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Ye.spotLightMatrix.value=re.state.spotLightMatrix,Ye.spotLightMap.value=re.state.spotLightMap,Ye.pointShadowMatrix.value=re.state.pointShadowMatrix),ie.numLightProbeGrids=rr(L.state.lightProbeGridArray),ie.currentProgram=ht,ie.uniformsList=null,ht}function rs(M,O,ne,ie,re){const Ve=tt.get(M),Ke=Ve.currentProgram.id+","+ie+","+re;let He=Ve.programVariants.get(Ke);return He===void 0?(He=Ti(M,O,ne),Ve.programVariants.set(Ke,He)):(Ve.currentProgram=He,Ve.uniformsList=null,Ve.outputColorSpace=ie,Ve.toneMapping=re),He}function Kt(M){if(M.uniformsList===null){const O=M.currentProgram.getUniforms();M.uniformsList=Zl.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function sr(M,O){const ne=tt.get(M);ne.outputColorSpace=O.outputColorSpace,ne.batching=O.batching,ne.batchingColor=O.batchingColor,ne.instancing=O.instancing,ne.instancingColor=O.instancingColor,ne.instancingMorph=O.instancingMorph,ne.skinning=O.skinning,ne.morphTargets=O.morphTargets,ne.morphNormals=O.morphNormals,ne.morphColors=O.morphColors,ne.morphTargetsCount=O.morphTargetsCount,ne.numClippingPlanes=O.numClippingPlanes,ne.numIntersection=O.numClipIntersection,ne.vertexAlphas=O.vertexAlphas,ne.vertexTangents=O.vertexTangents,ne.toneMapping=O.toneMapping}function ar(M,O,ne,ie,re){O.isScene!==!0&&(O=Zt),rt.resetTextureUnits();const Ve=O.fog,Ke=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?O.environment:null,He=Y===null?V.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:zt.workingColorSpace,We=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,nt=k.get(ie.envMap||Ke,We),fe=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,ht=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ye=!!ne.morphAttributes.position,At=!!ne.morphAttributes.normal,Jt=!!ne.morphAttributes.color;let Gt=Er;ie.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Gt=V.toneMapping);const Bt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,nn=Bt!==void 0?Bt.length:0,it=tt.get(ie),gn=L.state.lights;if(me===!0&&(yt===!0||M!==H)){const Vt=M===H&&ie.id===X;ye.setState(ie,M,Vt)}let ct=!1,gi=!1;ie.version===it.__version?it.needsLights&&it.lightsStateVersion!==gn.state.version||re.isBatchedMesh&&it.batching===!1||!re.isBatchedMesh&&it.batching===!0||re.isBatchedMesh&&it.batchingColor===!0&&re._colorsTexture===null||re.isBatchedMesh&&it.batchingColor===!1&&re._colorsTexture!==null||re.isInstancedMesh&&it.instancing===!1||!re.isInstancedMesh&&it.instancing===!0||re.isSkinnedMesh&&it.skinning===!1||!re.isSkinnedMesh&&it.skinning===!0||re.isInstancedMesh&&it.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&it.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&it.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&it.instancingMorph===!1&&re.morphTexture!==null||it.envMap!==nt||ie.fog===!0&&it.fog!==Ve||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==ye.numPlanes||it.numIntersection!==ye.numIntersection)||it.vertexAlphas!==fe||it.vertexTangents!==ht||it.morphTargets!==Ye||it.morphNormals!==At||it.morphColors!==Jt||it.morphTargetsCount!==nn||it.numLightProbeGrids!==rr(L.state.lightProbeGridArray)?ct=!0:(it.outputColorSpace!==He||it.toneMapping!==Gt)&&(gi=!0):(ct=!0,it.__version=ie.version);let xn=it.currentProgram;(ct===!0||gi===!0)&&(xn=gi===!0?rs(ie,O,re,He,Gt):Ti(ie,O,re),z&&ie.isNodeMaterial&&z.onUpdateProgram(ie,xn,it));let Vi=!1,oi=!1,xi=!1;const Nt=xn.getUniforms(),cn=it.uniforms;if(he.useProgram(xn.program)&&(Vi=!0,oi=!0,xi=!0),ie.id!==X&&(X=ie.id,oi=!0),Vi||H!==M){he.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Nt.setValue(K,"projectionMatrix",M.projectionMatrix),Nt.setValue(K,"viewMatrix",M.matrixWorldInverse);const Qt=Nt.map.cameraPosition;Qt!==void 0&&Qt.setValue(K,on.setFromMatrixPosition(M.matrixWorld)),It.logarithmicDepthBuffer&&Nt.setValue(K,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Nt.setValue(K,"isOrthographic",M.isOrthographicCamera===!0),H!==M&&(H=M,oi=!0,xi=!0)}if(it.needsLights&&(gn.state.sunShadowMap.length>0&&Nt.setValue(K,"sunShadowMap",gn.state.sunShadowMap,rt),gn.state.directionalShadowMap.length>0&&Nt.setValue(K,"directionalShadowMap",gn.state.directionalShadowMap,rt),gn.state.spotShadowMap.length>0&&Nt.setValue(K,"spotShadowMap",gn.state.spotShadowMap,rt),gn.state.pointShadowMap.length>0&&Nt.setValue(K,"pointShadowMap",gn.state.pointShadowMap,rt)),re.isSkinnedMesh){Nt.setOptional(K,re,"bindMatrix"),Nt.setOptional(K,re,"bindMatrixInverse");const Vt=re.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),Nt.setValue(K,"boneTexture",Vt.boneTexture,rt))}re.isBatchedMesh&&(Nt.setOptional(K,re,"batchingTexture"),Nt.setValue(K,"batchingTexture",re._matricesTexture,rt),Nt.setOptional(K,re,"batchingIdTexture"),Nt.setValue(K,"batchingIdTexture",re._indirectTexture,rt),Nt.setOptional(K,re,"batchingColorTexture"),re._colorsTexture!==null&&Nt.setValue(K,"batchingColorTexture",re._colorsTexture,rt));const On=ne.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&ae.update(re,ne,xn),(oi||it.receiveShadow!==re.receiveShadow)&&(it.receiveShadow=re.receiveShadow,Nt.setValue(K,"receiveShadow",re.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&O.environment!==null&&(cn.envMapIntensity.value=O.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=oM()),oi){if(Nt.setValue(K,"toneMappingExposure",V.toneMappingExposure),it.needsLights&&Ar(cn,xi),Ve&&ie.fog===!0&&Fe.refreshFogUniforms(cn,Ve),Fe.refreshMaterialUniforms(cn,ie,we,Ae,L.state.transmissionRenderTarget[M.id]),it.needsLights&&it.numLightProbeGrids>0){const Vt=D;let Qt=0;for(const An of L.state.lightProbeGridArray)An.texture!==null&&(Vt.textures[Qt]=An.texture,Vt.min[Qt]=An.boundingBox.min,Vt.max[Qt]=An.boundingBox.max,Vt.resolution[Qt]=An.resolution,Qt++);for(const An in Vt)Vt[An].length=Qt;cn.probesSH.value=Vt.textures,cn.probesMin.value=Vt.min,cn.probesMax.value=Vt.max,cn.probesResolution.value=Vt.resolution}Zl.upload(K,Kt(it),cn,rt)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Zl.upload(K,Kt(it),cn,rt),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Nt.setValue(K,"center",re.center),Nt.setValue(K,"modelViewMatrix",re.modelViewMatrix),Nt.setValue(K,"normalMatrix",re.normalMatrix),Nt.setValue(K,"modelMatrix",re.matrixWorld),ie.uniformsGroups!==void 0){const Vt=ie.uniformsGroups;for(let Qt=0,An=Vt.length;Qt<An;Qt++){const Cr=Vt[Qt];$e.update(Cr,xn),$e.bind(Cr,xn)}}return xn}function Ar(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.sunLights.needsUpdate=O,M.sunLightShadows.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function ge(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(M,O,ne){const ie=tt.get(M);ie.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),tt.get(M.texture).__webglTexture=O,tt.get(M.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ne,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){const ne=tt.get(M);ne.__webglFramebuffer=O,ne.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(M,O=0,ne=0){Y=M,ce=O,Q=ne;let ie=null,re=!1,Ve=!1;if(M){const He=tt.get(M);if(He.__useDefaultFramebuffer!==void 0){he.bindFramebuffer(K.FRAMEBUFFER,He.__webglFramebuffer),P.copy(M.viewport),q.copy(M.scissor),Ee=M.scissorTest,he.viewport(P),he.scissor(q),he.setScissorTest(Ee),X=-1;return}else if(He.__webglFramebuffer===void 0)rt.setupRenderTarget(M);else if(He.__hasExternalTextures)rt.rebindTextures(M,tt.get(M.texture).__webglTexture,tt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const fe=M.depthTexture;if(He.__boundDepthTexture!==fe){if(fe!==null&&tt.has(fe)&&(M.width!==fe.image.width||M.height!==fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(M)}}const We=M.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ve=!0);const nt=tt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(nt[O])?ie=nt[O][ne]:ie=nt[O],re=!0):M.samples>0&&rt.useMultisampledRTT(M)===!1?ie=tt.get(M).__webglMultisampledFramebuffer:Array.isArray(nt)?ie=nt[ne]:ie=nt,P.copy(M.viewport),q.copy(M.scissor),Ee=M.scissorTest}else P.copy(ke).multiplyScalar(we).floor(),q.copy(Te).multiplyScalar(we).floor(),Ee=Ue;if(ne!==0&&(ie=B),he.bindFramebuffer(K.FRAMEBUFFER,ie)&&he.drawBuffers(M,ie),he.viewport(P),he.scissor(q),he.setScissorTest(Ee),re){const He=tt.get(M.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+O,He.__webglTexture,ne)}else if(Ve){const He=O;for(let We=0;We<M.textures.length;We++){const nt=tt.get(M.textures[We]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+We,nt.__webglTexture,ne,He)}}else if(M!==null&&ne!==0){const He=tt.get(M.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,He.__webglTexture,ne)}X=-1};function Je(M){const O=tt.get(M);return(O.__readFormat!==M.format||O.__readType!==M.type)&&(O.__readFormat=M.format,O.__readType=M.type,O.__formatReadable=It.textureFormatReadable(M.format),O.__typeReadable=It.textureTypeReadable(M.type)),O}this.readRenderTargetPixels=function(M,O,ne,ie,re,Ve,Ke,He=0){if(!(M&&M.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=tt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ke!==void 0&&(We=We[Ke],Array.isArray(We)&&(We=We[0])),We){he.bindFramebuffer(K.FRAMEBUFFER,We);try{const nt=M.textures[He],fe=nt.format,ht=nt.type;M.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+He);const Ye=Je(nt);if(Ye.__formatReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ye.__typeReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-ie&&ne>=0&&ne<=M.height-re&&K.readPixels(O,ne,ie,re,Ce.convert(fe),Ce.convert(ht),Ve)}finally{const nt=Y!==null?tt.get(Y).__webglFramebuffer:null;he.bindFramebuffer(K.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(M,O,ne,ie,re,Ve,Ke,He=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=tt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ke!==void 0&&(We=We[Ke],Array.isArray(We)&&(We=We[0])),We)if(O>=0&&O<=M.width-ie&&ne>=0&&ne<=M.height-re){he.bindFramebuffer(K.FRAMEBUFFER,We);const nt=M.textures[He],fe=nt.format,ht=nt.type;M.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+He);const Ye=Je(nt);if(Ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const At=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,At),K.bufferData(K.PIXEL_PACK_BUFFER,Ve.byteLength,K.STREAM_READ),K.readPixels(O,ne,ie,re,Ce.convert(fe),Ce.convert(ht),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null);const Jt=Y!==null?tt.get(Y).__webglFramebuffer:null;he.bindFramebuffer(K.FRAMEBUFFER,Jt);const Gt=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await A_(K,Gt,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,At),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Ve),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(At),K.deleteSync(Gt),Ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,ne=0){const ie=Math.pow(2,-ne),re=Math.floor(M.image.width*ie),Ve=Math.floor(M.image.height*ie),Ke=O!==null?O.x:0,He=O!==null?O.y:0;rt.setTexture2D(M,0),K.copyTexSubImage2D(K.TEXTURE_2D,ne,0,0,Ke,He,re,Ve),he.unbindTexture()},this.copyTextureToTexture=function(M,O,ne=null,ie=null,re=0,Ve=0){let Ke,He,We,nt,fe,ht,Ye,At,Jt;const Gt=M.isCompressedTexture?M.mipmaps[Ve]:M.image;if(ne!==null)Ke=ne.max.x-ne.min.x,He=ne.max.y-ne.min.y,We=ne.isBox3?ne.max.z-ne.min.z:1,nt=ne.min.x,fe=ne.min.y,ht=ne.isBox3?ne.min.z:0;else{const Nt=Math.pow(2,-re);Ke=Math.floor(Gt.width*Nt),He=Math.floor(Gt.height*Nt),M.isDataArrayTexture?We=Gt.depth:M.isData3DTexture?We=Math.floor(Gt.depth*Nt):We=1,nt=0,fe=0,ht=0}ie!==null?(Ye=ie.x,At=ie.y,Jt=ie.z):(Ye=0,At=0,Jt=0);const Bt=Ce.convert(O.format),nn=Ce.convert(O.type);let it;O.isData3DTexture?(rt.setTexture3D(O,0),it=K.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(rt.setTexture2DArray(O,0),it=K.TEXTURE_2D_ARRAY):(rt.setTexture2D(O,0),it=K.TEXTURE_2D),he.activeTexture(K.TEXTURE0),he.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,O.flipY),he.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),he.pixelStorei(K.UNPACK_ALIGNMENT,O.unpackAlignment);const gn=he.getParameter(K.UNPACK_ROW_LENGTH),ct=he.getParameter(K.UNPACK_IMAGE_HEIGHT),gi=he.getParameter(K.UNPACK_SKIP_PIXELS),xn=he.getParameter(K.UNPACK_SKIP_ROWS),Vi=he.getParameter(K.UNPACK_SKIP_IMAGES);he.pixelStorei(K.UNPACK_ROW_LENGTH,Gt.width),he.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Gt.height),he.pixelStorei(K.UNPACK_SKIP_PIXELS,nt),he.pixelStorei(K.UNPACK_SKIP_ROWS,fe),he.pixelStorei(K.UNPACK_SKIP_IMAGES,ht);const oi=M.isDataArrayTexture||M.isData3DTexture,xi=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){const Nt=tt.get(M),cn=tt.get(O),On=tt.get(Nt.__renderTarget),Vt=tt.get(cn.__renderTarget);he.bindFramebuffer(K.READ_FRAMEBUFFER,On.__webglFramebuffer),he.bindFramebuffer(K.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let Qt=0;Qt<We;Qt++)oi&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,tt.get(M).__webglTexture,re,ht+Qt),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,tt.get(O).__webglTexture,Ve,Jt+Qt)),K.blitFramebuffer(nt,fe,nt+Ke,fe+He,Ye,At,Ye+Ke,At+He,K.DEPTH_BUFFER_BIT,K.NEAREST);he.bindFramebuffer(K.READ_FRAMEBUFFER,null),he.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(re!==0||M.isRenderTargetTexture||tt.has(M)){const Nt=tt.get(M),cn=tt.get(O);he.bindFramebuffer(K.READ_FRAMEBUFFER,W),he.bindFramebuffer(K.DRAW_FRAMEBUFFER,j);for(let On=0;On<We;On++)oi?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Nt.__webglTexture,re,ht+On):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Nt.__webglTexture,re),xi?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,cn.__webglTexture,Ve,Jt+On):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,cn.__webglTexture,Ve),re!==0?K.blitFramebuffer(nt,fe,nt+Ke,fe+He,Ye,At,Ye+Ke,At+He,K.COLOR_BUFFER_BIT,K.NEAREST):xi?K.copyTexSubImage3D(it,Ve,Ye,At,Jt+On,nt,fe,Ke,He):K.copyTexSubImage2D(it,Ve,Ye,At,nt,fe,Ke,He);he.bindFramebuffer(K.READ_FRAMEBUFFER,null),he.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else xi?M.isDataTexture||M.isData3DTexture?K.texSubImage3D(it,Ve,Ye,At,Jt,Ke,He,We,Bt,nn,Gt.data):O.isCompressedArrayTexture?K.compressedTexSubImage3D(it,Ve,Ye,At,Jt,Ke,He,We,Bt,Gt.data):K.texSubImage3D(it,Ve,Ye,At,Jt,Ke,He,We,Bt,nn,Gt):M.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Ve,Ye,At,Ke,He,Bt,nn,Gt.data):M.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Ve,Ye,At,Gt.width,Gt.height,Bt,Gt.data):K.texSubImage2D(K.TEXTURE_2D,Ve,Ye,At,Ke,He,Bt,nn,Gt);he.pixelStorei(K.UNPACK_ROW_LENGTH,gn),he.pixelStorei(K.UNPACK_IMAGE_HEIGHT,ct),he.pixelStorei(K.UNPACK_SKIP_PIXELS,gi),he.pixelStorei(K.UNPACK_SKIP_ROWS,xn),he.pixelStorei(K.UNPACK_SKIP_IMAGES,Vi),Ve===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&K.generateMipmap(it),he.unbindTexture()},this.initRenderTarget=function(M){tt.get(M).__webglFramebuffer===void 0&&rt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?rt.setTextureCube(M,0):M.isData3DTexture?rt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?rt.setTexture2DArray(M,0):rt.setTexture2D(M,0),he.unbindTexture()},this.resetState=function(){ce=0,Q=0,Y=null,he.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=zt._getDrawingBufferColorSpace(e),t.unpackColorSpace=zt._getUnpackColorSpace()}}function cM(s,e){const t=document.createElement("canvas");t.width=2048,t.height=1024;const r=t.getContext("2d");let o;e?s==="celestial-cyan"?o=["#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#f0f9ff","#dbeafe"]:s==="supernova-sunset"?o=["#fff1f2","#fecdd3","#fda4af","#fb7185","#e11d48","#9f1239","#fff7ed","#fed7aa"]:s==="nocturne-silver"?o=["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#71717a","#ffffff","#e4e4e7"]:s==="cyberpunk-neon"?o=["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#d946ef","#c026d3","#a21caf"]:s==="solar-gold"?o=["#fffbeb","#fef3c7","#fde68a","#fcd34d","#f59e0b","#d97706","#b45309","#78350f"]:s==="emerald-aurora"?o=["#f0fdf4","#dcfce7","#bbf7d0","#86efac","#4ade80","#22c55e","#16a34a","#15803d"]:s==="pure-pitch-black"?o=["#ffffff","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#71717a","#3f3f46","#18181b"]:o=["#fffbeb","#fef3c7","#fde68a","#fcd34d","#f59e0b","#d97706","#fff7ed","#ffedd5"]:s==="celestial-cyan"?o=["#020b14","#041d33","#083358","#0e4a7d","#0284c7","#38bdf8","#075985","#0c4a6e","#06b6d4"]:s==="supernova-sunset"?o=["#12040d","#2b061c","#4a0a2f","#771146","#be123c","#f43f5e","#ea580c","#fb923c","#450a22"]:s==="nocturne-silver"?o=["#060609","#111119","#1e1e2d","#2f2f45","#4d4d6e","#7b7b9e","#a6a6c7","#252538","#d4d4e8"]:s==="cyberpunk-neon"?o=["#080014","#16002c","#2c004d","#550080","#9333ea","#db2777","#f43f5e","#06b6d4","#22d3ee"]:s==="solar-gold"?o=["#0d0500","#1f0c00","#3b1700","#5e2500","#92400e","#d97706","#f59e0b","#fbbf24","#fef08a"]:s==="emerald-aurora"?o=["#020d06","#052110","#0a381d","#14532d","#16a34a","#22c55e","#4ade80","#10b981","#34d399"]:s==="pure-pitch-black"?o=["#000000","#050505","#0a0a0a","#121212","#1a1a1a","#262626","#404040","#737373","#a3a3a3"]:o=["#080415","#150933","#270e59","#3e1785","#5b21b6","#7c3aed","#a855f7","#c084fc","#2e1065","#d8b4fe"];const l=r.createLinearGradient(0,0,0,t.height);o.forEach((_,b)=>{l.addColorStop(b/(o.length-1),_)}),r.fillStyle=l,r.fillRect(0,0,t.width,t.height);const u=72;for(let _=0;_<u;_++){const E=_/u*t.height,C=t.height/u*(1.2+Math.sin(_*.7)*.5),y=o[_*3%o.length];r.fillStyle=y,r.globalAlpha=.25+Math.sin(_*.9)*.2,r.beginPath(),r.moveTo(0,E);const S=32;for(let R=0;R<=S;R++){const F=R/S*t.width,D=Math.sin(R*.8+_*1.5)*7+Math.cos(R*1.6+_*2.1)*4;r.lineTo(F,E+D)}r.lineTo(t.width,E+C),r.lineTo(0,E+C),r.closePath(),r.fill()}r.globalAlpha=e?.25:.4,r.fillStyle="#ffffff";for(let _=0;_<48;_++){const b=Math.random()*t.width,E=Math.random()*t.height,C=60+Math.random()*180,y=1.5+Math.random()*3.5;r.beginPath(),r.ellipse(b,E,C,y,Math.sin(E*.05)*.15,0,Math.PI*2),r.fill()}const p=t.width*.62,d=t.height*.58,m=85,g=r.createRadialGradient(p,d,5,p,d,m);e?(g.addColorStop(0,"#ffffff"),g.addColorStop(.4,o[o.length-2]),g.addColorStop(.8,o[o.length-1]),g.addColorStop(1,"rgba(255,255,255,0)")):(g.addColorStop(0,"#ffffff"),g.addColorStop(.3,o[o.length-3]||"#c084fc"),g.addColorStop(.7,o[o.length-1]||"#7c3aed"),g.addColorStop(1,"rgba(0,0,0,0)")),r.globalAlpha=.85,r.fillStyle=g,r.beginPath(),r.ellipse(p,d,m*1.6,m*.8,-.15,0,Math.PI*2),r.fill(),r.strokeStyle=e?"rgba(200, 150, 100, 0.45)":"rgba(255, 255, 255, 0.60)",r.lineWidth=2.5;for(let _=0;_<3;_++){r.beginPath();for(let b=0;b<Math.PI*2;b+=.2){const E=b/(Math.PI*2)*m*.7,C=p+Math.cos(b+_*2.1)*E*1.5,y=d+Math.sin(b+_*2.1)*E*.7;b===0?r.moveTo(C,y):r.lineTo(C,y)}r.stroke()}const v=new dc(t);return v.wrapS=pa,v.wrapT=si,v}function uM(s,e){const t=document.createElement("canvas");t.width=1024,t.height=64;const r=t.getContext("2d");r.clearRect(0,0,t.width,t.height);let o,l;e?(o="rgba(217, 119, 6, 0.45)",l="rgba(245, 158, 11, 0.85)"):s==="celestial-cyan"?(o="rgba(56, 189, 248, 0.45)",l="rgba(186, 230, 253, 0.90)"):s==="supernova-sunset"?(o="rgba(251, 146, 60, 0.45)",l="rgba(254, 205, 211, 0.90)"):s==="nocturne-silver"?(o="rgba(212, 212, 216, 0.45)",l="rgba(255, 255, 255, 0.90)"):s==="cyberpunk-neon"?(o="rgba(6, 182, 212, 0.50)",l="rgba(244, 63, 94, 0.95)"):s==="solar-gold"?(o="rgba(245, 158, 11, 0.50)",l="rgba(254, 240, 138, 0.95)"):s==="emerald-aurora"?(o="rgba(16, 185, 129, 0.45)",l="rgba(110, 231, 183, 0.90)"):s==="pure-pitch-black"?(o="rgba(115, 115, 115, 0.35)",l="rgba(245, 245, 245, 0.90)"):(o="rgba(192, 132, 252, 0.50)",l="rgba(243, 232, 255, 0.92)");for(let p=0;p<t.width;p++){const d=p/t.width;let m=0;d<.22?m=.12+Math.sin(d*60)*.08:d>=.22&&d<.65?m=.75+Math.sin(d*120)*.18+Math.cos(d*240)*.06:d>=.65&&d<.72?m=.02:d>=.72&&d<.95?d>.85&&d<.87?m=.05:m=.55+Math.sin(d*100)*.15:m=.2+Math.sin(d*200)*.15,r.fillStyle=m>.6?l:o,r.globalAlpha=Math.max(0,Math.min(1,m)),r.fillRect(p,0,1,t.height)}const u=new dc(t);return u.wrapS=si,u.wrapT=si,u}function dM(s){const e=document.createElement("canvas");e.width=2048,e.height=1024;const t=e.getContext("2d");t.fillStyle=s?"#d6d3d1":"#888899",t.fillRect(0,0,e.width,e.height),t.fillStyle=s?"#a8a29e":"#474755",[{x:.35,y:.4,rx:240,ry:160},{x:.55,y:.35,rx:280,ry:190},{x:.7,y:.45,rx:200,ry:140},{x:.4,y:.65,rx:220,ry:150},{x:.6,y:.6,rx:260,ry:180}].forEach(u=>{t.globalAlpha=.65,t.beginPath(),t.ellipse(u.x*e.width,u.y*e.height,u.rx,u.ry,.2,0,Math.PI*2),t.fill()});const o=320;for(let u=0;u<o;u++){const p=Math.random()*e.width,d=Math.random()*e.height,m=4+Math.random()*32;if(t.globalAlpha=.55,t.fillStyle=s?"#57534e":"#22222a",t.beginPath(),t.arc(p,d,m,0,Math.PI*2),t.fill(),t.globalAlpha=.7,t.strokeStyle=s?"#ffffff":"#e2e8f0",t.lineWidth=Math.max(1,m*.2),t.beginPath(),t.arc(p,d,m,Math.PI*.75,Math.PI*1.75),t.stroke(),m>24){t.globalAlpha=.25,t.strokeStyle=s?"#ffffff":"#cbd5e1",t.lineWidth=1;for(let g=0;g<8;g++){const v=g/8*Math.PI*2,_=m*(3+Math.random()*5);t.beginPath(),t.moveTo(p+Math.cos(v)*m,d+Math.sin(v)*m),t.lineTo(p+Math.cos(v)*_,d+Math.sin(v)*_),t.stroke()}}}const l=new dc(e);return l.wrapS=pa,l.wrapT=si,l}function fM(s){const e=document.createElement("canvas");e.width=2048,e.height=1024;const t=e.getContext("2d");t.fillStyle=s?"#991b1b":"#450a0a",t.fillRect(0,0,e.width,e.height),t.fillStyle=s?"#7f1d1d":"#1c0404",[{x:.35,y:.4,rx:240,ry:160},{x:.55,y:.35,rx:280,ry:190},{x:.7,y:.45,rx:200,ry:140},{x:.4,y:.65,rx:220,ry:150},{x:.6,y:.6,rx:260,ry:180}].forEach(u=>{t.globalAlpha=.75,t.beginPath(),t.ellipse(u.x*e.width,u.y*e.height,u.rx,u.ry,.2,0,Math.PI*2),t.fill()});const o=280;for(let u=0;u<o;u++){const p=Math.random()*e.width,d=Math.random()*e.height,m=4+Math.random()*30;t.globalAlpha=.6,t.fillStyle="#1c0404",t.beginPath(),t.arc(p,d,m,0,Math.PI*2),t.fill(),t.globalAlpha=.85,t.strokeStyle="#f87171",t.lineWidth=Math.max(1,m*.2),t.beginPath(),t.arc(p,d,m,Math.PI*.75,Math.PI*1.75),t.stroke()}const l=new dc(e);return l.wrapS=pa,l.wrapT=si,l}const hM=()=>{const s=Se.useRef(null),{wallpaperSettings:e,appTheme:t}=is(),r=e.celestialBody||"ringed-planet",o=e.palette||"cosmic-royal",l=t==="light";return Se.useEffect(()=>{if(!s.current)return;if(r==="none"){s.current.innerHTML="";return}const u=s.current;u.innerHTML="";const p=u.clientWidth||window.innerWidth,d=u.clientHeight||window.innerHeight,m=p<768,g=new $_,v=new zi(45,p/d,.1,100);v.position.set(0,0,10);const _=new lM({alpha:!0,antialias:!0,powerPreference:"high-performance"});_.setSize(p,d),_.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),_.outputColorSpace=pi,u.appendChild(_.domElement);const b=new fy(l?16775149:16777215,l?2.8:2.5);g.add(b);const E=new hy(l?14870768:o==="celestial-cyan"?662832:o==="cyberpunk-neon"?2031672:o==="solar-gold"?2363651:o==="emerald-aurora"?270096:o==="pure-pitch-black"?197379:1577516,l?.7:.4);g.add(E);const C=new ro;g.add(C);let y=3.4,S=1.8,R=.65;const F=e.celestialPosition||"default";F==="upper-right"?(y=m?1.2:3.4,S=m?2.3:1.8,b.position.set(-8,5,4)):F==="upper-left"?(y=m?-1.2:-3.3,S=m?2.5:2,b.position.set(-8,2,-2)):F==="zenith-center"?(y=0,S=m?2.5:2.4,b.position.set(0,0,4)):r==="ringed-planet"||r==="pulsar-star"?(y=m?1.2:3.4,S=m?2.3:1.8,R=m?.48:.68,b.position.set(-8,5,4)):r==="crescent-moon"||r==="blood-moon"?(y=m?-1.2:-3.3,S=m?2.5:2,R=m?.42:.6,b.position.set(-8,2,-2)):r==="eclipse-corona"&&(y=0,S=m?2.5:2.4,R=m?.45:.64,b.position.set(0,0,4));const D=e.celestialScaleMultiplier||1;R*=D,C.position.set(y,S,0),C.scale.set(R,R,R);let I=0,L=0,w=0,N=0;const Z=Y=>{const X=Y.clientX/window.innerWidth*2-1;I=(-(Y.clientY/window.innerHeight)*2+1)*.18,L=X*.25};window.addEventListener("mousemove",Z,{passive:!0});let V=null,$=null,z=null,B=null;if(r==="ringed-planet"){const Y=new Ui(1,64,64),X=cM(o,l),H=new Ol({map:X,roughness:.55,metalness:.08});V=new Sn(Y,H),C.add(V);const P=new Ui(1.04,48,48),q=new Ei({vertexShader:`
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
        `,uniforms:{glowColor:{value:new Dt(l?o==="celestial-cyan"?165063:14251782:o==="celestial-cyan"?3718648:o==="supernova-sunset"?16007006:11032055)}},transparent:!0,blending:bs,side:Un}),Ee=new Sn(P,q);C.add(Ee);const ee=new Pf(1.35,2.85,128),le=ee.attributes.position,be=ee.attributes.uv;for(let ke=0;ke<le.count;ke++){const Te=le.getX(ke),Ue=le.getY(ke),mt=(Math.sqrt(Te*Te+Ue*Ue)-1.35)/(2.85-1.35);be.setXY(ke,mt,.5)}be.needsUpdate=!0;const Ae=uM(o,l),we=new Ol({map:Ae,side:Bi,transparent:!0,opacity:.92,roughness:.45,metalness:.05});$=new Sn(ee,we),$.rotation.x=Math.PI*.48,$.rotation.y=-.15,C.add($);const ze=new Ui(.11,24,24),qe=new Ol({color:l?14078929:13095678,roughness:.8});z=new Sn(ze,qe),C.add(z),C.rotation.z=-.42}else if(r==="crescent-moon"){const Y=new Ui(1,64,64),X=dM(l),H=new Ei({vertexShader:`
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
        `,uniforms:{moonTexture:{value:X},sunDir:{value:new pe(-1.6,.35,-.65).normalize()},sunlitColor:{value:new Dt(l?16776171:16710083)},earthshineColor:{value:new Dt(l?9741240:6583435)},earthshineAlpha:{value:l?.07:.05}},transparent:!0});V=new Sn(Y,H),C.add(V);const P=new Ui(1.04,48,48),q=new Ei({vertexShader:`
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
        `,uniforms:{sunDir:{value:new pe(-1.6,.35,-.65).normalize()},glowColor:{value:new Dt(l?16096779:16707722)}},transparent:!0,blending:bs,side:Un}),Ee=new Sn(P,q);C.add(Ee),C.rotation.y=.45,C.rotation.z=-.22}else if(r==="eclipse-corona"){const Y=new vo(3.8,3.8),X=new Ei({vertexShader:`
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
        `,uniforms:{uTime:{value:0},uColor:{value:new Dt(l?14251782:16638023)}},transparent:!0,blending:bs,depthWrite:!1});B=new Sn(Y,X),C.add(B);const H=new Ui(.96,48,48),P=new Kl({color:l?1579035:328970});V=new Sn(H,P),C.add(V)}else if(r==="blood-moon"){const Y=new Ui(1,64,64),X=fM(l),H=new Ol({map:X,roughness:.7,metalness:.05});V=new Sn(Y,H),C.add(V);const P=new Ui(1.05,48,48),q=new Ei({vertexShader:`
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
        `,transparent:!0,blending:bs,side:Un}),Ee=new Sn(P,q);C.add(Ee),C.rotation.y=.5,C.rotation.z=-.2}else if(r==="pulsar-star"){const Y=new Ui(.72,48,48),X=new Kl({color:l?165063:14742270});V=new Sn(Y,X),C.add(V);const H=new Nf(1.4,5,32,1,!0),P=new Kl({color:l?223649:3718648,transparent:!0,opacity:.5,side:Bi,blending:bs}),q=new Sn(H,P);q.position.y=2.6,C.add(q);const Ee=new Sn(H,P);Ee.position.y=-2.6,Ee.rotation.x=Math.PI,C.add(Ee),B=q}let W;const j=performance.now(),ce=()=>{W=requestAnimationFrame(ce);const Y=(performance.now()-j)*.001;w+=(I-w)*.06,N+=(L-N)*.06,C.position.x=y+N*.8,C.position.y=S+w*.8;const X=e.rotationSpeed||"standard",H=X==="static"?0:X==="slow"?.35:X==="fast"?2.4:1;if(V&&(V.rotation.y+=.0012*H),z){const q=Y*.35*H;z.position.x=Math.cos(q)*4.8,z.position.z=Math.sin(q)*4.8*.4,z.position.y=Math.sin(q*1.5)*.6}B&&B.material.uniforms&&(B.material.uniforms.uTime.value=Y),_.render(g,v)};ce();const Q=()=>{if(!u||!_||!v)return;const Y=u.clientWidth||window.innerWidth,X=u.clientHeight||window.innerHeight;v.aspect=Y/X,v.updateProjectionMatrix(),_.setSize(Y,X),_.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const H=Y<768,P=e.celestialPosition||"default";P==="upper-right"?(y=H?1.2:3.4,S=H?2.3:1.8):P==="upper-left"?(y=H?-1.2:-3.3,S=H?2.5:2):P==="zenith-center"?(y=0,S=H?2.5:2.4):r==="ringed-planet"||r==="pulsar-star"?(y=H?1.2:3.4,S=H?2.3:1.8,R=H?.48:.68):r==="crescent-moon"||r==="blood-moon"?(y=H?-1.2:-3.3,S=H?2.5:2,R=H?.42:.6):r==="eclipse-corona"&&(y=0,S=H?2.5:2.4,R=H?.45:.64),R*=e.celestialScaleMultiplier||1,C.position.set(y,S,0),C.scale.set(R,R,R)};return window.addEventListener("resize",Q,{passive:!0}),()=>{cancelAnimationFrame(W),window.removeEventListener("mousemove",Z),window.removeEventListener("resize",Q),_.dispose(),u&&_.domElement&&u.contains(_.domElement)&&u.removeChild(_.domElement)}},[r,o,l,e.celestialPosition,e.celestialScaleMultiplier,e.rotationSpeed]),f.jsx("div",{ref:s,className:"fixed inset-0 pointer-events-none z-[1] select-none overflow-hidden","aria-hidden":"true"})};/**
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
 */const pf=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Md(s){return s!=null}function vM(s,e={}){var _,b;const t=e.attributeNames??{},r=E=>t[E]??E,o=s.size??s.width??Ss.width,l=s.size??s.height??Ss.height,u=((_=s.aliases)==null?void 0:_.filter(E=>typeof E=="string"&&E.trim()!=="").map(E=>`lucide-${E}`))??[],p=[...s.name?[`lucide-${s.name}`]:[],...u],d=((b=e.className)==null?void 0:b.split(" ").filter(Boolean))??[],m=e.includeDefaultClasses===!1?pf(...d):pf("lucide",...p,...d),g=e.absoluteStrokeWidth?Number(e.strokeWidth??Ss["stroke-width"])*Number(s.size??s.width??Ss.width)/Number(e.size??e.width??Ss.width):e.strokeWidth??Ss["stroke-width"];return["svg",{...Object.entries(Ss).reduce((E,[C,y])=>(E[r(C)]=y,E),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&Md(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&Md(e.width)&&{[r("width")]:e.width},..."height"in e&&Md(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:g,...m&&{[r("class")]:m},[r("viewBox")]:`0 0 ${o} ${l}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},s.node.map(E=>{const[C,y,S]=E,R=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...y}:y;return S?[C,R,S]:[C,R]})]}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function _M(s,e={}){return vM(s,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},SM=Se.createContext({}),bM=()=>Se.useContext(SM),wM=Se.forwardRef(({color:s,size:e,width:t,height:r,strokeWidth:o,absoluteStrokeWidth:l,nonScalingStroke:u,className:p="",children:d,iconNode:m=[],icon:g={node:m,aliases:[],size:24},...v},_)=>{const{size:b=24,strokeWidth:E=2,absoluteStrokeWidth:C=!1,nonScalingStroke:y=!1,color:S="currentColor",className:R=""}=bM()??{},F=!!d||yM(v),[D,I,L=[]]=_M(g,{color:s??S,width:t??e??b,height:r??e??b,strokeWidth:o??E,absoluteStrokeWidth:l??C,nonScalingStroke:u??y,className:pf(R,p),hasA11yProp:F,attributes:v});return Se.createElement(D,{ref:_,...I},[...L.map(([w,N])=>Se.createElement(w,N)),...Array.isArray(d)?d:[d]])});/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Rt(s,e=[],t=[]){const r=typeof s=="string"?mM(s,e,t):s,o=Se.forwardRef(({className:l,...u},p)=>Se.createElement(wM,{ref:p,icon:r,className:l,...u}));return r.name&&(o.displayName=xM(r.name)),o}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng={name:"bell",size:24,node:[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]};ng.node;const MM=Rt(ng);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig={name:"calendar-clock",size:24,node:[["path",{d:"M16 14v2.2l1.6 1",key:"fo4ql5"}],["path",{d:"M16 2v3",key:"otl347"}],["path",{d:"M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338",key:"7hb8p4"}],["path",{d:"M3 9h5.859",key:"numkqi"}],["path",{d:"M8 2v3",key:"1ioesn"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]};ig.node;const im=Rt(ig);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg={name:"calendar",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]]};rg.node;const EM=Rt(rg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};sg.node;const wr=Rt(sg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};ag.node;const og=Rt(ag);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};lg.node;const pc=Rt(lg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg={name:"coffee",size:24,node:[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]};cg.node;const TM=Rt(cg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug={name:"droplets",size:24,node:[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]};ug.node;const AM=Rt(ug);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg={name:"external-link",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]};dg.node;const CM=Rt(dg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg={name:"eye-off",size:24,node:[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]};fg.node;const RM=Rt(fg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg={name:"face-slightly-smiling",size:24,node:[["path",{d:"M15 10V9",key:"4dkmfx"}],["path",{d:"M16.472 15a6 6 0 01-8.943 0",key:"7qomzy"}],["path",{d:"M9 10V9",key:"1lazqi"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["smile"]};hg.node;const NM=Rt(hg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg={name:"flame",size:24,node:[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]]};pg.node;const mg=Rt(pg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg={name:"headphones",size:24,node:[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]};gg.node;const ac=Rt(gg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg={name:"list-music",size:24,node:[["path",{d:"M16 5H3",key:"m91uny"}],["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M11 19H3",key:"zflm78"}],["path",{d:"M21 16V5",key:"yxg4q8"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]};xg.node;const rm=Rt(xg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg={name:"maximize-2",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]};vg.node;const sm=Rt(vg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g={name:"minimize-2",size:24,node:[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]]};_g.node;const yg=Rt(_g);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};Sg.node;const oc=Rt(Sg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};bg.node;const Zi=Rt(bg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};wg.node;const Oi=Rt(wg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};Mg.node;const Jl=Rt(Mg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg={name:"quote",size:24,node:[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]};Eg.node;const PM=Rt(Eg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg={name:"radio",size:24,node:[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};Tg.node;const am=Rt(Tg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};Ag.node;const br=Rt(Ag);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg={name:"skip-back",size:24,node:[["path",{d:"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",key:"15892j"}],["path",{d:"M3 20V4",key:"1ptbpl"}]]};Cg.node;const mf=Rt(Cg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg={name:"skip-forward",size:24,node:[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]]};Rg.node;const lc=Rt(Rg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};Ng.node;const Pg=Rt(Ng);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Dg.node;const Ms=Rt(Dg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg={name:"square-check-big",size:24,node:[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-square"]};Lg.node;const DM=Rt(Lg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig={name:"star",size:24,node:[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]};Ig.node;const LM=Rt(Ig);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};kg.node;const Ug=Rt(kg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg={name:"sunrise",size:24,node:[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]};Fg.node;const om=Rt(Fg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg={name:"target",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};zg.node;const IM=Rt(zg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og={name:"timer",size:24,node:[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]};Og.node;const kM=Rt(Og);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};Bg.node;const cc=Rt(Bg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg={name:"tv",size:24,node:[["path",{d:"m17 2-5 5-5-5",key:"16satq"}],["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",key:"1e6viu"}]]};Hg.node;const UM=Rt(Hg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg={name:"user",size:24,node:[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]};Gg.node;const Vg=Rt(Gg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};Wg.node;const gf=Rt(Wg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};jg.node;const $g=Rt(jg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Xg.node;const Mr=Rt(Xg),FM=()=>{const{activeYouTubeItem:s,isYouTubePlaying:e,youtubeVolume:t,isYouTubeMuted:r,setYouTubeIsPlaying:o,setYouTubePlayerReady:l,showYouTubePreview:u,setShowYouTubePreview:p,toggleYouTubePlay:d,nextYouTubeTrack:m,prevYouTubeTrack:g,toggleYouTubeMute:v,setYouTubeVolume:_,audioSource:b}=is(),E=Se.useRef(null),[C,y]=Se.useState(null),S=Se.useRef((s==null?void 0:s.id)||null),R=Se.useRef(null),[F,D]=Se.useState(!1),I=Se.useRef(!1),L=Se.useCallback((B,W="")=>{try{E.current&&E.current.contentWindow&&E.current.contentWindow.postMessage(JSON.stringify({event:"command",func:B,args:W}),"*")}catch(j){console.warn("[YouTube Audio] Command error:",j)}},[]),w=Se.useCallback((B,W)=>{const j=W?"1":"0",ce=typeof window<"u"&&window.location.origin?`&origin=${encodeURIComponent(window.location.origin)}`:"";if(!B)return`https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=${j}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${ce}`;if(B.type==="playlist"&&B.playlistId)return`https://www.youtube.com/embed/videoseries?list=${encodeURIComponent(B.playlistId)}&autoplay=${j}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${ce}`;if(B.type==="video_in_playlist"&&B.videoId&&B.playlistId)return`https://www.youtube.com/embed/${encodeURIComponent(B.videoId)}?list=${encodeURIComponent(B.playlistId)}&autoplay=${j}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${ce}`;const Q=B.videoId||"jfKfPfyJRdk";return`https://www.youtube.com/embed/${encodeURIComponent(Q)}?autoplay=${j}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${ce}`},[]),[N,Z]=Se.useState(()=>w(s,!1)),V=Se.useCallback(()=>{L("unMute",""),L("setVolume",[t||75]),r&&v()},[L,t,r,v]);Se.useEffect(()=>(window.__forMeSendYouTubeCommand=L,window.__forMeForceUnmute=V,l(!0),()=>{delete window.__forMeSendYouTubeCommand,delete window.__forMeForceUnmute}),[L,V,l]),Se.useEffect(()=>{if(!s||S.current===s.id)return;S.current=s.id,y(null);const B=w(s,e);R.current=B,Z(B),Fi.updateMetadata({title:s.title,artist:s.channel||"FOR ME Sanctuary",album:s.type==="playlist"?"YouTube Playlist":"YouTube Stream",artworkUrl:s.thumbnailUrl,onPlay:()=>{o(!0),L("playVideo",""),V()},onPause:()=>{o(!1),L("pauseVideo","")},onNext:s.type==="playlist"||s.type==="video_in_playlist"?m:void 0,onPrev:s.type==="playlist"||s.type==="video_in_playlist"?g:void 0})},[s,w,e,m,g,L,o,V]),Se.useEffect(()=>{if(I.current){I.current=!1;return}e?(L("playVideo",""),setTimeout(()=>{L("unMute",""),L("setVolume",[t||75])},50),Fi.setPlaybackState("playing")):(L("pauseVideo",""),Fi.setPlaybackState("paused"))},[e,L,t]),Se.useEffect(()=>{L("setVolume",[t||75])},[t,L]),Se.useEffect(()=>{r?L("mute",""):(L("unMute",""),L("setVolume",[t||75]))},[r,t,L]),Se.useEffect(()=>{const B=W=>{if(!(!W.data||typeof W.data!="string"))try{const j=JSON.parse(W.data);j.event==="onStateChange"?j.info===1?(I.current=!0,o(!0),y(null),Fi.setPlaybackState("playing"),r||(L("unMute",""),L("setVolume",[t||75]))):j.info===2?document.hidden||(I.current=!0,o(!1),Fi.setPlaybackState("paused")):j.info===0&&((s==null?void 0:s.type)==="playlist"||(s==null?void 0:s.type)==="video_in_playlist"?Fi.setPlaybackState("playing"):(I.current=!0,o(!1),Fi.setPlaybackState("none"))):j.event==="infoDelivery"&&j.info?typeof j.info.muted=="boolean"&&j.info.muted&&!r&&e&&(L("unMute",""),L("setVolume",[t||75])):j.event==="onError"&&(console.warn("[YouTube Audio Player Error]",j.info),(j.info===101||j.info===150)&&y("The owner of this video restricts playback outside of YouTube."))}catch{}};return window.addEventListener("message",B),()=>window.removeEventListener("message",B)},[o,r,t,L,s,e]);const $=b==="youtube"&&e||u,z=(s==null?void 0:s.type)==="playlist"||(s==null?void 0:s.type)==="video_in_playlist";return f.jsxs(f.Fragment,{children:[f.jsxs("div",{role:"region","aria-label":"YouTube Audio Player",style:{position:"fixed",bottom:!$||F?"0px":u?"84px":"16px",right:!$||F?"0px":u?"24px":"16px",width:!$||F?"2px":u?"380px":"250px",height:!$||F?"2px":u?"285px":"150px",zIndex:!$||F?-1:u?50:30,opacity:!$||F?.01:1,pointerEvents:!$||F?"none":"auto",borderRadius:"1.25rem",overflow:"hidden",boxShadow:u?"0 30px 70px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.18)":"0 15px 35px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.12)",transition:"all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"},className:"backdrop-blur-2xl bg-[#090b14]/95 flex flex-col border border-white/15",children:[f.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-black/60 shrink-0 select-none",children:[f.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[f.jsx("span",{className:`w-2 h-2 rounded-full shrink-0 ${e?"bg-red-500 animate-pulse":"bg-zinc-500"}`}),f.jsx("span",{className:"text-white text-xs font-display font-semibold truncate max-w-[110px] sm:max-w-[160px]",title:s==null?void 0:s.title,children:(s==null?void 0:s.title)||"YouTube Audio"})]}),f.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[f.jsxs("button",{type:"button",onClick:V,className:`px-1.5 py-0.5 rounded-md text-[10px] font-sans font-bold flex items-center gap-1 transition-colors cursor-pointer ${r?"bg-amber-500 text-black hover:bg-amber-400 animate-pulse":"bg-emerald-600/80 text-white hover:bg-emerald-500"}`,title:"Force Unmute & Restore Volume",children:[r?f.jsx($g,{className:"w-3 h-3"}):f.jsx(gf,{className:"w-3 h-3"}),f.jsx("span",{className:"hidden sm:inline",children:r?"UNMUTE":`${t}%`})]}),f.jsx("button",{type:"button",onClick:()=>D(!0),className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer",title:"Audio Only (Hide Video Frame)",children:f.jsx(ac,{className:"w-3 h-3"})}),f.jsx("button",{type:"button",onClick:()=>p(!u),className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer",title:u?"Collapse to Mini Player":"Expand Video Preview",children:u?f.jsx(yg,{className:"w-3 h-3"}):f.jsx(sm,{className:"w-3 h-3"})}),f.jsx("button",{type:"button",onClick:()=>{o(!1),p(!1),L("pauseVideo","")},className:"p-1 rounded-md bg-white/10 hover:bg-red-500/80 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer",title:"Stop playback & close",children:f.jsx(Mr,{className:"w-3 h-3"})})]})]}),C&&f.jsxs("div",{className:"absolute inset-0 z-30 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center space-y-2 pointer-events-auto",children:[f.jsx(og,{className:"w-6 h-6 text-amber-400"}),f.jsx("p",{className:"text-xs text-white/95 font-sans leading-relaxed max-w-xs",children:C}),(s==null?void 0:s.url)&&f.jsxs("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold transition-colors shadow-md",children:[f.jsx(CM,{className:"w-3 h-3"}),f.jsx("span",{children:"Open in YouTube"})]})]}),f.jsx("div",{className:"flex-1 w-full bg-black relative min-h-0",children:f.jsx("iframe",{ref:E,id:"global-youtube-audio-iframe",title:"FOR ME Sanctuary Audio Stream",src:N,className:"w-full h-full border-0 absolute inset-0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),f.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 border-t border-white/10 bg-black/60 shrink-0 text-xs",children:[u?f.jsxs("div",{className:"flex items-center gap-1",children:[f.jsx("span",{className:"text-[10px] font-sans text-zinc-400 mr-1",children:"Vol:"}),[25,50,75,100].map(B=>f.jsxs("button",{type:"button",onClick:()=>{_(B),L("setVolume",[B]),V()},className:`px-1.5 py-0.5 rounded text-[10px] font-mono transition-colors cursor-pointer ${t===B?"bg-red-600 text-white font-bold":"bg-white/10 text-zinc-300 hover:bg-white/20"}`,children:[B,"%"]},B))]}):f.jsxs("div",{className:"flex items-center gap-1",children:[z&&f.jsxs(f.Fragment,{children:[f.jsx("button",{type:"button",onClick:g,className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer",title:"Previous track in playlist",children:f.jsx(mf,{className:"w-3 h-3"})}),f.jsx("button",{type:"button",onClick:m,className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer",title:"Next track in playlist",children:f.jsx(lc,{className:"w-3 h-3"})})]}),f.jsx("span",{className:"text-[10px] font-mono text-zinc-400",children:r?"Muted":`${t}%`})]}),f.jsxs("div",{className:"flex items-center gap-1.5",children:[u&&z&&f.jsxs(f.Fragment,{children:[f.jsx("button",{type:"button",onClick:g,className:"p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white transition-colors cursor-pointer",title:"Previous track",children:f.jsx(mf,{className:"w-3.5 h-3.5"})}),f.jsx("button",{type:"button",onClick:m,className:"p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white transition-colors cursor-pointer",title:"Next track",children:f.jsx(lc,{className:"w-3.5 h-3.5"})})]}),f.jsx("button",{type:"button",onClick:()=>{d(),V()},className:`px-3 py-1 rounded-lg text-white text-[11px] font-display font-semibold flex items-center gap-1 shadow-sm transition-all cursor-pointer ${e?"bg-red-600 hover:bg-red-500":"bg-emerald-600 hover:bg-emerald-500"}`,children:e?f.jsxs(f.Fragment,{children:[f.jsx(Zi,{className:"w-3 h-3 fill-current"}),f.jsx("span",{children:"Pause"})]}):f.jsxs(f.Fragment,{children:[f.jsx(Oi,{className:"w-3 h-3 fill-current ml-0.5"}),f.jsx("span",{children:"Play"})]})})]})]})]}),$&&F&&f.jsxs("button",{type:"button",onClick:()=>D(!1),className:"fixed bottom-4 right-4 z-40 px-3 py-1.5 rounded-xl cosmic-dock text-xs flex items-center gap-2 border border-white/15 text-white hover:border-violet-400/50 shadow-xl cursor-pointer transition-all animate-fadeIn",title:"Restore Video Frame",children:[f.jsx("span",{className:"w-2 h-2 rounded-full bg-red-500 animate-pulse"}),f.jsx("span",{className:"font-display text-[11px] font-medium",children:"Show Video"}),f.jsx(sm,{className:"w-3 h-3 text-zinc-400"})]})]})},zM=[{id:"deep-space-obsidian",name:"Deep Space Obsidian",tagline:"Luminous Lavender & Crescent Moon",accent:"#a855f7",gradient:["#060814","#2d1252","#7c3aed","#ede9fe"],settings:{palette:"cosmic-royal",celestialBody:"crescent-moon",celestialPosition:"default",celestialScaleMultiplier:1,rotationSpeed:"standard",waveGeometry:"dunes",speed:"balanced",amplitude:"majestic",waveLayerDensity:"deep",horizonHeight:"balanced",clockFontStyle:"tabular",clockHalo:"pulsar",clockColor:"palette",clockPosition:"center",clockDivider:"colon",showConstellations:!0,showComet:!0,showNebulaDust:!0,starDensity:"balanced",shootingStarMode:"occasional"}},{id:"cyberpunk-neon",name:"Cyberpunk Neon",tagline:"High-Voltage Cyan & Ringed Gas Giant",accent:"#06b6d4",gradient:["#06000e","#3b0764","#06b6d4","#f43f5e"],settings:{palette:"cyberpunk-neon",celestialBody:"ringed-planet",celestialPosition:"upper-right",celestialScaleMultiplier:1.15,rotationSpeed:"fast",waveGeometry:"aurora",speed:"dynamic",amplitude:"dramatic",waveLayerDensity:"dense",horizonHeight:"balanced",clockFontStyle:"mono",clockHalo:"pulsar",clockColor:"cyan",clockPosition:"center",clockDivider:"colon",showCrossStars:!0,showOrbitalTrack:!0,starDensity:"dense",shootingStarMode:"meteor-shower"}},{id:"emerald-borealis",name:"Emerald Borealis",tagline:"Northern Aurora Ribbons & Pulsar Star",accent:"#10b981",gradient:["#010d05","#064e3b","#10b981","#a7f3d0"],settings:{palette:"emerald-aurora",celestialBody:"pulsar-star",celestialPosition:"zenith-center",celestialScaleMultiplier:1.1,rotationSpeed:"fast",waveGeometry:"aurora",speed:"balanced",amplitude:"majestic",waveLayerDensity:"dense",horizonHeight:"balanced",clockFontStyle:"minimal",clockHalo:"pulsar",clockColor:"cyan",clockPosition:"center",clockDivider:"dot",showConstellations:!0,showComet:!0,starDensity:"galaxy",shootingStarMode:"occasional"}},{id:"sunset-dunes",name:"Sunset Dunes",tagline:"Velvet Crimson & Solar Eclipse Corona",accent:"#f43f5e",gradient:["#0a0208","#771146","#e11d48","#f59e0b"],settings:{palette:"supernova-sunset",celestialBody:"eclipse-corona",celestialPosition:"zenith-center",celestialScaleMultiplier:1,rotationSpeed:"standard",waveGeometry:"dunes",speed:"balanced",amplitude:"majestic",waveLayerDensity:"deep",horizonHeight:"balanced",clockFontStyle:"serif",clockHalo:"subtle",clockColor:"gold",clockPosition:"center",clockDivider:"space",showConstellations:!1,showComet:!0,starDensity:"balanced",shootingStarMode:"off"}},{id:"blood-moon-totality",name:"Blood Moon Totality",tagline:"Crimson Eclipse & Ruby Stardust",accent:"#ef4444",gradient:["#0d0202","#450a0a","#b91c1c","#f87171"],settings:{palette:"supernova-sunset",celestialBody:"blood-moon",celestialPosition:"upper-left",celestialScaleMultiplier:1.25,rotationSpeed:"slow",waveGeometry:"mountains",speed:"calm",amplitude:"dramatic",waveLayerDensity:"deep",horizonHeight:"balanced",clockFontStyle:"serif",clockHalo:"pulsar",clockColor:"rose",clockPosition:"center",clockDivider:"colon",showConstellations:!0,showCrossStars:!0,starDensity:"dense",shootingStarMode:"meteor-shower"}},{id:"nord-frost",name:"Nord Frost",tagline:"Sub-Zero Arctic & Crystalline Torus",accent:"#38bdf8",gradient:["#020b14","#0c2e4e","#0284c7","#e0f2fe"],settings:{palette:"celestial-cyan",celestialBody:"crescent-moon",celestialPosition:"upper-right",celestialScaleMultiplier:1.1,rotationSpeed:"standard",waveGeometry:"ocean",speed:"balanced",amplitude:"majestic",waveLayerDensity:"dense",horizonHeight:"low",clockFontStyle:"minimal",clockHalo:"none",clockColor:"white",clockPosition:"center",clockDivider:"colon",showConstellations:!0,showCrossStars:!0,starDensity:"dense",shootingStarMode:"occasional"}},{id:"monochrome-mineral",name:"Monochrome Mineral",tagline:"Architectural Platinum & Deep Void",accent:"#a1a1aa",gradient:["#030306","#181824","#71717a","#ffffff"],settings:{palette:"nocturne-silver",celestialBody:"none",celestialPosition:"default",celestialScaleMultiplier:1,rotationSpeed:"static",waveGeometry:"mountains",speed:"calm",amplitude:"subtle",waveLayerDensity:"airy",horizonHeight:"balanced",clockFontStyle:"tabular",clockHalo:"none",clockColor:"white",clockPosition:"center",clockDivider:"space",showConstellations:!1,showComet:!1,showNebulaDust:!1,starDensity:"sparse",shootingStarMode:"off"}},{id:"pure-pitch-black",name:"Pitch Black Void",tagline:"OLED Zero-Light Battery Sanctuary",accent:"#71717a",gradient:["#000000","#050505","#171717","#e5e5e5"],settings:{palette:"pure-pitch-black",celestialBody:"crescent-moon",celestialPosition:"upper-right",celestialScaleMultiplier:.8,rotationSpeed:"slow",waveGeometry:"dunes",speed:"frozen",amplitude:"subtle",waveLayerDensity:"airy",horizonHeight:"low",clockFontStyle:"tabular",clockHalo:"none",clockColor:"white",clockPosition:"center",clockDivider:"colon",showConstellations:!1,showComet:!1,showNebulaDust:!1,starDensity:"sparse",shootingStarMode:"off"}}],OM=[{id:"cosmic-royal",name:"Cosmic Royal",previewColors:["#060814","#2d1252","#7c3aed","#ede9fe"]},{id:"cyberpunk-neon",name:"Cyber Neon",previewColors:["#06000e","#3b0764","#06b6d4","#f43f5e"]},{id:"emerald-aurora",name:"Emerald Aurora",previewColors:["#010d05","#064e3b","#10b981","#a7f3d0"]},{id:"supernova-sunset",name:"Sunset Supernova",previewColors:["#12050e","#6e133e","#e11d48","#fffbeb"]},{id:"celestial-cyan",name:"Celestial Cyan",previewColors:["#030b14","#0c2e4e","#0284c7","#e0f2fe"]},{id:"solar-gold",name:"Solar Gold",previewColors:["#140d02","#523405","#f59e0b","#fef3c7"]},{id:"nocturne-silver",name:"Nocturne Silver",previewColors:["#050508","#1e1e24","#71717a","#f4f4f5"]},{id:"pure-pitch-black",name:"Pitch Black OLED",previewColors:["#000000","#09090b","#27272a","#fafafa"]}],BM=({isOpen:s,onClose:e})=>{const{wallpaperSettings:t,updateWallpaperSettings:r,appTheme:o,toggleAppTheme:l}=is(),u=o==="light",[p,d]=Se.useState("realms");if(!s)return null;const m=()=>{r({palette:"cosmic-royal",speed:"balanced",amplitude:"majestic",waveGeometry:"dunes",waveLayerDensity:"deep",horizonHeight:"balanced",waveStrokeOpacity:.8,interactiveParallax:!0,celestialBody:"crescent-moon",celestialPosition:"default",celestialScaleMultiplier:1,rotationSpeed:"standard",showNebulaDust:!0,nebulaIntensity:"vivid",showConstellations:!0,showComet:!0,shootingStarMode:"occasional",showStars:!0,starDensity:"balanced",showCrossStars:!1,showOrbitalTrack:!1,showMeridian:!1,clockFontStyle:"tabular",clockSize:"standard",clockPosition:"center",clockDivider:"colon",clockColor:"palette",clockFormat:"12h",showSeconds:!0,showDate:!0,showGreeting:!0,clockHalo:"pulsar"})};return f.jsxs("div",{className:"fixed inset-0 z-50 pointer-events-none select-none",children:[f.jsx("div",{className:"absolute inset-0 bg-black/20 backdrop-blur-[2px] pointer-events-auto transition-opacity",onClick:e,"aria-hidden":"true"}),f.jsxs("aside",{role:"dialog","aria-modal":"true","aria-label":"Wallpaper Studio Inspector",className:`absolute top-8 sm:top-10 bottom-3 sm:bottom-6 right-2 sm:right-6 w-[calc(100%-1rem)] sm:w-[440px] rounded-3xl border shadow-[0_24px_80px_rgba(0,0,0,0.85)] backdrop-blur-3xl flex flex-col z-10 pointer-events-auto transition-all animate-fadeIn overflow-hidden ${u?"bg-white/95 border-zinc-200/90 text-zinc-900":"bg-[#090b16]/95 border-white/[0.12] text-white"}`,children:[f.jsxs("div",{className:`flex items-center justify-between p-4 px-5 border-b shrink-0 ${u?"border-zinc-200/80 bg-white/70":"border-white/[0.08] bg-white/[0.02]"}`,children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:`w-8 h-8 rounded-xl border flex items-center justify-center shadow-sm ${u?"bg-zinc-100 border-zinc-200 text-zinc-800":"bg-white/[0.08] border-white/15 text-zinc-200"}`,children:f.jsx(Pg,{className:"w-3.5 h-3.5"})}),f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("h2",{className:"text-xs font-display uppercase tracking-widest font-bold",children:"Studio"}),f.jsx("span",{className:`text-[9px] font-mono font-medium px-2 py-0.5 rounded-full border ${u?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-emerald-500/15 text-emerald-300 border-emerald-400/30"}`,children:"Live"})]}),f.jsx("p",{className:`text-[10px] font-sans ${u?"text-zinc-500":"text-zinc-400"}`,children:"Sanctuary customization"})]})]}),f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx("button",{type:"button",onClick:m,"aria-label":"Reset to default settings",title:"Reset to Defaults",className:`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${u?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.06] hover:bg-white/[0.12] text-zinc-400 hover:text-white"}`,children:f.jsx(br,{className:"w-3.5 h-3.5"})}),f.jsx("button",{type:"button",onClick:e,"aria-label":"Close Studio",className:`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${u?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.06] hover:bg-white/[0.12] text-zinc-400 hover:text-white"}`,children:f.jsx(Mr,{className:"w-4 h-4"})})]})]}),f.jsx("div",{className:`p-2.5 border-b shrink-0 ${u?"border-zinc-200/90 bg-zinc-50/70":"border-white/[0.06] bg-black/25"}`,children:f.jsx("div",{className:`grid grid-cols-3 gap-1.5 p-1 rounded-2xl ${u?"bg-zinc-200/60":"bg-white/[0.04]"}`,children:[{id:"realms",label:"Realms",desc:"1-Tap Themes",icon:Ms},{id:"cosmos",label:"Cosmos",desc:"Planet & Waves",icon:oc},{id:"timepiece",label:"Timepiece",desc:"Clock Style",icon:pc}].map(g=>{const v=g.icon,_=p===g.id;return f.jsxs("button",{type:"button",onClick:()=>d(g.id),className:`flex items-center justify-center gap-2 py-2 px-2 rounded-xl text-xs font-sans font-medium transition-all cursor-pointer ${_?u?"bg-white text-zinc-950 font-bold shadow-sm":"bg-white text-zinc-950 font-bold shadow-[0_2px_12px_rgba(255,255,255,0.18)]":u?"hover:bg-white/60 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.06] text-zinc-400 hover:text-white"}`,children:[f.jsx(v,{className:"w-3.5 h-3.5 shrink-0"}),f.jsx("span",{children:g.label})]},g.id)})})}),f.jsxs("div",{className:"flex-1 overflow-y-auto p-5 space-y-6",children:[p==="realms"&&f.jsxs("div",{className:"space-y-4 animate-fadeIn",children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold ${u?"text-zinc-700":"text-zinc-300"}`,children:"Curated Aesthetic Realms"}),f.jsx("span",{className:`text-[10px] font-mono ${u?"text-zinc-500":"text-zinc-400"}`,children:"Instant Harmony"})]}),f.jsx("div",{className:"grid grid-cols-1 gap-2",children:zM.map(g=>{const v=t.palette===g.settings.palette&&t.celestialBody===g.settings.celestialBody;return f.jsxs("button",{type:"button",onClick:()=>r(g.settings),className:`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between group ${v?u?"bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900 shadow-md":"bg-white/[0.08] border-white/40 shadow-lg":u?"bg-white hover:bg-zinc-50 border-zinc-200/90":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08]"}`,children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"w-10 h-10 rounded-xl border border-white/20 shrink-0 shadow-sm flex items-center justify-center overflow-hidden",style:{background:`linear-gradient(135deg, ${g.gradient.join(", ")})`},children:v&&f.jsx(wr,{className:"w-4 h-4 text-white drop-shadow-md stroke-[3]"})}),f.jsxs("div",{children:[f.jsx("div",{className:`text-xs font-display font-bold ${v?u?"text-zinc-950 font-bold":"text-white":u?"text-zinc-800":"text-zinc-200"}`,children:g.name}),f.jsx("div",{className:`text-[10px] font-sans ${u?"text-zinc-500":"text-zinc-400"}`,children:g.tagline})]})]}),f.jsx("div",{className:"flex items-center gap-1 shrink-0 pl-2",children:g.gradient.map((_,b)=>f.jsx("div",{className:"w-2.5 h-2.5 rounded-full border border-black/20",style:{backgroundColor:_}},b))})]},g.id)})})]}),p==="cosmos"&&f.jsxs("div",{className:"space-y-5 animate-fadeIn",children:[f.jsxs("div",{className:"space-y-2",children:[f.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${u?"text-zinc-700":"text-zinc-300"}`,children:"3D Celestial Object"}),f.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:[{id:"crescent-moon",label:"Crescent Moon"},{id:"ringed-planet",label:"Saturn Rings"},{id:"blood-moon",label:"Blood Moon"},{id:"pulsar-star",label:"Pulsar Star"},{id:"eclipse-corona",label:"Eclipse Corona"},{id:"none",label:"No Planet (Pure Waves)"}].map(g=>{const v=t.celestialBody===g.id;return f.jsxs("button",{type:"button",onClick:()=>r({celestialBody:g.id}),className:`p-2.5 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer flex items-center justify-between ${v?u?"bg-zinc-900 text-white font-semibold":"bg-white text-zinc-950 font-semibold shadow-sm":u?"bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300"}`,children:[f.jsx("span",{className:"truncate",children:g.label}),v&&f.jsx(wr,{className:"w-3.5 h-3.5 shrink-0 ml-1"})]},g.id)})})]}),f.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[f.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${u?"text-zinc-700":"text-zinc-300"}`,children:"Atmospheric Palette"}),f.jsx("div",{className:"grid grid-cols-2 gap-2",children:OM.map(g=>{const v=t.palette===g.id;return f.jsxs("button",{type:"button",onClick:()=>r({palette:g.id}),className:`p-2 rounded-xl border text-left transition-all cursor-pointer flex flex-col gap-1.5 ${v?u?"bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900 shadow-sm":"bg-white/[0.08] border-white/40 shadow-sm":u?"bg-white hover:bg-zinc-50 border-zinc-200":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]"}`,children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("span",{className:`text-[11px] font-semibold ${v?u?"text-zinc-950":"text-white":u?"text-zinc-700":"text-zinc-300"}`,children:g.name}),v&&f.jsx(wr,{className:"w-3 h-3 text-emerald-400"})]}),f.jsx("div",{className:"flex items-center gap-1",children:g.previewColors.map((_,b)=>f.jsx("span",{className:"w-3 h-3 rounded-full border border-black/20",style:{backgroundColor:_}},b))})]},g.id)})})]}),f.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[f.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${u?"text-zinc-700":"text-zinc-300"}`,children:"Wave Topography"}),f.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{id:"dunes",label:"Cosmic Dunes"},{id:"aurora",label:"Aurora Ribbon"},{id:"mountains",label:"Ridge Peaks"},{id:"ocean",label:"Ocean Swell"}].map(g=>{const v=t.waveGeometry===g.id;return f.jsx("button",{type:"button",onClick:()=>r({waveGeometry:g.id}),className:`p-2.5 rounded-xl border text-center text-xs font-medium transition-all cursor-pointer ${v?u?"bg-zinc-900 text-white font-semibold":"bg-white text-zinc-950 font-semibold shadow-sm":u?"bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300"}`,children:g.label},g.id)})})]}),f.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[f.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${u?"text-zinc-700":"text-zinc-300"}`,children:"Motion Speed"}),f.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:[{id:"calm",label:"Calm Drift"},{id:"balanced",label:"Balanced"},{id:"dynamic",label:"Dynamic"}].map(g=>{const v=t.speed===g.id;return f.jsx("button",{type:"button",onClick:()=>r({speed:g.id}),className:`p-2 rounded-xl border text-center text-xs font-medium transition-all cursor-pointer ${v?u?"bg-zinc-900 text-white font-semibold":"bg-white text-zinc-950 font-semibold shadow-sm":u?"bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300"}`,children:g.label},g.id)})})]}),f.jsx("div",{className:"pt-2 border-t border-white/[0.06]",children:f.jsxs("button",{type:"button",onClick:l,className:`w-full p-2.5 rounded-xl border text-xs font-medium transition-all cursor-pointer flex items-center justify-center gap-2 ${u?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-white"}`,children:[u?f.jsx(oc,{className:"w-4 h-4 text-zinc-700"}):f.jsx(Ug,{className:"w-4 h-4 text-amber-300"}),f.jsxs("span",{children:["Switch to ",u?"Obsidian Dark":"Creamy Light"," Theme"]})]})})]}),p==="timepiece"&&f.jsxs("div",{className:"space-y-5 animate-fadeIn",children:[f.jsxs("div",{className:"space-y-2",children:[f.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${u?"text-zinc-700":"text-zinc-300"}`,children:"Clock Typography Face"}),f.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{id:"tabular",label:"Tabular Modern",preview:"12:00"},{id:"serif",label:"Editorial Luxury",preview:"12:00"},{id:"mono",label:"Tech Monospace",preview:"12:00"},{id:"minimal",label:"Minimalist Light",preview:"12:00"}].map(g=>{const v=t.clockFontStyle===g.id;return f.jsxs("button",{type:"button",onClick:()=>r({clockFontStyle:g.id}),className:`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${v?u?"bg-zinc-900 text-white font-semibold":"bg-white text-zinc-950 font-semibold shadow-sm":u?"bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300"}`,children:[f.jsx("span",{className:"text-xs",children:g.label}),v&&f.jsx(wr,{className:"w-3.5 h-3.5"})]},g.id)})})]}),f.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[f.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${u?"text-zinc-700":"text-zinc-300"}`,children:"Dial Accent Tint"}),f.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{id:"palette",label:"Palette Match",dot:"#a855f7"},{id:"white",label:"Pure White",dot:"#ffffff"},{id:"gold",label:"Stardust Gold",dot:"#fbbf24"},{id:"cyan",label:"Cyber Cyan",dot:"#22d3ee"},{id:"rose",label:"Rose Quartz",dot:"#f43f5e"}].map(g=>{const v=t.clockColor===g.id;return f.jsxs("button",{type:"button",onClick:()=>r({clockColor:g.id}),className:`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${v?u?"bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900":"bg-white/[0.08] border-white/40":u?"bg-white hover:bg-zinc-50 border-zinc-200":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]"}`,children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"w-3 h-3 rounded-full border border-black/20",style:{backgroundColor:g.dot}}),f.jsx("span",{className:`text-xs ${v?"font-bold":""}`,children:g.label})]}),v&&f.jsx(wr,{className:"w-3.5 h-3.5 text-emerald-400"})]},g.id)})})]}),f.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[f.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${u?"text-zinc-700":"text-zinc-300"}`,children:"Display Options"}),f.jsxs("div",{className:"space-y-2",children:[f.jsxs("div",{className:`p-3 rounded-xl border flex items-center justify-between ${u?"bg-white border-zinc-200":"bg-white/[0.03] border-white/[0.06]"}`,children:[f.jsxs("div",{children:[f.jsx("div",{className:"text-xs font-semibold",children:"Orbital Seconds Capsule"}),f.jsx("div",{className:`text-[10px] ${u?"text-zinc-500":"text-zinc-400"}`,children:"Show live orbiting seconds gauge"})]}),f.jsx("button",{type:"button",onClick:()=>r({showSeconds:!t.showSeconds}),className:`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${t.showSeconds?"bg-violet-600":u?"bg-zinc-300":"bg-white/20"}`,children:f.jsx("span",{className:`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${t.showSeconds?"left-6":"left-1"}`})})]}),f.jsxs("div",{className:`p-3 rounded-xl border flex items-center justify-between ${u?"bg-white border-zinc-200":"bg-white/[0.03] border-white/[0.06]"}`,children:[f.jsxs("div",{children:[f.jsx("div",{className:"text-xs font-semibold",children:"Breathing Atmospheric Aura"}),f.jsx("div",{className:`text-[10px] ${u?"text-zinc-500":"text-zinc-400"}`,children:"Ambient radial glow behind timepiece"})]}),f.jsx("button",{type:"button",onClick:()=>r({clockHalo:t.clockHalo==="none"?"pulsar":"none"}),className:`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${t.clockHalo!=="none"?"bg-violet-600":u?"bg-zinc-300":"bg-white/20"}`,children:f.jsx("span",{className:`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${t.clockHalo!=="none"?"left-6":"left-1"}`})})]})]})]})]})]})]})]})},oo=({className:s="w-4 h-4"})=>f.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:s,"aria-hidden":"true",children:f.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})}),Yg=({isPlaying:s,color:e="#a855f7",className:t="w-16 h-5",barCount:r=10})=>{const o=Se.useRef(null);return Se.useEffect(()=>{const l=o.current;if(!l)return;const u=l.getContext("2d");if(!u)return;let p;const d=Sr.getAnalyser(),m=d?new Uint8Array(d.frequencyBinCount):null,g=()=>{if(u.clearRect(0,0,l.width,l.height),s&&d&&m){d.getByteFrequencyData(m);const v=l.width,_=l.height,b=2,E=b*(r-1),C=Math.max(2,(v-E)/r);for(let y=0;y<r;y++){const S=Math.min(m.length-1,Math.floor(y*(m.length/r)*.7)),R=m[S]/255,F=Math.max(3,R*(_-2)),D=y*(C+b),I=_-F;u.fillStyle=e,u.beginPath(),u.roundRect(D,I,C,F,1.5),u.fill()}}else{const v=l.width,_=l.height,b=2,E=b*(r-1),C=Math.max(2,(v-E)/r);for(let y=0;y<r;y++){const S=y*(C+b),R=_-2.5;u.fillStyle="rgba(255, 255, 255, 0.2)",u.beginPath(),u.roundRect(S,R,C,2.5,1),u.fill()}}p=requestAnimationFrame(g)};return g(),()=>{cancelAnimationFrame(p)}},[s,e,r]),f.jsx("canvas",{ref:o,width:64,height:20,className:t,"aria-hidden":"true"})},HM=({isOpen:s,onClose:e})=>{const{appTheme:t,audioSource:r,isAudioPlaying:o,activeSoundscapeId:l,audioVolume:u,isAudioMuted:p,playSoundscape:d,stopSoundscape:m,setAudioVolume:g,toggleAudioMute:v,isYouTubePlaying:_,activeYouTubeItem:b,youtubeVolume:E,isYouTubeMuted:C,savedYouTubeItems:y,showYouTubePreview:S,setShowYouTubePreview:R,playYouTubeItem:F,toggleYouTubePlay:D,stopYouTube:I,nextYouTubeTrack:L,prevYouTubeTrack:w,setYouTubeVolume:N,toggleYouTubeMute:Z,addYouTubeToLibrary:V,removeYouTubeFromLibrary:$}=is(),z=t==="light",[B,W]=Se.useState(r||"youtube"),[j,ce]=Se.useState(""),[Q,Y]=Se.useState(""),[X,H]=Se.useState(null),[P,q]=Se.useState(null),[Ee,ee]=Se.useState(null),[le,be]=Se.useState(null);if(Se.useEffect(()=>{if(!Ee){be(null);return}be(Ee*60);const Te=setInterval(()=>{be(Ue=>Ue===null||Ue<=1?(m(),I(),ee(null),null):Ue-1)},1e3);return()=>clearInterval(Te)},[Ee,m,I]),Se.useEffect(()=>{const Te=Ue=>{Ue.key==="Escape"&&s&&e()};return window.addEventListener("keydown",Te),()=>window.removeEventListener("keydown",Te)},[s,e]),!s)return null;const Ae=ua.find(Te=>Te.id===l)||ua[0],we=Te=>{const Ue=Math.floor(Te/60),Xe=Te%60;return`${Ue}:${Xe.toString().padStart(2,"0")}`},ze=Te=>{if(Te.preventDefault(),H(null),q(null),!j.trim()){H("Please enter a YouTube video or playlist link.");return}const Ue=V(j.trim(),Q.trim()||void 0);if(!Ue.success||!Ue.item){H(Ue.error||"Failed to parse YouTube link.");return}F(Ue.item),ce(""),Y(""),q(`Playing: ${Ue.item.title}`),setTimeout(()=>q(null),4e3)},qe=B==="youtube"?b?b.title:"No YouTube stream selected":Ae.title,ke=B==="youtube"?_:o;return f.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 backdrop-blur-xl animate-fadeIn select-none ${z?"bg-black/45":"bg-black/85"}`,role:"dialog","aria-modal":"true","aria-labelledby":"audio-modal-title",children:[f.jsx("div",{className:"fixed inset-0",onClick:e,"aria-hidden":"true"}),f.jsxs("div",{className:`relative z-10 w-full max-w-2xl border rounded-3xl shadow-[0_20px_70px_rgba(0,0,0,0.85)] flex flex-col max-h-[90vh] overflow-hidden ${z?"bg-white/95 border-zinc-200 text-zinc-900 shadow-2xl":"bg-[#0b0d1e] border-white/[0.12] text-white shadow-2xl"}`,children:[f.jsxs("div",{className:`flex items-center justify-between px-6 py-4 border-b shrink-0 ${z?"border-zinc-200 bg-zinc-50/80":"border-white/[0.08] bg-white/[0.02]"}`,children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:`w-9 h-9 rounded-2xl border flex items-center justify-center ${z?"bg-rose-50 border-rose-200 text-red-600":"bg-red-500/20 border-red-400/40 text-red-400"}`,children:f.jsx(ac,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsxs("h2",{id:"audio-modal-title",className:`text-sm sm:text-base font-display font-semibold tracking-wide flex items-center gap-2 ${z?"text-zinc-900":"text-white"}`,children:["Focus Audio Sanctuary",f.jsx("span",{className:`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border ${B==="youtube"?z?"bg-red-50 text-red-700 border-red-200":"bg-red-500/15 text-red-300 border-red-500/30":z?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-emerald-500/15 text-emerald-300 border-emerald-500/30"}`,children:B==="youtube"?"YouTube Online • Infinite Audio":"Web Audio • Offline"})]}),f.jsx("p",{className:`text-xs font-sans mt-0.5 ${z?"text-zinc-500":"text-zinc-400"}`,children:B==="youtube"?"Paste any YouTube video or playlist link or choose curated study streams":"Procedurally synthesized ambient soundscapes. Zero network required."})]})]}),f.jsx("button",{type:"button",onClick:e,className:`w-8 h-8 rounded-xl flex items-center justify-center transition-colors cursor-pointer border ${z?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600 border-zinc-200":"bg-white/[0.05] hover:bg-white/[0.12] text-zinc-400 hover:text-white border-white/[0.08]"}`,"aria-label":"Close sound sanctuary",children:f.jsx(Mr,{className:"w-4 h-4"})})]}),f.jsxs("div",{className:`flex items-center gap-2 px-6 pt-3 border-b shrink-0 ${z?"border-zinc-200 bg-zinc-50/50":"border-white/[0.06] bg-black/20"}`,children:[f.jsxs("button",{type:"button",onClick:()=>W("youtube"),className:`flex items-center gap-2 px-4 py-2.5 text-xs font-display font-semibold border-b-2 transition-all cursor-pointer ${B==="youtube"?z?"border-red-600 text-red-700":"border-red-500 text-white":z?"border-transparent text-zinc-500 hover:text-zinc-900":"border-transparent text-zinc-400 hover:text-zinc-200"}`,children:[f.jsx(oo,{className:"w-4 h-4 text-red-500"}),f.jsx("span",{children:"YouTube Audio & Playlists"})]}),f.jsxs("button",{type:"button",onClick:()=>W("ambient"),className:`flex items-center gap-2 px-4 py-2.5 text-xs font-display font-semibold border-b-2 transition-all cursor-pointer ${B==="ambient"?z?"border-violet-600 text-violet-700":"border-violet-400 text-white":z?"border-transparent text-zinc-500 hover:text-zinc-900":"border-transparent text-zinc-400 hover:text-zinc-200"}`,children:[f.jsx(am,{className:"w-4 h-4 text-violet-500"}),f.jsx("span",{children:"Procedural Soundscapes (Offline)"})]})]}),B==="youtube"&&f.jsxs("div",{className:"flex-1 overflow-y-auto p-5 sm:p-6 space-y-5 animate-fadeIn",children:[f.jsxs("form",{onSubmit:ze,className:"space-y-2",children:[f.jsxs("div",{className:"flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold",children:[f.jsx("span",{className:z?"text-zinc-800":"text-zinc-300",children:"Play YouTube Link or Playlist"}),f.jsx("span",{className:`text-[10px] font-sans font-normal ${z?"text-zinc-500":"text-zinc-400"}`,children:"Supports videos, live streams & playlists"})]}),f.jsxs("div",{className:"flex flex-col sm:flex-row gap-2",children:[f.jsx("input",{type:"text",placeholder:"Paste YouTube link (e.g. https://www.youtube.com/watch?v=... or playlist?list=...)",value:j,onChange:Te=>{ce(Te.target.value),X&&H(null)},className:`flex-1 px-3.5 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-2 ${z?"bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:ring-red-500/20 focus:border-red-500":"bg-white/[0.04] border-white/[0.1] text-white placeholder-zinc-500 focus:ring-red-400/30 focus:border-red-400"}`}),f.jsxs("button",{type:"submit",className:"px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-display font-semibold flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer shrink-0",children:[f.jsx(Jl,{className:"w-4 h-4"}),f.jsx("span",{children:"Load & Play"})]})]}),X&&f.jsxs("div",{className:"flex items-center gap-2 p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-sans",children:[f.jsx(og,{className:"w-4 h-4 shrink-0"}),f.jsx("span",{children:X})]}),P&&f.jsxs("div",{className:"flex items-center gap-2 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-sans",children:[f.jsx(Ms,{className:"w-4 h-4 shrink-0"}),f.jsx("span",{children:P})]})]}),b&&f.jsxs("div",{className:`p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${z?"bg-red-50/70 border-red-200 text-zinc-900 shadow-sm":"bg-red-950/20 border-red-500/30 text-white"}`,children:[f.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[f.jsxs("div",{className:"w-12 h-12 rounded-xl overflow-hidden bg-black/40 shrink-0 border border-white/10 relative",children:[f.jsx("img",{src:b.thumbnailUrl||Ql[0].thumbnailUrl,alt:"",className:"w-full h-full object-cover"}),_&&f.jsx("div",{className:"absolute inset-0 bg-black/35 flex items-center justify-center",children:f.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"})})]}),f.jsxs("div",{className:"min-w-0",children:[f.jsx("div",{className:"flex items-center gap-1.5",children:f.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-red-600 font-bold",children:b.type==="playlist"?"PLAYLIST":"NOW STREAMING"})}),f.jsx("h3",{className:`text-xs sm:text-sm font-display font-semibold truncate ${z?"text-zinc-900":"text-white"}`,children:b.title}),f.jsx("p",{className:`text-[11px] font-sans truncate ${z?"text-zinc-600":"text-zinc-400"}`,children:b.channel||"YouTube"})]})]}),f.jsxs("div",{className:"flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end",children:[b.type==="playlist"&&f.jsxs(f.Fragment,{children:[f.jsx("button",{type:"button",onClick:w,className:`p-2 rounded-xl border transition-colors cursor-pointer ${z?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-white"}`,title:"Previous Track in Playlist",children:f.jsx(mf,{className:"w-3.5 h-3.5"})}),f.jsx("button",{type:"button",onClick:L,className:`p-2 rounded-xl border transition-colors cursor-pointer ${z?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-white"}`,title:"Next Track in Playlist",children:f.jsx(lc,{className:"w-3.5 h-3.5"})})]}),f.jsxs("button",{type:"button",onClick:()=>{try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}},className:"px-2.5 py-1.5 rounded-xl border border-emerald-500/40 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-sans font-bold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer",title:"Force Unmute & Max Volume",children:[f.jsx(gf,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Unmute"})]}),f.jsxs("button",{type:"button",onClick:()=>R(!S),className:`px-3 py-1.5 rounded-xl border text-xs font-sans flex items-center gap-1.5 transition-colors cursor-pointer ${S?"bg-red-600 text-white border-red-600 font-medium":z?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-zinc-300"}`,title:"Toggle Floating Video Preview",children:[f.jsx(UM,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:S?"Hide Video":"View Video"})]})]})]}),f.jsxs("div",{className:"space-y-2.5",children:[f.jsxs("div",{className:`flex items-center gap-2 text-xs font-display uppercase tracking-wider font-semibold ${z?"text-zinc-800":"text-zinc-300"}`,children:[f.jsx(Ms,{className:"w-3.5 h-3.5 text-amber-500"}),f.jsx("span",{children:"Curated Focus & Lo-Fi Streams"})]}),f.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:Ql.map(Te=>{const Ue=(b==null?void 0:b.id)===Te.id||(b==null?void 0:b.videoId)===Te.videoId&&Te.videoId,Xe=Ue&&_;return f.jsxs("button",{type:"button",onClick:()=>{Xe?D():F(Te)},className:`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${Ue?z?"bg-red-50 border-red-500 ring-2 ring-red-500/20 shadow-sm":"bg-red-500/15 border-red-400 shadow-[0_0_20px_rgba(239,68,68,0.2)]":z?"bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90 text-zinc-900":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]"}`,children:[f.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[f.jsx("div",{className:"w-9 h-9 rounded-xl overflow-hidden bg-black/40 shrink-0 border border-white/10",children:f.jsx("img",{src:Te.thumbnailUrl,alt:"",onError:mt=>{mt.currentTarget.src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=400&auto=format&fit=crop"},className:"w-full h-full object-cover"})}),f.jsxs("div",{className:"min-w-0",children:[f.jsx("div",{className:`text-xs font-display font-semibold truncate ${Ue?z?"text-red-950 font-bold":"text-white":z?"text-zinc-900":"text-zinc-200"}`,children:Te.title}),f.jsx("div",{className:`text-[10px] font-sans truncate ${z?"text-zinc-500":"text-zinc-400"}`,children:Te.channel})]})]}),f.jsx("div",{className:`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${Xe?"bg-red-600 text-white shadow-sm":z?"bg-zinc-200 text-zinc-700":"bg-white/10 text-white"}`,children:Xe?f.jsx(Zi,{className:"w-3.5 h-3.5 fill-current"}):f.jsx(Oi,{className:"w-3.5 h-3.5 ml-0.5 fill-current"})})]},Te.id)})})]}),y.filter(Te=>!Te.isCurated).length>0&&f.jsxs("div",{className:"space-y-2.5",children:[f.jsx("div",{className:`flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold ${z?"text-zinc-800":"text-zinc-300"}`,children:f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(rm,{className:"w-3.5 h-3.5 text-red-500"}),f.jsx("span",{children:"My Saved YouTube Library"})]})}),f.jsx("div",{className:"space-y-2",children:y.filter(Te=>!Te.isCurated).map(Te=>{const Ue=(b==null?void 0:b.id)===Te.id,Xe=Ue&&_;return f.jsxs("div",{className:`p-3 rounded-2xl border flex items-center justify-between gap-3 transition-all ${Ue?z?"bg-red-50 border-red-500 ring-2 ring-red-500/20":"bg-red-500/15 border-red-400":z?"bg-zinc-50 border-zinc-200":"bg-white/[0.03] border-white/[0.06]"}`,children:[f.jsxs("div",{onClick:()=>F(Te),className:"flex items-center gap-3 min-w-0 flex-1 cursor-pointer",children:[f.jsx("div",{className:`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${Te.type==="playlist"?"bg-purple-600/20 text-purple-400":"bg-red-600/20 text-red-400"}`,children:Te.type==="playlist"?f.jsx(rm,{className:"w-4 h-4"}):f.jsx(oo,{className:"w-4 h-4"})}),f.jsxs("div",{className:"min-w-0",children:[f.jsx("div",{className:`text-xs font-display font-semibold truncate ${z?"text-zinc-900":"text-white"}`,children:Te.title}),f.jsxs("div",{className:`text-[10px] font-sans truncate ${z?"text-zinc-500":"text-zinc-400"}`,children:[Te.type==="playlist"?"Playlist":"Single Stream"," • ",Te.url]})]})]}),f.jsxs("div",{className:"flex items-center gap-1.5 shrink-0",children:[f.jsx("button",{type:"button",onClick:()=>{Xe?D():F(Te)},className:`p-2 rounded-xl transition-colors cursor-pointer ${Xe?"bg-red-600 text-white":z?"bg-zinc-200 text-zinc-800 hover:bg-zinc-300":"bg-white/10 text-white hover:bg-white/20"}`,children:Xe?f.jsx(Zi,{className:"w-3.5 h-3.5 fill-current"}):f.jsx(Oi,{className:"w-3.5 h-3.5 fill-current"})}),f.jsx("button",{type:"button",onClick:()=>$(Te.id),className:`p-2 rounded-xl transition-colors cursor-pointer ${z?"text-zinc-400 hover:text-red-600":"text-zinc-500 hover:text-red-400"}`,title:"Remove from library",children:f.jsx(cc,{className:"w-3.5 h-3.5"})})]})]},Te.id)})})]})]}),B==="ambient"&&f.jsx("div",{className:"flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 animate-fadeIn",children:f.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3.5",children:ua.map(Te=>{const Ue=l===Te.id,Xe=Ue&&o;return f.jsxs("div",{onClick:()=>{Xe?m():d(Te.id)},className:`relative p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between select-none group ${Ue?z?"bg-violet-50 border-violet-500 ring-2 ring-violet-500/20 shadow-sm":"bg-violet-950/35 border-violet-500/50 shadow-[0_0_25px_rgba(168,85,247,0.18)]":z?"bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90 text-zinc-900":"bg-white/[0.025] hover:bg-white/[0.05] border-white/[0.08] hover:border-white/[0.18]"}`,children:[f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center justify-between mb-2",children:[f.jsx("span",{className:`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md border ${z?"bg-zinc-200/60 text-zinc-700 border-zinc-300":"text-zinc-400 bg-white/[0.05] border-white/[0.06]"}`,children:Te.category}),f.jsx("div",{className:`w-7 h-7 rounded-full flex items-center justify-center transition-all ${Xe?"bg-violet-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.6)]":z?"bg-zinc-200 text-zinc-700 group-hover:bg-zinc-300":"bg-white/[0.06] text-zinc-300 group-hover:bg-white/[0.15] group-hover:text-white"}`,children:Xe?f.jsx(Zi,{className:"w-3.5 h-3.5 fill-current"}):f.jsx(Oi,{className:"w-3.5 h-3.5 ml-0.5 fill-current"})})]}),f.jsx("h3",{className:`text-sm font-display font-semibold tracking-wide transition-colors ${z?"text-zinc-900":"text-white"}`,children:Te.title}),f.jsx("p",{className:`text-xs font-sans mt-1 leading-snug line-clamp-2 ${z?"text-zinc-600":"text-zinc-400"}`,children:Te.tagline})]}),f.jsxs("div",{className:`mt-3 pt-2.5 border-t flex items-center justify-between text-[10px] font-mono ${z?"border-zinc-200 text-zinc-500":"border-white/[0.06] text-zinc-400"}`,children:[f.jsx("span",{className:"truncate pr-2",children:Te.frequency}),Xe&&f.jsxs("span",{className:"flex items-center gap-1 text-emerald-500 font-semibold shrink-0",children:[f.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"}),"PLAYING"]})]})]},Te.id)})})}),f.jsxs("div",{className:`px-5 py-3 border-t flex flex-wrap items-center justify-between gap-3 shrink-0 ${z?"border-zinc-200 bg-zinc-50/60":"border-white/[0.06] bg-white/[0.01]"}`,children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(pc,{className:`w-4 h-4 ${z?"text-zinc-600":"text-violet-400"}`}),f.jsx("span",{className:`text-xs font-display font-medium ${z?"text-zinc-800":"text-zinc-300"}`,children:"Auto-Stop Timer:"}),le!==null&&f.jsxs("span",{className:`text-xs font-mono font-bold px-2 py-0.5 rounded-md border ${z?"bg-amber-100 text-amber-900 border-amber-300":"text-amber-300 bg-amber-500/15 border-amber-500/30"}`,children:[we(le)," left"]})]}),f.jsx("div",{className:"flex items-center gap-1.5",children:[{label:"Off",val:null},{label:"15m",val:15},{label:"25m",val:25},{label:"45m",val:45},{label:"60m",val:60}].map(Te=>f.jsx("button",{type:"button",onClick:()=>ee(Te.val),className:`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${Ee===Te.val?z?"bg-zinc-900 text-white font-bold shadow-sm":"bg-violet-600 text-white font-bold shadow-sm":z?"bg-zinc-200/80 text-zinc-700 hover:bg-zinc-300":"bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08]"}`,children:Te.label},Te.label))})]}),f.jsxs("div",{className:`p-4 sm:p-5 border-t flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 ${z?"border-zinc-200 bg-zinc-100/90":"border-white/[0.08] bg-[#070914]/90 backdrop-blur-xl"}`,children:[f.jsxs("div",{className:"flex items-center gap-3 w-full sm:w-auto",children:[f.jsx("div",{className:`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${B==="youtube"?z?"bg-red-50 border-red-200 text-red-600":"bg-red-500/20 border-red-400/40 text-red-300":z?"bg-violet-50 border-violet-200 text-violet-700":"bg-violet-600/30 border-violet-400/40 text-violet-200"}`,children:B==="youtube"?f.jsx(oo,{className:`w-5 h-5 ${_?"animate-pulse text-red-500":"text-zinc-400"}`}):f.jsx(am,{className:`w-5 h-5 ${o?"text-violet-500 animate-pulse":"text-zinc-400"}`})}),f.jsxs("div",{className:"min-w-0 flex-1",children:[f.jsx("p",{className:`text-xs font-display font-medium truncate ${z?"text-zinc-900":"text-white"}`,children:qe}),f.jsxs("div",{className:"flex items-center gap-2 mt-0.5",children:[f.jsx(Yg,{isPlaying:ke,color:B==="youtube"?"#ef4444":z?"#7c3aed":Ae.accentColor,className:"w-16 h-4"}),f.jsx("span",{className:`text-[10px] font-mono ${z?"text-zinc-500":"text-zinc-400"}`,children:ke?B==="youtube"?"Streaming YouTube...":"Synthesizing...":"Audio Paused"})]})]})]}),f.jsxs("div",{className:"flex items-center gap-4 w-full sm:w-auto justify-end",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("button",{type:"button",onClick:B==="youtube"?Z:v,className:`transition-colors cursor-pointer ${z?"text-zinc-600 hover:text-black":"text-zinc-400 hover:text-white"}`,title:"Toggle Mute",children:(B==="youtube"?C:p)?f.jsx($g,{className:"w-4 h-4 text-red-500"}):f.jsx(gf,{className:"w-4 h-4"})}),f.jsx("input",{type:"range",min:"0",max:B==="youtube"?100:1,step:B==="youtube"?1:.01,value:B==="youtube"?C?0:E:p?0:u,onChange:Te=>{const Ue=parseFloat(Te.target.value);if(B==="youtube"){N(Ue),C&&Z();try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}}else g(Ue)},className:"w-20 sm:w-24 h-1.5 bg-zinc-300 rounded-lg appearance-none cursor-pointer accent-red-600","aria-label":"Volume slider"}),f.jsx("span",{className:`text-[10px] font-mono w-8 tabular-nums ${z?"text-zinc-600":"text-zinc-400"}`,children:B==="youtube"?`${C?0:Math.round(E)}%`:`${p?0:Math.round(u*100)}%`})]}),f.jsx("button",{type:"button",onClick:()=>{B==="youtube"?D():o?m():d(l)},className:`px-5 py-2.5 rounded-xl text-white text-xs font-display font-semibold tracking-wider uppercase flex items-center gap-2 shadow-md transition-all cursor-pointer ${B==="youtube"?"bg-red-600 hover:bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.35)]":"bg-violet-600 hover:bg-violet-500 shadow-[0_0_20px_rgba(147,51,234,0.35)]"}`,children:ke?f.jsxs(f.Fragment,{children:[f.jsx(Zi,{className:"w-3.5 h-3.5 fill-current"}),f.jsx("span",{children:"Pause"})]}):f.jsxs(f.Fragment,{children:[f.jsx(Oi,{className:"w-3.5 h-3.5 fill-current"}),f.jsx("span",{children:"Play"})]})})]})]})]})]})},GM=({isOpen:s,onClose:e})=>{const{profile:t,updateProfile:r,appTheme:o,setStudySubject:l,lastActiveDate:u,resetDayProgress:p,factoryReset:d}=is(),m=o==="light",[g,v]=Se.useState(t.name||"Azan"),[_,b]=Se.useState(t.motto||"Remember, you are here for you."),[E,C]=Se.useState(t.defaultFocusTopic||"Engineering"),[y,S]=Se.useState(t.defaultFocusMode||"Deep Work"),[R,F]=Se.useState(!1),[D,I]=Se.useState(null);if(Se.useEffect(()=>{v(t.name||"Azan"),b(t.motto||"Remember, you are here for you."),C(t.defaultFocusTopic||"Engineering"),S(t.defaultFocusMode||"Deep Work")},[t,s]),Se.useEffect(()=>{const $=z=>{z.key==="Escape"&&s&&e()};return window.addEventListener("keydown",$),()=>window.removeEventListener("keydown",$)},[s,e]),!s)return null;const L=$=>{$.preventDefault();const z=g.trim()||"Azan",B=_.trim()||"Remember, you are here for you.",W=E.trim()||"Engineering",j=y.trim()||"Deep Work";r({name:z,motto:B,defaultFocusTopic:W,defaultFocusMode:j}),l(W),F(!0),setTimeout(()=>{F(!1),e()},500)},w=()=>{v("Azan"),b("Remember, you are here for you."),C("Engineering"),S("Deep Work"),r({name:"Azan",motto:"Remember, you are here for you.",defaultFocusTopic:"Engineering",defaultFocusMode:"Deep Work"}),l("Engineering")},N=()=>{window.confirm("Start a fresh day? This will uncheck today's tasks & habits, reset hydration to 0%, and reset focus timer.")&&(p(),I("Today's progress has been reset!"),setTimeout(()=>I(null),3e3))},Z=()=>{window.confirm("WARNING: Are you sure you want to perform a factory reset? All saved tasks, habits, focus history, and settings will be permanently wiped and restored to default.")&&(d(),I("All app data restored to factory defaults."),setTimeout(()=>{I(null),e()},1500))},V=()=>{const $=new Date().getHours();return $>=5&&$<12?"Good morning":$>=12&&$<17?"Good afternoon":$>=17&&$<22?"Good evening":"Late night focus"};return f.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-fadeIn select-none ${m?"bg-black/35":"bg-black/80"}`,children:[f.jsx("div",{className:"fixed inset-0",onClick:e,"aria-hidden":"true"}),f.jsxs("div",{role:"dialog","aria-modal":"true","aria-labelledby":"profile-modal-title",className:`relative w-full max-w-lg overflow-hidden rounded-3xl border shadow-2xl flex flex-col z-10 ${m?"bg-white/95 border-zinc-200 text-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)]":"cosmic-card border-white/[0.14] text-white shadow-2xl"}`,children:[f.jsxs("div",{className:`flex items-center justify-between p-5 pb-3 border-b shrink-0 ${m?"border-zinc-200":"border-white/[0.08]"}`,children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:`w-8 h-8 rounded-xl border flex items-center justify-center ${m?"bg-amber-50 border-amber-200 text-amber-700":"bg-amber-500/20 border-amber-400/30 text-amber-300"}`,children:f.jsx(Vg,{className:"w-4 h-4"})}),f.jsxs("div",{children:[f.jsx("h2",{id:"profile-modal-title",className:`text-sm font-display uppercase tracking-widest font-bold ${m?"text-zinc-900":"text-white"}`,children:"Personal Sanctuary Profile"}),f.jsx("p",{className:`text-[11px] font-sans ${m?"text-zinc-500":"text-zinc-400"}`,children:"Tailor your name, daily motto & focus targets"})]})]}),f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx("button",{type:"button",onClick:w,"aria-label":"Reset profile to defaults",title:"Reset to defaults",className:`p-2 rounded-xl transition-colors cursor-pointer ${m?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white"}`,children:f.jsx(br,{className:"w-3.5 h-3.5"})}),f.jsx("button",{type:"button",onClick:e,"aria-label":"Close Profile Modal",className:`p-2 rounded-xl transition-colors cursor-pointer ${m?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white"}`,children:f.jsx(Mr,{className:"w-4 h-4"})})]})]}),f.jsxs("form",{onSubmit:L,className:"p-6 space-y-4",children:[f.jsxs("div",{className:`p-4 rounded-2xl border text-center space-y-1 transition-all ${m?"bg-zinc-50 border-zinc-200 text-zinc-800":"bg-white/[0.03] border-white/[0.08] text-zinc-200"}`,children:[f.jsx("span",{className:`text-[10px] font-mono uppercase tracking-widest ${m?"text-zinc-500":"text-zinc-400"}`,children:"Live Greeting Preview"}),f.jsxs("p",{className:"text-xs sm:text-sm font-sans leading-relaxed",children:[V(),","," ",f.jsx("strong",{className:m?"text-zinc-950":"text-white",children:g.trim()||"Azan"}),". •"," ",f.jsxs("span",{className:`italic ${m?"text-zinc-700 font-medium":"text-zinc-300"}`,children:["“",_.trim()||"Remember, you are here for you.","”"]})]})]}),f.jsxs("div",{className:"space-y-1.5",children:[f.jsxs("label",{className:`text-xs font-semibold flex items-center justify-between ${m?"text-zinc-800":"text-zinc-200"}`,children:[f.jsxs("span",{className:"flex items-center gap-1.5",children:[f.jsx(NM,{className:"w-3.5 h-3.5 text-amber-500"}),f.jsx("span",{children:"Your Name"})]}),f.jsx("span",{className:`text-[10px] font-normal ${m?"text-zinc-500":"text-zinc-400"}`,children:"Used in greetings & daily focus"})]}),f.jsx("input",{type:"text",value:g,onChange:$=>v($.target.value),placeholder:"e.g. Azan",className:"w-full cosmic-input rounded-xl px-3.5 py-2.5 text-xs font-medium"})]}),f.jsxs("div",{className:"space-y-1.5",children:[f.jsxs("label",{className:`text-xs font-semibold flex items-center justify-between ${m?"text-zinc-800":"text-zinc-200"}`,children:[f.jsxs("span",{className:"flex items-center gap-1.5",children:[f.jsx(PM,{className:"w-3.5 h-3.5 text-violet-400"}),f.jsx("span",{children:"Daily Mantra / Motto"})]}),f.jsx("span",{className:`text-[10px] font-normal ${m?"text-zinc-500":"text-zinc-400"}`,children:"Displayed on your wallpaper"})]}),f.jsx("input",{type:"text",value:_,onChange:$=>b($.target.value),placeholder:"e.g. Remember, you are here for you.",className:"w-full cosmic-input rounded-xl px-3.5 py-2.5 text-xs font-medium"})]}),f.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-1",children:[f.jsxs("div",{className:"space-y-1.5",children:[f.jsxs("label",{className:`text-xs font-semibold flex items-center gap-1.5 ${m?"text-zinc-800":"text-zinc-200"}`,children:[f.jsx(IM,{className:"w-3.5 h-3.5 text-emerald-400"}),f.jsx("span",{children:"Primary Focus Topic"})]}),f.jsx("input",{type:"text",value:E,onChange:$=>C($.target.value),placeholder:"e.g. Engineering",className:"w-full cosmic-input rounded-xl px-3.5 py-2 text-xs"})]}),f.jsxs("div",{className:"space-y-1.5",children:[f.jsxs("label",{className:`text-xs font-semibold flex items-center gap-1.5 ${m?"text-zinc-800":"text-zinc-200"}`,children:[f.jsx(mg,{className:"w-3.5 h-3.5 text-amber-500"}),f.jsx("span",{children:"Default Focus Mode"})]}),f.jsx("input",{type:"text",value:y,onChange:$=>S($.target.value),placeholder:"e.g. Deep Work",className:"w-full cosmic-input rounded-xl px-3.5 py-2 text-xs"})]})]}),f.jsxs("div",{className:"pt-2",children:[f.jsx("span",{className:`text-[10px] font-mono uppercase tracking-wider block mb-1.5 ${m?"text-zinc-500":"text-zinc-400"}`,children:"Quick Mantras"}),f.jsx("div",{className:"flex flex-wrap gap-1.5",children:["Remember, you are here for you.","Discipline equals true freedom.","Deep focus over scattered noise.","Build with relentless craft."].map($=>f.jsxs("button",{type:"button",onClick:()=>b($),className:`text-[11px] px-2.5 py-1 rounded-lg border transition-all text-left cursor-pointer ${_===$?m?"bg-violet-100 border-violet-300 text-violet-900 font-medium":"bg-violet-600/30 border-violet-400/50 text-violet-200 font-medium":m?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300"}`,children:["“",$,"”"]},$))})]}),f.jsxs("div",{className:`p-3.5 rounded-2xl border space-y-2.5 ${m?"bg-zinc-50 border-zinc-200":"bg-white/[0.02] border-white/[0.08]"}`,children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx(EM,{className:`w-3.5 h-3.5 ${m?"text-violet-700":"text-violet-400"}`}),f.jsx("span",{className:`text-xs font-semibold ${m?"text-zinc-800":"text-zinc-200"}`,children:"Daily Rollover & Data Control"})]}),f.jsxs("span",{className:`text-[10px] font-mono ${m?"text-zinc-500":"text-zinc-400"}`,children:["Date: ",u]})]}),D&&f.jsxs("div",{className:"p-2 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs flex items-center gap-2",children:[f.jsx(wr,{className:"w-3.5 h-3.5 shrink-0"}),f.jsx("span",{children:D})]}),f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1",children:[f.jsxs("button",{type:"button",onClick:N,className:`px-3 py-2 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${m?"bg-white hover:bg-zinc-100 text-zinc-800 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200 border-white/[0.10]"}`,title:"Uncheck today's tasks & habits, reset hydration",children:[f.jsx(br,{className:"w-3.5 h-3.5 text-violet-400"}),f.jsx("span",{children:"Start Fresh Day"})]}),f.jsxs("button",{type:"button",onClick:Z,className:`px-3 py-2 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${m?"bg-rose-50 hover:bg-rose-100 text-rose-700 border-rose-200":"bg-rose-950/20 hover:bg-rose-900/40 text-rose-300 border-rose-500/20 hover:border-rose-500/40"}`,title:"Wipe data and restore factory defaults",children:[f.jsx(cc,{className:"w-3.5 h-3.5 text-rose-400"}),f.jsx("span",{children:"Factory Reset"})]})]})]}),f.jsxs("div",{className:"pt-4 flex items-center justify-end gap-2.5",children:[f.jsx("button",{type:"button",onClick:e,className:`px-4 py-2.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${m?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300"}`,children:"Cancel"}),f.jsx("button",{type:"submit",className:`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all cursor-pointer ${R?"bg-emerald-500 text-white":m?"bg-zinc-900 hover:bg-zinc-800 text-white":"bg-violet-600 hover:bg-violet-500 text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]"}`,children:R?f.jsxs(f.Fragment,{children:[f.jsx(wr,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Saved!"})]}):f.jsxs(f.Fragment,{children:[f.jsx(Ms,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Save Profile"})]})})]})]})]})]})},VM=({routines:s,activeBlock:e,activeMinutesLeft:t,onSelectBlock:r,isLight:o=!1,compact:l=!1})=>{const[u,p]=Se.useState(50),[d,m]=Se.useState("12:00"),[g,v]=Se.useState(null);Se.useEffect(()=>{const E=()=>{const y=new Date,S=y.getHours(),R=y.getMinutes(),F=(S+R/60)/24*100;p(F),m(`${S.toString().padStart(2,"0")}:${R.toString().padStart(2,"0")}`)};E();const C=setInterval(E,1e4);return()=>clearInterval(C)},[]);const _=E=>{if(E<=0)return"Ending soon";const C=Math.floor(E/60),y=E%60;return C===0?`${y}m left`:`${C}h ${y}m left`},b=E=>{if(E.colorTag)return E.colorTag;switch(E.iconType){case"morning":return"#f59e0b";case"afternoon":return"#8b5cf6";case"evening":return"#3b82f6";case"night":return"#6366f1";default:return"#10b981"}};return f.jsxs("div",{className:`w-full flex flex-col select-none transition-all ${l?"gap-1.5":"gap-3"}`,children:[!l&&f.jsxs("div",{className:"flex items-center justify-between text-xs px-1",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsxs("span",{className:"relative flex h-2 w-2",children:[f.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),f.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-emerald-500"})]}),f.jsx("span",{className:`font-mono text-[11px] font-semibold tracking-wider uppercase ${o?"text-zinc-800":"text-zinc-200"}`,children:e?e.title:"Intermission / Free Flow"}),e&&t>0&&f.jsx("span",{className:`px-2 py-0.5 rounded-full text-[10px] font-mono tracking-tight ${o?"bg-amber-100 text-amber-800 border border-amber-300":"bg-amber-500/15 text-amber-300 border border-amber-500/30"}`,children:_(t)})]}),f.jsxs("div",{className:`font-mono text-[11px] flex items-center gap-1.5 tabular-nums ${o?"text-zinc-500":"text-zinc-400"}`,children:[f.jsx(pc,{className:"w-3 h-3 opacity-70"}),f.jsxs("span",{children:["NOW: ",d]})]})]}),f.jsxs("div",{className:`relative w-full rounded-xl overflow-hidden border transition-all ${l?"h-5 border-white/[0.08]":"h-8 sm:h-9 shadow-inner border-white/[0.12]"} ${o?"bg-zinc-100 border-zinc-200":"bg-black/40"}`,children:[f.jsx("div",{className:`absolute inset-0 pointer-events-none opacity-40 ${o?"bg-gradient-to-r from-zinc-300 via-amber-100/50 via-sky-100/60 via-indigo-100/50 to-zinc-300":"bg-gradient-to-r from-[#0b0f19] via-[#1a1c2e] via-[#111f38] via-[#1e1b38] to-[#0b0f19]"}`}),f.jsxs("div",{className:"absolute inset-0 flex justify-between px-1 pointer-events-none opacity-25",children:[f.jsx("div",{className:"h-full border-r border-dashed border-current flex items-center pl-1 text-[9px] font-mono",children:"00:00"}),f.jsx("div",{className:"h-full border-r border-dashed border-current flex items-center pl-1 text-[9px] font-mono",children:"06:00"}),f.jsx("div",{className:"h-full border-r border-dashed border-current flex items-center pl-1 text-[9px] font-mono",children:"12:00"}),f.jsx("div",{className:"h-full border-r border-dashed border-current flex items-center pl-1 text-[9px] font-mono",children:"18:00"}),f.jsx("div",{className:"h-full flex items-center pr-1 text-[9px] font-mono",children:"24:00"})]}),s.map(E=>{let C=E.startHour,y=E.endHour;if(C===void 0||y===void 0){const I=E.timeRange.split(/[-–—to]/i);C=Kr(I[0],0),y=Kr(I[1],24)}const S=(e==null?void 0:e.id)===E.id,R=b(E);let F=Math.min(24,Math.max(0,C))/24*100,D=(Math.min(24,Math.max(0,y))-Math.min(24,Math.max(0,C)))/24*100;return D<=0&&(D=4),f.jsx("div",{onClick:()=>r&&r(E),onMouseEnter:()=>v(E),onMouseLeave:()=>v(null),className:`absolute top-0 bottom-0 rounded-lg cursor-pointer transition-all flex items-center px-2 group ${S?"z-20 ring-1 ring-white/60 shadow-lg":"z-10 opacity-80 hover:opacity-100"}`,style:{left:`${F}%`,width:`${D}%`,backgroundColor:`${R}${S?"55":"33"}`,borderLeft:`2px solid ${R}`,borderRight:`1px solid ${R}44`},title:`${E.title} (${E.timeRange}): ${E.description}`,children:f.jsx("span",{className:`truncate text-[10px] font-sans font-medium tracking-tight ${S?"text-white font-semibold":o?"text-zinc-800":"text-zinc-200"}`,children:E.title})},E.id)}),f.jsxs("div",{className:"absolute top-0 bottom-0 z-30 transition-all duration-1000 ease-linear pointer-events-none",style:{left:`${Math.min(99.5,Math.max(.5,u))}%`},children:[f.jsx("div",{className:"w-0.5 h-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,1)]"}),f.jsx("div",{className:"absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 bg-emerald-300 border border-emerald-100 shadow-[0_0_12px_rgba(52,211,153,1)]"})]})]}),!l&&g&&f.jsxs("div",{className:`p-2.5 rounded-xl border backdrop-blur-xl text-xs animate-fadeIn ${o?"bg-white/95 border-zinc-200 text-zinc-900 shadow-md":"bg-black/80 border-white/[0.12] text-zinc-200 shadow-xl"}`,children:[f.jsxs("div",{className:"flex items-center justify-between font-mono text-[11px] pb-1 border-b border-white/[0.08]",children:[f.jsx("span",{className:"font-bold text-white",children:g.title}),f.jsx("span",{className:"text-violet-400 tabular-nums",children:g.timeRange})]}),f.jsx("p",{className:"mt-1 text-[11px] leading-relaxed text-zinc-400",children:g.description})]})]})},WM=()=>{const{profile:s,tasks:e,toggleTask:t,addTask:r,deleteTask:o,habits:l,toggleHabit:u,addHabit:p,routines:d,addRoutineBlock:m,deleteRoutineBlock:g,resetRoutines:v,activeRoutineBlock:_,activeRoutineMinutesLeft:b,studySeconds:E,isStudyActive:C,studySubject:y,setStudySubject:S,toggleStudyTimer:R,resetStudyTimer:F,studySessions:D,pomodoroPhase:I,pomodoroSecondsLeft:L,pomodoroTotalSeconds:w,pomodoroSettings:N,setPomodoroSettings:Z,startPomodoro:V,togglePomodoro:$,resetPomodoro:z,skipPomodoroPhase:B,togglePomodoroDisplayMode:W,hydration:j,setHydration:ce,sleepHours:Q,setSleep:Y,dailyRating:X,setDailyRating:H,lastActiveDate:P,resetDayProgress:q,isHUDHidden:Ee,setIsHUDHidden:ee,wallpaperSettings:le,audioSource:be,isAudioPlaying:Ae,activeSoundscapeId:we,playSoundscape:ze,stopSoundscape:qe,isYouTubePlaying:ke,activeYouTubeItem:Te,toggleYouTubePlay:Ue,appTheme:Xe,toggleAppTheme:mt}=is(),me=Xe==="light",[yt,Lt]=Se.useState(!1),[on,Ut]=Se.useState(!1),[Zt,jt]=Se.useState(!1),[ln,K]=Se.useState(!1),[Ft,_t]=Se.useState("none"),[It,he]=Se.useState("pomodoro"),[Mt,tt]=Se.useState("12"),[rt,k]=Se.useState("00"),[T,se]=Se.useState("00"),[Pe,Me]=Se.useState(0),[Fe,Ge]=Se.useState("PM"),[ve,ye]=Se.useState(""),[_e,U]=Se.useState(322),[ae,oe]=Se.useState(80),Re=`${Mt}:${rt}:${T}`,[Ce,De]=Se.useState(""),[$e,at]=Se.useState(s.defaultFocusTopic||"Engineering"),[Ne,Qe]=Se.useState(s.defaultFocusMode||"Deep Work"),[ot,Be]=Se.useState(!1),[ft,vt]=Se.useState(""),[tn,bn]=Se.useState(""),[mn,St]=Se.useState(""),pt=I==="focus"||I==="break"||I==="paused",Et=Math.floor(L/60),Yt=L%60,$t=Et.toString().padStart(2,"0"),Fn=Yt.toString().padStart(2,"0"),Yn=w>0?1-L/w:0,zn=pt?Yn*360:Pe*360,qn=pt&&N.displayMode==="numbers",rr=qn?$t:Mt,Ti=qn?Fn:rt,rs=()=>{const fe=new Date().getHours();return fe>=5&&fe<12?"Good morning":fe>=12&&fe<17?"Good afternoon":fe>=17&&fe<22?"Good evening":"Late night focus"};Se.useEffect(()=>{const fe=()=>{const Ye=new Date,At=Ye.getHours(),Jt=Ye.getMinutes(),Gt=Ye.getSeconds(),Bt=At>=12?"PM":"AM",nn=le.clockFormat==="24h",it=nn?At.toString().padStart(2,"0"):(At%12||12).toString().padStart(2,"0"),gn=Jt.toString().padStart(2,"0"),ct=Gt.toString().padStart(2,"0");tt(it),k(gn),se(ct),Me(Gt/60),Ge(nn?"":Bt);const gi=new Date(Ye.getFullYear(),0,0),xn=Ye.getTime()-gi.getTime(),Vi=1e3*60*60*24,oi=Math.floor(xn/Vi);U(oi);const xi=Math.round((At*60+Jt)/1440*100);oe(xi);const Nt=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],cn=["January","February","March","April","May","June","July","August","September","October","November","December"];ye(`${Nt[Ye.getDay()]}, ${cn[Ye.getMonth()]} ${Ye.getDate()}, ${Ye.getFullYear()}`)};fe();const ht=setInterval(fe,1e3);return()=>clearInterval(ht)},[le.clockFormat,le.showSeconds,le.clockDivider]);const Kt=le.clockFontStyle==="serif"?"font-serif font-bold tracking-tight":le.clockFontStyle==="mono"?"font-mono font-bold tracking-tight":le.clockFontStyle==="minimal"?"font-sans font-light tracking-[0.06em]":"font-display font-extrabold tracking-tight",sr=le.clockSize==="compact"?"text-6xl sm:text-7xl md:text-8xl lg:text-[110px]":le.clockSize==="heroic"?"text-7xl sm:text-9xl md:text-[11rem] lg:text-[160px]":"text-7xl sm:text-8xl md:text-9xl lg:text-[136px]",ar=le.clockHalo==="none"?"opacity-0":le.clockHalo==="subtle"?"bg-violet-600/12 blur-[100px]":"bg-violet-600/25 blur-[140px] animate-pulse",Ar=le.clockColor==="white"?me?"text-zinc-950 drop-shadow-[0_4px_24px_rgba(0,0,0,0.1)]":"text-white drop-shadow-[0_15px_60px_rgba(0,0,0,0.95)]":le.clockColor==="gold"?"text-amber-300 drop-shadow-[0_8px_40px_rgba(245,158,11,0.6)]":le.clockColor==="cyan"?"text-cyan-300 drop-shadow-[0_8px_40px_rgba(6,182,212,0.6)]":le.clockColor==="rose"?"text-rose-300 drop-shadow-[0_8px_40px_rgba(244,63,94,0.6)]":me?"text-zinc-900 drop-shadow-[0_4px_24px_rgba(200,180,160,0.30)]":"text-white drop-shadow-[0_15px_60px_rgba(0,0,0,0.95)]",ge=le.clockPosition==="zenith"?"mt-6 sm:mt-12 mb-auto":le.clockPosition==="bottom"?"mt-auto mb-16 sm:mb-20":"my-auto";Se.useEffect(()=>{const fe=ht=>{ht.key==="Escape"&&(Ft!=="none"?_t("none"):Ee?ee(!1):ln&&K(!1))};return window.addEventListener("keydown",fe),()=>window.removeEventListener("keydown",fe)},[Ft,Ee,ln,ee]);const Je=fe=>{fe.preventDefault(),Ce.trim()&&(r(Ce.trim()),De(""))},M=e.filter(fe=>fe.completed).length,O=e.length>0?Math.round(M/e.length*100):0,ne=l.filter(fe=>fe.completed).length,ie=l.length>0?Math.round(ne/l.length*100):0,re=new Date;re.setDate(re.getDate()-7);const Ke=+((D||[]).filter(fe=>new Date(fe.timestamp)>=re).reduce((fe,ht)=>fe+ht.durationSeconds,0)/3600).toFixed(1),He=Math.min(100,Math.round(Ke/15*100)),We=fe=>{const ht=Math.floor(fe/60),Ye=fe%60;return`${ht.toString().padStart(2,"0")}:${Ye.toString().padStart(2,"0")}`},nt=ua.find(fe=>fe.id===we)||ua[0];return f.jsxs("div",{className:"relative w-screen h-screen max-h-screen overflow-hidden flex flex-col justify-between pt-safe-top pt-8 sm:pt-10 px-4 sm:px-8 pb-safe-bottom pb-6 select-none z-10 animate-fadeIn",children:[f.jsx("h1",{className:"sr-only",children:"FOR ME — Living Wallpaper & Focus Sanctuary"}),f.jsxs("header",{className:`relative flex items-center justify-between w-full min-h-12 shrink-0 z-20 gap-3 transition-opacity duration-300 ${Ee?"opacity-0 pointer-events-none":"opacity-100"}`,children:[f.jsxs("button",{type:"button",onClick:()=>ee(!0),className:"flex items-center gap-2.5 cursor-pointer group shrink-0 text-left",title:"Enter Zen Wallpaper Mode",children:[f.jsx("div",{className:`w-8 h-8 rounded-full border flex items-center justify-center text-[11px] font-mono font-medium tracking-tight shadow-sm transition-all ${me?"border-zinc-300/80 bg-white/80 text-zinc-900 group-hover:bg-white group-hover:border-zinc-400":"border-white/15 bg-white/[0.04] text-zinc-200 group-hover:bg-white/[0.1] group-hover:border-white/30"}`,children:"FM"}),f.jsx("span",{className:`font-sans font-bold text-[11px] tracking-[0.22em] uppercase group-hover:opacity-85 transition-opacity ${me?"text-zinc-900":"text-zinc-200"}`,children:"FOR ME"})]}),f.jsx("div",{className:"hidden md:flex absolute left-1/2 -translate-x-1/2 items-center pointer-events-none",children:f.jsxs("div",{className:`pointer-events-auto flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-2xl border text-[11px] font-sans font-medium shadow-sm transition-all ${me?"bg-white/85 border-zinc-200/90 text-zinc-700":"bg-[#090b16]/75 border-white/[0.08] text-zinc-300"}`,children:[f.jsx(Ms,{className:"w-3 h-3 text-amber-400"}),f.jsx("span",{children:ve}),_&&f.jsxs(f.Fragment,{children:[f.jsx("span",{className:"opacity-25",children:"•"}),f.jsxs("button",{type:"button",onClick:()=>K(!0),className:"hover:underline flex items-center gap-1 font-mono text-[10px] text-violet-400 cursor-pointer",title:"Open Daily Routine Protocols & 24h Timeline",children:[f.jsx(om,{className:"w-3 h-3 text-amber-400"}),f.jsx("span",{children:_.title})]})]})]})}),f.jsxs("nav",{"aria-label":"Wallpaper Quick Controls",className:`flex items-center gap-0.5 p-1 rounded-full backdrop-blur-2xl border transition-all ${me?"bg-white/90 border-zinc-200/90 text-zinc-700 shadow-[0_8px_24px_rgba(0,0,0,0.06)]":"bg-[#090b16]/75 border-white/[0.12] text-zinc-300 shadow-[0_12px_32px_rgba(0,0,0,0.6)]"}`,children:[f.jsx("button",{type:"button",onClick:()=>Lt(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${me?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Wallpaper Studio (Celestial Objects, Waves & Lighting)","aria-label":"Wallpaper Studio",children:f.jsx(Pg,{className:"w-3.5 h-3.5"})}),f.jsx("button",{type:"button",onClick:()=>K(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${me?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Daily Routine Protocols","aria-label":"Daily Routine Protocols",children:f.jsx(im,{className:"w-3.5 h-3.5"})}),f.jsxs("button",{type:"button",onClick:()=>Ut(!0),className:`relative w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${Ae||ke?me?"text-violet-600 bg-violet-50":"text-violet-300 bg-violet-600/20":me?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Focus Audio Sanctuary (YouTube Streams & Ambient Soundscapes)","aria-label":"Focus Audio Sanctuary",children:[be==="youtube"&&ke?f.jsx(oo,{className:"w-3.5 h-3.5 text-red-500 animate-pulse"}):f.jsx(ac,{className:`w-3.5 h-3.5 ${Ae||ke?"animate-pulse":""}`}),(Ae||ke)&&f.jsx("span",{className:"absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse"})]}),f.jsx("button",{type:"button",onClick:()=>jt(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${me?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:`Profile & Motto (${s.name})`,"aria-label":"Profile and Daily Mantra",children:f.jsx(Vg,{className:"w-3.5 h-3.5"})}),f.jsx("div",{className:`w-px h-3.5 mx-0.5 ${me?"bg-zinc-200":"bg-white/10"}`}),f.jsx("button",{type:"button",onClick:mt,className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${me?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:`Switch to ${me?"Obsidian Dark":"Creamy Light"} Theme`,"aria-label":"Toggle Light/Dark Theme",children:me?f.jsx(oc,{className:"w-3.5 h-3.5"}):f.jsx(Ug,{className:"w-3.5 h-3.5"})}),f.jsx("button",{type:"button",onClick:()=>ee(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${me?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Zen Mode (Hide all controls)","aria-label":"Enter Zen Mode",children:f.jsx(RM,{className:"w-3.5 h-3.5"})})]})]}),f.jsxs("main",{"aria-label":`Current time ${Re}`,className:`${ge} text-center flex flex-col items-center justify-center relative z-20 py-4 select-none transition-all duration-300`,children:[f.jsx("div",{className:`absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[780px] lg:h-[780px] rounded-full ${ar} pointer-events-none -z-10`}),f.jsxs("div",{className:"relative flex flex-col items-center group",children:[f.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none -z-10",children:f.jsxs("div",{className:`relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] md:w-[640px] md:h-[640px] rounded-full border border-dashed transition-all ${me?"border-zinc-300/70":"border-white/[0.08]"}`,children:[f.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-violet-400 shadow-[0_0_12px_rgba(168,85,247,0.9)]"}),f.jsx("div",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-white/40"}),f.jsx("div",{className:"absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-white/40"}),f.jsx("div",{className:"absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-white/40"}),f.jsx("div",{className:"absolute inset-0 transition-transform duration-1000 ease-linear pointer-events-none",style:{transform:`rotate(${zn}deg)`},children:f.jsxs("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center",children:[f.jsx("div",{className:`w-3.5 h-3.5 rounded-full animate-ping opacity-75 ${pt?I==="break"?"bg-cyan-400":"bg-violet-400":le.clockColor==="gold"?"bg-amber-400":le.clockColor==="cyan"?"bg-cyan-400":le.clockColor==="rose"?"bg-rose-400":"bg-violet-400"}`}),f.jsx("div",{className:`absolute w-3 h-3 rounded-full shadow-lg ${pt?I==="break"?"bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,1)]":"bg-violet-300 shadow-[0_0_20px_rgba(168,85,247,1)]":le.clockColor==="gold"?"bg-amber-300 shadow-[0_0_20px_rgba(251,191,36,1)]":le.clockColor==="cyan"?"bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,1)]":le.clockColor==="rose"?"bg-rose-300 shadow-[0_0_20px_rgba(244,63,94,1)]":"bg-violet-300 shadow-[0_0_20px_rgba(168,85,247,1)]"}`})]})}),f.jsx("div",{className:`absolute inset-8 sm:inset-12 md:inset-16 rounded-full border transition-all ${me?"border-zinc-200/50":"border-white/[0.04]"}`})]})}),pt?f.jsxs("button",{type:"button",onClick:W,className:`flex items-center gap-2 sm:gap-2.5 mb-2 sm:mb-3 px-4 py-1.5 rounded-full border backdrop-blur-2xl text-[10px] sm:text-[11px] font-mono tracking-widest uppercase transition-all shadow-md cursor-pointer group ${I==="break"?me?"bg-cyan-50/90 border-cyan-200 text-cyan-900 shadow-sm":"bg-cyan-950/60 border-cyan-500/40 text-cyan-300 shadow-[0_4px_24px_rgba(6,182,212,0.3)]":me?"bg-violet-50/90 border-violet-200 text-violet-900 shadow-sm":"bg-[#090b16]/85 border-violet-500/40 text-violet-300 shadow-[0_4px_24px_rgba(139,92,246,0.35)]"}`,title:"Click to toggle countdown digits vs wall clock digits",children:[f.jsxs("span",{className:"flex items-center gap-1.5 font-bold",children:[f.jsxs("span",{className:"relative flex h-2 w-2",children:[f.jsx("span",{className:`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${I==="break"?"bg-cyan-400":"bg-violet-400"}`}),f.jsx("span",{className:`relative inline-flex rounded-full h-2 w-2 ${I==="break"?"bg-cyan-500":"bg-violet-500"}`})]}),I==="break"?"RECOVERY BREAK":"FOCUS SPRINT"]}),f.jsx("span",{className:"opacity-25",children:"•"}),f.jsxs("span",{className:"tabular-nums font-bold",children:[$t,":",Fn," REMAINING"]}),f.jsx("span",{className:"opacity-25 hidden sm:inline",children:"•"}),f.jsx("span",{className:"hidden sm:inline opacity-80 uppercase",children:y}),f.jsx("span",{className:"opacity-25 hidden md:inline",children:"•"}),f.jsx("span",{className:"hidden md:inline text-[9px] opacity-60 group-hover:text-amber-400 transition-colors",children:qn?"SHOW CLOCK":"SHOW COUNTDOWN"})]}):f.jsxs("div",{className:`flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3 px-4 py-1 rounded-full border backdrop-blur-2xl text-[10px] sm:text-[11px] font-mono tracking-widest uppercase transition-all shadow-md ${me?"bg-white/80 border-zinc-200 text-zinc-700":"bg-[#090b16]/75 border-white/[0.12] text-zinc-300 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"}`,children:[f.jsxs("span",{className:"flex items-center gap-1.5 text-emerald-400 font-semibold",children:[f.jsxs("span",{className:"relative flex h-2 w-2",children:[f.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),f.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-emerald-500"})]}),"EPHEMERIS"]}),f.jsx("span",{className:"opacity-25",children:"•"}),f.jsxs("span",{className:"tabular-nums",children:["DAY ",_e]}),f.jsx("span",{className:"opacity-25",children:"•"}),f.jsxs("span",{className:"tabular-nums text-violet-400 font-semibold",children:[ae,"% SOLAR"]}),f.jsx("span",{className:"opacity-25 hidden sm:inline",children:"•"}),f.jsx("span",{className:"hidden sm:inline opacity-70",children:"AZAN ZENITH"})]}),f.jsxs("div",{onClick:pt?W:void 0,className:`inline-flex items-center justify-center max-w-[95vw] px-2 select-none leading-none flex-nowrap transition-all ${pt?"cursor-pointer":""} ${Kt} ${Ar}`,title:pt?"Click to toggle countdown / real time digits":void 0,children:[f.jsx("span",{className:`${sr} tracking-tight tabular-nums transition-all drop-shadow-[0_16px_50px_rgba(0,0,0,0.95)] ${me?"text-zinc-950 font-bold":"bg-gradient-to-b from-white via-white/95 to-zinc-400/90 bg-clip-text text-transparent font-bold"}`,children:rr}),f.jsx("span",{className:`inline-flex items-center justify-center px-1.5 sm:px-3 text-3xl sm:text-5xl md:text-6xl lg:text-7xl select-none transition-colors ${pt?I==="break"?"text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]":"text-violet-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]":le.clockColor==="gold"?"text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.8)]":le.clockColor==="cyan"?"text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]":le.clockColor==="rose"?"text-rose-400 drop-shadow-[0_0_20px_rgba(244,63,94,0.8)]":me?"text-zinc-600":"text-violet-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]"} animate-pulse`,children:le.clockDivider==="dot"?"·":le.clockDivider==="space"?" ":":"}),f.jsx("span",{className:`${sr} tracking-tight tabular-nums transition-all drop-shadow-[0_16px_50px_rgba(0,0,0,0.95)] ${me?"text-zinc-950 font-bold":"bg-gradient-to-b from-white via-white/95 to-zinc-400/90 bg-clip-text text-transparent font-bold"}`,children:Ti}),f.jsxs("div",{className:"flex flex-col items-center justify-center ml-3 sm:ml-5 md:ml-7 gap-2 self-center",children:[pt?f.jsxs("button",{type:"button",onClick:fe=>{fe.stopPropagation(),$()},className:`relative flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl border backdrop-blur-3xl transition-all shadow-2xl cursor-pointer group/pod ${me?"bg-white/95 border-violet-200 text-zinc-950 shadow-md hover:border-violet-400":"bg-[#090b16]/95 border-violet-500/30 text-white shadow-[0_12px_40px_rgba(0,0,0,0.8)] hover:border-violet-400/60"}`,title:I==="paused"?"Resume focus":"Pause focus (Tap to toggle)",children:[f.jsxs("svg",{className:"absolute inset-1.5 w-[calc(100%-12px)] h-[calc(100%-12px)] -rotate-90 pointer-events-none",viewBox:"0 0 36 36",children:[f.jsx("circle",{cx:"18",cy:"18",r:"15",stroke:"currentColor",strokeWidth:"2.5",className:"opacity-15",fill:"none"}),f.jsx("circle",{cx:"18",cy:"18",r:"15",stroke:"currentColor",strokeWidth:"2.8",className:`transition-all duration-300 ${I==="break"?"text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]":"text-violet-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]"}`,strokeDasharray:"94.25",strokeDashoffset:94.25*(1-Yn),strokeLinecap:"round",fill:"none"})]}),f.jsx("span",{className:"font-mono text-xs sm:text-sm md:text-base font-extrabold tabular-nums tracking-wider leading-none z-10 drop-shadow-sm",children:qn?`${Mt}:${rt}`:`${$t}:${Fn}`}),f.jsx("span",{className:`text-[7px] sm:text-[8px] font-mono tracking-widest uppercase mt-1 z-10 font-bold ${I==="paused"?"text-amber-400":I==="break"?"text-cyan-400":"text-violet-400"}`,children:I==="paused"?"PAUSED":qn?"CLOCK":I==="break"?"BREAK":"FOCUS"})]}):le.showSeconds&&f.jsxs("div",{className:`relative flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl border backdrop-blur-3xl transition-all shadow-2xl ${me?"bg-white/95 border-zinc-300 text-zinc-950 shadow-md":"bg-[#090b16]/90 border-white/20 text-white shadow-[0_12px_40px_rgba(0,0,0,0.8)]"}`,children:[f.jsxs("svg",{className:"absolute inset-1.5 w-[calc(100%-12px)] h-[calc(100%-12px)] -rotate-90 pointer-events-none",viewBox:"0 0 36 36",children:[f.jsx("circle",{cx:"18",cy:"18",r:"15",stroke:"currentColor",strokeWidth:"2.5",className:"opacity-15",fill:"none"}),f.jsx("circle",{cx:"18",cy:"18",r:"15",stroke:"currentColor",strokeWidth:"2.8",className:`transition-all duration-300 ${le.clockColor==="gold"?"text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]":le.clockColor==="cyan"?"text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]":le.clockColor==="rose"?"text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.9)]":"text-violet-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]"}`,strokeDasharray:"94.25",strokeDashoffset:94.25*(1-Pe),strokeLinecap:"round",fill:"none"})]}),f.jsx("span",{className:"font-mono text-base sm:text-xl md:text-2xl font-extrabold tabular-nums tracking-wider leading-none z-10 drop-shadow-sm",children:T}),f.jsx("span",{className:"text-[7px] sm:text-[8px] font-mono tracking-widest uppercase opacity-60 mt-1 z-10 font-bold",children:"SEC"})]}),pt?f.jsxs("div",{className:"flex items-center gap-1 z-10",children:[f.jsx("button",{type:"button",onClick:fe=>{fe.stopPropagation(),B()},className:`text-[9px] font-mono px-2 py-0.5 rounded-lg border backdrop-blur-xl transition-all cursor-pointer ${me?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/10 hover:bg-white/20 border-white/15 text-zinc-300"}`,title:"Skip to next phase",children:"SKIP"}),f.jsx("button",{type:"button",onClick:fe=>{fe.stopPropagation(),z()},className:`text-[9px] font-mono px-2 py-0.5 rounded-lg border backdrop-blur-xl transition-all cursor-pointer ${me?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/10 hover:bg-white/20 border-white/15 text-zinc-300"}`,title:"Reset Pomodoro",children:"RESET"})]}):Fe?f.jsx("span",{className:`text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase px-3 py-1 rounded-xl border backdrop-blur-2xl transition-all ${me?"bg-zinc-100 border-zinc-200 text-zinc-800 shadow-sm":"bg-white/[0.08] border-white/15 text-zinc-200 shadow-md"}`,children:Fe}):null]})]})]}),le.showGreeting!==!1&&f.jsx("div",{className:"mt-7 sm:mt-9 flex justify-center w-full px-3",children:f.jsx("button",{type:"button",onClick:()=>jt(!0),className:`group relative text-xs sm:text-sm font-sans tracking-wide px-6 sm:px-8 py-3 rounded-2xl sm:rounded-full backdrop-blur-3xl max-w-xl text-center leading-relaxed shadow-xl cursor-pointer transition-all hover:scale-[1.01] border ${me?"bg-white/95 text-zinc-900 border-zinc-300/90 shadow-md hover:bg-white hover:border-zinc-400":"bg-[#0a0618]/90 text-zinc-200 border-white/[0.18] shadow-[0_16px_50px_rgba(0,0,0,0.7)] hover:border-violet-400/50 hover:shadow-[0_16px_60px_rgba(168,85,247,0.25)]"}`,title:"Click to personalize name & daily mantra",children:f.jsxs("div",{className:"flex items-center justify-center gap-2 flex-wrap",children:[f.jsxs("span",{className:`font-bold tracking-normal ${me?"text-zinc-950":"text-white"}`,children:[rs(),", ",s.name]}),f.jsx("span",{className:"opacity-30",children:"•"}),f.jsxs("span",{className:`italic font-medium ${me?"text-zinc-800":"text-zinc-200"}`,children:["“",s.motto||"Discipline equals true freedom.","”"]})]})})}),Ee&&f.jsxs("button",{type:"button",onClick:()=>ee(!1),className:`mt-8 flex items-center gap-2 px-5 py-2.5 rounded-full text-xs transition-all border shadow-xl cursor-pointer ${me?"bg-white/90 text-zinc-800 border-zinc-300/80 hover:bg-white":"cosmic-dock text-zinc-300 hover:text-white border-white/[0.12] hover:border-violet-400/40"}`,children:[f.jsx(yg,{className:"w-3.5 h-3.5 text-amber-400"}),f.jsx("span",{className:"font-display tracking-wider",children:"Tap anywhere to restore controls"})]})]}),Ft!=="none"&&!Ee&&f.jsxs("div",{className:"fixed inset-x-0 bottom-24 z-30 flex justify-center px-4 animate-fadeIn pointer-events-auto",children:[f.jsx("div",{className:"fixed inset-0 -z-10",onClick:()=>_t("none")}),Ft==="tasks"&&f.jsxs("div",{className:`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${me?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[f.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${me?"border-zinc-200":"border-white/[0.08]"}`,children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("h2",{className:"text-xs font-display uppercase tracking-[0.18em] font-semibold",children:"Tasks for the Day"}),f.jsxs("div",{className:"flex items-center gap-1 p-0.5 rounded-lg border bg-black/10 border-white/10",children:[f.jsxs("button",{type:"button",onClick:()=>_t("tasks"),className:"px-2 py-0.5 rounded text-[10px] font-semibold bg-violet-600 text-white",children:["Tasks (",M,"/",e.length,")"]}),f.jsxs("button",{type:"button",onClick:()=>_t("habits"),className:"px-2 py-0.5 rounded text-[10px] font-medium text-zinc-400 hover:text-white",children:["Habits (",ne,"/",l.length,")"]})]})]}),f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx("button",{type:"button",onClick:()=>{window.confirm("Reset and uncheck all tasks for today?")&&e.forEach(fe=>{fe.completed&&t(fe.id)})},className:`p-1 rounded-md border transition-colors cursor-pointer ${me?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-600":"bg-white/10 hover:bg-white/20 border-white/10 text-zinc-300 hover:text-white"}`,title:"Reset today's tasks","aria-label":"Reset tasks for today",children:f.jsx(br,{className:"w-3.5 h-3.5"})}),f.jsx("button",{type:"button",onClick:()=>_t("none"),className:"p-1 text-zinc-400 hover:text-white cursor-pointer","aria-label":"Close Tasks Panel",children:f.jsx(Mr,{className:"w-3.5 h-3.5"})})]})]}),f.jsxs("form",{onSubmit:Je,className:"flex items-center gap-2 shrink-0",children:[f.jsx("input",{type:"text",placeholder:"Add task for today...",value:Ce,onChange:fe=>De(fe.target.value),className:"flex-1 cosmic-input rounded-xl px-3.5 py-2 text-xs placeholder-zinc-500",autoFocus:!0}),f.jsx("button",{type:"submit",disabled:!Ce.trim(),className:"w-8 h-8 rounded-xl bg-violet-600 hover:bg-violet-500 text-white disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all shrink-0 cursor-pointer shadow-sm",children:f.jsx(Jl,{className:"w-4 h-4"})})]}),f.jsx("div",{className:"max-h-56 overflow-y-auto space-y-1.5 pr-1",children:e.map(fe=>f.jsxs("div",{className:`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs select-none group ${fe.completed?me?"bg-zinc-100/60 border-zinc-200/60 text-zinc-400":"bg-white/[0.015] border-white/[0.04] text-zinc-500":me?"bg-white/80 hover:bg-white border-zinc-200/80 text-zinc-800":"bg-white/[0.035] hover:bg-white/[0.07] border-white/[0.08] hover:border-violet-400/20 text-zinc-200"}`,children:[f.jsxs("div",{className:"flex items-center gap-2.5 truncate flex-1 cursor-pointer pr-2",onClick:()=>t(fe.id),children:[f.jsx("div",{className:`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border transition-all ${fe.completed?"bg-emerald-500 border-emerald-400 text-white shadow-sm":me?"border-zinc-300 group-hover:border-violet-500":"border-white/[0.25] group-hover:border-violet-400"}`,children:fe.completed&&f.jsx(wr,{className:"w-2.5 h-2.5 stroke-[3]"})}),f.jsx("span",{className:`font-sans truncate ${fe.completed?"line-through text-zinc-400":me?"text-zinc-800 font-medium":"text-zinc-200"}`,children:fe.text})]}),f.jsx("button",{type:"button",onClick:()=>o(fe.id),className:"opacity-0 group-hover:opacity-100 text-zinc-400 hover:text-red-400 transition-opacity p-1 cursor-pointer",children:f.jsx(cc,{className:"w-3.5 h-3.5"})})]},fe.id))}),f.jsxs("div",{className:`pt-2.5 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${me?"border-zinc-200 text-zinc-600":"border-white/[0.08] text-zinc-400"}`,children:[f.jsxs("span",{className:"flex items-center gap-1.5",children:[f.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400"}),"Day Progress"]}),f.jsxs("span",{className:`font-display font-medium tabular-nums ${me?"text-zinc-900":"text-zinc-200"}`,children:[O,"% done"]})]})]}),Ft==="habits"&&f.jsxs("div",{className:`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${me?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[f.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${me?"border-zinc-200":"border-white/[0.08]"}`,children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("h2",{className:"text-xs font-display uppercase tracking-[0.18em] font-semibold",children:"Daily Rhythm Pulse"}),f.jsxs("div",{className:"flex items-center gap-1 p-0.5 rounded-lg border bg-black/10 border-white/10",children:[f.jsxs("button",{type:"button",onClick:()=>_t("tasks"),className:"px-2 py-0.5 rounded text-[10px] font-medium text-zinc-400 hover:text-white",children:["Tasks (",M,"/",e.length,")"]}),f.jsxs("button",{type:"button",onClick:()=>_t("habits"),className:"px-2 py-0.5 rounded text-[10px] font-semibold bg-violet-600 text-white",children:["Habits (",ne,"/",l.length,")"]})]})]}),f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx("button",{type:"button",onClick:()=>{window.confirm("Reset today's habit checkmarks?")&&l.forEach(fe=>{fe.completed&&u(fe.id)})},className:`p-1 rounded-md border transition-colors cursor-pointer ${me?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-600":"bg-white/10 hover:bg-white/20 border-white/10 text-zinc-300 hover:text-white"}`,title:"Reset today's habits","aria-label":"Reset habits for today",children:f.jsx(br,{className:"w-3.5 h-3.5"})}),f.jsx("button",{type:"button",onClick:()=>{const fe=prompt("Add new daily habit:");fe&&p(fe)},className:`p-1 rounded-md border transition-colors cursor-pointer ${me?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/10 hover:bg-white/20 border-white/10 text-white"}`,title:"Add habit","aria-label":"Add new daily habit",children:f.jsx(Jl,{className:"w-3.5 h-3.5"})}),f.jsx("button",{type:"button",onClick:()=>_t("none"),className:"p-1 text-zinc-400 hover:text-white cursor-pointer","aria-label":"Close Habits Panel",children:f.jsx(Mr,{className:"w-3.5 h-3.5"})})]})]}),f.jsx("div",{className:"max-h-56 overflow-y-auto space-y-1.5 pr-1",children:l.map(fe=>f.jsxs("div",{onClick:()=>u(fe.id),className:`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs cursor-pointer select-none group ${fe.completed?me?"bg-zinc-100/60 border-zinc-200/60 text-zinc-400":"bg-white/[0.015] border-white/[0.04] text-zinc-400":me?"bg-white/80 hover:bg-white border-zinc-200/80 text-zinc-800":"bg-white/[0.035] hover:bg-white/[0.07] border-white/[0.08] hover:border-violet-400/20 text-zinc-200"}`,children:[f.jsxs("div",{className:"flex flex-col gap-0.5 truncate pr-2",children:[f.jsx("span",{className:`font-sans truncate ${fe.completed?"line-through text-zinc-400":me?"text-zinc-800 font-medium":"text-zinc-200"}`,children:fe.name}),f.jsx("div",{className:"flex items-center gap-1.5 text-[10px] font-mono",children:fe.streak>0?f.jsxs("span",{className:"text-amber-500 flex items-center gap-0.5 font-medium",children:[f.jsx(mg,{className:"w-3 h-3 fill-amber-500"})," ",fe.streak," day streak"]}):f.jsx("span",{className:me?"text-zinc-500":"text-zinc-400",children:"Ready today"})})]}),f.jsx("div",{className:`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border transition-all ${fe.completed?"bg-emerald-500 border-emerald-400 text-white shadow-sm":me?"border-zinc-300 group-hover:border-violet-500":"border-white/[0.25] group-hover:border-violet-400"}`,children:fe.completed&&f.jsx(wr,{className:"w-2.5 h-2.5 stroke-[3]"})})]},fe.id))}),f.jsxs("div",{className:`pt-2.5 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${me?"border-zinc-200 text-zinc-600":"border-white/[0.08] text-zinc-400"}`,children:[f.jsxs("div",{className:`flex items-center gap-1.5 ${me?"text-zinc-700":"text-zinc-400"}`,children:[f.jsx(Ms,{className:`w-3.5 h-3.5 ${me?"text-amber-500":"text-violet-300"}`}),f.jsx("span",{children:"Daily Consistency"})]}),f.jsxs("span",{className:`font-display font-medium tabular-nums ${me?"text-zinc-900":"text-zinc-200"}`,children:[ie,"% kept"]})]})]}),Ft==="timer"&&f.jsxs("div",{className:`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${me?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[f.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${me?"border-zinc-200":"border-white/[0.08]"}`,children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(pc,{className:`w-4 h-4 ${me?"text-violet-700":"text-violet-300"}`}),f.jsx("h2",{className:"text-xs font-display uppercase tracking-[0.18em] font-semibold",children:"Deep Study Console"})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsxs("div",{className:"flex items-center gap-1 p-0.5 rounded-lg border bg-black/10 border-white/10",children:[f.jsx("button",{type:"button",onClick:()=>he("pomodoro"),className:`px-2 py-0.5 rounded text-[10px] font-semibold transition-all cursor-pointer ${It==="pomodoro"?"bg-violet-600 text-white":me?"text-zinc-600 hover:text-zinc-950":"text-zinc-400 hover:text-white"}`,children:"Pomodoro Sprint"}),f.jsx("button",{type:"button",onClick:()=>he("stopwatch"),className:`px-2 py-0.5 rounded text-[10px] font-medium transition-all cursor-pointer ${It==="stopwatch"?"bg-violet-600 text-white":me?"text-zinc-600 hover:text-zinc-950":"text-zinc-400 hover:text-white"}`,children:"Open Stopwatch"})]}),f.jsx("button",{type:"button",onClick:()=>_t("none"),className:"p-1 text-zinc-400 hover:text-white cursor-pointer",children:f.jsx(Mr,{className:"w-3.5 h-3.5"})})]})]}),It==="pomodoro"?f.jsxs("div",{className:"space-y-3",children:[f.jsx("div",{className:"flex items-center justify-between gap-1.5",children:[{label:"25m / 5m",focus:25,brk:5},{label:"50m / 10m",focus:50,brk:10},{label:"15m Rapid",focus:15,brk:3}].map(fe=>{const ht=N.focusDurationMinutes===fe.focus&&N.breakDurationMinutes===fe.brk;return f.jsx("button",{type:"button",onClick:()=>{Z(Ye=>({...Ye,focusDurationMinutes:fe.focus,breakDurationMinutes:fe.brk})),I==="idle"&&V(fe.focus)},className:`flex-1 py-1 px-2 rounded-xl text-[10px] font-mono font-medium border transition-all cursor-pointer ${ht?"bg-violet-600 text-white border-violet-400/50 shadow-sm":me?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 border-white/[0.08]"}`,children:fe.label},fe.label)})}),f.jsxs("div",{className:"text-center py-2 relative",children:[f.jsxs("div",{className:`text-5xl font-display font-bold tracking-tight leading-none tabular-nums ${me?"text-zinc-950":"text-white"}`,children:[$t,":",Fn]}),f.jsx("div",{className:"flex items-center justify-center gap-2 mt-2",children:f.jsx("span",{className:`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${I==="break"?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 animate-pulse":I==="focus"?"bg-violet-500/20 text-violet-300 border border-violet-500/30 animate-pulse":I==="paused"?"bg-amber-500/20 text-amber-300 border border-amber-500/30":me?"bg-zinc-100 text-zinc-600 border border-zinc-200":"bg-white/[0.06] text-zinc-400 border border-white/[0.08]"}`,children:I==="break"?"RECOVERY BREAK":I==="focus"?"FOCUS SPRINT":I==="paused"?"PAUSED":"READY TO SPRINT"})}),f.jsx("div",{className:"w-full bg-white/[0.06] h-1.5 rounded-full mt-3 overflow-hidden",children:f.jsx("div",{className:`h-full transition-all duration-1000 ${I==="break"?"bg-cyan-400":"bg-violet-500"}`,style:{width:`${Math.round(Yn*100)}%`}})})]}),f.jsxs("div",{className:"flex items-center justify-between text-[11px] px-1 font-mono",children:[f.jsxs("button",{type:"button",onClick:W,className:`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${N.displayMode==="numbers"?"bg-violet-500/20 border-violet-500/40 text-violet-300":me?"bg-zinc-100 border-zinc-200 text-zinc-600":"bg-white/[0.04] border-white/[0.08] text-zinc-400"}`,children:[f.jsx(kM,{className:"w-3.5 h-3.5"}),f.jsxs("span",{children:["Clock: ",N.displayMode==="numbers"?"Countdown Digits":"Wall Clock"]})]}),f.jsxs("button",{type:"button",onClick:()=>Z(fe=>({...fe,soundEnabled:!fe.soundEnabled})),className:`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${N.soundEnabled?"bg-emerald-500/20 border-emerald-500/40 text-emerald-300":me?"bg-zinc-100 border-zinc-200 text-zinc-600":"bg-white/[0.04] border-white/[0.08] text-zinc-400"}`,children:[f.jsx(MM,{className:"w-3.5 h-3.5"}),f.jsxs("span",{children:["Chime: ",N.soundEnabled?"ON":"OFF"]})]})]}),f.jsxs("div",{className:"flex gap-2",children:[f.jsx("button",{type:"button",onClick:$,className:`flex-1 py-2.5 rounded-xl font-display text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 border transition-all cursor-pointer ${me?"bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-800":"bg-violet-600 hover:bg-violet-500 text-white border-violet-400/30"}`,children:I==="focus"?f.jsxs(f.Fragment,{children:[f.jsx(Zi,{className:"w-4 h-4"}),f.jsx("span",{children:"Pause Focus"})]}):I==="paused"?f.jsxs(f.Fragment,{children:[f.jsx(Oi,{className:"w-4 h-4 fill-current"}),f.jsx("span",{children:"Resume Focus"})]}):I==="break"?f.jsxs(f.Fragment,{children:[f.jsx(TM,{className:"w-4 h-4"}),f.jsx("span",{children:"Pause Break"})]}):f.jsxs(f.Fragment,{children:[f.jsx(Oi,{className:"w-4 h-4 ml-0.5 fill-current"}),f.jsxs("span",{children:["Start Focus (",N.focusDurationMinutes,"m)"]})]})}),f.jsx("button",{type:"button",onClick:B,className:`px-3 py-2.5 rounded-xl border text-xs font-medium transition-colors cursor-pointer ${me?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white border-white/[0.08]"}`,title:I==="focus"?"Skip directly to break":"Skip back to focus",children:f.jsx(lc,{className:"w-4 h-4"})}),f.jsx("button",{type:"button",onClick:z,className:`px-3 py-2.5 rounded-xl border transition-colors cursor-pointer ${me?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white border-white/[0.08]"}`,title:"Reset Pomodoro",children:f.jsx(br,{className:"w-3.5 h-3.5"})})]})]}):f.jsxs("div",{className:"space-y-3",children:[f.jsxs("div",{className:"text-center py-2",children:[f.jsx("div",{className:`text-5xl font-display font-light tracking-widest leading-none tabular-nums ${me?"text-zinc-900":"text-white"}`,children:We(E)}),f.jsxs("p",{className:`text-[10px] font-display tracking-[0.2em] uppercase mt-2 ${me?"text-zinc-500":"text-zinc-400"}`,children:[y," • ",Ne]})]}),f.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[f.jsx("input",{type:"text",value:Ne,onChange:fe=>Qe(fe.target.value),placeholder:"Mode (e.g. Deep Work)",className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"}),f.jsx("input",{type:"text",value:$e,onChange:fe=>{at(fe.target.value),S(fe.target.value)},placeholder:"Subject (e.g. Engineering)",className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"})]}),f.jsxs("div",{className:"flex gap-2",children:[f.jsxs("button",{type:"button",onClick:R,className:`flex-1 py-2.5 rounded-xl font-display text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 border transition-all cursor-pointer ${me?"bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-800":"bg-violet-600 hover:bg-violet-500 text-white border-violet-400/30"}`,children:[C?f.jsx(Zi,{className:"w-4 h-4"}):f.jsx(Oi,{className:"w-4 h-4 ml-0.5 fill-current"}),f.jsx("span",{children:C?"Pause Focus":"Start Focus"})]}),f.jsx("button",{type:"button",onClick:F,className:`px-3 py-2.5 rounded-xl border transition-colors cursor-pointer ${me?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white border-white/[0.08]"}`,title:"Reset stopwatch",children:f.jsx(br,{className:"w-3.5 h-3.5"})})]})]}),f.jsxs("div",{className:`pt-2.5 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${me?"border-zinc-200 text-zinc-600":"border-white/[0.08] text-zinc-400"}`,children:[f.jsxs("span",{children:["Weekly: ",f.jsxs("strong",{className:`font-display ${me?"text-zinc-900":"text-zinc-200"}`,children:[Ke,"h"]})," / 15h"]}),f.jsxs("span",{className:`font-display font-medium tabular-nums ${me?"text-zinc-900":"text-zinc-200"}`,children:[He,"% quota"]})]})]}),Ft==="wellness"&&f.jsxs("div",{className:`w-full max-w-sm p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${me?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[f.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-white/10",children:[f.jsxs("span",{className:"text-xs font-display uppercase tracking-widest font-semibold flex items-center gap-1.5",children:[f.jsx(Ms,{className:"w-3.5 h-3.5 text-amber-400"}),"Daily Wellness Pulse"]}),f.jsx("button",{onClick:()=>_t("none"),className:"p-1 text-zinc-400 hover:text-white",children:f.jsx(Mr,{className:"w-3.5 h-3.5"})})]}),f.jsxs("div",{className:"flex items-center justify-between py-1 text-xs",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(AM,{className:"w-4 h-4 text-sky-400"}),f.jsx("span",{children:"Hydration Target"})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("button",{type:"button",onClick:()=>ce(fe=>Math.max(0,fe-12.5)),className:"w-6 h-6 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center font-bold",children:"-"}),f.jsxs("span",{className:"font-mono font-bold w-12 text-center",children:[Math.round(j/100*8)," / 8"]}),f.jsx("button",{type:"button",onClick:()=>ce(fe=>Math.min(100,fe+12.5)),className:"w-6 h-6 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center font-bold",children:"+"})]})]}),f.jsxs("div",{className:"flex items-center justify-between py-1 text-xs",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(oc,{className:"w-4 h-4 text-violet-400"}),f.jsx("span",{children:"Sleep Duration"})]}),f.jsxs("button",{type:"button",onClick:()=>Y(Q%12+1),className:"px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 font-mono font-bold text-xs",children:[Q," Hours (Click to Cycle)"]})]}),f.jsxs("div",{className:"flex items-center justify-between py-1 text-xs",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(LM,{className:"w-4 h-4 text-amber-400"}),f.jsx("span",{children:"Day Score"})]}),f.jsxs("button",{type:"button",onClick:()=>H(X>=10?1:X+1),className:"px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 font-mono font-bold text-xs text-amber-400",children:[X," / 10 ★"]})]}),f.jsxs("div",{className:`pt-3 mt-1 border-t flex items-center justify-between ${me?"border-zinc-200":"border-white/10"}`,children:[f.jsxs("div",{className:"flex flex-col",children:[f.jsxs("span",{className:"text-[11px] font-medium flex items-center gap-1",children:[f.jsx(br,{className:"w-3 h-3 text-violet-400"}),"Day Reset"]}),f.jsxs("span",{className:`text-[9px] font-mono ${me?"text-zinc-500":"text-zinc-400"}`,children:["Active: ",P]})]}),f.jsxs("button",{type:"button",onClick:()=>{window.confirm("Start a fresh day? This will uncheck today's tasks & habits and reset hydration to 0%.")&&q()},className:`px-3 py-1.5 rounded-xl border text-[11px] font-display uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${me?"bg-violet-50 hover:bg-violet-100 text-violet-700 border-violet-200":"bg-violet-600/30 hover:bg-violet-600/50 text-violet-200 border-violet-400/40 hover:border-violet-400"}`,title:"Reset daily progress for a fresh day",children:[f.jsx(br,{className:"w-3 h-3"}),f.jsx("span",{children:"Start Fresh Day"})]})]})]})]}),!Ee&&f.jsx("footer",{className:"relative shrink-0 flex items-center justify-center w-full z-20 pb-2",children:f.jsxs("nav",{"aria-label":"Sanctuary Focus Dock",className:`flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-full backdrop-blur-2xl border shadow-2xl transition-all ${me?"bg-white/85 border-zinc-200/90 text-zinc-800 shadow-[0_15px_40px_rgba(0,0,0,0.1)]":"bg-[#090b16]/80 border-white/[0.12] text-zinc-200 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"}`,children:[f.jsxs("div",{className:`flex items-center rounded-full border transition-all ${pt?I==="break"?"bg-cyan-500/20 border-cyan-500/40 text-cyan-300":"bg-violet-600/25 border-violet-500/40 text-violet-300":C?"bg-emerald-500/20 border-emerald-500/40 text-emerald-300":me?"bg-zinc-100/90 border-zinc-200 text-zinc-800":"bg-white/[0.04] border-white/[0.08] text-zinc-300"}`,children:[f.jsxs("button",{type:"button",onClick:pt?$:C?R:()=>V(),className:"pl-3 pr-1.5 py-1.5 flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity",title:pt?I==="paused"?"Resume Pomodoro":"Pause Pomodoro":C?"Pause focus timer":"Start Pomodoro Focus",children:[pt?I==="paused"?f.jsx(Oi,{className:"w-3.5 h-3.5 text-amber-400 fill-current"}):f.jsx(Zi,{className:"w-3.5 h-3.5 text-violet-400 animate-pulse"}):C?f.jsx(Zi,{className:"w-3.5 h-3.5 text-emerald-400 animate-pulse"}):f.jsx(Oi,{className:"w-3.5 h-3.5 text-zinc-400 fill-current"}),f.jsx("span",{className:"font-mono text-xs font-semibold tabular-nums",children:pt?`${$t}:${Fn}`:We(E)})]}),f.jsx("button",{type:"button",onClick:()=>{he(pt?"pomodoro":"stopwatch"),_t(fe=>fe==="timer"?"none":"timer")},className:`pr-3 pl-1.5 py-1.5 text-[11px] font-sans border-l transition-colors cursor-pointer ${me?"border-zinc-200 hover:text-black":"border-white/10 hover:text-white"}`,title:"Expand Deep Study Console",children:f.jsx("span",{children:pt?I==="break"?"Break":"Sprint":$e})})]}),f.jsxs("button",{type:"button",onClick:()=>_t(fe=>fe==="tasks"?"none":"tasks"),className:`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-sans transition-all cursor-pointer ${Ft==="tasks"||Ft==="habits"?"bg-violet-600 text-white border-violet-400":me?"bg-zinc-100/90 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300 hover:text-white"}`,title:"Daily Flow (Tasks & Habits)",children:[f.jsx(DM,{className:"w-3.5 h-3.5 text-violet-400"}),f.jsx("span",{children:"Flow"}),f.jsxs("span",{className:`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${me?"bg-zinc-200/90 text-zinc-800":"bg-white/10 text-violet-200"}`,children:[M+ne,"/",e.length+l.length]})]}),f.jsxs("div",{onClick:()=>Ut(!0),className:`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs cursor-pointer group transition-all ${Ae||ke?be==="youtube"?"bg-red-600/30 border-red-500/40 text-red-200":"bg-violet-600/30 border-violet-500/40 text-violet-200":me?"bg-zinc-100/90 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300 hover:text-white"}`,title:"Open Audio Sanctuary",children:[be==="youtube"&&ke?f.jsx(oo,{className:"w-3.5 h-3.5 text-red-500 animate-pulse"}):f.jsx(ac,{className:`w-3.5 h-3.5 ${Ae||ke?"text-violet-300 animate-pulse":"text-zinc-400"}`}),f.jsx("span",{className:"max-w-[80px] sm:max-w-[120px] truncate text-[11px] font-medium",children:be==="youtube"?Te?Te.title:"YouTube":nt.title}),f.jsx(Yg,{isPlaying:be==="youtube"?ke:Ae,color:be==="youtube"?"#ef4444":me?"#7c3aed":nt.accentColor,className:"w-8 h-2.5",barCount:4}),f.jsx("button",{type:"button",onClick:fe=>{fe.stopPropagation(),be==="youtube"?Ue():Ae?qe():ze(we)},className:"w-5 h-5 rounded-md flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors",title:(be==="youtube"?ke:Ae)?"Pause audio":"Play audio",children:(be==="youtube"?ke:Ae)?f.jsx(Zi,{className:"w-2.5 h-2.5 fill-current"}):f.jsx(Oi,{className:"w-2.5 h-2.5 fill-current ml-0.5"})})]})]})}),ln&&f.jsxs("div",{className:"fixed inset-0 z-50 flex",children:[f.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm",onClick:()=>K(!1)}),f.jsxs("aside",{className:`relative z-10 w-84 sm:w-96 max-w-[92vw] h-full backdrop-blur-3xl border-r shadow-2xl pt-16 sm:pt-20 px-6 pb-6 flex flex-col justify-between ${me?"bg-[#faf8f4]/98 border-zinc-200 text-zinc-900":"bg-[#0d0f17]/95 border-white/[0.1] text-white"}`,children:[f.jsxs("div",{className:"space-y-4",children:[f.jsxs("div",{className:`flex items-center justify-between pb-3.5 border-b ${me?"border-zinc-200":"border-white/[0.08]"}`,children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(im,{className:`w-4 h-4 ${me?"text-violet-700":"text-violet-300"}`}),f.jsx("h3",{className:`text-xs font-sans uppercase tracking-[0.16em] font-semibold ${me?"text-zinc-900":"text-white"}`,children:"Daily Routine Protocols"})]}),f.jsx("button",{onClick:()=>K(!1),className:`transition-colors cursor-pointer ${me?"text-zinc-500 hover:text-black":"text-zinc-400 hover:text-white"}`,children:f.jsx(Mr,{className:"w-4 h-4"})})]}),f.jsx("div",{className:"py-1",children:f.jsx(VM,{routines:d,activeBlock:_,activeMinutesLeft:b,isLight:me})}),f.jsxs("div",{className:"space-y-2.5 text-xs overflow-y-auto max-h-[50vh] pr-1",children:[d.map(fe=>{const ht=(_==null?void 0:_.id)===fe.id;return f.jsxs("div",{className:`p-3.5 rounded-2xl border transition-all relative group ${ht?me?"bg-amber-50/90 border-amber-300 shadow-md ring-1 ring-amber-400/40":"bg-violet-950/30 border-violet-500/50 shadow-lg ring-1 ring-violet-500/30":me?"bg-white/80 border-zinc-200 shadow-sm":"bg-white/[0.03] border-white/[0.08]"}`,children:[f.jsxs("div",{className:"flex items-center justify-between pb-1.5",children:[f.jsxs("span",{className:`font-semibold flex items-center gap-1.5 ${ht?"text-amber-400 font-bold":me?"text-zinc-800":"text-zinc-200"}`,children:[f.jsx(om,{className:"w-3.5 h-3.5"})," ",fe.title,ht&&f.jsx("span",{className:"text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold uppercase tracking-wider",children:"Active Now"})]}),f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx("span",{className:`text-[10px] font-mono ${me?"text-zinc-500":"text-zinc-400"}`,children:fe.timeRange}),d.length>1&&f.jsx("button",{type:"button",onClick:()=>g(fe.id),className:"opacity-0 group-hover:opacity-100 p-1 text-zinc-400 hover:text-red-400 transition-opacity cursor-pointer",title:"Delete protocol block",children:f.jsx(cc,{className:"w-3 h-3"})})]})]}),f.jsx("p",{className:`text-[11px] leading-relaxed ${me?"text-zinc-700":"text-zinc-300"}`,children:fe.description})]},fe.id)}),ot?f.jsxs("form",{onSubmit:fe=>{fe.preventDefault(),ft.trim()&&mn.trim()&&(m({title:ft.trim(),timeRange:tn.trim()||"Flexible",description:mn.trim(),iconType:"custom"}),vt(""),bn(""),St(""),Be(!1))},className:`p-3 rounded-2xl border space-y-2 ${me?"bg-white border-zinc-300 shadow-sm":"bg-white/[0.05] border-white/[0.12]"}`,children:[f.jsx("input",{type:"text",placeholder:"Protocol title (e.g. Creative Sprint)",value:ft,onChange:fe=>vt(fe.target.value),className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs",required:!0}),f.jsx("input",{type:"text",placeholder:"Time range (e.g. 14:00 – 16:00)",value:tn,onChange:fe=>bn(fe.target.value),className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"}),f.jsx("textarea",{placeholder:"Protocol description / intentions...",value:mn,onChange:fe=>St(fe.target.value),className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs resize-none h-16",required:!0}),f.jsxs("div",{className:"flex items-center justify-end gap-1.5",children:[f.jsx("button",{type:"button",onClick:()=>Be(!1),className:`px-2.5 py-1 rounded-lg text-[11px] ${me?"text-zinc-600 hover:text-black":"text-zinc-400 hover:text-white"}`,children:"Cancel"}),f.jsx("button",{type:"submit",className:"px-3 py-1 rounded-lg text-[11px] bg-violet-600 hover:bg-violet-500 text-white font-medium cursor-pointer",children:"Add Block"})]})]}):f.jsxs("button",{type:"button",onClick:()=>Be(!0),className:`w-full py-2 rounded-xl border border-dashed flex items-center justify-center gap-1.5 text-[11px] transition-all cursor-pointer ${me?"border-zinc-300 hover:border-zinc-400 text-zinc-600 hover:text-zinc-900 bg-white/40":"border-white/10 hover:border-white/20 text-zinc-400 hover:text-white bg-white/[0.01]"}`,children:[f.jsx(Jl,{className:"w-3 h-3"}),f.jsx("span",{children:"Add Custom Protocol Block"})]})]})]}),f.jsxs("div",{className:"flex items-center gap-2 pt-2",children:[f.jsx("button",{type:"button",onClick:v,className:`px-3 py-2.5 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${me?"border-zinc-200 text-zinc-600 hover:bg-zinc-100":"border-white/10 text-zinc-400 hover:bg-white/[0.05] hover:text-white"}`,title:"Reset to default protocols",children:"Reset"}),f.jsx("button",{type:"button",onClick:()=>K(!1),className:`flex-1 py-2.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${me?"bg-zinc-900 hover:bg-zinc-800 text-white":"bg-white/[0.06] hover:bg-white/[0.12] text-white"}`,children:"Close Routine"})]})]})]}),f.jsx(GM,{isOpen:Zt,onClose:()=>jt(!1)}),f.jsx(BM,{isOpen:yt,onClose:()=>Lt(!1)}),f.jsx(HM,{isOpen:on,onClose:()=>Ut(!1)})]})},jM=()=>{const{wallpaperTheme:s,appTheme:e}=is(),t=e==="light";return f.jsxs("div",{"data-theme":s,className:`theme-${e} relative w-screen h-screen max-h-screen overflow-hidden text-[var(--text-primary)] font-sans transition-colors duration-200 ${t?"bg-[#f7f5f0]/95":"bg-[#060814]"}`,children:[f.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--card-bg-elevated)] focus:text-[var(--text-primary)] focus:rounded-xl focus:border focus:border-[var(--card-border)] focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-violet-400 font-sans text-xs font-semibold",children:"Skip to main content"}),f.jsx(jv,{}),f.jsx(hM,{}),f.jsx(FM,{}),f.jsx("div",{className:"pointer-events-none fixed inset-0 z-20 dreamy-grain opacity-40 mix-blend-overlay"}),f.jsx("main",{id:"main-content",className:"w-full h-full overflow-y-auto lg:overflow-hidden relative z-10",children:f.jsx(WM,{})})]})};function $M(){return f.jsx(Wv,{children:f.jsx(jM,{})})}const lm=document.getElementById("root");lm&&Ov.createRoot(lm).render(f.jsx(Dv.StrictMode,{children:f.jsx($M,{})}));
