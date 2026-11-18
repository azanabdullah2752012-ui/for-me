var Av=Object.defineProperty;var Cv=(s,e,t)=>e in s?Av(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var er=(s,e,t)=>Cv(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function a0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Fu={exports:{}},Ga={},ku={exports:{}},At={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function Rv(){if(qp)return At;qp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.iterator;function _(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,C={};function y(L,ne,be){this.props=L,this.context=ne,this.refs=C,this.updater=be||M}y.prototype.isReactComponent={},y.prototype.setState=function(L,ne){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,ne,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function S(){}S.prototype=y.prototype;function R(L,ne,be){this.props=L,this.context=ne,this.refs=C,this.updater=be||M}var F=R.prototype=new S;F.constructor=R,b(F,y.prototype),F.isPureReactComponent=!0;var P=Array.isArray,z=Object.prototype.hasOwnProperty,D={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function N(L,ne,be){var U,_e={},Me=null,De=null;if(ne!=null)for(U in ne.ref!==void 0&&(De=ne.ref),ne.key!==void 0&&(Me=""+ne.key),ne)z.call(ne,U)&&!w.hasOwnProperty(U)&&(_e[U]=ne[U]);var Se=arguments.length-2;if(Se===1)_e.children=be;else if(1<Se){for(var Fe=Array(Se),ut=0;ut<Se;ut++)Fe[ut]=arguments[ut+2];_e.children=Fe}if(L&&L.defaultProps)for(U in Se=L.defaultProps,Se)_e[U]===void 0&&(_e[U]=Se[U]);return{$$typeof:s,type:L,key:Me,ref:De,props:_e,_owner:D.current}}function ee(L,ne){return{$$typeof:s,type:L.type,key:ne,ref:L.ref,props:L.props,_owner:L._owner}}function X(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function G(L){var ne={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(be){return ne[be]})}var W=/\/+/g;function V(L,ne){return typeof L=="object"&&L!==null&&L.key!=null?G(""+L.key):ne.toString(36)}function H(L,ne,be,U,_e){var Me=typeof L;(Me==="undefined"||Me==="boolean")&&(L=null);var De=!1;if(L===null)De=!0;else switch(Me){case"string":case"number":De=!0;break;case"object":switch(L.$$typeof){case s:case e:De=!0}}if(De)return De=L,_e=_e(De),L=U===""?"."+V(De,0):U,P(_e)?(be="",L!=null&&(be=L.replace(W,"$&/")+"/"),H(_e,ne,be,"",function(ut){return ut})):_e!=null&&(X(_e)&&(_e=ee(_e,be+(!_e.key||De&&De.key===_e.key?"":(""+_e.key).replace(W,"$&/")+"/")+L)),ne.push(_e)),1;if(De=0,U=U===""?".":U+":",P(L))for(var Se=0;Se<L.length;Se++){Me=L[Se];var Fe=U+V(Me,Se);De+=H(Me,ne,be,Fe,_e)}else if(Fe=_(L),typeof Fe=="function")for(L=Fe.call(L),Se=0;!(Me=L.next()).done;)Me=Me.value,Fe=U+V(Me,Se++),De+=H(Me,ne,be,Fe,_e);else if(Me==="object")throw ne=String(L),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return De}function O(L,ne,be){if(L==null)return L;var U=[],_e=0;return H(L,U,"","",function(Me){return ne.call(be,Me,_e++)}),U}function re(L){if(L._status===-1){var ne=L._result;ne=ne(),ne.then(function(be){(L._status===0||L._status===-1)&&(L._status=1,L._result=be)},function(be){(L._status===0||L._status===-1)&&(L._status=2,L._result=be)}),L._status===-1&&(L._status=0,L._result=ne)}if(L._status===1)return L._result.default;throw L._result}var K={current:null},j={transition:null},$={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:j,ReactCurrentOwner:D};function Y(){throw Error("act(...) is not supported in production builds of React.")}return At.Children={map:O,forEach:function(L,ne,be){O(L,function(){ne.apply(this,arguments)},be)},count:function(L){var ne=0;return O(L,function(){ne++}),ne},toArray:function(L){return O(L,function(ne){return ne})||[]},only:function(L){if(!X(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},At.Component=y,At.Fragment=t,At.Profiler=o,At.PureComponent=R,At.StrictMode=r,At.Suspense=u,At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,At.act=Y,At.cloneElement=function(L,ne,be){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var U=b({},L.props),_e=L.key,Me=L.ref,De=L._owner;if(ne!=null){if(ne.ref!==void 0&&(Me=ne.ref,De=D.current),ne.key!==void 0&&(_e=""+ne.key),L.type&&L.type.defaultProps)var Se=L.type.defaultProps;for(Fe in ne)z.call(ne,Fe)&&!w.hasOwnProperty(Fe)&&(U[Fe]=ne[Fe]===void 0&&Se!==void 0?Se[Fe]:ne[Fe])}var Fe=arguments.length-2;if(Fe===1)U.children=be;else if(1<Fe){Se=Array(Fe);for(var ut=0;ut<Fe;ut++)Se[ut]=arguments[ut+2];U.children=Se}return{$$typeof:s,type:L.type,key:_e,ref:Me,props:U,_owner:De}},At.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:l,_context:L},L.Consumer=L},At.createElement=N,At.createFactory=function(L){var ne=N.bind(null,L);return ne.type=L,ne},At.createRef=function(){return{current:null}},At.forwardRef=function(L){return{$$typeof:m,render:L}},At.isValidElement=X,At.lazy=function(L){return{$$typeof:x,_payload:{_status:-1,_result:L},_init:re}},At.memo=function(L,ne){return{$$typeof:h,type:L,compare:ne===void 0?null:ne}},At.startTransition=function(L){var ne=j.transition;j.transition={};try{L()}finally{j.transition=ne}},At.unstable_act=Y,At.useCallback=function(L,ne){return K.current.useCallback(L,ne)},At.useContext=function(L){return K.current.useContext(L)},At.useDebugValue=function(){},At.useDeferredValue=function(L){return K.current.useDeferredValue(L)},At.useEffect=function(L,ne){return K.current.useEffect(L,ne)},At.useId=function(){return K.current.useId()},At.useImperativeHandle=function(L,ne,be){return K.current.useImperativeHandle(L,ne,be)},At.useInsertionEffect=function(L,ne){return K.current.useInsertionEffect(L,ne)},At.useLayoutEffect=function(L,ne){return K.current.useLayoutEffect(L,ne)},At.useMemo=function(L,ne){return K.current.useMemo(L,ne)},At.useReducer=function(L,ne,be){return K.current.useReducer(L,ne,be)},At.useRef=function(L){return K.current.useRef(L)},At.useState=function(L){return K.current.useState(L)},At.useSyncExternalStore=function(L,ne,be){return K.current.useSyncExternalStore(L,ne,be)},At.useTransition=function(){return K.current.useTransition()},At.version="18.3.1",At}var Kp;function ff(){return Kp||(Kp=1,ku.exports=Rv()),ku.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function Nv(){if(Zp)return Ga;Zp=1;var s=ff(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(m,u,h){var x,v={},_=null,M=null;h!==void 0&&(_=""+h),u.key!==void 0&&(_=""+u.key),u.ref!==void 0&&(M=u.ref);for(x in u)r.call(u,x)&&!l.hasOwnProperty(x)&&(v[x]=u[x]);if(m&&m.defaultProps)for(x in u=m.defaultProps,u)v[x]===void 0&&(v[x]=u[x]);return{$$typeof:e,type:m,key:_,ref:M,props:v,_owner:o.current}}return Ga.Fragment=t,Ga.jsx=d,Ga.jsxs=d,Ga}var Jp;function Pv(){return Jp||(Jp=1,Fu.exports=Nv()),Fu.exports}var p=Pv(),we=ff();const Lv=a0(we);var xl={},Ou={exports:{}},Zn={},Bu={exports:{}},Hu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function Dv(){return Qp||(Qp=1,(function(s){function e(j,$){var Y=j.length;j.push($);e:for(;0<Y;){var L=Y-1>>>1,ne=j[L];if(0<o(ne,$))j[L]=$,j[Y]=ne,Y=L;else break e}}function t(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var $=j[0],Y=j.pop();if(Y!==$){j[0]=Y;e:for(var L=0,ne=j.length,be=ne>>>1;L<be;){var U=2*(L+1)-1,_e=j[U],Me=U+1,De=j[Me];if(0>o(_e,Y))Me<ne&&0>o(De,_e)?(j[L]=De,j[Me]=Y,L=Me):(j[L]=_e,j[U]=Y,L=U);else if(Me<ne&&0>o(De,Y))j[L]=De,j[Me]=Y,L=Me;else break e}}return $}function o(j,$){var Y=j.sortIndex-$.sortIndex;return Y!==0?Y:j.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var d=Date,m=d.now();s.unstable_now=function(){return d.now()-m}}var u=[],h=[],x=1,v=null,_=3,M=!1,b=!1,C=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(j){for(var $=t(h);$!==null;){if($.callback===null)r(h);else if($.startTime<=j)r(h),$.sortIndex=$.expirationTime,e(u,$);else break;$=t(h)}}function P(j){if(C=!1,F(j),!b)if(t(u)!==null)b=!0,re(z);else{var $=t(h);$!==null&&K(P,$.startTime-j)}}function z(j,$){b=!1,C&&(C=!1,S(N),N=-1),M=!0;var Y=_;try{for(F($),v=t(u);v!==null&&(!(v.expirationTime>$)||j&&!G());){var L=v.callback;if(typeof L=="function"){v.callback=null,_=v.priorityLevel;var ne=L(v.expirationTime<=$);$=s.unstable_now(),typeof ne=="function"?v.callback=ne:v===t(u)&&r(u),F($)}else r(u);v=t(u)}if(v!==null)var be=!0;else{var U=t(h);U!==null&&K(P,U.startTime-$),be=!1}return be}finally{v=null,_=Y,M=!1}}var D=!1,w=null,N=-1,ee=5,X=-1;function G(){return!(s.unstable_now()-X<ee)}function W(){if(w!==null){var j=s.unstable_now();X=j;var $=!0;try{$=w(!0,j)}finally{$?V():(D=!1,w=null)}}else D=!1}var V;if(typeof R=="function")V=function(){R(W)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,O=H.port2;H.port1.onmessage=W,V=function(){O.postMessage(null)}}else V=function(){y(W,0)};function re(j){w=j,D||(D=!0,V())}function K(j,$){N=y(function(){j(s.unstable_now())},$)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(j){j.callback=null},s.unstable_continueExecution=function(){b||M||(b=!0,re(z))},s.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<j?Math.floor(1e3/j):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(u)},s.unstable_next=function(j){switch(_){case 1:case 2:case 3:var $=3;break;default:$=_}var Y=_;_=$;try{return j()}finally{_=Y}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(j,$){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var Y=_;_=j;try{return $()}finally{_=Y}},s.unstable_scheduleCallback=function(j,$,Y){var L=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?L+Y:L):Y=L,j){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=Y+ne,j={id:x++,callback:$,priorityLevel:j,startTime:Y,expirationTime:ne,sortIndex:-1},Y>L?(j.sortIndex=Y,e(h,j),t(u)===null&&j===t(h)&&(C?(S(N),N=-1):C=!0,K(P,Y-L))):(j.sortIndex=ne,e(u,j),b||M||(b=!0,re(z))),j},s.unstable_shouldYield=G,s.unstable_wrapCallback=function(j){var $=_;return function(){var Y=_;_=$;try{return j.apply(this,arguments)}finally{_=Y}}}})(Hu)),Hu}var em;function Iv(){return em||(em=1,Bu.exports=Dv()),Bu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function Uv(){if(tm)return Zn;tm=1;var s=ff(),e=Iv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){d(n,i),d(n+"Capture",i)}function d(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),u=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},v={};function _(n){return u.call(v,n)?!0:u.call(x,n)?!1:h.test(n)?v[n]=!0:(x[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function b(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,a,c,f,g,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=T}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(S,R);y[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(S,R);y[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(S,R);y[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function F(n,i,a,c){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(b(i,a,f,c)&&(a=null),c||f===null?_(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),D=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),N=Symbol.for("react.strict_mode"),ee=Symbol.for("react.profiler"),X=Symbol.for("react.provider"),G=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),j=Symbol.iterator;function $(n){return n===null||typeof n!="object"?null:(n=j&&n[j]||n["@@iterator"],typeof n=="function"?n:null)}var Y=Object.assign,L;function ne(n){if(L===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);L=i&&i[1]||""}return`
`+L+n}var be=!1;function U(n,i){if(!n||be)return"";be=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ge){var c=ge}Reflect.construct(n,[],i)}else{try{i.call()}catch(ge){c=ge}n.call(i.prototype)}else{try{throw Error()}catch(ge){c=ge}n()}}catch(ge){if(ge&&c&&typeof ge.stack=="string"){for(var f=ge.stack.split(`
`),g=c.stack.split(`
`),T=f.length-1,B=g.length-1;1<=T&&0<=B&&f[T]!==g[B];)B--;for(;1<=T&&0<=B;T--,B--)if(f[T]!==g[B]){if(T!==1||B!==1)do if(T--,B--,0>B||f[T]!==g[B]){var Z=`
`+f[T].replace(" at new "," at ");return n.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",n.displayName)),Z}while(1<=T&&0<=B);break}}}finally{be=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ne(n):""}function _e(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=U(n.type,!1),n;case 11:return n=U(n.type.render,!1),n;case 1:return n=U(n.type,!0),n;default:return""}}function Me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case w:return"Fragment";case D:return"Portal";case ee:return"Profiler";case N:return"StrictMode";case V:return"Suspense";case H:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case G:return(n.displayName||"Context")+".Consumer";case X:return(n._context.displayName||"Context")+".Provider";case W:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case O:return i=n.displayName||null,i!==null?i:Me(n.type)||"Memo";case re:i=n._payload,n=n._init;try{return Me(n(i))}catch{}}return null}function De(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(i);case 8:return i===N?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Se(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ut(n){var i=Fe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(T){c=""+T,g.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function je(n){n._valueTracker||(n._valueTracker=ut(n))}function Te(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Fe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function ke(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Xe(n,i){var a=i.checked;return Y({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function St(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Se(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Mt(n,i){i=i.checked,i!=null&&F(n,"checked",i,!1)}function Dt(n,i){Mt(n,i);var a=Se(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?nn(n,i.type,a):i.hasOwnProperty("defaultValue")&&nn(n,i.type,Se(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function It(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function nn(n,i,a){(i!=="number"||ke(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Nt=Array.isArray;function Wt(n,i,a,c){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Se(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function kt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return Y({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function rn(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Nt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Se(a)}}function J(n,i){var a=Se(i.value),c=Se(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Yt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Pt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Pt(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ie,Et=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ie=Ie||document.createElement("div"),Ie.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ie.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function qe(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var rt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},I=["Webkit","ms","Moz","O"];Object.keys(rt).forEach(function(n){I.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),rt[i]=rt[n]})});function E(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||rt.hasOwnProperty(n)&&rt[n]?(""+i).trim():i+"px"}function ae(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=E(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,f):n[a]=f}}var Ce=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ve(n,i){if(i){if(Ce[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ue(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function ie(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var se=null,ye=null,k=null;function me(n){if(n=Aa(n)){if(typeof se!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Lo(i),se(n.stateNode,n.type,i))}}function de(n){ye?k?k.push(n):k=[n]:ye=n}function Ne(){if(ye){var n=ye,i=k;if(k=ye=null,me(n),i)for(n=0;n<i.length;n++)me(i[n])}}function Ee(n,i){return n(i)}function Pe(){}var Ze=!1;function ct(n,i,a){if(Ze)return n(i,a);Ze=!0;try{return Ee(n,i,a)}finally{Ze=!1,(ye!==null||k!==null)&&(Pe(),Ne())}}function Q(n,i){var a=n.stateNode;if(a===null)return null;var c=Lo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Ve=!1;if(m)try{var $e={};Object.defineProperty($e,"passive",{get:function(){Ve=!0}}),window.addEventListener("test",$e,$e),window.removeEventListener("test",$e,$e)}catch{Ve=!1}function Oe(n,i,a,c,f,g,T,B,Z){var ge=Array.prototype.slice.call(arguments,3);try{i.apply(a,ge)}catch(Le){this.onError(Le)}}var xt=!1,Rt=null,ce=!1,Be=null,Ae={onError:function(n){xt=!0,Rt=n}};function mt(n,i,a,c,f,g,T,B,Z){xt=!1,Rt=null,Oe.apply(Ae,arguments)}function qt(n,i,a,c,f,g,T,B,Z){if(mt.apply(this,arguments),xt){if(xt){var ge=Rt;xt=!1,Rt=null}else throw Error(t(198));ce||(ce=!0,Be=ge)}}function mn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Mn(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ni(n){if(mn(n)!==n)throw Error(t(188))}function ms(n){var i=n.alternate;if(!i){if(i=mn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return Ni(f),n;if(g===c)return Ni(f),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=g;else{for(var T=!1,B=f.child;B;){if(B===a){T=!0,a=f,c=g;break}if(B===c){T=!0,c=f,a=g;break}B=B.sibling}if(!T){for(B=g.child;B;){if(B===a){T=!0,a=g,c=f;break}if(B===c){T=!0,c=g,a=f;break}B=B.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function la(n){return n=ms(n),n!==null?Wr(n):null}function Wr(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Wr(n);if(i!==null)return i;n=n.sibling}return null}var ca=e.unstable_scheduleCallback,ua=e.unstable_cancelCallback,jr=e.unstable_shouldYield,lc=e.unstable_requestPaint,Qt=e.unstable_now,mo=e.unstable_getCurrentPriorityLevel,da=e.unstable_ImmediatePriority,go=e.unstable_UserBlockingPriority,gs=e.unstable_NormalPriority,xo=e.unstable_LowPriority,A=e.unstable_IdlePriority,q=null,fe=null;function le(n){if(fe&&typeof fe.onCommitFiberRoot=="function")try{fe.onCommitFiberRoot(q,n,void 0,(n.current.flags&128)===128)}catch{}}var oe=Math.clz32?Math.clz32:Ge,We=Math.log,Qe=Math.LN2;function Ge(n){return n>>>=0,n===0?32:31-(We(n)/Qe|0)|0}var Ye=64,tt=4194304;function ht(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function yt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,f=n.suspendedLanes,g=n.pingedLanes,T=a&268435455;if(T!==0){var B=T&~f;B!==0?c=ht(B):(g&=T,g!==0&&(c=ht(g)))}else T=a&~f,T!==0?c=ht(T):g!==0&&(c=ht(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,g=i&-i,f>=g||f===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-oe(i),f=1<<a,c|=n[a],i&=~f;return c}function nt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,g=n.pendingLanes;0<g;){var T=31-oe(g),B=1<<T,Z=f[T];Z===-1?((B&a)===0||(B&c)!==0)&&(f[T]=nt(B,i)):Z<=i&&(n.expiredLanes|=B),g&=~B}}function en(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function jt(){var n=Ye;return Ye<<=1,(Ye&4194240)===0&&(Ye=64),n}function Gt(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function cn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-oe(i),n[i]=a}function it(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-oe(a),g=1<<f;i[f]=0,c[f]=-1,n[f]=-1,a&=~g}}function gn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-oe(a),f=1<<c;f&i|n[c]&i&&(n[c]|=i),a&=~f}}var ot=0;function Pi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var xn,ur,mi,Li,Lt,dn=!1,Pn=[],Bt=null,Xt=null,wn=null,dr=new Map,fa=new Map,fr=[],qg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lf(n,i){switch(n){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":dr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":fa.delete(i.pointerId)}}function ha(n,i,a,c,f,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},i!==null&&(i=Aa(i),i!==null&&ur(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function Kg(n,i,a,c,f){switch(i){case"focusin":return Bt=ha(Bt,n,i,a,c,f),!0;case"dragenter":return Xt=ha(Xt,n,i,a,c,f),!0;case"mouseover":return wn=ha(wn,n,i,a,c,f),!0;case"pointerover":var g=f.pointerId;return dr.set(g,ha(dr.get(g)||null,n,i,a,c,f)),!0;case"gotpointercapture":return g=f.pointerId,fa.set(g,ha(fa.get(g)||null,n,i,a,c,f)),!0}return!1}function Df(n){var i=$r(n.target);if(i!==null){var a=mn(i);if(a!==null){if(i=a.tag,i===13){if(i=Mn(a),i!==null){n.blockedOn=i,Lt(n.priority,function(){mi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function vo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=uc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);xe=c,a.target.dispatchEvent(c),xe=null}else return i=Aa(a),i!==null&&ur(i),n.blockedOn=a,!1;i.shift()}return!0}function If(n,i,a){vo(n)&&a.delete(i)}function Zg(){dn=!1,Bt!==null&&vo(Bt)&&(Bt=null),Xt!==null&&vo(Xt)&&(Xt=null),wn!==null&&vo(wn)&&(wn=null),dr.forEach(If),fa.forEach(If)}function pa(n,i){n.blockedOn===i&&(n.blockedOn=null,dn||(dn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Zg)))}function ma(n){function i(f){return pa(f,n)}if(0<Pn.length){pa(Pn[0],n);for(var a=1;a<Pn.length;a++){var c=Pn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Bt!==null&&pa(Bt,n),Xt!==null&&pa(Xt,n),wn!==null&&pa(wn,n),dr.forEach(i),fa.forEach(i),a=0;a<fr.length;a++)c=fr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<fr.length&&(a=fr[0],a.blockedOn===null);)Df(a),a.blockedOn===null&&fr.shift()}var xs=P.ReactCurrentBatchConfig,_o=!0;function Jg(n,i,a,c){var f=ot,g=xs.transition;xs.transition=null;try{ot=1,cc(n,i,a,c)}finally{ot=f,xs.transition=g}}function Qg(n,i,a,c){var f=ot,g=xs.transition;xs.transition=null;try{ot=4,cc(n,i,a,c)}finally{ot=f,xs.transition=g}}function cc(n,i,a,c){if(_o){var f=uc(n,i,a,c);if(f===null)Ac(n,i,c,yo,a),Lf(n,c);else if(Kg(f,n,i,a,c))c.stopPropagation();else if(Lf(n,c),i&4&&-1<qg.indexOf(n)){for(;f!==null;){var g=Aa(f);if(g!==null&&xn(g),g=uc(n,i,a,c),g===null&&Ac(n,i,c,yo,a),g===f)break;f=g}f!==null&&c.stopPropagation()}else Ac(n,i,c,null,a)}}var yo=null;function uc(n,i,a,c){if(yo=null,n=ie(c),n=$r(n),n!==null)if(i=mn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Mn(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return yo=n,null}function Uf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mo()){case da:return 1;case go:return 4;case gs:case xo:return 16;case A:return 536870912;default:return 16}default:return 16}}var hr=null,dc=null,So=null;function zf(){if(So)return So;var n,i=dc,a=i.length,c,f="value"in hr?hr.value:hr.textContent,g=f.length;for(n=0;n<a&&i[n]===f[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===f[g-c];c++);return So=f.slice(n,1<c?1-c:void 0)}function Mo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function wo(){return!0}function Ff(){return!1}function Qn(n){function i(a,c,f,g,T){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var B in n)n.hasOwnProperty(B)&&(a=n[B],this[B]=a?a(g):g[B]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?wo:Ff,this.isPropagationStopped=Ff,this}return Y(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=wo)},persist:function(){},isPersistent:wo}),i}var vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fc=Qn(vs),ga=Y({},vs,{view:0,detail:0}),ex=Qn(ga),hc,pc,xa,bo=Y({},ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==xa&&(xa&&n.type==="mousemove"?(hc=n.screenX-xa.screenX,pc=n.screenY-xa.screenY):pc=hc=0,xa=n),hc)},movementY:function(n){return"movementY"in n?n.movementY:pc}}),kf=Qn(bo),tx=Y({},bo,{dataTransfer:0}),nx=Qn(tx),ix=Y({},ga,{relatedTarget:0}),mc=Qn(ix),rx=Y({},vs,{animationName:0,elapsedTime:0,pseudoElement:0}),sx=Qn(rx),ax=Y({},vs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ox=Qn(ax),lx=Y({},vs,{data:0}),Of=Qn(lx),cx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ux={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fx(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=dx[n])?!!i[n]:!1}function gc(){return fx}var hx=Y({},ga,{key:function(n){if(n.key){var i=cx[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Mo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ux[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gc,charCode:function(n){return n.type==="keypress"?Mo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Mo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),px=Qn(hx),mx=Y({},bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bf=Qn(mx),gx=Y({},ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gc}),xx=Qn(gx),vx=Y({},vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),_x=Qn(vx),yx=Y({},bo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Sx=Qn(yx),Mx=[9,13,27,32],xc=m&&"CompositionEvent"in window,va=null;m&&"documentMode"in document&&(va=document.documentMode);var wx=m&&"TextEvent"in window&&!va,Hf=m&&(!xc||va&&8<va&&11>=va),Gf=" ",Vf=!1;function Wf(n,i){switch(n){case"keyup":return Mx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var _s=!1;function bx(n,i){switch(n){case"compositionend":return jf(i);case"keypress":return i.which!==32?null:(Vf=!0,Gf);case"textInput":return n=i.data,n===Gf&&Vf?null:n;default:return null}}function Ex(n,i){if(_s)return n==="compositionend"||!xc&&Wf(n,i)?(n=zf(),So=dc=hr=null,_s=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Hf&&i.locale!=="ko"?null:i.data;default:return null}}var Tx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $f(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Tx[n.type]:i==="textarea"}function Xf(n,i,a,c){de(c),i=Ro(i,"onChange"),0<i.length&&(a=new fc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var _a=null,ya=null;function Ax(n){dh(n,0)}function Eo(n){var i=bs(n);if(Te(i))return n}function Cx(n,i){if(n==="change")return i}var Yf=!1;if(m){var vc;if(m){var _c="oninput"in document;if(!_c){var qf=document.createElement("div");qf.setAttribute("oninput","return;"),_c=typeof qf.oninput=="function"}vc=_c}else vc=!1;Yf=vc&&(!document.documentMode||9<document.documentMode)}function Kf(){_a&&(_a.detachEvent("onpropertychange",Zf),ya=_a=null)}function Zf(n){if(n.propertyName==="value"&&Eo(ya)){var i=[];Xf(i,ya,n,ie(n)),ct(Ax,i)}}function Rx(n,i,a){n==="focusin"?(Kf(),_a=i,ya=a,_a.attachEvent("onpropertychange",Zf)):n==="focusout"&&Kf()}function Nx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Eo(ya)}function Px(n,i){if(n==="click")return Eo(i)}function Lx(n,i){if(n==="input"||n==="change")return Eo(i)}function Dx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var gi=typeof Object.is=="function"?Object.is:Dx;function Sa(n,i){if(gi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!u.call(i,f)||!gi(n[f],i[f]))return!1}return!0}function Jf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Qf(n,i){var a=Jf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Jf(a)}}function eh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?eh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function th(){for(var n=window,i=ke();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=ke(n.document)}return i}function yc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Ix(n){var i=th(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&eh(a.ownerDocument.documentElement,a)){if(c!==null&&yc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!n.extend&&g>c&&(f=c,c=g,g=f),f=Qf(a,g);var T=Qf(a,c);f&&T&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Ux=m&&"documentMode"in document&&11>=document.documentMode,ys=null,Sc=null,Ma=null,Mc=!1;function nh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mc||ys==null||ys!==ke(c)||(c=ys,"selectionStart"in c&&yc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ma&&Sa(Ma,c)||(Ma=c,c=Ro(Sc,"onSelect"),0<c.length&&(i=new fc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=ys)))}function To(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ss={animationend:To("Animation","AnimationEnd"),animationiteration:To("Animation","AnimationIteration"),animationstart:To("Animation","AnimationStart"),transitionend:To("Transition","TransitionEnd")},wc={},ih={};m&&(ih=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function Ao(n){if(wc[n])return wc[n];if(!Ss[n])return n;var i=Ss[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in ih)return wc[n]=i[a];return n}var rh=Ao("animationend"),sh=Ao("animationiteration"),ah=Ao("animationstart"),oh=Ao("transitionend"),lh=new Map,ch="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(n,i){lh.set(n,i),l(i,[n])}for(var bc=0;bc<ch.length;bc++){var Ec=ch[bc],zx=Ec.toLowerCase(),Fx=Ec[0].toUpperCase()+Ec.slice(1);pr(zx,"on"+Fx)}pr(rh,"onAnimationEnd"),pr(sh,"onAnimationIteration"),pr(ah,"onAnimationStart"),pr("dblclick","onDoubleClick"),pr("focusin","onFocus"),pr("focusout","onBlur"),pr(oh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kx=new Set("cancel close invalid load scroll toggle".split(" ").concat(wa));function uh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,qt(c,i,void 0,n),n.currentTarget=null}function dh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],f=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var T=c.length-1;0<=T;T--){var B=c[T],Z=B.instance,ge=B.currentTarget;if(B=B.listener,Z!==g&&f.isPropagationStopped())break e;uh(f,B,ge),g=Z}else for(T=0;T<c.length;T++){if(B=c[T],Z=B.instance,ge=B.currentTarget,B=B.listener,Z!==g&&f.isPropagationStopped())break e;uh(f,B,ge),g=Z}}}if(ce)throw n=Be,ce=!1,Be=null,n}function Zt(n,i){var a=i[Dc];a===void 0&&(a=i[Dc]=new Set);var c=n+"__bubble";a.has(c)||(fh(i,n,2,!1),a.add(c))}function Tc(n,i,a){var c=0;i&&(c|=4),fh(a,n,c,i)}var Co="_reactListening"+Math.random().toString(36).slice(2);function ba(n){if(!n[Co]){n[Co]=!0,r.forEach(function(a){a!=="selectionchange"&&(kx.has(a)||Tc(a,!1,n),Tc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Co]||(i[Co]=!0,Tc("selectionchange",!1,i))}}function fh(n,i,a,c){switch(Uf(i)){case 1:var f=Jg;break;case 4:f=Qg;break;default:f=cc}a=f.bind(null,i,a,n),f=void 0,!Ve||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function Ac(n,i,a,c,f){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var B=c.stateNode.containerInfo;if(B===f||B.nodeType===8&&B.parentNode===f)break;if(T===4)for(T=c.return;T!==null;){var Z=T.tag;if((Z===3||Z===4)&&(Z=T.stateNode.containerInfo,Z===f||Z.nodeType===8&&Z.parentNode===f))return;T=T.return}for(;B!==null;){if(T=$r(B),T===null)return;if(Z=T.tag,Z===5||Z===6){c=g=T;continue e}B=B.parentNode}}c=c.return}ct(function(){var ge=g,Le=ie(a),ze=[];e:{var Re=lh.get(n);if(Re!==void 0){var Je=fc,st=n;switch(n){case"keypress":if(Mo(a)===0)break e;case"keydown":case"keyup":Je=px;break;case"focusin":st="focus",Je=mc;break;case"focusout":st="blur",Je=mc;break;case"beforeblur":case"afterblur":Je=mc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Je=kf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Je=nx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Je=xx;break;case rh:case sh:case ah:Je=sx;break;case oh:Je=_x;break;case"scroll":Je=ex;break;case"wheel":Je=Sx;break;case"copy":case"cut":case"paste":Je=ox;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Je=Bf}var at=(i&4)!==0,fn=!at&&n==="scroll",ue=at?Re!==null?Re+"Capture":null:Re;at=[];for(var te=ge,he;te!==null;){he=te;var He=he.stateNode;if(he.tag===5&&He!==null&&(he=He,ue!==null&&(He=Q(te,ue),He!=null&&at.push(Ea(te,He,he)))),fn)break;te=te.return}0<at.length&&(Re=new Je(Re,st,null,a,Le),ze.push({event:Re,listeners:at}))}}if((i&7)===0){e:{if(Re=n==="mouseover"||n==="pointerover",Je=n==="mouseout"||n==="pointerout",Re&&a!==xe&&(st=a.relatedTarget||a.fromElement)&&($r(st)||st[$i]))break e;if((Je||Re)&&(Re=Le.window===Le?Le:(Re=Le.ownerDocument)?Re.defaultView||Re.parentWindow:window,Je?(st=a.relatedTarget||a.toElement,Je=ge,st=st?$r(st):null,st!==null&&(fn=mn(st),st!==fn||st.tag!==5&&st.tag!==6)&&(st=null)):(Je=null,st=ge),Je!==st)){if(at=kf,He="onMouseLeave",ue="onMouseEnter",te="mouse",(n==="pointerout"||n==="pointerover")&&(at=Bf,He="onPointerLeave",ue="onPointerEnter",te="pointer"),fn=Je==null?Re:bs(Je),he=st==null?Re:bs(st),Re=new at(He,te+"leave",Je,a,Le),Re.target=fn,Re.relatedTarget=he,He=null,$r(Le)===ge&&(at=new at(ue,te+"enter",st,a,Le),at.target=he,at.relatedTarget=fn,He=at),fn=He,Je&&st)t:{for(at=Je,ue=st,te=0,he=at;he;he=Ms(he))te++;for(he=0,He=ue;He;He=Ms(He))he++;for(;0<te-he;)at=Ms(at),te--;for(;0<he-te;)ue=Ms(ue),he--;for(;te--;){if(at===ue||ue!==null&&at===ue.alternate)break t;at=Ms(at),ue=Ms(ue)}at=null}else at=null;Je!==null&&hh(ze,Re,Je,at,!1),st!==null&&fn!==null&&hh(ze,fn,st,at,!0)}}e:{if(Re=ge?bs(ge):window,Je=Re.nodeName&&Re.nodeName.toLowerCase(),Je==="select"||Je==="input"&&Re.type==="file")var lt=Cx;else if($f(Re))if(Yf)lt=Lx;else{lt=Nx;var dt=Rx}else(Je=Re.nodeName)&&Je.toLowerCase()==="input"&&(Re.type==="checkbox"||Re.type==="radio")&&(lt=Px);if(lt&&(lt=lt(n,ge))){Xf(ze,lt,a,Le);break e}dt&&dt(n,Re,ge),n==="focusout"&&(dt=Re._wrapperState)&&dt.controlled&&Re.type==="number"&&nn(Re,"number",Re.value)}switch(dt=ge?bs(ge):window,n){case"focusin":($f(dt)||dt.contentEditable==="true")&&(ys=dt,Sc=ge,Ma=null);break;case"focusout":Ma=Sc=ys=null;break;case"mousedown":Mc=!0;break;case"contextmenu":case"mouseup":case"dragend":Mc=!1,nh(ze,a,Le);break;case"selectionchange":if(Ux)break;case"keydown":case"keyup":nh(ze,a,Le)}var ft;if(xc)e:{switch(n){case"compositionstart":var pt="onCompositionStart";break e;case"compositionend":pt="onCompositionEnd";break e;case"compositionupdate":pt="onCompositionUpdate";break e}pt=void 0}else _s?Wf(n,a)&&(pt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(pt="onCompositionStart");pt&&(Hf&&a.locale!=="ko"&&(_s||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&_s&&(ft=zf()):(hr=Le,dc="value"in hr?hr.value:hr.textContent,_s=!0)),dt=Ro(ge,pt),0<dt.length&&(pt=new Of(pt,n,null,a,Le),ze.push({event:pt,listeners:dt}),ft?pt.data=ft:(ft=jf(a),ft!==null&&(pt.data=ft)))),(ft=wx?bx(n,a):Ex(n,a))&&(ge=Ro(ge,"onBeforeInput"),0<ge.length&&(Le=new Of("onBeforeInput","beforeinput",null,a,Le),ze.push({event:Le,listeners:ge}),Le.data=ft))}dh(ze,i)})}function Ea(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ro(n,i){for(var a=i+"Capture",c=[];n!==null;){var f=n,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=Q(n,a),g!=null&&c.unshift(Ea(n,g,f)),g=Q(n,i),g!=null&&c.push(Ea(n,g,f))),n=n.return}return c}function Ms(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function hh(n,i,a,c,f){for(var g=i._reactName,T=[];a!==null&&a!==c;){var B=a,Z=B.alternate,ge=B.stateNode;if(Z!==null&&Z===c)break;B.tag===5&&ge!==null&&(B=ge,f?(Z=Q(a,g),Z!=null&&T.unshift(Ea(a,Z,B))):f||(Z=Q(a,g),Z!=null&&T.push(Ea(a,Z,B)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var Ox=/\r\n?/g,Bx=/\u0000|\uFFFD/g;function ph(n){return(typeof n=="string"?n:""+n).replace(Ox,`
`).replace(Bx,"")}function No(n,i,a){if(i=ph(i),ph(n)!==i&&a)throw Error(t(425))}function Po(){}var Cc=null,Rc=null;function Nc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Pc=typeof setTimeout=="function"?setTimeout:void 0,Hx=typeof clearTimeout=="function"?clearTimeout:void 0,mh=typeof Promise=="function"?Promise:void 0,Gx=typeof queueMicrotask=="function"?queueMicrotask:typeof mh<"u"?function(n){return mh.resolve(null).then(n).catch(Vx)}:Pc;function Vx(n){setTimeout(function(){throw n})}function Lc(n,i){var a=i,c=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){n.removeChild(f),ma(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);ma(i)}function mr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function gh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ws=Math.random().toString(36).slice(2),Di="__reactFiber$"+ws,Ta="__reactProps$"+ws,$i="__reactContainer$"+ws,Dc="__reactEvents$"+ws,Wx="__reactListeners$"+ws,jx="__reactHandles$"+ws;function $r(n){var i=n[Di];if(i)return i;for(var a=n.parentNode;a;){if(i=a[$i]||a[Di]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=gh(n);n!==null;){if(a=n[Di])return a;n=gh(n)}return i}n=a,a=n.parentNode}return null}function Aa(n){return n=n[Di]||n[$i],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function bs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Lo(n){return n[Ta]||null}var Ic=[],Es=-1;function gr(n){return{current:n}}function Jt(n){0>Es||(n.current=Ic[Es],Ic[Es]=null,Es--)}function Kt(n,i){Es++,Ic[Es]=n.current,n.current=i}var xr={},Ln=gr(xr),$n=gr(!1),Xr=xr;function Ts(n,i){var a=n.type.contextTypes;if(!a)return xr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Xn(n){return n=n.childContextTypes,n!=null}function Do(){Jt($n),Jt(Ln)}function xh(n,i,a){if(Ln.current!==xr)throw Error(t(168));Kt(Ln,i),Kt($n,a)}function vh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,De(n)||"Unknown",f));return Y({},a,c)}function Io(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||xr,Xr=Ln.current,Kt(Ln,n),Kt($n,$n.current),!0}function _h(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=vh(n,i,Xr),c.__reactInternalMemoizedMergedChildContext=n,Jt($n),Jt(Ln),Kt(Ln,n)):Jt($n),Kt($n,a)}var Xi=null,Uo=!1,Uc=!1;function yh(n){Xi===null?Xi=[n]:Xi.push(n)}function $x(n){Uo=!0,yh(n)}function vr(){if(!Uc&&Xi!==null){Uc=!0;var n=0,i=ot;try{var a=Xi;for(ot=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Xi=null,Uo=!1}catch(f){throw Xi!==null&&(Xi=Xi.slice(n+1)),ca(da,vr),f}finally{ot=i,Uc=!1}}return null}var As=[],Cs=0,zo=null,Fo=0,li=[],ci=0,Yr=null,Yi=1,qi="";function qr(n,i){As[Cs++]=Fo,As[Cs++]=zo,zo=n,Fo=i}function Sh(n,i,a){li[ci++]=Yi,li[ci++]=qi,li[ci++]=Yr,Yr=n;var c=Yi;n=qi;var f=32-oe(c)-1;c&=~(1<<f),a+=1;var g=32-oe(i)+f;if(30<g){var T=f-f%5;g=(c&(1<<T)-1).toString(32),c>>=T,f-=T,Yi=1<<32-oe(i)+f|a<<f|c,qi=g+n}else Yi=1<<g|a<<f|c,qi=n}function zc(n){n.return!==null&&(qr(n,1),Sh(n,1,0))}function Fc(n){for(;n===zo;)zo=As[--Cs],As[Cs]=null,Fo=As[--Cs],As[Cs]=null;for(;n===Yr;)Yr=li[--ci],li[ci]=null,qi=li[--ci],li[ci]=null,Yi=li[--ci],li[ci]=null}var ei=null,ti=null,tn=!1,xi=null;function Mh(n,i){var a=hi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function wh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ei=n,ti=mr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ei=n,ti=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Yr!==null?{id:Yi,overflow:qi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=hi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,ei=n,ti=null,!0):!1;default:return!1}}function kc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Oc(n){if(tn){var i=ti;if(i){var a=i;if(!wh(n,i)){if(kc(n))throw Error(t(418));i=mr(a.nextSibling);var c=ei;i&&wh(n,i)?Mh(c,a):(n.flags=n.flags&-4097|2,tn=!1,ei=n)}}else{if(kc(n))throw Error(t(418));n.flags=n.flags&-4097|2,tn=!1,ei=n}}}function bh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ei=n}function ko(n){if(n!==ei)return!1;if(!tn)return bh(n),tn=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Nc(n.type,n.memoizedProps)),i&&(i=ti)){if(kc(n))throw Eh(),Error(t(418));for(;i;)Mh(n,i),i=mr(i.nextSibling)}if(bh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){ti=mr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}ti=null}}else ti=ei?mr(n.stateNode.nextSibling):null;return!0}function Eh(){for(var n=ti;n;)n=mr(n.nextSibling)}function Rs(){ti=ei=null,tn=!1}function Bc(n){xi===null?xi=[n]:xi.push(n)}var Xx=P.ReactCurrentBatchConfig;function Ca(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var f=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(T){var B=f.refs;T===null?delete B[g]:B[g]=T},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Oo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Th(n){var i=n._init;return i(n._payload)}function Ah(n){function i(ue,te){if(n){var he=ue.deletions;he===null?(ue.deletions=[te],ue.flags|=16):he.push(te)}}function a(ue,te){if(!n)return null;for(;te!==null;)i(ue,te),te=te.sibling;return null}function c(ue,te){for(ue=new Map;te!==null;)te.key!==null?ue.set(te.key,te):ue.set(te.index,te),te=te.sibling;return ue}function f(ue,te){return ue=Tr(ue,te),ue.index=0,ue.sibling=null,ue}function g(ue,te,he){return ue.index=he,n?(he=ue.alternate,he!==null?(he=he.index,he<te?(ue.flags|=2,te):he):(ue.flags|=2,te)):(ue.flags|=1048576,te)}function T(ue){return n&&ue.alternate===null&&(ue.flags|=2),ue}function B(ue,te,he,He){return te===null||te.tag!==6?(te=Pu(he,ue.mode,He),te.return=ue,te):(te=f(te,he),te.return=ue,te)}function Z(ue,te,he,He){var lt=he.type;return lt===w?Le(ue,te,he.props.children,He,he.key):te!==null&&(te.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===re&&Th(lt)===te.type)?(He=f(te,he.props),He.ref=Ca(ue,te,he),He.return=ue,He):(He=cl(he.type,he.key,he.props,null,ue.mode,He),He.ref=Ca(ue,te,he),He.return=ue,He)}function ge(ue,te,he,He){return te===null||te.tag!==4||te.stateNode.containerInfo!==he.containerInfo||te.stateNode.implementation!==he.implementation?(te=Lu(he,ue.mode,He),te.return=ue,te):(te=f(te,he.children||[]),te.return=ue,te)}function Le(ue,te,he,He,lt){return te===null||te.tag!==7?(te=is(he,ue.mode,He,lt),te.return=ue,te):(te=f(te,he),te.return=ue,te)}function ze(ue,te,he){if(typeof te=="string"&&te!==""||typeof te=="number")return te=Pu(""+te,ue.mode,he),te.return=ue,te;if(typeof te=="object"&&te!==null){switch(te.$$typeof){case z:return he=cl(te.type,te.key,te.props,null,ue.mode,he),he.ref=Ca(ue,null,te),he.return=ue,he;case D:return te=Lu(te,ue.mode,he),te.return=ue,te;case re:var He=te._init;return ze(ue,He(te._payload),he)}if(Nt(te)||$(te))return te=is(te,ue.mode,he,null),te.return=ue,te;Oo(ue,te)}return null}function Re(ue,te,he,He){var lt=te!==null?te.key:null;if(typeof he=="string"&&he!==""||typeof he=="number")return lt!==null?null:B(ue,te,""+he,He);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case z:return he.key===lt?Z(ue,te,he,He):null;case D:return he.key===lt?ge(ue,te,he,He):null;case re:return lt=he._init,Re(ue,te,lt(he._payload),He)}if(Nt(he)||$(he))return lt!==null?null:Le(ue,te,he,He,null);Oo(ue,he)}return null}function Je(ue,te,he,He,lt){if(typeof He=="string"&&He!==""||typeof He=="number")return ue=ue.get(he)||null,B(te,ue,""+He,lt);if(typeof He=="object"&&He!==null){switch(He.$$typeof){case z:return ue=ue.get(He.key===null?he:He.key)||null,Z(te,ue,He,lt);case D:return ue=ue.get(He.key===null?he:He.key)||null,ge(te,ue,He,lt);case re:var dt=He._init;return Je(ue,te,he,dt(He._payload),lt)}if(Nt(He)||$(He))return ue=ue.get(he)||null,Le(te,ue,He,lt,null);Oo(te,He)}return null}function st(ue,te,he,He){for(var lt=null,dt=null,ft=te,pt=te=0,Tn=null;ft!==null&&pt<he.length;pt++){ft.index>pt?(Tn=ft,ft=null):Tn=ft.sibling;var Ht=Re(ue,ft,he[pt],He);if(Ht===null){ft===null&&(ft=Tn);break}n&&ft&&Ht.alternate===null&&i(ue,ft),te=g(Ht,te,pt),dt===null?lt=Ht:dt.sibling=Ht,dt=Ht,ft=Tn}if(pt===he.length)return a(ue,ft),tn&&qr(ue,pt),lt;if(ft===null){for(;pt<he.length;pt++)ft=ze(ue,he[pt],He),ft!==null&&(te=g(ft,te,pt),dt===null?lt=ft:dt.sibling=ft,dt=ft);return tn&&qr(ue,pt),lt}for(ft=c(ue,ft);pt<he.length;pt++)Tn=Je(ft,ue,pt,he[pt],He),Tn!==null&&(n&&Tn.alternate!==null&&ft.delete(Tn.key===null?pt:Tn.key),te=g(Tn,te,pt),dt===null?lt=Tn:dt.sibling=Tn,dt=Tn);return n&&ft.forEach(function(Ar){return i(ue,Ar)}),tn&&qr(ue,pt),lt}function at(ue,te,he,He){var lt=$(he);if(typeof lt!="function")throw Error(t(150));if(he=lt.call(he),he==null)throw Error(t(151));for(var dt=lt=null,ft=te,pt=te=0,Tn=null,Ht=he.next();ft!==null&&!Ht.done;pt++,Ht=he.next()){ft.index>pt?(Tn=ft,ft=null):Tn=ft.sibling;var Ar=Re(ue,ft,Ht.value,He);if(Ar===null){ft===null&&(ft=Tn);break}n&&ft&&Ar.alternate===null&&i(ue,ft),te=g(Ar,te,pt),dt===null?lt=Ar:dt.sibling=Ar,dt=Ar,ft=Tn}if(Ht.done)return a(ue,ft),tn&&qr(ue,pt),lt;if(ft===null){for(;!Ht.done;pt++,Ht=he.next())Ht=ze(ue,Ht.value,He),Ht!==null&&(te=g(Ht,te,pt),dt===null?lt=Ht:dt.sibling=Ht,dt=Ht);return tn&&qr(ue,pt),lt}for(ft=c(ue,ft);!Ht.done;pt++,Ht=he.next())Ht=Je(ft,ue,pt,Ht.value,He),Ht!==null&&(n&&Ht.alternate!==null&&ft.delete(Ht.key===null?pt:Ht.key),te=g(Ht,te,pt),dt===null?lt=Ht:dt.sibling=Ht,dt=Ht);return n&&ft.forEach(function(Tv){return i(ue,Tv)}),tn&&qr(ue,pt),lt}function fn(ue,te,he,He){if(typeof he=="object"&&he!==null&&he.type===w&&he.key===null&&(he=he.props.children),typeof he=="object"&&he!==null){switch(he.$$typeof){case z:e:{for(var lt=he.key,dt=te;dt!==null;){if(dt.key===lt){if(lt=he.type,lt===w){if(dt.tag===7){a(ue,dt.sibling),te=f(dt,he.props.children),te.return=ue,ue=te;break e}}else if(dt.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===re&&Th(lt)===dt.type){a(ue,dt.sibling),te=f(dt,he.props),te.ref=Ca(ue,dt,he),te.return=ue,ue=te;break e}a(ue,dt);break}else i(ue,dt);dt=dt.sibling}he.type===w?(te=is(he.props.children,ue.mode,He,he.key),te.return=ue,ue=te):(He=cl(he.type,he.key,he.props,null,ue.mode,He),He.ref=Ca(ue,te,he),He.return=ue,ue=He)}return T(ue);case D:e:{for(dt=he.key;te!==null;){if(te.key===dt)if(te.tag===4&&te.stateNode.containerInfo===he.containerInfo&&te.stateNode.implementation===he.implementation){a(ue,te.sibling),te=f(te,he.children||[]),te.return=ue,ue=te;break e}else{a(ue,te);break}else i(ue,te);te=te.sibling}te=Lu(he,ue.mode,He),te.return=ue,ue=te}return T(ue);case re:return dt=he._init,fn(ue,te,dt(he._payload),He)}if(Nt(he))return st(ue,te,he,He);if($(he))return at(ue,te,he,He);Oo(ue,he)}return typeof he=="string"&&he!==""||typeof he=="number"?(he=""+he,te!==null&&te.tag===6?(a(ue,te.sibling),te=f(te,he),te.return=ue,ue=te):(a(ue,te),te=Pu(he,ue.mode,He),te.return=ue,ue=te),T(ue)):a(ue,te)}return fn}var Ns=Ah(!0),Ch=Ah(!1),Bo=gr(null),Ho=null,Ps=null,Hc=null;function Gc(){Hc=Ps=Ho=null}function Vc(n){var i=Bo.current;Jt(Bo),n._currentValue=i}function Wc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ls(n,i){Ho=n,Hc=Ps=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Yn=!0),n.firstContext=null)}function ui(n){var i=n._currentValue;if(Hc!==n)if(n={context:n,memoizedValue:i,next:null},Ps===null){if(Ho===null)throw Error(t(308));Ps=n,Ho.dependencies={lanes:0,firstContext:n}}else Ps=Ps.next=n;return i}var Kr=null;function jc(n){Kr===null?Kr=[n]:Kr.push(n)}function Rh(n,i,a,c){var f=i.interleaved;return f===null?(a.next=a,jc(i)):(a.next=f.next,f.next=a),i.interleaved=a,Ki(n,c)}function Ki(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var _r=!1;function $c(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Zi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function yr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ot&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Ki(n,a)}return f=c.interleaved,f===null?(i.next=i,jc(c)):(i.next=f.next,f.next=i),c.interleaved=i,Ki(n,a)}function Go(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,gn(n,a)}}function Ph(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=T:g=g.next=T,a=a.next}while(a!==null);g===null?f=g=i:g=g.next=i}else f=g=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Vo(n,i,a,c){var f=n.updateQueue;_r=!1;var g=f.firstBaseUpdate,T=f.lastBaseUpdate,B=f.shared.pending;if(B!==null){f.shared.pending=null;var Z=B,ge=Z.next;Z.next=null,T===null?g=ge:T.next=ge,T=Z;var Le=n.alternate;Le!==null&&(Le=Le.updateQueue,B=Le.lastBaseUpdate,B!==T&&(B===null?Le.firstBaseUpdate=ge:B.next=ge,Le.lastBaseUpdate=Z))}if(g!==null){var ze=f.baseState;T=0,Le=ge=Z=null,B=g;do{var Re=B.lane,Je=B.eventTime;if((c&Re)===Re){Le!==null&&(Le=Le.next={eventTime:Je,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var st=n,at=B;switch(Re=i,Je=a,at.tag){case 1:if(st=at.payload,typeof st=="function"){ze=st.call(Je,ze,Re);break e}ze=st;break e;case 3:st.flags=st.flags&-65537|128;case 0:if(st=at.payload,Re=typeof st=="function"?st.call(Je,ze,Re):st,Re==null)break e;ze=Y({},ze,Re);break e;case 2:_r=!0}}B.callback!==null&&B.lane!==0&&(n.flags|=64,Re=f.effects,Re===null?f.effects=[B]:Re.push(B))}else Je={eventTime:Je,lane:Re,tag:B.tag,payload:B.payload,callback:B.callback,next:null},Le===null?(ge=Le=Je,Z=ze):Le=Le.next=Je,T|=Re;if(B=B.next,B===null){if(B=f.shared.pending,B===null)break;Re=B,B=Re.next,Re.next=null,f.lastBaseUpdate=Re,f.shared.pending=null}}while(!0);if(Le===null&&(Z=ze),f.baseState=Z,f.firstBaseUpdate=ge,f.lastBaseUpdate=Le,i=f.shared.interleaved,i!==null){f=i;do T|=f.lane,f=f.next;while(f!==i)}else g===null&&(f.shared.lanes=0);Qr|=T,n.lanes=T,n.memoizedState=ze}}function Lh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Ra={},Ii=gr(Ra),Na=gr(Ra),Pa=gr(Ra);function Zr(n){if(n===Ra)throw Error(t(174));return n}function Xc(n,i){switch(Kt(Pa,i),Kt(Na,n),Kt(Ii,Ra),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:bt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=bt(i,n)}Jt(Ii),Kt(Ii,i)}function Ds(){Jt(Ii),Jt(Na),Jt(Pa)}function Dh(n){Zr(Pa.current);var i=Zr(Ii.current),a=bt(i,n.type);i!==a&&(Kt(Na,n),Kt(Ii,a))}function Yc(n){Na.current===n&&(Jt(Ii),Jt(Na))}var sn=gr(0);function Wo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var qc=[];function Kc(){for(var n=0;n<qc.length;n++)qc[n]._workInProgressVersionPrimary=null;qc.length=0}var jo=P.ReactCurrentDispatcher,Zc=P.ReactCurrentBatchConfig,Jr=0,an=null,vn=null,bn=null,$o=!1,La=!1,Da=0,Yx=0;function Dn(){throw Error(t(321))}function Jc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!gi(n[a],i[a]))return!1;return!0}function Qc(n,i,a,c,f,g){if(Jr=g,an=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,jo.current=n===null||n.memoizedState===null?Jx:Qx,n=a(c,f),La){g=0;do{if(La=!1,Da=0,25<=g)throw Error(t(301));g+=1,bn=vn=null,i.updateQueue=null,jo.current=ev,n=a(c,f)}while(La)}if(jo.current=qo,i=vn!==null&&vn.next!==null,Jr=0,bn=vn=an=null,$o=!1,i)throw Error(t(300));return n}function eu(){var n=Da!==0;return Da=0,n}function Ui(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bn===null?an.memoizedState=bn=n:bn=bn.next=n,bn}function di(){if(vn===null){var n=an.alternate;n=n!==null?n.memoizedState:null}else n=vn.next;var i=bn===null?an.memoizedState:bn.next;if(i!==null)bn=i,vn=n;else{if(n===null)throw Error(t(310));vn=n,n={memoizedState:vn.memoizedState,baseState:vn.baseState,baseQueue:vn.baseQueue,queue:vn.queue,next:null},bn===null?an.memoizedState=bn=n:bn=bn.next=n}return bn}function Ia(n,i){return typeof i=="function"?i(n):i}function tu(n){var i=di(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=vn,f=c.baseQueue,g=a.pending;if(g!==null){if(f!==null){var T=f.next;f.next=g.next,g.next=T}c.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,c=c.baseState;var B=T=null,Z=null,ge=g;do{var Le=ge.lane;if((Jr&Le)===Le)Z!==null&&(Z=Z.next={lane:0,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null}),c=ge.hasEagerState?ge.eagerState:n(c,ge.action);else{var ze={lane:Le,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null};Z===null?(B=Z=ze,T=c):Z=Z.next=ze,an.lanes|=Le,Qr|=Le}ge=ge.next}while(ge!==null&&ge!==g);Z===null?T=c:Z.next=B,gi(c,i.memoizedState)||(Yn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=Z,a.lastRenderedState=c}if(n=a.interleaved,n!==null){f=n;do g=f.lane,an.lanes|=g,Qr|=g,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function nu(n){var i=di(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,f=a.pending,g=i.memoizedState;if(f!==null){a.pending=null;var T=f=f.next;do g=n(g,T.action),T=T.next;while(T!==f);gi(g,i.memoizedState)||(Yn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function Ih(){}function Uh(n,i){var a=an,c=di(),f=i(),g=!gi(c.memoizedState,f);if(g&&(c.memoizedState=f,Yn=!0),c=c.queue,iu(kh.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||bn!==null&&bn.memoizedState.tag&1){if(a.flags|=2048,Ua(9,Fh.bind(null,a,c,f,i),void 0,null),En===null)throw Error(t(349));(Jr&30)!==0||zh(a,i,f)}return f}function zh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=an.updateQueue,i===null?(i={lastEffect:null,stores:null},an.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Fh(n,i,a,c){i.value=a,i.getSnapshot=c,Oh(i)&&Bh(n)}function kh(n,i,a){return a(function(){Oh(i)&&Bh(n)})}function Oh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!gi(n,a)}catch{return!0}}function Bh(n){var i=Ki(n,1);i!==null&&Si(i,n,1,-1)}function Hh(n){var i=Ui();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:n},i.queue=n,n=n.dispatch=Zx.bind(null,an,n),[i.memoizedState,n]}function Ua(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=an.updateQueue,i===null?(i={lastEffect:null,stores:null},an.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Gh(){return di().memoizedState}function Xo(n,i,a,c){var f=Ui();an.flags|=n,f.memoizedState=Ua(1|i,a,void 0,c===void 0?null:c)}function Yo(n,i,a,c){var f=di();c=c===void 0?null:c;var g=void 0;if(vn!==null){var T=vn.memoizedState;if(g=T.destroy,c!==null&&Jc(c,T.deps)){f.memoizedState=Ua(i,a,g,c);return}}an.flags|=n,f.memoizedState=Ua(1|i,a,g,c)}function Vh(n,i){return Xo(8390656,8,n,i)}function iu(n,i){return Yo(2048,8,n,i)}function Wh(n,i){return Yo(4,2,n,i)}function jh(n,i){return Yo(4,4,n,i)}function $h(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Xh(n,i,a){return a=a!=null?a.concat([n]):null,Yo(4,4,$h.bind(null,i,n),a)}function ru(){}function Yh(n,i){var a=di();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Jc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function qh(n,i){var a=di();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Jc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Kh(n,i,a){return(Jr&21)===0?(n.baseState&&(n.baseState=!1,Yn=!0),n.memoizedState=a):(gi(a,i)||(a=jt(),an.lanes|=a,Qr|=a,n.baseState=!0),i)}function qx(n,i){var a=ot;ot=a!==0&&4>a?a:4,n(!0);var c=Zc.transition;Zc.transition={};try{n(!1),i()}finally{ot=a,Zc.transition=c}}function Zh(){return di().memoizedState}function Kx(n,i,a){var c=br(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Jh(n))Qh(i,a);else if(a=Rh(n,i,a,c),a!==null){var f=Gn();Si(a,n,c,f),ep(a,i,c)}}function Zx(n,i,a){var c=br(n),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Jh(n))Qh(i,f);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var T=i.lastRenderedState,B=g(T,a);if(f.hasEagerState=!0,f.eagerState=B,gi(B,T)){var Z=i.interleaved;Z===null?(f.next=f,jc(i)):(f.next=Z.next,Z.next=f),i.interleaved=f;return}}catch{}finally{}a=Rh(n,i,f,c),a!==null&&(f=Gn(),Si(a,n,c,f),ep(a,i,c))}}function Jh(n){var i=n.alternate;return n===an||i!==null&&i===an}function Qh(n,i){La=$o=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function ep(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,gn(n,a)}}var qo={readContext:ui,useCallback:Dn,useContext:Dn,useEffect:Dn,useImperativeHandle:Dn,useInsertionEffect:Dn,useLayoutEffect:Dn,useMemo:Dn,useReducer:Dn,useRef:Dn,useState:Dn,useDebugValue:Dn,useDeferredValue:Dn,useTransition:Dn,useMutableSource:Dn,useSyncExternalStore:Dn,useId:Dn,unstable_isNewReconciler:!1},Jx={readContext:ui,useCallback:function(n,i){return Ui().memoizedState=[n,i===void 0?null:i],n},useContext:ui,useEffect:Vh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Xo(4194308,4,$h.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Xo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Xo(4,2,n,i)},useMemo:function(n,i){var a=Ui();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ui();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Kx.bind(null,an,n),[c.memoizedState,n]},useRef:function(n){var i=Ui();return n={current:n},i.memoizedState=n},useState:Hh,useDebugValue:ru,useDeferredValue:function(n){return Ui().memoizedState=n},useTransition:function(){var n=Hh(!1),i=n[0];return n=qx.bind(null,n[1]),Ui().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=an,f=Ui();if(tn){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),En===null)throw Error(t(349));(Jr&30)!==0||zh(c,i,a)}f.memoizedState=a;var g={value:a,getSnapshot:i};return f.queue=g,Vh(kh.bind(null,c,g,n),[n]),c.flags|=2048,Ua(9,Fh.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=Ui(),i=En.identifierPrefix;if(tn){var a=qi,c=Yi;a=(c&~(1<<32-oe(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Da++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Yx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Qx={readContext:ui,useCallback:Yh,useContext:ui,useEffect:iu,useImperativeHandle:Xh,useInsertionEffect:Wh,useLayoutEffect:jh,useMemo:qh,useReducer:tu,useRef:Gh,useState:function(){return tu(Ia)},useDebugValue:ru,useDeferredValue:function(n){var i=di();return Kh(i,vn.memoizedState,n)},useTransition:function(){var n=tu(Ia)[0],i=di().memoizedState;return[n,i]},useMutableSource:Ih,useSyncExternalStore:Uh,useId:Zh,unstable_isNewReconciler:!1},ev={readContext:ui,useCallback:Yh,useContext:ui,useEffect:iu,useImperativeHandle:Xh,useInsertionEffect:Wh,useLayoutEffect:jh,useMemo:qh,useReducer:nu,useRef:Gh,useState:function(){return nu(Ia)},useDebugValue:ru,useDeferredValue:function(n){var i=di();return vn===null?i.memoizedState=n:Kh(i,vn.memoizedState,n)},useTransition:function(){var n=nu(Ia)[0],i=di().memoizedState;return[n,i]},useMutableSource:Ih,useSyncExternalStore:Uh,useId:Zh,unstable_isNewReconciler:!1};function vi(n,i){if(n&&n.defaultProps){i=Y({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function su(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:Y({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ko={isMounted:function(n){return(n=n._reactInternals)?mn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Gn(),f=br(n),g=Zi(c,f);g.payload=i,a!=null&&(g.callback=a),i=yr(n,g,f),i!==null&&(Si(i,n,f,c),Go(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Gn(),f=br(n),g=Zi(c,f);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=yr(n,g,f),i!==null&&(Si(i,n,f,c),Go(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Gn(),c=br(n),f=Zi(a,c);f.tag=2,i!=null&&(f.callback=i),i=yr(n,f,c),i!==null&&(Si(i,n,c,a),Go(i,n,c))}};function tp(n,i,a,c,f,g,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,T):i.prototype&&i.prototype.isPureReactComponent?!Sa(a,c)||!Sa(f,g):!0}function np(n,i,a){var c=!1,f=xr,g=i.contextType;return typeof g=="object"&&g!==null?g=ui(g):(f=Xn(i)?Xr:Ln.current,c=i.contextTypes,g=(c=c!=null)?Ts(n,f):xr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ko,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=g),i}function ip(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Ko.enqueueReplaceState(i,i.state,null)}function au(n,i,a,c){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},$c(n);var g=i.contextType;typeof g=="object"&&g!==null?f.context=ui(g):(g=Xn(i)?Xr:Ln.current,f.context=Ts(n,g)),f.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(su(n,i,g,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Ko.enqueueReplaceState(f,f.state,null),Vo(n,a,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Is(n,i){try{var a="",c=i;do a+=_e(c),c=c.return;while(c);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:f,digest:null}}function ou(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function lu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var tv=typeof WeakMap=="function"?WeakMap:Map;function rp(n,i,a){a=Zi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){il||(il=!0,wu=c),lu(n,i)},a}function sp(n,i,a){a=Zi(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){lu(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){lu(n,i),typeof c!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function ap(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new tv;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),n=mv.bind(null,n,i,a),i.then(n,n))}function op(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function lp(n,i,a,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Zi(-1,1),i.tag=2,yr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var nv=P.ReactCurrentOwner,Yn=!1;function Hn(n,i,a,c){i.child=n===null?Ch(i,null,a,c):Ns(i,n.child,a,c)}function cp(n,i,a,c,f){a=a.render;var g=i.ref;return Ls(i,f),c=Qc(n,i,a,c,g,f),a=eu(),n!==null&&!Yn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Ji(n,i,f)):(tn&&a&&zc(i),i.flags|=1,Hn(n,i,c,f),i.child)}function up(n,i,a,c,f){if(n===null){var g=a.type;return typeof g=="function"&&!Nu(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,dp(n,i,g,c,f)):(n=cl(a.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&f)===0){var T=g.memoizedProps;if(a=a.compare,a=a!==null?a:Sa,a(T,c)&&n.ref===i.ref)return Ji(n,i,f)}return i.flags|=1,n=Tr(g,c),n.ref=i.ref,n.return=i,i.child=n}function dp(n,i,a,c,f){if(n!==null){var g=n.memoizedProps;if(Sa(g,c)&&n.ref===i.ref)if(Yn=!1,i.pendingProps=c=g,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Yn=!0);else return i.lanes=n.lanes,Ji(n,i,f)}return cu(n,i,a,c,f)}function fp(n,i,a){var c=i.pendingProps,f=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Kt(zs,ni),ni|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Kt(zs,ni),ni|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,Kt(zs,ni),ni|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,Kt(zs,ni),ni|=c;return Hn(n,i,f,a),i.child}function hp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function cu(n,i,a,c,f){var g=Xn(a)?Xr:Ln.current;return g=Ts(i,g),Ls(i,f),a=Qc(n,i,a,c,g,f),c=eu(),n!==null&&!Yn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Ji(n,i,f)):(tn&&c&&zc(i),i.flags|=1,Hn(n,i,a,f),i.child)}function pp(n,i,a,c,f){if(Xn(a)){var g=!0;Io(i)}else g=!1;if(Ls(i,f),i.stateNode===null)Jo(n,i),np(i,a,c),au(i,a,c,f),c=!0;else if(n===null){var T=i.stateNode,B=i.memoizedProps;T.props=B;var Z=T.context,ge=a.contextType;typeof ge=="object"&&ge!==null?ge=ui(ge):(ge=Xn(a)?Xr:Ln.current,ge=Ts(i,ge));var Le=a.getDerivedStateFromProps,ze=typeof Le=="function"||typeof T.getSnapshotBeforeUpdate=="function";ze||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(B!==c||Z!==ge)&&ip(i,T,c,ge),_r=!1;var Re=i.memoizedState;T.state=Re,Vo(i,c,T,f),Z=i.memoizedState,B!==c||Re!==Z||$n.current||_r?(typeof Le=="function"&&(su(i,a,Le,c),Z=i.memoizedState),(B=_r||tp(i,a,B,c,Re,Z,ge))?(ze||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=Z),T.props=c,T.state=Z,T.context=ge,c=B):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,Nh(n,i),B=i.memoizedProps,ge=i.type===i.elementType?B:vi(i.type,B),T.props=ge,ze=i.pendingProps,Re=T.context,Z=a.contextType,typeof Z=="object"&&Z!==null?Z=ui(Z):(Z=Xn(a)?Xr:Ln.current,Z=Ts(i,Z));var Je=a.getDerivedStateFromProps;(Le=typeof Je=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(B!==ze||Re!==Z)&&ip(i,T,c,Z),_r=!1,Re=i.memoizedState,T.state=Re,Vo(i,c,T,f);var st=i.memoizedState;B!==ze||Re!==st||$n.current||_r?(typeof Je=="function"&&(su(i,a,Je,c),st=i.memoizedState),(ge=_r||tp(i,a,ge,c,Re,st,Z)||!1)?(Le||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,st,Z),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,st,Z)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||B===n.memoizedProps&&Re===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Re===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=st),T.props=c,T.state=st,T.context=Z,c=ge):(typeof T.componentDidUpdate!="function"||B===n.memoizedProps&&Re===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Re===n.memoizedState||(i.flags|=1024),c=!1)}return uu(n,i,a,c,g,f)}function uu(n,i,a,c,f,g){hp(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return f&&_h(i,a,!1),Ji(n,i,g);c=i.stateNode,nv.current=i;var B=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=Ns(i,n.child,null,g),i.child=Ns(i,null,B,g)):Hn(n,i,B,g),i.memoizedState=c.state,f&&_h(i,a,!0),i.child}function mp(n){var i=n.stateNode;i.pendingContext?xh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&xh(n,i.context,!1),Xc(n,i.containerInfo)}function gp(n,i,a,c,f){return Rs(),Bc(f),i.flags|=256,Hn(n,i,a,c),i.child}var du={dehydrated:null,treeContext:null,retryLane:0};function fu(n){return{baseLanes:n,cachePool:null,transitions:null}}function xp(n,i,a){var c=i.pendingProps,f=sn.current,g=!1,T=(i.flags&128)!==0,B;if((B=T)||(B=n!==null&&n.memoizedState===null?!1:(f&2)!==0),B?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Kt(sn,f&1),n===null)return Oc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,g?(c=i.mode,g=i.child,T={mode:"hidden",children:T},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=T):g=ul(T,c,0,null),n=is(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=fu(a),i.memoizedState=du,n):hu(i,T));if(f=n.memoizedState,f!==null&&(B=f.dehydrated,B!==null))return iv(n,i,T,c,B,f,a);if(g){g=c.fallback,T=i.mode,f=n.child,B=f.sibling;var Z={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=Z,i.deletions=null):(c=Tr(f,Z),c.subtreeFlags=f.subtreeFlags&14680064),B!==null?g=Tr(B,g):(g=is(g,T,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,T=n.child.memoizedState,T=T===null?fu(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},g.memoizedState=T,g.childLanes=n.childLanes&~a,i.memoizedState=du,c}return g=n.child,n=g.sibling,c=Tr(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function hu(n,i){return i=ul({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Zo(n,i,a,c){return c!==null&&Bc(c),Ns(i,n.child,null,a),n=hu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function iv(n,i,a,c,f,g,T){if(a)return i.flags&256?(i.flags&=-257,c=ou(Error(t(422))),Zo(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,f=i.mode,c=ul({mode:"visible",children:c.children},f,0,null),g=is(g,f,T,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&Ns(i,n.child,null,T),i.child.memoizedState=fu(T),i.memoizedState=du,g);if((i.mode&1)===0)return Zo(n,i,T,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var B=c.dgst;return c=B,g=Error(t(419)),c=ou(g,c,void 0),Zo(n,i,T,c)}if(B=(T&n.childLanes)!==0,Yn||B){if(c=En,c!==null){switch(T&-T){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|T))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Ki(n,f),Si(c,n,f,-1))}return Ru(),c=ou(Error(t(421))),Zo(n,i,T,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=gv.bind(null,n),f._reactRetry=i,null):(n=g.treeContext,ti=mr(f.nextSibling),ei=i,tn=!0,xi=null,n!==null&&(li[ci++]=Yi,li[ci++]=qi,li[ci++]=Yr,Yi=n.id,qi=n.overflow,Yr=i),i=hu(i,c.children),i.flags|=4096,i)}function vp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Wc(n.return,i,a)}function pu(n,i,a,c,f){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=f)}function _p(n,i,a){var c=i.pendingProps,f=c.revealOrder,g=c.tail;if(Hn(n,i,c.children,a),c=sn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&vp(n,a,i);else if(n.tag===19)vp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Kt(sn,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&Wo(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),pu(i,!1,f,a,g);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Wo(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}pu(i,!0,a,null,g);break;case"together":pu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Jo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ji(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Qr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Tr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Tr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function rv(n,i,a){switch(i.tag){case 3:mp(i),Rs();break;case 5:Dh(i);break;case 1:Xn(i.type)&&Io(i);break;case 4:Xc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Kt(Bo,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Kt(sn,sn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?xp(n,i,a):(Kt(sn,sn.current&1),n=Ji(n,i,a),n!==null?n.sibling:null);Kt(sn,sn.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return _p(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Kt(sn,sn.current),c)break;return null;case 22:case 23:return i.lanes=0,fp(n,i,a)}return Ji(n,i,a)}var yp,mu,Sp,Mp;yp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},mu=function(){},Sp=function(n,i,a,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,Zr(Ii.current);var g=null;switch(a){case"input":f=Xe(n,f),c=Xe(n,c),g=[];break;case"select":f=Y({},f,{value:void 0}),c=Y({},c,{value:void 0}),g=[];break;case"textarea":f=kt(n,f),c=kt(n,c),g=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Po)}ve(a,c);var T;a=null;for(ge in f)if(!c.hasOwnProperty(ge)&&f.hasOwnProperty(ge)&&f[ge]!=null)if(ge==="style"){var B=f[ge];for(T in B)B.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else ge!=="dangerouslySetInnerHTML"&&ge!=="children"&&ge!=="suppressContentEditableWarning"&&ge!=="suppressHydrationWarning"&&ge!=="autoFocus"&&(o.hasOwnProperty(ge)?g||(g=[]):(g=g||[]).push(ge,null));for(ge in c){var Z=c[ge];if(B=f!=null?f[ge]:void 0,c.hasOwnProperty(ge)&&Z!==B&&(Z!=null||B!=null))if(ge==="style")if(B){for(T in B)!B.hasOwnProperty(T)||Z&&Z.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in Z)Z.hasOwnProperty(T)&&B[T]!==Z[T]&&(a||(a={}),a[T]=Z[T])}else a||(g||(g=[]),g.push(ge,a)),a=Z;else ge==="dangerouslySetInnerHTML"?(Z=Z?Z.__html:void 0,B=B?B.__html:void 0,Z!=null&&B!==Z&&(g=g||[]).push(ge,Z)):ge==="children"?typeof Z!="string"&&typeof Z!="number"||(g=g||[]).push(ge,""+Z):ge!=="suppressContentEditableWarning"&&ge!=="suppressHydrationWarning"&&(o.hasOwnProperty(ge)?(Z!=null&&ge==="onScroll"&&Zt("scroll",n),g||B===Z||(g=[])):(g=g||[]).push(ge,Z))}a&&(g=g||[]).push("style",a);var ge=g;(i.updateQueue=ge)&&(i.flags|=4)}},Mp=function(n,i,a,c){a!==c&&(i.flags|=4)};function za(n,i){if(!tn)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function In(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function sv(n,i,a){var c=i.pendingProps;switch(Fc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return In(i),null;case 1:return Xn(i.type)&&Do(),In(i),null;case 3:return c=i.stateNode,Ds(),Jt($n),Jt(Ln),Kc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(ko(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,xi!==null&&(Tu(xi),xi=null))),mu(n,i),In(i),null;case 5:Yc(i);var f=Zr(Pa.current);if(a=i.type,n!==null&&i.stateNode!=null)Sp(n,i,a,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return In(i),null}if(n=Zr(Ii.current),ko(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[Di]=i,c[Ta]=g,n=(i.mode&1)!==0,a){case"dialog":Zt("cancel",c),Zt("close",c);break;case"iframe":case"object":case"embed":Zt("load",c);break;case"video":case"audio":for(f=0;f<wa.length;f++)Zt(wa[f],c);break;case"source":Zt("error",c);break;case"img":case"image":case"link":Zt("error",c),Zt("load",c);break;case"details":Zt("toggle",c);break;case"input":St(c,g),Zt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Zt("invalid",c);break;case"textarea":rn(c,g),Zt("invalid",c)}ve(a,g),f=null;for(var T in g)if(g.hasOwnProperty(T)){var B=g[T];T==="children"?typeof B=="string"?c.textContent!==B&&(g.suppressHydrationWarning!==!0&&No(c.textContent,B,n),f=["children",B]):typeof B=="number"&&c.textContent!==""+B&&(g.suppressHydrationWarning!==!0&&No(c.textContent,B,n),f=["children",""+B]):o.hasOwnProperty(T)&&B!=null&&T==="onScroll"&&Zt("scroll",c)}switch(a){case"input":je(c),It(c,g,!0);break;case"textarea":je(c),Yt(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Po)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Pt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[Di]=i,n[Ta]=c,yp(n,i,!1,!1),i.stateNode=n;e:{switch(T=Ue(a,c),a){case"dialog":Zt("cancel",n),Zt("close",n),f=c;break;case"iframe":case"object":case"embed":Zt("load",n),f=c;break;case"video":case"audio":for(f=0;f<wa.length;f++)Zt(wa[f],n);f=c;break;case"source":Zt("error",n),f=c;break;case"img":case"image":case"link":Zt("error",n),Zt("load",n),f=c;break;case"details":Zt("toggle",n),f=c;break;case"input":St(n,c),f=Xe(n,c),Zt("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=Y({},c,{value:void 0}),Zt("invalid",n);break;case"textarea":rn(n,c),f=kt(n,c),Zt("invalid",n);break;default:f=c}ve(a,f),B=f;for(g in B)if(B.hasOwnProperty(g)){var Z=B[g];g==="style"?ae(n,Z):g==="dangerouslySetInnerHTML"?(Z=Z?Z.__html:void 0,Z!=null&&Et(n,Z)):g==="children"?typeof Z=="string"?(a!=="textarea"||Z!=="")&&qe(n,Z):typeof Z=="number"&&qe(n,""+Z):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?Z!=null&&g==="onScroll"&&Zt("scroll",n):Z!=null&&F(n,g,Z,T))}switch(a){case"input":je(n),It(n,c,!1);break;case"textarea":je(n),Yt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Se(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?Wt(n,!!c.multiple,g,!1):c.defaultValue!=null&&Wt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Po)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return In(i),null;case 6:if(n&&i.stateNode!=null)Mp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Zr(Pa.current),Zr(Ii.current),ko(i)){if(c=i.stateNode,a=i.memoizedProps,c[Di]=i,(g=c.nodeValue!==a)&&(n=ei,n!==null))switch(n.tag){case 3:No(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&No(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Di]=i,i.stateNode=c}return In(i),null;case 13:if(Jt(sn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(tn&&ti!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Eh(),Rs(),i.flags|=98560,g=!1;else if(g=ko(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Di]=i}else Rs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;In(i),g=!1}else xi!==null&&(Tu(xi),xi=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(sn.current&1)!==0?_n===0&&(_n=3):Ru())),i.updateQueue!==null&&(i.flags|=4),In(i),null);case 4:return Ds(),mu(n,i),n===null&&ba(i.stateNode.containerInfo),In(i),null;case 10:return Vc(i.type._context),In(i),null;case 17:return Xn(i.type)&&Do(),In(i),null;case 19:if(Jt(sn),g=i.memoizedState,g===null)return In(i),null;if(c=(i.flags&128)!==0,T=g.rendering,T===null)if(c)za(g,!1);else{if(_n!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=Wo(n),T!==null){for(i.flags|=128,za(g,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,T=g.alternate,T===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=T.childLanes,g.lanes=T.lanes,g.child=T.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=T.memoizedProps,g.memoizedState=T.memoizedState,g.updateQueue=T.updateQueue,g.type=T.type,n=T.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Kt(sn,sn.current&1|2),i.child}n=n.sibling}g.tail!==null&&Qt()>Fs&&(i.flags|=128,c=!0,za(g,!1),i.lanes=4194304)}else{if(!c)if(n=Wo(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),za(g,!0),g.tail===null&&g.tailMode==="hidden"&&!T.alternate&&!tn)return In(i),null}else 2*Qt()-g.renderingStartTime>Fs&&a!==1073741824&&(i.flags|=128,c=!0,za(g,!1),i.lanes=4194304);g.isBackwards?(T.sibling=i.child,i.child=T):(a=g.last,a!==null?a.sibling=T:i.child=T,g.last=T)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Qt(),i.sibling=null,a=sn.current,Kt(sn,c?a&1|2:a&1),i):(In(i),null);case 22:case 23:return Cu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ni&1073741824)!==0&&(In(i),i.subtreeFlags&6&&(i.flags|=8192)):In(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function av(n,i){switch(Fc(i),i.tag){case 1:return Xn(i.type)&&Do(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ds(),Jt($n),Jt(Ln),Kc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Yc(i),null;case 13:if(Jt(sn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Rs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Jt(sn),null;case 4:return Ds(),null;case 10:return Vc(i.type._context),null;case 22:case 23:return Cu(),null;case 24:return null;default:return null}}var Qo=!1,Un=!1,ov=typeof WeakSet=="function"?WeakSet:Set,et=null;function Us(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){un(n,i,c)}else a.current=null}function gu(n,i,a){try{a()}catch(c){un(n,i,c)}}var wp=!1;function lv(n,i){if(Cc=_o,n=th(),yc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var T=0,B=-1,Z=-1,ge=0,Le=0,ze=n,Re=null;t:for(;;){for(var Je;ze!==a||f!==0&&ze.nodeType!==3||(B=T+f),ze!==g||c!==0&&ze.nodeType!==3||(Z=T+c),ze.nodeType===3&&(T+=ze.nodeValue.length),(Je=ze.firstChild)!==null;)Re=ze,ze=Je;for(;;){if(ze===n)break t;if(Re===a&&++ge===f&&(B=T),Re===g&&++Le===c&&(Z=T),(Je=ze.nextSibling)!==null)break;ze=Re,Re=ze.parentNode}ze=Je}a=B===-1||Z===-1?null:{start:B,end:Z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Rc={focusedElem:n,selectionRange:a},_o=!1,et=i;et!==null;)if(i=et,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,et=n;else for(;et!==null;){i=et;try{var st=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(st!==null){var at=st.memoizedProps,fn=st.memoizedState,ue=i.stateNode,te=ue.getSnapshotBeforeUpdate(i.elementType===i.type?at:vi(i.type,at),fn);ue.__reactInternalSnapshotBeforeUpdate=te}break;case 3:var he=i.stateNode.containerInfo;he.nodeType===1?he.textContent="":he.nodeType===9&&he.documentElement&&he.removeChild(he.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(He){un(i,i.return,He)}if(n=i.sibling,n!==null){n.return=i.return,et=n;break}et=i.return}return st=wp,wp=!1,st}function Fa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var g=f.destroy;f.destroy=void 0,g!==void 0&&gu(i,a,g)}f=f.next}while(f!==c)}}function el(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function xu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function bp(n){var i=n.alternate;i!==null&&(n.alternate=null,bp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Di],delete i[Ta],delete i[Dc],delete i[Wx],delete i[jx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Ep(n){return n.tag===5||n.tag===3||n.tag===4}function Tp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Ep(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function vu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Po));else if(c!==4&&(n=n.child,n!==null))for(vu(n,i,a),n=n.sibling;n!==null;)vu(n,i,a),n=n.sibling}function _u(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(_u(n,i,a),n=n.sibling;n!==null;)_u(n,i,a),n=n.sibling}var Cn=null,_i=!1;function Sr(n,i,a){for(a=a.child;a!==null;)Ap(n,i,a),a=a.sibling}function Ap(n,i,a){if(fe&&typeof fe.onCommitFiberUnmount=="function")try{fe.onCommitFiberUnmount(q,a)}catch{}switch(a.tag){case 5:Un||Us(a,i);case 6:var c=Cn,f=_i;Cn=null,Sr(n,i,a),Cn=c,_i=f,Cn!==null&&(_i?(n=Cn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Cn.removeChild(a.stateNode));break;case 18:Cn!==null&&(_i?(n=Cn,a=a.stateNode,n.nodeType===8?Lc(n.parentNode,a):n.nodeType===1&&Lc(n,a),ma(n)):Lc(Cn,a.stateNode));break;case 4:c=Cn,f=_i,Cn=a.stateNode.containerInfo,_i=!0,Sr(n,i,a),Cn=c,_i=f;break;case 0:case 11:case 14:case 15:if(!Un&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var g=f,T=g.destroy;g=g.tag,T!==void 0&&((g&2)!==0||(g&4)!==0)&&gu(a,i,T),f=f.next}while(f!==c)}Sr(n,i,a);break;case 1:if(!Un&&(Us(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(B){un(a,i,B)}Sr(n,i,a);break;case 21:Sr(n,i,a);break;case 22:a.mode&1?(Un=(c=Un)||a.memoizedState!==null,Sr(n,i,a),Un=c):Sr(n,i,a);break;default:Sr(n,i,a)}}function Cp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new ov),i.forEach(function(c){var f=xv.bind(null,n,c);a.has(c)||(a.add(c),c.then(f,f))})}}function yi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var g=n,T=i,B=T;e:for(;B!==null;){switch(B.tag){case 5:Cn=B.stateNode,_i=!1;break e;case 3:Cn=B.stateNode.containerInfo,_i=!0;break e;case 4:Cn=B.stateNode.containerInfo,_i=!0;break e}B=B.return}if(Cn===null)throw Error(t(160));Ap(g,T,f),Cn=null,_i=!1;var Z=f.alternate;Z!==null&&(Z.return=null),f.return=null}catch(ge){un(f,i,ge)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Rp(i,n),i=i.sibling}function Rp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(yi(i,n),zi(n),c&4){try{Fa(3,n,n.return),el(3,n)}catch(at){un(n,n.return,at)}try{Fa(5,n,n.return)}catch(at){un(n,n.return,at)}}break;case 1:yi(i,n),zi(n),c&512&&a!==null&&Us(a,a.return);break;case 5:if(yi(i,n),zi(n),c&512&&a!==null&&Us(a,a.return),n.flags&32){var f=n.stateNode;try{qe(f,"")}catch(at){un(n,n.return,at)}}if(c&4&&(f=n.stateNode,f!=null)){var g=n.memoizedProps,T=a!==null?a.memoizedProps:g,B=n.type,Z=n.updateQueue;if(n.updateQueue=null,Z!==null)try{B==="input"&&g.type==="radio"&&g.name!=null&&Mt(f,g),Ue(B,T);var ge=Ue(B,g);for(T=0;T<Z.length;T+=2){var Le=Z[T],ze=Z[T+1];Le==="style"?ae(f,ze):Le==="dangerouslySetInnerHTML"?Et(f,ze):Le==="children"?qe(f,ze):F(f,Le,ze,ge)}switch(B){case"input":Dt(f,g);break;case"textarea":J(f,g);break;case"select":var Re=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var Je=g.value;Je!=null?Wt(f,!!g.multiple,Je,!1):Re!==!!g.multiple&&(g.defaultValue!=null?Wt(f,!!g.multiple,g.defaultValue,!0):Wt(f,!!g.multiple,g.multiple?[]:"",!1))}f[Ta]=g}catch(at){un(n,n.return,at)}}break;case 6:if(yi(i,n),zi(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,g=n.memoizedProps;try{f.nodeValue=g}catch(at){un(n,n.return,at)}}break;case 3:if(yi(i,n),zi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ma(i.containerInfo)}catch(at){un(n,n.return,at)}break;case 4:yi(i,n),zi(n);break;case 13:yi(i,n),zi(n),f=n.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(Mu=Qt())),c&4&&Cp(n);break;case 22:if(Le=a!==null&&a.memoizedState!==null,n.mode&1?(Un=(ge=Un)||Le,yi(i,n),Un=ge):yi(i,n),zi(n),c&8192){if(ge=n.memoizedState!==null,(n.stateNode.isHidden=ge)&&!Le&&(n.mode&1)!==0)for(et=n,Le=n.child;Le!==null;){for(ze=et=Le;et!==null;){switch(Re=et,Je=Re.child,Re.tag){case 0:case 11:case 14:case 15:Fa(4,Re,Re.return);break;case 1:Us(Re,Re.return);var st=Re.stateNode;if(typeof st.componentWillUnmount=="function"){c=Re,a=Re.return;try{i=c,st.props=i.memoizedProps,st.state=i.memoizedState,st.componentWillUnmount()}catch(at){un(c,a,at)}}break;case 5:Us(Re,Re.return);break;case 22:if(Re.memoizedState!==null){Lp(ze);continue}}Je!==null?(Je.return=Re,et=Je):Lp(ze)}Le=Le.sibling}e:for(Le=null,ze=n;;){if(ze.tag===5){if(Le===null){Le=ze;try{f=ze.stateNode,ge?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(B=ze.stateNode,Z=ze.memoizedProps.style,T=Z!=null&&Z.hasOwnProperty("display")?Z.display:null,B.style.display=E("display",T))}catch(at){un(n,n.return,at)}}}else if(ze.tag===6){if(Le===null)try{ze.stateNode.nodeValue=ge?"":ze.memoizedProps}catch(at){un(n,n.return,at)}}else if((ze.tag!==22&&ze.tag!==23||ze.memoizedState===null||ze===n)&&ze.child!==null){ze.child.return=ze,ze=ze.child;continue}if(ze===n)break e;for(;ze.sibling===null;){if(ze.return===null||ze.return===n)break e;Le===ze&&(Le=null),ze=ze.return}Le===ze&&(Le=null),ze.sibling.return=ze.return,ze=ze.sibling}}break;case 19:yi(i,n),zi(n),c&4&&Cp(n);break;case 21:break;default:yi(i,n),zi(n)}}function zi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Ep(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(qe(f,""),c.flags&=-33);var g=Tp(n);_u(n,g,f);break;case 3:case 4:var T=c.stateNode.containerInfo,B=Tp(n);vu(n,B,T);break;default:throw Error(t(161))}}catch(Z){un(n,n.return,Z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function cv(n,i,a){et=n,Np(n)}function Np(n,i,a){for(var c=(n.mode&1)!==0;et!==null;){var f=et,g=f.child;if(f.tag===22&&c){var T=f.memoizedState!==null||Qo;if(!T){var B=f.alternate,Z=B!==null&&B.memoizedState!==null||Un;B=Qo;var ge=Un;if(Qo=T,(Un=Z)&&!ge)for(et=f;et!==null;)T=et,Z=T.child,T.tag===22&&T.memoizedState!==null?Dp(f):Z!==null?(Z.return=T,et=Z):Dp(f);for(;g!==null;)et=g,Np(g),g=g.sibling;et=f,Qo=B,Un=ge}Pp(n)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,et=g):Pp(n)}}function Pp(n){for(;et!==null;){var i=et;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Un||el(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Un)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:vi(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Lh(i,g,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Lh(i,T,a)}break;case 5:var B=i.stateNode;if(a===null&&i.flags&4){a=B;var Z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":Z.autoFocus&&a.focus();break;case"img":Z.src&&(a.src=Z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ge=i.alternate;if(ge!==null){var Le=ge.memoizedState;if(Le!==null){var ze=Le.dehydrated;ze!==null&&ma(ze)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Un||i.flags&512&&xu(i)}catch(Re){un(i,i.return,Re)}}if(i===n){et=null;break}if(a=i.sibling,a!==null){a.return=i.return,et=a;break}et=i.return}}function Lp(n){for(;et!==null;){var i=et;if(i===n){et=null;break}var a=i.sibling;if(a!==null){a.return=i.return,et=a;break}et=i.return}}function Dp(n){for(;et!==null;){var i=et;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{el(4,i)}catch(Z){un(i,a,Z)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(Z){un(i,f,Z)}}var g=i.return;try{xu(i)}catch(Z){un(i,g,Z)}break;case 5:var T=i.return;try{xu(i)}catch(Z){un(i,T,Z)}}}catch(Z){un(i,i.return,Z)}if(i===n){et=null;break}var B=i.sibling;if(B!==null){B.return=i.return,et=B;break}et=i.return}}var uv=Math.ceil,tl=P.ReactCurrentDispatcher,yu=P.ReactCurrentOwner,fi=P.ReactCurrentBatchConfig,Ot=0,En=null,hn=null,Rn=0,ni=0,zs=gr(0),_n=0,ka=null,Qr=0,nl=0,Su=0,Oa=null,qn=null,Mu=0,Fs=1/0,Qi=null,il=!1,wu=null,Mr=null,rl=!1,wr=null,sl=0,Ba=0,bu=null,al=-1,ol=0;function Gn(){return(Ot&6)!==0?Qt():al!==-1?al:al=Qt()}function br(n){return(n.mode&1)===0?1:(Ot&2)!==0&&Rn!==0?Rn&-Rn:Xx.transition!==null?(ol===0&&(ol=jt()),ol):(n=ot,n!==0||(n=window.event,n=n===void 0?16:Uf(n.type)),n)}function Si(n,i,a,c){if(50<Ba)throw Ba=0,bu=null,Error(t(185));cn(n,a,c),((Ot&2)===0||n!==En)&&(n===En&&((Ot&2)===0&&(nl|=a),_n===4&&Er(n,Rn)),Kn(n,c),a===1&&Ot===0&&(i.mode&1)===0&&(Fs=Qt()+500,Uo&&vr()))}function Kn(n,i){var a=n.callbackNode;Tt(n,i);var c=yt(n,n===En?Rn:0);if(c===0)a!==null&&ua(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&ua(a),i===1)n.tag===0?$x(Up.bind(null,n)):yh(Up.bind(null,n)),Gx(function(){(Ot&6)===0&&vr()}),a=null;else{switch(Pi(c)){case 1:a=da;break;case 4:a=go;break;case 16:a=gs;break;case 536870912:a=A;break;default:a=gs}a=Vp(a,Ip.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Ip(n,i){if(al=-1,ol=0,(Ot&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ks()&&n.callbackNode!==a)return null;var c=yt(n,n===En?Rn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=ll(n,c);else{i=c;var f=Ot;Ot|=2;var g=Fp();(En!==n||Rn!==i)&&(Qi=null,Fs=Qt()+500,ts(n,i));do try{hv();break}catch(B){zp(n,B)}while(!0);Gc(),tl.current=g,Ot=f,hn!==null?i=0:(En=null,Rn=0,i=_n)}if(i!==0){if(i===2&&(f=en(n),f!==0&&(c=f,i=Eu(n,f))),i===1)throw a=ka,ts(n,0),Er(n,c),Kn(n,Qt()),a;if(i===6)Er(n,c);else{if(f=n.current.alternate,(c&30)===0&&!dv(f)&&(i=ll(n,c),i===2&&(g=en(n),g!==0&&(c=g,i=Eu(n,g))),i===1))throw a=ka,ts(n,0),Er(n,c),Kn(n,Qt()),a;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ns(n,qn,Qi);break;case 3:if(Er(n,c),(c&130023424)===c&&(i=Mu+500-Qt(),10<i)){if(yt(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){Gn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Pc(ns.bind(null,n,qn,Qi),i);break}ns(n,qn,Qi);break;case 4:if(Er(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var T=31-oe(c);g=1<<T,T=i[T],T>f&&(f=T),c&=~g}if(c=f,c=Qt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*uv(c/1960))-c,10<c){n.timeoutHandle=Pc(ns.bind(null,n,qn,Qi),c);break}ns(n,qn,Qi);break;case 5:ns(n,qn,Qi);break;default:throw Error(t(329))}}}return Kn(n,Qt()),n.callbackNode===a?Ip.bind(null,n):null}function Eu(n,i){var a=Oa;return n.current.memoizedState.isDehydrated&&(ts(n,i).flags|=256),n=ll(n,i),n!==2&&(i=qn,qn=a,i!==null&&Tu(i)),n}function Tu(n){qn===null?qn=n:qn.push.apply(qn,n)}function dv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],g=f.getSnapshot;f=f.value;try{if(!gi(g(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Er(n,i){for(i&=~Su,i&=~nl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-oe(i),c=1<<a;n[a]=-1,i&=~c}}function Up(n){if((Ot&6)!==0)throw Error(t(327));ks();var i=yt(n,0);if((i&1)===0)return Kn(n,Qt()),null;var a=ll(n,i);if(n.tag!==0&&a===2){var c=en(n);c!==0&&(i=c,a=Eu(n,c))}if(a===1)throw a=ka,ts(n,0),Er(n,i),Kn(n,Qt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ns(n,qn,Qi),Kn(n,Qt()),null}function Au(n,i){var a=Ot;Ot|=1;try{return n(i)}finally{Ot=a,Ot===0&&(Fs=Qt()+500,Uo&&vr())}}function es(n){wr!==null&&wr.tag===0&&(Ot&6)===0&&ks();var i=Ot;Ot|=1;var a=fi.transition,c=ot;try{if(fi.transition=null,ot=1,n)return n()}finally{ot=c,fi.transition=a,Ot=i,(Ot&6)===0&&vr()}}function Cu(){ni=zs.current,Jt(zs)}function ts(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Hx(a)),hn!==null)for(a=hn.return;a!==null;){var c=a;switch(Fc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Do();break;case 3:Ds(),Jt($n),Jt(Ln),Kc();break;case 5:Yc(c);break;case 4:Ds();break;case 13:Jt(sn);break;case 19:Jt(sn);break;case 10:Vc(c.type._context);break;case 22:case 23:Cu()}a=a.return}if(En=n,hn=n=Tr(n.current,null),Rn=ni=i,_n=0,ka=null,Su=nl=Qr=0,qn=Oa=null,Kr!==null){for(i=0;i<Kr.length;i++)if(a=Kr[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,g=a.pending;if(g!==null){var T=g.next;g.next=f,c.next=T}a.pending=c}Kr=null}return n}function zp(n,i){do{var a=hn;try{if(Gc(),jo.current=qo,$o){for(var c=an.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}$o=!1}if(Jr=0,bn=vn=an=null,La=!1,Da=0,yu.current=null,a===null||a.return===null){_n=1,ka=i,hn=null;break}e:{var g=n,T=a.return,B=a,Z=i;if(i=Rn,B.flags|=32768,Z!==null&&typeof Z=="object"&&typeof Z.then=="function"){var ge=Z,Le=B,ze=Le.tag;if((Le.mode&1)===0&&(ze===0||ze===11||ze===15)){var Re=Le.alternate;Re?(Le.updateQueue=Re.updateQueue,Le.memoizedState=Re.memoizedState,Le.lanes=Re.lanes):(Le.updateQueue=null,Le.memoizedState=null)}var Je=op(T);if(Je!==null){Je.flags&=-257,lp(Je,T,B,g,i),Je.mode&1&&ap(g,ge,i),i=Je,Z=ge;var st=i.updateQueue;if(st===null){var at=new Set;at.add(Z),i.updateQueue=at}else st.add(Z);break e}else{if((i&1)===0){ap(g,ge,i),Ru();break e}Z=Error(t(426))}}else if(tn&&B.mode&1){var fn=op(T);if(fn!==null){(fn.flags&65536)===0&&(fn.flags|=256),lp(fn,T,B,g,i),Bc(Is(Z,B));break e}}g=Z=Is(Z,B),_n!==4&&(_n=2),Oa===null?Oa=[g]:Oa.push(g),g=T;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var ue=rp(g,Z,i);Ph(g,ue);break e;case 1:B=Z;var te=g.type,he=g.stateNode;if((g.flags&128)===0&&(typeof te.getDerivedStateFromError=="function"||he!==null&&typeof he.componentDidCatch=="function"&&(Mr===null||!Mr.has(he)))){g.flags|=65536,i&=-i,g.lanes|=i;var He=sp(g,B,i);Ph(g,He);break e}}g=g.return}while(g!==null)}Op(a)}catch(lt){i=lt,hn===a&&a!==null&&(hn=a=a.return);continue}break}while(!0)}function Fp(){var n=tl.current;return tl.current=qo,n===null?qo:n}function Ru(){(_n===0||_n===3||_n===2)&&(_n=4),En===null||(Qr&268435455)===0&&(nl&268435455)===0||Er(En,Rn)}function ll(n,i){var a=Ot;Ot|=2;var c=Fp();(En!==n||Rn!==i)&&(Qi=null,ts(n,i));do try{fv();break}catch(f){zp(n,f)}while(!0);if(Gc(),Ot=a,tl.current=c,hn!==null)throw Error(t(261));return En=null,Rn=0,_n}function fv(){for(;hn!==null;)kp(hn)}function hv(){for(;hn!==null&&!jr();)kp(hn)}function kp(n){var i=Gp(n.alternate,n,ni);n.memoizedProps=n.pendingProps,i===null?Op(n):hn=i,yu.current=null}function Op(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=sv(a,i,ni),a!==null){hn=a;return}}else{if(a=av(a,i),a!==null){a.flags&=32767,hn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{_n=6,hn=null;return}}if(i=i.sibling,i!==null){hn=i;return}hn=i=n}while(i!==null);_n===0&&(_n=5)}function ns(n,i,a){var c=ot,f=fi.transition;try{fi.transition=null,ot=1,pv(n,i,a,c)}finally{fi.transition=f,ot=c}return null}function pv(n,i,a,c){do ks();while(wr!==null);if((Ot&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(it(n,g),n===En&&(hn=En=null,Rn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||rl||(rl=!0,Vp(gs,function(){return ks(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=fi.transition,fi.transition=null;var T=ot;ot=1;var B=Ot;Ot|=4,yu.current=null,lv(n,a),Rp(a,n),Ix(Rc),_o=!!Cc,Rc=Cc=null,n.current=a,cv(a),lc(),Ot=B,ot=T,fi.transition=g}else n.current=a;if(rl&&(rl=!1,wr=n,sl=f),g=n.pendingLanes,g===0&&(Mr=null),le(a.stateNode),Kn(n,Qt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(il)throw il=!1,n=wu,wu=null,n;return(sl&1)!==0&&n.tag!==0&&ks(),g=n.pendingLanes,(g&1)!==0?n===bu?Ba++:(Ba=0,bu=n):Ba=0,vr(),null}function ks(){if(wr!==null){var n=Pi(sl),i=fi.transition,a=ot;try{if(fi.transition=null,ot=16>n?16:n,wr===null)var c=!1;else{if(n=wr,wr=null,sl=0,(Ot&6)!==0)throw Error(t(331));var f=Ot;for(Ot|=4,et=n.current;et!==null;){var g=et,T=g.child;if((et.flags&16)!==0){var B=g.deletions;if(B!==null){for(var Z=0;Z<B.length;Z++){var ge=B[Z];for(et=ge;et!==null;){var Le=et;switch(Le.tag){case 0:case 11:case 15:Fa(8,Le,g)}var ze=Le.child;if(ze!==null)ze.return=Le,et=ze;else for(;et!==null;){Le=et;var Re=Le.sibling,Je=Le.return;if(bp(Le),Le===ge){et=null;break}if(Re!==null){Re.return=Je,et=Re;break}et=Je}}}var st=g.alternate;if(st!==null){var at=st.child;if(at!==null){st.child=null;do{var fn=at.sibling;at.sibling=null,at=fn}while(at!==null)}}et=g}}if((g.subtreeFlags&2064)!==0&&T!==null)T.return=g,et=T;else e:for(;et!==null;){if(g=et,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Fa(9,g,g.return)}var ue=g.sibling;if(ue!==null){ue.return=g.return,et=ue;break e}et=g.return}}var te=n.current;for(et=te;et!==null;){T=et;var he=T.child;if((T.subtreeFlags&2064)!==0&&he!==null)he.return=T,et=he;else e:for(T=te;et!==null;){if(B=et,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:el(9,B)}}catch(lt){un(B,B.return,lt)}if(B===T){et=null;break e}var He=B.sibling;if(He!==null){He.return=B.return,et=He;break e}et=B.return}}if(Ot=f,vr(),fe&&typeof fe.onPostCommitFiberRoot=="function")try{fe.onPostCommitFiberRoot(q,n)}catch{}c=!0}return c}finally{ot=a,fi.transition=i}}return!1}function Bp(n,i,a){i=Is(a,i),i=rp(n,i,1),n=yr(n,i,1),i=Gn(),n!==null&&(cn(n,1,i),Kn(n,i))}function un(n,i,a){if(n.tag===3)Bp(n,n,a);else for(;i!==null;){if(i.tag===3){Bp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Mr===null||!Mr.has(c))){n=Is(a,n),n=sp(i,n,1),i=yr(i,n,1),n=Gn(),i!==null&&(cn(i,1,n),Kn(i,n));break}}i=i.return}}function mv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Gn(),n.pingedLanes|=n.suspendedLanes&a,En===n&&(Rn&a)===a&&(_n===4||_n===3&&(Rn&130023424)===Rn&&500>Qt()-Mu?ts(n,0):Su|=a),Kn(n,i)}function Hp(n,i){i===0&&((n.mode&1)===0?i=1:(i=tt,tt<<=1,(tt&130023424)===0&&(tt=4194304)));var a=Gn();n=Ki(n,i),n!==null&&(cn(n,i,a),Kn(n,a))}function gv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Hp(n,a)}function xv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Hp(n,a)}var Gp;Gp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||$n.current)Yn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Yn=!1,rv(n,i,a);Yn=(n.flags&131072)!==0}else Yn=!1,tn&&(i.flags&1048576)!==0&&Sh(i,Fo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Jo(n,i),n=i.pendingProps;var f=Ts(i,Ln.current);Ls(i,a),f=Qc(null,i,c,n,f,a);var g=eu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Xn(c)?(g=!0,Io(i)):g=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,$c(i),f.updater=Ko,i.stateNode=f,f._reactInternals=i,au(i,c,n,a),i=uu(null,i,c,!0,g,a)):(i.tag=0,tn&&g&&zc(i),Hn(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Jo(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=_v(c),n=vi(c,n),f){case 0:i=cu(null,i,c,n,a);break e;case 1:i=pp(null,i,c,n,a);break e;case 11:i=cp(null,i,c,n,a);break e;case 14:i=up(null,i,c,vi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:vi(c,f),cu(n,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:vi(c,f),pp(n,i,c,f,a);case 3:e:{if(mp(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,f=g.element,Nh(n,i),Vo(i,c,null,a);var T=i.memoizedState;if(c=T.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){f=Is(Error(t(423)),i),i=gp(n,i,c,a,f);break e}else if(c!==f){f=Is(Error(t(424)),i),i=gp(n,i,c,a,f);break e}else for(ti=mr(i.stateNode.containerInfo.firstChild),ei=i,tn=!0,xi=null,a=Ch(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Rs(),c===f){i=Ji(n,i,a);break e}Hn(n,i,c,a)}i=i.child}return i;case 5:return Dh(i),n===null&&Oc(i),c=i.type,f=i.pendingProps,g=n!==null?n.memoizedProps:null,T=f.children,Nc(c,f)?T=null:g!==null&&Nc(c,g)&&(i.flags|=32),hp(n,i),Hn(n,i,T,a),i.child;case 6:return n===null&&Oc(i),null;case 13:return xp(n,i,a);case 4:return Xc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ns(i,null,c,a):Hn(n,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:vi(c,f),cp(n,i,c,f,a);case 7:return Hn(n,i,i.pendingProps,a),i.child;case 8:return Hn(n,i,i.pendingProps.children,a),i.child;case 12:return Hn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,g=i.memoizedProps,T=f.value,Kt(Bo,c._currentValue),c._currentValue=T,g!==null)if(gi(g.value,T)){if(g.children===f.children&&!$n.current){i=Ji(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var B=g.dependencies;if(B!==null){T=g.child;for(var Z=B.firstContext;Z!==null;){if(Z.context===c){if(g.tag===1){Z=Zi(-1,a&-a),Z.tag=2;var ge=g.updateQueue;if(ge!==null){ge=ge.shared;var Le=ge.pending;Le===null?Z.next=Z:(Z.next=Le.next,Le.next=Z),ge.pending=Z}}g.lanes|=a,Z=g.alternate,Z!==null&&(Z.lanes|=a),Wc(g.return,a,i),B.lanes|=a;break}Z=Z.next}}else if(g.tag===10)T=g.type===i.type?null:g.child;else if(g.tag===18){if(T=g.return,T===null)throw Error(t(341));T.lanes|=a,B=T.alternate,B!==null&&(B.lanes|=a),Wc(T,a,i),T=g.sibling}else T=g.child;if(T!==null)T.return=g;else for(T=g;T!==null;){if(T===i){T=null;break}if(g=T.sibling,g!==null){g.return=T.return,T=g;break}T=T.return}g=T}Hn(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Ls(i,a),f=ui(f),c=c(f),i.flags|=1,Hn(n,i,c,a),i.child;case 14:return c=i.type,f=vi(c,i.pendingProps),f=vi(c.type,f),up(n,i,c,f,a);case 15:return dp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:vi(c,f),Jo(n,i),i.tag=1,Xn(c)?(n=!0,Io(i)):n=!1,Ls(i,a),np(i,c,f),au(i,c,f,a),uu(null,i,c,!0,n,a);case 19:return _p(n,i,a);case 22:return fp(n,i,a)}throw Error(t(156,i.tag))};function Vp(n,i){return ca(n,i)}function vv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(n,i,a,c){return new vv(n,i,a,c)}function Nu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function _v(n){if(typeof n=="function")return Nu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===W)return 11;if(n===O)return 14}return 2}function Tr(n,i){var a=n.alternate;return a===null?(a=hi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function cl(n,i,a,c,f,g){var T=2;if(c=n,typeof n=="function")Nu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case w:return is(a.children,f,g,i);case N:T=8,f|=8;break;case ee:return n=hi(12,a,i,f|2),n.elementType=ee,n.lanes=g,n;case V:return n=hi(13,a,i,f),n.elementType=V,n.lanes=g,n;case H:return n=hi(19,a,i,f),n.elementType=H,n.lanes=g,n;case K:return ul(a,f,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case X:T=10;break e;case G:T=9;break e;case W:T=11;break e;case O:T=14;break e;case re:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=hi(T,a,i,f),i.elementType=n,i.type=c,i.lanes=g,i}function is(n,i,a,c){return n=hi(7,n,c,i),n.lanes=a,n}function ul(n,i,a,c){return n=hi(22,n,c,i),n.elementType=K,n.lanes=a,n.stateNode={isHidden:!1},n}function Pu(n,i,a){return n=hi(6,n,null,i),n.lanes=a,n}function Lu(n,i,a){return i=hi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function yv(n,i,a,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gt(0),this.expirationTimes=Gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gt(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Du(n,i,a,c,f,g,T,B,Z){return n=new yv(n,i,a,B,Z),i===1?(i=1,g===!0&&(i|=8)):i=0,g=hi(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},$c(g),n}function Sv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Wp(n){if(!n)return xr;n=n._reactInternals;e:{if(mn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Xn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Xn(a))return vh(n,a,i)}return i}function jp(n,i,a,c,f,g,T,B,Z){return n=Du(a,c,!0,n,f,g,T,B,Z),n.context=Wp(null),a=n.current,c=Gn(),f=br(a),g=Zi(c,f),g.callback=i??null,yr(a,g,f),n.current.lanes=f,cn(n,f,c),Kn(n,c),n}function dl(n,i,a,c){var f=i.current,g=Gn(),T=br(f);return a=Wp(a),i.context===null?i.context=a:i.pendingContext=a,i=Zi(g,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=yr(f,i,T),n!==null&&(Si(n,f,T,g),Go(n,f,T)),T}function fl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function $p(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Iu(n,i){$p(n,i),(n=n.alternate)&&$p(n,i)}function Mv(){return null}var Xp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Uu(n){this._internalRoot=n}hl.prototype.render=Uu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));dl(n,i,null,null)},hl.prototype.unmount=Uu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;es(function(){dl(null,n,null,null)}),i[$i]=null}};function hl(n){this._internalRoot=n}hl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Li();n={blockedOn:null,target:n,priority:i};for(var a=0;a<fr.length&&i!==0&&i<fr[a].priority;a++);fr.splice(a,0,n),a===0&&Df(n)}};function zu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function pl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Yp(){}function wv(n,i,a,c,f){if(f){if(typeof c=="function"){var g=c;c=function(){var ge=fl(T);g.call(ge)}}var T=jp(i,c,n,0,null,!1,!1,"",Yp);return n._reactRootContainer=T,n[$i]=T.current,ba(n.nodeType===8?n.parentNode:n),es(),T}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var B=c;c=function(){var ge=fl(Z);B.call(ge)}}var Z=Du(n,0,!1,null,null,!1,!1,"",Yp);return n._reactRootContainer=Z,n[$i]=Z.current,ba(n.nodeType===8?n.parentNode:n),es(function(){dl(i,Z,a,c)}),Z}function ml(n,i,a,c,f){var g=a._reactRootContainer;if(g){var T=g;if(typeof f=="function"){var B=f;f=function(){var Z=fl(T);B.call(Z)}}dl(i,T,n,f)}else T=wv(a,i,n,f,c);return fl(T)}xn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=ht(i.pendingLanes);a!==0&&(gn(i,a|1),Kn(i,Qt()),(Ot&6)===0&&(Fs=Qt()+500,vr()))}break;case 13:es(function(){var c=Ki(n,1);if(c!==null){var f=Gn();Si(c,n,1,f)}}),Iu(n,1)}},ur=function(n){if(n.tag===13){var i=Ki(n,134217728);if(i!==null){var a=Gn();Si(i,n,134217728,a)}Iu(n,134217728)}},mi=function(n){if(n.tag===13){var i=br(n),a=Ki(n,i);if(a!==null){var c=Gn();Si(a,n,i,c)}Iu(n,i)}},Li=function(){return ot},Lt=function(n,i){var a=ot;try{return ot=n,i()}finally{ot=a}},se=function(n,i,a){switch(i){case"input":if(Dt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var f=Lo(c);if(!f)throw Error(t(90));Te(c),Dt(c,f)}}}break;case"textarea":J(n,a);break;case"select":i=a.value,i!=null&&Wt(n,!!a.multiple,i,!1)}},Ee=Au,Pe=es;var bv={usingClientEntryPoint:!1,Events:[Aa,bs,Lo,de,Ne,Au]},Ha={findFiberByHostInstance:$r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ev={bundleType:Ha.bundleType,version:Ha.version,rendererPackageName:Ha.rendererPackageName,rendererConfig:Ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=la(n),n===null?null:n.stateNode},findFiberByHostInstance:Ha.findFiberByHostInstance||Mv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gl.isDisabled&&gl.supportsFiber)try{q=gl.inject(Ev),fe=gl}catch{}}return Zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bv,Zn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zu(i))throw Error(t(200));return Sv(n,i,null,a)},Zn.createRoot=function(n,i){if(!zu(n))throw Error(t(299));var a=!1,c="",f=Xp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Du(n,1,!1,null,null,a,!1,c,f),n[$i]=i.current,ba(n.nodeType===8?n.parentNode:n),new Uu(i)},Zn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=la(i),n=n===null?null:n.stateNode,n},Zn.flushSync=function(n){return es(n)},Zn.hydrate=function(n,i,a){if(!pl(i))throw Error(t(200));return ml(null,n,i,!0,a)},Zn.hydrateRoot=function(n,i,a){if(!zu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,g="",T=Xp;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=jp(i,null,n,1,a??null,f,!1,g,T),n[$i]=i.current,ba(n),c)for(n=0;n<c.length;n++)a=c[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new hl(i)},Zn.render=function(n,i,a){if(!pl(i))throw Error(t(200));return ml(null,n,i,!1,a)},Zn.unmountComponentAtNode=function(n){if(!pl(n))throw Error(t(40));return n._reactRootContainer?(es(function(){ml(null,null,n,!1,function(){n._reactRootContainer=null,n[$i]=null})}),!0):!1},Zn.unstable_batchedUpdates=Au,Zn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!pl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ml(n,i,a,!1,c)},Zn.version="18.3.1-next-f1338f8080-20240426",Zn}var nm;function zv(){if(nm)return Ou.exports;nm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ou.exports=Uv(),Ou.exports}var im;function Fv(){if(im)return xl;im=1;var s=zv();return xl.createRoot=s.createRoot,xl.hydrateRoot=s.hydrateRoot,xl}var kv=Fv();const Ov=a0(kv),Qs=[{id:"brown-noise",title:"Brownian Deep Focus",category:"Deep Focus",tagline:"Warm sub-bass rumble for continuous coding & writing",description:"Mathematically integrated brownian spectrum with deep 450Hz low-pass rolloff. Proven to mask background distractions and alleviate cognitive fatigue.",frequency:"0 – 450 Hz Brown Spectrum",accentColor:"#f59e0b"},{id:"celestial-drone",title:"Celestial 432Hz Drone",category:"Mindfulness",tagline:"Harmonically tuned meditative Tibetan chords",description:"Multi-oscillator harmonic chord centered around the natural 432Hz tuning fork with gentle phase chorus and slow breathing resonance.",frequency:"432 Hz Pythagorean Fundamental",accentColor:"#a855f7"},{id:"binaural-gamma",title:"Gamma 40Hz Flow State",category:"Cognitive Flow",tagline:"High-cognition binaural carrier for intense problem-solving",description:"Stereo carrier tones (200Hz L / 240Hz R) inducing 40Hz gamma oscillations in the cerebral cortex, associated with high-level information processing and recall.",frequency:"40 Hz Gamma Difference Wave",accentColor:"#38bdf8"},{id:"binaural-alpha",title:"Alpha 10Hz Quiet Mind",category:"Mindfulness",tagline:"Calm relaxed alertness for reading and reflection",description:"Stereo carrier tones (210Hz L / 220Hz R) stimulating 10Hz alpha rhythms, optimal for sustained reading, journaling, and stress reduction.",frequency:"10 Hz Alpha Difference Wave",accentColor:"#34d399"},{id:"rain-storm",title:"Midnight Rain Sanctuary",category:"Deep Focus",tagline:"Gentle nocturnal rainfall with rolling thunder",description:"Procedurally shaped pink noise with gentle resonant filtering, simulating a peaceful rain shower against cabin windows in deep space.",frequency:"Pink Noise Spectrum & Low Rumble",accentColor:"#818cf8"}];class Bv{constructor(){er(this,"ctx",null);er(this,"masterGain",null);er(this,"analyser",null);er(this,"activeNodes",[]);er(this,"currentId",null);er(this,"_isPlaying",!1);er(this,"_volume",.65);er(this,"_isMuted",!1)}initContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this._isMuted?0:this._volume,this.ctx.currentTime),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=64,this.analyser.smoothingTimeConstant=.85,this.masterGain.connect(this.analyser),this.analyser.connect(this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume()}get isPlaying(){return this._isPlaying}get currentSoundscape(){return this.currentId}get volume(){return this._volume}get isMuted(){return this._isMuted}getAnalyser(){return this.analyser}setVolume(e){if(this._volume=Math.max(0,Math.min(1,e)),this.masterGain&&this.ctx){const t=this._isMuted?0:this._volume;this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime),this.masterGain.gain.linearRampToValueAtTime(t,this.ctx.currentTime+.05)}}toggleMute(){return this._isMuted=!this._isMuted,this.setVolume(this._volume),this._isMuted}stop(){!this.ctx||!this._isPlaying||(this.masterGain&&(this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime),this.masterGain.gain.linearRampToValueAtTime(.001,this.ctx.currentTime+.12)),setTimeout(()=>{this.cleanupNodes(),this._isPlaying=!1,this.currentId=null},130))}cleanupNodes(){for(const e of this.activeNodes)try{"stop"in e&&typeof e.stop=="function"&&e.stop(),e.disconnect()}catch{}this.activeNodes=[]}play(e){if(this.initContext(),!(!this.ctx||!this.masterGain)&&!(this._isPlaying&&this.currentId===e))switch(this.cleanupNodes(),this.currentId=e,this._isPlaying=!0,this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime),this.masterGain.gain.setValueAtTime(.001,this.ctx.currentTime),this.masterGain.gain.linearRampToValueAtTime(this._isMuted?0:this._volume,this.ctx.currentTime+.4),e){case"brown-noise":this.buildBrownNoise();break;case"celestial-drone":this.buildCelestialDrone();break;case"binaural-gamma":this.buildBinauralBeat(200,40);break;case"binaural-alpha":this.buildBinauralBeat(210,10);break;case"rain-storm":this.buildRainStorm();break}}buildBrownNoise(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.sampleRate*5,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),r=t.getChannelData(0);let o=0;for(let u=0;u<e;u++){const h=Math.random()*2-1;o=(o+.02*h)/1.02,r[u]=o*3.2}const l=2048;for(let u=0;u<l;u++){const h=u/l;r[u]=r[u]*h+r[e-l+u]*(1-h)}const d=this.ctx.createBufferSource();d.buffer=t,d.loop=!0;const m=this.ctx.createBiquadFilter();m.type="lowpass",m.frequency.setValueAtTime(450,this.ctx.currentTime),m.Q.setValueAtTime(.7,this.ctx.currentTime),d.connect(m),m.connect(this.masterGain),d.start(),this.activeNodes.push(d,m)}buildCelestialDrone(){if(!this.ctx||!this.masterGain)return;const e=216,t=[e,e*1.5,e*2,e*2.5],r=[-4,3,-2,5];t.forEach((o,l)=>{if(!this.ctx||!this.masterGain)return;const d=this.ctx.createOscillator();d.type=l%2===0?"sine":"triangle",d.frequency.setValueAtTime(o,this.ctx.currentTime),d.detune.setValueAtTime(r[l],this.ctx.currentTime);const m=this.ctx.createGain();m.gain.setValueAtTime(.18/(l+1),this.ctx.currentTime);const u=this.ctx.createOscillator();u.frequency.setValueAtTime(.08+l*.03,this.ctx.currentTime);const h=this.ctx.createGain();h.gain.setValueAtTime(.04,this.ctx.currentTime),u.connect(h),h.connect(m.gain),d.connect(m),m.connect(this.masterGain),d.start(),u.start(),this.activeNodes.push(d,u,m,h)})}buildBinauralBeat(e,t){if(!this.ctx||!this.masterGain)return;const r=this.ctx.createOscillator();r.type="sine",r.frequency.setValueAtTime(e,this.ctx.currentTime);const o=this.ctx.createGain();o.gain.setValueAtTime(.22,this.ctx.currentTime);const l=this.ctx.createOscillator();l.type="sine",l.frequency.setValueAtTime(e+t,this.ctx.currentTime);const d=this.ctx.createGain();d.gain.setValueAtTime(.22,this.ctx.currentTime);const m=this.ctx.createChannelMerger(2);r.connect(o),o.connect(m,0,0),l.connect(d),d.connect(m,0,1);const u=this.ctx.createOscillator();u.type="triangle",u.frequency.setValueAtTime(e/2,this.ctx.currentTime);const h=this.ctx.createGain();h.gain.setValueAtTime(.08,this.ctx.currentTime),u.connect(h),h.connect(this.masterGain),m.connect(this.masterGain),r.start(),l.start(),u.start(),this.activeNodes.push(r,l,u,o,d,h,m)}buildRainStorm(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.sampleRate*4,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),r=t.getChannelData(0);let o=0,l=0,d=0,m=0,u=0,h=0,x=0;for(let M=0;M<e;M++){const b=Math.random()*2-1;o=.99886*o+b*.0555179,l=.99332*l+b*.0750759,d=.969*d+b*.153852,m=.8665*m+b*.3104856,u=.55*u+b*.5329522,h=-.7616*h-b*.016898,r[M]=(o+l+d+m+u+h+x+b*.5362)*.12,x=b*.115926}const v=this.ctx.createBufferSource();v.buffer=t,v.loop=!0;const _=this.ctx.createBiquadFilter();_.type="lowpass",_.frequency.setValueAtTime(1200,this.ctx.currentTime),v.connect(_),_.connect(this.masterGain),v.start(),this.activeNodes.push(v,_)}}const cs=new Bv;class Hv{startKeepAlive(){}stopKeepAlive(){}updateMetadata(e){if(!(typeof window>"u"||!("mediaSession"in navigator)))try{const t=e.artworkUrl?[{src:e.artworkUrl,sizes:"96x96",type:"image/jpeg"},{src:e.artworkUrl,sizes:"128x128",type:"image/jpeg"},{src:e.artworkUrl,sizes:"192x192",type:"image/jpeg"},{src:e.artworkUrl,sizes:"256x256",type:"image/jpeg"},{src:e.artworkUrl,sizes:"512x512",type:"image/jpeg"}]:[];navigator.mediaSession.metadata=new MediaMetadata({title:e.title||"FOR ME Sanctuary",artist:e.artist||"Private Life Ledger",album:e.album||"Sanctuary Audio",artwork:t}),navigator.mediaSession.playbackState="playing",navigator.mediaSession.setActionHandler("play",()=>{e.onPlay(),navigator.mediaSession.playbackState="playing"}),navigator.mediaSession.setActionHandler("pause",()=>{e.onPause(),navigator.mediaSession.playbackState="paused"}),e.onNext?navigator.mediaSession.setActionHandler("nexttrack",e.onNext):navigator.mediaSession.setActionHandler("nexttrack",null),e.onPrev?navigator.mediaSession.setActionHandler("previoustrack",e.onPrev):navigator.mediaSession.setActionHandler("previoustrack",null)}catch(t){console.warn("[MediaSession] Metadata update error:",t)}}setPlaybackState(e){if(!(typeof window>"u"||!("mediaSession"in navigator)))try{navigator.mediaSession.playbackState=e}catch{}}}const Ei=new Hv;function Gv(s){if(!s||typeof s!="string")return null;const e=s.trim();let t,r;const o=e.match(/[?&]list=([a-zA-Z0-9_-]+)/);o&&o[1]&&(r=o[1]);const l=e.match(/[?&]v=([a-zA-Z0-9_-]{11})/);if(l&&l[1]&&(t=l[1]),!t){const m=e.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);m&&m[1]&&(t=m[1])}if(!t){const m=e.match(/youtube\.com\/(?:live|embed|v|shorts)\/([a-zA-Z0-9_-]{11})/);m&&m[1]&&(t=m[1])}if(!t&&!r&&/^[a-zA-Z0-9_-]{11}$/.test(e)&&(t=e),!t&&!r&&/^(?:PL|RD|UU|FL|OLAK5uy_)[a-zA-Z0-9_-]+$/.test(e)&&(r=e),!t&&!r)return null;let d="video";return r&&t?d="video_in_playlist":r&&(d="playlist"),{type:d,videoId:t,playlistId:r,cleanUrl:e}}function Vv(s){return s?`https://img.youtube.com/vi/${s}/hqdefault.jpg`:"https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=600&auto=format&fit=crop"}const ql=[{id:"lofi-girl-main",title:"Lofi Girl — Beats to Relax / Study to",type:"video",videoId:"jfKfPfyJRdk",url:"https://www.youtube.com/watch?v=jfKfPfyJRdk",channel:"Lofi Girl",thumbnailUrl:"https://img.youtube.com/vi/jfKfPfyJRdk/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"synthwave-chilledcow",title:"Synthwave Radio — Chill Beats to Code & Chill",type:"video",videoId:"4xDzrJKXOOY",url:"https://www.youtube.com/watch?v=4xDzrJKXOOY",channel:"Lofi Girl / Synthwave Boy",thumbnailUrl:"https://img.youtube.com/vi/4xDzrJKXOOY/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"deep-focus-ambient",title:"Deep Focus Ambient — Flow State Alpha Waves",type:"video",videoId:"lTRiuFIWV54",url:"https://www.youtube.com/watch?v=lTRiuFIWV54",channel:"Greenred Productions",thumbnailUrl:"https://img.youtube.com/vi/lTRiuFIWV54/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"peaceful-piano-solitude",title:"Peaceful Piano & Soft Rain — Gentle Solitude",type:"video",videoId:"1WUEk0R79_Q",url:"https://www.youtube.com/watch?v=1WUEk0R79_Q",channel:"Quiet Quest",thumbnailUrl:"https://img.youtube.com/vi/1WUEk0R79_Q/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"classical-focus-mozart",title:"Classical Focus — Mozart, Beethoven, Bach",type:"video",videoId:"WPni755-Krg",url:"https://www.youtube.com/watch?v=WPni755-Krg",channel:"HALIDONMUSIC",thumbnailUrl:"https://img.youtube.com/vi/WPni755-Krg/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"cozy-coffee-shop-lofi",title:"Cozy Coffee Shop Lofi — Rainy Night Ambience",type:"video",videoId:"-5KAN9_CzSA",url:"https://www.youtube.com/watch?v=-5KAN9_CzSA",channel:"Calmed by Nature",thumbnailUrl:"https://img.youtube.com/vi/-5KAN9_CzSA/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()}],o0=we.createContext(void 0),Os={palette:"cosmic-royal",speed:"balanced",amplitude:"majestic",waveGeometry:"dunes",waveLayerDensity:"deep",celestialBody:"crescent-moon",showNebulaDust:!0,showConstellations:!0,showComet:!0,shootingStarMode:"occasional",showStars:!0,showCrossStars:!1,showOrbitalTrack:!1,showMeridian:!1,clockFontStyle:"tabular",clockSize:"standard",clockFormat:"12h",showSeconds:!0,showDate:!0,showGreeting:!0,clockHalo:"pulsar"},Va={name:"Azan",motto:"Remember, you are here for you.",defaultFocusTopic:"Engineering",defaultFocusMode:"Deep Work"},vl=[{id:"r1",title:"Morning Protocol",timeRange:"06:00 – 09:00",description:"Hydration, natural sunlight, 30-min movement, deep work session.",iconType:"morning"},{id:"r2",title:"Core Deep Work",timeRange:"09:00 – 17:00",description:"High-leverage engineering problem solving, core building goals, focused sprints.",iconType:"afternoon"},{id:"r3",title:"Evening Wind-Down",timeRange:"17:00 – 22:30",description:"Reflection, physical cooldown, reading, digital sunset and deep recovery.",iconType:"evening"}],Wv=({children:s})=>{const[e,t]=we.useState(()=>{try{const ce=localStorage.getItem("for_me_profile");if(ce){const Be=JSON.parse(ce);return Be.name==="Viren"?{...Va,name:"Azan"}:{...Va,...Be}}return Va}catch{return Va}}),r=ce=>{t(Be=>{const Ae={...Be,...ce};return localStorage.setItem("for_me_profile",JSON.stringify(Ae)),Ae})};we.useEffect(()=>{localStorage.setItem("for_me_profile",JSON.stringify(e))},[e]);const[o,l]=we.useState(()=>{try{return localStorage.getItem("for_me_app_theme")==="light"?"light":"dark"}catch{return"dark"}}),d=()=>{l(ce=>ce==="light"?"dark":"light")};we.useEffect(()=>{localStorage.setItem("for_me_app_theme",o),o==="light"?(document.documentElement.classList.add("theme-light"),document.documentElement.classList.remove("theme-dark")):(document.documentElement.classList.add("theme-dark"),document.documentElement.classList.remove("theme-light"))},[o]);const[m,u]=we.useState(()=>{try{const ce=localStorage.getItem("for_me_is_hud_hidden");return ce?JSON.parse(ce):!1}catch{return!1}}),h=()=>u(ce=>!ce);we.useEffect(()=>{localStorage.setItem("for_me_is_hud_hidden",JSON.stringify(m))},[m]);const[x,v]=we.useState(()=>{try{return localStorage.getItem("for_me_wallpaper_theme")||"cosmic-cliffs"}catch{return"cosmic-cliffs"}});we.useEffect(()=>{localStorage.setItem("for_me_wallpaper_theme",x)},[x]);const[_,M]=we.useState(()=>{try{const ce=localStorage.getItem("for_me_wallpaper_settings_v3")||localStorage.getItem("for_me_wallpaper_settings_v2");return ce?{...Os,...JSON.parse(ce)}:Os}catch{return Os}}),b=ce=>{M(Be=>{const Ae={...Be,...ce};return localStorage.setItem("for_me_wallpaper_settings_v3",JSON.stringify(Ae)),Ae})},C=()=>{M(Os),localStorage.setItem("for_me_wallpaper_settings_v3",JSON.stringify(Os))},[y,S]=we.useState(()=>{try{const ce=localStorage.getItem("for_me_tasks");return ce?JSON.parse(ce):[{id:"1",text:"Core engineering deep focus sprint",completed:!1},{id:"2",text:"System architecture review & refinement",completed:!1},{id:"3",text:"Physical movement & hydration (8 glasses)",completed:!1}]}catch{return[{id:"1",text:"Core engineering deep focus sprint",completed:!1}]}});we.useEffect(()=>{localStorage.setItem("for_me_tasks",JSON.stringify(y))},[y]);const R=ce=>{S(Be=>Be.map(Ae=>Ae.id===ce?{...Ae,completed:!Ae.completed,completedAt:Ae.completed?void 0:new Date().toISOString()}:Ae))},F=ce=>{if(!ce.trim())return;const Be={id:`task_${Date.now()}`,text:ce.trim(),completed:!1};S(Ae=>[Be,...Ae])},P=ce=>{S(Be=>Be.filter(Ae=>Ae.id!==ce))},[z,D]=we.useState(()=>{try{const ce=localStorage.getItem("for_me_habits");return ce?JSON.parse(ce):[{id:"h1",name:"Deep Focus & Engineering Block",completed:!1,streak:3},{id:"h2",name:"Hydration Target (8 Glasses)",completed:!1,streak:5},{id:"h3",name:"Mindful Walk & Movement",completed:!1,streak:2}]}catch{return[{id:"h1",name:"Deep Focus & Engineering Block",completed:!1,streak:1}]}});we.useEffect(()=>{localStorage.setItem("for_me_habits",JSON.stringify(z))},[z]);const w=ce=>{D(Be=>Be.map(Ae=>{if(Ae.id===ce){const mt=!Ae.completed;return{...Ae,completed:mt,streak:mt?Ae.streak+1:Math.max(0,Ae.streak-1)}}return Ae}))},N=ce=>{if(!ce.trim())return;const Be={id:`habit_${Date.now()}`,name:ce.trim(),completed:!1,streak:0};D(Ae=>[...Ae,Be])},ee=ce=>{D(Be=>Be.filter(Ae=>Ae.id!==ce))},[X,G]=we.useState(()=>{try{const ce=localStorage.getItem("for_me_routines");return ce?JSON.parse(ce):vl}catch{return vl}});we.useEffect(()=>{localStorage.setItem("for_me_routines",JSON.stringify(X))},[X]);const W=ce=>{const Be={id:`routine_${Date.now()}`,...ce};G(Ae=>[...Ae,Be])},V=(ce,Be)=>{G(Ae=>Ae.map(mt=>mt.id===ce?{...mt,...Be}:mt))},H=ce=>{G(Be=>Be.filter(Ae=>Ae.id!==ce))},O=()=>{G(vl)},[re,K]=we.useState(0),[j,$]=we.useState(!1),[Y,L]=we.useState(e.defaultFocusTopic||"Engineering"),[ne,be]=we.useState(()=>{try{const ce=localStorage.getItem("for_me_study_sessions");return ce?JSON.parse(ce):[]}catch{return[]}});we.useEffect(()=>{let ce=null;return j?ce=setInterval(()=>{K(Be=>Be+1)},1e3):!j&&re!==0&&clearInterval(ce),()=>clearInterval(ce)},[j,re]);const U=()=>$(ce=>!ce),_e=()=>{if(re>30){const ce={id:`ses_${Date.now()}`,subject:Y,durationSeconds:re,timestamp:new Date().toISOString()};be(Be=>{const Ae=[ce,...Be];return localStorage.setItem("for_me_study_sessions",JSON.stringify(Ae)),Ae})}$(!1),K(0)},[Me,De]=we.useState(()=>{try{const ce=localStorage.getItem("for_me_hydration");return ce?JSON.parse(ce):62.5}catch{return 62.5}});we.useEffect(()=>{localStorage.setItem("for_me_hydration",JSON.stringify(Me))},[Me]);const[Se,Fe]=we.useState(()=>{try{const ce=localStorage.getItem("for_me_sleep_hours");return ce?JSON.parse(ce):8}catch{return 8}}),ut=ce=>{Fe(ce),localStorage.setItem("for_me_sleep_hours",JSON.stringify(ce))},[je,Te]=we.useState(()=>{try{const ce=localStorage.getItem("for_me_daily_rating");return ce?JSON.parse(ce):8}catch{return 8}});we.useEffect(()=>{localStorage.setItem("for_me_daily_rating",JSON.stringify(je))},[je]);const ke=()=>{const ce=new Date,Be=ce.getFullYear(),Ae=String(ce.getMonth()+1).padStart(2,"0"),mt=String(ce.getDate()).padStart(2,"0");return`${Be}-${Ae}-${mt}`},[Xe,St]=we.useState(()=>{try{return localStorage.getItem("for_me_last_active_date")||ke()}catch{return ke()}}),Mt=ce=>{if(S(Be=>{const Ae=Be.map(mt=>({...mt,completed:!1,completedAt:void 0}));return localStorage.setItem("for_me_tasks",JSON.stringify(Ae)),Ae}),D(Be=>{const Ae=Be.map(mt=>({...mt,completed:!1,streak:mt.completed?mt.streak:0}));return localStorage.setItem("for_me_habits",JSON.stringify(Ae)),Ae}),De(0),localStorage.setItem("for_me_hydration",JSON.stringify(0)),re>30){const Be={id:`ses_${Date.now()}`,subject:Y,durationSeconds:re,timestamp:new Date().toISOString()};be(Ae=>{const mt=[Be,...Ae];return localStorage.setItem("for_me_study_sessions",JSON.stringify(mt)),mt})}$(!1),K(0),St(ce),localStorage.setItem("for_me_last_active_date",ce)};we.useEffect(()=>{const ce=()=>{const Ae=ke(),mt=localStorage.getItem("for_me_last_active_date");mt?mt!==Ae&&Mt(Ae):(localStorage.setItem("for_me_last_active_date",Ae),St(Ae))};ce();const Be=setInterval(ce,1e4);return window.addEventListener("focus",ce),()=>{clearInterval(Be),window.removeEventListener("focus",ce)}},[re,Y]);const Dt=()=>{const ce=ke();Mt(ce)},It=()=>{["for_me_profile","for_me_tasks","for_me_habits","for_me_routines","for_me_hydration","for_me_sleep_hours","for_me_daily_rating","for_me_study_sessions","for_me_wallpaper_settings_v3","for_me_wallpaper_theme","for_me_app_theme","for_me_is_hud_hidden","for_me_last_active_date","for_me_active_yt","for_me_saved_yt_library"].forEach(Be=>localStorage.removeItem(Be)),t(Va),S([{id:"1",text:"Core engineering deep focus sprint",completed:!1},{id:"2",text:"System architecture review & refinement",completed:!1},{id:"3",text:"Physical movement & hydration (8 glasses)",completed:!1}]),D([{id:"h1",name:"Deep Focus & Engineering Block",completed:!1,streak:0},{id:"h2",name:"Hydration Target (8 Glasses)",completed:!1,streak:0},{id:"h3",name:"Mindful Walk & Movement",completed:!1,streak:0}]),G(vl),De(0),Fe(8),Te(8),K(0),$(!1),be([]),M(Os),St(ke())},[nn,Nt]=we.useState("youtube"),[Wt,kt]=we.useState(!1),[rn,J]=we.useState("brown-noise"),[Yt,Pt]=we.useState(.65),[bt,Ie]=we.useState(!1),[Et,qe]=we.useState(!1),[rt,I]=we.useState(!1),[E,ae]=we.useState(()=>{try{const ce=localStorage.getItem("for_me_active_yt");return ce?JSON.parse(ce):ql[0]}catch{return ql[0]}}),[Ce,ve]=we.useState(70),[Ue,xe]=we.useState(!1),[ie,se]=we.useState(!1),[ye,k]=we.useState(()=>{try{const ce=localStorage.getItem("for_me_saved_yt_library");return ce?JSON.parse(ce):[]}catch{return[]}});we.useEffect(()=>{E&&localStorage.setItem("for_me_active_yt",JSON.stringify(E))},[E]),we.useEffect(()=>{localStorage.setItem("for_me_saved_yt_library",JSON.stringify(ye))},[ye]);const me=ce=>{if(Et){qe(!1);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("pauseVideo")}catch{}}Nt("ambient");const Be=ce||rn;J(Be),cs.play(Be),kt(!0);const Ae=Qs.find(mt=>mt.id===Be);Ei.startKeepAlive(),Ei.updateMetadata({title:(Ae==null?void 0:Ae.title)||"Procedural Soundscape",artist:"FOR ME Sanctuary (Offline)",album:"Sound Sanctuary",onPlay:()=>me(Be),onPause:de})},de=()=>{cs.stop(),kt(!1),Ei.stopKeepAlive(),Ei.setPlaybackState("paused")},Ne=ce=>{Pt(ce),cs.setVolume(ce)},Ee=()=>{const ce=cs.toggleMute();Ie(ce)},Pe=ce=>{cs.stop(),kt(!1),ae(ce),Nt("youtube"),qe(!0),xe(!1);try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}},Ze=()=>{if(Et){qe(!1);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("pauseVideo")}catch{}}else{cs.stop(),kt(!1),Nt("youtube"),qe(!0),xe(!1);try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute(),typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("playVideo")}catch{}}},ct=()=>{qe(!1);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("stopVideo")}catch{}},Q=()=>{try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("nextVideo"),qe(!0)}catch{}},Ve=()=>{try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("previousVideo"),qe(!0)}catch{}},$e=ce=>{ve(ce);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("setVolume",[ce])}catch{}},Oe=()=>{xe(ce=>{const Be=!ce;try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand(Be?"mute":"unMute")}catch{}return Be})},xt=(ce,Be)=>{var mn;const Ae=Gv(ce);if(!Ae)return{success:!1,error:"Could not recognize a valid YouTube video or playlist link. Please check the URL format and try again."};const mt=(Be==null?void 0:Be.trim())||(Ae.type==="playlist"?`Custom Playlist (${(mn=Ae.playlistId)==null?void 0:mn.slice(0,8)}...)`:`YouTube Audio (${Ae.videoId||"Stream"})`),qt={id:`yt-${Date.now()}-${Math.random().toString(36).substr(2,5)}`,title:mt,type:Ae.type,videoId:Ae.videoId,playlistId:Ae.playlistId,url:Ae.cleanUrl,thumbnailUrl:Vv(Ae.videoId),channel:Ae.type==="playlist"?"Custom YouTube Playlist":"Custom YouTube Stream",createdAt:new Date().toISOString()};return k(Mn=>[qt,...Mn]),Pe(qt),{success:!0,item:qt}},Rt=ce=>{k(Be=>Be.filter(Ae=>Ae.id!==ce))};return p.jsx(o0.Provider,{value:{profile:e,setProfile:t,updateProfile:r,appTheme:o,setAppTheme:l,toggleAppTheme:d,isHUDHidden:m,setIsHUDHidden:u,toggleHUDHidden:h,tasks:y,toggleTask:R,addTask:F,deleteTask:P,wallpaperTheme:x,setWallpaperTheme:v,wallpaperSettings:_,updateWallpaperSettings:b,resetWallpaperSettings:C,habits:z,toggleHabit:w,addHabit:N,deleteHabit:ee,routines:X,addRoutineBlock:W,updateRoutineBlock:V,deleteRoutineBlock:H,resetRoutines:O,studySeconds:re,isStudyActive:j,studySubject:Y,setStudySubject:L,toggleStudyTimer:U,resetStudyTimer:_e,studySessions:ne,hydration:Me,setHydration:De,sleepHours:Se,setSleep:ut,dailyRating:je,setDailyRating:Te,lastActiveDate:Xe,resetDayProgress:Dt,factoryReset:It,audioSource:nn,setAudioSource:Nt,isAudioPlaying:Wt,activeSoundscapeId:rn,audioVolume:Yt,isAudioMuted:bt,playSoundscape:me,stopSoundscape:de,setAudioVolume:Ne,toggleAudioMute:Ee,isYouTubePlaying:Et,setYouTubeIsPlaying:qe,isYouTubePlayerReady:rt,setYouTubePlayerReady:I,activeYouTubeItem:E,youtubeVolume:Ce,isYouTubeMuted:Ue,savedYouTubeItems:ye,showYouTubePreview:ie,setShowYouTubePreview:se,playYouTubeItem:Pe,toggleYouTubePlay:Ze,stopYouTube:ct,nextYouTubeTrack:Q,prevYouTubeTrack:Ve,setYouTubeVolume:$e,toggleYouTubeMute:Oe,addYouTubeToLibrary:xt,removeYouTubeFromLibrary:Rt},children:s})},Vr=()=>{const s=we.useContext(o0);if(!s)throw new Error("useData must be used within a DataProvider");return s},jv=()=>{const s=we.useRef(null),{isHUDHidden:e,wallpaperSettings:t,appTheme:r}=Vr(),o=we.useRef(e),l=we.useRef(t),d=we.useRef(r);return we.useEffect(()=>{o.current=e},[e]),we.useEffect(()=>{l.current=t},[t]),we.useEffect(()=>{d.current=r},[r]),we.useEffect(()=>{const m=s.current;if(!m)return;const u=m.getContext("2d");if(!u)return;let h,x=0,v=0;const _=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let M=[];const b=()=>{M=[];const V=x<768?85:160;for(let H=0;H<V;H++){const O=Math.random()>.85?2:Math.random()>.45?1:0,re=Math.random()*.65+(O===2?.85:.35);M.push({x:Math.random()*x,y:Math.random()*v,z:O,radius:re,alpha:Math.random()*.55+.25,alphaSpeed:Math.random()*.015+.005,alphaPhase:Math.random()*Math.PI*2,vx:(Math.random()-.5)*.06,vy:(Math.random()-.5)*.06})}},C=()=>{if(!m)return;const V=Math.min(window.devicePixelRatio||1,2);x=window.innerWidth,v=window.innerHeight,m.width=x*V,m.height=v*V,m.style.width=`${x}px`,m.style.height=`${v}px`,u.scale(V,V),b()};C(),window.addEventListener("resize",C,{passive:!0});let y=x/2,S=v/2,R=x/2,F=v/2;const P=V=>{y=V.clientX,S=V.clientY};window.addEventListener("mousemove",P,{passive:!0});const z=(V,H,O,re)=>{u.save(),u.translate(V,H);const K=d.current==="light",j=Math.max(.15,Math.min(.95,re));u.globalAlpha=j;const $=u.createRadialGradient(0,0,0,0,0,O*.9);K?($.addColorStop(0,"rgba(245, 158, 11, 0.75)"),$.addColorStop(.3,"rgba(217, 119, 6, 0.28)"),$.addColorStop(.7,"rgba(180, 83, 9, 0.06)"),$.addColorStop(1,"rgba(255, 255, 255, 0)")):($.addColorStop(0,"rgba(255, 255, 255, 0.85)"),$.addColorStop(.3,"rgba(216, 180, 254, 0.35)"),$.addColorStop(.7,"rgba(147, 51, 234, 0.08)"),$.addColorStop(1,"rgba(0, 0, 0, 0)")),u.fillStyle=$,u.beginPath(),u.arc(0,0,O*.9,0,Math.PI*2),u.fill();const Y=u.createLinearGradient(-O,0,O,0);K?(Y.addColorStop(0,"rgba(245, 158, 11, 0)"),Y.addColorStop(.35,"rgba(217, 119, 6, 0.45)"),Y.addColorStop(.5,"#b45309"),Y.addColorStop(.65,"rgba(217, 119, 6, 0.45)"),Y.addColorStop(1,"rgba(245, 158, 11, 0)")):(Y.addColorStop(0,"rgba(255, 255, 255, 0)"),Y.addColorStop(.35,"rgba(233, 213, 255, 0.55)"),Y.addColorStop(.5,"#ffffff"),Y.addColorStop(.65,"rgba(233, 213, 255, 0.55)"),Y.addColorStop(1,"rgba(255, 255, 255, 0)")),u.strokeStyle=Y,u.lineWidth=.75,u.beginPath(),u.moveTo(-O,0),u.lineTo(O,0),u.stroke();const L=u.createLinearGradient(0,-O,0,O);K?(L.addColorStop(0,"rgba(245, 158, 11, 0)"),L.addColorStop(.35,"rgba(217, 119, 6, 0.45)"),L.addColorStop(.5,"#b45309"),L.addColorStop(.65,"rgba(217, 119, 6, 0.45)"),L.addColorStop(1,"rgba(245, 158, 11, 0)")):(L.addColorStop(0,"rgba(255, 255, 255, 0)"),L.addColorStop(.35,"rgba(233, 213, 255, 0.55)"),L.addColorStop(.5,"#ffffff"),L.addColorStop(.65,"rgba(233, 213, 255, 0.55)"),L.addColorStop(1,"rgba(255, 255, 255, 0)")),u.strokeStyle=L,u.lineWidth=.75,u.beginPath(),u.moveTo(0,-O),u.lineTo(0,O),u.stroke();const ne=O*.38;u.strokeStyle=K?"rgba(180, 83, 9, 0.35)":"rgba(255, 255, 255, 0.4)",u.lineWidth=.5,u.beginPath(),u.moveTo(-ne,-ne),u.lineTo(ne,ne),u.moveTo(-ne,ne),u.lineTo(ne,-ne),u.stroke(),u.fillStyle=K?"#d97706":"#ffffff",u.beginPath(),u.arc(0,0,1.2,0,Math.PI*2),u.fill(),u.restore()},D=[{x:-100,y:-100,length:100,speed:18,angle:Math.PI/4+.05,alpha:0,active:!1},{x:-100,y:-100,length:80,speed:16,angle:Math.PI/4-.08,alpha:0,active:!1},{x:-100,y:-100,length:110,speed:20,angle:Math.PI/4+.12,alpha:0,active:!1}];let w=120;const N=V=>{if(V==="off")return;w--;const H=V==="meteor-shower"?40:180;if(w<=0&&!_){w=Math.random()*(V==="meteor-shower"?60:200)+H;const O=D.find(re=>!re.active);O&&(O.active=!0,O.x=Math.random()*(x*.7),O.y=Math.random()*(v*.3),O.alpha=.95,O.length=Math.random()*50+70)}for(const O of D)if(O.active)if(O.x+=Math.cos(O.angle)*O.speed,O.y+=Math.sin(O.angle)*O.speed,O.alpha-=V==="meteor-shower"?.022:.016,O.alpha<=0||O.x>x+100||O.y>v+100)O.active=!1;else{u.save();const re=O.x-Math.cos(O.angle)*O.length,K=O.y-Math.sin(O.angle)*O.length,j=u.createLinearGradient(re,K,O.x,O.y);j.addColorStop(0,"rgba(255, 255, 255, 0)"),j.addColorStop(.7,"rgba(216, 180, 254, "+O.alpha*.6+")"),j.addColorStop(1,"#ffffff"),u.strokeStyle=j,u.lineWidth=1.3,u.beginPath(),u.moveTo(re,K),u.lineTo(O.x,O.y),u.stroke(),u.fillStyle="#ffffff",u.beginPath(),u.arc(O.x,O.y,1.8,0,Math.PI*2),u.fill(),u.restore()}};let ee=0,X=!0;const G=()=>{X=!document.hidden};document.addEventListener("visibilitychange",G);const W=()=>{if(!X){h=requestAnimationFrame(W);return}const V=l.current,H=o.current;let O=1;V.speed==="frozen"?O=0:V.speed==="calm"?O=.45:V.speed==="dynamic"?O=1.45:O=.85,H&&O>0&&(O*=1.25),ee+=_?.002:.014*O,u.clearRect(0,0,x,v),R+=(y-R)*.04,F+=(S-F)*.04;const re=(R-x/2)/(x/2),K=(F-v/2)/(v/2);let j=1;V.amplitude==="subtle"?j=.55:V.amplitude==="dramatic"?j=1.6:j=1,H&&(j*=1.2);const $=V.palette,Y=d.current==="light";let L="#030208",ne="#0b061c",be="#170a32",U="rgba(168, 85, 247, 0.22)",_e="rgba(99, 102, 241, 0.16)",Me="rgba(168, 85, 247, 0.30)",De="rgba(192, 132, 252, 0.40)",Se=["#05030e","#090518","#0e0824"],Fe="rgba(168, 85, 247, 0.25)",ut=["#0a051d","#110930","#190c42"],je="rgba(168, 85, 247, 0.35)",Te=["#11082e","#1c0c4b","#261063"],ke="rgba(192, 132, 252, 0.45)",Xe=["#180b3d","#260f64","#341584"],St="rgba(216, 180, 254, 0.55)",Mt=["#0c0620","#140833","#1e0c4a","#281061"],Dt="rgba(233, 213, 255, 0.65)";Y?$==="celestial-cyan"?(L="#eef8ff",ne="#d7effe",be="#b5e3fd",U="rgba(14, 165, 233, 0.16)",_e="rgba(6, 182, 212, 0.12)",Me="rgba(2, 132, 199, 0.12)",De="rgba(3, 105, 161, 0.20)",Se=["#93c5fd","#bfdbfe","#dbeafe"],Fe="rgba(29, 78, 216, 0.35)",ut=["#60a5fa","#93c5fd","#bfdbfe"],je="rgba(2, 132, 199, 0.42)",Te=["#38bdf8","#7dd3fc","#bae6fd"],ke="rgba(14, 165, 233, 0.50)",Xe=["#bae6fd","#d7f0fd","#f0f9ff"],St="rgba(56, 189, 248, 0.58)",Mt=["#f0f9ff","#f8fcff","#ffffff","#ffffff"],Dt="rgba(2, 132, 199, 0.68)"):$==="supernova-sunset"?(L="#fff1f2",ne="#fecdd3",be="#fda4af",U="rgba(244, 63, 94, 0.16)",_e="rgba(249, 115, 22, 0.12)",Me="rgba(225, 29, 72, 0.12)",De="rgba(190, 18, 60, 0.20)",Se=["#f43f5e","#fb7185","#fda4af"],Fe="rgba(159, 18, 57, 0.35)",ut=["#fb7185","#fda4af","#fecdd3"],je="rgba(225, 29, 72, 0.42)",Te=["#fda4af","#fecdd3","#ffe4e6"],ke="rgba(244, 63, 94, 0.50)",Xe=["#fecdd3","#ffe4e6","#fff1f2"],St="rgba(251, 113, 133, 0.58)",Mt=["#fff5f6","#fffafb","#ffffff","#ffffff"],Dt="rgba(225, 29, 72, 0.68)"):$==="nocturne-silver"?(L="#fafafa",ne="#f4f4f6",be="#e4e4e7",U="rgba(113, 113, 122, 0.14)",_e="rgba(82, 82, 91, 0.10)",Me="rgba(82, 82, 91, 0.12)",De="rgba(63, 63, 70, 0.20)",Se=["#a1a1aa","#d4d4d8","#e4e4e7"],Fe="rgba(63, 63, 70, 0.35)",ut=["#d4d4d8","#e4e4e7","#f1f1f3"],je="rgba(82, 82, 91, 0.42)",Te=["#e4e4e7","#f1f1f3","#f4f4f6"],ke="rgba(113, 113, 122, 0.50)",Xe=["#f1f1f3","#f6f6f8","#fafafa"],St="rgba(161, 161, 170, 0.58)",Mt=["#f6f6f8","#fcfcfc","#ffffff","#ffffff"],Dt="rgba(82, 82, 91, 0.68)"):(L="#fffbf3",ne="#feeccd",be="#fad4a0",U="rgba(245, 158, 11, 0.18)",_e="rgba(217, 119, 6, 0.12)",Me="rgba(180, 83, 9, 0.12)",De="rgba(146, 64, 14, 0.20)",Se=["#d4a373","#bc8a5f","#a47148"],Fe="rgba(146, 64, 14, 0.38)",ut=["#e6ba8f","#d4a373","#bc8a5f"],je="rgba(180, 83, 9, 0.45)",Te=["#f3d5b5","#e6ba8f","#d4a373"],ke="rgba(217, 119, 6, 0.52)",Xe=["#faedcd","#f3d5b5","#fefae0"],St="rgba(245, 158, 11, 0.60)",Mt=["#fefae0","#fffdfa","#ffffff","#ffffff"],Dt="rgba(217, 119, 6, 0.70)"):$==="celestial-cyan"?(L="#020712",ne="#041322",be="#071f35",U="rgba(14, 165, 233, 0.18)",_e="rgba(6, 182, 212, 0.12)",Me="rgba(56, 189, 248, 0.12)",De="rgba(103, 232, 249, 0.20)",Se=["#030914","#051221","#071c31"],Fe="rgba(56, 189, 248, 0.22)",ut=["#040f1f","#071b33","#0a2646"],je="rgba(56, 189, 248, 0.32)",Te=["#06152a","#0a2544","#0f345c"],ke="rgba(56, 189, 248, 0.42)",Xe=["#081b34","#0d2e54","#134273"],St="rgba(125, 211, 252, 0.52)",Mt=["#051224","#091c36","#0e294d","#133866"],Dt="rgba(186, 230, 253, 0.65)"):$==="supernova-sunset"?(L="#0a0208",ne="#160412",be="#24061c",U="rgba(244, 63, 94, 0.18)",_e="rgba(249, 115, 22, 0.12)",Me="rgba(251, 113, 133, 0.12)",De="rgba(253, 186, 116, 0.20)",Se=["#0d020a","#170412","#22061b"],Fe="rgba(244, 63, 94, 0.22)",ut=["#150311","#24061d","#340929"],je="rgba(244, 63, 94, 0.32)",Te=["#1e0518","#320827","#470c38"],ke="rgba(251, 113, 133, 0.42)",Xe=["#280620","#420b33","#5c0f47"],St="rgba(251, 146, 60, 0.52)",Mt=["#180314","#270620","#3b0930","#500d41"],Dt="rgba(254, 215, 170, 0.65)"):$==="nocturne-silver"&&(L="#030306",ne="#08080d",be="#101017",U="rgba(161, 161, 170, 0.16)",_e="rgba(113, 113, 122, 0.10)",Me="rgba(212, 212, 216, 0.12)",De="rgba(228, 228, 231, 0.18)",Se=["#060609","#0c0c12","#13131c"],Fe="rgba(161, 161, 170, 0.20)",ut=["#0a0a0f","#12121b","#1a1a27"],je="rgba(161, 161, 170, 0.30)",Te=["#0e0e16","#181824","#232333"],ke="rgba(212, 212, 216, 0.40)",Xe=["#13131e","#1f1f30","#2d2d42"],St="rgba(228, 228, 231, 0.50)",Mt=["#0c0c13","#14141f","#1d1d2b","#272738"],Dt="rgba(244, 244, 245, 0.65)");const It=u.createLinearGradient(0,0,0,v);It.addColorStop(0,L),It.addColorStop(.45,ne),It.addColorStop(1,be),u.fillStyle=It,u.fillRect(0,0,x,v);const nn=u.createRadialGradient(x*.8,v*.18,0,x*.8,v*.18,x*.5);nn.addColorStop(0,U),nn.addColorStop(.7,"rgba(0, 0, 0, 0.04)"),nn.addColorStop(1,"rgba(0, 0, 0, 0)"),u.fillStyle=nn,u.fillRect(0,0,x,v);const Nt=u.createRadialGradient(x*.18,v*.82,0,x*.18,v*.82,x*.55);if(Nt.addColorStop(0,_e),Nt.addColorStop(.65,"rgba(0, 0, 0, 0.03)"),Nt.addColorStop(1,"rgba(0, 0, 0, 0)"),u.fillStyle=Nt,u.fillRect(0,0,x,v),V.showNebulaDust){u.save();const xe=u.createRadialGradient(x*.35,v*.2,0,x*.35,v*.2,x*.38);xe.addColorStop(0,U),xe.addColorStop(.5,"rgba(126, 34, 206, 0.04)"),xe.addColorStop(1,"rgba(0, 0, 0, 0)"),u.fillStyle=xe,u.fillRect(0,0,x,v);const ie=u.createRadialGradient(x*.7,v*.14,0,x*.7,v*.14,x*.32);ie.addColorStop(0,_e),ie.addColorStop(.6,"rgba(14, 116, 144, 0.03)"),ie.addColorStop(1,"rgba(0, 0, 0, 0)"),u.fillStyle=ie,u.fillRect(0,0,x,v),u.restore()}if(V.showConstellations){u.save(),u.strokeStyle=Y?"rgba(180, 130, 80, 0.28)":"rgba(255, 255, 255, 0.14)",u.lineWidth=.75;const xe=[{x:x*.68,y:v*.1},{x:x*.72,y:v*.08},{x:x*.76,y:v*.09},{x:x*.78,y:v*.13},{x:x*.83,y:v*.14},{x:x*.84,y:v*.1},{x:x*.78,y:v*.09}];u.beginPath(),u.moveTo(xe[0].x,xe[0].y);for(let se=1;se<xe.length;se++)u.lineTo(xe[se].x,xe[se].y);u.stroke(),u.fillStyle=Y?"#b45309":"#ffffff";for(const se of xe)u.beginPath(),u.arc(se.x,se.y,1.4,0,Math.PI*2),u.fill();const ie=[{x:x*.28,y:v*.08},{x:x*.31,y:v*.12},{x:x*.34,y:v*.09},{x:x*.37,y:v*.13},{x:x*.4,y:v*.1}];u.beginPath(),u.moveTo(ie[0].x,ie[0].y);for(let se=1;se<ie.length;se++)u.lineTo(ie[se].x,ie[se].y);u.stroke();for(const se of ie)u.beginPath(),u.arc(se.x,se.y,1.3,0,Math.PI*2),u.fill();u.restore()}if(V.showComet){u.save();const xe=ee*.04%1,ie=x*.75,se=v*.04,ye=x*.25,k=v*.22,me=ie+(ye-ie)*xe,de=se+(k-se)*xe,Ne=Math.atan2(k-se,ye-ie)+Math.PI,Ee=140,Pe=me+Math.cos(Ne)*Ee,Ze=de+Math.sin(Ne)*Ee,ct=u.createLinearGradient(Pe,Ze,me,de);ct.addColorStop(0,"rgba(56, 189, 248, 0)"),ct.addColorStop(.5,"rgba(168, 85, 247, 0.25)"),ct.addColorStop(.85,"rgba(233, 213, 255, 0.65)"),ct.addColorStop(1,"#ffffff"),u.strokeStyle=ct,u.lineWidth=1.8,u.beginPath(),u.moveTo(Pe,Ze),u.lineTo(me,de),u.stroke(),u.fillStyle="#ffffff",u.shadowColor="#67e8f9",u.shadowBlur=8,u.beginPath(),u.arc(me,de,2.2,0,Math.PI*2),u.fill(),u.restore()}if(V.showMeridian){u.save();const xe=x*.91;u.strokeStyle=Me,u.lineWidth=1,u.beginPath(),u.moveTo(xe,0),u.lineTo(xe,v),u.stroke(),u.strokeStyle="rgba(255, 255, 255, 0.18)",u.lineWidth=1;for(let ie=50;ie<v;ie+=70)u.beginPath(),u.moveTo(xe-4,ie),u.lineTo(xe+4,ie),u.stroke();u.restore()}if(V.showOrbitalTrack){u.save();const xe=x*.78,ie=v*.18,se=Math.min(x,v)*.45,ye=Math.min(x,v)*.22;u.shadowColor=De,u.shadowBlur=6,u.strokeStyle=De,u.lineWidth=1.2,u.beginPath(),u.ellipse(xe,ie,se,ye,-.22,Math.PI*.1,Math.PI*1.3),u.stroke(),u.setLineDash([3,8]),u.strokeStyle="rgba(255, 255, 255, 0.22)",u.lineWidth=.8,u.beginPath(),u.ellipse(xe,ie,se*1.08,ye*1.08,-.22,Math.PI*.05,Math.PI*1.25),u.stroke(),u.setLineDash([]),u.restore()}if(V.showStars)for(let xe=0;xe<M.length;xe++){const ie=M[xe];!_&&O>0&&(ie.x+=ie.vx*O,ie.y+=ie.vy*O,ie.alphaPhase+=ie.alphaSpeed*O,ie.x<0&&(ie.x=x),ie.x>x&&(ie.x=0),ie.y<0&&(ie.y=v),ie.y>v&&(ie.y=0));const se=(ie.z+1)*.35,ye=ie.x+re*12*se,k=ie.y+K*12*se,me=Math.max(.12,Math.min(.85,ie.alpha+Math.sin(ie.alphaPhase)*.22));u.beginPath(),u.arc(ye,k,ie.radius,0,Math.PI*2),u.fillStyle=Y?`rgba(180, 130, 80, ${(me*.65).toFixed(3)})`:`rgba(255, 255, 255, ${me.toFixed(3)})`,u.fill()}const Wt=V.waveGeometry,kt=V.waveLayerDensity,rn=(xe,ie,se,ye=2)=>{u.save(),u.translate(xe,ie);const k=u.createRadialGradient(0,0,0,0,0,ye*2.5);Y?(k.addColorStop(0,`rgba(245, 158, 11, ${se})`),k.addColorStop(.35,`rgba(217, 119, 6, ${se*.7})`),k.addColorStop(1,"rgba(255, 255, 255, 0)"),u.fillStyle=k,u.beginPath(),u.arc(0,0,ye*2.5,0,Math.PI*2),u.fill(),u.strokeStyle=`rgba(180, 83, 9, ${se*.8})`,u.lineWidth=.75,u.beginPath(),u.moveTo(-ye*2,0),u.lineTo(ye*2,0),u.moveTo(0,-ye*2),u.lineTo(0,ye*2),u.stroke()):(k.addColorStop(0,`rgba(255, 255, 255, ${se})`),k.addColorStop(.35,`rgba(233, 213, 255, ${se*.7})`),k.addColorStop(1,"rgba(255, 255, 255, 0)"),u.fillStyle=k,u.beginPath(),u.arc(0,0,ye*2.5,0,Math.PI*2),u.fill(),u.strokeStyle=`rgba(255, 255, 255, ${se*.9})`,u.lineWidth=.75,u.beginPath(),u.moveTo(-ye*2,0),u.lineTo(ye*2,0),u.moveTo(0,-ye*2),u.lineTo(0,ye*2),u.stroke()),u.restore()},J=(xe,ie,se,ye,k,me,de,Ne,Ee,Pe,Ze=[])=>{const ct=[0,x*.32,x*.68,x],Q=[];for(let ce=0;ce<4;ce++){const Be=Math.sin(ee*se+ye+ce*1.4)*(ie*.75)+Math.cos(ee*se*.7+ye*1.2+ce*2.1)*(ie*.35);Q.push({x:ct[ce],y:v*xe[ce]+Be})}const Ve=[Q[0],...Q,Q[Q.length-1]],$e=[],Oe=.5;for(let ce=1;ce<Ve.length-2;ce++){const Be=Ve[ce-1],Ae=Ve[ce],mt=Ve[ce+1],qt=Ve[ce+2],mn=(mt.x-Be.x)*Oe,Mn=(mt.y-Be.y)*Oe,Ni=(qt.x-Ae.x)*Oe,ms=(qt.y-Ae.y)*Oe;$e.push({p1:Ae,cp1:{x:Ae.x+mn/3,y:Ae.y+Mn/3},cp2:{x:mt.x-Ni/3,y:mt.y-ms/3},p2:mt})}u.save(),Ee>0&&(u.shadowColor=Ne,u.shadowBlur=Ee,u.shadowOffsetY=Pe),u.beginPath(),u.moveTo(Q[0].x,Q[0].y);for(const ce of $e)u.bezierCurveTo(ce.cp1.x,ce.cp1.y,ce.cp2.x,ce.cp2.y,ce.p2.x,ce.p2.y);u.lineTo(x,v),u.lineTo(0,v),u.closePath(),u.fillStyle=k,u.fill(),u.save(),u.clip();const xt=Math.min(...Q.map(ce=>ce.y)),Rt=u.createLinearGradient(0,xt,0,xt+140);Y?(Rt.addColorStop(0,"rgba(255, 255, 255, 0.40)"),Rt.addColorStop(.25,"rgba(251, 191, 36, 0.14)"),Rt.addColorStop(.7,"rgba(217, 119, 6, 0.04)"),Rt.addColorStop(1,"rgba(255, 255, 255, 0)")):(Rt.addColorStop(0,"rgba(255, 255, 255, 0.26)"),Rt.addColorStop(.25,"rgba(216, 180, 254, 0.16)"),Rt.addColorStop(.7,"rgba(147, 51, 234, 0.05)"),Rt.addColorStop(1,"rgba(0, 0, 0, 0)")),u.fillStyle=Rt,u.fillRect(0,xt,x,v),u.beginPath();for(let ce=0;ce<$e.length;ce++){const Be=$e[ce],Ae=18+Math.sin(ee*.75+ce*1.5)*4;ce===0&&u.moveTo(Be.p1.x,Be.p1.y+Ae),u.bezierCurveTo(Be.cp1.x,Be.cp1.y+Ae,Be.cp2.x,Be.cp2.y+Ae,Be.p2.x,Be.p2.y+Ae)}u.strokeStyle=Y?"rgba(160, 90, 40, 0.16)":"rgba(255, 255, 255, 0.10)",u.lineWidth=1,u.stroke(),u.beginPath();for(let ce=0;ce<$e.length;ce++){const Be=$e[ce],Ae=38+Math.cos(ee*.65+ce*1.8)*5;ce===0&&u.moveTo(Be.p1.x,Be.p1.y+Ae),u.bezierCurveTo(Be.cp1.x,Be.cp1.y+Ae,Be.cp2.x,Be.cp2.y+Ae,Be.p2.x,Be.p2.y+Ae)}u.strokeStyle=Y?"rgba(160, 90, 40, 0.10)":"rgba(255, 255, 255, 0.06)",u.lineWidth=.8,u.stroke(),u.restore(),u.strokeStyle=me,u.lineWidth=de,u.stroke(),u.restore();for(const ce of Ze){const Be=Math.min($e.length-1,Math.floor(ce*$e.length)),Ae=ce*$e.length-Be,mt=$e[Be],qt=1-Ae,mn=qt*qt*qt*mt.p1.x+3*qt*qt*Ae*mt.cp1.x+3*qt*Ae*Ae*mt.cp2.x+Ae*Ae*Ae*mt.p2.x,Mn=qt*qt*qt*mt.p1.y+3*qt*qt*Ae*mt.cp1.y+3*qt*Ae*Ae*mt.cp2.y+Ae*Ae*Ae*mt.p2.y,Ni=.5+Math.sin(ee*2+ce*8)*.35;rn(mn,Mn,Ni,2)}},Yt=(xe,ie,se,ye,k,me,de,Ne,Ee,Pe,Ze,ct)=>{const Q=Math.sin(ee*k+me)*ye,Ve=[];Ve.push({x:0,y:v*xe+Q});for(let $e=0;$e<ie.length;$e++){const Oe=x*ie[$e],xt=v*(xe-se[$e])+Math.cos(ee*k+$e+me)*(ye*.7);Ve.push({x:Oe,y:xt})}Ve.push({x,y:v*(xe+.03)+Q}),u.save(),Ze>0&&(u.shadowColor=Pe,u.shadowBlur=Ze,u.shadowOffsetY=ct),u.beginPath(),u.moveTo(Ve[0].x,Ve[0].y);for(let $e=1;$e<Ve.length;$e++)u.lineTo(Ve[$e].x,Ve[$e].y);u.lineTo(x,v),u.lineTo(0,v),u.closePath(),u.fillStyle=de,u.fill(),u.strokeStyle=Ne,u.lineWidth=Ee,u.stroke(),u.restore()},Pt=(xe,ie,se,ye,k,me)=>{u.save(),u.globalCompositeOperation="screen",u.beginPath(),u.moveTo(0,v*xe);const de=16;for(let Ne=0;Ne<=de;Ne++){const Ee=Ne/de*x,Pe=v*xe+Math.sin(Ne/de*Math.PI*2+ee*se+ye)*ie;Ne===0?u.moveTo(Ee,Pe):u.lineTo(Ee,Pe)}u.lineTo(x,v),u.lineTo(0,v),u.closePath(),u.fillStyle=k,u.fill(),u.strokeStyle=me,u.lineWidth=1.8,u.shadowColor=me,u.shadowBlur=14,u.stroke(),u.restore()},bt=u.createLinearGradient(0,v*.46,0,v*.68);if(bt.addColorStop(0,"rgba(0, 0, 0, 0)"),Y)bt.addColorStop(.5,"rgba(255, 255, 255, 0.25)");else{const xe=$==="celestial-cyan"?"rgba(7, 31, 53, 0.45)":$==="supernova-sunset"?"rgba(36, 6, 28, 0.45)":$==="nocturne-silver"?"rgba(16, 16, 23, 0.45)":"rgba(20, 10, 40, 0.45)";bt.addColorStop(.5,xe)}bt.addColorStop(1,"rgba(0, 0, 0, 0)"),u.fillStyle=bt,u.fillRect(0,v*.46,x,v*.22);const Ie=u.createLinearGradient(0,v*.55,0,v);Ie.addColorStop(0,Se[0]),Ie.addColorStop(.5,Se[1]),Ie.addColorStop(1,Se[2]);const Et=u.createLinearGradient(0,v*.63,0,v);Et.addColorStop(0,ut[0]),Et.addColorStop(.5,ut[1]),Et.addColorStop(1,ut[2]);const qe=u.createLinearGradient(0,v*.71,0,v);qe.addColorStop(0,Te[0]),qe.addColorStop(.5,Te[1]),qe.addColorStop(1,Te[2]);const rt=u.createLinearGradient(0,v*.79,0,v);rt.addColorStop(0,Xe[0]),rt.addColorStop(.5,Xe[1]),rt.addColorStop(1,Xe[2]);const I=u.createLinearGradient(0,v*.86,0,v);I.addColorStop(0,Mt[0]),I.addColorStop(.35,Mt[1]),I.addColorStop(.7,Mt[2]),I.addColorStop(1,Mt[3]);const E=Y?"rgba(160, 140, 120, 0.12)":"rgba(0,0,0,0.55)",ae=Y?"rgba(160, 140, 120, 0.16)":"rgba(0,0,0,0.65)",Ce=Y?"rgba(160, 140, 120, 0.20)":"rgba(0,0,0,0.70)",ve=Y?"rgba(160, 140, 120, 0.22)":"rgba(0,0,0,0.75)",Ue=Y?"rgba(160, 140, 120, 0.26)":"rgba(0,0,0,0.80)";if(Wt==="mountains"?(Yt(.48,[.18,.5,.82],[.14,.17,.12],12*j,.35,0,Ie,Fe,.8,E,16,-6),kt!=="airy"&&Yt(.58,[.32,.66,.9],[.12,.15,.11],14*j,.4,1.5,Et,je,.9,ae,20,-7),Yt(.68,[.15,.44,.75],[.11,.13,.1],15*j,.45,3.1,qe,ke,1,Ce,24,-8),kt==="dense"&&Yt(.78,[.28,.6,.86],[.09,.11,.08],14*j,.4,4.4,rt,St,1.1,ve,28,-9),Yt(.88,[.4,.74],[.08,.07],12*j,.35,5.8,I,Dt,1.2,Ue,32,-10)):Wt==="aurora"?(Pt(.28,32*j,.45,0,Ie,Fe),kt!=="airy"&&Pt(.4,30*j,.5,1.6,Et,je),Pt(.54,26*j,.55,3.2,qe,ke),kt==="dense"&&Pt(.68,22*j,.6,4.8,rt,St),J([.86,.89,.85,.88],12*j,.35,6.2,I,Dt,1.2,Ue,28,-9)):Wt==="ocean"?(J([.62,.58,.65,.6],16*j,.65,0,Ie,Fe,.8,E,16,-6,[.3]),kt!=="airy"&&J([.69,.73,.67,.71],18*j,.7,1.8,Et,je,.9,ae,20,-7,[.55]),J([.76,.73,.79,.75],20*j,.75,3.4,qe,ke,1,Ce,24,-8,[.38,.82]),kt==="dense"&&J([.83,.86,.81,.85],16*j,.65,4.9,rt,St,1.1,ve,28,-9,[.65]),J([.89,.87,.92,.88],14*j,.55,6.2,I,Dt,1.2,Ue,32,-10,[.5])):(J([.48,.56,.64,.68],16*j,.38,0,Ie,Fe,.8,E,16,-6,[.24,.68]),kt!=="airy"&&J([.66,.62,.55,.6],18*j,.42,1.8,Et,je,.9,ae,20,-7,[.35,.82]),J([.69,.76,.72,.76],19*j,.46,3.4,qe,ke,1,Ce,24,-8,[.42,.78]),kt==="dense"&&J([.8,.77,.84,.8],16*j,.4,4.9,rt,St,1.1,ve,28,-9,[.18,.62]),J([.88,.91,.86,.9],13*j,.35,6.2,I,Dt,1.2,Ue,32,-10,[.35,.8])),V.showCrossStars){const xe=.68+Math.sin(ee*1.8)*.22,ie=.6+Math.sin(ee*1.5+1.2)*.24,se=.64+Math.sin(ee*1.9+2.5)*.2,ye=.58+Math.sin(ee*1.4+3.8)*.25,k=.52+Math.sin(ee*1.7+4.6)*.22;z(x*.5,v*.08,11,xe),z(x*.18,v*.16,9.5,ie),z(x*.84,v*.2,10,se),z(x*.72,v*.34,8.5,ye),z(x*.08,v*.28,8,k)}N(V.shootingStarMode||"occasional"),h=requestAnimationFrame(W)};return h=requestAnimationFrame(W),()=>{cancelAnimationFrame(h),window.removeEventListener("resize",C),window.removeEventListener("mousemove",P),document.removeEventListener("visibilitychange",G)}},[]),p.jsx("canvas",{ref:s,className:"fixed inset-0 pointer-events-none z-0 select-none","aria-hidden":"true"})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hf="187",$v=0,rm=1,Xv=2,Hl=1,Yv=2,qa=3,fs=0,kn=1,Bi=2,ea=0,Ja=1,Qa=2,sm=3,am=4,qv=5,Js=100,Kv=101,Zv=102,Jv=103,Qv=104,e_=200,t_=201,n_=202,i_=203,l0=204,c0=205,r_=206,s_=207,a_=208,o_=209,l_=210,c_=211,u_=212,d_=213,f_=214,_d=0,yd=1,Sd=2,no=3,Md=4,wd=5,bd=6,Ed=7,u0=0,h_=1,p_=2,or=0,d0=1,f0=2,h0=3,p0=4,m0=5,g0=6,x0=7,v0=300,na=301,io=302,Gu=303,Vu=304,ro=1e3,oi=1001,Td=1002,Nn=1003,m_=1004,_l=1005,Jn=1006,Wu=1007,Fr=1008,ai=1009,_0=1010,y0=1011,so=1012,pf=1013,Wi=1014,Hi=1015,ji=1016,mf=1017,gf=1018,ia=1020,S0=35902,M0=35899,w0=1021,b0=1022,Gi=1023,Hr=1026,kr=1027,E0=1028,xf=1029,hs=1030,vf=1031,_f=1033,Gl=33776,Vl=33777,Wl=33778,jl=33779,Ad=35840,Cd=35841,Rd=35842,Nd=35843,Pd=36196,Ld=37492,Dd=37496,Id=37488,Ud=37489,Kl=37490,zd=37491,Fd=37808,kd=37809,Od=37810,Bd=37811,Hd=37812,Gd=37813,Vd=37814,Wd=37815,jd=37816,$d=37817,Xd=37818,Yd=37819,qd=37820,Kd=37821,Zd=36492,Jd=36494,Qd=36495,ef=36283,tf=36284,Zl=36285,nf=36286,g_=3200,rf=0,x_=1,Ur="",si="srgb",Jl="srgb-linear",Ql="linear",$t="srgb",ju=7680,v_=519,__=512,y_=513,S_=514,T0=515,M_=516,w_=517,A0=518,C0=519,b_=35044,om="300 es",Ci=2e3,ao=2001;function E_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ec(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function T_(){const s=ec("canvas");return s.style.display="block",s}const lm={};function cm(...s){const e="THREE."+s.shift();console.log(e,...s)}function R0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function gt(...s){s=R0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Vt(...s){s=R0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function $l(...s){const e=s.join(" ");e in lm||(lm[e]=!0,gt(...s))}function A_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const C_={[_d]:_d,[Sd]:bd,[Md]:Md,[no]:wd,[yd]:yd,[bd]:Sd,[Ed]:Ed,[wd]:no};class ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,d=o.length;l<d;l++)o[l].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$u=Math.PI/180,sf=180/Math.PI;function lo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[t&63|128]+zn[t>>8&255]+"-"+zn[t>>16&255]+zn[t>>24&255]+zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]).toLowerCase()}function zt(s,e,t){return Math.max(e,Math.min(t,s))}function R_(s,e){return(s%e+e)%e}function Xu(s,e,t){return(1-t)*s+t*e}function N_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function yf(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function P_(s,e){if(e.constructor===Float32Array)return s;const t=yf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function L_(s,e){if(e.constructor===Float32Array)return s;const t=yf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const Cf=class Cf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=zt(this.x,e.x,t.x),this.y=zt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=zt(this.x,e,t),this.y=zt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(zt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(zt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,d=this.y-e.y;return this.x=l*r-d*o+e.x,this.y=l*o+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Cf.prototype.isVector2=!0;let Ft=Cf;class aa{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,d,m){let u=r[o+0],h=r[o+1],x=r[o+2],v=r[o+3],_=l[d+0],M=l[d+1],b=l[d+2],C=l[d+3];if(v!==C||u!==_||h!==M||x!==b){let y=u*_+h*M+x*b+v*C;y<0&&(_=-_,M=-M,b=-b,C=-C,y=-y);let S=1-m;if(y<.9995){const R=Math.acos(y),F=Math.sin(R);S=Math.sin(S*R)/F,m=Math.sin(m*R)/F,u=u*S+_*m,h=h*S+M*m,x=x*S+b*m,v=v*S+C*m}else{u=u*S+_*m,h=h*S+M*m,x=x*S+b*m,v=v*S+C*m;const R=1/Math.sqrt(u*u+h*h+x*x+v*v);u*=R,h*=R,x*=R,v*=R}}e[t]=u,e[t+1]=h,e[t+2]=x,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,l,d){const m=r[o],u=r[o+1],h=r[o+2],x=r[o+3],v=l[d],_=l[d+1],M=l[d+2],b=l[d+3];return e[t]=m*b+x*v+u*M-h*_,e[t+1]=u*b+x*_+h*v-m*M,e[t+2]=h*b+x*M+m*_-u*v,e[t+3]=x*b-m*v-u*_-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,d=e._order,m=Math.cos,u=Math.sin,h=m(r/2),x=m(o/2),v=m(l/2),_=u(r/2),M=u(o/2),b=u(l/2);switch(d){case"XYZ":this._x=_*x*v+h*M*b,this._y=h*M*v-_*x*b,this._z=h*x*b+_*M*v,this._w=h*x*v-_*M*b;break;case"YXZ":this._x=_*x*v+h*M*b,this._y=h*M*v-_*x*b,this._z=h*x*b-_*M*v,this._w=h*x*v+_*M*b;break;case"ZXY":this._x=_*x*v-h*M*b,this._y=h*M*v+_*x*b,this._z=h*x*b+_*M*v,this._w=h*x*v-_*M*b;break;case"ZYX":this._x=_*x*v-h*M*b,this._y=h*M*v+_*x*b,this._z=h*x*b-_*M*v,this._w=h*x*v+_*M*b;break;case"YZX":this._x=_*x*v+h*M*b,this._y=h*M*v+_*x*b,this._z=h*x*b-_*M*v,this._w=h*x*v-_*M*b;break;case"XZY":this._x=_*x*v-h*M*b,this._y=h*M*v-_*x*b,this._z=h*x*b+_*M*v,this._w=h*x*v+_*M*b;break;default:gt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],d=t[1],m=t[5],u=t[9],h=t[2],x=t[6],v=t[10],_=r+m+v;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(x-u)*M,this._y=(l-h)*M,this._z=(d-o)*M}else if(r>m&&r>v){const M=2*Math.sqrt(1+r-m-v);this._w=(x-u)/M,this._x=.25*M,this._y=(o+d)/M,this._z=(l+h)/M}else if(m>v){const M=2*Math.sqrt(1+m-r-v);this._w=(l-h)/M,this._x=(o+d)/M,this._y=.25*M,this._z=(u+x)/M}else{const M=2*Math.sqrt(1+v-r-m);this._w=(d-o)/M,this._x=(l+h)/M,this._y=(u+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,d=e._w,m=t._x,u=t._y,h=t._z,x=t._w;return this._x=r*x+d*m+o*h-l*u,this._y=o*x+d*u+l*m-r*h,this._z=l*x+d*h+r*u-o*m,this._w=d*x-r*m-o*u-l*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,d=e._w,m=this.dot(e);m<0&&(r=-r,o=-o,l=-l,d=-d,m=-m);let u=1-t;if(m<.9995){const h=Math.acos(m),x=Math.sin(h);u=Math.sin(u*h)/x,t=Math.sin(t*h)/x,this._x=this._x*u+r*t,this._y=this._y*u+o*t,this._z=this._z*u+l*t,this._w=this._w*u+d*t,this._onChangeCallback()}else this._x=this._x*u+r*t,this._y=this._y*u+o*t,this._z=this._z*u+l*t,this._w=this._w*u+d*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Rf=class Rf{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(um.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(um.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,d=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*d,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*d,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*d,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,d=e.y,m=e.z,u=e.w,h=2*(d*o-m*r),x=2*(m*t-l*o),v=2*(l*r-d*t);return this.x=t+u*h+d*v-m*x,this.y=r+u*x+m*h-l*v,this.z=o+u*v+l*x-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=zt(this.x,e.x,t.x),this.y=zt(this.y,e.y,t.y),this.z=zt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=zt(this.x,e,t),this.y=zt(this.y,e,t),this.z=zt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(zt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,d=t.x,m=t.y,u=t.z;return this.x=o*u-l*m,this.y=l*d-r*u,this.z=r*m-o*d,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Yu.copy(this).projectOnVector(e),this.sub(Yu)}reflect(e){return this.sub(Yu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(zt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Rf.prototype.isVector3=!0;let pe=Rf;const Yu=new pe,um=new aa,Nf=class Nf{constructor(e,t,r,o,l,d,m,u,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,d,m,u,h)}set(e,t,r,o,l,d,m,u,h){const x=this.elements;return x[0]=e,x[1]=o,x[2]=m,x[3]=t,x[4]=l,x[5]=u,x[6]=r,x[7]=d,x[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,d=r[0],m=r[3],u=r[6],h=r[1],x=r[4],v=r[7],_=r[2],M=r[5],b=r[8],C=o[0],y=o[3],S=o[6],R=o[1],F=o[4],P=o[7],z=o[2],D=o[5],w=o[8];return l[0]=d*C+m*R+u*z,l[3]=d*y+m*F+u*D,l[6]=d*S+m*P+u*w,l[1]=h*C+x*R+v*z,l[4]=h*y+x*F+v*D,l[7]=h*S+x*P+v*w,l[2]=_*C+M*R+b*z,l[5]=_*y+M*F+b*D,l[8]=_*S+M*P+b*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],m=e[5],u=e[6],h=e[7],x=e[8];return t*d*x-t*m*h-r*l*x+r*m*u+o*l*h-o*d*u}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],m=e[5],u=e[6],h=e[7],x=e[8],v=x*d-m*h,_=m*u-x*l,M=h*l-d*u,b=t*v+r*_+o*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=v*C,e[1]=(o*h-x*r)*C,e[2]=(m*r-o*d)*C,e[3]=_*C,e[4]=(x*t-o*u)*C,e[5]=(o*l-m*t)*C,e[6]=M*C,e[7]=(r*u-h*t)*C,e[8]=(d*t-r*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,d,m){const u=Math.cos(l),h=Math.sin(l);return this.set(r*u,r*h,-r*(u*d+h*m)+d+e,-o*h,o*u,-o*(-h*d+u*m)+m+t,0,0,1),this}scale(e,t){return $l("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qu.makeScale(e,t)),this}rotate(e){return $l("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qu.makeRotation(-e)),this}translate(e,t){return $l("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Nf.prototype.isMatrix3=!0;let vt=Nf;const qu=new vt,dm=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fm=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function D_(){const s={enabled:!0,workingColorSpace:Jl,spaces:{},convert:function(o,l,d){return this.enabled===!1||l===d||!l||!d||(this.spaces[l].transfer===$t&&(o.r=lr(o.r),o.g=lr(o.g),o.b=lr(o.b)),this.spaces[l].primaries!==this.spaces[d].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===$t&&(o.r=ta(o.r),o.g=ta(o.g),o.b=ta(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ur?Ql:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,d){return o.copy(this.spaces[d].fromXYZ).multiply(this.spaces[l].toXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Jl]:{primaries:e,whitePoint:r,transfer:Ql,toXYZ:dm,fromXYZ:fm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:e,whitePoint:r,transfer:$t,toXYZ:dm,fromXYZ:fm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),s}const Ut=D_();function lr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ta(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Bs;class I_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Bs===void 0&&(Bs=ec("canvas")),Bs.width=e.width,Bs.height=e.height;const o=Bs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Bs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ec("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let d=0;d<l.length;d++)l[d]=lr(l[d]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(lr(t[r]/255)*255):t[r]=lr(t[r]);return{data:t,width:e.width,height:e.height}}else return gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let U_=0;class Sf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=lo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let d=0,m=o.length;d<m;d++)o[d].isDataTexture?l.push(Ku(o[d].image)):l.push(Ku(o[d]))}else l=Ku(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Ku(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?I_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(gt("Texture: Unable to serialize Texture."),{})}let z_=0;const Zu=new pe;class On extends ps{constructor(e=On.DEFAULT_IMAGE,t=On.DEFAULT_MAPPING,r=oi,o=oi,l=Jn,d=Fr,m=Gi,u=ai,h=On.DEFAULT_ANISOTROPY,x=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=lo(),this.name="",this.source=new Sf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=d,this.anisotropy=h,this.format=m,this.internalFormat=null,this.type=u,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Zu).x}get height(){return this.source.getSize(Zu).y}get depth(){return this.source.getSize(Zu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){gt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){gt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==v0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ro:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ro:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=v0;On.DEFAULT_ANISOTROPY=1;const Pf=class Pf{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,d=e.elements;return this.x=d[0]*t+d[4]*r+d[8]*o+d[12]*l,this.y=d[1]*t+d[5]*r+d[9]*o+d[13]*l,this.z=d[2]*t+d[6]*r+d[10]*o+d[14]*l,this.w=d[3]*t+d[7]*r+d[11]*o+d[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const u=e.elements,h=u[0],x=u[4],v=u[8],_=u[1],M=u[5],b=u[9],C=u[2],y=u[6],S=u[10];if(Math.abs(x-_)<.01&&Math.abs(v-C)<.01&&Math.abs(b-y)<.01){if(Math.abs(x+_)<.1&&Math.abs(v+C)<.1&&Math.abs(b+y)<.1&&Math.abs(h+M+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(h+1)/2,P=(M+1)/2,z=(S+1)/2,D=(x+_)/4,w=(v+C)/4,N=(b+y)/4;return F>P&&F>z?F<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(F),o=D/r,l=w/r):P>z?P<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),r=D/o,l=N/o):z<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(z),r=w/l,o=N/l),this.set(r,o,l,t),this}let R=Math.sqrt((y-b)*(y-b)+(v-C)*(v-C)+(_-x)*(_-x));return Math.abs(R)<.001&&(R=1),this.x=(y-b)/R,this.y=(v-C)/R,this.z=(_-x)/R,this.w=Math.acos((h+M+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=zt(this.x,e.x,t.x),this.y=zt(this.y,e.y,t.y),this.z=zt(this.z,e.z,t.z),this.w=zt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=zt(this.x,e,t),this.y=zt(this.y,e,t),this.z=zt(this.z,e,t),this.w=zt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(zt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Pf.prototype.isVector4=!0;let on=Pf;class F_ extends ps{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t),this.textures=[];const o=r.count;for(let l=0;l<o;l++)this.textures[l]=new On({width:e,height:t,depth:r.depth}),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Jn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Sf(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends F_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class N0 extends On{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class k_ extends On{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const sc=class sc{constructor(e,t,r,o,l,d,m,u,h,x,v,_,M,b,C,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,d,m,u,h,x,v,_,M,b,C,y)}set(e,t,r,o,l,d,m,u,h,x,v,_,M,b,C,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=r,S[12]=o,S[1]=l,S[5]=d,S[9]=m,S[13]=u,S[2]=h,S[6]=x,S[10]=v,S[14]=_,S[3]=M,S[7]=b,S[11]=C,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Hs.setFromMatrixColumn(e,0).length(),l=1/Hs.setFromMatrixColumn(e,1).length(),d=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*d,t[9]=r[9]*d,t[10]=r[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,d=Math.cos(r),m=Math.sin(r),u=Math.cos(o),h=Math.sin(o),x=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const _=d*x,M=d*v,b=m*x,C=m*v;t[0]=u*x,t[4]=-u*v,t[8]=h,t[1]=M+b*h,t[5]=_-C*h,t[9]=-m*u,t[2]=C-_*h,t[6]=b+M*h,t[10]=d*u}else if(e.order==="YXZ"){const _=u*x,M=u*v,b=h*x,C=h*v;t[0]=_+C*m,t[4]=b*m-M,t[8]=d*h,t[1]=d*v,t[5]=d*x,t[9]=-m,t[2]=M*m-b,t[6]=C+_*m,t[10]=d*u}else if(e.order==="ZXY"){const _=u*x,M=u*v,b=h*x,C=h*v;t[0]=_-C*m,t[4]=-d*v,t[8]=b+M*m,t[1]=M+b*m,t[5]=d*x,t[9]=C-_*m,t[2]=-d*h,t[6]=m,t[10]=d*u}else if(e.order==="ZYX"){const _=d*x,M=d*v,b=m*x,C=m*v;t[0]=u*x,t[4]=b*h-M,t[8]=_*h+C,t[1]=u*v,t[5]=C*h+_,t[9]=M*h-b,t[2]=-h,t[6]=m*u,t[10]=d*u}else if(e.order==="YZX"){const _=d*u,M=d*h,b=m*u,C=m*h;t[0]=u*x,t[4]=C-_*v,t[8]=b*v+M,t[1]=v,t[5]=d*x,t[9]=-m*x,t[2]=-h*x,t[6]=M*v+b,t[10]=_-C*v}else if(e.order==="XZY"){const _=d*u,M=d*h,b=m*u,C=m*h;t[0]=u*x,t[4]=-v,t[8]=h*x,t[1]=_*v+C,t[5]=d*x,t[9]=M*v-b,t[2]=b*v-M,t[6]=m*x,t[10]=C*v+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(O_,e,B_)}lookAt(e,t,r){const o=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Cr.crossVectors(r,ii),Cr.lengthSq()===0&&(Math.abs(r.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Cr.crossVectors(r,ii)),Cr.normalize(),yl.crossVectors(ii,Cr),o[0]=Cr.x,o[4]=yl.x,o[8]=ii.x,o[1]=Cr.y,o[5]=yl.y,o[9]=ii.y,o[2]=Cr.z,o[6]=yl.z,o[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,d=r[0],m=r[4],u=r[8],h=r[12],x=r[1],v=r[5],_=r[9],M=r[13],b=r[2],C=r[6],y=r[10],S=r[14],R=r[3],F=r[7],P=r[11],z=r[15],D=o[0],w=o[4],N=o[8],ee=o[12],X=o[1],G=o[5],W=o[9],V=o[13],H=o[2],O=o[6],re=o[10],K=o[14],j=o[3],$=o[7],Y=o[11],L=o[15];return l[0]=d*D+m*X+u*H+h*j,l[4]=d*w+m*G+u*O+h*$,l[8]=d*N+m*W+u*re+h*Y,l[12]=d*ee+m*V+u*K+h*L,l[1]=x*D+v*X+_*H+M*j,l[5]=x*w+v*G+_*O+M*$,l[9]=x*N+v*W+_*re+M*Y,l[13]=x*ee+v*V+_*K+M*L,l[2]=b*D+C*X+y*H+S*j,l[6]=b*w+C*G+y*O+S*$,l[10]=b*N+C*W+y*re+S*Y,l[14]=b*ee+C*V+y*K+S*L,l[3]=R*D+F*X+P*H+z*j,l[7]=R*w+F*G+P*O+z*$,l[11]=R*N+F*W+P*re+z*Y,l[15]=R*ee+F*V+P*K+z*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],d=e[1],m=e[5],u=e[9],h=e[13],x=e[2],v=e[6],_=e[10],M=e[14],b=e[3],C=e[7],y=e[11],S=e[15],R=u*M-h*_,F=m*M-h*v,P=m*_-u*v,z=d*M-h*x,D=d*_-u*x,w=d*v-m*x;return t*(C*R-y*F+S*P)-r*(b*R-y*z+S*D)+o*(b*F-C*z+S*w)-l*(b*P-C*D+y*w)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],d=e[5],m=e[9],u=e[2],h=e[6],x=e[10];return t*(d*x-m*h)-r*(l*x-m*u)+o*(l*h-d*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],m=e[5],u=e[6],h=e[7],x=e[8],v=e[9],_=e[10],M=e[11],b=e[12],C=e[13],y=e[14],S=e[15],R=t*m-r*d,F=t*u-o*d,P=t*h-l*d,z=r*u-o*m,D=r*h-l*m,w=o*h-l*u,N=x*C-v*b,ee=x*y-_*b,X=x*S-M*b,G=v*y-_*C,W=v*S-M*C,V=_*S-M*y,H=R*V-F*W+P*G+z*X-D*ee+w*N;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/H;return e[0]=(m*V-u*W+h*G)*O,e[1]=(o*W-r*V-l*G)*O,e[2]=(C*w-y*D+S*z)*O,e[3]=(_*D-v*w-M*z)*O,e[4]=(u*X-d*V-h*ee)*O,e[5]=(t*V-o*X+l*ee)*O,e[6]=(y*P-b*w-S*F)*O,e[7]=(x*w-_*P+M*F)*O,e[8]=(d*W-m*X+h*N)*O,e[9]=(r*X-t*W-l*N)*O,e[10]=(b*D-C*P+S*R)*O,e[11]=(v*P-x*D-M*R)*O,e[12]=(m*ee-d*G-u*N)*O,e[13]=(t*G-r*ee+o*N)*O,e[14]=(C*F-b*z-y*R)*O,e[15]=(x*z-v*F+_*R)*O,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,d=e.x,m=e.y,u=e.z,h=l*d,x=l*m;return this.set(h*d+r,h*m-o*u,h*u+o*m,0,h*m+o*u,x*m+r,x*u-o*d,0,h*u-o*m,x*u+o*d,l*u*u+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,d){return this.set(1,r,l,0,e,1,d,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,d=t._y,m=t._z,u=t._w,h=l+l,x=d+d,v=m+m,_=l*h,M=l*x,b=l*v,C=d*x,y=d*v,S=m*v,R=u*h,F=u*x,P=u*v,z=r.x,D=r.y,w=r.z;return o[0]=(1-(C+S))*z,o[1]=(M+P)*z,o[2]=(b-F)*z,o[3]=0,o[4]=(M-P)*D,o[5]=(1-(_+S))*D,o[6]=(y+R)*D,o[7]=0,o[8]=(b+F)*w,o[9]=(y-R)*w,o[10]=(1-(_+C))*w,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let d=Hs.set(o[0],o[1],o[2]).length();const m=Hs.set(o[4],o[5],o[6]).length(),u=Hs.set(o[8],o[9],o[10]).length();l<0&&(d=-d),Mi.copy(this);const h=1/d,x=1/m,v=1/u;return Mi.elements[0]*=h,Mi.elements[1]*=h,Mi.elements[2]*=h,Mi.elements[4]*=x,Mi.elements[5]*=x,Mi.elements[6]*=x,Mi.elements[8]*=v,Mi.elements[9]*=v,Mi.elements[10]*=v,t.setFromRotationMatrix(Mi),r.x=d,r.y=m,r.z=u,this}makePerspective(e,t,r,o,l,d,m=Ci,u=!1){const h=this.elements,x=2*l/(t-e),v=2*l/(r-o),_=(t+e)/(t-e),M=(r+o)/(r-o);let b,C;if(u)b=l/(d-l),C=d*l/(d-l);else if(m===Ci)b=-(d+l)/(d-l),C=-2*d*l/(d-l);else if(m===ao)b=-d/(d-l),C=-d*l/(d-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+m);return h[0]=x,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=v,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,d,m=Ci,u=!1){const h=this.elements,x=2/(t-e),v=2/(r-o),_=-(t+e)/(t-e),M=-(r+o)/(r-o);let b,C;if(u)b=1/(d-l),C=d/(d-l);else if(m===Ci)b=-2/(d-l),C=-(d+l)/(d-l);else if(m===ao)b=-1/(d-l),C=-l/(d-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+m);return h[0]=x,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=v,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=b,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};sc.prototype.isMatrix4=!0;let ln=sc;const Hs=new pe,Mi=new ln,O_=new pe(0,0,0),B_=new pe(1,1,1),Cr=new pe,yl=new pe,ii=new pe,hm=new ln,pm=new aa;class Gr{constructor(e=0,t=0,r=0,o=Gr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],d=o[4],m=o[8],u=o[1],h=o[5],x=o[9],v=o[2],_=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(zt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-d,l)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(m,M),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(zt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(u,l));break;case"ZYX":this._y=Math.asin(-zt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(u,l)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-x,h),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(m,M));break;case"XZY":this._z=Math.asin(-zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(m,l)):(this._x=Math.atan2(-x,M),this._y=0);break;default:gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return hm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pm.setFromEuler(this),this.setFromQuaternion(pm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gr.DEFAULT_ORDER="XYZ";let P0=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},H_=0;const mm=new pe,Gs=new aa,tr=new ln,Sl=new pe,Wa=new pe,G_=new pe,V_=new aa,gm=new pe(1,0,0),xm=new pe(0,1,0),vm=new pe(0,0,1),_m={type:"added"},W_={type:"removed"},Vs={type:"childadded",child:null},Ju={type:"childremoved",child:null};class Bn extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new pe,t=new Gr,r=new aa,o=new pe(1,1,1);function l(){r.setFromEuler(t,!1)}function d(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new ln},normalMatrix:{value:new vt}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new P0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(gm,e)}rotateY(e){return this.rotateOnAxis(xm,e)}rotateZ(e){return this.rotateOnAxis(vm,e)}translateOnAxis(e,t){return mm.copy(e).applyQuaternion(this.quaternion),this.position.add(mm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gm,e)}translateY(e){return this.translateOnAxis(xm,e)}translateZ(e){return this.translateOnAxis(vm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Sl.copy(e):Sl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tr.lookAt(Wa,Sl,this.up):tr.lookAt(Sl,Wa,this.up),this.quaternion.setFromRotationMatrix(tr),o&&(tr.extractRotation(o.matrixWorld),Gs.setFromRotationMatrix(tr),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Vt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_m),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):Vt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(W_),Ju.child=e,this.dispatchEvent(Ju),Ju.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(tr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_m),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectByProperty(e,t);if(d!==void 0)return d}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,d=o.length;l<d;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,e,G_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,V_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let d=0,m=l.length;d<m;d++)l[d].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(m=>({...m,boundingBox:m.boundingBox?m.boundingBox.toJSON():void 0,boundingSphere:m.boundingSphere?m.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(m=>({...m})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(m,u){return m[u.uuid]===void 0&&(m[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const m=this.geometry.parameters;if(m!==void 0&&m.shapes!==void 0){const u=m.shapes;if(Array.isArray(u))for(let h=0,x=u.length;h<x;h++){const v=u[h];l(e.shapes,v)}else l(e.shapes,u)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const m=[];for(let u=0,h=this.material.length;u<h;u++)m.push(l(e.materials,this.material[u]));o.material=m}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let m=0;m<this.children.length;m++)o.children.push(this.children[m].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let m=0;m<this.animations.length;m++){const u=this.animations[m];o.animations.push(l(e.animations,u))}}if(t){const m=d(e.geometries),u=d(e.materials),h=d(e.textures),x=d(e.images),v=d(e.shapes),_=d(e.skeletons),M=d(e.animations),b=d(e.nodes);m.length>0&&(r.geometries=m),u.length>0&&(r.materials=u),h.length>0&&(r.textures=h),x.length>0&&(r.images=x),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=o,r;function d(m){const u=[];for(const h in m){const x=m[h];delete x.metadata,u.push(x)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Bn.DEFAULT_UP=new pe(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ka extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j_={type:"move"};class Qu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ka,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ka,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new pe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new pe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ka,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new pe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new pe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,d=null;const m=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const C of e.hand.values()){const y=t.getJointPose(C,r),S=this._getHandJoint(h,C);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const x=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],_=x.position.distanceTo(v.position),M=.02,b=.005;h.inputState.pinching&&_>M+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=M-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(u.matrix.fromArray(l.transform.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale),u.matrixWorldNeedsUpdate=!0,l.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(l.linearVelocity)):u.hasLinearVelocity=!1,l.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(l.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:e,target:this})));m!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(m.matrix.fromArray(o.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,o.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(o.linearVelocity)):m.hasLinearVelocity=!1,o.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(o.angularVelocity)):m.hasAngularVelocity=!1,this.dispatchEvent(j_)))}return m!==null&&(m.visible=o!==null),u!==null&&(u.visible=l!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Ka;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const L0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rr={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function ed(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ct{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Ut.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ut.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Ut.workingColorSpace){if(e=R_(e,1),t=zt(t,0,1),r=zt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,d=2*r-l;this.r=ed(d,l,e+1/3),this.g=ed(d,l,e),this.b=ed(d,l,e-1/3)}return Ut.colorSpaceToWorking(this,o),this}setStyle(e,t=si){function r(l){l!==void 0&&parseFloat(l)<1&&gt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const d=o[1],m=o[2];switch(d){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(m))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(m))return r(l[4]),this.setRGB(Math.min(100,parseFloat(l[1]))/100,Math.min(100,parseFloat(l[2]))/100,Math.min(100,parseFloat(l[3]))/100,t);break;case"hsl":case"hsla":if(l=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(m))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:gt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],d=l.length;if(d===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(d===6)return this.setHex(parseInt(l,16),t);gt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=si){const r=L0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):gt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return Ut.workingToColorSpace(Fn.copy(this),e),Math.round(zt(Fn.r*255,0,255))*65536+Math.round(zt(Fn.g*255,0,255))*256+Math.round(zt(Fn.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ut.workingColorSpace){Ut.workingToColorSpace(Fn.copy(this),t);const r=Fn.r,o=Fn.g,l=Fn.b,d=Math.max(r,o,l),m=Math.min(r,o,l);let u,h;const x=(m+d)/2;if(m===d)u=0,h=0;else{const v=d-m;switch(h=x<=.5?v/(d+m):v/(2-d-m),d){case r:u=(o-l)/v+(o<l?6:0);break;case o:u=(l-r)/v+2;break;case l:u=(r-o)/v+4;break}u/=6}return e.h=u,e.s=h,e.l=x,e}getRGB(e,t=Ut.workingColorSpace){return Ut.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=si){Ut.workingToColorSpace(Fn.copy(this),e);const t=Fn.r,r=Fn.g,o=Fn.b;return e!==si?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Rr),this.setHSL(Rr.h+e,Rr.s+t,Rr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Rr),e.getHSL(Ml);const r=Xu(Rr.h,Ml.h,t),o=Xu(Rr.s,Ml.s,t),l=Xu(Rr.l,Ml.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Ct;Ct.NAMES=L0;class $_ extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gr,this.environmentIntensity=1,this.environmentRotation=new Gr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const wi=new pe,nr=new pe,td=new pe,ir=new pe,Ws=new pe,js=new pe,ym=new pe,nd=new pe,id=new pe,rd=new pe,sd=new on,ad=new on,od=new on;class Ai{constructor(e=new pe,t=new pe,r=new pe){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),wi.subVectors(e,t),o.cross(wi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){wi.subVectors(o,t),nr.subVectors(r,t),td.subVectors(e,t);const d=wi.dot(wi),m=wi.dot(nr),u=wi.dot(td),h=nr.dot(nr),x=nr.dot(td),v=d*h-m*m;if(v===0)return l.set(0,0,0),null;const _=1/v,M=(h*u-m*x)*_,b=(d*x-m*u)*_;return l.set(1-M-b,b,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,ir)===null?!1:ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(e,t,r,o,l,d,m,u){return this.getBarycoord(e,t,r,o,ir)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(l,ir.x),u.addScaledVector(d,ir.y),u.addScaledVector(m,ir.z),u)}static getInterpolatedAttribute(e,t,r,o,l,d){return sd.setScalar(0),ad.setScalar(0),od.setScalar(0),sd.fromBufferAttribute(e,t),ad.fromBufferAttribute(e,r),od.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(sd,l.x),d.addScaledVector(ad,l.y),d.addScaledVector(od,l.z),d}static isFrontFacing(e,t,r,o){return wi.subVectors(r,t),nr.subVectors(e,t),wi.cross(nr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),wi.cross(nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ai.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Ai.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let d,m;Ws.subVectors(o,r),js.subVectors(l,r),nd.subVectors(e,r);const u=Ws.dot(nd),h=js.dot(nd);if(u<=0&&h<=0)return t.copy(r);id.subVectors(e,o);const x=Ws.dot(id),v=js.dot(id);if(x>=0&&v<=x)return t.copy(o);const _=u*v-x*h;if(_<=0&&u>=0&&x<=0&&u-x>0)return d=u/(u-x),t.copy(r).addScaledVector(Ws,d);rd.subVectors(e,l);const M=Ws.dot(rd),b=js.dot(rd);if(b>=0&&M<=b)return t.copy(l);const C=M*h-u*b;if(C<=0&&h>=0&&b<=0)return m=h/(h-b),t.copy(r).addScaledVector(js,m);const y=x*b-M*v;if(y<=0&&v-x>=0&&M-b>=0)return ym.subVectors(l,o),m=(v-x)/(v-x+(M-b)),t.copy(o).addScaledVector(ym,m);const S=1/(y+C+_);return d=C*S,m=_*S,t.copy(r).addScaledVector(Ws,d).addScaledVector(js,m)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class co{constructor(e=new pe(1/0,1/0,1/0),t=new pe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let d=0,m=l.count;d<m;d++)e.isMesh===!0?e.getVertexPosition(d,bi):bi.fromBufferAttribute(l,d),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),wl.copy(r.boundingBox)),wl.applyMatrix4(e.matrixWorld),this.union(wl)}const o=e.children;for(let l=0,d=o.length;l<d;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ja),bl.subVectors(this.max,ja),$s.subVectors(e.a,ja),Xs.subVectors(e.b,ja),Ys.subVectors(e.c,ja),Nr.subVectors(Xs,$s),Pr.subVectors(Ys,Xs),rs.subVectors($s,Ys);let t=[0,-Nr.z,Nr.y,0,-Pr.z,Pr.y,0,-rs.z,rs.y,Nr.z,0,-Nr.x,Pr.z,0,-Pr.x,rs.z,0,-rs.x,-Nr.y,Nr.x,0,-Pr.y,Pr.x,0,-rs.y,rs.x,0];return!ld(t,$s,Xs,Ys,bl)||(t=[1,0,0,0,1,0,0,0,1],!ld(t,$s,Xs,Ys,bl))?!1:(El.crossVectors(Nr,Pr),t=[El.x,El.y,El.z],ld(t,$s,Xs,Ys,bl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const rr=[new pe,new pe,new pe,new pe,new pe,new pe,new pe,new pe],bi=new pe,wl=new co,$s=new pe,Xs=new pe,Ys=new pe,Nr=new pe,Pr=new pe,rs=new pe,ja=new pe,bl=new pe,El=new pe,ss=new pe;function ld(s,e,t,r,o){for(let l=0,d=s.length-3;l<=d;l+=3){ss.fromArray(s,l);const m=o.x*Math.abs(ss.x)+o.y*Math.abs(ss.y)+o.z*Math.abs(ss.z),u=e.dot(ss),h=t.dot(ss),x=r.dot(ss);if(Math.max(-Math.max(u,h,x),Math.min(u,h,x))>m)return!1}return!0}const pn=new pe,Tl=new Ft;let X_=0;class us extends ps{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:X_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=b_,this.updateRanges=[],this.gpuType=Hi,this.version=0,this._normalizationScale=e!==void 0?yf(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Tl.fromBufferAttribute(this,t),Tl.applyMatrix3(e),this.setXY(t,Tl.x,Tl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix3(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):P_(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):L_(e,this.array)}}class D0 extends us{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class I0 extends us{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class jn extends us{constructor(e,t,r){super(new Float32Array(e),t,r)}}const Y_=new co,$a=new pe,cd=new pe;class Mf{constructor(e=new pe,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Y_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,d=e.length;l<d;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$a.subVectors(e,this.center);const t=$a.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector($a,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($a.copy(e.center).add(cd)),this.expandByPoint($a.copy(e.center).sub(cd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let q_=0;const pi=new ln,ud=new Bn,qs=new pe,ri=new co,Xa=new co,An=new pe;class cr extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=lo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(E_(e)?I0:D0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new vt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,r){return pi.makeTranslation(e,t,r),this.applyMatrix4(pi),this}scale(e,t,r){return pi.makeScale(e,t,r),this.applyMatrix4(pi),this}lookAt(e){return ud.lookAt(e),ud.updateMatrix(),this.applyMatrix4(ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const d=e[o];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new jn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new co);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new pe(-1/0,-1/0,-1/0),new pe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];ri.setFromBufferAttribute(l),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new pe,1/0);return}if(e){const r=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let l=0,d=t.length;l<d;l++){const m=t[l];Xa.setFromBufferAttribute(m),this.morphTargetsRelative?(An.addVectors(ri.min,Xa.min),ri.expandByPoint(An),An.addVectors(ri.max,Xa.max),ri.expandByPoint(An)):(ri.expandByPoint(Xa.min),ri.expandByPoint(Xa.max))}ri.getCenter(r);let o=0;for(let l=0,d=e.count;l<d;l++)An.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(An));if(t)for(let l=0,d=t.length;l<d;l++){const m=t[l],u=this.morphTargetsRelative;for(let h=0,x=m.count;h<x;h++)An.fromBufferAttribute(m,h),u&&(qs.fromBufferAttribute(e,h),An.add(qs)),o=Math.max(o,r.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new us(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const m=[],u=[],h=new Uint8Array(r.count);for(let ee=0;ee<r.count;ee++)m[ee]=new pe,u[ee]=new pe;const x=new pe,v=new pe,_=new pe,M=new Ft,b=new Ft,C=new Ft,y=new pe,S=new pe;function R(ee,X,G){h[ee]=h[X]=h[G]=1,x.fromBufferAttribute(r,ee),v.fromBufferAttribute(r,X),_.fromBufferAttribute(r,G),M.fromBufferAttribute(l,ee),b.fromBufferAttribute(l,X),C.fromBufferAttribute(l,G),v.sub(x),_.sub(x),b.sub(M),C.sub(M);const W=1/(b.x*C.y-C.x*b.y);isFinite(W)&&(y.copy(v).multiplyScalar(C.y).addScaledVector(_,-b.y).multiplyScalar(W),S.copy(_).multiplyScalar(b.x).addScaledVector(v,-C.x).multiplyScalar(W),m[ee].add(y),m[X].add(y),m[G].add(y),u[ee].add(S),u[X].add(S),u[G].add(S))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let ee=0,X=F.length;ee<X;++ee){const G=F[ee],W=G.start,V=G.count;for(let H=W,O=W+V;H<O;H+=3)R(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const P=new pe,z=new pe,D=new pe,w=new pe;function N(ee){D.fromBufferAttribute(o,ee),w.copy(D);const X=m[ee];P.copy(X),P.sub(D.multiplyScalar(D.dot(X))).normalize(),z.crossVectors(w,X);const W=z.dot(u[ee])<0?-1:1;d.setXYZW(ee,P.x,P.y,P.z,W)}for(let ee=0,X=r.count;ee<X;++ee)h[ee]&&N(ee);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new us(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,M=r.count;_<M;_++)r.setXYZ(_,0,0,0);const o=new pe,l=new pe,d=new pe,m=new pe,u=new pe,h=new pe,x=new pe,v=new pe;if(e)for(let _=0,M=e.count;_<M;_+=3){const b=e.getX(_+0),C=e.getX(_+1),y=e.getX(_+2);o.fromBufferAttribute(t,b),l.fromBufferAttribute(t,C),d.fromBufferAttribute(t,y),x.subVectors(d,l),v.subVectors(o,l),x.cross(v),m.fromBufferAttribute(r,b),u.fromBufferAttribute(r,C),h.fromBufferAttribute(r,y),m.add(x),u.add(x),h.add(x),r.setXYZ(b,m.x,m.y,m.z),r.setXYZ(C,u.x,u.y,u.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let _=0,M=t.count;_<M;_+=3)o.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),d.fromBufferAttribute(t,_+2),x.subVectors(d,l),v.subVectors(o,l),x.cross(v),r.setXYZ(_+0,x.x,x.y,x.z),r.setXYZ(_+1,x.x,x.y,x.z),r.setXYZ(_+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)An.fromBufferAttribute(e,t),An.normalize(),e.setXYZ(t,An.x,An.y,An.z)}toNonIndexed(){function e(m,u){const h=m.array,x=m.itemSize,v=m.normalized,_=new h.constructor(u.length*x);let M=0,b=0;for(let C=0,y=u.length;C<y;C++){m.isInterleavedBufferAttribute?M=u[C]*m.data.stride+m.offset:M=u[C]*x;for(let S=0;S<x;S++)_[b++]=h[M++]}return new us(_,x,v)}if(this.index===null)return gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cr,r=this.index.array,o=this.attributes;for(const m in o){const u=o[m],h=e(u,r);t.setAttribute(m,h)}const l=this.morphAttributes;for(const m in l){const u=[],h=l[m];for(let x=0,v=h.length;x<v;x++){const _=h[x],M=e(_,r);u.push(M)}t.morphAttributes[m]=u}t.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let m=0,u=d.length;m<u;m++){const h=d[m];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const u in r){const h=r[u];e.data.attributes[u]=h.toJSON(e.data)}const o={};let l=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],x=[];for(let v=0,_=h.length;v<_;v++){const M=h[v];x.push(M.toJSON(e.data))}x.length>0&&(o[u]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const m=this.boundingSphere;return m!==null&&(e.data.boundingSphere=m.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const x=o[h];this.setAttribute(h,x.clone(t))}const l=e.morphAttributes;for(const h in l){const x=[],v=l[h];for(let _=0,M=v.length;_<M;_++)x.push(v[_].clone(t));this.morphAttributes[h]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,x=d.length;h<x;h++){const v=d[h];this.addGroup(v.start,v.count,v.materialIndex)}const m=e.boundingBox;m!==null&&(this.boundingBox=m.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dd=new pe,K_=new pe,Z_=new vt;class Dr{constructor(e=new pe(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=dd.subVectors(r,t).cross(K_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(dd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(d<0||d>1)?null:t.copy(e.start).addScaledVector(o,d)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Z_.getNormalMatrix(e),o=this.coplanarPoint(dd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let J_=0;class uo extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=lo(),this.name="",this.type="Material",this.blending=Ja,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=l0,this.blendDst=c0,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=v_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ju,this.stencilZFail=ju,this.stencilZPass=ju,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){gt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){gt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const d=[];for(const m in l){const u=l[m];delete u.metadata,d.push(u)}return d}if(t){const l=o(e.textures),d=o(e.images);l.length>0&&(r.textures=l),d.length>0&&(r.images=d)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ct().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Dr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Ft().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ft().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const sr=new pe,fd=new pe,Al=new pe,Cl=new pe;class Q_{constructor(e=new pe,t=new pe(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sr.copy(this.origin).addScaledVector(this.direction,t),sr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){fd.copy(e).add(t).multiplyScalar(.5),Al.copy(t).sub(e).normalize(),Cl.copy(this.origin).sub(fd);const l=e.distanceTo(t)*.5,d=-this.direction.dot(Al),m=Cl.dot(this.direction),u=-Cl.dot(Al),h=Cl.lengthSq(),x=Math.abs(1-d*d);let v,_,M,b;if(x>0)if(v=d*u-m,_=d*m-u,b=l*x,v>=0)if(_>=-b)if(_<=b){const C=1/x;v*=C,_*=C,M=v*(v+d*_+2*m)+_*(d*v+_+2*u)+h}else _=l,v=Math.max(0,-(d*_+m)),M=-v*v+_*(_+2*u)+h;else _=-l,v=Math.max(0,-(d*_+m)),M=-v*v+_*(_+2*u)+h;else _<=-b?(v=Math.max(0,-(-d*l+m)),_=v>0?-l:Math.min(Math.max(-l,-u),l),M=-v*v+_*(_+2*u)+h):_<=b?(v=0,_=Math.min(Math.max(-l,-u),l),M=_*(_+2*u)+h):(v=Math.max(0,-(d*l+m)),_=v>0?l:Math.min(Math.max(-l,-u),l),M=-v*v+_*(_+2*u)+h);else _=d>0?-l:l,v=Math.max(0,-(d*_+m)),M=-v*v+_*(_+2*u)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(fd).addScaledVector(Al,_),M}intersectSphere(e,t){if(e.radius<0)return null;sr.subVectors(e.center,this.origin);const r=sr.dot(this.direction),o=sr.dot(sr)-r*r,l=e.radius*e.radius;if(o>l)return null;const d=Math.sqrt(l-o),m=r-d,u=r+d;return u<0?null:m<0?this.at(u,t):this.at(m,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,d,m,u;const h=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,_=this.origin;return h>=0?(r=(e.min.x-_.x)*h,o=(e.max.x-_.x)*h):(r=(e.max.x-_.x)*h,o=(e.min.x-_.x)*h),x>=0?(l=(e.min.y-_.y)*x,d=(e.max.y-_.y)*x):(l=(e.max.y-_.y)*x,d=(e.min.y-_.y)*x),r>d||l>o||((l>r||isNaN(r))&&(r=l),(d<o||isNaN(o))&&(o=d),v>=0?(m=(e.min.z-_.z)*v,u=(e.max.z-_.z)*v):(m=(e.max.z-_.z)*v,u=(e.min.z-_.z)*v),r>u||m>o)||((m>r||r!==r)&&(r=m),(u<o||o!==o)&&(o=u),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,sr)!==null}intersectTriangle(e,t,r,o,l){const d=this.origin,m=this.direction,u=m.x,h=m.y,x=m.z,v=e.x-d.x,_=e.y-d.y,M=e.z-d.z,b=t.x-d.x,C=t.y-d.y,y=t.z-d.z,S=r.x-d.x,R=r.y-d.y,F=r.z-d.z,P=Math.abs(u),z=Math.abs(h),D=Math.abs(x);let w,N,ee,X,G,W,V,H,O,re,K,j;if(P>=z&&P>=D?(ee=u,W=v,O=b,j=S,u>=0?(w=h,N=x,X=_,G=M,V=C,H=y,re=R,K=F):(w=x,N=h,X=M,G=_,V=y,H=C,re=F,K=R)):z>=D?(ee=h,W=_,O=C,j=R,h>=0?(w=x,N=u,X=M,G=v,V=y,H=b,re=F,K=S):(w=u,N=x,X=v,G=M,V=b,H=y,re=S,K=F)):(ee=x,W=M,O=y,j=F,x>=0?(w=u,N=h,X=v,G=_,V=b,H=C,re=S,K=R):(w=h,N=u,X=_,G=v,V=C,H=b,re=R,K=S)),ee===0)return null;const $=w/ee,Y=N/ee,L=1/ee,ne=X-$*W,be=G-Y*W,U=V-$*O,_e=H-Y*O,Me=re-$*j,De=K-Y*j,Se=Me*_e-De*U,Fe=ne*De-be*Me,ut=U*be-_e*ne;if(o){if(Se<0||Fe<0||ut<0)return null}else if((Se<0||Fe<0||ut<0)&&(Se>0||Fe>0||ut>0))return null;const je=Se+Fe+ut;if(je===0)return null;const Te=L*(Se*W+Fe*O+ut*j);return(je>0?Te<0:Te>0)?null:this.at(Te/je,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class U0 extends uo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gr,this.combine=u0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Sm=new ln,as=new Q_,Rl=new Mf,Mm=new pe,Nl=new pe,Pl=new pe,Ll=new pe,hd=new pe,Dl=new pe,wm=new pe,Il=new pe;class Wn extends Bn{constructor(e=new cr,t=new U0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=o.length;l<d;l++){const m=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,d=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const m=this.morphTargetInfluences;if(l&&m){Dl.set(0,0,0);for(let u=0,h=l.length;u<h;u++){const x=m[u],v=l[u];x!==0&&(hd.fromBufferAttribute(v,e),d?Dl.addScaledVector(hd,x):Dl.addScaledVector(hd.sub(t),x))}t.add(Dl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Rl.copy(r.boundingSphere),Rl.applyMatrix4(l),as.copy(e.ray).recast(e.near),!(Rl.containsPoint(as.origin)===!1&&(as.intersectSphere(Rl,Mm)===null||as.origin.distanceToSquared(Mm)>(e.far-e.near)**2))&&(Sm.copy(l).invert(),as.copy(e.ray).applyMatrix4(Sm),!(r.boundingBox!==null&&as.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,r){let o;const l=this.geometry,d=this.material,m=l.index,u=l.attributes.position,h=l.attributes.uv,x=l.attributes.uv1,v=l.attributes.normal,_=l.groups,M=l.drawRange;if(m!==null)if(Array.isArray(d))for(let b=0,C=_.length;b<C;b++){const y=_[b],S=d[y.materialIndex],R=Math.max(y.start,M.start),F=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let P=R,z=F;P<z;P+=3){const D=m.getX(P),w=m.getX(P+1),N=m.getX(P+2);o=Ul(this,S,e,r,h,x,v,D,w,N),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const b=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let y=b,S=C;y<S;y+=3){const R=m.getX(y),F=m.getX(y+1),P=m.getX(y+2);o=Ul(this,d,e,r,h,x,v,R,F,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(u!==void 0)if(Array.isArray(d))for(let b=0,C=_.length;b<C;b++){const y=_[b],S=d[y.materialIndex],R=Math.max(y.start,M.start),F=Math.min(u.count,Math.min(y.start+y.count,M.start+M.count));for(let P=R,z=F;P<z;P+=3){const D=P,w=P+1,N=P+2;o=Ul(this,S,e,r,h,x,v,D,w,N),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const b=Math.max(0,M.start),C=Math.min(u.count,M.start+M.count);for(let y=b,S=C;y<S;y+=3){const R=y,F=y+1,P=y+2;o=Ul(this,d,e,r,h,x,v,R,F,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function ey(s,e,t,r,o,l,d,m){let u;if(e.side===kn?u=r.intersectTriangle(d,l,o,!0,m):u=r.intersectTriangle(o,l,d,e.side===fs,m),u===null)return null;Il.copy(m),Il.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(Il);return h<t.near||h>t.far?null:{distance:h,point:Il.clone(),object:s}}function Ul(s,e,t,r,o,l,d,m,u,h){s.getVertexPosition(m,Nl),s.getVertexPosition(u,Pl),s.getVertexPosition(h,Ll);const x=ey(s,e,t,r,Nl,Pl,Ll,wm);if(x){const v=new pe;Ai.getBarycoord(wm,Nl,Pl,Ll,v),o&&(x.uv=Ai.getInterpolatedAttribute(o,m,u,h,v,new Ft)),l&&(x.uv1=Ai.getInterpolatedAttribute(l,m,u,h,v,new Ft)),d&&(x.normal=Ai.getInterpolatedAttribute(d,m,u,h,v,new pe),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const _={a:m,b:u,c:h,normal:new pe,materialIndex:0};Ai.getNormal(Nl,Pl,Ll,_.normal),x.face=_,x.barycoord=v}return x}class ty extends On{constructor(e=null,t=1,r=1,o,l,d,m,u,h=Nn,x=Nn,v,_){super(null,d,m,u,h,x,o,l,v,_),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const os=new Mf,ny=new Ft(.5,.5),zl=new pe;class oo{constructor(e=new Dr,t=new Dr,r=new Dr,o=new Dr,l=new Dr,d=new Dr){this.planes=[e,t,r,o,l,d]}set(e,t,r,o,l,d){const m=this.planes;return m[0].copy(e),m[1].copy(t),m[2].copy(r),m[3].copy(o),m[4].copy(l),m[5].copy(d),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ci,r=!1){const o=this.planes,l=e.elements,d=l[0],m=l[1],u=l[2],h=l[3],x=l[4],v=l[5],_=l[6],M=l[7],b=l[8],C=l[9],y=l[10],S=l[11],R=l[12],F=l[13],P=l[14],z=l[15];if(o[0].setComponents(h-d,M-x,S-b,z-R).normalize(),o[1].setComponents(h+d,M+x,S+b,z+R).normalize(),o[2].setComponents(h+m,M+v,S+C,z+F).normalize(),o[3].setComponents(h-m,M-v,S-C,z-F).normalize(),r)o[4].setComponents(u,_,y,P).normalize(),o[5].setComponents(h-u,M-_,S-y,z-P).normalize();else if(o[4].setComponents(h-u,M-_,S-y,z-P).normalize(),t===Ci)o[5].setComponents(h+u,M+_,S+y,z+P).normalize();else if(t===ao)o[5].setComponents(u,_,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){os.center.set(0,0,0);const t=ny.distanceTo(e.center);return os.radius=.7071067811865476+t,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(zl.x=o.normal.x>0?e.max.x:e.min.x,zl.y=o.normal.y>0?e.max.y:e.min.y,zl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(zl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const bm=new ln;class wf{constructor(){this.coordinateSystem=Ci,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let o=0;o<t.length;o++){const l=t[o];bm.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),r[o]===void 0&&(r[o]=new oo),r[o].setFromProjectionMatrix(bm,l.coordinateSystem,l.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let o=0;o<e._count;o++)t[o]===void 0&&(t[o]=new oo),t[o].copy(r[o]);return this._count=e._count,this}clone(){return new wf().copy(this)}}class z0 extends On{constructor(e=[],t=na,r,o,l,d,m,u,h,x){super(e,t,r,o,l,d,m,u,h,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bf extends On{constructor(e,t,r,o,l,d,m,u,h){super(e,t,r,o,l,d,m,u,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ra extends On{constructor(e,t,r=Wi,o,l,d,m=Nn,u=Nn,h,x=Hr,v=1){if(x!==Hr&&x!==kr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:v};super(_,o,l,d,m,u,x,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class F0 extends ra{constructor(e,t=Wi,r=na,o,l,d=Nn,m=Nn,u,h=Hr){const x={width:e,height:e,depth:1},v=[x,x,x,x,x,x];super(e,e,t,r,o,l,d,m,u,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class k0 extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fo extends cr{constructor(e=1,t=1,r=1,o=1,l=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:d};const m=this;o=Math.floor(o),l=Math.floor(l),d=Math.floor(d);const u=[],h=[],x=[],v=[];let _=0,M=0;b("z","y","x",-1,-1,r,t,e,d,l,0),b("z","y","x",1,-1,r,t,-e,d,l,1),b("x","z","y",1,1,e,r,t,o,d,2),b("x","z","y",1,-1,e,r,-t,o,d,3),b("x","y","z",1,-1,e,t,r,o,l,4),b("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(u),this.setAttribute("position",new jn(h,3)),this.setAttribute("normal",new jn(x,3)),this.setAttribute("uv",new jn(v,2));function b(C,y,S,R,F,P,z,D,w,N,ee){const X=P/w,G=z/N,W=P/2,V=z/2,H=D/2,O=w+1,re=N+1;let K=0,j=0;const $=new pe;for(let Y=0;Y<re;Y++){const L=Y*G-V;for(let ne=0;ne<O;ne++){const be=ne*X-W;$[C]=be*R,$[y]=L*F,$[S]=H,h.push($.x,$.y,$.z),$[C]=0,$[y]=0,$[S]=D>0?1:-1,x.push($.x,$.y,$.z),v.push(ne/w),v.push(1-Y/N),K+=1}}for(let Y=0;Y<N;Y++)for(let L=0;L<w;L++){const ne=_+L+O*Y,be=_+L+O*(Y+1),U=_+(L+1)+O*(Y+1),_e=_+(L+1)+O*Y;u.push(ne,be,_e),u.push(be,U,_e),j+=6}m.addGroup(M,j,ee),M+=j,_+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ho extends cr{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,d=t/2,m=Math.floor(r),u=Math.floor(o),h=m+1,x=u+1,v=e/m,_=t/u,M=[],b=[],C=[],y=[];for(let S=0;S<x;S++){const R=S*_-d;for(let F=0;F<h;F++){const P=F*v-l;b.push(P,-R,0),C.push(0,0,1),y.push(F/m),y.push(1-S/u)}}for(let S=0;S<u;S++)for(let R=0;R<m;R++){const F=R+h*S,P=R+h*(S+1),z=R+1+h*(S+1),D=R+1+h*S;M.push(F,P,D),M.push(P,z,D)}this.setIndex(M),this.setAttribute("position",new jn(b,3)),this.setAttribute("normal",new jn(C,3)),this.setAttribute("uv",new jn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ho(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ef extends cr{constructor(e=.5,t=1,r=32,o=1,l=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:d},r=Math.max(3,r),o=Math.max(1,o);const m=[],u=[],h=[],x=[];let v=e;const _=(t-e)/o,M=new pe,b=new Ft;for(let C=0;C<=o;C++){for(let y=0;y<=r;y++){const S=l+y/r*d;M.x=v*Math.cos(S),M.y=v*Math.sin(S),u.push(M.x,M.y,M.z),h.push(0,0,1),b.x=(M.x/t+1)/2,b.y=(M.y/t+1)/2,x.push(b.x,b.y)}v+=_}for(let C=0;C<o;C++){const y=C*(r+1);for(let S=0;S<r;S++){const R=S+y,F=R,P=R+r+1,z=R+r+2,D=R+1;m.push(F,P,D),m.push(P,z,D)}}this.setIndex(m),this.setAttribute("position",new jn(u,3)),this.setAttribute("normal",new jn(h,3)),this.setAttribute("uv",new jn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ef(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ir extends cr{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,d=0,m=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:d,thetaLength:m},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const u=Math.min(d+m,Math.PI);let h=0;const x=[],v=new pe,_=new pe,M=[],b=[],C=[],y=[];for(let S=0;S<=r;S++){const R=[],F=S/r,P=d+F*m,z=e*Math.cos(P),D=Math.sqrt(e*e-z*z);let w=0;S===0&&d===0?w=.5/t:S===r&&u===Math.PI&&(w=-.5/t);for(let N=0;N<=t;N++){const ee=N/t,X=o+ee*l;v.x=-D*Math.cos(X),v.y=z,v.z=D*Math.sin(X),b.push(v.x,v.y,v.z),_.copy(v).normalize(),C.push(_.x,_.y,_.z),y.push(ee+w,1-F),R.push(h++)}x.push(R)}for(let S=0;S<r;S++)for(let R=0;R<t;R++){const F=x[S][R+1],P=x[S][R],z=x[S+1][R],D=x[S+1][R+1];(S!==0||d>0)&&M.push(F,P,D),(S!==r-1||u<Math.PI)&&M.push(P,z,D)}this.setIndex(M),this.setAttribute("position",new jn(b,3)),this.setAttribute("normal",new jn(C,3)),this.setAttribute("uv",new jn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ir(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function sa(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(Em(o))o.isRenderTargetTexture?(gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Em(o[0])){const l=[];for(let d=0,m=o.length;d<m;d++)l[d]=o[d].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Vn(s){const e={};for(let t=0;t<s.length;t++){const r=sa(s[t]);for(const o in r)e[o]=r[o]}return e}function Em(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function iy(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function O0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const ry={clone:sa,merge:Vn};var sy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ay=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends uo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sy,this.fragmentShader=ay,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sa(e.uniforms),this.uniformsGroups=iy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?t.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[o]={type:"m4",value:d.toArray()}:t.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new Ct().setHex(o.value);break;case"v2":this.uniforms[r].value=new Ft().fromArray(o.value);break;case"v3":this.uniforms[r].value=new pe().fromArray(o.value);break;case"v4":this.uniforms[r].value=new on().fromArray(o.value);break;case"m3":this.uniforms[r].value=new vt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new ln().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class oy extends Ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pd extends uo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rf,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ly extends uo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=g_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cy extends uo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class B0 extends Bn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const md=new ln,Tm=new pe,Am=new pe;class uy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new ln,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oo,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Tm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tm),Am.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Am),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,o){md.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(md,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,d=o?o.z/l.x:1,m=o?o.w/l.y:1,u=o?o.x/l.x:0,h=o?o.y/l.y:0;e.coordinateSystem===ao||e.reversedDepth?t.set(.5*d,0,0,.5*d+u,0,.5*m,0,.5*m+h,0,0,1,0,0,0,0,1):t.set(.5*d,0,0,.5*d+u,0,.5*m,0,.5*m+h,0,0,.5,.5,0,0,0,1),t.multiply(md)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Fl=new pe,kl=new aa,Fi=new pe;class H0 extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fl,kl,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fl,kl,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Fl,kl,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fl,kl,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Lr=new pe,Cm=new Ft,Rm=new Ft;class Ti extends H0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($u*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sf*2*Math.atan(Math.tan($u*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z),Lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z)}getViewSize(e,t){return this.getViewBounds(e,Cm,Rm),t.subVectors(Rm,Cm)}setViewOffset(e,t,r,o,l,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($u*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const u=d.fullWidth,h=d.fullHeight;l+=d.offsetX*o/u,t-=d.offsetY*r/h,o*=d.width/u,r*=d.height/h}const m=this.filmOffset;m!==0&&(l+=e*m/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class G0 extends H0{constructor(e=-1,t=1,r=1,o=-1,l=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,d=r+e,m=o+t,u=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,d=l+h*this.view.width,m-=x*this.view.offsetY,u=m-x*this.view.height}this.projectionMatrix.makeOrthographic(l,d,m,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class dy extends uy{constructor(){super(new G0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fy extends B0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.target=new Bn,this.shadow=new dy}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class hy extends B0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ks=-90,Zs=1;class af extends Bn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ti(Ks,Zs,e,t);o.layers=this.layers,this.add(o);const l=new Ti(Ks,Zs,e,t);l.layers=this.layers,this.add(l);const d=new Ti(Ks,Zs,e,t);d.layers=this.layers,this.add(d);const m=new Ti(Ks,Zs,e,t);m.layers=this.layers,this.add(m);const u=new Ti(Ks,Zs,e,t);u.layers=this.layers,this.add(u);const h=new Ti(Ks,Zs,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,d,m,u]=t;for(const h of t)this.remove(h);if(e===Ci)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),m.up.set(0,1,0),m.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===ao)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),m.up.set(0,-1,0),m.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,d,m,u,h,x]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.mipmapsAutoUpdate=C,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,x),e.setRenderTarget(v,_,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class py extends Ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Nm(s,e,t,r){const o=my(r);switch(t){case w0:return s*e;case E0:return s*e/o.components*o.byteLength;case xf:return s*e/o.components*o.byteLength;case hs:return s*e*2/o.components*o.byteLength;case vf:return s*e*2/o.components*o.byteLength;case b0:return s*e*3/o.components*o.byteLength;case Gi:return s*e*4/o.components*o.byteLength;case _f:return s*e*4/o.components*o.byteLength;case Gl:case Vl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Wl:case jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cd:case Nd:return Math.max(s,16)*Math.max(e,8)/4;case Ad:case Rd:return Math.max(s,8)*Math.max(e,8)/2;case Pd:case Ld:case Id:case Ud:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Dd:case Kl:case zd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Od:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case jd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case $d:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Xd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Yd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case qd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Kd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Zd:case Jd:case Qd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ef:case tf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Zl:case nf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function my(s){switch(s){case ai:case _0:return{byteLength:1,components:1};case so:case y0:case ji:return{byteLength:2,components:1};case mf:case gf:return{byteLength:2,components:4};case Wi:case pf:case Hi:return{byteLength:4,components:1};case S0:case M0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hf}}));typeof window<"u"&&(window.__THREE__?gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function V0(){let s=null,e=!1,t=null,r=null;function o(l,d){r=s.requestAnimationFrame(o),t(l,d)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function gy(s){const e=new WeakMap;function t(m,u){const h=m.array,x=m.usage,v=h.byteLength,_=s.createBuffer();s.bindBuffer(u,_),s.bufferData(u,h,x),m.onUploadCallback();let M;if(h instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=s.HALF_FLOAT;else if(h instanceof Uint16Array)m.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=s.SHORT;else if(h instanceof Uint32Array)M=s.UNSIGNED_INT;else if(h instanceof Int32Array)M=s.INT;else if(h instanceof Int8Array)M=s.BYTE;else if(h instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:m.version,size:v}}function r(m,u,h){const x=u.array,v=u.updateRanges;if(s.bindBuffer(h,m),v.length===0)s.bufferSubData(h,0,x);else{v.sort((M,b)=>M.start-b.start);let _=0;for(let M=1;M<v.length;M++){const b=v[_],C=v[M];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++_,v[_]=C)}v.length=_+1;for(let M=0,b=v.length;M<b;M++){const C=v[M];s.bufferSubData(h,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}u.clearUpdateRanges()}u.onUploadCallback()}function o(m){return m.isInterleavedBufferAttribute&&(m=m.data),e.get(m)}function l(m){m.isInterleavedBufferAttribute&&(m=m.data);const u=e.get(m);u&&(s.deleteBuffer(u.buffer),e.delete(m))}function d(m,u){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const x=e.get(m);(!x||x.version<m.version)&&e.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const h=e.get(m);if(h===void 0)e.set(m,t(m,u));else if(h.version<m.version){if(h.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,m,u),h.version=m.version}}return{get:o,remove:l,update:d}}var xy=`#ifdef USE_ALPHAHASH
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
#endif`,My=`#ifdef USE_ALPHATEST
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
#endif`,by=`#ifdef USE_AOMAP
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
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Iy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Fy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ky=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,eS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iS=`#ifdef USE_GRADIENTMAP
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
}`,rS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,lS=`#ifdef USE_ENVMAP
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
#endif`,cS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hS=`PhysicalMaterial material;
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
#endif`,pS=`uniform sampler2D dfgLUT;
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
}`,mS=`
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
#endif`,gS=`#if defined( RE_IndirectDiffuse )
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
#endif`,xS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vS=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,_S=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ES=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,TS=`#if defined( USE_POINTS_UV )
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
#endif`,AS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NS=`#if defined( USE_MORPHCOLORS )
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
#endif`,PS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LS=`#ifdef USE_MORPHTARGETS
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
#endif`,DS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,US=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,OS=`#ifdef USE_NORMALMAP
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
#endif`,BS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,VS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$S=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,YS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,t1=`float getShadowMask() {
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
}`,n1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i1=`#ifdef USE_SKINNING
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
#endif`,r1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,s1=`#ifdef USE_SKINNING
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
#endif`,a1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,o1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,c1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,u1=`#ifdef USE_TRANSMISSION
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
#endif`,d1=`#ifdef USE_TRANSMISSION
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
#endif`,f1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const g1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x1=`uniform sampler2D t2D;
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
}`,v1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_1=`uniform float backgroundBlurriness;
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
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M1=`#include <common>
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
}`,w1=`#if DEPTH_PACKING == 3200
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
}`,b1=`#define DISTANCE
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
}`,E1=`#define DISTANCE
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
}`,T1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C1=`uniform float scale;
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
}`,R1=`uniform vec3 diffuse;
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
}`,N1=`#include <common>
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
}`,P1=`uniform vec3 diffuse;
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
}`,L1=`#define LAMBERT
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
}`,D1=`#define LAMBERT
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
}`,I1=`#define MATCAP
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
}`,U1=`#define MATCAP
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
}`,z1=`#define NORMAL
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
}`,F1=`#define NORMAL
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
}`,k1=`#define PHONG
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
}`,O1=`#define PHONG
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
}`,B1=`#define STANDARD
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
}`,H1=`#define STANDARD
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
}`,G1=`#define TOON
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
}`,V1=`#define TOON
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
}`,W1=`uniform float size;
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
}`,j1=`uniform vec3 diffuse;
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
}`,$1=`#include <common>
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
}`,X1=`uniform vec3 color;
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
}`,Y1=`uniform float rotation;
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
}`,q1=`uniform vec3 diffuse;
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
}`,wt={alphahash_fragment:xy,alphahash_pars_fragment:vy,alphamap_fragment:_y,alphamap_pars_fragment:yy,alphatest_fragment:Sy,alphatest_pars_fragment:My,aomap_fragment:wy,aomap_pars_fragment:by,batching_pars_vertex:Ey,batching_vertex:Ty,begin_vertex:Ay,beginnormal_vertex:Cy,bsdfs:Ry,iridescence_fragment:Ny,bumpmap_pars_fragment:Py,clipping_planes_fragment:Ly,clipping_planes_pars_fragment:Dy,clipping_planes_pars_vertex:Iy,clipping_planes_vertex:Uy,color_fragment:zy,color_pars_fragment:Fy,color_pars_vertex:ky,color_vertex:Oy,common:By,defaultnormal_vertex:Hy,displacementmap_pars_vertex:Gy,displacementmap_vertex:Vy,emissivemap_fragment:Wy,emissivemap_pars_fragment:jy,colorspace_fragment:$y,colorspace_pars_fragment:Xy,envmap_fragment:Yy,envmap_common_pars_fragment:qy,envmap_pars_fragment:Ky,envmap_pars_vertex:Zy,envmap_physical_pars_fragment:lS,envmap_vertex:Jy,fog_vertex:Qy,fog_pars_vertex:eS,fog_fragment:tS,fog_pars_fragment:nS,gradientmap_pars_fragment:iS,lightmap_pars_fragment:rS,lights_lambert_fragment:sS,lights_lambert_pars_fragment:aS,lights_pars_begin:oS,lights_toon_fragment:cS,lights_toon_pars_fragment:uS,lights_phong_fragment:dS,lights_phong_pars_fragment:fS,lights_physical_fragment:hS,lights_physical_pars_fragment:pS,lights_fragment_begin:mS,lights_fragment_maps:gS,lights_fragment_end:xS,lightprobes_pars_fragment:vS,logdepthbuf_fragment:_S,logdepthbuf_pars_fragment:yS,logdepthbuf_pars_vertex:SS,logdepthbuf_vertex:MS,map_fragment:wS,map_pars_fragment:bS,map_particle_fragment:ES,map_particle_pars_fragment:TS,metalnessmap_fragment:AS,metalnessmap_pars_fragment:CS,morphinstance_vertex:RS,morphcolor_vertex:NS,morphnormal_vertex:PS,morphtarget_pars_vertex:LS,morphtarget_vertex:DS,normal_fragment_begin:IS,normal_fragment_maps:US,normal_pars_fragment:zS,normal_pars_vertex:FS,normal_vertex:kS,normalmap_pars_fragment:OS,clearcoat_normal_fragment_begin:BS,clearcoat_normal_fragment_maps:HS,clearcoat_pars_fragment:GS,iridescence_pars_fragment:VS,opaque_fragment:WS,packing:jS,premultiplied_alpha_fragment:$S,project_vertex:XS,dithering_fragment:YS,dithering_pars_fragment:qS,roughnessmap_fragment:KS,roughnessmap_pars_fragment:ZS,shadowmap_pars_fragment:JS,shadowmap_pars_vertex:QS,shadowmap_vertex:e1,shadowmask_pars_fragment:t1,skinbase_vertex:n1,skinning_pars_vertex:i1,skinning_vertex:r1,skinnormal_vertex:s1,specularmap_fragment:a1,specularmap_pars_fragment:o1,tonemapping_fragment:l1,tonemapping_pars_fragment:c1,transmission_fragment:u1,transmission_pars_fragment:d1,uv_pars_fragment:f1,uv_pars_vertex:h1,uv_vertex:p1,worldpos_vertex:m1,background_vert:g1,background_frag:x1,backgroundCube_vert:v1,backgroundCube_frag:_1,cube_vert:y1,cube_frag:S1,depth_vert:M1,depth_frag:w1,distance_vert:b1,distance_frag:E1,equirect_vert:T1,equirect_frag:A1,linedashed_vert:C1,linedashed_frag:R1,meshbasic_vert:N1,meshbasic_frag:P1,meshlambert_vert:L1,meshlambert_frag:D1,meshmatcap_vert:I1,meshmatcap_frag:U1,meshnormal_vert:z1,meshnormal_frag:F1,meshphong_vert:k1,meshphong_frag:O1,meshphysical_vert:B1,meshphysical_frag:H1,meshtoon_vert:G1,meshtoon_frag:V1,points_vert:W1,points_frag:j1,shadow_vert:$1,shadow_frag:X1,sprite_vert:Y1,sprite_frag:q1},Ke={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Oi={basic:{uniforms:Vn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:Vn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Ct(0)},envMapIntensity:{value:1}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:Vn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:Vn([Ke.common,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.roughnessmap,Ke.metalnessmap,Ke.fog,Ke.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:Vn([Ke.common,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.gradientmap,Ke.fog,Ke.lights,{emissive:{value:new Ct(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:Vn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:Vn([Ke.points,Ke.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:Vn([Ke.common,Ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:Vn([Ke.common,Ke.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:Vn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:Vn([Ke.sprite,Ke.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distance:{uniforms:Vn([Ke.common,Ke.displacementmap,{referencePosition:{value:new pe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distance_vert,fragmentShader:wt.distance_frag},shadow:{uniforms:Vn([Ke.lights,Ke.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};Oi.physical={uniforms:Vn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const Ol={r:0,b:0,g:0},K1=new ln,W0=new vt;W0.set(-1,0,0,0,1,0,0,0,1);function Z1(s,e,t,r,o,l){const d=new Ct(0);let m=o===!0?0:1,u,h,x=null,v=0,_=null;function M(R){let F=R.isScene===!0?R.background:null;if(F&&F.isTexture){const P=R.backgroundBlurriness>0;F=e.get(F,P)}return F}function b(R){let F=!1;const P=M(R);P===null?y(d,m):P&&P.isColor&&(y(P,1),F=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?t.buffers.color.setClear(0,0,0,1,l):z==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||F)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(R,F){const P=M(F);P&&P.isCubeTexture?(h===void 0&&(h=new Wn(new fo(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:sa(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(z,D,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=P,h.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(K1.makeRotationFromEuler(F.backgroundRotation)).transpose(),P.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(W0),h.material.toneMapped=Ut.getTransfer(P.colorSpace)!==$t,(x!==P||v!==P.version||_!==s.toneMapping)&&(h.material.needsUpdate=!0,x=P,v=P.version,_=s.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(u===void 0&&(u=new Wn(new ho(2,2),new Ri({name:"BackgroundMaterial",uniforms:sa(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=P,u.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,u.material.toneMapped=Ut.getTransfer(P.colorSpace)!==$t,P.matrixAutoUpdate===!0&&P.updateMatrix(),u.material.uniforms.uvTransform.value.copy(P.matrix),(x!==P||v!==P.version||_!==s.toneMapping)&&(u.material.needsUpdate=!0,x=P,v=P.version,_=s.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null))}function y(R,F){R.getRGB(Ol,O0(s)),t.buffers.color.setClear(Ol.r,Ol.g,Ol.b,F,l)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return d},setClearColor:function(R,F=1){d.set(R),m=F,y(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(R){m=R,y(d,m)},render:b,addToRenderList:C,dispose:S}}function J1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=_(null);let l=o,d=!1;function m(G,W,V,H,O){let re=!1;const K=v(G,H,V,W);l!==K&&(l=K,h(l.object)),re=M(G,H,V,O),re&&b(G,H,V,O),O!==null&&e.update(O,s.ELEMENT_ARRAY_BUFFER),(re||d)&&(d=!1,P(G,W,V,H),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function u(){return s.createVertexArray()}function h(G){return s.bindVertexArray(G)}function x(G){return s.deleteVertexArray(G)}function v(G,W,V,H){const O=H.wireframe===!0;let re=r[W.id];re===void 0&&(re={},r[W.id]=re);const K=G.isInstancedMesh===!0?G.id:0;let j=re[K];j===void 0&&(j={},re[K]=j);let $=j[V.id];$===void 0&&($={},j[V.id]=$);let Y=$[O];return Y===void 0&&(Y=_(u()),$[O]=Y),Y}function _(G){const W=[],V=[],H=[];for(let O=0;O<t;O++)W[O]=0,V[O]=0,H[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:V,attributeDivisors:H,object:G,attributes:{},index:null}}function M(G,W,V,H){const O=l.attributes,re=W.attributes;let K=0;const j=V.getAttributes();for(const $ in j)if(j[$].location>=0){const L=O[$];let ne=re[$];if(ne===void 0&&($==="instanceMatrix"&&G.instanceMatrix&&(ne=G.instanceMatrix),$==="instanceColor"&&G.instanceColor&&(ne=G.instanceColor)),L===void 0||L.attribute!==ne||ne&&L.data!==ne.data)return!0;K++}return l.attributesNum!==K||l.index!==H}function b(G,W,V,H){const O={},re=W.attributes;let K=0;const j=V.getAttributes();for(const $ in j)if(j[$].location>=0){let L=re[$];L===void 0&&($==="instanceMatrix"&&G.instanceMatrix&&(L=G.instanceMatrix),$==="instanceColor"&&G.instanceColor&&(L=G.instanceColor));const ne={};ne.attribute=L,L&&L.data&&(ne.data=L.data),O[$]=ne,K++}l.attributes=O,l.attributesNum=K,l.index=H}function C(){const G=l.newAttributes;for(let W=0,V=G.length;W<V;W++)G[W]=0}function y(G){S(G,0)}function S(G,W){const V=l.newAttributes,H=l.enabledAttributes,O=l.attributeDivisors;V[G]=1,H[G]===0&&(s.enableVertexAttribArray(G),H[G]=1),O[G]!==W&&(s.vertexAttribDivisor(G,W),O[G]=W)}function R(){const G=l.newAttributes,W=l.enabledAttributes;for(let V=0,H=W.length;V<H;V++)W[V]!==G[V]&&(s.disableVertexAttribArray(V),W[V]=0)}function F(G,W,V,H,O,re,K){K===!0?s.vertexAttribIPointer(G,W,V,O,re):s.vertexAttribPointer(G,W,V,H,O,re)}function P(G,W,V,H){C();const O=H.attributes,re=V.getAttributes(),K=W.defaultAttributeValues;for(const j in re){const $=re[j];if($.location>=0){let Y=O[j];if(Y===void 0&&(j==="instanceMatrix"&&G.instanceMatrix&&(Y=G.instanceMatrix),j==="instanceColor"&&G.instanceColor&&(Y=G.instanceColor)),Y!==void 0){const L=Y.normalized,ne=Y.itemSize,be=e.get(Y);if(be===void 0)continue;const U=be.buffer,_e=be.type,Me=be.bytesPerElement,De=_e===s.INT||_e===s.UNSIGNED_INT||Y.gpuType===pf;if(Y.isInterleavedBufferAttribute){const Se=Y.data,Fe=Se.isInterleavedBuffer===!0?Se.stride:Se.itemSize,ut=Y.offset;if(Se.isInstancedInterleavedBuffer||Se.isInstancedBufferAttribute){for(let je=0;je<$.locationSize;je++)S($.location+je,Se.meshPerAttribute);G.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let je=0;je<$.locationSize;je++)y($.location+je);s.bindBuffer(s.ARRAY_BUFFER,U);for(let je=0;je<$.locationSize;je++)F($.location+je,ne/$.locationSize,_e,L,Fe*Me,(ut+ne/$.locationSize*je)*Me,De)}else{if(Y.isInstancedBufferAttribute){for(let Se=0;Se<$.locationSize;Se++)S($.location+Se,Y.meshPerAttribute);G.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Se=0;Se<$.locationSize;Se++)y($.location+Se);s.bindBuffer(s.ARRAY_BUFFER,U);for(let Se=0;Se<$.locationSize;Se++)F($.location+Se,ne/$.locationSize,_e,L,ne*Me,ne/$.locationSize*Se*Me,De)}}else if(K!==void 0){const L=K[j];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv($.location,L);break;case 3:s.vertexAttrib3fv($.location,L);break;case 4:s.vertexAttrib4fv($.location,L);break;default:s.vertexAttrib1fv($.location,L)}}}}R()}function z(){ee();for(const G in r){const W=r[G];for(const V in W){const H=W[V];for(const O in H){const re=H[O];for(const K in re)x(re[K].object),delete re[K];delete H[O]}}delete r[G]}}function D(G){if(r[G.id]===void 0)return;const W=r[G.id];for(const V in W){const H=W[V];for(const O in H){const re=H[O];for(const K in re)x(re[K].object),delete re[K];delete H[O]}}delete r[G.id]}function w(G){for(const W in r){const V=r[W];for(const H in V){const O=V[H];if(O[G.id]===void 0)continue;const re=O[G.id];for(const K in re)x(re[K].object),delete re[K];delete O[G.id]}}}function N(G){for(const W in r){const V=r[W],H=G.isInstancedMesh===!0?G.id:0,O=V[H];if(O!==void 0){for(const re in O){const K=O[re];for(const j in K)x(K[j].object),delete K[j];delete O[re]}delete V[H],Object.keys(V).length===0&&delete r[W]}}}function ee(){X(),d=!0,l!==o&&(l=o,h(l.object))}function X(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:m,reset:ee,resetDefaultState:X,dispose:z,releaseStatesOfGeometry:D,releaseStatesOfObject:N,releaseStatesOfProgram:w,initAttributes:C,enableAttribute:y,disableUnusedAttributes:R}}function Q1(s,e,t){let r;function o(u){r=u}function l(u,h){s.drawArrays(r,u,h),t.update(h,r,1)}function d(u,h,x){x!==0&&(s.drawArraysInstanced(r,u,h,x),t.update(h,r,x))}function m(u,h,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,u,0,h,0,x);let _=0;for(let M=0;M<x;M++)_+=h[M];t.update(_,r,1)}this.setMode=o,this.render=l,this.renderInstances=d,this.renderMultiDraw=m}function eM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(w){return!(w!==Gi&&r.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(w){const N=w===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ai&&w!==Hi&&!N&&r.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function u(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const x=u(h);x!==h&&(gt("WebGLRenderer:",h,"not supported, using",x,"instead."),h=x);const v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),_=t.logarithmicDepthBuffer===!0&&v===!1;t.reversedDepthBuffer===!0&&v===!1&&gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&v===!0&&gt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),R=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),F=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=s.getParameter(s.MAX_SAMPLES),D=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:u,textureFormatReadable:d,textureTypeReadable:m,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:M,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:R,maxVaryings:F,maxFragmentUniforms:P,maxSamples:z,samples:D}}function tM(s){const e=this;let t=null,r=0,o=!1,l=!1;const d=new Dr,m=new vt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const M=v.length!==0||_||r!==0||o;return o=_,r=v.length,M},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,_){t=x(v,_,0)},this.setState=function(v,_,M){const b=v.clippingPlanes,C=v.clipIntersection,y=v.clipShadows,S=s.get(v);if(!o||b===null||b.length===0||l&&!y)l?x(null):h();else{const R=l?0:r,F=R*4;let P=S.clippingState||null;u.value=P,P=x(b,_,F,M);for(let z=0;z!==F;++z)P[z]=t[z];S.clippingState=P,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=R}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(v,_,M,b){const C=v!==null?v.length:0;let y=null;if(C!==0){if(y=u.value,b!==!0||y===null){const S=M+C*4,R=_.matrixWorldInverse;m.getNormalMatrix(R),(y===null||y.length<S)&&(y=new Float32Array(S));for(let F=0,P=M;F!==C;++F,P+=4)d.copy(v[F]).applyMatrix4(R,m),d.normal.toArray(y,P),y[P+3]=d.constant}u.value=y,u.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}class Tf extends Vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new z0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new fo(5,5,5),l=new Ri({name:"CubemapFromEquirect",uniforms:sa(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:ea});l.uniforms.tEquirect.value=t;const d=new Wn(o,l),m=t.minFilter;return t.minFilter===Fr&&(t.minFilter=Jn),new af(1,10,this).update(e,d),t.minFilter=m,d.geometry.dispose(),d.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,r,o);e.setRenderTarget(l)}}const Pm=256,nM=3,iM=20,j0=256,$0=16,rM=3,sM=new pe,aM=new Ct;class tc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new af(1,10,null),this._boxMesh=new Wn(new fo(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:d=256,position:m=sM}=l,u=this._renderer;this._setSize(d);const h=this._allocateTarget(),x=this._getSourceTarget(!0);t>0&&(x.texture.mipmapsAutoUpdate=!1);const v=u.autoClear,_=u.autoClearColor,M=u.autoClearDepth,b=u.autoClearStencil,C=e.background;u.autoClear=!0,u.autoClearColor=!0,u.autoClearDepth=!0,u.autoClearStencil=!0,C===null&&(e.background=u.getClearColor(aM));const y=new af(r,o,x);return y.position.copy(m),y.update(u,e),u.autoClear=v,u.autoClearColor=_,u.autoClearDepth=M,u.autoClearStencil=b,e.background=C,t>0&&(x.texture.mipmapsAutoUpdate=!0,this._blur(h,t)),this._applyPMREM(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Im(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Pm,N_(e))}_fromTexture(e,t){e.mapping===na||e.mapping===io?this._setSize(e.image.length===0?Pm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=Lm(e,!1,!1),r=Math.log2(e)-nM;for(let o=0;o<=r;o++)t.texture.mipmaps.push({width:e>>o,height:e>>o});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=Lm(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const o=this._boxMesh,l=this._cubeCamera;o.material=r,l.renderTarget=e,l.activeMipmapLevel=t;const d=e.width>>t;e.viewport.set(0,0,d,d),l.update(this._renderer,o),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===na||e.mapping===io?(this._cubemapMaterial===null&&(this._cubemapMaterial=Im()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Dm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=oM(),this._integrationMaterial=lM());const t=this._cubeSize,r=e.texture.mipmaps.length-1,o=this._ggxMaterial.uniforms;o.envMap.value=this._sourceTarget.texture;const l=this._integrationMaterial.uniforms;l.envMap.value=this._sourceTarget.texture,l.sourceLod.value=Math.log2(t/$0);for(let d=0;d<=r;d++){const m=tc.lodToRoughness(d,r);if(d>r-rM)l.roughness.value=m,this._renderCube(e,d,this._integrationMaterial);else{const u=m>0?Math.log2(t)+.5*Math.log2(6/(j0*Math.pow(m,4)))+.5:0;o.roughness.value=m,o.lodBias.value=u,this._renderCube(e,d,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=cM());const r=this._blurMaterial,o=r.uniforms,l=this._sourceTarget;o.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,o.envMap.value=l.texture,this._renderCube(e,0,r),o.envMap.value=e.texture,this._renderCube(l,0,r)}}function Lm(s,e,t){return new Tf(s,{minFilter:Fr,generateMipmaps:e,type:ji,colorSpace:Jl,depthBuffer:t})}function po(s,e,t){return new Ri({name:s,uniforms:e,vertexShader:wt.cube_vert,fragmentShader:t,side:kn,blending:ea,depthTest:!1,depthWrite:!1})}function oM(){return po("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${j0}u

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
	`)}function lM(){return po("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:$0}},`

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
	`)}function cM(){return po("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${iM}
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
	`)}function uM(s){let e=new WeakMap,t=new WeakMap,r=null;function o(_,M=!1){return _==null?null:M?d(_):l(_)}function l(_){if(_&&_.isTexture){const M=_.mapping;if(M===Gu||M===Vu)if(e.has(_)){const b=e.get(_).texture;return m(b,_.mapping)}else{const b=_.image;if(b&&b.height>0){const C=new Tf(b.height);return C.fromEquirectangularTexture(s,_),e.set(_,C),_.addEventListener("dispose",h),m(C.texture,_.mapping)}else return null}}return _}function d(_){if(_&&_.isTexture&&_.isPMREMTexture!==!0){const M=_.mapping,b=M===Gu||M===Vu,C=M===na||M===io;if(b||C){let y=t.get(_);const S=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==S)return r===null&&(r=new tc(s)),y=b?r.fromEquirectangular(_,y):r.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,t.set(_,y),y.texture;if(y!==void 0)return y.texture;{const R=_.image;return b&&R&&R.height>0||C&&R&&u(R)?(r===null&&(r=new tc(s)),y=b?r.fromEquirectangular(_):r.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,t.set(_,y),_.addEventListener("dispose",x),y.texture):null}}}return _}function m(_,M){return M===Gu?_.mapping=na:M===Vu&&(_.mapping=io),_}function u(_){let M=0;const b=6;for(let C=0;C<b;C++)_[C]!==void 0&&M++;return M===b}function h(_){const M=_.target;M.removeEventListener("dispose",h);const b=e.get(M);b!==void 0&&(e.delete(M),b.dispose())}function x(_){const M=_.target;M.removeEventListener("dispose",x);const b=t.get(M);b!==void 0&&(t.delete(M),b.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function dM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&$l("WebGLRenderer: "+r+" extension not supported."),o}}}function fM(s,e,t,r){const o={},l=new WeakMap,d=new FinalizationRegistry(b=>delete o[b]);function m(b){u(b.target)}function u(b){b.index!==null&&e.remove(b.index);for(const y in b.attributes)e.remove(b.attributes[y]);b.removeEventListener("dispose",m),delete o[b.id],d.unregister(b);const C=l.get(b);C&&(e.remove(C),l.delete(b)),r.releaseStatesOfGeometry(b),b.isInstancedBufferGeometry===!0&&delete b._maxInstanceCount,t.memory.geometries--}function h(b,C){return o[C.id]!==void 0||(C.addEventListener("dispose",m),o[C.id]=new WeakRef(C),d.register(C,C.id,C),t.memory.geometries++),C}function x(b){const C=b.attributes;for(const y in C)e.update(C[y],s.ARRAY_BUFFER)}function v(b){const C=b.index,y=b.attributes.position;let S=0;if(y===void 0)return;const R=C!==null?C.array.length:y.array.length/3-1,F=y.count>=65535?I0:D0,P=new F(Math.ceil(R/3)*6,1),z=P.array;if(C!==null){const w=C.array;S=C.version;for(let N=0,ee=0;N<R;N+=3){const X=w[N+0],G=w[N+1],W=w[N+2];z[ee++]=X,z[ee++]=G,z[ee++]=G,z[ee++]=W,z[ee++]=W,z[ee++]=X}}else{S=y.version;for(let w=0,N=0;w<R;w+=3){const ee=w+0,X=w+1,G=w+2;z[N++]=ee,z[N++]=X,z[N++]=X,z[N++]=G,z[N++]=G,z[N++]=ee}}P.version=S;const D=l.get(b);D&&e.remove(D),l.set(b,P)}function _(b){const C=l.get(b);if(C){const y=b.index;y!==null&&C.version<y.version&&v(b)}else v(b);return l.get(b)}function M(){for(const b in o){const C=o[b].deref();C!==void 0&&u(C)}}return{get:h,update:x,getWireframeAttribute:_,dispose:M}}function hM(s,e,t){let r;function o(v){r=v}let l,d;function m(v){l=v.type,d=v.bytesPerElement}function u(v,_){s.drawElements(r,_,l,v*d),t.update(_,r,1)}function h(v,_,M){M!==0&&(s.drawElementsInstanced(r,_,l,v*d,M),t.update(_,r,M))}function x(v,_,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,l,v,0,M);let C=0;for(let y=0;y<M;y++)C+=_[y];t.update(C,r,1)}this.setMode=o,this.setIndex=m,this.render=u,this.renderInstances=h,this.renderMultiDraw=x}function pM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,d,m){switch(t.calls++,d){case s.TRIANGLES:t.triangles+=m*(l/3);break;case s.LINES:t.lines+=m*(l/2);break;case s.LINE_STRIP:t.lines+=m*(l-1);break;case s.LINE_LOOP:t.lines+=m*l;break;case s.POINTS:t.points+=m*l;break;default:Vt("WebGLInfo: Unknown draw mode:",d);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function mM(s,e,t){const r=new WeakMap,o=new on;function l(d,m,u){const h=d.morphTargetInfluences,x=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,v=x!==void 0?x.length:0;let _=r.get(m);if(_===void 0||_.count!==v){let X=function(){N.dispose(),r.delete(m),m.removeEventListener("dispose",X)};var M=X;_!==void 0&&_.texture.dispose();const b=m.morphAttributes.position!==void 0,C=m.morphAttributes.normal!==void 0,y=m.morphAttributes.color!==void 0,S=m.morphAttributes.position||[],R=m.morphAttributes.normal||[],F=m.morphAttributes.color||[];let P=0;b===!0&&(P=1),C===!0&&(P=2),y===!0&&(P=3);let z=m.attributes.position.count*P,D=1;z>e.maxTextureSize&&(D=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const w=new Float32Array(z*D*4*v),N=new N0(w,z,D,v);N.type=Hi,N.needsUpdate=!0;const ee=P*4;for(let G=0;G<v;G++){const W=S[G],V=R[G],H=F[G],O=z*D*4*G;for(let re=0;re<W.count;re++){const K=re*ee;b===!0&&(o.fromBufferAttribute(W,re),w[O+K+0]=o.x,w[O+K+1]=o.y,w[O+K+2]=o.z,w[O+K+3]=0),C===!0&&(o.fromBufferAttribute(V,re),w[O+K+4]=o.x,w[O+K+5]=o.y,w[O+K+6]=o.z,w[O+K+7]=0),y===!0&&(o.fromBufferAttribute(H,re),w[O+K+8]=o.x,w[O+K+9]=o.y,w[O+K+10]=o.z,w[O+K+11]=H.itemSize===4?o.w:1)}}_={count:v,texture:N,size:new Ft(z,D)},r.set(m,_),m.addEventListener("dispose",X)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)u.getUniforms().setValue(s,"morphTexture",d.morphTexture,t);else{let b=0;for(let y=0;y<h.length;y++)b+=h[y];const C=m.morphTargetsRelative?1:1-b;u.getUniforms().setValue(s,"morphTargetBaseInfluence",C),u.getUniforms().setValue(s,"morphTargetInfluences",h)}u.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:l}}function gM(s,e,t,r,o){let l=new WeakMap;function d(h){const x=o.render.frame,v=h.geometry,_=e.get(h,v);if(l.get(_)!==x&&(e.update(_),l.set(_,x)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),l.get(h)!==x&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),l.set(h,x))),h.isSkinnedMesh){const M=h.skeleton;l.get(M)!==x&&(M.update(),l.set(M,x))}return _}function m(){l=new WeakMap}function u(h){const x=h.target;x.removeEventListener("dispose",u),r.releaseStatesOfObject(x),t.remove(x.instanceMatrix),x.instanceColor!==null&&t.remove(x.instanceColor)}return{update:d,dispose:m}}const xM={[d0]:"LINEAR_TONE_MAPPING",[f0]:"REINHARD_TONE_MAPPING",[h0]:"CINEON_TONE_MAPPING",[p0]:"ACES_FILMIC_TONE_MAPPING",[g0]:"AGX_TONE_MAPPING",[x0]:"NEUTRAL_TONE_MAPPING",[m0]:"CUSTOM_TONE_MAPPING"};function vM(s,e,t,r,o,l){const d=new Vi(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let m=null,u=null,h=null;const x=new cr;x.setAttribute("position",new jn([-1,3,0,-1,-1,0,3,-1,0],3)),x.setAttribute("uv",new jn([0,2,0,0,2,0],2));const v=new oy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new Wn(x,v),M=new G0(-1,1,1,-1,0,1);let b=null,C=null,y=!1,S,R=null,F=[],P=!1;this.setSize=function(z,D){d.setSize(z,D),m!==null&&m.setSize(z,D),u!==null&&u.setSize(z,D);for(let w=0;w<F.length;w++){const N=F[w];N.setSize&&N.setSize(z,D)}},this.setEffects=function(z){F=z,P=F.length>0&&F[0].isRenderPass===!0;const D=d.width,w=d.height;F.length>0&&m===null&&(m=new Vi(D,w,{type:ji,depthBuffer:!1,stencilBuffer:!1}),u=new Vi(D,w,{type:ji,depthBuffer:!1,stencilBuffer:!1}));const N=o===!0&&F.some(ee=>ee.needsDepthTexture===!0);N!==(d.depthTexture!==null)&&(N===!0&&h===null&&(h=new ra(D,w),l===!0&&(h.format=kr,h.type=ia)),d.dispose(),d.depthTexture=N?h:null,d.resolveDepthBuffer=N,d.storeMultisampledDepthBuffer=N);for(let ee=0;ee<F.length;ee++){const X=F[ee];X.setSize&&X.setSize(D,w),N&&X.needsDepthTexture===!0&&X.setDepthTexture&&X.setDepthTexture(h)}},this.begin=function(z,D){if(y||z.toneMapping===or&&F.length===0)return!1;if(R=D,D!==null){const w=D.width,N=D.height;(d.width!==w||d.height!==N)&&this.setSize(w,N)}return P===!1&&z.setRenderTarget(d),S=z.toneMapping,z.toneMapping=or,!0},this.hasRenderPass=function(){return P},this.end=function(z,D){z.toneMapping=S,y=!0;let w=d,N=m;for(let ee=0;ee<F.length;ee++){const X=F[ee];X.enabled!==!1&&(X.render(z,N,w,D),X.needsSwap!==!1&&(w=N,N=N===m?u:m))}if(b!==z.outputColorSpace||C!==z.toneMapping){b=z.outputColorSpace,C=z.toneMapping,v.defines={},Ut.getTransfer(b)===$t&&(v.defines.SRGB_TRANSFER="");const ee=xM[C];ee&&(v.defines[ee]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=w.texture,z.setRenderTarget(R),z.render(_,M),R=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){d.dispose(),m!==null&&m.dispose(),u!==null&&u.dispose(),x.dispose(),v.dispose()}}const X0=new On,Y0=new ra(1,1),q0=new F0(1),K0=new N0,Z0=new k_,J0=new z0,Um=[],zm=[],Fm=new Float32Array(16),km=new Float32Array(9),Om=new Float32Array(4);function oa(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=Um[o];if(l===void 0&&(l=new Float32Array(o),Um[o]=l),e!==0){r.toArray(l,0);for(let d=1,m=0;d!==e;++d)m+=t,s[d].toArray(l,m)}return l}function yn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Sn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function ac(s,e){let t=zm[e];t===void 0&&(t=new Int32Array(e),zm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function _M(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function yM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;s.uniform2fv(this.addr,e),Sn(t,e)}}function SM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yn(t,e))return;s.uniform3fv(this.addr,e),Sn(t,e)}}function MM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;s.uniform4fv(this.addr,e),Sn(t,e)}}function wM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(yn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Sn(t,e)}else{if(yn(t,r))return;Om.set(r),s.uniformMatrix2fv(this.addr,!1,Om),Sn(t,r)}}function bM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(yn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Sn(t,e)}else{if(yn(t,r))return;km.set(r),s.uniformMatrix3fv(this.addr,!1,km),Sn(t,r)}}function EM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(yn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Sn(t,e)}else{if(yn(t,r))return;Fm.set(r),s.uniformMatrix4fv(this.addr,!1,Fm),Sn(t,r)}}function TM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function AM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;s.uniform2iv(this.addr,e),Sn(t,e)}}function CM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;s.uniform3iv(this.addr,e),Sn(t,e)}}function RM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;s.uniform4iv(this.addr,e),Sn(t,e)}}function NM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function PM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;s.uniform2uiv(this.addr,e),Sn(t,e)}}function LM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;s.uniform3uiv(this.addr,e),Sn(t,e)}}function DM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;s.uniform4uiv(this.addr,e),Sn(t,e)}}function oc(s){return s.version===0&&(s.compareFunction=C0,s.needsUpdate=!0),s}function IM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?l=oc(Y0):l=X0,t.setTexture2D(e||l,o)}function UM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Z0,o)}function zM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_CUBE_SHADOW?l=oc(q0):l=J0,t.setTextureCube(e||l,o)}function FM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||K0,o)}function kM(s){switch(s){case 5126:return _M;case 35664:return yM;case 35665:return SM;case 35666:return MM;case 35674:return wM;case 35675:return bM;case 35676:return EM;case 5124:case 35670:return TM;case 35667:case 35671:return AM;case 35668:case 35672:return CM;case 35669:case 35673:return RM;case 5125:return NM;case 36294:return PM;case 36295:return LM;case 36296:return DM;case 35678:case 36198:case 36298:case 36306:case 35682:return IM;case 35679:case 36299:case 36307:return UM;case 35680:case 36300:case 36308:case 36293:return zM;case 36289:case 36303:case 36311:case 36292:return FM}}function OM(s,e){s.uniform1fv(this.addr,e)}function BM(s,e){const t=oa(e,this.size,2);s.uniform2fv(this.addr,t)}function HM(s,e){const t=oa(e,this.size,3);s.uniform3fv(this.addr,t)}function GM(s,e){const t=oa(e,this.size,4);s.uniform4fv(this.addr,t)}function VM(s,e){const t=oa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function WM(s,e){const t=oa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function jM(s,e){const t=oa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function $M(s,e){s.uniform1iv(this.addr,e)}function XM(s,e){s.uniform2iv(this.addr,e)}function YM(s,e){s.uniform3iv(this.addr,e)}function qM(s,e){s.uniform4iv(this.addr,e)}function KM(s,e){s.uniform1uiv(this.addr,e)}function ZM(s,e){s.uniform2uiv(this.addr,e)}function JM(s,e){s.uniform3uiv(this.addr,e)}function QM(s,e){s.uniform4uiv(this.addr,e)}function ew(s,e,t){const r=this.cache,o=e.length,l=ac(t,o);yn(r,l)||(s.uniform1iv(this.addr,l),Sn(r,l));let d;this.type===s.SAMPLER_2D_SHADOW?d=oc(Y0):d=X0;for(let m=0;m!==o;++m)t.setTexture2D(e[m]||d,l[m])}function tw(s,e,t){const r=this.cache,o=e.length,l=ac(t,o);yn(r,l)||(s.uniform1iv(this.addr,l),Sn(r,l));for(let d=0;d!==o;++d)t.setTexture3D(e[d]||Z0,l[d])}function nw(s,e,t){const r=this.cache,o=e.length,l=ac(t,o);yn(r,l)||(s.uniform1iv(this.addr,l),Sn(r,l));let d;this.type===s.SAMPLER_CUBE_SHADOW?d=oc(q0):d=J0;for(let m=0;m!==o;++m)t.setTextureCube(e[m]||d,l[m])}function iw(s,e,t){const r=this.cache,o=e.length,l=ac(t,o);yn(r,l)||(s.uniform1iv(this.addr,l),Sn(r,l));for(let d=0;d!==o;++d)t.setTexture2DArray(e[d]||K0,l[d])}function rw(s){switch(s){case 5126:return OM;case 35664:return BM;case 35665:return HM;case 35666:return GM;case 35674:return VM;case 35675:return WM;case 35676:return jM;case 5124:case 35670:return $M;case 35667:case 35671:return XM;case 35668:case 35672:return YM;case 35669:case 35673:return qM;case 5125:return KM;case 36294:return ZM;case 36295:return JM;case 36296:return QM;case 35678:case 36198:case 36298:case 36306:case 35682:return ew;case 35679:case 36299:case 36307:return tw;case 35680:case 36300:case 36308:case 36293:return nw;case 36289:case 36303:case 36311:case 36292:return iw}}class sw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=kM(t.type)}}class aw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rw(t.type)}}class ow{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,d=o.length;l!==d;++l){const m=o[l];m.setValue(e,t[m.id],r)}}}const gd=/(\w+)(\])?(\[|\.)?/g;function Bm(s,e){s.seq.push(e),s.map[e.id]=e}function lw(s,e,t){const r=s.name,o=r.length;for(gd.lastIndex=0;;){const l=gd.exec(r),d=gd.lastIndex;let m=l[1];const u=l[2]==="]",h=l[3];if(u&&(m=m|0),h===void 0||h==="["&&d+2===o){Bm(t,h===void 0?new sw(m,s,e):new aw(m,s,e));break}else{let v=t.map[m];v===void 0&&(v=new ow(m),Bm(t,v)),t=v}}}class Xl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const m=e.getActiveUniform(t,d),u=e.getUniformLocation(t,m.name);lw(m,u,this)}const o=[],l=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(d):l.push(d);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,d=t.length;l!==d;++l){const m=t[l],u=r[m.id];u.needsUpdate!==!1&&m.setValue(e,u.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const d=e[o];d.id in t&&r.push(d)}return r}}function Hm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const cw=37297;let uw=0;function dw(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let d=o;d<l;d++){const m=d+1;r.push(`${m===e?">":" "} ${m}: ${t[d]}`)}return r.join(`
`)}const Gm=new vt;function fw(s){Ut._getMatrix(Gm,Ut.workingColorSpace,s);const e=`mat3( ${Gm.elements.map(t=>t.toFixed(4))} )`;switch(Ut.getTransfer(s)){case Ql:return[e,"LinearTransferOETF"];case $t:return[e,"sRGBTransferOETF"];default:return gt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Vm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const d=/ERROR: 0:(\d+)/.exec(l);if(d){const m=parseInt(d[1]);return t.toUpperCase()+`

`+l+`

`+dw(s.getShaderSource(e),m)}else return l}function hw(s,e){const t=fw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const pw={[d0]:"Linear",[f0]:"Reinhard",[h0]:"Cineon",[p0]:"ACESFilmic",[g0]:"AgX",[x0]:"Neutral",[m0]:"Custom"};function mw(s,e){const t=pw[e];return t===void 0?(gt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Bl=new pe;function gw(){Ut.getLuminanceCoefficients(Bl);const s=Bl.x.toFixed(4),e=Bl.y.toFixed(4),t=Bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Za).join(`
`)}function vw(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function _w(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),d=l.name;let m=1;l.type===s.FLOAT_MAT2&&(m=2),l.type===s.FLOAT_MAT3&&(m=3),l.type===s.FLOAT_MAT4&&(m=4),t[d]={type:l.type,location:s.getAttribLocation(e,d),locationSize:m}}return t}function Za(s){return s!==""}function Wm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function jm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yw=/^[ \t]*#include +<([\w\d./]+)>/gm;function of(s){return s.replace(yw,Sw)}function Sw(s,e){const t=wt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return of(t)}const Mw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $m(s){return s.replace(Mw,ww)}function ww(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Xm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const bw={[Hl]:"SHADOWMAP_TYPE_PCF",[qa]:"SHADOWMAP_TYPE_VSM"};function Ew(s){return bw[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Tw={[io]:"ENVMAP_MODE_REFRACTION"};function Aw(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Tw[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Cw={[u0]:"ENVMAP_BLENDING_MULTIPLY",[h_]:"ENVMAP_BLENDING_MIX",[p_]:"ENVMAP_BLENDING_ADD"};function Rw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Cw[s.combine]||"ENVMAP_BLENDING_NONE"}function Nw(s,e,t,r){const o=s.getContext(),l=t.defines;let d=t.vertexShader,m=t.fragmentShader;const u=Ew(t),h=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",x=Aw(t),v=Rw(t),_=xw(t),M=vw(l),b=o.createProgram();let C,y,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(C=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Za).join(`
`),C.length>0&&(C+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Za).join(`
`),y.length>0&&(y+=`
`)):(C=[Xm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Za).join(`
`),y=[Xm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+x:"",t.envMap?"#define "+v:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==or?"#define TONE_MAPPING":"",t.toneMapping!==or?wt.tonemapping_pars_fragment:"",t.toneMapping!==or?mw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,hw("linearToOutputTexel",t.outputColorSpace),gw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Za).join(`
`)),d=of(d),d=Wm(d,t),d=jm(d,t),m=of(m),m=Wm(m,t),m=jm(m,t),d=$m(d),m=$m(m),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,C=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+C,y=["#define varying in",t.glslVersion===om?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===om?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const R=S+C+d,F=S+y+m,P=Hm(o,o.VERTEX_SHADER,R),z=Hm(o,o.FRAGMENT_SHADER,F);o.attachShader(b,P),o.attachShader(b,z),t.index0AttributeName!==void 0?o.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function D(X){if(s.debug.checkShaderErrors){const G=o.getProgramInfoLog(b)||"",W=o.getShaderInfoLog(P)||"",V=o.getShaderInfoLog(z)||"",H=G.trim(),O=W.trim(),re=V.trim();let K=!0,j=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,b,P,z);else{const $=Vm(o,P,"vertex"),Y=Vm(o,z,"fragment");Vt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+H+`
`+$+`
`+Y)}else H!==""?gt("WebGLProgram: Program Info Log:",H):(O===""||re==="")&&(j=!1);j&&(X.diagnostics={runnable:K,programLog:H,vertexShader:{log:O,prefix:C},fragmentShader:{log:re,prefix:y}})}o.deleteShader(P),o.deleteShader(z),w=new Xl(o,b),N=_w(o,b)}let w;this.getUniforms=function(){return w===void 0&&D(this),w};let N;this.getAttributes=function(){return N===void 0&&D(this),N};let ee=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ee===!1&&(ee=o.getProgramParameter(b,cw)),ee},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uw++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=P,this.fragmentShader=z,this}let Pw=0;class Lw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Dw(e),t.set(e,r)),r}}class Dw{constructor(e){this.id=Pw++,this.code=e,this.usedTimes=0}}function Iw(s){return s===hs||s===Kl||s===Zl}function Uw(s,e,t,r,o,l){const d=new P0,m=new Lw,u=new Set,h=[],x=new Map,v=r.logarithmicDepthBuffer,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return u.add(w),w===0?"uv":`uv${w}`}function b(w,N,ee,X,G,W){const V=X.fog,H=G.geometry,O=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?X.environment:null,re=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,K=e.get(w.envMap||O,re),j=_[w.type];let $=r.precision;w.precision!==null&&($=r.getMaxPrecision(w.precision),$!==w.precision&&gt("WebGLProgram.getParameters:",w.precision,"not supported, using",$,"instead."));const Y=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,L=Y!==void 0?Y.length:0;let ne=0;H.morphAttributes.position!==void 0&&(ne=1),H.morphAttributes.normal!==void 0&&(ne=2),H.morphAttributes.color!==void 0&&(ne=3);let be,U,_e,Me;if(j){const Oe=Oi[j];be=Oe.vertexShader,U=Oe.fragmentShader}else{be=w.vertexShader,U=w.fragmentShader;const Oe=m.getVertexShaderStage(w),xt=m.getFragmentShaderStage(w);m.update(w,Oe,xt),_e=Oe.id,Me=xt.id}const De=s.getRenderTarget(),Se=s.state.buffers.depth.getReversed(),Fe=G.isInstancedMesh===!0,ut=G.isBatchedMesh===!0,je=!!w.map,Te=!!w.matcap,ke=!!K,Xe=ke&&K.isPMREMTexture===!0,St=!!w.aoMap,Mt=!!w.lightMap,Dt=!!w.bumpMap&&w.wireframe===!1,It=!!w.normalMap,nn=!!w.displacementMap,Nt=!!w.emissiveMap,Wt=!!w.metalnessMap,kt=!!w.roughnessMap,rn=w.anisotropy>0,J=w.clearcoat>0,Yt=w.diffuseRoughness>0,Pt=w.dispersion>0,bt=w.retroreflectivity>0,Ie=w.iridescence>0,Et=w.sheen>0,qe=w.transmission>0,rt=rn&&!!w.anisotropyMap,I=J&&!!w.clearcoatMap,E=J&&!!w.clearcoatNormalMap,ae=J&&!!w.clearcoatRoughnessMap,Ce=Yt&&!!w.diffuseRoughnessMap,ve=Ie&&!!w.iridescenceMap,Ue=Ie&&!!w.iridescenceThicknessMap,xe=Et&&!!w.sheenColorMap,ie=Et&&!!w.sheenRoughnessMap,se=!!w.specularMap,ye=!!w.specularColorMap,k=!!w.specularIntensityMap,me=qe&&!!w.transmissionMap,de=qe&&!!w.thicknessMap,Ne=!!w.gradientMap,Ee=!!w.alphaMap,Pe=w.alphaTest>0,Ze=!!w.alphaHash,ct=!!w.extensions;let Q=or;w.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(Q=s.toneMapping);const Ve=Xe?K.isCompressedCubeTexture?K.image[0].mipmaps:K.mipmaps:null,$e={shaderID:j,shaderType:w.type,shaderName:w.name,vertexShader:be,fragmentShader:U,defines:w.defines,customVertexShaderID:_e,customFragmentShaderID:Me,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:$,batching:ut,batchingColor:ut&&G._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&G.instanceColor!==null,instancingMorph:Fe&&G.morphTexture!==null,outputColorSpace:De===null?s.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:Ut.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:je,matcap:Te,envMap:ke,envMapMode:ke&&K.mapping,envMapPMREM:Xe,envMapMaxLod:Xe?Ve.length-1:null,envMapSize:Xe?Ve[0].width:null,aoMap:St,lightMap:Mt,bumpMap:Dt,normalMap:It,displacementMap:nn,emissiveMap:Nt,normalMapObjectSpace:It&&w.normalMapType===x_,normalMapTangentSpace:It&&w.normalMapType===rf,packedNormalMap:It&&w.normalMapType===rf&&Iw(w.normalMap.format),metalnessMap:Wt,roughnessMap:kt,anisotropy:rn,anisotropyMap:rt,clearcoat:J,clearcoatMap:I,clearcoatNormalMap:E,clearcoatRoughnessMap:ae,diffuseRoughness:Yt,diffuseRoughnessMap:Ce,dispersion:Pt,retroreflection:bt,iridescence:Ie,iridescenceMap:ve,iridescenceThicknessMap:Ue,sheen:Et,sheenColorMap:xe,sheenRoughnessMap:ie,specularMap:se,specularColorMap:ye,specularIntensityMap:k,transmission:qe,transmissionMap:me,thicknessMap:de,gradientMap:Ne,opaque:w.transparent===!1&&w.blending===Ja&&w.alphaToCoverage===!1,alphaMap:Ee,alphaTest:Pe,alphaHash:Ze,combine:w.combine,mapUv:je&&M(w.map.channel),aoMapUv:St&&M(w.aoMap.channel),lightMapUv:Mt&&M(w.lightMap.channel),bumpMapUv:Dt&&M(w.bumpMap.channel),normalMapUv:It&&M(w.normalMap.channel),displacementMapUv:nn&&M(w.displacementMap.channel),emissiveMapUv:Nt&&M(w.emissiveMap.channel),metalnessMapUv:Wt&&M(w.metalnessMap.channel),roughnessMapUv:kt&&M(w.roughnessMap.channel),anisotropyMapUv:rt&&M(w.anisotropyMap.channel),clearcoatMapUv:I&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:E&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&M(w.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ce&&M(w.diffuseRoughnessMap.channel),iridescenceMapUv:ve&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:ie&&M(w.sheenRoughnessMap.channel),specularMapUv:se&&M(w.specularMap.channel),specularColorMapUv:ye&&M(w.specularColorMap.channel),specularIntensityMapUv:k&&M(w.specularIntensityMap.channel),transmissionMapUv:me&&M(w.transmissionMap.channel),thicknessMapUv:de&&M(w.thicknessMap.channel),alphaMapUv:Ee&&M(w.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(It||rn),vertexNormals:!!H.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!H.attributes.uv&&(je||Ee),fog:!!V,useFog:w.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||H.attributes.normal===void 0&&It===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Se,skinning:G.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:ne,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:W.filter(Oe=>Oe.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&ee.length>0,shadowMapType:s.shadowMap.type,toneMapping:Q,decodeVideoTexture:je&&w.map.isVideoTexture===!0&&Ut.getTransfer(w.map.colorSpace)===$t,decodeVideoTextureEmissive:Nt&&w.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(w.emissiveMap.colorSpace)===$t,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Bi,flipSided:w.side===kn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ct&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&w.extensions.multiDraw===!0||ut)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return $e.vertexUv1s=u.has(1),$e.vertexUv2s=u.has(2),$e.vertexUv3s=u.has(3),u.clear(),$e}function C(w){const N=[];if(w.shaderID?N.push(w.shaderID):(N.push(w.customVertexShaderID),N.push(w.customFragmentShaderID)),w.defines!==void 0)for(const ee in w.defines)N.push(ee),N.push(w.defines[ee]);return w.isRawShaderMaterial===!1&&(y(N,w),S(N,w),N.push(s.outputColorSpace)),N.push(w.customProgramCacheKey),N.join()}function y(w,N){w.push(N.precision),w.push(N.outputColorSpace),w.push(N.envMapMode),w.push(N.envMapPMREM),w.push(N.envMapMaxLod),w.push(N.envMapSize),w.push(N.mapUv),w.push(N.alphaMapUv),w.push(N.lightMapUv),w.push(N.aoMapUv),w.push(N.bumpMapUv),w.push(N.normalMapUv),w.push(N.displacementMapUv),w.push(N.emissiveMapUv),w.push(N.metalnessMapUv),w.push(N.roughnessMapUv),w.push(N.anisotropyMapUv),w.push(N.clearcoatMapUv),w.push(N.clearcoatNormalMapUv),w.push(N.clearcoatRoughnessMapUv),w.push(N.diffuseRoughnessMapUv),w.push(N.iridescenceMapUv),w.push(N.iridescenceThicknessMapUv),w.push(N.sheenColorMapUv),w.push(N.sheenRoughnessMapUv),w.push(N.specularMapUv),w.push(N.specularColorMapUv),w.push(N.specularIntensityMapUv),w.push(N.transmissionMapUv),w.push(N.thicknessMapUv),w.push(N.combine),w.push(N.fogExp2),w.push(N.sizeAttenuation),w.push(N.morphTargetsCount),w.push(N.numSunLights),w.push(N.numDirLights),w.push(N.numPointLights),w.push(N.numSpotLights),w.push(N.numSpotLightMaps),w.push(N.numHemiLights),w.push(N.numRectAreaLights),w.push(N.numSunLightShadows),w.push(N.numDirLightShadows),w.push(N.numPointLightShadows),w.push(N.numSpotLightShadows),w.push(N.numSpotLightShadowsWithMaps),w.push(N.numLightProbes),w.push(N.numLightProbeGrids),w.push(N.shadowMapType),w.push(N.toneMapping),w.push(N.numClippingPlanes),w.push(N.numClipIntersection),w.push(N.depthPacking)}function S(w,N){d.disableAll(),N.instancing&&d.enable(0),N.instancingColor&&d.enable(1),N.instancingMorph&&d.enable(2),N.matcap&&d.enable(3),N.envMap&&d.enable(4),N.normalMapObjectSpace&&d.enable(5),N.normalMapTangentSpace&&d.enable(6),N.clearcoat&&d.enable(7),N.iridescence&&d.enable(8),N.alphaTest&&d.enable(9),N.vertexColors&&d.enable(10),N.vertexAlphas&&d.enable(11),N.vertexUv1s&&d.enable(12),N.vertexUv2s&&d.enable(13),N.vertexUv3s&&d.enable(14),N.vertexTangents&&d.enable(15),N.anisotropy&&d.enable(16),N.alphaHash&&d.enable(17),N.batching&&d.enable(18),N.dispersion&&d.enable(19),N.retroreflection&&d.enable(24),N.diffuseRoughness&&d.enable(25),N.batchingColor&&d.enable(20),N.gradientMap&&d.enable(21),N.packedNormalMap&&d.enable(22),N.vertexNormals&&d.enable(23),w.push(d.mask),d.disableAll(),N.fog&&d.enable(0),N.useFog&&d.enable(1),N.flatShading&&d.enable(2),N.logarithmicDepthBuffer&&d.enable(3),N.reversedDepthBuffer&&d.enable(4),N.skinning&&d.enable(5),N.morphTargets&&d.enable(6),N.morphNormals&&d.enable(7),N.morphColors&&d.enable(8),N.premultipliedAlpha&&d.enable(9),N.shadowMapEnabled&&d.enable(10),N.doubleSided&&d.enable(11),N.flipSided&&d.enable(12),N.useDepthPacking&&d.enable(13),N.dithering&&d.enable(14),N.transmission&&d.enable(15),N.sheen&&d.enable(16),N.opaque&&d.enable(17),N.pointsUvs&&d.enable(18),N.decodeVideoTexture&&d.enable(19),N.decodeVideoTextureEmissive&&d.enable(20),N.alphaToCoverage&&d.enable(21),N.numLightProbeGrids>0&&d.enable(22),N.hasPositionAttribute&&d.enable(23),w.push(d.mask)}function R(w){const N=_[w.type];let ee;if(N){const X=Oi[N];ee=ry.clone(X.uniforms)}else ee=w.uniforms;return ee}function F(w,N){let ee=x.get(N);return ee!==void 0?++ee.usedTimes:(ee=new Nw(s,N,w,o),h.push(ee),x.set(N,ee)),ee}function P(w){if(--w.usedTimes===0){const N=h.indexOf(w);h[N]=h[h.length-1],h.pop(),x.delete(w.cacheKey),w.destroy()}}function z(w){m.remove(w)}function D(){m.dispose()}return{getParameters:b,getProgramCacheKey:C,getUniforms:R,acquireProgram:F,releaseProgram:P,releaseShaderCache:z,programs:h,dispose:D}}function zw(){let s=new WeakMap;function e(d){return s.has(d)}function t(d){let m=s.get(d);return m===void 0&&(m={},s.set(d,m)),m}function r(d){s.delete(d)}function o(d,m,u){s.get(d)[m]=u}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function Fw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Ym(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function qm(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function d(_){let M=0;return _.isInstancedMesh&&(M+=2),_.isSkinnedMesh&&(M+=1),M}function m(_,M,b,C,y,S){let R=s[e];return R===void 0?(R={id:_.id,object:_,geometry:M,material:b,materialVariant:d(_),groupOrder:C,renderOrder:_.renderOrder,z:y,group:S},s[e]=R):(R.id=_.id,R.object=_,R.geometry=M,R.material=b,R.materialVariant=d(_),R.groupOrder=C,R.renderOrder=_.renderOrder,R.z=y,R.group=S),e++,R}function u(_,M,b,C,y,S,R){R.reversedDepth===!0&&(y=-y);const F=m(_,M,b,C,y,S);b.transmission>0?r.push(F):b.transparent===!0?o.push(F):t.push(F)}function h(_,M,b,C,y,S){const R=m(_,M,b,C,y,S);b.transmission>0?r.unshift(R):b.transparent===!0?o.unshift(R):t.unshift(R)}function x(_,M){t.length>1&&t.sort(_||Fw),r.length>1&&r.sort(M||Ym),o.length>1&&o.sort(M||Ym)}function v(){for(let _=e,M=s.length;_<M;_++){const b=s[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:u,unshift:h,finish:v,sort:x}}function kw(){let s=new WeakMap;function e(r,o){const l=s.get(r);let d;return l===void 0?(d=new qm,s.set(r,[d])):o>=l.length?(d=new qm,l.push(d)):d=l[o],d}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ow(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new pe,color:new Ct};break;case"SpotLight":t={position:new pe,direction:new pe,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new pe,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new pe,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":t={color:new Ct,position:new pe,halfWidth:new pe,halfHeight:new pe};break}return s[e.id]=t,t}}}function Bw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Hw=0;function Gw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Vw(s){const e=new Ow,t=Bw(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new pe);const o=new pe,l=new ln,d=new ln;function m(h){let x=0,v=0,_=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let M=0,b=0,C=0,y=0,S=0,R=0,F=0,P=0,z=0,D=0,w=0,N=0,ee=0,X=0;h.sort(Gw);for(let W=0,V=h.length;W<V;W++){const H=h[W],O=H.color,re=H.intensity,K=H.distance;let j=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===hs?j=H.shadow.map.texture:j=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)x+=O.r*re,v+=O.g*re,_+=O.b*re;else if(H.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(H.sh.coefficients[$],re);X++}else if(H.isSunLight){const $=e.get(H);if($.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Y=H.shadow,L=t.get(H);L.shadowIntensity=Y.intensity,L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),r.sunShadow[b]=L,r.sunShadowMap[b]=j;const ne=Y.getViewportCount();for(let be=0;be<ne;be++)r.sunShadowMatrix[C+be]=Y.getMatrix(be),r.sunShadowCascade[C+be]=Y._cascadeData[be];C+=ne,b++}r.sun[M]=$,M++}else if(H.isDirectionalLight){const $=e.get(H);if($.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Y=H.shadow,L=t.get(H);L.shadowIntensity=Y.intensity,L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize=Y.mapSize,r.directionalShadow[y]=L,r.directionalShadowMap[y]=j,r.directionalShadowMatrix[y]=H.shadow.matrix,z++}r.directional[y]=$,y++}else if(H.isSpotLight){const $=e.get(H);$.position.setFromMatrixPosition(H.matrixWorld),$.color.copy(O).multiplyScalar(re),$.distance=K,$.coneCos=Math.cos(H.angle),$.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),$.decay=H.decay,r.spot[R]=$;const Y=H.shadow;if(H.map&&(r.spotLightMap[N]=H.map,N++,Y.updateMatrices(H),H.castShadow&&ee++),r.spotLightMatrix[R]=Y.matrix,H.castShadow){const L=t.get(H);L.shadowIntensity=Y.intensity,L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize=Y.mapSize,r.spotShadow[R]=L,r.spotShadowMap[R]=j,w++}R++}else if(H.isRectAreaLight){const $=e.get(H);$.color.copy(O).multiplyScalar(re),$.halfWidth.set(H.width*.5,0,0),$.halfHeight.set(0,H.height*.5,0),r.rectArea[F]=$,F++}else if(H.isPointLight){const $=e.get(H);if($.color.copy(H.color).multiplyScalar(H.intensity),$.distance=H.distance,$.decay=H.decay,H.castShadow){const Y=H.shadow,L=t.get(H);L.shadowIntensity=Y.intensity,L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize=Y.mapSize,L.shadowCameraNear=Y.camera.near,L.shadowCameraFar=Y.camera.far,r.pointShadow[S]=L,r.pointShadowMap[S]=j,r.pointShadowMatrix[S]=H.shadow.matrix,D++}r.point[S]=$,S++}else if(H.isHemisphereLight){const $=e.get(H);$.skyColor.copy(H.color).multiplyScalar(re),$.groundColor.copy(H.groundColor).multiplyScalar(re),r.hemi[P]=$,P++}}F>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ke.LTC_FLOAT_1,r.rectAreaLTC2=Ke.LTC_FLOAT_2):(r.rectAreaLTC1=Ke.LTC_HALF_1,r.rectAreaLTC2=Ke.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=v,r.ambient[2]=_;const G=r.hash;(G.sunLength!==M||G.directionalLength!==y||G.pointLength!==S||G.spotLength!==R||G.rectAreaLength!==F||G.hemiLength!==P||G.numSunShadows!==b||G.numDirectionalShadows!==z||G.numPointShadows!==D||G.numSpotShadows!==w||G.numSpotMaps!==N||G.numLightProbes!==X)&&(r.sun.length=M,r.directional.length=y,r.spot.length=R,r.rectArea.length=F,r.point.length=S,r.hemi.length=P,r.sunShadow.length=b,r.sunShadowMap.length=b,r.sunShadowMatrix.length=C,r.sunShadowCascade.length=C,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.directionalShadowMatrix.length=z,r.pointShadow.length=D,r.pointShadowMap.length=D,r.pointShadowMatrix.length=D,r.spotShadow.length=w,r.spotShadowMap.length=w,r.spotLightMatrix.length=w+N-ee,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=ee,r.numLightProbes=X,G.sunLength=M,G.directionalLength=y,G.pointLength=S,G.spotLength=R,G.rectAreaLength=F,G.hemiLength=P,G.numSunShadows=b,G.numDirectionalShadows=z,G.numPointShadows=D,G.numSpotShadows=w,G.numSpotMaps=N,G.numLightProbes=X,r.version=Hw++)}function u(h,x){let v=0,_=0,M=0,b=0,C=0,y=0;const S=x.matrixWorldInverse;for(let R=0,F=h.length;R<F;R++){const P=h[R];if(P.isSunLight){const z=r.sun[v];z.direction.setFromMatrixPosition(P.matrixWorld),z.direction.transformDirection(S),v++}else if(P.isDirectionalLight){const z=r.directional[_];z.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),z.direction.sub(o),z.direction.transformDirection(S),_++}else if(P.isSpotLight){const z=r.spot[b];z.position.setFromMatrixPosition(P.matrixWorld),z.position.applyMatrix4(S),z.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),z.direction.sub(o),z.direction.transformDirection(S),b++}else if(P.isRectAreaLight){const z=r.rectArea[C];z.position.setFromMatrixPosition(P.matrixWorld),z.position.applyMatrix4(S),d.identity(),l.copy(P.matrixWorld),l.premultiply(S),d.extractRotation(l),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),z.halfWidth.applyMatrix4(d),z.halfHeight.applyMatrix4(d),C++}else if(P.isPointLight){const z=r.point[M];z.position.setFromMatrixPosition(P.matrixWorld),z.position.applyMatrix4(S),M++}else if(P.isHemisphereLight){const z=r.hemi[y];z.direction.setFromMatrixPosition(P.matrixWorld),z.direction.transformDirection(S),y++}}}return{setup:m,setupView:u,state:r}}function Km(s){const e=new Vw(s),t=[],r=[],o=[];function l(v){x.camera=v,t.length=0,r.length=0,o.length=0}function d(v){v.isLightProbeGrid?o.push(v):t.push(v)}function m(v){r.push(v)}function u(){e.setup(t),o.sort((v,_)=>v.priority-_.priority||v.id-_.id)}function h(v){e.setupView(t,v)}const x={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:x,setupLights:u,setupLightsView:h,pushLight:d,pushShadow:m}}function Ww(s){let e=new WeakMap;function t(o,l=0){const d=e.get(o);let m;return d===void 0?(m=new Km(s),e.set(o,[m])):l>=d.length?(m=new Km(s),d.push(m)):m=d[l],m}function r(){e=new WeakMap}return{get:t,dispose:r}}const jw=`void main() {
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
}`,Xw=[new pe(1,0,0),new pe(-1,0,0),new pe(0,1,0),new pe(0,-1,0),new pe(0,0,1),new pe(0,0,-1)],Yw=[new pe(0,-1,0),new pe(0,-1,0),new pe(0,0,1),new pe(0,0,-1),new pe(0,-1,0),new pe(0,-1,0)],Zm=new ln,Ya=new pe,xd=new pe;function qw(s,e,t){let r=new oo;const o=new Ft,l=new Ft,d=new on,m=new ly,u=new cy,h={},x=t.maxTextureSize,v={[fs]:kn,[kn]:fs,[Bi]:Bi},_=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:jw,fragmentShader:$w}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const b=new cr;b.setAttribute("position",new us(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Wn(b,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hl;let S=this.type;this.render=function(D,w,N){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;this.type===Yv&&(gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Hl);const ee=s.getRenderTarget(),X=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),W=s.state;W.setBlending(ea),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const V=S!==this.type;V&&w.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(O=>O.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,O=D.length;H<O;H++){const re=D[H],K=re.shadow;if(K===void 0){gt("WebGLShadowMap:",re,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;o.copy(K.mapSize);const j=K.getFrameExtents();o.multiply(j),l.copy(K.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/j.x),o.x=l.x*j.x,K.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/j.y),o.y=l.y*j.y,K.mapSize.y=l.y));const $=s.state.buffers.depth.getReversed();if(K.camera._reversedDepth=$,K.map===null||V===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===qa){if(re.isPointLight){gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Vi(o.x,o.y,{format:hs,type:ji,minFilter:Jn,magFilter:Jn,generateMipmaps:!1}),K.map.texture.name=re.name+".shadowMap",K.map.depthTexture=new ra(o.x,o.y,Hi),K.map.depthTexture.name=re.name+".shadowMapDepth",K.map.depthTexture.format=Hr,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Nn,K.map.depthTexture.magFilter=Nn}else re.isPointLight?(K.map=new Tf(o.x),K.map.depthTexture=new F0(o.x,Wi)):(K.map=new Vi(o.x,o.y),K.map.depthTexture=new ra(o.x,o.y,Wi)),K.map.depthTexture.name=re.name+".shadowMap",K.map.depthTexture.format=Hr,this.type===Hl?(K.map.depthTexture.compareFunction=$?A0:T0,K.map.depthTexture.minFilter=Jn,K.map.depthTexture.magFilter=Jn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Nn,K.map.depthTexture.magFilter=Nn);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==o.x||K.map.height!==o.y)&&K.map.setSize(o.x,o.y);const Y=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();re.isPointLight!==!0&&K.updateMatrices(re,N);const L=(K.camera.layers.mask&4294967294)!==0?K.camera.layers:N.layers;for(let ne=0;ne<Y;ne++){const be=K.getCamera(ne);if(re.isPointLight){const U=K.camera,_e=K.matrix,Me=re.distance||U.far;Me!==U.far&&(U.far=Me,U.updateProjectionMatrix()),Ya.setFromMatrixPosition(re.matrixWorld),U.position.copy(Ya),xd.copy(U.position),xd.add(Xw[ne]),U.up.copy(Yw[ne]),U.lookAt(xd),U.updateMatrixWorld(),_e.makeTranslation(-Ya.x,-Ya.y,-Ya.z),Zm.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Zm,U.coordinateSystem,U.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)s.setRenderTarget(K.map,ne),s.clear();else{ne===0&&(s.setRenderTarget(K.map),s.clear());const U=K.getViewport(ne);d.set(l.x*U.x,l.y*U.y,l.x*U.z,l.y*U.w),W.viewport(d)}r=K.getFrustum(ne),P(w,N,be,re,L,this.type)}K.isPointLightShadow!==!0&&this.type===qa&&R(K,N),K.needsUpdate=!1}S=this.type,y.needsUpdate=!1,s.setRenderTarget(ee,X,G)};function R(D,w){const N=e.update(C);_.defines.VSM_SAMPLES!==D.blurSamples&&(_.defines.VSM_SAMPLES=D.blurSamples,M.defines.VSM_SAMPLES=D.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),D.mapPass===null?D.mapPass=new Vi(o.x,o.y,{format:hs,type:ji}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),_.uniforms.shadow_pass.value=D.map.depthTexture,_.uniforms.resolution.value.set(D.map.width,D.map.height),_.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(w,null,N,_,C,null),M.uniforms.shadow_pass.value=D.mapPass.texture,M.uniforms.resolution.value.set(D.map.width,D.map.height),M.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(w,null,N,M,C,null)}function F(D,w,N,ee){let X=null;const G=N.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(G!==void 0)X=G;else if(X=N.isPointLight===!0?u:m,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const W=X.uuid,V=w.uuid;let H=h[W];H===void 0&&(H={},h[W]=H);let O=H[V];O===void 0&&(O=X.clone(),H[V]=O,w.addEventListener("dispose",z)),X=O}if(X.visible=w.visible,X.wireframe=w.wireframe,ee===qa?X.side=w.shadowSide!==null?w.shadowSide:w.side:X.side=w.shadowSide!==null?w.shadowSide:v[w.side],X.alphaMap=w.alphaMap,X.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,X.map=w.map,X.clipShadows=w.clipShadows,X.clippingPlanes=w.clippingPlanes,X.clipIntersection=w.clipIntersection,X.displacementMap=w.displacementMap,X.displacementScale=w.displacementScale,X.displacementBias=w.displacementBias,X.wireframeLinewidth=w.wireframeLinewidth,X.linewidth=w.linewidth,N.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const W=s.properties.get(X);W.light=N}return X}function P(D,w,N,ee,X,G){if(D.visible===!1)return;if(D.layers.test(X)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&G===qa)&&(!D.frustumCulled||D.intersectsFrustum(r))){D.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,D.matrixWorld);const H=e.update(D),O=D.material;if(Array.isArray(O)){const re=H.groups;for(let K=0,j=re.length;K<j;K++){const $=re[K],Y=O[$.materialIndex];if(Y&&Y.visible){const L=F(D,Y,ee,G);D.onBeforeShadow(s,D,w,N,H,L,$),s.renderBufferDirect(N,null,H,L,D,$),D.onAfterShadow(s,D,w,N,H,L,$)}}}else if(O.visible){const re=F(D,O,ee,G);D.onBeforeShadow(s,D,w,N,H,re,null),s.renderBufferDirect(N,null,H,re,D,null),D.onAfterShadow(s,D,w,N,H,re,null)}}const V=D.children;for(let H=0,O=V.length;H<O;H++)P(V[H],w,N,ee,X,G)}function z(D){D.target.removeEventListener("dispose",z);for(const N in h){const ee=h[N],X=D.target.uuid;X in ee&&(ee[X].dispose(),delete ee[X])}}}function Kw(s,e){function t(){let k=!1;const me=new on;let de=null;const Ne=new on(0,0,0,0);return{setMask:function(Ee){de!==Ee&&!k&&(s.colorMask(Ee,Ee,Ee,Ee),de=Ee)},setLocked:function(Ee){k=Ee},setClear:function(Ee,Pe,Ze,ct,Q){Q===!0&&(Ee*=ct,Pe*=ct,Ze*=ct),me.set(Ee,Pe,Ze,ct),Ne.equals(me)===!1&&(s.clearColor(Ee,Pe,Ze,ct),Ne.copy(me))},reset:function(){k=!1,de=null,Ne.set(-1,0,0,0)}}}function r(){let k=!1,me=!1,de=null,Ne=null,Ee=null;return{setReversed:function(Pe){if(me!==Pe){const Ze=e.get("EXT_clip_control");Pe?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),me=Pe;const ct=Ee;Ee=null,this.setClear(ct)}},getReversed:function(){return me},setTest:function(Pe){Pe?Se(s.DEPTH_TEST):Fe(s.DEPTH_TEST)},setMask:function(Pe){de!==Pe&&!k&&(s.depthMask(Pe),de=Pe)},setFunc:function(Pe){if(me&&(Pe=C_[Pe]),Ne!==Pe){switch(Pe){case _d:s.depthFunc(s.NEVER);break;case yd:s.depthFunc(s.ALWAYS);break;case Sd:s.depthFunc(s.LESS);break;case no:s.depthFunc(s.LEQUAL);break;case Md:s.depthFunc(s.EQUAL);break;case wd:s.depthFunc(s.GEQUAL);break;case bd:s.depthFunc(s.GREATER);break;case Ed:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ne=Pe}},setLocked:function(Pe){k=Pe},setClear:function(Pe){Ee!==Pe&&(Ee=Pe,me&&(Pe=1-Pe),s.clearDepth(Pe))},reset:function(){k=!1,de=null,Ne=null,Ee=null,me=!1}}}function o(){let k=!1,me=null,de=null,Ne=null,Ee=null,Pe=null,Ze=null,ct=null,Q=null;return{setTest:function(Ve){k||(Ve?Se(s.STENCIL_TEST):Fe(s.STENCIL_TEST))},setMask:function(Ve){me!==Ve&&!k&&(s.stencilMask(Ve),me=Ve)},setFunc:function(Ve,$e,Oe){(de!==Ve||Ne!==$e||Ee!==Oe)&&(s.stencilFunc(Ve,$e,Oe),de=Ve,Ne=$e,Ee=Oe)},setOp:function(Ve,$e,Oe){(Pe!==Ve||Ze!==$e||ct!==Oe)&&(s.stencilOp(Ve,$e,Oe),Pe=Ve,Ze=$e,ct=Oe)},setLocked:function(Ve){k=Ve},setClear:function(Ve){Q!==Ve&&(s.clearStencil(Ve),Q=Ve)},reset:function(){k=!1,me=null,de=null,Ne=null,Ee=null,Pe=null,Ze=null,ct=null,Q=null}}}const l=new t,d=new r,m=new o;let u={};const h=new WeakMap;let x={},v={},_={},M=new WeakMap,b=[],C=null,y=!1,S=null,R=null,F=null,P=null,z=null,D=null,w=null,N=new Ct(0,0,0),ee=0,X=!1,G=null,W=null,V=null,H=null,O=null;const re=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,j=0;const $=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec($)[1]),K=j>=1):$.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),K=j>=2);let Y=null,L={};const ne=s.getParameter(s.SCISSOR_BOX),be=s.getParameter(s.VIEWPORT),U=new on().fromArray(ne),_e=new on().fromArray(be);function Me(k,me,de,Ne){const Ee=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(k,Pe),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ze=0;Ze<de;Ze++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(me,0,s.RGBA,1,1,Ne,0,s.RGBA,s.UNSIGNED_BYTE,Ee):s.texImage2D(me+Ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ee);return Pe}const De={};De[s.TEXTURE_2D]=Me(s.TEXTURE_2D,s.TEXTURE_2D,1),De[s.TEXTURE_CUBE_MAP]=Me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),De[s.TEXTURE_2D_ARRAY]=Me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),De[s.TEXTURE_3D]=Me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),d.setClear(1),m.setClear(0),Se(s.DEPTH_TEST),d.setFunc(no),Dt(!1),It(rm),Se(s.CULL_FACE),St(ea);function Se(k){x[k]!==!0&&(s.enable(k),x[k]=!0)}function Fe(k){x[k]!==!1&&(s.disable(k),x[k]=!1)}function ut(k,me){return _[k]!==me?(s.bindFramebuffer(k,me),_[k]=me,k===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=me),k===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=me),!0):!1}function je(k,me){let de=b,Ne=!1;if(k){de=M.get(me),de===void 0&&(de=[],M.set(me,de));const Ee=k.textures;if(de.length!==Ee.length||de[0]!==s.COLOR_ATTACHMENT0){for(let Pe=0,Ze=Ee.length;Pe<Ze;Pe++)de[Pe]=s.COLOR_ATTACHMENT0+Pe;de.length=Ee.length,Ne=!0}}else de[0]!==s.BACK&&(de[0]=s.BACK,Ne=!0);Ne&&s.drawBuffers(de)}function Te(k){return C!==k?(s.useProgram(k),C=k,!0):!1}const ke={[Js]:s.FUNC_ADD,[Kv]:s.FUNC_SUBTRACT,[Zv]:s.FUNC_REVERSE_SUBTRACT};ke[Jv]=s.MIN,ke[Qv]=s.MAX;const Xe={[e_]:s.ZERO,[t_]:s.ONE,[n_]:s.SRC_COLOR,[l0]:s.SRC_ALPHA,[l_]:s.SRC_ALPHA_SATURATE,[a_]:s.DST_COLOR,[r_]:s.DST_ALPHA,[i_]:s.ONE_MINUS_SRC_COLOR,[c0]:s.ONE_MINUS_SRC_ALPHA,[o_]:s.ONE_MINUS_DST_COLOR,[s_]:s.ONE_MINUS_DST_ALPHA,[c_]:s.CONSTANT_COLOR,[u_]:s.ONE_MINUS_CONSTANT_COLOR,[d_]:s.CONSTANT_ALPHA,[f_]:s.ONE_MINUS_CONSTANT_ALPHA};function St(k,me,de,Ne,Ee,Pe,Ze,ct,Q,Ve){if(k===ea){y===!0&&(Fe(s.BLEND),y=!1);return}if(y===!1&&(Se(s.BLEND),y=!0),k!==qv){if(k!==S||Ve!==X){if((R!==Js||z!==Js)&&(s.blendEquation(s.FUNC_ADD),R=Js,z=Js),Ve)switch(k){case Ja:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qa:s.blendFunc(s.ONE,s.ONE);break;case sm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case am:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Vt("WebGLState: Invalid blending: ",k);break}else switch(k){case Ja:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case sm:Vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case am:Vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Vt("WebGLState: Invalid blending: ",k);break}F=null,P=null,D=null,w=null,N.set(0,0,0),ee=0,S=k,X=Ve}return}Ee=Ee||me,Pe=Pe||de,Ze=Ze||Ne,(me!==R||Ee!==z)&&(s.blendEquationSeparate(ke[me],ke[Ee]),R=me,z=Ee),(de!==F||Ne!==P||Pe!==D||Ze!==w)&&(s.blendFuncSeparate(Xe[de],Xe[Ne],Xe[Pe],Xe[Ze]),F=de,P=Ne,D=Pe,w=Ze),(ct.equals(N)===!1||Q!==ee)&&(s.blendColor(ct.r,ct.g,ct.b,Q),N.copy(ct),ee=Q),S=k,X=!1}function Mt(k,me){k.side===Bi?Fe(s.CULL_FACE):Se(s.CULL_FACE);let de=k.side===kn;me&&(de=!de),Dt(de),k.blending===Ja&&k.transparent===!1?St(ea):St(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),d.setFunc(k.depthFunc),d.setTest(k.depthTest),d.setMask(k.depthWrite),l.setMask(k.colorWrite);const Ne=k.stencilWrite;m.setTest(Ne),Ne&&(m.setMask(k.stencilWriteMask),m.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),m.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Nt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Se(s.SAMPLE_ALPHA_TO_COVERAGE):Fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(k){G!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),G=k)}function It(k){k!==$v?(Se(s.CULL_FACE),k!==W&&(k===rm?s.cullFace(s.BACK):k===Xv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Fe(s.CULL_FACE),W=k}function nn(k){k!==V&&(K&&s.lineWidth(k),V=k)}function Nt(k,me,de){k?(Se(s.POLYGON_OFFSET_FILL),(H!==me||O!==de)&&(H=me,O=de,d.getReversed()&&(me=-me,de=-de),s.polygonOffset(me,de))):Fe(s.POLYGON_OFFSET_FILL)}function Wt(k){k?Se(s.SCISSOR_TEST):Fe(s.SCISSOR_TEST)}function kt(k){k===void 0&&(k=s.TEXTURE0+re-1),Y!==k&&(s.activeTexture(k),Y=k)}function rn(k,me,de){de===void 0&&(Y===null?de=s.TEXTURE0+re-1:de=Y);let Ne=L[de];Ne===void 0&&(Ne={type:void 0,texture:void 0},L[de]=Ne),(Ne.type!==k||Ne.texture!==me)&&(Y!==de&&(s.activeTexture(de),Y=de),s.bindTexture(k,me||De[k]),Ne.type=k,Ne.texture=me)}function J(){const k=L[Y];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Yt(){try{s.compressedTexImage2D(...arguments)}catch(k){Vt("WebGLState:",k)}}function Pt(){try{s.compressedTexImage3D(...arguments)}catch(k){Vt("WebGLState:",k)}}function bt(){try{s.texSubImage2D(...arguments)}catch(k){Vt("WebGLState:",k)}}function Ie(){try{s.texSubImage3D(...arguments)}catch(k){Vt("WebGLState:",k)}}function Et(){try{s.compressedTexSubImage2D(...arguments)}catch(k){Vt("WebGLState:",k)}}function qe(){try{s.compressedTexSubImage3D(...arguments)}catch(k){Vt("WebGLState:",k)}}function rt(){try{s.texStorage2D(...arguments)}catch(k){Vt("WebGLState:",k)}}function I(){try{s.texStorage3D(...arguments)}catch(k){Vt("WebGLState:",k)}}function E(){try{s.texImage2D(...arguments)}catch(k){Vt("WebGLState:",k)}}function ae(){try{s.texImage3D(...arguments)}catch(k){Vt("WebGLState:",k)}}function Ce(k){return v[k]!==void 0?v[k]:s.getParameter(k)}function ve(k,me){v[k]!==me&&(s.pixelStorei(k,me),v[k]=me)}function Ue(k){U.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),U.copy(k))}function xe(k){_e.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),_e.copy(k))}function ie(k,me){let de=h.get(me);de===void 0&&(de=new WeakMap,h.set(me,de));let Ne=de.get(k);Ne===void 0&&(Ne=s.getUniformBlockIndex(me,k.name),s.uniformBlockBinding(me,Ne,Ne),de.set(k,Ne))}function se(k,me,de){const Ee=h.get(me).get(k);u[Ee]!==de&&(s.bindBufferBase(s.UNIFORM_BUFFER,Ee,de),u[Ee]=de)}function ye(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),x={},v={},Y=null,L={},_={},u={},M=new WeakMap,b=[],C=null,y=!1,S=null,R=null,F=null,P=null,z=null,D=null,w=null,N=new Ct(0,0,0),ee=0,X=!1,G=null,W=null,V=null,H=null,O=null,U.set(0,0,s.canvas.width,s.canvas.height),_e.set(0,0,s.canvas.width,s.canvas.height),l.reset(),d.reset(),m.reset()}return{buffers:{color:l,depth:d,stencil:m},enable:Se,disable:Fe,bindFramebuffer:ut,drawBuffers:je,useProgram:Te,setBlending:St,setMaterial:Mt,setFlipSided:Dt,setCullFace:It,setLineWidth:nn,setPolygonOffset:Nt,setScissorTest:Wt,activeTexture:kt,bindTexture:rn,unbindTexture:J,compressedTexImage2D:Yt,compressedTexImage3D:Pt,texImage2D:E,texImage3D:ae,pixelStorei:ve,getParameter:Ce,updateUBOMapping:ie,uniformBlockBinding:se,texStorage2D:rt,texStorage3D:I,texSubImage2D:bt,texSubImage3D:Ie,compressedTexSubImage2D:Et,compressedTexSubImage3D:qe,scissor:Ue,viewport:xe,reset:ye}}function Zw(s,e,t,r,o,l,d){const m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ft,x=new WeakMap,v=new Set;let _;const M=new WeakMap,b=new Set,C=new FinalizationRegistry(I=>b.delete(I));let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(I,E){return y?new OffscreenCanvas(I,E):ec("canvas")}function R(I,E,ae){let Ce=1;const ve=rt(I);if((ve.width>ae||ve.height>ae)&&(Ce=ae/Math.max(ve.width,ve.height)),Ce<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Ue=Math.floor(Ce*ve.width),xe=Math.floor(Ce*ve.height);_===void 0&&(_=S(Ue,xe));const ie=E?S(Ue,xe):_;return ie.width=Ue,ie.height=xe,ie.getContext("2d").drawImage(I,0,0,Ue,xe),gt("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+Ue+"x"+xe+")."),ie}else return"data"in I&&gt("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),I;return I}function F(I){return I.generateMipmaps}function P(I){s.generateMipmap(I)}function z(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(I,E,ae,Ce,ve,Ue=!1){if(I!==null){if(s[I]!==void 0)return s[I];gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let xe;Ce&&(xe=e.get("EXT_texture_norm16"),xe||gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=E;if(E===s.RED&&(ae===s.FLOAT&&(ie=s.R32F),ae===s.HALF_FLOAT&&(ie=s.R16F),ae===s.UNSIGNED_BYTE&&(ie=s.R8),ae===s.UNSIGNED_SHORT&&xe&&(ie=xe.R16_EXT),ae===s.SHORT&&xe&&(ie=xe.R16_SNORM_EXT)),E===s.RED_INTEGER&&(ae===s.UNSIGNED_BYTE&&(ie=s.R8UI),ae===s.UNSIGNED_SHORT&&(ie=s.R16UI),ae===s.UNSIGNED_INT&&(ie=s.R32UI),ae===s.BYTE&&(ie=s.R8I),ae===s.SHORT&&(ie=s.R16I),ae===s.INT&&(ie=s.R32I)),E===s.RG&&(ae===s.FLOAT&&(ie=s.RG32F),ae===s.HALF_FLOAT&&(ie=s.RG16F),ae===s.UNSIGNED_BYTE&&(ie=s.RG8),ae===s.UNSIGNED_SHORT&&xe&&(ie=xe.RG16_EXT),ae===s.SHORT&&xe&&(ie=xe.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(ae===s.UNSIGNED_BYTE&&(ie=s.RG8UI),ae===s.UNSIGNED_SHORT&&(ie=s.RG16UI),ae===s.UNSIGNED_INT&&(ie=s.RG32UI),ae===s.BYTE&&(ie=s.RG8I),ae===s.SHORT&&(ie=s.RG16I),ae===s.INT&&(ie=s.RG32I)),E===s.RGB_INTEGER&&(ae===s.UNSIGNED_BYTE&&(ie=s.RGB8UI),ae===s.UNSIGNED_SHORT&&(ie=s.RGB16UI),ae===s.UNSIGNED_INT&&(ie=s.RGB32UI),ae===s.BYTE&&(ie=s.RGB8I),ae===s.SHORT&&(ie=s.RGB16I),ae===s.INT&&(ie=s.RGB32I)),E===s.RGBA_INTEGER&&(ae===s.UNSIGNED_BYTE&&(ie=s.RGBA8UI),ae===s.UNSIGNED_SHORT&&(ie=s.RGBA16UI),ae===s.UNSIGNED_INT&&(ie=s.RGBA32UI),ae===s.BYTE&&(ie=s.RGBA8I),ae===s.SHORT&&(ie=s.RGBA16I),ae===s.INT&&(ie=s.RGBA32I)),E===s.RGB&&(ae===s.UNSIGNED_SHORT&&xe&&(ie=xe.RGB16_EXT),ae===s.SHORT&&xe&&(ie=xe.RGB16_SNORM_EXT),ae===s.UNSIGNED_INT_5_9_9_9_REV&&(ie=s.RGB9_E5),ae===s.UNSIGNED_INT_10F_11F_11F_REV&&(ie=s.R11F_G11F_B10F)),E===s.RGBA){const se=Ue?Ql:Ut.getTransfer(ve);ae===s.FLOAT&&(ie=s.RGBA32F),ae===s.HALF_FLOAT&&(ie=s.RGBA16F),ae===s.UNSIGNED_BYTE&&(ie=se===$t?s.SRGB8_ALPHA8:s.RGBA8),ae===s.UNSIGNED_SHORT&&xe&&(ie=xe.RGBA16_EXT),ae===s.SHORT&&xe&&(ie=xe.RGBA16_SNORM_EXT),ae===s.UNSIGNED_SHORT_4_4_4_4&&(ie=s.RGBA4),ae===s.UNSIGNED_SHORT_5_5_5_1&&(ie=s.RGB5_A1)}return(ie===s.R16F||ie===s.R32F||ie===s.RG16F||ie===s.RG32F||ie===s.RGBA16F||ie===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function w(I,E){let ae;return I?E===null||E===Wi||E===ia?ae=s.DEPTH24_STENCIL8:E===Hi?ae=s.DEPTH32F_STENCIL8:E===so&&(ae=s.DEPTH24_STENCIL8,gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Wi||E===ia?ae=s.DEPTH_COMPONENT24:E===Hi?ae=s.DEPTH_COMPONENT32F:E===so&&(ae=s.DEPTH_COMPONENT16),ae}function N(I,E){return F(I)===!0||I.isFramebufferTexture&&I.minFilter!==Nn&&I.minFilter!==Jn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function ee(I){const E=new WeakRef(I);r.get(I).__ref=E,b.add(E),C.register(I,E,E)}function X(I){const E=r.get(I).__ref;E!==void 0&&(b.delete(E),C.unregister(E))}function G(I){V(I.target)}function W(I){H(I.target)}function V(I){I.removeEventListener("dispose",G),X(I),re(I),I.isVideoTexture&&x.delete(I),I.isHTMLTexture&&v.delete(I)}function H(I){I.removeEventListener("dispose",W),X(I),j(I)}function O(){for(const I of b){const E=I.deref();E!==void 0&&(E.isRenderTarget===!0?H(E):V(E))}b.clear(),v.clear()}function re(I){const E=r.get(I);if(E.__webglInit===void 0)return;const ae=I.source,Ce=M.get(ae);if(Ce){const ve=Ce[E.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&K(I),Object.keys(Ce).length===0&&M.delete(ae)}r.remove(I)}function K(I){const E=r.get(I);s.deleteTexture(E.__webglTexture);const ae=I.source,Ce=M.get(ae);delete Ce[E.__cacheKey],d.memory.textures--}function j(I){const E=r.get(I);E.__depthDisposeCallback&&E.__depthDisposeCallback();const ae=I.depthTexture;if(ae&&ae.renderTarget===I&&V(ae),I.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(E.__webglFramebuffer[ve]))for(let Ue=0;Ue<E.__webglFramebuffer[ve].length;Ue++)s.deleteFramebuffer(E.__webglFramebuffer[ve][Ue]);else s.deleteFramebuffer(E.__webglFramebuffer[ve]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ve])}else{if(Array.isArray(E.__webglFramebuffer))for(let ve=0;ve<E.__webglFramebuffer.length;ve++)s.deleteFramebuffer(E.__webglFramebuffer[ve]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ve=0;ve<E.__webglColorRenderbuffer.length;ve++)E.__webglColorRenderbuffer[ve]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ve]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Ce=I.textures;for(let ve=0,Ue=Ce.length;ve<Ue;ve++){const xe=r.get(Ce[ve]);xe.__webglTexture&&(s.deleteTexture(xe.__webglTexture),d.memory.textures--),r.remove(Ce[ve])}r.remove(I)}let $=0;function Y(){$=0}function L(){return $}function ne(I){$=I}function be(){const I=$;return I>=o.maxTextures&&gt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+o.maxTextures),$+=1,I}function U(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.mipmapsAutoUpdate),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function _e(I,E){const ae=r.get(I);if(I.isVideoTexture&&Et(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&ae.__version!==I.version){const Ce=I.image;if(Ce===null)gt("WebGLRenderer: Texture marked for update but no image data found.");else if(Ce.complete===!1)gt("WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(ae,I,E);return}}else I.isExternalTexture&&(ae.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ae.__webglTexture,s.TEXTURE0+E)}function Me(I,E){const ae=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ae.__version!==I.version){Mt(ae,I,E);return}else I.isExternalTexture&&(ae.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ae.__webglTexture,s.TEXTURE0+E)}function De(I,E){const ae=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&ae.__version!==I.version){Mt(ae,I,E);return}t.bindTexture(s.TEXTURE_3D,ae.__webglTexture,s.TEXTURE0+E)}function Se(I,E){const ae=r.get(I);if(I.version>0&&ae.__version!==I.version){Dt(ae,I,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture,s.TEXTURE0+E)}const Fe={[ro]:s.REPEAT,[oi]:s.CLAMP_TO_EDGE,[Td]:s.MIRRORED_REPEAT},ut={[Nn]:s.NEAREST,[m_]:s.NEAREST_MIPMAP_NEAREST,[_l]:s.NEAREST_MIPMAP_LINEAR,[Jn]:s.LINEAR,[Wu]:s.LINEAR_MIPMAP_NEAREST,[Fr]:s.LINEAR_MIPMAP_LINEAR},je={[__]:s.NEVER,[C0]:s.ALWAYS,[y_]:s.LESS,[T0]:s.LEQUAL,[S_]:s.EQUAL,[A0]:s.GEQUAL,[M_]:s.GREATER,[w_]:s.NOTEQUAL};function Te(I,E){if(E.type===Hi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Jn||E.magFilter===Wu||E.magFilter===_l||E.magFilter===Fr||E.minFilter===Jn||E.minFilter===Wu||E.minFilter===_l||E.minFilter===Fr)&&gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Fe[E.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Fe[E.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Fe[E.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,ut[E.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,ut[E.minFilter]),E.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,je[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Nn||E.minFilter!==_l&&E.minFilter!==Fr||E.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ke(I,E){let ae=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",G),ee(E));const Ce=E.source;let ve=M.get(Ce);ve===void 0&&(ve={},M.set(Ce,ve));const Ue=U(E);if(Ue!==I.__cacheKey){ve[Ue]===void 0&&(ve[Ue]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,ae=!0),ve[Ue].usedTimes++;const xe=ve[I.__cacheKey];xe!==void 0&&(ve[I.__cacheKey].usedTimes--,xe.usedTimes===0&&K(E)),I.__cacheKey=Ue,I.__webglTexture=ve[Ue].texture}return ae}function Xe(I,E,ae){return Math.floor(Math.floor(I/ae)/E)}function St(I,E,ae,Ce){const Ue=I.updateRanges;if(Ue.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,ae,Ce,E.data);else{Ue.sort((k,me)=>k.start-me.start);let xe=0;for(let k=1;k<Ue.length;k++){const me=Ue[xe],de=Ue[k],Ne=me.start+me.count,Ee=Xe(de.start,E.width,4),Pe=Xe(me.start,E.width,4);de.start<=Ne+1&&Ee===Pe&&Xe(de.start+de.count-1,E.width,4)===Ee?me.count=Math.max(me.count,de.start+de.count-me.start):(++xe,Ue[xe]=de)}Ue.length=xe+1;const ie=t.getParameter(s.UNPACK_ROW_LENGTH),se=t.getParameter(s.UNPACK_SKIP_PIXELS),ye=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let k=0,me=Ue.length;k<me;k++){const de=Ue[k],Ne=Math.floor(de.start/4),Ee=Math.ceil(de.count/4),Pe=Ne%E.width,Ze=Math.floor(Ne/E.width),ct=Ee,Q=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ze),t.texSubImage2D(s.TEXTURE_2D,0,Pe,Ze,ct,Q,ae,Ce,E.data)}I.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ie),t.pixelStorei(s.UNPACK_SKIP_PIXELS,se),t.pixelStorei(s.UNPACK_SKIP_ROWS,ye)}}function Mt(I,E,ae){let Ce=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Ce=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Ce=s.TEXTURE_3D);const ve=ke(I,E),Ue=E.source;t.bindTexture(Ce,I.__webglTexture,s.TEXTURE0+ae);const xe=r.get(Ue);if(Ue.version!==xe.__version||ve===!0){if(t.activeTexture(s.TEXTURE0+ae),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const Q=Ut.getPrimaries(Ut.workingColorSpace),Ve=E.colorSpace===Ur?null:Ut.getPrimaries(E.colorSpace),$e=E.colorSpace===Ur||Q===Ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e)}t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let se=R(E.image,!1,o.maxTextureSize);se=qe(E,se);const ye=l.convert(E.format,E.colorSpace),k=l.convert(E.type);let me=D(E.internalFormat,ye,k,E.normalized,E.colorSpace,E.isVideoTexture);Te(Ce,E);let de;const Ne=E.mipmaps,Ee=E.isVideoTexture!==!0,Pe=xe.__version===void 0||ve===!0,Ze=Ue.dataReady,ct=N(E,se);if(E.isDepthTexture)me=w(E.format===kr,E.type),Pe&&(Ee?t.texStorage2D(s.TEXTURE_2D,1,me,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,me,se.width,se.height,0,ye,k,null));else if(E.isDataTexture)if(Ne.length>0){Ee&&Pe&&t.texStorage2D(s.TEXTURE_2D,ct,me,Ne[0].width,Ne[0].height);for(let Q=0,Ve=Ne.length;Q<Ve;Q++)de=Ne[Q],Ee?Ze&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,de.width,de.height,ye,k,de.data):t.texImage2D(s.TEXTURE_2D,Q,me,de.width,de.height,0,ye,k,de.data);E.generateMipmaps=!1}else Ee?(Pe&&t.texStorage2D(s.TEXTURE_2D,ct,me,se.width,se.height),Ze&&St(E,se,ye,k)):t.texImage2D(s.TEXTURE_2D,0,me,se.width,se.height,0,ye,k,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ee&&Pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ct,me,Ne[0].width,Ne[0].height,se.depth);for(let Q=0,Ve=Ne.length;Q<Ve;Q++)if(de=Ne[Q],E.format!==Gi)if(ye!==null)if(Ee){if(Ze)if(E.layerUpdates.size>0){const $e=Nm(de.width,de.height,E.format,E.type);for(const Oe of E.layerUpdates){const xt=de.data.subarray(Oe*$e/de.data.BYTES_PER_ELEMENT,(Oe+1)*$e/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,Oe,de.width,de.height,1,ye,xt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,se.depth,ye,de.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,me,de.width,de.height,se.depth,0,de.data,0,0);else gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ee?Ze&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,de.width,de.height,se.depth,ye,k,de.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Q,me,de.width,de.height,se.depth,0,ye,k,de.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Ee&&Pe&&t.texStorage2D(s.TEXTURE_2D,ct,me,Ne[0].width,Ne[0].height);for(let Q=0,Ve=Ne.length;Q<Ve;Q++)de=Ne[Q],E.format!==Gi?ye!==null?Ee?Ze&&t.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,de.width,de.height,ye,de.data):t.compressedTexImage2D(s.TEXTURE_2D,Q,me,de.width,de.height,0,de.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?Ze&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,de.width,de.height,ye,k,de.data):t.texImage2D(s.TEXTURE_2D,Q,me,de.width,de.height,0,ye,k,de.data)}else if(E.isDataArrayTexture)if(Ee){if(Pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ct,me,se.width,se.height,se.depth),Ze)if(E.layerUpdates.size>0){const Q=Nm(se.width,se.height,E.format,E.type);for(const Ve of E.layerUpdates){const $e=se.data.subarray(Ve*Q/se.data.BYTES_PER_ELEMENT,(Ve+1)*Q/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ve,se.width,se.height,1,ye,k,$e)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ye,k,se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,me,se.width,se.height,se.depth,0,ye,k,se.data);else if(E.isData3DTexture)Ee?(Pe&&t.texStorage3D(s.TEXTURE_3D,ct,me,se.width,se.height,se.depth),Ze&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ye,k,se.data)):t.texImage3D(s.TEXTURE_3D,0,me,se.width,se.height,se.depth,0,ye,k,se.data);else if(E.isFramebufferTexture){if(Pe)if(Ee)t.texStorage2D(s.TEXTURE_2D,ct,me,se.width,se.height);else{let Q=se.width,Ve=se.height;for(let $e=0;$e<ct;$e++)t.texImage2D(s.TEXTURE_2D,$e,me,Q,Ve,0,ye,k,null),Q>>=1,Ve>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const Q=s.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),se.parentNode!==Q){Q.appendChild(se),v.add(E),Q.onpaint=Ve=>{const $e=Ve.changedElements;for(const Oe of v)$e.includes(Oe.image)&&(Oe.needsUpdate=!0)},Q.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,se);else{const $e=s.RGBA,Oe=s.RGBA,xt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,$e,Oe,xt,se)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(Ee&&Pe){const Q=rt(Ne[0]);t.texStorage2D(s.TEXTURE_2D,ct,me,Q.width,Q.height)}for(let Q=0,Ve=Ne.length;Q<Ve;Q++)de=Ne[Q],Ee?Ze&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,ye,k,de):t.texImage2D(s.TEXTURE_2D,Q,me,ye,k,de);E.generateMipmaps=!1}else if(Ee){if(Pe){const Q=rt(se);t.texStorage2D(s.TEXTURE_2D,ct,me,Q.width,Q.height)}Ze&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ye,k,se)}else t.texImage2D(s.TEXTURE_2D,0,me,ye,k,se);F(E)&&E.mipmapsAutoUpdate===!0&&P(Ce),xe.__version=Ue.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Dt(I,E,ae){if(E.image.length!==6)return;const Ce=ke(I,E),ve=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+ae);const Ue=r.get(ve);if(ve.version!==Ue.__version||Ce===!0){t.activeTexture(s.TEXTURE0+ae);const xe=Ut.getPrimaries(Ut.workingColorSpace),ie=E.colorSpace===Ur?null:Ut.getPrimaries(E.colorSpace),se=E.colorSpace===Ur||xe===ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const ye=E.isCompressedTexture||E.image[0].isCompressedTexture,k=E.image[0]&&E.image[0].isDataTexture,me=[];for(let Oe=0;Oe<6;Oe++)!ye&&!k?me[Oe]=R(E.image[Oe],!0,o.maxCubemapSize):me[Oe]=k?E.image[Oe].image:E.image[Oe],me[Oe]=qe(E,me[Oe]);const de=me[0],Ne=l.convert(E.format,E.colorSpace),Ee=l.convert(E.type);let Pe=D(E.internalFormat,Ne,Ee,E.normalized,E.colorSpace);const Ze=E.isVideoTexture!==!0,ct=Ue.__version===void 0||Ce===!0,Q=ve.dataReady;let Ve=N(E,de);Te(s.TEXTURE_CUBE_MAP,E);let $e;if(E.isDepthTexture){if(Pe=w(E.format===kr,E.type),ct)if(Ze)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Pe,de.width,de.height);else for(let Oe=0;Oe<6;Oe++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Pe,de.width,de.height,0,Ne,Ee,null)}else if(ye){Ze&&ct&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ve,Pe,de.width,de.height);for(let Oe=0;Oe<6;Oe++){$e=me[Oe].mipmaps;for(let xt=0;xt<$e.length;xt++){const Rt=$e[xt];E.format!==Gi?Ne!==null?Ze?Q&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,xt,0,0,Rt.width,Rt.height,Ne,Rt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,xt,Pe,Rt.width,Rt.height,0,Rt.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,xt,0,0,Rt.width,Rt.height,Ne,Ee,Rt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,xt,Pe,Rt.width,Rt.height,0,Ne,Ee,Rt.data)}}}else{if($e=E.mipmaps,Ze&&ct){$e.length>0&&Ve++;const Oe=rt(me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ve,Pe,Oe.width,Oe.height)}for(let Oe=0;Oe<6;Oe++)if(k){Ze?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,me[Oe].width,me[Oe].height,Ne,Ee,me[Oe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Pe,me[Oe].width,me[Oe].height,0,Ne,Ee,me[Oe].data);for(let xt=0;xt<$e.length;xt++){const ce=$e[xt].image[Oe].image;Ze?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,xt+1,0,0,ce.width,ce.height,Ne,Ee,ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,xt+1,Pe,ce.width,ce.height,0,Ne,Ee,ce.data)}}else{Ze?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,0,0,Ne,Ee,me[Oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Pe,Ne,Ee,me[Oe]);for(let xt=0;xt<$e.length;xt++){const Rt=$e[xt];Ze?Q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,xt+1,0,0,Ne,Ee,Rt.image[Oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,xt+1,Pe,Ne,Ee,Rt.image[Oe])}}}F(E)&&E.mipmapsAutoUpdate===!0&&P(s.TEXTURE_CUBE_MAP),Ue.__version=ve.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function It(I,E,ae,Ce,ve,Ue){const xe=l.convert(ae.format,ae.colorSpace),ie=l.convert(ae.type),se=D(ae.internalFormat,xe,ie,ae.normalized,ae.colorSpace),ye=r.get(E),k=r.get(ae);if(k.__renderTarget=E,!ye.__hasExternalTextures){const me=Math.max(1,E.width>>Ue),de=Math.max(1,E.height>>Ue);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?t.texImage3D(ve,Ue,se,me,de,E.depth,0,xe,ie,null):t.texImage2D(ve,Ue,se,me,de,0,xe,ie,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),Ie(E)?m.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ce,ve,k.__webglTexture,0,bt(E)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Ce,ve,k.__webglTexture,Ue),t.bindFramebuffer(s.FRAMEBUFFER,null)}function nn(I,E,ae){if(s.bindRenderbuffer(s.RENDERBUFFER,I),E.depthBuffer){const Ce=E.depthTexture,ve=Ce&&Ce.isDepthTexture?Ce.type:null,Ue=w(E.stencilBuffer,ve),xe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ie(E)?m.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,bt(E),Ue,E.width,E.height):ae?s.renderbufferStorageMultisample(s.RENDERBUFFER,bt(E),Ue,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,I)}else{const Ce=E.textures;for(let ve=0;ve<Ce.length;ve++){const Ue=Ce[ve],xe=l.convert(Ue.format,Ue.colorSpace),ie=l.convert(Ue.type),se=D(Ue.internalFormat,xe,ie,Ue.normalized,Ue.colorSpace);Ie(E)?m.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,bt(E),se,E.width,E.height):ae?s.renderbufferStorageMultisample(s.RENDERBUFFER,bt(E),se,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,se,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Nt(I,E,ae){const Ce=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ve=r.get(E.depthTexture);ve.__renderTarget=E;const Ue=Ce?E.depthTexture.image[0]:E.depthTexture.image;(!ve.__webglTexture||Ue.width!==E.width||Ue.height!==E.height)&&(Ue.width=E.width,Ue.height=E.height,E.depthTexture.needsUpdate=!0),Ce?Se(E.depthTexture,0):_e(E.depthTexture,0);const xe=ve.__webglTexture,ie=bt(E),se=Ce?s.TEXTURE_CUBE_MAP_POSITIVE_X+ae:s.TEXTURE_2D,ye=E.depthTexture.format===kr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Hr)Ie(E)?m.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ye,se,xe,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,ye,se,xe,0);else if(E.depthTexture.format===kr)Ie(E)?m.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ye,se,xe,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,ye,se,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Wt(I){const E=r.get(I),ae=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const Ce=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Ce){const ve=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Ce.removeEventListener("dispose",ve)};Ce.addEventListener("dispose",ve),E.__depthDisposeCallback=ve}E.__boundDepthTexture=Ce}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(ae)for(let Ce=0;Ce<6;Ce++)Nt(E.__webglFramebuffer[Ce],I,Ce);else I.texture.mipmaps.length>0?Nt(E.__webglFramebuffer[0],I,0):Nt(E.__webglFramebuffer,I,0);else if(ae){E.__webglDepthbuffer=[];for(let Ce=0;Ce<6;Ce++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[Ce]),E.__webglDepthbuffer[Ce]===void 0)E.__webglDepthbuffer[Ce]=s.createRenderbuffer(),nn(E.__webglDepthbuffer[Ce],I,!1);else{const ve=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=E.__webglDepthbuffer[Ce];s.bindRenderbuffer(s.RENDERBUFFER,Ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,Ue)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),nn(E.__webglDepthbuffer,I,!1);else{const ve=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,Ue)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function kt(I,E,ae){const Ce=r.get(I);E!==void 0&&It(Ce.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ae!==void 0&&Wt(I)}function rn(I){const E=I.texture,ae=r.get(I),Ce=r.get(E);I.addEventListener("dispose",W),ee(I);const ve=I.textures,Ue=I.isWebGLCubeRenderTarget===!0,xe=ve.length>1;if(xe||(Ce.__webglTexture===void 0&&(Ce.__webglTexture=s.createTexture()),Ce.__version=E.version,d.memory.textures++),Ue){ae.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(E.mipmaps.length>0){ae.__webglFramebuffer[ie]=[];for(let se=0;se<E.mipmaps.length;se++)ae.__webglFramebuffer[ie][se]=s.createFramebuffer()}else ae.__webglFramebuffer[ie]=s.createFramebuffer()}else{if(E.mipmaps.length>0){ae.__webglFramebuffer=[];for(let ie=0;ie<E.mipmaps.length;ie++)ae.__webglFramebuffer[ie]=s.createFramebuffer()}else ae.__webglFramebuffer=s.createFramebuffer();if(xe)for(let ie=0,se=ve.length;ie<se;ie++){const ye=r.get(ve[ie]);ye.__webglTexture===void 0&&(ye.__webglTexture=s.createTexture(),d.memory.textures++)}if(I.samples>0&&Ie(I)===!1){ae.__webglMultisampledFramebuffer=s.createFramebuffer(),ae.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let ie=0;ie<ve.length;ie++){const se=ve[ie];ae.__webglColorRenderbuffer[ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ae.__webglColorRenderbuffer[ie]);const ye=l.convert(se.format,se.colorSpace),k=l.convert(se.type),me=D(se.internalFormat,ye,k,se.normalized,se.colorSpace,I.isXRRenderTarget===!0),de=bt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,de,me,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ie,s.RENDERBUFFER,ae.__webglColorRenderbuffer[ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(ae.__webglDepthRenderbuffer=s.createRenderbuffer(),nn(ae.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ue){t.bindTexture(s.TEXTURE_CUBE_MAP,Ce.__webglTexture),Te(s.TEXTURE_CUBE_MAP,E);for(let ie=0;ie<6;ie++)if(E.mipmaps.length>0)for(let se=0;se<E.mipmaps.length;se++)It(ae.__webglFramebuffer[ie][se],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,se);else It(ae.__webglFramebuffer[ie],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);F(E)?P(s.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(xe){for(let ie=0,se=ve.length;ie<se;ie++){const ye=ve[ie],k=r.get(ye);let me=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(me=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(me,k.__webglTexture),Te(me,ye),It(ae.__webglFramebuffer,I,ye,s.COLOR_ATTACHMENT0+ie,me,0),F(ye)&&P(me)}t.unbindTexture()}else{let ie=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ie=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ie,Ce.__webglTexture),Te(ie,E),E.mipmaps.length>0)for(let se=0;se<E.mipmaps.length;se++)It(ae.__webglFramebuffer[se],I,E,s.COLOR_ATTACHMENT0,ie,se);else It(ae.__webglFramebuffer,I,E,s.COLOR_ATTACHMENT0,ie,0);F(E)?P(ie):E.mipmaps.length>0&&s.texParameteri(ie,s.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&Wt(I)}function J(I){const E=I.textures;for(let ae=0,Ce=E.length;ae<Ce;ae++){const ve=E[ae];if(F(ve)&&ve.mipmapsAutoUpdate===!0){const Ue=z(I),xe=r.get(ve).__webglTexture;t.bindTexture(Ue,xe),P(Ue),t.unbindTexture()}}}const Yt=[];function Pt(I){if(I.samples>0){if(Ie(I)===!1){const E=I.textures,ae=I.width,Ce=I.height;let ve=s.COLOR_BUFFER_BIT;const Ue=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=r.get(I),ie=E.length>1;if(ie)for(let ye=0;ye<E.length;ye++)t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let ye=0;ye<E.length;ye++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),ie){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xe.__webglColorRenderbuffer[ye]);const k=r.get(E[ye]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,k,0)}s.blitFramebuffer(0,0,ae,Ce,0,0,ae,Ce,ve,s.NEAREST),u===!0&&(Yt.length=0,Yt.push(s.COLOR_ATTACHMENT0+ye),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&Yt.push(Ue),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Yt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ie)for(let ye=0;ye<E.length;ye++){t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,xe.__webglColorRenderbuffer[ye]);const k=r.get(E[ye]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,k,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&u){const E=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function bt(I){return Math.min(o.maxSamples,I.samples)}function Ie(I){const E=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Et(I){const E=d.render.frame;x.get(I)!==E&&(x.set(I,E),I.update())}function qe(I,E){const ae=I.colorSpace,Ce=I.format,ve=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||ae!==Jl&&ae!==Ur&&(Ut.getTransfer(ae)===$t?(Ce!==Gi||ve!==ai)&&gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Vt("WebGLTextures: Unsupported texture color space:",ae)),E}function rt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=be,this.resetTextureUnits=Y,this.getTextureUnits=L,this.setTextureUnits=ne,this.setTexture2D=_e,this.setTexture2DArray=Me,this.setTexture3D=De,this.setTextureCube=Se,this.rebindTextures=kt,this.setupRenderTarget=rn,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=It,this.useMultisampledRTT=Ie,this.dispose=O}function Jw(s,e){function t(r,o=Ur){let l;const d=Ut.getTransfer(o);if(r===ai)return s.UNSIGNED_BYTE;if(r===mf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===gf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===S0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===M0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===_0)return s.BYTE;if(r===y0)return s.SHORT;if(r===so)return s.UNSIGNED_SHORT;if(r===pf)return s.INT;if(r===Wi)return s.UNSIGNED_INT;if(r===Hi)return s.FLOAT;if(r===ji)return s.HALF_FLOAT;if(r===w0)return s.ALPHA;if(r===b0)return s.RGB;if(r===Gi)return s.RGBA;if(r===Hr)return s.DEPTH_COMPONENT;if(r===kr)return s.DEPTH_STENCIL;if(r===E0)return s.RED;if(r===xf)return s.RED_INTEGER;if(r===hs)return s.RG;if(r===vf)return s.RG_INTEGER;if(r===_f)return s.RGBA_INTEGER;if(r===Gl||r===Vl||r===Wl||r===jl)if(d===$t)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Gl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Wl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Gl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Wl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===jl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ad||r===Cd||r===Rd||r===Nd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Ad)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Cd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Rd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Nd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Pd||r===Ld||r===Dd||r===Id||r===Ud||r===Kl||r===zd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Pd||r===Ld)return d===$t?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Dd)return d===$t?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Id)return l.COMPRESSED_R11_EAC;if(r===Ud)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Kl)return l.COMPRESSED_RG11_EAC;if(r===zd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Fd||r===kd||r===Od||r===Bd||r===Hd||r===Gd||r===Vd||r===Wd||r===jd||r===$d||r===Xd||r===Yd||r===qd||r===Kd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Fd)return d===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===kd)return d===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Od)return d===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bd)return d===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Hd)return d===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Gd)return d===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vd)return d===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Wd)return d===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===jd)return d===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===$d)return d===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xd)return d===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yd)return d===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===qd)return d===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kd)return d===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Zd||r===Jd||r===Qd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Zd)return d===$t?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Qd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ef||r===tf||r===Zl||r===nf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===ef)return l.COMPRESSED_RED_RGTC1_EXT;if(r===tf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===nf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ia?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const Qw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eb=`
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

}`;class tb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new k0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ri({vertexShader:Qw,fragmentShader:eb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wn(new ho(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nb extends ps{constructor(e,t){super();const r=this;let o=null,l=1,d=null,m="local-floor",u=1,h=null,x=null,v=null,_=null,M=null,b=null;const C=typeof XRWebGLBinding<"u",y=new tb,S={},R=t.getContextAttributes();let F=null,P=null;const z=[],D=[],w=new Ft;let N=null,ee=null;const X=new Ti;X.viewport=new on;const G=new Ti;G.viewport=new on;const W=[X,G],V=new py;let H=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let _e=z[U];return _e===void 0&&(_e=new Qu,z[U]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(U){let _e=z[U];return _e===void 0&&(_e=new Qu,z[U]=_e),_e.getGripSpace()},this.getHand=function(U){let _e=z[U];return _e===void 0&&(_e=new Qu,z[U]=_e),_e.getHandSpace()};function re(U){const _e=D.indexOf(U.inputSource);if(_e===-1)return;const Me=z[_e];Me!==void 0&&(Me.update(U.inputSource,U.frame,h||d),Me.dispatchEvent({type:U.type,data:U.inputSource}))}function K(){o.removeEventListener("select",re),o.removeEventListener("selectstart",re),o.removeEventListener("selectend",re),o.removeEventListener("squeeze",re),o.removeEventListener("squeezestart",re),o.removeEventListener("squeezeend",re),o.removeEventListener("end",K),o.removeEventListener("inputsourceschange",j);for(let U=0;U<z.length;U++){const _e=D[U];_e!==null&&(D[U]=null,z[U].disconnect(_e))}H=null,O=null,y.reset();for(const U in S)delete S[U];if(e.setRenderTarget(F),M=null,_=null,v=null,o=null,P=null,be.stop(),r.isPresenting=!1,e.setPixelRatio(N),e.setSize(w.width,w.height,!1),ee!==null){const U=ee.camera;U.fov=ee.fov,U.zoom=ee.zoom,U.updateProjectionMatrix(),ee=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){l=U,r.isPresenting===!0&&gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){m=U,r.isPresenting===!0&&gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(U){h=U},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(U){if(o=U,o!==null){if(F=e.getRenderTarget(),o.addEventListener("select",re),o.addEventListener("selectstart",re),o.addEventListener("selectend",re),o.addEventListener("squeeze",re),o.addEventListener("squeezestart",re),o.addEventListener("squeezeend",re),o.addEventListener("end",K),o.addEventListener("inputsourceschange",j),R.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(w),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,De=null,Se=null;R.depth&&(Se=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=R.stencil?kr:Hr,De=R.stencil?ia:Wi);const Fe={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:l};v=this.getBinding(),_=v.createProjectionLayer(Fe),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),P=new Vi(_.textureWidth,_.textureHeight,{format:Gi,type:ai,depthTexture:new ra(_.textureWidth,_.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const Me={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,Me),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Vi(M.framebufferWidth,M.framebufferHeight,{format:Gi,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(u),h=null,d=await o.requestReferenceSpace(m),be.setContext(o),be.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function j(U){for(let _e=0;_e<U.removed.length;_e++){const Me=U.removed[_e],De=D.indexOf(Me);De>=0&&(D[De]=null,z[De].disconnect(Me))}for(let _e=0;_e<U.added.length;_e++){const Me=U.added[_e];let De=D.indexOf(Me);if(De===-1){for(let Fe=0;Fe<z.length;Fe++)if(Fe>=D.length){D.push(Me),De=Fe;break}else if(D[Fe]===null){D[Fe]=Me,De=Fe;break}if(De===-1)break}const Se=z[De];Se&&Se.connect(Me)}}function $(U,_e){_e===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(_e.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(o===null)return;let _e=U.near,Me=U.far;y.texture!==null&&(y.depthNear>0&&(_e=y.depthNear),y.depthFar>0&&(Me=y.depthFar)),V.near=G.near=X.near=_e,V.far=G.far=X.far=Me,(H!==V.near||O!==V.far)&&(o.updateRenderState({depthNear:V.near,depthFar:V.far}),H=V.near,O=V.far),V.layers.mask=U.layers.mask|6,X.layers.mask=V.layers.mask&-5,G.layers.mask=V.layers.mask&-3;const De=U.parent,Se=V.cameras;$(V,De);for(let Fe=0;Fe<Se.length;Fe++)$(Se[Fe],De);V.projectionMatrix.copy(X.projectionMatrix),V.projectionMatrixInverse.copy(X.projectionMatrixInverse),ee===null&&U.isPerspectiveCamera&&(ee={camera:U,fov:U.fov,zoom:U.zoom}),Y(U,V,De)};function Y(U,_e,Me){Me===null?U.matrix.copy(_e.matrixWorld):(U.matrix.copy(Me.matrixWorld),U.matrix.invert(),U.matrix.multiply(_e.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(_e.projectionMatrix),U.projectionMatrixInverse.copy(_e.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=sf*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(_===null&&M===null))return u},this.setFoveation=function(U){u=U,_!==null&&(_.fixedFoveation=U),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=U)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(V)},this.getCameraTexture=function(U){return S[U]};let L=null;function ne(U,_e){if(x=_e.getViewerPose(h||d),b=_e,x!==null){const Me=x.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let De=!1;Me.length!==V.cameras.length&&(V.cameras.length=0,De=!0);for(let je=0;je<Me.length;je++){const Te=Me[je];let ke=null;if(M!==null)ke=M.getViewport(Te);else{const St=v.getViewSubImage(_,Te);ke=St.viewport,je===0&&(e.setRenderTargetTextures(P,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(P))}let Xe=W[je];Xe===void 0&&(Xe=new Ti,Xe.layers.enable(je),Xe.viewport=new on,W[je]=Xe),Xe.matrix.fromArray(Te.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Te.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(ke.x,ke.y,ke.width,ke.height),je===0&&(V.matrix.copy(Xe.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),De===!0&&V.cameras.push(Xe)}const Se=o.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){v=r.getBinding();const je=v.getDepthInformation(Me[0]);je&&je.isValid&&je.texture&&y.init(je,o.renderState)}if(Se&&Se.includes("camera-access")&&C){e.state.unbindTexture(),v=r.getBinding();for(let je=0;je<Me.length;je++){const Te=Me[je].camera;if(Te){let ke=S[Te];ke||(ke=new k0,S[Te]=ke);const Xe=v.getCameraImage(Te);ke.sourceTexture=Xe}}}}for(let Me=0;Me<z.length;Me++){const De=D[Me],Se=z[Me];De!==null&&Se!==void 0&&Se.update(De,_e,h||d)}L&&L(U,_e),_e.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:_e}),b=null}const be=new V0;be.setAnimationLoop(ne),this.setAnimationLoop=function(U){L=U},this.dispose=function(){}}}const ib=new ln,Q0=new vt;Q0.set(-1,0,0,0,1,0,0,0,1);function rb(s,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,O0(s)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function o(y,S,R,F,P){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?l(y,S):S.isMeshLambertMaterial?(l(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(y,S),v(y,S)):S.isMeshPhongMaterial?(l(y,S),x(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(y,S),_(y,S),S.isMeshPhysicalMaterial&&M(y,S,P)):S.isMeshMatcapMaterial?(l(y,S),b(y,S)):S.isMeshDepthMaterial?l(y,S):S.isMeshDistanceMaterial?(l(y,S),C(y,S)):S.isMeshNormalMaterial?l(y,S):S.isLineBasicMaterial?(d(y,S),S.isLineDashedMaterial&&m(y,S)):S.isPointsMaterial?u(y,S,R,F):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===kn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===kn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const R=e.get(S),F=R.envMap,P=R.envMapRotation;F&&(y.envMap.value=F,y.envMapRotation.value.setFromMatrix4(ib.makeRotationFromEuler(P)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Q0),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function m(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function u(y,S,R,F){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*R,y.scale.value=F*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function x(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function _(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,R){y.ior.value=S.ior,S.diffuseRoughness>0&&(y.diffuseRoughness.value=S.diffuseRoughness,S.diffuseRoughnessMap&&(y.diffuseRoughnessMap.value=S.diffuseRoughnessMap,t(S.diffuseRoughnessMap,y.diffuseRoughnessMapTransform))),S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===kn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.retroreflectivity>0&&(y.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessMinimum,y.iridescenceThicknessMaximum.value=S.iridescenceThicknessMaximum,S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,S){S.matcap&&(y.matcap.value=S.matcap)}function C(y,S){const R=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function sb(s,e,t,r){let o={},l={};function d(R,F){const P=F.program;r.uniformBlockBinding(R,P,o[R.id])}function m(R,F){let P=o[R.id];P===void 0&&(b(R),P=u(R),o[R.id]=P,R.addEventListener("dispose",y));const z=F.program;r.updateUBOMapping(R,z);const D=e.render.frame;l[R.id]!==D&&(h(R),l[R.id]=D)}function u(R){const F=s.createBuffer(),P=R.__size,z=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,F),s.bufferData(s.UNIFORM_BUFFER,P,z),s.bindBuffer(s.UNIFORM_BUFFER,null),F}function h(R){const F=o[R.id],P=R.uniforms,z=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,F);for(let D=0,w=P.length;D<w;D++){const N=P[D];if(Array.isArray(N))for(let ee=0,X=N.length;ee<X;ee++)x(N[ee],D,ee,z);else x(N,D,0,z)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(R,F,P,z){if(_(R,F,P,z)===!0){const D=R.__offset,w=R.value;if(Array.isArray(w)){let N=0;for(let ee=0;ee<w.length;ee++){const X=w[ee],G=C(X,!0);v(X,R.__data,N),N+=G.storage/Float32Array.BYTES_PER_ELEMENT}}else v(w,R.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,D,R.__data)}}function v(R,F,P){typeof R=="number"||typeof R=="boolean"?F[P]=R:R.isMatrix3?(F[P]=R.elements[0],F[P+1]=R.elements[1],F[P+2]=R.elements[2],F[P+3]=0,F[P+4]=R.elements[3],F[P+5]=R.elements[4],F[P+6]=R.elements[5],F[P+7]=0,F[P+8]=R.elements[6],F[P+9]=R.elements[7],F[P+10]=R.elements[8],F[P+11]=0):ArrayBuffer.isView(R)?F.set(R.subarray(0,F.length-P),P):R.toArray(F,P)}function _(R,F,P,z){const D=R.value,w=F+"_"+P;if(Array.isArray(D)){z[w]===void 0&&(z[w]=[]);const N=z[w];let ee=!1;for(let X=0;X<D.length;X++)M(D[X],N,X)===!0&&(ee=!0);return ee}return M(D,z,w)}function M(R,F,P){if(F[P]===void 0)return typeof R=="number"||typeof R=="boolean"?F[P]=R:ArrayBuffer.isView(R)?F[P]=R.slice():F[P]=R.clone(),!0;{const z=F[P];if(typeof R=="number"||typeof R=="boolean"){if(z!==R)return F[P]=R,!0}else{if(ArrayBuffer.isView(R))return!0;if(z.equals(R)===!1)return z.copy(R),!0}}return!1}function b(R){const F=R.uniforms;let P=0;const z=16;for(let w=0,N=F.length;w<N;w++){const ee=Array.isArray(F[w])?F[w]:[F[w]];for(let X=0,G=ee.length;X<G;X++){const W=ee[X],V=Array.isArray(W.value)?W.value:[W.value],H=Array.isArray(F[w])||Array.isArray(W.value);let O=P;for(let K=0,j=V.length;K<j;K++){const $=V[K],Y=C($,H),L=P%z,ne=L%Y.boundary,be=L+ne;P+=ne,be!==0&&z-be<Y.storage&&(P+=z-be),K===0&&(O=P),P+=Y.storage}const re=W.type==="int"?Int32Array:W.type==="uint"?Uint32Array:Float32Array;W.__data=new re((P-O)/Float32Array.BYTES_PER_ELEMENT),W.__offset=O}}const D=P%z;return D>0&&(P+=z-D),R.__size=P,R.__cache={},this}function C(R,F){const P={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(P.boundary=4,P.storage=4):R.isVector2?(P.boundary=8,P.storage=8):R.isVector3||R.isColor?(P.boundary=16,P.storage=12):R.isVector4?(P.boundary=16,P.storage=16):R.isMatrix3?(P.boundary=16,P.storage=48):R.isMatrix4?(P.boundary=16,P.storage=64):R.isTexture?gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(P.boundary=16,P.storage=R.byteLength):gt("WebGLRenderer: Unsupported uniform value type.",R),F===!0&&(P.boundary=16,P.storage=Math.ceil(P.storage/16)*16),P}function y(R){const F=R.target;F.removeEventListener("dispose",y),s.deleteBuffer(o[F.id]),delete o[F.id],delete l[F.id]}function S(){for(const R in o)s.deleteBuffer(o[R]);o={},l={}}return{bind:d,update:m,dispose:S}}const ab=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ki=null;function ob(){return ki===null&&(ki=new ty(ab,16,16,hs,ji),ki.name="DFG_LUT",ki.minFilter=Jn,ki.magFilter=Jn,ki.wrapS=oi,ki.wrapT=oi,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}class lb{constructor(e={}){const{canvas:t=T_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:d=!1,antialias:m=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:M=ai}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=d;const C=M,y=new Set([_f,vf,xf]),S=new Set([ai,Wi,so,ia,mf,gf]),R=new Uint32Array(4),F=new Int32Array(4),P={textures:[],min:[],max:[],resolution:[]};let z=null,D=null;const w=[],N=[];let ee=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=or,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let G=!1,W=null,V=null,H=null,O=null;this._outputColorSpace=si;let re=0,K=0,j=null,$=-1,Y=null;const L=new on,ne=new on;let be=null;const U=new Ct(0);let _e=0,Me=t.width,De=t.height,Se=1,Fe=null,ut=null;const je=new on(0,0,Me,De),Te=new on(0,0,Me,De);let ke=!1;const Xe=new oo,St=new wf;let Mt=!1,Dt=!1;const It=new ln,nn=new pe,Nt=new on,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function rn(){return j===null?Se:1}let J=r;function Yt(A,q){return t.getContext(A,q)}let Pt,bt,Ie,Et,qe,rt,I,E,ae,Ce,ve,Ue,xe,ie,se,ye,k,me,de,Ne,Ee,Pe,Ze;try{const A={alpha:!0,depth:o,stencil:l,antialias:m,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hf}`),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",$e,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),J===null){const q="webgl2";if(J=Yt(q,A),J===null)throw Yt(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ct()}catch(A){throw t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),Vt("WebGLRenderer: "+A.message),A}function ct(){Pt=new dM(J),Pt.init(),Ee=new Jw(J,Pt),bt=new eM(J,Pt,e,Ee),Ie=new Kw(J,Pt),bt.reversedDepthBuffer&&_&&Ie.buffers.depth.setReversed(!0),V=J.createFramebuffer(),H=J.createFramebuffer(),O=J.createFramebuffer(),Et=new pM(J),qe=new zw,rt=new Zw(J,Pt,Ie,qe,bt,Ee,Et),I=new uM(X),E=new gy(J),Pe=new J1(J,E),ae=new fM(J,E,Et,Pe),Ce=new gM(J,ae,E,Pe,Et),me=new mM(J,bt,rt),se=new tM(qe),ve=new Uw(X,I,Pt,bt,Pe,se),Ue=new rb(X,qe),xe=new kw,ie=new Ww(Pt),k=new Z1(X,I,Ie,Ce,b,u),ye=new qw(X,Ce,bt),Ze=new sb(J,Et,bt,Ie),de=new Q1(J,Pt,Et),Ne=new hM(J,Pt,Et),Et.programs=ve.programs,X.capabilities=bt,X.extensions=Pt,X.properties=qe,X.renderLists=xe,X.shadowMap=ye,X.state=Ie,X.info=Et}C!==ai&&(ee=new vM(C,t.width,t.height,m,o,l));const Q=new nb(X,J);this.xr=Q,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const A=Pt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Pt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(A){A!==void 0&&(Se=A,this.setSize(Me,De,!1))},this.getSize=function(A){return A.set(Me,De)},this.setSize=function(A,q,fe=!0){if(Q.isPresenting){gt("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=A,De=q,t.width=Math.floor(A*Se),t.height=Math.floor(q*Se),fe===!0&&(t.style.width=A+"px",t.style.height=q+"px"),ee!==null&&ee.setSize(t.width,t.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(Me*Se,De*Se).floor()},this.setDrawingBufferSize=function(A,q,fe){Me=A,De=q,Se=fe,t.width=Math.floor(A*fe),t.height=Math.floor(q*fe),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(C===ai){Vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}ee.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(je)},this.setViewport=function(A,q,fe,le){A.isVector4?je.set(A.x,A.y,A.z,A.w):je.set(A,q,fe,le),Ie.viewport(L.copy(je).multiplyScalar(rn()).round())},this.getScissor=function(A){return A.copy(Te)},this.setScissor=function(A,q,fe,le){A.isVector4?Te.set(A.x,A.y,A.z,A.w):Te.set(A,q,fe,le),Ie.scissor(ne.copy(Te).multiplyScalar(rn()).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(A){Ie.setScissorTest(ke=A)},this.setOpaqueSort=function(A){Fe=A},this.setTransparentSort=function(A){ut=A},this.getClearColor=function(A){return A.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor(...arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,fe=!0){let le=0;if(A){let oe=!1;if(j!==null){const We=j.texture.format;oe=y.has(We)}if(oe){const We=j.texture.type,Qe=S.has(We),Ge=k.getClearColor(),Ye=k.getClearAlpha(),tt=Ge.r,ht=Ge.g,yt=Ge.b;Qe?(R[0]=tt,R[1]=ht,R[2]=yt,R[3]=Ye,J.clearBufferuiv(J.COLOR,0,R)):(F[0]=tt,F[1]=ht,F[2]=yt,F[3]=Ye,J.clearBufferiv(J.COLOR,0,F))}else le|=J.COLOR_BUFFER_BIT}q&&(le|=J.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(le|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&J.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),W=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),k.dispose(),xe.dispose(),ie.dispose(),rt.dispose(),qe.dispose(),I.dispose(),Ce.dispose(),ae.dispose(),Pe.dispose(),Ze.dispose(),ve.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",qt),Q.removeEventListener("sessionend",mn),Mn.stop()};function Ve(A){A.preventDefault(),cm("WebGLRenderer: Context Lost."),G=!0}function $e(){cm("WebGLRenderer: Context Restored."),G=!1;const A=Et.autoReset,q=ye.enabled,fe=ye.autoUpdate,le=ye.needsUpdate,oe=ye.type;ct(),Et.autoReset=A,ye.enabled=q,ye.autoUpdate=fe,ye.needsUpdate=le,ye.type=oe}function Oe(A){Vt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function xt(A){const q=A.target;q.removeEventListener("dispose",xt),Rt(q)}function Rt(A){ce(A),qe.remove(A)}function ce(A){const q=qe.get(A).programs;q!==void 0&&(q.forEach(function(fe){ve.releaseProgram(fe)}),A.isShaderMaterial&&ve.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,fe,le,oe,We){q===null&&(q=Wt);const Qe=oe.isMesh&&oe.matrixWorld.determinantAffine()<0,Ge=da(A,q,fe,le,oe);Ie.setMaterial(le,Qe);let Ye=fe.index,tt=1;if(le.wireframe===!0){if(Ye=ae.getWireframeAttribute(fe),Ye===void 0)return;tt=2}const ht=fe.drawRange,yt=fe.attributes.position;let nt=ht.start*tt,Tt=(ht.start+ht.count)*tt;We!==null&&(nt=Math.max(nt,We.start*tt),Tt=Math.min(Tt,(We.start+We.count)*tt)),Ye!==null?(nt=Math.max(nt,0),Tt=Math.min(Tt,Ye.count)):yt!=null&&(nt=Math.max(nt,0),Tt=Math.min(Tt,yt.count));const en=Tt-nt;if(en<0||en===1/0)return;Pe.setup(oe,le,Ge,fe,Ye);let jt,Gt=de;if(Ye!==null&&(jt=E.get(Ye),Gt=Ne,Gt.setIndex(jt)),oe.isMesh)le.wireframe===!0?(Ie.setLineWidth(le.wireframeLinewidth*rn()),Gt.setMode(J.LINES)):Gt.setMode(J.TRIANGLES);else if(oe.isLine){let cn=le.linewidth;cn===void 0&&(cn=1),Ie.setLineWidth(cn*rn()),oe.isLineSegments?Gt.setMode(J.LINES):oe.isLineLoop?Gt.setMode(J.LINE_LOOP):Gt.setMode(J.LINE_STRIP)}else oe.isPoints?Gt.setMode(J.POINTS):oe.isSprite&&Gt.setMode(J.TRIANGLES);if(oe.isBatchedMesh)if(Pt.get("WEBGL_multi_draw"))Gt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{const cn=oe._multiDrawStarts,it=oe._multiDrawCounts,gn=oe._multiDrawCount,ot=Ye?E.get(Ye).bytesPerElement:1,Pi=qe.get(le).currentProgram.getUniforms();for(let xn=0;xn<gn;xn++)Pi.setValue(J,"_gl_DrawID",xn),Gt.render(cn[xn]/ot,it[xn])}else if(oe.isInstancedMesh)Gt.renderInstances(nt,en,oe.count);else if(fe.isInstancedBufferGeometry){const cn=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,it=Math.min(fe.instanceCount,cn);Gt.renderInstances(nt,en,it)}else Gt.render(nt,en)};function Be(A,q,fe,le){W!==null&&A.isNodeMaterial&&W.setObject(le,A),Mt===!0&&se.setState(A,fe,!1),A.transparent===!0&&A.side===Bi&&A.forceSinglePass===!1?(A.side=kn,A.needsUpdate=!0,jr(A,q,le),A.side=fs,A.needsUpdate=!0,jr(A,q,le),A.side=Bi):jr(A,q,le)}this.compile=function(A,q,fe=null){fe===null&&(fe=A),W!==null&&W.renderStart(A,q,fe),D=ie.get(fe),D.init(q),N.push(D),fe.traverseVisible(function(oe){oe.isLight&&oe.layers.test(q.layers)&&(D.pushLight(oe),oe.castShadow&&D.pushShadow(oe))}),A!==fe&&A.traverseVisible(function(oe){oe.isLight&&oe.layers.test(q.layers)&&(D.pushLight(oe),oe.castShadow&&D.pushShadow(oe))}),D.setupLights(),W!==null&&W.updateLights(D.state.lightsArray),Dt=this.localClippingEnabled,Mt=se.init(this.clippingPlanes,Dt),Mt===!0&&se.setGlobalState(this.clippingPlanes,q),W!==null&&ye.render(D.state.shadowsArray,fe,q);const le=new Set;return A.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;const We=oe.material;if(We)if(Array.isArray(We))for(let Qe=0;Qe<We.length;Qe++){const Ge=We[Qe];Be(Ge,fe,q,oe),le.add(Ge)}else Be(We,fe,q,oe),le.add(We)}),D=N.pop(),W!==null&&W.renderEnd(),le},this.compileAsync=function(A,q,fe=null){const le=this.compile(A,q,fe);return new Promise(oe=>{function We(){if(le.forEach(function(Qe){const Ye=qe.get(Qe).currentProgram;(Ye===void 0||Ye.isReady())&&le.delete(Qe)}),le.size===0){oe(A);return}setTimeout(We,10)}Pt.get("KHR_parallel_shader_compile")!==null?We():setTimeout(We,10)})};let Ae=null;function mt(A){Ae&&Ae(A)}function qt(){Mn.stop()}function mn(){Mn.start()}const Mn=new V0;Mn.setAnimationLoop(mt),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(A){Ae=A,Q.setAnimationLoop(A),A===null?Mn.stop():Mn.start()},Q.addEventListener("sessionstart",qt),Q.addEventListener("sessionend",mn),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){Vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;W!==null&&W.renderStart(A,q);const fe=Q.enabled===!0&&Q.isPresenting===!0,le=ee!==null&&(j===null||fe)&&ee.begin(X,j);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(ee===null||ee.isCompositing()===!1)&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(q),q=Q.getCamera()),A.isScene===!0&&A.onBeforeRender(X,A,q,j),D=ie.get(A,N.length),D.init(q),D.state.textureUnits=rt.getTextureUnits(),N.push(D),It.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),q.isArrayCamera?St.setFromArrayCamera(q):Xe.setFromProjectionMatrix(It,Ci,q.reversedDepth),Dt=this.localClippingEnabled,Mt=se.init(this.clippingPlanes,Dt),z=xe.get(A,w.length),z.init(),w.push(z),this.info.render.frame++,Q.enabled===!0&&Q.isPresenting===!0){const Qe=X.xr.getDepthSensingMesh();Qe!==null&&Ni(Qe,q,-1/0,X.sortObjects)}Ni(A,q,0,X.sortObjects),z.finish(),W!==null&&W.updateLights(D.state.lightsArray),X.sortObjects===!0&&z.sort(Fe,ut),kt=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,kt&&k.addToRenderList(z,A),this.info.autoReset===!0&&this.info.reset(),Mt===!0&&se.beginShadows();const oe=D.state.shadowsArray;if(ye.render(oe,A,q),Mt===!0&&se.endShadows(),(le&&ee.hasRenderPass())===!1){const Qe=z.opaque,Ge=z.transmissive;if(D.setupLights(),q.isArrayCamera){const Ye=q.cameras;if(Ge.length>0)for(let tt=0,ht=Ye.length;tt<ht;tt++){const yt=Ye[tt];la(Qe,Ge,A,yt)}kt&&k.render(A);for(let tt=0,ht=Ye.length;tt<ht;tt++){const yt=Ye[tt];ms(z,A,yt,yt.viewport)}}else Ge.length>0&&la(Qe,Ge,A,q),kt&&k.render(A),ms(z,A,q)}j!==null&&K===0&&(rt.updateMultisampleRenderTarget(j),rt.updateRenderTargetMipmap(j)),le&&ee.end(X),A.isScene===!0&&A.onAfterRender(X,A,q),Pe.resetDefaultState(),$=-1,Y=null,N.pop(),N.length>0?(D=N[N.length-1],rt.setTextureUnits(D.state.textureUnits),Mt===!0&&se.setGlobalState(X.clippingPlanes,D.state.camera)):D=null,w.pop(),w.length>0?z=w[w.length-1]:z=null,W!==null&&W.renderEnd()};function Ni(A,q,fe,le){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)fe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)D.pushLight(A),A.castShadow&&D.pushShadow(A);else if(A.isSprite){const Qe=q.isArrayCamera?St:Xe;if(!A.frustumCulled||A.intersectsFrustum(Qe)){le&&Nt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(It);const Ge=Ce.update(A),Ye=A.material;Ye.visible&&z.push(A,Ge,Ye,fe,Nt.z,null,q)}}else if(A.isMesh||A.isLine||A.isPoints){const Qe=q.isArrayCamera?St:Xe;if(!A.frustumCulled||A.intersectsFrustum(Qe)){const Ge=Ce.update(A),Ye=A.material;if(le&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Nt.copy(A.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),Nt.copy(Ge.boundingSphere.center)),Nt.applyMatrix4(A.matrixWorld).applyMatrix4(It)),Array.isArray(Ye)){const tt=Ge.groups;for(let ht=0,yt=tt.length;ht<yt;ht++){const nt=tt[ht],Tt=Ye[nt.materialIndex];Tt&&Tt.visible&&z.push(A,Ge,Tt,fe,Nt.z,nt,q)}}else Ye.visible&&z.push(A,Ge,Ye,fe,Nt.z,null,q)}}}const We=A.children;for(let Qe=0,Ge=We.length;Qe<Ge;Qe++)Ni(We[Qe],q,fe,le)}function ms(A,q,fe,le){const{opaque:oe,transmissive:We,transparent:Qe}=A;D.setupLightsView(fe),Mt===!0&&se.setGlobalState(X.clippingPlanes,fe),le&&Ie.viewport(L.copy(le)),oe.length>0&&Wr(oe,q,fe),We.length>0&&Wr(We,q,fe),Qe.length>0&&Wr(Qe,q,fe),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function la(A,q,fe,le){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[le.id]===void 0){const nt=Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[le.id]=new Vi(1,1,{generateMipmaps:!0,type:nt?ji:ai,minFilter:Fr,samples:Math.max(4,bt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ut.workingColorSpace})}const We=D.state.transmissionRenderTarget[le.id],Qe=le.viewport||L;We.setSize(Qe.z*X.transmissionResolutionScale,Qe.w*X.transmissionResolutionScale);const Ge=X.getRenderTarget(),Ye=X.getActiveCubeFace(),tt=X.getActiveMipmapLevel();X.setRenderTarget(We),X.getClearColor(U),_e=X.getClearAlpha(),_e<1&&X.setClearColor(16777215,.5),X.clear(),kt&&k.render(fe);const ht=X.toneMapping;X.toneMapping=or;const yt=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),D.setupLightsView(le),Mt===!0&&se.setGlobalState(X.clippingPlanes,le),Wr(A,fe,le),rt.updateMultisampleRenderTarget(We),rt.updateRenderTargetMipmap(We),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Tt=0,en=q.length;Tt<en;Tt++){const jt=q[Tt],{object:Gt,geometry:cn,material:it,group:gn}=jt;if(it.side===Bi&&Gt.layers.test(le.layers)){const ot=it.side;it.side=kn,it.needsUpdate=!0,ca(Gt,fe,le,cn,it,gn),it.side=ot,it.needsUpdate=!0,nt=!0}}nt===!0&&(rt.updateMultisampleRenderTarget(We),rt.updateRenderTargetMipmap(We))}X.setRenderTarget(Ge,Ye,tt),X.setClearColor(U,_e),yt!==void 0&&(le.viewport=yt),X.toneMapping=ht}function Wr(A,q,fe){const le=q.isScene===!0?q.overrideMaterial:null;for(let oe=0,We=A.length;oe<We;oe++){const Qe=A[oe],{object:Ge,geometry:Ye,group:tt}=Qe;let ht=Qe.material;ht.allowOverride===!0&&le!==null&&(ht=le),Ge.layers.test(fe.layers)&&ca(Ge,q,fe,Ye,ht,tt)}}function ca(A,q,fe,le,oe,We){W!==null&&oe.isNodeMaterial&&W.setObject(A,oe),A.onBeforeRender(X,q,fe,le,oe,We),A.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),oe.onBeforeRender(X,q,fe,le,A,We),oe.transparent===!0&&oe.side===Bi&&oe.forceSinglePass===!1?(oe.side=kn,oe.needsUpdate=!0,X.renderBufferDirect(fe,q,le,oe,A,We),oe.side=fs,oe.needsUpdate=!0,X.renderBufferDirect(fe,q,le,oe,A,We),oe.side=Bi):X.renderBufferDirect(fe,q,le,oe,A,We),A.onAfterRender(X,q,fe,le,oe,We)}function ua(A){let q=0;for(const fe of A)fe.texture!==null&&q++;return q}function jr(A,q,fe){q.isScene!==!0&&(q=Wt);const le=qe.get(A),oe=D.state.lights,We=D.state.shadowsArray,Qe=oe.state.version,Ge=ve.getParameters(A,oe.state,We,q,fe,D.state.lightProbeGridArray),Ye=ve.getProgramCacheKey(Ge);let tt=le.programs;le.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,le.fog=q.fog;const ht=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;le.envMap=I.get(A.envMap||le.environment,ht),le.envMapRotation=le.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,tt===void 0&&(A.addEventListener("dispose",xt),tt=new Map,le.programs=tt,le.programVariants=new Map);let yt=tt.get(Ye);if(yt!==void 0){if(le.currentProgram===yt&&le.lightsStateVersion===Qe)return mo(A,Ge),yt}else Ge.uniforms=ve.getUniforms(A),W!==null&&A.isNodeMaterial&&W.build(A,fe,Ge),A.onBeforeCompile(Ge,X),yt=ve.acquireProgram(Ge,Ye),tt.set(Ye,yt),le.uniforms=Ge.uniforms;const nt=le.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(nt.clippingPlanes=se.uniform),mo(A,Ge),le.needsLights=gs(A),le.lightsStateVersion=Qe,le.needsLights&&(nt.ambientLightColor.value=oe.state.ambient,nt.lightProbe.value=oe.state.probe,nt.sunLights.value=oe.state.sun,nt.sunLightShadows.value=oe.state.sunShadow,nt.directionalLights.value=oe.state.directional,nt.directionalLightShadows.value=oe.state.directionalShadow,nt.spotLights.value=oe.state.spot,nt.spotLightShadows.value=oe.state.spotShadow,nt.rectAreaLights.value=oe.state.rectArea,nt.ltc_1.value=oe.state.rectAreaLTC1,nt.ltc_2.value=oe.state.rectAreaLTC2,nt.pointLights.value=oe.state.point,nt.pointLightShadows.value=oe.state.pointShadow,nt.hemisphereLights.value=oe.state.hemi,nt.sunShadowMatrix.value=oe.state.sunShadowMatrix,nt.sunShadowCascade.value=oe.state.sunShadowCascade,nt.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,nt.spotLightMatrix.value=oe.state.spotLightMatrix,nt.spotLightMap.value=oe.state.spotLightMap,nt.pointShadowMatrix.value=oe.state.pointShadowMatrix),le.numLightProbeGrids=ua(D.state.lightProbeGridArray),le.currentProgram=yt,le.uniformsList=null,yt}function lc(A,q,fe,le,oe){const We=qe.get(A),Qe=We.currentProgram.id+","+le+","+oe;let Ge=We.programVariants.get(Qe);return Ge===void 0?(Ge=jr(A,q,fe),We.programVariants.set(Qe,Ge)):(We.currentProgram=Ge,We.uniformsList=null,We.outputColorSpace=le,We.toneMapping=oe),Ge}function Qt(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Xl.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function mo(A,q){const fe=qe.get(A);fe.outputColorSpace=q.outputColorSpace,fe.batching=q.batching,fe.batchingColor=q.batchingColor,fe.instancing=q.instancing,fe.instancingColor=q.instancingColor,fe.instancingMorph=q.instancingMorph,fe.skinning=q.skinning,fe.morphTargets=q.morphTargets,fe.morphNormals=q.morphNormals,fe.morphColors=q.morphColors,fe.morphTargetsCount=q.morphTargetsCount,fe.numClippingPlanes=q.numClippingPlanes,fe.numIntersection=q.numClipIntersection,fe.vertexAlphas=q.vertexAlphas,fe.vertexTangents=q.vertexTangents,fe.toneMapping=q.toneMapping}function da(A,q,fe,le,oe){q.isScene!==!0&&(q=Wt),rt.resetTextureUnits();const We=q.fog,Qe=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?q.environment:null,Ge=j===null?X.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ut.workingColorSpace,Ye=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,tt=I.get(le.envMap||Qe,Ye),ht=le.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,yt=!!fe.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),nt=!!fe.morphAttributes.position,Tt=!!fe.morphAttributes.normal,en=!!fe.morphAttributes.color;let jt=or;le.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(jt=X.toneMapping);const Gt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,cn=Gt!==void 0?Gt.length:0,it=qe.get(le),gn=D.state.lights;if(Mt===!0&&(Dt===!0||A!==Y)){const Bt=A===Y&&le.id===$;se.setState(le,A,Bt)}let ot=!1,Pi=!1;le.version===it.__version?it.needsLights&&it.lightsStateVersion!==gn.state.version||oe.isBatchedMesh&&it.batching===!1||!oe.isBatchedMesh&&it.batching===!0||oe.isBatchedMesh&&it.batchingColor===!0&&oe._colorsTexture===null||oe.isBatchedMesh&&it.batchingColor===!1&&oe._colorsTexture!==null||oe.isInstancedMesh&&it.instancing===!1||!oe.isInstancedMesh&&it.instancing===!0||oe.isSkinnedMesh&&it.skinning===!1||!oe.isSkinnedMesh&&it.skinning===!0||oe.isInstancedMesh&&it.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&it.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&it.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&it.instancingMorph===!1&&oe.morphTexture!==null||it.envMap!==tt||le.fog===!0&&it.fog!==We||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==se.numPlanes||it.numIntersection!==se.numIntersection)||it.vertexAlphas!==ht||it.vertexTangents!==yt||it.morphTargets!==nt||it.morphNormals!==Tt||it.morphColors!==en||it.morphTargetsCount!==cn||it.numLightProbeGrids!==ua(D.state.lightProbeGridArray)?ot=!0:(it.outputColorSpace!==Ge||it.toneMapping!==jt)&&(Pi=!0):(ot=!0,it.__version=le.version);let xn=it.currentProgram;(ot===!0||Pi===!0)&&(xn=Pi===!0?lc(le,q,oe,Ge,jt):jr(le,q,oe),W&&le.isNodeMaterial&&W.onUpdateProgram(le,xn,it));let ur=!1,mi=!1,Li=!1;const Lt=xn.getUniforms(),dn=it.uniforms;if(Ie.useProgram(xn.program)&&(ur=!0,mi=!0,Li=!0),le.id!==$&&($=le.id,mi=!0),ur||Y!==A){Ie.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Lt.setValue(J,"projectionMatrix",A.projectionMatrix),Lt.setValue(J,"viewMatrix",A.matrixWorldInverse);const Xt=Lt.map.cameraPosition;Xt!==void 0&&Xt.setValue(J,nn.setFromMatrixPosition(A.matrixWorld)),bt.logarithmicDepthBuffer&&Lt.setValue(J,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Lt.setValue(J,"isOrthographic",A.isOrthographicCamera===!0),Y!==A&&(Y=A,mi=!0,Li=!0)}if(it.needsLights&&(gn.state.sunShadowMap.length>0&&Lt.setValue(J,"sunShadowMap",gn.state.sunShadowMap,rt),gn.state.directionalShadowMap.length>0&&Lt.setValue(J,"directionalShadowMap",gn.state.directionalShadowMap,rt),gn.state.spotShadowMap.length>0&&Lt.setValue(J,"spotShadowMap",gn.state.spotShadowMap,rt),gn.state.pointShadowMap.length>0&&Lt.setValue(J,"pointShadowMap",gn.state.pointShadowMap,rt)),oe.isSkinnedMesh){Lt.setOptional(J,oe,"bindMatrix"),Lt.setOptional(J,oe,"bindMatrixInverse");const Bt=oe.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Lt.setValue(J,"boneTexture",Bt.boneTexture,rt))}oe.isBatchedMesh&&(Lt.setOptional(J,oe,"batchingTexture"),Lt.setValue(J,"batchingTexture",oe._matricesTexture,rt),Lt.setOptional(J,oe,"batchingIdTexture"),Lt.setValue(J,"batchingIdTexture",oe._indirectTexture,rt),Lt.setOptional(J,oe,"batchingColorTexture"),oe._colorsTexture!==null&&Lt.setValue(J,"batchingColorTexture",oe._colorsTexture,rt));const Pn=fe.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&me.update(oe,fe,xn),(mi||it.receiveShadow!==oe.receiveShadow)&&(it.receiveShadow=oe.receiveShadow,Lt.setValue(J,"receiveShadow",oe.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&q.environment!==null&&(dn.envMapIntensity.value=q.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=ob()),mi){if(Lt.setValue(J,"toneMappingExposure",X.toneMappingExposure),it.needsLights&&go(dn,Li),We&&le.fog===!0&&Ue.refreshFogUniforms(dn,We),Ue.refreshMaterialUniforms(dn,le,Se,De,D.state.transmissionRenderTarget[A.id]),it.needsLights&&it.numLightProbeGrids>0){const Bt=P;let Xt=0;for(const wn of D.state.lightProbeGridArray)wn.texture!==null&&(Bt.textures[Xt]=wn.texture,Bt.min[Xt]=wn.boundingBox.min,Bt.max[Xt]=wn.boundingBox.max,Bt.resolution[Xt]=wn.resolution,Xt++);for(const wn in Bt)Bt[wn].length=Xt;dn.probesSH.value=Bt.textures,dn.probesMin.value=Bt.min,dn.probesMax.value=Bt.max,dn.probesResolution.value=Bt.resolution}Xl.upload(J,Qt(it),dn,rt)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Xl.upload(J,Qt(it),dn,rt),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Lt.setValue(J,"center",oe.center),Lt.setValue(J,"modelViewMatrix",oe.modelViewMatrix),Lt.setValue(J,"normalMatrix",oe.normalMatrix),Lt.setValue(J,"modelMatrix",oe.matrixWorld),le.uniformsGroups!==void 0){const Bt=le.uniformsGroups;for(let Xt=0,wn=Bt.length;Xt<wn;Xt++){const dr=Bt[Xt];Ze.update(dr,xn),Ze.bind(dr,xn)}}return xn}function go(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.sunLights.needsUpdate=q,A.sunLightShadows.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function gs(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return re},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,q,fe){const le=qe.get(A);le.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),qe.get(A.texture).__webglTexture=q,qe.get(A.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:fe,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const fe=qe.get(A);fe.__webglFramebuffer=q,fe.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,fe=0){j=A,re=q,K=fe;let le=null,oe=!1,We=!1;if(A){const Ge=qe.get(A);if(Ge.__useDefaultFramebuffer!==void 0){Ie.bindFramebuffer(J.FRAMEBUFFER,Ge.__webglFramebuffer),L.copy(A.viewport),ne.copy(A.scissor),be=A.scissorTest,Ie.viewport(L),Ie.scissor(ne),Ie.setScissorTest(be),$=-1;return}else if(Ge.__webglFramebuffer===void 0)rt.setupRenderTarget(A);else if(Ge.__hasExternalTextures)rt.rebindTextures(A,qe.get(A.texture).__webglTexture,qe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ht=A.depthTexture;if(Ge.__boundDepthTexture!==ht){if(ht!==null&&qe.has(ht)&&(A.width!==ht.image.width||A.height!==ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(A)}}const Ye=A.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(We=!0);const tt=qe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(tt[q])?le=tt[q][fe]:le=tt[q],oe=!0):A.samples>0&&rt.useMultisampledRTT(A)===!1?le=qe.get(A).__webglMultisampledFramebuffer:Array.isArray(tt)?le=tt[fe]:le=tt,L.copy(A.viewport),ne.copy(A.scissor),be=A.scissorTest}else L.copy(je).multiplyScalar(Se).floor(),ne.copy(Te).multiplyScalar(Se).floor(),be=ke;if(fe!==0&&(le=V),Ie.bindFramebuffer(J.FRAMEBUFFER,le)&&Ie.drawBuffers(A,le),Ie.viewport(L),Ie.scissor(ne),Ie.setScissorTest(be),oe){const Ge=qe.get(A.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ge.__webglTexture,fe)}else if(We){const Ge=q;for(let Ye=0;Ye<A.textures.length;Ye++){const tt=qe.get(A.textures[Ye]);J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Ye,tt.__webglTexture,fe,Ge)}}else if(A!==null&&fe!==0){const Ge=qe.get(A.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Ge.__webglTexture,fe)}$=-1};function xo(A){const q=qe.get(A);return(q.__readFormat!==A.format||q.__readType!==A.type)&&(q.__readFormat=A.format,q.__readType=A.type,q.__formatReadable=bt.textureFormatReadable(A.format),q.__typeReadable=bt.textureTypeReadable(A.type)),q}this.readRenderTargetPixels=function(A,q,fe,le,oe,We,Qe,Ge=0){if(!(A&&A.isWebGLRenderTarget)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Qe!==void 0&&(Ye=Ye[Qe],Array.isArray(Ye)&&(Ye=Ye[0])),Ye){Ie.bindFramebuffer(J.FRAMEBUFFER,Ye);try{const tt=A.textures[Ge],ht=tt.format,yt=tt.type;A.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Ge);const nt=xo(tt);if(nt.__formatReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(nt.__typeReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-le&&fe>=0&&fe<=A.height-oe&&J.readPixels(q,fe,le,oe,Ee.convert(ht),Ee.convert(yt),We)}finally{const tt=j!==null?qe.get(j).__webglFramebuffer:null;Ie.bindFramebuffer(J.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(A,q,fe,le,oe,We,Qe,Ge=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Qe!==void 0&&(Ye=Ye[Qe],Array.isArray(Ye)&&(Ye=Ye[0])),Ye)if(q>=0&&q<=A.width-le&&fe>=0&&fe<=A.height-oe){Ie.bindFramebuffer(J.FRAMEBUFFER,Ye);const tt=A.textures[Ge],ht=tt.format,yt=tt.type;A.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+Ge);const nt=xo(tt);if(nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Tt=J.createBuffer();J.bindBuffer(J.PIXEL_PACK_BUFFER,Tt),J.bufferData(J.PIXEL_PACK_BUFFER,We.byteLength,J.STREAM_READ),J.readPixels(q,fe,le,oe,Ee.convert(ht),Ee.convert(yt),0),J.bindBuffer(J.PIXEL_PACK_BUFFER,null);const en=j!==null?qe.get(j).__webglFramebuffer:null;Ie.bindFramebuffer(J.FRAMEBUFFER,en);const jt=J.fenceSync(J.SYNC_GPU_COMMANDS_COMPLETE,0);return J.flush(),await A_(J,jt,4),J.bindBuffer(J.PIXEL_PACK_BUFFER,Tt),J.getBufferSubData(J.PIXEL_PACK_BUFFER,0,We),J.bindBuffer(J.PIXEL_PACK_BUFFER,null),J.deleteBuffer(Tt),J.deleteSync(jt),We}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,fe=0){const le=Math.pow(2,-fe),oe=Math.floor(A.image.width*le),We=Math.floor(A.image.height*le),Qe=q!==null?q.x:0,Ge=q!==null?q.y:0;rt.setTexture2D(A,0),J.copyTexSubImage2D(J.TEXTURE_2D,fe,0,0,Qe,Ge,oe,We),Ie.unbindTexture()},this.copyTextureToTexture=function(A,q,fe=null,le=null,oe=0,We=0){let Qe,Ge,Ye,tt,ht,yt,nt,Tt,en;const jt=A.isCompressedTexture?A.mipmaps[We]:A.image;if(fe!==null)Qe=fe.max.x-fe.min.x,Ge=fe.max.y-fe.min.y,Ye=fe.isBox3?fe.max.z-fe.min.z:1,tt=fe.min.x,ht=fe.min.y,yt=fe.isBox3?fe.min.z:0;else{const Lt=Math.pow(2,-oe);Qe=Math.floor(jt.width*Lt),Ge=Math.floor(jt.height*Lt),A.isDataArrayTexture?Ye=jt.depth:A.isData3DTexture?Ye=Math.floor(jt.depth*Lt):Ye=1,tt=0,ht=0,yt=0}le!==null?(nt=le.x,Tt=le.y,en=le.z):(nt=0,Tt=0,en=0);const Gt=Ee.convert(q.format),cn=Ee.convert(q.type);let it;q.isData3DTexture?(rt.setTexture3D(q,0),it=J.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(rt.setTexture2DArray(q,0),it=J.TEXTURE_2D_ARRAY):(rt.setTexture2D(q,0),it=J.TEXTURE_2D),Ie.activeTexture(J.TEXTURE0),Ie.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,q.flipY),Ie.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),Ie.pixelStorei(J.UNPACK_ALIGNMENT,q.unpackAlignment);const gn=Ie.getParameter(J.UNPACK_ROW_LENGTH),ot=Ie.getParameter(J.UNPACK_IMAGE_HEIGHT),Pi=Ie.getParameter(J.UNPACK_SKIP_PIXELS),xn=Ie.getParameter(J.UNPACK_SKIP_ROWS),ur=Ie.getParameter(J.UNPACK_SKIP_IMAGES);Ie.pixelStorei(J.UNPACK_ROW_LENGTH,jt.width),Ie.pixelStorei(J.UNPACK_IMAGE_HEIGHT,jt.height),Ie.pixelStorei(J.UNPACK_SKIP_PIXELS,tt),Ie.pixelStorei(J.UNPACK_SKIP_ROWS,ht),Ie.pixelStorei(J.UNPACK_SKIP_IMAGES,yt);const mi=A.isDataArrayTexture||A.isData3DTexture,Li=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const Lt=qe.get(A),dn=qe.get(q),Pn=qe.get(Lt.__renderTarget),Bt=qe.get(dn.__renderTarget);Ie.bindFramebuffer(J.READ_FRAMEBUFFER,Pn.__webglFramebuffer),Ie.bindFramebuffer(J.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let Xt=0;Xt<Ye;Xt++)mi&&(J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,qe.get(A).__webglTexture,oe,yt+Xt),J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,qe.get(q).__webglTexture,We,en+Xt)),J.blitFramebuffer(tt,ht,tt+Qe,ht+Ge,nt,Tt,nt+Qe,Tt+Ge,J.DEPTH_BUFFER_BIT,J.NEAREST);Ie.bindFramebuffer(J.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else if(oe!==0||A.isRenderTargetTexture||qe.has(A)){const Lt=qe.get(A),dn=qe.get(q);Ie.bindFramebuffer(J.READ_FRAMEBUFFER,H),Ie.bindFramebuffer(J.DRAW_FRAMEBUFFER,O);for(let Pn=0;Pn<Ye;Pn++)mi?J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,Lt.__webglTexture,oe,yt+Pn):J.framebufferTexture2D(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,Lt.__webglTexture,oe),Li?J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,dn.__webglTexture,We,en+Pn):J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,dn.__webglTexture,We),oe!==0?J.blitFramebuffer(tt,ht,tt+Qe,ht+Ge,nt,Tt,nt+Qe,Tt+Ge,J.COLOR_BUFFER_BIT,J.NEAREST):Li?J.copyTexSubImage3D(it,We,nt,Tt,en+Pn,tt,ht,Qe,Ge):J.copyTexSubImage2D(it,We,nt,Tt,tt,ht,Qe,Ge);Ie.bindFramebuffer(J.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else Li?A.isDataTexture||A.isData3DTexture?J.texSubImage3D(it,We,nt,Tt,en,Qe,Ge,Ye,Gt,cn,jt.data):q.isCompressedArrayTexture?J.compressedTexSubImage3D(it,We,nt,Tt,en,Qe,Ge,Ye,Gt,jt.data):J.texSubImage3D(it,We,nt,Tt,en,Qe,Ge,Ye,Gt,cn,jt):A.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,We,nt,Tt,Qe,Ge,Gt,cn,jt.data):A.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,We,nt,Tt,jt.width,jt.height,Gt,jt.data):J.texSubImage2D(J.TEXTURE_2D,We,nt,Tt,Qe,Ge,Gt,cn,jt);Ie.pixelStorei(J.UNPACK_ROW_LENGTH,gn),Ie.pixelStorei(J.UNPACK_IMAGE_HEIGHT,ot),Ie.pixelStorei(J.UNPACK_SKIP_PIXELS,Pi),Ie.pixelStorei(J.UNPACK_SKIP_ROWS,xn),Ie.pixelStorei(J.UNPACK_SKIP_IMAGES,ur),We===0&&q.generateMipmaps===!0&&q.mipmapsAutoUpdate===!0&&J.generateMipmap(it),Ie.unbindTexture()},this.initRenderTarget=function(A){qe.get(A).__webglFramebuffer===void 0&&rt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?rt.setTextureCube(A,0):A.isData3DTexture?rt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?rt.setTexture2DArray(A,0):rt.setTexture2D(A,0),Ie.unbindTexture()},this.resetState=function(){re=0,K=0,j=null,Ie.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ut._getUnpackColorSpace()}}function cb(s,e){const t=document.createElement("canvas");t.width=2048,t.height=1024;const r=t.getContext("2d");let o;e?s==="celestial-cyan"?o=["#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#f0f9ff","#dbeafe"]:s==="supernova-sunset"?o=["#fff1f2","#fecdd3","#fda4af","#fb7185","#e11d48","#9f1239","#fff7ed","#fed7aa"]:s==="nocturne-silver"?o=["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#71717a","#ffffff","#e4e4e7"]:o=["#fffbeb","#fef3c7","#fde68a","#fcd34d","#f59e0b","#d97706","#fff7ed","#ffedd5"]:s==="celestial-cyan"?o=["#020b14","#041d33","#083358","#0e4a7d","#0284c7","#38bdf8","#075985","#0c4a6e","#06b6d4"]:s==="supernova-sunset"?o=["#12040d","#2b061c","#4a0a2f","#771146","#be123c","#f43f5e","#ea580c","#fb923c","#450a22"]:s==="nocturne-silver"?o=["#060609","#111119","#1e1e2d","#2f2f45","#4d4d6e","#7b7b9e","#a6a6c7","#252538","#d4d4e8"]:o=["#080415","#150933","#270e59","#3e1785","#5b21b6","#7c3aed","#a855f7","#c084fc","#2e1065","#d8b4fe"];const l=r.createLinearGradient(0,0,0,t.height);o.forEach((_,M)=>{l.addColorStop(M/(o.length-1),_)}),r.fillStyle=l,r.fillRect(0,0,t.width,t.height);const d=72;for(let _=0;_<d;_++){const b=_/d*t.height,C=t.height/d*(1.2+Math.sin(_*.7)*.5),y=o[_*3%o.length];r.fillStyle=y,r.globalAlpha=.25+Math.sin(_*.9)*.2,r.beginPath(),r.moveTo(0,b);const S=32;for(let R=0;R<=S;R++){const F=R/S*t.width,P=Math.sin(R*.8+_*1.5)*7+Math.cos(R*1.6+_*2.1)*4;r.lineTo(F,b+P)}r.lineTo(t.width,b+C),r.lineTo(0,b+C),r.closePath(),r.fill()}r.globalAlpha=e?.25:.4,r.fillStyle="#ffffff";for(let _=0;_<48;_++){const M=Math.random()*t.width,b=Math.random()*t.height,C=60+Math.random()*180,y=1.5+Math.random()*3.5;r.beginPath(),r.ellipse(M,b,C,y,Math.sin(b*.05)*.15,0,Math.PI*2),r.fill()}const m=t.width*.62,u=t.height*.58,h=85,x=r.createRadialGradient(m,u,5,m,u,h);e?(x.addColorStop(0,"#ffffff"),x.addColorStop(.4,o[o.length-2]),x.addColorStop(.8,o[o.length-1]),x.addColorStop(1,"rgba(255,255,255,0)")):(x.addColorStop(0,"#ffffff"),x.addColorStop(.3,o[o.length-3]||"#c084fc"),x.addColorStop(.7,o[o.length-1]||"#7c3aed"),x.addColorStop(1,"rgba(0,0,0,0)")),r.globalAlpha=.85,r.fillStyle=x,r.beginPath(),r.ellipse(m,u,h*1.6,h*.8,-.15,0,Math.PI*2),r.fill(),r.strokeStyle=e?"rgba(200, 150, 100, 0.45)":"rgba(255, 255, 255, 0.60)",r.lineWidth=2.5;for(let _=0;_<3;_++){r.beginPath();for(let M=0;M<Math.PI*2;M+=.2){const b=M/(Math.PI*2)*h*.7,C=m+Math.cos(M+_*2.1)*b*1.5,y=u+Math.sin(M+_*2.1)*b*.7;M===0?r.moveTo(C,y):r.lineTo(C,y)}r.stroke()}const v=new bf(t);return v.wrapS=ro,v.wrapT=oi,v}function ub(s,e){const t=document.createElement("canvas");t.width=1024,t.height=64;const r=t.getContext("2d");r.clearRect(0,0,t.width,t.height);let o,l;e?(o="rgba(217, 119, 6, 0.45)",l="rgba(245, 158, 11, 0.85)"):s==="celestial-cyan"?(o="rgba(56, 189, 248, 0.45)",l="rgba(186, 230, 253, 0.90)"):s==="supernova-sunset"?(o="rgba(251, 146, 60, 0.45)",l="rgba(254, 205, 211, 0.90)"):s==="nocturne-silver"?(o="rgba(212, 212, 216, 0.45)",l="rgba(255, 255, 255, 0.90)"):(o="rgba(192, 132, 252, 0.50)",l="rgba(243, 232, 255, 0.92)");for(let m=0;m<t.width;m++){const u=m/t.width;let h=0;u<.22?h=.12+Math.sin(u*60)*.08:u>=.22&&u<.65?h=.75+Math.sin(u*120)*.18+Math.cos(u*240)*.06:u>=.65&&u<.72?h=.02:u>=.72&&u<.95?u>.85&&u<.87?h=.05:h=.55+Math.sin(u*100)*.15:h=.2+Math.sin(u*200)*.15,r.fillStyle=h>.6?l:o,r.globalAlpha=Math.max(0,Math.min(1,h)),r.fillRect(m,0,1,t.height)}const d=new bf(t);return d.wrapS=oi,d.wrapT=oi,d}function db(s){const e=document.createElement("canvas");e.width=2048,e.height=1024;const t=e.getContext("2d");t.fillStyle=s?"#d6d3d1":"#888899",t.fillRect(0,0,e.width,e.height),t.fillStyle=s?"#a8a29e":"#474755",[{x:.35,y:.4,rx:240,ry:160},{x:.55,y:.35,rx:280,ry:190},{x:.7,y:.45,rx:200,ry:140},{x:.4,y:.65,rx:220,ry:150},{x:.6,y:.6,rx:260,ry:180}].forEach(d=>{t.globalAlpha=.65,t.beginPath(),t.ellipse(d.x*e.width,d.y*e.height,d.rx,d.ry,.2,0,Math.PI*2),t.fill()});const o=320;for(let d=0;d<o;d++){const m=Math.random()*e.width,u=Math.random()*e.height,h=4+Math.random()*32;if(t.globalAlpha=.55,t.fillStyle=s?"#57534e":"#22222a",t.beginPath(),t.arc(m,u,h,0,Math.PI*2),t.fill(),t.globalAlpha=.7,t.strokeStyle=s?"#ffffff":"#e2e8f0",t.lineWidth=Math.max(1,h*.2),t.beginPath(),t.arc(m,u,h,Math.PI*.75,Math.PI*1.75),t.stroke(),h>24){t.globalAlpha=.25,t.strokeStyle=s?"#ffffff":"#cbd5e1",t.lineWidth=1;for(let x=0;x<8;x++){const v=x/8*Math.PI*2,_=h*(3+Math.random()*5);t.beginPath(),t.moveTo(m+Math.cos(v)*h,u+Math.sin(v)*h),t.lineTo(m+Math.cos(v)*_,u+Math.sin(v)*_),t.stroke()}}}const l=new bf(e);return l.wrapS=ro,l.wrapT=oi,l}const fb=()=>{const s=we.useRef(null),{wallpaperSettings:e,appTheme:t}=Vr(),r=e.celestialBody||"ringed-planet",o=e.palette||"cosmic-royal",l=t==="light";return we.useEffect(()=>{if(!s.current)return;if(r==="none"){s.current.innerHTML="";return}const d=s.current;d.innerHTML="";const m=d.clientWidth||window.innerWidth,u=d.clientHeight||window.innerHeight,h=m<768,x=new $_,v=new Ti(45,m/u,.1,100);v.position.set(0,0,10);const _=new lb({alpha:!0,antialias:!0,powerPreference:"high-performance"});_.setSize(m,u),_.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),_.outputColorSpace=si,d.appendChild(_.domElement);const M=new fy(l?16775149:16777215,l?2.8:2.5);x.add(M);const b=new hy(l?14870768:o==="celestial-cyan"?662832:1577516,l?.7:.4);x.add(b);const C=new Ka;x.add(C);let y=3.4,S=1.8,R=.65;r==="ringed-planet"?(y=h?1.2:3.4,S=h?2.3:1.8,R=h?.48:.68,M.position.set(-8,5,4)):r==="crescent-moon"?(y=h?-1.2:-3.3,S=h?2.5:2,R=h?.42:.6,M.position.set(-8,2,-2)):r==="eclipse-corona"&&(y=0,S=h?2.5:2.4,R=h?.45:.64,M.position.set(0,0,4)),C.position.set(y,S,0),C.scale.set(R,R,R);let F=0,P=0,z=0,D=0;const w=re=>{const K=re.clientX/window.innerWidth*2-1;F=(-(re.clientY/window.innerHeight)*2+1)*.18,P=K*.25};window.addEventListener("mousemove",w,{passive:!0});let N=null,ee=null,X=null,G=null;if(r==="ringed-planet"){const re=new Ir(1,64,64),K=cb(o,l),j=new pd({map:K,roughness:.55,metalness:.08});N=new Wn(re,j),C.add(N);const $=new Ir(1.04,48,48),Y=new Ri({vertexShader:`
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
        `,uniforms:{glowColor:{value:new Ct(l?o==="celestial-cyan"?165063:14251782:o==="celestial-cyan"?3718648:o==="supernova-sunset"?16007006:11032055)}},transparent:!0,blending:Qa,side:kn}),L=new Wn($,Y);C.add(L);const ne=new Ef(1.35,2.85,128),be=ne.attributes.position,U=ne.attributes.uv;for(let Fe=0;Fe<be.count;Fe++){const ut=be.getX(Fe),je=be.getY(Fe),ke=(Math.sqrt(ut*ut+je*je)-1.35)/(2.85-1.35);U.setXY(Fe,ke,.5)}U.needsUpdate=!0;const _e=ub(o,l),Me=new pd({map:_e,side:Bi,transparent:!0,opacity:.92,roughness:.45,metalness:.05});ee=new Wn(ne,Me),ee.rotation.x=Math.PI*.48,ee.rotation.y=-.15,C.add(ee);const De=new Ir(.11,24,24),Se=new pd({color:l?14078929:13095678,roughness:.8});X=new Wn(De,Se),C.add(X),C.rotation.z=-.42}else if(r==="crescent-moon"){const re=new Ir(1,64,64),K=db(l),j=new Ri({vertexShader:`
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
        `,uniforms:{moonTexture:{value:K},sunDir:{value:new pe(-1.6,.35,-.65).normalize()},sunlitColor:{value:new Ct(l?16776171:16710083)},earthshineColor:{value:new Ct(l?9741240:6583435)},earthshineAlpha:{value:l?.07:.05}},transparent:!0});N=new Wn(re,j),C.add(N);const $=new Ir(1.04,48,48),Y=new Ri({vertexShader:`
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
        `,uniforms:{sunDir:{value:new pe(-1.6,.35,-.65).normalize()},glowColor:{value:new Ct(l?16096779:16707722)}},transparent:!0,blending:Qa,side:kn}),L=new Wn($,Y);C.add(L),C.rotation.y=.45,C.rotation.z=-.22}else if(r==="eclipse-corona"){const re=new ho(3.8,3.8),K=new Ri({vertexShader:`
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
        `,uniforms:{uTime:{value:0},uColor:{value:new Ct(l?14251782:16638023)}},transparent:!0,blending:Qa,depthWrite:!1});G=new Wn(re,K),C.add(G);const j=new Ir(.96,48,48),$=new U0({color:l?1579035:328970});N=new Wn(j,$),C.add(N)}let W;const V=performance.now(),H=()=>{W=requestAnimationFrame(H);const re=(performance.now()-V)*.001;if(z+=(F-z)*.06,D+=(P-D)*.06,C.position.x=y+D*.8,C.position.y=S+z*.8,N&&(N.rotation.y+=.0012),X){const j=re*.35;X.position.x=Math.cos(j)*4.8,X.position.z=Math.sin(j)*4.8*.4,X.position.y=Math.sin(j*1.5)*.6}G&&G.material.uniforms&&(G.material.uniforms.uTime.value=re),_.render(x,v)};H();const O=()=>{if(!d||!_||!v)return;const re=d.clientWidth||window.innerWidth,K=d.clientHeight||window.innerHeight;v.aspect=re/K,v.updateProjectionMatrix(),_.setSize(re,K),_.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const j=re<768;r==="ringed-planet"?(y=j?1.2:3.4,S=j?2.3:1.8,R=j?.48:.68):r==="crescent-moon"?(y=j?-1.2:-3.3,S=j?2.5:2,R=j?.42:.6):r==="eclipse-corona"&&(y=0,S=j?2.5:2.4,R=j?.45:.64),C.position.set(y,S,0),C.scale.set(R,R,R)};return window.addEventListener("resize",O,{passive:!0}),()=>{cancelAnimationFrame(W),window.removeEventListener("mousemove",w),window.removeEventListener("resize",O),_.dispose(),d&&_.domElement&&d.contains(_.domElement)&&d.removeChild(_.domElement)}},[r,o,l]),p.jsx("div",{ref:s,className:"fixed inset-0 pointer-events-none z-[1] select-none overflow-hidden","aria-hidden":"true"})};/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=s=>s==null?void 0:s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function pb(s,e,t=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:hb(s),size:24,node:e,...t.length>0?{aliases:t}:{}}}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=s=>{let e="",t=!1;for(const r of s){if(r==="-"||r==="_"||r<=" "){t=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=t?r.toUpperCase():r,t=!1}return e};/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=s=>{const e=mb(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
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
 */function vd(s){return s!=null}function xb(s,e={}){var _,M;const t=e.attributeNames??{},r=b=>t[b]??b,o=s.size??s.width??ls.width,l=s.size??s.height??ls.height,d=((_=s.aliases)==null?void 0:_.filter(b=>typeof b=="string"&&b.trim()!=="").map(b=>`lucide-${b}`))??[],m=[...s.name?[`lucide-${s.name}`]:[],...d],u=((M=e.className)==null?void 0:M.split(" ").filter(Boolean))??[],h=e.includeDefaultClasses===!1?lf(...u):lf("lucide",...m,...u),x=e.absoluteStrokeWidth?Number(e.strokeWidth??ls["stroke-width"])*Number(s.size??s.width??ls.width)/Number(e.size??e.width??ls.width):e.strokeWidth??ls["stroke-width"];return["svg",{...Object.entries(ls).reduce((b,[C,y])=>(b[r(C)]=y,b),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&vd(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&vd(e.width)&&{[r("width")]:e.width},..."height"in e&&vd(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:x,...h&&{[r("class")]:h},[r("viewBox")]:`0 0 ${o} ${l}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},s.node.map(b=>{const[C,y,S]=b,R=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...y}:y;return S?[C,R,S]:[C,R]})]}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function vb(s,e={}){return xb(s,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},yb=we.createContext({}),Sb=()=>we.useContext(yb),Mb=we.forwardRef(({color:s,size:e,width:t,height:r,strokeWidth:o,absoluteStrokeWidth:l,nonScalingStroke:d,className:m="",children:u,iconNode:h=[],icon:x={node:h,aliases:[],size:24},...v},_)=>{const{size:M=24,strokeWidth:b=2,absoluteStrokeWidth:C=!1,nonScalingStroke:y=!1,color:S="currentColor",className:R=""}=Sb()??{},F=!!u||_b(v),[P,z,D=[]]=vb(x,{color:s??S,width:t??e??M,height:r??e??M,strokeWidth:o??b,absoluteStrokeWidth:l??C,nonScalingStroke:d??y,className:lf(R,m),hasA11yProp:F,attributes:v});return we.createElement(P,{ref:_,...z},[...D.map(([w,N])=>we.createElement(w,N)),...Array.isArray(u)?u:[u]])});/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function _t(s,e=[],t=[]){const r=typeof s=="string"?pb(s,e,t):s,o=we.forwardRef(({className:l,...d},m)=>we.createElement(Mb,{ref:m,icon:r,className:l,...d}));return r.name&&(o.displayName=gb(r.name)),o}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg={name:"calendar-clock",size:24,node:[["path",{d:"M16 14v2.2l1.6 1",key:"fo4ql5"}],["path",{d:"M16 2v3",key:"otl347"}],["path",{d:"M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338",key:"7hb8p4"}],["path",{d:"M3 9h5.859",key:"numkqi"}],["path",{d:"M8 2v3",key:"1ioesn"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]};eg.node;const Jm=_t(eg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg={name:"calendar",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]]};tg.node;const wb=_t(tg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};ng.node;const nc=_t(ng);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};ig.node;const rg=_t(ig);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};sg.node;const Af=_t(sg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag={name:"droplet",size:24,node:[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]};ag.node;const Qm=_t(ag);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og={name:"droplets",size:24,node:[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]};og.node;const bb=_t(og);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg={name:"external-link",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]};lg.node;const Eb=_t(lg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg={name:"eye-off",size:24,node:[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]};cg.node;const Tb=_t(cg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug={name:"face-slightly-smiling",size:24,node:[["path",{d:"M15 10V9",key:"4dkmfx"}],["path",{d:"M16.472 15a6 6 0 01-8.943 0",key:"7qomzy"}],["path",{d:"M9 10V9",key:"1lazqi"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["smile"]};ug.node;const Ab=_t(ug);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg={name:"flame",size:24,node:[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]]};dg.node;const fg=_t(dg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg={name:"headphones",size:24,node:[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]};hg.node;const ic=_t(hg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};pg.node;const Cb=_t(pg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg={name:"list-music",size:24,node:[["path",{d:"M16 5H3",key:"m91uny"}],["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M11 19H3",key:"zflm78"}],["path",{d:"M21 16V5",key:"yxg4q8"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]};mg.node;const e0=_t(mg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg={name:"maximize-2",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]};gg.node;const t0=_t(gg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg={name:"minimize-2",size:24,node:[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]]};xg.node;const vg=_t(xg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};_g.node;const eo=_t(_g);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg={name:"palette",size:24,node:[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]};yg.node;const Rb=_t(yg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};Sg.node;const Or=_t(Sg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};Mg.node;const Br=_t(Mg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};wg.node;const Yl=_t(wg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg={name:"quote",size:24,node:[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]};bg.node;const Nb=_t(bg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg={name:"radio",size:24,node:[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};Eg.node;const n0=_t(Eg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};Tg.node;const zr=_t(Tg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag={name:"skip-back",size:24,node:[["path",{d:"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",key:"15892j"}],["path",{d:"M3 20V4",key:"1ptbpl"}]]};Ag.node;const cf=_t(Ag);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg={name:"skip-forward",size:24,node:[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]]};Cg.node;const uf=_t(Cg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};Rg.node;const Ng=_t(Rg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Pg.node;const ds=_t(Pg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg={name:"square-check-big",size:24,node:[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-square"]};Lg.node;const i0=_t(Lg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg={name:"star",size:24,node:[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]};Dg.node;const Pb=_t(Dg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};Ig.node;const Lb=_t(Ig);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug={name:"sunrise",size:24,node:[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]};Ug.node;const Db=_t(Ug);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg={name:"target",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};zg.node;const Ib=_t(zg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};Fg.node;const rc=_t(Fg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg={name:"tv",size:24,node:[["path",{d:"m17 2-5 5-5-5",key:"16satq"}],["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",key:"1e6viu"}]]};kg.node;const Ub=_t(kg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og={name:"type",size:24,node:[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]]};Og.node;const zb=_t(Og);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg={name:"user",size:24,node:[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]};Bg.node;const Hg=_t(Bg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};Gg.node;const df=_t(Gg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};Vg.node;const Wg=_t(Vg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg={name:"waves-horizontal",size:24,node:[["path",{d:"M2 12q2.5 2 5 0t5 0 5 0 5 0",key:"8ddzzs"}],["path",{d:"M2 19q2.5 2 5 0t5 0 5 0 5 0",key:"1wj4st"}],["path",{d:"M2 5q2.5 2 5 0t5 0 5 0 5 0",key:"69x50u"}]],aliases:["waves"]};jg.node;const r0=_t(jg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};$g.node;const ar=_t($g);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};Xg.node;const Fb=_t(Xg),kb=()=>{const{activeYouTubeItem:s,isYouTubePlaying:e,youtubeVolume:t,isYouTubeMuted:r,setYouTubeIsPlaying:o,setYouTubePlayerReady:l,showYouTubePreview:d,setShowYouTubePreview:m,toggleYouTubePlay:u,nextYouTubeTrack:h,prevYouTubeTrack:x,toggleYouTubeMute:v,setYouTubeVolume:_,audioSource:M}=Vr(),b=we.useRef(null),[C,y]=we.useState(null),S=we.useRef((s==null?void 0:s.id)||null),R=we.useRef(null),[F,P]=we.useState(!1),z=we.useRef(!1),D=we.useCallback((V,H="")=>{try{b.current&&b.current.contentWindow&&b.current.contentWindow.postMessage(JSON.stringify({event:"command",func:V,args:H}),"*")}catch(O){console.warn("[YouTube Audio] Command error:",O)}},[]),w=we.useCallback((V,H)=>{const O=H?"1":"0",re=typeof window<"u"&&window.location.origin?`&origin=${encodeURIComponent(window.location.origin)}`:"";if(!V)return`https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=${O}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${re}`;if(V.type==="playlist"&&V.playlistId)return`https://www.youtube.com/embed/videoseries?list=${encodeURIComponent(V.playlistId)}&autoplay=${O}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${re}`;if(V.type==="video_in_playlist"&&V.videoId&&V.playlistId)return`https://www.youtube.com/embed/${encodeURIComponent(V.videoId)}?list=${encodeURIComponent(V.playlistId)}&autoplay=${O}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${re}`;const K=V.videoId||"jfKfPfyJRdk";return`https://www.youtube.com/embed/${encodeURIComponent(K)}?autoplay=${O}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${re}`},[]),[N,ee]=we.useState(()=>w(s,!1)),X=we.useCallback(()=>{D("unMute",""),D("setVolume",[t||75]),r&&v()},[D,t,r,v]);we.useEffect(()=>(window.__forMeSendYouTubeCommand=D,window.__forMeForceUnmute=X,l(!0),()=>{delete window.__forMeSendYouTubeCommand,delete window.__forMeForceUnmute}),[D,X,l]),we.useEffect(()=>{if(!s||S.current===s.id)return;S.current=s.id,y(null);const V=w(s,e);R.current=V,ee(V),Ei.updateMetadata({title:s.title,artist:s.channel||"FOR ME Sanctuary",album:s.type==="playlist"?"YouTube Playlist":"YouTube Stream",artworkUrl:s.thumbnailUrl,onPlay:()=>{o(!0),D("playVideo",""),X()},onPause:()=>{o(!1),D("pauseVideo","")},onNext:s.type==="playlist"||s.type==="video_in_playlist"?h:void 0,onPrev:s.type==="playlist"||s.type==="video_in_playlist"?x:void 0})},[s,w,e,h,x,D,o,X]),we.useEffect(()=>{if(z.current){z.current=!1;return}e?(D("playVideo",""),setTimeout(()=>{D("unMute",""),D("setVolume",[t||75])},50),Ei.setPlaybackState("playing")):(D("pauseVideo",""),Ei.setPlaybackState("paused"))},[e,D,t]),we.useEffect(()=>{D("setVolume",[t||75])},[t,D]),we.useEffect(()=>{r?D("mute",""):(D("unMute",""),D("setVolume",[t||75]))},[r,t,D]),we.useEffect(()=>{const V=H=>{if(!(!H.data||typeof H.data!="string"))try{const O=JSON.parse(H.data);O.event==="onStateChange"?O.info===1?(z.current=!0,o(!0),y(null),Ei.setPlaybackState("playing"),r||(D("unMute",""),D("setVolume",[t||75]))):O.info===2?document.hidden||(z.current=!0,o(!1),Ei.setPlaybackState("paused")):O.info===0&&((s==null?void 0:s.type)==="playlist"||(s==null?void 0:s.type)==="video_in_playlist"?Ei.setPlaybackState("playing"):(z.current=!0,o(!1),Ei.setPlaybackState("none"))):O.event==="infoDelivery"&&O.info?typeof O.info.muted=="boolean"&&O.info.muted&&!r&&e&&(D("unMute",""),D("setVolume",[t||75])):O.event==="onError"&&(console.warn("[YouTube Audio Player Error]",O.info),(O.info===101||O.info===150)&&y("The owner of this video restricts playback outside of YouTube."))}catch{}};return window.addEventListener("message",V),()=>window.removeEventListener("message",V)},[o,r,t,D,s,e]);const G=M==="youtube"&&e||d,W=(s==null?void 0:s.type)==="playlist"||(s==null?void 0:s.type)==="video_in_playlist";return p.jsxs(p.Fragment,{children:[p.jsxs("div",{role:"region","aria-label":"YouTube Audio Player",style:{position:"fixed",bottom:!G||F?"0px":d?"84px":"16px",right:!G||F?"0px":d?"24px":"16px",width:!G||F?"2px":d?"380px":"250px",height:!G||F?"2px":d?"285px":"150px",zIndex:!G||F?-1:d?50:30,opacity:!G||F?.01:1,pointerEvents:!G||F?"none":"auto",borderRadius:"1.25rem",overflow:"hidden",boxShadow:d?"0 30px 70px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.18)":"0 15px 35px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.12)",transition:"all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"},className:"backdrop-blur-2xl bg-[#090b14]/95 flex flex-col border border-white/15",children:[p.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-black/60 shrink-0 select-none",children:[p.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[p.jsx("span",{className:`w-2 h-2 rounded-full shrink-0 ${e?"bg-red-500 animate-pulse":"bg-zinc-500"}`}),p.jsx("span",{className:"text-white text-xs font-display font-semibold truncate max-w-[110px] sm:max-w-[160px]",title:s==null?void 0:s.title,children:(s==null?void 0:s.title)||"YouTube Audio"})]}),p.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[p.jsxs("button",{type:"button",onClick:X,className:`px-1.5 py-0.5 rounded-md text-[10px] font-sans font-bold flex items-center gap-1 transition-colors cursor-pointer ${r?"bg-amber-500 text-black hover:bg-amber-400 animate-pulse":"bg-emerald-600/80 text-white hover:bg-emerald-500"}`,title:"Force Unmute & Restore Volume",children:[r?p.jsx(Wg,{className:"w-3 h-3"}):p.jsx(df,{className:"w-3 h-3"}),p.jsx("span",{className:"hidden sm:inline",children:r?"UNMUTE":`${t}%`})]}),p.jsx("button",{type:"button",onClick:()=>P(!0),className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer",title:"Audio Only (Hide Video Frame)",children:p.jsx(ic,{className:"w-3 h-3"})}),p.jsx("button",{type:"button",onClick:()=>m(!d),className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer",title:d?"Collapse to Mini Player":"Expand Video Preview",children:d?p.jsx(vg,{className:"w-3 h-3"}):p.jsx(t0,{className:"w-3 h-3"})}),p.jsx("button",{type:"button",onClick:()=>{o(!1),m(!1),D("pauseVideo","")},className:"p-1 rounded-md bg-white/10 hover:bg-red-500/80 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer",title:"Stop playback & close",children:p.jsx(ar,{className:"w-3 h-3"})})]})]}),C&&p.jsxs("div",{className:"absolute inset-0 z-30 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center space-y-2 pointer-events-auto",children:[p.jsx(rg,{className:"w-6 h-6 text-amber-400"}),p.jsx("p",{className:"text-xs text-white/95 font-sans leading-relaxed max-w-xs",children:C}),(s==null?void 0:s.url)&&p.jsxs("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold transition-colors shadow-md",children:[p.jsx(Eb,{className:"w-3 h-3"}),p.jsx("span",{children:"Open in YouTube"})]})]}),p.jsx("div",{className:"flex-1 w-full bg-black relative min-h-0",children:p.jsx("iframe",{ref:b,id:"global-youtube-audio-iframe",title:"FOR ME Sanctuary Audio Stream",src:N,className:"w-full h-full border-0 absolute inset-0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),p.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 border-t border-white/10 bg-black/60 shrink-0 text-xs",children:[d?p.jsxs("div",{className:"flex items-center gap-1",children:[p.jsx("span",{className:"text-[10px] font-sans text-zinc-400 mr-1",children:"Vol:"}),[25,50,75,100].map(V=>p.jsxs("button",{type:"button",onClick:()=>{_(V),D("setVolume",[V]),X()},className:`px-1.5 py-0.5 rounded text-[10px] font-mono transition-colors cursor-pointer ${t===V?"bg-red-600 text-white font-bold":"bg-white/10 text-zinc-300 hover:bg-white/20"}`,children:[V,"%"]},V))]}):p.jsxs("div",{className:"flex items-center gap-1",children:[W&&p.jsxs(p.Fragment,{children:[p.jsx("button",{type:"button",onClick:x,className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer",title:"Previous track in playlist",children:p.jsx(cf,{className:"w-3 h-3"})}),p.jsx("button",{type:"button",onClick:h,className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer",title:"Next track in playlist",children:p.jsx(uf,{className:"w-3 h-3"})})]}),p.jsx("span",{className:"text-[10px] font-mono text-zinc-400",children:r?"Muted":`${t}%`})]}),p.jsxs("div",{className:"flex items-center gap-1.5",children:[d&&W&&p.jsxs(p.Fragment,{children:[p.jsx("button",{type:"button",onClick:x,className:"p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white transition-colors cursor-pointer",title:"Previous track",children:p.jsx(cf,{className:"w-3.5 h-3.5"})}),p.jsx("button",{type:"button",onClick:h,className:"p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white transition-colors cursor-pointer",title:"Next track",children:p.jsx(uf,{className:"w-3.5 h-3.5"})})]}),p.jsx("button",{type:"button",onClick:()=>{u(),X()},className:`px-3 py-1 rounded-lg text-white text-[11px] font-display font-semibold flex items-center gap-1 shadow-sm transition-all cursor-pointer ${e?"bg-red-600 hover:bg-red-500":"bg-emerald-600 hover:bg-emerald-500"}`,children:e?p.jsxs(p.Fragment,{children:[p.jsx(Or,{className:"w-3 h-3 fill-current"}),p.jsx("span",{children:"Pause"})]}):p.jsxs(p.Fragment,{children:[p.jsx(Br,{className:"w-3 h-3 fill-current ml-0.5"}),p.jsx("span",{children:"Play"})]})})]})]})]}),G&&F&&p.jsxs("button",{type:"button",onClick:()=>P(!1),className:"fixed bottom-4 right-4 z-40 px-3 py-1.5 rounded-xl cosmic-dock text-xs flex items-center gap-2 border border-white/15 text-white hover:border-violet-400/50 shadow-xl cursor-pointer transition-all animate-fadeIn",title:"Restore Video Frame",children:[p.jsx("span",{className:"w-2 h-2 rounded-full bg-red-500 animate-pulse"}),p.jsx("span",{className:"font-display text-[11px] font-medium",children:"Show Video"}),p.jsx(t0,{className:"w-3 h-3 text-zinc-400"})]})]})},Ob=[{id:"cosmic-royal",name:"Cosmic Royal",subtitle:"Midnight Obsidian to Luminous Lavender",previewColors:["#060814","#2d1252","#7c3aed","#ede9fe"]},{id:"celestial-cyan",name:"Celestial Cyan",subtitle:"Abyss Sapphire to Electric Mint",previewColors:["#040a14","#0e3f57","#0284c7","#ecfeff"]},{id:"supernova-sunset",name:"Supernova Sunset",subtitle:"Velvet Crimson to Radiant Amber Gold",previewColors:["#12050e","#6e133e","#e11d48","#fffbeb"]},{id:"nocturne-silver",name:"Nocturne Silver",subtitle:"Obsidian Slate to Platinum White",previewColors:["#050508","#22222f","#707090","#ffffff"]}],Bb=[{id:"crescent-moon",name:"Crescent Moon",desc:"Glowing lunar limb & earthshine"},{id:"ringed-planet",name:"Ringed Planet",desc:"Gas giant with illuminated rings"},{id:"eclipse-corona",name:"Solar Eclipse",desc:"Radiant coronal flare rays"},{id:"none",name:"Deep Void Only",desc:"Empty celestial expanse"}],Hb=[{id:"dunes",name:"Silky Dunes",desc:"Smooth rolling desert sand ridges"},{id:"aurora",name:"Aurora Ribbons",desc:"Shimmering translucent silk curtains"},{id:"mountains",name:"Alpine Peaks",desc:"Angular faceted mountain horizons"},{id:"ocean",name:"Ocean Swells",desc:"Deep rolling tidal rollers & crests"}],Gb=[{id:"airy",label:"Airy (3)",desc:"Spacious sky"},{id:"deep",label:"Deep (5)",desc:"Standard balance"},{id:"dense",label:"Dense (7)",desc:"Rich stratified"}],Vb=[{id:"tabular",label:"Tabular Modern",preview:"12:00"},{id:"serif",label:"Editorial Luxury",preview:"12:00"},{id:"mono",label:"Tech Monospace",preview:"12:00"},{id:"minimal",label:"Minimalist Light",preview:"12:00"}],Wb=[{id:"compact",label:"Compact"},{id:"standard",label:"Standard"},{id:"heroic",label:"Heroic Grand"}],jb=({isOpen:s,onClose:e})=>{const{wallpaperSettings:t,updateWallpaperSettings:r,appTheme:o}=Vr(),l=o==="light",[d,m]=we.useState("celestial");if(!s)return null;const u=()=>{r({palette:"cosmic-royal",speed:"balanced",amplitude:"majestic",waveGeometry:"dunes",waveLayerDensity:"deep",celestialBody:"crescent-moon",showNebulaDust:!0,showConstellations:!0,showComet:!0,shootingStarMode:"occasional",showStars:!0,showCrossStars:!0,showOrbitalTrack:!0,showMeridian:!0,clockFontStyle:"tabular",clockSize:"standard",clockFormat:"12h",showSeconds:!0,showDate:!0,showGreeting:!0,clockHalo:"pulsar"})};return p.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-fadeIn select-none ${l?"bg-black/35":"bg-black/80"}`,children:[p.jsx("div",{className:"fixed inset-0",onClick:e,"aria-hidden":"true"}),p.jsxs("div",{role:"dialog","aria-modal":"true","aria-labelledby":"wallpaper-studio-title",className:`relative w-full max-w-xl max-h-[88vh] overflow-hidden rounded-3xl border shadow-2xl flex flex-col z-10 ${l?"bg-white/95 border-zinc-200 text-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)]":"cosmic-card border-white/[0.14] text-white shadow-2xl"}`,children:[p.jsxs("div",{className:`flex items-center justify-between p-5 pb-3 border-b shrink-0 ${l?"border-zinc-200":"border-white/[0.08]"}`,children:[p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("div",{className:`w-8 h-8 rounded-xl border flex items-center justify-center ${l?"bg-violet-50 border-violet-200 text-violet-700":"bg-violet-600/30 border-violet-400/40 text-violet-300"}`,children:p.jsx(Ng,{className:"w-4 h-4"})}),p.jsxs("div",{children:[p.jsx("h2",{id:"wallpaper-studio-title",className:`text-sm font-display uppercase tracking-widest font-bold ${l?"text-zinc-900":"text-white"}`,children:"Wallpaper Studio"}),p.jsx("p",{className:`text-[11px] font-sans ${l?"text-zinc-500":"text-zinc-400"}`,children:"Customize celestial objects, wave geometries & clock typography"})]})]}),p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("button",{type:"button",onClick:u,"aria-label":"Reset to default settings",title:"Reset to Defaults",className:`p-2 rounded-xl transition-colors cursor-pointer ${l?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white"}`,children:p.jsx(zr,{className:"w-3.5 h-3.5"})}),p.jsx("button",{type:"button",onClick:e,"aria-label":"Close Wallpaper Studio",className:`p-2 rounded-xl transition-colors cursor-pointer ${l?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white"}`,children:p.jsx(ar,{className:"w-4 h-4"})})]})]}),p.jsxs("div",{className:`flex items-center gap-1 px-5 pt-3 border-b shrink-0 ${l?"border-zinc-200 bg-zinc-50/80":"border-white/[0.06] bg-black/20"}`,children:[p.jsxs("button",{type:"button",onClick:()=>m("celestial"),className:`flex items-center gap-1.5 px-3 py-2 text-xs font-display font-medium border-b-2 transition-all cursor-pointer ${d==="celestial"?l?"border-violet-600 text-zinc-950 font-bold":"border-violet-400 text-white":l?"border-transparent text-zinc-500 hover:text-zinc-900":"border-transparent text-zinc-400 hover:text-zinc-200"}`,children:[p.jsx(eo,{className:"w-3.5 h-3.5 text-amber-500"}),p.jsx("span",{children:"Celestial Objects"})]}),p.jsxs("button",{type:"button",onClick:()=>m("waves"),className:`flex items-center gap-1.5 px-3 py-2 text-xs font-display font-medium border-b-2 transition-all cursor-pointer ${d==="waves"?l?"border-violet-600 text-zinc-950 font-bold":"border-violet-400 text-white":l?"border-transparent text-zinc-500 hover:text-zinc-900":"border-transparent text-zinc-400 hover:text-zinc-200"}`,children:[p.jsx(r0,{className:"w-3.5 h-3.5 text-cyan-500"}),p.jsx("span",{children:"Wave Architecture"})]}),p.jsxs("button",{type:"button",onClick:()=>m("clock"),className:`flex items-center gap-1.5 px-3 py-2 text-xs font-display font-medium border-b-2 transition-all cursor-pointer ${d==="clock"?l?"border-violet-600 text-zinc-950 font-bold":"border-violet-400 text-white":l?"border-transparent text-zinc-500 hover:text-zinc-900":"border-transparent text-zinc-400 hover:text-zinc-200"}`,children:[p.jsx(Af,{className:"w-3.5 h-3.5 text-violet-600"}),p.jsx("span",{children:"Clock Studio"})]}),p.jsxs("button",{type:"button",onClick:()=>m("palettes"),className:`flex items-center gap-1.5 px-3 py-2 text-xs font-display font-medium border-b-2 transition-all cursor-pointer ${d==="palettes"?l?"border-violet-600 text-zinc-950 font-bold":"border-violet-400 text-white":l?"border-transparent text-zinc-500 hover:text-zinc-900":"border-transparent text-zinc-400 hover:text-zinc-200"}`,children:[p.jsx(Rb,{className:"w-3.5 h-3.5 text-purple-600"}),p.jsx("span",{children:"Color Palettes"})]})]}),p.jsxs("div",{className:"flex-1 overflow-y-auto p-5 space-y-6",children:[d==="celestial"&&p.jsxs("div",{className:"space-y-5 animate-fadeIn",children:[p.jsxs("div",{className:"space-y-2.5",children:[p.jsx("div",{className:`flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold ${l?"text-zinc-800":"text-zinc-300"}`,children:p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx(eo,{className:"w-3.5 h-3.5 text-amber-500"}),p.jsx("span",{children:"Primary Celestial Body"})]})}),p.jsx("div",{className:"grid grid-cols-2 gap-2.5",children:Bb.map(h=>{const x=(t.celestialBody||"crescent-moon")===h.id;return p.jsxs("button",{type:"button",onClick:()=>r({celestialBody:h.id}),className:`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${x?l?"bg-amber-50 border-amber-500 ring-2 ring-amber-500/20 shadow-sm":"bg-amber-400/15 border-amber-400/60 shadow-[0_0_20px_rgba(251,191,36,0.2)]":l?"bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90 text-zinc-900":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]"}`,children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsx("span",{className:`text-xs font-display font-bold ${x?l?"text-amber-950 font-bold":"text-amber-200":l?"text-zinc-900":"text-white"}`,children:h.name}),x&&p.jsx("span",{className:`w-2 h-2 rounded-full shadow-sm ${l?"bg-amber-600":"bg-amber-400"}`})]}),p.jsx("span",{className:`text-[10px] font-sans mt-1 leading-tight ${x?l?"text-amber-900/80 font-medium":"text-amber-200/80":l?"text-zinc-600":"text-zinc-400"}`,children:h.desc})]},h.id)})})]}),p.jsxs("div",{className:"space-y-2.5",children:[p.jsxs("div",{className:`flex items-center gap-2 text-xs font-display uppercase tracking-wider font-semibold ${l?"text-zinc-800":"text-zinc-300"}`,children:[p.jsx(ds,{className:"w-3.5 h-3.5 text-violet-500"}),p.jsx("span",{children:"Astronomical Cosmic Features"})]}),p.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs",children:[p.jsxs("label",{className:`flex items-center justify-between p-3 rounded-2xl border cursor-pointer transition-colors ${l?"bg-zinc-50 hover:bg-zinc-100/90 border-zinc-200/90 text-zinc-900 shadow-sm":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] text-zinc-200"}`,children:[p.jsxs("div",{children:[p.jsx("div",{className:`font-semibold ${l?"text-zinc-900":"text-zinc-200"}`,children:"Constellation Charts"}),p.jsx("div",{className:`text-[10px] font-sans ${l?"text-zinc-600":"text-zinc-400"}`,children:"Ursa Major & Cassiopeia chords"})]}),p.jsx("input",{type:"checkbox",checked:t.showConstellations,onChange:h=>r({showConstellations:h.target.checked}),className:"w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"})]}),p.jsxs("label",{className:`flex items-center justify-between p-3 rounded-2xl border cursor-pointer transition-colors ${l?"bg-zinc-50 hover:bg-zinc-100/90 border-zinc-200/90 text-zinc-900 shadow-sm":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] text-zinc-200"}`,children:[p.jsxs("div",{children:[p.jsx("div",{className:`font-semibold ${l?"text-zinc-900":"text-zinc-200"}`,children:"Cosmic Comet"}),p.jsx("div",{className:`text-[10px] font-sans ${l?"text-zinc-600":"text-zinc-400"}`,children:"Sweeping ion dust tail"})]}),p.jsx("input",{type:"checkbox",checked:t.showComet,onChange:h=>r({showComet:h.target.checked}),className:"w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"})]}),p.jsxs("label",{className:`flex items-center justify-between p-3 rounded-2xl border cursor-pointer transition-colors ${l?"bg-zinc-50 hover:bg-zinc-100/90 border-zinc-200/90 text-zinc-900 shadow-sm":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] text-zinc-200"}`,children:[p.jsxs("div",{children:[p.jsx("div",{className:`font-semibold ${l?"text-zinc-900":"text-zinc-200"}`,children:"Volumetric Nebula"}),p.jsx("div",{className:`text-[10px] font-sans ${l?"text-zinc-600":"text-zinc-400"}`,children:"Interstellar atmospheric clouds"})]}),p.jsx("input",{type:"checkbox",checked:t.showNebulaDust,onChange:h=>r({showNebulaDust:h.target.checked}),className:"w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"})]}),p.jsxs("label",{className:`flex items-center justify-between p-3 rounded-2xl border cursor-pointer transition-colors ${l?"bg-zinc-50 hover:bg-zinc-100/90 border-zinc-200/90 text-zinc-900 shadow-sm":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] text-zinc-200"}`,children:[p.jsxs("div",{children:[p.jsx("div",{className:`font-semibold ${l?"text-zinc-900":"text-zinc-200"}`,children:"Orbital Trajectory Arc"}),p.jsx("div",{className:`text-[10px] font-sans ${l?"text-zinc-600":"text-zinc-400"}`,children:"Elliptical planetary telemetry"})]}),p.jsx("input",{type:"checkbox",checked:t.showOrbitalTrack,onChange:h=>r({showOrbitalTrack:h.target.checked}),className:"w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"})]}),p.jsxs("label",{className:`flex items-center justify-between p-3 rounded-2xl border cursor-pointer transition-colors ${l?"bg-zinc-50 hover:bg-zinc-100/90 border-zinc-200/90 text-zinc-900 shadow-sm":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] text-zinc-200"}`,children:[p.jsxs("div",{children:[p.jsx("div",{className:`font-semibold ${l?"text-zinc-900":"text-zinc-200"}`,children:"Celestial Meridian"}),p.jsx("div",{className:`text-[10px] font-sans ${l?"text-zinc-600":"text-zinc-400"}`,children:"Vertical astronomical ticks"})]}),p.jsx("input",{type:"checkbox",checked:t.showMeridian,onChange:h=>r({showMeridian:h.target.checked}),className:"w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"})]}),p.jsxs("label",{className:`flex items-center justify-between p-3 rounded-2xl border cursor-pointer transition-colors ${l?"bg-zinc-50 hover:bg-zinc-100/90 border-zinc-200/90 text-zinc-900 shadow-sm":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] text-zinc-200"}`,children:[p.jsxs("div",{children:[p.jsx("div",{className:`font-semibold ${l?"text-zinc-900":"text-zinc-200"}`,children:"Diffraction Cross Stars"}),p.jsx("div",{className:`text-[10px] font-sans ${l?"text-zinc-600":"text-zinc-400"}`,children:"4-point diamond optical flares"})]}),p.jsx("input",{type:"checkbox",checked:t.showCrossStars,onChange:h=>r({showCrossStars:h.target.checked}),className:"w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"})]})]})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsxs("div",{className:`flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold ${l?"text-zinc-800":"text-zinc-300"}`,children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx(Fb,{className:`w-3.5 h-3.5 ${l?"text-cyan-600":"text-cyan-400"}`}),p.jsx("span",{children:"Shooting Star Frequency"})]}),p.jsx("span",{className:`text-[11px] font-medium lowercase capitalize ${l?"text-violet-700 font-bold":"text-violet-300"}`,children:t.shootingStarMode||"occasional"})]}),p.jsx("div",{className:"grid grid-cols-3 gap-2",children:["off","occasional","meteor-shower"].map(h=>{const x=(t.shootingStarMode||"occasional")===h;return p.jsx("button",{type:"button",onClick:()=>r({shootingStarMode:h}),className:`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer ${x?l?"bg-cyan-600 text-white font-bold shadow-sm border-cyan-700":"bg-cyan-600/30 border-cyan-400 text-white font-semibold":l?"bg-zinc-100 hover:bg-zinc-200/80 border-zinc-200 text-zinc-700 font-medium":"bg-white/[0.03] border-white/[0.06] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.06]"}`,children:p.jsx("div",{className:"text-xs font-display capitalize",children:h.replace("-"," ")})},h)})})]})]}),d==="waves"&&p.jsxs("div",{className:"space-y-5 animate-fadeIn",children:[p.jsxs("div",{className:"space-y-2.5",children:[p.jsxs("div",{className:`flex items-center gap-2 text-xs font-display uppercase tracking-wider font-semibold ${l?"text-zinc-800":"text-zinc-300"}`,children:[p.jsx(r0,{className:`w-3.5 h-3.5 ${l?"text-cyan-600":"text-cyan-400"}`}),p.jsx("span",{children:"Horizon Geometry Style"})]}),p.jsx("div",{className:"grid grid-cols-2 gap-2.5",children:Hb.map(h=>{const x=(t.waveGeometry||"dunes")===h.id;return p.jsxs("button",{type:"button",onClick:()=>r({waveGeometry:h.id}),className:`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${x?l?"bg-cyan-50 border-cyan-500 ring-2 ring-cyan-500/20 shadow-sm":"bg-cyan-600/20 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.2)]":l?"bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90 text-zinc-900":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]"}`,children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsx("span",{className:`text-xs font-display font-bold ${x?l?"text-cyan-950 font-bold":"text-cyan-200":l?"text-zinc-900":"text-white"}`,children:h.name}),x&&p.jsx("span",{className:`w-2 h-2 rounded-full shadow-sm ${l?"bg-cyan-600":"bg-cyan-400"}`})]}),p.jsx("span",{className:`text-[10px] font-sans mt-1 leading-tight ${x?l?"text-cyan-900/80 font-medium":"text-cyan-200/80":l?"text-zinc-600":"text-zinc-400"}`,children:h.desc})]},h.id)})})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsxs("div",{className:`flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold ${l?"text-zinc-800":"text-zinc-300"}`,children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx(Cb,{className:`w-3.5 h-3.5 ${l?"text-violet-600":"text-violet-400"}`}),p.jsx("span",{children:"Layer Density (Stratification)"})]}),p.jsx("span",{className:`text-[11px] font-medium lowercase capitalize ${l?"text-violet-700 font-bold":"text-violet-300"}`,children:t.waveLayerDensity||"deep"})]}),p.jsx("div",{className:"grid grid-cols-3 gap-2",children:Gb.map(h=>{const x=(t.waveLayerDensity||"deep")===h.id;return p.jsxs("button",{type:"button",onClick:()=>r({waveLayerDensity:h.id}),className:`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer ${x?l?"bg-violet-600 text-white font-bold shadow-sm border-violet-700":"bg-violet-600/30 border-violet-400 text-white font-semibold":l?"bg-zinc-100 hover:bg-zinc-200/80 border-zinc-200 text-zinc-700 font-medium":"bg-white/[0.03] border-white/[0.06] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.06]"}`,children:[p.jsx("div",{className:"text-xs font-display",children:h.label}),p.jsx("div",{className:`text-[10px] font-sans mt-0.5 ${x?l?"text-violet-100":"text-violet-200":"text-zinc-500"}`,children:h.desc})]},h.id)})})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsxs("div",{className:`flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold ${l?"text-zinc-800":"text-zinc-300"}`,children:[p.jsx("span",{children:"Wave Drift Speed"}),p.jsx("span",{className:`text-[11px] font-medium lowercase capitalize ${l?"text-violet-700 font-bold":"text-violet-300"}`,children:t.speed})]}),p.jsx("div",{className:"grid grid-cols-4 gap-2",children:["frozen","calm","balanced","dynamic"].map(h=>{const x=t.speed===h;return p.jsx("button",{type:"button",onClick:()=>r({speed:h}),className:`py-2 px-1 rounded-xl border text-center transition-all cursor-pointer ${x?l?"bg-violet-600 text-white font-bold shadow-sm border-violet-700":"bg-violet-600/30 border-violet-400 text-white font-semibold":l?"bg-zinc-100 hover:bg-zinc-200/80 border-zinc-200 text-zinc-700 font-medium":"bg-white/[0.03] border-white/[0.06] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.06]"}`,children:p.jsx("div",{className:"text-xs font-display capitalize",children:h})},h)})})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsxs("div",{className:`flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold ${l?"text-zinc-800":"text-zinc-300"}`,children:[p.jsx("span",{children:"Wave Crest Amplitude"}),p.jsx("span",{className:`text-[11px] font-medium lowercase capitalize ${l?"text-violet-700 font-bold":"text-violet-300"}`,children:t.amplitude})]}),p.jsx("div",{className:"grid grid-cols-3 gap-2",children:["subtle","majestic","dramatic"].map(h=>{const x=t.amplitude===h;return p.jsx("button",{type:"button",onClick:()=>r({amplitude:h}),className:`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer ${x?l?"bg-violet-600 text-white font-bold shadow-sm border-violet-700":"bg-violet-600/30 border-violet-400 text-white font-semibold":l?"bg-zinc-100 hover:bg-zinc-200/80 border-zinc-200 text-zinc-700 font-medium":"bg-white/[0.03] border-white/[0.06] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.06]"}`,children:p.jsx("div",{className:"text-xs font-display capitalize",children:h})},h)})})]})]}),d==="clock"&&p.jsxs("div",{className:"space-y-5 animate-fadeIn",children:[p.jsxs("div",{className:"space-y-2.5",children:[p.jsxs("div",{className:`flex items-center gap-2 text-xs font-display uppercase tracking-wider font-semibold ${l?"text-zinc-800":"text-zinc-300"}`,children:[p.jsx(zb,{className:`w-3.5 h-3.5 ${l?"text-violet-600":"text-violet-400"}`}),p.jsx("span",{children:"Numeral Typography Style"})]}),p.jsx("div",{className:"grid grid-cols-2 gap-2.5",children:Vb.map(h=>{const x=(t.clockFontStyle||"tabular")===h.id,v=h.id==="serif"?"font-serif":h.id==="mono"?"font-mono":h.id==="minimal"?"font-sans font-light":"font-display";return p.jsxs("button",{type:"button",onClick:()=>r({clockFontStyle:h.id}),className:`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${x?l?"bg-violet-50 border-violet-500 ring-2 ring-violet-500/20 shadow-sm":"bg-violet-600/20 border-violet-400 shadow-[0_0_20px_rgba(147,51,234,0.25)]":l?"bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90 text-zinc-900":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]"}`,children:[p.jsxs("div",{children:[p.jsx("div",{className:`text-xs font-display font-bold ${x?l?"text-violet-950":"text-white":l?"text-zinc-900":"text-zinc-200"}`,children:h.label}),p.jsx("div",{className:`text-xl ${v} mt-1 ${x?l?"text-violet-700 font-bold":"text-violet-200":l?"text-zinc-700":"text-zinc-300"}`,children:h.preview})]}),x&&p.jsx("span",{className:`w-2 h-2 rounded-full shadow-sm ${l?"bg-violet-600":"bg-violet-400"}`})]},h.id)})})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsxs("div",{className:`flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold ${l?"text-zinc-800":"text-zinc-300"}`,children:[p.jsx("span",{children:"Display Clock Scale"}),p.jsx("span",{className:`text-[11px] font-medium lowercase capitalize ${l?"text-violet-700 font-bold":"text-violet-300"}`,children:t.clockSize||"standard"})]}),p.jsx("div",{className:"grid grid-cols-3 gap-2",children:Wb.map(h=>{const x=(t.clockSize||"standard")===h.id;return p.jsx("button",{type:"button",onClick:()=>r({clockSize:h.id}),className:`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer ${x?l?"bg-violet-600 text-white font-bold shadow-sm border-violet-700":"bg-violet-600/30 border-violet-400 text-white font-semibold":l?"bg-zinc-100 hover:bg-zinc-200/80 border-zinc-200 text-zinc-700 font-medium":"bg-white/[0.03] border-white/[0.06] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.06]"}`,children:p.jsx("div",{className:"text-xs font-display",children:h.label})},h.id)})})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsxs("div",{className:`flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold ${l?"text-zinc-800":"text-zinc-300"}`,children:[p.jsx("span",{children:"Backlight Halo"}),p.jsx("span",{className:`text-[11px] font-medium lowercase capitalize ${l?"text-violet-700 font-bold":"text-violet-300"}`,children:t.clockHalo||"pulsar"})]}),p.jsx("div",{className:"grid grid-cols-3 gap-2",children:["none","subtle","pulsar"].map(h=>{const x=(t.clockHalo||"pulsar")===h;return p.jsx("button",{type:"button",onClick:()=>r({clockHalo:h}),className:`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer ${x?l?"bg-violet-600 text-white font-bold shadow-sm border-violet-700":"bg-violet-600/30 border-violet-400 text-white font-semibold":l?"bg-zinc-100 hover:bg-zinc-200/80 border-zinc-200 text-zinc-700 font-medium":"bg-white/[0.03] border-white/[0.06] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.06]"}`,children:p.jsx("div",{className:"text-xs font-display capitalize",children:h})},h)})})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsx("div",{className:`flex items-center gap-2 text-xs font-display uppercase tracking-wider font-semibold ${l?"text-zinc-800":"text-zinc-300"}`,children:p.jsx("span",{children:"Display Elements"})}),p.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[p.jsxs("div",{className:`flex items-center gap-1 p-1 rounded-2xl border ${l?"bg-zinc-100 border-zinc-200":"bg-white/[0.03] border-white/[0.06]"}`,children:[p.jsx("button",{type:"button",onClick:()=>r({clockFormat:"12h"}),className:`flex-1 py-1.5 rounded-xl text-center transition-all cursor-pointer font-sans text-xs ${t.clockFormat==="12h"?l?"bg-violet-600 text-white font-bold shadow-sm":"bg-violet-600/40 text-white font-medium":l?"text-zinc-600 hover:text-zinc-950 font-medium":"text-zinc-400 hover:text-white"}`,children:"12 Hour"}),p.jsx("button",{type:"button",onClick:()=>r({clockFormat:"24h"}),className:`flex-1 py-1.5 rounded-xl text-center transition-all cursor-pointer font-sans text-xs ${t.clockFormat==="24h"?l?"bg-violet-600 text-white font-bold shadow-sm":"bg-violet-600/40 text-white font-medium":l?"text-zinc-600 hover:text-zinc-950 font-medium":"text-zinc-400 hover:text-white"}`,children:"24 Hour"})]}),p.jsxs("label",{className:`flex items-center justify-between p-2.5 rounded-2xl border cursor-pointer transition-colors ${l?"bg-zinc-50 hover:bg-zinc-100/90 border-zinc-200/90 text-zinc-900 shadow-sm":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] text-zinc-300"}`,children:[p.jsx("span",{className:`font-medium ${l?"text-zinc-900":"text-zinc-300"}`,children:"Show Seconds"}),p.jsx("input",{type:"checkbox",checked:t.showSeconds,onChange:h=>r({showSeconds:h.target.checked}),className:"w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"})]}),p.jsxs("label",{className:`flex items-center justify-between p-2.5 rounded-2xl border cursor-pointer transition-colors ${l?"bg-zinc-50 hover:bg-zinc-100/90 border-zinc-200/90 text-zinc-900 shadow-sm":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] text-zinc-300"}`,children:[p.jsx("span",{className:`font-medium ${l?"text-zinc-900":"text-zinc-300"}`,children:"Show Date Pill"}),p.jsx("input",{type:"checkbox",checked:t.showDate!==!1,onChange:h=>r({showDate:h.target.checked}),className:"w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"})]}),p.jsxs("label",{className:`flex items-center justify-between p-2.5 rounded-2xl border cursor-pointer transition-colors ${l?"bg-zinc-50 hover:bg-zinc-100/90 border-zinc-200/90 text-zinc-900 shadow-sm":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] text-zinc-300"}`,children:[p.jsx("span",{className:`font-medium ${l?"text-zinc-900":"text-zinc-300"}`,children:"Greeting & Motto"}),p.jsx("input",{type:"checkbox",checked:t.showGreeting!==!1,onChange:h=>r({showGreeting:h.target.checked}),className:"w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"})]})]})]})]}),d==="palettes"&&p.jsx("div",{className:"space-y-4 animate-fadeIn",children:p.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:Ob.map(h=>{const x=t.palette===h.id;return p.jsxs("button",{type:"button",onClick:()=>r({palette:h.id}),className:`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-2.5 ${x?l?"bg-violet-50 border-violet-500 ring-2 ring-violet-500/20 shadow-sm":"bg-violet-600/20 border-violet-400/60 shadow-[0_0_20px_rgba(147,51,234,0.25)]":l?"bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]"}`,children:[p.jsxs("div",{className:"flex items-center justify-between w-full",children:[p.jsx("span",{className:`text-xs font-display font-bold ${x?l?"text-violet-950":"text-white":l?"text-zinc-900":"text-zinc-200"}`,children:h.name}),x&&p.jsx("span",{className:`w-2 h-2 rounded-full shadow-sm ${l?"bg-violet-600":"bg-violet-400 shadow-[0_0_8px_#a855f7]"}`})]}),p.jsx("div",{className:`flex items-center gap-1.5 w-full h-4 rounded-lg overflow-hidden p-0.5 border ${l?"bg-zinc-200/60 border-zinc-300":"bg-black/40 border-white/[0.08]"}`,children:h.previewColors.map((v,_)=>p.jsx("div",{className:"flex-1 h-full rounded-sm",style:{backgroundColor:v}},_))}),p.jsx("span",{className:`text-[10px] font-sans leading-tight ${x?l?"text-violet-900/80 font-medium":"text-zinc-300":l?"text-zinc-600":"text-zinc-400"}`,children:h.subtitle})]},h.id)})})})]}),p.jsxs("div",{className:`p-4 border-t flex items-center justify-between text-xs shrink-0 ${l?"border-zinc-200 bg-zinc-50/90":"border-white/[0.08] bg-black/30"}`,children:[p.jsx("span",{className:`font-sans ${l?"text-zinc-600 font-medium":"text-zinc-400"}`,children:"Settings saved automatically"}),p.jsx("button",{type:"button",onClick:e,className:"px-5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-display font-medium shadow-md transition-all cursor-pointer",children:"Apply & Close"})]})]})]})},to=({className:s="w-4 h-4"})=>p.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:s,"aria-hidden":"true",children:p.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})}),Yg=({isPlaying:s,color:e="#a855f7",className:t="w-16 h-5",barCount:r=10})=>{const o=we.useRef(null);return we.useEffect(()=>{const l=o.current;if(!l)return;const d=l.getContext("2d");if(!d)return;let m;const u=cs.getAnalyser(),h=u?new Uint8Array(u.frequencyBinCount):null,x=()=>{if(d.clearRect(0,0,l.width,l.height),s&&u&&h){u.getByteFrequencyData(h);const v=l.width,_=l.height,M=2,b=M*(r-1),C=Math.max(2,(v-b)/r);for(let y=0;y<r;y++){const S=Math.min(h.length-1,Math.floor(y*(h.length/r)*.7)),R=h[S]/255,F=Math.max(3,R*(_-2)),P=y*(C+M),z=_-F;d.fillStyle=e,d.beginPath(),d.roundRect(P,z,C,F,1.5),d.fill()}}else{const v=l.width,_=l.height,M=2,b=M*(r-1),C=Math.max(2,(v-b)/r);for(let y=0;y<r;y++){const S=y*(C+M),R=_-2.5;d.fillStyle="rgba(255, 255, 255, 0.2)",d.beginPath(),d.roundRect(S,R,C,2.5,1),d.fill()}}m=requestAnimationFrame(x)};return x(),()=>{cancelAnimationFrame(m)}},[s,e,r]),p.jsx("canvas",{ref:o,width:64,height:20,className:t,"aria-hidden":"true"})},$b=({isOpen:s,onClose:e})=>{const{appTheme:t,audioSource:r,isAudioPlaying:o,activeSoundscapeId:l,audioVolume:d,isAudioMuted:m,playSoundscape:u,stopSoundscape:h,setAudioVolume:x,toggleAudioMute:v,isYouTubePlaying:_,activeYouTubeItem:M,youtubeVolume:b,isYouTubeMuted:C,savedYouTubeItems:y,showYouTubePreview:S,setShowYouTubePreview:R,playYouTubeItem:F,toggleYouTubePlay:P,stopYouTube:z,nextYouTubeTrack:D,prevYouTubeTrack:w,setYouTubeVolume:N,toggleYouTubeMute:ee,addYouTubeToLibrary:X,removeYouTubeFromLibrary:G}=Vr(),W=t==="light",[V,H]=we.useState(r||"youtube"),[O,re]=we.useState(""),[K,j]=we.useState(""),[$,Y]=we.useState(null),[L,ne]=we.useState(null),[be,U]=we.useState(null),[_e,Me]=we.useState(null);if(we.useEffect(()=>{if(!be){Me(null);return}Me(be*60);const Te=setInterval(()=>{Me(ke=>ke===null||ke<=1?(h(),z(),U(null),null):ke-1)},1e3);return()=>clearInterval(Te)},[be,h,z]),we.useEffect(()=>{const Te=ke=>{ke.key==="Escape"&&s&&e()};return window.addEventListener("keydown",Te),()=>window.removeEventListener("keydown",Te)},[s,e]),!s)return null;const De=Qs.find(Te=>Te.id===l)||Qs[0],Se=Te=>{const ke=Math.floor(Te/60),Xe=Te%60;return`${ke}:${Xe.toString().padStart(2,"0")}`},Fe=Te=>{if(Te.preventDefault(),Y(null),ne(null),!O.trim()){Y("Please enter a YouTube video or playlist link.");return}const ke=X(O.trim(),K.trim()||void 0);if(!ke.success||!ke.item){Y(ke.error||"Failed to parse YouTube link.");return}F(ke.item),re(""),j(""),ne(`Playing: ${ke.item.title}`),setTimeout(()=>ne(null),4e3)},ut=V==="youtube"?M?M.title:"No YouTube stream selected":De.title,je=V==="youtube"?_:o;return p.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 backdrop-blur-xl animate-fadeIn select-none ${W?"bg-black/45":"bg-black/85"}`,role:"dialog","aria-modal":"true","aria-labelledby":"audio-modal-title",children:[p.jsx("div",{className:"fixed inset-0",onClick:e,"aria-hidden":"true"}),p.jsxs("div",{className:`relative z-10 w-full max-w-2xl border rounded-3xl shadow-[0_20px_70px_rgba(0,0,0,0.85)] flex flex-col max-h-[90vh] overflow-hidden ${W?"bg-white/95 border-zinc-200 text-zinc-900 shadow-2xl":"bg-[#0b0d1e] border-white/[0.12] text-white shadow-2xl"}`,children:[p.jsxs("div",{className:`flex items-center justify-between px-6 py-4 border-b shrink-0 ${W?"border-zinc-200 bg-zinc-50/80":"border-white/[0.08] bg-white/[0.02]"}`,children:[p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("div",{className:`w-9 h-9 rounded-2xl border flex items-center justify-center ${W?"bg-rose-50 border-rose-200 text-red-600":"bg-red-500/20 border-red-400/40 text-red-400"}`,children:p.jsx(ic,{className:"w-5 h-5"})}),p.jsxs("div",{children:[p.jsxs("h2",{id:"audio-modal-title",className:`text-sm sm:text-base font-display font-semibold tracking-wide flex items-center gap-2 ${W?"text-zinc-900":"text-white"}`,children:["Focus Audio Sanctuary",p.jsx("span",{className:`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border ${V==="youtube"?W?"bg-red-50 text-red-700 border-red-200":"bg-red-500/15 text-red-300 border-red-500/30":W?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-emerald-500/15 text-emerald-300 border-emerald-500/30"}`,children:V==="youtube"?"YouTube Online • Infinite Audio":"Web Audio • Offline"})]}),p.jsx("p",{className:`text-xs font-sans mt-0.5 ${W?"text-zinc-500":"text-zinc-400"}`,children:V==="youtube"?"Paste any YouTube video or playlist link or choose curated study streams":"Procedurally synthesized ambient soundscapes. Zero network required."})]})]}),p.jsx("button",{type:"button",onClick:e,className:`w-8 h-8 rounded-xl flex items-center justify-center transition-colors cursor-pointer border ${W?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600 border-zinc-200":"bg-white/[0.05] hover:bg-white/[0.12] text-zinc-400 hover:text-white border-white/[0.08]"}`,"aria-label":"Close sound sanctuary",children:p.jsx(ar,{className:"w-4 h-4"})})]}),p.jsxs("div",{className:`flex items-center gap-2 px-6 pt-3 border-b shrink-0 ${W?"border-zinc-200 bg-zinc-50/50":"border-white/[0.06] bg-black/20"}`,children:[p.jsxs("button",{type:"button",onClick:()=>H("youtube"),className:`flex items-center gap-2 px-4 py-2.5 text-xs font-display font-semibold border-b-2 transition-all cursor-pointer ${V==="youtube"?W?"border-red-600 text-red-700":"border-red-500 text-white":W?"border-transparent text-zinc-500 hover:text-zinc-900":"border-transparent text-zinc-400 hover:text-zinc-200"}`,children:[p.jsx(to,{className:"w-4 h-4 text-red-500"}),p.jsx("span",{children:"YouTube Audio & Playlists"})]}),p.jsxs("button",{type:"button",onClick:()=>H("ambient"),className:`flex items-center gap-2 px-4 py-2.5 text-xs font-display font-semibold border-b-2 transition-all cursor-pointer ${V==="ambient"?W?"border-violet-600 text-violet-700":"border-violet-400 text-white":W?"border-transparent text-zinc-500 hover:text-zinc-900":"border-transparent text-zinc-400 hover:text-zinc-200"}`,children:[p.jsx(n0,{className:"w-4 h-4 text-violet-500"}),p.jsx("span",{children:"Procedural Soundscapes (Offline)"})]})]}),V==="youtube"&&p.jsxs("div",{className:"flex-1 overflow-y-auto p-5 sm:p-6 space-y-5 animate-fadeIn",children:[p.jsxs("form",{onSubmit:Fe,className:"space-y-2",children:[p.jsxs("div",{className:"flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold",children:[p.jsx("span",{className:W?"text-zinc-800":"text-zinc-300",children:"Play YouTube Link or Playlist"}),p.jsx("span",{className:`text-[10px] font-sans font-normal ${W?"text-zinc-500":"text-zinc-400"}`,children:"Supports videos, live streams & playlists"})]}),p.jsxs("div",{className:"flex flex-col sm:flex-row gap-2",children:[p.jsx("input",{type:"text",placeholder:"Paste YouTube link (e.g. https://www.youtube.com/watch?v=... or playlist?list=...)",value:O,onChange:Te=>{re(Te.target.value),$&&Y(null)},className:`flex-1 px-3.5 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-2 ${W?"bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:ring-red-500/20 focus:border-red-500":"bg-white/[0.04] border-white/[0.1] text-white placeholder-zinc-500 focus:ring-red-400/30 focus:border-red-400"}`}),p.jsxs("button",{type:"submit",className:"px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-display font-semibold flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer shrink-0",children:[p.jsx(Yl,{className:"w-4 h-4"}),p.jsx("span",{children:"Load & Play"})]})]}),$&&p.jsxs("div",{className:"flex items-center gap-2 p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-sans",children:[p.jsx(rg,{className:"w-4 h-4 shrink-0"}),p.jsx("span",{children:$})]}),L&&p.jsxs("div",{className:"flex items-center gap-2 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-sans",children:[p.jsx(ds,{className:"w-4 h-4 shrink-0"}),p.jsx("span",{children:L})]})]}),M&&p.jsxs("div",{className:`p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${W?"bg-red-50/70 border-red-200 text-zinc-900 shadow-sm":"bg-red-950/20 border-red-500/30 text-white"}`,children:[p.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[p.jsxs("div",{className:"w-12 h-12 rounded-xl overflow-hidden bg-black/40 shrink-0 border border-white/10 relative",children:[p.jsx("img",{src:M.thumbnailUrl||ql[0].thumbnailUrl,alt:"",className:"w-full h-full object-cover"}),_&&p.jsx("div",{className:"absolute inset-0 bg-black/35 flex items-center justify-center",children:p.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"})})]}),p.jsxs("div",{className:"min-w-0",children:[p.jsx("div",{className:"flex items-center gap-1.5",children:p.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-red-600 font-bold",children:M.type==="playlist"?"PLAYLIST":"NOW STREAMING"})}),p.jsx("h3",{className:`text-xs sm:text-sm font-display font-semibold truncate ${W?"text-zinc-900":"text-white"}`,children:M.title}),p.jsx("p",{className:`text-[11px] font-sans truncate ${W?"text-zinc-600":"text-zinc-400"}`,children:M.channel||"YouTube"})]})]}),p.jsxs("div",{className:"flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end",children:[M.type==="playlist"&&p.jsxs(p.Fragment,{children:[p.jsx("button",{type:"button",onClick:w,className:`p-2 rounded-xl border transition-colors cursor-pointer ${W?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-white"}`,title:"Previous Track in Playlist",children:p.jsx(cf,{className:"w-3.5 h-3.5"})}),p.jsx("button",{type:"button",onClick:D,className:`p-2 rounded-xl border transition-colors cursor-pointer ${W?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-white"}`,title:"Next Track in Playlist",children:p.jsx(uf,{className:"w-3.5 h-3.5"})})]}),p.jsxs("button",{type:"button",onClick:()=>{try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}},className:"px-2.5 py-1.5 rounded-xl border border-emerald-500/40 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-sans font-bold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer",title:"Force Unmute & Max Volume",children:[p.jsx(df,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:"Unmute"})]}),p.jsxs("button",{type:"button",onClick:()=>R(!S),className:`px-3 py-1.5 rounded-xl border text-xs font-sans flex items-center gap-1.5 transition-colors cursor-pointer ${S?"bg-red-600 text-white border-red-600 font-medium":W?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-zinc-300"}`,title:"Toggle Floating Video Preview",children:[p.jsx(Ub,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:S?"Hide Video":"View Video"})]})]})]}),p.jsxs("div",{className:"space-y-2.5",children:[p.jsxs("div",{className:`flex items-center gap-2 text-xs font-display uppercase tracking-wider font-semibold ${W?"text-zinc-800":"text-zinc-300"}`,children:[p.jsx(ds,{className:"w-3.5 h-3.5 text-amber-500"}),p.jsx("span",{children:"Curated Focus & Lo-Fi Streams"})]}),p.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:ql.map(Te=>{const ke=(M==null?void 0:M.id)===Te.id||(M==null?void 0:M.videoId)===Te.videoId&&Te.videoId,Xe=ke&&_;return p.jsxs("button",{type:"button",onClick:()=>{Xe?P():F(Te)},className:`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${ke?W?"bg-red-50 border-red-500 ring-2 ring-red-500/20 shadow-sm":"bg-red-500/15 border-red-400 shadow-[0_0_20px_rgba(239,68,68,0.2)]":W?"bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90 text-zinc-900":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]"}`,children:[p.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[p.jsx("div",{className:"w-9 h-9 rounded-xl overflow-hidden bg-black/40 shrink-0 border border-white/10",children:p.jsx("img",{src:Te.thumbnailUrl,alt:"",onError:St=>{St.currentTarget.src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=400&auto=format&fit=crop"},className:"w-full h-full object-cover"})}),p.jsxs("div",{className:"min-w-0",children:[p.jsx("div",{className:`text-xs font-display font-semibold truncate ${ke?W?"text-red-950 font-bold":"text-white":W?"text-zinc-900":"text-zinc-200"}`,children:Te.title}),p.jsx("div",{className:`text-[10px] font-sans truncate ${W?"text-zinc-500":"text-zinc-400"}`,children:Te.channel})]})]}),p.jsx("div",{className:`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${Xe?"bg-red-600 text-white shadow-sm":W?"bg-zinc-200 text-zinc-700":"bg-white/10 text-white"}`,children:Xe?p.jsx(Or,{className:"w-3.5 h-3.5 fill-current"}):p.jsx(Br,{className:"w-3.5 h-3.5 ml-0.5 fill-current"})})]},Te.id)})})]}),y.filter(Te=>!Te.isCurated).length>0&&p.jsxs("div",{className:"space-y-2.5",children:[p.jsx("div",{className:`flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold ${W?"text-zinc-800":"text-zinc-300"}`,children:p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx(e0,{className:"w-3.5 h-3.5 text-red-500"}),p.jsx("span",{children:"My Saved YouTube Library"})]})}),p.jsx("div",{className:"space-y-2",children:y.filter(Te=>!Te.isCurated).map(Te=>{const ke=(M==null?void 0:M.id)===Te.id,Xe=ke&&_;return p.jsxs("div",{className:`p-3 rounded-2xl border flex items-center justify-between gap-3 transition-all ${ke?W?"bg-red-50 border-red-500 ring-2 ring-red-500/20":"bg-red-500/15 border-red-400":W?"bg-zinc-50 border-zinc-200":"bg-white/[0.03] border-white/[0.06]"}`,children:[p.jsxs("div",{onClick:()=>F(Te),className:"flex items-center gap-3 min-w-0 flex-1 cursor-pointer",children:[p.jsx("div",{className:`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${Te.type==="playlist"?"bg-purple-600/20 text-purple-400":"bg-red-600/20 text-red-400"}`,children:Te.type==="playlist"?p.jsx(e0,{className:"w-4 h-4"}):p.jsx(to,{className:"w-4 h-4"})}),p.jsxs("div",{className:"min-w-0",children:[p.jsx("div",{className:`text-xs font-display font-semibold truncate ${W?"text-zinc-900":"text-white"}`,children:Te.title}),p.jsxs("div",{className:`text-[10px] font-sans truncate ${W?"text-zinc-500":"text-zinc-400"}`,children:[Te.type==="playlist"?"Playlist":"Single Stream"," • ",Te.url]})]})]}),p.jsxs("div",{className:"flex items-center gap-1.5 shrink-0",children:[p.jsx("button",{type:"button",onClick:()=>{Xe?P():F(Te)},className:`p-2 rounded-xl transition-colors cursor-pointer ${Xe?"bg-red-600 text-white":W?"bg-zinc-200 text-zinc-800 hover:bg-zinc-300":"bg-white/10 text-white hover:bg-white/20"}`,children:Xe?p.jsx(Or,{className:"w-3.5 h-3.5 fill-current"}):p.jsx(Br,{className:"w-3.5 h-3.5 fill-current"})}),p.jsx("button",{type:"button",onClick:()=>G(Te.id),className:`p-2 rounded-xl transition-colors cursor-pointer ${W?"text-zinc-400 hover:text-red-600":"text-zinc-500 hover:text-red-400"}`,title:"Remove from library",children:p.jsx(rc,{className:"w-3.5 h-3.5"})})]})]},Te.id)})})]})]}),V==="ambient"&&p.jsx("div",{className:"flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 animate-fadeIn",children:p.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3.5",children:Qs.map(Te=>{const ke=l===Te.id,Xe=ke&&o;return p.jsxs("div",{onClick:()=>{Xe?h():u(Te.id)},className:`relative p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between select-none group ${ke?W?"bg-violet-50 border-violet-500 ring-2 ring-violet-500/20 shadow-sm":"bg-violet-950/35 border-violet-500/50 shadow-[0_0_25px_rgba(168,85,247,0.18)]":W?"bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90 text-zinc-900":"bg-white/[0.025] hover:bg-white/[0.05] border-white/[0.08] hover:border-white/[0.18]"}`,children:[p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center justify-between mb-2",children:[p.jsx("span",{className:`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md border ${W?"bg-zinc-200/60 text-zinc-700 border-zinc-300":"text-zinc-400 bg-white/[0.05] border-white/[0.06]"}`,children:Te.category}),p.jsx("div",{className:`w-7 h-7 rounded-full flex items-center justify-center transition-all ${Xe?"bg-violet-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.6)]":W?"bg-zinc-200 text-zinc-700 group-hover:bg-zinc-300":"bg-white/[0.06] text-zinc-300 group-hover:bg-white/[0.15] group-hover:text-white"}`,children:Xe?p.jsx(Or,{className:"w-3.5 h-3.5 fill-current"}):p.jsx(Br,{className:"w-3.5 h-3.5 ml-0.5 fill-current"})})]}),p.jsx("h3",{className:`text-sm font-display font-semibold tracking-wide transition-colors ${W?"text-zinc-900":"text-white"}`,children:Te.title}),p.jsx("p",{className:`text-xs font-sans mt-1 leading-snug line-clamp-2 ${W?"text-zinc-600":"text-zinc-400"}`,children:Te.tagline})]}),p.jsxs("div",{className:`mt-3 pt-2.5 border-t flex items-center justify-between text-[10px] font-mono ${W?"border-zinc-200 text-zinc-500":"border-white/[0.06] text-zinc-400"}`,children:[p.jsx("span",{className:"truncate pr-2",children:Te.frequency}),Xe&&p.jsxs("span",{className:"flex items-center gap-1 text-emerald-500 font-semibold shrink-0",children:[p.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"}),"PLAYING"]})]})]},Te.id)})})}),p.jsxs("div",{className:`px-5 py-3 border-t flex flex-wrap items-center justify-between gap-3 shrink-0 ${W?"border-zinc-200 bg-zinc-50/60":"border-white/[0.06] bg-white/[0.01]"}`,children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx(Af,{className:`w-4 h-4 ${W?"text-zinc-600":"text-violet-400"}`}),p.jsx("span",{className:`text-xs font-display font-medium ${W?"text-zinc-800":"text-zinc-300"}`,children:"Auto-Stop Timer:"}),_e!==null&&p.jsxs("span",{className:`text-xs font-mono font-bold px-2 py-0.5 rounded-md border ${W?"bg-amber-100 text-amber-900 border-amber-300":"text-amber-300 bg-amber-500/15 border-amber-500/30"}`,children:[Se(_e)," left"]})]}),p.jsx("div",{className:"flex items-center gap-1.5",children:[{label:"Off",val:null},{label:"15m",val:15},{label:"25m",val:25},{label:"45m",val:45},{label:"60m",val:60}].map(Te=>p.jsx("button",{type:"button",onClick:()=>U(Te.val),className:`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${be===Te.val?W?"bg-zinc-900 text-white font-bold shadow-sm":"bg-violet-600 text-white font-bold shadow-sm":W?"bg-zinc-200/80 text-zinc-700 hover:bg-zinc-300":"bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08]"}`,children:Te.label},Te.label))})]}),p.jsxs("div",{className:`p-4 sm:p-5 border-t flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 ${W?"border-zinc-200 bg-zinc-100/90":"border-white/[0.08] bg-[#070914]/90 backdrop-blur-xl"}`,children:[p.jsxs("div",{className:"flex items-center gap-3 w-full sm:w-auto",children:[p.jsx("div",{className:`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${V==="youtube"?W?"bg-red-50 border-red-200 text-red-600":"bg-red-500/20 border-red-400/40 text-red-300":W?"bg-violet-50 border-violet-200 text-violet-700":"bg-violet-600/30 border-violet-400/40 text-violet-200"}`,children:V==="youtube"?p.jsx(to,{className:`w-5 h-5 ${_?"animate-pulse text-red-500":"text-zinc-400"}`}):p.jsx(n0,{className:`w-5 h-5 ${o?"text-violet-500 animate-pulse":"text-zinc-400"}`})}),p.jsxs("div",{className:"min-w-0 flex-1",children:[p.jsx("p",{className:`text-xs font-display font-medium truncate ${W?"text-zinc-900":"text-white"}`,children:ut}),p.jsxs("div",{className:"flex items-center gap-2 mt-0.5",children:[p.jsx(Yg,{isPlaying:je,color:V==="youtube"?"#ef4444":W?"#7c3aed":De.accentColor,className:"w-16 h-4"}),p.jsx("span",{className:`text-[10px] font-mono ${W?"text-zinc-500":"text-zinc-400"}`,children:je?V==="youtube"?"Streaming YouTube...":"Synthesizing...":"Audio Paused"})]})]})]}),p.jsxs("div",{className:"flex items-center gap-4 w-full sm:w-auto justify-end",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("button",{type:"button",onClick:V==="youtube"?ee:v,className:`transition-colors cursor-pointer ${W?"text-zinc-600 hover:text-black":"text-zinc-400 hover:text-white"}`,title:"Toggle Mute",children:(V==="youtube"?C:m)?p.jsx(Wg,{className:"w-4 h-4 text-red-500"}):p.jsx(df,{className:"w-4 h-4"})}),p.jsx("input",{type:"range",min:"0",max:V==="youtube"?100:1,step:V==="youtube"?1:.01,value:V==="youtube"?C?0:b:m?0:d,onChange:Te=>{const ke=parseFloat(Te.target.value);if(V==="youtube"){N(ke),C&&ee();try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}}else x(ke)},className:"w-20 sm:w-24 h-1.5 bg-zinc-300 rounded-lg appearance-none cursor-pointer accent-red-600","aria-label":"Volume slider"}),p.jsx("span",{className:`text-[10px] font-mono w-8 tabular-nums ${W?"text-zinc-600":"text-zinc-400"}`,children:V==="youtube"?`${C?0:Math.round(b)}%`:`${m?0:Math.round(d*100)}%`})]}),p.jsx("button",{type:"button",onClick:()=>{V==="youtube"?P():o?h():u(l)},className:`px-5 py-2.5 rounded-xl text-white text-xs font-display font-semibold tracking-wider uppercase flex items-center gap-2 shadow-md transition-all cursor-pointer ${V==="youtube"?"bg-red-600 hover:bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.35)]":"bg-violet-600 hover:bg-violet-500 shadow-[0_0_20px_rgba(147,51,234,0.35)]"}`,children:je?p.jsxs(p.Fragment,{children:[p.jsx(Or,{className:"w-3.5 h-3.5 fill-current"}),p.jsx("span",{children:"Pause"})]}):p.jsxs(p.Fragment,{children:[p.jsx(Br,{className:"w-3.5 h-3.5 fill-current"}),p.jsx("span",{children:"Play"})]})})]})]})]})]})},Xb=({isOpen:s,onClose:e})=>{const{profile:t,updateProfile:r,appTheme:o,setStudySubject:l,lastActiveDate:d,resetDayProgress:m,factoryReset:u}=Vr(),h=o==="light",[x,v]=we.useState(t.name||"Azan"),[_,M]=we.useState(t.motto||"Remember, you are here for you."),[b,C]=we.useState(t.defaultFocusTopic||"Engineering"),[y,S]=we.useState(t.defaultFocusMode||"Deep Work"),[R,F]=we.useState(!1),[P,z]=we.useState(null);if(we.useEffect(()=>{v(t.name||"Azan"),M(t.motto||"Remember, you are here for you."),C(t.defaultFocusTopic||"Engineering"),S(t.defaultFocusMode||"Deep Work")},[t,s]),we.useEffect(()=>{const G=W=>{W.key==="Escape"&&s&&e()};return window.addEventListener("keydown",G),()=>window.removeEventListener("keydown",G)},[s,e]),!s)return null;const D=G=>{G.preventDefault();const W=x.trim()||"Azan",V=_.trim()||"Remember, you are here for you.",H=b.trim()||"Engineering",O=y.trim()||"Deep Work";r({name:W,motto:V,defaultFocusTopic:H,defaultFocusMode:O}),l(H),F(!0),setTimeout(()=>{F(!1),e()},500)},w=()=>{v("Azan"),M("Remember, you are here for you."),C("Engineering"),S("Deep Work"),r({name:"Azan",motto:"Remember, you are here for you.",defaultFocusTopic:"Engineering",defaultFocusMode:"Deep Work"}),l("Engineering")},N=()=>{window.confirm("Start a fresh day? This will uncheck today's tasks & habits, reset hydration to 0%, and reset focus timer.")&&(m(),z("Today's progress has been reset!"),setTimeout(()=>z(null),3e3))},ee=()=>{window.confirm("WARNING: Are you sure you want to perform a factory reset? All saved tasks, habits, focus history, and settings will be permanently wiped and restored to default.")&&(u(),z("All app data restored to factory defaults."),setTimeout(()=>{z(null),e()},1500))},X=()=>{const G=new Date().getHours();return G>=5&&G<12?"Good morning":G>=12&&G<17?"Good afternoon":G>=17&&G<22?"Good evening":"Late night focus"};return p.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-fadeIn select-none ${h?"bg-black/35":"bg-black/80"}`,children:[p.jsx("div",{className:"fixed inset-0",onClick:e,"aria-hidden":"true"}),p.jsxs("div",{role:"dialog","aria-modal":"true","aria-labelledby":"profile-modal-title",className:`relative w-full max-w-lg overflow-hidden rounded-3xl border shadow-2xl flex flex-col z-10 ${h?"bg-white/95 border-zinc-200 text-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)]":"cosmic-card border-white/[0.14] text-white shadow-2xl"}`,children:[p.jsxs("div",{className:`flex items-center justify-between p-5 pb-3 border-b shrink-0 ${h?"border-zinc-200":"border-white/[0.08]"}`,children:[p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("div",{className:`w-8 h-8 rounded-xl border flex items-center justify-center ${h?"bg-amber-50 border-amber-200 text-amber-700":"bg-amber-500/20 border-amber-400/30 text-amber-300"}`,children:p.jsx(Hg,{className:"w-4 h-4"})}),p.jsxs("div",{children:[p.jsx("h2",{id:"profile-modal-title",className:`text-sm font-display uppercase tracking-widest font-bold ${h?"text-zinc-900":"text-white"}`,children:"Personal Sanctuary Profile"}),p.jsx("p",{className:`text-[11px] font-sans ${h?"text-zinc-500":"text-zinc-400"}`,children:"Tailor your name, daily motto & focus targets"})]})]}),p.jsxs("div",{className:"flex items-center gap-1.5",children:[p.jsx("button",{type:"button",onClick:w,"aria-label":"Reset profile to defaults",title:"Reset to defaults",className:`p-2 rounded-xl transition-colors cursor-pointer ${h?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white"}`,children:p.jsx(zr,{className:"w-3.5 h-3.5"})}),p.jsx("button",{type:"button",onClick:e,"aria-label":"Close Profile Modal",className:`p-2 rounded-xl transition-colors cursor-pointer ${h?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white"}`,children:p.jsx(ar,{className:"w-4 h-4"})})]})]}),p.jsxs("form",{onSubmit:D,className:"p-6 space-y-4",children:[p.jsxs("div",{className:`p-4 rounded-2xl border text-center space-y-1 transition-all ${h?"bg-zinc-50 border-zinc-200 text-zinc-800":"bg-white/[0.03] border-white/[0.08] text-zinc-200"}`,children:[p.jsx("span",{className:`text-[10px] font-mono uppercase tracking-widest ${h?"text-zinc-500":"text-zinc-400"}`,children:"Live Greeting Preview"}),p.jsxs("p",{className:"text-xs sm:text-sm font-sans leading-relaxed",children:[X(),","," ",p.jsx("strong",{className:h?"text-zinc-950":"text-white",children:x.trim()||"Azan"}),". •"," ",p.jsxs("span",{className:`italic ${h?"text-zinc-700 font-medium":"text-zinc-300"}`,children:["“",_.trim()||"Remember, you are here for you.","”"]})]})]}),p.jsxs("div",{className:"space-y-1.5",children:[p.jsxs("label",{className:`text-xs font-semibold flex items-center justify-between ${h?"text-zinc-800":"text-zinc-200"}`,children:[p.jsxs("span",{className:"flex items-center gap-1.5",children:[p.jsx(Ab,{className:"w-3.5 h-3.5 text-amber-500"}),p.jsx("span",{children:"Your Name"})]}),p.jsx("span",{className:`text-[10px] font-normal ${h?"text-zinc-500":"text-zinc-400"}`,children:"Used in greetings & daily focus"})]}),p.jsx("input",{type:"text",value:x,onChange:G=>v(G.target.value),placeholder:"e.g. Azan",className:"w-full cosmic-input rounded-xl px-3.5 py-2.5 text-xs font-medium"})]}),p.jsxs("div",{className:"space-y-1.5",children:[p.jsxs("label",{className:`text-xs font-semibold flex items-center justify-between ${h?"text-zinc-800":"text-zinc-200"}`,children:[p.jsxs("span",{className:"flex items-center gap-1.5",children:[p.jsx(Nb,{className:"w-3.5 h-3.5 text-violet-400"}),p.jsx("span",{children:"Daily Mantra / Motto"})]}),p.jsx("span",{className:`text-[10px] font-normal ${h?"text-zinc-500":"text-zinc-400"}`,children:"Displayed on your wallpaper"})]}),p.jsx("input",{type:"text",value:_,onChange:G=>M(G.target.value),placeholder:"e.g. Remember, you are here for you.",className:"w-full cosmic-input rounded-xl px-3.5 py-2.5 text-xs font-medium"})]}),p.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-1",children:[p.jsxs("div",{className:"space-y-1.5",children:[p.jsxs("label",{className:`text-xs font-semibold flex items-center gap-1.5 ${h?"text-zinc-800":"text-zinc-200"}`,children:[p.jsx(Ib,{className:"w-3.5 h-3.5 text-emerald-400"}),p.jsx("span",{children:"Primary Focus Topic"})]}),p.jsx("input",{type:"text",value:b,onChange:G=>C(G.target.value),placeholder:"e.g. Engineering",className:"w-full cosmic-input rounded-xl px-3.5 py-2 text-xs"})]}),p.jsxs("div",{className:"space-y-1.5",children:[p.jsxs("label",{className:`text-xs font-semibold flex items-center gap-1.5 ${h?"text-zinc-800":"text-zinc-200"}`,children:[p.jsx(fg,{className:"w-3.5 h-3.5 text-amber-500"}),p.jsx("span",{children:"Default Focus Mode"})]}),p.jsx("input",{type:"text",value:y,onChange:G=>S(G.target.value),placeholder:"e.g. Deep Work",className:"w-full cosmic-input rounded-xl px-3.5 py-2 text-xs"})]})]}),p.jsxs("div",{className:"pt-2",children:[p.jsx("span",{className:`text-[10px] font-mono uppercase tracking-wider block mb-1.5 ${h?"text-zinc-500":"text-zinc-400"}`,children:"Quick Mantras"}),p.jsx("div",{className:"flex flex-wrap gap-1.5",children:["Remember, you are here for you.","Discipline equals true freedom.","Deep focus over scattered noise.","Build with relentless craft."].map(G=>p.jsxs("button",{type:"button",onClick:()=>M(G),className:`text-[11px] px-2.5 py-1 rounded-lg border transition-all text-left cursor-pointer ${_===G?h?"bg-violet-100 border-violet-300 text-violet-900 font-medium":"bg-violet-600/30 border-violet-400/50 text-violet-200 font-medium":h?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300"}`,children:["“",G,"”"]},G))})]}),p.jsxs("div",{className:`p-3.5 rounded-2xl border space-y-2.5 ${h?"bg-zinc-50 border-zinc-200":"bg-white/[0.02] border-white/[0.08]"}`,children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{className:"flex items-center gap-1.5",children:[p.jsx(wb,{className:`w-3.5 h-3.5 ${h?"text-violet-700":"text-violet-400"}`}),p.jsx("span",{className:`text-xs font-semibold ${h?"text-zinc-800":"text-zinc-200"}`,children:"Daily Rollover & Data Control"})]}),p.jsxs("span",{className:`text-[10px] font-mono ${h?"text-zinc-500":"text-zinc-400"}`,children:["Date: ",d]})]}),P&&p.jsxs("div",{className:"p-2 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs flex items-center gap-2",children:[p.jsx(nc,{className:"w-3.5 h-3.5 shrink-0"}),p.jsx("span",{children:P})]}),p.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1",children:[p.jsxs("button",{type:"button",onClick:N,className:`px-3 py-2 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${h?"bg-white hover:bg-zinc-100 text-zinc-800 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200 border-white/[0.10]"}`,title:"Uncheck today's tasks & habits, reset hydration",children:[p.jsx(zr,{className:"w-3.5 h-3.5 text-violet-400"}),p.jsx("span",{children:"Start Fresh Day"})]}),p.jsxs("button",{type:"button",onClick:ee,className:`px-3 py-2 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${h?"bg-rose-50 hover:bg-rose-100 text-rose-700 border-rose-200":"bg-rose-950/20 hover:bg-rose-900/40 text-rose-300 border-rose-500/20 hover:border-rose-500/40"}`,title:"Wipe data and restore factory defaults",children:[p.jsx(rc,{className:"w-3.5 h-3.5 text-rose-400"}),p.jsx("span",{children:"Factory Reset"})]})]})]}),p.jsxs("div",{className:"pt-4 flex items-center justify-end gap-2.5",children:[p.jsx("button",{type:"button",onClick:e,className:`px-4 py-2.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${h?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300"}`,children:"Cancel"}),p.jsx("button",{type:"submit",className:`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all cursor-pointer ${R?"bg-emerald-500 text-white":h?"bg-zinc-900 hover:bg-zinc-800 text-white":"bg-violet-600 hover:bg-violet-500 text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]"}`,children:R?p.jsxs(p.Fragment,{children:[p.jsx(nc,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:"Saved!"})]}):p.jsxs(p.Fragment,{children:[p.jsx(ds,{className:"w-3.5 h-3.5"}),p.jsx("span",{children:"Save Profile"})]})})]})]})]})]})},Yb=()=>{const{profile:s,tasks:e,toggleTask:t,addTask:r,deleteTask:o,habits:l,toggleHabit:d,addHabit:m,routines:u,addRoutineBlock:h,deleteRoutineBlock:x,resetRoutines:v,studySeconds:_,isStudyActive:M,studySubject:b,setStudySubject:C,toggleStudyTimer:y,resetStudyTimer:S,studySessions:R,hydration:F,setHydration:P,sleepHours:z,setSleep:D,dailyRating:w,setDailyRating:N,lastActiveDate:ee,resetDayProgress:X,isHUDHidden:G,setIsHUDHidden:W,wallpaperSettings:V,audioSource:H,isAudioPlaying:O,activeSoundscapeId:re,playSoundscape:K,stopSoundscape:j,isYouTubePlaying:$,activeYouTubeItem:Y,toggleYouTubePlay:L,appTheme:ne,toggleAppTheme:be}=Vr(),U=ne==="light",[_e,Me]=we.useState(!1),[De,Se]=we.useState(!1),[Fe,ut]=we.useState(!1),[je,Te]=we.useState(!1),[ke,Xe]=we.useState("none"),[St,Mt]=we.useState("12:00:00"),[Dt,It]=we.useState("PM"),[nn,Nt]=we.useState(""),[Wt,kt]=we.useState(""),[rn,J]=we.useState(s.defaultFocusTopic||"Engineering"),[Yt,Pt]=we.useState(s.defaultFocusMode||"Deep Work"),[bt,Ie]=we.useState(!1),[Et,qe]=we.useState(""),[rt,I]=we.useState(""),[E,ae]=we.useState(""),Ce=()=>{const Q=new Date().getHours();return Q>=5&&Q<12?"Good morning":Q>=12&&Q<17?"Good afternoon":Q>=17&&Q<22?"Good evening":"Late night focus"};we.useEffect(()=>{const Q=()=>{const $e=new Date,Oe=$e.getHours(),xt=$e.getMinutes(),Rt=$e.getSeconds(),ce=Oe>=12?"PM":"AM",Be=V.clockFormat==="24h",Ae=Be?Oe.toString().padStart(2,"0"):(Oe%12||12).toString().padStart(2,"0"),mt=xt.toString().padStart(2,"0"),qt=Rt.toString().padStart(2,"0");V.showSeconds?Mt(`${Ae}:${mt}:${qt}`):Mt(`${Ae}:${mt}`),It(Be?"":ce);const mn=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Mn=["January","February","March","April","May","June","July","August","September","October","November","December"];Nt(`${mn[$e.getDay()]}, ${Mn[$e.getMonth()]} ${$e.getDate()}, ${$e.getFullYear()}`)};Q();const Ve=setInterval(Q,1e3);return()=>clearInterval(Ve)},[V.clockFormat,V.showSeconds]);const ve=V.clockFontStyle==="serif"?"font-serif tracking-normal":V.clockFontStyle==="mono"?"font-mono tracking-tight":V.clockFontStyle==="minimal"?"font-sans font-extralight tracking-[0.08em]":"font-display tracking-[0.05em]",Ue=V.clockSize==="compact"?"text-5xl sm:text-6xl md:text-8xl lg:text-[100px]":V.clockSize==="heroic"?"text-6xl sm:text-8xl md:text-9xl lg:text-[144px]":"text-5xl sm:text-7xl md:text-9xl lg:text-[124px]",xe=V.clockHalo==="none"?"opacity-0":V.clockHalo==="subtle"?"bg-violet-600/8 blur-[90px]":"bg-violet-600/18 blur-[120px] animate-pulse";we.useEffect(()=>{const Q=Ve=>{Ve.key==="Escape"&&(ke!=="none"?Xe("none"):G?W(!1):je&&Te(!1))};return window.addEventListener("keydown",Q),()=>window.removeEventListener("keydown",Q)},[ke,G,je,W]);const ie=Q=>{Q.preventDefault(),Wt.trim()&&(r(Wt.trim()),kt(""))},se=e.filter(Q=>Q.completed).length,ye=e.length>0?Math.round(se/e.length*100):0,k=l.filter(Q=>Q.completed).length,me=l.length>0?Math.round(k/l.length*100):0,de=new Date;de.setDate(de.getDate()-7);const Ee=+((R||[]).filter(Q=>new Date(Q.timestamp)>=de).reduce((Q,Ve)=>Q+Ve.durationSeconds,0)/3600).toFixed(1),Pe=Math.min(100,Math.round(Ee/15*100)),Ze=Q=>{const Ve=Math.floor(Q/60),$e=Q%60;return`${Ve.toString().padStart(2,"0")}:${$e.toString().padStart(2,"0")}`},ct=Qs.find(Q=>Q.id===re)||Qs[0];return p.jsxs("div",{className:"relative w-screen h-screen max-h-screen overflow-hidden flex flex-col justify-between pt-safe-top pt-6 sm:pt-6 px-4 sm:px-8 pb-safe-bottom pb-6 select-none z-10 animate-fadeIn",children:[p.jsx("h1",{className:"sr-only",children:"FOR ME — Living Wallpaper & Focus Sanctuary"}),p.jsxs("header",{className:`flex items-center justify-between w-full min-h-12 shrink-0 z-20 gap-3 transition-opacity duration-300 ${G?"opacity-0 pointer-events-none":"opacity-100"}`,children:[p.jsxs("button",{type:"button",onClick:()=>W(!0),className:"flex items-center gap-2.5 sm:gap-3 cursor-pointer group shrink-0 text-left",title:"Enter Zen Wallpaper Mode",children:[p.jsx("div",{className:`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-mono font-medium tracking-tight shadow-sm transition-all ${U?"border-zinc-300 bg-white/80 text-zinc-900 group-hover:bg-white group-hover:border-zinc-400":"border-white/20 bg-white/[0.04] text-white group-hover:bg-white/[0.1] group-hover:border-white/40"}`,children:"FM"}),p.jsx("span",{className:`font-sans font-bold text-xs tracking-[0.2em] uppercase group-hover:opacity-85 transition-opacity ${U?"text-zinc-900":"text-white"}`,children:"FOR ME"})]}),p.jsxs("div",{className:`hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-2xl border text-xs font-sans shadow-sm shrink-0 ${U?"bg-white/85 border-zinc-200/90 text-zinc-800":"bg-white/[0.035] border-white/[0.08] text-zinc-300"}`,children:[p.jsx(ds,{className:`w-3.5 h-3.5 ${U?"text-amber-500":"text-violet-300"}`}),p.jsx("span",{children:nn})]}),p.jsxs("div",{className:`flex items-center gap-1 sm:gap-1.5 p-1 rounded-2xl backdrop-blur-2xl border text-xs shrink-0 ${U?"bg-white/88 border-zinc-200/90 text-zinc-700 shadow-sm":"bg-white/[0.04] border-white/[0.08] text-zinc-300"}`,children:[p.jsxs("button",{type:"button",onClick:be,className:`p-2 sm:px-2.5 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors font-medium text-[11px] sm:text-xs cursor-pointer ${U?"hover:bg-black/[0.05] text-zinc-800 hover:text-black":"hover:bg-white/[0.06] text-zinc-300 hover:text-white"}`,title:`Switch to ${U?"Obsidian Dark":"Creamy Light"} Theme`,children:[U?p.jsx(eo,{className:"w-3.5 h-3.5 text-zinc-700"}):p.jsx(Lb,{className:"w-3.5 h-3.5 text-amber-300"}),p.jsx("span",{className:"hidden sm:inline",children:U?"Dark":"Light"})]}),p.jsxs("button",{type:"button",onClick:()=>Te(!0),className:`px-2.5 sm:px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors font-medium text-[11px] sm:text-xs cursor-pointer ${U?"hover:bg-black/[0.05] text-zinc-700 hover:text-zinc-950":"hover:bg-white/[0.06] hover:text-white text-zinc-300"}`,title:"Daily Routine Protocols",children:[p.jsx(Jm,{className:`w-3.5 h-3.5 ${U?"text-zinc-500":"text-zinc-400"}`}),p.jsx("span",{className:"hidden sm:inline",children:"Routine"})]}),p.jsxs("button",{type:"button",onClick:()=>Me(!0),className:`px-2.5 sm:px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors font-medium text-[11px] sm:text-xs cursor-pointer ${U?"hover:bg-black/[0.05] text-violet-700 hover:text-violet-950 font-semibold":"hover:bg-white/[0.06] hover:text-white text-violet-300"}`,title:"Wallpaper Studio: Celestial Objects, Waves & Typography",children:[p.jsx(Ng,{className:`w-3.5 h-3.5 ${U?"text-violet-600":"text-violet-400"}`}),p.jsx("span",{className:"hidden sm:inline",children:"Studio"})]}),p.jsxs("button",{type:"button",onClick:()=>ut(!0),className:`px-2.5 sm:px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors font-medium text-[11px] sm:text-xs cursor-pointer ${U?"hover:bg-black/[0.05] text-amber-700 hover:text-amber-950 font-semibold":"hover:bg-white/[0.06] hover:text-white text-amber-300"}`,title:"Personal Sanctuary Profile & Mantra",children:[p.jsx(Hg,{className:"w-3.5 h-3.5 text-amber-400"}),p.jsx("span",{className:"hidden sm:inline",children:"Profile"})]}),p.jsxs("button",{type:"button",onClick:()=>Se(!0),className:`px-2.5 sm:px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors font-medium text-[11px] sm:text-xs cursor-pointer ${O||$?H==="youtube"?U?"bg-red-50 text-red-700 border border-red-200 font-bold shadow-sm":"bg-red-600/35 text-red-200 border border-red-400/40 shadow-[0_0_15px_rgba(239,68,68,0.3)]":U?"bg-violet-50 text-violet-700 border border-violet-200 font-bold shadow-sm":"bg-violet-600/35 text-violet-200 border border-violet-400/40 shadow-[0_0_15px_rgba(168,85,247,0.3)]":U?"hover:bg-black/[0.05] text-zinc-700 hover:text-zinc-950":"hover:bg-white/[0.06] hover:text-white text-zinc-300"}`,title:"Focus Audio Sanctuary (YouTube Streams & Ambient Soundscapes)",children:[H==="youtube"&&$?p.jsx(to,{className:"w-3.5 h-3.5 text-red-500 animate-pulse"}):p.jsx(ic,{className:`w-3.5 h-3.5 ${O?U?"text-violet-600 animate-pulse":"text-violet-300 animate-pulse":U?"text-zinc-500":"text-zinc-400"}`}),p.jsx("span",{className:"hidden sm:inline",children:"Audio"})]}),p.jsxs("button",{type:"button",onClick:()=>W(!G),className:`p-1.5 sm:px-3 py-1.5 rounded-xl transition-all font-medium text-xs flex items-center gap-1.5 cursor-pointer ${U?"hover:bg-black/[0.05] text-zinc-700 hover:text-zinc-950":"hover:bg-white/[0.06] hover:text-white text-zinc-300"}`,title:"Hide all controls & enter pure wallpaper mode",children:[p.jsx(Tb,{className:`w-3.5 h-3.5 ${U?"text-zinc-500":"text-zinc-400"}`}),p.jsx("span",{className:"hidden sm:inline",children:"Zen"})]})]})]}),p.jsxs("main",{className:"my-auto text-center flex flex-col items-center justify-center relative z-20 py-4 select-none",children:[p.jsx("div",{className:`absolute w-[360px] h-[360px] sm:w-[520px] sm:h-[520px] lg:w-[680px] lg:h-[680px] rounded-full ${xe} pointer-events-none -z-10`}),p.jsxs("div",{className:`inline-flex items-baseline justify-center max-w-[94vw] px-2 gap-2 sm:gap-4 md:gap-6 ${ve} select-none leading-none flex-nowrap ${U?"text-zinc-900 drop-shadow-[0_4px_24px_rgba(200,180,160,0.30)]":"text-white drop-shadow-[0_12px_60px_rgba(0,0,0,0.95)]"}`,children:[p.jsx("span",{className:`${Ue} font-light tabular-nums whitespace-nowrap`,children:St}),Dt&&p.jsx("span",{className:`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal ${U?"text-zinc-600":"text-zinc-300"}`,children:Dt})]}),V.showGreeting!==!1&&p.jsx("div",{className:"mt-5 sm:mt-7 flex justify-center w-full px-2",children:p.jsxs("button",{type:"button",onClick:()=>ut(!0),className:`text-xs sm:text-sm font-sans tracking-wide px-4 sm:px-6 py-2 rounded-2xl sm:rounded-full backdrop-blur-2xl max-w-xl text-center leading-relaxed shadow-lg cursor-pointer transition-all hover:scale-[1.01] ${U?"bg-white/92 text-zinc-900 border border-zinc-300/80 shadow-md hover:bg-white":"bg-[#0a0618]/85 text-zinc-200 border border-white/[0.14] shadow-lg hover:border-violet-400/40"}`,title:"Click to personalize name & daily mantra",children:[Ce(),", ",p.jsx("span",{className:`font-semibold ${U?"text-zinc-950":"text-white"}`,children:s.name}),". •"," ",p.jsxs("span",{className:`italic ${U?"text-zinc-700 font-medium":"text-zinc-300"}`,children:["“",s.motto||"Remember, you are here for you.","”"]})]})}),G&&p.jsxs("button",{type:"button",onClick:()=>W(!1),className:`mt-8 flex items-center gap-2 px-5 py-2.5 rounded-full text-xs transition-all border shadow-xl cursor-pointer ${U?"bg-white/90 text-zinc-800 border-zinc-300/80 hover:bg-white":"cosmic-dock text-zinc-300 hover:text-white border-white/[0.12] hover:border-violet-400/40"}`,children:[p.jsx(vg,{className:"w-3.5 h-3.5 text-amber-400"}),p.jsx("span",{className:"font-display tracking-wider",children:"Tap anywhere to restore controls"})]})]}),ke!=="none"&&!G&&p.jsxs("div",{className:"fixed inset-x-0 bottom-24 z-30 flex justify-center px-4 animate-fadeIn pointer-events-auto",children:[p.jsx("div",{className:"fixed inset-0 -z-10",onClick:()=>Xe("none")}),ke==="tasks"&&p.jsxs("div",{className:`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${U?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[p.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${U?"border-zinc-200":"border-white/[0.08]"}`,children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx(i0,{className:`w-4 h-4 ${U?"text-violet-700":"text-violet-300"}`}),p.jsx("h2",{className:"text-xs font-display uppercase tracking-[0.18em] font-semibold",children:"Tasks for the Day"})]}),p.jsxs("div",{className:"flex items-center gap-1.5",children:[p.jsxs("span",{className:`text-[11px] font-display font-medium px-2.5 py-0.5 rounded-full border tabular-nums ${U?"bg-zinc-100 text-zinc-800 border-zinc-200":"bg-white/[0.06] text-violet-200 border-white/[0.10]"}`,children:[se,"/",e.length," done"]}),p.jsx("button",{type:"button",onClick:()=>{window.confirm("Reset and uncheck all tasks for today?")&&e.forEach(Q=>{Q.completed&&t(Q.id)})},className:`p-1 rounded-md border transition-colors cursor-pointer ${U?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-600":"bg-white/10 hover:bg-white/20 border-white/10 text-zinc-300 hover:text-white"}`,title:"Reset today's tasks","aria-label":"Reset tasks for today",children:p.jsx(zr,{className:"w-3.5 h-3.5"})}),p.jsx("button",{type:"button",onClick:()=>Xe("none"),className:"p-1 text-zinc-400 hover:text-white cursor-pointer","aria-label":"Close Tasks Panel",children:p.jsx(ar,{className:"w-3.5 h-3.5"})})]})]}),p.jsxs("form",{onSubmit:ie,className:"flex items-center gap-2 shrink-0",children:[p.jsx("input",{type:"text",placeholder:"Add task for today...",value:Wt,onChange:Q=>kt(Q.target.value),className:"flex-1 cosmic-input rounded-xl px-3.5 py-2 text-xs placeholder-zinc-500",autoFocus:!0}),p.jsx("button",{type:"submit",disabled:!Wt.trim(),className:"w-8 h-8 rounded-xl bg-violet-600 hover:bg-violet-500 text-white disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all shrink-0 cursor-pointer shadow-sm",children:p.jsx(Yl,{className:"w-4 h-4"})})]}),p.jsx("div",{className:"max-h-56 overflow-y-auto space-y-1.5 pr-1",children:e.map(Q=>p.jsxs("div",{className:`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs select-none group ${Q.completed?U?"bg-zinc-100/60 border-zinc-200/60 text-zinc-400":"bg-white/[0.015] border-white/[0.04] text-zinc-500":U?"bg-white/80 hover:bg-white border-zinc-200/80 text-zinc-800":"bg-white/[0.035] hover:bg-white/[0.07] border-white/[0.08] hover:border-violet-400/20 text-zinc-200"}`,children:[p.jsxs("div",{className:"flex items-center gap-2.5 truncate flex-1 cursor-pointer pr-2",onClick:()=>t(Q.id),children:[p.jsx("div",{className:`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border transition-all ${Q.completed?"bg-emerald-500 border-emerald-400 text-white shadow-sm":U?"border-zinc-300 group-hover:border-violet-500":"border-white/[0.25] group-hover:border-violet-400"}`,children:Q.completed&&p.jsx(nc,{className:"w-2.5 h-2.5 stroke-[3]"})}),p.jsx("span",{className:`font-sans truncate ${Q.completed?"line-through text-zinc-400":U?"text-zinc-800 font-medium":"text-zinc-200"}`,children:Q.text})]}),p.jsx("button",{type:"button",onClick:()=>o(Q.id),className:"opacity-0 group-hover:opacity-100 text-zinc-400 hover:text-red-400 transition-opacity p-1 cursor-pointer",children:p.jsx(rc,{className:"w-3.5 h-3.5"})})]},Q.id))}),p.jsxs("div",{className:`pt-2.5 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${U?"border-zinc-200 text-zinc-600":"border-white/[0.08] text-zinc-400"}`,children:[p.jsxs("span",{className:"flex items-center gap-1.5",children:[p.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400"}),"Day Progress"]}),p.jsxs("span",{className:`font-display font-medium tabular-nums ${U?"text-zinc-900":"text-zinc-200"}`,children:[ye,"% done"]})]})]}),ke==="habits"&&p.jsxs("div",{className:`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${U?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[p.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${U?"border-zinc-200":"border-white/[0.08]"}`,children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx(Qm,{className:`w-4 h-4 ${U?"text-violet-700":"text-violet-300"}`}),p.jsx("h2",{className:"text-xs font-display uppercase tracking-[0.18em] font-semibold",children:"Daily Rhythm Pulse"})]}),p.jsxs("div",{className:"flex items-center gap-1.5",children:[p.jsxs("span",{className:`text-[11px] font-display font-medium px-2.5 py-0.5 rounded-full border tabular-nums ${U?"bg-zinc-100 text-zinc-800 border-zinc-200":"bg-white/[0.06] text-violet-200 border-white/[0.10]"}`,children:[k,"/",l.length," kept"]}),p.jsx("button",{type:"button",onClick:()=>{window.confirm("Reset today's habit checkmarks?")&&l.forEach(Q=>{Q.completed&&d(Q.id)})},className:`p-1 rounded-md border transition-colors cursor-pointer ${U?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-600":"bg-white/10 hover:bg-white/20 border-white/10 text-zinc-300 hover:text-white"}`,title:"Reset today's habits","aria-label":"Reset habits for today",children:p.jsx(zr,{className:"w-3.5 h-3.5"})}),p.jsx("button",{type:"button",onClick:()=>{const Q=prompt("Add new daily habit:");Q&&m(Q)},className:`p-1 rounded-md border transition-colors cursor-pointer ${U?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/10 hover:bg-white/20 border-white/10 text-white"}`,title:"Add habit","aria-label":"Add new daily habit",children:p.jsx(Yl,{className:"w-3.5 h-3.5"})}),p.jsx("button",{type:"button",onClick:()=>Xe("none"),className:"p-1 text-zinc-400 hover:text-white cursor-pointer","aria-label":"Close Habits Panel",children:p.jsx(ar,{className:"w-3.5 h-3.5"})})]})]}),p.jsx("div",{className:"max-h-56 overflow-y-auto space-y-1.5 pr-1",children:l.map(Q=>p.jsxs("div",{onClick:()=>d(Q.id),className:`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs cursor-pointer select-none group ${Q.completed?U?"bg-zinc-100/60 border-zinc-200/60 text-zinc-400":"bg-white/[0.015] border-white/[0.04] text-zinc-400":U?"bg-white/80 hover:bg-white border-zinc-200/80 text-zinc-800":"bg-white/[0.035] hover:bg-white/[0.07] border-white/[0.08] hover:border-violet-400/20 text-zinc-200"}`,children:[p.jsxs("div",{className:"flex flex-col gap-0.5 truncate pr-2",children:[p.jsx("span",{className:`font-sans truncate ${Q.completed?"line-through text-zinc-400":U?"text-zinc-800 font-medium":"text-zinc-200"}`,children:Q.name}),p.jsx("div",{className:"flex items-center gap-1.5 text-[10px] font-mono",children:Q.streak>0?p.jsxs("span",{className:"text-amber-500 flex items-center gap-0.5 font-medium",children:[p.jsx(fg,{className:"w-3 h-3 fill-amber-500"})," ",Q.streak," day streak"]}):p.jsx("span",{className:U?"text-zinc-500":"text-zinc-400",children:"Ready today"})})]}),p.jsx("div",{className:`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border transition-all ${Q.completed?"bg-emerald-500 border-emerald-400 text-white shadow-sm":U?"border-zinc-300 group-hover:border-violet-500":"border-white/[0.25] group-hover:border-violet-400"}`,children:Q.completed&&p.jsx(nc,{className:"w-2.5 h-2.5 stroke-[3]"})})]},Q.id))}),p.jsxs("div",{className:`pt-2.5 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${U?"border-zinc-200 text-zinc-600":"border-white/[0.08] text-zinc-400"}`,children:[p.jsxs("div",{className:`flex items-center gap-1.5 ${U?"text-zinc-700":"text-zinc-400"}`,children:[p.jsx(ds,{className:`w-3.5 h-3.5 ${U?"text-amber-500":"text-violet-300"}`}),p.jsx("span",{children:"Daily Consistency"})]}),p.jsxs("span",{className:`font-display font-medium tabular-nums ${U?"text-zinc-900":"text-zinc-200"}`,children:[me,"% kept"]})]})]}),ke==="timer"&&p.jsxs("div",{className:`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${U?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[p.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${U?"border-zinc-200":"border-white/[0.08]"}`,children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx(Af,{className:`w-4 h-4 ${U?"text-violet-700":"text-violet-300"}`}),p.jsx("h2",{className:"text-xs font-display uppercase tracking-[0.18em] font-semibold",children:"Deep Study Console"})]}),p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("span",{className:`text-[10px] font-display px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${M?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 animate-pulse":U?"bg-zinc-100 text-zinc-600 border border-zinc-200":"bg-white/[0.06] text-zinc-400 border border-white/[0.08]"}`,children:M?"RUNNING":"STOPPED"}),p.jsx("button",{type:"button",onClick:()=>Xe("none"),className:"p-1 text-zinc-400 hover:text-white",children:p.jsx(ar,{className:"w-3.5 h-3.5"})})]})]}),p.jsxs("div",{className:"text-center py-2",children:[p.jsx("div",{className:`text-5xl font-display font-light tracking-widest leading-none tabular-nums ${U?"text-zinc-900":"text-white"}`,children:Ze(_)}),p.jsxs("p",{className:`text-[10px] font-display tracking-[0.2em] uppercase mt-2 ${U?"text-zinc-500":"text-zinc-400"}`,children:[b," • ",Yt]})]}),p.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[p.jsx("input",{type:"text",value:Yt,onChange:Q=>Pt(Q.target.value),placeholder:"Mode (e.g. Deep Work)",className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"}),p.jsx("input",{type:"text",value:rn,onChange:Q=>{J(Q.target.value),C(Q.target.value)},placeholder:"Subject (e.g. Engineering)",className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"})]}),p.jsxs("div",{className:"flex gap-2",children:[p.jsxs("button",{type:"button",onClick:y,className:`flex-1 py-2.5 rounded-xl font-display text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 border transition-all cursor-pointer ${U?"bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-800":"bg-violet-600 hover:bg-violet-500 text-white border-violet-400/30"}`,children:[M?p.jsx(Or,{className:"w-4 h-4"}):p.jsx(Br,{className:"w-4 h-4 ml-0.5 fill-current"}),p.jsx("span",{children:M?"Pause Focus":"Start Focus"})]}),p.jsx("button",{type:"button",onClick:S,className:`px-3 py-2.5 rounded-xl border transition-colors cursor-pointer ${U?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white border-white/[0.08]"}`,title:"Reset stopwatch",children:p.jsx(zr,{className:"w-3.5 h-3.5"})})]}),p.jsxs("div",{className:`pt-2.5 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${U?"border-zinc-200 text-zinc-600":"border-white/[0.08] text-zinc-400"}`,children:[p.jsxs("span",{children:["Weekly: ",p.jsxs("strong",{className:`font-display ${U?"text-zinc-900":"text-zinc-200"}`,children:[Ee,"h"]})," / 15h"]}),p.jsxs("span",{className:`font-display font-medium tabular-nums ${U?"text-zinc-900":"text-zinc-200"}`,children:[Pe,"% quota"]})]})]}),ke==="wellness"&&p.jsxs("div",{className:`w-full max-w-sm p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${U?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[p.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-white/10",children:[p.jsxs("span",{className:"text-xs font-display uppercase tracking-widest font-semibold flex items-center gap-1.5",children:[p.jsx(ds,{className:"w-3.5 h-3.5 text-amber-400"}),"Daily Wellness Pulse"]}),p.jsx("button",{onClick:()=>Xe("none"),className:"p-1 text-zinc-400 hover:text-white",children:p.jsx(ar,{className:"w-3.5 h-3.5"})})]}),p.jsxs("div",{className:"flex items-center justify-between py-1 text-xs",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx(bb,{className:"w-4 h-4 text-sky-400"}),p.jsx("span",{children:"Hydration Target"})]}),p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("button",{type:"button",onClick:()=>P(Q=>Math.max(0,Q-12.5)),className:"w-6 h-6 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center font-bold",children:"-"}),p.jsxs("span",{className:"font-mono font-bold w-12 text-center",children:[Math.round(F/100*8)," / 8"]}),p.jsx("button",{type:"button",onClick:()=>P(Q=>Math.min(100,Q+12.5)),className:"w-6 h-6 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center font-bold",children:"+"})]})]}),p.jsxs("div",{className:"flex items-center justify-between py-1 text-xs",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx(eo,{className:"w-4 h-4 text-violet-400"}),p.jsx("span",{children:"Sleep Duration"})]}),p.jsxs("button",{type:"button",onClick:()=>D(z%12+1),className:"px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 font-mono font-bold text-xs",children:[z," Hours (Click to Cycle)"]})]}),p.jsxs("div",{className:"flex items-center justify-between py-1 text-xs",children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx(Pb,{className:"w-4 h-4 text-amber-400"}),p.jsx("span",{children:"Day Score"})]}),p.jsxs("button",{type:"button",onClick:()=>N(w>=10?1:w+1),className:"px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 font-mono font-bold text-xs text-amber-400",children:[w," / 10 ★"]})]}),p.jsxs("div",{className:`pt-3 mt-1 border-t flex items-center justify-between ${U?"border-zinc-200":"border-white/10"}`,children:[p.jsxs("div",{className:"flex flex-col",children:[p.jsxs("span",{className:"text-[11px] font-medium flex items-center gap-1",children:[p.jsx(zr,{className:"w-3 h-3 text-violet-400"}),"Day Reset"]}),p.jsxs("span",{className:`text-[9px] font-mono ${U?"text-zinc-500":"text-zinc-400"}`,children:["Active: ",ee]})]}),p.jsxs("button",{type:"button",onClick:()=>{window.confirm("Start a fresh day? This will uncheck today's tasks & habits and reset hydration to 0%.")&&X()},className:`px-3 py-1.5 rounded-xl border text-[11px] font-display uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${U?"bg-violet-50 hover:bg-violet-100 text-violet-700 border-violet-200":"bg-violet-600/30 hover:bg-violet-600/50 text-violet-200 border-violet-400/40 hover:border-violet-400"}`,title:"Reset daily progress for a fresh day",children:[p.jsx(zr,{className:"w-3 h-3"}),p.jsx("span",{children:"Start Fresh Day"})]})]})]})]}),!G&&p.jsx("footer",{className:"relative shrink-0 flex items-center justify-center w-full z-20 pb-2",children:p.jsxs("nav",{"aria-label":"Sanctuary Focus Dock",className:`flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-full backdrop-blur-2xl border shadow-2xl transition-all ${U?"bg-white/85 border-zinc-200/90 text-zinc-800 shadow-[0_15px_40px_rgba(0,0,0,0.1)]":"bg-[#090b16]/80 border-white/[0.12] text-zinc-200 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"}`,children:[p.jsxs("div",{className:`flex items-center rounded-full border transition-all ${M?"bg-emerald-500/20 border-emerald-500/40 text-emerald-300":U?"bg-zinc-100/90 border-zinc-200 text-zinc-800":"bg-white/[0.04] border-white/[0.08] text-zinc-300"}`,children:[p.jsxs("button",{type:"button",onClick:y,className:"pl-3 pr-1.5 py-1.5 flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity",title:M?"Pause focus timer":"Start focus timer",children:[M?p.jsx(Or,{className:"w-3.5 h-3.5 text-emerald-400 animate-pulse"}):p.jsx(Br,{className:"w-3.5 h-3.5 text-zinc-400 fill-current"}),p.jsx("span",{className:"font-mono text-xs font-semibold tabular-nums",children:Ze(_)})]}),p.jsx("button",{type:"button",onClick:()=>Xe(Q=>Q==="timer"?"none":"timer"),className:`pr-3 pl-1 py-1.5 text-[11px] font-sans border-l transition-colors cursor-pointer ${U?"border-zinc-200 hover:text-black":"border-white/10 hover:text-white"}`,title:"Expand Focus Timer Panel",children:p.jsx("span",{children:rn})})]}),p.jsxs("button",{type:"button",onClick:()=>Xe(Q=>Q==="tasks"?"none":"tasks"),className:`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-sans transition-all cursor-pointer ${ke==="tasks"?"bg-violet-600 text-white border-violet-400":U?"bg-zinc-100/90 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300 hover:text-white"}`,title:"Daily Tasks",children:[p.jsx(i0,{className:"w-3.5 h-3.5 text-violet-400"}),p.jsx("span",{children:"Tasks"}),p.jsxs("span",{className:`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${U?"bg-zinc-200/90 text-zinc-800":"bg-white/10 text-violet-200"}`,children:[se,"/",e.length]})]}),p.jsxs("button",{type:"button",onClick:()=>Xe(Q=>Q==="habits"?"none":"habits"),className:`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-sans transition-all cursor-pointer ${ke==="habits"?"bg-violet-600 text-white border-violet-400":U?"bg-zinc-100/90 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300 hover:text-white"}`,title:"Daily Rhythm Habits",children:[p.jsx(Qm,{className:"w-3.5 h-3.5 text-sky-400"}),p.jsx("span",{children:"Rhythm"}),p.jsxs("span",{className:`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${U?"bg-zinc-200/90 text-zinc-800":"bg-white/10 text-sky-200"}`,children:[k,"/",l.length]})]}),p.jsxs("button",{type:"button",onClick:()=>Xe(Q=>Q==="wellness"?"none":"wellness"),className:`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-sans transition-all cursor-pointer ${ke==="wellness"?"bg-amber-500 text-black border-amber-400":U?"bg-zinc-100/90 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300 hover:text-white"}`,title:"Sleep, Water & Daily Rating",children:[p.jsx(eo,{className:"w-3.5 h-3.5 text-amber-400"}),p.jsxs("span",{className:"font-mono text-[11px]",children:[z,"h"]}),p.jsx("span",{className:"text-white/20",children:"•"}),p.jsxs("span",{className:"font-mono text-[11px] text-sky-400",children:[Math.round(F/100*8),"/8💧"]})]}),p.jsxs("div",{onClick:()=>Se(!0),className:`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs cursor-pointer group transition-all ${O||$?H==="youtube"?"bg-red-600/30 border-red-500/40 text-red-200":"bg-violet-600/30 border-violet-500/40 text-violet-200":U?"bg-zinc-100/90 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300 hover:text-white"}`,title:"Open Audio Sanctuary",children:[H==="youtube"&&$?p.jsx(to,{className:"w-3.5 h-3.5 text-red-500 animate-pulse"}):p.jsx(ic,{className:`w-3.5 h-3.5 ${O||$?"text-violet-300 animate-pulse":"text-zinc-400"}`}),p.jsx("span",{className:"max-w-[80px] sm:max-w-[120px] truncate text-[11px] font-medium",children:H==="youtube"?Y?Y.title:"YouTube":ct.title}),p.jsx(Yg,{isPlaying:H==="youtube"?$:O,color:H==="youtube"?"#ef4444":U?"#7c3aed":ct.accentColor,className:"w-8 h-2.5",barCount:4}),p.jsx("button",{type:"button",onClick:Q=>{Q.stopPropagation(),H==="youtube"?L():O?j():K(re)},className:"w-5 h-5 rounded-md flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors",title:(H==="youtube"?$:O)?"Pause audio":"Play audio",children:(H==="youtube"?$:O)?p.jsx(Or,{className:"w-2.5 h-2.5 fill-current"}):p.jsx(Br,{className:"w-2.5 h-2.5 fill-current ml-0.5"})})]})]})}),je&&p.jsxs("div",{className:"fixed inset-0 z-50 flex",children:[p.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm",onClick:()=>Te(!1)}),p.jsxs("aside",{className:`relative z-10 w-80 sm:w-96 max-w-[90vw] h-full backdrop-blur-3xl border-r shadow-2xl p-6 flex flex-col justify-between ${U?"bg-[#faf8f4]/98 border-zinc-200 text-zinc-900":"bg-[#0d0f17]/95 border-white/[0.1] text-white"}`,children:[p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{className:`flex items-center justify-between pb-3.5 border-b ${U?"border-zinc-200":"border-white/[0.08]"}`,children:[p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx(Jm,{className:`w-4 h-4 ${U?"text-violet-700":"text-violet-300"}`}),p.jsx("h3",{className:`text-xs font-sans uppercase tracking-[0.16em] font-semibold ${U?"text-zinc-900":"text-white"}`,children:"Daily Routine Protocols"})]}),p.jsx("button",{onClick:()=>Te(!1),className:`transition-colors cursor-pointer ${U?"text-zinc-500 hover:text-black":"text-zinc-400 hover:text-white"}`,children:p.jsx(ar,{className:"w-4 h-4"})})]}),p.jsxs("div",{className:"space-y-2.5 text-xs overflow-y-auto max-h-[58vh] pr-1",children:[u.map(Q=>p.jsxs("div",{className:`p-3.5 rounded-2xl border transition-all relative group ${U?"bg-white/80 border-zinc-200 shadow-sm":"bg-white/[0.03] border-white/[0.08]"}`,children:[p.jsxs("div",{className:"flex items-center justify-between pb-1.5",children:[p.jsxs("span",{className:"font-semibold text-amber-500 flex items-center gap-1.5",children:[p.jsx(Db,{className:"w-3.5 h-3.5"})," ",Q.title]}),p.jsxs("div",{className:"flex items-center gap-1.5",children:[p.jsx("span",{className:`text-[10px] font-mono ${U?"text-zinc-500":"text-zinc-400"}`,children:Q.timeRange}),u.length>1&&p.jsx("button",{type:"button",onClick:()=>x(Q.id),className:"opacity-0 group-hover:opacity-100 p-1 text-zinc-400 hover:text-red-400 transition-opacity cursor-pointer",title:"Delete protocol block",children:p.jsx(rc,{className:"w-3 h-3"})})]})]}),p.jsx("p",{className:`text-[11px] leading-relaxed ${U?"text-zinc-700":"text-zinc-300"}`,children:Q.description})]},Q.id)),bt?p.jsxs("form",{onSubmit:Q=>{Q.preventDefault(),Et.trim()&&E.trim()&&(h({title:Et.trim(),timeRange:rt.trim()||"Flexible",description:E.trim(),iconType:"custom"}),qe(""),I(""),ae(""),Ie(!1))},className:`p-3 rounded-2xl border space-y-2 ${U?"bg-white border-zinc-300 shadow-sm":"bg-white/[0.05] border-white/[0.12]"}`,children:[p.jsx("input",{type:"text",placeholder:"Protocol title (e.g. Creative Sprint)",value:Et,onChange:Q=>qe(Q.target.value),className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs",required:!0}),p.jsx("input",{type:"text",placeholder:"Time range (e.g. 14:00 – 16:00)",value:rt,onChange:Q=>I(Q.target.value),className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"}),p.jsx("textarea",{placeholder:"Protocol description / intentions...",value:E,onChange:Q=>ae(Q.target.value),className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs resize-none h-16",required:!0}),p.jsxs("div",{className:"flex items-center justify-end gap-1.5",children:[p.jsx("button",{type:"button",onClick:()=>Ie(!1),className:`px-2.5 py-1 rounded-lg text-[11px] ${U?"text-zinc-600 hover:text-black":"text-zinc-400 hover:text-white"}`,children:"Cancel"}),p.jsx("button",{type:"submit",className:"px-3 py-1 rounded-lg text-[11px] bg-violet-600 hover:bg-violet-500 text-white font-medium cursor-pointer",children:"Add Block"})]})]}):p.jsxs("button",{type:"button",onClick:()=>Ie(!0),className:`w-full py-2 rounded-xl border border-dashed flex items-center justify-center gap-1.5 text-[11px] transition-all cursor-pointer ${U?"border-zinc-300 hover:border-zinc-400 text-zinc-600 hover:text-zinc-900 bg-white/40":"border-white/10 hover:border-white/20 text-zinc-400 hover:text-white bg-white/[0.01]"}`,children:[p.jsx(Yl,{className:"w-3 h-3"}),p.jsx("span",{children:"Add Custom Protocol Block"})]})]})]}),p.jsxs("div",{className:"flex items-center gap-2 pt-2",children:[p.jsx("button",{type:"button",onClick:v,className:`px-3 py-2.5 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${U?"border-zinc-200 text-zinc-600 hover:bg-zinc-100":"border-white/10 text-zinc-400 hover:bg-white/[0.05] hover:text-white"}`,title:"Reset to default protocols",children:"Reset"}),p.jsx("button",{type:"button",onClick:()=>Te(!1),className:`flex-1 py-2.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${U?"bg-zinc-900 hover:bg-zinc-800 text-white":"bg-white/[0.06] hover:bg-white/[0.12] text-white"}`,children:"Close Routine"})]})]})]}),p.jsx(Xb,{isOpen:Fe,onClose:()=>ut(!1)}),p.jsx(jb,{isOpen:_e,onClose:()=>Me(!1)}),p.jsx($b,{isOpen:De,onClose:()=>Se(!1)})]})},qb=()=>{const{wallpaperTheme:s,appTheme:e}=Vr(),t=e==="light";return p.jsxs("div",{"data-theme":s,className:`theme-${e} relative w-screen h-screen max-h-screen overflow-hidden text-[var(--text-primary)] font-sans transition-colors duration-200 ${t?"bg-[#f7f5f0]/95":"bg-[#060814]"}`,children:[p.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--card-bg-elevated)] focus:text-[var(--text-primary)] focus:rounded-xl focus:border focus:border-[var(--card-border)] focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-violet-400 font-sans text-xs font-semibold",children:"Skip to main content"}),p.jsx(jv,{}),p.jsx(fb,{}),p.jsx(kb,{}),p.jsx("div",{className:"pointer-events-none fixed inset-0 z-20 dreamy-grain opacity-40 mix-blend-overlay"}),p.jsx("main",{id:"main-content",className:"w-full h-full overflow-y-auto lg:overflow-hidden relative z-10",children:p.jsx(Yb,{})})]})};function Kb(){return p.jsx(Wv,{children:p.jsx(qb,{})})}const s0=document.getElementById("root");s0&&Ov.createRoot(s0).render(p.jsx(Lv.StrictMode,{children:p.jsx(Kb,{})}));
