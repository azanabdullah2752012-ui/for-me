var Tv=Object.defineProperty;var Cv=(s,e,t)=>e in s?Tv(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var gr=(s,e,t)=>Cv(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function c0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Wu={exports:{}},Ka={},ju={exports:{}},Pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function Av(){if(tm)return Pt;tm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function y(P,K,Te){this.props=P,this.context=K,this.refs=A,this.updater=Te||w}y.prototype.isReactComponent={},y.prototype.setState=function(P,K){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,K,"setState")},y.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function b(){}b.prototype=y.prototype;function R(P,K,Te){this.props=P,this.context=K,this.refs=A,this.updater=Te||w}var z=R.prototype=new b;z.constructor=R,E(z,y.prototype),z.isPureReactComponent=!0;var D=Array.isArray,F=Object.prototype.hasOwnProperty,L={current:null},M={key:!0,ref:!0,__self:!0,__source:!0};function N(P,K,Te){var ie,xe={},Me=null,ge=null;if(K!=null)for(ie in K.ref!==void 0&&(ge=K.ref),K.key!==void 0&&(Me=""+K.key),K)F.call(K,ie)&&!M.hasOwnProperty(ie)&&(xe[ie]=K[ie]);var ye=arguments.length-2;if(ye===1)xe.children=Te;else if(1<ye){for(var Pe=Array(ye),st=0;st<ye;st++)Pe[st]=arguments[st+2];xe.children=Pe}if(P&&P.defaultProps)for(ie in ye=P.defaultProps,ye)xe[ie]===void 0&&(xe[ie]=ye[ie]);return{$$typeof:s,type:P,key:Me,ref:ge,props:xe,_owner:L.current}}function Z(P,K){return{$$typeof:s,type:P.type,key:K,ref:P.ref,props:P.props,_owner:P._owner}}function B(P){return typeof P=="object"&&P!==null&&P.$$typeof===s}function X(P){var K={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(Te){return K[Te]})}var O=/\/+/g;function H(P,K){return typeof P=="object"&&P!==null&&P.key!=null?X(""+P.key):K.toString(36)}function $(P,K,Te,ie,xe){var Me=typeof P;(Me==="undefined"||Me==="boolean")&&(P=null);var ge=!1;if(P===null)ge=!0;else switch(Me){case"string":case"number":ge=!0;break;case"object":switch(P.$$typeof){case s:case e:ge=!0}}if(ge)return ge=P,xe=xe(ge),P=ie===""?"."+H(ge,0):ie,D(xe)?(Te="",P!=null&&(Te=P.replace(O,"$&/")+"/"),$(xe,K,Te,"",function(st){return st})):xe!=null&&(B(xe)&&(xe=Z(xe,Te+(!xe.key||ge&&ge.key===xe.key?"":(""+xe.key).replace(O,"$&/")+"/")+P)),K.push(xe)),1;if(ge=0,ie=ie===""?".":ie+":",D(P))for(var ye=0;ye<P.length;ye++){Me=P[ye];var Pe=ie+H(Me,ye);ge+=$(Me,K,Te,Pe,xe)}else if(Pe=_(P),typeof Pe=="function")for(P=Pe.call(P),ye=0;!(Me=P.next()).done;)Me=Me.value,Pe=ie+H(Me,ye++),ge+=$(Me,K,Te,Pe,xe);else if(Me==="object")throw K=String(P),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return ge}function j(P,K,Te){if(P==null)return P;var ie=[],xe=0;return $(P,ie,"","",function(Me){return K.call(Te,Me,xe++)}),ie}function ce(P){if(P._status===-1){var K=P._result;K=K(),K.then(function(Te){(P._status===0||P._status===-1)&&(P._status=1,P._result=Te)},function(Te){(P._status===0||P._status===-1)&&(P._status=2,P._result=Te)}),P._status===-1&&(P._status=0,P._result=K)}if(P._status===1)return P._result.default;throw P._result}var te={current:null},q={transition:null},Y={ReactCurrentDispatcher:te,ReactCurrentBatchConfig:q,ReactCurrentOwner:L};function G(){throw Error("act(...) is not supported in production builds of React.")}return Pt.Children={map:j,forEach:function(P,K,Te){j(P,function(){K.apply(this,arguments)},Te)},count:function(P){var K=0;return j(P,function(){K++}),K},toArray:function(P){return j(P,function(K){return K})||[]},only:function(P){if(!B(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},Pt.Component=y,Pt.Fragment=t,Pt.Profiler=o,Pt.PureComponent=R,Pt.StrictMode=r,Pt.Suspense=d,Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,Pt.act=G,Pt.cloneElement=function(P,K,Te){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var ie=E({},P.props),xe=P.key,Me=P.ref,ge=P._owner;if(K!=null){if(K.ref!==void 0&&(Me=K.ref,ge=L.current),K.key!==void 0&&(xe=""+K.key),P.type&&P.type.defaultProps)var ye=P.type.defaultProps;for(Pe in K)F.call(K,Pe)&&!M.hasOwnProperty(Pe)&&(ie[Pe]=K[Pe]===void 0&&ye!==void 0?ye[Pe]:K[Pe])}var Pe=arguments.length-2;if(Pe===1)ie.children=Te;else if(1<Pe){ye=Array(Pe);for(var st=0;st<Pe;st++)ye[st]=arguments[st+2];ie.children=ye}return{$$typeof:s,type:P.type,key:xe,ref:Me,props:ie,_owner:ge}},Pt.createContext=function(P){return P={$$typeof:u,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:l,_context:P},P.Consumer=P},Pt.createElement=N,Pt.createFactory=function(P){var K=N.bind(null,P);return K.type=P,K},Pt.createRef=function(){return{current:null}},Pt.forwardRef=function(P){return{$$typeof:p,render:P}},Pt.isValidElement=B,Pt.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:ce}},Pt.memo=function(P,K){return{$$typeof:m,type:P,compare:K===void 0?null:K}},Pt.startTransition=function(P){var K=q.transition;q.transition={};try{P()}finally{q.transition=K}},Pt.unstable_act=G,Pt.useCallback=function(P,K){return te.current.useCallback(P,K)},Pt.useContext=function(P){return te.current.useContext(P)},Pt.useDebugValue=function(){},Pt.useDeferredValue=function(P){return te.current.useDeferredValue(P)},Pt.useEffect=function(P,K){return te.current.useEffect(P,K)},Pt.useId=function(){return te.current.useId()},Pt.useImperativeHandle=function(P,K,Te){return te.current.useImperativeHandle(P,K,Te)},Pt.useInsertionEffect=function(P,K){return te.current.useInsertionEffect(P,K)},Pt.useLayoutEffect=function(P,K){return te.current.useLayoutEffect(P,K)},Pt.useMemo=function(P,K){return te.current.useMemo(P,K)},Pt.useReducer=function(P,K,Te){return te.current.useReducer(P,K,Te)},Pt.useRef=function(P){return te.current.useRef(P)},Pt.useState=function(P){return te.current.useState(P)},Pt.useSyncExternalStore=function(P,K,Te){return te.current.useSyncExternalStore(P,K,Te)},Pt.useTransition=function(){return te.current.useTransition()},Pt.version="18.3.1",Pt}var nm;function vf(){return nm||(nm=1,ju.exports=Av()),ju.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im;function Rv(){if(im)return Ka;im=1;var s=vf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(p,d,m){var g,v={},_=null,w=null;m!==void 0&&(_=""+m),d.key!==void 0&&(_=""+d.key),d.ref!==void 0&&(w=d.ref);for(g in d)r.call(d,g)&&!l.hasOwnProperty(g)&&(v[g]=d[g]);if(p&&p.defaultProps)for(g in d=p.defaultProps,d)v[g]===void 0&&(v[g]=d[g]);return{$$typeof:e,type:p,key:_,ref:w,props:v,_owner:o.current}}return Ka.Fragment=t,Ka.jsx=u,Ka.jsxs=u,Ka}var rm;function Nv(){return rm||(rm=1,Wu.exports=Rv()),Wu.exports}var f=Nv(),be=vf();const Pv=c0(be);var yl={},$u={exports:{}},ri={},Xu={exports:{}},Yu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function Dv(){return sm||(sm=1,(function(s){function e(q,Y){var G=q.length;q.push(Y);e:for(;0<G;){var P=G-1>>>1,K=q[P];if(0<o(K,Y))q[P]=Y,q[G]=K,G=P;else break e}}function t(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var Y=q[0],G=q.pop();if(G!==Y){q[0]=G;e:for(var P=0,K=q.length,Te=K>>>1;P<Te;){var ie=2*(P+1)-1,xe=q[ie],Me=ie+1,ge=q[Me];if(0>o(xe,G))Me<K&&0>o(ge,xe)?(q[P]=ge,q[Me]=G,P=Me):(q[P]=xe,q[ie]=G,P=ie);else if(Me<K&&0>o(ge,G))q[P]=ge,q[Me]=G,P=Me;else break e}}return Y}function o(q,Y){var G=q.sortIndex-Y.sortIndex;return G!==0?G:q.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,p=u.now();s.unstable_now=function(){return u.now()-p}}var d=[],m=[],g=1,v=null,_=3,w=!1,E=!1,A=!1,y=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function z(q){for(var Y=t(m);Y!==null;){if(Y.callback===null)r(m);else if(Y.startTime<=q)r(m),Y.sortIndex=Y.expirationTime,e(d,Y);else break;Y=t(m)}}function D(q){if(A=!1,z(q),!E)if(t(d)!==null)E=!0,ce(F);else{var Y=t(m);Y!==null&&te(D,Y.startTime-q)}}function F(q,Y){E=!1,A&&(A=!1,b(N),N=-1),w=!0;var G=_;try{for(z(Y),v=t(d);v!==null&&(!(v.expirationTime>Y)||q&&!X());){var P=v.callback;if(typeof P=="function"){v.callback=null,_=v.priorityLevel;var K=P(v.expirationTime<=Y);Y=s.unstable_now(),typeof K=="function"?v.callback=K:v===t(d)&&r(d),z(Y)}else r(d);v=t(d)}if(v!==null)var Te=!0;else{var ie=t(m);ie!==null&&te(D,ie.startTime-Y),Te=!1}return Te}finally{v=null,_=G,w=!1}}var L=!1,M=null,N=-1,Z=5,B=-1;function X(){return!(s.unstable_now()-B<Z)}function O(){if(M!==null){var q=s.unstable_now();B=q;var Y=!0;try{Y=M(!0,q)}finally{Y?H():(L=!1,M=null)}}else L=!1}var H;if(typeof R=="function")H=function(){R(O)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,j=$.port2;$.port1.onmessage=O,H=function(){j.postMessage(null)}}else H=function(){y(O,0)};function ce(q){M=q,L||(L=!0,H())}function te(q,Y){N=y(function(){q(s.unstable_now())},Y)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(q){q.callback=null},s.unstable_continueExecution=function(){E||w||(E=!0,ce(F))},s.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<q?Math.floor(1e3/q):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function(q){switch(_){case 1:case 2:case 3:var Y=3;break;default:Y=_}var G=_;_=Y;try{return q()}finally{_=G}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(q,Y){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var G=_;_=q;try{return Y()}finally{_=G}},s.unstable_scheduleCallback=function(q,Y,G){var P=s.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?P+G:P):G=P,q){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=G+K,q={id:g++,callback:Y,priorityLevel:q,startTime:G,expirationTime:K,sortIndex:-1},G>P?(q.sortIndex=G,e(m,q),t(d)===null&&q===t(m)&&(A?(b(N),N=-1):A=!0,te(D,G-P))):(q.sortIndex=K,e(d,q),E||w||(E=!0,ce(F))),q},s.unstable_shouldYield=X,s.unstable_wrapCallback=function(q){var Y=_;return function(){var G=_;_=Y;try{return q.apply(this,arguments)}finally{_=G}}}})(Yu)),Yu}var am;function Lv(){return am||(am=1,Xu.exports=Dv()),Xu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om;function Iv(){if(om)return ri;om=1;var s=vf(),e=Lv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function _(n){return d.call(v,n)?!0:d.call(g,n)?!1:m.test(n)?v[n]=!0:(g[n]=!0,!1)}function w(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,c){if(i===null||typeof i>"u"||w(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(n,i,a,c,h,x,C){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=x,this.removeEmptyString=C}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new A(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(b,R);y[i]=new A(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(b,R);y[i]=new A(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(b,R);y[i]=new A(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function z(n,i,a,c){var h=y.hasOwnProperty(i)?y[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,h,c)&&(a=null),c||h===null?_(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var D=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),L=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),X=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),te=Symbol.for("react.offscreen"),q=Symbol.iterator;function Y(n){return n===null||typeof n!="object"?null:(n=q&&n[q]||n["@@iterator"],typeof n=="function"?n:null)}var G=Object.assign,P;function K(n){if(P===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);P=i&&i[1]||""}return`
`+P+n}var Te=!1;function ie(n,i){if(!n||Te)return"";Te=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(pe){var c=pe}Reflect.construct(n,[],i)}else{try{i.call()}catch(pe){c=pe}n.call(i.prototype)}else{try{throw Error()}catch(pe){c=pe}n()}}catch(pe){if(pe&&c&&typeof pe.stack=="string"){for(var h=pe.stack.split(`
`),x=c.stack.split(`
`),C=h.length-1,V=x.length-1;1<=C&&0<=V&&h[C]!==x[V];)V--;for(;1<=C&&0<=V;C--,V--)if(h[C]!==x[V]){if(C!==1||V!==1)do if(C--,V--,0>V||h[C]!==x[V]){var J=`
`+h[C].replace(" at new "," at ");return n.displayName&&J.includes("<anonymous>")&&(J=J.replace("<anonymous>",n.displayName)),J}while(1<=C&&0<=V);break}}}finally{Te=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?K(n):""}function xe(n){switch(n.tag){case 5:return K(n.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return n=ie(n.type,!1),n;case 11:return n=ie(n.type.render,!1),n;case 1:return n=ie(n.type,!0),n;default:return""}}function Me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case M:return"Fragment";case L:return"Portal";case Z:return"Profiler";case N:return"StrictMode";case H:return"Suspense";case $:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case X:return(n.displayName||"Context")+".Consumer";case B:return(n._context.displayName||"Context")+".Provider";case O:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case j:return i=n.displayName||null,i!==null?i:Me(n.type)||"Memo";case ce:i=n._payload,n=n._init;try{return Me(n(i))}catch{}}return null}function ge(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(i);case 8:return i===N?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ye(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Pe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function st(n){var i=Pe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,x=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(C){c=""+C,x.call(this,C)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(C){c=""+C},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function je(n){n._valueTracker||(n._valueTracker=st(n))}function Ee(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Pe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Fe(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ge(n,i){var a=i.checked;return G({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ct(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=ye(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function xt(n,i){i=i.checked,i!=null&&z(n,"checked",i,!1)}function vt(n,i){xt(n,i);var a=ye(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Xt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Xt(n,i.type,ye(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function me(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Xt(n,i,a){(i!=="number"||Fe(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var It=Array.isArray;function Zt(n,i,a,c){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+ye(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function Wt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return G({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function mn(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(It(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:ye(a)}}function Q(n,i){var a=ye(i.value),c=ye(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Jt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Et(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function St(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Et(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var de,bt=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(de=de||document.createElement("div"),de.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=de.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Je(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var nt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},I=["Webkit","ms","Moz","O"];Object.keys(nt).forEach(function(n){I.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),nt[i]=nt[n]})});function T(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||nt.hasOwnProperty(n)&&nt[n]?(""+i).trim():i+"px"}function ae(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=T(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var Re=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function we(n,i){if(i){if(Re[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ue(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Be=null;function ve(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Se=null,_e=null,k=null;function oe(n){if(n=ka(n)){if(typeof Se!="function")throw Error(t(280));var i=n.stateNode;i&&(i=ko(i),Se(n.stateNode,n.type,i))}}function le(n){_e?k?k.push(n):k=[n]:_e=n}function Ae(){if(_e){var n=_e,i=k;if(k=_e=null,oe(n),i)for(n=0;n<i.length;n++)oe(i[n])}}function Ne(n,i){return n(i)}function De(){}var $e=!1;function dt(n,i,a){if($e)return n(i,a);$e=!0;try{return Ne(n,i,a)}finally{$e=!1,(_e!==null||k!==null)&&(De(),Ae())}}function Ce(n,i){var a=n.stateNode;if(a===null)return null;var c=ko(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Xe=!1;if(p)try{var at={};Object.defineProperty(at,"passive",{get:function(){Xe=!0}}),window.addEventListener("test",at,at),window.removeEventListener("test",at,at)}catch{Xe=!1}function Oe(n,i,a,c,h,x,C,V,J){var pe=Array.prototype.slice.call(arguments,3);try{i.apply(a,pe)}catch(ke){this.onError(ke)}}var ut=!1,pt=null,nn=!1,Dn=null,xn={onError:function(n){ut=!0,pt=n}};function mt(n,i,a,c,h,x,C,V,J){ut=!1,pt=null,Oe.apply(xn,arguments)}function Ft(n,i,a,c,h,x,C,V,J){if(mt.apply(this,arguments),ut){if(ut){var pe=pt;ut=!1,pt=null}else throw Error(t(198));nn||(nn=!0,Dn=pe)}}function _t(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Bt(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Kt(n){if(_t(n)!==n)throw Error(t(188))}function Zn(n){var i=n.alternate;if(!i){if(i=_t(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var h=a.return;if(h===null)break;var x=h.alternate;if(x===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===x.child){for(x=h.child;x;){if(x===a)return Kt(h),n;if(x===c)return Kt(h),i;x=x.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=x;else{for(var C=!1,V=h.child;V;){if(V===a){C=!0,a=h,c=x;break}if(V===c){C=!0,c=h,a=x;break}V=V.sibling}if(!C){for(V=x.child;V;){if(V===a){C=!0,a=x,c=h;break}if(V===c){C=!0,c=x,a=h;break}V=V.sibling}if(!C)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function $n(n){return n=Zn(n),n!==null?Ln(n):null}function Ln(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Ln(n);if(i!==null)return i;n=n.sibling}return null}var xi=e.unstable_scheduleCallback,Qt=e.unstable_cancelCallback,Ci=e.unstable_shouldYield,rs=e.unstable_requestPaint,Gt=e.unstable_now,vi=e.unstable_getCurrentPriorityLevel,Ai=e.unstable_ImmediatePriority,Ar=e.unstable_UserBlockingPriority,Jn=e.unstable_NormalPriority,Rr=e.unstable_LowPriority,S=e.unstable_IdlePriority,U=null,W=null;function ee(n){if(W&&typeof W.onCommitFiberRoot=="function")try{W.onCommitFiberRoot(U,n,void 0,(n.current.flags&128)===128)}catch{}}var ne=Math.clz32?Math.clz32:He,Le=Math.log,Ye=Math.LN2;function He(n){return n>>>=0,n===0?32:31-(Le(n)/Ye|0)|0}var Ve=64,qe=4194304;function rt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Mt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,x=n.pingedLanes,C=a&268435455;if(C!==0){var V=C&~h;V!==0?c=rt(V):(x&=C,x!==0&&(c=rt(x)))}else C=a&~h,C!==0?c=rt(C):x!==0&&(c=rt(x));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,x=i&-i,h>=x||h===16&&(x&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-ne(i),h=1<<a,c|=n[a],i&=~h;return c}function et(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function At(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,x=n.pendingLanes;0<x;){var C=31-ne(x),V=1<<C,J=h[C];J===-1?((V&a)===0||(V&c)!==0)&&(h[C]=et(V,i)):J<=i&&(n.expiredLanes|=V),x&=~V}}function en(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function jt(){var n=Ve;return Ve<<=1,(Ve&4194240)===0&&(Ve=64),n}function zt(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function rn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ne(i),n[i]=a}function re(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-ne(a),x=1<<h;i[h]=0,c[h]=-1,n[h]=-1,a&=~x}}function Tt(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-ne(a),h=1<<c;h&i|n[c]&i&&(n[c]|=i),a&=~h}}var Ke=0;function Xn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var hn,Ri,oi,li,Nt,ln=!1,Tn=[],Ot=null,Yt=null,vn=null,$i=new Map,ss=new Map,Xi=[],mc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zf(n,i){switch(n){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":Yt=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":$i.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ss.delete(i.pointerId)}}function Sa(n,i,a,c,h,x){return n===null||n.nativeEvent!==x?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:x,targetContainers:[h]},i!==null&&(i=ka(i),i!==null&&Ri(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function qg(n,i,a,c,h){switch(i){case"focusin":return Ot=Sa(Ot,n,i,a,c,h),!0;case"dragenter":return Yt=Sa(Yt,n,i,a,c,h),!0;case"mouseover":return vn=Sa(vn,n,i,a,c,h),!0;case"pointerover":var x=h.pointerId;return $i.set(x,Sa($i.get(x)||null,n,i,a,c,h)),!0;case"gotpointercapture":return x=h.pointerId,ss.set(x,Sa(ss.get(x)||null,n,i,a,c,h)),!0}return!1}function Of(n){var i=as(n.target);if(i!==null){var a=_t(i);if(a!==null){if(i=a.tag,i===13){if(i=Bt(a),i!==null){n.blockedOn=i,Nt(n.priority,function(){oi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function So(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=xc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Be=c,a.target.dispatchEvent(c),Be=null}else return i=ka(a),i!==null&&Ri(i),n.blockedOn=a,!1;i.shift()}return!0}function Bf(n,i,a){So(n)&&a.delete(i)}function Kg(){ln=!1,Ot!==null&&So(Ot)&&(Ot=null),Yt!==null&&So(Yt)&&(Yt=null),vn!==null&&So(vn)&&(vn=null),$i.forEach(Bf),ss.forEach(Bf)}function ba(n,i){n.blockedOn===i&&(n.blockedOn=null,ln||(ln=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Kg)))}function wa(n){function i(h){return ba(h,n)}if(0<Tn.length){ba(Tn[0],n);for(var a=1;a<Tn.length;a++){var c=Tn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Ot!==null&&ba(Ot,n),Yt!==null&&ba(Yt,n),vn!==null&&ba(vn,n),$i.forEach(i),ss.forEach(i),a=0;a<Xi.length;a++)c=Xi[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Xi.length&&(a=Xi[0],a.blockedOn===null);)Of(a),a.blockedOn===null&&Xi.shift()}var Rs=D.ReactCurrentBatchConfig,bo=!0;function Zg(n,i,a,c){var h=Ke,x=Rs.transition;Rs.transition=null;try{Ke=1,gc(n,i,a,c)}finally{Ke=h,Rs.transition=x}}function Jg(n,i,a,c){var h=Ke,x=Rs.transition;Rs.transition=null;try{Ke=4,gc(n,i,a,c)}finally{Ke=h,Rs.transition=x}}function gc(n,i,a,c){if(bo){var h=xc(n,i,a,c);if(h===null)Ic(n,i,c,wo,a),zf(n,c);else if(qg(h,n,i,a,c))c.stopPropagation();else if(zf(n,c),i&4&&-1<mc.indexOf(n)){for(;h!==null;){var x=ka(h);if(x!==null&&hn(x),x=xc(n,i,a,c),x===null&&Ic(n,i,c,wo,a),x===h)break;h=x}h!==null&&c.stopPropagation()}else Ic(n,i,c,null,a)}}var wo=null;function xc(n,i,a,c){if(wo=null,n=ve(c),n=as(n),n!==null)if(i=_t(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Bt(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return wo=n,null}function Hf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vi()){case Ai:return 1;case Ar:return 4;case Jn:case Rr:return 16;case S:return 536870912;default:return 16}default:return 16}}var Nr=null,vc=null,Mo=null;function Gf(){if(Mo)return Mo;var n,i=vc,a=i.length,c,h="value"in Nr?Nr.value:Nr.textContent,x=h.length;for(n=0;n<a&&i[n]===h[n];n++);var C=a-n;for(c=1;c<=C&&i[a-c]===h[x-c];c++);return Mo=h.slice(n,1<c?1-c:void 0)}function Eo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function To(){return!0}function Vf(){return!1}function ci(n){function i(a,c,h,x,C){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=x,this.target=C,this.currentTarget=null;for(var V in n)n.hasOwnProperty(V)&&(a=n[V],this[V]=a?a(x):x[V]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?To:Vf,this.isPropagationStopped=Vf,this}return G(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=To)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=To)},persist:function(){},isPersistent:To}),i}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_c=ci(Ns),Ma=G({},Ns,{view:0,detail:0}),Qg=ci(Ma),yc,Sc,Ea,Co=G({},Ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ea&&(Ea&&n.type==="mousemove"?(yc=n.screenX-Ea.screenX,Sc=n.screenY-Ea.screenY):Sc=yc=0,Ea=n),yc)},movementY:function(n){return"movementY"in n?n.movementY:Sc}}),Wf=ci(Co),ex=G({},Co,{dataTransfer:0}),tx=ci(ex),nx=G({},Ma,{relatedTarget:0}),bc=ci(nx),ix=G({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),rx=ci(ix),sx=G({},Ns,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ax=ci(sx),ox=G({},Ns,{data:0}),jf=ci(ox),lx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ux={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dx(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=ux[n])?!!i[n]:!1}function wc(){return dx}var fx=G({},Ma,{key:function(n){if(n.key){var i=lx[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Eo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?cx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wc,charCode:function(n){return n.type==="keypress"?Eo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Eo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),hx=ci(fx),px=G({},Co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$f=ci(px),mx=G({},Ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wc}),gx=ci(mx),xx=G({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),vx=ci(xx),_x=G({},Co,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),yx=ci(_x),Sx=[9,13,27,32],Mc=p&&"CompositionEvent"in window,Ta=null;p&&"documentMode"in document&&(Ta=document.documentMode);var bx=p&&"TextEvent"in window&&!Ta,Xf=p&&(!Mc||Ta&&8<Ta&&11>=Ta),Yf=" ",qf=!1;function Kf(n,i){switch(n){case"keyup":return Sx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ps=!1;function wx(n,i){switch(n){case"compositionend":return Zf(i);case"keypress":return i.which!==32?null:(qf=!0,Yf);case"textInput":return n=i.data,n===Yf&&qf?null:n;default:return null}}function Mx(n,i){if(Ps)return n==="compositionend"||!Mc&&Kf(n,i)?(n=Gf(),Mo=vc=Nr=null,Ps=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Xf&&i.locale!=="ko"?null:i.data;default:return null}}var Ex={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Ex[n.type]:i==="textarea"}function Qf(n,i,a,c){le(c),i=Do(i,"onChange"),0<i.length&&(a=new _c("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Ca=null,Aa=null;function Tx(n){xh(n,0)}function Ao(n){var i=Us(n);if(Ee(i))return n}function Cx(n,i){if(n==="change")return i}var eh=!1;if(p){var Ec;if(p){var Tc="oninput"in document;if(!Tc){var th=document.createElement("div");th.setAttribute("oninput","return;"),Tc=typeof th.oninput=="function"}Ec=Tc}else Ec=!1;eh=Ec&&(!document.documentMode||9<document.documentMode)}function nh(){Ca&&(Ca.detachEvent("onpropertychange",ih),Aa=Ca=null)}function ih(n){if(n.propertyName==="value"&&Ao(Aa)){var i=[];Qf(i,Aa,n,ve(n)),dt(Tx,i)}}function Ax(n,i,a){n==="focusin"?(nh(),Ca=i,Aa=a,Ca.attachEvent("onpropertychange",ih)):n==="focusout"&&nh()}function Rx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ao(Aa)}function Nx(n,i){if(n==="click")return Ao(i)}function Px(n,i){if(n==="input"||n==="change")return Ao(i)}function Dx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ni=typeof Object.is=="function"?Object.is:Dx;function Ra(n,i){if(Ni(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!d.call(i,h)||!Ni(n[h],i[h]))return!1}return!0}function rh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function sh(n,i){var a=rh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=rh(a)}}function ah(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?ah(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function oh(){for(var n=window,i=Fe();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Fe(n.document)}return i}function Cc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Lx(n){var i=oh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&ah(a.ownerDocument.documentElement,a)){if(c!==null&&Cc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,x=Math.min(c.start,h);c=c.end===void 0?x:Math.min(c.end,h),!n.extend&&x>c&&(h=c,c=x,x=h),h=sh(a,x);var C=sh(a,c);h&&C&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==C.node||n.focusOffset!==C.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),x>c?(n.addRange(i),n.extend(C.node,C.offset)):(i.setEnd(C.node,C.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Ix=p&&"documentMode"in document&&11>=document.documentMode,Ds=null,Ac=null,Na=null,Rc=!1;function lh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Rc||Ds==null||Ds!==Fe(c)||(c=Ds,"selectionStart"in c&&Cc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Na&&Ra(Na,c)||(Na=c,c=Do(Ac,"onSelect"),0<c.length&&(i=new _c("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ds)))}function Ro(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ls={animationend:Ro("Animation","AnimationEnd"),animationiteration:Ro("Animation","AnimationIteration"),animationstart:Ro("Animation","AnimationStart"),transitionend:Ro("Transition","TransitionEnd")},Nc={},ch={};p&&(ch=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function No(n){if(Nc[n])return Nc[n];if(!Ls[n])return n;var i=Ls[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in ch)return Nc[n]=i[a];return n}var uh=No("animationend"),dh=No("animationiteration"),fh=No("animationstart"),hh=No("transitionend"),ph=new Map,mh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(n,i){ph.set(n,i),l(i,[n])}for(var Pc=0;Pc<mh.length;Pc++){var Dc=mh[Pc],kx=Dc.toLowerCase(),Ux=Dc[0].toUpperCase()+Dc.slice(1);Pr(kx,"on"+Ux)}Pr(uh,"onAnimationEnd"),Pr(dh,"onAnimationIteration"),Pr(fh,"onAnimationStart"),Pr("dblclick","onDoubleClick"),Pr("focusin","onFocus"),Pr("focusout","onBlur"),Pr(hh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pa));function gh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Ft(c,i,void 0,n),n.currentTarget=null}function xh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var x=void 0;if(i)for(var C=c.length-1;0<=C;C--){var V=c[C],J=V.instance,pe=V.currentTarget;if(V=V.listener,J!==x&&h.isPropagationStopped())break e;gh(h,V,pe),x=J}else for(C=0;C<c.length;C++){if(V=c[C],J=V.instance,pe=V.currentTarget,V=V.listener,J!==x&&h.isPropagationStopped())break e;gh(h,V,pe),x=J}}}if(nn)throw n=Dn,nn=!1,Dn=null,n}function sn(n,i){var a=i[Bc];a===void 0&&(a=i[Bc]=new Set);var c=n+"__bubble";a.has(c)||(vh(i,n,2,!1),a.add(c))}function Lc(n,i,a){var c=0;i&&(c|=4),vh(a,n,c,i)}var Po="_reactListening"+Math.random().toString(36).slice(2);function Da(n){if(!n[Po]){n[Po]=!0,r.forEach(function(a){a!=="selectionchange"&&(Fx.has(a)||Lc(a,!1,n),Lc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Po]||(i[Po]=!0,Lc("selectionchange",!1,i))}}function vh(n,i,a,c){switch(Hf(i)){case 1:var h=Zg;break;case 4:h=Jg;break;default:h=gc}a=h.bind(null,i,a,n),h=void 0,!Xe||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function Ic(n,i,a,c,h){var x=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var C=c.tag;if(C===3||C===4){var V=c.stateNode.containerInfo;if(V===h||V.nodeType===8&&V.parentNode===h)break;if(C===4)for(C=c.return;C!==null;){var J=C.tag;if((J===3||J===4)&&(J=C.stateNode.containerInfo,J===h||J.nodeType===8&&J.parentNode===h))return;C=C.return}for(;V!==null;){if(C=as(V),C===null)return;if(J=C.tag,J===5||J===6){c=x=C;continue e}V=V.parentNode}}c=c.return}dt(function(){var pe=x,ke=ve(a),ze=[];e:{var Ie=ph.get(n);if(Ie!==void 0){var Qe=_c,it=n;switch(n){case"keypress":if(Eo(a)===0)break e;case"keydown":case"keyup":Qe=hx;break;case"focusin":it="focus",Qe=bc;break;case"focusout":it="blur",Qe=bc;break;case"beforeblur":case"afterblur":Qe=bc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Qe=Wf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Qe=tx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Qe=gx;break;case uh:case dh:case fh:Qe=rx;break;case hh:Qe=vx;break;case"scroll":Qe=Qg;break;case"wheel":Qe=yx;break;case"copy":case"cut":case"paste":Qe=ax;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Qe=$f}var ot=(i&4)!==0,gn=!ot&&n==="scroll",ue=ot?Ie!==null?Ie+"Capture":null:Ie;ot=[];for(var se=pe,fe;se!==null;){fe=se;var We=fe.stateNode;if(fe.tag===5&&We!==null&&(fe=We,ue!==null&&(We=Ce(se,ue),We!=null&&ot.push(La(se,We,fe)))),gn)break;se=se.return}0<ot.length&&(Ie=new Qe(Ie,it,null,a,ke),ze.push({event:Ie,listeners:ot}))}}if((i&7)===0){e:{if(Ie=n==="mouseover"||n==="pointerover",Qe=n==="mouseout"||n==="pointerout",Ie&&a!==Be&&(it=a.relatedTarget||a.fromElement)&&(as(it)||it[lr]))break e;if((Qe||Ie)&&(Ie=ke.window===ke?ke:(Ie=ke.ownerDocument)?Ie.defaultView||Ie.parentWindow:window,Qe?(it=a.relatedTarget||a.toElement,Qe=pe,it=it?as(it):null,it!==null&&(gn=_t(it),it!==gn||it.tag!==5&&it.tag!==6)&&(it=null)):(Qe=null,it=pe),Qe!==it)){if(ot=Wf,We="onMouseLeave",ue="onMouseEnter",se="mouse",(n==="pointerout"||n==="pointerover")&&(ot=$f,We="onPointerLeave",ue="onPointerEnter",se="pointer"),gn=Qe==null?Ie:Us(Qe),fe=it==null?Ie:Us(it),Ie=new ot(We,se+"leave",Qe,a,ke),Ie.target=gn,Ie.relatedTarget=fe,We=null,as(ke)===pe&&(ot=new ot(ue,se+"enter",it,a,ke),ot.target=fe,ot.relatedTarget=gn,We=ot),gn=We,Qe&&it)t:{for(ot=Qe,ue=it,se=0,fe=ot;fe;fe=Is(fe))se++;for(fe=0,We=ue;We;We=Is(We))fe++;for(;0<se-fe;)ot=Is(ot),se--;for(;0<fe-se;)ue=Is(ue),fe--;for(;se--;){if(ot===ue||ue!==null&&ot===ue.alternate)break t;ot=Is(ot),ue=Is(ue)}ot=null}else ot=null;Qe!==null&&_h(ze,Ie,Qe,ot,!1),it!==null&&gn!==null&&_h(ze,gn,it,ot,!0)}}e:{if(Ie=pe?Us(pe):window,Qe=Ie.nodeName&&Ie.nodeName.toLowerCase(),Qe==="select"||Qe==="input"&&Ie.type==="file")var lt=Cx;else if(Jf(Ie))if(eh)lt=Px;else{lt=Rx;var ft=Ax}else(Qe=Ie.nodeName)&&Qe.toLowerCase()==="input"&&(Ie.type==="checkbox"||Ie.type==="radio")&&(lt=Nx);if(lt&&(lt=lt(n,pe))){Qf(ze,lt,a,ke);break e}ft&&ft(n,Ie,pe),n==="focusout"&&(ft=Ie._wrapperState)&&ft.controlled&&Ie.type==="number"&&Xt(Ie,"number",Ie.value)}switch(ft=pe?Us(pe):window,n){case"focusin":(Jf(ft)||ft.contentEditable==="true")&&(Ds=ft,Ac=pe,Na=null);break;case"focusout":Na=Ac=Ds=null;break;case"mousedown":Rc=!0;break;case"contextmenu":case"mouseup":case"dragend":Rc=!1,lh(ze,a,ke);break;case"selectionchange":if(Ix)break;case"keydown":case"keyup":lh(ze,a,ke)}var ht;if(Mc)e:{switch(n){case"compositionstart":var gt="onCompositionStart";break e;case"compositionend":gt="onCompositionEnd";break e;case"compositionupdate":gt="onCompositionUpdate";break e}gt=void 0}else Ps?Kf(n,a)&&(gt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(gt="onCompositionStart");gt&&(Xf&&a.locale!=="ko"&&(Ps||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&Ps&&(ht=Gf()):(Nr=ke,vc="value"in Nr?Nr.value:Nr.textContent,Ps=!0)),ft=Do(pe,gt),0<ft.length&&(gt=new jf(gt,n,null,a,ke),ze.push({event:gt,listeners:ft}),ht?gt.data=ht:(ht=Zf(a),ht!==null&&(gt.data=ht)))),(ht=bx?wx(n,a):Mx(n,a))&&(pe=Do(pe,"onBeforeInput"),0<pe.length&&(ke=new jf("onBeforeInput","beforeinput",null,a,ke),ze.push({event:ke,listeners:pe}),ke.data=ht))}xh(ze,i)})}function La(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Do(n,i){for(var a=i+"Capture",c=[];n!==null;){var h=n,x=h.stateNode;h.tag===5&&x!==null&&(h=x,x=Ce(n,a),x!=null&&c.unshift(La(n,x,h)),x=Ce(n,i),x!=null&&c.push(La(n,x,h))),n=n.return}return c}function Is(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function _h(n,i,a,c,h){for(var x=i._reactName,C=[];a!==null&&a!==c;){var V=a,J=V.alternate,pe=V.stateNode;if(J!==null&&J===c)break;V.tag===5&&pe!==null&&(V=pe,h?(J=Ce(a,x),J!=null&&C.unshift(La(a,J,V))):h||(J=Ce(a,x),J!=null&&C.push(La(a,J,V)))),a=a.return}C.length!==0&&n.push({event:i,listeners:C})}var zx=/\r\n?/g,Ox=/\u0000|\uFFFD/g;function yh(n){return(typeof n=="string"?n:""+n).replace(zx,`
`).replace(Ox,"")}function Lo(n,i,a){if(i=yh(i),yh(n)!==i&&a)throw Error(t(425))}function Io(){}var kc=null,Uc=null;function Fc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var zc=typeof setTimeout=="function"?setTimeout:void 0,Bx=typeof clearTimeout=="function"?clearTimeout:void 0,Sh=typeof Promise=="function"?Promise:void 0,Hx=typeof queueMicrotask=="function"?queueMicrotask:typeof Sh<"u"?function(n){return Sh.resolve(null).then(n).catch(Gx)}:zc;function Gx(n){setTimeout(function(){throw n})}function Oc(n,i){var a=i,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),wa(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);wa(i)}function Dr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function bh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ks=Math.random().toString(36).slice(2),Yi="__reactFiber$"+ks,Ia="__reactProps$"+ks,lr="__reactContainer$"+ks,Bc="__reactEvents$"+ks,Vx="__reactListeners$"+ks,Wx="__reactHandles$"+ks;function as(n){var i=n[Yi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[lr]||a[Yi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=bh(n);n!==null;){if(a=n[Yi])return a;n=bh(n)}return i}n=a,a=n.parentNode}return null}function ka(n){return n=n[Yi]||n[lr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Us(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ko(n){return n[Ia]||null}var Hc=[],Fs=-1;function Lr(n){return{current:n}}function an(n){0>Fs||(n.current=Hc[Fs],Hc[Fs]=null,Fs--)}function tn(n,i){Fs++,Hc[Fs]=n.current,n.current=i}var Ir={},zn=Lr(Ir),Qn=Lr(!1),os=Ir;function zs(n,i){var a=n.type.contextTypes;if(!a)return Ir;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},x;for(x in a)h[x]=i[x];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function ei(n){return n=n.childContextTypes,n!=null}function Uo(){an(Qn),an(zn)}function wh(n,i,a){if(zn.current!==Ir)throw Error(t(168));tn(zn,i),tn(Qn,a)}function Mh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,ge(n)||"Unknown",h));return G({},a,c)}function Fo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ir,os=zn.current,tn(zn,n),tn(Qn,Qn.current),!0}function Eh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Mh(n,i,os),c.__reactInternalMemoizedMergedChildContext=n,an(Qn),an(zn),tn(zn,n)):an(Qn),tn(Qn,a)}var cr=null,zo=!1,Gc=!1;function Th(n){cr===null?cr=[n]:cr.push(n)}function jx(n){zo=!0,Th(n)}function kr(){if(!Gc&&cr!==null){Gc=!0;var n=0,i=Ke;try{var a=cr;for(Ke=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}cr=null,zo=!1}catch(h){throw cr!==null&&(cr=cr.slice(n+1)),xi(Ai,kr),h}finally{Ke=i,Gc=!1}}return null}var Os=[],Bs=0,Oo=null,Bo=0,_i=[],yi=0,ls=null,ur=1,dr="";function cs(n,i){Os[Bs++]=Bo,Os[Bs++]=Oo,Oo=n,Bo=i}function Ch(n,i,a){_i[yi++]=ur,_i[yi++]=dr,_i[yi++]=ls,ls=n;var c=ur;n=dr;var h=32-ne(c)-1;c&=~(1<<h),a+=1;var x=32-ne(i)+h;if(30<x){var C=h-h%5;x=(c&(1<<C)-1).toString(32),c>>=C,h-=C,ur=1<<32-ne(i)+h|a<<h|c,dr=x+n}else ur=1<<x|a<<h|c,dr=n}function Vc(n){n.return!==null&&(cs(n,1),Ch(n,1,0))}function Wc(n){for(;n===Oo;)Oo=Os[--Bs],Os[Bs]=null,Bo=Os[--Bs],Os[Bs]=null;for(;n===ls;)ls=_i[--yi],_i[yi]=null,dr=_i[--yi],_i[yi]=null,ur=_i[--yi],_i[yi]=null}var ui=null,di=null,on=!1,Pi=null;function Ah(n,i){var a=Mi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Rh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ui=n,di=Dr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ui=n,di=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ls!==null?{id:ur,overflow:dr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Mi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,ui=n,di=null,!0):!1;default:return!1}}function jc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function $c(n){if(on){var i=di;if(i){var a=i;if(!Rh(n,i)){if(jc(n))throw Error(t(418));i=Dr(a.nextSibling);var c=ui;i&&Rh(n,i)?Ah(c,a):(n.flags=n.flags&-4097|2,on=!1,ui=n)}}else{if(jc(n))throw Error(t(418));n.flags=n.flags&-4097|2,on=!1,ui=n}}}function Nh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ui=n}function Ho(n){if(n!==ui)return!1;if(!on)return Nh(n),on=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Fc(n.type,n.memoizedProps)),i&&(i=di)){if(jc(n))throw Ph(),Error(t(418));for(;i;)Ah(n,i),i=Dr(i.nextSibling)}if(Nh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){di=Dr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}di=null}}else di=ui?Dr(n.stateNode.nextSibling):null;return!0}function Ph(){for(var n=di;n;)n=Dr(n.nextSibling)}function Hs(){di=ui=null,on=!1}function Xc(n){Pi===null?Pi=[n]:Pi.push(n)}var $x=D.ReactCurrentBatchConfig;function Ua(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,x=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===x?i.ref:(i=function(C){var V=h.refs;C===null?delete V[x]:V[x]=C},i._stringRef=x,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Go(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Dh(n){var i=n._init;return i(n._payload)}function Lh(n){function i(ue,se){if(n){var fe=ue.deletions;fe===null?(ue.deletions=[se],ue.flags|=16):fe.push(se)}}function a(ue,se){if(!n)return null;for(;se!==null;)i(ue,se),se=se.sibling;return null}function c(ue,se){for(ue=new Map;se!==null;)se.key!==null?ue.set(se.key,se):ue.set(se.index,se),se=se.sibling;return ue}function h(ue,se){return ue=Vr(ue,se),ue.index=0,ue.sibling=null,ue}function x(ue,se,fe){return ue.index=fe,n?(fe=ue.alternate,fe!==null?(fe=fe.index,fe<se?(ue.flags|=2,se):fe):(ue.flags|=2,se)):(ue.flags|=1048576,se)}function C(ue){return n&&ue.alternate===null&&(ue.flags|=2),ue}function V(ue,se,fe,We){return se===null||se.tag!==6?(se=zu(fe,ue.mode,We),se.return=ue,se):(se=h(se,fe),se.return=ue,se)}function J(ue,se,fe,We){var lt=fe.type;return lt===M?ke(ue,se,fe.props.children,We,fe.key):se!==null&&(se.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===ce&&Dh(lt)===se.type)?(We=h(se,fe.props),We.ref=Ua(ue,se,fe),We.return=ue,We):(We=fl(fe.type,fe.key,fe.props,null,ue.mode,We),We.ref=Ua(ue,se,fe),We.return=ue,We)}function pe(ue,se,fe,We){return se===null||se.tag!==4||se.stateNode.containerInfo!==fe.containerInfo||se.stateNode.implementation!==fe.implementation?(se=Ou(fe,ue.mode,We),se.return=ue,se):(se=h(se,fe.children||[]),se.return=ue,se)}function ke(ue,se,fe,We,lt){return se===null||se.tag!==7?(se=xs(fe,ue.mode,We,lt),se.return=ue,se):(se=h(se,fe),se.return=ue,se)}function ze(ue,se,fe){if(typeof se=="string"&&se!==""||typeof se=="number")return se=zu(""+se,ue.mode,fe),se.return=ue,se;if(typeof se=="object"&&se!==null){switch(se.$$typeof){case F:return fe=fl(se.type,se.key,se.props,null,ue.mode,fe),fe.ref=Ua(ue,null,se),fe.return=ue,fe;case L:return se=Ou(se,ue.mode,fe),se.return=ue,se;case ce:var We=se._init;return ze(ue,We(se._payload),fe)}if(It(se)||Y(se))return se=xs(se,ue.mode,fe,null),se.return=ue,se;Go(ue,se)}return null}function Ie(ue,se,fe,We){var lt=se!==null?se.key:null;if(typeof fe=="string"&&fe!==""||typeof fe=="number")return lt!==null?null:V(ue,se,""+fe,We);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case F:return fe.key===lt?J(ue,se,fe,We):null;case L:return fe.key===lt?pe(ue,se,fe,We):null;case ce:return lt=fe._init,Ie(ue,se,lt(fe._payload),We)}if(It(fe)||Y(fe))return lt!==null?null:ke(ue,se,fe,We,null);Go(ue,fe)}return null}function Qe(ue,se,fe,We,lt){if(typeof We=="string"&&We!==""||typeof We=="number")return ue=ue.get(fe)||null,V(se,ue,""+We,lt);if(typeof We=="object"&&We!==null){switch(We.$$typeof){case F:return ue=ue.get(We.key===null?fe:We.key)||null,J(se,ue,We,lt);case L:return ue=ue.get(We.key===null?fe:We.key)||null,pe(se,ue,We,lt);case ce:var ft=We._init;return Qe(ue,se,fe,ft(We._payload),lt)}if(It(We)||Y(We))return ue=ue.get(fe)||null,ke(se,ue,We,lt,null);Go(se,We)}return null}function it(ue,se,fe,We){for(var lt=null,ft=null,ht=se,gt=se=0,Rn=null;ht!==null&&gt<fe.length;gt++){ht.index>gt?(Rn=ht,ht=null):Rn=ht.sibling;var Vt=Ie(ue,ht,fe[gt],We);if(Vt===null){ht===null&&(ht=Rn);break}n&&ht&&Vt.alternate===null&&i(ue,ht),se=x(Vt,se,gt),ft===null?lt=Vt:ft.sibling=Vt,ft=Vt,ht=Rn}if(gt===fe.length)return a(ue,ht),on&&cs(ue,gt),lt;if(ht===null){for(;gt<fe.length;gt++)ht=ze(ue,fe[gt],We),ht!==null&&(se=x(ht,se,gt),ft===null?lt=ht:ft.sibling=ht,ft=ht);return on&&cs(ue,gt),lt}for(ht=c(ue,ht);gt<fe.length;gt++)Rn=Qe(ht,ue,gt,fe[gt],We),Rn!==null&&(n&&Rn.alternate!==null&&ht.delete(Rn.key===null?gt:Rn.key),se=x(Rn,se,gt),ft===null?lt=Rn:ft.sibling=Rn,ft=Rn);return n&&ht.forEach(function(Wr){return i(ue,Wr)}),on&&cs(ue,gt),lt}function ot(ue,se,fe,We){var lt=Y(fe);if(typeof lt!="function")throw Error(t(150));if(fe=lt.call(fe),fe==null)throw Error(t(151));for(var ft=lt=null,ht=se,gt=se=0,Rn=null,Vt=fe.next();ht!==null&&!Vt.done;gt++,Vt=fe.next()){ht.index>gt?(Rn=ht,ht=null):Rn=ht.sibling;var Wr=Ie(ue,ht,Vt.value,We);if(Wr===null){ht===null&&(ht=Rn);break}n&&ht&&Wr.alternate===null&&i(ue,ht),se=x(Wr,se,gt),ft===null?lt=Wr:ft.sibling=Wr,ft=Wr,ht=Rn}if(Vt.done)return a(ue,ht),on&&cs(ue,gt),lt;if(ht===null){for(;!Vt.done;gt++,Vt=fe.next())Vt=ze(ue,Vt.value,We),Vt!==null&&(se=x(Vt,se,gt),ft===null?lt=Vt:ft.sibling=Vt,ft=Vt);return on&&cs(ue,gt),lt}for(ht=c(ue,ht);!Vt.done;gt++,Vt=fe.next())Vt=Qe(ht,ue,gt,Vt.value,We),Vt!==null&&(n&&Vt.alternate!==null&&ht.delete(Vt.key===null?gt:Vt.key),se=x(Vt,se,gt),ft===null?lt=Vt:ft.sibling=Vt,ft=Vt);return n&&ht.forEach(function(Ev){return i(ue,Ev)}),on&&cs(ue,gt),lt}function gn(ue,se,fe,We){if(typeof fe=="object"&&fe!==null&&fe.type===M&&fe.key===null&&(fe=fe.props.children),typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case F:e:{for(var lt=fe.key,ft=se;ft!==null;){if(ft.key===lt){if(lt=fe.type,lt===M){if(ft.tag===7){a(ue,ft.sibling),se=h(ft,fe.props.children),se.return=ue,ue=se;break e}}else if(ft.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===ce&&Dh(lt)===ft.type){a(ue,ft.sibling),se=h(ft,fe.props),se.ref=Ua(ue,ft,fe),se.return=ue,ue=se;break e}a(ue,ft);break}else i(ue,ft);ft=ft.sibling}fe.type===M?(se=xs(fe.props.children,ue.mode,We,fe.key),se.return=ue,ue=se):(We=fl(fe.type,fe.key,fe.props,null,ue.mode,We),We.ref=Ua(ue,se,fe),We.return=ue,ue=We)}return C(ue);case L:e:{for(ft=fe.key;se!==null;){if(se.key===ft)if(se.tag===4&&se.stateNode.containerInfo===fe.containerInfo&&se.stateNode.implementation===fe.implementation){a(ue,se.sibling),se=h(se,fe.children||[]),se.return=ue,ue=se;break e}else{a(ue,se);break}else i(ue,se);se=se.sibling}se=Ou(fe,ue.mode,We),se.return=ue,ue=se}return C(ue);case ce:return ft=fe._init,gn(ue,se,ft(fe._payload),We)}if(It(fe))return it(ue,se,fe,We);if(Y(fe))return ot(ue,se,fe,We);Go(ue,fe)}return typeof fe=="string"&&fe!==""||typeof fe=="number"?(fe=""+fe,se!==null&&se.tag===6?(a(ue,se.sibling),se=h(se,fe),se.return=ue,ue=se):(a(ue,se),se=zu(fe,ue.mode,We),se.return=ue,ue=se),C(ue)):a(ue,se)}return gn}var Gs=Lh(!0),Ih=Lh(!1),Vo=Lr(null),Wo=null,Vs=null,Yc=null;function qc(){Yc=Vs=Wo=null}function Kc(n){var i=Vo.current;an(Vo),n._currentValue=i}function Zc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ws(n,i){Wo=n,Yc=Vs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(ti=!0),n.firstContext=null)}function Si(n){var i=n._currentValue;if(Yc!==n)if(n={context:n,memoizedValue:i,next:null},Vs===null){if(Wo===null)throw Error(t(308));Vs=n,Wo.dependencies={lanes:0,firstContext:n}}else Vs=Vs.next=n;return i}var us=null;function Jc(n){us===null?us=[n]:us.push(n)}function kh(n,i,a,c){var h=i.interleaved;return h===null?(a.next=a,Jc(i)):(a.next=h.next,h.next=a),i.interleaved=a,fr(n,c)}function fr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Ur=!1;function Qc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function hr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Fr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ht&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,fr(n,a)}return h=c.interleaved,h===null?(i.next=i,Jc(c)):(i.next=h.next,h.next=i),c.interleaved=i,fr(n,a)}function jo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Tt(n,a)}}function Fh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,x=null;if(a=a.firstBaseUpdate,a!==null){do{var C={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};x===null?h=x=C:x=x.next=C,a=a.next}while(a!==null);x===null?h=x=i:x=x.next=i}else h=x=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:x,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function $o(n,i,a,c){var h=n.updateQueue;Ur=!1;var x=h.firstBaseUpdate,C=h.lastBaseUpdate,V=h.shared.pending;if(V!==null){h.shared.pending=null;var J=V,pe=J.next;J.next=null,C===null?x=pe:C.next=pe,C=J;var ke=n.alternate;ke!==null&&(ke=ke.updateQueue,V=ke.lastBaseUpdate,V!==C&&(V===null?ke.firstBaseUpdate=pe:V.next=pe,ke.lastBaseUpdate=J))}if(x!==null){var ze=h.baseState;C=0,ke=pe=J=null,V=x;do{var Ie=V.lane,Qe=V.eventTime;if((c&Ie)===Ie){ke!==null&&(ke=ke.next={eventTime:Qe,lane:0,tag:V.tag,payload:V.payload,callback:V.callback,next:null});e:{var it=n,ot=V;switch(Ie=i,Qe=a,ot.tag){case 1:if(it=ot.payload,typeof it=="function"){ze=it.call(Qe,ze,Ie);break e}ze=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=ot.payload,Ie=typeof it=="function"?it.call(Qe,ze,Ie):it,Ie==null)break e;ze=G({},ze,Ie);break e;case 2:Ur=!0}}V.callback!==null&&V.lane!==0&&(n.flags|=64,Ie=h.effects,Ie===null?h.effects=[V]:Ie.push(V))}else Qe={eventTime:Qe,lane:Ie,tag:V.tag,payload:V.payload,callback:V.callback,next:null},ke===null?(pe=ke=Qe,J=ze):ke=ke.next=Qe,C|=Ie;if(V=V.next,V===null){if(V=h.shared.pending,V===null)break;Ie=V,V=Ie.next,Ie.next=null,h.lastBaseUpdate=Ie,h.shared.pending=null}}while(!0);if(ke===null&&(J=ze),h.baseState=J,h.firstBaseUpdate=pe,h.lastBaseUpdate=ke,i=h.shared.interleaved,i!==null){h=i;do C|=h.lane,h=h.next;while(h!==i)}else x===null&&(h.shared.lanes=0);hs|=C,n.lanes=C,n.memoizedState=ze}}function zh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var Fa={},qi=Lr(Fa),za=Lr(Fa),Oa=Lr(Fa);function ds(n){if(n===Fa)throw Error(t(174));return n}function eu(n,i){switch(tn(Oa,i),tn(za,n),tn(qi,Fa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:St(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=St(i,n)}an(qi),tn(qi,i)}function js(){an(qi),an(za),an(Oa)}function Oh(n){ds(Oa.current);var i=ds(qi.current),a=St(i,n.type);i!==a&&(tn(za,n),tn(qi,a))}function tu(n){za.current===n&&(an(qi),an(za))}var cn=Lr(0);function Xo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var nu=[];function iu(){for(var n=0;n<nu.length;n++)nu[n]._workInProgressVersionPrimary=null;nu.length=0}var Yo=D.ReactCurrentDispatcher,ru=D.ReactCurrentBatchConfig,fs=0,un=null,bn=null,Cn=null,qo=!1,Ba=!1,Ha=0,Xx=0;function On(){throw Error(t(321))}function su(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Ni(n[a],i[a]))return!1;return!0}function au(n,i,a,c,h,x){if(fs=x,un=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Yo.current=n===null||n.memoizedState===null?Zx:Jx,n=a(c,h),Ba){x=0;do{if(Ba=!1,Ha=0,25<=x)throw Error(t(301));x+=1,Cn=bn=null,i.updateQueue=null,Yo.current=Qx,n=a(c,h)}while(Ba)}if(Yo.current=Jo,i=bn!==null&&bn.next!==null,fs=0,Cn=bn=un=null,qo=!1,i)throw Error(t(300));return n}function ou(){var n=Ha!==0;return Ha=0,n}function Ki(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cn===null?un.memoizedState=Cn=n:Cn=Cn.next=n,Cn}function bi(){if(bn===null){var n=un.alternate;n=n!==null?n.memoizedState:null}else n=bn.next;var i=Cn===null?un.memoizedState:Cn.next;if(i!==null)Cn=i,bn=n;else{if(n===null)throw Error(t(310));bn=n,n={memoizedState:bn.memoizedState,baseState:bn.baseState,baseQueue:bn.baseQueue,queue:bn.queue,next:null},Cn===null?un.memoizedState=Cn=n:Cn=Cn.next=n}return Cn}function Ga(n,i){return typeof i=="function"?i(n):i}function lu(n){var i=bi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=bn,h=c.baseQueue,x=a.pending;if(x!==null){if(h!==null){var C=h.next;h.next=x.next,x.next=C}c.baseQueue=h=x,a.pending=null}if(h!==null){x=h.next,c=c.baseState;var V=C=null,J=null,pe=x;do{var ke=pe.lane;if((fs&ke)===ke)J!==null&&(J=J.next={lane:0,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),c=pe.hasEagerState?pe.eagerState:n(c,pe.action);else{var ze={lane:ke,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null};J===null?(V=J=ze,C=c):J=J.next=ze,un.lanes|=ke,hs|=ke}pe=pe.next}while(pe!==null&&pe!==x);J===null?C=c:J.next=V,Ni(c,i.memoizedState)||(ti=!0),i.memoizedState=c,i.baseState=C,i.baseQueue=J,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do x=h.lane,un.lanes|=x,hs|=x,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function cu(n){var i=bi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,x=i.memoizedState;if(h!==null){a.pending=null;var C=h=h.next;do x=n(x,C.action),C=C.next;while(C!==h);Ni(x,i.memoizedState)||(ti=!0),i.memoizedState=x,i.baseQueue===null&&(i.baseState=x),a.lastRenderedState=x}return[x,c]}function Bh(){}function Hh(n,i){var a=un,c=bi(),h=i(),x=!Ni(c.memoizedState,h);if(x&&(c.memoizedState=h,ti=!0),c=c.queue,uu(Wh.bind(null,a,c,n),[n]),c.getSnapshot!==i||x||Cn!==null&&Cn.memoizedState.tag&1){if(a.flags|=2048,Va(9,Vh.bind(null,a,c,h,i),void 0,null),An===null)throw Error(t(349));(fs&30)!==0||Gh(a,i,h)}return h}function Gh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=un.updateQueue,i===null?(i={lastEffect:null,stores:null},un.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Vh(n,i,a,c){i.value=a,i.getSnapshot=c,jh(i)&&$h(n)}function Wh(n,i,a){return a(function(){jh(i)&&$h(n)})}function jh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Ni(n,a)}catch{return!0}}function $h(n){var i=fr(n,1);i!==null&&ki(i,n,1,-1)}function Xh(n){var i=Ki();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:n},i.queue=n,n=n.dispatch=Kx.bind(null,un,n),[i.memoizedState,n]}function Va(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=un.updateQueue,i===null?(i={lastEffect:null,stores:null},un.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Yh(){return bi().memoizedState}function Ko(n,i,a,c){var h=Ki();un.flags|=n,h.memoizedState=Va(1|i,a,void 0,c===void 0?null:c)}function Zo(n,i,a,c){var h=bi();c=c===void 0?null:c;var x=void 0;if(bn!==null){var C=bn.memoizedState;if(x=C.destroy,c!==null&&su(c,C.deps)){h.memoizedState=Va(i,a,x,c);return}}un.flags|=n,h.memoizedState=Va(1|i,a,x,c)}function qh(n,i){return Ko(8390656,8,n,i)}function uu(n,i){return Zo(2048,8,n,i)}function Kh(n,i){return Zo(4,2,n,i)}function Zh(n,i){return Zo(4,4,n,i)}function Jh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Qh(n,i,a){return a=a!=null?a.concat([n]):null,Zo(4,4,Jh.bind(null,i,n),a)}function du(){}function ep(n,i){var a=bi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&su(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function tp(n,i){var a=bi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&su(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function np(n,i,a){return(fs&21)===0?(n.baseState&&(n.baseState=!1,ti=!0),n.memoizedState=a):(Ni(a,i)||(a=jt(),un.lanes|=a,hs|=a,n.baseState=!0),i)}function Yx(n,i){var a=Ke;Ke=a!==0&&4>a?a:4,n(!0);var c=ru.transition;ru.transition={};try{n(!1),i()}finally{Ke=a,ru.transition=c}}function ip(){return bi().memoizedState}function qx(n,i,a){var c=Hr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},rp(n))sp(i,a);else if(a=kh(n,i,a,c),a!==null){var h=qn();ki(a,n,c,h),ap(a,i,c)}}function Kx(n,i,a){var c=Hr(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(rp(n))sp(i,h);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=i.lastRenderedReducer,x!==null))try{var C=i.lastRenderedState,V=x(C,a);if(h.hasEagerState=!0,h.eagerState=V,Ni(V,C)){var J=i.interleaved;J===null?(h.next=h,Jc(i)):(h.next=J.next,J.next=h),i.interleaved=h;return}}catch{}finally{}a=kh(n,i,h,c),a!==null&&(h=qn(),ki(a,n,c,h),ap(a,i,c))}}function rp(n){var i=n.alternate;return n===un||i!==null&&i===un}function sp(n,i){Ba=qo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function ap(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Tt(n,a)}}var Jo={readContext:Si,useCallback:On,useContext:On,useEffect:On,useImperativeHandle:On,useInsertionEffect:On,useLayoutEffect:On,useMemo:On,useReducer:On,useRef:On,useState:On,useDebugValue:On,useDeferredValue:On,useTransition:On,useMutableSource:On,useSyncExternalStore:On,useId:On,unstable_isNewReconciler:!1},Zx={readContext:Si,useCallback:function(n,i){return Ki().memoizedState=[n,i===void 0?null:i],n},useContext:Si,useEffect:qh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Ko(4194308,4,Jh.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Ko(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ko(4,2,n,i)},useMemo:function(n,i){var a=Ki();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ki();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=qx.bind(null,un,n),[c.memoizedState,n]},useRef:function(n){var i=Ki();return n={current:n},i.memoizedState=n},useState:Xh,useDebugValue:du,useDeferredValue:function(n){return Ki().memoizedState=n},useTransition:function(){var n=Xh(!1),i=n[0];return n=Yx.bind(null,n[1]),Ki().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=un,h=Ki();if(on){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),An===null)throw Error(t(349));(fs&30)!==0||Gh(c,i,a)}h.memoizedState=a;var x={value:a,getSnapshot:i};return h.queue=x,qh(Wh.bind(null,c,x,n),[n]),c.flags|=2048,Va(9,Vh.bind(null,c,x,a,i),void 0,null),a},useId:function(){var n=Ki(),i=An.identifierPrefix;if(on){var a=dr,c=ur;a=(c&~(1<<32-ne(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ha++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Xx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Jx={readContext:Si,useCallback:ep,useContext:Si,useEffect:uu,useImperativeHandle:Qh,useInsertionEffect:Kh,useLayoutEffect:Zh,useMemo:tp,useReducer:lu,useRef:Yh,useState:function(){return lu(Ga)},useDebugValue:du,useDeferredValue:function(n){var i=bi();return np(i,bn.memoizedState,n)},useTransition:function(){var n=lu(Ga)[0],i=bi().memoizedState;return[n,i]},useMutableSource:Bh,useSyncExternalStore:Hh,useId:ip,unstable_isNewReconciler:!1},Qx={readContext:Si,useCallback:ep,useContext:Si,useEffect:uu,useImperativeHandle:Qh,useInsertionEffect:Kh,useLayoutEffect:Zh,useMemo:tp,useReducer:cu,useRef:Yh,useState:function(){return cu(Ga)},useDebugValue:du,useDeferredValue:function(n){var i=bi();return bn===null?i.memoizedState=n:np(i,bn.memoizedState,n)},useTransition:function(){var n=cu(Ga)[0],i=bi().memoizedState;return[n,i]},useMutableSource:Bh,useSyncExternalStore:Hh,useId:ip,unstable_isNewReconciler:!1};function Di(n,i){if(n&&n.defaultProps){i=G({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function fu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:G({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Qo={isMounted:function(n){return(n=n._reactInternals)?_t(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=qn(),h=Hr(n),x=hr(c,h);x.payload=i,a!=null&&(x.callback=a),i=Fr(n,x,h),i!==null&&(ki(i,n,h,c),jo(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=qn(),h=Hr(n),x=hr(c,h);x.tag=1,x.payload=i,a!=null&&(x.callback=a),i=Fr(n,x,h),i!==null&&(ki(i,n,h,c),jo(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=qn(),c=Hr(n),h=hr(a,c);h.tag=2,i!=null&&(h.callback=i),i=Fr(n,h,c),i!==null&&(ki(i,n,c,a),jo(i,n,c))}};function op(n,i,a,c,h,x,C){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,x,C):i.prototype&&i.prototype.isPureReactComponent?!Ra(a,c)||!Ra(h,x):!0}function lp(n,i,a){var c=!1,h=Ir,x=i.contextType;return typeof x=="object"&&x!==null?x=Si(x):(h=ei(i)?os:zn.current,c=i.contextTypes,x=(c=c!=null)?zs(n,h):Ir),i=new i(a,x),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Qo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=x),i}function cp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Qo.enqueueReplaceState(i,i.state,null)}function hu(n,i,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},Qc(n);var x=i.contextType;typeof x=="object"&&x!==null?h.context=Si(x):(x=ei(i)?os:zn.current,h.context=zs(n,x)),h.state=n.memoizedState,x=i.getDerivedStateFromProps,typeof x=="function"&&(fu(n,i,x,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&Qo.enqueueReplaceState(h,h.state,null),$o(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function $s(n,i){try{var a="",c=i;do a+=xe(c),c=c.return;while(c);var h=a}catch(x){h=`
Error generating stack: `+x.message+`
`+x.stack}return{value:n,source:i,stack:h,digest:null}}function pu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function mu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var ev=typeof WeakMap=="function"?WeakMap:Map;function up(n,i,a){a=hr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){al||(al=!0,Nu=c),mu(n,i)},a}function dp(n,i,a){a=hr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){mu(n,i)}}var x=n.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(a.callback=function(){mu(n,i),typeof c!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var C=i.stack;this.componentDidCatch(i.value,{componentStack:C!==null?C:""})}),a}function fp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new ev;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),n=pv.bind(null,n,i,a),i.then(n,n))}function hp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function pp(n,i,a,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=hr(-1,1),i.tag=2,Fr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var tv=D.ReactCurrentOwner,ti=!1;function Yn(n,i,a,c){i.child=n===null?Ih(i,null,a,c):Gs(i,n.child,a,c)}function mp(n,i,a,c,h){a=a.render;var x=i.ref;return Ws(i,h),c=au(n,i,a,c,x,h),a=ou(),n!==null&&!ti?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,pr(n,i,h)):(on&&a&&Vc(i),i.flags|=1,Yn(n,i,c,h),i.child)}function gp(n,i,a,c,h){if(n===null){var x=a.type;return typeof x=="function"&&!Fu(x)&&x.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=x,xp(n,i,x,c,h)):(n=fl(a.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(x=n.child,(n.lanes&h)===0){var C=x.memoizedProps;if(a=a.compare,a=a!==null?a:Ra,a(C,c)&&n.ref===i.ref)return pr(n,i,h)}return i.flags|=1,n=Vr(x,c),n.ref=i.ref,n.return=i,i.child=n}function xp(n,i,a,c,h){if(n!==null){var x=n.memoizedProps;if(Ra(x,c)&&n.ref===i.ref)if(ti=!1,i.pendingProps=c=x,(n.lanes&h)!==0)(n.flags&131072)!==0&&(ti=!0);else return i.lanes=n.lanes,pr(n,i,h)}return gu(n,i,a,c,h)}function vp(n,i,a){var c=i.pendingProps,h=c.children,x=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},tn(Ys,fi),fi|=a;else{if((a&1073741824)===0)return n=x!==null?x.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,tn(Ys,fi),fi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=x!==null?x.baseLanes:a,tn(Ys,fi),fi|=c}else x!==null?(c=x.baseLanes|a,i.memoizedState=null):c=a,tn(Ys,fi),fi|=c;return Yn(n,i,h,a),i.child}function _p(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function gu(n,i,a,c,h){var x=ei(a)?os:zn.current;return x=zs(i,x),Ws(i,h),a=au(n,i,a,c,x,h),c=ou(),n!==null&&!ti?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,pr(n,i,h)):(on&&c&&Vc(i),i.flags|=1,Yn(n,i,a,h),i.child)}function yp(n,i,a,c,h){if(ei(a)){var x=!0;Fo(i)}else x=!1;if(Ws(i,h),i.stateNode===null)tl(n,i),lp(i,a,c),hu(i,a,c,h),c=!0;else if(n===null){var C=i.stateNode,V=i.memoizedProps;C.props=V;var J=C.context,pe=a.contextType;typeof pe=="object"&&pe!==null?pe=Si(pe):(pe=ei(a)?os:zn.current,pe=zs(i,pe));var ke=a.getDerivedStateFromProps,ze=typeof ke=="function"||typeof C.getSnapshotBeforeUpdate=="function";ze||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(V!==c||J!==pe)&&cp(i,C,c,pe),Ur=!1;var Ie=i.memoizedState;C.state=Ie,$o(i,c,C,h),J=i.memoizedState,V!==c||Ie!==J||Qn.current||Ur?(typeof ke=="function"&&(fu(i,a,ke,c),J=i.memoizedState),(V=Ur||op(i,a,V,c,Ie,J,pe))?(ze||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(i.flags|=4194308)):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=J),C.props=c,C.state=J,C.context=pe,c=V):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{C=i.stateNode,Uh(n,i),V=i.memoizedProps,pe=i.type===i.elementType?V:Di(i.type,V),C.props=pe,ze=i.pendingProps,Ie=C.context,J=a.contextType,typeof J=="object"&&J!==null?J=Si(J):(J=ei(a)?os:zn.current,J=zs(i,J));var Qe=a.getDerivedStateFromProps;(ke=typeof Qe=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(V!==ze||Ie!==J)&&cp(i,C,c,J),Ur=!1,Ie=i.memoizedState,C.state=Ie,$o(i,c,C,h);var it=i.memoizedState;V!==ze||Ie!==it||Qn.current||Ur?(typeof Qe=="function"&&(fu(i,a,Qe,c),it=i.memoizedState),(pe=Ur||op(i,a,pe,c,Ie,it,J)||!1)?(ke||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(c,it,J),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(c,it,J)),typeof C.componentDidUpdate=="function"&&(i.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof C.componentDidUpdate!="function"||V===n.memoizedProps&&Ie===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||V===n.memoizedProps&&Ie===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=it),C.props=c,C.state=it,C.context=J,c=pe):(typeof C.componentDidUpdate!="function"||V===n.memoizedProps&&Ie===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||V===n.memoizedProps&&Ie===n.memoizedState||(i.flags|=1024),c=!1)}return xu(n,i,a,c,x,h)}function xu(n,i,a,c,h,x){_p(n,i);var C=(i.flags&128)!==0;if(!c&&!C)return h&&Eh(i,a,!1),pr(n,i,x);c=i.stateNode,tv.current=i;var V=C&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&C?(i.child=Gs(i,n.child,null,x),i.child=Gs(i,null,V,x)):Yn(n,i,V,x),i.memoizedState=c.state,h&&Eh(i,a,!0),i.child}function Sp(n){var i=n.stateNode;i.pendingContext?wh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&wh(n,i.context,!1),eu(n,i.containerInfo)}function bp(n,i,a,c,h){return Hs(),Xc(h),i.flags|=256,Yn(n,i,a,c),i.child}var vu={dehydrated:null,treeContext:null,retryLane:0};function _u(n){return{baseLanes:n,cachePool:null,transitions:null}}function wp(n,i,a){var c=i.pendingProps,h=cn.current,x=!1,C=(i.flags&128)!==0,V;if((V=C)||(V=n!==null&&n.memoizedState===null?!1:(h&2)!==0),V?(x=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),tn(cn,h&1),n===null)return $c(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(C=c.children,n=c.fallback,x?(c=i.mode,x=i.child,C={mode:"hidden",children:C},(c&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=C):x=hl(C,c,0,null),n=xs(n,c,a,null),x.return=i,n.return=i,x.sibling=n,i.child=x,i.child.memoizedState=_u(a),i.memoizedState=vu,n):yu(i,C));if(h=n.memoizedState,h!==null&&(V=h.dehydrated,V!==null))return nv(n,i,C,c,V,h,a);if(x){x=c.fallback,C=i.mode,h=n.child,V=h.sibling;var J={mode:"hidden",children:c.children};return(C&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=J,i.deletions=null):(c=Vr(h,J),c.subtreeFlags=h.subtreeFlags&14680064),V!==null?x=Vr(V,x):(x=xs(x,C,a,null),x.flags|=2),x.return=i,c.return=i,c.sibling=x,i.child=c,c=x,x=i.child,C=n.child.memoizedState,C=C===null?_u(a):{baseLanes:C.baseLanes|a,cachePool:null,transitions:C.transitions},x.memoizedState=C,x.childLanes=n.childLanes&~a,i.memoizedState=vu,c}return x=n.child,n=x.sibling,c=Vr(x,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function yu(n,i){return i=hl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function el(n,i,a,c){return c!==null&&Xc(c),Gs(i,n.child,null,a),n=yu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function nv(n,i,a,c,h,x,C){if(a)return i.flags&256?(i.flags&=-257,c=pu(Error(t(422))),el(n,i,C,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(x=c.fallback,h=i.mode,c=hl({mode:"visible",children:c.children},h,0,null),x=xs(x,h,C,null),x.flags|=2,c.return=i,x.return=i,c.sibling=x,i.child=c,(i.mode&1)!==0&&Gs(i,n.child,null,C),i.child.memoizedState=_u(C),i.memoizedState=vu,x);if((i.mode&1)===0)return el(n,i,C,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var V=c.dgst;return c=V,x=Error(t(419)),c=pu(x,c,void 0),el(n,i,C,c)}if(V=(C&n.childLanes)!==0,ti||V){if(c=An,c!==null){switch(C&-C){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|C))!==0?0:h,h!==0&&h!==x.retryLane&&(x.retryLane=h,fr(n,h),ki(c,n,h,-1))}return Uu(),c=pu(Error(t(421))),el(n,i,C,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=mv.bind(null,n),h._reactRetry=i,null):(n=x.treeContext,di=Dr(h.nextSibling),ui=i,on=!0,Pi=null,n!==null&&(_i[yi++]=ur,_i[yi++]=dr,_i[yi++]=ls,ur=n.id,dr=n.overflow,ls=i),i=yu(i,c.children),i.flags|=4096,i)}function Mp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Zc(n.return,i,a)}function Su(n,i,a,c,h){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(x.isBackwards=i,x.rendering=null,x.renderingStartTime=0,x.last=c,x.tail=a,x.tailMode=h)}function Ep(n,i,a){var c=i.pendingProps,h=c.revealOrder,x=c.tail;if(Yn(n,i,c.children,a),c=cn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Mp(n,a,i);else if(n.tag===19)Mp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(tn(cn,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&Xo(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Su(i,!1,h,a,x);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&Xo(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Su(i,!0,a,null,x);break;case"together":Su(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function tl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function pr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),hs|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Vr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Vr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function iv(n,i,a){switch(i.tag){case 3:Sp(i),Hs();break;case 5:Oh(i);break;case 1:ei(i.type)&&Fo(i);break;case 4:eu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;tn(Vo,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(tn(cn,cn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?wp(n,i,a):(tn(cn,cn.current&1),n=pr(n,i,a),n!==null?n.sibling:null);tn(cn,cn.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Ep(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),tn(cn,cn.current),c)break;return null;case 22:case 23:return i.lanes=0,vp(n,i,a)}return pr(n,i,a)}var Tp,bu,Cp,Ap;Tp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},bu=function(){},Cp=function(n,i,a,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,ds(qi.current);var x=null;switch(a){case"input":h=Ge(n,h),c=Ge(n,c),x=[];break;case"select":h=G({},h,{value:void 0}),c=G({},c,{value:void 0}),x=[];break;case"textarea":h=Wt(n,h),c=Wt(n,c),x=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Io)}we(a,c);var C;a=null;for(pe in h)if(!c.hasOwnProperty(pe)&&h.hasOwnProperty(pe)&&h[pe]!=null)if(pe==="style"){var V=h[pe];for(C in V)V.hasOwnProperty(C)&&(a||(a={}),a[C]="")}else pe!=="dangerouslySetInnerHTML"&&pe!=="children"&&pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&pe!=="autoFocus"&&(o.hasOwnProperty(pe)?x||(x=[]):(x=x||[]).push(pe,null));for(pe in c){var J=c[pe];if(V=h!=null?h[pe]:void 0,c.hasOwnProperty(pe)&&J!==V&&(J!=null||V!=null))if(pe==="style")if(V){for(C in V)!V.hasOwnProperty(C)||J&&J.hasOwnProperty(C)||(a||(a={}),a[C]="");for(C in J)J.hasOwnProperty(C)&&V[C]!==J[C]&&(a||(a={}),a[C]=J[C])}else a||(x||(x=[]),x.push(pe,a)),a=J;else pe==="dangerouslySetInnerHTML"?(J=J?J.__html:void 0,V=V?V.__html:void 0,J!=null&&V!==J&&(x=x||[]).push(pe,J)):pe==="children"?typeof J!="string"&&typeof J!="number"||(x=x||[]).push(pe,""+J):pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&(o.hasOwnProperty(pe)?(J!=null&&pe==="onScroll"&&sn("scroll",n),x||V===J||(x=[])):(x=x||[]).push(pe,J))}a&&(x=x||[]).push("style",a);var pe=x;(i.updateQueue=pe)&&(i.flags|=4)}},Ap=function(n,i,a,c){a!==c&&(i.flags|=4)};function Wa(n,i){if(!on)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Bn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function rv(n,i,a){var c=i.pendingProps;switch(Wc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bn(i),null;case 1:return ei(i.type)&&Uo(),Bn(i),null;case 3:return c=i.stateNode,js(),an(Qn),an(zn),iu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ho(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Pi!==null&&(Lu(Pi),Pi=null))),bu(n,i),Bn(i),null;case 5:tu(i);var h=ds(Oa.current);if(a=i.type,n!==null&&i.stateNode!=null)Cp(n,i,a,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Bn(i),null}if(n=ds(qi.current),Ho(i)){c=i.stateNode,a=i.type;var x=i.memoizedProps;switch(c[Yi]=i,c[Ia]=x,n=(i.mode&1)!==0,a){case"dialog":sn("cancel",c),sn("close",c);break;case"iframe":case"object":case"embed":sn("load",c);break;case"video":case"audio":for(h=0;h<Pa.length;h++)sn(Pa[h],c);break;case"source":sn("error",c);break;case"img":case"image":case"link":sn("error",c),sn("load",c);break;case"details":sn("toggle",c);break;case"input":ct(c,x),sn("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!x.multiple},sn("invalid",c);break;case"textarea":mn(c,x),sn("invalid",c)}we(a,x),h=null;for(var C in x)if(x.hasOwnProperty(C)){var V=x[C];C==="children"?typeof V=="string"?c.textContent!==V&&(x.suppressHydrationWarning!==!0&&Lo(c.textContent,V,n),h=["children",V]):typeof V=="number"&&c.textContent!==""+V&&(x.suppressHydrationWarning!==!0&&Lo(c.textContent,V,n),h=["children",""+V]):o.hasOwnProperty(C)&&V!=null&&C==="onScroll"&&sn("scroll",c)}switch(a){case"input":je(c),me(c,x,!0);break;case"textarea":je(c),Jt(c);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(c.onclick=Io)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{C=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Et(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=C.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=C.createElement(a,{is:c.is}):(n=C.createElement(a),a==="select"&&(C=n,c.multiple?C.multiple=!0:c.size&&(C.size=c.size))):n=C.createElementNS(n,a),n[Yi]=i,n[Ia]=c,Tp(n,i,!1,!1),i.stateNode=n;e:{switch(C=Ue(a,c),a){case"dialog":sn("cancel",n),sn("close",n),h=c;break;case"iframe":case"object":case"embed":sn("load",n),h=c;break;case"video":case"audio":for(h=0;h<Pa.length;h++)sn(Pa[h],n);h=c;break;case"source":sn("error",n),h=c;break;case"img":case"image":case"link":sn("error",n),sn("load",n),h=c;break;case"details":sn("toggle",n),h=c;break;case"input":ct(n,c),h=Ge(n,c),sn("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=G({},c,{value:void 0}),sn("invalid",n);break;case"textarea":mn(n,c),h=Wt(n,c),sn("invalid",n);break;default:h=c}we(a,h),V=h;for(x in V)if(V.hasOwnProperty(x)){var J=V[x];x==="style"?ae(n,J):x==="dangerouslySetInnerHTML"?(J=J?J.__html:void 0,J!=null&&bt(n,J)):x==="children"?typeof J=="string"?(a!=="textarea"||J!=="")&&Je(n,J):typeof J=="number"&&Je(n,""+J):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?J!=null&&x==="onScroll"&&sn("scroll",n):J!=null&&z(n,x,J,C))}switch(a){case"input":je(n),me(n,c,!1);break;case"textarea":je(n),Jt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ye(c.value));break;case"select":n.multiple=!!c.multiple,x=c.value,x!=null?Zt(n,!!c.multiple,x,!1):c.defaultValue!=null&&Zt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Io)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Bn(i),null;case 6:if(n&&i.stateNode!=null)Ap(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=ds(Oa.current),ds(qi.current),Ho(i)){if(c=i.stateNode,a=i.memoizedProps,c[Yi]=i,(x=c.nodeValue!==a)&&(n=ui,n!==null))switch(n.tag){case 3:Lo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Lo(c.nodeValue,a,(n.mode&1)!==0)}x&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Yi]=i,i.stateNode=c}return Bn(i),null;case 13:if(an(cn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(on&&di!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Ph(),Hs(),i.flags|=98560,x=!1;else if(x=Ho(i),c!==null&&c.dehydrated!==null){if(n===null){if(!x)throw Error(t(318));if(x=i.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Yi]=i}else Hs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Bn(i),x=!1}else Pi!==null&&(Lu(Pi),Pi=null),x=!0;if(!x)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(cn.current&1)!==0?wn===0&&(wn=3):Uu())),i.updateQueue!==null&&(i.flags|=4),Bn(i),null);case 4:return js(),bu(n,i),n===null&&Da(i.stateNode.containerInfo),Bn(i),null;case 10:return Kc(i.type._context),Bn(i),null;case 17:return ei(i.type)&&Uo(),Bn(i),null;case 19:if(an(cn),x=i.memoizedState,x===null)return Bn(i),null;if(c=(i.flags&128)!==0,C=x.rendering,C===null)if(c)Wa(x,!1);else{if(wn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(C=Xo(n),C!==null){for(i.flags|=128,Wa(x,!1),c=C.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)x=a,n=c,x.flags&=14680066,C=x.alternate,C===null?(x.childLanes=0,x.lanes=n,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=C.childLanes,x.lanes=C.lanes,x.child=C.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=C.memoizedProps,x.memoizedState=C.memoizedState,x.updateQueue=C.updateQueue,x.type=C.type,n=C.dependencies,x.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return tn(cn,cn.current&1|2),i.child}n=n.sibling}x.tail!==null&&Gt()>qs&&(i.flags|=128,c=!0,Wa(x,!1),i.lanes=4194304)}else{if(!c)if(n=Xo(C),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Wa(x,!0),x.tail===null&&x.tailMode==="hidden"&&!C.alternate&&!on)return Bn(i),null}else 2*Gt()-x.renderingStartTime>qs&&a!==1073741824&&(i.flags|=128,c=!0,Wa(x,!1),i.lanes=4194304);x.isBackwards?(C.sibling=i.child,i.child=C):(a=x.last,a!==null?a.sibling=C:i.child=C,x.last=C)}return x.tail!==null?(i=x.tail,x.rendering=i,x.tail=i.sibling,x.renderingStartTime=Gt(),i.sibling=null,a=cn.current,tn(cn,c?a&1|2:a&1),i):(Bn(i),null);case 22:case 23:return ku(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(fi&1073741824)!==0&&(Bn(i),i.subtreeFlags&6&&(i.flags|=8192)):Bn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function sv(n,i){switch(Wc(i),i.tag){case 1:return ei(i.type)&&Uo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return js(),an(Qn),an(zn),iu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return tu(i),null;case 13:if(an(cn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Hs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return an(cn),null;case 4:return js(),null;case 10:return Kc(i.type._context),null;case 22:case 23:return ku(),null;case 24:return null;default:return null}}var nl=!1,Hn=!1,av=typeof WeakSet=="function"?WeakSet:Set,tt=null;function Xs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){pn(n,i,c)}else a.current=null}function wu(n,i,a){try{a()}catch(c){pn(n,i,c)}}var Rp=!1;function ov(n,i){if(kc=bo,n=oh(),Cc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,x=c.focusNode;c=c.focusOffset;try{a.nodeType,x.nodeType}catch{a=null;break e}var C=0,V=-1,J=-1,pe=0,ke=0,ze=n,Ie=null;t:for(;;){for(var Qe;ze!==a||h!==0&&ze.nodeType!==3||(V=C+h),ze!==x||c!==0&&ze.nodeType!==3||(J=C+c),ze.nodeType===3&&(C+=ze.nodeValue.length),(Qe=ze.firstChild)!==null;)Ie=ze,ze=Qe;for(;;){if(ze===n)break t;if(Ie===a&&++pe===h&&(V=C),Ie===x&&++ke===c&&(J=C),(Qe=ze.nextSibling)!==null)break;ze=Ie,Ie=ze.parentNode}ze=Qe}a=V===-1||J===-1?null:{start:V,end:J}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uc={focusedElem:n,selectionRange:a},bo=!1,tt=i;tt!==null;)if(i=tt,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,tt=n;else for(;tt!==null;){i=tt;try{var it=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(it!==null){var ot=it.memoizedProps,gn=it.memoizedState,ue=i.stateNode,se=ue.getSnapshotBeforeUpdate(i.elementType===i.type?ot:Di(i.type,ot),gn);ue.__reactInternalSnapshotBeforeUpdate=se}break;case 3:var fe=i.stateNode.containerInfo;fe.nodeType===1?fe.textContent="":fe.nodeType===9&&fe.documentElement&&fe.removeChild(fe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(We){pn(i,i.return,We)}if(n=i.sibling,n!==null){n.return=i.return,tt=n;break}tt=i.return}return it=Rp,Rp=!1,it}function ja(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var x=h.destroy;h.destroy=void 0,x!==void 0&&wu(i,a,x)}h=h.next}while(h!==c)}}function il(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Mu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Np(n){var i=n.alternate;i!==null&&(n.alternate=null,Np(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Yi],delete i[Ia],delete i[Bc],delete i[Vx],delete i[Wx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Pp(n){return n.tag===5||n.tag===3||n.tag===4}function Dp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Pp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Eu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Io));else if(c!==4&&(n=n.child,n!==null))for(Eu(n,i,a),n=n.sibling;n!==null;)Eu(n,i,a),n=n.sibling}function Tu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Tu(n,i,a),n=n.sibling;n!==null;)Tu(n,i,a),n=n.sibling}var In=null,Li=!1;function zr(n,i,a){for(a=a.child;a!==null;)Lp(n,i,a),a=a.sibling}function Lp(n,i,a){if(W&&typeof W.onCommitFiberUnmount=="function")try{W.onCommitFiberUnmount(U,a)}catch{}switch(a.tag){case 5:Hn||Xs(a,i);case 6:var c=In,h=Li;In=null,zr(n,i,a),In=c,Li=h,In!==null&&(Li?(n=In,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):In.removeChild(a.stateNode));break;case 18:In!==null&&(Li?(n=In,a=a.stateNode,n.nodeType===8?Oc(n.parentNode,a):n.nodeType===1&&Oc(n,a),wa(n)):Oc(In,a.stateNode));break;case 4:c=In,h=Li,In=a.stateNode.containerInfo,Li=!0,zr(n,i,a),In=c,Li=h;break;case 0:case 11:case 14:case 15:if(!Hn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var x=h,C=x.destroy;x=x.tag,C!==void 0&&((x&2)!==0||(x&4)!==0)&&wu(a,i,C),h=h.next}while(h!==c)}zr(n,i,a);break;case 1:if(!Hn&&(Xs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(V){pn(a,i,V)}zr(n,i,a);break;case 21:zr(n,i,a);break;case 22:a.mode&1?(Hn=(c=Hn)||a.memoizedState!==null,zr(n,i,a),Hn=c):zr(n,i,a);break;default:zr(n,i,a)}}function Ip(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new av),i.forEach(function(c){var h=gv.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function Ii(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var x=n,C=i,V=C;e:for(;V!==null;){switch(V.tag){case 5:In=V.stateNode,Li=!1;break e;case 3:In=V.stateNode.containerInfo,Li=!0;break e;case 4:In=V.stateNode.containerInfo,Li=!0;break e}V=V.return}if(In===null)throw Error(t(160));Lp(x,C,h),In=null,Li=!1;var J=h.alternate;J!==null&&(J.return=null),h.return=null}catch(pe){pn(h,i,pe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)kp(i,n),i=i.sibling}function kp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ii(i,n),Zi(n),c&4){try{ja(3,n,n.return),il(3,n)}catch(ot){pn(n,n.return,ot)}try{ja(5,n,n.return)}catch(ot){pn(n,n.return,ot)}}break;case 1:Ii(i,n),Zi(n),c&512&&a!==null&&Xs(a,a.return);break;case 5:if(Ii(i,n),Zi(n),c&512&&a!==null&&Xs(a,a.return),n.flags&32){var h=n.stateNode;try{Je(h,"")}catch(ot){pn(n,n.return,ot)}}if(c&4&&(h=n.stateNode,h!=null)){var x=n.memoizedProps,C=a!==null?a.memoizedProps:x,V=n.type,J=n.updateQueue;if(n.updateQueue=null,J!==null)try{V==="input"&&x.type==="radio"&&x.name!=null&&xt(h,x),Ue(V,C);var pe=Ue(V,x);for(C=0;C<J.length;C+=2){var ke=J[C],ze=J[C+1];ke==="style"?ae(h,ze):ke==="dangerouslySetInnerHTML"?bt(h,ze):ke==="children"?Je(h,ze):z(h,ke,ze,pe)}switch(V){case"input":vt(h,x);break;case"textarea":Q(h,x);break;case"select":var Ie=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!x.multiple;var Qe=x.value;Qe!=null?Zt(h,!!x.multiple,Qe,!1):Ie!==!!x.multiple&&(x.defaultValue!=null?Zt(h,!!x.multiple,x.defaultValue,!0):Zt(h,!!x.multiple,x.multiple?[]:"",!1))}h[Ia]=x}catch(ot){pn(n,n.return,ot)}}break;case 6:if(Ii(i,n),Zi(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,x=n.memoizedProps;try{h.nodeValue=x}catch(ot){pn(n,n.return,ot)}}break;case 3:if(Ii(i,n),Zi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{wa(i.containerInfo)}catch(ot){pn(n,n.return,ot)}break;case 4:Ii(i,n),Zi(n);break;case 13:Ii(i,n),Zi(n),h=n.child,h.flags&8192&&(x=h.memoizedState!==null,h.stateNode.isHidden=x,!x||h.alternate!==null&&h.alternate.memoizedState!==null||(Ru=Gt())),c&4&&Ip(n);break;case 22:if(ke=a!==null&&a.memoizedState!==null,n.mode&1?(Hn=(pe=Hn)||ke,Ii(i,n),Hn=pe):Ii(i,n),Zi(n),c&8192){if(pe=n.memoizedState!==null,(n.stateNode.isHidden=pe)&&!ke&&(n.mode&1)!==0)for(tt=n,ke=n.child;ke!==null;){for(ze=tt=ke;tt!==null;){switch(Ie=tt,Qe=Ie.child,Ie.tag){case 0:case 11:case 14:case 15:ja(4,Ie,Ie.return);break;case 1:Xs(Ie,Ie.return);var it=Ie.stateNode;if(typeof it.componentWillUnmount=="function"){c=Ie,a=Ie.return;try{i=c,it.props=i.memoizedProps,it.state=i.memoizedState,it.componentWillUnmount()}catch(ot){pn(c,a,ot)}}break;case 5:Xs(Ie,Ie.return);break;case 22:if(Ie.memoizedState!==null){zp(ze);continue}}Qe!==null?(Qe.return=Ie,tt=Qe):zp(ze)}ke=ke.sibling}e:for(ke=null,ze=n;;){if(ze.tag===5){if(ke===null){ke=ze;try{h=ze.stateNode,pe?(x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(V=ze.stateNode,J=ze.memoizedProps.style,C=J!=null&&J.hasOwnProperty("display")?J.display:null,V.style.display=T("display",C))}catch(ot){pn(n,n.return,ot)}}}else if(ze.tag===6){if(ke===null)try{ze.stateNode.nodeValue=pe?"":ze.memoizedProps}catch(ot){pn(n,n.return,ot)}}else if((ze.tag!==22&&ze.tag!==23||ze.memoizedState===null||ze===n)&&ze.child!==null){ze.child.return=ze,ze=ze.child;continue}if(ze===n)break e;for(;ze.sibling===null;){if(ze.return===null||ze.return===n)break e;ke===ze&&(ke=null),ze=ze.return}ke===ze&&(ke=null),ze.sibling.return=ze.return,ze=ze.sibling}}break;case 19:Ii(i,n),Zi(n),c&4&&Ip(n);break;case 21:break;default:Ii(i,n),Zi(n)}}function Zi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Pp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(Je(h,""),c.flags&=-33);var x=Dp(n);Tu(n,x,h);break;case 3:case 4:var C=c.stateNode.containerInfo,V=Dp(n);Eu(n,V,C);break;default:throw Error(t(161))}}catch(J){pn(n,n.return,J)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function lv(n,i,a){tt=n,Up(n)}function Up(n,i,a){for(var c=(n.mode&1)!==0;tt!==null;){var h=tt,x=h.child;if(h.tag===22&&c){var C=h.memoizedState!==null||nl;if(!C){var V=h.alternate,J=V!==null&&V.memoizedState!==null||Hn;V=nl;var pe=Hn;if(nl=C,(Hn=J)&&!pe)for(tt=h;tt!==null;)C=tt,J=C.child,C.tag===22&&C.memoizedState!==null?Op(h):J!==null?(J.return=C,tt=J):Op(h);for(;x!==null;)tt=x,Up(x),x=x.sibling;tt=h,nl=V,Hn=pe}Fp(n)}else(h.subtreeFlags&8772)!==0&&x!==null?(x.return=h,tt=x):Fp(n)}}function Fp(n){for(;tt!==null;){var i=tt;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Hn||il(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Hn)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:Di(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var x=i.updateQueue;x!==null&&zh(i,x,c);break;case 3:var C=i.updateQueue;if(C!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}zh(i,C,a)}break;case 5:var V=i.stateNode;if(a===null&&i.flags&4){a=V;var J=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":J.autoFocus&&a.focus();break;case"img":J.src&&(a.src=J.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var pe=i.alternate;if(pe!==null){var ke=pe.memoizedState;if(ke!==null){var ze=ke.dehydrated;ze!==null&&wa(ze)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Hn||i.flags&512&&Mu(i)}catch(Ie){pn(i,i.return,Ie)}}if(i===n){tt=null;break}if(a=i.sibling,a!==null){a.return=i.return,tt=a;break}tt=i.return}}function zp(n){for(;tt!==null;){var i=tt;if(i===n){tt=null;break}var a=i.sibling;if(a!==null){a.return=i.return,tt=a;break}tt=i.return}}function Op(n){for(;tt!==null;){var i=tt;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{il(4,i)}catch(J){pn(i,a,J)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(J){pn(i,h,J)}}var x=i.return;try{Mu(i)}catch(J){pn(i,x,J)}break;case 5:var C=i.return;try{Mu(i)}catch(J){pn(i,C,J)}}}catch(J){pn(i,i.return,J)}if(i===n){tt=null;break}var V=i.sibling;if(V!==null){V.return=i.return,tt=V;break}tt=i.return}}var cv=Math.ceil,rl=D.ReactCurrentDispatcher,Cu=D.ReactCurrentOwner,wi=D.ReactCurrentBatchConfig,Ht=0,An=null,_n=null,kn=0,fi=0,Ys=Lr(0),wn=0,$a=null,hs=0,sl=0,Au=0,Xa=null,ni=null,Ru=0,qs=1/0,mr=null,al=!1,Nu=null,Or=null,ol=!1,Br=null,ll=0,Ya=0,Pu=null,cl=-1,ul=0;function qn(){return(Ht&6)!==0?Gt():cl!==-1?cl:cl=Gt()}function Hr(n){return(n.mode&1)===0?1:(Ht&2)!==0&&kn!==0?kn&-kn:$x.transition!==null?(ul===0&&(ul=jt()),ul):(n=Ke,n!==0||(n=window.event,n=n===void 0?16:Hf(n.type)),n)}function ki(n,i,a,c){if(50<Ya)throw Ya=0,Pu=null,Error(t(185));rn(n,a,c),((Ht&2)===0||n!==An)&&(n===An&&((Ht&2)===0&&(sl|=a),wn===4&&Gr(n,kn)),ii(n,c),a===1&&Ht===0&&(i.mode&1)===0&&(qs=Gt()+500,zo&&kr()))}function ii(n,i){var a=n.callbackNode;At(n,i);var c=Mt(n,n===An?kn:0);if(c===0)a!==null&&Qt(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Qt(a),i===1)n.tag===0?jx(Hp.bind(null,n)):Th(Hp.bind(null,n)),Hx(function(){(Ht&6)===0&&kr()}),a=null;else{switch(Xn(c)){case 1:a=Ai;break;case 4:a=Ar;break;case 16:a=Jn;break;case 536870912:a=S;break;default:a=Jn}a=qp(a,Bp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Bp(n,i){if(cl=-1,ul=0,(Ht&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ks()&&n.callbackNode!==a)return null;var c=Mt(n,n===An?kn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=dl(n,c);else{i=c;var h=Ht;Ht|=2;var x=Vp();(An!==n||kn!==i)&&(mr=null,qs=Gt()+500,ms(n,i));do try{fv();break}catch(V){Gp(n,V)}while(!0);qc(),rl.current=x,Ht=h,_n!==null?i=0:(An=null,kn=0,i=wn)}if(i!==0){if(i===2&&(h=en(n),h!==0&&(c=h,i=Du(n,h))),i===1)throw a=$a,ms(n,0),Gr(n,c),ii(n,Gt()),a;if(i===6)Gr(n,c);else{if(h=n.current.alternate,(c&30)===0&&!uv(h)&&(i=dl(n,c),i===2&&(x=en(n),x!==0&&(c=x,i=Du(n,x))),i===1))throw a=$a,ms(n,0),Gr(n,c),ii(n,Gt()),a;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:gs(n,ni,mr);break;case 3:if(Gr(n,c),(c&130023424)===c&&(i=Ru+500-Gt(),10<i)){if(Mt(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){qn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=zc(gs.bind(null,n,ni,mr),i);break}gs(n,ni,mr);break;case 4:if(Gr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var C=31-ne(c);x=1<<C,C=i[C],C>h&&(h=C),c&=~x}if(c=h,c=Gt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*cv(c/1960))-c,10<c){n.timeoutHandle=zc(gs.bind(null,n,ni,mr),c);break}gs(n,ni,mr);break;case 5:gs(n,ni,mr);break;default:throw Error(t(329))}}}return ii(n,Gt()),n.callbackNode===a?Bp.bind(null,n):null}function Du(n,i){var a=Xa;return n.current.memoizedState.isDehydrated&&(ms(n,i).flags|=256),n=dl(n,i),n!==2&&(i=ni,ni=a,i!==null&&Lu(i)),n}function Lu(n){ni===null?ni=n:ni.push.apply(ni,n)}function uv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],x=h.getSnapshot;h=h.value;try{if(!Ni(x(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Gr(n,i){for(i&=~Au,i&=~sl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-ne(i),c=1<<a;n[a]=-1,i&=~c}}function Hp(n){if((Ht&6)!==0)throw Error(t(327));Ks();var i=Mt(n,0);if((i&1)===0)return ii(n,Gt()),null;var a=dl(n,i);if(n.tag!==0&&a===2){var c=en(n);c!==0&&(i=c,a=Du(n,c))}if(a===1)throw a=$a,ms(n,0),Gr(n,i),ii(n,Gt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,gs(n,ni,mr),ii(n,Gt()),null}function Iu(n,i){var a=Ht;Ht|=1;try{return n(i)}finally{Ht=a,Ht===0&&(qs=Gt()+500,zo&&kr())}}function ps(n){Br!==null&&Br.tag===0&&(Ht&6)===0&&Ks();var i=Ht;Ht|=1;var a=wi.transition,c=Ke;try{if(wi.transition=null,Ke=1,n)return n()}finally{Ke=c,wi.transition=a,Ht=i,(Ht&6)===0&&kr()}}function ku(){fi=Ys.current,an(Ys)}function ms(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Bx(a)),_n!==null)for(a=_n.return;a!==null;){var c=a;switch(Wc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Uo();break;case 3:js(),an(Qn),an(zn),iu();break;case 5:tu(c);break;case 4:js();break;case 13:an(cn);break;case 19:an(cn);break;case 10:Kc(c.type._context);break;case 22:case 23:ku()}a=a.return}if(An=n,_n=n=Vr(n.current,null),kn=fi=i,wn=0,$a=null,Au=sl=hs=0,ni=Xa=null,us!==null){for(i=0;i<us.length;i++)if(a=us[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,x=a.pending;if(x!==null){var C=x.next;x.next=h,c.next=C}a.pending=c}us=null}return n}function Gp(n,i){do{var a=_n;try{if(qc(),Yo.current=Jo,qo){for(var c=un.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}qo=!1}if(fs=0,Cn=bn=un=null,Ba=!1,Ha=0,Cu.current=null,a===null||a.return===null){wn=1,$a=i,_n=null;break}e:{var x=n,C=a.return,V=a,J=i;if(i=kn,V.flags|=32768,J!==null&&typeof J=="object"&&typeof J.then=="function"){var pe=J,ke=V,ze=ke.tag;if((ke.mode&1)===0&&(ze===0||ze===11||ze===15)){var Ie=ke.alternate;Ie?(ke.updateQueue=Ie.updateQueue,ke.memoizedState=Ie.memoizedState,ke.lanes=Ie.lanes):(ke.updateQueue=null,ke.memoizedState=null)}var Qe=hp(C);if(Qe!==null){Qe.flags&=-257,pp(Qe,C,V,x,i),Qe.mode&1&&fp(x,pe,i),i=Qe,J=pe;var it=i.updateQueue;if(it===null){var ot=new Set;ot.add(J),i.updateQueue=ot}else it.add(J);break e}else{if((i&1)===0){fp(x,pe,i),Uu();break e}J=Error(t(426))}}else if(on&&V.mode&1){var gn=hp(C);if(gn!==null){(gn.flags&65536)===0&&(gn.flags|=256),pp(gn,C,V,x,i),Xc($s(J,V));break e}}x=J=$s(J,V),wn!==4&&(wn=2),Xa===null?Xa=[x]:Xa.push(x),x=C;do{switch(x.tag){case 3:x.flags|=65536,i&=-i,x.lanes|=i;var ue=up(x,J,i);Fh(x,ue);break e;case 1:V=J;var se=x.type,fe=x.stateNode;if((x.flags&128)===0&&(typeof se.getDerivedStateFromError=="function"||fe!==null&&typeof fe.componentDidCatch=="function"&&(Or===null||!Or.has(fe)))){x.flags|=65536,i&=-i,x.lanes|=i;var We=dp(x,V,i);Fh(x,We);break e}}x=x.return}while(x!==null)}jp(a)}catch(lt){i=lt,_n===a&&a!==null&&(_n=a=a.return);continue}break}while(!0)}function Vp(){var n=rl.current;return rl.current=Jo,n===null?Jo:n}function Uu(){(wn===0||wn===3||wn===2)&&(wn=4),An===null||(hs&268435455)===0&&(sl&268435455)===0||Gr(An,kn)}function dl(n,i){var a=Ht;Ht|=2;var c=Vp();(An!==n||kn!==i)&&(mr=null,ms(n,i));do try{dv();break}catch(h){Gp(n,h)}while(!0);if(qc(),Ht=a,rl.current=c,_n!==null)throw Error(t(261));return An=null,kn=0,wn}function dv(){for(;_n!==null;)Wp(_n)}function fv(){for(;_n!==null&&!Ci();)Wp(_n)}function Wp(n){var i=Yp(n.alternate,n,fi);n.memoizedProps=n.pendingProps,i===null?jp(n):_n=i,Cu.current=null}function jp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=rv(a,i,fi),a!==null){_n=a;return}}else{if(a=sv(a,i),a!==null){a.flags&=32767,_n=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{wn=6,_n=null;return}}if(i=i.sibling,i!==null){_n=i;return}_n=i=n}while(i!==null);wn===0&&(wn=5)}function gs(n,i,a){var c=Ke,h=wi.transition;try{wi.transition=null,Ke=1,hv(n,i,a,c)}finally{wi.transition=h,Ke=c}return null}function hv(n,i,a,c){do Ks();while(Br!==null);if((Ht&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var x=a.lanes|a.childLanes;if(re(n,x),n===An&&(_n=An=null,kn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ol||(ol=!0,qp(Jn,function(){return Ks(),null})),x=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||x){x=wi.transition,wi.transition=null;var C=Ke;Ke=1;var V=Ht;Ht|=4,Cu.current=null,ov(n,a),kp(a,n),Lx(Uc),bo=!!kc,Uc=kc=null,n.current=a,lv(a),rs(),Ht=V,Ke=C,wi.transition=x}else n.current=a;if(ol&&(ol=!1,Br=n,ll=h),x=n.pendingLanes,x===0&&(Or=null),ee(a.stateNode),ii(n,Gt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(al)throw al=!1,n=Nu,Nu=null,n;return(ll&1)!==0&&n.tag!==0&&Ks(),x=n.pendingLanes,(x&1)!==0?n===Pu?Ya++:(Ya=0,Pu=n):Ya=0,kr(),null}function Ks(){if(Br!==null){var n=Xn(ll),i=wi.transition,a=Ke;try{if(wi.transition=null,Ke=16>n?16:n,Br===null)var c=!1;else{if(n=Br,Br=null,ll=0,(Ht&6)!==0)throw Error(t(331));var h=Ht;for(Ht|=4,tt=n.current;tt!==null;){var x=tt,C=x.child;if((tt.flags&16)!==0){var V=x.deletions;if(V!==null){for(var J=0;J<V.length;J++){var pe=V[J];for(tt=pe;tt!==null;){var ke=tt;switch(ke.tag){case 0:case 11:case 15:ja(8,ke,x)}var ze=ke.child;if(ze!==null)ze.return=ke,tt=ze;else for(;tt!==null;){ke=tt;var Ie=ke.sibling,Qe=ke.return;if(Np(ke),ke===pe){tt=null;break}if(Ie!==null){Ie.return=Qe,tt=Ie;break}tt=Qe}}}var it=x.alternate;if(it!==null){var ot=it.child;if(ot!==null){it.child=null;do{var gn=ot.sibling;ot.sibling=null,ot=gn}while(ot!==null)}}tt=x}}if((x.subtreeFlags&2064)!==0&&C!==null)C.return=x,tt=C;else e:for(;tt!==null;){if(x=tt,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:ja(9,x,x.return)}var ue=x.sibling;if(ue!==null){ue.return=x.return,tt=ue;break e}tt=x.return}}var se=n.current;for(tt=se;tt!==null;){C=tt;var fe=C.child;if((C.subtreeFlags&2064)!==0&&fe!==null)fe.return=C,tt=fe;else e:for(C=se;tt!==null;){if(V=tt,(V.flags&2048)!==0)try{switch(V.tag){case 0:case 11:case 15:il(9,V)}}catch(lt){pn(V,V.return,lt)}if(V===C){tt=null;break e}var We=V.sibling;if(We!==null){We.return=V.return,tt=We;break e}tt=V.return}}if(Ht=h,kr(),W&&typeof W.onPostCommitFiberRoot=="function")try{W.onPostCommitFiberRoot(U,n)}catch{}c=!0}return c}finally{Ke=a,wi.transition=i}}return!1}function $p(n,i,a){i=$s(a,i),i=up(n,i,1),n=Fr(n,i,1),i=qn(),n!==null&&(rn(n,1,i),ii(n,i))}function pn(n,i,a){if(n.tag===3)$p(n,n,a);else for(;i!==null;){if(i.tag===3){$p(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Or===null||!Or.has(c))){n=$s(a,n),n=dp(i,n,1),i=Fr(i,n,1),n=qn(),i!==null&&(rn(i,1,n),ii(i,n));break}}i=i.return}}function pv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=qn(),n.pingedLanes|=n.suspendedLanes&a,An===n&&(kn&a)===a&&(wn===4||wn===3&&(kn&130023424)===kn&&500>Gt()-Ru?ms(n,0):Au|=a),ii(n,i)}function Xp(n,i){i===0&&((n.mode&1)===0?i=1:(i=qe,qe<<=1,(qe&130023424)===0&&(qe=4194304)));var a=qn();n=fr(n,i),n!==null&&(rn(n,i,a),ii(n,a))}function mv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Xp(n,a)}function gv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Xp(n,a)}var Yp;Yp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Qn.current)ti=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return ti=!1,iv(n,i,a);ti=(n.flags&131072)!==0}else ti=!1,on&&(i.flags&1048576)!==0&&Ch(i,Bo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;tl(n,i),n=i.pendingProps;var h=zs(i,zn.current);Ws(i,a),h=au(null,i,c,n,h,a);var x=ou();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ei(c)?(x=!0,Fo(i)):x=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Qc(i),h.updater=Qo,i.stateNode=h,h._reactInternals=i,hu(i,c,n,a),i=xu(null,i,c,!0,x,a)):(i.tag=0,on&&x&&Vc(i),Yn(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(tl(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=vv(c),n=Di(c,n),h){case 0:i=gu(null,i,c,n,a);break e;case 1:i=yp(null,i,c,n,a);break e;case 11:i=mp(null,i,c,n,a);break e;case 14:i=gp(null,i,c,Di(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Di(c,h),gu(n,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Di(c,h),yp(n,i,c,h,a);case 3:e:{if(Sp(i),n===null)throw Error(t(387));c=i.pendingProps,x=i.memoizedState,h=x.element,Uh(n,i),$o(i,c,null,a);var C=i.memoizedState;if(c=C.element,x.isDehydrated)if(x={element:c,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},i.updateQueue.baseState=x,i.memoizedState=x,i.flags&256){h=$s(Error(t(423)),i),i=bp(n,i,c,a,h);break e}else if(c!==h){h=$s(Error(t(424)),i),i=bp(n,i,c,a,h);break e}else for(di=Dr(i.stateNode.containerInfo.firstChild),ui=i,on=!0,Pi=null,a=Ih(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Hs(),c===h){i=pr(n,i,a);break e}Yn(n,i,c,a)}i=i.child}return i;case 5:return Oh(i),n===null&&$c(i),c=i.type,h=i.pendingProps,x=n!==null?n.memoizedProps:null,C=h.children,Fc(c,h)?C=null:x!==null&&Fc(c,x)&&(i.flags|=32),_p(n,i),Yn(n,i,C,a),i.child;case 6:return n===null&&$c(i),null;case 13:return wp(n,i,a);case 4:return eu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Gs(i,null,c,a):Yn(n,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Di(c,h),mp(n,i,c,h,a);case 7:return Yn(n,i,i.pendingProps,a),i.child;case 8:return Yn(n,i,i.pendingProps.children,a),i.child;case 12:return Yn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,x=i.memoizedProps,C=h.value,tn(Vo,c._currentValue),c._currentValue=C,x!==null)if(Ni(x.value,C)){if(x.children===h.children&&!Qn.current){i=pr(n,i,a);break e}}else for(x=i.child,x!==null&&(x.return=i);x!==null;){var V=x.dependencies;if(V!==null){C=x.child;for(var J=V.firstContext;J!==null;){if(J.context===c){if(x.tag===1){J=hr(-1,a&-a),J.tag=2;var pe=x.updateQueue;if(pe!==null){pe=pe.shared;var ke=pe.pending;ke===null?J.next=J:(J.next=ke.next,ke.next=J),pe.pending=J}}x.lanes|=a,J=x.alternate,J!==null&&(J.lanes|=a),Zc(x.return,a,i),V.lanes|=a;break}J=J.next}}else if(x.tag===10)C=x.type===i.type?null:x.child;else if(x.tag===18){if(C=x.return,C===null)throw Error(t(341));C.lanes|=a,V=C.alternate,V!==null&&(V.lanes|=a),Zc(C,a,i),C=x.sibling}else C=x.child;if(C!==null)C.return=x;else for(C=x;C!==null;){if(C===i){C=null;break}if(x=C.sibling,x!==null){x.return=C.return,C=x;break}C=C.return}x=C}Yn(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,Ws(i,a),h=Si(h),c=c(h),i.flags|=1,Yn(n,i,c,a),i.child;case 14:return c=i.type,h=Di(c,i.pendingProps),h=Di(c.type,h),gp(n,i,c,h,a);case 15:return xp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Di(c,h),tl(n,i),i.tag=1,ei(c)?(n=!0,Fo(i)):n=!1,Ws(i,a),lp(i,c,h),hu(i,c,h,a),xu(null,i,c,!0,n,a);case 19:return Ep(n,i,a);case 22:return vp(n,i,a)}throw Error(t(156,i.tag))};function qp(n,i){return xi(n,i)}function xv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mi(n,i,a,c){return new xv(n,i,a,c)}function Fu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function vv(n){if(typeof n=="function")return Fu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===j)return 14}return 2}function Vr(n,i){var a=n.alternate;return a===null?(a=Mi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function fl(n,i,a,c,h,x){var C=2;if(c=n,typeof n=="function")Fu(n)&&(C=1);else if(typeof n=="string")C=5;else e:switch(n){case M:return xs(a.children,h,x,i);case N:C=8,h|=8;break;case Z:return n=Mi(12,a,i,h|2),n.elementType=Z,n.lanes=x,n;case H:return n=Mi(13,a,i,h),n.elementType=H,n.lanes=x,n;case $:return n=Mi(19,a,i,h),n.elementType=$,n.lanes=x,n;case te:return hl(a,h,x,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case B:C=10;break e;case X:C=9;break e;case O:C=11;break e;case j:C=14;break e;case ce:C=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Mi(C,a,i,h),i.elementType=n,i.type=c,i.lanes=x,i}function xs(n,i,a,c){return n=Mi(7,n,c,i),n.lanes=a,n}function hl(n,i,a,c){return n=Mi(22,n,c,i),n.elementType=te,n.lanes=a,n.stateNode={isHidden:!1},n}function zu(n,i,a){return n=Mi(6,n,null,i),n.lanes=a,n}function Ou(n,i,a){return i=Mi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function _v(n,i,a,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zt(0),this.expirationTimes=zt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zt(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Bu(n,i,a,c,h,x,C,V,J){return n=new _v(n,i,a,V,J),i===1?(i=1,x===!0&&(i|=8)):i=0,x=Mi(3,null,null,i),n.current=x,x.stateNode=n,x.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qc(x),n}function yv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Kp(n){if(!n)return Ir;n=n._reactInternals;e:{if(_t(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ei(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(ei(a))return Mh(n,a,i)}return i}function Zp(n,i,a,c,h,x,C,V,J){return n=Bu(a,c,!0,n,h,x,C,V,J),n.context=Kp(null),a=n.current,c=qn(),h=Hr(a),x=hr(c,h),x.callback=i??null,Fr(a,x,h),n.current.lanes=h,rn(n,h,c),ii(n,c),n}function pl(n,i,a,c){var h=i.current,x=qn(),C=Hr(h);return a=Kp(a),i.context===null?i.context=a:i.pendingContext=a,i=hr(x,C),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Fr(h,i,C),n!==null&&(ki(n,h,C,x),jo(n,h,C)),C}function ml(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Jp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Hu(n,i){Jp(n,i),(n=n.alternate)&&Jp(n,i)}function Sv(){return null}var Qp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Gu(n){this._internalRoot=n}gl.prototype.render=Gu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));pl(n,i,null,null)},gl.prototype.unmount=Gu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ps(function(){pl(null,n,null,null)}),i[lr]=null}};function gl(n){this._internalRoot=n}gl.prototype.unstable_scheduleHydration=function(n){if(n){var i=li();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Xi.length&&i!==0&&i<Xi[a].priority;a++);Xi.splice(a,0,n),a===0&&Of(n)}};function Vu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function xl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function em(){}function bv(n,i,a,c,h){if(h){if(typeof c=="function"){var x=c;c=function(){var pe=ml(C);x.call(pe)}}var C=Zp(i,c,n,0,null,!1,!1,"",em);return n._reactRootContainer=C,n[lr]=C.current,Da(n.nodeType===8?n.parentNode:n),ps(),C}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var V=c;c=function(){var pe=ml(J);V.call(pe)}}var J=Bu(n,0,!1,null,null,!1,!1,"",em);return n._reactRootContainer=J,n[lr]=J.current,Da(n.nodeType===8?n.parentNode:n),ps(function(){pl(i,J,a,c)}),J}function vl(n,i,a,c,h){var x=a._reactRootContainer;if(x){var C=x;if(typeof h=="function"){var V=h;h=function(){var J=ml(C);V.call(J)}}pl(i,C,n,h)}else C=bv(a,i,n,h,c);return ml(C)}hn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=rt(i.pendingLanes);a!==0&&(Tt(i,a|1),ii(i,Gt()),(Ht&6)===0&&(qs=Gt()+500,kr()))}break;case 13:ps(function(){var c=fr(n,1);if(c!==null){var h=qn();ki(c,n,1,h)}}),Hu(n,1)}},Ri=function(n){if(n.tag===13){var i=fr(n,134217728);if(i!==null){var a=qn();ki(i,n,134217728,a)}Hu(n,134217728)}},oi=function(n){if(n.tag===13){var i=Hr(n),a=fr(n,i);if(a!==null){var c=qn();ki(a,n,i,c)}Hu(n,i)}},li=function(){return Ke},Nt=function(n,i){var a=Ke;try{return Ke=n,i()}finally{Ke=a}},Se=function(n,i,a){switch(i){case"input":if(vt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var h=ko(c);if(!h)throw Error(t(90));Ee(c),vt(c,h)}}}break;case"textarea":Q(n,a);break;case"select":i=a.value,i!=null&&Zt(n,!!a.multiple,i,!1)}},Ne=Iu,De=ps;var wv={usingClientEntryPoint:!1,Events:[ka,Us,ko,le,Ae,Iu]},qa={findFiberByHostInstance:as,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mv={bundleType:qa.bundleType,version:qa.version,rendererPackageName:qa.rendererPackageName,rendererConfig:qa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=$n(n),n===null?null:n.stateNode},findFiberByHostInstance:qa.findFiberByHostInstance||Sv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_l.isDisabled&&_l.supportsFiber)try{U=_l.inject(Mv),W=_l}catch{}}return ri.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wv,ri.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vu(i))throw Error(t(200));return yv(n,i,null,a)},ri.createRoot=function(n,i){if(!Vu(n))throw Error(t(299));var a=!1,c="",h=Qp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=Bu(n,1,!1,null,null,a,!1,c,h),n[lr]=i.current,Da(n.nodeType===8?n.parentNode:n),new Gu(i)},ri.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=$n(i),n=n===null?null:n.stateNode,n},ri.flushSync=function(n){return ps(n)},ri.hydrate=function(n,i,a){if(!xl(i))throw Error(t(200));return vl(null,n,i,!0,a)},ri.hydrateRoot=function(n,i,a){if(!Vu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,x="",C=Qp;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(x=a.identifierPrefix),a.onRecoverableError!==void 0&&(C=a.onRecoverableError)),i=Zp(i,null,n,1,a??null,h,!1,x,C),n[lr]=i.current,Da(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new gl(i)},ri.render=function(n,i,a){if(!xl(i))throw Error(t(200));return vl(null,n,i,!1,a)},ri.unmountComponentAtNode=function(n){if(!xl(n))throw Error(t(40));return n._reactRootContainer?(ps(function(){vl(null,null,n,!1,function(){n._reactRootContainer=null,n[lr]=null})}),!0):!1},ri.unstable_batchedUpdates=Iu,ri.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!xl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return vl(n,i,a,!1,c)},ri.version="18.3.1-next-f1338f8080-20240426",ri}var lm;function kv(){if(lm)return $u.exports;lm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),$u.exports=Iv(),$u.exports}var cm;function Uv(){if(cm)return yl;cm=1;var s=kv();return yl.createRoot=s.createRoot,yl.hydrateRoot=s.hydrateRoot,yl}var Fv=Uv();const zv=c0(Fv),da=[{id:"brown-noise",title:"Brownian Deep Focus",category:"Deep Focus",tagline:"Warm sub-bass rumble for continuous coding & writing",description:"Mathematically integrated brownian spectrum with deep 450Hz low-pass rolloff. Proven to mask background distractions and alleviate cognitive fatigue.",frequency:"0 – 450 Hz Brown Spectrum",accentColor:"#f59e0b"},{id:"celestial-drone",title:"Celestial 432Hz Drone",category:"Mindfulness",tagline:"Harmonically tuned meditative Tibetan chords",description:"Multi-oscillator harmonic chord centered around the natural 432Hz tuning fork with gentle phase chorus and slow breathing resonance.",frequency:"432 Hz Pythagorean Fundamental",accentColor:"#a855f7"},{id:"binaural-gamma",title:"Gamma 40Hz Flow State",category:"Cognitive Flow",tagline:"High-cognition binaural carrier for intense problem-solving",description:"Stereo carrier tones (200Hz L / 240Hz R) inducing 40Hz gamma oscillations in the cerebral cortex, associated with high-level information processing and recall.",frequency:"40 Hz Gamma Difference Wave",accentColor:"#38bdf8"},{id:"binaural-alpha",title:"Alpha 10Hz Quiet Mind",category:"Mindfulness",tagline:"Calm relaxed alertness for reading and reflection",description:"Stereo carrier tones (210Hz L / 220Hz R) stimulating 10Hz alpha rhythms, optimal for sustained reading, journaling, and stress reduction.",frequency:"10 Hz Alpha Difference Wave",accentColor:"#34d399"},{id:"rain-storm",title:"Midnight Rain Sanctuary",category:"Deep Focus",tagline:"Gentle nocturnal rainfall with rolling thunder",description:"Procedurally shaped pink noise with gentle resonant filtering, simulating a peaceful rain shower against cabin windows in deep space.",frequency:"Pink Noise Spectrum & Low Rumble",accentColor:"#818cf8"}];class Ov{constructor(){gr(this,"ctx",null);gr(this,"masterGain",null);gr(this,"analyser",null);gr(this,"activeNodes",[]);gr(this,"currentId",null);gr(this,"_isPlaying",!1);gr(this,"_volume",.65);gr(this,"_isMuted",!1)}initContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this._isMuted?0:this._volume,this.ctx.currentTime),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=64,this.analyser.smoothingTimeConstant=.85,this.masterGain.connect(this.analyser),this.analyser.connect(this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume()}get isPlaying(){return this._isPlaying}get currentSoundscape(){return this.currentId}get volume(){return this._volume}get isMuted(){return this._isMuted}getAnalyser(){return this.analyser}setVolume(e){if(this._volume=Math.max(0,Math.min(1,e)),this.masterGain&&this.ctx){const t=this._isMuted?0:this._volume;this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime),this.masterGain.gain.linearRampToValueAtTime(t,this.ctx.currentTime+.05)}}toggleMute(){return this._isMuted=!this._isMuted,this.setVolume(this._volume),this._isMuted}stop(){!this.ctx||!this._isPlaying||(this.masterGain&&(this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime),this.masterGain.gain.linearRampToValueAtTime(.001,this.ctx.currentTime+.12)),setTimeout(()=>{this.cleanupNodes(),this._isPlaying=!1,this.currentId=null},130))}cleanupNodes(){for(const e of this.activeNodes)try{"stop"in e&&typeof e.stop=="function"&&e.stop(),e.disconnect()}catch{}this.activeNodes=[]}play(e){if(this.initContext(),!(!this.ctx||!this.masterGain)&&!(this._isPlaying&&this.currentId===e))switch(this.cleanupNodes(),this.currentId=e,this._isPlaying=!0,this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime),this.masterGain.gain.setValueAtTime(.001,this.ctx.currentTime),this.masterGain.gain.linearRampToValueAtTime(this._isMuted?0:this._volume,this.ctx.currentTime+.4),e){case"brown-noise":this.buildBrownNoise();break;case"celestial-drone":this.buildCelestialDrone();break;case"binaural-gamma":this.buildBinauralBeat(200,40);break;case"binaural-alpha":this.buildBinauralBeat(210,10);break;case"rain-storm":this.buildRainStorm();break}}buildBrownNoise(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.sampleRate*5,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),r=t.getChannelData(0);let o=0;for(let d=0;d<e;d++){const m=Math.random()*2-1;o=(o+.02*m)/1.02,r[d]=o*3.2}const l=2048;for(let d=0;d<l;d++){const m=d/l;r[d]=r[d]*m+r[e-l+d]*(1-m)}const u=this.ctx.createBufferSource();u.buffer=t,u.loop=!0;const p=this.ctx.createBiquadFilter();p.type="lowpass",p.frequency.setValueAtTime(450,this.ctx.currentTime),p.Q.setValueAtTime(.7,this.ctx.currentTime),u.connect(p),p.connect(this.masterGain),u.start(),this.activeNodes.push(u,p)}buildCelestialDrone(){if(!this.ctx||!this.masterGain)return;const e=216,t=[e,e*1.5,e*2,e*2.5],r=[-4,3,-2,5];t.forEach((o,l)=>{if(!this.ctx||!this.masterGain)return;const u=this.ctx.createOscillator();u.type=l%2===0?"sine":"triangle",u.frequency.setValueAtTime(o,this.ctx.currentTime),u.detune.setValueAtTime(r[l],this.ctx.currentTime);const p=this.ctx.createGain();p.gain.setValueAtTime(.18/(l+1),this.ctx.currentTime);const d=this.ctx.createOscillator();d.frequency.setValueAtTime(.08+l*.03,this.ctx.currentTime);const m=this.ctx.createGain();m.gain.setValueAtTime(.04,this.ctx.currentTime),d.connect(m),m.connect(p.gain),u.connect(p),p.connect(this.masterGain),u.start(),d.start(),this.activeNodes.push(u,d,p,m)})}buildBinauralBeat(e,t){if(!this.ctx||!this.masterGain)return;const r=this.ctx.createOscillator();r.type="sine",r.frequency.setValueAtTime(e,this.ctx.currentTime);const o=this.ctx.createGain();o.gain.setValueAtTime(.22,this.ctx.currentTime);const l=this.ctx.createOscillator();l.type="sine",l.frequency.setValueAtTime(e+t,this.ctx.currentTime);const u=this.ctx.createGain();u.gain.setValueAtTime(.22,this.ctx.currentTime);const p=this.ctx.createChannelMerger(2);r.connect(o),o.connect(p,0,0),l.connect(u),u.connect(p,0,1);const d=this.ctx.createOscillator();d.type="triangle",d.frequency.setValueAtTime(e/2,this.ctx.currentTime);const m=this.ctx.createGain();m.gain.setValueAtTime(.08,this.ctx.currentTime),d.connect(m),m.connect(this.masterGain),p.connect(this.masterGain),r.start(),l.start(),d.start(),this.activeNodes.push(r,l,d,o,u,m,p)}buildRainStorm(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.sampleRate*4,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),r=t.getChannelData(0);let o=0,l=0,u=0,p=0,d=0,m=0,g=0;for(let w=0;w<e;w++){const E=Math.random()*2-1;o=.99886*o+E*.0555179,l=.99332*l+E*.0750759,u=.969*u+E*.153852,p=.8665*p+E*.3104856,d=.55*d+E*.5329522,m=-.7616*m-E*.016898,r[w]=(o+l+u+p+d+m+g+E*.5362)*.12,g=E*.115926}const v=this.ctx.createBufferSource();v.buffer=t,v.loop=!0;const _=this.ctx.createBiquadFilter();_.type="lowpass",_.frequency.setValueAtTime(1200,this.ctx.currentTime),v.connect(_),_.connect(this.masterGain),v.start(),this.activeNodes.push(v,_)}playFocusChime(){try{if(this.initContext(),!this.ctx)return;const e=this.ctx.currentTime,t=[528,1056,1584],r=[.28,.09,.03],o=this.ctx.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.45,e+.04),o.gain.exponentialRampToValueAtTime(1e-4,e+3.4),o.connect(this.ctx.destination),t.forEach((l,u)=>{if(!this.ctx)return;const p=this.ctx.createOscillator(),d=this.ctx.createGain();p.type="sine",p.frequency.setValueAtTime(l,e),d.gain.setValueAtTime(r[u],e),p.connect(d),d.connect(o),p.start(e),p.stop(e+3.5)})}catch(e){console.warn("Focus chime could not play:",e)}}playBreakChime(){try{if(this.initContext(),!this.ctx)return;const e=this.ctx.currentTime;[{freq:523.25,start:0,dur:1.8,vol:.22},{freq:659.25,start:.22,dur:1.8,vol:.2},{freq:783.99,start:.44,dur:2.2,vol:.25},{freq:1046.5,start:.66,dur:2.8,vol:.18}].forEach(({freq:r,start:o,dur:l,vol:u})=>{if(!this.ctx)return;const p=e+o,d=this.ctx.createOscillator(),m=this.ctx.createGain();d.type="sine",d.frequency.setValueAtTime(r,p),m.gain.setValueAtTime(0,p),m.gain.linearRampToValueAtTime(u,p+.04),m.gain.exponentialRampToValueAtTime(1e-4,p+l),d.connect(m),m.connect(this.ctx.destination),d.start(p),d.stop(p+l+.1)})}catch(e){console.warn("Break chime could not play:",e)}}}const br=new Ov;class Bv{startKeepAlive(){}stopKeepAlive(){}updateMetadata(e){if(!(typeof window>"u"||!("mediaSession"in navigator)))try{const t=e.artworkUrl?[{src:e.artworkUrl,sizes:"96x96",type:"image/jpeg"},{src:e.artworkUrl,sizes:"128x128",type:"image/jpeg"},{src:e.artworkUrl,sizes:"192x192",type:"image/jpeg"},{src:e.artworkUrl,sizes:"256x256",type:"image/jpeg"},{src:e.artworkUrl,sizes:"512x512",type:"image/jpeg"}]:[];navigator.mediaSession.metadata=new MediaMetadata({title:e.title||"FOR ME Sanctuary",artist:e.artist||"Private Life Ledger",album:e.album||"Sanctuary Audio",artwork:t}),navigator.mediaSession.playbackState="playing",navigator.mediaSession.setActionHandler("play",()=>{e.onPlay(),navigator.mediaSession.playbackState="playing"}),navigator.mediaSession.setActionHandler("pause",()=>{e.onPause(),navigator.mediaSession.playbackState="paused"}),e.onNext?navigator.mediaSession.setActionHandler("nexttrack",e.onNext):navigator.mediaSession.setActionHandler("nexttrack",null),e.onPrev?navigator.mediaSession.setActionHandler("previoustrack",e.onPrev):navigator.mediaSession.setActionHandler("previoustrack",null)}catch(t){console.warn("[MediaSession] Metadata update error:",t)}}setPlaybackState(e){if(!(typeof window>"u"||!("mediaSession"in navigator)))try{navigator.mediaSession.playbackState=e}catch{}}}const Bi=new Bv;function Hv(s){if(!s||typeof s!="string")return null;const e=s.trim();let t,r;const o=e.match(/[?&]list=([a-zA-Z0-9_-]+)/);o&&o[1]&&(r=o[1]);const l=e.match(/[?&]v=([a-zA-Z0-9_-]{11})/);if(l&&l[1]&&(t=l[1]),!t){const p=e.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);p&&p[1]&&(t=p[1])}if(!t){const p=e.match(/youtube\.com\/(?:live|embed|v|shorts)\/([a-zA-Z0-9_-]{11})/);p&&p[1]&&(t=p[1])}if(!t&&!r&&/^[a-zA-Z0-9_-]{11}$/.test(e)&&(t=e),!t&&!r&&/^(?:PL|RD|UU|FL|OLAK5uy_)[a-zA-Z0-9_-]+$/.test(e)&&(r=e),!t&&!r)return null;let u="video";return r&&t?u="video_in_playlist":r&&(u="playlist"),{type:u,videoId:t,playlistId:r,cleanUrl:e}}function Gv(s){return s?`https://img.youtube.com/vi/${s}/hqdefault.jpg`:"https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=600&auto=format&fit=crop"}const ec=[{id:"lofi-girl-main",title:"Lofi Girl — Beats to Relax / Study to",type:"video",videoId:"jfKfPfyJRdk",url:"https://www.youtube.com/watch?v=jfKfPfyJRdk",channel:"Lofi Girl",thumbnailUrl:"https://img.youtube.com/vi/jfKfPfyJRdk/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"synthwave-chilledcow",title:"Synthwave Radio — Chill Beats to Code & Chill",type:"video",videoId:"4xDzrJKXOOY",url:"https://www.youtube.com/watch?v=4xDzrJKXOOY",channel:"Lofi Girl / Synthwave Boy",thumbnailUrl:"https://img.youtube.com/vi/4xDzrJKXOOY/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"deep-focus-ambient",title:"Deep Focus Ambient — Flow State Alpha Waves",type:"video",videoId:"lTRiuFIWV54",url:"https://www.youtube.com/watch?v=lTRiuFIWV54",channel:"Greenred Productions",thumbnailUrl:"https://img.youtube.com/vi/lTRiuFIWV54/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"peaceful-piano-solitude",title:"Peaceful Piano & Soft Rain — Gentle Solitude",type:"video",videoId:"1WUEk0R79_Q",url:"https://www.youtube.com/watch?v=1WUEk0R79_Q",channel:"Quiet Quest",thumbnailUrl:"https://img.youtube.com/vi/1WUEk0R79_Q/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"classical-focus-mozart",title:"Classical Focus — Mozart, Beethoven, Bach",type:"video",videoId:"WPni755-Krg",url:"https://www.youtube.com/watch?v=WPni755-Krg",channel:"HALIDONMUSIC",thumbnailUrl:"https://img.youtube.com/vi/WPni755-Krg/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"cozy-coffee-shop-lofi",title:"Cozy Coffee Shop Lofi — Rainy Night Ambience",type:"video",videoId:"-5KAN9_CzSA",url:"https://www.youtube.com/watch?v=-5KAN9_CzSA",channel:"Calmed by Nature",thumbnailUrl:"https://img.youtube.com/vi/-5KAN9_CzSA/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()}],u0=be.createContext(void 0),Zs={palette:"cosmic-royal",speed:"balanced",amplitude:"majestic",waveGeometry:"dunes",waveLayerDensity:"deep",horizonHeight:"balanced",waveStrokeOpacity:.5,interactiveParallax:!0,celestialBody:"crescent-moon",celestialPosition:"default",celestialScaleMultiplier:1,rotationSpeed:"standard",showNebulaDust:!0,nebulaIntensity:"vivid",showConstellations:!0,showComet:!0,shootingStarMode:"occasional",showStars:!0,starDensity:"balanced",showCrossStars:!1,showOrbitalTrack:!1,showMeridian:!1,clockFontStyle:"tabular",clockSize:"standard",clockPosition:"center",clockDivider:"colon",clockColor:"palette",clockFormat:"12h",showSeconds:!0,showDate:!0,showGreeting:!0,clockHalo:"pulsar"},Za={name:"Azan",motto:"Remember, you are here for you.",defaultFocusTopic:"Engineering",defaultFocusMode:"Deep Work"},qu={focusDurationMinutes:25,breakDurationMinutes:5,displayMode:"telemetry",autoStartBreaks:!0,soundEnabled:!0},Kr=(s,e)=>{var u;if(!s)return e;const t=s.trim().match(/(\d+)(?::(\d+))?\s*(am|pm)?/i);if(!t)return e;let r=parseInt(t[1],10);const o=t[2]?parseInt(t[2],10):0,l=(u=t[3])==null?void 0:u.toLowerCase();return l==="pm"&&r<12&&(r+=12),l==="am"&&r===12&&(r=0),Math.min(24,Math.max(0,r+o/60))},Sl=[{id:"r1",title:"Morning Protocol",timeRange:"06:00 – 09:00",startHour:6,endHour:9,description:"Hydration, natural sunlight, 30-min movement, deep work session.",iconType:"morning",colorTag:"#f59e0b"},{id:"r2",title:"Core Deep Work",timeRange:"09:00 – 17:00",startHour:9,endHour:17,description:"High-leverage engineering problem solving, core building goals, focused sprints.",iconType:"afternoon",colorTag:"#8b5cf6"},{id:"r3",title:"Evening Wind-Down",timeRange:"17:00 – 22:30",startHour:17,endHour:22.5,description:"Reflection, physical cooldown, reading, digital sunset and deep recovery.",iconType:"evening",colorTag:"#3b82f6"}],Vv=({children:s})=>{const[e,t]=be.useState(()=>{try{const S=localStorage.getItem("for_me_profile");if(S){const U=JSON.parse(S);return U.name==="Viren"?{...Za,name:"Azan"}:{...Za,...U}}return Za}catch{return Za}}),r=S=>{t(U=>{const W={...U,...S};return localStorage.setItem("for_me_profile",JSON.stringify(W)),W})};be.useEffect(()=>{localStorage.setItem("for_me_profile",JSON.stringify(e))},[e]);const[o,l]=be.useState(()=>{try{return localStorage.getItem("for_me_app_theme")==="light"?"light":"dark"}catch{return"dark"}}),u=()=>{l(S=>S==="light"?"dark":"light")};be.useEffect(()=>{localStorage.setItem("for_me_app_theme",o),o==="light"?(document.documentElement.classList.add("theme-light"),document.documentElement.classList.remove("theme-dark")):(document.documentElement.classList.add("theme-dark"),document.documentElement.classList.remove("theme-light"))},[o]);const[p,d]=be.useState(()=>{try{const S=localStorage.getItem("for_me_is_hud_hidden");return S?JSON.parse(S):!1}catch{return!1}}),m=()=>d(S=>!S);be.useEffect(()=>{localStorage.setItem("for_me_is_hud_hidden",JSON.stringify(p))},[p]);const[g,v]=be.useState(()=>{try{return localStorage.getItem("for_me_wallpaper_theme")||"cosmic-cliffs"}catch{return"cosmic-cliffs"}});be.useEffect(()=>{localStorage.setItem("for_me_wallpaper_theme",g)},[g]);const[_,w]=be.useState(()=>{try{const S=localStorage.getItem("for_me_wallpaper_settings_v3")||localStorage.getItem("for_me_wallpaper_settings_v2");return S?{...Zs,...JSON.parse(S)}:Zs}catch{return Zs}}),E=S=>{w(U=>{const W={...U,...S};return localStorage.setItem("for_me_wallpaper_settings_v3",JSON.stringify(W)),W})},A=()=>{w(Zs),localStorage.setItem("for_me_wallpaper_settings_v3",JSON.stringify(Zs))},[y,b]=be.useState(()=>{try{const S=localStorage.getItem("for_me_tasks");return S?JSON.parse(S):[{id:"1",text:"Core engineering deep focus sprint",completed:!1},{id:"2",text:"System architecture review & refinement",completed:!1},{id:"3",text:"Physical movement & hydration (8 glasses)",completed:!1}]}catch{return[{id:"1",text:"Core engineering deep focus sprint",completed:!1}]}});be.useEffect(()=>{localStorage.setItem("for_me_tasks",JSON.stringify(y))},[y]);const R=S=>{b(U=>U.map(W=>W.id===S?{...W,completed:!W.completed,completedAt:W.completed?void 0:new Date().toISOString()}:W))},z=S=>{if(!S.trim())return;const U={id:`task_${Date.now()}`,text:S.trim(),completed:!1};b(W=>[U,...W])},D=S=>{b(U=>U.filter(W=>W.id!==S))},[F,L]=be.useState(()=>{try{const S=localStorage.getItem("for_me_habits");return S?JSON.parse(S):[{id:"h1",name:"Deep Focus & Engineering Block",completed:!1,streak:3},{id:"h2",name:"Hydration Target (8 Glasses)",completed:!1,streak:5},{id:"h3",name:"Mindful Walk & Movement",completed:!1,streak:2}]}catch{return[{id:"h1",name:"Deep Focus & Engineering Block",completed:!1,streak:1}]}});be.useEffect(()=>{localStorage.setItem("for_me_habits",JSON.stringify(F))},[F]);const M=S=>{L(U=>U.map(W=>{if(W.id===S){const ee=!W.completed;return{...W,completed:ee,streak:ee?W.streak+1:Math.max(0,W.streak-1)}}return W}))},N=S=>{if(!S.trim())return;const U={id:`habit_${Date.now()}`,name:S.trim(),completed:!1,streak:0};L(W=>[...W,U])},Z=S=>{L(U=>U.filter(W=>W.id!==S))},[B,X]=be.useState(()=>{try{const S=localStorage.getItem("for_me_routines");return S?JSON.parse(S):Sl}catch{return Sl}});be.useEffect(()=>{localStorage.setItem("for_me_routines",JSON.stringify(B))},[B]);const O=S=>{const U=S.timeRange.split(/[-–—to]/i),W=S.startHour!==void 0?S.startHour:Kr(U[0],9),ee=S.endHour!==void 0?S.endHour:Kr(U[1],W+1),ne={id:`routine_${Date.now()}`,...S,startHour:W,endHour:ee,colorTag:S.colorTag||"#8b5cf6"};X(Le=>[...Le,ne])},H=(S,U)=>{X(W=>W.map(ee=>{if(ee.id!==S)return ee;const ne={...ee,...U};if(U.timeRange&&(U.startHour===void 0||U.endHour===void 0)){const Le=U.timeRange.split(/[-–—to]/i);ne.startHour=Kr(Le[0],ne.startHour||9),ne.endHour=Kr(Le[1],ne.endHour||17)}return ne}))},$=S=>{X(U=>U.filter(W=>W.id!==S))},j=()=>{X(Sl)},[ce,te]=be.useState(null),[q,Y]=be.useState(0);be.useEffect(()=>{const S=()=>{const W=new Date,ee=W.getHours()+W.getMinutes()/60,ne=W.getHours()*60+W.getMinutes();let Le=null,Ye=0;for(const He of B){let Ve=He.startHour,qe=He.endHour;if(Ve===void 0||qe===void 0){const rt=He.timeRange.split(/[-–—to]/i);Ve=Kr(rt[0],0),qe=Kr(rt[1],24)}if(Ve<=qe){if(ee>=Ve&&ee<qe){Le=He;const rt=Math.round(qe*60);Ye=Math.max(0,rt-ne);break}}else if(ee>=Ve||ee<qe){Le=He;const rt=Math.round(qe*60);ee>=Ve?Ye=Math.max(0,1440-ne+rt):Ye=Math.max(0,rt-ne);break}}te(Le),Y(Ye)};S();const U=setInterval(S,15e3);return()=>clearInterval(U)},[B]);const[G,P]=be.useState(0),[K,Te]=be.useState(!1),[ie,xe]=be.useState(e.defaultFocusTopic||"Engineering"),[Me,ge]=be.useState(()=>{try{const S=localStorage.getItem("for_me_study_sessions");return S?JSON.parse(S):[]}catch{return[]}});be.useEffect(()=>{let S=null;return K?S=setInterval(()=>{P(U=>U+1)},1e3):!K&&G!==0&&clearInterval(S),()=>clearInterval(S)},[K,G]);const ye=()=>Te(S=>!S),Pe=()=>{if(G>30){const S={id:`ses_${Date.now()}`,subject:ie,durationSeconds:G,timestamp:new Date().toISOString()};ge(U=>{const W=[S,...U];return localStorage.setItem("for_me_study_sessions",JSON.stringify(W)),W})}Te(!1),P(0)},st=(S,U,W)=>{if(S<=0)return;const ee={id:`ses_manual_${Date.now()}`,subject:(U==null?void 0:U.trim())||ie||"Engineering",mode:(W==null?void 0:W.trim())||"Manual Entry",durationSeconds:Math.round(S*60),timestamp:new Date().toISOString()};ge(ne=>{const Le=[ee,...ne];return localStorage.setItem("for_me_study_sessions",JSON.stringify(Le)),Le})},je=S=>{ge(U=>{const W=U.filter(ee=>ee.id!==S);return localStorage.setItem("for_me_study_sessions",JSON.stringify(W)),W})},[Ee,Fe]=be.useState(()=>{try{const S=localStorage.getItem("for_me_pomodoro_settings");return S?{...qu,...JSON.parse(S)}:qu}catch{return qu}});be.useEffect(()=>{localStorage.setItem("for_me_pomodoro_settings",JSON.stringify(Ee))},[Ee]);const[Ge,ct]=be.useState("idle"),[xt,vt]=be.useState(()=>Ee.focusDurationMinutes*60),[me,Xt]=be.useState(()=>Ee.focusDurationMinutes*60);be.useEffect(()=>{let S=null;return(Ge==="focus"||Ge==="break")&&(S=setInterval(()=>{vt(U=>{if(U<=1)if(Ge==="focus"){Ee.soundEnabled&&br.playFocusChime();const W=me,ee={id:`ses_${Date.now()}`,subject:ie,mode:"Pomodoro Focus",durationSeconds:W,timestamp:new Date().toISOString()};if(ge(ne=>{const Le=[ee,...ne];return localStorage.setItem("for_me_study_sessions",JSON.stringify(Le)),Le}),Ee.autoStartBreaks){ct("break");const ne=Ee.breakDurationMinutes*60;return Xt(ne),ne}else{ct("idle");const ne=Ee.focusDurationMinutes*60;return Xt(ne),ne}}else{Ee.soundEnabled&&br.playBreakChime(),ct("idle");const W=Ee.focusDurationMinutes*60;return Xt(W),W}return U-1})},1e3)),()=>{S&&clearInterval(S)}},[Ge,me,Ee,ie]);const It=S=>{const W=(S||Ee.focusDurationMinutes)*60;Xt(W),vt(W),ct("focus")},Zt=()=>{(Ge==="focus"||Ge==="break")&&ct("paused")},Wt=()=>{Ge==="paused"&&ct("focus")},mn=()=>{Ge==="focus"?ct("paused"):Ge==="paused"?ct("focus"):Ge==="break"?ct("paused"):It()},Q=()=>{ct("idle");const S=Ee.focusDurationMinutes*60;Xt(S),vt(S)},Jt=()=>{if(Ge==="focus"){ct("break");const S=Ee.breakDurationMinutes*60;Xt(S),vt(S)}else{ct("idle");const S=Ee.focusDurationMinutes*60;Xt(S),vt(S)}},Et=()=>{Fe(S=>({...S,displayMode:S.displayMode==="telemetry"?"numbers":"telemetry"}))},[St,de]=be.useState(()=>{try{const S=localStorage.getItem("for_me_hydration");return S?JSON.parse(S):62.5}catch{return 62.5}});be.useEffect(()=>{localStorage.setItem("for_me_hydration",JSON.stringify(St))},[St]);const[bt,Je]=be.useState(()=>{try{const S=localStorage.getItem("for_me_sleep_hours");return S?JSON.parse(S):8}catch{return 8}}),nt=S=>{Je(S),localStorage.setItem("for_me_sleep_hours",JSON.stringify(S))},[I,T]=be.useState(()=>{try{const S=localStorage.getItem("for_me_daily_rating");return S?JSON.parse(S):8}catch{return 8}});be.useEffect(()=>{localStorage.setItem("for_me_daily_rating",JSON.stringify(I))},[I]);const ae=()=>{const S=new Date,U=S.getFullYear(),W=String(S.getMonth()+1).padStart(2,"0"),ee=String(S.getDate()).padStart(2,"0");return`${U}-${W}-${ee}`},[Re,we]=be.useState(()=>{try{return localStorage.getItem("for_me_last_active_date")||ae()}catch{return ae()}}),Ue=S=>{if(b(U=>{const W=U.map(ee=>({...ee,completed:!1,completedAt:void 0}));return localStorage.setItem("for_me_tasks",JSON.stringify(W)),W}),L(U=>{const W=U.map(ee=>({...ee,completed:!1,streak:ee.completed?ee.streak:0}));return localStorage.setItem("for_me_habits",JSON.stringify(W)),W}),de(0),localStorage.setItem("for_me_hydration",JSON.stringify(0)),G>30){const U={id:`ses_${Date.now()}`,subject:ie,durationSeconds:G,timestamp:new Date().toISOString()};ge(W=>{const ee=[U,...W];return localStorage.setItem("for_me_study_sessions",JSON.stringify(ee)),ee})}Te(!1),P(0),we(S),localStorage.setItem("for_me_last_active_date",S)};be.useEffect(()=>{const S=()=>{const W=ae(),ee=localStorage.getItem("for_me_last_active_date");ee?ee!==W&&Ue(W):(localStorage.setItem("for_me_last_active_date",W),we(W))};S();const U=setInterval(S,1e4);return window.addEventListener("focus",S),()=>{clearInterval(U),window.removeEventListener("focus",S)}},[G,ie]);const Be=()=>{const S=ae();Ue(S)},ve=()=>{["for_me_profile","for_me_tasks","for_me_habits","for_me_routines","for_me_hydration","for_me_sleep_hours","for_me_daily_rating","for_me_study_sessions","for_me_pomodoro_settings","for_me_wallpaper_settings_v3","for_me_wallpaper_theme","for_me_app_theme","for_me_is_hud_hidden","for_me_last_active_date","for_me_active_yt","for_me_saved_yt_library"].forEach(U=>localStorage.removeItem(U)),t(Za),b([{id:"1",text:"Core engineering deep focus sprint",completed:!1},{id:"2",text:"System architecture review & refinement",completed:!1},{id:"3",text:"Physical movement & hydration (8 glasses)",completed:!1}]),L([{id:"h1",name:"Deep Focus & Engineering Block",completed:!1,streak:0},{id:"h2",name:"Hydration Target (8 Glasses)",completed:!1,streak:0},{id:"h3",name:"Mindful Walk & Movement",completed:!1,streak:0}]),X(Sl),de(0),Je(8),T(8),P(0),Te(!1),ge([]),w(Zs),we(ae())},[Se,_e]=be.useState("youtube"),[k,oe]=be.useState(!1),[le,Ae]=be.useState("brown-noise"),[Ne,De]=be.useState(.65),[$e,dt]=be.useState(!1),[Ce,Xe]=be.useState(!1),[at,Oe]=be.useState(!1),[ut,pt]=be.useState(()=>{try{const S=localStorage.getItem("for_me_active_yt");return S?JSON.parse(S):ec[0]}catch{return ec[0]}}),[nn,Dn]=be.useState(70),[xn,mt]=be.useState(!1),[Ft,_t]=be.useState(!1),[Bt,Kt]=be.useState(()=>{try{const S=localStorage.getItem("for_me_saved_yt_library");return S?JSON.parse(S):[]}catch{return[]}});be.useEffect(()=>{ut&&localStorage.setItem("for_me_active_yt",JSON.stringify(ut))},[ut]),be.useEffect(()=>{localStorage.setItem("for_me_saved_yt_library",JSON.stringify(Bt))},[Bt]);const Zn=S=>{if(Ce){Xe(!1);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("pauseVideo")}catch{}}_e("ambient");const U=S||le;Ae(U),br.play(U),oe(!0);const W=da.find(ee=>ee.id===U);Bi.startKeepAlive(),Bi.updateMetadata({title:(W==null?void 0:W.title)||"Procedural Soundscape",artist:"FOR ME Sanctuary (Offline)",album:"Sound Sanctuary",onPlay:()=>Zn(U),onPause:$n})},$n=()=>{br.stop(),oe(!1),Bi.stopKeepAlive(),Bi.setPlaybackState("paused")},Ln=S=>{De(S),br.setVolume(S)},xi=()=>{const S=br.toggleMute();dt(S)},Qt=S=>{br.stop(),oe(!1),pt(S),_e("youtube"),Xe(!0),mt(!1);try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}},Ci=()=>{if(Ce){Xe(!1);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("pauseVideo")}catch{}}else{br.stop(),oe(!1),_e("youtube"),Xe(!0),mt(!1);try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute(),typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("playVideo")}catch{}}},rs=()=>{Xe(!1);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("stopVideo")}catch{}},Gt=()=>{try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("nextVideo"),Xe(!0)}catch{}},vi=()=>{try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("previousVideo"),Xe(!0)}catch{}},Ai=S=>{Dn(S);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("setVolume",[S])}catch{}},Ar=()=>{mt(S=>{const U=!S;try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand(U?"mute":"unMute")}catch{}return U})},Jn=(S,U)=>{var Le;const W=Hv(S);if(!W)return{success:!1,error:"Could not recognize a valid YouTube video or playlist link. Please check the URL format and try again."};const ee=(U==null?void 0:U.trim())||(W.type==="playlist"?`Custom Playlist (${(Le=W.playlistId)==null?void 0:Le.slice(0,8)}...)`:`YouTube Audio (${W.videoId||"Stream"})`),ne={id:`yt-${Date.now()}-${Math.random().toString(36).substr(2,5)}`,title:ee,type:W.type,videoId:W.videoId,playlistId:W.playlistId,url:W.cleanUrl,thumbnailUrl:Gv(W.videoId),channel:W.type==="playlist"?"Custom YouTube Playlist":"Custom YouTube Stream",createdAt:new Date().toISOString()};return Kt(Ye=>[ne,...Ye]),Qt(ne),{success:!0,item:ne}},Rr=S=>{Kt(U=>U.filter(W=>W.id!==S))};return f.jsx(u0.Provider,{value:{profile:e,setProfile:t,updateProfile:r,appTheme:o,setAppTheme:l,toggleAppTheme:u,isHUDHidden:p,setIsHUDHidden:d,toggleHUDHidden:m,tasks:y,toggleTask:R,addTask:z,deleteTask:D,wallpaperTheme:g,setWallpaperTheme:v,wallpaperSettings:_,updateWallpaperSettings:E,resetWallpaperSettings:A,habits:F,toggleHabit:M,addHabit:N,deleteHabit:Z,routines:B,addRoutineBlock:O,updateRoutineBlock:H,deleteRoutineBlock:$,resetRoutines:j,activeRoutineBlock:ce,activeRoutineMinutesLeft:q,studySeconds:G,isStudyActive:K,studySubject:ie,setStudySubject:xe,toggleStudyTimer:ye,resetStudyTimer:Pe,studySessions:Me,logManualStudyTime:st,deleteStudySession:je,pomodoroPhase:Ge,pomodoroSecondsLeft:xt,pomodoroTotalSeconds:me,pomodoroSettings:Ee,setPomodoroSettings:Fe,startPomodoro:It,pausePomodoro:Zt,resumePomodoro:Wt,togglePomodoro:mn,resetPomodoro:Q,skipPomodoroPhase:Jt,togglePomodoroDisplayMode:Et,hydration:St,setHydration:de,sleepHours:bt,setSleep:nt,dailyRating:I,setDailyRating:T,lastActiveDate:Re,resetDayProgress:Be,factoryReset:ve,audioSource:Se,setAudioSource:_e,isAudioPlaying:k,activeSoundscapeId:le,audioVolume:Ne,isAudioMuted:$e,playSoundscape:Zn,stopSoundscape:$n,setAudioVolume:Ln,toggleAudioMute:xi,isYouTubePlaying:Ce,setYouTubeIsPlaying:Xe,isYouTubePlayerReady:at,setYouTubePlayerReady:Oe,activeYouTubeItem:ut,youtubeVolume:nn,isYouTubeMuted:xn,savedYouTubeItems:Bt,showYouTubePreview:Ft,setShowYouTubePreview:_t,playYouTubeItem:Qt,toggleYouTubePlay:Ci,stopYouTube:rs,nextYouTubeTrack:Gt,prevYouTubeTrack:vi,setYouTubeVolume:Ai,toggleYouTubeMute:Ar,addYouTubeToLibrary:Jn,removeYouTubeFromLibrary:Rr},children:s})},is=()=>{const s=be.useContext(u0);if(!s)throw new Error("useData must be used within a DataProvider");return s},Wv=()=>{const s=be.useRef(null),{isHUDHidden:e,wallpaperSettings:t,appTheme:r}=is(),o=be.useRef(e),l=be.useRef(t),u=be.useRef(r);return be.useEffect(()=>{o.current=e},[e]),be.useEffect(()=>{l.current=t},[t]),be.useEffect(()=>{u.current=r},[r]),be.useEffect(()=>{const p=s.current;if(!p)return;const d=p.getContext("2d");if(!d)return;let m,g=0,v=0;const _=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let w=[];const E=()=>{w=[];const H=l.current.starDensity||"balanced",$=H==="sparse"?.45:H==="dense"?1.6:H==="galaxy"?2.4:1,j=g<768?85:160,ce=Math.round(j*$);for(let te=0;te<ce;te++){const q=Math.random()>.85?2:Math.random()>.45?1:0,Y=Math.random()*.65+(q===2?.85:.35);w.push({x:Math.random()*g,y:Math.random()*v,z:q,radius:Y,alpha:Math.random()*.55+.25,alphaSpeed:Math.random()*.015+.005,alphaPhase:Math.random()*Math.PI*2,vx:(Math.random()-.5)*.06,vy:(Math.random()-.5)*.06})}},A=()=>{if(!p)return;const H=Math.min(window.devicePixelRatio||1,1.25);g=window.innerWidth,v=window.innerHeight,p.width=g*H,p.height=v*H,p.style.width=`${g}px`,p.style.height=`${v}px`,d.scale(H,H),E()};A(),window.addEventListener("resize",A,{passive:!0});let y=g/2,b=v/2,R=g/2,z=v/2;const D=H=>{l.current.interactiveParallax!==!1&&(y=H.clientX,b=H.clientY)};window.addEventListener("mousemove",D,{passive:!0});const F=(H,$,j,ce)=>{d.save(),d.translate(H,$);const te=u.current==="light",q=Math.max(.15,Math.min(.95,ce));d.globalAlpha=q;const Y=d.createRadialGradient(0,0,0,0,0,j*.9);te?(Y.addColorStop(0,"rgba(245, 158, 11, 0.75)"),Y.addColorStop(.3,"rgba(217, 119, 6, 0.28)"),Y.addColorStop(.7,"rgba(180, 83, 9, 0.06)"),Y.addColorStop(1,"rgba(255, 255, 255, 0)")):(Y.addColorStop(0,"rgba(255, 255, 255, 0.85)"),Y.addColorStop(.3,"rgba(216, 180, 254, 0.35)"),Y.addColorStop(.7,"rgba(147, 51, 234, 0.08)"),Y.addColorStop(1,"rgba(0, 0, 0, 0)")),d.fillStyle=Y,d.beginPath(),d.arc(0,0,j*.9,0,Math.PI*2),d.fill();const G=d.createLinearGradient(-j,0,j,0);te?(G.addColorStop(0,"rgba(245, 158, 11, 0)"),G.addColorStop(.35,"rgba(217, 119, 6, 0.45)"),G.addColorStop(.5,"#b45309"),G.addColorStop(.65,"rgba(217, 119, 6, 0.45)"),G.addColorStop(1,"rgba(245, 158, 11, 0)")):(G.addColorStop(0,"rgba(255, 255, 255, 0)"),G.addColorStop(.35,"rgba(233, 213, 255, 0.55)"),G.addColorStop(.5,"#ffffff"),G.addColorStop(.65,"rgba(233, 213, 255, 0.55)"),G.addColorStop(1,"rgba(255, 255, 255, 0)")),d.strokeStyle=G,d.lineWidth=.75,d.beginPath(),d.moveTo(-j,0),d.lineTo(j,0),d.stroke();const P=d.createLinearGradient(0,-j,0,j);te?(P.addColorStop(0,"rgba(245, 158, 11, 0)"),P.addColorStop(.35,"rgba(217, 119, 6, 0.45)"),P.addColorStop(.5,"#b45309"),P.addColorStop(.65,"rgba(217, 119, 6, 0.45)"),P.addColorStop(1,"rgba(245, 158, 11, 0)")):(P.addColorStop(0,"rgba(255, 255, 255, 0)"),P.addColorStop(.35,"rgba(233, 213, 255, 0.55)"),P.addColorStop(.5,"#ffffff"),P.addColorStop(.65,"rgba(233, 213, 255, 0.55)"),P.addColorStop(1,"rgba(255, 255, 255, 0)")),d.strokeStyle=P,d.lineWidth=.75,d.beginPath(),d.moveTo(0,-j),d.lineTo(0,j),d.stroke();const K=j*.38;d.strokeStyle=te?"rgba(180, 83, 9, 0.35)":"rgba(255, 255, 255, 0.4)",d.lineWidth=.5,d.beginPath(),d.moveTo(-K,-K),d.lineTo(K,K),d.moveTo(-K,K),d.lineTo(K,-K),d.stroke(),d.fillStyle=te?"#d97706":"#ffffff",d.beginPath(),d.arc(0,0,1.2,0,Math.PI*2),d.fill(),d.restore()},L=[{x:-100,y:-100,length:100,speed:18,angle:Math.PI/4+.05,alpha:0,active:!1},{x:-100,y:-100,length:80,speed:16,angle:Math.PI/4-.08,alpha:0,active:!1},{x:-100,y:-100,length:110,speed:20,angle:Math.PI/4+.12,alpha:0,active:!1}];let M=120;const N=H=>{if(H==="off")return;M--;const $=H==="meteor-shower"?40:180;if(M<=0&&!_){M=Math.random()*(H==="meteor-shower"?60:200)+$;const j=L.find(ce=>!ce.active);j&&(j.active=!0,j.x=Math.random()*(g*.7),j.y=Math.random()*(v*.3),j.alpha=.95,j.length=Math.random()*50+70)}for(const j of L)if(j.active)if(j.x+=Math.cos(j.angle)*j.speed,j.y+=Math.sin(j.angle)*j.speed,j.alpha-=H==="meteor-shower"?.022:.016,j.alpha<=0||j.x>g+100||j.y>v+100)j.active=!1;else{d.save();const ce=j.x-Math.cos(j.angle)*j.length,te=j.y-Math.sin(j.angle)*j.length,q=d.createLinearGradient(ce,te,j.x,j.y);q.addColorStop(0,"rgba(255, 255, 255, 0)"),q.addColorStop(.7,"rgba(216, 180, 254, "+j.alpha*.6+")"),q.addColorStop(1,"#ffffff"),d.strokeStyle=q,d.lineWidth=1.3,d.beginPath(),d.moveTo(ce,te),d.lineTo(j.x,j.y),d.stroke(),d.fillStyle="#ffffff",d.beginPath(),d.arc(j.x,j.y,1.8,0,Math.PI*2),d.fill(),d.restore()}};let Z=0,B=!0;const X=()=>{B=!document.hidden};document.addEventListener("visibilitychange",X);const O=()=>{if(!B){m=requestAnimationFrame(O);return}const H=l.current,$=o.current;let j=1;H.speed==="frozen"?j=0:H.speed==="calm"?j=.45:H.speed==="dynamic"?j=1.45:j=.85,$&&j>0&&(j*=1.25),Z+=_?.002:.014*j,d.clearRect(0,0,g,v),R+=(y-R)*.04,z+=(b-z)*.04;const ce=(R-g/2)/(g/2),te=(z-v/2)/(v/2);let q=1;H.amplitude==="subtle"?q=.55:H.amplitude==="dramatic"?q=1.6:q=1,$&&(q*=1.2);const Y=H.palette,G=u.current==="light";let P="#030208",K="#0b061c",Te="#170a32",ie="rgba(168, 85, 247, 0.22)",xe="rgba(99, 102, 241, 0.16)",Me="rgba(168, 85, 247, 0.30)",ge="rgba(192, 132, 252, 0.40)",ye=["#05030e","#090518","#0e0824"],Pe="rgba(168, 85, 247, 0.25)",st=["#0a051d","#110930","#190c42"],je="rgba(168, 85, 247, 0.35)",Ee=["#11082e","#1c0c4b","#261063"],Fe="rgba(192, 132, 252, 0.45)",Ge=["#180b3d","#260f64","#341584"],ct="rgba(216, 180, 254, 0.55)",xt=["#0c0620","#140833","#1e0c4a","#281061"],vt="rgba(233, 213, 255, 0.65)";G?Y==="celestial-cyan"?(P="#eef8ff",K="#d7effe",Te="#b5e3fd",ie="rgba(14, 165, 233, 0.16)",xe="rgba(6, 182, 212, 0.12)",Me="rgba(2, 132, 199, 0.12)",ge="rgba(3, 105, 161, 0.20)",ye=["#93c5fd","#bfdbfe","#dbeafe"],Pe="rgba(29, 78, 216, 0.35)",st=["#60a5fa","#93c5fd","#bfdbfe"],je="rgba(2, 132, 199, 0.42)",Ee=["#38bdf8","#7dd3fc","#bae6fd"],Fe="rgba(14, 165, 233, 0.50)",Ge=["#bae6fd","#d7f0fd","#f0f9ff"],ct="rgba(56, 189, 248, 0.58)",xt=["#f0f9ff","#f8fcff","#ffffff","#ffffff"],vt="rgba(2, 132, 199, 0.68)"):Y==="supernova-sunset"?(P="#fff1f2",K="#fecdd3",Te="#fda4af",ie="rgba(244, 63, 94, 0.16)",xe="rgba(249, 115, 22, 0.12)",Me="rgba(225, 29, 72, 0.12)",ge="rgba(190, 18, 60, 0.20)",ye=["#f43f5e","#fb7185","#fda4af"],Pe="rgba(159, 18, 57, 0.35)",st=["#fb7185","#fda4af","#fecdd3"],je="rgba(225, 29, 72, 0.42)",Ee=["#fda4af","#fecdd3","#ffe4e6"],Fe="rgba(244, 63, 94, 0.50)",Ge=["#fecdd3","#ffe4e6","#fff1f2"],ct="rgba(251, 113, 133, 0.58)",xt=["#fff5f6","#fffafb","#ffffff","#ffffff"],vt="rgba(225, 29, 72, 0.68)"):Y==="nocturne-silver"?(P="#fafafa",K="#f4f4f6",Te="#e4e4e7",ie="rgba(113, 113, 122, 0.14)",xe="rgba(82, 82, 91, 0.10)",Me="rgba(82, 82, 91, 0.12)",ge="rgba(63, 63, 70, 0.20)",ye=["#a1a1aa","#d4d4d8","#e4e4e7"],Pe="rgba(63, 63, 70, 0.35)",st=["#d4d4d8","#e4e4e7","#f1f1f3"],je="rgba(82, 82, 91, 0.42)",Ee=["#e4e4e7","#f1f1f3","#f4f4f6"],Fe="rgba(113, 113, 122, 0.50)",Ge=["#f1f1f3","#f6f6f8","#fafafa"],ct="rgba(161, 161, 170, 0.58)",xt=["#f6f6f8","#fcfcfc","#ffffff","#ffffff"],vt="rgba(82, 82, 91, 0.68)"):Y==="cyberpunk-neon"?(P="#fdf2f8",K="#fae8ff",Te="#f5d0fe",ie="rgba(236, 72, 153, 0.18)",xe="rgba(6, 182, 212, 0.14)",Me="rgba(168, 85, 247, 0.15)",ge="rgba(236, 72, 153, 0.22)",ye=["#f472b6","#fbcfe8","#fdf2f8"],Pe="rgba(219, 39, 119, 0.35)",st=["#c084fc","#e9d5ff","#fae8ff"],je="rgba(147, 51, 234, 0.42)",Ee=["#38bdf8","#bae6fd","#f0f9ff"],Fe="rgba(2, 132, 199, 0.50)",Ge=["#fbcfe8","#fce7f3","#ffffff"],ct="rgba(236, 72, 153, 0.58)",xt=["#fdf2f8","#ffffff","#ffffff","#ffffff"],vt="rgba(168, 85, 247, 0.68)"):Y==="solar-gold"?(P="#fffbeb",K="#fef3c7",Te="#fde68a",ie="rgba(245, 158, 11, 0.20)",xe="rgba(234, 88, 12, 0.14)",Me="rgba(217, 119, 6, 0.15)",ge="rgba(245, 158, 11, 0.22)",ye=["#f59e0b","#fbbf24","#fef3c7"],Pe="rgba(180, 83, 9, 0.38)",st=["#fbbf24","#fcd34d","#fef9c3"],je="rgba(217, 119, 6, 0.45)",Ee=["#fde047","#fef08a","#fefce8"],Fe="rgba(234, 88, 12, 0.52)",Ge=["#fef08a","#fefce8","#ffffff"],ct="rgba(245, 158, 11, 0.60)",xt=["#fefce8","#ffffff","#ffffff","#ffffff"],vt="rgba(217, 119, 6, 0.70)"):Y==="emerald-aurora"?(P="#f0fdf4",K="#dcfce7",Te="#bbf7d0",ie="rgba(16, 185, 129, 0.20)",xe="rgba(34, 197, 94, 0.14)",Me="rgba(22, 163, 74, 0.15)",ge="rgba(16, 185, 129, 0.22)",ye=["#86efac","#bbf7d0","#dcfce7"],Pe="rgba(22, 163, 74, 0.38)",st=["#4ade80","#86efac","#bbf7d0"],je="rgba(21, 128, 61, 0.45)",Ee=["#22c55e","#4ade80","#86efac"],Fe="rgba(16, 185, 129, 0.52)",Ge=["#86efac","#bbf7d0","#f0fdf4"],ct="rgba(22, 163, 74, 0.60)",xt=["#f0fdf4","#f8fafc","#ffffff","#ffffff"],vt="rgba(16, 185, 129, 0.70)"):Y==="pure-pitch-black"?(P="#ffffff",K="#f8fafc",Te="#f1f5f9",ie="rgba(148, 163, 184, 0.16)",xe="rgba(100, 116, 139, 0.10)",Me="rgba(71, 85, 105, 0.15)",ge="rgba(51, 65, 85, 0.22)",ye=["#cbd5e1","#e2e8f0","#f1f5f9"],Pe="rgba(71, 85, 105, 0.38)",st=["#94a3b8","#cbd5e1","#e2e8f0"],je="rgba(51, 65, 85, 0.45)",Ee=["#64748b","#94a3b8","#cbd5e1"],Fe="rgba(30, 41, 59, 0.52)",Ge=["#cbd5e1","#e2e8f0","#f8fafc"],ct="rgba(51, 65, 85, 0.60)",xt=["#f8fafc","#ffffff","#ffffff","#ffffff"],vt="rgba(15, 23, 42, 0.70)"):(P="#fffbf3",K="#feeccd",Te="#fad4a0",ie="rgba(245, 158, 11, 0.18)",xe="rgba(217, 119, 6, 0.12)",Me="rgba(180, 83, 9, 0.12)",ge="rgba(146, 64, 14, 0.20)",ye=["#d4a373","#bc8a5f","#a47148"],Pe="rgba(146, 64, 14, 0.38)",st=["#e6ba8f","#d4a373","#bc8a5f"],je="rgba(180, 83, 9, 0.45)",Ee=["#f3d5b5","#e6ba8f","#d4a373"],Fe="rgba(217, 119, 6, 0.52)",Ge=["#faedcd","#f3d5b5","#fefae0"],ct="rgba(245, 158, 11, 0.60)",xt=["#fefae0","#fffdfa","#ffffff","#ffffff"],vt="rgba(217, 119, 6, 0.70)"):Y==="celestial-cyan"?(P="#020712",K="#041322",Te="#071f35",ie="rgba(14, 165, 233, 0.18)",xe="rgba(6, 182, 212, 0.12)",Me="rgba(56, 189, 248, 0.12)",ge="rgba(103, 232, 249, 0.20)",ye=["#030914","#051221","#071c31"],Pe="rgba(56, 189, 248, 0.22)",st=["#040f1f","#071b33","#0a2646"],je="rgba(56, 189, 248, 0.32)",Ee=["#06152a","#0a2544","#0f345c"],Fe="rgba(56, 189, 248, 0.42)",Ge=["#081b34","#0d2e54","#134273"],ct="rgba(125, 211, 252, 0.52)",xt=["#051224","#091c36","#0e294d","#133866"],vt="rgba(186, 230, 253, 0.65)"):Y==="supernova-sunset"?(P="#0a0208",K="#160412",Te="#24061c",ie="rgba(244, 63, 94, 0.18)",xe="rgba(249, 115, 22, 0.12)",Me="rgba(251, 113, 133, 0.12)",ge="rgba(253, 186, 116, 0.20)",ye=["#0d020a","#170412","#22061b"],Pe="rgba(244, 63, 94, 0.22)",st=["#150311","#24061d","#340929"],je="rgba(244, 63, 94, 0.32)",Ee=["#1e0518","#320827","#470c38"],Fe="rgba(251, 113, 133, 0.42)",Ge=["#280620","#420b33","#5c0f47"],ct="rgba(251, 146, 60, 0.52)",xt=["#180314","#270620","#3b0930","#500d41"],vt="rgba(254, 215, 170, 0.65)"):Y==="nocturne-silver"?(P="#030306",K="#08080d",Te="#101017",ie="rgba(161, 161, 170, 0.16)",xe="rgba(113, 113, 122, 0.10)",Me="rgba(212, 212, 216, 0.12)",ge="rgba(228, 228, 231, 0.18)",ye=["#060609","#0c0c12","#13131c"],Pe="rgba(161, 161, 170, 0.20)",st=["#0a0a0f","#12121b","#1a1a27"],je="rgba(161, 161, 170, 0.30)",Ee=["#0e0e16","#181824","#232333"],Fe="rgba(212, 212, 216, 0.40)",Ge=["#13131e","#1f1f30","#2d2d42"],ct="rgba(228, 228, 231, 0.50)",xt=["#0c0c13","#14141f","#1d1d2b","#272738"],vt="rgba(244, 244, 245, 0.65)"):Y==="cyberpunk-neon"?(P="#06000e",K="#120024",Te="#22003d",ie="rgba(236, 72, 153, 0.22)",xe="rgba(6, 182, 212, 0.18)",Me="rgba(34, 211, 238, 0.15)",ge="rgba(244, 114, 182, 0.22)",ye=["#0a0014","#150029","#24003d"],Pe="rgba(168, 85, 247, 0.25)",st=["#120021","#1f0038","#310052"],je="rgba(236, 72, 153, 0.35)",Ee=["#1c0030","#2d004d","#42006e"],Fe="rgba(6, 182, 212, 0.45)",Ge=["#25003d","#3d0066","#59008f"],ct="rgba(244, 63, 94, 0.55)",xt=["#160029","#260045","#380062","#4e0085"],vt="rgba(34, 211, 238, 0.70)"):Y==="solar-gold"?(P="#080400",K="#140900",Te="#241000",ie="rgba(245, 158, 11, 0.22)",xe="rgba(234, 88, 12, 0.16)",Me="rgba(251, 191, 36, 0.15)",ge="rgba(252, 211, 77, 0.22)",ye=["#0a0400","#170900","#261000"],Pe="rgba(217, 119, 6, 0.25)",st=["#130700","#220e00","#361600"],je="rgba(245, 158, 11, 0.35)",Ee=["#1e0a00","#301300","#4a1e00"],Fe="rgba(251, 191, 36, 0.45)",Ge=["#290e00","#421a00","#612700"],ct="rgba(252, 211, 77, 0.55)",xt=["#190800","#2a0e00","#401500","#592000"],vt="rgba(254, 240, 138, 0.70)"):Y==="emerald-aurora"?(P="#010d05",K="#021a0a",Te="#052e14",ie="rgba(16, 185, 129, 0.22)",xe="rgba(52, 211, 153, 0.16)",Me="rgba(110, 231, 183, 0.15)",ge="rgba(52, 211, 153, 0.22)",ye=["#021508","#04240f","#073918"],Pe="rgba(16, 185, 129, 0.25)",st=["#031f0c","#063316","#0a4b22"],je="rgba(52, 211, 153, 0.35)",Ee=["#052b12","#09431e","#0e602c"],Fe="rgba(110, 231, 183, 0.45)",Ge=["#083818","#0d5426","#147738"],ct="rgba(167, 243, 208, 0.55)",xt=["#062e14","#0a4720","#10632d","#18863f"],vt="rgba(110, 231, 183, 0.70)"):Y==="pure-pitch-black"&&(P="#000000",K="#020202",Te="#060606",ie="rgba(255, 255, 255, 0.08)",xe="rgba(161, 161, 170, 0.06)",Me="rgba(161, 161, 170, 0.10)",ge="rgba(228, 228, 231, 0.15)",ye=["#020202","#060606","#0a0a0a"],Pe="rgba(161, 161, 170, 0.20)",st=["#050505","#0a0a0a","#101010"],je="rgba(161, 161, 170, 0.30)",Ee=["#080808","#0e0e0e","#161616"],Fe="rgba(212, 212, 216, 0.40)",Ge=["#0c0c0c","#141414","#1e1e1e"],ct="rgba(228, 228, 231, 0.50)",xt=["#080808","#101010","#181818","#222222"],vt="rgba(255, 255, 255, 0.75)");const me=d.createLinearGradient(0,0,0,v);me.addColorStop(0,P),me.addColorStop(.45,K),me.addColorStop(1,Te),d.fillStyle=me,d.fillRect(0,0,g,v);const Xt=d.createRadialGradient(g*.8,v*.18,0,g*.8,v*.18,g*.5);Xt.addColorStop(0,ie),Xt.addColorStop(.7,"rgba(0, 0, 0, 0.04)"),Xt.addColorStop(1,"rgba(0, 0, 0, 0)"),d.fillStyle=Xt,d.fillRect(0,0,g,v);const It=d.createRadialGradient(g*.18,v*.82,0,g*.18,v*.82,g*.55);if(It.addColorStop(0,xe),It.addColorStop(.65,"rgba(0, 0, 0, 0.03)"),It.addColorStop(1,"rgba(0, 0, 0, 0)"),d.fillStyle=It,d.fillRect(0,0,g,v),H.showNebulaDust){d.save();const _e=d.createRadialGradient(g*.35,v*.2,0,g*.35,v*.2,g*.38);_e.addColorStop(0,ie),_e.addColorStop(.5,"rgba(126, 34, 206, 0.04)"),_e.addColorStop(1,"rgba(0, 0, 0, 0)"),d.fillStyle=_e,d.fillRect(0,0,g,v);const k=d.createRadialGradient(g*.7,v*.14,0,g*.7,v*.14,g*.32);k.addColorStop(0,xe),k.addColorStop(.6,"rgba(14, 116, 144, 0.03)"),k.addColorStop(1,"rgba(0, 0, 0, 0)"),d.fillStyle=k,d.fillRect(0,0,g,v),d.restore()}if(H.showConstellations){d.save(),d.strokeStyle=G?"rgba(180, 130, 80, 0.28)":"rgba(255, 255, 255, 0.14)",d.lineWidth=.75;const _e=[{x:g*.68,y:v*.1},{x:g*.72,y:v*.08},{x:g*.76,y:v*.09},{x:g*.78,y:v*.13},{x:g*.83,y:v*.14},{x:g*.84,y:v*.1},{x:g*.78,y:v*.09}];d.beginPath(),d.moveTo(_e[0].x,_e[0].y);for(let oe=1;oe<_e.length;oe++)d.lineTo(_e[oe].x,_e[oe].y);d.stroke(),d.fillStyle=G?"#b45309":"#ffffff";for(const oe of _e)d.beginPath(),d.arc(oe.x,oe.y,1.4,0,Math.PI*2),d.fill();const k=[{x:g*.28,y:v*.08},{x:g*.31,y:v*.12},{x:g*.34,y:v*.09},{x:g*.37,y:v*.13},{x:g*.4,y:v*.1}];d.beginPath(),d.moveTo(k[0].x,k[0].y);for(let oe=1;oe<k.length;oe++)d.lineTo(k[oe].x,k[oe].y);d.stroke();for(const oe of k)d.beginPath(),d.arc(oe.x,oe.y,1.3,0,Math.PI*2),d.fill();d.restore()}if(H.showComet){d.save();const _e=Z*.04%1,k=g*.75,oe=v*.04,le=g*.25,Ae=v*.22,Ne=k+(le-k)*_e,De=oe+(Ae-oe)*_e,$e=Math.atan2(Ae-oe,le-k)+Math.PI,dt=140,Ce=Ne+Math.cos($e)*dt,Xe=De+Math.sin($e)*dt,at=d.createLinearGradient(Ce,Xe,Ne,De);at.addColorStop(0,"rgba(56, 189, 248, 0)"),at.addColorStop(.5,"rgba(168, 85, 247, 0.25)"),at.addColorStop(.85,"rgba(233, 213, 255, 0.65)"),at.addColorStop(1,"#ffffff"),d.strokeStyle=at,d.lineWidth=1.8,d.beginPath(),d.moveTo(Ce,Xe),d.lineTo(Ne,De),d.stroke(),d.fillStyle="#ffffff",d.shadowColor="#67e8f9",d.shadowBlur=8,d.beginPath(),d.arc(Ne,De,2.2,0,Math.PI*2),d.fill(),d.restore()}if(H.showMeridian){d.save();const _e=g*.91;d.strokeStyle=Me,d.lineWidth=1,d.beginPath(),d.moveTo(_e,0),d.lineTo(_e,v),d.stroke(),d.strokeStyle="rgba(255, 255, 255, 0.18)",d.lineWidth=1;for(let k=50;k<v;k+=70)d.beginPath(),d.moveTo(_e-4,k),d.lineTo(_e+4,k),d.stroke();d.restore()}if(H.showOrbitalTrack){d.save();const _e=g*.78,k=v*.18,oe=Math.min(g,v)*.45,le=Math.min(g,v)*.22;d.shadowColor=ge,d.shadowBlur=6,d.strokeStyle=ge,d.lineWidth=1.2,d.beginPath(),d.ellipse(_e,k,oe,le,-.22,Math.PI*.1,Math.PI*1.3),d.stroke(),d.setLineDash([3,8]),d.strokeStyle="rgba(255, 255, 255, 0.22)",d.lineWidth=.8,d.beginPath(),d.ellipse(_e,k,oe*1.08,le*1.08,-.22,Math.PI*.05,Math.PI*1.25),d.stroke(),d.setLineDash([]),d.restore()}if(H.showStars)for(let _e=0;_e<w.length;_e++){const k=w[_e];!_&&j>0&&(k.x+=k.vx*j,k.y+=k.vy*j,k.alphaPhase+=k.alphaSpeed*j,k.x<0&&(k.x=g),k.x>g&&(k.x=0),k.y<0&&(k.y=v),k.y>v&&(k.y=0));const oe=(k.z+1)*.35,le=k.x+ce*12*oe,Ae=k.y+te*12*oe,Ne=Math.max(.12,Math.min(.85,k.alpha+Math.sin(k.alphaPhase)*.22));d.beginPath(),d.arc(le,Ae,k.radius,0,Math.PI*2),d.fillStyle=G?`rgba(180, 130, 80, ${(Ne*.65).toFixed(3)})`:`rgba(255, 255, 255, ${Ne.toFixed(3)})`,d.fill()}const Zt=H.waveGeometry,Wt=H.waveLayerDensity,mn=(_e,k,oe,le=2)=>{d.save(),d.translate(_e,k);const Ae=d.createRadialGradient(0,0,0,0,0,le*2.5);G?(Ae.addColorStop(0,`rgba(245, 158, 11, ${oe})`),Ae.addColorStop(.35,`rgba(217, 119, 6, ${oe*.7})`),Ae.addColorStop(1,"rgba(255, 255, 255, 0)"),d.fillStyle=Ae,d.beginPath(),d.arc(0,0,le*2.5,0,Math.PI*2),d.fill(),d.strokeStyle=`rgba(180, 83, 9, ${oe*.8})`,d.lineWidth=.75,d.beginPath(),d.moveTo(-le*2,0),d.lineTo(le*2,0),d.moveTo(0,-le*2),d.lineTo(0,le*2),d.stroke()):(Ae.addColorStop(0,`rgba(255, 255, 255, ${oe})`),Ae.addColorStop(.35,`rgba(233, 213, 255, ${oe*.7})`),Ae.addColorStop(1,"rgba(255, 255, 255, 0)"),d.fillStyle=Ae,d.beginPath(),d.arc(0,0,le*2.5,0,Math.PI*2),d.fill(),d.strokeStyle=`rgba(255, 255, 255, ${oe*.9})`,d.lineWidth=.75,d.beginPath(),d.moveTo(-le*2,0),d.lineTo(le*2,0),d.moveTo(0,-le*2),d.lineTo(0,le*2),d.stroke()),d.restore()},Q=(_e,k,oe,le,Ae,Ne,De,$e,dt,Ce,Xe=[])=>{const at=[0,g*.32,g*.68,g],Oe=[];for(let mt=0;mt<4;mt++){const Ft=Math.sin(Z*oe+le+mt*1.4)*(k*.75)+Math.cos(Z*oe*.7+le*1.2+mt*2.1)*(k*.35);Oe.push({x:at[mt],y:v*_e[mt]+Ft})}const ut=[Oe[0],...Oe,Oe[Oe.length-1]],pt=[],nn=.5;for(let mt=1;mt<ut.length-2;mt++){const Ft=ut[mt-1],_t=ut[mt],Bt=ut[mt+1],Kt=ut[mt+2],Zn=(Bt.x-Ft.x)*nn,$n=(Bt.y-Ft.y)*nn,Ln=(Kt.x-_t.x)*nn,xi=(Kt.y-_t.y)*nn;pt.push({p1:_t,cp1:{x:_t.x+Zn/3,y:_t.y+$n/3},cp2:{x:Bt.x-Ln/3,y:Bt.y-xi/3},p2:Bt})}d.save(),d.beginPath(),d.moveTo(Oe[0].x,Oe[0].y);for(const mt of pt)d.bezierCurveTo(mt.cp1.x,mt.cp1.y,mt.cp2.x,mt.cp2.y,mt.p2.x,mt.p2.y);d.lineTo(g,v),d.lineTo(0,v),d.closePath(),d.fillStyle=Ae,d.fill(),d.save(),d.clip();const Dn=Math.min(...Oe.map(mt=>mt.y)),xn=d.createLinearGradient(0,Dn,0,Dn+140);G?(xn.addColorStop(0,"rgba(255, 255, 255, 0.40)"),xn.addColorStop(.25,"rgba(251, 191, 36, 0.14)"),xn.addColorStop(.7,"rgba(217, 119, 6, 0.04)"),xn.addColorStop(1,"rgba(255, 255, 255, 0)")):(xn.addColorStop(0,"rgba(255, 255, 255, 0.26)"),xn.addColorStop(.25,"rgba(216, 180, 254, 0.16)"),xn.addColorStop(.7,"rgba(147, 51, 234, 0.05)"),xn.addColorStop(1,"rgba(0, 0, 0, 0)")),d.fillStyle=xn,d.fillRect(0,Dn,g,v),d.beginPath();for(let mt=0;mt<pt.length;mt++){const Ft=pt[mt],_t=18+Math.sin(Z*.75+mt*1.5)*4;mt===0&&d.moveTo(Ft.p1.x,Ft.p1.y+_t),d.bezierCurveTo(Ft.cp1.x,Ft.cp1.y+_t,Ft.cp2.x,Ft.cp2.y+_t,Ft.p2.x,Ft.p2.y+_t)}d.strokeStyle=G?"rgba(160, 90, 40, 0.16)":"rgba(255, 255, 255, 0.10)",d.lineWidth=1,d.stroke(),d.beginPath();for(let mt=0;mt<pt.length;mt++){const Ft=pt[mt],_t=38+Math.cos(Z*.65+mt*1.8)*5;mt===0&&d.moveTo(Ft.p1.x,Ft.p1.y+_t),d.bezierCurveTo(Ft.cp1.x,Ft.cp1.y+_t,Ft.cp2.x,Ft.cp2.y+_t,Ft.p2.x,Ft.p2.y+_t)}d.strokeStyle=G?"rgba(160, 90, 40, 0.10)":"rgba(255, 255, 255, 0.06)",d.lineWidth=.8,d.stroke(),d.restore(),d.strokeStyle=Ne,d.lineWidth=De,d.stroke(),d.restore();for(const mt of Xe){const Ft=Math.min(pt.length-1,Math.floor(mt*pt.length)),_t=mt*pt.length-Ft,Bt=pt[Ft],Kt=1-_t,Zn=Kt*Kt*Kt*Bt.p1.x+3*Kt*Kt*_t*Bt.cp1.x+3*Kt*_t*_t*Bt.cp2.x+_t*_t*_t*Bt.p2.x,$n=Kt*Kt*Kt*Bt.p1.y+3*Kt*Kt*_t*Bt.cp1.y+3*Kt*_t*_t*Bt.cp2.y+_t*_t*_t*Bt.p2.y,Ln=.5+Math.sin(Z*2+mt*8)*.35;mn(Zn,$n,Ln,2)}},Jt=(_e,k,oe,le,Ae,Ne,De,$e,dt,Ce,Xe,at)=>{const Oe=Math.sin(Z*Ae+Ne)*le,ut=[];ut.push({x:0,y:v*_e+Oe});for(let pt=0;pt<k.length;pt++){const nn=g*k[pt],Dn=v*(_e-oe[pt])+Math.cos(Z*Ae+pt+Ne)*(le*.7);ut.push({x:nn,y:Dn})}ut.push({x:g,y:v*(_e+.03)+Oe}),d.save(),d.beginPath(),d.moveTo(ut[0].x,ut[0].y);for(let pt=1;pt<ut.length;pt++)d.lineTo(ut[pt].x,ut[pt].y);d.lineTo(g,v),d.lineTo(0,v),d.closePath(),d.fillStyle=De,d.fill(),d.strokeStyle=$e,d.lineWidth=dt,d.stroke(),d.restore()},Et=(_e,k,oe,le,Ae,Ne)=>{d.save(),d.globalCompositeOperation="screen",d.beginPath(),d.moveTo(0,v*_e);const De=16;for(let $e=0;$e<=De;$e++){const dt=$e/De*g,Ce=v*_e+Math.sin($e/De*Math.PI*2+Z*oe+le)*k;$e===0?d.moveTo(dt,Ce):d.lineTo(dt,Ce)}d.lineTo(g,v),d.lineTo(0,v),d.closePath(),d.fillStyle=Ae,d.fill(),d.strokeStyle=Ne,d.lineWidth=1.8,d.stroke(),d.restore()},St=H.horizonHeight||"balanced",de=St==="low"?.08:St==="high"?-.08:0,bt=H.waveStrokeOpacity??1,Je=d.createLinearGradient(0,v*(.46+de),0,v*(.68+de));if(Je.addColorStop(0,"rgba(0, 0, 0, 0)"),G)Je.addColorStop(.5,"rgba(255, 255, 255, 0.25)");else{const _e=Y==="celestial-cyan"?"rgba(7, 31, 53, 0.45)":Y==="supernova-sunset"?"rgba(36, 6, 28, 0.45)":Y==="nocturne-silver"?"rgba(16, 16, 23, 0.45)":Y==="emerald-aurora"?"rgba(5, 46, 20, 0.45)":Y==="pure-pitch-black"?"rgba(6, 6, 6, 0.45)":"rgba(20, 10, 40, 0.45)";Je.addColorStop(.5,_e)}Je.addColorStop(1,"rgba(0, 0, 0, 0)"),d.fillStyle=Je,d.fillRect(0,v*(.46+de),g,v*.22);const nt=d.createLinearGradient(0,v*(.55+de),0,v);nt.addColorStop(0,ye[0]),nt.addColorStop(.5,ye[1]),nt.addColorStop(1,ye[2]);const I=d.createLinearGradient(0,v*(.63+de),0,v);I.addColorStop(0,st[0]),I.addColorStop(.5,st[1]),I.addColorStop(1,st[2]);const T=d.createLinearGradient(0,v*(.71+de),0,v);T.addColorStop(0,Ee[0]),T.addColorStop(.5,Ee[1]),T.addColorStop(1,Ee[2]);const ae=d.createLinearGradient(0,v*(.79+de),0,v);ae.addColorStop(0,Ge[0]),ae.addColorStop(.5,Ge[1]),ae.addColorStop(1,Ge[2]);const Re=d.createLinearGradient(0,v*(.86+de),0,v);Re.addColorStop(0,xt[0]),Re.addColorStop(.35,xt[1]),Re.addColorStop(.7,xt[2]),Re.addColorStop(1,xt[3]);const we=G?"rgba(160, 140, 120, 0.12)":"rgba(0,0,0,0.55)",Ue=G?"rgba(160, 140, 120, 0.16)":"rgba(0,0,0,0.65)",Be=G?"rgba(160, 140, 120, 0.20)":"rgba(0,0,0,0.70)",ve=G?"rgba(160, 140, 120, 0.22)":"rgba(0,0,0,0.75)",Se=G?"rgba(160, 140, 120, 0.26)":"rgba(0,0,0,0.80)";if(Zt==="mountains"?(Jt(.48+de,[.18,.5,.82],[.14,.17,.12],12*q,.35,0,nt,Pe,.8*bt),Wt!=="airy"&&Jt(.58+de,[.32,.66,.9],[.12,.15,.11],14*q,.4,1.5,I,je,.9*bt),Jt(.68+de,[.15,.44,.75],[.11,.13,.1],15*q,.45,3.1,T,Fe,1*bt),Wt==="dense"&&Jt(.78+de,[.28,.6,.86],[.09,.11,.08],14*q,.4,4.4,ae,ct,1.1*bt),Jt(.88+de,[.4,.74],[.08,.07],12*q,.35,5.8,Re,vt,1.2*bt)):Zt==="aurora"?(Et(.28+de*.5,32*q,.45,0,nt,Pe),Wt!=="airy"&&Et(.4+de*.5,30*q,.5,1.6,I,je),Et(.54+de*.5,26*q,.55,3.2,T,Fe),Wt==="dense"&&Et(.68+de*.5,22*q,.6,4.8,ae,ct),Q([.86+de,.89+de,.85+de,.88+de],12*q,.35,6.2,Re,vt,1.2*bt)):Zt==="ocean"?(Q([.62+de,.58+de,.65+de,.6+de],16*q,.65,0,nt,Pe,.8*bt,we,16,-6,[.3]),Wt!=="airy"&&Q([.69+de,.73+de,.67+de,.71+de],18*q,.7,1.8,I,je,.9*bt,Ue,20,-7,[.55]),Q([.76+de,.73+de,.79+de,.75+de],20*q,.75,3.4,T,Fe,1*bt,Be,24,-8,[.38,.82]),Wt==="dense"&&Q([.83+de,.86+de,.81+de,.85+de],16*q,.65,4.9,ae,ct,1.1*bt,ve,28,-9,[.65]),Q([.89+de,.87+de,.92+de,.88+de],14*q,.55,6.2,Re,vt,1.2*bt,Se,32,-10,[.5])):(Q([.48+de,.56+de,.64+de,.68+de],16*q,.38,0,nt,Pe,.8*bt,we,16,-6,[.24,.68]),Wt!=="airy"&&Q([.66+de,.62+de,.55+de,.6+de],18*q,.42,1.8,I,je,.9*bt,Ue,20,-7,[.35,.82]),Q([.69+de,.76+de,.72+de,.76+de],19*q,.46,3.4,T,Fe,1*bt,Be,24,-8,[.42,.78]),Wt==="dense"&&Q([.8+de,.77+de,.84+de,.8+de],16*q,.4,4.9,ae,ct,1.1*bt,ve,28,-9,[.18,.62]),Q([.88+de,.91+de,.86+de,.9+de],13*q,.35,6.2,Re,vt,1.2*bt,Se,32,-10,[.35,.8])),H.showCrossStars){const _e=.68+Math.sin(Z*1.8)*.22,k=.6+Math.sin(Z*1.5+1.2)*.24,oe=.64+Math.sin(Z*1.9+2.5)*.2,le=.58+Math.sin(Z*1.4+3.8)*.25,Ae=.52+Math.sin(Z*1.7+4.6)*.22;F(g*.5,v*.08,11,_e),F(g*.18,v*.16,9.5,k),F(g*.84,v*.2,10,oe),F(g*.72,v*.34,8.5,le),F(g*.08,v*.28,8,Ae)}N(H.shootingStarMode||"occasional"),m=requestAnimationFrame(O)};return m=requestAnimationFrame(O),()=>{cancelAnimationFrame(m),window.removeEventListener("resize",A),window.removeEventListener("mousemove",D),document.removeEventListener("visibilitychange",X)}},[]),f.jsx("canvas",{ref:s,className:"fixed inset-0 pointer-events-none z-0 select-none","aria-hidden":"true"})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _f="187",jv=0,um=1,$v=2,jl=1,Xv=2,io=3,Ts=0,Fn=1,Vi=2,fa=0,ao=1,ws=2,dm=3,fm=4,Yv=5,ua=100,qv=101,Kv=102,Zv=103,Jv=104,Qv=200,e_=201,t_=202,n_=203,d0=204,f0=205,i_=206,r_=207,s_=208,a_=209,o_=210,l_=211,c_=212,u_=213,d_=214,Td=0,Cd=1,Ad=2,co=3,Rd=4,Nd=5,Pd=6,Dd=7,h0=0,f_=1,h_=2,Tr=0,p0=1,m0=2,g0=3,x0=4,v0=5,_0=6,y0=7,S0=300,pa=301,uo=302,Ku=303,Zu=304,ma=1e3,si=1001,Ld=1002,Un=1003,p_=1004,bl=1005,ai=1006,Ju=1007,Qr=1008,gi=1009,b0=1010,w0=1011,fo=1012,yf=1013,sr=1014,nr=1015,ar=1016,Sf=1017,bf=1018,ga=1020,M0=35902,E0=35899,T0=1021,C0=1022,ir=1023,ts=1026,es=1027,A0=1028,wf=1029,Cs=1030,Mf=1031,Ef=1033,$l=33776,Xl=33777,Yl=33778,ql=33779,Id=35840,kd=35841,Ud=35842,Fd=35843,zd=36196,Od=37492,Bd=37496,Hd=37488,Gd=37489,tc=37490,Vd=37491,Wd=37808,jd=37809,$d=37810,Xd=37811,Yd=37812,qd=37813,Kd=37814,Zd=37815,Jd=37816,Qd=37817,ef=37818,tf=37819,nf=37820,rf=37821,sf=36492,af=36494,of=36495,lf=36283,cf=36284,nc=36285,uf=36286,m_=3200,df=0,g_=1,Jr="",mi="srgb",ic="srgb-linear",rc="linear",qt="srgb",Qu=7680,x_=519,v_=512,__=513,y_=514,R0=515,S_=516,b_=517,N0=518,P0=519,w_=35044,hm="300 es",ji=2e3,ho=2001;function M_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function sc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function E_(){const s=sc("canvas");return s.style.display="block",s}const pm={};function mm(...s){const e="THREE."+s.shift();console.log(e,...s)}function D0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function yt(...s){s=D0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function $t(...s){s=D0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Kl(...s){const e=s.join(" ");e in pm||(pm[e]=!0,yt(...s))}function T_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const C_={[Td]:Td,[Ad]:Pd,[Rd]:Rd,[co]:Nd,[Cd]:Cd,[Pd]:Ad,[Dd]:Dd,[Nd]:co};class As{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ed=Math.PI/180,ff=180/Math.PI;function mo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Gn[s&255]+Gn[s>>8&255]+Gn[s>>16&255]+Gn[s>>24&255]+"-"+Gn[e&255]+Gn[e>>8&255]+"-"+Gn[e>>16&15|64]+Gn[e>>24&255]+"-"+Gn[t&63|128]+Gn[t>>8&255]+"-"+Gn[t>>16&255]+Gn[t>>24&255]+Gn[r&255]+Gn[r>>8&255]+Gn[r>>16&255]+Gn[r>>24&255]).toLowerCase()}function Ut(s,e,t){return Math.max(e,Math.min(t,s))}function A_(s,e){return(s%e+e)%e}function td(s,e,t){return(1-t)*s+t*e}function R_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Tf(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function N_(s,e){if(e.constructor===Float32Array)return s;const t=Tf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function P_(s,e){if(e.constructor===Float32Array)return s;const t=Tf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const If=class If{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ut(this.x,e.x,t.x),this.y=Ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ut(this.x,e,t),this.y=Ut(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ut(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ut(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};If.prototype.isVector2=!0;let Lt=If;class _a{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,p){let d=r[o+0],m=r[o+1],g=r[o+2],v=r[o+3],_=l[u+0],w=l[u+1],E=l[u+2],A=l[u+3];if(v!==A||d!==_||m!==w||g!==E){let y=d*_+m*w+g*E+v*A;y<0&&(_=-_,w=-w,E=-E,A=-A,y=-y);let b=1-p;if(y<.9995){const R=Math.acos(y),z=Math.sin(R);b=Math.sin(b*R)/z,p=Math.sin(p*R)/z,d=d*b+_*p,m=m*b+w*p,g=g*b+E*p,v=v*b+A*p}else{d=d*b+_*p,m=m*b+w*p,g=g*b+E*p,v=v*b+A*p;const R=1/Math.sqrt(d*d+m*m+g*g+v*v);d*=R,m*=R,g*=R,v*=R}}e[t]=d,e[t+1]=m,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,l,u){const p=r[o],d=r[o+1],m=r[o+2],g=r[o+3],v=l[u],_=l[u+1],w=l[u+2],E=l[u+3];return e[t]=p*E+g*v+d*w-m*_,e[t+1]=d*E+g*_+m*v-p*w,e[t+2]=m*E+g*w+p*_-d*v,e[t+3]=g*E-p*v-d*_-m*w,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,p=Math.cos,d=Math.sin,m=p(r/2),g=p(o/2),v=p(l/2),_=d(r/2),w=d(o/2),E=d(l/2);switch(u){case"XYZ":this._x=_*g*v+m*w*E,this._y=m*w*v-_*g*E,this._z=m*g*E+_*w*v,this._w=m*g*v-_*w*E;break;case"YXZ":this._x=_*g*v+m*w*E,this._y=m*w*v-_*g*E,this._z=m*g*E-_*w*v,this._w=m*g*v+_*w*E;break;case"ZXY":this._x=_*g*v-m*w*E,this._y=m*w*v+_*g*E,this._z=m*g*E+_*w*v,this._w=m*g*v-_*w*E;break;case"ZYX":this._x=_*g*v-m*w*E,this._y=m*w*v+_*g*E,this._z=m*g*E-_*w*v,this._w=m*g*v+_*w*E;break;case"YZX":this._x=_*g*v+m*w*E,this._y=m*w*v+_*g*E,this._z=m*g*E-_*w*v,this._w=m*g*v-_*w*E;break;case"XZY":this._x=_*g*v-m*w*E,this._y=m*w*v-_*g*E,this._z=m*g*E+_*w*v,this._w=m*g*v+_*w*E;break;default:yt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],p=t[5],d=t[9],m=t[2],g=t[6],v=t[10],_=r+p+v;if(_>0){const w=.5/Math.sqrt(_+1);this._w=.25/w,this._x=(g-d)*w,this._y=(l-m)*w,this._z=(u-o)*w}else if(r>p&&r>v){const w=2*Math.sqrt(1+r-p-v);this._w=(g-d)/w,this._x=.25*w,this._y=(o+u)/w,this._z=(l+m)/w}else if(p>v){const w=2*Math.sqrt(1+p-r-v);this._w=(l-m)/w,this._x=(o+u)/w,this._y=.25*w,this._z=(d+g)/w}else{const w=2*Math.sqrt(1+v-r-p);this._w=(u-o)/w,this._x=(l+m)/w,this._y=(d+g)/w,this._z=.25*w}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,p=t._x,d=t._y,m=t._z,g=t._w;return this._x=r*g+u*p+o*m-l*d,this._y=o*g+u*d+l*p-r*m,this._z=l*g+u*m+r*d-o*p,this._w=u*g-r*p-o*d-l*m,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,p=this.dot(e);p<0&&(r=-r,o=-o,l=-l,u=-u,p=-p);let d=1-t;if(p<.9995){const m=Math.acos(p),g=Math.sin(m);d=Math.sin(d*m)/g,t=Math.sin(t*m)/g,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+u*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const kf=class kf{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,p=e.z,d=e.w,m=2*(u*o-p*r),g=2*(p*t-l*o),v=2*(l*r-u*t);return this.x=t+d*m+u*v-p*g,this.y=r+d*g+p*m-l*v,this.z=o+d*v+l*g-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ut(this.x,e.x,t.x),this.y=Ut(this.y,e.y,t.y),this.z=Ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ut(this.x,e,t),this.y=Ut(this.y,e,t),this.z=Ut(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ut(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,p=t.y,d=t.z;return this.x=o*d-l*p,this.y=l*u-r*d,this.z=r*p-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return nd.copy(this).projectOnVector(e),this.sub(nd)}reflect(e){return this.sub(nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ut(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};kf.prototype.isVector3=!0;let he=kf;const nd=new he,gm=new _a,Uf=class Uf{constructor(e,t,r,o,l,u,p,d,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,p,d,m)}set(e,t,r,o,l,u,p,d,m){const g=this.elements;return g[0]=e,g[1]=o,g[2]=p,g[3]=t,g[4]=l,g[5]=d,g[6]=r,g[7]=u,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],p=r[3],d=r[6],m=r[1],g=r[4],v=r[7],_=r[2],w=r[5],E=r[8],A=o[0],y=o[3],b=o[6],R=o[1],z=o[4],D=o[7],F=o[2],L=o[5],M=o[8];return l[0]=u*A+p*R+d*F,l[3]=u*y+p*z+d*L,l[6]=u*b+p*D+d*M,l[1]=m*A+g*R+v*F,l[4]=m*y+g*z+v*L,l[7]=m*b+g*D+v*M,l[2]=_*A+w*R+E*F,l[5]=_*y+w*z+E*L,l[8]=_*b+w*D+E*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],p=e[5],d=e[6],m=e[7],g=e[8];return t*u*g-t*p*m-r*l*g+r*p*d+o*l*m-o*u*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],p=e[5],d=e[6],m=e[7],g=e[8],v=g*u-p*m,_=p*d-g*l,w=m*l-u*d,E=t*v+r*_+o*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=v*A,e[1]=(o*m-g*r)*A,e[2]=(p*r-o*u)*A,e[3]=_*A,e[4]=(g*t-o*d)*A,e[5]=(o*l-p*t)*A,e[6]=w*A,e[7]=(r*d-m*t)*A,e[8]=(u*t-r*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,p){const d=Math.cos(l),m=Math.sin(l);return this.set(r*d,r*m,-r*(d*u+m*p)+u+e,-o*m,o*d,-o*(-m*u+d*p)+p+t,0,0,1),this}scale(e,t){return Kl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(id.makeScale(e,t)),this}rotate(e){return Kl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(id.makeRotation(-e)),this}translate(e,t){return Kl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(id.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Uf.prototype.isMatrix3=!0;let wt=Uf;const id=new wt,xm=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vm=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function D_(){const s={enabled:!0,workingColorSpace:ic,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===qt&&(o.r=Cr(o.r),o.g=Cr(o.g),o.b=Cr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===qt&&(o.r=ha(o.r),o.g=ha(o.g),o.b=ha(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Jr?rc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[u].fromXYZ).multiply(this.spaces[l].toXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[ic]:{primaries:e,whitePoint:r,transfer:rc,toXYZ:xm,fromXYZ:vm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:r,transfer:qt,toXYZ:xm,fromXYZ:vm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),s}const kt=D_();function Cr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ha(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Js;class L_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Js===void 0&&(Js=sc("canvas")),Js.width=e.width,Js.height=e.height;const o=Js.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Js}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Cr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Cr(t[r]/255)*255):t[r]=Cr(t[r]);return{data:t,width:e.width,height:e.height}}else return yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let I_=0;class Cf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=mo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,p=o.length;u<p;u++)o[u].isDataTexture?l.push(rd(o[u].image)):l.push(rd(o[u]))}else l=rd(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function rd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?L_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(yt("Texture: Unable to serialize Texture."),{})}let k_=0;const sd=new he;class Wn extends As{constructor(e=Wn.DEFAULT_IMAGE,t=Wn.DEFAULT_MAPPING,r=si,o=si,l=ai,u=Qr,p=ir,d=gi,m=Wn.DEFAULT_ANISOTROPY,g=Jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=mo(),this.name="",this.source=new Cf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=p,this.internalFormat=null,this.type=d,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(sd).x}get height(){return this.source.getSize(sd).y}get depth(){return this.source.getSize(sd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){yt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){yt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==S0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ma:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case Ld:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ma:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case Ld:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=S0;Wn.DEFAULT_ANISOTROPY=1;const Ff=class Ff{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,m=d[0],g=d[4],v=d[8],_=d[1],w=d[5],E=d[9],A=d[2],y=d[6],b=d[10];if(Math.abs(g-_)<.01&&Math.abs(v-A)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+A)<.1&&Math.abs(E+y)<.1&&Math.abs(m+w+b-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const z=(m+1)/2,D=(w+1)/2,F=(b+1)/2,L=(g+_)/4,M=(v+A)/4,N=(E+y)/4;return z>D&&z>F?z<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(z),o=L/r,l=M/r):D>F?D<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(D),r=L/o,l=N/o):F<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(F),r=M/l,o=N/l),this.set(r,o,l,t),this}let R=Math.sqrt((y-E)*(y-E)+(v-A)*(v-A)+(_-g)*(_-g));return Math.abs(R)<.001&&(R=1),this.x=(y-E)/R,this.y=(v-A)/R,this.z=(_-g)/R,this.w=Math.acos((m+w+b-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ut(this.x,e.x,t.x),this.y=Ut(this.y,e.y,t.y),this.z=Ut(this.z,e.z,t.z),this.w=Ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ut(this.x,e,t),this.y=Ut(this.y,e,t),this.z=Ut(this.z,e,t),this.w=Ut(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ut(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ff.prototype.isVector4=!0;let dn=Ff;class U_ extends As{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new dn(0,0,e,t),this.scissorTest=!1,this.viewport=new dn(0,0,e,t),this.textures=[];const o=r.count;for(let l=0;l<o;l++)this.textures[l]=new Wn({width:e,height:t,depth:r.depth}),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:ai,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Cf(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rr extends U_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class L0 extends Wn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Un,this.minFilter=Un,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class F_ extends Wn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Un,this.minFilter=Un,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const dc=class dc{constructor(e,t,r,o,l,u,p,d,m,g,v,_,w,E,A,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,p,d,m,g,v,_,w,E,A,y)}set(e,t,r,o,l,u,p,d,m,g,v,_,w,E,A,y){const b=this.elements;return b[0]=e,b[4]=t,b[8]=r,b[12]=o,b[1]=l,b[5]=u,b[9]=p,b[13]=d,b[2]=m,b[6]=g,b[10]=v,b[14]=_,b[3]=w,b[7]=E,b[11]=A,b[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Qs.setFromMatrixColumn(e,0).length(),l=1/Qs.setFromMatrixColumn(e,1).length(),u=1/Qs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),p=Math.sin(r),d=Math.cos(o),m=Math.sin(o),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const _=u*g,w=u*v,E=p*g,A=p*v;t[0]=d*g,t[4]=-d*v,t[8]=m,t[1]=w+E*m,t[5]=_-A*m,t[9]=-p*d,t[2]=A-_*m,t[6]=E+w*m,t[10]=u*d}else if(e.order==="YXZ"){const _=d*g,w=d*v,E=m*g,A=m*v;t[0]=_+A*p,t[4]=E*p-w,t[8]=u*m,t[1]=u*v,t[5]=u*g,t[9]=-p,t[2]=w*p-E,t[6]=A+_*p,t[10]=u*d}else if(e.order==="ZXY"){const _=d*g,w=d*v,E=m*g,A=m*v;t[0]=_-A*p,t[4]=-u*v,t[8]=E+w*p,t[1]=w+E*p,t[5]=u*g,t[9]=A-_*p,t[2]=-u*m,t[6]=p,t[10]=u*d}else if(e.order==="ZYX"){const _=u*g,w=u*v,E=p*g,A=p*v;t[0]=d*g,t[4]=E*m-w,t[8]=_*m+A,t[1]=d*v,t[5]=A*m+_,t[9]=w*m-E,t[2]=-m,t[6]=p*d,t[10]=u*d}else if(e.order==="YZX"){const _=u*d,w=u*m,E=p*d,A=p*m;t[0]=d*g,t[4]=A-_*v,t[8]=E*v+w,t[1]=v,t[5]=u*g,t[9]=-p*g,t[2]=-m*g,t[6]=w*v+E,t[10]=_-A*v}else if(e.order==="XZY"){const _=u*d,w=u*m,E=p*d,A=p*m;t[0]=d*g,t[4]=-v,t[8]=m*g,t[1]=_*v+A,t[5]=u*g,t[9]=w*v-E,t[2]=E*v-w,t[6]=p*g,t[10]=A*v+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(z_,e,O_)}lookAt(e,t,r){const o=this.elements;return hi.subVectors(e,t),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),jr.crossVectors(r,hi),jr.lengthSq()===0&&(Math.abs(r.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),jr.crossVectors(r,hi)),jr.normalize(),wl.crossVectors(hi,jr),o[0]=jr.x,o[4]=wl.x,o[8]=hi.x,o[1]=jr.y,o[5]=wl.y,o[9]=hi.y,o[2]=jr.z,o[6]=wl.z,o[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],p=r[4],d=r[8],m=r[12],g=r[1],v=r[5],_=r[9],w=r[13],E=r[2],A=r[6],y=r[10],b=r[14],R=r[3],z=r[7],D=r[11],F=r[15],L=o[0],M=o[4],N=o[8],Z=o[12],B=o[1],X=o[5],O=o[9],H=o[13],$=o[2],j=o[6],ce=o[10],te=o[14],q=o[3],Y=o[7],G=o[11],P=o[15];return l[0]=u*L+p*B+d*$+m*q,l[4]=u*M+p*X+d*j+m*Y,l[8]=u*N+p*O+d*ce+m*G,l[12]=u*Z+p*H+d*te+m*P,l[1]=g*L+v*B+_*$+w*q,l[5]=g*M+v*X+_*j+w*Y,l[9]=g*N+v*O+_*ce+w*G,l[13]=g*Z+v*H+_*te+w*P,l[2]=E*L+A*B+y*$+b*q,l[6]=E*M+A*X+y*j+b*Y,l[10]=E*N+A*O+y*ce+b*G,l[14]=E*Z+A*H+y*te+b*P,l[3]=R*L+z*B+D*$+F*q,l[7]=R*M+z*X+D*j+F*Y,l[11]=R*N+z*O+D*ce+F*G,l[15]=R*Z+z*H+D*te+F*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],p=e[5],d=e[9],m=e[13],g=e[2],v=e[6],_=e[10],w=e[14],E=e[3],A=e[7],y=e[11],b=e[15],R=d*w-m*_,z=p*w-m*v,D=p*_-d*v,F=u*w-m*g,L=u*_-d*g,M=u*v-p*g;return t*(A*R-y*z+b*D)-r*(E*R-y*F+b*L)+o*(E*z-A*F+b*M)-l*(E*D-A*L+y*M)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],u=e[5],p=e[9],d=e[2],m=e[6],g=e[10];return t*(u*g-p*m)-r*(l*g-p*d)+o*(l*m-u*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],p=e[5],d=e[6],m=e[7],g=e[8],v=e[9],_=e[10],w=e[11],E=e[12],A=e[13],y=e[14],b=e[15],R=t*p-r*u,z=t*d-o*u,D=t*m-l*u,F=r*d-o*p,L=r*m-l*p,M=o*m-l*d,N=g*A-v*E,Z=g*y-_*E,B=g*b-w*E,X=v*y-_*A,O=v*b-w*A,H=_*b-w*y,$=R*H-z*O+D*X+F*B-L*Z+M*N;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/$;return e[0]=(p*H-d*O+m*X)*j,e[1]=(o*O-r*H-l*X)*j,e[2]=(A*M-y*L+b*F)*j,e[3]=(_*L-v*M-w*F)*j,e[4]=(d*B-u*H-m*Z)*j,e[5]=(t*H-o*B+l*Z)*j,e[6]=(y*D-E*M-b*z)*j,e[7]=(g*M-_*D+w*z)*j,e[8]=(u*O-p*B+m*N)*j,e[9]=(r*B-t*O-l*N)*j,e[10]=(E*L-A*D+b*R)*j,e[11]=(v*D-g*L-w*R)*j,e[12]=(p*Z-u*X-d*N)*j,e[13]=(t*X-r*Z+o*N)*j,e[14]=(A*z-E*F-y*R)*j,e[15]=(g*F-v*z+_*R)*j,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,p=e.y,d=e.z,m=l*u,g=l*p;return this.set(m*u+r,m*p-o*d,m*d+o*p,0,m*p+o*d,g*p+r,g*d-o*u,0,m*d-o*p,g*d+o*u,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,p=t._z,d=t._w,m=l+l,g=u+u,v=p+p,_=l*m,w=l*g,E=l*v,A=u*g,y=u*v,b=p*v,R=d*m,z=d*g,D=d*v,F=r.x,L=r.y,M=r.z;return o[0]=(1-(A+b))*F,o[1]=(w+D)*F,o[2]=(E-z)*F,o[3]=0,o[4]=(w-D)*L,o[5]=(1-(_+b))*L,o[6]=(y+R)*L,o[7]=0,o[8]=(E+z)*M,o[9]=(y-R)*M,o[10]=(1-(_+A))*M,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=Qs.set(o[0],o[1],o[2]).length();const p=Qs.set(o[4],o[5],o[6]).length(),d=Qs.set(o[8],o[9],o[10]).length();l<0&&(u=-u),Ui.copy(this);const m=1/u,g=1/p,v=1/d;return Ui.elements[0]*=m,Ui.elements[1]*=m,Ui.elements[2]*=m,Ui.elements[4]*=g,Ui.elements[5]*=g,Ui.elements[6]*=g,Ui.elements[8]*=v,Ui.elements[9]*=v,Ui.elements[10]*=v,t.setFromRotationMatrix(Ui),r.x=u,r.y=p,r.z=d,this}makePerspective(e,t,r,o,l,u,p=ji,d=!1){const m=this.elements,g=2*l/(t-e),v=2*l/(r-o),_=(t+e)/(t-e),w=(r+o)/(r-o);let E,A;if(d)E=l/(u-l),A=u*l/(u-l);else if(p===ji)E=-(u+l)/(u-l),A=-2*u*l/(u-l);else if(p===ho)E=-u/(u-l),A=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return m[0]=g,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=v,m[9]=w,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,o,l,u,p=ji,d=!1){const m=this.elements,g=2/(t-e),v=2/(r-o),_=-(t+e)/(t-e),w=-(r+o)/(r-o);let E,A;if(d)E=1/(u-l),A=u/(u-l);else if(p===ji)E=-2/(u-l),A=-(u+l)/(u-l);else if(p===ho)E=-1/(u-l),A=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return m[0]=g,m[4]=0,m[8]=0,m[12]=_,m[1]=0,m[5]=v,m[9]=0,m[13]=w,m[2]=0,m[6]=0,m[10]=E,m[14]=A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};dc.prototype.isMatrix4=!0;let fn=dc;const Qs=new he,Ui=new fn,z_=new he(0,0,0),O_=new he(1,1,1),jr=new he,wl=new he,hi=new he,_m=new fn,ym=new _a;class ns{constructor(e=0,t=0,r=0,o=ns.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],p=o[8],d=o[1],m=o[5],g=o[9],v=o[2],_=o[6],w=o[10];switch(t){case"XYZ":this._y=Math.asin(Ut(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,w),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(p,w),this._z=Math.atan2(d,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,w),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Ut(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,w),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(p,w));break;case"XZY":this._z=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(p,l)):(this._x=Math.atan2(-g,w),this._y=0);break;default:yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return _m.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_m,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ym.setFromEuler(this),this.setFromQuaternion(ym,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ns.DEFAULT_ORDER="XYZ";class I0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let B_=0;const Sm=new he,ea=new _a,xr=new fn,Ml=new he,Ja=new he,H_=new he,G_=new _a,bm=new he(1,0,0),wm=new he(0,1,0),Mm=new he(0,0,1),Em={type:"added"},V_={type:"removed"},ta={type:"childadded",child:null},ad={type:"childremoved",child:null};class jn extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const e=new he,t=new ns,r=new _a,o=new he(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new fn},normalMatrix:{value:new wt}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new I0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ea.setFromAxisAngle(e,t),this.quaternion.multiply(ea),this}rotateOnWorldAxis(e,t){return ea.setFromAxisAngle(e,t),this.quaternion.premultiply(ea),this}rotateX(e){return this.rotateOnAxis(bm,e)}rotateY(e){return this.rotateOnAxis(wm,e)}rotateZ(e){return this.rotateOnAxis(Mm,e)}translateOnAxis(e,t){return Sm.copy(e).applyQuaternion(this.quaternion),this.position.add(Sm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bm,e)}translateY(e){return this.translateOnAxis(wm,e)}translateZ(e){return this.translateOnAxis(Mm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Ml.copy(e):Ml.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ja.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xr.lookAt(Ja,Ml,this.up):xr.lookAt(Ml,Ja,this.up),this.quaternion.setFromRotationMatrix(xr),o&&(xr.extractRotation(o.matrixWorld),ea.setFromRotationMatrix(xr),this.quaternion.premultiply(ea.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($t("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Em),ta.child=e,this.dispatchEvent(ta),ta.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(V_),ad.child=e,this.dispatchEvent(ad),ad.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xr.multiply(e.parent.matrixWorld)),e.applyMatrix4(xr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Em),ta.child=e,this.dispatchEvent(ta),ta.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ja,e,H_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ja,G_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,p=l.length;u<p;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(p=>({...p})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(p,d){return p[d.uuid]===void 0&&(p[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const d=p.shapes;if(Array.isArray(d))for(let m=0,g=d.length;m<g;m++){const v=d[m];l(e.shapes,v)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let d=0,m=this.material.length;d<m;d++)p.push(l(e.materials,this.material[d]));o.material=p}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let p=0;p<this.children.length;p++)o.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let p=0;p<this.animations.length;p++){const d=this.animations[p];o.animations.push(l(e.animations,d))}}if(t){const p=u(e.geometries),d=u(e.materials),m=u(e.textures),g=u(e.images),v=u(e.shapes),_=u(e.skeletons),w=u(e.animations),E=u(e.nodes);p.length>0&&(r.geometries=p),d.length>0&&(r.materials=d),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),w.length>0&&(r.animations=w),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(p){const d=[];for(const m in p){const g=p[m];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}jn.DEFAULT_UP=new he(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ro extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const W_={type:"move"};class od{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ro,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ro,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new he,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new he),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ro,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new he,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new he,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const p=this._targetRay,d=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const A of e.hand.values()){const y=t.getJointPose(A,r),b=this._getHandJoint(m,A);y!==null&&(b.matrix.fromArray(y.transform.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale),b.matrixWorldNeedsUpdate=!0,b.jointRadius=y.radius),b.visible=y!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],_=g.position.distanceTo(v.position),w=.02,E=.005;m.inputState.pinching&&_>w+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&_<=w-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(W_)))}return p!==null&&(p.visible=o!==null),d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ro;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const k0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$r={h:0,s:0,l:0},El={h:0,s:0,l:0};function ld(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Dt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=kt.workingColorSpace){return this.r=e,this.g=t,this.b=r,kt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=kt.workingColorSpace){if(e=A_(e,1),t=Ut(t,0,1),r=Ut(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=ld(u,l,e+1/3),this.g=ld(u,l,e),this.b=ld(u,l,e-1/3)}return kt.colorSpaceToWorking(this,o),this}setStyle(e,t=mi){function r(l){l!==void 0&&parseFloat(l)<1&&yt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],p=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(p))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(p))return r(l[4]),this.setRGB(Math.min(100,parseFloat(l[1]))/100,Math.min(100,parseFloat(l[2]))/100,Math.min(100,parseFloat(l[3]))/100,t);break;case"hsl":case"hsla":if(l=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(p))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:yt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);yt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mi){const r=k0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):yt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}copyLinearToSRGB(e){return this.r=ha(e.r),this.g=ha(e.g),this.b=ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return kt.workingToColorSpace(Vn.copy(this),e),Math.round(Ut(Vn.r*255,0,255))*65536+Math.round(Ut(Vn.g*255,0,255))*256+Math.round(Ut(Vn.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=kt.workingColorSpace){kt.workingToColorSpace(Vn.copy(this),t);const r=Vn.r,o=Vn.g,l=Vn.b,u=Math.max(r,o,l),p=Math.min(r,o,l);let d,m;const g=(p+u)/2;if(p===u)d=0,m=0;else{const v=u-p;switch(m=g<=.5?v/(u+p):v/(2-u-p),u){case r:d=(o-l)/v+(o<l?6:0);break;case o:d=(l-r)/v+2;break;case l:d=(r-o)/v+4;break}d/=6}return e.h=d,e.s=m,e.l=g,e}getRGB(e,t=kt.workingColorSpace){return kt.workingToColorSpace(Vn.copy(this),t),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=mi){kt.workingToColorSpace(Vn.copy(this),e);const t=Vn.r,r=Vn.g,o=Vn.b;return e!==mi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL($r),this.setHSL($r.h+e,$r.s+t,$r.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL($r),e.getHSL(El);const r=td($r.h,El.h,t),o=td($r.s,El.s,t),l=td($r.l,El.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new Dt;Dt.NAMES=k0;class j_ extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ns,this.environmentIntensity=1,this.environmentRotation=new ns,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Fi=new he,vr=new he,cd=new he,_r=new he,na=new he,ia=new he,Tm=new he,ud=new he,dd=new he,fd=new he,hd=new dn,pd=new dn,md=new dn;class Wi{constructor(e=new he,t=new he,r=new he){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Fi.subVectors(e,t),o.cross(Fi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Fi.subVectors(o,t),vr.subVectors(r,t),cd.subVectors(e,t);const u=Fi.dot(Fi),p=Fi.dot(vr),d=Fi.dot(cd),m=vr.dot(vr),g=vr.dot(cd),v=u*m-p*p;if(v===0)return l.set(0,0,0),null;const _=1/v,w=(m*d-p*g)*_,E=(u*g-p*d)*_;return l.set(1-w-E,E,w)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,_r)===null?!1:_r.x>=0&&_r.y>=0&&_r.x+_r.y<=1}static getInterpolation(e,t,r,o,l,u,p,d){return this.getBarycoord(e,t,r,o,_r)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,_r.x),d.addScaledVector(u,_r.y),d.addScaledVector(p,_r.z),d)}static getInterpolatedAttribute(e,t,r,o,l,u){return hd.setScalar(0),pd.setScalar(0),md.setScalar(0),hd.fromBufferAttribute(e,t),pd.fromBufferAttribute(e,r),md.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(hd,l.x),u.addScaledVector(pd,l.y),u.addScaledVector(md,l.z),u}static isFrontFacing(e,t,r,o){return Fi.subVectors(r,t),vr.subVectors(e,t),Fi.cross(vr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),vr.subVectors(this.a,this.b),Fi.cross(vr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Wi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,p;na.subVectors(o,r),ia.subVectors(l,r),ud.subVectors(e,r);const d=na.dot(ud),m=ia.dot(ud);if(d<=0&&m<=0)return t.copy(r);dd.subVectors(e,o);const g=na.dot(dd),v=ia.dot(dd);if(g>=0&&v<=g)return t.copy(o);const _=d*v-g*m;if(_<=0&&d>=0&&g<=0&&d-g>0)return u=d/(d-g),t.copy(r).addScaledVector(na,u);fd.subVectors(e,l);const w=na.dot(fd),E=ia.dot(fd);if(E>=0&&w<=E)return t.copy(l);const A=w*m-d*E;if(A<=0&&m>=0&&E<=0)return p=m/(m-E),t.copy(r).addScaledVector(ia,p);const y=g*E-w*v;if(y<=0&&v-g>=0&&w-E>=0)return Tm.subVectors(l,o),p=(v-g)/(v-g+(w-E)),t.copy(o).addScaledVector(Tm,p);const b=1/(y+A+_);return u=A*b,p=_*b,t.copy(r).addScaledVector(na,u).addScaledVector(ia,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class go{constructor(e=new he(1/0,1/0,1/0),t=new he(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let u=0,p=l.count;u<p;u++)e.isMesh===!0?e.getVertexPosition(u,zi):zi.fromBufferAttribute(l,u),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Tl.copy(r.boundingBox)),Tl.applyMatrix4(e.matrixWorld),this.union(Tl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qa),Cl.subVectors(this.max,Qa),ra.subVectors(e.a,Qa),sa.subVectors(e.b,Qa),aa.subVectors(e.c,Qa),Xr.subVectors(sa,ra),Yr.subVectors(aa,sa),vs.subVectors(ra,aa);let t=[0,-Xr.z,Xr.y,0,-Yr.z,Yr.y,0,-vs.z,vs.y,Xr.z,0,-Xr.x,Yr.z,0,-Yr.x,vs.z,0,-vs.x,-Xr.y,Xr.x,0,-Yr.y,Yr.x,0,-vs.y,vs.x,0];return!gd(t,ra,sa,aa,Cl)||(t=[1,0,0,0,1,0,0,0,1],!gd(t,ra,sa,aa,Cl))?!1:(Al.crossVectors(Xr,Yr),t=[Al.x,Al.y,Al.z],gd(t,ra,sa,aa,Cl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yr=[new he,new he,new he,new he,new he,new he,new he,new he],zi=new he,Tl=new go,ra=new he,sa=new he,aa=new he,Xr=new he,Yr=new he,vs=new he,Qa=new he,Cl=new he,Al=new he,_s=new he;function gd(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){_s.fromArray(s,l);const p=o.x*Math.abs(_s.x)+o.y*Math.abs(_s.y)+o.z*Math.abs(_s.z),d=e.dot(_s),m=t.dot(_s),g=r.dot(_s);if(Math.max(-Math.max(d,m,g),Math.min(d,m,g))>p)return!1}return!0}const yn=new he,Rl=new Lt;let $_=0;class Ms extends As{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=w_,this.updateRanges=[],this.gpuType=nr,this.version=0,this._normalizationScale=e!==void 0?Tf(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Rl.fromBufferAttribute(this,t),Rl.applyMatrix3(e),this.setXY(t,Rl.x,Rl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix3(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):N_(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):P_(e,this.array)}}class U0 extends Ms{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class F0 extends Ms{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Pn extends Ms{constructor(e,t,r){super(new Float32Array(e),t,r)}}const X_=new go,eo=new he,xd=new he;class Af{constructor(e=new he,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):X_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);const t=eo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(eo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(xd)),this.expandByPoint(eo.copy(e.center).sub(xd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Y_=0;const Ei=new fn,vd=new jn,oa=new he,pi=new go,to=new go,Nn=new he;class or extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=mo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(M_(e)?F0:U0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new wt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,t,r){return Ei.makeTranslation(e,t,r),this.applyMatrix4(Ei),this}scale(e,t,r){return Ei.makeScale(e,t,r),this.applyMatrix4(Ei),this}lookAt(e){return vd.lookAt(e),vd.updateMatrix(),this.applyMatrix4(vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oa).negate(),this.translate(oa.x,oa.y,oa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Pn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new go);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new he(-1/0,-1/0,-1/0),new he(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];pi.setFromBufferAttribute(l),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Af);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new he,1/0);return}if(e){const r=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const p=t[l];to.setFromBufferAttribute(p),this.morphTargetsRelative?(Nn.addVectors(pi.min,to.min),pi.expandByPoint(Nn),Nn.addVectors(pi.max,to.max),pi.expandByPoint(Nn)):(pi.expandByPoint(to.min),pi.expandByPoint(to.max))}pi.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)Nn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Nn));if(t)for(let l=0,u=t.length;l<u;l++){const p=t[l],d=this.morphTargetsRelative;for(let m=0,g=p.count;m<g;m++)Nn.fromBufferAttribute(p,m),d&&(oa.fromBufferAttribute(e,m),Nn.add(oa)),o=Math.max(o,r.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Ms(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const p=[],d=[],m=new Uint8Array(r.count);for(let Z=0;Z<r.count;Z++)p[Z]=new he,d[Z]=new he;const g=new he,v=new he,_=new he,w=new Lt,E=new Lt,A=new Lt,y=new he,b=new he;function R(Z,B,X){m[Z]=m[B]=m[X]=1,g.fromBufferAttribute(r,Z),v.fromBufferAttribute(r,B),_.fromBufferAttribute(r,X),w.fromBufferAttribute(l,Z),E.fromBufferAttribute(l,B),A.fromBufferAttribute(l,X),v.sub(g),_.sub(g),E.sub(w),A.sub(w);const O=1/(E.x*A.y-A.x*E.y);isFinite(O)&&(y.copy(v).multiplyScalar(A.y).addScaledVector(_,-E.y).multiplyScalar(O),b.copy(_).multiplyScalar(E.x).addScaledVector(v,-A.x).multiplyScalar(O),p[Z].add(y),p[B].add(y),p[X].add(y),d[Z].add(b),d[B].add(b),d[X].add(b))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let Z=0,B=z.length;Z<B;++Z){const X=z[Z],O=X.start,H=X.count;for(let $=O,j=O+H;$<j;$+=3)R(e.getX($+0),e.getX($+1),e.getX($+2))}const D=new he,F=new he,L=new he,M=new he;function N(Z){L.fromBufferAttribute(o,Z),M.copy(L);const B=p[Z];D.copy(B),D.sub(L.multiplyScalar(L.dot(B))).normalize(),F.crossVectors(M,B);const O=F.dot(d[Z])<0?-1:1;u.setXYZW(Z,D.x,D.y,D.z,O)}for(let Z=0,B=r.count;Z<B;++Z)m[Z]&&N(Z);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new Ms(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,w=r.count;_<w;_++)r.setXYZ(_,0,0,0);const o=new he,l=new he,u=new he,p=new he,d=new he,m=new he,g=new he,v=new he;if(e)for(let _=0,w=e.count;_<w;_+=3){const E=e.getX(_+0),A=e.getX(_+1),y=e.getX(_+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,A),u.fromBufferAttribute(t,y),g.subVectors(u,l),v.subVectors(o,l),g.cross(v),p.fromBufferAttribute(r,E),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,y),p.add(g),d.add(g),m.add(g),r.setXYZ(E,p.x,p.y,p.z),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let _=0,w=t.count;_<w;_+=3)o.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),g.subVectors(u,l),v.subVectors(o,l),g.cross(v),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Nn.fromBufferAttribute(e,t),Nn.normalize(),e.setXYZ(t,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function e(p,d){const m=p.array,g=p.itemSize,v=p.normalized,_=new m.constructor(d.length*g);let w=0,E=0;for(let A=0,y=d.length;A<y;A++){p.isInterleavedBufferAttribute?w=d[A]*p.data.stride+p.offset:w=d[A]*g;for(let b=0;b<g;b++)_[E++]=m[w++]}return new Ms(_,g,v)}if(this.index===null)return yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new or,r=this.index.array,o=this.attributes;for(const p in o){const d=o[p],m=e(d,r);t.setAttribute(p,m)}const l=this.morphAttributes;for(const p in l){const d=[],m=l[p];for(let g=0,v=m.length;g<v;g++){const _=m[g],w=e(_,r);d.push(w)}t.morphAttributes[p]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let p=0,d=u.length;p<d;p++){const m=u[p];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const m in d)d[m]!==void 0&&(e[m]=d[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const m=r[d];e.data.attributes[d]=m.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const m=this.morphAttributes[d],g=[];for(let v=0,_=m.length;v<_;v++){const w=m[v];g.push(w.toJSON(e.data))}g.length>0&&(o[d]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const g=o[m];this.setAttribute(m,g.clone(t))}const l=e.morphAttributes;for(const m in l){const g=[],v=l[m];for(let _=0,w=v.length;_<w;_++)g.push(v[_].clone(t));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,g=u.length;m<g;m++){const v=u[m];this.addGroup(v.start,v.count,v.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _d=new he,q_=new he,K_=new wt;class Zr{constructor(e=new he(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=_d.subVectors(r,t).cross(q_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(_d),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||K_.getNormalMatrix(e),o=this.coplanarPoint(_d).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Z_=0;class xo extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=mo(),this.name="",this.type="Material",this.blending=ao,this.side=Ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=d0,this.blendDst=f0,this.blendEquation=ua,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=x_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qu,this.stencilZFail=Qu,this.stencilZPass=Qu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){yt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){yt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const p in l){const d=l[p];delete d.metadata,u.push(d)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Dt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Zr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Lt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Sr=new he,yd=new he,Nl=new he,Pl=new he;class J_{constructor(e=new he,t=new he(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sr.copy(this.origin).addScaledVector(this.direction,t),Sr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){yd.copy(e).add(t).multiplyScalar(.5),Nl.copy(t).sub(e).normalize(),Pl.copy(this.origin).sub(yd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Nl),p=Pl.dot(this.direction),d=-Pl.dot(Nl),m=Pl.lengthSq(),g=Math.abs(1-u*u);let v,_,w,E;if(g>0)if(v=u*d-p,_=u*p-d,E=l*g,v>=0)if(_>=-E)if(_<=E){const A=1/g;v*=A,_*=A,w=v*(v+u*_+2*p)+_*(u*v+_+2*d)+m}else _=l,v=Math.max(0,-(u*_+p)),w=-v*v+_*(_+2*d)+m;else _=-l,v=Math.max(0,-(u*_+p)),w=-v*v+_*(_+2*d)+m;else _<=-E?(v=Math.max(0,-(-u*l+p)),_=v>0?-l:Math.min(Math.max(-l,-d),l),w=-v*v+_*(_+2*d)+m):_<=E?(v=0,_=Math.min(Math.max(-l,-d),l),w=_*(_+2*d)+m):(v=Math.max(0,-(u*l+p)),_=v>0?l:Math.min(Math.max(-l,-d),l),w=-v*v+_*(_+2*d)+m);else _=u>0?-l:l,v=Math.max(0,-(u*_+p)),w=-v*v+_*(_+2*d)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(yd).addScaledVector(Nl,_),w}intersectSphere(e,t){if(e.radius<0)return null;Sr.subVectors(e.center,this.origin);const r=Sr.dot(this.direction),o=Sr.dot(Sr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),p=r-u,d=r+u;return d<0?null:p<0?this.at(d,t):this.at(p,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,p,d;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return m>=0?(r=(e.min.x-_.x)*m,o=(e.max.x-_.x)*m):(r=(e.max.x-_.x)*m,o=(e.min.x-_.x)*m),g>=0?(l=(e.min.y-_.y)*g,u=(e.max.y-_.y)*g):(l=(e.max.y-_.y)*g,u=(e.min.y-_.y)*g),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),v>=0?(p=(e.min.z-_.z)*v,d=(e.max.z-_.z)*v):(p=(e.max.z-_.z)*v,d=(e.min.z-_.z)*v),r>d||p>o)||((p>r||r!==r)&&(r=p),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Sr)!==null}intersectTriangle(e,t,r,o,l){const u=this.origin,p=this.direction,d=p.x,m=p.y,g=p.z,v=e.x-u.x,_=e.y-u.y,w=e.z-u.z,E=t.x-u.x,A=t.y-u.y,y=t.z-u.z,b=r.x-u.x,R=r.y-u.y,z=r.z-u.z,D=Math.abs(d),F=Math.abs(m),L=Math.abs(g);let M,N,Z,B,X,O,H,$,j,ce,te,q;if(D>=F&&D>=L?(Z=d,O=v,j=E,q=b,d>=0?(M=m,N=g,B=_,X=w,H=A,$=y,ce=R,te=z):(M=g,N=m,B=w,X=_,H=y,$=A,ce=z,te=R)):F>=L?(Z=m,O=_,j=A,q=R,m>=0?(M=g,N=d,B=w,X=v,H=y,$=E,ce=z,te=b):(M=d,N=g,B=v,X=w,H=E,$=y,ce=b,te=z)):(Z=g,O=w,j=y,q=z,g>=0?(M=d,N=m,B=v,X=_,H=E,$=A,ce=b,te=R):(M=m,N=d,B=_,X=v,H=A,$=E,ce=R,te=b)),Z===0)return null;const Y=M/Z,G=N/Z,P=1/Z,K=B-Y*O,Te=X-G*O,ie=H-Y*j,xe=$-G*j,Me=ce-Y*q,ge=te-G*q,ye=Me*xe-ge*ie,Pe=K*ge-Te*Me,st=ie*Te-xe*K;if(o){if(ye<0||Pe<0||st<0)return null}else if((ye<0||Pe<0||st<0)&&(ye>0||Pe>0||st>0))return null;const je=ye+Pe+st;if(je===0)return null;const Ee=P*(ye*O+Pe*j+st*q);return(je>0?Ee<0:Ee>0)?null:this.at(Ee/je,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zl extends xo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=h0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Cm=new fn,ys=new J_,Dl=new Af,Am=new he,Ll=new he,Il=new he,kl=new he,Sd=new he,Ul=new he,Rm=new he,Fl=new he;class Sn extends jn{constructor(e=new or,t=new Zl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const p=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const p=this.morphTargetInfluences;if(l&&p){Ul.set(0,0,0);for(let d=0,m=l.length;d<m;d++){const g=p[d],v=l[d];g!==0&&(Sd.fromBufferAttribute(v,e),u?Ul.addScaledVector(Sd,g):Ul.addScaledVector(Sd.sub(t),g))}t.add(Ul)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Dl.copy(r.boundingSphere),Dl.applyMatrix4(l),ys.copy(e.ray).recast(e.near),!(Dl.containsPoint(ys.origin)===!1&&(ys.intersectSphere(Dl,Am)===null||ys.origin.distanceToSquared(Am)>(e.far-e.near)**2))&&(Cm.copy(l).invert(),ys.copy(e.ray).applyMatrix4(Cm),!(r.boundingBox!==null&&ys.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ys)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,p=l.index,d=l.attributes.position,m=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,_=l.groups,w=l.drawRange;if(p!==null)if(Array.isArray(u))for(let E=0,A=_.length;E<A;E++){const y=_[E],b=u[y.materialIndex],R=Math.max(y.start,w.start),z=Math.min(p.count,Math.min(y.start+y.count,w.start+w.count));for(let D=R,F=z;D<F;D+=3){const L=p.getX(D),M=p.getX(D+1),N=p.getX(D+2);o=zl(this,b,e,r,m,g,v,L,M,N),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const E=Math.max(0,w.start),A=Math.min(p.count,w.start+w.count);for(let y=E,b=A;y<b;y+=3){const R=p.getX(y),z=p.getX(y+1),D=p.getX(y+2);o=zl(this,u,e,r,m,g,v,R,z,D),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let E=0,A=_.length;E<A;E++){const y=_[E],b=u[y.materialIndex],R=Math.max(y.start,w.start),z=Math.min(d.count,Math.min(y.start+y.count,w.start+w.count));for(let D=R,F=z;D<F;D+=3){const L=D,M=D+1,N=D+2;o=zl(this,b,e,r,m,g,v,L,M,N),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const E=Math.max(0,w.start),A=Math.min(d.count,w.start+w.count);for(let y=E,b=A;y<b;y+=3){const R=y,z=y+1,D=y+2;o=zl(this,u,e,r,m,g,v,R,z,D),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function Q_(s,e,t,r,o,l,u,p){let d;if(e.side===Fn?d=r.intersectTriangle(u,l,o,!0,p):d=r.intersectTriangle(o,l,u,e.side===Ts,p),d===null)return null;Fl.copy(p),Fl.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(Fl);return m<t.near||m>t.far?null:{distance:m,point:Fl.clone(),object:s}}function zl(s,e,t,r,o,l,u,p,d,m){s.getVertexPosition(p,Ll),s.getVertexPosition(d,Il),s.getVertexPosition(m,kl);const g=Q_(s,e,t,r,Ll,Il,kl,Rm);if(g){const v=new he;Wi.getBarycoord(Rm,Ll,Il,kl,v),o&&(g.uv=Wi.getInterpolatedAttribute(o,p,d,m,v,new Lt)),l&&(g.uv1=Wi.getInterpolatedAttribute(l,p,d,m,v,new Lt)),u&&(g.normal=Wi.getInterpolatedAttribute(u,p,d,m,v,new he),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:p,b:d,c:m,normal:new he,materialIndex:0};Wi.getNormal(Ll,Il,kl,_.normal),g.face=_,g.barycoord=v}return g}class ey extends Wn{constructor(e=null,t=1,r=1,o,l,u,p,d,m=Un,g=Un,v,_){super(null,u,p,d,m,g,o,l,v,_),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ss=new Af,ty=new Lt(.5,.5),Ol=new he;class po{constructor(e=new Zr,t=new Zr,r=new Zr,o=new Zr,l=new Zr,u=new Zr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const p=this.planes;return p[0].copy(e),p[1].copy(t),p[2].copy(r),p[3].copy(o),p[4].copy(l),p[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=ji,r=!1){const o=this.planes,l=e.elements,u=l[0],p=l[1],d=l[2],m=l[3],g=l[4],v=l[5],_=l[6],w=l[7],E=l[8],A=l[9],y=l[10],b=l[11],R=l[12],z=l[13],D=l[14],F=l[15];if(o[0].setComponents(m-u,w-g,b-E,F-R).normalize(),o[1].setComponents(m+u,w+g,b+E,F+R).normalize(),o[2].setComponents(m+p,w+v,b+A,F+z).normalize(),o[3].setComponents(m-p,w-v,b-A,F-z).normalize(),r)o[4].setComponents(d,_,y,D).normalize(),o[5].setComponents(m-d,w-_,b-y,F-D).normalize();else if(o[4].setComponents(m-d,w-_,b-y,F-D).normalize(),t===ji)o[5].setComponents(m+d,w+_,b+y,F+D).normalize();else if(t===ho)o[5].setComponents(d,_,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){Ss.center.set(0,0,0);const t=ty.distanceTo(e.center);return Ss.radius=.7071067811865476+t,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Ol.x=o.normal.x>0?e.max.x:e.min.x,Ol.y=o.normal.y>0?e.max.y:e.min.y,Ol.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ol)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Nm=new fn;class Rf{constructor(){this.coordinateSystem=ji,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let o=0;o<t.length;o++){const l=t[o];Nm.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),r[o]===void 0&&(r[o]=new po),r[o].setFromProjectionMatrix(Nm,l.coordinateSystem,l.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let o=0;o<e._count;o++)t[o]===void 0&&(t[o]=new po),t[o].copy(r[o]);return this._count=e._count,this}clone(){return new Rf().copy(this)}}class z0 extends Wn{constructor(e=[],t=pa,r,o,l,u,p,d,m,g){super(e,t,r,o,l,u,p,d,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fc extends Wn{constructor(e,t,r,o,l,u,p,d,m){super(e,t,r,o,l,u,p,d,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xa extends Wn{constructor(e,t,r=sr,o,l,u,p=Un,d=Un,m,g=ts,v=1){if(g!==ts&&g!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:v};super(_,o,l,u,p,d,g,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class O0 extends xa{constructor(e,t=sr,r=pa,o,l,u=Un,p=Un,d,m=ts){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,t,r,o,l,u,p,d,m),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class B0 extends Wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class vo extends or{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const p=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const d=[],m=[],g=[],v=[];let _=0,w=0;E("z","y","x",-1,-1,r,t,e,u,l,0),E("z","y","x",1,-1,r,t,-e,u,l,1),E("x","z","y",1,1,e,r,t,o,u,2),E("x","z","y",1,-1,e,r,-t,o,u,3),E("x","y","z",1,-1,e,t,r,o,l,4),E("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new Pn(m,3)),this.setAttribute("normal",new Pn(g,3)),this.setAttribute("uv",new Pn(v,2));function E(A,y,b,R,z,D,F,L,M,N,Z){const B=D/M,X=F/N,O=D/2,H=F/2,$=L/2,j=M+1,ce=N+1;let te=0,q=0;const Y=new he;for(let G=0;G<ce;G++){const P=G*X-H;for(let K=0;K<j;K++){const Te=K*B-O;Y[A]=Te*R,Y[y]=P*z,Y[b]=$,m.push(Y.x,Y.y,Y.z),Y[A]=0,Y[y]=0,Y[b]=L>0?1:-1,g.push(Y.x,Y.y,Y.z),v.push(K/M),v.push(1-G/N),te+=1}}for(let G=0;G<N;G++)for(let P=0;P<M;P++){const K=_+P+j*G,Te=_+P+j*(G+1),ie=_+(P+1)+j*(G+1),xe=_+(P+1)+j*G;d.push(K,Te,xe),d.push(Te,ie,xe),q+=6}p.addGroup(w,q,Z),w+=q,_+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Nf extends or{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,p=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:p,thetaLength:d};const m=this;o=Math.floor(o),l=Math.floor(l);const g=[],v=[],_=[],w=[];let E=0;const A=[],y=r/2;let b=0;R(),u===!1&&(e>0&&z(!0),t>0&&z(!1)),this.setIndex(g),this.setAttribute("position",new Pn(v,3)),this.setAttribute("normal",new Pn(_,3)),this.setAttribute("uv",new Pn(w,2));function R(){const D=new he,F=new he;let L=0;const M=(t-e)/r;for(let N=0;N<=l;N++){const Z=[],B=N/l,X=B*(t-e)+e;for(let O=0;O<=o;O++){const H=O/o,$=H*d+p,j=Math.sin($),ce=Math.cos($);F.x=X*j,F.y=-B*r+y,F.z=X*ce,v.push(F.x,F.y,F.z),D.set(j,M,ce).normalize(),_.push(D.x,D.y,D.z),w.push(H,1-B),Z.push(E++)}A.push(Z)}for(let N=0;N<o;N++)for(let Z=0;Z<l;Z++){const B=A[Z][N],X=A[Z+1][N],O=A[Z+1][N+1],H=A[Z][N+1];(e>0||Z!==0)&&(g.push(B,X,H),L+=3),(t>0||Z!==l-1)&&(g.push(X,O,H),L+=3)}m.addGroup(b,L,0),b+=L}function z(D){const F=E,L=new Lt,M=new he;let N=0;const Z=D===!0?e:t,B=D===!0?1:-1;for(let O=1;O<=o;O++)v.push(0,y*B,0),_.push(0,B,0),w.push(.5,.5),E++;const X=E;for(let O=0;O<=o;O++){const $=O/o*d+p,j=Math.cos($),ce=Math.sin($);M.x=Z*ce,M.y=y*B,M.z=Z*j,v.push(M.x,M.y,M.z),_.push(0,B,0),L.x=j*.5+.5,L.y=ce*.5*B+.5,w.push(L.x,L.y),E++}for(let O=0;O<o;O++){const H=F+O,$=X+O;D===!0?g.push($,$+1,H):g.push($+1,$,H),N+=3}m.addGroup(b,N,D===!0?1:2),b+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pf extends Nf{constructor(e=1,t=1,r=32,o=1,l=!1,u=0,p=Math.PI*2){super(0,e,t,r,o,l,u,p),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:p}}static fromJSON(e){return new Pf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _o extends or{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,p=Math.floor(r),d=Math.floor(o),m=p+1,g=d+1,v=e/p,_=t/d,w=[],E=[],A=[],y=[];for(let b=0;b<g;b++){const R=b*_-u;for(let z=0;z<m;z++){const D=z*v-l;E.push(D,-R,0),A.push(0,0,1),y.push(z/p),y.push(1-b/d)}}for(let b=0;b<d;b++)for(let R=0;R<p;R++){const z=R+m*b,D=R+m*(b+1),F=R+1+m*(b+1),L=R+1+m*b;w.push(z,D,L),w.push(D,F,L)}this.setIndex(w),this.setAttribute("position",new Pn(E,3)),this.setAttribute("normal",new Pn(A,3)),this.setAttribute("uv",new Pn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.width,e.height,e.widthSegments,e.heightSegments)}}class Df extends or{constructor(e=.5,t=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const p=[],d=[],m=[],g=[];let v=e;const _=(t-e)/o,w=new he,E=new Lt;for(let A=0;A<=o;A++){for(let y=0;y<=r;y++){const b=l+y/r*u;w.x=v*Math.cos(b),w.y=v*Math.sin(b),d.push(w.x,w.y,w.z),m.push(0,0,1),E.x=(w.x/t+1)/2,E.y=(w.y/t+1)/2,g.push(E.x,E.y)}v+=_}for(let A=0;A<o;A++){const y=A*(r+1);for(let b=0;b<r;b++){const R=b+y,z=R,D=R+r+1,F=R+r+2,L=R+1;p.push(z,D,L),p.push(D,F,L)}}this.setIndex(p),this.setAttribute("position",new Pn(d,3)),this.setAttribute("normal",new Pn(m,3)),this.setAttribute("uv",new Pn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Df(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Oi extends or{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:p},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const d=Math.min(u+p,Math.PI);let m=0;const g=[],v=new he,_=new he,w=[],E=[],A=[],y=[];for(let b=0;b<=r;b++){const R=[],z=b/r,D=u+z*p,F=e*Math.cos(D),L=Math.sqrt(e*e-F*F);let M=0;b===0&&u===0?M=.5/t:b===r&&d===Math.PI&&(M=-.5/t);for(let N=0;N<=t;N++){const Z=N/t,B=o+Z*l;v.x=-L*Math.cos(B),v.y=F,v.z=L*Math.sin(B),E.push(v.x,v.y,v.z),_.copy(v).normalize(),A.push(_.x,_.y,_.z),y.push(Z+M,1-z),R.push(m++)}g.push(R)}for(let b=0;b<r;b++)for(let R=0;R<t;R++){const z=g[b][R+1],D=g[b][R],F=g[b+1][R],L=g[b+1][R+1];(b!==0||u>0)&&w.push(z,D,L),(b!==r-1||d<Math.PI)&&w.push(D,F,L)}this.setIndex(w),this.setAttribute("position",new Pn(E,3)),this.setAttribute("normal",new Pn(A,3)),this.setAttribute("uv",new Pn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function va(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(Pm(o))o.isRenderTargetTexture?(yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Pm(o[0])){const l=[];for(let u=0,p=o.length;u<p;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Kn(s){const e={};for(let t=0;t<s.length;t++){const r=va(s[t]);for(const o in r)e[o]=r[o]}return e}function Pm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function ny(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function H0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:kt.workingColorSpace}const iy={clone:va,merge:Kn};var ry=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends xo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ry,this.fragmentShader=sy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=va(e.uniforms),this.uniformsGroups=ny(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new Dt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Lt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new he().fromArray(o.value);break;case"v4":this.uniforms[r].value=new dn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new wt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new fn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class ay extends Ti{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Bl extends xo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=df,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oy extends xo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=m_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ly extends xo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class G0 extends jn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const bd=new fn,Dm=new he,Lm=new he;class cy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new fn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new po,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Dm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dm),Lm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,o){bd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(bd,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,p=o?o.w/l.y:1,d=o?o.x/l.x:0,m=o?o.y/l.y:0;e.coordinateSystem===ho||e.reversedDepth?t.set(.5*u,0,0,.5*u+d,0,.5*p,0,.5*p+m,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+d,0,.5*p,0,.5*p+m,0,0,.5,.5,0,0,0,1),t.multiply(bd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Hl=new he,Gl=new _a,Ji=new he;class V0 extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hl,Gl,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hl,Gl,Ji.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Hl,Gl,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hl,Gl,Ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const qr=new he,Im=new Lt,km=new Lt;class Hi extends V0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ff*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ed*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ff*2*Math.atan(Math.tan(ed*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qr.x,qr.y).multiplyScalar(-e/qr.z),qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(qr.x,qr.y).multiplyScalar(-e/qr.z)}getViewSize(e,t){return this.getViewBounds(e,Im,km),t.subVectors(km,Im)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ed*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/d,t-=u.offsetY*r/m,o*=u.width/d,r*=u.height/m}const p=this.filmOffset;p!==0&&(l+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class W0 extends V0{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,p=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,p-=g*this.view.offsetY,d=p-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,p,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class uy extends cy{constructor(){super(new W0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dy extends G0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jn.DEFAULT_UP),this.updateMatrix(),this.target=new jn,this.shadow=new uy}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class fy extends G0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const la=-90,ca=1;class hf extends jn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Hi(la,ca,e,t);o.layers=this.layers,this.add(o);const l=new Hi(la,ca,e,t);l.layers=this.layers,this.add(l);const u=new Hi(la,ca,e,t);u.layers=this.layers,this.add(u);const p=new Hi(la,ca,e,t);p.layers=this.layers,this.add(p);const d=new Hi(la,ca,e,t);d.layers=this.layers,this.add(d);const m=new Hi(la,ca,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,p,d]=t;for(const m of t)this.remove(m);if(e===ji)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===ho)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,p,d,m,g]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),w=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),r.texture.mipmapsAutoUpdate=A,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(v,_,w),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class hy extends Hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Um(s,e,t,r){const o=py(r);switch(t){case T0:return s*e;case A0:return s*e/o.components*o.byteLength;case wf:return s*e/o.components*o.byteLength;case Cs:return s*e*2/o.components*o.byteLength;case Mf:return s*e*2/o.components*o.byteLength;case C0:return s*e*3/o.components*o.byteLength;case ir:return s*e*4/o.components*o.byteLength;case Ef:return s*e*4/o.components*o.byteLength;case $l:case Xl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Yl:case ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kd:case Fd:return Math.max(s,16)*Math.max(e,8)/4;case Id:case Ud:return Math.max(s,8)*Math.max(e,8)/2;case zd:case Od:case Hd:case Gd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Bd:case tc:case Vd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case jd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case $d:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case qd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Zd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Jd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ef:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case tf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case nf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case rf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case sf:case af:case of:return Math.ceil(s/4)*Math.ceil(e/4)*16;case lf:case cf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case nc:case uf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function py(s){switch(s){case gi:case b0:return{byteLength:1,components:1};case fo:case w0:case ar:return{byteLength:2,components:1};case Sf:case bf:return{byteLength:2,components:4};case sr:case yf:case nr:return{byteLength:4,components:1};case M0:case E0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_f}}));typeof window<"u"&&(window.__THREE__?yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_f);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function j0(){let s=null,e=!1,t=null,r=null;function o(l,u){r=s.requestAnimationFrame(o),t(l,u)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function my(s){const e=new WeakMap;function t(p,d){const m=p.array,g=p.usage,v=m.byteLength,_=s.createBuffer();s.bindBuffer(d,_),s.bufferData(d,m,g),p.onUploadCallback();let w;if(m instanceof Float32Array)w=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)w=s.HALF_FLOAT;else if(m instanceof Uint16Array)p.isFloat16BufferAttribute?w=s.HALF_FLOAT:w=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)w=s.SHORT;else if(m instanceof Uint32Array)w=s.UNSIGNED_INT;else if(m instanceof Int32Array)w=s.INT;else if(m instanceof Int8Array)w=s.BYTE;else if(m instanceof Uint8Array)w=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)w=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:w,bytesPerElement:m.BYTES_PER_ELEMENT,version:p.version,size:v}}function r(p,d,m){const g=d.array,v=d.updateRanges;if(s.bindBuffer(m,p),v.length===0)s.bufferSubData(m,0,g);else{v.sort((w,E)=>w.start-E.start);let _=0;for(let w=1;w<v.length;w++){const E=v[_],A=v[w];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++_,v[_]=A)}v.length=_+1;for(let w=0,E=v.length;w<E;w++){const A=v[w];s.bufferSubData(m,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function l(p){p.isInterleavedBufferAttribute&&(p=p.data);const d=e.get(p);d&&(s.deleteBuffer(d.buffer),e.delete(p))}function u(p,d){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const g=e.get(p);(!g||g.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const m=e.get(p);if(m===void 0)e.set(p,t(p,d));else if(m.version<p.version){if(m.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,p,d),m.version=p.version}}return{get:o,remove:l,update:u}}var gy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xy=`#ifdef USE_ALPHAHASH
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
#endif`,vy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_y=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,by=`#ifdef USE_AOMAP
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
#endif`,wy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,My=`#ifdef USE_BATCHING
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
#endif`,Ey=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ty=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ay=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ry=`#ifdef USE_IRIDESCENCE
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
#endif`,Ny=`#ifdef USE_BUMPMAP
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
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Iy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ky=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Uy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Fy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Oy=`#define PI 3.141592653589793
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
} // validated`,By=`vec3 transformedNormal = objectNormal;
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
#endif`,Hy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jy="gl_FragColor = linearToOutputTexel( gl_FragColor );",$y=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xy=`#ifdef USE_ENVMAP
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
#endif`,Yy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,qy=`#ifdef USE_ENVMAP
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
#endif`,Ky=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zy=`#ifdef USE_ENVMAP
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
#endif`,Jy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n1=`#ifdef USE_GRADIENTMAP
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
}`,i1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,o1=`#ifdef USE_ENVMAP
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
#endif`,l1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,u1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f1=`PhysicalMaterial material;
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
#endif`,h1=`uniform sampler2D dfgLUT;
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
}`,p1=`
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
#endif`,m1=`#if defined( RE_IndirectDiffuse )
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
#endif`,g1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x1=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,v1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,w1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,E1=`#if defined( USE_POINTS_UV )
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
#endif`,T1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R1=`#if defined( USE_MORPHCOLORS )
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
#endif`,N1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P1=`#ifdef USE_MORPHTARGETS
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
#endif`,D1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,I1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,k1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U1=`#ifndef FLAT_SHADED
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
#endif`,z1=`#ifdef USE_NORMALMAP
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
#endif`,O1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,V1=`#ifdef OPAQUE
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
}`,j1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Y1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,J1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,eS=`float getShadowMask() {
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
}`,tS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nS=`#ifdef USE_SKINNING
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
#endif`,iS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rS=`#ifdef USE_SKINNING
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
#endif`,sS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cS=`#ifdef USE_TRANSMISSION
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
#endif`,uS=`#ifdef USE_TRANSMISSION
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
#endif`,dS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gS=`uniform sampler2D t2D;
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
}`,xS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vS=`uniform float backgroundBlurriness;
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
}`,_S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SS=`#include <common>
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
}`,bS=`#if DEPTH_PACKING == 3200
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
}`,wS=`#define DISTANCE
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
}`,MS=`#define DISTANCE
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
}`,ES=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TS=`uniform sampler2D tEquirect;
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
}`,AS=`uniform vec3 diffuse;
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
}`,RS=`#include <common>
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
}`,NS=`uniform vec3 diffuse;
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
}`,PS=`#define LAMBERT
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
}`,DS=`#define LAMBERT
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
}`,LS=`#define MATCAP
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
}`,IS=`#define MATCAP
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
}`,kS=`#define NORMAL
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
}`,US=`#define NORMAL
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
}`,zS=`#define PHONG
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
}`,OS=`#define STANDARD
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
}`,BS=`#define STANDARD
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
}`,HS=`#define TOON
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
}`,GS=`#define TOON
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
}`,VS=`uniform float size;
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
}`,jS=`#include <common>
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
}`,$S=`uniform vec3 color;
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
}`,XS=`uniform float rotation;
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
}`,YS=`uniform vec3 diffuse;
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
}`,Ct={alphahash_fragment:gy,alphahash_pars_fragment:xy,alphamap_fragment:vy,alphamap_pars_fragment:_y,alphatest_fragment:yy,alphatest_pars_fragment:Sy,aomap_fragment:by,aomap_pars_fragment:wy,batching_pars_vertex:My,batching_vertex:Ey,begin_vertex:Ty,beginnormal_vertex:Cy,bsdfs:Ay,iridescence_fragment:Ry,bumpmap_pars_fragment:Ny,clipping_planes_fragment:Py,clipping_planes_pars_fragment:Dy,clipping_planes_pars_vertex:Ly,clipping_planes_vertex:Iy,color_fragment:ky,color_pars_fragment:Uy,color_pars_vertex:Fy,color_vertex:zy,common:Oy,defaultnormal_vertex:By,displacementmap_pars_vertex:Hy,displacementmap_vertex:Gy,emissivemap_fragment:Vy,emissivemap_pars_fragment:Wy,colorspace_fragment:jy,colorspace_pars_fragment:$y,envmap_fragment:Xy,envmap_common_pars_fragment:Yy,envmap_pars_fragment:qy,envmap_pars_vertex:Ky,envmap_physical_pars_fragment:o1,envmap_vertex:Zy,fog_vertex:Jy,fog_pars_vertex:Qy,fog_fragment:e1,fog_pars_fragment:t1,gradientmap_pars_fragment:n1,lightmap_pars_fragment:i1,lights_lambert_fragment:r1,lights_lambert_pars_fragment:s1,lights_pars_begin:a1,lights_toon_fragment:l1,lights_toon_pars_fragment:c1,lights_phong_fragment:u1,lights_phong_pars_fragment:d1,lights_physical_fragment:f1,lights_physical_pars_fragment:h1,lights_fragment_begin:p1,lights_fragment_maps:m1,lights_fragment_end:g1,lightprobes_pars_fragment:x1,logdepthbuf_fragment:v1,logdepthbuf_pars_fragment:_1,logdepthbuf_pars_vertex:y1,logdepthbuf_vertex:S1,map_fragment:b1,map_pars_fragment:w1,map_particle_fragment:M1,map_particle_pars_fragment:E1,metalnessmap_fragment:T1,metalnessmap_pars_fragment:C1,morphinstance_vertex:A1,morphcolor_vertex:R1,morphnormal_vertex:N1,morphtarget_pars_vertex:P1,morphtarget_vertex:D1,normal_fragment_begin:L1,normal_fragment_maps:I1,normal_pars_fragment:k1,normal_pars_vertex:U1,normal_vertex:F1,normalmap_pars_fragment:z1,clearcoat_normal_fragment_begin:O1,clearcoat_normal_fragment_maps:B1,clearcoat_pars_fragment:H1,iridescence_pars_fragment:G1,opaque_fragment:V1,packing:W1,premultiplied_alpha_fragment:j1,project_vertex:$1,dithering_fragment:X1,dithering_pars_fragment:Y1,roughnessmap_fragment:q1,roughnessmap_pars_fragment:K1,shadowmap_pars_fragment:Z1,shadowmap_pars_vertex:J1,shadowmap_vertex:Q1,shadowmask_pars_fragment:eS,skinbase_vertex:tS,skinning_pars_vertex:nS,skinning_vertex:iS,skinnormal_vertex:rS,specularmap_fragment:sS,specularmap_pars_fragment:aS,tonemapping_fragment:oS,tonemapping_pars_fragment:lS,transmission_fragment:cS,transmission_pars_fragment:uS,uv_pars_fragment:dS,uv_pars_vertex:fS,uv_vertex:hS,worldpos_vertex:pS,background_vert:mS,background_frag:gS,backgroundCube_vert:xS,backgroundCube_frag:vS,cube_vert:_S,cube_frag:yS,depth_vert:SS,depth_frag:bS,distance_vert:wS,distance_frag:MS,equirect_vert:ES,equirect_frag:TS,linedashed_vert:CS,linedashed_frag:AS,meshbasic_vert:RS,meshbasic_frag:NS,meshlambert_vert:PS,meshlambert_frag:DS,meshmatcap_vert:LS,meshmatcap_frag:IS,meshnormal_vert:kS,meshnormal_frag:US,meshphong_vert:FS,meshphong_frag:zS,meshphysical_vert:OS,meshphysical_frag:BS,meshtoon_vert:HS,meshtoon_frag:GS,points_vert:VS,points_frag:WS,shadow_vert:jS,shadow_frag:$S,sprite_vert:XS,sprite_frag:YS},Ze={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},er={basic:{uniforms:Kn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:Kn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new Dt(0)},envMapIntensity:{value:1}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:Kn([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:Kn([Ze.common,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.roughnessmap,Ze.metalnessmap,Ze.fog,Ze.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:Kn([Ze.common,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.gradientmap,Ze.fog,Ze.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:Kn([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:Kn([Ze.points,Ze.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:Kn([Ze.common,Ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:Kn([Ze.common,Ze.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:Kn([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:Kn([Ze.sprite,Ze.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distance:{uniforms:Kn([Ze.common,Ze.displacementmap,{referencePosition:{value:new he},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distance_vert,fragmentShader:Ct.distance_frag},shadow:{uniforms:Kn([Ze.lights,Ze.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};er.physical={uniforms:Kn([er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};const Vl={r:0,b:0,g:0},qS=new fn,$0=new wt;$0.set(-1,0,0,0,1,0,0,0,1);function KS(s,e,t,r,o,l){const u=new Dt(0);let p=o===!0?0:1,d,m,g=null,v=0,_=null;function w(R){let z=R.isScene===!0?R.background:null;if(z&&z.isTexture){const D=R.backgroundBlurriness>0;z=e.get(z,D)}return z}function E(R){let z=!1;const D=w(R);D===null?y(u,p):D&&D.isColor&&(y(D,1),z=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?t.buffers.color.setClear(0,0,0,1,l):F==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||z)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function A(R,z){const D=w(z);D&&D.isCubeTexture?(m===void 0&&(m=new Sn(new vo(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:va(er.backgroundCube.uniforms),vertexShader:er.backgroundCube.vertexShader,fragmentShader:er.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(F,L,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=D,m.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(qS.makeRotationFromEuler(z.backgroundRotation)).transpose(),D.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply($0),m.material.toneMapped=kt.getTransfer(D.colorSpace)!==qt,(g!==D||v!==D.version||_!==s.toneMapping)&&(m.material.needsUpdate=!0,g=D,v=D.version,_=s.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null)):D&&D.isTexture&&(d===void 0&&(d=new Sn(new _o(2,2),new Ti({name:"BackgroundMaterial",uniforms:va(er.background.uniforms),vertexShader:er.background.vertexShader,fragmentShader:er.background.fragmentShader,side:Ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=D,d.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,d.material.toneMapped=kt.getTransfer(D.colorSpace)!==qt,D.matrixAutoUpdate===!0&&D.updateMatrix(),d.material.uniforms.uvTransform.value.copy(D.matrix),(g!==D||v!==D.version||_!==s.toneMapping)&&(d.material.needsUpdate=!0,g=D,v=D.version,_=s.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null))}function y(R,z){R.getRGB(Vl,H0(s)),t.buffers.color.setClear(Vl.r,Vl.g,Vl.b,z,l)}function b(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(R,z=1){u.set(R),p=z,y(u,p)},getClearAlpha:function(){return p},setClearAlpha:function(R){p=R,y(u,p)},render:E,addToRenderList:A,dispose:b}}function ZS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=_(null);let l=o,u=!1;function p(X,O,H,$,j){let ce=!1;const te=v(X,$,H,O);l!==te&&(l=te,m(l.object)),ce=w(X,$,H,j),ce&&E(X,$,H,j),j!==null&&e.update(j,s.ELEMENT_ARRAY_BUFFER),(ce||u)&&(u=!1,D(X,O,H,$),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function d(){return s.createVertexArray()}function m(X){return s.bindVertexArray(X)}function g(X){return s.deleteVertexArray(X)}function v(X,O,H,$){const j=$.wireframe===!0;let ce=r[O.id];ce===void 0&&(ce={},r[O.id]=ce);const te=X.isInstancedMesh===!0?X.id:0;let q=ce[te];q===void 0&&(q={},ce[te]=q);let Y=q[H.id];Y===void 0&&(Y={},q[H.id]=Y);let G=Y[j];return G===void 0&&(G=_(d()),Y[j]=G),G}function _(X){const O=[],H=[],$=[];for(let j=0;j<t;j++)O[j]=0,H[j]=0,$[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:H,attributeDivisors:$,object:X,attributes:{},index:null}}function w(X,O,H,$){const j=l.attributes,ce=O.attributes;let te=0;const q=H.getAttributes();for(const Y in q)if(q[Y].location>=0){const P=j[Y];let K=ce[Y];if(K===void 0&&(Y==="instanceMatrix"&&X.instanceMatrix&&(K=X.instanceMatrix),Y==="instanceColor"&&X.instanceColor&&(K=X.instanceColor)),P===void 0||P.attribute!==K||K&&P.data!==K.data)return!0;te++}return l.attributesNum!==te||l.index!==$}function E(X,O,H,$){const j={},ce=O.attributes;let te=0;const q=H.getAttributes();for(const Y in q)if(q[Y].location>=0){let P=ce[Y];P===void 0&&(Y==="instanceMatrix"&&X.instanceMatrix&&(P=X.instanceMatrix),Y==="instanceColor"&&X.instanceColor&&(P=X.instanceColor));const K={};K.attribute=P,P&&P.data&&(K.data=P.data),j[Y]=K,te++}l.attributes=j,l.attributesNum=te,l.index=$}function A(){const X=l.newAttributes;for(let O=0,H=X.length;O<H;O++)X[O]=0}function y(X){b(X,0)}function b(X,O){const H=l.newAttributes,$=l.enabledAttributes,j=l.attributeDivisors;H[X]=1,$[X]===0&&(s.enableVertexAttribArray(X),$[X]=1),j[X]!==O&&(s.vertexAttribDivisor(X,O),j[X]=O)}function R(){const X=l.newAttributes,O=l.enabledAttributes;for(let H=0,$=O.length;H<$;H++)O[H]!==X[H]&&(s.disableVertexAttribArray(H),O[H]=0)}function z(X,O,H,$,j,ce,te){te===!0?s.vertexAttribIPointer(X,O,H,j,ce):s.vertexAttribPointer(X,O,H,$,j,ce)}function D(X,O,H,$){A();const j=$.attributes,ce=H.getAttributes(),te=O.defaultAttributeValues;for(const q in ce){const Y=ce[q];if(Y.location>=0){let G=j[q];if(G===void 0&&(q==="instanceMatrix"&&X.instanceMatrix&&(G=X.instanceMatrix),q==="instanceColor"&&X.instanceColor&&(G=X.instanceColor)),G!==void 0){const P=G.normalized,K=G.itemSize,Te=e.get(G);if(Te===void 0)continue;const ie=Te.buffer,xe=Te.type,Me=Te.bytesPerElement,ge=xe===s.INT||xe===s.UNSIGNED_INT||G.gpuType===yf;if(G.isInterleavedBufferAttribute){const ye=G.data,Pe=ye.isInterleavedBuffer===!0?ye.stride:ye.itemSize,st=G.offset;if(ye.isInstancedInterleavedBuffer||ye.isInstancedBufferAttribute){for(let je=0;je<Y.locationSize;je++)b(Y.location+je,ye.meshPerAttribute);X.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let je=0;je<Y.locationSize;je++)y(Y.location+je);s.bindBuffer(s.ARRAY_BUFFER,ie);for(let je=0;je<Y.locationSize;je++)z(Y.location+je,K/Y.locationSize,xe,P,Pe*Me,(st+K/Y.locationSize*je)*Me,ge)}else{if(G.isInstancedBufferAttribute){for(let ye=0;ye<Y.locationSize;ye++)b(Y.location+ye,G.meshPerAttribute);X.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ye=0;ye<Y.locationSize;ye++)y(Y.location+ye);s.bindBuffer(s.ARRAY_BUFFER,ie);for(let ye=0;ye<Y.locationSize;ye++)z(Y.location+ye,K/Y.locationSize,xe,P,K*Me,K/Y.locationSize*ye*Me,ge)}}else if(te!==void 0){const P=te[q];if(P!==void 0)switch(P.length){case 2:s.vertexAttrib2fv(Y.location,P);break;case 3:s.vertexAttrib3fv(Y.location,P);break;case 4:s.vertexAttrib4fv(Y.location,P);break;default:s.vertexAttrib1fv(Y.location,P)}}}}R()}function F(){Z();for(const X in r){const O=r[X];for(const H in O){const $=O[H];for(const j in $){const ce=$[j];for(const te in ce)g(ce[te].object),delete ce[te];delete $[j]}}delete r[X]}}function L(X){if(r[X.id]===void 0)return;const O=r[X.id];for(const H in O){const $=O[H];for(const j in $){const ce=$[j];for(const te in ce)g(ce[te].object),delete ce[te];delete $[j]}}delete r[X.id]}function M(X){for(const O in r){const H=r[O];for(const $ in H){const j=H[$];if(j[X.id]===void 0)continue;const ce=j[X.id];for(const te in ce)g(ce[te].object),delete ce[te];delete j[X.id]}}}function N(X){for(const O in r){const H=r[O],$=X.isInstancedMesh===!0?X.id:0,j=H[$];if(j!==void 0){for(const ce in j){const te=j[ce];for(const q in te)g(te[q].object),delete te[q];delete j[ce]}delete H[$],Object.keys(H).length===0&&delete r[O]}}}function Z(){B(),u=!0,l!==o&&(l=o,m(l.object))}function B(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:p,reset:Z,resetDefaultState:B,dispose:F,releaseStatesOfGeometry:L,releaseStatesOfObject:N,releaseStatesOfProgram:M,initAttributes:A,enableAttribute:y,disableUnusedAttributes:R}}function JS(s,e,t){let r;function o(d){r=d}function l(d,m){s.drawArrays(r,d,m),t.update(m,r,1)}function u(d,m,g){g!==0&&(s.drawArraysInstanced(r,d,m,g),t.update(m,r,g))}function p(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,m,0,g);let _=0;for(let w=0;w<g;w++)_+=m[w];t.update(_,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=p}function QS(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(M){return!(M!==ir&&r.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(M){const N=M===ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==gi&&M!==nr&&!N&&r.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function d(M){if(M==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const g=d(m);g!==m&&(yt("WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),_=t.logarithmicDepthBuffer===!0&&v===!1;t.reversedDepthBuffer===!0&&v===!1&&yt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&v===!0&&yt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const w=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),b=s.getParameter(s.MAX_VERTEX_ATTRIBS),R=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),z=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:p,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:w,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:y,maxAttributes:b,maxVertexUniforms:R,maxVaryings:z,maxFragmentUniforms:D,maxSamples:F,samples:L}}function eb(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Zr,p=new wt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const w=v.length!==0||_||r!==0||o;return o=_,r=v.length,w},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,_){t=g(v,_,0)},this.setState=function(v,_,w){const E=v.clippingPlanes,A=v.clipIntersection,y=v.clipShadows,b=s.get(v);if(!o||E===null||E.length===0||l&&!y)l?g(null):m();else{const R=l?0:r,z=R*4;let D=b.clippingState||null;d.value=D,D=g(E,_,z,w);for(let F=0;F!==z;++F)D[F]=t[F];b.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=R}};function m(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,_,w,E){const A=v!==null?v.length:0;let y=null;if(A!==0){if(y=d.value,E!==!0||y===null){const b=w+A*4,R=_.matrixWorldInverse;p.getNormalMatrix(R),(y===null||y.length<b)&&(y=new Float32Array(b));for(let z=0,D=w;z!==A;++z,D+=4)u.copy(v[z]).applyMatrix4(R,p),u.normal.toArray(y,D),y[D+3]=u.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}class Lf extends rr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new z0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new vo(5,5,5),l=new Ti({name:"CubemapFromEquirect",uniforms:va(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:fa});l.uniforms.tEquirect.value=t;const u=new Sn(o,l),p=t.minFilter;return t.minFilter===Qr&&(t.minFilter=ai),new hf(1,10,this).update(e,u),t.minFilter=p,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}const Fm=256,tb=3,nb=20,X0=256,Y0=16,ib=3,rb=new he,sb=new Dt;class ac{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new hf(1,10,null),this._boxMesh=new Sn(new vo(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:p=rb}=l,d=this._renderer;this._setSize(u);const m=this._allocateTarget(),g=this._getSourceTarget(!0);t>0&&(g.texture.mipmapsAutoUpdate=!1);const v=d.autoClear,_=d.autoClearColor,w=d.autoClearDepth,E=d.autoClearStencil,A=e.background;d.autoClear=!0,d.autoClearColor=!0,d.autoClearDepth=!0,d.autoClearStencil=!0,A===null&&(e.background=d.getClearColor(sb));const y=new hf(r,o,g);return y.position.copy(p),y.update(d,e),d.autoClear=v,d.autoClearColor=_,d.autoClearDepth=w,d.autoClearStencil=E,e.background=A,t>0&&(g.texture.mipmapsAutoUpdate=!0,this._blur(m,t)),this._applyPMREM(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Fm,R_(e))}_fromTexture(e,t){e.mapping===pa||e.mapping===uo?this._setSize(e.image.length===0?Fm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=zm(e,!1,!1),r=Math.log2(e)-tb;for(let o=0;o<=r;o++)t.texture.mipmaps.push({width:e>>o,height:e>>o});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=zm(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const o=this._boxMesh,l=this._cubeCamera;o.material=r,l.renderTarget=e,l.activeMipmapLevel=t;const u=e.width>>t;e.viewport.set(0,0,u,u),l.update(this._renderer,o),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===pa||e.mapping===uo?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Om()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=ab(),this._integrationMaterial=ob());const t=this._cubeSize,r=e.texture.mipmaps.length-1,o=this._ggxMaterial.uniforms;o.envMap.value=this._sourceTarget.texture;const l=this._integrationMaterial.uniforms;l.envMap.value=this._sourceTarget.texture,l.sourceLod.value=Math.log2(t/Y0);for(let u=0;u<=r;u++){const p=ac.lodToRoughness(u,r);if(u>r-ib)l.roughness.value=p,this._renderCube(e,u,this._integrationMaterial);else{const d=p>0?Math.log2(t)+.5*Math.log2(6/(X0*Math.pow(p,4)))+.5:0;o.roughness.value=p,o.lodBias.value=d,this._renderCube(e,u,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=lb());const r=this._blurMaterial,o=r.uniforms,l=this._sourceTarget;o.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,o.envMap.value=l.texture,this._renderCube(e,0,r),o.envMap.value=e.texture,this._renderCube(l,0,r)}}function zm(s,e,t){return new Lf(s,{minFilter:Qr,generateMipmaps:e,type:ar,colorSpace:ic,depthBuffer:t})}function yo(s,e,t){return new Ti({name:s,uniforms:e,vertexShader:Ct.cube_vert,fragmentShader:t,side:Fn,blending:fa,depthTest:!1,depthWrite:!1})}function ab(){return yo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${X0}u

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
	`)}function ob(){return yo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Y0}},`

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
	`)}function lb(){return yo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${nb}
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
	`)}function Om(){return yo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Bm(){return yo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function cb(s){let e=new WeakMap,t=new WeakMap,r=null;function o(_,w=!1){return _==null?null:w?u(_):l(_)}function l(_){if(_&&_.isTexture){const w=_.mapping;if(w===Ku||w===Zu)if(e.has(_)){const E=e.get(_).texture;return p(E,_.mapping)}else{const E=_.image;if(E&&E.height>0){const A=new Lf(E.height);return A.fromEquirectangularTexture(s,_),e.set(_,A),_.addEventListener("dispose",m),p(A.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture&&_.isPMREMTexture!==!0){const w=_.mapping,E=w===Ku||w===Zu,A=w===pa||w===uo;if(E||A){let y=t.get(_);const b=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==b)return r===null&&(r=new ac(s)),y=E?r.fromEquirectangular(_,y):r.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,t.set(_,y),y.texture;if(y!==void 0)return y.texture;{const R=_.image;return E&&R&&R.height>0||A&&R&&d(R)?(r===null&&(r=new ac(s)),y=E?r.fromEquirectangular(_):r.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,t.set(_,y),_.addEventListener("dispose",g),y.texture):null}}}return _}function p(_,w){return w===Ku?_.mapping=pa:w===Zu&&(_.mapping=uo),_}function d(_){let w=0;const E=6;for(let A=0;A<E;A++)_[A]!==void 0&&w++;return w===E}function m(_){const w=_.target;w.removeEventListener("dispose",m);const E=e.get(w);E!==void 0&&(e.delete(w),E.dispose())}function g(_){const w=_.target;w.removeEventListener("dispose",g);const E=t.get(w);E!==void 0&&(t.delete(w),E.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function ub(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Kl("WebGLRenderer: "+r+" extension not supported."),o}}}function db(s,e,t,r){const o={},l=new WeakMap,u=new FinalizationRegistry(E=>delete o[E]);function p(E){d(E.target)}function d(E){E.index!==null&&e.remove(E.index);for(const y in E.attributes)e.remove(E.attributes[y]);E.removeEventListener("dispose",p),delete o[E.id],u.unregister(E);const A=l.get(E);A&&(e.remove(A),l.delete(E)),r.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,t.memory.geometries--}function m(E,A){return o[A.id]!==void 0||(A.addEventListener("dispose",p),o[A.id]=new WeakRef(A),u.register(A,A.id,A),t.memory.geometries++),A}function g(E){const A=E.attributes;for(const y in A)e.update(A[y],s.ARRAY_BUFFER)}function v(E){const A=E.index,y=E.attributes.position;let b=0;if(y===void 0)return;const R=A!==null?A.array.length:y.array.length/3-1,z=y.count>=65535?F0:U0,D=new z(Math.ceil(R/3)*6,1),F=D.array;if(A!==null){const M=A.array;b=A.version;for(let N=0,Z=0;N<R;N+=3){const B=M[N+0],X=M[N+1],O=M[N+2];F[Z++]=B,F[Z++]=X,F[Z++]=X,F[Z++]=O,F[Z++]=O,F[Z++]=B}}else{b=y.version;for(let M=0,N=0;M<R;M+=3){const Z=M+0,B=M+1,X=M+2;F[N++]=Z,F[N++]=B,F[N++]=B,F[N++]=X,F[N++]=X,F[N++]=Z}}D.version=b;const L=l.get(E);L&&e.remove(L),l.set(E,D)}function _(E){const A=l.get(E);if(A){const y=E.index;y!==null&&A.version<y.version&&v(E)}else v(E);return l.get(E)}function w(){for(const E in o){const A=o[E].deref();A!==void 0&&d(A)}}return{get:m,update:g,getWireframeAttribute:_,dispose:w}}function fb(s,e,t){let r;function o(v){r=v}let l,u;function p(v){l=v.type,u=v.bytesPerElement}function d(v,_){s.drawElements(r,_,l,v*u),t.update(_,r,1)}function m(v,_,w){w!==0&&(s.drawElementsInstanced(r,_,l,v*u,w),t.update(_,r,w))}function g(v,_,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,l,v,0,w);let A=0;for(let y=0;y<w;y++)A+=_[y];t.update(A,r,1)}this.setMode=o,this.setIndex=p,this.render=d,this.renderInstances=m,this.renderMultiDraw=g}function hb(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,p){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=p*(l/3);break;case s.LINES:t.lines+=p*(l/2);break;case s.LINE_STRIP:t.lines+=p*(l-1);break;case s.LINE_LOOP:t.lines+=p*l;break;case s.POINTS:t.points+=p*l;break;default:$t("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function pb(s,e,t){const r=new WeakMap,o=new dn;function l(u,p,d){const m=u.morphTargetInfluences,g=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=g!==void 0?g.length:0;let _=r.get(p);if(_===void 0||_.count!==v){let B=function(){N.dispose(),r.delete(p),p.removeEventListener("dispose",B)};var w=B;_!==void 0&&_.texture.dispose();const E=p.morphAttributes.position!==void 0,A=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,b=p.morphAttributes.position||[],R=p.morphAttributes.normal||[],z=p.morphAttributes.color||[];let D=0;E===!0&&(D=1),A===!0&&(D=2),y===!0&&(D=3);let F=p.attributes.position.count*D,L=1;F>e.maxTextureSize&&(L=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const M=new Float32Array(F*L*4*v),N=new L0(M,F,L,v);N.type=nr,N.needsUpdate=!0;const Z=D*4;for(let X=0;X<v;X++){const O=b[X],H=R[X],$=z[X],j=F*L*4*X;for(let ce=0;ce<O.count;ce++){const te=ce*Z;E===!0&&(o.fromBufferAttribute(O,ce),M[j+te+0]=o.x,M[j+te+1]=o.y,M[j+te+2]=o.z,M[j+te+3]=0),A===!0&&(o.fromBufferAttribute(H,ce),M[j+te+4]=o.x,M[j+te+5]=o.y,M[j+te+6]=o.z,M[j+te+7]=0),y===!0&&(o.fromBufferAttribute($,ce),M[j+te+8]=o.x,M[j+te+9]=o.y,M[j+te+10]=o.z,M[j+te+11]=$.itemSize===4?o.w:1)}}_={count:v,texture:N,size:new Lt(F,L)},r.set(p,_),p.addEventListener("dispose",B)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const A=p.morphTargetsRelative?1:1-E;d.getUniforms().setValue(s,"morphTargetBaseInfluence",A),d.getUniforms().setValue(s,"morphTargetInfluences",m)}d.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:l}}function mb(s,e,t,r,o){let l=new WeakMap;function u(m){const g=o.render.frame,v=m.geometry,_=e.get(m,v);if(l.get(_)!==g&&(e.update(_),l.set(_,g)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==g&&(t.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,g))),m.isSkinnedMesh){const w=m.skeleton;l.get(w)!==g&&(w.update(),l.set(w,g))}return _}function p(){l=new WeakMap}function d(m){const g=m.target;g.removeEventListener("dispose",d),r.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:u,dispose:p}}const gb={[p0]:"LINEAR_TONE_MAPPING",[m0]:"REINHARD_TONE_MAPPING",[g0]:"CINEON_TONE_MAPPING",[x0]:"ACES_FILMIC_TONE_MAPPING",[_0]:"AGX_TONE_MAPPING",[y0]:"NEUTRAL_TONE_MAPPING",[v0]:"CUSTOM_TONE_MAPPING"};function xb(s,e,t,r,o,l){const u=new rr(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let p=null,d=null,m=null;const g=new or;g.setAttribute("position",new Pn([-1,3,0,-1,-1,0,3,-1,0],3)),g.setAttribute("uv",new Pn([0,2,0,0,2,0],2));const v=new ay({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new Sn(g,v),w=new W0(-1,1,1,-1,0,1);let E=null,A=null,y=!1,b,R=null,z=[],D=!1;this.setSize=function(F,L){u.setSize(F,L),p!==null&&p.setSize(F,L),d!==null&&d.setSize(F,L);for(let M=0;M<z.length;M++){const N=z[M];N.setSize&&N.setSize(F,L)}},this.setEffects=function(F){z=F,D=z.length>0&&z[0].isRenderPass===!0;const L=u.width,M=u.height;z.length>0&&p===null&&(p=new rr(L,M,{type:ar,depthBuffer:!1,stencilBuffer:!1}),d=new rr(L,M,{type:ar,depthBuffer:!1,stencilBuffer:!1}));const N=o===!0&&z.some(Z=>Z.needsDepthTexture===!0);N!==(u.depthTexture!==null)&&(N===!0&&m===null&&(m=new xa(L,M),l===!0&&(m.format=es,m.type=ga)),u.dispose(),u.depthTexture=N?m:null,u.resolveDepthBuffer=N,u.storeMultisampledDepthBuffer=N);for(let Z=0;Z<z.length;Z++){const B=z[Z];B.setSize&&B.setSize(L,M),N&&B.needsDepthTexture===!0&&B.setDepthTexture&&B.setDepthTexture(m)}},this.begin=function(F,L){if(y||F.toneMapping===Tr&&z.length===0)return!1;if(R=L,L!==null){const M=L.width,N=L.height;(u.width!==M||u.height!==N)&&this.setSize(M,N)}return D===!1&&F.setRenderTarget(u),b=F.toneMapping,F.toneMapping=Tr,!0},this.hasRenderPass=function(){return D},this.end=function(F,L){F.toneMapping=b,y=!0;let M=u,N=p;for(let Z=0;Z<z.length;Z++){const B=z[Z];B.enabled!==!1&&(B.render(F,N,M,L),B.needsSwap!==!1&&(M=N,N=N===p?d:p))}if(E!==F.outputColorSpace||A!==F.toneMapping){E=F.outputColorSpace,A=F.toneMapping,v.defines={},kt.getTransfer(E)===qt&&(v.defines.SRGB_TRANSFER="");const Z=gb[A];Z&&(v.defines[Z]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=M.texture,F.setRenderTarget(R),F.render(_,w),R=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){u.dispose(),p!==null&&p.dispose(),d!==null&&d.dispose(),g.dispose(),v.dispose()}}const q0=new Wn,K0=new xa(1,1),Z0=new O0(1),J0=new L0,Q0=new F_,eg=new z0,Hm=[],Gm=[],Vm=new Float32Array(16),Wm=new Float32Array(9),jm=new Float32Array(4);function ya(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=Hm[o];if(l===void 0&&(l=new Float32Array(o),Hm[o]=l),e!==0){r.toArray(l,0);for(let u=1,p=0;u!==e;++u)p+=t,s[u].toArray(l,p)}return l}function Mn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function En(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function hc(s,e){let t=Gm[e];t===void 0&&(t=new Int32Array(e),Gm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function vb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function _b(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;s.uniform2fv(this.addr,e),En(t,e)}}function yb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mn(t,e))return;s.uniform3fv(this.addr,e),En(t,e)}}function Sb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;s.uniform4fv(this.addr,e),En(t,e)}}function bb(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Mn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),En(t,e)}else{if(Mn(t,r))return;jm.set(r),s.uniformMatrix2fv(this.addr,!1,jm),En(t,r)}}function wb(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Mn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),En(t,e)}else{if(Mn(t,r))return;Wm.set(r),s.uniformMatrix3fv(this.addr,!1,Wm),En(t,r)}}function Mb(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Mn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),En(t,e)}else{if(Mn(t,r))return;Vm.set(r),s.uniformMatrix4fv(this.addr,!1,Vm),En(t,r)}}function Eb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Tb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;s.uniform2iv(this.addr,e),En(t,e)}}function Cb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;s.uniform3iv(this.addr,e),En(t,e)}}function Ab(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;s.uniform4iv(this.addr,e),En(t,e)}}function Rb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Nb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;s.uniform2uiv(this.addr,e),En(t,e)}}function Pb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;s.uniform3uiv(this.addr,e),En(t,e)}}function Db(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;s.uniform4uiv(this.addr,e),En(t,e)}}function pc(s){return s.version===0&&(s.compareFunction=P0,s.needsUpdate=!0),s}function Lb(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?l=pc(K0):l=q0,t.setTexture2D(e||l,o)}function Ib(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Q0,o)}function kb(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_CUBE_SHADOW?l=pc(Z0):l=eg,t.setTextureCube(e||l,o)}function Ub(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||J0,o)}function Fb(s){switch(s){case 5126:return vb;case 35664:return _b;case 35665:return yb;case 35666:return Sb;case 35674:return bb;case 35675:return wb;case 35676:return Mb;case 5124:case 35670:return Eb;case 35667:case 35671:return Tb;case 35668:case 35672:return Cb;case 35669:case 35673:return Ab;case 5125:return Rb;case 36294:return Nb;case 36295:return Pb;case 36296:return Db;case 35678:case 36198:case 36298:case 36306:case 35682:return Lb;case 35679:case 36299:case 36307:return Ib;case 35680:case 36300:case 36308:case 36293:return kb;case 36289:case 36303:case 36311:case 36292:return Ub}}function zb(s,e){s.uniform1fv(this.addr,e)}function Ob(s,e){const t=ya(e,this.size,2);s.uniform2fv(this.addr,t)}function Bb(s,e){const t=ya(e,this.size,3);s.uniform3fv(this.addr,t)}function Hb(s,e){const t=ya(e,this.size,4);s.uniform4fv(this.addr,t)}function Gb(s,e){const t=ya(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Vb(s,e){const t=ya(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Wb(s,e){const t=ya(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function jb(s,e){s.uniform1iv(this.addr,e)}function $b(s,e){s.uniform2iv(this.addr,e)}function Xb(s,e){s.uniform3iv(this.addr,e)}function Yb(s,e){s.uniform4iv(this.addr,e)}function qb(s,e){s.uniform1uiv(this.addr,e)}function Kb(s,e){s.uniform2uiv(this.addr,e)}function Zb(s,e){s.uniform3uiv(this.addr,e)}function Jb(s,e){s.uniform4uiv(this.addr,e)}function Qb(s,e,t){const r=this.cache,o=e.length,l=hc(t,o);Mn(r,l)||(s.uniform1iv(this.addr,l),En(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=pc(K0):u=q0;for(let p=0;p!==o;++p)t.setTexture2D(e[p]||u,l[p])}function ew(s,e,t){const r=this.cache,o=e.length,l=hc(t,o);Mn(r,l)||(s.uniform1iv(this.addr,l),En(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Q0,l[u])}function tw(s,e,t){const r=this.cache,o=e.length,l=hc(t,o);Mn(r,l)||(s.uniform1iv(this.addr,l),En(r,l));let u;this.type===s.SAMPLER_CUBE_SHADOW?u=pc(Z0):u=eg;for(let p=0;p!==o;++p)t.setTextureCube(e[p]||u,l[p])}function nw(s,e,t){const r=this.cache,o=e.length,l=hc(t,o);Mn(r,l)||(s.uniform1iv(this.addr,l),En(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||J0,l[u])}function iw(s){switch(s){case 5126:return zb;case 35664:return Ob;case 35665:return Bb;case 35666:return Hb;case 35674:return Gb;case 35675:return Vb;case 35676:return Wb;case 5124:case 35670:return jb;case 35667:case 35671:return $b;case 35668:case 35672:return Xb;case 35669:case 35673:return Yb;case 5125:return qb;case 36294:return Kb;case 36295:return Zb;case 36296:return Jb;case 35678:case 36198:case 36298:case 36306:case 35682:return Qb;case 35679:case 36299:case 36307:return ew;case 35680:case 36300:case 36308:case 36293:return tw;case 36289:case 36303:case 36311:case 36292:return nw}}class rw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Fb(t.type)}}class sw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=iw(t.type)}}class aw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const p=o[l];p.setValue(e,t[p.id],r)}}}const wd=/(\w+)(\])?(\[|\.)?/g;function $m(s,e){s.seq.push(e),s.map[e.id]=e}function ow(s,e,t){const r=s.name,o=r.length;for(wd.lastIndex=0;;){const l=wd.exec(r),u=wd.lastIndex;let p=l[1];const d=l[2]==="]",m=l[3];if(d&&(p=p|0),m===void 0||m==="["&&u+2===o){$m(t,m===void 0?new rw(p,s,e):new sw(p,s,e));break}else{let v=t.map[p];v===void 0&&(v=new aw(p),$m(t,v)),t=v}}}class Jl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const p=e.getActiveUniform(t,u),d=e.getUniformLocation(t,p.name);ow(p,d,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const p=t[l],d=r[p.id];d.needsUpdate!==!1&&p.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function Xm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const lw=37297;let cw=0;function uw(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const p=u+1;r.push(`${p===e?">":" "} ${p}: ${t[u]}`)}return r.join(`
`)}const Ym=new wt;function dw(s){kt._getMatrix(Ym,kt.workingColorSpace,s);const e=`mat3( ${Ym.elements.map(t=>t.toFixed(4))} )`;switch(kt.getTransfer(s)){case rc:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return yt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function qm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const p=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+uw(s.getShaderSource(e),p)}else return l}function fw(s,e){const t=dw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const hw={[p0]:"Linear",[m0]:"Reinhard",[g0]:"Cineon",[x0]:"ACESFilmic",[_0]:"AgX",[y0]:"Neutral",[v0]:"Custom"};function pw(s,e){const t=hw[e];return t===void 0?(yt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wl=new he;function mw(){kt.getLuminanceCoefficients(Wl);const s=Wl.x.toFixed(4),e=Wl.y.toFixed(4),t=Wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function xw(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function vw(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let p=1;l.type===s.FLOAT_MAT2&&(p=2),l.type===s.FLOAT_MAT3&&(p=3),l.type===s.FLOAT_MAT4&&(p=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:p}}return t}function so(s){return s!==""}function Km(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Zm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _w=/^[ \t]*#include +<([\w\d./]+)>/gm;function pf(s){return s.replace(_w,yw)}function yw(s,e){const t=Ct[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return pf(t)}const Sw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jm(s){return s.replace(Sw,bw)}function bw(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Qm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const ww={[jl]:"SHADOWMAP_TYPE_PCF",[io]:"SHADOWMAP_TYPE_VSM"};function Mw(s){return ww[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ew={[uo]:"ENVMAP_MODE_REFRACTION"};function Tw(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Ew[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Cw={[h0]:"ENVMAP_BLENDING_MULTIPLY",[f_]:"ENVMAP_BLENDING_MIX",[h_]:"ENVMAP_BLENDING_ADD"};function Aw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Cw[s.combine]||"ENVMAP_BLENDING_NONE"}function Rw(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,p=t.fragmentShader;const d=Mw(t),m=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",g=Tw(t),v=Aw(t),_=gw(t),w=xw(l),E=o.createProgram();let A,y,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(A=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(so).join(`
`),A.length>0&&(A+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(so).join(`
`),y.length>0&&(y+=`
`)):(A=[Qm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),y=[Qm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tr?"#define TONE_MAPPING":"",t.toneMapping!==Tr?Ct.tonemapping_pars_fragment:"",t.toneMapping!==Tr?pw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,fw("linearToOutputTexel",t.outputColorSpace),mw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(so).join(`
`)),u=pf(u),u=Km(u,t),u=Zm(u,t),p=pf(p),p=Km(p,t),p=Zm(p,t),u=Jm(u),p=Jm(p),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,A=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,y=["#define varying in",t.glslVersion===hm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const R=b+A+u,z=b+y+p,D=Xm(o,o.VERTEX_SHADER,R),F=Xm(o,o.FRAGMENT_SHADER,z);o.attachShader(E,D),o.attachShader(E,F),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function L(B){if(s.debug.checkShaderErrors){const X=o.getProgramInfoLog(E)||"",O=o.getShaderInfoLog(D)||"",H=o.getShaderInfoLog(F)||"",$=X.trim(),j=O.trim(),ce=H.trim();let te=!0,q=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(te=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,E,D,F);else{const Y=qm(o,D,"vertex"),G=qm(o,F,"fragment");$t("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+$+`
`+Y+`
`+G)}else $!==""?yt("WebGLProgram: Program Info Log:",$):(j===""||ce==="")&&(q=!1);q&&(B.diagnostics={runnable:te,programLog:$,vertexShader:{log:j,prefix:A},fragmentShader:{log:ce,prefix:y}})}o.deleteShader(D),o.deleteShader(F),M=new Jl(o,E),N=vw(o,E)}let M;this.getUniforms=function(){return M===void 0&&L(this),M};let N;this.getAttributes=function(){return N===void 0&&L(this),N};let Z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=o.getProgramParameter(E,lw)),Z},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cw++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=D,this.fragmentShader=F,this}let Nw=0;class Pw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Dw(e),t.set(e,r)),r}}class Dw{constructor(e){this.id=Nw++,this.code=e,this.usedTimes=0}}function Lw(s){return s===Cs||s===tc||s===nc}function Iw(s,e,t,r,o,l){const u=new I0,p=new Pw,d=new Set,m=[],g=new Map,v=r.logarithmicDepthBuffer,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(M){return d.add(M),M===0?"uv":`uv${M}`}function E(M,N,Z,B,X,O){const H=B.fog,$=X.geometry,j=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?B.environment:null,ce=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,te=e.get(M.envMap||j,ce),q=_[M.type];let Y=r.precision;M.precision!==null&&(Y=r.getMaxPrecision(M.precision),Y!==M.precision&&yt("WebGLProgram.getParameters:",M.precision,"not supported, using",Y,"instead."));const G=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,P=G!==void 0?G.length:0;let K=0;$.morphAttributes.position!==void 0&&(K=1),$.morphAttributes.normal!==void 0&&(K=2),$.morphAttributes.color!==void 0&&(K=3);let Te,ie,xe,Me;if(q){const Oe=er[q];Te=Oe.vertexShader,ie=Oe.fragmentShader}else{Te=M.vertexShader,ie=M.fragmentShader;const Oe=p.getVertexShaderStage(M),ut=p.getFragmentShaderStage(M);p.update(M,Oe,ut),xe=Oe.id,Me=ut.id}const ge=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),Pe=X.isInstancedMesh===!0,st=X.isBatchedMesh===!0,je=!!M.map,Ee=!!M.matcap,Fe=!!te,Ge=Fe&&te.isPMREMTexture===!0,ct=!!M.aoMap,xt=!!M.lightMap,vt=!!M.bumpMap&&M.wireframe===!1,me=!!M.normalMap,Xt=!!M.displacementMap,It=!!M.emissiveMap,Zt=!!M.metalnessMap,Wt=!!M.roughnessMap,mn=M.anisotropy>0,Q=M.clearcoat>0,Jt=M.diffuseRoughness>0,Et=M.dispersion>0,St=M.retroreflectivity>0,de=M.iridescence>0,bt=M.sheen>0,Je=M.transmission>0,nt=mn&&!!M.anisotropyMap,I=Q&&!!M.clearcoatMap,T=Q&&!!M.clearcoatNormalMap,ae=Q&&!!M.clearcoatRoughnessMap,Re=Jt&&!!M.diffuseRoughnessMap,we=de&&!!M.iridescenceMap,Ue=de&&!!M.iridescenceThicknessMap,Be=bt&&!!M.sheenColorMap,ve=bt&&!!M.sheenRoughnessMap,Se=!!M.specularMap,_e=!!M.specularColorMap,k=!!M.specularIntensityMap,oe=Je&&!!M.transmissionMap,le=Je&&!!M.thicknessMap,Ae=!!M.gradientMap,Ne=!!M.alphaMap,De=M.alphaTest>0,$e=!!M.alphaHash,dt=!!M.extensions;let Ce=Tr;M.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Ce=s.toneMapping);const Xe=Ge?te.isCompressedCubeTexture?te.image[0].mipmaps:te.mipmaps:null,at={shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:Te,fragmentShader:ie,defines:M.defines,customVertexShaderID:xe,customFragmentShaderID:Me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:Y,batching:st,batchingColor:st&&X._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&X.instanceColor!==null,instancingMorph:Pe&&X.morphTexture!==null,outputColorSpace:ge===null?s.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:kt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:je,matcap:Ee,envMap:Fe,envMapMode:Fe&&te.mapping,envMapPMREM:Ge,envMapMaxLod:Ge?Xe.length-1:null,envMapSize:Ge?Xe[0].width:null,aoMap:ct,lightMap:xt,bumpMap:vt,normalMap:me,displacementMap:Xt,emissiveMap:It,normalMapObjectSpace:me&&M.normalMapType===g_,normalMapTangentSpace:me&&M.normalMapType===df,packedNormalMap:me&&M.normalMapType===df&&Lw(M.normalMap.format),metalnessMap:Zt,roughnessMap:Wt,anisotropy:mn,anisotropyMap:nt,clearcoat:Q,clearcoatMap:I,clearcoatNormalMap:T,clearcoatRoughnessMap:ae,diffuseRoughness:Jt,diffuseRoughnessMap:Re,dispersion:Et,retroreflection:St,iridescence:de,iridescenceMap:we,iridescenceThicknessMap:Ue,sheen:bt,sheenColorMap:Be,sheenRoughnessMap:ve,specularMap:Se,specularColorMap:_e,specularIntensityMap:k,transmission:Je,transmissionMap:oe,thicknessMap:le,gradientMap:Ae,opaque:M.transparent===!1&&M.blending===ao&&M.alphaToCoverage===!1,alphaMap:Ne,alphaTest:De,alphaHash:$e,combine:M.combine,mapUv:je&&w(M.map.channel),aoMapUv:ct&&w(M.aoMap.channel),lightMapUv:xt&&w(M.lightMap.channel),bumpMapUv:vt&&w(M.bumpMap.channel),normalMapUv:me&&w(M.normalMap.channel),displacementMapUv:Xt&&w(M.displacementMap.channel),emissiveMapUv:It&&w(M.emissiveMap.channel),metalnessMapUv:Zt&&w(M.metalnessMap.channel),roughnessMapUv:Wt&&w(M.roughnessMap.channel),anisotropyMapUv:nt&&w(M.anisotropyMap.channel),clearcoatMapUv:I&&w(M.clearcoatMap.channel),clearcoatNormalMapUv:T&&w(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&w(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Re&&w(M.diffuseRoughnessMap.channel),iridescenceMapUv:we&&w(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&w(M.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&w(M.sheenColorMap.channel),sheenRoughnessMapUv:ve&&w(M.sheenRoughnessMap.channel),specularMapUv:Se&&w(M.specularMap.channel),specularColorMapUv:_e&&w(M.specularColorMap.channel),specularIntensityMapUv:k&&w(M.specularIntensityMap.channel),transmissionMapUv:oe&&w(M.transmissionMap.channel),thicknessMapUv:le&&w(M.thicknessMap.channel),alphaMapUv:Ne&&w(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(me||mn),vertexNormals:!!$.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!$.attributes.uv&&(je||Ne),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||$.attributes.normal===void 0&&me===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:ye,skinning:X.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:K,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:O.filter(Oe=>Oe.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&Z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ce,decodeVideoTexture:je&&M.map.isVideoTexture===!0&&kt.getTransfer(M.map.colorSpace)===qt,decodeVideoTextureEmissive:It&&M.emissiveMap.isVideoTexture===!0&&kt.getTransfer(M.emissiveMap.colorSpace)===qt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Vi,flipSided:M.side===Fn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:dt&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&M.extensions.multiDraw===!0||st)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return at.vertexUv1s=d.has(1),at.vertexUv2s=d.has(2),at.vertexUv3s=d.has(3),d.clear(),at}function A(M){const N=[];if(M.shaderID?N.push(M.shaderID):(N.push(M.customVertexShaderID),N.push(M.customFragmentShaderID)),M.defines!==void 0)for(const Z in M.defines)N.push(Z),N.push(M.defines[Z]);return M.isRawShaderMaterial===!1&&(y(N,M),b(N,M),N.push(s.outputColorSpace)),N.push(M.customProgramCacheKey),N.join()}function y(M,N){M.push(N.precision),M.push(N.outputColorSpace),M.push(N.envMapMode),M.push(N.envMapPMREM),M.push(N.envMapMaxLod),M.push(N.envMapSize),M.push(N.mapUv),M.push(N.alphaMapUv),M.push(N.lightMapUv),M.push(N.aoMapUv),M.push(N.bumpMapUv),M.push(N.normalMapUv),M.push(N.displacementMapUv),M.push(N.emissiveMapUv),M.push(N.metalnessMapUv),M.push(N.roughnessMapUv),M.push(N.anisotropyMapUv),M.push(N.clearcoatMapUv),M.push(N.clearcoatNormalMapUv),M.push(N.clearcoatRoughnessMapUv),M.push(N.diffuseRoughnessMapUv),M.push(N.iridescenceMapUv),M.push(N.iridescenceThicknessMapUv),M.push(N.sheenColorMapUv),M.push(N.sheenRoughnessMapUv),M.push(N.specularMapUv),M.push(N.specularColorMapUv),M.push(N.specularIntensityMapUv),M.push(N.transmissionMapUv),M.push(N.thicknessMapUv),M.push(N.combine),M.push(N.fogExp2),M.push(N.sizeAttenuation),M.push(N.morphTargetsCount),M.push(N.numSunLights),M.push(N.numDirLights),M.push(N.numPointLights),M.push(N.numSpotLights),M.push(N.numSpotLightMaps),M.push(N.numHemiLights),M.push(N.numRectAreaLights),M.push(N.numSunLightShadows),M.push(N.numDirLightShadows),M.push(N.numPointLightShadows),M.push(N.numSpotLightShadows),M.push(N.numSpotLightShadowsWithMaps),M.push(N.numLightProbes),M.push(N.numLightProbeGrids),M.push(N.shadowMapType),M.push(N.toneMapping),M.push(N.numClippingPlanes),M.push(N.numClipIntersection),M.push(N.depthPacking)}function b(M,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.retroreflection&&u.enable(24),N.diffuseRoughness&&u.enable(25),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),N.packedNormalMap&&u.enable(22),N.vertexNormals&&u.enable(23),M.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),N.numLightProbeGrids>0&&u.enable(22),N.hasPositionAttribute&&u.enable(23),M.push(u.mask)}function R(M){const N=_[M.type];let Z;if(N){const B=er[N];Z=iy.clone(B.uniforms)}else Z=M.uniforms;return Z}function z(M,N){let Z=g.get(N);return Z!==void 0?++Z.usedTimes:(Z=new Rw(s,N,M,o),m.push(Z),g.set(N,Z)),Z}function D(M){if(--M.usedTimes===0){const N=m.indexOf(M);m[N]=m[m.length-1],m.pop(),g.delete(M.cacheKey),M.destroy()}}function F(M){p.remove(M)}function L(){p.dispose()}return{getParameters:E,getProgramCacheKey:A,getUniforms:R,acquireProgram:z,releaseProgram:D,releaseShaderCache:F,programs:m,dispose:L}}function kw(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let p=s.get(u);return p===void 0&&(p={},s.set(u,p)),p}function r(u){s.delete(u)}function o(u,p,d){s.get(u)[p]=d}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function Uw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function e0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function t0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(_){let w=0;return _.isInstancedMesh&&(w+=2),_.isSkinnedMesh&&(w+=1),w}function p(_,w,E,A,y,b){let R=s[e];return R===void 0?(R={id:_.id,object:_,geometry:w,material:E,materialVariant:u(_),groupOrder:A,renderOrder:_.renderOrder,z:y,group:b},s[e]=R):(R.id=_.id,R.object=_,R.geometry=w,R.material=E,R.materialVariant=u(_),R.groupOrder=A,R.renderOrder=_.renderOrder,R.z=y,R.group=b),e++,R}function d(_,w,E,A,y,b,R){R.reversedDepth===!0&&(y=-y);const z=p(_,w,E,A,y,b);E.transmission>0?r.push(z):E.transparent===!0?o.push(z):t.push(z)}function m(_,w,E,A,y,b){const R=p(_,w,E,A,y,b);E.transmission>0?r.unshift(R):E.transparent===!0?o.unshift(R):t.unshift(R)}function g(_,w){t.length>1&&t.sort(_||Uw),r.length>1&&r.sort(w||e0),o.length>1&&o.sort(w||e0)}function v(){for(let _=e,w=s.length;_<w;_++){const E=s[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:m,finish:v,sort:g}}function Fw(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new t0,s.set(r,[u])):o>=l.length?(u=new t0,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function zw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new he,color:new Dt};break;case"SpotLight":t={position:new he,direction:new he,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new he,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new he,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":t={color:new Dt,position:new he,halfWidth:new he,halfHeight:new he};break}return s[e.id]=t,t}}}function Ow(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Bw=0;function Hw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Gw(s){const e=new zw,t=Ow(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new he);const o=new he,l=new fn,u=new fn;function p(m){let g=0,v=0,_=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let w=0,E=0,A=0,y=0,b=0,R=0,z=0,D=0,F=0,L=0,M=0,N=0,Z=0,B=0;m.sort(Hw);for(let O=0,H=m.length;O<H;O++){const $=m[O],j=$.color,ce=$.intensity,te=$.distance;let q=null;if($.shadow&&$.shadow.map&&($.shadow.map.texture.format===Cs?q=$.shadow.map.texture:q=$.shadow.map.depthTexture||$.shadow.map.texture),$.isAmbientLight)g+=j.r*ce,v+=j.g*ce,_+=j.b*ce;else if($.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector($.sh.coefficients[Y],ce);B++}else if($.isSunLight){const Y=e.get($);if(Y.color.copy($.color).multiplyScalar($.intensity),$.castShadow){const G=$.shadow,P=t.get($);P.shadowIntensity=G.intensity,P.shadowBias=G.bias,P.shadowNormalBias=G.normalBias,P.shadowRadius=G.radius,P.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),r.sunShadow[E]=P,r.sunShadowMap[E]=q;const K=G.getViewportCount();for(let Te=0;Te<K;Te++)r.sunShadowMatrix[A+Te]=G.getMatrix(Te),r.sunShadowCascade[A+Te]=G._cascadeData[Te];A+=K,E++}r.sun[w]=Y,w++}else if($.isDirectionalLight){const Y=e.get($);if(Y.color.copy($.color).multiplyScalar($.intensity),$.castShadow){const G=$.shadow,P=t.get($);P.shadowIntensity=G.intensity,P.shadowBias=G.bias,P.shadowNormalBias=G.normalBias,P.shadowRadius=G.radius,P.shadowMapSize=G.mapSize,r.directionalShadow[y]=P,r.directionalShadowMap[y]=q,r.directionalShadowMatrix[y]=$.shadow.matrix,F++}r.directional[y]=Y,y++}else if($.isSpotLight){const Y=e.get($);Y.position.setFromMatrixPosition($.matrixWorld),Y.color.copy(j).multiplyScalar(ce),Y.distance=te,Y.coneCos=Math.cos($.angle),Y.penumbraCos=Math.cos($.angle*(1-$.penumbra)),Y.decay=$.decay,r.spot[R]=Y;const G=$.shadow;if($.map&&(r.spotLightMap[N]=$.map,N++,G.updateMatrices($),$.castShadow&&Z++),r.spotLightMatrix[R]=G.matrix,$.castShadow){const P=t.get($);P.shadowIntensity=G.intensity,P.shadowBias=G.bias,P.shadowNormalBias=G.normalBias,P.shadowRadius=G.radius,P.shadowMapSize=G.mapSize,r.spotShadow[R]=P,r.spotShadowMap[R]=q,M++}R++}else if($.isRectAreaLight){const Y=e.get($);Y.color.copy(j).multiplyScalar(ce),Y.halfWidth.set($.width*.5,0,0),Y.halfHeight.set(0,$.height*.5,0),r.rectArea[z]=Y,z++}else if($.isPointLight){const Y=e.get($);if(Y.color.copy($.color).multiplyScalar($.intensity),Y.distance=$.distance,Y.decay=$.decay,$.castShadow){const G=$.shadow,P=t.get($);P.shadowIntensity=G.intensity,P.shadowBias=G.bias,P.shadowNormalBias=G.normalBias,P.shadowRadius=G.radius,P.shadowMapSize=G.mapSize,P.shadowCameraNear=G.camera.near,P.shadowCameraFar=G.camera.far,r.pointShadow[b]=P,r.pointShadowMap[b]=q,r.pointShadowMatrix[b]=$.shadow.matrix,L++}r.point[b]=Y,b++}else if($.isHemisphereLight){const Y=e.get($);Y.skyColor.copy($.color).multiplyScalar(ce),Y.groundColor.copy($.groundColor).multiplyScalar(ce),r.hemi[D]=Y,D++}}z>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ze.LTC_FLOAT_1,r.rectAreaLTC2=Ze.LTC_FLOAT_2):(r.rectAreaLTC1=Ze.LTC_HALF_1,r.rectAreaLTC2=Ze.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=_;const X=r.hash;(X.sunLength!==w||X.directionalLength!==y||X.pointLength!==b||X.spotLength!==R||X.rectAreaLength!==z||X.hemiLength!==D||X.numSunShadows!==E||X.numDirectionalShadows!==F||X.numPointShadows!==L||X.numSpotShadows!==M||X.numSpotMaps!==N||X.numLightProbes!==B)&&(r.sun.length=w,r.directional.length=y,r.spot.length=R,r.rectArea.length=z,r.point.length=b,r.hemi.length=D,r.sunShadow.length=E,r.sunShadowMap.length=E,r.sunShadowMatrix.length=A,r.sunShadowCascade.length=A,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.directionalShadowMatrix.length=F,r.pointShadow.length=L,r.pointShadowMap.length=L,r.pointShadowMatrix.length=L,r.spotShadow.length=M,r.spotShadowMap.length=M,r.spotLightMatrix.length=M+N-Z,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=Z,r.numLightProbes=B,X.sunLength=w,X.directionalLength=y,X.pointLength=b,X.spotLength=R,X.rectAreaLength=z,X.hemiLength=D,X.numSunShadows=E,X.numDirectionalShadows=F,X.numPointShadows=L,X.numSpotShadows=M,X.numSpotMaps=N,X.numLightProbes=B,r.version=Bw++)}function d(m,g){let v=0,_=0,w=0,E=0,A=0,y=0;const b=g.matrixWorldInverse;for(let R=0,z=m.length;R<z;R++){const D=m[R];if(D.isSunLight){const F=r.sun[v];F.direction.setFromMatrixPosition(D.matrixWorld),F.direction.transformDirection(b),v++}else if(D.isDirectionalLight){const F=r.directional[_];F.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),F.direction.sub(o),F.direction.transformDirection(b),_++}else if(D.isSpotLight){const F=r.spot[E];F.position.setFromMatrixPosition(D.matrixWorld),F.position.applyMatrix4(b),F.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),F.direction.sub(o),F.direction.transformDirection(b),E++}else if(D.isRectAreaLight){const F=r.rectArea[A];F.position.setFromMatrixPosition(D.matrixWorld),F.position.applyMatrix4(b),u.identity(),l.copy(D.matrixWorld),l.premultiply(b),u.extractRotation(l),F.halfWidth.set(D.width*.5,0,0),F.halfHeight.set(0,D.height*.5,0),F.halfWidth.applyMatrix4(u),F.halfHeight.applyMatrix4(u),A++}else if(D.isPointLight){const F=r.point[w];F.position.setFromMatrixPosition(D.matrixWorld),F.position.applyMatrix4(b),w++}else if(D.isHemisphereLight){const F=r.hemi[y];F.direction.setFromMatrixPosition(D.matrixWorld),F.direction.transformDirection(b),y++}}}return{setup:p,setupView:d,state:r}}function n0(s){const e=new Gw(s),t=[],r=[],o=[];function l(v){g.camera=v,t.length=0,r.length=0,o.length=0}function u(v){v.isLightProbeGrid?o.push(v):t.push(v)}function p(v){r.push(v)}function d(){e.setup(t),o.sort((v,_)=>v.priority-_.priority||v.id-_.id)}function m(v){e.setupView(t,v)}const g={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:g,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:p}}function Vw(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let p;return u===void 0?(p=new n0(s),e.set(o,[p])):l>=u.length?(p=new n0(s),u.push(p)):p=u[l],p}function r(){e=new WeakMap}return{get:t,dispose:r}}const Ww=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jw=`uniform sampler2D shadow_pass;
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
}`,$w=[new he(1,0,0),new he(-1,0,0),new he(0,1,0),new he(0,-1,0),new he(0,0,1),new he(0,0,-1)],Xw=[new he(0,-1,0),new he(0,-1,0),new he(0,0,1),new he(0,0,-1),new he(0,-1,0),new he(0,-1,0)],i0=new fn,no=new he,Md=new he;function Yw(s,e,t){let r=new po;const o=new Lt,l=new Lt,u=new dn,p=new oy,d=new ly,m={},g=t.maxTextureSize,v={[Ts]:Fn,[Fn]:Ts,[Vi]:Vi},_=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Ww,fragmentShader:jw}),w=_.clone();w.defines.HORIZONTAL_PASS=1;const E=new or;E.setAttribute("position",new Ms(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Sn(E,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jl;let b=this.type;this.render=function(L,M,N){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===Xv&&(yt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=jl);const Z=s.getRenderTarget(),B=s.getActiveCubeFace(),X=s.getActiveMipmapLevel(),O=s.state;O.setBlending(fa),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const H=b!==this.type;H&&M.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(j=>j.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,j=L.length;$<j;$++){const ce=L[$],te=ce.shadow;if(te===void 0){yt("WebGLShadowMap:",ce,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;o.copy(te.mapSize);const q=te.getFrameExtents();o.multiply(q),l.copy(te.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/q.x),o.x=l.x*q.x,te.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/q.y),o.y=l.y*q.y,te.mapSize.y=l.y));const Y=s.state.buffers.depth.getReversed();if(te.camera._reversedDepth=Y,te.map===null||H===!0){if(te.map!==null&&(te.map.depthTexture!==null&&(te.map.depthTexture.dispose(),te.map.depthTexture=null),te.map.dispose()),this.type===io){if(ce.isPointLight){yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}te.map=new rr(o.x,o.y,{format:Cs,type:ar,minFilter:ai,magFilter:ai,generateMipmaps:!1}),te.map.texture.name=ce.name+".shadowMap",te.map.depthTexture=new xa(o.x,o.y,nr),te.map.depthTexture.name=ce.name+".shadowMapDepth",te.map.depthTexture.format=ts,te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=Un,te.map.depthTexture.magFilter=Un}else ce.isPointLight?(te.map=new Lf(o.x),te.map.depthTexture=new O0(o.x,sr)):(te.map=new rr(o.x,o.y),te.map.depthTexture=new xa(o.x,o.y,sr)),te.map.depthTexture.name=ce.name+".shadowMap",te.map.depthTexture.format=ts,this.type===jl?(te.map.depthTexture.compareFunction=Y?N0:R0,te.map.depthTexture.minFilter=ai,te.map.depthTexture.magFilter=ai):(te.map.depthTexture.compareFunction=null,te.map.depthTexture.minFilter=Un,te.map.depthTexture.magFilter=Un);te.camera.updateProjectionMatrix()}te.map.isWebGLCubeRenderTarget!==!0&&(te.map.width!==o.x||te.map.height!==o.y)&&te.map.setSize(o.x,o.y);const G=te.map.isWebGLCubeRenderTarget?6:te.getViewportCount();ce.isPointLight!==!0&&te.updateMatrices(ce,N);const P=(te.camera.layers.mask&4294967294)!==0?te.camera.layers:N.layers;for(let K=0;K<G;K++){const Te=te.getCamera(K);if(ce.isPointLight){const ie=te.camera,xe=te.matrix,Me=ce.distance||ie.far;Me!==ie.far&&(ie.far=Me,ie.updateProjectionMatrix()),no.setFromMatrixPosition(ce.matrixWorld),ie.position.copy(no),Md.copy(ie.position),Md.add($w[K]),ie.up.copy(Xw[K]),ie.lookAt(Md),ie.updateMatrixWorld(),xe.makeTranslation(-no.x,-no.y,-no.z),i0.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),te._frustum.setFromProjectionMatrix(i0,ie.coordinateSystem,ie.reversedDepth)}if(te.map.isWebGLCubeRenderTarget)s.setRenderTarget(te.map,K),s.clear();else{K===0&&(s.setRenderTarget(te.map),s.clear());const ie=te.getViewport(K);u.set(l.x*ie.x,l.y*ie.y,l.x*ie.z,l.y*ie.w),O.viewport(u)}r=te.getFrustum(K),D(M,N,Te,ce,P,this.type)}te.isPointLightShadow!==!0&&this.type===io&&R(te,N),te.needsUpdate=!1}b=this.type,y.needsUpdate=!1,s.setRenderTarget(Z,B,X)};function R(L,M){const N=e.update(A);_.defines.VSM_SAMPLES!==L.blurSamples&&(_.defines.VSM_SAMPLES=L.blurSamples,w.defines.VSM_SAMPLES=L.blurSamples,_.needsUpdate=!0,w.needsUpdate=!0),L.mapPass===null?L.mapPass=new rr(o.x,o.y,{format:Cs,type:ar}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),_.uniforms.shadow_pass.value=L.map.depthTexture,_.uniforms.resolution.value.set(L.map.width,L.map.height),_.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(M,null,N,_,A,null),w.uniforms.shadow_pass.value=L.mapPass.texture,w.uniforms.resolution.value.set(L.map.width,L.map.height),w.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(M,null,N,w,A,null)}function z(L,M,N,Z){let B=null;const X=N.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(X!==void 0)B=X;else if(B=N.isPointLight===!0?d:p,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const O=B.uuid,H=M.uuid;let $=m[O];$===void 0&&($={},m[O]=$);let j=$[H];j===void 0&&(j=B.clone(),$[H]=j,M.addEventListener("dispose",F)),B=j}if(B.visible=M.visible,B.wireframe=M.wireframe,Z===io?B.side=M.shadowSide!==null?M.shadowSide:M.side:B.side=M.shadowSide!==null?M.shadowSide:v[M.side],B.alphaMap=M.alphaMap,B.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,B.map=M.map,B.clipShadows=M.clipShadows,B.clippingPlanes=M.clippingPlanes,B.clipIntersection=M.clipIntersection,B.displacementMap=M.displacementMap,B.displacementScale=M.displacementScale,B.displacementBias=M.displacementBias,B.wireframeLinewidth=M.wireframeLinewidth,B.linewidth=M.linewidth,N.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const O=s.properties.get(B);O.light=N}return B}function D(L,M,N,Z,B,X){if(L.visible===!1)return;if(L.layers.test(B)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&X===io)&&(!L.frustumCulled||L.intersectsFrustum(r))){L.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,L.matrixWorld);const $=e.update(L),j=L.material;if(Array.isArray(j)){const ce=$.groups;for(let te=0,q=ce.length;te<q;te++){const Y=ce[te],G=j[Y.materialIndex];if(G&&G.visible){const P=z(L,G,Z,X);L.onBeforeShadow(s,L,M,N,$,P,Y),s.renderBufferDirect(N,null,$,P,L,Y),L.onAfterShadow(s,L,M,N,$,P,Y)}}}else if(j.visible){const ce=z(L,j,Z,X);L.onBeforeShadow(s,L,M,N,$,ce,null),s.renderBufferDirect(N,null,$,ce,L,null),L.onAfterShadow(s,L,M,N,$,ce,null)}}const H=L.children;for(let $=0,j=H.length;$<j;$++)D(H[$],M,N,Z,B,X)}function F(L){L.target.removeEventListener("dispose",F);for(const N in m){const Z=m[N],B=L.target.uuid;B in Z&&(Z[B].dispose(),delete Z[B])}}}function qw(s,e){function t(){let k=!1;const oe=new dn;let le=null;const Ae=new dn(0,0,0,0);return{setMask:function(Ne){le!==Ne&&!k&&(s.colorMask(Ne,Ne,Ne,Ne),le=Ne)},setLocked:function(Ne){k=Ne},setClear:function(Ne,De,$e,dt,Ce){Ce===!0&&(Ne*=dt,De*=dt,$e*=dt),oe.set(Ne,De,$e,dt),Ae.equals(oe)===!1&&(s.clearColor(Ne,De,$e,dt),Ae.copy(oe))},reset:function(){k=!1,le=null,Ae.set(-1,0,0,0)}}}function r(){let k=!1,oe=!1,le=null,Ae=null,Ne=null;return{setReversed:function(De){if(oe!==De){const $e=e.get("EXT_clip_control");De?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),oe=De;const dt=Ne;Ne=null,this.setClear(dt)}},getReversed:function(){return oe},setTest:function(De){De?ye(s.DEPTH_TEST):Pe(s.DEPTH_TEST)},setMask:function(De){le!==De&&!k&&(s.depthMask(De),le=De)},setFunc:function(De){if(oe&&(De=C_[De]),Ae!==De){switch(De){case Td:s.depthFunc(s.NEVER);break;case Cd:s.depthFunc(s.ALWAYS);break;case Ad:s.depthFunc(s.LESS);break;case co:s.depthFunc(s.LEQUAL);break;case Rd:s.depthFunc(s.EQUAL);break;case Nd:s.depthFunc(s.GEQUAL);break;case Pd:s.depthFunc(s.GREATER);break;case Dd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ae=De}},setLocked:function(De){k=De},setClear:function(De){Ne!==De&&(Ne=De,oe&&(De=1-De),s.clearDepth(De))},reset:function(){k=!1,le=null,Ae=null,Ne=null,oe=!1}}}function o(){let k=!1,oe=null,le=null,Ae=null,Ne=null,De=null,$e=null,dt=null,Ce=null;return{setTest:function(Xe){k||(Xe?ye(s.STENCIL_TEST):Pe(s.STENCIL_TEST))},setMask:function(Xe){oe!==Xe&&!k&&(s.stencilMask(Xe),oe=Xe)},setFunc:function(Xe,at,Oe){(le!==Xe||Ae!==at||Ne!==Oe)&&(s.stencilFunc(Xe,at,Oe),le=Xe,Ae=at,Ne=Oe)},setOp:function(Xe,at,Oe){(De!==Xe||$e!==at||dt!==Oe)&&(s.stencilOp(Xe,at,Oe),De=Xe,$e=at,dt=Oe)},setLocked:function(Xe){k=Xe},setClear:function(Xe){Ce!==Xe&&(s.clearStencil(Xe),Ce=Xe)},reset:function(){k=!1,oe=null,le=null,Ae=null,Ne=null,De=null,$e=null,dt=null,Ce=null}}}const l=new t,u=new r,p=new o;let d={};const m=new WeakMap;let g={},v={},_={},w=new WeakMap,E=[],A=null,y=!1,b=null,R=null,z=null,D=null,F=null,L=null,M=null,N=new Dt(0,0,0),Z=0,B=!1,X=null,O=null,H=null,$=null,j=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,q=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),te=q>=1):Y.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),te=q>=2);let G=null,P={};const K=s.getParameter(s.SCISSOR_BOX),Te=s.getParameter(s.VIEWPORT),ie=new dn().fromArray(K),xe=new dn().fromArray(Te);function Me(k,oe,le,Ae){const Ne=new Uint8Array(4),De=s.createTexture();s.bindTexture(k,De),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<le;$e++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(oe,0,s.RGBA,1,1,Ae,0,s.RGBA,s.UNSIGNED_BYTE,Ne):s.texImage2D(oe+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ne);return De}const ge={};ge[s.TEXTURE_2D]=Me(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=Me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[s.TEXTURE_2D_ARRAY]=Me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=Me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),p.setClear(0),ye(s.DEPTH_TEST),u.setFunc(co),vt(!1),me(um),ye(s.CULL_FACE),ct(fa);function ye(k){g[k]!==!0&&(s.enable(k),g[k]=!0)}function Pe(k){g[k]!==!1&&(s.disable(k),g[k]=!1)}function st(k,oe){return _[k]!==oe?(s.bindFramebuffer(k,oe),_[k]=oe,k===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=oe),k===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=oe),!0):!1}function je(k,oe){let le=E,Ae=!1;if(k){le=w.get(oe),le===void 0&&(le=[],w.set(oe,le));const Ne=k.textures;if(le.length!==Ne.length||le[0]!==s.COLOR_ATTACHMENT0){for(let De=0,$e=Ne.length;De<$e;De++)le[De]=s.COLOR_ATTACHMENT0+De;le.length=Ne.length,Ae=!0}}else le[0]!==s.BACK&&(le[0]=s.BACK,Ae=!0);Ae&&s.drawBuffers(le)}function Ee(k){return A!==k?(s.useProgram(k),A=k,!0):!1}const Fe={[ua]:s.FUNC_ADD,[qv]:s.FUNC_SUBTRACT,[Kv]:s.FUNC_REVERSE_SUBTRACT};Fe[Zv]=s.MIN,Fe[Jv]=s.MAX;const Ge={[Qv]:s.ZERO,[e_]:s.ONE,[t_]:s.SRC_COLOR,[d0]:s.SRC_ALPHA,[o_]:s.SRC_ALPHA_SATURATE,[s_]:s.DST_COLOR,[i_]:s.DST_ALPHA,[n_]:s.ONE_MINUS_SRC_COLOR,[f0]:s.ONE_MINUS_SRC_ALPHA,[a_]:s.ONE_MINUS_DST_COLOR,[r_]:s.ONE_MINUS_DST_ALPHA,[l_]:s.CONSTANT_COLOR,[c_]:s.ONE_MINUS_CONSTANT_COLOR,[u_]:s.CONSTANT_ALPHA,[d_]:s.ONE_MINUS_CONSTANT_ALPHA};function ct(k,oe,le,Ae,Ne,De,$e,dt,Ce,Xe){if(k===fa){y===!0&&(Pe(s.BLEND),y=!1);return}if(y===!1&&(ye(s.BLEND),y=!0),k!==Yv){if(k!==b||Xe!==B){if((R!==ua||F!==ua)&&(s.blendEquation(s.FUNC_ADD),R=ua,F=ua),Xe)switch(k){case ao:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ws:s.blendFunc(s.ONE,s.ONE);break;case dm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case fm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:$t("WebGLState: Invalid blending: ",k);break}else switch(k){case ao:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case dm:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fm:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",k);break}z=null,D=null,L=null,M=null,N.set(0,0,0),Z=0,b=k,B=Xe}return}Ne=Ne||oe,De=De||le,$e=$e||Ae,(oe!==R||Ne!==F)&&(s.blendEquationSeparate(Fe[oe],Fe[Ne]),R=oe,F=Ne),(le!==z||Ae!==D||De!==L||$e!==M)&&(s.blendFuncSeparate(Ge[le],Ge[Ae],Ge[De],Ge[$e]),z=le,D=Ae,L=De,M=$e),(dt.equals(N)===!1||Ce!==Z)&&(s.blendColor(dt.r,dt.g,dt.b,Ce),N.copy(dt),Z=Ce),b=k,B=!1}function xt(k,oe){k.side===Vi?Pe(s.CULL_FACE):ye(s.CULL_FACE);let le=k.side===Fn;oe&&(le=!le),vt(le),k.blending===ao&&k.transparent===!1?ct(fa):ct(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),u.setFunc(k.depthFunc),u.setTest(k.depthTest),u.setMask(k.depthWrite),l.setMask(k.colorWrite);const Ae=k.stencilWrite;p.setTest(Ae),Ae&&(p.setMask(k.stencilWriteMask),p.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),p.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),It(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ye(s.SAMPLE_ALPHA_TO_COVERAGE):Pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function vt(k){X!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),X=k)}function me(k){k!==jv?(ye(s.CULL_FACE),k!==O&&(k===um?s.cullFace(s.BACK):k===$v?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pe(s.CULL_FACE),O=k}function Xt(k){k!==H&&(te&&s.lineWidth(k),H=k)}function It(k,oe,le){k?(ye(s.POLYGON_OFFSET_FILL),($!==oe||j!==le)&&($=oe,j=le,u.getReversed()&&(oe=-oe,le=-le),s.polygonOffset(oe,le))):Pe(s.POLYGON_OFFSET_FILL)}function Zt(k){k?ye(s.SCISSOR_TEST):Pe(s.SCISSOR_TEST)}function Wt(k){k===void 0&&(k=s.TEXTURE0+ce-1),G!==k&&(s.activeTexture(k),G=k)}function mn(k,oe,le){le===void 0&&(G===null?le=s.TEXTURE0+ce-1:le=G);let Ae=P[le];Ae===void 0&&(Ae={type:void 0,texture:void 0},P[le]=Ae),(Ae.type!==k||Ae.texture!==oe)&&(G!==le&&(s.activeTexture(le),G=le),s.bindTexture(k,oe||ge[k]),Ae.type=k,Ae.texture=oe)}function Q(){const k=P[G];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Jt(){try{s.compressedTexImage2D(...arguments)}catch(k){$t("WebGLState:",k)}}function Et(){try{s.compressedTexImage3D(...arguments)}catch(k){$t("WebGLState:",k)}}function St(){try{s.texSubImage2D(...arguments)}catch(k){$t("WebGLState:",k)}}function de(){try{s.texSubImage3D(...arguments)}catch(k){$t("WebGLState:",k)}}function bt(){try{s.compressedTexSubImage2D(...arguments)}catch(k){$t("WebGLState:",k)}}function Je(){try{s.compressedTexSubImage3D(...arguments)}catch(k){$t("WebGLState:",k)}}function nt(){try{s.texStorage2D(...arguments)}catch(k){$t("WebGLState:",k)}}function I(){try{s.texStorage3D(...arguments)}catch(k){$t("WebGLState:",k)}}function T(){try{s.texImage2D(...arguments)}catch(k){$t("WebGLState:",k)}}function ae(){try{s.texImage3D(...arguments)}catch(k){$t("WebGLState:",k)}}function Re(k){return v[k]!==void 0?v[k]:s.getParameter(k)}function we(k,oe){v[k]!==oe&&(s.pixelStorei(k,oe),v[k]=oe)}function Ue(k){ie.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),ie.copy(k))}function Be(k){xe.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),xe.copy(k))}function ve(k,oe){let le=m.get(oe);le===void 0&&(le=new WeakMap,m.set(oe,le));let Ae=le.get(k);Ae===void 0&&(Ae=s.getUniformBlockIndex(oe,k.name),s.uniformBlockBinding(oe,Ae,Ae),le.set(k,Ae))}function Se(k,oe,le){const Ne=m.get(oe).get(k);d[Ne]!==le&&(s.bindBufferBase(s.UNIFORM_BUFFER,Ne,le),d[Ne]=le)}function _e(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),g={},v={},G=null,P={},_={},d={},w=new WeakMap,E=[],A=null,y=!1,b=null,R=null,z=null,D=null,F=null,L=null,M=null,N=new Dt(0,0,0),Z=0,B=!1,X=null,O=null,H=null,$=null,j=null,ie.set(0,0,s.canvas.width,s.canvas.height),xe.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),p.reset()}return{buffers:{color:l,depth:u,stencil:p},enable:ye,disable:Pe,bindFramebuffer:st,drawBuffers:je,useProgram:Ee,setBlending:ct,setMaterial:xt,setFlipSided:vt,setCullFace:me,setLineWidth:Xt,setPolygonOffset:It,setScissorTest:Zt,activeTexture:Wt,bindTexture:mn,unbindTexture:Q,compressedTexImage2D:Jt,compressedTexImage3D:Et,texImage2D:T,texImage3D:ae,pixelStorei:we,getParameter:Re,updateUBOMapping:ve,uniformBlockBinding:Se,texStorage2D:nt,texStorage3D:I,texSubImage2D:St,texSubImage3D:de,compressedTexSubImage2D:bt,compressedTexSubImage3D:Je,scissor:Ue,viewport:Be,reset:_e}}function Kw(s,e,t,r,o,l,u){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Lt,g=new WeakMap,v=new Set;let _;const w=new WeakMap,E=new Set,A=new FinalizationRegistry(I=>E.delete(I));let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(I,T){return y?new OffscreenCanvas(I,T):sc("canvas")}function R(I,T,ae){let Re=1;const we=nt(I);if((we.width>ae||we.height>ae)&&(Re=ae/Math.max(we.width,we.height)),Re<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Ue=Math.floor(Re*we.width),Be=Math.floor(Re*we.height);_===void 0&&(_=b(Ue,Be));const ve=T?b(Ue,Be):_;return ve.width=Ue,ve.height=Be,ve.getContext("2d").drawImage(I,0,0,Ue,Be),yt("WebGLRenderer: Texture has been resized from ("+we.width+"x"+we.height+") to ("+Ue+"x"+Be+")."),ve}else return"data"in I&&yt("WebGLRenderer: Image in DataTexture is too big ("+we.width+"x"+we.height+")."),I;return I}function z(I){return I.generateMipmaps}function D(I){s.generateMipmap(I)}function F(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(I,T,ae,Re,we,Ue=!1){if(I!==null){if(s[I]!==void 0)return s[I];yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Be;Re&&(Be=e.get("EXT_texture_norm16"),Be||yt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ve=T;if(T===s.RED&&(ae===s.FLOAT&&(ve=s.R32F),ae===s.HALF_FLOAT&&(ve=s.R16F),ae===s.UNSIGNED_BYTE&&(ve=s.R8),ae===s.UNSIGNED_SHORT&&Be&&(ve=Be.R16_EXT),ae===s.SHORT&&Be&&(ve=Be.R16_SNORM_EXT)),T===s.RED_INTEGER&&(ae===s.UNSIGNED_BYTE&&(ve=s.R8UI),ae===s.UNSIGNED_SHORT&&(ve=s.R16UI),ae===s.UNSIGNED_INT&&(ve=s.R32UI),ae===s.BYTE&&(ve=s.R8I),ae===s.SHORT&&(ve=s.R16I),ae===s.INT&&(ve=s.R32I)),T===s.RG&&(ae===s.FLOAT&&(ve=s.RG32F),ae===s.HALF_FLOAT&&(ve=s.RG16F),ae===s.UNSIGNED_BYTE&&(ve=s.RG8),ae===s.UNSIGNED_SHORT&&Be&&(ve=Be.RG16_EXT),ae===s.SHORT&&Be&&(ve=Be.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(ae===s.UNSIGNED_BYTE&&(ve=s.RG8UI),ae===s.UNSIGNED_SHORT&&(ve=s.RG16UI),ae===s.UNSIGNED_INT&&(ve=s.RG32UI),ae===s.BYTE&&(ve=s.RG8I),ae===s.SHORT&&(ve=s.RG16I),ae===s.INT&&(ve=s.RG32I)),T===s.RGB_INTEGER&&(ae===s.UNSIGNED_BYTE&&(ve=s.RGB8UI),ae===s.UNSIGNED_SHORT&&(ve=s.RGB16UI),ae===s.UNSIGNED_INT&&(ve=s.RGB32UI),ae===s.BYTE&&(ve=s.RGB8I),ae===s.SHORT&&(ve=s.RGB16I),ae===s.INT&&(ve=s.RGB32I)),T===s.RGBA_INTEGER&&(ae===s.UNSIGNED_BYTE&&(ve=s.RGBA8UI),ae===s.UNSIGNED_SHORT&&(ve=s.RGBA16UI),ae===s.UNSIGNED_INT&&(ve=s.RGBA32UI),ae===s.BYTE&&(ve=s.RGBA8I),ae===s.SHORT&&(ve=s.RGBA16I),ae===s.INT&&(ve=s.RGBA32I)),T===s.RGB&&(ae===s.UNSIGNED_SHORT&&Be&&(ve=Be.RGB16_EXT),ae===s.SHORT&&Be&&(ve=Be.RGB16_SNORM_EXT),ae===s.UNSIGNED_INT_5_9_9_9_REV&&(ve=s.RGB9_E5),ae===s.UNSIGNED_INT_10F_11F_11F_REV&&(ve=s.R11F_G11F_B10F)),T===s.RGBA){const Se=Ue?rc:kt.getTransfer(we);ae===s.FLOAT&&(ve=s.RGBA32F),ae===s.HALF_FLOAT&&(ve=s.RGBA16F),ae===s.UNSIGNED_BYTE&&(ve=Se===qt?s.SRGB8_ALPHA8:s.RGBA8),ae===s.UNSIGNED_SHORT&&Be&&(ve=Be.RGBA16_EXT),ae===s.SHORT&&Be&&(ve=Be.RGBA16_SNORM_EXT),ae===s.UNSIGNED_SHORT_4_4_4_4&&(ve=s.RGBA4),ae===s.UNSIGNED_SHORT_5_5_5_1&&(ve=s.RGB5_A1)}return(ve===s.R16F||ve===s.R32F||ve===s.RG16F||ve===s.RG32F||ve===s.RGBA16F||ve===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function M(I,T){let ae;return I?T===null||T===sr||T===ga?ae=s.DEPTH24_STENCIL8:T===nr?ae=s.DEPTH32F_STENCIL8:T===fo&&(ae=s.DEPTH24_STENCIL8,yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===sr||T===ga?ae=s.DEPTH_COMPONENT24:T===nr?ae=s.DEPTH_COMPONENT32F:T===fo&&(ae=s.DEPTH_COMPONENT16),ae}function N(I,T){return z(I)===!0||I.isFramebufferTexture&&I.minFilter!==Un&&I.minFilter!==ai?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function Z(I){const T=new WeakRef(I);r.get(I).__ref=T,E.add(T),A.register(I,T,T)}function B(I){const T=r.get(I).__ref;T!==void 0&&(E.delete(T),A.unregister(T))}function X(I){H(I.target)}function O(I){$(I.target)}function H(I){I.removeEventListener("dispose",X),B(I),ce(I),I.isVideoTexture&&g.delete(I),I.isHTMLTexture&&v.delete(I)}function $(I){I.removeEventListener("dispose",O),B(I),q(I)}function j(){for(const I of E){const T=I.deref();T!==void 0&&(T.isRenderTarget===!0?$(T):H(T))}E.clear(),v.clear()}function ce(I){const T=r.get(I);if(T.__webglInit===void 0)return;const ae=I.source,Re=w.get(ae);if(Re){const we=Re[T.__cacheKey];we.usedTimes--,we.usedTimes===0&&te(I),Object.keys(Re).length===0&&w.delete(ae)}r.remove(I)}function te(I){const T=r.get(I);s.deleteTexture(T.__webglTexture);const ae=I.source,Re=w.get(ae);delete Re[T.__cacheKey],u.memory.textures--}function q(I){const T=r.get(I);T.__depthDisposeCallback&&T.__depthDisposeCallback();const ae=I.depthTexture;if(ae&&ae.renderTarget===I&&H(ae),I.isWebGLCubeRenderTarget)for(let we=0;we<6;we++){if(Array.isArray(T.__webglFramebuffer[we]))for(let Ue=0;Ue<T.__webglFramebuffer[we].length;Ue++)s.deleteFramebuffer(T.__webglFramebuffer[we][Ue]);else s.deleteFramebuffer(T.__webglFramebuffer[we]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[we])}else{if(Array.isArray(T.__webglFramebuffer))for(let we=0;we<T.__webglFramebuffer.length;we++)s.deleteFramebuffer(T.__webglFramebuffer[we]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let we=0;we<T.__webglColorRenderbuffer.length;we++)T.__webglColorRenderbuffer[we]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[we]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Re=I.textures;for(let we=0,Ue=Re.length;we<Ue;we++){const Be=r.get(Re[we]);Be.__webglTexture&&(s.deleteTexture(Be.__webglTexture),u.memory.textures--),r.remove(Re[we])}r.remove(I)}let Y=0;function G(){Y=0}function P(){return Y}function K(I){Y=I}function Te(){const I=Y;return I>=o.maxTextures&&yt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+o.maxTextures),Y+=1,I}function ie(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.mipmapsAutoUpdate),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function xe(I,T){const ae=r.get(I);if(I.isVideoTexture&&bt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&ae.__version!==I.version){const Re=I.image;if(Re===null)yt("WebGLRenderer: Texture marked for update but no image data found.");else if(Re.complete===!1)yt("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(ae,I,T);return}}else I.isExternalTexture&&(ae.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ae.__webglTexture,s.TEXTURE0+T)}function Me(I,T){const ae=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ae.__version!==I.version){xt(ae,I,T);return}else I.isExternalTexture&&(ae.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ae.__webglTexture,s.TEXTURE0+T)}function ge(I,T){const ae=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ae.__version!==I.version){xt(ae,I,T);return}t.bindTexture(s.TEXTURE_3D,ae.__webglTexture,s.TEXTURE0+T)}function ye(I,T){const ae=r.get(I);if(I.version>0&&ae.__version!==I.version){vt(ae,I,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture,s.TEXTURE0+T)}const Pe={[ma]:s.REPEAT,[si]:s.CLAMP_TO_EDGE,[Ld]:s.MIRRORED_REPEAT},st={[Un]:s.NEAREST,[p_]:s.NEAREST_MIPMAP_NEAREST,[bl]:s.NEAREST_MIPMAP_LINEAR,[ai]:s.LINEAR,[Ju]:s.LINEAR_MIPMAP_NEAREST,[Qr]:s.LINEAR_MIPMAP_LINEAR},je={[v_]:s.NEVER,[P0]:s.ALWAYS,[__]:s.LESS,[R0]:s.LEQUAL,[y_]:s.EQUAL,[N0]:s.GEQUAL,[S_]:s.GREATER,[b_]:s.NOTEQUAL};function Ee(I,T){if(T.type===nr&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===ai||T.magFilter===Ju||T.magFilter===bl||T.magFilter===Qr||T.minFilter===ai||T.minFilter===Ju||T.minFilter===bl||T.minFilter===Qr)&&yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Pe[T.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Pe[T.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Pe[T.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,st[T.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,st[T.minFilter]),T.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,je[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Un||T.minFilter!==bl&&T.minFilter!==Qr||T.type===nr&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Fe(I,T){let ae=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",X),Z(T));const Re=T.source;let we=w.get(Re);we===void 0&&(we={},w.set(Re,we));const Ue=ie(T);if(Ue!==I.__cacheKey){we[Ue]===void 0&&(we[Ue]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,ae=!0),we[Ue].usedTimes++;const Be=we[I.__cacheKey];Be!==void 0&&(we[I.__cacheKey].usedTimes--,Be.usedTimes===0&&te(T)),I.__cacheKey=Ue,I.__webglTexture=we[Ue].texture}return ae}function Ge(I,T,ae){return Math.floor(Math.floor(I/ae)/T)}function ct(I,T,ae,Re){const Ue=I.updateRanges;if(Ue.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,ae,Re,T.data);else{Ue.sort((k,oe)=>k.start-oe.start);let Be=0;for(let k=1;k<Ue.length;k++){const oe=Ue[Be],le=Ue[k],Ae=oe.start+oe.count,Ne=Ge(le.start,T.width,4),De=Ge(oe.start,T.width,4);le.start<=Ae+1&&Ne===De&&Ge(le.start+le.count-1,T.width,4)===Ne?oe.count=Math.max(oe.count,le.start+le.count-oe.start):(++Be,Ue[Be]=le)}Ue.length=Be+1;const ve=t.getParameter(s.UNPACK_ROW_LENGTH),Se=t.getParameter(s.UNPACK_SKIP_PIXELS),_e=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let k=0,oe=Ue.length;k<oe;k++){const le=Ue[k],Ae=Math.floor(le.start/4),Ne=Math.ceil(le.count/4),De=Ae%T.width,$e=Math.floor(Ae/T.width),dt=Ne,Ce=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,De),t.pixelStorei(s.UNPACK_SKIP_ROWS,$e),t.texSubImage2D(s.TEXTURE_2D,0,De,$e,dt,Ce,ae,Re,T.data)}I.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ve),t.pixelStorei(s.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(s.UNPACK_SKIP_ROWS,_e)}}function xt(I,T,ae){let Re=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Re=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Re=s.TEXTURE_3D);const we=Fe(I,T),Ue=T.source;t.bindTexture(Re,I.__webglTexture,s.TEXTURE0+ae);const Be=r.get(Ue);if(Ue.version!==Be.__version||we===!0){if(t.activeTexture(s.TEXTURE0+ae),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const Ce=kt.getPrimaries(kt.workingColorSpace),Xe=T.colorSpace===Jr?null:kt.getPrimaries(T.colorSpace),at=T.colorSpace===Jr||Ce===Xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,at)}t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let Se=R(T.image,!1,o.maxTextureSize);Se=Je(T,Se);const _e=l.convert(T.format,T.colorSpace),k=l.convert(T.type);let oe=L(T.internalFormat,_e,k,T.normalized,T.colorSpace,T.isVideoTexture);Ee(Re,T);let le;const Ae=T.mipmaps,Ne=T.isVideoTexture!==!0,De=Be.__version===void 0||we===!0,$e=Ue.dataReady,dt=N(T,Se);if(T.isDepthTexture)oe=M(T.format===es,T.type),De&&(Ne?t.texStorage2D(s.TEXTURE_2D,1,oe,Se.width,Se.height):t.texImage2D(s.TEXTURE_2D,0,oe,Se.width,Se.height,0,_e,k,null));else if(T.isDataTexture)if(Ae.length>0){Ne&&De&&t.texStorage2D(s.TEXTURE_2D,dt,oe,Ae[0].width,Ae[0].height);for(let Ce=0,Xe=Ae.length;Ce<Xe;Ce++)le=Ae[Ce],Ne?$e&&t.texSubImage2D(s.TEXTURE_2D,Ce,0,0,le.width,le.height,_e,k,le.data):t.texImage2D(s.TEXTURE_2D,Ce,oe,le.width,le.height,0,_e,k,le.data);T.generateMipmaps=!1}else Ne?(De&&t.texStorage2D(s.TEXTURE_2D,dt,oe,Se.width,Se.height),$e&&ct(T,Se,_e,k)):t.texImage2D(s.TEXTURE_2D,0,oe,Se.width,Se.height,0,_e,k,Se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ne&&De&&t.texStorage3D(s.TEXTURE_2D_ARRAY,dt,oe,Ae[0].width,Ae[0].height,Se.depth);for(let Ce=0,Xe=Ae.length;Ce<Xe;Ce++)if(le=Ae[Ce],T.format!==ir)if(_e!==null)if(Ne){if($e)if(T.layerUpdates.size>0){const at=Um(le.width,le.height,T.format,T.type);for(const Oe of T.layerUpdates){const ut=le.data.subarray(Oe*at/le.data.BYTES_PER_ELEMENT,(Oe+1)*at/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ce,0,0,Oe,le.width,le.height,1,_e,ut)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ce,0,0,0,le.width,le.height,Se.depth,_e,le.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ce,oe,le.width,le.height,Se.depth,0,le.data,0,0);else yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?$e&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Ce,0,0,0,le.width,le.height,Se.depth,_e,k,le.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Ce,oe,le.width,le.height,Se.depth,0,_e,k,le.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Ne&&De&&t.texStorage2D(s.TEXTURE_2D,dt,oe,Ae[0].width,Ae[0].height);for(let Ce=0,Xe=Ae.length;Ce<Xe;Ce++)le=Ae[Ce],T.format!==ir?_e!==null?Ne?$e&&t.compressedTexSubImage2D(s.TEXTURE_2D,Ce,0,0,le.width,le.height,_e,le.data):t.compressedTexImage2D(s.TEXTURE_2D,Ce,oe,le.width,le.height,0,le.data):yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?$e&&t.texSubImage2D(s.TEXTURE_2D,Ce,0,0,le.width,le.height,_e,k,le.data):t.texImage2D(s.TEXTURE_2D,Ce,oe,le.width,le.height,0,_e,k,le.data)}else if(T.isDataArrayTexture)if(Ne){if(De&&t.texStorage3D(s.TEXTURE_2D_ARRAY,dt,oe,Se.width,Se.height,Se.depth),$e)if(T.layerUpdates.size>0){const Ce=Um(Se.width,Se.height,T.format,T.type);for(const Xe of T.layerUpdates){const at=Se.data.subarray(Xe*Ce/Se.data.BYTES_PER_ELEMENT,(Xe+1)*Ce/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Xe,Se.width,Se.height,1,_e,k,at)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,_e,k,Se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,oe,Se.width,Se.height,Se.depth,0,_e,k,Se.data);else if(T.isData3DTexture)Ne?(De&&t.texStorage3D(s.TEXTURE_3D,dt,oe,Se.width,Se.height,Se.depth),$e&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,_e,k,Se.data)):t.texImage3D(s.TEXTURE_3D,0,oe,Se.width,Se.height,Se.depth,0,_e,k,Se.data);else if(T.isFramebufferTexture){if(De)if(Ne)t.texStorage2D(s.TEXTURE_2D,dt,oe,Se.width,Se.height);else{let Ce=Se.width,Xe=Se.height;for(let at=0;at<dt;at++)t.texImage2D(s.TEXTURE_2D,at,oe,Ce,Xe,0,_e,k,null),Ce>>=1,Xe>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){const Ce=s.canvas;if(Ce.hasAttribute("layoutsubtree")||Ce.setAttribute("layoutsubtree","true"),Se.parentNode!==Ce){Ce.appendChild(Se),v.add(T),Ce.onpaint=Xe=>{const at=Xe.changedElements;for(const Oe of v)at.includes(Oe.image)&&(Oe.needsUpdate=!0)},Ce.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Se);else{const at=s.RGBA,Oe=s.RGBA,ut=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,at,Oe,ut,Se)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Ne&&De){const Ce=nt(Ae[0]);t.texStorage2D(s.TEXTURE_2D,dt,oe,Ce.width,Ce.height)}for(let Ce=0,Xe=Ae.length;Ce<Xe;Ce++)le=Ae[Ce],Ne?$e&&t.texSubImage2D(s.TEXTURE_2D,Ce,0,0,_e,k,le):t.texImage2D(s.TEXTURE_2D,Ce,oe,_e,k,le);T.generateMipmaps=!1}else if(Ne){if(De){const Ce=nt(Se);t.texStorage2D(s.TEXTURE_2D,dt,oe,Ce.width,Ce.height)}$e&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,_e,k,Se)}else t.texImage2D(s.TEXTURE_2D,0,oe,_e,k,Se);z(T)&&T.mipmapsAutoUpdate===!0&&D(Re),Be.__version=Ue.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function vt(I,T,ae){if(T.image.length!==6)return;const Re=Fe(I,T),we=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+ae);const Ue=r.get(we);if(we.version!==Ue.__version||Re===!0){t.activeTexture(s.TEXTURE0+ae);const Be=kt.getPrimaries(kt.workingColorSpace),ve=T.colorSpace===Jr?null:kt.getPrimaries(T.colorSpace),Se=T.colorSpace===Jr||Be===ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const _e=T.isCompressedTexture||T.image[0].isCompressedTexture,k=T.image[0]&&T.image[0].isDataTexture,oe=[];for(let Oe=0;Oe<6;Oe++)!_e&&!k?oe[Oe]=R(T.image[Oe],!0,o.maxCubemapSize):oe[Oe]=k?T.image[Oe].image:T.image[Oe],oe[Oe]=Je(T,oe[Oe]);const le=oe[0],Ae=l.convert(T.format,T.colorSpace),Ne=l.convert(T.type);let De=L(T.internalFormat,Ae,Ne,T.normalized,T.colorSpace);const $e=T.isVideoTexture!==!0,dt=Ue.__version===void 0||Re===!0,Ce=we.dataReady;let Xe=N(T,le);Ee(s.TEXTURE_CUBE_MAP,T);let at;if(T.isDepthTexture){if(De=M(T.format===es,T.type),dt)if($e)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,De,le.width,le.height);else for(let Oe=0;Oe<6;Oe++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,De,le.width,le.height,0,Ae,Ne,null)}else if(_e){$e&&dt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Xe,De,le.width,le.height);for(let Oe=0;Oe<6;Oe++){at=oe[Oe].mipmaps;for(let ut=0;ut<at.length;ut++){const pt=at[ut];T.format!==ir?Ae!==null?$e?Ce&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,ut,0,0,pt.width,pt.height,Ae,pt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,ut,De,pt.width,pt.height,0,pt.data):yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?Ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,ut,0,0,pt.width,pt.height,Ae,Ne,pt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,ut,De,pt.width,pt.height,0,Ae,Ne,pt.data)}}}else{if(at=T.mipmaps,$e&&dt){at.length>0&&Xe++;const Oe=nt(oe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Xe,De,Oe.width,Oe.height)}for(let Oe=0;Oe<6;Oe++)if(k){$e?Ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,oe[Oe].width,oe[Oe].height,Ae,Ne,oe[Oe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,De,oe[Oe].width,oe[Oe].height,0,Ae,Ne,oe[Oe].data);for(let ut=0;ut<at.length;ut++){const nn=at[ut].image[Oe].image;$e?Ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,ut+1,0,0,nn.width,nn.height,Ae,Ne,nn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,ut+1,De,nn.width,nn.height,0,Ae,Ne,nn.data)}}else{$e?Ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,Ae,Ne,oe[Oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,De,Ae,Ne,oe[Oe]);for(let ut=0;ut<at.length;ut++){const pt=at[ut];$e?Ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,ut+1,0,0,Ae,Ne,pt.image[Oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,ut+1,De,Ae,Ne,pt.image[Oe])}}}z(T)&&T.mipmapsAutoUpdate===!0&&D(s.TEXTURE_CUBE_MAP),Ue.__version=we.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function me(I,T,ae,Re,we,Ue){const Be=l.convert(ae.format,ae.colorSpace),ve=l.convert(ae.type),Se=L(ae.internalFormat,Be,ve,ae.normalized,ae.colorSpace),_e=r.get(T),k=r.get(ae);if(k.__renderTarget=T,!_e.__hasExternalTextures){const oe=Math.max(1,T.width>>Ue),le=Math.max(1,T.height>>Ue);we===s.TEXTURE_3D||we===s.TEXTURE_2D_ARRAY?t.texImage3D(we,Ue,Se,oe,le,T.depth,0,Be,ve,null):t.texImage2D(we,Ue,Se,oe,le,0,Be,ve,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),de(T)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Re,we,k.__webglTexture,0,St(T)):(we===s.TEXTURE_2D||we>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&we<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Re,we,k.__webglTexture,Ue),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Xt(I,T,ae){if(s.bindRenderbuffer(s.RENDERBUFFER,I),T.depthBuffer){const Re=T.depthTexture,we=Re&&Re.isDepthTexture?Re.type:null,Ue=M(T.stencilBuffer,we),Be=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;de(T)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,St(T),Ue,T.width,T.height):ae?s.renderbufferStorageMultisample(s.RENDERBUFFER,St(T),Ue,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Be,s.RENDERBUFFER,I)}else{const Re=T.textures;for(let we=0;we<Re.length;we++){const Ue=Re[we],Be=l.convert(Ue.format,Ue.colorSpace),ve=l.convert(Ue.type),Se=L(Ue.internalFormat,Be,ve,Ue.normalized,Ue.colorSpace);de(T)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,St(T),Se,T.width,T.height):ae?s.renderbufferStorageMultisample(s.RENDERBUFFER,St(T),Se,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Se,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function It(I,T,ae){const Re=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const we=r.get(T.depthTexture);we.__renderTarget=T;const Ue=Re?T.depthTexture.image[0]:T.depthTexture.image;(!we.__webglTexture||Ue.width!==T.width||Ue.height!==T.height)&&(Ue.width=T.width,Ue.height=T.height,T.depthTexture.needsUpdate=!0),Re?ye(T.depthTexture,0):xe(T.depthTexture,0);const Be=we.__webglTexture,ve=St(T),Se=Re?s.TEXTURE_CUBE_MAP_POSITIVE_X+ae:s.TEXTURE_2D,_e=T.depthTexture.format===es?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===ts)de(T)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,Se,Be,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,_e,Se,Be,0);else if(T.depthTexture.format===es)de(T)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,Se,Be,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,_e,Se,Be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Zt(I){const T=r.get(I),ae=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const Re=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Re){const we=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Re.removeEventListener("dispose",we)};Re.addEventListener("dispose",we),T.__depthDisposeCallback=we}T.__boundDepthTexture=Re}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if(ae)for(let Re=0;Re<6;Re++)It(T.__webglFramebuffer[Re],I,Re);else I.texture.mipmaps.length>0?It(T.__webglFramebuffer[0],I,0):It(T.__webglFramebuffer,I,0);else if(ae){T.__webglDepthbuffer=[];for(let Re=0;Re<6;Re++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[Re]),T.__webglDepthbuffer[Re]===void 0)T.__webglDepthbuffer[Re]=s.createRenderbuffer(),Xt(T.__webglDepthbuffer[Re],I,!1);else{const we=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=T.__webglDepthbuffer[Re];s.bindRenderbuffer(s.RENDERBUFFER,Ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,we,s.RENDERBUFFER,Ue)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Xt(T.__webglDepthbuffer,I,!1);else{const we=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,we,s.RENDERBUFFER,Ue)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Wt(I,T,ae){const Re=r.get(I);T!==void 0&&me(Re.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ae!==void 0&&Zt(I)}function mn(I){const T=I.texture,ae=r.get(I),Re=r.get(T);I.addEventListener("dispose",O),Z(I);const we=I.textures,Ue=I.isWebGLCubeRenderTarget===!0,Be=we.length>1;if(Be||(Re.__webglTexture===void 0&&(Re.__webglTexture=s.createTexture()),Re.__version=T.version,u.memory.textures++),Ue){ae.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(T.mipmaps.length>0){ae.__webglFramebuffer[ve]=[];for(let Se=0;Se<T.mipmaps.length;Se++)ae.__webglFramebuffer[ve][Se]=s.createFramebuffer()}else ae.__webglFramebuffer[ve]=s.createFramebuffer()}else{if(T.mipmaps.length>0){ae.__webglFramebuffer=[];for(let ve=0;ve<T.mipmaps.length;ve++)ae.__webglFramebuffer[ve]=s.createFramebuffer()}else ae.__webglFramebuffer=s.createFramebuffer();if(Be)for(let ve=0,Se=we.length;ve<Se;ve++){const _e=r.get(we[ve]);_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture(),u.memory.textures++)}if(I.samples>0&&de(I)===!1){ae.__webglMultisampledFramebuffer=s.createFramebuffer(),ae.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let ve=0;ve<we.length;ve++){const Se=we[ve];ae.__webglColorRenderbuffer[ve]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ae.__webglColorRenderbuffer[ve]);const _e=l.convert(Se.format,Se.colorSpace),k=l.convert(Se.type),oe=L(Se.internalFormat,_e,k,Se.normalized,Se.colorSpace,I.isXRRenderTarget===!0),le=St(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,le,oe,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,ae.__webglColorRenderbuffer[ve])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(ae.__webglDepthRenderbuffer=s.createRenderbuffer(),Xt(ae.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ue){t.bindTexture(s.TEXTURE_CUBE_MAP,Re.__webglTexture),Ee(s.TEXTURE_CUBE_MAP,T);for(let ve=0;ve<6;ve++)if(T.mipmaps.length>0)for(let Se=0;Se<T.mipmaps.length;Se++)me(ae.__webglFramebuffer[ve][Se],I,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Se);else me(ae.__webglFramebuffer[ve],I,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);z(T)?D(s.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(Be){for(let ve=0,Se=we.length;ve<Se;ve++){const _e=we[ve],k=r.get(_e);let oe=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(oe=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(oe,k.__webglTexture),Ee(oe,_e),me(ae.__webglFramebuffer,I,_e,s.COLOR_ATTACHMENT0+ve,oe,0),z(_e)&&D(oe)}t.unbindTexture()}else{let ve=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ve=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ve,Re.__webglTexture),Ee(ve,T),T.mipmaps.length>0)for(let Se=0;Se<T.mipmaps.length;Se++)me(ae.__webglFramebuffer[Se],I,T,s.COLOR_ATTACHMENT0,ve,Se);else me(ae.__webglFramebuffer,I,T,s.COLOR_ATTACHMENT0,ve,0);z(T)?D(ve):T.mipmaps.length>0&&s.texParameteri(ve,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&Zt(I)}function Q(I){const T=I.textures;for(let ae=0,Re=T.length;ae<Re;ae++){const we=T[ae];if(z(we)&&we.mipmapsAutoUpdate===!0){const Ue=F(I),Be=r.get(we).__webglTexture;t.bindTexture(Ue,Be),D(Ue),t.unbindTexture()}}}const Jt=[];function Et(I){if(I.samples>0){if(de(I)===!1){const T=I.textures,ae=I.width,Re=I.height;let we=s.COLOR_BUFFER_BIT;const Ue=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Be=r.get(I),ve=T.length>1;if(ve)for(let _e=0;_e<T.length;_e++)t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let _e=0;_e<T.length;_e++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(we|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(we|=s.STENCIL_BUFFER_BIT)),ve){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Be.__webglColorRenderbuffer[_e]);const k=r.get(T[_e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,k,0)}s.blitFramebuffer(0,0,ae,Re,0,0,ae,Re,we,s.NEAREST),d===!0&&(Jt.length=0,Jt.push(s.COLOR_ATTACHMENT0+_e),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&Jt.push(Ue),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Jt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ve)for(let _e=0;_e<T.length;_e++){t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,Be.__webglColorRenderbuffer[_e]);const k=r.get(T[_e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,k,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&d){const T=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function St(I){return Math.min(o.maxSamples,I.samples)}function de(I){const T=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function bt(I){const T=u.render.frame;g.get(I)!==T&&(g.set(I,T),I.update())}function Je(I,T){const ae=I.colorSpace,Re=I.format,we=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||ae!==ic&&ae!==Jr&&(kt.getTransfer(ae)===qt?(Re!==ir||we!==gi)&&yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",ae)),T}function nt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(m.width=I.naturalWidth||I.width,m.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(m.width=I.displayWidth,m.height=I.displayHeight):(m.width=I.width,m.height=I.height),m}this.allocateTextureUnit=Te,this.resetTextureUnits=G,this.getTextureUnits=P,this.setTextureUnits=K,this.setTexture2D=xe,this.setTexture2DArray=Me,this.setTexture3D=ge,this.setTextureCube=ye,this.rebindTextures=Wt,this.setupRenderTarget=mn,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=me,this.useMultisampledRTT=de,this.dispose=j}function Zw(s,e){function t(r,o=Jr){let l;const u=kt.getTransfer(o);if(r===gi)return s.UNSIGNED_BYTE;if(r===Sf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===bf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===M0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===E0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===b0)return s.BYTE;if(r===w0)return s.SHORT;if(r===fo)return s.UNSIGNED_SHORT;if(r===yf)return s.INT;if(r===sr)return s.UNSIGNED_INT;if(r===nr)return s.FLOAT;if(r===ar)return s.HALF_FLOAT;if(r===T0)return s.ALPHA;if(r===C0)return s.RGB;if(r===ir)return s.RGBA;if(r===ts)return s.DEPTH_COMPONENT;if(r===es)return s.DEPTH_STENCIL;if(r===A0)return s.RED;if(r===wf)return s.RED_INTEGER;if(r===Cs)return s.RG;if(r===Mf)return s.RG_INTEGER;if(r===Ef)return s.RGBA_INTEGER;if(r===$l||r===Xl||r===Yl||r===ql)if(u===qt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===$l)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Xl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Yl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===$l)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Xl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Yl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ql)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Id||r===kd||r===Ud||r===Fd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Id)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===kd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ud)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Fd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zd||r===Od||r===Bd||r===Hd||r===Gd||r===tc||r===Vd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===zd||r===Od)return u===qt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Bd)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Hd)return l.COMPRESSED_R11_EAC;if(r===Gd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===tc)return l.COMPRESSED_RG11_EAC;if(r===Vd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Wd||r===jd||r===$d||r===Xd||r===Yd||r===qd||r===Kd||r===Zd||r===Jd||r===Qd||r===ef||r===tf||r===nf||r===rf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Wd)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===jd)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===$d)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Xd)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Yd)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===qd)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Kd)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zd)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jd)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Qd)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ef)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===tf)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===nf)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===rf)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===sf||r===af||r===of)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===sf)return u===qt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===af)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===of)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===lf||r===cf||r===nc||r===uf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===lf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===cf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===nc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===uf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ga?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const Jw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qw=`
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

}`;class eM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new B0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ti({vertexShader:Jw,fragmentShader:Qw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Sn(new _o(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tM extends As{constructor(e,t){super();const r=this;let o=null,l=1,u=null,p="local-floor",d=1,m=null,g=null,v=null,_=null,w=null,E=null;const A=typeof XRWebGLBinding<"u",y=new eM,b={},R=t.getContextAttributes();let z=null,D=null;const F=[],L=[],M=new Lt;let N=null,Z=null;const B=new Hi;B.viewport=new dn;const X=new Hi;X.viewport=new dn;const O=[B,X],H=new hy;let $=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let xe=F[ie];return xe===void 0&&(xe=new od,F[ie]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(ie){let xe=F[ie];return xe===void 0&&(xe=new od,F[ie]=xe),xe.getGripSpace()},this.getHand=function(ie){let xe=F[ie];return xe===void 0&&(xe=new od,F[ie]=xe),xe.getHandSpace()};function ce(ie){const xe=L.indexOf(ie.inputSource);if(xe===-1)return;const Me=F[xe];Me!==void 0&&(Me.update(ie.inputSource,ie.frame,m||u),Me.dispatchEvent({type:ie.type,data:ie.inputSource}))}function te(){o.removeEventListener("select",ce),o.removeEventListener("selectstart",ce),o.removeEventListener("selectend",ce),o.removeEventListener("squeeze",ce),o.removeEventListener("squeezestart",ce),o.removeEventListener("squeezeend",ce),o.removeEventListener("end",te),o.removeEventListener("inputsourceschange",q);for(let ie=0;ie<F.length;ie++){const xe=L[ie];xe!==null&&(L[ie]=null,F[ie].disconnect(xe))}$=null,j=null,y.reset();for(const ie in b)delete b[ie];if(e.setRenderTarget(z),w=null,_=null,v=null,o=null,D=null,Te.stop(),r.isPresenting=!1,e.setPixelRatio(N),e.setSize(M.width,M.height,!1),Z!==null){const ie=Z.camera;ie.fov=Z.fov,ie.zoom=Z.zoom,ie.updateProjectionMatrix(),Z=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){l=ie,r.isPresenting===!0&&yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){p=ie,r.isPresenting===!0&&yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(ie){m=ie},this.getBaseLayer=function(){return _!==null?_:w},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(ie){if(o=ie,o!==null){if(z=e.getRenderTarget(),o.addEventListener("select",ce),o.addEventListener("selectstart",ce),o.addEventListener("selectend",ce),o.addEventListener("squeeze",ce),o.addEventListener("squeezestart",ce),o.addEventListener("squeezeend",ce),o.addEventListener("end",te),o.addEventListener("inputsourceschange",q),R.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(M),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,ge=null,ye=null;R.depth&&(ye=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=R.stencil?es:ts,ge=R.stencil?ga:sr);const Pe={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:l};v=this.getBinding(),_=v.createProjectionLayer(Pe),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),D=new rr(_.textureWidth,_.textureHeight,{format:ir,type:gi,depthTexture:new xa(_.textureWidth,_.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const Me={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:l};w=new XRWebGLLayer(o,t,Me),o.updateRenderState({baseLayer:w}),e.setPixelRatio(1),e.setSize(w.framebufferWidth,w.framebufferHeight,!1),D=new rr(w.framebufferWidth,w.framebufferHeight,{format:ir,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:w.ignoreDepthValues===!1,resolveStencilBuffer:w.ignoreDepthValues===!1,storeMultisampledDepthBuffer:w.ignoreDepthValues===!1,storeMultisampledStencilBuffer:w.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(d),m=null,u=await o.requestReferenceSpace(p),Te.setContext(o),Te.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function q(ie){for(let xe=0;xe<ie.removed.length;xe++){const Me=ie.removed[xe],ge=L.indexOf(Me);ge>=0&&(L[ge]=null,F[ge].disconnect(Me))}for(let xe=0;xe<ie.added.length;xe++){const Me=ie.added[xe];let ge=L.indexOf(Me);if(ge===-1){for(let Pe=0;Pe<F.length;Pe++)if(Pe>=L.length){L.push(Me),ge=Pe;break}else if(L[Pe]===null){L[Pe]=Me,ge=Pe;break}if(ge===-1)break}const ye=F[ge];ye&&ye.connect(Me)}}function Y(ie,xe){xe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(xe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(o===null)return;let xe=ie.near,Me=ie.far;y.texture!==null&&(y.depthNear>0&&(xe=y.depthNear),y.depthFar>0&&(Me=y.depthFar)),H.near=X.near=B.near=xe,H.far=X.far=B.far=Me,($!==H.near||j!==H.far)&&(o.updateRenderState({depthNear:H.near,depthFar:H.far}),$=H.near,j=H.far),H.layers.mask=ie.layers.mask|6,B.layers.mask=H.layers.mask&-5,X.layers.mask=H.layers.mask&-3;const ge=ie.parent,ye=H.cameras;Y(H,ge);for(let Pe=0;Pe<ye.length;Pe++)Y(ye[Pe],ge);H.projectionMatrix.copy(B.projectionMatrix),H.projectionMatrixInverse.copy(B.projectionMatrixInverse),Z===null&&ie.isPerspectiveCamera&&(Z={camera:ie,fov:ie.fov,zoom:ie.zoom}),G(ie,H,ge)};function G(ie,xe,Me){Me===null?ie.matrix.copy(xe.matrixWorld):(ie.matrix.copy(Me.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(xe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(xe.projectionMatrix),ie.projectionMatrixInverse.copy(xe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=ff*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(_===null&&w===null))return d},this.setFoveation=function(ie){d=ie,_!==null&&(_.fixedFoveation=ie),w!==null&&w.fixedFoveation!==void 0&&(w.fixedFoveation=ie)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(H)},this.getCameraTexture=function(ie){return b[ie]};let P=null;function K(ie,xe){if(g=xe.getViewerPose(m||u),E=xe,g!==null){const Me=g.views;w!==null&&(e.setRenderTargetFramebuffer(D,w.framebuffer),e.setRenderTarget(D));let ge=!1;Me.length!==H.cameras.length&&(H.cameras.length=0,ge=!0);for(let je=0;je<Me.length;je++){const Ee=Me[je];let Fe=null;if(w!==null)Fe=w.getViewport(Ee);else{const ct=v.getViewSubImage(_,Ee);Fe=ct.viewport,je===0&&(e.setRenderTargetTextures(D,ct.colorTexture,ct.depthStencilTexture),e.setRenderTarget(D))}let Ge=O[je];Ge===void 0&&(Ge=new Hi,Ge.layers.enable(je),Ge.viewport=new dn,O[je]=Ge),Ge.matrix.fromArray(Ee.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Ee.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),je===0&&(H.matrix.copy(Ge.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),ge===!0&&H.cameras.push(Ge)}const ye=o.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){v=r.getBinding();const je=v.getDepthInformation(Me[0]);je&&je.isValid&&je.texture&&y.init(je,o.renderState)}if(ye&&ye.includes("camera-access")&&A){e.state.unbindTexture(),v=r.getBinding();for(let je=0;je<Me.length;je++){const Ee=Me[je].camera;if(Ee){let Fe=b[Ee];Fe||(Fe=new B0,b[Ee]=Fe);const Ge=v.getCameraImage(Ee);Fe.sourceTexture=Ge}}}}for(let Me=0;Me<F.length;Me++){const ge=L[Me],ye=F[Me];ge!==null&&ye!==void 0&&ye.update(ge,xe,m||u)}P&&P(ie,xe),xe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:xe}),E=null}const Te=new j0;Te.setAnimationLoop(K),this.setAnimationLoop=function(ie){P=ie},this.dispose=function(){}}}const nM=new fn,tg=new wt;tg.set(-1,0,0,0,1,0,0,0,1);function iM(s,e){function t(y,b){y.matrixAutoUpdate===!0&&y.updateMatrix(),b.value.copy(y.matrix)}function r(y,b){b.color.getRGB(y.fogColor.value,H0(s)),b.isFog?(y.fogNear.value=b.near,y.fogFar.value=b.far):b.isFogExp2&&(y.fogDensity.value=b.density)}function o(y,b,R,z,D){b.isNodeMaterial?b.uniformsNeedUpdate=!1:b.isMeshBasicMaterial?l(y,b):b.isMeshLambertMaterial?(l(y,b),b.envMap&&(y.envMapIntensity.value=b.envMapIntensity)):b.isMeshToonMaterial?(l(y,b),v(y,b)):b.isMeshPhongMaterial?(l(y,b),g(y,b),b.envMap&&(y.envMapIntensity.value=b.envMapIntensity)):b.isMeshStandardMaterial?(l(y,b),_(y,b),b.isMeshPhysicalMaterial&&w(y,b,D)):b.isMeshMatcapMaterial?(l(y,b),E(y,b)):b.isMeshDepthMaterial?l(y,b):b.isMeshDistanceMaterial?(l(y,b),A(y,b)):b.isMeshNormalMaterial?l(y,b):b.isLineBasicMaterial?(u(y,b),b.isLineDashedMaterial&&p(y,b)):b.isPointsMaterial?d(y,b,R,z):b.isSpriteMaterial?m(y,b):b.isShadowMaterial?(y.color.value.copy(b.color),y.opacity.value=b.opacity):b.isShaderMaterial&&(b.uniformsNeedUpdate=!1)}function l(y,b){y.opacity.value=b.opacity,b.color&&y.diffuse.value.copy(b.color),b.emissive&&y.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(y.map.value=b.map,t(b.map,y.mapTransform)),b.alphaMap&&(y.alphaMap.value=b.alphaMap,t(b.alphaMap,y.alphaMapTransform)),b.bumpMap&&(y.bumpMap.value=b.bumpMap,t(b.bumpMap,y.bumpMapTransform),y.bumpScale.value=b.bumpScale,b.side===Fn&&(y.bumpScale.value*=-1)),b.normalMap&&(y.normalMap.value=b.normalMap,t(b.normalMap,y.normalMapTransform),y.normalScale.value.copy(b.normalScale),b.side===Fn&&y.normalScale.value.negate()),b.displacementMap&&(y.displacementMap.value=b.displacementMap,t(b.displacementMap,y.displacementMapTransform),y.displacementScale.value=b.displacementScale,y.displacementBias.value=b.displacementBias),b.emissiveMap&&(y.emissiveMap.value=b.emissiveMap,t(b.emissiveMap,y.emissiveMapTransform)),b.specularMap&&(y.specularMap.value=b.specularMap,t(b.specularMap,y.specularMapTransform)),b.alphaTest>0&&(y.alphaTest.value=b.alphaTest);const R=e.get(b),z=R.envMap,D=R.envMapRotation;z&&(y.envMap.value=z,y.envMapRotation.value.setFromMatrix4(nM.makeRotationFromEuler(D)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(tg),y.reflectivity.value=b.reflectivity,y.ior.value=b.ior,y.refractionRatio.value=b.refractionRatio),b.lightMap&&(y.lightMap.value=b.lightMap,y.lightMapIntensity.value=b.lightMapIntensity,t(b.lightMap,y.lightMapTransform)),b.aoMap&&(y.aoMap.value=b.aoMap,y.aoMapIntensity.value=b.aoMapIntensity,t(b.aoMap,y.aoMapTransform))}function u(y,b){y.diffuse.value.copy(b.color),y.opacity.value=b.opacity,b.map&&(y.map.value=b.map,t(b.map,y.mapTransform))}function p(y,b){y.dashSize.value=b.dashSize,y.totalSize.value=b.dashSize+b.gapSize,y.scale.value=b.scale}function d(y,b,R,z){y.diffuse.value.copy(b.color),y.opacity.value=b.opacity,y.size.value=b.size*R,y.scale.value=z*.5,b.map&&(y.map.value=b.map,t(b.map,y.uvTransform)),b.alphaMap&&(y.alphaMap.value=b.alphaMap,t(b.alphaMap,y.alphaMapTransform)),b.alphaTest>0&&(y.alphaTest.value=b.alphaTest)}function m(y,b){y.diffuse.value.copy(b.color),y.opacity.value=b.opacity,y.rotation.value=b.rotation,b.map&&(y.map.value=b.map,t(b.map,y.mapTransform)),b.alphaMap&&(y.alphaMap.value=b.alphaMap,t(b.alphaMap,y.alphaMapTransform)),b.alphaTest>0&&(y.alphaTest.value=b.alphaTest)}function g(y,b){y.specular.value.copy(b.specular),y.shininess.value=Math.max(b.shininess,1e-4)}function v(y,b){b.gradientMap&&(y.gradientMap.value=b.gradientMap)}function _(y,b){y.metalness.value=b.metalness,b.metalnessMap&&(y.metalnessMap.value=b.metalnessMap,t(b.metalnessMap,y.metalnessMapTransform)),y.roughness.value=b.roughness,b.roughnessMap&&(y.roughnessMap.value=b.roughnessMap,t(b.roughnessMap,y.roughnessMapTransform)),b.envMap&&(y.envMapIntensity.value=b.envMapIntensity)}function w(y,b,R){y.ior.value=b.ior,b.diffuseRoughness>0&&(y.diffuseRoughness.value=b.diffuseRoughness,b.diffuseRoughnessMap&&(y.diffuseRoughnessMap.value=b.diffuseRoughnessMap,t(b.diffuseRoughnessMap,y.diffuseRoughnessMapTransform))),b.sheen>0&&(y.sheenColor.value.copy(b.sheenColor).multiplyScalar(b.sheen),y.sheenRoughness.value=b.sheenRoughness,b.sheenColorMap&&(y.sheenColorMap.value=b.sheenColorMap,t(b.sheenColorMap,y.sheenColorMapTransform)),b.sheenRoughnessMap&&(y.sheenRoughnessMap.value=b.sheenRoughnessMap,t(b.sheenRoughnessMap,y.sheenRoughnessMapTransform))),b.clearcoat>0&&(y.clearcoat.value=b.clearcoat,y.clearcoatRoughness.value=b.clearcoatRoughness,b.clearcoatMap&&(y.clearcoatMap.value=b.clearcoatMap,t(b.clearcoatMap,y.clearcoatMapTransform)),b.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=b.clearcoatRoughnessMap,t(b.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),b.clearcoatNormalMap&&(y.clearcoatNormalMap.value=b.clearcoatNormalMap,t(b.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(b.clearcoatNormalScale),b.side===Fn&&y.clearcoatNormalScale.value.negate())),b.dispersion>0&&(y.dispersion.value=b.dispersion),b.retroreflectivity>0&&(y.retroreflectivity.value=b.retroreflectivity),b.iridescence>0&&(y.iridescence.value=b.iridescence,y.iridescenceIOR.value=b.iridescenceIOR,y.iridescenceThicknessMinimum.value=b.iridescenceThicknessMinimum,y.iridescenceThicknessMaximum.value=b.iridescenceThicknessMaximum,b.iridescenceMap&&(y.iridescenceMap.value=b.iridescenceMap,t(b.iridescenceMap,y.iridescenceMapTransform)),b.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=b.iridescenceThicknessMap,t(b.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),b.transmission>0&&(y.transmission.value=b.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),b.transmissionMap&&(y.transmissionMap.value=b.transmissionMap,t(b.transmissionMap,y.transmissionMapTransform)),y.thickness.value=b.thickness,b.thicknessMap&&(y.thicknessMap.value=b.thicknessMap,t(b.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=b.attenuationDistance,y.attenuationColor.value.copy(b.attenuationColor)),b.anisotropy>0&&(y.anisotropyVector.value.set(b.anisotropy*Math.cos(b.anisotropyRotation),b.anisotropy*Math.sin(b.anisotropyRotation)),b.anisotropyMap&&(y.anisotropyMap.value=b.anisotropyMap,t(b.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=b.specularIntensity,y.specularColor.value.copy(b.specularColor),b.specularColorMap&&(y.specularColorMap.value=b.specularColorMap,t(b.specularColorMap,y.specularColorMapTransform)),b.specularIntensityMap&&(y.specularIntensityMap.value=b.specularIntensityMap,t(b.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,b){b.matcap&&(y.matcap.value=b.matcap)}function A(y,b){const R=e.get(b).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function rM(s,e,t,r){let o={},l={};function u(R,z){const D=z.program;r.uniformBlockBinding(R,D,o[R.id])}function p(R,z){let D=o[R.id];D===void 0&&(E(R),D=d(R),o[R.id]=D,R.addEventListener("dispose",y));const F=z.program;r.updateUBOMapping(R,F);const L=e.render.frame;l[R.id]!==L&&(m(R),l[R.id]=L)}function d(R){const z=s.createBuffer(),D=R.__size,F=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,z),s.bufferData(s.UNIFORM_BUFFER,D,F),s.bindBuffer(s.UNIFORM_BUFFER,null),z}function m(R){const z=o[R.id],D=R.uniforms,F=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,z);for(let L=0,M=D.length;L<M;L++){const N=D[L];if(Array.isArray(N))for(let Z=0,B=N.length;Z<B;Z++)g(N[Z],L,Z,F);else g(N,L,0,F)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function g(R,z,D,F){if(_(R,z,D,F)===!0){const L=R.__offset,M=R.value;if(Array.isArray(M)){let N=0;for(let Z=0;Z<M.length;Z++){const B=M[Z],X=A(B,!0);v(B,R.__data,N),N+=X.storage/Float32Array.BYTES_PER_ELEMENT}}else v(M,R.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,L,R.__data)}}function v(R,z,D){typeof R=="number"||typeof R=="boolean"?z[D]=R:R.isMatrix3?(z[D]=R.elements[0],z[D+1]=R.elements[1],z[D+2]=R.elements[2],z[D+3]=0,z[D+4]=R.elements[3],z[D+5]=R.elements[4],z[D+6]=R.elements[5],z[D+7]=0,z[D+8]=R.elements[6],z[D+9]=R.elements[7],z[D+10]=R.elements[8],z[D+11]=0):ArrayBuffer.isView(R)?z.set(R.subarray(0,z.length-D),D):R.toArray(z,D)}function _(R,z,D,F){const L=R.value,M=z+"_"+D;if(Array.isArray(L)){F[M]===void 0&&(F[M]=[]);const N=F[M];let Z=!1;for(let B=0;B<L.length;B++)w(L[B],N,B)===!0&&(Z=!0);return Z}return w(L,F,M)}function w(R,z,D){if(z[D]===void 0)return typeof R=="number"||typeof R=="boolean"?z[D]=R:ArrayBuffer.isView(R)?z[D]=R.slice():z[D]=R.clone(),!0;{const F=z[D];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return z[D]=R,!0}else{if(ArrayBuffer.isView(R))return!0;if(F.equals(R)===!1)return F.copy(R),!0}}return!1}function E(R){const z=R.uniforms;let D=0;const F=16;for(let M=0,N=z.length;M<N;M++){const Z=Array.isArray(z[M])?z[M]:[z[M]];for(let B=0,X=Z.length;B<X;B++){const O=Z[B],H=Array.isArray(O.value)?O.value:[O.value],$=Array.isArray(z[M])||Array.isArray(O.value);let j=D;for(let te=0,q=H.length;te<q;te++){const Y=H[te],G=A(Y,$),P=D%F,K=P%G.boundary,Te=P+K;D+=K,Te!==0&&F-Te<G.storage&&(D+=F-Te),te===0&&(j=D),D+=G.storage}const ce=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new ce((D-j)/Float32Array.BYTES_PER_ELEMENT),O.__offset=j}}const L=D%F;return L>0&&(D+=F-L),R.__size=D,R.__cache={},this}function A(R,z){const D={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(D.boundary=4,D.storage=4):R.isVector2?(D.boundary=8,D.storage=8):R.isVector3||R.isColor?(D.boundary=16,D.storage=12):R.isVector4?(D.boundary=16,D.storage=16):R.isMatrix3?(D.boundary=16,D.storage=48):R.isMatrix4?(D.boundary=16,D.storage=64):R.isTexture?yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(D.boundary=16,D.storage=R.byteLength):yt("WebGLRenderer: Unsupported uniform value type.",R),z===!0&&(D.boundary=16,D.storage=Math.ceil(D.storage/16)*16),D}function y(R){const z=R.target;z.removeEventListener("dispose",y),s.deleteBuffer(o[z.id]),delete o[z.id],delete l[z.id]}function b(){for(const R in o)s.deleteBuffer(o[R]);o={},l={}}return{bind:u,update:p,dispose:b}}const sM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qi=null;function aM(){return Qi===null&&(Qi=new ey(sM,16,16,Cs,ar),Qi.name="DFG_LUT",Qi.minFilter=ai,Qi.magFilter=ai,Qi.wrapS=si,Qi.wrapT=si,Qi.generateMipmaps=!1,Qi.needsUpdate=!0),Qi}class oM{constructor(e={}){const{canvas:t=E_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:p=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:w=gi}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const A=w,y=new Set([Ef,Mf,wf]),b=new Set([gi,sr,fo,ga,Sf,bf]),R=new Uint32Array(4),z=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]};let F=null,L=null;const M=[],N=[];let Z=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let X=!1,O=null,H=null,$=null,j=null;this._outputColorSpace=mi;let ce=0,te=0,q=null,Y=-1,G=null;const P=new dn,K=new dn;let Te=null;const ie=new Dt(0);let xe=0,Me=t.width,ge=t.height,ye=1,Pe=null,st=null;const je=new dn(0,0,Me,ge),Ee=new dn(0,0,Me,ge);let Fe=!1;const Ge=new po,ct=new Rf;let xt=!1,vt=!1;const me=new fn,Xt=new he,It=new dn,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function mn(){return q===null?ye:1}let Q=r;function Jt(S,U){return t.getContext(S,U)}let Et,St,de,bt,Je,nt,I,T,ae,Re,we,Ue,Be,ve,Se,_e,k,oe,le,Ae,Ne,De,$e;try{const S={alpha:!0,depth:o,stencil:l,antialias:p,premultipliedAlpha:d,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_f}`),t.addEventListener("webglcontextlost",Xe,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),Q===null){const U="webgl2";if(Q=Jt(U,S),Q===null)throw Jt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}dt()}catch(S){throw t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),$t("WebGLRenderer: "+S.message),S}function dt(){Et=new ub(Q),Et.init(),Ne=new Zw(Q,Et),St=new QS(Q,Et,e,Ne),de=new qw(Q,Et),St.reversedDepthBuffer&&_&&de.buffers.depth.setReversed(!0),H=Q.createFramebuffer(),$=Q.createFramebuffer(),j=Q.createFramebuffer(),bt=new hb(Q),Je=new kw,nt=new Kw(Q,Et,de,Je,St,Ne,bt),I=new cb(B),T=new my(Q),De=new ZS(Q,T),ae=new db(Q,T,bt,De),Re=new mb(Q,ae,T,De,bt),oe=new pb(Q,St,nt),Se=new eb(Je),we=new Iw(B,I,Et,St,De,Se),Ue=new iM(B,Je),Be=new Fw,ve=new Vw(Et),k=new KS(B,I,de,Re,E,d),_e=new Yw(B,Re,St),$e=new rM(Q,bt,St,de),le=new JS(Q,Et,bt),Ae=new fb(Q,Et,bt),bt.programs=we.programs,B.capabilities=St,B.extensions=Et,B.properties=Je,B.renderLists=Be,B.shadowMap=_e,B.state=de,B.info=bt}A!==gi&&(Z=new xb(A,t.width,t.height,p,o,l));const Ce=new tM(B,Q);this.xr=Ce,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const S=Et.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Et.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(S){S!==void 0&&(ye=S,this.setSize(Me,ge,!1))},this.getSize=function(S){return S.set(Me,ge)},this.setSize=function(S,U,W=!0){if(Ce.isPresenting){yt("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=S,ge=U,t.width=Math.floor(S*ye),t.height=Math.floor(U*ye),W===!0&&(t.style.width=S+"px",t.style.height=U+"px"),Z!==null&&Z.setSize(t.width,t.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(Me*ye,ge*ye).floor()},this.setDrawingBufferSize=function(S,U,W){Me=S,ge=U,ye=W,t.width=Math.floor(S*W),t.height=Math.floor(U*W),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(A===gi){$t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){yt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Z.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(je)},this.setViewport=function(S,U,W,ee){S.isVector4?je.set(S.x,S.y,S.z,S.w):je.set(S,U,W,ee),de.viewport(P.copy(je).multiplyScalar(mn()).round())},this.getScissor=function(S){return S.copy(Ee)},this.setScissor=function(S,U,W,ee){S.isVector4?Ee.set(S.x,S.y,S.z,S.w):Ee.set(S,U,W,ee),de.scissor(K.copy(Ee).multiplyScalar(mn()).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(S){de.setScissorTest(Fe=S)},this.setOpaqueSort=function(S){Pe=S},this.setTransparentSort=function(S){st=S},this.getClearColor=function(S){return S.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor(...arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,W=!0){let ee=0;if(S){let ne=!1;if(q!==null){const Le=q.texture.format;ne=y.has(Le)}if(ne){const Le=q.texture.type,Ye=b.has(Le),He=k.getClearColor(),Ve=k.getClearAlpha(),qe=He.r,rt=He.g,Mt=He.b;Ye?(R[0]=qe,R[1]=rt,R[2]=Mt,R[3]=Ve,Q.clearBufferuiv(Q.COLOR,0,R)):(z[0]=qe,z[1]=rt,z[2]=Mt,z[3]=Ve,Q.clearBufferiv(Q.COLOR,0,z))}else ee|=Q.COLOR_BUFFER_BIT}U&&(ee|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(ee|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&Q.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),O=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),k.dispose(),Be.dispose(),ve.dispose(),nt.dispose(),Je.dispose(),I.dispose(),Re.dispose(),ae.dispose(),De.dispose(),$e.dispose(),we.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Ft),Ce.removeEventListener("sessionend",_t),Bt.stop()};function Xe(S){S.preventDefault(),mm("WebGLRenderer: Context Lost."),X=!0}function at(){mm("WebGLRenderer: Context Restored."),X=!1;const S=bt.autoReset,U=_e.enabled,W=_e.autoUpdate,ee=_e.needsUpdate,ne=_e.type;dt(),bt.autoReset=S,_e.enabled=U,_e.autoUpdate=W,_e.needsUpdate=ee,_e.type=ne}function Oe(S){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ut(S){const U=S.target;U.removeEventListener("dispose",ut),pt(U)}function pt(S){nn(S),Je.remove(S)}function nn(S){const U=Je.get(S).programs;U!==void 0&&(U.forEach(function(W){we.releaseProgram(W)}),S.isShaderMaterial&&we.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,W,ee,ne,Le){U===null&&(U=Zt);const Ye=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,He=Ai(S,U,W,ee,ne);de.setMaterial(ee,Ye);let Ve=W.index,qe=1;if(ee.wireframe===!0){if(Ve=ae.getWireframeAttribute(W),Ve===void 0)return;qe=2}const rt=W.drawRange,Mt=W.attributes.position;let et=rt.start*qe,At=(rt.start+rt.count)*qe;Le!==null&&(et=Math.max(et,Le.start*qe),At=Math.min(At,(Le.start+Le.count)*qe)),Ve!==null?(et=Math.max(et,0),At=Math.min(At,Ve.count)):Mt!=null&&(et=Math.max(et,0),At=Math.min(At,Mt.count));const en=At-et;if(en<0||en===1/0)return;De.setup(ne,ee,He,W,Ve);let jt,zt=le;if(Ve!==null&&(jt=T.get(Ve),zt=Ae,zt.setIndex(jt)),ne.isMesh)ee.wireframe===!0?(de.setLineWidth(ee.wireframeLinewidth*mn()),zt.setMode(Q.LINES)):zt.setMode(Q.TRIANGLES);else if(ne.isLine){let rn=ee.linewidth;rn===void 0&&(rn=1),de.setLineWidth(rn*mn()),ne.isLineSegments?zt.setMode(Q.LINES):ne.isLineLoop?zt.setMode(Q.LINE_LOOP):zt.setMode(Q.LINE_STRIP)}else ne.isPoints?zt.setMode(Q.POINTS):ne.isSprite&&zt.setMode(Q.TRIANGLES);if(ne.isBatchedMesh)if(Et.get("WEBGL_multi_draw"))zt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const rn=ne._multiDrawStarts,re=ne._multiDrawCounts,Tt=ne._multiDrawCount,Ke=Ve?T.get(Ve).bytesPerElement:1,Xn=Je.get(ee).currentProgram.getUniforms();for(let hn=0;hn<Tt;hn++)Xn.setValue(Q,"_gl_DrawID",hn),zt.render(rn[hn]/Ke,re[hn])}else if(ne.isInstancedMesh)zt.renderInstances(et,en,ne.count);else if(W.isInstancedBufferGeometry){const rn=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,re=Math.min(W.instanceCount,rn);zt.renderInstances(et,en,re)}else zt.render(et,en)};function Dn(S,U,W,ee){O!==null&&S.isNodeMaterial&&O.setObject(ee,S),xt===!0&&Se.setState(S,W,!1),S.transparent===!0&&S.side===Vi&&S.forceSinglePass===!1?(S.side=Fn,S.needsUpdate=!0,Ci(S,U,ee),S.side=Ts,S.needsUpdate=!0,Ci(S,U,ee),S.side=Vi):Ci(S,U,ee)}this.compile=function(S,U,W=null){W===null&&(W=S),O!==null&&O.renderStart(S,U,W),L=ve.get(W),L.init(U),N.push(L),W.traverseVisible(function(ne){ne.isLight&&ne.layers.test(U.layers)&&(L.pushLight(ne),ne.castShadow&&L.pushShadow(ne))}),S!==W&&S.traverseVisible(function(ne){ne.isLight&&ne.layers.test(U.layers)&&(L.pushLight(ne),ne.castShadow&&L.pushShadow(ne))}),L.setupLights(),O!==null&&O.updateLights(L.state.lightsArray),vt=this.localClippingEnabled,xt=Se.init(this.clippingPlanes,vt),xt===!0&&Se.setGlobalState(this.clippingPlanes,U),O!==null&&_e.render(L.state.shadowsArray,W,U);const ee=new Set;return S.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Le=ne.material;if(Le)if(Array.isArray(Le))for(let Ye=0;Ye<Le.length;Ye++){const He=Le[Ye];Dn(He,W,U,ne),ee.add(He)}else Dn(Le,W,U,ne),ee.add(Le)}),L=N.pop(),O!==null&&O.renderEnd(),ee},this.compileAsync=function(S,U,W=null){const ee=this.compile(S,U,W);return new Promise(ne=>{function Le(){if(ee.forEach(function(Ye){const Ve=Je.get(Ye).currentProgram;(Ve===void 0||Ve.isReady())&&ee.delete(Ye)}),ee.size===0){ne(S);return}setTimeout(Le,10)}Et.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let xn=null;function mt(S){xn&&xn(S)}function Ft(){Bt.stop()}function _t(){Bt.start()}const Bt=new j0;Bt.setAnimationLoop(mt),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(S){xn=S,Ce.setAnimationLoop(S),S===null?Bt.stop():Bt.start()},Ce.addEventListener("sessionstart",Ft),Ce.addEventListener("sessionend",_t),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;O!==null&&O.renderStart(S,U);const W=Ce.enabled===!0&&Ce.isPresenting===!0,ee=Z!==null&&(q===null||W)&&Z.begin(B,q);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Z===null||Z.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(U),U=Ce.getCamera()),S.isScene===!0&&S.onBeforeRender(B,S,U,q),L=ve.get(S,N.length),L.init(U),L.state.textureUnits=nt.getTextureUnits(),N.push(L),me.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?ct.setFromArrayCamera(U):Ge.setFromProjectionMatrix(me,ji,U.reversedDepth),vt=this.localClippingEnabled,xt=Se.init(this.clippingPlanes,vt),F=Be.get(S,M.length),F.init(),M.push(F),this.info.render.frame++,Ce.enabled===!0&&Ce.isPresenting===!0){const Ye=B.xr.getDepthSensingMesh();Ye!==null&&Kt(Ye,U,-1/0,B.sortObjects)}Kt(S,U,0,B.sortObjects),F.finish(),O!==null&&O.updateLights(L.state.lightsArray),B.sortObjects===!0&&F.sort(Pe,st),Wt=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,Wt&&k.addToRenderList(F,S),this.info.autoReset===!0&&this.info.reset(),xt===!0&&Se.beginShadows();const ne=L.state.shadowsArray;if(_e.render(ne,S,U),xt===!0&&Se.endShadows(),(ee&&Z.hasRenderPass())===!1){const Ye=F.opaque,He=F.transmissive;if(L.setupLights(),U.isArrayCamera){const Ve=U.cameras;if(He.length>0)for(let qe=0,rt=Ve.length;qe<rt;qe++){const Mt=Ve[qe];$n(Ye,He,S,Mt)}Wt&&k.render(S);for(let qe=0,rt=Ve.length;qe<rt;qe++){const Mt=Ve[qe];Zn(F,S,Mt,Mt.viewport)}}else He.length>0&&$n(Ye,He,S,U),Wt&&k.render(S),Zn(F,S,U)}q!==null&&te===0&&(nt.updateMultisampleRenderTarget(q),nt.updateRenderTargetMipmap(q)),ee&&Z.end(B),S.isScene===!0&&S.onAfterRender(B,S,U),De.resetDefaultState(),Y=-1,G=null,N.pop(),N.length>0?(L=N[N.length-1],nt.setTextureUnits(L.state.textureUnits),xt===!0&&Se.setGlobalState(B.clippingPlanes,L.state.camera)):L=null,M.pop(),M.length>0?F=M[M.length-1]:F=null,O!==null&&O.renderEnd()};function Kt(S,U,W,ee){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)L.pushLight(S),S.castShadow&&L.pushShadow(S);else if(S.isSprite){const Ye=U.isArrayCamera?ct:Ge;if(!S.frustumCulled||S.intersectsFrustum(Ye)){ee&&It.setFromMatrixPosition(S.matrixWorld).applyMatrix4(me);const He=Re.update(S),Ve=S.material;Ve.visible&&F.push(S,He,Ve,W,It.z,null,U)}}else if(S.isMesh||S.isLine||S.isPoints){const Ye=U.isArrayCamera?ct:Ge;if(!S.frustumCulled||S.intersectsFrustum(Ye)){const He=Re.update(S),Ve=S.material;if(ee&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),It.copy(S.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),It.copy(He.boundingSphere.center)),It.applyMatrix4(S.matrixWorld).applyMatrix4(me)),Array.isArray(Ve)){const qe=He.groups;for(let rt=0,Mt=qe.length;rt<Mt;rt++){const et=qe[rt],At=Ve[et.materialIndex];At&&At.visible&&F.push(S,He,At,W,It.z,et,U)}}else Ve.visible&&F.push(S,He,Ve,W,It.z,null,U)}}}const Le=S.children;for(let Ye=0,He=Le.length;Ye<He;Ye++)Kt(Le[Ye],U,W,ee)}function Zn(S,U,W,ee){const{opaque:ne,transmissive:Le,transparent:Ye}=S;L.setupLightsView(W),xt===!0&&Se.setGlobalState(B.clippingPlanes,W),ee&&de.viewport(P.copy(ee)),ne.length>0&&Ln(ne,U,W),Le.length>0&&Ln(Le,U,W),Ye.length>0&&Ln(Ye,U,W),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function $n(S,U,W,ee){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ee.id]===void 0){const et=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ee.id]=new rr(1,1,{generateMipmaps:!0,type:et?ar:gi,minFilter:Qr,samples:Math.max(4,St.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:kt.workingColorSpace})}const Le=L.state.transmissionRenderTarget[ee.id],Ye=ee.viewport||P;Le.setSize(Ye.z*B.transmissionResolutionScale,Ye.w*B.transmissionResolutionScale);const He=B.getRenderTarget(),Ve=B.getActiveCubeFace(),qe=B.getActiveMipmapLevel();B.setRenderTarget(Le),B.getClearColor(ie),xe=B.getClearAlpha(),xe<1&&B.setClearColor(16777215,.5),B.clear(),Wt&&k.render(W);const rt=B.toneMapping;B.toneMapping=Tr;const Mt=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),L.setupLightsView(ee),xt===!0&&Se.setGlobalState(B.clippingPlanes,ee),Ln(S,W,ee),nt.updateMultisampleRenderTarget(Le),nt.updateRenderTargetMipmap(Le),Et.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let At=0,en=U.length;At<en;At++){const jt=U[At],{object:zt,geometry:rn,material:re,group:Tt}=jt;if(re.side===Vi&&zt.layers.test(ee.layers)){const Ke=re.side;re.side=Fn,re.needsUpdate=!0,xi(zt,W,ee,rn,re,Tt),re.side=Ke,re.needsUpdate=!0,et=!0}}et===!0&&(nt.updateMultisampleRenderTarget(Le),nt.updateRenderTargetMipmap(Le))}B.setRenderTarget(He,Ve,qe),B.setClearColor(ie,xe),Mt!==void 0&&(ee.viewport=Mt),B.toneMapping=rt}function Ln(S,U,W){const ee=U.isScene===!0?U.overrideMaterial:null;for(let ne=0,Le=S.length;ne<Le;ne++){const Ye=S[ne],{object:He,geometry:Ve,group:qe}=Ye;let rt=Ye.material;rt.allowOverride===!0&&ee!==null&&(rt=ee),He.layers.test(W.layers)&&xi(He,U,W,Ve,rt,qe)}}function xi(S,U,W,ee,ne,Le){O!==null&&ne.isNodeMaterial&&O.setObject(S,ne),S.onBeforeRender(B,U,W,ee,ne,Le),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),ne.onBeforeRender(B,U,W,ee,S,Le),ne.transparent===!0&&ne.side===Vi&&ne.forceSinglePass===!1?(ne.side=Fn,ne.needsUpdate=!0,B.renderBufferDirect(W,U,ee,ne,S,Le),ne.side=Ts,ne.needsUpdate=!0,B.renderBufferDirect(W,U,ee,ne,S,Le),ne.side=Vi):B.renderBufferDirect(W,U,ee,ne,S,Le),S.onAfterRender(B,U,W,ee,ne,Le)}function Qt(S){let U=0;for(const W of S)W.texture!==null&&U++;return U}function Ci(S,U,W){U.isScene!==!0&&(U=Zt);const ee=Je.get(S),ne=L.state.lights,Le=L.state.shadowsArray,Ye=ne.state.version,He=we.getParameters(S,ne.state,Le,U,W,L.state.lightProbeGridArray),Ve=we.getProgramCacheKey(He);let qe=ee.programs;ee.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,ee.fog=U.fog;const rt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;ee.envMap=I.get(S.envMap||ee.environment,rt),ee.envMapRotation=ee.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,qe===void 0&&(S.addEventListener("dispose",ut),qe=new Map,ee.programs=qe,ee.programVariants=new Map);let Mt=qe.get(Ve);if(Mt!==void 0){if(ee.currentProgram===Mt&&ee.lightsStateVersion===Ye)return vi(S,He),Mt}else He.uniforms=we.getUniforms(S),O!==null&&S.isNodeMaterial&&O.build(S,W,He),S.onBeforeCompile(He,B),Mt=we.acquireProgram(He,Ve),qe.set(Ve,Mt),ee.uniforms=He.uniforms;const et=ee.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(et.clippingPlanes=Se.uniform),vi(S,He),ee.needsLights=Jn(S),ee.lightsStateVersion=Ye,ee.needsLights&&(et.ambientLightColor.value=ne.state.ambient,et.lightProbe.value=ne.state.probe,et.sunLights.value=ne.state.sun,et.sunLightShadows.value=ne.state.sunShadow,et.directionalLights.value=ne.state.directional,et.directionalLightShadows.value=ne.state.directionalShadow,et.spotLights.value=ne.state.spot,et.spotLightShadows.value=ne.state.spotShadow,et.rectAreaLights.value=ne.state.rectArea,et.ltc_1.value=ne.state.rectAreaLTC1,et.ltc_2.value=ne.state.rectAreaLTC2,et.pointLights.value=ne.state.point,et.pointLightShadows.value=ne.state.pointShadow,et.hemisphereLights.value=ne.state.hemi,et.sunShadowMatrix.value=ne.state.sunShadowMatrix,et.sunShadowCascade.value=ne.state.sunShadowCascade,et.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,et.spotLightMatrix.value=ne.state.spotLightMatrix,et.spotLightMap.value=ne.state.spotLightMap,et.pointShadowMatrix.value=ne.state.pointShadowMatrix),ee.numLightProbeGrids=Qt(L.state.lightProbeGridArray),ee.currentProgram=Mt,ee.uniformsList=null,Mt}function rs(S,U,W,ee,ne){const Le=Je.get(S),Ye=Le.currentProgram.id+","+ee+","+ne;let He=Le.programVariants.get(Ye);return He===void 0?(He=Ci(S,U,W),Le.programVariants.set(Ye,He)):(Le.currentProgram=He,Le.uniformsList=null,Le.outputColorSpace=ee,Le.toneMapping=ne),He}function Gt(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=Jl.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function vi(S,U){const W=Je.get(S);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Ai(S,U,W,ee,ne){U.isScene!==!0&&(U=Zt),nt.resetTextureUnits();const Le=U.fog,Ye=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?U.environment:null,He=q===null?B.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:kt.workingColorSpace,Ve=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,qe=I.get(ee.envMap||Ye,Ve),rt=ee.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Mt=!!W.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),et=!!W.morphAttributes.position,At=!!W.morphAttributes.normal,en=!!W.morphAttributes.color;let jt=Tr;ee.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(jt=B.toneMapping);const zt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,rn=zt!==void 0?zt.length:0,re=Je.get(ee),Tt=L.state.lights;if(xt===!0&&(vt===!0||S!==G)){const Ot=S===G&&ee.id===Y;Se.setState(ee,S,Ot)}let Ke=!1,Xn=!1;ee.version===re.__version?re.needsLights&&re.lightsStateVersion!==Tt.state.version||ne.isBatchedMesh&&re.batching===!1||!ne.isBatchedMesh&&re.batching===!0||ne.isBatchedMesh&&re.batchingColor===!0&&ne._colorsTexture===null||ne.isBatchedMesh&&re.batchingColor===!1&&ne._colorsTexture!==null||ne.isInstancedMesh&&re.instancing===!1||!ne.isInstancedMesh&&re.instancing===!0||ne.isSkinnedMesh&&re.skinning===!1||!ne.isSkinnedMesh&&re.skinning===!0||ne.isInstancedMesh&&re.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&re.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&re.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&re.instancingMorph===!1&&ne.morphTexture!==null||re.envMap!==qe||ee.fog===!0&&re.fog!==Le||re.numClippingPlanes!==void 0&&(re.numClippingPlanes!==Se.numPlanes||re.numIntersection!==Se.numIntersection)||re.vertexAlphas!==rt||re.vertexTangents!==Mt||re.morphTargets!==et||re.morphNormals!==At||re.morphColors!==en||re.morphTargetsCount!==rn||re.numLightProbeGrids!==Qt(L.state.lightProbeGridArray)?Ke=!0:(re.outputColorSpace!==He||re.toneMapping!==jt)&&(Xn=!0):(Ke=!0,re.__version=ee.version);let hn=re.currentProgram;(Ke===!0||Xn===!0)&&(hn=Xn===!0?rs(ee,U,ne,He,jt):Ci(ee,U,ne),O&&ee.isNodeMaterial&&O.onUpdateProgram(ee,hn,re));let Ri=!1,oi=!1,li=!1;const Nt=hn.getUniforms(),ln=re.uniforms;if(de.useProgram(hn.program)&&(Ri=!0,oi=!0,li=!0),ee.id!==Y&&(Y=ee.id,oi=!0),Ri||G!==S){de.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Nt.setValue(Q,"projectionMatrix",S.projectionMatrix),Nt.setValue(Q,"viewMatrix",S.matrixWorldInverse);const Yt=Nt.map.cameraPosition;Yt!==void 0&&Yt.setValue(Q,Xt.setFromMatrixPosition(S.matrixWorld)),St.logarithmicDepthBuffer&&Nt.setValue(Q,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Nt.setValue(Q,"isOrthographic",S.isOrthographicCamera===!0),G!==S&&(G=S,oi=!0,li=!0)}if(re.needsLights&&(Tt.state.sunShadowMap.length>0&&Nt.setValue(Q,"sunShadowMap",Tt.state.sunShadowMap,nt),Tt.state.directionalShadowMap.length>0&&Nt.setValue(Q,"directionalShadowMap",Tt.state.directionalShadowMap,nt),Tt.state.spotShadowMap.length>0&&Nt.setValue(Q,"spotShadowMap",Tt.state.spotShadowMap,nt),Tt.state.pointShadowMap.length>0&&Nt.setValue(Q,"pointShadowMap",Tt.state.pointShadowMap,nt)),ne.isSkinnedMesh){Nt.setOptional(Q,ne,"bindMatrix"),Nt.setOptional(Q,ne,"bindMatrixInverse");const Ot=ne.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),Nt.setValue(Q,"boneTexture",Ot.boneTexture,nt))}ne.isBatchedMesh&&(Nt.setOptional(Q,ne,"batchingTexture"),Nt.setValue(Q,"batchingTexture",ne._matricesTexture,nt),Nt.setOptional(Q,ne,"batchingIdTexture"),Nt.setValue(Q,"batchingIdTexture",ne._indirectTexture,nt),Nt.setOptional(Q,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Nt.setValue(Q,"batchingColorTexture",ne._colorsTexture,nt));const Tn=W.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&oe.update(ne,W,hn),(oi||re.receiveShadow!==ne.receiveShadow)&&(re.receiveShadow=ne.receiveShadow,Nt.setValue(Q,"receiveShadow",ne.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&U.environment!==null&&(ln.envMapIntensity.value=U.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=aM()),oi){if(Nt.setValue(Q,"toneMappingExposure",B.toneMappingExposure),re.needsLights&&Ar(ln,li),Le&&ee.fog===!0&&Ue.refreshFogUniforms(ln,Le),Ue.refreshMaterialUniforms(ln,ee,ye,ge,L.state.transmissionRenderTarget[S.id]),re.needsLights&&re.numLightProbeGrids>0){const Ot=D;let Yt=0;for(const vn of L.state.lightProbeGridArray)vn.texture!==null&&(Ot.textures[Yt]=vn.texture,Ot.min[Yt]=vn.boundingBox.min,Ot.max[Yt]=vn.boundingBox.max,Ot.resolution[Yt]=vn.resolution,Yt++);for(const vn in Ot)Ot[vn].length=Yt;ln.probesSH.value=Ot.textures,ln.probesMin.value=Ot.min,ln.probesMax.value=Ot.max,ln.probesResolution.value=Ot.resolution}Jl.upload(Q,Gt(re),ln,nt)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Jl.upload(Q,Gt(re),ln,nt),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Nt.setValue(Q,"center",ne.center),Nt.setValue(Q,"modelViewMatrix",ne.modelViewMatrix),Nt.setValue(Q,"normalMatrix",ne.normalMatrix),Nt.setValue(Q,"modelMatrix",ne.matrixWorld),ee.uniformsGroups!==void 0){const Ot=ee.uniformsGroups;for(let Yt=0,vn=Ot.length;Yt<vn;Yt++){const $i=Ot[Yt];$e.update($i,hn),$e.bind($i,hn)}}return hn}function Ar(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.sunLights.needsUpdate=U,S.sunLightShadows.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Jn(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(S,U,W){const ee=Je.get(S);ee.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),Je.get(S.texture).__webglTexture=U,Je.get(S.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:W,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const W=Je.get(S);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,W=0){q=S,ce=U,te=W;let ee=null,ne=!1,Le=!1;if(S){const He=Je.get(S);if(He.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(Q.FRAMEBUFFER,He.__webglFramebuffer),P.copy(S.viewport),K.copy(S.scissor),Te=S.scissorTest,de.viewport(P),de.scissor(K),de.setScissorTest(Te),Y=-1;return}else if(He.__webglFramebuffer===void 0)nt.setupRenderTarget(S);else if(He.__hasExternalTextures)nt.rebindTextures(S,Je.get(S.texture).__webglTexture,Je.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const rt=S.depthTexture;if(He.__boundDepthTexture!==rt){if(rt!==null&&Je.has(rt)&&(S.width!==rt.image.width||S.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(S)}}const Ve=S.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Le=!0);const qe=Je.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(qe[U])?ee=qe[U][W]:ee=qe[U],ne=!0):S.samples>0&&nt.useMultisampledRTT(S)===!1?ee=Je.get(S).__webglMultisampledFramebuffer:Array.isArray(qe)?ee=qe[W]:ee=qe,P.copy(S.viewport),K.copy(S.scissor),Te=S.scissorTest}else P.copy(je).multiplyScalar(ye).floor(),K.copy(Ee).multiplyScalar(ye).floor(),Te=Fe;if(W!==0&&(ee=H),de.bindFramebuffer(Q.FRAMEBUFFER,ee)&&de.drawBuffers(S,ee),de.viewport(P),de.scissor(K),de.setScissorTest(Te),ne){const He=Je.get(S.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+U,He.__webglTexture,W)}else if(Le){const He=U;for(let Ve=0;Ve<S.textures.length;Ve++){const qe=Je.get(S.textures[Ve]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+Ve,qe.__webglTexture,W,He)}}else if(S!==null&&W!==0){const He=Je.get(S.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,He.__webglTexture,W)}Y=-1};function Rr(S){const U=Je.get(S);return(U.__readFormat!==S.format||U.__readType!==S.type)&&(U.__readFormat=S.format,U.__readType=S.type,U.__formatReadable=St.textureFormatReadable(S.format),U.__typeReadable=St.textureTypeReadable(S.type)),U}this.readRenderTargetPixels=function(S,U,W,ee,ne,Le,Ye,He=0){if(!(S&&S.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Je.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ye!==void 0&&(Ve=Ve[Ye],Array.isArray(Ve)&&(Ve=Ve[0])),Ve){de.bindFramebuffer(Q.FRAMEBUFFER,Ve);try{const qe=S.textures[He],rt=qe.format,Mt=qe.type;S.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+He);const et=Rr(qe);if(et.__formatReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(et.__typeReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-ee&&W>=0&&W<=S.height-ne&&Q.readPixels(U,W,ee,ne,Ne.convert(rt),Ne.convert(Mt),Le)}finally{const qe=q!==null?Je.get(q).__webglFramebuffer:null;de.bindFramebuffer(Q.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(S,U,W,ee,ne,Le,Ye,He=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Je.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ye!==void 0&&(Ve=Ve[Ye],Array.isArray(Ve)&&(Ve=Ve[0])),Ve)if(U>=0&&U<=S.width-ee&&W>=0&&W<=S.height-ne){de.bindFramebuffer(Q.FRAMEBUFFER,Ve);const qe=S.textures[He],rt=qe.format,Mt=qe.type;S.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+He);const et=Rr(qe);if(et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const At=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,At),Q.bufferData(Q.PIXEL_PACK_BUFFER,Le.byteLength,Q.STREAM_READ),Q.readPixels(U,W,ee,ne,Ne.convert(rt),Ne.convert(Mt),0),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null);const en=q!==null?Je.get(q).__webglFramebuffer:null;de.bindFramebuffer(Q.FRAMEBUFFER,en);const jt=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await T_(Q,jt,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,At),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,Le),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null),Q.deleteBuffer(At),Q.deleteSync(jt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,W=0){const ee=Math.pow(2,-W),ne=Math.floor(S.image.width*ee),Le=Math.floor(S.image.height*ee),Ye=U!==null?U.x:0,He=U!==null?U.y:0;nt.setTexture2D(S,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,W,0,0,Ye,He,ne,Le),de.unbindTexture()},this.copyTextureToTexture=function(S,U,W=null,ee=null,ne=0,Le=0){let Ye,He,Ve,qe,rt,Mt,et,At,en;const jt=S.isCompressedTexture?S.mipmaps[Le]:S.image;if(W!==null)Ye=W.max.x-W.min.x,He=W.max.y-W.min.y,Ve=W.isBox3?W.max.z-W.min.z:1,qe=W.min.x,rt=W.min.y,Mt=W.isBox3?W.min.z:0;else{const Nt=Math.pow(2,-ne);Ye=Math.floor(jt.width*Nt),He=Math.floor(jt.height*Nt),S.isDataArrayTexture?Ve=jt.depth:S.isData3DTexture?Ve=Math.floor(jt.depth*Nt):Ve=1,qe=0,rt=0,Mt=0}ee!==null?(et=ee.x,At=ee.y,en=ee.z):(et=0,At=0,en=0);const zt=Ne.convert(U.format),rn=Ne.convert(U.type);let re;U.isData3DTexture?(nt.setTexture3D(U,0),re=Q.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(nt.setTexture2DArray(U,0),re=Q.TEXTURE_2D_ARRAY):(nt.setTexture2D(U,0),re=Q.TEXTURE_2D),de.activeTexture(Q.TEXTURE0),de.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,U.flipY),de.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),de.pixelStorei(Q.UNPACK_ALIGNMENT,U.unpackAlignment);const Tt=de.getParameter(Q.UNPACK_ROW_LENGTH),Ke=de.getParameter(Q.UNPACK_IMAGE_HEIGHT),Xn=de.getParameter(Q.UNPACK_SKIP_PIXELS),hn=de.getParameter(Q.UNPACK_SKIP_ROWS),Ri=de.getParameter(Q.UNPACK_SKIP_IMAGES);de.pixelStorei(Q.UNPACK_ROW_LENGTH,jt.width),de.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,jt.height),de.pixelStorei(Q.UNPACK_SKIP_PIXELS,qe),de.pixelStorei(Q.UNPACK_SKIP_ROWS,rt),de.pixelStorei(Q.UNPACK_SKIP_IMAGES,Mt);const oi=S.isDataArrayTexture||S.isData3DTexture,li=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const Nt=Je.get(S),ln=Je.get(U),Tn=Je.get(Nt.__renderTarget),Ot=Je.get(ln.__renderTarget);de.bindFramebuffer(Q.READ_FRAMEBUFFER,Tn.__webglFramebuffer),de.bindFramebuffer(Q.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Yt=0;Yt<Ve;Yt++)oi&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Je.get(S).__webglTexture,ne,Mt+Yt),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Je.get(U).__webglTexture,Le,en+Yt)),Q.blitFramebuffer(qe,rt,qe+Ye,rt+He,et,At,et+Ye,At+He,Q.DEPTH_BUFFER_BIT,Q.NEAREST);de.bindFramebuffer(Q.READ_FRAMEBUFFER,null),de.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(ne!==0||S.isRenderTargetTexture||Je.has(S)){const Nt=Je.get(S),ln=Je.get(U);de.bindFramebuffer(Q.READ_FRAMEBUFFER,$),de.bindFramebuffer(Q.DRAW_FRAMEBUFFER,j);for(let Tn=0;Tn<Ve;Tn++)oi?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Nt.__webglTexture,ne,Mt+Tn):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Nt.__webglTexture,ne),li?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,ln.__webglTexture,Le,en+Tn):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,ln.__webglTexture,Le),ne!==0?Q.blitFramebuffer(qe,rt,qe+Ye,rt+He,et,At,et+Ye,At+He,Q.COLOR_BUFFER_BIT,Q.NEAREST):li?Q.copyTexSubImage3D(re,Le,et,At,en+Tn,qe,rt,Ye,He):Q.copyTexSubImage2D(re,Le,et,At,qe,rt,Ye,He);de.bindFramebuffer(Q.READ_FRAMEBUFFER,null),de.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else li?S.isDataTexture||S.isData3DTexture?Q.texSubImage3D(re,Le,et,At,en,Ye,He,Ve,zt,rn,jt.data):U.isCompressedArrayTexture?Q.compressedTexSubImage3D(re,Le,et,At,en,Ye,He,Ve,zt,jt.data):Q.texSubImage3D(re,Le,et,At,en,Ye,He,Ve,zt,rn,jt):S.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,Le,et,At,Ye,He,zt,rn,jt.data):S.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,Le,et,At,jt.width,jt.height,zt,jt.data):Q.texSubImage2D(Q.TEXTURE_2D,Le,et,At,Ye,He,zt,rn,jt);de.pixelStorei(Q.UNPACK_ROW_LENGTH,Tt),de.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Ke),de.pixelStorei(Q.UNPACK_SKIP_PIXELS,Xn),de.pixelStorei(Q.UNPACK_SKIP_ROWS,hn),de.pixelStorei(Q.UNPACK_SKIP_IMAGES,Ri),Le===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&Q.generateMipmap(re),de.unbindTexture()},this.initRenderTarget=function(S){Je.get(S).__webglFramebuffer===void 0&&nt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?nt.setTextureCube(S,0):S.isData3DTexture?nt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?nt.setTexture2DArray(S,0):nt.setTexture2D(S,0),de.unbindTexture()},this.resetState=function(){ce=0,te=0,q=null,de.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=kt._getDrawingBufferColorSpace(e),t.unpackColorSpace=kt._getUnpackColorSpace()}}function lM(s,e){const t=document.createElement("canvas");t.width=2048,t.height=1024;const r=t.getContext("2d");let o;e?s==="celestial-cyan"?o=["#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#f0f9ff","#dbeafe"]:s==="supernova-sunset"?o=["#fff1f2","#fecdd3","#fda4af","#fb7185","#e11d48","#9f1239","#fff7ed","#fed7aa"]:s==="nocturne-silver"?o=["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#71717a","#ffffff","#e4e4e7"]:s==="cyberpunk-neon"?o=["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#d946ef","#c026d3","#a21caf"]:s==="solar-gold"?o=["#fffbeb","#fef3c7","#fde68a","#fcd34d","#f59e0b","#d97706","#b45309","#78350f"]:s==="emerald-aurora"?o=["#f0fdf4","#dcfce7","#bbf7d0","#86efac","#4ade80","#22c55e","#16a34a","#15803d"]:s==="pure-pitch-black"?o=["#ffffff","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#71717a","#3f3f46","#18181b"]:o=["#fffbeb","#fef3c7","#fde68a","#fcd34d","#f59e0b","#d97706","#fff7ed","#ffedd5"]:s==="celestial-cyan"?o=["#020b14","#041d33","#083358","#0e4a7d","#0284c7","#38bdf8","#075985","#0c4a6e","#06b6d4"]:s==="supernova-sunset"?o=["#12040d","#2b061c","#4a0a2f","#771146","#be123c","#f43f5e","#ea580c","#fb923c","#450a22"]:s==="nocturne-silver"?o=["#060609","#111119","#1e1e2d","#2f2f45","#4d4d6e","#7b7b9e","#a6a6c7","#252538","#d4d4e8"]:s==="cyberpunk-neon"?o=["#080014","#16002c","#2c004d","#550080","#9333ea","#db2777","#f43f5e","#06b6d4","#22d3ee"]:s==="solar-gold"?o=["#0d0500","#1f0c00","#3b1700","#5e2500","#92400e","#d97706","#f59e0b","#fbbf24","#fef08a"]:s==="emerald-aurora"?o=["#020d06","#052110","#0a381d","#14532d","#16a34a","#22c55e","#4ade80","#10b981","#34d399"]:s==="pure-pitch-black"?o=["#000000","#050505","#0a0a0a","#121212","#1a1a1a","#262626","#404040","#737373","#a3a3a3"]:o=["#080415","#150933","#270e59","#3e1785","#5b21b6","#7c3aed","#a855f7","#c084fc","#2e1065","#d8b4fe"];const l=r.createLinearGradient(0,0,0,t.height);o.forEach((_,w)=>{l.addColorStop(w/(o.length-1),_)}),r.fillStyle=l,r.fillRect(0,0,t.width,t.height);const u=72;for(let _=0;_<u;_++){const E=_/u*t.height,A=t.height/u*(1.2+Math.sin(_*.7)*.5),y=o[_*3%o.length];r.fillStyle=y,r.globalAlpha=.25+Math.sin(_*.9)*.2,r.beginPath(),r.moveTo(0,E);const b=32;for(let R=0;R<=b;R++){const z=R/b*t.width,D=Math.sin(R*.8+_*1.5)*7+Math.cos(R*1.6+_*2.1)*4;r.lineTo(z,E+D)}r.lineTo(t.width,E+A),r.lineTo(0,E+A),r.closePath(),r.fill()}r.globalAlpha=e?.25:.4,r.fillStyle="#ffffff";for(let _=0;_<48;_++){const w=Math.random()*t.width,E=Math.random()*t.height,A=60+Math.random()*180,y=1.5+Math.random()*3.5;r.beginPath(),r.ellipse(w,E,A,y,Math.sin(E*.05)*.15,0,Math.PI*2),r.fill()}const p=t.width*.62,d=t.height*.58,m=85,g=r.createRadialGradient(p,d,5,p,d,m);e?(g.addColorStop(0,"#ffffff"),g.addColorStop(.4,o[o.length-2]),g.addColorStop(.8,o[o.length-1]),g.addColorStop(1,"rgba(255,255,255,0)")):(g.addColorStop(0,"#ffffff"),g.addColorStop(.3,o[o.length-3]||"#c084fc"),g.addColorStop(.7,o[o.length-1]||"#7c3aed"),g.addColorStop(1,"rgba(0,0,0,0)")),r.globalAlpha=.85,r.fillStyle=g,r.beginPath(),r.ellipse(p,d,m*1.6,m*.8,-.15,0,Math.PI*2),r.fill(),r.strokeStyle=e?"rgba(200, 150, 100, 0.45)":"rgba(255, 255, 255, 0.60)",r.lineWidth=2.5;for(let _=0;_<3;_++){r.beginPath();for(let w=0;w<Math.PI*2;w+=.2){const E=w/(Math.PI*2)*m*.7,A=p+Math.cos(w+_*2.1)*E*1.5,y=d+Math.sin(w+_*2.1)*E*.7;w===0?r.moveTo(A,y):r.lineTo(A,y)}r.stroke()}const v=new fc(t);return v.wrapS=ma,v.wrapT=si,v}function cM(s,e){const t=document.createElement("canvas");t.width=1024,t.height=64;const r=t.getContext("2d");r.clearRect(0,0,t.width,t.height);let o,l;e?(o="rgba(217, 119, 6, 0.45)",l="rgba(245, 158, 11, 0.85)"):s==="celestial-cyan"?(o="rgba(56, 189, 248, 0.45)",l="rgba(186, 230, 253, 0.90)"):s==="supernova-sunset"?(o="rgba(251, 146, 60, 0.45)",l="rgba(254, 205, 211, 0.90)"):s==="nocturne-silver"?(o="rgba(212, 212, 216, 0.45)",l="rgba(255, 255, 255, 0.90)"):s==="cyberpunk-neon"?(o="rgba(6, 182, 212, 0.50)",l="rgba(244, 63, 94, 0.95)"):s==="solar-gold"?(o="rgba(245, 158, 11, 0.50)",l="rgba(254, 240, 138, 0.95)"):s==="emerald-aurora"?(o="rgba(16, 185, 129, 0.45)",l="rgba(110, 231, 183, 0.90)"):s==="pure-pitch-black"?(o="rgba(115, 115, 115, 0.35)",l="rgba(245, 245, 245, 0.90)"):(o="rgba(192, 132, 252, 0.50)",l="rgba(243, 232, 255, 0.92)");for(let p=0;p<t.width;p++){const d=p/t.width;let m=0;d<.22?m=.12+Math.sin(d*60)*.08:d>=.22&&d<.65?m=.75+Math.sin(d*120)*.18+Math.cos(d*240)*.06:d>=.65&&d<.72?m=.02:d>=.72&&d<.95?d>.85&&d<.87?m=.05:m=.55+Math.sin(d*100)*.15:m=.2+Math.sin(d*200)*.15,r.fillStyle=m>.6?l:o,r.globalAlpha=Math.max(0,Math.min(1,m)),r.fillRect(p,0,1,t.height)}const u=new fc(t);return u.wrapS=si,u.wrapT=si,u}function uM(s){const e=document.createElement("canvas");e.width=2048,e.height=1024;const t=e.getContext("2d");t.fillStyle=s?"#d6d3d1":"#888899",t.fillRect(0,0,e.width,e.height),t.fillStyle=s?"#a8a29e":"#474755",[{x:.35,y:.4,rx:240,ry:160},{x:.55,y:.35,rx:280,ry:190},{x:.7,y:.45,rx:200,ry:140},{x:.4,y:.65,rx:220,ry:150},{x:.6,y:.6,rx:260,ry:180}].forEach(u=>{t.globalAlpha=.65,t.beginPath(),t.ellipse(u.x*e.width,u.y*e.height,u.rx,u.ry,.2,0,Math.PI*2),t.fill()});const o=320;for(let u=0;u<o;u++){const p=Math.random()*e.width,d=Math.random()*e.height,m=4+Math.random()*32;if(t.globalAlpha=.55,t.fillStyle=s?"#57534e":"#22222a",t.beginPath(),t.arc(p,d,m,0,Math.PI*2),t.fill(),t.globalAlpha=.7,t.strokeStyle=s?"#ffffff":"#e2e8f0",t.lineWidth=Math.max(1,m*.2),t.beginPath(),t.arc(p,d,m,Math.PI*.75,Math.PI*1.75),t.stroke(),m>24){t.globalAlpha=.25,t.strokeStyle=s?"#ffffff":"#cbd5e1",t.lineWidth=1;for(let g=0;g<8;g++){const v=g/8*Math.PI*2,_=m*(3+Math.random()*5);t.beginPath(),t.moveTo(p+Math.cos(v)*m,d+Math.sin(v)*m),t.lineTo(p+Math.cos(v)*_,d+Math.sin(v)*_),t.stroke()}}}const l=new fc(e);return l.wrapS=ma,l.wrapT=si,l}function dM(s){const e=document.createElement("canvas");e.width=2048,e.height=1024;const t=e.getContext("2d");t.fillStyle=s?"#991b1b":"#450a0a",t.fillRect(0,0,e.width,e.height),t.fillStyle=s?"#7f1d1d":"#1c0404",[{x:.35,y:.4,rx:240,ry:160},{x:.55,y:.35,rx:280,ry:190},{x:.7,y:.45,rx:200,ry:140},{x:.4,y:.65,rx:220,ry:150},{x:.6,y:.6,rx:260,ry:180}].forEach(u=>{t.globalAlpha=.75,t.beginPath(),t.ellipse(u.x*e.width,u.y*e.height,u.rx,u.ry,.2,0,Math.PI*2),t.fill()});const o=280;for(let u=0;u<o;u++){const p=Math.random()*e.width,d=Math.random()*e.height,m=4+Math.random()*30;t.globalAlpha=.6,t.fillStyle="#1c0404",t.beginPath(),t.arc(p,d,m,0,Math.PI*2),t.fill(),t.globalAlpha=.85,t.strokeStyle="#f87171",t.lineWidth=Math.max(1,m*.2),t.beginPath(),t.arc(p,d,m,Math.PI*.75,Math.PI*1.75),t.stroke()}const l=new fc(e);return l.wrapS=ma,l.wrapT=si,l}const fM=()=>{const s=be.useRef(null),{wallpaperSettings:e,appTheme:t}=is(),r=e.celestialBody||"ringed-planet",o=e.palette||"cosmic-royal",l=t==="light";return be.useEffect(()=>{if(!s.current)return;if(r==="none"){s.current.innerHTML="";return}const u=s.current;u.innerHTML="";const p=u.clientWidth||window.innerWidth,d=u.clientHeight||window.innerHeight,m=p<768,g=new j_,v=new Hi(45,p/d,.1,100);v.position.set(0,0,10);const _=new oM({alpha:!0,antialias:!0,powerPreference:"high-performance"});_.setSize(p,d),_.setPixelRatio(Math.min(window.devicePixelRatio||1,1.25)),_.outputColorSpace=mi,u.appendChild(_.domElement);const w=new dy(l?16775149:16777215,l?2.8:2.5);g.add(w);const E=new fy(l?14870768:o==="celestial-cyan"?662832:o==="cyberpunk-neon"?2031672:o==="solar-gold"?2363651:o==="emerald-aurora"?270096:o==="pure-pitch-black"?197379:1577516,l?.7:.4);g.add(E);const A=new ro;g.add(A);let y=3.4,b=1.8,R=.65;const z=e.celestialPosition||"default";z==="upper-right"?(y=m?1.2:3.4,b=m?2.3:1.8,w.position.set(-8,5,4)):z==="upper-left"?(y=m?-1.2:-3.3,b=m?2.5:2,w.position.set(-8,2,-2)):z==="zenith-center"?(y=0,b=m?2.5:2.4,w.position.set(0,0,4)):r==="ringed-planet"||r==="pulsar-star"?(y=m?1.2:3.4,b=m?2.3:1.8,R=m?.48:.68,w.position.set(-8,5,4)):r==="crescent-moon"||r==="blood-moon"?(y=m?-1.2:-3.3,b=m?2.5:2,R=m?.42:.6,w.position.set(-8,2,-2)):r==="eclipse-corona"&&(y=0,b=m?2.5:2.4,R=m?.45:.64,w.position.set(0,0,4));const D=e.celestialScaleMultiplier||1;R*=D,A.position.set(y,b,0),A.scale.set(R,R,R);let F=0,L=0,M=0,N=0;const Z=q=>{const Y=q.clientX/window.innerWidth*2-1;F=(-(q.clientY/window.innerHeight)*2+1)*.18,L=Y*.25};window.addEventListener("mousemove",Z,{passive:!0});let B=null,X=null,O=null,H=null;if(r==="ringed-planet"){const q=new Oi(1,64,64),Y=lM(o,l),G=new Bl({map:Y,roughness:.55,metalness:.08});B=new Sn(q,G),A.add(B);const P=new Oi(1.04,48,48),K=new Ti({vertexShader:`
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
        `,uniforms:{glowColor:{value:new Dt(l?o==="celestial-cyan"?165063:14251782:o==="celestial-cyan"?3718648:o==="supernova-sunset"?16007006:11032055)}},transparent:!0,blending:ws,side:Fn}),Te=new Sn(P,K);A.add(Te);const ie=new Df(1.35,2.85,128),xe=ie.attributes.position,Me=ie.attributes.uv;for(let je=0;je<xe.count;je++){const Ee=xe.getX(je),Fe=xe.getY(je),ct=(Math.sqrt(Ee*Ee+Fe*Fe)-1.35)/(2.85-1.35);Me.setXY(je,ct,.5)}Me.needsUpdate=!0;const ge=cM(o,l),ye=new Bl({map:ge,side:Vi,transparent:!0,opacity:.92,roughness:.45,metalness:.05});X=new Sn(ie,ye),X.rotation.x=Math.PI*.48,X.rotation.y=-.15,A.add(X);const Pe=new Oi(.11,24,24),st=new Bl({color:l?14078929:13095678,roughness:.8});O=new Sn(Pe,st),A.add(O),A.rotation.z=-.42}else if(r==="crescent-moon"){const q=new Oi(1,64,64),Y=uM(l),G=new Ti({vertexShader:`
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
        `,uniforms:{moonTexture:{value:Y},sunDir:{value:new he(-1.6,.35,-.65).normalize()},sunlitColor:{value:new Dt(l?16776171:16710083)},earthshineColor:{value:new Dt(l?9741240:6583435)},earthshineAlpha:{value:l?.07:.05}},transparent:!0});B=new Sn(q,G),A.add(B);const P=new Oi(1.04,48,48),K=new Ti({vertexShader:`
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
        `,uniforms:{sunDir:{value:new he(-1.6,.35,-.65).normalize()},glowColor:{value:new Dt(l?16096779:16707722)}},transparent:!0,blending:ws,side:Fn}),Te=new Sn(P,K);A.add(Te),A.rotation.y=.45,A.rotation.z=-.22}else if(r==="eclipse-corona"){const q=new _o(3.8,3.8),Y=new Ti({vertexShader:`
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
        `,uniforms:{uTime:{value:0},uColor:{value:new Dt(l?14251782:16638023)}},transparent:!0,blending:ws,depthWrite:!1});H=new Sn(q,Y),A.add(H);const G=new Oi(.96,48,48),P=new Zl({color:l?1579035:328970});B=new Sn(G,P),A.add(B)}else if(r==="blood-moon"){const q=new Oi(1,64,64),Y=dM(l),G=new Bl({map:Y,roughness:.7,metalness:.05});B=new Sn(q,G),A.add(B);const P=new Oi(1.05,48,48),K=new Ti({vertexShader:`
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
        `,transparent:!0,blending:ws,side:Fn}),Te=new Sn(P,K);A.add(Te),A.rotation.y=.5,A.rotation.z=-.2}else if(r==="pulsar-star"){const q=new Oi(.72,48,48),Y=new Zl({color:l?165063:14742270});B=new Sn(q,Y),A.add(B);const G=new Pf(1.4,5,32,1,!0),P=new Zl({color:l?223649:3718648,transparent:!0,opacity:.5,side:Vi,blending:ws}),K=new Sn(G,P);K.position.y=2.6,A.add(K);const Te=new Sn(G,P);Te.position.y=-2.6,Te.rotation.x=Math.PI,A.add(Te),H=K}let $;const j=performance.now(),ce=()=>{if($=requestAnimationFrame(ce),document.hidden)return;const q=(performance.now()-j)*.001;M+=(F-M)*.06,N+=(L-N)*.06,A.position.x=y+N*.8,A.position.y=b+M*.8;const Y=e.rotationSpeed||"standard",G=Y==="static"?0:Y==="slow"?.35:Y==="fast"?2.4:1;if(B&&(B.rotation.y+=.0012*G),O){const K=q*.35*G;O.position.x=Math.cos(K)*4.8,O.position.z=Math.sin(K)*4.8*.4,O.position.y=Math.sin(K*1.5)*.6}H&&H.material.uniforms&&(H.material.uniforms.uTime.value=q),_.render(g,v)};ce();const te=()=>{if(!u||!_||!v)return;const q=u.clientWidth||window.innerWidth,Y=u.clientHeight||window.innerHeight;v.aspect=q/Y,v.updateProjectionMatrix(),_.setSize(q,Y),_.setPixelRatio(Math.min(window.devicePixelRatio||1,1.25));const G=q<768,P=e.celestialPosition||"default";P==="upper-right"?(y=G?1.2:3.4,b=G?2.3:1.8):P==="upper-left"?(y=G?-1.2:-3.3,b=G?2.5:2):P==="zenith-center"?(y=0,b=G?2.5:2.4):r==="ringed-planet"||r==="pulsar-star"?(y=G?1.2:3.4,b=G?2.3:1.8,R=G?.48:.68):r==="crescent-moon"||r==="blood-moon"?(y=G?-1.2:-3.3,b=G?2.5:2,R=G?.42:.6):r==="eclipse-corona"&&(y=0,b=G?2.5:2.4,R=G?.45:.64),R*=e.celestialScaleMultiplier||1,A.position.set(y,b,0),A.scale.set(R,R,R)};return window.addEventListener("resize",te,{passive:!0}),()=>{cancelAnimationFrame($),window.removeEventListener("mousemove",Z),window.removeEventListener("resize",te),_.dispose(),u&&_.domElement&&u.contains(_.domElement)&&u.removeChild(_.domElement)}},[r,o,l,e.celestialPosition,e.celestialScaleMultiplier,e.rotationSpeed]),f.jsx("div",{ref:s,className:"fixed inset-0 pointer-events-none z-[1] select-none overflow-hidden","aria-hidden":"true"})};/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=s=>s==null?void 0:s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function pM(s,e,t=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:hM(s),size:24,node:e,...t.length>0?{aliases:t}:{}}}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=s=>{let e="",t=!1;for(const r of s){if(r==="-"||r==="_"||r<=" "){t=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=t?r.toUpperCase():r,t=!1}return e};/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=s=>{const e=mM(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ed(s){return s!=null}function xM(s,e={}){var _,w;const t=e.attributeNames??{},r=E=>t[E]??E,o=s.size??s.width??bs.width,l=s.size??s.height??bs.height,u=((_=s.aliases)==null?void 0:_.filter(E=>typeof E=="string"&&E.trim()!=="").map(E=>`lucide-${E}`))??[],p=[...s.name?[`lucide-${s.name}`]:[],...u],d=((w=e.className)==null?void 0:w.split(" ").filter(Boolean))??[],m=e.includeDefaultClasses===!1?mf(...d):mf("lucide",...p,...d),g=e.absoluteStrokeWidth?Number(e.strokeWidth??bs["stroke-width"])*Number(s.size??s.width??bs.width)/Number(e.size??e.width??bs.width):e.strokeWidth??bs["stroke-width"];return["svg",{...Object.entries(bs).reduce((E,[A,y])=>(E[r(A)]=y,E),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&Ed(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&Ed(e.width)&&{[r("width")]:e.width},..."height"in e&&Ed(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:g,...m&&{[r("class")]:m},[r("viewBox")]:`0 0 ${o} ${l}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},s.node.map(E=>{const[A,y,b]=E,R=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...y}:y;return b?[A,R,b]:[A,R]})]}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function vM(s,e={}){return xM(s,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},yM=be.createContext({}),SM=()=>be.useContext(yM),bM=be.forwardRef(({color:s,size:e,width:t,height:r,strokeWidth:o,absoluteStrokeWidth:l,nonScalingStroke:u,className:p="",children:d,iconNode:m=[],icon:g={node:m,aliases:[],size:24},...v},_)=>{const{size:w=24,strokeWidth:E=2,absoluteStrokeWidth:A=!1,nonScalingStroke:y=!1,color:b="currentColor",className:R=""}=SM()??{},z=!!d||_M(v),[D,F,L=[]]=vM(g,{color:s??b,width:t??e??w,height:r??e??w,strokeWidth:o??E,absoluteStrokeWidth:l??A,nonScalingStroke:u??y,className:mf(R,p),hasA11yProp:z,attributes:v});return be.createElement(D,{ref:_,...F},[...L.map(([M,N])=>be.createElement(M,N)),...Array.isArray(d)?d:[d]])});/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Rt(s,e=[],t=[]){const r=typeof s=="string"?pM(s,e,t):s,o=be.forwardRef(({className:l,...u},p)=>be.createElement(bM,{ref:p,icon:r,className:l,...u}));return r.name&&(o.displayName=gM(r.name)),o}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng={name:"bell",size:24,node:[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]};ng.node;const wM=Rt(ng);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig={name:"calendar-clock",size:24,node:[["path",{d:"M16 14v2.2l1.6 1",key:"fo4ql5"}],["path",{d:"M16 2v3",key:"otl347"}],["path",{d:"M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338",key:"7hb8p4"}],["path",{d:"M3 9h5.859",key:"numkqi"}],["path",{d:"M8 2v3",key:"1ioesn"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]};ig.node;const r0=Rt(ig);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg={name:"calendar",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]]};rg.node;const MM=Rt(rg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};sg.node;const Mr=Rt(sg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};ag.node;const og=Rt(ag);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};lg.node;const oc=Rt(lg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg={name:"coffee",size:24,node:[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]};cg.node;const EM=Rt(cg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug={name:"droplets",size:24,node:[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]};ug.node;const TM=Rt(ug);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg={name:"external-link",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]};dg.node;const CM=Rt(dg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg={name:"eye-off",size:24,node:[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]};fg.node;const AM=Rt(fg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg={name:"face-slightly-smiling",size:24,node:[["path",{d:"M15 10V9",key:"4dkmfx"}],["path",{d:"M16.472 15a6 6 0 01-8.943 0",key:"7qomzy"}],["path",{d:"M9 10V9",key:"1lazqi"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["smile"]};hg.node;const RM=Rt(hg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg={name:"flame",size:24,node:[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]]};pg.node;const mg=Rt(pg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg={name:"headphones",size:24,node:[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]};gg.node;const lc=Rt(gg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg={name:"list-music",size:24,node:[["path",{d:"M16 5H3",key:"m91uny"}],["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M11 19H3",key:"zflm78"}],["path",{d:"M21 16V5",key:"yxg4q8"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]};xg.node;const s0=Rt(xg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg={name:"maximize-2",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]};vg.node;const a0=Rt(vg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g={name:"minimize-2",size:24,node:[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]]};_g.node;const yg=Rt(_g);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};Sg.node;const cc=Rt(Sg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};bg.node;const tr=Rt(bg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};wg.node;const Gi=Rt(wg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};Mg.node;const Ql=Rt(Mg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg={name:"quote",size:24,node:[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]};Eg.node;const NM=Rt(Eg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg={name:"radio",size:24,node:[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};Tg.node;const o0=Rt(Tg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};Cg.node;const wr=Rt(Cg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag={name:"skip-back",size:24,node:[["path",{d:"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",key:"15892j"}],["path",{d:"M3 20V4",key:"1ptbpl"}]]};Ag.node;const gf=Rt(Ag);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg={name:"skip-forward",size:24,node:[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]]};Rg.node;const uc=Rt(Rg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};Ng.node;const Pg=Rt(Ng);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Dg.node;const Es=Rt(Dg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg={name:"square-check-big",size:24,node:[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-square"]};Lg.node;const PM=Rt(Lg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig={name:"star",size:24,node:[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]};Ig.node;const DM=Rt(Ig);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};kg.node;const Ug=Rt(kg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg={name:"sunrise",size:24,node:[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]};Fg.node;const LM=Rt(Fg);/**
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
 */const Bg={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};Bg.node;const oo=Rt(Bg);/**
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
 */const Wg={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};Wg.node;const xf=Rt(Wg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};jg.node;const $g=Rt(jg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Xg.node;const Er=Rt(Xg),FM=()=>{const{activeYouTubeItem:s,isYouTubePlaying:e,youtubeVolume:t,isYouTubeMuted:r,setYouTubeIsPlaying:o,setYouTubePlayerReady:l,showYouTubePreview:u,setShowYouTubePreview:p,toggleYouTubePlay:d,nextYouTubeTrack:m,prevYouTubeTrack:g,toggleYouTubeMute:v,setYouTubeVolume:_,audioSource:w}=is(),E=be.useRef(null),[A,y]=be.useState(null),b=be.useRef((s==null?void 0:s.id)||null),R=be.useRef(null),[z,D]=be.useState(!1),F=be.useRef(!1),L=be.useCallback((H,$="")=>{try{E.current&&E.current.contentWindow&&E.current.contentWindow.postMessage(JSON.stringify({event:"command",func:H,args:$}),"*")}catch(j){console.warn("[YouTube Audio] Command error:",j)}},[]),M=be.useCallback((H,$)=>{const j=$?"1":"0",ce=typeof window<"u"&&window.location.origin?`&origin=${encodeURIComponent(window.location.origin)}`:"";if(!H)return`https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=${j}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${ce}`;if(H.type==="playlist"&&H.playlistId)return`https://www.youtube.com/embed/videoseries?list=${encodeURIComponent(H.playlistId)}&autoplay=${j}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${ce}`;if(H.type==="video_in_playlist"&&H.videoId&&H.playlistId)return`https://www.youtube.com/embed/${encodeURIComponent(H.videoId)}?list=${encodeURIComponent(H.playlistId)}&autoplay=${j}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${ce}`;const te=H.videoId||"jfKfPfyJRdk";return`https://www.youtube.com/embed/${encodeURIComponent(te)}?autoplay=${j}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${ce}`},[]),[N,Z]=be.useState(()=>M(s,!1)),B=be.useCallback(()=>{L("unMute",""),L("setVolume",[t||75]),r&&v()},[L,t,r,v]);be.useEffect(()=>(window.__forMeSendYouTubeCommand=L,window.__forMeForceUnmute=B,l(!0),()=>{delete window.__forMeSendYouTubeCommand,delete window.__forMeForceUnmute}),[L,B,l]),be.useEffect(()=>{if(!s||b.current===s.id)return;b.current=s.id,y(null);const H=M(s,e);R.current=H,Z(H),Bi.updateMetadata({title:s.title,artist:s.channel||"FOR ME Sanctuary",album:s.type==="playlist"?"YouTube Playlist":"YouTube Stream",artworkUrl:s.thumbnailUrl,onPlay:()=>{o(!0),L("playVideo",""),B()},onPause:()=>{o(!1),L("pauseVideo","")},onNext:s.type==="playlist"||s.type==="video_in_playlist"?m:void 0,onPrev:s.type==="playlist"||s.type==="video_in_playlist"?g:void 0})},[s,M,e,m,g,L,o,B]),be.useEffect(()=>{if(F.current){F.current=!1;return}e?(L("playVideo",""),setTimeout(()=>{L("unMute",""),L("setVolume",[t||75])},50),Bi.setPlaybackState("playing")):(L("pauseVideo",""),Bi.setPlaybackState("paused"))},[e,L,t]),be.useEffect(()=>{L("setVolume",[t||75])},[t,L]),be.useEffect(()=>{r?L("mute",""):(L("unMute",""),L("setVolume",[t||75]))},[r,t,L]),be.useEffect(()=>{const H=$=>{if(!(!$.data||typeof $.data!="string"))try{const j=JSON.parse($.data);j.event==="onStateChange"?j.info===1?(F.current=!0,o(!0),y(null),Bi.setPlaybackState("playing"),r||(L("unMute",""),L("setVolume",[t||75]))):j.info===2?document.hidden||(F.current=!0,o(!1),Bi.setPlaybackState("paused")):j.info===0&&((s==null?void 0:s.type)==="playlist"||(s==null?void 0:s.type)==="video_in_playlist"?Bi.setPlaybackState("playing"):(F.current=!0,o(!1),Bi.setPlaybackState("none"))):j.event==="infoDelivery"&&j.info?typeof j.info.muted=="boolean"&&j.info.muted&&!r&&e&&(L("unMute",""),L("setVolume",[t||75])):j.event==="onError"&&(console.warn("[YouTube Audio Player Error]",j.info),(j.info===101||j.info===150)&&y("The owner of this video restricts playback outside of YouTube."))}catch{}};return window.addEventListener("message",H),()=>window.removeEventListener("message",H)},[o,r,t,L,s,e]);const X=w==="youtube"&&e||u,O=(s==null?void 0:s.type)==="playlist"||(s==null?void 0:s.type)==="video_in_playlist";return f.jsxs(f.Fragment,{children:[f.jsxs("div",{role:"region","aria-label":"YouTube Audio Player",style:{position:"fixed",bottom:!X||z?"0px":u?"84px":"16px",right:!X||z?"0px":u?"24px":"16px",width:!X||z?"2px":u?"380px":"250px",height:!X||z?"2px":u?"285px":"150px",zIndex:!X||z?-1:u?50:30,opacity:!X||z?.01:1,pointerEvents:!X||z?"none":"auto",borderRadius:"1.25rem",overflow:"hidden",boxShadow:u?"0 30px 70px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.18)":"0 15px 35px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.12)",transition:"all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"},className:"backdrop-blur-2xl bg-[#090b14]/95 flex flex-col border border-white/15",children:[f.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-black/60 shrink-0 select-none",children:[f.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[f.jsx("span",{className:`w-2 h-2 rounded-full shrink-0 ${e?"bg-red-500 animate-pulse":"bg-zinc-500"}`}),f.jsx("span",{className:"text-white text-xs font-display font-semibold truncate max-w-[110px] sm:max-w-[160px]",title:s==null?void 0:s.title,children:(s==null?void 0:s.title)||"YouTube Audio"})]}),f.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[f.jsxs("button",{type:"button",onClick:B,className:`px-1.5 py-0.5 rounded-md text-[10px] font-sans font-bold flex items-center gap-1 transition-colors cursor-pointer ${r?"bg-amber-500 text-black hover:bg-amber-400 animate-pulse":"bg-emerald-600/80 text-white hover:bg-emerald-500"}`,title:"Force Unmute & Restore Volume",children:[r?f.jsx($g,{className:"w-3 h-3"}):f.jsx(xf,{className:"w-3 h-3"}),f.jsx("span",{className:"hidden sm:inline",children:r?"UNMUTE":`${t}%`})]}),f.jsx("button",{type:"button",onClick:()=>D(!0),className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer",title:"Audio Only (Hide Video Frame)",children:f.jsx(lc,{className:"w-3 h-3"})}),f.jsx("button",{type:"button",onClick:()=>p(!u),className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer",title:u?"Collapse to Mini Player":"Expand Video Preview",children:u?f.jsx(yg,{className:"w-3 h-3"}):f.jsx(a0,{className:"w-3 h-3"})}),f.jsx("button",{type:"button",onClick:()=>{o(!1),p(!1),L("pauseVideo","")},className:"p-1 rounded-md bg-white/10 hover:bg-red-500/80 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer",title:"Stop playback & close",children:f.jsx(Er,{className:"w-3 h-3"})})]})]}),A&&f.jsxs("div",{className:"absolute inset-0 z-30 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center space-y-2 pointer-events-auto",children:[f.jsx(og,{className:"w-6 h-6 text-amber-400"}),f.jsx("p",{className:"text-xs text-white/95 font-sans leading-relaxed max-w-xs",children:A}),(s==null?void 0:s.url)&&f.jsxs("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold transition-colors shadow-md",children:[f.jsx(CM,{className:"w-3 h-3"}),f.jsx("span",{children:"Open in YouTube"})]})]}),f.jsx("div",{className:"flex-1 w-full bg-black relative min-h-0",children:f.jsx("iframe",{ref:E,id:"global-youtube-audio-iframe",title:"FOR ME Sanctuary Audio Stream",src:N,className:"w-full h-full border-0 absolute inset-0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),f.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 border-t border-white/10 bg-black/60 shrink-0 text-xs",children:[u?f.jsxs("div",{className:"flex items-center gap-1",children:[f.jsx("span",{className:"text-[10px] font-sans text-zinc-400 mr-1",children:"Vol:"}),[25,50,75,100].map(H=>f.jsxs("button",{type:"button",onClick:()=>{_(H),L("setVolume",[H]),B()},className:`px-1.5 py-0.5 rounded text-[10px] font-mono transition-colors cursor-pointer ${t===H?"bg-red-600 text-white font-bold":"bg-white/10 text-zinc-300 hover:bg-white/20"}`,children:[H,"%"]},H))]}):f.jsxs("div",{className:"flex items-center gap-1",children:[O&&f.jsxs(f.Fragment,{children:[f.jsx("button",{type:"button",onClick:g,className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer",title:"Previous track in playlist",children:f.jsx(gf,{className:"w-3 h-3"})}),f.jsx("button",{type:"button",onClick:m,className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer",title:"Next track in playlist",children:f.jsx(uc,{className:"w-3 h-3"})})]}),f.jsx("span",{className:"text-[10px] font-mono text-zinc-400",children:r?"Muted":`${t}%`})]}),f.jsxs("div",{className:"flex items-center gap-1.5",children:[u&&O&&f.jsxs(f.Fragment,{children:[f.jsx("button",{type:"button",onClick:g,className:"p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white transition-colors cursor-pointer",title:"Previous track",children:f.jsx(gf,{className:"w-3.5 h-3.5"})}),f.jsx("button",{type:"button",onClick:m,className:"p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white transition-colors cursor-pointer",title:"Next track",children:f.jsx(uc,{className:"w-3.5 h-3.5"})})]}),f.jsx("button",{type:"button",onClick:()=>{d(),B()},className:`px-3 py-1 rounded-lg text-white text-[11px] font-display font-semibold flex items-center gap-1 shadow-sm transition-all cursor-pointer ${e?"bg-red-600 hover:bg-red-500":"bg-emerald-600 hover:bg-emerald-500"}`,children:e?f.jsxs(f.Fragment,{children:[f.jsx(tr,{className:"w-3 h-3 fill-current"}),f.jsx("span",{children:"Pause"})]}):f.jsxs(f.Fragment,{children:[f.jsx(Gi,{className:"w-3 h-3 fill-current ml-0.5"}),f.jsx("span",{children:"Play"})]})})]})]})]}),X&&z&&f.jsxs("button",{type:"button",onClick:()=>D(!1),className:"fixed bottom-4 right-4 z-40 px-3 py-1.5 rounded-xl cosmic-dock text-xs flex items-center gap-2 border border-white/15 text-white hover:border-violet-400/50 shadow-xl cursor-pointer transition-all animate-fadeIn",title:"Restore Video Frame",children:[f.jsx("span",{className:"w-2 h-2 rounded-full bg-red-500 animate-pulse"}),f.jsx("span",{className:"font-display text-[11px] font-medium",children:"Show Video"}),f.jsx(a0,{className:"w-3 h-3 text-zinc-400"})]})]})},zM=[{id:"deep-space-obsidian",name:"Deep Space Obsidian",tagline:"Luminous Lavender & Crescent Moon",accent:"#a855f7",gradient:["#060814","#2d1252","#7c3aed","#ede9fe"],settings:{palette:"cosmic-royal",celestialBody:"crescent-moon",celestialPosition:"default",celestialScaleMultiplier:1,rotationSpeed:"standard",waveGeometry:"dunes",speed:"balanced",amplitude:"majestic",waveLayerDensity:"deep",horizonHeight:"balanced",clockFontStyle:"tabular",clockHalo:"pulsar",clockColor:"palette",clockPosition:"center",clockDivider:"colon",showConstellations:!0,showComet:!0,showNebulaDust:!0,starDensity:"balanced",shootingStarMode:"occasional"}},{id:"cyberpunk-neon",name:"Cyberpunk Neon",tagline:"High-Voltage Cyan & Ringed Gas Giant",accent:"#06b6d4",gradient:["#06000e","#3b0764","#06b6d4","#f43f5e"],settings:{palette:"cyberpunk-neon",celestialBody:"ringed-planet",celestialPosition:"upper-right",celestialScaleMultiplier:1.15,rotationSpeed:"fast",waveGeometry:"aurora",speed:"dynamic",amplitude:"dramatic",waveLayerDensity:"dense",horizonHeight:"balanced",clockFontStyle:"mono",clockHalo:"pulsar",clockColor:"cyan",clockPosition:"center",clockDivider:"colon",showCrossStars:!0,showOrbitalTrack:!0,starDensity:"dense",shootingStarMode:"meteor-shower"}},{id:"emerald-borealis",name:"Emerald Borealis",tagline:"Northern Aurora Ribbons & Pulsar Star",accent:"#10b981",gradient:["#010d05","#064e3b","#10b981","#a7f3d0"],settings:{palette:"emerald-aurora",celestialBody:"pulsar-star",celestialPosition:"zenith-center",celestialScaleMultiplier:1.1,rotationSpeed:"fast",waveGeometry:"aurora",speed:"balanced",amplitude:"majestic",waveLayerDensity:"dense",horizonHeight:"balanced",clockFontStyle:"minimal",clockHalo:"pulsar",clockColor:"cyan",clockPosition:"center",clockDivider:"dot",showConstellations:!0,showComet:!0,starDensity:"galaxy",shootingStarMode:"occasional"}},{id:"sunset-dunes",name:"Sunset Dunes",tagline:"Velvet Crimson & Solar Eclipse Corona",accent:"#f43f5e",gradient:["#0a0208","#771146","#e11d48","#f59e0b"],settings:{palette:"supernova-sunset",celestialBody:"eclipse-corona",celestialPosition:"zenith-center",celestialScaleMultiplier:1,rotationSpeed:"standard",waveGeometry:"dunes",speed:"balanced",amplitude:"majestic",waveLayerDensity:"deep",horizonHeight:"balanced",clockFontStyle:"serif",clockHalo:"subtle",clockColor:"gold",clockPosition:"center",clockDivider:"space",showConstellations:!1,showComet:!0,starDensity:"balanced",shootingStarMode:"off"}},{id:"blood-moon-totality",name:"Blood Moon Totality",tagline:"Crimson Eclipse & Ruby Stardust",accent:"#ef4444",gradient:["#0d0202","#450a0a","#b91c1c","#f87171"],settings:{palette:"supernova-sunset",celestialBody:"blood-moon",celestialPosition:"upper-left",celestialScaleMultiplier:1.25,rotationSpeed:"slow",waveGeometry:"mountains",speed:"calm",amplitude:"dramatic",waveLayerDensity:"deep",horizonHeight:"balanced",clockFontStyle:"serif",clockHalo:"pulsar",clockColor:"rose",clockPosition:"center",clockDivider:"colon",showConstellations:!0,showCrossStars:!0,starDensity:"dense",shootingStarMode:"meteor-shower"}},{id:"nord-frost",name:"Nord Frost",tagline:"Sub-Zero Arctic & Crystalline Torus",accent:"#38bdf8",gradient:["#020b14","#0c2e4e","#0284c7","#e0f2fe"],settings:{palette:"celestial-cyan",celestialBody:"crescent-moon",celestialPosition:"upper-right",celestialScaleMultiplier:1.1,rotationSpeed:"standard",waveGeometry:"ocean",speed:"balanced",amplitude:"majestic",waveLayerDensity:"dense",horizonHeight:"low",clockFontStyle:"minimal",clockHalo:"none",clockColor:"white",clockPosition:"center",clockDivider:"colon",showConstellations:!0,showCrossStars:!0,starDensity:"dense",shootingStarMode:"occasional"}},{id:"monochrome-mineral",name:"Monochrome Mineral",tagline:"Architectural Platinum & Deep Void",accent:"#a1a1aa",gradient:["#030306","#181824","#71717a","#ffffff"],settings:{palette:"nocturne-silver",celestialBody:"none",celestialPosition:"default",celestialScaleMultiplier:1,rotationSpeed:"static",waveGeometry:"mountains",speed:"calm",amplitude:"subtle",waveLayerDensity:"airy",horizonHeight:"balanced",clockFontStyle:"tabular",clockHalo:"none",clockColor:"white",clockPosition:"center",clockDivider:"space",showConstellations:!1,showComet:!1,showNebulaDust:!1,starDensity:"sparse",shootingStarMode:"off"}},{id:"pure-pitch-black",name:"Pitch Black Void",tagline:"OLED Zero-Light Battery Sanctuary",accent:"#71717a",gradient:["#000000","#050505","#171717","#e5e5e5"],settings:{palette:"pure-pitch-black",celestialBody:"crescent-moon",celestialPosition:"upper-right",celestialScaleMultiplier:.8,rotationSpeed:"slow",waveGeometry:"dunes",speed:"frozen",amplitude:"subtle",waveLayerDensity:"airy",horizonHeight:"low",clockFontStyle:"tabular",clockHalo:"none",clockColor:"white",clockPosition:"center",clockDivider:"colon",showConstellations:!1,showComet:!1,showNebulaDust:!1,starDensity:"sparse",shootingStarMode:"off"}}],OM=[{id:"cosmic-royal",name:"Cosmic Royal",previewColors:["#060814","#2d1252","#7c3aed","#ede9fe"]},{id:"cyberpunk-neon",name:"Cyber Neon",previewColors:["#06000e","#3b0764","#06b6d4","#f43f5e"]},{id:"emerald-aurora",name:"Emerald Aurora",previewColors:["#010d05","#064e3b","#10b981","#a7f3d0"]},{id:"supernova-sunset",name:"Sunset Supernova",previewColors:["#12050e","#6e133e","#e11d48","#fffbeb"]},{id:"celestial-cyan",name:"Celestial Cyan",previewColors:["#030b14","#0c2e4e","#0284c7","#e0f2fe"]},{id:"solar-gold",name:"Solar Gold",previewColors:["#140d02","#523405","#f59e0b","#fef3c7"]},{id:"nocturne-silver",name:"Nocturne Silver",previewColors:["#050508","#1e1e24","#71717a","#f4f4f5"]},{id:"pure-pitch-black",name:"Pitch Black OLED",previewColors:["#000000","#09090b","#27272a","#fafafa"]}],BM=({isOpen:s,onClose:e})=>{const{wallpaperSettings:t,updateWallpaperSettings:r,appTheme:o,toggleAppTheme:l}=is(),u=o==="light",[p,d]=be.useState("realms");if(!s)return null;const m=()=>{r({palette:"cosmic-royal",speed:"balanced",amplitude:"majestic",waveGeometry:"dunes",waveLayerDensity:"deep",horizonHeight:"balanced",waveStrokeOpacity:.8,interactiveParallax:!0,celestialBody:"crescent-moon",celestialPosition:"default",celestialScaleMultiplier:1,rotationSpeed:"standard",showNebulaDust:!0,nebulaIntensity:"vivid",showConstellations:!0,showComet:!0,shootingStarMode:"occasional",showStars:!0,starDensity:"balanced",showCrossStars:!1,showOrbitalTrack:!1,showMeridian:!1,clockFontStyle:"tabular",clockSize:"standard",clockPosition:"center",clockDivider:"colon",clockColor:"palette",clockFormat:"12h",showSeconds:!0,showDate:!0,showGreeting:!0,clockHalo:"pulsar"})};return f.jsxs("div",{className:"fixed inset-0 z-50 pointer-events-none select-none",children:[f.jsx("div",{className:"absolute inset-0 bg-black/20 backdrop-blur-[2px] pointer-events-auto transition-opacity",onClick:e,"aria-hidden":"true"}),f.jsxs("aside",{role:"dialog","aria-modal":"true","aria-label":"Wallpaper Studio Inspector",className:`absolute top-8 sm:top-10 bottom-3 sm:bottom-6 right-2 sm:right-6 w-[calc(100%-1rem)] sm:w-[440px] rounded-3xl border shadow-[0_24px_80px_rgba(0,0,0,0.85)] backdrop-blur-3xl flex flex-col z-10 pointer-events-auto transition-all animate-fadeIn overflow-hidden ${u?"bg-white/95 border-zinc-200/90 text-zinc-900":"bg-[#090b16]/95 border-white/[0.12] text-white"}`,children:[f.jsxs("div",{className:`flex items-center justify-between p-4 px-5 border-b shrink-0 ${u?"border-zinc-200/80 bg-white/70":"border-white/[0.08] bg-white/[0.02]"}`,children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:`w-8 h-8 rounded-xl border flex items-center justify-center shadow-sm ${u?"bg-zinc-100 border-zinc-200 text-zinc-800":"bg-white/[0.08] border-white/15 text-zinc-200"}`,children:f.jsx(Pg,{className:"w-3.5 h-3.5"})}),f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("h2",{className:"text-xs font-display uppercase tracking-widest font-bold",children:"Studio"}),f.jsx("span",{className:`text-[9px] font-mono font-medium px-2 py-0.5 rounded-full border ${u?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-emerald-500/15 text-emerald-300 border-emerald-400/30"}`,children:"Live"})]}),f.jsx("p",{className:`text-[10px] font-sans ${u?"text-zinc-500":"text-zinc-400"}`,children:"Sanctuary customization"})]})]}),f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx("button",{type:"button",onClick:m,"aria-label":"Reset to default settings",title:"Reset to Defaults",className:`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${u?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.06] hover:bg-white/[0.12] text-zinc-400 hover:text-white"}`,children:f.jsx(wr,{className:"w-3.5 h-3.5"})}),f.jsx("button",{type:"button",onClick:e,"aria-label":"Close Studio",className:`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${u?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.06] hover:bg-white/[0.12] text-zinc-400 hover:text-white"}`,children:f.jsx(Er,{className:"w-4 h-4"})})]})]}),f.jsx("div",{className:`p-2.5 border-b shrink-0 ${u?"border-zinc-200/90 bg-zinc-50/70":"border-white/[0.06] bg-black/25"}`,children:f.jsx("div",{className:`grid grid-cols-3 gap-1.5 p-1 rounded-2xl ${u?"bg-zinc-200/60":"bg-white/[0.04]"}`,children:[{id:"realms",label:"Realms",desc:"1-Tap Themes",icon:Es},{id:"cosmos",label:"Cosmos",desc:"Planet & Waves",icon:cc},{id:"timepiece",label:"Timepiece",desc:"Clock Style",icon:oc}].map(g=>{const v=g.icon,_=p===g.id;return f.jsxs("button",{type:"button",onClick:()=>d(g.id),className:`flex items-center justify-center gap-2 py-2 px-2 rounded-xl text-xs font-sans font-medium transition-all cursor-pointer ${_?u?"bg-white text-zinc-950 font-bold shadow-sm":"bg-white text-zinc-950 font-bold shadow-[0_2px_12px_rgba(255,255,255,0.18)]":u?"hover:bg-white/60 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.06] text-zinc-400 hover:text-white"}`,children:[f.jsx(v,{className:"w-3.5 h-3.5 shrink-0"}),f.jsx("span",{children:g.label})]},g.id)})})}),f.jsxs("div",{className:"flex-1 overflow-y-auto p-5 space-y-6",children:[p==="realms"&&f.jsxs("div",{className:"space-y-4 animate-fadeIn",children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold ${u?"text-zinc-700":"text-zinc-300"}`,children:"Curated Aesthetic Realms"}),f.jsx("span",{className:`text-[10px] font-mono ${u?"text-zinc-500":"text-zinc-400"}`,children:"Instant Harmony"})]}),f.jsx("div",{className:"grid grid-cols-1 gap-2",children:zM.map(g=>{const v=t.palette===g.settings.palette&&t.celestialBody===g.settings.celestialBody;return f.jsxs("button",{type:"button",onClick:()=>r(g.settings),className:`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between group ${v?u?"bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900 shadow-md":"bg-white/[0.08] border-white/40 shadow-lg":u?"bg-white hover:bg-zinc-50 border-zinc-200/90":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08]"}`,children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"w-10 h-10 rounded-xl border border-white/20 shrink-0 shadow-sm flex items-center justify-center overflow-hidden",style:{background:`linear-gradient(135deg, ${g.gradient.join(", ")})`},children:v&&f.jsx(Mr,{className:"w-4 h-4 text-white drop-shadow-md stroke-[3]"})}),f.jsxs("div",{children:[f.jsx("div",{className:`text-xs font-display font-bold ${v?u?"text-zinc-950 font-bold":"text-white":u?"text-zinc-800":"text-zinc-200"}`,children:g.name}),f.jsx("div",{className:`text-[10px] font-sans ${u?"text-zinc-500":"text-zinc-400"}`,children:g.tagline})]})]}),f.jsx("div",{className:"flex items-center gap-1 shrink-0 pl-2",children:g.gradient.map((_,w)=>f.jsx("div",{className:"w-2.5 h-2.5 rounded-full border border-black/20",style:{backgroundColor:_}},w))})]},g.id)})})]}),p==="cosmos"&&f.jsxs("div",{className:"space-y-5 animate-fadeIn",children:[f.jsxs("div",{className:"space-y-2",children:[f.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${u?"text-zinc-700":"text-zinc-300"}`,children:"3D Celestial Object"}),f.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:[{id:"crescent-moon",label:"Crescent Moon"},{id:"ringed-planet",label:"Saturn Rings"},{id:"blood-moon",label:"Blood Moon"},{id:"pulsar-star",label:"Pulsar Star"},{id:"eclipse-corona",label:"Eclipse Corona"},{id:"none",label:"No Planet (Pure Waves)"}].map(g=>{const v=t.celestialBody===g.id;return f.jsxs("button",{type:"button",onClick:()=>r({celestialBody:g.id}),className:`p-2.5 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer flex items-center justify-between ${v?u?"bg-zinc-900 text-white font-semibold":"bg-white text-zinc-950 font-semibold shadow-sm":u?"bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300"}`,children:[f.jsx("span",{className:"truncate",children:g.label}),v&&f.jsx(Mr,{className:"w-3.5 h-3.5 shrink-0 ml-1"})]},g.id)})})]}),f.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[f.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${u?"text-zinc-700":"text-zinc-300"}`,children:"Atmospheric Palette"}),f.jsx("div",{className:"grid grid-cols-2 gap-2",children:OM.map(g=>{const v=t.palette===g.id;return f.jsxs("button",{type:"button",onClick:()=>r({palette:g.id}),className:`p-2 rounded-xl border text-left transition-all cursor-pointer flex flex-col gap-1.5 ${v?u?"bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900 shadow-sm":"bg-white/[0.08] border-white/40 shadow-sm":u?"bg-white hover:bg-zinc-50 border-zinc-200":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]"}`,children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("span",{className:`text-[11px] font-semibold ${v?u?"text-zinc-950":"text-white":u?"text-zinc-700":"text-zinc-300"}`,children:g.name}),v&&f.jsx(Mr,{className:"w-3 h-3 text-emerald-400"})]}),f.jsx("div",{className:"flex items-center gap-1",children:g.previewColors.map((_,w)=>f.jsx("span",{className:"w-3 h-3 rounded-full border border-black/20",style:{backgroundColor:_}},w))})]},g.id)})})]}),f.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[f.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${u?"text-zinc-700":"text-zinc-300"}`,children:"Wave Topography"}),f.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{id:"dunes",label:"Cosmic Dunes"},{id:"aurora",label:"Aurora Ribbon"},{id:"mountains",label:"Ridge Peaks"},{id:"ocean",label:"Ocean Swell"}].map(g=>{const v=t.waveGeometry===g.id;return f.jsx("button",{type:"button",onClick:()=>r({waveGeometry:g.id}),className:`p-2.5 rounded-xl border text-center text-xs font-medium transition-all cursor-pointer ${v?u?"bg-zinc-900 text-white font-semibold":"bg-white text-zinc-950 font-semibold shadow-sm":u?"bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300"}`,children:g.label},g.id)})})]}),f.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[f.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${u?"text-zinc-700":"text-zinc-300"}`,children:"Motion Speed"}),f.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:[{id:"calm",label:"Calm Drift"},{id:"balanced",label:"Balanced"},{id:"dynamic",label:"Dynamic"}].map(g=>{const v=t.speed===g.id;return f.jsx("button",{type:"button",onClick:()=>r({speed:g.id}),className:`p-2 rounded-xl border text-center text-xs font-medium transition-all cursor-pointer ${v?u?"bg-zinc-900 text-white font-semibold":"bg-white text-zinc-950 font-semibold shadow-sm":u?"bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300"}`,children:g.label},g.id)})})]}),f.jsx("div",{className:"pt-2 border-t border-white/[0.06]",children:f.jsxs("button",{type:"button",onClick:l,className:`w-full p-2.5 rounded-xl border text-xs font-medium transition-all cursor-pointer flex items-center justify-center gap-2 ${u?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-white"}`,children:[u?f.jsx(cc,{className:"w-4 h-4 text-zinc-700"}):f.jsx(Ug,{className:"w-4 h-4 text-amber-300"}),f.jsxs("span",{children:["Switch to ",u?"Obsidian Dark":"Creamy Light"," Theme"]})]})})]}),p==="timepiece"&&f.jsxs("div",{className:"space-y-5 animate-fadeIn",children:[f.jsxs("div",{className:"space-y-2",children:[f.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${u?"text-zinc-700":"text-zinc-300"}`,children:"Clock Typography Face"}),f.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{id:"tabular",label:"Tabular Modern",preview:"12:00"},{id:"serif",label:"Editorial Luxury",preview:"12:00"},{id:"mono",label:"Tech Monospace",preview:"12:00"},{id:"minimal",label:"Minimalist Light",preview:"12:00"}].map(g=>{const v=t.clockFontStyle===g.id;return f.jsxs("button",{type:"button",onClick:()=>r({clockFontStyle:g.id}),className:`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${v?u?"bg-zinc-900 text-white font-semibold":"bg-white text-zinc-950 font-semibold shadow-sm":u?"bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300"}`,children:[f.jsx("span",{className:"text-xs",children:g.label}),v&&f.jsx(Mr,{className:"w-3.5 h-3.5"})]},g.id)})})]}),f.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[f.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${u?"text-zinc-700":"text-zinc-300"}`,children:"Dial Accent Tint"}),f.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{id:"palette",label:"Palette Match",dot:"#a855f7"},{id:"white",label:"Pure White",dot:"#ffffff"},{id:"gold",label:"Stardust Gold",dot:"#fbbf24"},{id:"cyan",label:"Cyber Cyan",dot:"#22d3ee"},{id:"rose",label:"Rose Quartz",dot:"#f43f5e"}].map(g=>{const v=t.clockColor===g.id;return f.jsxs("button",{type:"button",onClick:()=>r({clockColor:g.id}),className:`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${v?u?"bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900":"bg-white/[0.08] border-white/40":u?"bg-white hover:bg-zinc-50 border-zinc-200":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]"}`,children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"w-3 h-3 rounded-full border border-black/20",style:{backgroundColor:g.dot}}),f.jsx("span",{className:`text-xs ${v?"font-bold":""}`,children:g.label})]}),v&&f.jsx(Mr,{className:"w-3.5 h-3.5 text-emerald-400"})]},g.id)})})]}),f.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[f.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${u?"text-zinc-700":"text-zinc-300"}`,children:"Display Options"}),f.jsxs("div",{className:"space-y-2",children:[f.jsxs("div",{className:`p-3 rounded-xl border flex items-center justify-between ${u?"bg-white border-zinc-200":"bg-white/[0.03] border-white/[0.06]"}`,children:[f.jsxs("div",{children:[f.jsx("div",{className:"text-xs font-semibold",children:"Orbital Seconds Capsule"}),f.jsx("div",{className:`text-[10px] ${u?"text-zinc-500":"text-zinc-400"}`,children:"Show live orbiting seconds gauge"})]}),f.jsx("button",{type:"button",onClick:()=>r({showSeconds:!t.showSeconds}),className:`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${t.showSeconds?"bg-violet-600":u?"bg-zinc-300":"bg-white/20"}`,children:f.jsx("span",{className:`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${t.showSeconds?"left-6":"left-1"}`})})]}),f.jsxs("div",{className:`p-3 rounded-xl border flex items-center justify-between ${u?"bg-white border-zinc-200":"bg-white/[0.03] border-white/[0.06]"}`,children:[f.jsxs("div",{children:[f.jsx("div",{className:"text-xs font-semibold",children:"Breathing Atmospheric Aura"}),f.jsx("div",{className:`text-[10px] ${u?"text-zinc-500":"text-zinc-400"}`,children:"Ambient radial glow behind timepiece"})]}),f.jsx("button",{type:"button",onClick:()=>r({clockHalo:t.clockHalo==="none"?"pulsar":"none"}),className:`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${t.clockHalo!=="none"?"bg-violet-600":u?"bg-zinc-300":"bg-white/20"}`,children:f.jsx("span",{className:`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${t.clockHalo!=="none"?"left-6":"left-1"}`})})]})]})]})]})]})]})]})},lo=({className:s="w-4 h-4"})=>f.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:s,"aria-hidden":"true",children:f.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})}),Yg=({isPlaying:s,color:e="#a855f7",className:t="w-16 h-5",barCount:r=10})=>{const o=be.useRef(null);return be.useEffect(()=>{const l=o.current;if(!l)return;const u=l.getContext("2d");if(!u)return;let p;const d=br.getAnalyser(),m=d?new Uint8Array(d.frequencyBinCount):null,g=()=>{if(u.clearRect(0,0,l.width,l.height),s&&d&&m){d.getByteFrequencyData(m);const v=l.width,_=l.height,w=2,E=w*(r-1),A=Math.max(2,(v-E)/r);for(let y=0;y<r;y++){const b=Math.min(m.length-1,Math.floor(y*(m.length/r)*.7)),R=m[b]/255,z=Math.max(3,R*(_-2)),D=y*(A+w),F=_-z;u.fillStyle=e,u.beginPath(),u.roundRect(D,F,A,z,1.5),u.fill()}}else{const v=l.width,_=l.height,w=2,E=w*(r-1),A=Math.max(2,(v-E)/r);for(let y=0;y<r;y++){const b=y*(A+w),R=_-2.5;u.fillStyle="rgba(255, 255, 255, 0.2)",u.beginPath(),u.roundRect(b,R,A,2.5,1),u.fill()}}p=requestAnimationFrame(g)};return g(),()=>{cancelAnimationFrame(p)}},[s,e,r]),f.jsx("canvas",{ref:o,width:64,height:20,className:t,"aria-hidden":"true"})},HM=({isOpen:s,onClose:e})=>{const{appTheme:t,audioSource:r,isAudioPlaying:o,activeSoundscapeId:l,audioVolume:u,isAudioMuted:p,playSoundscape:d,stopSoundscape:m,setAudioVolume:g,toggleAudioMute:v,isYouTubePlaying:_,activeYouTubeItem:w,youtubeVolume:E,isYouTubeMuted:A,savedYouTubeItems:y,showYouTubePreview:b,setShowYouTubePreview:R,playYouTubeItem:z,toggleYouTubePlay:D,stopYouTube:F,nextYouTubeTrack:L,prevYouTubeTrack:M,setYouTubeVolume:N,toggleYouTubeMute:Z,addYouTubeToLibrary:B,removeYouTubeFromLibrary:X}=is(),O=t==="light",[H,$]=be.useState(r||"youtube"),[j,ce]=be.useState(""),[te,q]=be.useState(""),[Y,G]=be.useState(null),[P,K]=be.useState(null),[Te,ie]=be.useState(null),[xe,Me]=be.useState(null);if(be.useEffect(()=>{if(!Te){Me(null);return}Me(Te*60);const Ee=setInterval(()=>{Me(Fe=>Fe===null||Fe<=1?(m(),F(),ie(null),null):Fe-1)},1e3);return()=>clearInterval(Ee)},[Te,m,F]),be.useEffect(()=>{const Ee=Fe=>{Fe.key==="Escape"&&s&&e()};return window.addEventListener("keydown",Ee),()=>window.removeEventListener("keydown",Ee)},[s,e]),!s)return null;const ge=da.find(Ee=>Ee.id===l)||da[0],ye=Ee=>{const Fe=Math.floor(Ee/60),Ge=Ee%60;return`${Fe}:${Ge.toString().padStart(2,"0")}`},Pe=Ee=>{if(Ee.preventDefault(),G(null),K(null),!j.trim()){G("Please enter a YouTube video or playlist link.");return}const Fe=B(j.trim(),te.trim()||void 0);if(!Fe.success||!Fe.item){G(Fe.error||"Failed to parse YouTube link.");return}z(Fe.item),ce(""),q(""),K(`Playing: ${Fe.item.title}`),setTimeout(()=>K(null),4e3)},st=H==="youtube"?w?w.title:"No YouTube stream selected":ge.title,je=H==="youtube"?_:o;return f.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 backdrop-blur-xl animate-fadeIn select-none ${O?"bg-black/45":"bg-black/85"}`,role:"dialog","aria-modal":"true","aria-labelledby":"audio-modal-title",children:[f.jsx("div",{className:"fixed inset-0",onClick:e,"aria-hidden":"true"}),f.jsxs("div",{className:`relative z-10 w-full max-w-2xl border rounded-3xl shadow-[0_20px_70px_rgba(0,0,0,0.85)] flex flex-col max-h-[90vh] overflow-hidden ${O?"bg-white/95 border-zinc-200 text-zinc-900 shadow-2xl":"bg-[#0b0d1e] border-white/[0.12] text-white shadow-2xl"}`,children:[f.jsxs("div",{className:`flex items-center justify-between px-6 py-4 border-b shrink-0 ${O?"border-zinc-200 bg-zinc-50/80":"border-white/[0.08] bg-white/[0.02]"}`,children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:`w-9 h-9 rounded-2xl border flex items-center justify-center ${O?"bg-rose-50 border-rose-200 text-red-600":"bg-red-500/20 border-red-400/40 text-red-400"}`,children:f.jsx(lc,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsxs("h2",{id:"audio-modal-title",className:`text-sm sm:text-base font-display font-semibold tracking-wide flex items-center gap-2 ${O?"text-zinc-900":"text-white"}`,children:["Focus Audio Sanctuary",f.jsx("span",{className:`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border ${H==="youtube"?O?"bg-red-50 text-red-700 border-red-200":"bg-red-500/15 text-red-300 border-red-500/30":O?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-emerald-500/15 text-emerald-300 border-emerald-500/30"}`,children:H==="youtube"?"YouTube Online • Infinite Audio":"Web Audio • Offline"})]}),f.jsx("p",{className:`text-xs font-sans mt-0.5 ${O?"text-zinc-500":"text-zinc-400"}`,children:H==="youtube"?"Paste any YouTube video or playlist link or choose curated study streams":"Procedurally synthesized ambient soundscapes. Zero network required."})]})]}),f.jsx("button",{type:"button",onClick:e,className:`w-8 h-8 rounded-xl flex items-center justify-center transition-colors cursor-pointer border ${O?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600 border-zinc-200":"bg-white/[0.05] hover:bg-white/[0.12] text-zinc-400 hover:text-white border-white/[0.08]"}`,"aria-label":"Close sound sanctuary",children:f.jsx(Er,{className:"w-4 h-4"})})]}),f.jsxs("div",{className:`flex items-center gap-2 px-6 pt-3 border-b shrink-0 ${O?"border-zinc-200 bg-zinc-50/50":"border-white/[0.06] bg-black/20"}`,children:[f.jsxs("button",{type:"button",onClick:()=>$("youtube"),className:`flex items-center gap-2 px-4 py-2.5 text-xs font-display font-semibold border-b-2 transition-all cursor-pointer ${H==="youtube"?O?"border-red-600 text-red-700":"border-red-500 text-white":O?"border-transparent text-zinc-500 hover:text-zinc-900":"border-transparent text-zinc-400 hover:text-zinc-200"}`,children:[f.jsx(lo,{className:"w-4 h-4 text-red-500"}),f.jsx("span",{children:"YouTube Audio & Playlists"})]}),f.jsxs("button",{type:"button",onClick:()=>$("ambient"),className:`flex items-center gap-2 px-4 py-2.5 text-xs font-display font-semibold border-b-2 transition-all cursor-pointer ${H==="ambient"?O?"border-violet-600 text-violet-700":"border-violet-400 text-white":O?"border-transparent text-zinc-500 hover:text-zinc-900":"border-transparent text-zinc-400 hover:text-zinc-200"}`,children:[f.jsx(o0,{className:"w-4 h-4 text-violet-500"}),f.jsx("span",{children:"Procedural Soundscapes (Offline)"})]})]}),H==="youtube"&&f.jsxs("div",{className:"flex-1 overflow-y-auto p-5 sm:p-6 space-y-5 animate-fadeIn",children:[f.jsxs("form",{onSubmit:Pe,className:"space-y-2",children:[f.jsxs("div",{className:"flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold",children:[f.jsx("span",{className:O?"text-zinc-800":"text-zinc-300",children:"Play YouTube Link or Playlist"}),f.jsx("span",{className:`text-[10px] font-sans font-normal ${O?"text-zinc-500":"text-zinc-400"}`,children:"Supports videos, live streams & playlists"})]}),f.jsxs("div",{className:"flex flex-col sm:flex-row gap-2",children:[f.jsx("input",{type:"text",placeholder:"Paste YouTube link (e.g. https://www.youtube.com/watch?v=... or playlist?list=...)",value:j,onChange:Ee=>{ce(Ee.target.value),Y&&G(null)},className:`flex-1 px-3.5 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-2 ${O?"bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:ring-red-500/20 focus:border-red-500":"bg-white/[0.04] border-white/[0.1] text-white placeholder-zinc-500 focus:ring-red-400/30 focus:border-red-400"}`}),f.jsxs("button",{type:"submit",className:"px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-display font-semibold flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer shrink-0",children:[f.jsx(Ql,{className:"w-4 h-4"}),f.jsx("span",{children:"Load & Play"})]})]}),Y&&f.jsxs("div",{className:"flex items-center gap-2 p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-sans",children:[f.jsx(og,{className:"w-4 h-4 shrink-0"}),f.jsx("span",{children:Y})]}),P&&f.jsxs("div",{className:"flex items-center gap-2 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-sans",children:[f.jsx(Es,{className:"w-4 h-4 shrink-0"}),f.jsx("span",{children:P})]})]}),w&&f.jsxs("div",{className:`p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${O?"bg-red-50/70 border-red-200 text-zinc-900 shadow-sm":"bg-red-950/20 border-red-500/30 text-white"}`,children:[f.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[f.jsxs("div",{className:"w-12 h-12 rounded-xl overflow-hidden bg-black/40 shrink-0 border border-white/10 relative",children:[f.jsx("img",{src:w.thumbnailUrl||ec[0].thumbnailUrl,alt:"",className:"w-full h-full object-cover"}),_&&f.jsx("div",{className:"absolute inset-0 bg-black/35 flex items-center justify-center",children:f.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"})})]}),f.jsxs("div",{className:"min-w-0",children:[f.jsx("div",{className:"flex items-center gap-1.5",children:f.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-red-600 font-bold",children:w.type==="playlist"?"PLAYLIST":"NOW STREAMING"})}),f.jsx("h3",{className:`text-xs sm:text-sm font-display font-semibold truncate ${O?"text-zinc-900":"text-white"}`,children:w.title}),f.jsx("p",{className:`text-[11px] font-sans truncate ${O?"text-zinc-600":"text-zinc-400"}`,children:w.channel||"YouTube"})]})]}),f.jsxs("div",{className:"flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end",children:[w.type==="playlist"&&f.jsxs(f.Fragment,{children:[f.jsx("button",{type:"button",onClick:M,className:`p-2 rounded-xl border transition-colors cursor-pointer ${O?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-white"}`,title:"Previous Track in Playlist",children:f.jsx(gf,{className:"w-3.5 h-3.5"})}),f.jsx("button",{type:"button",onClick:L,className:`p-2 rounded-xl border transition-colors cursor-pointer ${O?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-white"}`,title:"Next Track in Playlist",children:f.jsx(uc,{className:"w-3.5 h-3.5"})})]}),f.jsxs("button",{type:"button",onClick:()=>{try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}},className:"px-2.5 py-1.5 rounded-xl border border-emerald-500/40 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-sans font-bold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer",title:"Force Unmute & Max Volume",children:[f.jsx(xf,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Unmute"})]}),f.jsxs("button",{type:"button",onClick:()=>R(!b),className:`px-3 py-1.5 rounded-xl border text-xs font-sans flex items-center gap-1.5 transition-colors cursor-pointer ${b?"bg-red-600 text-white border-red-600 font-medium":O?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-zinc-300"}`,title:"Toggle Floating Video Preview",children:[f.jsx(UM,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:b?"Hide Video":"View Video"})]})]})]}),f.jsxs("div",{className:"space-y-2.5",children:[f.jsxs("div",{className:`flex items-center gap-2 text-xs font-display uppercase tracking-wider font-semibold ${O?"text-zinc-800":"text-zinc-300"}`,children:[f.jsx(Es,{className:"w-3.5 h-3.5 text-amber-500"}),f.jsx("span",{children:"Curated Focus & Lo-Fi Streams"})]}),f.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:ec.map(Ee=>{const Fe=(w==null?void 0:w.id)===Ee.id||(w==null?void 0:w.videoId)===Ee.videoId&&Ee.videoId,Ge=Fe&&_;return f.jsxs("button",{type:"button",onClick:()=>{Ge?D():z(Ee)},className:`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${Fe?O?"bg-red-50 border-red-500 ring-2 ring-red-500/20 shadow-sm":"bg-red-500/15 border-red-400 shadow-[0_0_20px_rgba(239,68,68,0.2)]":O?"bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90 text-zinc-900":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]"}`,children:[f.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[f.jsx("div",{className:"w-9 h-9 rounded-xl overflow-hidden bg-black/40 shrink-0 border border-white/10",children:f.jsx("img",{src:Ee.thumbnailUrl,alt:"",onError:ct=>{ct.currentTarget.src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=400&auto=format&fit=crop"},className:"w-full h-full object-cover"})}),f.jsxs("div",{className:"min-w-0",children:[f.jsx("div",{className:`text-xs font-display font-semibold truncate ${Fe?O?"text-red-950 font-bold":"text-white":O?"text-zinc-900":"text-zinc-200"}`,children:Ee.title}),f.jsx("div",{className:`text-[10px] font-sans truncate ${O?"text-zinc-500":"text-zinc-400"}`,children:Ee.channel})]})]}),f.jsx("div",{className:`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${Ge?"bg-red-600 text-white shadow-sm":O?"bg-zinc-200 text-zinc-700":"bg-white/10 text-white"}`,children:Ge?f.jsx(tr,{className:"w-3.5 h-3.5 fill-current"}):f.jsx(Gi,{className:"w-3.5 h-3.5 ml-0.5 fill-current"})})]},Ee.id)})})]}),y.filter(Ee=>!Ee.isCurated).length>0&&f.jsxs("div",{className:"space-y-2.5",children:[f.jsx("div",{className:`flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold ${O?"text-zinc-800":"text-zinc-300"}`,children:f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(s0,{className:"w-3.5 h-3.5 text-red-500"}),f.jsx("span",{children:"My Saved YouTube Library"})]})}),f.jsx("div",{className:"space-y-2",children:y.filter(Ee=>!Ee.isCurated).map(Ee=>{const Fe=(w==null?void 0:w.id)===Ee.id,Ge=Fe&&_;return f.jsxs("div",{className:`p-3 rounded-2xl border flex items-center justify-between gap-3 transition-all ${Fe?O?"bg-red-50 border-red-500 ring-2 ring-red-500/20":"bg-red-500/15 border-red-400":O?"bg-zinc-50 border-zinc-200":"bg-white/[0.03] border-white/[0.06]"}`,children:[f.jsxs("div",{onClick:()=>z(Ee),className:"flex items-center gap-3 min-w-0 flex-1 cursor-pointer",children:[f.jsx("div",{className:`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${Ee.type==="playlist"?"bg-purple-600/20 text-purple-400":"bg-red-600/20 text-red-400"}`,children:Ee.type==="playlist"?f.jsx(s0,{className:"w-4 h-4"}):f.jsx(lo,{className:"w-4 h-4"})}),f.jsxs("div",{className:"min-w-0",children:[f.jsx("div",{className:`text-xs font-display font-semibold truncate ${O?"text-zinc-900":"text-white"}`,children:Ee.title}),f.jsxs("div",{className:`text-[10px] font-sans truncate ${O?"text-zinc-500":"text-zinc-400"}`,children:[Ee.type==="playlist"?"Playlist":"Single Stream"," • ",Ee.url]})]})]}),f.jsxs("div",{className:"flex items-center gap-1.5 shrink-0",children:[f.jsx("button",{type:"button",onClick:()=>{Ge?D():z(Ee)},className:`p-2 rounded-xl transition-colors cursor-pointer ${Ge?"bg-red-600 text-white":O?"bg-zinc-200 text-zinc-800 hover:bg-zinc-300":"bg-white/10 text-white hover:bg-white/20"}`,children:Ge?f.jsx(tr,{className:"w-3.5 h-3.5 fill-current"}):f.jsx(Gi,{className:"w-3.5 h-3.5 fill-current"})}),f.jsx("button",{type:"button",onClick:()=>X(Ee.id),className:`p-2 rounded-xl transition-colors cursor-pointer ${O?"text-zinc-400 hover:text-red-600":"text-zinc-500 hover:text-red-400"}`,title:"Remove from library",children:f.jsx(oo,{className:"w-3.5 h-3.5"})})]})]},Ee.id)})})]})]}),H==="ambient"&&f.jsx("div",{className:"flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 animate-fadeIn",children:f.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3.5",children:da.map(Ee=>{const Fe=l===Ee.id,Ge=Fe&&o;return f.jsxs("div",{onClick:()=>{Ge?m():d(Ee.id)},className:`relative p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between select-none group ${Fe?O?"bg-violet-50 border-violet-500 ring-2 ring-violet-500/20 shadow-sm":"bg-violet-950/35 border-violet-500/50 shadow-[0_0_25px_rgba(168,85,247,0.18)]":O?"bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90 text-zinc-900":"bg-white/[0.025] hover:bg-white/[0.05] border-white/[0.08] hover:border-white/[0.18]"}`,children:[f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center justify-between mb-2",children:[f.jsx("span",{className:`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md border ${O?"bg-zinc-200/60 text-zinc-700 border-zinc-300":"text-zinc-400 bg-white/[0.05] border-white/[0.06]"}`,children:Ee.category}),f.jsx("div",{className:`w-7 h-7 rounded-full flex items-center justify-center transition-all ${Ge?"bg-violet-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.6)]":O?"bg-zinc-200 text-zinc-700 group-hover:bg-zinc-300":"bg-white/[0.06] text-zinc-300 group-hover:bg-white/[0.15] group-hover:text-white"}`,children:Ge?f.jsx(tr,{className:"w-3.5 h-3.5 fill-current"}):f.jsx(Gi,{className:"w-3.5 h-3.5 ml-0.5 fill-current"})})]}),f.jsx("h3",{className:`text-sm font-display font-semibold tracking-wide transition-colors ${O?"text-zinc-900":"text-white"}`,children:Ee.title}),f.jsx("p",{className:`text-xs font-sans mt-1 leading-snug line-clamp-2 ${O?"text-zinc-600":"text-zinc-400"}`,children:Ee.tagline})]}),f.jsxs("div",{className:`mt-3 pt-2.5 border-t flex items-center justify-between text-[10px] font-mono ${O?"border-zinc-200 text-zinc-500":"border-white/[0.06] text-zinc-400"}`,children:[f.jsx("span",{className:"truncate pr-2",children:Ee.frequency}),Ge&&f.jsxs("span",{className:"flex items-center gap-1 text-emerald-500 font-semibold shrink-0",children:[f.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"}),"PLAYING"]})]})]},Ee.id)})})}),f.jsxs("div",{className:`px-5 py-3 border-t flex flex-wrap items-center justify-between gap-3 shrink-0 ${O?"border-zinc-200 bg-zinc-50/60":"border-white/[0.06] bg-white/[0.01]"}`,children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(oc,{className:`w-4 h-4 ${O?"text-zinc-600":"text-violet-400"}`}),f.jsx("span",{className:`text-xs font-display font-medium ${O?"text-zinc-800":"text-zinc-300"}`,children:"Auto-Stop Timer:"}),xe!==null&&f.jsxs("span",{className:`text-xs font-mono font-bold px-2 py-0.5 rounded-md border ${O?"bg-amber-100 text-amber-900 border-amber-300":"text-amber-300 bg-amber-500/15 border-amber-500/30"}`,children:[ye(xe)," left"]})]}),f.jsx("div",{className:"flex items-center gap-1.5",children:[{label:"Off",val:null},{label:"15m",val:15},{label:"25m",val:25},{label:"45m",val:45},{label:"60m",val:60}].map(Ee=>f.jsx("button",{type:"button",onClick:()=>ie(Ee.val),className:`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${Te===Ee.val?O?"bg-zinc-900 text-white font-bold shadow-sm":"bg-violet-600 text-white font-bold shadow-sm":O?"bg-zinc-200/80 text-zinc-700 hover:bg-zinc-300":"bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08]"}`,children:Ee.label},Ee.label))})]}),f.jsxs("div",{className:`p-4 sm:p-5 border-t flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 ${O?"border-zinc-200 bg-zinc-100/90":"border-white/[0.08] bg-[#070914]/90 backdrop-blur-xl"}`,children:[f.jsxs("div",{className:"flex items-center gap-3 w-full sm:w-auto",children:[f.jsx("div",{className:`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${H==="youtube"?O?"bg-red-50 border-red-200 text-red-600":"bg-red-500/20 border-red-400/40 text-red-300":O?"bg-violet-50 border-violet-200 text-violet-700":"bg-violet-600/30 border-violet-400/40 text-violet-200"}`,children:H==="youtube"?f.jsx(lo,{className:`w-5 h-5 ${_?"animate-pulse text-red-500":"text-zinc-400"}`}):f.jsx(o0,{className:`w-5 h-5 ${o?"text-violet-500 animate-pulse":"text-zinc-400"}`})}),f.jsxs("div",{className:"min-w-0 flex-1",children:[f.jsx("p",{className:`text-xs font-display font-medium truncate ${O?"text-zinc-900":"text-white"}`,children:st}),f.jsxs("div",{className:"flex items-center gap-2 mt-0.5",children:[f.jsx(Yg,{isPlaying:je,color:H==="youtube"?"#ef4444":O?"#7c3aed":ge.accentColor,className:"w-16 h-4"}),f.jsx("span",{className:`text-[10px] font-mono ${O?"text-zinc-500":"text-zinc-400"}`,children:je?H==="youtube"?"Streaming YouTube...":"Synthesizing...":"Audio Paused"})]})]})]}),f.jsxs("div",{className:"flex items-center gap-4 w-full sm:w-auto justify-end",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("button",{type:"button",onClick:H==="youtube"?Z:v,className:`transition-colors cursor-pointer ${O?"text-zinc-600 hover:text-black":"text-zinc-400 hover:text-white"}`,title:"Toggle Mute",children:(H==="youtube"?A:p)?f.jsx($g,{className:"w-4 h-4 text-red-500"}):f.jsx(xf,{className:"w-4 h-4"})}),f.jsx("input",{type:"range",min:"0",max:H==="youtube"?100:1,step:H==="youtube"?1:.01,value:H==="youtube"?A?0:E:p?0:u,onChange:Ee=>{const Fe=parseFloat(Ee.target.value);if(H==="youtube"){N(Fe),A&&Z();try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}}else g(Fe)},className:"w-20 sm:w-24 h-1.5 bg-zinc-300 rounded-lg appearance-none cursor-pointer accent-red-600","aria-label":"Volume slider"}),f.jsx("span",{className:`text-[10px] font-mono w-8 tabular-nums ${O?"text-zinc-600":"text-zinc-400"}`,children:H==="youtube"?`${A?0:Math.round(E)}%`:`${p?0:Math.round(u*100)}%`})]}),f.jsx("button",{type:"button",onClick:()=>{H==="youtube"?D():o?m():d(l)},className:`px-5 py-2.5 rounded-xl text-white text-xs font-display font-semibold tracking-wider uppercase flex items-center gap-2 shadow-md transition-all cursor-pointer ${H==="youtube"?"bg-red-600 hover:bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.35)]":"bg-violet-600 hover:bg-violet-500 shadow-[0_0_20px_rgba(147,51,234,0.35)]"}`,children:je?f.jsxs(f.Fragment,{children:[f.jsx(tr,{className:"w-3.5 h-3.5 fill-current"}),f.jsx("span",{children:"Pause"})]}):f.jsxs(f.Fragment,{children:[f.jsx(Gi,{className:"w-3.5 h-3.5 fill-current"}),f.jsx("span",{children:"Play"})]})})]})]})]})]})},GM=({isOpen:s,onClose:e})=>{const{profile:t,updateProfile:r,appTheme:o,setStudySubject:l,lastActiveDate:u,resetDayProgress:p,factoryReset:d}=is(),m=o==="light",[g,v]=be.useState(t.name||"Azan"),[_,w]=be.useState(t.motto||"Remember, you are here for you."),[E,A]=be.useState(t.defaultFocusTopic||"Engineering"),[y,b]=be.useState(t.defaultFocusMode||"Deep Work"),[R,z]=be.useState(!1),[D,F]=be.useState(null);if(be.useEffect(()=>{v(t.name||"Azan"),w(t.motto||"Remember, you are here for you."),A(t.defaultFocusTopic||"Engineering"),b(t.defaultFocusMode||"Deep Work")},[t,s]),be.useEffect(()=>{const X=O=>{O.key==="Escape"&&s&&e()};return window.addEventListener("keydown",X),()=>window.removeEventListener("keydown",X)},[s,e]),!s)return null;const L=X=>{X.preventDefault();const O=g.trim()||"Azan",H=_.trim()||"Remember, you are here for you.",$=E.trim()||"Engineering",j=y.trim()||"Deep Work";r({name:O,motto:H,defaultFocusTopic:$,defaultFocusMode:j}),l($),z(!0),setTimeout(()=>{z(!1),e()},500)},M=()=>{v("Azan"),w("Remember, you are here for you."),A("Engineering"),b("Deep Work"),r({name:"Azan",motto:"Remember, you are here for you.",defaultFocusTopic:"Engineering",defaultFocusMode:"Deep Work"}),l("Engineering")},N=()=>{window.confirm("Start a fresh day? This will uncheck today's tasks & habits, reset hydration to 0%, and reset focus timer.")&&(p(),F("Today's progress has been reset!"),setTimeout(()=>F(null),3e3))},Z=()=>{window.confirm("WARNING: Are you sure you want to perform a factory reset? All saved tasks, habits, focus history, and settings will be permanently wiped and restored to default.")&&(d(),F("All app data restored to factory defaults."),setTimeout(()=>{F(null),e()},1500))},B=()=>{const X=new Date().getHours();return X>=5&&X<12?"Good morning":X>=12&&X<17?"Good afternoon":X>=17&&X<22?"Good evening":"Late night focus"};return f.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-fadeIn select-none ${m?"bg-black/35":"bg-black/80"}`,children:[f.jsx("div",{className:"fixed inset-0",onClick:e,"aria-hidden":"true"}),f.jsxs("div",{role:"dialog","aria-modal":"true","aria-labelledby":"profile-modal-title",className:`relative w-full max-w-lg overflow-hidden rounded-3xl border shadow-2xl flex flex-col z-10 ${m?"bg-white/95 border-zinc-200 text-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)]":"cosmic-card border-white/[0.14] text-white shadow-2xl"}`,children:[f.jsxs("div",{className:`flex items-center justify-between p-5 pb-3 border-b shrink-0 ${m?"border-zinc-200":"border-white/[0.08]"}`,children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:`w-8 h-8 rounded-xl border flex items-center justify-center ${m?"bg-amber-50 border-amber-200 text-amber-700":"bg-amber-500/20 border-amber-400/30 text-amber-300"}`,children:f.jsx(Vg,{className:"w-4 h-4"})}),f.jsxs("div",{children:[f.jsx("h2",{id:"profile-modal-title",className:`text-sm font-display uppercase tracking-widest font-bold ${m?"text-zinc-900":"text-white"}`,children:"Personal Sanctuary Profile"}),f.jsx("p",{className:`text-[11px] font-sans ${m?"text-zinc-500":"text-zinc-400"}`,children:"Tailor your name, daily motto & focus targets"})]})]}),f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx("button",{type:"button",onClick:M,"aria-label":"Reset profile to defaults",title:"Reset to defaults",className:`p-2 rounded-xl transition-colors cursor-pointer ${m?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white"}`,children:f.jsx(wr,{className:"w-3.5 h-3.5"})}),f.jsx("button",{type:"button",onClick:e,"aria-label":"Close Profile Modal",className:`p-2 rounded-xl transition-colors cursor-pointer ${m?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white"}`,children:f.jsx(Er,{className:"w-4 h-4"})})]})]}),f.jsxs("form",{onSubmit:L,className:"p-6 space-y-4",children:[f.jsxs("div",{className:`p-4 rounded-2xl border text-center space-y-1 transition-all ${m?"bg-zinc-50 border-zinc-200 text-zinc-800":"bg-white/[0.03] border-white/[0.08] text-zinc-200"}`,children:[f.jsx("span",{className:`text-[10px] font-mono uppercase tracking-widest ${m?"text-zinc-500":"text-zinc-400"}`,children:"Live Greeting Preview"}),f.jsxs("p",{className:"text-xs sm:text-sm font-sans leading-relaxed",children:[B(),","," ",f.jsx("strong",{className:m?"text-zinc-950":"text-white",children:g.trim()||"Azan"}),". •"," ",f.jsxs("span",{className:`italic ${m?"text-zinc-700 font-medium":"text-zinc-300"}`,children:["“",_.trim()||"Remember, you are here for you.","”"]})]})]}),f.jsxs("div",{className:"space-y-1.5",children:[f.jsxs("label",{className:`text-xs font-semibold flex items-center justify-between ${m?"text-zinc-800":"text-zinc-200"}`,children:[f.jsxs("span",{className:"flex items-center gap-1.5",children:[f.jsx(RM,{className:"w-3.5 h-3.5 text-amber-500"}),f.jsx("span",{children:"Your Name"})]}),f.jsx("span",{className:`text-[10px] font-normal ${m?"text-zinc-500":"text-zinc-400"}`,children:"Used in greetings & daily focus"})]}),f.jsx("input",{type:"text",value:g,onChange:X=>v(X.target.value),placeholder:"e.g. Azan",className:"w-full cosmic-input rounded-xl px-3.5 py-2.5 text-xs font-medium"})]}),f.jsxs("div",{className:"space-y-1.5",children:[f.jsxs("label",{className:`text-xs font-semibold flex items-center justify-between ${m?"text-zinc-800":"text-zinc-200"}`,children:[f.jsxs("span",{className:"flex items-center gap-1.5",children:[f.jsx(NM,{className:"w-3.5 h-3.5 text-violet-400"}),f.jsx("span",{children:"Daily Mantra / Motto"})]}),f.jsx("span",{className:`text-[10px] font-normal ${m?"text-zinc-500":"text-zinc-400"}`,children:"Displayed on your wallpaper"})]}),f.jsx("input",{type:"text",value:_,onChange:X=>w(X.target.value),placeholder:"e.g. Remember, you are here for you.",className:"w-full cosmic-input rounded-xl px-3.5 py-2.5 text-xs font-medium"})]}),f.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-1",children:[f.jsxs("div",{className:"space-y-1.5",children:[f.jsxs("label",{className:`text-xs font-semibold flex items-center gap-1.5 ${m?"text-zinc-800":"text-zinc-200"}`,children:[f.jsx(IM,{className:"w-3.5 h-3.5 text-emerald-400"}),f.jsx("span",{children:"Primary Focus Topic"})]}),f.jsx("input",{type:"text",value:E,onChange:X=>A(X.target.value),placeholder:"e.g. Engineering",className:"w-full cosmic-input rounded-xl px-3.5 py-2 text-xs"})]}),f.jsxs("div",{className:"space-y-1.5",children:[f.jsxs("label",{className:`text-xs font-semibold flex items-center gap-1.5 ${m?"text-zinc-800":"text-zinc-200"}`,children:[f.jsx(mg,{className:"w-3.5 h-3.5 text-amber-500"}),f.jsx("span",{children:"Default Focus Mode"})]}),f.jsx("input",{type:"text",value:y,onChange:X=>b(X.target.value),placeholder:"e.g. Deep Work",className:"w-full cosmic-input rounded-xl px-3.5 py-2 text-xs"})]})]}),f.jsxs("div",{className:"pt-2",children:[f.jsx("span",{className:`text-[10px] font-mono uppercase tracking-wider block mb-1.5 ${m?"text-zinc-500":"text-zinc-400"}`,children:"Quick Mantras"}),f.jsx("div",{className:"flex flex-wrap gap-1.5",children:["Remember, you are here for you.","Discipline equals true freedom.","Deep focus over scattered noise.","Build with relentless craft."].map(X=>f.jsxs("button",{type:"button",onClick:()=>w(X),className:`text-[11px] px-2.5 py-1 rounded-lg border transition-all text-left cursor-pointer ${_===X?m?"bg-violet-100 border-violet-300 text-violet-900 font-medium":"bg-violet-600/30 border-violet-400/50 text-violet-200 font-medium":m?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300"}`,children:["“",X,"”"]},X))})]}),f.jsxs("div",{className:`p-3.5 rounded-2xl border space-y-2.5 ${m?"bg-zinc-50 border-zinc-200":"bg-white/[0.02] border-white/[0.08]"}`,children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx(MM,{className:`w-3.5 h-3.5 ${m?"text-violet-700":"text-violet-400"}`}),f.jsx("span",{className:`text-xs font-semibold ${m?"text-zinc-800":"text-zinc-200"}`,children:"Daily Rollover & Data Control"})]}),f.jsxs("span",{className:`text-[10px] font-mono ${m?"text-zinc-500":"text-zinc-400"}`,children:["Date: ",u]})]}),D&&f.jsxs("div",{className:"p-2 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs flex items-center gap-2",children:[f.jsx(Mr,{className:"w-3.5 h-3.5 shrink-0"}),f.jsx("span",{children:D})]}),f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1",children:[f.jsxs("button",{type:"button",onClick:N,className:`px-3 py-2 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${m?"bg-white hover:bg-zinc-100 text-zinc-800 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200 border-white/[0.10]"}`,title:"Uncheck today's tasks & habits, reset hydration",children:[f.jsx(wr,{className:"w-3.5 h-3.5 text-violet-400"}),f.jsx("span",{children:"Start Fresh Day"})]}),f.jsxs("button",{type:"button",onClick:Z,className:`px-3 py-2 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${m?"bg-rose-50 hover:bg-rose-100 text-rose-700 border-rose-200":"bg-rose-950/20 hover:bg-rose-900/40 text-rose-300 border-rose-500/20 hover:border-rose-500/40"}`,title:"Wipe data and restore factory defaults",children:[f.jsx(oo,{className:"w-3.5 h-3.5 text-rose-400"}),f.jsx("span",{children:"Factory Reset"})]})]})]}),f.jsxs("div",{className:"pt-4 flex items-center justify-end gap-2.5",children:[f.jsx("button",{type:"button",onClick:e,className:`px-4 py-2.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${m?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300"}`,children:"Cancel"}),f.jsx("button",{type:"submit",className:`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all cursor-pointer ${R?"bg-emerald-500 text-white":m?"bg-zinc-900 hover:bg-zinc-800 text-white":"bg-violet-600 hover:bg-violet-500 text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]"}`,children:R?f.jsxs(f.Fragment,{children:[f.jsx(Mr,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Saved!"})]}):f.jsxs(f.Fragment,{children:[f.jsx(Es,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Save Profile"})]})})]})]})]})]})},VM=({routines:s,activeBlock:e,activeMinutesLeft:t,onSelectBlock:r,isLight:o=!1})=>{const[l,u]=be.useState(50),[p,d]=be.useState("12:00");be.useEffect(()=>{const g=()=>{const _=new Date,w=_.getHours(),E=_.getMinutes(),A=(w+E/60)/24*100;u(A),d(`${w.toString().padStart(2,"0")}:${E.toString().padStart(2,"0")}`)};g();const v=setInterval(g,1e4);return()=>clearInterval(v)},[]);const m=g=>{if(g<=0)return"Ending soon";const v=Math.floor(g/60),_=g%60;return v===0?`${_}m remaining`:`${v}h ${_}m remaining`};return f.jsxs("div",{className:"w-full flex flex-col gap-2.5 select-none pt-1",children:[f.jsxs("div",{className:"flex items-center justify-between text-[11px] font-sans",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${e?"bg-amber-400":"bg-zinc-500"}`}),f.jsx("span",{className:`font-medium tracking-tight ${o?"text-zinc-900":"text-zinc-200"}`,children:e?e.title:"Free Rhythm"}),e&&t>0&&f.jsxs("span",{className:`text-[10px] font-mono tabular-nums ${o?"text-zinc-500":"text-zinc-400"}`,children:["· ",m(t)]})]}),f.jsx("span",{className:`font-mono text-[10px] tabular-nums tracking-wider ${o?"text-zinc-500":"text-zinc-400"}`,children:p})]}),f.jsxs("div",{className:"relative w-full py-1",children:[f.jsxs("div",{className:`relative h-2 rounded-full overflow-hidden transition-all ${o?"bg-zinc-200":"bg-white/[0.08]"}`,children:[f.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-zinc-700/30 via-amber-500/20 via-sky-500/20 via-indigo-500/20 to-zinc-700/30"}),s.map(g=>{let v=g.startHour,_=g.endHour;if(v===void 0||_===void 0){const y=g.timeRange.split(/[-–—to]/i);v=Kr(y[0],0),_=Kr(y[1],24)}const w=(e==null?void 0:e.id)===g.id,E=Math.min(24,Math.max(0,v))/24*100,A=(Math.min(24,Math.max(0,_))-Math.min(24,Math.max(0,v)))/24*100;return f.jsx("div",{onClick:()=>r&&r(g),className:`absolute top-0 bottom-0 transition-opacity cursor-pointer ${w?"bg-amber-400/50 shadow-sm z-10":"bg-white/10 hover:bg-white/20"}`,style:{left:`${E}%`,width:`${Math.max(2,A)}%`,borderLeft:"1px solid rgba(255,255,255,0.15)"},title:`${g.title} (${g.timeRange})`},g.id)})]}),f.jsx("div",{className:"absolute top-0 bottom-0 pointer-events-none transition-all duration-1000 ease-linear flex flex-col items-center justify-center -translate-x-1/2",style:{left:`${Math.min(99,Math.max(1,l))}%`},children:f.jsx("div",{className:"w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] border border-black/40"})})]}),f.jsxs("div",{className:`flex justify-between text-[9px] font-mono tabular-nums px-0.5 ${o?"text-zinc-500":"text-zinc-400"}`,children:[f.jsx("span",{children:"06:00"}),f.jsx("span",{children:"12:00"}),f.jsx("span",{children:"18:00"}),f.jsx("span",{children:"24:00"})]})]})},WM=()=>{const{profile:s,tasks:e,toggleTask:t,addTask:r,deleteTask:o,habits:l,toggleHabit:u,addHabit:p,routines:d,addRoutineBlock:m,deleteRoutineBlock:g,resetRoutines:v,activeRoutineBlock:_,activeRoutineMinutesLeft:w,studySeconds:E,isStudyActive:A,studySubject:y,setStudySubject:b,toggleStudyTimer:R,resetStudyTimer:z,studySessions:D,logManualStudyTime:F,deleteStudySession:L,pomodoroPhase:M,pomodoroSecondsLeft:N,pomodoroTotalSeconds:Z,pomodoroSettings:B,setPomodoroSettings:X,startPomodoro:O,togglePomodoro:H,resetPomodoro:$,skipPomodoroPhase:j,togglePomodoroDisplayMode:ce,hydration:te,setHydration:q,sleepHours:Y,setSleep:G,dailyRating:P,setDailyRating:K,lastActiveDate:Te,resetDayProgress:ie,isHUDHidden:xe,setIsHUDHidden:Me,wallpaperSettings:ge,audioSource:ye,isAudioPlaying:Pe,activeSoundscapeId:st,playSoundscape:je,stopSoundscape:Ee,isYouTubePlaying:Fe,activeYouTubeItem:Ge,toggleYouTubePlay:ct,appTheme:xt,toggleAppTheme:vt}=is(),me=xt==="light",[Xt,It]=be.useState(!1),[Zt,Wt]=be.useState(!1),[mn,Q]=be.useState(!1),[Jt,Et]=be.useState(!1),[St,de]=be.useState("none"),[bt,Je]=be.useState("pomodoro"),[nt,I]=be.useState("12"),[T,ae]=be.useState("00"),[Re,we]=be.useState("00"),[Ue,Be]=be.useState(0),[ve,Se]=be.useState("PM"),[_e,k]=be.useState(""),[oe,le]=be.useState(322),[Ae,Ne]=be.useState(80),De=`${nt}:${T}:${Re}`,[$e,dt]=be.useState(""),[Ce,Xe]=be.useState(s.defaultFocusTopic||"Engineering"),[at,Oe]=be.useState(s.defaultFocusMode||"Deep Work"),[ut,pt]=be.useState("60"),[nn,Dn]=be.useState(""),xn=re=>{F(re,Ce||y||"Engineering",at||"Manual Entry");const Tt=re>=60?`${(re/60).toFixed(1)}h`:`${re}m`;Dn(`+${Tt} recorded to ${Ce||y}!`),setTimeout(()=>Dn(""),3e3)},mt=re=>{re.preventDefault();const Tt=parseFloat(ut);!isNaN(Tt)&&Tt>0&&(xn(Tt),pt(""))},[Ft,_t]=be.useState(!1),[Bt,Kt]=be.useState(""),[Zn,$n]=be.useState(""),[Ln,xi]=be.useState(""),Qt=M==="focus"||M==="break"||M==="paused",Ci=Math.floor(N/60),rs=N%60,Gt=Ci.toString().padStart(2,"0"),vi=rs.toString().padStart(2,"0"),Ai=Z>0?1-N/Z:0,Ar=Qt?Ai*360:Ue*360,Jn=Qt&&B.displayMode==="numbers",Rr=Jn?Gt:nt,S=Jn?vi:T,U=()=>{const re=new Date().getHours();return re>=5&&re<12?"Good morning":re>=12&&re<17?"Good afternoon":re>=17&&re<22?"Good evening":"Late night focus"};be.useEffect(()=>{const re=()=>{const Ke=new Date,Xn=Ke.getHours(),hn=Ke.getMinutes(),Ri=Ke.getSeconds(),oi=Xn>=12?"PM":"AM",li=ge.clockFormat==="24h",Nt=li?Xn.toString().padStart(2,"0"):(Xn%12||12).toString().padStart(2,"0"),ln=hn.toString().padStart(2,"0"),Tn=Ri.toString().padStart(2,"0");I(Nt),ae(ln),we(Tn),Be(Ri/60),Se(li?"":oi);const Ot=new Date(Ke.getFullYear(),0,0),Yt=Ke.getTime()-Ot.getTime(),vn=1e3*60*60*24,$i=Math.floor(Yt/vn);le($i);const ss=Math.round((Xn*60+hn)/1440*100);Ne(ss);const Xi=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],mc=["January","February","March","April","May","June","July","August","September","October","November","December"];k(`${Xi[Ke.getDay()]}, ${mc[Ke.getMonth()]} ${Ke.getDate()}, ${Ke.getFullYear()}`)};re();const Tt=setInterval(re,1e3);return()=>clearInterval(Tt)},[ge.clockFormat,ge.showSeconds,ge.clockDivider]);const W=ge.clockFontStyle==="serif"?"font-serif font-bold tracking-tight":ge.clockFontStyle==="mono"?"font-mono font-bold tracking-tight":ge.clockFontStyle==="minimal"?"font-sans font-light tracking-[0.06em]":"font-display font-extrabold tracking-tight",ee=ge.clockSize==="compact"?"text-6xl sm:text-7xl md:text-8xl lg:text-[110px]":ge.clockSize==="heroic"?"text-7xl sm:text-9xl md:text-[11rem] lg:text-[160px]":"text-7xl sm:text-8xl md:text-9xl lg:text-[136px]",ne=ge.clockHalo==="none"?"opacity-0":ge.clockHalo==="subtle"?"bg-[radial-gradient(circle,rgba(139,92,246,0.14)_0%,rgba(139,92,246,0.03)_50%,transparent_70%)]":"bg-[radial-gradient(circle,rgba(139,92,246,0.22)_0%,rgba(139,92,246,0.06)_50%,transparent_75%)]",Le=ge.clockColor==="white"?me?"text-zinc-950 [text-shadow:0_2px_12px_rgba(0,0,0,0.1)]":"text-white [text-shadow:0_8px_32px_rgba(0,0,0,0.85)]":ge.clockColor==="gold"?"text-amber-300 [text-shadow:0_4px_24px_rgba(245,158,11,0.5)]":ge.clockColor==="cyan"?"text-cyan-300 [text-shadow:0_4px_24px_rgba(6,182,212,0.5)]":ge.clockColor==="rose"?"text-rose-300 [text-shadow:0_4px_24px_rgba(244,63,94,0.5)]":me?"text-zinc-900 [text-shadow:0_2px_12px_rgba(200,180,160,0.25)]":"text-white [text-shadow:0_8px_32px_rgba(0,0,0,0.85)]",Ye=ge.clockPosition==="zenith"?"mt-6 sm:mt-12 mb-auto":ge.clockPosition==="bottom"?"mt-auto mb-16 sm:mb-20":"my-auto";be.useEffect(()=>{const re=Tt=>{Tt.key==="Escape"&&(St!=="none"?de("none"):xe?Me(!1):Jt&&Et(!1))};return window.addEventListener("keydown",re),()=>window.removeEventListener("keydown",re)},[St,xe,Jt,Me]);const He=re=>{re.preventDefault(),$e.trim()&&(r($e.trim()),dt(""))},Ve=e.filter(re=>re.completed).length,qe=e.length>0?Math.round(Ve/e.length*100):0,rt=l.filter(re=>re.completed).length,Mt=l.length>0?Math.round(rt/l.length*100):0,et=new Date;et.setDate(et.getDate()-7);const en=+((D||[]).filter(re=>new Date(re.timestamp)>=et).reduce((re,Tt)=>re+Tt.durationSeconds,0)/3600).toFixed(1),jt=Math.min(100,Math.round(en/15*100)),zt=re=>{const Tt=Math.floor(re/60),Ke=re%60;return`${Tt.toString().padStart(2,"0")}:${Ke.toString().padStart(2,"0")}`},rn=da.find(re=>re.id===st)||da[0];return f.jsxs("div",{className:"relative w-screen h-screen max-h-screen overflow-hidden flex flex-col justify-between pt-safe-top pt-8 sm:pt-10 px-4 sm:px-8 pb-safe-bottom pb-6 select-none z-10 animate-fadeIn",children:[f.jsx("h1",{className:"sr-only",children:"FOR ME — Living Wallpaper & Focus Sanctuary"}),f.jsxs("header",{className:`relative flex items-center justify-between w-full min-h-12 shrink-0 z-20 gap-3 transition-opacity duration-300 ${xe?"opacity-0 pointer-events-none":"opacity-100"}`,children:[f.jsxs("button",{type:"button",onClick:()=>Me(!0),className:"flex items-center gap-2.5 cursor-pointer group shrink-0 text-left",title:"Enter Zen Wallpaper Mode",children:[f.jsx("div",{className:`w-8 h-8 rounded-full border flex items-center justify-center text-[11px] font-mono font-medium tracking-tight shadow-sm transition-all ${me?"border-zinc-300/80 bg-white/80 text-zinc-900 group-hover:bg-white group-hover:border-zinc-400":"border-white/15 bg-white/[0.04] text-zinc-200 group-hover:bg-white/[0.1] group-hover:border-white/30"}`,children:"FM"}),f.jsx("span",{className:`font-sans font-bold text-[11px] tracking-[0.22em] uppercase group-hover:opacity-85 transition-opacity ${me?"text-zinc-900":"text-zinc-200"}`,children:"FOR ME"})]}),f.jsx("div",{className:"hidden md:flex absolute left-1/2 -translate-x-1/2 items-center pointer-events-none",children:f.jsxs("div",{className:`pointer-events-auto flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-2xl border text-[11px] font-sans font-medium shadow-sm transition-all ${me?"bg-white/85 border-zinc-200/90 text-zinc-700":"bg-[#090b16]/75 border-white/[0.08] text-zinc-300"}`,children:[f.jsx(Es,{className:"w-3 h-3 text-amber-400"}),f.jsx("span",{children:_e}),_&&f.jsxs(f.Fragment,{children:[f.jsx("span",{className:"opacity-25",children:"•"}),f.jsxs("button",{type:"button",onClick:()=>Et(!0),className:"hover:underline flex items-center gap-1 font-mono text-[10px] text-violet-400 cursor-pointer",title:"Open Daily Routine Protocols & 24h Timeline",children:[f.jsx(LM,{className:"w-3 h-3 text-amber-400"}),f.jsx("span",{children:_.title})]})]})]})}),f.jsxs("nav",{"aria-label":"Wallpaper Quick Controls",className:`flex items-center gap-0.5 p-1 rounded-full backdrop-blur-2xl border transition-all ${me?"bg-white/90 border-zinc-200/90 text-zinc-700 shadow-[0_8px_24px_rgba(0,0,0,0.06)]":"bg-[#090b16]/75 border-white/[0.12] text-zinc-300 shadow-[0_12px_32px_rgba(0,0,0,0.6)]"}`,children:[f.jsx("button",{type:"button",onClick:()=>It(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${me?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Wallpaper Studio (Celestial Objects, Waves & Lighting)","aria-label":"Wallpaper Studio",children:f.jsx(Pg,{className:"w-3.5 h-3.5"})}),f.jsx("button",{type:"button",onClick:()=>Et(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${me?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Daily Routine Protocols","aria-label":"Daily Routine Protocols",children:f.jsx(r0,{className:"w-3.5 h-3.5"})}),f.jsxs("button",{type:"button",onClick:()=>Wt(!0),className:`relative w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${Pe||Fe?me?"text-violet-600 bg-violet-50":"text-violet-300 bg-violet-600/20":me?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Focus Audio Sanctuary (YouTube Streams & Ambient Soundscapes)","aria-label":"Focus Audio Sanctuary",children:[ye==="youtube"&&Fe?f.jsx(lo,{className:"w-3.5 h-3.5 text-red-500 animate-pulse"}):f.jsx(lc,{className:`w-3.5 h-3.5 ${Pe||Fe?"animate-pulse":""}`}),(Pe||Fe)&&f.jsx("span",{className:"absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse"})]}),f.jsx("button",{type:"button",onClick:()=>Q(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${me?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:`Profile & Motto (${s.name})`,"aria-label":"Profile and Daily Mantra",children:f.jsx(Vg,{className:"w-3.5 h-3.5"})}),f.jsx("div",{className:`w-px h-3.5 mx-0.5 ${me?"bg-zinc-200":"bg-white/10"}`}),f.jsx("button",{type:"button",onClick:vt,className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${me?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:`Switch to ${me?"Obsidian Dark":"Creamy Light"} Theme`,"aria-label":"Toggle Light/Dark Theme",children:me?f.jsx(cc,{className:"w-3.5 h-3.5"}):f.jsx(Ug,{className:"w-3.5 h-3.5"})}),f.jsx("button",{type:"button",onClick:()=>Me(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${me?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Zen Mode (Hide all controls)","aria-label":"Enter Zen Mode",children:f.jsx(AM,{className:"w-3.5 h-3.5"})})]})]}),f.jsxs("main",{"aria-label":`Current time ${De}`,className:`${Ye} text-center flex flex-col items-center justify-center relative z-20 py-4 select-none transition-all duration-300`,children:[f.jsx("div",{className:`absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[780px] lg:h-[780px] rounded-full ${ne} pointer-events-none -z-10`}),f.jsxs("div",{className:"relative flex flex-col items-center group",children:[f.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none -z-10",children:f.jsxs("div",{className:`relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] md:w-[640px] md:h-[640px] rounded-full border border-dashed transition-all ${me?"border-zinc-300/70":"border-white/[0.08]"}`,children:[f.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-violet-400 shadow-[0_0_12px_rgba(168,85,247,0.9)]"}),f.jsx("div",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-white/40"}),f.jsx("div",{className:"absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-white/40"}),f.jsx("div",{className:"absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-white/40"}),f.jsx("div",{className:"absolute inset-0 transition-transform duration-1000 ease-linear pointer-events-none",style:{transform:`rotate(${Ar}deg)`},children:f.jsxs("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center",children:[f.jsx("div",{className:`w-3.5 h-3.5 rounded-full animate-ping opacity-75 ${Qt?M==="break"?"bg-cyan-400":"bg-violet-400":ge.clockColor==="gold"?"bg-amber-400":ge.clockColor==="cyan"?"bg-cyan-400":ge.clockColor==="rose"?"bg-rose-400":"bg-violet-400"}`}),f.jsx("div",{className:`absolute w-3 h-3 rounded-full shadow-lg ${Qt?M==="break"?"bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,1)]":"bg-violet-300 shadow-[0_0_20px_rgba(168,85,247,1)]":ge.clockColor==="gold"?"bg-amber-300 shadow-[0_0_20px_rgba(251,191,36,1)]":ge.clockColor==="cyan"?"bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,1)]":ge.clockColor==="rose"?"bg-rose-300 shadow-[0_0_20px_rgba(244,63,94,1)]":"bg-violet-300 shadow-[0_0_20px_rgba(168,85,247,1)]"}`})]})}),f.jsx("div",{className:`absolute inset-8 sm:inset-12 md:inset-16 rounded-full border transition-all ${me?"border-zinc-200/50":"border-white/[0.04]"}`})]})}),Qt?f.jsxs("button",{type:"button",onClick:ce,className:`flex items-center gap-2 sm:gap-2.5 mb-2 sm:mb-3 px-4 py-1.5 rounded-full border backdrop-blur-2xl text-[10px] sm:text-[11px] font-mono tracking-widest uppercase transition-all shadow-md cursor-pointer group ${M==="break"?me?"bg-cyan-50/90 border-cyan-200 text-cyan-900 shadow-sm":"bg-cyan-950/60 border-cyan-500/40 text-cyan-300 shadow-[0_4px_24px_rgba(6,182,212,0.3)]":me?"bg-violet-50/90 border-violet-200 text-violet-900 shadow-sm":"bg-[#090b16]/85 border-violet-500/40 text-violet-300 shadow-[0_4px_24px_rgba(139,92,246,0.35)]"}`,title:"Click to toggle countdown digits vs wall clock digits",children:[f.jsxs("span",{className:"flex items-center gap-1.5 font-bold",children:[f.jsxs("span",{className:"relative flex h-2 w-2",children:[f.jsx("span",{className:`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${M==="break"?"bg-cyan-400":"bg-violet-400"}`}),f.jsx("span",{className:`relative inline-flex rounded-full h-2 w-2 ${M==="break"?"bg-cyan-500":"bg-violet-500"}`})]}),M==="break"?"RECOVERY BREAK":"FOCUS SPRINT"]}),f.jsx("span",{className:"opacity-25",children:"•"}),f.jsxs("span",{className:"tabular-nums font-bold",children:[Gt,":",vi," REMAINING"]}),f.jsx("span",{className:"opacity-25 hidden sm:inline",children:"•"}),f.jsx("span",{className:"hidden sm:inline opacity-80 uppercase",children:y}),f.jsx("span",{className:"opacity-25 hidden md:inline",children:"•"}),f.jsx("span",{className:"hidden md:inline text-[9px] opacity-60 group-hover:text-amber-400 transition-colors",children:Jn?"SHOW CLOCK":"SHOW COUNTDOWN"})]}):f.jsxs("div",{className:`flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3 px-4 py-1 rounded-full border backdrop-blur-2xl text-[10px] sm:text-[11px] font-mono tracking-widest uppercase transition-all shadow-md ${me?"bg-white/80 border-zinc-200 text-zinc-700":"bg-[#090b16]/75 border-white/[0.12] text-zinc-300 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"}`,children:[f.jsxs("span",{className:"flex items-center gap-1.5 text-emerald-400 font-semibold",children:[f.jsxs("span",{className:"relative flex h-2 w-2",children:[f.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),f.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-emerald-500"})]}),"EPHEMERIS"]}),f.jsx("span",{className:"opacity-25",children:"•"}),f.jsxs("span",{className:"tabular-nums",children:["DAY ",oe]}),f.jsx("span",{className:"opacity-25",children:"•"}),f.jsxs("span",{className:"tabular-nums text-violet-400 font-semibold",children:[Ae,"% SOLAR"]}),f.jsx("span",{className:"opacity-25 hidden sm:inline",children:"•"}),f.jsx("span",{className:"hidden sm:inline opacity-70",children:"AZAN ZENITH"})]}),f.jsxs("div",{onClick:Qt?ce:void 0,className:`inline-flex items-center justify-center max-w-[95vw] px-2 select-none leading-none flex-nowrap transition-all ${Qt?"cursor-pointer":""} ${W} ${Le}`,title:Qt?"Click to toggle countdown / real time digits":void 0,children:[f.jsx("span",{className:`${ee} tracking-tight tabular-nums transition-all ${me?"text-zinc-950 font-bold":"bg-gradient-to-b from-white via-white/95 to-zinc-400/90 bg-clip-text text-transparent font-bold"}`,children:Rr}),f.jsx("span",{className:`inline-flex items-center justify-center px-1.5 sm:px-3 text-3xl sm:text-5xl md:text-6xl lg:text-7xl select-none transition-colors ${Qt?M==="break"?"text-cyan-400":"text-violet-400":ge.clockColor==="gold"?"text-amber-400":ge.clockColor==="cyan"?"text-cyan-400":ge.clockColor==="rose"?"text-rose-400":me?"text-zinc-600":"text-violet-400"}`,children:ge.clockDivider==="dot"?"·":ge.clockDivider==="space"?" ":":"}),f.jsx("span",{className:`${ee} tracking-tight tabular-nums transition-all ${me?"text-zinc-950 font-bold":"bg-gradient-to-b from-white via-white/95 to-zinc-400/90 bg-clip-text text-transparent font-bold"}`,children:S}),f.jsxs("div",{className:"flex flex-col items-center justify-center ml-3 sm:ml-5 md:ml-7 gap-2 self-center",children:[Qt?f.jsxs("button",{type:"button",onClick:re=>{re.stopPropagation(),H()},className:`relative flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl border backdrop-blur-3xl transition-all shadow-2xl cursor-pointer group/pod ${me?"bg-white/95 border-violet-200 text-zinc-950 shadow-md hover:border-violet-400":"bg-[#090b16]/95 border-violet-500/30 text-white shadow-[0_12px_40px_rgba(0,0,0,0.8)] hover:border-violet-400/60"}`,title:M==="paused"?"Resume focus":"Pause focus (Tap to toggle)",children:[f.jsxs("svg",{className:"absolute inset-1.5 w-[calc(100%-12px)] h-[calc(100%-12px)] -rotate-90 pointer-events-none",viewBox:"0 0 36 36",children:[f.jsx("circle",{cx:"18",cy:"18",r:"15",stroke:"currentColor",strokeWidth:"2.5",className:"opacity-15",fill:"none"}),f.jsx("circle",{cx:"18",cy:"18",r:"15",stroke:"currentColor",strokeWidth:"2.8",className:`transition-all duration-300 ${M==="break"?"text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]":"text-violet-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]"}`,strokeDasharray:"94.25",strokeDashoffset:94.25*(1-Ai),strokeLinecap:"round",fill:"none"})]}),f.jsx("span",{className:"font-mono text-xs sm:text-sm md:text-base font-extrabold tabular-nums tracking-wider leading-none z-10 drop-shadow-sm",children:Jn?`${nt}:${T}`:`${Gt}:${vi}`}),f.jsx("span",{className:`text-[7px] sm:text-[8px] font-mono tracking-widest uppercase mt-1 z-10 font-bold ${M==="paused"?"text-amber-400":M==="break"?"text-cyan-400":"text-violet-400"}`,children:M==="paused"?"PAUSED":Jn?"CLOCK":M==="break"?"BREAK":"FOCUS"})]}):ge.showSeconds&&f.jsxs("div",{className:`relative flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl border backdrop-blur-3xl transition-all shadow-2xl ${me?"bg-white/95 border-zinc-300 text-zinc-950 shadow-md":"bg-[#090b16]/90 border-white/20 text-white shadow-[0_12px_40px_rgba(0,0,0,0.8)]"}`,children:[f.jsxs("svg",{className:"absolute inset-1.5 w-[calc(100%-12px)] h-[calc(100%-12px)] -rotate-90 pointer-events-none",viewBox:"0 0 36 36",children:[f.jsx("circle",{cx:"18",cy:"18",r:"15",stroke:"currentColor",strokeWidth:"2.5",className:"opacity-15",fill:"none"}),f.jsx("circle",{cx:"18",cy:"18",r:"15",stroke:"currentColor",strokeWidth:"2.8",className:`transition-all duration-300 ${ge.clockColor==="gold"?"text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]":ge.clockColor==="cyan"?"text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]":ge.clockColor==="rose"?"text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.9)]":"text-violet-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]"}`,strokeDasharray:"94.25",strokeDashoffset:94.25*(1-Ue),strokeLinecap:"round",fill:"none"})]}),f.jsx("span",{className:"font-mono text-base sm:text-xl md:text-2xl font-extrabold tabular-nums tracking-wider leading-none z-10 drop-shadow-sm",children:Re}),f.jsx("span",{className:"text-[7px] sm:text-[8px] font-mono tracking-widest uppercase opacity-60 mt-1 z-10 font-bold",children:"SEC"})]}),Qt?f.jsxs("div",{className:"flex items-center gap-1 z-10",children:[f.jsx("button",{type:"button",onClick:re=>{re.stopPropagation(),j()},className:`text-[9px] font-mono px-2 py-0.5 rounded-lg border backdrop-blur-xl transition-all cursor-pointer ${me?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/10 hover:bg-white/20 border-white/15 text-zinc-300"}`,title:"Skip to next phase",children:"SKIP"}),f.jsx("button",{type:"button",onClick:re=>{re.stopPropagation(),$()},className:`text-[9px] font-mono px-2 py-0.5 rounded-lg border backdrop-blur-xl transition-all cursor-pointer ${me?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/10 hover:bg-white/20 border-white/15 text-zinc-300"}`,title:"Reset Pomodoro",children:"RESET"})]}):ve?f.jsx("span",{className:`text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase px-3 py-1 rounded-xl border backdrop-blur-2xl transition-all ${me?"bg-zinc-100 border-zinc-200 text-zinc-800 shadow-sm":"bg-white/[0.08] border-white/15 text-zinc-200 shadow-md"}`,children:ve}):null]})]})]}),ge.showGreeting!==!1&&f.jsx("div",{className:"mt-7 sm:mt-9 flex justify-center w-full px-3",children:f.jsx("button",{type:"button",onClick:()=>Q(!0),className:`group relative text-xs sm:text-sm font-sans tracking-wide px-6 sm:px-8 py-3 rounded-2xl sm:rounded-full backdrop-blur-3xl max-w-xl text-center leading-relaxed shadow-xl cursor-pointer transition-all hover:scale-[1.01] border ${me?"bg-white/95 text-zinc-900 border-zinc-300/90 shadow-md hover:bg-white hover:border-zinc-400":"bg-[#0a0618]/90 text-zinc-200 border-white/[0.18] shadow-[0_16px_50px_rgba(0,0,0,0.7)] hover:border-violet-400/50 hover:shadow-[0_16px_60px_rgba(168,85,247,0.25)]"}`,title:"Click to personalize name & daily mantra",children:f.jsxs("div",{className:"flex items-center justify-center gap-2 flex-wrap",children:[f.jsxs("span",{className:`font-bold tracking-normal ${me?"text-zinc-950":"text-white"}`,children:[U(),", ",s.name]}),f.jsx("span",{className:"opacity-30",children:"•"}),f.jsxs("span",{className:`italic font-medium ${me?"text-zinc-800":"text-zinc-200"}`,children:["“",s.motto||"Discipline equals true freedom.","”"]})]})})}),xe&&f.jsxs("button",{type:"button",onClick:()=>Me(!1),className:`mt-8 flex items-center gap-2 px-5 py-2.5 rounded-full text-xs transition-all border shadow-xl cursor-pointer ${me?"bg-white/90 text-zinc-800 border-zinc-300/80 hover:bg-white":"cosmic-dock text-zinc-300 hover:text-white border-white/[0.12] hover:border-violet-400/40"}`,children:[f.jsx(yg,{className:"w-3.5 h-3.5 text-amber-400"}),f.jsx("span",{className:"font-display tracking-wider",children:"Tap anywhere to restore controls"})]})]}),St!=="none"&&!xe&&f.jsxs("div",{className:"fixed inset-x-0 bottom-24 z-30 flex justify-center px-4 animate-fadeIn pointer-events-auto",children:[f.jsx("div",{className:"fixed inset-0 -z-10",onClick:()=>de("none")}),St==="tasks"&&f.jsxs("div",{className:`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${me?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[f.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${me?"border-zinc-200":"border-white/[0.08]"}`,children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("h2",{className:"text-xs font-display uppercase tracking-[0.18em] font-semibold",children:"Tasks for the Day"}),f.jsxs("div",{className:"flex items-center gap-1 p-0.5 rounded-lg border bg-black/10 border-white/10",children:[f.jsxs("button",{type:"button",onClick:()=>de("tasks"),className:"px-2 py-0.5 rounded text-[10px] font-semibold bg-violet-600 text-white",children:["Tasks (",Ve,"/",e.length,")"]}),f.jsxs("button",{type:"button",onClick:()=>de("habits"),className:"px-2 py-0.5 rounded text-[10px] font-medium text-zinc-400 hover:text-white",children:["Habits (",rt,"/",l.length,")"]})]})]}),f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx("button",{type:"button",onClick:()=>{window.confirm("Reset and uncheck all tasks for today?")&&e.forEach(re=>{re.completed&&t(re.id)})},className:`p-1 rounded-md border transition-colors cursor-pointer ${me?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-600":"bg-white/10 hover:bg-white/20 border-white/10 text-zinc-300 hover:text-white"}`,title:"Reset today's tasks","aria-label":"Reset tasks for today",children:f.jsx(wr,{className:"w-3.5 h-3.5"})}),f.jsx("button",{type:"button",onClick:()=>de("none"),className:"p-1 text-zinc-400 hover:text-white cursor-pointer","aria-label":"Close Tasks Panel",children:f.jsx(Er,{className:"w-3.5 h-3.5"})})]})]}),f.jsxs("form",{onSubmit:He,className:"flex items-center gap-2 shrink-0",children:[f.jsx("input",{type:"text",placeholder:"Add task for today...",value:$e,onChange:re=>dt(re.target.value),className:"flex-1 cosmic-input rounded-xl px-3.5 py-2 text-xs placeholder-zinc-500",autoFocus:!0}),f.jsx("button",{type:"submit",disabled:!$e.trim(),className:"w-8 h-8 rounded-xl bg-violet-600 hover:bg-violet-500 text-white disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all shrink-0 cursor-pointer shadow-sm",children:f.jsx(Ql,{className:"w-4 h-4"})})]}),f.jsx("div",{className:"max-h-56 overflow-y-auto space-y-1.5 pr-1",children:e.map(re=>f.jsxs("div",{className:`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs select-none group ${re.completed?me?"bg-zinc-100/60 border-zinc-200/60 text-zinc-400":"bg-white/[0.015] border-white/[0.04] text-zinc-500":me?"bg-white/80 hover:bg-white border-zinc-200/80 text-zinc-800":"bg-white/[0.035] hover:bg-white/[0.07] border-white/[0.08] hover:border-violet-400/20 text-zinc-200"}`,children:[f.jsxs("div",{className:"flex items-center gap-2.5 truncate flex-1 cursor-pointer pr-2",onClick:()=>t(re.id),children:[f.jsx("div",{className:`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border transition-all ${re.completed?"bg-emerald-500 border-emerald-400 text-white shadow-sm":me?"border-zinc-300 group-hover:border-violet-500":"border-white/[0.25] group-hover:border-violet-400"}`,children:re.completed&&f.jsx(Mr,{className:"w-2.5 h-2.5 stroke-[3]"})}),f.jsx("span",{className:`font-sans truncate ${re.completed?"line-through text-zinc-400":me?"text-zinc-800 font-medium":"text-zinc-200"}`,children:re.text})]}),f.jsx("button",{type:"button",onClick:()=>o(re.id),className:"opacity-0 group-hover:opacity-100 text-zinc-400 hover:text-red-400 transition-opacity p-1 cursor-pointer",children:f.jsx(oo,{className:"w-3.5 h-3.5"})})]},re.id))}),f.jsxs("div",{className:`pt-2.5 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${me?"border-zinc-200 text-zinc-600":"border-white/[0.08] text-zinc-400"}`,children:[f.jsxs("span",{className:"flex items-center gap-1.5",children:[f.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400"}),"Day Progress"]}),f.jsxs("span",{className:`font-display font-medium tabular-nums ${me?"text-zinc-900":"text-zinc-200"}`,children:[qe,"% done"]})]})]}),St==="habits"&&f.jsxs("div",{className:`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${me?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[f.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${me?"border-zinc-200":"border-white/[0.08]"}`,children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("h2",{className:"text-xs font-display uppercase tracking-[0.18em] font-semibold",children:"Daily Rhythm Pulse"}),f.jsxs("div",{className:"flex items-center gap-1 p-0.5 rounded-lg border bg-black/10 border-white/10",children:[f.jsxs("button",{type:"button",onClick:()=>de("tasks"),className:"px-2 py-0.5 rounded text-[10px] font-medium text-zinc-400 hover:text-white",children:["Tasks (",Ve,"/",e.length,")"]}),f.jsxs("button",{type:"button",onClick:()=>de("habits"),className:"px-2 py-0.5 rounded text-[10px] font-semibold bg-violet-600 text-white",children:["Habits (",rt,"/",l.length,")"]})]})]}),f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx("button",{type:"button",onClick:()=>{window.confirm("Reset today's habit checkmarks?")&&l.forEach(re=>{re.completed&&u(re.id)})},className:`p-1 rounded-md border transition-colors cursor-pointer ${me?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-600":"bg-white/10 hover:bg-white/20 border-white/10 text-zinc-300 hover:text-white"}`,title:"Reset today's habits","aria-label":"Reset habits for today",children:f.jsx(wr,{className:"w-3.5 h-3.5"})}),f.jsx("button",{type:"button",onClick:()=>{const re=prompt("Add new daily habit:");re&&p(re)},className:`p-1 rounded-md border transition-colors cursor-pointer ${me?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/10 hover:bg-white/20 border-white/10 text-white"}`,title:"Add habit","aria-label":"Add new daily habit",children:f.jsx(Ql,{className:"w-3.5 h-3.5"})}),f.jsx("button",{type:"button",onClick:()=>de("none"),className:"p-1 text-zinc-400 hover:text-white cursor-pointer","aria-label":"Close Habits Panel",children:f.jsx(Er,{className:"w-3.5 h-3.5"})})]})]}),f.jsx("div",{className:"max-h-56 overflow-y-auto space-y-1.5 pr-1",children:l.map(re=>f.jsxs("div",{onClick:()=>u(re.id),className:`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs cursor-pointer select-none group ${re.completed?me?"bg-zinc-100/60 border-zinc-200/60 text-zinc-400":"bg-white/[0.015] border-white/[0.04] text-zinc-400":me?"bg-white/80 hover:bg-white border-zinc-200/80 text-zinc-800":"bg-white/[0.035] hover:bg-white/[0.07] border-white/[0.08] hover:border-violet-400/20 text-zinc-200"}`,children:[f.jsxs("div",{className:"flex flex-col gap-0.5 truncate pr-2",children:[f.jsx("span",{className:`font-sans truncate ${re.completed?"line-through text-zinc-400":me?"text-zinc-800 font-medium":"text-zinc-200"}`,children:re.name}),f.jsx("div",{className:"flex items-center gap-1.5 text-[10px] font-mono",children:re.streak>0?f.jsxs("span",{className:"text-amber-500 flex items-center gap-0.5 font-medium",children:[f.jsx(mg,{className:"w-3 h-3 fill-amber-500"})," ",re.streak," day streak"]}):f.jsx("span",{className:me?"text-zinc-500":"text-zinc-400",children:"Ready today"})})]}),f.jsx("div",{className:`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border transition-all ${re.completed?"bg-emerald-500 border-emerald-400 text-white shadow-sm":me?"border-zinc-300 group-hover:border-violet-500":"border-white/[0.25] group-hover:border-violet-400"}`,children:re.completed&&f.jsx(Mr,{className:"w-2.5 h-2.5 stroke-[3]"})})]},re.id))}),f.jsxs("div",{className:`pt-2.5 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${me?"border-zinc-200 text-zinc-600":"border-white/[0.08] text-zinc-400"}`,children:[f.jsxs("div",{className:`flex items-center gap-1.5 ${me?"text-zinc-700":"text-zinc-400"}`,children:[f.jsx(Es,{className:`w-3.5 h-3.5 ${me?"text-amber-500":"text-violet-300"}`}),f.jsx("span",{children:"Daily Consistency"})]}),f.jsxs("span",{className:`font-display font-medium tabular-nums ${me?"text-zinc-900":"text-zinc-200"}`,children:[Mt,"% kept"]})]})]}),St==="timer"&&f.jsxs("div",{className:`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${me?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[f.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${me?"border-zinc-200":"border-white/[0.08]"}`,children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(oc,{className:`w-4 h-4 ${me?"text-violet-700":"text-violet-300"}`}),f.jsx("h2",{className:"text-xs font-display uppercase tracking-[0.18em] font-semibold",children:"Deep Study Console"})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsxs("div",{className:"flex items-center gap-1 p-0.5 rounded-lg border bg-black/10 border-white/10",children:[f.jsx("button",{type:"button",onClick:()=>Je("pomodoro"),className:`px-2 py-0.5 rounded text-[10px] font-semibold transition-all cursor-pointer ${bt==="pomodoro"?"bg-violet-600 text-white":me?"text-zinc-600 hover:text-zinc-950":"text-zinc-400 hover:text-white"}`,children:"Pomodoro Sprint"}),f.jsx("button",{type:"button",onClick:()=>Je("stopwatch"),className:`px-2 py-0.5 rounded text-[10px] font-medium transition-all cursor-pointer ${bt==="stopwatch"?"bg-violet-600 text-white":me?"text-zinc-600 hover:text-zinc-950":"text-zinc-400 hover:text-white"}`,children:"Open Stopwatch"})]}),f.jsx("button",{type:"button",onClick:()=>de("none"),className:"p-1 text-zinc-400 hover:text-white cursor-pointer",children:f.jsx(Er,{className:"w-3.5 h-3.5"})})]})]}),bt==="pomodoro"?f.jsxs("div",{className:"space-y-3",children:[f.jsx("div",{className:"flex items-center justify-between gap-1.5",children:[{label:"25m / 5m",focus:25,brk:5},{label:"50m / 10m",focus:50,brk:10},{label:"15m Rapid",focus:15,brk:3}].map(re=>{const Tt=B.focusDurationMinutes===re.focus&&B.breakDurationMinutes===re.brk;return f.jsx("button",{type:"button",onClick:()=>{X(Ke=>({...Ke,focusDurationMinutes:re.focus,breakDurationMinutes:re.brk})),M==="idle"&&O(re.focus)},className:`flex-1 py-1 px-2 rounded-xl text-[10px] font-mono font-medium border transition-all cursor-pointer ${Tt?"bg-violet-600 text-white border-violet-400/50 shadow-sm":me?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 border-white/[0.08]"}`,children:re.label},re.label)})}),f.jsxs("div",{className:"text-center py-2 relative",children:[f.jsxs("div",{className:`text-5xl font-display font-bold tracking-tight leading-none tabular-nums ${me?"text-zinc-950":"text-white"}`,children:[Gt,":",vi]}),f.jsx("div",{className:"flex items-center justify-center gap-2 mt-2",children:f.jsx("span",{className:`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${M==="break"?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 animate-pulse":M==="focus"?"bg-violet-500/20 text-violet-300 border border-violet-500/30 animate-pulse":M==="paused"?"bg-amber-500/20 text-amber-300 border border-amber-500/30":me?"bg-zinc-100 text-zinc-600 border border-zinc-200":"bg-white/[0.06] text-zinc-400 border border-white/[0.08]"}`,children:M==="break"?"RECOVERY BREAK":M==="focus"?"FOCUS SPRINT":M==="paused"?"PAUSED":"READY TO SPRINT"})}),f.jsx("div",{className:"w-full bg-white/[0.06] h-1.5 rounded-full mt-3 overflow-hidden",children:f.jsx("div",{className:`h-full transition-all duration-1000 ${M==="break"?"bg-cyan-400":"bg-violet-500"}`,style:{width:`${Math.round(Ai*100)}%`}})})]}),f.jsxs("div",{className:"flex items-center justify-between text-[11px] px-1 font-mono",children:[f.jsxs("button",{type:"button",onClick:ce,className:`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${B.displayMode==="numbers"?"bg-violet-500/20 border-violet-500/40 text-violet-300":me?"bg-zinc-100 border-zinc-200 text-zinc-600":"bg-white/[0.04] border-white/[0.08] text-zinc-400"}`,children:[f.jsx(kM,{className:"w-3.5 h-3.5"}),f.jsxs("span",{children:["Clock: ",B.displayMode==="numbers"?"Countdown Digits":"Wall Clock"]})]}),f.jsxs("button",{type:"button",onClick:()=>X(re=>({...re,soundEnabled:!re.soundEnabled})),className:`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${B.soundEnabled?"bg-emerald-500/20 border-emerald-500/40 text-emerald-300":me?"bg-zinc-100 border-zinc-200 text-zinc-600":"bg-white/[0.04] border-white/[0.08] text-zinc-400"}`,children:[f.jsx(wM,{className:"w-3.5 h-3.5"}),f.jsxs("span",{children:["Chime: ",B.soundEnabled?"ON":"OFF"]})]})]}),f.jsxs("div",{className:"flex gap-2",children:[f.jsx("button",{type:"button",onClick:H,className:`flex-1 py-2.5 rounded-xl font-display text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 border transition-all cursor-pointer ${me?"bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-800":"bg-violet-600 hover:bg-violet-500 text-white border-violet-400/30"}`,children:M==="focus"?f.jsxs(f.Fragment,{children:[f.jsx(tr,{className:"w-4 h-4"}),f.jsx("span",{children:"Pause Focus"})]}):M==="paused"?f.jsxs(f.Fragment,{children:[f.jsx(Gi,{className:"w-4 h-4 fill-current"}),f.jsx("span",{children:"Resume Focus"})]}):M==="break"?f.jsxs(f.Fragment,{children:[f.jsx(EM,{className:"w-4 h-4"}),f.jsx("span",{children:"Pause Break"})]}):f.jsxs(f.Fragment,{children:[f.jsx(Gi,{className:"w-4 h-4 ml-0.5 fill-current"}),f.jsxs("span",{children:["Start Focus (",B.focusDurationMinutes,"m)"]})]})}),f.jsx("button",{type:"button",onClick:j,className:`px-3 py-2.5 rounded-xl border text-xs font-medium transition-colors cursor-pointer ${me?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white border-white/[0.08]"}`,title:M==="focus"?"Skip directly to break":"Skip back to focus",children:f.jsx(uc,{className:"w-4 h-4"})}),f.jsx("button",{type:"button",onClick:$,className:`px-3 py-2.5 rounded-xl border transition-colors cursor-pointer ${me?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white border-white/[0.08]"}`,title:"Reset Pomodoro",children:f.jsx(wr,{className:"w-3.5 h-3.5"})})]})]}):f.jsxs("div",{className:"space-y-3",children:[f.jsxs("div",{className:"text-center py-2",children:[f.jsx("div",{className:`text-5xl font-display font-light tracking-widest leading-none tabular-nums ${me?"text-zinc-900":"text-white"}`,children:zt(E)}),f.jsxs("p",{className:`text-[10px] font-display tracking-[0.2em] uppercase mt-2 ${me?"text-zinc-500":"text-zinc-400"}`,children:[y," • ",at]})]}),f.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[f.jsx("input",{type:"text",value:at,onChange:re=>Oe(re.target.value),placeholder:"Mode (e.g. Deep Work)",className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"}),f.jsx("input",{type:"text",value:Ce,onChange:re=>{Xe(re.target.value),b(re.target.value)},placeholder:"Subject (e.g. Engineering)",className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"})]}),f.jsxs("div",{className:"flex gap-2",children:[f.jsxs("button",{type:"button",onClick:R,className:`flex-1 py-2.5 rounded-xl font-display text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 border transition-all cursor-pointer ${me?"bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-800":"bg-violet-600 hover:bg-violet-500 text-white border-violet-400/30"}`,children:[A?f.jsx(tr,{className:"w-4 h-4"}):f.jsx(Gi,{className:"w-4 h-4 ml-0.5 fill-current"}),f.jsx("span",{children:A?"Pause Focus":"Start Focus"})]}),f.jsx("button",{type:"button",onClick:z,className:`px-3 py-2.5 rounded-xl border transition-colors cursor-pointer ${me?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white border-white/[0.08]"}`,title:"Reset stopwatch",children:f.jsx(wr,{className:"w-3.5 h-3.5"})})]})]}),f.jsxs("div",{className:`p-3 rounded-2xl border transition-all ${me?"bg-zinc-50 border-zinc-200":"bg-white/[0.025] border-white/[0.08]"}`,children:[f.jsxs("div",{className:"flex items-center justify-between text-[11px] mb-2",children:[f.jsxs("span",{className:`font-sans font-medium flex items-center gap-1.5 ${me?"text-zinc-800":"text-zinc-200"}`,children:[f.jsx(oc,{className:"w-3.5 h-3.5 text-amber-400"}),f.jsx("span",{children:"Forgot to start timer? Log past focus:"})]}),nn&&f.jsx("span",{className:"text-[10px] font-mono text-emerald-400 animate-fadeIn font-semibold",children:nn})]}),f.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[[30,45,60,90,120].map(re=>f.jsxs("button",{type:"button",onClick:()=>xn(re),className:`px-2.5 py-1 rounded-xl text-[10px] font-mono font-medium border transition-all cursor-pointer ${me?"bg-white hover:bg-zinc-100 text-zinc-800 border-zinc-200 shadow-xs":"bg-white/[0.05] hover:bg-white/[0.12] text-zinc-300 hover:text-white border-white/[0.1]"}`,title:`Log ${re>=60?re/60+" hours":re+" minutes"} past study`,children:["+",re>=60?`${re/60}h`:`${re}m`]},re)),f.jsxs("form",{onSubmit:mt,className:"flex items-center gap-1 ml-auto",children:[f.jsx("input",{type:"number",min:"1",max:"720",value:ut,onChange:re=>pt(re.target.value),placeholder:"Mins",className:"w-14 cosmic-input rounded-lg px-2 py-0.5 text-[10px] font-mono text-center"}),f.jsx("button",{type:"submit",className:"px-2.5 py-0.5 rounded-lg text-[10px] font-medium bg-amber-400 hover:bg-amber-300 text-black font-semibold cursor-pointer transition-colors",children:"+ Add"})]})]}),D.length>0&&f.jsxs("div",{className:"pt-2 mt-2 border-t border-white/[0.06] space-y-1",children:[f.jsx("span",{className:`text-[10px] font-mono uppercase tracking-wider block ${me?"text-zinc-500":"text-zinc-400"}`,children:"Recent Focus Logs:"}),f.jsx("div",{className:"max-h-20 overflow-y-auto space-y-1 pr-1 text-[11px] font-mono",children:D.slice(0,3).map(re=>f.jsxs("div",{className:`flex items-center justify-between px-2 py-1 rounded-lg ${me?"bg-zinc-100 text-zinc-800":"bg-white/[0.03] text-zinc-300"}`,children:[f.jsxs("span",{className:"truncate",children:[re.subject," · ",Math.round(re.durationSeconds/60),"m"]}),f.jsx("button",{type:"button",onClick:()=>L(re.id),className:"text-zinc-500 hover:text-red-400 p-0.5 transition-colors cursor-pointer",title:"Remove logged entry",children:f.jsx(oo,{className:"w-3 h-3"})})]},re.id))})]})]}),f.jsxs("div",{className:`pt-2.5 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${me?"border-zinc-200 text-zinc-600":"border-white/[0.08] text-zinc-400"}`,children:[f.jsxs("span",{children:["Weekly: ",f.jsxs("strong",{className:`font-display ${me?"text-zinc-900":"text-zinc-200"}`,children:[en,"h"]})," / 15h"]}),f.jsxs("span",{className:`font-display font-medium tabular-nums ${me?"text-zinc-900":"text-zinc-200"}`,children:[jt,"% quota"]})]})]}),St==="wellness"&&f.jsxs("div",{className:`w-full max-w-sm p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${me?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[f.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-white/10",children:[f.jsxs("span",{className:"text-xs font-display uppercase tracking-widest font-semibold flex items-center gap-1.5",children:[f.jsx(Es,{className:"w-3.5 h-3.5 text-amber-400"}),"Daily Wellness Pulse"]}),f.jsx("button",{onClick:()=>de("none"),className:"p-1 text-zinc-400 hover:text-white",children:f.jsx(Er,{className:"w-3.5 h-3.5"})})]}),f.jsxs("div",{className:"flex items-center justify-between py-1 text-xs",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(TM,{className:"w-4 h-4 text-sky-400"}),f.jsx("span",{children:"Hydration Target"})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("button",{type:"button",onClick:()=>q(re=>Math.max(0,re-12.5)),className:"w-6 h-6 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center font-bold",children:"-"}),f.jsxs("span",{className:"font-mono font-bold w-12 text-center",children:[Math.round(te/100*8)," / 8"]}),f.jsx("button",{type:"button",onClick:()=>q(re=>Math.min(100,re+12.5)),className:"w-6 h-6 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center font-bold",children:"+"})]})]}),f.jsxs("div",{className:"flex items-center justify-between py-1 text-xs",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(cc,{className:"w-4 h-4 text-violet-400"}),f.jsx("span",{children:"Sleep Duration"})]}),f.jsxs("button",{type:"button",onClick:()=>G(Y%12+1),className:"px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 font-mono font-bold text-xs",children:[Y," Hours (Click to Cycle)"]})]}),f.jsxs("div",{className:"flex items-center justify-between py-1 text-xs",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(DM,{className:"w-4 h-4 text-amber-400"}),f.jsx("span",{children:"Day Score"})]}),f.jsxs("button",{type:"button",onClick:()=>K(P>=10?1:P+1),className:"px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 font-mono font-bold text-xs text-amber-400",children:[P," / 10 ★"]})]}),f.jsxs("div",{className:`pt-3 mt-1 border-t flex items-center justify-between ${me?"border-zinc-200":"border-white/10"}`,children:[f.jsxs("div",{className:"flex flex-col",children:[f.jsxs("span",{className:"text-[11px] font-medium flex items-center gap-1",children:[f.jsx(wr,{className:"w-3 h-3 text-violet-400"}),"Day Reset"]}),f.jsxs("span",{className:`text-[9px] font-mono ${me?"text-zinc-500":"text-zinc-400"}`,children:["Active: ",Te]})]}),f.jsxs("button",{type:"button",onClick:()=>{window.confirm("Start a fresh day? This will uncheck today's tasks & habits and reset hydration to 0%.")&&ie()},className:`px-3 py-1.5 rounded-xl border text-[11px] font-display uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${me?"bg-violet-50 hover:bg-violet-100 text-violet-700 border-violet-200":"bg-violet-600/30 hover:bg-violet-600/50 text-violet-200 border-violet-400/40 hover:border-violet-400"}`,title:"Reset daily progress for a fresh day",children:[f.jsx(wr,{className:"w-3 h-3"}),f.jsx("span",{children:"Start Fresh Day"})]})]})]})]}),!xe&&f.jsx("footer",{className:"relative shrink-0 flex items-center justify-center w-full z-20 pb-2",children:f.jsxs("nav",{"aria-label":"Sanctuary Focus Dock",className:`flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-full backdrop-blur-2xl border shadow-2xl transition-all ${me?"bg-white/85 border-zinc-200/90 text-zinc-800 shadow-[0_15px_40px_rgba(0,0,0,0.1)]":"bg-[#090b16]/80 border-white/[0.12] text-zinc-200 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"}`,children:[f.jsxs("div",{className:`flex items-center rounded-full border transition-all ${Qt?M==="break"?"bg-cyan-500/20 border-cyan-500/40 text-cyan-300":"bg-violet-600/25 border-violet-500/40 text-violet-300":A?"bg-emerald-500/20 border-emerald-500/40 text-emerald-300":me?"bg-zinc-100/90 border-zinc-200 text-zinc-800":"bg-white/[0.04] border-white/[0.08] text-zinc-300"}`,children:[f.jsxs("button",{type:"button",onClick:Qt?H:A?R:()=>O(),className:"pl-3 pr-1.5 py-1.5 flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity",title:Qt?M==="paused"?"Resume Pomodoro":"Pause Pomodoro":A?"Pause focus timer":"Start Pomodoro Focus",children:[Qt?M==="paused"?f.jsx(Gi,{className:"w-3.5 h-3.5 text-amber-400 fill-current"}):f.jsx(tr,{className:"w-3.5 h-3.5 text-violet-400 animate-pulse"}):A?f.jsx(tr,{className:"w-3.5 h-3.5 text-emerald-400 animate-pulse"}):f.jsx(Gi,{className:"w-3.5 h-3.5 text-zinc-400 fill-current"}),f.jsx("span",{className:"font-mono text-xs font-semibold tabular-nums",children:Qt?`${Gt}:${vi}`:zt(E)})]}),f.jsx("button",{type:"button",onClick:()=>{Je(Qt?"pomodoro":"stopwatch"),de(re=>re==="timer"?"none":"timer")},className:`pr-3 pl-1.5 py-1.5 text-[11px] font-sans border-l transition-colors cursor-pointer ${me?"border-zinc-200 hover:text-black":"border-white/10 hover:text-white"}`,title:"Expand Deep Study Console",children:f.jsx("span",{children:Qt?M==="break"?"Break":"Sprint":Ce})})]}),f.jsxs("button",{type:"button",onClick:()=>de(re=>re==="tasks"?"none":"tasks"),className:`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-sans transition-all cursor-pointer ${St==="tasks"||St==="habits"?"bg-violet-600 text-white border-violet-400":me?"bg-zinc-100/90 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300 hover:text-white"}`,title:"Daily Flow (Tasks & Habits)",children:[f.jsx(PM,{className:"w-3.5 h-3.5 text-violet-400"}),f.jsx("span",{children:"Flow"}),f.jsxs("span",{className:`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${me?"bg-zinc-200/90 text-zinc-800":"bg-white/10 text-violet-200"}`,children:[Ve+rt,"/",e.length+l.length]})]}),f.jsxs("div",{onClick:()=>Wt(!0),className:`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs cursor-pointer group transition-all ${Pe||Fe?ye==="youtube"?"bg-red-600/30 border-red-500/40 text-red-200":"bg-violet-600/30 border-violet-500/40 text-violet-200":me?"bg-zinc-100/90 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300 hover:text-white"}`,title:"Open Audio Sanctuary",children:[ye==="youtube"&&Fe?f.jsx(lo,{className:"w-3.5 h-3.5 text-red-500 animate-pulse"}):f.jsx(lc,{className:`w-3.5 h-3.5 ${Pe||Fe?"text-violet-300 animate-pulse":"text-zinc-400"}`}),f.jsx("span",{className:"max-w-[80px] sm:max-w-[120px] truncate text-[11px] font-medium",children:ye==="youtube"?Ge?Ge.title:"YouTube":rn.title}),f.jsx(Yg,{isPlaying:ye==="youtube"?Fe:Pe,color:ye==="youtube"?"#ef4444":me?"#7c3aed":rn.accentColor,className:"w-8 h-2.5",barCount:4}),f.jsx("button",{type:"button",onClick:re=>{re.stopPropagation(),ye==="youtube"?ct():Pe?Ee():je(st)},className:"w-5 h-5 rounded-md flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors",title:(ye==="youtube"?Fe:Pe)?"Pause audio":"Play audio",children:(ye==="youtube"?Fe:Pe)?f.jsx(tr,{className:"w-2.5 h-2.5 fill-current"}):f.jsx(Gi,{className:"w-2.5 h-2.5 fill-current ml-0.5"})})]})]})}),Jt&&f.jsxs("div",{className:"fixed inset-0 z-50 flex",children:[f.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm",onClick:()=>Et(!1)}),f.jsxs("aside",{className:`relative z-10 w-84 sm:w-96 max-w-[92vw] h-full backdrop-blur-3xl border-r shadow-2xl pt-16 sm:pt-20 px-6 pb-6 flex flex-col justify-between ${me?"bg-[#faf8f4]/98 border-zinc-200 text-zinc-900":"bg-[#0d0f17]/95 border-white/[0.1] text-white"}`,children:[f.jsxs("div",{className:"space-y-4",children:[f.jsxs("div",{className:`flex items-center justify-between pb-3.5 border-b ${me?"border-zinc-200":"border-white/[0.08]"}`,children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(r0,{className:`w-4 h-4 ${me?"text-zinc-700":"text-zinc-300"}`}),f.jsx("h3",{className:`text-xs font-sans uppercase tracking-[0.16em] font-semibold ${me?"text-zinc-900":"text-white"}`,children:"Daily Rhythm"})]}),f.jsx("button",{onClick:()=>Et(!1),className:`transition-colors cursor-pointer ${me?"text-zinc-500 hover:text-black":"text-zinc-400 hover:text-white"}`,children:f.jsx(Er,{className:"w-4 h-4"})})]}),f.jsx("div",{className:"py-1",children:f.jsx(VM,{routines:d,activeBlock:_,activeMinutesLeft:w,isLight:me})}),f.jsxs("div",{className:"space-y-2.5 text-xs overflow-y-auto max-h-[50vh] pr-1",children:[d.map(re=>{const Tt=(_==null?void 0:_.id)===re.id;return f.jsxs("div",{className:`p-3.5 rounded-2xl border transition-all relative group ${Tt?me?"bg-amber-50/90 border-amber-300 shadow-sm":"bg-white/[0.04] border-amber-400/40 shadow-md ring-1 ring-amber-400/20":me?"bg-white/80 border-zinc-200 shadow-xs":"bg-white/[0.02] border-white/[0.07]"}`,children:[f.jsxs("div",{className:"flex items-center justify-between pb-1.5",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("span",{className:`w-2 h-2 rounded-full ${Tt?"bg-amber-400":"bg-zinc-600"}`}),f.jsx("span",{className:`font-semibold tracking-tight ${Tt?"text-white font-bold":me?"text-zinc-800":"text-zinc-200"}`,children:re.title}),Tt&&f.jsx("span",{className:"text-[9px] font-mono px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/25 font-semibold uppercase tracking-wider",children:"Current"})]}),f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx("span",{className:`text-[10px] font-mono tabular-nums ${me?"text-zinc-500":"text-zinc-400"}`,children:re.timeRange}),d.length>1&&f.jsx("button",{type:"button",onClick:()=>g(re.id),className:"opacity-0 group-hover:opacity-100 p-1 text-zinc-400 hover:text-red-400 transition-opacity cursor-pointer",title:"Delete routine block",children:f.jsx(oo,{className:"w-3 h-3"})})]})]}),f.jsx("p",{className:`text-[11px] leading-relaxed ${me?"text-zinc-600":"text-zinc-400"}`,children:re.description})]},re.id)}),Ft?f.jsxs("form",{onSubmit:re=>{re.preventDefault(),Bt.trim()&&Ln.trim()&&(m({title:Bt.trim(),timeRange:Zn.trim()||"Flexible",description:Ln.trim(),iconType:"custom"}),Kt(""),$n(""),xi(""),_t(!1))},className:`p-3.5 rounded-2xl border space-y-2.5 ${me?"bg-white border-zinc-300 shadow-sm":"bg-white/[0.04] border-white/[0.1]"}`,children:[f.jsx("input",{type:"text",placeholder:"Title (e.g. Creative Sprint)",value:Bt,onChange:re=>Kt(re.target.value),className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs",required:!0}),f.jsx("input",{type:"text",placeholder:"Time range (e.g. 14:00 – 16:00)",value:Zn,onChange:re=>$n(re.target.value),className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"}),f.jsx("textarea",{placeholder:"Intentions / Focus areas...",value:Ln,onChange:re=>xi(re.target.value),className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs resize-none h-16",required:!0}),f.jsxs("div",{className:"flex items-center justify-end gap-2 pt-1",children:[f.jsx("button",{type:"button",onClick:()=>_t(!1),className:`px-3 py-1 rounded-lg text-[11px] transition-colors ${me?"text-zinc-600 hover:text-black":"text-zinc-400 hover:text-white"}`,children:"Cancel"}),f.jsx("button",{type:"submit",className:"px-3.5 py-1.5 rounded-lg text-[11px] bg-amber-400 hover:bg-amber-300 text-black font-semibold cursor-pointer transition-colors",children:"Add Block"})]})]}):f.jsxs("button",{type:"button",onClick:()=>_t(!0),className:`w-full py-2.5 rounded-xl border border-dashed flex items-center justify-center gap-1.5 text-[11px] transition-all cursor-pointer ${me?"border-zinc-300 hover:border-zinc-400 text-zinc-600 hover:text-zinc-900 bg-white/40":"border-white/10 hover:border-white/20 text-zinc-400 hover:text-white bg-white/[0.01]"}`,children:[f.jsx(Ql,{className:"w-3 h-3"}),f.jsx("span",{children:"Add Custom Routine Block"})]})]})]}),f.jsxs("div",{className:"flex items-center gap-2 pt-2",children:[f.jsx("button",{type:"button",onClick:v,className:`px-3 py-2.5 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${me?"border-zinc-200 text-zinc-600 hover:bg-zinc-100":"border-white/10 text-zinc-400 hover:bg-white/[0.05] hover:text-white"}`,title:"Reset to default protocols",children:"Reset"}),f.jsx("button",{type:"button",onClick:()=>Et(!1),className:`flex-1 py-2.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${me?"bg-zinc-900 hover:bg-zinc-800 text-white":"bg-white/[0.06] hover:bg-white/[0.12] text-white"}`,children:"Close"})]})]})]}),f.jsx(GM,{isOpen:mn,onClose:()=>Q(!1)}),f.jsx(BM,{isOpen:Xt,onClose:()=>It(!1)}),f.jsx(HM,{isOpen:Zt,onClose:()=>Wt(!1)})]})},jM=()=>{const{wallpaperTheme:s,appTheme:e}=is(),t=e==="light";return f.jsxs("div",{"data-theme":s,className:`theme-${e} relative w-screen h-screen max-h-screen overflow-hidden text-[var(--text-primary)] font-sans transition-colors duration-200 ${t?"bg-[#f7f5f0]/95":"bg-[#060814]"}`,children:[f.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--card-bg-elevated)] focus:text-[var(--text-primary)] focus:rounded-xl focus:border focus:border-[var(--card-border)] focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-violet-400 font-sans text-xs font-semibold",children:"Skip to main content"}),f.jsx(Wv,{}),f.jsx(fM,{}),f.jsx(FM,{}),f.jsx("div",{className:"pointer-events-none fixed inset-0 z-20 dreamy-grain opacity-15"}),f.jsx("main",{id:"main-content",className:"w-full h-full overflow-y-auto lg:overflow-hidden relative z-10",children:f.jsx(WM,{})})]})};function $M(){return f.jsx(Vv,{children:f.jsx(jM,{})})}const l0=document.getElementById("root");l0&&zv.createRoot(l0).render(f.jsx(Pv.StrictMode,{children:f.jsx($M,{})}));
