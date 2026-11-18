var Mv=Object.defineProperty;var wv=(s,e,t)=>e in s?Mv(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var er=(s,e,t)=>wv(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function o0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var zu={exports:{}},Oa={},Fu={exports:{}},Tt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function bv(){if(Jp)return Tt;Jp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.iterator;function _(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,C={};function y(I,ne,Ae){this.props=I,this.context=ne,this.refs=C,this.updater=Ae||M}y.prototype.isReactComponent={},y.prototype.setState=function(I,ne){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ne,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function S(){}S.prototype=y.prototype;function R(I,ne,Ae){this.props=I,this.context=ne,this.refs=C,this.updater=Ae||M}var F=R.prototype=new S;F.constructor=R,b(F,y.prototype),F.isPureReactComponent=!0;var N=Array.isArray,z=Object.prototype.hasOwnProperty,D={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function P(I,ne,Ae){var se,V={},we=null,De=null;if(ne!=null)for(se in ne.ref!==void 0&&(De=ne.ref),ne.key!==void 0&&(we=""+ne.key),ne)z.call(ne,se)&&!w.hasOwnProperty(se)&&(V[se]=ne[se]);var Me=arguments.length-2;if(Me===1)V.children=Ae;else if(1<Me){for(var ke=Array(Me),lt=0;lt<Me;lt++)ke[lt]=arguments[lt+2];V.children=ke}if(I&&I.defaultProps)for(se in Me=I.defaultProps,Me)V[se]===void 0&&(V[se]=Me[se]);return{$$typeof:s,type:I,key:we,ref:De,props:V,_owner:D.current}}function ee(I,ne){return{$$typeof:s,type:I.type,key:ne,ref:I.ref,props:I.props,_owner:I._owner}}function B(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function X(I){var ne={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Ae){return ne[Ae]})}var H=/\/+/g;function j(I,ne){return typeof I=="object"&&I!==null&&I.key!=null?X(""+I.key):ne.toString(36)}function W(I,ne,Ae,se,V){var we=typeof I;(we==="undefined"||we==="boolean")&&(I=null);var De=!1;if(I===null)De=!0;else switch(we){case"string":case"number":De=!0;break;case"object":switch(I.$$typeof){case s:case e:De=!0}}if(De)return De=I,V=V(De),I=se===""?"."+j(De,0):se,N(V)?(Ae="",I!=null&&(Ae=I.replace(H,"$&/")+"/"),W(V,ne,Ae,"",function(lt){return lt})):V!=null&&(B(V)&&(V=ee(V,Ae+(!V.key||De&&De.key===V.key?"":(""+V.key).replace(H,"$&/")+"/")+I)),ne.push(V)),1;if(De=0,se=se===""?".":se+":",N(I))for(var Me=0;Me<I.length;Me++){we=I[Me];var ke=se+j(we,Me);De+=W(we,ne,Ae,ke,V)}else if(ke=_(I),typeof ke=="function")for(I=ke.call(I),Me=0;!(we=I.next()).done;)we=we.value,ke=se+j(we,Me++),De+=W(we,ne,Ae,ke,V);else if(we==="object")throw ne=String(I),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return De}function G(I,ne,Ae){if(I==null)return I;var se=[],V=0;return W(I,se,"","",function(we){return ne.call(Ae,we,V++)}),se}function re(I){if(I._status===-1){var ne=I._result;ne=ne(),ne.then(function(Ae){(I._status===0||I._status===-1)&&(I._status=1,I._result=Ae)},function(Ae){(I._status===0||I._status===-1)&&(I._status=2,I._result=Ae)}),I._status===-1&&(I._status=0,I._result=ne)}if(I._status===1)return I._result.default;throw I._result}var J={current:null},$={transition:null},Y={ReactCurrentDispatcher:J,ReactCurrentBatchConfig:$,ReactCurrentOwner:D};function q(){throw Error("act(...) is not supported in production builds of React.")}return Tt.Children={map:G,forEach:function(I,ne,Ae){G(I,function(){ne.apply(this,arguments)},Ae)},count:function(I){var ne=0;return G(I,function(){ne++}),ne},toArray:function(I){return G(I,function(ne){return ne})||[]},only:function(I){if(!B(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},Tt.Component=y,Tt.Fragment=t,Tt.Profiler=o,Tt.PureComponent=R,Tt.StrictMode=r,Tt.Suspense=d,Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,Tt.act=q,Tt.cloneElement=function(I,ne,Ae){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var se=b({},I.props),V=I.key,we=I.ref,De=I._owner;if(ne!=null){if(ne.ref!==void 0&&(we=ne.ref,De=D.current),ne.key!==void 0&&(V=""+ne.key),I.type&&I.type.defaultProps)var Me=I.type.defaultProps;for(ke in ne)z.call(ne,ke)&&!w.hasOwnProperty(ke)&&(se[ke]=ne[ke]===void 0&&Me!==void 0?Me[ke]:ne[ke])}var ke=arguments.length-2;if(ke===1)se.children=Ae;else if(1<ke){Me=Array(ke);for(var lt=0;lt<ke;lt++)Me[lt]=arguments[lt+2];se.children=Me}return{$$typeof:s,type:I.type,key:V,ref:we,props:se,_owner:De}},Tt.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},Tt.createElement=P,Tt.createFactory=function(I){var ne=P.bind(null,I);return ne.type=I,ne},Tt.createRef=function(){return{current:null}},Tt.forwardRef=function(I){return{$$typeof:p,render:I}},Tt.isValidElement=B,Tt.lazy=function(I){return{$$typeof:x,_payload:{_status:-1,_result:I},_init:re}},Tt.memo=function(I,ne){return{$$typeof:h,type:I,compare:ne===void 0?null:ne}},Tt.startTransition=function(I){var ne=$.transition;$.transition={};try{I()}finally{$.transition=ne}},Tt.unstable_act=q,Tt.useCallback=function(I,ne){return J.current.useCallback(I,ne)},Tt.useContext=function(I){return J.current.useContext(I)},Tt.useDebugValue=function(){},Tt.useDeferredValue=function(I){return J.current.useDeferredValue(I)},Tt.useEffect=function(I,ne){return J.current.useEffect(I,ne)},Tt.useId=function(){return J.current.useId()},Tt.useImperativeHandle=function(I,ne,Ae){return J.current.useImperativeHandle(I,ne,Ae)},Tt.useInsertionEffect=function(I,ne){return J.current.useInsertionEffect(I,ne)},Tt.useLayoutEffect=function(I,ne){return J.current.useLayoutEffect(I,ne)},Tt.useMemo=function(I,ne){return J.current.useMemo(I,ne)},Tt.useReducer=function(I,ne,Ae){return J.current.useReducer(I,ne,Ae)},Tt.useRef=function(I){return J.current.useRef(I)},Tt.useState=function(I){return J.current.useState(I)},Tt.useSyncExternalStore=function(I,ne,Ae){return J.current.useSyncExternalStore(I,ne,Ae)},Tt.useTransition=function(){return J.current.useTransition()},Tt.version="18.3.1",Tt}var Qp;function hf(){return Qp||(Qp=1,Fu.exports=bv()),Fu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function Ev(){if(em)return Oa;em=1;var s=hf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(p,d,h){var x,v={},_=null,M=null;h!==void 0&&(_=""+h),d.key!==void 0&&(_=""+d.key),d.ref!==void 0&&(M=d.ref);for(x in d)r.call(d,x)&&!l.hasOwnProperty(x)&&(v[x]=d[x]);if(p&&p.defaultProps)for(x in d=p.defaultProps,d)v[x]===void 0&&(v[x]=d[x]);return{$$typeof:e,type:p,key:_,ref:M,props:v,_owner:o.current}}return Oa.Fragment=t,Oa.jsx=u,Oa.jsxs=u,Oa}var tm;function Tv(){return tm||(tm=1,zu.exports=Ev()),zu.exports}var m=Tv(),be=hf();const Av=o0(be);var pl={},ku={exports:{}},Zn={},Ou={exports:{}},Bu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm;function Cv(){return nm||(nm=1,(function(s){function e($,Y){var q=$.length;$.push(Y);e:for(;0<q;){var I=q-1>>>1,ne=$[I];if(0<o(ne,Y))$[I]=Y,$[q]=ne,q=I;else break e}}function t($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Y=$[0],q=$.pop();if(q!==Y){$[0]=q;e:for(var I=0,ne=$.length,Ae=ne>>>1;I<Ae;){var se=2*(I+1)-1,V=$[se],we=se+1,De=$[we];if(0>o(V,q))we<ne&&0>o(De,V)?($[I]=De,$[we]=q,I=we):($[I]=V,$[se]=q,I=se);else if(we<ne&&0>o(De,q))$[I]=De,$[we]=q,I=we;else break e}}return Y}function o($,Y){var q=$.sortIndex-Y.sortIndex;return q!==0?q:$.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,p=u.now();s.unstable_now=function(){return u.now()-p}}var d=[],h=[],x=1,v=null,_=3,M=!1,b=!1,C=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F($){for(var Y=t(h);Y!==null;){if(Y.callback===null)r(h);else if(Y.startTime<=$)r(h),Y.sortIndex=Y.expirationTime,e(d,Y);else break;Y=t(h)}}function N($){if(C=!1,F($),!b)if(t(d)!==null)b=!0,re(z);else{var Y=t(h);Y!==null&&J(N,Y.startTime-$)}}function z($,Y){b=!1,C&&(C=!1,S(P),P=-1),M=!0;var q=_;try{for(F(Y),v=t(d);v!==null&&(!(v.expirationTime>Y)||$&&!X());){var I=v.callback;if(typeof I=="function"){v.callback=null,_=v.priorityLevel;var ne=I(v.expirationTime<=Y);Y=s.unstable_now(),typeof ne=="function"?v.callback=ne:v===t(d)&&r(d),F(Y)}else r(d);v=t(d)}if(v!==null)var Ae=!0;else{var se=t(h);se!==null&&J(N,se.startTime-Y),Ae=!1}return Ae}finally{v=null,_=q,M=!1}}var D=!1,w=null,P=-1,ee=5,B=-1;function X(){return!(s.unstable_now()-B<ee)}function H(){if(w!==null){var $=s.unstable_now();B=$;var Y=!0;try{Y=w(!0,$)}finally{Y?j():(D=!1,w=null)}}else D=!1}var j;if(typeof R=="function")j=function(){R(H)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,G=W.port2;W.port1.onmessage=H,j=function(){G.postMessage(null)}}else j=function(){y(H,0)};function re($){w=$,D||(D=!0,j())}function J($,Y){P=y(function(){$(s.unstable_now())},Y)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function($){$.callback=null},s.unstable_continueExecution=function(){b||M||(b=!0,re(z))},s.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<$?Math.floor(1e3/$):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function($){switch(_){case 1:case 2:case 3:var Y=3;break;default:Y=_}var q=_;_=Y;try{return $()}finally{_=q}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function($,Y){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var q=_;_=$;try{return Y()}finally{_=q}},s.unstable_scheduleCallback=function($,Y,q){var I=s.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?I+q:I):q=I,$){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=q+ne,$={id:x++,callback:Y,priorityLevel:$,startTime:q,expirationTime:ne,sortIndex:-1},q>I?($.sortIndex=q,e(h,$),t(d)===null&&$===t(h)&&(C?(S(P),P=-1):C=!0,J(N,q-I))):($.sortIndex=ne,e(d,$),b||M||(b=!0,re(z))),$},s.unstable_shouldYield=X,s.unstable_wrapCallback=function($){var Y=_;return function(){var q=_;_=Y;try{return $.apply(this,arguments)}finally{_=q}}}})(Bu)),Bu}var im;function Rv(){return im||(im=1,Ou.exports=Cv()),Ou.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function Nv(){if(rm)return Zn;rm=1;var s=hf(),e=Rv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},v={};function _(n){return d.call(v,n)?!0:d.call(x,n)?!1:h.test(n)?v[n]=!0:(x[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function b(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,a,c,f,g,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=T}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(S,R);y[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(S,R);y[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(S,R);y[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function F(n,i,a,c){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(b(i,a,f,c)&&(a=null),c||f===null?_(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var N=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),D=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),ee=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),X=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),$=Symbol.iterator;function Y(n){return n===null||typeof n!="object"?null:(n=$&&n[$]||n["@@iterator"],typeof n=="function"?n:null)}var q=Object.assign,I;function ne(n){if(I===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+n}var Ae=!1;function se(n,i){if(!n||Ae)return"";Ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(me){var c=me}Reflect.construct(n,[],i)}else{try{i.call()}catch(me){c=me}n.call(i.prototype)}else{try{throw Error()}catch(me){c=me}n()}}catch(me){if(me&&c&&typeof me.stack=="string"){for(var f=me.stack.split(`
`),g=c.stack.split(`
`),T=f.length-1,O=g.length-1;1<=T&&0<=O&&f[T]!==g[O];)O--;for(;1<=T&&0<=O;T--,O--)if(f[T]!==g[O]){if(T!==1||O!==1)do if(T--,O--,0>O||f[T]!==g[O]){var Q=`
`+f[T].replace(" at new "," at ");return n.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",n.displayName)),Q}while(1<=T&&0<=O);break}}}finally{Ae=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ne(n):""}function V(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=se(n.type,!1),n;case 11:return n=se(n.type.render,!1),n;case 1:return n=se(n.type,!0),n;default:return""}}function we(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case w:return"Fragment";case D:return"Portal";case ee:return"Profiler";case P:return"StrictMode";case j:return"Suspense";case W:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case X:return(n.displayName||"Context")+".Consumer";case B:return(n._context.displayName||"Context")+".Provider";case H:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case G:return i=n.displayName||null,i!==null?i:we(n.type)||"Memo";case re:i=n._payload,n=n._init;try{return we(n(i))}catch{}}return null}function De(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return we(i);case 8:return i===P?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ke(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function lt(n){var i=ke(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(T){c=""+T,g.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function He(n){n._valueTracker||(n._valueTracker=lt(n))}function Re(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=ke(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Ve(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function je(n,i){var a=i.checked;return q({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function St(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Me(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function xt(n,i){i=i.checked,i!=null&&F(n,"checked",i,!1)}function Nt(n,i){xt(n,i);var a=Me(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Zt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Zt(n,i.type,Me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Mt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Zt(n,i,a){(i!=="number"||Ve(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var zt=Array.isArray;function $t(n,i,a,c){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Me(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function Vt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return q({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function tn(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(zt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Me(a)}}function K(n,i){var a=Me(i.value),c=Me(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Ht(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Ct(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Ct(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ze,Pt=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ze=ze||document.createElement("div"),ze.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ze.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ye(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var tt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},U=["Webkit","ms","Moz","O"];Object.keys(tt).forEach(function(n){U.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),tt[i]=tt[n]})});function E(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||tt.hasOwnProperty(n)&&tt[n]?(""+i).trim():i+"px"}function oe(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=E(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,f):n[a]=f}}var Ee=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _e(n,i){if(i){if(Ee[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ue(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function ie(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ae=null,Se=null,k=null;function ge(n){if(n=ba(n)){if(typeof ae!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ro(i),ae(n.stateNode,n.type,i))}}function he(n){Se?k?k.push(n):k=[n]:Se=n}function Ne(){if(Se){var n=Se,i=k;if(k=Se=null,ge(n),i)for(n=0;n<i.length;n++)ge(i[n])}}function Te(n,i){return n(i)}function Pe(){}var Xe=!1;function at(n,i,a){if(Xe)return n(i,a);Xe=!0;try{return Te(n,i,a)}finally{Xe=!1,(Se!==null||k!==null)&&(Pe(),Ne())}}function L(n,i){var a=n.stateNode;if(a===null)return null;var c=Ro(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ye=!1;if(p)try{var ve={};Object.defineProperty(ve,"passive",{get:function(){ye=!0}}),window.addEventListener("test",ve,ve),window.removeEventListener("test",ve,ve)}catch{ye=!1}function Ie(n,i,a,c,f,g,T,O,Q){var me=Array.prototype.slice.call(arguments,3);try{i.apply(a,me)}catch(Le){this.onError(Le)}}var ft=!1,wt=null,ot=!1,Lt=null,bt={onError:function(n){ft=!0,wt=n}};function un(n,i,a,c,f,g,T,O,Q){ft=!1,wt=null,Ie.apply(bt,arguments)}function on(n,i,a,c,f,g,T,O,Q){if(un.apply(this,arguments),ft){if(ft){var me=wt;ft=!1,wt=null}else throw Error(t(198));ot||(ot=!0,Lt=me)}}function Rn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Nn(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ni(n){if(Rn(n)!==n)throw Error(t(188))}function hs(n){var i=n.alternate;if(!i){if(i=Rn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return Ni(f),n;if(g===c)return Ni(f),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=g;else{for(var T=!1,O=f.child;O;){if(O===a){T=!0,a=f,c=g;break}if(O===c){T=!0,c=f,a=g;break}O=O.sibling}if(!T){for(O=g.child;O;){if(O===a){T=!0,a=g,c=f;break}if(O===c){T=!0,c=g,a=f;break}O=O.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function sa(n){return n=hs(n),n!==null?Gr(n):null}function Gr(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Gr(n);if(i!==null)return i;n=n.sibling}return null}var aa=e.unstable_scheduleCallback,oa=e.unstable_cancelCallback,Hr=e.unstable_shouldYield,oc=e.unstable_requestPaint,Jt=e.unstable_now,fo=e.unstable_getCurrentPriorityLevel,la=e.unstable_ImmediatePriority,ho=e.unstable_UserBlockingPriority,ps=e.unstable_NormalPriority,po=e.unstable_LowPriority,A=e.unstable_IdlePriority,Z=null,de=null;function ce(n){if(de&&typeof de.onCommitFiberRoot=="function")try{de.onCommitFiberRoot(Z,n,void 0,(n.current.flags&128)===128)}catch{}}var le=Math.clz32?Math.clz32:Be,Ge=Math.log,Ke=Math.LN2;function Be(n){return n>>>=0,n===0?32:31-(Ge(n)/Ke|0)|0}var We=64,Je=4194304;function dt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function vt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,f=n.suspendedLanes,g=n.pingedLanes,T=a&268435455;if(T!==0){var O=T&~f;O!==0?c=dt(O):(g&=T,g!==0&&(c=dt(g)))}else T=a&~f,T!==0?c=dt(T):g!==0&&(c=dt(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,g=i&-i,f>=g||f===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-le(i),f=1<<a,c|=n[a],i&=~f;return c}function Qe(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Et(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,g=n.pendingLanes;0<g;){var T=31-le(g),O=1<<T,Q=f[T];Q===-1?((O&a)===0||(O&c)!==0)&&(f[T]=Qe(O,i)):Q<=i&&(n.expiredLanes|=O),g&=~O}}function Qt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Wt(){var n=We;return We<<=1,(We&4194240)===0&&(We=64),n}function Bt(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function ln(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-le(i),n[i]=a}function et(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-le(a),g=1<<f;i[f]=0,c[f]=-1,n[f]=-1,a&=~g}}function mn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-le(a),f=1<<c;f&i|n[c]&i&&(n[c]|=i),a&=~f}}var rt=0;function Pi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var gn,cr,mi,Li,Rt,dn=!1,Pn=[],kt=null,Xt=null,Sn=null,ur=new Map,ca=new Map,dr=[],Wg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uf(n,i){switch(n){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":ur.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ca.delete(i.pointerId)}}function ua(n,i,a,c,f,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},i!==null&&(i=ba(i),i!==null&&cr(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function jg(n,i,a,c,f){switch(i){case"focusin":return kt=ua(kt,n,i,a,c,f),!0;case"dragenter":return Xt=ua(Xt,n,i,a,c,f),!0;case"mouseover":return Sn=ua(Sn,n,i,a,c,f),!0;case"pointerover":var g=f.pointerId;return ur.set(g,ua(ur.get(g)||null,n,i,a,c,f)),!0;case"gotpointercapture":return g=f.pointerId,ca.set(g,ua(ca.get(g)||null,n,i,a,c,f)),!0}return!1}function zf(n){var i=Vr(n.target);if(i!==null){var a=Rn(i);if(a!==null){if(i=a.tag,i===13){if(i=Nn(a),i!==null){n.blockedOn=i,Rt(n.priority,function(){mi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function mo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=cc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);xe=c,a.target.dispatchEvent(c),xe=null}else return i=ba(a),i!==null&&cr(i),n.blockedOn=a,!1;i.shift()}return!0}function Ff(n,i,a){mo(n)&&a.delete(i)}function $g(){dn=!1,kt!==null&&mo(kt)&&(kt=null),Xt!==null&&mo(Xt)&&(Xt=null),Sn!==null&&mo(Sn)&&(Sn=null),ur.forEach(Ff),ca.forEach(Ff)}function da(n,i){n.blockedOn===i&&(n.blockedOn=null,dn||(dn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,$g)))}function fa(n){function i(f){return da(f,n)}if(0<Pn.length){da(Pn[0],n);for(var a=1;a<Pn.length;a++){var c=Pn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(kt!==null&&da(kt,n),Xt!==null&&da(Xt,n),Sn!==null&&da(Sn,n),ur.forEach(i),ca.forEach(i),a=0;a<dr.length;a++)c=dr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<dr.length&&(a=dr[0],a.blockedOn===null);)zf(a),a.blockedOn===null&&dr.shift()}var ms=N.ReactCurrentBatchConfig,go=!0;function Xg(n,i,a,c){var f=rt,g=ms.transition;ms.transition=null;try{rt=1,lc(n,i,a,c)}finally{rt=f,ms.transition=g}}function Yg(n,i,a,c){var f=rt,g=ms.transition;ms.transition=null;try{rt=4,lc(n,i,a,c)}finally{rt=f,ms.transition=g}}function lc(n,i,a,c){if(go){var f=cc(n,i,a,c);if(f===null)Tc(n,i,c,xo,a),Uf(n,c);else if(jg(f,n,i,a,c))c.stopPropagation();else if(Uf(n,c),i&4&&-1<Wg.indexOf(n)){for(;f!==null;){var g=ba(f);if(g!==null&&gn(g),g=cc(n,i,a,c),g===null&&Tc(n,i,c,xo,a),g===f)break;f=g}f!==null&&c.stopPropagation()}else Tc(n,i,c,null,a)}}var xo=null;function cc(n,i,a,c){if(xo=null,n=ie(c),n=Vr(n),n!==null)if(i=Rn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Nn(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return xo=n,null}function kf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fo()){case la:return 1;case ho:return 4;case ps:case po:return 16;case A:return 536870912;default:return 16}default:return 16}}var fr=null,uc=null,vo=null;function Of(){if(vo)return vo;var n,i=uc,a=i.length,c,f="value"in fr?fr.value:fr.textContent,g=f.length;for(n=0;n<a&&i[n]===f[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===f[g-c];c++);return vo=f.slice(n,1<c?1-c:void 0)}function _o(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function yo(){return!0}function Bf(){return!1}function Qn(n){function i(a,c,f,g,T){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(a=n[O],this[O]=a?a(g):g[O]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?yo:Bf,this.isPropagationStopped=Bf,this}return q(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=yo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=yo)},persist:function(){},isPersistent:yo}),i}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dc=Qn(gs),ha=q({},gs,{view:0,detail:0}),qg=Qn(ha),fc,hc,pa,So=q({},ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==pa&&(pa&&n.type==="mousemove"?(fc=n.screenX-pa.screenX,hc=n.screenY-pa.screenY):hc=fc=0,pa=n),fc)},movementY:function(n){return"movementY"in n?n.movementY:hc}}),Gf=Qn(So),Kg=q({},So,{dataTransfer:0}),Zg=Qn(Kg),Jg=q({},ha,{relatedTarget:0}),pc=Qn(Jg),Qg=q({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),ex=Qn(Qg),tx=q({},gs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),nx=Qn(tx),ix=q({},gs,{data:0}),Hf=Qn(ix),rx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ax={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ox(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=ax[n])?!!i[n]:!1}function mc(){return ox}var lx=q({},ha,{key:function(n){if(n.key){var i=rx[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=_o(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?sx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mc,charCode:function(n){return n.type==="keypress"?_o(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?_o(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),cx=Qn(lx),ux=q({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vf=Qn(ux),dx=q({},ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mc}),fx=Qn(dx),hx=q({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),px=Qn(hx),mx=q({},So,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),gx=Qn(mx),xx=[9,13,27,32],gc=p&&"CompositionEvent"in window,ma=null;p&&"documentMode"in document&&(ma=document.documentMode);var vx=p&&"TextEvent"in window&&!ma,Wf=p&&(!gc||ma&&8<ma&&11>=ma),jf=" ",$f=!1;function Xf(n,i){switch(n){case"keyup":return xx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var xs=!1;function _x(n,i){switch(n){case"compositionend":return Yf(i);case"keypress":return i.which!==32?null:($f=!0,jf);case"textInput":return n=i.data,n===jf&&$f?null:n;default:return null}}function yx(n,i){if(xs)return n==="compositionend"||!gc&&Xf(n,i)?(n=Of(),vo=uc=fr=null,xs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Wf&&i.locale!=="ko"?null:i.data;default:return null}}var Sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Sx[n.type]:i==="textarea"}function Kf(n,i,a,c){he(c),i=To(i,"onChange"),0<i.length&&(a=new dc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var ga=null,xa=null;function Mx(n){ph(n,0)}function Mo(n){var i=Ms(n);if(Re(i))return n}function wx(n,i){if(n==="change")return i}var Zf=!1;if(p){var xc;if(p){var vc="oninput"in document;if(!vc){var Jf=document.createElement("div");Jf.setAttribute("oninput","return;"),vc=typeof Jf.oninput=="function"}xc=vc}else xc=!1;Zf=xc&&(!document.documentMode||9<document.documentMode)}function Qf(){ga&&(ga.detachEvent("onpropertychange",eh),xa=ga=null)}function eh(n){if(n.propertyName==="value"&&Mo(xa)){var i=[];Kf(i,xa,n,ie(n)),at(Mx,i)}}function bx(n,i,a){n==="focusin"?(Qf(),ga=i,xa=a,ga.attachEvent("onpropertychange",eh)):n==="focusout"&&Qf()}function Ex(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Mo(xa)}function Tx(n,i){if(n==="click")return Mo(i)}function Ax(n,i){if(n==="input"||n==="change")return Mo(i)}function Cx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var gi=typeof Object.is=="function"?Object.is:Cx;function va(n,i){if(gi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!d.call(i,f)||!gi(n[f],i[f]))return!1}return!0}function th(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function nh(n,i){var a=th(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=th(a)}}function ih(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?ih(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function rh(){for(var n=window,i=Ve();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Ve(n.document)}return i}function _c(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Rx(n){var i=rh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&ih(a.ownerDocument.documentElement,a)){if(c!==null&&_c(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!n.extend&&g>c&&(f=c,c=g,g=f),f=nh(a,g);var T=nh(a,c);f&&T&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Nx=p&&"documentMode"in document&&11>=document.documentMode,vs=null,yc=null,_a=null,Sc=!1;function sh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Sc||vs==null||vs!==Ve(c)||(c=vs,"selectionStart"in c&&_c(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),_a&&va(_a,c)||(_a=c,c=To(yc,"onSelect"),0<c.length&&(i=new dc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=vs)))}function wo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var _s={animationend:wo("Animation","AnimationEnd"),animationiteration:wo("Animation","AnimationIteration"),animationstart:wo("Animation","AnimationStart"),transitionend:wo("Transition","TransitionEnd")},Mc={},ah={};p&&(ah=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function bo(n){if(Mc[n])return Mc[n];if(!_s[n])return n;var i=_s[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in ah)return Mc[n]=i[a];return n}var oh=bo("animationend"),lh=bo("animationiteration"),ch=bo("animationstart"),uh=bo("transitionend"),dh=new Map,fh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(n,i){dh.set(n,i),l(i,[n])}for(var wc=0;wc<fh.length;wc++){var bc=fh[wc],Px=bc.toLowerCase(),Lx=bc[0].toUpperCase()+bc.slice(1);hr(Px,"on"+Lx)}hr(oh,"onAnimationEnd"),hr(lh,"onAnimationIteration"),hr(ch,"onAnimationStart"),hr("dblclick","onDoubleClick"),hr("focusin","onFocus"),hr("focusout","onBlur"),hr(uh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ya="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dx=new Set("cancel close invalid load scroll toggle".split(" ").concat(ya));function hh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,on(c,i,void 0,n),n.currentTarget=null}function ph(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],f=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var T=c.length-1;0<=T;T--){var O=c[T],Q=O.instance,me=O.currentTarget;if(O=O.listener,Q!==g&&f.isPropagationStopped())break e;hh(f,O,me),g=Q}else for(T=0;T<c.length;T++){if(O=c[T],Q=O.instance,me=O.currentTarget,O=O.listener,Q!==g&&f.isPropagationStopped())break e;hh(f,O,me),g=Q}}}if(ot)throw n=Lt,ot=!1,Lt=null,n}function qt(n,i){var a=i[Lc];a===void 0&&(a=i[Lc]=new Set);var c=n+"__bubble";a.has(c)||(mh(i,n,2,!1),a.add(c))}function Ec(n,i,a){var c=0;i&&(c|=4),mh(a,n,c,i)}var Eo="_reactListening"+Math.random().toString(36).slice(2);function Sa(n){if(!n[Eo]){n[Eo]=!0,r.forEach(function(a){a!=="selectionchange"&&(Dx.has(a)||Ec(a,!1,n),Ec(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Eo]||(i[Eo]=!0,Ec("selectionchange",!1,i))}}function mh(n,i,a,c){switch(kf(i)){case 1:var f=Xg;break;case 4:f=Yg;break;default:f=lc}a=f.bind(null,i,a,n),f=void 0,!ye||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function Tc(n,i,a,c,f){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var O=c.stateNode.containerInfo;if(O===f||O.nodeType===8&&O.parentNode===f)break;if(T===4)for(T=c.return;T!==null;){var Q=T.tag;if((Q===3||Q===4)&&(Q=T.stateNode.containerInfo,Q===f||Q.nodeType===8&&Q.parentNode===f))return;T=T.return}for(;O!==null;){if(T=Vr(O),T===null)return;if(Q=T.tag,Q===5||Q===6){c=g=T;continue e}O=O.parentNode}}c=c.return}at(function(){var me=g,Le=ie(a),Fe=[];e:{var Ce=dh.get(n);if(Ce!==void 0){var qe=dc,nt=n;switch(n){case"keypress":if(_o(a)===0)break e;case"keydown":case"keyup":qe=cx;break;case"focusin":nt="focus",qe=pc;break;case"focusout":nt="blur",qe=pc;break;case"beforeblur":case"afterblur":qe=pc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":qe=Gf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":qe=Zg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":qe=fx;break;case oh:case lh:case ch:qe=ex;break;case uh:qe=px;break;case"scroll":qe=qg;break;case"wheel":qe=gx;break;case"copy":case"cut":case"paste":qe=nx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":qe=Vf}var it=(i&4)!==0,fn=!it&&n==="scroll",ue=it?Ce!==null?Ce+"Capture":null:Ce;it=[];for(var te=me,fe;te!==null;){fe=te;var Oe=fe.stateNode;if(fe.tag===5&&Oe!==null&&(fe=Oe,ue!==null&&(Oe=L(te,ue),Oe!=null&&it.push(Ma(te,Oe,fe)))),fn)break;te=te.return}0<it.length&&(Ce=new qe(Ce,nt,null,a,Le),Fe.push({event:Ce,listeners:it}))}}if((i&7)===0){e:{if(Ce=n==="mouseover"||n==="pointerover",qe=n==="mouseout"||n==="pointerout",Ce&&a!==xe&&(nt=a.relatedTarget||a.fromElement)&&(Vr(nt)||nt[$i]))break e;if((qe||Ce)&&(Ce=Le.window===Le?Le:(Ce=Le.ownerDocument)?Ce.defaultView||Ce.parentWindow:window,qe?(nt=a.relatedTarget||a.toElement,qe=me,nt=nt?Vr(nt):null,nt!==null&&(fn=Rn(nt),nt!==fn||nt.tag!==5&&nt.tag!==6)&&(nt=null)):(qe=null,nt=me),qe!==nt)){if(it=Gf,Oe="onMouseLeave",ue="onMouseEnter",te="mouse",(n==="pointerout"||n==="pointerover")&&(it=Vf,Oe="onPointerLeave",ue="onPointerEnter",te="pointer"),fn=qe==null?Ce:Ms(qe),fe=nt==null?Ce:Ms(nt),Ce=new it(Oe,te+"leave",qe,a,Le),Ce.target=fn,Ce.relatedTarget=fe,Oe=null,Vr(Le)===me&&(it=new it(ue,te+"enter",nt,a,Le),it.target=fe,it.relatedTarget=fn,Oe=it),fn=Oe,qe&&nt)t:{for(it=qe,ue=nt,te=0,fe=it;fe;fe=ys(fe))te++;for(fe=0,Oe=ue;Oe;Oe=ys(Oe))fe++;for(;0<te-fe;)it=ys(it),te--;for(;0<fe-te;)ue=ys(ue),fe--;for(;te--;){if(it===ue||ue!==null&&it===ue.alternate)break t;it=ys(it),ue=ys(ue)}it=null}else it=null;qe!==null&&gh(Fe,Ce,qe,it,!1),nt!==null&&fn!==null&&gh(Fe,fn,nt,it,!0)}}e:{if(Ce=me?Ms(me):window,qe=Ce.nodeName&&Ce.nodeName.toLowerCase(),qe==="select"||qe==="input"&&Ce.type==="file")var st=wx;else if(qf(Ce))if(Zf)st=Ax;else{st=Ex;var ct=bx}else(qe=Ce.nodeName)&&qe.toLowerCase()==="input"&&(Ce.type==="checkbox"||Ce.type==="radio")&&(st=Tx);if(st&&(st=st(n,me))){Kf(Fe,st,a,Le);break e}ct&&ct(n,Ce,me),n==="focusout"&&(ct=Ce._wrapperState)&&ct.controlled&&Ce.type==="number"&&Zt(Ce,"number",Ce.value)}switch(ct=me?Ms(me):window,n){case"focusin":(qf(ct)||ct.contentEditable==="true")&&(vs=ct,yc=me,_a=null);break;case"focusout":_a=yc=vs=null;break;case"mousedown":Sc=!0;break;case"contextmenu":case"mouseup":case"dragend":Sc=!1,sh(Fe,a,Le);break;case"selectionchange":if(Nx)break;case"keydown":case"keyup":sh(Fe,a,Le)}var ut;if(gc)e:{switch(n){case"compositionstart":var ht="onCompositionStart";break e;case"compositionend":ht="onCompositionEnd";break e;case"compositionupdate":ht="onCompositionUpdate";break e}ht=void 0}else xs?Xf(n,a)&&(ht="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ht="onCompositionStart");ht&&(Wf&&a.locale!=="ko"&&(xs||ht!=="onCompositionStart"?ht==="onCompositionEnd"&&xs&&(ut=Of()):(fr=Le,uc="value"in fr?fr.value:fr.textContent,xs=!0)),ct=To(me,ht),0<ct.length&&(ht=new Hf(ht,n,null,a,Le),Fe.push({event:ht,listeners:ct}),ut?ht.data=ut:(ut=Yf(a),ut!==null&&(ht.data=ut)))),(ut=vx?_x(n,a):yx(n,a))&&(me=To(me,"onBeforeInput"),0<me.length&&(Le=new Hf("onBeforeInput","beforeinput",null,a,Le),Fe.push({event:Le,listeners:me}),Le.data=ut))}ph(Fe,i)})}function Ma(n,i,a){return{instance:n,listener:i,currentTarget:a}}function To(n,i){for(var a=i+"Capture",c=[];n!==null;){var f=n,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=L(n,a),g!=null&&c.unshift(Ma(n,g,f)),g=L(n,i),g!=null&&c.push(Ma(n,g,f))),n=n.return}return c}function ys(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function gh(n,i,a,c,f){for(var g=i._reactName,T=[];a!==null&&a!==c;){var O=a,Q=O.alternate,me=O.stateNode;if(Q!==null&&Q===c)break;O.tag===5&&me!==null&&(O=me,f?(Q=L(a,g),Q!=null&&T.unshift(Ma(a,Q,O))):f||(Q=L(a,g),Q!=null&&T.push(Ma(a,Q,O)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var Ix=/\r\n?/g,Ux=/\u0000|\uFFFD/g;function xh(n){return(typeof n=="string"?n:""+n).replace(Ix,`
`).replace(Ux,"")}function Ao(n,i,a){if(i=xh(i),xh(n)!==i&&a)throw Error(t(425))}function Co(){}var Ac=null,Cc=null;function Rc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Nc=typeof setTimeout=="function"?setTimeout:void 0,zx=typeof clearTimeout=="function"?clearTimeout:void 0,vh=typeof Promise=="function"?Promise:void 0,Fx=typeof queueMicrotask=="function"?queueMicrotask:typeof vh<"u"?function(n){return vh.resolve(null).then(n).catch(kx)}:Nc;function kx(n){setTimeout(function(){throw n})}function Pc(n,i){var a=i,c=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){n.removeChild(f),fa(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);fa(i)}function pr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function _h(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ss=Math.random().toString(36).slice(2),Di="__reactFiber$"+Ss,wa="__reactProps$"+Ss,$i="__reactContainer$"+Ss,Lc="__reactEvents$"+Ss,Ox="__reactListeners$"+Ss,Bx="__reactHandles$"+Ss;function Vr(n){var i=n[Di];if(i)return i;for(var a=n.parentNode;a;){if(i=a[$i]||a[Di]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=_h(n);n!==null;){if(a=n[Di])return a;n=_h(n)}return i}n=a,a=n.parentNode}return null}function ba(n){return n=n[Di]||n[$i],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ms(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ro(n){return n[wa]||null}var Dc=[],ws=-1;function mr(n){return{current:n}}function Kt(n){0>ws||(n.current=Dc[ws],Dc[ws]=null,ws--)}function Yt(n,i){ws++,Dc[ws]=n.current,n.current=i}var gr={},Ln=mr(gr),$n=mr(!1),Wr=gr;function bs(n,i){var a=n.type.contextTypes;if(!a)return gr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Xn(n){return n=n.childContextTypes,n!=null}function No(){Kt($n),Kt(Ln)}function yh(n,i,a){if(Ln.current!==gr)throw Error(t(168));Yt(Ln,i),Yt($n,a)}function Sh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,De(n)||"Unknown",f));return q({},a,c)}function Po(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||gr,Wr=Ln.current,Yt(Ln,n),Yt($n,$n.current),!0}function Mh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Sh(n,i,Wr),c.__reactInternalMemoizedMergedChildContext=n,Kt($n),Kt(Ln),Yt(Ln,n)):Kt($n),Yt($n,a)}var Xi=null,Lo=!1,Ic=!1;function wh(n){Xi===null?Xi=[n]:Xi.push(n)}function Gx(n){Lo=!0,wh(n)}function xr(){if(!Ic&&Xi!==null){Ic=!0;var n=0,i=rt;try{var a=Xi;for(rt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Xi=null,Lo=!1}catch(f){throw Xi!==null&&(Xi=Xi.slice(n+1)),aa(la,xr),f}finally{rt=i,Ic=!1}}return null}var Es=[],Ts=0,Do=null,Io=0,li=[],ci=0,jr=null,Yi=1,qi="";function $r(n,i){Es[Ts++]=Io,Es[Ts++]=Do,Do=n,Io=i}function bh(n,i,a){li[ci++]=Yi,li[ci++]=qi,li[ci++]=jr,jr=n;var c=Yi;n=qi;var f=32-le(c)-1;c&=~(1<<f),a+=1;var g=32-le(i)+f;if(30<g){var T=f-f%5;g=(c&(1<<T)-1).toString(32),c>>=T,f-=T,Yi=1<<32-le(i)+f|a<<f|c,qi=g+n}else Yi=1<<g|a<<f|c,qi=n}function Uc(n){n.return!==null&&($r(n,1),bh(n,1,0))}function zc(n){for(;n===Do;)Do=Es[--Ts],Es[Ts]=null,Io=Es[--Ts],Es[Ts]=null;for(;n===jr;)jr=li[--ci],li[ci]=null,qi=li[--ci],li[ci]=null,Yi=li[--ci],li[ci]=null}var ei=null,ti=null,en=!1,xi=null;function Eh(n,i){var a=hi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Th(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ei=n,ti=pr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ei=n,ti=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=jr!==null?{id:Yi,overflow:qi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=hi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,ei=n,ti=null,!0):!1;default:return!1}}function Fc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function kc(n){if(en){var i=ti;if(i){var a=i;if(!Th(n,i)){if(Fc(n))throw Error(t(418));i=pr(a.nextSibling);var c=ei;i&&Th(n,i)?Eh(c,a):(n.flags=n.flags&-4097|2,en=!1,ei=n)}}else{if(Fc(n))throw Error(t(418));n.flags=n.flags&-4097|2,en=!1,ei=n}}}function Ah(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ei=n}function Uo(n){if(n!==ei)return!1;if(!en)return Ah(n),en=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Rc(n.type,n.memoizedProps)),i&&(i=ti)){if(Fc(n))throw Ch(),Error(t(418));for(;i;)Eh(n,i),i=pr(i.nextSibling)}if(Ah(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){ti=pr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}ti=null}}else ti=ei?pr(n.stateNode.nextSibling):null;return!0}function Ch(){for(var n=ti;n;)n=pr(n.nextSibling)}function As(){ti=ei=null,en=!1}function Oc(n){xi===null?xi=[n]:xi.push(n)}var Hx=N.ReactCurrentBatchConfig;function Ea(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var f=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(T){var O=f.refs;T===null?delete O[g]:O[g]=T},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function zo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Rh(n){var i=n._init;return i(n._payload)}function Nh(n){function i(ue,te){if(n){var fe=ue.deletions;fe===null?(ue.deletions=[te],ue.flags|=16):fe.push(te)}}function a(ue,te){if(!n)return null;for(;te!==null;)i(ue,te),te=te.sibling;return null}function c(ue,te){for(ue=new Map;te!==null;)te.key!==null?ue.set(te.key,te):ue.set(te.index,te),te=te.sibling;return ue}function f(ue,te){return ue=Er(ue,te),ue.index=0,ue.sibling=null,ue}function g(ue,te,fe){return ue.index=fe,n?(fe=ue.alternate,fe!==null?(fe=fe.index,fe<te?(ue.flags|=2,te):fe):(ue.flags|=2,te)):(ue.flags|=1048576,te)}function T(ue){return n&&ue.alternate===null&&(ue.flags|=2),ue}function O(ue,te,fe,Oe){return te===null||te.tag!==6?(te=Nu(fe,ue.mode,Oe),te.return=ue,te):(te=f(te,fe),te.return=ue,te)}function Q(ue,te,fe,Oe){var st=fe.type;return st===w?Le(ue,te,fe.props.children,Oe,fe.key):te!==null&&(te.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===re&&Rh(st)===te.type)?(Oe=f(te,fe.props),Oe.ref=Ea(ue,te,fe),Oe.return=ue,Oe):(Oe=al(fe.type,fe.key,fe.props,null,ue.mode,Oe),Oe.ref=Ea(ue,te,fe),Oe.return=ue,Oe)}function me(ue,te,fe,Oe){return te===null||te.tag!==4||te.stateNode.containerInfo!==fe.containerInfo||te.stateNode.implementation!==fe.implementation?(te=Pu(fe,ue.mode,Oe),te.return=ue,te):(te=f(te,fe.children||[]),te.return=ue,te)}function Le(ue,te,fe,Oe,st){return te===null||te.tag!==7?(te=es(fe,ue.mode,Oe,st),te.return=ue,te):(te=f(te,fe),te.return=ue,te)}function Fe(ue,te,fe){if(typeof te=="string"&&te!==""||typeof te=="number")return te=Nu(""+te,ue.mode,fe),te.return=ue,te;if(typeof te=="object"&&te!==null){switch(te.$$typeof){case z:return fe=al(te.type,te.key,te.props,null,ue.mode,fe),fe.ref=Ea(ue,null,te),fe.return=ue,fe;case D:return te=Pu(te,ue.mode,fe),te.return=ue,te;case re:var Oe=te._init;return Fe(ue,Oe(te._payload),fe)}if(zt(te)||Y(te))return te=es(te,ue.mode,fe,null),te.return=ue,te;zo(ue,te)}return null}function Ce(ue,te,fe,Oe){var st=te!==null?te.key:null;if(typeof fe=="string"&&fe!==""||typeof fe=="number")return st!==null?null:O(ue,te,""+fe,Oe);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case z:return fe.key===st?Q(ue,te,fe,Oe):null;case D:return fe.key===st?me(ue,te,fe,Oe):null;case re:return st=fe._init,Ce(ue,te,st(fe._payload),Oe)}if(zt(fe)||Y(fe))return st!==null?null:Le(ue,te,fe,Oe,null);zo(ue,fe)}return null}function qe(ue,te,fe,Oe,st){if(typeof Oe=="string"&&Oe!==""||typeof Oe=="number")return ue=ue.get(fe)||null,O(te,ue,""+Oe,st);if(typeof Oe=="object"&&Oe!==null){switch(Oe.$$typeof){case z:return ue=ue.get(Oe.key===null?fe:Oe.key)||null,Q(te,ue,Oe,st);case D:return ue=ue.get(Oe.key===null?fe:Oe.key)||null,me(te,ue,Oe,st);case re:var ct=Oe._init;return qe(ue,te,fe,ct(Oe._payload),st)}if(zt(Oe)||Y(Oe))return ue=ue.get(fe)||null,Le(te,ue,Oe,st,null);zo(te,Oe)}return null}function nt(ue,te,fe,Oe){for(var st=null,ct=null,ut=te,ht=te=0,bn=null;ut!==null&&ht<fe.length;ht++){ut.index>ht?(bn=ut,ut=null):bn=ut.sibling;var Ot=Ce(ue,ut,fe[ht],Oe);if(Ot===null){ut===null&&(ut=bn);break}n&&ut&&Ot.alternate===null&&i(ue,ut),te=g(Ot,te,ht),ct===null?st=Ot:ct.sibling=Ot,ct=Ot,ut=bn}if(ht===fe.length)return a(ue,ut),en&&$r(ue,ht),st;if(ut===null){for(;ht<fe.length;ht++)ut=Fe(ue,fe[ht],Oe),ut!==null&&(te=g(ut,te,ht),ct===null?st=ut:ct.sibling=ut,ct=ut);return en&&$r(ue,ht),st}for(ut=c(ue,ut);ht<fe.length;ht++)bn=qe(ut,ue,ht,fe[ht],Oe),bn!==null&&(n&&bn.alternate!==null&&ut.delete(bn.key===null?ht:bn.key),te=g(bn,te,ht),ct===null?st=bn:ct.sibling=bn,ct=bn);return n&&ut.forEach(function(Tr){return i(ue,Tr)}),en&&$r(ue,ht),st}function it(ue,te,fe,Oe){var st=Y(fe);if(typeof st!="function")throw Error(t(150));if(fe=st.call(fe),fe==null)throw Error(t(151));for(var ct=st=null,ut=te,ht=te=0,bn=null,Ot=fe.next();ut!==null&&!Ot.done;ht++,Ot=fe.next()){ut.index>ht?(bn=ut,ut=null):bn=ut.sibling;var Tr=Ce(ue,ut,Ot.value,Oe);if(Tr===null){ut===null&&(ut=bn);break}n&&ut&&Tr.alternate===null&&i(ue,ut),te=g(Tr,te,ht),ct===null?st=Tr:ct.sibling=Tr,ct=Tr,ut=bn}if(Ot.done)return a(ue,ut),en&&$r(ue,ht),st;if(ut===null){for(;!Ot.done;ht++,Ot=fe.next())Ot=Fe(ue,Ot.value,Oe),Ot!==null&&(te=g(Ot,te,ht),ct===null?st=Ot:ct.sibling=Ot,ct=Ot);return en&&$r(ue,ht),st}for(ut=c(ue,ut);!Ot.done;ht++,Ot=fe.next())Ot=qe(ut,ue,ht,Ot.value,Oe),Ot!==null&&(n&&Ot.alternate!==null&&ut.delete(Ot.key===null?ht:Ot.key),te=g(Ot,te,ht),ct===null?st=Ot:ct.sibling=Ot,ct=Ot);return n&&ut.forEach(function(Sv){return i(ue,Sv)}),en&&$r(ue,ht),st}function fn(ue,te,fe,Oe){if(typeof fe=="object"&&fe!==null&&fe.type===w&&fe.key===null&&(fe=fe.props.children),typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case z:e:{for(var st=fe.key,ct=te;ct!==null;){if(ct.key===st){if(st=fe.type,st===w){if(ct.tag===7){a(ue,ct.sibling),te=f(ct,fe.props.children),te.return=ue,ue=te;break e}}else if(ct.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===re&&Rh(st)===ct.type){a(ue,ct.sibling),te=f(ct,fe.props),te.ref=Ea(ue,ct,fe),te.return=ue,ue=te;break e}a(ue,ct);break}else i(ue,ct);ct=ct.sibling}fe.type===w?(te=es(fe.props.children,ue.mode,Oe,fe.key),te.return=ue,ue=te):(Oe=al(fe.type,fe.key,fe.props,null,ue.mode,Oe),Oe.ref=Ea(ue,te,fe),Oe.return=ue,ue=Oe)}return T(ue);case D:e:{for(ct=fe.key;te!==null;){if(te.key===ct)if(te.tag===4&&te.stateNode.containerInfo===fe.containerInfo&&te.stateNode.implementation===fe.implementation){a(ue,te.sibling),te=f(te,fe.children||[]),te.return=ue,ue=te;break e}else{a(ue,te);break}else i(ue,te);te=te.sibling}te=Pu(fe,ue.mode,Oe),te.return=ue,ue=te}return T(ue);case re:return ct=fe._init,fn(ue,te,ct(fe._payload),Oe)}if(zt(fe))return nt(ue,te,fe,Oe);if(Y(fe))return it(ue,te,fe,Oe);zo(ue,fe)}return typeof fe=="string"&&fe!==""||typeof fe=="number"?(fe=""+fe,te!==null&&te.tag===6?(a(ue,te.sibling),te=f(te,fe),te.return=ue,ue=te):(a(ue,te),te=Nu(fe,ue.mode,Oe),te.return=ue,ue=te),T(ue)):a(ue,te)}return fn}var Cs=Nh(!0),Ph=Nh(!1),Fo=mr(null),ko=null,Rs=null,Bc=null;function Gc(){Bc=Rs=ko=null}function Hc(n){var i=Fo.current;Kt(Fo),n._currentValue=i}function Vc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ns(n,i){ko=n,Bc=Rs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Yn=!0),n.firstContext=null)}function ui(n){var i=n._currentValue;if(Bc!==n)if(n={context:n,memoizedValue:i,next:null},Rs===null){if(ko===null)throw Error(t(308));Rs=n,ko.dependencies={lanes:0,firstContext:n}}else Rs=Rs.next=n;return i}var Xr=null;function Wc(n){Xr===null?Xr=[n]:Xr.push(n)}function Lh(n,i,a,c){var f=i.interleaved;return f===null?(a.next=a,Wc(i)):(a.next=f.next,f.next=a),i.interleaved=a,Ki(n,c)}function Ki(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var vr=!1;function jc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Zi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function _r(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ft&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Ki(n,a)}return f=c.interleaved,f===null?(i.next=i,Wc(c)):(i.next=f.next,f.next=i),c.interleaved=i,Ki(n,a)}function Oo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,mn(n,a)}}function Ih(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=T:g=g.next=T,a=a.next}while(a!==null);g===null?f=g=i:g=g.next=i}else f=g=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Bo(n,i,a,c){var f=n.updateQueue;vr=!1;var g=f.firstBaseUpdate,T=f.lastBaseUpdate,O=f.shared.pending;if(O!==null){f.shared.pending=null;var Q=O,me=Q.next;Q.next=null,T===null?g=me:T.next=me,T=Q;var Le=n.alternate;Le!==null&&(Le=Le.updateQueue,O=Le.lastBaseUpdate,O!==T&&(O===null?Le.firstBaseUpdate=me:O.next=me,Le.lastBaseUpdate=Q))}if(g!==null){var Fe=f.baseState;T=0,Le=me=Q=null,O=g;do{var Ce=O.lane,qe=O.eventTime;if((c&Ce)===Ce){Le!==null&&(Le=Le.next={eventTime:qe,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var nt=n,it=O;switch(Ce=i,qe=a,it.tag){case 1:if(nt=it.payload,typeof nt=="function"){Fe=nt.call(qe,Fe,Ce);break e}Fe=nt;break e;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=it.payload,Ce=typeof nt=="function"?nt.call(qe,Fe,Ce):nt,Ce==null)break e;Fe=q({},Fe,Ce);break e;case 2:vr=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,Ce=f.effects,Ce===null?f.effects=[O]:Ce.push(O))}else qe={eventTime:qe,lane:Ce,tag:O.tag,payload:O.payload,callback:O.callback,next:null},Le===null?(me=Le=qe,Q=Fe):Le=Le.next=qe,T|=Ce;if(O=O.next,O===null){if(O=f.shared.pending,O===null)break;Ce=O,O=Ce.next,Ce.next=null,f.lastBaseUpdate=Ce,f.shared.pending=null}}while(!0);if(Le===null&&(Q=Fe),f.baseState=Q,f.firstBaseUpdate=me,f.lastBaseUpdate=Le,i=f.shared.interleaved,i!==null){f=i;do T|=f.lane,f=f.next;while(f!==i)}else g===null&&(f.shared.lanes=0);Kr|=T,n.lanes=T,n.memoizedState=Fe}}function Uh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Ta={},Ii=mr(Ta),Aa=mr(Ta),Ca=mr(Ta);function Yr(n){if(n===Ta)throw Error(t(174));return n}function $c(n,i){switch(Yt(Ca,i),Yt(Aa,n),Yt(Ii,Ta),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:gt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=gt(i,n)}Kt(Ii),Yt(Ii,i)}function Ps(){Kt(Ii),Kt(Aa),Kt(Ca)}function zh(n){Yr(Ca.current);var i=Yr(Ii.current),a=gt(i,n.type);i!==a&&(Yt(Aa,n),Yt(Ii,a))}function Xc(n){Aa.current===n&&(Kt(Ii),Kt(Aa))}var nn=mr(0);function Go(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Yc=[];function qc(){for(var n=0;n<Yc.length;n++)Yc[n]._workInProgressVersionPrimary=null;Yc.length=0}var Ho=N.ReactCurrentDispatcher,Kc=N.ReactCurrentBatchConfig,qr=0,rn=null,xn=null,Mn=null,Vo=!1,Ra=!1,Na=0,Vx=0;function Dn(){throw Error(t(321))}function Zc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!gi(n[a],i[a]))return!1;return!0}function Jc(n,i,a,c,f,g){if(qr=g,rn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ho.current=n===null||n.memoizedState===null?Xx:Yx,n=a(c,f),Ra){g=0;do{if(Ra=!1,Na=0,25<=g)throw Error(t(301));g+=1,Mn=xn=null,i.updateQueue=null,Ho.current=qx,n=a(c,f)}while(Ra)}if(Ho.current=$o,i=xn!==null&&xn.next!==null,qr=0,Mn=xn=rn=null,Vo=!1,i)throw Error(t(300));return n}function Qc(){var n=Na!==0;return Na=0,n}function Ui(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mn===null?rn.memoizedState=Mn=n:Mn=Mn.next=n,Mn}function di(){if(xn===null){var n=rn.alternate;n=n!==null?n.memoizedState:null}else n=xn.next;var i=Mn===null?rn.memoizedState:Mn.next;if(i!==null)Mn=i,xn=n;else{if(n===null)throw Error(t(310));xn=n,n={memoizedState:xn.memoizedState,baseState:xn.baseState,baseQueue:xn.baseQueue,queue:xn.queue,next:null},Mn===null?rn.memoizedState=Mn=n:Mn=Mn.next=n}return Mn}function Pa(n,i){return typeof i=="function"?i(n):i}function eu(n){var i=di(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=xn,f=c.baseQueue,g=a.pending;if(g!==null){if(f!==null){var T=f.next;f.next=g.next,g.next=T}c.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,c=c.baseState;var O=T=null,Q=null,me=g;do{var Le=me.lane;if((qr&Le)===Le)Q!==null&&(Q=Q.next={lane:0,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null}),c=me.hasEagerState?me.eagerState:n(c,me.action);else{var Fe={lane:Le,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null};Q===null?(O=Q=Fe,T=c):Q=Q.next=Fe,rn.lanes|=Le,Kr|=Le}me=me.next}while(me!==null&&me!==g);Q===null?T=c:Q.next=O,gi(c,i.memoizedState)||(Yn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=Q,a.lastRenderedState=c}if(n=a.interleaved,n!==null){f=n;do g=f.lane,rn.lanes|=g,Kr|=g,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function tu(n){var i=di(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,f=a.pending,g=i.memoizedState;if(f!==null){a.pending=null;var T=f=f.next;do g=n(g,T.action),T=T.next;while(T!==f);gi(g,i.memoizedState)||(Yn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function Fh(){}function kh(n,i){var a=rn,c=di(),f=i(),g=!gi(c.memoizedState,f);if(g&&(c.memoizedState=f,Yn=!0),c=c.queue,nu(Gh.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||Mn!==null&&Mn.memoizedState.tag&1){if(a.flags|=2048,La(9,Bh.bind(null,a,c,f,i),void 0,null),wn===null)throw Error(t(349));(qr&30)!==0||Oh(a,i,f)}return f}function Oh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=rn.updateQueue,i===null?(i={lastEffect:null,stores:null},rn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Bh(n,i,a,c){i.value=a,i.getSnapshot=c,Hh(i)&&Vh(n)}function Gh(n,i,a){return a(function(){Hh(i)&&Vh(n)})}function Hh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!gi(n,a)}catch{return!0}}function Vh(n){var i=Ki(n,1);i!==null&&Si(i,n,1,-1)}function Wh(n){var i=Ui();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:n},i.queue=n,n=n.dispatch=$x.bind(null,rn,n),[i.memoizedState,n]}function La(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=rn.updateQueue,i===null?(i={lastEffect:null,stores:null},rn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function jh(){return di().memoizedState}function Wo(n,i,a,c){var f=Ui();rn.flags|=n,f.memoizedState=La(1|i,a,void 0,c===void 0?null:c)}function jo(n,i,a,c){var f=di();c=c===void 0?null:c;var g=void 0;if(xn!==null){var T=xn.memoizedState;if(g=T.destroy,c!==null&&Zc(c,T.deps)){f.memoizedState=La(i,a,g,c);return}}rn.flags|=n,f.memoizedState=La(1|i,a,g,c)}function $h(n,i){return Wo(8390656,8,n,i)}function nu(n,i){return jo(2048,8,n,i)}function Xh(n,i){return jo(4,2,n,i)}function Yh(n,i){return jo(4,4,n,i)}function qh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Kh(n,i,a){return a=a!=null?a.concat([n]):null,jo(4,4,qh.bind(null,i,n),a)}function iu(){}function Zh(n,i){var a=di();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Zc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Jh(n,i){var a=di();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Zc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Qh(n,i,a){return(qr&21)===0?(n.baseState&&(n.baseState=!1,Yn=!0),n.memoizedState=a):(gi(a,i)||(a=Wt(),rn.lanes|=a,Kr|=a,n.baseState=!0),i)}function Wx(n,i){var a=rt;rt=a!==0&&4>a?a:4,n(!0);var c=Kc.transition;Kc.transition={};try{n(!1),i()}finally{rt=a,Kc.transition=c}}function ep(){return di().memoizedState}function jx(n,i,a){var c=wr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},tp(n))np(i,a);else if(a=Lh(n,i,a,c),a!==null){var f=Hn();Si(a,n,c,f),ip(a,i,c)}}function $x(n,i,a){var c=wr(n),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(tp(n))np(i,f);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var T=i.lastRenderedState,O=g(T,a);if(f.hasEagerState=!0,f.eagerState=O,gi(O,T)){var Q=i.interleaved;Q===null?(f.next=f,Wc(i)):(f.next=Q.next,Q.next=f),i.interleaved=f;return}}catch{}finally{}a=Lh(n,i,f,c),a!==null&&(f=Hn(),Si(a,n,c,f),ip(a,i,c))}}function tp(n){var i=n.alternate;return n===rn||i!==null&&i===rn}function np(n,i){Ra=Vo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function ip(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,mn(n,a)}}var $o={readContext:ui,useCallback:Dn,useContext:Dn,useEffect:Dn,useImperativeHandle:Dn,useInsertionEffect:Dn,useLayoutEffect:Dn,useMemo:Dn,useReducer:Dn,useRef:Dn,useState:Dn,useDebugValue:Dn,useDeferredValue:Dn,useTransition:Dn,useMutableSource:Dn,useSyncExternalStore:Dn,useId:Dn,unstable_isNewReconciler:!1},Xx={readContext:ui,useCallback:function(n,i){return Ui().memoizedState=[n,i===void 0?null:i],n},useContext:ui,useEffect:$h,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Wo(4194308,4,qh.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Wo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Wo(4,2,n,i)},useMemo:function(n,i){var a=Ui();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ui();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=jx.bind(null,rn,n),[c.memoizedState,n]},useRef:function(n){var i=Ui();return n={current:n},i.memoizedState=n},useState:Wh,useDebugValue:iu,useDeferredValue:function(n){return Ui().memoizedState=n},useTransition:function(){var n=Wh(!1),i=n[0];return n=Wx.bind(null,n[1]),Ui().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=rn,f=Ui();if(en){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),wn===null)throw Error(t(349));(qr&30)!==0||Oh(c,i,a)}f.memoizedState=a;var g={value:a,getSnapshot:i};return f.queue=g,$h(Gh.bind(null,c,g,n),[n]),c.flags|=2048,La(9,Bh.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=Ui(),i=wn.identifierPrefix;if(en){var a=qi,c=Yi;a=(c&~(1<<32-le(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Na++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Vx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Yx={readContext:ui,useCallback:Zh,useContext:ui,useEffect:nu,useImperativeHandle:Kh,useInsertionEffect:Xh,useLayoutEffect:Yh,useMemo:Jh,useReducer:eu,useRef:jh,useState:function(){return eu(Pa)},useDebugValue:iu,useDeferredValue:function(n){var i=di();return Qh(i,xn.memoizedState,n)},useTransition:function(){var n=eu(Pa)[0],i=di().memoizedState;return[n,i]},useMutableSource:Fh,useSyncExternalStore:kh,useId:ep,unstable_isNewReconciler:!1},qx={readContext:ui,useCallback:Zh,useContext:ui,useEffect:nu,useImperativeHandle:Kh,useInsertionEffect:Xh,useLayoutEffect:Yh,useMemo:Jh,useReducer:tu,useRef:jh,useState:function(){return tu(Pa)},useDebugValue:iu,useDeferredValue:function(n){var i=di();return xn===null?i.memoizedState=n:Qh(i,xn.memoizedState,n)},useTransition:function(){var n=tu(Pa)[0],i=di().memoizedState;return[n,i]},useMutableSource:Fh,useSyncExternalStore:kh,useId:ep,unstable_isNewReconciler:!1};function vi(n,i){if(n&&n.defaultProps){i=q({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function ru(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:q({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Xo={isMounted:function(n){return(n=n._reactInternals)?Rn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Hn(),f=wr(n),g=Zi(c,f);g.payload=i,a!=null&&(g.callback=a),i=_r(n,g,f),i!==null&&(Si(i,n,f,c),Oo(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Hn(),f=wr(n),g=Zi(c,f);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=_r(n,g,f),i!==null&&(Si(i,n,f,c),Oo(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Hn(),c=wr(n),f=Zi(a,c);f.tag=2,i!=null&&(f.callback=i),i=_r(n,f,c),i!==null&&(Si(i,n,c,a),Oo(i,n,c))}};function rp(n,i,a,c,f,g,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,T):i.prototype&&i.prototype.isPureReactComponent?!va(a,c)||!va(f,g):!0}function sp(n,i,a){var c=!1,f=gr,g=i.contextType;return typeof g=="object"&&g!==null?g=ui(g):(f=Xn(i)?Wr:Ln.current,c=i.contextTypes,g=(c=c!=null)?bs(n,f):gr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Xo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=g),i}function ap(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Xo.enqueueReplaceState(i,i.state,null)}function su(n,i,a,c){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},jc(n);var g=i.contextType;typeof g=="object"&&g!==null?f.context=ui(g):(g=Xn(i)?Wr:Ln.current,f.context=bs(n,g)),f.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(ru(n,i,g,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Xo.enqueueReplaceState(f,f.state,null),Bo(n,a,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Ls(n,i){try{var a="",c=i;do a+=V(c),c=c.return;while(c);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:f,digest:null}}function au(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function ou(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Kx=typeof WeakMap=="function"?WeakMap:Map;function op(n,i,a){a=Zi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){el||(el=!0,Mu=c),ou(n,i)},a}function lp(n,i,a){a=Zi(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){ou(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){ou(n,i),typeof c!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function cp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Kx;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),n=uv.bind(null,n,i,a),i.then(n,n))}function up(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function dp(n,i,a,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Zi(-1,1),i.tag=2,_r(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var Zx=N.ReactCurrentOwner,Yn=!1;function Gn(n,i,a,c){i.child=n===null?Ph(i,null,a,c):Cs(i,n.child,a,c)}function fp(n,i,a,c,f){a=a.render;var g=i.ref;return Ns(i,f),c=Jc(n,i,a,c,g,f),a=Qc(),n!==null&&!Yn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Ji(n,i,f)):(en&&a&&Uc(i),i.flags|=1,Gn(n,i,c,f),i.child)}function hp(n,i,a,c,f){if(n===null){var g=a.type;return typeof g=="function"&&!Ru(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,pp(n,i,g,c,f)):(n=al(a.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&f)===0){var T=g.memoizedProps;if(a=a.compare,a=a!==null?a:va,a(T,c)&&n.ref===i.ref)return Ji(n,i,f)}return i.flags|=1,n=Er(g,c),n.ref=i.ref,n.return=i,i.child=n}function pp(n,i,a,c,f){if(n!==null){var g=n.memoizedProps;if(va(g,c)&&n.ref===i.ref)if(Yn=!1,i.pendingProps=c=g,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Yn=!0);else return i.lanes=n.lanes,Ji(n,i,f)}return lu(n,i,a,c,f)}function mp(n,i,a){var c=i.pendingProps,f=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Yt(Is,ni),ni|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Yt(Is,ni),ni|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,Yt(Is,ni),ni|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,Yt(Is,ni),ni|=c;return Gn(n,i,f,a),i.child}function gp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function lu(n,i,a,c,f){var g=Xn(a)?Wr:Ln.current;return g=bs(i,g),Ns(i,f),a=Jc(n,i,a,c,g,f),c=Qc(),n!==null&&!Yn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Ji(n,i,f)):(en&&c&&Uc(i),i.flags|=1,Gn(n,i,a,f),i.child)}function xp(n,i,a,c,f){if(Xn(a)){var g=!0;Po(i)}else g=!1;if(Ns(i,f),i.stateNode===null)qo(n,i),sp(i,a,c),su(i,a,c,f),c=!0;else if(n===null){var T=i.stateNode,O=i.memoizedProps;T.props=O;var Q=T.context,me=a.contextType;typeof me=="object"&&me!==null?me=ui(me):(me=Xn(a)?Wr:Ln.current,me=bs(i,me));var Le=a.getDerivedStateFromProps,Fe=typeof Le=="function"||typeof T.getSnapshotBeforeUpdate=="function";Fe||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==c||Q!==me)&&ap(i,T,c,me),vr=!1;var Ce=i.memoizedState;T.state=Ce,Bo(i,c,T,f),Q=i.memoizedState,O!==c||Ce!==Q||$n.current||vr?(typeof Le=="function"&&(ru(i,a,Le,c),Q=i.memoizedState),(O=vr||rp(i,a,O,c,Ce,Q,me))?(Fe||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=Q),T.props=c,T.state=Q,T.context=me,c=O):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,Dh(n,i),O=i.memoizedProps,me=i.type===i.elementType?O:vi(i.type,O),T.props=me,Fe=i.pendingProps,Ce=T.context,Q=a.contextType,typeof Q=="object"&&Q!==null?Q=ui(Q):(Q=Xn(a)?Wr:Ln.current,Q=bs(i,Q));var qe=a.getDerivedStateFromProps;(Le=typeof qe=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==Fe||Ce!==Q)&&ap(i,T,c,Q),vr=!1,Ce=i.memoizedState,T.state=Ce,Bo(i,c,T,f);var nt=i.memoizedState;O!==Fe||Ce!==nt||$n.current||vr?(typeof qe=="function"&&(ru(i,a,qe,c),nt=i.memoizedState),(me=vr||rp(i,a,me,c,Ce,nt,Q)||!1)?(Le||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,nt,Q),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,nt,Q)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||O===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=nt),T.props=c,T.state=nt,T.context=Q,c=me):(typeof T.componentDidUpdate!="function"||O===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=1024),c=!1)}return cu(n,i,a,c,g,f)}function cu(n,i,a,c,f,g){gp(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return f&&Mh(i,a,!1),Ji(n,i,g);c=i.stateNode,Zx.current=i;var O=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=Cs(i,n.child,null,g),i.child=Cs(i,null,O,g)):Gn(n,i,O,g),i.memoizedState=c.state,f&&Mh(i,a,!0),i.child}function vp(n){var i=n.stateNode;i.pendingContext?yh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&yh(n,i.context,!1),$c(n,i.containerInfo)}function _p(n,i,a,c,f){return As(),Oc(f),i.flags|=256,Gn(n,i,a,c),i.child}var uu={dehydrated:null,treeContext:null,retryLane:0};function du(n){return{baseLanes:n,cachePool:null,transitions:null}}function yp(n,i,a){var c=i.pendingProps,f=nn.current,g=!1,T=(i.flags&128)!==0,O;if((O=T)||(O=n!==null&&n.memoizedState===null?!1:(f&2)!==0),O?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Yt(nn,f&1),n===null)return kc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,g?(c=i.mode,g=i.child,T={mode:"hidden",children:T},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=T):g=ol(T,c,0,null),n=es(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=du(a),i.memoizedState=uu,n):fu(i,T));if(f=n.memoizedState,f!==null&&(O=f.dehydrated,O!==null))return Jx(n,i,T,c,O,f,a);if(g){g=c.fallback,T=i.mode,f=n.child,O=f.sibling;var Q={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=Q,i.deletions=null):(c=Er(f,Q),c.subtreeFlags=f.subtreeFlags&14680064),O!==null?g=Er(O,g):(g=es(g,T,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,T=n.child.memoizedState,T=T===null?du(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},g.memoizedState=T,g.childLanes=n.childLanes&~a,i.memoizedState=uu,c}return g=n.child,n=g.sibling,c=Er(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function fu(n,i){return i=ol({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Yo(n,i,a,c){return c!==null&&Oc(c),Cs(i,n.child,null,a),n=fu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Jx(n,i,a,c,f,g,T){if(a)return i.flags&256?(i.flags&=-257,c=au(Error(t(422))),Yo(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,f=i.mode,c=ol({mode:"visible",children:c.children},f,0,null),g=es(g,f,T,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&Cs(i,n.child,null,T),i.child.memoizedState=du(T),i.memoizedState=uu,g);if((i.mode&1)===0)return Yo(n,i,T,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var O=c.dgst;return c=O,g=Error(t(419)),c=au(g,c,void 0),Yo(n,i,T,c)}if(O=(T&n.childLanes)!==0,Yn||O){if(c=wn,c!==null){switch(T&-T){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|T))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Ki(n,f),Si(c,n,f,-1))}return Cu(),c=au(Error(t(421))),Yo(n,i,T,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=dv.bind(null,n),f._reactRetry=i,null):(n=g.treeContext,ti=pr(f.nextSibling),ei=i,en=!0,xi=null,n!==null&&(li[ci++]=Yi,li[ci++]=qi,li[ci++]=jr,Yi=n.id,qi=n.overflow,jr=i),i=fu(i,c.children),i.flags|=4096,i)}function Sp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Vc(n.return,i,a)}function hu(n,i,a,c,f){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=f)}function Mp(n,i,a){var c=i.pendingProps,f=c.revealOrder,g=c.tail;if(Gn(n,i,c.children,a),c=nn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Sp(n,a,i);else if(n.tag===19)Sp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Yt(nn,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&Go(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),hu(i,!1,f,a,g);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Go(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}hu(i,!0,a,null,g);break;case"together":hu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function qo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ji(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Kr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Er(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Er(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Qx(n,i,a){switch(i.tag){case 3:vp(i),As();break;case 5:zh(i);break;case 1:Xn(i.type)&&Po(i);break;case 4:$c(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Yt(Fo,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Yt(nn,nn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?yp(n,i,a):(Yt(nn,nn.current&1),n=Ji(n,i,a),n!==null?n.sibling:null);Yt(nn,nn.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Mp(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Yt(nn,nn.current),c)break;return null;case 22:case 23:return i.lanes=0,mp(n,i,a)}return Ji(n,i,a)}var wp,pu,bp,Ep;wp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},pu=function(){},bp=function(n,i,a,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,Yr(Ii.current);var g=null;switch(a){case"input":f=je(n,f),c=je(n,c),g=[];break;case"select":f=q({},f,{value:void 0}),c=q({},c,{value:void 0}),g=[];break;case"textarea":f=Vt(n,f),c=Vt(n,c),g=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Co)}_e(a,c);var T;a=null;for(me in f)if(!c.hasOwnProperty(me)&&f.hasOwnProperty(me)&&f[me]!=null)if(me==="style"){var O=f[me];for(T in O)O.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else me!=="dangerouslySetInnerHTML"&&me!=="children"&&me!=="suppressContentEditableWarning"&&me!=="suppressHydrationWarning"&&me!=="autoFocus"&&(o.hasOwnProperty(me)?g||(g=[]):(g=g||[]).push(me,null));for(me in c){var Q=c[me];if(O=f!=null?f[me]:void 0,c.hasOwnProperty(me)&&Q!==O&&(Q!=null||O!=null))if(me==="style")if(O){for(T in O)!O.hasOwnProperty(T)||Q&&Q.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in Q)Q.hasOwnProperty(T)&&O[T]!==Q[T]&&(a||(a={}),a[T]=Q[T])}else a||(g||(g=[]),g.push(me,a)),a=Q;else me==="dangerouslySetInnerHTML"?(Q=Q?Q.__html:void 0,O=O?O.__html:void 0,Q!=null&&O!==Q&&(g=g||[]).push(me,Q)):me==="children"?typeof Q!="string"&&typeof Q!="number"||(g=g||[]).push(me,""+Q):me!=="suppressContentEditableWarning"&&me!=="suppressHydrationWarning"&&(o.hasOwnProperty(me)?(Q!=null&&me==="onScroll"&&qt("scroll",n),g||O===Q||(g=[])):(g=g||[]).push(me,Q))}a&&(g=g||[]).push("style",a);var me=g;(i.updateQueue=me)&&(i.flags|=4)}},Ep=function(n,i,a,c){a!==c&&(i.flags|=4)};function Da(n,i){if(!en)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function In(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function ev(n,i,a){var c=i.pendingProps;switch(zc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return In(i),null;case 1:return Xn(i.type)&&No(),In(i),null;case 3:return c=i.stateNode,Ps(),Kt($n),Kt(Ln),qc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Uo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,xi!==null&&(Eu(xi),xi=null))),pu(n,i),In(i),null;case 5:Xc(i);var f=Yr(Ca.current);if(a=i.type,n!==null&&i.stateNode!=null)bp(n,i,a,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return In(i),null}if(n=Yr(Ii.current),Uo(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[Di]=i,c[wa]=g,n=(i.mode&1)!==0,a){case"dialog":qt("cancel",c),qt("close",c);break;case"iframe":case"object":case"embed":qt("load",c);break;case"video":case"audio":for(f=0;f<ya.length;f++)qt(ya[f],c);break;case"source":qt("error",c);break;case"img":case"image":case"link":qt("error",c),qt("load",c);break;case"details":qt("toggle",c);break;case"input":St(c,g),qt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},qt("invalid",c);break;case"textarea":tn(c,g),qt("invalid",c)}_e(a,g),f=null;for(var T in g)if(g.hasOwnProperty(T)){var O=g[T];T==="children"?typeof O=="string"?c.textContent!==O&&(g.suppressHydrationWarning!==!0&&Ao(c.textContent,O,n),f=["children",O]):typeof O=="number"&&c.textContent!==""+O&&(g.suppressHydrationWarning!==!0&&Ao(c.textContent,O,n),f=["children",""+O]):o.hasOwnProperty(T)&&O!=null&&T==="onScroll"&&qt("scroll",c)}switch(a){case"input":He(c),Mt(c,g,!0);break;case"textarea":He(c),Ht(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Co)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Ct(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[Di]=i,n[wa]=c,wp(n,i,!1,!1),i.stateNode=n;e:{switch(T=Ue(a,c),a){case"dialog":qt("cancel",n),qt("close",n),f=c;break;case"iframe":case"object":case"embed":qt("load",n),f=c;break;case"video":case"audio":for(f=0;f<ya.length;f++)qt(ya[f],n);f=c;break;case"source":qt("error",n),f=c;break;case"img":case"image":case"link":qt("error",n),qt("load",n),f=c;break;case"details":qt("toggle",n),f=c;break;case"input":St(n,c),f=je(n,c),qt("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=q({},c,{value:void 0}),qt("invalid",n);break;case"textarea":tn(n,c),f=Vt(n,c),qt("invalid",n);break;default:f=c}_e(a,f),O=f;for(g in O)if(O.hasOwnProperty(g)){var Q=O[g];g==="style"?oe(n,Q):g==="dangerouslySetInnerHTML"?(Q=Q?Q.__html:void 0,Q!=null&&Pt(n,Q)):g==="children"?typeof Q=="string"?(a!=="textarea"||Q!=="")&&Ye(n,Q):typeof Q=="number"&&Ye(n,""+Q):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?Q!=null&&g==="onScroll"&&qt("scroll",n):Q!=null&&F(n,g,Q,T))}switch(a){case"input":He(n),Mt(n,c,!1);break;case"textarea":He(n),Ht(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?$t(n,!!c.multiple,g,!1):c.defaultValue!=null&&$t(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Co)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return In(i),null;case 6:if(n&&i.stateNode!=null)Ep(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Yr(Ca.current),Yr(Ii.current),Uo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Di]=i,(g=c.nodeValue!==a)&&(n=ei,n!==null))switch(n.tag){case 3:Ao(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ao(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Di]=i,i.stateNode=c}return In(i),null;case 13:if(Kt(nn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(en&&ti!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Ch(),As(),i.flags|=98560,g=!1;else if(g=Uo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Di]=i}else As(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;In(i),g=!1}else xi!==null&&(Eu(xi),xi=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(nn.current&1)!==0?vn===0&&(vn=3):Cu())),i.updateQueue!==null&&(i.flags|=4),In(i),null);case 4:return Ps(),pu(n,i),n===null&&Sa(i.stateNode.containerInfo),In(i),null;case 10:return Hc(i.type._context),In(i),null;case 17:return Xn(i.type)&&No(),In(i),null;case 19:if(Kt(nn),g=i.memoizedState,g===null)return In(i),null;if(c=(i.flags&128)!==0,T=g.rendering,T===null)if(c)Da(g,!1);else{if(vn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=Go(n),T!==null){for(i.flags|=128,Da(g,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,T=g.alternate,T===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=T.childLanes,g.lanes=T.lanes,g.child=T.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=T.memoizedProps,g.memoizedState=T.memoizedState,g.updateQueue=T.updateQueue,g.type=T.type,n=T.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Yt(nn,nn.current&1|2),i.child}n=n.sibling}g.tail!==null&&Jt()>Us&&(i.flags|=128,c=!0,Da(g,!1),i.lanes=4194304)}else{if(!c)if(n=Go(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Da(g,!0),g.tail===null&&g.tailMode==="hidden"&&!T.alternate&&!en)return In(i),null}else 2*Jt()-g.renderingStartTime>Us&&a!==1073741824&&(i.flags|=128,c=!0,Da(g,!1),i.lanes=4194304);g.isBackwards?(T.sibling=i.child,i.child=T):(a=g.last,a!==null?a.sibling=T:i.child=T,g.last=T)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Jt(),i.sibling=null,a=nn.current,Yt(nn,c?a&1|2:a&1),i):(In(i),null);case 22:case 23:return Au(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ni&1073741824)!==0&&(In(i),i.subtreeFlags&6&&(i.flags|=8192)):In(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function tv(n,i){switch(zc(i),i.tag){case 1:return Xn(i.type)&&No(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ps(),Kt($n),Kt(Ln),qc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Xc(i),null;case 13:if(Kt(nn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));As()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Kt(nn),null;case 4:return Ps(),null;case 10:return Hc(i.type._context),null;case 22:case 23:return Au(),null;case 24:return null;default:return null}}var Ko=!1,Un=!1,nv=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function Ds(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){cn(n,i,c)}else a.current=null}function mu(n,i,a){try{a()}catch(c){cn(n,i,c)}}var Tp=!1;function iv(n,i){if(Ac=go,n=rh(),_c(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var T=0,O=-1,Q=-1,me=0,Le=0,Fe=n,Ce=null;t:for(;;){for(var qe;Fe!==a||f!==0&&Fe.nodeType!==3||(O=T+f),Fe!==g||c!==0&&Fe.nodeType!==3||(Q=T+c),Fe.nodeType===3&&(T+=Fe.nodeValue.length),(qe=Fe.firstChild)!==null;)Ce=Fe,Fe=qe;for(;;){if(Fe===n)break t;if(Ce===a&&++me===f&&(O=T),Ce===g&&++Le===c&&(Q=T),(qe=Fe.nextSibling)!==null)break;Fe=Ce,Ce=Fe.parentNode}Fe=qe}a=O===-1||Q===-1?null:{start:O,end:Q}}else a=null}a=a||{start:0,end:0}}else a=null;for(Cc={focusedElem:n,selectionRange:a},go=!1,Ze=i;Ze!==null;)if(i=Ze,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ze=n;else for(;Ze!==null;){i=Ze;try{var nt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(nt!==null){var it=nt.memoizedProps,fn=nt.memoizedState,ue=i.stateNode,te=ue.getSnapshotBeforeUpdate(i.elementType===i.type?it:vi(i.type,it),fn);ue.__reactInternalSnapshotBeforeUpdate=te}break;case 3:var fe=i.stateNode.containerInfo;fe.nodeType===1?fe.textContent="":fe.nodeType===9&&fe.documentElement&&fe.removeChild(fe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Oe){cn(i,i.return,Oe)}if(n=i.sibling,n!==null){n.return=i.return,Ze=n;break}Ze=i.return}return nt=Tp,Tp=!1,nt}function Ia(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var g=f.destroy;f.destroy=void 0,g!==void 0&&mu(i,a,g)}f=f.next}while(f!==c)}}function Zo(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function gu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Ap(n){var i=n.alternate;i!==null&&(n.alternate=null,Ap(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Di],delete i[wa],delete i[Lc],delete i[Ox],delete i[Bx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Cp(n){return n.tag===5||n.tag===3||n.tag===4}function Rp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Cp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function xu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Co));else if(c!==4&&(n=n.child,n!==null))for(xu(n,i,a),n=n.sibling;n!==null;)xu(n,i,a),n=n.sibling}function vu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(vu(n,i,a),n=n.sibling;n!==null;)vu(n,i,a),n=n.sibling}var Tn=null,_i=!1;function yr(n,i,a){for(a=a.child;a!==null;)Np(n,i,a),a=a.sibling}function Np(n,i,a){if(de&&typeof de.onCommitFiberUnmount=="function")try{de.onCommitFiberUnmount(Z,a)}catch{}switch(a.tag){case 5:Un||Ds(a,i);case 6:var c=Tn,f=_i;Tn=null,yr(n,i,a),Tn=c,_i=f,Tn!==null&&(_i?(n=Tn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Tn.removeChild(a.stateNode));break;case 18:Tn!==null&&(_i?(n=Tn,a=a.stateNode,n.nodeType===8?Pc(n.parentNode,a):n.nodeType===1&&Pc(n,a),fa(n)):Pc(Tn,a.stateNode));break;case 4:c=Tn,f=_i,Tn=a.stateNode.containerInfo,_i=!0,yr(n,i,a),Tn=c,_i=f;break;case 0:case 11:case 14:case 15:if(!Un&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var g=f,T=g.destroy;g=g.tag,T!==void 0&&((g&2)!==0||(g&4)!==0)&&mu(a,i,T),f=f.next}while(f!==c)}yr(n,i,a);break;case 1:if(!Un&&(Ds(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(O){cn(a,i,O)}yr(n,i,a);break;case 21:yr(n,i,a);break;case 22:a.mode&1?(Un=(c=Un)||a.memoizedState!==null,yr(n,i,a),Un=c):yr(n,i,a);break;default:yr(n,i,a)}}function Pp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new nv),i.forEach(function(c){var f=fv.bind(null,n,c);a.has(c)||(a.add(c),c.then(f,f))})}}function yi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var g=n,T=i,O=T;e:for(;O!==null;){switch(O.tag){case 5:Tn=O.stateNode,_i=!1;break e;case 3:Tn=O.stateNode.containerInfo,_i=!0;break e;case 4:Tn=O.stateNode.containerInfo,_i=!0;break e}O=O.return}if(Tn===null)throw Error(t(160));Np(g,T,f),Tn=null,_i=!1;var Q=f.alternate;Q!==null&&(Q.return=null),f.return=null}catch(me){cn(f,i,me)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Lp(i,n),i=i.sibling}function Lp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(yi(i,n),zi(n),c&4){try{Ia(3,n,n.return),Zo(3,n)}catch(it){cn(n,n.return,it)}try{Ia(5,n,n.return)}catch(it){cn(n,n.return,it)}}break;case 1:yi(i,n),zi(n),c&512&&a!==null&&Ds(a,a.return);break;case 5:if(yi(i,n),zi(n),c&512&&a!==null&&Ds(a,a.return),n.flags&32){var f=n.stateNode;try{Ye(f,"")}catch(it){cn(n,n.return,it)}}if(c&4&&(f=n.stateNode,f!=null)){var g=n.memoizedProps,T=a!==null?a.memoizedProps:g,O=n.type,Q=n.updateQueue;if(n.updateQueue=null,Q!==null)try{O==="input"&&g.type==="radio"&&g.name!=null&&xt(f,g),Ue(O,T);var me=Ue(O,g);for(T=0;T<Q.length;T+=2){var Le=Q[T],Fe=Q[T+1];Le==="style"?oe(f,Fe):Le==="dangerouslySetInnerHTML"?Pt(f,Fe):Le==="children"?Ye(f,Fe):F(f,Le,Fe,me)}switch(O){case"input":Nt(f,g);break;case"textarea":K(f,g);break;case"select":var Ce=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var qe=g.value;qe!=null?$t(f,!!g.multiple,qe,!1):Ce!==!!g.multiple&&(g.defaultValue!=null?$t(f,!!g.multiple,g.defaultValue,!0):$t(f,!!g.multiple,g.multiple?[]:"",!1))}f[wa]=g}catch(it){cn(n,n.return,it)}}break;case 6:if(yi(i,n),zi(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,g=n.memoizedProps;try{f.nodeValue=g}catch(it){cn(n,n.return,it)}}break;case 3:if(yi(i,n),zi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{fa(i.containerInfo)}catch(it){cn(n,n.return,it)}break;case 4:yi(i,n),zi(n);break;case 13:yi(i,n),zi(n),f=n.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(Su=Jt())),c&4&&Pp(n);break;case 22:if(Le=a!==null&&a.memoizedState!==null,n.mode&1?(Un=(me=Un)||Le,yi(i,n),Un=me):yi(i,n),zi(n),c&8192){if(me=n.memoizedState!==null,(n.stateNode.isHidden=me)&&!Le&&(n.mode&1)!==0)for(Ze=n,Le=n.child;Le!==null;){for(Fe=Ze=Le;Ze!==null;){switch(Ce=Ze,qe=Ce.child,Ce.tag){case 0:case 11:case 14:case 15:Ia(4,Ce,Ce.return);break;case 1:Ds(Ce,Ce.return);var nt=Ce.stateNode;if(typeof nt.componentWillUnmount=="function"){c=Ce,a=Ce.return;try{i=c,nt.props=i.memoizedProps,nt.state=i.memoizedState,nt.componentWillUnmount()}catch(it){cn(c,a,it)}}break;case 5:Ds(Ce,Ce.return);break;case 22:if(Ce.memoizedState!==null){Up(Fe);continue}}qe!==null?(qe.return=Ce,Ze=qe):Up(Fe)}Le=Le.sibling}e:for(Le=null,Fe=n;;){if(Fe.tag===5){if(Le===null){Le=Fe;try{f=Fe.stateNode,me?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(O=Fe.stateNode,Q=Fe.memoizedProps.style,T=Q!=null&&Q.hasOwnProperty("display")?Q.display:null,O.style.display=E("display",T))}catch(it){cn(n,n.return,it)}}}else if(Fe.tag===6){if(Le===null)try{Fe.stateNode.nodeValue=me?"":Fe.memoizedProps}catch(it){cn(n,n.return,it)}}else if((Fe.tag!==22&&Fe.tag!==23||Fe.memoizedState===null||Fe===n)&&Fe.child!==null){Fe.child.return=Fe,Fe=Fe.child;continue}if(Fe===n)break e;for(;Fe.sibling===null;){if(Fe.return===null||Fe.return===n)break e;Le===Fe&&(Le=null),Fe=Fe.return}Le===Fe&&(Le=null),Fe.sibling.return=Fe.return,Fe=Fe.sibling}}break;case 19:yi(i,n),zi(n),c&4&&Pp(n);break;case 21:break;default:yi(i,n),zi(n)}}function zi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Cp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(Ye(f,""),c.flags&=-33);var g=Rp(n);vu(n,g,f);break;case 3:case 4:var T=c.stateNode.containerInfo,O=Rp(n);xu(n,O,T);break;default:throw Error(t(161))}}catch(Q){cn(n,n.return,Q)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function rv(n,i,a){Ze=n,Dp(n)}function Dp(n,i,a){for(var c=(n.mode&1)!==0;Ze!==null;){var f=Ze,g=f.child;if(f.tag===22&&c){var T=f.memoizedState!==null||Ko;if(!T){var O=f.alternate,Q=O!==null&&O.memoizedState!==null||Un;O=Ko;var me=Un;if(Ko=T,(Un=Q)&&!me)for(Ze=f;Ze!==null;)T=Ze,Q=T.child,T.tag===22&&T.memoizedState!==null?zp(f):Q!==null?(Q.return=T,Ze=Q):zp(f);for(;g!==null;)Ze=g,Dp(g),g=g.sibling;Ze=f,Ko=O,Un=me}Ip(n)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,Ze=g):Ip(n)}}function Ip(n){for(;Ze!==null;){var i=Ze;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Un||Zo(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Un)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:vi(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Uh(i,g,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Uh(i,T,a)}break;case 5:var O=i.stateNode;if(a===null&&i.flags&4){a=O;var Q=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":Q.autoFocus&&a.focus();break;case"img":Q.src&&(a.src=Q.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var me=i.alternate;if(me!==null){var Le=me.memoizedState;if(Le!==null){var Fe=Le.dehydrated;Fe!==null&&fa(Fe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Un||i.flags&512&&gu(i)}catch(Ce){cn(i,i.return,Ce)}}if(i===n){Ze=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ze=a;break}Ze=i.return}}function Up(n){for(;Ze!==null;){var i=Ze;if(i===n){Ze=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ze=a;break}Ze=i.return}}function zp(n){for(;Ze!==null;){var i=Ze;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Zo(4,i)}catch(Q){cn(i,a,Q)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(Q){cn(i,f,Q)}}var g=i.return;try{gu(i)}catch(Q){cn(i,g,Q)}break;case 5:var T=i.return;try{gu(i)}catch(Q){cn(i,T,Q)}}}catch(Q){cn(i,i.return,Q)}if(i===n){Ze=null;break}var O=i.sibling;if(O!==null){O.return=i.return,Ze=O;break}Ze=i.return}}var sv=Math.ceil,Jo=N.ReactCurrentDispatcher,_u=N.ReactCurrentOwner,fi=N.ReactCurrentBatchConfig,Ft=0,wn=null,hn=null,An=0,ni=0,Is=mr(0),vn=0,Ua=null,Kr=0,Qo=0,yu=0,za=null,qn=null,Su=0,Us=1/0,Qi=null,el=!1,Mu=null,Sr=null,tl=!1,Mr=null,nl=0,Fa=0,wu=null,il=-1,rl=0;function Hn(){return(Ft&6)!==0?Jt():il!==-1?il:il=Jt()}function wr(n){return(n.mode&1)===0?1:(Ft&2)!==0&&An!==0?An&-An:Hx.transition!==null?(rl===0&&(rl=Wt()),rl):(n=rt,n!==0||(n=window.event,n=n===void 0?16:kf(n.type)),n)}function Si(n,i,a,c){if(50<Fa)throw Fa=0,wu=null,Error(t(185));ln(n,a,c),((Ft&2)===0||n!==wn)&&(n===wn&&((Ft&2)===0&&(Qo|=a),vn===4&&br(n,An)),Kn(n,c),a===1&&Ft===0&&(i.mode&1)===0&&(Us=Jt()+500,Lo&&xr()))}function Kn(n,i){var a=n.callbackNode;Et(n,i);var c=vt(n,n===wn?An:0);if(c===0)a!==null&&oa(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&oa(a),i===1)n.tag===0?Gx(kp.bind(null,n)):wh(kp.bind(null,n)),Fx(function(){(Ft&6)===0&&xr()}),a=null;else{switch(Pi(c)){case 1:a=la;break;case 4:a=ho;break;case 16:a=ps;break;case 536870912:a=A;break;default:a=ps}a=$p(a,Fp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Fp(n,i){if(il=-1,rl=0,(Ft&6)!==0)throw Error(t(327));var a=n.callbackNode;if(zs()&&n.callbackNode!==a)return null;var c=vt(n,n===wn?An:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=sl(n,c);else{i=c;var f=Ft;Ft|=2;var g=Bp();(wn!==n||An!==i)&&(Qi=null,Us=Jt()+500,Jr(n,i));do try{lv();break}catch(O){Op(n,O)}while(!0);Gc(),Jo.current=g,Ft=f,hn!==null?i=0:(wn=null,An=0,i=vn)}if(i!==0){if(i===2&&(f=Qt(n),f!==0&&(c=f,i=bu(n,f))),i===1)throw a=Ua,Jr(n,0),br(n,c),Kn(n,Jt()),a;if(i===6)br(n,c);else{if(f=n.current.alternate,(c&30)===0&&!av(f)&&(i=sl(n,c),i===2&&(g=Qt(n),g!==0&&(c=g,i=bu(n,g))),i===1))throw a=Ua,Jr(n,0),br(n,c),Kn(n,Jt()),a;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Qr(n,qn,Qi);break;case 3:if(br(n,c),(c&130023424)===c&&(i=Su+500-Jt(),10<i)){if(vt(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){Hn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Nc(Qr.bind(null,n,qn,Qi),i);break}Qr(n,qn,Qi);break;case 4:if(br(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var T=31-le(c);g=1<<T,T=i[T],T>f&&(f=T),c&=~g}if(c=f,c=Jt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*sv(c/1960))-c,10<c){n.timeoutHandle=Nc(Qr.bind(null,n,qn,Qi),c);break}Qr(n,qn,Qi);break;case 5:Qr(n,qn,Qi);break;default:throw Error(t(329))}}}return Kn(n,Jt()),n.callbackNode===a?Fp.bind(null,n):null}function bu(n,i){var a=za;return n.current.memoizedState.isDehydrated&&(Jr(n,i).flags|=256),n=sl(n,i),n!==2&&(i=qn,qn=a,i!==null&&Eu(i)),n}function Eu(n){qn===null?qn=n:qn.push.apply(qn,n)}function av(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],g=f.getSnapshot;f=f.value;try{if(!gi(g(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function br(n,i){for(i&=~yu,i&=~Qo,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-le(i),c=1<<a;n[a]=-1,i&=~c}}function kp(n){if((Ft&6)!==0)throw Error(t(327));zs();var i=vt(n,0);if((i&1)===0)return Kn(n,Jt()),null;var a=sl(n,i);if(n.tag!==0&&a===2){var c=Qt(n);c!==0&&(i=c,a=bu(n,c))}if(a===1)throw a=Ua,Jr(n,0),br(n,i),Kn(n,Jt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Qr(n,qn,Qi),Kn(n,Jt()),null}function Tu(n,i){var a=Ft;Ft|=1;try{return n(i)}finally{Ft=a,Ft===0&&(Us=Jt()+500,Lo&&xr())}}function Zr(n){Mr!==null&&Mr.tag===0&&(Ft&6)===0&&zs();var i=Ft;Ft|=1;var a=fi.transition,c=rt;try{if(fi.transition=null,rt=1,n)return n()}finally{rt=c,fi.transition=a,Ft=i,(Ft&6)===0&&xr()}}function Au(){ni=Is.current,Kt(Is)}function Jr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,zx(a)),hn!==null)for(a=hn.return;a!==null;){var c=a;switch(zc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&No();break;case 3:Ps(),Kt($n),Kt(Ln),qc();break;case 5:Xc(c);break;case 4:Ps();break;case 13:Kt(nn);break;case 19:Kt(nn);break;case 10:Hc(c.type._context);break;case 22:case 23:Au()}a=a.return}if(wn=n,hn=n=Er(n.current,null),An=ni=i,vn=0,Ua=null,yu=Qo=Kr=0,qn=za=null,Xr!==null){for(i=0;i<Xr.length;i++)if(a=Xr[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,g=a.pending;if(g!==null){var T=g.next;g.next=f,c.next=T}a.pending=c}Xr=null}return n}function Op(n,i){do{var a=hn;try{if(Gc(),Ho.current=$o,Vo){for(var c=rn.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Vo=!1}if(qr=0,Mn=xn=rn=null,Ra=!1,Na=0,_u.current=null,a===null||a.return===null){vn=1,Ua=i,hn=null;break}e:{var g=n,T=a.return,O=a,Q=i;if(i=An,O.flags|=32768,Q!==null&&typeof Q=="object"&&typeof Q.then=="function"){var me=Q,Le=O,Fe=Le.tag;if((Le.mode&1)===0&&(Fe===0||Fe===11||Fe===15)){var Ce=Le.alternate;Ce?(Le.updateQueue=Ce.updateQueue,Le.memoizedState=Ce.memoizedState,Le.lanes=Ce.lanes):(Le.updateQueue=null,Le.memoizedState=null)}var qe=up(T);if(qe!==null){qe.flags&=-257,dp(qe,T,O,g,i),qe.mode&1&&cp(g,me,i),i=qe,Q=me;var nt=i.updateQueue;if(nt===null){var it=new Set;it.add(Q),i.updateQueue=it}else nt.add(Q);break e}else{if((i&1)===0){cp(g,me,i),Cu();break e}Q=Error(t(426))}}else if(en&&O.mode&1){var fn=up(T);if(fn!==null){(fn.flags&65536)===0&&(fn.flags|=256),dp(fn,T,O,g,i),Oc(Ls(Q,O));break e}}g=Q=Ls(Q,O),vn!==4&&(vn=2),za===null?za=[g]:za.push(g),g=T;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var ue=op(g,Q,i);Ih(g,ue);break e;case 1:O=Q;var te=g.type,fe=g.stateNode;if((g.flags&128)===0&&(typeof te.getDerivedStateFromError=="function"||fe!==null&&typeof fe.componentDidCatch=="function"&&(Sr===null||!Sr.has(fe)))){g.flags|=65536,i&=-i,g.lanes|=i;var Oe=lp(g,O,i);Ih(g,Oe);break e}}g=g.return}while(g!==null)}Hp(a)}catch(st){i=st,hn===a&&a!==null&&(hn=a=a.return);continue}break}while(!0)}function Bp(){var n=Jo.current;return Jo.current=$o,n===null?$o:n}function Cu(){(vn===0||vn===3||vn===2)&&(vn=4),wn===null||(Kr&268435455)===0&&(Qo&268435455)===0||br(wn,An)}function sl(n,i){var a=Ft;Ft|=2;var c=Bp();(wn!==n||An!==i)&&(Qi=null,Jr(n,i));do try{ov();break}catch(f){Op(n,f)}while(!0);if(Gc(),Ft=a,Jo.current=c,hn!==null)throw Error(t(261));return wn=null,An=0,vn}function ov(){for(;hn!==null;)Gp(hn)}function lv(){for(;hn!==null&&!Hr();)Gp(hn)}function Gp(n){var i=jp(n.alternate,n,ni);n.memoizedProps=n.pendingProps,i===null?Hp(n):hn=i,_u.current=null}function Hp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=ev(a,i,ni),a!==null){hn=a;return}}else{if(a=tv(a,i),a!==null){a.flags&=32767,hn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{vn=6,hn=null;return}}if(i=i.sibling,i!==null){hn=i;return}hn=i=n}while(i!==null);vn===0&&(vn=5)}function Qr(n,i,a){var c=rt,f=fi.transition;try{fi.transition=null,rt=1,cv(n,i,a,c)}finally{fi.transition=f,rt=c}return null}function cv(n,i,a,c){do zs();while(Mr!==null);if((Ft&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(et(n,g),n===wn&&(hn=wn=null,An=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||tl||(tl=!0,$p(ps,function(){return zs(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=fi.transition,fi.transition=null;var T=rt;rt=1;var O=Ft;Ft|=4,_u.current=null,iv(n,a),Lp(a,n),Rx(Cc),go=!!Ac,Cc=Ac=null,n.current=a,rv(a),oc(),Ft=O,rt=T,fi.transition=g}else n.current=a;if(tl&&(tl=!1,Mr=n,nl=f),g=n.pendingLanes,g===0&&(Sr=null),ce(a.stateNode),Kn(n,Jt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(el)throw el=!1,n=Mu,Mu=null,n;return(nl&1)!==0&&n.tag!==0&&zs(),g=n.pendingLanes,(g&1)!==0?n===wu?Fa++:(Fa=0,wu=n):Fa=0,xr(),null}function zs(){if(Mr!==null){var n=Pi(nl),i=fi.transition,a=rt;try{if(fi.transition=null,rt=16>n?16:n,Mr===null)var c=!1;else{if(n=Mr,Mr=null,nl=0,(Ft&6)!==0)throw Error(t(331));var f=Ft;for(Ft|=4,Ze=n.current;Ze!==null;){var g=Ze,T=g.child;if((Ze.flags&16)!==0){var O=g.deletions;if(O!==null){for(var Q=0;Q<O.length;Q++){var me=O[Q];for(Ze=me;Ze!==null;){var Le=Ze;switch(Le.tag){case 0:case 11:case 15:Ia(8,Le,g)}var Fe=Le.child;if(Fe!==null)Fe.return=Le,Ze=Fe;else for(;Ze!==null;){Le=Ze;var Ce=Le.sibling,qe=Le.return;if(Ap(Le),Le===me){Ze=null;break}if(Ce!==null){Ce.return=qe,Ze=Ce;break}Ze=qe}}}var nt=g.alternate;if(nt!==null){var it=nt.child;if(it!==null){nt.child=null;do{var fn=it.sibling;it.sibling=null,it=fn}while(it!==null)}}Ze=g}}if((g.subtreeFlags&2064)!==0&&T!==null)T.return=g,Ze=T;else e:for(;Ze!==null;){if(g=Ze,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Ia(9,g,g.return)}var ue=g.sibling;if(ue!==null){ue.return=g.return,Ze=ue;break e}Ze=g.return}}var te=n.current;for(Ze=te;Ze!==null;){T=Ze;var fe=T.child;if((T.subtreeFlags&2064)!==0&&fe!==null)fe.return=T,Ze=fe;else e:for(T=te;Ze!==null;){if(O=Ze,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:Zo(9,O)}}catch(st){cn(O,O.return,st)}if(O===T){Ze=null;break e}var Oe=O.sibling;if(Oe!==null){Oe.return=O.return,Ze=Oe;break e}Ze=O.return}}if(Ft=f,xr(),de&&typeof de.onPostCommitFiberRoot=="function")try{de.onPostCommitFiberRoot(Z,n)}catch{}c=!0}return c}finally{rt=a,fi.transition=i}}return!1}function Vp(n,i,a){i=Ls(a,i),i=op(n,i,1),n=_r(n,i,1),i=Hn(),n!==null&&(ln(n,1,i),Kn(n,i))}function cn(n,i,a){if(n.tag===3)Vp(n,n,a);else for(;i!==null;){if(i.tag===3){Vp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Sr===null||!Sr.has(c))){n=Ls(a,n),n=lp(i,n,1),i=_r(i,n,1),n=Hn(),i!==null&&(ln(i,1,n),Kn(i,n));break}}i=i.return}}function uv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Hn(),n.pingedLanes|=n.suspendedLanes&a,wn===n&&(An&a)===a&&(vn===4||vn===3&&(An&130023424)===An&&500>Jt()-Su?Jr(n,0):yu|=a),Kn(n,i)}function Wp(n,i){i===0&&((n.mode&1)===0?i=1:(i=Je,Je<<=1,(Je&130023424)===0&&(Je=4194304)));var a=Hn();n=Ki(n,i),n!==null&&(ln(n,i,a),Kn(n,a))}function dv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Wp(n,a)}function fv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Wp(n,a)}var jp;jp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||$n.current)Yn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Yn=!1,Qx(n,i,a);Yn=(n.flags&131072)!==0}else Yn=!1,en&&(i.flags&1048576)!==0&&bh(i,Io,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;qo(n,i),n=i.pendingProps;var f=bs(i,Ln.current);Ns(i,a),f=Jc(null,i,c,n,f,a);var g=Qc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Xn(c)?(g=!0,Po(i)):g=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,jc(i),f.updater=Xo,i.stateNode=f,f._reactInternals=i,su(i,c,n,a),i=cu(null,i,c,!0,g,a)):(i.tag=0,en&&g&&Uc(i),Gn(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(qo(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=pv(c),n=vi(c,n),f){case 0:i=lu(null,i,c,n,a);break e;case 1:i=xp(null,i,c,n,a);break e;case 11:i=fp(null,i,c,n,a);break e;case 14:i=hp(null,i,c,vi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:vi(c,f),lu(n,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:vi(c,f),xp(n,i,c,f,a);case 3:e:{if(vp(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,f=g.element,Dh(n,i),Bo(i,c,null,a);var T=i.memoizedState;if(c=T.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){f=Ls(Error(t(423)),i),i=_p(n,i,c,a,f);break e}else if(c!==f){f=Ls(Error(t(424)),i),i=_p(n,i,c,a,f);break e}else for(ti=pr(i.stateNode.containerInfo.firstChild),ei=i,en=!0,xi=null,a=Ph(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(As(),c===f){i=Ji(n,i,a);break e}Gn(n,i,c,a)}i=i.child}return i;case 5:return zh(i),n===null&&kc(i),c=i.type,f=i.pendingProps,g=n!==null?n.memoizedProps:null,T=f.children,Rc(c,f)?T=null:g!==null&&Rc(c,g)&&(i.flags|=32),gp(n,i),Gn(n,i,T,a),i.child;case 6:return n===null&&kc(i),null;case 13:return yp(n,i,a);case 4:return $c(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Cs(i,null,c,a):Gn(n,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:vi(c,f),fp(n,i,c,f,a);case 7:return Gn(n,i,i.pendingProps,a),i.child;case 8:return Gn(n,i,i.pendingProps.children,a),i.child;case 12:return Gn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,g=i.memoizedProps,T=f.value,Yt(Fo,c._currentValue),c._currentValue=T,g!==null)if(gi(g.value,T)){if(g.children===f.children&&!$n.current){i=Ji(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var O=g.dependencies;if(O!==null){T=g.child;for(var Q=O.firstContext;Q!==null;){if(Q.context===c){if(g.tag===1){Q=Zi(-1,a&-a),Q.tag=2;var me=g.updateQueue;if(me!==null){me=me.shared;var Le=me.pending;Le===null?Q.next=Q:(Q.next=Le.next,Le.next=Q),me.pending=Q}}g.lanes|=a,Q=g.alternate,Q!==null&&(Q.lanes|=a),Vc(g.return,a,i),O.lanes|=a;break}Q=Q.next}}else if(g.tag===10)T=g.type===i.type?null:g.child;else if(g.tag===18){if(T=g.return,T===null)throw Error(t(341));T.lanes|=a,O=T.alternate,O!==null&&(O.lanes|=a),Vc(T,a,i),T=g.sibling}else T=g.child;if(T!==null)T.return=g;else for(T=g;T!==null;){if(T===i){T=null;break}if(g=T.sibling,g!==null){g.return=T.return,T=g;break}T=T.return}g=T}Gn(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Ns(i,a),f=ui(f),c=c(f),i.flags|=1,Gn(n,i,c,a),i.child;case 14:return c=i.type,f=vi(c,i.pendingProps),f=vi(c.type,f),hp(n,i,c,f,a);case 15:return pp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:vi(c,f),qo(n,i),i.tag=1,Xn(c)?(n=!0,Po(i)):n=!1,Ns(i,a),sp(i,c,f),su(i,c,f,a),cu(null,i,c,!0,n,a);case 19:return Mp(n,i,a);case 22:return mp(n,i,a)}throw Error(t(156,i.tag))};function $p(n,i){return aa(n,i)}function hv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(n,i,a,c){return new hv(n,i,a,c)}function Ru(n){return n=n.prototype,!(!n||!n.isReactComponent)}function pv(n){if(typeof n=="function")return Ru(n)?1:0;if(n!=null){if(n=n.$$typeof,n===H)return 11;if(n===G)return 14}return 2}function Er(n,i){var a=n.alternate;return a===null?(a=hi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function al(n,i,a,c,f,g){var T=2;if(c=n,typeof n=="function")Ru(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case w:return es(a.children,f,g,i);case P:T=8,f|=8;break;case ee:return n=hi(12,a,i,f|2),n.elementType=ee,n.lanes=g,n;case j:return n=hi(13,a,i,f),n.elementType=j,n.lanes=g,n;case W:return n=hi(19,a,i,f),n.elementType=W,n.lanes=g,n;case J:return ol(a,f,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case B:T=10;break e;case X:T=9;break e;case H:T=11;break e;case G:T=14;break e;case re:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=hi(T,a,i,f),i.elementType=n,i.type=c,i.lanes=g,i}function es(n,i,a,c){return n=hi(7,n,c,i),n.lanes=a,n}function ol(n,i,a,c){return n=hi(22,n,c,i),n.elementType=J,n.lanes=a,n.stateNode={isHidden:!1},n}function Nu(n,i,a){return n=hi(6,n,null,i),n.lanes=a,n}function Pu(n,i,a){return i=hi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function mv(n,i,a,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bt(0),this.expirationTimes=Bt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bt(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Lu(n,i,a,c,f,g,T,O,Q){return n=new mv(n,i,a,O,Q),i===1?(i=1,g===!0&&(i|=8)):i=0,g=hi(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},jc(g),n}function gv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Xp(n){if(!n)return gr;n=n._reactInternals;e:{if(Rn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Xn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Xn(a))return Sh(n,a,i)}return i}function Yp(n,i,a,c,f,g,T,O,Q){return n=Lu(a,c,!0,n,f,g,T,O,Q),n.context=Xp(null),a=n.current,c=Hn(),f=wr(a),g=Zi(c,f),g.callback=i??null,_r(a,g,f),n.current.lanes=f,ln(n,f,c),Kn(n,c),n}function ll(n,i,a,c){var f=i.current,g=Hn(),T=wr(f);return a=Xp(a),i.context===null?i.context=a:i.pendingContext=a,i=Zi(g,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=_r(f,i,T),n!==null&&(Si(n,f,T,g),Oo(n,f,T)),T}function cl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function qp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Du(n,i){qp(n,i),(n=n.alternate)&&qp(n,i)}function xv(){return null}var Kp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Iu(n){this._internalRoot=n}ul.prototype.render=Iu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ll(n,i,null,null)},ul.prototype.unmount=Iu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Zr(function(){ll(null,n,null,null)}),i[$i]=null}};function ul(n){this._internalRoot=n}ul.prototype.unstable_scheduleHydration=function(n){if(n){var i=Li();n={blockedOn:null,target:n,priority:i};for(var a=0;a<dr.length&&i!==0&&i<dr[a].priority;a++);dr.splice(a,0,n),a===0&&zf(n)}};function Uu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function dl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Zp(){}function vv(n,i,a,c,f){if(f){if(typeof c=="function"){var g=c;c=function(){var me=cl(T);g.call(me)}}var T=Yp(i,c,n,0,null,!1,!1,"",Zp);return n._reactRootContainer=T,n[$i]=T.current,Sa(n.nodeType===8?n.parentNode:n),Zr(),T}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var O=c;c=function(){var me=cl(Q);O.call(me)}}var Q=Lu(n,0,!1,null,null,!1,!1,"",Zp);return n._reactRootContainer=Q,n[$i]=Q.current,Sa(n.nodeType===8?n.parentNode:n),Zr(function(){ll(i,Q,a,c)}),Q}function fl(n,i,a,c,f){var g=a._reactRootContainer;if(g){var T=g;if(typeof f=="function"){var O=f;f=function(){var Q=cl(T);O.call(Q)}}ll(i,T,n,f)}else T=vv(a,i,n,f,c);return cl(T)}gn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=dt(i.pendingLanes);a!==0&&(mn(i,a|1),Kn(i,Jt()),(Ft&6)===0&&(Us=Jt()+500,xr()))}break;case 13:Zr(function(){var c=Ki(n,1);if(c!==null){var f=Hn();Si(c,n,1,f)}}),Du(n,1)}},cr=function(n){if(n.tag===13){var i=Ki(n,134217728);if(i!==null){var a=Hn();Si(i,n,134217728,a)}Du(n,134217728)}},mi=function(n){if(n.tag===13){var i=wr(n),a=Ki(n,i);if(a!==null){var c=Hn();Si(a,n,i,c)}Du(n,i)}},Li=function(){return rt},Rt=function(n,i){var a=rt;try{return rt=n,i()}finally{rt=a}},ae=function(n,i,a){switch(i){case"input":if(Nt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var f=Ro(c);if(!f)throw Error(t(90));Re(c),Nt(c,f)}}}break;case"textarea":K(n,a);break;case"select":i=a.value,i!=null&&$t(n,!!a.multiple,i,!1)}},Te=Tu,Pe=Zr;var _v={usingClientEntryPoint:!1,Events:[ba,Ms,Ro,he,Ne,Tu]},ka={findFiberByHostInstance:Vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yv={bundleType:ka.bundleType,version:ka.version,rendererPackageName:ka.rendererPackageName,rendererConfig:ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=sa(n),n===null?null:n.stateNode},findFiberByHostInstance:ka.findFiberByHostInstance||xv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{Z=hl.inject(yv),de=hl}catch{}}return Zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_v,Zn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uu(i))throw Error(t(200));return gv(n,i,null,a)},Zn.createRoot=function(n,i){if(!Uu(n))throw Error(t(299));var a=!1,c="",f=Kp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Lu(n,1,!1,null,null,a,!1,c,f),n[$i]=i.current,Sa(n.nodeType===8?n.parentNode:n),new Iu(i)},Zn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=sa(i),n=n===null?null:n.stateNode,n},Zn.flushSync=function(n){return Zr(n)},Zn.hydrate=function(n,i,a){if(!dl(i))throw Error(t(200));return fl(null,n,i,!0,a)},Zn.hydrateRoot=function(n,i,a){if(!Uu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,g="",T=Kp;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=Yp(i,null,n,1,a??null,f,!1,g,T),n[$i]=i.current,Sa(n),c)for(n=0;n<c.length;n++)a=c[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new ul(i)},Zn.render=function(n,i,a){if(!dl(i))throw Error(t(200));return fl(null,n,i,!1,a)},Zn.unmountComponentAtNode=function(n){if(!dl(n))throw Error(t(40));return n._reactRootContainer?(Zr(function(){fl(null,null,n,!1,function(){n._reactRootContainer=null,n[$i]=null})}),!0):!1},Zn.unstable_batchedUpdates=Tu,Zn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!dl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return fl(n,i,a,!1,c)},Zn.version="18.3.1-next-f1338f8080-20240426",Zn}var sm;function Pv(){if(sm)return ku.exports;sm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ku.exports=Nv(),ku.exports}var am;function Lv(){if(am)return pl;am=1;var s=Pv();return pl.createRoot=s.createRoot,pl.hydrateRoot=s.hydrateRoot,pl}var Dv=Lv();const Iv=o0(Dv),Ks=[{id:"brown-noise",title:"Brownian Deep Focus",category:"Deep Focus",tagline:"Warm sub-bass rumble for continuous coding & writing",description:"Mathematically integrated brownian spectrum with deep 450Hz low-pass rolloff. Proven to mask background distractions and alleviate cognitive fatigue.",frequency:"0 – 450 Hz Brown Spectrum",accentColor:"#f59e0b"},{id:"celestial-drone",title:"Celestial 432Hz Drone",category:"Mindfulness",tagline:"Harmonically tuned meditative Tibetan chords",description:"Multi-oscillator harmonic chord centered around the natural 432Hz tuning fork with gentle phase chorus and slow breathing resonance.",frequency:"432 Hz Pythagorean Fundamental",accentColor:"#a855f7"},{id:"binaural-gamma",title:"Gamma 40Hz Flow State",category:"Cognitive Flow",tagline:"High-cognition binaural carrier for intense problem-solving",description:"Stereo carrier tones (200Hz L / 240Hz R) inducing 40Hz gamma oscillations in the cerebral cortex, associated with high-level information processing and recall.",frequency:"40 Hz Gamma Difference Wave",accentColor:"#38bdf8"},{id:"binaural-alpha",title:"Alpha 10Hz Quiet Mind",category:"Mindfulness",tagline:"Calm relaxed alertness for reading and reflection",description:"Stereo carrier tones (210Hz L / 220Hz R) stimulating 10Hz alpha rhythms, optimal for sustained reading, journaling, and stress reduction.",frequency:"10 Hz Alpha Difference Wave",accentColor:"#34d399"},{id:"rain-storm",title:"Midnight Rain Sanctuary",category:"Deep Focus",tagline:"Gentle nocturnal rainfall with rolling thunder",description:"Procedurally shaped pink noise with gentle resonant filtering, simulating a peaceful rain shower against cabin windows in deep space.",frequency:"Pink Noise Spectrum & Low Rumble",accentColor:"#818cf8"}];class Uv{constructor(){er(this,"ctx",null);er(this,"masterGain",null);er(this,"analyser",null);er(this,"activeNodes",[]);er(this,"currentId",null);er(this,"_isPlaying",!1);er(this,"_volume",.65);er(this,"_isMuted",!1)}initContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this._isMuted?0:this._volume,this.ctx.currentTime),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=64,this.analyser.smoothingTimeConstant=.85,this.masterGain.connect(this.analyser),this.analyser.connect(this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume()}get isPlaying(){return this._isPlaying}get currentSoundscape(){return this.currentId}get volume(){return this._volume}get isMuted(){return this._isMuted}getAnalyser(){return this.analyser}setVolume(e){if(this._volume=Math.max(0,Math.min(1,e)),this.masterGain&&this.ctx){const t=this._isMuted?0:this._volume;this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime),this.masterGain.gain.linearRampToValueAtTime(t,this.ctx.currentTime+.05)}}toggleMute(){return this._isMuted=!this._isMuted,this.setVolume(this._volume),this._isMuted}stop(){!this.ctx||!this._isPlaying||(this.masterGain&&(this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime),this.masterGain.gain.linearRampToValueAtTime(.001,this.ctx.currentTime+.12)),setTimeout(()=>{this.cleanupNodes(),this._isPlaying=!1,this.currentId=null},130))}cleanupNodes(){for(const e of this.activeNodes)try{"stop"in e&&typeof e.stop=="function"&&e.stop(),e.disconnect()}catch{}this.activeNodes=[]}play(e){if(this.initContext(),!(!this.ctx||!this.masterGain)&&!(this._isPlaying&&this.currentId===e))switch(this.cleanupNodes(),this.currentId=e,this._isPlaying=!0,this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime),this.masterGain.gain.setValueAtTime(.001,this.ctx.currentTime),this.masterGain.gain.linearRampToValueAtTime(this._isMuted?0:this._volume,this.ctx.currentTime+.4),e){case"brown-noise":this.buildBrownNoise();break;case"celestial-drone":this.buildCelestialDrone();break;case"binaural-gamma":this.buildBinauralBeat(200,40);break;case"binaural-alpha":this.buildBinauralBeat(210,10);break;case"rain-storm":this.buildRainStorm();break}}buildBrownNoise(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.sampleRate*5,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),r=t.getChannelData(0);let o=0;for(let d=0;d<e;d++){const h=Math.random()*2-1;o=(o+.02*h)/1.02,r[d]=o*3.2}const l=2048;for(let d=0;d<l;d++){const h=d/l;r[d]=r[d]*h+r[e-l+d]*(1-h)}const u=this.ctx.createBufferSource();u.buffer=t,u.loop=!0;const p=this.ctx.createBiquadFilter();p.type="lowpass",p.frequency.setValueAtTime(450,this.ctx.currentTime),p.Q.setValueAtTime(.7,this.ctx.currentTime),u.connect(p),p.connect(this.masterGain),u.start(),this.activeNodes.push(u,p)}buildCelestialDrone(){if(!this.ctx||!this.masterGain)return;const e=216,t=[e,e*1.5,e*2,e*2.5],r=[-4,3,-2,5];t.forEach((o,l)=>{if(!this.ctx||!this.masterGain)return;const u=this.ctx.createOscillator();u.type=l%2===0?"sine":"triangle",u.frequency.setValueAtTime(o,this.ctx.currentTime),u.detune.setValueAtTime(r[l],this.ctx.currentTime);const p=this.ctx.createGain();p.gain.setValueAtTime(.18/(l+1),this.ctx.currentTime);const d=this.ctx.createOscillator();d.frequency.setValueAtTime(.08+l*.03,this.ctx.currentTime);const h=this.ctx.createGain();h.gain.setValueAtTime(.04,this.ctx.currentTime),d.connect(h),h.connect(p.gain),u.connect(p),p.connect(this.masterGain),u.start(),d.start(),this.activeNodes.push(u,d,p,h)})}buildBinauralBeat(e,t){if(!this.ctx||!this.masterGain)return;const r=this.ctx.createOscillator();r.type="sine",r.frequency.setValueAtTime(e,this.ctx.currentTime);const o=this.ctx.createGain();o.gain.setValueAtTime(.22,this.ctx.currentTime);const l=this.ctx.createOscillator();l.type="sine",l.frequency.setValueAtTime(e+t,this.ctx.currentTime);const u=this.ctx.createGain();u.gain.setValueAtTime(.22,this.ctx.currentTime);const p=this.ctx.createChannelMerger(2);r.connect(o),o.connect(p,0,0),l.connect(u),u.connect(p,0,1);const d=this.ctx.createOscillator();d.type="triangle",d.frequency.setValueAtTime(e/2,this.ctx.currentTime);const h=this.ctx.createGain();h.gain.setValueAtTime(.08,this.ctx.currentTime),d.connect(h),h.connect(this.masterGain),p.connect(this.masterGain),r.start(),l.start(),d.start(),this.activeNodes.push(r,l,d,o,u,h,p)}buildRainStorm(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.sampleRate*4,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),r=t.getChannelData(0);let o=0,l=0,u=0,p=0,d=0,h=0,x=0;for(let M=0;M<e;M++){const b=Math.random()*2-1;o=.99886*o+b*.0555179,l=.99332*l+b*.0750759,u=.969*u+b*.153852,p=.8665*p+b*.3104856,d=.55*d+b*.5329522,h=-.7616*h-b*.016898,r[M]=(o+l+u+p+d+h+x+b*.5362)*.12,x=b*.115926}const v=this.ctx.createBufferSource();v.buffer=t,v.loop=!0;const _=this.ctx.createBiquadFilter();_.type="lowpass",_.frequency.setValueAtTime(1200,this.ctx.currentTime),v.connect(_),_.connect(this.masterGain),v.start(),this.activeNodes.push(v,_)}}const as=new Uv;class zv{startKeepAlive(){}stopKeepAlive(){}updateMetadata(e){if(!(typeof window>"u"||!("mediaSession"in navigator)))try{const t=e.artworkUrl?[{src:e.artworkUrl,sizes:"96x96",type:"image/jpeg"},{src:e.artworkUrl,sizes:"128x128",type:"image/jpeg"},{src:e.artworkUrl,sizes:"192x192",type:"image/jpeg"},{src:e.artworkUrl,sizes:"256x256",type:"image/jpeg"},{src:e.artworkUrl,sizes:"512x512",type:"image/jpeg"}]:[];navigator.mediaSession.metadata=new MediaMetadata({title:e.title||"FOR ME Sanctuary",artist:e.artist||"Private Life Ledger",album:e.album||"Sanctuary Audio",artwork:t}),navigator.mediaSession.playbackState="playing",navigator.mediaSession.setActionHandler("play",()=>{e.onPlay(),navigator.mediaSession.playbackState="playing"}),navigator.mediaSession.setActionHandler("pause",()=>{e.onPause(),navigator.mediaSession.playbackState="paused"}),e.onNext?navigator.mediaSession.setActionHandler("nexttrack",e.onNext):navigator.mediaSession.setActionHandler("nexttrack",null),e.onPrev?navigator.mediaSession.setActionHandler("previoustrack",e.onPrev):navigator.mediaSession.setActionHandler("previoustrack",null)}catch(t){console.warn("[MediaSession] Metadata update error:",t)}}setPlaybackState(e){if(!(typeof window>"u"||!("mediaSession"in navigator)))try{navigator.mediaSession.playbackState=e}catch{}}}const Ei=new zv;function Fv(s){if(!s||typeof s!="string")return null;const e=s.trim();let t,r;const o=e.match(/[?&]list=([a-zA-Z0-9_-]+)/);o&&o[1]&&(r=o[1]);const l=e.match(/[?&]v=([a-zA-Z0-9_-]{11})/);if(l&&l[1]&&(t=l[1]),!t){const p=e.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);p&&p[1]&&(t=p[1])}if(!t){const p=e.match(/youtube\.com\/(?:live|embed|v|shorts)\/([a-zA-Z0-9_-]{11})/);p&&p[1]&&(t=p[1])}if(!t&&!r&&/^[a-zA-Z0-9_-]{11}$/.test(e)&&(t=e),!t&&!r&&/^(?:PL|RD|UU|FL|OLAK5uy_)[a-zA-Z0-9_-]+$/.test(e)&&(r=e),!t&&!r)return null;let u="video";return r&&t?u="video_in_playlist":r&&(u="playlist"),{type:u,videoId:t,playlistId:r,cleanUrl:e}}function kv(s){return s?`https://img.youtube.com/vi/${s}/hqdefault.jpg`:"https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=600&auto=format&fit=crop"}const $l=[{id:"lofi-girl-main",title:"Lofi Girl — Beats to Relax / Study to",type:"video",videoId:"jfKfPfyJRdk",url:"https://www.youtube.com/watch?v=jfKfPfyJRdk",channel:"Lofi Girl",thumbnailUrl:"https://img.youtube.com/vi/jfKfPfyJRdk/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"synthwave-chilledcow",title:"Synthwave Radio — Chill Beats to Code & Chill",type:"video",videoId:"4xDzrJKXOOY",url:"https://www.youtube.com/watch?v=4xDzrJKXOOY",channel:"Lofi Girl / Synthwave Boy",thumbnailUrl:"https://img.youtube.com/vi/4xDzrJKXOOY/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"deep-focus-ambient",title:"Deep Focus Ambient — Flow State Alpha Waves",type:"video",videoId:"lTRiuFIWV54",url:"https://www.youtube.com/watch?v=lTRiuFIWV54",channel:"Greenred Productions",thumbnailUrl:"https://img.youtube.com/vi/lTRiuFIWV54/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"peaceful-piano-solitude",title:"Peaceful Piano & Soft Rain — Gentle Solitude",type:"video",videoId:"1WUEk0R79_Q",url:"https://www.youtube.com/watch?v=1WUEk0R79_Q",channel:"Quiet Quest",thumbnailUrl:"https://img.youtube.com/vi/1WUEk0R79_Q/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"classical-focus-mozart",title:"Classical Focus — Mozart, Beethoven, Bach",type:"video",videoId:"WPni755-Krg",url:"https://www.youtube.com/watch?v=WPni755-Krg",channel:"HALIDONMUSIC",thumbnailUrl:"https://img.youtube.com/vi/WPni755-Krg/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"cozy-coffee-shop-lofi",title:"Cozy Coffee Shop Lofi — Rainy Night Ambience",type:"video",videoId:"-5KAN9_CzSA",url:"https://www.youtube.com/watch?v=-5KAN9_CzSA",channel:"Calmed by Nature",thumbnailUrl:"https://img.youtube.com/vi/-5KAN9_CzSA/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()}],l0=be.createContext(void 0),Ba={palette:"cosmic-royal",speed:"balanced",amplitude:"majestic",waveGeometry:"dunes",waveLayerDensity:"deep",celestialBody:"crescent-moon",showNebulaDust:!0,showConstellations:!0,showComet:!0,shootingStarMode:"occasional",showStars:!0,showCrossStars:!1,showOrbitalTrack:!1,showMeridian:!1,clockFontStyle:"tabular",clockSize:"standard",clockFormat:"12h",showSeconds:!0,showDate:!0,showGreeting:!0,clockHalo:"pulsar"},ml={name:"Azan",motto:"Remember, you are here for you.",defaultFocusTopic:"Engineering",defaultFocusMode:"Deep Work"},Gu=[{id:"r1",title:"Morning Protocol",timeRange:"06:00 – 09:00",description:"Hydration, natural sunlight, 30-min movement, deep work session.",iconType:"morning"},{id:"r2",title:"Core Deep Work",timeRange:"09:00 – 17:00",description:"High-leverage engineering problem solving, core building goals, focused sprints.",iconType:"afternoon"},{id:"r3",title:"Evening Wind-Down",timeRange:"17:00 – 22:30",description:"Reflection, physical cooldown, reading, digital sunset and deep recovery.",iconType:"evening"}],Ov=({children:s})=>{const[e,t]=be.useState(()=>{try{const L=localStorage.getItem("for_me_profile");if(L){const ye=JSON.parse(L);return ye.name==="Viren"?{...ml,name:"Azan"}:{...ml,...ye}}return ml}catch{return ml}}),r=L=>{t(ye=>{const ve={...ye,...L};return localStorage.setItem("for_me_profile",JSON.stringify(ve)),ve})};be.useEffect(()=>{localStorage.setItem("for_me_profile",JSON.stringify(e))},[e]);const[o,l]=be.useState(()=>{try{return localStorage.getItem("for_me_app_theme")==="light"?"light":"dark"}catch{return"dark"}}),u=()=>{l(L=>L==="light"?"dark":"light")};be.useEffect(()=>{localStorage.setItem("for_me_app_theme",o),o==="light"?(document.documentElement.classList.add("theme-light"),document.documentElement.classList.remove("theme-dark")):(document.documentElement.classList.add("theme-dark"),document.documentElement.classList.remove("theme-light"))},[o]);const[p,d]=be.useState(()=>{try{const L=localStorage.getItem("for_me_is_hud_hidden");return L?JSON.parse(L):!1}catch{return!1}}),h=()=>d(L=>!L);be.useEffect(()=>{localStorage.setItem("for_me_is_hud_hidden",JSON.stringify(p))},[p]);const[x,v]=be.useState(()=>{try{return localStorage.getItem("for_me_wallpaper_theme")||"cosmic-cliffs"}catch{return"cosmic-cliffs"}});be.useEffect(()=>{localStorage.setItem("for_me_wallpaper_theme",x)},[x]);const[_,M]=be.useState(()=>{try{const L=localStorage.getItem("for_me_wallpaper_settings_v3")||localStorage.getItem("for_me_wallpaper_settings_v2");return L?{...Ba,...JSON.parse(L)}:Ba}catch{return Ba}}),b=L=>{M(ye=>{const ve={...ye,...L};return localStorage.setItem("for_me_wallpaper_settings_v3",JSON.stringify(ve)),ve})},C=()=>{M(Ba),localStorage.setItem("for_me_wallpaper_settings_v3",JSON.stringify(Ba))},[y,S]=be.useState(()=>{try{const L=localStorage.getItem("for_me_tasks");return L?JSON.parse(L):[{id:"1",text:"Core engineering deep focus sprint",completed:!1},{id:"2",text:"System architecture review & refinement",completed:!1},{id:"3",text:"Physical movement & hydration (8 glasses)",completed:!1}]}catch{return[{id:"1",text:"Core engineering deep focus sprint",completed:!1}]}});be.useEffect(()=>{localStorage.setItem("for_me_tasks",JSON.stringify(y))},[y]);const R=L=>{S(ye=>ye.map(ve=>ve.id===L?{...ve,completed:!ve.completed,completedAt:ve.completed?void 0:new Date().toISOString()}:ve))},F=L=>{if(!L.trim())return;const ye={id:`task_${Date.now()}`,text:L.trim(),completed:!1};S(ve=>[ye,...ve])},N=L=>{S(ye=>ye.filter(ve=>ve.id!==L))},[z,D]=be.useState(()=>{try{const L=localStorage.getItem("for_me_habits");return L?JSON.parse(L):[{id:"h1",name:"Deep Focus & Engineering Block",completed:!1,streak:3},{id:"h2",name:"Hydration Target (8 Glasses)",completed:!1,streak:5},{id:"h3",name:"Mindful Walk & Movement",completed:!1,streak:2}]}catch{return[{id:"h1",name:"Deep Focus & Engineering Block",completed:!1,streak:1}]}});be.useEffect(()=>{localStorage.setItem("for_me_habits",JSON.stringify(z))},[z]);const w=L=>{D(ye=>ye.map(ve=>{if(ve.id===L){const Ie=!ve.completed;return{...ve,completed:Ie,streak:Ie?ve.streak+1:Math.max(0,ve.streak-1)}}return ve}))},P=L=>{if(!L.trim())return;const ye={id:`habit_${Date.now()}`,name:L.trim(),completed:!1,streak:0};D(ve=>[...ve,ye])},ee=L=>{D(ye=>ye.filter(ve=>ve.id!==L))},[B,X]=be.useState(()=>{try{const L=localStorage.getItem("for_me_routines");return L?JSON.parse(L):Gu}catch{return Gu}});be.useEffect(()=>{localStorage.setItem("for_me_routines",JSON.stringify(B))},[B]);const H=L=>{const ye={id:`routine_${Date.now()}`,...L};X(ve=>[...ve,ye])},j=(L,ye)=>{X(ve=>ve.map(Ie=>Ie.id===L?{...Ie,...ye}:Ie))},W=L=>{X(ye=>ye.filter(ve=>ve.id!==L))},G=()=>{X(Gu)},[re,J]=be.useState(0),[$,Y]=be.useState(!1),[q,I]=be.useState(e.defaultFocusTopic||"Engineering"),[ne,Ae]=be.useState(()=>{try{const L=localStorage.getItem("for_me_study_sessions");return L?JSON.parse(L):[]}catch{return[]}});be.useEffect(()=>{let L=null;return $?L=setInterval(()=>{J(ye=>ye+1)},1e3):!$&&re!==0&&clearInterval(L),()=>clearInterval(L)},[$,re]);const se=()=>Y(L=>!L),V=()=>{if(re>30){const L={id:`ses_${Date.now()}`,subject:q,durationSeconds:re,timestamp:new Date().toISOString()};Ae(ye=>{const ve=[L,...ye];return localStorage.setItem("for_me_study_sessions",JSON.stringify(ve)),ve})}Y(!1),J(0)},[we,De]=be.useState(()=>{try{const L=localStorage.getItem("for_me_hydration");return L?JSON.parse(L):62.5}catch{return 62.5}});be.useEffect(()=>{localStorage.setItem("for_me_hydration",JSON.stringify(we))},[we]);const[Me,ke]=be.useState(()=>{try{const L=localStorage.getItem("for_me_sleep_hours");return L?JSON.parse(L):8}catch{return 8}}),lt=L=>{ke(L),localStorage.setItem("for_me_sleep_hours",JSON.stringify(L))},[He,Re]=be.useState(()=>{try{const L=localStorage.getItem("for_me_daily_rating");return L?JSON.parse(L):8}catch{return 8}});be.useEffect(()=>{localStorage.setItem("for_me_daily_rating",JSON.stringify(He))},[He]);const[Ve,je]=be.useState("youtube"),[St,xt]=be.useState(!1),[Nt,Mt]=be.useState("brown-noise"),[Zt,zt]=be.useState(.65),[$t,Vt]=be.useState(!1),[tn,K]=be.useState(!1),[Ht,Ct]=be.useState(!1),[gt,ze]=be.useState(()=>{try{const L=localStorage.getItem("for_me_active_yt");return L?JSON.parse(L):$l[0]}catch{return $l[0]}}),[Pt,Ye]=be.useState(70),[tt,U]=be.useState(!1),[E,oe]=be.useState(!1),[Ee,_e]=be.useState(()=>{try{const L=localStorage.getItem("for_me_saved_yt_library");return L?JSON.parse(L):[]}catch{return[]}});be.useEffect(()=>{gt&&localStorage.setItem("for_me_active_yt",JSON.stringify(gt))},[gt]),be.useEffect(()=>{localStorage.setItem("for_me_saved_yt_library",JSON.stringify(Ee))},[Ee]);const Ue=L=>{if(tn){K(!1);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("pauseVideo")}catch{}}je("ambient");const ye=L||Nt;Mt(ye),as.play(ye),xt(!0);const ve=Ks.find(Ie=>Ie.id===ye);Ei.startKeepAlive(),Ei.updateMetadata({title:(ve==null?void 0:ve.title)||"Procedural Soundscape",artist:"FOR ME Sanctuary (Offline)",album:"Sound Sanctuary",onPlay:()=>Ue(ye),onPause:xe})},xe=()=>{as.stop(),xt(!1),Ei.stopKeepAlive(),Ei.setPlaybackState("paused")},ie=L=>{zt(L),as.setVolume(L)},ae=()=>{const L=as.toggleMute();Vt(L)},Se=L=>{as.stop(),xt(!1),ze(L),je("youtube"),K(!0),U(!1);try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}},k=()=>{if(tn){K(!1);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("pauseVideo")}catch{}}else{as.stop(),xt(!1),je("youtube"),K(!0),U(!1);try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute(),typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("playVideo")}catch{}}},ge=()=>{K(!1);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("stopVideo")}catch{}},he=()=>{try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("nextVideo"),K(!0)}catch{}},Ne=()=>{try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("previousVideo"),K(!0)}catch{}},Te=L=>{Ye(L);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("setVolume",[L])}catch{}},Pe=()=>{U(L=>{const ye=!L;try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand(ye?"mute":"unMute")}catch{}return ye})},Xe=(L,ye)=>{var wt;const ve=Fv(L);if(!ve)return{success:!1,error:"Could not recognize a valid YouTube video or playlist link. Please check the URL format and try again."};const Ie=(ye==null?void 0:ye.trim())||(ve.type==="playlist"?`Custom Playlist (${(wt=ve.playlistId)==null?void 0:wt.slice(0,8)}...)`:`YouTube Audio (${ve.videoId||"Stream"})`),ft={id:`yt-${Date.now()}-${Math.random().toString(36).substr(2,5)}`,title:Ie,type:ve.type,videoId:ve.videoId,playlistId:ve.playlistId,url:ve.cleanUrl,thumbnailUrl:kv(ve.videoId),channel:ve.type==="playlist"?"Custom YouTube Playlist":"Custom YouTube Stream",createdAt:new Date().toISOString()};return _e(ot=>[ft,...ot]),Se(ft),{success:!0,item:ft}},at=L=>{_e(ye=>ye.filter(ve=>ve.id!==L))};return m.jsx(l0.Provider,{value:{profile:e,setProfile:t,updateProfile:r,appTheme:o,setAppTheme:l,toggleAppTheme:u,isHUDHidden:p,setIsHUDHidden:d,toggleHUDHidden:h,tasks:y,toggleTask:R,addTask:F,deleteTask:N,wallpaperTheme:x,setWallpaperTheme:v,wallpaperSettings:_,updateWallpaperSettings:b,resetWallpaperSettings:C,habits:z,toggleHabit:w,addHabit:P,deleteHabit:ee,routines:B,addRoutineBlock:H,updateRoutineBlock:j,deleteRoutineBlock:W,resetRoutines:G,studySeconds:re,isStudyActive:$,studySubject:q,setStudySubject:I,toggleStudyTimer:se,resetStudyTimer:V,studySessions:ne,hydration:we,setHydration:De,sleepHours:Me,setSleep:lt,dailyRating:He,setDailyRating:Re,audioSource:Ve,setAudioSource:je,isAudioPlaying:St,activeSoundscapeId:Nt,audioVolume:Zt,isAudioMuted:$t,playSoundscape:Ue,stopSoundscape:xe,setAudioVolume:ie,toggleAudioMute:ae,isYouTubePlaying:tn,setYouTubeIsPlaying:K,isYouTubePlayerReady:Ht,setYouTubePlayerReady:Ct,activeYouTubeItem:gt,youtubeVolume:Pt,isYouTubeMuted:tt,savedYouTubeItems:Ee,showYouTubePreview:E,setShowYouTubePreview:oe,playYouTubeItem:Se,toggleYouTubePlay:k,stopYouTube:ge,nextYouTubeTrack:he,prevYouTubeTrack:Ne,setYouTubeVolume:Te,toggleYouTubeMute:Pe,addYouTubeToLibrary:Xe,removeYouTubeFromLibrary:at},children:s})},Br=()=>{const s=be.useContext(l0);if(!s)throw new Error("useData must be used within a DataProvider");return s},Bv=()=>{const s=be.useRef(null),{isHUDHidden:e,wallpaperSettings:t,appTheme:r}=Br(),o=be.useRef(e),l=be.useRef(t),u=be.useRef(r);return be.useEffect(()=>{o.current=e},[e]),be.useEffect(()=>{l.current=t},[t]),be.useEffect(()=>{u.current=r},[r]),be.useEffect(()=>{const p=s.current;if(!p)return;const d=p.getContext("2d");if(!d)return;let h,x=0,v=0;const _=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let M=[];const b=()=>{M=[];const j=x<768?85:160;for(let W=0;W<j;W++){const G=Math.random()>.85?2:Math.random()>.45?1:0,re=Math.random()*.65+(G===2?.85:.35);M.push({x:Math.random()*x,y:Math.random()*v,z:G,radius:re,alpha:Math.random()*.55+.25,alphaSpeed:Math.random()*.015+.005,alphaPhase:Math.random()*Math.PI*2,vx:(Math.random()-.5)*.06,vy:(Math.random()-.5)*.06})}},C=()=>{if(!p)return;const j=Math.min(window.devicePixelRatio||1,2);x=window.innerWidth,v=window.innerHeight,p.width=x*j,p.height=v*j,p.style.width=`${x}px`,p.style.height=`${v}px`,d.scale(j,j),b()};C(),window.addEventListener("resize",C,{passive:!0});let y=x/2,S=v/2,R=x/2,F=v/2;const N=j=>{y=j.clientX,S=j.clientY};window.addEventListener("mousemove",N,{passive:!0});const z=(j,W,G,re)=>{d.save(),d.translate(j,W);const J=u.current==="light",$=Math.max(.15,Math.min(.95,re));d.globalAlpha=$;const Y=d.createRadialGradient(0,0,0,0,0,G*.9);J?(Y.addColorStop(0,"rgba(245, 158, 11, 0.75)"),Y.addColorStop(.3,"rgba(217, 119, 6, 0.28)"),Y.addColorStop(.7,"rgba(180, 83, 9, 0.06)"),Y.addColorStop(1,"rgba(255, 255, 255, 0)")):(Y.addColorStop(0,"rgba(255, 255, 255, 0.85)"),Y.addColorStop(.3,"rgba(216, 180, 254, 0.35)"),Y.addColorStop(.7,"rgba(147, 51, 234, 0.08)"),Y.addColorStop(1,"rgba(0, 0, 0, 0)")),d.fillStyle=Y,d.beginPath(),d.arc(0,0,G*.9,0,Math.PI*2),d.fill();const q=d.createLinearGradient(-G,0,G,0);J?(q.addColorStop(0,"rgba(245, 158, 11, 0)"),q.addColorStop(.35,"rgba(217, 119, 6, 0.45)"),q.addColorStop(.5,"#b45309"),q.addColorStop(.65,"rgba(217, 119, 6, 0.45)"),q.addColorStop(1,"rgba(245, 158, 11, 0)")):(q.addColorStop(0,"rgba(255, 255, 255, 0)"),q.addColorStop(.35,"rgba(233, 213, 255, 0.55)"),q.addColorStop(.5,"#ffffff"),q.addColorStop(.65,"rgba(233, 213, 255, 0.55)"),q.addColorStop(1,"rgba(255, 255, 255, 0)")),d.strokeStyle=q,d.lineWidth=.75,d.beginPath(),d.moveTo(-G,0),d.lineTo(G,0),d.stroke();const I=d.createLinearGradient(0,-G,0,G);J?(I.addColorStop(0,"rgba(245, 158, 11, 0)"),I.addColorStop(.35,"rgba(217, 119, 6, 0.45)"),I.addColorStop(.5,"#b45309"),I.addColorStop(.65,"rgba(217, 119, 6, 0.45)"),I.addColorStop(1,"rgba(245, 158, 11, 0)")):(I.addColorStop(0,"rgba(255, 255, 255, 0)"),I.addColorStop(.35,"rgba(233, 213, 255, 0.55)"),I.addColorStop(.5,"#ffffff"),I.addColorStop(.65,"rgba(233, 213, 255, 0.55)"),I.addColorStop(1,"rgba(255, 255, 255, 0)")),d.strokeStyle=I,d.lineWidth=.75,d.beginPath(),d.moveTo(0,-G),d.lineTo(0,G),d.stroke();const ne=G*.38;d.strokeStyle=J?"rgba(180, 83, 9, 0.35)":"rgba(255, 255, 255, 0.4)",d.lineWidth=.5,d.beginPath(),d.moveTo(-ne,-ne),d.lineTo(ne,ne),d.moveTo(-ne,ne),d.lineTo(ne,-ne),d.stroke(),d.fillStyle=J?"#d97706":"#ffffff",d.beginPath(),d.arc(0,0,1.2,0,Math.PI*2),d.fill(),d.restore()},D=[{x:-100,y:-100,length:100,speed:18,angle:Math.PI/4+.05,alpha:0,active:!1},{x:-100,y:-100,length:80,speed:16,angle:Math.PI/4-.08,alpha:0,active:!1},{x:-100,y:-100,length:110,speed:20,angle:Math.PI/4+.12,alpha:0,active:!1}];let w=120;const P=j=>{if(j==="off")return;w--;const W=j==="meteor-shower"?40:180;if(w<=0&&!_){w=Math.random()*(j==="meteor-shower"?60:200)+W;const G=D.find(re=>!re.active);G&&(G.active=!0,G.x=Math.random()*(x*.7),G.y=Math.random()*(v*.3),G.alpha=.95,G.length=Math.random()*50+70)}for(const G of D)if(G.active)if(G.x+=Math.cos(G.angle)*G.speed,G.y+=Math.sin(G.angle)*G.speed,G.alpha-=j==="meteor-shower"?.022:.016,G.alpha<=0||G.x>x+100||G.y>v+100)G.active=!1;else{d.save();const re=G.x-Math.cos(G.angle)*G.length,J=G.y-Math.sin(G.angle)*G.length,$=d.createLinearGradient(re,J,G.x,G.y);$.addColorStop(0,"rgba(255, 255, 255, 0)"),$.addColorStop(.7,"rgba(216, 180, 254, "+G.alpha*.6+")"),$.addColorStop(1,"#ffffff"),d.strokeStyle=$,d.lineWidth=1.3,d.beginPath(),d.moveTo(re,J),d.lineTo(G.x,G.y),d.stroke(),d.fillStyle="#ffffff",d.beginPath(),d.arc(G.x,G.y,1.8,0,Math.PI*2),d.fill(),d.restore()}};let ee=0,B=!0;const X=()=>{B=!document.hidden};document.addEventListener("visibilitychange",X);const H=()=>{if(!B){h=requestAnimationFrame(H);return}const j=l.current,W=o.current;let G=1;j.speed==="frozen"?G=0:j.speed==="calm"?G=.45:j.speed==="dynamic"?G=1.45:G=.85,W&&G>0&&(G*=1.25),ee+=_?.002:.014*G,d.clearRect(0,0,x,v),R+=(y-R)*.04,F+=(S-F)*.04;const re=(R-x/2)/(x/2),J=(F-v/2)/(v/2);let $=1;j.amplitude==="subtle"?$=.55:j.amplitude==="dramatic"?$=1.6:$=1,W&&($*=1.2);const Y=j.palette,q=u.current==="light";let I="#030208",ne="#0b061c",Ae="#170a32",se="rgba(168, 85, 247, 0.22)",V="rgba(99, 102, 241, 0.16)",we="rgba(168, 85, 247, 0.30)",De="rgba(192, 132, 252, 0.40)",Me=["#05030e","#090518","#0e0824"],ke="rgba(168, 85, 247, 0.25)",lt=["#0a051d","#110930","#190c42"],He="rgba(168, 85, 247, 0.35)",Re=["#11082e","#1c0c4b","#261063"],Ve="rgba(192, 132, 252, 0.45)",je=["#180b3d","#260f64","#341584"],St="rgba(216, 180, 254, 0.55)",xt=["#0c0620","#140833","#1e0c4a","#281061"],Nt="rgba(233, 213, 255, 0.65)";q?Y==="celestial-cyan"?(I="#eef8ff",ne="#d7effe",Ae="#b5e3fd",se="rgba(14, 165, 233, 0.16)",V="rgba(6, 182, 212, 0.12)",we="rgba(2, 132, 199, 0.12)",De="rgba(3, 105, 161, 0.20)",Me=["#93c5fd","#bfdbfe","#dbeafe"],ke="rgba(29, 78, 216, 0.35)",lt=["#60a5fa","#93c5fd","#bfdbfe"],He="rgba(2, 132, 199, 0.42)",Re=["#38bdf8","#7dd3fc","#bae6fd"],Ve="rgba(14, 165, 233, 0.50)",je=["#bae6fd","#d7f0fd","#f0f9ff"],St="rgba(56, 189, 248, 0.58)",xt=["#f0f9ff","#f8fcff","#ffffff","#ffffff"],Nt="rgba(2, 132, 199, 0.68)"):Y==="supernova-sunset"?(I="#fff1f2",ne="#fecdd3",Ae="#fda4af",se="rgba(244, 63, 94, 0.16)",V="rgba(249, 115, 22, 0.12)",we="rgba(225, 29, 72, 0.12)",De="rgba(190, 18, 60, 0.20)",Me=["#f43f5e","#fb7185","#fda4af"],ke="rgba(159, 18, 57, 0.35)",lt=["#fb7185","#fda4af","#fecdd3"],He="rgba(225, 29, 72, 0.42)",Re=["#fda4af","#fecdd3","#ffe4e6"],Ve="rgba(244, 63, 94, 0.50)",je=["#fecdd3","#ffe4e6","#fff1f2"],St="rgba(251, 113, 133, 0.58)",xt=["#fff5f6","#fffafb","#ffffff","#ffffff"],Nt="rgba(225, 29, 72, 0.68)"):Y==="nocturne-silver"?(I="#fafafa",ne="#f4f4f6",Ae="#e4e4e7",se="rgba(113, 113, 122, 0.14)",V="rgba(82, 82, 91, 0.10)",we="rgba(82, 82, 91, 0.12)",De="rgba(63, 63, 70, 0.20)",Me=["#a1a1aa","#d4d4d8","#e4e4e7"],ke="rgba(63, 63, 70, 0.35)",lt=["#d4d4d8","#e4e4e7","#f1f1f3"],He="rgba(82, 82, 91, 0.42)",Re=["#e4e4e7","#f1f1f3","#f4f4f6"],Ve="rgba(113, 113, 122, 0.50)",je=["#f1f1f3","#f6f6f8","#fafafa"],St="rgba(161, 161, 170, 0.58)",xt=["#f6f6f8","#fcfcfc","#ffffff","#ffffff"],Nt="rgba(82, 82, 91, 0.68)"):(I="#fffbf3",ne="#feeccd",Ae="#fad4a0",se="rgba(245, 158, 11, 0.18)",V="rgba(217, 119, 6, 0.12)",we="rgba(180, 83, 9, 0.12)",De="rgba(146, 64, 14, 0.20)",Me=["#d4a373","#bc8a5f","#a47148"],ke="rgba(146, 64, 14, 0.38)",lt=["#e6ba8f","#d4a373","#bc8a5f"],He="rgba(180, 83, 9, 0.45)",Re=["#f3d5b5","#e6ba8f","#d4a373"],Ve="rgba(217, 119, 6, 0.52)",je=["#faedcd","#f3d5b5","#fefae0"],St="rgba(245, 158, 11, 0.60)",xt=["#fefae0","#fffdfa","#ffffff","#ffffff"],Nt="rgba(217, 119, 6, 0.70)"):Y==="celestial-cyan"?(I="#020712",ne="#041322",Ae="#071f35",se="rgba(14, 165, 233, 0.18)",V="rgba(6, 182, 212, 0.12)",we="rgba(56, 189, 248, 0.12)",De="rgba(103, 232, 249, 0.20)",Me=["#030914","#051221","#071c31"],ke="rgba(56, 189, 248, 0.22)",lt=["#040f1f","#071b33","#0a2646"],He="rgba(56, 189, 248, 0.32)",Re=["#06152a","#0a2544","#0f345c"],Ve="rgba(56, 189, 248, 0.42)",je=["#081b34","#0d2e54","#134273"],St="rgba(125, 211, 252, 0.52)",xt=["#051224","#091c36","#0e294d","#133866"],Nt="rgba(186, 230, 253, 0.65)"):Y==="supernova-sunset"?(I="#0a0208",ne="#160412",Ae="#24061c",se="rgba(244, 63, 94, 0.18)",V="rgba(249, 115, 22, 0.12)",we="rgba(251, 113, 133, 0.12)",De="rgba(253, 186, 116, 0.20)",Me=["#0d020a","#170412","#22061b"],ke="rgba(244, 63, 94, 0.22)",lt=["#150311","#24061d","#340929"],He="rgba(244, 63, 94, 0.32)",Re=["#1e0518","#320827","#470c38"],Ve="rgba(251, 113, 133, 0.42)",je=["#280620","#420b33","#5c0f47"],St="rgba(251, 146, 60, 0.52)",xt=["#180314","#270620","#3b0930","#500d41"],Nt="rgba(254, 215, 170, 0.65)"):Y==="nocturne-silver"&&(I="#030306",ne="#08080d",Ae="#101017",se="rgba(161, 161, 170, 0.16)",V="rgba(113, 113, 122, 0.10)",we="rgba(212, 212, 216, 0.12)",De="rgba(228, 228, 231, 0.18)",Me=["#060609","#0c0c12","#13131c"],ke="rgba(161, 161, 170, 0.20)",lt=["#0a0a0f","#12121b","#1a1a27"],He="rgba(161, 161, 170, 0.30)",Re=["#0e0e16","#181824","#232333"],Ve="rgba(212, 212, 216, 0.40)",je=["#13131e","#1f1f30","#2d2d42"],St="rgba(228, 228, 231, 0.50)",xt=["#0c0c13","#14141f","#1d1d2b","#272738"],Nt="rgba(244, 244, 245, 0.65)");const Mt=d.createLinearGradient(0,0,0,v);Mt.addColorStop(0,I),Mt.addColorStop(.45,ne),Mt.addColorStop(1,Ae),d.fillStyle=Mt,d.fillRect(0,0,x,v);const Zt=d.createRadialGradient(x*.8,v*.18,0,x*.8,v*.18,x*.5);Zt.addColorStop(0,se),Zt.addColorStop(.7,"rgba(0, 0, 0, 0.04)"),Zt.addColorStop(1,"rgba(0, 0, 0, 0)"),d.fillStyle=Zt,d.fillRect(0,0,x,v);const zt=d.createRadialGradient(x*.18,v*.82,0,x*.18,v*.82,x*.55);if(zt.addColorStop(0,V),zt.addColorStop(.65,"rgba(0, 0, 0, 0.03)"),zt.addColorStop(1,"rgba(0, 0, 0, 0)"),d.fillStyle=zt,d.fillRect(0,0,x,v),j.showNebulaDust){d.save();const xe=d.createRadialGradient(x*.35,v*.2,0,x*.35,v*.2,x*.38);xe.addColorStop(0,se),xe.addColorStop(.5,"rgba(126, 34, 206, 0.04)"),xe.addColorStop(1,"rgba(0, 0, 0, 0)"),d.fillStyle=xe,d.fillRect(0,0,x,v);const ie=d.createRadialGradient(x*.7,v*.14,0,x*.7,v*.14,x*.32);ie.addColorStop(0,V),ie.addColorStop(.6,"rgba(14, 116, 144, 0.03)"),ie.addColorStop(1,"rgba(0, 0, 0, 0)"),d.fillStyle=ie,d.fillRect(0,0,x,v),d.restore()}if(j.showConstellations){d.save(),d.strokeStyle=q?"rgba(180, 130, 80, 0.28)":"rgba(255, 255, 255, 0.14)",d.lineWidth=.75;const xe=[{x:x*.68,y:v*.1},{x:x*.72,y:v*.08},{x:x*.76,y:v*.09},{x:x*.78,y:v*.13},{x:x*.83,y:v*.14},{x:x*.84,y:v*.1},{x:x*.78,y:v*.09}];d.beginPath(),d.moveTo(xe[0].x,xe[0].y);for(let ae=1;ae<xe.length;ae++)d.lineTo(xe[ae].x,xe[ae].y);d.stroke(),d.fillStyle=q?"#b45309":"#ffffff";for(const ae of xe)d.beginPath(),d.arc(ae.x,ae.y,1.4,0,Math.PI*2),d.fill();const ie=[{x:x*.28,y:v*.08},{x:x*.31,y:v*.12},{x:x*.34,y:v*.09},{x:x*.37,y:v*.13},{x:x*.4,y:v*.1}];d.beginPath(),d.moveTo(ie[0].x,ie[0].y);for(let ae=1;ae<ie.length;ae++)d.lineTo(ie[ae].x,ie[ae].y);d.stroke();for(const ae of ie)d.beginPath(),d.arc(ae.x,ae.y,1.3,0,Math.PI*2),d.fill();d.restore()}if(j.showComet){d.save();const xe=ee*.04%1,ie=x*.75,ae=v*.04,Se=x*.25,k=v*.22,ge=ie+(Se-ie)*xe,he=ae+(k-ae)*xe,Ne=Math.atan2(k-ae,Se-ie)+Math.PI,Te=140,Pe=ge+Math.cos(Ne)*Te,Xe=he+Math.sin(Ne)*Te,at=d.createLinearGradient(Pe,Xe,ge,he);at.addColorStop(0,"rgba(56, 189, 248, 0)"),at.addColorStop(.5,"rgba(168, 85, 247, 0.25)"),at.addColorStop(.85,"rgba(233, 213, 255, 0.65)"),at.addColorStop(1,"#ffffff"),d.strokeStyle=at,d.lineWidth=1.8,d.beginPath(),d.moveTo(Pe,Xe),d.lineTo(ge,he),d.stroke(),d.fillStyle="#ffffff",d.shadowColor="#67e8f9",d.shadowBlur=8,d.beginPath(),d.arc(ge,he,2.2,0,Math.PI*2),d.fill(),d.restore()}if(j.showMeridian){d.save();const xe=x*.91;d.strokeStyle=we,d.lineWidth=1,d.beginPath(),d.moveTo(xe,0),d.lineTo(xe,v),d.stroke(),d.strokeStyle="rgba(255, 255, 255, 0.18)",d.lineWidth=1;for(let ie=50;ie<v;ie+=70)d.beginPath(),d.moveTo(xe-4,ie),d.lineTo(xe+4,ie),d.stroke();d.restore()}if(j.showOrbitalTrack){d.save();const xe=x*.78,ie=v*.18,ae=Math.min(x,v)*.45,Se=Math.min(x,v)*.22;d.shadowColor=De,d.shadowBlur=6,d.strokeStyle=De,d.lineWidth=1.2,d.beginPath(),d.ellipse(xe,ie,ae,Se,-.22,Math.PI*.1,Math.PI*1.3),d.stroke(),d.setLineDash([3,8]),d.strokeStyle="rgba(255, 255, 255, 0.22)",d.lineWidth=.8,d.beginPath(),d.ellipse(xe,ie,ae*1.08,Se*1.08,-.22,Math.PI*.05,Math.PI*1.25),d.stroke(),d.setLineDash([]),d.restore()}if(j.showStars)for(let xe=0;xe<M.length;xe++){const ie=M[xe];!_&&G>0&&(ie.x+=ie.vx*G,ie.y+=ie.vy*G,ie.alphaPhase+=ie.alphaSpeed*G,ie.x<0&&(ie.x=x),ie.x>x&&(ie.x=0),ie.y<0&&(ie.y=v),ie.y>v&&(ie.y=0));const ae=(ie.z+1)*.35,Se=ie.x+re*12*ae,k=ie.y+J*12*ae,ge=Math.max(.12,Math.min(.85,ie.alpha+Math.sin(ie.alphaPhase)*.22));d.beginPath(),d.arc(Se,k,ie.radius,0,Math.PI*2),d.fillStyle=q?`rgba(180, 130, 80, ${(ge*.65).toFixed(3)})`:`rgba(255, 255, 255, ${ge.toFixed(3)})`,d.fill()}const $t=j.waveGeometry,Vt=j.waveLayerDensity,tn=(xe,ie,ae,Se=2)=>{d.save(),d.translate(xe,ie);const k=d.createRadialGradient(0,0,0,0,0,Se*2.5);q?(k.addColorStop(0,`rgba(245, 158, 11, ${ae})`),k.addColorStop(.35,`rgba(217, 119, 6, ${ae*.7})`),k.addColorStop(1,"rgba(255, 255, 255, 0)"),d.fillStyle=k,d.beginPath(),d.arc(0,0,Se*2.5,0,Math.PI*2),d.fill(),d.strokeStyle=`rgba(180, 83, 9, ${ae*.8})`,d.lineWidth=.75,d.beginPath(),d.moveTo(-Se*2,0),d.lineTo(Se*2,0),d.moveTo(0,-Se*2),d.lineTo(0,Se*2),d.stroke()):(k.addColorStop(0,`rgba(255, 255, 255, ${ae})`),k.addColorStop(.35,`rgba(233, 213, 255, ${ae*.7})`),k.addColorStop(1,"rgba(255, 255, 255, 0)"),d.fillStyle=k,d.beginPath(),d.arc(0,0,Se*2.5,0,Math.PI*2),d.fill(),d.strokeStyle=`rgba(255, 255, 255, ${ae*.9})`,d.lineWidth=.75,d.beginPath(),d.moveTo(-Se*2,0),d.lineTo(Se*2,0),d.moveTo(0,-Se*2),d.lineTo(0,Se*2),d.stroke()),d.restore()},K=(xe,ie,ae,Se,k,ge,he,Ne,Te,Pe,Xe=[])=>{const at=[0,x*.32,x*.68,x],L=[];for(let ot=0;ot<4;ot++){const Lt=Math.sin(ee*ae+Se+ot*1.4)*(ie*.75)+Math.cos(ee*ae*.7+Se*1.2+ot*2.1)*(ie*.35);L.push({x:at[ot],y:v*xe[ot]+Lt})}const ye=[L[0],...L,L[L.length-1]],ve=[],Ie=.5;for(let ot=1;ot<ye.length-2;ot++){const Lt=ye[ot-1],bt=ye[ot],un=ye[ot+1],on=ye[ot+2],Rn=(un.x-Lt.x)*Ie,Nn=(un.y-Lt.y)*Ie,Ni=(on.x-bt.x)*Ie,hs=(on.y-bt.y)*Ie;ve.push({p1:bt,cp1:{x:bt.x+Rn/3,y:bt.y+Nn/3},cp2:{x:un.x-Ni/3,y:un.y-hs/3},p2:un})}d.save(),Te>0&&(d.shadowColor=Ne,d.shadowBlur=Te,d.shadowOffsetY=Pe),d.beginPath(),d.moveTo(L[0].x,L[0].y);for(const ot of ve)d.bezierCurveTo(ot.cp1.x,ot.cp1.y,ot.cp2.x,ot.cp2.y,ot.p2.x,ot.p2.y);d.lineTo(x,v),d.lineTo(0,v),d.closePath(),d.fillStyle=k,d.fill(),d.save(),d.clip();const ft=Math.min(...L.map(ot=>ot.y)),wt=d.createLinearGradient(0,ft,0,ft+140);q?(wt.addColorStop(0,"rgba(255, 255, 255, 0.40)"),wt.addColorStop(.25,"rgba(251, 191, 36, 0.14)"),wt.addColorStop(.7,"rgba(217, 119, 6, 0.04)"),wt.addColorStop(1,"rgba(255, 255, 255, 0)")):(wt.addColorStop(0,"rgba(255, 255, 255, 0.26)"),wt.addColorStop(.25,"rgba(216, 180, 254, 0.16)"),wt.addColorStop(.7,"rgba(147, 51, 234, 0.05)"),wt.addColorStop(1,"rgba(0, 0, 0, 0)")),d.fillStyle=wt,d.fillRect(0,ft,x,v),d.beginPath();for(let ot=0;ot<ve.length;ot++){const Lt=ve[ot],bt=18+Math.sin(ee*.75+ot*1.5)*4;ot===0&&d.moveTo(Lt.p1.x,Lt.p1.y+bt),d.bezierCurveTo(Lt.cp1.x,Lt.cp1.y+bt,Lt.cp2.x,Lt.cp2.y+bt,Lt.p2.x,Lt.p2.y+bt)}d.strokeStyle=q?"rgba(160, 90, 40, 0.16)":"rgba(255, 255, 255, 0.10)",d.lineWidth=1,d.stroke(),d.beginPath();for(let ot=0;ot<ve.length;ot++){const Lt=ve[ot],bt=38+Math.cos(ee*.65+ot*1.8)*5;ot===0&&d.moveTo(Lt.p1.x,Lt.p1.y+bt),d.bezierCurveTo(Lt.cp1.x,Lt.cp1.y+bt,Lt.cp2.x,Lt.cp2.y+bt,Lt.p2.x,Lt.p2.y+bt)}d.strokeStyle=q?"rgba(160, 90, 40, 0.10)":"rgba(255, 255, 255, 0.06)",d.lineWidth=.8,d.stroke(),d.restore(),d.strokeStyle=ge,d.lineWidth=he,d.stroke(),d.restore();for(const ot of Xe){const Lt=Math.min(ve.length-1,Math.floor(ot*ve.length)),bt=ot*ve.length-Lt,un=ve[Lt],on=1-bt,Rn=on*on*on*un.p1.x+3*on*on*bt*un.cp1.x+3*on*bt*bt*un.cp2.x+bt*bt*bt*un.p2.x,Nn=on*on*on*un.p1.y+3*on*on*bt*un.cp1.y+3*on*bt*bt*un.cp2.y+bt*bt*bt*un.p2.y,Ni=.5+Math.sin(ee*2+ot*8)*.35;tn(Rn,Nn,Ni,2)}},Ht=(xe,ie,ae,Se,k,ge,he,Ne,Te,Pe,Xe,at)=>{const L=Math.sin(ee*k+ge)*Se,ye=[];ye.push({x:0,y:v*xe+L});for(let ve=0;ve<ie.length;ve++){const Ie=x*ie[ve],ft=v*(xe-ae[ve])+Math.cos(ee*k+ve+ge)*(Se*.7);ye.push({x:Ie,y:ft})}ye.push({x,y:v*(xe+.03)+L}),d.save(),Xe>0&&(d.shadowColor=Pe,d.shadowBlur=Xe,d.shadowOffsetY=at),d.beginPath(),d.moveTo(ye[0].x,ye[0].y);for(let ve=1;ve<ye.length;ve++)d.lineTo(ye[ve].x,ye[ve].y);d.lineTo(x,v),d.lineTo(0,v),d.closePath(),d.fillStyle=he,d.fill(),d.strokeStyle=Ne,d.lineWidth=Te,d.stroke(),d.restore()},Ct=(xe,ie,ae,Se,k,ge)=>{d.save(),d.globalCompositeOperation="screen",d.beginPath(),d.moveTo(0,v*xe);const he=16;for(let Ne=0;Ne<=he;Ne++){const Te=Ne/he*x,Pe=v*xe+Math.sin(Ne/he*Math.PI*2+ee*ae+Se)*ie;Ne===0?d.moveTo(Te,Pe):d.lineTo(Te,Pe)}d.lineTo(x,v),d.lineTo(0,v),d.closePath(),d.fillStyle=k,d.fill(),d.strokeStyle=ge,d.lineWidth=1.8,d.shadowColor=ge,d.shadowBlur=14,d.stroke(),d.restore()},gt=d.createLinearGradient(0,v*.46,0,v*.68);if(gt.addColorStop(0,"rgba(0, 0, 0, 0)"),q)gt.addColorStop(.5,"rgba(255, 255, 255, 0.25)");else{const xe=Y==="celestial-cyan"?"rgba(7, 31, 53, 0.45)":Y==="supernova-sunset"?"rgba(36, 6, 28, 0.45)":Y==="nocturne-silver"?"rgba(16, 16, 23, 0.45)":"rgba(20, 10, 40, 0.45)";gt.addColorStop(.5,xe)}gt.addColorStop(1,"rgba(0, 0, 0, 0)"),d.fillStyle=gt,d.fillRect(0,v*.46,x,v*.22);const ze=d.createLinearGradient(0,v*.55,0,v);ze.addColorStop(0,Me[0]),ze.addColorStop(.5,Me[1]),ze.addColorStop(1,Me[2]);const Pt=d.createLinearGradient(0,v*.63,0,v);Pt.addColorStop(0,lt[0]),Pt.addColorStop(.5,lt[1]),Pt.addColorStop(1,lt[2]);const Ye=d.createLinearGradient(0,v*.71,0,v);Ye.addColorStop(0,Re[0]),Ye.addColorStop(.5,Re[1]),Ye.addColorStop(1,Re[2]);const tt=d.createLinearGradient(0,v*.79,0,v);tt.addColorStop(0,je[0]),tt.addColorStop(.5,je[1]),tt.addColorStop(1,je[2]);const U=d.createLinearGradient(0,v*.86,0,v);U.addColorStop(0,xt[0]),U.addColorStop(.35,xt[1]),U.addColorStop(.7,xt[2]),U.addColorStop(1,xt[3]);const E=q?"rgba(160, 140, 120, 0.12)":"rgba(0,0,0,0.55)",oe=q?"rgba(160, 140, 120, 0.16)":"rgba(0,0,0,0.65)",Ee=q?"rgba(160, 140, 120, 0.20)":"rgba(0,0,0,0.70)",_e=q?"rgba(160, 140, 120, 0.22)":"rgba(0,0,0,0.75)",Ue=q?"rgba(160, 140, 120, 0.26)":"rgba(0,0,0,0.80)";if($t==="mountains"?(Ht(.48,[.18,.5,.82],[.14,.17,.12],12*$,.35,0,ze,ke,.8,E,16,-6),Vt!=="airy"&&Ht(.58,[.32,.66,.9],[.12,.15,.11],14*$,.4,1.5,Pt,He,.9,oe,20,-7),Ht(.68,[.15,.44,.75],[.11,.13,.1],15*$,.45,3.1,Ye,Ve,1,Ee,24,-8),Vt==="dense"&&Ht(.78,[.28,.6,.86],[.09,.11,.08],14*$,.4,4.4,tt,St,1.1,_e,28,-9),Ht(.88,[.4,.74],[.08,.07],12*$,.35,5.8,U,Nt,1.2,Ue,32,-10)):$t==="aurora"?(Ct(.28,32*$,.45,0,ze,ke),Vt!=="airy"&&Ct(.4,30*$,.5,1.6,Pt,He),Ct(.54,26*$,.55,3.2,Ye,Ve),Vt==="dense"&&Ct(.68,22*$,.6,4.8,tt,St),K([.86,.89,.85,.88],12*$,.35,6.2,U,Nt,1.2,Ue,28,-9)):$t==="ocean"?(K([.62,.58,.65,.6],16*$,.65,0,ze,ke,.8,E,16,-6,[.3]),Vt!=="airy"&&K([.69,.73,.67,.71],18*$,.7,1.8,Pt,He,.9,oe,20,-7,[.55]),K([.76,.73,.79,.75],20*$,.75,3.4,Ye,Ve,1,Ee,24,-8,[.38,.82]),Vt==="dense"&&K([.83,.86,.81,.85],16*$,.65,4.9,tt,St,1.1,_e,28,-9,[.65]),K([.89,.87,.92,.88],14*$,.55,6.2,U,Nt,1.2,Ue,32,-10,[.5])):(K([.48,.56,.64,.68],16*$,.38,0,ze,ke,.8,E,16,-6,[.24,.68]),Vt!=="airy"&&K([.66,.62,.55,.6],18*$,.42,1.8,Pt,He,.9,oe,20,-7,[.35,.82]),K([.69,.76,.72,.76],19*$,.46,3.4,Ye,Ve,1,Ee,24,-8,[.42,.78]),Vt==="dense"&&K([.8,.77,.84,.8],16*$,.4,4.9,tt,St,1.1,_e,28,-9,[.18,.62]),K([.88,.91,.86,.9],13*$,.35,6.2,U,Nt,1.2,Ue,32,-10,[.35,.8])),j.showCrossStars){const xe=.68+Math.sin(ee*1.8)*.22,ie=.6+Math.sin(ee*1.5+1.2)*.24,ae=.64+Math.sin(ee*1.9+2.5)*.2,Se=.58+Math.sin(ee*1.4+3.8)*.25,k=.52+Math.sin(ee*1.7+4.6)*.22;z(x*.5,v*.08,11,xe),z(x*.18,v*.16,9.5,ie),z(x*.84,v*.2,10,ae),z(x*.72,v*.34,8.5,Se),z(x*.08,v*.28,8,k)}P(j.shootingStarMode||"occasional"),h=requestAnimationFrame(H)};return h=requestAnimationFrame(H),()=>{cancelAnimationFrame(h),window.removeEventListener("resize",C),window.removeEventListener("mousemove",N),document.removeEventListener("visibilitychange",X)}},[]),m.jsx("canvas",{ref:s,className:"fixed inset-0 pointer-events-none z-0 select-none","aria-hidden":"true"})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pf="187",Gv=0,om=1,Hv=2,kl=1,Vv=2,$a=3,us=0,kn=1,Bi=2,Zs=0,qa=1,Ka=2,lm=3,cm=4,Wv=5,qs=100,jv=101,$v=102,Xv=103,Yv=104,qv=200,Kv=201,Zv=202,Jv=203,c0=204,u0=205,Qv=206,e_=207,t_=208,n_=209,i_=210,r_=211,s_=212,a_=213,o_=214,_d=0,yd=1,Sd=2,Ja=3,Md=4,wd=5,bd=6,Ed=7,d0=0,l_=1,c_=2,ar=0,f0=1,h0=2,p0=3,m0=4,g0=5,x0=6,v0=7,_0=300,Qs=301,Qa=302,Hu=303,Vu=304,eo=1e3,oi=1001,Td=1002,Cn=1003,u_=1004,gl=1005,Jn=1006,Wu=1007,Ur=1008,ai=1009,y0=1010,S0=1011,to=1012,mf=1013,Wi=1014,Gi=1015,ji=1016,gf=1017,xf=1018,ea=1020,M0=35902,w0=35899,b0=1021,E0=1022,Hi=1023,kr=1026,zr=1027,T0=1028,vf=1029,ds=1030,_f=1031,yf=1033,Ol=33776,Bl=33777,Gl=33778,Hl=33779,Ad=35840,Cd=35841,Rd=35842,Nd=35843,Pd=36196,Ld=37492,Dd=37496,Id=37488,Ud=37489,Xl=37490,zd=37491,Fd=37808,kd=37809,Od=37810,Bd=37811,Gd=37812,Hd=37813,Vd=37814,Wd=37815,jd=37816,$d=37817,Xd=37818,Yd=37819,qd=37820,Kd=37821,Zd=36492,Jd=36494,Qd=36495,ef=36283,tf=36284,Yl=36285,nf=36286,d_=3200,rf=0,f_=1,Ir="",si="srgb",ql="srgb-linear",Kl="linear",jt="srgb",ju=7680,h_=519,p_=512,m_=513,g_=514,A0=515,x_=516,v_=517,C0=518,R0=519,__=35044,um="300 es",Ci=2e3,no=2001;function y_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Zl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function S_(){const s=Zl("canvas");return s.style.display="block",s}const dm={};function fm(...s){const e="THREE."+s.shift();console.log(e,...s)}function N0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function pt(...s){s=N0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Gt(...s){s=N0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Vl(...s){const e=s.join(" ");e in dm||(dm[e]=!0,pt(...s))}function M_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const w_={[_d]:_d,[Sd]:bd,[Md]:Md,[Ja]:wd,[yd]:yd,[bd]:Sd,[Ed]:Ed,[wd]:Ja};class fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$u=Math.PI/180,sf=180/Math.PI;function ro(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[t&63|128]+zn[t>>8&255]+"-"+zn[t>>16&255]+zn[t>>24&255]+zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]).toLowerCase()}function It(s,e,t){return Math.max(e,Math.min(t,s))}function b_(s,e){return(s%e+e)%e}function Xu(s,e,t){return(1-t)*s+t*e}function E_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Sf(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function T_(s,e){if(e.constructor===Float32Array)return s;const t=Sf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function A_(s,e){if(e.constructor===Float32Array)return s;const t=Sf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const Pf=class Pf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(It(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(It(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Pf.prototype.isVector2=!0;let Ut=Pf;class ia{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,p){let d=r[o+0],h=r[o+1],x=r[o+2],v=r[o+3],_=l[u+0],M=l[u+1],b=l[u+2],C=l[u+3];if(v!==C||d!==_||h!==M||x!==b){let y=d*_+h*M+x*b+v*C;y<0&&(_=-_,M=-M,b=-b,C=-C,y=-y);let S=1-p;if(y<.9995){const R=Math.acos(y),F=Math.sin(R);S=Math.sin(S*R)/F,p=Math.sin(p*R)/F,d=d*S+_*p,h=h*S+M*p,x=x*S+b*p,v=v*S+C*p}else{d=d*S+_*p,h=h*S+M*p,x=x*S+b*p,v=v*S+C*p;const R=1/Math.sqrt(d*d+h*h+x*x+v*v);d*=R,h*=R,x*=R,v*=R}}e[t]=d,e[t+1]=h,e[t+2]=x,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,l,u){const p=r[o],d=r[o+1],h=r[o+2],x=r[o+3],v=l[u],_=l[u+1],M=l[u+2],b=l[u+3];return e[t]=p*b+x*v+d*M-h*_,e[t+1]=d*b+x*_+h*v-p*M,e[t+2]=h*b+x*M+p*_-d*v,e[t+3]=x*b-p*v-d*_-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,p=Math.cos,d=Math.sin,h=p(r/2),x=p(o/2),v=p(l/2),_=d(r/2),M=d(o/2),b=d(l/2);switch(u){case"XYZ":this._x=_*x*v+h*M*b,this._y=h*M*v-_*x*b,this._z=h*x*b+_*M*v,this._w=h*x*v-_*M*b;break;case"YXZ":this._x=_*x*v+h*M*b,this._y=h*M*v-_*x*b,this._z=h*x*b-_*M*v,this._w=h*x*v+_*M*b;break;case"ZXY":this._x=_*x*v-h*M*b,this._y=h*M*v+_*x*b,this._z=h*x*b+_*M*v,this._w=h*x*v-_*M*b;break;case"ZYX":this._x=_*x*v-h*M*b,this._y=h*M*v+_*x*b,this._z=h*x*b-_*M*v,this._w=h*x*v+_*M*b;break;case"YZX":this._x=_*x*v+h*M*b,this._y=h*M*v+_*x*b,this._z=h*x*b-_*M*v,this._w=h*x*v-_*M*b;break;case"XZY":this._x=_*x*v-h*M*b,this._y=h*M*v-_*x*b,this._z=h*x*b+_*M*v,this._w=h*x*v+_*M*b;break;default:pt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],p=t[5],d=t[9],h=t[2],x=t[6],v=t[10],_=r+p+v;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(x-d)*M,this._y=(l-h)*M,this._z=(u-o)*M}else if(r>p&&r>v){const M=2*Math.sqrt(1+r-p-v);this._w=(x-d)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+h)/M}else if(p>v){const M=2*Math.sqrt(1+p-r-v);this._w=(l-h)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(d+x)/M}else{const M=2*Math.sqrt(1+v-r-p);this._w=(u-o)/M,this._x=(l+h)/M,this._y=(d+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,p=t._x,d=t._y,h=t._z,x=t._w;return this._x=r*x+u*p+o*h-l*d,this._y=o*x+u*d+l*p-r*h,this._z=l*x+u*h+r*d-o*p,this._w=u*x-r*p-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,p=this.dot(e);p<0&&(r=-r,o=-o,l=-l,u=-u,p=-p);let d=1-t;if(p<.9995){const h=Math.acos(p),x=Math.sin(h);d=Math.sin(d*h)/x,t=Math.sin(t*h)/x,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+u*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Lf=class Lf{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,p=e.z,d=e.w,h=2*(u*o-p*r),x=2*(p*t-l*o),v=2*(l*r-u*t);return this.x=t+d*h+u*v-p*x,this.y=r+d*x+p*h-l*v,this.z=o+d*v+l*x-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this.z=It(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this.z=It(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(It(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,p=t.y,d=t.z;return this.x=o*d-l*p,this.y=l*u-r*d,this.z=r*p-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Yu.copy(this).projectOnVector(e),this.sub(Yu)}reflect(e){return this.sub(Yu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(It(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Lf.prototype.isVector3=!0;let pe=Lf;const Yu=new pe,hm=new ia,Df=class Df{constructor(e,t,r,o,l,u,p,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,p,d,h)}set(e,t,r,o,l,u,p,d,h){const x=this.elements;return x[0]=e,x[1]=o,x[2]=p,x[3]=t,x[4]=l,x[5]=d,x[6]=r,x[7]=u,x[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],p=r[3],d=r[6],h=r[1],x=r[4],v=r[7],_=r[2],M=r[5],b=r[8],C=o[0],y=o[3],S=o[6],R=o[1],F=o[4],N=o[7],z=o[2],D=o[5],w=o[8];return l[0]=u*C+p*R+d*z,l[3]=u*y+p*F+d*D,l[6]=u*S+p*N+d*w,l[1]=h*C+x*R+v*z,l[4]=h*y+x*F+v*D,l[7]=h*S+x*N+v*w,l[2]=_*C+M*R+b*z,l[5]=_*y+M*F+b*D,l[8]=_*S+M*N+b*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],p=e[5],d=e[6],h=e[7],x=e[8];return t*u*x-t*p*h-r*l*x+r*p*d+o*l*h-o*u*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],p=e[5],d=e[6],h=e[7],x=e[8],v=x*u-p*h,_=p*d-x*l,M=h*l-u*d,b=t*v+r*_+o*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=v*C,e[1]=(o*h-x*r)*C,e[2]=(p*r-o*u)*C,e[3]=_*C,e[4]=(x*t-o*d)*C,e[5]=(o*l-p*t)*C,e[6]=M*C,e[7]=(r*d-h*t)*C,e[8]=(u*t-r*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,p){const d=Math.cos(l),h=Math.sin(l);return this.set(r*d,r*h,-r*(d*u+h*p)+u+e,-o*h,o*d,-o*(-h*u+d*p)+p+t,0,0,1),this}scale(e,t){return Vl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qu.makeScale(e,t)),this}rotate(e){return Vl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qu.makeRotation(-e)),this}translate(e,t){return Vl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Df.prototype.isMatrix3=!0;let mt=Df;const qu=new mt,pm=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mm=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function C_(){const s={enabled:!0,workingColorSpace:ql,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===jt&&(o.r=or(o.r),o.g=or(o.g),o.b=or(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===jt&&(o.r=Js(o.r),o.g=Js(o.g),o.b=Js(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ir?Kl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[u].fromXYZ).multiply(this.spaces[l].toXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[ql]:{primaries:e,whitePoint:r,transfer:Kl,toXYZ:pm,fromXYZ:mm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:e,whitePoint:r,transfer:jt,toXYZ:pm,fromXYZ:mm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),s}const Dt=C_();function or(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Fs;class R_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Fs===void 0&&(Fs=Zl("canvas")),Fs.width=e.width,Fs.height=e.height;const o=Fs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Fs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=or(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(or(t[r]/255)*255):t[r]=or(t[r]);return{data:t,width:e.width,height:e.height}}else return pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let N_=0;class Mf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=ro(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,p=o.length;u<p;u++)o[u].isDataTexture?l.push(Ku(o[u].image)):l.push(Ku(o[u]))}else l=Ku(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Ku(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?R_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(pt("Texture: Unable to serialize Texture."),{})}let P_=0;const Zu=new pe;class On extends fs{constructor(e=On.DEFAULT_IMAGE,t=On.DEFAULT_MAPPING,r=oi,o=oi,l=Jn,u=Ur,p=Hi,d=ai,h=On.DEFAULT_ANISOTROPY,x=Ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=ro(),this.name="",this.source=new Mf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=d,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Zu).x}get height(){return this.source.getSize(Zu).y}get depth(){return this.source.getSize(Zu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){pt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){pt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case eo:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case eo:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=_0;On.DEFAULT_ANISOTROPY=1;const If=class If{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,h=d[0],x=d[4],v=d[8],_=d[1],M=d[5],b=d[9],C=d[2],y=d[6],S=d[10];if(Math.abs(x-_)<.01&&Math.abs(v-C)<.01&&Math.abs(b-y)<.01){if(Math.abs(x+_)<.1&&Math.abs(v+C)<.1&&Math.abs(b+y)<.1&&Math.abs(h+M+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(h+1)/2,N=(M+1)/2,z=(S+1)/2,D=(x+_)/4,w=(v+C)/4,P=(b+y)/4;return F>N&&F>z?F<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(F),o=D/r,l=w/r):N>z?N<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(N),r=D/o,l=P/o):z<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(z),r=w/l,o=P/l),this.set(r,o,l,t),this}let R=Math.sqrt((y-b)*(y-b)+(v-C)*(v-C)+(_-x)*(_-x));return Math.abs(R)<.001&&(R=1),this.x=(y-b)/R,this.y=(v-C)/R,this.z=(_-x)/R,this.w=Math.acos((h+M+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this.z=It(this.z,e.z,t.z),this.w=It(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this.z=It(this.z,e,t),this.w=It(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(It(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};If.prototype.isVector4=!0;let sn=If;class L_ extends fs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new sn(0,0,e,t),this.scissorTest=!1,this.viewport=new sn(0,0,e,t),this.textures=[];const o=r.count;for(let l=0;l<o;l++)this.textures[l]=new On({width:e,height:t,depth:r.depth}),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Jn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Mf(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends L_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class P0 extends On{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class D_ extends On{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const rc=class rc{constructor(e,t,r,o,l,u,p,d,h,x,v,_,M,b,C,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,p,d,h,x,v,_,M,b,C,y)}set(e,t,r,o,l,u,p,d,h,x,v,_,M,b,C,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=r,S[12]=o,S[1]=l,S[5]=u,S[9]=p,S[13]=d,S[2]=h,S[6]=x,S[10]=v,S[14]=_,S[3]=M,S[7]=b,S[11]=C,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/ks.setFromMatrixColumn(e,0).length(),l=1/ks.setFromMatrixColumn(e,1).length(),u=1/ks.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),p=Math.sin(r),d=Math.cos(o),h=Math.sin(o),x=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const _=u*x,M=u*v,b=p*x,C=p*v;t[0]=d*x,t[4]=-d*v,t[8]=h,t[1]=M+b*h,t[5]=_-C*h,t[9]=-p*d,t[2]=C-_*h,t[6]=b+M*h,t[10]=u*d}else if(e.order==="YXZ"){const _=d*x,M=d*v,b=h*x,C=h*v;t[0]=_+C*p,t[4]=b*p-M,t[8]=u*h,t[1]=u*v,t[5]=u*x,t[9]=-p,t[2]=M*p-b,t[6]=C+_*p,t[10]=u*d}else if(e.order==="ZXY"){const _=d*x,M=d*v,b=h*x,C=h*v;t[0]=_-C*p,t[4]=-u*v,t[8]=b+M*p,t[1]=M+b*p,t[5]=u*x,t[9]=C-_*p,t[2]=-u*h,t[6]=p,t[10]=u*d}else if(e.order==="ZYX"){const _=u*x,M=u*v,b=p*x,C=p*v;t[0]=d*x,t[4]=b*h-M,t[8]=_*h+C,t[1]=d*v,t[5]=C*h+_,t[9]=M*h-b,t[2]=-h,t[6]=p*d,t[10]=u*d}else if(e.order==="YZX"){const _=u*d,M=u*h,b=p*d,C=p*h;t[0]=d*x,t[4]=C-_*v,t[8]=b*v+M,t[1]=v,t[5]=u*x,t[9]=-p*x,t[2]=-h*x,t[6]=M*v+b,t[10]=_-C*v}else if(e.order==="XZY"){const _=u*d,M=u*h,b=p*d,C=p*h;t[0]=d*x,t[4]=-v,t[8]=h*x,t[1]=_*v+C,t[5]=u*x,t[9]=M*v-b,t[2]=b*v-M,t[6]=p*x,t[10]=C*v+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(I_,e,U_)}lookAt(e,t,r){const o=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Ar.crossVectors(r,ii),Ar.lengthSq()===0&&(Math.abs(r.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Ar.crossVectors(r,ii)),Ar.normalize(),xl.crossVectors(ii,Ar),o[0]=Ar.x,o[4]=xl.x,o[8]=ii.x,o[1]=Ar.y,o[5]=xl.y,o[9]=ii.y,o[2]=Ar.z,o[6]=xl.z,o[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],p=r[4],d=r[8],h=r[12],x=r[1],v=r[5],_=r[9],M=r[13],b=r[2],C=r[6],y=r[10],S=r[14],R=r[3],F=r[7],N=r[11],z=r[15],D=o[0],w=o[4],P=o[8],ee=o[12],B=o[1],X=o[5],H=o[9],j=o[13],W=o[2],G=o[6],re=o[10],J=o[14],$=o[3],Y=o[7],q=o[11],I=o[15];return l[0]=u*D+p*B+d*W+h*$,l[4]=u*w+p*X+d*G+h*Y,l[8]=u*P+p*H+d*re+h*q,l[12]=u*ee+p*j+d*J+h*I,l[1]=x*D+v*B+_*W+M*$,l[5]=x*w+v*X+_*G+M*Y,l[9]=x*P+v*H+_*re+M*q,l[13]=x*ee+v*j+_*J+M*I,l[2]=b*D+C*B+y*W+S*$,l[6]=b*w+C*X+y*G+S*Y,l[10]=b*P+C*H+y*re+S*q,l[14]=b*ee+C*j+y*J+S*I,l[3]=R*D+F*B+N*W+z*$,l[7]=R*w+F*X+N*G+z*Y,l[11]=R*P+F*H+N*re+z*q,l[15]=R*ee+F*j+N*J+z*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],p=e[5],d=e[9],h=e[13],x=e[2],v=e[6],_=e[10],M=e[14],b=e[3],C=e[7],y=e[11],S=e[15],R=d*M-h*_,F=p*M-h*v,N=p*_-d*v,z=u*M-h*x,D=u*_-d*x,w=u*v-p*x;return t*(C*R-y*F+S*N)-r*(b*R-y*z+S*D)+o*(b*F-C*z+S*w)-l*(b*N-C*D+y*w)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],u=e[5],p=e[9],d=e[2],h=e[6],x=e[10];return t*(u*x-p*h)-r*(l*x-p*d)+o*(l*h-u*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],p=e[5],d=e[6],h=e[7],x=e[8],v=e[9],_=e[10],M=e[11],b=e[12],C=e[13],y=e[14],S=e[15],R=t*p-r*u,F=t*d-o*u,N=t*h-l*u,z=r*d-o*p,D=r*h-l*p,w=o*h-l*d,P=x*C-v*b,ee=x*y-_*b,B=x*S-M*b,X=v*y-_*C,H=v*S-M*C,j=_*S-M*y,W=R*j-F*H+N*X+z*B-D*ee+w*P;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/W;return e[0]=(p*j-d*H+h*X)*G,e[1]=(o*H-r*j-l*X)*G,e[2]=(C*w-y*D+S*z)*G,e[3]=(_*D-v*w-M*z)*G,e[4]=(d*B-u*j-h*ee)*G,e[5]=(t*j-o*B+l*ee)*G,e[6]=(y*N-b*w-S*F)*G,e[7]=(x*w-_*N+M*F)*G,e[8]=(u*H-p*B+h*P)*G,e[9]=(r*B-t*H-l*P)*G,e[10]=(b*D-C*N+S*R)*G,e[11]=(v*N-x*D-M*R)*G,e[12]=(p*ee-u*X-d*P)*G,e[13]=(t*X-r*ee+o*P)*G,e[14]=(C*F-b*z-y*R)*G,e[15]=(x*z-v*F+_*R)*G,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,p=e.y,d=e.z,h=l*u,x=l*p;return this.set(h*u+r,h*p-o*d,h*d+o*p,0,h*p+o*d,x*p+r,x*d-o*u,0,h*d-o*p,x*d+o*u,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,p=t._z,d=t._w,h=l+l,x=u+u,v=p+p,_=l*h,M=l*x,b=l*v,C=u*x,y=u*v,S=p*v,R=d*h,F=d*x,N=d*v,z=r.x,D=r.y,w=r.z;return o[0]=(1-(C+S))*z,o[1]=(M+N)*z,o[2]=(b-F)*z,o[3]=0,o[4]=(M-N)*D,o[5]=(1-(_+S))*D,o[6]=(y+R)*D,o[7]=0,o[8]=(b+F)*w,o[9]=(y-R)*w,o[10]=(1-(_+C))*w,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=ks.set(o[0],o[1],o[2]).length();const p=ks.set(o[4],o[5],o[6]).length(),d=ks.set(o[8],o[9],o[10]).length();l<0&&(u=-u),Mi.copy(this);const h=1/u,x=1/p,v=1/d;return Mi.elements[0]*=h,Mi.elements[1]*=h,Mi.elements[2]*=h,Mi.elements[4]*=x,Mi.elements[5]*=x,Mi.elements[6]*=x,Mi.elements[8]*=v,Mi.elements[9]*=v,Mi.elements[10]*=v,t.setFromRotationMatrix(Mi),r.x=u,r.y=p,r.z=d,this}makePerspective(e,t,r,o,l,u,p=Ci,d=!1){const h=this.elements,x=2*l/(t-e),v=2*l/(r-o),_=(t+e)/(t-e),M=(r+o)/(r-o);let b,C;if(d)b=l/(u-l),C=u*l/(u-l);else if(p===Ci)b=-(u+l)/(u-l),C=-2*u*l/(u-l);else if(p===no)b=-u/(u-l),C=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=v,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,u,p=Ci,d=!1){const h=this.elements,x=2/(t-e),v=2/(r-o),_=-(t+e)/(t-e),M=-(r+o)/(r-o);let b,C;if(d)b=1/(u-l),C=u/(u-l);else if(p===Ci)b=-2/(u-l),C=-(u+l)/(u-l);else if(p===no)b=-1/(u-l),C=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=v,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=b,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};rc.prototype.isMatrix4=!0;let an=rc;const ks=new pe,Mi=new an,I_=new pe(0,0,0),U_=new pe(1,1,1),Ar=new pe,xl=new pe,ii=new pe,gm=new an,xm=new ia;class Or{constructor(e=0,t=0,r=0,o=Or.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],p=o[8],d=o[1],h=o[5],x=o[9],v=o[2],_=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(It(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-It(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(It(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-It(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(It(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,h),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(p,l)):(this._x=Math.atan2(-x,M),this._y=0);break;default:pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return gm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xm.setFromEuler(this),this.setFromQuaternion(xm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Or.DEFAULT_ORDER="XYZ";let L0=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},z_=0;const vm=new pe,Os=new ia,tr=new an,vl=new pe,Ga=new pe,F_=new pe,k_=new ia,_m=new pe(1,0,0),ym=new pe(0,1,0),Sm=new pe(0,0,1),Mm={type:"added"},O_={type:"removed"},Bs={type:"childadded",child:null},Ju={type:"childremoved",child:null};class Bn extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new pe,t=new Or,r=new ia,o=new pe(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new an},normalMatrix:{value:new mt}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new L0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(_m,e)}rotateY(e){return this.rotateOnAxis(ym,e)}rotateZ(e){return this.rotateOnAxis(Sm,e)}translateOnAxis(e,t){return vm.copy(e).applyQuaternion(this.quaternion),this.position.add(vm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_m,e)}translateY(e){return this.translateOnAxis(ym,e)}translateZ(e){return this.translateOnAxis(Sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?vl.copy(e):vl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tr.lookAt(Ga,vl,this.up):tr.lookAt(vl,Ga,this.up),this.quaternion.setFromRotationMatrix(tr),o&&(tr.extractRotation(o.matrixWorld),Os.setFromRotationMatrix(tr),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mm),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(O_),Ju.child=e,this.dispatchEvent(Ju),Ju.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(tr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mm),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,e,F_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,k_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,p=l.length;u<p;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(p=>({...p})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(p,d){return p[d.uuid]===void 0&&(p[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const d=p.shapes;if(Array.isArray(d))for(let h=0,x=d.length;h<x;h++){const v=d[h];l(e.shapes,v)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let d=0,h=this.material.length;d<h;d++)p.push(l(e.materials,this.material[d]));o.material=p}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let p=0;p<this.children.length;p++)o.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let p=0;p<this.animations.length;p++){const d=this.animations[p];o.animations.push(l(e.animations,d))}}if(t){const p=u(e.geometries),d=u(e.materials),h=u(e.textures),x=u(e.images),v=u(e.shapes),_=u(e.skeletons),M=u(e.animations),b=u(e.nodes);p.length>0&&(r.geometries=p),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),x.length>0&&(r.images=x),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=o,r;function u(p){const d=[];for(const h in p){const x=p[h];delete x.metadata,d.push(x)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Bn.DEFAULT_UP=new pe(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Xa extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const B_={type:"move"};class Qu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new pe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new pe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new pe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new pe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const p=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const C of e.hand.values()){const y=t.getJointPose(C,r),S=this._getHandJoint(h,C);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const x=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],_=x.position.distanceTo(v.position),M=.02,b=.005;h.inputState.pinching&&_>M+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=M-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(p.matrix.fromArray(o.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,o.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(o.linearVelocity)):p.hasLinearVelocity=!1,o.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(o.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(B_)))}return p!==null&&(p.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Xa;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const D0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},_l={h:0,s:0,l:0};function ed(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class At{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Dt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Dt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Dt.workingColorSpace){if(e=b_(e,1),t=It(t,0,1),r=It(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=ed(u,l,e+1/3),this.g=ed(u,l,e),this.b=ed(u,l,e-1/3)}return Dt.colorSpaceToWorking(this,o),this}setStyle(e,t=si){function r(l){l!==void 0&&parseFloat(l)<1&&pt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],p=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(p))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(p))return r(l[4]),this.setRGB(Math.min(100,parseFloat(l[1]))/100,Math.min(100,parseFloat(l[2]))/100,Math.min(100,parseFloat(l[3]))/100,t);break;case"hsl":case"hsla":if(l=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(p))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:pt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);pt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=si){const r=D0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):pt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return Dt.workingToColorSpace(Fn.copy(this),e),Math.round(It(Fn.r*255,0,255))*65536+Math.round(It(Fn.g*255,0,255))*256+Math.round(It(Fn.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dt.workingColorSpace){Dt.workingToColorSpace(Fn.copy(this),t);const r=Fn.r,o=Fn.g,l=Fn.b,u=Math.max(r,o,l),p=Math.min(r,o,l);let d,h;const x=(p+u)/2;if(p===u)d=0,h=0;else{const v=u-p;switch(h=x<=.5?v/(u+p):v/(2-u-p),u){case r:d=(o-l)/v+(o<l?6:0);break;case o:d=(l-r)/v+2;break;case l:d=(r-o)/v+4;break}d/=6}return e.h=d,e.s=h,e.l=x,e}getRGB(e,t=Dt.workingColorSpace){return Dt.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=si){Dt.workingToColorSpace(Fn.copy(this),e);const t=Fn.r,r=Fn.g,o=Fn.b;return e!==si?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Cr),this.setHSL(Cr.h+e,Cr.s+t,Cr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Cr),e.getHSL(_l);const r=Xu(Cr.h,_l.h,t),o=Xu(Cr.s,_l.s,t),l=Xu(Cr.l,_l.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new At;At.NAMES=D0;class G_ extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Or,this.environmentIntensity=1,this.environmentRotation=new Or,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const wi=new pe,nr=new pe,td=new pe,ir=new pe,Gs=new pe,Hs=new pe,wm=new pe,nd=new pe,id=new pe,rd=new pe,sd=new sn,ad=new sn,od=new sn;class Ai{constructor(e=new pe,t=new pe,r=new pe){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),wi.subVectors(e,t),o.cross(wi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){wi.subVectors(o,t),nr.subVectors(r,t),td.subVectors(e,t);const u=wi.dot(wi),p=wi.dot(nr),d=wi.dot(td),h=nr.dot(nr),x=nr.dot(td),v=u*h-p*p;if(v===0)return l.set(0,0,0),null;const _=1/v,M=(h*d-p*x)*_,b=(u*x-p*d)*_;return l.set(1-M-b,b,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,ir)===null?!1:ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(e,t,r,o,l,u,p,d){return this.getBarycoord(e,t,r,o,ir)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,ir.x),d.addScaledVector(u,ir.y),d.addScaledVector(p,ir.z),d)}static getInterpolatedAttribute(e,t,r,o,l,u){return sd.setScalar(0),ad.setScalar(0),od.setScalar(0),sd.fromBufferAttribute(e,t),ad.fromBufferAttribute(e,r),od.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(sd,l.x),u.addScaledVector(ad,l.y),u.addScaledVector(od,l.z),u}static isFrontFacing(e,t,r,o){return wi.subVectors(r,t),nr.subVectors(e,t),wi.cross(nr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),wi.cross(nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ai.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Ai.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,p;Gs.subVectors(o,r),Hs.subVectors(l,r),nd.subVectors(e,r);const d=Gs.dot(nd),h=Hs.dot(nd);if(d<=0&&h<=0)return t.copy(r);id.subVectors(e,o);const x=Gs.dot(id),v=Hs.dot(id);if(x>=0&&v<=x)return t.copy(o);const _=d*v-x*h;if(_<=0&&d>=0&&x<=0&&d-x>0)return u=d/(d-x),t.copy(r).addScaledVector(Gs,u);rd.subVectors(e,l);const M=Gs.dot(rd),b=Hs.dot(rd);if(b>=0&&M<=b)return t.copy(l);const C=M*h-d*b;if(C<=0&&h>=0&&b<=0)return p=h/(h-b),t.copy(r).addScaledVector(Hs,p);const y=x*b-M*v;if(y<=0&&v-x>=0&&M-b>=0)return wm.subVectors(l,o),p=(v-x)/(v-x+(M-b)),t.copy(o).addScaledVector(wm,p);const S=1/(y+C+_);return u=C*S,p=_*S,t.copy(r).addScaledVector(Gs,u).addScaledVector(Hs,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class so{constructor(e=new pe(1/0,1/0,1/0),t=new pe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let u=0,p=l.count;u<p;u++)e.isMesh===!0?e.getVertexPosition(u,bi):bi.fromBufferAttribute(l,u),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),yl.copy(r.boundingBox)),yl.applyMatrix4(e.matrixWorld),this.union(yl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ha),Sl.subVectors(this.max,Ha),Vs.subVectors(e.a,Ha),Ws.subVectors(e.b,Ha),js.subVectors(e.c,Ha),Rr.subVectors(Ws,Vs),Nr.subVectors(js,Ws),ts.subVectors(Vs,js);let t=[0,-Rr.z,Rr.y,0,-Nr.z,Nr.y,0,-ts.z,ts.y,Rr.z,0,-Rr.x,Nr.z,0,-Nr.x,ts.z,0,-ts.x,-Rr.y,Rr.x,0,-Nr.y,Nr.x,0,-ts.y,ts.x,0];return!ld(t,Vs,Ws,js,Sl)||(t=[1,0,0,0,1,0,0,0,1],!ld(t,Vs,Ws,js,Sl))?!1:(Ml.crossVectors(Rr,Nr),t=[Ml.x,Ml.y,Ml.z],ld(t,Vs,Ws,js,Sl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const rr=[new pe,new pe,new pe,new pe,new pe,new pe,new pe,new pe],bi=new pe,yl=new so,Vs=new pe,Ws=new pe,js=new pe,Rr=new pe,Nr=new pe,ts=new pe,Ha=new pe,Sl=new pe,Ml=new pe,ns=new pe;function ld(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){ns.fromArray(s,l);const p=o.x*Math.abs(ns.x)+o.y*Math.abs(ns.y)+o.z*Math.abs(ns.z),d=e.dot(ns),h=t.dot(ns),x=r.dot(ns);if(Math.max(-Math.max(d,h,x),Math.min(d,h,x))>p)return!1}return!0}const pn=new pe,wl=new Ut;let H_=0;class cs extends fs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:H_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=__,this.updateRanges=[],this.gpuType=Gi,this.version=0,this._normalizationScale=e!==void 0?Sf(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)wl.fromBufferAttribute(this,t),wl.applyMatrix3(e),this.setXY(t,wl.x,wl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix3(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):T_(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):A_(e,this.array)}}class I0 extends cs{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class U0 extends cs{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class jn extends cs{constructor(e,t,r){super(new Float32Array(e),t,r)}}const V_=new so,Va=new pe,cd=new pe;class wf{constructor(e=new pe,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):V_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Va.subVectors(e,this.center);const t=Va.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Va,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Va.copy(e.center).add(cd)),this.expandByPoint(Va.copy(e.center).sub(cd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let W_=0;const pi=new an,ud=new Bn,$s=new pe,ri=new so,Wa=new so,En=new pe;class lr extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=ro(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(y_(e)?U0:I0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new mt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,r){return pi.makeTranslation(e,t,r),this.applyMatrix4(pi),this}scale(e,t,r){return pi.makeScale(e,t,r),this.applyMatrix4(pi),this}lookAt(e){return ud.lookAt(e),ud.updateMatrix(),this.applyMatrix4(ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new jn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new so);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new pe(-1/0,-1/0,-1/0),new pe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];ri.setFromBufferAttribute(l),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new pe,1/0);return}if(e){const r=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const p=t[l];Wa.setFromBufferAttribute(p),this.morphTargetsRelative?(En.addVectors(ri.min,Wa.min),ri.expandByPoint(En),En.addVectors(ri.max,Wa.max),ri.expandByPoint(En)):(ri.expandByPoint(Wa.min),ri.expandByPoint(Wa.max))}ri.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)En.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(En));if(t)for(let l=0,u=t.length;l<u;l++){const p=t[l],d=this.morphTargetsRelative;for(let h=0,x=p.count;h<x;h++)En.fromBufferAttribute(p,h),d&&($s.fromBufferAttribute(e,h),En.add($s)),o=Math.max(o,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new cs(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const p=[],d=[],h=new Uint8Array(r.count);for(let ee=0;ee<r.count;ee++)p[ee]=new pe,d[ee]=new pe;const x=new pe,v=new pe,_=new pe,M=new Ut,b=new Ut,C=new Ut,y=new pe,S=new pe;function R(ee,B,X){h[ee]=h[B]=h[X]=1,x.fromBufferAttribute(r,ee),v.fromBufferAttribute(r,B),_.fromBufferAttribute(r,X),M.fromBufferAttribute(l,ee),b.fromBufferAttribute(l,B),C.fromBufferAttribute(l,X),v.sub(x),_.sub(x),b.sub(M),C.sub(M);const H=1/(b.x*C.y-C.x*b.y);isFinite(H)&&(y.copy(v).multiplyScalar(C.y).addScaledVector(_,-b.y).multiplyScalar(H),S.copy(_).multiplyScalar(b.x).addScaledVector(v,-C.x).multiplyScalar(H),p[ee].add(y),p[B].add(y),p[X].add(y),d[ee].add(S),d[B].add(S),d[X].add(S))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let ee=0,B=F.length;ee<B;++ee){const X=F[ee],H=X.start,j=X.count;for(let W=H,G=H+j;W<G;W+=3)R(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const N=new pe,z=new pe,D=new pe,w=new pe;function P(ee){D.fromBufferAttribute(o,ee),w.copy(D);const B=p[ee];N.copy(B),N.sub(D.multiplyScalar(D.dot(B))).normalize(),z.crossVectors(w,B);const H=z.dot(d[ee])<0?-1:1;u.setXYZW(ee,N.x,N.y,N.z,H)}for(let ee=0,B=r.count;ee<B;++ee)h[ee]&&P(ee);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new cs(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,M=r.count;_<M;_++)r.setXYZ(_,0,0,0);const o=new pe,l=new pe,u=new pe,p=new pe,d=new pe,h=new pe,x=new pe,v=new pe;if(e)for(let _=0,M=e.count;_<M;_+=3){const b=e.getX(_+0),C=e.getX(_+1),y=e.getX(_+2);o.fromBufferAttribute(t,b),l.fromBufferAttribute(t,C),u.fromBufferAttribute(t,y),x.subVectors(u,l),v.subVectors(o,l),x.cross(v),p.fromBufferAttribute(r,b),d.fromBufferAttribute(r,C),h.fromBufferAttribute(r,y),p.add(x),d.add(x),h.add(x),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(C,d.x,d.y,d.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let _=0,M=t.count;_<M;_+=3)o.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),x.subVectors(u,l),v.subVectors(o,l),x.cross(v),r.setXYZ(_+0,x.x,x.y,x.z),r.setXYZ(_+1,x.x,x.y,x.z),r.setXYZ(_+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(p,d){const h=p.array,x=p.itemSize,v=p.normalized,_=new h.constructor(d.length*x);let M=0,b=0;for(let C=0,y=d.length;C<y;C++){p.isInterleavedBufferAttribute?M=d[C]*p.data.stride+p.offset:M=d[C]*x;for(let S=0;S<x;S++)_[b++]=h[M++]}return new cs(_,x,v)}if(this.index===null)return pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new lr,r=this.index.array,o=this.attributes;for(const p in o){const d=o[p],h=e(d,r);t.setAttribute(p,h)}const l=this.morphAttributes;for(const p in l){const d=[],h=l[p];for(let x=0,v=h.length;x<v;x++){const _=h[x],M=e(_,r);d.push(M)}t.morphAttributes[p]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let p=0,d=u.length;p<d;p++){const h=u[p];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],x=[];for(let v=0,_=h.length;v<_;v++){const M=h[v];x.push(M.toJSON(e.data))}x.length>0&&(o[d]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const x=o[h];this.setAttribute(h,x.clone(t))}const l=e.morphAttributes;for(const h in l){const x=[],v=l[h];for(let _=0,M=v.length;_<M;_++)x.push(v[_].clone(t));this.morphAttributes[h]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,x=u.length;h<x;h++){const v=u[h];this.addGroup(v.start,v.count,v.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dd=new pe,j_=new pe,$_=new mt;class Lr{constructor(e=new pe(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=dd.subVectors(r,t).cross(j_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(dd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||$_.getNormalMatrix(e),o=this.coplanarPoint(dd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let X_=0;class ao extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=ro(),this.name="",this.type="Material",this.blending=qa,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=c0,this.blendDst=u0,this.blendEquation=qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Ja,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=h_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ju,this.stencilZFail=ju,this.stencilZPass=ju,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){pt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){pt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const p in l){const d=l[p];delete d.metadata,u.push(d)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new At().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Lr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Ut().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ut().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const sr=new pe,fd=new pe,bl=new pe,El=new pe;class Y_{constructor(e=new pe,t=new pe(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sr.copy(this.origin).addScaledVector(this.direction,t),sr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){fd.copy(e).add(t).multiplyScalar(.5),bl.copy(t).sub(e).normalize(),El.copy(this.origin).sub(fd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(bl),p=El.dot(this.direction),d=-El.dot(bl),h=El.lengthSq(),x=Math.abs(1-u*u);let v,_,M,b;if(x>0)if(v=u*d-p,_=u*p-d,b=l*x,v>=0)if(_>=-b)if(_<=b){const C=1/x;v*=C,_*=C,M=v*(v+u*_+2*p)+_*(u*v+_+2*d)+h}else _=l,v=Math.max(0,-(u*_+p)),M=-v*v+_*(_+2*d)+h;else _=-l,v=Math.max(0,-(u*_+p)),M=-v*v+_*(_+2*d)+h;else _<=-b?(v=Math.max(0,-(-u*l+p)),_=v>0?-l:Math.min(Math.max(-l,-d),l),M=-v*v+_*(_+2*d)+h):_<=b?(v=0,_=Math.min(Math.max(-l,-d),l),M=_*(_+2*d)+h):(v=Math.max(0,-(u*l+p)),_=v>0?l:Math.min(Math.max(-l,-d),l),M=-v*v+_*(_+2*d)+h);else _=u>0?-l:l,v=Math.max(0,-(u*_+p)),M=-v*v+_*(_+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(fd).addScaledVector(bl,_),M}intersectSphere(e,t){if(e.radius<0)return null;sr.subVectors(e.center,this.origin);const r=sr.dot(this.direction),o=sr.dot(sr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),p=r-u,d=r+u;return d<0?null:p<0?this.at(d,t):this.at(p,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,p,d;const h=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,_=this.origin;return h>=0?(r=(e.min.x-_.x)*h,o=(e.max.x-_.x)*h):(r=(e.max.x-_.x)*h,o=(e.min.x-_.x)*h),x>=0?(l=(e.min.y-_.y)*x,u=(e.max.y-_.y)*x):(l=(e.max.y-_.y)*x,u=(e.min.y-_.y)*x),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),v>=0?(p=(e.min.z-_.z)*v,d=(e.max.z-_.z)*v):(p=(e.max.z-_.z)*v,d=(e.min.z-_.z)*v),r>d||p>o)||((p>r||r!==r)&&(r=p),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,sr)!==null}intersectTriangle(e,t,r,o,l){const u=this.origin,p=this.direction,d=p.x,h=p.y,x=p.z,v=e.x-u.x,_=e.y-u.y,M=e.z-u.z,b=t.x-u.x,C=t.y-u.y,y=t.z-u.z,S=r.x-u.x,R=r.y-u.y,F=r.z-u.z,N=Math.abs(d),z=Math.abs(h),D=Math.abs(x);let w,P,ee,B,X,H,j,W,G,re,J,$;if(N>=z&&N>=D?(ee=d,H=v,G=b,$=S,d>=0?(w=h,P=x,B=_,X=M,j=C,W=y,re=R,J=F):(w=x,P=h,B=M,X=_,j=y,W=C,re=F,J=R)):z>=D?(ee=h,H=_,G=C,$=R,h>=0?(w=x,P=d,B=M,X=v,j=y,W=b,re=F,J=S):(w=d,P=x,B=v,X=M,j=b,W=y,re=S,J=F)):(ee=x,H=M,G=y,$=F,x>=0?(w=d,P=h,B=v,X=_,j=b,W=C,re=S,J=R):(w=h,P=d,B=_,X=v,j=C,W=b,re=R,J=S)),ee===0)return null;const Y=w/ee,q=P/ee,I=1/ee,ne=B-Y*H,Ae=X-q*H,se=j-Y*G,V=W-q*G,we=re-Y*$,De=J-q*$,Me=we*V-De*se,ke=ne*De-Ae*we,lt=se*Ae-V*ne;if(o){if(Me<0||ke<0||lt<0)return null}else if((Me<0||ke<0||lt<0)&&(Me>0||ke>0||lt>0))return null;const He=Me+ke+lt;if(He===0)return null;const Re=I*(Me*H+ke*G+lt*$);return(He>0?Re<0:Re>0)?null:this.at(Re/He,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class z0 extends ao{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Or,this.combine=d0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bm=new an,is=new Y_,Tl=new wf,Em=new pe,Al=new pe,Cl=new pe,Rl=new pe,hd=new pe,Nl=new pe,Tm=new pe,Pl=new pe;class Wn extends Bn{constructor(e=new lr,t=new z0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const p=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const p=this.morphTargetInfluences;if(l&&p){Nl.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const x=p[d],v=l[d];x!==0&&(hd.fromBufferAttribute(v,e),u?Nl.addScaledVector(hd,x):Nl.addScaledVector(hd.sub(t),x))}t.add(Nl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Tl.copy(r.boundingSphere),Tl.applyMatrix4(l),is.copy(e.ray).recast(e.near),!(Tl.containsPoint(is.origin)===!1&&(is.intersectSphere(Tl,Em)===null||is.origin.distanceToSquared(Em)>(e.far-e.near)**2))&&(bm.copy(l).invert(),is.copy(e.ray).applyMatrix4(bm),!(r.boundingBox!==null&&is.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,p=l.index,d=l.attributes.position,h=l.attributes.uv,x=l.attributes.uv1,v=l.attributes.normal,_=l.groups,M=l.drawRange;if(p!==null)if(Array.isArray(u))for(let b=0,C=_.length;b<C;b++){const y=_[b],S=u[y.materialIndex],R=Math.max(y.start,M.start),F=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let N=R,z=F;N<z;N+=3){const D=p.getX(N),w=p.getX(N+1),P=p.getX(N+2);o=Ll(this,S,e,r,h,x,v,D,w,P),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const b=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let y=b,S=C;y<S;y+=3){const R=p.getX(y),F=p.getX(y+1),N=p.getX(y+2);o=Ll(this,u,e,r,h,x,v,R,F,N),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let b=0,C=_.length;b<C;b++){const y=_[b],S=u[y.materialIndex],R=Math.max(y.start,M.start),F=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let N=R,z=F;N<z;N+=3){const D=N,w=N+1,P=N+2;o=Ll(this,S,e,r,h,x,v,D,w,P),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const b=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let y=b,S=C;y<S;y+=3){const R=y,F=y+1,N=y+2;o=Ll(this,u,e,r,h,x,v,R,F,N),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function q_(s,e,t,r,o,l,u,p){let d;if(e.side===kn?d=r.intersectTriangle(u,l,o,!0,p):d=r.intersectTriangle(o,l,u,e.side===us,p),d===null)return null;Pl.copy(p),Pl.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(Pl);return h<t.near||h>t.far?null:{distance:h,point:Pl.clone(),object:s}}function Ll(s,e,t,r,o,l,u,p,d,h){s.getVertexPosition(p,Al),s.getVertexPosition(d,Cl),s.getVertexPosition(h,Rl);const x=q_(s,e,t,r,Al,Cl,Rl,Tm);if(x){const v=new pe;Ai.getBarycoord(Tm,Al,Cl,Rl,v),o&&(x.uv=Ai.getInterpolatedAttribute(o,p,d,h,v,new Ut)),l&&(x.uv1=Ai.getInterpolatedAttribute(l,p,d,h,v,new Ut)),u&&(x.normal=Ai.getInterpolatedAttribute(u,p,d,h,v,new pe),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const _={a:p,b:d,c:h,normal:new pe,materialIndex:0};Ai.getNormal(Al,Cl,Rl,_.normal),x.face=_,x.barycoord=v}return x}class K_ extends On{constructor(e=null,t=1,r=1,o,l,u,p,d,h=Cn,x=Cn,v,_){super(null,u,p,d,h,x,o,l,v,_),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rs=new wf,Z_=new Ut(.5,.5),Dl=new pe;class io{constructor(e=new Lr,t=new Lr,r=new Lr,o=new Lr,l=new Lr,u=new Lr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const p=this.planes;return p[0].copy(e),p[1].copy(t),p[2].copy(r),p[3].copy(o),p[4].copy(l),p[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ci,r=!1){const o=this.planes,l=e.elements,u=l[0],p=l[1],d=l[2],h=l[3],x=l[4],v=l[5],_=l[6],M=l[7],b=l[8],C=l[9],y=l[10],S=l[11],R=l[12],F=l[13],N=l[14],z=l[15];if(o[0].setComponents(h-u,M-x,S-b,z-R).normalize(),o[1].setComponents(h+u,M+x,S+b,z+R).normalize(),o[2].setComponents(h+p,M+v,S+C,z+F).normalize(),o[3].setComponents(h-p,M-v,S-C,z-F).normalize(),r)o[4].setComponents(d,_,y,N).normalize(),o[5].setComponents(h-d,M-_,S-y,z-N).normalize();else if(o[4].setComponents(h-d,M-_,S-y,z-N).normalize(),t===Ci)o[5].setComponents(h+d,M+_,S+y,z+N).normalize();else if(t===no)o[5].setComponents(d,_,y,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){rs.center.set(0,0,0);const t=Z_.distanceTo(e.center);return rs.radius=.7071067811865476+t,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Dl.x=o.normal.x>0?e.max.x:e.min.x,Dl.y=o.normal.y>0?e.max.y:e.min.y,Dl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Dl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Am=new an;class bf{constructor(){this.coordinateSystem=Ci,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let o=0;o<t.length;o++){const l=t[o];Am.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),r[o]===void 0&&(r[o]=new io),r[o].setFromProjectionMatrix(Am,l.coordinateSystem,l.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let o=0;o<e._count;o++)t[o]===void 0&&(t[o]=new io),t[o].copy(r[o]);return this._count=e._count,this}clone(){return new bf().copy(this)}}class F0 extends On{constructor(e=[],t=Qs,r,o,l,u,p,d,h,x){super(e,t,r,o,l,u,p,d,h,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ef extends On{constructor(e,t,r,o,l,u,p,d,h){super(e,t,r,o,l,u,p,d,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ta extends On{constructor(e,t,r=Wi,o,l,u,p=Cn,d=Cn,h,x=kr,v=1){if(x!==kr&&x!==zr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:v};super(_,o,l,u,p,d,x,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class k0 extends ta{constructor(e,t=Wi,r=Qs,o,l,u=Cn,p=Cn,d,h=kr){const x={width:e,height:e,depth:1},v=[x,x,x,x,x,x];super(e,e,t,r,o,l,u,p,d,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class O0 extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class oo extends lr{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const p=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const d=[],h=[],x=[],v=[];let _=0,M=0;b("z","y","x",-1,-1,r,t,e,u,l,0),b("z","y","x",1,-1,r,t,-e,u,l,1),b("x","z","y",1,1,e,r,t,o,u,2),b("x","z","y",1,-1,e,r,-t,o,u,3),b("x","y","z",1,-1,e,t,r,o,l,4),b("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new jn(h,3)),this.setAttribute("normal",new jn(x,3)),this.setAttribute("uv",new jn(v,2));function b(C,y,S,R,F,N,z,D,w,P,ee){const B=N/w,X=z/P,H=N/2,j=z/2,W=D/2,G=w+1,re=P+1;let J=0,$=0;const Y=new pe;for(let q=0;q<re;q++){const I=q*X-j;for(let ne=0;ne<G;ne++){const Ae=ne*B-H;Y[C]=Ae*R,Y[y]=I*F,Y[S]=W,h.push(Y.x,Y.y,Y.z),Y[C]=0,Y[y]=0,Y[S]=D>0?1:-1,x.push(Y.x,Y.y,Y.z),v.push(ne/w),v.push(1-q/P),J+=1}}for(let q=0;q<P;q++)for(let I=0;I<w;I++){const ne=_+I+G*q,Ae=_+I+G*(q+1),se=_+(I+1)+G*(q+1),V=_+(I+1)+G*q;d.push(ne,Ae,V),d.push(Ae,se,V),$+=6}p.addGroup(M,$,ee),M+=$,_+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class lo extends lr{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,p=Math.floor(r),d=Math.floor(o),h=p+1,x=d+1,v=e/p,_=t/d,M=[],b=[],C=[],y=[];for(let S=0;S<x;S++){const R=S*_-u;for(let F=0;F<h;F++){const N=F*v-l;b.push(N,-R,0),C.push(0,0,1),y.push(F/p),y.push(1-S/d)}}for(let S=0;S<d;S++)for(let R=0;R<p;R++){const F=R+h*S,N=R+h*(S+1),z=R+1+h*(S+1),D=R+1+h*S;M.push(F,N,D),M.push(N,z,D)}this.setIndex(M),this.setAttribute("position",new jn(b,3)),this.setAttribute("normal",new jn(C,3)),this.setAttribute("uv",new jn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Tf extends lr{constructor(e=.5,t=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const p=[],d=[],h=[],x=[];let v=e;const _=(t-e)/o,M=new pe,b=new Ut;for(let C=0;C<=o;C++){for(let y=0;y<=r;y++){const S=l+y/r*u;M.x=v*Math.cos(S),M.y=v*Math.sin(S),d.push(M.x,M.y,M.z),h.push(0,0,1),b.x=(M.x/t+1)/2,b.y=(M.y/t+1)/2,x.push(b.x,b.y)}v+=_}for(let C=0;C<o;C++){const y=C*(r+1);for(let S=0;S<r;S++){const R=S+y,F=R,N=R+r+1,z=R+r+2,D=R+1;p.push(F,N,D),p.push(N,z,D)}}this.setIndex(p),this.setAttribute("position",new jn(d,3)),this.setAttribute("normal",new jn(h,3)),this.setAttribute("uv",new jn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Dr extends lr{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:p},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const d=Math.min(u+p,Math.PI);let h=0;const x=[],v=new pe,_=new pe,M=[],b=[],C=[],y=[];for(let S=0;S<=r;S++){const R=[],F=S/r,N=u+F*p,z=e*Math.cos(N),D=Math.sqrt(e*e-z*z);let w=0;S===0&&u===0?w=.5/t:S===r&&d===Math.PI&&(w=-.5/t);for(let P=0;P<=t;P++){const ee=P/t,B=o+ee*l;v.x=-D*Math.cos(B),v.y=z,v.z=D*Math.sin(B),b.push(v.x,v.y,v.z),_.copy(v).normalize(),C.push(_.x,_.y,_.z),y.push(ee+w,1-F),R.push(h++)}x.push(R)}for(let S=0;S<r;S++)for(let R=0;R<t;R++){const F=x[S][R+1],N=x[S][R],z=x[S+1][R],D=x[S+1][R+1];(S!==0||u>0)&&M.push(F,N,D),(S!==r-1||d<Math.PI)&&M.push(N,z,D)}this.setIndex(M),this.setAttribute("position",new jn(b,3)),this.setAttribute("normal",new jn(C,3)),this.setAttribute("uv",new jn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function na(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(Cm(o))o.isRenderTargetTexture?(pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Cm(o[0])){const l=[];for(let u=0,p=o.length;u<p;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Vn(s){const e={};for(let t=0;t<s.length;t++){const r=na(s[t]);for(const o in r)e[o]=r[o]}return e}function Cm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function J_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function B0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const Q_={clone:na,merge:Vn};var ey=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ty=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends ao{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ey,this.fragmentShader=ty,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=na(e.uniforms),this.uniformsGroups=J_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new At().setHex(o.value);break;case"v2":this.uniforms[r].value=new Ut().fromArray(o.value);break;case"v3":this.uniforms[r].value=new pe().fromArray(o.value);break;case"v4":this.uniforms[r].value=new sn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new mt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new an().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class ny extends Ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pd extends ao{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rf,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Or,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class iy extends ao{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=d_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ry extends ao{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class G0 extends Bn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const md=new an,Rm=new pe,Nm=new pe;class sy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new an,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new io,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Rm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rm),Nm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,o){md.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(md,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,p=o?o.w/l.y:1,d=o?o.x/l.x:0,h=o?o.y/l.y:0;e.coordinateSystem===no||e.reversedDepth?t.set(.5*u,0,0,.5*u+d,0,.5*p,0,.5*p+h,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+d,0,.5*p,0,.5*p+h,0,0,.5,.5,0,0,0,1),t.multiply(md)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Il=new pe,Ul=new ia,Fi=new pe;class H0 extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Il,Ul,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Il,Ul,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Il,Ul,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Il,Ul,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Pr=new pe,Pm=new Ut,Lm=new Ut;class Ti extends H0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($u*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sf*2*Math.atan(Math.tan($u*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z),Pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z)}getViewSize(e,t){return this.getViewBounds(e,Pm,Lm),t.subVectors(Lm,Pm)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($u*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;l+=u.offsetX*o/d,t-=u.offsetY*r/h,o*=u.width/d,r*=u.height/h}const p=this.filmOffset;p!==0&&(l+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class V0 extends H0{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,p=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,p-=x*this.view.offsetY,d=p-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,p,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ay extends sy{constructor(){super(new V0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oy extends G0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.target=new Bn,this.shadow=new ay}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class ly extends G0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Xs=-90,Ys=1;class af extends Bn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ti(Xs,Ys,e,t);o.layers=this.layers,this.add(o);const l=new Ti(Xs,Ys,e,t);l.layers=this.layers,this.add(l);const u=new Ti(Xs,Ys,e,t);u.layers=this.layers,this.add(u);const p=new Ti(Xs,Ys,e,t);p.layers=this.layers,this.add(p);const d=new Ti(Xs,Ys,e,t);d.layers=this.layers,this.add(d);const h=new Ti(Xs,Ys,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,p,d]=t;for(const h of t)this.remove(h);if(e===Ci)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===no)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,p,d,h,x]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.mipmapsAutoUpdate=C,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,x),e.setRenderTarget(v,_,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class cy extends Ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Dm(s,e,t,r){const o=uy(r);switch(t){case b0:return s*e;case T0:return s*e/o.components*o.byteLength;case vf:return s*e/o.components*o.byteLength;case ds:return s*e*2/o.components*o.byteLength;case _f:return s*e*2/o.components*o.byteLength;case E0:return s*e*3/o.components*o.byteLength;case Hi:return s*e*4/o.components*o.byteLength;case yf:return s*e*4/o.components*o.byteLength;case Ol:case Bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Gl:case Hl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Cd:case Nd:return Math.max(s,16)*Math.max(e,8)/4;case Ad:case Rd:return Math.max(s,8)*Math.max(e,8)/2;case Pd:case Ld:case Id:case Ud:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Dd:case Xl:case zd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Od:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case jd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case $d:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Xd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Yd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case qd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Kd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Zd:case Jd:case Qd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ef:case tf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Yl:case nf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function uy(s){switch(s){case ai:case y0:return{byteLength:1,components:1};case to:case S0:case ji:return{byteLength:2,components:1};case gf:case xf:return{byteLength:2,components:4};case Wi:case mf:case Gi:return{byteLength:4,components:1};case M0:case w0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pf}}));typeof window<"u"&&(window.__THREE__?pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function W0(){let s=null,e=!1,t=null,r=null;function o(l,u){r=s.requestAnimationFrame(o),t(l,u)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function dy(s){const e=new WeakMap;function t(p,d){const h=p.array,x=p.usage,v=h.byteLength,_=s.createBuffer();s.bindBuffer(d,_),s.bufferData(d,h,x),p.onUploadCallback();let M;if(h instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=s.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=s.SHORT;else if(h instanceof Uint32Array)M=s.UNSIGNED_INT;else if(h instanceof Int32Array)M=s.INT;else if(h instanceof Int8Array)M=s.BYTE;else if(h instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:v}}function r(p,d,h){const x=d.array,v=d.updateRanges;if(s.bindBuffer(h,p),v.length===0)s.bufferSubData(h,0,x);else{v.sort((M,b)=>M.start-b.start);let _=0;for(let M=1;M<v.length;M++){const b=v[_],C=v[M];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++_,v[_]=C)}v.length=_+1;for(let M=0,b=v.length;M<b;M++){const C=v[M];s.bufferSubData(h,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function l(p){p.isInterleavedBufferAttribute&&(p=p.data);const d=e.get(p);d&&(s.deleteBuffer(d.buffer),e.delete(p))}function u(p,d){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const x=e.get(p);(!x||x.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,t(p,d));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,p,d),h.version=p.version}}return{get:o,remove:l,update:u}}var fy=`#ifdef USE_ALPHAHASH
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
} // validated`,zy=`vec3 transformedNormal = objectNormal;
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
#endif`,Fy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ky=`#ifdef USE_DISPLACEMENTMAP
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
#endif`,$y=`#ifdef USE_ENVMAP
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
#endif`,zS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kS=`#ifdef USE_IRIDESCENCEMAP
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
#endif`,$S=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
}`,z1=`#define STANDARD
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
}`,F1=`#define TOON
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
}`,k1=`#define TOON
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
}`,_t={alphahash_fragment:fy,alphahash_pars_fragment:hy,alphamap_fragment:py,alphamap_pars_fragment:my,alphatest_fragment:gy,alphatest_pars_fragment:xy,aomap_fragment:vy,aomap_pars_fragment:_y,batching_pars_vertex:yy,batching_vertex:Sy,begin_vertex:My,beginnormal_vertex:wy,bsdfs:by,iridescence_fragment:Ey,bumpmap_pars_fragment:Ty,clipping_planes_fragment:Ay,clipping_planes_pars_fragment:Cy,clipping_planes_pars_vertex:Ry,clipping_planes_vertex:Ny,color_fragment:Py,color_pars_fragment:Ly,color_pars_vertex:Dy,color_vertex:Iy,common:Uy,defaultnormal_vertex:zy,displacementmap_pars_vertex:Fy,displacementmap_vertex:ky,emissivemap_fragment:Oy,emissivemap_pars_fragment:By,colorspace_fragment:Gy,colorspace_pars_fragment:Hy,envmap_fragment:Vy,envmap_common_pars_fragment:Wy,envmap_pars_fragment:jy,envmap_pars_vertex:$y,envmap_physical_pars_fragment:iS,envmap_vertex:Xy,fog_vertex:Yy,fog_pars_vertex:qy,fog_fragment:Ky,fog_pars_fragment:Zy,gradientmap_pars_fragment:Jy,lightmap_pars_fragment:Qy,lights_lambert_fragment:eS,lights_lambert_pars_fragment:tS,lights_pars_begin:nS,lights_toon_fragment:rS,lights_toon_pars_fragment:sS,lights_phong_fragment:aS,lights_phong_pars_fragment:oS,lights_physical_fragment:lS,lights_physical_pars_fragment:cS,lights_fragment_begin:uS,lights_fragment_maps:dS,lights_fragment_end:fS,lightprobes_pars_fragment:hS,logdepthbuf_fragment:pS,logdepthbuf_pars_fragment:mS,logdepthbuf_pars_vertex:gS,logdepthbuf_vertex:xS,map_fragment:vS,map_pars_fragment:_S,map_particle_fragment:yS,map_particle_pars_fragment:SS,metalnessmap_fragment:MS,metalnessmap_pars_fragment:wS,morphinstance_vertex:bS,morphcolor_vertex:ES,morphnormal_vertex:TS,morphtarget_pars_vertex:AS,morphtarget_vertex:CS,normal_fragment_begin:RS,normal_fragment_maps:NS,normal_pars_fragment:PS,normal_pars_vertex:LS,normal_vertex:DS,normalmap_pars_fragment:IS,clearcoat_normal_fragment_begin:US,clearcoat_normal_fragment_maps:zS,clearcoat_pars_fragment:FS,iridescence_pars_fragment:kS,opaque_fragment:OS,packing:BS,premultiplied_alpha_fragment:GS,project_vertex:HS,dithering_fragment:VS,dithering_pars_fragment:WS,roughnessmap_fragment:jS,roughnessmap_pars_fragment:$S,shadowmap_pars_fragment:XS,shadowmap_pars_vertex:YS,shadowmap_vertex:qS,shadowmask_pars_fragment:KS,skinbase_vertex:ZS,skinning_pars_vertex:JS,skinning_vertex:QS,skinnormal_vertex:e1,specularmap_fragment:t1,specularmap_pars_fragment:n1,tonemapping_fragment:i1,tonemapping_pars_fragment:r1,transmission_fragment:s1,transmission_pars_fragment:a1,uv_pars_fragment:o1,uv_pars_vertex:l1,uv_vertex:c1,worldpos_vertex:u1,background_vert:d1,background_frag:f1,backgroundCube_vert:h1,backgroundCube_frag:p1,cube_vert:m1,cube_frag:g1,depth_vert:x1,depth_frag:v1,distance_vert:_1,distance_frag:y1,equirect_vert:S1,equirect_frag:M1,linedashed_vert:w1,linedashed_frag:b1,meshbasic_vert:E1,meshbasic_frag:T1,meshlambert_vert:A1,meshlambert_frag:C1,meshmatcap_vert:R1,meshmatcap_frag:N1,meshnormal_vert:P1,meshnormal_frag:L1,meshphong_vert:D1,meshphong_frag:I1,meshphysical_vert:U1,meshphysical_frag:z1,meshtoon_vert:F1,meshtoon_frag:k1,points_vert:O1,points_frag:B1,shadow_vert:G1,shadow_frag:H1,sprite_vert:V1,sprite_frag:W1},$e={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Oi={basic:{uniforms:Vn([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Vn([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Vn([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Vn([$e.common,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.roughnessmap,$e.metalnessmap,$e.fog,$e.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Vn([$e.common,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.gradientmap,$e.fog,$e.lights,{emissive:{value:new At(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Vn([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Vn([$e.points,$e.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Vn([$e.common,$e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Vn([$e.common,$e.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Vn([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Vn([$e.sprite,$e.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:Vn([$e.common,$e.displacementmap,{referencePosition:{value:new pe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:Vn([$e.lights,$e.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Oi.physical={uniforms:Vn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new mt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const zl={r:0,b:0,g:0},j1=new an,j0=new mt;j0.set(-1,0,0,0,1,0,0,0,1);function $1(s,e,t,r,o,l){const u=new At(0);let p=o===!0?0:1,d,h,x=null,v=0,_=null;function M(R){let F=R.isScene===!0?R.background:null;if(F&&F.isTexture){const N=R.backgroundBlurriness>0;F=e.get(F,N)}return F}function b(R){let F=!1;const N=M(R);N===null?y(u,p):N&&N.isColor&&(y(N,1),F=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?t.buffers.color.setClear(0,0,0,1,l):z==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||F)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(R,F){const N=M(F);N&&N.isCubeTexture?(h===void 0&&(h=new Wn(new oo(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:na(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(z,D,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=N,h.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(j1.makeRotationFromEuler(F.backgroundRotation)).transpose(),N.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(j0),h.material.toneMapped=Dt.getTransfer(N.colorSpace)!==jt,(x!==N||v!==N.version||_!==s.toneMapping)&&(h.material.needsUpdate=!0,x=N,v=N.version,_=s.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):N&&N.isTexture&&(d===void 0&&(d=new Wn(new lo(2,2),new Ri({name:"BackgroundMaterial",uniforms:na(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=N,d.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,d.material.toneMapped=Dt.getTransfer(N.colorSpace)!==jt,N.matrixAutoUpdate===!0&&N.updateMatrix(),d.material.uniforms.uvTransform.value.copy(N.matrix),(x!==N||v!==N.version||_!==s.toneMapping)&&(d.material.needsUpdate=!0,x=N,v=N.version,_=s.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null))}function y(R,F){R.getRGB(zl,B0(s)),t.buffers.color.setClear(zl.r,zl.g,zl.b,F,l)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(R,F=1){u.set(R),p=F,y(u,p)},getClearAlpha:function(){return p},setClearAlpha:function(R){p=R,y(u,p)},render:b,addToRenderList:C,dispose:S}}function X1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=_(null);let l=o,u=!1;function p(X,H,j,W,G){let re=!1;const J=v(X,W,j,H);l!==J&&(l=J,h(l.object)),re=M(X,W,j,G),re&&b(X,W,j,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(re||u)&&(u=!1,N(X,H,j,W),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function d(){return s.createVertexArray()}function h(X){return s.bindVertexArray(X)}function x(X){return s.deleteVertexArray(X)}function v(X,H,j,W){const G=W.wireframe===!0;let re=r[H.id];re===void 0&&(re={},r[H.id]=re);const J=X.isInstancedMesh===!0?X.id:0;let $=re[J];$===void 0&&($={},re[J]=$);let Y=$[j.id];Y===void 0&&(Y={},$[j.id]=Y);let q=Y[G];return q===void 0&&(q=_(d()),Y[G]=q),q}function _(X){const H=[],j=[],W=[];for(let G=0;G<t;G++)H[G]=0,j[G]=0,W[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:j,attributeDivisors:W,object:X,attributes:{},index:null}}function M(X,H,j,W){const G=l.attributes,re=H.attributes;let J=0;const $=j.getAttributes();for(const Y in $)if($[Y].location>=0){const I=G[Y];let ne=re[Y];if(ne===void 0&&(Y==="instanceMatrix"&&X.instanceMatrix&&(ne=X.instanceMatrix),Y==="instanceColor"&&X.instanceColor&&(ne=X.instanceColor)),I===void 0||I.attribute!==ne||ne&&I.data!==ne.data)return!0;J++}return l.attributesNum!==J||l.index!==W}function b(X,H,j,W){const G={},re=H.attributes;let J=0;const $=j.getAttributes();for(const Y in $)if($[Y].location>=0){let I=re[Y];I===void 0&&(Y==="instanceMatrix"&&X.instanceMatrix&&(I=X.instanceMatrix),Y==="instanceColor"&&X.instanceColor&&(I=X.instanceColor));const ne={};ne.attribute=I,I&&I.data&&(ne.data=I.data),G[Y]=ne,J++}l.attributes=G,l.attributesNum=J,l.index=W}function C(){const X=l.newAttributes;for(let H=0,j=X.length;H<j;H++)X[H]=0}function y(X){S(X,0)}function S(X,H){const j=l.newAttributes,W=l.enabledAttributes,G=l.attributeDivisors;j[X]=1,W[X]===0&&(s.enableVertexAttribArray(X),W[X]=1),G[X]!==H&&(s.vertexAttribDivisor(X,H),G[X]=H)}function R(){const X=l.newAttributes,H=l.enabledAttributes;for(let j=0,W=H.length;j<W;j++)H[j]!==X[j]&&(s.disableVertexAttribArray(j),H[j]=0)}function F(X,H,j,W,G,re,J){J===!0?s.vertexAttribIPointer(X,H,j,G,re):s.vertexAttribPointer(X,H,j,W,G,re)}function N(X,H,j,W){C();const G=W.attributes,re=j.getAttributes(),J=H.defaultAttributeValues;for(const $ in re){const Y=re[$];if(Y.location>=0){let q=G[$];if(q===void 0&&($==="instanceMatrix"&&X.instanceMatrix&&(q=X.instanceMatrix),$==="instanceColor"&&X.instanceColor&&(q=X.instanceColor)),q!==void 0){const I=q.normalized,ne=q.itemSize,Ae=e.get(q);if(Ae===void 0)continue;const se=Ae.buffer,V=Ae.type,we=Ae.bytesPerElement,De=V===s.INT||V===s.UNSIGNED_INT||q.gpuType===mf;if(q.isInterleavedBufferAttribute){const Me=q.data,ke=Me.isInterleavedBuffer===!0?Me.stride:Me.itemSize,lt=q.offset;if(Me.isInstancedInterleavedBuffer||Me.isInstancedBufferAttribute){for(let He=0;He<Y.locationSize;He++)S(Y.location+He,Me.meshPerAttribute);X.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let He=0;He<Y.locationSize;He++)y(Y.location+He);s.bindBuffer(s.ARRAY_BUFFER,se);for(let He=0;He<Y.locationSize;He++)F(Y.location+He,ne/Y.locationSize,V,I,ke*we,(lt+ne/Y.locationSize*He)*we,De)}else{if(q.isInstancedBufferAttribute){for(let Me=0;Me<Y.locationSize;Me++)S(Y.location+Me,q.meshPerAttribute);X.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Me=0;Me<Y.locationSize;Me++)y(Y.location+Me);s.bindBuffer(s.ARRAY_BUFFER,se);for(let Me=0;Me<Y.locationSize;Me++)F(Y.location+Me,ne/Y.locationSize,V,I,ne*we,ne/Y.locationSize*Me*we,De)}}else if(J!==void 0){const I=J[$];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(Y.location,I);break;case 3:s.vertexAttrib3fv(Y.location,I);break;case 4:s.vertexAttrib4fv(Y.location,I);break;default:s.vertexAttrib1fv(Y.location,I)}}}}R()}function z(){ee();for(const X in r){const H=r[X];for(const j in H){const W=H[j];for(const G in W){const re=W[G];for(const J in re)x(re[J].object),delete re[J];delete W[G]}}delete r[X]}}function D(X){if(r[X.id]===void 0)return;const H=r[X.id];for(const j in H){const W=H[j];for(const G in W){const re=W[G];for(const J in re)x(re[J].object),delete re[J];delete W[G]}}delete r[X.id]}function w(X){for(const H in r){const j=r[H];for(const W in j){const G=j[W];if(G[X.id]===void 0)continue;const re=G[X.id];for(const J in re)x(re[J].object),delete re[J];delete G[X.id]}}}function P(X){for(const H in r){const j=r[H],W=X.isInstancedMesh===!0?X.id:0,G=j[W];if(G!==void 0){for(const re in G){const J=G[re];for(const $ in J)x(J[$].object),delete J[$];delete G[re]}delete j[W],Object.keys(j).length===0&&delete r[H]}}}function ee(){B(),u=!0,l!==o&&(l=o,h(l.object))}function B(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:p,reset:ee,resetDefaultState:B,dispose:z,releaseStatesOfGeometry:D,releaseStatesOfObject:P,releaseStatesOfProgram:w,initAttributes:C,enableAttribute:y,disableUnusedAttributes:R}}function Y1(s,e,t){let r;function o(d){r=d}function l(d,h){s.drawArrays(r,d,h),t.update(h,r,1)}function u(d,h,x){x!==0&&(s.drawArraysInstanced(r,d,h,x),t.update(h,r,x))}function p(d,h,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,h,0,x);let _=0;for(let M=0;M<x;M++)_+=h[M];t.update(_,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=p}function q1(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(w){return!(w!==Hi&&r.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(w){const P=w===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ai&&w!==Gi&&!P&&r.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function d(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const x=d(h);x!==h&&(pt("WebGLRenderer:",h,"not supported, using",x,"instead."),h=x);const v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),_=t.logarithmicDepthBuffer===!0&&v===!1;t.reversedDepthBuffer===!0&&v===!1&&pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&v===!0&&pt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),R=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),F=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=s.getParameter(s.MAX_SAMPLES),D=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:M,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:R,maxVaryings:F,maxFragmentUniforms:N,maxSamples:z,samples:D}}function K1(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Lr,p=new mt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const M=v.length!==0||_||r!==0||o;return o=_,r=v.length,M},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,_){t=x(v,_,0)},this.setState=function(v,_,M){const b=v.clippingPlanes,C=v.clipIntersection,y=v.clipShadows,S=s.get(v);if(!o||b===null||b.length===0||l&&!y)l?x(null):h();else{const R=l?0:r,F=R*4;let N=S.clippingState||null;d.value=N,N=x(b,_,F,M);for(let z=0;z!==F;++z)N[z]=t[z];S.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=R}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(v,_,M,b){const C=v!==null?v.length:0;let y=null;if(C!==0){if(y=d.value,b!==!0||y===null){const S=M+C*4,R=_.matrixWorldInverse;p.getNormalMatrix(R),(y===null||y.length<S)&&(y=new Float32Array(S));for(let F=0,N=M;F!==C;++F,N+=4)u.copy(v[F]).applyMatrix4(R,p),u.normal.toArray(y,N),y[N+3]=u.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}class Af extends Vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new F0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new oo(5,5,5),l=new Ri({name:"CubemapFromEquirect",uniforms:na(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:Zs});l.uniforms.tEquirect.value=t;const u=new Wn(o,l),p=t.minFilter;return t.minFilter===Ur&&(t.minFilter=Jn),new af(1,10,this).update(e,u),t.minFilter=p,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}const Im=256,Z1=3,J1=20,$0=256,X0=16,Q1=3,eM=new pe,tM=new At;class Jl{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new af(1,10,null),this._boxMesh=new Wn(new oo(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:p=eM}=l,d=this._renderer;this._setSize(u);const h=this._allocateTarget(),x=this._getSourceTarget(!0);t>0&&(x.texture.mipmapsAutoUpdate=!1);const v=d.autoClear,_=d.autoClearColor,M=d.autoClearDepth,b=d.autoClearStencil,C=e.background;d.autoClear=!0,d.autoClearColor=!0,d.autoClearDepth=!0,d.autoClearStencil=!0,C===null&&(e.background=d.getClearColor(tM));const y=new af(r,o,x);return y.position.copy(p),y.update(d,e),d.autoClear=v,d.autoClearColor=_,d.autoClearDepth=M,d.autoClearStencil=b,e.background=C,t>0&&(x.texture.mipmapsAutoUpdate=!0,this._blur(h,t)),this._applyPMREM(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Im,E_(e))}_fromTexture(e,t){e.mapping===Qs||e.mapping===Qa?this._setSize(e.image.length===0?Im:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=Um(e,!1,!1),r=Math.log2(e)-Z1;for(let o=0;o<=r;o++)t.texture.mipmaps.push({width:e>>o,height:e>>o});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=Um(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const o=this._boxMesh,l=this._cubeCamera;o.material=r,l.renderTarget=e,l.activeMipmapLevel=t;const u=e.width>>t;e.viewport.set(0,0,u,u),l.update(this._renderer,o),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Qs||e.mapping===Qa?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=zm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=nM(),this._integrationMaterial=iM());const t=this._cubeSize,r=e.texture.mipmaps.length-1,o=this._ggxMaterial.uniforms;o.envMap.value=this._sourceTarget.texture;const l=this._integrationMaterial.uniforms;l.envMap.value=this._sourceTarget.texture,l.sourceLod.value=Math.log2(t/X0);for(let u=0;u<=r;u++){const p=Jl.lodToRoughness(u,r);if(u>r-Q1)l.roughness.value=p,this._renderCube(e,u,this._integrationMaterial);else{const d=p>0?Math.log2(t)+.5*Math.log2(6/($0*Math.pow(p,4)))+.5:0;o.roughness.value=p,o.lodBias.value=d,this._renderCube(e,u,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=rM());const r=this._blurMaterial,o=r.uniforms,l=this._sourceTarget;o.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,o.envMap.value=l.texture,this._renderCube(e,0,r),o.envMap.value=e.texture,this._renderCube(l,0,r)}}function Um(s,e,t){return new Af(s,{minFilter:Ur,generateMipmaps:e,type:ji,colorSpace:ql,depthBuffer:t})}function co(s,e,t){return new Ri({name:s,uniforms:e,vertexShader:_t.cube_vert,fragmentShader:t,side:kn,blending:Zs,depthTest:!1,depthWrite:!1})}function nM(){return co("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${$0}u

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
	`)}function iM(){return co("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:X0}},`

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
	`)}function rM(){return co("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

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
	`)}function zm(){return co("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Fm(){return co("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function sM(s){let e=new WeakMap,t=new WeakMap,r=null;function o(_,M=!1){return _==null?null:M?u(_):l(_)}function l(_){if(_&&_.isTexture){const M=_.mapping;if(M===Hu||M===Vu)if(e.has(_)){const b=e.get(_).texture;return p(b,_.mapping)}else{const b=_.image;if(b&&b.height>0){const C=new Af(b.height);return C.fromEquirectangularTexture(s,_),e.set(_,C),_.addEventListener("dispose",h),p(C.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture&&_.isPMREMTexture!==!0){const M=_.mapping,b=M===Hu||M===Vu,C=M===Qs||M===Qa;if(b||C){let y=t.get(_);const S=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==S)return r===null&&(r=new Jl(s)),y=b?r.fromEquirectangular(_,y):r.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,t.set(_,y),y.texture;if(y!==void 0)return y.texture;{const R=_.image;return b&&R&&R.height>0||C&&R&&d(R)?(r===null&&(r=new Jl(s)),y=b?r.fromEquirectangular(_):r.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,t.set(_,y),_.addEventListener("dispose",x),y.texture):null}}}return _}function p(_,M){return M===Hu?_.mapping=Qs:M===Vu&&(_.mapping=Qa),_}function d(_){let M=0;const b=6;for(let C=0;C<b;C++)_[C]!==void 0&&M++;return M===b}function h(_){const M=_.target;M.removeEventListener("dispose",h);const b=e.get(M);b!==void 0&&(e.delete(M),b.dispose())}function x(_){const M=_.target;M.removeEventListener("dispose",x);const b=t.get(M);b!==void 0&&(t.delete(M),b.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function aM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Vl("WebGLRenderer: "+r+" extension not supported."),o}}}function oM(s,e,t,r){const o={},l=new WeakMap,u=new FinalizationRegistry(b=>delete o[b]);function p(b){d(b.target)}function d(b){b.index!==null&&e.remove(b.index);for(const y in b.attributes)e.remove(b.attributes[y]);b.removeEventListener("dispose",p),delete o[b.id],u.unregister(b);const C=l.get(b);C&&(e.remove(C),l.delete(b)),r.releaseStatesOfGeometry(b),b.isInstancedBufferGeometry===!0&&delete b._maxInstanceCount,t.memory.geometries--}function h(b,C){return o[C.id]!==void 0||(C.addEventListener("dispose",p),o[C.id]=new WeakRef(C),u.register(C,C.id,C),t.memory.geometries++),C}function x(b){const C=b.attributes;for(const y in C)e.update(C[y],s.ARRAY_BUFFER)}function v(b){const C=b.index,y=b.attributes.position;let S=0;if(y===void 0)return;const R=C!==null?C.array.length:y.array.length/3-1,F=y.count>=65535?U0:I0,N=new F(Math.ceil(R/3)*6,1),z=N.array;if(C!==null){const w=C.array;S=C.version;for(let P=0,ee=0;P<R;P+=3){const B=w[P+0],X=w[P+1],H=w[P+2];z[ee++]=B,z[ee++]=X,z[ee++]=X,z[ee++]=H,z[ee++]=H,z[ee++]=B}}else{S=y.version;for(let w=0,P=0;w<R;w+=3){const ee=w+0,B=w+1,X=w+2;z[P++]=ee,z[P++]=B,z[P++]=B,z[P++]=X,z[P++]=X,z[P++]=ee}}N.version=S;const D=l.get(b);D&&e.remove(D),l.set(b,N)}function _(b){const C=l.get(b);if(C){const y=b.index;y!==null&&C.version<y.version&&v(b)}else v(b);return l.get(b)}function M(){for(const b in o){const C=o[b].deref();C!==void 0&&d(C)}}return{get:h,update:x,getWireframeAttribute:_,dispose:M}}function lM(s,e,t){let r;function o(v){r=v}let l,u;function p(v){l=v.type,u=v.bytesPerElement}function d(v,_){s.drawElements(r,_,l,v*u),t.update(_,r,1)}function h(v,_,M){M!==0&&(s.drawElementsInstanced(r,_,l,v*u,M),t.update(_,r,M))}function x(v,_,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,l,v,0,M);let C=0;for(let y=0;y<M;y++)C+=_[y];t.update(C,r,1)}this.setMode=o,this.setIndex=p,this.render=d,this.renderInstances=h,this.renderMultiDraw=x}function cM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,p){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=p*(l/3);break;case s.LINES:t.lines+=p*(l/2);break;case s.LINE_STRIP:t.lines+=p*(l-1);break;case s.LINE_LOOP:t.lines+=p*l;break;case s.POINTS:t.points+=p*l;break;default:Gt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function uM(s,e,t){const r=new WeakMap,o=new sn;function l(u,p,d){const h=u.morphTargetInfluences,x=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=x!==void 0?x.length:0;let _=r.get(p);if(_===void 0||_.count!==v){let B=function(){P.dispose(),r.delete(p),p.removeEventListener("dispose",B)};var M=B;_!==void 0&&_.texture.dispose();const b=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,S=p.morphAttributes.position||[],R=p.morphAttributes.normal||[],F=p.morphAttributes.color||[];let N=0;b===!0&&(N=1),C===!0&&(N=2),y===!0&&(N=3);let z=p.attributes.position.count*N,D=1;z>e.maxTextureSize&&(D=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const w=new Float32Array(z*D*4*v),P=new P0(w,z,D,v);P.type=Gi,P.needsUpdate=!0;const ee=N*4;for(let X=0;X<v;X++){const H=S[X],j=R[X],W=F[X],G=z*D*4*X;for(let re=0;re<H.count;re++){const J=re*ee;b===!0&&(o.fromBufferAttribute(H,re),w[G+J+0]=o.x,w[G+J+1]=o.y,w[G+J+2]=o.z,w[G+J+3]=0),C===!0&&(o.fromBufferAttribute(j,re),w[G+J+4]=o.x,w[G+J+5]=o.y,w[G+J+6]=o.z,w[G+J+7]=0),y===!0&&(o.fromBufferAttribute(W,re),w[G+J+8]=o.x,w[G+J+9]=o.y,w[G+J+10]=o.z,w[G+J+11]=W.itemSize===4?o.w:1)}}_={count:v,texture:P,size:new Ut(z,D)},r.set(p,_),p.addEventListener("dispose",B)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let b=0;for(let y=0;y<h.length;y++)b+=h[y];const C=p.morphTargetsRelative?1:1-b;d.getUniforms().setValue(s,"morphTargetBaseInfluence",C),d.getUniforms().setValue(s,"morphTargetInfluences",h)}d.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:l}}function dM(s,e,t,r,o){let l=new WeakMap;function u(h){const x=o.render.frame,v=h.geometry,_=e.get(h,v);if(l.get(_)!==x&&(e.update(_),l.set(_,x)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),l.get(h)!==x&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),l.set(h,x))),h.isSkinnedMesh){const M=h.skeleton;l.get(M)!==x&&(M.update(),l.set(M,x))}return _}function p(){l=new WeakMap}function d(h){const x=h.target;x.removeEventListener("dispose",d),r.releaseStatesOfObject(x),t.remove(x.instanceMatrix),x.instanceColor!==null&&t.remove(x.instanceColor)}return{update:u,dispose:p}}const fM={[f0]:"LINEAR_TONE_MAPPING",[h0]:"REINHARD_TONE_MAPPING",[p0]:"CINEON_TONE_MAPPING",[m0]:"ACES_FILMIC_TONE_MAPPING",[x0]:"AGX_TONE_MAPPING",[v0]:"NEUTRAL_TONE_MAPPING",[g0]:"CUSTOM_TONE_MAPPING"};function hM(s,e,t,r,o,l){const u=new Vi(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let p=null,d=null,h=null;const x=new lr;x.setAttribute("position",new jn([-1,3,0,-1,-1,0,3,-1,0],3)),x.setAttribute("uv",new jn([0,2,0,0,2,0],2));const v=new ny({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new Wn(x,v),M=new V0(-1,1,1,-1,0,1);let b=null,C=null,y=!1,S,R=null,F=[],N=!1;this.setSize=function(z,D){u.setSize(z,D),p!==null&&p.setSize(z,D),d!==null&&d.setSize(z,D);for(let w=0;w<F.length;w++){const P=F[w];P.setSize&&P.setSize(z,D)}},this.setEffects=function(z){F=z,N=F.length>0&&F[0].isRenderPass===!0;const D=u.width,w=u.height;F.length>0&&p===null&&(p=new Vi(D,w,{type:ji,depthBuffer:!1,stencilBuffer:!1}),d=new Vi(D,w,{type:ji,depthBuffer:!1,stencilBuffer:!1}));const P=o===!0&&F.some(ee=>ee.needsDepthTexture===!0);P!==(u.depthTexture!==null)&&(P===!0&&h===null&&(h=new ta(D,w),l===!0&&(h.format=zr,h.type=ea)),u.dispose(),u.depthTexture=P?h:null,u.resolveDepthBuffer=P,u.storeMultisampledDepthBuffer=P);for(let ee=0;ee<F.length;ee++){const B=F[ee];B.setSize&&B.setSize(D,w),P&&B.needsDepthTexture===!0&&B.setDepthTexture&&B.setDepthTexture(h)}},this.begin=function(z,D){if(y||z.toneMapping===ar&&F.length===0)return!1;if(R=D,D!==null){const w=D.width,P=D.height;(u.width!==w||u.height!==P)&&this.setSize(w,P)}return N===!1&&z.setRenderTarget(u),S=z.toneMapping,z.toneMapping=ar,!0},this.hasRenderPass=function(){return N},this.end=function(z,D){z.toneMapping=S,y=!0;let w=u,P=p;for(let ee=0;ee<F.length;ee++){const B=F[ee];B.enabled!==!1&&(B.render(z,P,w,D),B.needsSwap!==!1&&(w=P,P=P===p?d:p))}if(b!==z.outputColorSpace||C!==z.toneMapping){b=z.outputColorSpace,C=z.toneMapping,v.defines={},Dt.getTransfer(b)===jt&&(v.defines.SRGB_TRANSFER="");const ee=fM[C];ee&&(v.defines[ee]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=w.texture,z.setRenderTarget(R),z.render(_,M),R=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){u.dispose(),p!==null&&p.dispose(),d!==null&&d.dispose(),x.dispose(),v.dispose()}}const Y0=new On,q0=new ta(1,1),K0=new k0(1),Z0=new P0,J0=new D_,Q0=new F0,km=[],Om=[],Bm=new Float32Array(16),Gm=new Float32Array(9),Hm=new Float32Array(4);function ra(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=km[o];if(l===void 0&&(l=new Float32Array(o),km[o]=l),e!==0){r.toArray(l,0);for(let u=1,p=0;u!==e;++u)p+=t,s[u].toArray(l,p)}return l}function _n(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function yn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function sc(s,e){let t=Om[e];t===void 0&&(t=new Int32Array(e),Om[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function pM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function mM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;s.uniform2fv(this.addr,e),yn(t,e)}}function gM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_n(t,e))return;s.uniform3fv(this.addr,e),yn(t,e)}}function xM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;s.uniform4fv(this.addr,e),yn(t,e)}}function vM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(_n(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),yn(t,e)}else{if(_n(t,r))return;Hm.set(r),s.uniformMatrix2fv(this.addr,!1,Hm),yn(t,r)}}function _M(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(_n(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),yn(t,e)}else{if(_n(t,r))return;Gm.set(r),s.uniformMatrix3fv(this.addr,!1,Gm),yn(t,r)}}function yM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(_n(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),yn(t,e)}else{if(_n(t,r))return;Bm.set(r),s.uniformMatrix4fv(this.addr,!1,Bm),yn(t,r)}}function SM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function MM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;s.uniform2iv(this.addr,e),yn(t,e)}}function wM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;s.uniform3iv(this.addr,e),yn(t,e)}}function bM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;s.uniform4iv(this.addr,e),yn(t,e)}}function EM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function TM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;s.uniform2uiv(this.addr,e),yn(t,e)}}function AM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;s.uniform3uiv(this.addr,e),yn(t,e)}}function CM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;s.uniform4uiv(this.addr,e),yn(t,e)}}function ac(s){return s.version===0&&(s.compareFunction=R0,s.needsUpdate=!0),s}function RM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?l=ac(q0):l=Y0,t.setTexture2D(e||l,o)}function NM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||J0,o)}function PM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_CUBE_SHADOW?l=ac(K0):l=Q0,t.setTextureCube(e||l,o)}function LM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Z0,o)}function DM(s){switch(s){case 5126:return pM;case 35664:return mM;case 35665:return gM;case 35666:return xM;case 35674:return vM;case 35675:return _M;case 35676:return yM;case 5124:case 35670:return SM;case 35667:case 35671:return MM;case 35668:case 35672:return wM;case 35669:case 35673:return bM;case 5125:return EM;case 36294:return TM;case 36295:return AM;case 36296:return CM;case 35678:case 36198:case 36298:case 36306:case 35682:return RM;case 35679:case 36299:case 36307:return NM;case 35680:case 36300:case 36308:case 36293:return PM;case 36289:case 36303:case 36311:case 36292:return LM}}function IM(s,e){s.uniform1fv(this.addr,e)}function UM(s,e){const t=ra(e,this.size,2);s.uniform2fv(this.addr,t)}function zM(s,e){const t=ra(e,this.size,3);s.uniform3fv(this.addr,t)}function FM(s,e){const t=ra(e,this.size,4);s.uniform4fv(this.addr,t)}function kM(s,e){const t=ra(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function OM(s,e){const t=ra(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function BM(s,e){const t=ra(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function GM(s,e){s.uniform1iv(this.addr,e)}function HM(s,e){s.uniform2iv(this.addr,e)}function VM(s,e){s.uniform3iv(this.addr,e)}function WM(s,e){s.uniform4iv(this.addr,e)}function jM(s,e){s.uniform1uiv(this.addr,e)}function $M(s,e){s.uniform2uiv(this.addr,e)}function XM(s,e){s.uniform3uiv(this.addr,e)}function YM(s,e){s.uniform4uiv(this.addr,e)}function qM(s,e,t){const r=this.cache,o=e.length,l=sc(t,o);_n(r,l)||(s.uniform1iv(this.addr,l),yn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=ac(q0):u=Y0;for(let p=0;p!==o;++p)t.setTexture2D(e[p]||u,l[p])}function KM(s,e,t){const r=this.cache,o=e.length,l=sc(t,o);_n(r,l)||(s.uniform1iv(this.addr,l),yn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||J0,l[u])}function ZM(s,e,t){const r=this.cache,o=e.length,l=sc(t,o);_n(r,l)||(s.uniform1iv(this.addr,l),yn(r,l));let u;this.type===s.SAMPLER_CUBE_SHADOW?u=ac(K0):u=Q0;for(let p=0;p!==o;++p)t.setTextureCube(e[p]||u,l[p])}function JM(s,e,t){const r=this.cache,o=e.length,l=sc(t,o);_n(r,l)||(s.uniform1iv(this.addr,l),yn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Z0,l[u])}function QM(s){switch(s){case 5126:return IM;case 35664:return UM;case 35665:return zM;case 35666:return FM;case 35674:return kM;case 35675:return OM;case 35676:return BM;case 5124:case 35670:return GM;case 35667:case 35671:return HM;case 35668:case 35672:return VM;case 35669:case 35673:return WM;case 5125:return jM;case 36294:return $M;case 36295:return XM;case 36296:return YM;case 35678:case 36198:case 36298:case 36306:case 35682:return qM;case 35679:case 36299:case 36307:return KM;case 35680:case 36300:case 36308:case 36293:return ZM;case 36289:case 36303:case 36311:case 36292:return JM}}class ew{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=DM(t.type)}}class tw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=QM(t.type)}}class nw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const p=o[l];p.setValue(e,t[p.id],r)}}}const gd=/(\w+)(\])?(\[|\.)?/g;function Vm(s,e){s.seq.push(e),s.map[e.id]=e}function iw(s,e,t){const r=s.name,o=r.length;for(gd.lastIndex=0;;){const l=gd.exec(r),u=gd.lastIndex;let p=l[1];const d=l[2]==="]",h=l[3];if(d&&(p=p|0),h===void 0||h==="["&&u+2===o){Vm(t,h===void 0?new ew(p,s,e):new tw(p,s,e));break}else{let v=t.map[p];v===void 0&&(v=new nw(p),Vm(t,v)),t=v}}}class Wl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const p=e.getActiveUniform(t,u),d=e.getUniformLocation(t,p.name);iw(p,d,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const p=t[l],d=r[p.id];d.needsUpdate!==!1&&p.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function Wm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const rw=37297;let sw=0;function aw(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const p=u+1;r.push(`${p===e?">":" "} ${p}: ${t[u]}`)}return r.join(`
`)}const jm=new mt;function ow(s){Dt._getMatrix(jm,Dt.workingColorSpace,s);const e=`mat3( ${jm.elements.map(t=>t.toFixed(4))} )`;switch(Dt.getTransfer(s)){case Kl:return[e,"LinearTransferOETF"];case jt:return[e,"sRGBTransferOETF"];default:return pt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function $m(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const p=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+aw(s.getShaderSource(e),p)}else return l}function lw(s,e){const t=ow(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const cw={[f0]:"Linear",[h0]:"Reinhard",[p0]:"Cineon",[m0]:"ACESFilmic",[x0]:"AgX",[v0]:"Neutral",[g0]:"Custom"};function uw(s,e){const t=cw[e];return t===void 0?(pt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fl=new pe;function dw(){Dt.getLuminanceCoefficients(Fl);const s=Fl.x.toFixed(4),e=Fl.y.toFixed(4),t=Fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ya).join(`
`)}function hw(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function pw(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let p=1;l.type===s.FLOAT_MAT2&&(p=2),l.type===s.FLOAT_MAT3&&(p=3),l.type===s.FLOAT_MAT4&&(p=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:p}}return t}function Ya(s){return s!==""}function Xm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Ym(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mw=/^[ \t]*#include +<([\w\d./]+)>/gm;function of(s){return s.replace(mw,gw)}function gw(s,e){const t=_t[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return of(t)}const xw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qm(s){return s.replace(xw,vw)}function vw(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Km(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const _w={[kl]:"SHADOWMAP_TYPE_PCF",[$a]:"SHADOWMAP_TYPE_VSM"};function yw(s){return _w[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Sw={[Qa]:"ENVMAP_MODE_REFRACTION"};function Mw(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Sw[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ww={[d0]:"ENVMAP_BLENDING_MULTIPLY",[l_]:"ENVMAP_BLENDING_MIX",[c_]:"ENVMAP_BLENDING_ADD"};function bw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":ww[s.combine]||"ENVMAP_BLENDING_NONE"}function Ew(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,p=t.fragmentShader;const d=yw(t),h=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",x=Mw(t),v=bw(t),_=fw(t),M=hw(l),b=o.createProgram();let C,y,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(C=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ya).join(`
`),C.length>0&&(C+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ya).join(`
`),y.length>0&&(y+=`
`)):(C=[Km(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ya).join(`
`),y=[Km(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+x:"",t.envMap?"#define "+v:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ar?"#define TONE_MAPPING":"",t.toneMapping!==ar?_t.tonemapping_pars_fragment:"",t.toneMapping!==ar?uw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,lw("linearToOutputTexel",t.outputColorSpace),dw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ya).join(`
`)),u=of(u),u=Xm(u,t),u=Ym(u,t),p=of(p),p=Xm(p,t),p=Ym(p,t),u=qm(u),p=qm(p),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,C=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+C,y=["#define varying in",t.glslVersion===um?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===um?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const R=S+C+u,F=S+y+p,N=Wm(o,o.VERTEX_SHADER,R),z=Wm(o,o.FRAGMENT_SHADER,F);o.attachShader(b,N),o.attachShader(b,z),t.index0AttributeName!==void 0?o.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function D(B){if(s.debug.checkShaderErrors){const X=o.getProgramInfoLog(b)||"",H=o.getShaderInfoLog(N)||"",j=o.getShaderInfoLog(z)||"",W=X.trim(),G=H.trim(),re=j.trim();let J=!0,$=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,b,N,z);else{const Y=$m(o,N,"vertex"),q=$m(o,z,"fragment");Gt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+W+`
`+Y+`
`+q)}else W!==""?pt("WebGLProgram: Program Info Log:",W):(G===""||re==="")&&($=!1);$&&(B.diagnostics={runnable:J,programLog:W,vertexShader:{log:G,prefix:C},fragmentShader:{log:re,prefix:y}})}o.deleteShader(N),o.deleteShader(z),w=new Wl(o,b),P=pw(o,b)}let w;this.getUniforms=function(){return w===void 0&&D(this),w};let P;this.getAttributes=function(){return P===void 0&&D(this),P};let ee=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ee===!1&&(ee=o.getProgramParameter(b,rw)),ee},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sw++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=N,this.fragmentShader=z,this}let Tw=0;class Aw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Cw(e),t.set(e,r)),r}}class Cw{constructor(e){this.id=Tw++,this.code=e,this.usedTimes=0}}function Rw(s){return s===ds||s===Xl||s===Yl}function Nw(s,e,t,r,o,l){const u=new L0,p=new Aw,d=new Set,h=[],x=new Map,v=r.logarithmicDepthBuffer,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return d.add(w),w===0?"uv":`uv${w}`}function b(w,P,ee,B,X,H){const j=B.fog,W=X.geometry,G=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,re=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,J=e.get(w.envMap||G,re),$=_[w.type];let Y=r.precision;w.precision!==null&&(Y=r.getMaxPrecision(w.precision),Y!==w.precision&&pt("WebGLProgram.getParameters:",w.precision,"not supported, using",Y,"instead."));const q=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,I=q!==void 0?q.length:0;let ne=0;W.morphAttributes.position!==void 0&&(ne=1),W.morphAttributes.normal!==void 0&&(ne=2),W.morphAttributes.color!==void 0&&(ne=3);let Ae,se,V,we;if($){const Ie=Oi[$];Ae=Ie.vertexShader,se=Ie.fragmentShader}else{Ae=w.vertexShader,se=w.fragmentShader;const Ie=p.getVertexShaderStage(w),ft=p.getFragmentShaderStage(w);p.update(w,Ie,ft),V=Ie.id,we=ft.id}const De=s.getRenderTarget(),Me=s.state.buffers.depth.getReversed(),ke=X.isInstancedMesh===!0,lt=X.isBatchedMesh===!0,He=!!w.map,Re=!!w.matcap,Ve=!!J,je=Ve&&J.isPMREMTexture===!0,St=!!w.aoMap,xt=!!w.lightMap,Nt=!!w.bumpMap&&w.wireframe===!1,Mt=!!w.normalMap,Zt=!!w.displacementMap,zt=!!w.emissiveMap,$t=!!w.metalnessMap,Vt=!!w.roughnessMap,tn=w.anisotropy>0,K=w.clearcoat>0,Ht=w.diffuseRoughness>0,Ct=w.dispersion>0,gt=w.retroreflectivity>0,ze=w.iridescence>0,Pt=w.sheen>0,Ye=w.transmission>0,tt=tn&&!!w.anisotropyMap,U=K&&!!w.clearcoatMap,E=K&&!!w.clearcoatNormalMap,oe=K&&!!w.clearcoatRoughnessMap,Ee=Ht&&!!w.diffuseRoughnessMap,_e=ze&&!!w.iridescenceMap,Ue=ze&&!!w.iridescenceThicknessMap,xe=Pt&&!!w.sheenColorMap,ie=Pt&&!!w.sheenRoughnessMap,ae=!!w.specularMap,Se=!!w.specularColorMap,k=!!w.specularIntensityMap,ge=Ye&&!!w.transmissionMap,he=Ye&&!!w.thicknessMap,Ne=!!w.gradientMap,Te=!!w.alphaMap,Pe=w.alphaTest>0,Xe=!!w.alphaHash,at=!!w.extensions;let L=ar;w.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(L=s.toneMapping);const ye=je?J.isCompressedCubeTexture?J.image[0].mipmaps:J.mipmaps:null,ve={shaderID:$,shaderType:w.type,shaderName:w.name,vertexShader:Ae,fragmentShader:se,defines:w.defines,customVertexShaderID:V,customFragmentShaderID:we,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:Y,batching:lt,batchingColor:lt&&X._colorsTexture!==null,instancing:ke,instancingColor:ke&&X.instanceColor!==null,instancingMorph:ke&&X.morphTexture!==null,outputColorSpace:De===null?s.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:Dt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:He,matcap:Re,envMap:Ve,envMapMode:Ve&&J.mapping,envMapPMREM:je,envMapMaxLod:je?ye.length-1:null,envMapSize:je?ye[0].width:null,aoMap:St,lightMap:xt,bumpMap:Nt,normalMap:Mt,displacementMap:Zt,emissiveMap:zt,normalMapObjectSpace:Mt&&w.normalMapType===f_,normalMapTangentSpace:Mt&&w.normalMapType===rf,packedNormalMap:Mt&&w.normalMapType===rf&&Rw(w.normalMap.format),metalnessMap:$t,roughnessMap:Vt,anisotropy:tn,anisotropyMap:tt,clearcoat:K,clearcoatMap:U,clearcoatNormalMap:E,clearcoatRoughnessMap:oe,diffuseRoughness:Ht,diffuseRoughnessMap:Ee,dispersion:Ct,retroreflection:gt,iridescence:ze,iridescenceMap:_e,iridescenceThicknessMap:Ue,sheen:Pt,sheenColorMap:xe,sheenRoughnessMap:ie,specularMap:ae,specularColorMap:Se,specularIntensityMap:k,transmission:Ye,transmissionMap:ge,thicknessMap:he,gradientMap:Ne,opaque:w.transparent===!1&&w.blending===qa&&w.alphaToCoverage===!1,alphaMap:Te,alphaTest:Pe,alphaHash:Xe,combine:w.combine,mapUv:He&&M(w.map.channel),aoMapUv:St&&M(w.aoMap.channel),lightMapUv:xt&&M(w.lightMap.channel),bumpMapUv:Nt&&M(w.bumpMap.channel),normalMapUv:Mt&&M(w.normalMap.channel),displacementMapUv:Zt&&M(w.displacementMap.channel),emissiveMapUv:zt&&M(w.emissiveMap.channel),metalnessMapUv:$t&&M(w.metalnessMap.channel),roughnessMapUv:Vt&&M(w.roughnessMap.channel),anisotropyMapUv:tt&&M(w.anisotropyMap.channel),clearcoatMapUv:U&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:E&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&M(w.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ee&&M(w.diffuseRoughnessMap.channel),iridescenceMapUv:_e&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:ie&&M(w.sheenRoughnessMap.channel),specularMapUv:ae&&M(w.specularMap.channel),specularColorMapUv:Se&&M(w.specularColorMap.channel),specularIntensityMapUv:k&&M(w.specularIntensityMap.channel),transmissionMapUv:ge&&M(w.transmissionMap.channel),thicknessMapUv:he&&M(w.thicknessMap.channel),alphaMapUv:Te&&M(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Mt||tn),vertexNormals:!!W.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!W.attributes.uv&&(He||Te),fog:!!j,useFog:w.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||W.attributes.normal===void 0&&Mt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Me,skinning:X.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:ne,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:H.filter(Ie=>Ie.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&ee.length>0,shadowMapType:s.shadowMap.type,toneMapping:L,decodeVideoTexture:He&&w.map.isVideoTexture===!0&&Dt.getTransfer(w.map.colorSpace)===jt,decodeVideoTextureEmissive:zt&&w.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(w.emissiveMap.colorSpace)===jt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Bi,flipSided:w.side===kn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:at&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&w.extensions.multiDraw===!0||lt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ve.vertexUv1s=d.has(1),ve.vertexUv2s=d.has(2),ve.vertexUv3s=d.has(3),d.clear(),ve}function C(w){const P=[];if(w.shaderID?P.push(w.shaderID):(P.push(w.customVertexShaderID),P.push(w.customFragmentShaderID)),w.defines!==void 0)for(const ee in w.defines)P.push(ee),P.push(w.defines[ee]);return w.isRawShaderMaterial===!1&&(y(P,w),S(P,w),P.push(s.outputColorSpace)),P.push(w.customProgramCacheKey),P.join()}function y(w,P){w.push(P.precision),w.push(P.outputColorSpace),w.push(P.envMapMode),w.push(P.envMapPMREM),w.push(P.envMapMaxLod),w.push(P.envMapSize),w.push(P.mapUv),w.push(P.alphaMapUv),w.push(P.lightMapUv),w.push(P.aoMapUv),w.push(P.bumpMapUv),w.push(P.normalMapUv),w.push(P.displacementMapUv),w.push(P.emissiveMapUv),w.push(P.metalnessMapUv),w.push(P.roughnessMapUv),w.push(P.anisotropyMapUv),w.push(P.clearcoatMapUv),w.push(P.clearcoatNormalMapUv),w.push(P.clearcoatRoughnessMapUv),w.push(P.diffuseRoughnessMapUv),w.push(P.iridescenceMapUv),w.push(P.iridescenceThicknessMapUv),w.push(P.sheenColorMapUv),w.push(P.sheenRoughnessMapUv),w.push(P.specularMapUv),w.push(P.specularColorMapUv),w.push(P.specularIntensityMapUv),w.push(P.transmissionMapUv),w.push(P.thicknessMapUv),w.push(P.combine),w.push(P.fogExp2),w.push(P.sizeAttenuation),w.push(P.morphTargetsCount),w.push(P.numSunLights),w.push(P.numDirLights),w.push(P.numPointLights),w.push(P.numSpotLights),w.push(P.numSpotLightMaps),w.push(P.numHemiLights),w.push(P.numRectAreaLights),w.push(P.numSunLightShadows),w.push(P.numDirLightShadows),w.push(P.numPointLightShadows),w.push(P.numSpotLightShadows),w.push(P.numSpotLightShadowsWithMaps),w.push(P.numLightProbes),w.push(P.numLightProbeGrids),w.push(P.shadowMapType),w.push(P.toneMapping),w.push(P.numClippingPlanes),w.push(P.numClipIntersection),w.push(P.depthPacking)}function S(w,P){u.disableAll(),P.instancing&&u.enable(0),P.instancingColor&&u.enable(1),P.instancingMorph&&u.enable(2),P.matcap&&u.enable(3),P.envMap&&u.enable(4),P.normalMapObjectSpace&&u.enable(5),P.normalMapTangentSpace&&u.enable(6),P.clearcoat&&u.enable(7),P.iridescence&&u.enable(8),P.alphaTest&&u.enable(9),P.vertexColors&&u.enable(10),P.vertexAlphas&&u.enable(11),P.vertexUv1s&&u.enable(12),P.vertexUv2s&&u.enable(13),P.vertexUv3s&&u.enable(14),P.vertexTangents&&u.enable(15),P.anisotropy&&u.enable(16),P.alphaHash&&u.enable(17),P.batching&&u.enable(18),P.dispersion&&u.enable(19),P.retroreflection&&u.enable(24),P.diffuseRoughness&&u.enable(25),P.batchingColor&&u.enable(20),P.gradientMap&&u.enable(21),P.packedNormalMap&&u.enable(22),P.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),P.fog&&u.enable(0),P.useFog&&u.enable(1),P.flatShading&&u.enable(2),P.logarithmicDepthBuffer&&u.enable(3),P.reversedDepthBuffer&&u.enable(4),P.skinning&&u.enable(5),P.morphTargets&&u.enable(6),P.morphNormals&&u.enable(7),P.morphColors&&u.enable(8),P.premultipliedAlpha&&u.enable(9),P.shadowMapEnabled&&u.enable(10),P.doubleSided&&u.enable(11),P.flipSided&&u.enable(12),P.useDepthPacking&&u.enable(13),P.dithering&&u.enable(14),P.transmission&&u.enable(15),P.sheen&&u.enable(16),P.opaque&&u.enable(17),P.pointsUvs&&u.enable(18),P.decodeVideoTexture&&u.enable(19),P.decodeVideoTextureEmissive&&u.enable(20),P.alphaToCoverage&&u.enable(21),P.numLightProbeGrids>0&&u.enable(22),P.hasPositionAttribute&&u.enable(23),w.push(u.mask)}function R(w){const P=_[w.type];let ee;if(P){const B=Oi[P];ee=Q_.clone(B.uniforms)}else ee=w.uniforms;return ee}function F(w,P){let ee=x.get(P);return ee!==void 0?++ee.usedTimes:(ee=new Ew(s,P,w,o),h.push(ee),x.set(P,ee)),ee}function N(w){if(--w.usedTimes===0){const P=h.indexOf(w);h[P]=h[h.length-1],h.pop(),x.delete(w.cacheKey),w.destroy()}}function z(w){p.remove(w)}function D(){p.dispose()}return{getParameters:b,getProgramCacheKey:C,getUniforms:R,acquireProgram:F,releaseProgram:N,releaseShaderCache:z,programs:h,dispose:D}}function Pw(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let p=s.get(u);return p===void 0&&(p={},s.set(u,p)),p}function r(u){s.delete(u)}function o(u,p,d){s.get(u)[p]=d}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function Lw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Zm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Jm(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(_){let M=0;return _.isInstancedMesh&&(M+=2),_.isSkinnedMesh&&(M+=1),M}function p(_,M,b,C,y,S){let R=s[e];return R===void 0?(R={id:_.id,object:_,geometry:M,material:b,materialVariant:u(_),groupOrder:C,renderOrder:_.renderOrder,z:y,group:S},s[e]=R):(R.id=_.id,R.object=_,R.geometry=M,R.material=b,R.materialVariant=u(_),R.groupOrder=C,R.renderOrder=_.renderOrder,R.z=y,R.group=S),e++,R}function d(_,M,b,C,y,S,R){R.reversedDepth===!0&&(y=-y);const F=p(_,M,b,C,y,S);b.transmission>0?r.push(F):b.transparent===!0?o.push(F):t.push(F)}function h(_,M,b,C,y,S){const R=p(_,M,b,C,y,S);b.transmission>0?r.unshift(R):b.transparent===!0?o.unshift(R):t.unshift(R)}function x(_,M){t.length>1&&t.sort(_||Lw),r.length>1&&r.sort(M||Zm),o.length>1&&o.sort(M||Zm)}function v(){for(let _=e,M=s.length;_<M;_++){const b=s[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:h,finish:v,sort:x}}function Dw(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new Jm,s.set(r,[u])):o>=l.length?(u=new Jm,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function Iw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new pe,color:new At};break;case"SpotLight":t={position:new pe,direction:new pe,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new pe,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new pe,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new pe,halfWidth:new pe,halfHeight:new pe};break}return s[e.id]=t,t}}}function Uw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let zw=0;function Fw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function kw(s){const e=new Iw,t=Uw(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new pe);const o=new pe,l=new an,u=new an;function p(h){let x=0,v=0,_=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let M=0,b=0,C=0,y=0,S=0,R=0,F=0,N=0,z=0,D=0,w=0,P=0,ee=0,B=0;h.sort(Fw);for(let H=0,j=h.length;H<j;H++){const W=h[H],G=W.color,re=W.intensity,J=W.distance;let $=null;if(W.shadow&&W.shadow.map&&(W.shadow.map.texture.format===ds?$=W.shadow.map.texture:$=W.shadow.map.depthTexture||W.shadow.map.texture),W.isAmbientLight)x+=G.r*re,v+=G.g*re,_+=G.b*re;else if(W.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(W.sh.coefficients[Y],re);B++}else if(W.isSunLight){const Y=e.get(W);if(Y.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){const q=W.shadow,I=t.get(W);I.shadowIntensity=q.intensity,I.shadowBias=q.bias,I.shadowNormalBias=q.normalBias,I.shadowRadius=q.radius,I.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),r.sunShadow[b]=I,r.sunShadowMap[b]=$;const ne=q.getViewportCount();for(let Ae=0;Ae<ne;Ae++)r.sunShadowMatrix[C+Ae]=q.getMatrix(Ae),r.sunShadowCascade[C+Ae]=q._cascadeData[Ae];C+=ne,b++}r.sun[M]=Y,M++}else if(W.isDirectionalLight){const Y=e.get(W);if(Y.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){const q=W.shadow,I=t.get(W);I.shadowIntensity=q.intensity,I.shadowBias=q.bias,I.shadowNormalBias=q.normalBias,I.shadowRadius=q.radius,I.shadowMapSize=q.mapSize,r.directionalShadow[y]=I,r.directionalShadowMap[y]=$,r.directionalShadowMatrix[y]=W.shadow.matrix,z++}r.directional[y]=Y,y++}else if(W.isSpotLight){const Y=e.get(W);Y.position.setFromMatrixPosition(W.matrixWorld),Y.color.copy(G).multiplyScalar(re),Y.distance=J,Y.coneCos=Math.cos(W.angle),Y.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),Y.decay=W.decay,r.spot[R]=Y;const q=W.shadow;if(W.map&&(r.spotLightMap[P]=W.map,P++,q.updateMatrices(W),W.castShadow&&ee++),r.spotLightMatrix[R]=q.matrix,W.castShadow){const I=t.get(W);I.shadowIntensity=q.intensity,I.shadowBias=q.bias,I.shadowNormalBias=q.normalBias,I.shadowRadius=q.radius,I.shadowMapSize=q.mapSize,r.spotShadow[R]=I,r.spotShadowMap[R]=$,w++}R++}else if(W.isRectAreaLight){const Y=e.get(W);Y.color.copy(G).multiplyScalar(re),Y.halfWidth.set(W.width*.5,0,0),Y.halfHeight.set(0,W.height*.5,0),r.rectArea[F]=Y,F++}else if(W.isPointLight){const Y=e.get(W);if(Y.color.copy(W.color).multiplyScalar(W.intensity),Y.distance=W.distance,Y.decay=W.decay,W.castShadow){const q=W.shadow,I=t.get(W);I.shadowIntensity=q.intensity,I.shadowBias=q.bias,I.shadowNormalBias=q.normalBias,I.shadowRadius=q.radius,I.shadowMapSize=q.mapSize,I.shadowCameraNear=q.camera.near,I.shadowCameraFar=q.camera.far,r.pointShadow[S]=I,r.pointShadowMap[S]=$,r.pointShadowMatrix[S]=W.shadow.matrix,D++}r.point[S]=Y,S++}else if(W.isHemisphereLight){const Y=e.get(W);Y.skyColor.copy(W.color).multiplyScalar(re),Y.groundColor.copy(W.groundColor).multiplyScalar(re),r.hemi[N]=Y,N++}}F>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=$e.LTC_FLOAT_1,r.rectAreaLTC2=$e.LTC_FLOAT_2):(r.rectAreaLTC1=$e.LTC_HALF_1,r.rectAreaLTC2=$e.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=v,r.ambient[2]=_;const X=r.hash;(X.sunLength!==M||X.directionalLength!==y||X.pointLength!==S||X.spotLength!==R||X.rectAreaLength!==F||X.hemiLength!==N||X.numSunShadows!==b||X.numDirectionalShadows!==z||X.numPointShadows!==D||X.numSpotShadows!==w||X.numSpotMaps!==P||X.numLightProbes!==B)&&(r.sun.length=M,r.directional.length=y,r.spot.length=R,r.rectArea.length=F,r.point.length=S,r.hemi.length=N,r.sunShadow.length=b,r.sunShadowMap.length=b,r.sunShadowMatrix.length=C,r.sunShadowCascade.length=C,r.directionalShadow.length=z,r.directionalShadowMap.length=z,r.directionalShadowMatrix.length=z,r.pointShadow.length=D,r.pointShadowMap.length=D,r.pointShadowMatrix.length=D,r.spotShadow.length=w,r.spotShadowMap.length=w,r.spotLightMatrix.length=w+P-ee,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=ee,r.numLightProbes=B,X.sunLength=M,X.directionalLength=y,X.pointLength=S,X.spotLength=R,X.rectAreaLength=F,X.hemiLength=N,X.numSunShadows=b,X.numDirectionalShadows=z,X.numPointShadows=D,X.numSpotShadows=w,X.numSpotMaps=P,X.numLightProbes=B,r.version=zw++)}function d(h,x){let v=0,_=0,M=0,b=0,C=0,y=0;const S=x.matrixWorldInverse;for(let R=0,F=h.length;R<F;R++){const N=h[R];if(N.isSunLight){const z=r.sun[v];z.direction.setFromMatrixPosition(N.matrixWorld),z.direction.transformDirection(S),v++}else if(N.isDirectionalLight){const z=r.directional[_];z.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),z.direction.sub(o),z.direction.transformDirection(S),_++}else if(N.isSpotLight){const z=r.spot[b];z.position.setFromMatrixPosition(N.matrixWorld),z.position.applyMatrix4(S),z.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),z.direction.sub(o),z.direction.transformDirection(S),b++}else if(N.isRectAreaLight){const z=r.rectArea[C];z.position.setFromMatrixPosition(N.matrixWorld),z.position.applyMatrix4(S),u.identity(),l.copy(N.matrixWorld),l.premultiply(S),u.extractRotation(l),z.halfWidth.set(N.width*.5,0,0),z.halfHeight.set(0,N.height*.5,0),z.halfWidth.applyMatrix4(u),z.halfHeight.applyMatrix4(u),C++}else if(N.isPointLight){const z=r.point[M];z.position.setFromMatrixPosition(N.matrixWorld),z.position.applyMatrix4(S),M++}else if(N.isHemisphereLight){const z=r.hemi[y];z.direction.setFromMatrixPosition(N.matrixWorld),z.direction.transformDirection(S),y++}}}return{setup:p,setupView:d,state:r}}function Qm(s){const e=new kw(s),t=[],r=[],o=[];function l(v){x.camera=v,t.length=0,r.length=0,o.length=0}function u(v){v.isLightProbeGrid?o.push(v):t.push(v)}function p(v){r.push(v)}function d(){e.setup(t),o.sort((v,_)=>v.priority-_.priority||v.id-_.id)}function h(v){e.setupView(t,v)}const x={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:x,setupLights:d,setupLightsView:h,pushLight:u,pushShadow:p}}function Ow(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let p;return u===void 0?(p=new Qm(s),e.set(o,[p])):l>=u.length?(p=new Qm(s),u.push(p)):p=u[l],p}function r(){e=new WeakMap}return{get:t,dispose:r}}const Bw=`void main() {
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
}`,Hw=[new pe(1,0,0),new pe(-1,0,0),new pe(0,1,0),new pe(0,-1,0),new pe(0,0,1),new pe(0,0,-1)],Vw=[new pe(0,-1,0),new pe(0,-1,0),new pe(0,0,1),new pe(0,0,-1),new pe(0,-1,0),new pe(0,-1,0)],e0=new an,ja=new pe,xd=new pe;function Ww(s,e,t){let r=new io;const o=new Ut,l=new Ut,u=new sn,p=new iy,d=new ry,h={},x=t.maxTextureSize,v={[us]:kn,[kn]:us,[Bi]:Bi},_=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:Bw,fragmentShader:Gw}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const b=new lr;b.setAttribute("position",new cs(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Wn(b,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kl;let S=this.type;this.render=function(D,w,P){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;this.type===Vv&&(pt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=kl);const ee=s.getRenderTarget(),B=s.getActiveCubeFace(),X=s.getActiveMipmapLevel(),H=s.state;H.setBlending(Zs),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const j=S!==this.type;j&&w.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(G=>G.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,G=D.length;W<G;W++){const re=D[W],J=re.shadow;if(J===void 0){pt("WebGLShadowMap:",re,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;o.copy(J.mapSize);const $=J.getFrameExtents();o.multiply($),l.copy(J.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/$.x),o.x=l.x*$.x,J.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/$.y),o.y=l.y*$.y,J.mapSize.y=l.y));const Y=s.state.buffers.depth.getReversed();if(J.camera._reversedDepth=Y,J.map===null||j===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===$a){if(re.isPointLight){pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Vi(o.x,o.y,{format:ds,type:ji,minFilter:Jn,magFilter:Jn,generateMipmaps:!1}),J.map.texture.name=re.name+".shadowMap",J.map.depthTexture=new ta(o.x,o.y,Gi),J.map.depthTexture.name=re.name+".shadowMapDepth",J.map.depthTexture.format=kr,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Cn,J.map.depthTexture.magFilter=Cn}else re.isPointLight?(J.map=new Af(o.x),J.map.depthTexture=new k0(o.x,Wi)):(J.map=new Vi(o.x,o.y),J.map.depthTexture=new ta(o.x,o.y,Wi)),J.map.depthTexture.name=re.name+".shadowMap",J.map.depthTexture.format=kr,this.type===kl?(J.map.depthTexture.compareFunction=Y?C0:A0,J.map.depthTexture.minFilter=Jn,J.map.depthTexture.magFilter=Jn):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Cn,J.map.depthTexture.magFilter=Cn);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==o.x||J.map.height!==o.y)&&J.map.setSize(o.x,o.y);const q=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();re.isPointLight!==!0&&J.updateMatrices(re,P);const I=(J.camera.layers.mask&4294967294)!==0?J.camera.layers:P.layers;for(let ne=0;ne<q;ne++){const Ae=J.getCamera(ne);if(re.isPointLight){const se=J.camera,V=J.matrix,we=re.distance||se.far;we!==se.far&&(se.far=we,se.updateProjectionMatrix()),ja.setFromMatrixPosition(re.matrixWorld),se.position.copy(ja),xd.copy(se.position),xd.add(Hw[ne]),se.up.copy(Vw[ne]),se.lookAt(xd),se.updateMatrixWorld(),V.makeTranslation(-ja.x,-ja.y,-ja.z),e0.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),J._frustum.setFromProjectionMatrix(e0,se.coordinateSystem,se.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)s.setRenderTarget(J.map,ne),s.clear();else{ne===0&&(s.setRenderTarget(J.map),s.clear());const se=J.getViewport(ne);u.set(l.x*se.x,l.y*se.y,l.x*se.z,l.y*se.w),H.viewport(u)}r=J.getFrustum(ne),N(w,P,Ae,re,I,this.type)}J.isPointLightShadow!==!0&&this.type===$a&&R(J,P),J.needsUpdate=!1}S=this.type,y.needsUpdate=!1,s.setRenderTarget(ee,B,X)};function R(D,w){const P=e.update(C);_.defines.VSM_SAMPLES!==D.blurSamples&&(_.defines.VSM_SAMPLES=D.blurSamples,M.defines.VSM_SAMPLES=D.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),D.mapPass===null?D.mapPass=new Vi(o.x,o.y,{format:ds,type:ji}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),_.uniforms.shadow_pass.value=D.map.depthTexture,_.uniforms.resolution.value.set(D.map.width,D.map.height),_.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(w,null,P,_,C,null),M.uniforms.shadow_pass.value=D.mapPass.texture,M.uniforms.resolution.value.set(D.map.width,D.map.height),M.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(w,null,P,M,C,null)}function F(D,w,P,ee){let B=null;const X=P.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(X!==void 0)B=X;else if(B=P.isPointLight===!0?d:p,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const H=B.uuid,j=w.uuid;let W=h[H];W===void 0&&(W={},h[H]=W);let G=W[j];G===void 0&&(G=B.clone(),W[j]=G,w.addEventListener("dispose",z)),B=G}if(B.visible=w.visible,B.wireframe=w.wireframe,ee===$a?B.side=w.shadowSide!==null?w.shadowSide:w.side:B.side=w.shadowSide!==null?w.shadowSide:v[w.side],B.alphaMap=w.alphaMap,B.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,B.map=w.map,B.clipShadows=w.clipShadows,B.clippingPlanes=w.clippingPlanes,B.clipIntersection=w.clipIntersection,B.displacementMap=w.displacementMap,B.displacementScale=w.displacementScale,B.displacementBias=w.displacementBias,B.wireframeLinewidth=w.wireframeLinewidth,B.linewidth=w.linewidth,P.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const H=s.properties.get(B);H.light=P}return B}function N(D,w,P,ee,B,X){if(D.visible===!1)return;if(D.layers.test(B)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&X===$a)&&(!D.frustumCulled||D.intersectsFrustum(r))){D.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,D.matrixWorld);const W=e.update(D),G=D.material;if(Array.isArray(G)){const re=W.groups;for(let J=0,$=re.length;J<$;J++){const Y=re[J],q=G[Y.materialIndex];if(q&&q.visible){const I=F(D,q,ee,X);D.onBeforeShadow(s,D,w,P,W,I,Y),s.renderBufferDirect(P,null,W,I,D,Y),D.onAfterShadow(s,D,w,P,W,I,Y)}}}else if(G.visible){const re=F(D,G,ee,X);D.onBeforeShadow(s,D,w,P,W,re,null),s.renderBufferDirect(P,null,W,re,D,null),D.onAfterShadow(s,D,w,P,W,re,null)}}const j=D.children;for(let W=0,G=j.length;W<G;W++)N(j[W],w,P,ee,B,X)}function z(D){D.target.removeEventListener("dispose",z);for(const P in h){const ee=h[P],B=D.target.uuid;B in ee&&(ee[B].dispose(),delete ee[B])}}}function jw(s,e){function t(){let k=!1;const ge=new sn;let he=null;const Ne=new sn(0,0,0,0);return{setMask:function(Te){he!==Te&&!k&&(s.colorMask(Te,Te,Te,Te),he=Te)},setLocked:function(Te){k=Te},setClear:function(Te,Pe,Xe,at,L){L===!0&&(Te*=at,Pe*=at,Xe*=at),ge.set(Te,Pe,Xe,at),Ne.equals(ge)===!1&&(s.clearColor(Te,Pe,Xe,at),Ne.copy(ge))},reset:function(){k=!1,he=null,Ne.set(-1,0,0,0)}}}function r(){let k=!1,ge=!1,he=null,Ne=null,Te=null;return{setReversed:function(Pe){if(ge!==Pe){const Xe=e.get("EXT_clip_control");Pe?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),ge=Pe;const at=Te;Te=null,this.setClear(at)}},getReversed:function(){return ge},setTest:function(Pe){Pe?Me(s.DEPTH_TEST):ke(s.DEPTH_TEST)},setMask:function(Pe){he!==Pe&&!k&&(s.depthMask(Pe),he=Pe)},setFunc:function(Pe){if(ge&&(Pe=w_[Pe]),Ne!==Pe){switch(Pe){case _d:s.depthFunc(s.NEVER);break;case yd:s.depthFunc(s.ALWAYS);break;case Sd:s.depthFunc(s.LESS);break;case Ja:s.depthFunc(s.LEQUAL);break;case Md:s.depthFunc(s.EQUAL);break;case wd:s.depthFunc(s.GEQUAL);break;case bd:s.depthFunc(s.GREATER);break;case Ed:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ne=Pe}},setLocked:function(Pe){k=Pe},setClear:function(Pe){Te!==Pe&&(Te=Pe,ge&&(Pe=1-Pe),s.clearDepth(Pe))},reset:function(){k=!1,he=null,Ne=null,Te=null,ge=!1}}}function o(){let k=!1,ge=null,he=null,Ne=null,Te=null,Pe=null,Xe=null,at=null,L=null;return{setTest:function(ye){k||(ye?Me(s.STENCIL_TEST):ke(s.STENCIL_TEST))},setMask:function(ye){ge!==ye&&!k&&(s.stencilMask(ye),ge=ye)},setFunc:function(ye,ve,Ie){(he!==ye||Ne!==ve||Te!==Ie)&&(s.stencilFunc(ye,ve,Ie),he=ye,Ne=ve,Te=Ie)},setOp:function(ye,ve,Ie){(Pe!==ye||Xe!==ve||at!==Ie)&&(s.stencilOp(ye,ve,Ie),Pe=ye,Xe=ve,at=Ie)},setLocked:function(ye){k=ye},setClear:function(ye){L!==ye&&(s.clearStencil(ye),L=ye)},reset:function(){k=!1,ge=null,he=null,Ne=null,Te=null,Pe=null,Xe=null,at=null,L=null}}}const l=new t,u=new r,p=new o;let d={};const h=new WeakMap;let x={},v={},_={},M=new WeakMap,b=[],C=null,y=!1,S=null,R=null,F=null,N=null,z=null,D=null,w=null,P=new At(0,0,0),ee=0,B=!1,X=null,H=null,j=null,W=null,G=null;const re=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,$=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Y)[1]),J=$>=1):Y.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),J=$>=2);let q=null,I={};const ne=s.getParameter(s.SCISSOR_BOX),Ae=s.getParameter(s.VIEWPORT),se=new sn().fromArray(ne),V=new sn().fromArray(Ae);function we(k,ge,he,Ne){const Te=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(k,Pe),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xe=0;Xe<he;Xe++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(ge,0,s.RGBA,1,1,Ne,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(ge+Xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return Pe}const De={};De[s.TEXTURE_2D]=we(s.TEXTURE_2D,s.TEXTURE_2D,1),De[s.TEXTURE_CUBE_MAP]=we(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),De[s.TEXTURE_2D_ARRAY]=we(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),De[s.TEXTURE_3D]=we(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),p.setClear(0),Me(s.DEPTH_TEST),u.setFunc(Ja),Nt(!1),Mt(om),Me(s.CULL_FACE),St(Zs);function Me(k){x[k]!==!0&&(s.enable(k),x[k]=!0)}function ke(k){x[k]!==!1&&(s.disable(k),x[k]=!1)}function lt(k,ge){return _[k]!==ge?(s.bindFramebuffer(k,ge),_[k]=ge,k===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=ge),k===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=ge),!0):!1}function He(k,ge){let he=b,Ne=!1;if(k){he=M.get(ge),he===void 0&&(he=[],M.set(ge,he));const Te=k.textures;if(he.length!==Te.length||he[0]!==s.COLOR_ATTACHMENT0){for(let Pe=0,Xe=Te.length;Pe<Xe;Pe++)he[Pe]=s.COLOR_ATTACHMENT0+Pe;he.length=Te.length,Ne=!0}}else he[0]!==s.BACK&&(he[0]=s.BACK,Ne=!0);Ne&&s.drawBuffers(he)}function Re(k){return C!==k?(s.useProgram(k),C=k,!0):!1}const Ve={[qs]:s.FUNC_ADD,[jv]:s.FUNC_SUBTRACT,[$v]:s.FUNC_REVERSE_SUBTRACT};Ve[Xv]=s.MIN,Ve[Yv]=s.MAX;const je={[qv]:s.ZERO,[Kv]:s.ONE,[Zv]:s.SRC_COLOR,[c0]:s.SRC_ALPHA,[i_]:s.SRC_ALPHA_SATURATE,[t_]:s.DST_COLOR,[Qv]:s.DST_ALPHA,[Jv]:s.ONE_MINUS_SRC_COLOR,[u0]:s.ONE_MINUS_SRC_ALPHA,[n_]:s.ONE_MINUS_DST_COLOR,[e_]:s.ONE_MINUS_DST_ALPHA,[r_]:s.CONSTANT_COLOR,[s_]:s.ONE_MINUS_CONSTANT_COLOR,[a_]:s.CONSTANT_ALPHA,[o_]:s.ONE_MINUS_CONSTANT_ALPHA};function St(k,ge,he,Ne,Te,Pe,Xe,at,L,ye){if(k===Zs){y===!0&&(ke(s.BLEND),y=!1);return}if(y===!1&&(Me(s.BLEND),y=!0),k!==Wv){if(k!==S||ye!==B){if((R!==qs||z!==qs)&&(s.blendEquation(s.FUNC_ADD),R=qs,z=qs),ye)switch(k){case qa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ka:s.blendFunc(s.ONE,s.ONE);break;case lm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case cm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Gt("WebGLState: Invalid blending: ",k);break}else switch(k){case qa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ka:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case lm:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cm:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",k);break}F=null,N=null,D=null,w=null,P.set(0,0,0),ee=0,S=k,B=ye}return}Te=Te||ge,Pe=Pe||he,Xe=Xe||Ne,(ge!==R||Te!==z)&&(s.blendEquationSeparate(Ve[ge],Ve[Te]),R=ge,z=Te),(he!==F||Ne!==N||Pe!==D||Xe!==w)&&(s.blendFuncSeparate(je[he],je[Ne],je[Pe],je[Xe]),F=he,N=Ne,D=Pe,w=Xe),(at.equals(P)===!1||L!==ee)&&(s.blendColor(at.r,at.g,at.b,L),P.copy(at),ee=L),S=k,B=!1}function xt(k,ge){k.side===Bi?ke(s.CULL_FACE):Me(s.CULL_FACE);let he=k.side===kn;ge&&(he=!he),Nt(he),k.blending===qa&&k.transparent===!1?St(Zs):St(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),u.setFunc(k.depthFunc),u.setTest(k.depthTest),u.setMask(k.depthWrite),l.setMask(k.colorWrite);const Ne=k.stencilWrite;p.setTest(Ne),Ne&&(p.setMask(k.stencilWriteMask),p.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),p.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),zt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Me(s.SAMPLE_ALPHA_TO_COVERAGE):ke(s.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(k){X!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),X=k)}function Mt(k){k!==Gv?(Me(s.CULL_FACE),k!==H&&(k===om?s.cullFace(s.BACK):k===Hv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ke(s.CULL_FACE),H=k}function Zt(k){k!==j&&(J&&s.lineWidth(k),j=k)}function zt(k,ge,he){k?(Me(s.POLYGON_OFFSET_FILL),(W!==ge||G!==he)&&(W=ge,G=he,u.getReversed()&&(ge=-ge,he=-he),s.polygonOffset(ge,he))):ke(s.POLYGON_OFFSET_FILL)}function $t(k){k?Me(s.SCISSOR_TEST):ke(s.SCISSOR_TEST)}function Vt(k){k===void 0&&(k=s.TEXTURE0+re-1),q!==k&&(s.activeTexture(k),q=k)}function tn(k,ge,he){he===void 0&&(q===null?he=s.TEXTURE0+re-1:he=q);let Ne=I[he];Ne===void 0&&(Ne={type:void 0,texture:void 0},I[he]=Ne),(Ne.type!==k||Ne.texture!==ge)&&(q!==he&&(s.activeTexture(he),q=he),s.bindTexture(k,ge||De[k]),Ne.type=k,Ne.texture=ge)}function K(){const k=I[q];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Ht(){try{s.compressedTexImage2D(...arguments)}catch(k){Gt("WebGLState:",k)}}function Ct(){try{s.compressedTexImage3D(...arguments)}catch(k){Gt("WebGLState:",k)}}function gt(){try{s.texSubImage2D(...arguments)}catch(k){Gt("WebGLState:",k)}}function ze(){try{s.texSubImage3D(...arguments)}catch(k){Gt("WebGLState:",k)}}function Pt(){try{s.compressedTexSubImage2D(...arguments)}catch(k){Gt("WebGLState:",k)}}function Ye(){try{s.compressedTexSubImage3D(...arguments)}catch(k){Gt("WebGLState:",k)}}function tt(){try{s.texStorage2D(...arguments)}catch(k){Gt("WebGLState:",k)}}function U(){try{s.texStorage3D(...arguments)}catch(k){Gt("WebGLState:",k)}}function E(){try{s.texImage2D(...arguments)}catch(k){Gt("WebGLState:",k)}}function oe(){try{s.texImage3D(...arguments)}catch(k){Gt("WebGLState:",k)}}function Ee(k){return v[k]!==void 0?v[k]:s.getParameter(k)}function _e(k,ge){v[k]!==ge&&(s.pixelStorei(k,ge),v[k]=ge)}function Ue(k){se.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),se.copy(k))}function xe(k){V.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),V.copy(k))}function ie(k,ge){let he=h.get(ge);he===void 0&&(he=new WeakMap,h.set(ge,he));let Ne=he.get(k);Ne===void 0&&(Ne=s.getUniformBlockIndex(ge,k.name),s.uniformBlockBinding(ge,Ne,Ne),he.set(k,Ne))}function ae(k,ge,he){const Te=h.get(ge).get(k);d[Te]!==he&&(s.bindBufferBase(s.UNIFORM_BUFFER,Te,he),d[Te]=he)}function Se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),x={},v={},q=null,I={},_={},d={},M=new WeakMap,b=[],C=null,y=!1,S=null,R=null,F=null,N=null,z=null,D=null,w=null,P=new At(0,0,0),ee=0,B=!1,X=null,H=null,j=null,W=null,G=null,se.set(0,0,s.canvas.width,s.canvas.height),V.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),p.reset()}return{buffers:{color:l,depth:u,stencil:p},enable:Me,disable:ke,bindFramebuffer:lt,drawBuffers:He,useProgram:Re,setBlending:St,setMaterial:xt,setFlipSided:Nt,setCullFace:Mt,setLineWidth:Zt,setPolygonOffset:zt,setScissorTest:$t,activeTexture:Vt,bindTexture:tn,unbindTexture:K,compressedTexImage2D:Ht,compressedTexImage3D:Ct,texImage2D:E,texImage3D:oe,pixelStorei:_e,getParameter:Ee,updateUBOMapping:ie,uniformBlockBinding:ae,texStorage2D:tt,texStorage3D:U,texSubImage2D:gt,texSubImage3D:ze,compressedTexSubImage2D:Pt,compressedTexSubImage3D:Ye,scissor:Ue,viewport:xe,reset:Se}}function $w(s,e,t,r,o,l,u){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ut,x=new WeakMap,v=new Set;let _;const M=new WeakMap,b=new Set,C=new FinalizationRegistry(U=>b.delete(U));let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(U,E){return y?new OffscreenCanvas(U,E):Zl("canvas")}function R(U,E,oe){let Ee=1;const _e=tt(U);if((_e.width>oe||_e.height>oe)&&(Ee=oe/Math.max(_e.width,_e.height)),Ee<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Ue=Math.floor(Ee*_e.width),xe=Math.floor(Ee*_e.height);_===void 0&&(_=S(Ue,xe));const ie=E?S(Ue,xe):_;return ie.width=Ue,ie.height=xe,ie.getContext("2d").drawImage(U,0,0,Ue,xe),pt("WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+Ue+"x"+xe+")."),ie}else return"data"in U&&pt("WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),U;return U}function F(U){return U.generateMipmaps}function N(U){s.generateMipmap(U)}function z(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(U,E,oe,Ee,_e,Ue=!1){if(U!==null){if(s[U]!==void 0)return s[U];pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let xe;Ee&&(xe=e.get("EXT_texture_norm16"),xe||pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=E;if(E===s.RED&&(oe===s.FLOAT&&(ie=s.R32F),oe===s.HALF_FLOAT&&(ie=s.R16F),oe===s.UNSIGNED_BYTE&&(ie=s.R8),oe===s.UNSIGNED_SHORT&&xe&&(ie=xe.R16_EXT),oe===s.SHORT&&xe&&(ie=xe.R16_SNORM_EXT)),E===s.RED_INTEGER&&(oe===s.UNSIGNED_BYTE&&(ie=s.R8UI),oe===s.UNSIGNED_SHORT&&(ie=s.R16UI),oe===s.UNSIGNED_INT&&(ie=s.R32UI),oe===s.BYTE&&(ie=s.R8I),oe===s.SHORT&&(ie=s.R16I),oe===s.INT&&(ie=s.R32I)),E===s.RG&&(oe===s.FLOAT&&(ie=s.RG32F),oe===s.HALF_FLOAT&&(ie=s.RG16F),oe===s.UNSIGNED_BYTE&&(ie=s.RG8),oe===s.UNSIGNED_SHORT&&xe&&(ie=xe.RG16_EXT),oe===s.SHORT&&xe&&(ie=xe.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(oe===s.UNSIGNED_BYTE&&(ie=s.RG8UI),oe===s.UNSIGNED_SHORT&&(ie=s.RG16UI),oe===s.UNSIGNED_INT&&(ie=s.RG32UI),oe===s.BYTE&&(ie=s.RG8I),oe===s.SHORT&&(ie=s.RG16I),oe===s.INT&&(ie=s.RG32I)),E===s.RGB_INTEGER&&(oe===s.UNSIGNED_BYTE&&(ie=s.RGB8UI),oe===s.UNSIGNED_SHORT&&(ie=s.RGB16UI),oe===s.UNSIGNED_INT&&(ie=s.RGB32UI),oe===s.BYTE&&(ie=s.RGB8I),oe===s.SHORT&&(ie=s.RGB16I),oe===s.INT&&(ie=s.RGB32I)),E===s.RGBA_INTEGER&&(oe===s.UNSIGNED_BYTE&&(ie=s.RGBA8UI),oe===s.UNSIGNED_SHORT&&(ie=s.RGBA16UI),oe===s.UNSIGNED_INT&&(ie=s.RGBA32UI),oe===s.BYTE&&(ie=s.RGBA8I),oe===s.SHORT&&(ie=s.RGBA16I),oe===s.INT&&(ie=s.RGBA32I)),E===s.RGB&&(oe===s.UNSIGNED_SHORT&&xe&&(ie=xe.RGB16_EXT),oe===s.SHORT&&xe&&(ie=xe.RGB16_SNORM_EXT),oe===s.UNSIGNED_INT_5_9_9_9_REV&&(ie=s.RGB9_E5),oe===s.UNSIGNED_INT_10F_11F_11F_REV&&(ie=s.R11F_G11F_B10F)),E===s.RGBA){const ae=Ue?Kl:Dt.getTransfer(_e);oe===s.FLOAT&&(ie=s.RGBA32F),oe===s.HALF_FLOAT&&(ie=s.RGBA16F),oe===s.UNSIGNED_BYTE&&(ie=ae===jt?s.SRGB8_ALPHA8:s.RGBA8),oe===s.UNSIGNED_SHORT&&xe&&(ie=xe.RGBA16_EXT),oe===s.SHORT&&xe&&(ie=xe.RGBA16_SNORM_EXT),oe===s.UNSIGNED_SHORT_4_4_4_4&&(ie=s.RGBA4),oe===s.UNSIGNED_SHORT_5_5_5_1&&(ie=s.RGB5_A1)}return(ie===s.R16F||ie===s.R32F||ie===s.RG16F||ie===s.RG32F||ie===s.RGBA16F||ie===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function w(U,E){let oe;return U?E===null||E===Wi||E===ea?oe=s.DEPTH24_STENCIL8:E===Gi?oe=s.DEPTH32F_STENCIL8:E===to&&(oe=s.DEPTH24_STENCIL8,pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Wi||E===ea?oe=s.DEPTH_COMPONENT24:E===Gi?oe=s.DEPTH_COMPONENT32F:E===to&&(oe=s.DEPTH_COMPONENT16),oe}function P(U,E){return F(U)===!0||U.isFramebufferTexture&&U.minFilter!==Cn&&U.minFilter!==Jn?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function ee(U){const E=new WeakRef(U);r.get(U).__ref=E,b.add(E),C.register(U,E,E)}function B(U){const E=r.get(U).__ref;E!==void 0&&(b.delete(E),C.unregister(E))}function X(U){j(U.target)}function H(U){W(U.target)}function j(U){U.removeEventListener("dispose",X),B(U),re(U),U.isVideoTexture&&x.delete(U),U.isHTMLTexture&&v.delete(U)}function W(U){U.removeEventListener("dispose",H),B(U),$(U)}function G(){for(const U of b){const E=U.deref();E!==void 0&&(E.isRenderTarget===!0?W(E):j(E))}b.clear(),v.clear()}function re(U){const E=r.get(U);if(E.__webglInit===void 0)return;const oe=U.source,Ee=M.get(oe);if(Ee){const _e=Ee[E.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&J(U),Object.keys(Ee).length===0&&M.delete(oe)}r.remove(U)}function J(U){const E=r.get(U);s.deleteTexture(E.__webglTexture);const oe=U.source,Ee=M.get(oe);delete Ee[E.__cacheKey],u.memory.textures--}function $(U){const E=r.get(U);E.__depthDisposeCallback&&E.__depthDisposeCallback();const oe=U.depthTexture;if(oe&&oe.renderTarget===U&&j(oe),U.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(E.__webglFramebuffer[_e]))for(let Ue=0;Ue<E.__webglFramebuffer[_e].length;Ue++)s.deleteFramebuffer(E.__webglFramebuffer[_e][Ue]);else s.deleteFramebuffer(E.__webglFramebuffer[_e]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[_e])}else{if(Array.isArray(E.__webglFramebuffer))for(let _e=0;_e<E.__webglFramebuffer.length;_e++)s.deleteFramebuffer(E.__webglFramebuffer[_e]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let _e=0;_e<E.__webglColorRenderbuffer.length;_e++)E.__webglColorRenderbuffer[_e]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[_e]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Ee=U.textures;for(let _e=0,Ue=Ee.length;_e<Ue;_e++){const xe=r.get(Ee[_e]);xe.__webglTexture&&(s.deleteTexture(xe.__webglTexture),u.memory.textures--),r.remove(Ee[_e])}r.remove(U)}let Y=0;function q(){Y=0}function I(){return Y}function ne(U){Y=U}function Ae(){const U=Y;return U>=o.maxTextures&&pt("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+o.maxTextures),Y+=1,U}function se(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.mipmapsAutoUpdate),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function V(U,E){const oe=r.get(U);if(U.isVideoTexture&&Pt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&oe.__version!==U.version){const Ee=U.image;if(Ee===null)pt("WebGLRenderer: Texture marked for update but no image data found.");else if(Ee.complete===!1)pt("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(oe,U,E);return}}else U.isExternalTexture&&(oe.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,oe.__webglTexture,s.TEXTURE0+E)}function we(U,E){const oe=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&oe.__version!==U.version){xt(oe,U,E);return}else U.isExternalTexture&&(oe.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,oe.__webglTexture,s.TEXTURE0+E)}function De(U,E){const oe=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&oe.__version!==U.version){xt(oe,U,E);return}t.bindTexture(s.TEXTURE_3D,oe.__webglTexture,s.TEXTURE0+E)}function Me(U,E){const oe=r.get(U);if(U.version>0&&oe.__version!==U.version){Nt(oe,U,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,oe.__webglTexture,s.TEXTURE0+E)}const ke={[eo]:s.REPEAT,[oi]:s.CLAMP_TO_EDGE,[Td]:s.MIRRORED_REPEAT},lt={[Cn]:s.NEAREST,[u_]:s.NEAREST_MIPMAP_NEAREST,[gl]:s.NEAREST_MIPMAP_LINEAR,[Jn]:s.LINEAR,[Wu]:s.LINEAR_MIPMAP_NEAREST,[Ur]:s.LINEAR_MIPMAP_LINEAR},He={[p_]:s.NEVER,[R0]:s.ALWAYS,[m_]:s.LESS,[A0]:s.LEQUAL,[g_]:s.EQUAL,[C0]:s.GEQUAL,[x_]:s.GREATER,[v_]:s.NOTEQUAL};function Re(U,E){if(E.type===Gi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Jn||E.magFilter===Wu||E.magFilter===gl||E.magFilter===Ur||E.minFilter===Jn||E.minFilter===Wu||E.minFilter===gl||E.minFilter===Ur)&&pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,ke[E.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,ke[E.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,ke[E.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,lt[E.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,lt[E.minFilter]),E.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,He[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Cn||E.minFilter!==gl&&E.minFilter!==Ur||E.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const oe=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ve(U,E){let oe=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",X),ee(E));const Ee=E.source;let _e=M.get(Ee);_e===void 0&&(_e={},M.set(Ee,_e));const Ue=se(E);if(Ue!==U.__cacheKey){_e[Ue]===void 0&&(_e[Ue]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,oe=!0),_e[Ue].usedTimes++;const xe=_e[U.__cacheKey];xe!==void 0&&(_e[U.__cacheKey].usedTimes--,xe.usedTimes===0&&J(E)),U.__cacheKey=Ue,U.__webglTexture=_e[Ue].texture}return oe}function je(U,E,oe){return Math.floor(Math.floor(U/oe)/E)}function St(U,E,oe,Ee){const Ue=U.updateRanges;if(Ue.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,oe,Ee,E.data);else{Ue.sort((k,ge)=>k.start-ge.start);let xe=0;for(let k=1;k<Ue.length;k++){const ge=Ue[xe],he=Ue[k],Ne=ge.start+ge.count,Te=je(he.start,E.width,4),Pe=je(ge.start,E.width,4);he.start<=Ne+1&&Te===Pe&&je(he.start+he.count-1,E.width,4)===Te?ge.count=Math.max(ge.count,he.start+he.count-ge.start):(++xe,Ue[xe]=he)}Ue.length=xe+1;const ie=t.getParameter(s.UNPACK_ROW_LENGTH),ae=t.getParameter(s.UNPACK_SKIP_PIXELS),Se=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let k=0,ge=Ue.length;k<ge;k++){const he=Ue[k],Ne=Math.floor(he.start/4),Te=Math.ceil(he.count/4),Pe=Ne%E.width,Xe=Math.floor(Ne/E.width),at=Te,L=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Xe),t.texSubImage2D(s.TEXTURE_2D,0,Pe,Xe,at,L,oe,Ee,E.data)}U.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ie),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(s.UNPACK_SKIP_ROWS,Se)}}function xt(U,E,oe){let Ee=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Ee=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Ee=s.TEXTURE_3D);const _e=Ve(U,E),Ue=E.source;t.bindTexture(Ee,U.__webglTexture,s.TEXTURE0+oe);const xe=r.get(Ue);if(Ue.version!==xe.__version||_e===!0){if(t.activeTexture(s.TEXTURE0+oe),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const L=Dt.getPrimaries(Dt.workingColorSpace),ye=E.colorSpace===Ir?null:Dt.getPrimaries(E.colorSpace),ve=E.colorSpace===Ir||L===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let ae=R(E.image,!1,o.maxTextureSize);ae=Ye(E,ae);const Se=l.convert(E.format,E.colorSpace),k=l.convert(E.type);let ge=D(E.internalFormat,Se,k,E.normalized,E.colorSpace,E.isVideoTexture);Re(Ee,E);let he;const Ne=E.mipmaps,Te=E.isVideoTexture!==!0,Pe=xe.__version===void 0||_e===!0,Xe=Ue.dataReady,at=P(E,ae);if(E.isDepthTexture)ge=w(E.format===zr,E.type),Pe&&(Te?t.texStorage2D(s.TEXTURE_2D,1,ge,ae.width,ae.height):t.texImage2D(s.TEXTURE_2D,0,ge,ae.width,ae.height,0,Se,k,null));else if(E.isDataTexture)if(Ne.length>0){Te&&Pe&&t.texStorage2D(s.TEXTURE_2D,at,ge,Ne[0].width,Ne[0].height);for(let L=0,ye=Ne.length;L<ye;L++)he=Ne[L],Te?Xe&&t.texSubImage2D(s.TEXTURE_2D,L,0,0,he.width,he.height,Se,k,he.data):t.texImage2D(s.TEXTURE_2D,L,ge,he.width,he.height,0,Se,k,he.data);E.generateMipmaps=!1}else Te?(Pe&&t.texStorage2D(s.TEXTURE_2D,at,ge,ae.width,ae.height),Xe&&St(E,ae,Se,k)):t.texImage2D(s.TEXTURE_2D,0,ge,ae.width,ae.height,0,Se,k,ae.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Te&&Pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,at,ge,Ne[0].width,Ne[0].height,ae.depth);for(let L=0,ye=Ne.length;L<ye;L++)if(he=Ne[L],E.format!==Hi)if(Se!==null)if(Te){if(Xe)if(E.layerUpdates.size>0){const ve=Dm(he.width,he.height,E.format,E.type);for(const Ie of E.layerUpdates){const ft=he.data.subarray(Ie*ve/he.data.BYTES_PER_ELEMENT,(Ie+1)*ve/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,L,0,0,Ie,he.width,he.height,1,Se,ft)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,L,0,0,0,he.width,he.height,ae.depth,Se,he.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,L,ge,he.width,he.height,ae.depth,0,he.data,0,0);else pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?Xe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,L,0,0,0,he.width,he.height,ae.depth,Se,k,he.data):t.texImage3D(s.TEXTURE_2D_ARRAY,L,ge,he.width,he.height,ae.depth,0,Se,k,he.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Te&&Pe&&t.texStorage2D(s.TEXTURE_2D,at,ge,Ne[0].width,Ne[0].height);for(let L=0,ye=Ne.length;L<ye;L++)he=Ne[L],E.format!==Hi?Se!==null?Te?Xe&&t.compressedTexSubImage2D(s.TEXTURE_2D,L,0,0,he.width,he.height,Se,he.data):t.compressedTexImage2D(s.TEXTURE_2D,L,ge,he.width,he.height,0,he.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?Xe&&t.texSubImage2D(s.TEXTURE_2D,L,0,0,he.width,he.height,Se,k,he.data):t.texImage2D(s.TEXTURE_2D,L,ge,he.width,he.height,0,Se,k,he.data)}else if(E.isDataArrayTexture)if(Te){if(Pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,at,ge,ae.width,ae.height,ae.depth),Xe)if(E.layerUpdates.size>0){const L=Dm(ae.width,ae.height,E.format,E.type);for(const ye of E.layerUpdates){const ve=ae.data.subarray(ye*L/ae.data.BYTES_PER_ELEMENT,(ye+1)*L/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ye,ae.width,ae.height,1,Se,k,ve)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Se,k,ae.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ge,ae.width,ae.height,ae.depth,0,Se,k,ae.data);else if(E.isData3DTexture)Te?(Pe&&t.texStorage3D(s.TEXTURE_3D,at,ge,ae.width,ae.height,ae.depth),Xe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Se,k,ae.data)):t.texImage3D(s.TEXTURE_3D,0,ge,ae.width,ae.height,ae.depth,0,Se,k,ae.data);else if(E.isFramebufferTexture){if(Pe)if(Te)t.texStorage2D(s.TEXTURE_2D,at,ge,ae.width,ae.height);else{let L=ae.width,ye=ae.height;for(let ve=0;ve<at;ve++)t.texImage2D(s.TEXTURE_2D,ve,ge,L,ye,0,Se,k,null),L>>=1,ye>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const L=s.canvas;if(L.hasAttribute("layoutsubtree")||L.setAttribute("layoutsubtree","true"),ae.parentNode!==L){L.appendChild(ae),v.add(E),L.onpaint=ye=>{const ve=ye.changedElements;for(const Ie of v)ve.includes(Ie.image)&&(Ie.needsUpdate=!0)},L.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ae);else{const ve=s.RGBA,Ie=s.RGBA,ft=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ve,Ie,ft,ae)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(Te&&Pe){const L=tt(Ne[0]);t.texStorage2D(s.TEXTURE_2D,at,ge,L.width,L.height)}for(let L=0,ye=Ne.length;L<ye;L++)he=Ne[L],Te?Xe&&t.texSubImage2D(s.TEXTURE_2D,L,0,0,Se,k,he):t.texImage2D(s.TEXTURE_2D,L,ge,Se,k,he);E.generateMipmaps=!1}else if(Te){if(Pe){const L=tt(ae);t.texStorage2D(s.TEXTURE_2D,at,ge,L.width,L.height)}Xe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Se,k,ae)}else t.texImage2D(s.TEXTURE_2D,0,ge,Se,k,ae);F(E)&&E.mipmapsAutoUpdate===!0&&N(Ee),xe.__version=Ue.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Nt(U,E,oe){if(E.image.length!==6)return;const Ee=Ve(U,E),_e=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+oe);const Ue=r.get(_e);if(_e.version!==Ue.__version||Ee===!0){t.activeTexture(s.TEXTURE0+oe);const xe=Dt.getPrimaries(Dt.workingColorSpace),ie=E.colorSpace===Ir?null:Dt.getPrimaries(E.colorSpace),ae=E.colorSpace===Ir||xe===ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const Se=E.isCompressedTexture||E.image[0].isCompressedTexture,k=E.image[0]&&E.image[0].isDataTexture,ge=[];for(let Ie=0;Ie<6;Ie++)!Se&&!k?ge[Ie]=R(E.image[Ie],!0,o.maxCubemapSize):ge[Ie]=k?E.image[Ie].image:E.image[Ie],ge[Ie]=Ye(E,ge[Ie]);const he=ge[0],Ne=l.convert(E.format,E.colorSpace),Te=l.convert(E.type);let Pe=D(E.internalFormat,Ne,Te,E.normalized,E.colorSpace);const Xe=E.isVideoTexture!==!0,at=Ue.__version===void 0||Ee===!0,L=_e.dataReady;let ye=P(E,he);Re(s.TEXTURE_CUBE_MAP,E);let ve;if(E.isDepthTexture){if(Pe=w(E.format===zr,E.type),at)if(Xe)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Pe,he.width,he.height);else for(let Ie=0;Ie<6;Ie++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Pe,he.width,he.height,0,Ne,Te,null)}else if(Se){Xe&&at&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ye,Pe,he.width,he.height);for(let Ie=0;Ie<6;Ie++){ve=ge[Ie].mipmaps;for(let ft=0;ft<ve.length;ft++){const wt=ve[ft];E.format!==Hi?Ne!==null?Xe?L&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,ft,0,0,wt.width,wt.height,Ne,wt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,ft,Pe,wt.width,wt.height,0,wt.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,ft,0,0,wt.width,wt.height,Ne,Te,wt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,ft,Pe,wt.width,wt.height,0,Ne,Te,wt.data)}}}else{if(ve=E.mipmaps,Xe&&at){ve.length>0&&ye++;const Ie=tt(ge[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ye,Pe,Ie.width,Ie.height)}for(let Ie=0;Ie<6;Ie++)if(k){Xe?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,0,0,ge[Ie].width,ge[Ie].height,Ne,Te,ge[Ie].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Pe,ge[Ie].width,ge[Ie].height,0,Ne,Te,ge[Ie].data);for(let ft=0;ft<ve.length;ft++){const ot=ve[ft].image[Ie].image;Xe?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,ft+1,0,0,ot.width,ot.height,Ne,Te,ot.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,ft+1,Pe,ot.width,ot.height,0,Ne,Te,ot.data)}}else{Xe?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,0,0,Ne,Te,ge[Ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Pe,Ne,Te,ge[Ie]);for(let ft=0;ft<ve.length;ft++){const wt=ve[ft];Xe?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,ft+1,0,0,Ne,Te,wt.image[Ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,ft+1,Pe,Ne,Te,wt.image[Ie])}}}F(E)&&E.mipmapsAutoUpdate===!0&&N(s.TEXTURE_CUBE_MAP),Ue.__version=_e.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Mt(U,E,oe,Ee,_e,Ue){const xe=l.convert(oe.format,oe.colorSpace),ie=l.convert(oe.type),ae=D(oe.internalFormat,xe,ie,oe.normalized,oe.colorSpace),Se=r.get(E),k=r.get(oe);if(k.__renderTarget=E,!Se.__hasExternalTextures){const ge=Math.max(1,E.width>>Ue),he=Math.max(1,E.height>>Ue);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?t.texImage3D(_e,Ue,ae,ge,he,E.depth,0,xe,ie,null):t.texImage2D(_e,Ue,ae,ge,he,0,xe,ie,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),ze(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ee,_e,k.__webglTexture,0,gt(E)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Ee,_e,k.__webglTexture,Ue),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Zt(U,E,oe){if(s.bindRenderbuffer(s.RENDERBUFFER,U),E.depthBuffer){const Ee=E.depthTexture,_e=Ee&&Ee.isDepthTexture?Ee.type:null,Ue=w(E.stencilBuffer,_e),xe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ze(E)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,gt(E),Ue,E.width,E.height):oe?s.renderbufferStorageMultisample(s.RENDERBUFFER,gt(E),Ue,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,U)}else{const Ee=E.textures;for(let _e=0;_e<Ee.length;_e++){const Ue=Ee[_e],xe=l.convert(Ue.format,Ue.colorSpace),ie=l.convert(Ue.type),ae=D(Ue.internalFormat,xe,ie,Ue.normalized,Ue.colorSpace);ze(E)?p.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,gt(E),ae,E.width,E.height):oe?s.renderbufferStorageMultisample(s.RENDERBUFFER,gt(E),ae,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ae,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function zt(U,E,oe){const Ee=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const _e=r.get(E.depthTexture);_e.__renderTarget=E;const Ue=Ee?E.depthTexture.image[0]:E.depthTexture.image;(!_e.__webglTexture||Ue.width!==E.width||Ue.height!==E.height)&&(Ue.width=E.width,Ue.height=E.height,E.depthTexture.needsUpdate=!0),Ee?Me(E.depthTexture,0):V(E.depthTexture,0);const xe=_e.__webglTexture,ie=gt(E),ae=Ee?s.TEXTURE_CUBE_MAP_POSITIVE_X+oe:s.TEXTURE_2D,Se=E.depthTexture.format===zr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===kr)ze(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,ae,xe,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,Se,ae,xe,0);else if(E.depthTexture.format===zr)ze(E)?p.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,ae,xe,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,Se,ae,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $t(U){const E=r.get(U),oe=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const Ee=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Ee){const _e=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Ee.removeEventListener("dispose",_e)};Ee.addEventListener("dispose",_e),E.__depthDisposeCallback=_e}E.__boundDepthTexture=Ee}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(oe)for(let Ee=0;Ee<6;Ee++)zt(E.__webglFramebuffer[Ee],U,Ee);else U.texture.mipmaps.length>0?zt(E.__webglFramebuffer[0],U,0):zt(E.__webglFramebuffer,U,0);else if(oe){E.__webglDepthbuffer=[];for(let Ee=0;Ee<6;Ee++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[Ee]),E.__webglDepthbuffer[Ee]===void 0)E.__webglDepthbuffer[Ee]=s.createRenderbuffer(),Zt(E.__webglDepthbuffer[Ee],U,!1);else{const _e=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=E.__webglDepthbuffer[Ee];s.bindRenderbuffer(s.RENDERBUFFER,Ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,Ue)}}else if(U.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Zt(E.__webglDepthbuffer,U,!1);else{const _e=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,Ue)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Vt(U,E,oe){const Ee=r.get(U);E!==void 0&&Mt(Ee.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),oe!==void 0&&$t(U)}function tn(U){const E=U.texture,oe=r.get(U),Ee=r.get(E);U.addEventListener("dispose",H),ee(U);const _e=U.textures,Ue=U.isWebGLCubeRenderTarget===!0,xe=_e.length>1;if(xe||(Ee.__webglTexture===void 0&&(Ee.__webglTexture=s.createTexture()),Ee.__version=E.version,u.memory.textures++),Ue){oe.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(E.mipmaps.length>0){oe.__webglFramebuffer[ie]=[];for(let ae=0;ae<E.mipmaps.length;ae++)oe.__webglFramebuffer[ie][ae]=s.createFramebuffer()}else oe.__webglFramebuffer[ie]=s.createFramebuffer()}else{if(E.mipmaps.length>0){oe.__webglFramebuffer=[];for(let ie=0;ie<E.mipmaps.length;ie++)oe.__webglFramebuffer[ie]=s.createFramebuffer()}else oe.__webglFramebuffer=s.createFramebuffer();if(xe)for(let ie=0,ae=_e.length;ie<ae;ie++){const Se=r.get(_e[ie]);Se.__webglTexture===void 0&&(Se.__webglTexture=s.createTexture(),u.memory.textures++)}if(U.samples>0&&ze(U)===!1){oe.__webglMultisampledFramebuffer=s.createFramebuffer(),oe.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglMultisampledFramebuffer);for(let ie=0;ie<_e.length;ie++){const ae=_e[ie];oe.__webglColorRenderbuffer[ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,oe.__webglColorRenderbuffer[ie]);const Se=l.convert(ae.format,ae.colorSpace),k=l.convert(ae.type),ge=D(ae.internalFormat,Se,k,ae.normalized,ae.colorSpace,U.isXRRenderTarget===!0),he=gt(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,he,ge,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ie,s.RENDERBUFFER,oe.__webglColorRenderbuffer[ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(oe.__webglDepthRenderbuffer=s.createRenderbuffer(),Zt(oe.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ue){t.bindTexture(s.TEXTURE_CUBE_MAP,Ee.__webglTexture),Re(s.TEXTURE_CUBE_MAP,E);for(let ie=0;ie<6;ie++)if(E.mipmaps.length>0)for(let ae=0;ae<E.mipmaps.length;ae++)Mt(oe.__webglFramebuffer[ie][ae],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ae);else Mt(oe.__webglFramebuffer[ie],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);F(E)?N(s.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(xe){for(let ie=0,ae=_e.length;ie<ae;ie++){const Se=_e[ie],k=r.get(Se);let ge=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ge=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ge,k.__webglTexture),Re(ge,Se),Mt(oe.__webglFramebuffer,U,Se,s.COLOR_ATTACHMENT0+ie,ge,0),F(Se)&&N(ge)}t.unbindTexture()}else{let ie=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ie=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ie,Ee.__webglTexture),Re(ie,E),E.mipmaps.length>0)for(let ae=0;ae<E.mipmaps.length;ae++)Mt(oe.__webglFramebuffer[ae],U,E,s.COLOR_ATTACHMENT0,ie,ae);else Mt(oe.__webglFramebuffer,U,E,s.COLOR_ATTACHMENT0,ie,0);F(E)?N(ie):E.mipmaps.length>0&&s.texParameteri(ie,s.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}U.depthBuffer&&$t(U)}function K(U){const E=U.textures;for(let oe=0,Ee=E.length;oe<Ee;oe++){const _e=E[oe];if(F(_e)&&_e.mipmapsAutoUpdate===!0){const Ue=z(U),xe=r.get(_e).__webglTexture;t.bindTexture(Ue,xe),N(Ue),t.unbindTexture()}}}const Ht=[];function Ct(U){if(U.samples>0){if(ze(U)===!1){const E=U.textures,oe=U.width,Ee=U.height;let _e=s.COLOR_BUFFER_BIT;const Ue=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=r.get(U),ie=E.length>1;if(ie)for(let Se=0;Se<E.length;Se++)t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),U.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Se=0;Se<E.length;Se++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),ie){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xe.__webglColorRenderbuffer[Se]);const k=r.get(E[Se]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,k,0)}s.blitFramebuffer(0,0,oe,Ee,0,0,oe,Ee,_e,s.NEAREST),d===!0&&(Ht.length=0,Ht.push(s.COLOR_ATTACHMENT0+Se),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&Ht.push(Ue),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ht))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ie)for(let Se=0;Se<E.length;Se++){t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,xe.__webglColorRenderbuffer[Se]);const k=r.get(E[Se]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.TEXTURE_2D,k,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&d){const E=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function gt(U){return Math.min(o.maxSamples,U.samples)}function ze(U){const E=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Pt(U){const E=u.render.frame;x.get(U)!==E&&(x.set(U,E),U.update())}function Ye(U,E){const oe=U.colorSpace,Ee=U.format,_e=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||oe!==ql&&oe!==Ir&&(Dt.getTransfer(oe)===jt?(Ee!==Hi||_e!==ai)&&pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",oe)),E}function tt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=Ae,this.resetTextureUnits=q,this.getTextureUnits=I,this.setTextureUnits=ne,this.setTexture2D=V,this.setTexture2DArray=we,this.setTexture3D=De,this.setTextureCube=Me,this.rebindTextures=Vt,this.setupRenderTarget=tn,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=ze,this.dispose=G}function Xw(s,e){function t(r,o=Ir){let l;const u=Dt.getTransfer(o);if(r===ai)return s.UNSIGNED_BYTE;if(r===gf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===xf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===M0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===w0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===y0)return s.BYTE;if(r===S0)return s.SHORT;if(r===to)return s.UNSIGNED_SHORT;if(r===mf)return s.INT;if(r===Wi)return s.UNSIGNED_INT;if(r===Gi)return s.FLOAT;if(r===ji)return s.HALF_FLOAT;if(r===b0)return s.ALPHA;if(r===E0)return s.RGB;if(r===Hi)return s.RGBA;if(r===kr)return s.DEPTH_COMPONENT;if(r===zr)return s.DEPTH_STENCIL;if(r===T0)return s.RED;if(r===vf)return s.RED_INTEGER;if(r===ds)return s.RG;if(r===_f)return s.RG_INTEGER;if(r===yf)return s.RGBA_INTEGER;if(r===Ol||r===Bl||r===Gl||r===Hl)if(u===jt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Ol)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Bl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Hl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Ol)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Bl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Hl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ad||r===Cd||r===Rd||r===Nd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Ad)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Cd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Rd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Nd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Pd||r===Ld||r===Dd||r===Id||r===Ud||r===Xl||r===zd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Pd||r===Ld)return u===jt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Dd)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Id)return l.COMPRESSED_R11_EAC;if(r===Ud)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Xl)return l.COMPRESSED_RG11_EAC;if(r===zd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Fd||r===kd||r===Od||r===Bd||r===Gd||r===Hd||r===Vd||r===Wd||r===jd||r===$d||r===Xd||r===Yd||r===qd||r===Kd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Fd)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===kd)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Od)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bd)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gd)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hd)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vd)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Wd)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===jd)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===$d)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Xd)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yd)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===qd)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kd)return u===jt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Zd||r===Jd||r===Qd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Zd)return u===jt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Qd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ef||r===tf||r===Yl||r===nf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===ef)return l.COMPRESSED_RED_RGTC1_EXT;if(r===tf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===nf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ea?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const Yw=`
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

}`;class Kw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new O0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ri({vertexShader:Yw,fragmentShader:qw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wn(new lo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zw extends fs{constructor(e,t){super();const r=this;let o=null,l=1,u=null,p="local-floor",d=1,h=null,x=null,v=null,_=null,M=null,b=null;const C=typeof XRWebGLBinding<"u",y=new Kw,S={},R=t.getContextAttributes();let F=null,N=null;const z=[],D=[],w=new Ut;let P=null,ee=null;const B=new Ti;B.viewport=new sn;const X=new Ti;X.viewport=new sn;const H=[B,X],j=new cy;let W=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let V=z[se];return V===void 0&&(V=new Qu,z[se]=V),V.getTargetRaySpace()},this.getControllerGrip=function(se){let V=z[se];return V===void 0&&(V=new Qu,z[se]=V),V.getGripSpace()},this.getHand=function(se){let V=z[se];return V===void 0&&(V=new Qu,z[se]=V),V.getHandSpace()};function re(se){const V=D.indexOf(se.inputSource);if(V===-1)return;const we=z[V];we!==void 0&&(we.update(se.inputSource,se.frame,h||u),we.dispatchEvent({type:se.type,data:se.inputSource}))}function J(){o.removeEventListener("select",re),o.removeEventListener("selectstart",re),o.removeEventListener("selectend",re),o.removeEventListener("squeeze",re),o.removeEventListener("squeezestart",re),o.removeEventListener("squeezeend",re),o.removeEventListener("end",J),o.removeEventListener("inputsourceschange",$);for(let se=0;se<z.length;se++){const V=D[se];V!==null&&(D[se]=null,z[se].disconnect(V))}W=null,G=null,y.reset();for(const se in S)delete S[se];if(e.setRenderTarget(F),M=null,_=null,v=null,o=null,N=null,Ae.stop(),r.isPresenting=!1,e.setPixelRatio(P),e.setSize(w.width,w.height,!1),ee!==null){const se=ee.camera;se.fov=ee.fov,se.zoom=ee.zoom,se.updateProjectionMatrix(),ee=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){l=se,r.isPresenting===!0&&pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){p=se,r.isPresenting===!0&&pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(se){h=se},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(se){if(o=se,o!==null){if(F=e.getRenderTarget(),o.addEventListener("select",re),o.addEventListener("selectstart",re),o.addEventListener("selectend",re),o.addEventListener("squeeze",re),o.addEventListener("squeezestart",re),o.addEventListener("squeezeend",re),o.addEventListener("end",J),o.addEventListener("inputsourceschange",$),R.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(w),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,De=null,Me=null;R.depth&&(Me=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=R.stencil?zr:kr,De=R.stencil?ea:Wi);const ke={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:l};v=this.getBinding(),_=v.createProjectionLayer(ke),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),N=new Vi(_.textureWidth,_.textureHeight,{format:Hi,type:ai,depthTexture:new ta(_.textureWidth,_.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const we={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,we),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new Vi(M.framebufferWidth,M.framebufferHeight,{format:Hi,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await o.requestReferenceSpace(p),Ae.setContext(o),Ae.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function $(se){for(let V=0;V<se.removed.length;V++){const we=se.removed[V],De=D.indexOf(we);De>=0&&(D[De]=null,z[De].disconnect(we))}for(let V=0;V<se.added.length;V++){const we=se.added[V];let De=D.indexOf(we);if(De===-1){for(let ke=0;ke<z.length;ke++)if(ke>=D.length){D.push(we),De=ke;break}else if(D[ke]===null){D[ke]=we,De=ke;break}if(De===-1)break}const Me=z[De];Me&&Me.connect(we)}}function Y(se,V){V===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(V.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(o===null)return;let V=se.near,we=se.far;y.texture!==null&&(y.depthNear>0&&(V=y.depthNear),y.depthFar>0&&(we=y.depthFar)),j.near=X.near=B.near=V,j.far=X.far=B.far=we,(W!==j.near||G!==j.far)&&(o.updateRenderState({depthNear:j.near,depthFar:j.far}),W=j.near,G=j.far),j.layers.mask=se.layers.mask|6,B.layers.mask=j.layers.mask&-5,X.layers.mask=j.layers.mask&-3;const De=se.parent,Me=j.cameras;Y(j,De);for(let ke=0;ke<Me.length;ke++)Y(Me[ke],De);j.projectionMatrix.copy(B.projectionMatrix),j.projectionMatrixInverse.copy(B.projectionMatrixInverse),ee===null&&se.isPerspectiveCamera&&(ee={camera:se,fov:se.fov,zoom:se.zoom}),q(se,j,De)};function q(se,V,we){we===null?se.matrix.copy(V.matrixWorld):(se.matrix.copy(we.matrixWorld),se.matrix.invert(),se.matrix.multiply(V.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(V.projectionMatrix),se.projectionMatrixInverse.copy(V.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=sf*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(_===null&&M===null))return d},this.setFoveation=function(se){d=se,_!==null&&(_.fixedFoveation=se),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=se)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(j)},this.getCameraTexture=function(se){return S[se]};let I=null;function ne(se,V){if(x=V.getViewerPose(h||u),b=V,x!==null){const we=x.views;M!==null&&(e.setRenderTargetFramebuffer(N,M.framebuffer),e.setRenderTarget(N));let De=!1;we.length!==j.cameras.length&&(j.cameras.length=0,De=!0);for(let He=0;He<we.length;He++){const Re=we[He];let Ve=null;if(M!==null)Ve=M.getViewport(Re);else{const St=v.getViewSubImage(_,Re);Ve=St.viewport,He===0&&(e.setRenderTargetTextures(N,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(N))}let je=H[He];je===void 0&&(je=new Ti,je.layers.enable(He),je.viewport=new sn,H[He]=je),je.matrix.fromArray(Re.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Re.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),He===0&&(j.matrix.copy(je.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),De===!0&&j.cameras.push(je)}const Me=o.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){v=r.getBinding();const He=v.getDepthInformation(we[0]);He&&He.isValid&&He.texture&&y.init(He,o.renderState)}if(Me&&Me.includes("camera-access")&&C){e.state.unbindTexture(),v=r.getBinding();for(let He=0;He<we.length;He++){const Re=we[He].camera;if(Re){let Ve=S[Re];Ve||(Ve=new O0,S[Re]=Ve);const je=v.getCameraImage(Re);Ve.sourceTexture=je}}}}for(let we=0;we<z.length;we++){const De=D[we],Me=z[we];De!==null&&Me!==void 0&&Me.update(De,V,h||u)}I&&I(se,V),V.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:V}),b=null}const Ae=new W0;Ae.setAnimationLoop(ne),this.setAnimationLoop=function(se){I=se},this.dispose=function(){}}}const Jw=new an,eg=new mt;eg.set(-1,0,0,0,1,0,0,0,1);function Qw(s,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,B0(s)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function o(y,S,R,F,N){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?l(y,S):S.isMeshLambertMaterial?(l(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(y,S),v(y,S)):S.isMeshPhongMaterial?(l(y,S),x(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(y,S),_(y,S),S.isMeshPhysicalMaterial&&M(y,S,N)):S.isMeshMatcapMaterial?(l(y,S),b(y,S)):S.isMeshDepthMaterial?l(y,S):S.isMeshDistanceMaterial?(l(y,S),C(y,S)):S.isMeshNormalMaterial?l(y,S):S.isLineBasicMaterial?(u(y,S),S.isLineDashedMaterial&&p(y,S)):S.isPointsMaterial?d(y,S,R,F):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===kn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===kn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const R=e.get(S),F=R.envMap,N=R.envMapRotation;F&&(y.envMap.value=F,y.envMapRotation.value.setFromMatrix4(Jw.makeRotationFromEuler(N)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(eg),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function u(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function p(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function d(y,S,R,F){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*R,y.scale.value=F*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function x(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function _(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,R){y.ior.value=S.ior,S.diffuseRoughness>0&&(y.diffuseRoughness.value=S.diffuseRoughness,S.diffuseRoughnessMap&&(y.diffuseRoughnessMap.value=S.diffuseRoughnessMap,t(S.diffuseRoughnessMap,y.diffuseRoughnessMapTransform))),S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===kn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.retroreflectivity>0&&(y.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessMinimum,y.iridescenceThicknessMaximum.value=S.iridescenceThicknessMaximum,S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,S){S.matcap&&(y.matcap.value=S.matcap)}function C(y,S){const R=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function eb(s,e,t,r){let o={},l={};function u(R,F){const N=F.program;r.uniformBlockBinding(R,N,o[R.id])}function p(R,F){let N=o[R.id];N===void 0&&(b(R),N=d(R),o[R.id]=N,R.addEventListener("dispose",y));const z=F.program;r.updateUBOMapping(R,z);const D=e.render.frame;l[R.id]!==D&&(h(R),l[R.id]=D)}function d(R){const F=s.createBuffer(),N=R.__size,z=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,F),s.bufferData(s.UNIFORM_BUFFER,N,z),s.bindBuffer(s.UNIFORM_BUFFER,null),F}function h(R){const F=o[R.id],N=R.uniforms,z=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,F);for(let D=0,w=N.length;D<w;D++){const P=N[D];if(Array.isArray(P))for(let ee=0,B=P.length;ee<B;ee++)x(P[ee],D,ee,z);else x(P,D,0,z)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(R,F,N,z){if(_(R,F,N,z)===!0){const D=R.__offset,w=R.value;if(Array.isArray(w)){let P=0;for(let ee=0;ee<w.length;ee++){const B=w[ee],X=C(B,!0);v(B,R.__data,P),P+=X.storage/Float32Array.BYTES_PER_ELEMENT}}else v(w,R.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,D,R.__data)}}function v(R,F,N){typeof R=="number"||typeof R=="boolean"?F[N]=R:R.isMatrix3?(F[N]=R.elements[0],F[N+1]=R.elements[1],F[N+2]=R.elements[2],F[N+3]=0,F[N+4]=R.elements[3],F[N+5]=R.elements[4],F[N+6]=R.elements[5],F[N+7]=0,F[N+8]=R.elements[6],F[N+9]=R.elements[7],F[N+10]=R.elements[8],F[N+11]=0):ArrayBuffer.isView(R)?F.set(R.subarray(0,F.length-N),N):R.toArray(F,N)}function _(R,F,N,z){const D=R.value,w=F+"_"+N;if(Array.isArray(D)){z[w]===void 0&&(z[w]=[]);const P=z[w];let ee=!1;for(let B=0;B<D.length;B++)M(D[B],P,B)===!0&&(ee=!0);return ee}return M(D,z,w)}function M(R,F,N){if(F[N]===void 0)return typeof R=="number"||typeof R=="boolean"?F[N]=R:ArrayBuffer.isView(R)?F[N]=R.slice():F[N]=R.clone(),!0;{const z=F[N];if(typeof R=="number"||typeof R=="boolean"){if(z!==R)return F[N]=R,!0}else{if(ArrayBuffer.isView(R))return!0;if(z.equals(R)===!1)return z.copy(R),!0}}return!1}function b(R){const F=R.uniforms;let N=0;const z=16;for(let w=0,P=F.length;w<P;w++){const ee=Array.isArray(F[w])?F[w]:[F[w]];for(let B=0,X=ee.length;B<X;B++){const H=ee[B],j=Array.isArray(H.value)?H.value:[H.value],W=Array.isArray(F[w])||Array.isArray(H.value);let G=N;for(let J=0,$=j.length;J<$;J++){const Y=j[J],q=C(Y,W),I=N%z,ne=I%q.boundary,Ae=I+ne;N+=ne,Ae!==0&&z-Ae<q.storage&&(N+=z-Ae),J===0&&(G=N),N+=q.storage}const re=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new re((N-G)/Float32Array.BYTES_PER_ELEMENT),H.__offset=G}}const D=N%z;return D>0&&(N+=z-D),R.__size=N,R.__cache={},this}function C(R,F){const N={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(N.boundary=4,N.storage=4):R.isVector2?(N.boundary=8,N.storage=8):R.isVector3||R.isColor?(N.boundary=16,N.storage=12):R.isVector4?(N.boundary=16,N.storage=16):R.isMatrix3?(N.boundary=16,N.storage=48):R.isMatrix4?(N.boundary=16,N.storage=64):R.isTexture?pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(N.boundary=16,N.storage=R.byteLength):pt("WebGLRenderer: Unsupported uniform value type.",R),F===!0&&(N.boundary=16,N.storage=Math.ceil(N.storage/16)*16),N}function y(R){const F=R.target;F.removeEventListener("dispose",y),s.deleteBuffer(o[F.id]),delete o[F.id],delete l[F.id]}function S(){for(const R in o)s.deleteBuffer(o[R]);o={},l={}}return{bind:u,update:p,dispose:S}}const tb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ki=null;function nb(){return ki===null&&(ki=new K_(tb,16,16,ds,ji),ki.name="DFG_LUT",ki.minFilter=Jn,ki.magFilter=Jn,ki.wrapS=oi,ki.wrapT=oi,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}class ib{constructor(e={}){const{canvas:t=S_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:p=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:M=ai}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=u;const C=M,y=new Set([yf,_f,vf]),S=new Set([ai,Wi,to,ea,gf,xf]),R=new Uint32Array(4),F=new Int32Array(4),N={textures:[],min:[],max:[],resolution:[]};let z=null,D=null;const w=[],P=[];let ee=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ar,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let X=!1,H=null,j=null,W=null,G=null;this._outputColorSpace=si;let re=0,J=0,$=null,Y=-1,q=null;const I=new sn,ne=new sn;let Ae=null;const se=new At(0);let V=0,we=t.width,De=t.height,Me=1,ke=null,lt=null;const He=new sn(0,0,we,De),Re=new sn(0,0,we,De);let Ve=!1;const je=new io,St=new bf;let xt=!1,Nt=!1;const Mt=new an,Zt=new pe,zt=new sn,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function tn(){return $===null?Me:1}let K=r;function Ht(A,Z){return t.getContext(A,Z)}let Ct,gt,ze,Pt,Ye,tt,U,E,oe,Ee,_e,Ue,xe,ie,ae,Se,k,ge,he,Ne,Te,Pe,Xe;try{const A={alpha:!0,depth:o,stencil:l,antialias:p,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pf}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),K===null){const Z="webgl2";if(K=Ht(Z,A),K===null)throw Ht(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}at()}catch(A){throw t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),Gt("WebGLRenderer: "+A.message),A}function at(){Ct=new aM(K),Ct.init(),Te=new Xw(K,Ct),gt=new q1(K,Ct,e,Te),ze=new jw(K,Ct),gt.reversedDepthBuffer&&_&&ze.buffers.depth.setReversed(!0),j=K.createFramebuffer(),W=K.createFramebuffer(),G=K.createFramebuffer(),Pt=new cM(K),Ye=new Pw,tt=new $w(K,Ct,ze,Ye,gt,Te,Pt),U=new sM(B),E=new dy(K),Pe=new X1(K,E),oe=new oM(K,E,Pt,Pe),Ee=new dM(K,oe,E,Pe,Pt),ge=new uM(K,gt,tt),ae=new K1(Ye),_e=new Nw(B,U,Ct,gt,Pe,ae),Ue=new Qw(B,Ye),xe=new Dw,ie=new Ow(Ct),k=new $1(B,U,ze,Ee,b,d),Se=new Ww(B,Ee,gt),Xe=new eb(K,Pt,gt,ze),he=new Y1(K,Ct,Pt),Ne=new lM(K,Ct,Pt),Pt.programs=_e.programs,B.capabilities=gt,B.extensions=Ct,B.properties=Ye,B.renderLists=xe,B.shadowMap=Se,B.state=ze,B.info=Pt}C!==ai&&(ee=new hM(C,t.width,t.height,p,o,l));const L=new Zw(B,K);this.xr=L,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const A=Ct.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ct.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(A){A!==void 0&&(Me=A,this.setSize(we,De,!1))},this.getSize=function(A){return A.set(we,De)},this.setSize=function(A,Z,de=!0){if(L.isPresenting){pt("WebGLRenderer: Can't change size while VR device is presenting.");return}we=A,De=Z,t.width=Math.floor(A*Me),t.height=Math.floor(Z*Me),de===!0&&(t.style.width=A+"px",t.style.height=Z+"px"),ee!==null&&ee.setSize(t.width,t.height),this.setViewport(0,0,A,Z)},this.getDrawingBufferSize=function(A){return A.set(we*Me,De*Me).floor()},this.setDrawingBufferSize=function(A,Z,de){we=A,De=Z,Me=de,t.width=Math.floor(A*de),t.height=Math.floor(Z*de),this.setViewport(0,0,A,Z)},this.setEffects=function(A){if(C===ai){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Z=0;Z<A.length;Z++)if(A[Z].isOutputPass===!0){pt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}ee.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(He)},this.setViewport=function(A,Z,de,ce){A.isVector4?He.set(A.x,A.y,A.z,A.w):He.set(A,Z,de,ce),ze.viewport(I.copy(He).multiplyScalar(tn()).round())},this.getScissor=function(A){return A.copy(Re)},this.setScissor=function(A,Z,de,ce){A.isVector4?Re.set(A.x,A.y,A.z,A.w):Re.set(A,Z,de,ce),ze.scissor(ne.copy(Re).multiplyScalar(tn()).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(A){ze.setScissorTest(Ve=A)},this.setOpaqueSort=function(A){ke=A},this.setTransparentSort=function(A){lt=A},this.getClearColor=function(A){return A.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor(...arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha(...arguments)},this.clear=function(A=!0,Z=!0,de=!0){let ce=0;if(A){let le=!1;if($!==null){const Ge=$.texture.format;le=y.has(Ge)}if(le){const Ge=$.texture.type,Ke=S.has(Ge),Be=k.getClearColor(),We=k.getClearAlpha(),Je=Be.r,dt=Be.g,vt=Be.b;Ke?(R[0]=Je,R[1]=dt,R[2]=vt,R[3]=We,K.clearBufferuiv(K.COLOR,0,R)):(F[0]=Je,F[1]=dt,F[2]=vt,F[3]=We,K.clearBufferiv(K.COLOR,0,F))}else ce|=K.COLOR_BUFFER_BIT}Z&&(ce|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(ce|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ce!==0&&K.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),H=A},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),k.dispose(),xe.dispose(),ie.dispose(),tt.dispose(),Ye.dispose(),U.dispose(),Ee.dispose(),oe.dispose(),Pe.dispose(),Xe.dispose(),_e.dispose(),L.dispose(),L.removeEventListener("sessionstart",on),L.removeEventListener("sessionend",Rn),Nn.stop()};function ye(A){A.preventDefault(),fm("WebGLRenderer: Context Lost."),X=!0}function ve(){fm("WebGLRenderer: Context Restored."),X=!1;const A=Pt.autoReset,Z=Se.enabled,de=Se.autoUpdate,ce=Se.needsUpdate,le=Se.type;at(),Pt.autoReset=A,Se.enabled=Z,Se.autoUpdate=de,Se.needsUpdate=ce,Se.type=le}function Ie(A){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ft(A){const Z=A.target;Z.removeEventListener("dispose",ft),wt(Z)}function wt(A){ot(A),Ye.remove(A)}function ot(A){const Z=Ye.get(A).programs;Z!==void 0&&(Z.forEach(function(de){_e.releaseProgram(de)}),A.isShaderMaterial&&_e.releaseShaderCache(A))}this.renderBufferDirect=function(A,Z,de,ce,le,Ge){Z===null&&(Z=$t);const Ke=le.isMesh&&le.matrixWorld.determinantAffine()<0,Be=la(A,Z,de,ce,le);ze.setMaterial(ce,Ke);let We=de.index,Je=1;if(ce.wireframe===!0){if(We=oe.getWireframeAttribute(de),We===void 0)return;Je=2}const dt=de.drawRange,vt=de.attributes.position;let Qe=dt.start*Je,Et=(dt.start+dt.count)*Je;Ge!==null&&(Qe=Math.max(Qe,Ge.start*Je),Et=Math.min(Et,(Ge.start+Ge.count)*Je)),We!==null?(Qe=Math.max(Qe,0),Et=Math.min(Et,We.count)):vt!=null&&(Qe=Math.max(Qe,0),Et=Math.min(Et,vt.count));const Qt=Et-Qe;if(Qt<0||Qt===1/0)return;Pe.setup(le,ce,Be,de,We);let Wt,Bt=he;if(We!==null&&(Wt=E.get(We),Bt=Ne,Bt.setIndex(Wt)),le.isMesh)ce.wireframe===!0?(ze.setLineWidth(ce.wireframeLinewidth*tn()),Bt.setMode(K.LINES)):Bt.setMode(K.TRIANGLES);else if(le.isLine){let ln=ce.linewidth;ln===void 0&&(ln=1),ze.setLineWidth(ln*tn()),le.isLineSegments?Bt.setMode(K.LINES):le.isLineLoop?Bt.setMode(K.LINE_LOOP):Bt.setMode(K.LINE_STRIP)}else le.isPoints?Bt.setMode(K.POINTS):le.isSprite&&Bt.setMode(K.TRIANGLES);if(le.isBatchedMesh)if(Ct.get("WEBGL_multi_draw"))Bt.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else{const ln=le._multiDrawStarts,et=le._multiDrawCounts,mn=le._multiDrawCount,rt=We?E.get(We).bytesPerElement:1,Pi=Ye.get(ce).currentProgram.getUniforms();for(let gn=0;gn<mn;gn++)Pi.setValue(K,"_gl_DrawID",gn),Bt.render(ln[gn]/rt,et[gn])}else if(le.isInstancedMesh)Bt.renderInstances(Qe,Qt,le.count);else if(de.isInstancedBufferGeometry){const ln=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,et=Math.min(de.instanceCount,ln);Bt.renderInstances(Qe,Qt,et)}else Bt.render(Qe,Qt)};function Lt(A,Z,de,ce){H!==null&&A.isNodeMaterial&&H.setObject(ce,A),xt===!0&&ae.setState(A,de,!1),A.transparent===!0&&A.side===Bi&&A.forceSinglePass===!1?(A.side=kn,A.needsUpdate=!0,Hr(A,Z,ce),A.side=us,A.needsUpdate=!0,Hr(A,Z,ce),A.side=Bi):Hr(A,Z,ce)}this.compile=function(A,Z,de=null){de===null&&(de=A),H!==null&&H.renderStart(A,Z,de),D=ie.get(de),D.init(Z),P.push(D),de.traverseVisible(function(le){le.isLight&&le.layers.test(Z.layers)&&(D.pushLight(le),le.castShadow&&D.pushShadow(le))}),A!==de&&A.traverseVisible(function(le){le.isLight&&le.layers.test(Z.layers)&&(D.pushLight(le),le.castShadow&&D.pushShadow(le))}),D.setupLights(),H!==null&&H.updateLights(D.state.lightsArray),Nt=this.localClippingEnabled,xt=ae.init(this.clippingPlanes,Nt),xt===!0&&ae.setGlobalState(this.clippingPlanes,Z),H!==null&&Se.render(D.state.shadowsArray,de,Z);const ce=new Set;return A.traverse(function(le){if(!(le.isMesh||le.isPoints||le.isLine||le.isSprite))return;const Ge=le.material;if(Ge)if(Array.isArray(Ge))for(let Ke=0;Ke<Ge.length;Ke++){const Be=Ge[Ke];Lt(Be,de,Z,le),ce.add(Be)}else Lt(Ge,de,Z,le),ce.add(Ge)}),D=P.pop(),H!==null&&H.renderEnd(),ce},this.compileAsync=function(A,Z,de=null){const ce=this.compile(A,Z,de);return new Promise(le=>{function Ge(){if(ce.forEach(function(Ke){const We=Ye.get(Ke).currentProgram;(We===void 0||We.isReady())&&ce.delete(Ke)}),ce.size===0){le(A);return}setTimeout(Ge,10)}Ct.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let bt=null;function un(A){bt&&bt(A)}function on(){Nn.stop()}function Rn(){Nn.start()}const Nn=new W0;Nn.setAnimationLoop(un),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(A){bt=A,L.setAnimationLoop(A),A===null?Nn.stop():Nn.start()},L.addEventListener("sessionstart",on),L.addEventListener("sessionend",Rn),this.render=function(A,Z){if(Z!==void 0&&Z.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;H!==null&&H.renderStart(A,Z);const de=L.enabled===!0&&L.isPresenting===!0,ce=ee!==null&&($===null||de)&&ee.begin(B,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(ee===null||ee.isCompositing()===!1)&&(L.cameraAutoUpdate===!0&&L.updateCamera(Z),Z=L.getCamera()),A.isScene===!0&&A.onBeforeRender(B,A,Z,$),D=ie.get(A,P.length),D.init(Z),D.state.textureUnits=tt.getTextureUnits(),P.push(D),Mt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Z.isArrayCamera?St.setFromArrayCamera(Z):je.setFromProjectionMatrix(Mt,Ci,Z.reversedDepth),Nt=this.localClippingEnabled,xt=ae.init(this.clippingPlanes,Nt),z=xe.get(A,w.length),z.init(),w.push(z),this.info.render.frame++,L.enabled===!0&&L.isPresenting===!0){const Ke=B.xr.getDepthSensingMesh();Ke!==null&&Ni(Ke,Z,-1/0,B.sortObjects)}Ni(A,Z,0,B.sortObjects),z.finish(),H!==null&&H.updateLights(D.state.lightsArray),B.sortObjects===!0&&z.sort(ke,lt),Vt=L.enabled===!1||L.isPresenting===!1||L.hasDepthSensing()===!1,Vt&&k.addToRenderList(z,A),this.info.autoReset===!0&&this.info.reset(),xt===!0&&ae.beginShadows();const le=D.state.shadowsArray;if(Se.render(le,A,Z),xt===!0&&ae.endShadows(),(ce&&ee.hasRenderPass())===!1){const Ke=z.opaque,Be=z.transmissive;if(D.setupLights(),Z.isArrayCamera){const We=Z.cameras;if(Be.length>0)for(let Je=0,dt=We.length;Je<dt;Je++){const vt=We[Je];sa(Ke,Be,A,vt)}Vt&&k.render(A);for(let Je=0,dt=We.length;Je<dt;Je++){const vt=We[Je];hs(z,A,vt,vt.viewport)}}else Be.length>0&&sa(Ke,Be,A,Z),Vt&&k.render(A),hs(z,A,Z)}$!==null&&J===0&&(tt.updateMultisampleRenderTarget($),tt.updateRenderTargetMipmap($)),ce&&ee.end(B),A.isScene===!0&&A.onAfterRender(B,A,Z),Pe.resetDefaultState(),Y=-1,q=null,P.pop(),P.length>0?(D=P[P.length-1],tt.setTextureUnits(D.state.textureUnits),xt===!0&&ae.setGlobalState(B.clippingPlanes,D.state.camera)):D=null,w.pop(),w.length>0?z=w[w.length-1]:z=null,H!==null&&H.renderEnd()};function Ni(A,Z,de,ce){if(A.visible===!1)return;if(A.layers.test(Z.layers)){if(A.isGroup)de=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Z);else if(A.isLight)D.pushLight(A),A.castShadow&&D.pushShadow(A);else if(A.isSprite){const Ke=Z.isArrayCamera?St:je;if(!A.frustumCulled||A.intersectsFrustum(Ke)){ce&&zt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Mt);const Be=Ee.update(A),We=A.material;We.visible&&z.push(A,Be,We,de,zt.z,null,Z)}}else if(A.isMesh||A.isLine||A.isPoints){const Ke=Z.isArrayCamera?St:je;if(!A.frustumCulled||A.intersectsFrustum(Ke)){const Be=Ee.update(A),We=A.material;if(ce&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),zt.copy(A.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),zt.copy(Be.boundingSphere.center)),zt.applyMatrix4(A.matrixWorld).applyMatrix4(Mt)),Array.isArray(We)){const Je=Be.groups;for(let dt=0,vt=Je.length;dt<vt;dt++){const Qe=Je[dt],Et=We[Qe.materialIndex];Et&&Et.visible&&z.push(A,Be,Et,de,zt.z,Qe,Z)}}else We.visible&&z.push(A,Be,We,de,zt.z,null,Z)}}}const Ge=A.children;for(let Ke=0,Be=Ge.length;Ke<Be;Ke++)Ni(Ge[Ke],Z,de,ce)}function hs(A,Z,de,ce){const{opaque:le,transmissive:Ge,transparent:Ke}=A;D.setupLightsView(de),xt===!0&&ae.setGlobalState(B.clippingPlanes,de),ce&&ze.viewport(I.copy(ce)),le.length>0&&Gr(le,Z,de),Ge.length>0&&Gr(Ge,Z,de),Ke.length>0&&Gr(Ke,Z,de),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function sa(A,Z,de,ce){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[ce.id]===void 0){const Qe=Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[ce.id]=new Vi(1,1,{generateMipmaps:!0,type:Qe?ji:ai,minFilter:Ur,samples:Math.max(4,gt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Dt.workingColorSpace})}const Ge=D.state.transmissionRenderTarget[ce.id],Ke=ce.viewport||I;Ge.setSize(Ke.z*B.transmissionResolutionScale,Ke.w*B.transmissionResolutionScale);const Be=B.getRenderTarget(),We=B.getActiveCubeFace(),Je=B.getActiveMipmapLevel();B.setRenderTarget(Ge),B.getClearColor(se),V=B.getClearAlpha(),V<1&&B.setClearColor(16777215,.5),B.clear(),Vt&&k.render(de);const dt=B.toneMapping;B.toneMapping=ar;const vt=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),D.setupLightsView(ce),xt===!0&&ae.setGlobalState(B.clippingPlanes,ce),Gr(A,de,ce),tt.updateMultisampleRenderTarget(Ge),tt.updateRenderTargetMipmap(Ge),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Et=0,Qt=Z.length;Et<Qt;Et++){const Wt=Z[Et],{object:Bt,geometry:ln,material:et,group:mn}=Wt;if(et.side===Bi&&Bt.layers.test(ce.layers)){const rt=et.side;et.side=kn,et.needsUpdate=!0,aa(Bt,de,ce,ln,et,mn),et.side=rt,et.needsUpdate=!0,Qe=!0}}Qe===!0&&(tt.updateMultisampleRenderTarget(Ge),tt.updateRenderTargetMipmap(Ge))}B.setRenderTarget(Be,We,Je),B.setClearColor(se,V),vt!==void 0&&(ce.viewport=vt),B.toneMapping=dt}function Gr(A,Z,de){const ce=Z.isScene===!0?Z.overrideMaterial:null;for(let le=0,Ge=A.length;le<Ge;le++){const Ke=A[le],{object:Be,geometry:We,group:Je}=Ke;let dt=Ke.material;dt.allowOverride===!0&&ce!==null&&(dt=ce),Be.layers.test(de.layers)&&aa(Be,Z,de,We,dt,Je)}}function aa(A,Z,de,ce,le,Ge){H!==null&&le.isNodeMaterial&&H.setObject(A,le),A.onBeforeRender(B,Z,de,ce,le,Ge),A.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),le.onBeforeRender(B,Z,de,ce,A,Ge),le.transparent===!0&&le.side===Bi&&le.forceSinglePass===!1?(le.side=kn,le.needsUpdate=!0,B.renderBufferDirect(de,Z,ce,le,A,Ge),le.side=us,le.needsUpdate=!0,B.renderBufferDirect(de,Z,ce,le,A,Ge),le.side=Bi):B.renderBufferDirect(de,Z,ce,le,A,Ge),A.onAfterRender(B,Z,de,ce,le,Ge)}function oa(A){let Z=0;for(const de of A)de.texture!==null&&Z++;return Z}function Hr(A,Z,de){Z.isScene!==!0&&(Z=$t);const ce=Ye.get(A),le=D.state.lights,Ge=D.state.shadowsArray,Ke=le.state.version,Be=_e.getParameters(A,le.state,Ge,Z,de,D.state.lightProbeGridArray),We=_e.getProgramCacheKey(Be);let Je=ce.programs;ce.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Z.environment:null,ce.fog=Z.fog;const dt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ce.envMap=U.get(A.envMap||ce.environment,dt),ce.envMapRotation=ce.environment!==null&&A.envMap===null?Z.environmentRotation:A.envMapRotation,Je===void 0&&(A.addEventListener("dispose",ft),Je=new Map,ce.programs=Je,ce.programVariants=new Map);let vt=Je.get(We);if(vt!==void 0){if(ce.currentProgram===vt&&ce.lightsStateVersion===Ke)return fo(A,Be),vt}else Be.uniforms=_e.getUniforms(A),H!==null&&A.isNodeMaterial&&H.build(A,de,Be),A.onBeforeCompile(Be,B),vt=_e.acquireProgram(Be,We),Je.set(We,vt),ce.uniforms=Be.uniforms;const Qe=ce.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Qe.clippingPlanes=ae.uniform),fo(A,Be),ce.needsLights=ps(A),ce.lightsStateVersion=Ke,ce.needsLights&&(Qe.ambientLightColor.value=le.state.ambient,Qe.lightProbe.value=le.state.probe,Qe.sunLights.value=le.state.sun,Qe.sunLightShadows.value=le.state.sunShadow,Qe.directionalLights.value=le.state.directional,Qe.directionalLightShadows.value=le.state.directionalShadow,Qe.spotLights.value=le.state.spot,Qe.spotLightShadows.value=le.state.spotShadow,Qe.rectAreaLights.value=le.state.rectArea,Qe.ltc_1.value=le.state.rectAreaLTC1,Qe.ltc_2.value=le.state.rectAreaLTC2,Qe.pointLights.value=le.state.point,Qe.pointLightShadows.value=le.state.pointShadow,Qe.hemisphereLights.value=le.state.hemi,Qe.sunShadowMatrix.value=le.state.sunShadowMatrix,Qe.sunShadowCascade.value=le.state.sunShadowCascade,Qe.directionalShadowMatrix.value=le.state.directionalShadowMatrix,Qe.spotLightMatrix.value=le.state.spotLightMatrix,Qe.spotLightMap.value=le.state.spotLightMap,Qe.pointShadowMatrix.value=le.state.pointShadowMatrix),ce.numLightProbeGrids=oa(D.state.lightProbeGridArray),ce.currentProgram=vt,ce.uniformsList=null,vt}function oc(A,Z,de,ce,le){const Ge=Ye.get(A),Ke=Ge.currentProgram.id+","+ce+","+le;let Be=Ge.programVariants.get(Ke);return Be===void 0?(Be=Hr(A,Z,de),Ge.programVariants.set(Ke,Be)):(Ge.currentProgram=Be,Ge.uniformsList=null,Ge.outputColorSpace=ce,Ge.toneMapping=le),Be}function Jt(A){if(A.uniformsList===null){const Z=A.currentProgram.getUniforms();A.uniformsList=Wl.seqWithValue(Z.seq,A.uniforms)}return A.uniformsList}function fo(A,Z){const de=Ye.get(A);de.outputColorSpace=Z.outputColorSpace,de.batching=Z.batching,de.batchingColor=Z.batchingColor,de.instancing=Z.instancing,de.instancingColor=Z.instancingColor,de.instancingMorph=Z.instancingMorph,de.skinning=Z.skinning,de.morphTargets=Z.morphTargets,de.morphNormals=Z.morphNormals,de.morphColors=Z.morphColors,de.morphTargetsCount=Z.morphTargetsCount,de.numClippingPlanes=Z.numClippingPlanes,de.numIntersection=Z.numClipIntersection,de.vertexAlphas=Z.vertexAlphas,de.vertexTangents=Z.vertexTangents,de.toneMapping=Z.toneMapping}function la(A,Z,de,ce,le){Z.isScene!==!0&&(Z=$t),tt.resetTextureUnits();const Ge=Z.fog,Ke=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial?Z.environment:null,Be=$===null?B.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Dt.workingColorSpace,We=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial&&!ce.envMap||ce.isMeshPhongMaterial&&!ce.envMap,Je=U.get(ce.envMap||Ke,We),dt=ce.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,vt=!!de.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Qe=!!de.morphAttributes.position,Et=!!de.morphAttributes.normal,Qt=!!de.morphAttributes.color;let Wt=ar;ce.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Wt=B.toneMapping);const Bt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,ln=Bt!==void 0?Bt.length:0,et=Ye.get(ce),mn=D.state.lights;if(xt===!0&&(Nt===!0||A!==q)){const kt=A===q&&ce.id===Y;ae.setState(ce,A,kt)}let rt=!1,Pi=!1;ce.version===et.__version?et.needsLights&&et.lightsStateVersion!==mn.state.version||le.isBatchedMesh&&et.batching===!1||!le.isBatchedMesh&&et.batching===!0||le.isBatchedMesh&&et.batchingColor===!0&&le._colorsTexture===null||le.isBatchedMesh&&et.batchingColor===!1&&le._colorsTexture!==null||le.isInstancedMesh&&et.instancing===!1||!le.isInstancedMesh&&et.instancing===!0||le.isSkinnedMesh&&et.skinning===!1||!le.isSkinnedMesh&&et.skinning===!0||le.isInstancedMesh&&et.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&et.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&et.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&et.instancingMorph===!1&&le.morphTexture!==null||et.envMap!==Je||ce.fog===!0&&et.fog!==Ge||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==ae.numPlanes||et.numIntersection!==ae.numIntersection)||et.vertexAlphas!==dt||et.vertexTangents!==vt||et.morphTargets!==Qe||et.morphNormals!==Et||et.morphColors!==Qt||et.morphTargetsCount!==ln||et.numLightProbeGrids!==oa(D.state.lightProbeGridArray)?rt=!0:(et.outputColorSpace!==Be||et.toneMapping!==Wt)&&(Pi=!0):(rt=!0,et.__version=ce.version);let gn=et.currentProgram;(rt===!0||Pi===!0)&&(gn=Pi===!0?oc(ce,Z,le,Be,Wt):Hr(ce,Z,le),H&&ce.isNodeMaterial&&H.onUpdateProgram(ce,gn,et));let cr=!1,mi=!1,Li=!1;const Rt=gn.getUniforms(),dn=et.uniforms;if(ze.useProgram(gn.program)&&(cr=!0,mi=!0,Li=!0),ce.id!==Y&&(Y=ce.id,mi=!0),cr||q!==A){ze.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Rt.setValue(K,"projectionMatrix",A.projectionMatrix),Rt.setValue(K,"viewMatrix",A.matrixWorldInverse);const Xt=Rt.map.cameraPosition;Xt!==void 0&&Xt.setValue(K,Zt.setFromMatrixPosition(A.matrixWorld)),gt.logarithmicDepthBuffer&&Rt.setValue(K,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Rt.setValue(K,"isOrthographic",A.isOrthographicCamera===!0),q!==A&&(q=A,mi=!0,Li=!0)}if(et.needsLights&&(mn.state.sunShadowMap.length>0&&Rt.setValue(K,"sunShadowMap",mn.state.sunShadowMap,tt),mn.state.directionalShadowMap.length>0&&Rt.setValue(K,"directionalShadowMap",mn.state.directionalShadowMap,tt),mn.state.spotShadowMap.length>0&&Rt.setValue(K,"spotShadowMap",mn.state.spotShadowMap,tt),mn.state.pointShadowMap.length>0&&Rt.setValue(K,"pointShadowMap",mn.state.pointShadowMap,tt)),le.isSkinnedMesh){Rt.setOptional(K,le,"bindMatrix"),Rt.setOptional(K,le,"bindMatrixInverse");const kt=le.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),Rt.setValue(K,"boneTexture",kt.boneTexture,tt))}le.isBatchedMesh&&(Rt.setOptional(K,le,"batchingTexture"),Rt.setValue(K,"batchingTexture",le._matricesTexture,tt),Rt.setOptional(K,le,"batchingIdTexture"),Rt.setValue(K,"batchingIdTexture",le._indirectTexture,tt),Rt.setOptional(K,le,"batchingColorTexture"),le._colorsTexture!==null&&Rt.setValue(K,"batchingColorTexture",le._colorsTexture,tt));const Pn=de.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&ge.update(le,de,gn),(mi||et.receiveShadow!==le.receiveShadow)&&(et.receiveShadow=le.receiveShadow,Rt.setValue(K,"receiveShadow",le.receiveShadow)),(ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial)&&ce.envMap===null&&Z.environment!==null&&(dn.envMapIntensity.value=Z.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=nb()),mi){if(Rt.setValue(K,"toneMappingExposure",B.toneMappingExposure),et.needsLights&&ho(dn,Li),Ge&&ce.fog===!0&&Ue.refreshFogUniforms(dn,Ge),Ue.refreshMaterialUniforms(dn,ce,Me,De,D.state.transmissionRenderTarget[A.id]),et.needsLights&&et.numLightProbeGrids>0){const kt=N;let Xt=0;for(const Sn of D.state.lightProbeGridArray)Sn.texture!==null&&(kt.textures[Xt]=Sn.texture,kt.min[Xt]=Sn.boundingBox.min,kt.max[Xt]=Sn.boundingBox.max,kt.resolution[Xt]=Sn.resolution,Xt++);for(const Sn in kt)kt[Sn].length=Xt;dn.probesSH.value=kt.textures,dn.probesMin.value=kt.min,dn.probesMax.value=kt.max,dn.probesResolution.value=kt.resolution}Wl.upload(K,Jt(et),dn,tt)}if(ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Wl.upload(K,Jt(et),dn,tt),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Rt.setValue(K,"center",le.center),Rt.setValue(K,"modelViewMatrix",le.modelViewMatrix),Rt.setValue(K,"normalMatrix",le.normalMatrix),Rt.setValue(K,"modelMatrix",le.matrixWorld),ce.uniformsGroups!==void 0){const kt=ce.uniformsGroups;for(let Xt=0,Sn=kt.length;Xt<Sn;Xt++){const ur=kt[Xt];Xe.update(ur,gn),Xe.bind(ur,gn)}}return gn}function ho(A,Z){A.ambientLightColor.needsUpdate=Z,A.lightProbe.needsUpdate=Z,A.sunLights.needsUpdate=Z,A.sunLightShadows.needsUpdate=Z,A.directionalLights.needsUpdate=Z,A.directionalLightShadows.needsUpdate=Z,A.pointLights.needsUpdate=Z,A.pointLightShadows.needsUpdate=Z,A.spotLights.needsUpdate=Z,A.spotLightShadows.needsUpdate=Z,A.rectAreaLights.needsUpdate=Z,A.hemisphereLights.needsUpdate=Z}function ps(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return re},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,Z,de){const ce=Ye.get(A);ce.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),Ye.get(A.texture).__webglTexture=Z,Ye.get(A.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:de,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Z){const de=Ye.get(A);de.__webglFramebuffer=Z,de.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(A,Z=0,de=0){$=A,re=Z,J=de;let ce=null,le=!1,Ge=!1;if(A){const Be=Ye.get(A);if(Be.__useDefaultFramebuffer!==void 0){ze.bindFramebuffer(K.FRAMEBUFFER,Be.__webglFramebuffer),I.copy(A.viewport),ne.copy(A.scissor),Ae=A.scissorTest,ze.viewport(I),ze.scissor(ne),ze.setScissorTest(Ae),Y=-1;return}else if(Be.__webglFramebuffer===void 0)tt.setupRenderTarget(A);else if(Be.__hasExternalTextures)tt.rebindTextures(A,Ye.get(A.texture).__webglTexture,Ye.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const dt=A.depthTexture;if(Be.__boundDepthTexture!==dt){if(dt!==null&&Ye.has(dt)&&(A.width!==dt.image.width||A.height!==dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(A)}}const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ge=!0);const Je=Ye.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Je[Z])?ce=Je[Z][de]:ce=Je[Z],le=!0):A.samples>0&&tt.useMultisampledRTT(A)===!1?ce=Ye.get(A).__webglMultisampledFramebuffer:Array.isArray(Je)?ce=Je[de]:ce=Je,I.copy(A.viewport),ne.copy(A.scissor),Ae=A.scissorTest}else I.copy(He).multiplyScalar(Me).floor(),ne.copy(Re).multiplyScalar(Me).floor(),Ae=Ve;if(de!==0&&(ce=j),ze.bindFramebuffer(K.FRAMEBUFFER,ce)&&ze.drawBuffers(A,ce),ze.viewport(I),ze.scissor(ne),ze.setScissorTest(Ae),le){const Be=Ye.get(A.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Be.__webglTexture,de)}else if(Ge){const Be=Z;for(let We=0;We<A.textures.length;We++){const Je=Ye.get(A.textures[We]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+We,Je.__webglTexture,de,Be)}}else if(A!==null&&de!==0){const Be=Ye.get(A.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Be.__webglTexture,de)}Y=-1};function po(A){const Z=Ye.get(A);return(Z.__readFormat!==A.format||Z.__readType!==A.type)&&(Z.__readFormat=A.format,Z.__readType=A.type,Z.__formatReadable=gt.textureFormatReadable(A.format),Z.__typeReadable=gt.textureTypeReadable(A.type)),Z}this.readRenderTargetPixels=function(A,Z,de,ce,le,Ge,Ke,Be=0){if(!(A&&A.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=Ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ke!==void 0&&(We=We[Ke],Array.isArray(We)&&(We=We[0])),We){ze.bindFramebuffer(K.FRAMEBUFFER,We);try{const Je=A.textures[Be],dt=Je.format,vt=Je.type;A.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Be);const Qe=po(Je);if(Qe.__formatReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qe.__typeReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=A.width-ce&&de>=0&&de<=A.height-le&&K.readPixels(Z,de,ce,le,Te.convert(dt),Te.convert(vt),Ge)}finally{const Je=$!==null?Ye.get($).__webglFramebuffer:null;ze.bindFramebuffer(K.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(A,Z,de,ce,le,Ge,Ke,Be=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=Ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ke!==void 0&&(We=We[Ke],Array.isArray(We)&&(We=We[0])),We)if(Z>=0&&Z<=A.width-ce&&de>=0&&de<=A.height-le){ze.bindFramebuffer(K.FRAMEBUFFER,We);const Je=A.textures[Be],dt=Je.format,vt=Je.type;A.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+Be);const Qe=po(Je);if(Qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Et=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,Et),K.bufferData(K.PIXEL_PACK_BUFFER,Ge.byteLength,K.STREAM_READ),K.readPixels(Z,de,ce,le,Te.convert(dt),Te.convert(vt),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null);const Qt=$!==null?Ye.get($).__webglFramebuffer:null;ze.bindFramebuffer(K.FRAMEBUFFER,Qt);const Wt=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await M_(K,Wt,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,Et),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Ge),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(Et),K.deleteSync(Wt),Ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Z=null,de=0){const ce=Math.pow(2,-de),le=Math.floor(A.image.width*ce),Ge=Math.floor(A.image.height*ce),Ke=Z!==null?Z.x:0,Be=Z!==null?Z.y:0;tt.setTexture2D(A,0),K.copyTexSubImage2D(K.TEXTURE_2D,de,0,0,Ke,Be,le,Ge),ze.unbindTexture()},this.copyTextureToTexture=function(A,Z,de=null,ce=null,le=0,Ge=0){let Ke,Be,We,Je,dt,vt,Qe,Et,Qt;const Wt=A.isCompressedTexture?A.mipmaps[Ge]:A.image;if(de!==null)Ke=de.max.x-de.min.x,Be=de.max.y-de.min.y,We=de.isBox3?de.max.z-de.min.z:1,Je=de.min.x,dt=de.min.y,vt=de.isBox3?de.min.z:0;else{const Rt=Math.pow(2,-le);Ke=Math.floor(Wt.width*Rt),Be=Math.floor(Wt.height*Rt),A.isDataArrayTexture?We=Wt.depth:A.isData3DTexture?We=Math.floor(Wt.depth*Rt):We=1,Je=0,dt=0,vt=0}ce!==null?(Qe=ce.x,Et=ce.y,Qt=ce.z):(Qe=0,Et=0,Qt=0);const Bt=Te.convert(Z.format),ln=Te.convert(Z.type);let et;Z.isData3DTexture?(tt.setTexture3D(Z,0),et=K.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(tt.setTexture2DArray(Z,0),et=K.TEXTURE_2D_ARRAY):(tt.setTexture2D(Z,0),et=K.TEXTURE_2D),ze.activeTexture(K.TEXTURE0),ze.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,Z.flipY),ze.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),ze.pixelStorei(K.UNPACK_ALIGNMENT,Z.unpackAlignment);const mn=ze.getParameter(K.UNPACK_ROW_LENGTH),rt=ze.getParameter(K.UNPACK_IMAGE_HEIGHT),Pi=ze.getParameter(K.UNPACK_SKIP_PIXELS),gn=ze.getParameter(K.UNPACK_SKIP_ROWS),cr=ze.getParameter(K.UNPACK_SKIP_IMAGES);ze.pixelStorei(K.UNPACK_ROW_LENGTH,Wt.width),ze.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Wt.height),ze.pixelStorei(K.UNPACK_SKIP_PIXELS,Je),ze.pixelStorei(K.UNPACK_SKIP_ROWS,dt),ze.pixelStorei(K.UNPACK_SKIP_IMAGES,vt);const mi=A.isDataArrayTexture||A.isData3DTexture,Li=Z.isDataArrayTexture||Z.isData3DTexture;if(A.isDepthTexture){const Rt=Ye.get(A),dn=Ye.get(Z),Pn=Ye.get(Rt.__renderTarget),kt=Ye.get(dn.__renderTarget);ze.bindFramebuffer(K.READ_FRAMEBUFFER,Pn.__webglFramebuffer),ze.bindFramebuffer(K.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Xt=0;Xt<We;Xt++)mi&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Ye.get(A).__webglTexture,le,vt+Xt),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Ye.get(Z).__webglTexture,Ge,Qt+Xt)),K.blitFramebuffer(Je,dt,Je+Ke,dt+Be,Qe,Et,Qe+Ke,Et+Be,K.DEPTH_BUFFER_BIT,K.NEAREST);ze.bindFramebuffer(K.READ_FRAMEBUFFER,null),ze.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(le!==0||A.isRenderTargetTexture||Ye.has(A)){const Rt=Ye.get(A),dn=Ye.get(Z);ze.bindFramebuffer(K.READ_FRAMEBUFFER,W),ze.bindFramebuffer(K.DRAW_FRAMEBUFFER,G);for(let Pn=0;Pn<We;Pn++)mi?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Rt.__webglTexture,le,vt+Pn):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Rt.__webglTexture,le),Li?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,dn.__webglTexture,Ge,Qt+Pn):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,dn.__webglTexture,Ge),le!==0?K.blitFramebuffer(Je,dt,Je+Ke,dt+Be,Qe,Et,Qe+Ke,Et+Be,K.COLOR_BUFFER_BIT,K.NEAREST):Li?K.copyTexSubImage3D(et,Ge,Qe,Et,Qt+Pn,Je,dt,Ke,Be):K.copyTexSubImage2D(et,Ge,Qe,Et,Je,dt,Ke,Be);ze.bindFramebuffer(K.READ_FRAMEBUFFER,null),ze.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else Li?A.isDataTexture||A.isData3DTexture?K.texSubImage3D(et,Ge,Qe,Et,Qt,Ke,Be,We,Bt,ln,Wt.data):Z.isCompressedArrayTexture?K.compressedTexSubImage3D(et,Ge,Qe,Et,Qt,Ke,Be,We,Bt,Wt.data):K.texSubImage3D(et,Ge,Qe,Et,Qt,Ke,Be,We,Bt,ln,Wt):A.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Ge,Qe,Et,Ke,Be,Bt,ln,Wt.data):A.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Ge,Qe,Et,Wt.width,Wt.height,Bt,Wt.data):K.texSubImage2D(K.TEXTURE_2D,Ge,Qe,Et,Ke,Be,Bt,ln,Wt);ze.pixelStorei(K.UNPACK_ROW_LENGTH,mn),ze.pixelStorei(K.UNPACK_IMAGE_HEIGHT,rt),ze.pixelStorei(K.UNPACK_SKIP_PIXELS,Pi),ze.pixelStorei(K.UNPACK_SKIP_ROWS,gn),ze.pixelStorei(K.UNPACK_SKIP_IMAGES,cr),Ge===0&&Z.generateMipmaps===!0&&Z.mipmapsAutoUpdate===!0&&K.generateMipmap(et),ze.unbindTexture()},this.initRenderTarget=function(A){Ye.get(A).__webglFramebuffer===void 0&&tt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?tt.setTextureCube(A,0):A.isData3DTexture?tt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?tt.setTexture2DArray(A,0):tt.setTexture2D(A,0),ze.unbindTexture()},this.resetState=function(){re=0,J=0,$=null,ze.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Dt._getUnpackColorSpace()}}function rb(s,e){const t=document.createElement("canvas");t.width=2048,t.height=1024;const r=t.getContext("2d");let o;e?s==="celestial-cyan"?o=["#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#f0f9ff","#dbeafe"]:s==="supernova-sunset"?o=["#fff1f2","#fecdd3","#fda4af","#fb7185","#e11d48","#9f1239","#fff7ed","#fed7aa"]:s==="nocturne-silver"?o=["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#71717a","#ffffff","#e4e4e7"]:o=["#fffbeb","#fef3c7","#fde68a","#fcd34d","#f59e0b","#d97706","#fff7ed","#ffedd5"]:s==="celestial-cyan"?o=["#020b14","#041d33","#083358","#0e4a7d","#0284c7","#38bdf8","#075985","#0c4a6e","#06b6d4"]:s==="supernova-sunset"?o=["#12040d","#2b061c","#4a0a2f","#771146","#be123c","#f43f5e","#ea580c","#fb923c","#450a22"]:s==="nocturne-silver"?o=["#060609","#111119","#1e1e2d","#2f2f45","#4d4d6e","#7b7b9e","#a6a6c7","#252538","#d4d4e8"]:o=["#080415","#150933","#270e59","#3e1785","#5b21b6","#7c3aed","#a855f7","#c084fc","#2e1065","#d8b4fe"];const l=r.createLinearGradient(0,0,0,t.height);o.forEach((_,M)=>{l.addColorStop(M/(o.length-1),_)}),r.fillStyle=l,r.fillRect(0,0,t.width,t.height);const u=72;for(let _=0;_<u;_++){const b=_/u*t.height,C=t.height/u*(1.2+Math.sin(_*.7)*.5),y=o[_*3%o.length];r.fillStyle=y,r.globalAlpha=.25+Math.sin(_*.9)*.2,r.beginPath(),r.moveTo(0,b);const S=32;for(let R=0;R<=S;R++){const F=R/S*t.width,N=Math.sin(R*.8+_*1.5)*7+Math.cos(R*1.6+_*2.1)*4;r.lineTo(F,b+N)}r.lineTo(t.width,b+C),r.lineTo(0,b+C),r.closePath(),r.fill()}r.globalAlpha=e?.25:.4,r.fillStyle="#ffffff";for(let _=0;_<48;_++){const M=Math.random()*t.width,b=Math.random()*t.height,C=60+Math.random()*180,y=1.5+Math.random()*3.5;r.beginPath(),r.ellipse(M,b,C,y,Math.sin(b*.05)*.15,0,Math.PI*2),r.fill()}const p=t.width*.62,d=t.height*.58,h=85,x=r.createRadialGradient(p,d,5,p,d,h);e?(x.addColorStop(0,"#ffffff"),x.addColorStop(.4,o[o.length-2]),x.addColorStop(.8,o[o.length-1]),x.addColorStop(1,"rgba(255,255,255,0)")):(x.addColorStop(0,"#ffffff"),x.addColorStop(.3,o[o.length-3]||"#c084fc"),x.addColorStop(.7,o[o.length-1]||"#7c3aed"),x.addColorStop(1,"rgba(0,0,0,0)")),r.globalAlpha=.85,r.fillStyle=x,r.beginPath(),r.ellipse(p,d,h*1.6,h*.8,-.15,0,Math.PI*2),r.fill(),r.strokeStyle=e?"rgba(200, 150, 100, 0.45)":"rgba(255, 255, 255, 0.60)",r.lineWidth=2.5;for(let _=0;_<3;_++){r.beginPath();for(let M=0;M<Math.PI*2;M+=.2){const b=M/(Math.PI*2)*h*.7,C=p+Math.cos(M+_*2.1)*b*1.5,y=d+Math.sin(M+_*2.1)*b*.7;M===0?r.moveTo(C,y):r.lineTo(C,y)}r.stroke()}const v=new Ef(t);return v.wrapS=eo,v.wrapT=oi,v}function sb(s,e){const t=document.createElement("canvas");t.width=1024,t.height=64;const r=t.getContext("2d");r.clearRect(0,0,t.width,t.height);let o,l;e?(o="rgba(217, 119, 6, 0.45)",l="rgba(245, 158, 11, 0.85)"):s==="celestial-cyan"?(o="rgba(56, 189, 248, 0.45)",l="rgba(186, 230, 253, 0.90)"):s==="supernova-sunset"?(o="rgba(251, 146, 60, 0.45)",l="rgba(254, 205, 211, 0.90)"):s==="nocturne-silver"?(o="rgba(212, 212, 216, 0.45)",l="rgba(255, 255, 255, 0.90)"):(o="rgba(192, 132, 252, 0.50)",l="rgba(243, 232, 255, 0.92)");for(let p=0;p<t.width;p++){const d=p/t.width;let h=0;d<.22?h=.12+Math.sin(d*60)*.08:d>=.22&&d<.65?h=.75+Math.sin(d*120)*.18+Math.cos(d*240)*.06:d>=.65&&d<.72?h=.02:d>=.72&&d<.95?d>.85&&d<.87?h=.05:h=.55+Math.sin(d*100)*.15:h=.2+Math.sin(d*200)*.15,r.fillStyle=h>.6?l:o,r.globalAlpha=Math.max(0,Math.min(1,h)),r.fillRect(p,0,1,t.height)}const u=new Ef(t);return u.wrapS=oi,u.wrapT=oi,u}function ab(s){const e=document.createElement("canvas");e.width=2048,e.height=1024;const t=e.getContext("2d");t.fillStyle=s?"#d6d3d1":"#888899",t.fillRect(0,0,e.width,e.height),t.fillStyle=s?"#a8a29e":"#474755",[{x:.35,y:.4,rx:240,ry:160},{x:.55,y:.35,rx:280,ry:190},{x:.7,y:.45,rx:200,ry:140},{x:.4,y:.65,rx:220,ry:150},{x:.6,y:.6,rx:260,ry:180}].forEach(u=>{t.globalAlpha=.65,t.beginPath(),t.ellipse(u.x*e.width,u.y*e.height,u.rx,u.ry,.2,0,Math.PI*2),t.fill()});const o=320;for(let u=0;u<o;u++){const p=Math.random()*e.width,d=Math.random()*e.height,h=4+Math.random()*32;if(t.globalAlpha=.55,t.fillStyle=s?"#57534e":"#22222a",t.beginPath(),t.arc(p,d,h,0,Math.PI*2),t.fill(),t.globalAlpha=.7,t.strokeStyle=s?"#ffffff":"#e2e8f0",t.lineWidth=Math.max(1,h*.2),t.beginPath(),t.arc(p,d,h,Math.PI*.75,Math.PI*1.75),t.stroke(),h>24){t.globalAlpha=.25,t.strokeStyle=s?"#ffffff":"#cbd5e1",t.lineWidth=1;for(let x=0;x<8;x++){const v=x/8*Math.PI*2,_=h*(3+Math.random()*5);t.beginPath(),t.moveTo(p+Math.cos(v)*h,d+Math.sin(v)*h),t.lineTo(p+Math.cos(v)*_,d+Math.sin(v)*_),t.stroke()}}}const l=new Ef(e);return l.wrapS=eo,l.wrapT=oi,l}const ob=()=>{const s=be.useRef(null),{wallpaperSettings:e,appTheme:t}=Br(),r=e.celestialBody||"ringed-planet",o=e.palette||"cosmic-royal",l=t==="light";return be.useEffect(()=>{if(!s.current)return;if(r==="none"){s.current.innerHTML="";return}const u=s.current;u.innerHTML="";const p=u.clientWidth||window.innerWidth,d=u.clientHeight||window.innerHeight,h=p<768,x=new G_,v=new Ti(45,p/d,.1,100);v.position.set(0,0,10);const _=new ib({alpha:!0,antialias:!0,powerPreference:"high-performance"});_.setSize(p,d),_.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),_.outputColorSpace=si,u.appendChild(_.domElement);const M=new oy(l?16775149:16777215,l?2.8:2.5);x.add(M);const b=new ly(l?14870768:o==="celestial-cyan"?662832:1577516,l?.7:.4);x.add(b);const C=new Xa;x.add(C);let y=3.4,S=1.8,R=.65;r==="ringed-planet"?(y=h?1.2:3.4,S=h?2.3:1.8,R=h?.48:.68,M.position.set(-8,5,4)):r==="crescent-moon"?(y=h?-1.2:-3.3,S=h?2.5:2,R=h?.42:.6,M.position.set(-8,2,-2)):r==="eclipse-corona"&&(y=0,S=h?2.5:2.4,R=h?.45:.64,M.position.set(0,0,4)),C.position.set(y,S,0),C.scale.set(R,R,R);let F=0,N=0,z=0,D=0;const w=re=>{const J=re.clientX/window.innerWidth*2-1;F=(-(re.clientY/window.innerHeight)*2+1)*.18,N=J*.25};window.addEventListener("mousemove",w,{passive:!0});let P=null,ee=null,B=null,X=null;if(r==="ringed-planet"){const re=new Dr(1,64,64),J=rb(o,l),$=new pd({map:J,roughness:.55,metalness:.08});P=new Wn(re,$),C.add(P);const Y=new Dr(1.04,48,48),q=new Ri({vertexShader:`
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
        `,uniforms:{glowColor:{value:new At(l?o==="celestial-cyan"?165063:14251782:o==="celestial-cyan"?3718648:o==="supernova-sunset"?16007006:11032055)}},transparent:!0,blending:Ka,side:kn}),I=new Wn(Y,q);C.add(I);const ne=new Tf(1.35,2.85,128),Ae=ne.attributes.position,se=ne.attributes.uv;for(let ke=0;ke<Ae.count;ke++){const lt=Ae.getX(ke),He=Ae.getY(ke),Ve=(Math.sqrt(lt*lt+He*He)-1.35)/(2.85-1.35);se.setXY(ke,Ve,.5)}se.needsUpdate=!0;const V=sb(o,l),we=new pd({map:V,side:Bi,transparent:!0,opacity:.92,roughness:.45,metalness:.05});ee=new Wn(ne,we),ee.rotation.x=Math.PI*.48,ee.rotation.y=-.15,C.add(ee);const De=new Dr(.11,24,24),Me=new pd({color:l?14078929:13095678,roughness:.8});B=new Wn(De,Me),C.add(B),C.rotation.z=-.42}else if(r==="crescent-moon"){const re=new Dr(1,64,64),J=ab(l),$=new Ri({vertexShader:`
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
        `,uniforms:{moonTexture:{value:J},sunDir:{value:new pe(-1.6,.35,-.65).normalize()},sunlitColor:{value:new At(l?16776171:16710083)},earthshineColor:{value:new At(l?9741240:6583435)},earthshineAlpha:{value:l?.07:.05}},transparent:!0});P=new Wn(re,$),C.add(P);const Y=new Dr(1.04,48,48),q=new Ri({vertexShader:`
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
        `,uniforms:{sunDir:{value:new pe(-1.6,.35,-.65).normalize()},glowColor:{value:new At(l?16096779:16707722)}},transparent:!0,blending:Ka,side:kn}),I=new Wn(Y,q);C.add(I),C.rotation.y=.45,C.rotation.z=-.22}else if(r==="eclipse-corona"){const re=new lo(3.8,3.8),J=new Ri({vertexShader:`
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
        `,uniforms:{uTime:{value:0},uColor:{value:new At(l?14251782:16638023)}},transparent:!0,blending:Ka,depthWrite:!1});X=new Wn(re,J),C.add(X);const $=new Dr(.96,48,48),Y=new z0({color:l?1579035:328970});P=new Wn($,Y),C.add(P)}let H;const j=performance.now(),W=()=>{H=requestAnimationFrame(W);const re=(performance.now()-j)*.001;if(z+=(F-z)*.06,D+=(N-D)*.06,C.position.x=y+D*.8,C.position.y=S+z*.8,P&&(P.rotation.y+=.0012),B){const $=re*.35;B.position.x=Math.cos($)*4.8,B.position.z=Math.sin($)*4.8*.4,B.position.y=Math.sin($*1.5)*.6}X&&X.material.uniforms&&(X.material.uniforms.uTime.value=re),_.render(x,v)};W();const G=()=>{if(!u||!_||!v)return;const re=u.clientWidth||window.innerWidth,J=u.clientHeight||window.innerHeight;v.aspect=re/J,v.updateProjectionMatrix(),_.setSize(re,J),_.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const $=re<768;r==="ringed-planet"?(y=$?1.2:3.4,S=$?2.3:1.8,R=$?.48:.68):r==="crescent-moon"?(y=$?-1.2:-3.3,S=$?2.5:2,R=$?.42:.6):r==="eclipse-corona"&&(y=0,S=$?2.5:2.4,R=$?.45:.64),C.position.set(y,S,0),C.scale.set(R,R,R)};return window.addEventListener("resize",G,{passive:!0}),()=>{cancelAnimationFrame(H),window.removeEventListener("mousemove",w),window.removeEventListener("resize",G),_.dispose(),u&&_.domElement&&u.contains(_.domElement)&&u.removeChild(_.domElement)}},[r,o,l]),m.jsx("div",{ref:s,className:"fixed inset-0 pointer-events-none z-[1] select-none overflow-hidden","aria-hidden":"true"})};/**
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
 */const ss={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function vd(s){return s!=null}function fb(s,e={}){var _,M;const t=e.attributeNames??{},r=b=>t[b]??b,o=s.size??s.width??ss.width,l=s.size??s.height??ss.height,u=((_=s.aliases)==null?void 0:_.filter(b=>typeof b=="string"&&b.trim()!=="").map(b=>`lucide-${b}`))??[],p=[...s.name?[`lucide-${s.name}`]:[],...u],d=((M=e.className)==null?void 0:M.split(" ").filter(Boolean))??[],h=e.includeDefaultClasses===!1?lf(...d):lf("lucide",...p,...d),x=e.absoluteStrokeWidth?Number(e.strokeWidth??ss["stroke-width"])*Number(s.size??s.width??ss.width)/Number(e.size??e.width??ss.width):e.strokeWidth??ss["stroke-width"];return["svg",{...Object.entries(ss).reduce((b,[C,y])=>(b[r(C)]=y,b),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&vd(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&vd(e.width)&&{[r("width")]:e.width},..."height"in e&&vd(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:x,...h&&{[r("class")]:h},[r("viewBox")]:`0 0 ${o} ${l}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},s.node.map(b=>{const[C,y,S]=b,R=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...y}:y;return S?[C,R,S]:[C,R]})]}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function hb(s,e={}){return fb(s,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},mb=be.createContext({}),gb=()=>be.useContext(mb),xb=be.forwardRef(({color:s,size:e,width:t,height:r,strokeWidth:o,absoluteStrokeWidth:l,nonScalingStroke:u,className:p="",children:d,iconNode:h=[],icon:x={node:h,aliases:[],size:24},...v},_)=>{const{size:M=24,strokeWidth:b=2,absoluteStrokeWidth:C=!1,nonScalingStroke:y=!1,color:S="currentColor",className:R=""}=gb()??{},F=!!d||pb(v),[N,z,D=[]]=hb(x,{color:s??S,width:t??e??M,height:r??e??M,strokeWidth:o??b,absoluteStrokeWidth:l??C,nonScalingStroke:u??y,className:lf(R,p),hasA11yProp:F,attributes:v});return be.createElement(N,{ref:_,...z},[...D.map(([w,P])=>be.createElement(w,P)),...Array.isArray(d)?d:[d]])});/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function yt(s,e=[],t=[]){const r=typeof s=="string"?cb(s,e,t):s,o=be.forwardRef(({className:l,...u},p)=>be.createElement(xb,{ref:p,icon:r,className:l,...u}));return r.name&&(o.displayName=db(r.name)),o}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg={name:"calendar-clock",size:24,node:[["path",{d:"M16 14v2.2l1.6 1",key:"fo4ql5"}],["path",{d:"M16 2v3",key:"otl347"}],["path",{d:"M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338",key:"7hb8p4"}],["path",{d:"M3 9h5.859",key:"numkqi"}],["path",{d:"M8 2v3",key:"1ioesn"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]};tg.node;const t0=yt(tg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};ng.node;const cf=yt(ng);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};ig.node;const rg=yt(ig);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};sg.node;const Cf=yt(sg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag={name:"droplet",size:24,node:[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]};ag.node;const vb=yt(ag);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og={name:"droplets",size:24,node:[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]};og.node;const _b=yt(og);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg={name:"external-link",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]};lg.node;const yb=yt(lg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg={name:"eye-off",size:24,node:[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]};cg.node;const Sb=yt(cg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug={name:"face-slightly-smiling",size:24,node:[["path",{d:"M15 10V9",key:"4dkmfx"}],["path",{d:"M16.472 15a6 6 0 01-8.943 0",key:"7qomzy"}],["path",{d:"M9 10V9",key:"1lazqi"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["smile"]};ug.node;const Mb=yt(ug);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg={name:"flame",size:24,node:[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]]};dg.node;const wb=yt(dg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg={name:"headphones",size:24,node:[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]};fg.node;const Ql=yt(fg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};hg.node;const bb=yt(hg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg={name:"list-music",size:24,node:[["path",{d:"M16 5H3",key:"m91uny"}],["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M11 19H3",key:"zflm78"}],["path",{d:"M21 16V5",key:"yxg4q8"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]};pg.node;const n0=yt(pg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg={name:"maximize-2",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]};mg.node;const i0=yt(mg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg={name:"minimize-2",size:24,node:[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]]};gg.node;const xg=yt(gg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};vg.node;const ec=yt(vg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g={name:"palette",size:24,node:[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]};_g.node;const Eb=yt(_g);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};yg.node;const os=yt(yg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};Sg.node;const ls=yt(Sg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};Mg.node;const jl=yt(Mg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg={name:"quote",size:24,node:[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]};wg.node;const Tb=yt(wg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg={name:"radio",size:24,node:[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};bg.node;const r0=yt(bg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};Eg.node;const Rf=yt(Eg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg={name:"skip-back",size:24,node:[["path",{d:"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",key:"15892j"}],["path",{d:"M3 20V4",key:"1ptbpl"}]]};Tg.node;const tc=yt(Tg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag={name:"skip-forward",size:24,node:[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]]};Ag.node;const nc=yt(Ag);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};Cg.node;const uf=yt(Cg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Rg.node;const Fr=yt(Rg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng={name:"square-check-big",size:24,node:[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-square"]};Ng.node;const Ab=yt(Ng);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};Pg.node;const Cb=yt(Pg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg={name:"sunrise",size:24,node:[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]};Lg.node;const Rb=yt(Lg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg={name:"target",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};Dg.node;const Nb=yt(Dg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};Ig.node;const df=yt(Ig);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug={name:"tv",size:24,node:[["path",{d:"m17 2-5 5-5-5",key:"16satq"}],["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",key:"1e6viu"}]]};Ug.node;const Pb=yt(Ug);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg={name:"type",size:24,node:[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]]};zg.node;const Lb=yt(zg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg={name:"user",size:24,node:[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]};Fg.node;const kg=yt(Fg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};Og.node;const ic=yt(Og);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};Bg.node;const Nf=yt(Bg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg={name:"waves-horizontal",size:24,node:[["path",{d:"M2 12q2.5 2 5 0t5 0 5 0 5 0",key:"8ddzzs"}],["path",{d:"M2 19q2.5 2 5 0t5 0 5 0 5 0",key:"1wj4st"}],["path",{d:"M2 5q2.5 2 5 0t5 0 5 0 5 0",key:"69x50u"}]],aliases:["waves"]};Gg.node;const s0=yt(Gg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Hg.node;const uo=yt(Hg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};Vg.node;const Db=yt(Vg),Ib=()=>{const{activeYouTubeItem:s,isYouTubePlaying:e,youtubeVolume:t,isYouTubeMuted:r,setYouTubeIsPlaying:o,setYouTubePlayerReady:l,showYouTubePreview:u,setShowYouTubePreview:p,toggleYouTubePlay:d,nextYouTubeTrack:h,prevYouTubeTrack:x,toggleYouTubeMute:v,setYouTubeVolume:_,audioSource:M}=Br(),b=be.useRef(null),[C,y]=be.useState(null),S=be.useRef((s==null?void 0:s.id)||null),R=be.useRef(null),[F,N]=be.useState(!1),z=be.useRef(!1),D=be.useCallback((j,W="")=>{try{b.current&&b.current.contentWindow&&b.current.contentWindow.postMessage(JSON.stringify({event:"command",func:j,args:W}),"*")}catch(G){console.warn("[YouTube Audio] Command error:",G)}},[]),w=be.useCallback((j,W)=>{const G=W?"1":"0",re=typeof window<"u"&&window.location.origin?`&origin=${encodeURIComponent(window.location.origin)}`:"";if(!j)return`https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=${G}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${re}`;if(j.type==="playlist"&&j.playlistId)return`https://www.youtube.com/embed/videoseries?list=${encodeURIComponent(j.playlistId)}&autoplay=${G}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${re}`;if(j.type==="video_in_playlist"&&j.videoId&&j.playlistId)return`https://www.youtube.com/embed/${encodeURIComponent(j.videoId)}?list=${encodeURIComponent(j.playlistId)}&autoplay=${G}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${re}`;const J=j.videoId||"jfKfPfyJRdk";return`https://www.youtube.com/embed/${encodeURIComponent(J)}?autoplay=${G}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${re}`},[]),[P,ee]=be.useState(()=>w(s,!1)),B=be.useCallback(()=>{D("unMute",""),D("setVolume",[t||75]),r&&v()},[D,t,r,v]);be.useEffect(()=>(window.__forMeSendYouTubeCommand=D,window.__forMeForceUnmute=B,l(!0),()=>{delete window.__forMeSendYouTubeCommand,delete window.__forMeForceUnmute}),[D,B,l]),be.useEffect(()=>{if(!s||S.current===s.id)return;S.current=s.id,y(null);const j=w(s,e);R.current=j,ee(j),Ei.updateMetadata({title:s.title,artist:s.channel||"FOR ME Sanctuary",album:s.type==="playlist"?"YouTube Playlist":"YouTube Stream",artworkUrl:s.thumbnailUrl,onPlay:()=>{o(!0),D("playVideo",""),B()},onPause:()=>{o(!1),D("pauseVideo","")},onNext:s.type==="playlist"||s.type==="video_in_playlist"?h:void 0,onPrev:s.type==="playlist"||s.type==="video_in_playlist"?x:void 0})},[s,w,e,h,x,D,o,B]),be.useEffect(()=>{if(z.current){z.current=!1;return}e?(D("playVideo",""),setTimeout(()=>{D("unMute",""),D("setVolume",[t||75])},50),Ei.setPlaybackState("playing")):(D("pauseVideo",""),Ei.setPlaybackState("paused"))},[e,D,t]),be.useEffect(()=>{D("setVolume",[t||75])},[t,D]),be.useEffect(()=>{r?D("mute",""):(D("unMute",""),D("setVolume",[t||75]))},[r,t,D]),be.useEffect(()=>{const j=W=>{if(!(!W.data||typeof W.data!="string"))try{const G=JSON.parse(W.data);G.event==="onStateChange"?G.info===1?(z.current=!0,o(!0),y(null),Ei.setPlaybackState("playing"),r||(D("unMute",""),D("setVolume",[t||75]))):G.info===2?document.hidden||(z.current=!0,o(!1),Ei.setPlaybackState("paused")):G.info===0&&((s==null?void 0:s.type)==="playlist"||(s==null?void 0:s.type)==="video_in_playlist"?Ei.setPlaybackState("playing"):(z.current=!0,o(!1),Ei.setPlaybackState("none"))):G.event==="infoDelivery"&&G.info?typeof G.info.muted=="boolean"&&G.info.muted&&!r&&e&&(D("unMute",""),D("setVolume",[t||75])):G.event==="onError"&&(console.warn("[YouTube Audio Player Error]",G.info),(G.info===101||G.info===150)&&y("The owner of this video restricts playback outside of YouTube."))}catch{}};return window.addEventListener("message",j),()=>window.removeEventListener("message",j)},[o,r,t,D,s,e]);const X=M==="youtube"&&e||u,H=(s==null?void 0:s.type)==="playlist"||(s==null?void 0:s.type)==="video_in_playlist";return m.jsxs(m.Fragment,{children:[m.jsxs("div",{role:"region","aria-label":"YouTube Audio Player",style:{position:"fixed",bottom:!X||F?"0px":u?"84px":"16px",right:!X||F?"0px":u?"24px":"16px",width:!X||F?"2px":u?"380px":"250px",height:!X||F?"2px":u?"285px":"150px",zIndex:!X||F?-1:u?50:30,opacity:!X||F?.01:1,pointerEvents:!X||F?"none":"auto",borderRadius:"1.25rem",overflow:"hidden",boxShadow:u?"0 30px 70px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.18)":"0 15px 35px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.12)",transition:"all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"},className:"backdrop-blur-2xl bg-[#090b14]/95 flex flex-col border border-white/15",children:[m.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-black/60 shrink-0 select-none",children:[m.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[m.jsx("span",{className:`w-2 h-2 rounded-full shrink-0 ${e?"bg-red-500 animate-pulse":"bg-zinc-500"}`}),m.jsx("span",{className:"text-white text-xs font-display font-semibold truncate max-w-[110px] sm:max-w-[160px]",title:s==null?void 0:s.title,children:(s==null?void 0:s.title)||"YouTube Audio"})]}),m.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[m.jsxs("button",{type:"button",onClick:B,className:`px-1.5 py-0.5 rounded-md text-[10px] font-sans font-bold flex items-center gap-1 transition-colors cursor-pointer ${r?"bg-amber-500 text-black hover:bg-amber-400 animate-pulse":"bg-emerald-600/80 text-white hover:bg-emerald-500"}`,title:"Force Unmute & Restore Volume",children:[r?m.jsx(Nf,{className:"w-3 h-3"}):m.jsx(ic,{className:"w-3 h-3"}),m.jsx("span",{className:"hidden sm:inline",children:r?"UNMUTE":`${t}%`})]}),m.jsx("button",{type:"button",onClick:()=>N(!0),className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer",title:"Audio Only (Hide Video Frame)",children:m.jsx(Ql,{className:"w-3 h-3"})}),m.jsx("button",{type:"button",onClick:()=>p(!u),className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer",title:u?"Collapse to Mini Player":"Expand Video Preview",children:u?m.jsx(xg,{className:"w-3 h-3"}):m.jsx(i0,{className:"w-3 h-3"})}),m.jsx("button",{type:"button",onClick:()=>{o(!1),p(!1),D("pauseVideo","")},className:"p-1 rounded-md bg-white/10 hover:bg-red-500/80 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer",title:"Stop playback & close",children:m.jsx(uo,{className:"w-3 h-3"})})]})]}),C&&m.jsxs("div",{className:"absolute inset-0 z-30 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center space-y-2 pointer-events-auto",children:[m.jsx(rg,{className:"w-6 h-6 text-amber-400"}),m.jsx("p",{className:"text-xs text-white/95 font-sans leading-relaxed max-w-xs",children:C}),(s==null?void 0:s.url)&&m.jsxs("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold transition-colors shadow-md",children:[m.jsx(yb,{className:"w-3 h-3"}),m.jsx("span",{children:"Open in YouTube"})]})]}),m.jsx("div",{className:"flex-1 w-full bg-black relative min-h-0",children:m.jsx("iframe",{ref:b,id:"global-youtube-audio-iframe",title:"FOR ME Sanctuary Audio Stream",src:P,className:"w-full h-full border-0 absolute inset-0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),m.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 border-t border-white/10 bg-black/60 shrink-0 text-xs",children:[u?m.jsxs("div",{className:"flex items-center gap-1",children:[m.jsx("span",{className:"text-[10px] font-sans text-zinc-400 mr-1",children:"Vol:"}),[25,50,75,100].map(j=>m.jsxs("button",{type:"button",onClick:()=>{_(j),D("setVolume",[j]),B()},className:`px-1.5 py-0.5 rounded text-[10px] font-mono transition-colors cursor-pointer ${t===j?"bg-red-600 text-white font-bold":"bg-white/10 text-zinc-300 hover:bg-white/20"}`,children:[j,"%"]},j))]}):m.jsxs("div",{className:"flex items-center gap-1",children:[H&&m.jsxs(m.Fragment,{children:[m.jsx("button",{type:"button",onClick:x,className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer",title:"Previous track in playlist",children:m.jsx(tc,{className:"w-3 h-3"})}),m.jsx("button",{type:"button",onClick:h,className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer",title:"Next track in playlist",children:m.jsx(nc,{className:"w-3 h-3"})})]}),m.jsx("span",{className:"text-[10px] font-mono text-zinc-400",children:r?"Muted":`${t}%`})]}),m.jsxs("div",{className:"flex items-center gap-1.5",children:[u&&H&&m.jsxs(m.Fragment,{children:[m.jsx("button",{type:"button",onClick:x,className:"p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white transition-colors cursor-pointer",title:"Previous track",children:m.jsx(tc,{className:"w-3.5 h-3.5"})}),m.jsx("button",{type:"button",onClick:h,className:"p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white transition-colors cursor-pointer",title:"Next track",children:m.jsx(nc,{className:"w-3.5 h-3.5"})})]}),m.jsx("button",{type:"button",onClick:()=>{d(),B()},className:`px-3 py-1 rounded-lg text-white text-[11px] font-display font-semibold flex items-center gap-1 shadow-sm transition-all cursor-pointer ${e?"bg-red-600 hover:bg-red-500":"bg-emerald-600 hover:bg-emerald-500"}`,children:e?m.jsxs(m.Fragment,{children:[m.jsx(os,{className:"w-3 h-3 fill-current"}),m.jsx("span",{children:"Pause"})]}):m.jsxs(m.Fragment,{children:[m.jsx(ls,{className:"w-3 h-3 fill-current ml-0.5"}),m.jsx("span",{children:"Play"})]})})]})]})]}),X&&F&&m.jsxs("button",{type:"button",onClick:()=>N(!1),className:"fixed bottom-4 right-4 z-40 px-3 py-1.5 rounded-xl cosmic-dock text-xs flex items-center gap-2 border border-white/15 text-white hover:border-violet-400/50 shadow-xl cursor-pointer transition-all animate-fadeIn",title:"Restore Video Frame",children:[m.jsx("span",{className:"w-2 h-2 rounded-full bg-red-500 animate-pulse"}),m.jsx("span",{className:"font-display text-[11px] font-medium",children:"Show Video"}),m.jsx(i0,{className:"w-3 h-3 text-zinc-400"})]})]})},Ub=[{id:"cosmic-royal",name:"Cosmic Royal",subtitle:"Midnight Obsidian to Luminous Lavender",previewColors:["#060814","#2d1252","#7c3aed","#ede9fe"]},{id:"celestial-cyan",name:"Celestial Cyan",subtitle:"Abyss Sapphire to Electric Mint",previewColors:["#040a14","#0e3f57","#0284c7","#ecfeff"]},{id:"supernova-sunset",name:"Supernova Sunset",subtitle:"Velvet Crimson to Radiant Amber Gold",previewColors:["#12050e","#6e133e","#e11d48","#fffbeb"]},{id:"nocturne-silver",name:"Nocturne Silver",subtitle:"Obsidian Slate to Platinum White",previewColors:["#050508","#22222f","#707090","#ffffff"]}],zb=[{id:"crescent-moon",name:"Crescent Moon",desc:"Glowing lunar limb & earthshine"},{id:"ringed-planet",name:"Ringed Planet",desc:"Gas giant with illuminated rings"},{id:"eclipse-corona",name:"Solar Eclipse",desc:"Radiant coronal flare rays"},{id:"none",name:"Deep Void Only",desc:"Empty celestial expanse"}],Fb=[{id:"dunes",name:"Silky Dunes",desc:"Smooth rolling desert sand ridges"},{id:"aurora",name:"Aurora Ribbons",desc:"Shimmering translucent silk curtains"},{id:"mountains",name:"Alpine Peaks",desc:"Angular faceted mountain horizons"},{id:"ocean",name:"Ocean Swells",desc:"Deep rolling tidal rollers & crests"}],kb=[{id:"airy",label:"Airy (3)",desc:"Spacious sky"},{id:"deep",label:"Deep (5)",desc:"Standard balance"},{id:"dense",label:"Dense (7)",desc:"Rich stratified"}],Ob=[{id:"tabular",label:"Tabular Modern",preview:"12:00"},{id:"serif",label:"Editorial Luxury",preview:"12:00"},{id:"mono",label:"Tech Monospace",preview:"12:00"},{id:"minimal",label:"Minimalist Light",preview:"12:00"}],Bb=[{id:"compact",label:"Compact"},{id:"standard",label:"Standard"},{id:"heroic",label:"Heroic Grand"}],Gb=({isOpen:s,onClose:e})=>{const{wallpaperSettings:t,updateWallpaperSettings:r,appTheme:o}=Br(),l=o==="light",[u,p]=be.useState("celestial");if(!s)return null;const d=()=>{r({palette:"cosmic-royal",speed:"balanced",amplitude:"majestic",waveGeometry:"dunes",waveLayerDensity:"deep",celestialBody:"crescent-moon",showNebulaDust:!0,showConstellations:!0,showComet:!0,shootingStarMode:"occasional",showStars:!0,showCrossStars:!0,showOrbitalTrack:!0,showMeridian:!0,clockFontStyle:"tabular",clockSize:"standard",clockFormat:"12h",showSeconds:!0,showDate:!0,showGreeting:!0,clockHalo:"pulsar"})};return m.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-fadeIn select-none ${l?"bg-black/35":"bg-black/80"}`,children:[m.jsx("div",{className:"fixed inset-0",onClick:e,"aria-hidden":"true"}),m.jsxs("div",{role:"dialog","aria-modal":"true","aria-labelledby":"wallpaper-studio-title",className:`relative w-full max-w-xl max-h-[88vh] overflow-hidden rounded-3xl border shadow-2xl flex flex-col z-10 ${l?"bg-white/95 border-zinc-200 text-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)]":"cosmic-card border-white/[0.14] text-white shadow-2xl"}`,children:[m.jsxs("div",{className:`flex items-center justify-between p-5 pb-3 border-b shrink-0 ${l?"border-zinc-200":"border-white/[0.08]"}`,children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("div",{className:`w-8 h-8 rounded-xl border flex items-center justify-center ${l?"bg-violet-50 border-violet-200 text-violet-700":"bg-violet-600/30 border-violet-400/40 text-violet-300"}`,children:m.jsx(uf,{className:"w-4 h-4"})}),m.jsxs("div",{children:[m.jsx("h2",{id:"wallpaper-studio-title",className:`text-sm font-display uppercase tracking-widest font-bold ${l?"text-zinc-900":"text-white"}`,children:"Wallpaper Studio"}),m.jsx("p",{className:`text-[11px] font-sans ${l?"text-zinc-500":"text-zinc-400"}`,children:"Customize celestial objects, wave geometries & clock typography"})]})]}),m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("button",{type:"button",onClick:d,"aria-label":"Reset to default settings",title:"Reset to Defaults",className:`p-2 rounded-xl transition-colors cursor-pointer ${l?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white"}`,children:m.jsx(Rf,{className:"w-3.5 h-3.5"})}),m.jsx("button",{type:"button",onClick:e,"aria-label":"Close Wallpaper Studio",className:`p-2 rounded-xl transition-colors cursor-pointer ${l?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white"}`,children:m.jsx(uo,{className:"w-4 h-4"})})]})]}),m.jsxs("div",{className:`flex items-center gap-1 px-5 pt-3 border-b shrink-0 ${l?"border-zinc-200 bg-zinc-50/80":"border-white/[0.06] bg-black/20"}`,children:[m.jsxs("button",{type:"button",onClick:()=>p("celestial"),className:`flex items-center gap-1.5 px-3 py-2 text-xs font-display font-medium border-b-2 transition-all cursor-pointer ${u==="celestial"?l?"border-violet-600 text-zinc-950 font-bold":"border-violet-400 text-white":l?"border-transparent text-zinc-500 hover:text-zinc-900":"border-transparent text-zinc-400 hover:text-zinc-200"}`,children:[m.jsx(ec,{className:"w-3.5 h-3.5 text-amber-500"}),m.jsx("span",{children:"Celestial Objects"})]}),m.jsxs("button",{type:"button",onClick:()=>p("waves"),className:`flex items-center gap-1.5 px-3 py-2 text-xs font-display font-medium border-b-2 transition-all cursor-pointer ${u==="waves"?l?"border-violet-600 text-zinc-950 font-bold":"border-violet-400 text-white":l?"border-transparent text-zinc-500 hover:text-zinc-900":"border-transparent text-zinc-400 hover:text-zinc-200"}`,children:[m.jsx(s0,{className:"w-3.5 h-3.5 text-cyan-500"}),m.jsx("span",{children:"Wave Architecture"})]}),m.jsxs("button",{type:"button",onClick:()=>p("clock"),className:`flex items-center gap-1.5 px-3 py-2 text-xs font-display font-medium border-b-2 transition-all cursor-pointer ${u==="clock"?l?"border-violet-600 text-zinc-950 font-bold":"border-violet-400 text-white":l?"border-transparent text-zinc-500 hover:text-zinc-900":"border-transparent text-zinc-400 hover:text-zinc-200"}`,children:[m.jsx(Cf,{className:"w-3.5 h-3.5 text-violet-600"}),m.jsx("span",{children:"Clock Studio"})]}),m.jsxs("button",{type:"button",onClick:()=>p("palettes"),className:`flex items-center gap-1.5 px-3 py-2 text-xs font-display font-medium border-b-2 transition-all cursor-pointer ${u==="palettes"?l?"border-violet-600 text-zinc-950 font-bold":"border-violet-400 text-white":l?"border-transparent text-zinc-500 hover:text-zinc-900":"border-transparent text-zinc-400 hover:text-zinc-200"}`,children:[m.jsx(Eb,{className:"w-3.5 h-3.5 text-purple-600"}),m.jsx("span",{children:"Color Palettes"})]})]}),m.jsxs("div",{className:"flex-1 overflow-y-auto p-5 space-y-6",children:[u==="celestial"&&m.jsxs("div",{className:"space-y-5 animate-fadeIn",children:[m.jsxs("div",{className:"space-y-2.5",children:[m.jsx("div",{className:`flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold ${l?"text-zinc-800":"text-zinc-300"}`,children:m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(ec,{className:"w-3.5 h-3.5 text-amber-500"}),m.jsx("span",{children:"Primary Celestial Body"})]})}),m.jsx("div",{className:"grid grid-cols-2 gap-2.5",children:zb.map(h=>{const x=(t.celestialBody||"crescent-moon")===h.id;return m.jsxs("button",{type:"button",onClick:()=>r({celestialBody:h.id}),className:`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${x?l?"bg-amber-50 border-amber-500 ring-2 ring-amber-500/20 shadow-sm":"bg-amber-400/15 border-amber-400/60 shadow-[0_0_20px_rgba(251,191,36,0.2)]":l?"bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90 text-zinc-900":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]"}`,children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("span",{className:`text-xs font-display font-bold ${x?l?"text-amber-950 font-bold":"text-amber-200":l?"text-zinc-900":"text-white"}`,children:h.name}),x&&m.jsx("span",{className:`w-2 h-2 rounded-full shadow-sm ${l?"bg-amber-600":"bg-amber-400"}`})]}),m.jsx("span",{className:`text-[10px] font-sans mt-1 leading-tight ${x?l?"text-amber-900/80 font-medium":"text-amber-200/80":l?"text-zinc-600":"text-zinc-400"}`,children:h.desc})]},h.id)})})]}),m.jsxs("div",{className:"space-y-2.5",children:[m.jsxs("div",{className:`flex items-center gap-2 text-xs font-display uppercase tracking-wider font-semibold ${l?"text-zinc-800":"text-zinc-300"}`,children:[m.jsx(Fr,{className:"w-3.5 h-3.5 text-violet-500"}),m.jsx("span",{children:"Astronomical Cosmic Features"})]}),m.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs",children:[m.jsxs("label",{className:`flex items-center justify-between p-3 rounded-2xl border cursor-pointer transition-colors ${l?"bg-zinc-50 hover:bg-zinc-100/90 border-zinc-200/90 text-zinc-900 shadow-sm":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] text-zinc-200"}`,children:[m.jsxs("div",{children:[m.jsx("div",{className:`font-semibold ${l?"text-zinc-900":"text-zinc-200"}`,children:"Constellation Charts"}),m.jsx("div",{className:`text-[10px] font-sans ${l?"text-zinc-600":"text-zinc-400"}`,children:"Ursa Major & Cassiopeia chords"})]}),m.jsx("input",{type:"checkbox",checked:t.showConstellations,onChange:h=>r({showConstellations:h.target.checked}),className:"w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"})]}),m.jsxs("label",{className:`flex items-center justify-between p-3 rounded-2xl border cursor-pointer transition-colors ${l?"bg-zinc-50 hover:bg-zinc-100/90 border-zinc-200/90 text-zinc-900 shadow-sm":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] text-zinc-200"}`,children:[m.jsxs("div",{children:[m.jsx("div",{className:`font-semibold ${l?"text-zinc-900":"text-zinc-200"}`,children:"Cosmic Comet"}),m.jsx("div",{className:`text-[10px] font-sans ${l?"text-zinc-600":"text-zinc-400"}`,children:"Sweeping ion dust tail"})]}),m.jsx("input",{type:"checkbox",checked:t.showComet,onChange:h=>r({showComet:h.target.checked}),className:"w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"})]}),m.jsxs("label",{className:`flex items-center justify-between p-3 rounded-2xl border cursor-pointer transition-colors ${l?"bg-zinc-50 hover:bg-zinc-100/90 border-zinc-200/90 text-zinc-900 shadow-sm":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] text-zinc-200"}`,children:[m.jsxs("div",{children:[m.jsx("div",{className:`font-semibold ${l?"text-zinc-900":"text-zinc-200"}`,children:"Volumetric Nebula"}),m.jsx("div",{className:`text-[10px] font-sans ${l?"text-zinc-600":"text-zinc-400"}`,children:"Interstellar atmospheric clouds"})]}),m.jsx("input",{type:"checkbox",checked:t.showNebulaDust,onChange:h=>r({showNebulaDust:h.target.checked}),className:"w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"})]}),m.jsxs("label",{className:`flex items-center justify-between p-3 rounded-2xl border cursor-pointer transition-colors ${l?"bg-zinc-50 hover:bg-zinc-100/90 border-zinc-200/90 text-zinc-900 shadow-sm":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] text-zinc-200"}`,children:[m.jsxs("div",{children:[m.jsx("div",{className:`font-semibold ${l?"text-zinc-900":"text-zinc-200"}`,children:"Orbital Trajectory Arc"}),m.jsx("div",{className:`text-[10px] font-sans ${l?"text-zinc-600":"text-zinc-400"}`,children:"Elliptical planetary telemetry"})]}),m.jsx("input",{type:"checkbox",checked:t.showOrbitalTrack,onChange:h=>r({showOrbitalTrack:h.target.checked}),className:"w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"})]}),m.jsxs("label",{className:`flex items-center justify-between p-3 rounded-2xl border cursor-pointer transition-colors ${l?"bg-zinc-50 hover:bg-zinc-100/90 border-zinc-200/90 text-zinc-900 shadow-sm":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] text-zinc-200"}`,children:[m.jsxs("div",{children:[m.jsx("div",{className:`font-semibold ${l?"text-zinc-900":"text-zinc-200"}`,children:"Celestial Meridian"}),m.jsx("div",{className:`text-[10px] font-sans ${l?"text-zinc-600":"text-zinc-400"}`,children:"Vertical astronomical ticks"})]}),m.jsx("input",{type:"checkbox",checked:t.showMeridian,onChange:h=>r({showMeridian:h.target.checked}),className:"w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"})]}),m.jsxs("label",{className:`flex items-center justify-between p-3 rounded-2xl border cursor-pointer transition-colors ${l?"bg-zinc-50 hover:bg-zinc-100/90 border-zinc-200/90 text-zinc-900 shadow-sm":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] text-zinc-200"}`,children:[m.jsxs("div",{children:[m.jsx("div",{className:`font-semibold ${l?"text-zinc-900":"text-zinc-200"}`,children:"Diffraction Cross Stars"}),m.jsx("div",{className:`text-[10px] font-sans ${l?"text-zinc-600":"text-zinc-400"}`,children:"4-point diamond optical flares"})]}),m.jsx("input",{type:"checkbox",checked:t.showCrossStars,onChange:h=>r({showCrossStars:h.target.checked}),className:"w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"})]})]})]}),m.jsxs("div",{className:"space-y-2",children:[m.jsxs("div",{className:`flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold ${l?"text-zinc-800":"text-zinc-300"}`,children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(Db,{className:`w-3.5 h-3.5 ${l?"text-cyan-600":"text-cyan-400"}`}),m.jsx("span",{children:"Shooting Star Frequency"})]}),m.jsx("span",{className:`text-[11px] font-medium lowercase capitalize ${l?"text-violet-700 font-bold":"text-violet-300"}`,children:t.shootingStarMode||"occasional"})]}),m.jsx("div",{className:"grid grid-cols-3 gap-2",children:["off","occasional","meteor-shower"].map(h=>{const x=(t.shootingStarMode||"occasional")===h;return m.jsx("button",{type:"button",onClick:()=>r({shootingStarMode:h}),className:`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer ${x?l?"bg-cyan-600 text-white font-bold shadow-sm border-cyan-700":"bg-cyan-600/30 border-cyan-400 text-white font-semibold":l?"bg-zinc-100 hover:bg-zinc-200/80 border-zinc-200 text-zinc-700 font-medium":"bg-white/[0.03] border-white/[0.06] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.06]"}`,children:m.jsx("div",{className:"text-xs font-display capitalize",children:h.replace("-"," ")})},h)})})]})]}),u==="waves"&&m.jsxs("div",{className:"space-y-5 animate-fadeIn",children:[m.jsxs("div",{className:"space-y-2.5",children:[m.jsxs("div",{className:`flex items-center gap-2 text-xs font-display uppercase tracking-wider font-semibold ${l?"text-zinc-800":"text-zinc-300"}`,children:[m.jsx(s0,{className:`w-3.5 h-3.5 ${l?"text-cyan-600":"text-cyan-400"}`}),m.jsx("span",{children:"Horizon Geometry Style"})]}),m.jsx("div",{className:"grid grid-cols-2 gap-2.5",children:Fb.map(h=>{const x=(t.waveGeometry||"dunes")===h.id;return m.jsxs("button",{type:"button",onClick:()=>r({waveGeometry:h.id}),className:`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${x?l?"bg-cyan-50 border-cyan-500 ring-2 ring-cyan-500/20 shadow-sm":"bg-cyan-600/20 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.2)]":l?"bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90 text-zinc-900":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]"}`,children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("span",{className:`text-xs font-display font-bold ${x?l?"text-cyan-950 font-bold":"text-cyan-200":l?"text-zinc-900":"text-white"}`,children:h.name}),x&&m.jsx("span",{className:`w-2 h-2 rounded-full shadow-sm ${l?"bg-cyan-600":"bg-cyan-400"}`})]}),m.jsx("span",{className:`text-[10px] font-sans mt-1 leading-tight ${x?l?"text-cyan-900/80 font-medium":"text-cyan-200/80":l?"text-zinc-600":"text-zinc-400"}`,children:h.desc})]},h.id)})})]}),m.jsxs("div",{className:"space-y-2",children:[m.jsxs("div",{className:`flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold ${l?"text-zinc-800":"text-zinc-300"}`,children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(bb,{className:`w-3.5 h-3.5 ${l?"text-violet-600":"text-violet-400"}`}),m.jsx("span",{children:"Layer Density (Stratification)"})]}),m.jsx("span",{className:`text-[11px] font-medium lowercase capitalize ${l?"text-violet-700 font-bold":"text-violet-300"}`,children:t.waveLayerDensity||"deep"})]}),m.jsx("div",{className:"grid grid-cols-3 gap-2",children:kb.map(h=>{const x=(t.waveLayerDensity||"deep")===h.id;return m.jsxs("button",{type:"button",onClick:()=>r({waveLayerDensity:h.id}),className:`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer ${x?l?"bg-violet-600 text-white font-bold shadow-sm border-violet-700":"bg-violet-600/30 border-violet-400 text-white font-semibold":l?"bg-zinc-100 hover:bg-zinc-200/80 border-zinc-200 text-zinc-700 font-medium":"bg-white/[0.03] border-white/[0.06] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.06]"}`,children:[m.jsx("div",{className:"text-xs font-display",children:h.label}),m.jsx("div",{className:`text-[10px] font-sans mt-0.5 ${x?l?"text-violet-100":"text-violet-200":"text-zinc-500"}`,children:h.desc})]},h.id)})})]}),m.jsxs("div",{className:"space-y-2",children:[m.jsxs("div",{className:`flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold ${l?"text-zinc-800":"text-zinc-300"}`,children:[m.jsx("span",{children:"Wave Drift Speed"}),m.jsx("span",{className:`text-[11px] font-medium lowercase capitalize ${l?"text-violet-700 font-bold":"text-violet-300"}`,children:t.speed})]}),m.jsx("div",{className:"grid grid-cols-4 gap-2",children:["frozen","calm","balanced","dynamic"].map(h=>{const x=t.speed===h;return m.jsx("button",{type:"button",onClick:()=>r({speed:h}),className:`py-2 px-1 rounded-xl border text-center transition-all cursor-pointer ${x?l?"bg-violet-600 text-white font-bold shadow-sm border-violet-700":"bg-violet-600/30 border-violet-400 text-white font-semibold":l?"bg-zinc-100 hover:bg-zinc-200/80 border-zinc-200 text-zinc-700 font-medium":"bg-white/[0.03] border-white/[0.06] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.06]"}`,children:m.jsx("div",{className:"text-xs font-display capitalize",children:h})},h)})})]}),m.jsxs("div",{className:"space-y-2",children:[m.jsxs("div",{className:`flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold ${l?"text-zinc-800":"text-zinc-300"}`,children:[m.jsx("span",{children:"Wave Crest Amplitude"}),m.jsx("span",{className:`text-[11px] font-medium lowercase capitalize ${l?"text-violet-700 font-bold":"text-violet-300"}`,children:t.amplitude})]}),m.jsx("div",{className:"grid grid-cols-3 gap-2",children:["subtle","majestic","dramatic"].map(h=>{const x=t.amplitude===h;return m.jsx("button",{type:"button",onClick:()=>r({amplitude:h}),className:`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer ${x?l?"bg-violet-600 text-white font-bold shadow-sm border-violet-700":"bg-violet-600/30 border-violet-400 text-white font-semibold":l?"bg-zinc-100 hover:bg-zinc-200/80 border-zinc-200 text-zinc-700 font-medium":"bg-white/[0.03] border-white/[0.06] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.06]"}`,children:m.jsx("div",{className:"text-xs font-display capitalize",children:h})},h)})})]})]}),u==="clock"&&m.jsxs("div",{className:"space-y-5 animate-fadeIn",children:[m.jsxs("div",{className:"space-y-2.5",children:[m.jsxs("div",{className:`flex items-center gap-2 text-xs font-display uppercase tracking-wider font-semibold ${l?"text-zinc-800":"text-zinc-300"}`,children:[m.jsx(Lb,{className:`w-3.5 h-3.5 ${l?"text-violet-600":"text-violet-400"}`}),m.jsx("span",{children:"Numeral Typography Style"})]}),m.jsx("div",{className:"grid grid-cols-2 gap-2.5",children:Ob.map(h=>{const x=(t.clockFontStyle||"tabular")===h.id,v=h.id==="serif"?"font-serif":h.id==="mono"?"font-mono":h.id==="minimal"?"font-sans font-light":"font-display";return m.jsxs("button",{type:"button",onClick:()=>r({clockFontStyle:h.id}),className:`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${x?l?"bg-violet-50 border-violet-500 ring-2 ring-violet-500/20 shadow-sm":"bg-violet-600/20 border-violet-400 shadow-[0_0_20px_rgba(147,51,234,0.25)]":l?"bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90 text-zinc-900":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]"}`,children:[m.jsxs("div",{children:[m.jsx("div",{className:`text-xs font-display font-bold ${x?l?"text-violet-950":"text-white":l?"text-zinc-900":"text-zinc-200"}`,children:h.label}),m.jsx("div",{className:`text-xl ${v} mt-1 ${x?l?"text-violet-700 font-bold":"text-violet-200":l?"text-zinc-700":"text-zinc-300"}`,children:h.preview})]}),x&&m.jsx("span",{className:`w-2 h-2 rounded-full shadow-sm ${l?"bg-violet-600":"bg-violet-400"}`})]},h.id)})})]}),m.jsxs("div",{className:"space-y-2",children:[m.jsxs("div",{className:`flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold ${l?"text-zinc-800":"text-zinc-300"}`,children:[m.jsx("span",{children:"Display Clock Scale"}),m.jsx("span",{className:`text-[11px] font-medium lowercase capitalize ${l?"text-violet-700 font-bold":"text-violet-300"}`,children:t.clockSize||"standard"})]}),m.jsx("div",{className:"grid grid-cols-3 gap-2",children:Bb.map(h=>{const x=(t.clockSize||"standard")===h.id;return m.jsx("button",{type:"button",onClick:()=>r({clockSize:h.id}),className:`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer ${x?l?"bg-violet-600 text-white font-bold shadow-sm border-violet-700":"bg-violet-600/30 border-violet-400 text-white font-semibold":l?"bg-zinc-100 hover:bg-zinc-200/80 border-zinc-200 text-zinc-700 font-medium":"bg-white/[0.03] border-white/[0.06] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.06]"}`,children:m.jsx("div",{className:"text-xs font-display",children:h.label})},h.id)})})]}),m.jsxs("div",{className:"space-y-2",children:[m.jsxs("div",{className:`flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold ${l?"text-zinc-800":"text-zinc-300"}`,children:[m.jsx("span",{children:"Backlight Halo"}),m.jsx("span",{className:`text-[11px] font-medium lowercase capitalize ${l?"text-violet-700 font-bold":"text-violet-300"}`,children:t.clockHalo||"pulsar"})]}),m.jsx("div",{className:"grid grid-cols-3 gap-2",children:["none","subtle","pulsar"].map(h=>{const x=(t.clockHalo||"pulsar")===h;return m.jsx("button",{type:"button",onClick:()=>r({clockHalo:h}),className:`py-2 px-2 rounded-xl border text-center transition-all cursor-pointer ${x?l?"bg-violet-600 text-white font-bold shadow-sm border-violet-700":"bg-violet-600/30 border-violet-400 text-white font-semibold":l?"bg-zinc-100 hover:bg-zinc-200/80 border-zinc-200 text-zinc-700 font-medium":"bg-white/[0.03] border-white/[0.06] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.06]"}`,children:m.jsx("div",{className:"text-xs font-display capitalize",children:h})},h)})})]}),m.jsxs("div",{className:"space-y-2",children:[m.jsx("div",{className:`flex items-center gap-2 text-xs font-display uppercase tracking-wider font-semibold ${l?"text-zinc-800":"text-zinc-300"}`,children:m.jsx("span",{children:"Display Elements"})}),m.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[m.jsxs("div",{className:`flex items-center gap-1 p-1 rounded-2xl border ${l?"bg-zinc-100 border-zinc-200":"bg-white/[0.03] border-white/[0.06]"}`,children:[m.jsx("button",{type:"button",onClick:()=>r({clockFormat:"12h"}),className:`flex-1 py-1.5 rounded-xl text-center transition-all cursor-pointer font-sans text-xs ${t.clockFormat==="12h"?l?"bg-violet-600 text-white font-bold shadow-sm":"bg-violet-600/40 text-white font-medium":l?"text-zinc-600 hover:text-zinc-950 font-medium":"text-zinc-400 hover:text-white"}`,children:"12 Hour"}),m.jsx("button",{type:"button",onClick:()=>r({clockFormat:"24h"}),className:`flex-1 py-1.5 rounded-xl text-center transition-all cursor-pointer font-sans text-xs ${t.clockFormat==="24h"?l?"bg-violet-600 text-white font-bold shadow-sm":"bg-violet-600/40 text-white font-medium":l?"text-zinc-600 hover:text-zinc-950 font-medium":"text-zinc-400 hover:text-white"}`,children:"24 Hour"})]}),m.jsxs("label",{className:`flex items-center justify-between p-2.5 rounded-2xl border cursor-pointer transition-colors ${l?"bg-zinc-50 hover:bg-zinc-100/90 border-zinc-200/90 text-zinc-900 shadow-sm":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] text-zinc-300"}`,children:[m.jsx("span",{className:`font-medium ${l?"text-zinc-900":"text-zinc-300"}`,children:"Show Seconds"}),m.jsx("input",{type:"checkbox",checked:t.showSeconds,onChange:h=>r({showSeconds:h.target.checked}),className:"w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"})]}),m.jsxs("label",{className:`flex items-center justify-between p-2.5 rounded-2xl border cursor-pointer transition-colors ${l?"bg-zinc-50 hover:bg-zinc-100/90 border-zinc-200/90 text-zinc-900 shadow-sm":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] text-zinc-300"}`,children:[m.jsx("span",{className:`font-medium ${l?"text-zinc-900":"text-zinc-300"}`,children:"Show Date Pill"}),m.jsx("input",{type:"checkbox",checked:t.showDate!==!1,onChange:h=>r({showDate:h.target.checked}),className:"w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"})]}),m.jsxs("label",{className:`flex items-center justify-between p-2.5 rounded-2xl border cursor-pointer transition-colors ${l?"bg-zinc-50 hover:bg-zinc-100/90 border-zinc-200/90 text-zinc-900 shadow-sm":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] text-zinc-300"}`,children:[m.jsx("span",{className:`font-medium ${l?"text-zinc-900":"text-zinc-300"}`,children:"Greeting & Motto"}),m.jsx("input",{type:"checkbox",checked:t.showGreeting!==!1,onChange:h=>r({showGreeting:h.target.checked}),className:"w-4 h-4 rounded text-violet-600 focus:ring-violet-400 focus:ring-offset-0 accent-violet-600 cursor-pointer"})]})]})]})]}),u==="palettes"&&m.jsx("div",{className:"space-y-4 animate-fadeIn",children:m.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:Ub.map(h=>{const x=t.palette===h.id;return m.jsxs("button",{type:"button",onClick:()=>r({palette:h.id}),className:`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-2.5 ${x?l?"bg-violet-50 border-violet-500 ring-2 ring-violet-500/20 shadow-sm":"bg-violet-600/20 border-violet-400/60 shadow-[0_0_20px_rgba(147,51,234,0.25)]":l?"bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]"}`,children:[m.jsxs("div",{className:"flex items-center justify-between w-full",children:[m.jsx("span",{className:`text-xs font-display font-bold ${x?l?"text-violet-950":"text-white":l?"text-zinc-900":"text-zinc-200"}`,children:h.name}),x&&m.jsx("span",{className:`w-2 h-2 rounded-full shadow-sm ${l?"bg-violet-600":"bg-violet-400 shadow-[0_0_8px_#a855f7]"}`})]}),m.jsx("div",{className:`flex items-center gap-1.5 w-full h-4 rounded-lg overflow-hidden p-0.5 border ${l?"bg-zinc-200/60 border-zinc-300":"bg-black/40 border-white/[0.08]"}`,children:h.previewColors.map((v,_)=>m.jsx("div",{className:"flex-1 h-full rounded-sm",style:{backgroundColor:v}},_))}),m.jsx("span",{className:`text-[10px] font-sans leading-tight ${x?l?"text-violet-900/80 font-medium":"text-zinc-300":l?"text-zinc-600":"text-zinc-400"}`,children:h.subtitle})]},h.id)})})})]}),m.jsxs("div",{className:`p-4 border-t flex items-center justify-between text-xs shrink-0 ${l?"border-zinc-200 bg-zinc-50/90":"border-white/[0.08] bg-black/30"}`,children:[m.jsx("span",{className:`font-sans ${l?"text-zinc-600 font-medium":"text-zinc-400"}`,children:"Settings saved automatically"}),m.jsx("button",{type:"button",onClick:e,className:"px-5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-display font-medium shadow-md transition-all cursor-pointer",children:"Apply & Close"})]})]})]})},Za=({className:s="w-4 h-4"})=>m.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:s,"aria-hidden":"true",children:m.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})}),ff=({isPlaying:s,color:e="#a855f7",className:t="w-16 h-5",barCount:r=10})=>{const o=be.useRef(null);return be.useEffect(()=>{const l=o.current;if(!l)return;const u=l.getContext("2d");if(!u)return;let p;const d=as.getAnalyser(),h=d?new Uint8Array(d.frequencyBinCount):null,x=()=>{if(u.clearRect(0,0,l.width,l.height),s&&d&&h){d.getByteFrequencyData(h);const v=l.width,_=l.height,M=2,b=M*(r-1),C=Math.max(2,(v-b)/r);for(let y=0;y<r;y++){const S=Math.min(h.length-1,Math.floor(y*(h.length/r)*.7)),R=h[S]/255,F=Math.max(3,R*(_-2)),N=y*(C+M),z=_-F;u.fillStyle=e,u.beginPath(),u.roundRect(N,z,C,F,1.5),u.fill()}}else{const v=l.width,_=l.height,M=2,b=M*(r-1),C=Math.max(2,(v-b)/r);for(let y=0;y<r;y++){const S=y*(C+M),R=_-2.5;u.fillStyle="rgba(255, 255, 255, 0.2)",u.beginPath(),u.roundRect(S,R,C,2.5,1),u.fill()}}p=requestAnimationFrame(x)};return x(),()=>{cancelAnimationFrame(p)}},[s,e,r]),m.jsx("canvas",{ref:o,width:64,height:20,className:t,"aria-hidden":"true"})},Hb=({isOpen:s,onClose:e})=>{const{appTheme:t,audioSource:r,isAudioPlaying:o,activeSoundscapeId:l,audioVolume:u,isAudioMuted:p,playSoundscape:d,stopSoundscape:h,setAudioVolume:x,toggleAudioMute:v,isYouTubePlaying:_,activeYouTubeItem:M,youtubeVolume:b,isYouTubeMuted:C,savedYouTubeItems:y,showYouTubePreview:S,setShowYouTubePreview:R,playYouTubeItem:F,toggleYouTubePlay:N,stopYouTube:z,nextYouTubeTrack:D,prevYouTubeTrack:w,setYouTubeVolume:P,toggleYouTubeMute:ee,addYouTubeToLibrary:B,removeYouTubeFromLibrary:X}=Br(),H=t==="light",[j,W]=be.useState(r||"youtube"),[G,re]=be.useState(""),[J,$]=be.useState(""),[Y,q]=be.useState(null),[I,ne]=be.useState(null),[Ae,se]=be.useState(null),[V,we]=be.useState(null);if(be.useEffect(()=>{if(!Ae){we(null);return}we(Ae*60);const Re=setInterval(()=>{we(Ve=>Ve===null||Ve<=1?(h(),z(),se(null),null):Ve-1)},1e3);return()=>clearInterval(Re)},[Ae,h,z]),be.useEffect(()=>{const Re=Ve=>{Ve.key==="Escape"&&s&&e()};return window.addEventListener("keydown",Re),()=>window.removeEventListener("keydown",Re)},[s,e]),!s)return null;const De=Ks.find(Re=>Re.id===l)||Ks[0],Me=Re=>{const Ve=Math.floor(Re/60),je=Re%60;return`${Ve}:${je.toString().padStart(2,"0")}`},ke=Re=>{if(Re.preventDefault(),q(null),ne(null),!G.trim()){q("Please enter a YouTube video or playlist link.");return}const Ve=B(G.trim(),J.trim()||void 0);if(!Ve.success||!Ve.item){q(Ve.error||"Failed to parse YouTube link.");return}F(Ve.item),re(""),$(""),ne(`Playing: ${Ve.item.title}`),setTimeout(()=>ne(null),4e3)},lt=j==="youtube"?M?M.title:"No YouTube stream selected":De.title,He=j==="youtube"?_:o;return m.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 backdrop-blur-xl animate-fadeIn select-none ${H?"bg-black/45":"bg-black/85"}`,role:"dialog","aria-modal":"true","aria-labelledby":"audio-modal-title",children:[m.jsx("div",{className:"fixed inset-0",onClick:e,"aria-hidden":"true"}),m.jsxs("div",{className:`relative z-10 w-full max-w-2xl border rounded-3xl shadow-[0_20px_70px_rgba(0,0,0,0.85)] flex flex-col max-h-[90vh] overflow-hidden ${H?"bg-white/95 border-zinc-200 text-zinc-900 shadow-2xl":"bg-[#0b0d1e] border-white/[0.12] text-white shadow-2xl"}`,children:[m.jsxs("div",{className:`flex items-center justify-between px-6 py-4 border-b shrink-0 ${H?"border-zinc-200 bg-zinc-50/80":"border-white/[0.08] bg-white/[0.02]"}`,children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("div",{className:`w-9 h-9 rounded-2xl border flex items-center justify-center ${H?"bg-rose-50 border-rose-200 text-red-600":"bg-red-500/20 border-red-400/40 text-red-400"}`,children:m.jsx(Ql,{className:"w-5 h-5"})}),m.jsxs("div",{children:[m.jsxs("h2",{id:"audio-modal-title",className:`text-sm sm:text-base font-display font-semibold tracking-wide flex items-center gap-2 ${H?"text-zinc-900":"text-white"}`,children:["Focus Audio Sanctuary",m.jsx("span",{className:`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border ${j==="youtube"?H?"bg-red-50 text-red-700 border-red-200":"bg-red-500/15 text-red-300 border-red-500/30":H?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-emerald-500/15 text-emerald-300 border-emerald-500/30"}`,children:j==="youtube"?"YouTube Online • Infinite Audio":"Web Audio • Offline"})]}),m.jsx("p",{className:`text-xs font-sans mt-0.5 ${H?"text-zinc-500":"text-zinc-400"}`,children:j==="youtube"?"Paste any YouTube video or playlist link or choose curated study streams":"Procedurally synthesized ambient soundscapes. Zero network required."})]})]}),m.jsx("button",{type:"button",onClick:e,className:`w-8 h-8 rounded-xl flex items-center justify-center transition-colors cursor-pointer border ${H?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600 border-zinc-200":"bg-white/[0.05] hover:bg-white/[0.12] text-zinc-400 hover:text-white border-white/[0.08]"}`,"aria-label":"Close sound sanctuary",children:m.jsx(uo,{className:"w-4 h-4"})})]}),m.jsxs("div",{className:`flex items-center gap-2 px-6 pt-3 border-b shrink-0 ${H?"border-zinc-200 bg-zinc-50/50":"border-white/[0.06] bg-black/20"}`,children:[m.jsxs("button",{type:"button",onClick:()=>W("youtube"),className:`flex items-center gap-2 px-4 py-2.5 text-xs font-display font-semibold border-b-2 transition-all cursor-pointer ${j==="youtube"?H?"border-red-600 text-red-700":"border-red-500 text-white":H?"border-transparent text-zinc-500 hover:text-zinc-900":"border-transparent text-zinc-400 hover:text-zinc-200"}`,children:[m.jsx(Za,{className:"w-4 h-4 text-red-500"}),m.jsx("span",{children:"YouTube Audio & Playlists"})]}),m.jsxs("button",{type:"button",onClick:()=>W("ambient"),className:`flex items-center gap-2 px-4 py-2.5 text-xs font-display font-semibold border-b-2 transition-all cursor-pointer ${j==="ambient"?H?"border-violet-600 text-violet-700":"border-violet-400 text-white":H?"border-transparent text-zinc-500 hover:text-zinc-900":"border-transparent text-zinc-400 hover:text-zinc-200"}`,children:[m.jsx(r0,{className:"w-4 h-4 text-violet-500"}),m.jsx("span",{children:"Procedural Soundscapes (Offline)"})]})]}),j==="youtube"&&m.jsxs("div",{className:"flex-1 overflow-y-auto p-5 sm:p-6 space-y-5 animate-fadeIn",children:[m.jsxs("form",{onSubmit:ke,className:"space-y-2",children:[m.jsxs("div",{className:"flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold",children:[m.jsx("span",{className:H?"text-zinc-800":"text-zinc-300",children:"Play YouTube Link or Playlist"}),m.jsx("span",{className:`text-[10px] font-sans font-normal ${H?"text-zinc-500":"text-zinc-400"}`,children:"Supports videos, live streams & playlists"})]}),m.jsxs("div",{className:"flex flex-col sm:flex-row gap-2",children:[m.jsx("input",{type:"text",placeholder:"Paste YouTube link (e.g. https://www.youtube.com/watch?v=... or playlist?list=...)",value:G,onChange:Re=>{re(Re.target.value),Y&&q(null)},className:`flex-1 px-3.5 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-2 ${H?"bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:ring-red-500/20 focus:border-red-500":"bg-white/[0.04] border-white/[0.1] text-white placeholder-zinc-500 focus:ring-red-400/30 focus:border-red-400"}`}),m.jsxs("button",{type:"submit",className:"px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-display font-semibold flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer shrink-0",children:[m.jsx(jl,{className:"w-4 h-4"}),m.jsx("span",{children:"Load & Play"})]})]}),Y&&m.jsxs("div",{className:"flex items-center gap-2 p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-sans",children:[m.jsx(rg,{className:"w-4 h-4 shrink-0"}),m.jsx("span",{children:Y})]}),I&&m.jsxs("div",{className:"flex items-center gap-2 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-sans",children:[m.jsx(Fr,{className:"w-4 h-4 shrink-0"}),m.jsx("span",{children:I})]})]}),M&&m.jsxs("div",{className:`p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${H?"bg-red-50/70 border-red-200 text-zinc-900 shadow-sm":"bg-red-950/20 border-red-500/30 text-white"}`,children:[m.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[m.jsxs("div",{className:"w-12 h-12 rounded-xl overflow-hidden bg-black/40 shrink-0 border border-white/10 relative",children:[m.jsx("img",{src:M.thumbnailUrl||$l[0].thumbnailUrl,alt:"",className:"w-full h-full object-cover"}),_&&m.jsx("div",{className:"absolute inset-0 bg-black/35 flex items-center justify-center",children:m.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"})})]}),m.jsxs("div",{className:"min-w-0",children:[m.jsx("div",{className:"flex items-center gap-1.5",children:m.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-red-600 font-bold",children:M.type==="playlist"?"PLAYLIST":"NOW STREAMING"})}),m.jsx("h3",{className:`text-xs sm:text-sm font-display font-semibold truncate ${H?"text-zinc-900":"text-white"}`,children:M.title}),m.jsx("p",{className:`text-[11px] font-sans truncate ${H?"text-zinc-600":"text-zinc-400"}`,children:M.channel||"YouTube"})]})]}),m.jsxs("div",{className:"flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end",children:[M.type==="playlist"&&m.jsxs(m.Fragment,{children:[m.jsx("button",{type:"button",onClick:w,className:`p-2 rounded-xl border transition-colors cursor-pointer ${H?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-white"}`,title:"Previous Track in Playlist",children:m.jsx(tc,{className:"w-3.5 h-3.5"})}),m.jsx("button",{type:"button",onClick:D,className:`p-2 rounded-xl border transition-colors cursor-pointer ${H?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-white"}`,title:"Next Track in Playlist",children:m.jsx(nc,{className:"w-3.5 h-3.5"})})]}),m.jsxs("button",{type:"button",onClick:()=>{try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}},className:"px-2.5 py-1.5 rounded-xl border border-emerald-500/40 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-sans font-bold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer",title:"Force Unmute & Max Volume",children:[m.jsx(ic,{className:"w-3.5 h-3.5"}),m.jsx("span",{children:"Unmute"})]}),m.jsxs("button",{type:"button",onClick:()=>R(!S),className:`px-3 py-1.5 rounded-xl border text-xs font-sans flex items-center gap-1.5 transition-colors cursor-pointer ${S?"bg-red-600 text-white border-red-600 font-medium":H?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-zinc-300"}`,title:"Toggle Floating Video Preview",children:[m.jsx(Pb,{className:"w-3.5 h-3.5"}),m.jsx("span",{children:S?"Hide Video":"View Video"})]})]})]}),m.jsxs("div",{className:"space-y-2.5",children:[m.jsxs("div",{className:`flex items-center gap-2 text-xs font-display uppercase tracking-wider font-semibold ${H?"text-zinc-800":"text-zinc-300"}`,children:[m.jsx(Fr,{className:"w-3.5 h-3.5 text-amber-500"}),m.jsx("span",{children:"Curated Focus & Lo-Fi Streams"})]}),m.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:$l.map(Re=>{const Ve=(M==null?void 0:M.id)===Re.id||(M==null?void 0:M.videoId)===Re.videoId&&Re.videoId,je=Ve&&_;return m.jsxs("button",{type:"button",onClick:()=>{je?N():F(Re)},className:`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${Ve?H?"bg-red-50 border-red-500 ring-2 ring-red-500/20 shadow-sm":"bg-red-500/15 border-red-400 shadow-[0_0_20px_rgba(239,68,68,0.2)]":H?"bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90 text-zinc-900":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]"}`,children:[m.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[m.jsx("div",{className:"w-9 h-9 rounded-xl overflow-hidden bg-black/40 shrink-0 border border-white/10",children:m.jsx("img",{src:Re.thumbnailUrl,alt:"",onError:St=>{St.currentTarget.src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=400&auto=format&fit=crop"},className:"w-full h-full object-cover"})}),m.jsxs("div",{className:"min-w-0",children:[m.jsx("div",{className:`text-xs font-display font-semibold truncate ${Ve?H?"text-red-950 font-bold":"text-white":H?"text-zinc-900":"text-zinc-200"}`,children:Re.title}),m.jsx("div",{className:`text-[10px] font-sans truncate ${H?"text-zinc-500":"text-zinc-400"}`,children:Re.channel})]})]}),m.jsx("div",{className:`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${je?"bg-red-600 text-white shadow-sm":H?"bg-zinc-200 text-zinc-700":"bg-white/10 text-white"}`,children:je?m.jsx(os,{className:"w-3.5 h-3.5 fill-current"}):m.jsx(ls,{className:"w-3.5 h-3.5 ml-0.5 fill-current"})})]},Re.id)})})]}),y.filter(Re=>!Re.isCurated).length>0&&m.jsxs("div",{className:"space-y-2.5",children:[m.jsx("div",{className:`flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold ${H?"text-zinc-800":"text-zinc-300"}`,children:m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(n0,{className:"w-3.5 h-3.5 text-red-500"}),m.jsx("span",{children:"My Saved YouTube Library"})]})}),m.jsx("div",{className:"space-y-2",children:y.filter(Re=>!Re.isCurated).map(Re=>{const Ve=(M==null?void 0:M.id)===Re.id,je=Ve&&_;return m.jsxs("div",{className:`p-3 rounded-2xl border flex items-center justify-between gap-3 transition-all ${Ve?H?"bg-red-50 border-red-500 ring-2 ring-red-500/20":"bg-red-500/15 border-red-400":H?"bg-zinc-50 border-zinc-200":"bg-white/[0.03] border-white/[0.06]"}`,children:[m.jsxs("div",{onClick:()=>F(Re),className:"flex items-center gap-3 min-w-0 flex-1 cursor-pointer",children:[m.jsx("div",{className:`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${Re.type==="playlist"?"bg-purple-600/20 text-purple-400":"bg-red-600/20 text-red-400"}`,children:Re.type==="playlist"?m.jsx(n0,{className:"w-4 h-4"}):m.jsx(Za,{className:"w-4 h-4"})}),m.jsxs("div",{className:"min-w-0",children:[m.jsx("div",{className:`text-xs font-display font-semibold truncate ${H?"text-zinc-900":"text-white"}`,children:Re.title}),m.jsxs("div",{className:`text-[10px] font-sans truncate ${H?"text-zinc-500":"text-zinc-400"}`,children:[Re.type==="playlist"?"Playlist":"Single Stream"," • ",Re.url]})]})]}),m.jsxs("div",{className:"flex items-center gap-1.5 shrink-0",children:[m.jsx("button",{type:"button",onClick:()=>{je?N():F(Re)},className:`p-2 rounded-xl transition-colors cursor-pointer ${je?"bg-red-600 text-white":H?"bg-zinc-200 text-zinc-800 hover:bg-zinc-300":"bg-white/10 text-white hover:bg-white/20"}`,children:je?m.jsx(os,{className:"w-3.5 h-3.5 fill-current"}):m.jsx(ls,{className:"w-3.5 h-3.5 fill-current"})}),m.jsx("button",{type:"button",onClick:()=>X(Re.id),className:`p-2 rounded-xl transition-colors cursor-pointer ${H?"text-zinc-400 hover:text-red-600":"text-zinc-500 hover:text-red-400"}`,title:"Remove from library",children:m.jsx(df,{className:"w-3.5 h-3.5"})})]})]},Re.id)})})]})]}),j==="ambient"&&m.jsx("div",{className:"flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 animate-fadeIn",children:m.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3.5",children:Ks.map(Re=>{const Ve=l===Re.id,je=Ve&&o;return m.jsxs("div",{onClick:()=>{je?h():d(Re.id)},className:`relative p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between select-none group ${Ve?H?"bg-violet-50 border-violet-500 ring-2 ring-violet-500/20 shadow-sm":"bg-violet-950/35 border-violet-500/50 shadow-[0_0_25px_rgba(168,85,247,0.18)]":H?"bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90 text-zinc-900":"bg-white/[0.025] hover:bg-white/[0.05] border-white/[0.08] hover:border-white/[0.18]"}`,children:[m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center justify-between mb-2",children:[m.jsx("span",{className:`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md border ${H?"bg-zinc-200/60 text-zinc-700 border-zinc-300":"text-zinc-400 bg-white/[0.05] border-white/[0.06]"}`,children:Re.category}),m.jsx("div",{className:`w-7 h-7 rounded-full flex items-center justify-center transition-all ${je?"bg-violet-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.6)]":H?"bg-zinc-200 text-zinc-700 group-hover:bg-zinc-300":"bg-white/[0.06] text-zinc-300 group-hover:bg-white/[0.15] group-hover:text-white"}`,children:je?m.jsx(os,{className:"w-3.5 h-3.5 fill-current"}):m.jsx(ls,{className:"w-3.5 h-3.5 ml-0.5 fill-current"})})]}),m.jsx("h3",{className:`text-sm font-display font-semibold tracking-wide transition-colors ${H?"text-zinc-900":"text-white"}`,children:Re.title}),m.jsx("p",{className:`text-xs font-sans mt-1 leading-snug line-clamp-2 ${H?"text-zinc-600":"text-zinc-400"}`,children:Re.tagline})]}),m.jsxs("div",{className:`mt-3 pt-2.5 border-t flex items-center justify-between text-[10px] font-mono ${H?"border-zinc-200 text-zinc-500":"border-white/[0.06] text-zinc-400"}`,children:[m.jsx("span",{className:"truncate pr-2",children:Re.frequency}),je&&m.jsxs("span",{className:"flex items-center gap-1 text-emerald-500 font-semibold shrink-0",children:[m.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"}),"PLAYING"]})]})]},Re.id)})})}),m.jsxs("div",{className:`px-5 py-3 border-t flex flex-wrap items-center justify-between gap-3 shrink-0 ${H?"border-zinc-200 bg-zinc-50/60":"border-white/[0.06] bg-white/[0.01]"}`,children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(Cf,{className:`w-4 h-4 ${H?"text-zinc-600":"text-violet-400"}`}),m.jsx("span",{className:`text-xs font-display font-medium ${H?"text-zinc-800":"text-zinc-300"}`,children:"Auto-Stop Timer:"}),V!==null&&m.jsxs("span",{className:`text-xs font-mono font-bold px-2 py-0.5 rounded-md border ${H?"bg-amber-100 text-amber-900 border-amber-300":"text-amber-300 bg-amber-500/15 border-amber-500/30"}`,children:[Me(V)," left"]})]}),m.jsx("div",{className:"flex items-center gap-1.5",children:[{label:"Off",val:null},{label:"15m",val:15},{label:"25m",val:25},{label:"45m",val:45},{label:"60m",val:60}].map(Re=>m.jsx("button",{type:"button",onClick:()=>se(Re.val),className:`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${Ae===Re.val?H?"bg-zinc-900 text-white font-bold shadow-sm":"bg-violet-600 text-white font-bold shadow-sm":H?"bg-zinc-200/80 text-zinc-700 hover:bg-zinc-300":"bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08]"}`,children:Re.label},Re.label))})]}),m.jsxs("div",{className:`p-4 sm:p-5 border-t flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 ${H?"border-zinc-200 bg-zinc-100/90":"border-white/[0.08] bg-[#070914]/90 backdrop-blur-xl"}`,children:[m.jsxs("div",{className:"flex items-center gap-3 w-full sm:w-auto",children:[m.jsx("div",{className:`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${j==="youtube"?H?"bg-red-50 border-red-200 text-red-600":"bg-red-500/20 border-red-400/40 text-red-300":H?"bg-violet-50 border-violet-200 text-violet-700":"bg-violet-600/30 border-violet-400/40 text-violet-200"}`,children:j==="youtube"?m.jsx(Za,{className:`w-5 h-5 ${_?"animate-pulse text-red-500":"text-zinc-400"}`}):m.jsx(r0,{className:`w-5 h-5 ${o?"text-violet-500 animate-pulse":"text-zinc-400"}`})}),m.jsxs("div",{className:"min-w-0 flex-1",children:[m.jsx("p",{className:`text-xs font-display font-medium truncate ${H?"text-zinc-900":"text-white"}`,children:lt}),m.jsxs("div",{className:"flex items-center gap-2 mt-0.5",children:[m.jsx(ff,{isPlaying:He,color:j==="youtube"?"#ef4444":H?"#7c3aed":De.accentColor,className:"w-16 h-4"}),m.jsx("span",{className:`text-[10px] font-mono ${H?"text-zinc-500":"text-zinc-400"}`,children:He?j==="youtube"?"Streaming YouTube...":"Synthesizing...":"Audio Paused"})]})]})]}),m.jsxs("div",{className:"flex items-center gap-4 w-full sm:w-auto justify-end",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("button",{type:"button",onClick:j==="youtube"?ee:v,className:`transition-colors cursor-pointer ${H?"text-zinc-600 hover:text-black":"text-zinc-400 hover:text-white"}`,title:"Toggle Mute",children:(j==="youtube"?C:p)?m.jsx(Nf,{className:"w-4 h-4 text-red-500"}):m.jsx(ic,{className:"w-4 h-4"})}),m.jsx("input",{type:"range",min:"0",max:j==="youtube"?100:1,step:j==="youtube"?1:.01,value:j==="youtube"?C?0:b:p?0:u,onChange:Re=>{const Ve=parseFloat(Re.target.value);if(j==="youtube"){P(Ve),C&&ee();try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}}else x(Ve)},className:"w-20 sm:w-24 h-1.5 bg-zinc-300 rounded-lg appearance-none cursor-pointer accent-red-600","aria-label":"Volume slider"}),m.jsx("span",{className:`text-[10px] font-mono w-8 tabular-nums ${H?"text-zinc-600":"text-zinc-400"}`,children:j==="youtube"?`${C?0:Math.round(b)}%`:`${p?0:Math.round(u*100)}%`})]}),m.jsx("button",{type:"button",onClick:()=>{j==="youtube"?N():o?h():d(l)},className:`px-5 py-2.5 rounded-xl text-white text-xs font-display font-semibold tracking-wider uppercase flex items-center gap-2 shadow-md transition-all cursor-pointer ${j==="youtube"?"bg-red-600 hover:bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.35)]":"bg-violet-600 hover:bg-violet-500 shadow-[0_0_20px_rgba(147,51,234,0.35)]"}`,children:He?m.jsxs(m.Fragment,{children:[m.jsx(os,{className:"w-3.5 h-3.5 fill-current"}),m.jsx("span",{children:"Pause"})]}):m.jsxs(m.Fragment,{children:[m.jsx(ls,{className:"w-3.5 h-3.5 fill-current"}),m.jsx("span",{children:"Play"})]})})]})]})]})]})},Vb=({isOpen:s,onClose:e})=>{const{profile:t,updateProfile:r,appTheme:o,setStudySubject:l}=Br(),u=o==="light",[p,d]=be.useState(t.name||"Azan"),[h,x]=be.useState(t.motto||"Remember, you are here for you."),[v,_]=be.useState(t.defaultFocusTopic||"Engineering"),[M,b]=be.useState(t.defaultFocusMode||"Deep Work"),[C,y]=be.useState(!1);if(be.useEffect(()=>{d(t.name||"Azan"),x(t.motto||"Remember, you are here for you."),_(t.defaultFocusTopic||"Engineering"),b(t.defaultFocusMode||"Deep Work")},[t,s]),be.useEffect(()=>{const N=z=>{z.key==="Escape"&&s&&e()};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[s,e]),!s)return null;const S=N=>{N.preventDefault();const z=p.trim()||"Azan",D=h.trim()||"Remember, you are here for you.",w=v.trim()||"Engineering",P=M.trim()||"Deep Work";r({name:z,motto:D,defaultFocusTopic:w,defaultFocusMode:P}),l(w),y(!0),setTimeout(()=>{y(!1),e()},500)},R=()=>{d("Azan"),x("Remember, you are here for you."),_("Engineering"),b("Deep Work"),r({name:"Azan",motto:"Remember, you are here for you.",defaultFocusTopic:"Engineering",defaultFocusMode:"Deep Work"}),l("Engineering")},F=()=>{const N=new Date().getHours();return N>=5&&N<12?"Good morning":N>=12&&N<17?"Good afternoon":N>=17&&N<22?"Good evening":"Late night focus"};return m.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-fadeIn select-none ${u?"bg-black/35":"bg-black/80"}`,children:[m.jsx("div",{className:"fixed inset-0",onClick:e,"aria-hidden":"true"}),m.jsxs("div",{role:"dialog","aria-modal":"true","aria-labelledby":"profile-modal-title",className:`relative w-full max-w-lg overflow-hidden rounded-3xl border shadow-2xl flex flex-col z-10 ${u?"bg-white/95 border-zinc-200 text-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)]":"cosmic-card border-white/[0.14] text-white shadow-2xl"}`,children:[m.jsxs("div",{className:`flex items-center justify-between p-5 pb-3 border-b shrink-0 ${u?"border-zinc-200":"border-white/[0.08]"}`,children:[m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsx("div",{className:`w-8 h-8 rounded-xl border flex items-center justify-center ${u?"bg-amber-50 border-amber-200 text-amber-700":"bg-amber-500/20 border-amber-400/30 text-amber-300"}`,children:m.jsx(kg,{className:"w-4 h-4"})}),m.jsxs("div",{children:[m.jsx("h2",{id:"profile-modal-title",className:`text-sm font-display uppercase tracking-widest font-bold ${u?"text-zinc-900":"text-white"}`,children:"Personal Sanctuary Profile"}),m.jsx("p",{className:`text-[11px] font-sans ${u?"text-zinc-500":"text-zinc-400"}`,children:"Tailor your name, daily motto & focus targets"})]})]}),m.jsxs("div",{className:"flex items-center gap-1.5",children:[m.jsx("button",{type:"button",onClick:R,"aria-label":"Reset profile to defaults",title:"Reset to defaults",className:`p-2 rounded-xl transition-colors cursor-pointer ${u?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white"}`,children:m.jsx(Rf,{className:"w-3.5 h-3.5"})}),m.jsx("button",{type:"button",onClick:e,"aria-label":"Close Profile Modal",className:`p-2 rounded-xl transition-colors cursor-pointer ${u?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white"}`,children:m.jsx(uo,{className:"w-4 h-4"})})]})]}),m.jsxs("form",{onSubmit:S,className:"p-6 space-y-4",children:[m.jsxs("div",{className:`p-4 rounded-2xl border text-center space-y-1 transition-all ${u?"bg-zinc-50 border-zinc-200 text-zinc-800":"bg-white/[0.03] border-white/[0.08] text-zinc-200"}`,children:[m.jsx("span",{className:`text-[10px] font-mono uppercase tracking-widest ${u?"text-zinc-500":"text-zinc-400"}`,children:"Live Greeting Preview"}),m.jsxs("p",{className:"text-xs sm:text-sm font-sans leading-relaxed",children:[F(),","," ",m.jsx("strong",{className:u?"text-zinc-950":"text-white",children:p.trim()||"Azan"}),". •"," ",m.jsxs("span",{className:`italic ${u?"text-zinc-700 font-medium":"text-zinc-300"}`,children:["“",h.trim()||"Remember, you are here for you.","”"]})]})]}),m.jsxs("div",{className:"space-y-1.5",children:[m.jsxs("label",{className:`text-xs font-semibold flex items-center justify-between ${u?"text-zinc-800":"text-zinc-200"}`,children:[m.jsxs("span",{className:"flex items-center gap-1.5",children:[m.jsx(Mb,{className:"w-3.5 h-3.5 text-amber-500"}),m.jsx("span",{children:"Your Name"})]}),m.jsx("span",{className:`text-[10px] font-normal ${u?"text-zinc-500":"text-zinc-400"}`,children:"Used in greetings & daily focus"})]}),m.jsx("input",{type:"text",value:p,onChange:N=>d(N.target.value),placeholder:"e.g. Azan",className:"w-full cosmic-input rounded-xl px-3.5 py-2.5 text-xs font-medium"})]}),m.jsxs("div",{className:"space-y-1.5",children:[m.jsxs("label",{className:`text-xs font-semibold flex items-center justify-between ${u?"text-zinc-800":"text-zinc-200"}`,children:[m.jsxs("span",{className:"flex items-center gap-1.5",children:[m.jsx(Tb,{className:"w-3.5 h-3.5 text-violet-400"}),m.jsx("span",{children:"Daily Mantra / Motto"})]}),m.jsx("span",{className:`text-[10px] font-normal ${u?"text-zinc-500":"text-zinc-400"}`,children:"Displayed on your wallpaper"})]}),m.jsx("input",{type:"text",value:h,onChange:N=>x(N.target.value),placeholder:"e.g. Remember, you are here for you.",className:"w-full cosmic-input rounded-xl px-3.5 py-2.5 text-xs font-medium"})]}),m.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-1",children:[m.jsxs("div",{className:"space-y-1.5",children:[m.jsxs("label",{className:`text-xs font-semibold flex items-center gap-1.5 ${u?"text-zinc-800":"text-zinc-200"}`,children:[m.jsx(Nb,{className:"w-3.5 h-3.5 text-emerald-400"}),m.jsx("span",{children:"Primary Focus Topic"})]}),m.jsx("input",{type:"text",value:v,onChange:N=>_(N.target.value),placeholder:"e.g. Engineering",className:"w-full cosmic-input rounded-xl px-3.5 py-2 text-xs"})]}),m.jsxs("div",{className:"space-y-1.5",children:[m.jsxs("label",{className:`text-xs font-semibold flex items-center gap-1.5 ${u?"text-zinc-800":"text-zinc-200"}`,children:[m.jsx(wb,{className:"w-3.5 h-3.5 text-amber-500"}),m.jsx("span",{children:"Default Focus Mode"})]}),m.jsx("input",{type:"text",value:M,onChange:N=>b(N.target.value),placeholder:"e.g. Deep Work",className:"w-full cosmic-input rounded-xl px-3.5 py-2 text-xs"})]})]}),m.jsxs("div",{className:"pt-2",children:[m.jsx("span",{className:`text-[10px] font-mono uppercase tracking-wider block mb-1.5 ${u?"text-zinc-500":"text-zinc-400"}`,children:"Quick Mantras"}),m.jsx("div",{className:"flex flex-wrap gap-1.5",children:["Remember, you are here for you.","Discipline equals true freedom.","Deep focus over scattered noise.","Build with relentless craft."].map(N=>m.jsxs("button",{type:"button",onClick:()=>x(N),className:`text-[11px] px-2.5 py-1 rounded-lg border transition-all text-left cursor-pointer ${h===N?u?"bg-violet-100 border-violet-300 text-violet-900 font-medium":"bg-violet-600/30 border-violet-400/50 text-violet-200 font-medium":u?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300"}`,children:["“",N,"”"]},N))})]}),m.jsxs("div",{className:"pt-4 flex items-center justify-end gap-2.5",children:[m.jsx("button",{type:"button",onClick:e,className:`px-4 py-2.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${u?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300"}`,children:"Cancel"}),m.jsx("button",{type:"submit",className:`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all cursor-pointer ${C?"bg-emerald-500 text-white":u?"bg-zinc-900 hover:bg-zinc-800 text-white":"bg-violet-600 hover:bg-violet-500 text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]"}`,children:C?m.jsxs(m.Fragment,{children:[m.jsx(cf,{className:"w-3.5 h-3.5"}),m.jsx("span",{children:"Saved!"})]}):m.jsxs(m.Fragment,{children:[m.jsx(Fr,{className:"w-3.5 h-3.5"}),m.jsx("span",{children:"Save Profile"})]})})]})]})]})]})},Wb=()=>{const{profile:s,tasks:e,toggleTask:t,addTask:r,deleteTask:o,habits:l,toggleHabit:u,addHabit:p,routines:d,addRoutineBlock:h,deleteRoutineBlock:x,resetRoutines:v,studySeconds:_,isStudyActive:M,setStudySubject:b,toggleStudyTimer:C,resetStudyTimer:y,studySessions:S,hydration:R,setHydration:F,sleepHours:N,setSleep:z,dailyRating:D,setDailyRating:w,isHUDHidden:P,setIsHUDHidden:ee,wallpaperSettings:B,audioSource:X,isAudioPlaying:H,activeSoundscapeId:j,playSoundscape:W,stopSoundscape:G,isYouTubePlaying:re,isYouTubeMuted:J,toggleYouTubeMute:$,activeYouTubeItem:Y,toggleYouTubePlay:q,nextYouTubeTrack:I,prevYouTubeTrack:ne,appTheme:Ae,toggleAppTheme:se}=Br(),V=Ae==="light",[we,De]=be.useState(!1),[Me,ke]=be.useState(!1),[lt,He]=be.useState(!1),[Re,Ve]=be.useState("06:26:17"),[je,St]=be.useState("PM"),[xt,Nt]=be.useState("Sunday, November 1, 2026"),[Mt,Zt]=be.useState(""),[zt,$t]=be.useState(s.defaultFocusTopic||"Engineering"),[Vt,tn]=be.useState(s.defaultFocusMode||"Deep Work"),[K,Ht]=be.useState(!1),[Ct,gt]=be.useState(!1),[ze,Pt]=be.useState(""),[Ye,tt]=be.useState(""),[U,E]=be.useState(""),oe=()=>{const L=new Date().getHours();return L>=5&&L<12?"Good morning":L>=12&&L<17?"Good afternoon":L>=17&&L<22?"Good evening":"Late night focus"};be.useEffect(()=>{const L=()=>{const ve=new Date,Ie=ve.getHours(),ft=ve.getMinutes(),wt=ve.getSeconds(),ot=Ie>=12?"PM":"AM",Lt=B.clockFormat==="24h",bt=Lt?Ie.toString().padStart(2,"0"):(Ie%12||12).toString().padStart(2,"0"),un=ft.toString().padStart(2,"0"),on=wt.toString().padStart(2,"0");B.showSeconds?Ve(`${bt}:${un}:${on}`):Ve(`${bt}:${un}`),St(Lt?"":ot);const Rn=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Nn=["January","February","March","April","May","June","July","August","September","October","November","December"];Nt(`${Rn[ve.getDay()]}, ${Nn[ve.getMonth()]} ${ve.getDate()}, ${ve.getFullYear()}`)};L();const ye=setInterval(L,1e3);return()=>clearInterval(ye)},[B.clockFormat,B.showSeconds]);const Ee=B.clockFontStyle==="serif"?"font-serif tracking-normal":B.clockFontStyle==="mono"?"font-mono tracking-tight":B.clockFontStyle==="minimal"?"font-sans font-extralight tracking-[0.08em]":"font-display tracking-[0.05em]",_e=B.clockSize==="compact"?"text-4xl sm:text-5xl md:text-7xl lg:text-[88px]":B.clockSize==="heroic"?"text-6xl sm:text-7xl md:text-9xl lg:text-[132px]":"text-5xl sm:text-6xl md:text-8xl lg:text-[108px]",Ue=B.clockSize==="compact"?"text-4xl sm:text-6xl md:text-8xl lg:text-[112px]":B.clockSize==="heroic"?"text-5xl sm:text-7xl md:text-[128px] lg:text-[160px]":"text-4xl sm:text-6xl md:text-8xl lg:text-[132px]",xe=B.clockHalo==="none"?"opacity-0":B.clockHalo==="subtle"?"bg-violet-600/6 blur-[80px]":"bg-violet-600/14 blur-[100px] animate-pulse";be.useEffect(()=>{const L=ye=>{ye.key==="Escape"&&P&&ee(!1)};return window.addEventListener("keydown",L),()=>window.removeEventListener("keydown",L)},[P]);const ie=L=>{L.preventDefault(),Mt.trim()&&(r(Mt.trim()),Zt(""))},ae=e.filter(L=>L.completed).length,Se=e.length>0?Math.round(ae/e.length*100):0,k=l.filter(L=>L.completed).length,ge=l.length>0?Math.round(k/l.length*100):0,he=new Date;he.setDate(he.getDate()-7);const Te=+((S||[]).filter(L=>new Date(L.timestamp)>=he).reduce((L,ye)=>L+ye.durationSeconds,0)/3600).toFixed(1),Pe=Math.min(100,Math.round(Te/15*100)),Xe=L=>{const ye=Math.floor(L/60),ve=L%60;return`${ye.toString().padStart(2,"0")}:${ve.toString().padStart(2,"0")}`},at=Ks.find(L=>L.id===j)||Ks[0];return be.useEffect(()=>{const L=ye=>{ye.key==="Escape"&&(Ht(!1),ke(!1))};return window.addEventListener("keydown",L),()=>window.removeEventListener("keydown",L)},[]),m.jsxs("div",{className:"relative w-screen min-h-screen lg:h-screen lg:max-h-screen overflow-y-auto lg:overflow-hidden flex flex-col justify-between pt-safe-top pt-10 sm:pt-6 lg:pt-8 px-4 sm:px-6 md:px-8 lg:px-14 pb-safe-bottom pb-8 sm:pb-6 select-none z-10 animate-fadeIn",children:[m.jsx("h1",{className:"sr-only",children:"FOR ME — Private Life Ledger & Personal Tracking Sanctuary"}),m.jsxs("header",{className:`flex flex-wrap items-center justify-between w-full min-h-12 shrink-0 z-20 gap-3 sm:gap-4 mb-3 sm:mb-2 transition-opacity duration-300 ${P?"opacity-40 hover:opacity-100":"opacity-100"}`,children:[m.jsxs("div",{onClick:()=>ee(!P),role:"button",tabIndex:0,onKeyDown:L=>{(L.key==="Enter"||L.key===" ")&&ee(!P)},"aria-label":"FM FOR ME — Toggle Zen Wallpaper Mode",className:"flex items-center gap-2.5 sm:gap-3 cursor-pointer group shrink-0",title:P?"Exit Zen Mode & Show Controls":"Enter Zen Wallpaper Mode",children:[m.jsx("div",{className:`w-8 h-8 rounded-full border flex items-center justify-center text-xs font-mono font-medium tracking-tight shadow-sm transition-all ${V?"border-zinc-300 bg-white/80 text-zinc-900 group-hover:bg-white group-hover:border-zinc-400":"border-white/20 bg-white/[0.04] text-white group-hover:bg-white/[0.1] group-hover:border-white/40"}`,children:"FM"}),m.jsx("span",{className:`font-sans font-bold text-xs tracking-[0.2em] uppercase group-hover:opacity-85 transition-opacity ${V?"text-zinc-900":"text-white"}`,children:"FOR ME"})]}),m.jsxs("div",{className:`hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-2xl border text-xs font-sans shadow-sm shrink-0 ${V?"bg-white/85 border-zinc-200/90 text-zinc-800":"bg-white/[0.035] border-white/[0.08] text-zinc-300"}`,children:[m.jsx(Fr,{className:`w-3.5 h-3.5 ${V?"text-amber-500":"text-violet-300"}`}),m.jsx("span",{children:xt})]}),m.jsxs("div",{className:`flex items-center gap-1 sm:gap-1.5 p-1 rounded-2xl backdrop-blur-2xl border text-xs shrink-0 ${V?"bg-white/88 border-zinc-200/90 text-zinc-700 shadow-sm":"bg-white/[0.04] border-white/[0.08] text-zinc-300"}`,children:[m.jsx("button",{type:"button",onClick:se,className:`px-2.5 sm:px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors font-medium text-[11px] sm:text-xs cursor-pointer ${V?"hover:bg-black/[0.05] text-zinc-800 hover:text-black":"hover:bg-white/[0.06] text-zinc-300 hover:text-white"}`,title:`Switch to ${V?"Obsidian Dark":"Creamy Light"} Theme`,"aria-label":`Switch to ${V?"Dark":"Light"} Theme`,children:V?m.jsxs(m.Fragment,{children:[m.jsx(ec,{className:"w-3.5 h-3.5 text-zinc-700"}),m.jsx("span",{className:"hidden sm:inline",children:"Dark"})]}):m.jsxs(m.Fragment,{children:[m.jsx(Cb,{className:"w-3.5 h-3.5 text-amber-300"}),m.jsx("span",{className:"hidden sm:inline",children:"Light"})]})}),m.jsx("button",{type:"button",onClick:()=>ee(!P),className:`px-3 py-1.5 rounded-xl transition-all font-medium text-xs flex items-center gap-1.5 cursor-pointer ${P?"bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold shadow-[0_0_20px_rgba(251,191,36,0.35)]":V?"hover:bg-black/[0.05] text-zinc-700 hover:text-zinc-950":"hover:bg-white/[0.06] hover:text-white text-zinc-300"}`,"aria-label":P?"Show workspace controls":"Hide workspace controls",title:P?"Exit Zen Mode & Show Controls":"Hide Controls",children:P?m.jsxs(m.Fragment,{children:[m.jsx(xg,{className:"w-3.5 h-3.5 text-zinc-950"}),m.jsx("span",{children:"Exit Zen"})]}):m.jsxs(m.Fragment,{children:[m.jsx(Sb,{className:`w-3.5 h-3.5 ${V?"text-zinc-500":"text-zinc-400"}`}),m.jsx("span",{className:"hidden sm:inline",children:"Hide"})]})}),m.jsxs("button",{type:"button",onClick:()=>He(!0),className:`px-2.5 sm:px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors font-medium text-[11px] sm:text-xs cursor-pointer ${V?"hover:bg-black/[0.05] text-amber-700 hover:text-amber-950 font-semibold":"hover:bg-white/[0.06] hover:text-white text-amber-300"}`,title:"Personal Sanctuary Profile & Identity",children:[m.jsx(kg,{className:"w-3.5 h-3.5 text-amber-400"}),m.jsx("span",{className:"hidden sm:inline",children:"Profile"})]}),m.jsxs("button",{type:"button",onClick:()=>Ht(!0),className:`px-2.5 sm:px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors font-medium text-[11px] sm:text-xs ${V?"hover:bg-black/[0.05] text-zinc-700 hover:text-zinc-950":"hover:bg-white/[0.06] hover:text-white text-zinc-300"}`,children:[m.jsx(t0,{className:`w-3.5 h-3.5 ${V?"text-zinc-500":"text-zinc-400"}`}),m.jsx("span",{className:"hidden sm:inline",children:"Routine"})]}),m.jsxs("button",{type:"button",onClick:()=>De(!0),className:`px-2.5 sm:px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors font-medium text-[11px] sm:text-xs ${V?"hover:bg-black/[0.05] text-violet-700 hover:text-violet-950 font-semibold":"hover:bg-white/[0.06] hover:text-white text-violet-300"}`,title:"Open Wallpaper Studio & Customization",children:[m.jsx(uf,{className:`w-3.5 h-3.5 ${V?"text-violet-600":"text-violet-400"}`}),m.jsx("span",{className:"hidden sm:inline",children:"Studio"})]}),m.jsxs("button",{type:"button",onClick:()=>ke(!0),className:`px-2.5 sm:px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors font-medium text-[11px] sm:text-xs cursor-pointer ${H||re?X==="youtube"?V?"bg-red-50 text-red-700 border border-red-200 font-bold shadow-sm":"bg-red-600/35 text-red-200 border border-red-400/40 shadow-[0_0_15px_rgba(239,68,68,0.3)]":V?"bg-violet-50 text-violet-700 border border-violet-200 font-bold shadow-sm":"bg-violet-600/35 text-violet-200 border border-violet-400/40 shadow-[0_0_15px_rgba(168,85,247,0.3)]":V?"hover:bg-black/[0.05] text-zinc-700 hover:text-zinc-950":"hover:bg-white/[0.06] hover:text-white text-zinc-300"}`,title:"Open Focus Audio Sanctuary (YouTube & Soundscapes)",children:[X==="youtube"&&re?m.jsx(Za,{className:"w-3.5 h-3.5 text-red-500 animate-pulse"}):m.jsx(Ql,{className:`w-3.5 h-3.5 ${H?V?"text-violet-600 animate-pulse":"text-violet-300 animate-pulse":V?"text-zinc-500":"text-zinc-400"}`}),m.jsx("span",{className:"hidden sm:inline",children:"Audio"}),(H||re)&&m.jsx(ff,{isPlaying:!0,color:X==="youtube"?"#ef4444":V?"#7c3aed":"#c084fc",className:"w-8 h-3 ml-0.5",barCount:5})]})]})]}),P?m.jsxs("div",{onClick:()=>ee(!1),className:"flex-1 w-full flex flex-col items-center justify-center text-center cursor-pointer select-none my-auto relative z-20 py-8 animate-fadeIn",title:"Click anywhere to restore workspace controls",children:[m.jsx("div",{className:`absolute w-[360px] h-[360px] sm:w-[540px] sm:h-[540px] lg:w-[720px] lg:h-[720px] rounded-full ${xe} pointer-events-none -z-10`}),m.jsxs("div",{className:`inline-flex items-baseline justify-center max-w-[94vw] px-2 gap-1.5 sm:gap-4 md:gap-6 ${Ee} select-none leading-none flex-nowrap ${V?"text-zinc-900 drop-shadow-[0_4px_24px_rgba(200,180,160,0.35)]":"text-white drop-shadow-[0_12px_60px_rgba(0,0,0,0.95)]"}`,children:[m.jsx("span",{className:`${Ue} font-light tabular-nums whitespace-nowrap`,children:Re}),je&&m.jsx("span",{className:`text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light shrink-0 ${V?"text-zinc-600":"text-zinc-300"}`,children:je})]}),(B.showDate!==!1||B.showGreeting!==!1)&&m.jsxs("div",{className:"mt-6 sm:mt-8 space-y-3 max-w-full px-4",children:[B.showDate!==!1&&m.jsxs("div",{className:`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-display tracking-wider shadow-lg ${V?"bg-white/88 border border-zinc-200/90 text-zinc-800":"cosmic-dock text-zinc-200"}`,children:[m.jsx(Fr,{className:`w-3.5 h-3.5 ${V?"text-amber-500":"text-violet-300"}`}),m.jsx("span",{children:xt})]}),B.showGreeting!==!1&&m.jsx("div",{className:"flex justify-center w-full px-2",children:m.jsxs("button",{type:"button",onClick:L=>{L.stopPropagation(),He(!0)},className:`text-xs sm:text-sm font-sans tracking-wide px-4 sm:px-6 py-2 rounded-2xl sm:rounded-full backdrop-blur-xl max-w-xl text-center leading-relaxed shadow-lg cursor-pointer transition-all hover:scale-[1.01] ${V?"bg-white/92 text-zinc-900 border border-zinc-300/80 shadow-md hover:bg-white":"bg-[#0a0618]/85 text-zinc-200 border border-white/[0.14] shadow-lg hover:border-violet-400/40"}`,title:"Click to personalize name & daily mantra",children:[oe(),", ",m.jsx("span",{className:`font-semibold ${V?"text-zinc-950":"text-white"}`,children:s.name}),". •"," ",m.jsxs("span",{className:`italic ${V?"text-zinc-700 font-medium":"text-zinc-300"}`,children:["“",s.motto||"Remember, you are here for you.","”"]})]})})]}),m.jsxs("div",{className:"mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-3 px-4 max-w-full",children:[m.jsxs("button",{type:"button",onClick:L=>{L.stopPropagation(),De(!0)},className:`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-display tracking-wider border shadow-lg cursor-pointer transition-all ${V?"bg-white/90 text-zinc-800 hover:text-black border-zinc-300/80 hover:bg-white":"cosmic-dock text-zinc-200 hover:text-white border-white/[0.12] hover:border-violet-400/50"}`,children:[m.jsx(uf,{className:`w-3.5 h-3.5 ${V?"text-zinc-700":"text-violet-300"}`}),m.jsx("span",{children:"Customize Wallpaper"})]}),m.jsxs("div",{className:`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs transition-all border shadow-xl group ${V?"bg-white/90 text-zinc-800 border-zinc-300/80":"cosmic-dock text-zinc-300 hover:text-white border-white/[0.12] hover:border-violet-400/40"}`,children:[m.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-400 animate-ping"}),m.jsx("span",{className:"font-display tracking-wider",children:"Tap anywhere to restore workspace controls"})]})]})]}):m.jsxs(m.Fragment,{children:[m.jsxs("section",{className:"text-center shrink-0 my-5 sm:my-auto py-3 sm:py-2 space-y-3",children:[m.jsxs("div",{className:`inline-flex items-baseline justify-center gap-2 sm:gap-3 md:gap-5 ${Ee} select-none leading-none ${V?"text-zinc-900":"text-white"}`,children:[m.jsx("span",{className:`${_e} font-light tabular-nums ${V?"drop-shadow-[0_4px_24px_rgba(200,180,160,0.30)]":"drop-shadow-[0_8px_40px_rgba(0,0,0,0.85)]"}`,children:Re}),je&&m.jsx("span",{className:`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal ${V?"text-zinc-600":"text-zinc-300"}`,children:je})]}),B.showGreeting!==!1&&m.jsx("div",{className:"flex justify-center w-full px-2",children:m.jsxs("button",{type:"button",onClick:()=>He(!0),className:`text-xs sm:text-sm font-sans tracking-wide px-4 sm:px-6 py-2 rounded-2xl sm:rounded-full backdrop-blur-xl max-w-xl text-center leading-relaxed shadow-lg cursor-pointer transition-all hover:scale-[1.01] ${V?"bg-white/92 text-zinc-900 border border-zinc-300/80 shadow-md hover:bg-white":"bg-[#0a0618]/85 text-zinc-200 border border-white/[0.14] shadow-lg hover:border-violet-400/40"}`,title:"Click to personalize name & daily mantra",children:[oe(),", ",m.jsx("span",{className:`font-semibold ${V?"text-zinc-950":"text-white"}`,children:s.name}),". •"," ",m.jsxs("span",{className:`italic ${V?"text-zinc-700 font-medium":"text-zinc-300"}`,children:["“",s.motto||"Remember, you are here for you.","”"]})]})})]}),m.jsxs("section",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 my-auto items-stretch w-full max-lg:py-6 lg:max-h-[52vh]",children:[m.jsxs("div",{className:"p-6 rounded-[2rem] cosmic-card flex flex-col justify-between h-auto min-h-[310px] lg:h-full overflow-hidden transition-all duration-300",children:[m.jsxs("div",{className:"flex-1 min-h-0 flex flex-col space-y-3",children:[m.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${V?"border-zinc-200":"border-white/[0.08]"}`,children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(Ab,{className:`w-4 h-4 ${V?"text-violet-700":"text-violet-300"}`}),m.jsx("h2",{className:`text-xs font-display uppercase tracking-[0.18em] font-semibold ${V?"text-zinc-900":"text-white"}`,children:"Tasks for the Day"})]}),m.jsxs("span",{className:`text-[11px] font-display font-medium px-2.5 py-0.5 rounded-full border tabular-nums ${V?"bg-zinc-100 text-zinc-800 border-zinc-200":"bg-white/[0.06] text-violet-200 border-white/[0.10]"}`,children:[ae,"/",e.length," done"]})]}),m.jsxs("form",{onSubmit:ie,className:"flex items-center gap-2 shrink-0",children:[m.jsx("input",{type:"text","aria-label":"Add task for today",placeholder:"Add task for today (Press Enter)...",value:Mt,onChange:L=>Zt(L.target.value),className:"flex-1 cosmic-input rounded-xl px-3.5 py-2 text-xs placeholder-zinc-500"}),m.jsx("button",{type:"submit","aria-label":"Add task",disabled:!Mt.trim(),className:"w-8 h-8 rounded-xl bg-violet-600/40 hover:bg-violet-600 text-white border border-violet-400/30 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all shrink-0 cursor-pointer shadow-sm",children:m.jsx(jl,{className:"w-4 h-4"})})]}),m.jsx("div",{tabIndex:0,role:"region","aria-label":"Daily tasks list",className:"flex-1 min-h-0 space-y-1.5 overflow-y-auto pr-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-violet-400/50 rounded-xl",children:e.map(L=>m.jsxs("div",{className:`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs select-none group ${L.completed?V?"bg-zinc-100/60 border-zinc-200/60 text-zinc-400":"bg-white/[0.015] border-white/[0.04] text-zinc-500":V?"bg-white/80 hover:bg-white border-zinc-200/80 text-zinc-800":"bg-white/[0.035] hover:bg-white/[0.07] border-white/[0.08] hover:border-violet-400/20 text-zinc-200"}`,children:[m.jsxs("div",{className:"flex items-center gap-2.5 truncate flex-1 cursor-pointer pr-2",onClick:()=>t(L.id),children:[m.jsx("div",{className:`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border transition-all ${L.completed?"bg-emerald-500 border-emerald-400 text-white shadow-sm":V?"border-zinc-300 group-hover:border-violet-500":"border-white/[0.25] group-hover:border-violet-400"}`,children:L.completed&&m.jsx(cf,{className:"w-2.5 h-2.5 stroke-[3]"})}),m.jsx("span",{className:`font-sans truncate ${L.completed?"line-through text-zinc-400":V?"text-zinc-800 font-medium":"text-zinc-200"}`,children:L.text})]}),m.jsx("button",{type:"button","aria-label":`Delete task: ${L.text}`,onClick:()=>o(L.id),className:"opacity-0 group-hover:opacity-100 text-zinc-400 hover:text-red-400 transition-opacity p-1 cursor-pointer focus:opacity-100",children:m.jsx(df,{className:"w-3.5 h-3.5"})})]},L.id))})]}),m.jsxs("div",{className:`pt-3 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${V?"border-zinc-200 text-zinc-600":"border-white/[0.08] text-zinc-400"}`,children:[m.jsxs("span",{className:"flex items-center gap-1.5",children:[m.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400"}),"Day Progress"]}),m.jsxs("span",{className:`font-display font-medium tabular-nums ${V?"text-zinc-900":"text-zinc-200"}`,children:[Se,"% done"]})]})]}),m.jsxs("div",{className:"p-6 rounded-[2rem] cosmic-card flex flex-col justify-between h-auto min-h-[310px] lg:h-full overflow-hidden transition-all duration-300",children:[m.jsxs("div",{className:"flex-1 min-h-0 flex flex-col space-y-3",children:[m.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${V?"border-zinc-200":"border-white/[0.08]"}`,children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(vb,{className:`w-4 h-4 ${V?"text-violet-700":"text-violet-300"}`}),m.jsx("h2",{className:`text-xs font-display uppercase tracking-[0.18em] font-semibold ${V?"text-zinc-900":"text-white"}`,children:"Daily Rhythm Pulse"})]}),m.jsxs("div",{className:"flex items-center gap-1.5",children:[m.jsxs("span",{className:`text-[11px] font-display font-medium px-2.5 py-0.5 rounded-full border tabular-nums ${V?"bg-zinc-100 text-zinc-800 border-zinc-200":"bg-white/[0.06] text-violet-200 border-white/[0.10]"}`,children:[k,"/",l.length," kept"]}),m.jsx("button",{type:"button","aria-label":"Add habit",onClick:()=>{const L=prompt("Add new daily rhythm habit:");L&&p(L)},className:`w-5 h-5 rounded-md flex items-center justify-center transition-colors cursor-pointer ${V?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700":"bg-white/[0.08] hover:bg-white text-zinc-300 hover:text-black"}`,title:"Add habit",children:m.jsx(jl,{className:"w-3 h-3"})})]})]}),m.jsx("div",{tabIndex:0,role:"region","aria-label":"Daily rhythm habits list",className:"flex-1 min-h-0 space-y-1.5 overflow-y-auto pr-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-violet-400/50 rounded-xl",children:l.map(L=>m.jsxs("div",{onClick:()=>u(L.id),className:`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs cursor-pointer select-none group ${L.completed?V?"bg-zinc-100/60 border-zinc-200/60 text-zinc-400":"bg-white/[0.015] border-white/[0.04] text-zinc-400":V?"bg-white/80 hover:bg-white border-zinc-200/80 text-zinc-800":"bg-white/[0.035] hover:bg-white/[0.07] border-white/[0.08] hover:border-violet-400/20 text-zinc-200"}`,children:[m.jsxs("div",{className:"flex flex-col gap-0.5 truncate pr-2",children:[m.jsx("span",{className:`font-sans truncate ${L.completed?"line-through text-zinc-400":V?"text-zinc-800 font-medium":"text-zinc-200"}`,children:L.name}),m.jsx("div",{className:"flex items-center gap-1.5 text-[10px] font-mono",children:L.streak>0?m.jsxs("span",{className:"text-amber-500 flex items-center gap-0.5 font-medium",children:["🔥 ",L.streak," day streak"]}):m.jsx("span",{className:V?"text-zinc-500":"text-zinc-400",children:"Ready today"})})]}),m.jsx("div",{className:`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border transition-all ${L.completed?"bg-emerald-500 border-emerald-400 text-white shadow-sm":V?"border-zinc-300 group-hover:border-violet-500":"border-white/[0.25] group-hover:border-violet-400"}`,children:L.completed&&m.jsx(cf,{className:"w-2.5 h-2.5 stroke-[3]"})})]},L.id))})]}),m.jsxs("div",{className:`pt-3 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${V?"border-zinc-200 text-zinc-600":"border-white/[0.08] text-zinc-400"}`,children:[m.jsxs("div",{className:`flex items-center gap-1.5 ${V?"text-zinc-700":"text-zinc-400"}`,children:[m.jsx(Fr,{className:`w-3.5 h-3.5 ${V?"text-amber-500":"text-violet-300"}`}),m.jsx("span",{children:"Daily Consistency"})]}),m.jsxs("span",{className:`font-display font-medium tabular-nums ${V?"text-zinc-900":"text-zinc-200"}`,children:[ge,"% kept"]})]})]}),m.jsxs("div",{className:"p-6 rounded-[2rem] cosmic-card flex flex-col justify-between h-auto min-h-[310px] lg:h-full overflow-hidden transition-all duration-300",children:[m.jsxs("div",{className:"flex-1 min-h-0 flex flex-col space-y-3",children:[m.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${V?"border-zinc-200":"border-white/[0.08]"}`,children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(Cf,{className:`w-4 h-4 ${V?"text-violet-700":"text-violet-300"}`}),m.jsx("h2",{className:`text-xs font-display uppercase tracking-[0.18em] font-semibold ${V?"text-zinc-900":"text-white"}`,children:"Deep Study Console"})]}),m.jsx("span",{className:`text-[10px] font-display px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${M?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 animate-pulse":V?"bg-zinc-100 text-zinc-600 border border-zinc-200":"bg-white/[0.06] text-zinc-400 border border-white/[0.08]"}`,children:M?"RUNNING":"STOPPED"})]}),m.jsxs("div",{className:"text-center py-2",children:[m.jsx("div",{className:`text-5xl lg:text-6xl font-display font-light tracking-widest leading-none tabular-nums ${V?"text-zinc-900":"text-white"}`,children:Xe(_)}),m.jsx("p",{className:`text-[10px] font-display tracking-[0.2em] uppercase mt-2 ${V?"text-zinc-500":"text-zinc-400"}`,children:"Background-Resilient Stopwatch"})]}),m.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[m.jsx("input",{type:"text","aria-label":"Focus session mode",value:Vt,onChange:L=>tn(L.target.value),placeholder:"Mode (e.g. Deep Work)",className:"w-full cosmic-input rounded-xl px-3 py-2 text-xs placeholder-zinc-500"}),m.jsx("input",{type:"text","aria-label":"Focus session topic",value:zt,onChange:L=>{$t(L.target.value),b(L.target.value)},placeholder:"Topic (e.g. Design)",className:"w-full cosmic-input rounded-xl px-3 py-2 text-xs placeholder-zinc-500"})]}),m.jsxs("div",{className:"flex gap-2",children:[m.jsxs("button",{type:"button",onClick:C,className:`flex-1 py-3 rounded-2xl font-display text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 border transition-all cursor-pointer ${V?"bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-800 shadow-[0_4px_16px_rgba(24,24,27,0.18)]":"bg-violet-600 hover:bg-violet-500 text-white border-violet-400/30 shadow-[0_0_24px_rgba(124,58,237,0.40)]"}`,children:[M?m.jsx(os,{className:"w-4 h-4"}):m.jsx(ls,{className:"w-4 h-4 ml-0.5 fill-current"}),m.jsx("span",{children:M?"Pause Focus":"Start Focus"})]}),m.jsx("button",{type:"button","aria-label":"Reset stopwatch",onClick:y,className:`px-3.5 py-3 rounded-2xl border transition-colors cursor-pointer ${V?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white border-white/[0.08]"}`,title:"Reset stopwatch",children:m.jsx(Rf,{className:"w-3.5 h-3.5"})})]})]}),m.jsxs("div",{className:`pt-3 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${V?"border-zinc-200 text-zinc-600":"border-white/[0.08] text-zinc-400"}`,children:[m.jsxs("span",{children:["Weekly: ",m.jsxs("strong",{className:`font-display ${V?"text-zinc-900":"text-zinc-200"}`,children:[Te,"h"]})," / 15h"]}),m.jsxs("span",{className:`font-display font-medium tabular-nums ${V?"text-zinc-900":"text-zinc-200"}`,children:[Pe,"% quota"]})]})]})]}),m.jsxs("footer",{className:"relative shrink-0 flex flex-wrap items-center justify-between w-full pt-3 pb-2 sm:pb-3 z-20 gap-3 mt-auto",children:[m.jsx("div",{className:"hidden xl:block w-48 shrink-0 pointer-events-none"}),m.jsxs("div",{className:`flex flex-wrap items-center justify-center gap-4 sm:gap-6 px-5 sm:px-7 py-2.5 rounded-full cosmic-dock text-xs font-sans mx-auto ${V?"text-zinc-800":"text-zinc-300"}`,children:[m.jsxs("div",{role:"button",tabIndex:0,onClick:()=>z(N%12+1,0),onKeyDown:L=>{(L.key==="Enter"||L.key===" ")&&z(N%12+1,0)},"aria-label":`Cycle sleep hours. Current: ${N} hours`,className:`flex items-center gap-1.5 cursor-pointer transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-violet-400/50 rounded-lg px-1.5 py-0.5 ${V?"hover:text-black text-zinc-700":"hover:text-white text-zinc-300"}`,title:"Click or press Enter to cycle sleep hours",children:[m.jsx(ec,{className:`w-3.5 h-3.5 ${V?"text-zinc-600":"text-zinc-300"}`}),m.jsxs("span",{children:["Sleep: ",m.jsxs("strong",{className:`font-display tabular-nums ${V?"text-zinc-900 font-bold":"text-white"}`,children:[N,"h"]})]})]}),m.jsx("span",{className:V?"text-zinc-300":"text-white/[0.1]",children:"•"}),m.jsxs("div",{className:`flex items-center gap-1.5 px-1.5 py-0.5 ${V?"text-zinc-700":"text-zinc-300"}`,children:[m.jsx(_b,{className:`w-3.5 h-3.5 ${V?"text-sky-600":"text-sky-400"}`}),m.jsxs("span",{children:["Water: ",m.jsx("strong",{className:`font-display tabular-nums ${V?"text-zinc-900 font-bold":"text-white"}`,children:Math.round(R/100*8)}),"/8"]}),m.jsxs("div",{className:"flex items-center gap-1 ml-0.5",children:[m.jsx("button",{type:"button","aria-label":"Decrease water count by 1 glass",onClick:()=>F(L=>Math.max(0,L-12.5)),className:`w-4 h-4 rounded-md border flex items-center justify-center text-[10px] transition-colors cursor-pointer ${V?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.05] hover:bg-white/[0.15] border-white/[0.1] text-white"}`,children:"-"}),m.jsx("button",{type:"button","aria-label":"Increase water count by 1 glass",onClick:()=>F(L=>Math.min(100,L+12.5)),className:`w-4 h-4 rounded-md border flex items-center justify-center text-[10px] transition-colors cursor-pointer ${V?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.05] hover:bg-white/[0.15] border-white/[0.1] text-white"}`,children:"+"})]})]}),m.jsx("span",{className:V?"text-zinc-300":"text-white/[0.1]",children:"•"}),m.jsxs("div",{role:"button",tabIndex:0,onClick:()=>w(D>=10?1:D+1),onKeyDown:L=>{(L.key==="Enter"||L.key===" ")&&w(D>=10?1:D+1)},"aria-label":`Cycle day rating. Current: ${D} out of 10`,className:`flex items-center gap-1.5 cursor-pointer transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-violet-400/50 rounded-lg px-1.5 py-0.5 ${V?"hover:text-black text-zinc-700":"hover:text-white text-zinc-300"}`,title:"Click or press Enter to cycle rating",children:[m.jsx(Fr,{className:"w-3.5 h-3.5 text-amber-500"}),m.jsxs("span",{children:["Day Rating: ",m.jsxs("strong",{className:`font-display tabular-nums ${V?"text-zinc-900 font-bold":"text-white"}`,children:[D,"/10"]})]})]})]}),m.jsxs("div",{onClick:()=>ke(!0),className:`flex items-center gap-2.5 px-3.5 py-2 rounded-2xl cosmic-dock text-xs cursor-pointer group transition-all shrink-0 ml-auto xl:ml-0 ${V?"text-zinc-800":"text-white"}`,title:"Open Focus Audio Sanctuary",children:[m.jsx("div",{className:`w-7 h-7 rounded-xl flex items-center justify-center transition-all ${X==="youtube"?re?"bg-red-600 text-white shadow-[0_0_12px_rgba(239,68,68,0.5)]":V?"bg-red-50 text-red-600 border border-red-200":"bg-red-500/20 text-red-300":H?"bg-violet-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.5)]":V?"bg-zinc-100 text-zinc-700 group-hover:bg-zinc-200":"bg-white/[0.06] text-zinc-400 group-hover:text-white"}`,children:X==="youtube"?m.jsx(Za,{className:"w-3.5 h-3.5"}):m.jsx(Ql,{className:"w-3.5 h-3.5"})}),m.jsxs("div",{className:"text-left pr-1 max-w-[130px] sm:max-w-[170px]",children:[m.jsx("p",{className:`text-[11px] font-display font-medium leading-tight truncate ${V?"text-zinc-900 group-hover:text-violet-700":"text-white group-hover:text-violet-200"}`,children:X==="youtube"?Y?Y.title:"YouTube Stream":at.title}),m.jsxs("div",{className:"flex items-center gap-2 mt-0.5",children:[m.jsx(ff,{isPlaying:X==="youtube"?re:H,color:X==="youtube"?"#ef4444":V?"#7c3aed":at.accentColor,className:"w-10 h-2.5",barCount:6}),m.jsx("span",{className:`text-[9px] font-mono ${V?"text-zinc-500":"text-zinc-400"}`,children:X==="youtube"?re?"Streaming":"Ready":H?"Playing":"Ready"})]})]}),X==="youtube"&&(Y==null?void 0:Y.type)==="playlist"&&m.jsxs("div",{className:"flex items-center gap-1",children:[m.jsx("button",{type:"button",onClick:L=>{L.stopPropagation(),ne()},className:`w-5 h-5 rounded flex items-center justify-center transition-all ${V?"hover:bg-zinc-200 text-zinc-700":"hover:bg-white/20 text-zinc-300"}`,title:"Previous Track",children:m.jsx(tc,{className:"w-3 h-3"})}),m.jsx("button",{type:"button",onClick:L=>{L.stopPropagation(),I()},className:`w-5 h-5 rounded flex items-center justify-center transition-all ${V?"hover:bg-zinc-200 text-zinc-700":"hover:bg-white/20 text-zinc-300"}`,title:"Next Track",children:m.jsx(nc,{className:"w-3 h-3"})})]}),X==="youtube"&&re&&m.jsx("button",{type:"button",onClick:L=>{L.stopPropagation(),$();try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}},className:`w-5 h-5 rounded flex items-center justify-center transition-all cursor-pointer ${J?"bg-amber-500 text-black shadow-sm animate-pulse":V?"text-zinc-600 hover:text-black":"text-zinc-400 hover:text-white"}`,title:J?"Unmute Sound":"Mute Sound","aria-label":J?"Unmute Sound":"Mute Sound",children:J?m.jsx(Nf,{className:"w-3 h-3"}):m.jsx(ic,{className:"w-3 h-3"})}),m.jsx("button",{type:"button",onClick:L=>{L.stopPropagation(),X==="youtube"?q():H?G():W(j)},className:`w-6 h-6 rounded-lg flex items-center justify-center transition-all cursor-pointer ${(X==="youtube"?re:H)?X==="youtube"?"bg-red-600 text-white shadow-sm":"bg-violet-600 text-white":V?"bg-zinc-200 hover:bg-zinc-300 text-zinc-800":"bg-white/[0.1] hover:bg-white text-zinc-300 hover:text-black"}`,title:(X==="youtube"?re:H)?"Pause audio":"Play audio","aria-label":(X==="youtube"?re:H)?"Pause audio":"Play audio",children:(X==="youtube"?re:H)?m.jsx(os,{className:"w-3 h-3 fill-current"}):m.jsx(ls,{className:"w-3 h-3 ml-0.5 fill-current"})})]})]})]}),!P&&m.jsxs("button",{onClick:()=>Ht(!0),className:`fixed left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-left px-3.5 py-1.5 rounded-t-xl backdrop-blur-xl border text-[10px] font-mono tracking-widest uppercase transition-all z-30 flex items-center gap-1.5 shadow-lg ${V?"bg-[#ffffff]/90 hover:bg-white border-zinc-300 text-zinc-800":"bg-[#14162e]/90 hover:bg-[#1a1d3d] border-white/[0.1] text-zinc-300 hover:text-white"}`,children:[m.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-amber-400"}),m.jsx("span",{children:"ROUTINE T.T 📋"})]}),K&&m.jsxs("div",{className:"fixed inset-0 z-50 flex",children:[m.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm",onClick:()=>Ht(!1)}),m.jsxs("aside",{className:`relative z-10 w-80 sm:w-96 max-w-[90vw] h-full backdrop-blur-3xl border-r shadow-2xl p-6 flex flex-col justify-between ${V?"bg-[#faf8f4]/98 border-zinc-200 text-zinc-900":"bg-[#0d0f17]/95 border-white/[0.1] text-white"}`,children:[m.jsxs("div",{className:"space-y-4",children:[m.jsxs("div",{className:`flex items-center justify-between pb-3.5 border-b ${V?"border-zinc-200":"border-white/[0.08]"}`,children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(t0,{className:`w-4 h-4 ${V?"text-violet-700":"text-violet-300"}`}),m.jsx("h3",{className:`text-xs font-sans uppercase tracking-[0.16em] font-semibold ${V?"text-zinc-900":"text-white"}`,children:"Daily Routine (T.T)"})]}),m.jsx("button",{onClick:()=>Ht(!1),className:`transition-colors ${V?"text-zinc-500 hover:text-black":"text-zinc-400 hover:text-white"}`,children:m.jsx(uo,{className:"w-4 h-4"})})]}),m.jsxs("div",{className:"space-y-2.5 text-xs overflow-y-auto max-h-[58vh] pr-1",children:[d.map(L=>m.jsxs("div",{className:`p-3.5 rounded-2xl border transition-all relative group ${V?"bg-white/80 border-zinc-200 shadow-sm":"bg-white/[0.03] border-white/[0.08]"}`,children:[m.jsxs("div",{className:"flex items-center justify-between pb-1.5",children:[m.jsxs("span",{className:"font-semibold text-amber-500 flex items-center gap-1.5",children:[m.jsx(Rb,{className:"w-3.5 h-3.5"})," ",L.title]}),m.jsxs("div",{className:"flex items-center gap-1.5",children:[m.jsx("span",{className:`text-[10px] font-mono ${V?"text-zinc-500":"text-zinc-400"}`,children:L.timeRange}),d.length>1&&m.jsx("button",{type:"button",onClick:()=>x(L.id),className:"opacity-0 group-hover:opacity-100 p-1 text-zinc-400 hover:text-red-400 transition-opacity cursor-pointer",title:"Delete protocol block",children:m.jsx(df,{className:"w-3 h-3"})})]})]}),m.jsx("p",{className:`text-[11px] leading-relaxed ${V?"text-zinc-700":"text-zinc-300"}`,children:L.description})]},L.id)),Ct?m.jsxs("form",{onSubmit:L=>{L.preventDefault(),ze.trim()&&U.trim()&&(h({title:ze.trim(),timeRange:Ye.trim()||"Flexible",description:U.trim(),iconType:"custom"}),Pt(""),tt(""),E(""),gt(!1))},className:`p-3 rounded-2xl border space-y-2 ${V?"bg-white border-zinc-300 shadow-sm":"bg-white/[0.05] border-white/[0.12]"}`,children:[m.jsx("input",{type:"text",placeholder:"Protocol title (e.g. Creative Sprint)",value:ze,onChange:L=>Pt(L.target.value),className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs",required:!0}),m.jsx("input",{type:"text",placeholder:"Time range (e.g. 14:00 – 16:00)",value:Ye,onChange:L=>tt(L.target.value),className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"}),m.jsx("textarea",{placeholder:"Protocol description / intentions...",value:U,onChange:L=>E(L.target.value),className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs resize-none h-16",required:!0}),m.jsxs("div",{className:"flex items-center justify-end gap-1.5",children:[m.jsx("button",{type:"button",onClick:()=>gt(!1),className:`px-2.5 py-1 rounded-lg text-[11px] ${V?"text-zinc-600 hover:text-black":"text-zinc-400 hover:text-white"}`,children:"Cancel"}),m.jsx("button",{type:"submit",className:"px-3 py-1 rounded-lg text-[11px] bg-violet-600 hover:bg-violet-500 text-white font-medium cursor-pointer",children:"Add Block"})]})]}):m.jsxs("button",{type:"button",onClick:()=>gt(!0),className:`w-full py-2 rounded-xl border border-dashed flex items-center justify-center gap-1.5 text-[11px] transition-all cursor-pointer ${V?"border-zinc-300 hover:border-zinc-400 text-zinc-600 hover:text-zinc-900 bg-white/40":"border-white/10 hover:border-white/20 text-zinc-400 hover:text-white bg-white/[0.01]"}`,children:[m.jsx(jl,{className:"w-3 h-3"}),m.jsx("span",{children:"Add Custom Protocol Block"})]})]})]}),m.jsxs("div",{className:"flex items-center gap-2 pt-2",children:[m.jsx("button",{type:"button",onClick:v,className:`px-3 py-2.5 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${V?"border-zinc-200 text-zinc-600 hover:bg-zinc-100":"border-white/10 text-zinc-400 hover:bg-white/[0.05] hover:text-white"}`,title:"Reset to default protocols",children:"Reset"}),m.jsx("button",{type:"button",onClick:()=>Ht(!1),className:`flex-1 py-2.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${V?"bg-zinc-900 hover:bg-zinc-800 text-white":"bg-white/[0.06] hover:bg-white/[0.12] text-white"}`,children:"Close Routine"})]})]})]}),m.jsx(Vb,{isOpen:lt,onClose:()=>He(!1)}),m.jsx(Gb,{isOpen:we,onClose:()=>De(!1)}),m.jsx(Hb,{isOpen:Me,onClose:()=>ke(!1)})]})},jb=()=>{const{wallpaperTheme:s,appTheme:e}=Br(),t=e==="light";return m.jsxs("div",{"data-theme":s,className:`theme-${e} relative w-screen h-screen max-h-screen overflow-hidden text-[var(--text-primary)] font-sans transition-colors duration-200 ${t?"bg-[#f7f5f0]/95":"bg-[#060814]"}`,children:[m.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--card-bg-elevated)] focus:text-[var(--text-primary)] focus:rounded-xl focus:border focus:border-[var(--card-border)] focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-violet-400 font-sans text-xs font-semibold",children:"Skip to main content"}),m.jsx(Bv,{}),m.jsx(ob,{}),m.jsx(Ib,{}),m.jsx("div",{className:"pointer-events-none fixed inset-0 z-20 dreamy-grain opacity-40 mix-blend-overlay"}),m.jsx("main",{id:"main-content",className:"w-full h-full overflow-y-auto lg:overflow-hidden relative z-10",children:m.jsx(Wb,{})})]})};function $b(){return m.jsx(Ov,{children:m.jsx(jb,{})})}const a0=document.getElementById("root");a0&&Iv.createRoot(a0).render(m.jsx(Av.StrictMode,{children:m.jsx($b,{})}));
