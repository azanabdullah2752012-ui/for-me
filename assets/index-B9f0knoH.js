var Av=Object.defineProperty;var Cv=(s,e,t)=>e in s?Av(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var xr=(s,e,t)=>Cv(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function c0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ju={exports:{}},Ka={},$u={exports:{}},Pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function Rv(){if(tm)return Pt;tm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function d(k){return k===null||typeof k!="object"?null:(k=v&&k[v]||k["@@iterator"],typeof k=="function"?k:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,E={};function y(k,q,pe){this.props=k,this.context=q,this.refs=E,this.updater=pe||S}y.prototype.isReactComponent={},y.prototype.setState=function(k,q){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,q,"setState")},y.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function b(){}b.prototype=y.prototype;function D(k,q,pe){this.props=k,this.context=q,this.refs=E,this.updater=pe||S}var U=D.prototype=new b;U.constructor=D,w(U,y.prototype),U.isPureReactComponent=!0;var N=Array.isArray,F=Object.prototype.hasOwnProperty,L={current:null},M={key:!0,ref:!0,__self:!0,__source:!0};function P(k,q,pe){var Y,oe={},me=null,ge=null;if(q!=null)for(Y in q.ref!==void 0&&(ge=q.ref),q.key!==void 0&&(me=""+q.key),q)F.call(q,Y)&&!M.hasOwnProperty(Y)&&(oe[Y]=q[Y]);var be=arguments.length-2;if(be===1)oe.children=pe;else if(1<be){for(var Ie=Array(be),rt=0;rt<be;rt++)Ie[rt]=arguments[rt+2];oe.children=Ie}if(k&&k.defaultProps)for(Y in be=k.defaultProps,be)oe[Y]===void 0&&(oe[Y]=be[Y]);return{$$typeof:s,type:k,key:me,ref:ge,props:oe,_owner:L.current}}function J(k,q){return{$$typeof:s,type:k.type,key:q,ref:k.ref,props:k.props,_owner:k._owner}}function j(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function W(k){var q={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(pe){return q[pe]})}var B=/\/+/g;function X(k,q){return typeof k=="object"&&k!==null&&k.key!=null?W(""+k.key):q.toString(36)}function z(k,q,pe,Y,oe){var me=typeof k;(me==="undefined"||me==="boolean")&&(k=null);var ge=!1;if(k===null)ge=!0;else switch(me){case"string":case"number":ge=!0;break;case"object":switch(k.$$typeof){case s:case e:ge=!0}}if(ge)return ge=k,oe=oe(ge),k=Y===""?"."+X(ge,0):Y,N(oe)?(pe="",k!=null&&(pe=k.replace(B,"$&/")+"/"),z(oe,q,pe,"",function(rt){return rt})):oe!=null&&(j(oe)&&(oe=J(oe,pe+(!oe.key||ge&&ge.key===oe.key?"":(""+oe.key).replace(B,"$&/")+"/")+k)),q.push(oe)),1;if(ge=0,Y=Y===""?".":Y+":",N(k))for(var be=0;be<k.length;be++){me=k[be];var Ie=Y+X(me,be);ge+=z(me,q,pe,Ie,oe)}else if(Ie=d(k),typeof Ie=="function")for(k=Ie.call(k),be=0;!(me=k.next()).done;)me=me.value,Ie=Y+X(me,be++),ge+=z(me,q,pe,Ie,oe);else if(me==="object")throw q=String(k),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return ge}function te(k,q,pe){if(k==null)return k;var Y=[],oe=0;return z(k,Y,"","",function(me){return q.call(pe,me,oe++)}),Y}function ce(k){if(k._status===-1){var q=k._result;q=q(),q.then(function(pe){(k._status===0||k._status===-1)&&(k._status=1,k._result=pe)},function(pe){(k._status===0||k._status===-1)&&(k._status=2,k._result=pe)}),k._status===-1&&(k._status=0,k._result=q)}if(k._status===1)return k._result.default;throw k._result}var $={current:null},re={transition:null},O={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:re,ReactCurrentOwner:L};function ee(){throw Error("act(...) is not supported in production builds of React.")}return Pt.Children={map:te,forEach:function(k,q,pe){te(k,function(){q.apply(this,arguments)},pe)},count:function(k){var q=0;return te(k,function(){q++}),q},toArray:function(k){return te(k,function(q){return q})||[]},only:function(k){if(!j(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},Pt.Component=y,Pt.Fragment=t,Pt.Profiler=o,Pt.PureComponent=D,Pt.StrictMode=r,Pt.Suspense=g,Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,Pt.act=ee,Pt.cloneElement=function(k,q,pe){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var Y=w({},k.props),oe=k.key,me=k.ref,ge=k._owner;if(q!=null){if(q.ref!==void 0&&(me=q.ref,ge=L.current),q.key!==void 0&&(oe=""+q.key),k.type&&k.type.defaultProps)var be=k.type.defaultProps;for(Ie in q)F.call(q,Ie)&&!M.hasOwnProperty(Ie)&&(Y[Ie]=q[Ie]===void 0&&be!==void 0?be[Ie]:q[Ie])}var Ie=arguments.length-2;if(Ie===1)Y.children=pe;else if(1<Ie){be=Array(Ie);for(var rt=0;rt<Ie;rt++)be[rt]=arguments[rt+2];Y.children=be}return{$$typeof:s,type:k.type,key:oe,ref:me,props:Y,_owner:ge}},Pt.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},Pt.createElement=P,Pt.createFactory=function(k){var q=P.bind(null,k);return q.type=k,q},Pt.createRef=function(){return{current:null}},Pt.forwardRef=function(k){return{$$typeof:f,render:k}},Pt.isValidElement=j,Pt.lazy=function(k){return{$$typeof:_,_payload:{_status:-1,_result:k},_init:ce}},Pt.memo=function(k,q){return{$$typeof:m,type:k,compare:q===void 0?null:q}},Pt.startTransition=function(k){var q=re.transition;re.transition={};try{k()}finally{re.transition=q}},Pt.unstable_act=ee,Pt.useCallback=function(k,q){return $.current.useCallback(k,q)},Pt.useContext=function(k){return $.current.useContext(k)},Pt.useDebugValue=function(){},Pt.useDeferredValue=function(k){return $.current.useDeferredValue(k)},Pt.useEffect=function(k,q){return $.current.useEffect(k,q)},Pt.useId=function(){return $.current.useId()},Pt.useImperativeHandle=function(k,q,pe){return $.current.useImperativeHandle(k,q,pe)},Pt.useInsertionEffect=function(k,q){return $.current.useInsertionEffect(k,q)},Pt.useLayoutEffect=function(k,q){return $.current.useLayoutEffect(k,q)},Pt.useMemo=function(k,q){return $.current.useMemo(k,q)},Pt.useReducer=function(k,q,pe){return $.current.useReducer(k,q,pe)},Pt.useRef=function(k){return $.current.useRef(k)},Pt.useState=function(k){return $.current.useState(k)},Pt.useSyncExternalStore=function(k,q,pe){return $.current.useSyncExternalStore(k,q,pe)},Pt.useTransition=function(){return $.current.useTransition()},Pt.version="18.3.1",Pt}var nm;function _f(){return nm||(nm=1,$u.exports=Rv()),$u.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im;function Nv(){if(im)return Ka;im=1;var s=_f(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,g,m){var _,v={},d=null,S=null;m!==void 0&&(d=""+m),g.key!==void 0&&(d=""+g.key),g.ref!==void 0&&(S=g.ref);for(_ in g)r.call(g,_)&&!l.hasOwnProperty(_)&&(v[_]=g[_]);if(f&&f.defaultProps)for(_ in g=f.defaultProps,g)v[_]===void 0&&(v[_]=g[_]);return{$$typeof:e,type:f,key:d,ref:S,props:v,_owner:o.current}}return Ka.Fragment=t,Ka.jsx=u,Ka.jsxs=u,Ka}var rm;function Pv(){return rm||(rm=1,ju.exports=Nv()),ju.exports}var h=Pv(),Se=_f();const Dv=c0(Se);var Sl={},Xu={exports:{}},oi={},Yu={exports:{}},qu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function Lv(){return sm||(sm=1,(function(s){function e(re,O){var ee=re.length;re.push(O);e:for(;0<ee;){var k=ee-1>>>1,q=re[k];if(0<o(q,O))re[k]=O,re[ee]=q,ee=k;else break e}}function t(re){return re.length===0?null:re[0]}function r(re){if(re.length===0)return null;var O=re[0],ee=re.pop();if(ee!==O){re[0]=ee;e:for(var k=0,q=re.length,pe=q>>>1;k<pe;){var Y=2*(k+1)-1,oe=re[Y],me=Y+1,ge=re[me];if(0>o(oe,ee))me<q&&0>o(ge,oe)?(re[k]=ge,re[me]=ee,k=me):(re[k]=oe,re[Y]=ee,k=Y);else if(me<q&&0>o(ge,ee))re[k]=ge,re[me]=ee,k=me;else break e}}return O}function o(re,O){var ee=re.sortIndex-O.sortIndex;return ee!==0?ee:re.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var g=[],m=[],_=1,v=null,d=3,S=!1,w=!1,E=!1,y=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function U(re){for(var O=t(m);O!==null;){if(O.callback===null)r(m);else if(O.startTime<=re)r(m),O.sortIndex=O.expirationTime,e(g,O);else break;O=t(m)}}function N(re){if(E=!1,U(re),!w)if(t(g)!==null)w=!0,ce(F);else{var O=t(m);O!==null&&$(N,O.startTime-re)}}function F(re,O){w=!1,E&&(E=!1,b(P),P=-1),S=!0;var ee=d;try{for(U(O),v=t(g);v!==null&&(!(v.expirationTime>O)||re&&!W());){var k=v.callback;if(typeof k=="function"){v.callback=null,d=v.priorityLevel;var q=k(v.expirationTime<=O);O=s.unstable_now(),typeof q=="function"?v.callback=q:v===t(g)&&r(g),U(O)}else r(g);v=t(g)}if(v!==null)var pe=!0;else{var Y=t(m);Y!==null&&$(N,Y.startTime-O),pe=!1}return pe}finally{v=null,d=ee,S=!1}}var L=!1,M=null,P=-1,J=5,j=-1;function W(){return!(s.unstable_now()-j<J)}function B(){if(M!==null){var re=s.unstable_now();j=re;var O=!0;try{O=M(!0,re)}finally{O?X():(L=!1,M=null)}}else L=!1}var X;if(typeof D=="function")X=function(){D(B)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,te=z.port2;z.port1.onmessage=B,X=function(){te.postMessage(null)}}else X=function(){y(B,0)};function ce(re){M=re,L||(L=!0,X())}function $(re,O){P=y(function(){re(s.unstable_now())},O)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(re){re.callback=null},s.unstable_continueExecution=function(){w||S||(w=!0,ce(F))},s.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<re?Math.floor(1e3/re):5},s.unstable_getCurrentPriorityLevel=function(){return d},s.unstable_getFirstCallbackNode=function(){return t(g)},s.unstable_next=function(re){switch(d){case 1:case 2:case 3:var O=3;break;default:O=d}var ee=d;d=O;try{return re()}finally{d=ee}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(re,O){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var ee=d;d=re;try{return O()}finally{d=ee}},s.unstable_scheduleCallback=function(re,O,ee){var k=s.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?k+ee:k):ee=k,re){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=ee+q,re={id:_++,callback:O,priorityLevel:re,startTime:ee,expirationTime:q,sortIndex:-1},ee>k?(re.sortIndex=ee,e(m,re),t(g)===null&&re===t(m)&&(E?(b(P),P=-1):E=!0,$(N,ee-k))):(re.sortIndex=q,e(g,re),w||S||(w=!0,ce(F))),re},s.unstable_shouldYield=W,s.unstable_wrapCallback=function(re){var O=d;return function(){var ee=d;d=O;try{return re.apply(this,arguments)}finally{d=ee}}}})(qu)),qu}var am;function Iv(){return am||(am=1,Yu.exports=Lv()),Yu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om;function kv(){if(om)return oi;om=1;var s=_f(),e=Iv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function d(n){return g.call(v,n)?!0:g.call(_,n)?!1:m.test(n)?v[n]=!0:(_[n]=!0,!1)}function S(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,a,c){if(i===null||typeof i>"u"||S(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function E(n,i,a,c,p,x,A){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=x,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new E(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(b,D);y[i]=new E(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(b,D);y[i]=new E(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(b,D);y[i]=new E(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function U(n,i,a,c){var p=y.hasOwnProperty(i)?y[i]:null;(p!==null?p.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,p,c)&&(a=null),c||p===null?d(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):p.mustUseProperty?n[p.propertyName]=a===null?p.type===3?!1:"":a:(i=p.attributeName,c=p.attributeNamespace,a===null?n.removeAttribute(i):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var N=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),L=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),W=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),re=Symbol.iterator;function O(n){return n===null||typeof n!="object"?null:(n=re&&n[re]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Object.assign,k;function q(n){if(k===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+n}var pe=!1;function Y(n,i){if(!n||pe)return"";pe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ye){var c=ye}Reflect.construct(n,[],i)}else{try{i.call()}catch(ye){c=ye}n.call(i.prototype)}else{try{throw Error()}catch(ye){c=ye}n()}}catch(ye){if(ye&&c&&typeof ye.stack=="string"){for(var p=ye.stack.split(`
`),x=c.stack.split(`
`),A=p.length-1,G=x.length-1;1<=A&&0<=G&&p[A]!==x[G];)G--;for(;1<=A&&0<=G;A--,G--)if(p[A]!==x[G]){if(A!==1||G!==1)do if(A--,G--,0>G||p[A]!==x[G]){var Z=`
`+p[A].replace(" at new "," at ");return n.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",n.displayName)),Z}while(1<=A&&0<=G);break}}}finally{pe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?q(n):""}function oe(n){switch(n.tag){case 5:return q(n.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return n=Y(n.type,!1),n;case 11:return n=Y(n.type.render,!1),n;case 1:return n=Y(n.type,!0),n;default:return""}}function me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case M:return"Fragment";case L:return"Portal";case J:return"Profiler";case P:return"StrictMode";case X:return"Suspense";case z:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case W:return(n.displayName||"Context")+".Consumer";case j:return(n._context.displayName||"Context")+".Provider";case B:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case te:return i=n.displayName||null,i!==null?i:me(n.type)||"Memo";case ce:i=n._payload,n=n._init;try{return me(n(i))}catch{}}return null}function ge(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return me(i);case 8:return i===P?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function be(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ie(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function rt(n){var i=Ie(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,x=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return p.call(this)},set:function(A){c=""+A,x.call(this,A)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(A){c=""+A},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function $e(n){n._valueTracker||(n._valueTracker=rt(n))}function Pe(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ie(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Ve(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Xe(n,i){var a=i.checked;return ee({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function it(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=be(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function vt(n,i){i=i.checked,i!=null&&U(n,"checked",i,!1)}function ft(n,i){vt(n,i);var a=be(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Tt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Tt(n,i.type,be(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function ot(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Tt(n,i,a){(i!=="number"||Ve(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var de=Array.isArray;function bt(n,i,a,c){if(n=n.options,i){i={};for(var p=0;p<a.length;p++)i["$"+a[p]]=!0;for(a=0;a<n.length;a++)p=i.hasOwnProperty("$"+n[a].value),n[a].selected!==p&&(n[a].selected=p),p&&c&&(n[a].defaultSelected=!0)}else{for(a=""+be(a),i=null,p=0;p<n.length;p++){if(n[p].value===a){n[p].selected=!0,c&&(n[p].defaultSelected=!0);return}i!==null||n[p].disabled||(i=n[p])}i!==null&&(i.selected=!0)}}function Vt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function on(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(de(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:be(a)}}function Q(n,i){var a=be(i.value),c=be(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function pn(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Mt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Mt(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ke,At=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,p){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,p)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ke=ke||document.createElement("div"),ke.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ke.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ye(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var ct={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},R=["Webkit","ms","Moz","O"];Object.keys(ct).forEach(function(n){R.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ct[i]=ct[n]})});function T(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||ct.hasOwnProperty(n)&&ct[n]?(""+i).trim():i+"px"}function ae(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,p=T(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,p):n[a]=p}}var Ne=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Me(n,i){if(i){if(Ne[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Le(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Be=null;function ve(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var we=null,Oe=null,V=null;function Te(n){if(n=ka(n)){if(typeof we!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Uo(i),we(n.stateNode,n.type,i))}}function _e(n){Oe?V?V.push(n):V=[n]:Oe=n}function Ae(){if(Oe){var n=Oe,i=V;if(V=Oe=null,Te(n),i)for(n=0;n<i.length;n++)Te(i[n])}}function he(n,i){return n(i)}function Ee(){}var Ge=!1;function Qe(n,i,a){if(Ge)return n(i,a);Ge=!0;try{return he(n,i,a)}finally{Ge=!1,(Oe!==null||V!==null)&&(Ee(),Ae())}}function Ce(n,i){var a=n.stateNode;if(a===null)return null;var c=Uo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Ze=!1;if(f)try{var st={};Object.defineProperty(st,"passive",{get:function(){Ze=!0}}),window.addEventListener("test",st,st),window.removeEventListener("test",st,st)}catch{Ze=!1}function We(n,i,a,c,p,x,A,G,Z){var ye=Array.prototype.slice.call(arguments,3);try{i.apply(a,ye)}catch(ze){this.onError(ze)}}var ht=!1,Bt=null,tn=!1,rn=null,ln={onError:function(n){ht=!0,Bt=n}};function Yt(n,i,a,c,p,x,A,G,Z){ht=!1,Bt=null,We.apply(ln,arguments)}function Hn(n,i,a,c,p,x,A,G,Z){if(Yt.apply(this,arguments),ht){if(ht){var ye=Bt;ht=!1,Bt=null}else throw Error(t(198));tn||(tn=!0,rn=ye)}}function bn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function sn(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function gt(n){if(bn(n)!==n)throw Error(t(188))}function It(n){var i=n.alternate;if(!i){if(i=bn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var p=a.return;if(p===null)break;var x=p.alternate;if(x===null){if(c=p.return,c!==null){a=c;continue}break}if(p.child===x.child){for(x=p.child;x;){if(x===a)return gt(p),n;if(x===c)return gt(p),i;x=x.sibling}throw Error(t(188))}if(a.return!==c.return)a=p,c=x;else{for(var A=!1,G=p.child;G;){if(G===a){A=!0,a=p,c=x;break}if(G===c){A=!0,c=p,a=x;break}G=G.sibling}if(!A){for(G=x.child;G;){if(G===a){A=!0,a=x,c=p;break}if(G===c){A=!0,c=x,a=p;break}G=G.sibling}if(!A)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Et(n){return n=It(n),n!==null?Jt(n):null}function Jt(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Jt(n);if(i!==null)return i;n=n.sibling}return null}var nn=e.unstable_scheduleCallback,Gn=e.unstable_cancelCallback,Vn=e.unstable_shouldYield,Qt=e.unstable_requestPaint,jt=e.unstable_now,Rr=e.unstable_getCurrentPriorityLevel,ui=e.unstable_ImmediatePriority,Si=e.unstable_UserBlockingPriority,bi=e.unstable_NormalPriority,Nr=e.unstable_LowPriority,C=e.unstable_IdlePriority,K=null,ue=null;function I(n){if(ue&&typeof ue.onCommitFiberRoot=="function")try{ue.onCommitFiberRoot(K,n,void 0,(n.current.flags&128)===128)}catch{}}var H=Math.clz32?Math.clz32:Re,se=Math.log,De=Math.LN2;function Re(n){return n>>>=0,n===0?32:31-(se(n)/De|0)|0}var Fe=64,Ke=4194304;function tt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function xt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,p=n.suspendedLanes,x=n.pingedLanes,A=a&268435455;if(A!==0){var G=A&~p;G!==0?c=tt(G):(x&=A,x!==0&&(c=tt(x)))}else A=a&~p,A!==0?c=tt(A):x!==0&&(c=tt(x));if(c===0)return 0;if(i!==0&&i!==c&&(i&p)===0&&(p=c&-c,x=i&-i,p>=x||p===16&&(x&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-H(i),p=1<<a,c|=n[a],i&=~p;return c}function qe(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _t(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,p=n.expirationTimes,x=n.pendingLanes;0<x;){var A=31-H(x),G=1<<A,Z=p[A];Z===-1?((G&a)===0||(G&c)!==0)&&(p[A]=qe(G,i)):Z<=i&&(n.expiredLanes|=G),x&=~G}}function en(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function qt(){var n=Fe;return Fe<<=1,(Fe&4194240)===0&&(Fe=64),n}function zt(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function dn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-H(i),n[i]=a}function nt(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var p=31-H(a),x=1<<p;i[p]=0,c[p]=-1,n[p]=-1,a&=~x}}function _n(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-H(a),p=1<<c;p&i|n[c]&i&&(n[c]|=i),a&=~p}}var ie=0;function $t(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ht,di,ti,fi,Nt,fn=!1,Pn=[],Ot=null,Kt=null,wn=null,Xi=new Map,ss=new Map,Yi=[],gc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function So(n,i){switch(n){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":wn=null;break;case"pointerover":case"pointerout":Xi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ss.delete(i.pointerId)}}function as(n,i,a,c,p,x){return n===null||n.nativeEvent!==x?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:x,targetContainers:[p]},i!==null&&(i=ka(i),i!==null&&di(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),n)}function Kg(n,i,a,c,p){switch(i){case"focusin":return Ot=as(Ot,n,i,a,c,p),!0;case"dragenter":return Kt=as(Kt,n,i,a,c,p),!0;case"mouseover":return wn=as(wn,n,i,a,c,p),!0;case"pointerover":var x=p.pointerId;return Xi.set(x,as(Xi.get(x)||null,n,i,a,c,p)),!0;case"gotpointercapture":return x=p.pointerId,ss.set(x,as(ss.get(x)||null,n,i,a,c,p)),!0}return!1}function Of(n){var i=os(n.target);if(i!==null){var a=bn(i);if(a!==null){if(i=a.tag,i===13){if(i=sn(a),i!==null){n.blockedOn=i,Nt(n.priority,function(){ti(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function bo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=vc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Be=c,a.target.dispatchEvent(c),Be=null}else return i=ka(a),i!==null&&di(i),n.blockedOn=a,!1;i.shift()}return!0}function Bf(n,i,a){bo(n)&&a.delete(i)}function Zg(){fn=!1,Ot!==null&&bo(Ot)&&(Ot=null),Kt!==null&&bo(Kt)&&(Kt=null),wn!==null&&bo(wn)&&(wn=null),Xi.forEach(Bf),ss.forEach(Bf)}function ba(n,i){n.blockedOn===i&&(n.blockedOn=null,fn||(fn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Zg)))}function wa(n){function i(p){return ba(p,n)}if(0<Pn.length){ba(Pn[0],n);for(var a=1;a<Pn.length;a++){var c=Pn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Ot!==null&&ba(Ot,n),Kt!==null&&ba(Kt,n),wn!==null&&ba(wn,n),Xi.forEach(i),ss.forEach(i),a=0;a<Yi.length;a++)c=Yi[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Yi.length&&(a=Yi[0],a.blockedOn===null);)Of(a),a.blockedOn===null&&Yi.shift()}var Ns=N.ReactCurrentBatchConfig,wo=!0;function Jg(n,i,a,c){var p=ie,x=Ns.transition;Ns.transition=null;try{ie=1,xc(n,i,a,c)}finally{ie=p,Ns.transition=x}}function Qg(n,i,a,c){var p=ie,x=Ns.transition;Ns.transition=null;try{ie=4,xc(n,i,a,c)}finally{ie=p,Ns.transition=x}}function xc(n,i,a,c){if(wo){var p=vc(n,i,a,c);if(p===null)kc(n,i,c,Mo,a),So(n,c);else if(Kg(p,n,i,a,c))c.stopPropagation();else if(So(n,c),i&4&&-1<gc.indexOf(n)){for(;p!==null;){var x=ka(p);if(x!==null&&Ht(x),x=vc(n,i,a,c),x===null&&kc(n,i,c,Mo,a),x===p)break;p=x}p!==null&&c.stopPropagation()}else kc(n,i,c,null,a)}}var Mo=null;function vc(n,i,a,c){if(Mo=null,n=ve(c),n=os(n),n!==null)if(i=bn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=sn(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Mo=n,null}function Hf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rr()){case ui:return 1;case Si:return 4;case bi:case Nr:return 16;case C:return 536870912;default:return 16}default:return 16}}var Pr=null,_c=null,Eo=null;function Gf(){if(Eo)return Eo;var n,i=_c,a=i.length,c,p="value"in Pr?Pr.value:Pr.textContent,x=p.length;for(n=0;n<a&&i[n]===p[n];n++);var A=a-n;for(c=1;c<=A&&i[a-c]===p[x-c];c++);return Eo=p.slice(n,1<c?1-c:void 0)}function To(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ao(){return!0}function Vf(){return!1}function hi(n){function i(a,c,p,x,A){this._reactName=a,this._targetInst=p,this.type=c,this.nativeEvent=x,this.target=A,this.currentTarget=null;for(var G in n)n.hasOwnProperty(G)&&(a=n[G],this[G]=a?a(x):x[G]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Ao:Vf,this.isPropagationStopped=Vf,this}return ee(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ao)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ao)},persist:function(){},isPersistent:Ao}),i}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yc=hi(Ps),Ma=ee({},Ps,{view:0,detail:0}),ex=hi(Ma),Sc,bc,Ea,Co=ee({},Ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ea&&(Ea&&n.type==="mousemove"?(Sc=n.screenX-Ea.screenX,bc=n.screenY-Ea.screenY):bc=Sc=0,Ea=n),Sc)},movementY:function(n){return"movementY"in n?n.movementY:bc}}),Wf=hi(Co),tx=ee({},Co,{dataTransfer:0}),nx=hi(tx),ix=ee({},Ma,{relatedTarget:0}),wc=hi(ix),rx=ee({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),sx=hi(rx),ax=ee({},Ps,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ox=hi(ax),lx=ee({},Ps,{data:0}),jf=hi(lx),cx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ux={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fx(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=dx[n])?!!i[n]:!1}function Mc(){return fx}var hx=ee({},Ma,{key:function(n){if(n.key){var i=cx[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=To(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ux[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mc,charCode:function(n){return n.type==="keypress"?To(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?To(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),px=hi(hx),mx=ee({},Co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$f=hi(mx),gx=ee({},Ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mc}),xx=hi(gx),vx=ee({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),_x=hi(vx),yx=ee({},Co,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Sx=hi(yx),bx=[9,13,27,32],Ec=f&&"CompositionEvent"in window,Ta=null;f&&"documentMode"in document&&(Ta=document.documentMode);var wx=f&&"TextEvent"in window&&!Ta,Xf=f&&(!Ec||Ta&&8<Ta&&11>=Ta),Yf=" ",qf=!1;function Kf(n,i){switch(n){case"keyup":return bx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ds=!1;function Mx(n,i){switch(n){case"compositionend":return Zf(i);case"keypress":return i.which!==32?null:(qf=!0,Yf);case"textInput":return n=i.data,n===Yf&&qf?null:n;default:return null}}function Ex(n,i){if(Ds)return n==="compositionend"||!Ec&&Kf(n,i)?(n=Gf(),Eo=_c=Pr=null,Ds=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Xf&&i.locale!=="ko"?null:i.data;default:return null}}var Tx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Tx[n.type]:i==="textarea"}function Qf(n,i,a,c){_e(c),i=Lo(i,"onChange"),0<i.length&&(a=new yc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Aa=null,Ca=null;function Ax(n){xh(n,0)}function Ro(n){var i=Fs(n);if(Pe(i))return n}function Cx(n,i){if(n==="change")return i}var eh=!1;if(f){var Tc;if(f){var Ac="oninput"in document;if(!Ac){var th=document.createElement("div");th.setAttribute("oninput","return;"),Ac=typeof th.oninput=="function"}Tc=Ac}else Tc=!1;eh=Tc&&(!document.documentMode||9<document.documentMode)}function nh(){Aa&&(Aa.detachEvent("onpropertychange",ih),Ca=Aa=null)}function ih(n){if(n.propertyName==="value"&&Ro(Ca)){var i=[];Qf(i,Ca,n,ve(n)),Qe(Ax,i)}}function Rx(n,i,a){n==="focusin"?(nh(),Aa=i,Ca=a,Aa.attachEvent("onpropertychange",ih)):n==="focusout"&&nh()}function Nx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ro(Ca)}function Px(n,i){if(n==="click")return Ro(i)}function Dx(n,i){if(n==="input"||n==="change")return Ro(i)}function Lx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Pi=typeof Object.is=="function"?Object.is:Lx;function Ra(n,i){if(Pi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var p=a[c];if(!g.call(i,p)||!Pi(n[p],i[p]))return!1}return!0}function rh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function sh(n,i){var a=rh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=rh(a)}}function ah(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?ah(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function oh(){for(var n=window,i=Ve();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Ve(n.document)}return i}function Cc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Ix(n){var i=oh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&ah(a.ownerDocument.documentElement,a)){if(c!==null&&Cc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var p=a.textContent.length,x=Math.min(c.start,p);c=c.end===void 0?x:Math.min(c.end,p),!n.extend&&x>c&&(p=c,c=x,x=p),p=sh(a,x);var A=sh(a,c);p&&A&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(i=i.createRange(),i.setStart(p.node,p.offset),n.removeAllRanges(),x>c?(n.addRange(i),n.extend(A.node,A.offset)):(i.setEnd(A.node,A.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var kx=f&&"documentMode"in document&&11>=document.documentMode,Ls=null,Rc=null,Na=null,Nc=!1;function lh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Nc||Ls==null||Ls!==Ve(c)||(c=Ls,"selectionStart"in c&&Cc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Na&&Ra(Na,c)||(Na=c,c=Lo(Rc,"onSelect"),0<c.length&&(i=new yc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ls)))}function No(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Is={animationend:No("Animation","AnimationEnd"),animationiteration:No("Animation","AnimationIteration"),animationstart:No("Animation","AnimationStart"),transitionend:No("Transition","TransitionEnd")},Pc={},ch={};f&&(ch=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function Po(n){if(Pc[n])return Pc[n];if(!Is[n])return n;var i=Is[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in ch)return Pc[n]=i[a];return n}var uh=Po("animationend"),dh=Po("animationiteration"),fh=Po("animationstart"),hh=Po("transitionend"),ph=new Map,mh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(n,i){ph.set(n,i),l(i,[n])}for(var Dc=0;Dc<mh.length;Dc++){var Lc=mh[Dc],Ux=Lc.toLowerCase(),Fx=Lc[0].toUpperCase()+Lc.slice(1);Dr(Ux,"on"+Fx)}Dr(uh,"onAnimationEnd"),Dr(dh,"onAnimationIteration"),Dr(fh,"onAnimationStart"),Dr("dblclick","onDoubleClick"),Dr("focusin","onFocus"),Dr("focusout","onBlur"),Dr(hh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pa));function gh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Hn(c,i,void 0,n),n.currentTarget=null}function xh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],p=c.event;c=c.listeners;e:{var x=void 0;if(i)for(var A=c.length-1;0<=A;A--){var G=c[A],Z=G.instance,ye=G.currentTarget;if(G=G.listener,Z!==x&&p.isPropagationStopped())break e;gh(p,G,ye),x=Z}else for(A=0;A<c.length;A++){if(G=c[A],Z=G.instance,ye=G.currentTarget,G=G.listener,Z!==x&&p.isPropagationStopped())break e;gh(p,G,ye),x=Z}}}if(tn)throw n=rn,tn=!1,rn=null,n}function cn(n,i){var a=i[Hc];a===void 0&&(a=i[Hc]=new Set);var c=n+"__bubble";a.has(c)||(vh(i,n,2,!1),a.add(c))}function Ic(n,i,a){var c=0;i&&(c|=4),vh(a,n,c,i)}var Do="_reactListening"+Math.random().toString(36).slice(2);function Da(n){if(!n[Do]){n[Do]=!0,r.forEach(function(a){a!=="selectionchange"&&(zx.has(a)||Ic(a,!1,n),Ic(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Do]||(i[Do]=!0,Ic("selectionchange",!1,i))}}function vh(n,i,a,c){switch(Hf(i)){case 1:var p=Jg;break;case 4:p=Qg;break;default:p=xc}a=p.bind(null,i,a,n),p=void 0,!Ze||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),c?p!==void 0?n.addEventListener(i,a,{capture:!0,passive:p}):n.addEventListener(i,a,!0):p!==void 0?n.addEventListener(i,a,{passive:p}):n.addEventListener(i,a,!1)}function kc(n,i,a,c,p){var x=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var A=c.tag;if(A===3||A===4){var G=c.stateNode.containerInfo;if(G===p||G.nodeType===8&&G.parentNode===p)break;if(A===4)for(A=c.return;A!==null;){var Z=A.tag;if((Z===3||Z===4)&&(Z=A.stateNode.containerInfo,Z===p||Z.nodeType===8&&Z.parentNode===p))return;A=A.return}for(;G!==null;){if(A=os(G),A===null)return;if(Z=A.tag,Z===5||Z===6){c=x=A;continue e}G=G.parentNode}}c=c.return}Qe(function(){var ye=x,ze=ve(a),He=[];e:{var Ue=ph.get(n);if(Ue!==void 0){var et=yc,lt=n;switch(n){case"keypress":if(To(a)===0)break e;case"keydown":case"keyup":et=px;break;case"focusin":lt="focus",et=wc;break;case"focusout":lt="blur",et=wc;break;case"beforeblur":case"afterblur":et=wc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":et=Wf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":et=nx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":et=xx;break;case uh:case dh:case fh:et=sx;break;case hh:et=_x;break;case"scroll":et=ex;break;case"wheel":et=Sx;break;case"copy":case"cut":case"paste":et=ox;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":et=$f}var ut=(i&4)!==0,Sn=!ut&&n==="scroll",le=ut?Ue!==null?Ue+"Capture":null:Ue;ut=[];for(var ne=ye,fe;ne!==null;){fe=ne;var je=fe.stateNode;if(fe.tag===5&&je!==null&&(fe=je,le!==null&&(je=Ce(ne,le),je!=null&&ut.push(La(ne,je,fe)))),Sn)break;ne=ne.return}0<ut.length&&(Ue=new et(Ue,lt,null,a,ze),He.push({event:Ue,listeners:ut}))}}if((i&7)===0){e:{if(Ue=n==="mouseover"||n==="pointerover",et=n==="mouseout"||n==="pointerout",Ue&&a!==Be&&(lt=a.relatedTarget||a.fromElement)&&(os(lt)||lt[cr]))break e;if((et||Ue)&&(Ue=ze.window===ze?ze:(Ue=ze.ownerDocument)?Ue.defaultView||Ue.parentWindow:window,et?(lt=a.relatedTarget||a.toElement,et=ye,lt=lt?os(lt):null,lt!==null&&(Sn=bn(lt),lt!==Sn||lt.tag!==5&&lt.tag!==6)&&(lt=null)):(et=null,lt=ye),et!==lt)){if(ut=Wf,je="onMouseLeave",le="onMouseEnter",ne="mouse",(n==="pointerout"||n==="pointerover")&&(ut=$f,je="onPointerLeave",le="onPointerEnter",ne="pointer"),Sn=et==null?Ue:Fs(et),fe=lt==null?Ue:Fs(lt),Ue=new ut(je,ne+"leave",et,a,ze),Ue.target=Sn,Ue.relatedTarget=fe,je=null,os(ze)===ye&&(ut=new ut(le,ne+"enter",lt,a,ze),ut.target=fe,ut.relatedTarget=Sn,je=ut),Sn=je,et&&lt)t:{for(ut=et,le=lt,ne=0,fe=ut;fe;fe=ks(fe))ne++;for(fe=0,je=le;je;je=ks(je))fe++;for(;0<ne-fe;)ut=ks(ut),ne--;for(;0<fe-ne;)le=ks(le),fe--;for(;ne--;){if(ut===le||le!==null&&ut===le.alternate)break t;ut=ks(ut),le=ks(le)}ut=null}else ut=null;et!==null&&_h(He,Ue,et,ut,!1),lt!==null&&Sn!==null&&_h(He,Sn,lt,ut,!0)}}e:{if(Ue=ye?Fs(ye):window,et=Ue.nodeName&&Ue.nodeName.toLowerCase(),et==="select"||et==="input"&&Ue.type==="file")var dt=Cx;else if(Jf(Ue))if(eh)dt=Dx;else{dt=Nx;var pt=Rx}else(et=Ue.nodeName)&&et.toLowerCase()==="input"&&(Ue.type==="checkbox"||Ue.type==="radio")&&(dt=Px);if(dt&&(dt=dt(n,ye))){Qf(He,dt,a,ze);break e}pt&&pt(n,Ue,ye),n==="focusout"&&(pt=Ue._wrapperState)&&pt.controlled&&Ue.type==="number"&&Tt(Ue,"number",Ue.value)}switch(pt=ye?Fs(ye):window,n){case"focusin":(Jf(pt)||pt.contentEditable==="true")&&(Ls=pt,Rc=ye,Na=null);break;case"focusout":Na=Rc=Ls=null;break;case"mousedown":Nc=!0;break;case"contextmenu":case"mouseup":case"dragend":Nc=!1,lh(He,a,ze);break;case"selectionchange":if(kx)break;case"keydown":case"keyup":lh(He,a,ze)}var mt;if(Ec)e:{switch(n){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else Ds?Kf(n,a)&&(yt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(yt="onCompositionStart");yt&&(Xf&&a.locale!=="ko"&&(Ds||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&Ds&&(mt=Gf()):(Pr=ze,_c="value"in Pr?Pr.value:Pr.textContent,Ds=!0)),pt=Lo(ye,yt),0<pt.length&&(yt=new jf(yt,n,null,a,ze),He.push({event:yt,listeners:pt}),mt?yt.data=mt:(mt=Zf(a),mt!==null&&(yt.data=mt)))),(mt=wx?Mx(n,a):Ex(n,a))&&(ye=Lo(ye,"onBeforeInput"),0<ye.length&&(ze=new jf("onBeforeInput","beforeinput",null,a,ze),He.push({event:ze,listeners:ye}),ze.data=mt))}xh(He,i)})}function La(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Lo(n,i){for(var a=i+"Capture",c=[];n!==null;){var p=n,x=p.stateNode;p.tag===5&&x!==null&&(p=x,x=Ce(n,a),x!=null&&c.unshift(La(n,x,p)),x=Ce(n,i),x!=null&&c.push(La(n,x,p))),n=n.return}return c}function ks(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function _h(n,i,a,c,p){for(var x=i._reactName,A=[];a!==null&&a!==c;){var G=a,Z=G.alternate,ye=G.stateNode;if(Z!==null&&Z===c)break;G.tag===5&&ye!==null&&(G=ye,p?(Z=Ce(a,x),Z!=null&&A.unshift(La(a,Z,G))):p||(Z=Ce(a,x),Z!=null&&A.push(La(a,Z,G)))),a=a.return}A.length!==0&&n.push({event:i,listeners:A})}var Ox=/\r\n?/g,Bx=/\u0000|\uFFFD/g;function yh(n){return(typeof n=="string"?n:""+n).replace(Ox,`
`).replace(Bx,"")}function Io(n,i,a){if(i=yh(i),yh(n)!==i&&a)throw Error(t(425))}function ko(){}var Uc=null,Fc=null;function zc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Oc=typeof setTimeout=="function"?setTimeout:void 0,Hx=typeof clearTimeout=="function"?clearTimeout:void 0,Sh=typeof Promise=="function"?Promise:void 0,Gx=typeof queueMicrotask=="function"?queueMicrotask:typeof Sh<"u"?function(n){return Sh.resolve(null).then(n).catch(Vx)}:Oc;function Vx(n){setTimeout(function(){throw n})}function Bc(n,i){var a=i,c=0;do{var p=a.nextSibling;if(n.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(c===0){n.removeChild(p),wa(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=p}while(a);wa(i)}function Lr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function bh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Us=Math.random().toString(36).slice(2),qi="__reactFiber$"+Us,Ia="__reactProps$"+Us,cr="__reactContainer$"+Us,Hc="__reactEvents$"+Us,Wx="__reactListeners$"+Us,jx="__reactHandles$"+Us;function os(n){var i=n[qi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[cr]||a[qi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=bh(n);n!==null;){if(a=n[qi])return a;n=bh(n)}return i}n=a,a=n.parentNode}return null}function ka(n){return n=n[qi]||n[cr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Fs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Uo(n){return n[Ia]||null}var Gc=[],zs=-1;function Ir(n){return{current:n}}function un(n){0>zs||(n.current=Gc[zs],Gc[zs]=null,zs--)}function an(n,i){zs++,Gc[zs]=n.current,n.current=i}var kr={},Wn=Ir(kr),ni=Ir(!1),ls=kr;function Os(n,i){var a=n.type.contextTypes;if(!a)return kr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var p={},x;for(x in a)p[x]=i[x];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=p),p}function ii(n){return n=n.childContextTypes,n!=null}function Fo(){un(ni),un(Wn)}function wh(n,i,a){if(Wn.current!==kr)throw Error(t(168));an(Wn,i),an(ni,a)}function Mh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var p in c)if(!(p in i))throw Error(t(108,ge(n)||"Unknown",p));return ee({},a,c)}function zo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||kr,ls=Wn.current,an(Wn,n),an(ni,ni.current),!0}function Eh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Mh(n,i,ls),c.__reactInternalMemoizedMergedChildContext=n,un(ni),un(Wn),an(Wn,n)):un(ni),an(ni,a)}var ur=null,Oo=!1,Vc=!1;function Th(n){ur===null?ur=[n]:ur.push(n)}function $x(n){Oo=!0,Th(n)}function Ur(){if(!Vc&&ur!==null){Vc=!0;var n=0,i=ie;try{var a=ur;for(ie=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}ur=null,Oo=!1}catch(p){throw ur!==null&&(ur=ur.slice(n+1)),nn(ui,Ur),p}finally{ie=i,Vc=!1}}return null}var Bs=[],Hs=0,Bo=null,Ho=0,wi=[],Mi=0,cs=null,dr=1,fr="";function us(n,i){Bs[Hs++]=Ho,Bs[Hs++]=Bo,Bo=n,Ho=i}function Ah(n,i,a){wi[Mi++]=dr,wi[Mi++]=fr,wi[Mi++]=cs,cs=n;var c=dr;n=fr;var p=32-H(c)-1;c&=~(1<<p),a+=1;var x=32-H(i)+p;if(30<x){var A=p-p%5;x=(c&(1<<A)-1).toString(32),c>>=A,p-=A,dr=1<<32-H(i)+p|a<<p|c,fr=x+n}else dr=1<<x|a<<p|c,fr=n}function Wc(n){n.return!==null&&(us(n,1),Ah(n,1,0))}function jc(n){for(;n===Bo;)Bo=Bs[--Hs],Bs[Hs]=null,Ho=Bs[--Hs],Bs[Hs]=null;for(;n===cs;)cs=wi[--Mi],wi[Mi]=null,fr=wi[--Mi],wi[Mi]=null,dr=wi[--Mi],wi[Mi]=null}var pi=null,mi=null,hn=!1,Di=null;function Ch(n,i){var a=Ci(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Rh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,pi=n,mi=Lr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,pi=n,mi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=cs!==null?{id:dr,overflow:fr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Ci(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,pi=n,mi=null,!0):!1;default:return!1}}function $c(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Xc(n){if(hn){var i=mi;if(i){var a=i;if(!Rh(n,i)){if($c(n))throw Error(t(418));i=Lr(a.nextSibling);var c=pi;i&&Rh(n,i)?Ch(c,a):(n.flags=n.flags&-4097|2,hn=!1,pi=n)}}else{if($c(n))throw Error(t(418));n.flags=n.flags&-4097|2,hn=!1,pi=n}}}function Nh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;pi=n}function Go(n){if(n!==pi)return!1;if(!hn)return Nh(n),hn=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!zc(n.type,n.memoizedProps)),i&&(i=mi)){if($c(n))throw Ph(),Error(t(418));for(;i;)Ch(n,i),i=Lr(i.nextSibling)}if(Nh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){mi=Lr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}mi=null}}else mi=pi?Lr(n.stateNode.nextSibling):null;return!0}function Ph(){for(var n=mi;n;)n=Lr(n.nextSibling)}function Gs(){mi=pi=null,hn=!1}function Yc(n){Di===null?Di=[n]:Di.push(n)}var Xx=N.ReactCurrentBatchConfig;function Ua(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var p=c,x=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===x?i.ref:(i=function(A){var G=p.refs;A===null?delete G[x]:G[x]=A},i._stringRef=x,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Vo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Dh(n){var i=n._init;return i(n._payload)}function Lh(n){function i(le,ne){if(n){var fe=le.deletions;fe===null?(le.deletions=[ne],le.flags|=16):fe.push(ne)}}function a(le,ne){if(!n)return null;for(;ne!==null;)i(le,ne),ne=ne.sibling;return null}function c(le,ne){for(le=new Map;ne!==null;)ne.key!==null?le.set(ne.key,ne):le.set(ne.index,ne),ne=ne.sibling;return le}function p(le,ne){return le=Wr(le,ne),le.index=0,le.sibling=null,le}function x(le,ne,fe){return le.index=fe,n?(fe=le.alternate,fe!==null?(fe=fe.index,fe<ne?(le.flags|=2,ne):fe):(le.flags|=2,ne)):(le.flags|=1048576,ne)}function A(le){return n&&le.alternate===null&&(le.flags|=2),le}function G(le,ne,fe,je){return ne===null||ne.tag!==6?(ne=Ou(fe,le.mode,je),ne.return=le,ne):(ne=p(ne,fe),ne.return=le,ne)}function Z(le,ne,fe,je){var dt=fe.type;return dt===M?ze(le,ne,fe.props.children,je,fe.key):ne!==null&&(ne.elementType===dt||typeof dt=="object"&&dt!==null&&dt.$$typeof===ce&&Dh(dt)===ne.type)?(je=p(ne,fe.props),je.ref=Ua(le,ne,fe),je.return=le,je):(je=hl(fe.type,fe.key,fe.props,null,le.mode,je),je.ref=Ua(le,ne,fe),je.return=le,je)}function ye(le,ne,fe,je){return ne===null||ne.tag!==4||ne.stateNode.containerInfo!==fe.containerInfo||ne.stateNode.implementation!==fe.implementation?(ne=Bu(fe,le.mode,je),ne.return=le,ne):(ne=p(ne,fe.children||[]),ne.return=le,ne)}function ze(le,ne,fe,je,dt){return ne===null||ne.tag!==7?(ne=vs(fe,le.mode,je,dt),ne.return=le,ne):(ne=p(ne,fe),ne.return=le,ne)}function He(le,ne,fe){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return ne=Ou(""+ne,le.mode,fe),ne.return=le,ne;if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case F:return fe=hl(ne.type,ne.key,ne.props,null,le.mode,fe),fe.ref=Ua(le,null,ne),fe.return=le,fe;case L:return ne=Bu(ne,le.mode,fe),ne.return=le,ne;case ce:var je=ne._init;return He(le,je(ne._payload),fe)}if(de(ne)||O(ne))return ne=vs(ne,le.mode,fe,null),ne.return=le,ne;Vo(le,ne)}return null}function Ue(le,ne,fe,je){var dt=ne!==null?ne.key:null;if(typeof fe=="string"&&fe!==""||typeof fe=="number")return dt!==null?null:G(le,ne,""+fe,je);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case F:return fe.key===dt?Z(le,ne,fe,je):null;case L:return fe.key===dt?ye(le,ne,fe,je):null;case ce:return dt=fe._init,Ue(le,ne,dt(fe._payload),je)}if(de(fe)||O(fe))return dt!==null?null:ze(le,ne,fe,je,null);Vo(le,fe)}return null}function et(le,ne,fe,je,dt){if(typeof je=="string"&&je!==""||typeof je=="number")return le=le.get(fe)||null,G(ne,le,""+je,dt);if(typeof je=="object"&&je!==null){switch(je.$$typeof){case F:return le=le.get(je.key===null?fe:je.key)||null,Z(ne,le,je,dt);case L:return le=le.get(je.key===null?fe:je.key)||null,ye(ne,le,je,dt);case ce:var pt=je._init;return et(le,ne,fe,pt(je._payload),dt)}if(de(je)||O(je))return le=le.get(fe)||null,ze(ne,le,je,dt,null);Vo(ne,je)}return null}function lt(le,ne,fe,je){for(var dt=null,pt=null,mt=ne,yt=ne=0,In=null;mt!==null&&yt<fe.length;yt++){mt.index>yt?(In=mt,mt=null):In=mt.sibling;var Wt=Ue(le,mt,fe[yt],je);if(Wt===null){mt===null&&(mt=In);break}n&&mt&&Wt.alternate===null&&i(le,mt),ne=x(Wt,ne,yt),pt===null?dt=Wt:pt.sibling=Wt,pt=Wt,mt=In}if(yt===fe.length)return a(le,mt),hn&&us(le,yt),dt;if(mt===null){for(;yt<fe.length;yt++)mt=He(le,fe[yt],je),mt!==null&&(ne=x(mt,ne,yt),pt===null?dt=mt:pt.sibling=mt,pt=mt);return hn&&us(le,yt),dt}for(mt=c(le,mt);yt<fe.length;yt++)In=et(mt,le,yt,fe[yt],je),In!==null&&(n&&In.alternate!==null&&mt.delete(In.key===null?yt:In.key),ne=x(In,ne,yt),pt===null?dt=In:pt.sibling=In,pt=In);return n&&mt.forEach(function(jr){return i(le,jr)}),hn&&us(le,yt),dt}function ut(le,ne,fe,je){var dt=O(fe);if(typeof dt!="function")throw Error(t(150));if(fe=dt.call(fe),fe==null)throw Error(t(151));for(var pt=dt=null,mt=ne,yt=ne=0,In=null,Wt=fe.next();mt!==null&&!Wt.done;yt++,Wt=fe.next()){mt.index>yt?(In=mt,mt=null):In=mt.sibling;var jr=Ue(le,mt,Wt.value,je);if(jr===null){mt===null&&(mt=In);break}n&&mt&&jr.alternate===null&&i(le,mt),ne=x(jr,ne,yt),pt===null?dt=jr:pt.sibling=jr,pt=jr,mt=In}if(Wt.done)return a(le,mt),hn&&us(le,yt),dt;if(mt===null){for(;!Wt.done;yt++,Wt=fe.next())Wt=He(le,Wt.value,je),Wt!==null&&(ne=x(Wt,ne,yt),pt===null?dt=Wt:pt.sibling=Wt,pt=Wt);return hn&&us(le,yt),dt}for(mt=c(le,mt);!Wt.done;yt++,Wt=fe.next())Wt=et(mt,le,yt,Wt.value,je),Wt!==null&&(n&&Wt.alternate!==null&&mt.delete(Wt.key===null?yt:Wt.key),ne=x(Wt,ne,yt),pt===null?dt=Wt:pt.sibling=Wt,pt=Wt);return n&&mt.forEach(function(Tv){return i(le,Tv)}),hn&&us(le,yt),dt}function Sn(le,ne,fe,je){if(typeof fe=="object"&&fe!==null&&fe.type===M&&fe.key===null&&(fe=fe.props.children),typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case F:e:{for(var dt=fe.key,pt=ne;pt!==null;){if(pt.key===dt){if(dt=fe.type,dt===M){if(pt.tag===7){a(le,pt.sibling),ne=p(pt,fe.props.children),ne.return=le,le=ne;break e}}else if(pt.elementType===dt||typeof dt=="object"&&dt!==null&&dt.$$typeof===ce&&Dh(dt)===pt.type){a(le,pt.sibling),ne=p(pt,fe.props),ne.ref=Ua(le,pt,fe),ne.return=le,le=ne;break e}a(le,pt);break}else i(le,pt);pt=pt.sibling}fe.type===M?(ne=vs(fe.props.children,le.mode,je,fe.key),ne.return=le,le=ne):(je=hl(fe.type,fe.key,fe.props,null,le.mode,je),je.ref=Ua(le,ne,fe),je.return=le,le=je)}return A(le);case L:e:{for(pt=fe.key;ne!==null;){if(ne.key===pt)if(ne.tag===4&&ne.stateNode.containerInfo===fe.containerInfo&&ne.stateNode.implementation===fe.implementation){a(le,ne.sibling),ne=p(ne,fe.children||[]),ne.return=le,le=ne;break e}else{a(le,ne);break}else i(le,ne);ne=ne.sibling}ne=Bu(fe,le.mode,je),ne.return=le,le=ne}return A(le);case ce:return pt=fe._init,Sn(le,ne,pt(fe._payload),je)}if(de(fe))return lt(le,ne,fe,je);if(O(fe))return ut(le,ne,fe,je);Vo(le,fe)}return typeof fe=="string"&&fe!==""||typeof fe=="number"?(fe=""+fe,ne!==null&&ne.tag===6?(a(le,ne.sibling),ne=p(ne,fe),ne.return=le,le=ne):(a(le,ne),ne=Ou(fe,le.mode,je),ne.return=le,le=ne),A(le)):a(le,ne)}return Sn}var Vs=Lh(!0),Ih=Lh(!1),Wo=Ir(null),jo=null,Ws=null,qc=null;function Kc(){qc=Ws=jo=null}function Zc(n){var i=Wo.current;un(Wo),n._currentValue=i}function Jc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function js(n,i){jo=n,qc=Ws=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(ri=!0),n.firstContext=null)}function Ei(n){var i=n._currentValue;if(qc!==n)if(n={context:n,memoizedValue:i,next:null},Ws===null){if(jo===null)throw Error(t(308));Ws=n,jo.dependencies={lanes:0,firstContext:n}}else Ws=Ws.next=n;return i}var ds=null;function Qc(n){ds===null?ds=[n]:ds.push(n)}function kh(n,i,a,c){var p=i.interleaved;return p===null?(a.next=a,Qc(i)):(a.next=p.next,p.next=a),i.interleaved=a,hr(n,c)}function hr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Fr=!1;function eu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function pr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function zr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Gt&2)!==0){var p=c.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),c.pending=i,hr(n,a)}return p=c.interleaved,p===null?(i.next=i,Qc(c)):(i.next=p.next,p.next=i),c.interleaved=i,hr(n,a)}function $o(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,_n(n,a)}}function Fh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var p=null,x=null;if(a=a.firstBaseUpdate,a!==null){do{var A={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};x===null?p=x=A:x=x.next=A,a=a.next}while(a!==null);x===null?p=x=i:x=x.next=i}else p=x=i;a={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:x,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Xo(n,i,a,c){var p=n.updateQueue;Fr=!1;var x=p.firstBaseUpdate,A=p.lastBaseUpdate,G=p.shared.pending;if(G!==null){p.shared.pending=null;var Z=G,ye=Z.next;Z.next=null,A===null?x=ye:A.next=ye,A=Z;var ze=n.alternate;ze!==null&&(ze=ze.updateQueue,G=ze.lastBaseUpdate,G!==A&&(G===null?ze.firstBaseUpdate=ye:G.next=ye,ze.lastBaseUpdate=Z))}if(x!==null){var He=p.baseState;A=0,ze=ye=Z=null,G=x;do{var Ue=G.lane,et=G.eventTime;if((c&Ue)===Ue){ze!==null&&(ze=ze.next={eventTime:et,lane:0,tag:G.tag,payload:G.payload,callback:G.callback,next:null});e:{var lt=n,ut=G;switch(Ue=i,et=a,ut.tag){case 1:if(lt=ut.payload,typeof lt=="function"){He=lt.call(et,He,Ue);break e}He=lt;break e;case 3:lt.flags=lt.flags&-65537|128;case 0:if(lt=ut.payload,Ue=typeof lt=="function"?lt.call(et,He,Ue):lt,Ue==null)break e;He=ee({},He,Ue);break e;case 2:Fr=!0}}G.callback!==null&&G.lane!==0&&(n.flags|=64,Ue=p.effects,Ue===null?p.effects=[G]:Ue.push(G))}else et={eventTime:et,lane:Ue,tag:G.tag,payload:G.payload,callback:G.callback,next:null},ze===null?(ye=ze=et,Z=He):ze=ze.next=et,A|=Ue;if(G=G.next,G===null){if(G=p.shared.pending,G===null)break;Ue=G,G=Ue.next,Ue.next=null,p.lastBaseUpdate=Ue,p.shared.pending=null}}while(!0);if(ze===null&&(Z=He),p.baseState=Z,p.firstBaseUpdate=ye,p.lastBaseUpdate=ze,i=p.shared.interleaved,i!==null){p=i;do A|=p.lane,p=p.next;while(p!==i)}else x===null&&(p.shared.lanes=0);ps|=A,n.lanes=A,n.memoizedState=He}}function zh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],p=c.callback;if(p!==null){if(c.callback=null,c=a,typeof p!="function")throw Error(t(191,p));p.call(c)}}}var Fa={},Ki=Ir(Fa),za=Ir(Fa),Oa=Ir(Fa);function fs(n){if(n===Fa)throw Error(t(174));return n}function tu(n,i){switch(an(Oa,i),an(za,n),an(Ki,Fa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Lt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Lt(i,n)}un(Ki),an(Ki,i)}function $s(){un(Ki),un(za),un(Oa)}function Oh(n){fs(Oa.current);var i=fs(Ki.current),a=Lt(i,n.type);i!==a&&(an(za,n),an(Ki,a))}function nu(n){za.current===n&&(un(Ki),un(za))}var mn=Ir(0);function Yo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var iu=[];function ru(){for(var n=0;n<iu.length;n++)iu[n]._workInProgressVersionPrimary=null;iu.length=0}var qo=N.ReactCurrentDispatcher,su=N.ReactCurrentBatchConfig,hs=0,gn=null,An=null,Dn=null,Ko=!1,Ba=!1,Ha=0,Yx=0;function jn(){throw Error(t(321))}function au(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Pi(n[a],i[a]))return!1;return!0}function ou(n,i,a,c,p,x){if(hs=x,gn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,qo.current=n===null||n.memoizedState===null?Jx:Qx,n=a(c,p),Ba){x=0;do{if(Ba=!1,Ha=0,25<=x)throw Error(t(301));x+=1,Dn=An=null,i.updateQueue=null,qo.current=ev,n=a(c,p)}while(Ba)}if(qo.current=Qo,i=An!==null&&An.next!==null,hs=0,Dn=An=gn=null,Ko=!1,i)throw Error(t(300));return n}function lu(){var n=Ha!==0;return Ha=0,n}function Zi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dn===null?gn.memoizedState=Dn=n:Dn=Dn.next=n,Dn}function Ti(){if(An===null){var n=gn.alternate;n=n!==null?n.memoizedState:null}else n=An.next;var i=Dn===null?gn.memoizedState:Dn.next;if(i!==null)Dn=i,An=n;else{if(n===null)throw Error(t(310));An=n,n={memoizedState:An.memoizedState,baseState:An.baseState,baseQueue:An.baseQueue,queue:An.queue,next:null},Dn===null?gn.memoizedState=Dn=n:Dn=Dn.next=n}return Dn}function Ga(n,i){return typeof i=="function"?i(n):i}function cu(n){var i=Ti(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=An,p=c.baseQueue,x=a.pending;if(x!==null){if(p!==null){var A=p.next;p.next=x.next,x.next=A}c.baseQueue=p=x,a.pending=null}if(p!==null){x=p.next,c=c.baseState;var G=A=null,Z=null,ye=x;do{var ze=ye.lane;if((hs&ze)===ze)Z!==null&&(Z=Z.next={lane:0,action:ye.action,hasEagerState:ye.hasEagerState,eagerState:ye.eagerState,next:null}),c=ye.hasEagerState?ye.eagerState:n(c,ye.action);else{var He={lane:ze,action:ye.action,hasEagerState:ye.hasEagerState,eagerState:ye.eagerState,next:null};Z===null?(G=Z=He,A=c):Z=Z.next=He,gn.lanes|=ze,ps|=ze}ye=ye.next}while(ye!==null&&ye!==x);Z===null?A=c:Z.next=G,Pi(c,i.memoizedState)||(ri=!0),i.memoizedState=c,i.baseState=A,i.baseQueue=Z,a.lastRenderedState=c}if(n=a.interleaved,n!==null){p=n;do x=p.lane,gn.lanes|=x,ps|=x,p=p.next;while(p!==n)}else p===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function uu(n){var i=Ti(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,p=a.pending,x=i.memoizedState;if(p!==null){a.pending=null;var A=p=p.next;do x=n(x,A.action),A=A.next;while(A!==p);Pi(x,i.memoizedState)||(ri=!0),i.memoizedState=x,i.baseQueue===null&&(i.baseState=x),a.lastRenderedState=x}return[x,c]}function Bh(){}function Hh(n,i){var a=gn,c=Ti(),p=i(),x=!Pi(c.memoizedState,p);if(x&&(c.memoizedState=p,ri=!0),c=c.queue,du(Wh.bind(null,a,c,n),[n]),c.getSnapshot!==i||x||Dn!==null&&Dn.memoizedState.tag&1){if(a.flags|=2048,Va(9,Vh.bind(null,a,c,p,i),void 0,null),Ln===null)throw Error(t(349));(hs&30)!==0||Gh(a,i,p)}return p}function Gh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=gn.updateQueue,i===null?(i={lastEffect:null,stores:null},gn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Vh(n,i,a,c){i.value=a,i.getSnapshot=c,jh(i)&&$h(n)}function Wh(n,i,a){return a(function(){jh(i)&&$h(n)})}function jh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Pi(n,a)}catch{return!0}}function $h(n){var i=hr(n,1);i!==null&&Ui(i,n,1,-1)}function Xh(n){var i=Zi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:n},i.queue=n,n=n.dispatch=Zx.bind(null,gn,n),[i.memoizedState,n]}function Va(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=gn.updateQueue,i===null?(i={lastEffect:null,stores:null},gn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Yh(){return Ti().memoizedState}function Zo(n,i,a,c){var p=Zi();gn.flags|=n,p.memoizedState=Va(1|i,a,void 0,c===void 0?null:c)}function Jo(n,i,a,c){var p=Ti();c=c===void 0?null:c;var x=void 0;if(An!==null){var A=An.memoizedState;if(x=A.destroy,c!==null&&au(c,A.deps)){p.memoizedState=Va(i,a,x,c);return}}gn.flags|=n,p.memoizedState=Va(1|i,a,x,c)}function qh(n,i){return Zo(8390656,8,n,i)}function du(n,i){return Jo(2048,8,n,i)}function Kh(n,i){return Jo(4,2,n,i)}function Zh(n,i){return Jo(4,4,n,i)}function Jh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Qh(n,i,a){return a=a!=null?a.concat([n]):null,Jo(4,4,Jh.bind(null,i,n),a)}function fu(){}function ep(n,i){var a=Ti();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&au(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function tp(n,i){var a=Ti();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&au(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function np(n,i,a){return(hs&21)===0?(n.baseState&&(n.baseState=!1,ri=!0),n.memoizedState=a):(Pi(a,i)||(a=qt(),gn.lanes|=a,ps|=a,n.baseState=!0),i)}function qx(n,i){var a=ie;ie=a!==0&&4>a?a:4,n(!0);var c=su.transition;su.transition={};try{n(!1),i()}finally{ie=a,su.transition=c}}function ip(){return Ti().memoizedState}function Kx(n,i,a){var c=Gr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},rp(n))sp(i,a);else if(a=kh(n,i,a,c),a!==null){var p=Qn();Ui(a,n,c,p),ap(a,i,c)}}function Zx(n,i,a){var c=Gr(n),p={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(rp(n))sp(i,p);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=i.lastRenderedReducer,x!==null))try{var A=i.lastRenderedState,G=x(A,a);if(p.hasEagerState=!0,p.eagerState=G,Pi(G,A)){var Z=i.interleaved;Z===null?(p.next=p,Qc(i)):(p.next=Z.next,Z.next=p),i.interleaved=p;return}}catch{}finally{}a=kh(n,i,p,c),a!==null&&(p=Qn(),Ui(a,n,c,p),ap(a,i,c))}}function rp(n){var i=n.alternate;return n===gn||i!==null&&i===gn}function sp(n,i){Ba=Ko=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function ap(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,_n(n,a)}}var Qo={readContext:Ei,useCallback:jn,useContext:jn,useEffect:jn,useImperativeHandle:jn,useInsertionEffect:jn,useLayoutEffect:jn,useMemo:jn,useReducer:jn,useRef:jn,useState:jn,useDebugValue:jn,useDeferredValue:jn,useTransition:jn,useMutableSource:jn,useSyncExternalStore:jn,useId:jn,unstable_isNewReconciler:!1},Jx={readContext:Ei,useCallback:function(n,i){return Zi().memoizedState=[n,i===void 0?null:i],n},useContext:Ei,useEffect:qh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Zo(4194308,4,Jh.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Zo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Zo(4,2,n,i)},useMemo:function(n,i){var a=Zi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Zi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Kx.bind(null,gn,n),[c.memoizedState,n]},useRef:function(n){var i=Zi();return n={current:n},i.memoizedState=n},useState:Xh,useDebugValue:fu,useDeferredValue:function(n){return Zi().memoizedState=n},useTransition:function(){var n=Xh(!1),i=n[0];return n=qx.bind(null,n[1]),Zi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=gn,p=Zi();if(hn){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Ln===null)throw Error(t(349));(hs&30)!==0||Gh(c,i,a)}p.memoizedState=a;var x={value:a,getSnapshot:i};return p.queue=x,qh(Wh.bind(null,c,x,n),[n]),c.flags|=2048,Va(9,Vh.bind(null,c,x,a,i),void 0,null),a},useId:function(){var n=Zi(),i=Ln.identifierPrefix;if(hn){var a=fr,c=dr;a=(c&~(1<<32-H(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ha++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Yx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Qx={readContext:Ei,useCallback:ep,useContext:Ei,useEffect:du,useImperativeHandle:Qh,useInsertionEffect:Kh,useLayoutEffect:Zh,useMemo:tp,useReducer:cu,useRef:Yh,useState:function(){return cu(Ga)},useDebugValue:fu,useDeferredValue:function(n){var i=Ti();return np(i,An.memoizedState,n)},useTransition:function(){var n=cu(Ga)[0],i=Ti().memoizedState;return[n,i]},useMutableSource:Bh,useSyncExternalStore:Hh,useId:ip,unstable_isNewReconciler:!1},ev={readContext:Ei,useCallback:ep,useContext:Ei,useEffect:du,useImperativeHandle:Qh,useInsertionEffect:Kh,useLayoutEffect:Zh,useMemo:tp,useReducer:uu,useRef:Yh,useState:function(){return uu(Ga)},useDebugValue:fu,useDeferredValue:function(n){var i=Ti();return An===null?i.memoizedState=n:np(i,An.memoizedState,n)},useTransition:function(){var n=uu(Ga)[0],i=Ti().memoizedState;return[n,i]},useMutableSource:Bh,useSyncExternalStore:Hh,useId:ip,unstable_isNewReconciler:!1};function Li(n,i){if(n&&n.defaultProps){i=ee({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function hu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ee({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var el={isMounted:function(n){return(n=n._reactInternals)?bn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Qn(),p=Gr(n),x=pr(c,p);x.payload=i,a!=null&&(x.callback=a),i=zr(n,x,p),i!==null&&(Ui(i,n,p,c),$o(i,n,p))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Qn(),p=Gr(n),x=pr(c,p);x.tag=1,x.payload=i,a!=null&&(x.callback=a),i=zr(n,x,p),i!==null&&(Ui(i,n,p,c),$o(i,n,p))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Qn(),c=Gr(n),p=pr(a,c);p.tag=2,i!=null&&(p.callback=i),i=zr(n,p,c),i!==null&&(Ui(i,n,c,a),$o(i,n,c))}};function op(n,i,a,c,p,x,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,x,A):i.prototype&&i.prototype.isPureReactComponent?!Ra(a,c)||!Ra(p,x):!0}function lp(n,i,a){var c=!1,p=kr,x=i.contextType;return typeof x=="object"&&x!==null?x=Ei(x):(p=ii(i)?ls:Wn.current,c=i.contextTypes,x=(c=c!=null)?Os(n,p):kr),i=new i(a,x),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=el,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=x),i}function cp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&el.enqueueReplaceState(i,i.state,null)}function pu(n,i,a,c){var p=n.stateNode;p.props=a,p.state=n.memoizedState,p.refs={},eu(n);var x=i.contextType;typeof x=="object"&&x!==null?p.context=Ei(x):(x=ii(i)?ls:Wn.current,p.context=Os(n,x)),p.state=n.memoizedState,x=i.getDerivedStateFromProps,typeof x=="function"&&(hu(n,i,x,a),p.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(i=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),i!==p.state&&el.enqueueReplaceState(p,p.state,null),Xo(n,a,p,c),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Xs(n,i){try{var a="",c=i;do a+=oe(c),c=c.return;while(c);var p=a}catch(x){p=`
Error generating stack: `+x.message+`
`+x.stack}return{value:n,source:i,stack:p,digest:null}}function mu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function gu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var tv=typeof WeakMap=="function"?WeakMap:Map;function up(n,i,a){a=pr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){ol||(ol=!0,Pu=c),gu(n,i)},a}function dp(n,i,a){a=pr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var p=i.value;a.payload=function(){return c(p)},a.callback=function(){gu(n,i)}}var x=n.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(a.callback=function(){gu(n,i),typeof c!="function"&&(Br===null?Br=new Set([this]):Br.add(this));var A=i.stack;this.componentDidCatch(i.value,{componentStack:A!==null?A:""})}),a}function fp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new tv;var p=new Set;c.set(i,p)}else p=c.get(i),p===void 0&&(p=new Set,c.set(i,p));p.has(a)||(p.add(a),n=mv.bind(null,n,i,a),i.then(n,n))}function hp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function pp(n,i,a,c,p){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=pr(-1,1),i.tag=2,zr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var nv=N.ReactCurrentOwner,ri=!1;function Jn(n,i,a,c){i.child=n===null?Ih(i,null,a,c):Vs(i,n.child,a,c)}function mp(n,i,a,c,p){a=a.render;var x=i.ref;return js(i,p),c=ou(n,i,a,c,x,p),a=lu(),n!==null&&!ri?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,mr(n,i,p)):(hn&&a&&Wc(i),i.flags|=1,Jn(n,i,c,p),i.child)}function gp(n,i,a,c,p){if(n===null){var x=a.type;return typeof x=="function"&&!zu(x)&&x.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=x,xp(n,i,x,c,p)):(n=hl(a.type,null,c,i,i.mode,p),n.ref=i.ref,n.return=i,i.child=n)}if(x=n.child,(n.lanes&p)===0){var A=x.memoizedProps;if(a=a.compare,a=a!==null?a:Ra,a(A,c)&&n.ref===i.ref)return mr(n,i,p)}return i.flags|=1,n=Wr(x,c),n.ref=i.ref,n.return=i,i.child=n}function xp(n,i,a,c,p){if(n!==null){var x=n.memoizedProps;if(Ra(x,c)&&n.ref===i.ref)if(ri=!1,i.pendingProps=c=x,(n.lanes&p)!==0)(n.flags&131072)!==0&&(ri=!0);else return i.lanes=n.lanes,mr(n,i,p)}return xu(n,i,a,c,p)}function vp(n,i,a){var c=i.pendingProps,p=c.children,x=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},an(qs,gi),gi|=a;else{if((a&1073741824)===0)return n=x!==null?x.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,an(qs,gi),gi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=x!==null?x.baseLanes:a,an(qs,gi),gi|=c}else x!==null?(c=x.baseLanes|a,i.memoizedState=null):c=a,an(qs,gi),gi|=c;return Jn(n,i,p,a),i.child}function _p(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function xu(n,i,a,c,p){var x=ii(a)?ls:Wn.current;return x=Os(i,x),js(i,p),a=ou(n,i,a,c,x,p),c=lu(),n!==null&&!ri?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,mr(n,i,p)):(hn&&c&&Wc(i),i.flags|=1,Jn(n,i,a,p),i.child)}function yp(n,i,a,c,p){if(ii(a)){var x=!0;zo(i)}else x=!1;if(js(i,p),i.stateNode===null)nl(n,i),lp(i,a,c),pu(i,a,c,p),c=!0;else if(n===null){var A=i.stateNode,G=i.memoizedProps;A.props=G;var Z=A.context,ye=a.contextType;typeof ye=="object"&&ye!==null?ye=Ei(ye):(ye=ii(a)?ls:Wn.current,ye=Os(i,ye));var ze=a.getDerivedStateFromProps,He=typeof ze=="function"||typeof A.getSnapshotBeforeUpdate=="function";He||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(G!==c||Z!==ye)&&cp(i,A,c,ye),Fr=!1;var Ue=i.memoizedState;A.state=Ue,Xo(i,c,A,p),Z=i.memoizedState,G!==c||Ue!==Z||ni.current||Fr?(typeof ze=="function"&&(hu(i,a,ze,c),Z=i.memoizedState),(G=Fr||op(i,a,G,c,Ue,Z,ye))?(He||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(i.flags|=4194308)):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=Z),A.props=c,A.state=Z,A.context=ye,c=G):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{A=i.stateNode,Uh(n,i),G=i.memoizedProps,ye=i.type===i.elementType?G:Li(i.type,G),A.props=ye,He=i.pendingProps,Ue=A.context,Z=a.contextType,typeof Z=="object"&&Z!==null?Z=Ei(Z):(Z=ii(a)?ls:Wn.current,Z=Os(i,Z));var et=a.getDerivedStateFromProps;(ze=typeof et=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(G!==He||Ue!==Z)&&cp(i,A,c,Z),Fr=!1,Ue=i.memoizedState,A.state=Ue,Xo(i,c,A,p);var lt=i.memoizedState;G!==He||Ue!==lt||ni.current||Fr?(typeof et=="function"&&(hu(i,a,et,c),lt=i.memoizedState),(ye=Fr||op(i,a,ye,c,Ue,lt,Z)||!1)?(ze||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(c,lt,Z),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(c,lt,Z)),typeof A.componentDidUpdate=="function"&&(i.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof A.componentDidUpdate!="function"||G===n.memoizedProps&&Ue===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||G===n.memoizedProps&&Ue===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=lt),A.props=c,A.state=lt,A.context=Z,c=ye):(typeof A.componentDidUpdate!="function"||G===n.memoizedProps&&Ue===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||G===n.memoizedProps&&Ue===n.memoizedState||(i.flags|=1024),c=!1)}return vu(n,i,a,c,x,p)}function vu(n,i,a,c,p,x){_p(n,i);var A=(i.flags&128)!==0;if(!c&&!A)return p&&Eh(i,a,!1),mr(n,i,x);c=i.stateNode,nv.current=i;var G=A&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&A?(i.child=Vs(i,n.child,null,x),i.child=Vs(i,null,G,x)):Jn(n,i,G,x),i.memoizedState=c.state,p&&Eh(i,a,!0),i.child}function Sp(n){var i=n.stateNode;i.pendingContext?wh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&wh(n,i.context,!1),tu(n,i.containerInfo)}function bp(n,i,a,c,p){return Gs(),Yc(p),i.flags|=256,Jn(n,i,a,c),i.child}var _u={dehydrated:null,treeContext:null,retryLane:0};function yu(n){return{baseLanes:n,cachePool:null,transitions:null}}function wp(n,i,a){var c=i.pendingProps,p=mn.current,x=!1,A=(i.flags&128)!==0,G;if((G=A)||(G=n!==null&&n.memoizedState===null?!1:(p&2)!==0),G?(x=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),an(mn,p&1),n===null)return Xc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(A=c.children,n=c.fallback,x?(c=i.mode,x=i.child,A={mode:"hidden",children:A},(c&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=A):x=pl(A,c,0,null),n=vs(n,c,a,null),x.return=i,n.return=i,x.sibling=n,i.child=x,i.child.memoizedState=yu(a),i.memoizedState=_u,n):Su(i,A));if(p=n.memoizedState,p!==null&&(G=p.dehydrated,G!==null))return iv(n,i,A,c,G,p,a);if(x){x=c.fallback,A=i.mode,p=n.child,G=p.sibling;var Z={mode:"hidden",children:c.children};return(A&1)===0&&i.child!==p?(c=i.child,c.childLanes=0,c.pendingProps=Z,i.deletions=null):(c=Wr(p,Z),c.subtreeFlags=p.subtreeFlags&14680064),G!==null?x=Wr(G,x):(x=vs(x,A,a,null),x.flags|=2),x.return=i,c.return=i,c.sibling=x,i.child=c,c=x,x=i.child,A=n.child.memoizedState,A=A===null?yu(a):{baseLanes:A.baseLanes|a,cachePool:null,transitions:A.transitions},x.memoizedState=A,x.childLanes=n.childLanes&~a,i.memoizedState=_u,c}return x=n.child,n=x.sibling,c=Wr(x,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Su(n,i){return i=pl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function tl(n,i,a,c){return c!==null&&Yc(c),Vs(i,n.child,null,a),n=Su(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function iv(n,i,a,c,p,x,A){if(a)return i.flags&256?(i.flags&=-257,c=mu(Error(t(422))),tl(n,i,A,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(x=c.fallback,p=i.mode,c=pl({mode:"visible",children:c.children},p,0,null),x=vs(x,p,A,null),x.flags|=2,c.return=i,x.return=i,c.sibling=x,i.child=c,(i.mode&1)!==0&&Vs(i,n.child,null,A),i.child.memoizedState=yu(A),i.memoizedState=_u,x);if((i.mode&1)===0)return tl(n,i,A,null);if(p.data==="$!"){if(c=p.nextSibling&&p.nextSibling.dataset,c)var G=c.dgst;return c=G,x=Error(t(419)),c=mu(x,c,void 0),tl(n,i,A,c)}if(G=(A&n.childLanes)!==0,ri||G){if(c=Ln,c!==null){switch(A&-A){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(c.suspendedLanes|A))!==0?0:p,p!==0&&p!==x.retryLane&&(x.retryLane=p,hr(n,p),Ui(c,n,p,-1))}return Fu(),c=mu(Error(t(421))),tl(n,i,A,c)}return p.data==="$?"?(i.flags|=128,i.child=n.child,i=gv.bind(null,n),p._reactRetry=i,null):(n=x.treeContext,mi=Lr(p.nextSibling),pi=i,hn=!0,Di=null,n!==null&&(wi[Mi++]=dr,wi[Mi++]=fr,wi[Mi++]=cs,dr=n.id,fr=n.overflow,cs=i),i=Su(i,c.children),i.flags|=4096,i)}function Mp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Jc(n.return,i,a)}function bu(n,i,a,c,p){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:p}:(x.isBackwards=i,x.rendering=null,x.renderingStartTime=0,x.last=c,x.tail=a,x.tailMode=p)}function Ep(n,i,a){var c=i.pendingProps,p=c.revealOrder,x=c.tail;if(Jn(n,i,c.children,a),c=mn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Mp(n,a,i);else if(n.tag===19)Mp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(an(mn,c),(i.mode&1)===0)i.memoizedState=null;else switch(p){case"forwards":for(a=i.child,p=null;a!==null;)n=a.alternate,n!==null&&Yo(n)===null&&(p=a),a=a.sibling;a=p,a===null?(p=i.child,i.child=null):(p=a.sibling,a.sibling=null),bu(i,!1,p,a,x);break;case"backwards":for(a=null,p=i.child,i.child=null;p!==null;){if(n=p.alternate,n!==null&&Yo(n)===null){i.child=p;break}n=p.sibling,p.sibling=a,a=p,p=n}bu(i,!0,a,null,x);break;case"together":bu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function nl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function mr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ps|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Wr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Wr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function rv(n,i,a){switch(i.tag){case 3:Sp(i),Gs();break;case 5:Oh(i);break;case 1:ii(i.type)&&zo(i);break;case 4:tu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,p=i.memoizedProps.value;an(Wo,c._currentValue),c._currentValue=p;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(an(mn,mn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?wp(n,i,a):(an(mn,mn.current&1),n=mr(n,i,a),n!==null?n.sibling:null);an(mn,mn.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Ep(n,i,a);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),an(mn,mn.current),c)break;return null;case 22:case 23:return i.lanes=0,vp(n,i,a)}return mr(n,i,a)}var Tp,wu,Ap,Cp;Tp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},wu=function(){},Ap=function(n,i,a,c){var p=n.memoizedProps;if(p!==c){n=i.stateNode,fs(Ki.current);var x=null;switch(a){case"input":p=Xe(n,p),c=Xe(n,c),x=[];break;case"select":p=ee({},p,{value:void 0}),c=ee({},c,{value:void 0}),x=[];break;case"textarea":p=Vt(n,p),c=Vt(n,c),x=[];break;default:typeof p.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=ko)}Me(a,c);var A;a=null;for(ye in p)if(!c.hasOwnProperty(ye)&&p.hasOwnProperty(ye)&&p[ye]!=null)if(ye==="style"){var G=p[ye];for(A in G)G.hasOwnProperty(A)&&(a||(a={}),a[A]="")}else ye!=="dangerouslySetInnerHTML"&&ye!=="children"&&ye!=="suppressContentEditableWarning"&&ye!=="suppressHydrationWarning"&&ye!=="autoFocus"&&(o.hasOwnProperty(ye)?x||(x=[]):(x=x||[]).push(ye,null));for(ye in c){var Z=c[ye];if(G=p!=null?p[ye]:void 0,c.hasOwnProperty(ye)&&Z!==G&&(Z!=null||G!=null))if(ye==="style")if(G){for(A in G)!G.hasOwnProperty(A)||Z&&Z.hasOwnProperty(A)||(a||(a={}),a[A]="");for(A in Z)Z.hasOwnProperty(A)&&G[A]!==Z[A]&&(a||(a={}),a[A]=Z[A])}else a||(x||(x=[]),x.push(ye,a)),a=Z;else ye==="dangerouslySetInnerHTML"?(Z=Z?Z.__html:void 0,G=G?G.__html:void 0,Z!=null&&G!==Z&&(x=x||[]).push(ye,Z)):ye==="children"?typeof Z!="string"&&typeof Z!="number"||(x=x||[]).push(ye,""+Z):ye!=="suppressContentEditableWarning"&&ye!=="suppressHydrationWarning"&&(o.hasOwnProperty(ye)?(Z!=null&&ye==="onScroll"&&cn("scroll",n),x||G===Z||(x=[])):(x=x||[]).push(ye,Z))}a&&(x=x||[]).push("style",a);var ye=x;(i.updateQueue=ye)&&(i.flags|=4)}},Cp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Wa(n,i){if(!hn)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function $n(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var p=n.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags&14680064,c|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function sv(n,i,a){var c=i.pendingProps;switch(jc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $n(i),null;case 1:return ii(i.type)&&Fo(),$n(i),null;case 3:return c=i.stateNode,$s(),un(ni),un(Wn),ru(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Go(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Di!==null&&(Iu(Di),Di=null))),wu(n,i),$n(i),null;case 5:nu(i);var p=fs(Oa.current);if(a=i.type,n!==null&&i.stateNode!=null)Ap(n,i,a,c,p),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return $n(i),null}if(n=fs(Ki.current),Go(i)){c=i.stateNode,a=i.type;var x=i.memoizedProps;switch(c[qi]=i,c[Ia]=x,n=(i.mode&1)!==0,a){case"dialog":cn("cancel",c),cn("close",c);break;case"iframe":case"object":case"embed":cn("load",c);break;case"video":case"audio":for(p=0;p<Pa.length;p++)cn(Pa[p],c);break;case"source":cn("error",c);break;case"img":case"image":case"link":cn("error",c),cn("load",c);break;case"details":cn("toggle",c);break;case"input":it(c,x),cn("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!x.multiple},cn("invalid",c);break;case"textarea":on(c,x),cn("invalid",c)}Me(a,x),p=null;for(var A in x)if(x.hasOwnProperty(A)){var G=x[A];A==="children"?typeof G=="string"?c.textContent!==G&&(x.suppressHydrationWarning!==!0&&Io(c.textContent,G,n),p=["children",G]):typeof G=="number"&&c.textContent!==""+G&&(x.suppressHydrationWarning!==!0&&Io(c.textContent,G,n),p=["children",""+G]):o.hasOwnProperty(A)&&G!=null&&A==="onScroll"&&cn("scroll",c)}switch(a){case"input":$e(c),ot(c,x,!0);break;case"textarea":$e(c),pn(c);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(c.onclick=ko)}c=p,i.updateQueue=c,c!==null&&(i.flags|=4)}else{A=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Mt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=A.createElement(a,{is:c.is}):(n=A.createElement(a),a==="select"&&(A=n,c.multiple?A.multiple=!0:c.size&&(A.size=c.size))):n=A.createElementNS(n,a),n[qi]=i,n[Ia]=c,Tp(n,i,!1,!1),i.stateNode=n;e:{switch(A=Le(a,c),a){case"dialog":cn("cancel",n),cn("close",n),p=c;break;case"iframe":case"object":case"embed":cn("load",n),p=c;break;case"video":case"audio":for(p=0;p<Pa.length;p++)cn(Pa[p],n);p=c;break;case"source":cn("error",n),p=c;break;case"img":case"image":case"link":cn("error",n),cn("load",n),p=c;break;case"details":cn("toggle",n),p=c;break;case"input":it(n,c),p=Xe(n,c),cn("invalid",n);break;case"option":p=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},p=ee({},c,{value:void 0}),cn("invalid",n);break;case"textarea":on(n,c),p=Vt(n,c),cn("invalid",n);break;default:p=c}Me(a,p),G=p;for(x in G)if(G.hasOwnProperty(x)){var Z=G[x];x==="style"?ae(n,Z):x==="dangerouslySetInnerHTML"?(Z=Z?Z.__html:void 0,Z!=null&&At(n,Z)):x==="children"?typeof Z=="string"?(a!=="textarea"||Z!=="")&&Ye(n,Z):typeof Z=="number"&&Ye(n,""+Z):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?Z!=null&&x==="onScroll"&&cn("scroll",n):Z!=null&&U(n,x,Z,A))}switch(a){case"input":$e(n),ot(n,c,!1);break;case"textarea":$e(n),pn(n);break;case"option":c.value!=null&&n.setAttribute("value",""+be(c.value));break;case"select":n.multiple=!!c.multiple,x=c.value,x!=null?bt(n,!!c.multiple,x,!1):c.defaultValue!=null&&bt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=ko)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return $n(i),null;case 6:if(n&&i.stateNode!=null)Cp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=fs(Oa.current),fs(Ki.current),Go(i)){if(c=i.stateNode,a=i.memoizedProps,c[qi]=i,(x=c.nodeValue!==a)&&(n=pi,n!==null))switch(n.tag){case 3:Io(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Io(c.nodeValue,a,(n.mode&1)!==0)}x&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[qi]=i,i.stateNode=c}return $n(i),null;case 13:if(un(mn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(hn&&mi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Ph(),Gs(),i.flags|=98560,x=!1;else if(x=Go(i),c!==null&&c.dehydrated!==null){if(n===null){if(!x)throw Error(t(318));if(x=i.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[qi]=i}else Gs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;$n(i),x=!1}else Di!==null&&(Iu(Di),Di=null),x=!0;if(!x)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(mn.current&1)!==0?Cn===0&&(Cn=3):Fu())),i.updateQueue!==null&&(i.flags|=4),$n(i),null);case 4:return $s(),wu(n,i),n===null&&Da(i.stateNode.containerInfo),$n(i),null;case 10:return Zc(i.type._context),$n(i),null;case 17:return ii(i.type)&&Fo(),$n(i),null;case 19:if(un(mn),x=i.memoizedState,x===null)return $n(i),null;if(c=(i.flags&128)!==0,A=x.rendering,A===null)if(c)Wa(x,!1);else{if(Cn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(A=Yo(n),A!==null){for(i.flags|=128,Wa(x,!1),c=A.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)x=a,n=c,x.flags&=14680066,A=x.alternate,A===null?(x.childLanes=0,x.lanes=n,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=A.childLanes,x.lanes=A.lanes,x.child=A.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=A.memoizedProps,x.memoizedState=A.memoizedState,x.updateQueue=A.updateQueue,x.type=A.type,n=A.dependencies,x.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return an(mn,mn.current&1|2),i.child}n=n.sibling}x.tail!==null&&jt()>Ks&&(i.flags|=128,c=!0,Wa(x,!1),i.lanes=4194304)}else{if(!c)if(n=Yo(A),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Wa(x,!0),x.tail===null&&x.tailMode==="hidden"&&!A.alternate&&!hn)return $n(i),null}else 2*jt()-x.renderingStartTime>Ks&&a!==1073741824&&(i.flags|=128,c=!0,Wa(x,!1),i.lanes=4194304);x.isBackwards?(A.sibling=i.child,i.child=A):(a=x.last,a!==null?a.sibling=A:i.child=A,x.last=A)}return x.tail!==null?(i=x.tail,x.rendering=i,x.tail=i.sibling,x.renderingStartTime=jt(),i.sibling=null,a=mn.current,an(mn,c?a&1|2:a&1),i):($n(i),null);case 22:case 23:return Uu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(gi&1073741824)!==0&&($n(i),i.subtreeFlags&6&&(i.flags|=8192)):$n(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function av(n,i){switch(jc(i),i.tag){case 1:return ii(i.type)&&Fo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return $s(),un(ni),un(Wn),ru(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return nu(i),null;case 13:if(un(mn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Gs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return un(mn),null;case 4:return $s(),null;case 10:return Zc(i.type._context),null;case 22:case 23:return Uu(),null;case 24:return null;default:return null}}var il=!1,Xn=!1,ov=typeof WeakSet=="function"?WeakSet:Set,at=null;function Ys(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){yn(n,i,c)}else a.current=null}function Mu(n,i,a){try{a()}catch(c){yn(n,i,c)}}var Rp=!1;function lv(n,i){if(Uc=wo,n=oh(),Cc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var p=c.anchorOffset,x=c.focusNode;c=c.focusOffset;try{a.nodeType,x.nodeType}catch{a=null;break e}var A=0,G=-1,Z=-1,ye=0,ze=0,He=n,Ue=null;t:for(;;){for(var et;He!==a||p!==0&&He.nodeType!==3||(G=A+p),He!==x||c!==0&&He.nodeType!==3||(Z=A+c),He.nodeType===3&&(A+=He.nodeValue.length),(et=He.firstChild)!==null;)Ue=He,He=et;for(;;){if(He===n)break t;if(Ue===a&&++ye===p&&(G=A),Ue===x&&++ze===c&&(Z=A),(et=He.nextSibling)!==null)break;He=Ue,Ue=He.parentNode}He=et}a=G===-1||Z===-1?null:{start:G,end:Z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Fc={focusedElem:n,selectionRange:a},wo=!1,at=i;at!==null;)if(i=at,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,at=n;else for(;at!==null;){i=at;try{var lt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(lt!==null){var ut=lt.memoizedProps,Sn=lt.memoizedState,le=i.stateNode,ne=le.getSnapshotBeforeUpdate(i.elementType===i.type?ut:Li(i.type,ut),Sn);le.__reactInternalSnapshotBeforeUpdate=ne}break;case 3:var fe=i.stateNode.containerInfo;fe.nodeType===1?fe.textContent="":fe.nodeType===9&&fe.documentElement&&fe.removeChild(fe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(je){yn(i,i.return,je)}if(n=i.sibling,n!==null){n.return=i.return,at=n;break}at=i.return}return lt=Rp,Rp=!1,lt}function ja(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var p=c=c.next;do{if((p.tag&n)===n){var x=p.destroy;p.destroy=void 0,x!==void 0&&Mu(i,a,x)}p=p.next}while(p!==c)}}function rl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Eu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Np(n){var i=n.alternate;i!==null&&(n.alternate=null,Np(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[qi],delete i[Ia],delete i[Hc],delete i[Wx],delete i[jx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Pp(n){return n.tag===5||n.tag===3||n.tag===4}function Dp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Pp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Tu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ko));else if(c!==4&&(n=n.child,n!==null))for(Tu(n,i,a),n=n.sibling;n!==null;)Tu(n,i,a),n=n.sibling}function Au(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Au(n,i,a),n=n.sibling;n!==null;)Au(n,i,a),n=n.sibling}var Fn=null,Ii=!1;function Or(n,i,a){for(a=a.child;a!==null;)Lp(n,i,a),a=a.sibling}function Lp(n,i,a){if(ue&&typeof ue.onCommitFiberUnmount=="function")try{ue.onCommitFiberUnmount(K,a)}catch{}switch(a.tag){case 5:Xn||Ys(a,i);case 6:var c=Fn,p=Ii;Fn=null,Or(n,i,a),Fn=c,Ii=p,Fn!==null&&(Ii?(n=Fn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Fn.removeChild(a.stateNode));break;case 18:Fn!==null&&(Ii?(n=Fn,a=a.stateNode,n.nodeType===8?Bc(n.parentNode,a):n.nodeType===1&&Bc(n,a),wa(n)):Bc(Fn,a.stateNode));break;case 4:c=Fn,p=Ii,Fn=a.stateNode.containerInfo,Ii=!0,Or(n,i,a),Fn=c,Ii=p;break;case 0:case 11:case 14:case 15:if(!Xn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){p=c=c.next;do{var x=p,A=x.destroy;x=x.tag,A!==void 0&&((x&2)!==0||(x&4)!==0)&&Mu(a,i,A),p=p.next}while(p!==c)}Or(n,i,a);break;case 1:if(!Xn&&(Ys(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(G){yn(a,i,G)}Or(n,i,a);break;case 21:Or(n,i,a);break;case 22:a.mode&1?(Xn=(c=Xn)||a.memoizedState!==null,Or(n,i,a),Xn=c):Or(n,i,a);break;default:Or(n,i,a)}}function Ip(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new ov),i.forEach(function(c){var p=xv.bind(null,n,c);a.has(c)||(a.add(c),c.then(p,p))})}}function ki(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var p=a[c];try{var x=n,A=i,G=A;e:for(;G!==null;){switch(G.tag){case 5:Fn=G.stateNode,Ii=!1;break e;case 3:Fn=G.stateNode.containerInfo,Ii=!0;break e;case 4:Fn=G.stateNode.containerInfo,Ii=!0;break e}G=G.return}if(Fn===null)throw Error(t(160));Lp(x,A,p),Fn=null,Ii=!1;var Z=p.alternate;Z!==null&&(Z.return=null),p.return=null}catch(ye){yn(p,i,ye)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)kp(i,n),i=i.sibling}function kp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ki(i,n),Ji(n),c&4){try{ja(3,n,n.return),rl(3,n)}catch(ut){yn(n,n.return,ut)}try{ja(5,n,n.return)}catch(ut){yn(n,n.return,ut)}}break;case 1:ki(i,n),Ji(n),c&512&&a!==null&&Ys(a,a.return);break;case 5:if(ki(i,n),Ji(n),c&512&&a!==null&&Ys(a,a.return),n.flags&32){var p=n.stateNode;try{Ye(p,"")}catch(ut){yn(n,n.return,ut)}}if(c&4&&(p=n.stateNode,p!=null)){var x=n.memoizedProps,A=a!==null?a.memoizedProps:x,G=n.type,Z=n.updateQueue;if(n.updateQueue=null,Z!==null)try{G==="input"&&x.type==="radio"&&x.name!=null&&vt(p,x),Le(G,A);var ye=Le(G,x);for(A=0;A<Z.length;A+=2){var ze=Z[A],He=Z[A+1];ze==="style"?ae(p,He):ze==="dangerouslySetInnerHTML"?At(p,He):ze==="children"?Ye(p,He):U(p,ze,He,ye)}switch(G){case"input":ft(p,x);break;case"textarea":Q(p,x);break;case"select":var Ue=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!x.multiple;var et=x.value;et!=null?bt(p,!!x.multiple,et,!1):Ue!==!!x.multiple&&(x.defaultValue!=null?bt(p,!!x.multiple,x.defaultValue,!0):bt(p,!!x.multiple,x.multiple?[]:"",!1))}p[Ia]=x}catch(ut){yn(n,n.return,ut)}}break;case 6:if(ki(i,n),Ji(n),c&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,x=n.memoizedProps;try{p.nodeValue=x}catch(ut){yn(n,n.return,ut)}}break;case 3:if(ki(i,n),Ji(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{wa(i.containerInfo)}catch(ut){yn(n,n.return,ut)}break;case 4:ki(i,n),Ji(n);break;case 13:ki(i,n),Ji(n),p=n.child,p.flags&8192&&(x=p.memoizedState!==null,p.stateNode.isHidden=x,!x||p.alternate!==null&&p.alternate.memoizedState!==null||(Nu=jt())),c&4&&Ip(n);break;case 22:if(ze=a!==null&&a.memoizedState!==null,n.mode&1?(Xn=(ye=Xn)||ze,ki(i,n),Xn=ye):ki(i,n),Ji(n),c&8192){if(ye=n.memoizedState!==null,(n.stateNode.isHidden=ye)&&!ze&&(n.mode&1)!==0)for(at=n,ze=n.child;ze!==null;){for(He=at=ze;at!==null;){switch(Ue=at,et=Ue.child,Ue.tag){case 0:case 11:case 14:case 15:ja(4,Ue,Ue.return);break;case 1:Ys(Ue,Ue.return);var lt=Ue.stateNode;if(typeof lt.componentWillUnmount=="function"){c=Ue,a=Ue.return;try{i=c,lt.props=i.memoizedProps,lt.state=i.memoizedState,lt.componentWillUnmount()}catch(ut){yn(c,a,ut)}}break;case 5:Ys(Ue,Ue.return);break;case 22:if(Ue.memoizedState!==null){zp(He);continue}}et!==null?(et.return=Ue,at=et):zp(He)}ze=ze.sibling}e:for(ze=null,He=n;;){if(He.tag===5){if(ze===null){ze=He;try{p=He.stateNode,ye?(x=p.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(G=He.stateNode,Z=He.memoizedProps.style,A=Z!=null&&Z.hasOwnProperty("display")?Z.display:null,G.style.display=T("display",A))}catch(ut){yn(n,n.return,ut)}}}else if(He.tag===6){if(ze===null)try{He.stateNode.nodeValue=ye?"":He.memoizedProps}catch(ut){yn(n,n.return,ut)}}else if((He.tag!==22&&He.tag!==23||He.memoizedState===null||He===n)&&He.child!==null){He.child.return=He,He=He.child;continue}if(He===n)break e;for(;He.sibling===null;){if(He.return===null||He.return===n)break e;ze===He&&(ze=null),He=He.return}ze===He&&(ze=null),He.sibling.return=He.return,He=He.sibling}}break;case 19:ki(i,n),Ji(n),c&4&&Ip(n);break;case 21:break;default:ki(i,n),Ji(n)}}function Ji(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Pp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var p=c.stateNode;c.flags&32&&(Ye(p,""),c.flags&=-33);var x=Dp(n);Au(n,x,p);break;case 3:case 4:var A=c.stateNode.containerInfo,G=Dp(n);Tu(n,G,A);break;default:throw Error(t(161))}}catch(Z){yn(n,n.return,Z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function cv(n,i,a){at=n,Up(n)}function Up(n,i,a){for(var c=(n.mode&1)!==0;at!==null;){var p=at,x=p.child;if(p.tag===22&&c){var A=p.memoizedState!==null||il;if(!A){var G=p.alternate,Z=G!==null&&G.memoizedState!==null||Xn;G=il;var ye=Xn;if(il=A,(Xn=Z)&&!ye)for(at=p;at!==null;)A=at,Z=A.child,A.tag===22&&A.memoizedState!==null?Op(p):Z!==null?(Z.return=A,at=Z):Op(p);for(;x!==null;)at=x,Up(x),x=x.sibling;at=p,il=G,Xn=ye}Fp(n)}else(p.subtreeFlags&8772)!==0&&x!==null?(x.return=p,at=x):Fp(n)}}function Fp(n){for(;at!==null;){var i=at;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Xn||rl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Xn)if(a===null)c.componentDidMount();else{var p=i.elementType===i.type?a.memoizedProps:Li(i.type,a.memoizedProps);c.componentDidUpdate(p,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var x=i.updateQueue;x!==null&&zh(i,x,c);break;case 3:var A=i.updateQueue;if(A!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}zh(i,A,a)}break;case 5:var G=i.stateNode;if(a===null&&i.flags&4){a=G;var Z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":Z.autoFocus&&a.focus();break;case"img":Z.src&&(a.src=Z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ye=i.alternate;if(ye!==null){var ze=ye.memoizedState;if(ze!==null){var He=ze.dehydrated;He!==null&&wa(He)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Xn||i.flags&512&&Eu(i)}catch(Ue){yn(i,i.return,Ue)}}if(i===n){at=null;break}if(a=i.sibling,a!==null){a.return=i.return,at=a;break}at=i.return}}function zp(n){for(;at!==null;){var i=at;if(i===n){at=null;break}var a=i.sibling;if(a!==null){a.return=i.return,at=a;break}at=i.return}}function Op(n){for(;at!==null;){var i=at;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{rl(4,i)}catch(Z){yn(i,a,Z)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var p=i.return;try{c.componentDidMount()}catch(Z){yn(i,p,Z)}}var x=i.return;try{Eu(i)}catch(Z){yn(i,x,Z)}break;case 5:var A=i.return;try{Eu(i)}catch(Z){yn(i,A,Z)}}}catch(Z){yn(i,i.return,Z)}if(i===n){at=null;break}var G=i.sibling;if(G!==null){G.return=i.return,at=G;break}at=i.return}}var uv=Math.ceil,sl=N.ReactCurrentDispatcher,Cu=N.ReactCurrentOwner,Ai=N.ReactCurrentBatchConfig,Gt=0,Ln=null,Mn=null,zn=0,gi=0,qs=Ir(0),Cn=0,$a=null,ps=0,al=0,Ru=0,Xa=null,si=null,Nu=0,Ks=1/0,gr=null,ol=!1,Pu=null,Br=null,ll=!1,Hr=null,cl=0,Ya=0,Du=null,ul=-1,dl=0;function Qn(){return(Gt&6)!==0?jt():ul!==-1?ul:ul=jt()}function Gr(n){return(n.mode&1)===0?1:(Gt&2)!==0&&zn!==0?zn&-zn:Xx.transition!==null?(dl===0&&(dl=qt()),dl):(n=ie,n!==0||(n=window.event,n=n===void 0?16:Hf(n.type)),n)}function Ui(n,i,a,c){if(50<Ya)throw Ya=0,Du=null,Error(t(185));dn(n,a,c),((Gt&2)===0||n!==Ln)&&(n===Ln&&((Gt&2)===0&&(al|=a),Cn===4&&Vr(n,zn)),ai(n,c),a===1&&Gt===0&&(i.mode&1)===0&&(Ks=jt()+500,Oo&&Ur()))}function ai(n,i){var a=n.callbackNode;_t(n,i);var c=xt(n,n===Ln?zn:0);if(c===0)a!==null&&Gn(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Gn(a),i===1)n.tag===0?$x(Hp.bind(null,n)):Th(Hp.bind(null,n)),Gx(function(){(Gt&6)===0&&Ur()}),a=null;else{switch($t(c)){case 1:a=ui;break;case 4:a=Si;break;case 16:a=bi;break;case 536870912:a=C;break;default:a=bi}a=qp(a,Bp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Bp(n,i){if(ul=-1,dl=0,(Gt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Zs()&&n.callbackNode!==a)return null;var c=xt(n,n===Ln?zn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=fl(n,c);else{i=c;var p=Gt;Gt|=2;var x=Vp();(Ln!==n||zn!==i)&&(gr=null,Ks=jt()+500,gs(n,i));do try{hv();break}catch(G){Gp(n,G)}while(!0);Kc(),sl.current=x,Gt=p,Mn!==null?i=0:(Ln=null,zn=0,i=Cn)}if(i!==0){if(i===2&&(p=en(n),p!==0&&(c=p,i=Lu(n,p))),i===1)throw a=$a,gs(n,0),Vr(n,c),ai(n,jt()),a;if(i===6)Vr(n,c);else{if(p=n.current.alternate,(c&30)===0&&!dv(p)&&(i=fl(n,c),i===2&&(x=en(n),x!==0&&(c=x,i=Lu(n,x))),i===1))throw a=$a,gs(n,0),Vr(n,c),ai(n,jt()),a;switch(n.finishedWork=p,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:xs(n,si,gr);break;case 3:if(Vr(n,c),(c&130023424)===c&&(i=Nu+500-jt(),10<i)){if(xt(n,0)!==0)break;if(p=n.suspendedLanes,(p&c)!==c){Qn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Oc(xs.bind(null,n,si,gr),i);break}xs(n,si,gr);break;case 4:if(Vr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,p=-1;0<c;){var A=31-H(c);x=1<<A,A=i[A],A>p&&(p=A),c&=~x}if(c=p,c=jt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*uv(c/1960))-c,10<c){n.timeoutHandle=Oc(xs.bind(null,n,si,gr),c);break}xs(n,si,gr);break;case 5:xs(n,si,gr);break;default:throw Error(t(329))}}}return ai(n,jt()),n.callbackNode===a?Bp.bind(null,n):null}function Lu(n,i){var a=Xa;return n.current.memoizedState.isDehydrated&&(gs(n,i).flags|=256),n=fl(n,i),n!==2&&(i=si,si=a,i!==null&&Iu(i)),n}function Iu(n){si===null?si=n:si.push.apply(si,n)}function dv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var p=a[c],x=p.getSnapshot;p=p.value;try{if(!Pi(x(),p))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Vr(n,i){for(i&=~Ru,i&=~al,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-H(i),c=1<<a;n[a]=-1,i&=~c}}function Hp(n){if((Gt&6)!==0)throw Error(t(327));Zs();var i=xt(n,0);if((i&1)===0)return ai(n,jt()),null;var a=fl(n,i);if(n.tag!==0&&a===2){var c=en(n);c!==0&&(i=c,a=Lu(n,c))}if(a===1)throw a=$a,gs(n,0),Vr(n,i),ai(n,jt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,xs(n,si,gr),ai(n,jt()),null}function ku(n,i){var a=Gt;Gt|=1;try{return n(i)}finally{Gt=a,Gt===0&&(Ks=jt()+500,Oo&&Ur())}}function ms(n){Hr!==null&&Hr.tag===0&&(Gt&6)===0&&Zs();var i=Gt;Gt|=1;var a=Ai.transition,c=ie;try{if(Ai.transition=null,ie=1,n)return n()}finally{ie=c,Ai.transition=a,Gt=i,(Gt&6)===0&&Ur()}}function Uu(){gi=qs.current,un(qs)}function gs(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Hx(a)),Mn!==null)for(a=Mn.return;a!==null;){var c=a;switch(jc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Fo();break;case 3:$s(),un(ni),un(Wn),ru();break;case 5:nu(c);break;case 4:$s();break;case 13:un(mn);break;case 19:un(mn);break;case 10:Zc(c.type._context);break;case 22:case 23:Uu()}a=a.return}if(Ln=n,Mn=n=Wr(n.current,null),zn=gi=i,Cn=0,$a=null,Ru=al=ps=0,si=Xa=null,ds!==null){for(i=0;i<ds.length;i++)if(a=ds[i],c=a.interleaved,c!==null){a.interleaved=null;var p=c.next,x=a.pending;if(x!==null){var A=x.next;x.next=p,c.next=A}a.pending=c}ds=null}return n}function Gp(n,i){do{var a=Mn;try{if(Kc(),qo.current=Qo,Ko){for(var c=gn.memoizedState;c!==null;){var p=c.queue;p!==null&&(p.pending=null),c=c.next}Ko=!1}if(hs=0,Dn=An=gn=null,Ba=!1,Ha=0,Cu.current=null,a===null||a.return===null){Cn=1,$a=i,Mn=null;break}e:{var x=n,A=a.return,G=a,Z=i;if(i=zn,G.flags|=32768,Z!==null&&typeof Z=="object"&&typeof Z.then=="function"){var ye=Z,ze=G,He=ze.tag;if((ze.mode&1)===0&&(He===0||He===11||He===15)){var Ue=ze.alternate;Ue?(ze.updateQueue=Ue.updateQueue,ze.memoizedState=Ue.memoizedState,ze.lanes=Ue.lanes):(ze.updateQueue=null,ze.memoizedState=null)}var et=hp(A);if(et!==null){et.flags&=-257,pp(et,A,G,x,i),et.mode&1&&fp(x,ye,i),i=et,Z=ye;var lt=i.updateQueue;if(lt===null){var ut=new Set;ut.add(Z),i.updateQueue=ut}else lt.add(Z);break e}else{if((i&1)===0){fp(x,ye,i),Fu();break e}Z=Error(t(426))}}else if(hn&&G.mode&1){var Sn=hp(A);if(Sn!==null){(Sn.flags&65536)===0&&(Sn.flags|=256),pp(Sn,A,G,x,i),Yc(Xs(Z,G));break e}}x=Z=Xs(Z,G),Cn!==4&&(Cn=2),Xa===null?Xa=[x]:Xa.push(x),x=A;do{switch(x.tag){case 3:x.flags|=65536,i&=-i,x.lanes|=i;var le=up(x,Z,i);Fh(x,le);break e;case 1:G=Z;var ne=x.type,fe=x.stateNode;if((x.flags&128)===0&&(typeof ne.getDerivedStateFromError=="function"||fe!==null&&typeof fe.componentDidCatch=="function"&&(Br===null||!Br.has(fe)))){x.flags|=65536,i&=-i,x.lanes|=i;var je=dp(x,G,i);Fh(x,je);break e}}x=x.return}while(x!==null)}jp(a)}catch(dt){i=dt,Mn===a&&a!==null&&(Mn=a=a.return);continue}break}while(!0)}function Vp(){var n=sl.current;return sl.current=Qo,n===null?Qo:n}function Fu(){(Cn===0||Cn===3||Cn===2)&&(Cn=4),Ln===null||(ps&268435455)===0&&(al&268435455)===0||Vr(Ln,zn)}function fl(n,i){var a=Gt;Gt|=2;var c=Vp();(Ln!==n||zn!==i)&&(gr=null,gs(n,i));do try{fv();break}catch(p){Gp(n,p)}while(!0);if(Kc(),Gt=a,sl.current=c,Mn!==null)throw Error(t(261));return Ln=null,zn=0,Cn}function fv(){for(;Mn!==null;)Wp(Mn)}function hv(){for(;Mn!==null&&!Vn();)Wp(Mn)}function Wp(n){var i=Yp(n.alternate,n,gi);n.memoizedProps=n.pendingProps,i===null?jp(n):Mn=i,Cu.current=null}function jp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=sv(a,i,gi),a!==null){Mn=a;return}}else{if(a=av(a,i),a!==null){a.flags&=32767,Mn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Cn=6,Mn=null;return}}if(i=i.sibling,i!==null){Mn=i;return}Mn=i=n}while(i!==null);Cn===0&&(Cn=5)}function xs(n,i,a){var c=ie,p=Ai.transition;try{Ai.transition=null,ie=1,pv(n,i,a,c)}finally{Ai.transition=p,ie=c}return null}function pv(n,i,a,c){do Zs();while(Hr!==null);if((Gt&6)!==0)throw Error(t(327));a=n.finishedWork;var p=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var x=a.lanes|a.childLanes;if(nt(n,x),n===Ln&&(Mn=Ln=null,zn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ll||(ll=!0,qp(bi,function(){return Zs(),null})),x=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||x){x=Ai.transition,Ai.transition=null;var A=ie;ie=1;var G=Gt;Gt|=4,Cu.current=null,lv(n,a),kp(a,n),Ix(Fc),wo=!!Uc,Fc=Uc=null,n.current=a,cv(a),Qt(),Gt=G,ie=A,Ai.transition=x}else n.current=a;if(ll&&(ll=!1,Hr=n,cl=p),x=n.pendingLanes,x===0&&(Br=null),I(a.stateNode),ai(n,jt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)p=i[a],c(p.value,{componentStack:p.stack,digest:p.digest});if(ol)throw ol=!1,n=Pu,Pu=null,n;return(cl&1)!==0&&n.tag!==0&&Zs(),x=n.pendingLanes,(x&1)!==0?n===Du?Ya++:(Ya=0,Du=n):Ya=0,Ur(),null}function Zs(){if(Hr!==null){var n=$t(cl),i=Ai.transition,a=ie;try{if(Ai.transition=null,ie=16>n?16:n,Hr===null)var c=!1;else{if(n=Hr,Hr=null,cl=0,(Gt&6)!==0)throw Error(t(331));var p=Gt;for(Gt|=4,at=n.current;at!==null;){var x=at,A=x.child;if((at.flags&16)!==0){var G=x.deletions;if(G!==null){for(var Z=0;Z<G.length;Z++){var ye=G[Z];for(at=ye;at!==null;){var ze=at;switch(ze.tag){case 0:case 11:case 15:ja(8,ze,x)}var He=ze.child;if(He!==null)He.return=ze,at=He;else for(;at!==null;){ze=at;var Ue=ze.sibling,et=ze.return;if(Np(ze),ze===ye){at=null;break}if(Ue!==null){Ue.return=et,at=Ue;break}at=et}}}var lt=x.alternate;if(lt!==null){var ut=lt.child;if(ut!==null){lt.child=null;do{var Sn=ut.sibling;ut.sibling=null,ut=Sn}while(ut!==null)}}at=x}}if((x.subtreeFlags&2064)!==0&&A!==null)A.return=x,at=A;else e:for(;at!==null;){if(x=at,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:ja(9,x,x.return)}var le=x.sibling;if(le!==null){le.return=x.return,at=le;break e}at=x.return}}var ne=n.current;for(at=ne;at!==null;){A=at;var fe=A.child;if((A.subtreeFlags&2064)!==0&&fe!==null)fe.return=A,at=fe;else e:for(A=ne;at!==null;){if(G=at,(G.flags&2048)!==0)try{switch(G.tag){case 0:case 11:case 15:rl(9,G)}}catch(dt){yn(G,G.return,dt)}if(G===A){at=null;break e}var je=G.sibling;if(je!==null){je.return=G.return,at=je;break e}at=G.return}}if(Gt=p,Ur(),ue&&typeof ue.onPostCommitFiberRoot=="function")try{ue.onPostCommitFiberRoot(K,n)}catch{}c=!0}return c}finally{ie=a,Ai.transition=i}}return!1}function $p(n,i,a){i=Xs(a,i),i=up(n,i,1),n=zr(n,i,1),i=Qn(),n!==null&&(dn(n,1,i),ai(n,i))}function yn(n,i,a){if(n.tag===3)$p(n,n,a);else for(;i!==null;){if(i.tag===3){$p(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Br===null||!Br.has(c))){n=Xs(a,n),n=dp(i,n,1),i=zr(i,n,1),n=Qn(),i!==null&&(dn(i,1,n),ai(i,n));break}}i=i.return}}function mv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Qn(),n.pingedLanes|=n.suspendedLanes&a,Ln===n&&(zn&a)===a&&(Cn===4||Cn===3&&(zn&130023424)===zn&&500>jt()-Nu?gs(n,0):Ru|=a),ai(n,i)}function Xp(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ke,Ke<<=1,(Ke&130023424)===0&&(Ke=4194304)));var a=Qn();n=hr(n,i),n!==null&&(dn(n,i,a),ai(n,a))}function gv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Xp(n,a)}function xv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,p=n.memoizedState;p!==null&&(a=p.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Xp(n,a)}var Yp;Yp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||ni.current)ri=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return ri=!1,rv(n,i,a);ri=(n.flags&131072)!==0}else ri=!1,hn&&(i.flags&1048576)!==0&&Ah(i,Ho,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;nl(n,i),n=i.pendingProps;var p=Os(i,Wn.current);js(i,a),p=ou(null,i,c,n,p,a);var x=lu();return i.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ii(c)?(x=!0,zo(i)):x=!1,i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,eu(i),p.updater=el,i.stateNode=p,p._reactInternals=i,pu(i,c,n,a),i=vu(null,i,c,!0,x,a)):(i.tag=0,hn&&x&&Wc(i),Jn(null,i,p,a),i=i.child),i;case 16:c=i.elementType;e:{switch(nl(n,i),n=i.pendingProps,p=c._init,c=p(c._payload),i.type=c,p=i.tag=_v(c),n=Li(c,n),p){case 0:i=xu(null,i,c,n,a);break e;case 1:i=yp(null,i,c,n,a);break e;case 11:i=mp(null,i,c,n,a);break e;case 14:i=gp(null,i,c,Li(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,p=i.pendingProps,p=i.elementType===c?p:Li(c,p),xu(n,i,c,p,a);case 1:return c=i.type,p=i.pendingProps,p=i.elementType===c?p:Li(c,p),yp(n,i,c,p,a);case 3:e:{if(Sp(i),n===null)throw Error(t(387));c=i.pendingProps,x=i.memoizedState,p=x.element,Uh(n,i),Xo(i,c,null,a);var A=i.memoizedState;if(c=A.element,x.isDehydrated)if(x={element:c,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},i.updateQueue.baseState=x,i.memoizedState=x,i.flags&256){p=Xs(Error(t(423)),i),i=bp(n,i,c,a,p);break e}else if(c!==p){p=Xs(Error(t(424)),i),i=bp(n,i,c,a,p);break e}else for(mi=Lr(i.stateNode.containerInfo.firstChild),pi=i,hn=!0,Di=null,a=Ih(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Gs(),c===p){i=mr(n,i,a);break e}Jn(n,i,c,a)}i=i.child}return i;case 5:return Oh(i),n===null&&Xc(i),c=i.type,p=i.pendingProps,x=n!==null?n.memoizedProps:null,A=p.children,zc(c,p)?A=null:x!==null&&zc(c,x)&&(i.flags|=32),_p(n,i),Jn(n,i,A,a),i.child;case 6:return n===null&&Xc(i),null;case 13:return wp(n,i,a);case 4:return tu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Vs(i,null,c,a):Jn(n,i,c,a),i.child;case 11:return c=i.type,p=i.pendingProps,p=i.elementType===c?p:Li(c,p),mp(n,i,c,p,a);case 7:return Jn(n,i,i.pendingProps,a),i.child;case 8:return Jn(n,i,i.pendingProps.children,a),i.child;case 12:return Jn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,p=i.pendingProps,x=i.memoizedProps,A=p.value,an(Wo,c._currentValue),c._currentValue=A,x!==null)if(Pi(x.value,A)){if(x.children===p.children&&!ni.current){i=mr(n,i,a);break e}}else for(x=i.child,x!==null&&(x.return=i);x!==null;){var G=x.dependencies;if(G!==null){A=x.child;for(var Z=G.firstContext;Z!==null;){if(Z.context===c){if(x.tag===1){Z=pr(-1,a&-a),Z.tag=2;var ye=x.updateQueue;if(ye!==null){ye=ye.shared;var ze=ye.pending;ze===null?Z.next=Z:(Z.next=ze.next,ze.next=Z),ye.pending=Z}}x.lanes|=a,Z=x.alternate,Z!==null&&(Z.lanes|=a),Jc(x.return,a,i),G.lanes|=a;break}Z=Z.next}}else if(x.tag===10)A=x.type===i.type?null:x.child;else if(x.tag===18){if(A=x.return,A===null)throw Error(t(341));A.lanes|=a,G=A.alternate,G!==null&&(G.lanes|=a),Jc(A,a,i),A=x.sibling}else A=x.child;if(A!==null)A.return=x;else for(A=x;A!==null;){if(A===i){A=null;break}if(x=A.sibling,x!==null){x.return=A.return,A=x;break}A=A.return}x=A}Jn(n,i,p.children,a),i=i.child}return i;case 9:return p=i.type,c=i.pendingProps.children,js(i,a),p=Ei(p),c=c(p),i.flags|=1,Jn(n,i,c,a),i.child;case 14:return c=i.type,p=Li(c,i.pendingProps),p=Li(c.type,p),gp(n,i,c,p,a);case 15:return xp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,p=i.pendingProps,p=i.elementType===c?p:Li(c,p),nl(n,i),i.tag=1,ii(c)?(n=!0,zo(i)):n=!1,js(i,a),lp(i,c,p),pu(i,c,p,a),vu(null,i,c,!0,n,a);case 19:return Ep(n,i,a);case 22:return vp(n,i,a)}throw Error(t(156,i.tag))};function qp(n,i){return nn(n,i)}function vv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ci(n,i,a,c){return new vv(n,i,a,c)}function zu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function _v(n){if(typeof n=="function")return zu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===B)return 11;if(n===te)return 14}return 2}function Wr(n,i){var a=n.alternate;return a===null?(a=Ci(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function hl(n,i,a,c,p,x){var A=2;if(c=n,typeof n=="function")zu(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case M:return vs(a.children,p,x,i);case P:A=8,p|=8;break;case J:return n=Ci(12,a,i,p|2),n.elementType=J,n.lanes=x,n;case X:return n=Ci(13,a,i,p),n.elementType=X,n.lanes=x,n;case z:return n=Ci(19,a,i,p),n.elementType=z,n.lanes=x,n;case $:return pl(a,p,x,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case j:A=10;break e;case W:A=9;break e;case B:A=11;break e;case te:A=14;break e;case ce:A=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Ci(A,a,i,p),i.elementType=n,i.type=c,i.lanes=x,i}function vs(n,i,a,c){return n=Ci(7,n,c,i),n.lanes=a,n}function pl(n,i,a,c){return n=Ci(22,n,c,i),n.elementType=$,n.lanes=a,n.stateNode={isHidden:!1},n}function Ou(n,i,a){return n=Ci(6,n,null,i),n.lanes=a,n}function Bu(n,i,a){return i=Ci(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function yv(n,i,a,c,p){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zt(0),this.expirationTimes=zt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zt(0),this.identifierPrefix=c,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Hu(n,i,a,c,p,x,A,G,Z){return n=new yv(n,i,a,G,Z),i===1?(i=1,x===!0&&(i|=8)):i=0,x=Ci(3,null,null,i),n.current=x,x.stateNode=n,x.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},eu(x),n}function Sv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Kp(n){if(!n)return kr;n=n._reactInternals;e:{if(bn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ii(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(ii(a))return Mh(n,a,i)}return i}function Zp(n,i,a,c,p,x,A,G,Z){return n=Hu(a,c,!0,n,p,x,A,G,Z),n.context=Kp(null),a=n.current,c=Qn(),p=Gr(a),x=pr(c,p),x.callback=i??null,zr(a,x,p),n.current.lanes=p,dn(n,p,c),ai(n,c),n}function ml(n,i,a,c){var p=i.current,x=Qn(),A=Gr(p);return a=Kp(a),i.context===null?i.context=a:i.pendingContext=a,i=pr(x,A),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=zr(p,i,A),n!==null&&(Ui(n,p,A,x),$o(n,p,A)),A}function gl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Jp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Gu(n,i){Jp(n,i),(n=n.alternate)&&Jp(n,i)}function bv(){return null}var Qp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Vu(n){this._internalRoot=n}xl.prototype.render=Vu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ml(n,i,null,null)},xl.prototype.unmount=Vu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ms(function(){ml(null,n,null,null)}),i[cr]=null}};function xl(n){this._internalRoot=n}xl.prototype.unstable_scheduleHydration=function(n){if(n){var i=fi();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Yi.length&&i!==0&&i<Yi[a].priority;a++);Yi.splice(a,0,n),a===0&&Of(n)}};function Wu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function vl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function em(){}function wv(n,i,a,c,p){if(p){if(typeof c=="function"){var x=c;c=function(){var ye=gl(A);x.call(ye)}}var A=Zp(i,c,n,0,null,!1,!1,"",em);return n._reactRootContainer=A,n[cr]=A.current,Da(n.nodeType===8?n.parentNode:n),ms(),A}for(;p=n.lastChild;)n.removeChild(p);if(typeof c=="function"){var G=c;c=function(){var ye=gl(Z);G.call(ye)}}var Z=Hu(n,0,!1,null,null,!1,!1,"",em);return n._reactRootContainer=Z,n[cr]=Z.current,Da(n.nodeType===8?n.parentNode:n),ms(function(){ml(i,Z,a,c)}),Z}function _l(n,i,a,c,p){var x=a._reactRootContainer;if(x){var A=x;if(typeof p=="function"){var G=p;p=function(){var Z=gl(A);G.call(Z)}}ml(i,A,n,p)}else A=wv(a,i,n,p,c);return gl(A)}Ht=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=tt(i.pendingLanes);a!==0&&(_n(i,a|1),ai(i,jt()),(Gt&6)===0&&(Ks=jt()+500,Ur()))}break;case 13:ms(function(){var c=hr(n,1);if(c!==null){var p=Qn();Ui(c,n,1,p)}}),Gu(n,1)}},di=function(n){if(n.tag===13){var i=hr(n,134217728);if(i!==null){var a=Qn();Ui(i,n,134217728,a)}Gu(n,134217728)}},ti=function(n){if(n.tag===13){var i=Gr(n),a=hr(n,i);if(a!==null){var c=Qn();Ui(a,n,i,c)}Gu(n,i)}},fi=function(){return ie},Nt=function(n,i){var a=ie;try{return ie=n,i()}finally{ie=a}},we=function(n,i,a){switch(i){case"input":if(ft(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var p=Uo(c);if(!p)throw Error(t(90));Pe(c),ft(c,p)}}}break;case"textarea":Q(n,a);break;case"select":i=a.value,i!=null&&bt(n,!!a.multiple,i,!1)}},he=ku,Ee=ms;var Mv={usingClientEntryPoint:!1,Events:[ka,Fs,Uo,_e,Ae,ku]},qa={findFiberByHostInstance:os,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ev={bundleType:qa.bundleType,version:qa.version,rendererPackageName:qa.rendererPackageName,rendererConfig:qa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Et(n),n===null?null:n.stateNode},findFiberByHostInstance:qa.findFiberByHostInstance||bv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yl.isDisabled&&yl.supportsFiber)try{K=yl.inject(Ev),ue=yl}catch{}}return oi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mv,oi.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wu(i))throw Error(t(200));return Sv(n,i,null,a)},oi.createRoot=function(n,i){if(!Wu(n))throw Error(t(299));var a=!1,c="",p=Qp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(p=i.onRecoverableError)),i=Hu(n,1,!1,null,null,a,!1,c,p),n[cr]=i.current,Da(n.nodeType===8?n.parentNode:n),new Vu(i)},oi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Et(i),n=n===null?null:n.stateNode,n},oi.flushSync=function(n){return ms(n)},oi.hydrate=function(n,i,a){if(!vl(i))throw Error(t(200));return _l(null,n,i,!0,a)},oi.hydrateRoot=function(n,i,a){if(!Wu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,p=!1,x="",A=Qp;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(x=a.identifierPrefix),a.onRecoverableError!==void 0&&(A=a.onRecoverableError)),i=Zp(i,null,n,1,a??null,p,!1,x,A),n[cr]=i.current,Da(n),c)for(n=0;n<c.length;n++)a=c[n],p=a._getVersion,p=p(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,p]:i.mutableSourceEagerHydrationData.push(a,p);return new xl(i)},oi.render=function(n,i,a){if(!vl(i))throw Error(t(200));return _l(null,n,i,!1,a)},oi.unmountComponentAtNode=function(n){if(!vl(n))throw Error(t(40));return n._reactRootContainer?(ms(function(){_l(null,null,n,!1,function(){n._reactRootContainer=null,n[cr]=null})}),!0):!1},oi.unstable_batchedUpdates=ku,oi.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!vl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return _l(n,i,a,!1,c)},oi.version="18.3.1-next-f1338f8080-20240426",oi}var lm;function Uv(){if(lm)return Xu.exports;lm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Xu.exports=kv(),Xu.exports}var cm;function Fv(){if(cm)return Sl;cm=1;var s=Uv();return Sl.createRoot=s.createRoot,Sl.hydrateRoot=s.hydrateRoot,Sl}var zv=Fv();const Ov=c0(zv),fa=[{id:"brown-noise",title:"Brownian Deep Focus",category:"Deep Focus",tagline:"Warm sub-bass rumble for continuous coding & writing",description:"Mathematically integrated brownian spectrum with deep 450Hz low-pass rolloff. Proven to mask background distractions and alleviate cognitive fatigue.",frequency:"0 – 450 Hz Brown Spectrum",accentColor:"#f59e0b"},{id:"celestial-drone",title:"Celestial 432Hz Drone",category:"Mindfulness",tagline:"Harmonically tuned meditative Tibetan chords",description:"Multi-oscillator harmonic chord centered around the natural 432Hz tuning fork with gentle phase chorus and slow breathing resonance.",frequency:"432 Hz Pythagorean Fundamental",accentColor:"#a855f7"},{id:"binaural-gamma",title:"Gamma 40Hz Flow State",category:"Cognitive Flow",tagline:"High-cognition binaural carrier for intense problem-solving",description:"Stereo carrier tones (200Hz L / 240Hz R) inducing 40Hz gamma oscillations in the cerebral cortex, associated with high-level information processing and recall.",frequency:"40 Hz Gamma Difference Wave",accentColor:"#38bdf8"},{id:"binaural-alpha",title:"Alpha 10Hz Quiet Mind",category:"Mindfulness",tagline:"Calm relaxed alertness for reading and reflection",description:"Stereo carrier tones (210Hz L / 220Hz R) stimulating 10Hz alpha rhythms, optimal for sustained reading, journaling, and stress reduction.",frequency:"10 Hz Alpha Difference Wave",accentColor:"#34d399"},{id:"rain-storm",title:"Midnight Rain Sanctuary",category:"Deep Focus",tagline:"Gentle nocturnal rainfall with rolling thunder",description:"Procedurally shaped pink noise with gentle resonant filtering, simulating a peaceful rain shower against cabin windows in deep space.",frequency:"Pink Noise Spectrum & Low Rumble",accentColor:"#818cf8"}];class Bv{constructor(){xr(this,"ctx",null);xr(this,"masterGain",null);xr(this,"analyser",null);xr(this,"activeNodes",[]);xr(this,"currentId",null);xr(this,"_isPlaying",!1);xr(this,"_volume",.65);xr(this,"_isMuted",!1)}initContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this._isMuted?0:this._volume,this.ctx.currentTime),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=64,this.analyser.smoothingTimeConstant=.85,this.masterGain.connect(this.analyser),this.analyser.connect(this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume()}get isPlaying(){return this._isPlaying}get currentSoundscape(){return this.currentId}get volume(){return this._volume}get isMuted(){return this._isMuted}getAnalyser(){return this.analyser}setVolume(e){if(this._volume=Math.max(0,Math.min(1,e)),this.masterGain&&this.ctx){const t=this._isMuted?0:this._volume;this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime),this.masterGain.gain.linearRampToValueAtTime(t,this.ctx.currentTime+.05)}}toggleMute(){return this._isMuted=!this._isMuted,this.setVolume(this._volume),this._isMuted}stop(){!this.ctx||!this._isPlaying||(this.masterGain&&(this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime),this.masterGain.gain.linearRampToValueAtTime(.001,this.ctx.currentTime+.12)),setTimeout(()=>{this.cleanupNodes(),this._isPlaying=!1,this.currentId=null},130))}cleanupNodes(){for(const e of this.activeNodes)try{"stop"in e&&typeof e.stop=="function"&&e.stop(),e.disconnect()}catch{}this.activeNodes=[]}play(e){if(this.initContext(),!(!this.ctx||!this.masterGain)&&!(this._isPlaying&&this.currentId===e))switch(this.cleanupNodes(),this.currentId=e,this._isPlaying=!0,this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime),this.masterGain.gain.setValueAtTime(.001,this.ctx.currentTime),this.masterGain.gain.linearRampToValueAtTime(this._isMuted?0:this._volume,this.ctx.currentTime+.4),e){case"brown-noise":this.buildBrownNoise();break;case"celestial-drone":this.buildCelestialDrone();break;case"binaural-gamma":this.buildBinauralBeat(200,40);break;case"binaural-alpha":this.buildBinauralBeat(210,10);break;case"rain-storm":this.buildRainStorm();break}}buildBrownNoise(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.sampleRate*5,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),r=t.getChannelData(0);let o=0;for(let g=0;g<e;g++){const m=Math.random()*2-1;o=(o+.02*m)/1.02,r[g]=o*3.2}const l=2048;for(let g=0;g<l;g++){const m=g/l;r[g]=r[g]*m+r[e-l+g]*(1-m)}const u=this.ctx.createBufferSource();u.buffer=t,u.loop=!0;const f=this.ctx.createBiquadFilter();f.type="lowpass",f.frequency.setValueAtTime(450,this.ctx.currentTime),f.Q.setValueAtTime(.7,this.ctx.currentTime),u.connect(f),f.connect(this.masterGain),u.start(),this.activeNodes.push(u,f)}buildCelestialDrone(){if(!this.ctx||!this.masterGain)return;const e=216,t=[e,e*1.5,e*2,e*2.5],r=[-4,3,-2,5];t.forEach((o,l)=>{if(!this.ctx||!this.masterGain)return;const u=this.ctx.createOscillator();u.type=l%2===0?"sine":"triangle",u.frequency.setValueAtTime(o,this.ctx.currentTime),u.detune.setValueAtTime(r[l],this.ctx.currentTime);const f=this.ctx.createGain();f.gain.setValueAtTime(.18/(l+1),this.ctx.currentTime);const g=this.ctx.createOscillator();g.frequency.setValueAtTime(.08+l*.03,this.ctx.currentTime);const m=this.ctx.createGain();m.gain.setValueAtTime(.04,this.ctx.currentTime),g.connect(m),m.connect(f.gain),u.connect(f),f.connect(this.masterGain),u.start(),g.start(),this.activeNodes.push(u,g,f,m)})}buildBinauralBeat(e,t){if(!this.ctx||!this.masterGain)return;const r=this.ctx.createOscillator();r.type="sine",r.frequency.setValueAtTime(e,this.ctx.currentTime);const o=this.ctx.createGain();o.gain.setValueAtTime(.22,this.ctx.currentTime);const l=this.ctx.createOscillator();l.type="sine",l.frequency.setValueAtTime(e+t,this.ctx.currentTime);const u=this.ctx.createGain();u.gain.setValueAtTime(.22,this.ctx.currentTime);const f=this.ctx.createChannelMerger(2);r.connect(o),o.connect(f,0,0),l.connect(u),u.connect(f,0,1);const g=this.ctx.createOscillator();g.type="triangle",g.frequency.setValueAtTime(e/2,this.ctx.currentTime);const m=this.ctx.createGain();m.gain.setValueAtTime(.08,this.ctx.currentTime),g.connect(m),m.connect(this.masterGain),f.connect(this.masterGain),r.start(),l.start(),g.start(),this.activeNodes.push(r,l,g,o,u,m,f)}buildRainStorm(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.sampleRate*4,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),r=t.getChannelData(0);let o=0,l=0,u=0,f=0,g=0,m=0,_=0;for(let S=0;S<e;S++){const w=Math.random()*2-1;o=.99886*o+w*.0555179,l=.99332*l+w*.0750759,u=.969*u+w*.153852,f=.8665*f+w*.3104856,g=.55*g+w*.5329522,m=-.7616*m-w*.016898,r[S]=(o+l+u+f+g+m+_+w*.5362)*.12,_=w*.115926}const v=this.ctx.createBufferSource();v.buffer=t,v.loop=!0;const d=this.ctx.createBiquadFilter();d.type="lowpass",d.frequency.setValueAtTime(1200,this.ctx.currentTime),v.connect(d),d.connect(this.masterGain),v.start(),this.activeNodes.push(v,d)}playFocusChime(){try{if(this.initContext(),!this.ctx)return;const e=this.ctx.currentTime,t=[528,1056,1584],r=[.28,.09,.03],o=this.ctx.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.45,e+.04),o.gain.exponentialRampToValueAtTime(1e-4,e+3.4),o.connect(this.ctx.destination),t.forEach((l,u)=>{if(!this.ctx)return;const f=this.ctx.createOscillator(),g=this.ctx.createGain();f.type="sine",f.frequency.setValueAtTime(l,e),g.gain.setValueAtTime(r[u],e),f.connect(g),g.connect(o),f.start(e),f.stop(e+3.5)})}catch(e){console.warn("Focus chime could not play:",e)}}playBreakChime(){try{if(this.initContext(),!this.ctx)return;const e=this.ctx.currentTime;[{freq:523.25,start:0,dur:1.8,vol:.22},{freq:659.25,start:.22,dur:1.8,vol:.2},{freq:783.99,start:.44,dur:2.2,vol:.25},{freq:1046.5,start:.66,dur:2.8,vol:.18}].forEach(({freq:r,start:o,dur:l,vol:u})=>{if(!this.ctx)return;const f=e+o,g=this.ctx.createOscillator(),m=this.ctx.createGain();g.type="sine",g.frequency.setValueAtTime(r,f),m.gain.setValueAtTime(0,f),m.gain.linearRampToValueAtTime(u,f+.04),m.gain.exponentialRampToValueAtTime(1e-4,f+l),g.connect(m),m.connect(this.ctx.destination),g.start(f),g.stop(f+l+.1)})}catch(e){console.warn("Break chime could not play:",e)}}}const wr=new Bv;class Hv{startKeepAlive(){}stopKeepAlive(){}updateMetadata(e){if(!(typeof window>"u"||!("mediaSession"in navigator)))try{const t=e.artworkUrl?[{src:e.artworkUrl,sizes:"96x96",type:"image/jpeg"},{src:e.artworkUrl,sizes:"128x128",type:"image/jpeg"},{src:e.artworkUrl,sizes:"192x192",type:"image/jpeg"},{src:e.artworkUrl,sizes:"256x256",type:"image/jpeg"},{src:e.artworkUrl,sizes:"512x512",type:"image/jpeg"}]:[];navigator.mediaSession.metadata=new MediaMetadata({title:e.title||"FOR ME Sanctuary",artist:e.artist||"Private Life Ledger",album:e.album||"Sanctuary Audio",artwork:t}),navigator.mediaSession.playbackState="playing",navigator.mediaSession.setActionHandler("play",()=>{e.onPlay(),navigator.mediaSession.playbackState="playing"}),navigator.mediaSession.setActionHandler("pause",()=>{e.onPause(),navigator.mediaSession.playbackState="paused"}),e.onNext?navigator.mediaSession.setActionHandler("nexttrack",e.onNext):navigator.mediaSession.setActionHandler("nexttrack",null),e.onPrev?navigator.mediaSession.setActionHandler("previoustrack",e.onPrev):navigator.mediaSession.setActionHandler("previoustrack",null)}catch(t){console.warn("[MediaSession] Metadata update error:",t)}}setPlaybackState(e){if(!(typeof window>"u"||!("mediaSession"in navigator)))try{navigator.mediaSession.playbackState=e}catch{}}}const Hi=new Hv;function Gv(s){if(!s||typeof s!="string")return null;const e=s.trim();let t,r;const o=e.match(/[?&]list=([a-zA-Z0-9_-]+)/);o&&o[1]&&(r=o[1]);const l=e.match(/[?&]v=([a-zA-Z0-9_-]{11})/);if(l&&l[1]&&(t=l[1]),!t){const f=e.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);f&&f[1]&&(t=f[1])}if(!t){const f=e.match(/youtube\.com\/(?:live|embed|v|shorts)\/([a-zA-Z0-9_-]{11})/);f&&f[1]&&(t=f[1])}if(!t&&!r&&/^[a-zA-Z0-9_-]{11}$/.test(e)&&(t=e),!t&&!r&&/^(?:PL|RD|UU|FL|OLAK5uy_)[a-zA-Z0-9_-]+$/.test(e)&&(r=e),!t&&!r)return null;let u="video";return r&&t?u="video_in_playlist":r&&(u="playlist"),{type:u,videoId:t,playlistId:r,cleanUrl:e}}function Vv(s){return s?`https://img.youtube.com/vi/${s}/hqdefault.jpg`:"https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=600&auto=format&fit=crop"}const tc=[{id:"lofi-girl-main",title:"Lofi Girl — Beats to Relax / Study to",type:"video",videoId:"jfKfPfyJRdk",url:"https://www.youtube.com/watch?v=jfKfPfyJRdk",channel:"Lofi Girl",thumbnailUrl:"https://img.youtube.com/vi/jfKfPfyJRdk/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"synthwave-chilledcow",title:"Synthwave Radio — Chill Beats to Code & Chill",type:"video",videoId:"4xDzrJKXOOY",url:"https://www.youtube.com/watch?v=4xDzrJKXOOY",channel:"Lofi Girl / Synthwave Boy",thumbnailUrl:"https://img.youtube.com/vi/4xDzrJKXOOY/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"deep-focus-ambient",title:"Deep Focus Ambient — Flow State Alpha Waves",type:"video",videoId:"lTRiuFIWV54",url:"https://www.youtube.com/watch?v=lTRiuFIWV54",channel:"Greenred Productions",thumbnailUrl:"https://img.youtube.com/vi/lTRiuFIWV54/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"peaceful-piano-solitude",title:"Peaceful Piano & Soft Rain — Gentle Solitude",type:"video",videoId:"1WUEk0R79_Q",url:"https://www.youtube.com/watch?v=1WUEk0R79_Q",channel:"Quiet Quest",thumbnailUrl:"https://img.youtube.com/vi/1WUEk0R79_Q/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"classical-focus-mozart",title:"Classical Focus — Mozart, Beethoven, Bach",type:"video",videoId:"WPni755-Krg",url:"https://www.youtube.com/watch?v=WPni755-Krg",channel:"HALIDONMUSIC",thumbnailUrl:"https://img.youtube.com/vi/WPni755-Krg/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"cozy-coffee-shop-lofi",title:"Cozy Coffee Shop Lofi — Rainy Night Ambience",type:"video",videoId:"-5KAN9_CzSA",url:"https://www.youtube.com/watch?v=-5KAN9_CzSA",channel:"Calmed by Nature",thumbnailUrl:"https://img.youtube.com/vi/-5KAN9_CzSA/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()}],u0=Se.createContext(void 0),Js={palette:"cosmic-royal",speed:"balanced",amplitude:"majestic",waveGeometry:"dunes",waveLayerDensity:"deep",horizonHeight:"balanced",waveStrokeOpacity:.5,interactiveParallax:!0,celestialBody:"crescent-moon",celestialPosition:"default",celestialScaleMultiplier:1,rotationSpeed:"standard",showNebulaDust:!0,nebulaIntensity:"vivid",showConstellations:!0,showComet:!0,shootingStarMode:"occasional",showStars:!0,starDensity:"balanced",showCrossStars:!1,showOrbitalTrack:!1,showMeridian:!1,clockFontStyle:"tabular",clockSize:"standard",clockPosition:"center",clockDivider:"colon",clockColor:"palette",clockFormat:"12h",showSeconds:!0,showDate:!0,showGreeting:!0,clockHalo:"pulsar",ecoSleepMinutes:7.5},Za={name:"Azan",motto:"Remember, you are here for you.",defaultFocusTopic:"Engineering",defaultFocusMode:"Deep Work"},Ku={focusDurationMinutes:25,breakDurationMinutes:5,displayMode:"telemetry",autoStartBreaks:!0,soundEnabled:!0},Zr=(s,e)=>{var u;if(!s)return e;const t=s.trim().match(/(\d+)(?::(\d+))?\s*(am|pm)?/i);if(!t)return e;let r=parseInt(t[1],10);const o=t[2]?parseInt(t[2],10):0,l=(u=t[3])==null?void 0:u.toLowerCase();return l==="pm"&&r<12&&(r+=12),l==="am"&&r===12&&(r=0),Math.min(24,Math.max(0,r+o/60))},bl=[{id:"r1",title:"Morning Protocol",timeRange:"06:00 – 09:00",startHour:6,endHour:9,description:"Hydration, natural sunlight, 30-min movement, deep work session.",iconType:"morning",colorTag:"#f59e0b"},{id:"r2",title:"Core Deep Work",timeRange:"09:00 – 17:00",startHour:9,endHour:17,description:"High-leverage engineering problem solving, core building goals, focused sprints.",iconType:"afternoon",colorTag:"#8b5cf6"},{id:"r3",title:"Evening Wind-Down",timeRange:"17:00 – 22:30",startHour:17,endHour:22.5,description:"Reflection, physical cooldown, reading, digital sunset and deep recovery.",iconType:"evening",colorTag:"#3b82f6"}],Wv=({children:s})=>{const[e,t]=Se.useState(()=>{try{const I=localStorage.getItem("for_me_profile");if(I){const H=JSON.parse(I);return H.name==="Viren"?{...Za,name:"Azan"}:{...Za,...H}}return Za}catch{return Za}}),r=I=>{t(H=>{const se={...H,...I};return localStorage.setItem("for_me_profile",JSON.stringify(se)),se})};Se.useEffect(()=>{localStorage.setItem("for_me_profile",JSON.stringify(e))},[e]);const[o,l]=Se.useState(()=>{try{return localStorage.getItem("for_me_app_theme")==="light"?"light":"dark"}catch{return"dark"}}),u=()=>{l(I=>I==="light"?"dark":"light")};Se.useEffect(()=>{localStorage.setItem("for_me_app_theme",o),o==="light"?(document.documentElement.classList.add("theme-light"),document.documentElement.classList.remove("theme-dark")):(document.documentElement.classList.add("theme-dark"),document.documentElement.classList.remove("theme-light"))},[o]);const[f,g]=Se.useState(()=>{try{const I=localStorage.getItem("for_me_is_hud_hidden");return I?JSON.parse(I):!1}catch{return!1}}),m=()=>g(I=>!I);Se.useEffect(()=>{localStorage.setItem("for_me_is_hud_hidden",JSON.stringify(f))},[f]);const[_,v]=Se.useState(()=>{try{return localStorage.getItem("for_me_wallpaper_theme")||"cosmic-cliffs"}catch{return"cosmic-cliffs"}});Se.useEffect(()=>{localStorage.setItem("for_me_wallpaper_theme",_)},[_]);const[d,S]=Se.useState(()=>{try{const I=localStorage.getItem("for_me_wallpaper_settings_v3")||localStorage.getItem("for_me_wallpaper_settings_v2");return I?{...Js,...JSON.parse(I)}:Js}catch{return Js}}),w=I=>{S(H=>{const se={...H,...I};return localStorage.setItem("for_me_wallpaper_settings_v3",JSON.stringify(se)),se})},E=()=>{S(Js),localStorage.setItem("for_me_wallpaper_settings_v3",JSON.stringify(Js))},[y,b]=Se.useState(!1),D=Se.useRef(!1);D.current=y,Se.useEffect(()=>{const I=d.ecoSleepMinutes??7.5;if(I<=0){D.current&&b(!1);return}const H=I*60*1e3;let se;const De=()=>{D.current&&b(!1),clearTimeout(se),se=setTimeout(()=>{b(!0)},H)};se=setTimeout(()=>{b(!0)},H);const Re=["mousemove","mousedown","keydown","touchstart","scroll","pointerdown"];let Fe=Date.now();const Ke=()=>{const tt=Date.now();if(D.current){b(!1),De(),Fe=tt;return}tt-Fe>2e3&&(Fe=tt,De())};return Re.forEach(tt=>{window.addEventListener(tt,Ke,{passive:!0})}),()=>{clearTimeout(se),Re.forEach(tt=>{window.removeEventListener(tt,Ke)})}},[d.ecoSleepMinutes]);const[U,N]=Se.useState(()=>{try{const I=localStorage.getItem("for_me_tasks");return I?JSON.parse(I):[{id:"1",text:"Core engineering deep focus sprint",completed:!1},{id:"2",text:"System architecture review & refinement",completed:!1},{id:"3",text:"Physical movement & hydration (8 glasses)",completed:!1}]}catch{return[{id:"1",text:"Core engineering deep focus sprint",completed:!1}]}});Se.useEffect(()=>{localStorage.setItem("for_me_tasks",JSON.stringify(U))},[U]);const F=I=>{N(H=>H.map(se=>se.id===I?{...se,completed:!se.completed,completedAt:se.completed?void 0:new Date().toISOString()}:se))},L=I=>{if(!I.trim())return;const H={id:`task_${Date.now()}`,text:I.trim(),completed:!1};N(se=>[H,...se])},M=I=>{N(H=>H.filter(se=>se.id!==I))},[P,J]=Se.useState(()=>{try{const I=localStorage.getItem("for_me_habits");return I?JSON.parse(I):[{id:"h1",name:"Deep Focus & Engineering Block",completed:!1,streak:3},{id:"h2",name:"Hydration Target (8 Glasses)",completed:!1,streak:5},{id:"h3",name:"Mindful Walk & Movement",completed:!1,streak:2}]}catch{return[{id:"h1",name:"Deep Focus & Engineering Block",completed:!1,streak:1}]}});Se.useEffect(()=>{localStorage.setItem("for_me_habits",JSON.stringify(P))},[P]);const j=I=>{J(H=>H.map(se=>{if(se.id===I){const De=!se.completed;return{...se,completed:De,streak:De?se.streak+1:Math.max(0,se.streak-1)}}return se}))},W=I=>{if(!I.trim())return;const H={id:`habit_${Date.now()}`,name:I.trim(),completed:!1,streak:0};J(se=>[...se,H])},B=I=>{J(H=>H.filter(se=>se.id!==I))},[X,z]=Se.useState(()=>{try{const I=localStorage.getItem("for_me_routines");return I?JSON.parse(I):bl}catch{return bl}});Se.useEffect(()=>{localStorage.setItem("for_me_routines",JSON.stringify(X))},[X]);const te=I=>{const H=I.timeRange.split(/[-–—to]/i),se=I.startHour!==void 0?I.startHour:Zr(H[0],9),De=I.endHour!==void 0?I.endHour:Zr(H[1],se+1),Re={id:`routine_${Date.now()}`,...I,startHour:se,endHour:De,colorTag:I.colorTag||"#8b5cf6"};z(Fe=>[...Fe,Re])},ce=(I,H)=>{z(se=>se.map(De=>{if(De.id!==I)return De;const Re={...De,...H};if(H.timeRange&&(H.startHour===void 0||H.endHour===void 0)){const Fe=H.timeRange.split(/[-–—to]/i);Re.startHour=Zr(Fe[0],Re.startHour||9),Re.endHour=Zr(Fe[1],Re.endHour||17)}return Re}))},$=I=>{z(H=>H.filter(se=>se.id!==I))},re=()=>{z(bl)},[O,ee]=Se.useState(null),[k,q]=Se.useState(0);Se.useEffect(()=>{const I=()=>{const se=new Date,De=se.getHours()+se.getMinutes()/60,Re=se.getHours()*60+se.getMinutes();let Fe=null,Ke=0;for(const tt of X){let xt=tt.startHour,qe=tt.endHour;if(xt===void 0||qe===void 0){const _t=tt.timeRange.split(/[-–—to]/i);xt=Zr(_t[0],0),qe=Zr(_t[1],24)}if(xt<=qe){if(De>=xt&&De<qe){Fe=tt;const _t=Math.round(qe*60);Ke=Math.max(0,_t-Re);break}}else if(De>=xt||De<qe){Fe=tt;const _t=Math.round(qe*60);De>=xt?Ke=Math.max(0,1440-Re+_t):Ke=Math.max(0,_t-Re);break}}ee(Fe),q(Ke)};I();const H=setInterval(I,15e3);return()=>clearInterval(H)},[X]);const[pe,Y]=Se.useState(0),[oe,me]=Se.useState(!1),[ge,be]=Se.useState(e.defaultFocusTopic||"Engineering"),[Ie,rt]=Se.useState(()=>{try{const I=localStorage.getItem("for_me_study_sessions");return I?JSON.parse(I):[]}catch{return[]}});Se.useEffect(()=>{let I=null;return oe?I=setInterval(()=>{Y(H=>H+1)},1e3):!oe&&pe!==0&&clearInterval(I),()=>clearInterval(I)},[oe,pe]);const $e=()=>me(I=>!I),Pe=()=>{if(pe>30){const I={id:`ses_${Date.now()}`,subject:ge,durationSeconds:pe,timestamp:new Date().toISOString()};rt(H=>{const se=[I,...H];return localStorage.setItem("for_me_study_sessions",JSON.stringify(se)),se})}me(!1),Y(0)},Ve=(I,H,se)=>{if(I<=0)return;const De={id:`ses_manual_${Date.now()}`,subject:(H==null?void 0:H.trim())||ge||"Engineering",mode:(se==null?void 0:se.trim())||"Manual Entry",durationSeconds:Math.round(I*60),timestamp:new Date().toISOString()};rt(Re=>{const Fe=[De,...Re];return localStorage.setItem("for_me_study_sessions",JSON.stringify(Fe)),Fe})},Xe=I=>{rt(H=>{const se=H.filter(De=>De.id!==I);return localStorage.setItem("for_me_study_sessions",JSON.stringify(se)),se})},[it,vt]=Se.useState(()=>{try{const I=localStorage.getItem("for_me_pomodoro_settings");return I?{...Ku,...JSON.parse(I)}:Ku}catch{return Ku}});Se.useEffect(()=>{localStorage.setItem("for_me_pomodoro_settings",JSON.stringify(it))},[it]);const[ft,ot]=Se.useState("idle"),[Tt,de]=Se.useState(()=>it.focusDurationMinutes*60),[bt,Vt]=Se.useState(()=>it.focusDurationMinutes*60);Se.useEffect(()=>{let I=null;return(ft==="focus"||ft==="break")&&(I=setInterval(()=>{de(H=>{if(H<=1)if(ft==="focus"){it.soundEnabled&&wr.playFocusChime();const se=bt,De={id:`ses_${Date.now()}`,subject:ge,mode:"Pomodoro Focus",durationSeconds:se,timestamp:new Date().toISOString()};if(rt(Re=>{const Fe=[De,...Re];return localStorage.setItem("for_me_study_sessions",JSON.stringify(Fe)),Fe}),it.autoStartBreaks){ot("break");const Re=it.breakDurationMinutes*60;return Vt(Re),Re}else{ot("idle");const Re=it.focusDurationMinutes*60;return Vt(Re),Re}}else{it.soundEnabled&&wr.playBreakChime(),ot("idle");const se=it.focusDurationMinutes*60;return Vt(se),se}return H-1})},1e3)),()=>{I&&clearInterval(I)}},[ft,bt,it,ge]);const on=I=>{const se=(I||it.focusDurationMinutes)*60;Vt(se),de(se),ot("focus")},Q=()=>{(ft==="focus"||ft==="break")&&ot("paused")},pn=()=>{ft==="paused"&&ot("focus")},Mt=()=>{ft==="focus"?ot("paused"):ft==="paused"?ot("focus"):ft==="break"?ot("paused"):on()},Lt=()=>{ot("idle");const I=it.focusDurationMinutes*60;Vt(I),de(I)},ke=()=>{if(ft==="focus"){ot("break");const I=it.breakDurationMinutes*60;Vt(I),de(I)}else{ot("idle");const I=it.focusDurationMinutes*60;Vt(I),de(I)}},At=()=>{vt(I=>({...I,displayMode:I.displayMode==="telemetry"?"numbers":"telemetry"}))},[Ye,ct]=Se.useState(()=>{try{const I=localStorage.getItem("for_me_hydration");return I?JSON.parse(I):62.5}catch{return 62.5}});Se.useEffect(()=>{localStorage.setItem("for_me_hydration",JSON.stringify(Ye))},[Ye]);const[R,T]=Se.useState(()=>{try{const I=localStorage.getItem("for_me_sleep_hours");return I?JSON.parse(I):8}catch{return 8}}),ae=I=>{T(I),localStorage.setItem("for_me_sleep_hours",JSON.stringify(I))},[Ne,Me]=Se.useState(()=>{try{const I=localStorage.getItem("for_me_daily_rating");return I?JSON.parse(I):8}catch{return 8}});Se.useEffect(()=>{localStorage.setItem("for_me_daily_rating",JSON.stringify(Ne))},[Ne]);const Le=()=>{const I=new Date,H=I.getFullYear(),se=String(I.getMonth()+1).padStart(2,"0"),De=String(I.getDate()).padStart(2,"0");return`${H}-${se}-${De}`},[Be,ve]=Se.useState(()=>{try{return localStorage.getItem("for_me_last_active_date")||Le()}catch{return Le()}}),we=I=>{if(N(H=>{const se=H.map(De=>({...De,completed:!1,completedAt:void 0}));return localStorage.setItem("for_me_tasks",JSON.stringify(se)),se}),J(H=>{const se=H.map(De=>({...De,completed:!1,streak:De.completed?De.streak:0}));return localStorage.setItem("for_me_habits",JSON.stringify(se)),se}),ct(0),localStorage.setItem("for_me_hydration",JSON.stringify(0)),pe>30){const H={id:`ses_${Date.now()}`,subject:ge,durationSeconds:pe,timestamp:new Date().toISOString()};rt(se=>{const De=[H,...se];return localStorage.setItem("for_me_study_sessions",JSON.stringify(De)),De})}me(!1),Y(0),ve(I),localStorage.setItem("for_me_last_active_date",I)};Se.useEffect(()=>{const I=()=>{const se=Le(),De=localStorage.getItem("for_me_last_active_date");De?De!==se&&we(se):(localStorage.setItem("for_me_last_active_date",se),ve(se))};I();const H=setInterval(I,1e4);return window.addEventListener("focus",I),()=>{clearInterval(H),window.removeEventListener("focus",I)}},[pe,ge]);const Oe=()=>{const I=Le();we(I)},V=()=>{["for_me_profile","for_me_tasks","for_me_habits","for_me_routines","for_me_hydration","for_me_sleep_hours","for_me_daily_rating","for_me_study_sessions","for_me_pomodoro_settings","for_me_wallpaper_settings_v3","for_me_wallpaper_theme","for_me_app_theme","for_me_is_hud_hidden","for_me_last_active_date","for_me_active_yt","for_me_saved_yt_library"].forEach(H=>localStorage.removeItem(H)),t(Za),N([{id:"1",text:"Core engineering deep focus sprint",completed:!1},{id:"2",text:"System architecture review & refinement",completed:!1},{id:"3",text:"Physical movement & hydration (8 glasses)",completed:!1}]),J([{id:"h1",name:"Deep Focus & Engineering Block",completed:!1,streak:0},{id:"h2",name:"Hydration Target (8 Glasses)",completed:!1,streak:0},{id:"h3",name:"Mindful Walk & Movement",completed:!1,streak:0}]),z(bl),ct(0),T(8),Me(8),Y(0),me(!1),rt([]),S(Js),ve(Le())},[Te,_e]=Se.useState("youtube"),[Ae,he]=Se.useState(!1),[Ee,Ge]=Se.useState("brown-noise"),[Qe,Ce]=Se.useState(.65),[Ze,st]=Se.useState(!1),[We,ht]=Se.useState(!1),[Bt,tn]=Se.useState(!1),[rn,ln]=Se.useState(()=>{try{const I=localStorage.getItem("for_me_active_yt");return I?JSON.parse(I):tc[0]}catch{return tc[0]}}),[Yt,Hn]=Se.useState(70),[bn,sn]=Se.useState(!1),[gt,It]=Se.useState(!1),[Et,Jt]=Se.useState(()=>{try{const I=localStorage.getItem("for_me_saved_yt_library");return I?JSON.parse(I):[]}catch{return[]}});Se.useEffect(()=>{rn&&localStorage.setItem("for_me_active_yt",JSON.stringify(rn))},[rn]),Se.useEffect(()=>{localStorage.setItem("for_me_saved_yt_library",JSON.stringify(Et))},[Et]);const nn=I=>{if(We){ht(!1);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("pauseVideo")}catch{}}_e("ambient");const H=I||Ee;Ge(H),wr.play(H),he(!0);const se=fa.find(De=>De.id===H);Hi.startKeepAlive(),Hi.updateMetadata({title:(se==null?void 0:se.title)||"Procedural Soundscape",artist:"FOR ME Sanctuary (Offline)",album:"Sound Sanctuary",onPlay:()=>nn(H),onPause:Gn})},Gn=()=>{wr.stop(),he(!1),Hi.stopKeepAlive(),Hi.setPlaybackState("paused")},Vn=I=>{Ce(I),wr.setVolume(I)},Qt=()=>{const I=wr.toggleMute();st(I)},jt=I=>{wr.stop(),he(!1),ln(I),_e("youtube"),ht(!0),sn(!1);try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}},Rr=()=>{if(We){ht(!1);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("pauseVideo")}catch{}}else{wr.stop(),he(!1),_e("youtube"),ht(!0),sn(!1);try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute(),typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("playVideo")}catch{}}},ui=()=>{ht(!1);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("stopVideo")}catch{}},Si=()=>{try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("nextVideo"),ht(!0)}catch{}},bi=()=>{try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("previousVideo"),ht(!0)}catch{}},Nr=I=>{Hn(I);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("setVolume",[I])}catch{}},C=()=>{sn(I=>{const H=!I;try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand(H?"mute":"unMute")}catch{}return H})},K=(I,H)=>{var Fe;const se=Gv(I);if(!se)return{success:!1,error:"Could not recognize a valid YouTube video or playlist link. Please check the URL format and try again."};const De=(H==null?void 0:H.trim())||(se.type==="playlist"?`Custom Playlist (${(Fe=se.playlistId)==null?void 0:Fe.slice(0,8)}...)`:`YouTube Audio (${se.videoId||"Stream"})`),Re={id:`yt-${Date.now()}-${Math.random().toString(36).substr(2,5)}`,title:De,type:se.type,videoId:se.videoId,playlistId:se.playlistId,url:se.cleanUrl,thumbnailUrl:Vv(se.videoId),channel:se.type==="playlist"?"Custom YouTube Playlist":"Custom YouTube Stream",createdAt:new Date().toISOString()};return Jt(Ke=>[Re,...Ke]),jt(Re),{success:!0,item:Re}},ue=I=>{Jt(H=>H.filter(se=>se.id!==I))};return h.jsx(u0.Provider,{value:{profile:e,setProfile:t,updateProfile:r,appTheme:o,setAppTheme:l,toggleAppTheme:u,isHUDHidden:f,setIsHUDHidden:g,toggleHUDHidden:m,tasks:U,toggleTask:F,addTask:L,deleteTask:M,wallpaperTheme:_,setWallpaperTheme:v,wallpaperSettings:d,updateWallpaperSettings:w,resetWallpaperSettings:E,habits:P,toggleHabit:j,addHabit:W,deleteHabit:B,routines:X,addRoutineBlock:te,updateRoutineBlock:ce,deleteRoutineBlock:$,resetRoutines:re,activeRoutineBlock:O,activeRoutineMinutesLeft:k,studySeconds:pe,isStudyActive:oe,studySubject:ge,setStudySubject:be,toggleStudyTimer:$e,resetStudyTimer:Pe,studySessions:Ie,logManualStudyTime:Ve,deleteStudySession:Xe,pomodoroPhase:ft,pomodoroSecondsLeft:Tt,pomodoroTotalSeconds:bt,pomodoroSettings:it,setPomodoroSettings:vt,startPomodoro:on,pausePomodoro:Q,resumePomodoro:pn,togglePomodoro:Mt,resetPomodoro:Lt,skipPomodoroPhase:ke,togglePomodoroDisplayMode:At,hydration:Ye,setHydration:ct,sleepHours:R,setSleep:ae,dailyRating:Ne,setDailyRating:Me,lastActiveDate:Be,resetDayProgress:Oe,factoryReset:V,audioSource:Te,setAudioSource:_e,isAudioPlaying:Ae,activeSoundscapeId:Ee,audioVolume:Qe,isAudioMuted:Ze,playSoundscape:nn,stopSoundscape:Gn,setAudioVolume:Vn,toggleAudioMute:Qt,isYouTubePlaying:We,setYouTubeIsPlaying:ht,isYouTubePlayerReady:Bt,setYouTubePlayerReady:tn,activeYouTubeItem:rn,youtubeVolume:Yt,isYouTubeMuted:bn,savedYouTubeItems:Et,showYouTubePreview:gt,setShowYouTubePreview:It,playYouTubeItem:jt,toggleYouTubePlay:Rr,stopYouTube:ui,nextYouTubeTrack:Si,prevYouTubeTrack:bi,setYouTubeVolume:Nr,toggleYouTubeMute:C,addYouTubeToLibrary:K,removeYouTubeFromLibrary:ue,isEcoSleeping:y,setIsEcoSleeping:b},children:s})},rs=()=>{const s=Se.useContext(u0);if(!s)throw new Error("useData must be used within a DataProvider");return s},jv=()=>{const s=Se.useRef(null),{isHUDHidden:e,wallpaperSettings:t,appTheme:r,isEcoSleeping:o}=rs(),l=Se.useRef(e),u=Se.useRef(t),f=Se.useRef(r),g=Se.useRef(o);g.current=o;const m=Se.useRef(!1),_=Se.useRef(null);return Se.useEffect(()=>{l.current=e},[e]),Se.useEffect(()=>{u.current=t},[t]),Se.useEffect(()=>{f.current=r},[r]),Se.useEffect(()=>{!o&&!m.current&&_.current&&_.current()},[o]),Se.useEffect(()=>{const v=s.current;if(!v)return;const d=v.getContext("2d");if(!d)return;let S,w=0,E=0;const y=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let b=[];const D=()=>{b=[];const $=u.current.starDensity||"balanced",re=$==="sparse"?.45:$==="dense"?1.6:$==="galaxy"?2.4:1,O=w<768?85:160,ee=Math.round(O*re);for(let k=0;k<ee;k++){const q=Math.random()>.85?2:Math.random()>.45?1:0,pe=Math.random()*.65+(q===2?.85:.35);b.push({x:Math.random()*w,y:Math.random()*E,z:q,radius:pe,alpha:Math.random()*.55+.25,alphaSpeed:Math.random()*.015+.005,alphaPhase:Math.random()*Math.PI*2,vx:(Math.random()-.5)*.06,vy:(Math.random()-.5)*.06})}},U=()=>{if(!v)return;const $=Math.min(window.devicePixelRatio||1,1.25);w=window.innerWidth,E=window.innerHeight,v.width=w*$,v.height=E*$,v.style.width=`${w}px`,v.style.height=`${E}px`,d.scale($,$),D()};U(),window.addEventListener("resize",U,{passive:!0});let N=w/2,F=E/2,L=w/2,M=E/2;const P=$=>{u.current.interactiveParallax!==!1&&(N=$.clientX,F=$.clientY)};window.addEventListener("mousemove",P,{passive:!0});const J=($,re,O,ee)=>{d.save(),d.translate($,re);const k=f.current==="light",q=Math.max(.15,Math.min(.95,ee));d.globalAlpha=q;const pe=d.createRadialGradient(0,0,0,0,0,O*.9);k?(pe.addColorStop(0,"rgba(245, 158, 11, 0.75)"),pe.addColorStop(.3,"rgba(217, 119, 6, 0.28)"),pe.addColorStop(.7,"rgba(180, 83, 9, 0.06)"),pe.addColorStop(1,"rgba(255, 255, 255, 0)")):(pe.addColorStop(0,"rgba(255, 255, 255, 0.85)"),pe.addColorStop(.3,"rgba(216, 180, 254, 0.35)"),pe.addColorStop(.7,"rgba(147, 51, 234, 0.08)"),pe.addColorStop(1,"rgba(0, 0, 0, 0)")),d.fillStyle=pe,d.beginPath(),d.arc(0,0,O*.9,0,Math.PI*2),d.fill();const Y=d.createLinearGradient(-O,0,O,0);k?(Y.addColorStop(0,"rgba(245, 158, 11, 0)"),Y.addColorStop(.35,"rgba(217, 119, 6, 0.45)"),Y.addColorStop(.5,"#b45309"),Y.addColorStop(.65,"rgba(217, 119, 6, 0.45)"),Y.addColorStop(1,"rgba(245, 158, 11, 0)")):(Y.addColorStop(0,"rgba(255, 255, 255, 0)"),Y.addColorStop(.35,"rgba(233, 213, 255, 0.55)"),Y.addColorStop(.5,"#ffffff"),Y.addColorStop(.65,"rgba(233, 213, 255, 0.55)"),Y.addColorStop(1,"rgba(255, 255, 255, 0)")),d.strokeStyle=Y,d.lineWidth=.75,d.beginPath(),d.moveTo(-O,0),d.lineTo(O,0),d.stroke();const oe=d.createLinearGradient(0,-O,0,O);k?(oe.addColorStop(0,"rgba(245, 158, 11, 0)"),oe.addColorStop(.35,"rgba(217, 119, 6, 0.45)"),oe.addColorStop(.5,"#b45309"),oe.addColorStop(.65,"rgba(217, 119, 6, 0.45)"),oe.addColorStop(1,"rgba(245, 158, 11, 0)")):(oe.addColorStop(0,"rgba(255, 255, 255, 0)"),oe.addColorStop(.35,"rgba(233, 213, 255, 0.55)"),oe.addColorStop(.5,"#ffffff"),oe.addColorStop(.65,"rgba(233, 213, 255, 0.55)"),oe.addColorStop(1,"rgba(255, 255, 255, 0)")),d.strokeStyle=oe,d.lineWidth=.75,d.beginPath(),d.moveTo(0,-O),d.lineTo(0,O),d.stroke();const me=O*.38;d.strokeStyle=k?"rgba(180, 83, 9, 0.35)":"rgba(255, 255, 255, 0.4)",d.lineWidth=.5,d.beginPath(),d.moveTo(-me,-me),d.lineTo(me,me),d.moveTo(-me,me),d.lineTo(me,-me),d.stroke(),d.fillStyle=k?"#d97706":"#ffffff",d.beginPath(),d.arc(0,0,1.2,0,Math.PI*2),d.fill(),d.restore()},j=[{x:-100,y:-100,length:100,speed:18,angle:Math.PI/4+.05,alpha:0,active:!1},{x:-100,y:-100,length:80,speed:16,angle:Math.PI/4-.08,alpha:0,active:!1},{x:-100,y:-100,length:110,speed:20,angle:Math.PI/4+.12,alpha:0,active:!1}];let W=120;const B=$=>{if($==="off")return;W--;const re=$==="meteor-shower"?40:180;if(W<=0&&!y){W=Math.random()*($==="meteor-shower"?60:200)+re;const O=j.find(ee=>!ee.active);O&&(O.active=!0,O.x=Math.random()*(w*.7),O.y=Math.random()*(E*.3),O.alpha=.95,O.length=Math.random()*50+70)}for(const O of j)if(O.active)if(O.x+=Math.cos(O.angle)*O.speed,O.y+=Math.sin(O.angle)*O.speed,O.alpha-=$==="meteor-shower"?.022:.016,O.alpha<=0||O.x>w+100||O.y>E+100)O.active=!1;else{d.save();const ee=O.x-Math.cos(O.angle)*O.length,k=O.y-Math.sin(O.angle)*O.length,q=d.createLinearGradient(ee,k,O.x,O.y);q.addColorStop(0,"rgba(255, 255, 255, 0)"),q.addColorStop(.7,"rgba(216, 180, 254, "+O.alpha*.6+")"),q.addColorStop(1,"#ffffff"),d.strokeStyle=q,d.lineWidth=1.3,d.beginPath(),d.moveTo(ee,k),d.lineTo(O.x,O.y),d.stroke(),d.fillStyle="#ffffff",d.beginPath(),d.arc(O.x,O.y,1.8,0,Math.PI*2),d.fill(),d.restore()}};let X=0,z=!0;const te=()=>{z=!document.hidden};document.addEventListener("visibilitychange",te);const ce=()=>{if(!z){S=requestAnimationFrame(ce);return}const $=u.current,re=l.current;let O=1;$.speed==="frozen"?O=0:$.speed==="calm"?O=.45:$.speed==="dynamic"?O=1.45:O=.85,re&&O>0&&(O*=1.25),X+=y?.002:.014*O,d.clearRect(0,0,w,E),L+=(N-L)*.04,M+=(F-M)*.04;const ee=(L-w/2)/(w/2),k=(M-E/2)/(E/2);let q=1;$.amplitude==="subtle"?q=.55:$.amplitude==="dramatic"?q=1.6:q=1,re&&(q*=1.2);const pe=$.palette,Y=f.current==="light";let oe="#030208",me="#0b061c",ge="#170a32",be="rgba(168, 85, 247, 0.22)",Ie="rgba(99, 102, 241, 0.16)",rt="rgba(168, 85, 247, 0.30)",$e="rgba(192, 132, 252, 0.40)",Pe=["#05030e","#090518","#0e0824"],Ve="rgba(168, 85, 247, 0.25)",Xe=["#0a051d","#110930","#190c42"],it="rgba(168, 85, 247, 0.35)",vt=["#11082e","#1c0c4b","#261063"],ft="rgba(192, 132, 252, 0.45)",ot=["#180b3d","#260f64","#341584"],Tt="rgba(216, 180, 254, 0.55)",de=["#0c0620","#140833","#1e0c4a","#281061"],bt="rgba(233, 213, 255, 0.65)";Y?pe==="celestial-cyan"?(oe="#eef8ff",me="#d7effe",ge="#b5e3fd",be="rgba(14, 165, 233, 0.16)",Ie="rgba(6, 182, 212, 0.12)",rt="rgba(2, 132, 199, 0.12)",$e="rgba(3, 105, 161, 0.20)",Pe=["#93c5fd","#bfdbfe","#dbeafe"],Ve="rgba(29, 78, 216, 0.35)",Xe=["#60a5fa","#93c5fd","#bfdbfe"],it="rgba(2, 132, 199, 0.42)",vt=["#38bdf8","#7dd3fc","#bae6fd"],ft="rgba(14, 165, 233, 0.50)",ot=["#bae6fd","#d7f0fd","#f0f9ff"],Tt="rgba(56, 189, 248, 0.58)",de=["#f0f9ff","#f8fcff","#ffffff","#ffffff"],bt="rgba(2, 132, 199, 0.68)"):pe==="supernova-sunset"?(oe="#fff1f2",me="#fecdd3",ge="#fda4af",be="rgba(244, 63, 94, 0.16)",Ie="rgba(249, 115, 22, 0.12)",rt="rgba(225, 29, 72, 0.12)",$e="rgba(190, 18, 60, 0.20)",Pe=["#f43f5e","#fb7185","#fda4af"],Ve="rgba(159, 18, 57, 0.35)",Xe=["#fb7185","#fda4af","#fecdd3"],it="rgba(225, 29, 72, 0.42)",vt=["#fda4af","#fecdd3","#ffe4e6"],ft="rgba(244, 63, 94, 0.50)",ot=["#fecdd3","#ffe4e6","#fff1f2"],Tt="rgba(251, 113, 133, 0.58)",de=["#fff5f6","#fffafb","#ffffff","#ffffff"],bt="rgba(225, 29, 72, 0.68)"):pe==="nocturne-silver"?(oe="#fafafa",me="#f4f4f6",ge="#e4e4e7",be="rgba(113, 113, 122, 0.14)",Ie="rgba(82, 82, 91, 0.10)",rt="rgba(82, 82, 91, 0.12)",$e="rgba(63, 63, 70, 0.20)",Pe=["#a1a1aa","#d4d4d8","#e4e4e7"],Ve="rgba(63, 63, 70, 0.35)",Xe=["#d4d4d8","#e4e4e7","#f1f1f3"],it="rgba(82, 82, 91, 0.42)",vt=["#e4e4e7","#f1f1f3","#f4f4f6"],ft="rgba(113, 113, 122, 0.50)",ot=["#f1f1f3","#f6f6f8","#fafafa"],Tt="rgba(161, 161, 170, 0.58)",de=["#f6f6f8","#fcfcfc","#ffffff","#ffffff"],bt="rgba(82, 82, 91, 0.68)"):pe==="cyberpunk-neon"?(oe="#fdf2f8",me="#fae8ff",ge="#f5d0fe",be="rgba(236, 72, 153, 0.18)",Ie="rgba(6, 182, 212, 0.14)",rt="rgba(168, 85, 247, 0.15)",$e="rgba(236, 72, 153, 0.22)",Pe=["#f472b6","#fbcfe8","#fdf2f8"],Ve="rgba(219, 39, 119, 0.35)",Xe=["#c084fc","#e9d5ff","#fae8ff"],it="rgba(147, 51, 234, 0.42)",vt=["#38bdf8","#bae6fd","#f0f9ff"],ft="rgba(2, 132, 199, 0.50)",ot=["#fbcfe8","#fce7f3","#ffffff"],Tt="rgba(236, 72, 153, 0.58)",de=["#fdf2f8","#ffffff","#ffffff","#ffffff"],bt="rgba(168, 85, 247, 0.68)"):pe==="solar-gold"?(oe="#fffbeb",me="#fef3c7",ge="#fde68a",be="rgba(245, 158, 11, 0.20)",Ie="rgba(234, 88, 12, 0.14)",rt="rgba(217, 119, 6, 0.15)",$e="rgba(245, 158, 11, 0.22)",Pe=["#f59e0b","#fbbf24","#fef3c7"],Ve="rgba(180, 83, 9, 0.38)",Xe=["#fbbf24","#fcd34d","#fef9c3"],it="rgba(217, 119, 6, 0.45)",vt=["#fde047","#fef08a","#fefce8"],ft="rgba(234, 88, 12, 0.52)",ot=["#fef08a","#fefce8","#ffffff"],Tt="rgba(245, 158, 11, 0.60)",de=["#fefce8","#ffffff","#ffffff","#ffffff"],bt="rgba(217, 119, 6, 0.70)"):pe==="emerald-aurora"?(oe="#f0fdf4",me="#dcfce7",ge="#bbf7d0",be="rgba(16, 185, 129, 0.20)",Ie="rgba(34, 197, 94, 0.14)",rt="rgba(22, 163, 74, 0.15)",$e="rgba(16, 185, 129, 0.22)",Pe=["#86efac","#bbf7d0","#dcfce7"],Ve="rgba(22, 163, 74, 0.38)",Xe=["#4ade80","#86efac","#bbf7d0"],it="rgba(21, 128, 61, 0.45)",vt=["#22c55e","#4ade80","#86efac"],ft="rgba(16, 185, 129, 0.52)",ot=["#86efac","#bbf7d0","#f0fdf4"],Tt="rgba(22, 163, 74, 0.60)",de=["#f0fdf4","#f8fafc","#ffffff","#ffffff"],bt="rgba(16, 185, 129, 0.70)"):pe==="pure-pitch-black"?(oe="#ffffff",me="#f8fafc",ge="#f1f5f9",be="rgba(148, 163, 184, 0.16)",Ie="rgba(100, 116, 139, 0.10)",rt="rgba(71, 85, 105, 0.15)",$e="rgba(51, 65, 85, 0.22)",Pe=["#cbd5e1","#e2e8f0","#f1f5f9"],Ve="rgba(71, 85, 105, 0.38)",Xe=["#94a3b8","#cbd5e1","#e2e8f0"],it="rgba(51, 65, 85, 0.45)",vt=["#64748b","#94a3b8","#cbd5e1"],ft="rgba(30, 41, 59, 0.52)",ot=["#cbd5e1","#e2e8f0","#f8fafc"],Tt="rgba(51, 65, 85, 0.60)",de=["#f8fafc","#ffffff","#ffffff","#ffffff"],bt="rgba(15, 23, 42, 0.70)"):(oe="#fffbf3",me="#feeccd",ge="#fad4a0",be="rgba(245, 158, 11, 0.18)",Ie="rgba(217, 119, 6, 0.12)",rt="rgba(180, 83, 9, 0.12)",$e="rgba(146, 64, 14, 0.20)",Pe=["#d4a373","#bc8a5f","#a47148"],Ve="rgba(146, 64, 14, 0.38)",Xe=["#e6ba8f","#d4a373","#bc8a5f"],it="rgba(180, 83, 9, 0.45)",vt=["#f3d5b5","#e6ba8f","#d4a373"],ft="rgba(217, 119, 6, 0.52)",ot=["#faedcd","#f3d5b5","#fefae0"],Tt="rgba(245, 158, 11, 0.60)",de=["#fefae0","#fffdfa","#ffffff","#ffffff"],bt="rgba(217, 119, 6, 0.70)"):pe==="celestial-cyan"?(oe="#020712",me="#041322",ge="#071f35",be="rgba(14, 165, 233, 0.18)",Ie="rgba(6, 182, 212, 0.12)",rt="rgba(56, 189, 248, 0.12)",$e="rgba(103, 232, 249, 0.20)",Pe=["#030914","#051221","#071c31"],Ve="rgba(56, 189, 248, 0.22)",Xe=["#040f1f","#071b33","#0a2646"],it="rgba(56, 189, 248, 0.32)",vt=["#06152a","#0a2544","#0f345c"],ft="rgba(56, 189, 248, 0.42)",ot=["#081b34","#0d2e54","#134273"],Tt="rgba(125, 211, 252, 0.52)",de=["#051224","#091c36","#0e294d","#133866"],bt="rgba(186, 230, 253, 0.65)"):pe==="supernova-sunset"?(oe="#0a0208",me="#160412",ge="#24061c",be="rgba(244, 63, 94, 0.18)",Ie="rgba(249, 115, 22, 0.12)",rt="rgba(251, 113, 133, 0.12)",$e="rgba(253, 186, 116, 0.20)",Pe=["#0d020a","#170412","#22061b"],Ve="rgba(244, 63, 94, 0.22)",Xe=["#150311","#24061d","#340929"],it="rgba(244, 63, 94, 0.32)",vt=["#1e0518","#320827","#470c38"],ft="rgba(251, 113, 133, 0.42)",ot=["#280620","#420b33","#5c0f47"],Tt="rgba(251, 146, 60, 0.52)",de=["#180314","#270620","#3b0930","#500d41"],bt="rgba(254, 215, 170, 0.65)"):pe==="nocturne-silver"?(oe="#030306",me="#08080d",ge="#101017",be="rgba(161, 161, 170, 0.16)",Ie="rgba(113, 113, 122, 0.10)",rt="rgba(212, 212, 216, 0.12)",$e="rgba(228, 228, 231, 0.18)",Pe=["#060609","#0c0c12","#13131c"],Ve="rgba(161, 161, 170, 0.20)",Xe=["#0a0a0f","#12121b","#1a1a27"],it="rgba(161, 161, 170, 0.30)",vt=["#0e0e16","#181824","#232333"],ft="rgba(212, 212, 216, 0.40)",ot=["#13131e","#1f1f30","#2d2d42"],Tt="rgba(228, 228, 231, 0.50)",de=["#0c0c13","#14141f","#1d1d2b","#272738"],bt="rgba(244, 244, 245, 0.65)"):pe==="cyberpunk-neon"?(oe="#06000e",me="#120024",ge="#22003d",be="rgba(236, 72, 153, 0.22)",Ie="rgba(6, 182, 212, 0.18)",rt="rgba(34, 211, 238, 0.15)",$e="rgba(244, 114, 182, 0.22)",Pe=["#0a0014","#150029","#24003d"],Ve="rgba(168, 85, 247, 0.25)",Xe=["#120021","#1f0038","#310052"],it="rgba(236, 72, 153, 0.35)",vt=["#1c0030","#2d004d","#42006e"],ft="rgba(6, 182, 212, 0.45)",ot=["#25003d","#3d0066","#59008f"],Tt="rgba(244, 63, 94, 0.55)",de=["#160029","#260045","#380062","#4e0085"],bt="rgba(34, 211, 238, 0.70)"):pe==="solar-gold"?(oe="#080400",me="#140900",ge="#241000",be="rgba(245, 158, 11, 0.22)",Ie="rgba(234, 88, 12, 0.16)",rt="rgba(251, 191, 36, 0.15)",$e="rgba(252, 211, 77, 0.22)",Pe=["#0a0400","#170900","#261000"],Ve="rgba(217, 119, 6, 0.25)",Xe=["#130700","#220e00","#361600"],it="rgba(245, 158, 11, 0.35)",vt=["#1e0a00","#301300","#4a1e00"],ft="rgba(251, 191, 36, 0.45)",ot=["#290e00","#421a00","#612700"],Tt="rgba(252, 211, 77, 0.55)",de=["#190800","#2a0e00","#401500","#592000"],bt="rgba(254, 240, 138, 0.70)"):pe==="emerald-aurora"?(oe="#010d05",me="#021a0a",ge="#052e14",be="rgba(16, 185, 129, 0.22)",Ie="rgba(52, 211, 153, 0.16)",rt="rgba(110, 231, 183, 0.15)",$e="rgba(52, 211, 153, 0.22)",Pe=["#021508","#04240f","#073918"],Ve="rgba(16, 185, 129, 0.25)",Xe=["#031f0c","#063316","#0a4b22"],it="rgba(52, 211, 153, 0.35)",vt=["#052b12","#09431e","#0e602c"],ft="rgba(110, 231, 183, 0.45)",ot=["#083818","#0d5426","#147738"],Tt="rgba(167, 243, 208, 0.55)",de=["#062e14","#0a4720","#10632d","#18863f"],bt="rgba(110, 231, 183, 0.70)"):pe==="pure-pitch-black"&&(oe="#000000",me="#020202",ge="#060606",be="rgba(255, 255, 255, 0.08)",Ie="rgba(161, 161, 170, 0.06)",rt="rgba(161, 161, 170, 0.10)",$e="rgba(228, 228, 231, 0.15)",Pe=["#020202","#060606","#0a0a0a"],Ve="rgba(161, 161, 170, 0.20)",Xe=["#050505","#0a0a0a","#101010"],it="rgba(161, 161, 170, 0.30)",vt=["#080808","#0e0e0e","#161616"],ft="rgba(212, 212, 216, 0.40)",ot=["#0c0c0c","#141414","#1e1e1e"],Tt="rgba(228, 228, 231, 0.50)",de=["#080808","#101010","#181818","#222222"],bt="rgba(255, 255, 255, 0.75)");const Vt=d.createLinearGradient(0,0,0,E);Vt.addColorStop(0,oe),Vt.addColorStop(.45,me),Vt.addColorStop(1,ge),d.fillStyle=Vt,d.fillRect(0,0,w,E);const on=d.createRadialGradient(w*.8,E*.18,0,w*.8,E*.18,w*.5);on.addColorStop(0,be),on.addColorStop(.7,"rgba(0, 0, 0, 0.04)"),on.addColorStop(1,"rgba(0, 0, 0, 0)"),d.fillStyle=on,d.fillRect(0,0,w,E);const Q=d.createRadialGradient(w*.18,E*.82,0,w*.18,E*.82,w*.55);if(Q.addColorStop(0,Ie),Q.addColorStop(.65,"rgba(0, 0, 0, 0.03)"),Q.addColorStop(1,"rgba(0, 0, 0, 0)"),d.fillStyle=Q,d.fillRect(0,0,w,E),$.showNebulaDust){d.save();const Ae=d.createRadialGradient(w*.35,E*.2,0,w*.35,E*.2,w*.38);Ae.addColorStop(0,be),Ae.addColorStop(.5,"rgba(126, 34, 206, 0.04)"),Ae.addColorStop(1,"rgba(0, 0, 0, 0)"),d.fillStyle=Ae,d.fillRect(0,0,w,E);const he=d.createRadialGradient(w*.7,E*.14,0,w*.7,E*.14,w*.32);he.addColorStop(0,Ie),he.addColorStop(.6,"rgba(14, 116, 144, 0.03)"),he.addColorStop(1,"rgba(0, 0, 0, 0)"),d.fillStyle=he,d.fillRect(0,0,w,E),d.restore()}if($.showConstellations){d.save(),d.strokeStyle=Y?"rgba(180, 130, 80, 0.28)":"rgba(255, 255, 255, 0.14)",d.lineWidth=.75;const Ae=[{x:w*.68,y:E*.1},{x:w*.72,y:E*.08},{x:w*.76,y:E*.09},{x:w*.78,y:E*.13},{x:w*.83,y:E*.14},{x:w*.84,y:E*.1},{x:w*.78,y:E*.09}];d.beginPath(),d.moveTo(Ae[0].x,Ae[0].y);for(let Ee=1;Ee<Ae.length;Ee++)d.lineTo(Ae[Ee].x,Ae[Ee].y);d.stroke(),d.fillStyle=Y?"#b45309":"#ffffff";for(const Ee of Ae)d.beginPath(),d.arc(Ee.x,Ee.y,1.4,0,Math.PI*2),d.fill();const he=[{x:w*.28,y:E*.08},{x:w*.31,y:E*.12},{x:w*.34,y:E*.09},{x:w*.37,y:E*.13},{x:w*.4,y:E*.1}];d.beginPath(),d.moveTo(he[0].x,he[0].y);for(let Ee=1;Ee<he.length;Ee++)d.lineTo(he[Ee].x,he[Ee].y);d.stroke();for(const Ee of he)d.beginPath(),d.arc(Ee.x,Ee.y,1.3,0,Math.PI*2),d.fill();d.restore()}if($.showComet){d.save();const Ae=X*.04%1,he=w*.75,Ee=E*.04,Ge=w*.25,Qe=E*.22,Ce=he+(Ge-he)*Ae,Ze=Ee+(Qe-Ee)*Ae,st=Math.atan2(Qe-Ee,Ge-he)+Math.PI,We=140,ht=Ce+Math.cos(st)*We,Bt=Ze+Math.sin(st)*We,tn=d.createLinearGradient(ht,Bt,Ce,Ze);tn.addColorStop(0,"rgba(56, 189, 248, 0)"),tn.addColorStop(.5,"rgba(168, 85, 247, 0.25)"),tn.addColorStop(.85,"rgba(233, 213, 255, 0.65)"),tn.addColorStop(1,"#ffffff"),d.strokeStyle=tn,d.lineWidth=1.8,d.beginPath(),d.moveTo(ht,Bt),d.lineTo(Ce,Ze),d.stroke(),d.fillStyle="#ffffff",d.shadowColor="#67e8f9",d.shadowBlur=8,d.beginPath(),d.arc(Ce,Ze,2.2,0,Math.PI*2),d.fill(),d.restore()}if($.showMeridian){d.save();const Ae=w*.91;d.strokeStyle=rt,d.lineWidth=1,d.beginPath(),d.moveTo(Ae,0),d.lineTo(Ae,E),d.stroke(),d.strokeStyle="rgba(255, 255, 255, 0.18)",d.lineWidth=1;for(let he=50;he<E;he+=70)d.beginPath(),d.moveTo(Ae-4,he),d.lineTo(Ae+4,he),d.stroke();d.restore()}if($.showOrbitalTrack){d.save();const Ae=w*.78,he=E*.18,Ee=Math.min(w,E)*.45,Ge=Math.min(w,E)*.22;d.shadowColor=$e,d.shadowBlur=6,d.strokeStyle=$e,d.lineWidth=1.2,d.beginPath(),d.ellipse(Ae,he,Ee,Ge,-.22,Math.PI*.1,Math.PI*1.3),d.stroke(),d.setLineDash([3,8]),d.strokeStyle="rgba(255, 255, 255, 0.22)",d.lineWidth=.8,d.beginPath(),d.ellipse(Ae,he,Ee*1.08,Ge*1.08,-.22,Math.PI*.05,Math.PI*1.25),d.stroke(),d.setLineDash([]),d.restore()}if($.showStars)for(let Ae=0;Ae<b.length;Ae++){const he=b[Ae];!y&&O>0&&(he.x+=he.vx*O,he.y+=he.vy*O,he.alphaPhase+=he.alphaSpeed*O,he.x<0&&(he.x=w),he.x>w&&(he.x=0),he.y<0&&(he.y=E),he.y>E&&(he.y=0));const Ee=(he.z+1)*.35,Ge=he.x+ee*12*Ee,Qe=he.y+k*12*Ee,Ce=Math.max(.12,Math.min(.85,he.alpha+Math.sin(he.alphaPhase)*.22));d.beginPath(),d.arc(Ge,Qe,he.radius,0,Math.PI*2),d.fillStyle=Y?`rgba(180, 130, 80, ${(Ce*.65).toFixed(3)})`:`rgba(255, 255, 255, ${Ce.toFixed(3)})`,d.fill()}const pn=$.waveGeometry,Mt=$.waveLayerDensity,Lt=(Ae,he,Ee,Ge=2)=>{d.save(),d.translate(Ae,he);const Qe=d.createRadialGradient(0,0,0,0,0,Ge*2.5);Y?(Qe.addColorStop(0,`rgba(245, 158, 11, ${Ee})`),Qe.addColorStop(.35,`rgba(217, 119, 6, ${Ee*.7})`),Qe.addColorStop(1,"rgba(255, 255, 255, 0)"),d.fillStyle=Qe,d.beginPath(),d.arc(0,0,Ge*2.5,0,Math.PI*2),d.fill(),d.strokeStyle=`rgba(180, 83, 9, ${Ee*.8})`,d.lineWidth=.75,d.beginPath(),d.moveTo(-Ge*2,0),d.lineTo(Ge*2,0),d.moveTo(0,-Ge*2),d.lineTo(0,Ge*2),d.stroke()):(Qe.addColorStop(0,`rgba(255, 255, 255, ${Ee})`),Qe.addColorStop(.35,`rgba(233, 213, 255, ${Ee*.7})`),Qe.addColorStop(1,"rgba(255, 255, 255, 0)"),d.fillStyle=Qe,d.beginPath(),d.arc(0,0,Ge*2.5,0,Math.PI*2),d.fill(),d.strokeStyle=`rgba(255, 255, 255, ${Ee*.9})`,d.lineWidth=.75,d.beginPath(),d.moveTo(-Ge*2,0),d.lineTo(Ge*2,0),d.moveTo(0,-Ge*2),d.lineTo(0,Ge*2),d.stroke()),d.restore()},ke=(Ae,he,Ee,Ge,Qe,Ce,Ze,st,We,ht,Bt=[])=>{const tn=[0,w*.32,w*.68,w],rn=[];for(let gt=0;gt<4;gt++){const It=Math.sin(X*Ee+Ge+gt*1.4)*(he*.75)+Math.cos(X*Ee*.7+Ge*1.2+gt*2.1)*(he*.35);rn.push({x:tn[gt],y:E*Ae[gt]+It})}const ln=[rn[0],...rn,rn[rn.length-1]],Yt=[],Hn=.5;for(let gt=1;gt<ln.length-2;gt++){const It=ln[gt-1],Et=ln[gt],Jt=ln[gt+1],nn=ln[gt+2],Gn=(Jt.x-It.x)*Hn,Vn=(Jt.y-It.y)*Hn,Qt=(nn.x-Et.x)*Hn,jt=(nn.y-Et.y)*Hn;Yt.push({p1:Et,cp1:{x:Et.x+Gn/3,y:Et.y+Vn/3},cp2:{x:Jt.x-Qt/3,y:Jt.y-jt/3},p2:Jt})}d.save(),d.beginPath(),d.moveTo(rn[0].x,rn[0].y);for(const gt of Yt)d.bezierCurveTo(gt.cp1.x,gt.cp1.y,gt.cp2.x,gt.cp2.y,gt.p2.x,gt.p2.y);d.lineTo(w,E),d.lineTo(0,E),d.closePath(),d.fillStyle=Qe,d.fill(),d.save(),d.clip();const bn=Math.min(...rn.map(gt=>gt.y)),sn=d.createLinearGradient(0,bn,0,bn+140);Y?(sn.addColorStop(0,"rgba(255, 255, 255, 0.40)"),sn.addColorStop(.25,"rgba(251, 191, 36, 0.14)"),sn.addColorStop(.7,"rgba(217, 119, 6, 0.04)"),sn.addColorStop(1,"rgba(255, 255, 255, 0)")):(sn.addColorStop(0,"rgba(255, 255, 255, 0.26)"),sn.addColorStop(.25,"rgba(216, 180, 254, 0.16)"),sn.addColorStop(.7,"rgba(147, 51, 234, 0.05)"),sn.addColorStop(1,"rgba(0, 0, 0, 0)")),d.fillStyle=sn,d.fillRect(0,bn,w,E),d.beginPath();for(let gt=0;gt<Yt.length;gt++){const It=Yt[gt],Et=18+Math.sin(X*.75+gt*1.5)*4;gt===0&&d.moveTo(It.p1.x,It.p1.y+Et),d.bezierCurveTo(It.cp1.x,It.cp1.y+Et,It.cp2.x,It.cp2.y+Et,It.p2.x,It.p2.y+Et)}d.strokeStyle=Y?"rgba(160, 90, 40, 0.16)":"rgba(255, 255, 255, 0.10)",d.lineWidth=1,d.stroke(),d.beginPath();for(let gt=0;gt<Yt.length;gt++){const It=Yt[gt],Et=38+Math.cos(X*.65+gt*1.8)*5;gt===0&&d.moveTo(It.p1.x,It.p1.y+Et),d.bezierCurveTo(It.cp1.x,It.cp1.y+Et,It.cp2.x,It.cp2.y+Et,It.p2.x,It.p2.y+Et)}d.strokeStyle=Y?"rgba(160, 90, 40, 0.10)":"rgba(255, 255, 255, 0.06)",d.lineWidth=.8,d.stroke(),d.restore(),d.strokeStyle=Ce,d.lineWidth=Ze,d.stroke(),d.restore();for(const gt of Bt){const It=Math.min(Yt.length-1,Math.floor(gt*Yt.length)),Et=gt*Yt.length-It,Jt=Yt[It],nn=1-Et,Gn=nn*nn*nn*Jt.p1.x+3*nn*nn*Et*Jt.cp1.x+3*nn*Et*Et*Jt.cp2.x+Et*Et*Et*Jt.p2.x,Vn=nn*nn*nn*Jt.p1.y+3*nn*nn*Et*Jt.cp1.y+3*nn*Et*Et*Jt.cp2.y+Et*Et*Et*Jt.p2.y,Qt=.5+Math.sin(X*2+gt*8)*.35;Lt(Gn,Vn,Qt,2)}},At=(Ae,he,Ee,Ge,Qe,Ce,Ze,st,We,ht,Bt,tn)=>{const rn=Math.sin(X*Qe+Ce)*Ge,ln=[];ln.push({x:0,y:E*Ae+rn});for(let Yt=0;Yt<he.length;Yt++){const Hn=w*he[Yt],bn=E*(Ae-Ee[Yt])+Math.cos(X*Qe+Yt+Ce)*(Ge*.7);ln.push({x:Hn,y:bn})}ln.push({x:w,y:E*(Ae+.03)+rn}),d.save(),d.beginPath(),d.moveTo(ln[0].x,ln[0].y);for(let Yt=1;Yt<ln.length;Yt++)d.lineTo(ln[Yt].x,ln[Yt].y);d.lineTo(w,E),d.lineTo(0,E),d.closePath(),d.fillStyle=Ze,d.fill(),d.strokeStyle=st,d.lineWidth=We,d.stroke(),d.restore()},Ye=(Ae,he,Ee,Ge,Qe,Ce)=>{d.save(),d.globalCompositeOperation="screen",d.beginPath(),d.moveTo(0,E*Ae);const Ze=16;for(let st=0;st<=Ze;st++){const We=st/Ze*w,ht=E*Ae+Math.sin(st/Ze*Math.PI*2+X*Ee+Ge)*he;st===0?d.moveTo(We,ht):d.lineTo(We,ht)}d.lineTo(w,E),d.lineTo(0,E),d.closePath(),d.fillStyle=Qe,d.fill(),d.strokeStyle=Ce,d.lineWidth=1.8,d.stroke(),d.restore()},ct=$.horizonHeight||"balanced",R=ct==="low"?.08:ct==="high"?-.08:0,T=$.waveStrokeOpacity??1,ae=d.createLinearGradient(0,E*(.46+R),0,E*(.68+R));if(ae.addColorStop(0,"rgba(0, 0, 0, 0)"),Y)ae.addColorStop(.5,"rgba(255, 255, 255, 0.25)");else{const Ae=pe==="celestial-cyan"?"rgba(7, 31, 53, 0.45)":pe==="supernova-sunset"?"rgba(36, 6, 28, 0.45)":pe==="nocturne-silver"?"rgba(16, 16, 23, 0.45)":pe==="emerald-aurora"?"rgba(5, 46, 20, 0.45)":pe==="pure-pitch-black"?"rgba(6, 6, 6, 0.45)":"rgba(20, 10, 40, 0.45)";ae.addColorStop(.5,Ae)}ae.addColorStop(1,"rgba(0, 0, 0, 0)"),d.fillStyle=ae,d.fillRect(0,E*(.46+R),w,E*.22);const Ne=d.createLinearGradient(0,E*(.55+R),0,E);Ne.addColorStop(0,Pe[0]),Ne.addColorStop(.5,Pe[1]),Ne.addColorStop(1,Pe[2]);const Me=d.createLinearGradient(0,E*(.63+R),0,E);Me.addColorStop(0,Xe[0]),Me.addColorStop(.5,Xe[1]),Me.addColorStop(1,Xe[2]);const Le=d.createLinearGradient(0,E*(.71+R),0,E);Le.addColorStop(0,vt[0]),Le.addColorStop(.5,vt[1]),Le.addColorStop(1,vt[2]);const Be=d.createLinearGradient(0,E*(.79+R),0,E);Be.addColorStop(0,ot[0]),Be.addColorStop(.5,ot[1]),Be.addColorStop(1,ot[2]);const ve=d.createLinearGradient(0,E*(.86+R),0,E);ve.addColorStop(0,de[0]),ve.addColorStop(.35,de[1]),ve.addColorStop(.7,de[2]),ve.addColorStop(1,de[3]);const we=Y?"rgba(160, 140, 120, 0.12)":"rgba(0,0,0,0.55)",Oe=Y?"rgba(160, 140, 120, 0.16)":"rgba(0,0,0,0.65)",V=Y?"rgba(160, 140, 120, 0.20)":"rgba(0,0,0,0.70)",Te=Y?"rgba(160, 140, 120, 0.22)":"rgba(0,0,0,0.75)",_e=Y?"rgba(160, 140, 120, 0.26)":"rgba(0,0,0,0.80)";if(pn==="mountains"?(At(.48+R,[.18,.5,.82],[.14,.17,.12],12*q,.35,0,Ne,Ve,.8*T),Mt!=="airy"&&At(.58+R,[.32,.66,.9],[.12,.15,.11],14*q,.4,1.5,Me,it,.9*T),At(.68+R,[.15,.44,.75],[.11,.13,.1],15*q,.45,3.1,Le,ft,1*T),Mt==="dense"&&At(.78+R,[.28,.6,.86],[.09,.11,.08],14*q,.4,4.4,Be,Tt,1.1*T),At(.88+R,[.4,.74],[.08,.07],12*q,.35,5.8,ve,bt,1.2*T)):pn==="aurora"?(Ye(.28+R*.5,32*q,.45,0,Ne,Ve),Mt!=="airy"&&Ye(.4+R*.5,30*q,.5,1.6,Me,it),Ye(.54+R*.5,26*q,.55,3.2,Le,ft),Mt==="dense"&&Ye(.68+R*.5,22*q,.6,4.8,Be,Tt),ke([.86+R,.89+R,.85+R,.88+R],12*q,.35,6.2,ve,bt,1.2*T)):pn==="ocean"?(ke([.62+R,.58+R,.65+R,.6+R],16*q,.65,0,Ne,Ve,.8*T,we,16,-6,[.3]),Mt!=="airy"&&ke([.69+R,.73+R,.67+R,.71+R],18*q,.7,1.8,Me,it,.9*T,Oe,20,-7,[.55]),ke([.76+R,.73+R,.79+R,.75+R],20*q,.75,3.4,Le,ft,1*T,V,24,-8,[.38,.82]),Mt==="dense"&&ke([.83+R,.86+R,.81+R,.85+R],16*q,.65,4.9,Be,Tt,1.1*T,Te,28,-9,[.65]),ke([.89+R,.87+R,.92+R,.88+R],14*q,.55,6.2,ve,bt,1.2*T,_e,32,-10,[.5])):(ke([.48+R,.56+R,.64+R,.68+R],16*q,.38,0,Ne,Ve,.8*T,we,16,-6,[.24,.68]),Mt!=="airy"&&ke([.66+R,.62+R,.55+R,.6+R],18*q,.42,1.8,Me,it,.9*T,Oe,20,-7,[.35,.82]),ke([.69+R,.76+R,.72+R,.76+R],19*q,.46,3.4,Le,ft,1*T,V,24,-8,[.42,.78]),Mt==="dense"&&ke([.8+R,.77+R,.84+R,.8+R],16*q,.4,4.9,Be,Tt,1.1*T,Te,28,-9,[.18,.62]),ke([.88+R,.91+R,.86+R,.9+R],13*q,.35,6.2,ve,bt,1.2*T,_e,32,-10,[.35,.8])),$.showCrossStars){const Ae=.68+Math.sin(X*1.8)*.22,he=.6+Math.sin(X*1.5+1.2)*.24,Ee=.64+Math.sin(X*1.9+2.5)*.2,Ge=.58+Math.sin(X*1.4+3.8)*.25,Qe=.52+Math.sin(X*1.7+4.6)*.22;J(w*.5,E*.08,11,Ae),J(w*.18,E*.16,9.5,he),J(w*.84,E*.2,10,Ee),J(w*.72,E*.34,8.5,Ge),J(w*.08,E*.28,8,Qe)}if(B($.shootingStarMode||"occasional"),g.current){m.current=!1;return}m.current=!0,S=requestAnimationFrame(ce)};return _.current=()=>{m.current||(m.current=!0,ce())},S=requestAnimationFrame(ce),()=>{_.current=null,m.current=!1,cancelAnimationFrame(S),window.removeEventListener("resize",U),window.removeEventListener("mousemove",P),document.removeEventListener("visibilitychange",te)}},[]),h.jsx("canvas",{ref:s,className:"fixed inset-0 pointer-events-none z-0 select-none","aria-hidden":"true"})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yf="187",$v=0,um=1,Xv=2,$l=1,Yv=2,io=3,As=0,Bn=1,Wi=2,ha=0,ao=1,Ms=2,dm=3,fm=4,qv=5,da=100,Kv=101,Zv=102,Jv=103,Qv=104,e_=200,t_=201,n_=202,i_=203,d0=204,f0=205,r_=206,s_=207,a_=208,o_=209,l_=210,c_=211,u_=212,d_=213,f_=214,Ad=0,Cd=1,Rd=2,co=3,Nd=4,Pd=5,Dd=6,Ld=7,h0=0,h_=1,p_=2,Ar=0,p0=1,m0=2,g0=3,x0=4,v0=5,_0=6,y0=7,S0=300,ma=301,uo=302,Zu=303,Ju=304,ga=1e3,li=1001,Id=1002,On=1003,m_=1004,wl=1005,ci=1006,Qu=1007,es=1008,yi=1009,b0=1010,w0=1011,fo=1012,Sf=1013,ar=1014,ir=1015,or=1016,bf=1017,wf=1018,xa=1020,M0=35902,E0=35899,T0=1021,A0=1022,rr=1023,ns=1026,ts=1027,C0=1028,Mf=1029,Cs=1030,Ef=1031,Tf=1033,Xl=33776,Yl=33777,ql=33778,Kl=33779,kd=35840,Ud=35841,Fd=35842,zd=35843,Od=36196,Bd=37492,Hd=37496,Gd=37488,Vd=37489,nc=37490,Wd=37491,jd=37808,$d=37809,Xd=37810,Yd=37811,qd=37812,Kd=37813,Zd=37814,Jd=37815,Qd=37816,ef=37817,tf=37818,nf=37819,rf=37820,sf=37821,af=36492,of=36494,lf=36495,cf=36283,uf=36284,ic=36285,df=36286,g_=3200,ff=0,x_=1,Qr="",_i="srgb",rc="srgb-linear",sc="linear",Zt="srgb",ed=7680,v_=519,__=512,y_=513,S_=514,R0=515,b_=516,w_=517,N0=518,P0=519,M_=35044,hm="300 es",$i=2e3,ho=2001;function E_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ac(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function T_(){const s=ac("canvas");return s.style.display="block",s}const pm={};function mm(...s){const e="THREE."+s.shift();console.log(e,...s)}function D0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function St(...s){s=D0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Xt(...s){s=D0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Zl(...s){const e=s.join(" ");e in pm||(pm[e]=!0,St(...s))}function A_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const C_={[Ad]:Ad,[Rd]:Dd,[Nd]:Nd,[co]:Pd,[Cd]:Cd,[Dd]:Rd,[Ld]:Ld,[Pd]:co};class Rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],td=Math.PI/180,hf=180/Math.PI;function mo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Yn[s&255]+Yn[s>>8&255]+Yn[s>>16&255]+Yn[s>>24&255]+"-"+Yn[e&255]+Yn[e>>8&255]+"-"+Yn[e>>16&15|64]+Yn[e>>24&255]+"-"+Yn[t&63|128]+Yn[t>>8&255]+"-"+Yn[t>>16&255]+Yn[t>>24&255]+Yn[r&255]+Yn[r>>8&255]+Yn[r>>16&255]+Yn[r>>24&255]).toLowerCase()}function Ft(s,e,t){return Math.max(e,Math.min(t,s))}function R_(s,e){return(s%e+e)%e}function nd(s,e,t){return(1-t)*s+t*e}function N_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Af(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function P_(s,e){if(e.constructor===Float32Array)return s;const t=Af(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function D_(s,e){if(e.constructor===Float32Array)return s;const t=Af(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const kf=class kf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ft(this.x,e.x,t.x),this.y=Ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ft(this.x,e,t),this.y=Ft(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ft(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ft(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};kf.prototype.isVector2=!0;let kt=kf;class ya{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let g=r[o+0],m=r[o+1],_=r[o+2],v=r[o+3],d=l[u+0],S=l[u+1],w=l[u+2],E=l[u+3];if(v!==E||g!==d||m!==S||_!==w){let y=g*d+m*S+_*w+v*E;y<0&&(d=-d,S=-S,w=-w,E=-E,y=-y);let b=1-f;if(y<.9995){const D=Math.acos(y),U=Math.sin(D);b=Math.sin(b*D)/U,f=Math.sin(f*D)/U,g=g*b+d*f,m=m*b+S*f,_=_*b+w*f,v=v*b+E*f}else{g=g*b+d*f,m=m*b+S*f,_=_*b+w*f,v=v*b+E*f;const D=1/Math.sqrt(g*g+m*m+_*_+v*v);g*=D,m*=D,_*=D,v*=D}}e[t]=g,e[t+1]=m,e[t+2]=_,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],g=r[o+1],m=r[o+2],_=r[o+3],v=l[u],d=l[u+1],S=l[u+2],w=l[u+3];return e[t]=f*w+_*v+g*S-m*d,e[t+1]=g*w+_*d+m*v-f*S,e[t+2]=m*w+_*S+f*d-g*v,e[t+3]=_*w-f*v-g*d-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,g=Math.sin,m=f(r/2),_=f(o/2),v=f(l/2),d=g(r/2),S=g(o/2),w=g(l/2);switch(u){case"XYZ":this._x=d*_*v+m*S*w,this._y=m*S*v-d*_*w,this._z=m*_*w+d*S*v,this._w=m*_*v-d*S*w;break;case"YXZ":this._x=d*_*v+m*S*w,this._y=m*S*v-d*_*w,this._z=m*_*w-d*S*v,this._w=m*_*v+d*S*w;break;case"ZXY":this._x=d*_*v-m*S*w,this._y=m*S*v+d*_*w,this._z=m*_*w+d*S*v,this._w=m*_*v-d*S*w;break;case"ZYX":this._x=d*_*v-m*S*w,this._y=m*S*v+d*_*w,this._z=m*_*w-d*S*v,this._w=m*_*v+d*S*w;break;case"YZX":this._x=d*_*v+m*S*w,this._y=m*S*v+d*_*w,this._z=m*_*w-d*S*v,this._w=m*_*v-d*S*w;break;case"XZY":this._x=d*_*v-m*S*w,this._y=m*S*v-d*_*w,this._z=m*_*w+d*S*v,this._w=m*_*v+d*S*w;break;default:St("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],g=t[9],m=t[2],_=t[6],v=t[10],d=r+f+v;if(d>0){const S=.5/Math.sqrt(d+1);this._w=.25/S,this._x=(_-g)*S,this._y=(l-m)*S,this._z=(u-o)*S}else if(r>f&&r>v){const S=2*Math.sqrt(1+r-f-v);this._w=(_-g)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+m)/S}else if(f>v){const S=2*Math.sqrt(1+f-r-v);this._w=(l-m)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(g+_)/S}else{const S=2*Math.sqrt(1+v-r-f);this._w=(u-o)/S,this._x=(l+m)/S,this._y=(g+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,g=t._y,m=t._z,_=t._w;return this._x=r*_+u*f+o*m-l*g,this._y=o*_+u*g+l*f-r*m,this._z=l*_+u*m+r*g-o*f,this._w=u*_-r*f-o*g-l*m,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let g=1-t;if(f<.9995){const m=Math.acos(f),_=Math.sin(m);g=Math.sin(g*m)/_,t=Math.sin(t*m)/_,this._x=this._x*g+r*t,this._y=this._y*g+o*t,this._z=this._z*g+l*t,this._w=this._w*g+u*t,this._onChangeCallback()}else this._x=this._x*g+r*t,this._y=this._y*g+o*t,this._z=this._z*g+l*t,this._w=this._w*g+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Uf=class Uf{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,g=e.w,m=2*(u*o-f*r),_=2*(f*t-l*o),v=2*(l*r-u*t);return this.x=t+g*m+u*v-f*_,this.y=r+g*_+f*m-l*v,this.z=o+g*v+l*_-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ft(this.x,e.x,t.x),this.y=Ft(this.y,e.y,t.y),this.z=Ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ft(this.x,e,t),this.y=Ft(this.y,e,t),this.z=Ft(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ft(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,g=t.z;return this.x=o*g-l*f,this.y=l*u-r*g,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return id.copy(this).projectOnVector(e),this.sub(id)}reflect(e){return this.sub(id.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ft(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Uf.prototype.isVector3=!0;let xe=Uf;const id=new xe,gm=new ya,Ff=class Ff{constructor(e,t,r,o,l,u,f,g,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,g,m)}set(e,t,r,o,l,u,f,g,m){const _=this.elements;return _[0]=e,_[1]=o,_[2]=f,_[3]=t,_[4]=l,_[5]=g,_[6]=r,_[7]=u,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],g=r[6],m=r[1],_=r[4],v=r[7],d=r[2],S=r[5],w=r[8],E=o[0],y=o[3],b=o[6],D=o[1],U=o[4],N=o[7],F=o[2],L=o[5],M=o[8];return l[0]=u*E+f*D+g*F,l[3]=u*y+f*U+g*L,l[6]=u*b+f*N+g*M,l[1]=m*E+_*D+v*F,l[4]=m*y+_*U+v*L,l[7]=m*b+_*N+v*M,l[2]=d*E+S*D+w*F,l[5]=d*y+S*U+w*L,l[8]=d*b+S*N+w*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],g=e[6],m=e[7],_=e[8];return t*u*_-t*f*m-r*l*_+r*f*g+o*l*m-o*u*g}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],g=e[6],m=e[7],_=e[8],v=_*u-f*m,d=f*g-_*l,S=m*l-u*g,w=t*v+r*d+o*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=v*E,e[1]=(o*m-_*r)*E,e[2]=(f*r-o*u)*E,e[3]=d*E,e[4]=(_*t-o*g)*E,e[5]=(o*l-f*t)*E,e[6]=S*E,e[7]=(r*g-m*t)*E,e[8]=(u*t-r*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const g=Math.cos(l),m=Math.sin(l);return this.set(r*g,r*m,-r*(g*u+m*f)+u+e,-o*m,o*g,-o*(-m*u+g*f)+f+t,0,0,1),this}scale(e,t){return Zl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rd.makeScale(e,t)),this}rotate(e){return Zl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rd.makeRotation(-e)),this}translate(e,t){return Zl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ff.prototype.isMatrix3=!0;let wt=Ff;const rd=new wt,xm=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vm=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function L_(){const s={enabled:!0,workingColorSpace:rc,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Zt&&(o.r=Cr(o.r),o.g=Cr(o.g),o.b=Cr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Zt&&(o.r=pa(o.r),o.g=pa(o.g),o.b=pa(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Qr?sc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[u].fromXYZ).multiply(this.spaces[l].toXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[rc]:{primaries:e,whitePoint:r,transfer:sc,toXYZ:xm,fromXYZ:vm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:e,whitePoint:r,transfer:Zt,toXYZ:xm,fromXYZ:vm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),s}const Ut=L_();function Cr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function pa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Qs;class I_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Qs===void 0&&(Qs=ac("canvas")),Qs.width=e.width,Qs.height=e.height;const o=Qs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Qs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ac("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Cr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Cr(t[r]/255)*255):t[r]=Cr(t[r]);return{data:t,width:e.width,height:e.height}}else return St("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let k_=0;class Cf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=mo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(sd(o[u].image)):l.push(sd(o[u]))}else l=sd(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function sd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?I_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(St("Texture: Unable to serialize Texture."),{})}let U_=0;const ad=new xe;class Kn extends Rs{constructor(e=Kn.DEFAULT_IMAGE,t=Kn.DEFAULT_MAPPING,r=li,o=li,l=ci,u=es,f=rr,g=yi,m=Kn.DEFAULT_ANISOTROPY,_=Qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=mo(),this.name="",this.source=new Cf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=g,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ad).x}get height(){return this.source.getSize(ad).y}get depth(){return this.source.getSize(ad).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){St(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){St(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==S0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ga:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case Id:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ga:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case Id:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=S0;Kn.DEFAULT_ANISOTROPY=1;const zf=class zf{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const g=e.elements,m=g[0],_=g[4],v=g[8],d=g[1],S=g[5],w=g[9],E=g[2],y=g[6],b=g[10];if(Math.abs(_-d)<.01&&Math.abs(v-E)<.01&&Math.abs(w-y)<.01){if(Math.abs(_+d)<.1&&Math.abs(v+E)<.1&&Math.abs(w+y)<.1&&Math.abs(m+S+b-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const U=(m+1)/2,N=(S+1)/2,F=(b+1)/2,L=(_+d)/4,M=(v+E)/4,P=(w+y)/4;return U>N&&U>F?U<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(U),o=L/r,l=M/r):N>F?N<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(N),r=L/o,l=P/o):F<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(F),r=M/l,o=P/l),this.set(r,o,l,t),this}let D=Math.sqrt((y-w)*(y-w)+(v-E)*(v-E)+(d-_)*(d-_));return Math.abs(D)<.001&&(D=1),this.x=(y-w)/D,this.y=(v-E)/D,this.z=(d-_)/D,this.w=Math.acos((m+S+b-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ft(this.x,e.x,t.x),this.y=Ft(this.y,e.y,t.y),this.z=Ft(this.z,e.z,t.z),this.w=Ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ft(this.x,e,t),this.y=Ft(this.y,e,t),this.z=Ft(this.z,e,t),this.w=Ft(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ft(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zf.prototype.isVector4=!0;let xn=zf;class F_ extends Rs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new xn(0,0,e,t),this.scissorTest=!1,this.viewport=new xn(0,0,e,t),this.textures=[];const o=r.count;for(let l=0;l<o;l++)this.textures[l]=new Kn({width:e,height:t,depth:r.depth}),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:ci,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Cf(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sr extends F_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class L0 extends Kn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=On,this.minFilter=On,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class z_ extends Kn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=On,this.minFilter=On,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const fc=class fc{constructor(e,t,r,o,l,u,f,g,m,_,v,d,S,w,E,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,g,m,_,v,d,S,w,E,y)}set(e,t,r,o,l,u,f,g,m,_,v,d,S,w,E,y){const b=this.elements;return b[0]=e,b[4]=t,b[8]=r,b[12]=o,b[1]=l,b[5]=u,b[9]=f,b[13]=g,b[2]=m,b[6]=_,b[10]=v,b[14]=d,b[3]=S,b[7]=w,b[11]=E,b[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/ea.setFromMatrixColumn(e,0).length(),l=1/ea.setFromMatrixColumn(e,1).length(),u=1/ea.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),g=Math.cos(o),m=Math.sin(o),_=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const d=u*_,S=u*v,w=f*_,E=f*v;t[0]=g*_,t[4]=-g*v,t[8]=m,t[1]=S+w*m,t[5]=d-E*m,t[9]=-f*g,t[2]=E-d*m,t[6]=w+S*m,t[10]=u*g}else if(e.order==="YXZ"){const d=g*_,S=g*v,w=m*_,E=m*v;t[0]=d+E*f,t[4]=w*f-S,t[8]=u*m,t[1]=u*v,t[5]=u*_,t[9]=-f,t[2]=S*f-w,t[6]=E+d*f,t[10]=u*g}else if(e.order==="ZXY"){const d=g*_,S=g*v,w=m*_,E=m*v;t[0]=d-E*f,t[4]=-u*v,t[8]=w+S*f,t[1]=S+w*f,t[5]=u*_,t[9]=E-d*f,t[2]=-u*m,t[6]=f,t[10]=u*g}else if(e.order==="ZYX"){const d=u*_,S=u*v,w=f*_,E=f*v;t[0]=g*_,t[4]=w*m-S,t[8]=d*m+E,t[1]=g*v,t[5]=E*m+d,t[9]=S*m-w,t[2]=-m,t[6]=f*g,t[10]=u*g}else if(e.order==="YZX"){const d=u*g,S=u*m,w=f*g,E=f*m;t[0]=g*_,t[4]=E-d*v,t[8]=w*v+S,t[1]=v,t[5]=u*_,t[9]=-f*_,t[2]=-m*_,t[6]=S*v+w,t[10]=d-E*v}else if(e.order==="XZY"){const d=u*g,S=u*m,w=f*g,E=f*m;t[0]=g*_,t[4]=-v,t[8]=m*_,t[1]=d*v+E,t[5]=u*_,t[9]=S*v-w,t[2]=w*v-S,t[6]=f*_,t[10]=E*v+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(O_,e,B_)}lookAt(e,t,r){const o=this.elements;return xi.subVectors(e,t),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),$r.crossVectors(r,xi),$r.lengthSq()===0&&(Math.abs(r.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),$r.crossVectors(r,xi)),$r.normalize(),Ml.crossVectors(xi,$r),o[0]=$r.x,o[4]=Ml.x,o[8]=xi.x,o[1]=$r.y,o[5]=Ml.y,o[9]=xi.y,o[2]=$r.z,o[6]=Ml.z,o[10]=xi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],g=r[8],m=r[12],_=r[1],v=r[5],d=r[9],S=r[13],w=r[2],E=r[6],y=r[10],b=r[14],D=r[3],U=r[7],N=r[11],F=r[15],L=o[0],M=o[4],P=o[8],J=o[12],j=o[1],W=o[5],B=o[9],X=o[13],z=o[2],te=o[6],ce=o[10],$=o[14],re=o[3],O=o[7],ee=o[11],k=o[15];return l[0]=u*L+f*j+g*z+m*re,l[4]=u*M+f*W+g*te+m*O,l[8]=u*P+f*B+g*ce+m*ee,l[12]=u*J+f*X+g*$+m*k,l[1]=_*L+v*j+d*z+S*re,l[5]=_*M+v*W+d*te+S*O,l[9]=_*P+v*B+d*ce+S*ee,l[13]=_*J+v*X+d*$+S*k,l[2]=w*L+E*j+y*z+b*re,l[6]=w*M+E*W+y*te+b*O,l[10]=w*P+E*B+y*ce+b*ee,l[14]=w*J+E*X+y*$+b*k,l[3]=D*L+U*j+N*z+F*re,l[7]=D*M+U*W+N*te+F*O,l[11]=D*P+U*B+N*ce+F*ee,l[15]=D*J+U*X+N*$+F*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],g=e[9],m=e[13],_=e[2],v=e[6],d=e[10],S=e[14],w=e[3],E=e[7],y=e[11],b=e[15],D=g*S-m*d,U=f*S-m*v,N=f*d-g*v,F=u*S-m*_,L=u*d-g*_,M=u*v-f*_;return t*(E*D-y*U+b*N)-r*(w*D-y*F+b*L)+o*(w*U-E*F+b*M)-l*(w*N-E*L+y*M)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],u=e[5],f=e[9],g=e[2],m=e[6],_=e[10];return t*(u*_-f*m)-r*(l*_-f*g)+o*(l*m-u*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],g=e[6],m=e[7],_=e[8],v=e[9],d=e[10],S=e[11],w=e[12],E=e[13],y=e[14],b=e[15],D=t*f-r*u,U=t*g-o*u,N=t*m-l*u,F=r*g-o*f,L=r*m-l*f,M=o*m-l*g,P=_*E-v*w,J=_*y-d*w,j=_*b-S*w,W=v*y-d*E,B=v*b-S*E,X=d*b-S*y,z=D*X-U*B+N*W+F*j-L*J+M*P;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const te=1/z;return e[0]=(f*X-g*B+m*W)*te,e[1]=(o*B-r*X-l*W)*te,e[2]=(E*M-y*L+b*F)*te,e[3]=(d*L-v*M-S*F)*te,e[4]=(g*j-u*X-m*J)*te,e[5]=(t*X-o*j+l*J)*te,e[6]=(y*N-w*M-b*U)*te,e[7]=(_*M-d*N+S*U)*te,e[8]=(u*B-f*j+m*P)*te,e[9]=(r*j-t*B-l*P)*te,e[10]=(w*L-E*N+b*D)*te,e[11]=(v*N-_*L-S*D)*te,e[12]=(f*J-u*W-g*P)*te,e[13]=(t*W-r*J+o*P)*te,e[14]=(E*U-w*F-y*D)*te,e[15]=(_*F-v*U+d*D)*te,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,g=e.z,m=l*u,_=l*f;return this.set(m*u+r,m*f-o*g,m*g+o*f,0,m*f+o*g,_*f+r,_*g-o*u,0,m*g-o*f,_*g+o*u,l*g*g+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,g=t._w,m=l+l,_=u+u,v=f+f,d=l*m,S=l*_,w=l*v,E=u*_,y=u*v,b=f*v,D=g*m,U=g*_,N=g*v,F=r.x,L=r.y,M=r.z;return o[0]=(1-(E+b))*F,o[1]=(S+N)*F,o[2]=(w-U)*F,o[3]=0,o[4]=(S-N)*L,o[5]=(1-(d+b))*L,o[6]=(y+D)*L,o[7]=0,o[8]=(w+U)*M,o[9]=(y-D)*M,o[10]=(1-(d+E))*M,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=ea.set(o[0],o[1],o[2]).length();const f=ea.set(o[4],o[5],o[6]).length(),g=ea.set(o[8],o[9],o[10]).length();l<0&&(u=-u),Fi.copy(this);const m=1/u,_=1/f,v=1/g;return Fi.elements[0]*=m,Fi.elements[1]*=m,Fi.elements[2]*=m,Fi.elements[4]*=_,Fi.elements[5]*=_,Fi.elements[6]*=_,Fi.elements[8]*=v,Fi.elements[9]*=v,Fi.elements[10]*=v,t.setFromRotationMatrix(Fi),r.x=u,r.y=f,r.z=g,this}makePerspective(e,t,r,o,l,u,f=$i,g=!1){const m=this.elements,_=2*l/(t-e),v=2*l/(r-o),d=(t+e)/(t-e),S=(r+o)/(r-o);let w,E;if(g)w=l/(u-l),E=u*l/(u-l);else if(f===$i)w=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(f===ho)w=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=_,m[4]=0,m[8]=d,m[12]=0,m[1]=0,m[5]=v,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=w,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=$i,g=!1){const m=this.elements,_=2/(t-e),v=2/(r-o),d=-(t+e)/(t-e),S=-(r+o)/(r-o);let w,E;if(g)w=1/(u-l),E=u/(u-l);else if(f===$i)w=-2/(u-l),E=-(u+l)/(u-l);else if(f===ho)w=-1/(u-l),E=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=_,m[4]=0,m[8]=0,m[12]=d,m[1]=0,m[5]=v,m[9]=0,m[13]=S,m[2]=0,m[6]=0,m[10]=w,m[14]=E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};fc.prototype.isMatrix4=!0;let vn=fc;const ea=new xe,Fi=new vn,O_=new xe(0,0,0),B_=new xe(1,1,1),$r=new xe,Ml=new xe,xi=new xe,_m=new vn,ym=new ya;class is{constructor(e=0,t=0,r=0,o=is.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],g=o[1],m=o[5],_=o[9],v=o[2],d=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(Ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(d,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(g,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(g,l));break;case"ZYX":this._y=Math.asin(-Ft(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(d,S),this._z=Math.atan2(g,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Ft(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,S),this._y=0);break;default:St("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return _m.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_m,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ym.setFromEuler(this),this.setFromQuaternion(ym,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}is.DEFAULT_ORDER="XYZ";class I0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let H_=0;const Sm=new xe,ta=new ya,vr=new vn,El=new xe,Ja=new xe,G_=new xe,V_=new ya,bm=new xe(1,0,0),wm=new xe(0,1,0),Mm=new xe(0,0,1),Em={type:"added"},W_={type:"removed"},na={type:"childadded",child:null},od={type:"childremoved",child:null};class Zn extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zn.DEFAULT_UP.clone();const e=new xe,t=new is,r=new ya,o=new xe(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new vn},normalMatrix:{value:new wt}}),this.matrix=new vn,this.matrixWorld=new vn,this.matrixAutoUpdate=Zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new I0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.multiply(ta),this}rotateOnWorldAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.premultiply(ta),this}rotateX(e){return this.rotateOnAxis(bm,e)}rotateY(e){return this.rotateOnAxis(wm,e)}rotateZ(e){return this.rotateOnAxis(Mm,e)}translateOnAxis(e,t){return Sm.copy(e).applyQuaternion(this.quaternion),this.position.add(Sm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bm,e)}translateY(e){return this.translateOnAxis(wm,e)}translateZ(e){return this.translateOnAxis(Mm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?El.copy(e):El.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ja.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vr.lookAt(Ja,El,this.up):vr.lookAt(El,Ja,this.up),this.quaternion.setFromRotationMatrix(vr),o&&(vr.extractRotation(o.matrixWorld),ta.setFromRotationMatrix(vr),this.quaternion.premultiply(ta.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Em),na.child=e,this.dispatchEvent(na),na.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(W_),od.child=e,this.dispatchEvent(od),od.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vr.multiply(e.parent.matrixWorld)),e.applyMatrix4(vr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Em),na.child=e,this.dispatchEvent(na),na.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ja,e,G_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ja,V_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,g){return f[g.uuid]===void 0&&(f[g.uuid]=g.toJSON(e)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const g=f.shapes;if(Array.isArray(g))for(let m=0,_=g.length;m<_;m++){const v=g[m];l(e.shapes,v)}else l(e.shapes,g)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let g=0,m=this.material.length;g<m;g++)f.push(l(e.materials,this.material[g]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const g=this.animations[f];o.animations.push(l(e.animations,g))}}if(t){const f=u(e.geometries),g=u(e.materials),m=u(e.textures),_=u(e.images),v=u(e.shapes),d=u(e.skeletons),S=u(e.animations),w=u(e.nodes);f.length>0&&(r.geometries=f),g.length>0&&(r.materials=g),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),d.length>0&&(r.skeletons=d),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=o,r;function u(f){const g=[];for(const m in f){const _=f[m];delete _.metadata,g.push(_)}return g}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Zn.DEFAULT_UP=new xe(0,1,0);Zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ro extends Zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j_={type:"move"};class ld{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ro,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ro,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new xe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new xe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ro,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new xe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new xe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,g=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const E of e.hand.values()){const y=t.getJointPose(E,r),b=this._getHandJoint(m,E);y!==null&&(b.matrix.fromArray(y.transform.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale),b.matrixWorldNeedsUpdate=!0,b.jointRadius=y.radius),b.visible=y!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],d=_.position.distanceTo(v.position),S=.02,w=.005;m.inputState.pinching&&d>S+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&d<=S-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else g!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(g.matrix.fromArray(l.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,l.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(l.linearVelocity)):g.hasLinearVelocity=!1,l.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(l.angularVelocity)):g.hasAngularVelocity=!1,g.eventsEnabled&&g.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(j_)))}return f!==null&&(f.visible=o!==null),g!==null&&(g.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ro;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const k0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xr={h:0,s:0,l:0},Tl={h:0,s:0,l:0};function cd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Dt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_i){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Ut.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ut.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Ut.workingColorSpace){if(e=R_(e,1),t=Ft(t,0,1),r=Ft(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=cd(u,l,e+1/3),this.g=cd(u,l,e),this.b=cd(u,l,e-1/3)}return Ut.colorSpaceToWorking(this,o),this}setStyle(e,t=_i){function r(l){l!==void 0&&parseFloat(l)<1&&St("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseFloat(l[1]))/100,Math.min(100,parseFloat(l[2]))/100,Math.min(100,parseFloat(l[3]))/100,t);break;case"hsl":case"hsla":if(l=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:St("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);St("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_i){const r=k0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):St("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}copyLinearToSRGB(e){return this.r=pa(e.r),this.g=pa(e.g),this.b=pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_i){return Ut.workingToColorSpace(qn.copy(this),e),Math.round(Ft(qn.r*255,0,255))*65536+Math.round(Ft(qn.g*255,0,255))*256+Math.round(Ft(qn.b*255,0,255))}getHexString(e=_i){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ut.workingColorSpace){Ut.workingToColorSpace(qn.copy(this),t);const r=qn.r,o=qn.g,l=qn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let g,m;const _=(f+u)/2;if(f===u)g=0,m=0;else{const v=u-f;switch(m=_<=.5?v/(u+f):v/(2-u-f),u){case r:g=(o-l)/v+(o<l?6:0);break;case o:g=(l-r)/v+2;break;case l:g=(r-o)/v+4;break}g/=6}return e.h=g,e.s=m,e.l=_,e}getRGB(e,t=Ut.workingColorSpace){return Ut.workingToColorSpace(qn.copy(this),t),e.r=qn.r,e.g=qn.g,e.b=qn.b,e}getStyle(e=_i){Ut.workingToColorSpace(qn.copy(this),e);const t=qn.r,r=qn.g,o=qn.b;return e!==_i?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Xr),this.setHSL(Xr.h+e,Xr.s+t,Xr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Xr),e.getHSL(Tl);const r=nd(Xr.h,Tl.h,t),o=nd(Xr.s,Tl.s,t),l=nd(Xr.l,Tl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qn=new Dt;Dt.NAMES=k0;class $_ extends Zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new is,this.environmentIntensity=1,this.environmentRotation=new is,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const zi=new xe,_r=new xe,ud=new xe,yr=new xe,ia=new xe,ra=new xe,Tm=new xe,dd=new xe,fd=new xe,hd=new xe,pd=new xn,md=new xn,gd=new xn;class ji{constructor(e=new xe,t=new xe,r=new xe){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),zi.subVectors(e,t),o.cross(zi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){zi.subVectors(o,t),_r.subVectors(r,t),ud.subVectors(e,t);const u=zi.dot(zi),f=zi.dot(_r),g=zi.dot(ud),m=_r.dot(_r),_=_r.dot(ud),v=u*m-f*f;if(v===0)return l.set(0,0,0),null;const d=1/v,S=(m*g-f*_)*d,w=(u*_-f*g)*d;return l.set(1-S-w,w,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,yr)===null?!1:yr.x>=0&&yr.y>=0&&yr.x+yr.y<=1}static getInterpolation(e,t,r,o,l,u,f,g){return this.getBarycoord(e,t,r,o,yr)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(l,yr.x),g.addScaledVector(u,yr.y),g.addScaledVector(f,yr.z),g)}static getInterpolatedAttribute(e,t,r,o,l,u){return pd.setScalar(0),md.setScalar(0),gd.setScalar(0),pd.fromBufferAttribute(e,t),md.fromBufferAttribute(e,r),gd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(pd,l.x),u.addScaledVector(md,l.y),u.addScaledVector(gd,l.z),u}static isFrontFacing(e,t,r,o){return zi.subVectors(r,t),_r.subVectors(e,t),zi.cross(_r).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zi.subVectors(this.c,this.b),_r.subVectors(this.a,this.b),zi.cross(_r).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ji.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ji.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return ji.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return ji.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ji.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;ia.subVectors(o,r),ra.subVectors(l,r),dd.subVectors(e,r);const g=ia.dot(dd),m=ra.dot(dd);if(g<=0&&m<=0)return t.copy(r);fd.subVectors(e,o);const _=ia.dot(fd),v=ra.dot(fd);if(_>=0&&v<=_)return t.copy(o);const d=g*v-_*m;if(d<=0&&g>=0&&_<=0&&g-_>0)return u=g/(g-_),t.copy(r).addScaledVector(ia,u);hd.subVectors(e,l);const S=ia.dot(hd),w=ra.dot(hd);if(w>=0&&S<=w)return t.copy(l);const E=S*m-g*w;if(E<=0&&m>=0&&w<=0)return f=m/(m-w),t.copy(r).addScaledVector(ra,f);const y=_*w-S*v;if(y<=0&&v-_>=0&&S-w>=0)return Tm.subVectors(l,o),f=(v-_)/(v-_+(S-w)),t.copy(o).addScaledVector(Tm,f);const b=1/(y+E+d);return u=E*b,f=d*b,t.copy(r).addScaledVector(ia,u).addScaledVector(ra,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class go{constructor(e=new xe(1/0,1/0,1/0),t=new xe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Oi):Oi.fromBufferAttribute(l,u),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Al.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Al.copy(r.boundingBox)),Al.applyMatrix4(e.matrixWorld),this.union(Al)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qa),Cl.subVectors(this.max,Qa),sa.subVectors(e.a,Qa),aa.subVectors(e.b,Qa),oa.subVectors(e.c,Qa),Yr.subVectors(aa,sa),qr.subVectors(oa,aa),_s.subVectors(sa,oa);let t=[0,-Yr.z,Yr.y,0,-qr.z,qr.y,0,-_s.z,_s.y,Yr.z,0,-Yr.x,qr.z,0,-qr.x,_s.z,0,-_s.x,-Yr.y,Yr.x,0,-qr.y,qr.x,0,-_s.y,_s.x,0];return!xd(t,sa,aa,oa,Cl)||(t=[1,0,0,0,1,0,0,0,1],!xd(t,sa,aa,oa,Cl))?!1:(Rl.crossVectors(Yr,qr),t=[Rl.x,Rl.y,Rl.z],xd(t,sa,aa,oa,Cl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Sr=[new xe,new xe,new xe,new xe,new xe,new xe,new xe,new xe],Oi=new xe,Al=new go,sa=new xe,aa=new xe,oa=new xe,Yr=new xe,qr=new xe,_s=new xe,Qa=new xe,Cl=new xe,Rl=new xe,ys=new xe;function xd(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){ys.fromArray(s,l);const f=o.x*Math.abs(ys.x)+o.y*Math.abs(ys.y)+o.z*Math.abs(ys.z),g=e.dot(ys),m=t.dot(ys),_=r.dot(ys);if(Math.max(-Math.max(g,m,_),Math.min(g,m,_))>f)return!1}return!0}const En=new xe,Nl=new kt;let X_=0;class Es extends Rs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:X_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=M_,this.updateRanges=[],this.gpuType=ir,this.version=0,this._normalizationScale=e!==void 0?Af(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Nl.fromBufferAttribute(this,t),Nl.applyMatrix3(e),this.setXY(t,Nl.x,Nl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)En.fromBufferAttribute(this,t),En.applyMatrix3(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):P_(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):D_(e,this.array)}}class U0 extends Es{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class F0 extends Es{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Un extends Es{constructor(e,t,r){super(new Float32Array(e),t,r)}}const Y_=new go,eo=new xe,vd=new xe;class Rf{constructor(e=new xe,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Y_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);const t=eo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(eo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(vd)),this.expandByPoint(eo.copy(e.center).sub(vd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let q_=0;const Ri=new vn,_d=new Zn,la=new xe,vi=new go,to=new go,kn=new xe;class lr extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=mo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(E_(e)?F0:U0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new wt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,t,r){return Ri.makeTranslation(e,t,r),this.applyMatrix4(Ri),this}scale(e,t,r){return Ri.makeScale(e,t,r),this.applyMatrix4(Ri),this}lookAt(e){return _d.lookAt(e),_d.updateMatrix(),this.applyMatrix4(_d.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(la).negate(),this.translate(la.x,la.y,la.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Un(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&St("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new go);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new xe(-1/0,-1/0,-1/0),new xe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];vi.setFromBufferAttribute(l),this.morphTargetsRelative?(kn.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(kn),kn.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(kn)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new xe,1/0);return}if(e){const r=this.boundingSphere.center;if(vi.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];to.setFromBufferAttribute(f),this.morphTargetsRelative?(kn.addVectors(vi.min,to.min),vi.expandByPoint(kn),kn.addVectors(vi.max,to.max),vi.expandByPoint(kn)):(vi.expandByPoint(to.min),vi.expandByPoint(to.max))}vi.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)kn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(kn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],g=this.morphTargetsRelative;for(let m=0,_=f.count;m<_;m++)kn.fromBufferAttribute(f,m),g&&(la.fromBufferAttribute(e,m),kn.add(la)),o=Math.max(o,r.distanceToSquared(kn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Es(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const f=[],g=[],m=new Uint8Array(r.count);for(let J=0;J<r.count;J++)f[J]=new xe,g[J]=new xe;const _=new xe,v=new xe,d=new xe,S=new kt,w=new kt,E=new kt,y=new xe,b=new xe;function D(J,j,W){m[J]=m[j]=m[W]=1,_.fromBufferAttribute(r,J),v.fromBufferAttribute(r,j),d.fromBufferAttribute(r,W),S.fromBufferAttribute(l,J),w.fromBufferAttribute(l,j),E.fromBufferAttribute(l,W),v.sub(_),d.sub(_),w.sub(S),E.sub(S);const B=1/(w.x*E.y-E.x*w.y);isFinite(B)&&(y.copy(v).multiplyScalar(E.y).addScaledVector(d,-w.y).multiplyScalar(B),b.copy(d).multiplyScalar(w.x).addScaledVector(v,-E.x).multiplyScalar(B),f[J].add(y),f[j].add(y),f[W].add(y),g[J].add(b),g[j].add(b),g[W].add(b))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let J=0,j=U.length;J<j;++J){const W=U[J],B=W.start,X=W.count;for(let z=B,te=B+X;z<te;z+=3)D(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const N=new xe,F=new xe,L=new xe,M=new xe;function P(J){L.fromBufferAttribute(o,J),M.copy(L);const j=f[J];N.copy(j),N.sub(L.multiplyScalar(L.dot(j))).normalize(),F.crossVectors(M,j);const B=F.dot(g[J])<0?-1:1;u.setXYZW(J,N.x,N.y,N.z,B)}for(let J=0,j=r.count;J<j;++J)m[J]&&P(J);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new Es(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let d=0,S=r.count;d<S;d++)r.setXYZ(d,0,0,0);const o=new xe,l=new xe,u=new xe,f=new xe,g=new xe,m=new xe,_=new xe,v=new xe;if(e)for(let d=0,S=e.count;d<S;d+=3){const w=e.getX(d+0),E=e.getX(d+1),y=e.getX(d+2);o.fromBufferAttribute(t,w),l.fromBufferAttribute(t,E),u.fromBufferAttribute(t,y),_.subVectors(u,l),v.subVectors(o,l),_.cross(v),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,E),m.fromBufferAttribute(r,y),f.add(_),g.add(_),m.add(_),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(E,g.x,g.y,g.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let d=0,S=t.count;d<S;d+=3)o.fromBufferAttribute(t,d+0),l.fromBufferAttribute(t,d+1),u.fromBufferAttribute(t,d+2),_.subVectors(u,l),v.subVectors(o,l),_.cross(v),r.setXYZ(d+0,_.x,_.y,_.z),r.setXYZ(d+1,_.x,_.y,_.z),r.setXYZ(d+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)kn.fromBufferAttribute(e,t),kn.normalize(),e.setXYZ(t,kn.x,kn.y,kn.z)}toNonIndexed(){function e(f,g){const m=f.array,_=f.itemSize,v=f.normalized,d=new m.constructor(g.length*_);let S=0,w=0;for(let E=0,y=g.length;E<y;E++){f.isInterleavedBufferAttribute?S=g[E]*f.data.stride+f.offset:S=g[E]*_;for(let b=0;b<_;b++)d[w++]=m[S++]}return new Es(d,_,v)}if(this.index===null)return St("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new lr,r=this.index.array,o=this.attributes;for(const f in o){const g=o[f],m=e(g,r);t.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const g=[],m=l[f];for(let _=0,v=m.length;_<v;_++){const d=m[_],S=e(d,r);g.push(S)}t.morphAttributes[f]=g}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,g=u.length;f<g;f++){const m=u[f];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const g=this.parameters;for(const m in g)g[m]!==void 0&&(e[m]=g[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const g in r){const m=r[g];e.data.attributes[g]=m.toJSON(e.data)}const o={};let l=!1;for(const g in this.morphAttributes){const m=this.morphAttributes[g],_=[];for(let v=0,d=m.length;v<d;v++){const S=m[v];_.push(S.toJSON(e.data))}_.length>0&&(o[g]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const _=o[m];this.setAttribute(m,_.clone(t))}const l=e.morphAttributes;for(const m in l){const _=[],v=l[m];for(let d=0,S=v.length;d<S;d++)_.push(v[d].clone(t));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,_=u.length;m<_;m++){const v=u[m];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const g=e.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yd=new xe,K_=new xe,Z_=new wt;class Jr{constructor(e=new xe(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=yd.subVectors(r,t).cross(K_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(yd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Z_.getNormalMatrix(e),o=this.coplanarPoint(yd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let J_=0;class xo extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=mo(),this.name="",this.type="Material",this.blending=ao,this.side=As,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=d0,this.blendDst=f0,this.blendEquation=da,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=v_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ed,this.stencilZFail=ed,this.stencilZPass=ed,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){St(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){St(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const g=l[f];delete g.metadata,u.push(g)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Dt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Jr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new kt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new kt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const br=new xe,Sd=new xe,Pl=new xe,Dl=new xe;class Q_{constructor(e=new xe,t=new xe(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,br)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=br.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(br.copy(this.origin).addScaledVector(this.direction,t),br.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Sd.copy(e).add(t).multiplyScalar(.5),Pl.copy(t).sub(e).normalize(),Dl.copy(this.origin).sub(Sd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Pl),f=Dl.dot(this.direction),g=-Dl.dot(Pl),m=Dl.lengthSq(),_=Math.abs(1-u*u);let v,d,S,w;if(_>0)if(v=u*g-f,d=u*f-g,w=l*_,v>=0)if(d>=-w)if(d<=w){const E=1/_;v*=E,d*=E,S=v*(v+u*d+2*f)+d*(u*v+d+2*g)+m}else d=l,v=Math.max(0,-(u*d+f)),S=-v*v+d*(d+2*g)+m;else d=-l,v=Math.max(0,-(u*d+f)),S=-v*v+d*(d+2*g)+m;else d<=-w?(v=Math.max(0,-(-u*l+f)),d=v>0?-l:Math.min(Math.max(-l,-g),l),S=-v*v+d*(d+2*g)+m):d<=w?(v=0,d=Math.min(Math.max(-l,-g),l),S=d*(d+2*g)+m):(v=Math.max(0,-(u*l+f)),d=v>0?l:Math.min(Math.max(-l,-g),l),S=-v*v+d*(d+2*g)+m);else d=u>0?-l:l,v=Math.max(0,-(u*d+f)),S=-v*v+d*(d+2*g)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Sd).addScaledVector(Pl,d),S}intersectSphere(e,t){if(e.radius<0)return null;br.subVectors(e.center,this.origin);const r=br.dot(this.direction),o=br.dot(br)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,g=r+u;return g<0?null:f<0?this.at(g,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,g;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,d=this.origin;return m>=0?(r=(e.min.x-d.x)*m,o=(e.max.x-d.x)*m):(r=(e.max.x-d.x)*m,o=(e.min.x-d.x)*m),_>=0?(l=(e.min.y-d.y)*_,u=(e.max.y-d.y)*_):(l=(e.max.y-d.y)*_,u=(e.min.y-d.y)*_),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),v>=0?(f=(e.min.z-d.z)*v,g=(e.max.z-d.z)*v):(f=(e.max.z-d.z)*v,g=(e.min.z-d.z)*v),r>g||f>o)||((f>r||r!==r)&&(r=f),(g<o||o!==o)&&(o=g),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,br)!==null}intersectTriangle(e,t,r,o,l){const u=this.origin,f=this.direction,g=f.x,m=f.y,_=f.z,v=e.x-u.x,d=e.y-u.y,S=e.z-u.z,w=t.x-u.x,E=t.y-u.y,y=t.z-u.z,b=r.x-u.x,D=r.y-u.y,U=r.z-u.z,N=Math.abs(g),F=Math.abs(m),L=Math.abs(_);let M,P,J,j,W,B,X,z,te,ce,$,re;if(N>=F&&N>=L?(J=g,B=v,te=w,re=b,g>=0?(M=m,P=_,j=d,W=S,X=E,z=y,ce=D,$=U):(M=_,P=m,j=S,W=d,X=y,z=E,ce=U,$=D)):F>=L?(J=m,B=d,te=E,re=D,m>=0?(M=_,P=g,j=S,W=v,X=y,z=w,ce=U,$=b):(M=g,P=_,j=v,W=S,X=w,z=y,ce=b,$=U)):(J=_,B=S,te=y,re=U,_>=0?(M=g,P=m,j=v,W=d,X=w,z=E,ce=b,$=D):(M=m,P=g,j=d,W=v,X=E,z=w,ce=D,$=b)),J===0)return null;const O=M/J,ee=P/J,k=1/J,q=j-O*B,pe=W-ee*B,Y=X-O*te,oe=z-ee*te,me=ce-O*re,ge=$-ee*re,be=me*oe-ge*Y,Ie=q*ge-pe*me,rt=Y*pe-oe*q;if(o){if(be<0||Ie<0||rt<0)return null}else if((be<0||Ie<0||rt<0)&&(be>0||Ie>0||rt>0))return null;const $e=be+Ie+rt;if($e===0)return null;const Pe=k*(be*B+Ie*te+rt*re);return($e>0?Pe<0:Pe>0)?null:this.at(Pe/$e,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jl extends xo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new is,this.combine=h0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Am=new vn,Ss=new Q_,Ll=new Rf,Cm=new xe,Il=new xe,kl=new xe,Ul=new xe,bd=new xe,Fl=new xe,Rm=new xe,zl=new xe;class Tn extends Zn{constructor(e=new lr,t=new Jl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Fl.set(0,0,0);for(let g=0,m=l.length;g<m;g++){const _=f[g],v=l[g];_!==0&&(bd.fromBufferAttribute(v,e),u?Fl.addScaledVector(bd,_):Fl.addScaledVector(bd.sub(t),_))}t.add(Fl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ll.copy(r.boundingSphere),Ll.applyMatrix4(l),Ss.copy(e.ray).recast(e.near),!(Ll.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(Ll,Cm)===null||Ss.origin.distanceToSquared(Cm)>(e.far-e.near)**2))&&(Am.copy(l).invert(),Ss.copy(e.ray).applyMatrix4(Am),!(r.boundingBox!==null&&Ss.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Ss)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,g=l.attributes.position,m=l.attributes.uv,_=l.attributes.uv1,v=l.attributes.normal,d=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let w=0,E=d.length;w<E;w++){const y=d[w],b=u[y.materialIndex],D=Math.max(y.start,S.start),U=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let N=D,F=U;N<F;N+=3){const L=f.getX(N),M=f.getX(N+1),P=f.getX(N+2);o=Ol(this,b,e,r,m,_,v,L,M,P),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const w=Math.max(0,S.start),E=Math.min(f.count,S.start+S.count);for(let y=w,b=E;y<b;y+=3){const D=f.getX(y),U=f.getX(y+1),N=f.getX(y+2);o=Ol(this,u,e,r,m,_,v,D,U,N),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(g!==void 0)if(Array.isArray(u))for(let w=0,E=d.length;w<E;w++){const y=d[w],b=u[y.materialIndex],D=Math.max(y.start,S.start),U=Math.min(g.count,Math.min(y.start+y.count,S.start+S.count));for(let N=D,F=U;N<F;N+=3){const L=N,M=N+1,P=N+2;o=Ol(this,b,e,r,m,_,v,L,M,P),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const w=Math.max(0,S.start),E=Math.min(g.count,S.start+S.count);for(let y=w,b=E;y<b;y+=3){const D=y,U=y+1,N=y+2;o=Ol(this,u,e,r,m,_,v,D,U,N),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function ey(s,e,t,r,o,l,u,f){let g;if(e.side===Bn?g=r.intersectTriangle(u,l,o,!0,f):g=r.intersectTriangle(o,l,u,e.side===As,f),g===null)return null;zl.copy(f),zl.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(zl);return m<t.near||m>t.far?null:{distance:m,point:zl.clone(),object:s}}function Ol(s,e,t,r,o,l,u,f,g,m){s.getVertexPosition(f,Il),s.getVertexPosition(g,kl),s.getVertexPosition(m,Ul);const _=ey(s,e,t,r,Il,kl,Ul,Rm);if(_){const v=new xe;ji.getBarycoord(Rm,Il,kl,Ul,v),o&&(_.uv=ji.getInterpolatedAttribute(o,f,g,m,v,new kt)),l&&(_.uv1=ji.getInterpolatedAttribute(l,f,g,m,v,new kt)),u&&(_.normal=ji.getInterpolatedAttribute(u,f,g,m,v,new xe),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const d={a:f,b:g,c:m,normal:new xe,materialIndex:0};ji.getNormal(Il,kl,Ul,d.normal),_.face=d,_.barycoord=v}return _}class ty extends Kn{constructor(e=null,t=1,r=1,o,l,u,f,g,m=On,_=On,v,d){super(null,u,f,g,m,_,o,l,v,d),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bs=new Rf,ny=new kt(.5,.5),Bl=new xe;class po{constructor(e=new Jr,t=new Jr,r=new Jr,o=new Jr,l=new Jr,u=new Jr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=$i,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],g=l[2],m=l[3],_=l[4],v=l[5],d=l[6],S=l[7],w=l[8],E=l[9],y=l[10],b=l[11],D=l[12],U=l[13],N=l[14],F=l[15];if(o[0].setComponents(m-u,S-_,b-w,F-D).normalize(),o[1].setComponents(m+u,S+_,b+w,F+D).normalize(),o[2].setComponents(m+f,S+v,b+E,F+U).normalize(),o[3].setComponents(m-f,S-v,b-E,F-U).normalize(),r)o[4].setComponents(g,d,y,N).normalize(),o[5].setComponents(m-g,S-d,b-y,F-N).normalize();else if(o[4].setComponents(m-g,S-d,b-y,F-N).normalize(),t===$i)o[5].setComponents(m+g,S+d,b+y,F+N).normalize();else if(t===ho)o[5].setComponents(g,d,y,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(e){bs.center.set(0,0,0);const t=ny.distanceTo(e.center);return bs.radius=.7071067811865476+t,bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Bl.x=o.normal.x>0?e.max.x:e.min.x,Bl.y=o.normal.y>0?e.max.y:e.min.y,Bl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Bl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Nm=new vn;class Nf{constructor(){this.coordinateSystem=$i,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let o=0;o<t.length;o++){const l=t[o];Nm.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),r[o]===void 0&&(r[o]=new po),r[o].setFromProjectionMatrix(Nm,l.coordinateSystem,l.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let o=0;o<e._count;o++)t[o]===void 0&&(t[o]=new po),t[o].copy(r[o]);return this._count=e._count,this}clone(){return new Nf().copy(this)}}class z0 extends Kn{constructor(e=[],t=ma,r,o,l,u,f,g,m,_){super(e,t,r,o,l,u,f,g,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hc extends Kn{constructor(e,t,r,o,l,u,f,g,m){super(e,t,r,o,l,u,f,g,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class va extends Kn{constructor(e,t,r=ar,o,l,u,f=On,g=On,m,_=ns,v=1){if(_!==ns&&_!==ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:v};super(d,o,l,u,f,g,_,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class O0 extends va{constructor(e,t=ar,r=ma,o,l,u=On,f=On,g,m=ns){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,t,r,o,l,u,f,g,m),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class B0 extends Kn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class vo extends lr{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const g=[],m=[],_=[],v=[];let d=0,S=0;w("z","y","x",-1,-1,r,t,e,u,l,0),w("z","y","x",1,-1,r,t,-e,u,l,1),w("x","z","y",1,1,e,r,t,o,u,2),w("x","z","y",1,-1,e,r,-t,o,u,3),w("x","y","z",1,-1,e,t,r,o,l,4),w("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(g),this.setAttribute("position",new Un(m,3)),this.setAttribute("normal",new Un(_,3)),this.setAttribute("uv",new Un(v,2));function w(E,y,b,D,U,N,F,L,M,P,J){const j=N/M,W=F/P,B=N/2,X=F/2,z=L/2,te=M+1,ce=P+1;let $=0,re=0;const O=new xe;for(let ee=0;ee<ce;ee++){const k=ee*W-X;for(let q=0;q<te;q++){const pe=q*j-B;O[E]=pe*D,O[y]=k*U,O[b]=z,m.push(O.x,O.y,O.z),O[E]=0,O[y]=0,O[b]=L>0?1:-1,_.push(O.x,O.y,O.z),v.push(q/M),v.push(1-ee/P),$+=1}}for(let ee=0;ee<P;ee++)for(let k=0;k<M;k++){const q=d+k+te*ee,pe=d+k+te*(ee+1),Y=d+(k+1)+te*(ee+1),oe=d+(k+1)+te*ee;g.push(q,pe,oe),g.push(pe,Y,oe),re+=6}f.addGroup(S,re,J),S+=re,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Pf extends lr{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,f=0,g=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:g};const m=this;o=Math.floor(o),l=Math.floor(l);const _=[],v=[],d=[],S=[];let w=0;const E=[],y=r/2;let b=0;D(),u===!1&&(e>0&&U(!0),t>0&&U(!1)),this.setIndex(_),this.setAttribute("position",new Un(v,3)),this.setAttribute("normal",new Un(d,3)),this.setAttribute("uv",new Un(S,2));function D(){const N=new xe,F=new xe;let L=0;const M=(t-e)/r;for(let P=0;P<=l;P++){const J=[],j=P/l,W=j*(t-e)+e;for(let B=0;B<=o;B++){const X=B/o,z=X*g+f,te=Math.sin(z),ce=Math.cos(z);F.x=W*te,F.y=-j*r+y,F.z=W*ce,v.push(F.x,F.y,F.z),N.set(te,M,ce).normalize(),d.push(N.x,N.y,N.z),S.push(X,1-j),J.push(w++)}E.push(J)}for(let P=0;P<o;P++)for(let J=0;J<l;J++){const j=E[J][P],W=E[J+1][P],B=E[J+1][P+1],X=E[J][P+1];(e>0||J!==0)&&(_.push(j,W,X),L+=3),(t>0||J!==l-1)&&(_.push(W,B,X),L+=3)}m.addGroup(b,L,0),b+=L}function U(N){const F=w,L=new kt,M=new xe;let P=0;const J=N===!0?e:t,j=N===!0?1:-1;for(let B=1;B<=o;B++)v.push(0,y*j,0),d.push(0,j,0),S.push(.5,.5),w++;const W=w;for(let B=0;B<=o;B++){const z=B/o*g+f,te=Math.cos(z),ce=Math.sin(z);M.x=J*ce,M.y=y*j,M.z=J*te,v.push(M.x,M.y,M.z),d.push(0,j,0),L.x=te*.5+.5,L.y=ce*.5*j+.5,S.push(L.x,L.y),w++}for(let B=0;B<o;B++){const X=F+B,z=W+B;N===!0?_.push(z,z+1,X):_.push(z+1,z,X),P+=3}m.addGroup(b,P,N===!0?1:2),b+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Df extends Pf{constructor(e=1,t=1,r=32,o=1,l=!1,u=0,f=Math.PI*2){super(0,e,t,r,o,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new Df(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _o extends lr{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),g=Math.floor(o),m=f+1,_=g+1,v=e/f,d=t/g,S=[],w=[],E=[],y=[];for(let b=0;b<_;b++){const D=b*d-u;for(let U=0;U<m;U++){const N=U*v-l;w.push(N,-D,0),E.push(0,0,1),y.push(U/f),y.push(1-b/g)}}for(let b=0;b<g;b++)for(let D=0;D<f;D++){const U=D+m*b,N=D+m*(b+1),F=D+1+m*(b+1),L=D+1+m*b;S.push(U,N,L),S.push(N,F,L)}this.setIndex(S),this.setAttribute("position",new Un(w,3)),this.setAttribute("normal",new Un(E,3)),this.setAttribute("uv",new Un(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.width,e.height,e.widthSegments,e.heightSegments)}}class Lf extends lr{constructor(e=.5,t=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const f=[],g=[],m=[],_=[];let v=e;const d=(t-e)/o,S=new xe,w=new kt;for(let E=0;E<=o;E++){for(let y=0;y<=r;y++){const b=l+y/r*u;S.x=v*Math.cos(b),S.y=v*Math.sin(b),g.push(S.x,S.y,S.z),m.push(0,0,1),w.x=(S.x/t+1)/2,w.y=(S.y/t+1)/2,_.push(w.x,w.y)}v+=d}for(let E=0;E<o;E++){const y=E*(r+1);for(let b=0;b<r;b++){const D=b+y,U=D,N=D+r+1,F=D+r+2,L=D+1;f.push(U,N,L),f.push(N,F,L)}}this.setIndex(f),this.setAttribute("position",new Un(g,3)),this.setAttribute("normal",new Un(m,3)),this.setAttribute("uv",new Un(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Bi extends lr{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const g=Math.min(u+f,Math.PI);let m=0;const _=[],v=new xe,d=new xe,S=[],w=[],E=[],y=[];for(let b=0;b<=r;b++){const D=[],U=b/r,N=u+U*f,F=e*Math.cos(N),L=Math.sqrt(e*e-F*F);let M=0;b===0&&u===0?M=.5/t:b===r&&g===Math.PI&&(M=-.5/t);for(let P=0;P<=t;P++){const J=P/t,j=o+J*l;v.x=-L*Math.cos(j),v.y=F,v.z=L*Math.sin(j),w.push(v.x,v.y,v.z),d.copy(v).normalize(),E.push(d.x,d.y,d.z),y.push(J+M,1-U),D.push(m++)}_.push(D)}for(let b=0;b<r;b++)for(let D=0;D<t;D++){const U=_[b][D+1],N=_[b][D],F=_[b+1][D],L=_[b+1][D+1];(b!==0||u>0)&&S.push(U,N,L),(b!==r-1||g<Math.PI)&&S.push(N,F,L)}this.setIndex(S),this.setAttribute("position",new Un(w,3)),this.setAttribute("normal",new Un(E,3)),this.setAttribute("uv",new Un(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function _a(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(Pm(o))o.isRenderTargetTexture?(St("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(Pm(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function ei(s){const e={};for(let t=0;t<s.length;t++){const r=_a(s[t]);for(const o in r)e[o]=r[o]}return e}function Pm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function iy(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function H0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const ry={clone:_a,merge:ei};var sy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ay=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends xo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sy,this.fragmentShader=ay,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_a(e.uniforms),this.uniformsGroups=iy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new Dt().setHex(o.value);break;case"v2":this.uniforms[r].value=new kt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new xe().fromArray(o.value);break;case"v4":this.uniforms[r].value=new xn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new wt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new vn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class oy extends Ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Hl extends xo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ff,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new is,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ly extends xo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=g_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cy extends xo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class G0 extends Zn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const wd=new vn,Dm=new xe,Lm=new xe;class uy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.mapType=yi,this.map=null,this.mapPass=null,this.matrix=new vn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new po,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new xn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Dm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dm),Lm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,o){wd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(wd,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,f=o?o.w/l.y:1,g=o?o.x/l.x:0,m=o?o.y/l.y:0;e.coordinateSystem===ho||e.reversedDepth?t.set(.5*u,0,0,.5*u+g,0,.5*f,0,.5*f+m,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+g,0,.5*f,0,.5*f+m,0,0,.5,.5,0,0,0,1),t.multiply(wd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Gl=new xe,Vl=new ya,Qi=new xe;class V0 extends Zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vn,this.projectionMatrix=new vn,this.projectionMatrixInverse=new vn,this.coordinateSystem=$i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Gl,Vl,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gl,Vl,Qi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Gl,Vl,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gl,Vl,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Kr=new xe,Im=new kt,km=new kt;class Gi extends V0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(td*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hf*2*Math.atan(Math.tan(td*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z),Kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z)}getViewSize(e,t){return this.getViewBounds(e,Im,km),t.subVectors(km,Im)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(td*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const g=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/g,t-=u.offsetY*r/m,o*=u.width/g,r*=u.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class W0 extends V0{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,g=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,f-=_*this.view.offsetY,g=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class dy extends uy{constructor(){super(new W0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fy extends G0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zn.DEFAULT_UP),this.updateMatrix(),this.target=new Zn,this.shadow=new dy}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class hy extends G0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ca=-90,ua=1;class pf extends Zn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Gi(ca,ua,e,t);o.layers=this.layers,this.add(o);const l=new Gi(ca,ua,e,t);l.layers=this.layers,this.add(l);const u=new Gi(ca,ua,e,t);u.layers=this.layers,this.add(u);const f=new Gi(ca,ua,e,t);f.layers=this.layers,this.add(f);const g=new Gi(ca,ua,e,t);g.layers=this.layers,this.add(g);const m=new Gi(ca,ua,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,g]=t;for(const m of t)this.remove(m);if(e===$i)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(e===ho)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,g,m,_]=this.children,v=e.getRenderTarget(),d=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),r.texture.mipmapsAutoUpdate=E,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,_),e.setRenderTarget(v,d,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class py extends Gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Um(s,e,t,r){const o=my(r);switch(t){case T0:return s*e;case C0:return s*e/o.components*o.byteLength;case Mf:return s*e/o.components*o.byteLength;case Cs:return s*e*2/o.components*o.byteLength;case Ef:return s*e*2/o.components*o.byteLength;case A0:return s*e*3/o.components*o.byteLength;case rr:return s*e*4/o.components*o.byteLength;case Tf:return s*e*4/o.components*o.byteLength;case Xl:case Yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ql:case Kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ud:case zd:return Math.max(s,16)*Math.max(e,8)/4;case kd:case Fd:return Math.max(s,8)*Math.max(e,8)/2;case Od:case Bd:case Gd:case Vd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Hd:case nc:case Wd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case jd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $d:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case qd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Kd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Qd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ef:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case tf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case nf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case rf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case sf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case af:case of:case lf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case cf:case uf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ic:case df:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function my(s){switch(s){case yi:case b0:return{byteLength:1,components:1};case fo:case w0:case or:return{byteLength:2,components:1};case bf:case wf:return{byteLength:2,components:4};case ar:case Sf:case ir:return{byteLength:4,components:1};case M0:case E0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yf}}));typeof window<"u"&&(window.__THREE__?St("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function j0(){let s=null,e=!1,t=null,r=null;function o(l,u){r=s.requestAnimationFrame(o),t(l,u)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function gy(s){const e=new WeakMap;function t(f,g){const m=f.array,_=f.usage,v=m.byteLength,d=s.createBuffer();s.bindBuffer(g,d),s.bufferData(g,m,_),f.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=s.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:d,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,g,m){const _=g.array,v=g.updateRanges;if(s.bindBuffer(m,f),v.length===0)s.bufferSubData(m,0,_);else{v.sort((S,w)=>S.start-w.start);let d=0;for(let S=1;S<v.length;S++){const w=v[d],E=v[S];E.start<=w.start+w.count+1?w.count=Math.max(w.count,E.start+E.count-w.start):(++d,v[d]=E)}v.length=d+1;for(let S=0,w=v.length;S<w;S++){const E=v[S];s.bufferSubData(m,E.start*_.BYTES_PER_ELEMENT,_,E.start,E.count)}g.clearUpdateRanges()}g.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const g=e.get(f);g&&(s.deleteBuffer(g.buffer),e.delete(f))}function u(f,g){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,t(f,g));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,g),m.version=f.version}}return{get:o,remove:l,update:u}}var xy=`#ifdef USE_ALPHAHASH
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
}`,Ct={alphahash_fragment:xy,alphahash_pars_fragment:vy,alphamap_fragment:_y,alphamap_pars_fragment:yy,alphatest_fragment:Sy,alphatest_pars_fragment:by,aomap_fragment:wy,aomap_pars_fragment:My,batching_pars_vertex:Ey,batching_vertex:Ty,begin_vertex:Ay,beginnormal_vertex:Cy,bsdfs:Ry,iridescence_fragment:Ny,bumpmap_pars_fragment:Py,clipping_planes_fragment:Dy,clipping_planes_pars_fragment:Ly,clipping_planes_pars_vertex:Iy,clipping_planes_vertex:ky,color_fragment:Uy,color_pars_fragment:Fy,color_pars_vertex:zy,color_vertex:Oy,common:By,defaultnormal_vertex:Hy,displacementmap_pars_vertex:Gy,displacementmap_vertex:Vy,emissivemap_fragment:Wy,emissivemap_pars_fragment:jy,colorspace_fragment:$y,colorspace_pars_fragment:Xy,envmap_fragment:Yy,envmap_common_pars_fragment:qy,envmap_pars_fragment:Ky,envmap_pars_vertex:Zy,envmap_physical_pars_fragment:l1,envmap_vertex:Jy,fog_vertex:Qy,fog_pars_vertex:e1,fog_fragment:t1,fog_pars_fragment:n1,gradientmap_pars_fragment:i1,lightmap_pars_fragment:r1,lights_lambert_fragment:s1,lights_lambert_pars_fragment:a1,lights_pars_begin:o1,lights_toon_fragment:c1,lights_toon_pars_fragment:u1,lights_phong_fragment:d1,lights_phong_pars_fragment:f1,lights_physical_fragment:h1,lights_physical_pars_fragment:p1,lights_fragment_begin:m1,lights_fragment_maps:g1,lights_fragment_end:x1,lightprobes_pars_fragment:v1,logdepthbuf_fragment:_1,logdepthbuf_pars_fragment:y1,logdepthbuf_pars_vertex:S1,logdepthbuf_vertex:b1,map_fragment:w1,map_pars_fragment:M1,map_particle_fragment:E1,map_particle_pars_fragment:T1,metalnessmap_fragment:A1,metalnessmap_pars_fragment:C1,morphinstance_vertex:R1,morphcolor_vertex:N1,morphnormal_vertex:P1,morphtarget_pars_vertex:D1,morphtarget_vertex:L1,normal_fragment_begin:I1,normal_fragment_maps:k1,normal_pars_fragment:U1,normal_pars_vertex:F1,normal_vertex:z1,normalmap_pars_fragment:O1,clearcoat_normal_fragment_begin:B1,clearcoat_normal_fragment_maps:H1,clearcoat_pars_fragment:G1,iridescence_pars_fragment:V1,opaque_fragment:W1,packing:j1,premultiplied_alpha_fragment:$1,project_vertex:X1,dithering_fragment:Y1,dithering_pars_fragment:q1,roughnessmap_fragment:K1,roughnessmap_pars_fragment:Z1,shadowmap_pars_fragment:J1,shadowmap_pars_vertex:Q1,shadowmap_vertex:eS,shadowmask_pars_fragment:tS,skinbase_vertex:nS,skinning_pars_vertex:iS,skinning_vertex:rS,skinnormal_vertex:sS,specularmap_fragment:aS,specularmap_pars_fragment:oS,tonemapping_fragment:lS,tonemapping_pars_fragment:cS,transmission_fragment:uS,transmission_pars_fragment:dS,uv_pars_fragment:fS,uv_pars_vertex:hS,uv_vertex:pS,worldpos_vertex:mS,background_vert:gS,background_frag:xS,backgroundCube_vert:vS,backgroundCube_frag:_S,cube_vert:yS,cube_frag:SS,depth_vert:bS,depth_frag:wS,distance_vert:MS,distance_frag:ES,equirect_vert:TS,equirect_frag:AS,linedashed_vert:CS,linedashed_frag:RS,meshbasic_vert:NS,meshbasic_frag:PS,meshlambert_vert:DS,meshlambert_frag:LS,meshmatcap_vert:IS,meshmatcap_frag:kS,meshnormal_vert:US,meshnormal_frag:FS,meshphong_vert:zS,meshphong_frag:OS,meshphysical_vert:BS,meshphysical_frag:HS,meshtoon_vert:GS,meshtoon_frag:VS,points_vert:WS,points_frag:jS,shadow_vert:$S,shadow_frag:XS,sprite_vert:YS,sprite_frag:qS},Je={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},tr={basic:{uniforms:ei([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:ei([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new Dt(0)},envMapIntensity:{value:1}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:ei([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:ei([Je.common,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.roughnessmap,Je.metalnessmap,Je.fog,Je.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:ei([Je.common,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.gradientmap,Je.fog,Je.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:ei([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:ei([Je.points,Je.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:ei([Je.common,Je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:ei([Je.common,Je.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:ei([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:ei([Je.sprite,Je.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distance:{uniforms:ei([Je.common,Je.displacementmap,{referencePosition:{value:new xe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distance_vert,fragmentShader:Ct.distance_frag},shadow:{uniforms:ei([Je.lights,Je.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};tr.physical={uniforms:ei([tr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};const Wl={r:0,b:0,g:0},KS=new vn,$0=new wt;$0.set(-1,0,0,0,1,0,0,0,1);function ZS(s,e,t,r,o,l){const u=new Dt(0);let f=o===!0?0:1,g,m,_=null,v=0,d=null;function S(D){let U=D.isScene===!0?D.background:null;if(U&&U.isTexture){const N=D.backgroundBlurriness>0;U=e.get(U,N)}return U}function w(D){let U=!1;const N=S(D);N===null?y(u,f):N&&N.isColor&&(y(N,1),U=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?t.buffers.color.setClear(0,0,0,1,l):F==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||U)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function E(D,U){const N=S(U);N&&N.isCubeTexture?(m===void 0&&(m=new Tn(new vo(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:_a(tr.backgroundCube.uniforms),vertexShader:tr.backgroundCube.vertexShader,fragmentShader:tr.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(F,L,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=N,m.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(KS.makeRotationFromEuler(U.backgroundRotation)).transpose(),N.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply($0),m.material.toneMapped=Ut.getTransfer(N.colorSpace)!==Zt,(_!==N||v!==N.version||d!==s.toneMapping)&&(m.material.needsUpdate=!0,_=N,v=N.version,d=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null)):N&&N.isTexture&&(g===void 0&&(g=new Tn(new _o(2,2),new Ni({name:"BackgroundMaterial",uniforms:_a(tr.background.uniforms),vertexShader:tr.background.vertexShader,fragmentShader:tr.background.fragmentShader,side:As,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(g)),g.material.uniforms.t2D.value=N,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.toneMapped=Ut.getTransfer(N.colorSpace)!==Zt,N.matrixAutoUpdate===!0&&N.updateMatrix(),g.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||v!==N.version||d!==s.toneMapping)&&(g.material.needsUpdate=!0,_=N,v=N.version,d=s.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null))}function y(D,U){D.getRGB(Wl,H0(s)),t.buffers.color.setClear(Wl.r,Wl.g,Wl.b,U,l)}function b(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return u},setClearColor:function(D,U=1){u.set(D),f=U,y(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(D){f=D,y(u,f)},render:w,addToRenderList:E,dispose:b}}function JS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=d(null);let l=o,u=!1;function f(W,B,X,z,te){let ce=!1;const $=v(W,z,X,B);l!==$&&(l=$,m(l.object)),ce=S(W,z,X,te),ce&&w(W,z,X,te),te!==null&&e.update(te,s.ELEMENT_ARRAY_BUFFER),(ce||u)&&(u=!1,N(W,B,X,z),te!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function g(){return s.createVertexArray()}function m(W){return s.bindVertexArray(W)}function _(W){return s.deleteVertexArray(W)}function v(W,B,X,z){const te=z.wireframe===!0;let ce=r[B.id];ce===void 0&&(ce={},r[B.id]=ce);const $=W.isInstancedMesh===!0?W.id:0;let re=ce[$];re===void 0&&(re={},ce[$]=re);let O=re[X.id];O===void 0&&(O={},re[X.id]=O);let ee=O[te];return ee===void 0&&(ee=d(g()),O[te]=ee),ee}function d(W){const B=[],X=[],z=[];for(let te=0;te<t;te++)B[te]=0,X[te]=0,z[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:X,attributeDivisors:z,object:W,attributes:{},index:null}}function S(W,B,X,z){const te=l.attributes,ce=B.attributes;let $=0;const re=X.getAttributes();for(const O in re)if(re[O].location>=0){const k=te[O];let q=ce[O];if(q===void 0&&(O==="instanceMatrix"&&W.instanceMatrix&&(q=W.instanceMatrix),O==="instanceColor"&&W.instanceColor&&(q=W.instanceColor)),k===void 0||k.attribute!==q||q&&k.data!==q.data)return!0;$++}return l.attributesNum!==$||l.index!==z}function w(W,B,X,z){const te={},ce=B.attributes;let $=0;const re=X.getAttributes();for(const O in re)if(re[O].location>=0){let k=ce[O];k===void 0&&(O==="instanceMatrix"&&W.instanceMatrix&&(k=W.instanceMatrix),O==="instanceColor"&&W.instanceColor&&(k=W.instanceColor));const q={};q.attribute=k,k&&k.data&&(q.data=k.data),te[O]=q,$++}l.attributes=te,l.attributesNum=$,l.index=z}function E(){const W=l.newAttributes;for(let B=0,X=W.length;B<X;B++)W[B]=0}function y(W){b(W,0)}function b(W,B){const X=l.newAttributes,z=l.enabledAttributes,te=l.attributeDivisors;X[W]=1,z[W]===0&&(s.enableVertexAttribArray(W),z[W]=1),te[W]!==B&&(s.vertexAttribDivisor(W,B),te[W]=B)}function D(){const W=l.newAttributes,B=l.enabledAttributes;for(let X=0,z=B.length;X<z;X++)B[X]!==W[X]&&(s.disableVertexAttribArray(X),B[X]=0)}function U(W,B,X,z,te,ce,$){$===!0?s.vertexAttribIPointer(W,B,X,te,ce):s.vertexAttribPointer(W,B,X,z,te,ce)}function N(W,B,X,z){E();const te=z.attributes,ce=X.getAttributes(),$=B.defaultAttributeValues;for(const re in ce){const O=ce[re];if(O.location>=0){let ee=te[re];if(ee===void 0&&(re==="instanceMatrix"&&W.instanceMatrix&&(ee=W.instanceMatrix),re==="instanceColor"&&W.instanceColor&&(ee=W.instanceColor)),ee!==void 0){const k=ee.normalized,q=ee.itemSize,pe=e.get(ee);if(pe===void 0)continue;const Y=pe.buffer,oe=pe.type,me=pe.bytesPerElement,ge=oe===s.INT||oe===s.UNSIGNED_INT||ee.gpuType===Sf;if(ee.isInterleavedBufferAttribute){const be=ee.data,Ie=be.isInterleavedBuffer===!0?be.stride:be.itemSize,rt=ee.offset;if(be.isInstancedInterleavedBuffer||be.isInstancedBufferAttribute){for(let $e=0;$e<O.locationSize;$e++)b(O.location+$e,be.meshPerAttribute);W.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let $e=0;$e<O.locationSize;$e++)y(O.location+$e);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let $e=0;$e<O.locationSize;$e++)U(O.location+$e,q/O.locationSize,oe,k,Ie*me,(rt+q/O.locationSize*$e)*me,ge)}else{if(ee.isInstancedBufferAttribute){for(let be=0;be<O.locationSize;be++)b(O.location+be,ee.meshPerAttribute);W.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let be=0;be<O.locationSize;be++)y(O.location+be);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let be=0;be<O.locationSize;be++)U(O.location+be,q/O.locationSize,oe,k,q*me,q/O.locationSize*be*me,ge)}}else if($!==void 0){const k=$[re];if(k!==void 0)switch(k.length){case 2:s.vertexAttrib2fv(O.location,k);break;case 3:s.vertexAttrib3fv(O.location,k);break;case 4:s.vertexAttrib4fv(O.location,k);break;default:s.vertexAttrib1fv(O.location,k)}}}}D()}function F(){J();for(const W in r){const B=r[W];for(const X in B){const z=B[X];for(const te in z){const ce=z[te];for(const $ in ce)_(ce[$].object),delete ce[$];delete z[te]}}delete r[W]}}function L(W){if(r[W.id]===void 0)return;const B=r[W.id];for(const X in B){const z=B[X];for(const te in z){const ce=z[te];for(const $ in ce)_(ce[$].object),delete ce[$];delete z[te]}}delete r[W.id]}function M(W){for(const B in r){const X=r[B];for(const z in X){const te=X[z];if(te[W.id]===void 0)continue;const ce=te[W.id];for(const $ in ce)_(ce[$].object),delete ce[$];delete te[W.id]}}}function P(W){for(const B in r){const X=r[B],z=W.isInstancedMesh===!0?W.id:0,te=X[z];if(te!==void 0){for(const ce in te){const $=te[ce];for(const re in $)_($[re].object),delete $[re];delete te[ce]}delete X[z],Object.keys(X).length===0&&delete r[B]}}}function J(){j(),u=!0,l!==o&&(l=o,m(l.object))}function j(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:J,resetDefaultState:j,dispose:F,releaseStatesOfGeometry:L,releaseStatesOfObject:P,releaseStatesOfProgram:M,initAttributes:E,enableAttribute:y,disableUnusedAttributes:D}}function QS(s,e,t){let r;function o(g){r=g}function l(g,m){s.drawArrays(r,g,m),t.update(m,r,1)}function u(g,m,_){_!==0&&(s.drawArraysInstanced(r,g,m,_),t.update(m,r,_))}function f(g,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,m,0,_);let d=0;for(let S=0;S<_;S++)d+=m[S];t.update(d,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function eb(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(M){return!(M!==rr&&r.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(M){const P=M===or&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==yi&&M!==ir&&!P&&r.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function g(M){if(M==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const _=g(m);_!==m&&(St("WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&v===!1;t.reversedDepthBuffer===!0&&v===!1&&St("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&v===!0&&St("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),b=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:g,textureFormatReadable:u,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:d,reversedDepthBuffer:v,maxTextures:S,maxVertexTextures:w,maxTextureSize:E,maxCubemapSize:y,maxAttributes:b,maxVertexUniforms:D,maxVaryings:U,maxFragmentUniforms:N,maxSamples:F,samples:L}}function tb(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Jr,f=new wt,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(v,d){const S=v.length!==0||d||r!==0||o;return o=d,r=v.length,S},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,d){t=_(v,d,0)},this.setState=function(v,d,S){const w=v.clippingPlanes,E=v.clipIntersection,y=v.clipShadows,b=s.get(v);if(!o||w===null||w.length===0||l&&!y)l?_(null):m();else{const D=l?0:r,U=D*4;let N=b.clippingState||null;g.value=N,N=_(w,d,U,S);for(let F=0;F!==U;++F)N[F]=t[F];b.clippingState=N,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=D}};function m(){g.value!==t&&(g.value=t,g.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,d,S,w){const E=v!==null?v.length:0;let y=null;if(E!==0){if(y=g.value,w!==!0||y===null){const b=S+E*4,D=d.matrixWorldInverse;f.getNormalMatrix(D),(y===null||y.length<b)&&(y=new Float32Array(b));for(let U=0,N=S;U!==E;++U,N+=4)u.copy(v[U]).applyMatrix4(D,f),u.normal.toArray(y,N),y[N+3]=u.constant}g.value=y,g.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,y}}class If extends sr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new z0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new vo(5,5,5),l=new Ni({name:"CubemapFromEquirect",uniforms:_a(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:ha});l.uniforms.tEquirect.value=t;const u=new Tn(o,l),f=t.minFilter;return t.minFilter===es&&(t.minFilter=ci),new pf(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}const Fm=256,nb=3,ib=20,X0=256,Y0=16,rb=3,sb=new xe,ab=new Dt;class oc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new pf(1,10,null),this._boxMesh=new Tn(new vo(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=sb}=l,g=this._renderer;this._setSize(u);const m=this._allocateTarget(),_=this._getSourceTarget(!0);t>0&&(_.texture.mipmapsAutoUpdate=!1);const v=g.autoClear,d=g.autoClearColor,S=g.autoClearDepth,w=g.autoClearStencil,E=e.background;g.autoClear=!0,g.autoClearColor=!0,g.autoClearDepth=!0,g.autoClearStencil=!0,E===null&&(e.background=g.getClearColor(ab));const y=new pf(r,o,_);return y.position.copy(f),y.update(g,e),g.autoClear=v,g.autoClearColor=d,g.autoClearDepth=S,g.autoClearStencil=w,e.background=E,t>0&&(_.texture.mipmapsAutoUpdate=!0,this._blur(m,t)),this._applyPMREM(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Fm,N_(e))}_fromTexture(e,t){e.mapping===ma||e.mapping===uo?this._setSize(e.image.length===0?Fm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=zm(e,!1,!1),r=Math.log2(e)-nb;for(let o=0;o<=r;o++)t.texture.mipmaps.push({width:e>>o,height:e>>o});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=zm(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const o=this._boxMesh,l=this._cubeCamera;o.material=r,l.renderTarget=e,l.activeMipmapLevel=t;const u=e.width>>t;e.viewport.set(0,0,u,u),l.update(this._renderer,o),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ma||e.mapping===uo?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Om()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=ob(),this._integrationMaterial=lb());const t=this._cubeSize,r=e.texture.mipmaps.length-1,o=this._ggxMaterial.uniforms;o.envMap.value=this._sourceTarget.texture;const l=this._integrationMaterial.uniforms;l.envMap.value=this._sourceTarget.texture,l.sourceLod.value=Math.log2(t/Y0);for(let u=0;u<=r;u++){const f=oc.lodToRoughness(u,r);if(u>r-rb)l.roughness.value=f,this._renderCube(e,u,this._integrationMaterial);else{const g=f>0?Math.log2(t)+.5*Math.log2(6/(X0*Math.pow(f,4)))+.5:0;o.roughness.value=f,o.lodBias.value=g,this._renderCube(e,u,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=cb());const r=this._blurMaterial,o=r.uniforms,l=this._sourceTarget;o.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,o.envMap.value=l.texture,this._renderCube(e,0,r),o.envMap.value=e.texture,this._renderCube(l,0,r)}}function zm(s,e,t){return new If(s,{minFilter:es,generateMipmaps:e,type:or,colorSpace:rc,depthBuffer:t})}function yo(s,e,t){return new Ni({name:s,uniforms:e,vertexShader:Ct.cube_vert,fragmentShader:t,side:Bn,blending:ha,depthTest:!1,depthWrite:!1})}function ob(){return yo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

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
	`)}function lb(){return yo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Y0}},`

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
	`)}function cb(){return yo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

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
	`)}function ub(s){let e=new WeakMap,t=new WeakMap,r=null;function o(d,S=!1){return d==null?null:S?u(d):l(d)}function l(d){if(d&&d.isTexture){const S=d.mapping;if(S===Zu||S===Ju)if(e.has(d)){const w=e.get(d).texture;return f(w,d.mapping)}else{const w=d.image;if(w&&w.height>0){const E=new If(w.height);return E.fromEquirectangularTexture(s,d),e.set(d,E),d.addEventListener("dispose",m),f(E.texture,d.mapping)}else return null}}return d}function u(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const S=d.mapping,w=S===Zu||S===Ju,E=S===ma||S===uo;if(w||E){let y=t.get(d);const b=y!==void 0?y.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==b)return r===null&&(r=new oc(s)),y=w?r.fromEquirectangular(d,y):r.fromCubemap(d,y),y.texture.pmremVersion=d.pmremVersion,t.set(d,y),y.texture;if(y!==void 0)return y.texture;{const D=d.image;return w&&D&&D.height>0||E&&D&&g(D)?(r===null&&(r=new oc(s)),y=w?r.fromEquirectangular(d):r.fromCubemap(d),y.texture.pmremVersion=d.pmremVersion,t.set(d,y),d.addEventListener("dispose",_),y.texture):null}}}return d}function f(d,S){return S===Zu?d.mapping=ma:S===Ju&&(d.mapping=uo),d}function g(d){let S=0;const w=6;for(let E=0;E<w;E++)d[E]!==void 0&&S++;return S===w}function m(d){const S=d.target;S.removeEventListener("dispose",m);const w=e.get(S);w!==void 0&&(e.delete(S),w.dispose())}function _(d){const S=d.target;S.removeEventListener("dispose",_);const w=t.get(S);w!==void 0&&(t.delete(S),w.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function db(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Zl("WebGLRenderer: "+r+" extension not supported."),o}}}function fb(s,e,t,r){const o={},l=new WeakMap,u=new FinalizationRegistry(w=>delete o[w]);function f(w){g(w.target)}function g(w){w.index!==null&&e.remove(w.index);for(const y in w.attributes)e.remove(w.attributes[y]);w.removeEventListener("dispose",f),delete o[w.id],u.unregister(w);const E=l.get(w);E&&(e.remove(E),l.delete(w)),r.releaseStatesOfGeometry(w),w.isInstancedBufferGeometry===!0&&delete w._maxInstanceCount,t.memory.geometries--}function m(w,E){return o[E.id]!==void 0||(E.addEventListener("dispose",f),o[E.id]=new WeakRef(E),u.register(E,E.id,E),t.memory.geometries++),E}function _(w){const E=w.attributes;for(const y in E)e.update(E[y],s.ARRAY_BUFFER)}function v(w){const E=w.index,y=w.attributes.position;let b=0;if(y===void 0)return;const D=E!==null?E.array.length:y.array.length/3-1,U=y.count>=65535?F0:U0,N=new U(Math.ceil(D/3)*6,1),F=N.array;if(E!==null){const M=E.array;b=E.version;for(let P=0,J=0;P<D;P+=3){const j=M[P+0],W=M[P+1],B=M[P+2];F[J++]=j,F[J++]=W,F[J++]=W,F[J++]=B,F[J++]=B,F[J++]=j}}else{b=y.version;for(let M=0,P=0;M<D;M+=3){const J=M+0,j=M+1,W=M+2;F[P++]=J,F[P++]=j,F[P++]=j,F[P++]=W,F[P++]=W,F[P++]=J}}N.version=b;const L=l.get(w);L&&e.remove(L),l.set(w,N)}function d(w){const E=l.get(w);if(E){const y=w.index;y!==null&&E.version<y.version&&v(w)}else v(w);return l.get(w)}function S(){for(const w in o){const E=o[w].deref();E!==void 0&&g(E)}}return{get:m,update:_,getWireframeAttribute:d,dispose:S}}function hb(s,e,t){let r;function o(v){r=v}let l,u;function f(v){l=v.type,u=v.bytesPerElement}function g(v,d){s.drawElements(r,d,l,v*u),t.update(d,r,1)}function m(v,d,S){S!==0&&(s.drawElementsInstanced(r,d,l,v*u,S),t.update(d,r,S))}function _(v,d,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,d,0,l,v,0,S);let E=0;for(let y=0;y<S;y++)E+=d[y];t.update(E,r,1)}this.setMode=o,this.setIndex=f,this.render=g,this.renderInstances=m,this.renderMultiDraw=_}function pb(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Xt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function mb(s,e,t){const r=new WeakMap,o=new xn;function l(u,f,g){const m=u.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=_!==void 0?_.length:0;let d=r.get(f);if(d===void 0||d.count!==v){let j=function(){P.dispose(),r.delete(f),f.removeEventListener("dispose",j)};var S=j;d!==void 0&&d.texture.dispose();const w=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,b=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],U=f.morphAttributes.color||[];let N=0;w===!0&&(N=1),E===!0&&(N=2),y===!0&&(N=3);let F=f.attributes.position.count*N,L=1;F>e.maxTextureSize&&(L=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const M=new Float32Array(F*L*4*v),P=new L0(M,F,L,v);P.type=ir,P.needsUpdate=!0;const J=N*4;for(let W=0;W<v;W++){const B=b[W],X=D[W],z=U[W],te=F*L*4*W;for(let ce=0;ce<B.count;ce++){const $=ce*J;w===!0&&(o.fromBufferAttribute(B,ce),M[te+$+0]=o.x,M[te+$+1]=o.y,M[te+$+2]=o.z,M[te+$+3]=0),E===!0&&(o.fromBufferAttribute(X,ce),M[te+$+4]=o.x,M[te+$+5]=o.y,M[te+$+6]=o.z,M[te+$+7]=0),y===!0&&(o.fromBufferAttribute(z,ce),M[te+$+8]=o.x,M[te+$+9]=o.y,M[te+$+10]=o.z,M[te+$+11]=z.itemSize===4?o.w:1)}}d={count:v,texture:P,size:new kt(F,L)},r.set(f,d),f.addEventListener("dispose",j)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)g.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let w=0;for(let y=0;y<m.length;y++)w+=m[y];const E=f.morphTargetsRelative?1:1-w;g.getUniforms().setValue(s,"morphTargetBaseInfluence",E),g.getUniforms().setValue(s,"morphTargetInfluences",m)}g.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),g.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:l}}function gb(s,e,t,r,o){let l=new WeakMap;function u(m){const _=o.render.frame,v=m.geometry,d=e.get(m,v);if(l.get(d)!==_&&(e.update(d),l.set(d,_)),m.isInstancedMesh&&(m.hasEventListener("dispose",g)===!1&&m.addEventListener("dispose",g),l.get(m)!==_&&(t.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,_))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==_&&(S.update(),l.set(S,_))}return d}function f(){l=new WeakMap}function g(m){const _=m.target;_.removeEventListener("dispose",g),r.releaseStatesOfObject(_),t.remove(_.instanceMatrix),_.instanceColor!==null&&t.remove(_.instanceColor)}return{update:u,dispose:f}}const xb={[p0]:"LINEAR_TONE_MAPPING",[m0]:"REINHARD_TONE_MAPPING",[g0]:"CINEON_TONE_MAPPING",[x0]:"ACES_FILMIC_TONE_MAPPING",[_0]:"AGX_TONE_MAPPING",[y0]:"NEUTRAL_TONE_MAPPING",[v0]:"CUSTOM_TONE_MAPPING"};function vb(s,e,t,r,o,l){const u=new sr(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,g=null,m=null;const _=new lr;_.setAttribute("position",new Un([-1,3,0,-1,-1,0,3,-1,0],3)),_.setAttribute("uv",new Un([0,2,0,0,2,0],2));const v=new oy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Tn(_,v),S=new W0(-1,1,1,-1,0,1);let w=null,E=null,y=!1,b,D=null,U=[],N=!1;this.setSize=function(F,L){u.setSize(F,L),f!==null&&f.setSize(F,L),g!==null&&g.setSize(F,L);for(let M=0;M<U.length;M++){const P=U[M];P.setSize&&P.setSize(F,L)}},this.setEffects=function(F){U=F,N=U.length>0&&U[0].isRenderPass===!0;const L=u.width,M=u.height;U.length>0&&f===null&&(f=new sr(L,M,{type:or,depthBuffer:!1,stencilBuffer:!1}),g=new sr(L,M,{type:or,depthBuffer:!1,stencilBuffer:!1}));const P=o===!0&&U.some(J=>J.needsDepthTexture===!0);P!==(u.depthTexture!==null)&&(P===!0&&m===null&&(m=new va(L,M),l===!0&&(m.format=ts,m.type=xa)),u.dispose(),u.depthTexture=P?m:null,u.resolveDepthBuffer=P,u.storeMultisampledDepthBuffer=P);for(let J=0;J<U.length;J++){const j=U[J];j.setSize&&j.setSize(L,M),P&&j.needsDepthTexture===!0&&j.setDepthTexture&&j.setDepthTexture(m)}},this.begin=function(F,L){if(y||F.toneMapping===Ar&&U.length===0)return!1;if(D=L,L!==null){const M=L.width,P=L.height;(u.width!==M||u.height!==P)&&this.setSize(M,P)}return N===!1&&F.setRenderTarget(u),b=F.toneMapping,F.toneMapping=Ar,!0},this.hasRenderPass=function(){return N},this.end=function(F,L){F.toneMapping=b,y=!0;let M=u,P=f;for(let J=0;J<U.length;J++){const j=U[J];j.enabled!==!1&&(j.render(F,P,M,L),j.needsSwap!==!1&&(M=P,P=P===f?g:f))}if(w!==F.outputColorSpace||E!==F.toneMapping){w=F.outputColorSpace,E=F.toneMapping,v.defines={},Ut.getTransfer(w)===Zt&&(v.defines.SRGB_TRANSFER="");const J=xb[E];J&&(v.defines[J]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=M.texture,F.setRenderTarget(D),F.render(d,S),D=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){u.dispose(),f!==null&&f.dispose(),g!==null&&g.dispose(),_.dispose(),v.dispose()}}const q0=new Kn,K0=new va(1,1),Z0=new O0(1),J0=new L0,Q0=new z_,eg=new z0,Hm=[],Gm=[],Vm=new Float32Array(16),Wm=new Float32Array(9),jm=new Float32Array(4);function Sa(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=Hm[o];if(l===void 0&&(l=new Float32Array(o),Hm[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function Rn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Nn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function pc(s,e){let t=Gm[e];t===void 0&&(t=new Int32Array(e),Gm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function _b(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function yb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;s.uniform2fv(this.addr,e),Nn(t,e)}}function Sb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rn(t,e))return;s.uniform3fv(this.addr,e),Nn(t,e)}}function bb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;s.uniform4fv(this.addr,e),Nn(t,e)}}function wb(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Rn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Nn(t,e)}else{if(Rn(t,r))return;jm.set(r),s.uniformMatrix2fv(this.addr,!1,jm),Nn(t,r)}}function Mb(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Rn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Nn(t,e)}else{if(Rn(t,r))return;Wm.set(r),s.uniformMatrix3fv(this.addr,!1,Wm),Nn(t,r)}}function Eb(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Rn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Nn(t,e)}else{if(Rn(t,r))return;Vm.set(r),s.uniformMatrix4fv(this.addr,!1,Vm),Nn(t,r)}}function Tb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Ab(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;s.uniform2iv(this.addr,e),Nn(t,e)}}function Cb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rn(t,e))return;s.uniform3iv(this.addr,e),Nn(t,e)}}function Rb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;s.uniform4iv(this.addr,e),Nn(t,e)}}function Nb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Pb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rn(t,e))return;s.uniform2uiv(this.addr,e),Nn(t,e)}}function Db(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rn(t,e))return;s.uniform3uiv(this.addr,e),Nn(t,e)}}function Lb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rn(t,e))return;s.uniform4uiv(this.addr,e),Nn(t,e)}}function mc(s){return s.version===0&&(s.compareFunction=P0,s.needsUpdate=!0),s}function Ib(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?l=mc(K0):l=q0,t.setTexture2D(e||l,o)}function kb(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Q0,o)}function Ub(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_CUBE_SHADOW?l=mc(Z0):l=eg,t.setTextureCube(e||l,o)}function Fb(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||J0,o)}function zb(s){switch(s){case 5126:return _b;case 35664:return yb;case 35665:return Sb;case 35666:return bb;case 35674:return wb;case 35675:return Mb;case 35676:return Eb;case 5124:case 35670:return Tb;case 35667:case 35671:return Ab;case 35668:case 35672:return Cb;case 35669:case 35673:return Rb;case 5125:return Nb;case 36294:return Pb;case 36295:return Db;case 36296:return Lb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ib;case 35679:case 36299:case 36307:return kb;case 35680:case 36300:case 36308:case 36293:return Ub;case 36289:case 36303:case 36311:case 36292:return Fb}}function Ob(s,e){s.uniform1fv(this.addr,e)}function Bb(s,e){const t=Sa(e,this.size,2);s.uniform2fv(this.addr,t)}function Hb(s,e){const t=Sa(e,this.size,3);s.uniform3fv(this.addr,t)}function Gb(s,e){const t=Sa(e,this.size,4);s.uniform4fv(this.addr,t)}function Vb(s,e){const t=Sa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Wb(s,e){const t=Sa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function jb(s,e){const t=Sa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function $b(s,e){s.uniform1iv(this.addr,e)}function Xb(s,e){s.uniform2iv(this.addr,e)}function Yb(s,e){s.uniform3iv(this.addr,e)}function qb(s,e){s.uniform4iv(this.addr,e)}function Kb(s,e){s.uniform1uiv(this.addr,e)}function Zb(s,e){s.uniform2uiv(this.addr,e)}function Jb(s,e){s.uniform3uiv(this.addr,e)}function Qb(s,e){s.uniform4uiv(this.addr,e)}function ew(s,e,t){const r=this.cache,o=e.length,l=pc(t,o);Rn(r,l)||(s.uniform1iv(this.addr,l),Nn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=mc(K0):u=q0;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function tw(s,e,t){const r=this.cache,o=e.length,l=pc(t,o);Rn(r,l)||(s.uniform1iv(this.addr,l),Nn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Q0,l[u])}function nw(s,e,t){const r=this.cache,o=e.length,l=pc(t,o);Rn(r,l)||(s.uniform1iv(this.addr,l),Nn(r,l));let u;this.type===s.SAMPLER_CUBE_SHADOW?u=mc(Z0):u=eg;for(let f=0;f!==o;++f)t.setTextureCube(e[f]||u,l[f])}function iw(s,e,t){const r=this.cache,o=e.length,l=pc(t,o);Rn(r,l)||(s.uniform1iv(this.addr,l),Nn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||J0,l[u])}function rw(s){switch(s){case 5126:return Ob;case 35664:return Bb;case 35665:return Hb;case 35666:return Gb;case 35674:return Vb;case 35675:return Wb;case 35676:return jb;case 5124:case 35670:return $b;case 35667:case 35671:return Xb;case 35668:case 35672:return Yb;case 35669:case 35673:return qb;case 5125:return Kb;case 36294:return Zb;case 36295:return Jb;case 36296:return Qb;case 35678:case 36198:case 36298:case 36306:case 35682:return ew;case 35679:case 36299:case 36307:return tw;case 35680:case 36300:case 36308:case 36293:return nw;case 36289:case 36303:case 36311:case 36292:return iw}}class sw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=zb(t.type)}}class aw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rw(t.type)}}class ow{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Md=/(\w+)(\])?(\[|\.)?/g;function $m(s,e){s.seq.push(e),s.map[e.id]=e}function lw(s,e,t){const r=s.name,o=r.length;for(Md.lastIndex=0;;){const l=Md.exec(r),u=Md.lastIndex;let f=l[1];const g=l[2]==="]",m=l[3];if(g&&(f=f|0),m===void 0||m==="["&&u+2===o){$m(t,m===void 0?new sw(f,s,e):new aw(f,s,e));break}else{let v=t.map[f];v===void 0&&(v=new ow(f),$m(t,v)),t=v}}}class Ql{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),g=e.getUniformLocation(t,f.name);lw(f,g,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],g=r[f.id];g.needsUpdate!==!1&&f.setValue(e,g.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function Xm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const cw=37297;let uw=0;function dw(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const Ym=new wt;function fw(s){Ut._getMatrix(Ym,Ut.workingColorSpace,s);const e=`mat3( ${Ym.elements.map(t=>t.toFixed(4))} )`;switch(Ut.getTransfer(s)){case sc:return[e,"LinearTransferOETF"];case Zt:return[e,"sRGBTransferOETF"];default:return St("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function qm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+dw(s.getShaderSource(e),f)}else return l}function hw(s,e){const t=fw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const pw={[p0]:"Linear",[m0]:"Reinhard",[g0]:"Cineon",[x0]:"ACESFilmic",[_0]:"AgX",[y0]:"Neutral",[v0]:"Custom"};function mw(s,e){const t=pw[e];return t===void 0?(St("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const jl=new xe;function gw(){Ut.getLuminanceCoefficients(jl);const s=jl.x.toFixed(4),e=jl.y.toFixed(4),t=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function vw(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function _w(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function so(s){return s!==""}function Km(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Zm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yw=/^[ \t]*#include +<([\w\d./]+)>/gm;function mf(s){return s.replace(yw,Sw)}function Sw(s,e){const t=Ct[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return mf(t)}const bw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jm(s){return s.replace(bw,ww)}function ww(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Qm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const Mw={[$l]:"SHADOWMAP_TYPE_PCF",[io]:"SHADOWMAP_TYPE_VSM"};function Ew(s){return Mw[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Tw={[uo]:"ENVMAP_MODE_REFRACTION"};function Aw(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Tw[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Cw={[h0]:"ENVMAP_BLENDING_MULTIPLY",[h_]:"ENVMAP_BLENDING_MIX",[p_]:"ENVMAP_BLENDING_ADD"};function Rw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Cw[s.combine]||"ENVMAP_BLENDING_NONE"}function Nw(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const g=Ew(t),m=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",_=Aw(t),v=Rw(t),d=xw(t),S=vw(l),w=o.createProgram();let E,y,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(E=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(so).join(`
`),E.length>0&&(E+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(so).join(`
`),y.length>0&&(y+=`
`)):(E=[Qm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+g:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),y=[Qm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",t.envMap?"#define "+v:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+g:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ar?"#define TONE_MAPPING":"",t.toneMapping!==Ar?Ct.tonemapping_pars_fragment:"",t.toneMapping!==Ar?mw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,hw("linearToOutputTexel",t.outputColorSpace),gw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(so).join(`
`)),u=mf(u),u=Km(u,t),u=Zm(u,t),f=mf(f),f=Km(f,t),f=Zm(f,t),u=Jm(u),f=Jm(f),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,E=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,y=["#define varying in",t.glslVersion===hm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const D=b+E+u,U=b+y+f,N=Xm(o,o.VERTEX_SHADER,D),F=Xm(o,o.FRAGMENT_SHADER,U);o.attachShader(w,N),o.attachShader(w,F),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function L(j){if(s.debug.checkShaderErrors){const W=o.getProgramInfoLog(w)||"",B=o.getShaderInfoLog(N)||"",X=o.getShaderInfoLog(F)||"",z=W.trim(),te=B.trim(),ce=X.trim();let $=!0,re=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,N,F);else{const O=qm(o,N,"vertex"),ee=qm(o,F,"fragment");Xt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+z+`
`+O+`
`+ee)}else z!==""?St("WebGLProgram: Program Info Log:",z):(te===""||ce==="")&&(re=!1);re&&(j.diagnostics={runnable:$,programLog:z,vertexShader:{log:te,prefix:E},fragmentShader:{log:ce,prefix:y}})}o.deleteShader(N),o.deleteShader(F),M=new Ql(o,w),P=_w(o,w)}let M;this.getUniforms=function(){return M===void 0&&L(this),M};let P;this.getAttributes=function(){return P===void 0&&L(this),P};let J=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return J===!1&&(J=o.getProgramParameter(w,cw)),J},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uw++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=N,this.fragmentShader=F,this}let Pw=0;class Dw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Lw(e),t.set(e,r)),r}}class Lw{constructor(e){this.id=Pw++,this.code=e,this.usedTimes=0}}function Iw(s){return s===Cs||s===nc||s===ic}function kw(s,e,t,r,o,l){const u=new I0,f=new Dw,g=new Set,m=[],_=new Map,v=r.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(M){return g.add(M),M===0?"uv":`uv${M}`}function w(M,P,J,j,W,B){const X=j.fog,z=W.geometry,te=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?j.environment:null,ce=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,$=e.get(M.envMap||te,ce),re=d[M.type];let O=r.precision;M.precision!==null&&(O=r.getMaxPrecision(M.precision),O!==M.precision&&St("WebGLProgram.getParameters:",M.precision,"not supported, using",O,"instead."));const ee=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,k=ee!==void 0?ee.length:0;let q=0;z.morphAttributes.position!==void 0&&(q=1),z.morphAttributes.normal!==void 0&&(q=2),z.morphAttributes.color!==void 0&&(q=3);let pe,Y,oe,me;if(re){const We=tr[re];pe=We.vertexShader,Y=We.fragmentShader}else{pe=M.vertexShader,Y=M.fragmentShader;const We=f.getVertexShaderStage(M),ht=f.getFragmentShaderStage(M);f.update(M,We,ht),oe=We.id,me=ht.id}const ge=s.getRenderTarget(),be=s.state.buffers.depth.getReversed(),Ie=W.isInstancedMesh===!0,rt=W.isBatchedMesh===!0,$e=!!M.map,Pe=!!M.matcap,Ve=!!$,Xe=Ve&&$.isPMREMTexture===!0,it=!!M.aoMap,vt=!!M.lightMap,ft=!!M.bumpMap&&M.wireframe===!1,ot=!!M.normalMap,Tt=!!M.displacementMap,de=!!M.emissiveMap,bt=!!M.metalnessMap,Vt=!!M.roughnessMap,on=M.anisotropy>0,Q=M.clearcoat>0,pn=M.diffuseRoughness>0,Mt=M.dispersion>0,Lt=M.retroreflectivity>0,ke=M.iridescence>0,At=M.sheen>0,Ye=M.transmission>0,ct=on&&!!M.anisotropyMap,R=Q&&!!M.clearcoatMap,T=Q&&!!M.clearcoatNormalMap,ae=Q&&!!M.clearcoatRoughnessMap,Ne=pn&&!!M.diffuseRoughnessMap,Me=ke&&!!M.iridescenceMap,Le=ke&&!!M.iridescenceThicknessMap,Be=At&&!!M.sheenColorMap,ve=At&&!!M.sheenRoughnessMap,we=!!M.specularMap,Oe=!!M.specularColorMap,V=!!M.specularIntensityMap,Te=Ye&&!!M.transmissionMap,_e=Ye&&!!M.thicknessMap,Ae=!!M.gradientMap,he=!!M.alphaMap,Ee=M.alphaTest>0,Ge=!!M.alphaHash,Qe=!!M.extensions;let Ce=Ar;M.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Ce=s.toneMapping);const Ze=Xe?$.isCompressedCubeTexture?$.image[0].mipmaps:$.mipmaps:null,st={shaderID:re,shaderType:M.type,shaderName:M.name,vertexShader:pe,fragmentShader:Y,defines:M.defines,customVertexShaderID:oe,customFragmentShaderID:me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:O,batching:rt,batchingColor:rt&&W._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&W.instanceColor!==null,instancingMorph:Ie&&W.morphTexture!==null,outputColorSpace:ge===null?s.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Ut.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:$e,matcap:Pe,envMap:Ve,envMapMode:Ve&&$.mapping,envMapPMREM:Xe,envMapMaxLod:Xe?Ze.length-1:null,envMapSize:Xe?Ze[0].width:null,aoMap:it,lightMap:vt,bumpMap:ft,normalMap:ot,displacementMap:Tt,emissiveMap:de,normalMapObjectSpace:ot&&M.normalMapType===x_,normalMapTangentSpace:ot&&M.normalMapType===ff,packedNormalMap:ot&&M.normalMapType===ff&&Iw(M.normalMap.format),metalnessMap:bt,roughnessMap:Vt,anisotropy:on,anisotropyMap:ct,clearcoat:Q,clearcoatMap:R,clearcoatNormalMap:T,clearcoatRoughnessMap:ae,diffuseRoughness:pn,diffuseRoughnessMap:Ne,dispersion:Mt,retroreflection:Lt,iridescence:ke,iridescenceMap:Me,iridescenceThicknessMap:Le,sheen:At,sheenColorMap:Be,sheenRoughnessMap:ve,specularMap:we,specularColorMap:Oe,specularIntensityMap:V,transmission:Ye,transmissionMap:Te,thicknessMap:_e,gradientMap:Ae,opaque:M.transparent===!1&&M.blending===ao&&M.alphaToCoverage===!1,alphaMap:he,alphaTest:Ee,alphaHash:Ge,combine:M.combine,mapUv:$e&&S(M.map.channel),aoMapUv:it&&S(M.aoMap.channel),lightMapUv:vt&&S(M.lightMap.channel),bumpMapUv:ft&&S(M.bumpMap.channel),normalMapUv:ot&&S(M.normalMap.channel),displacementMapUv:Tt&&S(M.displacementMap.channel),emissiveMapUv:de&&S(M.emissiveMap.channel),metalnessMapUv:bt&&S(M.metalnessMap.channel),roughnessMapUv:Vt&&S(M.roughnessMap.channel),anisotropyMapUv:ct&&S(M.anisotropyMap.channel),clearcoatMapUv:R&&S(M.clearcoatMap.channel),clearcoatNormalMapUv:T&&S(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&S(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ne&&S(M.diffuseRoughnessMap.channel),iridescenceMapUv:Me&&S(M.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&S(M.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&S(M.sheenColorMap.channel),sheenRoughnessMapUv:ve&&S(M.sheenRoughnessMap.channel),specularMapUv:we&&S(M.specularMap.channel),specularColorMapUv:Oe&&S(M.specularColorMap.channel),specularIntensityMapUv:V&&S(M.specularIntensityMap.channel),transmissionMapUv:Te&&S(M.transmissionMap.channel),thicknessMapUv:_e&&S(M.thicknessMap.channel),alphaMapUv:he&&S(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ot||on),vertexNormals:!!z.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!z.attributes.uv&&($e||he),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||z.attributes.normal===void 0&&ot===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:be,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:q,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:B.filter(We=>We.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&J.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ce,decodeVideoTexture:$e&&M.map.isVideoTexture===!0&&Ut.getTransfer(M.map.colorSpace)===Zt,decodeVideoTextureEmissive:de&&M.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(M.emissiveMap.colorSpace)===Zt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Wi,flipSided:M.side===Bn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Qe&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&M.extensions.multiDraw===!0||rt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return st.vertexUv1s=g.has(1),st.vertexUv2s=g.has(2),st.vertexUv3s=g.has(3),g.clear(),st}function E(M){const P=[];if(M.shaderID?P.push(M.shaderID):(P.push(M.customVertexShaderID),P.push(M.customFragmentShaderID)),M.defines!==void 0)for(const J in M.defines)P.push(J),P.push(M.defines[J]);return M.isRawShaderMaterial===!1&&(y(P,M),b(P,M),P.push(s.outputColorSpace)),P.push(M.customProgramCacheKey),P.join()}function y(M,P){M.push(P.precision),M.push(P.outputColorSpace),M.push(P.envMapMode),M.push(P.envMapPMREM),M.push(P.envMapMaxLod),M.push(P.envMapSize),M.push(P.mapUv),M.push(P.alphaMapUv),M.push(P.lightMapUv),M.push(P.aoMapUv),M.push(P.bumpMapUv),M.push(P.normalMapUv),M.push(P.displacementMapUv),M.push(P.emissiveMapUv),M.push(P.metalnessMapUv),M.push(P.roughnessMapUv),M.push(P.anisotropyMapUv),M.push(P.clearcoatMapUv),M.push(P.clearcoatNormalMapUv),M.push(P.clearcoatRoughnessMapUv),M.push(P.diffuseRoughnessMapUv),M.push(P.iridescenceMapUv),M.push(P.iridescenceThicknessMapUv),M.push(P.sheenColorMapUv),M.push(P.sheenRoughnessMapUv),M.push(P.specularMapUv),M.push(P.specularColorMapUv),M.push(P.specularIntensityMapUv),M.push(P.transmissionMapUv),M.push(P.thicknessMapUv),M.push(P.combine),M.push(P.fogExp2),M.push(P.sizeAttenuation),M.push(P.morphTargetsCount),M.push(P.numSunLights),M.push(P.numDirLights),M.push(P.numPointLights),M.push(P.numSpotLights),M.push(P.numSpotLightMaps),M.push(P.numHemiLights),M.push(P.numRectAreaLights),M.push(P.numSunLightShadows),M.push(P.numDirLightShadows),M.push(P.numPointLightShadows),M.push(P.numSpotLightShadows),M.push(P.numSpotLightShadowsWithMaps),M.push(P.numLightProbes),M.push(P.numLightProbeGrids),M.push(P.shadowMapType),M.push(P.toneMapping),M.push(P.numClippingPlanes),M.push(P.numClipIntersection),M.push(P.depthPacking)}function b(M,P){u.disableAll(),P.instancing&&u.enable(0),P.instancingColor&&u.enable(1),P.instancingMorph&&u.enable(2),P.matcap&&u.enable(3),P.envMap&&u.enable(4),P.normalMapObjectSpace&&u.enable(5),P.normalMapTangentSpace&&u.enable(6),P.clearcoat&&u.enable(7),P.iridescence&&u.enable(8),P.alphaTest&&u.enable(9),P.vertexColors&&u.enable(10),P.vertexAlphas&&u.enable(11),P.vertexUv1s&&u.enable(12),P.vertexUv2s&&u.enable(13),P.vertexUv3s&&u.enable(14),P.vertexTangents&&u.enable(15),P.anisotropy&&u.enable(16),P.alphaHash&&u.enable(17),P.batching&&u.enable(18),P.dispersion&&u.enable(19),P.retroreflection&&u.enable(24),P.diffuseRoughness&&u.enable(25),P.batchingColor&&u.enable(20),P.gradientMap&&u.enable(21),P.packedNormalMap&&u.enable(22),P.vertexNormals&&u.enable(23),M.push(u.mask),u.disableAll(),P.fog&&u.enable(0),P.useFog&&u.enable(1),P.flatShading&&u.enable(2),P.logarithmicDepthBuffer&&u.enable(3),P.reversedDepthBuffer&&u.enable(4),P.skinning&&u.enable(5),P.morphTargets&&u.enable(6),P.morphNormals&&u.enable(7),P.morphColors&&u.enable(8),P.premultipliedAlpha&&u.enable(9),P.shadowMapEnabled&&u.enable(10),P.doubleSided&&u.enable(11),P.flipSided&&u.enable(12),P.useDepthPacking&&u.enable(13),P.dithering&&u.enable(14),P.transmission&&u.enable(15),P.sheen&&u.enable(16),P.opaque&&u.enable(17),P.pointsUvs&&u.enable(18),P.decodeVideoTexture&&u.enable(19),P.decodeVideoTextureEmissive&&u.enable(20),P.alphaToCoverage&&u.enable(21),P.numLightProbeGrids>0&&u.enable(22),P.hasPositionAttribute&&u.enable(23),M.push(u.mask)}function D(M){const P=d[M.type];let J;if(P){const j=tr[P];J=ry.clone(j.uniforms)}else J=M.uniforms;return J}function U(M,P){let J=_.get(P);return J!==void 0?++J.usedTimes:(J=new Nw(s,P,M,o),m.push(J),_.set(P,J)),J}function N(M){if(--M.usedTimes===0){const P=m.indexOf(M);m[P]=m[m.length-1],m.pop(),_.delete(M.cacheKey),M.destroy()}}function F(M){f.remove(M)}function L(){f.dispose()}return{getParameters:w,getProgramCacheKey:E,getUniforms:D,acquireProgram:U,releaseProgram:N,releaseShaderCache:F,programs:m,dispose:L}}function Uw(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,g){s.get(u)[f]=g}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function Fw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function e0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function t0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(d){let S=0;return d.isInstancedMesh&&(S+=2),d.isSkinnedMesh&&(S+=1),S}function f(d,S,w,E,y,b){let D=s[e];return D===void 0?(D={id:d.id,object:d,geometry:S,material:w,materialVariant:u(d),groupOrder:E,renderOrder:d.renderOrder,z:y,group:b},s[e]=D):(D.id=d.id,D.object=d,D.geometry=S,D.material=w,D.materialVariant=u(d),D.groupOrder=E,D.renderOrder=d.renderOrder,D.z=y,D.group=b),e++,D}function g(d,S,w,E,y,b,D){D.reversedDepth===!0&&(y=-y);const U=f(d,S,w,E,y,b);w.transmission>0?r.push(U):w.transparent===!0?o.push(U):t.push(U)}function m(d,S,w,E,y,b){const D=f(d,S,w,E,y,b);w.transmission>0?r.unshift(D):w.transparent===!0?o.unshift(D):t.unshift(D)}function _(d,S){t.length>1&&t.sort(d||Fw),r.length>1&&r.sort(S||e0),o.length>1&&o.sort(S||e0)}function v(){for(let d=e,S=s.length;d<S;d++){const w=s[d];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:g,unshift:m,finish:v,sort:_}}function zw(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new t0,s.set(r,[u])):o>=l.length?(u=new t0,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ow(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new xe,color:new Dt};break;case"SpotLight":t={position:new xe,direction:new xe,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new xe,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new xe,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":t={color:new Dt,position:new xe,halfWidth:new xe,halfHeight:new xe};break}return s[e.id]=t,t}}}function Bw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Hw=0;function Gw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Vw(s){const e=new Ow,t=Bw(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new xe);const o=new xe,l=new vn,u=new vn;function f(m){let _=0,v=0,d=0;for(let B=0;B<9;B++)r.probe[B].set(0,0,0);let S=0,w=0,E=0,y=0,b=0,D=0,U=0,N=0,F=0,L=0,M=0,P=0,J=0,j=0;m.sort(Gw);for(let B=0,X=m.length;B<X;B++){const z=m[B],te=z.color,ce=z.intensity,$=z.distance;let re=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Cs?re=z.shadow.map.texture:re=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)_+=te.r*ce,v+=te.g*ce,d+=te.b*ce;else if(z.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(z.sh.coefficients[O],ce);j++}else if(z.isSunLight){const O=e.get(z);if(O.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ee=z.shadow,k=t.get(z);k.shadowIntensity=ee.intensity,k.shadowBias=ee.bias,k.shadowNormalBias=ee.normalBias,k.shadowRadius=ee.radius,k.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),r.sunShadow[w]=k,r.sunShadowMap[w]=re;const q=ee.getViewportCount();for(let pe=0;pe<q;pe++)r.sunShadowMatrix[E+pe]=ee.getMatrix(pe),r.sunShadowCascade[E+pe]=ee._cascadeData[pe];E+=q,w++}r.sun[S]=O,S++}else if(z.isDirectionalLight){const O=e.get(z);if(O.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ee=z.shadow,k=t.get(z);k.shadowIntensity=ee.intensity,k.shadowBias=ee.bias,k.shadowNormalBias=ee.normalBias,k.shadowRadius=ee.radius,k.shadowMapSize=ee.mapSize,r.directionalShadow[y]=k,r.directionalShadowMap[y]=re,r.directionalShadowMatrix[y]=z.shadow.matrix,F++}r.directional[y]=O,y++}else if(z.isSpotLight){const O=e.get(z);O.position.setFromMatrixPosition(z.matrixWorld),O.color.copy(te).multiplyScalar(ce),O.distance=$,O.coneCos=Math.cos(z.angle),O.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),O.decay=z.decay,r.spot[D]=O;const ee=z.shadow;if(z.map&&(r.spotLightMap[P]=z.map,P++,ee.updateMatrices(z),z.castShadow&&J++),r.spotLightMatrix[D]=ee.matrix,z.castShadow){const k=t.get(z);k.shadowIntensity=ee.intensity,k.shadowBias=ee.bias,k.shadowNormalBias=ee.normalBias,k.shadowRadius=ee.radius,k.shadowMapSize=ee.mapSize,r.spotShadow[D]=k,r.spotShadowMap[D]=re,M++}D++}else if(z.isRectAreaLight){const O=e.get(z);O.color.copy(te).multiplyScalar(ce),O.halfWidth.set(z.width*.5,0,0),O.halfHeight.set(0,z.height*.5,0),r.rectArea[U]=O,U++}else if(z.isPointLight){const O=e.get(z);if(O.color.copy(z.color).multiplyScalar(z.intensity),O.distance=z.distance,O.decay=z.decay,z.castShadow){const ee=z.shadow,k=t.get(z);k.shadowIntensity=ee.intensity,k.shadowBias=ee.bias,k.shadowNormalBias=ee.normalBias,k.shadowRadius=ee.radius,k.shadowMapSize=ee.mapSize,k.shadowCameraNear=ee.camera.near,k.shadowCameraFar=ee.camera.far,r.pointShadow[b]=k,r.pointShadowMap[b]=re,r.pointShadowMatrix[b]=z.shadow.matrix,L++}r.point[b]=O,b++}else if(z.isHemisphereLight){const O=e.get(z);O.skyColor.copy(z.color).multiplyScalar(ce),O.groundColor.copy(z.groundColor).multiplyScalar(ce),r.hemi[N]=O,N++}}U>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Je.LTC_FLOAT_1,r.rectAreaLTC2=Je.LTC_FLOAT_2):(r.rectAreaLTC1=Je.LTC_HALF_1,r.rectAreaLTC2=Je.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=d;const W=r.hash;(W.sunLength!==S||W.directionalLength!==y||W.pointLength!==b||W.spotLength!==D||W.rectAreaLength!==U||W.hemiLength!==N||W.numSunShadows!==w||W.numDirectionalShadows!==F||W.numPointShadows!==L||W.numSpotShadows!==M||W.numSpotMaps!==P||W.numLightProbes!==j)&&(r.sun.length=S,r.directional.length=y,r.spot.length=D,r.rectArea.length=U,r.point.length=b,r.hemi.length=N,r.sunShadow.length=w,r.sunShadowMap.length=w,r.sunShadowMatrix.length=E,r.sunShadowCascade.length=E,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.directionalShadowMatrix.length=F,r.pointShadow.length=L,r.pointShadowMap.length=L,r.pointShadowMatrix.length=L,r.spotShadow.length=M,r.spotShadowMap.length=M,r.spotLightMatrix.length=M+P-J,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=J,r.numLightProbes=j,W.sunLength=S,W.directionalLength=y,W.pointLength=b,W.spotLength=D,W.rectAreaLength=U,W.hemiLength=N,W.numSunShadows=w,W.numDirectionalShadows=F,W.numPointShadows=L,W.numSpotShadows=M,W.numSpotMaps=P,W.numLightProbes=j,r.version=Hw++)}function g(m,_){let v=0,d=0,S=0,w=0,E=0,y=0;const b=_.matrixWorldInverse;for(let D=0,U=m.length;D<U;D++){const N=m[D];if(N.isSunLight){const F=r.sun[v];F.direction.setFromMatrixPosition(N.matrixWorld),F.direction.transformDirection(b),v++}else if(N.isDirectionalLight){const F=r.directional[d];F.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),F.direction.sub(o),F.direction.transformDirection(b),d++}else if(N.isSpotLight){const F=r.spot[w];F.position.setFromMatrixPosition(N.matrixWorld),F.position.applyMatrix4(b),F.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),F.direction.sub(o),F.direction.transformDirection(b),w++}else if(N.isRectAreaLight){const F=r.rectArea[E];F.position.setFromMatrixPosition(N.matrixWorld),F.position.applyMatrix4(b),u.identity(),l.copy(N.matrixWorld),l.premultiply(b),u.extractRotation(l),F.halfWidth.set(N.width*.5,0,0),F.halfHeight.set(0,N.height*.5,0),F.halfWidth.applyMatrix4(u),F.halfHeight.applyMatrix4(u),E++}else if(N.isPointLight){const F=r.point[S];F.position.setFromMatrixPosition(N.matrixWorld),F.position.applyMatrix4(b),S++}else if(N.isHemisphereLight){const F=r.hemi[y];F.direction.setFromMatrixPosition(N.matrixWorld),F.direction.transformDirection(b),y++}}}return{setup:f,setupView:g,state:r}}function n0(s){const e=new Vw(s),t=[],r=[],o=[];function l(v){_.camera=v,t.length=0,r.length=0,o.length=0}function u(v){v.isLightProbeGrid?o.push(v):t.push(v)}function f(v){r.push(v)}function g(){e.setup(t),o.sort((v,d)=>v.priority-d.priority||v.id-d.id)}function m(v){e.setupView(t,v)}const _={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:_,setupLights:g,setupLightsView:m,pushLight:u,pushShadow:f}}function Ww(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new n0(s),e.set(o,[f])):l>=u.length?(f=new n0(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const jw=`void main() {
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
}`,Xw=[new xe(1,0,0),new xe(-1,0,0),new xe(0,1,0),new xe(0,-1,0),new xe(0,0,1),new xe(0,0,-1)],Yw=[new xe(0,-1,0),new xe(0,-1,0),new xe(0,0,1),new xe(0,0,-1),new xe(0,-1,0),new xe(0,-1,0)],i0=new vn,no=new xe,Ed=new xe;function qw(s,e,t){let r=new po;const o=new kt,l=new kt,u=new xn,f=new ly,g=new cy,m={},_=t.maxTextureSize,v={[As]:Bn,[Bn]:As,[Wi]:Wi},d=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:jw,fragmentShader:$w}),S=d.clone();S.defines.HORIZONTAL_PASS=1;const w=new lr;w.setAttribute("position",new Es(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Tn(w,d),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$l;let b=this.type;this.render=function(L,M,P){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===Yv&&(St("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$l);const J=s.getRenderTarget(),j=s.getActiveCubeFace(),W=s.getActiveMipmapLevel(),B=s.state;B.setBlending(ha),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const X=b!==this.type;X&&M.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(te=>te.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,te=L.length;z<te;z++){const ce=L[z],$=ce.shadow;if($===void 0){St("WebGLShadowMap:",ce,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;o.copy($.mapSize);const re=$.getFrameExtents();o.multiply(re),l.copy($.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/re.x),o.x=l.x*re.x,$.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/re.y),o.y=l.y*re.y,$.mapSize.y=l.y));const O=s.state.buffers.depth.getReversed();if($.camera._reversedDepth=O,$.map===null||X===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===io){if(ce.isPointLight){St("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new sr(o.x,o.y,{format:Cs,type:or,minFilter:ci,magFilter:ci,generateMipmaps:!1}),$.map.texture.name=ce.name+".shadowMap",$.map.depthTexture=new va(o.x,o.y,ir),$.map.depthTexture.name=ce.name+".shadowMapDepth",$.map.depthTexture.format=ns,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=On,$.map.depthTexture.magFilter=On}else ce.isPointLight?($.map=new If(o.x),$.map.depthTexture=new O0(o.x,ar)):($.map=new sr(o.x,o.y),$.map.depthTexture=new va(o.x,o.y,ar)),$.map.depthTexture.name=ce.name+".shadowMap",$.map.depthTexture.format=ns,this.type===$l?($.map.depthTexture.compareFunction=O?N0:R0,$.map.depthTexture.minFilter=ci,$.map.depthTexture.magFilter=ci):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=On,$.map.depthTexture.magFilter=On);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==o.x||$.map.height!==o.y)&&$.map.setSize(o.x,o.y);const ee=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();ce.isPointLight!==!0&&$.updateMatrices(ce,P);const k=($.camera.layers.mask&4294967294)!==0?$.camera.layers:P.layers;for(let q=0;q<ee;q++){const pe=$.getCamera(q);if(ce.isPointLight){const Y=$.camera,oe=$.matrix,me=ce.distance||Y.far;me!==Y.far&&(Y.far=me,Y.updateProjectionMatrix()),no.setFromMatrixPosition(ce.matrixWorld),Y.position.copy(no),Ed.copy(Y.position),Ed.add(Xw[q]),Y.up.copy(Yw[q]),Y.lookAt(Ed),Y.updateMatrixWorld(),oe.makeTranslation(-no.x,-no.y,-no.z),i0.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),$._frustum.setFromProjectionMatrix(i0,Y.coordinateSystem,Y.reversedDepth)}if($.map.isWebGLCubeRenderTarget)s.setRenderTarget($.map,q),s.clear();else{q===0&&(s.setRenderTarget($.map),s.clear());const Y=$.getViewport(q);u.set(l.x*Y.x,l.y*Y.y,l.x*Y.z,l.y*Y.w),B.viewport(u)}r=$.getFrustum(q),N(M,P,pe,ce,k,this.type)}$.isPointLightShadow!==!0&&this.type===io&&D($,P),$.needsUpdate=!1}b=this.type,y.needsUpdate=!1,s.setRenderTarget(J,j,W)};function D(L,M){const P=e.update(E);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,S.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,S.needsUpdate=!0),L.mapPass===null?L.mapPass=new sr(o.x,o.y,{format:Cs,type:or}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),d.uniforms.shadow_pass.value=L.map.depthTexture,d.uniforms.resolution.value.set(L.map.width,L.map.height),d.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(M,null,P,d,E,null),S.uniforms.shadow_pass.value=L.mapPass.texture,S.uniforms.resolution.value.set(L.map.width,L.map.height),S.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(M,null,P,S,E,null)}function U(L,M,P,J){let j=null;const W=P.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(W!==void 0)j=W;else if(j=P.isPointLight===!0?g:f,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const B=j.uuid,X=M.uuid;let z=m[B];z===void 0&&(z={},m[B]=z);let te=z[X];te===void 0&&(te=j.clone(),z[X]=te,M.addEventListener("dispose",F)),j=te}if(j.visible=M.visible,j.wireframe=M.wireframe,J===io?j.side=M.shadowSide!==null?M.shadowSide:M.side:j.side=M.shadowSide!==null?M.shadowSide:v[M.side],j.alphaMap=M.alphaMap,j.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,j.map=M.map,j.clipShadows=M.clipShadows,j.clippingPlanes=M.clippingPlanes,j.clipIntersection=M.clipIntersection,j.displacementMap=M.displacementMap,j.displacementScale=M.displacementScale,j.displacementBias=M.displacementBias,j.wireframeLinewidth=M.wireframeLinewidth,j.linewidth=M.linewidth,P.isPointLight===!0&&j.isMeshDistanceMaterial===!0){const B=s.properties.get(j);B.light=P}return j}function N(L,M,P,J,j,W){if(L.visible===!1)return;if(L.layers.test(j)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&W===io)&&(!L.frustumCulled||L.intersectsFrustum(r))){L.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,L.matrixWorld);const z=e.update(L),te=L.material;if(Array.isArray(te)){const ce=z.groups;for(let $=0,re=ce.length;$<re;$++){const O=ce[$],ee=te[O.materialIndex];if(ee&&ee.visible){const k=U(L,ee,J,W);L.onBeforeShadow(s,L,M,P,z,k,O),s.renderBufferDirect(P,null,z,k,L,O),L.onAfterShadow(s,L,M,P,z,k,O)}}}else if(te.visible){const ce=U(L,te,J,W);L.onBeforeShadow(s,L,M,P,z,ce,null),s.renderBufferDirect(P,null,z,ce,L,null),L.onAfterShadow(s,L,M,P,z,ce,null)}}const X=L.children;for(let z=0,te=X.length;z<te;z++)N(X[z],M,P,J,j,W)}function F(L){L.target.removeEventListener("dispose",F);for(const P in m){const J=m[P],j=L.target.uuid;j in J&&(J[j].dispose(),delete J[j])}}}function Kw(s,e){function t(){let V=!1;const Te=new xn;let _e=null;const Ae=new xn(0,0,0,0);return{setMask:function(he){_e!==he&&!V&&(s.colorMask(he,he,he,he),_e=he)},setLocked:function(he){V=he},setClear:function(he,Ee,Ge,Qe,Ce){Ce===!0&&(he*=Qe,Ee*=Qe,Ge*=Qe),Te.set(he,Ee,Ge,Qe),Ae.equals(Te)===!1&&(s.clearColor(he,Ee,Ge,Qe),Ae.copy(Te))},reset:function(){V=!1,_e=null,Ae.set(-1,0,0,0)}}}function r(){let V=!1,Te=!1,_e=null,Ae=null,he=null;return{setReversed:function(Ee){if(Te!==Ee){const Ge=e.get("EXT_clip_control");Ee?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Te=Ee;const Qe=he;he=null,this.setClear(Qe)}},getReversed:function(){return Te},setTest:function(Ee){Ee?be(s.DEPTH_TEST):Ie(s.DEPTH_TEST)},setMask:function(Ee){_e!==Ee&&!V&&(s.depthMask(Ee),_e=Ee)},setFunc:function(Ee){if(Te&&(Ee=C_[Ee]),Ae!==Ee){switch(Ee){case Ad:s.depthFunc(s.NEVER);break;case Cd:s.depthFunc(s.ALWAYS);break;case Rd:s.depthFunc(s.LESS);break;case co:s.depthFunc(s.LEQUAL);break;case Nd:s.depthFunc(s.EQUAL);break;case Pd:s.depthFunc(s.GEQUAL);break;case Dd:s.depthFunc(s.GREATER);break;case Ld:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ae=Ee}},setLocked:function(Ee){V=Ee},setClear:function(Ee){he!==Ee&&(he=Ee,Te&&(Ee=1-Ee),s.clearDepth(Ee))},reset:function(){V=!1,_e=null,Ae=null,he=null,Te=!1}}}function o(){let V=!1,Te=null,_e=null,Ae=null,he=null,Ee=null,Ge=null,Qe=null,Ce=null;return{setTest:function(Ze){V||(Ze?be(s.STENCIL_TEST):Ie(s.STENCIL_TEST))},setMask:function(Ze){Te!==Ze&&!V&&(s.stencilMask(Ze),Te=Ze)},setFunc:function(Ze,st,We){(_e!==Ze||Ae!==st||he!==We)&&(s.stencilFunc(Ze,st,We),_e=Ze,Ae=st,he=We)},setOp:function(Ze,st,We){(Ee!==Ze||Ge!==st||Qe!==We)&&(s.stencilOp(Ze,st,We),Ee=Ze,Ge=st,Qe=We)},setLocked:function(Ze){V=Ze},setClear:function(Ze){Ce!==Ze&&(s.clearStencil(Ze),Ce=Ze)},reset:function(){V=!1,Te=null,_e=null,Ae=null,he=null,Ee=null,Ge=null,Qe=null,Ce=null}}}const l=new t,u=new r,f=new o;let g={};const m=new WeakMap;let _={},v={},d={},S=new WeakMap,w=[],E=null,y=!1,b=null,D=null,U=null,N=null,F=null,L=null,M=null,P=new Dt(0,0,0),J=0,j=!1,W=null,B=null,X=null,z=null,te=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,re=0;const O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(O)[1]),$=re>=1):O.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),$=re>=2);let ee=null,k={};const q=s.getParameter(s.SCISSOR_BOX),pe=s.getParameter(s.VIEWPORT),Y=new xn().fromArray(q),oe=new xn().fromArray(pe);function me(V,Te,_e,Ae){const he=new Uint8Array(4),Ee=s.createTexture();s.bindTexture(V,Ee),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ge=0;Ge<_e;Ge++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Te,0,s.RGBA,1,1,Ae,0,s.RGBA,s.UNSIGNED_BYTE,he):s.texImage2D(Te+Ge,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,he);return Ee}const ge={};ge[s.TEXTURE_2D]=me(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[s.TEXTURE_2D_ARRAY]=me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),be(s.DEPTH_TEST),u.setFunc(co),ft(!1),ot(um),be(s.CULL_FACE),it(ha);function be(V){_[V]!==!0&&(s.enable(V),_[V]=!0)}function Ie(V){_[V]!==!1&&(s.disable(V),_[V]=!1)}function rt(V,Te){return d[V]!==Te?(s.bindFramebuffer(V,Te),d[V]=Te,V===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=Te),V===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=Te),!0):!1}function $e(V,Te){let _e=w,Ae=!1;if(V){_e=S.get(Te),_e===void 0&&(_e=[],S.set(Te,_e));const he=V.textures;if(_e.length!==he.length||_e[0]!==s.COLOR_ATTACHMENT0){for(let Ee=0,Ge=he.length;Ee<Ge;Ee++)_e[Ee]=s.COLOR_ATTACHMENT0+Ee;_e.length=he.length,Ae=!0}}else _e[0]!==s.BACK&&(_e[0]=s.BACK,Ae=!0);Ae&&s.drawBuffers(_e)}function Pe(V){return E!==V?(s.useProgram(V),E=V,!0):!1}const Ve={[da]:s.FUNC_ADD,[Kv]:s.FUNC_SUBTRACT,[Zv]:s.FUNC_REVERSE_SUBTRACT};Ve[Jv]=s.MIN,Ve[Qv]=s.MAX;const Xe={[e_]:s.ZERO,[t_]:s.ONE,[n_]:s.SRC_COLOR,[d0]:s.SRC_ALPHA,[l_]:s.SRC_ALPHA_SATURATE,[a_]:s.DST_COLOR,[r_]:s.DST_ALPHA,[i_]:s.ONE_MINUS_SRC_COLOR,[f0]:s.ONE_MINUS_SRC_ALPHA,[o_]:s.ONE_MINUS_DST_COLOR,[s_]:s.ONE_MINUS_DST_ALPHA,[c_]:s.CONSTANT_COLOR,[u_]:s.ONE_MINUS_CONSTANT_COLOR,[d_]:s.CONSTANT_ALPHA,[f_]:s.ONE_MINUS_CONSTANT_ALPHA};function it(V,Te,_e,Ae,he,Ee,Ge,Qe,Ce,Ze){if(V===ha){y===!0&&(Ie(s.BLEND),y=!1);return}if(y===!1&&(be(s.BLEND),y=!0),V!==qv){if(V!==b||Ze!==j){if((D!==da||F!==da)&&(s.blendEquation(s.FUNC_ADD),D=da,F=da),Ze)switch(V){case ao:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ms:s.blendFunc(s.ONE,s.ONE);break;case dm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case fm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Xt("WebGLState: Invalid blending: ",V);break}else switch(V){case ao:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ms:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case dm:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fm:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",V);break}U=null,N=null,L=null,M=null,P.set(0,0,0),J=0,b=V,j=Ze}return}he=he||Te,Ee=Ee||_e,Ge=Ge||Ae,(Te!==D||he!==F)&&(s.blendEquationSeparate(Ve[Te],Ve[he]),D=Te,F=he),(_e!==U||Ae!==N||Ee!==L||Ge!==M)&&(s.blendFuncSeparate(Xe[_e],Xe[Ae],Xe[Ee],Xe[Ge]),U=_e,N=Ae,L=Ee,M=Ge),(Qe.equals(P)===!1||Ce!==J)&&(s.blendColor(Qe.r,Qe.g,Qe.b,Ce),P.copy(Qe),J=Ce),b=V,j=!1}function vt(V,Te){V.side===Wi?Ie(s.CULL_FACE):be(s.CULL_FACE);let _e=V.side===Bn;Te&&(_e=!_e),ft(_e),V.blending===ao&&V.transparent===!1?it(ha):it(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),l.setMask(V.colorWrite);const Ae=V.stencilWrite;f.setTest(Ae),Ae&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),de(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?be(s.SAMPLE_ALPHA_TO_COVERAGE):Ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function ft(V){W!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),W=V)}function ot(V){V!==$v?(be(s.CULL_FACE),V!==B&&(V===um?s.cullFace(s.BACK):V===Xv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ie(s.CULL_FACE),B=V}function Tt(V){V!==X&&($&&s.lineWidth(V),X=V)}function de(V,Te,_e){V?(be(s.POLYGON_OFFSET_FILL),(z!==Te||te!==_e)&&(z=Te,te=_e,u.getReversed()&&(Te=-Te,_e=-_e),s.polygonOffset(Te,_e))):Ie(s.POLYGON_OFFSET_FILL)}function bt(V){V?be(s.SCISSOR_TEST):Ie(s.SCISSOR_TEST)}function Vt(V){V===void 0&&(V=s.TEXTURE0+ce-1),ee!==V&&(s.activeTexture(V),ee=V)}function on(V,Te,_e){_e===void 0&&(ee===null?_e=s.TEXTURE0+ce-1:_e=ee);let Ae=k[_e];Ae===void 0&&(Ae={type:void 0,texture:void 0},k[_e]=Ae),(Ae.type!==V||Ae.texture!==Te)&&(ee!==_e&&(s.activeTexture(_e),ee=_e),s.bindTexture(V,Te||ge[V]),Ae.type=V,Ae.texture=Te)}function Q(){const V=k[ee];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function pn(){try{s.compressedTexImage2D(...arguments)}catch(V){Xt("WebGLState:",V)}}function Mt(){try{s.compressedTexImage3D(...arguments)}catch(V){Xt("WebGLState:",V)}}function Lt(){try{s.texSubImage2D(...arguments)}catch(V){Xt("WebGLState:",V)}}function ke(){try{s.texSubImage3D(...arguments)}catch(V){Xt("WebGLState:",V)}}function At(){try{s.compressedTexSubImage2D(...arguments)}catch(V){Xt("WebGLState:",V)}}function Ye(){try{s.compressedTexSubImage3D(...arguments)}catch(V){Xt("WebGLState:",V)}}function ct(){try{s.texStorage2D(...arguments)}catch(V){Xt("WebGLState:",V)}}function R(){try{s.texStorage3D(...arguments)}catch(V){Xt("WebGLState:",V)}}function T(){try{s.texImage2D(...arguments)}catch(V){Xt("WebGLState:",V)}}function ae(){try{s.texImage3D(...arguments)}catch(V){Xt("WebGLState:",V)}}function Ne(V){return v[V]!==void 0?v[V]:s.getParameter(V)}function Me(V,Te){v[V]!==Te&&(s.pixelStorei(V,Te),v[V]=Te)}function Le(V){Y.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Y.copy(V))}function Be(V){oe.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),oe.copy(V))}function ve(V,Te){let _e=m.get(Te);_e===void 0&&(_e=new WeakMap,m.set(Te,_e));let Ae=_e.get(V);Ae===void 0&&(Ae=s.getUniformBlockIndex(Te,V.name),s.uniformBlockBinding(Te,Ae,Ae),_e.set(V,Ae))}function we(V,Te,_e){const he=m.get(Te).get(V);g[he]!==_e&&(s.bindBufferBase(s.UNIFORM_BUFFER,he,_e),g[he]=_e)}function Oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),_={},v={},ee=null,k={},d={},g={},S=new WeakMap,w=[],E=null,y=!1,b=null,D=null,U=null,N=null,F=null,L=null,M=null,P=new Dt(0,0,0),J=0,j=!1,W=null,B=null,X=null,z=null,te=null,Y.set(0,0,s.canvas.width,s.canvas.height),oe.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:be,disable:Ie,bindFramebuffer:rt,drawBuffers:$e,useProgram:Pe,setBlending:it,setMaterial:vt,setFlipSided:ft,setCullFace:ot,setLineWidth:Tt,setPolygonOffset:de,setScissorTest:bt,activeTexture:Vt,bindTexture:on,unbindTexture:Q,compressedTexImage2D:pn,compressedTexImage3D:Mt,texImage2D:T,texImage3D:ae,pixelStorei:Me,getParameter:Ne,updateUBOMapping:ve,uniformBlockBinding:we,texStorage2D:ct,texStorage3D:R,texSubImage2D:Lt,texSubImage3D:ke,compressedTexSubImage2D:At,compressedTexSubImage3D:Ye,scissor:Le,viewport:Be,reset:Oe}}function Zw(s,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new kt,_=new WeakMap,v=new Set;let d;const S=new WeakMap,w=new Set,E=new FinalizationRegistry(R=>w.delete(R));let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(R,T){return y?new OffscreenCanvas(R,T):ac("canvas")}function D(R,T,ae){let Ne=1;const Me=ct(R);if((Me.width>ae||Me.height>ae)&&(Ne=ae/Math.max(Me.width,Me.height)),Ne<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Le=Math.floor(Ne*Me.width),Be=Math.floor(Ne*Me.height);d===void 0&&(d=b(Le,Be));const ve=T?b(Le,Be):d;return ve.width=Le,ve.height=Be,ve.getContext("2d").drawImage(R,0,0,Le,Be),St("WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+Le+"x"+Be+")."),ve}else return"data"in R&&St("WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),R;return R}function U(R){return R.generateMipmaps}function N(R){s.generateMipmap(R)}function F(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(R,T,ae,Ne,Me,Le=!1){if(R!==null){if(s[R]!==void 0)return s[R];St("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Be;Ne&&(Be=e.get("EXT_texture_norm16"),Be||St("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ve=T;if(T===s.RED&&(ae===s.FLOAT&&(ve=s.R32F),ae===s.HALF_FLOAT&&(ve=s.R16F),ae===s.UNSIGNED_BYTE&&(ve=s.R8),ae===s.UNSIGNED_SHORT&&Be&&(ve=Be.R16_EXT),ae===s.SHORT&&Be&&(ve=Be.R16_SNORM_EXT)),T===s.RED_INTEGER&&(ae===s.UNSIGNED_BYTE&&(ve=s.R8UI),ae===s.UNSIGNED_SHORT&&(ve=s.R16UI),ae===s.UNSIGNED_INT&&(ve=s.R32UI),ae===s.BYTE&&(ve=s.R8I),ae===s.SHORT&&(ve=s.R16I),ae===s.INT&&(ve=s.R32I)),T===s.RG&&(ae===s.FLOAT&&(ve=s.RG32F),ae===s.HALF_FLOAT&&(ve=s.RG16F),ae===s.UNSIGNED_BYTE&&(ve=s.RG8),ae===s.UNSIGNED_SHORT&&Be&&(ve=Be.RG16_EXT),ae===s.SHORT&&Be&&(ve=Be.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(ae===s.UNSIGNED_BYTE&&(ve=s.RG8UI),ae===s.UNSIGNED_SHORT&&(ve=s.RG16UI),ae===s.UNSIGNED_INT&&(ve=s.RG32UI),ae===s.BYTE&&(ve=s.RG8I),ae===s.SHORT&&(ve=s.RG16I),ae===s.INT&&(ve=s.RG32I)),T===s.RGB_INTEGER&&(ae===s.UNSIGNED_BYTE&&(ve=s.RGB8UI),ae===s.UNSIGNED_SHORT&&(ve=s.RGB16UI),ae===s.UNSIGNED_INT&&(ve=s.RGB32UI),ae===s.BYTE&&(ve=s.RGB8I),ae===s.SHORT&&(ve=s.RGB16I),ae===s.INT&&(ve=s.RGB32I)),T===s.RGBA_INTEGER&&(ae===s.UNSIGNED_BYTE&&(ve=s.RGBA8UI),ae===s.UNSIGNED_SHORT&&(ve=s.RGBA16UI),ae===s.UNSIGNED_INT&&(ve=s.RGBA32UI),ae===s.BYTE&&(ve=s.RGBA8I),ae===s.SHORT&&(ve=s.RGBA16I),ae===s.INT&&(ve=s.RGBA32I)),T===s.RGB&&(ae===s.UNSIGNED_SHORT&&Be&&(ve=Be.RGB16_EXT),ae===s.SHORT&&Be&&(ve=Be.RGB16_SNORM_EXT),ae===s.UNSIGNED_INT_5_9_9_9_REV&&(ve=s.RGB9_E5),ae===s.UNSIGNED_INT_10F_11F_11F_REV&&(ve=s.R11F_G11F_B10F)),T===s.RGBA){const we=Le?sc:Ut.getTransfer(Me);ae===s.FLOAT&&(ve=s.RGBA32F),ae===s.HALF_FLOAT&&(ve=s.RGBA16F),ae===s.UNSIGNED_BYTE&&(ve=we===Zt?s.SRGB8_ALPHA8:s.RGBA8),ae===s.UNSIGNED_SHORT&&Be&&(ve=Be.RGBA16_EXT),ae===s.SHORT&&Be&&(ve=Be.RGBA16_SNORM_EXT),ae===s.UNSIGNED_SHORT_4_4_4_4&&(ve=s.RGBA4),ae===s.UNSIGNED_SHORT_5_5_5_1&&(ve=s.RGB5_A1)}return(ve===s.R16F||ve===s.R32F||ve===s.RG16F||ve===s.RG32F||ve===s.RGBA16F||ve===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function M(R,T){let ae;return R?T===null||T===ar||T===xa?ae=s.DEPTH24_STENCIL8:T===ir?ae=s.DEPTH32F_STENCIL8:T===fo&&(ae=s.DEPTH24_STENCIL8,St("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ar||T===xa?ae=s.DEPTH_COMPONENT24:T===ir?ae=s.DEPTH_COMPONENT32F:T===fo&&(ae=s.DEPTH_COMPONENT16),ae}function P(R,T){return U(R)===!0||R.isFramebufferTexture&&R.minFilter!==On&&R.minFilter!==ci?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function J(R){const T=new WeakRef(R);r.get(R).__ref=T,w.add(T),E.register(R,T,T)}function j(R){const T=r.get(R).__ref;T!==void 0&&(w.delete(T),E.unregister(T))}function W(R){X(R.target)}function B(R){z(R.target)}function X(R){R.removeEventListener("dispose",W),j(R),ce(R),R.isVideoTexture&&_.delete(R),R.isHTMLTexture&&v.delete(R)}function z(R){R.removeEventListener("dispose",B),j(R),re(R)}function te(){for(const R of w){const T=R.deref();T!==void 0&&(T.isRenderTarget===!0?z(T):X(T))}w.clear(),v.clear()}function ce(R){const T=r.get(R);if(T.__webglInit===void 0)return;const ae=R.source,Ne=S.get(ae);if(Ne){const Me=Ne[T.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&$(R),Object.keys(Ne).length===0&&S.delete(ae)}r.remove(R)}function $(R){const T=r.get(R);s.deleteTexture(T.__webglTexture);const ae=R.source,Ne=S.get(ae);delete Ne[T.__cacheKey],u.memory.textures--}function re(R){const T=r.get(R);T.__depthDisposeCallback&&T.__depthDisposeCallback();const ae=R.depthTexture;if(ae&&ae.renderTarget===R&&X(ae),R.isWebGLCubeRenderTarget)for(let Me=0;Me<6;Me++){if(Array.isArray(T.__webglFramebuffer[Me]))for(let Le=0;Le<T.__webglFramebuffer[Me].length;Le++)s.deleteFramebuffer(T.__webglFramebuffer[Me][Le]);else s.deleteFramebuffer(T.__webglFramebuffer[Me]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[Me])}else{if(Array.isArray(T.__webglFramebuffer))for(let Me=0;Me<T.__webglFramebuffer.length;Me++)s.deleteFramebuffer(T.__webglFramebuffer[Me]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Me=0;Me<T.__webglColorRenderbuffer.length;Me++)T.__webglColorRenderbuffer[Me]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[Me]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Ne=R.textures;for(let Me=0,Le=Ne.length;Me<Le;Me++){const Be=r.get(Ne[Me]);Be.__webglTexture&&(s.deleteTexture(Be.__webglTexture),u.memory.textures--),r.remove(Ne[Me])}r.remove(R)}let O=0;function ee(){O=0}function k(){return O}function q(R){O=R}function pe(){const R=O;return R>=o.maxTextures&&St("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+o.maxTextures),O+=1,R}function Y(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.mipmapsAutoUpdate),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function oe(R,T){const ae=r.get(R);if(R.isVideoTexture&&At(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&ae.__version!==R.version){const Ne=R.image;if(Ne===null)St("WebGLRenderer: Texture marked for update but no image data found.");else if(Ne.complete===!1)St("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(ae,R,T);return}}else R.isExternalTexture&&(ae.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ae.__webglTexture,s.TEXTURE0+T)}function me(R,T){const ae=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&ae.__version!==R.version){vt(ae,R,T);return}else R.isExternalTexture&&(ae.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ae.__webglTexture,s.TEXTURE0+T)}function ge(R,T){const ae=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&ae.__version!==R.version){vt(ae,R,T);return}t.bindTexture(s.TEXTURE_3D,ae.__webglTexture,s.TEXTURE0+T)}function be(R,T){const ae=r.get(R);if(R.version>0&&ae.__version!==R.version){ft(ae,R,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture,s.TEXTURE0+T)}const Ie={[ga]:s.REPEAT,[li]:s.CLAMP_TO_EDGE,[Id]:s.MIRRORED_REPEAT},rt={[On]:s.NEAREST,[m_]:s.NEAREST_MIPMAP_NEAREST,[wl]:s.NEAREST_MIPMAP_LINEAR,[ci]:s.LINEAR,[Qu]:s.LINEAR_MIPMAP_NEAREST,[es]:s.LINEAR_MIPMAP_LINEAR},$e={[__]:s.NEVER,[P0]:s.ALWAYS,[y_]:s.LESS,[R0]:s.LEQUAL,[S_]:s.EQUAL,[N0]:s.GEQUAL,[b_]:s.GREATER,[w_]:s.NOTEQUAL};function Pe(R,T){if(T.type===ir&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===ci||T.magFilter===Qu||T.magFilter===wl||T.magFilter===es||T.minFilter===ci||T.minFilter===Qu||T.minFilter===wl||T.minFilter===es)&&St("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,Ie[T.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Ie[T.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Ie[T.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,rt[T.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,rt[T.minFilter]),T.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,$e[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===On||T.minFilter!==wl&&T.minFilter!==es||T.type===ir&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ve(R,T){let ae=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",W),J(T));const Ne=T.source;let Me=S.get(Ne);Me===void 0&&(Me={},S.set(Ne,Me));const Le=Y(T);if(Le!==R.__cacheKey){Me[Le]===void 0&&(Me[Le]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,ae=!0),Me[Le].usedTimes++;const Be=Me[R.__cacheKey];Be!==void 0&&(Me[R.__cacheKey].usedTimes--,Be.usedTimes===0&&$(T)),R.__cacheKey=Le,R.__webglTexture=Me[Le].texture}return ae}function Xe(R,T,ae){return Math.floor(Math.floor(R/ae)/T)}function it(R,T,ae,Ne){const Le=R.updateRanges;if(Le.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,ae,Ne,T.data);else{Le.sort((V,Te)=>V.start-Te.start);let Be=0;for(let V=1;V<Le.length;V++){const Te=Le[Be],_e=Le[V],Ae=Te.start+Te.count,he=Xe(_e.start,T.width,4),Ee=Xe(Te.start,T.width,4);_e.start<=Ae+1&&he===Ee&&Xe(_e.start+_e.count-1,T.width,4)===he?Te.count=Math.max(Te.count,_e.start+_e.count-Te.start):(++Be,Le[Be]=_e)}Le.length=Be+1;const ve=t.getParameter(s.UNPACK_ROW_LENGTH),we=t.getParameter(s.UNPACK_SKIP_PIXELS),Oe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let V=0,Te=Le.length;V<Te;V++){const _e=Le[V],Ae=Math.floor(_e.start/4),he=Math.ceil(_e.count/4),Ee=Ae%T.width,Ge=Math.floor(Ae/T.width),Qe=he,Ce=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ee),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ge),t.texSubImage2D(s.TEXTURE_2D,0,Ee,Ge,Qe,Ce,ae,Ne,T.data)}R.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ve),t.pixelStorei(s.UNPACK_SKIP_PIXELS,we),t.pixelStorei(s.UNPACK_SKIP_ROWS,Oe)}}function vt(R,T,ae){let Ne=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Ne=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Ne=s.TEXTURE_3D);const Me=Ve(R,T),Le=T.source;t.bindTexture(Ne,R.__webglTexture,s.TEXTURE0+ae);const Be=r.get(Le);if(Le.version!==Be.__version||Me===!0){if(t.activeTexture(s.TEXTURE0+ae),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const Ce=Ut.getPrimaries(Ut.workingColorSpace),Ze=T.colorSpace===Qr?null:Ut.getPrimaries(T.colorSpace),st=T.colorSpace===Qr||Ce===Ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,st)}t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let we=D(T.image,!1,o.maxTextureSize);we=Ye(T,we);const Oe=l.convert(T.format,T.colorSpace),V=l.convert(T.type);let Te=L(T.internalFormat,Oe,V,T.normalized,T.colorSpace,T.isVideoTexture);Pe(Ne,T);let _e;const Ae=T.mipmaps,he=T.isVideoTexture!==!0,Ee=Be.__version===void 0||Me===!0,Ge=Le.dataReady,Qe=P(T,we);if(T.isDepthTexture)Te=M(T.format===ts,T.type),Ee&&(he?t.texStorage2D(s.TEXTURE_2D,1,Te,we.width,we.height):t.texImage2D(s.TEXTURE_2D,0,Te,we.width,we.height,0,Oe,V,null));else if(T.isDataTexture)if(Ae.length>0){he&&Ee&&t.texStorage2D(s.TEXTURE_2D,Qe,Te,Ae[0].width,Ae[0].height);for(let Ce=0,Ze=Ae.length;Ce<Ze;Ce++)_e=Ae[Ce],he?Ge&&t.texSubImage2D(s.TEXTURE_2D,Ce,0,0,_e.width,_e.height,Oe,V,_e.data):t.texImage2D(s.TEXTURE_2D,Ce,Te,_e.width,_e.height,0,Oe,V,_e.data);T.generateMipmaps=!1}else he?(Ee&&t.texStorage2D(s.TEXTURE_2D,Qe,Te,we.width,we.height),Ge&&it(T,we,Oe,V)):t.texImage2D(s.TEXTURE_2D,0,Te,we.width,we.height,0,Oe,V,we.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){he&&Ee&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Qe,Te,Ae[0].width,Ae[0].height,we.depth);for(let Ce=0,Ze=Ae.length;Ce<Ze;Ce++)if(_e=Ae[Ce],T.format!==rr)if(Oe!==null)if(he){if(Ge)if(T.layerUpdates.size>0){const st=Um(_e.width,_e.height,T.format,T.type);for(const We of T.layerUpdates){const ht=_e.data.subarray(We*st/_e.data.BYTES_PER_ELEMENT,(We+1)*st/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ce,0,0,We,_e.width,_e.height,1,Oe,ht)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ce,0,0,0,_e.width,_e.height,we.depth,Oe,_e.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ce,Te,_e.width,_e.height,we.depth,0,_e.data,0,0);else St("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?Ge&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Ce,0,0,0,_e.width,_e.height,we.depth,Oe,V,_e.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Ce,Te,_e.width,_e.height,we.depth,0,Oe,V,_e.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{he&&Ee&&t.texStorage2D(s.TEXTURE_2D,Qe,Te,Ae[0].width,Ae[0].height);for(let Ce=0,Ze=Ae.length;Ce<Ze;Ce++)_e=Ae[Ce],T.format!==rr?Oe!==null?he?Ge&&t.compressedTexSubImage2D(s.TEXTURE_2D,Ce,0,0,_e.width,_e.height,Oe,_e.data):t.compressedTexImage2D(s.TEXTURE_2D,Ce,Te,_e.width,_e.height,0,_e.data):St("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?Ge&&t.texSubImage2D(s.TEXTURE_2D,Ce,0,0,_e.width,_e.height,Oe,V,_e.data):t.texImage2D(s.TEXTURE_2D,Ce,Te,_e.width,_e.height,0,Oe,V,_e.data)}else if(T.isDataArrayTexture)if(he){if(Ee&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Qe,Te,we.width,we.height,we.depth),Ge)if(T.layerUpdates.size>0){const Ce=Um(we.width,we.height,T.format,T.type);for(const Ze of T.layerUpdates){const st=we.data.subarray(Ze*Ce/we.data.BYTES_PER_ELEMENT,(Ze+1)*Ce/we.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ze,we.width,we.height,1,Oe,V,st)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Oe,V,we.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Te,we.width,we.height,we.depth,0,Oe,V,we.data);else if(T.isData3DTexture)he?(Ee&&t.texStorage3D(s.TEXTURE_3D,Qe,Te,we.width,we.height,we.depth),Ge&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Oe,V,we.data)):t.texImage3D(s.TEXTURE_3D,0,Te,we.width,we.height,we.depth,0,Oe,V,we.data);else if(T.isFramebufferTexture){if(Ee)if(he)t.texStorage2D(s.TEXTURE_2D,Qe,Te,we.width,we.height);else{let Ce=we.width,Ze=we.height;for(let st=0;st<Qe;st++)t.texImage2D(s.TEXTURE_2D,st,Te,Ce,Ze,0,Oe,V,null),Ce>>=1,Ze>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){const Ce=s.canvas;if(Ce.hasAttribute("layoutsubtree")||Ce.setAttribute("layoutsubtree","true"),we.parentNode!==Ce){Ce.appendChild(we),v.add(T),Ce.onpaint=Ze=>{const st=Ze.changedElements;for(const We of v)st.includes(We.image)&&(We.needsUpdate=!0)},Ce.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,we);else{const st=s.RGBA,We=s.RGBA,ht=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,st,We,ht,we)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(he&&Ee){const Ce=ct(Ae[0]);t.texStorage2D(s.TEXTURE_2D,Qe,Te,Ce.width,Ce.height)}for(let Ce=0,Ze=Ae.length;Ce<Ze;Ce++)_e=Ae[Ce],he?Ge&&t.texSubImage2D(s.TEXTURE_2D,Ce,0,0,Oe,V,_e):t.texImage2D(s.TEXTURE_2D,Ce,Te,Oe,V,_e);T.generateMipmaps=!1}else if(he){if(Ee){const Ce=ct(we);t.texStorage2D(s.TEXTURE_2D,Qe,Te,Ce.width,Ce.height)}Ge&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,V,we)}else t.texImage2D(s.TEXTURE_2D,0,Te,Oe,V,we);U(T)&&T.mipmapsAutoUpdate===!0&&N(Ne),Be.__version=Le.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function ft(R,T,ae){if(T.image.length!==6)return;const Ne=Ve(R,T),Me=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+ae);const Le=r.get(Me);if(Me.version!==Le.__version||Ne===!0){t.activeTexture(s.TEXTURE0+ae);const Be=Ut.getPrimaries(Ut.workingColorSpace),ve=T.colorSpace===Qr?null:Ut.getPrimaries(T.colorSpace),we=T.colorSpace===Qr||Be===ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Oe=T.isCompressedTexture||T.image[0].isCompressedTexture,V=T.image[0]&&T.image[0].isDataTexture,Te=[];for(let We=0;We<6;We++)!Oe&&!V?Te[We]=D(T.image[We],!0,o.maxCubemapSize):Te[We]=V?T.image[We].image:T.image[We],Te[We]=Ye(T,Te[We]);const _e=Te[0],Ae=l.convert(T.format,T.colorSpace),he=l.convert(T.type);let Ee=L(T.internalFormat,Ae,he,T.normalized,T.colorSpace);const Ge=T.isVideoTexture!==!0,Qe=Le.__version===void 0||Ne===!0,Ce=Me.dataReady;let Ze=P(T,_e);Pe(s.TEXTURE_CUBE_MAP,T);let st;if(T.isDepthTexture){if(Ee=M(T.format===ts,T.type),Qe)if(Ge)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Ee,_e.width,_e.height);else for(let We=0;We<6;We++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,Ee,_e.width,_e.height,0,Ae,he,null)}else if(Oe){Ge&&Qe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ze,Ee,_e.width,_e.height);for(let We=0;We<6;We++){st=Te[We].mipmaps;for(let ht=0;ht<st.length;ht++){const Bt=st[ht];T.format!==rr?Ae!==null?Ge?Ce&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,ht,0,0,Bt.width,Bt.height,Ae,Bt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,ht,Ee,Bt.width,Bt.height,0,Bt.data):St("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?Ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,ht,0,0,Bt.width,Bt.height,Ae,he,Bt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,ht,Ee,Bt.width,Bt.height,0,Ae,he,Bt.data)}}}else{if(st=T.mipmaps,Ge&&Qe){st.length>0&&Ze++;const We=ct(Te[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ze,Ee,We.width,We.height)}for(let We=0;We<6;We++)if(V){Ge?Ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,0,0,Te[We].width,Te[We].height,Ae,he,Te[We].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,Ee,Te[We].width,Te[We].height,0,Ae,he,Te[We].data);for(let ht=0;ht<st.length;ht++){const tn=st[ht].image[We].image;Ge?Ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,ht+1,0,0,tn.width,tn.height,Ae,he,tn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,ht+1,Ee,tn.width,tn.height,0,Ae,he,tn.data)}}else{Ge?Ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,0,0,Ae,he,Te[We]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,Ee,Ae,he,Te[We]);for(let ht=0;ht<st.length;ht++){const Bt=st[ht];Ge?Ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,ht+1,0,0,Ae,he,Bt.image[We]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,ht+1,Ee,Ae,he,Bt.image[We])}}}U(T)&&T.mipmapsAutoUpdate===!0&&N(s.TEXTURE_CUBE_MAP),Le.__version=Me.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function ot(R,T,ae,Ne,Me,Le){const Be=l.convert(ae.format,ae.colorSpace),ve=l.convert(ae.type),we=L(ae.internalFormat,Be,ve,ae.normalized,ae.colorSpace),Oe=r.get(T),V=r.get(ae);if(V.__renderTarget=T,!Oe.__hasExternalTextures){const Te=Math.max(1,T.width>>Le),_e=Math.max(1,T.height>>Le);Me===s.TEXTURE_3D||Me===s.TEXTURE_2D_ARRAY?t.texImage3D(Me,Le,we,Te,_e,T.depth,0,Be,ve,null):t.texImage2D(Me,Le,we,Te,_e,0,Be,ve,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),ke(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ne,Me,V.__webglTexture,0,Lt(T)):(Me===s.TEXTURE_2D||Me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Ne,Me,V.__webglTexture,Le),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Tt(R,T,ae){if(s.bindRenderbuffer(s.RENDERBUFFER,R),T.depthBuffer){const Ne=T.depthTexture,Me=Ne&&Ne.isDepthTexture?Ne.type:null,Le=M(T.stencilBuffer,Me),Be=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ke(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Lt(T),Le,T.width,T.height):ae?s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt(T),Le,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Le,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Be,s.RENDERBUFFER,R)}else{const Ne=T.textures;for(let Me=0;Me<Ne.length;Me++){const Le=Ne[Me],Be=l.convert(Le.format,Le.colorSpace),ve=l.convert(Le.type),we=L(Le.internalFormat,Be,ve,Le.normalized,Le.colorSpace);ke(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Lt(T),we,T.width,T.height):ae?s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt(T),we,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,we,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function de(R,T,ae){const Ne=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Me=r.get(T.depthTexture);Me.__renderTarget=T;const Le=Ne?T.depthTexture.image[0]:T.depthTexture.image;(!Me.__webglTexture||Le.width!==T.width||Le.height!==T.height)&&(Le.width=T.width,Le.height=T.height,T.depthTexture.needsUpdate=!0),Ne?be(T.depthTexture,0):oe(T.depthTexture,0);const Be=Me.__webglTexture,ve=Lt(T),we=Ne?s.TEXTURE_CUBE_MAP_POSITIVE_X+ae:s.TEXTURE_2D,Oe=T.depthTexture.format===ts?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===ns)ke(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Oe,we,Be,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,Oe,we,Be,0);else if(T.depthTexture.format===ts)ke(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Oe,we,Be,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,Oe,we,Be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function bt(R){const T=r.get(R),ae=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){const Ne=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Ne){const Me=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Ne.removeEventListener("dispose",Me)};Ne.addEventListener("dispose",Me),T.__depthDisposeCallback=Me}T.__boundDepthTexture=Ne}if(R.depthTexture&&!T.__autoAllocateDepthBuffer)if(ae)for(let Ne=0;Ne<6;Ne++)de(T.__webglFramebuffer[Ne],R,Ne);else R.texture.mipmaps.length>0?de(T.__webglFramebuffer[0],R,0):de(T.__webglFramebuffer,R,0);else if(ae){T.__webglDepthbuffer=[];for(let Ne=0;Ne<6;Ne++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[Ne]),T.__webglDepthbuffer[Ne]===void 0)T.__webglDepthbuffer[Ne]=s.createRenderbuffer(),Tt(T.__webglDepthbuffer[Ne],R,!1);else{const Me=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=T.__webglDepthbuffer[Ne];s.bindRenderbuffer(s.RENDERBUFFER,Le),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,Le)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Tt(T.__webglDepthbuffer,R,!1);else{const Me=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Le),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,Le)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Vt(R,T,ae){const Ne=r.get(R);T!==void 0&&ot(Ne.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ae!==void 0&&bt(R)}function on(R){const T=R.texture,ae=r.get(R),Ne=r.get(T);R.addEventListener("dispose",B),J(R);const Me=R.textures,Le=R.isWebGLCubeRenderTarget===!0,Be=Me.length>1;if(Be||(Ne.__webglTexture===void 0&&(Ne.__webglTexture=s.createTexture()),Ne.__version=T.version,u.memory.textures++),Le){ae.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(T.mipmaps.length>0){ae.__webglFramebuffer[ve]=[];for(let we=0;we<T.mipmaps.length;we++)ae.__webglFramebuffer[ve][we]=s.createFramebuffer()}else ae.__webglFramebuffer[ve]=s.createFramebuffer()}else{if(T.mipmaps.length>0){ae.__webglFramebuffer=[];for(let ve=0;ve<T.mipmaps.length;ve++)ae.__webglFramebuffer[ve]=s.createFramebuffer()}else ae.__webglFramebuffer=s.createFramebuffer();if(Be)for(let ve=0,we=Me.length;ve<we;ve++){const Oe=r.get(Me[ve]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=s.createTexture(),u.memory.textures++)}if(R.samples>0&&ke(R)===!1){ae.__webglMultisampledFramebuffer=s.createFramebuffer(),ae.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let ve=0;ve<Me.length;ve++){const we=Me[ve];ae.__webglColorRenderbuffer[ve]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ae.__webglColorRenderbuffer[ve]);const Oe=l.convert(we.format,we.colorSpace),V=l.convert(we.type),Te=L(we.internalFormat,Oe,V,we.normalized,we.colorSpace,R.isXRRenderTarget===!0),_e=Lt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,Te,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,ae.__webglColorRenderbuffer[ve])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(ae.__webglDepthRenderbuffer=s.createRenderbuffer(),Tt(ae.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Le){t.bindTexture(s.TEXTURE_CUBE_MAP,Ne.__webglTexture),Pe(s.TEXTURE_CUBE_MAP,T);for(let ve=0;ve<6;ve++)if(T.mipmaps.length>0)for(let we=0;we<T.mipmaps.length;we++)ot(ae.__webglFramebuffer[ve][we],R,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,we);else ot(ae.__webglFramebuffer[ve],R,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);U(T)?N(s.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(Be){for(let ve=0,we=Me.length;ve<we;ve++){const Oe=Me[ve],V=r.get(Oe);let Te=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Te=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Te,V.__webglTexture),Pe(Te,Oe),ot(ae.__webglFramebuffer,R,Oe,s.COLOR_ATTACHMENT0+ve,Te,0),U(Oe)&&N(Te)}t.unbindTexture()}else{let ve=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ve=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ve,Ne.__webglTexture),Pe(ve,T),T.mipmaps.length>0)for(let we=0;we<T.mipmaps.length;we++)ot(ae.__webglFramebuffer[we],R,T,s.COLOR_ATTACHMENT0,ve,we);else ot(ae.__webglFramebuffer,R,T,s.COLOR_ATTACHMENT0,ve,0);U(T)?N(ve):T.mipmaps.length>0&&s.texParameteri(ve,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&bt(R)}function Q(R){const T=R.textures;for(let ae=0,Ne=T.length;ae<Ne;ae++){const Me=T[ae];if(U(Me)&&Me.mipmapsAutoUpdate===!0){const Le=F(R),Be=r.get(Me).__webglTexture;t.bindTexture(Le,Be),N(Le),t.unbindTexture()}}}const pn=[];function Mt(R){if(R.samples>0){if(ke(R)===!1){const T=R.textures,ae=R.width,Ne=R.height;let Me=s.COLOR_BUFFER_BIT;const Le=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Be=r.get(R),ve=T.length>1;if(ve)for(let Oe=0;Oe<T.length;Oe++)t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Oe=0;Oe<T.length;Oe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Me|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Me|=s.STENCIL_BUFFER_BIT)),ve){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Be.__webglColorRenderbuffer[Oe]);const V=r.get(T[Oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,V,0)}s.blitFramebuffer(0,0,ae,Ne,0,0,ae,Ne,Me,s.NEAREST),g===!0&&(pn.length=0,pn.push(s.COLOR_ATTACHMENT0+Oe),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&pn.push(Le),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,pn))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ve)for(let Oe=0;Oe<T.length;Oe++){t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,Be.__webglColorRenderbuffer[Oe]);const V=r.get(T[Oe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,V,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&g){const T=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Lt(R){return Math.min(o.maxSamples,R.samples)}function ke(R){const T=r.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function At(R){const T=u.render.frame;_.get(R)!==T&&(_.set(R,T),R.update())}function Ye(R,T){const ae=R.colorSpace,Ne=R.format,Me=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||ae!==rc&&ae!==Qr&&(Ut.getTransfer(ae)===Zt?(Ne!==rr||Me!==yi)&&St("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",ae)),T}function ct(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(m.width=R.naturalWidth||R.width,m.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(m.width=R.displayWidth,m.height=R.displayHeight):(m.width=R.width,m.height=R.height),m}this.allocateTextureUnit=pe,this.resetTextureUnits=ee,this.getTextureUnits=k,this.setTextureUnits=q,this.setTexture2D=oe,this.setTexture2DArray=me,this.setTexture3D=ge,this.setTextureCube=be,this.rebindTextures=Vt,this.setupRenderTarget=on,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=ke,this.dispose=te}function Jw(s,e){function t(r,o=Qr){let l;const u=Ut.getTransfer(o);if(r===yi)return s.UNSIGNED_BYTE;if(r===bf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===wf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===M0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===E0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===b0)return s.BYTE;if(r===w0)return s.SHORT;if(r===fo)return s.UNSIGNED_SHORT;if(r===Sf)return s.INT;if(r===ar)return s.UNSIGNED_INT;if(r===ir)return s.FLOAT;if(r===or)return s.HALF_FLOAT;if(r===T0)return s.ALPHA;if(r===A0)return s.RGB;if(r===rr)return s.RGBA;if(r===ns)return s.DEPTH_COMPONENT;if(r===ts)return s.DEPTH_STENCIL;if(r===C0)return s.RED;if(r===Mf)return s.RED_INTEGER;if(r===Cs)return s.RG;if(r===Ef)return s.RG_INTEGER;if(r===Tf)return s.RGBA_INTEGER;if(r===Xl||r===Yl||r===ql||r===Kl)if(u===Zt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Xl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Yl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Xl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Yl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ql)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Kl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===kd||r===Ud||r===Fd||r===zd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===kd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ud)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===zd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Od||r===Bd||r===Hd||r===Gd||r===Vd||r===nc||r===Wd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Od||r===Bd)return u===Zt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Hd)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Gd)return l.COMPRESSED_R11_EAC;if(r===Vd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===nc)return l.COMPRESSED_RG11_EAC;if(r===Wd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===jd||r===$d||r===Xd||r===Yd||r===qd||r===Kd||r===Zd||r===Jd||r===Qd||r===ef||r===tf||r===nf||r===rf||r===sf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===jd)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===$d)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xd)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Yd)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===qd)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Kd)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zd)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Jd)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qd)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ef)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===tf)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===nf)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===rf)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===sf)return u===Zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===af||r===of||r===lf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===af)return u===Zt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===of)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===lf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===cf||r===uf||r===ic||r===df)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===cf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===uf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ic)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===df)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===xa?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const Qw=`
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

}`;class tM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new B0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ni({vertexShader:Qw,fragmentShader:eM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tn(new _o(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nM extends Rs{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",g=1,m=null,_=null,v=null,d=null,S=null,w=null;const E=typeof XRWebGLBinding<"u",y=new tM,b={},D=t.getContextAttributes();let U=null,N=null;const F=[],L=[],M=new kt;let P=null,J=null;const j=new Gi;j.viewport=new xn;const W=new Gi;W.viewport=new xn;const B=[j,W],X=new py;let z=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let oe=F[Y];return oe===void 0&&(oe=new ld,F[Y]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Y){let oe=F[Y];return oe===void 0&&(oe=new ld,F[Y]=oe),oe.getGripSpace()},this.getHand=function(Y){let oe=F[Y];return oe===void 0&&(oe=new ld,F[Y]=oe),oe.getHandSpace()};function ce(Y){const oe=L.indexOf(Y.inputSource);if(oe===-1)return;const me=F[oe];me!==void 0&&(me.update(Y.inputSource,Y.frame,m||u),me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function $(){o.removeEventListener("select",ce),o.removeEventListener("selectstart",ce),o.removeEventListener("selectend",ce),o.removeEventListener("squeeze",ce),o.removeEventListener("squeezestart",ce),o.removeEventListener("squeezeend",ce),o.removeEventListener("end",$),o.removeEventListener("inputsourceschange",re);for(let Y=0;Y<F.length;Y++){const oe=L[Y];oe!==null&&(L[Y]=null,F[Y].disconnect(oe))}z=null,te=null,y.reset();for(const Y in b)delete b[Y];if(e.setRenderTarget(U),S=null,d=null,v=null,o=null,N=null,pe.stop(),r.isPresenting=!1,e.setPixelRatio(P),e.setSize(M.width,M.height,!1),J!==null){const Y=J.camera;Y.fov=J.fov,Y.zoom=J.zoom,Y.updateProjectionMatrix(),J=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){l=Y,r.isPresenting===!0&&St("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){f=Y,r.isPresenting===!0&&St("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(Y){m=Y},this.getBaseLayer=function(){return d!==null?d:S},this.getBinding=function(){return v===null&&E&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(Y){if(o=Y,o!==null){if(U=e.getRenderTarget(),o.addEventListener("select",ce),o.addEventListener("selectstart",ce),o.addEventListener("selectend",ce),o.addEventListener("squeeze",ce),o.addEventListener("squeezestart",ce),o.addEventListener("squeezeend",ce),o.addEventListener("end",$),o.addEventListener("inputsourceschange",re),D.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(M),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,ge=null,be=null;D.depth&&(be=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=D.stencil?ts:ns,ge=D.stencil?xa:ar);const Ie={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:l};v=this.getBinding(),d=v.createProjectionLayer(Ie),o.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),N=new sr(d.textureWidth,d.textureHeight,{format:rr,type:yi,depthTexture:new va(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const me={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,me),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new sr(S.framebufferWidth,S.framebufferHeight,{format:rr,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(g),m=null,u=await o.requestReferenceSpace(f),pe.setContext(o),pe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function re(Y){for(let oe=0;oe<Y.removed.length;oe++){const me=Y.removed[oe],ge=L.indexOf(me);ge>=0&&(L[ge]=null,F[ge].disconnect(me))}for(let oe=0;oe<Y.added.length;oe++){const me=Y.added[oe];let ge=L.indexOf(me);if(ge===-1){for(let Ie=0;Ie<F.length;Ie++)if(Ie>=L.length){L.push(me),ge=Ie;break}else if(L[Ie]===null){L[Ie]=me,ge=Ie;break}if(ge===-1)break}const be=F[ge];be&&be.connect(me)}}function O(Y,oe){oe===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(oe.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(o===null)return;let oe=Y.near,me=Y.far;y.texture!==null&&(y.depthNear>0&&(oe=y.depthNear),y.depthFar>0&&(me=y.depthFar)),X.near=W.near=j.near=oe,X.far=W.far=j.far=me,(z!==X.near||te!==X.far)&&(o.updateRenderState({depthNear:X.near,depthFar:X.far}),z=X.near,te=X.far),X.layers.mask=Y.layers.mask|6,j.layers.mask=X.layers.mask&-5,W.layers.mask=X.layers.mask&-3;const ge=Y.parent,be=X.cameras;O(X,ge);for(let Ie=0;Ie<be.length;Ie++)O(be[Ie],ge);X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse),J===null&&Y.isPerspectiveCamera&&(J={camera:Y,fov:Y.fov,zoom:Y.zoom}),ee(Y,X,ge)};function ee(Y,oe,me){me===null?Y.matrix.copy(oe.matrixWorld):(Y.matrix.copy(me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(oe.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(oe.projectionMatrix),Y.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=hf*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(d===null&&S===null))return g},this.setFoveation=function(Y){g=Y,d!==null&&(d.fixedFoveation=Y),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Y)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(X)},this.getCameraTexture=function(Y){return b[Y]};let k=null;function q(Y,oe){if(_=oe.getViewerPose(m||u),w=oe,_!==null){const me=_.views;S!==null&&(e.setRenderTargetFramebuffer(N,S.framebuffer),e.setRenderTarget(N));let ge=!1;me.length!==X.cameras.length&&(X.cameras.length=0,ge=!0);for(let $e=0;$e<me.length;$e++){const Pe=me[$e];let Ve=null;if(S!==null)Ve=S.getViewport(Pe);else{const it=v.getViewSubImage(d,Pe);Ve=it.viewport,$e===0&&(e.setRenderTargetTextures(N,it.colorTexture,it.depthStencilTexture),e.setRenderTarget(N))}let Xe=B[$e];Xe===void 0&&(Xe=new Gi,Xe.layers.enable($e),Xe.viewport=new xn,B[$e]=Xe),Xe.matrix.fromArray(Pe.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Pe.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),$e===0&&(X.matrix.copy(Xe.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),ge===!0&&X.cameras.push(Xe)}const be=o.enabledFeatures;if(be&&be.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&E){v=r.getBinding();const $e=v.getDepthInformation(me[0]);$e&&$e.isValid&&$e.texture&&y.init($e,o.renderState)}if(be&&be.includes("camera-access")&&E){e.state.unbindTexture(),v=r.getBinding();for(let $e=0;$e<me.length;$e++){const Pe=me[$e].camera;if(Pe){let Ve=b[Pe];Ve||(Ve=new B0,b[Pe]=Ve);const Xe=v.getCameraImage(Pe);Ve.sourceTexture=Xe}}}}for(let me=0;me<F.length;me++){const ge=L[me],be=F[me];ge!==null&&be!==void 0&&be.update(ge,oe,m||u)}k&&k(Y,oe),oe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:oe}),w=null}const pe=new j0;pe.setAnimationLoop(q),this.setAnimationLoop=function(Y){k=Y},this.dispose=function(){}}}const iM=new vn,tg=new wt;tg.set(-1,0,0,0,1,0,0,0,1);function rM(s,e){function t(y,b){y.matrixAutoUpdate===!0&&y.updateMatrix(),b.value.copy(y.matrix)}function r(y,b){b.color.getRGB(y.fogColor.value,H0(s)),b.isFog?(y.fogNear.value=b.near,y.fogFar.value=b.far):b.isFogExp2&&(y.fogDensity.value=b.density)}function o(y,b,D,U,N){b.isNodeMaterial?b.uniformsNeedUpdate=!1:b.isMeshBasicMaterial?l(y,b):b.isMeshLambertMaterial?(l(y,b),b.envMap&&(y.envMapIntensity.value=b.envMapIntensity)):b.isMeshToonMaterial?(l(y,b),v(y,b)):b.isMeshPhongMaterial?(l(y,b),_(y,b),b.envMap&&(y.envMapIntensity.value=b.envMapIntensity)):b.isMeshStandardMaterial?(l(y,b),d(y,b),b.isMeshPhysicalMaterial&&S(y,b,N)):b.isMeshMatcapMaterial?(l(y,b),w(y,b)):b.isMeshDepthMaterial?l(y,b):b.isMeshDistanceMaterial?(l(y,b),E(y,b)):b.isMeshNormalMaterial?l(y,b):b.isLineBasicMaterial?(u(y,b),b.isLineDashedMaterial&&f(y,b)):b.isPointsMaterial?g(y,b,D,U):b.isSpriteMaterial?m(y,b):b.isShadowMaterial?(y.color.value.copy(b.color),y.opacity.value=b.opacity):b.isShaderMaterial&&(b.uniformsNeedUpdate=!1)}function l(y,b){y.opacity.value=b.opacity,b.color&&y.diffuse.value.copy(b.color),b.emissive&&y.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(y.map.value=b.map,t(b.map,y.mapTransform)),b.alphaMap&&(y.alphaMap.value=b.alphaMap,t(b.alphaMap,y.alphaMapTransform)),b.bumpMap&&(y.bumpMap.value=b.bumpMap,t(b.bumpMap,y.bumpMapTransform),y.bumpScale.value=b.bumpScale,b.side===Bn&&(y.bumpScale.value*=-1)),b.normalMap&&(y.normalMap.value=b.normalMap,t(b.normalMap,y.normalMapTransform),y.normalScale.value.copy(b.normalScale),b.side===Bn&&y.normalScale.value.negate()),b.displacementMap&&(y.displacementMap.value=b.displacementMap,t(b.displacementMap,y.displacementMapTransform),y.displacementScale.value=b.displacementScale,y.displacementBias.value=b.displacementBias),b.emissiveMap&&(y.emissiveMap.value=b.emissiveMap,t(b.emissiveMap,y.emissiveMapTransform)),b.specularMap&&(y.specularMap.value=b.specularMap,t(b.specularMap,y.specularMapTransform)),b.alphaTest>0&&(y.alphaTest.value=b.alphaTest);const D=e.get(b),U=D.envMap,N=D.envMapRotation;U&&(y.envMap.value=U,y.envMapRotation.value.setFromMatrix4(iM.makeRotationFromEuler(N)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(tg),y.reflectivity.value=b.reflectivity,y.ior.value=b.ior,y.refractionRatio.value=b.refractionRatio),b.lightMap&&(y.lightMap.value=b.lightMap,y.lightMapIntensity.value=b.lightMapIntensity,t(b.lightMap,y.lightMapTransform)),b.aoMap&&(y.aoMap.value=b.aoMap,y.aoMapIntensity.value=b.aoMapIntensity,t(b.aoMap,y.aoMapTransform))}function u(y,b){y.diffuse.value.copy(b.color),y.opacity.value=b.opacity,b.map&&(y.map.value=b.map,t(b.map,y.mapTransform))}function f(y,b){y.dashSize.value=b.dashSize,y.totalSize.value=b.dashSize+b.gapSize,y.scale.value=b.scale}function g(y,b,D,U){y.diffuse.value.copy(b.color),y.opacity.value=b.opacity,y.size.value=b.size*D,y.scale.value=U*.5,b.map&&(y.map.value=b.map,t(b.map,y.uvTransform)),b.alphaMap&&(y.alphaMap.value=b.alphaMap,t(b.alphaMap,y.alphaMapTransform)),b.alphaTest>0&&(y.alphaTest.value=b.alphaTest)}function m(y,b){y.diffuse.value.copy(b.color),y.opacity.value=b.opacity,y.rotation.value=b.rotation,b.map&&(y.map.value=b.map,t(b.map,y.mapTransform)),b.alphaMap&&(y.alphaMap.value=b.alphaMap,t(b.alphaMap,y.alphaMapTransform)),b.alphaTest>0&&(y.alphaTest.value=b.alphaTest)}function _(y,b){y.specular.value.copy(b.specular),y.shininess.value=Math.max(b.shininess,1e-4)}function v(y,b){b.gradientMap&&(y.gradientMap.value=b.gradientMap)}function d(y,b){y.metalness.value=b.metalness,b.metalnessMap&&(y.metalnessMap.value=b.metalnessMap,t(b.metalnessMap,y.metalnessMapTransform)),y.roughness.value=b.roughness,b.roughnessMap&&(y.roughnessMap.value=b.roughnessMap,t(b.roughnessMap,y.roughnessMapTransform)),b.envMap&&(y.envMapIntensity.value=b.envMapIntensity)}function S(y,b,D){y.ior.value=b.ior,b.diffuseRoughness>0&&(y.diffuseRoughness.value=b.diffuseRoughness,b.diffuseRoughnessMap&&(y.diffuseRoughnessMap.value=b.diffuseRoughnessMap,t(b.diffuseRoughnessMap,y.diffuseRoughnessMapTransform))),b.sheen>0&&(y.sheenColor.value.copy(b.sheenColor).multiplyScalar(b.sheen),y.sheenRoughness.value=b.sheenRoughness,b.sheenColorMap&&(y.sheenColorMap.value=b.sheenColorMap,t(b.sheenColorMap,y.sheenColorMapTransform)),b.sheenRoughnessMap&&(y.sheenRoughnessMap.value=b.sheenRoughnessMap,t(b.sheenRoughnessMap,y.sheenRoughnessMapTransform))),b.clearcoat>0&&(y.clearcoat.value=b.clearcoat,y.clearcoatRoughness.value=b.clearcoatRoughness,b.clearcoatMap&&(y.clearcoatMap.value=b.clearcoatMap,t(b.clearcoatMap,y.clearcoatMapTransform)),b.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=b.clearcoatRoughnessMap,t(b.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),b.clearcoatNormalMap&&(y.clearcoatNormalMap.value=b.clearcoatNormalMap,t(b.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(b.clearcoatNormalScale),b.side===Bn&&y.clearcoatNormalScale.value.negate())),b.dispersion>0&&(y.dispersion.value=b.dispersion),b.retroreflectivity>0&&(y.retroreflectivity.value=b.retroreflectivity),b.iridescence>0&&(y.iridescence.value=b.iridescence,y.iridescenceIOR.value=b.iridescenceIOR,y.iridescenceThicknessMinimum.value=b.iridescenceThicknessMinimum,y.iridescenceThicknessMaximum.value=b.iridescenceThicknessMaximum,b.iridescenceMap&&(y.iridescenceMap.value=b.iridescenceMap,t(b.iridescenceMap,y.iridescenceMapTransform)),b.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=b.iridescenceThicknessMap,t(b.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),b.transmission>0&&(y.transmission.value=b.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),b.transmissionMap&&(y.transmissionMap.value=b.transmissionMap,t(b.transmissionMap,y.transmissionMapTransform)),y.thickness.value=b.thickness,b.thicknessMap&&(y.thicknessMap.value=b.thicknessMap,t(b.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=b.attenuationDistance,y.attenuationColor.value.copy(b.attenuationColor)),b.anisotropy>0&&(y.anisotropyVector.value.set(b.anisotropy*Math.cos(b.anisotropyRotation),b.anisotropy*Math.sin(b.anisotropyRotation)),b.anisotropyMap&&(y.anisotropyMap.value=b.anisotropyMap,t(b.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=b.specularIntensity,y.specularColor.value.copy(b.specularColor),b.specularColorMap&&(y.specularColorMap.value=b.specularColorMap,t(b.specularColorMap,y.specularColorMapTransform)),b.specularIntensityMap&&(y.specularIntensityMap.value=b.specularIntensityMap,t(b.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,b){b.matcap&&(y.matcap.value=b.matcap)}function E(y,b){const D=e.get(b).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function sM(s,e,t,r){let o={},l={};function u(D,U){const N=U.program;r.uniformBlockBinding(D,N,o[D.id])}function f(D,U){let N=o[D.id];N===void 0&&(w(D),N=g(D),o[D.id]=N,D.addEventListener("dispose",y));const F=U.program;r.updateUBOMapping(D,F);const L=e.render.frame;l[D.id]!==L&&(m(D),l[D.id]=L)}function g(D){const U=s.createBuffer(),N=D.__size,F=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,N,F),s.bindBuffer(s.UNIFORM_BUFFER,null),U}function m(D){const U=o[D.id],N=D.uniforms,F=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let L=0,M=N.length;L<M;L++){const P=N[L];if(Array.isArray(P))for(let J=0,j=P.length;J<j;J++)_(P[J],L,J,F);else _(P,L,0,F)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(D,U,N,F){if(d(D,U,N,F)===!0){const L=D.__offset,M=D.value;if(Array.isArray(M)){let P=0;for(let J=0;J<M.length;J++){const j=M[J],W=E(j,!0);v(j,D.__data,P),P+=W.storage/Float32Array.BYTES_PER_ELEMENT}}else v(M,D.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,L,D.__data)}}function v(D,U,N){typeof D=="number"||typeof D=="boolean"?U[N]=D:D.isMatrix3?(U[N]=D.elements[0],U[N+1]=D.elements[1],U[N+2]=D.elements[2],U[N+3]=0,U[N+4]=D.elements[3],U[N+5]=D.elements[4],U[N+6]=D.elements[5],U[N+7]=0,U[N+8]=D.elements[6],U[N+9]=D.elements[7],U[N+10]=D.elements[8],U[N+11]=0):ArrayBuffer.isView(D)?U.set(D.subarray(0,U.length-N),N):D.toArray(U,N)}function d(D,U,N,F){const L=D.value,M=U+"_"+N;if(Array.isArray(L)){F[M]===void 0&&(F[M]=[]);const P=F[M];let J=!1;for(let j=0;j<L.length;j++)S(L[j],P,j)===!0&&(J=!0);return J}return S(L,F,M)}function S(D,U,N){if(U[N]===void 0)return typeof D=="number"||typeof D=="boolean"?U[N]=D:ArrayBuffer.isView(D)?U[N]=D.slice():U[N]=D.clone(),!0;{const F=U[N];if(typeof D=="number"||typeof D=="boolean"){if(F!==D)return U[N]=D,!0}else{if(ArrayBuffer.isView(D))return!0;if(F.equals(D)===!1)return F.copy(D),!0}}return!1}function w(D){const U=D.uniforms;let N=0;const F=16;for(let M=0,P=U.length;M<P;M++){const J=Array.isArray(U[M])?U[M]:[U[M]];for(let j=0,W=J.length;j<W;j++){const B=J[j],X=Array.isArray(B.value)?B.value:[B.value],z=Array.isArray(U[M])||Array.isArray(B.value);let te=N;for(let $=0,re=X.length;$<re;$++){const O=X[$],ee=E(O,z),k=N%F,q=k%ee.boundary,pe=k+q;N+=q,pe!==0&&F-pe<ee.storage&&(N+=F-pe),$===0&&(te=N),N+=ee.storage}const ce=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new ce((N-te)/Float32Array.BYTES_PER_ELEMENT),B.__offset=te}}const L=N%F;return L>0&&(N+=F-L),D.__size=N,D.__cache={},this}function E(D,U){const N={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(N.boundary=4,N.storage=4):D.isVector2?(N.boundary=8,N.storage=8):D.isVector3||D.isColor?(N.boundary=16,N.storage=12):D.isVector4?(N.boundary=16,N.storage=16):D.isMatrix3?(N.boundary=16,N.storage=48):D.isMatrix4?(N.boundary=16,N.storage=64):D.isTexture?St("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(N.boundary=16,N.storage=D.byteLength):St("WebGLRenderer: Unsupported uniform value type.",D),U===!0&&(N.boundary=16,N.storage=Math.ceil(N.storage/16)*16),N}function y(D){const U=D.target;U.removeEventListener("dispose",y),s.deleteBuffer(o[U.id]),delete o[U.id],delete l[U.id]}function b(){for(const D in o)s.deleteBuffer(o[D]);o={},l={}}return{bind:u,update:f,dispose:b}}const aM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let er=null;function oM(){return er===null&&(er=new ty(aM,16,16,Cs,or),er.name="DFG_LUT",er.minFilter=ci,er.magFilter=ci,er.wrapS=li,er.wrapT=li,er.generateMipmaps=!1,er.needsUpdate=!0),er}class lM{constructor(e={}){const{canvas:t=T_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:d=!1,outputBufferType:S=yi}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=u;const E=S,y=new Set([Tf,Ef,Mf]),b=new Set([yi,ar,fo,xa,bf,wf]),D=new Uint32Array(4),U=new Int32Array(4),N={textures:[],min:[],max:[],resolution:[]};let F=null,L=null;const M=[],P=[];let J=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ar,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const j=this;let W=!1,B=null,X=null,z=null,te=null;this._outputColorSpace=_i;let ce=0,$=0,re=null,O=-1,ee=null;const k=new xn,q=new xn;let pe=null;const Y=new Dt(0);let oe=0,me=t.width,ge=t.height,be=1,Ie=null,rt=null;const $e=new xn(0,0,me,ge),Pe=new xn(0,0,me,ge);let Ve=!1;const Xe=new po,it=new Nf;let vt=!1,ft=!1;const ot=new vn,Tt=new xe,de=new xn,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function on(){return re===null?be:1}let Q=r;function pn(C,K){return t.getContext(C,K)}let Mt,Lt,ke,At,Ye,ct,R,T,ae,Ne,Me,Le,Be,ve,we,Oe,V,Te,_e,Ae,he,Ee,Ge;try{const C={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:g,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yf}`),t.addEventListener("webglcontextlost",Ze,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",We,!1),Q===null){const K="webgl2";if(Q=pn(K,C),Q===null)throw pn(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qe()}catch(C){throw t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",We,!1),Xt("WebGLRenderer: "+C.message),C}function Qe(){Mt=new db(Q),Mt.init(),he=new Jw(Q,Mt),Lt=new eb(Q,Mt,e,he),ke=new Kw(Q,Mt),Lt.reversedDepthBuffer&&d&&ke.buffers.depth.setReversed(!0),X=Q.createFramebuffer(),z=Q.createFramebuffer(),te=Q.createFramebuffer(),At=new pb(Q),Ye=new Uw,ct=new Zw(Q,Mt,ke,Ye,Lt,he,At),R=new ub(j),T=new gy(Q),Ee=new JS(Q,T),ae=new fb(Q,T,At,Ee),Ne=new gb(Q,ae,T,Ee,At),Te=new mb(Q,Lt,ct),we=new tb(Ye),Me=new kw(j,R,Mt,Lt,Ee,we),Le=new rM(j,Ye),Be=new zw,ve=new Ww(Mt),V=new ZS(j,R,ke,Ne,w,g),Oe=new qw(j,Ne,Lt),Ge=new sM(Q,At,Lt,ke),_e=new QS(Q,Mt,At),Ae=new hb(Q,Mt,At),At.programs=Me.programs,j.capabilities=Lt,j.extensions=Mt,j.properties=Ye,j.renderLists=Be,j.shadowMap=Oe,j.state=ke,j.info=At}E!==yi&&(J=new vb(E,t.width,t.height,f,o,l));const Ce=new nM(j,Q);this.xr=Ce,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const C=Mt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Mt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(C){C!==void 0&&(be=C,this.setSize(me,ge,!1))},this.getSize=function(C){return C.set(me,ge)},this.setSize=function(C,K,ue=!0){if(Ce.isPresenting){St("WebGLRenderer: Can't change size while VR device is presenting.");return}me=C,ge=K,t.width=Math.floor(C*be),t.height=Math.floor(K*be),ue===!0&&(t.style.width=C+"px",t.style.height=K+"px"),J!==null&&J.setSize(t.width,t.height),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(me*be,ge*be).floor()},this.setDrawingBufferSize=function(C,K,ue){me=C,ge=K,be=ue,t.width=Math.floor(C*ue),t.height=Math.floor(K*ue),this.setViewport(0,0,C,K)},this.setEffects=function(C){if(E===yi){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let K=0;K<C.length;K++)if(C[K].isOutputPass===!0){St("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}J.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(k)},this.getViewport=function(C){return C.copy($e)},this.setViewport=function(C,K,ue,I){C.isVector4?$e.set(C.x,C.y,C.z,C.w):$e.set(C,K,ue,I),ke.viewport(k.copy($e).multiplyScalar(on()).round())},this.getScissor=function(C){return C.copy(Pe)},this.setScissor=function(C,K,ue,I){C.isVector4?Pe.set(C.x,C.y,C.z,C.w):Pe.set(C,K,ue,I),ke.scissor(q.copy(Pe).multiplyScalar(on()).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(C){ke.setScissorTest(Ve=C)},this.setOpaqueSort=function(C){Ie=C},this.setTransparentSort=function(C){rt=C},this.getClearColor=function(C){return C.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor(...arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha(...arguments)},this.clear=function(C=!0,K=!0,ue=!0){let I=0;if(C){let H=!1;if(re!==null){const se=re.texture.format;H=y.has(se)}if(H){const se=re.texture.type,De=b.has(se),Re=V.getClearColor(),Fe=V.getClearAlpha(),Ke=Re.r,tt=Re.g,xt=Re.b;De?(D[0]=Ke,D[1]=tt,D[2]=xt,D[3]=Fe,Q.clearBufferuiv(Q.COLOR,0,D)):(U[0]=Ke,U[1]=tt,U[2]=xt,U[3]=Fe,Q.clearBufferiv(Q.COLOR,0,U))}else I|=Q.COLOR_BUFFER_BIT}K&&(I|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(I|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I!==0&&Q.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),B=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",We,!1),V.dispose(),Be.dispose(),ve.dispose(),ct.dispose(),Ye.dispose(),R.dispose(),Ne.dispose(),ae.dispose(),Ee.dispose(),Ge.dispose(),Me.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Hn),Ce.removeEventListener("sessionend",bn),sn.stop()};function Ze(C){C.preventDefault(),mm("WebGLRenderer: Context Lost."),W=!0}function st(){mm("WebGLRenderer: Context Restored."),W=!1;const C=At.autoReset,K=Oe.enabled,ue=Oe.autoUpdate,I=Oe.needsUpdate,H=Oe.type;Qe(),At.autoReset=C,Oe.enabled=K,Oe.autoUpdate=ue,Oe.needsUpdate=I,Oe.type=H}function We(C){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ht(C){const K=C.target;K.removeEventListener("dispose",ht),Bt(K)}function Bt(C){tn(C),Ye.remove(C)}function tn(C){const K=Ye.get(C).programs;K!==void 0&&(K.forEach(function(ue){Me.releaseProgram(ue)}),C.isShaderMaterial&&Me.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,ue,I,H,se){K===null&&(K=bt);const De=H.isMesh&&H.matrixWorld.determinantAffine()<0,Re=ui(C,K,ue,I,H);ke.setMaterial(I,De);let Fe=ue.index,Ke=1;if(I.wireframe===!0){if(Fe=ae.getWireframeAttribute(ue),Fe===void 0)return;Ke=2}const tt=ue.drawRange,xt=ue.attributes.position;let qe=tt.start*Ke,_t=(tt.start+tt.count)*Ke;se!==null&&(qe=Math.max(qe,se.start*Ke),_t=Math.min(_t,(se.start+se.count)*Ke)),Fe!==null?(qe=Math.max(qe,0),_t=Math.min(_t,Fe.count)):xt!=null&&(qe=Math.max(qe,0),_t=Math.min(_t,xt.count));const en=_t-qe;if(en<0||en===1/0)return;Ee.setup(H,I,Re,ue,Fe);let qt,zt=_e;if(Fe!==null&&(qt=T.get(Fe),zt=Ae,zt.setIndex(qt)),H.isMesh)I.wireframe===!0?(ke.setLineWidth(I.wireframeLinewidth*on()),zt.setMode(Q.LINES)):zt.setMode(Q.TRIANGLES);else if(H.isLine){let dn=I.linewidth;dn===void 0&&(dn=1),ke.setLineWidth(dn*on()),H.isLineSegments?zt.setMode(Q.LINES):H.isLineLoop?zt.setMode(Q.LINE_LOOP):zt.setMode(Q.LINE_STRIP)}else H.isPoints?zt.setMode(Q.POINTS):H.isSprite&&zt.setMode(Q.TRIANGLES);if(H.isBatchedMesh)if(Mt.get("WEBGL_multi_draw"))zt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const dn=H._multiDrawStarts,nt=H._multiDrawCounts,_n=H._multiDrawCount,ie=Fe?T.get(Fe).bytesPerElement:1,$t=Ye.get(I).currentProgram.getUniforms();for(let Ht=0;Ht<_n;Ht++)$t.setValue(Q,"_gl_DrawID",Ht),zt.render(dn[Ht]/ie,nt[Ht])}else if(H.isInstancedMesh)zt.renderInstances(qe,en,H.count);else if(ue.isInstancedBufferGeometry){const dn=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,nt=Math.min(ue.instanceCount,dn);zt.renderInstances(qe,en,nt)}else zt.render(qe,en)};function rn(C,K,ue,I){B!==null&&C.isNodeMaterial&&B.setObject(I,C),vt===!0&&we.setState(C,ue,!1),C.transparent===!0&&C.side===Wi&&C.forceSinglePass===!1?(C.side=Bn,C.needsUpdate=!0,Vn(C,K,I),C.side=As,C.needsUpdate=!0,Vn(C,K,I),C.side=Wi):Vn(C,K,I)}this.compile=function(C,K,ue=null){ue===null&&(ue=C),B!==null&&B.renderStart(C,K,ue),L=ve.get(ue),L.init(K),P.push(L),ue.traverseVisible(function(H){H.isLight&&H.layers.test(K.layers)&&(L.pushLight(H),H.castShadow&&L.pushShadow(H))}),C!==ue&&C.traverseVisible(function(H){H.isLight&&H.layers.test(K.layers)&&(L.pushLight(H),H.castShadow&&L.pushShadow(H))}),L.setupLights(),B!==null&&B.updateLights(L.state.lightsArray),ft=this.localClippingEnabled,vt=we.init(this.clippingPlanes,ft),vt===!0&&we.setGlobalState(this.clippingPlanes,K),B!==null&&Oe.render(L.state.shadowsArray,ue,K);const I=new Set;return C.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const se=H.material;if(se)if(Array.isArray(se))for(let De=0;De<se.length;De++){const Re=se[De];rn(Re,ue,K,H),I.add(Re)}else rn(se,ue,K,H),I.add(se)}),L=P.pop(),B!==null&&B.renderEnd(),I},this.compileAsync=function(C,K,ue=null){const I=this.compile(C,K,ue);return new Promise(H=>{function se(){if(I.forEach(function(De){const Fe=Ye.get(De).currentProgram;(Fe===void 0||Fe.isReady())&&I.delete(De)}),I.size===0){H(C);return}setTimeout(se,10)}Mt.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let ln=null;function Yt(C){ln&&ln(C)}function Hn(){sn.stop()}function bn(){sn.start()}const sn=new j0;sn.setAnimationLoop(Yt),typeof self<"u"&&sn.setContext(self),this.setAnimationLoop=function(C){ln=C,Ce.setAnimationLoop(C),C===null?sn.stop():sn.start()},Ce.addEventListener("sessionstart",Hn),Ce.addEventListener("sessionend",bn),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;B!==null&&B.renderStart(C,K);const ue=Ce.enabled===!0&&Ce.isPresenting===!0,I=J!==null&&(re===null||ue)&&J.begin(j,re);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(J===null||J.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(K),K=Ce.getCamera()),C.isScene===!0&&C.onBeforeRender(j,C,K,re),L=ve.get(C,P.length),L.init(K),L.state.textureUnits=ct.getTextureUnits(),P.push(L),ot.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),K.isArrayCamera?it.setFromArrayCamera(K):Xe.setFromProjectionMatrix(ot,$i,K.reversedDepth),ft=this.localClippingEnabled,vt=we.init(this.clippingPlanes,ft),F=Be.get(C,M.length),F.init(),M.push(F),this.info.render.frame++,Ce.enabled===!0&&Ce.isPresenting===!0){const De=j.xr.getDepthSensingMesh();De!==null&&gt(De,K,-1/0,j.sortObjects)}gt(C,K,0,j.sortObjects),F.finish(),B!==null&&B.updateLights(L.state.lightsArray),j.sortObjects===!0&&F.sort(Ie,rt),Vt=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,Vt&&V.addToRenderList(F,C),this.info.autoReset===!0&&this.info.reset(),vt===!0&&we.beginShadows();const H=L.state.shadowsArray;if(Oe.render(H,C,K),vt===!0&&we.endShadows(),(I&&J.hasRenderPass())===!1){const De=F.opaque,Re=F.transmissive;if(L.setupLights(),K.isArrayCamera){const Fe=K.cameras;if(Re.length>0)for(let Ke=0,tt=Fe.length;Ke<tt;Ke++){const xt=Fe[Ke];Et(De,Re,C,xt)}Vt&&V.render(C);for(let Ke=0,tt=Fe.length;Ke<tt;Ke++){const xt=Fe[Ke];It(F,C,xt,xt.viewport)}}else Re.length>0&&Et(De,Re,C,K),Vt&&V.render(C),It(F,C,K)}re!==null&&$===0&&(ct.updateMultisampleRenderTarget(re),ct.updateRenderTargetMipmap(re)),I&&J.end(j),C.isScene===!0&&C.onAfterRender(j,C,K),Ee.resetDefaultState(),O=-1,ee=null,P.pop(),P.length>0?(L=P[P.length-1],ct.setTextureUnits(L.state.textureUnits),vt===!0&&we.setGlobalState(j.clippingPlanes,L.state.camera)):L=null,M.pop(),M.length>0?F=M[M.length-1]:F=null,B!==null&&B.renderEnd()};function gt(C,K,ue,I){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)ue=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)L.pushLight(C),C.castShadow&&L.pushShadow(C);else if(C.isSprite){const De=K.isArrayCamera?it:Xe;if(!C.frustumCulled||C.intersectsFrustum(De)){I&&de.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ot);const Re=Ne.update(C),Fe=C.material;Fe.visible&&F.push(C,Re,Fe,ue,de.z,null,K)}}else if(C.isMesh||C.isLine||C.isPoints){const De=K.isArrayCamera?it:Xe;if(!C.frustumCulled||C.intersectsFrustum(De)){const Re=Ne.update(C),Fe=C.material;if(I&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),de.copy(C.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),de.copy(Re.boundingSphere.center)),de.applyMatrix4(C.matrixWorld).applyMatrix4(ot)),Array.isArray(Fe)){const Ke=Re.groups;for(let tt=0,xt=Ke.length;tt<xt;tt++){const qe=Ke[tt],_t=Fe[qe.materialIndex];_t&&_t.visible&&F.push(C,Re,_t,ue,de.z,qe,K)}}else Fe.visible&&F.push(C,Re,Fe,ue,de.z,null,K)}}}const se=C.children;for(let De=0,Re=se.length;De<Re;De++)gt(se[De],K,ue,I)}function It(C,K,ue,I){const{opaque:H,transmissive:se,transparent:De}=C;L.setupLightsView(ue),vt===!0&&we.setGlobalState(j.clippingPlanes,ue),I&&ke.viewport(k.copy(I)),H.length>0&&Jt(H,K,ue),se.length>0&&Jt(se,K,ue),De.length>0&&Jt(De,K,ue),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function Et(C,K,ue,I){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[I.id]===void 0){const qe=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[I.id]=new sr(1,1,{generateMipmaps:!0,type:qe?or:yi,minFilter:es,samples:Math.max(4,Lt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ut.workingColorSpace})}const se=L.state.transmissionRenderTarget[I.id],De=I.viewport||k;se.setSize(De.z*j.transmissionResolutionScale,De.w*j.transmissionResolutionScale);const Re=j.getRenderTarget(),Fe=j.getActiveCubeFace(),Ke=j.getActiveMipmapLevel();j.setRenderTarget(se),j.getClearColor(Y),oe=j.getClearAlpha(),oe<1&&j.setClearColor(16777215,.5),j.clear(),Vt&&V.render(ue);const tt=j.toneMapping;j.toneMapping=Ar;const xt=I.viewport;if(I.viewport!==void 0&&(I.viewport=void 0),L.setupLightsView(I),vt===!0&&we.setGlobalState(j.clippingPlanes,I),Jt(C,ue,I),ct.updateMultisampleRenderTarget(se),ct.updateRenderTargetMipmap(se),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let _t=0,en=K.length;_t<en;_t++){const qt=K[_t],{object:zt,geometry:dn,material:nt,group:_n}=qt;if(nt.side===Wi&&zt.layers.test(I.layers)){const ie=nt.side;nt.side=Bn,nt.needsUpdate=!0,nn(zt,ue,I,dn,nt,_n),nt.side=ie,nt.needsUpdate=!0,qe=!0}}qe===!0&&(ct.updateMultisampleRenderTarget(se),ct.updateRenderTargetMipmap(se))}j.setRenderTarget(Re,Fe,Ke),j.setClearColor(Y,oe),xt!==void 0&&(I.viewport=xt),j.toneMapping=tt}function Jt(C,K,ue){const I=K.isScene===!0?K.overrideMaterial:null;for(let H=0,se=C.length;H<se;H++){const De=C[H],{object:Re,geometry:Fe,group:Ke}=De;let tt=De.material;tt.allowOverride===!0&&I!==null&&(tt=I),Re.layers.test(ue.layers)&&nn(Re,K,ue,Fe,tt,Ke)}}function nn(C,K,ue,I,H,se){B!==null&&H.isNodeMaterial&&B.setObject(C,H),C.onBeforeRender(j,K,ue,I,H,se),C.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),H.onBeforeRender(j,K,ue,I,C,se),H.transparent===!0&&H.side===Wi&&H.forceSinglePass===!1?(H.side=Bn,H.needsUpdate=!0,j.renderBufferDirect(ue,K,I,H,C,se),H.side=As,H.needsUpdate=!0,j.renderBufferDirect(ue,K,I,H,C,se),H.side=Wi):j.renderBufferDirect(ue,K,I,H,C,se),C.onAfterRender(j,K,ue,I,H,se)}function Gn(C){let K=0;for(const ue of C)ue.texture!==null&&K++;return K}function Vn(C,K,ue){K.isScene!==!0&&(K=bt);const I=Ye.get(C),H=L.state.lights,se=L.state.shadowsArray,De=H.state.version,Re=Me.getParameters(C,H.state,se,K,ue,L.state.lightProbeGridArray),Fe=Me.getProgramCacheKey(Re);let Ke=I.programs;I.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?K.environment:null,I.fog=K.fog;const tt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;I.envMap=R.get(C.envMap||I.environment,tt),I.envMapRotation=I.environment!==null&&C.envMap===null?K.environmentRotation:C.envMapRotation,Ke===void 0&&(C.addEventListener("dispose",ht),Ke=new Map,I.programs=Ke,I.programVariants=new Map);let xt=Ke.get(Fe);if(xt!==void 0){if(I.currentProgram===xt&&I.lightsStateVersion===De)return Rr(C,Re),xt}else Re.uniforms=Me.getUniforms(C),B!==null&&C.isNodeMaterial&&B.build(C,ue,Re),C.onBeforeCompile(Re,j),xt=Me.acquireProgram(Re,Fe),Ke.set(Fe,xt),I.uniforms=Re.uniforms;const qe=I.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(qe.clippingPlanes=we.uniform),Rr(C,Re),I.needsLights=bi(C),I.lightsStateVersion=De,I.needsLights&&(qe.ambientLightColor.value=H.state.ambient,qe.lightProbe.value=H.state.probe,qe.sunLights.value=H.state.sun,qe.sunLightShadows.value=H.state.sunShadow,qe.directionalLights.value=H.state.directional,qe.directionalLightShadows.value=H.state.directionalShadow,qe.spotLights.value=H.state.spot,qe.spotLightShadows.value=H.state.spotShadow,qe.rectAreaLights.value=H.state.rectArea,qe.ltc_1.value=H.state.rectAreaLTC1,qe.ltc_2.value=H.state.rectAreaLTC2,qe.pointLights.value=H.state.point,qe.pointLightShadows.value=H.state.pointShadow,qe.hemisphereLights.value=H.state.hemi,qe.sunShadowMatrix.value=H.state.sunShadowMatrix,qe.sunShadowCascade.value=H.state.sunShadowCascade,qe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,qe.spotLightMatrix.value=H.state.spotLightMatrix,qe.spotLightMap.value=H.state.spotLightMap,qe.pointShadowMatrix.value=H.state.pointShadowMatrix),I.numLightProbeGrids=Gn(L.state.lightProbeGridArray),I.currentProgram=xt,I.uniformsList=null,xt}function Qt(C,K,ue,I,H){const se=Ye.get(C),De=se.currentProgram.id+","+I+","+H;let Re=se.programVariants.get(De);return Re===void 0?(Re=Vn(C,K,ue),se.programVariants.set(De,Re)):(se.currentProgram=Re,se.uniformsList=null,se.outputColorSpace=I,se.toneMapping=H),Re}function jt(C){if(C.uniformsList===null){const K=C.currentProgram.getUniforms();C.uniformsList=Ql.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function Rr(C,K){const ue=Ye.get(C);ue.outputColorSpace=K.outputColorSpace,ue.batching=K.batching,ue.batchingColor=K.batchingColor,ue.instancing=K.instancing,ue.instancingColor=K.instancingColor,ue.instancingMorph=K.instancingMorph,ue.skinning=K.skinning,ue.morphTargets=K.morphTargets,ue.morphNormals=K.morphNormals,ue.morphColors=K.morphColors,ue.morphTargetsCount=K.morphTargetsCount,ue.numClippingPlanes=K.numClippingPlanes,ue.numIntersection=K.numClipIntersection,ue.vertexAlphas=K.vertexAlphas,ue.vertexTangents=K.vertexTangents,ue.toneMapping=K.toneMapping}function ui(C,K,ue,I,H){K.isScene!==!0&&(K=bt),ct.resetTextureUnits();const se=K.fog,De=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?K.environment:null,Re=re===null?j.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ut.workingColorSpace,Fe=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap,Ke=R.get(I.envMap||De,Fe),tt=I.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,xt=!!ue.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),qe=!!ue.morphAttributes.position,_t=!!ue.morphAttributes.normal,en=!!ue.morphAttributes.color;let qt=Ar;I.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(qt=j.toneMapping);const zt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,dn=zt!==void 0?zt.length:0,nt=Ye.get(I),_n=L.state.lights;if(vt===!0&&(ft===!0||C!==ee)){const Ot=C===ee&&I.id===O;we.setState(I,C,Ot)}let ie=!1,$t=!1;I.version===nt.__version?nt.needsLights&&nt.lightsStateVersion!==_n.state.version||H.isBatchedMesh&&nt.batching===!1||!H.isBatchedMesh&&nt.batching===!0||H.isBatchedMesh&&nt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&nt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&nt.instancing===!1||!H.isInstancedMesh&&nt.instancing===!0||H.isSkinnedMesh&&nt.skinning===!1||!H.isSkinnedMesh&&nt.skinning===!0||H.isInstancedMesh&&nt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&nt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&nt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&nt.instancingMorph===!1&&H.morphTexture!==null||nt.envMap!==Ke||I.fog===!0&&nt.fog!==se||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==we.numPlanes||nt.numIntersection!==we.numIntersection)||nt.vertexAlphas!==tt||nt.vertexTangents!==xt||nt.morphTargets!==qe||nt.morphNormals!==_t||nt.morphColors!==en||nt.morphTargetsCount!==dn||nt.numLightProbeGrids!==Gn(L.state.lightProbeGridArray)?ie=!0:(nt.outputColorSpace!==Re||nt.toneMapping!==qt)&&($t=!0):(ie=!0,nt.__version=I.version);let Ht=nt.currentProgram;(ie===!0||$t===!0)&&(Ht=$t===!0?Qt(I,K,H,Re,qt):Vn(I,K,H),B&&I.isNodeMaterial&&B.onUpdateProgram(I,Ht,nt));let di=!1,ti=!1,fi=!1;const Nt=Ht.getUniforms(),fn=nt.uniforms;if(ke.useProgram(Ht.program)&&(di=!0,ti=!0,fi=!0),I.id!==O&&(O=I.id,ti=!0),di||ee!==C){ke.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Nt.setValue(Q,"projectionMatrix",C.projectionMatrix),Nt.setValue(Q,"viewMatrix",C.matrixWorldInverse);const Kt=Nt.map.cameraPosition;Kt!==void 0&&Kt.setValue(Q,Tt.setFromMatrixPosition(C.matrixWorld)),Lt.logarithmicDepthBuffer&&Nt.setValue(Q,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Nt.setValue(Q,"isOrthographic",C.isOrthographicCamera===!0),ee!==C&&(ee=C,ti=!0,fi=!0)}if(nt.needsLights&&(_n.state.sunShadowMap.length>0&&Nt.setValue(Q,"sunShadowMap",_n.state.sunShadowMap,ct),_n.state.directionalShadowMap.length>0&&Nt.setValue(Q,"directionalShadowMap",_n.state.directionalShadowMap,ct),_n.state.spotShadowMap.length>0&&Nt.setValue(Q,"spotShadowMap",_n.state.spotShadowMap,ct),_n.state.pointShadowMap.length>0&&Nt.setValue(Q,"pointShadowMap",_n.state.pointShadowMap,ct)),H.isSkinnedMesh){Nt.setOptional(Q,H,"bindMatrix"),Nt.setOptional(Q,H,"bindMatrixInverse");const Ot=H.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),Nt.setValue(Q,"boneTexture",Ot.boneTexture,ct))}H.isBatchedMesh&&(Nt.setOptional(Q,H,"batchingTexture"),Nt.setValue(Q,"batchingTexture",H._matricesTexture,ct),Nt.setOptional(Q,H,"batchingIdTexture"),Nt.setValue(Q,"batchingIdTexture",H._indirectTexture,ct),Nt.setOptional(Q,H,"batchingColorTexture"),H._colorsTexture!==null&&Nt.setValue(Q,"batchingColorTexture",H._colorsTexture,ct));const Pn=ue.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&Te.update(H,ue,Ht),(ti||nt.receiveShadow!==H.receiveShadow)&&(nt.receiveShadow=H.receiveShadow,Nt.setValue(Q,"receiveShadow",H.receiveShadow)),(I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial)&&I.envMap===null&&K.environment!==null&&(fn.envMapIntensity.value=K.environmentIntensity),fn.dfgLUT!==void 0&&(fn.dfgLUT.value=oM()),ti){if(Nt.setValue(Q,"toneMappingExposure",j.toneMappingExposure),nt.needsLights&&Si(fn,fi),se&&I.fog===!0&&Le.refreshFogUniforms(fn,se),Le.refreshMaterialUniforms(fn,I,be,ge,L.state.transmissionRenderTarget[C.id]),nt.needsLights&&nt.numLightProbeGrids>0){const Ot=N;let Kt=0;for(const wn of L.state.lightProbeGridArray)wn.texture!==null&&(Ot.textures[Kt]=wn.texture,Ot.min[Kt]=wn.boundingBox.min,Ot.max[Kt]=wn.boundingBox.max,Ot.resolution[Kt]=wn.resolution,Kt++);for(const wn in Ot)Ot[wn].length=Kt;fn.probesSH.value=Ot.textures,fn.probesMin.value=Ot.min,fn.probesMax.value=Ot.max,fn.probesResolution.value=Ot.resolution}Ql.upload(Q,jt(nt),fn,ct)}if(I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Ql.upload(Q,jt(nt),fn,ct),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Nt.setValue(Q,"center",H.center),Nt.setValue(Q,"modelViewMatrix",H.modelViewMatrix),Nt.setValue(Q,"normalMatrix",H.normalMatrix),Nt.setValue(Q,"modelMatrix",H.matrixWorld),I.uniformsGroups!==void 0){const Ot=I.uniformsGroups;for(let Kt=0,wn=Ot.length;Kt<wn;Kt++){const Xi=Ot[Kt];Ge.update(Xi,Ht),Ge.bind(Xi,Ht)}}return Ht}function Si(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.sunLights.needsUpdate=K,C.sunLightShadows.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function bi(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(C,K,ue){const I=Ye.get(C);I.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,I.__autoAllocateDepthBuffer===!1&&(I.__useRenderToTexture=!1),Ye.get(C.texture).__webglTexture=K,Ye.get(C.depthTexture).__webglTexture=I.__autoAllocateDepthBuffer?void 0:ue,I.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,K){const ue=Ye.get(C);ue.__webglFramebuffer=K,ue.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(C,K=0,ue=0){re=C,ce=K,$=ue;let I=null,H=!1,se=!1;if(C){const Re=Ye.get(C);if(Re.__useDefaultFramebuffer!==void 0){ke.bindFramebuffer(Q.FRAMEBUFFER,Re.__webglFramebuffer),k.copy(C.viewport),q.copy(C.scissor),pe=C.scissorTest,ke.viewport(k),ke.scissor(q),ke.setScissorTest(pe),O=-1;return}else if(Re.__webglFramebuffer===void 0)ct.setupRenderTarget(C);else if(Re.__hasExternalTextures)ct.rebindTextures(C,Ye.get(C.texture).__webglTexture,Ye.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const tt=C.depthTexture;if(Re.__boundDepthTexture!==tt){if(tt!==null&&Ye.has(tt)&&(C.width!==tt.image.width||C.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(C)}}const Fe=C.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(se=!0);const Ke=Ye.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ke[K])?I=Ke[K][ue]:I=Ke[K],H=!0):C.samples>0&&ct.useMultisampledRTT(C)===!1?I=Ye.get(C).__webglMultisampledFramebuffer:Array.isArray(Ke)?I=Ke[ue]:I=Ke,k.copy(C.viewport),q.copy(C.scissor),pe=C.scissorTest}else k.copy($e).multiplyScalar(be).floor(),q.copy(Pe).multiplyScalar(be).floor(),pe=Ve;if(ue!==0&&(I=X),ke.bindFramebuffer(Q.FRAMEBUFFER,I)&&ke.drawBuffers(C,I),ke.viewport(k),ke.scissor(q),ke.setScissorTest(pe),H){const Re=Ye.get(C.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+K,Re.__webglTexture,ue)}else if(se){const Re=K;for(let Fe=0;Fe<C.textures.length;Fe++){const Ke=Ye.get(C.textures[Fe]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+Fe,Ke.__webglTexture,ue,Re)}}else if(C!==null&&ue!==0){const Re=Ye.get(C.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Re.__webglTexture,ue)}O=-1};function Nr(C){const K=Ye.get(C);return(K.__readFormat!==C.format||K.__readType!==C.type)&&(K.__readFormat=C.format,K.__readType=C.type,K.__formatReadable=Lt.textureFormatReadable(C.format),K.__typeReadable=Lt.textureTypeReadable(C.type)),K}this.readRenderTargetPixels=function(C,K,ue,I,H,se,De,Re=0){if(!(C&&C.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ye.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Fe=Fe[De],Array.isArray(Fe)&&(Fe=Fe[0])),Fe){ke.bindFramebuffer(Q.FRAMEBUFFER,Fe);try{const Ke=C.textures[Re],tt=Ke.format,xt=Ke.type;C.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Re);const qe=Nr(Ke);if(qe.__formatReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qe.__typeReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-I&&ue>=0&&ue<=C.height-H&&Q.readPixels(K,ue,I,H,he.convert(tt),he.convert(xt),se)}finally{const Ke=re!==null?Ye.get(re).__webglFramebuffer:null;ke.bindFramebuffer(Q.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(C,K,ue,I,H,se,De,Re=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Ye.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&De!==void 0&&(Fe=Fe[De],Array.isArray(Fe)&&(Fe=Fe[0])),Fe)if(K>=0&&K<=C.width-I&&ue>=0&&ue<=C.height-H){ke.bindFramebuffer(Q.FRAMEBUFFER,Fe);const Ke=C.textures[Re],tt=Ke.format,xt=Ke.type;C.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Re);const qe=Nr(Ke);if(qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _t=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,_t),Q.bufferData(Q.PIXEL_PACK_BUFFER,se.byteLength,Q.STREAM_READ),Q.readPixels(K,ue,I,H,he.convert(tt),he.convert(xt),0),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null);const en=re!==null?Ye.get(re).__webglFramebuffer:null;ke.bindFramebuffer(Q.FRAMEBUFFER,en);const qt=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await A_(Q,qt,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,_t),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,se),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null),Q.deleteBuffer(_t),Q.deleteSync(qt),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,K=null,ue=0){const I=Math.pow(2,-ue),H=Math.floor(C.image.width*I),se=Math.floor(C.image.height*I),De=K!==null?K.x:0,Re=K!==null?K.y:0;ct.setTexture2D(C,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,ue,0,0,De,Re,H,se),ke.unbindTexture()},this.copyTextureToTexture=function(C,K,ue=null,I=null,H=0,se=0){let De,Re,Fe,Ke,tt,xt,qe,_t,en;const qt=C.isCompressedTexture?C.mipmaps[se]:C.image;if(ue!==null)De=ue.max.x-ue.min.x,Re=ue.max.y-ue.min.y,Fe=ue.isBox3?ue.max.z-ue.min.z:1,Ke=ue.min.x,tt=ue.min.y,xt=ue.isBox3?ue.min.z:0;else{const Nt=Math.pow(2,-H);De=Math.floor(qt.width*Nt),Re=Math.floor(qt.height*Nt),C.isDataArrayTexture?Fe=qt.depth:C.isData3DTexture?Fe=Math.floor(qt.depth*Nt):Fe=1,Ke=0,tt=0,xt=0}I!==null?(qe=I.x,_t=I.y,en=I.z):(qe=0,_t=0,en=0);const zt=he.convert(K.format),dn=he.convert(K.type);let nt;K.isData3DTexture?(ct.setTexture3D(K,0),nt=Q.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(ct.setTexture2DArray(K,0),nt=Q.TEXTURE_2D_ARRAY):(ct.setTexture2D(K,0),nt=Q.TEXTURE_2D),ke.activeTexture(Q.TEXTURE0),ke.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,K.flipY),ke.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),ke.pixelStorei(Q.UNPACK_ALIGNMENT,K.unpackAlignment);const _n=ke.getParameter(Q.UNPACK_ROW_LENGTH),ie=ke.getParameter(Q.UNPACK_IMAGE_HEIGHT),$t=ke.getParameter(Q.UNPACK_SKIP_PIXELS),Ht=ke.getParameter(Q.UNPACK_SKIP_ROWS),di=ke.getParameter(Q.UNPACK_SKIP_IMAGES);ke.pixelStorei(Q.UNPACK_ROW_LENGTH,qt.width),ke.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,qt.height),ke.pixelStorei(Q.UNPACK_SKIP_PIXELS,Ke),ke.pixelStorei(Q.UNPACK_SKIP_ROWS,tt),ke.pixelStorei(Q.UNPACK_SKIP_IMAGES,xt);const ti=C.isDataArrayTexture||C.isData3DTexture,fi=K.isDataArrayTexture||K.isData3DTexture;if(C.isDepthTexture){const Nt=Ye.get(C),fn=Ye.get(K),Pn=Ye.get(Nt.__renderTarget),Ot=Ye.get(fn.__renderTarget);ke.bindFramebuffer(Q.READ_FRAMEBUFFER,Pn.__webglFramebuffer),ke.bindFramebuffer(Q.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Kt=0;Kt<Fe;Kt++)ti&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Ye.get(C).__webglTexture,H,xt+Kt),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Ye.get(K).__webglTexture,se,en+Kt)),Q.blitFramebuffer(Ke,tt,Ke+De,tt+Re,qe,_t,qe+De,_t+Re,Q.DEPTH_BUFFER_BIT,Q.NEAREST);ke.bindFramebuffer(Q.READ_FRAMEBUFFER,null),ke.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(H!==0||C.isRenderTargetTexture||Ye.has(C)){const Nt=Ye.get(C),fn=Ye.get(K);ke.bindFramebuffer(Q.READ_FRAMEBUFFER,z),ke.bindFramebuffer(Q.DRAW_FRAMEBUFFER,te);for(let Pn=0;Pn<Fe;Pn++)ti?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Nt.__webglTexture,H,xt+Pn):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Nt.__webglTexture,H),fi?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,fn.__webglTexture,se,en+Pn):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,fn.__webglTexture,se),H!==0?Q.blitFramebuffer(Ke,tt,Ke+De,tt+Re,qe,_t,qe+De,_t+Re,Q.COLOR_BUFFER_BIT,Q.NEAREST):fi?Q.copyTexSubImage3D(nt,se,qe,_t,en+Pn,Ke,tt,De,Re):Q.copyTexSubImage2D(nt,se,qe,_t,Ke,tt,De,Re);ke.bindFramebuffer(Q.READ_FRAMEBUFFER,null),ke.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else fi?C.isDataTexture||C.isData3DTexture?Q.texSubImage3D(nt,se,qe,_t,en,De,Re,Fe,zt,dn,qt.data):K.isCompressedArrayTexture?Q.compressedTexSubImage3D(nt,se,qe,_t,en,De,Re,Fe,zt,qt.data):Q.texSubImage3D(nt,se,qe,_t,en,De,Re,Fe,zt,dn,qt):C.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,se,qe,_t,De,Re,zt,dn,qt.data):C.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,se,qe,_t,qt.width,qt.height,zt,qt.data):Q.texSubImage2D(Q.TEXTURE_2D,se,qe,_t,De,Re,zt,dn,qt);ke.pixelStorei(Q.UNPACK_ROW_LENGTH,_n),ke.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,ie),ke.pixelStorei(Q.UNPACK_SKIP_PIXELS,$t),ke.pixelStorei(Q.UNPACK_SKIP_ROWS,Ht),ke.pixelStorei(Q.UNPACK_SKIP_IMAGES,di),se===0&&K.generateMipmaps===!0&&K.mipmapsAutoUpdate===!0&&Q.generateMipmap(nt),ke.unbindTexture()},this.initRenderTarget=function(C){Ye.get(C).__webglFramebuffer===void 0&&ct.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ct.setTextureCube(C,0):C.isData3DTexture?ct.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ct.setTexture2DArray(C,0):ct.setTexture2D(C,0),ke.unbindTexture()},this.resetState=function(){ce=0,$=0,re=null,ke.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ut._getUnpackColorSpace()}}function cM(s,e){const t=document.createElement("canvas");t.width=2048,t.height=1024;const r=t.getContext("2d");let o;e?s==="celestial-cyan"?o=["#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#f0f9ff","#dbeafe"]:s==="supernova-sunset"?o=["#fff1f2","#fecdd3","#fda4af","#fb7185","#e11d48","#9f1239","#fff7ed","#fed7aa"]:s==="nocturne-silver"?o=["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#71717a","#ffffff","#e4e4e7"]:s==="cyberpunk-neon"?o=["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#d946ef","#c026d3","#a21caf"]:s==="solar-gold"?o=["#fffbeb","#fef3c7","#fde68a","#fcd34d","#f59e0b","#d97706","#b45309","#78350f"]:s==="emerald-aurora"?o=["#f0fdf4","#dcfce7","#bbf7d0","#86efac","#4ade80","#22c55e","#16a34a","#15803d"]:s==="pure-pitch-black"?o=["#ffffff","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#71717a","#3f3f46","#18181b"]:o=["#fffbeb","#fef3c7","#fde68a","#fcd34d","#f59e0b","#d97706","#fff7ed","#ffedd5"]:s==="celestial-cyan"?o=["#020b14","#041d33","#083358","#0e4a7d","#0284c7","#38bdf8","#075985","#0c4a6e","#06b6d4"]:s==="supernova-sunset"?o=["#12040d","#2b061c","#4a0a2f","#771146","#be123c","#f43f5e","#ea580c","#fb923c","#450a22"]:s==="nocturne-silver"?o=["#060609","#111119","#1e1e2d","#2f2f45","#4d4d6e","#7b7b9e","#a6a6c7","#252538","#d4d4e8"]:s==="cyberpunk-neon"?o=["#080014","#16002c","#2c004d","#550080","#9333ea","#db2777","#f43f5e","#06b6d4","#22d3ee"]:s==="solar-gold"?o=["#0d0500","#1f0c00","#3b1700","#5e2500","#92400e","#d97706","#f59e0b","#fbbf24","#fef08a"]:s==="emerald-aurora"?o=["#020d06","#052110","#0a381d","#14532d","#16a34a","#22c55e","#4ade80","#10b981","#34d399"]:s==="pure-pitch-black"?o=["#000000","#050505","#0a0a0a","#121212","#1a1a1a","#262626","#404040","#737373","#a3a3a3"]:o=["#080415","#150933","#270e59","#3e1785","#5b21b6","#7c3aed","#a855f7","#c084fc","#2e1065","#d8b4fe"];const l=r.createLinearGradient(0,0,0,t.height);o.forEach((d,S)=>{l.addColorStop(S/(o.length-1),d)}),r.fillStyle=l,r.fillRect(0,0,t.width,t.height);const u=72;for(let d=0;d<u;d++){const w=d/u*t.height,E=t.height/u*(1.2+Math.sin(d*.7)*.5),y=o[d*3%o.length];r.fillStyle=y,r.globalAlpha=.25+Math.sin(d*.9)*.2,r.beginPath(),r.moveTo(0,w);const b=32;for(let D=0;D<=b;D++){const U=D/b*t.width,N=Math.sin(D*.8+d*1.5)*7+Math.cos(D*1.6+d*2.1)*4;r.lineTo(U,w+N)}r.lineTo(t.width,w+E),r.lineTo(0,w+E),r.closePath(),r.fill()}r.globalAlpha=e?.25:.4,r.fillStyle="#ffffff";for(let d=0;d<48;d++){const S=Math.random()*t.width,w=Math.random()*t.height,E=60+Math.random()*180,y=1.5+Math.random()*3.5;r.beginPath(),r.ellipse(S,w,E,y,Math.sin(w*.05)*.15,0,Math.PI*2),r.fill()}const f=t.width*.62,g=t.height*.58,m=85,_=r.createRadialGradient(f,g,5,f,g,m);e?(_.addColorStop(0,"#ffffff"),_.addColorStop(.4,o[o.length-2]),_.addColorStop(.8,o[o.length-1]),_.addColorStop(1,"rgba(255,255,255,0)")):(_.addColorStop(0,"#ffffff"),_.addColorStop(.3,o[o.length-3]||"#c084fc"),_.addColorStop(.7,o[o.length-1]||"#7c3aed"),_.addColorStop(1,"rgba(0,0,0,0)")),r.globalAlpha=.85,r.fillStyle=_,r.beginPath(),r.ellipse(f,g,m*1.6,m*.8,-.15,0,Math.PI*2),r.fill(),r.strokeStyle=e?"rgba(200, 150, 100, 0.45)":"rgba(255, 255, 255, 0.60)",r.lineWidth=2.5;for(let d=0;d<3;d++){r.beginPath();for(let S=0;S<Math.PI*2;S+=.2){const w=S/(Math.PI*2)*m*.7,E=f+Math.cos(S+d*2.1)*w*1.5,y=g+Math.sin(S+d*2.1)*w*.7;S===0?r.moveTo(E,y):r.lineTo(E,y)}r.stroke()}const v=new hc(t);return v.wrapS=ga,v.wrapT=li,v}function uM(s,e){const t=document.createElement("canvas");t.width=1024,t.height=64;const r=t.getContext("2d");r.clearRect(0,0,t.width,t.height);let o,l;e?(o="rgba(217, 119, 6, 0.45)",l="rgba(245, 158, 11, 0.85)"):s==="celestial-cyan"?(o="rgba(56, 189, 248, 0.45)",l="rgba(186, 230, 253, 0.90)"):s==="supernova-sunset"?(o="rgba(251, 146, 60, 0.45)",l="rgba(254, 205, 211, 0.90)"):s==="nocturne-silver"?(o="rgba(212, 212, 216, 0.45)",l="rgba(255, 255, 255, 0.90)"):s==="cyberpunk-neon"?(o="rgba(6, 182, 212, 0.50)",l="rgba(244, 63, 94, 0.95)"):s==="solar-gold"?(o="rgba(245, 158, 11, 0.50)",l="rgba(254, 240, 138, 0.95)"):s==="emerald-aurora"?(o="rgba(16, 185, 129, 0.45)",l="rgba(110, 231, 183, 0.90)"):s==="pure-pitch-black"?(o="rgba(115, 115, 115, 0.35)",l="rgba(245, 245, 245, 0.90)"):(o="rgba(192, 132, 252, 0.50)",l="rgba(243, 232, 255, 0.92)");for(let f=0;f<t.width;f++){const g=f/t.width;let m=0;g<.22?m=.12+Math.sin(g*60)*.08:g>=.22&&g<.65?m=.75+Math.sin(g*120)*.18+Math.cos(g*240)*.06:g>=.65&&g<.72?m=.02:g>=.72&&g<.95?g>.85&&g<.87?m=.05:m=.55+Math.sin(g*100)*.15:m=.2+Math.sin(g*200)*.15,r.fillStyle=m>.6?l:o,r.globalAlpha=Math.max(0,Math.min(1,m)),r.fillRect(f,0,1,t.height)}const u=new hc(t);return u.wrapS=li,u.wrapT=li,u}function dM(s){const e=document.createElement("canvas");e.width=2048,e.height=1024;const t=e.getContext("2d");t.fillStyle=s?"#d6d3d1":"#888899",t.fillRect(0,0,e.width,e.height),t.fillStyle=s?"#a8a29e":"#474755",[{x:.35,y:.4,rx:240,ry:160},{x:.55,y:.35,rx:280,ry:190},{x:.7,y:.45,rx:200,ry:140},{x:.4,y:.65,rx:220,ry:150},{x:.6,y:.6,rx:260,ry:180}].forEach(u=>{t.globalAlpha=.65,t.beginPath(),t.ellipse(u.x*e.width,u.y*e.height,u.rx,u.ry,.2,0,Math.PI*2),t.fill()});const o=320;for(let u=0;u<o;u++){const f=Math.random()*e.width,g=Math.random()*e.height,m=4+Math.random()*32;if(t.globalAlpha=.55,t.fillStyle=s?"#57534e":"#22222a",t.beginPath(),t.arc(f,g,m,0,Math.PI*2),t.fill(),t.globalAlpha=.7,t.strokeStyle=s?"#ffffff":"#e2e8f0",t.lineWidth=Math.max(1,m*.2),t.beginPath(),t.arc(f,g,m,Math.PI*.75,Math.PI*1.75),t.stroke(),m>24){t.globalAlpha=.25,t.strokeStyle=s?"#ffffff":"#cbd5e1",t.lineWidth=1;for(let _=0;_<8;_++){const v=_/8*Math.PI*2,d=m*(3+Math.random()*5);t.beginPath(),t.moveTo(f+Math.cos(v)*m,g+Math.sin(v)*m),t.lineTo(f+Math.cos(v)*d,g+Math.sin(v)*d),t.stroke()}}}const l=new hc(e);return l.wrapS=ga,l.wrapT=li,l}function fM(s){const e=document.createElement("canvas");e.width=2048,e.height=1024;const t=e.getContext("2d");t.fillStyle=s?"#991b1b":"#450a0a",t.fillRect(0,0,e.width,e.height),t.fillStyle=s?"#7f1d1d":"#1c0404",[{x:.35,y:.4,rx:240,ry:160},{x:.55,y:.35,rx:280,ry:190},{x:.7,y:.45,rx:200,ry:140},{x:.4,y:.65,rx:220,ry:150},{x:.6,y:.6,rx:260,ry:180}].forEach(u=>{t.globalAlpha=.75,t.beginPath(),t.ellipse(u.x*e.width,u.y*e.height,u.rx,u.ry,.2,0,Math.PI*2),t.fill()});const o=280;for(let u=0;u<o;u++){const f=Math.random()*e.width,g=Math.random()*e.height,m=4+Math.random()*30;t.globalAlpha=.6,t.fillStyle="#1c0404",t.beginPath(),t.arc(f,g,m,0,Math.PI*2),t.fill(),t.globalAlpha=.85,t.strokeStyle="#f87171",t.lineWidth=Math.max(1,m*.2),t.beginPath(),t.arc(f,g,m,Math.PI*.75,Math.PI*1.75),t.stroke()}const l=new hc(e);return l.wrapS=ga,l.wrapT=li,l}const hM=()=>{const s=Se.useRef(null),{wallpaperSettings:e,appTheme:t,isEcoSleeping:r}=rs(),o=Se.useRef(r);o.current=r;const l=Se.useRef(!1),u=Se.useRef(null);Se.useEffect(()=>{!r&&!l.current&&u.current&&u.current()},[r]);const f=e.celestialBody||"ringed-planet",g=e.palette||"cosmic-royal",m=t==="light";return Se.useEffect(()=>{if(!s.current)return;if(f==="none"){s.current.innerHTML="";return}const _=s.current;_.innerHTML="";const v=_.clientWidth||window.innerWidth,d=_.clientHeight||window.innerHeight,S=v<768,w=new $_,E=new Gi(45,v/d,.1,100);E.position.set(0,0,10);const y=new lM({alpha:!0,antialias:!0,powerPreference:"high-performance"});y.setSize(v,d),y.setPixelRatio(Math.min(window.devicePixelRatio||1,1.25)),y.outputColorSpace=_i,_.appendChild(y.domElement);const b=new fy(m?16775149:16777215,m?2.8:2.5);w.add(b);const D=new hy(m?14870768:g==="celestial-cyan"?662832:g==="cyberpunk-neon"?2031672:g==="solar-gold"?2363651:g==="emerald-aurora"?270096:g==="pure-pitch-black"?197379:1577516,m?.7:.4);w.add(D);const U=new ro;w.add(U);let N=3.4,F=1.8,L=.65;const M=e.celestialPosition||"default";M==="upper-right"?(N=S?1.2:3.4,F=S?2.3:1.8,b.position.set(-8,5,4)):M==="upper-left"?(N=S?-1.2:-3.3,F=S?2.5:2,b.position.set(-8,2,-2)):M==="zenith-center"?(N=0,F=S?2.5:2.4,b.position.set(0,0,4)):f==="ringed-planet"||f==="pulsar-star"?(N=S?1.2:3.4,F=S?2.3:1.8,L=S?.48:.68,b.position.set(-8,5,4)):f==="crescent-moon"||f==="blood-moon"?(N=S?-1.2:-3.3,F=S?2.5:2,L=S?.42:.6,b.position.set(-8,2,-2)):f==="eclipse-corona"&&(N=0,F=S?2.5:2.4,L=S?.45:.64,b.position.set(0,0,4));const P=e.celestialScaleMultiplier||1;L*=P,U.position.set(N,F,0),U.scale.set(L,L,L);let J=0,j=0,W=0,B=0;const X=q=>{const pe=q.clientX/window.innerWidth*2-1;J=(-(q.clientY/window.innerHeight)*2+1)*.18,j=pe*.25};window.addEventListener("mousemove",X,{passive:!0});let z=null,te=null,ce=null,$=null;if(f==="ringed-planet"){const q=new Bi(1,64,64),pe=cM(g,m),Y=new Hl({map:pe,roughness:.55,metalness:.08});z=new Tn(q,Y),U.add(z);const oe=new Bi(1.04,48,48),me=new Ni({vertexShader:`
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
        `,uniforms:{glowColor:{value:new Dt(m?g==="celestial-cyan"?165063:14251782:g==="celestial-cyan"?3718648:g==="supernova-sunset"?16007006:11032055)}},transparent:!0,blending:Ms,side:Bn}),ge=new Tn(oe,me);U.add(ge);const be=new Lf(1.35,2.85,128),Ie=be.attributes.position,rt=be.attributes.uv;for(let it=0;it<Ie.count;it++){const vt=Ie.getX(it),ft=Ie.getY(it),Tt=(Math.sqrt(vt*vt+ft*ft)-1.35)/(2.85-1.35);rt.setXY(it,Tt,.5)}rt.needsUpdate=!0;const $e=uM(g,m),Pe=new Hl({map:$e,side:Wi,transparent:!0,opacity:.92,roughness:.45,metalness:.05});te=new Tn(be,Pe),te.rotation.x=Math.PI*.48,te.rotation.y=-.15,U.add(te);const Ve=new Bi(.11,24,24),Xe=new Hl({color:m?14078929:13095678,roughness:.8});ce=new Tn(Ve,Xe),U.add(ce),U.rotation.z=-.42}else if(f==="crescent-moon"){const q=new Bi(1,64,64),pe=dM(m),Y=new Ni({vertexShader:`
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
        `,uniforms:{moonTexture:{value:pe},sunDir:{value:new xe(-1.6,.35,-.65).normalize()},sunlitColor:{value:new Dt(m?16776171:16710083)},earthshineColor:{value:new Dt(m?9741240:6583435)},earthshineAlpha:{value:m?.07:.05}},transparent:!0});z=new Tn(q,Y),U.add(z);const oe=new Bi(1.04,48,48),me=new Ni({vertexShader:`
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
        `,uniforms:{sunDir:{value:new xe(-1.6,.35,-.65).normalize()},glowColor:{value:new Dt(m?16096779:16707722)}},transparent:!0,blending:Ms,side:Bn}),ge=new Tn(oe,me);U.add(ge),U.rotation.y=.45,U.rotation.z=-.22}else if(f==="eclipse-corona"){const q=new _o(3.8,3.8),pe=new Ni({vertexShader:`
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
        `,uniforms:{uTime:{value:0},uColor:{value:new Dt(m?14251782:16638023)}},transparent:!0,blending:Ms,depthWrite:!1});$=new Tn(q,pe),U.add($);const Y=new Bi(.96,48,48),oe=new Jl({color:m?1579035:328970});z=new Tn(Y,oe),U.add(z)}else if(f==="blood-moon"){const q=new Bi(1,64,64),pe=fM(m),Y=new Hl({map:pe,roughness:.7,metalness:.05});z=new Tn(q,Y),U.add(z);const oe=new Bi(1.05,48,48),me=new Ni({vertexShader:`
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
        `,transparent:!0,blending:Ms,side:Bn}),ge=new Tn(oe,me);U.add(ge),U.rotation.y=.5,U.rotation.z=-.2}else if(f==="pulsar-star"){const q=new Bi(.72,48,48),pe=new Jl({color:m?165063:14742270});z=new Tn(q,pe),U.add(z);const Y=new Df(1.4,5,32,1,!0),oe=new Jl({color:m?223649:3718648,transparent:!0,opacity:.5,side:Wi,blending:Ms}),me=new Tn(Y,oe);me.position.y=2.6,U.add(me);const ge=new Tn(Y,oe);ge.position.y=-2.6,ge.rotation.x=Math.PI,U.add(ge),$=me}let re;const O=performance.now(),ee=()=>{if(o.current){y.render(w,E),l.current=!1;return}if(l.current=!0,re=requestAnimationFrame(ee),document.hidden)return;const q=(performance.now()-O)*.001;W+=(J-W)*.06,B+=(j-B)*.06,U.position.x=N+B*.8,U.position.y=F+W*.8;const pe=e.rotationSpeed||"standard",Y=pe==="static"?0:pe==="slow"?.35:pe==="fast"?2.4:1;if(z&&(z.rotation.y+=.0012*Y),ce){const me=q*.35*Y;ce.position.x=Math.cos(me)*4.8,ce.position.z=Math.sin(me)*4.8*.4,ce.position.y=Math.sin(me*1.5)*.6}$&&$.material.uniforms&&($.material.uniforms.uTime.value=q),y.render(w,E)};u.current=()=>{l.current||(l.current=!0,ee())},ee();const k=()=>{if(!_||!y||!E)return;const q=_.clientWidth||window.innerWidth,pe=_.clientHeight||window.innerHeight;E.aspect=q/pe,E.updateProjectionMatrix(),y.setSize(q,pe),y.setPixelRatio(Math.min(window.devicePixelRatio||1,1.25));const Y=q<768,oe=e.celestialPosition||"default";oe==="upper-right"?(N=Y?1.2:3.4,F=Y?2.3:1.8):oe==="upper-left"?(N=Y?-1.2:-3.3,F=Y?2.5:2):oe==="zenith-center"?(N=0,F=Y?2.5:2.4):f==="ringed-planet"||f==="pulsar-star"?(N=Y?1.2:3.4,F=Y?2.3:1.8,L=Y?.48:.68):f==="crescent-moon"||f==="blood-moon"?(N=Y?-1.2:-3.3,F=Y?2.5:2,L=Y?.42:.6):f==="eclipse-corona"&&(N=0,F=Y?2.5:2.4,L=Y?.45:.64),L*=e.celestialScaleMultiplier||1,U.position.set(N,F,0),U.scale.set(L,L,L)};return window.addEventListener("resize",k,{passive:!0}),()=>{u.current=null,l.current=!1,cancelAnimationFrame(re),window.removeEventListener("mousemove",X),window.removeEventListener("resize",k),y.dispose(),_&&y.domElement&&_.contains(y.domElement)&&_.removeChild(y.domElement)}},[f,g,m,e.celestialPosition,e.celestialScaleMultiplier,e.rotationSpeed]),h.jsx("div",{ref:s,className:"fixed inset-0 pointer-events-none z-[1] select-none overflow-hidden","aria-hidden":"true"})};/**
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
 */const gf=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Td(s){return s!=null}function vM(s,e={}){var d,S;const t=e.attributeNames??{},r=w=>t[w]??w,o=s.size??s.width??ws.width,l=s.size??s.height??ws.height,u=((d=s.aliases)==null?void 0:d.filter(w=>typeof w=="string"&&w.trim()!=="").map(w=>`lucide-${w}`))??[],f=[...s.name?[`lucide-${s.name}`]:[],...u],g=((S=e.className)==null?void 0:S.split(" ").filter(Boolean))??[],m=e.includeDefaultClasses===!1?gf(...g):gf("lucide",...f,...g),_=e.absoluteStrokeWidth?Number(e.strokeWidth??ws["stroke-width"])*Number(s.size??s.width??ws.width)/Number(e.size??e.width??ws.width):e.strokeWidth??ws["stroke-width"];return["svg",{...Object.entries(ws).reduce((w,[E,y])=>(w[r(E)]=y,w),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&Td(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&Td(e.width)&&{[r("width")]:e.width},..."height"in e&&Td(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:_,...m&&{[r("class")]:m},[r("viewBox")]:`0 0 ${o} ${l}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},s.node.map(w=>{const[E,y,b]=w,D=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...y}:y;return b?[E,D,b]:[E,D]})]}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function _M(s,e={}){return vM(s,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},SM=Se.createContext({}),bM=()=>Se.useContext(SM),wM=Se.forwardRef(({color:s,size:e,width:t,height:r,strokeWidth:o,absoluteStrokeWidth:l,nonScalingStroke:u,className:f="",children:g,iconNode:m=[],icon:_={node:m,aliases:[],size:24},...v},d)=>{const{size:S=24,strokeWidth:w=2,absoluteStrokeWidth:E=!1,nonScalingStroke:y=!1,color:b="currentColor",className:D=""}=bM()??{},U=!!g||yM(v),[N,F,L=[]]=_M(_,{color:s??b,width:t??e??S,height:r??e??S,strokeWidth:o??w,absoluteStrokeWidth:l??E,nonScalingStroke:u??y,className:gf(D,f),hasA11yProp:U,attributes:v});return Se.createElement(N,{ref:d,...F},[...L.map(([M,P])=>Se.createElement(M,P)),...Array.isArray(g)?g:[g]])});/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Rt(s,e=[],t=[]){const r=typeof s=="string"?mM(s,e,t):s,o=Se.forwardRef(({className:l,...u},f)=>Se.createElement(wM,{ref:f,icon:r,className:l,...u}));return r.name&&(o.displayName=xM(r.name)),o}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng={name:"bell",size:24,node:[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]};ng.node;const MM=Rt(ng);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig={name:"calendar-clock",size:24,node:[["path",{d:"M16 14v2.2l1.6 1",key:"fo4ql5"}],["path",{d:"M16 2v3",key:"otl347"}],["path",{d:"M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338",key:"7hb8p4"}],["path",{d:"M3 9h5.859",key:"numkqi"}],["path",{d:"M8 2v3",key:"1ioesn"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]};ig.node;const r0=Rt(ig);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg={name:"calendar",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]]};rg.node;const EM=Rt(rg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};sg.node;const Er=Rt(sg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};ag.node;const og=Rt(ag);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};lg.node;const lc=Rt(lg);/**
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
 */const gg={name:"headphones",size:24,node:[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]};gg.node;const cc=Rt(gg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg={name:"leaf",size:24,node:[["path",{d:"M11 20a10 10 0 0010-10 25.9 25.9 0 00-1.04-7.281 1 1 0 00-1.755-.325C15.833 5.5 13 5.5 9.8 6.1A7 7 0 0011 20",key:"1wjnjv"}],["path",{d:"M2 21a5 5 0 012.911-4.544C7.613 15.212 8.351 15.24 11 13",key:"c1ejpn"}]]};xg.node;const PM=Rt(xg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg={name:"list-music",size:24,node:[["path",{d:"M16 5H3",key:"m91uny"}],["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M11 19H3",key:"zflm78"}],["path",{d:"M21 16V5",key:"yxg4q8"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]};vg.node;const s0=Rt(vg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g={name:"maximize-2",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]};_g.node;const a0=Rt(_g);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg={name:"minimize-2",size:24,node:[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]]};yg.node;const Sg=Rt(yg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};bg.node;const uc=Rt(bg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};wg.node;const nr=Rt(wg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};Mg.node;const Vi=Rt(Mg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};Eg.node;const ec=Rt(Eg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg={name:"quote",size:24,node:[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]};Tg.node;const DM=Rt(Tg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag={name:"radio",size:24,node:[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};Ag.node;const o0=Rt(Ag);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};Cg.node;const Mr=Rt(Cg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg={name:"skip-back",size:24,node:[["path",{d:"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",key:"15892j"}],["path",{d:"M3 20V4",key:"1ptbpl"}]]};Rg.node;const xf=Rt(Rg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng={name:"skip-forward",size:24,node:[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]]};Ng.node;const dc=Rt(Ng);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};Pg.node;const Dg=Rt(Pg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Lg.node;const Ts=Rt(Lg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig={name:"square-check-big",size:24,node:[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-square"]};Ig.node;const LM=Rt(Ig);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg={name:"star",size:24,node:[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]};kg.node;const IM=Rt(kg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};Ug.node;const Fg=Rt(Ug);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg={name:"sunrise",size:24,node:[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]};zg.node;const kM=Rt(zg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og={name:"target",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};Og.node;const UM=Rt(Og);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg={name:"timer",size:24,node:[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]};Bg.node;const FM=Rt(Bg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};Hg.node;const oo=Rt(Hg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg={name:"tv",size:24,node:[["path",{d:"m17 2-5 5-5-5",key:"16satq"}],["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",key:"1e6viu"}]]};Gg.node;const zM=Rt(Gg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg={name:"user",size:24,node:[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]};Vg.node;const Wg=Rt(Vg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};jg.node;const vf=Rt(jg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};$g.node;const Xg=Rt($g);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};Yg.node;const Tr=Rt(Yg),OM=()=>{const{activeYouTubeItem:s,isYouTubePlaying:e,youtubeVolume:t,isYouTubeMuted:r,setYouTubeIsPlaying:o,setYouTubePlayerReady:l,showYouTubePreview:u,setShowYouTubePreview:f,toggleYouTubePlay:g,nextYouTubeTrack:m,prevYouTubeTrack:_,toggleYouTubeMute:v,setYouTubeVolume:d,audioSource:S}=rs(),w=Se.useRef(null),[E,y]=Se.useState(null),b=Se.useRef((s==null?void 0:s.id)||null),D=Se.useRef(null),[U,N]=Se.useState(!1),F=Se.useRef(!1),L=Se.useCallback((X,z="")=>{try{w.current&&w.current.contentWindow&&w.current.contentWindow.postMessage(JSON.stringify({event:"command",func:X,args:z}),"*")}catch(te){console.warn("[YouTube Audio] Command error:",te)}},[]),M=Se.useCallback((X,z)=>{const te=z?"1":"0",ce=typeof window<"u"&&window.location.origin?`&origin=${encodeURIComponent(window.location.origin)}`:"";if(!X)return`https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=${te}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${ce}`;if(X.type==="playlist"&&X.playlistId)return`https://www.youtube.com/embed/videoseries?list=${encodeURIComponent(X.playlistId)}&autoplay=${te}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${ce}`;if(X.type==="video_in_playlist"&&X.videoId&&X.playlistId)return`https://www.youtube.com/embed/${encodeURIComponent(X.videoId)}?list=${encodeURIComponent(X.playlistId)}&autoplay=${te}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${ce}`;const $=X.videoId||"jfKfPfyJRdk";return`https://www.youtube.com/embed/${encodeURIComponent($)}?autoplay=${te}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${ce}`},[]),[P,J]=Se.useState(()=>M(s,!1)),j=Se.useCallback(()=>{L("unMute",""),L("setVolume",[t||75]),r&&v()},[L,t,r,v]);Se.useEffect(()=>(window.__forMeSendYouTubeCommand=L,window.__forMeForceUnmute=j,l(!0),()=>{delete window.__forMeSendYouTubeCommand,delete window.__forMeForceUnmute}),[L,j,l]),Se.useEffect(()=>{if(!s||b.current===s.id)return;b.current=s.id,y(null);const X=M(s,e);D.current=X,J(X),Hi.updateMetadata({title:s.title,artist:s.channel||"FOR ME Sanctuary",album:s.type==="playlist"?"YouTube Playlist":"YouTube Stream",artworkUrl:s.thumbnailUrl,onPlay:()=>{o(!0),L("playVideo",""),j()},onPause:()=>{o(!1),L("pauseVideo","")},onNext:s.type==="playlist"||s.type==="video_in_playlist"?m:void 0,onPrev:s.type==="playlist"||s.type==="video_in_playlist"?_:void 0})},[s,M,e,m,_,L,o,j]),Se.useEffect(()=>{if(F.current){F.current=!1;return}e?(L("playVideo",""),setTimeout(()=>{L("unMute",""),L("setVolume",[t||75])},50),Hi.setPlaybackState("playing")):(L("pauseVideo",""),Hi.setPlaybackState("paused"))},[e,L,t]),Se.useEffect(()=>{L("setVolume",[t||75])},[t,L]),Se.useEffect(()=>{r?L("mute",""):(L("unMute",""),L("setVolume",[t||75]))},[r,t,L]),Se.useEffect(()=>{const X=z=>{if(!(!z.data||typeof z.data!="string"))try{const te=JSON.parse(z.data);te.event==="onStateChange"?te.info===1?(F.current=!0,o(!0),y(null),Hi.setPlaybackState("playing"),r||(L("unMute",""),L("setVolume",[t||75]))):te.info===2?document.hidden||(F.current=!0,o(!1),Hi.setPlaybackState("paused")):te.info===0&&((s==null?void 0:s.type)==="playlist"||(s==null?void 0:s.type)==="video_in_playlist"?Hi.setPlaybackState("playing"):(F.current=!0,o(!1),Hi.setPlaybackState("none"))):te.event==="infoDelivery"&&te.info?typeof te.info.muted=="boolean"&&te.info.muted&&!r&&e&&(L("unMute",""),L("setVolume",[t||75])):te.event==="onError"&&(console.warn("[YouTube Audio Player Error]",te.info),(te.info===101||te.info===150)&&y("The owner of this video restricts playback outside of YouTube."))}catch{}};return window.addEventListener("message",X),()=>window.removeEventListener("message",X)},[o,r,t,L,s,e]);const W=S==="youtube"&&e||u,B=(s==null?void 0:s.type)==="playlist"||(s==null?void 0:s.type)==="video_in_playlist";return h.jsxs(h.Fragment,{children:[h.jsxs("div",{role:"region","aria-label":"YouTube Audio Player",style:{position:"fixed",bottom:!W||U?"0px":u?"84px":"16px",right:!W||U?"0px":u?"24px":"16px",width:!W||U?"2px":u?"380px":"250px",height:!W||U?"2px":u?"285px":"150px",zIndex:!W||U?-1:u?50:30,opacity:!W||U?.01:1,pointerEvents:!W||U?"none":"auto",borderRadius:"1.25rem",overflow:"hidden",boxShadow:u?"0 30px 70px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.18)":"0 15px 35px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.12)",transition:"all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"},className:"backdrop-blur-2xl bg-[#090b14]/95 flex flex-col border border-white/15",children:[h.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-black/60 shrink-0 select-none",children:[h.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[h.jsx("span",{className:`w-2 h-2 rounded-full shrink-0 ${e?"bg-red-500 animate-pulse":"bg-zinc-500"}`}),h.jsx("span",{className:"text-white text-xs font-display font-semibold truncate max-w-[110px] sm:max-w-[160px]",title:s==null?void 0:s.title,children:(s==null?void 0:s.title)||"YouTube Audio"})]}),h.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[h.jsxs("button",{type:"button",onClick:j,className:`px-1.5 py-0.5 rounded-md text-[10px] font-sans font-bold flex items-center gap-1 transition-colors cursor-pointer ${r?"bg-amber-500 text-black hover:bg-amber-400 animate-pulse":"bg-emerald-600/80 text-white hover:bg-emerald-500"}`,title:"Force Unmute & Restore Volume",children:[r?h.jsx(Xg,{className:"w-3 h-3"}):h.jsx(vf,{className:"w-3 h-3"}),h.jsx("span",{className:"hidden sm:inline",children:r?"UNMUTE":`${t}%`})]}),h.jsx("button",{type:"button",onClick:()=>N(!0),className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer",title:"Audio Only (Hide Video Frame)",children:h.jsx(cc,{className:"w-3 h-3"})}),h.jsx("button",{type:"button",onClick:()=>f(!u),className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer",title:u?"Collapse to Mini Player":"Expand Video Preview",children:u?h.jsx(Sg,{className:"w-3 h-3"}):h.jsx(a0,{className:"w-3 h-3"})}),h.jsx("button",{type:"button",onClick:()=>{o(!1),f(!1),L("pauseVideo","")},className:"p-1 rounded-md bg-white/10 hover:bg-red-500/80 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer",title:"Stop playback & close",children:h.jsx(Tr,{className:"w-3 h-3"})})]})]}),E&&h.jsxs("div",{className:"absolute inset-0 z-30 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center space-y-2 pointer-events-auto",children:[h.jsx(og,{className:"w-6 h-6 text-amber-400"}),h.jsx("p",{className:"text-xs text-white/95 font-sans leading-relaxed max-w-xs",children:E}),(s==null?void 0:s.url)&&h.jsxs("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold transition-colors shadow-md",children:[h.jsx(CM,{className:"w-3 h-3"}),h.jsx("span",{children:"Open in YouTube"})]})]}),h.jsx("div",{className:"flex-1 w-full bg-black relative min-h-0",children:h.jsx("iframe",{ref:w,id:"global-youtube-audio-iframe",title:"FOR ME Sanctuary Audio Stream",src:P,className:"w-full h-full border-0 absolute inset-0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),h.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 border-t border-white/10 bg-black/60 shrink-0 text-xs",children:[u?h.jsxs("div",{className:"flex items-center gap-1",children:[h.jsx("span",{className:"text-[10px] font-sans text-zinc-400 mr-1",children:"Vol:"}),[25,50,75,100].map(X=>h.jsxs("button",{type:"button",onClick:()=>{d(X),L("setVolume",[X]),j()},className:`px-1.5 py-0.5 rounded text-[10px] font-mono transition-colors cursor-pointer ${t===X?"bg-red-600 text-white font-bold":"bg-white/10 text-zinc-300 hover:bg-white/20"}`,children:[X,"%"]},X))]}):h.jsxs("div",{className:"flex items-center gap-1",children:[B&&h.jsxs(h.Fragment,{children:[h.jsx("button",{type:"button",onClick:_,className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer",title:"Previous track in playlist",children:h.jsx(xf,{className:"w-3 h-3"})}),h.jsx("button",{type:"button",onClick:m,className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer",title:"Next track in playlist",children:h.jsx(dc,{className:"w-3 h-3"})})]}),h.jsx("span",{className:"text-[10px] font-mono text-zinc-400",children:r?"Muted":`${t}%`})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[u&&B&&h.jsxs(h.Fragment,{children:[h.jsx("button",{type:"button",onClick:_,className:"p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white transition-colors cursor-pointer",title:"Previous track",children:h.jsx(xf,{className:"w-3.5 h-3.5"})}),h.jsx("button",{type:"button",onClick:m,className:"p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white transition-colors cursor-pointer",title:"Next track",children:h.jsx(dc,{className:"w-3.5 h-3.5"})})]}),h.jsx("button",{type:"button",onClick:()=>{g(),j()},className:`px-3 py-1 rounded-lg text-white text-[11px] font-display font-semibold flex items-center gap-1 shadow-sm transition-all cursor-pointer ${e?"bg-red-600 hover:bg-red-500":"bg-emerald-600 hover:bg-emerald-500"}`,children:e?h.jsxs(h.Fragment,{children:[h.jsx(nr,{className:"w-3 h-3 fill-current"}),h.jsx("span",{children:"Pause"})]}):h.jsxs(h.Fragment,{children:[h.jsx(Vi,{className:"w-3 h-3 fill-current ml-0.5"}),h.jsx("span",{children:"Play"})]})})]})]})]}),W&&U&&h.jsxs("button",{type:"button",onClick:()=>N(!1),className:"fixed bottom-4 right-4 z-40 px-3 py-1.5 rounded-xl cosmic-dock text-xs flex items-center gap-2 border border-white/15 text-white hover:border-violet-400/50 shadow-xl cursor-pointer transition-all animate-fadeIn",title:"Restore Video Frame",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-red-500 animate-pulse"}),h.jsx("span",{className:"font-display text-[11px] font-medium",children:"Show Video"}),h.jsx(a0,{className:"w-3 h-3 text-zinc-400"})]})]})},BM=[{id:"deep-space-obsidian",name:"Deep Space Obsidian",tagline:"Luminous Lavender & Crescent Moon",accent:"#a855f7",gradient:["#060814","#2d1252","#7c3aed","#ede9fe"],settings:{palette:"cosmic-royal",celestialBody:"crescent-moon",celestialPosition:"default",celestialScaleMultiplier:1,rotationSpeed:"standard",waveGeometry:"dunes",speed:"balanced",amplitude:"majestic",waveLayerDensity:"deep",horizonHeight:"balanced",clockFontStyle:"tabular",clockHalo:"pulsar",clockColor:"palette",clockPosition:"center",clockDivider:"colon",showConstellations:!0,showComet:!0,showNebulaDust:!0,starDensity:"balanced",shootingStarMode:"occasional"}},{id:"cyberpunk-neon",name:"Cyberpunk Neon",tagline:"High-Voltage Cyan & Ringed Gas Giant",accent:"#06b6d4",gradient:["#06000e","#3b0764","#06b6d4","#f43f5e"],settings:{palette:"cyberpunk-neon",celestialBody:"ringed-planet",celestialPosition:"upper-right",celestialScaleMultiplier:1.15,rotationSpeed:"fast",waveGeometry:"aurora",speed:"dynamic",amplitude:"dramatic",waveLayerDensity:"dense",horizonHeight:"balanced",clockFontStyle:"mono",clockHalo:"pulsar",clockColor:"cyan",clockPosition:"center",clockDivider:"colon",showCrossStars:!0,showOrbitalTrack:!0,starDensity:"dense",shootingStarMode:"meteor-shower"}},{id:"emerald-borealis",name:"Emerald Borealis",tagline:"Northern Aurora Ribbons & Pulsar Star",accent:"#10b981",gradient:["#010d05","#064e3b","#10b981","#a7f3d0"],settings:{palette:"emerald-aurora",celestialBody:"pulsar-star",celestialPosition:"zenith-center",celestialScaleMultiplier:1.1,rotationSpeed:"fast",waveGeometry:"aurora",speed:"balanced",amplitude:"majestic",waveLayerDensity:"dense",horizonHeight:"balanced",clockFontStyle:"minimal",clockHalo:"pulsar",clockColor:"cyan",clockPosition:"center",clockDivider:"dot",showConstellations:!0,showComet:!0,starDensity:"galaxy",shootingStarMode:"occasional"}},{id:"sunset-dunes",name:"Sunset Dunes",tagline:"Velvet Crimson & Solar Eclipse Corona",accent:"#f43f5e",gradient:["#0a0208","#771146","#e11d48","#f59e0b"],settings:{palette:"supernova-sunset",celestialBody:"eclipse-corona",celestialPosition:"zenith-center",celestialScaleMultiplier:1,rotationSpeed:"standard",waveGeometry:"dunes",speed:"balanced",amplitude:"majestic",waveLayerDensity:"deep",horizonHeight:"balanced",clockFontStyle:"serif",clockHalo:"subtle",clockColor:"gold",clockPosition:"center",clockDivider:"space",showConstellations:!1,showComet:!0,starDensity:"balanced",shootingStarMode:"off"}},{id:"blood-moon-totality",name:"Blood Moon Totality",tagline:"Crimson Eclipse & Ruby Stardust",accent:"#ef4444",gradient:["#0d0202","#450a0a","#b91c1c","#f87171"],settings:{palette:"supernova-sunset",celestialBody:"blood-moon",celestialPosition:"upper-left",celestialScaleMultiplier:1.25,rotationSpeed:"slow",waveGeometry:"mountains",speed:"calm",amplitude:"dramatic",waveLayerDensity:"deep",horizonHeight:"balanced",clockFontStyle:"serif",clockHalo:"pulsar",clockColor:"rose",clockPosition:"center",clockDivider:"colon",showConstellations:!0,showCrossStars:!0,starDensity:"dense",shootingStarMode:"meteor-shower"}},{id:"nord-frost",name:"Nord Frost",tagline:"Sub-Zero Arctic & Crystalline Torus",accent:"#38bdf8",gradient:["#020b14","#0c2e4e","#0284c7","#e0f2fe"],settings:{palette:"celestial-cyan",celestialBody:"crescent-moon",celestialPosition:"upper-right",celestialScaleMultiplier:1.1,rotationSpeed:"standard",waveGeometry:"ocean",speed:"balanced",amplitude:"majestic",waveLayerDensity:"dense",horizonHeight:"low",clockFontStyle:"minimal",clockHalo:"none",clockColor:"white",clockPosition:"center",clockDivider:"colon",showConstellations:!0,showCrossStars:!0,starDensity:"dense",shootingStarMode:"occasional"}},{id:"monochrome-mineral",name:"Monochrome Mineral",tagline:"Architectural Platinum & Deep Void",accent:"#a1a1aa",gradient:["#030306","#181824","#71717a","#ffffff"],settings:{palette:"nocturne-silver",celestialBody:"none",celestialPosition:"default",celestialScaleMultiplier:1,rotationSpeed:"static",waveGeometry:"mountains",speed:"calm",amplitude:"subtle",waveLayerDensity:"airy",horizonHeight:"balanced",clockFontStyle:"tabular",clockHalo:"none",clockColor:"white",clockPosition:"center",clockDivider:"space",showConstellations:!1,showComet:!1,showNebulaDust:!1,starDensity:"sparse",shootingStarMode:"off"}},{id:"pure-pitch-black",name:"Pitch Black Void",tagline:"OLED Zero-Light Battery Sanctuary",accent:"#71717a",gradient:["#000000","#050505","#171717","#e5e5e5"],settings:{palette:"pure-pitch-black",celestialBody:"crescent-moon",celestialPosition:"upper-right",celestialScaleMultiplier:.8,rotationSpeed:"slow",waveGeometry:"dunes",speed:"frozen",amplitude:"subtle",waveLayerDensity:"airy",horizonHeight:"low",clockFontStyle:"tabular",clockHalo:"none",clockColor:"white",clockPosition:"center",clockDivider:"colon",showConstellations:!1,showComet:!1,showNebulaDust:!1,starDensity:"sparse",shootingStarMode:"off"}}],HM=[{id:"cosmic-royal",name:"Cosmic Royal",previewColors:["#060814","#2d1252","#7c3aed","#ede9fe"]},{id:"cyberpunk-neon",name:"Cyber Neon",previewColors:["#06000e","#3b0764","#06b6d4","#f43f5e"]},{id:"emerald-aurora",name:"Emerald Aurora",previewColors:["#010d05","#064e3b","#10b981","#a7f3d0"]},{id:"supernova-sunset",name:"Sunset Supernova",previewColors:["#12050e","#6e133e","#e11d48","#fffbeb"]},{id:"celestial-cyan",name:"Celestial Cyan",previewColors:["#030b14","#0c2e4e","#0284c7","#e0f2fe"]},{id:"solar-gold",name:"Solar Gold",previewColors:["#140d02","#523405","#f59e0b","#fef3c7"]},{id:"nocturne-silver",name:"Nocturne Silver",previewColors:["#050508","#1e1e24","#71717a","#f4f4f5"]},{id:"pure-pitch-black",name:"Pitch Black OLED",previewColors:["#000000","#09090b","#27272a","#fafafa"]}],GM=({isOpen:s,onClose:e})=>{const{wallpaperSettings:t,updateWallpaperSettings:r,appTheme:o,toggleAppTheme:l,setIsEcoSleeping:u}=rs(),f=o==="light",[g,m]=Se.useState("realms");if(!s)return null;const _=()=>{r({palette:"cosmic-royal",speed:"balanced",amplitude:"majestic",waveGeometry:"dunes",waveLayerDensity:"deep",horizonHeight:"balanced",waveStrokeOpacity:.8,interactiveParallax:!0,celestialBody:"crescent-moon",celestialPosition:"default",celestialScaleMultiplier:1,rotationSpeed:"standard",showNebulaDust:!0,nebulaIntensity:"vivid",showConstellations:!0,showComet:!0,shootingStarMode:"occasional",showStars:!0,starDensity:"balanced",showCrossStars:!1,showOrbitalTrack:!1,showMeridian:!1,clockFontStyle:"tabular",clockSize:"standard",clockPosition:"center",clockDivider:"colon",clockColor:"palette",clockFormat:"12h",showSeconds:!0,showDate:!0,showGreeting:!0,clockHalo:"pulsar"})};return h.jsxs("div",{className:"fixed inset-0 z-50 pointer-events-none select-none",children:[h.jsx("div",{className:"absolute inset-0 bg-black/20 backdrop-blur-[2px] pointer-events-auto transition-opacity",onClick:e,"aria-hidden":"true"}),h.jsxs("aside",{role:"dialog","aria-modal":"true","aria-label":"Wallpaper Studio Inspector",className:`absolute top-8 sm:top-10 bottom-3 sm:bottom-6 right-2 sm:right-6 w-[calc(100%-1rem)] sm:w-[440px] rounded-3xl border shadow-[0_24px_80px_rgba(0,0,0,0.85)] backdrop-blur-3xl flex flex-col z-10 pointer-events-auto transition-all animate-fadeIn overflow-hidden ${f?"bg-white/95 border-zinc-200/90 text-zinc-900":"bg-[#090b16]/95 border-white/[0.12] text-white"}`,children:[h.jsxs("div",{className:`flex items-center justify-between p-4 px-5 border-b shrink-0 ${f?"border-zinc-200/80 bg-white/70":"border-white/[0.08] bg-white/[0.02]"}`,children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("div",{className:`w-8 h-8 rounded-xl border flex items-center justify-center shadow-sm ${f?"bg-zinc-100 border-zinc-200 text-zinc-800":"bg-white/[0.08] border-white/15 text-zinc-200"}`,children:h.jsx(Dg,{className:"w-3.5 h-3.5"})}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("h2",{className:"text-xs font-display uppercase tracking-widest font-bold",children:"Studio"}),h.jsx("span",{className:`text-[9px] font-mono font-medium px-2 py-0.5 rounded-full border ${f?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-emerald-500/15 text-emerald-300 border-emerald-400/30"}`,children:"Live"})]}),h.jsx("p",{className:`text-[10px] font-sans ${f?"text-zinc-500":"text-zinc-400"}`,children:"Sanctuary customization"})]})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("button",{type:"button",onClick:_,"aria-label":"Reset to default settings",title:"Reset to Defaults",className:`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${f?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.06] hover:bg-white/[0.12] text-zinc-400 hover:text-white"}`,children:h.jsx(Mr,{className:"w-3.5 h-3.5"})}),h.jsx("button",{type:"button",onClick:e,"aria-label":"Close Studio",className:`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${f?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.06] hover:bg-white/[0.12] text-zinc-400 hover:text-white"}`,children:h.jsx(Tr,{className:"w-4 h-4"})})]})]}),h.jsx("div",{className:`p-2.5 border-b shrink-0 ${f?"border-zinc-200/90 bg-zinc-50/70":"border-white/[0.06] bg-black/25"}`,children:h.jsx("div",{className:`grid grid-cols-3 gap-1.5 p-1 rounded-2xl ${f?"bg-zinc-200/60":"bg-white/[0.04]"}`,children:[{id:"realms",label:"Realms",desc:"1-Tap Themes",icon:Ts},{id:"cosmos",label:"Cosmos",desc:"Planet & Waves",icon:uc},{id:"timepiece",label:"Timepiece",desc:"Clock Style",icon:lc}].map(v=>{const d=v.icon,S=g===v.id;return h.jsxs("button",{type:"button",onClick:()=>m(v.id),className:`flex items-center justify-center gap-2 py-2 px-2 rounded-xl text-xs font-sans font-medium transition-all cursor-pointer ${S?f?"bg-white text-zinc-950 font-bold shadow-sm":"bg-white text-zinc-950 font-bold shadow-[0_2px_12px_rgba(255,255,255,0.18)]":f?"hover:bg-white/60 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.06] text-zinc-400 hover:text-white"}`,children:[h.jsx(d,{className:"w-3.5 h-3.5 shrink-0"}),h.jsx("span",{children:v.label})]},v.id)})})}),h.jsxs("div",{className:"flex-1 overflow-y-auto p-5 space-y-6",children:[g==="realms"&&h.jsxs("div",{className:"space-y-4 animate-fadeIn",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold ${f?"text-zinc-700":"text-zinc-300"}`,children:"Curated Aesthetic Realms"}),h.jsx("span",{className:`text-[10px] font-mono ${f?"text-zinc-500":"text-zinc-400"}`,children:"Instant Harmony"})]}),h.jsx("div",{className:"grid grid-cols-1 gap-2",children:BM.map(v=>{const d=t.palette===v.settings.palette&&t.celestialBody===v.settings.celestialBody;return h.jsxs("button",{type:"button",onClick:()=>r(v.settings),className:`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between group ${d?f?"bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900 shadow-md":"bg-white/[0.08] border-white/40 shadow-lg":f?"bg-white hover:bg-zinc-50 border-zinc-200/90":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08]"}`,children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("div",{className:"w-10 h-10 rounded-xl border border-white/20 shrink-0 shadow-sm flex items-center justify-center overflow-hidden",style:{background:`linear-gradient(135deg, ${v.gradient.join(", ")})`},children:d&&h.jsx(Er,{className:"w-4 h-4 text-white drop-shadow-md stroke-[3]"})}),h.jsxs("div",{children:[h.jsx("div",{className:`text-xs font-display font-bold ${d?f?"text-zinc-950 font-bold":"text-white":f?"text-zinc-800":"text-zinc-200"}`,children:v.name}),h.jsx("div",{className:`text-[10px] font-sans ${f?"text-zinc-500":"text-zinc-400"}`,children:v.tagline})]})]}),h.jsx("div",{className:"flex items-center gap-1 shrink-0 pl-2",children:v.gradient.map((S,w)=>h.jsx("div",{className:"w-2.5 h-2.5 rounded-full border border-black/20",style:{backgroundColor:S}},w))})]},v.id)})})]}),g==="cosmos"&&h.jsxs("div",{className:"space-y-5 animate-fadeIn",children:[h.jsxs("div",{className:"space-y-2",children:[h.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${f?"text-zinc-700":"text-zinc-300"}`,children:"3D Celestial Object"}),h.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:[{id:"crescent-moon",label:"Crescent Moon"},{id:"ringed-planet",label:"Saturn Rings"},{id:"blood-moon",label:"Blood Moon"},{id:"pulsar-star",label:"Pulsar Star"},{id:"eclipse-corona",label:"Eclipse Corona"},{id:"none",label:"No Planet (Pure Waves)"}].map(v=>{const d=t.celestialBody===v.id;return h.jsxs("button",{type:"button",onClick:()=>r({celestialBody:v.id}),className:`p-2.5 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer flex items-center justify-between ${d?f?"bg-zinc-900 text-white font-semibold":"bg-white text-zinc-950 font-semibold shadow-sm":f?"bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300"}`,children:[h.jsx("span",{className:"truncate",children:v.label}),d&&h.jsx(Er,{className:"w-3.5 h-3.5 shrink-0 ml-1"})]},v.id)})})]}),h.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[h.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${f?"text-zinc-700":"text-zinc-300"}`,children:"Atmospheric Palette"}),h.jsx("div",{className:"grid grid-cols-2 gap-2",children:HM.map(v=>{const d=t.palette===v.id;return h.jsxs("button",{type:"button",onClick:()=>r({palette:v.id}),className:`p-2 rounded-xl border text-left transition-all cursor-pointer flex flex-col gap-1.5 ${d?f?"bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900 shadow-sm":"bg-white/[0.08] border-white/40 shadow-sm":f?"bg-white hover:bg-zinc-50 border-zinc-200":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]"}`,children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:`text-[11px] font-semibold ${d?f?"text-zinc-950":"text-white":f?"text-zinc-700":"text-zinc-300"}`,children:v.name}),d&&h.jsx(Er,{className:"w-3 h-3 text-emerald-400"})]}),h.jsx("div",{className:"flex items-center gap-1",children:v.previewColors.map((S,w)=>h.jsx("span",{className:"w-3 h-3 rounded-full border border-black/20",style:{backgroundColor:S}},w))})]},v.id)})})]}),h.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[h.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${f?"text-zinc-700":"text-zinc-300"}`,children:"Wave Topography"}),h.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{id:"dunes",label:"Cosmic Dunes"},{id:"aurora",label:"Aurora Ribbon"},{id:"mountains",label:"Ridge Peaks"},{id:"ocean",label:"Ocean Swell"}].map(v=>{const d=t.waveGeometry===v.id;return h.jsx("button",{type:"button",onClick:()=>r({waveGeometry:v.id}),className:`p-2.5 rounded-xl border text-center text-xs font-medium transition-all cursor-pointer ${d?f?"bg-zinc-900 text-white font-semibold":"bg-white text-zinc-950 font-semibold shadow-sm":f?"bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300"}`,children:v.label},v.id)})})]}),h.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[h.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${f?"text-zinc-700":"text-zinc-300"}`,children:"Motion Speed"}),h.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:[{id:"calm",label:"Calm Drift"},{id:"balanced",label:"Balanced"},{id:"dynamic",label:"Dynamic"}].map(v=>{const d=t.speed===v.id;return h.jsx("button",{type:"button",onClick:()=>r({speed:v.id}),className:`p-2 rounded-xl border text-center text-xs font-medium transition-all cursor-pointer ${d?f?"bg-zinc-900 text-white font-semibold":"bg-white text-zinc-950 font-semibold shadow-sm":f?"bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300"}`,children:v.label},v.id)})})]}),h.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${f?"text-zinc-700":"text-zinc-300"}`,children:"Battery Saver (Eco Sleep)"}),h.jsx("span",{className:`text-[10px] ${f?"text-zinc-500":"text-zinc-400"}`,children:"0% GPU when idle"})]}),h.jsx("div",{className:"grid grid-cols-4 gap-1.5",children:[{val:7.5,label:"7.5m (Default)"},{val:5,label:"5 min"},{val:10,label:"10 min"},{val:0,label:"Off"}].map(v=>{const d=(t.ecoSleepMinutes??7.5)===v.val;return h.jsx("button",{type:"button",onClick:()=>r({ecoSleepMinutes:v.val}),className:`p-2 rounded-xl border text-center text-xs font-medium transition-all cursor-pointer ${d?f?"bg-zinc-900 text-white font-semibold":"bg-white text-zinc-950 font-semibold shadow-sm":f?"bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300"}`,children:v.label},v.val)})}),h.jsx("p",{className:`text-[11px] leading-relaxed ${f?"text-zinc-500":"text-zinc-400"}`,children:"Auto-pauses heavy 3D celestial motion and wave loops after inactivity to eliminate battery drain while preserving the tranquil wallpaper aesthetic."}),h.jsxs("button",{type:"button",onClick:()=>{u(!0),e()},className:`w-full py-2 px-3 rounded-xl border text-xs font-medium transition-all cursor-pointer flex items-center justify-center gap-2 ${f?"bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100":"bg-emerald-950/40 text-emerald-300 border-emerald-500/30 hover:bg-emerald-900/50"}`,children:[h.jsx(PM,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Preview Eco Sleep Mode"})]})]}),h.jsx("div",{className:"pt-2 border-t border-white/[0.06]",children:h.jsxs("button",{type:"button",onClick:l,className:`w-full p-2.5 rounded-xl border text-xs font-medium transition-all cursor-pointer flex items-center justify-center gap-2 ${f?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-white"}`,children:[f?h.jsx(uc,{className:"w-4 h-4 text-zinc-700"}):h.jsx(Fg,{className:"w-4 h-4 text-amber-300"}),h.jsxs("span",{children:["Switch to ",f?"Obsidian Dark":"Creamy Light"," Theme"]})]})})]}),g==="timepiece"&&h.jsxs("div",{className:"space-y-5 animate-fadeIn",children:[h.jsxs("div",{className:"space-y-2",children:[h.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${f?"text-zinc-700":"text-zinc-300"}`,children:"Clock Typography Face"}),h.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{id:"tabular",label:"Tabular Modern",preview:"12:00"},{id:"serif",label:"Editorial Luxury",preview:"12:00"},{id:"mono",label:"Tech Monospace",preview:"12:00"},{id:"minimal",label:"Minimalist Light",preview:"12:00"}].map(v=>{const d=t.clockFontStyle===v.id;return h.jsxs("button",{type:"button",onClick:()=>r({clockFontStyle:v.id}),className:`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${d?f?"bg-zinc-900 text-white font-semibold":"bg-white text-zinc-950 font-semibold shadow-sm":f?"bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300"}`,children:[h.jsx("span",{className:"text-xs",children:v.label}),d&&h.jsx(Er,{className:"w-3.5 h-3.5"})]},v.id)})})]}),h.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[h.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${f?"text-zinc-700":"text-zinc-300"}`,children:"Dial Accent Tint"}),h.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{id:"palette",label:"Palette Match",dot:"#a855f7"},{id:"white",label:"Pure White",dot:"#ffffff"},{id:"gold",label:"Stardust Gold",dot:"#fbbf24"},{id:"cyan",label:"Cyber Cyan",dot:"#22d3ee"},{id:"rose",label:"Rose Quartz",dot:"#f43f5e"}].map(v=>{const d=t.clockColor===v.id;return h.jsxs("button",{type:"button",onClick:()=>r({clockColor:v.id}),className:`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${d?f?"bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900":"bg-white/[0.08] border-white/40":f?"bg-white hover:bg-zinc-50 border-zinc-200":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]"}`,children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"w-3 h-3 rounded-full border border-black/20",style:{backgroundColor:v.dot}}),h.jsx("span",{className:`text-xs ${d?"font-bold":""}`,children:v.label})]}),d&&h.jsx(Er,{className:"w-3.5 h-3.5 text-emerald-400"})]},v.id)})})]}),h.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[h.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${f?"text-zinc-700":"text-zinc-300"}`,children:"Display Options"}),h.jsxs("div",{className:"space-y-2",children:[h.jsxs("div",{className:`p-3 rounded-xl border flex items-center justify-between ${f?"bg-white border-zinc-200":"bg-white/[0.03] border-white/[0.06]"}`,children:[h.jsxs("div",{children:[h.jsx("div",{className:"text-xs font-semibold",children:"Orbital Seconds Capsule"}),h.jsx("div",{className:`text-[10px] ${f?"text-zinc-500":"text-zinc-400"}`,children:"Show live orbiting seconds gauge"})]}),h.jsx("button",{type:"button",onClick:()=>r({showSeconds:!t.showSeconds}),className:`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${t.showSeconds?"bg-violet-600":f?"bg-zinc-300":"bg-white/20"}`,children:h.jsx("span",{className:`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${t.showSeconds?"left-6":"left-1"}`})})]}),h.jsxs("div",{className:`p-3 rounded-xl border flex items-center justify-between ${f?"bg-white border-zinc-200":"bg-white/[0.03] border-white/[0.06]"}`,children:[h.jsxs("div",{children:[h.jsx("div",{className:"text-xs font-semibold",children:"Breathing Atmospheric Aura"}),h.jsx("div",{className:`text-[10px] ${f?"text-zinc-500":"text-zinc-400"}`,children:"Ambient radial glow behind timepiece"})]}),h.jsx("button",{type:"button",onClick:()=>r({clockHalo:t.clockHalo==="none"?"pulsar":"none"}),className:`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${t.clockHalo!=="none"?"bg-violet-600":f?"bg-zinc-300":"bg-white/20"}`,children:h.jsx("span",{className:`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${t.clockHalo!=="none"?"left-6":"left-1"}`})})]})]})]})]})]})]})]})},lo=({className:s="w-4 h-4"})=>h.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:s,"aria-hidden":"true",children:h.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})}),qg=({isPlaying:s,color:e="#a855f7",className:t="w-16 h-5",barCount:r=10})=>{const o=Se.useRef(null);return Se.useEffect(()=>{const l=o.current;if(!l)return;const u=l.getContext("2d");if(!u)return;let f;const g=wr.getAnalyser(),m=g?new Uint8Array(g.frequencyBinCount):null,_=()=>{if(u.clearRect(0,0,l.width,l.height),s&&g&&m){g.getByteFrequencyData(m);const v=l.width,d=l.height,S=2,w=S*(r-1),E=Math.max(2,(v-w)/r);for(let y=0;y<r;y++){const b=Math.min(m.length-1,Math.floor(y*(m.length/r)*.7)),D=m[b]/255,U=Math.max(3,D*(d-2)),N=y*(E+S),F=d-U;u.fillStyle=e,u.beginPath(),u.roundRect(N,F,E,U,1.5),u.fill()}}else{const v=l.width,d=l.height,S=2,w=S*(r-1),E=Math.max(2,(v-w)/r);for(let y=0;y<r;y++){const b=y*(E+S),D=d-2.5;u.fillStyle="rgba(255, 255, 255, 0.2)",u.beginPath(),u.roundRect(b,D,E,2.5,1),u.fill()}}f=requestAnimationFrame(_)};return _(),()=>{cancelAnimationFrame(f)}},[s,e,r]),h.jsx("canvas",{ref:o,width:64,height:20,className:t,"aria-hidden":"true"})},VM=({isOpen:s,onClose:e})=>{const{appTheme:t,audioSource:r,isAudioPlaying:o,activeSoundscapeId:l,audioVolume:u,isAudioMuted:f,playSoundscape:g,stopSoundscape:m,setAudioVolume:_,toggleAudioMute:v,isYouTubePlaying:d,activeYouTubeItem:S,youtubeVolume:w,isYouTubeMuted:E,savedYouTubeItems:y,showYouTubePreview:b,setShowYouTubePreview:D,playYouTubeItem:U,toggleYouTubePlay:N,stopYouTube:F,nextYouTubeTrack:L,prevYouTubeTrack:M,setYouTubeVolume:P,toggleYouTubeMute:J,addYouTubeToLibrary:j,removeYouTubeFromLibrary:W}=rs(),B=t==="light",[X,z]=Se.useState(r||"youtube"),[te,ce]=Se.useState(""),[$,re]=Se.useState(""),[O,ee]=Se.useState(null),[k,q]=Se.useState(null),[pe,Y]=Se.useState(null),[oe,me]=Se.useState(null);if(Se.useEffect(()=>{if(!pe){me(null);return}me(pe*60);const Pe=setInterval(()=>{me(Ve=>Ve===null||Ve<=1?(m(),F(),Y(null),null):Ve-1)},1e3);return()=>clearInterval(Pe)},[pe,m,F]),Se.useEffect(()=>{const Pe=Ve=>{Ve.key==="Escape"&&s&&e()};return window.addEventListener("keydown",Pe),()=>window.removeEventListener("keydown",Pe)},[s,e]),!s)return null;const ge=fa.find(Pe=>Pe.id===l)||fa[0],be=Pe=>{const Ve=Math.floor(Pe/60),Xe=Pe%60;return`${Ve}:${Xe.toString().padStart(2,"0")}`},Ie=Pe=>{if(Pe.preventDefault(),ee(null),q(null),!te.trim()){ee("Please enter a YouTube video or playlist link.");return}const Ve=j(te.trim(),$.trim()||void 0);if(!Ve.success||!Ve.item){ee(Ve.error||"Failed to parse YouTube link.");return}U(Ve.item),ce(""),re(""),q(`Playing: ${Ve.item.title}`),setTimeout(()=>q(null),4e3)},rt=X==="youtube"?S?S.title:"No YouTube stream selected":ge.title,$e=X==="youtube"?d:o;return h.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 backdrop-blur-xl animate-fadeIn select-none ${B?"bg-black/45":"bg-black/85"}`,role:"dialog","aria-modal":"true","aria-labelledby":"audio-modal-title",children:[h.jsx("div",{className:"fixed inset-0",onClick:e,"aria-hidden":"true"}),h.jsxs("div",{className:`relative z-10 w-full max-w-2xl border rounded-3xl shadow-[0_20px_70px_rgba(0,0,0,0.85)] flex flex-col max-h-[90vh] overflow-hidden ${B?"bg-white/95 border-zinc-200 text-zinc-900 shadow-2xl":"bg-[#0b0d1e] border-white/[0.12] text-white shadow-2xl"}`,children:[h.jsxs("div",{className:`flex items-center justify-between px-6 py-4 border-b shrink-0 ${B?"border-zinc-200 bg-zinc-50/80":"border-white/[0.08] bg-white/[0.02]"}`,children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("div",{className:`w-9 h-9 rounded-2xl border flex items-center justify-center ${B?"bg-rose-50 border-rose-200 text-red-600":"bg-red-500/20 border-red-400/40 text-red-400"}`,children:h.jsx(cc,{className:"w-5 h-5"})}),h.jsxs("div",{children:[h.jsxs("h2",{id:"audio-modal-title",className:`text-sm sm:text-base font-display font-semibold tracking-wide flex items-center gap-2 ${B?"text-zinc-900":"text-white"}`,children:["Focus Audio Sanctuary",h.jsx("span",{className:`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border ${X==="youtube"?B?"bg-red-50 text-red-700 border-red-200":"bg-red-500/15 text-red-300 border-red-500/30":B?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-emerald-500/15 text-emerald-300 border-emerald-500/30"}`,children:X==="youtube"?"YouTube Online • Infinite Audio":"Web Audio • Offline"})]}),h.jsx("p",{className:`text-xs font-sans mt-0.5 ${B?"text-zinc-500":"text-zinc-400"}`,children:X==="youtube"?"Paste any YouTube video or playlist link or choose curated study streams":"Procedurally synthesized ambient soundscapes. Zero network required."})]})]}),h.jsx("button",{type:"button",onClick:e,className:`w-8 h-8 rounded-xl flex items-center justify-center transition-colors cursor-pointer border ${B?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600 border-zinc-200":"bg-white/[0.05] hover:bg-white/[0.12] text-zinc-400 hover:text-white border-white/[0.08]"}`,"aria-label":"Close sound sanctuary",children:h.jsx(Tr,{className:"w-4 h-4"})})]}),h.jsxs("div",{className:`flex items-center gap-2 px-6 pt-3 border-b shrink-0 ${B?"border-zinc-200 bg-zinc-50/50":"border-white/[0.06] bg-black/20"}`,children:[h.jsxs("button",{type:"button",onClick:()=>z("youtube"),className:`flex items-center gap-2 px-4 py-2.5 text-xs font-display font-semibold border-b-2 transition-all cursor-pointer ${X==="youtube"?B?"border-red-600 text-red-700":"border-red-500 text-white":B?"border-transparent text-zinc-500 hover:text-zinc-900":"border-transparent text-zinc-400 hover:text-zinc-200"}`,children:[h.jsx(lo,{className:"w-4 h-4 text-red-500"}),h.jsx("span",{children:"YouTube Audio & Playlists"})]}),h.jsxs("button",{type:"button",onClick:()=>z("ambient"),className:`flex items-center gap-2 px-4 py-2.5 text-xs font-display font-semibold border-b-2 transition-all cursor-pointer ${X==="ambient"?B?"border-violet-600 text-violet-700":"border-violet-400 text-white":B?"border-transparent text-zinc-500 hover:text-zinc-900":"border-transparent text-zinc-400 hover:text-zinc-200"}`,children:[h.jsx(o0,{className:"w-4 h-4 text-violet-500"}),h.jsx("span",{children:"Procedural Soundscapes (Offline)"})]})]}),X==="youtube"&&h.jsxs("div",{className:"flex-1 overflow-y-auto p-5 sm:p-6 space-y-5 animate-fadeIn",children:[h.jsxs("form",{onSubmit:Ie,className:"space-y-2",children:[h.jsxs("div",{className:"flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold",children:[h.jsx("span",{className:B?"text-zinc-800":"text-zinc-300",children:"Play YouTube Link or Playlist"}),h.jsx("span",{className:`text-[10px] font-sans font-normal ${B?"text-zinc-500":"text-zinc-400"}`,children:"Supports videos, live streams & playlists"})]}),h.jsxs("div",{className:"flex flex-col sm:flex-row gap-2",children:[h.jsx("input",{type:"text",placeholder:"Paste YouTube link (e.g. https://www.youtube.com/watch?v=... or playlist?list=...)",value:te,onChange:Pe=>{ce(Pe.target.value),O&&ee(null)},className:`flex-1 px-3.5 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-2 ${B?"bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:ring-red-500/20 focus:border-red-500":"bg-white/[0.04] border-white/[0.1] text-white placeholder-zinc-500 focus:ring-red-400/30 focus:border-red-400"}`}),h.jsxs("button",{type:"submit",className:"px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-display font-semibold flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer shrink-0",children:[h.jsx(ec,{className:"w-4 h-4"}),h.jsx("span",{children:"Load & Play"})]})]}),O&&h.jsxs("div",{className:"flex items-center gap-2 p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-sans",children:[h.jsx(og,{className:"w-4 h-4 shrink-0"}),h.jsx("span",{children:O})]}),k&&h.jsxs("div",{className:"flex items-center gap-2 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-sans",children:[h.jsx(Ts,{className:"w-4 h-4 shrink-0"}),h.jsx("span",{children:k})]})]}),S&&h.jsxs("div",{className:`p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${B?"bg-red-50/70 border-red-200 text-zinc-900 shadow-sm":"bg-red-950/20 border-red-500/30 text-white"}`,children:[h.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[h.jsxs("div",{className:"w-12 h-12 rounded-xl overflow-hidden bg-black/40 shrink-0 border border-white/10 relative",children:[h.jsx("img",{src:S.thumbnailUrl||tc[0].thumbnailUrl,alt:"",className:"w-full h-full object-cover"}),d&&h.jsx("div",{className:"absolute inset-0 bg-black/35 flex items-center justify-center",children:h.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"})})]}),h.jsxs("div",{className:"min-w-0",children:[h.jsx("div",{className:"flex items-center gap-1.5",children:h.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-red-600 font-bold",children:S.type==="playlist"?"PLAYLIST":"NOW STREAMING"})}),h.jsx("h3",{className:`text-xs sm:text-sm font-display font-semibold truncate ${B?"text-zinc-900":"text-white"}`,children:S.title}),h.jsx("p",{className:`text-[11px] font-sans truncate ${B?"text-zinc-600":"text-zinc-400"}`,children:S.channel||"YouTube"})]})]}),h.jsxs("div",{className:"flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end",children:[S.type==="playlist"&&h.jsxs(h.Fragment,{children:[h.jsx("button",{type:"button",onClick:M,className:`p-2 rounded-xl border transition-colors cursor-pointer ${B?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-white"}`,title:"Previous Track in Playlist",children:h.jsx(xf,{className:"w-3.5 h-3.5"})}),h.jsx("button",{type:"button",onClick:L,className:`p-2 rounded-xl border transition-colors cursor-pointer ${B?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-white"}`,title:"Next Track in Playlist",children:h.jsx(dc,{className:"w-3.5 h-3.5"})})]}),h.jsxs("button",{type:"button",onClick:()=>{try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}},className:"px-2.5 py-1.5 rounded-xl border border-emerald-500/40 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-sans font-bold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer",title:"Force Unmute & Max Volume",children:[h.jsx(vf,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Unmute"})]}),h.jsxs("button",{type:"button",onClick:()=>D(!b),className:`px-3 py-1.5 rounded-xl border text-xs font-sans flex items-center gap-1.5 transition-colors cursor-pointer ${b?"bg-red-600 text-white border-red-600 font-medium":B?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-zinc-300"}`,title:"Toggle Floating Video Preview",children:[h.jsx(zM,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:b?"Hide Video":"View Video"})]})]})]}),h.jsxs("div",{className:"space-y-2.5",children:[h.jsxs("div",{className:`flex items-center gap-2 text-xs font-display uppercase tracking-wider font-semibold ${B?"text-zinc-800":"text-zinc-300"}`,children:[h.jsx(Ts,{className:"w-3.5 h-3.5 text-amber-500"}),h.jsx("span",{children:"Curated Focus & Lo-Fi Streams"})]}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:tc.map(Pe=>{const Ve=(S==null?void 0:S.id)===Pe.id||(S==null?void 0:S.videoId)===Pe.videoId&&Pe.videoId,Xe=Ve&&d;return h.jsxs("button",{type:"button",onClick:()=>{Xe?N():U(Pe)},className:`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${Ve?B?"bg-red-50 border-red-500 ring-2 ring-red-500/20 shadow-sm":"bg-red-500/15 border-red-400 shadow-[0_0_20px_rgba(239,68,68,0.2)]":B?"bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90 text-zinc-900":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]"}`,children:[h.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[h.jsx("div",{className:"w-9 h-9 rounded-xl overflow-hidden bg-black/40 shrink-0 border border-white/10",children:h.jsx("img",{src:Pe.thumbnailUrl,alt:"",onError:it=>{it.currentTarget.src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=400&auto=format&fit=crop"},className:"w-full h-full object-cover"})}),h.jsxs("div",{className:"min-w-0",children:[h.jsx("div",{className:`text-xs font-display font-semibold truncate ${Ve?B?"text-red-950 font-bold":"text-white":B?"text-zinc-900":"text-zinc-200"}`,children:Pe.title}),h.jsx("div",{className:`text-[10px] font-sans truncate ${B?"text-zinc-500":"text-zinc-400"}`,children:Pe.channel})]})]}),h.jsx("div",{className:`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${Xe?"bg-red-600 text-white shadow-sm":B?"bg-zinc-200 text-zinc-700":"bg-white/10 text-white"}`,children:Xe?h.jsx(nr,{className:"w-3.5 h-3.5 fill-current"}):h.jsx(Vi,{className:"w-3.5 h-3.5 ml-0.5 fill-current"})})]},Pe.id)})})]}),y.filter(Pe=>!Pe.isCurated).length>0&&h.jsxs("div",{className:"space-y-2.5",children:[h.jsx("div",{className:`flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold ${B?"text-zinc-800":"text-zinc-300"}`,children:h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(s0,{className:"w-3.5 h-3.5 text-red-500"}),h.jsx("span",{children:"My Saved YouTube Library"})]})}),h.jsx("div",{className:"space-y-2",children:y.filter(Pe=>!Pe.isCurated).map(Pe=>{const Ve=(S==null?void 0:S.id)===Pe.id,Xe=Ve&&d;return h.jsxs("div",{className:`p-3 rounded-2xl border flex items-center justify-between gap-3 transition-all ${Ve?B?"bg-red-50 border-red-500 ring-2 ring-red-500/20":"bg-red-500/15 border-red-400":B?"bg-zinc-50 border-zinc-200":"bg-white/[0.03] border-white/[0.06]"}`,children:[h.jsxs("div",{onClick:()=>U(Pe),className:"flex items-center gap-3 min-w-0 flex-1 cursor-pointer",children:[h.jsx("div",{className:`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${Pe.type==="playlist"?"bg-purple-600/20 text-purple-400":"bg-red-600/20 text-red-400"}`,children:Pe.type==="playlist"?h.jsx(s0,{className:"w-4 h-4"}):h.jsx(lo,{className:"w-4 h-4"})}),h.jsxs("div",{className:"min-w-0",children:[h.jsx("div",{className:`text-xs font-display font-semibold truncate ${B?"text-zinc-900":"text-white"}`,children:Pe.title}),h.jsxs("div",{className:`text-[10px] font-sans truncate ${B?"text-zinc-500":"text-zinc-400"}`,children:[Pe.type==="playlist"?"Playlist":"Single Stream"," • ",Pe.url]})]})]}),h.jsxs("div",{className:"flex items-center gap-1.5 shrink-0",children:[h.jsx("button",{type:"button",onClick:()=>{Xe?N():U(Pe)},className:`p-2 rounded-xl transition-colors cursor-pointer ${Xe?"bg-red-600 text-white":B?"bg-zinc-200 text-zinc-800 hover:bg-zinc-300":"bg-white/10 text-white hover:bg-white/20"}`,children:Xe?h.jsx(nr,{className:"w-3.5 h-3.5 fill-current"}):h.jsx(Vi,{className:"w-3.5 h-3.5 fill-current"})}),h.jsx("button",{type:"button",onClick:()=>W(Pe.id),className:`p-2 rounded-xl transition-colors cursor-pointer ${B?"text-zinc-400 hover:text-red-600":"text-zinc-500 hover:text-red-400"}`,title:"Remove from library",children:h.jsx(oo,{className:"w-3.5 h-3.5"})})]})]},Pe.id)})})]})]}),X==="ambient"&&h.jsx("div",{className:"flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 animate-fadeIn",children:h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3.5",children:fa.map(Pe=>{const Ve=l===Pe.id,Xe=Ve&&o;return h.jsxs("div",{onClick:()=>{Xe?m():g(Pe.id)},className:`relative p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between select-none group ${Ve?B?"bg-violet-50 border-violet-500 ring-2 ring-violet-500/20 shadow-sm":"bg-violet-950/35 border-violet-500/50 shadow-[0_0_25px_rgba(168,85,247,0.18)]":B?"bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90 text-zinc-900":"bg-white/[0.025] hover:bg-white/[0.05] border-white/[0.08] hover:border-white/[0.18]"}`,children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-2",children:[h.jsx("span",{className:`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md border ${B?"bg-zinc-200/60 text-zinc-700 border-zinc-300":"text-zinc-400 bg-white/[0.05] border-white/[0.06]"}`,children:Pe.category}),h.jsx("div",{className:`w-7 h-7 rounded-full flex items-center justify-center transition-all ${Xe?"bg-violet-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.6)]":B?"bg-zinc-200 text-zinc-700 group-hover:bg-zinc-300":"bg-white/[0.06] text-zinc-300 group-hover:bg-white/[0.15] group-hover:text-white"}`,children:Xe?h.jsx(nr,{className:"w-3.5 h-3.5 fill-current"}):h.jsx(Vi,{className:"w-3.5 h-3.5 ml-0.5 fill-current"})})]}),h.jsx("h3",{className:`text-sm font-display font-semibold tracking-wide transition-colors ${B?"text-zinc-900":"text-white"}`,children:Pe.title}),h.jsx("p",{className:`text-xs font-sans mt-1 leading-snug line-clamp-2 ${B?"text-zinc-600":"text-zinc-400"}`,children:Pe.tagline})]}),h.jsxs("div",{className:`mt-3 pt-2.5 border-t flex items-center justify-between text-[10px] font-mono ${B?"border-zinc-200 text-zinc-500":"border-white/[0.06] text-zinc-400"}`,children:[h.jsx("span",{className:"truncate pr-2",children:Pe.frequency}),Xe&&h.jsxs("span",{className:"flex items-center gap-1 text-emerald-500 font-semibold shrink-0",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"}),"PLAYING"]})]})]},Pe.id)})})}),h.jsxs("div",{className:`px-5 py-3 border-t flex flex-wrap items-center justify-between gap-3 shrink-0 ${B?"border-zinc-200 bg-zinc-50/60":"border-white/[0.06] bg-white/[0.01]"}`,children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(lc,{className:`w-4 h-4 ${B?"text-zinc-600":"text-violet-400"}`}),h.jsx("span",{className:`text-xs font-display font-medium ${B?"text-zinc-800":"text-zinc-300"}`,children:"Auto-Stop Timer:"}),oe!==null&&h.jsxs("span",{className:`text-xs font-mono font-bold px-2 py-0.5 rounded-md border ${B?"bg-amber-100 text-amber-900 border-amber-300":"text-amber-300 bg-amber-500/15 border-amber-500/30"}`,children:[be(oe)," left"]})]}),h.jsx("div",{className:"flex items-center gap-1.5",children:[{label:"Off",val:null},{label:"15m",val:15},{label:"25m",val:25},{label:"45m",val:45},{label:"60m",val:60}].map(Pe=>h.jsx("button",{type:"button",onClick:()=>Y(Pe.val),className:`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${pe===Pe.val?B?"bg-zinc-900 text-white font-bold shadow-sm":"bg-violet-600 text-white font-bold shadow-sm":B?"bg-zinc-200/80 text-zinc-700 hover:bg-zinc-300":"bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08]"}`,children:Pe.label},Pe.label))})]}),h.jsxs("div",{className:`p-4 sm:p-5 border-t flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 ${B?"border-zinc-200 bg-zinc-100/90":"border-white/[0.08] bg-[#070914]/90 backdrop-blur-xl"}`,children:[h.jsxs("div",{className:"flex items-center gap-3 w-full sm:w-auto",children:[h.jsx("div",{className:`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${X==="youtube"?B?"bg-red-50 border-red-200 text-red-600":"bg-red-500/20 border-red-400/40 text-red-300":B?"bg-violet-50 border-violet-200 text-violet-700":"bg-violet-600/30 border-violet-400/40 text-violet-200"}`,children:X==="youtube"?h.jsx(lo,{className:`w-5 h-5 ${d?"animate-pulse text-red-500":"text-zinc-400"}`}):h.jsx(o0,{className:`w-5 h-5 ${o?"text-violet-500 animate-pulse":"text-zinc-400"}`})}),h.jsxs("div",{className:"min-w-0 flex-1",children:[h.jsx("p",{className:`text-xs font-display font-medium truncate ${B?"text-zinc-900":"text-white"}`,children:rt}),h.jsxs("div",{className:"flex items-center gap-2 mt-0.5",children:[h.jsx(qg,{isPlaying:$e,color:X==="youtube"?"#ef4444":B?"#7c3aed":ge.accentColor,className:"w-16 h-4"}),h.jsx("span",{className:`text-[10px] font-mono ${B?"text-zinc-500":"text-zinc-400"}`,children:$e?X==="youtube"?"Streaming YouTube...":"Synthesizing...":"Audio Paused"})]})]})]}),h.jsxs("div",{className:"flex items-center gap-4 w-full sm:w-auto justify-end",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("button",{type:"button",onClick:X==="youtube"?J:v,className:`transition-colors cursor-pointer ${B?"text-zinc-600 hover:text-black":"text-zinc-400 hover:text-white"}`,title:"Toggle Mute",children:(X==="youtube"?E:f)?h.jsx(Xg,{className:"w-4 h-4 text-red-500"}):h.jsx(vf,{className:"w-4 h-4"})}),h.jsx("input",{type:"range",min:"0",max:X==="youtube"?100:1,step:X==="youtube"?1:.01,value:X==="youtube"?E?0:w:f?0:u,onChange:Pe=>{const Ve=parseFloat(Pe.target.value);if(X==="youtube"){P(Ve),E&&J();try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}}else _(Ve)},className:"w-20 sm:w-24 h-1.5 bg-zinc-300 rounded-lg appearance-none cursor-pointer accent-red-600","aria-label":"Volume slider"}),h.jsx("span",{className:`text-[10px] font-mono w-8 tabular-nums ${B?"text-zinc-600":"text-zinc-400"}`,children:X==="youtube"?`${E?0:Math.round(w)}%`:`${f?0:Math.round(u*100)}%`})]}),h.jsx("button",{type:"button",onClick:()=>{X==="youtube"?N():o?m():g(l)},className:`px-5 py-2.5 rounded-xl text-white text-xs font-display font-semibold tracking-wider uppercase flex items-center gap-2 shadow-md transition-all cursor-pointer ${X==="youtube"?"bg-red-600 hover:bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.35)]":"bg-violet-600 hover:bg-violet-500 shadow-[0_0_20px_rgba(147,51,234,0.35)]"}`,children:$e?h.jsxs(h.Fragment,{children:[h.jsx(nr,{className:"w-3.5 h-3.5 fill-current"}),h.jsx("span",{children:"Pause"})]}):h.jsxs(h.Fragment,{children:[h.jsx(Vi,{className:"w-3.5 h-3.5 fill-current"}),h.jsx("span",{children:"Play"})]})})]})]})]})]})},WM=({isOpen:s,onClose:e})=>{const{profile:t,updateProfile:r,appTheme:o,setStudySubject:l,lastActiveDate:u,resetDayProgress:f,factoryReset:g}=rs(),m=o==="light",[_,v]=Se.useState(t.name||"Azan"),[d,S]=Se.useState(t.motto||"Remember, you are here for you."),[w,E]=Se.useState(t.defaultFocusTopic||"Engineering"),[y,b]=Se.useState(t.defaultFocusMode||"Deep Work"),[D,U]=Se.useState(!1),[N,F]=Se.useState(null);if(Se.useEffect(()=>{v(t.name||"Azan"),S(t.motto||"Remember, you are here for you."),E(t.defaultFocusTopic||"Engineering"),b(t.defaultFocusMode||"Deep Work")},[t,s]),Se.useEffect(()=>{const W=B=>{B.key==="Escape"&&s&&e()};return window.addEventListener("keydown",W),()=>window.removeEventListener("keydown",W)},[s,e]),!s)return null;const L=W=>{W.preventDefault();const B=_.trim()||"Azan",X=d.trim()||"Remember, you are here for you.",z=w.trim()||"Engineering",te=y.trim()||"Deep Work";r({name:B,motto:X,defaultFocusTopic:z,defaultFocusMode:te}),l(z),U(!0),setTimeout(()=>{U(!1),e()},500)},M=()=>{v("Azan"),S("Remember, you are here for you."),E("Engineering"),b("Deep Work"),r({name:"Azan",motto:"Remember, you are here for you.",defaultFocusTopic:"Engineering",defaultFocusMode:"Deep Work"}),l("Engineering")},P=()=>{window.confirm("Start a fresh day? This will uncheck today's tasks & habits, reset hydration to 0%, and reset focus timer.")&&(f(),F("Today's progress has been reset!"),setTimeout(()=>F(null),3e3))},J=()=>{window.confirm("WARNING: Are you sure you want to perform a factory reset? All saved tasks, habits, focus history, and settings will be permanently wiped and restored to default.")&&(g(),F("All app data restored to factory defaults."),setTimeout(()=>{F(null),e()},1500))},j=()=>{const W=new Date().getHours();return W>=5&&W<12?"Good morning":W>=12&&W<17?"Good afternoon":W>=17&&W<22?"Good evening":"Late night focus"};return h.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-fadeIn select-none ${m?"bg-black/35":"bg-black/80"}`,children:[h.jsx("div",{className:"fixed inset-0",onClick:e,"aria-hidden":"true"}),h.jsxs("div",{role:"dialog","aria-modal":"true","aria-labelledby":"profile-modal-title",className:`relative w-full max-w-lg overflow-hidden rounded-3xl border shadow-2xl flex flex-col z-10 ${m?"bg-white/95 border-zinc-200 text-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)]":"cosmic-card border-white/[0.14] text-white shadow-2xl"}`,children:[h.jsxs("div",{className:`flex items-center justify-between p-5 pb-3 border-b shrink-0 ${m?"border-zinc-200":"border-white/[0.08]"}`,children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("div",{className:`w-8 h-8 rounded-xl border flex items-center justify-center ${m?"bg-amber-50 border-amber-200 text-amber-700":"bg-amber-500/20 border-amber-400/30 text-amber-300"}`,children:h.jsx(Wg,{className:"w-4 h-4"})}),h.jsxs("div",{children:[h.jsx("h2",{id:"profile-modal-title",className:`text-sm font-display uppercase tracking-widest font-bold ${m?"text-zinc-900":"text-white"}`,children:"Personal Sanctuary Profile"}),h.jsx("p",{className:`text-[11px] font-sans ${m?"text-zinc-500":"text-zinc-400"}`,children:"Tailor your name, daily motto & focus targets"})]})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("button",{type:"button",onClick:M,"aria-label":"Reset profile to defaults",title:"Reset to defaults",className:`p-2 rounded-xl transition-colors cursor-pointer ${m?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white"}`,children:h.jsx(Mr,{className:"w-3.5 h-3.5"})}),h.jsx("button",{type:"button",onClick:e,"aria-label":"Close Profile Modal",className:`p-2 rounded-xl transition-colors cursor-pointer ${m?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white"}`,children:h.jsx(Tr,{className:"w-4 h-4"})})]})]}),h.jsxs("form",{onSubmit:L,className:"p-6 space-y-4",children:[h.jsxs("div",{className:`p-4 rounded-2xl border text-center space-y-1 transition-all ${m?"bg-zinc-50 border-zinc-200 text-zinc-800":"bg-white/[0.03] border-white/[0.08] text-zinc-200"}`,children:[h.jsx("span",{className:`text-[10px] font-mono uppercase tracking-widest ${m?"text-zinc-500":"text-zinc-400"}`,children:"Live Greeting Preview"}),h.jsxs("p",{className:"text-xs sm:text-sm font-sans leading-relaxed",children:[j(),","," ",h.jsx("strong",{className:m?"text-zinc-950":"text-white",children:_.trim()||"Azan"}),". •"," ",h.jsxs("span",{className:`italic ${m?"text-zinc-700 font-medium":"text-zinc-300"}`,children:["“",d.trim()||"Remember, you are here for you.","”"]})]})]}),h.jsxs("div",{className:"space-y-1.5",children:[h.jsxs("label",{className:`text-xs font-semibold flex items-center justify-between ${m?"text-zinc-800":"text-zinc-200"}`,children:[h.jsxs("span",{className:"flex items-center gap-1.5",children:[h.jsx(NM,{className:"w-3.5 h-3.5 text-amber-500"}),h.jsx("span",{children:"Your Name"})]}),h.jsx("span",{className:`text-[10px] font-normal ${m?"text-zinc-500":"text-zinc-400"}`,children:"Used in greetings & daily focus"})]}),h.jsx("input",{type:"text",value:_,onChange:W=>v(W.target.value),placeholder:"e.g. Azan",className:"w-full cosmic-input rounded-xl px-3.5 py-2.5 text-xs font-medium"})]}),h.jsxs("div",{className:"space-y-1.5",children:[h.jsxs("label",{className:`text-xs font-semibold flex items-center justify-between ${m?"text-zinc-800":"text-zinc-200"}`,children:[h.jsxs("span",{className:"flex items-center gap-1.5",children:[h.jsx(DM,{className:"w-3.5 h-3.5 text-violet-400"}),h.jsx("span",{children:"Daily Mantra / Motto"})]}),h.jsx("span",{className:`text-[10px] font-normal ${m?"text-zinc-500":"text-zinc-400"}`,children:"Displayed on your wallpaper"})]}),h.jsx("input",{type:"text",value:d,onChange:W=>S(W.target.value),placeholder:"e.g. Remember, you are here for you.",className:"w-full cosmic-input rounded-xl px-3.5 py-2.5 text-xs font-medium"})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-1",children:[h.jsxs("div",{className:"space-y-1.5",children:[h.jsxs("label",{className:`text-xs font-semibold flex items-center gap-1.5 ${m?"text-zinc-800":"text-zinc-200"}`,children:[h.jsx(UM,{className:"w-3.5 h-3.5 text-emerald-400"}),h.jsx("span",{children:"Primary Focus Topic"})]}),h.jsx("input",{type:"text",value:w,onChange:W=>E(W.target.value),placeholder:"e.g. Engineering",className:"w-full cosmic-input rounded-xl px-3.5 py-2 text-xs"})]}),h.jsxs("div",{className:"space-y-1.5",children:[h.jsxs("label",{className:`text-xs font-semibold flex items-center gap-1.5 ${m?"text-zinc-800":"text-zinc-200"}`,children:[h.jsx(mg,{className:"w-3.5 h-3.5 text-amber-500"}),h.jsx("span",{children:"Default Focus Mode"})]}),h.jsx("input",{type:"text",value:y,onChange:W=>b(W.target.value),placeholder:"e.g. Deep Work",className:"w-full cosmic-input rounded-xl px-3.5 py-2 text-xs"})]})]}),h.jsxs("div",{className:"pt-2",children:[h.jsx("span",{className:`text-[10px] font-mono uppercase tracking-wider block mb-1.5 ${m?"text-zinc-500":"text-zinc-400"}`,children:"Quick Mantras"}),h.jsx("div",{className:"flex flex-wrap gap-1.5",children:["Remember, you are here for you.","Discipline equals true freedom.","Deep focus over scattered noise.","Build with relentless craft."].map(W=>h.jsxs("button",{type:"button",onClick:()=>S(W),className:`text-[11px] px-2.5 py-1 rounded-lg border transition-all text-left cursor-pointer ${d===W?m?"bg-violet-100 border-violet-300 text-violet-900 font-medium":"bg-violet-600/30 border-violet-400/50 text-violet-200 font-medium":m?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300"}`,children:["“",W,"”"]},W))})]}),h.jsxs("div",{className:`p-3.5 rounded-2xl border space-y-2.5 ${m?"bg-zinc-50 border-zinc-200":"bg-white/[0.02] border-white/[0.08]"}`,children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx(EM,{className:`w-3.5 h-3.5 ${m?"text-violet-700":"text-violet-400"}`}),h.jsx("span",{className:`text-xs font-semibold ${m?"text-zinc-800":"text-zinc-200"}`,children:"Daily Rollover & Data Control"})]}),h.jsxs("span",{className:`text-[10px] font-mono ${m?"text-zinc-500":"text-zinc-400"}`,children:["Date: ",u]})]}),N&&h.jsxs("div",{className:"p-2 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs flex items-center gap-2",children:[h.jsx(Er,{className:"w-3.5 h-3.5 shrink-0"}),h.jsx("span",{children:N})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1",children:[h.jsxs("button",{type:"button",onClick:P,className:`px-3 py-2 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${m?"bg-white hover:bg-zinc-100 text-zinc-800 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200 border-white/[0.10]"}`,title:"Uncheck today's tasks & habits, reset hydration",children:[h.jsx(Mr,{className:"w-3.5 h-3.5 text-violet-400"}),h.jsx("span",{children:"Start Fresh Day"})]}),h.jsxs("button",{type:"button",onClick:J,className:`px-3 py-2 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${m?"bg-rose-50 hover:bg-rose-100 text-rose-700 border-rose-200":"bg-rose-950/20 hover:bg-rose-900/40 text-rose-300 border-rose-500/20 hover:border-rose-500/40"}`,title:"Wipe data and restore factory defaults",children:[h.jsx(oo,{className:"w-3.5 h-3.5 text-rose-400"}),h.jsx("span",{children:"Factory Reset"})]})]})]}),h.jsxs("div",{className:"pt-4 flex items-center justify-end gap-2.5",children:[h.jsx("button",{type:"button",onClick:e,className:`px-4 py-2.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${m?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300"}`,children:"Cancel"}),h.jsx("button",{type:"submit",className:`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all cursor-pointer ${D?"bg-emerald-500 text-white":m?"bg-zinc-900 hover:bg-zinc-800 text-white":"bg-violet-600 hover:bg-violet-500 text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]"}`,children:D?h.jsxs(h.Fragment,{children:[h.jsx(Er,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Saved!"})]}):h.jsxs(h.Fragment,{children:[h.jsx(Ts,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Save Profile"})]})})]})]})]})]})},jM=({routines:s,activeBlock:e,activeMinutesLeft:t,onSelectBlock:r,isLight:o=!1})=>{const[l,u]=Se.useState(50),[f,g]=Se.useState("12:00");Se.useEffect(()=>{const _=()=>{const d=new Date,S=d.getHours(),w=d.getMinutes(),E=(S+w/60)/24*100;u(E),g(`${S.toString().padStart(2,"0")}:${w.toString().padStart(2,"0")}`)};_();const v=setInterval(_,1e4);return()=>clearInterval(v)},[]);const m=_=>{if(_<=0)return"Ending soon";const v=Math.floor(_/60),d=_%60;return v===0?`${d}m remaining`:`${v}h ${d}m remaining`};return h.jsxs("div",{className:"w-full flex flex-col gap-2.5 select-none pt-1",children:[h.jsxs("div",{className:"flex items-center justify-between text-[11px] font-sans",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${e?"bg-amber-400":"bg-zinc-500"}`}),h.jsx("span",{className:`font-medium tracking-tight ${o?"text-zinc-900":"text-zinc-200"}`,children:e?e.title:"Free Rhythm"}),e&&t>0&&h.jsxs("span",{className:`text-[10px] font-mono tabular-nums ${o?"text-zinc-500":"text-zinc-400"}`,children:["· ",m(t)]})]}),h.jsx("span",{className:`font-mono text-[10px] tabular-nums tracking-wider ${o?"text-zinc-500":"text-zinc-400"}`,children:f})]}),h.jsxs("div",{className:"relative w-full py-1",children:[h.jsxs("div",{className:`relative h-2 rounded-full overflow-hidden transition-all ${o?"bg-zinc-200":"bg-white/[0.08]"}`,children:[h.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-zinc-700/30 via-amber-500/20 via-sky-500/20 via-indigo-500/20 to-zinc-700/30"}),s.map(_=>{let v=_.startHour,d=_.endHour;if(v===void 0||d===void 0){const y=_.timeRange.split(/[-–—to]/i);v=Zr(y[0],0),d=Zr(y[1],24)}const S=(e==null?void 0:e.id)===_.id,w=Math.min(24,Math.max(0,v))/24*100,E=(Math.min(24,Math.max(0,d))-Math.min(24,Math.max(0,v)))/24*100;return h.jsx("div",{onClick:()=>r&&r(_),className:`absolute top-0 bottom-0 transition-opacity cursor-pointer ${S?"bg-amber-400/50 shadow-sm z-10":"bg-white/10 hover:bg-white/20"}`,style:{left:`${w}%`,width:`${Math.max(2,E)}%`,borderLeft:"1px solid rgba(255,255,255,0.15)"},title:`${_.title} (${_.timeRange})`},_.id)})]}),h.jsx("div",{className:"absolute top-0 bottom-0 pointer-events-none transition-all duration-1000 ease-linear flex flex-col items-center justify-center -translate-x-1/2",style:{left:`${Math.min(99,Math.max(1,l))}%`},children:h.jsx("div",{className:"w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] border border-black/40"})})]}),h.jsxs("div",{className:`flex justify-between text-[9px] font-mono tabular-nums px-0.5 ${o?"text-zinc-500":"text-zinc-400"}`,children:[h.jsx("span",{children:"06:00"}),h.jsx("span",{children:"12:00"}),h.jsx("span",{children:"18:00"}),h.jsx("span",{children:"24:00"})]})]})},$M=()=>{const{profile:s,tasks:e,toggleTask:t,addTask:r,deleteTask:o,habits:l,toggleHabit:u,addHabit:f,routines:g,addRoutineBlock:m,deleteRoutineBlock:_,resetRoutines:v,activeRoutineBlock:d,activeRoutineMinutesLeft:S,studySeconds:w,isStudyActive:E,studySubject:y,setStudySubject:b,toggleStudyTimer:D,resetStudyTimer:U,studySessions:N,logManualStudyTime:F,deleteStudySession:L,pomodoroPhase:M,pomodoroSecondsLeft:P,pomodoroTotalSeconds:J,pomodoroSettings:j,setPomodoroSettings:W,startPomodoro:B,togglePomodoro:X,resetPomodoro:z,skipPomodoroPhase:te,togglePomodoroDisplayMode:ce,hydration:$,setHydration:re,sleepHours:O,setSleep:ee,dailyRating:k,setDailyRating:q,lastActiveDate:pe,resetDayProgress:Y,isHUDHidden:oe,setIsHUDHidden:me,wallpaperSettings:ge,audioSource:be,isAudioPlaying:Ie,activeSoundscapeId:rt,playSoundscape:$e,stopSoundscape:Pe,isYouTubePlaying:Ve,activeYouTubeItem:Xe,toggleYouTubePlay:it,appTheme:vt,toggleAppTheme:ft,isEcoSleeping:ot,setIsEcoSleeping:Tt}=rs(),de=vt==="light",[bt,Vt]=Se.useState(!1),[on,Q]=Se.useState(!1),[pn,Mt]=Se.useState(!1),[Lt,ke]=Se.useState(!1),[At,Ye]=Se.useState("none"),[ct,R]=Se.useState("pomodoro"),[T,ae]=Se.useState("12"),[Ne,Me]=Se.useState("00"),[Le,Be]=Se.useState("00"),[ve,we]=Se.useState(0),[Oe,V]=Se.useState("PM"),[Te,_e]=Se.useState(""),[Ae,he]=Se.useState(322),[Ee,Ge]=Se.useState(80),Qe=`${T}:${Ne}:${Le}`,[Ce,Ze]=Se.useState(""),[st,We]=Se.useState(s.defaultFocusTopic||"Engineering"),[ht,Bt]=Se.useState(s.defaultFocusMode||"Deep Work"),[tn,rn]=Se.useState("60"),[ln,Yt]=Se.useState(""),Hn=ie=>{F(ie,st||y||"Engineering",ht||"Manual Entry");const $t=ie>=60?`${(ie/60).toFixed(1)}h`:`${ie}m`;Yt(`+${$t} recorded to ${st||y}!`),setTimeout(()=>Yt(""),3e3)},bn=ie=>{ie.preventDefault();const $t=parseFloat(tn);!isNaN($t)&&$t>0&&(Hn($t),rn(""))},[sn,gt]=Se.useState(!1),[It,Et]=Se.useState(""),[Jt,nn]=Se.useState(""),[Gn,Vn]=Se.useState(""),Qt=M==="focus"||M==="break"||M==="paused",jt=Math.floor(P/60),Rr=P%60,ui=jt.toString().padStart(2,"0"),Si=Rr.toString().padStart(2,"0"),bi=J>0?1-P/J:0,Nr=Qt?bi*360:ve*360,C=Qt&&j.displayMode==="numbers",K=C?ui:T,ue=C?Si:Ne,I=()=>{const ie=new Date().getHours();return ie>=5&&ie<12?"Good morning":ie>=12&&ie<17?"Good afternoon":ie>=17&&ie<22?"Good evening":"Late night focus"};Se.useEffect(()=>{const ie=()=>{const Ht=new Date,di=Ht.getHours(),ti=Ht.getMinutes(),fi=Ht.getSeconds(),Nt=di>=12?"PM":"AM",fn=ge.clockFormat==="24h",Pn=fn?di.toString().padStart(2,"0"):(di%12||12).toString().padStart(2,"0"),Ot=ti.toString().padStart(2,"0"),Kt=fi.toString().padStart(2,"0");ae(Pn),Me(Ot),Be(Kt),we(fi/60),V(fn?"":Nt);const wn=new Date(Ht.getFullYear(),0,0),Xi=Ht.getTime()-wn.getTime(),ss=1e3*60*60*24,Yi=Math.floor(Xi/ss);he(Yi);const gc=Math.round((di*60+ti)/1440*100);Ge(gc);const So=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],as=["January","February","March","April","May","June","July","August","September","October","November","December"];_e(`${So[Ht.getDay()]}, ${as[Ht.getMonth()]} ${Ht.getDate()}, ${Ht.getFullYear()}`)};ie();const $t=setInterval(ie,1e3);return()=>clearInterval($t)},[ge.clockFormat,ge.showSeconds,ge.clockDivider]);const H=ge.clockFontStyle==="serif"?"font-serif font-bold tracking-tight":ge.clockFontStyle==="mono"?"font-mono font-bold tracking-tight":ge.clockFontStyle==="minimal"?"font-sans font-light tracking-[0.06em]":"font-display font-extrabold tracking-tight",se=ge.clockSize==="compact"?"text-6xl sm:text-7xl md:text-8xl lg:text-[110px]":ge.clockSize==="heroic"?"text-7xl sm:text-9xl md:text-[11rem] lg:text-[160px]":"text-7xl sm:text-8xl md:text-9xl lg:text-[136px]",De=ge.clockHalo==="none"?"opacity-0":ge.clockHalo==="subtle"?"bg-[radial-gradient(circle,rgba(139,92,246,0.14)_0%,rgba(139,92,246,0.03)_50%,transparent_70%)]":"bg-[radial-gradient(circle,rgba(139,92,246,0.22)_0%,rgba(139,92,246,0.06)_50%,transparent_75%)]",Re=ge.clockColor==="white"?de?"text-zinc-950 [text-shadow:0_2px_12px_rgba(0,0,0,0.1)]":"text-white [text-shadow:0_8px_32px_rgba(0,0,0,0.85)]":ge.clockColor==="gold"?"text-amber-300 [text-shadow:0_4px_24px_rgba(245,158,11,0.5)]":ge.clockColor==="cyan"?"text-cyan-300 [text-shadow:0_4px_24px_rgba(6,182,212,0.5)]":ge.clockColor==="rose"?"text-rose-300 [text-shadow:0_4px_24px_rgba(244,63,94,0.5)]":de?"text-zinc-900 [text-shadow:0_2px_12px_rgba(200,180,160,0.25)]":"text-white [text-shadow:0_8px_32px_rgba(0,0,0,0.85)]",Fe=ge.clockPosition==="zenith"?"mt-6 sm:mt-12 mb-auto":ge.clockPosition==="bottom"?"mt-auto mb-16 sm:mb-20":"my-auto";Se.useEffect(()=>{const ie=$t=>{$t.key==="Escape"&&(At!=="none"?Ye("none"):oe?me(!1):Lt&&ke(!1))};return window.addEventListener("keydown",ie),()=>window.removeEventListener("keydown",ie)},[At,oe,Lt,me]);const Ke=ie=>{ie.preventDefault(),Ce.trim()&&(r(Ce.trim()),Ze(""))},tt=e.filter(ie=>ie.completed).length,xt=e.length>0?Math.round(tt/e.length*100):0,qe=l.filter(ie=>ie.completed).length,_t=l.length>0?Math.round(qe/l.length*100):0,en=new Date;en.setDate(en.getDate()-7);const zt=+((N||[]).filter(ie=>new Date(ie.timestamp)>=en).reduce((ie,$t)=>ie+$t.durationSeconds,0)/3600).toFixed(1),dn=Math.min(100,Math.round(zt/15*100)),nt=ie=>{const $t=Math.floor(ie/60),Ht=ie%60;return`${$t.toString().padStart(2,"0")}:${Ht.toString().padStart(2,"0")}`},_n=fa.find(ie=>ie.id===rt)||fa[0];return h.jsxs("div",{className:"relative w-screen h-screen max-h-screen overflow-hidden flex flex-col justify-between pt-safe-top pt-8 sm:pt-10 px-4 sm:px-8 pb-safe-bottom pb-6 select-none z-10 animate-fadeIn",children:[h.jsx("h1",{className:"sr-only",children:"FOR ME — Living Wallpaper & Focus Sanctuary"}),h.jsxs("header",{className:`relative flex items-center justify-between w-full min-h-12 shrink-0 z-20 gap-3 transition-opacity duration-700 ${oe||ot?"opacity-0 pointer-events-none":"opacity-100"}`,children:[h.jsxs("button",{type:"button",onClick:()=>me(!0),className:"flex items-center gap-2.5 cursor-pointer group shrink-0 text-left",title:"Enter Zen Wallpaper Mode",children:[h.jsx("div",{className:`w-8 h-8 rounded-full border flex items-center justify-center text-[11px] font-mono font-medium tracking-tight shadow-sm transition-all ${de?"border-zinc-300/80 bg-white/80 text-zinc-900 group-hover:bg-white group-hover:border-zinc-400":"border-white/15 bg-white/[0.04] text-zinc-200 group-hover:bg-white/[0.1] group-hover:border-white/30"}`,children:"FM"}),h.jsx("span",{className:`font-sans font-bold text-[11px] tracking-[0.22em] uppercase group-hover:opacity-85 transition-opacity ${de?"text-zinc-900":"text-zinc-200"}`,children:"FOR ME"})]}),h.jsx("div",{className:"hidden md:flex absolute left-1/2 -translate-x-1/2 items-center pointer-events-none",children:h.jsxs("div",{className:`pointer-events-auto flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-2xl border text-[11px] font-sans font-medium shadow-sm transition-all ${de?"bg-white/85 border-zinc-200/90 text-zinc-700":"bg-[#090b16]/75 border-white/[0.08] text-zinc-300"}`,children:[h.jsx(Ts,{className:"w-3 h-3 text-amber-400"}),h.jsx("span",{children:Te}),d&&h.jsxs(h.Fragment,{children:[h.jsx("span",{className:"opacity-25",children:"•"}),h.jsxs("button",{type:"button",onClick:()=>ke(!0),className:"hover:underline flex items-center gap-1 font-mono text-[10px] text-violet-400 cursor-pointer",title:"Open Daily Routine Protocols & 24h Timeline",children:[h.jsx(kM,{className:"w-3 h-3 text-amber-400"}),h.jsx("span",{children:d.title})]})]})]})}),h.jsxs("nav",{"aria-label":"Wallpaper Quick Controls",className:`flex items-center gap-0.5 p-1 rounded-full backdrop-blur-2xl border transition-all ${de?"bg-white/90 border-zinc-200/90 text-zinc-700 shadow-[0_8px_24px_rgba(0,0,0,0.06)]":"bg-[#090b16]/75 border-white/[0.12] text-zinc-300 shadow-[0_12px_32px_rgba(0,0,0,0.6)]"}`,children:[h.jsx("button",{type:"button",onClick:()=>Vt(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${de?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Wallpaper Studio (Celestial Objects, Waves & Lighting)","aria-label":"Wallpaper Studio",children:h.jsx(Dg,{className:"w-3.5 h-3.5"})}),h.jsx("button",{type:"button",onClick:()=>ke(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${de?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Daily Routine Protocols","aria-label":"Daily Routine Protocols",children:h.jsx(r0,{className:"w-3.5 h-3.5"})}),h.jsxs("button",{type:"button",onClick:()=>Q(!0),className:`relative w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${Ie||Ve?de?"text-violet-600 bg-violet-50":"text-violet-300 bg-violet-600/20":de?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Focus Audio Sanctuary (YouTube Streams & Ambient Soundscapes)","aria-label":"Focus Audio Sanctuary",children:[be==="youtube"&&Ve?h.jsx(lo,{className:"w-3.5 h-3.5 text-red-500 animate-pulse"}):h.jsx(cc,{className:`w-3.5 h-3.5 ${Ie||Ve?"animate-pulse":""}`}),(Ie||Ve)&&h.jsx("span",{className:"absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse"})]}),h.jsx("button",{type:"button",onClick:()=>Mt(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${de?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:`Profile & Motto (${s.name})`,"aria-label":"Profile and Daily Mantra",children:h.jsx(Wg,{className:"w-3.5 h-3.5"})}),h.jsx("div",{className:`w-px h-3.5 mx-0.5 ${de?"bg-zinc-200":"bg-white/10"}`}),h.jsx("button",{type:"button",onClick:ft,className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${de?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:`Switch to ${de?"Obsidian Dark":"Creamy Light"} Theme`,"aria-label":"Toggle Light/Dark Theme",children:de?h.jsx(uc,{className:"w-3.5 h-3.5"}):h.jsx(Fg,{className:"w-3.5 h-3.5"})}),h.jsx("button",{type:"button",onClick:()=>me(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${de?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Zen Mode (Hide all controls)","aria-label":"Enter Zen Mode",children:h.jsx(RM,{className:"w-3.5 h-3.5"})})]})]}),h.jsxs("main",{"aria-label":`Current time ${Qe}`,className:`${Fe} text-center flex flex-col items-center justify-center relative z-20 py-4 select-none transition-all duration-300`,children:[h.jsx("div",{className:`absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[780px] lg:h-[780px] rounded-full ${De} pointer-events-none -z-10`}),h.jsxs("div",{className:"relative flex flex-col items-center group",children:[h.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none -z-10",children:h.jsxs("div",{className:`relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] md:w-[640px] md:h-[640px] rounded-full border border-dashed transition-all ${de?"border-zinc-300/70":"border-white/[0.08]"}`,children:[h.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-violet-400 shadow-[0_0_12px_rgba(168,85,247,0.9)]"}),h.jsx("div",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-white/40"}),h.jsx("div",{className:"absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-white/40"}),h.jsx("div",{className:"absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-white/40"}),h.jsx("div",{className:"absolute inset-0 transition-transform duration-1000 ease-linear pointer-events-none",style:{transform:`rotate(${Nr}deg)`},children:h.jsxs("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center",children:[h.jsx("div",{className:`w-3.5 h-3.5 rounded-full animate-ping opacity-75 ${Qt?M==="break"?"bg-cyan-400":"bg-violet-400":ge.clockColor==="gold"?"bg-amber-400":ge.clockColor==="cyan"?"bg-cyan-400":ge.clockColor==="rose"?"bg-rose-400":"bg-violet-400"}`}),h.jsx("div",{className:`absolute w-3 h-3 rounded-full shadow-lg ${Qt?M==="break"?"bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,1)]":"bg-violet-300 shadow-[0_0_20px_rgba(168,85,247,1)]":ge.clockColor==="gold"?"bg-amber-300 shadow-[0_0_20px_rgba(251,191,36,1)]":ge.clockColor==="cyan"?"bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,1)]":ge.clockColor==="rose"?"bg-rose-300 shadow-[0_0_20px_rgba(244,63,94,1)]":"bg-violet-300 shadow-[0_0_20px_rgba(168,85,247,1)]"}`})]})}),h.jsx("div",{className:`absolute inset-8 sm:inset-12 md:inset-16 rounded-full border transition-all ${de?"border-zinc-200/50":"border-white/[0.04]"}`})]})}),Qt?h.jsxs("button",{type:"button",onClick:ce,className:`flex items-center gap-2 sm:gap-2.5 mb-2 sm:mb-3 px-4 py-1.5 rounded-full border backdrop-blur-2xl text-[10px] sm:text-[11px] font-mono tracking-widest uppercase transition-all shadow-md cursor-pointer group ${M==="break"?de?"bg-cyan-50/90 border-cyan-200 text-cyan-900 shadow-sm":"bg-cyan-950/60 border-cyan-500/40 text-cyan-300 shadow-[0_4px_24px_rgba(6,182,212,0.3)]":de?"bg-violet-50/90 border-violet-200 text-violet-900 shadow-sm":"bg-[#090b16]/85 border-violet-500/40 text-violet-300 shadow-[0_4px_24px_rgba(139,92,246,0.35)]"}`,title:"Click to toggle countdown digits vs wall clock digits",children:[h.jsxs("span",{className:"flex items-center gap-1.5 font-bold",children:[h.jsxs("span",{className:"relative flex h-2 w-2",children:[h.jsx("span",{className:`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${M==="break"?"bg-cyan-400":"bg-violet-400"}`}),h.jsx("span",{className:`relative inline-flex rounded-full h-2 w-2 ${M==="break"?"bg-cyan-500":"bg-violet-500"}`})]}),M==="break"?"RECOVERY BREAK":"FOCUS SPRINT"]}),h.jsx("span",{className:"opacity-25",children:"•"}),h.jsxs("span",{className:"tabular-nums font-bold",children:[ui,":",Si," REMAINING"]}),h.jsx("span",{className:"opacity-25 hidden sm:inline",children:"•"}),h.jsx("span",{className:"hidden sm:inline opacity-80 uppercase",children:y}),h.jsx("span",{className:"opacity-25 hidden md:inline",children:"•"}),h.jsx("span",{className:"hidden md:inline text-[9px] opacity-60 group-hover:text-amber-400 transition-colors",children:C?"SHOW CLOCK":"SHOW COUNTDOWN"})]}):h.jsxs("div",{className:`flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3 px-4 py-1 rounded-full border backdrop-blur-2xl text-[10px] sm:text-[11px] font-mono tracking-widest uppercase transition-all shadow-md ${de?"bg-white/80 border-zinc-200 text-zinc-700":"bg-[#090b16]/75 border-white/[0.12] text-zinc-300 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"}`,children:[h.jsxs("span",{className:"flex items-center gap-1.5 text-emerald-400 font-semibold",children:[h.jsxs("span",{className:"relative flex h-2 w-2",children:[h.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),h.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-emerald-500"})]}),"EPHEMERIS"]}),h.jsx("span",{className:"opacity-25",children:"•"}),h.jsxs("span",{className:"tabular-nums",children:["DAY ",Ae]}),h.jsx("span",{className:"opacity-25",children:"•"}),h.jsxs("span",{className:"tabular-nums text-violet-400 font-semibold",children:[Ee,"% SOLAR"]}),h.jsx("span",{className:"opacity-25 hidden sm:inline",children:"•"}),h.jsx("span",{className:"hidden sm:inline opacity-70",children:"AZAN ZENITH"})]}),h.jsxs("div",{onClick:Qt?ce:void 0,className:`inline-flex items-center justify-center max-w-[95vw] px-2 select-none leading-none flex-nowrap transition-all ${Qt?"cursor-pointer":""} ${H} ${Re}`,title:Qt?"Click to toggle countdown / real time digits":void 0,children:[h.jsx("span",{className:`${se} tracking-tight tabular-nums transition-all ${de?"text-zinc-950 font-bold":"bg-gradient-to-b from-white via-white/95 to-zinc-400/90 bg-clip-text text-transparent font-bold"}`,children:K}),h.jsx("span",{className:`inline-flex items-center justify-center px-1.5 sm:px-3 text-3xl sm:text-5xl md:text-6xl lg:text-7xl select-none transition-colors ${Qt?M==="break"?"text-cyan-400":"text-violet-400":ge.clockColor==="gold"?"text-amber-400":ge.clockColor==="cyan"?"text-cyan-400":ge.clockColor==="rose"?"text-rose-400":de?"text-zinc-600":"text-violet-400"}`,children:ge.clockDivider==="dot"?"·":ge.clockDivider==="space"?" ":":"}),h.jsx("span",{className:`${se} tracking-tight tabular-nums transition-all ${de?"text-zinc-950 font-bold":"bg-gradient-to-b from-white via-white/95 to-zinc-400/90 bg-clip-text text-transparent font-bold"}`,children:ue}),h.jsxs("div",{className:"flex flex-col items-center justify-center ml-3 sm:ml-5 md:ml-7 gap-2 self-center",children:[Qt?h.jsxs("button",{type:"button",onClick:ie=>{ie.stopPropagation(),X()},className:`relative flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl border backdrop-blur-3xl transition-all shadow-2xl cursor-pointer group/pod ${de?"bg-white/95 border-violet-200 text-zinc-950 shadow-md hover:border-violet-400":"bg-[#090b16]/95 border-violet-500/30 text-white shadow-[0_12px_40px_rgba(0,0,0,0.8)] hover:border-violet-400/60"}`,title:M==="paused"?"Resume focus":"Pause focus (Tap to toggle)",children:[h.jsxs("svg",{className:"absolute inset-1.5 w-[calc(100%-12px)] h-[calc(100%-12px)] -rotate-90 pointer-events-none",viewBox:"0 0 36 36",children:[h.jsx("circle",{cx:"18",cy:"18",r:"15",stroke:"currentColor",strokeWidth:"2.5",className:"opacity-15",fill:"none"}),h.jsx("circle",{cx:"18",cy:"18",r:"15",stroke:"currentColor",strokeWidth:"2.8",className:`transition-all duration-300 ${M==="break"?"text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]":"text-violet-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]"}`,strokeDasharray:"94.25",strokeDashoffset:94.25*(1-bi),strokeLinecap:"round",fill:"none"})]}),h.jsx("span",{className:"font-mono text-xs sm:text-sm md:text-base font-extrabold tabular-nums tracking-wider leading-none z-10 drop-shadow-sm",children:C?`${T}:${Ne}`:`${ui}:${Si}`}),h.jsx("span",{className:`text-[7px] sm:text-[8px] font-mono tracking-widest uppercase mt-1 z-10 font-bold ${M==="paused"?"text-amber-400":M==="break"?"text-cyan-400":"text-violet-400"}`,children:M==="paused"?"PAUSED":C?"CLOCK":M==="break"?"BREAK":"FOCUS"})]}):ge.showSeconds&&h.jsxs("div",{className:`relative flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl border backdrop-blur-3xl transition-all shadow-2xl ${de?"bg-white/95 border-zinc-300 text-zinc-950 shadow-md":"bg-[#090b16]/90 border-white/20 text-white shadow-[0_12px_40px_rgba(0,0,0,0.8)]"}`,children:[h.jsxs("svg",{className:"absolute inset-1.5 w-[calc(100%-12px)] h-[calc(100%-12px)] -rotate-90 pointer-events-none",viewBox:"0 0 36 36",children:[h.jsx("circle",{cx:"18",cy:"18",r:"15",stroke:"currentColor",strokeWidth:"2.5",className:"opacity-15",fill:"none"}),h.jsx("circle",{cx:"18",cy:"18",r:"15",stroke:"currentColor",strokeWidth:"2.8",className:`transition-all duration-300 ${ge.clockColor==="gold"?"text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]":ge.clockColor==="cyan"?"text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]":ge.clockColor==="rose"?"text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.9)]":"text-violet-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]"}`,strokeDasharray:"94.25",strokeDashoffset:94.25*(1-ve),strokeLinecap:"round",fill:"none"})]}),h.jsx("span",{className:"font-mono text-base sm:text-xl md:text-2xl font-extrabold tabular-nums tracking-wider leading-none z-10 drop-shadow-sm",children:Le}),h.jsx("span",{className:"text-[7px] sm:text-[8px] font-mono tracking-widest uppercase opacity-60 mt-1 z-10 font-bold",children:"SEC"})]}),Qt?h.jsxs("div",{className:"flex items-center gap-1 z-10",children:[h.jsx("button",{type:"button",onClick:ie=>{ie.stopPropagation(),te()},className:`text-[9px] font-mono px-2 py-0.5 rounded-lg border backdrop-blur-xl transition-all cursor-pointer ${de?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/10 hover:bg-white/20 border-white/15 text-zinc-300"}`,title:"Skip to next phase",children:"SKIP"}),h.jsx("button",{type:"button",onClick:ie=>{ie.stopPropagation(),z()},className:`text-[9px] font-mono px-2 py-0.5 rounded-lg border backdrop-blur-xl transition-all cursor-pointer ${de?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/10 hover:bg-white/20 border-white/15 text-zinc-300"}`,title:"Reset Pomodoro",children:"RESET"})]}):Oe?h.jsx("span",{className:`text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase px-3 py-1 rounded-xl border backdrop-blur-2xl transition-all ${de?"bg-zinc-100 border-zinc-200 text-zinc-800 shadow-sm":"bg-white/[0.08] border-white/15 text-zinc-200 shadow-md"}`,children:Oe}):null]})]})]}),ge.showGreeting!==!1&&h.jsx("div",{className:"mt-7 sm:mt-9 flex justify-center w-full px-3",children:h.jsx("button",{type:"button",onClick:()=>Mt(!0),className:`group relative text-xs sm:text-sm font-sans tracking-wide px-6 sm:px-8 py-3 rounded-2xl sm:rounded-full backdrop-blur-3xl max-w-xl text-center leading-relaxed shadow-xl cursor-pointer transition-all hover:scale-[1.01] border ${de?"bg-white/95 text-zinc-900 border-zinc-300/90 shadow-md hover:bg-white hover:border-zinc-400":"bg-[#0a0618]/90 text-zinc-200 border-white/[0.18] shadow-[0_16px_50px_rgba(0,0,0,0.7)] hover:border-violet-400/50 hover:shadow-[0_16px_60px_rgba(168,85,247,0.25)]"}`,title:"Click to personalize name & daily mantra",children:h.jsxs("div",{className:"flex items-center justify-center gap-2 flex-wrap",children:[h.jsxs("span",{className:`font-bold tracking-normal ${de?"text-zinc-950":"text-white"}`,children:[I(),", ",s.name]}),h.jsx("span",{className:"opacity-30",children:"•"}),h.jsxs("span",{className:`italic font-medium ${de?"text-zinc-800":"text-zinc-200"}`,children:["“",s.motto||"Discipline equals true freedom.","”"]})]})})}),ot?h.jsxs("button",{type:"button",onClick:()=>Tt(!1),className:"mt-8 flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs transition-all border shadow-2xl cursor-pointer bg-black/60 text-white/80 border-white/15 hover:bg-black/80 hover:text-white backdrop-blur-xl",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),h.jsx("span",{className:"font-sans tracking-widest text-[11px] uppercase",children:"Eco Sleep Active • Move cursor or tap to wake"})]}):oe?h.jsxs("button",{type:"button",onClick:()=>me(!1),className:`mt-8 flex items-center gap-2 px-5 py-2.5 rounded-full text-xs transition-all border shadow-xl cursor-pointer ${de?"bg-white/90 text-zinc-800 border-zinc-300/80 hover:bg-white":"cosmic-dock text-zinc-300 hover:text-white border-white/[0.12] hover:border-violet-400/40"}`,children:[h.jsx(Sg,{className:"w-3.5 h-3.5 text-amber-400"}),h.jsx("span",{className:"font-display tracking-wider",children:"Tap anywhere to restore controls"})]}):null]}),At!=="none"&&!oe&&!ot&&h.jsxs("div",{className:"fixed inset-x-0 bottom-24 z-30 flex justify-center px-4 animate-fadeIn pointer-events-auto",children:[h.jsx("div",{className:"fixed inset-0 -z-10",onClick:()=>Ye("none")}),At==="tasks"&&h.jsxs("div",{className:`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${de?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[h.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${de?"border-zinc-200":"border-white/[0.08]"}`,children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("h2",{className:"text-xs font-display uppercase tracking-[0.18em] font-semibold",children:"Tasks for the Day"}),h.jsxs("div",{className:"flex items-center gap-1 p-0.5 rounded-lg border bg-black/10 border-white/10",children:[h.jsxs("button",{type:"button",onClick:()=>Ye("tasks"),className:"px-2 py-0.5 rounded text-[10px] font-semibold bg-violet-600 text-white",children:["Tasks (",tt,"/",e.length,")"]}),h.jsxs("button",{type:"button",onClick:()=>Ye("habits"),className:"px-2 py-0.5 rounded text-[10px] font-medium text-zinc-400 hover:text-white",children:["Habits (",qe,"/",l.length,")"]})]})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("button",{type:"button",onClick:()=>{window.confirm("Reset and uncheck all tasks for today?")&&e.forEach(ie=>{ie.completed&&t(ie.id)})},className:`p-1 rounded-md border transition-colors cursor-pointer ${de?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-600":"bg-white/10 hover:bg-white/20 border-white/10 text-zinc-300 hover:text-white"}`,title:"Reset today's tasks","aria-label":"Reset tasks for today",children:h.jsx(Mr,{className:"w-3.5 h-3.5"})}),h.jsx("button",{type:"button",onClick:()=>Ye("none"),className:"p-1 text-zinc-400 hover:text-white cursor-pointer","aria-label":"Close Tasks Panel",children:h.jsx(Tr,{className:"w-3.5 h-3.5"})})]})]}),h.jsxs("form",{onSubmit:Ke,className:"flex items-center gap-2 shrink-0",children:[h.jsx("input",{type:"text",placeholder:"Add task for today...",value:Ce,onChange:ie=>Ze(ie.target.value),className:"flex-1 cosmic-input rounded-xl px-3.5 py-2 text-xs placeholder-zinc-500",autoFocus:!0}),h.jsx("button",{type:"submit",disabled:!Ce.trim(),className:"w-8 h-8 rounded-xl bg-violet-600 hover:bg-violet-500 text-white disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all shrink-0 cursor-pointer shadow-sm",children:h.jsx(ec,{className:"w-4 h-4"})})]}),h.jsx("div",{className:"max-h-56 overflow-y-auto space-y-1.5 pr-1",children:e.map(ie=>h.jsxs("div",{className:`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs select-none group ${ie.completed?de?"bg-zinc-100/60 border-zinc-200/60 text-zinc-400":"bg-white/[0.015] border-white/[0.04] text-zinc-500":de?"bg-white/80 hover:bg-white border-zinc-200/80 text-zinc-800":"bg-white/[0.035] hover:bg-white/[0.07] border-white/[0.08] hover:border-violet-400/20 text-zinc-200"}`,children:[h.jsxs("div",{className:"flex items-center gap-2.5 truncate flex-1 cursor-pointer pr-2",onClick:()=>t(ie.id),children:[h.jsx("div",{className:`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border transition-all ${ie.completed?"bg-emerald-500 border-emerald-400 text-white shadow-sm":de?"border-zinc-300 group-hover:border-violet-500":"border-white/[0.25] group-hover:border-violet-400"}`,children:ie.completed&&h.jsx(Er,{className:"w-2.5 h-2.5 stroke-[3]"})}),h.jsx("span",{className:`font-sans truncate ${ie.completed?"line-through text-zinc-400":de?"text-zinc-800 font-medium":"text-zinc-200"}`,children:ie.text})]}),h.jsx("button",{type:"button",onClick:()=>o(ie.id),className:"opacity-0 group-hover:opacity-100 text-zinc-400 hover:text-red-400 transition-opacity p-1 cursor-pointer",children:h.jsx(oo,{className:"w-3.5 h-3.5"})})]},ie.id))}),h.jsxs("div",{className:`pt-2.5 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${de?"border-zinc-200 text-zinc-600":"border-white/[0.08] text-zinc-400"}`,children:[h.jsxs("span",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400"}),"Day Progress"]}),h.jsxs("span",{className:`font-display font-medium tabular-nums ${de?"text-zinc-900":"text-zinc-200"}`,children:[xt,"% done"]})]})]}),At==="habits"&&h.jsxs("div",{className:`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${de?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[h.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${de?"border-zinc-200":"border-white/[0.08]"}`,children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("h2",{className:"text-xs font-display uppercase tracking-[0.18em] font-semibold",children:"Daily Rhythm Pulse"}),h.jsxs("div",{className:"flex items-center gap-1 p-0.5 rounded-lg border bg-black/10 border-white/10",children:[h.jsxs("button",{type:"button",onClick:()=>Ye("tasks"),className:"px-2 py-0.5 rounded text-[10px] font-medium text-zinc-400 hover:text-white",children:["Tasks (",tt,"/",e.length,")"]}),h.jsxs("button",{type:"button",onClick:()=>Ye("habits"),className:"px-2 py-0.5 rounded text-[10px] font-semibold bg-violet-600 text-white",children:["Habits (",qe,"/",l.length,")"]})]})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("button",{type:"button",onClick:()=>{window.confirm("Reset today's habit checkmarks?")&&l.forEach(ie=>{ie.completed&&u(ie.id)})},className:`p-1 rounded-md border transition-colors cursor-pointer ${de?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-600":"bg-white/10 hover:bg-white/20 border-white/10 text-zinc-300 hover:text-white"}`,title:"Reset today's habits","aria-label":"Reset habits for today",children:h.jsx(Mr,{className:"w-3.5 h-3.5"})}),h.jsx("button",{type:"button",onClick:()=>{const ie=prompt("Add new daily habit:");ie&&f(ie)},className:`p-1 rounded-md border transition-colors cursor-pointer ${de?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/10 hover:bg-white/20 border-white/10 text-white"}`,title:"Add habit","aria-label":"Add new daily habit",children:h.jsx(ec,{className:"w-3.5 h-3.5"})}),h.jsx("button",{type:"button",onClick:()=>Ye("none"),className:"p-1 text-zinc-400 hover:text-white cursor-pointer","aria-label":"Close Habits Panel",children:h.jsx(Tr,{className:"w-3.5 h-3.5"})})]})]}),h.jsx("div",{className:"max-h-56 overflow-y-auto space-y-1.5 pr-1",children:l.map(ie=>h.jsxs("div",{onClick:()=>u(ie.id),className:`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs cursor-pointer select-none group ${ie.completed?de?"bg-zinc-100/60 border-zinc-200/60 text-zinc-400":"bg-white/[0.015] border-white/[0.04] text-zinc-400":de?"bg-white/80 hover:bg-white border-zinc-200/80 text-zinc-800":"bg-white/[0.035] hover:bg-white/[0.07] border-white/[0.08] hover:border-violet-400/20 text-zinc-200"}`,children:[h.jsxs("div",{className:"flex flex-col gap-0.5 truncate pr-2",children:[h.jsx("span",{className:`font-sans truncate ${ie.completed?"line-through text-zinc-400":de?"text-zinc-800 font-medium":"text-zinc-200"}`,children:ie.name}),h.jsx("div",{className:"flex items-center gap-1.5 text-[10px] font-mono",children:ie.streak>0?h.jsxs("span",{className:"text-amber-500 flex items-center gap-0.5 font-medium",children:[h.jsx(mg,{className:"w-3 h-3 fill-amber-500"})," ",ie.streak," day streak"]}):h.jsx("span",{className:de?"text-zinc-500":"text-zinc-400",children:"Ready today"})})]}),h.jsx("div",{className:`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border transition-all ${ie.completed?"bg-emerald-500 border-emerald-400 text-white shadow-sm":de?"border-zinc-300 group-hover:border-violet-500":"border-white/[0.25] group-hover:border-violet-400"}`,children:ie.completed&&h.jsx(Er,{className:"w-2.5 h-2.5 stroke-[3]"})})]},ie.id))}),h.jsxs("div",{className:`pt-2.5 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${de?"border-zinc-200 text-zinc-600":"border-white/[0.08] text-zinc-400"}`,children:[h.jsxs("div",{className:`flex items-center gap-1.5 ${de?"text-zinc-700":"text-zinc-400"}`,children:[h.jsx(Ts,{className:`w-3.5 h-3.5 ${de?"text-amber-500":"text-violet-300"}`}),h.jsx("span",{children:"Daily Consistency"})]}),h.jsxs("span",{className:`font-display font-medium tabular-nums ${de?"text-zinc-900":"text-zinc-200"}`,children:[_t,"% kept"]})]})]}),At==="timer"&&h.jsxs("div",{className:`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${de?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[h.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${de?"border-zinc-200":"border-white/[0.08]"}`,children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(lc,{className:`w-4 h-4 ${de?"text-violet-700":"text-violet-300"}`}),h.jsx("h2",{className:"text-xs font-display uppercase tracking-[0.18em] font-semibold",children:"Deep Study Console"})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("div",{className:"flex items-center gap-1 p-0.5 rounded-lg border bg-black/10 border-white/10",children:[h.jsx("button",{type:"button",onClick:()=>R("pomodoro"),className:`px-2 py-0.5 rounded text-[10px] font-semibold transition-all cursor-pointer ${ct==="pomodoro"?"bg-violet-600 text-white":de?"text-zinc-600 hover:text-zinc-950":"text-zinc-400 hover:text-white"}`,children:"Pomodoro Sprint"}),h.jsx("button",{type:"button",onClick:()=>R("stopwatch"),className:`px-2 py-0.5 rounded text-[10px] font-medium transition-all cursor-pointer ${ct==="stopwatch"?"bg-violet-600 text-white":de?"text-zinc-600 hover:text-zinc-950":"text-zinc-400 hover:text-white"}`,children:"Open Stopwatch"})]}),h.jsx("button",{type:"button",onClick:()=>Ye("none"),className:"p-1 text-zinc-400 hover:text-white cursor-pointer",children:h.jsx(Tr,{className:"w-3.5 h-3.5"})})]})]}),ct==="pomodoro"?h.jsxs("div",{className:"space-y-3",children:[h.jsx("div",{className:"flex items-center justify-between gap-1.5",children:[{label:"25m / 5m",focus:25,brk:5},{label:"50m / 10m",focus:50,brk:10},{label:"15m Rapid",focus:15,brk:3}].map(ie=>{const $t=j.focusDurationMinutes===ie.focus&&j.breakDurationMinutes===ie.brk;return h.jsx("button",{type:"button",onClick:()=>{W(Ht=>({...Ht,focusDurationMinutes:ie.focus,breakDurationMinutes:ie.brk})),M==="idle"&&B(ie.focus)},className:`flex-1 py-1 px-2 rounded-xl text-[10px] font-mono font-medium border transition-all cursor-pointer ${$t?"bg-violet-600 text-white border-violet-400/50 shadow-sm":de?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 border-white/[0.08]"}`,children:ie.label},ie.label)})}),h.jsxs("div",{className:"text-center py-2 relative",children:[h.jsxs("div",{className:`text-5xl font-display font-bold tracking-tight leading-none tabular-nums ${de?"text-zinc-950":"text-white"}`,children:[ui,":",Si]}),h.jsx("div",{className:"flex items-center justify-center gap-2 mt-2",children:h.jsx("span",{className:`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${M==="break"?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 animate-pulse":M==="focus"?"bg-violet-500/20 text-violet-300 border border-violet-500/30 animate-pulse":M==="paused"?"bg-amber-500/20 text-amber-300 border border-amber-500/30":de?"bg-zinc-100 text-zinc-600 border border-zinc-200":"bg-white/[0.06] text-zinc-400 border border-white/[0.08]"}`,children:M==="break"?"RECOVERY BREAK":M==="focus"?"FOCUS SPRINT":M==="paused"?"PAUSED":"READY TO SPRINT"})}),h.jsx("div",{className:"w-full bg-white/[0.06] h-1.5 rounded-full mt-3 overflow-hidden",children:h.jsx("div",{className:`h-full transition-all duration-1000 ${M==="break"?"bg-cyan-400":"bg-violet-500"}`,style:{width:`${Math.round(bi*100)}%`}})})]}),h.jsxs("div",{className:"flex items-center justify-between text-[11px] px-1 font-mono",children:[h.jsxs("button",{type:"button",onClick:ce,className:`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${j.displayMode==="numbers"?"bg-violet-500/20 border-violet-500/40 text-violet-300":de?"bg-zinc-100 border-zinc-200 text-zinc-600":"bg-white/[0.04] border-white/[0.08] text-zinc-400"}`,children:[h.jsx(FM,{className:"w-3.5 h-3.5"}),h.jsxs("span",{children:["Clock: ",j.displayMode==="numbers"?"Countdown Digits":"Wall Clock"]})]}),h.jsxs("button",{type:"button",onClick:()=>W(ie=>({...ie,soundEnabled:!ie.soundEnabled})),className:`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${j.soundEnabled?"bg-emerald-500/20 border-emerald-500/40 text-emerald-300":de?"bg-zinc-100 border-zinc-200 text-zinc-600":"bg-white/[0.04] border-white/[0.08] text-zinc-400"}`,children:[h.jsx(MM,{className:"w-3.5 h-3.5"}),h.jsxs("span",{children:["Chime: ",j.soundEnabled?"ON":"OFF"]})]})]}),h.jsxs("div",{className:"flex gap-2",children:[h.jsx("button",{type:"button",onClick:X,className:`flex-1 py-2.5 rounded-xl font-display text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 border transition-all cursor-pointer ${de?"bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-800":"bg-violet-600 hover:bg-violet-500 text-white border-violet-400/30"}`,children:M==="focus"?h.jsxs(h.Fragment,{children:[h.jsx(nr,{className:"w-4 h-4"}),h.jsx("span",{children:"Pause Focus"})]}):M==="paused"?h.jsxs(h.Fragment,{children:[h.jsx(Vi,{className:"w-4 h-4 fill-current"}),h.jsx("span",{children:"Resume Focus"})]}):M==="break"?h.jsxs(h.Fragment,{children:[h.jsx(TM,{className:"w-4 h-4"}),h.jsx("span",{children:"Pause Break"})]}):h.jsxs(h.Fragment,{children:[h.jsx(Vi,{className:"w-4 h-4 ml-0.5 fill-current"}),h.jsxs("span",{children:["Start Focus (",j.focusDurationMinutes,"m)"]})]})}),h.jsx("button",{type:"button",onClick:te,className:`px-3 py-2.5 rounded-xl border text-xs font-medium transition-colors cursor-pointer ${de?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white border-white/[0.08]"}`,title:M==="focus"?"Skip directly to break":"Skip back to focus",children:h.jsx(dc,{className:"w-4 h-4"})}),h.jsx("button",{type:"button",onClick:z,className:`px-3 py-2.5 rounded-xl border transition-colors cursor-pointer ${de?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white border-white/[0.08]"}`,title:"Reset Pomodoro",children:h.jsx(Mr,{className:"w-3.5 h-3.5"})})]})]}):h.jsxs("div",{className:"space-y-3",children:[h.jsxs("div",{className:"text-center py-2",children:[h.jsx("div",{className:`text-5xl font-display font-light tracking-widest leading-none tabular-nums ${de?"text-zinc-900":"text-white"}`,children:nt(w)}),h.jsxs("p",{className:`text-[10px] font-display tracking-[0.2em] uppercase mt-2 ${de?"text-zinc-500":"text-zinc-400"}`,children:[y," • ",ht]})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[h.jsx("input",{type:"text",value:ht,onChange:ie=>Bt(ie.target.value),placeholder:"Mode (e.g. Deep Work)",className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"}),h.jsx("input",{type:"text",value:st,onChange:ie=>{We(ie.target.value),b(ie.target.value)},placeholder:"Subject (e.g. Engineering)",className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"})]}),h.jsxs("div",{className:"flex gap-2",children:[h.jsxs("button",{type:"button",onClick:D,className:`flex-1 py-2.5 rounded-xl font-display text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 border transition-all cursor-pointer ${de?"bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-800":"bg-violet-600 hover:bg-violet-500 text-white border-violet-400/30"}`,children:[E?h.jsx(nr,{className:"w-4 h-4"}):h.jsx(Vi,{className:"w-4 h-4 ml-0.5 fill-current"}),h.jsx("span",{children:E?"Pause Focus":"Start Focus"})]}),h.jsx("button",{type:"button",onClick:U,className:`px-3 py-2.5 rounded-xl border transition-colors cursor-pointer ${de?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white border-white/[0.08]"}`,title:"Reset stopwatch",children:h.jsx(Mr,{className:"w-3.5 h-3.5"})})]})]}),h.jsxs("div",{className:`p-3 rounded-2xl border transition-all ${de?"bg-zinc-50 border-zinc-200":"bg-white/[0.025] border-white/[0.08]"}`,children:[h.jsxs("div",{className:"flex items-center justify-between text-[11px] mb-2",children:[h.jsxs("span",{className:`font-sans font-medium flex items-center gap-1.5 ${de?"text-zinc-800":"text-zinc-200"}`,children:[h.jsx(lc,{className:"w-3.5 h-3.5 text-amber-400"}),h.jsx("span",{children:"Forgot to start timer? Log past focus:"})]}),ln&&h.jsx("span",{className:"text-[10px] font-mono text-emerald-400 animate-fadeIn font-semibold",children:ln})]}),h.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[[30,45,60,90,120].map(ie=>h.jsxs("button",{type:"button",onClick:()=>Hn(ie),className:`px-2.5 py-1 rounded-xl text-[10px] font-mono font-medium border transition-all cursor-pointer ${de?"bg-white hover:bg-zinc-100 text-zinc-800 border-zinc-200 shadow-xs":"bg-white/[0.05] hover:bg-white/[0.12] text-zinc-300 hover:text-white border-white/[0.1]"}`,title:`Log ${ie>=60?ie/60+" hours":ie+" minutes"} past study`,children:["+",ie>=60?`${ie/60}h`:`${ie}m`]},ie)),h.jsxs("form",{onSubmit:bn,className:"flex items-center gap-1 ml-auto",children:[h.jsx("input",{type:"number",min:"1",max:"720",value:tn,onChange:ie=>rn(ie.target.value),placeholder:"Mins",className:"w-14 cosmic-input rounded-lg px-2 py-0.5 text-[10px] font-mono text-center"}),h.jsx("button",{type:"submit",className:"px-2.5 py-0.5 rounded-lg text-[10px] font-medium bg-amber-400 hover:bg-amber-300 text-black font-semibold cursor-pointer transition-colors",children:"+ Add"})]})]}),N.length>0&&h.jsxs("div",{className:"pt-2 mt-2 border-t border-white/[0.06] space-y-1",children:[h.jsx("span",{className:`text-[10px] font-mono uppercase tracking-wider block ${de?"text-zinc-500":"text-zinc-400"}`,children:"Recent Focus Logs:"}),h.jsx("div",{className:"max-h-20 overflow-y-auto space-y-1 pr-1 text-[11px] font-mono",children:N.slice(0,3).map(ie=>h.jsxs("div",{className:`flex items-center justify-between px-2 py-1 rounded-lg ${de?"bg-zinc-100 text-zinc-800":"bg-white/[0.03] text-zinc-300"}`,children:[h.jsxs("span",{className:"truncate",children:[ie.subject," · ",Math.round(ie.durationSeconds/60),"m"]}),h.jsx("button",{type:"button",onClick:()=>L(ie.id),className:"text-zinc-500 hover:text-red-400 p-0.5 transition-colors cursor-pointer",title:"Remove logged entry",children:h.jsx(oo,{className:"w-3 h-3"})})]},ie.id))})]})]}),h.jsxs("div",{className:`pt-2.5 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${de?"border-zinc-200 text-zinc-600":"border-white/[0.08] text-zinc-400"}`,children:[h.jsxs("span",{children:["Weekly: ",h.jsxs("strong",{className:`font-display ${de?"text-zinc-900":"text-zinc-200"}`,children:[zt,"h"]})," / 15h"]}),h.jsxs("span",{className:`font-display font-medium tabular-nums ${de?"text-zinc-900":"text-zinc-200"}`,children:[dn,"% quota"]})]})]}),At==="wellness"&&h.jsxs("div",{className:`w-full max-w-sm p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${de?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[h.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-white/10",children:[h.jsxs("span",{className:"text-xs font-display uppercase tracking-widest font-semibold flex items-center gap-1.5",children:[h.jsx(Ts,{className:"w-3.5 h-3.5 text-amber-400"}),"Daily Wellness Pulse"]}),h.jsx("button",{onClick:()=>Ye("none"),className:"p-1 text-zinc-400 hover:text-white",children:h.jsx(Tr,{className:"w-3.5 h-3.5"})})]}),h.jsxs("div",{className:"flex items-center justify-between py-1 text-xs",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(AM,{className:"w-4 h-4 text-sky-400"}),h.jsx("span",{children:"Hydration Target"})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("button",{type:"button",onClick:()=>re(ie=>Math.max(0,ie-12.5)),className:"w-6 h-6 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center font-bold",children:"-"}),h.jsxs("span",{className:"font-mono font-bold w-12 text-center",children:[Math.round($/100*8)," / 8"]}),h.jsx("button",{type:"button",onClick:()=>re(ie=>Math.min(100,ie+12.5)),className:"w-6 h-6 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center font-bold",children:"+"})]})]}),h.jsxs("div",{className:"flex items-center justify-between py-1 text-xs",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(uc,{className:"w-4 h-4 text-violet-400"}),h.jsx("span",{children:"Sleep Duration"})]}),h.jsxs("button",{type:"button",onClick:()=>ee(O%12+1),className:"px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 font-mono font-bold text-xs",children:[O," Hours (Click to Cycle)"]})]}),h.jsxs("div",{className:"flex items-center justify-between py-1 text-xs",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(IM,{className:"w-4 h-4 text-amber-400"}),h.jsx("span",{children:"Day Score"})]}),h.jsxs("button",{type:"button",onClick:()=>q(k>=10?1:k+1),className:"px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 font-mono font-bold text-xs text-amber-400",children:[k," / 10 ★"]})]}),h.jsxs("div",{className:`pt-3 mt-1 border-t flex items-center justify-between ${de?"border-zinc-200":"border-white/10"}`,children:[h.jsxs("div",{className:"flex flex-col",children:[h.jsxs("span",{className:"text-[11px] font-medium flex items-center gap-1",children:[h.jsx(Mr,{className:"w-3 h-3 text-violet-400"}),"Day Reset"]}),h.jsxs("span",{className:`text-[9px] font-mono ${de?"text-zinc-500":"text-zinc-400"}`,children:["Active: ",pe]})]}),h.jsxs("button",{type:"button",onClick:()=>{window.confirm("Start a fresh day? This will uncheck today's tasks & habits and reset hydration to 0%.")&&Y()},className:`px-3 py-1.5 rounded-xl border text-[11px] font-display uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${de?"bg-violet-50 hover:bg-violet-100 text-violet-700 border-violet-200":"bg-violet-600/30 hover:bg-violet-600/50 text-violet-200 border-violet-400/40 hover:border-violet-400"}`,title:"Reset daily progress for a fresh day",children:[h.jsx(Mr,{className:"w-3 h-3"}),h.jsx("span",{children:"Start Fresh Day"})]})]})]})]}),!oe&&!ot&&h.jsx("footer",{className:"relative shrink-0 flex items-center justify-center w-full z-20 pb-2",children:h.jsxs("nav",{"aria-label":"Sanctuary Focus Dock",className:`flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-full backdrop-blur-2xl border shadow-2xl transition-all ${de?"bg-white/85 border-zinc-200/90 text-zinc-800 shadow-[0_15px_40px_rgba(0,0,0,0.1)]":"bg-[#090b16]/80 border-white/[0.12] text-zinc-200 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"}`,children:[h.jsxs("div",{className:`flex items-center rounded-full border transition-all ${Qt?M==="break"?"bg-cyan-500/20 border-cyan-500/40 text-cyan-300":"bg-violet-600/25 border-violet-500/40 text-violet-300":E?"bg-emerald-500/20 border-emerald-500/40 text-emerald-300":de?"bg-zinc-100/90 border-zinc-200 text-zinc-800":"bg-white/[0.04] border-white/[0.08] text-zinc-300"}`,children:[h.jsxs("button",{type:"button",onClick:Qt?X:E?D:()=>B(),className:"pl-3 pr-1.5 py-1.5 flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity",title:Qt?M==="paused"?"Resume Pomodoro":"Pause Pomodoro":E?"Pause focus timer":"Start Pomodoro Focus",children:[Qt?M==="paused"?h.jsx(Vi,{className:"w-3.5 h-3.5 text-amber-400 fill-current"}):h.jsx(nr,{className:"w-3.5 h-3.5 text-violet-400 animate-pulse"}):E?h.jsx(nr,{className:"w-3.5 h-3.5 text-emerald-400 animate-pulse"}):h.jsx(Vi,{className:"w-3.5 h-3.5 text-zinc-400 fill-current"}),h.jsx("span",{className:"font-mono text-xs font-semibold tabular-nums",children:Qt?`${ui}:${Si}`:nt(w)})]}),h.jsx("button",{type:"button",onClick:()=>{R(Qt?"pomodoro":"stopwatch"),Ye(ie=>ie==="timer"?"none":"timer")},className:`pr-3 pl-1.5 py-1.5 text-[11px] font-sans border-l transition-colors cursor-pointer ${de?"border-zinc-200 hover:text-black":"border-white/10 hover:text-white"}`,title:"Expand Deep Study Console",children:h.jsx("span",{children:Qt?M==="break"?"Break":"Sprint":st})})]}),h.jsxs("button",{type:"button",onClick:()=>Ye(ie=>ie==="tasks"?"none":"tasks"),className:`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-sans transition-all cursor-pointer ${At==="tasks"||At==="habits"?"bg-violet-600 text-white border-violet-400":de?"bg-zinc-100/90 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300 hover:text-white"}`,title:"Daily Flow (Tasks & Habits)",children:[h.jsx(LM,{className:"w-3.5 h-3.5 text-violet-400"}),h.jsx("span",{children:"Flow"}),h.jsxs("span",{className:`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${de?"bg-zinc-200/90 text-zinc-800":"bg-white/10 text-violet-200"}`,children:[tt+qe,"/",e.length+l.length]})]}),h.jsxs("div",{onClick:()=>Q(!0),className:`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs cursor-pointer group transition-all ${Ie||Ve?be==="youtube"?"bg-red-600/30 border-red-500/40 text-red-200":"bg-violet-600/30 border-violet-500/40 text-violet-200":de?"bg-zinc-100/90 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300 hover:text-white"}`,title:"Open Audio Sanctuary",children:[be==="youtube"&&Ve?h.jsx(lo,{className:"w-3.5 h-3.5 text-red-500 animate-pulse"}):h.jsx(cc,{className:`w-3.5 h-3.5 ${Ie||Ve?"text-violet-300 animate-pulse":"text-zinc-400"}`}),h.jsx("span",{className:"max-w-[80px] sm:max-w-[120px] truncate text-[11px] font-medium",children:be==="youtube"?Xe?Xe.title:"YouTube":_n.title}),h.jsx(qg,{isPlaying:be==="youtube"?Ve:Ie,color:be==="youtube"?"#ef4444":de?"#7c3aed":_n.accentColor,className:"w-8 h-2.5",barCount:4}),h.jsx("button",{type:"button",onClick:ie=>{ie.stopPropagation(),be==="youtube"?it():Ie?Pe():$e(rt)},className:"w-5 h-5 rounded-md flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors",title:(be==="youtube"?Ve:Ie)?"Pause audio":"Play audio",children:(be==="youtube"?Ve:Ie)?h.jsx(nr,{className:"w-2.5 h-2.5 fill-current"}):h.jsx(Vi,{className:"w-2.5 h-2.5 fill-current ml-0.5"})})]})]})}),Lt&&h.jsxs("div",{className:"fixed inset-0 z-50 flex",children:[h.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm",onClick:()=>ke(!1)}),h.jsxs("aside",{className:`relative z-10 w-84 sm:w-96 max-w-[92vw] h-full backdrop-blur-3xl border-r shadow-2xl pt-16 sm:pt-20 px-6 pb-6 flex flex-col justify-between ${de?"bg-[#faf8f4]/98 border-zinc-200 text-zinc-900":"bg-[#0d0f17]/95 border-white/[0.1] text-white"}`,children:[h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{className:`flex items-center justify-between pb-3.5 border-b ${de?"border-zinc-200":"border-white/[0.08]"}`,children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(r0,{className:`w-4 h-4 ${de?"text-zinc-700":"text-zinc-300"}`}),h.jsx("h3",{className:`text-xs font-sans uppercase tracking-[0.16em] font-semibold ${de?"text-zinc-900":"text-white"}`,children:"Daily Rhythm"})]}),h.jsx("button",{onClick:()=>ke(!1),className:`transition-colors cursor-pointer ${de?"text-zinc-500 hover:text-black":"text-zinc-400 hover:text-white"}`,children:h.jsx(Tr,{className:"w-4 h-4"})})]}),h.jsx("div",{className:"py-1",children:h.jsx(jM,{routines:g,activeBlock:d,activeMinutesLeft:S,isLight:de})}),h.jsxs("div",{className:"space-y-2.5 text-xs overflow-y-auto max-h-[50vh] pr-1",children:[g.map(ie=>{const $t=(d==null?void 0:d.id)===ie.id;return h.jsxs("div",{className:`p-3.5 rounded-2xl border transition-all relative group ${$t?de?"bg-amber-50/90 border-amber-300 shadow-sm":"bg-white/[0.04] border-amber-400/40 shadow-md ring-1 ring-amber-400/20":de?"bg-white/80 border-zinc-200 shadow-xs":"bg-white/[0.02] border-white/[0.07]"}`,children:[h.jsxs("div",{className:"flex items-center justify-between pb-1.5",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:`w-2 h-2 rounded-full ${$t?"bg-amber-400":"bg-zinc-600"}`}),h.jsx("span",{className:`font-semibold tracking-tight ${$t?"text-white font-bold":de?"text-zinc-800":"text-zinc-200"}`,children:ie.title}),$t&&h.jsx("span",{className:"text-[9px] font-mono px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/25 font-semibold uppercase tracking-wider",children:"Current"})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:`text-[10px] font-mono tabular-nums ${de?"text-zinc-500":"text-zinc-400"}`,children:ie.timeRange}),g.length>1&&h.jsx("button",{type:"button",onClick:()=>_(ie.id),className:"opacity-0 group-hover:opacity-100 p-1 text-zinc-400 hover:text-red-400 transition-opacity cursor-pointer",title:"Delete routine block",children:h.jsx(oo,{className:"w-3 h-3"})})]})]}),h.jsx("p",{className:`text-[11px] leading-relaxed ${de?"text-zinc-600":"text-zinc-400"}`,children:ie.description})]},ie.id)}),sn?h.jsxs("form",{onSubmit:ie=>{ie.preventDefault(),It.trim()&&Gn.trim()&&(m({title:It.trim(),timeRange:Jt.trim()||"Flexible",description:Gn.trim(),iconType:"custom"}),Et(""),nn(""),Vn(""),gt(!1))},className:`p-3.5 rounded-2xl border space-y-2.5 ${de?"bg-white border-zinc-300 shadow-sm":"bg-white/[0.04] border-white/[0.1]"}`,children:[h.jsx("input",{type:"text",placeholder:"Title (e.g. Creative Sprint)",value:It,onChange:ie=>Et(ie.target.value),className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs",required:!0}),h.jsx("input",{type:"text",placeholder:"Time range (e.g. 14:00 – 16:00)",value:Jt,onChange:ie=>nn(ie.target.value),className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"}),h.jsx("textarea",{placeholder:"Intentions / Focus areas...",value:Gn,onChange:ie=>Vn(ie.target.value),className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs resize-none h-16",required:!0}),h.jsxs("div",{className:"flex items-center justify-end gap-2 pt-1",children:[h.jsx("button",{type:"button",onClick:()=>gt(!1),className:`px-3 py-1 rounded-lg text-[11px] transition-colors ${de?"text-zinc-600 hover:text-black":"text-zinc-400 hover:text-white"}`,children:"Cancel"}),h.jsx("button",{type:"submit",className:"px-3.5 py-1.5 rounded-lg text-[11px] bg-amber-400 hover:bg-amber-300 text-black font-semibold cursor-pointer transition-colors",children:"Add Block"})]})]}):h.jsxs("button",{type:"button",onClick:()=>gt(!0),className:`w-full py-2.5 rounded-xl border border-dashed flex items-center justify-center gap-1.5 text-[11px] transition-all cursor-pointer ${de?"border-zinc-300 hover:border-zinc-400 text-zinc-600 hover:text-zinc-900 bg-white/40":"border-white/10 hover:border-white/20 text-zinc-400 hover:text-white bg-white/[0.01]"}`,children:[h.jsx(ec,{className:"w-3 h-3"}),h.jsx("span",{children:"Add Custom Routine Block"})]})]})]}),h.jsxs("div",{className:"flex items-center gap-2 pt-2",children:[h.jsx("button",{type:"button",onClick:v,className:`px-3 py-2.5 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${de?"border-zinc-200 text-zinc-600 hover:bg-zinc-100":"border-white/10 text-zinc-400 hover:bg-white/[0.05] hover:text-white"}`,title:"Reset to default protocols",children:"Reset"}),h.jsx("button",{type:"button",onClick:()=>ke(!1),className:`flex-1 py-2.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${de?"bg-zinc-900 hover:bg-zinc-800 text-white":"bg-white/[0.06] hover:bg-white/[0.12] text-white"}`,children:"Close"})]})]})]}),h.jsx(WM,{isOpen:pn,onClose:()=>Mt(!1)}),h.jsx(GM,{isOpen:bt,onClose:()=>Vt(!1)}),h.jsx(VM,{isOpen:on,onClose:()=>Q(!1)})]})},XM=()=>{const{wallpaperTheme:s,appTheme:e}=rs(),t=e==="light";return h.jsxs("div",{"data-theme":s,className:`theme-${e} relative w-screen h-screen max-h-screen overflow-hidden text-[var(--text-primary)] font-sans transition-colors duration-200 ${t?"bg-[#f7f5f0]/95":"bg-[#060814]"}`,children:[h.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--card-bg-elevated)] focus:text-[var(--text-primary)] focus:rounded-xl focus:border focus:border-[var(--card-border)] focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-violet-400 font-sans text-xs font-semibold",children:"Skip to main content"}),h.jsx(jv,{}),h.jsx(hM,{}),h.jsx(OM,{}),h.jsx("div",{className:"pointer-events-none fixed inset-0 z-20 dreamy-grain opacity-15"}),h.jsx("main",{id:"main-content",className:"w-full h-full overflow-y-auto lg:overflow-hidden relative z-10",children:h.jsx($M,{})})]})};function YM(){return h.jsx(Wv,{children:h.jsx(XM,{})})}const l0=document.getElementById("root");l0&&Ov.createRoot(l0).render(h.jsx(Dv.StrictMode,{children:h.jsx(YM,{})}));
