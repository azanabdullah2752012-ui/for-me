var Tv=Object.defineProperty;var Av=(s,e,t)=>e in s?Tv(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var sr=(s,e,t)=>Av(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function lm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Bu={exports:{}},ja={},Hu={exports:{}},Rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function Cv(){if(Jp)return Rt;Jp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function g(P){return P===null||typeof P!="object"?null:(P=y&&P[y]||P["@@iterator"],typeof P=="function"?P:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function S(P,K,we){this.props=P,this.context=K,this.refs=A,this.updater=we||_}S.prototype.isReactComponent={},S.prototype.setState=function(P,K){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,K,"setState")},S.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function b(){}b.prototype=S.prototype;function R(P,K,we){this.props=P,this.context=K,this.refs=A,this.updater=we||_}var F=R.prototype=new b;F.constructor=R,M(F,S.prototype),F.isPureReactComponent=!0;var D=Array.isArray,U=Object.prototype.hasOwnProperty,L={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function N(P,K,we){var k,ve={},be=null,Ne=null;if(K!=null)for(k in K.ref!==void 0&&(Ne=K.ref),K.key!==void 0&&(be=""+K.key),K)U.call(K,k)&&!w.hasOwnProperty(k)&&(ve[k]=K[k]);var _e=arguments.length-2;if(_e===1)ve.children=we;else if(1<_e){for(var Ue=Array(_e),ot=0;ot<_e;ot++)Ue[ot]=arguments[ot+2];ve.children=Ue}if(P&&P.defaultProps)for(k in _e=P.defaultProps,_e)ve[k]===void 0&&(ve[k]=_e[k]);return{$$typeof:s,type:P,key:be,ref:Ne,props:ve,_owner:L.current}}function J(P,K){return{$$typeof:s,type:P.type,key:K,ref:P.ref,props:P.props,_owner:P._owner}}function X(P){return typeof P=="object"&&P!==null&&P.$$typeof===s}function j(P){var K={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(we){return K[we]})}var B=/\/+/g;function O(P,K){return typeof P=="object"&&P!==null&&P.key!=null?j(""+P.key):K.toString(36)}function V(P,K,we,k,ve){var be=typeof P;(be==="undefined"||be==="boolean")&&(P=null);var Ne=!1;if(P===null)Ne=!0;else switch(be){case"string":case"number":Ne=!0;break;case"object":switch(P.$$typeof){case s:case e:Ne=!0}}if(Ne)return Ne=P,ve=ve(Ne),P=k===""?"."+O(Ne,0):k,D(ve)?(we="",P!=null&&(we=P.replace(B,"$&/")+"/"),V(ve,K,we,"",function(ot){return ot})):ve!=null&&(X(ve)&&(ve=J(ve,we+(!ve.key||Ne&&Ne.key===ve.key?"":(""+ve.key).replace(B,"$&/")+"/")+P)),K.push(ve)),1;if(Ne=0,k=k===""?".":k+":",D(P))for(var _e=0;_e<P.length;_e++){be=P[_e];var Ue=k+O(be,_e);Ne+=V(be,K,we,Ue,ve)}else if(Ue=g(P),typeof Ue=="function")for(P=Ue.call(P),_e=0;!(be=P.next()).done;)be=be.value,Ue=k+O(be,_e++),Ne+=V(be,K,we,Ue,ve);else if(be==="object")throw K=String(P),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return Ne}function H(P,K,we){if(P==null)return P;var k=[],ve=0;return V(P,k,"","",function(be){return K.call(we,be,ve++)}),k}function se(P){if(P._status===-1){var K=P._result;K=K(),K.then(function(we){(P._status===0||P._status===-1)&&(P._status=1,P._result=we)},function(we){(P._status===0||P._status===-1)&&(P._status=2,P._result=we)}),P._status===-1&&(P._status=0,P._result=K)}if(P._status===1)return P._result.default;throw P._result}var ee={current:null},Y={transition:null},G={ReactCurrentDispatcher:ee,ReactCurrentBatchConfig:Y,ReactCurrentOwner:L};function $(){throw Error("act(...) is not supported in production builds of React.")}return Rt.Children={map:H,forEach:function(P,K,we){H(P,function(){K.apply(this,arguments)},we)},count:function(P){var K=0;return H(P,function(){K++}),K},toArray:function(P){return H(P,function(K){return K})||[]},only:function(P){if(!X(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},Rt.Component=S,Rt.Fragment=t,Rt.Profiler=o,Rt.PureComponent=R,Rt.StrictMode=r,Rt.Suspense=u,Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,Rt.act=$,Rt.cloneElement=function(P,K,we){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var k=M({},P.props),ve=P.key,be=P.ref,Ne=P._owner;if(K!=null){if(K.ref!==void 0&&(be=K.ref,Ne=L.current),K.key!==void 0&&(ve=""+K.key),P.type&&P.type.defaultProps)var _e=P.type.defaultProps;for(Ue in K)U.call(K,Ue)&&!w.hasOwnProperty(Ue)&&(k[Ue]=K[Ue]===void 0&&_e!==void 0?_e[Ue]:K[Ue])}var Ue=arguments.length-2;if(Ue===1)k.children=we;else if(1<Ue){_e=Array(Ue);for(var ot=0;ot<Ue;ot++)_e[ot]=arguments[ot+2];k.children=_e}return{$$typeof:s,type:P.type,key:ve,ref:be,props:k,_owner:Ne}},Rt.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:l,_context:P},P.Consumer=P},Rt.createElement=N,Rt.createFactory=function(P){var K=N.bind(null,P);return K.type=P,K},Rt.createRef=function(){return{current:null}},Rt.forwardRef=function(P){return{$$typeof:p,render:P}},Rt.isValidElement=X,Rt.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:se}},Rt.memo=function(P,K){return{$$typeof:m,type:P,compare:K===void 0?null:K}},Rt.startTransition=function(P){var K=Y.transition;Y.transition={};try{P()}finally{Y.transition=K}},Rt.unstable_act=$,Rt.useCallback=function(P,K){return ee.current.useCallback(P,K)},Rt.useContext=function(P){return ee.current.useContext(P)},Rt.useDebugValue=function(){},Rt.useDeferredValue=function(P){return ee.current.useDeferredValue(P)},Rt.useEffect=function(P,K){return ee.current.useEffect(P,K)},Rt.useId=function(){return ee.current.useId()},Rt.useImperativeHandle=function(P,K,we){return ee.current.useImperativeHandle(P,K,we)},Rt.useInsertionEffect=function(P,K){return ee.current.useInsertionEffect(P,K)},Rt.useLayoutEffect=function(P,K){return ee.current.useLayoutEffect(P,K)},Rt.useMemo=function(P,K){return ee.current.useMemo(P,K)},Rt.useReducer=function(P,K,we){return ee.current.useReducer(P,K,we)},Rt.useRef=function(P){return ee.current.useRef(P)},Rt.useState=function(P){return ee.current.useState(P)},Rt.useSyncExternalStore=function(P,K,we){return ee.current.useSyncExternalStore(P,K,we)},Rt.useTransition=function(){return ee.current.useTransition()},Rt.version="18.3.1",Rt}var Qp;function pf(){return Qp||(Qp=1,Hu.exports=Cv()),Hu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e0;function Rv(){if(e0)return ja;e0=1;var s=pf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(p,u,m){var v,y={},g=null,_=null;m!==void 0&&(g=""+m),u.key!==void 0&&(g=""+u.key),u.ref!==void 0&&(_=u.ref);for(v in u)r.call(u,v)&&!l.hasOwnProperty(v)&&(y[v]=u[v]);if(p&&p.defaultProps)for(v in u=p.defaultProps,u)y[v]===void 0&&(y[v]=u[v]);return{$$typeof:e,type:p,key:g,ref:_,props:y,_owner:o.current}}return ja.Fragment=t,ja.jsx=d,ja.jsxs=d,ja}var t0;function Nv(){return t0||(t0=1,Bu.exports=Rv()),Bu.exports}var h=Nv(),Ee=pf();const Pv=lm(Ee);var vl={},Gu={exports:{}},Jn={},Vu={exports:{}},Wu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n0;function Dv(){return n0||(n0=1,(function(s){function e(Y,G){var $=Y.length;Y.push(G);e:for(;0<$;){var P=$-1>>>1,K=Y[P];if(0<o(K,G))Y[P]=G,Y[$]=K,$=P;else break e}}function t(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var G=Y[0],$=Y.pop();if($!==G){Y[0]=$;e:for(var P=0,K=Y.length,we=K>>>1;P<we;){var k=2*(P+1)-1,ve=Y[k],be=k+1,Ne=Y[be];if(0>o(ve,$))be<K&&0>o(Ne,ve)?(Y[P]=Ne,Y[be]=$,P=be):(Y[P]=ve,Y[k]=$,P=k);else if(be<K&&0>o(Ne,$))Y[P]=Ne,Y[be]=$,P=be;else break e}}return G}function o(Y,G){var $=Y.sortIndex-G.sortIndex;return $!==0?$:Y.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var d=Date,p=d.now();s.unstable_now=function(){return d.now()-p}}var u=[],m=[],v=1,y=null,g=3,_=!1,M=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(Y){for(var G=t(m);G!==null;){if(G.callback===null)r(m);else if(G.startTime<=Y)r(m),G.sortIndex=G.expirationTime,e(u,G);else break;G=t(m)}}function D(Y){if(A=!1,F(Y),!M)if(t(u)!==null)M=!0,se(U);else{var G=t(m);G!==null&&ee(D,G.startTime-Y)}}function U(Y,G){M=!1,A&&(A=!1,b(N),N=-1),_=!0;var $=g;try{for(F(G),y=t(u);y!==null&&(!(y.expirationTime>G)||Y&&!j());){var P=y.callback;if(typeof P=="function"){y.callback=null,g=y.priorityLevel;var K=P(y.expirationTime<=G);G=s.unstable_now(),typeof K=="function"?y.callback=K:y===t(u)&&r(u),F(G)}else r(u);y=t(u)}if(y!==null)var we=!0;else{var k=t(m);k!==null&&ee(D,k.startTime-G),we=!1}return we}finally{y=null,g=$,_=!1}}var L=!1,w=null,N=-1,J=5,X=-1;function j(){return!(s.unstable_now()-X<J)}function B(){if(w!==null){var Y=s.unstable_now();X=Y;var G=!0;try{G=w(!0,Y)}finally{G?O():(L=!1,w=null)}}else L=!1}var O;if(typeof R=="function")O=function(){R(B)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,H=V.port2;V.port1.onmessage=B,O=function(){H.postMessage(null)}}else O=function(){S(B,0)};function se(Y){w=Y,L||(L=!0,O())}function ee(Y,G){N=S(function(){Y(s.unstable_now())},G)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Y){Y.callback=null},s.unstable_continueExecution=function(){M||_||(M=!0,se(U))},s.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<Y?Math.floor(1e3/Y):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(u)},s.unstable_next=function(Y){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var $=g;g=G;try{return Y()}finally{g=$}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Y,G){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var $=g;g=Y;try{return G()}finally{g=$}},s.unstable_scheduleCallback=function(Y,G,$){var P=s.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?P+$:P):$=P,Y){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=$+K,Y={id:v++,callback:G,priorityLevel:Y,startTime:$,expirationTime:K,sortIndex:-1},$>P?(Y.sortIndex=$,e(m,Y),t(u)===null&&Y===t(m)&&(A?(b(N),N=-1):A=!0,ee(D,$-P))):(Y.sortIndex=K,e(u,Y),M||_||(M=!0,se(U))),Y},s.unstable_shouldYield=j,s.unstable_wrapCallback=function(Y){var G=g;return function(){var $=g;g=G;try{return Y.apply(this,arguments)}finally{g=$}}}})(Wu)),Wu}var i0;function Lv(){return i0||(i0=1,Vu.exports=Dv()),Vu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r0;function Iv(){if(r0)return Jn;r0=1;var s=pf(),e=Lv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){d(n,i),d(n+"Capture",i)}function d(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),u=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},y={};function g(n){return u.call(y,n)?!0:u.call(v,n)?!1:m.test(n)?y[n]=!0:(v[n]=!0,!1)}function _(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,a,c){if(i===null||typeof i>"u"||_(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(n,i,a,c,f,x,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=x,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new A(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(b,R);S[i]=new A(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(b,R);S[i]=new A(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(b,R);S[i]=new A(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function F(n,i,a,c){var f=S.hasOwnProperty(i)?S[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,f,c)&&(a=null),c||f===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var D=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),L=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),X=Symbol.for("react.provider"),j=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),ee=Symbol.for("react.offscreen"),Y=Symbol.iterator;function G(n){return n===null||typeof n!="object"?null:(n=Y&&n[Y]||n["@@iterator"],typeof n=="function"?n:null)}var $=Object.assign,P;function K(n){if(P===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);P=i&&i[1]||""}return`
`+P+n}var we=!1;function k(n,i){if(!n||we)return"";we=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(pe){var c=pe}Reflect.construct(n,[],i)}else{try{i.call()}catch(pe){c=pe}n.call(i.prototype)}else{try{throw Error()}catch(pe){c=pe}n()}}catch(pe){if(pe&&c&&typeof pe.stack=="string"){for(var f=pe.stack.split(`
`),x=c.stack.split(`
`),T=f.length-1,W=x.length-1;1<=T&&0<=W&&f[T]!==x[W];)W--;for(;1<=T&&0<=W;T--,W--)if(f[T]!==x[W]){if(T!==1||W!==1)do if(T--,W--,0>W||f[T]!==x[W]){var Z=`
`+f[T].replace(" at new "," at ");return n.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",n.displayName)),Z}while(1<=T&&0<=W);break}}}finally{we=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?K(n):""}function ve(n){switch(n.tag){case 5:return K(n.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return n=k(n.type,!1),n;case 11:return n=k(n.type.render,!1),n;case 1:return n=k(n.type,!0),n;default:return""}}function be(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case w:return"Fragment";case L:return"Portal";case J:return"Profiler";case N:return"StrictMode";case O:return"Suspense";case V:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case j:return(n.displayName||"Context")+".Consumer";case X:return(n._context.displayName||"Context")+".Provider";case B:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case H:return i=n.displayName||null,i!==null?i:be(n.type)||"Memo";case se:i=n._payload,n=n._init;try{return be(n(i))}catch{}}return null}function Ne(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(i);case 8:return i===N?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function _e(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ot(n){var i=Ue(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,x=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(T){c=""+T,x.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Be(n){n._valueTracker||(n._valueTracker=ot(n))}function Me(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ue(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Ie(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ge(n,i){var a=i.checked;return $({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function gt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=_e(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function vt(n,i){i=i.checked,i!=null&&F(n,"checked",i,!1)}function Mt(n,i){vt(n,i);var a=_e(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?an(n,i.type,a):i.hasOwnProperty("defaultValue")&&an(n,i.type,_e(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ut(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function an(n,i,a){(i!=="number"||Ie(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Dt=Array.isArray;function $t(n,i,a,c){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&c&&(n[a].defaultSelected=!0)}else{for(a=""+_e(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function Bt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return $({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function on(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Dt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:_e(a)}}function Q(n,i){var a=_e(i.value),c=_e(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Zt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Lt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Lt(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var de,_t=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(de=de||document.createElement("div"),de.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=de.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ye(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var st={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},z=["Webkit","ms","Moz","O"];Object.keys(st).forEach(function(n){z.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),st[i]=st[n]})});function E(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||st.hasOwnProperty(n)&&st[n]?(""+i).trim():i+"px"}function ne(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=E(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,f):n[a]=f}}var Re=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Se(n,i){if(i){if(Re[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ke(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oe=null;function me(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var xe=null,ge=null,I=null;function re(n){if(n=Na(n)){if(typeof xe!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Lo(i),xe(n.stateNode,n.type,i))}}function ie(n){ge?I?I.push(n):I=[n]:ge=n}function Te(){if(ge){var n=ge,i=I;if(I=ge=null,re(n),i)for(n=0;n<i.length;n++)re(i[n])}}function Ae(n,i){return n(i)}function Pe(){}var $e=!1;function ft(n,i,a){if($e)return n(i,a);$e=!0;try{return Ae(n,i,a)}finally{$e=!1,(ge!==null||I!==null)&&(Pe(),Te())}}function Ce(n,i){var a=n.stateNode;if(a===null)return null;var c=Lo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Ke=!1;if(p)try{var fe={};Object.defineProperty(fe,"passive",{get:function(){Ke=!0}}),window.addEventListener("test",fe,fe),window.removeEventListener("test",fe,fe)}catch{Ke=!1}function ze(n,i,a,c,f,x,T,W,Z){var pe=Array.prototype.slice.call(arguments,3);try{i.apply(a,pe)}catch(Le){this.onError(Le)}}var lt=!1,mt=null,ye=!1,Qe=null,Ve={onError:function(n){lt=!0,mt=n}};function Ze(n,i,a,c,f,x,T,W,Z){lt=!1,mt=null,ze.apply(Ve,arguments)}function Pt(n,i,a,c,f,x,T,W,Z){if(Ze.apply(this,arguments),lt){if(lt){var pe=mt;lt=!1,mt=null}else throw Error(t(198));ye||(ye=!0,Qe=pe)}}function St(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Xt(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Jt(n){if(St(n)!==n)throw Error(t(188))}function zi(n){var i=n.alternate;if(!i){if(i=St(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var f=a.return;if(f===null)break;var x=f.alternate;if(x===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===x.child){for(x=f.child;x;){if(x===a)return Jt(f),n;if(x===c)return Jt(f),i;x=x.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=x;else{for(var T=!1,W=f.child;W;){if(W===a){T=!0,a=f,c=x;break}if(W===c){T=!0,c=f,a=x;break}W=W.sibling}if(!T){for(W=x.child;W;){if(W===a){T=!0,a=x,c=f;break}if(W===c){T=!0,c=x,a=f;break}W=W.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function xi(n){return n=zi(n),n!==null?vi(n):null}function vi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=vi(n);if(i!==null)return i;n=n.sibling}return null}var Xr=e.unstable_scheduleCallback,ha=e.unstable_cancelCallback,Yr=e.unstable_shouldYield,dc=e.unstable_requestPaint,nn=e.unstable_now,go=e.unstable_getCurrentPriorityLevel,pa=e.unstable_ImmediatePriority,xo=e.unstable_UserBlockingPriority,_s=e.unstable_NormalPriority,vo=e.unstable_LowPriority,C=e.unstable_IdlePriority,q=null,ce=null;function oe(n){if(ce&&typeof ce.onCommitFiberRoot=="function")try{ce.onCommitFiberRoot(q,n,void 0,(n.current.flags&128)===128)}catch{}}var ae=Math.clz32?Math.clz32:We,je=Math.log,et=Math.LN2;function We(n){return n>>>=0,n===0?32:31-(je(n)/et|0)|0}var Xe=64,nt=4194304;function xt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Et(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,f=n.suspendedLanes,x=n.pingedLanes,T=a&268435455;if(T!==0){var W=T&~f;W!==0?c=xt(W):(x&=T,x!==0&&(c=xt(x)))}else T=a&~f,T!==0?c=xt(T):x!==0&&(c=xt(x));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,x=i&-i,f>=x||f===16&&(x&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-ae(i),f=1<<a,c|=n[a],i&=~f;return c}function it(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ct(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,x=n.pendingLanes;0<x;){var T=31-ae(x),W=1<<T,Z=f[T];Z===-1?((W&a)===0||(W&c)!==0)&&(f[T]=it(W,i)):Z<=i&&(n.expiredLanes|=W),x&=~W}}function rn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Yt(){var n=Xe;return Xe<<=1,(Xe&4194240)===0&&(Xe=64),n}function Wt(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function fn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ae(i),n[i]=a}function rt(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-ae(a),x=1<<f;i[f]=0,c[f]=-1,n[f]=-1,a&=~x}}function _n(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-ae(a),f=1<<c;f&i|n[c]&i&&(n[c]|=i),a&=~f}}var ut=0;function Ui(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var yn,pr,_i,ki,It,pn=!1,zn=[],Gt=null,Kt=null,En=null,mr=new Map,ma=new Map,gr=[],Yg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zf(n,i){switch(n){case"focusin":case"focusout":Gt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":mr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ma.delete(i.pointerId)}}function ga(n,i,a,c,f,x){return n===null||n.nativeEvent!==x?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:x,targetContainers:[f]},i!==null&&(i=Na(i),i!==null&&pr(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function qg(n,i,a,c,f){switch(i){case"focusin":return Gt=ga(Gt,n,i,a,c,f),!0;case"dragenter":return Kt=ga(Kt,n,i,a,c,f),!0;case"mouseover":return En=ga(En,n,i,a,c,f),!0;case"pointerover":var x=f.pointerId;return mr.set(x,ga(mr.get(x)||null,n,i,a,c,f)),!0;case"gotpointercapture":return x=f.pointerId,ma.set(x,ga(ma.get(x)||null,n,i,a,c,f)),!0}return!1}function Uf(n){var i=qr(n.target);if(i!==null){var a=St(i);if(a!==null){if(i=a.tag,i===13){if(i=Xt(a),i!==null){n.blockedOn=i,It(n.priority,function(){_i(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function _o(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=hc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Oe=c,a.target.dispatchEvent(c),Oe=null}else return i=Na(a),i!==null&&pr(i),n.blockedOn=a,!1;i.shift()}return!0}function kf(n,i,a){_o(n)&&a.delete(i)}function Kg(){pn=!1,Gt!==null&&_o(Gt)&&(Gt=null),Kt!==null&&_o(Kt)&&(Kt=null),En!==null&&_o(En)&&(En=null),mr.forEach(kf),ma.forEach(kf)}function xa(n,i){n.blockedOn===i&&(n.blockedOn=null,pn||(pn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Kg)))}function va(n){function i(f){return xa(f,n)}if(0<zn.length){xa(zn[0],n);for(var a=1;a<zn.length;a++){var c=zn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Gt!==null&&xa(Gt,n),Kt!==null&&xa(Kt,n),En!==null&&xa(En,n),mr.forEach(i),ma.forEach(i),a=0;a<gr.length;a++)c=gr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<gr.length&&(a=gr[0],a.blockedOn===null);)Uf(a),a.blockedOn===null&&gr.shift()}var ys=D.ReactCurrentBatchConfig,yo=!0;function Zg(n,i,a,c){var f=ut,x=ys.transition;ys.transition=null;try{ut=1,fc(n,i,a,c)}finally{ut=f,ys.transition=x}}function Jg(n,i,a,c){var f=ut,x=ys.transition;ys.transition=null;try{ut=4,fc(n,i,a,c)}finally{ut=f,ys.transition=x}}function fc(n,i,a,c){if(yo){var f=hc(n,i,a,c);if(f===null)Nc(n,i,c,So,a),zf(n,c);else if(qg(f,n,i,a,c))c.stopPropagation();else if(zf(n,c),i&4&&-1<Yg.indexOf(n)){for(;f!==null;){var x=Na(f);if(x!==null&&yn(x),x=hc(n,i,a,c),x===null&&Nc(n,i,c,So,a),x===f)break;f=x}f!==null&&c.stopPropagation()}else Nc(n,i,c,null,a)}}var So=null;function hc(n,i,a,c){if(So=null,n=me(c),n=qr(n),n!==null)if(i=St(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Xt(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return So=n,null}function Ff(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(go()){case pa:return 1;case xo:return 4;case _s:case vo:return 16;case C:return 536870912;default:return 16}default:return 16}}var xr=null,pc=null,bo=null;function Of(){if(bo)return bo;var n,i=pc,a=i.length,c,f="value"in xr?xr.value:xr.textContent,x=f.length;for(n=0;n<a&&i[n]===f[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===f[x-c];c++);return bo=f.slice(n,1<c?1-c:void 0)}function wo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Mo(){return!0}function Bf(){return!1}function ti(n){function i(a,c,f,x,T){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=x,this.target=T,this.currentTarget=null;for(var W in n)n.hasOwnProperty(W)&&(a=n[W],this[W]=a?a(x):x[W]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Mo:Bf,this.isPropagationStopped=Bf,this}return $(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Mo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Mo)},persist:function(){},isPersistent:Mo}),i}var Ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mc=ti(Ss),_a=$({},Ss,{view:0,detail:0}),Qg=ti(_a),gc,xc,ya,Eo=$({},_a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_c,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ya&&(ya&&n.type==="mousemove"?(gc=n.screenX-ya.screenX,xc=n.screenY-ya.screenY):xc=gc=0,ya=n),gc)},movementY:function(n){return"movementY"in n?n.movementY:xc}}),Hf=ti(Eo),ex=$({},Eo,{dataTransfer:0}),tx=ti(ex),nx=$({},_a,{relatedTarget:0}),vc=ti(nx),ix=$({},Ss,{animationName:0,elapsedTime:0,pseudoElement:0}),rx=ti(ix),sx=$({},Ss,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ax=ti(sx),ox=$({},Ss,{data:0}),Gf=ti(ox),lx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ux={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dx(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=ux[n])?!!i[n]:!1}function _c(){return dx}var fx=$({},_a,{key:function(n){if(n.key){var i=lx[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=wo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?cx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_c,charCode:function(n){return n.type==="keypress"?wo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?wo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),hx=ti(fx),px=$({},Eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vf=ti(px),mx=$({},_a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_c}),gx=ti(mx),xx=$({},Ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),vx=ti(xx),_x=$({},Eo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),yx=ti(_x),Sx=[9,13,27,32],yc=p&&"CompositionEvent"in window,Sa=null;p&&"documentMode"in document&&(Sa=document.documentMode);var bx=p&&"TextEvent"in window&&!Sa,Wf=p&&(!yc||Sa&&8<Sa&&11>=Sa),jf=" ",$f=!1;function Xf(n,i){switch(n){case"keyup":return Sx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var bs=!1;function wx(n,i){switch(n){case"compositionend":return Yf(i);case"keypress":return i.which!==32?null:($f=!0,jf);case"textInput":return n=i.data,n===jf&&$f?null:n;default:return null}}function Mx(n,i){if(bs)return n==="compositionend"||!yc&&Xf(n,i)?(n=Of(),bo=pc=xr=null,bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Wf&&i.locale!=="ko"?null:i.data;default:return null}}var Ex={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Ex[n.type]:i==="textarea"}function Kf(n,i,a,c){ie(c),i=No(i,"onChange"),0<i.length&&(a=new mc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var ba=null,wa=null;function Tx(n){ph(n,0)}function To(n){var i=As(n);if(Me(i))return n}function Ax(n,i){if(n==="change")return i}var Zf=!1;if(p){var Sc;if(p){var bc="oninput"in document;if(!bc){var Jf=document.createElement("div");Jf.setAttribute("oninput","return;"),bc=typeof Jf.oninput=="function"}Sc=bc}else Sc=!1;Zf=Sc&&(!document.documentMode||9<document.documentMode)}function Qf(){ba&&(ba.detachEvent("onpropertychange",eh),wa=ba=null)}function eh(n){if(n.propertyName==="value"&&To(wa)){var i=[];Kf(i,wa,n,me(n)),ft(Tx,i)}}function Cx(n,i,a){n==="focusin"?(Qf(),ba=i,wa=a,ba.attachEvent("onpropertychange",eh)):n==="focusout"&&Qf()}function Rx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return To(wa)}function Nx(n,i){if(n==="click")return To(i)}function Px(n,i){if(n==="input"||n==="change")return To(i)}function Dx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var yi=typeof Object.is=="function"?Object.is:Dx;function Ma(n,i){if(yi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!u.call(i,f)||!yi(n[f],i[f]))return!1}return!0}function th(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function nh(n,i){var a=th(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=th(a)}}function ih(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?ih(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function rh(){for(var n=window,i=Ie();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Ie(n.document)}return i}function wc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Lx(n){var i=rh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&ih(a.ownerDocument.documentElement,a)){if(c!==null&&wc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,x=Math.min(c.start,f);c=c.end===void 0?x:Math.min(c.end,f),!n.extend&&x>c&&(f=c,c=x,x=f),f=nh(a,x);var T=nh(a,c);f&&T&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),x>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Ix=p&&"documentMode"in document&&11>=document.documentMode,ws=null,Mc=null,Ea=null,Ec=!1;function sh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ec||ws==null||ws!==Ie(c)||(c=ws,"selectionStart"in c&&wc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ea&&Ma(Ea,c)||(Ea=c,c=No(Mc,"onSelect"),0<c.length&&(i=new mc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=ws)))}function Ao(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ms={animationend:Ao("Animation","AnimationEnd"),animationiteration:Ao("Animation","AnimationIteration"),animationstart:Ao("Animation","AnimationStart"),transitionend:Ao("Transition","TransitionEnd")},Tc={},ah={};p&&(ah=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Co(n){if(Tc[n])return Tc[n];if(!Ms[n])return n;var i=Ms[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in ah)return Tc[n]=i[a];return n}var oh=Co("animationend"),lh=Co("animationiteration"),ch=Co("animationstart"),uh=Co("transitionend"),dh=new Map,fh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(n,i){dh.set(n,i),l(i,[n])}for(var Ac=0;Ac<fh.length;Ac++){var Cc=fh[Ac],zx=Cc.toLowerCase(),Ux=Cc[0].toUpperCase()+Cc.slice(1);vr(zx,"on"+Ux)}vr(oh,"onAnimationEnd"),vr(lh,"onAnimationIteration"),vr(ch,"onAnimationStart"),vr("dblclick","onDoubleClick"),vr("focusin","onFocus"),vr("focusout","onBlur"),vr(uh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ta));function hh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Pt(c,i,void 0,n),n.currentTarget=null}function ph(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],f=c.event;c=c.listeners;e:{var x=void 0;if(i)for(var T=c.length-1;0<=T;T--){var W=c[T],Z=W.instance,pe=W.currentTarget;if(W=W.listener,Z!==x&&f.isPropagationStopped())break e;hh(f,W,pe),x=Z}else for(T=0;T<c.length;T++){if(W=c[T],Z=W.instance,pe=W.currentTarget,W=W.listener,Z!==x&&f.isPropagationStopped())break e;hh(f,W,pe),x=Z}}}if(ye)throw n=Qe,ye=!1,Qe=null,n}function en(n,i){var a=i[Uc];a===void 0&&(a=i[Uc]=new Set);var c=n+"__bubble";a.has(c)||(mh(i,n,2,!1),a.add(c))}function Rc(n,i,a){var c=0;i&&(c|=4),mh(a,n,c,i)}var Ro="_reactListening"+Math.random().toString(36).slice(2);function Aa(n){if(!n[Ro]){n[Ro]=!0,r.forEach(function(a){a!=="selectionchange"&&(kx.has(a)||Rc(a,!1,n),Rc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ro]||(i[Ro]=!0,Rc("selectionchange",!1,i))}}function mh(n,i,a,c){switch(Ff(i)){case 1:var f=Zg;break;case 4:f=Jg;break;default:f=fc}a=f.bind(null,i,a,n),f=void 0,!Ke||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function Nc(n,i,a,c,f){var x=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var W=c.stateNode.containerInfo;if(W===f||W.nodeType===8&&W.parentNode===f)break;if(T===4)for(T=c.return;T!==null;){var Z=T.tag;if((Z===3||Z===4)&&(Z=T.stateNode.containerInfo,Z===f||Z.nodeType===8&&Z.parentNode===f))return;T=T.return}for(;W!==null;){if(T=qr(W),T===null)return;if(Z=T.tag,Z===5||Z===6){c=x=T;continue e}W=W.parentNode}}c=c.return}ft(function(){var pe=x,Le=me(a),Fe=[];e:{var De=dh.get(n);if(De!==void 0){var Je=mc,at=n;switch(n){case"keypress":if(wo(a)===0)break e;case"keydown":case"keyup":Je=hx;break;case"focusin":at="focus",Je=vc;break;case"focusout":at="blur",Je=vc;break;case"beforeblur":case"afterblur":Je=vc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Je=Hf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Je=tx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Je=gx;break;case oh:case lh:case ch:Je=rx;break;case uh:Je=vx;break;case"scroll":Je=Qg;break;case"wheel":Je=yx;break;case"copy":case"cut":case"paste":Je=ax;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Je=Vf}var ct=(i&4)!==0,mn=!ct&&n==="scroll",le=ct?De!==null?De+"Capture":null:De;ct=[];for(var te=pe,ue;te!==null;){ue=te;var He=ue.stateNode;if(ue.tag===5&&He!==null&&(ue=He,le!==null&&(He=Ce(te,le),He!=null&&ct.push(Ca(te,He,ue)))),mn)break;te=te.return}0<ct.length&&(De=new Je(De,at,null,a,Le),Fe.push({event:De,listeners:ct}))}}if((i&7)===0){e:{if(De=n==="mouseover"||n==="pointerover",Je=n==="mouseout"||n==="pointerout",De&&a!==Oe&&(at=a.relatedTarget||a.fromElement)&&(qr(at)||at[Zi]))break e;if((Je||De)&&(De=Le.window===Le?Le:(De=Le.ownerDocument)?De.defaultView||De.parentWindow:window,Je?(at=a.relatedTarget||a.toElement,Je=pe,at=at?qr(at):null,at!==null&&(mn=St(at),at!==mn||at.tag!==5&&at.tag!==6)&&(at=null)):(Je=null,at=pe),Je!==at)){if(ct=Hf,He="onMouseLeave",le="onMouseEnter",te="mouse",(n==="pointerout"||n==="pointerover")&&(ct=Vf,He="onPointerLeave",le="onPointerEnter",te="pointer"),mn=Je==null?De:As(Je),ue=at==null?De:As(at),De=new ct(He,te+"leave",Je,a,Le),De.target=mn,De.relatedTarget=ue,He=null,qr(Le)===pe&&(ct=new ct(le,te+"enter",at,a,Le),ct.target=ue,ct.relatedTarget=mn,He=ct),mn=He,Je&&at)t:{for(ct=Je,le=at,te=0,ue=ct;ue;ue=Es(ue))te++;for(ue=0,He=le;He;He=Es(He))ue++;for(;0<te-ue;)ct=Es(ct),te--;for(;0<ue-te;)le=Es(le),ue--;for(;te--;){if(ct===le||le!==null&&ct===le.alternate)break t;ct=Es(ct),le=Es(le)}ct=null}else ct=null;Je!==null&&gh(Fe,De,Je,ct,!1),at!==null&&mn!==null&&gh(Fe,mn,at,ct,!0)}}e:{if(De=pe?As(pe):window,Je=De.nodeName&&De.nodeName.toLowerCase(),Je==="select"||Je==="input"&&De.type==="file")var dt=Ax;else if(qf(De))if(Zf)dt=Px;else{dt=Rx;var ht=Cx}else(Je=De.nodeName)&&Je.toLowerCase()==="input"&&(De.type==="checkbox"||De.type==="radio")&&(dt=Nx);if(dt&&(dt=dt(n,pe))){Kf(Fe,dt,a,Le);break e}ht&&ht(n,De,pe),n==="focusout"&&(ht=De._wrapperState)&&ht.controlled&&De.type==="number"&&an(De,"number",De.value)}switch(ht=pe?As(pe):window,n){case"focusin":(qf(ht)||ht.contentEditable==="true")&&(ws=ht,Mc=pe,Ea=null);break;case"focusout":Ea=Mc=ws=null;break;case"mousedown":Ec=!0;break;case"contextmenu":case"mouseup":case"dragend":Ec=!1,sh(Fe,a,Le);break;case"selectionchange":if(Ix)break;case"keydown":case"keyup":sh(Fe,a,Le)}var pt;if(yc)e:{switch(n){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else bs?Xf(n,a)&&(yt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(yt="onCompositionStart");yt&&(Wf&&a.locale!=="ko"&&(bs||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&bs&&(pt=Of()):(xr=Le,pc="value"in xr?xr.value:xr.textContent,bs=!0)),ht=No(pe,yt),0<ht.length&&(yt=new Gf(yt,n,null,a,Le),Fe.push({event:yt,listeners:ht}),pt?yt.data=pt:(pt=Yf(a),pt!==null&&(yt.data=pt)))),(pt=bx?wx(n,a):Mx(n,a))&&(pe=No(pe,"onBeforeInput"),0<pe.length&&(Le=new Gf("onBeforeInput","beforeinput",null,a,Le),Fe.push({event:Le,listeners:pe}),Le.data=pt))}ph(Fe,i)})}function Ca(n,i,a){return{instance:n,listener:i,currentTarget:a}}function No(n,i){for(var a=i+"Capture",c=[];n!==null;){var f=n,x=f.stateNode;f.tag===5&&x!==null&&(f=x,x=Ce(n,a),x!=null&&c.unshift(Ca(n,x,f)),x=Ce(n,i),x!=null&&c.push(Ca(n,x,f))),n=n.return}return c}function Es(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function gh(n,i,a,c,f){for(var x=i._reactName,T=[];a!==null&&a!==c;){var W=a,Z=W.alternate,pe=W.stateNode;if(Z!==null&&Z===c)break;W.tag===5&&pe!==null&&(W=pe,f?(Z=Ce(a,x),Z!=null&&T.unshift(Ca(a,Z,W))):f||(Z=Ce(a,x),Z!=null&&T.push(Ca(a,Z,W)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var Fx=/\r\n?/g,Ox=/\u0000|\uFFFD/g;function xh(n){return(typeof n=="string"?n:""+n).replace(Fx,`
`).replace(Ox,"")}function Po(n,i,a){if(i=xh(i),xh(n)!==i&&a)throw Error(t(425))}function Do(){}var Pc=null,Dc=null;function Lc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ic=typeof setTimeout=="function"?setTimeout:void 0,Bx=typeof clearTimeout=="function"?clearTimeout:void 0,vh=typeof Promise=="function"?Promise:void 0,Hx=typeof queueMicrotask=="function"?queueMicrotask:typeof vh<"u"?function(n){return vh.resolve(null).then(n).catch(Gx)}:Ic;function Gx(n){setTimeout(function(){throw n})}function zc(n,i){var a=i,c=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){n.removeChild(f),va(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);va(i)}function _r(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function _h(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ts=Math.random().toString(36).slice(2),Fi="__reactFiber$"+Ts,Ra="__reactProps$"+Ts,Zi="__reactContainer$"+Ts,Uc="__reactEvents$"+Ts,Vx="__reactListeners$"+Ts,Wx="__reactHandles$"+Ts;function qr(n){var i=n[Fi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Zi]||a[Fi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=_h(n);n!==null;){if(a=n[Fi])return a;n=_h(n)}return i}n=a,a=n.parentNode}return null}function Na(n){return n=n[Fi]||n[Zi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function As(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Lo(n){return n[Ra]||null}var kc=[],Cs=-1;function yr(n){return{current:n}}function tn(n){0>Cs||(n.current=kc[Cs],kc[Cs]=null,Cs--)}function Qt(n,i){Cs++,kc[Cs]=n.current,n.current=i}var Sr={},Un=yr(Sr),Xn=yr(!1),Kr=Sr;function Rs(n,i){var a=n.type.contextTypes;if(!a)return Sr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},x;for(x in a)f[x]=i[x];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Yn(n){return n=n.childContextTypes,n!=null}function Io(){tn(Xn),tn(Un)}function yh(n,i,a){if(Un.current!==Sr)throw Error(t(168));Qt(Un,i),Qt(Xn,a)}function Sh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,Ne(n)||"Unknown",f));return $({},a,c)}function zo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Sr,Kr=Un.current,Qt(Un,n),Qt(Xn,Xn.current),!0}function bh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Sh(n,i,Kr),c.__reactInternalMemoizedMergedChildContext=n,tn(Xn),tn(Un),Qt(Un,n)):tn(Xn),Qt(Xn,a)}var Ji=null,Uo=!1,Fc=!1;function wh(n){Ji===null?Ji=[n]:Ji.push(n)}function jx(n){Uo=!0,wh(n)}function br(){if(!Fc&&Ji!==null){Fc=!0;var n=0,i=ut;try{var a=Ji;for(ut=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Ji=null,Uo=!1}catch(f){throw Ji!==null&&(Ji=Ji.slice(n+1)),Xr(pa,br),f}finally{ut=i,Fc=!1}}return null}var Ns=[],Ps=0,ko=null,Fo=0,ci=[],ui=0,Zr=null,Qi=1,er="";function Jr(n,i){Ns[Ps++]=Fo,Ns[Ps++]=ko,ko=n,Fo=i}function Mh(n,i,a){ci[ui++]=Qi,ci[ui++]=er,ci[ui++]=Zr,Zr=n;var c=Qi;n=er;var f=32-ae(c)-1;c&=~(1<<f),a+=1;var x=32-ae(i)+f;if(30<x){var T=f-f%5;x=(c&(1<<T)-1).toString(32),c>>=T,f-=T,Qi=1<<32-ae(i)+f|a<<f|c,er=x+n}else Qi=1<<x|a<<f|c,er=n}function Oc(n){n.return!==null&&(Jr(n,1),Mh(n,1,0))}function Bc(n){for(;n===ko;)ko=Ns[--Ps],Ns[Ps]=null,Fo=Ns[--Ps],Ns[Ps]=null;for(;n===Zr;)Zr=ci[--ui],ci[ui]=null,er=ci[--ui],ci[ui]=null,Qi=ci[--ui],ci[ui]=null}var ni=null,ii=null,sn=!1,Si=null;function Eh(n,i){var a=pi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Th(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ni=n,ii=_r(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ni=n,ii=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Zr!==null?{id:Qi,overflow:er}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=pi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,ni=n,ii=null,!0):!1;default:return!1}}function Hc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Gc(n){if(sn){var i=ii;if(i){var a=i;if(!Th(n,i)){if(Hc(n))throw Error(t(418));i=_r(a.nextSibling);var c=ni;i&&Th(n,i)?Eh(c,a):(n.flags=n.flags&-4097|2,sn=!1,ni=n)}}else{if(Hc(n))throw Error(t(418));n.flags=n.flags&-4097|2,sn=!1,ni=n}}}function Ah(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ni=n}function Oo(n){if(n!==ni)return!1;if(!sn)return Ah(n),sn=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Lc(n.type,n.memoizedProps)),i&&(i=ii)){if(Hc(n))throw Ch(),Error(t(418));for(;i;)Eh(n,i),i=_r(i.nextSibling)}if(Ah(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){ii=_r(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}ii=null}}else ii=ni?_r(n.stateNode.nextSibling):null;return!0}function Ch(){for(var n=ii;n;)n=_r(n.nextSibling)}function Ds(){ii=ni=null,sn=!1}function Vc(n){Si===null?Si=[n]:Si.push(n)}var $x=D.ReactCurrentBatchConfig;function Pa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var f=c,x=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===x?i.ref:(i=function(T){var W=f.refs;T===null?delete W[x]:W[x]=T},i._stringRef=x,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Bo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Rh(n){var i=n._init;return i(n._payload)}function Nh(n){function i(le,te){if(n){var ue=le.deletions;ue===null?(le.deletions=[te],le.flags|=16):ue.push(te)}}function a(le,te){if(!n)return null;for(;te!==null;)i(le,te),te=te.sibling;return null}function c(le,te){for(le=new Map;te!==null;)te.key!==null?le.set(te.key,te):le.set(te.index,te),te=te.sibling;return le}function f(le,te){return le=Nr(le,te),le.index=0,le.sibling=null,le}function x(le,te,ue){return le.index=ue,n?(ue=le.alternate,ue!==null?(ue=ue.index,ue<te?(le.flags|=2,te):ue):(le.flags|=2,te)):(le.flags|=1048576,te)}function T(le){return n&&le.alternate===null&&(le.flags|=2),le}function W(le,te,ue,He){return te===null||te.tag!==6?(te=Iu(ue,le.mode,He),te.return=le,te):(te=f(te,ue),te.return=le,te)}function Z(le,te,ue,He){var dt=ue.type;return dt===w?Le(le,te,ue.props.children,He,ue.key):te!==null&&(te.elementType===dt||typeof dt=="object"&&dt!==null&&dt.$$typeof===se&&Rh(dt)===te.type)?(He=f(te,ue.props),He.ref=Pa(le,te,ue),He.return=le,He):(He=ul(ue.type,ue.key,ue.props,null,le.mode,He),He.ref=Pa(le,te,ue),He.return=le,He)}function pe(le,te,ue,He){return te===null||te.tag!==4||te.stateNode.containerInfo!==ue.containerInfo||te.stateNode.implementation!==ue.implementation?(te=zu(ue,le.mode,He),te.return=le,te):(te=f(te,ue.children||[]),te.return=le,te)}function Le(le,te,ue,He,dt){return te===null||te.tag!==7?(te=as(ue,le.mode,He,dt),te.return=le,te):(te=f(te,ue),te.return=le,te)}function Fe(le,te,ue){if(typeof te=="string"&&te!==""||typeof te=="number")return te=Iu(""+te,le.mode,ue),te.return=le,te;if(typeof te=="object"&&te!==null){switch(te.$$typeof){case U:return ue=ul(te.type,te.key,te.props,null,le.mode,ue),ue.ref=Pa(le,null,te),ue.return=le,ue;case L:return te=zu(te,le.mode,ue),te.return=le,te;case se:var He=te._init;return Fe(le,He(te._payload),ue)}if(Dt(te)||G(te))return te=as(te,le.mode,ue,null),te.return=le,te;Bo(le,te)}return null}function De(le,te,ue,He){var dt=te!==null?te.key:null;if(typeof ue=="string"&&ue!==""||typeof ue=="number")return dt!==null?null:W(le,te,""+ue,He);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case U:return ue.key===dt?Z(le,te,ue,He):null;case L:return ue.key===dt?pe(le,te,ue,He):null;case se:return dt=ue._init,De(le,te,dt(ue._payload),He)}if(Dt(ue)||G(ue))return dt!==null?null:Le(le,te,ue,He,null);Bo(le,ue)}return null}function Je(le,te,ue,He,dt){if(typeof He=="string"&&He!==""||typeof He=="number")return le=le.get(ue)||null,W(te,le,""+He,dt);if(typeof He=="object"&&He!==null){switch(He.$$typeof){case U:return le=le.get(He.key===null?ue:He.key)||null,Z(te,le,He,dt);case L:return le=le.get(He.key===null?ue:He.key)||null,pe(te,le,He,dt);case se:var ht=He._init;return Je(le,te,ue,ht(He._payload),dt)}if(Dt(He)||G(He))return le=le.get(ue)||null,Le(te,le,He,dt,null);Bo(te,He)}return null}function at(le,te,ue,He){for(var dt=null,ht=null,pt=te,yt=te=0,Cn=null;pt!==null&&yt<ue.length;yt++){pt.index>yt?(Cn=pt,pt=null):Cn=pt.sibling;var Vt=De(le,pt,ue[yt],He);if(Vt===null){pt===null&&(pt=Cn);break}n&&pt&&Vt.alternate===null&&i(le,pt),te=x(Vt,te,yt),ht===null?dt=Vt:ht.sibling=Vt,ht=Vt,pt=Cn}if(yt===ue.length)return a(le,pt),sn&&Jr(le,yt),dt;if(pt===null){for(;yt<ue.length;yt++)pt=Fe(le,ue[yt],He),pt!==null&&(te=x(pt,te,yt),ht===null?dt=pt:ht.sibling=pt,ht=pt);return sn&&Jr(le,yt),dt}for(pt=c(le,pt);yt<ue.length;yt++)Cn=Je(pt,le,yt,ue[yt],He),Cn!==null&&(n&&Cn.alternate!==null&&pt.delete(Cn.key===null?yt:Cn.key),te=x(Cn,te,yt),ht===null?dt=Cn:ht.sibling=Cn,ht=Cn);return n&&pt.forEach(function(Pr){return i(le,Pr)}),sn&&Jr(le,yt),dt}function ct(le,te,ue,He){var dt=G(ue);if(typeof dt!="function")throw Error(t(150));if(ue=dt.call(ue),ue==null)throw Error(t(151));for(var ht=dt=null,pt=te,yt=te=0,Cn=null,Vt=ue.next();pt!==null&&!Vt.done;yt++,Vt=ue.next()){pt.index>yt?(Cn=pt,pt=null):Cn=pt.sibling;var Pr=De(le,pt,Vt.value,He);if(Pr===null){pt===null&&(pt=Cn);break}n&&pt&&Pr.alternate===null&&i(le,pt),te=x(Pr,te,yt),ht===null?dt=Pr:ht.sibling=Pr,ht=Pr,pt=Cn}if(Vt.done)return a(le,pt),sn&&Jr(le,yt),dt;if(pt===null){for(;!Vt.done;yt++,Vt=ue.next())Vt=Fe(le,Vt.value,He),Vt!==null&&(te=x(Vt,te,yt),ht===null?dt=Vt:ht.sibling=Vt,ht=Vt);return sn&&Jr(le,yt),dt}for(pt=c(le,pt);!Vt.done;yt++,Vt=ue.next())Vt=Je(pt,le,yt,Vt.value,He),Vt!==null&&(n&&Vt.alternate!==null&&pt.delete(Vt.key===null?yt:Vt.key),te=x(Vt,te,yt),ht===null?dt=Vt:ht.sibling=Vt,ht=Vt);return n&&pt.forEach(function(Ev){return i(le,Ev)}),sn&&Jr(le,yt),dt}function mn(le,te,ue,He){if(typeof ue=="object"&&ue!==null&&ue.type===w&&ue.key===null&&(ue=ue.props.children),typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case U:e:{for(var dt=ue.key,ht=te;ht!==null;){if(ht.key===dt){if(dt=ue.type,dt===w){if(ht.tag===7){a(le,ht.sibling),te=f(ht,ue.props.children),te.return=le,le=te;break e}}else if(ht.elementType===dt||typeof dt=="object"&&dt!==null&&dt.$$typeof===se&&Rh(dt)===ht.type){a(le,ht.sibling),te=f(ht,ue.props),te.ref=Pa(le,ht,ue),te.return=le,le=te;break e}a(le,ht);break}else i(le,ht);ht=ht.sibling}ue.type===w?(te=as(ue.props.children,le.mode,He,ue.key),te.return=le,le=te):(He=ul(ue.type,ue.key,ue.props,null,le.mode,He),He.ref=Pa(le,te,ue),He.return=le,le=He)}return T(le);case L:e:{for(ht=ue.key;te!==null;){if(te.key===ht)if(te.tag===4&&te.stateNode.containerInfo===ue.containerInfo&&te.stateNode.implementation===ue.implementation){a(le,te.sibling),te=f(te,ue.children||[]),te.return=le,le=te;break e}else{a(le,te);break}else i(le,te);te=te.sibling}te=zu(ue,le.mode,He),te.return=le,le=te}return T(le);case se:return ht=ue._init,mn(le,te,ht(ue._payload),He)}if(Dt(ue))return at(le,te,ue,He);if(G(ue))return ct(le,te,ue,He);Bo(le,ue)}return typeof ue=="string"&&ue!==""||typeof ue=="number"?(ue=""+ue,te!==null&&te.tag===6?(a(le,te.sibling),te=f(te,ue),te.return=le,le=te):(a(le,te),te=Iu(ue,le.mode,He),te.return=le,le=te),T(le)):a(le,te)}return mn}var Ls=Nh(!0),Ph=Nh(!1),Ho=yr(null),Go=null,Is=null,Wc=null;function jc(){Wc=Is=Go=null}function $c(n){var i=Ho.current;tn(Ho),n._currentValue=i}function Xc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function zs(n,i){Go=n,Wc=Is=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(qn=!0),n.firstContext=null)}function di(n){var i=n._currentValue;if(Wc!==n)if(n={context:n,memoizedValue:i,next:null},Is===null){if(Go===null)throw Error(t(308));Is=n,Go.dependencies={lanes:0,firstContext:n}}else Is=Is.next=n;return i}var Qr=null;function Yc(n){Qr===null?Qr=[n]:Qr.push(n)}function Dh(n,i,a,c){var f=i.interleaved;return f===null?(a.next=a,Yc(i)):(a.next=f.next,f.next=a),i.interleaved=a,tr(n,c)}function tr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var wr=!1;function qc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function nr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Mr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ht&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,tr(n,a)}return f=c.interleaved,f===null?(i.next=i,Yc(c)):(i.next=f.next,f.next=i),c.interleaved=i,tr(n,a)}function Vo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,_n(n,a)}}function Ih(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,x=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};x===null?f=x=T:x=x.next=T,a=a.next}while(a!==null);x===null?f=x=i:x=x.next=i}else f=x=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:x,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Wo(n,i,a,c){var f=n.updateQueue;wr=!1;var x=f.firstBaseUpdate,T=f.lastBaseUpdate,W=f.shared.pending;if(W!==null){f.shared.pending=null;var Z=W,pe=Z.next;Z.next=null,T===null?x=pe:T.next=pe,T=Z;var Le=n.alternate;Le!==null&&(Le=Le.updateQueue,W=Le.lastBaseUpdate,W!==T&&(W===null?Le.firstBaseUpdate=pe:W.next=pe,Le.lastBaseUpdate=Z))}if(x!==null){var Fe=f.baseState;T=0,Le=pe=Z=null,W=x;do{var De=W.lane,Je=W.eventTime;if((c&De)===De){Le!==null&&(Le=Le.next={eventTime:Je,lane:0,tag:W.tag,payload:W.payload,callback:W.callback,next:null});e:{var at=n,ct=W;switch(De=i,Je=a,ct.tag){case 1:if(at=ct.payload,typeof at=="function"){Fe=at.call(Je,Fe,De);break e}Fe=at;break e;case 3:at.flags=at.flags&-65537|128;case 0:if(at=ct.payload,De=typeof at=="function"?at.call(Je,Fe,De):at,De==null)break e;Fe=$({},Fe,De);break e;case 2:wr=!0}}W.callback!==null&&W.lane!==0&&(n.flags|=64,De=f.effects,De===null?f.effects=[W]:De.push(W))}else Je={eventTime:Je,lane:De,tag:W.tag,payload:W.payload,callback:W.callback,next:null},Le===null?(pe=Le=Je,Z=Fe):Le=Le.next=Je,T|=De;if(W=W.next,W===null){if(W=f.shared.pending,W===null)break;De=W,W=De.next,De.next=null,f.lastBaseUpdate=De,f.shared.pending=null}}while(!0);if(Le===null&&(Z=Fe),f.baseState=Z,f.firstBaseUpdate=pe,f.lastBaseUpdate=Le,i=f.shared.interleaved,i!==null){f=i;do T|=f.lane,f=f.next;while(f!==i)}else x===null&&(f.shared.lanes=0);ns|=T,n.lanes=T,n.memoizedState=Fe}}function zh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Da={},Oi=yr(Da),La=yr(Da),Ia=yr(Da);function es(n){if(n===Da)throw Error(t(174));return n}function Kc(n,i){switch(Qt(Ia,i),Qt(La,n),Qt(Oi,Da),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:kt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=kt(i,n)}tn(Oi),Qt(Oi,i)}function Us(){tn(Oi),tn(La),tn(Ia)}function Uh(n){es(Ia.current);var i=es(Oi.current),a=kt(i,n.type);i!==a&&(Qt(La,n),Qt(Oi,a))}function Zc(n){La.current===n&&(tn(Oi),tn(La))}var ln=yr(0);function jo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Jc=[];function Qc(){for(var n=0;n<Jc.length;n++)Jc[n]._workInProgressVersionPrimary=null;Jc.length=0}var $o=D.ReactCurrentDispatcher,eu=D.ReactCurrentBatchConfig,ts=0,cn=null,Sn=null,Tn=null,Xo=!1,za=!1,Ua=0,Xx=0;function kn(){throw Error(t(321))}function tu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!yi(n[a],i[a]))return!1;return!0}function nu(n,i,a,c,f,x){if(ts=x,cn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,$o.current=n===null||n.memoizedState===null?Zx:Jx,n=a(c,f),za){x=0;do{if(za=!1,Ua=0,25<=x)throw Error(t(301));x+=1,Tn=Sn=null,i.updateQueue=null,$o.current=Qx,n=a(c,f)}while(za)}if($o.current=Ko,i=Sn!==null&&Sn.next!==null,ts=0,Tn=Sn=cn=null,Xo=!1,i)throw Error(t(300));return n}function iu(){var n=Ua!==0;return Ua=0,n}function Bi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tn===null?cn.memoizedState=Tn=n:Tn=Tn.next=n,Tn}function fi(){if(Sn===null){var n=cn.alternate;n=n!==null?n.memoizedState:null}else n=Sn.next;var i=Tn===null?cn.memoizedState:Tn.next;if(i!==null)Tn=i,Sn=n;else{if(n===null)throw Error(t(310));Sn=n,n={memoizedState:Sn.memoizedState,baseState:Sn.baseState,baseQueue:Sn.baseQueue,queue:Sn.queue,next:null},Tn===null?cn.memoizedState=Tn=n:Tn=Tn.next=n}return Tn}function ka(n,i){return typeof i=="function"?i(n):i}function ru(n){var i=fi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Sn,f=c.baseQueue,x=a.pending;if(x!==null){if(f!==null){var T=f.next;f.next=x.next,x.next=T}c.baseQueue=f=x,a.pending=null}if(f!==null){x=f.next,c=c.baseState;var W=T=null,Z=null,pe=x;do{var Le=pe.lane;if((ts&Le)===Le)Z!==null&&(Z=Z.next={lane:0,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),c=pe.hasEagerState?pe.eagerState:n(c,pe.action);else{var Fe={lane:Le,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null};Z===null?(W=Z=Fe,T=c):Z=Z.next=Fe,cn.lanes|=Le,ns|=Le}pe=pe.next}while(pe!==null&&pe!==x);Z===null?T=c:Z.next=W,yi(c,i.memoizedState)||(qn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=Z,a.lastRenderedState=c}if(n=a.interleaved,n!==null){f=n;do x=f.lane,cn.lanes|=x,ns|=x,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function su(n){var i=fi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,f=a.pending,x=i.memoizedState;if(f!==null){a.pending=null;var T=f=f.next;do x=n(x,T.action),T=T.next;while(T!==f);yi(x,i.memoizedState)||(qn=!0),i.memoizedState=x,i.baseQueue===null&&(i.baseState=x),a.lastRenderedState=x}return[x,c]}function kh(){}function Fh(n,i){var a=cn,c=fi(),f=i(),x=!yi(c.memoizedState,f);if(x&&(c.memoizedState=f,qn=!0),c=c.queue,au(Hh.bind(null,a,c,n),[n]),c.getSnapshot!==i||x||Tn!==null&&Tn.memoizedState.tag&1){if(a.flags|=2048,Fa(9,Bh.bind(null,a,c,f,i),void 0,null),An===null)throw Error(t(349));(ts&30)!==0||Oh(a,i,f)}return f}function Oh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=cn.updateQueue,i===null?(i={lastEffect:null,stores:null},cn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Bh(n,i,a,c){i.value=a,i.getSnapshot=c,Gh(i)&&Vh(n)}function Hh(n,i,a){return a(function(){Gh(i)&&Vh(n)})}function Gh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!yi(n,a)}catch{return!0}}function Vh(n){var i=tr(n,1);i!==null&&Ei(i,n,1,-1)}function Wh(n){var i=Bi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:n},i.queue=n,n=n.dispatch=Kx.bind(null,cn,n),[i.memoizedState,n]}function Fa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=cn.updateQueue,i===null?(i={lastEffect:null,stores:null},cn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function jh(){return fi().memoizedState}function Yo(n,i,a,c){var f=Bi();cn.flags|=n,f.memoizedState=Fa(1|i,a,void 0,c===void 0?null:c)}function qo(n,i,a,c){var f=fi();c=c===void 0?null:c;var x=void 0;if(Sn!==null){var T=Sn.memoizedState;if(x=T.destroy,c!==null&&tu(c,T.deps)){f.memoizedState=Fa(i,a,x,c);return}}cn.flags|=n,f.memoizedState=Fa(1|i,a,x,c)}function $h(n,i){return Yo(8390656,8,n,i)}function au(n,i){return qo(2048,8,n,i)}function Xh(n,i){return qo(4,2,n,i)}function Yh(n,i){return qo(4,4,n,i)}function qh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Kh(n,i,a){return a=a!=null?a.concat([n]):null,qo(4,4,qh.bind(null,i,n),a)}function ou(){}function Zh(n,i){var a=fi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&tu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Jh(n,i){var a=fi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&tu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Qh(n,i,a){return(ts&21)===0?(n.baseState&&(n.baseState=!1,qn=!0),n.memoizedState=a):(yi(a,i)||(a=Yt(),cn.lanes|=a,ns|=a,n.baseState=!0),i)}function Yx(n,i){var a=ut;ut=a!==0&&4>a?a:4,n(!0);var c=eu.transition;eu.transition={};try{n(!1),i()}finally{ut=a,eu.transition=c}}function ep(){return fi().memoizedState}function qx(n,i,a){var c=Cr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},tp(n))np(i,a);else if(a=Dh(n,i,a,c),a!==null){var f=jn();Ei(a,n,c,f),ip(a,i,c)}}function Kx(n,i,a){var c=Cr(n),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(tp(n))np(i,f);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=i.lastRenderedReducer,x!==null))try{var T=i.lastRenderedState,W=x(T,a);if(f.hasEagerState=!0,f.eagerState=W,yi(W,T)){var Z=i.interleaved;Z===null?(f.next=f,Yc(i)):(f.next=Z.next,Z.next=f),i.interleaved=f;return}}catch{}finally{}a=Dh(n,i,f,c),a!==null&&(f=jn(),Ei(a,n,c,f),ip(a,i,c))}}function tp(n){var i=n.alternate;return n===cn||i!==null&&i===cn}function np(n,i){za=Xo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function ip(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,_n(n,a)}}var Ko={readContext:di,useCallback:kn,useContext:kn,useEffect:kn,useImperativeHandle:kn,useInsertionEffect:kn,useLayoutEffect:kn,useMemo:kn,useReducer:kn,useRef:kn,useState:kn,useDebugValue:kn,useDeferredValue:kn,useTransition:kn,useMutableSource:kn,useSyncExternalStore:kn,useId:kn,unstable_isNewReconciler:!1},Zx={readContext:di,useCallback:function(n,i){return Bi().memoizedState=[n,i===void 0?null:i],n},useContext:di,useEffect:$h,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Yo(4194308,4,qh.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Yo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Yo(4,2,n,i)},useMemo:function(n,i){var a=Bi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Bi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=qx.bind(null,cn,n),[c.memoizedState,n]},useRef:function(n){var i=Bi();return n={current:n},i.memoizedState=n},useState:Wh,useDebugValue:ou,useDeferredValue:function(n){return Bi().memoizedState=n},useTransition:function(){var n=Wh(!1),i=n[0];return n=Yx.bind(null,n[1]),Bi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=cn,f=Bi();if(sn){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),An===null)throw Error(t(349));(ts&30)!==0||Oh(c,i,a)}f.memoizedState=a;var x={value:a,getSnapshot:i};return f.queue=x,$h(Hh.bind(null,c,x,n),[n]),c.flags|=2048,Fa(9,Bh.bind(null,c,x,a,i),void 0,null),a},useId:function(){var n=Bi(),i=An.identifierPrefix;if(sn){var a=er,c=Qi;a=(c&~(1<<32-ae(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ua++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Xx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Jx={readContext:di,useCallback:Zh,useContext:di,useEffect:au,useImperativeHandle:Kh,useInsertionEffect:Xh,useLayoutEffect:Yh,useMemo:Jh,useReducer:ru,useRef:jh,useState:function(){return ru(ka)},useDebugValue:ou,useDeferredValue:function(n){var i=fi();return Qh(i,Sn.memoizedState,n)},useTransition:function(){var n=ru(ka)[0],i=fi().memoizedState;return[n,i]},useMutableSource:kh,useSyncExternalStore:Fh,useId:ep,unstable_isNewReconciler:!1},Qx={readContext:di,useCallback:Zh,useContext:di,useEffect:au,useImperativeHandle:Kh,useInsertionEffect:Xh,useLayoutEffect:Yh,useMemo:Jh,useReducer:su,useRef:jh,useState:function(){return su(ka)},useDebugValue:ou,useDeferredValue:function(n){var i=fi();return Sn===null?i.memoizedState=n:Qh(i,Sn.memoizedState,n)},useTransition:function(){var n=su(ka)[0],i=fi().memoizedState;return[n,i]},useMutableSource:kh,useSyncExternalStore:Fh,useId:ep,unstable_isNewReconciler:!1};function bi(n,i){if(n&&n.defaultProps){i=$({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function lu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:$({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Zo={isMounted:function(n){return(n=n._reactInternals)?St(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=jn(),f=Cr(n),x=nr(c,f);x.payload=i,a!=null&&(x.callback=a),i=Mr(n,x,f),i!==null&&(Ei(i,n,f,c),Vo(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=jn(),f=Cr(n),x=nr(c,f);x.tag=1,x.payload=i,a!=null&&(x.callback=a),i=Mr(n,x,f),i!==null&&(Ei(i,n,f,c),Vo(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=jn(),c=Cr(n),f=nr(a,c);f.tag=2,i!=null&&(f.callback=i),i=Mr(n,f,c),i!==null&&(Ei(i,n,c,a),Vo(i,n,c))}};function rp(n,i,a,c,f,x,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,x,T):i.prototype&&i.prototype.isPureReactComponent?!Ma(a,c)||!Ma(f,x):!0}function sp(n,i,a){var c=!1,f=Sr,x=i.contextType;return typeof x=="object"&&x!==null?x=di(x):(f=Yn(i)?Kr:Un.current,c=i.contextTypes,x=(c=c!=null)?Rs(n,f):Sr),i=new i(a,x),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Zo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=x),i}function ap(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Zo.enqueueReplaceState(i,i.state,null)}function cu(n,i,a,c){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},qc(n);var x=i.contextType;typeof x=="object"&&x!==null?f.context=di(x):(x=Yn(i)?Kr:Un.current,f.context=Rs(n,x)),f.state=n.memoizedState,x=i.getDerivedStateFromProps,typeof x=="function"&&(lu(n,i,x,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Zo.enqueueReplaceState(f,f.state,null),Wo(n,a,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function ks(n,i){try{var a="",c=i;do a+=ve(c),c=c.return;while(c);var f=a}catch(x){f=`
Error generating stack: `+x.message+`
`+x.stack}return{value:n,source:i,stack:f,digest:null}}function uu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function du(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var ev=typeof WeakMap=="function"?WeakMap:Map;function op(n,i,a){a=nr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){rl||(rl=!0,Tu=c),du(n,i)},a}function lp(n,i,a){a=nr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){du(n,i)}}var x=n.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(a.callback=function(){du(n,i),typeof c!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function cp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new ev;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),n=pv.bind(null,n,i,a),i.then(n,n))}function up(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function dp(n,i,a,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=nr(-1,1),i.tag=2,Mr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var tv=D.ReactCurrentOwner,qn=!1;function Wn(n,i,a,c){i.child=n===null?Ph(i,null,a,c):Ls(i,n.child,a,c)}function fp(n,i,a,c,f){a=a.render;var x=i.ref;return zs(i,f),c=nu(n,i,a,c,x,f),a=iu(),n!==null&&!qn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,ir(n,i,f)):(sn&&a&&Oc(i),i.flags|=1,Wn(n,i,c,f),i.child)}function hp(n,i,a,c,f){if(n===null){var x=a.type;return typeof x=="function"&&!Lu(x)&&x.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=x,pp(n,i,x,c,f)):(n=ul(a.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(x=n.child,(n.lanes&f)===0){var T=x.memoizedProps;if(a=a.compare,a=a!==null?a:Ma,a(T,c)&&n.ref===i.ref)return ir(n,i,f)}return i.flags|=1,n=Nr(x,c),n.ref=i.ref,n.return=i,i.child=n}function pp(n,i,a,c,f){if(n!==null){var x=n.memoizedProps;if(Ma(x,c)&&n.ref===i.ref)if(qn=!1,i.pendingProps=c=x,(n.lanes&f)!==0)(n.flags&131072)!==0&&(qn=!0);else return i.lanes=n.lanes,ir(n,i,f)}return fu(n,i,a,c,f)}function mp(n,i,a){var c=i.pendingProps,f=c.children,x=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qt(Os,ri),ri|=a;else{if((a&1073741824)===0)return n=x!==null?x.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Qt(Os,ri),ri|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=x!==null?x.baseLanes:a,Qt(Os,ri),ri|=c}else x!==null?(c=x.baseLanes|a,i.memoizedState=null):c=a,Qt(Os,ri),ri|=c;return Wn(n,i,f,a),i.child}function gp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function fu(n,i,a,c,f){var x=Yn(a)?Kr:Un.current;return x=Rs(i,x),zs(i,f),a=nu(n,i,a,c,x,f),c=iu(),n!==null&&!qn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,ir(n,i,f)):(sn&&c&&Oc(i),i.flags|=1,Wn(n,i,a,f),i.child)}function xp(n,i,a,c,f){if(Yn(a)){var x=!0;zo(i)}else x=!1;if(zs(i,f),i.stateNode===null)Qo(n,i),sp(i,a,c),cu(i,a,c,f),c=!0;else if(n===null){var T=i.stateNode,W=i.memoizedProps;T.props=W;var Z=T.context,pe=a.contextType;typeof pe=="object"&&pe!==null?pe=di(pe):(pe=Yn(a)?Kr:Un.current,pe=Rs(i,pe));var Le=a.getDerivedStateFromProps,Fe=typeof Le=="function"||typeof T.getSnapshotBeforeUpdate=="function";Fe||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(W!==c||Z!==pe)&&ap(i,T,c,pe),wr=!1;var De=i.memoizedState;T.state=De,Wo(i,c,T,f),Z=i.memoizedState,W!==c||De!==Z||Xn.current||wr?(typeof Le=="function"&&(lu(i,a,Le,c),Z=i.memoizedState),(W=wr||rp(i,a,W,c,De,Z,pe))?(Fe||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=Z),T.props=c,T.state=Z,T.context=pe,c=W):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,Lh(n,i),W=i.memoizedProps,pe=i.type===i.elementType?W:bi(i.type,W),T.props=pe,Fe=i.pendingProps,De=T.context,Z=a.contextType,typeof Z=="object"&&Z!==null?Z=di(Z):(Z=Yn(a)?Kr:Un.current,Z=Rs(i,Z));var Je=a.getDerivedStateFromProps;(Le=typeof Je=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(W!==Fe||De!==Z)&&ap(i,T,c,Z),wr=!1,De=i.memoizedState,T.state=De,Wo(i,c,T,f);var at=i.memoizedState;W!==Fe||De!==at||Xn.current||wr?(typeof Je=="function"&&(lu(i,a,Je,c),at=i.memoizedState),(pe=wr||rp(i,a,pe,c,De,at,Z)||!1)?(Le||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,at,Z),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,at,Z)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||W===n.memoizedProps&&De===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||W===n.memoizedProps&&De===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=at),T.props=c,T.state=at,T.context=Z,c=pe):(typeof T.componentDidUpdate!="function"||W===n.memoizedProps&&De===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||W===n.memoizedProps&&De===n.memoizedState||(i.flags|=1024),c=!1)}return hu(n,i,a,c,x,f)}function hu(n,i,a,c,f,x){gp(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return f&&bh(i,a,!1),ir(n,i,x);c=i.stateNode,tv.current=i;var W=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=Ls(i,n.child,null,x),i.child=Ls(i,null,W,x)):Wn(n,i,W,x),i.memoizedState=c.state,f&&bh(i,a,!0),i.child}function vp(n){var i=n.stateNode;i.pendingContext?yh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&yh(n,i.context,!1),Kc(n,i.containerInfo)}function _p(n,i,a,c,f){return Ds(),Vc(f),i.flags|=256,Wn(n,i,a,c),i.child}var pu={dehydrated:null,treeContext:null,retryLane:0};function mu(n){return{baseLanes:n,cachePool:null,transitions:null}}function yp(n,i,a){var c=i.pendingProps,f=ln.current,x=!1,T=(i.flags&128)!==0,W;if((W=T)||(W=n!==null&&n.memoizedState===null?!1:(f&2)!==0),W?(x=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Qt(ln,f&1),n===null)return Gc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,x?(c=i.mode,x=i.child,T={mode:"hidden",children:T},(c&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=T):x=dl(T,c,0,null),n=as(n,c,a,null),x.return=i,n.return=i,x.sibling=n,i.child=x,i.child.memoizedState=mu(a),i.memoizedState=pu,n):gu(i,T));if(f=n.memoizedState,f!==null&&(W=f.dehydrated,W!==null))return nv(n,i,T,c,W,f,a);if(x){x=c.fallback,T=i.mode,f=n.child,W=f.sibling;var Z={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=Z,i.deletions=null):(c=Nr(f,Z),c.subtreeFlags=f.subtreeFlags&14680064),W!==null?x=Nr(W,x):(x=as(x,T,a,null),x.flags|=2),x.return=i,c.return=i,c.sibling=x,i.child=c,c=x,x=i.child,T=n.child.memoizedState,T=T===null?mu(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},x.memoizedState=T,x.childLanes=n.childLanes&~a,i.memoizedState=pu,c}return x=n.child,n=x.sibling,c=Nr(x,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function gu(n,i){return i=dl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Jo(n,i,a,c){return c!==null&&Vc(c),Ls(i,n.child,null,a),n=gu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function nv(n,i,a,c,f,x,T){if(a)return i.flags&256?(i.flags&=-257,c=uu(Error(t(422))),Jo(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(x=c.fallback,f=i.mode,c=dl({mode:"visible",children:c.children},f,0,null),x=as(x,f,T,null),x.flags|=2,c.return=i,x.return=i,c.sibling=x,i.child=c,(i.mode&1)!==0&&Ls(i,n.child,null,T),i.child.memoizedState=mu(T),i.memoizedState=pu,x);if((i.mode&1)===0)return Jo(n,i,T,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var W=c.dgst;return c=W,x=Error(t(419)),c=uu(x,c,void 0),Jo(n,i,T,c)}if(W=(T&n.childLanes)!==0,qn||W){if(c=An,c!==null){switch(T&-T){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|T))!==0?0:f,f!==0&&f!==x.retryLane&&(x.retryLane=f,tr(n,f),Ei(c,n,f,-1))}return Du(),c=uu(Error(t(421))),Jo(n,i,T,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=mv.bind(null,n),f._reactRetry=i,null):(n=x.treeContext,ii=_r(f.nextSibling),ni=i,sn=!0,Si=null,n!==null&&(ci[ui++]=Qi,ci[ui++]=er,ci[ui++]=Zr,Qi=n.id,er=n.overflow,Zr=i),i=gu(i,c.children),i.flags|=4096,i)}function Sp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Xc(n.return,i,a)}function xu(n,i,a,c,f){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(x.isBackwards=i,x.rendering=null,x.renderingStartTime=0,x.last=c,x.tail=a,x.tailMode=f)}function bp(n,i,a){var c=i.pendingProps,f=c.revealOrder,x=c.tail;if(Wn(n,i,c.children,a),c=ln.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Sp(n,a,i);else if(n.tag===19)Sp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Qt(ln,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&jo(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),xu(i,!1,f,a,x);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&jo(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}xu(i,!0,a,null,x);break;case"together":xu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Qo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ir(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ns|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Nr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Nr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function iv(n,i,a){switch(i.tag){case 3:vp(i),Ds();break;case 5:Uh(i);break;case 1:Yn(i.type)&&zo(i);break;case 4:Kc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Qt(Ho,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Qt(ln,ln.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?yp(n,i,a):(Qt(ln,ln.current&1),n=ir(n,i,a),n!==null?n.sibling:null);Qt(ln,ln.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return bp(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Qt(ln,ln.current),c)break;return null;case 22:case 23:return i.lanes=0,mp(n,i,a)}return ir(n,i,a)}var wp,vu,Mp,Ep;wp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},vu=function(){},Mp=function(n,i,a,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,es(Oi.current);var x=null;switch(a){case"input":f=Ge(n,f),c=Ge(n,c),x=[];break;case"select":f=$({},f,{value:void 0}),c=$({},c,{value:void 0}),x=[];break;case"textarea":f=Bt(n,f),c=Bt(n,c),x=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Do)}Se(a,c);var T;a=null;for(pe in f)if(!c.hasOwnProperty(pe)&&f.hasOwnProperty(pe)&&f[pe]!=null)if(pe==="style"){var W=f[pe];for(T in W)W.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else pe!=="dangerouslySetInnerHTML"&&pe!=="children"&&pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&pe!=="autoFocus"&&(o.hasOwnProperty(pe)?x||(x=[]):(x=x||[]).push(pe,null));for(pe in c){var Z=c[pe];if(W=f!=null?f[pe]:void 0,c.hasOwnProperty(pe)&&Z!==W&&(Z!=null||W!=null))if(pe==="style")if(W){for(T in W)!W.hasOwnProperty(T)||Z&&Z.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in Z)Z.hasOwnProperty(T)&&W[T]!==Z[T]&&(a||(a={}),a[T]=Z[T])}else a||(x||(x=[]),x.push(pe,a)),a=Z;else pe==="dangerouslySetInnerHTML"?(Z=Z?Z.__html:void 0,W=W?W.__html:void 0,Z!=null&&W!==Z&&(x=x||[]).push(pe,Z)):pe==="children"?typeof Z!="string"&&typeof Z!="number"||(x=x||[]).push(pe,""+Z):pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&(o.hasOwnProperty(pe)?(Z!=null&&pe==="onScroll"&&en("scroll",n),x||W===Z||(x=[])):(x=x||[]).push(pe,Z))}a&&(x=x||[]).push("style",a);var pe=x;(i.updateQueue=pe)&&(i.flags|=4)}},Ep=function(n,i,a,c){a!==c&&(i.flags|=4)};function Oa(n,i){if(!sn)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Fn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function rv(n,i,a){var c=i.pendingProps;switch(Bc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fn(i),null;case 1:return Yn(i.type)&&Io(),Fn(i),null;case 3:return c=i.stateNode,Us(),tn(Xn),tn(Un),Qc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Oo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Si!==null&&(Ru(Si),Si=null))),vu(n,i),Fn(i),null;case 5:Zc(i);var f=es(Ia.current);if(a=i.type,n!==null&&i.stateNode!=null)Mp(n,i,a,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Fn(i),null}if(n=es(Oi.current),Oo(i)){c=i.stateNode,a=i.type;var x=i.memoizedProps;switch(c[Fi]=i,c[Ra]=x,n=(i.mode&1)!==0,a){case"dialog":en("cancel",c),en("close",c);break;case"iframe":case"object":case"embed":en("load",c);break;case"video":case"audio":for(f=0;f<Ta.length;f++)en(Ta[f],c);break;case"source":en("error",c);break;case"img":case"image":case"link":en("error",c),en("load",c);break;case"details":en("toggle",c);break;case"input":gt(c,x),en("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!x.multiple},en("invalid",c);break;case"textarea":on(c,x),en("invalid",c)}Se(a,x),f=null;for(var T in x)if(x.hasOwnProperty(T)){var W=x[T];T==="children"?typeof W=="string"?c.textContent!==W&&(x.suppressHydrationWarning!==!0&&Po(c.textContent,W,n),f=["children",W]):typeof W=="number"&&c.textContent!==""+W&&(x.suppressHydrationWarning!==!0&&Po(c.textContent,W,n),f=["children",""+W]):o.hasOwnProperty(T)&&W!=null&&T==="onScroll"&&en("scroll",c)}switch(a){case"input":Be(c),Ut(c,x,!0);break;case"textarea":Be(c),Zt(c);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(c.onclick=Do)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Lt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[Fi]=i,n[Ra]=c,wp(n,i,!1,!1),i.stateNode=n;e:{switch(T=ke(a,c),a){case"dialog":en("cancel",n),en("close",n),f=c;break;case"iframe":case"object":case"embed":en("load",n),f=c;break;case"video":case"audio":for(f=0;f<Ta.length;f++)en(Ta[f],n);f=c;break;case"source":en("error",n),f=c;break;case"img":case"image":case"link":en("error",n),en("load",n),f=c;break;case"details":en("toggle",n),f=c;break;case"input":gt(n,c),f=Ge(n,c),en("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=$({},c,{value:void 0}),en("invalid",n);break;case"textarea":on(n,c),f=Bt(n,c),en("invalid",n);break;default:f=c}Se(a,f),W=f;for(x in W)if(W.hasOwnProperty(x)){var Z=W[x];x==="style"?ne(n,Z):x==="dangerouslySetInnerHTML"?(Z=Z?Z.__html:void 0,Z!=null&&_t(n,Z)):x==="children"?typeof Z=="string"?(a!=="textarea"||Z!=="")&&Ye(n,Z):typeof Z=="number"&&Ye(n,""+Z):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?Z!=null&&x==="onScroll"&&en("scroll",n):Z!=null&&F(n,x,Z,T))}switch(a){case"input":Be(n),Ut(n,c,!1);break;case"textarea":Be(n),Zt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+_e(c.value));break;case"select":n.multiple=!!c.multiple,x=c.value,x!=null?$t(n,!!c.multiple,x,!1):c.defaultValue!=null&&$t(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Do)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Fn(i),null;case 6:if(n&&i.stateNode!=null)Ep(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=es(Ia.current),es(Oi.current),Oo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Fi]=i,(x=c.nodeValue!==a)&&(n=ni,n!==null))switch(n.tag){case 3:Po(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Po(c.nodeValue,a,(n.mode&1)!==0)}x&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Fi]=i,i.stateNode=c}return Fn(i),null;case 13:if(tn(ln),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(sn&&ii!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Ch(),Ds(),i.flags|=98560,x=!1;else if(x=Oo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!x)throw Error(t(318));if(x=i.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Fi]=i}else Ds(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Fn(i),x=!1}else Si!==null&&(Ru(Si),Si=null),x=!0;if(!x)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(ln.current&1)!==0?bn===0&&(bn=3):Du())),i.updateQueue!==null&&(i.flags|=4),Fn(i),null);case 4:return Us(),vu(n,i),n===null&&Aa(i.stateNode.containerInfo),Fn(i),null;case 10:return $c(i.type._context),Fn(i),null;case 17:return Yn(i.type)&&Io(),Fn(i),null;case 19:if(tn(ln),x=i.memoizedState,x===null)return Fn(i),null;if(c=(i.flags&128)!==0,T=x.rendering,T===null)if(c)Oa(x,!1);else{if(bn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=jo(n),T!==null){for(i.flags|=128,Oa(x,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)x=a,n=c,x.flags&=14680066,T=x.alternate,T===null?(x.childLanes=0,x.lanes=n,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=T.childLanes,x.lanes=T.lanes,x.child=T.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=T.memoizedProps,x.memoizedState=T.memoizedState,x.updateQueue=T.updateQueue,x.type=T.type,n=T.dependencies,x.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Qt(ln,ln.current&1|2),i.child}n=n.sibling}x.tail!==null&&nn()>Bs&&(i.flags|=128,c=!0,Oa(x,!1),i.lanes=4194304)}else{if(!c)if(n=jo(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Oa(x,!0),x.tail===null&&x.tailMode==="hidden"&&!T.alternate&&!sn)return Fn(i),null}else 2*nn()-x.renderingStartTime>Bs&&a!==1073741824&&(i.flags|=128,c=!0,Oa(x,!1),i.lanes=4194304);x.isBackwards?(T.sibling=i.child,i.child=T):(a=x.last,a!==null?a.sibling=T:i.child=T,x.last=T)}return x.tail!==null?(i=x.tail,x.rendering=i,x.tail=i.sibling,x.renderingStartTime=nn(),i.sibling=null,a=ln.current,Qt(ln,c?a&1|2:a&1),i):(Fn(i),null);case 22:case 23:return Pu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ri&1073741824)!==0&&(Fn(i),i.subtreeFlags&6&&(i.flags|=8192)):Fn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function sv(n,i){switch(Bc(i),i.tag){case 1:return Yn(i.type)&&Io(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Us(),tn(Xn),tn(Un),Qc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Zc(i),null;case 13:if(tn(ln),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ds()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return tn(ln),null;case 4:return Us(),null;case 10:return $c(i.type._context),null;case 22:case 23:return Pu(),null;case 24:return null;default:return null}}var el=!1,On=!1,av=typeof WeakSet=="function"?WeakSet:Set,tt=null;function Fs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){hn(n,i,c)}else a.current=null}function _u(n,i,a){try{a()}catch(c){hn(n,i,c)}}var Tp=!1;function ov(n,i){if(Pc=yo,n=rh(),wc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,x=c.focusNode;c=c.focusOffset;try{a.nodeType,x.nodeType}catch{a=null;break e}var T=0,W=-1,Z=-1,pe=0,Le=0,Fe=n,De=null;t:for(;;){for(var Je;Fe!==a||f!==0&&Fe.nodeType!==3||(W=T+f),Fe!==x||c!==0&&Fe.nodeType!==3||(Z=T+c),Fe.nodeType===3&&(T+=Fe.nodeValue.length),(Je=Fe.firstChild)!==null;)De=Fe,Fe=Je;for(;;){if(Fe===n)break t;if(De===a&&++pe===f&&(W=T),De===x&&++Le===c&&(Z=T),(Je=Fe.nextSibling)!==null)break;Fe=De,De=Fe.parentNode}Fe=Je}a=W===-1||Z===-1?null:{start:W,end:Z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Dc={focusedElem:n,selectionRange:a},yo=!1,tt=i;tt!==null;)if(i=tt,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,tt=n;else for(;tt!==null;){i=tt;try{var at=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(at!==null){var ct=at.memoizedProps,mn=at.memoizedState,le=i.stateNode,te=le.getSnapshotBeforeUpdate(i.elementType===i.type?ct:bi(i.type,ct),mn);le.__reactInternalSnapshotBeforeUpdate=te}break;case 3:var ue=i.stateNode.containerInfo;ue.nodeType===1?ue.textContent="":ue.nodeType===9&&ue.documentElement&&ue.removeChild(ue.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(He){hn(i,i.return,He)}if(n=i.sibling,n!==null){n.return=i.return,tt=n;break}tt=i.return}return at=Tp,Tp=!1,at}function Ba(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var x=f.destroy;f.destroy=void 0,x!==void 0&&_u(i,a,x)}f=f.next}while(f!==c)}}function tl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function yu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Ap(n){var i=n.alternate;i!==null&&(n.alternate=null,Ap(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Fi],delete i[Ra],delete i[Uc],delete i[Vx],delete i[Wx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Cp(n){return n.tag===5||n.tag===3||n.tag===4}function Rp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Cp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Su(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Do));else if(c!==4&&(n=n.child,n!==null))for(Su(n,i,a),n=n.sibling;n!==null;)Su(n,i,a),n=n.sibling}function bu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(bu(n,i,a),n=n.sibling;n!==null;)bu(n,i,a),n=n.sibling}var Pn=null,wi=!1;function Er(n,i,a){for(a=a.child;a!==null;)Np(n,i,a),a=a.sibling}function Np(n,i,a){if(ce&&typeof ce.onCommitFiberUnmount=="function")try{ce.onCommitFiberUnmount(q,a)}catch{}switch(a.tag){case 5:On||Fs(a,i);case 6:var c=Pn,f=wi;Pn=null,Er(n,i,a),Pn=c,wi=f,Pn!==null&&(wi?(n=Pn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Pn.removeChild(a.stateNode));break;case 18:Pn!==null&&(wi?(n=Pn,a=a.stateNode,n.nodeType===8?zc(n.parentNode,a):n.nodeType===1&&zc(n,a),va(n)):zc(Pn,a.stateNode));break;case 4:c=Pn,f=wi,Pn=a.stateNode.containerInfo,wi=!0,Er(n,i,a),Pn=c,wi=f;break;case 0:case 11:case 14:case 15:if(!On&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var x=f,T=x.destroy;x=x.tag,T!==void 0&&((x&2)!==0||(x&4)!==0)&&_u(a,i,T),f=f.next}while(f!==c)}Er(n,i,a);break;case 1:if(!On&&(Fs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(W){hn(a,i,W)}Er(n,i,a);break;case 21:Er(n,i,a);break;case 22:a.mode&1?(On=(c=On)||a.memoizedState!==null,Er(n,i,a),On=c):Er(n,i,a);break;default:Er(n,i,a)}}function Pp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new av),i.forEach(function(c){var f=gv.bind(null,n,c);a.has(c)||(a.add(c),c.then(f,f))})}}function Mi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var x=n,T=i,W=T;e:for(;W!==null;){switch(W.tag){case 5:Pn=W.stateNode,wi=!1;break e;case 3:Pn=W.stateNode.containerInfo,wi=!0;break e;case 4:Pn=W.stateNode.containerInfo,wi=!0;break e}W=W.return}if(Pn===null)throw Error(t(160));Np(x,T,f),Pn=null,wi=!1;var Z=f.alternate;Z!==null&&(Z.return=null),f.return=null}catch(pe){hn(f,i,pe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Dp(i,n),i=i.sibling}function Dp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Mi(i,n),Hi(n),c&4){try{Ba(3,n,n.return),tl(3,n)}catch(ct){hn(n,n.return,ct)}try{Ba(5,n,n.return)}catch(ct){hn(n,n.return,ct)}}break;case 1:Mi(i,n),Hi(n),c&512&&a!==null&&Fs(a,a.return);break;case 5:if(Mi(i,n),Hi(n),c&512&&a!==null&&Fs(a,a.return),n.flags&32){var f=n.stateNode;try{Ye(f,"")}catch(ct){hn(n,n.return,ct)}}if(c&4&&(f=n.stateNode,f!=null)){var x=n.memoizedProps,T=a!==null?a.memoizedProps:x,W=n.type,Z=n.updateQueue;if(n.updateQueue=null,Z!==null)try{W==="input"&&x.type==="radio"&&x.name!=null&&vt(f,x),ke(W,T);var pe=ke(W,x);for(T=0;T<Z.length;T+=2){var Le=Z[T],Fe=Z[T+1];Le==="style"?ne(f,Fe):Le==="dangerouslySetInnerHTML"?_t(f,Fe):Le==="children"?Ye(f,Fe):F(f,Le,Fe,pe)}switch(W){case"input":Mt(f,x);break;case"textarea":Q(f,x);break;case"select":var De=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!x.multiple;var Je=x.value;Je!=null?$t(f,!!x.multiple,Je,!1):De!==!!x.multiple&&(x.defaultValue!=null?$t(f,!!x.multiple,x.defaultValue,!0):$t(f,!!x.multiple,x.multiple?[]:"",!1))}f[Ra]=x}catch(ct){hn(n,n.return,ct)}}break;case 6:if(Mi(i,n),Hi(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,x=n.memoizedProps;try{f.nodeValue=x}catch(ct){hn(n,n.return,ct)}}break;case 3:if(Mi(i,n),Hi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{va(i.containerInfo)}catch(ct){hn(n,n.return,ct)}break;case 4:Mi(i,n),Hi(n);break;case 13:Mi(i,n),Hi(n),f=n.child,f.flags&8192&&(x=f.memoizedState!==null,f.stateNode.isHidden=x,!x||f.alternate!==null&&f.alternate.memoizedState!==null||(Eu=nn())),c&4&&Pp(n);break;case 22:if(Le=a!==null&&a.memoizedState!==null,n.mode&1?(On=(pe=On)||Le,Mi(i,n),On=pe):Mi(i,n),Hi(n),c&8192){if(pe=n.memoizedState!==null,(n.stateNode.isHidden=pe)&&!Le&&(n.mode&1)!==0)for(tt=n,Le=n.child;Le!==null;){for(Fe=tt=Le;tt!==null;){switch(De=tt,Je=De.child,De.tag){case 0:case 11:case 14:case 15:Ba(4,De,De.return);break;case 1:Fs(De,De.return);var at=De.stateNode;if(typeof at.componentWillUnmount=="function"){c=De,a=De.return;try{i=c,at.props=i.memoizedProps,at.state=i.memoizedState,at.componentWillUnmount()}catch(ct){hn(c,a,ct)}}break;case 5:Fs(De,De.return);break;case 22:if(De.memoizedState!==null){zp(Fe);continue}}Je!==null?(Je.return=De,tt=Je):zp(Fe)}Le=Le.sibling}e:for(Le=null,Fe=n;;){if(Fe.tag===5){if(Le===null){Le=Fe;try{f=Fe.stateNode,pe?(x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(W=Fe.stateNode,Z=Fe.memoizedProps.style,T=Z!=null&&Z.hasOwnProperty("display")?Z.display:null,W.style.display=E("display",T))}catch(ct){hn(n,n.return,ct)}}}else if(Fe.tag===6){if(Le===null)try{Fe.stateNode.nodeValue=pe?"":Fe.memoizedProps}catch(ct){hn(n,n.return,ct)}}else if((Fe.tag!==22&&Fe.tag!==23||Fe.memoizedState===null||Fe===n)&&Fe.child!==null){Fe.child.return=Fe,Fe=Fe.child;continue}if(Fe===n)break e;for(;Fe.sibling===null;){if(Fe.return===null||Fe.return===n)break e;Le===Fe&&(Le=null),Fe=Fe.return}Le===Fe&&(Le=null),Fe.sibling.return=Fe.return,Fe=Fe.sibling}}break;case 19:Mi(i,n),Hi(n),c&4&&Pp(n);break;case 21:break;default:Mi(i,n),Hi(n)}}function Hi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Cp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(Ye(f,""),c.flags&=-33);var x=Rp(n);bu(n,x,f);break;case 3:case 4:var T=c.stateNode.containerInfo,W=Rp(n);Su(n,W,T);break;default:throw Error(t(161))}}catch(Z){hn(n,n.return,Z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function lv(n,i,a){tt=n,Lp(n)}function Lp(n,i,a){for(var c=(n.mode&1)!==0;tt!==null;){var f=tt,x=f.child;if(f.tag===22&&c){var T=f.memoizedState!==null||el;if(!T){var W=f.alternate,Z=W!==null&&W.memoizedState!==null||On;W=el;var pe=On;if(el=T,(On=Z)&&!pe)for(tt=f;tt!==null;)T=tt,Z=T.child,T.tag===22&&T.memoizedState!==null?Up(f):Z!==null?(Z.return=T,tt=Z):Up(f);for(;x!==null;)tt=x,Lp(x),x=x.sibling;tt=f,el=W,On=pe}Ip(n)}else(f.subtreeFlags&8772)!==0&&x!==null?(x.return=f,tt=x):Ip(n)}}function Ip(n){for(;tt!==null;){var i=tt;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:On||tl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!On)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:bi(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var x=i.updateQueue;x!==null&&zh(i,x,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}zh(i,T,a)}break;case 5:var W=i.stateNode;if(a===null&&i.flags&4){a=W;var Z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":Z.autoFocus&&a.focus();break;case"img":Z.src&&(a.src=Z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var pe=i.alternate;if(pe!==null){var Le=pe.memoizedState;if(Le!==null){var Fe=Le.dehydrated;Fe!==null&&va(Fe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}On||i.flags&512&&yu(i)}catch(De){hn(i,i.return,De)}}if(i===n){tt=null;break}if(a=i.sibling,a!==null){a.return=i.return,tt=a;break}tt=i.return}}function zp(n){for(;tt!==null;){var i=tt;if(i===n){tt=null;break}var a=i.sibling;if(a!==null){a.return=i.return,tt=a;break}tt=i.return}}function Up(n){for(;tt!==null;){var i=tt;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{tl(4,i)}catch(Z){hn(i,a,Z)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(Z){hn(i,f,Z)}}var x=i.return;try{yu(i)}catch(Z){hn(i,x,Z)}break;case 5:var T=i.return;try{yu(i)}catch(Z){hn(i,T,Z)}}}catch(Z){hn(i,i.return,Z)}if(i===n){tt=null;break}var W=i.sibling;if(W!==null){W.return=i.return,tt=W;break}tt=i.return}}var cv=Math.ceil,nl=D.ReactCurrentDispatcher,wu=D.ReactCurrentOwner,hi=D.ReactCurrentBatchConfig,Ht=0,An=null,gn=null,Dn=0,ri=0,Os=yr(0),bn=0,Ha=null,ns=0,il=0,Mu=0,Ga=null,Kn=null,Eu=0,Bs=1/0,rr=null,rl=!1,Tu=null,Tr=null,sl=!1,Ar=null,al=0,Va=0,Au=null,ol=-1,ll=0;function jn(){return(Ht&6)!==0?nn():ol!==-1?ol:ol=nn()}function Cr(n){return(n.mode&1)===0?1:(Ht&2)!==0&&Dn!==0?Dn&-Dn:$x.transition!==null?(ll===0&&(ll=Yt()),ll):(n=ut,n!==0||(n=window.event,n=n===void 0?16:Ff(n.type)),n)}function Ei(n,i,a,c){if(50<Va)throw Va=0,Au=null,Error(t(185));fn(n,a,c),((Ht&2)===0||n!==An)&&(n===An&&((Ht&2)===0&&(il|=a),bn===4&&Rr(n,Dn)),Zn(n,c),a===1&&Ht===0&&(i.mode&1)===0&&(Bs=nn()+500,Uo&&br()))}function Zn(n,i){var a=n.callbackNode;Ct(n,i);var c=Et(n,n===An?Dn:0);if(c===0)a!==null&&ha(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&ha(a),i===1)n.tag===0?jx(Fp.bind(null,n)):wh(Fp.bind(null,n)),Hx(function(){(Ht&6)===0&&br()}),a=null;else{switch(Ui(c)){case 1:a=pa;break;case 4:a=xo;break;case 16:a=_s;break;case 536870912:a=C;break;default:a=_s}a=$p(a,kp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function kp(n,i){if(ol=-1,ll=0,(Ht&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Hs()&&n.callbackNode!==a)return null;var c=Et(n,n===An?Dn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=cl(n,c);else{i=c;var f=Ht;Ht|=2;var x=Bp();(An!==n||Dn!==i)&&(rr=null,Bs=nn()+500,rs(n,i));do try{fv();break}catch(W){Op(n,W)}while(!0);jc(),nl.current=x,Ht=f,gn!==null?i=0:(An=null,Dn=0,i=bn)}if(i!==0){if(i===2&&(f=rn(n),f!==0&&(c=f,i=Cu(n,f))),i===1)throw a=Ha,rs(n,0),Rr(n,c),Zn(n,nn()),a;if(i===6)Rr(n,c);else{if(f=n.current.alternate,(c&30)===0&&!uv(f)&&(i=cl(n,c),i===2&&(x=rn(n),x!==0&&(c=x,i=Cu(n,x))),i===1))throw a=Ha,rs(n,0),Rr(n,c),Zn(n,nn()),a;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ss(n,Kn,rr);break;case 3:if(Rr(n,c),(c&130023424)===c&&(i=Eu+500-nn(),10<i)){if(Et(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){jn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Ic(ss.bind(null,n,Kn,rr),i);break}ss(n,Kn,rr);break;case 4:if(Rr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var T=31-ae(c);x=1<<T,T=i[T],T>f&&(f=T),c&=~x}if(c=f,c=nn()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*cv(c/1960))-c,10<c){n.timeoutHandle=Ic(ss.bind(null,n,Kn,rr),c);break}ss(n,Kn,rr);break;case 5:ss(n,Kn,rr);break;default:throw Error(t(329))}}}return Zn(n,nn()),n.callbackNode===a?kp.bind(null,n):null}function Cu(n,i){var a=Ga;return n.current.memoizedState.isDehydrated&&(rs(n,i).flags|=256),n=cl(n,i),n!==2&&(i=Kn,Kn=a,i!==null&&Ru(i)),n}function Ru(n){Kn===null?Kn=n:Kn.push.apply(Kn,n)}function uv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],x=f.getSnapshot;f=f.value;try{if(!yi(x(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Rr(n,i){for(i&=~Mu,i&=~il,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-ae(i),c=1<<a;n[a]=-1,i&=~c}}function Fp(n){if((Ht&6)!==0)throw Error(t(327));Hs();var i=Et(n,0);if((i&1)===0)return Zn(n,nn()),null;var a=cl(n,i);if(n.tag!==0&&a===2){var c=rn(n);c!==0&&(i=c,a=Cu(n,c))}if(a===1)throw a=Ha,rs(n,0),Rr(n,i),Zn(n,nn()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ss(n,Kn,rr),Zn(n,nn()),null}function Nu(n,i){var a=Ht;Ht|=1;try{return n(i)}finally{Ht=a,Ht===0&&(Bs=nn()+500,Uo&&br())}}function is(n){Ar!==null&&Ar.tag===0&&(Ht&6)===0&&Hs();var i=Ht;Ht|=1;var a=hi.transition,c=ut;try{if(hi.transition=null,ut=1,n)return n()}finally{ut=c,hi.transition=a,Ht=i,(Ht&6)===0&&br()}}function Pu(){ri=Os.current,tn(Os)}function rs(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Bx(a)),gn!==null)for(a=gn.return;a!==null;){var c=a;switch(Bc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Io();break;case 3:Us(),tn(Xn),tn(Un),Qc();break;case 5:Zc(c);break;case 4:Us();break;case 13:tn(ln);break;case 19:tn(ln);break;case 10:$c(c.type._context);break;case 22:case 23:Pu()}a=a.return}if(An=n,gn=n=Nr(n.current,null),Dn=ri=i,bn=0,Ha=null,Mu=il=ns=0,Kn=Ga=null,Qr!==null){for(i=0;i<Qr.length;i++)if(a=Qr[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,x=a.pending;if(x!==null){var T=x.next;x.next=f,c.next=T}a.pending=c}Qr=null}return n}function Op(n,i){do{var a=gn;try{if(jc(),$o.current=Ko,Xo){for(var c=cn.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Xo=!1}if(ts=0,Tn=Sn=cn=null,za=!1,Ua=0,wu.current=null,a===null||a.return===null){bn=1,Ha=i,gn=null;break}e:{var x=n,T=a.return,W=a,Z=i;if(i=Dn,W.flags|=32768,Z!==null&&typeof Z=="object"&&typeof Z.then=="function"){var pe=Z,Le=W,Fe=Le.tag;if((Le.mode&1)===0&&(Fe===0||Fe===11||Fe===15)){var De=Le.alternate;De?(Le.updateQueue=De.updateQueue,Le.memoizedState=De.memoizedState,Le.lanes=De.lanes):(Le.updateQueue=null,Le.memoizedState=null)}var Je=up(T);if(Je!==null){Je.flags&=-257,dp(Je,T,W,x,i),Je.mode&1&&cp(x,pe,i),i=Je,Z=pe;var at=i.updateQueue;if(at===null){var ct=new Set;ct.add(Z),i.updateQueue=ct}else at.add(Z);break e}else{if((i&1)===0){cp(x,pe,i),Du();break e}Z=Error(t(426))}}else if(sn&&W.mode&1){var mn=up(T);if(mn!==null){(mn.flags&65536)===0&&(mn.flags|=256),dp(mn,T,W,x,i),Vc(ks(Z,W));break e}}x=Z=ks(Z,W),bn!==4&&(bn=2),Ga===null?Ga=[x]:Ga.push(x),x=T;do{switch(x.tag){case 3:x.flags|=65536,i&=-i,x.lanes|=i;var le=op(x,Z,i);Ih(x,le);break e;case 1:W=Z;var te=x.type,ue=x.stateNode;if((x.flags&128)===0&&(typeof te.getDerivedStateFromError=="function"||ue!==null&&typeof ue.componentDidCatch=="function"&&(Tr===null||!Tr.has(ue)))){x.flags|=65536,i&=-i,x.lanes|=i;var He=lp(x,W,i);Ih(x,He);break e}}x=x.return}while(x!==null)}Gp(a)}catch(dt){i=dt,gn===a&&a!==null&&(gn=a=a.return);continue}break}while(!0)}function Bp(){var n=nl.current;return nl.current=Ko,n===null?Ko:n}function Du(){(bn===0||bn===3||bn===2)&&(bn=4),An===null||(ns&268435455)===0&&(il&268435455)===0||Rr(An,Dn)}function cl(n,i){var a=Ht;Ht|=2;var c=Bp();(An!==n||Dn!==i)&&(rr=null,rs(n,i));do try{dv();break}catch(f){Op(n,f)}while(!0);if(jc(),Ht=a,nl.current=c,gn!==null)throw Error(t(261));return An=null,Dn=0,bn}function dv(){for(;gn!==null;)Hp(gn)}function fv(){for(;gn!==null&&!Yr();)Hp(gn)}function Hp(n){var i=jp(n.alternate,n,ri);n.memoizedProps=n.pendingProps,i===null?Gp(n):gn=i,wu.current=null}function Gp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=rv(a,i,ri),a!==null){gn=a;return}}else{if(a=sv(a,i),a!==null){a.flags&=32767,gn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{bn=6,gn=null;return}}if(i=i.sibling,i!==null){gn=i;return}gn=i=n}while(i!==null);bn===0&&(bn=5)}function ss(n,i,a){var c=ut,f=hi.transition;try{hi.transition=null,ut=1,hv(n,i,a,c)}finally{hi.transition=f,ut=c}return null}function hv(n,i,a,c){do Hs();while(Ar!==null);if((Ht&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var x=a.lanes|a.childLanes;if(rt(n,x),n===An&&(gn=An=null,Dn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||sl||(sl=!0,$p(_s,function(){return Hs(),null})),x=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||x){x=hi.transition,hi.transition=null;var T=ut;ut=1;var W=Ht;Ht|=4,wu.current=null,ov(n,a),Dp(a,n),Lx(Dc),yo=!!Pc,Dc=Pc=null,n.current=a,lv(a),dc(),Ht=W,ut=T,hi.transition=x}else n.current=a;if(sl&&(sl=!1,Ar=n,al=f),x=n.pendingLanes,x===0&&(Tr=null),oe(a.stateNode),Zn(n,nn()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(rl)throw rl=!1,n=Tu,Tu=null,n;return(al&1)!==0&&n.tag!==0&&Hs(),x=n.pendingLanes,(x&1)!==0?n===Au?Va++:(Va=0,Au=n):Va=0,br(),null}function Hs(){if(Ar!==null){var n=Ui(al),i=hi.transition,a=ut;try{if(hi.transition=null,ut=16>n?16:n,Ar===null)var c=!1;else{if(n=Ar,Ar=null,al=0,(Ht&6)!==0)throw Error(t(331));var f=Ht;for(Ht|=4,tt=n.current;tt!==null;){var x=tt,T=x.child;if((tt.flags&16)!==0){var W=x.deletions;if(W!==null){for(var Z=0;Z<W.length;Z++){var pe=W[Z];for(tt=pe;tt!==null;){var Le=tt;switch(Le.tag){case 0:case 11:case 15:Ba(8,Le,x)}var Fe=Le.child;if(Fe!==null)Fe.return=Le,tt=Fe;else for(;tt!==null;){Le=tt;var De=Le.sibling,Je=Le.return;if(Ap(Le),Le===pe){tt=null;break}if(De!==null){De.return=Je,tt=De;break}tt=Je}}}var at=x.alternate;if(at!==null){var ct=at.child;if(ct!==null){at.child=null;do{var mn=ct.sibling;ct.sibling=null,ct=mn}while(ct!==null)}}tt=x}}if((x.subtreeFlags&2064)!==0&&T!==null)T.return=x,tt=T;else e:for(;tt!==null;){if(x=tt,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:Ba(9,x,x.return)}var le=x.sibling;if(le!==null){le.return=x.return,tt=le;break e}tt=x.return}}var te=n.current;for(tt=te;tt!==null;){T=tt;var ue=T.child;if((T.subtreeFlags&2064)!==0&&ue!==null)ue.return=T,tt=ue;else e:for(T=te;tt!==null;){if(W=tt,(W.flags&2048)!==0)try{switch(W.tag){case 0:case 11:case 15:tl(9,W)}}catch(dt){hn(W,W.return,dt)}if(W===T){tt=null;break e}var He=W.sibling;if(He!==null){He.return=W.return,tt=He;break e}tt=W.return}}if(Ht=f,br(),ce&&typeof ce.onPostCommitFiberRoot=="function")try{ce.onPostCommitFiberRoot(q,n)}catch{}c=!0}return c}finally{ut=a,hi.transition=i}}return!1}function Vp(n,i,a){i=ks(a,i),i=op(n,i,1),n=Mr(n,i,1),i=jn(),n!==null&&(fn(n,1,i),Zn(n,i))}function hn(n,i,a){if(n.tag===3)Vp(n,n,a);else for(;i!==null;){if(i.tag===3){Vp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Tr===null||!Tr.has(c))){n=ks(a,n),n=lp(i,n,1),i=Mr(i,n,1),n=jn(),i!==null&&(fn(i,1,n),Zn(i,n));break}}i=i.return}}function pv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=jn(),n.pingedLanes|=n.suspendedLanes&a,An===n&&(Dn&a)===a&&(bn===4||bn===3&&(Dn&130023424)===Dn&&500>nn()-Eu?rs(n,0):Mu|=a),Zn(n,i)}function Wp(n,i){i===0&&((n.mode&1)===0?i=1:(i=nt,nt<<=1,(nt&130023424)===0&&(nt=4194304)));var a=jn();n=tr(n,i),n!==null&&(fn(n,i,a),Zn(n,a))}function mv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Wp(n,a)}function gv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Wp(n,a)}var jp;jp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Xn.current)qn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return qn=!1,iv(n,i,a);qn=(n.flags&131072)!==0}else qn=!1,sn&&(i.flags&1048576)!==0&&Mh(i,Fo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Qo(n,i),n=i.pendingProps;var f=Rs(i,Un.current);zs(i,a),f=nu(null,i,c,n,f,a);var x=iu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Yn(c)?(x=!0,zo(i)):x=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,qc(i),f.updater=Zo,i.stateNode=f,f._reactInternals=i,cu(i,c,n,a),i=hu(null,i,c,!0,x,a)):(i.tag=0,sn&&x&&Oc(i),Wn(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Qo(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=vv(c),n=bi(c,n),f){case 0:i=fu(null,i,c,n,a);break e;case 1:i=xp(null,i,c,n,a);break e;case 11:i=fp(null,i,c,n,a);break e;case 14:i=hp(null,i,c,bi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:bi(c,f),fu(n,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:bi(c,f),xp(n,i,c,f,a);case 3:e:{if(vp(i),n===null)throw Error(t(387));c=i.pendingProps,x=i.memoizedState,f=x.element,Lh(n,i),Wo(i,c,null,a);var T=i.memoizedState;if(c=T.element,x.isDehydrated)if(x={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=x,i.memoizedState=x,i.flags&256){f=ks(Error(t(423)),i),i=_p(n,i,c,a,f);break e}else if(c!==f){f=ks(Error(t(424)),i),i=_p(n,i,c,a,f);break e}else for(ii=_r(i.stateNode.containerInfo.firstChild),ni=i,sn=!0,Si=null,a=Ph(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ds(),c===f){i=ir(n,i,a);break e}Wn(n,i,c,a)}i=i.child}return i;case 5:return Uh(i),n===null&&Gc(i),c=i.type,f=i.pendingProps,x=n!==null?n.memoizedProps:null,T=f.children,Lc(c,f)?T=null:x!==null&&Lc(c,x)&&(i.flags|=32),gp(n,i),Wn(n,i,T,a),i.child;case 6:return n===null&&Gc(i),null;case 13:return yp(n,i,a);case 4:return Kc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ls(i,null,c,a):Wn(n,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:bi(c,f),fp(n,i,c,f,a);case 7:return Wn(n,i,i.pendingProps,a),i.child;case 8:return Wn(n,i,i.pendingProps.children,a),i.child;case 12:return Wn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,x=i.memoizedProps,T=f.value,Qt(Ho,c._currentValue),c._currentValue=T,x!==null)if(yi(x.value,T)){if(x.children===f.children&&!Xn.current){i=ir(n,i,a);break e}}else for(x=i.child,x!==null&&(x.return=i);x!==null;){var W=x.dependencies;if(W!==null){T=x.child;for(var Z=W.firstContext;Z!==null;){if(Z.context===c){if(x.tag===1){Z=nr(-1,a&-a),Z.tag=2;var pe=x.updateQueue;if(pe!==null){pe=pe.shared;var Le=pe.pending;Le===null?Z.next=Z:(Z.next=Le.next,Le.next=Z),pe.pending=Z}}x.lanes|=a,Z=x.alternate,Z!==null&&(Z.lanes|=a),Xc(x.return,a,i),W.lanes|=a;break}Z=Z.next}}else if(x.tag===10)T=x.type===i.type?null:x.child;else if(x.tag===18){if(T=x.return,T===null)throw Error(t(341));T.lanes|=a,W=T.alternate,W!==null&&(W.lanes|=a),Xc(T,a,i),T=x.sibling}else T=x.child;if(T!==null)T.return=x;else for(T=x;T!==null;){if(T===i){T=null;break}if(x=T.sibling,x!==null){x.return=T.return,T=x;break}T=T.return}x=T}Wn(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,zs(i,a),f=di(f),c=c(f),i.flags|=1,Wn(n,i,c,a),i.child;case 14:return c=i.type,f=bi(c,i.pendingProps),f=bi(c.type,f),hp(n,i,c,f,a);case 15:return pp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:bi(c,f),Qo(n,i),i.tag=1,Yn(c)?(n=!0,zo(i)):n=!1,zs(i,a),sp(i,c,f),cu(i,c,f,a),hu(null,i,c,!0,n,a);case 19:return bp(n,i,a);case 22:return mp(n,i,a)}throw Error(t(156,i.tag))};function $p(n,i){return Xr(n,i)}function xv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(n,i,a,c){return new xv(n,i,a,c)}function Lu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function vv(n){if(typeof n=="function")return Lu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===B)return 11;if(n===H)return 14}return 2}function Nr(n,i){var a=n.alternate;return a===null?(a=pi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ul(n,i,a,c,f,x){var T=2;if(c=n,typeof n=="function")Lu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case w:return as(a.children,f,x,i);case N:T=8,f|=8;break;case J:return n=pi(12,a,i,f|2),n.elementType=J,n.lanes=x,n;case O:return n=pi(13,a,i,f),n.elementType=O,n.lanes=x,n;case V:return n=pi(19,a,i,f),n.elementType=V,n.lanes=x,n;case ee:return dl(a,f,x,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case X:T=10;break e;case j:T=9;break e;case B:T=11;break e;case H:T=14;break e;case se:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=pi(T,a,i,f),i.elementType=n,i.type=c,i.lanes=x,i}function as(n,i,a,c){return n=pi(7,n,c,i),n.lanes=a,n}function dl(n,i,a,c){return n=pi(22,n,c,i),n.elementType=ee,n.lanes=a,n.stateNode={isHidden:!1},n}function Iu(n,i,a){return n=pi(6,n,null,i),n.lanes=a,n}function zu(n,i,a){return i=pi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function _v(n,i,a,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wt(0),this.expirationTimes=Wt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wt(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Uu(n,i,a,c,f,x,T,W,Z){return n=new _v(n,i,a,W,Z),i===1?(i=1,x===!0&&(i|=8)):i=0,x=pi(3,null,null,i),n.current=x,x.stateNode=n,x.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},qc(x),n}function yv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Xp(n){if(!n)return Sr;n=n._reactInternals;e:{if(St(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Yn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Yn(a))return Sh(n,a,i)}return i}function Yp(n,i,a,c,f,x,T,W,Z){return n=Uu(a,c,!0,n,f,x,T,W,Z),n.context=Xp(null),a=n.current,c=jn(),f=Cr(a),x=nr(c,f),x.callback=i??null,Mr(a,x,f),n.current.lanes=f,fn(n,f,c),Zn(n,c),n}function fl(n,i,a,c){var f=i.current,x=jn(),T=Cr(f);return a=Xp(a),i.context===null?i.context=a:i.pendingContext=a,i=nr(x,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Mr(f,i,T),n!==null&&(Ei(n,f,T,x),Vo(n,f,T)),T}function hl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function qp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function ku(n,i){qp(n,i),(n=n.alternate)&&qp(n,i)}function Sv(){return null}var Kp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Fu(n){this._internalRoot=n}pl.prototype.render=Fu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));fl(n,i,null,null)},pl.prototype.unmount=Fu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;is(function(){fl(null,n,null,null)}),i[Zi]=null}};function pl(n){this._internalRoot=n}pl.prototype.unstable_scheduleHydration=function(n){if(n){var i=ki();n={blockedOn:null,target:n,priority:i};for(var a=0;a<gr.length&&i!==0&&i<gr[a].priority;a++);gr.splice(a,0,n),a===0&&Uf(n)}};function Ou(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ml(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Zp(){}function bv(n,i,a,c,f){if(f){if(typeof c=="function"){var x=c;c=function(){var pe=hl(T);x.call(pe)}}var T=Yp(i,c,n,0,null,!1,!1,"",Zp);return n._reactRootContainer=T,n[Zi]=T.current,Aa(n.nodeType===8?n.parentNode:n),is(),T}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var W=c;c=function(){var pe=hl(Z);W.call(pe)}}var Z=Uu(n,0,!1,null,null,!1,!1,"",Zp);return n._reactRootContainer=Z,n[Zi]=Z.current,Aa(n.nodeType===8?n.parentNode:n),is(function(){fl(i,Z,a,c)}),Z}function gl(n,i,a,c,f){var x=a._reactRootContainer;if(x){var T=x;if(typeof f=="function"){var W=f;f=function(){var Z=hl(T);W.call(Z)}}fl(i,T,n,f)}else T=bv(a,i,n,f,c);return hl(T)}yn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=xt(i.pendingLanes);a!==0&&(_n(i,a|1),Zn(i,nn()),(Ht&6)===0&&(Bs=nn()+500,br()))}break;case 13:is(function(){var c=tr(n,1);if(c!==null){var f=jn();Ei(c,n,1,f)}}),ku(n,1)}},pr=function(n){if(n.tag===13){var i=tr(n,134217728);if(i!==null){var a=jn();Ei(i,n,134217728,a)}ku(n,134217728)}},_i=function(n){if(n.tag===13){var i=Cr(n),a=tr(n,i);if(a!==null){var c=jn();Ei(a,n,i,c)}ku(n,i)}},ki=function(){return ut},It=function(n,i){var a=ut;try{return ut=n,i()}finally{ut=a}},xe=function(n,i,a){switch(i){case"input":if(Mt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var f=Lo(c);if(!f)throw Error(t(90));Me(c),Mt(c,f)}}}break;case"textarea":Q(n,a);break;case"select":i=a.value,i!=null&&$t(n,!!a.multiple,i,!1)}},Ae=Nu,Pe=is;var wv={usingClientEntryPoint:!1,Events:[Na,As,Lo,ie,Te,Nu]},Wa={findFiberByHostInstance:qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mv={bundleType:Wa.bundleType,version:Wa.version,rendererPackageName:Wa.rendererPackageName,rendererConfig:Wa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=xi(n),n===null?null:n.stateNode},findFiberByHostInstance:Wa.findFiberByHostInstance||Sv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xl.isDisabled&&xl.supportsFiber)try{q=xl.inject(Mv),ce=xl}catch{}}return Jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wv,Jn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ou(i))throw Error(t(200));return yv(n,i,null,a)},Jn.createRoot=function(n,i){if(!Ou(n))throw Error(t(299));var a=!1,c="",f=Kp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Uu(n,1,!1,null,null,a,!1,c,f),n[Zi]=i.current,Aa(n.nodeType===8?n.parentNode:n),new Fu(i)},Jn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=xi(i),n=n===null?null:n.stateNode,n},Jn.flushSync=function(n){return is(n)},Jn.hydrate=function(n,i,a){if(!ml(i))throw Error(t(200));return gl(null,n,i,!0,a)},Jn.hydrateRoot=function(n,i,a){if(!Ou(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,x="",T=Kp;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(x=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=Yp(i,null,n,1,a??null,f,!1,x,T),n[Zi]=i.current,Aa(n),c)for(n=0;n<c.length;n++)a=c[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new pl(i)},Jn.render=function(n,i,a){if(!ml(i))throw Error(t(200));return gl(null,n,i,!1,a)},Jn.unmountComponentAtNode=function(n){if(!ml(n))throw Error(t(40));return n._reactRootContainer?(is(function(){gl(null,null,n,!1,function(){n._reactRootContainer=null,n[Zi]=null})}),!0):!1},Jn.unstable_batchedUpdates=Nu,Jn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!ml(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return gl(n,i,a,!1,c)},Jn.version="18.3.1-next-f1338f8080-20240426",Jn}var s0;function zv(){if(s0)return Gu.exports;s0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Gu.exports=Iv(),Gu.exports}var a0;function Uv(){if(a0)return vl;a0=1;var s=zv();return vl.createRoot=s.createRoot,vl.hydrateRoot=s.hydrateRoot,vl}var kv=Uv();const Fv=lm(kv),na=[{id:"brown-noise",title:"Brownian Deep Focus",category:"Deep Focus",tagline:"Warm sub-bass rumble for continuous coding & writing",description:"Mathematically integrated brownian spectrum with deep 450Hz low-pass rolloff. Proven to mask background distractions and alleviate cognitive fatigue.",frequency:"0 – 450 Hz Brown Spectrum",accentColor:"#f59e0b"},{id:"celestial-drone",title:"Celestial 432Hz Drone",category:"Mindfulness",tagline:"Harmonically tuned meditative Tibetan chords",description:"Multi-oscillator harmonic chord centered around the natural 432Hz tuning fork with gentle phase chorus and slow breathing resonance.",frequency:"432 Hz Pythagorean Fundamental",accentColor:"#a855f7"},{id:"binaural-gamma",title:"Gamma 40Hz Flow State",category:"Cognitive Flow",tagline:"High-cognition binaural carrier for intense problem-solving",description:"Stereo carrier tones (200Hz L / 240Hz R) inducing 40Hz gamma oscillations in the cerebral cortex, associated with high-level information processing and recall.",frequency:"40 Hz Gamma Difference Wave",accentColor:"#38bdf8"},{id:"binaural-alpha",title:"Alpha 10Hz Quiet Mind",category:"Mindfulness",tagline:"Calm relaxed alertness for reading and reflection",description:"Stereo carrier tones (210Hz L / 220Hz R) stimulating 10Hz alpha rhythms, optimal for sustained reading, journaling, and stress reduction.",frequency:"10 Hz Alpha Difference Wave",accentColor:"#34d399"},{id:"rain-storm",title:"Midnight Rain Sanctuary",category:"Deep Focus",tagline:"Gentle nocturnal rainfall with rolling thunder",description:"Procedurally shaped pink noise with gentle resonant filtering, simulating a peaceful rain shower against cabin windows in deep space.",frequency:"Pink Noise Spectrum & Low Rumble",accentColor:"#818cf8"}];class Ov{constructor(){sr(this,"ctx",null);sr(this,"masterGain",null);sr(this,"analyser",null);sr(this,"activeNodes",[]);sr(this,"currentId",null);sr(this,"_isPlaying",!1);sr(this,"_volume",.65);sr(this,"_isMuted",!1)}initContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this._isMuted?0:this._volume,this.ctx.currentTime),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=64,this.analyser.smoothingTimeConstant=.85,this.masterGain.connect(this.analyser),this.analyser.connect(this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume()}get isPlaying(){return this._isPlaying}get currentSoundscape(){return this.currentId}get volume(){return this._volume}get isMuted(){return this._isMuted}getAnalyser(){return this.analyser}setVolume(e){if(this._volume=Math.max(0,Math.min(1,e)),this.masterGain&&this.ctx){const t=this._isMuted?0:this._volume;this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime),this.masterGain.gain.linearRampToValueAtTime(t,this.ctx.currentTime+.05)}}toggleMute(){return this._isMuted=!this._isMuted,this.setVolume(this._volume),this._isMuted}stop(){!this.ctx||!this._isPlaying||(this.masterGain&&(this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime),this.masterGain.gain.linearRampToValueAtTime(.001,this.ctx.currentTime+.12)),setTimeout(()=>{this.cleanupNodes(),this._isPlaying=!1,this.currentId=null},130))}cleanupNodes(){for(const e of this.activeNodes)try{"stop"in e&&typeof e.stop=="function"&&e.stop(),e.disconnect()}catch{}this.activeNodes=[]}play(e){if(this.initContext(),!(!this.ctx||!this.masterGain)&&!(this._isPlaying&&this.currentId===e))switch(this.cleanupNodes(),this.currentId=e,this._isPlaying=!0,this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime),this.masterGain.gain.setValueAtTime(.001,this.ctx.currentTime),this.masterGain.gain.linearRampToValueAtTime(this._isMuted?0:this._volume,this.ctx.currentTime+.4),e){case"brown-noise":this.buildBrownNoise();break;case"celestial-drone":this.buildCelestialDrone();break;case"binaural-gamma":this.buildBinauralBeat(200,40);break;case"binaural-alpha":this.buildBinauralBeat(210,10);break;case"rain-storm":this.buildRainStorm();break}}buildBrownNoise(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.sampleRate*5,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),r=t.getChannelData(0);let o=0;for(let u=0;u<e;u++){const m=Math.random()*2-1;o=(o+.02*m)/1.02,r[u]=o*3.2}const l=2048;for(let u=0;u<l;u++){const m=u/l;r[u]=r[u]*m+r[e-l+u]*(1-m)}const d=this.ctx.createBufferSource();d.buffer=t,d.loop=!0;const p=this.ctx.createBiquadFilter();p.type="lowpass",p.frequency.setValueAtTime(450,this.ctx.currentTime),p.Q.setValueAtTime(.7,this.ctx.currentTime),d.connect(p),p.connect(this.masterGain),d.start(),this.activeNodes.push(d,p)}buildCelestialDrone(){if(!this.ctx||!this.masterGain)return;const e=216,t=[e,e*1.5,e*2,e*2.5],r=[-4,3,-2,5];t.forEach((o,l)=>{if(!this.ctx||!this.masterGain)return;const d=this.ctx.createOscillator();d.type=l%2===0?"sine":"triangle",d.frequency.setValueAtTime(o,this.ctx.currentTime),d.detune.setValueAtTime(r[l],this.ctx.currentTime);const p=this.ctx.createGain();p.gain.setValueAtTime(.18/(l+1),this.ctx.currentTime);const u=this.ctx.createOscillator();u.frequency.setValueAtTime(.08+l*.03,this.ctx.currentTime);const m=this.ctx.createGain();m.gain.setValueAtTime(.04,this.ctx.currentTime),u.connect(m),m.connect(p.gain),d.connect(p),p.connect(this.masterGain),d.start(),u.start(),this.activeNodes.push(d,u,p,m)})}buildBinauralBeat(e,t){if(!this.ctx||!this.masterGain)return;const r=this.ctx.createOscillator();r.type="sine",r.frequency.setValueAtTime(e,this.ctx.currentTime);const o=this.ctx.createGain();o.gain.setValueAtTime(.22,this.ctx.currentTime);const l=this.ctx.createOscillator();l.type="sine",l.frequency.setValueAtTime(e+t,this.ctx.currentTime);const d=this.ctx.createGain();d.gain.setValueAtTime(.22,this.ctx.currentTime);const p=this.ctx.createChannelMerger(2);r.connect(o),o.connect(p,0,0),l.connect(d),d.connect(p,0,1);const u=this.ctx.createOscillator();u.type="triangle",u.frequency.setValueAtTime(e/2,this.ctx.currentTime);const m=this.ctx.createGain();m.gain.setValueAtTime(.08,this.ctx.currentTime),u.connect(m),m.connect(this.masterGain),p.connect(this.masterGain),r.start(),l.start(),u.start(),this.activeNodes.push(r,l,u,o,d,m,p)}buildRainStorm(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.sampleRate*4,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),r=t.getChannelData(0);let o=0,l=0,d=0,p=0,u=0,m=0,v=0;for(let _=0;_<e;_++){const M=Math.random()*2-1;o=.99886*o+M*.0555179,l=.99332*l+M*.0750759,d=.969*d+M*.153852,p=.8665*p+M*.3104856,u=.55*u+M*.5329522,m=-.7616*m-M*.016898,r[_]=(o+l+d+p+u+m+v+M*.5362)*.12,v=M*.115926}const y=this.ctx.createBufferSource();y.buffer=t,y.loop=!0;const g=this.ctx.createBiquadFilter();g.type="lowpass",g.frequency.setValueAtTime(1200,this.ctx.currentTime),y.connect(g),g.connect(this.masterGain),y.start(),this.activeNodes.push(y,g)}}const fs=new Ov;class Bv{startKeepAlive(){}stopKeepAlive(){}updateMetadata(e){if(!(typeof window>"u"||!("mediaSession"in navigator)))try{const t=e.artworkUrl?[{src:e.artworkUrl,sizes:"96x96",type:"image/jpeg"},{src:e.artworkUrl,sizes:"128x128",type:"image/jpeg"},{src:e.artworkUrl,sizes:"192x192",type:"image/jpeg"},{src:e.artworkUrl,sizes:"256x256",type:"image/jpeg"},{src:e.artworkUrl,sizes:"512x512",type:"image/jpeg"}]:[];navigator.mediaSession.metadata=new MediaMetadata({title:e.title||"FOR ME Sanctuary",artist:e.artist||"Private Life Ledger",album:e.album||"Sanctuary Audio",artwork:t}),navigator.mediaSession.playbackState="playing",navigator.mediaSession.setActionHandler("play",()=>{e.onPlay(),navigator.mediaSession.playbackState="playing"}),navigator.mediaSession.setActionHandler("pause",()=>{e.onPause(),navigator.mediaSession.playbackState="paused"}),e.onNext?navigator.mediaSession.setActionHandler("nexttrack",e.onNext):navigator.mediaSession.setActionHandler("nexttrack",null),e.onPrev?navigator.mediaSession.setActionHandler("previoustrack",e.onPrev):navigator.mediaSession.setActionHandler("previoustrack",null)}catch(t){console.warn("[MediaSession] Metadata update error:",t)}}setPlaybackState(e){if(!(typeof window>"u"||!("mediaSession"in navigator)))try{navigator.mediaSession.playbackState=e}catch{}}}const Ni=new Bv;function Hv(s){if(!s||typeof s!="string")return null;const e=s.trim();let t,r;const o=e.match(/[?&]list=([a-zA-Z0-9_-]+)/);o&&o[1]&&(r=o[1]);const l=e.match(/[?&]v=([a-zA-Z0-9_-]{11})/);if(l&&l[1]&&(t=l[1]),!t){const p=e.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);p&&p[1]&&(t=p[1])}if(!t){const p=e.match(/youtube\.com\/(?:live|embed|v|shorts)\/([a-zA-Z0-9_-]{11})/);p&&p[1]&&(t=p[1])}if(!t&&!r&&/^[a-zA-Z0-9_-]{11}$/.test(e)&&(t=e),!t&&!r&&/^(?:PL|RD|UU|FL|OLAK5uy_)[a-zA-Z0-9_-]+$/.test(e)&&(r=e),!t&&!r)return null;let d="video";return r&&t?d="video_in_playlist":r&&(d="playlist"),{type:d,videoId:t,playlistId:r,cleanUrl:e}}function Gv(s){return s?`https://img.youtube.com/vi/${s}/hqdefault.jpg`:"https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=600&auto=format&fit=crop"}const Jl=[{id:"lofi-girl-main",title:"Lofi Girl — Beats to Relax / Study to",type:"video",videoId:"jfKfPfyJRdk",url:"https://www.youtube.com/watch?v=jfKfPfyJRdk",channel:"Lofi Girl",thumbnailUrl:"https://img.youtube.com/vi/jfKfPfyJRdk/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"synthwave-chilledcow",title:"Synthwave Radio — Chill Beats to Code & Chill",type:"video",videoId:"4xDzrJKXOOY",url:"https://www.youtube.com/watch?v=4xDzrJKXOOY",channel:"Lofi Girl / Synthwave Boy",thumbnailUrl:"https://img.youtube.com/vi/4xDzrJKXOOY/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"deep-focus-ambient",title:"Deep Focus Ambient — Flow State Alpha Waves",type:"video",videoId:"lTRiuFIWV54",url:"https://www.youtube.com/watch?v=lTRiuFIWV54",channel:"Greenred Productions",thumbnailUrl:"https://img.youtube.com/vi/lTRiuFIWV54/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"peaceful-piano-solitude",title:"Peaceful Piano & Soft Rain — Gentle Solitude",type:"video",videoId:"1WUEk0R79_Q",url:"https://www.youtube.com/watch?v=1WUEk0R79_Q",channel:"Quiet Quest",thumbnailUrl:"https://img.youtube.com/vi/1WUEk0R79_Q/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"classical-focus-mozart",title:"Classical Focus — Mozart, Beethoven, Bach",type:"video",videoId:"WPni755-Krg",url:"https://www.youtube.com/watch?v=WPni755-Krg",channel:"HALIDONMUSIC",thumbnailUrl:"https://img.youtube.com/vi/WPni755-Krg/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"cozy-coffee-shop-lofi",title:"Cozy Coffee Shop Lofi — Rainy Night Ambience",type:"video",videoId:"-5KAN9_CzSA",url:"https://www.youtube.com/watch?v=-5KAN9_CzSA",channel:"Calmed by Nature",thumbnailUrl:"https://img.youtube.com/vi/-5KAN9_CzSA/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()}],cm=Ee.createContext(void 0),Gs={palette:"cosmic-royal",speed:"balanced",amplitude:"majestic",waveGeometry:"dunes",waveLayerDensity:"deep",horizonHeight:"balanced",waveStrokeOpacity:.5,interactiveParallax:!0,celestialBody:"crescent-moon",celestialPosition:"default",celestialScaleMultiplier:1,rotationSpeed:"standard",showNebulaDust:!0,nebulaIntensity:"vivid",showConstellations:!0,showComet:!0,shootingStarMode:"occasional",showStars:!0,starDensity:"balanced",showCrossStars:!1,showOrbitalTrack:!1,showMeridian:!1,clockFontStyle:"tabular",clockSize:"standard",clockPosition:"center",clockDivider:"colon",clockColor:"palette",clockFormat:"12h",showSeconds:!0,showDate:!0,showGreeting:!0,clockHalo:"pulsar"},$a={name:"Azan",motto:"Remember, you are here for you.",defaultFocusTopic:"Engineering",defaultFocusMode:"Deep Work"},_l=[{id:"r1",title:"Morning Protocol",timeRange:"06:00 – 09:00",description:"Hydration, natural sunlight, 30-min movement, deep work session.",iconType:"morning"},{id:"r2",title:"Core Deep Work",timeRange:"09:00 – 17:00",description:"High-leverage engineering problem solving, core building goals, focused sprints.",iconType:"afternoon"},{id:"r3",title:"Evening Wind-Down",timeRange:"17:00 – 22:30",description:"Reflection, physical cooldown, reading, digital sunset and deep recovery.",iconType:"evening"}],Vv=({children:s})=>{const[e,t]=Ee.useState(()=>{try{const ye=localStorage.getItem("for_me_profile");if(ye){const Qe=JSON.parse(ye);return Qe.name==="Viren"?{...$a,name:"Azan"}:{...$a,...Qe}}return $a}catch{return $a}}),r=ye=>{t(Qe=>{const Ve={...Qe,...ye};return localStorage.setItem("for_me_profile",JSON.stringify(Ve)),Ve})};Ee.useEffect(()=>{localStorage.setItem("for_me_profile",JSON.stringify(e))},[e]);const[o,l]=Ee.useState(()=>{try{return localStorage.getItem("for_me_app_theme")==="light"?"light":"dark"}catch{return"dark"}}),d=()=>{l(ye=>ye==="light"?"dark":"light")};Ee.useEffect(()=>{localStorage.setItem("for_me_app_theme",o),o==="light"?(document.documentElement.classList.add("theme-light"),document.documentElement.classList.remove("theme-dark")):(document.documentElement.classList.add("theme-dark"),document.documentElement.classList.remove("theme-light"))},[o]);const[p,u]=Ee.useState(()=>{try{const ye=localStorage.getItem("for_me_is_hud_hidden");return ye?JSON.parse(ye):!1}catch{return!1}}),m=()=>u(ye=>!ye);Ee.useEffect(()=>{localStorage.setItem("for_me_is_hud_hidden",JSON.stringify(p))},[p]);const[v,y]=Ee.useState(()=>{try{return localStorage.getItem("for_me_wallpaper_theme")||"cosmic-cliffs"}catch{return"cosmic-cliffs"}});Ee.useEffect(()=>{localStorage.setItem("for_me_wallpaper_theme",v)},[v]);const[g,_]=Ee.useState(()=>{try{const ye=localStorage.getItem("for_me_wallpaper_settings_v3")||localStorage.getItem("for_me_wallpaper_settings_v2");return ye?{...Gs,...JSON.parse(ye)}:Gs}catch{return Gs}}),M=ye=>{_(Qe=>{const Ve={...Qe,...ye};return localStorage.setItem("for_me_wallpaper_settings_v3",JSON.stringify(Ve)),Ve})},A=()=>{_(Gs),localStorage.setItem("for_me_wallpaper_settings_v3",JSON.stringify(Gs))},[S,b]=Ee.useState(()=>{try{const ye=localStorage.getItem("for_me_tasks");return ye?JSON.parse(ye):[{id:"1",text:"Core engineering deep focus sprint",completed:!1},{id:"2",text:"System architecture review & refinement",completed:!1},{id:"3",text:"Physical movement & hydration (8 glasses)",completed:!1}]}catch{return[{id:"1",text:"Core engineering deep focus sprint",completed:!1}]}});Ee.useEffect(()=>{localStorage.setItem("for_me_tasks",JSON.stringify(S))},[S]);const R=ye=>{b(Qe=>Qe.map(Ve=>Ve.id===ye?{...Ve,completed:!Ve.completed,completedAt:Ve.completed?void 0:new Date().toISOString()}:Ve))},F=ye=>{if(!ye.trim())return;const Qe={id:`task_${Date.now()}`,text:ye.trim(),completed:!1};b(Ve=>[Qe,...Ve])},D=ye=>{b(Qe=>Qe.filter(Ve=>Ve.id!==ye))},[U,L]=Ee.useState(()=>{try{const ye=localStorage.getItem("for_me_habits");return ye?JSON.parse(ye):[{id:"h1",name:"Deep Focus & Engineering Block",completed:!1,streak:3},{id:"h2",name:"Hydration Target (8 Glasses)",completed:!1,streak:5},{id:"h3",name:"Mindful Walk & Movement",completed:!1,streak:2}]}catch{return[{id:"h1",name:"Deep Focus & Engineering Block",completed:!1,streak:1}]}});Ee.useEffect(()=>{localStorage.setItem("for_me_habits",JSON.stringify(U))},[U]);const w=ye=>{L(Qe=>Qe.map(Ve=>{if(Ve.id===ye){const Ze=!Ve.completed;return{...Ve,completed:Ze,streak:Ze?Ve.streak+1:Math.max(0,Ve.streak-1)}}return Ve}))},N=ye=>{if(!ye.trim())return;const Qe={id:`habit_${Date.now()}`,name:ye.trim(),completed:!1,streak:0};L(Ve=>[...Ve,Qe])},J=ye=>{L(Qe=>Qe.filter(Ve=>Ve.id!==ye))},[X,j]=Ee.useState(()=>{try{const ye=localStorage.getItem("for_me_routines");return ye?JSON.parse(ye):_l}catch{return _l}});Ee.useEffect(()=>{localStorage.setItem("for_me_routines",JSON.stringify(X))},[X]);const B=ye=>{const Qe={id:`routine_${Date.now()}`,...ye};j(Ve=>[...Ve,Qe])},O=(ye,Qe)=>{j(Ve=>Ve.map(Ze=>Ze.id===ye?{...Ze,...Qe}:Ze))},V=ye=>{j(Qe=>Qe.filter(Ve=>Ve.id!==ye))},H=()=>{j(_l)},[se,ee]=Ee.useState(0),[Y,G]=Ee.useState(!1),[$,P]=Ee.useState(e.defaultFocusTopic||"Engineering"),[K,we]=Ee.useState(()=>{try{const ye=localStorage.getItem("for_me_study_sessions");return ye?JSON.parse(ye):[]}catch{return[]}});Ee.useEffect(()=>{let ye=null;return Y?ye=setInterval(()=>{ee(Qe=>Qe+1)},1e3):!Y&&se!==0&&clearInterval(ye),()=>clearInterval(ye)},[Y,se]);const k=()=>G(ye=>!ye),ve=()=>{if(se>30){const ye={id:`ses_${Date.now()}`,subject:$,durationSeconds:se,timestamp:new Date().toISOString()};we(Qe=>{const Ve=[ye,...Qe];return localStorage.setItem("for_me_study_sessions",JSON.stringify(Ve)),Ve})}G(!1),ee(0)},[be,Ne]=Ee.useState(()=>{try{const ye=localStorage.getItem("for_me_hydration");return ye?JSON.parse(ye):62.5}catch{return 62.5}});Ee.useEffect(()=>{localStorage.setItem("for_me_hydration",JSON.stringify(be))},[be]);const[_e,Ue]=Ee.useState(()=>{try{const ye=localStorage.getItem("for_me_sleep_hours");return ye?JSON.parse(ye):8}catch{return 8}}),ot=ye=>{Ue(ye),localStorage.setItem("for_me_sleep_hours",JSON.stringify(ye))},[Be,Me]=Ee.useState(()=>{try{const ye=localStorage.getItem("for_me_daily_rating");return ye?JSON.parse(ye):8}catch{return 8}});Ee.useEffect(()=>{localStorage.setItem("for_me_daily_rating",JSON.stringify(Be))},[Be]);const Ie=()=>{const ye=new Date,Qe=ye.getFullYear(),Ve=String(ye.getMonth()+1).padStart(2,"0"),Ze=String(ye.getDate()).padStart(2,"0");return`${Qe}-${Ve}-${Ze}`},[Ge,gt]=Ee.useState(()=>{try{return localStorage.getItem("for_me_last_active_date")||Ie()}catch{return Ie()}}),vt=ye=>{if(b(Qe=>{const Ve=Qe.map(Ze=>({...Ze,completed:!1,completedAt:void 0}));return localStorage.setItem("for_me_tasks",JSON.stringify(Ve)),Ve}),L(Qe=>{const Ve=Qe.map(Ze=>({...Ze,completed:!1,streak:Ze.completed?Ze.streak:0}));return localStorage.setItem("for_me_habits",JSON.stringify(Ve)),Ve}),Ne(0),localStorage.setItem("for_me_hydration",JSON.stringify(0)),se>30){const Qe={id:`ses_${Date.now()}`,subject:$,durationSeconds:se,timestamp:new Date().toISOString()};we(Ve=>{const Ze=[Qe,...Ve];return localStorage.setItem("for_me_study_sessions",JSON.stringify(Ze)),Ze})}G(!1),ee(0),gt(ye),localStorage.setItem("for_me_last_active_date",ye)};Ee.useEffect(()=>{const ye=()=>{const Ve=Ie(),Ze=localStorage.getItem("for_me_last_active_date");Ze?Ze!==Ve&&vt(Ve):(localStorage.setItem("for_me_last_active_date",Ve),gt(Ve))};ye();const Qe=setInterval(ye,1e4);return window.addEventListener("focus",ye),()=>{clearInterval(Qe),window.removeEventListener("focus",ye)}},[se,$]);const Mt=()=>{const ye=Ie();vt(ye)},Ut=()=>{["for_me_profile","for_me_tasks","for_me_habits","for_me_routines","for_me_hydration","for_me_sleep_hours","for_me_daily_rating","for_me_study_sessions","for_me_wallpaper_settings_v3","for_me_wallpaper_theme","for_me_app_theme","for_me_is_hud_hidden","for_me_last_active_date","for_me_active_yt","for_me_saved_yt_library"].forEach(Qe=>localStorage.removeItem(Qe)),t($a),b([{id:"1",text:"Core engineering deep focus sprint",completed:!1},{id:"2",text:"System architecture review & refinement",completed:!1},{id:"3",text:"Physical movement & hydration (8 glasses)",completed:!1}]),L([{id:"h1",name:"Deep Focus & Engineering Block",completed:!1,streak:0},{id:"h2",name:"Hydration Target (8 Glasses)",completed:!1,streak:0},{id:"h3",name:"Mindful Walk & Movement",completed:!1,streak:0}]),j(_l),Ne(0),Ue(8),Me(8),ee(0),G(!1),we([]),_(Gs),gt(Ie())},[an,Dt]=Ee.useState("youtube"),[$t,Bt]=Ee.useState(!1),[on,Q]=Ee.useState("brown-noise"),[Zt,Lt]=Ee.useState(.65),[kt,de]=Ee.useState(!1),[_t,Ye]=Ee.useState(!1),[st,z]=Ee.useState(!1),[E,ne]=Ee.useState(()=>{try{const ye=localStorage.getItem("for_me_active_yt");return ye?JSON.parse(ye):Jl[0]}catch{return Jl[0]}}),[Re,Se]=Ee.useState(70),[ke,Oe]=Ee.useState(!1),[me,xe]=Ee.useState(!1),[ge,I]=Ee.useState(()=>{try{const ye=localStorage.getItem("for_me_saved_yt_library");return ye?JSON.parse(ye):[]}catch{return[]}});Ee.useEffect(()=>{E&&localStorage.setItem("for_me_active_yt",JSON.stringify(E))},[E]),Ee.useEffect(()=>{localStorage.setItem("for_me_saved_yt_library",JSON.stringify(ge))},[ge]);const re=ye=>{if(_t){Ye(!1);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("pauseVideo")}catch{}}Dt("ambient");const Qe=ye||on;Q(Qe),fs.play(Qe),Bt(!0);const Ve=na.find(Ze=>Ze.id===Qe);Ni.startKeepAlive(),Ni.updateMetadata({title:(Ve==null?void 0:Ve.title)||"Procedural Soundscape",artist:"FOR ME Sanctuary (Offline)",album:"Sound Sanctuary",onPlay:()=>re(Qe),onPause:ie})},ie=()=>{fs.stop(),Bt(!1),Ni.stopKeepAlive(),Ni.setPlaybackState("paused")},Te=ye=>{Lt(ye),fs.setVolume(ye)},Ae=()=>{const ye=fs.toggleMute();de(ye)},Pe=ye=>{fs.stop(),Bt(!1),ne(ye),Dt("youtube"),Ye(!0),Oe(!1);try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}},$e=()=>{if(_t){Ye(!1);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("pauseVideo")}catch{}}else{fs.stop(),Bt(!1),Dt("youtube"),Ye(!0),Oe(!1);try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute(),typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("playVideo")}catch{}}},ft=()=>{Ye(!1);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("stopVideo")}catch{}},Ce=()=>{try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("nextVideo"),Ye(!0)}catch{}},Ke=()=>{try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("previousVideo"),Ye(!0)}catch{}},fe=ye=>{Se(ye);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("setVolume",[ye])}catch{}},ze=()=>{Oe(ye=>{const Qe=!ye;try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand(Qe?"mute":"unMute")}catch{}return Qe})},lt=(ye,Qe)=>{var St;const Ve=Hv(ye);if(!Ve)return{success:!1,error:"Could not recognize a valid YouTube video or playlist link. Please check the URL format and try again."};const Ze=(Qe==null?void 0:Qe.trim())||(Ve.type==="playlist"?`Custom Playlist (${(St=Ve.playlistId)==null?void 0:St.slice(0,8)}...)`:`YouTube Audio (${Ve.videoId||"Stream"})`),Pt={id:`yt-${Date.now()}-${Math.random().toString(36).substr(2,5)}`,title:Ze,type:Ve.type,videoId:Ve.videoId,playlistId:Ve.playlistId,url:Ve.cleanUrl,thumbnailUrl:Gv(Ve.videoId),channel:Ve.type==="playlist"?"Custom YouTube Playlist":"Custom YouTube Stream",createdAt:new Date().toISOString()};return I(Xt=>[Pt,...Xt]),Pe(Pt),{success:!0,item:Pt}},mt=ye=>{I(Qe=>Qe.filter(Ve=>Ve.id!==ye))};return h.jsx(cm.Provider,{value:{profile:e,setProfile:t,updateProfile:r,appTheme:o,setAppTheme:l,toggleAppTheme:d,isHUDHidden:p,setIsHUDHidden:u,toggleHUDHidden:m,tasks:S,toggleTask:R,addTask:F,deleteTask:D,wallpaperTheme:v,setWallpaperTheme:y,wallpaperSettings:g,updateWallpaperSettings:M,resetWallpaperSettings:A,habits:U,toggleHabit:w,addHabit:N,deleteHabit:J,routines:X,addRoutineBlock:B,updateRoutineBlock:O,deleteRoutineBlock:V,resetRoutines:H,studySeconds:se,isStudyActive:Y,studySubject:$,setStudySubject:P,toggleStudyTimer:k,resetStudyTimer:ve,studySessions:K,hydration:be,setHydration:Ne,sleepHours:_e,setSleep:ot,dailyRating:Be,setDailyRating:Me,lastActiveDate:Ge,resetDayProgress:Mt,factoryReset:Ut,audioSource:an,setAudioSource:Dt,isAudioPlaying:$t,activeSoundscapeId:on,audioVolume:Zt,isAudioMuted:kt,playSoundscape:re,stopSoundscape:ie,setAudioVolume:Te,toggleAudioMute:Ae,isYouTubePlaying:_t,setYouTubeIsPlaying:Ye,isYouTubePlayerReady:st,setYouTubePlayerReady:z,activeYouTubeItem:E,youtubeVolume:Re,isYouTubeMuted:ke,savedYouTubeItems:ge,showYouTubePreview:me,setShowYouTubePreview:xe,playYouTubeItem:Pe,toggleYouTubePlay:$e,stopYouTube:ft,nextYouTubeTrack:Ce,prevYouTubeTrack:Ke,setYouTubeVolume:fe,toggleYouTubeMute:ze,addYouTubeToLibrary:lt,removeYouTubeFromLibrary:mt},children:s})},$r=()=>{const s=Ee.useContext(cm);if(!s)throw new Error("useData must be used within a DataProvider");return s},Wv=()=>{const s=Ee.useRef(null),{isHUDHidden:e,wallpaperSettings:t,appTheme:r}=$r(),o=Ee.useRef(e),l=Ee.useRef(t),d=Ee.useRef(r);return Ee.useEffect(()=>{o.current=e},[e]),Ee.useEffect(()=>{l.current=t},[t]),Ee.useEffect(()=>{d.current=r},[r]),Ee.useEffect(()=>{const p=s.current;if(!p)return;const u=p.getContext("2d");if(!u)return;let m,v=0,y=0;const g=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let _=[];const M=()=>{_=[];const O=l.current.starDensity||"balanced",V=O==="sparse"?.45:O==="dense"?1.6:O==="galaxy"?2.4:1,H=v<768?85:160,se=Math.round(H*V);for(let ee=0;ee<se;ee++){const Y=Math.random()>.85?2:Math.random()>.45?1:0,G=Math.random()*.65+(Y===2?.85:.35);_.push({x:Math.random()*v,y:Math.random()*y,z:Y,radius:G,alpha:Math.random()*.55+.25,alphaSpeed:Math.random()*.015+.005,alphaPhase:Math.random()*Math.PI*2,vx:(Math.random()-.5)*.06,vy:(Math.random()-.5)*.06})}},A=()=>{if(!p)return;const O=Math.min(window.devicePixelRatio||1,2);v=window.innerWidth,y=window.innerHeight,p.width=v*O,p.height=y*O,p.style.width=`${v}px`,p.style.height=`${y}px`,u.scale(O,O),M()};A(),window.addEventListener("resize",A,{passive:!0});let S=v/2,b=y/2,R=v/2,F=y/2;const D=O=>{l.current.interactiveParallax!==!1&&(S=O.clientX,b=O.clientY)};window.addEventListener("mousemove",D,{passive:!0});const U=(O,V,H,se)=>{u.save(),u.translate(O,V);const ee=d.current==="light",Y=Math.max(.15,Math.min(.95,se));u.globalAlpha=Y;const G=u.createRadialGradient(0,0,0,0,0,H*.9);ee?(G.addColorStop(0,"rgba(245, 158, 11, 0.75)"),G.addColorStop(.3,"rgba(217, 119, 6, 0.28)"),G.addColorStop(.7,"rgba(180, 83, 9, 0.06)"),G.addColorStop(1,"rgba(255, 255, 255, 0)")):(G.addColorStop(0,"rgba(255, 255, 255, 0.85)"),G.addColorStop(.3,"rgba(216, 180, 254, 0.35)"),G.addColorStop(.7,"rgba(147, 51, 234, 0.08)"),G.addColorStop(1,"rgba(0, 0, 0, 0)")),u.fillStyle=G,u.beginPath(),u.arc(0,0,H*.9,0,Math.PI*2),u.fill();const $=u.createLinearGradient(-H,0,H,0);ee?($.addColorStop(0,"rgba(245, 158, 11, 0)"),$.addColorStop(.35,"rgba(217, 119, 6, 0.45)"),$.addColorStop(.5,"#b45309"),$.addColorStop(.65,"rgba(217, 119, 6, 0.45)"),$.addColorStop(1,"rgba(245, 158, 11, 0)")):($.addColorStop(0,"rgba(255, 255, 255, 0)"),$.addColorStop(.35,"rgba(233, 213, 255, 0.55)"),$.addColorStop(.5,"#ffffff"),$.addColorStop(.65,"rgba(233, 213, 255, 0.55)"),$.addColorStop(1,"rgba(255, 255, 255, 0)")),u.strokeStyle=$,u.lineWidth=.75,u.beginPath(),u.moveTo(-H,0),u.lineTo(H,0),u.stroke();const P=u.createLinearGradient(0,-H,0,H);ee?(P.addColorStop(0,"rgba(245, 158, 11, 0)"),P.addColorStop(.35,"rgba(217, 119, 6, 0.45)"),P.addColorStop(.5,"#b45309"),P.addColorStop(.65,"rgba(217, 119, 6, 0.45)"),P.addColorStop(1,"rgba(245, 158, 11, 0)")):(P.addColorStop(0,"rgba(255, 255, 255, 0)"),P.addColorStop(.35,"rgba(233, 213, 255, 0.55)"),P.addColorStop(.5,"#ffffff"),P.addColorStop(.65,"rgba(233, 213, 255, 0.55)"),P.addColorStop(1,"rgba(255, 255, 255, 0)")),u.strokeStyle=P,u.lineWidth=.75,u.beginPath(),u.moveTo(0,-H),u.lineTo(0,H),u.stroke();const K=H*.38;u.strokeStyle=ee?"rgba(180, 83, 9, 0.35)":"rgba(255, 255, 255, 0.4)",u.lineWidth=.5,u.beginPath(),u.moveTo(-K,-K),u.lineTo(K,K),u.moveTo(-K,K),u.lineTo(K,-K),u.stroke(),u.fillStyle=ee?"#d97706":"#ffffff",u.beginPath(),u.arc(0,0,1.2,0,Math.PI*2),u.fill(),u.restore()},L=[{x:-100,y:-100,length:100,speed:18,angle:Math.PI/4+.05,alpha:0,active:!1},{x:-100,y:-100,length:80,speed:16,angle:Math.PI/4-.08,alpha:0,active:!1},{x:-100,y:-100,length:110,speed:20,angle:Math.PI/4+.12,alpha:0,active:!1}];let w=120;const N=O=>{if(O==="off")return;w--;const V=O==="meteor-shower"?40:180;if(w<=0&&!g){w=Math.random()*(O==="meteor-shower"?60:200)+V;const H=L.find(se=>!se.active);H&&(H.active=!0,H.x=Math.random()*(v*.7),H.y=Math.random()*(y*.3),H.alpha=.95,H.length=Math.random()*50+70)}for(const H of L)if(H.active)if(H.x+=Math.cos(H.angle)*H.speed,H.y+=Math.sin(H.angle)*H.speed,H.alpha-=O==="meteor-shower"?.022:.016,H.alpha<=0||H.x>v+100||H.y>y+100)H.active=!1;else{u.save();const se=H.x-Math.cos(H.angle)*H.length,ee=H.y-Math.sin(H.angle)*H.length,Y=u.createLinearGradient(se,ee,H.x,H.y);Y.addColorStop(0,"rgba(255, 255, 255, 0)"),Y.addColorStop(.7,"rgba(216, 180, 254, "+H.alpha*.6+")"),Y.addColorStop(1,"#ffffff"),u.strokeStyle=Y,u.lineWidth=1.3,u.beginPath(),u.moveTo(se,ee),u.lineTo(H.x,H.y),u.stroke(),u.fillStyle="#ffffff",u.beginPath(),u.arc(H.x,H.y,1.8,0,Math.PI*2),u.fill(),u.restore()}};let J=0,X=!0;const j=()=>{X=!document.hidden};document.addEventListener("visibilitychange",j);const B=()=>{if(!X){m=requestAnimationFrame(B);return}const O=l.current,V=o.current;let H=1;O.speed==="frozen"?H=0:O.speed==="calm"?H=.45:O.speed==="dynamic"?H=1.45:H=.85,V&&H>0&&(H*=1.25),J+=g?.002:.014*H,u.clearRect(0,0,v,y),R+=(S-R)*.04,F+=(b-F)*.04;const se=(R-v/2)/(v/2),ee=(F-y/2)/(y/2);let Y=1;O.amplitude==="subtle"?Y=.55:O.amplitude==="dramatic"?Y=1.6:Y=1,V&&(Y*=1.2);const G=O.palette,$=d.current==="light";let P="#030208",K="#0b061c",we="#170a32",k="rgba(168, 85, 247, 0.22)",ve="rgba(99, 102, 241, 0.16)",be="rgba(168, 85, 247, 0.30)",Ne="rgba(192, 132, 252, 0.40)",_e=["#05030e","#090518","#0e0824"],Ue="rgba(168, 85, 247, 0.25)",ot=["#0a051d","#110930","#190c42"],Be="rgba(168, 85, 247, 0.35)",Me=["#11082e","#1c0c4b","#261063"],Ie="rgba(192, 132, 252, 0.45)",Ge=["#180b3d","#260f64","#341584"],gt="rgba(216, 180, 254, 0.55)",vt=["#0c0620","#140833","#1e0c4a","#281061"],Mt="rgba(233, 213, 255, 0.65)";$?G==="celestial-cyan"?(P="#eef8ff",K="#d7effe",we="#b5e3fd",k="rgba(14, 165, 233, 0.16)",ve="rgba(6, 182, 212, 0.12)",be="rgba(2, 132, 199, 0.12)",Ne="rgba(3, 105, 161, 0.20)",_e=["#93c5fd","#bfdbfe","#dbeafe"],Ue="rgba(29, 78, 216, 0.35)",ot=["#60a5fa","#93c5fd","#bfdbfe"],Be="rgba(2, 132, 199, 0.42)",Me=["#38bdf8","#7dd3fc","#bae6fd"],Ie="rgba(14, 165, 233, 0.50)",Ge=["#bae6fd","#d7f0fd","#f0f9ff"],gt="rgba(56, 189, 248, 0.58)",vt=["#f0f9ff","#f8fcff","#ffffff","#ffffff"],Mt="rgba(2, 132, 199, 0.68)"):G==="supernova-sunset"?(P="#fff1f2",K="#fecdd3",we="#fda4af",k="rgba(244, 63, 94, 0.16)",ve="rgba(249, 115, 22, 0.12)",be="rgba(225, 29, 72, 0.12)",Ne="rgba(190, 18, 60, 0.20)",_e=["#f43f5e","#fb7185","#fda4af"],Ue="rgba(159, 18, 57, 0.35)",ot=["#fb7185","#fda4af","#fecdd3"],Be="rgba(225, 29, 72, 0.42)",Me=["#fda4af","#fecdd3","#ffe4e6"],Ie="rgba(244, 63, 94, 0.50)",Ge=["#fecdd3","#ffe4e6","#fff1f2"],gt="rgba(251, 113, 133, 0.58)",vt=["#fff5f6","#fffafb","#ffffff","#ffffff"],Mt="rgba(225, 29, 72, 0.68)"):G==="nocturne-silver"?(P="#fafafa",K="#f4f4f6",we="#e4e4e7",k="rgba(113, 113, 122, 0.14)",ve="rgba(82, 82, 91, 0.10)",be="rgba(82, 82, 91, 0.12)",Ne="rgba(63, 63, 70, 0.20)",_e=["#a1a1aa","#d4d4d8","#e4e4e7"],Ue="rgba(63, 63, 70, 0.35)",ot=["#d4d4d8","#e4e4e7","#f1f1f3"],Be="rgba(82, 82, 91, 0.42)",Me=["#e4e4e7","#f1f1f3","#f4f4f6"],Ie="rgba(113, 113, 122, 0.50)",Ge=["#f1f1f3","#f6f6f8","#fafafa"],gt="rgba(161, 161, 170, 0.58)",vt=["#f6f6f8","#fcfcfc","#ffffff","#ffffff"],Mt="rgba(82, 82, 91, 0.68)"):G==="cyberpunk-neon"?(P="#fdf2f8",K="#fae8ff",we="#f5d0fe",k="rgba(236, 72, 153, 0.18)",ve="rgba(6, 182, 212, 0.14)",be="rgba(168, 85, 247, 0.15)",Ne="rgba(236, 72, 153, 0.22)",_e=["#f472b6","#fbcfe8","#fdf2f8"],Ue="rgba(219, 39, 119, 0.35)",ot=["#c084fc","#e9d5ff","#fae8ff"],Be="rgba(147, 51, 234, 0.42)",Me=["#38bdf8","#bae6fd","#f0f9ff"],Ie="rgba(2, 132, 199, 0.50)",Ge=["#fbcfe8","#fce7f3","#ffffff"],gt="rgba(236, 72, 153, 0.58)",vt=["#fdf2f8","#ffffff","#ffffff","#ffffff"],Mt="rgba(168, 85, 247, 0.68)"):G==="solar-gold"?(P="#fffbeb",K="#fef3c7",we="#fde68a",k="rgba(245, 158, 11, 0.20)",ve="rgba(234, 88, 12, 0.14)",be="rgba(217, 119, 6, 0.15)",Ne="rgba(245, 158, 11, 0.22)",_e=["#f59e0b","#fbbf24","#fef3c7"],Ue="rgba(180, 83, 9, 0.38)",ot=["#fbbf24","#fcd34d","#fef9c3"],Be="rgba(217, 119, 6, 0.45)",Me=["#fde047","#fef08a","#fefce8"],Ie="rgba(234, 88, 12, 0.52)",Ge=["#fef08a","#fefce8","#ffffff"],gt="rgba(245, 158, 11, 0.60)",vt=["#fefce8","#ffffff","#ffffff","#ffffff"],Mt="rgba(217, 119, 6, 0.70)"):G==="emerald-aurora"?(P="#f0fdf4",K="#dcfce7",we="#bbf7d0",k="rgba(16, 185, 129, 0.20)",ve="rgba(34, 197, 94, 0.14)",be="rgba(22, 163, 74, 0.15)",Ne="rgba(16, 185, 129, 0.22)",_e=["#86efac","#bbf7d0","#dcfce7"],Ue="rgba(22, 163, 74, 0.38)",ot=["#4ade80","#86efac","#bbf7d0"],Be="rgba(21, 128, 61, 0.45)",Me=["#22c55e","#4ade80","#86efac"],Ie="rgba(16, 185, 129, 0.52)",Ge=["#86efac","#bbf7d0","#f0fdf4"],gt="rgba(22, 163, 74, 0.60)",vt=["#f0fdf4","#f8fafc","#ffffff","#ffffff"],Mt="rgba(16, 185, 129, 0.70)"):G==="pure-pitch-black"?(P="#ffffff",K="#f8fafc",we="#f1f5f9",k="rgba(148, 163, 184, 0.16)",ve="rgba(100, 116, 139, 0.10)",be="rgba(71, 85, 105, 0.15)",Ne="rgba(51, 65, 85, 0.22)",_e=["#cbd5e1","#e2e8f0","#f1f5f9"],Ue="rgba(71, 85, 105, 0.38)",ot=["#94a3b8","#cbd5e1","#e2e8f0"],Be="rgba(51, 65, 85, 0.45)",Me=["#64748b","#94a3b8","#cbd5e1"],Ie="rgba(30, 41, 59, 0.52)",Ge=["#cbd5e1","#e2e8f0","#f8fafc"],gt="rgba(51, 65, 85, 0.60)",vt=["#f8fafc","#ffffff","#ffffff","#ffffff"],Mt="rgba(15, 23, 42, 0.70)"):(P="#fffbf3",K="#feeccd",we="#fad4a0",k="rgba(245, 158, 11, 0.18)",ve="rgba(217, 119, 6, 0.12)",be="rgba(180, 83, 9, 0.12)",Ne="rgba(146, 64, 14, 0.20)",_e=["#d4a373","#bc8a5f","#a47148"],Ue="rgba(146, 64, 14, 0.38)",ot=["#e6ba8f","#d4a373","#bc8a5f"],Be="rgba(180, 83, 9, 0.45)",Me=["#f3d5b5","#e6ba8f","#d4a373"],Ie="rgba(217, 119, 6, 0.52)",Ge=["#faedcd","#f3d5b5","#fefae0"],gt="rgba(245, 158, 11, 0.60)",vt=["#fefae0","#fffdfa","#ffffff","#ffffff"],Mt="rgba(217, 119, 6, 0.70)"):G==="celestial-cyan"?(P="#020712",K="#041322",we="#071f35",k="rgba(14, 165, 233, 0.18)",ve="rgba(6, 182, 212, 0.12)",be="rgba(56, 189, 248, 0.12)",Ne="rgba(103, 232, 249, 0.20)",_e=["#030914","#051221","#071c31"],Ue="rgba(56, 189, 248, 0.22)",ot=["#040f1f","#071b33","#0a2646"],Be="rgba(56, 189, 248, 0.32)",Me=["#06152a","#0a2544","#0f345c"],Ie="rgba(56, 189, 248, 0.42)",Ge=["#081b34","#0d2e54","#134273"],gt="rgba(125, 211, 252, 0.52)",vt=["#051224","#091c36","#0e294d","#133866"],Mt="rgba(186, 230, 253, 0.65)"):G==="supernova-sunset"?(P="#0a0208",K="#160412",we="#24061c",k="rgba(244, 63, 94, 0.18)",ve="rgba(249, 115, 22, 0.12)",be="rgba(251, 113, 133, 0.12)",Ne="rgba(253, 186, 116, 0.20)",_e=["#0d020a","#170412","#22061b"],Ue="rgba(244, 63, 94, 0.22)",ot=["#150311","#24061d","#340929"],Be="rgba(244, 63, 94, 0.32)",Me=["#1e0518","#320827","#470c38"],Ie="rgba(251, 113, 133, 0.42)",Ge=["#280620","#420b33","#5c0f47"],gt="rgba(251, 146, 60, 0.52)",vt=["#180314","#270620","#3b0930","#500d41"],Mt="rgba(254, 215, 170, 0.65)"):G==="nocturne-silver"?(P="#030306",K="#08080d",we="#101017",k="rgba(161, 161, 170, 0.16)",ve="rgba(113, 113, 122, 0.10)",be="rgba(212, 212, 216, 0.12)",Ne="rgba(228, 228, 231, 0.18)",_e=["#060609","#0c0c12","#13131c"],Ue="rgba(161, 161, 170, 0.20)",ot=["#0a0a0f","#12121b","#1a1a27"],Be="rgba(161, 161, 170, 0.30)",Me=["#0e0e16","#181824","#232333"],Ie="rgba(212, 212, 216, 0.40)",Ge=["#13131e","#1f1f30","#2d2d42"],gt="rgba(228, 228, 231, 0.50)",vt=["#0c0c13","#14141f","#1d1d2b","#272738"],Mt="rgba(244, 244, 245, 0.65)"):G==="cyberpunk-neon"?(P="#06000e",K="#120024",we="#22003d",k="rgba(236, 72, 153, 0.22)",ve="rgba(6, 182, 212, 0.18)",be="rgba(34, 211, 238, 0.15)",Ne="rgba(244, 114, 182, 0.22)",_e=["#0a0014","#150029","#24003d"],Ue="rgba(168, 85, 247, 0.25)",ot=["#120021","#1f0038","#310052"],Be="rgba(236, 72, 153, 0.35)",Me=["#1c0030","#2d004d","#42006e"],Ie="rgba(6, 182, 212, 0.45)",Ge=["#25003d","#3d0066","#59008f"],gt="rgba(244, 63, 94, 0.55)",vt=["#160029","#260045","#380062","#4e0085"],Mt="rgba(34, 211, 238, 0.70)"):G==="solar-gold"?(P="#080400",K="#140900",we="#241000",k="rgba(245, 158, 11, 0.22)",ve="rgba(234, 88, 12, 0.16)",be="rgba(251, 191, 36, 0.15)",Ne="rgba(252, 211, 77, 0.22)",_e=["#0a0400","#170900","#261000"],Ue="rgba(217, 119, 6, 0.25)",ot=["#130700","#220e00","#361600"],Be="rgba(245, 158, 11, 0.35)",Me=["#1e0a00","#301300","#4a1e00"],Ie="rgba(251, 191, 36, 0.45)",Ge=["#290e00","#421a00","#612700"],gt="rgba(252, 211, 77, 0.55)",vt=["#190800","#2a0e00","#401500","#592000"],Mt="rgba(254, 240, 138, 0.70)"):G==="emerald-aurora"?(P="#010d05",K="#021a0a",we="#052e14",k="rgba(16, 185, 129, 0.22)",ve="rgba(52, 211, 153, 0.16)",be="rgba(110, 231, 183, 0.15)",Ne="rgba(52, 211, 153, 0.22)",_e=["#021508","#04240f","#073918"],Ue="rgba(16, 185, 129, 0.25)",ot=["#031f0c","#063316","#0a4b22"],Be="rgba(52, 211, 153, 0.35)",Me=["#052b12","#09431e","#0e602c"],Ie="rgba(110, 231, 183, 0.45)",Ge=["#083818","#0d5426","#147738"],gt="rgba(167, 243, 208, 0.55)",vt=["#062e14","#0a4720","#10632d","#18863f"],Mt="rgba(110, 231, 183, 0.70)"):G==="pure-pitch-black"&&(P="#000000",K="#020202",we="#060606",k="rgba(255, 255, 255, 0.08)",ve="rgba(161, 161, 170, 0.06)",be="rgba(161, 161, 170, 0.10)",Ne="rgba(228, 228, 231, 0.15)",_e=["#020202","#060606","#0a0a0a"],Ue="rgba(161, 161, 170, 0.20)",ot=["#050505","#0a0a0a","#101010"],Be="rgba(161, 161, 170, 0.30)",Me=["#080808","#0e0e0e","#161616"],Ie="rgba(212, 212, 216, 0.40)",Ge=["#0c0c0c","#141414","#1e1e1e"],gt="rgba(228, 228, 231, 0.50)",vt=["#080808","#101010","#181818","#222222"],Mt="rgba(255, 255, 255, 0.75)");const Ut=u.createLinearGradient(0,0,0,y);Ut.addColorStop(0,P),Ut.addColorStop(.45,K),Ut.addColorStop(1,we),u.fillStyle=Ut,u.fillRect(0,0,v,y);const an=u.createRadialGradient(v*.8,y*.18,0,v*.8,y*.18,v*.5);an.addColorStop(0,k),an.addColorStop(.7,"rgba(0, 0, 0, 0.04)"),an.addColorStop(1,"rgba(0, 0, 0, 0)"),u.fillStyle=an,u.fillRect(0,0,v,y);const Dt=u.createRadialGradient(v*.18,y*.82,0,v*.18,y*.82,v*.55);if(Dt.addColorStop(0,ve),Dt.addColorStop(.65,"rgba(0, 0, 0, 0.03)"),Dt.addColorStop(1,"rgba(0, 0, 0, 0)"),u.fillStyle=Dt,u.fillRect(0,0,v,y),O.showNebulaDust){u.save();const ge=u.createRadialGradient(v*.35,y*.2,0,v*.35,y*.2,v*.38);ge.addColorStop(0,k),ge.addColorStop(.5,"rgba(126, 34, 206, 0.04)"),ge.addColorStop(1,"rgba(0, 0, 0, 0)"),u.fillStyle=ge,u.fillRect(0,0,v,y);const I=u.createRadialGradient(v*.7,y*.14,0,v*.7,y*.14,v*.32);I.addColorStop(0,ve),I.addColorStop(.6,"rgba(14, 116, 144, 0.03)"),I.addColorStop(1,"rgba(0, 0, 0, 0)"),u.fillStyle=I,u.fillRect(0,0,v,y),u.restore()}if(O.showConstellations){u.save(),u.strokeStyle=$?"rgba(180, 130, 80, 0.28)":"rgba(255, 255, 255, 0.14)",u.lineWidth=.75;const ge=[{x:v*.68,y:y*.1},{x:v*.72,y:y*.08},{x:v*.76,y:y*.09},{x:v*.78,y:y*.13},{x:v*.83,y:y*.14},{x:v*.84,y:y*.1},{x:v*.78,y:y*.09}];u.beginPath(),u.moveTo(ge[0].x,ge[0].y);for(let re=1;re<ge.length;re++)u.lineTo(ge[re].x,ge[re].y);u.stroke(),u.fillStyle=$?"#b45309":"#ffffff";for(const re of ge)u.beginPath(),u.arc(re.x,re.y,1.4,0,Math.PI*2),u.fill();const I=[{x:v*.28,y:y*.08},{x:v*.31,y:y*.12},{x:v*.34,y:y*.09},{x:v*.37,y:y*.13},{x:v*.4,y:y*.1}];u.beginPath(),u.moveTo(I[0].x,I[0].y);for(let re=1;re<I.length;re++)u.lineTo(I[re].x,I[re].y);u.stroke();for(const re of I)u.beginPath(),u.arc(re.x,re.y,1.3,0,Math.PI*2),u.fill();u.restore()}if(O.showComet){u.save();const ge=J*.04%1,I=v*.75,re=y*.04,ie=v*.25,Te=y*.22,Ae=I+(ie-I)*ge,Pe=re+(Te-re)*ge,$e=Math.atan2(Te-re,ie-I)+Math.PI,ft=140,Ce=Ae+Math.cos($e)*ft,Ke=Pe+Math.sin($e)*ft,fe=u.createLinearGradient(Ce,Ke,Ae,Pe);fe.addColorStop(0,"rgba(56, 189, 248, 0)"),fe.addColorStop(.5,"rgba(168, 85, 247, 0.25)"),fe.addColorStop(.85,"rgba(233, 213, 255, 0.65)"),fe.addColorStop(1,"#ffffff"),u.strokeStyle=fe,u.lineWidth=1.8,u.beginPath(),u.moveTo(Ce,Ke),u.lineTo(Ae,Pe),u.stroke(),u.fillStyle="#ffffff",u.shadowColor="#67e8f9",u.shadowBlur=8,u.beginPath(),u.arc(Ae,Pe,2.2,0,Math.PI*2),u.fill(),u.restore()}if(O.showMeridian){u.save();const ge=v*.91;u.strokeStyle=be,u.lineWidth=1,u.beginPath(),u.moveTo(ge,0),u.lineTo(ge,y),u.stroke(),u.strokeStyle="rgba(255, 255, 255, 0.18)",u.lineWidth=1;for(let I=50;I<y;I+=70)u.beginPath(),u.moveTo(ge-4,I),u.lineTo(ge+4,I),u.stroke();u.restore()}if(O.showOrbitalTrack){u.save();const ge=v*.78,I=y*.18,re=Math.min(v,y)*.45,ie=Math.min(v,y)*.22;u.shadowColor=Ne,u.shadowBlur=6,u.strokeStyle=Ne,u.lineWidth=1.2,u.beginPath(),u.ellipse(ge,I,re,ie,-.22,Math.PI*.1,Math.PI*1.3),u.stroke(),u.setLineDash([3,8]),u.strokeStyle="rgba(255, 255, 255, 0.22)",u.lineWidth=.8,u.beginPath(),u.ellipse(ge,I,re*1.08,ie*1.08,-.22,Math.PI*.05,Math.PI*1.25),u.stroke(),u.setLineDash([]),u.restore()}if(O.showStars)for(let ge=0;ge<_.length;ge++){const I=_[ge];!g&&H>0&&(I.x+=I.vx*H,I.y+=I.vy*H,I.alphaPhase+=I.alphaSpeed*H,I.x<0&&(I.x=v),I.x>v&&(I.x=0),I.y<0&&(I.y=y),I.y>y&&(I.y=0));const re=(I.z+1)*.35,ie=I.x+se*12*re,Te=I.y+ee*12*re,Ae=Math.max(.12,Math.min(.85,I.alpha+Math.sin(I.alphaPhase)*.22));u.beginPath(),u.arc(ie,Te,I.radius,0,Math.PI*2),u.fillStyle=$?`rgba(180, 130, 80, ${(Ae*.65).toFixed(3)})`:`rgba(255, 255, 255, ${Ae.toFixed(3)})`,u.fill()}const $t=O.waveGeometry,Bt=O.waveLayerDensity,on=(ge,I,re,ie=2)=>{u.save(),u.translate(ge,I);const Te=u.createRadialGradient(0,0,0,0,0,ie*2.5);$?(Te.addColorStop(0,`rgba(245, 158, 11, ${re})`),Te.addColorStop(.35,`rgba(217, 119, 6, ${re*.7})`),Te.addColorStop(1,"rgba(255, 255, 255, 0)"),u.fillStyle=Te,u.beginPath(),u.arc(0,0,ie*2.5,0,Math.PI*2),u.fill(),u.strokeStyle=`rgba(180, 83, 9, ${re*.8})`,u.lineWidth=.75,u.beginPath(),u.moveTo(-ie*2,0),u.lineTo(ie*2,0),u.moveTo(0,-ie*2),u.lineTo(0,ie*2),u.stroke()):(Te.addColorStop(0,`rgba(255, 255, 255, ${re})`),Te.addColorStop(.35,`rgba(233, 213, 255, ${re*.7})`),Te.addColorStop(1,"rgba(255, 255, 255, 0)"),u.fillStyle=Te,u.beginPath(),u.arc(0,0,ie*2.5,0,Math.PI*2),u.fill(),u.strokeStyle=`rgba(255, 255, 255, ${re*.9})`,u.lineWidth=.75,u.beginPath(),u.moveTo(-ie*2,0),u.lineTo(ie*2,0),u.moveTo(0,-ie*2),u.lineTo(0,ie*2),u.stroke()),u.restore()},Q=(ge,I,re,ie,Te,Ae,Pe,$e,ft,Ce,Ke=[])=>{const fe=[0,v*.32,v*.68,v],ze=[];for(let Ze=0;Ze<4;Ze++){const Pt=Math.sin(J*re+ie+Ze*1.4)*(I*.75)+Math.cos(J*re*.7+ie*1.2+Ze*2.1)*(I*.35);ze.push({x:fe[Ze],y:y*ge[Ze]+Pt})}const lt=[ze[0],...ze,ze[ze.length-1]],mt=[],ye=.5;for(let Ze=1;Ze<lt.length-2;Ze++){const Pt=lt[Ze-1],St=lt[Ze],Xt=lt[Ze+1],Jt=lt[Ze+2],zi=(Xt.x-Pt.x)*ye,xi=(Xt.y-Pt.y)*ye,vi=(Jt.x-St.x)*ye,Xr=(Jt.y-St.y)*ye;mt.push({p1:St,cp1:{x:St.x+zi/3,y:St.y+xi/3},cp2:{x:Xt.x-vi/3,y:Xt.y-Xr/3},p2:Xt})}u.save(),ft>0&&(u.shadowColor=$e,u.shadowBlur=ft,u.shadowOffsetY=Ce),u.beginPath(),u.moveTo(ze[0].x,ze[0].y);for(const Ze of mt)u.bezierCurveTo(Ze.cp1.x,Ze.cp1.y,Ze.cp2.x,Ze.cp2.y,Ze.p2.x,Ze.p2.y);u.lineTo(v,y),u.lineTo(0,y),u.closePath(),u.fillStyle=Te,u.fill(),u.save(),u.clip();const Qe=Math.min(...ze.map(Ze=>Ze.y)),Ve=u.createLinearGradient(0,Qe,0,Qe+140);$?(Ve.addColorStop(0,"rgba(255, 255, 255, 0.40)"),Ve.addColorStop(.25,"rgba(251, 191, 36, 0.14)"),Ve.addColorStop(.7,"rgba(217, 119, 6, 0.04)"),Ve.addColorStop(1,"rgba(255, 255, 255, 0)")):(Ve.addColorStop(0,"rgba(255, 255, 255, 0.26)"),Ve.addColorStop(.25,"rgba(216, 180, 254, 0.16)"),Ve.addColorStop(.7,"rgba(147, 51, 234, 0.05)"),Ve.addColorStop(1,"rgba(0, 0, 0, 0)")),u.fillStyle=Ve,u.fillRect(0,Qe,v,y),u.beginPath();for(let Ze=0;Ze<mt.length;Ze++){const Pt=mt[Ze],St=18+Math.sin(J*.75+Ze*1.5)*4;Ze===0&&u.moveTo(Pt.p1.x,Pt.p1.y+St),u.bezierCurveTo(Pt.cp1.x,Pt.cp1.y+St,Pt.cp2.x,Pt.cp2.y+St,Pt.p2.x,Pt.p2.y+St)}u.strokeStyle=$?"rgba(160, 90, 40, 0.16)":"rgba(255, 255, 255, 0.10)",u.lineWidth=1,u.stroke(),u.beginPath();for(let Ze=0;Ze<mt.length;Ze++){const Pt=mt[Ze],St=38+Math.cos(J*.65+Ze*1.8)*5;Ze===0&&u.moveTo(Pt.p1.x,Pt.p1.y+St),u.bezierCurveTo(Pt.cp1.x,Pt.cp1.y+St,Pt.cp2.x,Pt.cp2.y+St,Pt.p2.x,Pt.p2.y+St)}u.strokeStyle=$?"rgba(160, 90, 40, 0.10)":"rgba(255, 255, 255, 0.06)",u.lineWidth=.8,u.stroke(),u.restore(),u.strokeStyle=Ae,u.lineWidth=Pe,u.stroke(),u.restore();for(const Ze of Ke){const Pt=Math.min(mt.length-1,Math.floor(Ze*mt.length)),St=Ze*mt.length-Pt,Xt=mt[Pt],Jt=1-St,zi=Jt*Jt*Jt*Xt.p1.x+3*Jt*Jt*St*Xt.cp1.x+3*Jt*St*St*Xt.cp2.x+St*St*St*Xt.p2.x,xi=Jt*Jt*Jt*Xt.p1.y+3*Jt*Jt*St*Xt.cp1.y+3*Jt*St*St*Xt.cp2.y+St*St*St*Xt.p2.y,vi=.5+Math.sin(J*2+Ze*8)*.35;on(zi,xi,vi,2)}},Zt=(ge,I,re,ie,Te,Ae,Pe,$e,ft,Ce,Ke,fe)=>{const ze=Math.sin(J*Te+Ae)*ie,lt=[];lt.push({x:0,y:y*ge+ze});for(let mt=0;mt<I.length;mt++){const ye=v*I[mt],Qe=y*(ge-re[mt])+Math.cos(J*Te+mt+Ae)*(ie*.7);lt.push({x:ye,y:Qe})}lt.push({x:v,y:y*(ge+.03)+ze}),u.save(),Ke>0&&(u.shadowColor=Ce,u.shadowBlur=Ke,u.shadowOffsetY=fe),u.beginPath(),u.moveTo(lt[0].x,lt[0].y);for(let mt=1;mt<lt.length;mt++)u.lineTo(lt[mt].x,lt[mt].y);u.lineTo(v,y),u.lineTo(0,y),u.closePath(),u.fillStyle=Pe,u.fill(),u.strokeStyle=$e,u.lineWidth=ft,u.stroke(),u.restore()},Lt=(ge,I,re,ie,Te,Ae)=>{u.save(),u.globalCompositeOperation="screen",u.beginPath(),u.moveTo(0,y*ge);const Pe=16;for(let $e=0;$e<=Pe;$e++){const ft=$e/Pe*v,Ce=y*ge+Math.sin($e/Pe*Math.PI*2+J*re+ie)*I;$e===0?u.moveTo(ft,Ce):u.lineTo(ft,Ce)}u.lineTo(v,y),u.lineTo(0,y),u.closePath(),u.fillStyle=Te,u.fill(),u.strokeStyle=Ae,u.lineWidth=1.8,u.shadowColor=Ae,u.shadowBlur=14,u.stroke(),u.restore()},kt=O.horizonHeight||"balanced",de=kt==="low"?.08:kt==="high"?-.08:0,_t=O.waveStrokeOpacity??1,Ye=u.createLinearGradient(0,y*(.46+de),0,y*(.68+de));if(Ye.addColorStop(0,"rgba(0, 0, 0, 0)"),$)Ye.addColorStop(.5,"rgba(255, 255, 255, 0.25)");else{const ge=G==="celestial-cyan"?"rgba(7, 31, 53, 0.45)":G==="supernova-sunset"?"rgba(36, 6, 28, 0.45)":G==="nocturne-silver"?"rgba(16, 16, 23, 0.45)":G==="emerald-aurora"?"rgba(5, 46, 20, 0.45)":G==="pure-pitch-black"?"rgba(6, 6, 6, 0.45)":"rgba(20, 10, 40, 0.45)";Ye.addColorStop(.5,ge)}Ye.addColorStop(1,"rgba(0, 0, 0, 0)"),u.fillStyle=Ye,u.fillRect(0,y*(.46+de),v,y*.22);const st=u.createLinearGradient(0,y*(.55+de),0,y);st.addColorStop(0,_e[0]),st.addColorStop(.5,_e[1]),st.addColorStop(1,_e[2]);const z=u.createLinearGradient(0,y*(.63+de),0,y);z.addColorStop(0,ot[0]),z.addColorStop(.5,ot[1]),z.addColorStop(1,ot[2]);const E=u.createLinearGradient(0,y*(.71+de),0,y);E.addColorStop(0,Me[0]),E.addColorStop(.5,Me[1]),E.addColorStop(1,Me[2]);const ne=u.createLinearGradient(0,y*(.79+de),0,y);ne.addColorStop(0,Ge[0]),ne.addColorStop(.5,Ge[1]),ne.addColorStop(1,Ge[2]);const Re=u.createLinearGradient(0,y*(.86+de),0,y);Re.addColorStop(0,vt[0]),Re.addColorStop(.35,vt[1]),Re.addColorStop(.7,vt[2]),Re.addColorStop(1,vt[3]);const Se=$?"rgba(160, 140, 120, 0.12)":"rgba(0,0,0,0.55)",ke=$?"rgba(160, 140, 120, 0.16)":"rgba(0,0,0,0.65)",Oe=$?"rgba(160, 140, 120, 0.20)":"rgba(0,0,0,0.70)",me=$?"rgba(160, 140, 120, 0.22)":"rgba(0,0,0,0.75)",xe=$?"rgba(160, 140, 120, 0.26)":"rgba(0,0,0,0.80)";if($t==="mountains"?(Zt(.48+de,[.18,.5,.82],[.14,.17,.12],12*Y,.35,0,st,Ue,.8*_t,Se,16,-6),Bt!=="airy"&&Zt(.58+de,[.32,.66,.9],[.12,.15,.11],14*Y,.4,1.5,z,Be,.9*_t,ke,20,-7),Zt(.68+de,[.15,.44,.75],[.11,.13,.1],15*Y,.45,3.1,E,Ie,1*_t,Oe,24,-8),Bt==="dense"&&Zt(.78+de,[.28,.6,.86],[.09,.11,.08],14*Y,.4,4.4,ne,gt,1.1*_t,me,28,-9),Zt(.88+de,[.4,.74],[.08,.07],12*Y,.35,5.8,Re,Mt,1.2*_t,xe,32,-10)):$t==="aurora"?(Lt(.28+de*.5,32*Y,.45,0,st,Ue),Bt!=="airy"&&Lt(.4+de*.5,30*Y,.5,1.6,z,Be),Lt(.54+de*.5,26*Y,.55,3.2,E,Ie),Bt==="dense"&&Lt(.68+de*.5,22*Y,.6,4.8,ne,gt),Q([.86+de,.89+de,.85+de,.88+de],12*Y,.35,6.2,Re,Mt,1.2*_t,xe,28,-9)):$t==="ocean"?(Q([.62+de,.58+de,.65+de,.6+de],16*Y,.65,0,st,Ue,.8*_t,Se,16,-6,[.3]),Bt!=="airy"&&Q([.69+de,.73+de,.67+de,.71+de],18*Y,.7,1.8,z,Be,.9*_t,ke,20,-7,[.55]),Q([.76+de,.73+de,.79+de,.75+de],20*Y,.75,3.4,E,Ie,1*_t,Oe,24,-8,[.38,.82]),Bt==="dense"&&Q([.83+de,.86+de,.81+de,.85+de],16*Y,.65,4.9,ne,gt,1.1*_t,me,28,-9,[.65]),Q([.89+de,.87+de,.92+de,.88+de],14*Y,.55,6.2,Re,Mt,1.2*_t,xe,32,-10,[.5])):(Q([.48+de,.56+de,.64+de,.68+de],16*Y,.38,0,st,Ue,.8*_t,Se,16,-6,[.24,.68]),Bt!=="airy"&&Q([.66+de,.62+de,.55+de,.6+de],18*Y,.42,1.8,z,Be,.9*_t,ke,20,-7,[.35,.82]),Q([.69+de,.76+de,.72+de,.76+de],19*Y,.46,3.4,E,Ie,1*_t,Oe,24,-8,[.42,.78]),Bt==="dense"&&Q([.8+de,.77+de,.84+de,.8+de],16*Y,.4,4.9,ne,gt,1.1*_t,me,28,-9,[.18,.62]),Q([.88+de,.91+de,.86+de,.9+de],13*Y,.35,6.2,Re,Mt,1.2*_t,xe,32,-10,[.35,.8])),O.showCrossStars){const ge=.68+Math.sin(J*1.8)*.22,I=.6+Math.sin(J*1.5+1.2)*.24,re=.64+Math.sin(J*1.9+2.5)*.2,ie=.58+Math.sin(J*1.4+3.8)*.25,Te=.52+Math.sin(J*1.7+4.6)*.22;U(v*.5,y*.08,11,ge),U(v*.18,y*.16,9.5,I),U(v*.84,y*.2,10,re),U(v*.72,y*.34,8.5,ie),U(v*.08,y*.28,8,Te)}N(O.shootingStarMode||"occasional"),m=requestAnimationFrame(B)};return m=requestAnimationFrame(B),()=>{cancelAnimationFrame(m),window.removeEventListener("resize",A),window.removeEventListener("mousemove",D),document.removeEventListener("visibilitychange",j)}},[]),h.jsx("canvas",{ref:s,className:"fixed inset-0 pointer-events-none z-0 select-none","aria-hidden":"true"})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mf="187",jv=0,o0=1,$v=2,Vl=1,Xv=2,Ja=3,gs=0,In=1,Di=2,ia=0,to=1,hs=2,l0=3,c0=4,Yv=5,ta=100,qv=101,Kv=102,Zv=103,Jv=104,Qv=200,e_=201,t_=202,n_=203,um=204,dm=205,i_=206,r_=207,s_=208,a_=209,o_=210,l_=211,c_=212,u_=213,d_=214,Sd=0,bd=1,wd=2,ro=3,Md=4,Ed=5,Td=6,Ad=7,fm=0,f_=1,h_=2,fr=0,hm=1,pm=2,mm=3,gm=4,xm=5,vm=6,_m=7,ym=300,sa=301,so=302,ju=303,$u=304,aa=1e3,Qn=1001,Cd=1002,Ln=1003,p_=1004,yl=1005,ei=1006,Xu=1007,Br=1008,li=1009,Sm=1010,bm=1011,ao=1012,gf=1013,Yi=1014,ji=1015,qi=1016,xf=1017,vf=1018,oa=1020,wm=35902,Mm=35899,Em=1021,Tm=1022,$i=1023,Wr=1026,Hr=1027,Am=1028,_f=1029,xs=1030,yf=1031,Sf=1033,Wl=33776,jl=33777,$l=33778,Xl=33779,Rd=35840,Nd=35841,Pd=35842,Dd=35843,Ld=36196,Id=37492,zd=37496,Ud=37488,kd=37489,Ql=37490,Fd=37491,Od=37808,Bd=37809,Hd=37810,Gd=37811,Vd=37812,Wd=37813,jd=37814,$d=37815,Xd=37816,Yd=37817,qd=37818,Kd=37819,Zd=37820,Jd=37821,Qd=36492,ef=36494,tf=36495,nf=36283,rf=36284,ec=36285,sf=36286,m_=3200,af=0,g_=1,Fr="",oi="srgb",tc="srgb-linear",nc="linear",qt="srgb",Yu=7680,x_=519,v_=512,__=513,y_=514,Cm=515,S_=516,b_=517,Rm=518,Nm=519,w_=35044,u0="300 es",Ii=2e3,oo=2001;function M_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ic(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function E_(){const s=ic("canvas");return s.style.display="block",s}const d0={};function f0(...s){const e="THREE."+s.shift();console.log(e,...s)}function Pm(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function bt(...s){s=Pm(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function jt(...s){s=Pm(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Yl(...s){const e=s.join(" ");e in d0||(d0[e]=!0,bt(...s))}function T_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const A_={[Sd]:Sd,[wd]:Td,[Md]:Md,[ro]:Ed,[bd]:bd,[Td]:wd,[Ad]:Ad,[Ed]:ro};class vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,d=o.length;l<d;l++)o[l].call(this,e);e.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qu=Math.PI/180,of=180/Math.PI;function co(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Bn[s&255]+Bn[s>>8&255]+Bn[s>>16&255]+Bn[s>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[t&63|128]+Bn[t>>8&255]+"-"+Bn[t>>16&255]+Bn[t>>24&255]+Bn[r&255]+Bn[r>>8&255]+Bn[r>>16&255]+Bn[r>>24&255]).toLowerCase()}function Ot(s,e,t){return Math.max(e,Math.min(t,s))}function C_(s,e){return(s%e+e)%e}function Ku(s,e,t){return(1-t)*s+t*e}function R_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function bf(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function N_(s,e){if(e.constructor===Float32Array)return s;const t=bf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function P_(s,e){if(e.constructor===Float32Array)return s;const t=bf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const Pf=class Pf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ot(this.x,e.x,t.x),this.y=Ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ot(this.x,e,t),this.y=Ot(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ot(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ot(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,d=this.y-e.y;return this.x=l*r-d*o+e.x,this.y=l*o+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Pf.prototype.isVector2=!0;let zt=Pf;class da{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,d,p){let u=r[o+0],m=r[o+1],v=r[o+2],y=r[o+3],g=l[d+0],_=l[d+1],M=l[d+2],A=l[d+3];if(y!==A||u!==g||m!==_||v!==M){let S=u*g+m*_+v*M+y*A;S<0&&(g=-g,_=-_,M=-M,A=-A,S=-S);let b=1-p;if(S<.9995){const R=Math.acos(S),F=Math.sin(R);b=Math.sin(b*R)/F,p=Math.sin(p*R)/F,u=u*b+g*p,m=m*b+_*p,v=v*b+M*p,y=y*b+A*p}else{u=u*b+g*p,m=m*b+_*p,v=v*b+M*p,y=y*b+A*p;const R=1/Math.sqrt(u*u+m*m+v*v+y*y);u*=R,m*=R,v*=R,y*=R}}e[t]=u,e[t+1]=m,e[t+2]=v,e[t+3]=y}static multiplyQuaternionsFlat(e,t,r,o,l,d){const p=r[o],u=r[o+1],m=r[o+2],v=r[o+3],y=l[d],g=l[d+1],_=l[d+2],M=l[d+3];return e[t]=p*M+v*y+u*_-m*g,e[t+1]=u*M+v*g+m*y-p*_,e[t+2]=m*M+v*_+p*g-u*y,e[t+3]=v*M-p*y-u*g-m*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,d=e._order,p=Math.cos,u=Math.sin,m=p(r/2),v=p(o/2),y=p(l/2),g=u(r/2),_=u(o/2),M=u(l/2);switch(d){case"XYZ":this._x=g*v*y+m*_*M,this._y=m*_*y-g*v*M,this._z=m*v*M+g*_*y,this._w=m*v*y-g*_*M;break;case"YXZ":this._x=g*v*y+m*_*M,this._y=m*_*y-g*v*M,this._z=m*v*M-g*_*y,this._w=m*v*y+g*_*M;break;case"ZXY":this._x=g*v*y-m*_*M,this._y=m*_*y+g*v*M,this._z=m*v*M+g*_*y,this._w=m*v*y-g*_*M;break;case"ZYX":this._x=g*v*y-m*_*M,this._y=m*_*y+g*v*M,this._z=m*v*M-g*_*y,this._w=m*v*y+g*_*M;break;case"YZX":this._x=g*v*y+m*_*M,this._y=m*_*y+g*v*M,this._z=m*v*M-g*_*y,this._w=m*v*y-g*_*M;break;case"XZY":this._x=g*v*y-m*_*M,this._y=m*_*y-g*v*M,this._z=m*v*M+g*_*y,this._w=m*v*y+g*_*M;break;default:bt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],d=t[1],p=t[5],u=t[9],m=t[2],v=t[6],y=t[10],g=r+p+y;if(g>0){const _=.5/Math.sqrt(g+1);this._w=.25/_,this._x=(v-u)*_,this._y=(l-m)*_,this._z=(d-o)*_}else if(r>p&&r>y){const _=2*Math.sqrt(1+r-p-y);this._w=(v-u)/_,this._x=.25*_,this._y=(o+d)/_,this._z=(l+m)/_}else if(p>y){const _=2*Math.sqrt(1+p-r-y);this._w=(l-m)/_,this._x=(o+d)/_,this._y=.25*_,this._z=(u+v)/_}else{const _=2*Math.sqrt(1+y-r-p);this._w=(d-o)/_,this._x=(l+m)/_,this._y=(u+v)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,d=e._w,p=t._x,u=t._y,m=t._z,v=t._w;return this._x=r*v+d*p+o*m-l*u,this._y=o*v+d*u+l*p-r*m,this._z=l*v+d*m+r*u-o*p,this._w=d*v-r*p-o*u-l*m,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,d=e._w,p=this.dot(e);p<0&&(r=-r,o=-o,l=-l,d=-d,p=-p);let u=1-t;if(p<.9995){const m=Math.acos(p),v=Math.sin(m);u=Math.sin(u*m)/v,t=Math.sin(t*m)/v,this._x=this._x*u+r*t,this._y=this._y*u+o*t,this._z=this._z*u+l*t,this._w=this._w*u+d*t,this._onChangeCallback()}else this._x=this._x*u+r*t,this._y=this._y*u+o*t,this._z=this._z*u+l*t,this._w=this._w*u+d*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Df=class Df{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(h0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(h0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,d=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*d,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*d,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*d,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,d=e.y,p=e.z,u=e.w,m=2*(d*o-p*r),v=2*(p*t-l*o),y=2*(l*r-d*t);return this.x=t+u*m+d*y-p*v,this.y=r+u*v+p*m-l*y,this.z=o+u*y+l*v-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ot(this.x,e.x,t.x),this.y=Ot(this.y,e.y,t.y),this.z=Ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ot(this.x,e,t),this.y=Ot(this.y,e,t),this.z=Ot(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ot(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,d=t.x,p=t.y,u=t.z;return this.x=o*u-l*p,this.y=l*d-r*u,this.z=r*p-o*d,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Zu.copy(this).projectOnVector(e),this.sub(Zu)}reflect(e){return this.sub(Zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ot(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Df.prototype.isVector3=!0;let he=Df;const Zu=new he,h0=new da,Lf=class Lf{constructor(e,t,r,o,l,d,p,u,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,d,p,u,m)}set(e,t,r,o,l,d,p,u,m){const v=this.elements;return v[0]=e,v[1]=o,v[2]=p,v[3]=t,v[4]=l,v[5]=u,v[6]=r,v[7]=d,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,d=r[0],p=r[3],u=r[6],m=r[1],v=r[4],y=r[7],g=r[2],_=r[5],M=r[8],A=o[0],S=o[3],b=o[6],R=o[1],F=o[4],D=o[7],U=o[2],L=o[5],w=o[8];return l[0]=d*A+p*R+u*U,l[3]=d*S+p*F+u*L,l[6]=d*b+p*D+u*w,l[1]=m*A+v*R+y*U,l[4]=m*S+v*F+y*L,l[7]=m*b+v*D+y*w,l[2]=g*A+_*R+M*U,l[5]=g*S+_*F+M*L,l[8]=g*b+_*D+M*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],p=e[5],u=e[6],m=e[7],v=e[8];return t*d*v-t*p*m-r*l*v+r*p*u+o*l*m-o*d*u}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],p=e[5],u=e[6],m=e[7],v=e[8],y=v*d-p*m,g=p*u-v*l,_=m*l-d*u,M=t*y+r*g+o*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=y*A,e[1]=(o*m-v*r)*A,e[2]=(p*r-o*d)*A,e[3]=g*A,e[4]=(v*t-o*u)*A,e[5]=(o*l-p*t)*A,e[6]=_*A,e[7]=(r*u-m*t)*A,e[8]=(d*t-r*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,d,p){const u=Math.cos(l),m=Math.sin(l);return this.set(r*u,r*m,-r*(u*d+m*p)+d+e,-o*m,o*u,-o*(-m*d+u*p)+p+t,0,0,1),this}scale(e,t){return Yl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ju.makeScale(e,t)),this}rotate(e){return Yl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ju.makeRotation(-e)),this}translate(e,t){return Yl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ju.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Lf.prototype.isMatrix3=!0;let wt=Lf;const Ju=new wt,p0=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),m0=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function D_(){const s={enabled:!0,workingColorSpace:tc,spaces:{},convert:function(o,l,d){return this.enabled===!1||l===d||!l||!d||(this.spaces[l].transfer===qt&&(o.r=hr(o.r),o.g=hr(o.g),o.b=hr(o.b)),this.spaces[l].primaries!==this.spaces[d].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===qt&&(o.r=ra(o.r),o.g=ra(o.g),o.b=ra(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Fr?nc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,d){return o.copy(this.spaces[d].fromXYZ).multiply(this.spaces[l].toXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[tc]:{primaries:e,whitePoint:r,transfer:nc,toXYZ:p0,fromXYZ:m0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:e,whitePoint:r,transfer:qt,toXYZ:p0,fromXYZ:m0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),s}const Ft=D_();function hr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ra(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Vs;class L_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Vs===void 0&&(Vs=ic("canvas")),Vs.width=e.width,Vs.height=e.height;const o=Vs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Vs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ic("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let d=0;d<l.length;d++)l[d]=hr(l[d]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(hr(t[r]/255)*255):t[r]=hr(t[r]);return{data:t,width:e.width,height:e.height}}else return bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let I_=0;class wf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=co(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let d=0,p=o.length;d<p;d++)o[d].isDataTexture?l.push(Qu(o[d].image)):l.push(Qu(o[d]))}else l=Qu(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Qu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?L_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(bt("Texture: Unable to serialize Texture."),{})}let z_=0;const ed=new he;class Gn extends vs{constructor(e=Gn.DEFAULT_IMAGE,t=Gn.DEFAULT_MAPPING,r=Qn,o=Qn,l=ei,d=Br,p=$i,u=li,m=Gn.DEFAULT_ANISOTROPY,v=Fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=co(),this.name="",this.source=new wf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=d,this.anisotropy=m,this.format=p,this.internalFormat=null,this.type=u,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ed).x}get height(){return this.source.getSize(ed).y}get depth(){return this.source.getSize(ed).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){bt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){bt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ym)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case aa:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case Cd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case aa:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case Cd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=ym;Gn.DEFAULT_ANISOTROPY=1;const If=class If{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,d=e.elements;return this.x=d[0]*t+d[4]*r+d[8]*o+d[12]*l,this.y=d[1]*t+d[5]*r+d[9]*o+d[13]*l,this.z=d[2]*t+d[6]*r+d[10]*o+d[14]*l,this.w=d[3]*t+d[7]*r+d[11]*o+d[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const u=e.elements,m=u[0],v=u[4],y=u[8],g=u[1],_=u[5],M=u[9],A=u[2],S=u[6],b=u[10];if(Math.abs(v-g)<.01&&Math.abs(y-A)<.01&&Math.abs(M-S)<.01){if(Math.abs(v+g)<.1&&Math.abs(y+A)<.1&&Math.abs(M+S)<.1&&Math.abs(m+_+b-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(m+1)/2,D=(_+1)/2,U=(b+1)/2,L=(v+g)/4,w=(y+A)/4,N=(M+S)/4;return F>D&&F>U?F<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(F),o=L/r,l=w/r):D>U?D<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(D),r=L/o,l=N/o):U<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(U),r=w/l,o=N/l),this.set(r,o,l,t),this}let R=Math.sqrt((S-M)*(S-M)+(y-A)*(y-A)+(g-v)*(g-v));return Math.abs(R)<.001&&(R=1),this.x=(S-M)/R,this.y=(y-A)/R,this.z=(g-v)/R,this.w=Math.acos((m+_+b-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ot(this.x,e.x,t.x),this.y=Ot(this.y,e.y,t.y),this.z=Ot(this.z,e.z,t.z),this.w=Ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ot(this.x,e,t),this.y=Ot(this.y,e,t),this.z=Ot(this.z,e,t),this.w=Ot(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ot(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};If.prototype.isVector4=!0;let un=If;class U_ extends vs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new un(0,0,e,t),this.scissorTest=!1,this.viewport=new un(0,0,e,t),this.textures=[];const o=r.count;for(let l=0;l<o;l++)this.textures[l]=new Gn({width:e,height:t,depth:r.depth}),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:ei,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new wf(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends U_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Dm extends Gn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class k_ extends Gn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const oc=class oc{constructor(e,t,r,o,l,d,p,u,m,v,y,g,_,M,A,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,d,p,u,m,v,y,g,_,M,A,S)}set(e,t,r,o,l,d,p,u,m,v,y,g,_,M,A,S){const b=this.elements;return b[0]=e,b[4]=t,b[8]=r,b[12]=o,b[1]=l,b[5]=d,b[9]=p,b[13]=u,b[2]=m,b[6]=v,b[10]=y,b[14]=g,b[3]=_,b[7]=M,b[11]=A,b[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Ws.setFromMatrixColumn(e,0).length(),l=1/Ws.setFromMatrixColumn(e,1).length(),d=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*d,t[9]=r[9]*d,t[10]=r[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,d=Math.cos(r),p=Math.sin(r),u=Math.cos(o),m=Math.sin(o),v=Math.cos(l),y=Math.sin(l);if(e.order==="XYZ"){const g=d*v,_=d*y,M=p*v,A=p*y;t[0]=u*v,t[4]=-u*y,t[8]=m,t[1]=_+M*m,t[5]=g-A*m,t[9]=-p*u,t[2]=A-g*m,t[6]=M+_*m,t[10]=d*u}else if(e.order==="YXZ"){const g=u*v,_=u*y,M=m*v,A=m*y;t[0]=g+A*p,t[4]=M*p-_,t[8]=d*m,t[1]=d*y,t[5]=d*v,t[9]=-p,t[2]=_*p-M,t[6]=A+g*p,t[10]=d*u}else if(e.order==="ZXY"){const g=u*v,_=u*y,M=m*v,A=m*y;t[0]=g-A*p,t[4]=-d*y,t[8]=M+_*p,t[1]=_+M*p,t[5]=d*v,t[9]=A-g*p,t[2]=-d*m,t[6]=p,t[10]=d*u}else if(e.order==="ZYX"){const g=d*v,_=d*y,M=p*v,A=p*y;t[0]=u*v,t[4]=M*m-_,t[8]=g*m+A,t[1]=u*y,t[5]=A*m+g,t[9]=_*m-M,t[2]=-m,t[6]=p*u,t[10]=d*u}else if(e.order==="YZX"){const g=d*u,_=d*m,M=p*u,A=p*m;t[0]=u*v,t[4]=A-g*y,t[8]=M*y+_,t[1]=y,t[5]=d*v,t[9]=-p*v,t[2]=-m*v,t[6]=_*y+M,t[10]=g-A*y}else if(e.order==="XZY"){const g=d*u,_=d*m,M=p*u,A=p*m;t[0]=u*v,t[4]=-y,t[8]=m*v,t[1]=g*y+A,t[5]=d*v,t[9]=_*y-M,t[2]=M*y-_,t[6]=p*v,t[10]=A*y+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(F_,e,O_)}lookAt(e,t,r){const o=this.elements;return si.subVectors(e,t),si.lengthSq()===0&&(si.z=1),si.normalize(),Dr.crossVectors(r,si),Dr.lengthSq()===0&&(Math.abs(r.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Dr.crossVectors(r,si)),Dr.normalize(),Sl.crossVectors(si,Dr),o[0]=Dr.x,o[4]=Sl.x,o[8]=si.x,o[1]=Dr.y,o[5]=Sl.y,o[9]=si.y,o[2]=Dr.z,o[6]=Sl.z,o[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,d=r[0],p=r[4],u=r[8],m=r[12],v=r[1],y=r[5],g=r[9],_=r[13],M=r[2],A=r[6],S=r[10],b=r[14],R=r[3],F=r[7],D=r[11],U=r[15],L=o[0],w=o[4],N=o[8],J=o[12],X=o[1],j=o[5],B=o[9],O=o[13],V=o[2],H=o[6],se=o[10],ee=o[14],Y=o[3],G=o[7],$=o[11],P=o[15];return l[0]=d*L+p*X+u*V+m*Y,l[4]=d*w+p*j+u*H+m*G,l[8]=d*N+p*B+u*se+m*$,l[12]=d*J+p*O+u*ee+m*P,l[1]=v*L+y*X+g*V+_*Y,l[5]=v*w+y*j+g*H+_*G,l[9]=v*N+y*B+g*se+_*$,l[13]=v*J+y*O+g*ee+_*P,l[2]=M*L+A*X+S*V+b*Y,l[6]=M*w+A*j+S*H+b*G,l[10]=M*N+A*B+S*se+b*$,l[14]=M*J+A*O+S*ee+b*P,l[3]=R*L+F*X+D*V+U*Y,l[7]=R*w+F*j+D*H+U*G,l[11]=R*N+F*B+D*se+U*$,l[15]=R*J+F*O+D*ee+U*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],d=e[1],p=e[5],u=e[9],m=e[13],v=e[2],y=e[6],g=e[10],_=e[14],M=e[3],A=e[7],S=e[11],b=e[15],R=u*_-m*g,F=p*_-m*y,D=p*g-u*y,U=d*_-m*v,L=d*g-u*v,w=d*y-p*v;return t*(A*R-S*F+b*D)-r*(M*R-S*U+b*L)+o*(M*F-A*U+b*w)-l*(M*D-A*L+S*w)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],d=e[5],p=e[9],u=e[2],m=e[6],v=e[10];return t*(d*v-p*m)-r*(l*v-p*u)+o*(l*m-d*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],p=e[5],u=e[6],m=e[7],v=e[8],y=e[9],g=e[10],_=e[11],M=e[12],A=e[13],S=e[14],b=e[15],R=t*p-r*d,F=t*u-o*d,D=t*m-l*d,U=r*u-o*p,L=r*m-l*p,w=o*m-l*u,N=v*A-y*M,J=v*S-g*M,X=v*b-_*M,j=y*S-g*A,B=y*b-_*A,O=g*b-_*S,V=R*O-F*B+D*j+U*X-L*J+w*N;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/V;return e[0]=(p*O-u*B+m*j)*H,e[1]=(o*B-r*O-l*j)*H,e[2]=(A*w-S*L+b*U)*H,e[3]=(g*L-y*w-_*U)*H,e[4]=(u*X-d*O-m*J)*H,e[5]=(t*O-o*X+l*J)*H,e[6]=(S*D-M*w-b*F)*H,e[7]=(v*w-g*D+_*F)*H,e[8]=(d*B-p*X+m*N)*H,e[9]=(r*X-t*B-l*N)*H,e[10]=(M*L-A*D+b*R)*H,e[11]=(y*D-v*L-_*R)*H,e[12]=(p*J-d*j-u*N)*H,e[13]=(t*j-r*J+o*N)*H,e[14]=(A*F-M*U-S*R)*H,e[15]=(v*U-y*F+g*R)*H,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,d=e.x,p=e.y,u=e.z,m=l*d,v=l*p;return this.set(m*d+r,m*p-o*u,m*u+o*p,0,m*p+o*u,v*p+r,v*u-o*d,0,m*u-o*p,v*u+o*d,l*u*u+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,d){return this.set(1,r,l,0,e,1,d,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,d=t._y,p=t._z,u=t._w,m=l+l,v=d+d,y=p+p,g=l*m,_=l*v,M=l*y,A=d*v,S=d*y,b=p*y,R=u*m,F=u*v,D=u*y,U=r.x,L=r.y,w=r.z;return o[0]=(1-(A+b))*U,o[1]=(_+D)*U,o[2]=(M-F)*U,o[3]=0,o[4]=(_-D)*L,o[5]=(1-(g+b))*L,o[6]=(S+R)*L,o[7]=0,o[8]=(M+F)*w,o[9]=(S-R)*w,o[10]=(1-(g+A))*w,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let d=Ws.set(o[0],o[1],o[2]).length();const p=Ws.set(o[4],o[5],o[6]).length(),u=Ws.set(o[8],o[9],o[10]).length();l<0&&(d=-d),Ti.copy(this);const m=1/d,v=1/p,y=1/u;return Ti.elements[0]*=m,Ti.elements[1]*=m,Ti.elements[2]*=m,Ti.elements[4]*=v,Ti.elements[5]*=v,Ti.elements[6]*=v,Ti.elements[8]*=y,Ti.elements[9]*=y,Ti.elements[10]*=y,t.setFromRotationMatrix(Ti),r.x=d,r.y=p,r.z=u,this}makePerspective(e,t,r,o,l,d,p=Ii,u=!1){const m=this.elements,v=2*l/(t-e),y=2*l/(r-o),g=(t+e)/(t-e),_=(r+o)/(r-o);let M,A;if(u)M=l/(d-l),A=d*l/(d-l);else if(p===Ii)M=-(d+l)/(d-l),A=-2*d*l/(d-l);else if(p===oo)M=-d/(d-l),A=-d*l/(d-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return m[0]=v,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=y,m[9]=_,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,o,l,d,p=Ii,u=!1){const m=this.elements,v=2/(t-e),y=2/(r-o),g=-(t+e)/(t-e),_=-(r+o)/(r-o);let M,A;if(u)M=1/(d-l),A=d/(d-l);else if(p===Ii)M=-2/(d-l),A=-(d+l)/(d-l);else if(p===oo)M=-1/(d-l),A=-l/(d-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return m[0]=v,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=y,m[9]=0,m[13]=_,m[2]=0,m[6]=0,m[10]=M,m[14]=A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};oc.prototype.isMatrix4=!0;let dn=oc;const Ws=new he,Ti=new dn,F_=new he(0,0,0),O_=new he(1,1,1),Dr=new he,Sl=new he,si=new he,g0=new dn,x0=new da;class jr{constructor(e=0,t=0,r=0,o=jr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],d=o[4],p=o[8],u=o[1],m=o[5],v=o[9],y=o[2],g=o[6],_=o[10];switch(t){case"XYZ":this._y=Math.asin(Ot(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,_),this._z=Math.atan2(-d,l)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,_),this._z=Math.atan2(u,m)):(this._y=Math.atan2(-y,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-y,_),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(u,l));break;case"ZYX":this._y=Math.asin(-Ot(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(g,_),this._z=Math.atan2(u,l)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-y,l)):(this._x=0,this._y=Math.atan2(p,_));break;case"XZY":this._z=Math.asin(-Ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(p,l)):(this._x=Math.atan2(-v,_),this._y=0);break;default:bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return g0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(g0,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return x0.setFromEuler(this),this.setFromQuaternion(x0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jr.DEFAULT_ORDER="XYZ";class Lm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let B_=0;const v0=new he,js=new da,ar=new dn,bl=new he,Xa=new he,H_=new he,G_=new da,_0=new he(1,0,0),y0=new he(0,1,0),S0=new he(0,0,1),b0={type:"added"},V_={type:"removed"},$s={type:"childadded",child:null},td={type:"childremoved",child:null};class Vn extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vn.DEFAULT_UP.clone();const e=new he,t=new jr,r=new da,o=new he(1,1,1);function l(){r.setFromEuler(t,!1)}function d(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new dn},normalMatrix:{value:new wt}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=Vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(_0,e)}rotateY(e){return this.rotateOnAxis(y0,e)}rotateZ(e){return this.rotateOnAxis(S0,e)}translateOnAxis(e,t){return v0.copy(e).applyQuaternion(this.quaternion),this.position.add(v0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_0,e)}translateY(e){return this.translateOnAxis(y0,e)}translateZ(e){return this.translateOnAxis(S0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ar.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?bl.copy(e):bl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ar.lookAt(Xa,bl,this.up):ar.lookAt(bl,Xa,this.up),this.quaternion.setFromRotationMatrix(ar),o&&(ar.extractRotation(o.matrixWorld),js.setFromRotationMatrix(ar),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(jt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(b0),$s.child=e,this.dispatchEvent($s),$s.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(V_),td.child=e,this.dispatchEvent(td),td.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ar.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ar.multiply(e.parent.matrixWorld)),e.applyMatrix4(ar),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(b0),$s.child=e,this.dispatchEvent($s),$s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectByProperty(e,t);if(d!==void 0)return d}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,d=o.length;l<d;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,e,H_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,G_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let d=0,p=l.length;d<p;d++)l[d].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(p=>({...p})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(p,u){return p[u.uuid]===void 0&&(p[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const u=p.shapes;if(Array.isArray(u))for(let m=0,v=u.length;m<v;m++){const y=u[m];l(e.shapes,y)}else l(e.shapes,u)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let u=0,m=this.material.length;u<m;u++)p.push(l(e.materials,this.material[u]));o.material=p}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let p=0;p<this.children.length;p++)o.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let p=0;p<this.animations.length;p++){const u=this.animations[p];o.animations.push(l(e.animations,u))}}if(t){const p=d(e.geometries),u=d(e.materials),m=d(e.textures),v=d(e.images),y=d(e.shapes),g=d(e.skeletons),_=d(e.animations),M=d(e.nodes);p.length>0&&(r.geometries=p),u.length>0&&(r.materials=u),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),y.length>0&&(r.shapes=y),g.length>0&&(r.skeletons=g),_.length>0&&(r.animations=_),M.length>0&&(r.nodes=M)}return r.object=o,r;function d(p){const u=[];for(const m in p){const v=p[m];delete v.metadata,u.push(v)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Vn.DEFAULT_UP=new he(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Qa extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const W_={type:"move"};class nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new he,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new he),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new he,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new he,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,d=null;const p=this._targetRay,u=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const A of e.hand.values()){const S=t.getJointPose(A,r),b=this._getHandJoint(m,A);S!==null&&(b.matrix.fromArray(S.transform.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale),b.matrixWorldNeedsUpdate=!0,b.jointRadius=S.radius),b.visible=S!==null}const v=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],g=v.position.distanceTo(y.position),_=.02,M=.005;m.inputState.pinching&&g>_+M?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=_-M&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(u.matrix.fromArray(l.transform.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale),u.matrixWorldNeedsUpdate=!0,l.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(l.linearVelocity)):u.hasLinearVelocity=!1,l.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(l.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(W_)))}return p!==null&&(p.visible=o!==null),u!==null&&(u.visible=l!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Qa;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Im={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lr={h:0,s:0,l:0},wl={h:0,s:0,l:0};function id(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Nt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Ft.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ft.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Ft.workingColorSpace){if(e=C_(e,1),t=Ot(t,0,1),r=Ot(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,d=2*r-l;this.r=id(d,l,e+1/3),this.g=id(d,l,e),this.b=id(d,l,e-1/3)}return Ft.colorSpaceToWorking(this,o),this}setStyle(e,t=oi){function r(l){l!==void 0&&parseFloat(l)<1&&bt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const d=o[1],p=o[2];switch(d){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(p))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(p))return r(l[4]),this.setRGB(Math.min(100,parseFloat(l[1]))/100,Math.min(100,parseFloat(l[2]))/100,Math.min(100,parseFloat(l[3]))/100,t);break;case"hsl":case"hsla":if(l=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(p))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:bt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],d=l.length;if(d===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(d===6)return this.setHex(parseInt(l,16),t);bt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=oi){const r=Im[e.toLowerCase()];return r!==void 0?this.setHex(r,t):bt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}copyLinearToSRGB(e){return this.r=ra(e.r),this.g=ra(e.g),this.b=ra(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return Ft.workingToColorSpace(Hn.copy(this),e),Math.round(Ot(Hn.r*255,0,255))*65536+Math.round(Ot(Hn.g*255,0,255))*256+Math.round(Ot(Hn.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ft.workingColorSpace){Ft.workingToColorSpace(Hn.copy(this),t);const r=Hn.r,o=Hn.g,l=Hn.b,d=Math.max(r,o,l),p=Math.min(r,o,l);let u,m;const v=(p+d)/2;if(p===d)u=0,m=0;else{const y=d-p;switch(m=v<=.5?y/(d+p):y/(2-d-p),d){case r:u=(o-l)/y+(o<l?6:0);break;case o:u=(l-r)/y+2;break;case l:u=(r-o)/y+4;break}u/=6}return e.h=u,e.s=m,e.l=v,e}getRGB(e,t=Ft.workingColorSpace){return Ft.workingToColorSpace(Hn.copy(this),t),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=oi){Ft.workingToColorSpace(Hn.copy(this),e);const t=Hn.r,r=Hn.g,o=Hn.b;return e!==oi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Lr),this.setHSL(Lr.h+e,Lr.s+t,Lr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Lr),e.getHSL(wl);const r=Ku(Lr.h,wl.h,t),o=Ku(Lr.s,wl.s,t),l=Ku(Lr.l,wl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new Nt;Nt.NAMES=Im;class j_ extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jr,this.environmentIntensity=1,this.environmentRotation=new jr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ai=new he,or=new he,rd=new he,lr=new he,Xs=new he,Ys=new he,w0=new he,sd=new he,ad=new he,od=new he,ld=new un,cd=new un,ud=new un;class Li{constructor(e=new he,t=new he,r=new he){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ai.subVectors(e,t),o.cross(Ai);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Ai.subVectors(o,t),or.subVectors(r,t),rd.subVectors(e,t);const d=Ai.dot(Ai),p=Ai.dot(or),u=Ai.dot(rd),m=or.dot(or),v=or.dot(rd),y=d*m-p*p;if(y===0)return l.set(0,0,0),null;const g=1/y,_=(m*u-p*v)*g,M=(d*v-p*u)*g;return l.set(1-_-M,M,_)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,lr)===null?!1:lr.x>=0&&lr.y>=0&&lr.x+lr.y<=1}static getInterpolation(e,t,r,o,l,d,p,u){return this.getBarycoord(e,t,r,o,lr)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(l,lr.x),u.addScaledVector(d,lr.y),u.addScaledVector(p,lr.z),u)}static getInterpolatedAttribute(e,t,r,o,l,d){return ld.setScalar(0),cd.setScalar(0),ud.setScalar(0),ld.fromBufferAttribute(e,t),cd.fromBufferAttribute(e,r),ud.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(ld,l.x),d.addScaledVector(cd,l.y),d.addScaledVector(ud,l.z),d}static isFrontFacing(e,t,r,o){return Ai.subVectors(r,t),or.subVectors(e,t),Ai.cross(or).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),or.subVectors(this.a,this.b),Ai.cross(or).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Li.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Li.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let d,p;Xs.subVectors(o,r),Ys.subVectors(l,r),sd.subVectors(e,r);const u=Xs.dot(sd),m=Ys.dot(sd);if(u<=0&&m<=0)return t.copy(r);ad.subVectors(e,o);const v=Xs.dot(ad),y=Ys.dot(ad);if(v>=0&&y<=v)return t.copy(o);const g=u*y-v*m;if(g<=0&&u>=0&&v<=0&&u-v>0)return d=u/(u-v),t.copy(r).addScaledVector(Xs,d);od.subVectors(e,l);const _=Xs.dot(od),M=Ys.dot(od);if(M>=0&&_<=M)return t.copy(l);const A=_*m-u*M;if(A<=0&&m>=0&&M<=0)return p=m/(m-M),t.copy(r).addScaledVector(Ys,p);const S=v*M-_*y;if(S<=0&&y-v>=0&&_-M>=0)return w0.subVectors(l,o),p=(y-v)/(y-v+(_-M)),t.copy(o).addScaledVector(w0,p);const b=1/(S+A+g);return d=A*b,p=g*b,t.copy(r).addScaledVector(Xs,d).addScaledVector(Ys,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class uo{constructor(e=new he(1/0,1/0,1/0),t=new he(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let d=0,p=l.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,Ci):Ci.fromBufferAttribute(l,d),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ml.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ml.copy(r.boundingBox)),Ml.applyMatrix4(e.matrixWorld),this.union(Ml)}const o=e.children;for(let l=0,d=o.length;l<d;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ya),El.subVectors(this.max,Ya),qs.subVectors(e.a,Ya),Ks.subVectors(e.b,Ya),Zs.subVectors(e.c,Ya),Ir.subVectors(Ks,qs),zr.subVectors(Zs,Ks),os.subVectors(qs,Zs);let t=[0,-Ir.z,Ir.y,0,-zr.z,zr.y,0,-os.z,os.y,Ir.z,0,-Ir.x,zr.z,0,-zr.x,os.z,0,-os.x,-Ir.y,Ir.x,0,-zr.y,zr.x,0,-os.y,os.x,0];return!dd(t,qs,Ks,Zs,El)||(t=[1,0,0,0,1,0,0,0,1],!dd(t,qs,Ks,Zs,El))?!1:(Tl.crossVectors(Ir,zr),t=[Tl.x,Tl.y,Tl.z],dd(t,qs,Ks,Zs,El))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const cr=[new he,new he,new he,new he,new he,new he,new he,new he],Ci=new he,Ml=new uo,qs=new he,Ks=new he,Zs=new he,Ir=new he,zr=new he,os=new he,Ya=new he,El=new he,Tl=new he,ls=new he;function dd(s,e,t,r,o){for(let l=0,d=s.length-3;l<=d;l+=3){ls.fromArray(s,l);const p=o.x*Math.abs(ls.x)+o.y*Math.abs(ls.y)+o.z*Math.abs(ls.z),u=e.dot(ls),m=t.dot(ls),v=r.dot(ls);if(Math.max(-Math.max(u,m,v),Math.min(u,m,v))>p)return!1}return!0}const xn=new he,Al=new zt;let $_=0;class ps extends vs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=w_,this.updateRanges=[],this.gpuType=ji,this.version=0,this._normalizationScale=e!==void 0?bf(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Al.fromBufferAttribute(this,t),Al.applyMatrix3(e),this.setXY(t,Al.x,Al.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix3(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):N_(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):P_(e,this.array)}}class zm extends ps{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Um extends ps{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Nn extends ps{constructor(e,t,r){super(new Float32Array(e),t,r)}}const X_=new uo,qa=new he,fd=new he;class Mf{constructor(e=new he,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):X_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,d=e.length;l<d;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qa.subVectors(e,this.center);const t=qa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(qa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qa.copy(e.center).add(fd)),this.expandByPoint(qa.copy(e.center).sub(fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Y_=0;const mi=new dn,hd=new Vn,Js=new he,ai=new uo,Ka=new uo,Rn=new he;class Ki extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=co(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(M_(e)?Um:zm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new wt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,t,r){return mi.makeTranslation(e,t,r),this.applyMatrix4(mi),this}scale(e,t,r){return mi.makeScale(e,t,r),this.applyMatrix4(mi),this}lookAt(e){return hd.lookAt(e),hd.updateMatrix(),this.applyMatrix4(hd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const d=e[o];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Nn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new uo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new he(-1/0,-1/0,-1/0),new he(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];ai.setFromBufferAttribute(l),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new he,1/0);return}if(e){const r=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),t)for(let l=0,d=t.length;l<d;l++){const p=t[l];Ka.setFromBufferAttribute(p),this.morphTargetsRelative?(Rn.addVectors(ai.min,Ka.min),ai.expandByPoint(Rn),Rn.addVectors(ai.max,Ka.max),ai.expandByPoint(Rn)):(ai.expandByPoint(Ka.min),ai.expandByPoint(Ka.max))}ai.getCenter(r);let o=0;for(let l=0,d=e.count;l<d;l++)Rn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Rn));if(t)for(let l=0,d=t.length;l<d;l++){const p=t[l],u=this.morphTargetsRelative;for(let m=0,v=p.count;m<v;m++)Rn.fromBufferAttribute(p,m),u&&(Js.fromBufferAttribute(e,m),Rn.add(Js)),o=Math.max(o,r.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new ps(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const p=[],u=[],m=new Uint8Array(r.count);for(let J=0;J<r.count;J++)p[J]=new he,u[J]=new he;const v=new he,y=new he,g=new he,_=new zt,M=new zt,A=new zt,S=new he,b=new he;function R(J,X,j){m[J]=m[X]=m[j]=1,v.fromBufferAttribute(r,J),y.fromBufferAttribute(r,X),g.fromBufferAttribute(r,j),_.fromBufferAttribute(l,J),M.fromBufferAttribute(l,X),A.fromBufferAttribute(l,j),y.sub(v),g.sub(v),M.sub(_),A.sub(_);const B=1/(M.x*A.y-A.x*M.y);isFinite(B)&&(S.copy(y).multiplyScalar(A.y).addScaledVector(g,-M.y).multiplyScalar(B),b.copy(g).multiplyScalar(M.x).addScaledVector(y,-A.x).multiplyScalar(B),p[J].add(S),p[X].add(S),p[j].add(S),u[J].add(b),u[X].add(b),u[j].add(b))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let J=0,X=F.length;J<X;++J){const j=F[J],B=j.start,O=j.count;for(let V=B,H=B+O;V<H;V+=3)R(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const D=new he,U=new he,L=new he,w=new he;function N(J){L.fromBufferAttribute(o,J),w.copy(L);const X=p[J];D.copy(X),D.sub(L.multiplyScalar(L.dot(X))).normalize(),U.crossVectors(w,X);const B=U.dot(u[J])<0?-1:1;d.setXYZW(J,D.x,D.y,D.z,B)}for(let J=0,X=r.count;J<X;++J)m[J]&&N(J);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new ps(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,_=r.count;g<_;g++)r.setXYZ(g,0,0,0);const o=new he,l=new he,d=new he,p=new he,u=new he,m=new he,v=new he,y=new he;if(e)for(let g=0,_=e.count;g<_;g+=3){const M=e.getX(g+0),A=e.getX(g+1),S=e.getX(g+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,A),d.fromBufferAttribute(t,S),v.subVectors(d,l),y.subVectors(o,l),v.cross(y),p.fromBufferAttribute(r,M),u.fromBufferAttribute(r,A),m.fromBufferAttribute(r,S),p.add(v),u.add(v),m.add(v),r.setXYZ(M,p.x,p.y,p.z),r.setXYZ(A,u.x,u.y,u.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let g=0,_=t.count;g<_;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),d.fromBufferAttribute(t,g+2),v.subVectors(d,l),y.subVectors(o,l),v.cross(y),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Rn.fromBufferAttribute(e,t),Rn.normalize(),e.setXYZ(t,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(p,u){const m=p.array,v=p.itemSize,y=p.normalized,g=new m.constructor(u.length*v);let _=0,M=0;for(let A=0,S=u.length;A<S;A++){p.isInterleavedBufferAttribute?_=u[A]*p.data.stride+p.offset:_=u[A]*v;for(let b=0;b<v;b++)g[M++]=m[_++]}return new ps(g,v,y)}if(this.index===null)return bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ki,r=this.index.array,o=this.attributes;for(const p in o){const u=o[p],m=e(u,r);t.setAttribute(p,m)}const l=this.morphAttributes;for(const p in l){const u=[],m=l[p];for(let v=0,y=m.length;v<y;v++){const g=m[v],_=e(g,r);u.push(_)}t.morphAttributes[p]=u}t.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,u=d.length;p<u;p++){const m=d[p];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const u=this.parameters;for(const m in u)u[m]!==void 0&&(e[m]=u[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const u in r){const m=r[u];e.data.attributes[u]=m.toJSON(e.data)}const o={};let l=!1;for(const u in this.morphAttributes){const m=this.morphAttributes[u],v=[];for(let y=0,g=m.length;y<g;y++){const _=m[y];v.push(_.toJSON(e.data))}v.length>0&&(o[u]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(t))}const l=e.morphAttributes;for(const m in l){const v=[],y=l[m];for(let g=0,_=y.length;g<_;g++)v.push(y[g].clone(t));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,v=d.length;m<v;m++){const y=d[m];this.addGroup(y.start,y.count,y.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pd=new he,q_=new he,K_=new wt;class kr{constructor(e=new he(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=pd.subVectors(r,t).cross(q_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(pd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(d<0||d>1)?null:t.copy(e.start).addScaledVector(o,d)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||K_.getNormalMatrix(e),o=this.coplanarPoint(pd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Z_=0;class fo extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=co(),this.name="",this.type="Material",this.blending=to,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=um,this.blendDst=dm,this.blendEquation=ta,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=x_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yu,this.stencilZFail=Yu,this.stencilZPass=Yu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){bt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){bt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const d=[];for(const p in l){const u=l[p];delete u.metadata,d.push(u)}return d}if(t){const l=o(e.textures),d=o(e.images);l.length>0&&(r.textures=l),d.length>0&&(r.images=d)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Nt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new kr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new zt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new zt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ur=new he,md=new he,Cl=new he,Rl=new he;class J_{constructor(e=new he,t=new he(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ur)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ur.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ur.copy(this.origin).addScaledVector(this.direction,t),ur.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){md.copy(e).add(t).multiplyScalar(.5),Cl.copy(t).sub(e).normalize(),Rl.copy(this.origin).sub(md);const l=e.distanceTo(t)*.5,d=-this.direction.dot(Cl),p=Rl.dot(this.direction),u=-Rl.dot(Cl),m=Rl.lengthSq(),v=Math.abs(1-d*d);let y,g,_,M;if(v>0)if(y=d*u-p,g=d*p-u,M=l*v,y>=0)if(g>=-M)if(g<=M){const A=1/v;y*=A,g*=A,_=y*(y+d*g+2*p)+g*(d*y+g+2*u)+m}else g=l,y=Math.max(0,-(d*g+p)),_=-y*y+g*(g+2*u)+m;else g=-l,y=Math.max(0,-(d*g+p)),_=-y*y+g*(g+2*u)+m;else g<=-M?(y=Math.max(0,-(-d*l+p)),g=y>0?-l:Math.min(Math.max(-l,-u),l),_=-y*y+g*(g+2*u)+m):g<=M?(y=0,g=Math.min(Math.max(-l,-u),l),_=g*(g+2*u)+m):(y=Math.max(0,-(d*l+p)),g=y>0?l:Math.min(Math.max(-l,-u),l),_=-y*y+g*(g+2*u)+m);else g=d>0?-l:l,y=Math.max(0,-(d*g+p)),_=-y*y+g*(g+2*u)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(md).addScaledVector(Cl,g),_}intersectSphere(e,t){if(e.radius<0)return null;ur.subVectors(e.center,this.origin);const r=ur.dot(this.direction),o=ur.dot(ur)-r*r,l=e.radius*e.radius;if(o>l)return null;const d=Math.sqrt(l-o),p=r-d,u=r+d;return u<0?null:p<0?this.at(u,t):this.at(p,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,d,p,u;const m=1/this.direction.x,v=1/this.direction.y,y=1/this.direction.z,g=this.origin;return m>=0?(r=(e.min.x-g.x)*m,o=(e.max.x-g.x)*m):(r=(e.max.x-g.x)*m,o=(e.min.x-g.x)*m),v>=0?(l=(e.min.y-g.y)*v,d=(e.max.y-g.y)*v):(l=(e.max.y-g.y)*v,d=(e.min.y-g.y)*v),r>d||l>o||((l>r||isNaN(r))&&(r=l),(d<o||isNaN(o))&&(o=d),y>=0?(p=(e.min.z-g.z)*y,u=(e.max.z-g.z)*y):(p=(e.max.z-g.z)*y,u=(e.min.z-g.z)*y),r>u||p>o)||((p>r||r!==r)&&(r=p),(u<o||o!==o)&&(o=u),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,ur)!==null}intersectTriangle(e,t,r,o,l){const d=this.origin,p=this.direction,u=p.x,m=p.y,v=p.z,y=e.x-d.x,g=e.y-d.y,_=e.z-d.z,M=t.x-d.x,A=t.y-d.y,S=t.z-d.z,b=r.x-d.x,R=r.y-d.y,F=r.z-d.z,D=Math.abs(u),U=Math.abs(m),L=Math.abs(v);let w,N,J,X,j,B,O,V,H,se,ee,Y;if(D>=U&&D>=L?(J=u,B=y,H=M,Y=b,u>=0?(w=m,N=v,X=g,j=_,O=A,V=S,se=R,ee=F):(w=v,N=m,X=_,j=g,O=S,V=A,se=F,ee=R)):U>=L?(J=m,B=g,H=A,Y=R,m>=0?(w=v,N=u,X=_,j=y,O=S,V=M,se=F,ee=b):(w=u,N=v,X=y,j=_,O=M,V=S,se=b,ee=F)):(J=v,B=_,H=S,Y=F,v>=0?(w=u,N=m,X=y,j=g,O=M,V=A,se=b,ee=R):(w=m,N=u,X=g,j=y,O=A,V=M,se=R,ee=b)),J===0)return null;const G=w/J,$=N/J,P=1/J,K=X-G*B,we=j-$*B,k=O-G*H,ve=V-$*H,be=se-G*Y,Ne=ee-$*Y,_e=be*ve-Ne*k,Ue=K*Ne-we*be,ot=k*we-ve*K;if(o){if(_e<0||Ue<0||ot<0)return null}else if((_e<0||Ue<0||ot<0)&&(_e>0||Ue>0||ot>0))return null;const Be=_e+Ue+ot;if(Be===0)return null;const Me=P*(_e*B+Ue*H+ot*Y);return(Be>0?Me<0:Me>0)?null:this.at(Me/Be,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ql extends fo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jr,this.combine=fm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const M0=new dn,cs=new J_,Nl=new Mf,E0=new he,Pl=new he,Dl=new he,Ll=new he,gd=new he,Il=new he,T0=new he,zl=new he;class vn extends Vn{constructor(e=new Ki,t=new ql){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=o.length;l<d;l++){const p=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,d=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const p=this.morphTargetInfluences;if(l&&p){Il.set(0,0,0);for(let u=0,m=l.length;u<m;u++){const v=p[u],y=l[u];v!==0&&(gd.fromBufferAttribute(y,e),d?Il.addScaledVector(gd,v):Il.addScaledVector(gd.sub(t),v))}t.add(Il)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Nl.copy(r.boundingSphere),Nl.applyMatrix4(l),cs.copy(e.ray).recast(e.near),!(Nl.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Nl,E0)===null||cs.origin.distanceToSquared(E0)>(e.far-e.near)**2))&&(M0.copy(l).invert(),cs.copy(e.ray).applyMatrix4(M0),!(r.boundingBox!==null&&cs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,d=this.material,p=l.index,u=l.attributes.position,m=l.attributes.uv,v=l.attributes.uv1,y=l.attributes.normal,g=l.groups,_=l.drawRange;if(p!==null)if(Array.isArray(d))for(let M=0,A=g.length;M<A;M++){const S=g[M],b=d[S.materialIndex],R=Math.max(S.start,_.start),F=Math.min(p.count,Math.min(S.start+S.count,_.start+_.count));for(let D=R,U=F;D<U;D+=3){const L=p.getX(D),w=p.getX(D+1),N=p.getX(D+2);o=Ul(this,b,e,r,m,v,y,L,w,N),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,_.start),A=Math.min(p.count,_.start+_.count);for(let S=M,b=A;S<b;S+=3){const R=p.getX(S),F=p.getX(S+1),D=p.getX(S+2);o=Ul(this,d,e,r,m,v,y,R,F,D),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(u!==void 0)if(Array.isArray(d))for(let M=0,A=g.length;M<A;M++){const S=g[M],b=d[S.materialIndex],R=Math.max(S.start,_.start),F=Math.min(u.count,Math.min(S.start+S.count,_.start+_.count));for(let D=R,U=F;D<U;D+=3){const L=D,w=D+1,N=D+2;o=Ul(this,b,e,r,m,v,y,L,w,N),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,_.start),A=Math.min(u.count,_.start+_.count);for(let S=M,b=A;S<b;S+=3){const R=S,F=S+1,D=S+2;o=Ul(this,d,e,r,m,v,y,R,F,D),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function Q_(s,e,t,r,o,l,d,p){let u;if(e.side===In?u=r.intersectTriangle(d,l,o,!0,p):u=r.intersectTriangle(o,l,d,e.side===gs,p),u===null)return null;zl.copy(p),zl.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(zl);return m<t.near||m>t.far?null:{distance:m,point:zl.clone(),object:s}}function Ul(s,e,t,r,o,l,d,p,u,m){s.getVertexPosition(p,Pl),s.getVertexPosition(u,Dl),s.getVertexPosition(m,Ll);const v=Q_(s,e,t,r,Pl,Dl,Ll,T0);if(v){const y=new he;Li.getBarycoord(T0,Pl,Dl,Ll,y),o&&(v.uv=Li.getInterpolatedAttribute(o,p,u,m,y,new zt)),l&&(v.uv1=Li.getInterpolatedAttribute(l,p,u,m,y,new zt)),d&&(v.normal=Li.getInterpolatedAttribute(d,p,u,m,y,new he),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:p,b:u,c:m,normal:new he,materialIndex:0};Li.getNormal(Pl,Dl,Ll,g.normal),v.face=g,v.barycoord=y}return v}class ey extends Gn{constructor(e=null,t=1,r=1,o,l,d,p,u,m=Ln,v=Ln,y,g){super(null,d,p,u,m,v,o,l,y,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const us=new Mf,ty=new zt(.5,.5),kl=new he;class lo{constructor(e=new kr,t=new kr,r=new kr,o=new kr,l=new kr,d=new kr){this.planes=[e,t,r,o,l,d]}set(e,t,r,o,l,d){const p=this.planes;return p[0].copy(e),p[1].copy(t),p[2].copy(r),p[3].copy(o),p[4].copy(l),p[5].copy(d),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ii,r=!1){const o=this.planes,l=e.elements,d=l[0],p=l[1],u=l[2],m=l[3],v=l[4],y=l[5],g=l[6],_=l[7],M=l[8],A=l[9],S=l[10],b=l[11],R=l[12],F=l[13],D=l[14],U=l[15];if(o[0].setComponents(m-d,_-v,b-M,U-R).normalize(),o[1].setComponents(m+d,_+v,b+M,U+R).normalize(),o[2].setComponents(m+p,_+y,b+A,U+F).normalize(),o[3].setComponents(m-p,_-y,b-A,U-F).normalize(),r)o[4].setComponents(u,g,S,D).normalize(),o[5].setComponents(m-u,_-g,b-S,U-D).normalize();else if(o[4].setComponents(m-u,_-g,b-S,U-D).normalize(),t===Ii)o[5].setComponents(m+u,_+g,b+S,U+D).normalize();else if(t===oo)o[5].setComponents(u,g,S,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){us.center.set(0,0,0);const t=ty.distanceTo(e.center);return us.radius=.7071067811865476+t,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(kl.x=o.normal.x>0?e.max.x:e.min.x,kl.y=o.normal.y>0?e.max.y:e.min.y,kl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(kl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const A0=new dn;class Ef{constructor(){this.coordinateSystem=Ii,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let o=0;o<t.length;o++){const l=t[o];A0.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),r[o]===void 0&&(r[o]=new lo),r[o].setFromProjectionMatrix(A0,l.coordinateSystem,l.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let o=0;o<e._count;o++)t[o]===void 0&&(t[o]=new lo),t[o].copy(r[o]);return this._count=e._count,this}clone(){return new Ef().copy(this)}}class km extends Gn{constructor(e=[],t=sa,r,o,l,d,p,u,m,v){super(e,t,r,o,l,d,p,u,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lc extends Gn{constructor(e,t,r,o,l,d,p,u,m){super(e,t,r,o,l,d,p,u,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class la extends Gn{constructor(e,t,r=Yi,o,l,d,p=Ln,u=Ln,m,v=Wr,y=1){if(v!==Wr&&v!==Hr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:y};super(g,o,l,d,p,u,v,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Fm extends la{constructor(e,t=Yi,r=sa,o,l,d=Ln,p=Ln,u,m=Wr){const v={width:e,height:e,depth:1},y=[v,v,v,v,v,v];super(e,e,t,r,o,l,d,p,u,m),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Om extends Gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ho extends Ki{constructor(e=1,t=1,r=1,o=1,l=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:d};const p=this;o=Math.floor(o),l=Math.floor(l),d=Math.floor(d);const u=[],m=[],v=[],y=[];let g=0,_=0;M("z","y","x",-1,-1,r,t,e,d,l,0),M("z","y","x",1,-1,r,t,-e,d,l,1),M("x","z","y",1,1,e,r,t,o,d,2),M("x","z","y",1,-1,e,r,-t,o,d,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(u),this.setAttribute("position",new Nn(m,3)),this.setAttribute("normal",new Nn(v,3)),this.setAttribute("uv",new Nn(y,2));function M(A,S,b,R,F,D,U,L,w,N,J){const X=D/w,j=U/N,B=D/2,O=U/2,V=L/2,H=w+1,se=N+1;let ee=0,Y=0;const G=new he;for(let $=0;$<se;$++){const P=$*j-O;for(let K=0;K<H;K++){const we=K*X-B;G[A]=we*R,G[S]=P*F,G[b]=V,m.push(G.x,G.y,G.z),G[A]=0,G[S]=0,G[b]=L>0?1:-1,v.push(G.x,G.y,G.z),y.push(K/w),y.push(1-$/N),ee+=1}}for(let $=0;$<N;$++)for(let P=0;P<w;P++){const K=g+P+H*$,we=g+P+H*($+1),k=g+(P+1)+H*($+1),ve=g+(P+1)+H*$;u.push(K,we,ve),u.push(we,k,ve),Y+=6}p.addGroup(_,Y,J),_+=Y,g+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ho(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Tf extends Ki{constructor(e=1,t=1,r=1,o=32,l=1,d=!1,p=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:d,thetaStart:p,thetaLength:u};const m=this;o=Math.floor(o),l=Math.floor(l);const v=[],y=[],g=[],_=[];let M=0;const A=[],S=r/2;let b=0;R(),d===!1&&(e>0&&F(!0),t>0&&F(!1)),this.setIndex(v),this.setAttribute("position",new Nn(y,3)),this.setAttribute("normal",new Nn(g,3)),this.setAttribute("uv",new Nn(_,2));function R(){const D=new he,U=new he;let L=0;const w=(t-e)/r;for(let N=0;N<=l;N++){const J=[],X=N/l,j=X*(t-e)+e;for(let B=0;B<=o;B++){const O=B/o,V=O*u+p,H=Math.sin(V),se=Math.cos(V);U.x=j*H,U.y=-X*r+S,U.z=j*se,y.push(U.x,U.y,U.z),D.set(H,w,se).normalize(),g.push(D.x,D.y,D.z),_.push(O,1-X),J.push(M++)}A.push(J)}for(let N=0;N<o;N++)for(let J=0;J<l;J++){const X=A[J][N],j=A[J+1][N],B=A[J+1][N+1],O=A[J][N+1];(e>0||J!==0)&&(v.push(X,j,O),L+=3),(t>0||J!==l-1)&&(v.push(j,B,O),L+=3)}m.addGroup(b,L,0),b+=L}function F(D){const U=M,L=new zt,w=new he;let N=0;const J=D===!0?e:t,X=D===!0?1:-1;for(let B=1;B<=o;B++)y.push(0,S*X,0),g.push(0,X,0),_.push(.5,.5),M++;const j=M;for(let B=0;B<=o;B++){const V=B/o*u+p,H=Math.cos(V),se=Math.sin(V);w.x=J*se,w.y=S*X,w.z=J*H,y.push(w.x,w.y,w.z),g.push(0,X,0),L.x=H*.5+.5,L.y=se*.5*X+.5,_.push(L.x,L.y),M++}for(let B=0;B<o;B++){const O=U+B,V=j+B;D===!0?v.push(V,V+1,O):v.push(V+1,V,O),N+=3}m.addGroup(b,N,D===!0?1:2),b+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Af extends Tf{constructor(e=1,t=1,r=32,o=1,l=!1,d=0,p=Math.PI*2){super(0,e,t,r,o,l,d,p),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:d,thetaLength:p}}static fromJSON(e){return new Af(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class po extends Ki{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,d=t/2,p=Math.floor(r),u=Math.floor(o),m=p+1,v=u+1,y=e/p,g=t/u,_=[],M=[],A=[],S=[];for(let b=0;b<v;b++){const R=b*g-d;for(let F=0;F<m;F++){const D=F*y-l;M.push(D,-R,0),A.push(0,0,1),S.push(F/p),S.push(1-b/u)}}for(let b=0;b<u;b++)for(let R=0;R<p;R++){const F=R+m*b,D=R+m*(b+1),U=R+1+m*(b+1),L=R+1+m*b;_.push(F,D,L),_.push(D,U,L)}this.setIndex(_),this.setAttribute("position",new Nn(M,3)),this.setAttribute("normal",new Nn(A,3)),this.setAttribute("uv",new Nn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.width,e.height,e.widthSegments,e.heightSegments)}}class Cf extends Ki{constructor(e=.5,t=1,r=32,o=1,l=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:d},r=Math.max(3,r),o=Math.max(1,o);const p=[],u=[],m=[],v=[];let y=e;const g=(t-e)/o,_=new he,M=new zt;for(let A=0;A<=o;A++){for(let S=0;S<=r;S++){const b=l+S/r*d;_.x=y*Math.cos(b),_.y=y*Math.sin(b),u.push(_.x,_.y,_.z),m.push(0,0,1),M.x=(_.x/t+1)/2,M.y=(_.y/t+1)/2,v.push(M.x,M.y)}y+=g}for(let A=0;A<o;A++){const S=A*(r+1);for(let b=0;b<r;b++){const R=b+S,F=R,D=R+r+1,U=R+r+2,L=R+1;p.push(F,D,L),p.push(D,U,L)}}this.setIndex(p),this.setAttribute("position",new Nn(u,3)),this.setAttribute("normal",new Nn(m,3)),this.setAttribute("uv",new Nn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ri extends Ki{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,d=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:d,thetaLength:p},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const u=Math.min(d+p,Math.PI);let m=0;const v=[],y=new he,g=new he,_=[],M=[],A=[],S=[];for(let b=0;b<=r;b++){const R=[],F=b/r,D=d+F*p,U=e*Math.cos(D),L=Math.sqrt(e*e-U*U);let w=0;b===0&&d===0?w=.5/t:b===r&&u===Math.PI&&(w=-.5/t);for(let N=0;N<=t;N++){const J=N/t,X=o+J*l;y.x=-L*Math.cos(X),y.y=U,y.z=L*Math.sin(X),M.push(y.x,y.y,y.z),g.copy(y).normalize(),A.push(g.x,g.y,g.z),S.push(J+w,1-F),R.push(m++)}v.push(R)}for(let b=0;b<r;b++)for(let R=0;R<t;R++){const F=v[b][R+1],D=v[b][R],U=v[b+1][R],L=v[b+1][R+1];(b!==0||d>0)&&_.push(F,D,L),(b!==r-1||u<Math.PI)&&_.push(D,U,L)}this.setIndex(_),this.setAttribute("position",new Nn(M,3)),this.setAttribute("normal",new Nn(A,3)),this.setAttribute("uv",new Nn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ca(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(C0(o))o.isRenderTargetTexture?(bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(C0(o[0])){const l=[];for(let d=0,p=o.length;d<p;d++)l[d]=o[d].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function $n(s){const e={};for(let t=0;t<s.length;t++){const r=ca(s[t]);for(const o in r)e[o]=r[o]}return e}function C0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function ny(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Bm(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ft.workingColorSpace}const iy={clone:ca,merge:$n};var ry=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends fo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ry,this.fragmentShader=sy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ca(e.uniforms),this.uniformsGroups=ny(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?t.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[o]={type:"m4",value:d.toArray()}:t.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new Nt().setHex(o.value);break;case"v2":this.uniforms[r].value=new zt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new he().fromArray(o.value);break;case"v4":this.uniforms[r].value=new un().fromArray(o.value);break;case"m3":this.uniforms[r].value=new wt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new dn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class ay extends gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Fl extends fo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=af,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oy extends fo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=m_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ly extends fo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Hm extends Vn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const xd=new dn,R0=new he,N0=new he;class cy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new dn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lo,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new un(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;R0.setFromMatrixPosition(e.matrixWorld),t.position.copy(R0),N0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(N0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,o){xd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(xd,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,d=o?o.z/l.x:1,p=o?o.w/l.y:1,u=o?o.x/l.x:0,m=o?o.y/l.y:0;e.coordinateSystem===oo||e.reversedDepth?t.set(.5*d,0,0,.5*d+u,0,.5*p,0,.5*p+m,0,0,1,0,0,0,0,1):t.set(.5*d,0,0,.5*d+u,0,.5*p,0,.5*p+m,0,0,.5,.5,0,0,0,1),t.multiply(xd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ol=new he,Bl=new da,Gi=new he;class Gm extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ol,Bl,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ol,Bl,Gi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Ol,Bl,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ol,Bl,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ur=new he,P0=new zt,D0=new zt;class Pi extends Gm{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=of*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return of*2*Math.atan(Math.tan(qu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z),Ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z)}getViewSize(e,t){return this.getViewBounds(e,P0,D0),t.subVectors(D0,P0)}setViewOffset(e,t,r,o,l,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qu*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const u=d.fullWidth,m=d.fullHeight;l+=d.offsetX*o/u,t-=d.offsetY*r/m,o*=d.width/u,r*=d.height/m}const p=this.filmOffset;p!==0&&(l+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Vm extends Gm{constructor(e=-1,t=1,r=1,o=-1,l=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,d=r+e,p=o+t,u=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,d=l+m*this.view.width,p-=v*this.view.offsetY,u=p-v*this.view.height}this.projectionMatrix.makeOrthographic(l,d,p,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class uy extends cy{constructor(){super(new Vm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dy extends Hm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vn.DEFAULT_UP),this.updateMatrix(),this.target=new Vn,this.shadow=new uy}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class fy extends Hm{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Qs=-90,ea=1;class lf extends Vn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Pi(Qs,ea,e,t);o.layers=this.layers,this.add(o);const l=new Pi(Qs,ea,e,t);l.layers=this.layers,this.add(l);const d=new Pi(Qs,ea,e,t);d.layers=this.layers,this.add(d);const p=new Pi(Qs,ea,e,t);p.layers=this.layers,this.add(p);const u=new Pi(Qs,ea,e,t);u.layers=this.layers,this.add(u);const m=new Pi(Qs,ea,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,d,p,u]=t;for(const m of t)this.remove(m);if(e===Ii)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===oo)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,d,p,u,m,v]=this.children,y=e.getRenderTarget(),g=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(r,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),r.texture.mipmapsAutoUpdate=A,e.setRenderTarget(r,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(y,g,_),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class hy extends Pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function L0(s,e,t,r){const o=py(r);switch(t){case Em:return s*e;case Am:return s*e/o.components*o.byteLength;case _f:return s*e/o.components*o.byteLength;case xs:return s*e*2/o.components*o.byteLength;case yf:return s*e*2/o.components*o.byteLength;case Tm:return s*e*3/o.components*o.byteLength;case $i:return s*e*4/o.components*o.byteLength;case Sf:return s*e*4/o.components*o.byteLength;case Wl:case jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case $l:case Xl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Nd:case Dd:return Math.max(s,16)*Math.max(e,8)/4;case Rd:case Pd:return Math.max(s,8)*Math.max(e,8)/2;case Ld:case Id:case Ud:case kd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zd:case Ql:case Fd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Od:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Hd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case jd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case $d:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Xd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case qd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Kd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Zd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Jd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Qd:case ef:case tf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case nf:case rf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ec:case sf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function py(s){switch(s){case li:case Sm:return{byteLength:1,components:1};case ao:case bm:case qi:return{byteLength:2,components:1};case xf:case vf:return{byteLength:2,components:4};case Yi:case gf:case ji:return{byteLength:4,components:1};case wm:case Mm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mf}}));typeof window<"u"&&(window.__THREE__?bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wm(){let s=null,e=!1,t=null,r=null;function o(l,d){r=s.requestAnimationFrame(o),t(l,d)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function my(s){const e=new WeakMap;function t(p,u){const m=p.array,v=p.usage,y=m.byteLength,g=s.createBuffer();s.bindBuffer(u,g),s.bufferData(u,m,v),p.onUploadCallback();let _;if(m instanceof Float32Array)_=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)_=s.HALF_FLOAT;else if(m instanceof Uint16Array)p.isFloat16BufferAttribute?_=s.HALF_FLOAT:_=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)_=s.SHORT;else if(m instanceof Uint32Array)_=s.UNSIGNED_INT;else if(m instanceof Int32Array)_=s.INT;else if(m instanceof Int8Array)_=s.BYTE;else if(m instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:_,bytesPerElement:m.BYTES_PER_ELEMENT,version:p.version,size:y}}function r(p,u,m){const v=u.array,y=u.updateRanges;if(s.bindBuffer(m,p),y.length===0)s.bufferSubData(m,0,v);else{y.sort((_,M)=>_.start-M.start);let g=0;for(let _=1;_<y.length;_++){const M=y[g],A=y[_];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++g,y[g]=A)}y.length=g+1;for(let _=0,M=y.length;_<M;_++){const A=y[_];s.bufferSubData(m,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}u.clearUpdateRanges()}u.onUploadCallback()}function o(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function l(p){p.isInterleavedBufferAttribute&&(p=p.data);const u=e.get(p);u&&(s.deleteBuffer(u.buffer),e.delete(p))}function d(p,u){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=e.get(p);(!v||v.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const m=e.get(p);if(m===void 0)e.set(p,t(p,u));else if(m.version<p.version){if(m.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,p,u),m.version=p.version}}return{get:o,remove:l,update:d}}var gy=`#ifdef USE_ALPHAHASH
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
#endif`,Ay=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cy=`float G_BlinnPhong_Implicit( ) {
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
#endif`,zy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Uy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ky=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,A1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C1=`#ifdef USE_INSTANCING_MORPH
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
#endif`,z1=`#ifndef FLAT_SHADED
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
#endif`,k1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,F1=`#ifdef USE_NORMALMAP
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
}`,CS=`uniform vec3 diffuse;
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
}`,zS=`#define NORMAL
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
}`,kS=`#define PHONG
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
}`,FS=`#define PHONG
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
}`,Tt={alphahash_fragment:gy,alphahash_pars_fragment:xy,alphamap_fragment:vy,alphamap_pars_fragment:_y,alphatest_fragment:yy,alphatest_pars_fragment:Sy,aomap_fragment:by,aomap_pars_fragment:wy,batching_pars_vertex:My,batching_vertex:Ey,begin_vertex:Ty,beginnormal_vertex:Ay,bsdfs:Cy,iridescence_fragment:Ry,bumpmap_pars_fragment:Ny,clipping_planes_fragment:Py,clipping_planes_pars_fragment:Dy,clipping_planes_pars_vertex:Ly,clipping_planes_vertex:Iy,color_fragment:zy,color_pars_fragment:Uy,color_pars_vertex:ky,color_vertex:Fy,common:Oy,defaultnormal_vertex:By,displacementmap_pars_vertex:Hy,displacementmap_vertex:Gy,emissivemap_fragment:Vy,emissivemap_pars_fragment:Wy,colorspace_fragment:jy,colorspace_pars_fragment:$y,envmap_fragment:Xy,envmap_common_pars_fragment:Yy,envmap_pars_fragment:qy,envmap_pars_vertex:Ky,envmap_physical_pars_fragment:o1,envmap_vertex:Zy,fog_vertex:Jy,fog_pars_vertex:Qy,fog_fragment:e1,fog_pars_fragment:t1,gradientmap_pars_fragment:n1,lightmap_pars_fragment:i1,lights_lambert_fragment:r1,lights_lambert_pars_fragment:s1,lights_pars_begin:a1,lights_toon_fragment:l1,lights_toon_pars_fragment:c1,lights_phong_fragment:u1,lights_phong_pars_fragment:d1,lights_physical_fragment:f1,lights_physical_pars_fragment:h1,lights_fragment_begin:p1,lights_fragment_maps:m1,lights_fragment_end:g1,lightprobes_pars_fragment:x1,logdepthbuf_fragment:v1,logdepthbuf_pars_fragment:_1,logdepthbuf_pars_vertex:y1,logdepthbuf_vertex:S1,map_fragment:b1,map_pars_fragment:w1,map_particle_fragment:M1,map_particle_pars_fragment:E1,metalnessmap_fragment:T1,metalnessmap_pars_fragment:A1,morphinstance_vertex:C1,morphcolor_vertex:R1,morphnormal_vertex:N1,morphtarget_pars_vertex:P1,morphtarget_vertex:D1,normal_fragment_begin:L1,normal_fragment_maps:I1,normal_pars_fragment:z1,normal_pars_vertex:U1,normal_vertex:k1,normalmap_pars_fragment:F1,clearcoat_normal_fragment_begin:O1,clearcoat_normal_fragment_maps:B1,clearcoat_pars_fragment:H1,iridescence_pars_fragment:G1,opaque_fragment:V1,packing:W1,premultiplied_alpha_fragment:j1,project_vertex:$1,dithering_fragment:X1,dithering_pars_fragment:Y1,roughnessmap_fragment:q1,roughnessmap_pars_fragment:K1,shadowmap_pars_fragment:Z1,shadowmap_pars_vertex:J1,shadowmap_vertex:Q1,shadowmask_pars_fragment:eS,skinbase_vertex:tS,skinning_pars_vertex:nS,skinning_vertex:iS,skinnormal_vertex:rS,specularmap_fragment:sS,specularmap_pars_fragment:aS,tonemapping_fragment:oS,tonemapping_pars_fragment:lS,transmission_fragment:cS,transmission_pars_fragment:uS,uv_pars_fragment:dS,uv_pars_vertex:fS,uv_vertex:hS,worldpos_vertex:pS,background_vert:mS,background_frag:gS,backgroundCube_vert:xS,backgroundCube_frag:vS,cube_vert:_S,cube_frag:yS,depth_vert:SS,depth_frag:bS,distance_vert:wS,distance_frag:MS,equirect_vert:ES,equirect_frag:TS,linedashed_vert:AS,linedashed_frag:CS,meshbasic_vert:RS,meshbasic_frag:NS,meshlambert_vert:PS,meshlambert_frag:DS,meshmatcap_vert:LS,meshmatcap_frag:IS,meshnormal_vert:zS,meshnormal_frag:US,meshphong_vert:kS,meshphong_frag:FS,meshphysical_vert:OS,meshphysical_frag:BS,meshtoon_vert:HS,meshtoon_frag:GS,points_vert:VS,points_frag:WS,shadow_vert:jS,shadow_frag:$S,sprite_vert:XS,sprite_frag:YS},qe={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},Wi={basic:{uniforms:$n([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:$n([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Nt(0)},envMapIntensity:{value:1}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:$n([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:$n([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:$n([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:$n([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:$n([qe.points,qe.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:$n([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:$n([qe.common,qe.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:$n([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:$n([qe.sprite,qe.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distance:{uniforms:$n([qe.common,qe.displacementmap,{referencePosition:{value:new he},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distance_vert,fragmentShader:Tt.distance_frag},shadow:{uniforms:$n([qe.lights,qe.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};Wi.physical={uniforms:$n([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const Hl={r:0,b:0,g:0},qS=new dn,jm=new wt;jm.set(-1,0,0,0,1,0,0,0,1);function KS(s,e,t,r,o,l){const d=new Nt(0);let p=o===!0?0:1,u,m,v=null,y=0,g=null;function _(R){let F=R.isScene===!0?R.background:null;if(F&&F.isTexture){const D=R.backgroundBlurriness>0;F=e.get(F,D)}return F}function M(R){let F=!1;const D=_(R);D===null?S(d,p):D&&D.isColor&&(S(D,1),F=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?t.buffers.color.setClear(0,0,0,1,l):U==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||F)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function A(R,F){const D=_(F);D&&D.isCubeTexture?(m===void 0&&(m=new vn(new ho(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:ca(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(U,L,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=D,m.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(qS.makeRotationFromEuler(F.backgroundRotation)).transpose(),D.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(jm),m.material.toneMapped=Ft.getTransfer(D.colorSpace)!==qt,(v!==D||y!==D.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,v=D,y=D.version,g=s.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null)):D&&D.isTexture&&(u===void 0&&(u=new vn(new po(2,2),new gi({name:"BackgroundMaterial",uniforms:ca(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=D,u.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,u.material.toneMapped=Ft.getTransfer(D.colorSpace)!==qt,D.matrixAutoUpdate===!0&&D.updateMatrix(),u.material.uniforms.uvTransform.value.copy(D.matrix),(v!==D||y!==D.version||g!==s.toneMapping)&&(u.material.needsUpdate=!0,v=D,y=D.version,g=s.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null))}function S(R,F){R.getRGB(Hl,Bm(s)),t.buffers.color.setClear(Hl.r,Hl.g,Hl.b,F,l)}function b(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return d},setClearColor:function(R,F=1){d.set(R),p=F,S(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(R){p=R,S(d,p)},render:M,addToRenderList:A,dispose:b}}function ZS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,d=!1;function p(j,B,O,V,H){let se=!1;const ee=y(j,V,O,B);l!==ee&&(l=ee,m(l.object)),se=_(j,V,O,H),se&&M(j,V,O,H),H!==null&&e.update(H,s.ELEMENT_ARRAY_BUFFER),(se||d)&&(d=!1,D(j,B,O,V),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function u(){return s.createVertexArray()}function m(j){return s.bindVertexArray(j)}function v(j){return s.deleteVertexArray(j)}function y(j,B,O,V){const H=V.wireframe===!0;let se=r[B.id];se===void 0&&(se={},r[B.id]=se);const ee=j.isInstancedMesh===!0?j.id:0;let Y=se[ee];Y===void 0&&(Y={},se[ee]=Y);let G=Y[O.id];G===void 0&&(G={},Y[O.id]=G);let $=G[H];return $===void 0&&($=g(u()),G[H]=$),$}function g(j){const B=[],O=[],V=[];for(let H=0;H<t;H++)B[H]=0,O[H]=0,V[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:O,attributeDivisors:V,object:j,attributes:{},index:null}}function _(j,B,O,V){const H=l.attributes,se=B.attributes;let ee=0;const Y=O.getAttributes();for(const G in Y)if(Y[G].location>=0){const P=H[G];let K=se[G];if(K===void 0&&(G==="instanceMatrix"&&j.instanceMatrix&&(K=j.instanceMatrix),G==="instanceColor"&&j.instanceColor&&(K=j.instanceColor)),P===void 0||P.attribute!==K||K&&P.data!==K.data)return!0;ee++}return l.attributesNum!==ee||l.index!==V}function M(j,B,O,V){const H={},se=B.attributes;let ee=0;const Y=O.getAttributes();for(const G in Y)if(Y[G].location>=0){let P=se[G];P===void 0&&(G==="instanceMatrix"&&j.instanceMatrix&&(P=j.instanceMatrix),G==="instanceColor"&&j.instanceColor&&(P=j.instanceColor));const K={};K.attribute=P,P&&P.data&&(K.data=P.data),H[G]=K,ee++}l.attributes=H,l.attributesNum=ee,l.index=V}function A(){const j=l.newAttributes;for(let B=0,O=j.length;B<O;B++)j[B]=0}function S(j){b(j,0)}function b(j,B){const O=l.newAttributes,V=l.enabledAttributes,H=l.attributeDivisors;O[j]=1,V[j]===0&&(s.enableVertexAttribArray(j),V[j]=1),H[j]!==B&&(s.vertexAttribDivisor(j,B),H[j]=B)}function R(){const j=l.newAttributes,B=l.enabledAttributes;for(let O=0,V=B.length;O<V;O++)B[O]!==j[O]&&(s.disableVertexAttribArray(O),B[O]=0)}function F(j,B,O,V,H,se,ee){ee===!0?s.vertexAttribIPointer(j,B,O,H,se):s.vertexAttribPointer(j,B,O,V,H,se)}function D(j,B,O,V){A();const H=V.attributes,se=O.getAttributes(),ee=B.defaultAttributeValues;for(const Y in se){const G=se[Y];if(G.location>=0){let $=H[Y];if($===void 0&&(Y==="instanceMatrix"&&j.instanceMatrix&&($=j.instanceMatrix),Y==="instanceColor"&&j.instanceColor&&($=j.instanceColor)),$!==void 0){const P=$.normalized,K=$.itemSize,we=e.get($);if(we===void 0)continue;const k=we.buffer,ve=we.type,be=we.bytesPerElement,Ne=ve===s.INT||ve===s.UNSIGNED_INT||$.gpuType===gf;if($.isInterleavedBufferAttribute){const _e=$.data,Ue=_e.isInterleavedBuffer===!0?_e.stride:_e.itemSize,ot=$.offset;if(_e.isInstancedInterleavedBuffer||_e.isInstancedBufferAttribute){for(let Be=0;Be<G.locationSize;Be++)b(G.location+Be,_e.meshPerAttribute);j.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Be=0;Be<G.locationSize;Be++)S(G.location+Be);s.bindBuffer(s.ARRAY_BUFFER,k);for(let Be=0;Be<G.locationSize;Be++)F(G.location+Be,K/G.locationSize,ve,P,Ue*be,(ot+K/G.locationSize*Be)*be,Ne)}else{if($.isInstancedBufferAttribute){for(let _e=0;_e<G.locationSize;_e++)b(G.location+_e,$.meshPerAttribute);j.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let _e=0;_e<G.locationSize;_e++)S(G.location+_e);s.bindBuffer(s.ARRAY_BUFFER,k);for(let _e=0;_e<G.locationSize;_e++)F(G.location+_e,K/G.locationSize,ve,P,K*be,K/G.locationSize*_e*be,Ne)}}else if(ee!==void 0){const P=ee[Y];if(P!==void 0)switch(P.length){case 2:s.vertexAttrib2fv(G.location,P);break;case 3:s.vertexAttrib3fv(G.location,P);break;case 4:s.vertexAttrib4fv(G.location,P);break;default:s.vertexAttrib1fv(G.location,P)}}}}R()}function U(){J();for(const j in r){const B=r[j];for(const O in B){const V=B[O];for(const H in V){const se=V[H];for(const ee in se)v(se[ee].object),delete se[ee];delete V[H]}}delete r[j]}}function L(j){if(r[j.id]===void 0)return;const B=r[j.id];for(const O in B){const V=B[O];for(const H in V){const se=V[H];for(const ee in se)v(se[ee].object),delete se[ee];delete V[H]}}delete r[j.id]}function w(j){for(const B in r){const O=r[B];for(const V in O){const H=O[V];if(H[j.id]===void 0)continue;const se=H[j.id];for(const ee in se)v(se[ee].object),delete se[ee];delete H[j.id]}}}function N(j){for(const B in r){const O=r[B],V=j.isInstancedMesh===!0?j.id:0,H=O[V];if(H!==void 0){for(const se in H){const ee=H[se];for(const Y in ee)v(ee[Y].object),delete ee[Y];delete H[se]}delete O[V],Object.keys(O).length===0&&delete r[B]}}}function J(){X(),d=!0,l!==o&&(l=o,m(l.object))}function X(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:p,reset:J,resetDefaultState:X,dispose:U,releaseStatesOfGeometry:L,releaseStatesOfObject:N,releaseStatesOfProgram:w,initAttributes:A,enableAttribute:S,disableUnusedAttributes:R}}function JS(s,e,t){let r;function o(u){r=u}function l(u,m){s.drawArrays(r,u,m),t.update(m,r,1)}function d(u,m,v){v!==0&&(s.drawArraysInstanced(r,u,m,v),t.update(m,r,v))}function p(u,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,u,0,m,0,v);let g=0;for(let _=0;_<v;_++)g+=m[_];t.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=d,this.renderMultiDraw=p}function QS(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(w){return!(w!==$i&&r.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(w){const N=w===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==li&&w!==ji&&!N&&r.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function u(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const v=u(m);v!==m&&(bt("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const y=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=t.logarithmicDepthBuffer===!0&&y===!1;t.reversedDepthBuffer===!0&&y===!1&&bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&y===!0&&bt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const _=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),b=s.getParameter(s.MAX_VERTEX_ATTRIBS),R=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),F=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:u,textureFormatReadable:d,textureTypeReadable:p,precision:m,logarithmicDepthBuffer:g,reversedDepthBuffer:y,maxTextures:_,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:S,maxAttributes:b,maxVertexUniforms:R,maxVaryings:F,maxFragmentUniforms:D,maxSamples:U,samples:L}}function eb(s){const e=this;let t=null,r=0,o=!1,l=!1;const d=new kr,p=new wt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(y,g){const _=y.length!==0||g||r!==0||o;return o=g,r=y.length,_},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(y,g){t=v(y,g,0)},this.setState=function(y,g,_){const M=y.clippingPlanes,A=y.clipIntersection,S=y.clipShadows,b=s.get(y);if(!o||M===null||M.length===0||l&&!S)l?v(null):m();else{const R=l?0:r,F=R*4;let D=b.clippingState||null;u.value=D,D=v(M,g,F,_);for(let U=0;U!==F;++U)D[U]=t[U];b.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=R}};function m(){u.value!==t&&(u.value=t,u.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(y,g,_,M){const A=y!==null?y.length:0;let S=null;if(A!==0){if(S=u.value,M!==!0||S===null){const b=_+A*4,R=g.matrixWorldInverse;p.getNormalMatrix(R),(S===null||S.length<b)&&(S=new Float32Array(b));for(let F=0,D=_;F!==A;++F,D+=4)d.copy(y[F]).applyMatrix4(R,p),d.normal.toArray(S,D),S[D+3]=d.constant}u.value=S,u.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}class Rf extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new km(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new ho(5,5,5),l=new gi({name:"CubemapFromEquirect",uniforms:ca(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:In,blending:ia});l.uniforms.tEquirect.value=t;const d=new vn(o,l),p=t.minFilter;return t.minFilter===Br&&(t.minFilter=ei),new lf(1,10,this).update(e,d),t.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,r,o);e.setRenderTarget(l)}}const I0=256,tb=3,nb=20,$m=256,Xm=16,ib=3,rb=new he,sb=new Nt;class rc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new lf(1,10,null),this._boxMesh=new vn(new ho(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:d=256,position:p=rb}=l,u=this._renderer;this._setSize(d);const m=this._allocateTarget(),v=this._getSourceTarget(!0);t>0&&(v.texture.mipmapsAutoUpdate=!1);const y=u.autoClear,g=u.autoClearColor,_=u.autoClearDepth,M=u.autoClearStencil,A=e.background;u.autoClear=!0,u.autoClearColor=!0,u.autoClearDepth=!0,u.autoClearStencil=!0,A===null&&(e.background=u.getClearColor(sb));const S=new lf(r,o,v);return S.position.copy(p),S.update(u,e),u.autoClear=y,u.autoClearColor=g,u.autoClearDepth=_,u.autoClearStencil=M,e.background=A,t>0&&(v.texture.mipmapsAutoUpdate=!0,this._blur(m,t)),this._applyPMREM(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=k0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=U0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(I0,R_(e))}_fromTexture(e,t){e.mapping===sa||e.mapping===so?this._setSize(e.image.length===0?I0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=z0(e,!1,!1),r=Math.log2(e)-tb;for(let o=0;o<=r;o++)t.texture.mipmaps.push({width:e>>o,height:e>>o});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=z0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const o=this._boxMesh,l=this._cubeCamera;o.material=r,l.renderTarget=e,l.activeMipmapLevel=t;const d=e.width>>t;e.viewport.set(0,0,d,d),l.update(this._renderer,o),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===sa||e.mapping===so?(this._cubemapMaterial===null&&(this._cubemapMaterial=k0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=U0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=ab(),this._integrationMaterial=ob());const t=this._cubeSize,r=e.texture.mipmaps.length-1,o=this._ggxMaterial.uniforms;o.envMap.value=this._sourceTarget.texture;const l=this._integrationMaterial.uniforms;l.envMap.value=this._sourceTarget.texture,l.sourceLod.value=Math.log2(t/Xm);for(let d=0;d<=r;d++){const p=rc.lodToRoughness(d,r);if(d>r-ib)l.roughness.value=p,this._renderCube(e,d,this._integrationMaterial);else{const u=p>0?Math.log2(t)+.5*Math.log2(6/($m*Math.pow(p,4)))+.5:0;o.roughness.value=p,o.lodBias.value=u,this._renderCube(e,d,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=lb());const r=this._blurMaterial,o=r.uniforms,l=this._sourceTarget;o.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,o.envMap.value=l.texture,this._renderCube(e,0,r),o.envMap.value=e.texture,this._renderCube(l,0,r)}}function z0(s,e,t){return new Rf(s,{minFilter:Br,generateMipmaps:e,type:qi,colorSpace:tc,depthBuffer:t})}function mo(s,e,t){return new gi({name:s,uniforms:e,vertexShader:Tt.cube_vert,fragmentShader:t,side:In,blending:ia,depthTest:!1,depthWrite:!1})}function ab(){return mo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${$m}u

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
	`)}function ob(){return mo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Xm}},`

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
	`)}function lb(){return mo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

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
	`)}function U0(){return mo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function k0(){return mo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function cb(s){let e=new WeakMap,t=new WeakMap,r=null;function o(g,_=!1){return g==null?null:_?d(g):l(g)}function l(g){if(g&&g.isTexture){const _=g.mapping;if(_===ju||_===$u)if(e.has(g)){const M=e.get(g).texture;return p(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const A=new Rf(M.height);return A.fromEquirectangularTexture(s,g),e.set(g,A),g.addEventListener("dispose",m),p(A.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture&&g.isPMREMTexture!==!0){const _=g.mapping,M=_===ju||_===$u,A=_===sa||_===so;if(M||A){let S=t.get(g);const b=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==b)return r===null&&(r=new rc(s)),S=M?r.fromEquirectangular(g,S):r.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),S.texture;if(S!==void 0)return S.texture;{const R=g.image;return M&&R&&R.height>0||A&&R&&u(R)?(r===null&&(r=new rc(s)),S=M?r.fromEquirectangular(g):r.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),g.addEventListener("dispose",v),S.texture):null}}}return g}function p(g,_){return _===ju?g.mapping=sa:_===$u&&(g.mapping=so),g}function u(g){let _=0;const M=6;for(let A=0;A<M;A++)g[A]!==void 0&&_++;return _===M}function m(g){const _=g.target;_.removeEventListener("dispose",m);const M=e.get(_);M!==void 0&&(e.delete(_),M.dispose())}function v(g){const _=g.target;_.removeEventListener("dispose",v);const M=t.get(_);M!==void 0&&(t.delete(_),M.dispose())}function y(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:y}}function ub(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Yl("WebGLRenderer: "+r+" extension not supported."),o}}}function db(s,e,t,r){const o={},l=new WeakMap,d=new FinalizationRegistry(M=>delete o[M]);function p(M){u(M.target)}function u(M){M.index!==null&&e.remove(M.index);for(const S in M.attributes)e.remove(M.attributes[S]);M.removeEventListener("dispose",p),delete o[M.id],d.unregister(M);const A=l.get(M);A&&(e.remove(A),l.delete(M)),r.releaseStatesOfGeometry(M),M.isInstancedBufferGeometry===!0&&delete M._maxInstanceCount,t.memory.geometries--}function m(M,A){return o[A.id]!==void 0||(A.addEventListener("dispose",p),o[A.id]=new WeakRef(A),d.register(A,A.id,A),t.memory.geometries++),A}function v(M){const A=M.attributes;for(const S in A)e.update(A[S],s.ARRAY_BUFFER)}function y(M){const A=M.index,S=M.attributes.position;let b=0;if(S===void 0)return;const R=A!==null?A.array.length:S.array.length/3-1,F=S.count>=65535?Um:zm,D=new F(Math.ceil(R/3)*6,1),U=D.array;if(A!==null){const w=A.array;b=A.version;for(let N=0,J=0;N<R;N+=3){const X=w[N+0],j=w[N+1],B=w[N+2];U[J++]=X,U[J++]=j,U[J++]=j,U[J++]=B,U[J++]=B,U[J++]=X}}else{b=S.version;for(let w=0,N=0;w<R;w+=3){const J=w+0,X=w+1,j=w+2;U[N++]=J,U[N++]=X,U[N++]=X,U[N++]=j,U[N++]=j,U[N++]=J}}D.version=b;const L=l.get(M);L&&e.remove(L),l.set(M,D)}function g(M){const A=l.get(M);if(A){const S=M.index;S!==null&&A.version<S.version&&y(M)}else y(M);return l.get(M)}function _(){for(const M in o){const A=o[M].deref();A!==void 0&&u(A)}}return{get:m,update:v,getWireframeAttribute:g,dispose:_}}function fb(s,e,t){let r;function o(y){r=y}let l,d;function p(y){l=y.type,d=y.bytesPerElement}function u(y,g){s.drawElements(r,g,l,y*d),t.update(g,r,1)}function m(y,g,_){_!==0&&(s.drawElementsInstanced(r,g,l,y*d,_),t.update(g,r,_))}function v(y,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,y,0,_);let A=0;for(let S=0;S<_;S++)A+=g[S];t.update(A,r,1)}this.setMode=o,this.setIndex=p,this.render=u,this.renderInstances=m,this.renderMultiDraw=v}function hb(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,d,p){switch(t.calls++,d){case s.TRIANGLES:t.triangles+=p*(l/3);break;case s.LINES:t.lines+=p*(l/2);break;case s.LINE_STRIP:t.lines+=p*(l-1);break;case s.LINE_LOOP:t.lines+=p*l;break;case s.POINTS:t.points+=p*l;break;default:jt("WebGLInfo: Unknown draw mode:",d);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function pb(s,e,t){const r=new WeakMap,o=new un;function l(d,p,u){const m=d.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,y=v!==void 0?v.length:0;let g=r.get(p);if(g===void 0||g.count!==y){let X=function(){N.dispose(),r.delete(p),p.removeEventListener("dispose",X)};var _=X;g!==void 0&&g.texture.dispose();const M=p.morphAttributes.position!==void 0,A=p.morphAttributes.normal!==void 0,S=p.morphAttributes.color!==void 0,b=p.morphAttributes.position||[],R=p.morphAttributes.normal||[],F=p.morphAttributes.color||[];let D=0;M===!0&&(D=1),A===!0&&(D=2),S===!0&&(D=3);let U=p.attributes.position.count*D,L=1;U>e.maxTextureSize&&(L=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const w=new Float32Array(U*L*4*y),N=new Dm(w,U,L,y);N.type=ji,N.needsUpdate=!0;const J=D*4;for(let j=0;j<y;j++){const B=b[j],O=R[j],V=F[j],H=U*L*4*j;for(let se=0;se<B.count;se++){const ee=se*J;M===!0&&(o.fromBufferAttribute(B,se),w[H+ee+0]=o.x,w[H+ee+1]=o.y,w[H+ee+2]=o.z,w[H+ee+3]=0),A===!0&&(o.fromBufferAttribute(O,se),w[H+ee+4]=o.x,w[H+ee+5]=o.y,w[H+ee+6]=o.z,w[H+ee+7]=0),S===!0&&(o.fromBufferAttribute(V,se),w[H+ee+8]=o.x,w[H+ee+9]=o.y,w[H+ee+10]=o.z,w[H+ee+11]=V.itemSize===4?o.w:1)}}g={count:y,texture:N,size:new zt(U,L)},r.set(p,g),p.addEventListener("dispose",X)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)u.getUniforms().setValue(s,"morphTexture",d.morphTexture,t);else{let M=0;for(let S=0;S<m.length;S++)M+=m[S];const A=p.morphTargetsRelative?1:1-M;u.getUniforms().setValue(s,"morphTargetBaseInfluence",A),u.getUniforms().setValue(s,"morphTargetInfluences",m)}u.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function mb(s,e,t,r,o){let l=new WeakMap;function d(m){const v=o.render.frame,y=m.geometry,g=e.get(m,y);if(l.get(g)!==v&&(e.update(g),l.set(g,v)),m.isInstancedMesh&&(m.hasEventListener("dispose",u)===!1&&m.addEventListener("dispose",u),l.get(m)!==v&&(t.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,v))),m.isSkinnedMesh){const _=m.skeleton;l.get(_)!==v&&(_.update(),l.set(_,v))}return g}function p(){l=new WeakMap}function u(m){const v=m.target;v.removeEventListener("dispose",u),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:d,dispose:p}}const gb={[hm]:"LINEAR_TONE_MAPPING",[pm]:"REINHARD_TONE_MAPPING",[mm]:"CINEON_TONE_MAPPING",[gm]:"ACES_FILMIC_TONE_MAPPING",[vm]:"AGX_TONE_MAPPING",[_m]:"NEUTRAL_TONE_MAPPING",[xm]:"CUSTOM_TONE_MAPPING"};function xb(s,e,t,r,o,l){const d=new Xi(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let p=null,u=null,m=null;const v=new Ki;v.setAttribute("position",new Nn([-1,3,0,-1,-1,0,3,-1,0],3)),v.setAttribute("uv",new Nn([0,2,0,0,2,0],2));const y=new ay({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new vn(v,y),_=new Vm(-1,1,1,-1,0,1);let M=null,A=null,S=!1,b,R=null,F=[],D=!1;this.setSize=function(U,L){d.setSize(U,L),p!==null&&p.setSize(U,L),u!==null&&u.setSize(U,L);for(let w=0;w<F.length;w++){const N=F[w];N.setSize&&N.setSize(U,L)}},this.setEffects=function(U){F=U,D=F.length>0&&F[0].isRenderPass===!0;const L=d.width,w=d.height;F.length>0&&p===null&&(p=new Xi(L,w,{type:qi,depthBuffer:!1,stencilBuffer:!1}),u=new Xi(L,w,{type:qi,depthBuffer:!1,stencilBuffer:!1}));const N=o===!0&&F.some(J=>J.needsDepthTexture===!0);N!==(d.depthTexture!==null)&&(N===!0&&m===null&&(m=new la(L,w),l===!0&&(m.format=Hr,m.type=oa)),d.dispose(),d.depthTexture=N?m:null,d.resolveDepthBuffer=N,d.storeMultisampledDepthBuffer=N);for(let J=0;J<F.length;J++){const X=F[J];X.setSize&&X.setSize(L,w),N&&X.needsDepthTexture===!0&&X.setDepthTexture&&X.setDepthTexture(m)}},this.begin=function(U,L){if(S||U.toneMapping===fr&&F.length===0)return!1;if(R=L,L!==null){const w=L.width,N=L.height;(d.width!==w||d.height!==N)&&this.setSize(w,N)}return D===!1&&U.setRenderTarget(d),b=U.toneMapping,U.toneMapping=fr,!0},this.hasRenderPass=function(){return D},this.end=function(U,L){U.toneMapping=b,S=!0;let w=d,N=p;for(let J=0;J<F.length;J++){const X=F[J];X.enabled!==!1&&(X.render(U,N,w,L),X.needsSwap!==!1&&(w=N,N=N===p?u:p))}if(M!==U.outputColorSpace||A!==U.toneMapping){M=U.outputColorSpace,A=U.toneMapping,y.defines={},Ft.getTransfer(M)===qt&&(y.defines.SRGB_TRANSFER="");const J=gb[A];J&&(y.defines[J]=""),y.needsUpdate=!0}y.uniforms.tDiffuse.value=w.texture,U.setRenderTarget(R),U.render(g,_),R=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){d.dispose(),p!==null&&p.dispose(),u!==null&&u.dispose(),v.dispose(),y.dispose()}}const Ym=new Gn,qm=new la(1,1),Km=new Fm(1),Zm=new Dm,Jm=new k_,Qm=new km,F0=[],O0=[],B0=new Float32Array(16),H0=new Float32Array(9),G0=new Float32Array(4);function fa(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=F0[o];if(l===void 0&&(l=new Float32Array(o),F0[o]=l),e!==0){r.toArray(l,0);for(let d=1,p=0;d!==e;++d)p+=t,s[d].toArray(l,p)}return l}function wn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Mn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function cc(s,e){let t=O0[e];t===void 0&&(t=new Int32Array(e),O0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function vb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function _b(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;s.uniform2fv(this.addr,e),Mn(t,e)}}function yb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wn(t,e))return;s.uniform3fv(this.addr,e),Mn(t,e)}}function Sb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;s.uniform4fv(this.addr,e),Mn(t,e)}}function bb(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(wn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Mn(t,e)}else{if(wn(t,r))return;G0.set(r),s.uniformMatrix2fv(this.addr,!1,G0),Mn(t,r)}}function wb(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(wn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Mn(t,e)}else{if(wn(t,r))return;H0.set(r),s.uniformMatrix3fv(this.addr,!1,H0),Mn(t,r)}}function Mb(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(wn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Mn(t,e)}else{if(wn(t,r))return;B0.set(r),s.uniformMatrix4fv(this.addr,!1,B0),Mn(t,r)}}function Eb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Tb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;s.uniform2iv(this.addr,e),Mn(t,e)}}function Ab(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wn(t,e))return;s.uniform3iv(this.addr,e),Mn(t,e)}}function Cb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;s.uniform4iv(this.addr,e),Mn(t,e)}}function Rb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Nb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;s.uniform2uiv(this.addr,e),Mn(t,e)}}function Pb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wn(t,e))return;s.uniform3uiv(this.addr,e),Mn(t,e)}}function Db(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;s.uniform4uiv(this.addr,e),Mn(t,e)}}function uc(s){return s.version===0&&(s.compareFunction=Nm,s.needsUpdate=!0),s}function Lb(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?l=uc(qm):l=Ym,t.setTexture2D(e||l,o)}function Ib(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Jm,o)}function zb(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_CUBE_SHADOW?l=uc(Km):l=Qm,t.setTextureCube(e||l,o)}function Ub(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Zm,o)}function kb(s){switch(s){case 5126:return vb;case 35664:return _b;case 35665:return yb;case 35666:return Sb;case 35674:return bb;case 35675:return wb;case 35676:return Mb;case 5124:case 35670:return Eb;case 35667:case 35671:return Tb;case 35668:case 35672:return Ab;case 35669:case 35673:return Cb;case 5125:return Rb;case 36294:return Nb;case 36295:return Pb;case 36296:return Db;case 35678:case 36198:case 36298:case 36306:case 35682:return Lb;case 35679:case 36299:case 36307:return Ib;case 35680:case 36300:case 36308:case 36293:return zb;case 36289:case 36303:case 36311:case 36292:return Ub}}function Fb(s,e){s.uniform1fv(this.addr,e)}function Ob(s,e){const t=fa(e,this.size,2);s.uniform2fv(this.addr,t)}function Bb(s,e){const t=fa(e,this.size,3);s.uniform3fv(this.addr,t)}function Hb(s,e){const t=fa(e,this.size,4);s.uniform4fv(this.addr,t)}function Gb(s,e){const t=fa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Vb(s,e){const t=fa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Wb(s,e){const t=fa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function jb(s,e){s.uniform1iv(this.addr,e)}function $b(s,e){s.uniform2iv(this.addr,e)}function Xb(s,e){s.uniform3iv(this.addr,e)}function Yb(s,e){s.uniform4iv(this.addr,e)}function qb(s,e){s.uniform1uiv(this.addr,e)}function Kb(s,e){s.uniform2uiv(this.addr,e)}function Zb(s,e){s.uniform3uiv(this.addr,e)}function Jb(s,e){s.uniform4uiv(this.addr,e)}function Qb(s,e,t){const r=this.cache,o=e.length,l=cc(t,o);wn(r,l)||(s.uniform1iv(this.addr,l),Mn(r,l));let d;this.type===s.SAMPLER_2D_SHADOW?d=uc(qm):d=Ym;for(let p=0;p!==o;++p)t.setTexture2D(e[p]||d,l[p])}function ew(s,e,t){const r=this.cache,o=e.length,l=cc(t,o);wn(r,l)||(s.uniform1iv(this.addr,l),Mn(r,l));for(let d=0;d!==o;++d)t.setTexture3D(e[d]||Jm,l[d])}function tw(s,e,t){const r=this.cache,o=e.length,l=cc(t,o);wn(r,l)||(s.uniform1iv(this.addr,l),Mn(r,l));let d;this.type===s.SAMPLER_CUBE_SHADOW?d=uc(Km):d=Qm;for(let p=0;p!==o;++p)t.setTextureCube(e[p]||d,l[p])}function nw(s,e,t){const r=this.cache,o=e.length,l=cc(t,o);wn(r,l)||(s.uniform1iv(this.addr,l),Mn(r,l));for(let d=0;d!==o;++d)t.setTexture2DArray(e[d]||Zm,l[d])}function iw(s){switch(s){case 5126:return Fb;case 35664:return Ob;case 35665:return Bb;case 35666:return Hb;case 35674:return Gb;case 35675:return Vb;case 35676:return Wb;case 5124:case 35670:return jb;case 35667:case 35671:return $b;case 35668:case 35672:return Xb;case 35669:case 35673:return Yb;case 5125:return qb;case 36294:return Kb;case 36295:return Zb;case 36296:return Jb;case 35678:case 36198:case 36298:case 36306:case 35682:return Qb;case 35679:case 36299:case 36307:return ew;case 35680:case 36300:case 36308:case 36293:return tw;case 36289:case 36303:case 36311:case 36292:return nw}}class rw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=kb(t.type)}}class sw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=iw(t.type)}}class aw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,d=o.length;l!==d;++l){const p=o[l];p.setValue(e,t[p.id],r)}}}const vd=/(\w+)(\])?(\[|\.)?/g;function V0(s,e){s.seq.push(e),s.map[e.id]=e}function ow(s,e,t){const r=s.name,o=r.length;for(vd.lastIndex=0;;){const l=vd.exec(r),d=vd.lastIndex;let p=l[1];const u=l[2]==="]",m=l[3];if(u&&(p=p|0),m===void 0||m==="["&&d+2===o){V0(t,m===void 0?new rw(p,s,e):new sw(p,s,e));break}else{let y=t.map[p];y===void 0&&(y=new aw(p),V0(t,y)),t=y}}}class Kl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const p=e.getActiveUniform(t,d),u=e.getUniformLocation(t,p.name);ow(p,u,this)}const o=[],l=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(d):l.push(d);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,d=t.length;l!==d;++l){const p=t[l],u=r[p.id];u.needsUpdate!==!1&&p.setValue(e,u.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const d=e[o];d.id in t&&r.push(d)}return r}}function W0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const lw=37297;let cw=0;function uw(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let d=o;d<l;d++){const p=d+1;r.push(`${p===e?">":" "} ${p}: ${t[d]}`)}return r.join(`
`)}const j0=new wt;function dw(s){Ft._getMatrix(j0,Ft.workingColorSpace,s);const e=`mat3( ${j0.elements.map(t=>t.toFixed(4))} )`;switch(Ft.getTransfer(s)){case nc:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return bt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function $0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const d=/ERROR: 0:(\d+)/.exec(l);if(d){const p=parseInt(d[1]);return t.toUpperCase()+`

`+l+`

`+uw(s.getShaderSource(e),p)}else return l}function fw(s,e){const t=dw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const hw={[hm]:"Linear",[pm]:"Reinhard",[mm]:"Cineon",[gm]:"ACESFilmic",[vm]:"AgX",[_m]:"Neutral",[xm]:"Custom"};function pw(s,e){const t=hw[e];return t===void 0?(bt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Gl=new he;function mw(){Ft.getLuminanceCoefficients(Gl);const s=Gl.x.toFixed(4),e=Gl.y.toFixed(4),t=Gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(eo).join(`
`)}function xw(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function vw(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),d=l.name;let p=1;l.type===s.FLOAT_MAT2&&(p=2),l.type===s.FLOAT_MAT3&&(p=3),l.type===s.FLOAT_MAT4&&(p=4),t[d]={type:l.type,location:s.getAttribLocation(e,d),locationSize:p}}return t}function eo(s){return s!==""}function X0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Y0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _w=/^[ \t]*#include +<([\w\d./]+)>/gm;function cf(s){return s.replace(_w,yw)}function yw(s,e){const t=Tt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return cf(t)}const Sw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function q0(s){return s.replace(Sw,bw)}function bw(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function K0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const ww={[Vl]:"SHADOWMAP_TYPE_PCF",[Ja]:"SHADOWMAP_TYPE_VSM"};function Mw(s){return ww[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ew={[so]:"ENVMAP_MODE_REFRACTION"};function Tw(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Ew[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Aw={[fm]:"ENVMAP_BLENDING_MULTIPLY",[f_]:"ENVMAP_BLENDING_MIX",[h_]:"ENVMAP_BLENDING_ADD"};function Cw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Aw[s.combine]||"ENVMAP_BLENDING_NONE"}function Rw(s,e,t,r){const o=s.getContext(),l=t.defines;let d=t.vertexShader,p=t.fragmentShader;const u=Mw(t),m=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",v=Tw(t),y=Cw(t),g=gw(t),_=xw(l),M=o.createProgram();let A,S,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(A=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(eo).join(`
`),A.length>0&&(A+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(eo).join(`
`),S.length>0&&(S+=`
`)):(A=[K0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eo).join(`
`),S=[K0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",t.envMap?"#define "+y:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fr?"#define TONE_MAPPING":"",t.toneMapping!==fr?Tt.tonemapping_pars_fragment:"",t.toneMapping!==fr?pw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,fw("linearToOutputTexel",t.outputColorSpace),mw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(eo).join(`
`)),d=cf(d),d=X0(d,t),d=Y0(d,t),p=cf(p),p=X0(p,t),p=Y0(p,t),d=q0(d),p=q0(p),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,A=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,S=["#define varying in",t.glslVersion===u0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===u0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const R=b+A+d,F=b+S+p,D=W0(o,o.VERTEX_SHADER,R),U=W0(o,o.FRAGMENT_SHADER,F);o.attachShader(M,D),o.attachShader(M,U),t.index0AttributeName!==void 0?o.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function L(X){if(s.debug.checkShaderErrors){const j=o.getProgramInfoLog(M)||"",B=o.getShaderInfoLog(D)||"",O=o.getShaderInfoLog(U)||"",V=j.trim(),H=B.trim(),se=O.trim();let ee=!0,Y=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,M,D,U);else{const G=$0(o,D,"vertex"),$=$0(o,U,"fragment");jt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+V+`
`+G+`
`+$)}else V!==""?bt("WebGLProgram: Program Info Log:",V):(H===""||se==="")&&(Y=!1);Y&&(X.diagnostics={runnable:ee,programLog:V,vertexShader:{log:H,prefix:A},fragmentShader:{log:se,prefix:S}})}o.deleteShader(D),o.deleteShader(U),w=new Kl(o,M),N=vw(o,M)}let w;this.getUniforms=function(){return w===void 0&&L(this),w};let N;this.getAttributes=function(){return N===void 0&&L(this),N};let J=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return J===!1&&(J=o.getProgramParameter(M,lw)),J},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cw++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=D,this.fragmentShader=U,this}let Nw=0;class Pw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Dw(e),t.set(e,r)),r}}class Dw{constructor(e){this.id=Nw++,this.code=e,this.usedTimes=0}}function Lw(s){return s===xs||s===Ql||s===ec}function Iw(s,e,t,r,o,l){const d=new Lm,p=new Pw,u=new Set,m=[],v=new Map,y=r.logarithmicDepthBuffer,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return u.add(w),w===0?"uv":`uv${w}`}function M(w,N,J,X,j,B){const O=X.fog,V=j.geometry,H=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?X.environment:null,se=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,ee=e.get(w.envMap||H,se),Y=g[w.type];let G=r.precision;w.precision!==null&&(G=r.getMaxPrecision(w.precision),G!==w.precision&&bt("WebGLProgram.getParameters:",w.precision,"not supported, using",G,"instead."));const $=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,P=$!==void 0?$.length:0;let K=0;V.morphAttributes.position!==void 0&&(K=1),V.morphAttributes.normal!==void 0&&(K=2),V.morphAttributes.color!==void 0&&(K=3);let we,k,ve,be;if(Y){const ze=Wi[Y];we=ze.vertexShader,k=ze.fragmentShader}else{we=w.vertexShader,k=w.fragmentShader;const ze=p.getVertexShaderStage(w),lt=p.getFragmentShaderStage(w);p.update(w,ze,lt),ve=ze.id,be=lt.id}const Ne=s.getRenderTarget(),_e=s.state.buffers.depth.getReversed(),Ue=j.isInstancedMesh===!0,ot=j.isBatchedMesh===!0,Be=!!w.map,Me=!!w.matcap,Ie=!!ee,Ge=Ie&&ee.isPMREMTexture===!0,gt=!!w.aoMap,vt=!!w.lightMap,Mt=!!w.bumpMap&&w.wireframe===!1,Ut=!!w.normalMap,an=!!w.displacementMap,Dt=!!w.emissiveMap,$t=!!w.metalnessMap,Bt=!!w.roughnessMap,on=w.anisotropy>0,Q=w.clearcoat>0,Zt=w.diffuseRoughness>0,Lt=w.dispersion>0,kt=w.retroreflectivity>0,de=w.iridescence>0,_t=w.sheen>0,Ye=w.transmission>0,st=on&&!!w.anisotropyMap,z=Q&&!!w.clearcoatMap,E=Q&&!!w.clearcoatNormalMap,ne=Q&&!!w.clearcoatRoughnessMap,Re=Zt&&!!w.diffuseRoughnessMap,Se=de&&!!w.iridescenceMap,ke=de&&!!w.iridescenceThicknessMap,Oe=_t&&!!w.sheenColorMap,me=_t&&!!w.sheenRoughnessMap,xe=!!w.specularMap,ge=!!w.specularColorMap,I=!!w.specularIntensityMap,re=Ye&&!!w.transmissionMap,ie=Ye&&!!w.thicknessMap,Te=!!w.gradientMap,Ae=!!w.alphaMap,Pe=w.alphaTest>0,$e=!!w.alphaHash,ft=!!w.extensions;let Ce=fr;w.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(Ce=s.toneMapping);const Ke=Ge?ee.isCompressedCubeTexture?ee.image[0].mipmaps:ee.mipmaps:null,fe={shaderID:Y,shaderType:w.type,shaderName:w.name,vertexShader:we,fragmentShader:k,defines:w.defines,customVertexShaderID:ve,customFragmentShaderID:be,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:G,batching:ot,batchingColor:ot&&j._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&j.instanceColor!==null,instancingMorph:Ue&&j.morphTexture!==null,outputColorSpace:Ne===null?s.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:Ft.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:Be,matcap:Me,envMap:Ie,envMapMode:Ie&&ee.mapping,envMapPMREM:Ge,envMapMaxLod:Ge?Ke.length-1:null,envMapSize:Ge?Ke[0].width:null,aoMap:gt,lightMap:vt,bumpMap:Mt,normalMap:Ut,displacementMap:an,emissiveMap:Dt,normalMapObjectSpace:Ut&&w.normalMapType===g_,normalMapTangentSpace:Ut&&w.normalMapType===af,packedNormalMap:Ut&&w.normalMapType===af&&Lw(w.normalMap.format),metalnessMap:$t,roughnessMap:Bt,anisotropy:on,anisotropyMap:st,clearcoat:Q,clearcoatMap:z,clearcoatNormalMap:E,clearcoatRoughnessMap:ne,diffuseRoughness:Zt,diffuseRoughnessMap:Re,dispersion:Lt,retroreflection:kt,iridescence:de,iridescenceMap:Se,iridescenceThicknessMap:ke,sheen:_t,sheenColorMap:Oe,sheenRoughnessMap:me,specularMap:xe,specularColorMap:ge,specularIntensityMap:I,transmission:Ye,transmissionMap:re,thicknessMap:ie,gradientMap:Te,opaque:w.transparent===!1&&w.blending===to&&w.alphaToCoverage===!1,alphaMap:Ae,alphaTest:Pe,alphaHash:$e,combine:w.combine,mapUv:Be&&_(w.map.channel),aoMapUv:gt&&_(w.aoMap.channel),lightMapUv:vt&&_(w.lightMap.channel),bumpMapUv:Mt&&_(w.bumpMap.channel),normalMapUv:Ut&&_(w.normalMap.channel),displacementMapUv:an&&_(w.displacementMap.channel),emissiveMapUv:Dt&&_(w.emissiveMap.channel),metalnessMapUv:$t&&_(w.metalnessMap.channel),roughnessMapUv:Bt&&_(w.roughnessMap.channel),anisotropyMapUv:st&&_(w.anisotropyMap.channel),clearcoatMapUv:z&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:E&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&_(w.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Re&&_(w.diffuseRoughnessMap.channel),iridescenceMapUv:Se&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:me&&_(w.sheenRoughnessMap.channel),specularMapUv:xe&&_(w.specularMap.channel),specularColorMapUv:ge&&_(w.specularColorMap.channel),specularIntensityMapUv:I&&_(w.specularIntensityMap.channel),transmissionMapUv:re&&_(w.transmissionMap.channel),thicknessMapUv:ie&&_(w.thicknessMap.channel),alphaMapUv:Ae&&_(w.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ut||on),vertexNormals:!!V.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!V.attributes.uv&&(Be||Ae),fog:!!O,useFog:w.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||V.attributes.normal===void 0&&Ut===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:_e,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:K,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:B.filter(ze=>ze.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&J.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ce,decodeVideoTexture:Be&&w.map.isVideoTexture===!0&&Ft.getTransfer(w.map.colorSpace)===qt,decodeVideoTextureEmissive:Dt&&w.emissiveMap.isVideoTexture===!0&&Ft.getTransfer(w.emissiveMap.colorSpace)===qt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Di,flipSided:w.side===In,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ft&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&w.extensions.multiDraw===!0||ot)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return fe.vertexUv1s=u.has(1),fe.vertexUv2s=u.has(2),fe.vertexUv3s=u.has(3),u.clear(),fe}function A(w){const N=[];if(w.shaderID?N.push(w.shaderID):(N.push(w.customVertexShaderID),N.push(w.customFragmentShaderID)),w.defines!==void 0)for(const J in w.defines)N.push(J),N.push(w.defines[J]);return w.isRawShaderMaterial===!1&&(S(N,w),b(N,w),N.push(s.outputColorSpace)),N.push(w.customProgramCacheKey),N.join()}function S(w,N){w.push(N.precision),w.push(N.outputColorSpace),w.push(N.envMapMode),w.push(N.envMapPMREM),w.push(N.envMapMaxLod),w.push(N.envMapSize),w.push(N.mapUv),w.push(N.alphaMapUv),w.push(N.lightMapUv),w.push(N.aoMapUv),w.push(N.bumpMapUv),w.push(N.normalMapUv),w.push(N.displacementMapUv),w.push(N.emissiveMapUv),w.push(N.metalnessMapUv),w.push(N.roughnessMapUv),w.push(N.anisotropyMapUv),w.push(N.clearcoatMapUv),w.push(N.clearcoatNormalMapUv),w.push(N.clearcoatRoughnessMapUv),w.push(N.diffuseRoughnessMapUv),w.push(N.iridescenceMapUv),w.push(N.iridescenceThicknessMapUv),w.push(N.sheenColorMapUv),w.push(N.sheenRoughnessMapUv),w.push(N.specularMapUv),w.push(N.specularColorMapUv),w.push(N.specularIntensityMapUv),w.push(N.transmissionMapUv),w.push(N.thicknessMapUv),w.push(N.combine),w.push(N.fogExp2),w.push(N.sizeAttenuation),w.push(N.morphTargetsCount),w.push(N.numSunLights),w.push(N.numDirLights),w.push(N.numPointLights),w.push(N.numSpotLights),w.push(N.numSpotLightMaps),w.push(N.numHemiLights),w.push(N.numRectAreaLights),w.push(N.numSunLightShadows),w.push(N.numDirLightShadows),w.push(N.numPointLightShadows),w.push(N.numSpotLightShadows),w.push(N.numSpotLightShadowsWithMaps),w.push(N.numLightProbes),w.push(N.numLightProbeGrids),w.push(N.shadowMapType),w.push(N.toneMapping),w.push(N.numClippingPlanes),w.push(N.numClipIntersection),w.push(N.depthPacking)}function b(w,N){d.disableAll(),N.instancing&&d.enable(0),N.instancingColor&&d.enable(1),N.instancingMorph&&d.enable(2),N.matcap&&d.enable(3),N.envMap&&d.enable(4),N.normalMapObjectSpace&&d.enable(5),N.normalMapTangentSpace&&d.enable(6),N.clearcoat&&d.enable(7),N.iridescence&&d.enable(8),N.alphaTest&&d.enable(9),N.vertexColors&&d.enable(10),N.vertexAlphas&&d.enable(11),N.vertexUv1s&&d.enable(12),N.vertexUv2s&&d.enable(13),N.vertexUv3s&&d.enable(14),N.vertexTangents&&d.enable(15),N.anisotropy&&d.enable(16),N.alphaHash&&d.enable(17),N.batching&&d.enable(18),N.dispersion&&d.enable(19),N.retroreflection&&d.enable(24),N.diffuseRoughness&&d.enable(25),N.batchingColor&&d.enable(20),N.gradientMap&&d.enable(21),N.packedNormalMap&&d.enable(22),N.vertexNormals&&d.enable(23),w.push(d.mask),d.disableAll(),N.fog&&d.enable(0),N.useFog&&d.enable(1),N.flatShading&&d.enable(2),N.logarithmicDepthBuffer&&d.enable(3),N.reversedDepthBuffer&&d.enable(4),N.skinning&&d.enable(5),N.morphTargets&&d.enable(6),N.morphNormals&&d.enable(7),N.morphColors&&d.enable(8),N.premultipliedAlpha&&d.enable(9),N.shadowMapEnabled&&d.enable(10),N.doubleSided&&d.enable(11),N.flipSided&&d.enable(12),N.useDepthPacking&&d.enable(13),N.dithering&&d.enable(14),N.transmission&&d.enable(15),N.sheen&&d.enable(16),N.opaque&&d.enable(17),N.pointsUvs&&d.enable(18),N.decodeVideoTexture&&d.enable(19),N.decodeVideoTextureEmissive&&d.enable(20),N.alphaToCoverage&&d.enable(21),N.numLightProbeGrids>0&&d.enable(22),N.hasPositionAttribute&&d.enable(23),w.push(d.mask)}function R(w){const N=g[w.type];let J;if(N){const X=Wi[N];J=iy.clone(X.uniforms)}else J=w.uniforms;return J}function F(w,N){let J=v.get(N);return J!==void 0?++J.usedTimes:(J=new Rw(s,N,w,o),m.push(J),v.set(N,J)),J}function D(w){if(--w.usedTimes===0){const N=m.indexOf(w);m[N]=m[m.length-1],m.pop(),v.delete(w.cacheKey),w.destroy()}}function U(w){p.remove(w)}function L(){p.dispose()}return{getParameters:M,getProgramCacheKey:A,getUniforms:R,acquireProgram:F,releaseProgram:D,releaseShaderCache:U,programs:m,dispose:L}}function zw(){let s=new WeakMap;function e(d){return s.has(d)}function t(d){let p=s.get(d);return p===void 0&&(p={},s.set(d,p)),p}function r(d){s.delete(d)}function o(d,p,u){s.get(d)[p]=u}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function Uw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Z0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function J0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function d(g){let _=0;return g.isInstancedMesh&&(_+=2),g.isSkinnedMesh&&(_+=1),_}function p(g,_,M,A,S,b){let R=s[e];return R===void 0?(R={id:g.id,object:g,geometry:_,material:M,materialVariant:d(g),groupOrder:A,renderOrder:g.renderOrder,z:S,group:b},s[e]=R):(R.id=g.id,R.object=g,R.geometry=_,R.material=M,R.materialVariant=d(g),R.groupOrder=A,R.renderOrder=g.renderOrder,R.z=S,R.group=b),e++,R}function u(g,_,M,A,S,b,R){R.reversedDepth===!0&&(S=-S);const F=p(g,_,M,A,S,b);M.transmission>0?r.push(F):M.transparent===!0?o.push(F):t.push(F)}function m(g,_,M,A,S,b){const R=p(g,_,M,A,S,b);M.transmission>0?r.unshift(R):M.transparent===!0?o.unshift(R):t.unshift(R)}function v(g,_){t.length>1&&t.sort(g||Uw),r.length>1&&r.sort(_||Z0),o.length>1&&o.sort(_||Z0)}function y(){for(let g=e,_=s.length;g<_;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:u,unshift:m,finish:y,sort:v}}function kw(){let s=new WeakMap;function e(r,o){const l=s.get(r);let d;return l===void 0?(d=new J0,s.set(r,[d])):o>=l.length?(d=new J0,l.push(d)):d=l[o],d}function t(){s=new WeakMap}return{get:e,dispose:t}}function Fw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new he,color:new Nt};break;case"SpotLight":t={position:new he,direction:new he,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new he,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new he,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":t={color:new Nt,position:new he,halfWidth:new he,halfHeight:new he};break}return s[e.id]=t,t}}}function Ow(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Bw=0;function Hw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Gw(s){const e=new Fw,t=Ow(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new he);const o=new he,l=new dn,d=new dn;function p(m){let v=0,y=0,g=0;for(let B=0;B<9;B++)r.probe[B].set(0,0,0);let _=0,M=0,A=0,S=0,b=0,R=0,F=0,D=0,U=0,L=0,w=0,N=0,J=0,X=0;m.sort(Hw);for(let B=0,O=m.length;B<O;B++){const V=m[B],H=V.color,se=V.intensity,ee=V.distance;let Y=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===xs?Y=V.shadow.map.texture:Y=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)v+=H.r*se,y+=H.g*se,g+=H.b*se;else if(V.isLightProbe){for(let G=0;G<9;G++)r.probe[G].addScaledVector(V.sh.coefficients[G],se);X++}else if(V.isSunLight){const G=e.get(V);if(G.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const $=V.shadow,P=t.get(V);P.shadowIntensity=$.intensity,P.shadowBias=$.bias,P.shadowNormalBias=$.normalBias,P.shadowRadius=$.radius,P.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),r.sunShadow[M]=P,r.sunShadowMap[M]=Y;const K=$.getViewportCount();for(let we=0;we<K;we++)r.sunShadowMatrix[A+we]=$.getMatrix(we),r.sunShadowCascade[A+we]=$._cascadeData[we];A+=K,M++}r.sun[_]=G,_++}else if(V.isDirectionalLight){const G=e.get(V);if(G.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const $=V.shadow,P=t.get(V);P.shadowIntensity=$.intensity,P.shadowBias=$.bias,P.shadowNormalBias=$.normalBias,P.shadowRadius=$.radius,P.shadowMapSize=$.mapSize,r.directionalShadow[S]=P,r.directionalShadowMap[S]=Y,r.directionalShadowMatrix[S]=V.shadow.matrix,U++}r.directional[S]=G,S++}else if(V.isSpotLight){const G=e.get(V);G.position.setFromMatrixPosition(V.matrixWorld),G.color.copy(H).multiplyScalar(se),G.distance=ee,G.coneCos=Math.cos(V.angle),G.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),G.decay=V.decay,r.spot[R]=G;const $=V.shadow;if(V.map&&(r.spotLightMap[N]=V.map,N++,$.updateMatrices(V),V.castShadow&&J++),r.spotLightMatrix[R]=$.matrix,V.castShadow){const P=t.get(V);P.shadowIntensity=$.intensity,P.shadowBias=$.bias,P.shadowNormalBias=$.normalBias,P.shadowRadius=$.radius,P.shadowMapSize=$.mapSize,r.spotShadow[R]=P,r.spotShadowMap[R]=Y,w++}R++}else if(V.isRectAreaLight){const G=e.get(V);G.color.copy(H).multiplyScalar(se),G.halfWidth.set(V.width*.5,0,0),G.halfHeight.set(0,V.height*.5,0),r.rectArea[F]=G,F++}else if(V.isPointLight){const G=e.get(V);if(G.color.copy(V.color).multiplyScalar(V.intensity),G.distance=V.distance,G.decay=V.decay,V.castShadow){const $=V.shadow,P=t.get(V);P.shadowIntensity=$.intensity,P.shadowBias=$.bias,P.shadowNormalBias=$.normalBias,P.shadowRadius=$.radius,P.shadowMapSize=$.mapSize,P.shadowCameraNear=$.camera.near,P.shadowCameraFar=$.camera.far,r.pointShadow[b]=P,r.pointShadowMap[b]=Y,r.pointShadowMatrix[b]=V.shadow.matrix,L++}r.point[b]=G,b++}else if(V.isHemisphereLight){const G=e.get(V);G.skyColor.copy(V.color).multiplyScalar(se),G.groundColor.copy(V.groundColor).multiplyScalar(se),r.hemi[D]=G,D++}}F>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=qe.LTC_FLOAT_1,r.rectAreaLTC2=qe.LTC_FLOAT_2):(r.rectAreaLTC1=qe.LTC_HALF_1,r.rectAreaLTC2=qe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=y,r.ambient[2]=g;const j=r.hash;(j.sunLength!==_||j.directionalLength!==S||j.pointLength!==b||j.spotLength!==R||j.rectAreaLength!==F||j.hemiLength!==D||j.numSunShadows!==M||j.numDirectionalShadows!==U||j.numPointShadows!==L||j.numSpotShadows!==w||j.numSpotMaps!==N||j.numLightProbes!==X)&&(r.sun.length=_,r.directional.length=S,r.spot.length=R,r.rectArea.length=F,r.point.length=b,r.hemi.length=D,r.sunShadow.length=M,r.sunShadowMap.length=M,r.sunShadowMatrix.length=A,r.sunShadowCascade.length=A,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.directionalShadowMatrix.length=U,r.pointShadow.length=L,r.pointShadowMap.length=L,r.pointShadowMatrix.length=L,r.spotShadow.length=w,r.spotShadowMap.length=w,r.spotLightMatrix.length=w+N-J,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=J,r.numLightProbes=X,j.sunLength=_,j.directionalLength=S,j.pointLength=b,j.spotLength=R,j.rectAreaLength=F,j.hemiLength=D,j.numSunShadows=M,j.numDirectionalShadows=U,j.numPointShadows=L,j.numSpotShadows=w,j.numSpotMaps=N,j.numLightProbes=X,r.version=Bw++)}function u(m,v){let y=0,g=0,_=0,M=0,A=0,S=0;const b=v.matrixWorldInverse;for(let R=0,F=m.length;R<F;R++){const D=m[R];if(D.isSunLight){const U=r.sun[y];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(b),y++}else if(D.isDirectionalLight){const U=r.directional[g];U.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(b),g++}else if(D.isSpotLight){const U=r.spot[M];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(b),U.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(b),M++}else if(D.isRectAreaLight){const U=r.rectArea[A];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(b),d.identity(),l.copy(D.matrixWorld),l.premultiply(b),d.extractRotation(l),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),A++}else if(D.isPointLight){const U=r.point[_];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(b),_++}else if(D.isHemisphereLight){const U=r.hemi[S];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(b),S++}}}return{setup:p,setupView:u,state:r}}function Q0(s){const e=new Gw(s),t=[],r=[],o=[];function l(y){v.camera=y,t.length=0,r.length=0,o.length=0}function d(y){y.isLightProbeGrid?o.push(y):t.push(y)}function p(y){r.push(y)}function u(){e.setup(t),o.sort((y,g)=>y.priority-g.priority||y.id-g.id)}function m(y){e.setupView(t,y)}const v={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:v,setupLights:u,setupLightsView:m,pushLight:d,pushShadow:p}}function Vw(s){let e=new WeakMap;function t(o,l=0){const d=e.get(o);let p;return d===void 0?(p=new Q0(s),e.set(o,[p])):l>=d.length?(p=new Q0(s),d.push(p)):p=d[l],p}function r(){e=new WeakMap}return{get:t,dispose:r}}const Ww=`void main() {
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
}`,$w=[new he(1,0,0),new he(-1,0,0),new he(0,1,0),new he(0,-1,0),new he(0,0,1),new he(0,0,-1)],Xw=[new he(0,-1,0),new he(0,-1,0),new he(0,0,1),new he(0,0,-1),new he(0,-1,0),new he(0,-1,0)],em=new dn,Za=new he,_d=new he;function Yw(s,e,t){let r=new lo;const o=new zt,l=new zt,d=new un,p=new oy,u=new ly,m={},v=t.maxTextureSize,y={[gs]:In,[In]:gs,[Di]:Di},g=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:Ww,fragmentShader:jw}),_=g.clone();_.defines.HORIZONTAL_PASS=1;const M=new Ki;M.setAttribute("position",new ps(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new vn(M,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vl;let b=this.type;this.render=function(L,w,N){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||L.length===0)return;this.type===Xv&&(bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vl);const J=s.getRenderTarget(),X=s.getActiveCubeFace(),j=s.getActiveMipmapLevel(),B=s.state;B.setBlending(ia),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const O=b!==this.type;O&&w.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(H=>H.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,H=L.length;V<H;V++){const se=L[V],ee=se.shadow;if(ee===void 0){bt("WebGLShadowMap:",se,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;o.copy(ee.mapSize);const Y=ee.getFrameExtents();o.multiply(Y),l.copy(ee.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/Y.x),o.x=l.x*Y.x,ee.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/Y.y),o.y=l.y*Y.y,ee.mapSize.y=l.y));const G=s.state.buffers.depth.getReversed();if(ee.camera._reversedDepth=G,ee.map===null||O===!0){if(ee.map!==null&&(ee.map.depthTexture!==null&&(ee.map.depthTexture.dispose(),ee.map.depthTexture=null),ee.map.dispose()),this.type===Ja){if(se.isPointLight){bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ee.map=new Xi(o.x,o.y,{format:xs,type:qi,minFilter:ei,magFilter:ei,generateMipmaps:!1}),ee.map.texture.name=se.name+".shadowMap",ee.map.depthTexture=new la(o.x,o.y,ji),ee.map.depthTexture.name=se.name+".shadowMapDepth",ee.map.depthTexture.format=Wr,ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=Ln,ee.map.depthTexture.magFilter=Ln}else se.isPointLight?(ee.map=new Rf(o.x),ee.map.depthTexture=new Fm(o.x,Yi)):(ee.map=new Xi(o.x,o.y),ee.map.depthTexture=new la(o.x,o.y,Yi)),ee.map.depthTexture.name=se.name+".shadowMap",ee.map.depthTexture.format=Wr,this.type===Vl?(ee.map.depthTexture.compareFunction=G?Rm:Cm,ee.map.depthTexture.minFilter=ei,ee.map.depthTexture.magFilter=ei):(ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=Ln,ee.map.depthTexture.magFilter=Ln);ee.camera.updateProjectionMatrix()}ee.map.isWebGLCubeRenderTarget!==!0&&(ee.map.width!==o.x||ee.map.height!==o.y)&&ee.map.setSize(o.x,o.y);const $=ee.map.isWebGLCubeRenderTarget?6:ee.getViewportCount();se.isPointLight!==!0&&ee.updateMatrices(se,N);const P=(ee.camera.layers.mask&4294967294)!==0?ee.camera.layers:N.layers;for(let K=0;K<$;K++){const we=ee.getCamera(K);if(se.isPointLight){const k=ee.camera,ve=ee.matrix,be=se.distance||k.far;be!==k.far&&(k.far=be,k.updateProjectionMatrix()),Za.setFromMatrixPosition(se.matrixWorld),k.position.copy(Za),_d.copy(k.position),_d.add($w[K]),k.up.copy(Xw[K]),k.lookAt(_d),k.updateMatrixWorld(),ve.makeTranslation(-Za.x,-Za.y,-Za.z),em.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ee._frustum.setFromProjectionMatrix(em,k.coordinateSystem,k.reversedDepth)}if(ee.map.isWebGLCubeRenderTarget)s.setRenderTarget(ee.map,K),s.clear();else{K===0&&(s.setRenderTarget(ee.map),s.clear());const k=ee.getViewport(K);d.set(l.x*k.x,l.y*k.y,l.x*k.z,l.y*k.w),B.viewport(d)}r=ee.getFrustum(K),D(w,N,we,se,P,this.type)}ee.isPointLightShadow!==!0&&this.type===Ja&&R(ee,N),ee.needsUpdate=!1}b=this.type,S.needsUpdate=!1,s.setRenderTarget(J,X,j)};function R(L,w){const N=e.update(A);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,_.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,_.needsUpdate=!0),L.mapPass===null?L.mapPass=new Xi(o.x,o.y,{format:xs,type:qi}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value.set(L.map.width,L.map.height),g.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(w,null,N,g,A,null),_.uniforms.shadow_pass.value=L.mapPass.texture,_.uniforms.resolution.value.set(L.map.width,L.map.height),_.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(w,null,N,_,A,null)}function F(L,w,N,J){let X=null;const j=N.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(j!==void 0)X=j;else if(X=N.isPointLight===!0?u:p,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const B=X.uuid,O=w.uuid;let V=m[B];V===void 0&&(V={},m[B]=V);let H=V[O];H===void 0&&(H=X.clone(),V[O]=H,w.addEventListener("dispose",U)),X=H}if(X.visible=w.visible,X.wireframe=w.wireframe,J===Ja?X.side=w.shadowSide!==null?w.shadowSide:w.side:X.side=w.shadowSide!==null?w.shadowSide:y[w.side],X.alphaMap=w.alphaMap,X.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,X.map=w.map,X.clipShadows=w.clipShadows,X.clippingPlanes=w.clippingPlanes,X.clipIntersection=w.clipIntersection,X.displacementMap=w.displacementMap,X.displacementScale=w.displacementScale,X.displacementBias=w.displacementBias,X.wireframeLinewidth=w.wireframeLinewidth,X.linewidth=w.linewidth,N.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const B=s.properties.get(X);B.light=N}return X}function D(L,w,N,J,X,j){if(L.visible===!1)return;if(L.layers.test(X)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&j===Ja)&&(!L.frustumCulled||L.intersectsFrustum(r))){L.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,L.matrixWorld);const V=e.update(L),H=L.material;if(Array.isArray(H)){const se=V.groups;for(let ee=0,Y=se.length;ee<Y;ee++){const G=se[ee],$=H[G.materialIndex];if($&&$.visible){const P=F(L,$,J,j);L.onBeforeShadow(s,L,w,N,V,P,G),s.renderBufferDirect(N,null,V,P,L,G),L.onAfterShadow(s,L,w,N,V,P,G)}}}else if(H.visible){const se=F(L,H,J,j);L.onBeforeShadow(s,L,w,N,V,se,null),s.renderBufferDirect(N,null,V,se,L,null),L.onAfterShadow(s,L,w,N,V,se,null)}}const O=L.children;for(let V=0,H=O.length;V<H;V++)D(O[V],w,N,J,X,j)}function U(L){L.target.removeEventListener("dispose",U);for(const N in m){const J=m[N],X=L.target.uuid;X in J&&(J[X].dispose(),delete J[X])}}}function qw(s,e){function t(){let I=!1;const re=new un;let ie=null;const Te=new un(0,0,0,0);return{setMask:function(Ae){ie!==Ae&&!I&&(s.colorMask(Ae,Ae,Ae,Ae),ie=Ae)},setLocked:function(Ae){I=Ae},setClear:function(Ae,Pe,$e,ft,Ce){Ce===!0&&(Ae*=ft,Pe*=ft,$e*=ft),re.set(Ae,Pe,$e,ft),Te.equals(re)===!1&&(s.clearColor(Ae,Pe,$e,ft),Te.copy(re))},reset:function(){I=!1,ie=null,Te.set(-1,0,0,0)}}}function r(){let I=!1,re=!1,ie=null,Te=null,Ae=null;return{setReversed:function(Pe){if(re!==Pe){const $e=e.get("EXT_clip_control");Pe?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),re=Pe;const ft=Ae;Ae=null,this.setClear(ft)}},getReversed:function(){return re},setTest:function(Pe){Pe?_e(s.DEPTH_TEST):Ue(s.DEPTH_TEST)},setMask:function(Pe){ie!==Pe&&!I&&(s.depthMask(Pe),ie=Pe)},setFunc:function(Pe){if(re&&(Pe=A_[Pe]),Te!==Pe){switch(Pe){case Sd:s.depthFunc(s.NEVER);break;case bd:s.depthFunc(s.ALWAYS);break;case wd:s.depthFunc(s.LESS);break;case ro:s.depthFunc(s.LEQUAL);break;case Md:s.depthFunc(s.EQUAL);break;case Ed:s.depthFunc(s.GEQUAL);break;case Td:s.depthFunc(s.GREATER);break;case Ad:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Te=Pe}},setLocked:function(Pe){I=Pe},setClear:function(Pe){Ae!==Pe&&(Ae=Pe,re&&(Pe=1-Pe),s.clearDepth(Pe))},reset:function(){I=!1,ie=null,Te=null,Ae=null,re=!1}}}function o(){let I=!1,re=null,ie=null,Te=null,Ae=null,Pe=null,$e=null,ft=null,Ce=null;return{setTest:function(Ke){I||(Ke?_e(s.STENCIL_TEST):Ue(s.STENCIL_TEST))},setMask:function(Ke){re!==Ke&&!I&&(s.stencilMask(Ke),re=Ke)},setFunc:function(Ke,fe,ze){(ie!==Ke||Te!==fe||Ae!==ze)&&(s.stencilFunc(Ke,fe,ze),ie=Ke,Te=fe,Ae=ze)},setOp:function(Ke,fe,ze){(Pe!==Ke||$e!==fe||ft!==ze)&&(s.stencilOp(Ke,fe,ze),Pe=Ke,$e=fe,ft=ze)},setLocked:function(Ke){I=Ke},setClear:function(Ke){Ce!==Ke&&(s.clearStencil(Ke),Ce=Ke)},reset:function(){I=!1,re=null,ie=null,Te=null,Ae=null,Pe=null,$e=null,ft=null,Ce=null}}}const l=new t,d=new r,p=new o;let u={};const m=new WeakMap;let v={},y={},g={},_=new WeakMap,M=[],A=null,S=!1,b=null,R=null,F=null,D=null,U=null,L=null,w=null,N=new Nt(0,0,0),J=0,X=!1,j=null,B=null,O=null,V=null,H=null;const se=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,Y=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(G)[1]),ee=Y>=1):G.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),ee=Y>=2);let $=null,P={};const K=s.getParameter(s.SCISSOR_BOX),we=s.getParameter(s.VIEWPORT),k=new un().fromArray(K),ve=new un().fromArray(we);function be(I,re,ie,Te){const Ae=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(I,Pe),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<ie;$e++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(re,0,s.RGBA,1,1,Te,0,s.RGBA,s.UNSIGNED_BYTE,Ae):s.texImage2D(re+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ae);return Pe}const Ne={};Ne[s.TEXTURE_2D]=be(s.TEXTURE_2D,s.TEXTURE_2D,1),Ne[s.TEXTURE_CUBE_MAP]=be(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ne[s.TEXTURE_2D_ARRAY]=be(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ne[s.TEXTURE_3D]=be(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),d.setClear(1),p.setClear(0),_e(s.DEPTH_TEST),d.setFunc(ro),Mt(!1),Ut(o0),_e(s.CULL_FACE),gt(ia);function _e(I){v[I]!==!0&&(s.enable(I),v[I]=!0)}function Ue(I){v[I]!==!1&&(s.disable(I),v[I]=!1)}function ot(I,re){return g[I]!==re?(s.bindFramebuffer(I,re),g[I]=re,I===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=re),I===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=re),!0):!1}function Be(I,re){let ie=M,Te=!1;if(I){ie=_.get(re),ie===void 0&&(ie=[],_.set(re,ie));const Ae=I.textures;if(ie.length!==Ae.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let Pe=0,$e=Ae.length;Pe<$e;Pe++)ie[Pe]=s.COLOR_ATTACHMENT0+Pe;ie.length=Ae.length,Te=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,Te=!0);Te&&s.drawBuffers(ie)}function Me(I){return A!==I?(s.useProgram(I),A=I,!0):!1}const Ie={[ta]:s.FUNC_ADD,[qv]:s.FUNC_SUBTRACT,[Kv]:s.FUNC_REVERSE_SUBTRACT};Ie[Zv]=s.MIN,Ie[Jv]=s.MAX;const Ge={[Qv]:s.ZERO,[e_]:s.ONE,[t_]:s.SRC_COLOR,[um]:s.SRC_ALPHA,[o_]:s.SRC_ALPHA_SATURATE,[s_]:s.DST_COLOR,[i_]:s.DST_ALPHA,[n_]:s.ONE_MINUS_SRC_COLOR,[dm]:s.ONE_MINUS_SRC_ALPHA,[a_]:s.ONE_MINUS_DST_COLOR,[r_]:s.ONE_MINUS_DST_ALPHA,[l_]:s.CONSTANT_COLOR,[c_]:s.ONE_MINUS_CONSTANT_COLOR,[u_]:s.CONSTANT_ALPHA,[d_]:s.ONE_MINUS_CONSTANT_ALPHA};function gt(I,re,ie,Te,Ae,Pe,$e,ft,Ce,Ke){if(I===ia){S===!0&&(Ue(s.BLEND),S=!1);return}if(S===!1&&(_e(s.BLEND),S=!0),I!==Yv){if(I!==b||Ke!==X){if((R!==ta||U!==ta)&&(s.blendEquation(s.FUNC_ADD),R=ta,U=ta),Ke)switch(I){case to:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hs:s.blendFunc(s.ONE,s.ONE);break;case l0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case c0:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:jt("WebGLState: Invalid blending: ",I);break}else switch(I){case to:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case l0:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case c0:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",I);break}F=null,D=null,L=null,w=null,N.set(0,0,0),J=0,b=I,X=Ke}return}Ae=Ae||re,Pe=Pe||ie,$e=$e||Te,(re!==R||Ae!==U)&&(s.blendEquationSeparate(Ie[re],Ie[Ae]),R=re,U=Ae),(ie!==F||Te!==D||Pe!==L||$e!==w)&&(s.blendFuncSeparate(Ge[ie],Ge[Te],Ge[Pe],Ge[$e]),F=ie,D=Te,L=Pe,w=$e),(ft.equals(N)===!1||Ce!==J)&&(s.blendColor(ft.r,ft.g,ft.b,Ce),N.copy(ft),J=Ce),b=I,X=!1}function vt(I,re){I.side===Di?Ue(s.CULL_FACE):_e(s.CULL_FACE);let ie=I.side===In;re&&(ie=!ie),Mt(ie),I.blending===to&&I.transparent===!1?gt(ia):gt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),d.setFunc(I.depthFunc),d.setTest(I.depthTest),d.setMask(I.depthWrite),l.setMask(I.colorWrite);const Te=I.stencilWrite;p.setTest(Te),Te&&(p.setMask(I.stencilWriteMask),p.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),p.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Dt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):Ue(s.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(I){j!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),j=I)}function Ut(I){I!==jv?(_e(s.CULL_FACE),I!==B&&(I===o0?s.cullFace(s.BACK):I===$v?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ue(s.CULL_FACE),B=I}function an(I){I!==O&&(ee&&s.lineWidth(I),O=I)}function Dt(I,re,ie){I?(_e(s.POLYGON_OFFSET_FILL),(V!==re||H!==ie)&&(V=re,H=ie,d.getReversed()&&(re=-re,ie=-ie),s.polygonOffset(re,ie))):Ue(s.POLYGON_OFFSET_FILL)}function $t(I){I?_e(s.SCISSOR_TEST):Ue(s.SCISSOR_TEST)}function Bt(I){I===void 0&&(I=s.TEXTURE0+se-1),$!==I&&(s.activeTexture(I),$=I)}function on(I,re,ie){ie===void 0&&($===null?ie=s.TEXTURE0+se-1:ie=$);let Te=P[ie];Te===void 0&&(Te={type:void 0,texture:void 0},P[ie]=Te),(Te.type!==I||Te.texture!==re)&&($!==ie&&(s.activeTexture(ie),$=ie),s.bindTexture(I,re||Ne[I]),Te.type=I,Te.texture=re)}function Q(){const I=P[$];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Zt(){try{s.compressedTexImage2D(...arguments)}catch(I){jt("WebGLState:",I)}}function Lt(){try{s.compressedTexImage3D(...arguments)}catch(I){jt("WebGLState:",I)}}function kt(){try{s.texSubImage2D(...arguments)}catch(I){jt("WebGLState:",I)}}function de(){try{s.texSubImage3D(...arguments)}catch(I){jt("WebGLState:",I)}}function _t(){try{s.compressedTexSubImage2D(...arguments)}catch(I){jt("WebGLState:",I)}}function Ye(){try{s.compressedTexSubImage3D(...arguments)}catch(I){jt("WebGLState:",I)}}function st(){try{s.texStorage2D(...arguments)}catch(I){jt("WebGLState:",I)}}function z(){try{s.texStorage3D(...arguments)}catch(I){jt("WebGLState:",I)}}function E(){try{s.texImage2D(...arguments)}catch(I){jt("WebGLState:",I)}}function ne(){try{s.texImage3D(...arguments)}catch(I){jt("WebGLState:",I)}}function Re(I){return y[I]!==void 0?y[I]:s.getParameter(I)}function Se(I,re){y[I]!==re&&(s.pixelStorei(I,re),y[I]=re)}function ke(I){k.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),k.copy(I))}function Oe(I){ve.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),ve.copy(I))}function me(I,re){let ie=m.get(re);ie===void 0&&(ie=new WeakMap,m.set(re,ie));let Te=ie.get(I);Te===void 0&&(Te=s.getUniformBlockIndex(re,I.name),s.uniformBlockBinding(re,Te,Te),ie.set(I,Te))}function xe(I,re,ie){const Ae=m.get(re).get(I);u[Ae]!==ie&&(s.bindBufferBase(s.UNIFORM_BUFFER,Ae,ie),u[Ae]=ie)}function ge(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},y={},$=null,P={},g={},u={},_=new WeakMap,M=[],A=null,S=!1,b=null,R=null,F=null,D=null,U=null,L=null,w=null,N=new Nt(0,0,0),J=0,X=!1,j=null,B=null,O=null,V=null,H=null,k.set(0,0,s.canvas.width,s.canvas.height),ve.set(0,0,s.canvas.width,s.canvas.height),l.reset(),d.reset(),p.reset()}return{buffers:{color:l,depth:d,stencil:p},enable:_e,disable:Ue,bindFramebuffer:ot,drawBuffers:Be,useProgram:Me,setBlending:gt,setMaterial:vt,setFlipSided:Mt,setCullFace:Ut,setLineWidth:an,setPolygonOffset:Dt,setScissorTest:$t,activeTexture:Bt,bindTexture:on,unbindTexture:Q,compressedTexImage2D:Zt,compressedTexImage3D:Lt,texImage2D:E,texImage3D:ne,pixelStorei:Se,getParameter:Re,updateUBOMapping:me,uniformBlockBinding:xe,texStorage2D:st,texStorage3D:z,texSubImage2D:kt,texSubImage3D:de,compressedTexSubImage2D:_t,compressedTexSubImage3D:Ye,scissor:ke,viewport:Oe,reset:ge}}function Kw(s,e,t,r,o,l,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new zt,v=new WeakMap,y=new Set;let g;const _=new WeakMap,M=new Set,A=new FinalizationRegistry(z=>M.delete(z));let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(z,E){return S?new OffscreenCanvas(z,E):ic("canvas")}function R(z,E,ne){let Re=1;const Se=st(z);if((Se.width>ne||Se.height>ne)&&(Re=ne/Math.max(Se.width,Se.height)),Re<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const ke=Math.floor(Re*Se.width),Oe=Math.floor(Re*Se.height);g===void 0&&(g=b(ke,Oe));const me=E?b(ke,Oe):g;return me.width=ke,me.height=Oe,me.getContext("2d").drawImage(z,0,0,ke,Oe),bt("WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+ke+"x"+Oe+")."),me}else return"data"in z&&bt("WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),z;return z}function F(z){return z.generateMipmaps}function D(z){s.generateMipmap(z)}function U(z){return z.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?s.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(z,E,ne,Re,Se,ke=!1){if(z!==null){if(s[z]!==void 0)return s[z];bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Oe;Re&&(Oe=e.get("EXT_texture_norm16"),Oe||bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let me=E;if(E===s.RED&&(ne===s.FLOAT&&(me=s.R32F),ne===s.HALF_FLOAT&&(me=s.R16F),ne===s.UNSIGNED_BYTE&&(me=s.R8),ne===s.UNSIGNED_SHORT&&Oe&&(me=Oe.R16_EXT),ne===s.SHORT&&Oe&&(me=Oe.R16_SNORM_EXT)),E===s.RED_INTEGER&&(ne===s.UNSIGNED_BYTE&&(me=s.R8UI),ne===s.UNSIGNED_SHORT&&(me=s.R16UI),ne===s.UNSIGNED_INT&&(me=s.R32UI),ne===s.BYTE&&(me=s.R8I),ne===s.SHORT&&(me=s.R16I),ne===s.INT&&(me=s.R32I)),E===s.RG&&(ne===s.FLOAT&&(me=s.RG32F),ne===s.HALF_FLOAT&&(me=s.RG16F),ne===s.UNSIGNED_BYTE&&(me=s.RG8),ne===s.UNSIGNED_SHORT&&Oe&&(me=Oe.RG16_EXT),ne===s.SHORT&&Oe&&(me=Oe.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(ne===s.UNSIGNED_BYTE&&(me=s.RG8UI),ne===s.UNSIGNED_SHORT&&(me=s.RG16UI),ne===s.UNSIGNED_INT&&(me=s.RG32UI),ne===s.BYTE&&(me=s.RG8I),ne===s.SHORT&&(me=s.RG16I),ne===s.INT&&(me=s.RG32I)),E===s.RGB_INTEGER&&(ne===s.UNSIGNED_BYTE&&(me=s.RGB8UI),ne===s.UNSIGNED_SHORT&&(me=s.RGB16UI),ne===s.UNSIGNED_INT&&(me=s.RGB32UI),ne===s.BYTE&&(me=s.RGB8I),ne===s.SHORT&&(me=s.RGB16I),ne===s.INT&&(me=s.RGB32I)),E===s.RGBA_INTEGER&&(ne===s.UNSIGNED_BYTE&&(me=s.RGBA8UI),ne===s.UNSIGNED_SHORT&&(me=s.RGBA16UI),ne===s.UNSIGNED_INT&&(me=s.RGBA32UI),ne===s.BYTE&&(me=s.RGBA8I),ne===s.SHORT&&(me=s.RGBA16I),ne===s.INT&&(me=s.RGBA32I)),E===s.RGB&&(ne===s.UNSIGNED_SHORT&&Oe&&(me=Oe.RGB16_EXT),ne===s.SHORT&&Oe&&(me=Oe.RGB16_SNORM_EXT),ne===s.UNSIGNED_INT_5_9_9_9_REV&&(me=s.RGB9_E5),ne===s.UNSIGNED_INT_10F_11F_11F_REV&&(me=s.R11F_G11F_B10F)),E===s.RGBA){const xe=ke?nc:Ft.getTransfer(Se);ne===s.FLOAT&&(me=s.RGBA32F),ne===s.HALF_FLOAT&&(me=s.RGBA16F),ne===s.UNSIGNED_BYTE&&(me=xe===qt?s.SRGB8_ALPHA8:s.RGBA8),ne===s.UNSIGNED_SHORT&&Oe&&(me=Oe.RGBA16_EXT),ne===s.SHORT&&Oe&&(me=Oe.RGBA16_SNORM_EXT),ne===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),ne===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)}return(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function w(z,E){let ne;return z?E===null||E===Yi||E===oa?ne=s.DEPTH24_STENCIL8:E===ji?ne=s.DEPTH32F_STENCIL8:E===ao&&(ne=s.DEPTH24_STENCIL8,bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Yi||E===oa?ne=s.DEPTH_COMPONENT24:E===ji?ne=s.DEPTH_COMPONENT32F:E===ao&&(ne=s.DEPTH_COMPONENT16),ne}function N(z,E){return F(z)===!0||z.isFramebufferTexture&&z.minFilter!==Ln&&z.minFilter!==ei?Math.log2(Math.max(E.width,E.height))+1:z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?E.mipmaps.length:1}function J(z){const E=new WeakRef(z);r.get(z).__ref=E,M.add(E),A.register(z,E,E)}function X(z){const E=r.get(z).__ref;E!==void 0&&(M.delete(E),A.unregister(E))}function j(z){O(z.target)}function B(z){V(z.target)}function O(z){z.removeEventListener("dispose",j),X(z),se(z),z.isVideoTexture&&v.delete(z),z.isHTMLTexture&&y.delete(z)}function V(z){z.removeEventListener("dispose",B),X(z),Y(z)}function H(){for(const z of M){const E=z.deref();E!==void 0&&(E.isRenderTarget===!0?V(E):O(E))}M.clear(),y.clear()}function se(z){const E=r.get(z);if(E.__webglInit===void 0)return;const ne=z.source,Re=_.get(ne);if(Re){const Se=Re[E.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&ee(z),Object.keys(Re).length===0&&_.delete(ne)}r.remove(z)}function ee(z){const E=r.get(z);s.deleteTexture(E.__webglTexture);const ne=z.source,Re=_.get(ne);delete Re[E.__cacheKey],d.memory.textures--}function Y(z){const E=r.get(z);E.__depthDisposeCallback&&E.__depthDisposeCallback();const ne=z.depthTexture;if(ne&&ne.renderTarget===z&&O(ne),z.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++){if(Array.isArray(E.__webglFramebuffer[Se]))for(let ke=0;ke<E.__webglFramebuffer[Se].length;ke++)s.deleteFramebuffer(E.__webglFramebuffer[Se][ke]);else s.deleteFramebuffer(E.__webglFramebuffer[Se]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[Se])}else{if(Array.isArray(E.__webglFramebuffer))for(let Se=0;Se<E.__webglFramebuffer.length;Se++)s.deleteFramebuffer(E.__webglFramebuffer[Se]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Se=0;Se<E.__webglColorRenderbuffer.length;Se++)E.__webglColorRenderbuffer[Se]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[Se]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Re=z.textures;for(let Se=0,ke=Re.length;Se<ke;Se++){const Oe=r.get(Re[Se]);Oe.__webglTexture&&(s.deleteTexture(Oe.__webglTexture),d.memory.textures--),r.remove(Re[Se])}r.remove(z)}let G=0;function $(){G=0}function P(){return G}function K(z){G=z}function we(){const z=G;return z>=o.maxTextures&&bt("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+o.maxTextures),G+=1,z}function k(z){const E=[];return E.push(z.wrapS),E.push(z.wrapT),E.push(z.wrapR||0),E.push(z.magFilter),E.push(z.minFilter),E.push(z.anisotropy),E.push(z.internalFormat),E.push(z.format),E.push(z.type),E.push(z.generateMipmaps),E.push(z.mipmapsAutoUpdate),E.push(z.premultiplyAlpha),E.push(z.flipY),E.push(z.unpackAlignment),E.push(z.colorSpace),E.join()}function ve(z,E){const ne=r.get(z);if(z.isVideoTexture&&_t(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&ne.__version!==z.version){const Re=z.image;if(Re===null)bt("WebGLRenderer: Texture marked for update but no image data found.");else if(Re.complete===!1)bt("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(ne,z,E);return}}else z.isExternalTexture&&(ne.__webglTexture=z.sourceTexture?z.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ne.__webglTexture,s.TEXTURE0+E)}function be(z,E){const ne=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ne.__version!==z.version){vt(ne,z,E);return}else z.isExternalTexture&&(ne.__webglTexture=z.sourceTexture?z.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ne.__webglTexture,s.TEXTURE0+E)}function Ne(z,E){const ne=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&ne.__version!==z.version){vt(ne,z,E);return}t.bindTexture(s.TEXTURE_3D,ne.__webglTexture,s.TEXTURE0+E)}function _e(z,E){const ne=r.get(z);if(z.version>0&&ne.__version!==z.version){Mt(ne,z,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture,s.TEXTURE0+E)}const Ue={[aa]:s.REPEAT,[Qn]:s.CLAMP_TO_EDGE,[Cd]:s.MIRRORED_REPEAT},ot={[Ln]:s.NEAREST,[p_]:s.NEAREST_MIPMAP_NEAREST,[yl]:s.NEAREST_MIPMAP_LINEAR,[ei]:s.LINEAR,[Xu]:s.LINEAR_MIPMAP_NEAREST,[Br]:s.LINEAR_MIPMAP_LINEAR},Be={[v_]:s.NEVER,[Nm]:s.ALWAYS,[__]:s.LESS,[Cm]:s.LEQUAL,[y_]:s.EQUAL,[Rm]:s.GEQUAL,[S_]:s.GREATER,[b_]:s.NOTEQUAL};function Me(z,E){if(E.type===ji&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ei||E.magFilter===Xu||E.magFilter===yl||E.magFilter===Br||E.minFilter===ei||E.minFilter===Xu||E.minFilter===yl||E.minFilter===Br)&&bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(z,s.TEXTURE_WRAP_S,Ue[E.wrapS]),s.texParameteri(z,s.TEXTURE_WRAP_T,Ue[E.wrapT]),(z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY)&&s.texParameteri(z,s.TEXTURE_WRAP_R,Ue[E.wrapR]),s.texParameteri(z,s.TEXTURE_MAG_FILTER,ot[E.magFilter]),s.texParameteri(z,s.TEXTURE_MIN_FILTER,ot[E.minFilter]),E.compareFunction&&(s.texParameteri(z,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(z,s.TEXTURE_COMPARE_FUNC,Be[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ln||E.minFilter!==yl&&E.minFilter!==Br||E.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");s.texParameterf(z,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ie(z,E){let ne=!1;z.__webglInit===void 0&&(z.__webglInit=!0,E.addEventListener("dispose",j),J(E));const Re=E.source;let Se=_.get(Re);Se===void 0&&(Se={},_.set(Re,Se));const ke=k(E);if(ke!==z.__cacheKey){Se[ke]===void 0&&(Se[ke]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,ne=!0),Se[ke].usedTimes++;const Oe=Se[z.__cacheKey];Oe!==void 0&&(Se[z.__cacheKey].usedTimes--,Oe.usedTimes===0&&ee(E)),z.__cacheKey=ke,z.__webglTexture=Se[ke].texture}return ne}function Ge(z,E,ne){return Math.floor(Math.floor(z/ne)/E)}function gt(z,E,ne,Re){const ke=z.updateRanges;if(ke.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,ne,Re,E.data);else{ke.sort((I,re)=>I.start-re.start);let Oe=0;for(let I=1;I<ke.length;I++){const re=ke[Oe],ie=ke[I],Te=re.start+re.count,Ae=Ge(ie.start,E.width,4),Pe=Ge(re.start,E.width,4);ie.start<=Te+1&&Ae===Pe&&Ge(ie.start+ie.count-1,E.width,4)===Ae?re.count=Math.max(re.count,ie.start+ie.count-re.start):(++Oe,ke[Oe]=ie)}ke.length=Oe+1;const me=t.getParameter(s.UNPACK_ROW_LENGTH),xe=t.getParameter(s.UNPACK_SKIP_PIXELS),ge=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let I=0,re=ke.length;I<re;I++){const ie=ke[I],Te=Math.floor(ie.start/4),Ae=Math.ceil(ie.count/4),Pe=Te%E.width,$e=Math.floor(Te/E.width),ft=Ae,Ce=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(s.UNPACK_SKIP_ROWS,$e),t.texSubImage2D(s.TEXTURE_2D,0,Pe,$e,ft,Ce,ne,Re,E.data)}z.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,me),t.pixelStorei(s.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(s.UNPACK_SKIP_ROWS,ge)}}function vt(z,E,ne){let Re=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Re=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Re=s.TEXTURE_3D);const Se=Ie(z,E),ke=E.source;t.bindTexture(Re,z.__webglTexture,s.TEXTURE0+ne);const Oe=r.get(ke);if(ke.version!==Oe.__version||Se===!0){if(t.activeTexture(s.TEXTURE0+ne),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const Ce=Ft.getPrimaries(Ft.workingColorSpace),Ke=E.colorSpace===Fr?null:Ft.getPrimaries(E.colorSpace),fe=E.colorSpace===Fr||Ce===Ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let xe=R(E.image,!1,o.maxTextureSize);xe=Ye(E,xe);const ge=l.convert(E.format,E.colorSpace),I=l.convert(E.type);let re=L(E.internalFormat,ge,I,E.normalized,E.colorSpace,E.isVideoTexture);Me(Re,E);let ie;const Te=E.mipmaps,Ae=E.isVideoTexture!==!0,Pe=Oe.__version===void 0||Se===!0,$e=ke.dataReady,ft=N(E,xe);if(E.isDepthTexture)re=w(E.format===Hr,E.type),Pe&&(Ae?t.texStorage2D(s.TEXTURE_2D,1,re,xe.width,xe.height):t.texImage2D(s.TEXTURE_2D,0,re,xe.width,xe.height,0,ge,I,null));else if(E.isDataTexture)if(Te.length>0){Ae&&Pe&&t.texStorage2D(s.TEXTURE_2D,ft,re,Te[0].width,Te[0].height);for(let Ce=0,Ke=Te.length;Ce<Ke;Ce++)ie=Te[Ce],Ae?$e&&t.texSubImage2D(s.TEXTURE_2D,Ce,0,0,ie.width,ie.height,ge,I,ie.data):t.texImage2D(s.TEXTURE_2D,Ce,re,ie.width,ie.height,0,ge,I,ie.data);E.generateMipmaps=!1}else Ae?(Pe&&t.texStorage2D(s.TEXTURE_2D,ft,re,xe.width,xe.height),$e&&gt(E,xe,ge,I)):t.texImage2D(s.TEXTURE_2D,0,re,xe.width,xe.height,0,ge,I,xe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ae&&Pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ft,re,Te[0].width,Te[0].height,xe.depth);for(let Ce=0,Ke=Te.length;Ce<Ke;Ce++)if(ie=Te[Ce],E.format!==$i)if(ge!==null)if(Ae){if($e)if(E.layerUpdates.size>0){const fe=L0(ie.width,ie.height,E.format,E.type);for(const ze of E.layerUpdates){const lt=ie.data.subarray(ze*fe/ie.data.BYTES_PER_ELEMENT,(ze+1)*fe/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ce,0,0,ze,ie.width,ie.height,1,ge,lt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ce,0,0,0,ie.width,ie.height,xe.depth,ge,ie.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ce,re,ie.width,ie.height,xe.depth,0,ie.data,0,0);else bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?$e&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Ce,0,0,0,ie.width,ie.height,xe.depth,ge,I,ie.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Ce,re,ie.width,ie.height,xe.depth,0,ge,I,ie.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Ae&&Pe&&t.texStorage2D(s.TEXTURE_2D,ft,re,Te[0].width,Te[0].height);for(let Ce=0,Ke=Te.length;Ce<Ke;Ce++)ie=Te[Ce],E.format!==$i?ge!==null?Ae?$e&&t.compressedTexSubImage2D(s.TEXTURE_2D,Ce,0,0,ie.width,ie.height,ge,ie.data):t.compressedTexImage2D(s.TEXTURE_2D,Ce,re,ie.width,ie.height,0,ie.data):bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?$e&&t.texSubImage2D(s.TEXTURE_2D,Ce,0,0,ie.width,ie.height,ge,I,ie.data):t.texImage2D(s.TEXTURE_2D,Ce,re,ie.width,ie.height,0,ge,I,ie.data)}else if(E.isDataArrayTexture)if(Ae){if(Pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ft,re,xe.width,xe.height,xe.depth),$e)if(E.layerUpdates.size>0){const Ce=L0(xe.width,xe.height,E.format,E.type);for(const Ke of E.layerUpdates){const fe=xe.data.subarray(Ke*Ce/xe.data.BYTES_PER_ELEMENT,(Ke+1)*Ce/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ke,xe.width,xe.height,1,ge,I,fe)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,ge,I,xe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,re,xe.width,xe.height,xe.depth,0,ge,I,xe.data);else if(E.isData3DTexture)Ae?(Pe&&t.texStorage3D(s.TEXTURE_3D,ft,re,xe.width,xe.height,xe.depth),$e&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,ge,I,xe.data)):t.texImage3D(s.TEXTURE_3D,0,re,xe.width,xe.height,xe.depth,0,ge,I,xe.data);else if(E.isFramebufferTexture){if(Pe)if(Ae)t.texStorage2D(s.TEXTURE_2D,ft,re,xe.width,xe.height);else{let Ce=xe.width,Ke=xe.height;for(let fe=0;fe<ft;fe++)t.texImage2D(s.TEXTURE_2D,fe,re,Ce,Ke,0,ge,I,null),Ce>>=1,Ke>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const Ce=s.canvas;if(Ce.hasAttribute("layoutsubtree")||Ce.setAttribute("layoutsubtree","true"),xe.parentNode!==Ce){Ce.appendChild(xe),y.add(E),Ce.onpaint=Ke=>{const fe=Ke.changedElements;for(const ze of y)fe.includes(ze.image)&&(ze.needsUpdate=!0)},Ce.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,xe);else{const fe=s.RGBA,ze=s.RGBA,lt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,fe,ze,lt,xe)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Te.length>0){if(Ae&&Pe){const Ce=st(Te[0]);t.texStorage2D(s.TEXTURE_2D,ft,re,Ce.width,Ce.height)}for(let Ce=0,Ke=Te.length;Ce<Ke;Ce++)ie=Te[Ce],Ae?$e&&t.texSubImage2D(s.TEXTURE_2D,Ce,0,0,ge,I,ie):t.texImage2D(s.TEXTURE_2D,Ce,re,ge,I,ie);E.generateMipmaps=!1}else if(Ae){if(Pe){const Ce=st(xe);t.texStorage2D(s.TEXTURE_2D,ft,re,Ce.width,Ce.height)}$e&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ge,I,xe)}else t.texImage2D(s.TEXTURE_2D,0,re,ge,I,xe);F(E)&&E.mipmapsAutoUpdate===!0&&D(Re),Oe.__version=ke.version,E.onUpdate&&E.onUpdate(E)}z.__version=E.version}function Mt(z,E,ne){if(E.image.length!==6)return;const Re=Ie(z,E),Se=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+ne);const ke=r.get(Se);if(Se.version!==ke.__version||Re===!0){t.activeTexture(s.TEXTURE0+ne);const Oe=Ft.getPrimaries(Ft.workingColorSpace),me=E.colorSpace===Fr?null:Ft.getPrimaries(E.colorSpace),xe=E.colorSpace===Fr||Oe===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const ge=E.isCompressedTexture||E.image[0].isCompressedTexture,I=E.image[0]&&E.image[0].isDataTexture,re=[];for(let ze=0;ze<6;ze++)!ge&&!I?re[ze]=R(E.image[ze],!0,o.maxCubemapSize):re[ze]=I?E.image[ze].image:E.image[ze],re[ze]=Ye(E,re[ze]);const ie=re[0],Te=l.convert(E.format,E.colorSpace),Ae=l.convert(E.type);let Pe=L(E.internalFormat,Te,Ae,E.normalized,E.colorSpace);const $e=E.isVideoTexture!==!0,ft=ke.__version===void 0||Re===!0,Ce=Se.dataReady;let Ke=N(E,ie);Me(s.TEXTURE_CUBE_MAP,E);let fe;if(E.isDepthTexture){if(Pe=w(E.format===Hr,E.type),ft)if($e)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Pe,ie.width,ie.height);else for(let ze=0;ze<6;ze++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,Pe,ie.width,ie.height,0,Te,Ae,null)}else if(ge){$e&&ft&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ke,Pe,ie.width,ie.height);for(let ze=0;ze<6;ze++){fe=re[ze].mipmaps;for(let lt=0;lt<fe.length;lt++){const mt=fe[lt];E.format!==$i?Te!==null?$e?Ce&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,lt,0,0,mt.width,mt.height,Te,mt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,lt,Pe,mt.width,mt.height,0,mt.data):bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?Ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,lt,0,0,mt.width,mt.height,Te,Ae,mt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,lt,Pe,mt.width,mt.height,0,Te,Ae,mt.data)}}}else{if(fe=E.mipmaps,$e&&ft){fe.length>0&&Ke++;const ze=st(re[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ke,Pe,ze.width,ze.height)}for(let ze=0;ze<6;ze++)if(I){$e?Ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,0,0,re[ze].width,re[ze].height,Te,Ae,re[ze].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,Pe,re[ze].width,re[ze].height,0,Te,Ae,re[ze].data);for(let lt=0;lt<fe.length;lt++){const ye=fe[lt].image[ze].image;$e?Ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,lt+1,0,0,ye.width,ye.height,Te,Ae,ye.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,lt+1,Pe,ye.width,ye.height,0,Te,Ae,ye.data)}}else{$e?Ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,0,0,Te,Ae,re[ze]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,Pe,Te,Ae,re[ze]);for(let lt=0;lt<fe.length;lt++){const mt=fe[lt];$e?Ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,lt+1,0,0,Te,Ae,mt.image[ze]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,lt+1,Pe,Te,Ae,mt.image[ze])}}}F(E)&&E.mipmapsAutoUpdate===!0&&D(s.TEXTURE_CUBE_MAP),ke.__version=Se.version,E.onUpdate&&E.onUpdate(E)}z.__version=E.version}function Ut(z,E,ne,Re,Se,ke){const Oe=l.convert(ne.format,ne.colorSpace),me=l.convert(ne.type),xe=L(ne.internalFormat,Oe,me,ne.normalized,ne.colorSpace),ge=r.get(E),I=r.get(ne);if(I.__renderTarget=E,!ge.__hasExternalTextures){const re=Math.max(1,E.width>>ke),ie=Math.max(1,E.height>>ke);Se===s.TEXTURE_3D||Se===s.TEXTURE_2D_ARRAY?t.texImage3D(Se,ke,xe,re,ie,E.depth,0,Oe,me,null):t.texImage2D(Se,ke,xe,re,ie,0,Oe,me,null)}t.bindFramebuffer(s.FRAMEBUFFER,z),de(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Re,Se,I.__webglTexture,0,kt(E)):(Se===s.TEXTURE_2D||Se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Re,Se,I.__webglTexture,ke),t.bindFramebuffer(s.FRAMEBUFFER,null)}function an(z,E,ne){if(s.bindRenderbuffer(s.RENDERBUFFER,z),E.depthBuffer){const Re=E.depthTexture,Se=Re&&Re.isDepthTexture?Re.type:null,ke=w(E.stencilBuffer,Se),Oe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;de(E)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,kt(E),ke,E.width,E.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,kt(E),ke,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ke,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Oe,s.RENDERBUFFER,z)}else{const Re=E.textures;for(let Se=0;Se<Re.length;Se++){const ke=Re[Se],Oe=l.convert(ke.format,ke.colorSpace),me=l.convert(ke.type),xe=L(ke.internalFormat,Oe,me,ke.normalized,ke.colorSpace);de(E)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,kt(E),xe,E.width,E.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,kt(E),xe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,xe,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Dt(z,E,ne){const Re=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,z),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Se=r.get(E.depthTexture);Se.__renderTarget=E;const ke=Re?E.depthTexture.image[0]:E.depthTexture.image;(!Se.__webglTexture||ke.width!==E.width||ke.height!==E.height)&&(ke.width=E.width,ke.height=E.height,E.depthTexture.needsUpdate=!0),Re?_e(E.depthTexture,0):ve(E.depthTexture,0);const Oe=Se.__webglTexture,me=kt(E),xe=Re?s.TEXTURE_CUBE_MAP_POSITIVE_X+ne:s.TEXTURE_2D,ge=E.depthTexture.format===Hr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Wr)de(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,xe,Oe,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,ge,xe,Oe,0);else if(E.depthTexture.format===Hr)de(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,xe,Oe,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,ge,xe,Oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $t(z){const E=r.get(z),ne=z.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==z.depthTexture){const Re=z.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Re){const Se=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Re.removeEventListener("dispose",Se)};Re.addEventListener("dispose",Se),E.__depthDisposeCallback=Se}E.__boundDepthTexture=Re}if(z.depthTexture&&!E.__autoAllocateDepthBuffer)if(ne)for(let Re=0;Re<6;Re++)Dt(E.__webglFramebuffer[Re],z,Re);else z.texture.mipmaps.length>0?Dt(E.__webglFramebuffer[0],z,0):Dt(E.__webglFramebuffer,z,0);else if(ne){E.__webglDepthbuffer=[];for(let Re=0;Re<6;Re++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[Re]),E.__webglDepthbuffer[Re]===void 0)E.__webglDepthbuffer[Re]=s.createRenderbuffer(),an(E.__webglDepthbuffer[Re],z,!1);else{const Se=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ke=E.__webglDepthbuffer[Re];s.bindRenderbuffer(s.RENDERBUFFER,ke),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,ke)}}else if(z.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),an(E.__webglDepthbuffer,z,!1);else{const Se=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ke=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ke),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,ke)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(z,E,ne){const Re=r.get(z);E!==void 0&&Ut(Re.__webglFramebuffer,z,z.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ne!==void 0&&$t(z)}function on(z){const E=z.texture,ne=r.get(z),Re=r.get(E);z.addEventListener("dispose",B),J(z);const Se=z.textures,ke=z.isWebGLCubeRenderTarget===!0,Oe=Se.length>1;if(Oe||(Re.__webglTexture===void 0&&(Re.__webglTexture=s.createTexture()),Re.__version=E.version,d.memory.textures++),ke){ne.__webglFramebuffer=[];for(let me=0;me<6;me++)if(E.mipmaps.length>0){ne.__webglFramebuffer[me]=[];for(let xe=0;xe<E.mipmaps.length;xe++)ne.__webglFramebuffer[me][xe]=s.createFramebuffer()}else ne.__webglFramebuffer[me]=s.createFramebuffer()}else{if(E.mipmaps.length>0){ne.__webglFramebuffer=[];for(let me=0;me<E.mipmaps.length;me++)ne.__webglFramebuffer[me]=s.createFramebuffer()}else ne.__webglFramebuffer=s.createFramebuffer();if(Oe)for(let me=0,xe=Se.length;me<xe;me++){const ge=r.get(Se[me]);ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture(),d.memory.textures++)}if(z.samples>0&&de(z)===!1){ne.__webglMultisampledFramebuffer=s.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let me=0;me<Se.length;me++){const xe=Se[me];ne.__webglColorRenderbuffer[me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ne.__webglColorRenderbuffer[me]);const ge=l.convert(xe.format,xe.colorSpace),I=l.convert(xe.type),re=L(xe.internalFormat,ge,I,xe.normalized,xe.colorSpace,z.isXRRenderTarget===!0),ie=kt(z);s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,re,z.width,z.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,ne.__webglColorRenderbuffer[me])}s.bindRenderbuffer(s.RENDERBUFFER,null),z.depthBuffer&&(ne.__webglDepthRenderbuffer=s.createRenderbuffer(),an(ne.__webglDepthRenderbuffer,z,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ke){t.bindTexture(s.TEXTURE_CUBE_MAP,Re.__webglTexture),Me(s.TEXTURE_CUBE_MAP,E);for(let me=0;me<6;me++)if(E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)Ut(ne.__webglFramebuffer[me][xe],z,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,xe);else Ut(ne.__webglFramebuffer[me],z,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);F(E)?D(s.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(Oe){for(let me=0,xe=Se.length;me<xe;me++){const ge=Se[me],I=r.get(ge);let re=s.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(re=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(re,I.__webglTexture),Me(re,ge),Ut(ne.__webglFramebuffer,z,ge,s.COLOR_ATTACHMENT0+me,re,0),F(ge)&&D(re)}t.unbindTexture()}else{let me=s.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(me=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(me,Re.__webglTexture),Me(me,E),E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)Ut(ne.__webglFramebuffer[xe],z,E,s.COLOR_ATTACHMENT0,me,xe);else Ut(ne.__webglFramebuffer,z,E,s.COLOR_ATTACHMENT0,me,0);F(E)?D(me):E.mipmaps.length>0&&s.texParameteri(me,s.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}z.depthBuffer&&$t(z)}function Q(z){const E=z.textures;for(let ne=0,Re=E.length;ne<Re;ne++){const Se=E[ne];if(F(Se)&&Se.mipmapsAutoUpdate===!0){const ke=U(z),Oe=r.get(Se).__webglTexture;t.bindTexture(ke,Oe),D(ke),t.unbindTexture()}}}const Zt=[];function Lt(z){if(z.samples>0){if(de(z)===!1){const E=z.textures,ne=z.width,Re=z.height;let Se=s.COLOR_BUFFER_BIT;const ke=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Oe=r.get(z),me=E.length>1;if(me)for(let ge=0;ge<E.length;ge++)t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),z.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let ge=0;ge<E.length;ge++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(Se|=s.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(Se|=s.STENCIL_BUFFER_BIT)),me){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[ge]);const I=r.get(E[ge]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,I,0)}s.blitFramebuffer(0,0,ne,Re,0,0,ne,Re,Se,s.NEAREST),u===!0&&(Zt.length=0,Zt.push(s.COLOR_ATTACHMENT0+ge),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&Zt.push(ke),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Zt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),me)for(let ge=0;ge<E.length;ge++){t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[ge]);const I=r.get(E[ge]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,I,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&u){const E=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function kt(z){return Math.min(o.maxSamples,z.samples)}function de(z){const E=r.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function _t(z){const E=d.render.frame;v.get(z)!==E&&(v.set(z,E),z.update())}function Ye(z,E){const ne=z.colorSpace,Re=z.format,Se=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||ne!==tc&&ne!==Fr&&(Ft.getTransfer(ne)===qt?(Re!==$i||Se!==li)&&bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",ne)),E}function st(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(m.width=z.naturalWidth||z.width,m.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(m.width=z.displayWidth,m.height=z.displayHeight):(m.width=z.width,m.height=z.height),m}this.allocateTextureUnit=we,this.resetTextureUnits=$,this.getTextureUnits=P,this.setTextureUnits=K,this.setTexture2D=ve,this.setTexture2DArray=be,this.setTexture3D=Ne,this.setTextureCube=_e,this.rebindTextures=Bt,this.setupRenderTarget=on,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=de,this.dispose=H}function Zw(s,e){function t(r,o=Fr){let l;const d=Ft.getTransfer(o);if(r===li)return s.UNSIGNED_BYTE;if(r===xf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===vf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===wm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Mm)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Sm)return s.BYTE;if(r===bm)return s.SHORT;if(r===ao)return s.UNSIGNED_SHORT;if(r===gf)return s.INT;if(r===Yi)return s.UNSIGNED_INT;if(r===ji)return s.FLOAT;if(r===qi)return s.HALF_FLOAT;if(r===Em)return s.ALPHA;if(r===Tm)return s.RGB;if(r===$i)return s.RGBA;if(r===Wr)return s.DEPTH_COMPONENT;if(r===Hr)return s.DEPTH_STENCIL;if(r===Am)return s.RED;if(r===_f)return s.RED_INTEGER;if(r===xs)return s.RG;if(r===yf)return s.RG_INTEGER;if(r===Sf)return s.RGBA_INTEGER;if(r===Wl||r===jl||r===$l||r===Xl)if(d===qt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Wl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$l)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Xl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Wl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===jl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$l)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Xl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rd||r===Nd||r===Pd||r===Dd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Rd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Nd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Pd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ld||r===Id||r===zd||r===Ud||r===kd||r===Ql||r===Fd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Ld||r===Id)return d===qt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===zd)return d===qt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Ud)return l.COMPRESSED_R11_EAC;if(r===kd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Ql)return l.COMPRESSED_RG11_EAC;if(r===Fd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Od||r===Bd||r===Hd||r===Gd||r===Vd||r===Wd||r===jd||r===$d||r===Xd||r===Yd||r===qd||r===Kd||r===Zd||r===Jd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Od)return d===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Bd)return d===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Hd)return d===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Gd)return d===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Vd)return d===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Wd)return d===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===jd)return d===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$d)return d===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Xd)return d===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yd)return d===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qd)return d===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Kd)return d===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zd)return d===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Jd)return d===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Qd||r===ef||r===tf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Qd)return d===qt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ef)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===tf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===nf||r===rf||r===ec||r===sf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===nf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===rf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ec)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===sf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===oa?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const Jw=`
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

}`;class eM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Om(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new gi({vertexShader:Jw,fragmentShader:Qw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vn(new po(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tM extends vs{constructor(e,t){super();const r=this;let o=null,l=1,d=null,p="local-floor",u=1,m=null,v=null,y=null,g=null,_=null,M=null;const A=typeof XRWebGLBinding<"u",S=new eM,b={},R=t.getContextAttributes();let F=null,D=null;const U=[],L=[],w=new zt;let N=null,J=null;const X=new Pi;X.viewport=new un;const j=new Pi;j.viewport=new un;const B=[X,j],O=new hy;let V=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let ve=U[k];return ve===void 0&&(ve=new nd,U[k]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(k){let ve=U[k];return ve===void 0&&(ve=new nd,U[k]=ve),ve.getGripSpace()},this.getHand=function(k){let ve=U[k];return ve===void 0&&(ve=new nd,U[k]=ve),ve.getHandSpace()};function se(k){const ve=L.indexOf(k.inputSource);if(ve===-1)return;const be=U[ve];be!==void 0&&(be.update(k.inputSource,k.frame,m||d),be.dispatchEvent({type:k.type,data:k.inputSource}))}function ee(){o.removeEventListener("select",se),o.removeEventListener("selectstart",se),o.removeEventListener("selectend",se),o.removeEventListener("squeeze",se),o.removeEventListener("squeezestart",se),o.removeEventListener("squeezeend",se),o.removeEventListener("end",ee),o.removeEventListener("inputsourceschange",Y);for(let k=0;k<U.length;k++){const ve=L[k];ve!==null&&(L[k]=null,U[k].disconnect(ve))}V=null,H=null,S.reset();for(const k in b)delete b[k];if(e.setRenderTarget(F),_=null,g=null,y=null,o=null,D=null,we.stop(),r.isPresenting=!1,e.setPixelRatio(N),e.setSize(w.width,w.height,!1),J!==null){const k=J.camera;k.fov=J.fov,k.zoom=J.zoom,k.updateProjectionMatrix(),J=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){l=k,r.isPresenting===!0&&bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){p=k,r.isPresenting===!0&&bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(k){m=k},this.getBaseLayer=function(){return g!==null?g:_},this.getBinding=function(){return y===null&&A&&(y=new XRWebGLBinding(o,t)),y},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(k){if(o=k,o!==null){if(F=e.getRenderTarget(),o.addEventListener("select",se),o.addEventListener("selectstart",se),o.addEventListener("selectend",se),o.addEventListener("squeeze",se),o.addEventListener("squeezestart",se),o.addEventListener("squeezeend",se),o.addEventListener("end",ee),o.addEventListener("inputsourceschange",Y),R.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(w),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Ne=null,_e=null;R.depth&&(_e=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=R.stencil?Hr:Wr,Ne=R.stencil?oa:Yi);const Ue={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:l};y=this.getBinding(),g=y.createProjectionLayer(Ue),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),D=new Xi(g.textureWidth,g.textureHeight,{format:$i,type:li,depthTexture:new la(g.textureWidth,g.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const be={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:l};_=new XRWebGLLayer(o,t,be),o.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),D=new Xi(_.framebufferWidth,_.framebufferHeight,{format:$i,type:li,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(u),m=null,d=await o.requestReferenceSpace(p),we.setContext(o),we.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Y(k){for(let ve=0;ve<k.removed.length;ve++){const be=k.removed[ve],Ne=L.indexOf(be);Ne>=0&&(L[Ne]=null,U[Ne].disconnect(be))}for(let ve=0;ve<k.added.length;ve++){const be=k.added[ve];let Ne=L.indexOf(be);if(Ne===-1){for(let Ue=0;Ue<U.length;Ue++)if(Ue>=L.length){L.push(be),Ne=Ue;break}else if(L[Ue]===null){L[Ue]=be,Ne=Ue;break}if(Ne===-1)break}const _e=U[Ne];_e&&_e.connect(be)}}function G(k,ve){ve===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ve.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(o===null)return;let ve=k.near,be=k.far;S.texture!==null&&(S.depthNear>0&&(ve=S.depthNear),S.depthFar>0&&(be=S.depthFar)),O.near=j.near=X.near=ve,O.far=j.far=X.far=be,(V!==O.near||H!==O.far)&&(o.updateRenderState({depthNear:O.near,depthFar:O.far}),V=O.near,H=O.far),O.layers.mask=k.layers.mask|6,X.layers.mask=O.layers.mask&-5,j.layers.mask=O.layers.mask&-3;const Ne=k.parent,_e=O.cameras;G(O,Ne);for(let Ue=0;Ue<_e.length;Ue++)G(_e[Ue],Ne);O.projectionMatrix.copy(X.projectionMatrix),O.projectionMatrixInverse.copy(X.projectionMatrixInverse),J===null&&k.isPerspectiveCamera&&(J={camera:k,fov:k.fov,zoom:k.zoom}),$(k,O,Ne)};function $(k,ve,be){be===null?k.matrix.copy(ve.matrixWorld):(k.matrix.copy(be.matrixWorld),k.matrix.invert(),k.matrix.multiply(ve.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(ve.projectionMatrix),k.projectionMatrixInverse.copy(ve.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=of*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(g===null&&_===null))return u},this.setFoveation=function(k){u=k,g!==null&&(g.fixedFoveation=k),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=k)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(O)},this.getCameraTexture=function(k){return b[k]};let P=null;function K(k,ve){if(v=ve.getViewerPose(m||d),M=ve,v!==null){const be=v.views;_!==null&&(e.setRenderTargetFramebuffer(D,_.framebuffer),e.setRenderTarget(D));let Ne=!1;be.length!==O.cameras.length&&(O.cameras.length=0,Ne=!0);for(let Be=0;Be<be.length;Be++){const Me=be[Be];let Ie=null;if(_!==null)Ie=_.getViewport(Me);else{const gt=y.getViewSubImage(g,Me);Ie=gt.viewport,Be===0&&(e.setRenderTargetTextures(D,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(D))}let Ge=B[Be];Ge===void 0&&(Ge=new Pi,Ge.layers.enable(Be),Ge.viewport=new un,B[Be]=Ge),Ge.matrix.fromArray(Me.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Me.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Be===0&&(O.matrix.copy(Ge.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ne===!0&&O.cameras.push(Ge)}const _e=o.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){y=r.getBinding();const Be=y.getDepthInformation(be[0]);Be&&Be.isValid&&Be.texture&&S.init(Be,o.renderState)}if(_e&&_e.includes("camera-access")&&A){e.state.unbindTexture(),y=r.getBinding();for(let Be=0;Be<be.length;Be++){const Me=be[Be].camera;if(Me){let Ie=b[Me];Ie||(Ie=new Om,b[Me]=Ie);const Ge=y.getCameraImage(Me);Ie.sourceTexture=Ge}}}}for(let be=0;be<U.length;be++){const Ne=L[be],_e=U[be];Ne!==null&&_e!==void 0&&_e.update(Ne,ve,m||d)}P&&P(k,ve),ve.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ve}),M=null}const we=new Wm;we.setAnimationLoop(K),this.setAnimationLoop=function(k){P=k},this.dispose=function(){}}}const nM=new dn,eg=new wt;eg.set(-1,0,0,0,1,0,0,0,1);function iM(s,e){function t(S,b){S.matrixAutoUpdate===!0&&S.updateMatrix(),b.value.copy(S.matrix)}function r(S,b){b.color.getRGB(S.fogColor.value,Bm(s)),b.isFog?(S.fogNear.value=b.near,S.fogFar.value=b.far):b.isFogExp2&&(S.fogDensity.value=b.density)}function o(S,b,R,F,D){b.isNodeMaterial?b.uniformsNeedUpdate=!1:b.isMeshBasicMaterial?l(S,b):b.isMeshLambertMaterial?(l(S,b),b.envMap&&(S.envMapIntensity.value=b.envMapIntensity)):b.isMeshToonMaterial?(l(S,b),y(S,b)):b.isMeshPhongMaterial?(l(S,b),v(S,b),b.envMap&&(S.envMapIntensity.value=b.envMapIntensity)):b.isMeshStandardMaterial?(l(S,b),g(S,b),b.isMeshPhysicalMaterial&&_(S,b,D)):b.isMeshMatcapMaterial?(l(S,b),M(S,b)):b.isMeshDepthMaterial?l(S,b):b.isMeshDistanceMaterial?(l(S,b),A(S,b)):b.isMeshNormalMaterial?l(S,b):b.isLineBasicMaterial?(d(S,b),b.isLineDashedMaterial&&p(S,b)):b.isPointsMaterial?u(S,b,R,F):b.isSpriteMaterial?m(S,b):b.isShadowMaterial?(S.color.value.copy(b.color),S.opacity.value=b.opacity):b.isShaderMaterial&&(b.uniformsNeedUpdate=!1)}function l(S,b){S.opacity.value=b.opacity,b.color&&S.diffuse.value.copy(b.color),b.emissive&&S.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(S.map.value=b.map,t(b.map,S.mapTransform)),b.alphaMap&&(S.alphaMap.value=b.alphaMap,t(b.alphaMap,S.alphaMapTransform)),b.bumpMap&&(S.bumpMap.value=b.bumpMap,t(b.bumpMap,S.bumpMapTransform),S.bumpScale.value=b.bumpScale,b.side===In&&(S.bumpScale.value*=-1)),b.normalMap&&(S.normalMap.value=b.normalMap,t(b.normalMap,S.normalMapTransform),S.normalScale.value.copy(b.normalScale),b.side===In&&S.normalScale.value.negate()),b.displacementMap&&(S.displacementMap.value=b.displacementMap,t(b.displacementMap,S.displacementMapTransform),S.displacementScale.value=b.displacementScale,S.displacementBias.value=b.displacementBias),b.emissiveMap&&(S.emissiveMap.value=b.emissiveMap,t(b.emissiveMap,S.emissiveMapTransform)),b.specularMap&&(S.specularMap.value=b.specularMap,t(b.specularMap,S.specularMapTransform)),b.alphaTest>0&&(S.alphaTest.value=b.alphaTest);const R=e.get(b),F=R.envMap,D=R.envMapRotation;F&&(S.envMap.value=F,S.envMapRotation.value.setFromMatrix4(nM.makeRotationFromEuler(D)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(eg),S.reflectivity.value=b.reflectivity,S.ior.value=b.ior,S.refractionRatio.value=b.refractionRatio),b.lightMap&&(S.lightMap.value=b.lightMap,S.lightMapIntensity.value=b.lightMapIntensity,t(b.lightMap,S.lightMapTransform)),b.aoMap&&(S.aoMap.value=b.aoMap,S.aoMapIntensity.value=b.aoMapIntensity,t(b.aoMap,S.aoMapTransform))}function d(S,b){S.diffuse.value.copy(b.color),S.opacity.value=b.opacity,b.map&&(S.map.value=b.map,t(b.map,S.mapTransform))}function p(S,b){S.dashSize.value=b.dashSize,S.totalSize.value=b.dashSize+b.gapSize,S.scale.value=b.scale}function u(S,b,R,F){S.diffuse.value.copy(b.color),S.opacity.value=b.opacity,S.size.value=b.size*R,S.scale.value=F*.5,b.map&&(S.map.value=b.map,t(b.map,S.uvTransform)),b.alphaMap&&(S.alphaMap.value=b.alphaMap,t(b.alphaMap,S.alphaMapTransform)),b.alphaTest>0&&(S.alphaTest.value=b.alphaTest)}function m(S,b){S.diffuse.value.copy(b.color),S.opacity.value=b.opacity,S.rotation.value=b.rotation,b.map&&(S.map.value=b.map,t(b.map,S.mapTransform)),b.alphaMap&&(S.alphaMap.value=b.alphaMap,t(b.alphaMap,S.alphaMapTransform)),b.alphaTest>0&&(S.alphaTest.value=b.alphaTest)}function v(S,b){S.specular.value.copy(b.specular),S.shininess.value=Math.max(b.shininess,1e-4)}function y(S,b){b.gradientMap&&(S.gradientMap.value=b.gradientMap)}function g(S,b){S.metalness.value=b.metalness,b.metalnessMap&&(S.metalnessMap.value=b.metalnessMap,t(b.metalnessMap,S.metalnessMapTransform)),S.roughness.value=b.roughness,b.roughnessMap&&(S.roughnessMap.value=b.roughnessMap,t(b.roughnessMap,S.roughnessMapTransform)),b.envMap&&(S.envMapIntensity.value=b.envMapIntensity)}function _(S,b,R){S.ior.value=b.ior,b.diffuseRoughness>0&&(S.diffuseRoughness.value=b.diffuseRoughness,b.diffuseRoughnessMap&&(S.diffuseRoughnessMap.value=b.diffuseRoughnessMap,t(b.diffuseRoughnessMap,S.diffuseRoughnessMapTransform))),b.sheen>0&&(S.sheenColor.value.copy(b.sheenColor).multiplyScalar(b.sheen),S.sheenRoughness.value=b.sheenRoughness,b.sheenColorMap&&(S.sheenColorMap.value=b.sheenColorMap,t(b.sheenColorMap,S.sheenColorMapTransform)),b.sheenRoughnessMap&&(S.sheenRoughnessMap.value=b.sheenRoughnessMap,t(b.sheenRoughnessMap,S.sheenRoughnessMapTransform))),b.clearcoat>0&&(S.clearcoat.value=b.clearcoat,S.clearcoatRoughness.value=b.clearcoatRoughness,b.clearcoatMap&&(S.clearcoatMap.value=b.clearcoatMap,t(b.clearcoatMap,S.clearcoatMapTransform)),b.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=b.clearcoatRoughnessMap,t(b.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),b.clearcoatNormalMap&&(S.clearcoatNormalMap.value=b.clearcoatNormalMap,t(b.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(b.clearcoatNormalScale),b.side===In&&S.clearcoatNormalScale.value.negate())),b.dispersion>0&&(S.dispersion.value=b.dispersion),b.retroreflectivity>0&&(S.retroreflectivity.value=b.retroreflectivity),b.iridescence>0&&(S.iridescence.value=b.iridescence,S.iridescenceIOR.value=b.iridescenceIOR,S.iridescenceThicknessMinimum.value=b.iridescenceThicknessMinimum,S.iridescenceThicknessMaximum.value=b.iridescenceThicknessMaximum,b.iridescenceMap&&(S.iridescenceMap.value=b.iridescenceMap,t(b.iridescenceMap,S.iridescenceMapTransform)),b.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=b.iridescenceThicknessMap,t(b.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),b.transmission>0&&(S.transmission.value=b.transmission,S.transmissionSamplerMap.value=R.texture,S.transmissionSamplerSize.value.set(R.width,R.height),b.transmissionMap&&(S.transmissionMap.value=b.transmissionMap,t(b.transmissionMap,S.transmissionMapTransform)),S.thickness.value=b.thickness,b.thicknessMap&&(S.thicknessMap.value=b.thicknessMap,t(b.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=b.attenuationDistance,S.attenuationColor.value.copy(b.attenuationColor)),b.anisotropy>0&&(S.anisotropyVector.value.set(b.anisotropy*Math.cos(b.anisotropyRotation),b.anisotropy*Math.sin(b.anisotropyRotation)),b.anisotropyMap&&(S.anisotropyMap.value=b.anisotropyMap,t(b.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=b.specularIntensity,S.specularColor.value.copy(b.specularColor),b.specularColorMap&&(S.specularColorMap.value=b.specularColorMap,t(b.specularColorMap,S.specularColorMapTransform)),b.specularIntensityMap&&(S.specularIntensityMap.value=b.specularIntensityMap,t(b.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,b){b.matcap&&(S.matcap.value=b.matcap)}function A(S,b){const R=e.get(b).light;S.referencePosition.value.setFromMatrixPosition(R.matrixWorld),S.nearDistance.value=R.shadow.camera.near,S.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function rM(s,e,t,r){let o={},l={};function d(R,F){const D=F.program;r.uniformBlockBinding(R,D,o[R.id])}function p(R,F){let D=o[R.id];D===void 0&&(M(R),D=u(R),o[R.id]=D,R.addEventListener("dispose",S));const U=F.program;r.updateUBOMapping(R,U);const L=e.render.frame;l[R.id]!==L&&(m(R),l[R.id]=L)}function u(R){const F=s.createBuffer(),D=R.__size,U=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,F),s.bufferData(s.UNIFORM_BUFFER,D,U),s.bindBuffer(s.UNIFORM_BUFFER,null),F}function m(R){const F=o[R.id],D=R.uniforms,U=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,F);for(let L=0,w=D.length;L<w;L++){const N=D[L];if(Array.isArray(N))for(let J=0,X=N.length;J<X;J++)v(N[J],L,J,U);else v(N,L,0,U)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function v(R,F,D,U){if(g(R,F,D,U)===!0){const L=R.__offset,w=R.value;if(Array.isArray(w)){let N=0;for(let J=0;J<w.length;J++){const X=w[J],j=A(X,!0);y(X,R.__data,N),N+=j.storage/Float32Array.BYTES_PER_ELEMENT}}else y(w,R.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,L,R.__data)}}function y(R,F,D){typeof R=="number"||typeof R=="boolean"?F[D]=R:R.isMatrix3?(F[D]=R.elements[0],F[D+1]=R.elements[1],F[D+2]=R.elements[2],F[D+3]=0,F[D+4]=R.elements[3],F[D+5]=R.elements[4],F[D+6]=R.elements[5],F[D+7]=0,F[D+8]=R.elements[6],F[D+9]=R.elements[7],F[D+10]=R.elements[8],F[D+11]=0):ArrayBuffer.isView(R)?F.set(R.subarray(0,F.length-D),D):R.toArray(F,D)}function g(R,F,D,U){const L=R.value,w=F+"_"+D;if(Array.isArray(L)){U[w]===void 0&&(U[w]=[]);const N=U[w];let J=!1;for(let X=0;X<L.length;X++)_(L[X],N,X)===!0&&(J=!0);return J}return _(L,U,w)}function _(R,F,D){if(F[D]===void 0)return typeof R=="number"||typeof R=="boolean"?F[D]=R:ArrayBuffer.isView(R)?F[D]=R.slice():F[D]=R.clone(),!0;{const U=F[D];if(typeof R=="number"||typeof R=="boolean"){if(U!==R)return F[D]=R,!0}else{if(ArrayBuffer.isView(R))return!0;if(U.equals(R)===!1)return U.copy(R),!0}}return!1}function M(R){const F=R.uniforms;let D=0;const U=16;for(let w=0,N=F.length;w<N;w++){const J=Array.isArray(F[w])?F[w]:[F[w]];for(let X=0,j=J.length;X<j;X++){const B=J[X],O=Array.isArray(B.value)?B.value:[B.value],V=Array.isArray(F[w])||Array.isArray(B.value);let H=D;for(let ee=0,Y=O.length;ee<Y;ee++){const G=O[ee],$=A(G,V),P=D%U,K=P%$.boundary,we=P+K;D+=K,we!==0&&U-we<$.storage&&(D+=U-we),ee===0&&(H=D),D+=$.storage}const se=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new se((D-H)/Float32Array.BYTES_PER_ELEMENT),B.__offset=H}}const L=D%U;return L>0&&(D+=U-L),R.__size=D,R.__cache={},this}function A(R,F){const D={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(D.boundary=4,D.storage=4):R.isVector2?(D.boundary=8,D.storage=8):R.isVector3||R.isColor?(D.boundary=16,D.storage=12):R.isVector4?(D.boundary=16,D.storage=16):R.isMatrix3?(D.boundary=16,D.storage=48):R.isMatrix4?(D.boundary=16,D.storage=64):R.isTexture?bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(D.boundary=16,D.storage=R.byteLength):bt("WebGLRenderer: Unsupported uniform value type.",R),F===!0&&(D.boundary=16,D.storage=Math.ceil(D.storage/16)*16),D}function S(R){const F=R.target;F.removeEventListener("dispose",S),s.deleteBuffer(o[F.id]),delete o[F.id],delete l[F.id]}function b(){for(const R in o)s.deleteBuffer(o[R]);o={},l={}}return{bind:d,update:p,dispose:b}}const sM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vi=null;function aM(){return Vi===null&&(Vi=new ey(sM,16,16,xs,qi),Vi.name="DFG_LUT",Vi.minFilter=ei,Vi.magFilter=ei,Vi.wrapS=Qn,Vi.wrapT=Qn,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class oM{constructor(e={}){const{canvas:t=E_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:g=!1,outputBufferType:_=li}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const A=_,S=new Set([Sf,yf,_f]),b=new Set([li,Yi,ao,oa,xf,vf]),R=new Uint32Array(4),F=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]};let U=null,L=null;const w=[],N=[];let J=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let j=!1,B=null,O=null,V=null,H=null;this._outputColorSpace=oi;let se=0,ee=0,Y=null,G=-1,$=null;const P=new un,K=new un;let we=null;const k=new Nt(0);let ve=0,be=t.width,Ne=t.height,_e=1,Ue=null,ot=null;const Be=new un(0,0,be,Ne),Me=new un(0,0,be,Ne);let Ie=!1;const Ge=new lo,gt=new Ef;let vt=!1,Mt=!1;const Ut=new dn,an=new he,Dt=new un,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function on(){return Y===null?_e:1}let Q=r;function Zt(C,q){return t.getContext(C,q)}let Lt,kt,de,_t,Ye,st,z,E,ne,Re,Se,ke,Oe,me,xe,ge,I,re,ie,Te,Ae,Pe,$e;try{const C={alpha:!0,depth:o,stencil:l,antialias:p,premultipliedAlpha:u,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:y};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mf}`),t.addEventListener("webglcontextlost",Ke,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",ze,!1),Q===null){const q="webgl2";if(Q=Zt(q,C),Q===null)throw Zt(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ft()}catch(C){throw t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),jt("WebGLRenderer: "+C.message),C}function ft(){Lt=new ub(Q),Lt.init(),Ae=new Zw(Q,Lt),kt=new QS(Q,Lt,e,Ae),de=new qw(Q,Lt),kt.reversedDepthBuffer&&g&&de.buffers.depth.setReversed(!0),O=Q.createFramebuffer(),V=Q.createFramebuffer(),H=Q.createFramebuffer(),_t=new hb(Q),Ye=new zw,st=new Kw(Q,Lt,de,Ye,kt,Ae,_t),z=new cb(X),E=new my(Q),Pe=new ZS(Q,E),ne=new db(Q,E,_t,Pe),Re=new mb(Q,ne,E,Pe,_t),re=new pb(Q,kt,st),xe=new eb(Ye),Se=new Iw(X,z,Lt,kt,Pe,xe),ke=new iM(X,Ye),Oe=new kw,me=new Vw(Lt),I=new KS(X,z,de,Re,M,u),ge=new Yw(X,Re,kt),$e=new rM(Q,_t,kt,de),ie=new JS(Q,Lt,_t),Te=new fb(Q,Lt,_t),_t.programs=Se.programs,X.capabilities=kt,X.extensions=Lt,X.properties=Ye,X.renderLists=Oe,X.shadowMap=ge,X.state=de,X.info=_t}A!==li&&(J=new xb(A,t.width,t.height,p,o,l));const Ce=new tM(X,Q);this.xr=Ce,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const C=Lt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Lt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(C){C!==void 0&&(_e=C,this.setSize(be,Ne,!1))},this.getSize=function(C){return C.set(be,Ne)},this.setSize=function(C,q,ce=!0){if(Ce.isPresenting){bt("WebGLRenderer: Can't change size while VR device is presenting.");return}be=C,Ne=q,t.width=Math.floor(C*_e),t.height=Math.floor(q*_e),ce===!0&&(t.style.width=C+"px",t.style.height=q+"px"),J!==null&&J.setSize(t.width,t.height),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(be*_e,Ne*_e).floor()},this.setDrawingBufferSize=function(C,q,ce){be=C,Ne=q,_e=ce,t.width=Math.floor(C*ce),t.height=Math.floor(q*ce),this.setViewport(0,0,C,q)},this.setEffects=function(C){if(A===li){jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let q=0;q<C.length;q++)if(C[q].isOutputPass===!0){bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}J.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(Be)},this.setViewport=function(C,q,ce,oe){C.isVector4?Be.set(C.x,C.y,C.z,C.w):Be.set(C,q,ce,oe),de.viewport(P.copy(Be).multiplyScalar(on()).round())},this.getScissor=function(C){return C.copy(Me)},this.setScissor=function(C,q,ce,oe){C.isVector4?Me.set(C.x,C.y,C.z,C.w):Me.set(C,q,ce,oe),de.scissor(K.copy(Me).multiplyScalar(on()).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(C){de.setScissorTest(Ie=C)},this.setOpaqueSort=function(C){Ue=C},this.setTransparentSort=function(C){ot=C},this.getClearColor=function(C){return C.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,ce=!0){let oe=0;if(C){let ae=!1;if(Y!==null){const je=Y.texture.format;ae=S.has(je)}if(ae){const je=Y.texture.type,et=b.has(je),We=I.getClearColor(),Xe=I.getClearAlpha(),nt=We.r,xt=We.g,Et=We.b;et?(R[0]=nt,R[1]=xt,R[2]=Et,R[3]=Xe,Q.clearBufferuiv(Q.COLOR,0,R)):(F[0]=nt,F[1]=xt,F[2]=Et,F[3]=Xe,Q.clearBufferiv(Q.COLOR,0,F))}else oe|=Q.COLOR_BUFFER_BIT}q&&(oe|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(oe|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&Q.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),B=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),I.dispose(),Oe.dispose(),me.dispose(),st.dispose(),Ye.dispose(),z.dispose(),Re.dispose(),ne.dispose(),Pe.dispose(),$e.dispose(),Se.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Pt),Ce.removeEventListener("sessionend",St),Xt.stop()};function Ke(C){C.preventDefault(),f0("WebGLRenderer: Context Lost."),j=!0}function fe(){f0("WebGLRenderer: Context Restored."),j=!1;const C=_t.autoReset,q=ge.enabled,ce=ge.autoUpdate,oe=ge.needsUpdate,ae=ge.type;ft(),_t.autoReset=C,ge.enabled=q,ge.autoUpdate=ce,ge.needsUpdate=oe,ge.type=ae}function ze(C){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function lt(C){const q=C.target;q.removeEventListener("dispose",lt),mt(q)}function mt(C){ye(C),Ye.remove(C)}function ye(C){const q=Ye.get(C).programs;q!==void 0&&(q.forEach(function(ce){Se.releaseProgram(ce)}),C.isShaderMaterial&&Se.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,ce,oe,ae,je){q===null&&(q=$t);const et=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,We=pa(C,q,ce,oe,ae);de.setMaterial(oe,et);let Xe=ce.index,nt=1;if(oe.wireframe===!0){if(Xe=ne.getWireframeAttribute(ce),Xe===void 0)return;nt=2}const xt=ce.drawRange,Et=ce.attributes.position;let it=xt.start*nt,Ct=(xt.start+xt.count)*nt;je!==null&&(it=Math.max(it,je.start*nt),Ct=Math.min(Ct,(je.start+je.count)*nt)),Xe!==null?(it=Math.max(it,0),Ct=Math.min(Ct,Xe.count)):Et!=null&&(it=Math.max(it,0),Ct=Math.min(Ct,Et.count));const rn=Ct-it;if(rn<0||rn===1/0)return;Pe.setup(ae,oe,We,ce,Xe);let Yt,Wt=ie;if(Xe!==null&&(Yt=E.get(Xe),Wt=Te,Wt.setIndex(Yt)),ae.isMesh)oe.wireframe===!0?(de.setLineWidth(oe.wireframeLinewidth*on()),Wt.setMode(Q.LINES)):Wt.setMode(Q.TRIANGLES);else if(ae.isLine){let fn=oe.linewidth;fn===void 0&&(fn=1),de.setLineWidth(fn*on()),ae.isLineSegments?Wt.setMode(Q.LINES):ae.isLineLoop?Wt.setMode(Q.LINE_LOOP):Wt.setMode(Q.LINE_STRIP)}else ae.isPoints?Wt.setMode(Q.POINTS):ae.isSprite&&Wt.setMode(Q.TRIANGLES);if(ae.isBatchedMesh)if(Lt.get("WEBGL_multi_draw"))Wt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const fn=ae._multiDrawStarts,rt=ae._multiDrawCounts,_n=ae._multiDrawCount,ut=Xe?E.get(Xe).bytesPerElement:1,Ui=Ye.get(oe).currentProgram.getUniforms();for(let yn=0;yn<_n;yn++)Ui.setValue(Q,"_gl_DrawID",yn),Wt.render(fn[yn]/ut,rt[yn])}else if(ae.isInstancedMesh)Wt.renderInstances(it,rn,ae.count);else if(ce.isInstancedBufferGeometry){const fn=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,rt=Math.min(ce.instanceCount,fn);Wt.renderInstances(it,rn,rt)}else Wt.render(it,rn)};function Qe(C,q,ce,oe){B!==null&&C.isNodeMaterial&&B.setObject(oe,C),vt===!0&&xe.setState(C,ce,!1),C.transparent===!0&&C.side===Di&&C.forceSinglePass===!1?(C.side=In,C.needsUpdate=!0,Yr(C,q,oe),C.side=gs,C.needsUpdate=!0,Yr(C,q,oe),C.side=Di):Yr(C,q,oe)}this.compile=function(C,q,ce=null){ce===null&&(ce=C),B!==null&&B.renderStart(C,q,ce),L=me.get(ce),L.init(q),N.push(L),ce.traverseVisible(function(ae){ae.isLight&&ae.layers.test(q.layers)&&(L.pushLight(ae),ae.castShadow&&L.pushShadow(ae))}),C!==ce&&C.traverseVisible(function(ae){ae.isLight&&ae.layers.test(q.layers)&&(L.pushLight(ae),ae.castShadow&&L.pushShadow(ae))}),L.setupLights(),B!==null&&B.updateLights(L.state.lightsArray),Mt=this.localClippingEnabled,vt=xe.init(this.clippingPlanes,Mt),vt===!0&&xe.setGlobalState(this.clippingPlanes,q),B!==null&&ge.render(L.state.shadowsArray,ce,q);const oe=new Set;return C.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const je=ae.material;if(je)if(Array.isArray(je))for(let et=0;et<je.length;et++){const We=je[et];Qe(We,ce,q,ae),oe.add(We)}else Qe(je,ce,q,ae),oe.add(je)}),L=N.pop(),B!==null&&B.renderEnd(),oe},this.compileAsync=function(C,q,ce=null){const oe=this.compile(C,q,ce);return new Promise(ae=>{function je(){if(oe.forEach(function(et){const Xe=Ye.get(et).currentProgram;(Xe===void 0||Xe.isReady())&&oe.delete(et)}),oe.size===0){ae(C);return}setTimeout(je,10)}Lt.get("KHR_parallel_shader_compile")!==null?je():setTimeout(je,10)})};let Ve=null;function Ze(C){Ve&&Ve(C)}function Pt(){Xt.stop()}function St(){Xt.start()}const Xt=new Wm;Xt.setAnimationLoop(Ze),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(C){Ve=C,Ce.setAnimationLoop(C),C===null?Xt.stop():Xt.start()},Ce.addEventListener("sessionstart",Pt),Ce.addEventListener("sessionend",St),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;B!==null&&B.renderStart(C,q);const ce=Ce.enabled===!0&&Ce.isPresenting===!0,oe=J!==null&&(Y===null||ce)&&J.begin(X,Y);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(J===null||J.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(q),q=Ce.getCamera()),C.isScene===!0&&C.onBeforeRender(X,C,q,Y),L=me.get(C,N.length),L.init(q),L.state.textureUnits=st.getTextureUnits(),N.push(L),Ut.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),q.isArrayCamera?gt.setFromArrayCamera(q):Ge.setFromProjectionMatrix(Ut,Ii,q.reversedDepth),Mt=this.localClippingEnabled,vt=xe.init(this.clippingPlanes,Mt),U=Oe.get(C,w.length),U.init(),w.push(U),this.info.render.frame++,Ce.enabled===!0&&Ce.isPresenting===!0){const et=X.xr.getDepthSensingMesh();et!==null&&Jt(et,q,-1/0,X.sortObjects)}Jt(C,q,0,X.sortObjects),U.finish(),B!==null&&B.updateLights(L.state.lightsArray),X.sortObjects===!0&&U.sort(Ue,ot),Bt=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,Bt&&I.addToRenderList(U,C),this.info.autoReset===!0&&this.info.reset(),vt===!0&&xe.beginShadows();const ae=L.state.shadowsArray;if(ge.render(ae,C,q),vt===!0&&xe.endShadows(),(oe&&J.hasRenderPass())===!1){const et=U.opaque,We=U.transmissive;if(L.setupLights(),q.isArrayCamera){const Xe=q.cameras;if(We.length>0)for(let nt=0,xt=Xe.length;nt<xt;nt++){const Et=Xe[nt];xi(et,We,C,Et)}Bt&&I.render(C);for(let nt=0,xt=Xe.length;nt<xt;nt++){const Et=Xe[nt];zi(U,C,Et,Et.viewport)}}else We.length>0&&xi(et,We,C,q),Bt&&I.render(C),zi(U,C,q)}Y!==null&&ee===0&&(st.updateMultisampleRenderTarget(Y),st.updateRenderTargetMipmap(Y)),oe&&J.end(X),C.isScene===!0&&C.onAfterRender(X,C,q),Pe.resetDefaultState(),G=-1,$=null,N.pop(),N.length>0?(L=N[N.length-1],st.setTextureUnits(L.state.textureUnits),vt===!0&&xe.setGlobalState(X.clippingPlanes,L.state.camera)):L=null,w.pop(),w.length>0?U=w[w.length-1]:U=null,B!==null&&B.renderEnd()};function Jt(C,q,ce,oe){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)ce=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLight)L.pushLight(C),C.castShadow&&L.pushShadow(C);else if(C.isSprite){const et=q.isArrayCamera?gt:Ge;if(!C.frustumCulled||C.intersectsFrustum(et)){oe&&Dt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ut);const We=Re.update(C),Xe=C.material;Xe.visible&&U.push(C,We,Xe,ce,Dt.z,null,q)}}else if(C.isMesh||C.isLine||C.isPoints){const et=q.isArrayCamera?gt:Ge;if(!C.frustumCulled||C.intersectsFrustum(et)){const We=Re.update(C),Xe=C.material;if(oe&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Dt.copy(C.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),Dt.copy(We.boundingSphere.center)),Dt.applyMatrix4(C.matrixWorld).applyMatrix4(Ut)),Array.isArray(Xe)){const nt=We.groups;for(let xt=0,Et=nt.length;xt<Et;xt++){const it=nt[xt],Ct=Xe[it.materialIndex];Ct&&Ct.visible&&U.push(C,We,Ct,ce,Dt.z,it,q)}}else Xe.visible&&U.push(C,We,Xe,ce,Dt.z,null,q)}}}const je=C.children;for(let et=0,We=je.length;et<We;et++)Jt(je[et],q,ce,oe)}function zi(C,q,ce,oe){const{opaque:ae,transmissive:je,transparent:et}=C;L.setupLightsView(ce),vt===!0&&xe.setGlobalState(X.clippingPlanes,ce),oe&&de.viewport(P.copy(oe)),ae.length>0&&vi(ae,q,ce),je.length>0&&vi(je,q,ce),et.length>0&&vi(et,q,ce),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function xi(C,q,ce,oe){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[oe.id]===void 0){const it=Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[oe.id]=new Xi(1,1,{generateMipmaps:!0,type:it?qi:li,minFilter:Br,samples:Math.max(4,kt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ft.workingColorSpace})}const je=L.state.transmissionRenderTarget[oe.id],et=oe.viewport||P;je.setSize(et.z*X.transmissionResolutionScale,et.w*X.transmissionResolutionScale);const We=X.getRenderTarget(),Xe=X.getActiveCubeFace(),nt=X.getActiveMipmapLevel();X.setRenderTarget(je),X.getClearColor(k),ve=X.getClearAlpha(),ve<1&&X.setClearColor(16777215,.5),X.clear(),Bt&&I.render(ce);const xt=X.toneMapping;X.toneMapping=fr;const Et=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),L.setupLightsView(oe),vt===!0&&xe.setGlobalState(X.clippingPlanes,oe),vi(C,ce,oe),st.updateMultisampleRenderTarget(je),st.updateRenderTargetMipmap(je),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Ct=0,rn=q.length;Ct<rn;Ct++){const Yt=q[Ct],{object:Wt,geometry:fn,material:rt,group:_n}=Yt;if(rt.side===Di&&Wt.layers.test(oe.layers)){const ut=rt.side;rt.side=In,rt.needsUpdate=!0,Xr(Wt,ce,oe,fn,rt,_n),rt.side=ut,rt.needsUpdate=!0,it=!0}}it===!0&&(st.updateMultisampleRenderTarget(je),st.updateRenderTargetMipmap(je))}X.setRenderTarget(We,Xe,nt),X.setClearColor(k,ve),Et!==void 0&&(oe.viewport=Et),X.toneMapping=xt}function vi(C,q,ce){const oe=q.isScene===!0?q.overrideMaterial:null;for(let ae=0,je=C.length;ae<je;ae++){const et=C[ae],{object:We,geometry:Xe,group:nt}=et;let xt=et.material;xt.allowOverride===!0&&oe!==null&&(xt=oe),We.layers.test(ce.layers)&&Xr(We,q,ce,Xe,xt,nt)}}function Xr(C,q,ce,oe,ae,je){B!==null&&ae.isNodeMaterial&&B.setObject(C,ae),C.onBeforeRender(X,q,ce,oe,ae,je),C.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ae.onBeforeRender(X,q,ce,oe,C,je),ae.transparent===!0&&ae.side===Di&&ae.forceSinglePass===!1?(ae.side=In,ae.needsUpdate=!0,X.renderBufferDirect(ce,q,oe,ae,C,je),ae.side=gs,ae.needsUpdate=!0,X.renderBufferDirect(ce,q,oe,ae,C,je),ae.side=Di):X.renderBufferDirect(ce,q,oe,ae,C,je),C.onAfterRender(X,q,ce,oe,ae,je)}function ha(C){let q=0;for(const ce of C)ce.texture!==null&&q++;return q}function Yr(C,q,ce){q.isScene!==!0&&(q=$t);const oe=Ye.get(C),ae=L.state.lights,je=L.state.shadowsArray,et=ae.state.version,We=Se.getParameters(C,ae.state,je,q,ce,L.state.lightProbeGridArray),Xe=Se.getProgramCacheKey(We);let nt=oe.programs;oe.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?q.environment:null,oe.fog=q.fog;const xt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;oe.envMap=z.get(C.envMap||oe.environment,xt),oe.envMapRotation=oe.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,nt===void 0&&(C.addEventListener("dispose",lt),nt=new Map,oe.programs=nt,oe.programVariants=new Map);let Et=nt.get(Xe);if(Et!==void 0){if(oe.currentProgram===Et&&oe.lightsStateVersion===et)return go(C,We),Et}else We.uniforms=Se.getUniforms(C),B!==null&&C.isNodeMaterial&&B.build(C,ce,We),C.onBeforeCompile(We,X),Et=Se.acquireProgram(We,Xe),nt.set(Xe,Et),oe.uniforms=We.uniforms;const it=oe.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(it.clippingPlanes=xe.uniform),go(C,We),oe.needsLights=_s(C),oe.lightsStateVersion=et,oe.needsLights&&(it.ambientLightColor.value=ae.state.ambient,it.lightProbe.value=ae.state.probe,it.sunLights.value=ae.state.sun,it.sunLightShadows.value=ae.state.sunShadow,it.directionalLights.value=ae.state.directional,it.directionalLightShadows.value=ae.state.directionalShadow,it.spotLights.value=ae.state.spot,it.spotLightShadows.value=ae.state.spotShadow,it.rectAreaLights.value=ae.state.rectArea,it.ltc_1.value=ae.state.rectAreaLTC1,it.ltc_2.value=ae.state.rectAreaLTC2,it.pointLights.value=ae.state.point,it.pointLightShadows.value=ae.state.pointShadow,it.hemisphereLights.value=ae.state.hemi,it.sunShadowMatrix.value=ae.state.sunShadowMatrix,it.sunShadowCascade.value=ae.state.sunShadowCascade,it.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,it.spotLightMatrix.value=ae.state.spotLightMatrix,it.spotLightMap.value=ae.state.spotLightMap,it.pointShadowMatrix.value=ae.state.pointShadowMatrix),oe.numLightProbeGrids=ha(L.state.lightProbeGridArray),oe.currentProgram=Et,oe.uniformsList=null,Et}function dc(C,q,ce,oe,ae){const je=Ye.get(C),et=je.currentProgram.id+","+oe+","+ae;let We=je.programVariants.get(et);return We===void 0?(We=Yr(C,q,ce),je.programVariants.set(et,We)):(je.currentProgram=We,je.uniformsList=null,je.outputColorSpace=oe,je.toneMapping=ae),We}function nn(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=Kl.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function go(C,q){const ce=Ye.get(C);ce.outputColorSpace=q.outputColorSpace,ce.batching=q.batching,ce.batchingColor=q.batchingColor,ce.instancing=q.instancing,ce.instancingColor=q.instancingColor,ce.instancingMorph=q.instancingMorph,ce.skinning=q.skinning,ce.morphTargets=q.morphTargets,ce.morphNormals=q.morphNormals,ce.morphColors=q.morphColors,ce.morphTargetsCount=q.morphTargetsCount,ce.numClippingPlanes=q.numClippingPlanes,ce.numIntersection=q.numClipIntersection,ce.vertexAlphas=q.vertexAlphas,ce.vertexTangents=q.vertexTangents,ce.toneMapping=q.toneMapping}function pa(C,q,ce,oe,ae){q.isScene!==!0&&(q=$t),st.resetTextureUnits();const je=q.fog,et=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?q.environment:null,We=Y===null?X.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Ft.workingColorSpace,Xe=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,nt=z.get(oe.envMap||et,Xe),xt=oe.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,Et=!!ce.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),it=!!ce.morphAttributes.position,Ct=!!ce.morphAttributes.normal,rn=!!ce.morphAttributes.color;let Yt=fr;oe.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Yt=X.toneMapping);const Wt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,fn=Wt!==void 0?Wt.length:0,rt=Ye.get(oe),_n=L.state.lights;if(vt===!0&&(Mt===!0||C!==$)){const Gt=C===$&&oe.id===G;xe.setState(oe,C,Gt)}let ut=!1,Ui=!1;oe.version===rt.__version?rt.needsLights&&rt.lightsStateVersion!==_n.state.version||ae.isBatchedMesh&&rt.batching===!1||!ae.isBatchedMesh&&rt.batching===!0||ae.isBatchedMesh&&rt.batchingColor===!0&&ae._colorsTexture===null||ae.isBatchedMesh&&rt.batchingColor===!1&&ae._colorsTexture!==null||ae.isInstancedMesh&&rt.instancing===!1||!ae.isInstancedMesh&&rt.instancing===!0||ae.isSkinnedMesh&&rt.skinning===!1||!ae.isSkinnedMesh&&rt.skinning===!0||ae.isInstancedMesh&&rt.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&rt.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&rt.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&rt.instancingMorph===!1&&ae.morphTexture!==null||rt.envMap!==nt||oe.fog===!0&&rt.fog!==je||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==xe.numPlanes||rt.numIntersection!==xe.numIntersection)||rt.vertexAlphas!==xt||rt.vertexTangents!==Et||rt.morphTargets!==it||rt.morphNormals!==Ct||rt.morphColors!==rn||rt.morphTargetsCount!==fn||rt.numLightProbeGrids!==ha(L.state.lightProbeGridArray)?ut=!0:(rt.outputColorSpace!==We||rt.toneMapping!==Yt)&&(Ui=!0):(ut=!0,rt.__version=oe.version);let yn=rt.currentProgram;(ut===!0||Ui===!0)&&(yn=Ui===!0?dc(oe,q,ae,We,Yt):Yr(oe,q,ae),B&&oe.isNodeMaterial&&B.onUpdateProgram(oe,yn,rt));let pr=!1,_i=!1,ki=!1;const It=yn.getUniforms(),pn=rt.uniforms;if(de.useProgram(yn.program)&&(pr=!0,_i=!0,ki=!0),oe.id!==G&&(G=oe.id,_i=!0),pr||$!==C){de.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),It.setValue(Q,"projectionMatrix",C.projectionMatrix),It.setValue(Q,"viewMatrix",C.matrixWorldInverse);const Kt=It.map.cameraPosition;Kt!==void 0&&Kt.setValue(Q,an.setFromMatrixPosition(C.matrixWorld)),kt.logarithmicDepthBuffer&&It.setValue(Q,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&It.setValue(Q,"isOrthographic",C.isOrthographicCamera===!0),$!==C&&($=C,_i=!0,ki=!0)}if(rt.needsLights&&(_n.state.sunShadowMap.length>0&&It.setValue(Q,"sunShadowMap",_n.state.sunShadowMap,st),_n.state.directionalShadowMap.length>0&&It.setValue(Q,"directionalShadowMap",_n.state.directionalShadowMap,st),_n.state.spotShadowMap.length>0&&It.setValue(Q,"spotShadowMap",_n.state.spotShadowMap,st),_n.state.pointShadowMap.length>0&&It.setValue(Q,"pointShadowMap",_n.state.pointShadowMap,st)),ae.isSkinnedMesh){It.setOptional(Q,ae,"bindMatrix"),It.setOptional(Q,ae,"bindMatrixInverse");const Gt=ae.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),It.setValue(Q,"boneTexture",Gt.boneTexture,st))}ae.isBatchedMesh&&(It.setOptional(Q,ae,"batchingTexture"),It.setValue(Q,"batchingTexture",ae._matricesTexture,st),It.setOptional(Q,ae,"batchingIdTexture"),It.setValue(Q,"batchingIdTexture",ae._indirectTexture,st),It.setOptional(Q,ae,"batchingColorTexture"),ae._colorsTexture!==null&&It.setValue(Q,"batchingColorTexture",ae._colorsTexture,st));const zn=ce.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&re.update(ae,ce,yn),(_i||rt.receiveShadow!==ae.receiveShadow)&&(rt.receiveShadow=ae.receiveShadow,It.setValue(Q,"receiveShadow",ae.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&q.environment!==null&&(pn.envMapIntensity.value=q.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=aM()),_i){if(It.setValue(Q,"toneMappingExposure",X.toneMappingExposure),rt.needsLights&&xo(pn,ki),je&&oe.fog===!0&&ke.refreshFogUniforms(pn,je),ke.refreshMaterialUniforms(pn,oe,_e,Ne,L.state.transmissionRenderTarget[C.id]),rt.needsLights&&rt.numLightProbeGrids>0){const Gt=D;let Kt=0;for(const En of L.state.lightProbeGridArray)En.texture!==null&&(Gt.textures[Kt]=En.texture,Gt.min[Kt]=En.boundingBox.min,Gt.max[Kt]=En.boundingBox.max,Gt.resolution[Kt]=En.resolution,Kt++);for(const En in Gt)Gt[En].length=Kt;pn.probesSH.value=Gt.textures,pn.probesMin.value=Gt.min,pn.probesMax.value=Gt.max,pn.probesResolution.value=Gt.resolution}Kl.upload(Q,nn(rt),pn,st)}if(oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Kl.upload(Q,nn(rt),pn,st),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&It.setValue(Q,"center",ae.center),It.setValue(Q,"modelViewMatrix",ae.modelViewMatrix),It.setValue(Q,"normalMatrix",ae.normalMatrix),It.setValue(Q,"modelMatrix",ae.matrixWorld),oe.uniformsGroups!==void 0){const Gt=oe.uniformsGroups;for(let Kt=0,En=Gt.length;Kt<En;Kt++){const mr=Gt[Kt];$e.update(mr,yn),$e.bind(mr,yn)}}return yn}function xo(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.sunLights.needsUpdate=q,C.sunLightShadows.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function _s(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(C,q,ce){const oe=Ye.get(C);oe.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),Ye.get(C.texture).__webglTexture=q,Ye.get(C.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:ce,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const ce=Ye.get(C);ce.__webglFramebuffer=q,ce.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(C,q=0,ce=0){Y=C,se=q,ee=ce;let oe=null,ae=!1,je=!1;if(C){const We=Ye.get(C);if(We.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(Q.FRAMEBUFFER,We.__webglFramebuffer),P.copy(C.viewport),K.copy(C.scissor),we=C.scissorTest,de.viewport(P),de.scissor(K),de.setScissorTest(we),G=-1;return}else if(We.__webglFramebuffer===void 0)st.setupRenderTarget(C);else if(We.__hasExternalTextures)st.rebindTextures(C,Ye.get(C.texture).__webglTexture,Ye.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const xt=C.depthTexture;if(We.__boundDepthTexture!==xt){if(xt!==null&&Ye.has(xt)&&(C.width!==xt.image.width||C.height!==xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(C)}}const Xe=C.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(je=!0);const nt=Ye.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(nt[q])?oe=nt[q][ce]:oe=nt[q],ae=!0):C.samples>0&&st.useMultisampledRTT(C)===!1?oe=Ye.get(C).__webglMultisampledFramebuffer:Array.isArray(nt)?oe=nt[ce]:oe=nt,P.copy(C.viewport),K.copy(C.scissor),we=C.scissorTest}else P.copy(Be).multiplyScalar(_e).floor(),K.copy(Me).multiplyScalar(_e).floor(),we=Ie;if(ce!==0&&(oe=O),de.bindFramebuffer(Q.FRAMEBUFFER,oe)&&de.drawBuffers(C,oe),de.viewport(P),de.scissor(K),de.setScissorTest(we),ae){const We=Ye.get(C.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+q,We.__webglTexture,ce)}else if(je){const We=q;for(let Xe=0;Xe<C.textures.length;Xe++){const nt=Ye.get(C.textures[Xe]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+Xe,nt.__webglTexture,ce,We)}}else if(C!==null&&ce!==0){const We=Ye.get(C.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,We.__webglTexture,ce)}G=-1};function vo(C){const q=Ye.get(C);return(q.__readFormat!==C.format||q.__readType!==C.type)&&(q.__readFormat=C.format,q.__readType=C.type,q.__formatReadable=kt.textureFormatReadable(C.format),q.__typeReadable=kt.textureTypeReadable(C.type)),q}this.readRenderTargetPixels=function(C,q,ce,oe,ae,je,et,We=0){if(!(C&&C.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=Ye.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&et!==void 0&&(Xe=Xe[et],Array.isArray(Xe)&&(Xe=Xe[0])),Xe){de.bindFramebuffer(Q.FRAMEBUFFER,Xe);try{const nt=C.textures[We],xt=nt.format,Et=nt.type;C.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+We);const it=vo(nt);if(it.__formatReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(it.__typeReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-oe&&ce>=0&&ce<=C.height-ae&&Q.readPixels(q,ce,oe,ae,Ae.convert(xt),Ae.convert(Et),je)}finally{const nt=Y!==null?Ye.get(Y).__webglFramebuffer:null;de.bindFramebuffer(Q.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(C,q,ce,oe,ae,je,et,We=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=Ye.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&et!==void 0&&(Xe=Xe[et],Array.isArray(Xe)&&(Xe=Xe[0])),Xe)if(q>=0&&q<=C.width-oe&&ce>=0&&ce<=C.height-ae){de.bindFramebuffer(Q.FRAMEBUFFER,Xe);const nt=C.textures[We],xt=nt.format,Et=nt.type;C.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+We);const it=vo(nt);if(it.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(it.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ct=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Ct),Q.bufferData(Q.PIXEL_PACK_BUFFER,je.byteLength,Q.STREAM_READ),Q.readPixels(q,ce,oe,ae,Ae.convert(xt),Ae.convert(Et),0),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null);const rn=Y!==null?Ye.get(Y).__webglFramebuffer:null;de.bindFramebuffer(Q.FRAMEBUFFER,rn);const Yt=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await T_(Q,Yt,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Ct),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,je),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null),Q.deleteBuffer(Ct),Q.deleteSync(Yt),je}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,ce=0){const oe=Math.pow(2,-ce),ae=Math.floor(C.image.width*oe),je=Math.floor(C.image.height*oe),et=q!==null?q.x:0,We=q!==null?q.y:0;st.setTexture2D(C,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,ce,0,0,et,We,ae,je),de.unbindTexture()},this.copyTextureToTexture=function(C,q,ce=null,oe=null,ae=0,je=0){let et,We,Xe,nt,xt,Et,it,Ct,rn;const Yt=C.isCompressedTexture?C.mipmaps[je]:C.image;if(ce!==null)et=ce.max.x-ce.min.x,We=ce.max.y-ce.min.y,Xe=ce.isBox3?ce.max.z-ce.min.z:1,nt=ce.min.x,xt=ce.min.y,Et=ce.isBox3?ce.min.z:0;else{const It=Math.pow(2,-ae);et=Math.floor(Yt.width*It),We=Math.floor(Yt.height*It),C.isDataArrayTexture?Xe=Yt.depth:C.isData3DTexture?Xe=Math.floor(Yt.depth*It):Xe=1,nt=0,xt=0,Et=0}oe!==null?(it=oe.x,Ct=oe.y,rn=oe.z):(it=0,Ct=0,rn=0);const Wt=Ae.convert(q.format),fn=Ae.convert(q.type);let rt;q.isData3DTexture?(st.setTexture3D(q,0),rt=Q.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(st.setTexture2DArray(q,0),rt=Q.TEXTURE_2D_ARRAY):(st.setTexture2D(q,0),rt=Q.TEXTURE_2D),de.activeTexture(Q.TEXTURE0),de.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,q.flipY),de.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),de.pixelStorei(Q.UNPACK_ALIGNMENT,q.unpackAlignment);const _n=de.getParameter(Q.UNPACK_ROW_LENGTH),ut=de.getParameter(Q.UNPACK_IMAGE_HEIGHT),Ui=de.getParameter(Q.UNPACK_SKIP_PIXELS),yn=de.getParameter(Q.UNPACK_SKIP_ROWS),pr=de.getParameter(Q.UNPACK_SKIP_IMAGES);de.pixelStorei(Q.UNPACK_ROW_LENGTH,Yt.width),de.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Yt.height),de.pixelStorei(Q.UNPACK_SKIP_PIXELS,nt),de.pixelStorei(Q.UNPACK_SKIP_ROWS,xt),de.pixelStorei(Q.UNPACK_SKIP_IMAGES,Et);const _i=C.isDataArrayTexture||C.isData3DTexture,ki=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const It=Ye.get(C),pn=Ye.get(q),zn=Ye.get(It.__renderTarget),Gt=Ye.get(pn.__renderTarget);de.bindFramebuffer(Q.READ_FRAMEBUFFER,zn.__webglFramebuffer),de.bindFramebuffer(Q.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let Kt=0;Kt<Xe;Kt++)_i&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Ye.get(C).__webglTexture,ae,Et+Kt),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Ye.get(q).__webglTexture,je,rn+Kt)),Q.blitFramebuffer(nt,xt,nt+et,xt+We,it,Ct,it+et,Ct+We,Q.DEPTH_BUFFER_BIT,Q.NEAREST);de.bindFramebuffer(Q.READ_FRAMEBUFFER,null),de.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(ae!==0||C.isRenderTargetTexture||Ye.has(C)){const It=Ye.get(C),pn=Ye.get(q);de.bindFramebuffer(Q.READ_FRAMEBUFFER,V),de.bindFramebuffer(Q.DRAW_FRAMEBUFFER,H);for(let zn=0;zn<Xe;zn++)_i?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,It.__webglTexture,ae,Et+zn):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,It.__webglTexture,ae),ki?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,pn.__webglTexture,je,rn+zn):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,pn.__webglTexture,je),ae!==0?Q.blitFramebuffer(nt,xt,nt+et,xt+We,it,Ct,it+et,Ct+We,Q.COLOR_BUFFER_BIT,Q.NEAREST):ki?Q.copyTexSubImage3D(rt,je,it,Ct,rn+zn,nt,xt,et,We):Q.copyTexSubImage2D(rt,je,it,Ct,nt,xt,et,We);de.bindFramebuffer(Q.READ_FRAMEBUFFER,null),de.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else ki?C.isDataTexture||C.isData3DTexture?Q.texSubImage3D(rt,je,it,Ct,rn,et,We,Xe,Wt,fn,Yt.data):q.isCompressedArrayTexture?Q.compressedTexSubImage3D(rt,je,it,Ct,rn,et,We,Xe,Wt,Yt.data):Q.texSubImage3D(rt,je,it,Ct,rn,et,We,Xe,Wt,fn,Yt):C.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,je,it,Ct,et,We,Wt,fn,Yt.data):C.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,je,it,Ct,Yt.width,Yt.height,Wt,Yt.data):Q.texSubImage2D(Q.TEXTURE_2D,je,it,Ct,et,We,Wt,fn,Yt);de.pixelStorei(Q.UNPACK_ROW_LENGTH,_n),de.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,ut),de.pixelStorei(Q.UNPACK_SKIP_PIXELS,Ui),de.pixelStorei(Q.UNPACK_SKIP_ROWS,yn),de.pixelStorei(Q.UNPACK_SKIP_IMAGES,pr),je===0&&q.generateMipmaps===!0&&q.mipmapsAutoUpdate===!0&&Q.generateMipmap(rt),de.unbindTexture()},this.initRenderTarget=function(C){Ye.get(C).__webglFramebuffer===void 0&&st.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?st.setTextureCube(C,0):C.isData3DTexture?st.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?st.setTexture2DArray(C,0):st.setTexture2D(C,0),de.unbindTexture()},this.resetState=function(){se=0,ee=0,Y=null,de.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ft._getUnpackColorSpace()}}function lM(s,e){const t=document.createElement("canvas");t.width=2048,t.height=1024;const r=t.getContext("2d");let o;e?s==="celestial-cyan"?o=["#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#f0f9ff","#dbeafe"]:s==="supernova-sunset"?o=["#fff1f2","#fecdd3","#fda4af","#fb7185","#e11d48","#9f1239","#fff7ed","#fed7aa"]:s==="nocturne-silver"?o=["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#71717a","#ffffff","#e4e4e7"]:s==="cyberpunk-neon"?o=["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#d946ef","#c026d3","#a21caf"]:s==="solar-gold"?o=["#fffbeb","#fef3c7","#fde68a","#fcd34d","#f59e0b","#d97706","#b45309","#78350f"]:s==="emerald-aurora"?o=["#f0fdf4","#dcfce7","#bbf7d0","#86efac","#4ade80","#22c55e","#16a34a","#15803d"]:s==="pure-pitch-black"?o=["#ffffff","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#71717a","#3f3f46","#18181b"]:o=["#fffbeb","#fef3c7","#fde68a","#fcd34d","#f59e0b","#d97706","#fff7ed","#ffedd5"]:s==="celestial-cyan"?o=["#020b14","#041d33","#083358","#0e4a7d","#0284c7","#38bdf8","#075985","#0c4a6e","#06b6d4"]:s==="supernova-sunset"?o=["#12040d","#2b061c","#4a0a2f","#771146","#be123c","#f43f5e","#ea580c","#fb923c","#450a22"]:s==="nocturne-silver"?o=["#060609","#111119","#1e1e2d","#2f2f45","#4d4d6e","#7b7b9e","#a6a6c7","#252538","#d4d4e8"]:s==="cyberpunk-neon"?o=["#080014","#16002c","#2c004d","#550080","#9333ea","#db2777","#f43f5e","#06b6d4","#22d3ee"]:s==="solar-gold"?o=["#0d0500","#1f0c00","#3b1700","#5e2500","#92400e","#d97706","#f59e0b","#fbbf24","#fef08a"]:s==="emerald-aurora"?o=["#020d06","#052110","#0a381d","#14532d","#16a34a","#22c55e","#4ade80","#10b981","#34d399"]:s==="pure-pitch-black"?o=["#000000","#050505","#0a0a0a","#121212","#1a1a1a","#262626","#404040","#737373","#a3a3a3"]:o=["#080415","#150933","#270e59","#3e1785","#5b21b6","#7c3aed","#a855f7","#c084fc","#2e1065","#d8b4fe"];const l=r.createLinearGradient(0,0,0,t.height);o.forEach((g,_)=>{l.addColorStop(_/(o.length-1),g)}),r.fillStyle=l,r.fillRect(0,0,t.width,t.height);const d=72;for(let g=0;g<d;g++){const M=g/d*t.height,A=t.height/d*(1.2+Math.sin(g*.7)*.5),S=o[g*3%o.length];r.fillStyle=S,r.globalAlpha=.25+Math.sin(g*.9)*.2,r.beginPath(),r.moveTo(0,M);const b=32;for(let R=0;R<=b;R++){const F=R/b*t.width,D=Math.sin(R*.8+g*1.5)*7+Math.cos(R*1.6+g*2.1)*4;r.lineTo(F,M+D)}r.lineTo(t.width,M+A),r.lineTo(0,M+A),r.closePath(),r.fill()}r.globalAlpha=e?.25:.4,r.fillStyle="#ffffff";for(let g=0;g<48;g++){const _=Math.random()*t.width,M=Math.random()*t.height,A=60+Math.random()*180,S=1.5+Math.random()*3.5;r.beginPath(),r.ellipse(_,M,A,S,Math.sin(M*.05)*.15,0,Math.PI*2),r.fill()}const p=t.width*.62,u=t.height*.58,m=85,v=r.createRadialGradient(p,u,5,p,u,m);e?(v.addColorStop(0,"#ffffff"),v.addColorStop(.4,o[o.length-2]),v.addColorStop(.8,o[o.length-1]),v.addColorStop(1,"rgba(255,255,255,0)")):(v.addColorStop(0,"#ffffff"),v.addColorStop(.3,o[o.length-3]||"#c084fc"),v.addColorStop(.7,o[o.length-1]||"#7c3aed"),v.addColorStop(1,"rgba(0,0,0,0)")),r.globalAlpha=.85,r.fillStyle=v,r.beginPath(),r.ellipse(p,u,m*1.6,m*.8,-.15,0,Math.PI*2),r.fill(),r.strokeStyle=e?"rgba(200, 150, 100, 0.45)":"rgba(255, 255, 255, 0.60)",r.lineWidth=2.5;for(let g=0;g<3;g++){r.beginPath();for(let _=0;_<Math.PI*2;_+=.2){const M=_/(Math.PI*2)*m*.7,A=p+Math.cos(_+g*2.1)*M*1.5,S=u+Math.sin(_+g*2.1)*M*.7;_===0?r.moveTo(A,S):r.lineTo(A,S)}r.stroke()}const y=new lc(t);return y.wrapS=aa,y.wrapT=Qn,y}function cM(s,e){const t=document.createElement("canvas");t.width=1024,t.height=64;const r=t.getContext("2d");r.clearRect(0,0,t.width,t.height);let o,l;e?(o="rgba(217, 119, 6, 0.45)",l="rgba(245, 158, 11, 0.85)"):s==="celestial-cyan"?(o="rgba(56, 189, 248, 0.45)",l="rgba(186, 230, 253, 0.90)"):s==="supernova-sunset"?(o="rgba(251, 146, 60, 0.45)",l="rgba(254, 205, 211, 0.90)"):s==="nocturne-silver"?(o="rgba(212, 212, 216, 0.45)",l="rgba(255, 255, 255, 0.90)"):s==="cyberpunk-neon"?(o="rgba(6, 182, 212, 0.50)",l="rgba(244, 63, 94, 0.95)"):s==="solar-gold"?(o="rgba(245, 158, 11, 0.50)",l="rgba(254, 240, 138, 0.95)"):s==="emerald-aurora"?(o="rgba(16, 185, 129, 0.45)",l="rgba(110, 231, 183, 0.90)"):s==="pure-pitch-black"?(o="rgba(115, 115, 115, 0.35)",l="rgba(245, 245, 245, 0.90)"):(o="rgba(192, 132, 252, 0.50)",l="rgba(243, 232, 255, 0.92)");for(let p=0;p<t.width;p++){const u=p/t.width;let m=0;u<.22?m=.12+Math.sin(u*60)*.08:u>=.22&&u<.65?m=.75+Math.sin(u*120)*.18+Math.cos(u*240)*.06:u>=.65&&u<.72?m=.02:u>=.72&&u<.95?u>.85&&u<.87?m=.05:m=.55+Math.sin(u*100)*.15:m=.2+Math.sin(u*200)*.15,r.fillStyle=m>.6?l:o,r.globalAlpha=Math.max(0,Math.min(1,m)),r.fillRect(p,0,1,t.height)}const d=new lc(t);return d.wrapS=Qn,d.wrapT=Qn,d}function uM(s){const e=document.createElement("canvas");e.width=2048,e.height=1024;const t=e.getContext("2d");t.fillStyle=s?"#d6d3d1":"#888899",t.fillRect(0,0,e.width,e.height),t.fillStyle=s?"#a8a29e":"#474755",[{x:.35,y:.4,rx:240,ry:160},{x:.55,y:.35,rx:280,ry:190},{x:.7,y:.45,rx:200,ry:140},{x:.4,y:.65,rx:220,ry:150},{x:.6,y:.6,rx:260,ry:180}].forEach(d=>{t.globalAlpha=.65,t.beginPath(),t.ellipse(d.x*e.width,d.y*e.height,d.rx,d.ry,.2,0,Math.PI*2),t.fill()});const o=320;for(let d=0;d<o;d++){const p=Math.random()*e.width,u=Math.random()*e.height,m=4+Math.random()*32;if(t.globalAlpha=.55,t.fillStyle=s?"#57534e":"#22222a",t.beginPath(),t.arc(p,u,m,0,Math.PI*2),t.fill(),t.globalAlpha=.7,t.strokeStyle=s?"#ffffff":"#e2e8f0",t.lineWidth=Math.max(1,m*.2),t.beginPath(),t.arc(p,u,m,Math.PI*.75,Math.PI*1.75),t.stroke(),m>24){t.globalAlpha=.25,t.strokeStyle=s?"#ffffff":"#cbd5e1",t.lineWidth=1;for(let v=0;v<8;v++){const y=v/8*Math.PI*2,g=m*(3+Math.random()*5);t.beginPath(),t.moveTo(p+Math.cos(y)*m,u+Math.sin(y)*m),t.lineTo(p+Math.cos(y)*g,u+Math.sin(y)*g),t.stroke()}}}const l=new lc(e);return l.wrapS=aa,l.wrapT=Qn,l}function dM(s){const e=document.createElement("canvas");e.width=2048,e.height=1024;const t=e.getContext("2d");t.fillStyle=s?"#991b1b":"#450a0a",t.fillRect(0,0,e.width,e.height),t.fillStyle=s?"#7f1d1d":"#1c0404",[{x:.35,y:.4,rx:240,ry:160},{x:.55,y:.35,rx:280,ry:190},{x:.7,y:.45,rx:200,ry:140},{x:.4,y:.65,rx:220,ry:150},{x:.6,y:.6,rx:260,ry:180}].forEach(d=>{t.globalAlpha=.75,t.beginPath(),t.ellipse(d.x*e.width,d.y*e.height,d.rx,d.ry,.2,0,Math.PI*2),t.fill()});const o=280;for(let d=0;d<o;d++){const p=Math.random()*e.width,u=Math.random()*e.height,m=4+Math.random()*30;t.globalAlpha=.6,t.fillStyle="#1c0404",t.beginPath(),t.arc(p,u,m,0,Math.PI*2),t.fill(),t.globalAlpha=.85,t.strokeStyle="#f87171",t.lineWidth=Math.max(1,m*.2),t.beginPath(),t.arc(p,u,m,Math.PI*.75,Math.PI*1.75),t.stroke()}const l=new lc(e);return l.wrapS=aa,l.wrapT=Qn,l}const fM=()=>{const s=Ee.useRef(null),{wallpaperSettings:e,appTheme:t}=$r(),r=e.celestialBody||"ringed-planet",o=e.palette||"cosmic-royal",l=t==="light";return Ee.useEffect(()=>{if(!s.current)return;if(r==="none"){s.current.innerHTML="";return}const d=s.current;d.innerHTML="";const p=d.clientWidth||window.innerWidth,u=d.clientHeight||window.innerHeight,m=p<768,v=new j_,y=new Pi(45,p/u,.1,100);y.position.set(0,0,10);const g=new oM({alpha:!0,antialias:!0,powerPreference:"high-performance"});g.setSize(p,u),g.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),g.outputColorSpace=oi,d.appendChild(g.domElement);const _=new dy(l?16775149:16777215,l?2.8:2.5);v.add(_);const M=new fy(l?14870768:o==="celestial-cyan"?662832:o==="cyberpunk-neon"?2031672:o==="solar-gold"?2363651:o==="emerald-aurora"?270096:o==="pure-pitch-black"?197379:1577516,l?.7:.4);v.add(M);const A=new Qa;v.add(A);let S=3.4,b=1.8,R=.65;const F=e.celestialPosition||"default";F==="upper-right"?(S=m?1.2:3.4,b=m?2.3:1.8,_.position.set(-8,5,4)):F==="upper-left"?(S=m?-1.2:-3.3,b=m?2.5:2,_.position.set(-8,2,-2)):F==="zenith-center"?(S=0,b=m?2.5:2.4,_.position.set(0,0,4)):r==="ringed-planet"||r==="pulsar-star"?(S=m?1.2:3.4,b=m?2.3:1.8,R=m?.48:.68,_.position.set(-8,5,4)):r==="crescent-moon"||r==="blood-moon"?(S=m?-1.2:-3.3,b=m?2.5:2,R=m?.42:.6,_.position.set(-8,2,-2)):r==="eclipse-corona"&&(S=0,b=m?2.5:2.4,R=m?.45:.64,_.position.set(0,0,4));const D=e.celestialScaleMultiplier||1;R*=D,A.position.set(S,b,0),A.scale.set(R,R,R);let U=0,L=0,w=0,N=0;const J=Y=>{const G=Y.clientX/window.innerWidth*2-1;U=(-(Y.clientY/window.innerHeight)*2+1)*.18,L=G*.25};window.addEventListener("mousemove",J,{passive:!0});let X=null,j=null,B=null,O=null;if(r==="ringed-planet"){const Y=new Ri(1,64,64),G=lM(o,l),$=new Fl({map:G,roughness:.55,metalness:.08});X=new vn(Y,$),A.add(X);const P=new Ri(1.04,48,48),K=new gi({vertexShader:`
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
        `,uniforms:{glowColor:{value:new Nt(l?o==="celestial-cyan"?165063:14251782:o==="celestial-cyan"?3718648:o==="supernova-sunset"?16007006:11032055)}},transparent:!0,blending:hs,side:In}),we=new vn(P,K);A.add(we);const k=new Cf(1.35,2.85,128),ve=k.attributes.position,be=k.attributes.uv;for(let Be=0;Be<ve.count;Be++){const Me=ve.getX(Be),Ie=ve.getY(Be),gt=(Math.sqrt(Me*Me+Ie*Ie)-1.35)/(2.85-1.35);be.setXY(Be,gt,.5)}be.needsUpdate=!0;const Ne=cM(o,l),_e=new Fl({map:Ne,side:Di,transparent:!0,opacity:.92,roughness:.45,metalness:.05});j=new vn(k,_e),j.rotation.x=Math.PI*.48,j.rotation.y=-.15,A.add(j);const Ue=new Ri(.11,24,24),ot=new Fl({color:l?14078929:13095678,roughness:.8});B=new vn(Ue,ot),A.add(B),A.rotation.z=-.42}else if(r==="crescent-moon"){const Y=new Ri(1,64,64),G=uM(l),$=new gi({vertexShader:`
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
        `,uniforms:{moonTexture:{value:G},sunDir:{value:new he(-1.6,.35,-.65).normalize()},sunlitColor:{value:new Nt(l?16776171:16710083)},earthshineColor:{value:new Nt(l?9741240:6583435)},earthshineAlpha:{value:l?.07:.05}},transparent:!0});X=new vn(Y,$),A.add(X);const P=new Ri(1.04,48,48),K=new gi({vertexShader:`
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
        `,uniforms:{sunDir:{value:new he(-1.6,.35,-.65).normalize()},glowColor:{value:new Nt(l?16096779:16707722)}},transparent:!0,blending:hs,side:In}),we=new vn(P,K);A.add(we),A.rotation.y=.45,A.rotation.z=-.22}else if(r==="eclipse-corona"){const Y=new po(3.8,3.8),G=new gi({vertexShader:`
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
        `,uniforms:{uTime:{value:0},uColor:{value:new Nt(l?14251782:16638023)}},transparent:!0,blending:hs,depthWrite:!1});O=new vn(Y,G),A.add(O);const $=new Ri(.96,48,48),P=new ql({color:l?1579035:328970});X=new vn($,P),A.add(X)}else if(r==="blood-moon"){const Y=new Ri(1,64,64),G=dM(l),$=new Fl({map:G,roughness:.7,metalness:.05});X=new vn(Y,$),A.add(X);const P=new Ri(1.05,48,48),K=new gi({vertexShader:`
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
        `,transparent:!0,blending:hs,side:In}),we=new vn(P,K);A.add(we),A.rotation.y=.5,A.rotation.z=-.2}else if(r==="pulsar-star"){const Y=new Ri(.72,48,48),G=new ql({color:l?165063:14742270});X=new vn(Y,G),A.add(X);const $=new Af(1.4,5,32,1,!0),P=new ql({color:l?223649:3718648,transparent:!0,opacity:.5,side:Di,blending:hs}),K=new vn($,P);K.position.y=2.6,A.add(K);const we=new vn($,P);we.position.y=-2.6,we.rotation.x=Math.PI,A.add(we),O=K}let V;const H=performance.now(),se=()=>{V=requestAnimationFrame(se);const Y=(performance.now()-H)*.001;w+=(U-w)*.06,N+=(L-N)*.06,A.position.x=S+N*.8,A.position.y=b+w*.8;const G=e.rotationSpeed||"standard",$=G==="static"?0:G==="slow"?.35:G==="fast"?2.4:1;if(X&&(X.rotation.y+=.0012*$),B){const K=Y*.35*$;B.position.x=Math.cos(K)*4.8,B.position.z=Math.sin(K)*4.8*.4,B.position.y=Math.sin(K*1.5)*.6}O&&O.material.uniforms&&(O.material.uniforms.uTime.value=Y),g.render(v,y)};se();const ee=()=>{if(!d||!g||!y)return;const Y=d.clientWidth||window.innerWidth,G=d.clientHeight||window.innerHeight;y.aspect=Y/G,y.updateProjectionMatrix(),g.setSize(Y,G),g.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const $=Y<768,P=e.celestialPosition||"default";P==="upper-right"?(S=$?1.2:3.4,b=$?2.3:1.8):P==="upper-left"?(S=$?-1.2:-3.3,b=$?2.5:2):P==="zenith-center"?(S=0,b=$?2.5:2.4):r==="ringed-planet"||r==="pulsar-star"?(S=$?1.2:3.4,b=$?2.3:1.8,R=$?.48:.68):r==="crescent-moon"||r==="blood-moon"?(S=$?-1.2:-3.3,b=$?2.5:2,R=$?.42:.6):r==="eclipse-corona"&&(S=0,b=$?2.5:2.4,R=$?.45:.64),R*=e.celestialScaleMultiplier||1,A.position.set(S,b,0),A.scale.set(R,R,R)};return window.addEventListener("resize",ee,{passive:!0}),()=>{cancelAnimationFrame(V),window.removeEventListener("mousemove",J),window.removeEventListener("resize",ee),g.dispose(),d&&g.domElement&&d.contains(g.domElement)&&d.removeChild(g.domElement)}},[r,o,l,e.celestialPosition,e.celestialScaleMultiplier,e.rotationSpeed]),h.jsx("div",{ref:s,className:"fixed inset-0 pointer-events-none z-[1] select-none overflow-hidden","aria-hidden":"true"})};/**
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
 */const uf=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function yd(s){return s!=null}function xM(s,e={}){var g,_;const t=e.attributeNames??{},r=M=>t[M]??M,o=s.size??s.width??ds.width,l=s.size??s.height??ds.height,d=((g=s.aliases)==null?void 0:g.filter(M=>typeof M=="string"&&M.trim()!=="").map(M=>`lucide-${M}`))??[],p=[...s.name?[`lucide-${s.name}`]:[],...d],u=((_=e.className)==null?void 0:_.split(" ").filter(Boolean))??[],m=e.includeDefaultClasses===!1?uf(...u):uf("lucide",...p,...u),v=e.absoluteStrokeWidth?Number(e.strokeWidth??ds["stroke-width"])*Number(s.size??s.width??ds.width)/Number(e.size??e.width??ds.width):e.strokeWidth??ds["stroke-width"];return["svg",{...Object.entries(ds).reduce((M,[A,S])=>(M[r(A)]=S,M),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&yd(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&yd(e.width)&&{[r("width")]:e.width},..."height"in e&&yd(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:v,...m&&{[r("class")]:m},[r("viewBox")]:`0 0 ${o} ${l}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},s.node.map(M=>{const[A,S,b]=M,R=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...S}:S;return b?[A,R,b]:[A,R]})]}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function vM(s,e={}){return xM(s,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},yM=Ee.createContext({}),SM=()=>Ee.useContext(yM),bM=Ee.forwardRef(({color:s,size:e,width:t,height:r,strokeWidth:o,absoluteStrokeWidth:l,nonScalingStroke:d,className:p="",children:u,iconNode:m=[],icon:v={node:m,aliases:[],size:24},...y},g)=>{const{size:_=24,strokeWidth:M=2,absoluteStrokeWidth:A=!1,nonScalingStroke:S=!1,color:b="currentColor",className:R=""}=SM()??{},F=!!u||_M(y),[D,U,L=[]]=vM(v,{color:s??b,width:t??e??_,height:r??e??_,strokeWidth:o??M,absoluteStrokeWidth:l??A,nonScalingStroke:d??S,className:uf(R,p),hasA11yProp:F,attributes:y});return Ee.createElement(D,{ref:g,...U},[...L.map(([w,N])=>Ee.createElement(w,N)),...Array.isArray(u)?u:[u]])});/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function At(s,e=[],t=[]){const r=typeof s=="string"?pM(s,e,t):s,o=Ee.forwardRef(({className:l,...d},p)=>Ee.createElement(bM,{ref:p,icon:r,className:l,...d}));return r.name&&(o.displayName=gM(r.name)),o}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg={name:"calendar-clock",size:24,node:[["path",{d:"M16 14v2.2l1.6 1",key:"fo4ql5"}],["path",{d:"M16 2v3",key:"otl347"}],["path",{d:"M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338",key:"7hb8p4"}],["path",{d:"M3 9h5.859",key:"numkqi"}],["path",{d:"M8 2v3",key:"1ioesn"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]};tg.node;const tm=At(tg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng={name:"calendar",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]]};ng.node;const wM=At(ng);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};ig.node;const ua=At(ig);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};rg.node;const sg=At(rg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};ag.node;const Nf=At(ag);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og={name:"droplet",size:24,node:[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]};og.node;const nm=At(og);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg={name:"droplets",size:24,node:[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]};lg.node;const MM=At(lg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg={name:"external-link",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]};cg.node;const EM=At(cg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug={name:"eye-off",size:24,node:[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]};ug.node;const TM=At(ug);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg={name:"face-slightly-smiling",size:24,node:[["path",{d:"M15 10V9",key:"4dkmfx"}],["path",{d:"M16.472 15a6 6 0 01-8.943 0",key:"7qomzy"}],["path",{d:"M9 10V9",key:"1lazqi"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["smile"]};dg.node;const AM=At(dg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg={name:"flame",size:24,node:[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]]};fg.node;const hg=At(fg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg={name:"headphones",size:24,node:[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]};pg.node;const sc=At(pg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg={name:"list-music",size:24,node:[["path",{d:"M16 5H3",key:"m91uny"}],["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M11 19H3",key:"zflm78"}],["path",{d:"M21 16V5",key:"yxg4q8"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]};mg.node;const im=At(mg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg={name:"maximize-2",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]};gg.node;const rm=At(gg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg={name:"minimize-2",size:24,node:[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]]};xg.node;const vg=At(xg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};_g.node;const no=At(_g);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg={name:"palette",size:24,node:[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]};yg.node;const CM=At(yg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};Sg.node;const Gr=At(Sg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};bg.node;const Vr=At(bg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};wg.node;const Zl=At(wg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg={name:"quote",size:24,node:[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]};Mg.node;const RM=At(Mg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg={name:"radio",size:24,node:[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};Eg.node;const sm=At(Eg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};Tg.node;const Or=At(Tg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag={name:"skip-back",size:24,node:[["path",{d:"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",key:"15892j"}],["path",{d:"M3 20V4",key:"1ptbpl"}]]};Ag.node;const df=At(Ag);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg={name:"skip-forward",size:24,node:[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]]};Cg.node;const ff=At(Cg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};Rg.node;const Ng=At(Rg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Pg.node;const ms=At(Pg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg={name:"square-check-big",size:24,node:[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-square"]};Dg.node;const am=At(Dg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg={name:"star",size:24,node:[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]};Lg.node;const NM=At(Lg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};Ig.node;const zg=At(Ig);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug={name:"sunrise",size:24,node:[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]};Ug.node;const PM=At(Ug);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg={name:"target",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};kg.node;const DM=At(kg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};Fg.node;const ac=At(Fg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og={name:"tv",size:24,node:[["path",{d:"m17 2-5 5-5-5",key:"16satq"}],["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",key:"1e6viu"}]]};Og.node;const LM=At(Og);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg={name:"user",size:24,node:[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]};Bg.node;const Hg=At(Bg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};Gg.node;const hf=At(Gg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};Vg.node;const Wg=At(Vg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg={name:"waves-horizontal",size:24,node:[["path",{d:"M2 12q2.5 2 5 0t5 0 5 0 5 0",key:"8ddzzs"}],["path",{d:"M2 19q2.5 2 5 0t5 0 5 0 5 0",key:"1wj4st"}],["path",{d:"M2 5q2.5 2 5 0t5 0 5 0 5 0",key:"69x50u"}]],aliases:["waves"]};jg.node;const IM=At(jg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};$g.node;const dr=At($g),zM=()=>{const{activeYouTubeItem:s,isYouTubePlaying:e,youtubeVolume:t,isYouTubeMuted:r,setYouTubeIsPlaying:o,setYouTubePlayerReady:l,showYouTubePreview:d,setShowYouTubePreview:p,toggleYouTubePlay:u,nextYouTubeTrack:m,prevYouTubeTrack:v,toggleYouTubeMute:y,setYouTubeVolume:g,audioSource:_}=$r(),M=Ee.useRef(null),[A,S]=Ee.useState(null),b=Ee.useRef((s==null?void 0:s.id)||null),R=Ee.useRef(null),[F,D]=Ee.useState(!1),U=Ee.useRef(!1),L=Ee.useCallback((O,V="")=>{try{M.current&&M.current.contentWindow&&M.current.contentWindow.postMessage(JSON.stringify({event:"command",func:O,args:V}),"*")}catch(H){console.warn("[YouTube Audio] Command error:",H)}},[]),w=Ee.useCallback((O,V)=>{const H=V?"1":"0",se=typeof window<"u"&&window.location.origin?`&origin=${encodeURIComponent(window.location.origin)}`:"";if(!O)return`https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=${H}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${se}`;if(O.type==="playlist"&&O.playlistId)return`https://www.youtube.com/embed/videoseries?list=${encodeURIComponent(O.playlistId)}&autoplay=${H}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${se}`;if(O.type==="video_in_playlist"&&O.videoId&&O.playlistId)return`https://www.youtube.com/embed/${encodeURIComponent(O.videoId)}?list=${encodeURIComponent(O.playlistId)}&autoplay=${H}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${se}`;const ee=O.videoId||"jfKfPfyJRdk";return`https://www.youtube.com/embed/${encodeURIComponent(ee)}?autoplay=${H}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${se}`},[]),[N,J]=Ee.useState(()=>w(s,!1)),X=Ee.useCallback(()=>{L("unMute",""),L("setVolume",[t||75]),r&&y()},[L,t,r,y]);Ee.useEffect(()=>(window.__forMeSendYouTubeCommand=L,window.__forMeForceUnmute=X,l(!0),()=>{delete window.__forMeSendYouTubeCommand,delete window.__forMeForceUnmute}),[L,X,l]),Ee.useEffect(()=>{if(!s||b.current===s.id)return;b.current=s.id,S(null);const O=w(s,e);R.current=O,J(O),Ni.updateMetadata({title:s.title,artist:s.channel||"FOR ME Sanctuary",album:s.type==="playlist"?"YouTube Playlist":"YouTube Stream",artworkUrl:s.thumbnailUrl,onPlay:()=>{o(!0),L("playVideo",""),X()},onPause:()=>{o(!1),L("pauseVideo","")},onNext:s.type==="playlist"||s.type==="video_in_playlist"?m:void 0,onPrev:s.type==="playlist"||s.type==="video_in_playlist"?v:void 0})},[s,w,e,m,v,L,o,X]),Ee.useEffect(()=>{if(U.current){U.current=!1;return}e?(L("playVideo",""),setTimeout(()=>{L("unMute",""),L("setVolume",[t||75])},50),Ni.setPlaybackState("playing")):(L("pauseVideo",""),Ni.setPlaybackState("paused"))},[e,L,t]),Ee.useEffect(()=>{L("setVolume",[t||75])},[t,L]),Ee.useEffect(()=>{r?L("mute",""):(L("unMute",""),L("setVolume",[t||75]))},[r,t,L]),Ee.useEffect(()=>{const O=V=>{if(!(!V.data||typeof V.data!="string"))try{const H=JSON.parse(V.data);H.event==="onStateChange"?H.info===1?(U.current=!0,o(!0),S(null),Ni.setPlaybackState("playing"),r||(L("unMute",""),L("setVolume",[t||75]))):H.info===2?document.hidden||(U.current=!0,o(!1),Ni.setPlaybackState("paused")):H.info===0&&((s==null?void 0:s.type)==="playlist"||(s==null?void 0:s.type)==="video_in_playlist"?Ni.setPlaybackState("playing"):(U.current=!0,o(!1),Ni.setPlaybackState("none"))):H.event==="infoDelivery"&&H.info?typeof H.info.muted=="boolean"&&H.info.muted&&!r&&e&&(L("unMute",""),L("setVolume",[t||75])):H.event==="onError"&&(console.warn("[YouTube Audio Player Error]",H.info),(H.info===101||H.info===150)&&S("The owner of this video restricts playback outside of YouTube."))}catch{}};return window.addEventListener("message",O),()=>window.removeEventListener("message",O)},[o,r,t,L,s,e]);const j=_==="youtube"&&e||d,B=(s==null?void 0:s.type)==="playlist"||(s==null?void 0:s.type)==="video_in_playlist";return h.jsxs(h.Fragment,{children:[h.jsxs("div",{role:"region","aria-label":"YouTube Audio Player",style:{position:"fixed",bottom:!j||F?"0px":d?"84px":"16px",right:!j||F?"0px":d?"24px":"16px",width:!j||F?"2px":d?"380px":"250px",height:!j||F?"2px":d?"285px":"150px",zIndex:!j||F?-1:d?50:30,opacity:!j||F?.01:1,pointerEvents:!j||F?"none":"auto",borderRadius:"1.25rem",overflow:"hidden",boxShadow:d?"0 30px 70px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.18)":"0 15px 35px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.12)",transition:"all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"},className:"backdrop-blur-2xl bg-[#090b14]/95 flex flex-col border border-white/15",children:[h.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-black/60 shrink-0 select-none",children:[h.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[h.jsx("span",{className:`w-2 h-2 rounded-full shrink-0 ${e?"bg-red-500 animate-pulse":"bg-zinc-500"}`}),h.jsx("span",{className:"text-white text-xs font-display font-semibold truncate max-w-[110px] sm:max-w-[160px]",title:s==null?void 0:s.title,children:(s==null?void 0:s.title)||"YouTube Audio"})]}),h.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[h.jsxs("button",{type:"button",onClick:X,className:`px-1.5 py-0.5 rounded-md text-[10px] font-sans font-bold flex items-center gap-1 transition-colors cursor-pointer ${r?"bg-amber-500 text-black hover:bg-amber-400 animate-pulse":"bg-emerald-600/80 text-white hover:bg-emerald-500"}`,title:"Force Unmute & Restore Volume",children:[r?h.jsx(Wg,{className:"w-3 h-3"}):h.jsx(hf,{className:"w-3 h-3"}),h.jsx("span",{className:"hidden sm:inline",children:r?"UNMUTE":`${t}%`})]}),h.jsx("button",{type:"button",onClick:()=>D(!0),className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer",title:"Audio Only (Hide Video Frame)",children:h.jsx(sc,{className:"w-3 h-3"})}),h.jsx("button",{type:"button",onClick:()=>p(!d),className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer",title:d?"Collapse to Mini Player":"Expand Video Preview",children:d?h.jsx(vg,{className:"w-3 h-3"}):h.jsx(rm,{className:"w-3 h-3"})}),h.jsx("button",{type:"button",onClick:()=>{o(!1),p(!1),L("pauseVideo","")},className:"p-1 rounded-md bg-white/10 hover:bg-red-500/80 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer",title:"Stop playback & close",children:h.jsx(dr,{className:"w-3 h-3"})})]})]}),A&&h.jsxs("div",{className:"absolute inset-0 z-30 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center space-y-2 pointer-events-auto",children:[h.jsx(sg,{className:"w-6 h-6 text-amber-400"}),h.jsx("p",{className:"text-xs text-white/95 font-sans leading-relaxed max-w-xs",children:A}),(s==null?void 0:s.url)&&h.jsxs("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold transition-colors shadow-md",children:[h.jsx(EM,{className:"w-3 h-3"}),h.jsx("span",{children:"Open in YouTube"})]})]}),h.jsx("div",{className:"flex-1 w-full bg-black relative min-h-0",children:h.jsx("iframe",{ref:M,id:"global-youtube-audio-iframe",title:"FOR ME Sanctuary Audio Stream",src:N,className:"w-full h-full border-0 absolute inset-0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),h.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 border-t border-white/10 bg-black/60 shrink-0 text-xs",children:[d?h.jsxs("div",{className:"flex items-center gap-1",children:[h.jsx("span",{className:"text-[10px] font-sans text-zinc-400 mr-1",children:"Vol:"}),[25,50,75,100].map(O=>h.jsxs("button",{type:"button",onClick:()=>{g(O),L("setVolume",[O]),X()},className:`px-1.5 py-0.5 rounded text-[10px] font-mono transition-colors cursor-pointer ${t===O?"bg-red-600 text-white font-bold":"bg-white/10 text-zinc-300 hover:bg-white/20"}`,children:[O,"%"]},O))]}):h.jsxs("div",{className:"flex items-center gap-1",children:[B&&h.jsxs(h.Fragment,{children:[h.jsx("button",{type:"button",onClick:v,className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer",title:"Previous track in playlist",children:h.jsx(df,{className:"w-3 h-3"})}),h.jsx("button",{type:"button",onClick:m,className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer",title:"Next track in playlist",children:h.jsx(ff,{className:"w-3 h-3"})})]}),h.jsx("span",{className:"text-[10px] font-mono text-zinc-400",children:r?"Muted":`${t}%`})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[d&&B&&h.jsxs(h.Fragment,{children:[h.jsx("button",{type:"button",onClick:v,className:"p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white transition-colors cursor-pointer",title:"Previous track",children:h.jsx(df,{className:"w-3.5 h-3.5"})}),h.jsx("button",{type:"button",onClick:m,className:"p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white transition-colors cursor-pointer",title:"Next track",children:h.jsx(ff,{className:"w-3.5 h-3.5"})})]}),h.jsx("button",{type:"button",onClick:()=>{u(),X()},className:`px-3 py-1 rounded-lg text-white text-[11px] font-display font-semibold flex items-center gap-1 shadow-sm transition-all cursor-pointer ${e?"bg-red-600 hover:bg-red-500":"bg-emerald-600 hover:bg-emerald-500"}`,children:e?h.jsxs(h.Fragment,{children:[h.jsx(Gr,{className:"w-3 h-3 fill-current"}),h.jsx("span",{children:"Pause"})]}):h.jsxs(h.Fragment,{children:[h.jsx(Vr,{className:"w-3 h-3 fill-current ml-0.5"}),h.jsx("span",{children:"Play"})]})})]})]})]}),j&&F&&h.jsxs("button",{type:"button",onClick:()=>D(!1),className:"fixed bottom-4 right-4 z-40 px-3 py-1.5 rounded-xl cosmic-dock text-xs flex items-center gap-2 border border-white/15 text-white hover:border-violet-400/50 shadow-xl cursor-pointer transition-all animate-fadeIn",title:"Restore Video Frame",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-red-500 animate-pulse"}),h.jsx("span",{className:"font-display text-[11px] font-medium",children:"Show Video"}),h.jsx(rm,{className:"w-3 h-3 text-zinc-400"})]})]})},UM=[{id:"deep-space-obsidian",name:"Deep Space Obsidian",tagline:"Luminous Lavender & Crescent Moon",accent:"#a855f7",gradient:["#060814","#2d1252","#7c3aed","#ede9fe"],settings:{palette:"cosmic-royal",celestialBody:"crescent-moon",celestialPosition:"default",celestialScaleMultiplier:1,rotationSpeed:"standard",waveGeometry:"dunes",speed:"balanced",amplitude:"majestic",waveLayerDensity:"deep",horizonHeight:"balanced",clockFontStyle:"tabular",clockHalo:"pulsar",clockColor:"palette",clockPosition:"center",clockDivider:"colon",showConstellations:!0,showComet:!0,showNebulaDust:!0,starDensity:"balanced",shootingStarMode:"occasional"}},{id:"cyberpunk-neon",name:"Cyberpunk Neon",tagline:"High-Voltage Cyan & Ringed Gas Giant",accent:"#06b6d4",gradient:["#06000e","#3b0764","#06b6d4","#f43f5e"],settings:{palette:"cyberpunk-neon",celestialBody:"ringed-planet",celestialPosition:"upper-right",celestialScaleMultiplier:1.15,rotationSpeed:"fast",waveGeometry:"aurora",speed:"dynamic",amplitude:"dramatic",waveLayerDensity:"dense",horizonHeight:"balanced",clockFontStyle:"mono",clockHalo:"pulsar",clockColor:"cyan",clockPosition:"center",clockDivider:"colon",showCrossStars:!0,showOrbitalTrack:!0,starDensity:"dense",shootingStarMode:"meteor-shower"}},{id:"emerald-borealis",name:"Emerald Borealis",tagline:"Northern Aurora Ribbons & Pulsar Star",accent:"#10b981",gradient:["#010d05","#064e3b","#10b981","#a7f3d0"],settings:{palette:"emerald-aurora",celestialBody:"pulsar-star",celestialPosition:"zenith-center",celestialScaleMultiplier:1.1,rotationSpeed:"fast",waveGeometry:"aurora",speed:"balanced",amplitude:"majestic",waveLayerDensity:"dense",horizonHeight:"balanced",clockFontStyle:"minimal",clockHalo:"pulsar",clockColor:"cyan",clockPosition:"center",clockDivider:"dot",showConstellations:!0,showComet:!0,starDensity:"galaxy",shootingStarMode:"occasional"}},{id:"sunset-dunes",name:"Sunset Dunes",tagline:"Velvet Crimson & Solar Eclipse Corona",accent:"#f43f5e",gradient:["#0a0208","#771146","#e11d48","#f59e0b"],settings:{palette:"supernova-sunset",celestialBody:"eclipse-corona",celestialPosition:"zenith-center",celestialScaleMultiplier:1,rotationSpeed:"standard",waveGeometry:"dunes",speed:"balanced",amplitude:"majestic",waveLayerDensity:"deep",horizonHeight:"balanced",clockFontStyle:"serif",clockHalo:"subtle",clockColor:"gold",clockPosition:"center",clockDivider:"colon",showNebulaDust:!0,showComet:!0,starDensity:"balanced",shootingStarMode:"occasional"}},{id:"blood-moon-totality",name:"Blood Moon Totality",tagline:"Eerie Ruby Lunar Eclipse & Desert Swells",accent:"#ef4444",gradient:["#1c0404","#450a0a","#b91c1c","#fca5a5"],settings:{palette:"supernova-sunset",celestialBody:"blood-moon",celestialPosition:"upper-left",celestialScaleMultiplier:1.1,rotationSpeed:"slow",waveGeometry:"dunes",speed:"calm",amplitude:"dramatic",waveLayerDensity:"deep",horizonHeight:"balanced",clockFontStyle:"serif",clockHalo:"pulsar",clockColor:"rose",clockPosition:"center",clockDivider:"dot",showCrossStars:!0,starDensity:"balanced",shootingStarMode:"occasional"}},{id:"nord-frost",name:"Nord Frost",tagline:"Glacial Sapphire & Shimmering Auroral Silk",accent:"#38bdf8",gradient:["#020712","#083358","#0284c7","#ecfeff"],settings:{palette:"celestial-cyan",celestialBody:"ringed-planet",celestialPosition:"upper-right",celestialScaleMultiplier:.95,rotationSpeed:"slow",waveGeometry:"aurora",speed:"calm",amplitude:"majestic",waveLayerDensity:"dense",horizonHeight:"low",clockFontStyle:"minimal",clockHalo:"none",clockColor:"white",clockPosition:"center",clockDivider:"colon",showConstellations:!0,showCrossStars:!0,starDensity:"dense",shootingStarMode:"occasional"}},{id:"monochrome-mineral",name:"Monochrome Mineral",tagline:"Architectural Platinum & Deep Void",accent:"#a1a1aa",gradient:["#030306","#181824","#71717a","#ffffff"],settings:{palette:"nocturne-silver",celestialBody:"none",celestialPosition:"default",celestialScaleMultiplier:1,rotationSpeed:"static",waveGeometry:"mountains",speed:"calm",amplitude:"subtle",waveLayerDensity:"airy",horizonHeight:"balanced",clockFontStyle:"tabular",clockHalo:"none",clockColor:"white",clockPosition:"center",clockDivider:"space",showConstellations:!1,showComet:!1,showNebulaDust:!1,starDensity:"sparse",shootingStarMode:"off"}},{id:"pure-pitch-black",name:"Pitch Black Void",tagline:"OLED Zero-Light Battery Sanctuary",accent:"#71717a",gradient:["#000000","#050505","#171717","#e5e5e5"],settings:{palette:"pure-pitch-black",celestialBody:"crescent-moon",celestialPosition:"upper-right",celestialScaleMultiplier:.8,rotationSpeed:"slow",waveGeometry:"dunes",speed:"frozen",amplitude:"subtle",waveLayerDensity:"airy",horizonHeight:"low",clockFontStyle:"tabular",clockHalo:"none",clockColor:"white",clockPosition:"center",clockDivider:"colon",showConstellations:!1,showComet:!1,showNebulaDust:!1,starDensity:"sparse",shootingStarMode:"off"}}],kM=[{id:"cosmic-royal",name:"Cosmic Royal",previewColors:["#060814","#2d1252","#7c3aed","#ede9fe"]},{id:"cyberpunk-neon",name:"Cyberpunk Neon",previewColors:["#06000e","#3b0764","#06b6d4","#f43f5e"]},{id:"emerald-aurora",name:"Emerald Aurora",previewColors:["#010d05","#064e3b","#10b981","#a7f3d0"]},{id:"supernova-sunset",name:"Supernova Sunset",previewColors:["#12050e","#6e133e","#e11d48","#fffbeb"]},{id:"celestial-cyan",name:"Celestial Cyan",previewColors:["#040a14","#0e3f57","#0284c7","#ecfeff"]},{id:"solar-gold",name:"Solar Gold",previewColors:["#0d0500","#5e2500","#d97706","#fef08a"]},{id:"nocturne-silver",name:"Nocturne Silver",previewColors:["#050508","#22222f","#707090","#ffffff"]},{id:"pure-pitch-black",name:"Pitch Black (OLED)",previewColors:["#000000","#0a0a0a","#262626","#ffffff"]}],FM=[{id:"ringed-planet",name:"Ringed Gas Giant",desc:"True Cassini rings with moonlet"},{id:"crescent-moon",name:"Crescent Moon",desc:"Slender illuminated limb & earthshine"},{id:"eclipse-corona",name:"Solar Eclipse",desc:"Totality disc with coronal flare rays"},{id:"blood-moon",name:"Blood Moon",desc:"Ruby total lunar eclipse with crimson rim"},{id:"pulsar-star",name:"Neutron Pulsar",desc:"Spinning magnetic polar plasma beams"},{id:"none",name:"Deep Space Void",desc:"Vast open sky without celestial centerpiece"}],OM=[{id:"dunes",name:"Silky Dunes",desc:"Harmonic desert sand ridges"},{id:"aurora",name:"Aurora Ribbons",desc:"Translucent shimmering sky curtains"},{id:"mountains",name:"Alpine Peaks",desc:"Angular geometric mountain horizons"},{id:"ocean",name:"Ocean Swells",desc:"Deep rhythmic tidal rollers"}],BM=[{id:"tabular",label:"Tabular Modern",preview:"12:00"},{id:"serif",label:"Editorial Luxury",preview:"12:00"},{id:"mono",label:"Tech Monospace",preview:"12:00"},{id:"minimal",label:"Minimalist Light",preview:"12:00"}],HM=({isOpen:s,onClose:e})=>{const{wallpaperSettings:t,updateWallpaperSettings:r,profile:o,updateProfile:l,appTheme:d,toggleAppTheme:p}=$r(),u=d==="light",[m,v]=Ee.useState("presets");if(!s)return null;const y=()=>{r({palette:"cosmic-royal",speed:"balanced",amplitude:"majestic",waveGeometry:"dunes",waveLayerDensity:"deep",horizonHeight:"balanced",waveStrokeOpacity:.8,interactiveParallax:!0,celestialBody:"crescent-moon",celestialPosition:"default",celestialScaleMultiplier:1,rotationSpeed:"standard",showNebulaDust:!0,nebulaIntensity:"vivid",showConstellations:!0,showComet:!0,shootingStarMode:"occasional",showStars:!0,starDensity:"balanced",showCrossStars:!1,showOrbitalTrack:!1,showMeridian:!1,clockFontStyle:"tabular",clockSize:"standard",clockPosition:"center",clockDivider:"colon",clockColor:"palette",clockFormat:"12h",showSeconds:!0,showDate:!0,showGreeting:!0,clockHalo:"pulsar"})};return h.jsxs("div",{className:"fixed inset-0 z-50 pointer-events-none select-none",children:[h.jsx("div",{className:"absolute inset-0 bg-black/15 sm:bg-black/10 backdrop-blur-[1px] pointer-events-auto transition-opacity",onClick:e,"aria-hidden":"true"}),h.jsxs("aside",{role:"dialog","aria-modal":"true","aria-label":"Wallpaper Studio Inspector",className:`absolute top-0 right-0 bottom-0 w-full sm:w-[460px] border-l shadow-[0_0_80px_rgba(0,0,0,0.8)] backdrop-blur-3xl flex flex-col z-10 pointer-events-auto transition-all animate-fadeIn ${u?"bg-white/95 border-zinc-200/90 text-zinc-900 shadow-2xl":"bg-[#090b16]/94 border-white/[0.12] text-white shadow-2xl"}`,children:[h.jsxs("div",{className:`flex items-center justify-between p-4 px-5 border-b shrink-0 ${u?"border-zinc-200 bg-white/50":"border-white/[0.08] bg-black/20"}`,children:[h.jsxs("div",{className:"flex items-center gap-2.5",children:[h.jsx("div",{className:`w-8 h-8 rounded-full border flex items-center justify-center ${u?"bg-violet-50 border-violet-200 text-violet-700":"bg-white/[0.06] border-white/15 text-zinc-200"}`,children:h.jsx(Ng,{className:"w-3.5 h-3.5"})}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("h2",{className:"text-xs font-display uppercase tracking-widest font-bold",children:"Wallpaper Studio"}),h.jsx("span",{className:`text-[9px] font-mono font-medium px-2 py-0.5 rounded-full border ${u?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-emerald-500/15 text-emerald-300 border-emerald-400/30"}`,children:"Live Control"})]}),h.jsx("p",{className:`text-[10px] font-sans ${u?"text-zinc-500":"text-zinc-400"}`,children:"Granular celestial, wave & telemetry controls"})]})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("button",{type:"button",onClick:y,"aria-label":"Reset to default settings",title:"Reset to Defaults",className:`p-2 rounded-full transition-colors cursor-pointer ${u?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white"}`,children:h.jsx(Or,{className:"w-3.5 h-3.5"})}),h.jsx("button",{type:"button",onClick:e,"aria-label":"Close Wallpaper Studio",className:`p-2 rounded-full transition-colors cursor-pointer ${u?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white"}`,children:h.jsx(dr,{className:"w-4 h-4"})})]})]}),h.jsx("div",{className:`flex items-center gap-1 px-4 py-2 border-b shrink-0 overflow-x-auto no-scrollbar ${u?"border-zinc-200 bg-zinc-50/80":"border-white/[0.06] bg-black/30"}`,children:[{id:"presets",label:"Realms",icon:ms},{id:"palettes",label:"Atmosphere",icon:CM},{id:"celestial",label:"3D Planet",icon:no},{id:"waves",label:"Topography",icon:IM},{id:"clock",label:"Dial & Clock",icon:Nf}].map(g=>{const _=g.icon,M=m===g.id;return h.jsxs("button",{type:"button",onClick:()=>v(g.id),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 cursor-pointer ${M?u?"bg-zinc-900 text-white font-semibold shadow-sm":"bg-white text-zinc-950 font-semibold shadow-sm":u?"hover:bg-zinc-200/80 text-zinc-600":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,children:[h.jsx(_,{className:"w-3 h-3"}),h.jsx("span",{children:g.label})]},g.id)})}),h.jsxs("div",{className:"flex-1 overflow-y-auto p-5 space-y-6",children:[m==="presets"&&h.jsxs("div",{className:"space-y-4 animate-fadeIn",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold ${u?"text-zinc-700":"text-zinc-300"}`,children:"Curated Aesthetic Realms"}),h.jsx("span",{className:`text-[10px] font-mono ${u?"text-zinc-500":"text-zinc-400"}`,children:"1-Tap Instant Transformation"})]}),h.jsx("div",{className:"grid grid-cols-1 gap-2.5",children:UM.map(g=>{const _=t.palette===g.settings.palette&&t.celestialBody===g.settings.celestialBody&&t.waveGeometry===g.settings.waveGeometry;return h.jsxs("button",{type:"button",onClick:()=>r(g.settings),className:`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between group ${_?u?"bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900 shadow-md":"bg-white/[0.08] border-white/40 shadow-lg":u?"bg-white hover:bg-zinc-50 border-zinc-200/90":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08]"}`,children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("div",{className:"w-10 h-10 rounded-xl border border-white/20 shrink-0 shadow-sm flex items-center justify-center overflow-hidden",style:{background:`linear-gradient(135deg, ${g.gradient.join(", ")})`},children:_&&h.jsx(ua,{className:"w-4 h-4 text-white drop-shadow-md stroke-[3]"})}),h.jsxs("div",{children:[h.jsx("div",{className:`text-xs font-display font-bold ${_?u?"text-zinc-950 font-bold":"text-white":u?"text-zinc-800":"text-zinc-200"}`,children:g.name}),h.jsx("div",{className:`text-[10px] font-sans ${u?"text-zinc-500":"text-zinc-400"}`,children:g.tagline})]})]}),h.jsx("div",{className:"flex items-center gap-1.5 shrink-0 pl-2",children:g.gradient.map((M,A)=>h.jsx("div",{className:"w-2.5 h-2.5 rounded-full border border-black/20",style:{backgroundColor:M}},A))})]},g.id)})})]}),m==="palettes"&&h.jsxs("div",{className:"space-y-5 animate-fadeIn",children:[h.jsxs("div",{className:"space-y-2.5",children:[h.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${u?"text-zinc-700":"text-zinc-300"}`,children:"Harmonic Tonal Palette"}),h.jsx("div",{className:"grid grid-cols-2 gap-2",children:kM.map(g=>{const _=t.palette===g.id;return h.jsxs("button",{type:"button",onClick:()=>r({palette:g.id}),className:`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col gap-1.5 ${_?u?"bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900 shadow-sm":"bg-white/[0.08] border-white/40 shadow-sm":u?"bg-white hover:bg-zinc-50 border-zinc-200":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]"}`,children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:`text-[11px] font-semibold ${_?u?"text-zinc-950":"text-white":u?"text-zinc-700":"text-zinc-300"}`,children:g.name}),_&&h.jsx(ua,{className:"w-3 h-3 text-emerald-400"})]}),h.jsx("div",{className:"flex items-center gap-1",children:g.previewColors.map((M,A)=>h.jsx("span",{className:"w-3.5 h-3.5 rounded-full border border-black/20",style:{backgroundColor:M}},A))})]},g.id)})})]}),h.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/10",children:[h.jsx("div",{className:"flex items-center justify-between text-xs",children:h.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold ${u?"text-zinc-700":"text-zinc-300"}`,children:"Sanctuary Lighting Mode"})}),h.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[h.jsxs("button",{type:"button",onClick:()=>{u&&p()},className:`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex items-center justify-center gap-2 ${u?"bg-zinc-100 text-zinc-600 border-zinc-200 hover:bg-zinc-200":"bg-white text-zinc-950 font-bold border-white"}`,children:[h.jsx(no,{className:"w-3.5 h-3.5"}),h.jsx("span",{className:"text-xs",children:"Obsidian Dark"})]}),h.jsxs("button",{type:"button",onClick:()=>{u||p()},className:`p-2.5 rounded-xl border text-center transition-all cursor-pointer flex items-center justify-center gap-2 ${u?"bg-zinc-900 text-white font-bold border-zinc-900":"bg-white/[0.04] text-zinc-300 border-white/[0.08] hover:bg-white/[0.08]"}`,children:[h.jsx(zg,{className:"w-3.5 h-3.5"}),h.jsx("span",{className:"text-xs",children:"Creamy Light"})]})]})]}),h.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/10",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs",children:[h.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold ${u?"text-zinc-700":"text-zinc-300"}`,children:"Starfield Density"}),h.jsx("span",{className:`text-[10px] font-mono capitalize ${u?"text-zinc-600":"text-zinc-400"}`,children:t.starDensity||"balanced"})]}),h.jsx("div",{className:"grid grid-cols-4 gap-1.5",children:["sparse","balanced","dense","galaxy"].map(g=>{const _=(t.starDensity||"balanced")===g;return h.jsx("button",{type:"button",onClick:()=>r({starDensity:g}),className:`py-2 px-1 rounded-xl border text-center transition-all cursor-pointer text-xs capitalize font-medium ${_?u?"bg-zinc-900 text-white font-bold border-zinc-900":"bg-white text-zinc-950 font-bold border-white":u?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.08] border-white/[0.06] text-zinc-400"}`,children:g},g)})})]}),h.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/10",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs",children:[h.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold ${u?"text-zinc-700":"text-zinc-300"}`,children:"Volumetric Nebula Intensity"}),h.jsx("span",{className:`text-[10px] font-mono capitalize ${u?"text-zinc-600":"text-zinc-400"}`,children:t.nebulaIntensity||"vivid"})]}),h.jsx("div",{className:"grid grid-cols-3 gap-2",children:["subtle","vivid","deep"].map(g=>{const _=(t.nebulaIntensity||"vivid")===g;return h.jsx("button",{type:"button",onClick:()=>r({nebulaIntensity:g}),className:`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer text-xs capitalize font-medium ${_?u?"bg-zinc-900 text-white font-bold border-zinc-900":"bg-white text-zinc-950 font-bold border-white":u?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.08] border-white/[0.06] text-zinc-400"}`,children:g},g)})})]})]}),m==="celestial"&&h.jsxs("div",{className:"space-y-5 animate-fadeIn",children:[h.jsxs("div",{className:"space-y-2.5",children:[h.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${u?"text-zinc-700":"text-zinc-300"}`,children:"Primary 3D Celestial Body"}),h.jsx("div",{className:"grid grid-cols-2 gap-2",children:FM.map(g=>{const _=(t.celestialBody||"crescent-moon")===g.id;return h.jsxs("button",{type:"button",onClick:()=>r({celestialBody:g.id}),className:`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${_?u?"bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900 shadow-sm":"bg-white/[0.08] border-white/40 shadow-sm":u?"bg-white hover:bg-zinc-50 border-zinc-200":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]"}`,children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:`text-xs font-display font-bold ${_?u?"text-zinc-950":"text-white":u?"text-zinc-700":"text-zinc-300"}`,children:g.name}),_&&h.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"})]}),h.jsx("span",{className:`text-[10px] font-sans mt-1 leading-snug ${u?"text-zinc-500":"text-zinc-400"}`,children:g.desc})]},g.id)})})]}),h.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/10",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs",children:[h.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold ${u?"text-zinc-700":"text-zinc-300"}`,children:"Sky Placement"}),h.jsx("span",{className:`text-[10px] font-mono capitalize ${u?"text-zinc-600":"text-zinc-400"}`,children:t.celestialPosition||"default"})]}),h.jsx("div",{className:"grid grid-cols-4 gap-1.5",children:[{id:"default",label:"Signature"},{id:"upper-left",label:"West"},{id:"zenith-center",label:"Zenith"},{id:"upper-right",label:"East"}].map(g=>{const _=(t.celestialPosition||"default")===g.id;return h.jsx("button",{type:"button",onClick:()=>r({celestialPosition:g.id}),className:`py-2 px-1 rounded-xl border text-center transition-all cursor-pointer text-xs font-medium ${_?u?"bg-zinc-900 text-white font-bold border-zinc-900":"bg-white text-zinc-950 font-bold border-white":u?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.08] border-white/[0.06] text-zinc-400"}`,children:g.label},g.id)})})]}),h.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/10",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs",children:[h.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold ${u?"text-zinc-700":"text-zinc-300"}`,children:"Celestial Scale"}),h.jsxs("span",{className:`text-[10px] font-mono ${u?"text-zinc-600":"text-zinc-400"}`,children:[(t.celestialScaleMultiplier||1).toFixed(1),"x"]})]}),h.jsx("div",{className:"grid grid-cols-5 gap-1.5",children:[.6,.8,1,1.2,1.4].map(g=>{const _=Math.abs((t.celestialScaleMultiplier||1)-g)<.05;return h.jsxs("button",{type:"button",onClick:()=>r({celestialScaleMultiplier:g}),className:`py-2 px-1 rounded-xl border text-center transition-all cursor-pointer text-xs font-medium tabular-nums ${_?u?"bg-zinc-900 text-white font-bold border-zinc-900":"bg-white text-zinc-950 font-bold border-white":u?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.08] border-white/[0.06] text-zinc-400"}`,children:[g,"x"]},g)})})]}),h.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/10",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs",children:[h.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold ${u?"text-zinc-700":"text-zinc-300"}`,children:"Axial Planetary Spin"}),h.jsx("span",{className:`text-[10px] font-mono capitalize ${u?"text-zinc-600":"text-zinc-400"}`,children:t.rotationSpeed||"standard"})]}),h.jsx("div",{className:"grid grid-cols-4 gap-1.5",children:["static","slow","standard","fast"].map(g=>{const _=(t.rotationSpeed||"standard")===g;return h.jsx("button",{type:"button",onClick:()=>r({rotationSpeed:g}),className:`py-2 px-1 rounded-xl border text-center transition-all cursor-pointer text-xs capitalize font-medium ${_?u?"bg-zinc-900 text-white font-bold border-zinc-900":"bg-white text-zinc-950 font-bold border-white":u?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.08] border-white/[0.06] text-zinc-400"}`,children:g},g)})})]}),h.jsxs("div",{className:"space-y-2.5 pt-2 border-t border-white/10",children:[h.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${u?"text-zinc-700":"text-zinc-300"}`,children:"Astronomical Features"}),h.jsx("div",{className:"grid grid-cols-1 gap-2 text-xs",children:[{key:"showConstellations",label:"Constellation Charts",desc:"Ursa Major & astronomical chords"},{key:"showComet",label:"Cosmic Comet",desc:"Sweeping ion dust tail across the horizon"},{key:"showCrossStars",label:"Diffraction Cross Stars",desc:"4-point optical diamond flares"},{key:"showOrbitalTrack",label:"Orbital Arc Track",desc:"Elliptical planetary telemetry"},{key:"showMeridian",label:"Celestial Meridian",desc:"Vertical astronomical ticks"}].map(g=>{const _=!!t[g.key];return h.jsxs("label",{className:`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-colors ${u?"bg-white hover:bg-zinc-50 border-zinc-200":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]"}`,children:[h.jsxs("div",{children:[h.jsx("div",{className:`font-medium ${u?"text-zinc-800":"text-zinc-200"}`,children:g.label}),h.jsx("div",{className:`text-[10px] font-sans ${u?"text-zinc-500":"text-zinc-400"}`,children:g.desc})]}),h.jsx("input",{type:"checkbox",checked:_,onChange:M=>r({[g.key]:M.target.checked}),className:"w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"})]},g.key)})})]}),h.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/10",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs",children:[h.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold ${u?"text-zinc-700":"text-zinc-300"}`,children:"Shooting Star Frequency"}),h.jsx("span",{className:`text-[10px] font-mono capitalize ${u?"text-violet-700":"text-violet-300"}`,children:t.shootingStarMode||"occasional"})]}),h.jsx("div",{className:"grid grid-cols-3 gap-2",children:["off","occasional","meteor-shower"].map(g=>{const _=(t.shootingStarMode||"occasional")===g;return h.jsx("button",{type:"button",onClick:()=>r({shootingStarMode:g}),className:`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer text-xs capitalize font-medium ${_?u?"bg-zinc-900 text-white font-semibold border-zinc-900":"bg-white text-zinc-950 font-semibold border-white":u?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06] text-zinc-400"}`,children:g.replace("-"," ")},g)})})]})]}),m==="waves"&&h.jsxs("div",{className:"space-y-5 animate-fadeIn",children:[h.jsxs("div",{className:"space-y-2.5",children:[h.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${u?"text-zinc-700":"text-zinc-300"}`,children:"Wave Topographic Geometry"}),h.jsx("div",{className:"grid grid-cols-2 gap-2",children:OM.map(g=>{const _=(t.waveGeometry||"dunes")===g.id;return h.jsxs("button",{type:"button",onClick:()=>r({waveGeometry:g.id}),className:`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${_?u?"bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900 shadow-sm":"bg-white/[0.08] border-white/40 shadow-sm":u?"bg-white hover:bg-zinc-50 border-zinc-200":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]"}`,children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:`text-xs font-display font-bold ${_?u?"text-zinc-950":"text-white":u?"text-zinc-700":"text-zinc-300"}`,children:g.name}),_&&h.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"})]}),h.jsx("span",{className:`text-[10px] font-sans mt-1 leading-snug ${u?"text-zinc-500":"text-zinc-400"}`,children:g.desc})]},g.id)})})]}),h.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/10",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs",children:[h.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold ${u?"text-zinc-700":"text-zinc-300"}`,children:"Horizon Elevation"}),h.jsx("span",{className:`text-[10px] font-mono capitalize ${u?"text-zinc-600":"text-zinc-400"}`,children:t.horizonHeight||"balanced"})]}),h.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{id:"low",label:"Vast Sky (Low)"},{id:"balanced",label:"Balanced"},{id:"high",label:"High Dunes"}].map(g=>{const _=(t.horizonHeight||"balanced")===g.id;return h.jsx("button",{type:"button",onClick:()=>r({horizonHeight:g.id}),className:`py-2 px-1 rounded-xl border text-center transition-all cursor-pointer text-xs font-medium ${_?u?"bg-zinc-900 text-white font-bold border-zinc-900":"bg-white text-zinc-950 font-bold border-white":u?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.08] border-white/[0.06] text-zinc-400"}`,children:g.label},g.id)})})]}),h.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/10",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs",children:[h.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold ${u?"text-zinc-700":"text-zinc-300"}`,children:"Kinetic Drift Speed"}),h.jsx("span",{className:`text-[10px] font-mono capitalize ${u?"text-zinc-600":"text-zinc-400"}`,children:t.speed||"balanced"})]}),h.jsx("div",{className:"grid grid-cols-4 gap-1.5",children:["frozen","calm","balanced","dynamic"].map(g=>{const _=(t.speed||"balanced")===g;return h.jsx("button",{type:"button",onClick:()=>r({speed:g}),className:`py-2 px-1 rounded-xl border text-center transition-all cursor-pointer text-xs capitalize font-medium ${_?u?"bg-zinc-900 text-white font-semibold border-zinc-900":"bg-white text-zinc-950 font-semibold border-white":u?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06] text-zinc-400"}`,children:g},g)})})]}),h.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/10",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs",children:[h.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold ${u?"text-zinc-700":"text-zinc-300"}`,children:"Wave Amplitude"}),h.jsx("span",{className:`text-[10px] font-mono capitalize ${u?"text-zinc-600":"text-zinc-400"}`,children:t.amplitude||"majestic"})]}),h.jsx("div",{className:"grid grid-cols-3 gap-2",children:["subtle","majestic","dramatic"].map(g=>{const _=(t.amplitude||"majestic")===g;return h.jsx("button",{type:"button",onClick:()=>r({amplitude:g}),className:`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer text-xs capitalize font-medium ${_?u?"bg-zinc-900 text-white font-semibold border-zinc-900":"bg-white text-zinc-950 font-semibold border-white":u?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06] text-zinc-400"}`,children:g},g)})})]}),h.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/10",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs",children:[h.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold ${u?"text-zinc-700":"text-zinc-300"}`,children:"Stratified Layer Density"}),h.jsx("span",{className:`text-[10px] font-mono capitalize ${u?"text-zinc-600":"text-zinc-400"}`,children:t.waveLayerDensity||"deep"})]}),h.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{id:"airy",label:"Airy (3)"},{id:"deep",label:"Deep (5)"},{id:"dense",label:"Dense (7)"}].map(g=>{const _=(t.waveLayerDensity||"deep")===g.id;return h.jsx("button",{type:"button",onClick:()=>r({waveLayerDensity:g.id}),className:`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer text-xs font-medium ${_?u?"bg-zinc-900 text-white font-semibold border-zinc-900":"bg-white text-zinc-950 font-semibold border-white":u?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06] text-zinc-400"}`,children:g.label},g.id)})})]}),h.jsx("div",{className:"pt-2 border-t border-white/10",children:h.jsxs("label",{className:`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-colors ${u?"bg-white hover:bg-zinc-50 border-zinc-200":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]"}`,children:[h.jsxs("div",{children:[h.jsx("div",{className:`font-medium text-xs ${u?"text-zinc-800":"text-zinc-200"}`,children:"Interactive Cursor Parallax"}),h.jsx("div",{className:`text-[10px] font-sans ${u?"text-zinc-500":"text-zinc-400"}`,children:"Gently shifts stars & waves as you move your pointer"})]}),h.jsx("input",{type:"checkbox",checked:t.interactiveParallax!==!1,onChange:g=>r({interactiveParallax:g.target.checked}),className:"w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"})]})})]}),m==="clock"&&h.jsxs("div",{className:"space-y-5 animate-fadeIn",children:[h.jsxs("div",{className:"space-y-2.5",children:[h.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${u?"text-zinc-700":"text-zinc-300"}`,children:"Clock Typography Face"}),h.jsx("div",{className:"grid grid-cols-2 gap-2",children:BM.map(g=>{const _=(t.clockFontStyle||"tabular")===g.id;return h.jsxs("button",{type:"button",onClick:()=>r({clockFontStyle:g.id}),className:`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${_?u?"bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900 shadow-sm":"bg-white/[0.08] border-white/40 shadow-sm":u?"bg-white hover:bg-zinc-50 border-zinc-200":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]"}`,children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:`text-xs font-display font-bold ${_?u?"text-zinc-950":"text-white":u?"text-zinc-700":"text-zinc-300"}`,children:g.label}),_&&h.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"})]}),h.jsx("span",{className:"text-xl font-bold mt-2 tabular-nums opacity-80",children:g.preview})]},g.id)})})]}),h.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/10",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs",children:[h.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold ${u?"text-zinc-700":"text-zinc-300"}`,children:"Clock Scale"}),h.jsx("span",{className:`text-[10px] font-mono capitalize ${u?"text-zinc-600":"text-zinc-400"}`,children:t.clockSize||"standard"})]}),h.jsx("div",{className:"grid grid-cols-3 gap-2",children:["compact","standard","heroic"].map(g=>{const _=(t.clockSize||"standard")===g;return h.jsx("button",{type:"button",onClick:()=>r({clockSize:g}),className:`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer text-xs capitalize font-medium ${_?u?"bg-zinc-900 text-white font-semibold border-zinc-900":"bg-white text-zinc-950 font-semibold border-white":u?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06] text-zinc-400"}`,children:g},g)})})]}),h.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/10",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs",children:[h.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold ${u?"text-zinc-700":"text-zinc-300"}`,children:"Clock Screen Alignment"}),h.jsx("span",{className:`text-[10px] font-mono capitalize ${u?"text-zinc-600":"text-zinc-400"}`,children:t.clockPosition||"center"})]}),h.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{id:"zenith",label:"Zenith Upper"},{id:"center",label:"True Center"},{id:"bottom",label:"Lower Anchor"}].map(g=>{const _=(t.clockPosition||"center")===g.id;return h.jsx("button",{type:"button",onClick:()=>r({clockPosition:g.id}),className:`py-2 px-1 rounded-xl border text-center transition-all cursor-pointer text-xs font-medium ${_?u?"bg-zinc-900 text-white font-semibold border-zinc-900":"bg-white text-zinc-950 font-semibold border-white":u?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06] text-zinc-400"}`,children:g.label},g.id)})})]}),h.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/10",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs",children:[h.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold ${u?"text-zinc-700":"text-zinc-300"}`,children:"Time Divider Symbol"}),h.jsx("span",{className:`text-[10px] font-mono capitalize ${u?"text-zinc-600":"text-zinc-400"}`,children:t.clockDivider||"colon"})]}),h.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{id:"colon",label:"Colon (12:00)"},{id:"dot",label:"Clean Dot (12 · 00)"},{id:"space",label:"Space (12 00)"}].map(g=>{const _=(t.clockDivider||"colon")===g.id;return h.jsx("button",{type:"button",onClick:()=>r({clockDivider:g.id}),className:`py-2 px-1 rounded-xl border text-center transition-all cursor-pointer text-xs font-medium ${_?u?"bg-zinc-900 text-white font-semibold border-zinc-900":"bg-white text-zinc-950 font-semibold border-white":u?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06] text-zinc-400"}`,children:g.label},g.id)})})]}),h.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/10",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs",children:[h.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold ${u?"text-zinc-700":"text-zinc-300"}`,children:"Clock Dial Color Tint"}),h.jsx("span",{className:`text-[10px] font-mono capitalize ${u?"text-zinc-600":"text-zinc-400"}`,children:t.clockColor||"palette"})]}),h.jsx("div",{className:"grid grid-cols-5 gap-1.5",children:[{id:"palette",label:"Default",color:u?"#18181b":"#ffffff"},{id:"white",label:"Pure White",color:"#ffffff"},{id:"gold",label:"Amber Gold",color:"#f59e0b"},{id:"cyan",label:"Cyber Cyan",color:"#06b6d4"},{id:"rose",label:"Ruby Rose",color:"#f43f5e"}].map(g=>{const _=(t.clockColor||"palette")===g.id;return h.jsxs("button",{type:"button",onClick:()=>r({clockColor:g.id}),className:`py-2 px-1 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center gap-1 text-[10px] font-medium ${_?u?"bg-zinc-900 text-white font-bold border-zinc-900":"bg-white text-zinc-950 font-bold border-white":u?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.08] border-white/[0.06] text-zinc-400"}`,children:[h.jsx("span",{className:"w-3 h-3 rounded-full border border-black/20",style:{backgroundColor:g.color}}),h.jsx("span",{children:g.label})]},g.id)})})]}),h.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/10",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs",children:[h.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold ${u?"text-zinc-700":"text-zinc-300"}`,children:"Celestial Breathing Halo"}),h.jsx("span",{className:`text-[10px] font-mono capitalize ${u?"text-zinc-600":"text-zinc-400"}`,children:t.clockHalo||"pulsar"})]}),h.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{id:"none",label:"None"},{id:"subtle",label:"Subtle Aura"},{id:"pulsar",label:"Pulsar Flare"}].map(g=>{const _=(t.clockHalo||"pulsar")===g.id;return h.jsx("button",{type:"button",onClick:()=>r({clockHalo:g.id}),className:`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer text-xs font-medium ${_?u?"bg-zinc-900 text-white font-semibold border-zinc-900":"bg-white text-zinc-950 font-semibold border-white":u?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06] text-zinc-400"}`,children:g.label},g.id)})})]}),h.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/10",children:[h.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${u?"text-zinc-700":"text-zinc-300"}`,children:"Display Options"}),h.jsx("div",{className:"grid grid-cols-1 gap-2 text-xs",children:[{key:"showSeconds",label:"Display Seconds (HH:MM:SS)",checked:t.showSeconds!==!1},{key:"showGreeting",label:"Display Living Greeting & Mantra",checked:t.showGreeting!==!1}].map(g=>h.jsxs("label",{className:`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-colors ${u?"bg-white hover:bg-zinc-50 border-zinc-200":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]"}`,children:[h.jsx("span",{className:`font-medium ${u?"text-zinc-800":"text-zinc-200"}`,children:g.label}),h.jsx("input",{type:"checkbox",checked:g.checked,onChange:_=>r({[g.key]:_.target.checked}),className:"w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"})]},g.key))})]}),h.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/10",children:[h.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${u?"text-zinc-700":"text-zinc-300"}`,children:"Quick Daily Mantras"}),h.jsx("div",{className:"flex flex-wrap gap-1.5",children:["Remember, you are here for you.","Discipline equals true freedom.","Deep focus over scattered noise.","Build with relentless craft."].map(g=>h.jsxs("button",{type:"button",onClick:()=>l({motto:g}),className:`text-[11px] px-2.5 py-1.5 rounded-lg border transition-all text-left cursor-pointer ${o.motto===g?u?"bg-zinc-900 text-white font-medium border-zinc-900":"bg-white text-zinc-950 font-medium border-white":u?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300"}`,children:["“",g,"”"]},g))})]})]})]}),h.jsxs("div",{className:`p-4 px-5 border-t shrink-0 flex items-center justify-between ${u?"border-zinc-200 bg-white/60":"border-white/[0.08] bg-black/30"}`,children:[h.jsx("span",{className:`text-[11px] font-mono ${u?"text-zinc-500":"text-zinc-400"}`,children:"Live Studio v3.2 Pro"}),h.jsx("button",{type:"button",onClick:e,className:`px-5 py-2 rounded-xl text-xs font-semibold shadow-md transition-all cursor-pointer ${u?"bg-zinc-900 hover:bg-zinc-800 text-white":"bg-white hover:bg-zinc-200 text-zinc-950 shadow-[0_0_20px_rgba(255,255,255,0.2)]"}`,children:"Done"})]})]})]})},io=({className:s="w-4 h-4"})=>h.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:s,"aria-hidden":"true",children:h.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})}),Xg=({isPlaying:s,color:e="#a855f7",className:t="w-16 h-5",barCount:r=10})=>{const o=Ee.useRef(null);return Ee.useEffect(()=>{const l=o.current;if(!l)return;const d=l.getContext("2d");if(!d)return;let p;const u=fs.getAnalyser(),m=u?new Uint8Array(u.frequencyBinCount):null,v=()=>{if(d.clearRect(0,0,l.width,l.height),s&&u&&m){u.getByteFrequencyData(m);const y=l.width,g=l.height,_=2,M=_*(r-1),A=Math.max(2,(y-M)/r);for(let S=0;S<r;S++){const b=Math.min(m.length-1,Math.floor(S*(m.length/r)*.7)),R=m[b]/255,F=Math.max(3,R*(g-2)),D=S*(A+_),U=g-F;d.fillStyle=e,d.beginPath(),d.roundRect(D,U,A,F,1.5),d.fill()}}else{const y=l.width,g=l.height,_=2,M=_*(r-1),A=Math.max(2,(y-M)/r);for(let S=0;S<r;S++){const b=S*(A+_),R=g-2.5;d.fillStyle="rgba(255, 255, 255, 0.2)",d.beginPath(),d.roundRect(b,R,A,2.5,1),d.fill()}}p=requestAnimationFrame(v)};return v(),()=>{cancelAnimationFrame(p)}},[s,e,r]),h.jsx("canvas",{ref:o,width:64,height:20,className:t,"aria-hidden":"true"})},GM=({isOpen:s,onClose:e})=>{const{appTheme:t,audioSource:r,isAudioPlaying:o,activeSoundscapeId:l,audioVolume:d,isAudioMuted:p,playSoundscape:u,stopSoundscape:m,setAudioVolume:v,toggleAudioMute:y,isYouTubePlaying:g,activeYouTubeItem:_,youtubeVolume:M,isYouTubeMuted:A,savedYouTubeItems:S,showYouTubePreview:b,setShowYouTubePreview:R,playYouTubeItem:F,toggleYouTubePlay:D,stopYouTube:U,nextYouTubeTrack:L,prevYouTubeTrack:w,setYouTubeVolume:N,toggleYouTubeMute:J,addYouTubeToLibrary:X,removeYouTubeFromLibrary:j}=$r(),B=t==="light",[O,V]=Ee.useState(r||"youtube"),[H,se]=Ee.useState(""),[ee,Y]=Ee.useState(""),[G,$]=Ee.useState(null),[P,K]=Ee.useState(null),[we,k]=Ee.useState(null),[ve,be]=Ee.useState(null);if(Ee.useEffect(()=>{if(!we){be(null);return}be(we*60);const Me=setInterval(()=>{be(Ie=>Ie===null||Ie<=1?(m(),U(),k(null),null):Ie-1)},1e3);return()=>clearInterval(Me)},[we,m,U]),Ee.useEffect(()=>{const Me=Ie=>{Ie.key==="Escape"&&s&&e()};return window.addEventListener("keydown",Me),()=>window.removeEventListener("keydown",Me)},[s,e]),!s)return null;const Ne=na.find(Me=>Me.id===l)||na[0],_e=Me=>{const Ie=Math.floor(Me/60),Ge=Me%60;return`${Ie}:${Ge.toString().padStart(2,"0")}`},Ue=Me=>{if(Me.preventDefault(),$(null),K(null),!H.trim()){$("Please enter a YouTube video or playlist link.");return}const Ie=X(H.trim(),ee.trim()||void 0);if(!Ie.success||!Ie.item){$(Ie.error||"Failed to parse YouTube link.");return}F(Ie.item),se(""),Y(""),K(`Playing: ${Ie.item.title}`),setTimeout(()=>K(null),4e3)},ot=O==="youtube"?_?_.title:"No YouTube stream selected":Ne.title,Be=O==="youtube"?g:o;return h.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 backdrop-blur-xl animate-fadeIn select-none ${B?"bg-black/45":"bg-black/85"}`,role:"dialog","aria-modal":"true","aria-labelledby":"audio-modal-title",children:[h.jsx("div",{className:"fixed inset-0",onClick:e,"aria-hidden":"true"}),h.jsxs("div",{className:`relative z-10 w-full max-w-2xl border rounded-3xl shadow-[0_20px_70px_rgba(0,0,0,0.85)] flex flex-col max-h-[90vh] overflow-hidden ${B?"bg-white/95 border-zinc-200 text-zinc-900 shadow-2xl":"bg-[#0b0d1e] border-white/[0.12] text-white shadow-2xl"}`,children:[h.jsxs("div",{className:`flex items-center justify-between px-6 py-4 border-b shrink-0 ${B?"border-zinc-200 bg-zinc-50/80":"border-white/[0.08] bg-white/[0.02]"}`,children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("div",{className:`w-9 h-9 rounded-2xl border flex items-center justify-center ${B?"bg-rose-50 border-rose-200 text-red-600":"bg-red-500/20 border-red-400/40 text-red-400"}`,children:h.jsx(sc,{className:"w-5 h-5"})}),h.jsxs("div",{children:[h.jsxs("h2",{id:"audio-modal-title",className:`text-sm sm:text-base font-display font-semibold tracking-wide flex items-center gap-2 ${B?"text-zinc-900":"text-white"}`,children:["Focus Audio Sanctuary",h.jsx("span",{className:`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border ${O==="youtube"?B?"bg-red-50 text-red-700 border-red-200":"bg-red-500/15 text-red-300 border-red-500/30":B?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-emerald-500/15 text-emerald-300 border-emerald-500/30"}`,children:O==="youtube"?"YouTube Online • Infinite Audio":"Web Audio • Offline"})]}),h.jsx("p",{className:`text-xs font-sans mt-0.5 ${B?"text-zinc-500":"text-zinc-400"}`,children:O==="youtube"?"Paste any YouTube video or playlist link or choose curated study streams":"Procedurally synthesized ambient soundscapes. Zero network required."})]})]}),h.jsx("button",{type:"button",onClick:e,className:`w-8 h-8 rounded-xl flex items-center justify-center transition-colors cursor-pointer border ${B?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600 border-zinc-200":"bg-white/[0.05] hover:bg-white/[0.12] text-zinc-400 hover:text-white border-white/[0.08]"}`,"aria-label":"Close sound sanctuary",children:h.jsx(dr,{className:"w-4 h-4"})})]}),h.jsxs("div",{className:`flex items-center gap-2 px-6 pt-3 border-b shrink-0 ${B?"border-zinc-200 bg-zinc-50/50":"border-white/[0.06] bg-black/20"}`,children:[h.jsxs("button",{type:"button",onClick:()=>V("youtube"),className:`flex items-center gap-2 px-4 py-2.5 text-xs font-display font-semibold border-b-2 transition-all cursor-pointer ${O==="youtube"?B?"border-red-600 text-red-700":"border-red-500 text-white":B?"border-transparent text-zinc-500 hover:text-zinc-900":"border-transparent text-zinc-400 hover:text-zinc-200"}`,children:[h.jsx(io,{className:"w-4 h-4 text-red-500"}),h.jsx("span",{children:"YouTube Audio & Playlists"})]}),h.jsxs("button",{type:"button",onClick:()=>V("ambient"),className:`flex items-center gap-2 px-4 py-2.5 text-xs font-display font-semibold border-b-2 transition-all cursor-pointer ${O==="ambient"?B?"border-violet-600 text-violet-700":"border-violet-400 text-white":B?"border-transparent text-zinc-500 hover:text-zinc-900":"border-transparent text-zinc-400 hover:text-zinc-200"}`,children:[h.jsx(sm,{className:"w-4 h-4 text-violet-500"}),h.jsx("span",{children:"Procedural Soundscapes (Offline)"})]})]}),O==="youtube"&&h.jsxs("div",{className:"flex-1 overflow-y-auto p-5 sm:p-6 space-y-5 animate-fadeIn",children:[h.jsxs("form",{onSubmit:Ue,className:"space-y-2",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold",children:[h.jsx("span",{className:B?"text-zinc-800":"text-zinc-300",children:"Play YouTube Link or Playlist"}),h.jsx("span",{className:`text-[10px] font-sans font-normal ${B?"text-zinc-500":"text-zinc-400"}`,children:"Supports videos, live streams & playlists"})]}),h.jsxs("div",{className:"flex flex-col sm:flex-row gap-2",children:[h.jsx("input",{type:"text",placeholder:"Paste YouTube link (e.g. https://www.youtube.com/watch?v=... or playlist?list=...)",value:H,onChange:Me=>{se(Me.target.value),G&&$(null)},className:`flex-1 px-3.5 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-2 ${B?"bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:ring-red-500/20 focus:border-red-500":"bg-white/[0.04] border-white/[0.1] text-white placeholder-zinc-500 focus:ring-red-400/30 focus:border-red-400"}`}),h.jsxs("button",{type:"submit",className:"px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-display font-semibold flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer shrink-0",children:[h.jsx(Zl,{className:"w-4 h-4"}),h.jsx("span",{children:"Load & Play"})]})]}),G&&h.jsxs("div",{className:"flex items-center gap-2 p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-sans",children:[h.jsx(sg,{className:"w-4 h-4 shrink-0"}),h.jsx("span",{children:G})]}),P&&h.jsxs("div",{className:"flex items-center gap-2 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-sans",children:[h.jsx(ms,{className:"w-4 h-4 shrink-0"}),h.jsx("span",{children:P})]})]}),_&&h.jsxs("div",{className:`p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${B?"bg-red-50/70 border-red-200 text-zinc-900 shadow-sm":"bg-red-950/20 border-red-500/30 text-white"}`,children:[h.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[h.jsxs("div",{className:"w-12 h-12 rounded-xl overflow-hidden bg-black/40 shrink-0 border border-white/10 relative",children:[h.jsx("img",{src:_.thumbnailUrl||Jl[0].thumbnailUrl,alt:"",className:"w-full h-full object-cover"}),g&&h.jsx("div",{className:"absolute inset-0 bg-black/35 flex items-center justify-center",children:h.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"})})]}),h.jsxs("div",{className:"min-w-0",children:[h.jsx("div",{className:"flex items-center gap-1.5",children:h.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-red-600 font-bold",children:_.type==="playlist"?"PLAYLIST":"NOW STREAMING"})}),h.jsx("h3",{className:`text-xs sm:text-sm font-display font-semibold truncate ${B?"text-zinc-900":"text-white"}`,children:_.title}),h.jsx("p",{className:`text-[11px] font-sans truncate ${B?"text-zinc-600":"text-zinc-400"}`,children:_.channel||"YouTube"})]})]}),h.jsxs("div",{className:"flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end",children:[_.type==="playlist"&&h.jsxs(h.Fragment,{children:[h.jsx("button",{type:"button",onClick:w,className:`p-2 rounded-xl border transition-colors cursor-pointer ${B?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-white"}`,title:"Previous Track in Playlist",children:h.jsx(df,{className:"w-3.5 h-3.5"})}),h.jsx("button",{type:"button",onClick:L,className:`p-2 rounded-xl border transition-colors cursor-pointer ${B?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-white"}`,title:"Next Track in Playlist",children:h.jsx(ff,{className:"w-3.5 h-3.5"})})]}),h.jsxs("button",{type:"button",onClick:()=>{try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}},className:"px-2.5 py-1.5 rounded-xl border border-emerald-500/40 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-sans font-bold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer",title:"Force Unmute & Max Volume",children:[h.jsx(hf,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Unmute"})]}),h.jsxs("button",{type:"button",onClick:()=>R(!b),className:`px-3 py-1.5 rounded-xl border text-xs font-sans flex items-center gap-1.5 transition-colors cursor-pointer ${b?"bg-red-600 text-white border-red-600 font-medium":B?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-zinc-300"}`,title:"Toggle Floating Video Preview",children:[h.jsx(LM,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:b?"Hide Video":"View Video"})]})]})]}),h.jsxs("div",{className:"space-y-2.5",children:[h.jsxs("div",{className:`flex items-center gap-2 text-xs font-display uppercase tracking-wider font-semibold ${B?"text-zinc-800":"text-zinc-300"}`,children:[h.jsx(ms,{className:"w-3.5 h-3.5 text-amber-500"}),h.jsx("span",{children:"Curated Focus & Lo-Fi Streams"})]}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:Jl.map(Me=>{const Ie=(_==null?void 0:_.id)===Me.id||(_==null?void 0:_.videoId)===Me.videoId&&Me.videoId,Ge=Ie&&g;return h.jsxs("button",{type:"button",onClick:()=>{Ge?D():F(Me)},className:`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${Ie?B?"bg-red-50 border-red-500 ring-2 ring-red-500/20 shadow-sm":"bg-red-500/15 border-red-400 shadow-[0_0_20px_rgba(239,68,68,0.2)]":B?"bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90 text-zinc-900":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]"}`,children:[h.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[h.jsx("div",{className:"w-9 h-9 rounded-xl overflow-hidden bg-black/40 shrink-0 border border-white/10",children:h.jsx("img",{src:Me.thumbnailUrl,alt:"",onError:gt=>{gt.currentTarget.src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=400&auto=format&fit=crop"},className:"w-full h-full object-cover"})}),h.jsxs("div",{className:"min-w-0",children:[h.jsx("div",{className:`text-xs font-display font-semibold truncate ${Ie?B?"text-red-950 font-bold":"text-white":B?"text-zinc-900":"text-zinc-200"}`,children:Me.title}),h.jsx("div",{className:`text-[10px] font-sans truncate ${B?"text-zinc-500":"text-zinc-400"}`,children:Me.channel})]})]}),h.jsx("div",{className:`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${Ge?"bg-red-600 text-white shadow-sm":B?"bg-zinc-200 text-zinc-700":"bg-white/10 text-white"}`,children:Ge?h.jsx(Gr,{className:"w-3.5 h-3.5 fill-current"}):h.jsx(Vr,{className:"w-3.5 h-3.5 ml-0.5 fill-current"})})]},Me.id)})})]}),S.filter(Me=>!Me.isCurated).length>0&&h.jsxs("div",{className:"space-y-2.5",children:[h.jsx("div",{className:`flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold ${B?"text-zinc-800":"text-zinc-300"}`,children:h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(im,{className:"w-3.5 h-3.5 text-red-500"}),h.jsx("span",{children:"My Saved YouTube Library"})]})}),h.jsx("div",{className:"space-y-2",children:S.filter(Me=>!Me.isCurated).map(Me=>{const Ie=(_==null?void 0:_.id)===Me.id,Ge=Ie&&g;return h.jsxs("div",{className:`p-3 rounded-2xl border flex items-center justify-between gap-3 transition-all ${Ie?B?"bg-red-50 border-red-500 ring-2 ring-red-500/20":"bg-red-500/15 border-red-400":B?"bg-zinc-50 border-zinc-200":"bg-white/[0.03] border-white/[0.06]"}`,children:[h.jsxs("div",{onClick:()=>F(Me),className:"flex items-center gap-3 min-w-0 flex-1 cursor-pointer",children:[h.jsx("div",{className:`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${Me.type==="playlist"?"bg-purple-600/20 text-purple-400":"bg-red-600/20 text-red-400"}`,children:Me.type==="playlist"?h.jsx(im,{className:"w-4 h-4"}):h.jsx(io,{className:"w-4 h-4"})}),h.jsxs("div",{className:"min-w-0",children:[h.jsx("div",{className:`text-xs font-display font-semibold truncate ${B?"text-zinc-900":"text-white"}`,children:Me.title}),h.jsxs("div",{className:`text-[10px] font-sans truncate ${B?"text-zinc-500":"text-zinc-400"}`,children:[Me.type==="playlist"?"Playlist":"Single Stream"," • ",Me.url]})]})]}),h.jsxs("div",{className:"flex items-center gap-1.5 shrink-0",children:[h.jsx("button",{type:"button",onClick:()=>{Ge?D():F(Me)},className:`p-2 rounded-xl transition-colors cursor-pointer ${Ge?"bg-red-600 text-white":B?"bg-zinc-200 text-zinc-800 hover:bg-zinc-300":"bg-white/10 text-white hover:bg-white/20"}`,children:Ge?h.jsx(Gr,{className:"w-3.5 h-3.5 fill-current"}):h.jsx(Vr,{className:"w-3.5 h-3.5 fill-current"})}),h.jsx("button",{type:"button",onClick:()=>j(Me.id),className:`p-2 rounded-xl transition-colors cursor-pointer ${B?"text-zinc-400 hover:text-red-600":"text-zinc-500 hover:text-red-400"}`,title:"Remove from library",children:h.jsx(ac,{className:"w-3.5 h-3.5"})})]})]},Me.id)})})]})]}),O==="ambient"&&h.jsx("div",{className:"flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 animate-fadeIn",children:h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3.5",children:na.map(Me=>{const Ie=l===Me.id,Ge=Ie&&o;return h.jsxs("div",{onClick:()=>{Ge?m():u(Me.id)},className:`relative p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between select-none group ${Ie?B?"bg-violet-50 border-violet-500 ring-2 ring-violet-500/20 shadow-sm":"bg-violet-950/35 border-violet-500/50 shadow-[0_0_25px_rgba(168,85,247,0.18)]":B?"bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90 text-zinc-900":"bg-white/[0.025] hover:bg-white/[0.05] border-white/[0.08] hover:border-white/[0.18]"}`,children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-2",children:[h.jsx("span",{className:`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md border ${B?"bg-zinc-200/60 text-zinc-700 border-zinc-300":"text-zinc-400 bg-white/[0.05] border-white/[0.06]"}`,children:Me.category}),h.jsx("div",{className:`w-7 h-7 rounded-full flex items-center justify-center transition-all ${Ge?"bg-violet-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.6)]":B?"bg-zinc-200 text-zinc-700 group-hover:bg-zinc-300":"bg-white/[0.06] text-zinc-300 group-hover:bg-white/[0.15] group-hover:text-white"}`,children:Ge?h.jsx(Gr,{className:"w-3.5 h-3.5 fill-current"}):h.jsx(Vr,{className:"w-3.5 h-3.5 ml-0.5 fill-current"})})]}),h.jsx("h3",{className:`text-sm font-display font-semibold tracking-wide transition-colors ${B?"text-zinc-900":"text-white"}`,children:Me.title}),h.jsx("p",{className:`text-xs font-sans mt-1 leading-snug line-clamp-2 ${B?"text-zinc-600":"text-zinc-400"}`,children:Me.tagline})]}),h.jsxs("div",{className:`mt-3 pt-2.5 border-t flex items-center justify-between text-[10px] font-mono ${B?"border-zinc-200 text-zinc-500":"border-white/[0.06] text-zinc-400"}`,children:[h.jsx("span",{className:"truncate pr-2",children:Me.frequency}),Ge&&h.jsxs("span",{className:"flex items-center gap-1 text-emerald-500 font-semibold shrink-0",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"}),"PLAYING"]})]})]},Me.id)})})}),h.jsxs("div",{className:`px-5 py-3 border-t flex flex-wrap items-center justify-between gap-3 shrink-0 ${B?"border-zinc-200 bg-zinc-50/60":"border-white/[0.06] bg-white/[0.01]"}`,children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(Nf,{className:`w-4 h-4 ${B?"text-zinc-600":"text-violet-400"}`}),h.jsx("span",{className:`text-xs font-display font-medium ${B?"text-zinc-800":"text-zinc-300"}`,children:"Auto-Stop Timer:"}),ve!==null&&h.jsxs("span",{className:`text-xs font-mono font-bold px-2 py-0.5 rounded-md border ${B?"bg-amber-100 text-amber-900 border-amber-300":"text-amber-300 bg-amber-500/15 border-amber-500/30"}`,children:[_e(ve)," left"]})]}),h.jsx("div",{className:"flex items-center gap-1.5",children:[{label:"Off",val:null},{label:"15m",val:15},{label:"25m",val:25},{label:"45m",val:45},{label:"60m",val:60}].map(Me=>h.jsx("button",{type:"button",onClick:()=>k(Me.val),className:`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${we===Me.val?B?"bg-zinc-900 text-white font-bold shadow-sm":"bg-violet-600 text-white font-bold shadow-sm":B?"bg-zinc-200/80 text-zinc-700 hover:bg-zinc-300":"bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08]"}`,children:Me.label},Me.label))})]}),h.jsxs("div",{className:`p-4 sm:p-5 border-t flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 ${B?"border-zinc-200 bg-zinc-100/90":"border-white/[0.08] bg-[#070914]/90 backdrop-blur-xl"}`,children:[h.jsxs("div",{className:"flex items-center gap-3 w-full sm:w-auto",children:[h.jsx("div",{className:`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${O==="youtube"?B?"bg-red-50 border-red-200 text-red-600":"bg-red-500/20 border-red-400/40 text-red-300":B?"bg-violet-50 border-violet-200 text-violet-700":"bg-violet-600/30 border-violet-400/40 text-violet-200"}`,children:O==="youtube"?h.jsx(io,{className:`w-5 h-5 ${g?"animate-pulse text-red-500":"text-zinc-400"}`}):h.jsx(sm,{className:`w-5 h-5 ${o?"text-violet-500 animate-pulse":"text-zinc-400"}`})}),h.jsxs("div",{className:"min-w-0 flex-1",children:[h.jsx("p",{className:`text-xs font-display font-medium truncate ${B?"text-zinc-900":"text-white"}`,children:ot}),h.jsxs("div",{className:"flex items-center gap-2 mt-0.5",children:[h.jsx(Xg,{isPlaying:Be,color:O==="youtube"?"#ef4444":B?"#7c3aed":Ne.accentColor,className:"w-16 h-4"}),h.jsx("span",{className:`text-[10px] font-mono ${B?"text-zinc-500":"text-zinc-400"}`,children:Be?O==="youtube"?"Streaming YouTube...":"Synthesizing...":"Audio Paused"})]})]})]}),h.jsxs("div",{className:"flex items-center gap-4 w-full sm:w-auto justify-end",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("button",{type:"button",onClick:O==="youtube"?J:y,className:`transition-colors cursor-pointer ${B?"text-zinc-600 hover:text-black":"text-zinc-400 hover:text-white"}`,title:"Toggle Mute",children:(O==="youtube"?A:p)?h.jsx(Wg,{className:"w-4 h-4 text-red-500"}):h.jsx(hf,{className:"w-4 h-4"})}),h.jsx("input",{type:"range",min:"0",max:O==="youtube"?100:1,step:O==="youtube"?1:.01,value:O==="youtube"?A?0:M:p?0:d,onChange:Me=>{const Ie=parseFloat(Me.target.value);if(O==="youtube"){N(Ie),A&&J();try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}}else v(Ie)},className:"w-20 sm:w-24 h-1.5 bg-zinc-300 rounded-lg appearance-none cursor-pointer accent-red-600","aria-label":"Volume slider"}),h.jsx("span",{className:`text-[10px] font-mono w-8 tabular-nums ${B?"text-zinc-600":"text-zinc-400"}`,children:O==="youtube"?`${A?0:Math.round(M)}%`:`${p?0:Math.round(d*100)}%`})]}),h.jsx("button",{type:"button",onClick:()=>{O==="youtube"?D():o?m():u(l)},className:`px-5 py-2.5 rounded-xl text-white text-xs font-display font-semibold tracking-wider uppercase flex items-center gap-2 shadow-md transition-all cursor-pointer ${O==="youtube"?"bg-red-600 hover:bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.35)]":"bg-violet-600 hover:bg-violet-500 shadow-[0_0_20px_rgba(147,51,234,0.35)]"}`,children:Be?h.jsxs(h.Fragment,{children:[h.jsx(Gr,{className:"w-3.5 h-3.5 fill-current"}),h.jsx("span",{children:"Pause"})]}):h.jsxs(h.Fragment,{children:[h.jsx(Vr,{className:"w-3.5 h-3.5 fill-current"}),h.jsx("span",{children:"Play"})]})})]})]})]})]})},VM=({isOpen:s,onClose:e})=>{const{profile:t,updateProfile:r,appTheme:o,setStudySubject:l,lastActiveDate:d,resetDayProgress:p,factoryReset:u}=$r(),m=o==="light",[v,y]=Ee.useState(t.name||"Azan"),[g,_]=Ee.useState(t.motto||"Remember, you are here for you."),[M,A]=Ee.useState(t.defaultFocusTopic||"Engineering"),[S,b]=Ee.useState(t.defaultFocusMode||"Deep Work"),[R,F]=Ee.useState(!1),[D,U]=Ee.useState(null);if(Ee.useEffect(()=>{y(t.name||"Azan"),_(t.motto||"Remember, you are here for you."),A(t.defaultFocusTopic||"Engineering"),b(t.defaultFocusMode||"Deep Work")},[t,s]),Ee.useEffect(()=>{const j=B=>{B.key==="Escape"&&s&&e()};return window.addEventListener("keydown",j),()=>window.removeEventListener("keydown",j)},[s,e]),!s)return null;const L=j=>{j.preventDefault();const B=v.trim()||"Azan",O=g.trim()||"Remember, you are here for you.",V=M.trim()||"Engineering",H=S.trim()||"Deep Work";r({name:B,motto:O,defaultFocusTopic:V,defaultFocusMode:H}),l(V),F(!0),setTimeout(()=>{F(!1),e()},500)},w=()=>{y("Azan"),_("Remember, you are here for you."),A("Engineering"),b("Deep Work"),r({name:"Azan",motto:"Remember, you are here for you.",defaultFocusTopic:"Engineering",defaultFocusMode:"Deep Work"}),l("Engineering")},N=()=>{window.confirm("Start a fresh day? This will uncheck today's tasks & habits, reset hydration to 0%, and reset focus timer.")&&(p(),U("Today's progress has been reset!"),setTimeout(()=>U(null),3e3))},J=()=>{window.confirm("WARNING: Are you sure you want to perform a factory reset? All saved tasks, habits, focus history, and settings will be permanently wiped and restored to default.")&&(u(),U("All app data restored to factory defaults."),setTimeout(()=>{U(null),e()},1500))},X=()=>{const j=new Date().getHours();return j>=5&&j<12?"Good morning":j>=12&&j<17?"Good afternoon":j>=17&&j<22?"Good evening":"Late night focus"};return h.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-fadeIn select-none ${m?"bg-black/35":"bg-black/80"}`,children:[h.jsx("div",{className:"fixed inset-0",onClick:e,"aria-hidden":"true"}),h.jsxs("div",{role:"dialog","aria-modal":"true","aria-labelledby":"profile-modal-title",className:`relative w-full max-w-lg overflow-hidden rounded-3xl border shadow-2xl flex flex-col z-10 ${m?"bg-white/95 border-zinc-200 text-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)]":"cosmic-card border-white/[0.14] text-white shadow-2xl"}`,children:[h.jsxs("div",{className:`flex items-center justify-between p-5 pb-3 border-b shrink-0 ${m?"border-zinc-200":"border-white/[0.08]"}`,children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("div",{className:`w-8 h-8 rounded-xl border flex items-center justify-center ${m?"bg-amber-50 border-amber-200 text-amber-700":"bg-amber-500/20 border-amber-400/30 text-amber-300"}`,children:h.jsx(Hg,{className:"w-4 h-4"})}),h.jsxs("div",{children:[h.jsx("h2",{id:"profile-modal-title",className:`text-sm font-display uppercase tracking-widest font-bold ${m?"text-zinc-900":"text-white"}`,children:"Personal Sanctuary Profile"}),h.jsx("p",{className:`text-[11px] font-sans ${m?"text-zinc-500":"text-zinc-400"}`,children:"Tailor your name, daily motto & focus targets"})]})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("button",{type:"button",onClick:w,"aria-label":"Reset profile to defaults",title:"Reset to defaults",className:`p-2 rounded-xl transition-colors cursor-pointer ${m?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white"}`,children:h.jsx(Or,{className:"w-3.5 h-3.5"})}),h.jsx("button",{type:"button",onClick:e,"aria-label":"Close Profile Modal",className:`p-2 rounded-xl transition-colors cursor-pointer ${m?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white"}`,children:h.jsx(dr,{className:"w-4 h-4"})})]})]}),h.jsxs("form",{onSubmit:L,className:"p-6 space-y-4",children:[h.jsxs("div",{className:`p-4 rounded-2xl border text-center space-y-1 transition-all ${m?"bg-zinc-50 border-zinc-200 text-zinc-800":"bg-white/[0.03] border-white/[0.08] text-zinc-200"}`,children:[h.jsx("span",{className:`text-[10px] font-mono uppercase tracking-widest ${m?"text-zinc-500":"text-zinc-400"}`,children:"Live Greeting Preview"}),h.jsxs("p",{className:"text-xs sm:text-sm font-sans leading-relaxed",children:[X(),","," ",h.jsx("strong",{className:m?"text-zinc-950":"text-white",children:v.trim()||"Azan"}),". •"," ",h.jsxs("span",{className:`italic ${m?"text-zinc-700 font-medium":"text-zinc-300"}`,children:["“",g.trim()||"Remember, you are here for you.","”"]})]})]}),h.jsxs("div",{className:"space-y-1.5",children:[h.jsxs("label",{className:`text-xs font-semibold flex items-center justify-between ${m?"text-zinc-800":"text-zinc-200"}`,children:[h.jsxs("span",{className:"flex items-center gap-1.5",children:[h.jsx(AM,{className:"w-3.5 h-3.5 text-amber-500"}),h.jsx("span",{children:"Your Name"})]}),h.jsx("span",{className:`text-[10px] font-normal ${m?"text-zinc-500":"text-zinc-400"}`,children:"Used in greetings & daily focus"})]}),h.jsx("input",{type:"text",value:v,onChange:j=>y(j.target.value),placeholder:"e.g. Azan",className:"w-full cosmic-input rounded-xl px-3.5 py-2.5 text-xs font-medium"})]}),h.jsxs("div",{className:"space-y-1.5",children:[h.jsxs("label",{className:`text-xs font-semibold flex items-center justify-between ${m?"text-zinc-800":"text-zinc-200"}`,children:[h.jsxs("span",{className:"flex items-center gap-1.5",children:[h.jsx(RM,{className:"w-3.5 h-3.5 text-violet-400"}),h.jsx("span",{children:"Daily Mantra / Motto"})]}),h.jsx("span",{className:`text-[10px] font-normal ${m?"text-zinc-500":"text-zinc-400"}`,children:"Displayed on your wallpaper"})]}),h.jsx("input",{type:"text",value:g,onChange:j=>_(j.target.value),placeholder:"e.g. Remember, you are here for you.",className:"w-full cosmic-input rounded-xl px-3.5 py-2.5 text-xs font-medium"})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-1",children:[h.jsxs("div",{className:"space-y-1.5",children:[h.jsxs("label",{className:`text-xs font-semibold flex items-center gap-1.5 ${m?"text-zinc-800":"text-zinc-200"}`,children:[h.jsx(DM,{className:"w-3.5 h-3.5 text-emerald-400"}),h.jsx("span",{children:"Primary Focus Topic"})]}),h.jsx("input",{type:"text",value:M,onChange:j=>A(j.target.value),placeholder:"e.g. Engineering",className:"w-full cosmic-input rounded-xl px-3.5 py-2 text-xs"})]}),h.jsxs("div",{className:"space-y-1.5",children:[h.jsxs("label",{className:`text-xs font-semibold flex items-center gap-1.5 ${m?"text-zinc-800":"text-zinc-200"}`,children:[h.jsx(hg,{className:"w-3.5 h-3.5 text-amber-500"}),h.jsx("span",{children:"Default Focus Mode"})]}),h.jsx("input",{type:"text",value:S,onChange:j=>b(j.target.value),placeholder:"e.g. Deep Work",className:"w-full cosmic-input rounded-xl px-3.5 py-2 text-xs"})]})]}),h.jsxs("div",{className:"pt-2",children:[h.jsx("span",{className:`text-[10px] font-mono uppercase tracking-wider block mb-1.5 ${m?"text-zinc-500":"text-zinc-400"}`,children:"Quick Mantras"}),h.jsx("div",{className:"flex flex-wrap gap-1.5",children:["Remember, you are here for you.","Discipline equals true freedom.","Deep focus over scattered noise.","Build with relentless craft."].map(j=>h.jsxs("button",{type:"button",onClick:()=>_(j),className:`text-[11px] px-2.5 py-1 rounded-lg border transition-all text-left cursor-pointer ${g===j?m?"bg-violet-100 border-violet-300 text-violet-900 font-medium":"bg-violet-600/30 border-violet-400/50 text-violet-200 font-medium":m?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300"}`,children:["“",j,"”"]},j))})]}),h.jsxs("div",{className:`p-3.5 rounded-2xl border space-y-2.5 ${m?"bg-zinc-50 border-zinc-200":"bg-white/[0.02] border-white/[0.08]"}`,children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx(wM,{className:`w-3.5 h-3.5 ${m?"text-violet-700":"text-violet-400"}`}),h.jsx("span",{className:`text-xs font-semibold ${m?"text-zinc-800":"text-zinc-200"}`,children:"Daily Rollover & Data Control"})]}),h.jsxs("span",{className:`text-[10px] font-mono ${m?"text-zinc-500":"text-zinc-400"}`,children:["Date: ",d]})]}),D&&h.jsxs("div",{className:"p-2 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs flex items-center gap-2",children:[h.jsx(ua,{className:"w-3.5 h-3.5 shrink-0"}),h.jsx("span",{children:D})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1",children:[h.jsxs("button",{type:"button",onClick:N,className:`px-3 py-2 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${m?"bg-white hover:bg-zinc-100 text-zinc-800 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200 border-white/[0.10]"}`,title:"Uncheck today's tasks & habits, reset hydration",children:[h.jsx(Or,{className:"w-3.5 h-3.5 text-violet-400"}),h.jsx("span",{children:"Start Fresh Day"})]}),h.jsxs("button",{type:"button",onClick:J,className:`px-3 py-2 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${m?"bg-rose-50 hover:bg-rose-100 text-rose-700 border-rose-200":"bg-rose-950/20 hover:bg-rose-900/40 text-rose-300 border-rose-500/20 hover:border-rose-500/40"}`,title:"Wipe data and restore factory defaults",children:[h.jsx(ac,{className:"w-3.5 h-3.5 text-rose-400"}),h.jsx("span",{children:"Factory Reset"})]})]})]}),h.jsxs("div",{className:"pt-4 flex items-center justify-end gap-2.5",children:[h.jsx("button",{type:"button",onClick:e,className:`px-4 py-2.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${m?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300"}`,children:"Cancel"}),h.jsx("button",{type:"submit",className:`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all cursor-pointer ${R?"bg-emerald-500 text-white":m?"bg-zinc-900 hover:bg-zinc-800 text-white":"bg-violet-600 hover:bg-violet-500 text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]"}`,children:R?h.jsxs(h.Fragment,{children:[h.jsx(ua,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Saved!"})]}):h.jsxs(h.Fragment,{children:[h.jsx(ms,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Save Profile"})]})})]})]})]})]})},WM=()=>{const{profile:s,tasks:e,toggleTask:t,addTask:r,deleteTask:o,habits:l,toggleHabit:d,addHabit:p,routines:u,addRoutineBlock:m,deleteRoutineBlock:v,resetRoutines:y,studySeconds:g,isStudyActive:_,studySubject:M,setStudySubject:A,toggleStudyTimer:S,resetStudyTimer:b,studySessions:R,hydration:F,setHydration:D,sleepHours:U,setSleep:L,dailyRating:w,setDailyRating:N,lastActiveDate:J,resetDayProgress:X,isHUDHidden:j,setIsHUDHidden:B,wallpaperSettings:O,audioSource:V,isAudioPlaying:H,activeSoundscapeId:se,playSoundscape:ee,stopSoundscape:Y,isYouTubePlaying:G,activeYouTubeItem:$,toggleYouTubePlay:P,appTheme:K,toggleAppTheme:we}=$r(),k=K==="light",[ve,be]=Ee.useState(!1),[Ne,_e]=Ee.useState(!1),[Ue,ot]=Ee.useState(!1),[Be,Me]=Ee.useState(!1),[Ie,Ge]=Ee.useState("none"),[gt,vt]=Ee.useState("12:00:00"),[Mt,Ut]=Ee.useState("PM"),[an,Dt]=Ee.useState(""),[$t,Bt]=Ee.useState(""),[on,Q]=Ee.useState(s.defaultFocusTopic||"Engineering"),[Zt,Lt]=Ee.useState(s.defaultFocusMode||"Deep Work"),[kt,de]=Ee.useState(!1),[_t,Ye]=Ee.useState(""),[st,z]=Ee.useState(""),[E,ne]=Ee.useState(""),Re=()=>{const fe=new Date().getHours();return fe>=5&&fe<12?"Good morning":fe>=12&&fe<17?"Good afternoon":fe>=17&&fe<22?"Good evening":"Late night focus"};Ee.useEffect(()=>{const fe=()=>{const lt=new Date,mt=lt.getHours(),ye=lt.getMinutes(),Qe=lt.getSeconds(),Ve=mt>=12?"PM":"AM",Ze=O.clockFormat==="24h",Pt=Ze?mt.toString().padStart(2,"0"):(mt%12||12).toString().padStart(2,"0"),St=ye.toString().padStart(2,"0"),Xt=Qe.toString().padStart(2,"0"),Jt=O.clockDivider==="dot"?" · ":O.clockDivider==="space"?" ":":";O.showSeconds?vt(`${Pt}${Jt}${St}${Jt}${Xt}`):vt(`${Pt}${Jt}${St}`),Ut(Ze?"":Ve);const zi=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],xi=["January","February","March","April","May","June","July","August","September","October","November","December"];Dt(`${zi[lt.getDay()]}, ${xi[lt.getMonth()]} ${lt.getDate()}, ${lt.getFullYear()}`)};fe();const ze=setInterval(fe,1e3);return()=>clearInterval(ze)},[O.clockFormat,O.showSeconds,O.clockDivider]);const Se=O.clockFontStyle==="serif"?"font-serif tracking-normal":O.clockFontStyle==="mono"?"font-mono tracking-tight":O.clockFontStyle==="minimal"?"font-sans font-extralight tracking-[0.08em]":"font-display tracking-[0.05em]",ke=O.clockSize==="compact"?"text-5xl sm:text-6xl md:text-8xl lg:text-[100px]":O.clockSize==="heroic"?"text-6xl sm:text-8xl md:text-9xl lg:text-[144px]":"text-5xl sm:text-7xl md:text-9xl lg:text-[124px]",Oe=O.clockHalo==="none"?"opacity-0":O.clockHalo==="subtle"?"bg-violet-600/8 blur-[90px]":"bg-violet-600/18 blur-[120px] animate-pulse",me=O.clockColor==="white"?k?"text-zinc-950 drop-shadow-[0_4px_24px_rgba(0,0,0,0.1)]":"text-white drop-shadow-[0_12px_60px_rgba(0,0,0,0.95)]":O.clockColor==="gold"?"text-amber-300 drop-shadow-[0_4px_30px_rgba(245,158,11,0.4)]":O.clockColor==="cyan"?"text-cyan-300 drop-shadow-[0_4px_30px_rgba(6,182,212,0.4)]":O.clockColor==="rose"?"text-rose-300 drop-shadow-[0_4px_30px_rgba(244,63,94,0.4)]":k?"text-zinc-900 drop-shadow-[0_4px_24px_rgba(200,180,160,0.30)]":"text-white drop-shadow-[0_12px_60px_rgba(0,0,0,0.95)]",xe=O.clockPosition==="zenith"?"mt-6 sm:mt-12 mb-auto":O.clockPosition==="bottom"?"mt-auto mb-16 sm:mb-20":"my-auto";Ee.useEffect(()=>{const fe=ze=>{ze.key==="Escape"&&(Ie!=="none"?Ge("none"):j?B(!1):Be&&Me(!1))};return window.addEventListener("keydown",fe),()=>window.removeEventListener("keydown",fe)},[Ie,j,Be,B]);const ge=fe=>{fe.preventDefault(),$t.trim()&&(r($t.trim()),Bt(""))},I=e.filter(fe=>fe.completed).length,re=e.length>0?Math.round(I/e.length*100):0,ie=l.filter(fe=>fe.completed).length,Te=l.length>0?Math.round(ie/l.length*100):0,Ae=new Date;Ae.setDate(Ae.getDate()-7);const $e=+((R||[]).filter(fe=>new Date(fe.timestamp)>=Ae).reduce((fe,ze)=>fe+ze.durationSeconds,0)/3600).toFixed(1),ft=Math.min(100,Math.round($e/15*100)),Ce=fe=>{const ze=Math.floor(fe/60),lt=fe%60;return`${ze.toString().padStart(2,"0")}:${lt.toString().padStart(2,"0")}`},Ke=na.find(fe=>fe.id===se)||na[0];return h.jsxs("div",{className:"relative w-screen h-screen max-h-screen overflow-hidden flex flex-col justify-between pt-safe-top pt-6 sm:pt-6 px-4 sm:px-8 pb-safe-bottom pb-6 select-none z-10 animate-fadeIn",children:[h.jsx("h1",{className:"sr-only",children:"FOR ME — Living Wallpaper & Focus Sanctuary"}),h.jsxs("header",{className:`flex items-center justify-between w-full min-h-12 shrink-0 z-20 gap-3 transition-opacity duration-300 ${j?"opacity-0 pointer-events-none":"opacity-100"}`,children:[h.jsxs("button",{type:"button",onClick:()=>B(!0),className:"flex items-center gap-2.5 cursor-pointer group shrink-0 text-left",title:"Enter Zen Wallpaper Mode",children:[h.jsx("div",{className:`w-8 h-8 rounded-full border flex items-center justify-center text-[11px] font-mono font-medium tracking-tight shadow-sm transition-all ${k?"border-zinc-300/80 bg-white/80 text-zinc-900 group-hover:bg-white group-hover:border-zinc-400":"border-white/15 bg-white/[0.04] text-zinc-200 group-hover:bg-white/[0.1] group-hover:border-white/30"}`,children:"FM"}),h.jsx("span",{className:`font-sans font-bold text-[11px] tracking-[0.22em] uppercase group-hover:opacity-85 transition-opacity ${k?"text-zinc-900":"text-zinc-200"}`,children:"FOR ME"})]}),h.jsxs("div",{className:`hidden md:flex items-center gap-1.5 px-3.5 py-1 rounded-full backdrop-blur-2xl border text-[11px] font-sans font-medium shadow-sm shrink-0 ${k?"bg-white/85 border-zinc-200/90 text-zinc-700":"bg-[#090b16]/70 border-white/[0.08] text-zinc-300"}`,children:[h.jsx(ms,{className:"w-3 h-3 text-amber-400"}),h.jsx("span",{children:an})]}),h.jsxs("nav",{"aria-label":"Wallpaper Quick Controls",className:`flex items-center gap-0.5 p-1 rounded-full backdrop-blur-2xl border transition-all ${k?"bg-white/90 border-zinc-200/90 text-zinc-700 shadow-[0_8px_24px_rgba(0,0,0,0.06)]":"bg-[#090b16]/75 border-white/[0.12] text-zinc-300 shadow-[0_12px_32px_rgba(0,0,0,0.6)]"}`,children:[h.jsx("button",{type:"button",onClick:()=>be(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${k?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Wallpaper Studio (Celestial Objects, Waves & Lighting)","aria-label":"Wallpaper Studio",children:h.jsx(Ng,{className:"w-3.5 h-3.5"})}),h.jsx("button",{type:"button",onClick:()=>Me(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${k?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Daily Routine Protocols","aria-label":"Daily Routine Protocols",children:h.jsx(tm,{className:"w-3.5 h-3.5"})}),h.jsxs("button",{type:"button",onClick:()=>_e(!0),className:`relative w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${H||G?k?"text-violet-600 bg-violet-50":"text-violet-300 bg-violet-600/20":k?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Focus Audio Sanctuary (YouTube Streams & Ambient Soundscapes)","aria-label":"Focus Audio Sanctuary",children:[V==="youtube"&&G?h.jsx(io,{className:"w-3.5 h-3.5 text-red-500 animate-pulse"}):h.jsx(sc,{className:`w-3.5 h-3.5 ${H||G?"animate-pulse":""}`}),(H||G)&&h.jsx("span",{className:"absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse"})]}),h.jsx("button",{type:"button",onClick:()=>ot(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${k?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:`Profile & Motto (${s.name})`,"aria-label":"Profile and Daily Mantra",children:h.jsx(Hg,{className:"w-3.5 h-3.5"})}),h.jsx("div",{className:`w-px h-3.5 mx-0.5 ${k?"bg-zinc-200":"bg-white/10"}`}),h.jsx("button",{type:"button",onClick:we,className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${k?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:`Switch to ${k?"Obsidian Dark":"Creamy Light"} Theme`,"aria-label":"Toggle Light/Dark Theme",children:k?h.jsx(no,{className:"w-3.5 h-3.5"}):h.jsx(zg,{className:"w-3.5 h-3.5"})}),h.jsx("button",{type:"button",onClick:()=>B(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${k?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Zen Mode (Hide all controls)","aria-label":"Enter Zen Mode",children:h.jsx(TM,{className:"w-3.5 h-3.5"})})]})]}),h.jsxs("main",{className:`${xe} text-center flex flex-col items-center justify-center relative z-20 py-4 select-none transition-all duration-300`,children:[h.jsx("div",{className:`absolute w-[360px] h-[360px] sm:w-[520px] sm:h-[520px] lg:w-[680px] lg:h-[680px] rounded-full ${Oe} pointer-events-none -z-10`}),h.jsxs("div",{className:`inline-flex items-baseline justify-center max-w-[94vw] px-2 gap-2 sm:gap-4 md:gap-6 ${Se} ${me} select-none leading-none flex-nowrap transition-all`,children:[h.jsx("span",{className:`${ke} font-light tabular-nums whitespace-nowrap`,children:gt}),Mt&&h.jsx("span",{className:"text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal opacity-75",children:Mt})]}),O.showGreeting!==!1&&h.jsx("div",{className:"mt-5 sm:mt-7 flex justify-center w-full px-2",children:h.jsxs("button",{type:"button",onClick:()=>ot(!0),className:`text-xs sm:text-sm font-sans tracking-wide px-4 sm:px-6 py-2 rounded-2xl sm:rounded-full backdrop-blur-2xl max-w-xl text-center leading-relaxed shadow-lg cursor-pointer transition-all hover:scale-[1.01] ${k?"bg-white/92 text-zinc-900 border border-zinc-300/80 shadow-md hover:bg-white":"bg-[#0a0618]/85 text-zinc-200 border border-white/[0.14] shadow-lg hover:border-violet-400/40"}`,title:"Click to personalize name & daily mantra",children:[Re(),", ",h.jsx("span",{className:`font-semibold ${k?"text-zinc-950":"text-white"}`,children:s.name}),". •"," ",h.jsxs("span",{className:`italic ${k?"text-zinc-700 font-medium":"text-zinc-300"}`,children:["“",s.motto||"Remember, you are here for you.","”"]})]})}),j&&h.jsxs("button",{type:"button",onClick:()=>B(!1),className:`mt-8 flex items-center gap-2 px-5 py-2.5 rounded-full text-xs transition-all border shadow-xl cursor-pointer ${k?"bg-white/90 text-zinc-800 border-zinc-300/80 hover:bg-white":"cosmic-dock text-zinc-300 hover:text-white border-white/[0.12] hover:border-violet-400/40"}`,children:[h.jsx(vg,{className:"w-3.5 h-3.5 text-amber-400"}),h.jsx("span",{className:"font-display tracking-wider",children:"Tap anywhere to restore controls"})]})]}),Ie!=="none"&&!j&&h.jsxs("div",{className:"fixed inset-x-0 bottom-24 z-30 flex justify-center px-4 animate-fadeIn pointer-events-auto",children:[h.jsx("div",{className:"fixed inset-0 -z-10",onClick:()=>Ge("none")}),Ie==="tasks"&&h.jsxs("div",{className:`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${k?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[h.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${k?"border-zinc-200":"border-white/[0.08]"}`,children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(am,{className:`w-4 h-4 ${k?"text-violet-700":"text-violet-300"}`}),h.jsx("h2",{className:"text-xs font-display uppercase tracking-[0.18em] font-semibold",children:"Tasks for the Day"})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsxs("span",{className:`text-[11px] font-display font-medium px-2.5 py-0.5 rounded-full border tabular-nums ${k?"bg-zinc-100 text-zinc-800 border-zinc-200":"bg-white/[0.06] text-violet-200 border-white/[0.10]"}`,children:[I,"/",e.length," done"]}),h.jsx("button",{type:"button",onClick:()=>{window.confirm("Reset and uncheck all tasks for today?")&&e.forEach(fe=>{fe.completed&&t(fe.id)})},className:`p-1 rounded-md border transition-colors cursor-pointer ${k?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-600":"bg-white/10 hover:bg-white/20 border-white/10 text-zinc-300 hover:text-white"}`,title:"Reset today's tasks","aria-label":"Reset tasks for today",children:h.jsx(Or,{className:"w-3.5 h-3.5"})}),h.jsx("button",{type:"button",onClick:()=>Ge("none"),className:"p-1 text-zinc-400 hover:text-white cursor-pointer","aria-label":"Close Tasks Panel",children:h.jsx(dr,{className:"w-3.5 h-3.5"})})]})]}),h.jsxs("form",{onSubmit:ge,className:"flex items-center gap-2 shrink-0",children:[h.jsx("input",{type:"text",placeholder:"Add task for today...",value:$t,onChange:fe=>Bt(fe.target.value),className:"flex-1 cosmic-input rounded-xl px-3.5 py-2 text-xs placeholder-zinc-500",autoFocus:!0}),h.jsx("button",{type:"submit",disabled:!$t.trim(),className:"w-8 h-8 rounded-xl bg-violet-600 hover:bg-violet-500 text-white disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all shrink-0 cursor-pointer shadow-sm",children:h.jsx(Zl,{className:"w-4 h-4"})})]}),h.jsx("div",{className:"max-h-56 overflow-y-auto space-y-1.5 pr-1",children:e.map(fe=>h.jsxs("div",{className:`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs select-none group ${fe.completed?k?"bg-zinc-100/60 border-zinc-200/60 text-zinc-400":"bg-white/[0.015] border-white/[0.04] text-zinc-500":k?"bg-white/80 hover:bg-white border-zinc-200/80 text-zinc-800":"bg-white/[0.035] hover:bg-white/[0.07] border-white/[0.08] hover:border-violet-400/20 text-zinc-200"}`,children:[h.jsxs("div",{className:"flex items-center gap-2.5 truncate flex-1 cursor-pointer pr-2",onClick:()=>t(fe.id),children:[h.jsx("div",{className:`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border transition-all ${fe.completed?"bg-emerald-500 border-emerald-400 text-white shadow-sm":k?"border-zinc-300 group-hover:border-violet-500":"border-white/[0.25] group-hover:border-violet-400"}`,children:fe.completed&&h.jsx(ua,{className:"w-2.5 h-2.5 stroke-[3]"})}),h.jsx("span",{className:`font-sans truncate ${fe.completed?"line-through text-zinc-400":k?"text-zinc-800 font-medium":"text-zinc-200"}`,children:fe.text})]}),h.jsx("button",{type:"button",onClick:()=>o(fe.id),className:"opacity-0 group-hover:opacity-100 text-zinc-400 hover:text-red-400 transition-opacity p-1 cursor-pointer",children:h.jsx(ac,{className:"w-3.5 h-3.5"})})]},fe.id))}),h.jsxs("div",{className:`pt-2.5 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${k?"border-zinc-200 text-zinc-600":"border-white/[0.08] text-zinc-400"}`,children:[h.jsxs("span",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400"}),"Day Progress"]}),h.jsxs("span",{className:`font-display font-medium tabular-nums ${k?"text-zinc-900":"text-zinc-200"}`,children:[re,"% done"]})]})]}),Ie==="habits"&&h.jsxs("div",{className:`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${k?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[h.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${k?"border-zinc-200":"border-white/[0.08]"}`,children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(nm,{className:`w-4 h-4 ${k?"text-violet-700":"text-violet-300"}`}),h.jsx("h2",{className:"text-xs font-display uppercase tracking-[0.18em] font-semibold",children:"Daily Rhythm Pulse"})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsxs("span",{className:`text-[11px] font-display font-medium px-2.5 py-0.5 rounded-full border tabular-nums ${k?"bg-zinc-100 text-zinc-800 border-zinc-200":"bg-white/[0.06] text-violet-200 border-white/[0.10]"}`,children:[ie,"/",l.length," kept"]}),h.jsx("button",{type:"button",onClick:()=>{window.confirm("Reset today's habit checkmarks?")&&l.forEach(fe=>{fe.completed&&d(fe.id)})},className:`p-1 rounded-md border transition-colors cursor-pointer ${k?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-600":"bg-white/10 hover:bg-white/20 border-white/10 text-zinc-300 hover:text-white"}`,title:"Reset today's habits","aria-label":"Reset habits for today",children:h.jsx(Or,{className:"w-3.5 h-3.5"})}),h.jsx("button",{type:"button",onClick:()=>{const fe=prompt("Add new daily habit:");fe&&p(fe)},className:`p-1 rounded-md border transition-colors cursor-pointer ${k?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/10 hover:bg-white/20 border-white/10 text-white"}`,title:"Add habit","aria-label":"Add new daily habit",children:h.jsx(Zl,{className:"w-3.5 h-3.5"})}),h.jsx("button",{type:"button",onClick:()=>Ge("none"),className:"p-1 text-zinc-400 hover:text-white cursor-pointer","aria-label":"Close Habits Panel",children:h.jsx(dr,{className:"w-3.5 h-3.5"})})]})]}),h.jsx("div",{className:"max-h-56 overflow-y-auto space-y-1.5 pr-1",children:l.map(fe=>h.jsxs("div",{onClick:()=>d(fe.id),className:`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs cursor-pointer select-none group ${fe.completed?k?"bg-zinc-100/60 border-zinc-200/60 text-zinc-400":"bg-white/[0.015] border-white/[0.04] text-zinc-400":k?"bg-white/80 hover:bg-white border-zinc-200/80 text-zinc-800":"bg-white/[0.035] hover:bg-white/[0.07] border-white/[0.08] hover:border-violet-400/20 text-zinc-200"}`,children:[h.jsxs("div",{className:"flex flex-col gap-0.5 truncate pr-2",children:[h.jsx("span",{className:`font-sans truncate ${fe.completed?"line-through text-zinc-400":k?"text-zinc-800 font-medium":"text-zinc-200"}`,children:fe.name}),h.jsx("div",{className:"flex items-center gap-1.5 text-[10px] font-mono",children:fe.streak>0?h.jsxs("span",{className:"text-amber-500 flex items-center gap-0.5 font-medium",children:[h.jsx(hg,{className:"w-3 h-3 fill-amber-500"})," ",fe.streak," day streak"]}):h.jsx("span",{className:k?"text-zinc-500":"text-zinc-400",children:"Ready today"})})]}),h.jsx("div",{className:`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border transition-all ${fe.completed?"bg-emerald-500 border-emerald-400 text-white shadow-sm":k?"border-zinc-300 group-hover:border-violet-500":"border-white/[0.25] group-hover:border-violet-400"}`,children:fe.completed&&h.jsx(ua,{className:"w-2.5 h-2.5 stroke-[3]"})})]},fe.id))}),h.jsxs("div",{className:`pt-2.5 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${k?"border-zinc-200 text-zinc-600":"border-white/[0.08] text-zinc-400"}`,children:[h.jsxs("div",{className:`flex items-center gap-1.5 ${k?"text-zinc-700":"text-zinc-400"}`,children:[h.jsx(ms,{className:`w-3.5 h-3.5 ${k?"text-amber-500":"text-violet-300"}`}),h.jsx("span",{children:"Daily Consistency"})]}),h.jsxs("span",{className:`font-display font-medium tabular-nums ${k?"text-zinc-900":"text-zinc-200"}`,children:[Te,"% kept"]})]})]}),Ie==="timer"&&h.jsxs("div",{className:`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${k?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[h.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${k?"border-zinc-200":"border-white/[0.08]"}`,children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(Nf,{className:`w-4 h-4 ${k?"text-violet-700":"text-violet-300"}`}),h.jsx("h2",{className:"text-xs font-display uppercase tracking-[0.18em] font-semibold",children:"Deep Study Console"})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:`text-[10px] font-display px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${_?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 animate-pulse":k?"bg-zinc-100 text-zinc-600 border border-zinc-200":"bg-white/[0.06] text-zinc-400 border border-white/[0.08]"}`,children:_?"RUNNING":"STOPPED"}),h.jsx("button",{type:"button",onClick:()=>Ge("none"),className:"p-1 text-zinc-400 hover:text-white",children:h.jsx(dr,{className:"w-3.5 h-3.5"})})]})]}),h.jsxs("div",{className:"text-center py-2",children:[h.jsx("div",{className:`text-5xl font-display font-light tracking-widest leading-none tabular-nums ${k?"text-zinc-900":"text-white"}`,children:Ce(g)}),h.jsxs("p",{className:`text-[10px] font-display tracking-[0.2em] uppercase mt-2 ${k?"text-zinc-500":"text-zinc-400"}`,children:[M," • ",Zt]})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[h.jsx("input",{type:"text",value:Zt,onChange:fe=>Lt(fe.target.value),placeholder:"Mode (e.g. Deep Work)",className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"}),h.jsx("input",{type:"text",value:on,onChange:fe=>{Q(fe.target.value),A(fe.target.value)},placeholder:"Subject (e.g. Engineering)",className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"})]}),h.jsxs("div",{className:"flex gap-2",children:[h.jsxs("button",{type:"button",onClick:S,className:`flex-1 py-2.5 rounded-xl font-display text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 border transition-all cursor-pointer ${k?"bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-800":"bg-violet-600 hover:bg-violet-500 text-white border-violet-400/30"}`,children:[_?h.jsx(Gr,{className:"w-4 h-4"}):h.jsx(Vr,{className:"w-4 h-4 ml-0.5 fill-current"}),h.jsx("span",{children:_?"Pause Focus":"Start Focus"})]}),h.jsx("button",{type:"button",onClick:b,className:`px-3 py-2.5 rounded-xl border transition-colors cursor-pointer ${k?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white border-white/[0.08]"}`,title:"Reset stopwatch",children:h.jsx(Or,{className:"w-3.5 h-3.5"})})]}),h.jsxs("div",{className:`pt-2.5 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${k?"border-zinc-200 text-zinc-600":"border-white/[0.08] text-zinc-400"}`,children:[h.jsxs("span",{children:["Weekly: ",h.jsxs("strong",{className:`font-display ${k?"text-zinc-900":"text-zinc-200"}`,children:[$e,"h"]})," / 15h"]}),h.jsxs("span",{className:`font-display font-medium tabular-nums ${k?"text-zinc-900":"text-zinc-200"}`,children:[ft,"% quota"]})]})]}),Ie==="wellness"&&h.jsxs("div",{className:`w-full max-w-sm p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${k?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[h.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-white/10",children:[h.jsxs("span",{className:"text-xs font-display uppercase tracking-widest font-semibold flex items-center gap-1.5",children:[h.jsx(ms,{className:"w-3.5 h-3.5 text-amber-400"}),"Daily Wellness Pulse"]}),h.jsx("button",{onClick:()=>Ge("none"),className:"p-1 text-zinc-400 hover:text-white",children:h.jsx(dr,{className:"w-3.5 h-3.5"})})]}),h.jsxs("div",{className:"flex items-center justify-between py-1 text-xs",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(MM,{className:"w-4 h-4 text-sky-400"}),h.jsx("span",{children:"Hydration Target"})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("button",{type:"button",onClick:()=>D(fe=>Math.max(0,fe-12.5)),className:"w-6 h-6 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center font-bold",children:"-"}),h.jsxs("span",{className:"font-mono font-bold w-12 text-center",children:[Math.round(F/100*8)," / 8"]}),h.jsx("button",{type:"button",onClick:()=>D(fe=>Math.min(100,fe+12.5)),className:"w-6 h-6 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center font-bold",children:"+"})]})]}),h.jsxs("div",{className:"flex items-center justify-between py-1 text-xs",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(no,{className:"w-4 h-4 text-violet-400"}),h.jsx("span",{children:"Sleep Duration"})]}),h.jsxs("button",{type:"button",onClick:()=>L(U%12+1),className:"px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 font-mono font-bold text-xs",children:[U," Hours (Click to Cycle)"]})]}),h.jsxs("div",{className:"flex items-center justify-between py-1 text-xs",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(NM,{className:"w-4 h-4 text-amber-400"}),h.jsx("span",{children:"Day Score"})]}),h.jsxs("button",{type:"button",onClick:()=>N(w>=10?1:w+1),className:"px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 font-mono font-bold text-xs text-amber-400",children:[w," / 10 ★"]})]}),h.jsxs("div",{className:`pt-3 mt-1 border-t flex items-center justify-between ${k?"border-zinc-200":"border-white/10"}`,children:[h.jsxs("div",{className:"flex flex-col",children:[h.jsxs("span",{className:"text-[11px] font-medium flex items-center gap-1",children:[h.jsx(Or,{className:"w-3 h-3 text-violet-400"}),"Day Reset"]}),h.jsxs("span",{className:`text-[9px] font-mono ${k?"text-zinc-500":"text-zinc-400"}`,children:["Active: ",J]})]}),h.jsxs("button",{type:"button",onClick:()=>{window.confirm("Start a fresh day? This will uncheck today's tasks & habits and reset hydration to 0%.")&&X()},className:`px-3 py-1.5 rounded-xl border text-[11px] font-display uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${k?"bg-violet-50 hover:bg-violet-100 text-violet-700 border-violet-200":"bg-violet-600/30 hover:bg-violet-600/50 text-violet-200 border-violet-400/40 hover:border-violet-400"}`,title:"Reset daily progress for a fresh day",children:[h.jsx(Or,{className:"w-3 h-3"}),h.jsx("span",{children:"Start Fresh Day"})]})]})]})]}),!j&&h.jsx("footer",{className:"relative shrink-0 flex items-center justify-center w-full z-20 pb-2",children:h.jsxs("nav",{"aria-label":"Sanctuary Focus Dock",className:`flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-full backdrop-blur-2xl border shadow-2xl transition-all ${k?"bg-white/85 border-zinc-200/90 text-zinc-800 shadow-[0_15px_40px_rgba(0,0,0,0.1)]":"bg-[#090b16]/80 border-white/[0.12] text-zinc-200 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"}`,children:[h.jsxs("div",{className:`flex items-center rounded-full border transition-all ${_?"bg-emerald-500/20 border-emerald-500/40 text-emerald-300":k?"bg-zinc-100/90 border-zinc-200 text-zinc-800":"bg-white/[0.04] border-white/[0.08] text-zinc-300"}`,children:[h.jsxs("button",{type:"button",onClick:S,className:"pl-3 pr-1.5 py-1.5 flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity",title:_?"Pause focus timer":"Start focus timer",children:[_?h.jsx(Gr,{className:"w-3.5 h-3.5 text-emerald-400 animate-pulse"}):h.jsx(Vr,{className:"w-3.5 h-3.5 text-zinc-400 fill-current"}),h.jsx("span",{className:"font-mono text-xs font-semibold tabular-nums",children:Ce(g)})]}),h.jsx("button",{type:"button",onClick:()=>Ge(fe=>fe==="timer"?"none":"timer"),className:`pr-3 pl-1 py-1.5 text-[11px] font-sans border-l transition-colors cursor-pointer ${k?"border-zinc-200 hover:text-black":"border-white/10 hover:text-white"}`,title:"Expand Focus Timer Panel",children:h.jsx("span",{children:on})})]}),h.jsxs("button",{type:"button",onClick:()=>Ge(fe=>fe==="tasks"?"none":"tasks"),className:`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-sans transition-all cursor-pointer ${Ie==="tasks"?"bg-violet-600 text-white border-violet-400":k?"bg-zinc-100/90 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300 hover:text-white"}`,title:"Daily Tasks",children:[h.jsx(am,{className:"w-3.5 h-3.5 text-violet-400"}),h.jsx("span",{children:"Tasks"}),h.jsxs("span",{className:`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${k?"bg-zinc-200/90 text-zinc-800":"bg-white/10 text-violet-200"}`,children:[I,"/",e.length]})]}),h.jsxs("button",{type:"button",onClick:()=>Ge(fe=>fe==="habits"?"none":"habits"),className:`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-sans transition-all cursor-pointer ${Ie==="habits"?"bg-violet-600 text-white border-violet-400":k?"bg-zinc-100/90 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300 hover:text-white"}`,title:"Daily Rhythm Habits",children:[h.jsx(nm,{className:"w-3.5 h-3.5 text-sky-400"}),h.jsx("span",{children:"Rhythm"}),h.jsxs("span",{className:`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${k?"bg-zinc-200/90 text-zinc-800":"bg-white/10 text-sky-200"}`,children:[ie,"/",l.length]})]}),h.jsxs("button",{type:"button",onClick:()=>Ge(fe=>fe==="wellness"?"none":"wellness"),className:`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-sans transition-all cursor-pointer ${Ie==="wellness"?"bg-amber-500 text-black border-amber-400":k?"bg-zinc-100/90 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300 hover:text-white"}`,title:"Sleep, Water & Daily Rating",children:[h.jsx(no,{className:"w-3.5 h-3.5 text-amber-400"}),h.jsxs("span",{className:"font-mono text-[11px]",children:[U,"h"]}),h.jsx("span",{className:"text-white/20",children:"•"}),h.jsxs("span",{className:"font-mono text-[11px] text-sky-400",children:[Math.round(F/100*8),"/8💧"]})]}),h.jsxs("div",{onClick:()=>_e(!0),className:`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs cursor-pointer group transition-all ${H||G?V==="youtube"?"bg-red-600/30 border-red-500/40 text-red-200":"bg-violet-600/30 border-violet-500/40 text-violet-200":k?"bg-zinc-100/90 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300 hover:text-white"}`,title:"Open Audio Sanctuary",children:[V==="youtube"&&G?h.jsx(io,{className:"w-3.5 h-3.5 text-red-500 animate-pulse"}):h.jsx(sc,{className:`w-3.5 h-3.5 ${H||G?"text-violet-300 animate-pulse":"text-zinc-400"}`}),h.jsx("span",{className:"max-w-[80px] sm:max-w-[120px] truncate text-[11px] font-medium",children:V==="youtube"?$?$.title:"YouTube":Ke.title}),h.jsx(Xg,{isPlaying:V==="youtube"?G:H,color:V==="youtube"?"#ef4444":k?"#7c3aed":Ke.accentColor,className:"w-8 h-2.5",barCount:4}),h.jsx("button",{type:"button",onClick:fe=>{fe.stopPropagation(),V==="youtube"?P():H?Y():ee(se)},className:"w-5 h-5 rounded-md flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors",title:(V==="youtube"?G:H)?"Pause audio":"Play audio",children:(V==="youtube"?G:H)?h.jsx(Gr,{className:"w-2.5 h-2.5 fill-current"}):h.jsx(Vr,{className:"w-2.5 h-2.5 fill-current ml-0.5"})})]})]})}),Be&&h.jsxs("div",{className:"fixed inset-0 z-50 flex",children:[h.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm",onClick:()=>Me(!1)}),h.jsxs("aside",{className:`relative z-10 w-80 sm:w-96 max-w-[90vw] h-full backdrop-blur-3xl border-r shadow-2xl p-6 flex flex-col justify-between ${k?"bg-[#faf8f4]/98 border-zinc-200 text-zinc-900":"bg-[#0d0f17]/95 border-white/[0.1] text-white"}`,children:[h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{className:`flex items-center justify-between pb-3.5 border-b ${k?"border-zinc-200":"border-white/[0.08]"}`,children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(tm,{className:`w-4 h-4 ${k?"text-violet-700":"text-violet-300"}`}),h.jsx("h3",{className:`text-xs font-sans uppercase tracking-[0.16em] font-semibold ${k?"text-zinc-900":"text-white"}`,children:"Daily Routine Protocols"})]}),h.jsx("button",{onClick:()=>Me(!1),className:`transition-colors cursor-pointer ${k?"text-zinc-500 hover:text-black":"text-zinc-400 hover:text-white"}`,children:h.jsx(dr,{className:"w-4 h-4"})})]}),h.jsxs("div",{className:"space-y-2.5 text-xs overflow-y-auto max-h-[58vh] pr-1",children:[u.map(fe=>h.jsxs("div",{className:`p-3.5 rounded-2xl border transition-all relative group ${k?"bg-white/80 border-zinc-200 shadow-sm":"bg-white/[0.03] border-white/[0.08]"}`,children:[h.jsxs("div",{className:"flex items-center justify-between pb-1.5",children:[h.jsxs("span",{className:"font-semibold text-amber-500 flex items-center gap-1.5",children:[h.jsx(PM,{className:"w-3.5 h-3.5"})," ",fe.title]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:`text-[10px] font-mono ${k?"text-zinc-500":"text-zinc-400"}`,children:fe.timeRange}),u.length>1&&h.jsx("button",{type:"button",onClick:()=>v(fe.id),className:"opacity-0 group-hover:opacity-100 p-1 text-zinc-400 hover:text-red-400 transition-opacity cursor-pointer",title:"Delete protocol block",children:h.jsx(ac,{className:"w-3 h-3"})})]})]}),h.jsx("p",{className:`text-[11px] leading-relaxed ${k?"text-zinc-700":"text-zinc-300"}`,children:fe.description})]},fe.id)),kt?h.jsxs("form",{onSubmit:fe=>{fe.preventDefault(),_t.trim()&&E.trim()&&(m({title:_t.trim(),timeRange:st.trim()||"Flexible",description:E.trim(),iconType:"custom"}),Ye(""),z(""),ne(""),de(!1))},className:`p-3 rounded-2xl border space-y-2 ${k?"bg-white border-zinc-300 shadow-sm":"bg-white/[0.05] border-white/[0.12]"}`,children:[h.jsx("input",{type:"text",placeholder:"Protocol title (e.g. Creative Sprint)",value:_t,onChange:fe=>Ye(fe.target.value),className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs",required:!0}),h.jsx("input",{type:"text",placeholder:"Time range (e.g. 14:00 – 16:00)",value:st,onChange:fe=>z(fe.target.value),className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"}),h.jsx("textarea",{placeholder:"Protocol description / intentions...",value:E,onChange:fe=>ne(fe.target.value),className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs resize-none h-16",required:!0}),h.jsxs("div",{className:"flex items-center justify-end gap-1.5",children:[h.jsx("button",{type:"button",onClick:()=>de(!1),className:`px-2.5 py-1 rounded-lg text-[11px] ${k?"text-zinc-600 hover:text-black":"text-zinc-400 hover:text-white"}`,children:"Cancel"}),h.jsx("button",{type:"submit",className:"px-3 py-1 rounded-lg text-[11px] bg-violet-600 hover:bg-violet-500 text-white font-medium cursor-pointer",children:"Add Block"})]})]}):h.jsxs("button",{type:"button",onClick:()=>de(!0),className:`w-full py-2 rounded-xl border border-dashed flex items-center justify-center gap-1.5 text-[11px] transition-all cursor-pointer ${k?"border-zinc-300 hover:border-zinc-400 text-zinc-600 hover:text-zinc-900 bg-white/40":"border-white/10 hover:border-white/20 text-zinc-400 hover:text-white bg-white/[0.01]"}`,children:[h.jsx(Zl,{className:"w-3 h-3"}),h.jsx("span",{children:"Add Custom Protocol Block"})]})]})]}),h.jsxs("div",{className:"flex items-center gap-2 pt-2",children:[h.jsx("button",{type:"button",onClick:y,className:`px-3 py-2.5 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${k?"border-zinc-200 text-zinc-600 hover:bg-zinc-100":"border-white/10 text-zinc-400 hover:bg-white/[0.05] hover:text-white"}`,title:"Reset to default protocols",children:"Reset"}),h.jsx("button",{type:"button",onClick:()=>Me(!1),className:`flex-1 py-2.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${k?"bg-zinc-900 hover:bg-zinc-800 text-white":"bg-white/[0.06] hover:bg-white/[0.12] text-white"}`,children:"Close Routine"})]})]})]}),h.jsx(VM,{isOpen:Ue,onClose:()=>ot(!1)}),h.jsx(HM,{isOpen:ve,onClose:()=>be(!1)}),h.jsx(GM,{isOpen:Ne,onClose:()=>_e(!1)})]})},jM=()=>{const{wallpaperTheme:s,appTheme:e}=$r(),t=e==="light";return h.jsxs("div",{"data-theme":s,className:`theme-${e} relative w-screen h-screen max-h-screen overflow-hidden text-[var(--text-primary)] font-sans transition-colors duration-200 ${t?"bg-[#f7f5f0]/95":"bg-[#060814]"}`,children:[h.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--card-bg-elevated)] focus:text-[var(--text-primary)] focus:rounded-xl focus:border focus:border-[var(--card-border)] focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-violet-400 font-sans text-xs font-semibold",children:"Skip to main content"}),h.jsx(Wv,{}),h.jsx(fM,{}),h.jsx(zM,{}),h.jsx("div",{className:"pointer-events-none fixed inset-0 z-20 dreamy-grain opacity-40 mix-blend-overlay"}),h.jsx("main",{id:"main-content",className:"w-full h-full overflow-y-auto lg:overflow-hidden relative z-10",children:h.jsx(WM,{})})]})};function $M(){return h.jsx(Vv,{children:h.jsx(jM,{})})}const om=document.getElementById("root");om&&Fv.createRoot(om).render(h.jsx(Pv.StrictMode,{children:h.jsx($M,{})}));
