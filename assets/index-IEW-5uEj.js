var Ov=Object.defineProperty;var Bv=(s,e,t)=>e in s?Ov(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Sr=(s,e,t)=>Bv(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function gm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Yu={exports:{}},Ja={},qu={exports:{}},Ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o0;function Hv(){if(o0)return Ft;o0=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),y=Symbol.iterator;function h(z){return z===null||typeof z!="object"?null:(z=y&&z[y]||z["@@iterator"],typeof z=="function"?z:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,M={};function v(z,I,oe){this.props=z,this.context=I,this.refs=M,this.updater=oe||w}v.prototype.isReactComponent={},v.prototype.setState=function(z,I){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,I,"setState")},v.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function _(){}_.prototype=v.prototype;function P(z,I,oe){this.props=z,this.context=I,this.refs=M,this.updater=oe||w}var k=P.prototype=new _;k.constructor=P,S(k,v.prototype),k.isPureReactComponent=!0;var D=Array.isArray,U=Object.prototype.hasOwnProperty,R={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function L(z,I,oe){var O,ne={},ie=null,Me=null;if(I!=null)for(O in I.ref!==void 0&&(Me=I.ref),I.key!==void 0&&(ie=""+I.key),I)U.call(I,O)&&!E.hasOwnProperty(O)&&(ne[O]=I[O]);var me=arguments.length-2;if(me===1)ne.children=oe;else if(1<me){for(var he=Array(me),Ye=0;Ye<me;Ye++)he[Ye]=arguments[Ye+2];ne.children=he}if(z&&z.defaultProps)for(O in me=z.defaultProps,me)ne[O]===void 0&&(ne[O]=me[O]);return{$$typeof:s,type:z,key:ie,ref:Me,props:ne,_owner:R.current}}function q(z,I){return{$$typeof:s,type:z.type,key:I,ref:z.ref,props:z.props,_owner:z._owner}}function W(z){return typeof z=="object"&&z!==null&&z.$$typeof===s}function j(z){var I={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(oe){return I[oe]})}var H=/\/+/g;function X(z,I){return typeof z=="object"&&z!==null&&z.key!=null?j(""+z.key):I.toString(36)}function F(z,I,oe,O,ne){var ie=typeof z;(ie==="undefined"||ie==="boolean")&&(z=null);var Me=!1;if(z===null)Me=!0;else switch(ie){case"string":case"number":Me=!0;break;case"object":switch(z.$$typeof){case s:case e:Me=!0}}if(Me)return Me=z,ne=ne(Me),z=O===""?"."+X(Me,0):O,D(ne)?(oe="",z!=null&&(oe=z.replace(H,"$&/")+"/"),F(ne,I,oe,"",function(Ye){return Ye})):ne!=null&&(W(ne)&&(ne=q(ne,oe+(!ne.key||Me&&Me.key===ne.key?"":(""+ne.key).replace(H,"$&/")+"/")+z)),I.push(ne)),1;if(Me=0,O=O===""?".":O+":",D(z))for(var me=0;me<z.length;me++){ie=z[me];var he=O+X(ie,me);Me+=F(ie,I,oe,he,ne)}else if(he=h(z),typeof he=="function")for(z=he.call(z),me=0;!(ie=z.next()).done;)ie=ie.value,he=O+X(ie,me++),Me+=F(ie,I,oe,he,ne);else if(ie==="object")throw I=String(z),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.");return Me}function Q(z,I,oe){if(z==null)return z;var O=[],ne=0;return F(z,O,"","",function(ie){return I.call(oe,ie,ne++)}),O}function ue(z){if(z._status===-1){var I=z._result;I=I(),I.then(function(oe){(z._status===0||z._status===-1)&&(z._status=1,z._result=oe)},function(oe){(z._status===0||z._status===-1)&&(z._status=2,z._result=oe)}),z._status===-1&&(z._status=0,z._result=I)}if(z._status===1)return z._result.default;throw z._result}var Y={current:null},se={transition:null},G={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:se,ReactCurrentOwner:R};function Z(){throw Error("act(...) is not supported in production builds of React.")}return Ft.Children={map:Q,forEach:function(z,I,oe){Q(z,function(){I.apply(this,arguments)},oe)},count:function(z){var I=0;return Q(z,function(){I++}),I},toArray:function(z){return Q(z,function(I){return I})||[]},only:function(z){if(!W(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},Ft.Component=v,Ft.Fragment=t,Ft.Profiler=o,Ft.PureComponent=P,Ft.StrictMode=r,Ft.Suspense=g,Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,Ft.act=Z,Ft.cloneElement=function(z,I,oe){if(z==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+z+".");var O=S({},z.props),ne=z.key,ie=z.ref,Me=z._owner;if(I!=null){if(I.ref!==void 0&&(ie=I.ref,Me=R.current),I.key!==void 0&&(ne=""+I.key),z.type&&z.type.defaultProps)var me=z.type.defaultProps;for(he in I)U.call(I,he)&&!E.hasOwnProperty(he)&&(O[he]=I[he]===void 0&&me!==void 0?me[he]:I[he])}var he=arguments.length-2;if(he===1)O.children=oe;else if(1<he){me=Array(he);for(var Ye=0;Ye<he;Ye++)me[Ye]=arguments[Ye+2];O.children=me}return{$$typeof:s,type:z.type,key:ne,ref:ie,props:O,_owner:Me}},Ft.createContext=function(z){return z={$$typeof:d,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},z.Provider={$$typeof:l,_context:z},z.Consumer=z},Ft.createElement=L,Ft.createFactory=function(z){var I=L.bind(null,z);return I.type=z,I},Ft.createRef=function(){return{current:null}},Ft.forwardRef=function(z){return{$$typeof:f,render:z}},Ft.isValidElement=W,Ft.lazy=function(z){return{$$typeof:b,_payload:{_status:-1,_result:z},_init:ue}},Ft.memo=function(z,I){return{$$typeof:m,type:z,compare:I===void 0?null:I}},Ft.startTransition=function(z){var I=se.transition;se.transition={};try{z()}finally{se.transition=I}},Ft.unstable_act=Z,Ft.useCallback=function(z,I){return Y.current.useCallback(z,I)},Ft.useContext=function(z){return Y.current.useContext(z)},Ft.useDebugValue=function(){},Ft.useDeferredValue=function(z){return Y.current.useDeferredValue(z)},Ft.useEffect=function(z,I){return Y.current.useEffect(z,I)},Ft.useId=function(){return Y.current.useId()},Ft.useImperativeHandle=function(z,I,oe){return Y.current.useImperativeHandle(z,I,oe)},Ft.useInsertionEffect=function(z,I){return Y.current.useInsertionEffect(z,I)},Ft.useLayoutEffect=function(z,I){return Y.current.useLayoutEffect(z,I)},Ft.useMemo=function(z,I){return Y.current.useMemo(z,I)},Ft.useReducer=function(z,I,oe){return Y.current.useReducer(z,I,oe)},Ft.useRef=function(z){return Y.current.useRef(z)},Ft.useState=function(z){return Y.current.useState(z)},Ft.useSyncExternalStore=function(z,I,oe){return Y.current.useSyncExternalStore(z,I,oe)},Ft.useTransition=function(){return Y.current.useTransition()},Ft.version="18.3.1",Ft}var l0;function Mf(){return l0||(l0=1,qu.exports=Hv()),qu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c0;function Gv(){if(c0)return Ja;c0=1;var s=Mf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(f,g,m){var b,y={},h=null,w=null;m!==void 0&&(h=""+m),g.key!==void 0&&(h=""+g.key),g.ref!==void 0&&(w=g.ref);for(b in g)r.call(g,b)&&!l.hasOwnProperty(b)&&(y[b]=g[b]);if(f&&f.defaultProps)for(b in g=f.defaultProps,g)y[b]===void 0&&(y[b]=g[b]);return{$$typeof:e,type:f,key:h,ref:w,props:y,_owner:o.current}}return Ja.Fragment=t,Ja.jsx=d,Ja.jsxs=d,Ja}var u0;function jv(){return u0||(u0=1,Yu.exports=Gv()),Yu.exports}var u=jv(),le=Mf();const Vv=gm(le);var Ml={},Ku={exports:{}},ui={},Zu={exports:{}},Ju={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0;function Wv(){return d0||(d0=1,(function(s){function e(se,G){var Z=se.length;se.push(G);e:for(;0<Z;){var z=Z-1>>>1,I=se[z];if(0<o(I,G))se[z]=G,se[Z]=I,Z=z;else break e}}function t(se){return se.length===0?null:se[0]}function r(se){if(se.length===0)return null;var G=se[0],Z=se.pop();if(Z!==G){se[0]=Z;e:for(var z=0,I=se.length,oe=I>>>1;z<oe;){var O=2*(z+1)-1,ne=se[O],ie=O+1,Me=se[ie];if(0>o(ne,Z))ie<I&&0>o(Me,ne)?(se[z]=Me,se[ie]=Z,z=ie):(se[z]=ne,se[O]=Z,z=O);else if(ie<I&&0>o(Me,Z))se[z]=Me,se[ie]=Z,z=ie;else break e}}return G}function o(se,G){var Z=se.sortIndex-G.sortIndex;return Z!==0?Z:se.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var g=[],m=[],b=1,y=null,h=3,w=!1,S=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(se){for(var G=t(m);G!==null;){if(G.callback===null)r(m);else if(G.startTime<=se)r(m),G.sortIndex=G.expirationTime,e(g,G);else break;G=t(m)}}function D(se){if(M=!1,k(se),!S)if(t(g)!==null)S=!0,ue(U);else{var G=t(m);G!==null&&Y(D,G.startTime-se)}}function U(se,G){S=!1,M&&(M=!1,_(L),L=-1),w=!0;var Z=h;try{for(k(G),y=t(g);y!==null&&(!(y.expirationTime>G)||se&&!j());){var z=y.callback;if(typeof z=="function"){y.callback=null,h=y.priorityLevel;var I=z(y.expirationTime<=G);G=s.unstable_now(),typeof I=="function"?y.callback=I:y===t(g)&&r(g),k(G)}else r(g);y=t(g)}if(y!==null)var oe=!0;else{var O=t(m);O!==null&&Y(D,O.startTime-G),oe=!1}return oe}finally{y=null,h=Z,w=!1}}var R=!1,E=null,L=-1,q=5,W=-1;function j(){return!(s.unstable_now()-W<q)}function H(){if(E!==null){var se=s.unstable_now();W=se;var G=!0;try{G=E(!0,se)}finally{G?X():(R=!1,E=null)}}else R=!1}var X;if(typeof P=="function")X=function(){P(H)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,Q=F.port2;F.port1.onmessage=H,X=function(){Q.postMessage(null)}}else X=function(){v(H,0)};function ue(se){E=se,R||(R=!0,X())}function Y(se,G){L=v(function(){se(s.unstable_now())},G)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(se){se.callback=null},s.unstable_continueExecution=function(){S||w||(S=!0,ue(U))},s.unstable_forceFrameRate=function(se){0>se||125<se?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<se?Math.floor(1e3/se):5},s.unstable_getCurrentPriorityLevel=function(){return h},s.unstable_getFirstCallbackNode=function(){return t(g)},s.unstable_next=function(se){switch(h){case 1:case 2:case 3:var G=3;break;default:G=h}var Z=h;h=G;try{return se()}finally{h=Z}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(se,G){switch(se){case 1:case 2:case 3:case 4:case 5:break;default:se=3}var Z=h;h=se;try{return G()}finally{h=Z}},s.unstable_scheduleCallback=function(se,G,Z){var z=s.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?z+Z:z):Z=z,se){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=Z+I,se={id:b++,callback:G,priorityLevel:se,startTime:Z,expirationTime:I,sortIndex:-1},Z>z?(se.sortIndex=Z,e(m,se),t(g)===null&&se===t(m)&&(M?(_(L),L=-1):M=!0,Y(D,Z-z))):(se.sortIndex=I,e(g,se),S||w||(S=!0,ue(U))),se},s.unstable_shouldYield=j,s.unstable_wrapCallback=function(se){var G=h;return function(){var Z=h;h=G;try{return se.apply(this,arguments)}finally{h=Z}}}})(Ju)),Ju}var f0;function $v(){return f0||(f0=1,Zu.exports=Wv()),Zu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0;function Xv(){if(h0)return ui;h0=1;var s=Mf(),e=$v();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){d(n,i),d(n+"Capture",i)}function d(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b={},y={};function h(n){return g.call(y,n)?!0:g.call(b,n)?!1:m.test(n)?y[n]=!0:(b[n]=!0,!1)}function w(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function S(n,i,a,c){if(i===null||typeof i>"u"||w(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function M(n,i,a,c,p,x,C){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=x,this.removeEmptyString=C}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){v[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];v[i]=new M(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){v[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){v[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){v[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){v[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){v[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){v[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){v[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function P(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,P);v[i]=new M(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,P);v[i]=new M(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,P);v[i]=new M(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){v[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),v.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){v[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function k(n,i,a,c){var p=v.hasOwnProperty(i)?v[i]:null;(p!==null?p.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(S(i,a,p,c)&&(a=null),c||p===null?h(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):p.mustUseProperty?n[p.propertyName]=a===null?p.type===3?!1:"":a:(i=p.attributeName,c=p.attributeNamespace,a===null?n.removeAttribute(i):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var D=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),R=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),j=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),se=Symbol.iterator;function G(n){return n===null||typeof n!="object"?null:(n=se&&n[se]||n["@@iterator"],typeof n=="function"?n:null)}var Z=Object.assign,z;function I(n){if(z===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);z=i&&i[1]||""}return`
`+z+n}var oe=!1;function O(n,i){if(!n||oe)return"";oe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(be){var c=be}Reflect.construct(n,[],i)}else{try{i.call()}catch(be){c=be}n.call(i.prototype)}else{try{throw Error()}catch(be){c=be}n()}}catch(be){if(be&&c&&typeof be.stack=="string"){for(var p=be.stack.split(`
`),x=c.stack.split(`
`),C=p.length-1,V=x.length-1;1<=C&&0<=V&&p[C]!==x[V];)V--;for(;1<=C&&0<=V;C--,V--)if(p[C]!==x[V]){if(C!==1||V!==1)do if(C--,V--,0>V||p[C]!==x[V]){var J=`
`+p[C].replace(" at new "," at ");return n.displayName&&J.includes("<anonymous>")&&(J=J.replace("<anonymous>",n.displayName)),J}while(1<=C&&0<=V);break}}}finally{oe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?I(n):""}function ne(n){switch(n.tag){case 5:return I(n.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return n=O(n.type,!1),n;case 11:return n=O(n.type.render,!1),n;case 1:return n=O(n.type,!0),n;default:return""}}function ie(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case E:return"Fragment";case R:return"Portal";case q:return"Profiler";case L:return"StrictMode";case X:return"Suspense";case F:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case j:return(n.displayName||"Context")+".Consumer";case W:return(n._context.displayName||"Context")+".Provider";case H:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Q:return i=n.displayName||null,i!==null?i:ie(n.type)||"Memo";case ue:i=n._payload,n=n._init;try{return ie(n(i))}catch{}}return null}function Me(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(i);case 8:return i===L?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function he(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ye(n){var i=he(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,x=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return p.call(this)},set:function(C){c=""+C,x.call(this,C)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(C){c=""+C},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function $e(n){n._valueTracker||(n._valueTracker=Ye(n))}function Ne(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=he(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function je(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function qe(n,i){var a=i.checked;return Z({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function mt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=me(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function xt(n,i){i=i.checked,i!=null&&k(n,"checked",i,!1)}function wt(n,i){xt(n,i);var a=me(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?kt(n,i.type,a):i.hasOwnProperty("defaultValue")&&kt(n,i.type,me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function yt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function kt(n,i,a){(i!=="number"||je(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var _e=Array.isArray;function Lt(n,i,a,c){if(n=n.options,i){i={};for(var p=0;p<a.length;p++)i["$"+a[p]]=!0;for(a=0;a<n.length;a++)p=i.hasOwnProperty("$"+n[a].value),n[a].selected!==p&&(n[a].selected=p),p&&c&&(n[a].defaultSelected=!0)}else{for(a=""+me(a),i=null,p=0;p<n.length;p++){if(n[p].value===a){n[p].selected=!0,c&&(n[p].defaultSelected=!0);return}i!==null||n[p].disabled||(i=n[p])}i!==null&&(i.selected=!0)}}function cn(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return Z({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function gn(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(_e(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:me(a)}}function ee(n,i){var a=me(i.value),c=me(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function vn(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Et(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Et(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ie,Kt=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,p){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,p)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ie=Ie||document.createElement("div"),Ie.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ie.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ot(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ze={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},N=["Webkit","ms","Moz","O"];Object.keys(Ze).forEach(function(n){N.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ze[i]=Ze[n]})});function T(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ze.hasOwnProperty(n)&&Ze[n]?(""+i).trim():i+"px"}function ae(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,p=T(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,p):n[a]=p}}var Le=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ee(n,i){if(i){if(Le[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ke(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ze=null;function Se(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Te=null,Oe=null,$=null;function Ae(n){if(n=Ua(n)){if(typeof Te!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Oo(i),Te(n.stateNode,n.type,i))}}function we(n){Oe?$?$.push(n):$=[n]:Oe=n}function Re(){if(Oe){var n=Oe,i=$;if($=Oe=null,Ae(n),i)for(n=0;n<i.length;n++)Ae(i[n])}}function ve(n,i){return n(i)}function Ce(){}var He=!1;function nt(n,i,a){if(He)return n(i,a);He=!0;try{return ve(n,i,a)}finally{He=!1,(Oe!==null||$!==null)&&(Ce(),Re())}}function Pe(n,i){var a=n.stateNode;if(a===null)return null;var c=Oo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Je=!1;if(f)try{var lt={};Object.defineProperty(lt,"passive",{get:function(){Je=!0}}),window.addEventListener("test",lt,lt),window.removeEventListener("test",lt,lt)}catch{Je=!1}function Ge(n,i,a,c,p,x,C,V,J){var be=Array.prototype.slice.call(arguments,3);try{i.apply(a,be)}catch(Fe){this.onError(Fe)}}var St=!1,Ht=null,tn=!1,wn=null,fn={onError:function(n){St=!0,Ht=n}};function Qt(n,i,a,c,p,x,C,V,J){St=!1,Ht=null,Ge.apply(fn,arguments)}function Nn(n,i,a,c,p,x,C,V,J){if(Qt.apply(this,arguments),St){if(St){var be=Ht;St=!1,Ht=null}else throw Error(t(198));tn||(tn=!0,wn=be)}}function En(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function sn(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function bt(n){if(En(n)!==n)throw Error(t(188))}function Xt(n){var i=n.alternate;if(!i){if(i=En(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var p=a.return;if(p===null)break;var x=p.alternate;if(x===null){if(c=p.return,c!==null){a=c;continue}break}if(p.child===x.child){for(x=p.child;x;){if(x===a)return bt(p),n;if(x===c)return bt(p),i;x=x.sibling}throw Error(t(188))}if(a.return!==c.return)a=p,c=x;else{for(var C=!1,V=p.child;V;){if(V===a){C=!0,a=p,c=x;break}if(V===c){C=!0,c=p,a=x;break}V=V.sibling}if(!C){for(V=x.child;V;){if(V===a){C=!0,a=x,c=p;break}if(V===c){C=!0,c=x,a=p;break}V=V.sibling}if(!C)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function It(n){return n=Xt(n),n!==null?an(n):null}function an(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=an(n);if(i!==null)return i;n=n.sibling}return null}var un=e.unstable_scheduleCallback,hi=e.unstable_cancelCallback,kn=e.unstable_shouldYield,zn=e.unstable_requestPaint,At=e.unstable_now,Dr=e.unstable_getCurrentPriorityLevel,bi=e.unstable_ImmediatePriority,wi=e.unstable_UserBlockingPriority,ri=e.unstable_NormalPriority,Yi=e.unstable_LowPriority,A=e.unstable_IdlePriority,K=null,ge=null;function de(n){if(ge&&typeof ge.onCommitFiberRoot=="function")try{ge.onCommitFiberRoot(K,n,void 0,(n.current.flags&128)===128)}catch{}}var ce=Math.clz32?Math.clz32:Ve,Xe=Math.log,tt=Math.LN2;function Ve(n){return n>>>=0,n===0?32:31-(Xe(n)/tt|0)|0}var Ke=64,rt=4194304;function gt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Mt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,p=n.suspendedLanes,x=n.pingedLanes,C=a&268435455;if(C!==0){var V=C&~p;V!==0?c=gt(V):(x&=C,x!==0&&(c=gt(x)))}else C=a&~p,C!==0?c=gt(C):x!==0&&(c=gt(x));if(c===0)return 0;if(i!==0&&i!==c&&(i&p)===0&&(p=c&-c,x=i&-i,p>=x||p===16&&(x&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-ce(i),p=1<<a,c|=n[a],i&=~p;return c}function st(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,p=n.expirationTimes,x=n.pendingLanes;0<x;){var C=31-ce(x),V=1<<C,J=p[C];J===-1?((V&a)===0||(V&c)!==0)&&(p[C]=st(V,i)):J<=i&&(n.expiredLanes|=V),x&=~V}}function on(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function jt(){var n=Ke;return Ke<<=1,(Ke&4194240)===0&&(Ke=64),n}function Yt(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function ln(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ce(i),n[i]=a}function at(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var p=31-ce(a),x=1<<p;i[p]=0,c[p]=-1,n[p]=-1,a&=~x}}function te(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-ce(a),p=1<<c;p&i|n[c]&i&&(n[c]|=i),a&=~p}}var fe=0;function B(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var De,Qe,ut,Vt,pt,nn=!1,hn=[],Tt=null,zt=null,en=null,Un=new Map,as=new Map,qi=[],vc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mo(n,i){switch(n){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":en=null;break;case"pointerover":case"pointerout":Un.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":as.delete(i.pointerId)}}function os(n,i,a,c,p,x){return n===null||n.nativeEvent!==x?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:x,targetContainers:[p]},i!==null&&(i=Ua(i),i!==null&&Qe(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),n)}function _c(n,i,a,c,p){switch(i){case"focusin":return Tt=os(Tt,n,i,a,c,p),!0;case"dragenter":return zt=os(zt,n,i,a,c,p),!0;case"mouseover":return en=os(en,n,i,a,c,p),!0;case"pointerover":var x=p.pointerId;return Un.set(x,os(Un.get(x)||null,n,i,a,c,p)),!0;case"gotpointercapture":return x=p.pointerId,as.set(x,os(as.get(x)||null,n,i,a,c,p)),!0}return!1}function Wf(n){var i=ls(n.target);if(i!==null){var a=En(i);if(a!==null){if(i=a.tag,i===13){if(i=sn(a),i!==null){n.blockedOn=i,pt(n.priority,function(){ut(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Eo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Sc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);ze=c,a.target.dispatchEvent(c),ze=null}else return i=Ua(a),i!==null&&Qe(i),n.blockedOn=a,!1;i.shift()}return!0}function $f(n,i,a){Eo(n)&&a.delete(i)}function cx(){nn=!1,Tt!==null&&Eo(Tt)&&(Tt=null),zt!==null&&Eo(zt)&&(zt=null),en!==null&&Eo(en)&&(en=null),Un.forEach($f),as.forEach($f)}function Ma(n,i){n.blockedOn===i&&(n.blockedOn=null,nn||(nn=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,cx)))}function Ea(n){function i(p){return Ma(p,n)}if(0<hn.length){Ma(hn[0],n);for(var a=1;a<hn.length;a++){var c=hn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Tt!==null&&Ma(Tt,n),zt!==null&&Ma(zt,n),en!==null&&Ma(en,n),Un.forEach(i),as.forEach(i),a=0;a<qi.length;a++)c=qi[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<qi.length&&(a=qi[0],a.blockedOn===null);)Wf(a),a.blockedOn===null&&qi.shift()}var Ps=D.ReactCurrentBatchConfig,To=!0;function ux(n,i,a,c){var p=fe,x=Ps.transition;Ps.transition=null;try{fe=1,yc(n,i,a,c)}finally{fe=p,Ps.transition=x}}function dx(n,i,a,c){var p=fe,x=Ps.transition;Ps.transition=null;try{fe=4,yc(n,i,a,c)}finally{fe=p,Ps.transition=x}}function yc(n,i,a,c){if(To){var p=Sc(n,i,a,c);if(p===null)Fc(n,i,c,Co,a),Mo(n,c);else if(_c(p,n,i,a,c))c.stopPropagation();else if(Mo(n,c),i&4&&-1<vc.indexOf(n)){for(;p!==null;){var x=Ua(p);if(x!==null&&De(x),x=Sc(n,i,a,c),x===null&&Fc(n,i,c,Co,a),x===p)break;p=x}p!==null&&c.stopPropagation()}else Fc(n,i,c,null,a)}}var Co=null;function Sc(n,i,a,c){if(Co=null,n=Se(c),n=ls(n),n!==null)if(i=En(n),i===null)n=null;else if(a=i.tag,a===13){if(n=sn(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Co=n,null}function Xf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dr()){case bi:return 1;case wi:return 4;case ri:case Yi:return 16;case A:return 536870912;default:return 16}default:return 16}}var Lr=null,bc=null,Ao=null;function Yf(){if(Ao)return Ao;var n,i=bc,a=i.length,c,p="value"in Lr?Lr.value:Lr.textContent,x=p.length;for(n=0;n<a&&i[n]===p[n];n++);var C=a-n;for(c=1;c<=C&&i[a-c]===p[x-c];c++);return Ao=p.slice(n,1<c?1-c:void 0)}function Ro(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function No(){return!0}function qf(){return!1}function pi(n){function i(a,c,p,x,C){this._reactName=a,this._targetInst=p,this.type=c,this.nativeEvent=x,this.target=C,this.currentTarget=null;for(var V in n)n.hasOwnProperty(V)&&(a=n[V],this[V]=a?a(x):x[V]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?No:qf,this.isPropagationStopped=qf,this}return Z(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=No)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=No)},persist:function(){},isPersistent:No}),i}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wc=pi(Ds),Ta=Z({},Ds,{view:0,detail:0}),fx=pi(Ta),Mc,Ec,Ca,Po=Z({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ca&&(Ca&&n.type==="mousemove"?(Mc=n.screenX-Ca.screenX,Ec=n.screenY-Ca.screenY):Ec=Mc=0,Ca=n),Mc)},movementY:function(n){return"movementY"in n?n.movementY:Ec}}),Kf=pi(Po),hx=Z({},Po,{dataTransfer:0}),px=pi(hx),mx=Z({},Ta,{relatedTarget:0}),Tc=pi(mx),gx=Z({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),xx=pi(gx),vx=Z({},Ds,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),_x=pi(vx),yx=Z({},Ds,{data:0}),Zf=pi(yx),Sx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mx(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=wx[n])?!!i[n]:!1}function Cc(){return Mx}var Ex=Z({},Ta,{key:function(n){if(n.key){var i=Sx[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ro(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?bx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cc,charCode:function(n){return n.type==="keypress"?Ro(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ro(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Tx=pi(Ex),Cx=Z({},Po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jf=pi(Cx),Ax=Z({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cc}),Rx=pi(Ax),Nx=Z({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),Px=pi(Nx),Dx=Z({},Po,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Lx=pi(Dx),Ix=[9,13,27,32],Ac=f&&"CompositionEvent"in window,Aa=null;f&&"documentMode"in document&&(Aa=document.documentMode);var kx=f&&"TextEvent"in window&&!Aa,Qf=f&&(!Ac||Aa&&8<Aa&&11>=Aa),eh=" ",th=!1;function nh(n,i){switch(n){case"keyup":return Ix.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ih(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ls=!1;function zx(n,i){switch(n){case"compositionend":return ih(i);case"keypress":return i.which!==32?null:(th=!0,eh);case"textInput":return n=i.data,n===eh&&th?null:n;default:return null}}function Ux(n,i){if(Ls)return n==="compositionend"||!Ac&&nh(n,i)?(n=Yf(),Ao=bc=Lr=null,Ls=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Qf&&i.locale!=="ko"?null:i.data;default:return null}}var Fx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Fx[n.type]:i==="textarea"}function sh(n,i,a,c){we(c),i=zo(i,"onChange"),0<i.length&&(a=new wc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Ra=null,Na=null;function Ox(n){wh(n,0)}function Do(n){var i=Fs(n);if(Ne(i))return n}function Bx(n,i){if(n==="change")return i}var ah=!1;if(f){var Rc;if(f){var Nc="oninput"in document;if(!Nc){var oh=document.createElement("div");oh.setAttribute("oninput","return;"),Nc=typeof oh.oninput=="function"}Rc=Nc}else Rc=!1;ah=Rc&&(!document.documentMode||9<document.documentMode)}function lh(){Ra&&(Ra.detachEvent("onpropertychange",ch),Na=Ra=null)}function ch(n){if(n.propertyName==="value"&&Do(Na)){var i=[];sh(i,Na,n,Se(n)),nt(Ox,i)}}function Hx(n,i,a){n==="focusin"?(lh(),Ra=i,Na=a,Ra.attachEvent("onpropertychange",ch)):n==="focusout"&&lh()}function Gx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Do(Na)}function jx(n,i){if(n==="click")return Do(i)}function Vx(n,i){if(n==="input"||n==="change")return Do(i)}function Wx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Li=typeof Object.is=="function"?Object.is:Wx;function Pa(n,i){if(Li(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var p=a[c];if(!g.call(i,p)||!Li(n[p],i[p]))return!1}return!0}function uh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function dh(n,i){var a=uh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=uh(a)}}function fh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?fh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function hh(){for(var n=window,i=je();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=je(n.document)}return i}function Pc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function $x(n){var i=hh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&fh(a.ownerDocument.documentElement,a)){if(c!==null&&Pc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var p=a.textContent.length,x=Math.min(c.start,p);c=c.end===void 0?x:Math.min(c.end,p),!n.extend&&x>c&&(p=c,c=x,x=p),p=dh(a,x);var C=dh(a,c);p&&C&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==C.node||n.focusOffset!==C.offset)&&(i=i.createRange(),i.setStart(p.node,p.offset),n.removeAllRanges(),x>c?(n.addRange(i),n.extend(C.node,C.offset)):(i.setEnd(C.node,C.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Xx=f&&"documentMode"in document&&11>=document.documentMode,Is=null,Dc=null,Da=null,Lc=!1;function ph(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Lc||Is==null||Is!==je(c)||(c=Is,"selectionStart"in c&&Pc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Da&&Pa(Da,c)||(Da=c,c=zo(Dc,"onSelect"),0<c.length&&(i=new wc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Is)))}function Lo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var ks={animationend:Lo("Animation","AnimationEnd"),animationiteration:Lo("Animation","AnimationIteration"),animationstart:Lo("Animation","AnimationStart"),transitionend:Lo("Transition","TransitionEnd")},Ic={},mh={};f&&(mh=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function Io(n){if(Ic[n])return Ic[n];if(!ks[n])return n;var i=ks[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in mh)return Ic[n]=i[a];return n}var gh=Io("animationend"),xh=Io("animationiteration"),vh=Io("animationstart"),_h=Io("transitionend"),yh=new Map,Sh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(n,i){yh.set(n,i),l(i,[n])}for(var kc=0;kc<Sh.length;kc++){var zc=Sh[kc],Yx=zc.toLowerCase(),qx=zc[0].toUpperCase()+zc.slice(1);Ir(Yx,"on"+qx)}Ir(gh,"onAnimationEnd"),Ir(xh,"onAnimationIteration"),Ir(vh,"onAnimationStart"),Ir("dblclick","onDoubleClick"),Ir("focusin","onFocus"),Ir("focusout","onBlur"),Ir(_h,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var La="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kx=new Set("cancel close invalid load scroll toggle".split(" ").concat(La));function bh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Nn(c,i,void 0,n),n.currentTarget=null}function wh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],p=c.event;c=c.listeners;e:{var x=void 0;if(i)for(var C=c.length-1;0<=C;C--){var V=c[C],J=V.instance,be=V.currentTarget;if(V=V.listener,J!==x&&p.isPropagationStopped())break e;bh(p,V,be),x=J}else for(C=0;C<c.length;C++){if(V=c[C],J=V.instance,be=V.currentTarget,V=V.listener,J!==x&&p.isPropagationStopped())break e;bh(p,V,be),x=J}}}if(tn)throw n=wn,tn=!1,wn=null,n}function pn(n,i){var a=i[Vc];a===void 0&&(a=i[Vc]=new Set);var c=n+"__bubble";a.has(c)||(Mh(i,n,2,!1),a.add(c))}function Uc(n,i,a){var c=0;i&&(c|=4),Mh(a,n,c,i)}var ko="_reactListening"+Math.random().toString(36).slice(2);function Ia(n){if(!n[ko]){n[ko]=!0,r.forEach(function(a){a!=="selectionchange"&&(Kx.has(a)||Uc(a,!1,n),Uc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ko]||(i[ko]=!0,Uc("selectionchange",!1,i))}}function Mh(n,i,a,c){switch(Xf(i)){case 1:var p=ux;break;case 4:p=dx;break;default:p=yc}a=p.bind(null,i,a,n),p=void 0,!Je||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),c?p!==void 0?n.addEventListener(i,a,{capture:!0,passive:p}):n.addEventListener(i,a,!0):p!==void 0?n.addEventListener(i,a,{passive:p}):n.addEventListener(i,a,!1)}function Fc(n,i,a,c,p){var x=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var C=c.tag;if(C===3||C===4){var V=c.stateNode.containerInfo;if(V===p||V.nodeType===8&&V.parentNode===p)break;if(C===4)for(C=c.return;C!==null;){var J=C.tag;if((J===3||J===4)&&(J=C.stateNode.containerInfo,J===p||J.nodeType===8&&J.parentNode===p))return;C=C.return}for(;V!==null;){if(C=ls(V),C===null)return;if(J=C.tag,J===5||J===6){c=x=C;continue e}V=V.parentNode}}c=c.return}nt(function(){var be=x,Fe=Se(a),Be=[];e:{var Ue=yh.get(n);if(Ue!==void 0){var it=wc,dt=n;switch(n){case"keypress":if(Ro(a)===0)break e;case"keydown":case"keyup":it=Tx;break;case"focusin":dt="focus",it=Tc;break;case"focusout":dt="blur",it=Tc;break;case"beforeblur":case"afterblur":it=Tc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=Kf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=px;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=Rx;break;case gh:case xh:case vh:it=xx;break;case _h:it=Px;break;case"scroll":it=fx;break;case"wheel":it=Lx;break;case"copy":case"cut":case"paste":it=_x;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=Jf}var ft=(i&4)!==0,Tn=!ft&&n==="scroll",pe=ft?Ue!==null?Ue+"Capture":null:Ue;ft=[];for(var re=be,xe;re!==null;){xe=re;var We=xe.stateNode;if(xe.tag===5&&We!==null&&(xe=We,pe!==null&&(We=Pe(re,pe),We!=null&&ft.push(ka(re,We,xe)))),Tn)break;re=re.return}0<ft.length&&(Ue=new it(Ue,dt,null,a,Fe),Be.push({event:Ue,listeners:ft}))}}if((i&7)===0){e:{if(Ue=n==="mouseover"||n==="pointerover",it=n==="mouseout"||n==="pointerout",Ue&&a!==ze&&(dt=a.relatedTarget||a.fromElement)&&(ls(dt)||dt[hr]))break e;if((it||Ue)&&(Ue=Fe.window===Fe?Fe:(Ue=Fe.ownerDocument)?Ue.defaultView||Ue.parentWindow:window,it?(dt=a.relatedTarget||a.toElement,it=be,dt=dt?ls(dt):null,dt!==null&&(Tn=En(dt),dt!==Tn||dt.tag!==5&&dt.tag!==6)&&(dt=null)):(it=null,dt=be),it!==dt)){if(ft=Kf,We="onMouseLeave",pe="onMouseEnter",re="mouse",(n==="pointerout"||n==="pointerover")&&(ft=Jf,We="onPointerLeave",pe="onPointerEnter",re="pointer"),Tn=it==null?Ue:Fs(it),xe=dt==null?Ue:Fs(dt),Ue=new ft(We,re+"leave",it,a,Fe),Ue.target=Tn,Ue.relatedTarget=xe,We=null,ls(Fe)===be&&(ft=new ft(pe,re+"enter",dt,a,Fe),ft.target=xe,ft.relatedTarget=Tn,We=ft),Tn=We,it&&dt)t:{for(ft=it,pe=dt,re=0,xe=ft;xe;xe=zs(xe))re++;for(xe=0,We=pe;We;We=zs(We))xe++;for(;0<re-xe;)ft=zs(ft),re--;for(;0<xe-re;)pe=zs(pe),xe--;for(;re--;){if(ft===pe||pe!==null&&ft===pe.alternate)break t;ft=zs(ft),pe=zs(pe)}ft=null}else ft=null;it!==null&&Eh(Be,Ue,it,ft,!1),dt!==null&&Tn!==null&&Eh(Be,Tn,dt,ft,!0)}}e:{if(Ue=be?Fs(be):window,it=Ue.nodeName&&Ue.nodeName.toLowerCase(),it==="select"||it==="input"&&Ue.type==="file")var ht=Bx;else if(rh(Ue))if(ah)ht=Vx;else{ht=Gx;var vt=Hx}else(it=Ue.nodeName)&&it.toLowerCase()==="input"&&(Ue.type==="checkbox"||Ue.type==="radio")&&(ht=jx);if(ht&&(ht=ht(n,be))){sh(Be,ht,a,Fe);break e}vt&&vt(n,Ue,be),n==="focusout"&&(vt=Ue._wrapperState)&&vt.controlled&&Ue.type==="number"&&kt(Ue,"number",Ue.value)}switch(vt=be?Fs(be):window,n){case"focusin":(rh(vt)||vt.contentEditable==="true")&&(Is=vt,Dc=be,Da=null);break;case"focusout":Da=Dc=Is=null;break;case"mousedown":Lc=!0;break;case"contextmenu":case"mouseup":case"dragend":Lc=!1,ph(Be,a,Fe);break;case"selectionchange":if(Xx)break;case"keydown":case"keyup":ph(Be,a,Fe)}var _t;if(Ac)e:{switch(n){case"compositionstart":var Ct="onCompositionStart";break e;case"compositionend":Ct="onCompositionEnd";break e;case"compositionupdate":Ct="onCompositionUpdate";break e}Ct=void 0}else Ls?nh(n,a)&&(Ct="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ct="onCompositionStart");Ct&&(Qf&&a.locale!=="ko"&&(Ls||Ct!=="onCompositionStart"?Ct==="onCompositionEnd"&&Ls&&(_t=Yf()):(Lr=Fe,bc="value"in Lr?Lr.value:Lr.textContent,Ls=!0)),vt=zo(be,Ct),0<vt.length&&(Ct=new Zf(Ct,n,null,a,Fe),Be.push({event:Ct,listeners:vt}),_t?Ct.data=_t:(_t=ih(a),_t!==null&&(Ct.data=_t)))),(_t=kx?zx(n,a):Ux(n,a))&&(be=zo(be,"onBeforeInput"),0<be.length&&(Fe=new Zf("onBeforeInput","beforeinput",null,a,Fe),Be.push({event:Fe,listeners:be}),Fe.data=_t))}wh(Be,i)})}function ka(n,i,a){return{instance:n,listener:i,currentTarget:a}}function zo(n,i){for(var a=i+"Capture",c=[];n!==null;){var p=n,x=p.stateNode;p.tag===5&&x!==null&&(p=x,x=Pe(n,a),x!=null&&c.unshift(ka(n,x,p)),x=Pe(n,i),x!=null&&c.push(ka(n,x,p))),n=n.return}return c}function zs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Eh(n,i,a,c,p){for(var x=i._reactName,C=[];a!==null&&a!==c;){var V=a,J=V.alternate,be=V.stateNode;if(J!==null&&J===c)break;V.tag===5&&be!==null&&(V=be,p?(J=Pe(a,x),J!=null&&C.unshift(ka(a,J,V))):p||(J=Pe(a,x),J!=null&&C.push(ka(a,J,V)))),a=a.return}C.length!==0&&n.push({event:i,listeners:C})}var Zx=/\r\n?/g,Jx=/\u0000|\uFFFD/g;function Th(n){return(typeof n=="string"?n:""+n).replace(Zx,`
`).replace(Jx,"")}function Uo(n,i,a){if(i=Th(i),Th(n)!==i&&a)throw Error(t(425))}function Fo(){}var Oc=null,Bc=null;function Hc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Gc=typeof setTimeout=="function"?setTimeout:void 0,Qx=typeof clearTimeout=="function"?clearTimeout:void 0,Ch=typeof Promise=="function"?Promise:void 0,ev=typeof queueMicrotask=="function"?queueMicrotask:typeof Ch<"u"?function(n){return Ch.resolve(null).then(n).catch(tv)}:Gc;function tv(n){setTimeout(function(){throw n})}function jc(n,i){var a=i,c=0;do{var p=a.nextSibling;if(n.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(c===0){n.removeChild(p),Ea(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=p}while(a);Ea(i)}function kr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Ah(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Us=Math.random().toString(36).slice(2),Ki="__reactFiber$"+Us,za="__reactProps$"+Us,hr="__reactContainer$"+Us,Vc="__reactEvents$"+Us,nv="__reactListeners$"+Us,iv="__reactHandles$"+Us;function ls(n){var i=n[Ki];if(i)return i;for(var a=n.parentNode;a;){if(i=a[hr]||a[Ki]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Ah(n);n!==null;){if(a=n[Ki])return a;n=Ah(n)}return i}n=a,a=n.parentNode}return null}function Ua(n){return n=n[Ki]||n[hr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Fs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Oo(n){return n[za]||null}var Wc=[],Os=-1;function zr(n){return{current:n}}function mn(n){0>Os||(n.current=Wc[Os],Wc[Os]=null,Os--)}function dn(n,i){Os++,Wc[Os]=n.current,n.current=i}var Ur={},Xn=zr(Ur),si=zr(!1),cs=Ur;function Bs(n,i){var a=n.type.contextTypes;if(!a)return Ur;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var p={},x;for(x in a)p[x]=i[x];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=p),p}function ai(n){return n=n.childContextTypes,n!=null}function Bo(){mn(si),mn(Xn)}function Rh(n,i,a){if(Xn.current!==Ur)throw Error(t(168));dn(Xn,i),dn(si,a)}function Nh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var p in c)if(!(p in i))throw Error(t(108,Me(n)||"Unknown",p));return Z({},a,c)}function Ho(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ur,cs=Xn.current,dn(Xn,n),dn(si,si.current),!0}function Ph(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Nh(n,i,cs),c.__reactInternalMemoizedMergedChildContext=n,mn(si),mn(Xn),dn(Xn,n)):mn(si),dn(si,a)}var pr=null,Go=!1,$c=!1;function Dh(n){pr===null?pr=[n]:pr.push(n)}function rv(n){Go=!0,Dh(n)}function Fr(){if(!$c&&pr!==null){$c=!0;var n=0,i=fe;try{var a=pr;for(fe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}pr=null,Go=!1}catch(p){throw pr!==null&&(pr=pr.slice(n+1)),un(bi,Fr),p}finally{fe=i,$c=!1}}return null}var Hs=[],Gs=0,jo=null,Vo=0,Mi=[],Ei=0,us=null,mr=1,gr="";function ds(n,i){Hs[Gs++]=Vo,Hs[Gs++]=jo,jo=n,Vo=i}function Lh(n,i,a){Mi[Ei++]=mr,Mi[Ei++]=gr,Mi[Ei++]=us,us=n;var c=mr;n=gr;var p=32-ce(c)-1;c&=~(1<<p),a+=1;var x=32-ce(i)+p;if(30<x){var C=p-p%5;x=(c&(1<<C)-1).toString(32),c>>=C,p-=C,mr=1<<32-ce(i)+p|a<<p|c,gr=x+n}else mr=1<<x|a<<p|c,gr=n}function Xc(n){n.return!==null&&(ds(n,1),Lh(n,1,0))}function Yc(n){for(;n===jo;)jo=Hs[--Gs],Hs[Gs]=null,Vo=Hs[--Gs],Hs[Gs]=null;for(;n===us;)us=Mi[--Ei],Mi[Ei]=null,gr=Mi[--Ei],Mi[Ei]=null,mr=Mi[--Ei],Mi[Ei]=null}var mi=null,gi=null,xn=!1,Ii=null;function Ih(n,i){var a=Ri(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function kh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,mi=n,gi=kr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,mi=n,gi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=us!==null?{id:mr,overflow:gr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Ri(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,mi=n,gi=null,!0):!1;default:return!1}}function qc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Kc(n){if(xn){var i=gi;if(i){var a=i;if(!kh(n,i)){if(qc(n))throw Error(t(418));i=kr(a.nextSibling);var c=mi;i&&kh(n,i)?Ih(c,a):(n.flags=n.flags&-4097|2,xn=!1,mi=n)}}else{if(qc(n))throw Error(t(418));n.flags=n.flags&-4097|2,xn=!1,mi=n}}}function zh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;mi=n}function Wo(n){if(n!==mi)return!1;if(!xn)return zh(n),xn=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Hc(n.type,n.memoizedProps)),i&&(i=gi)){if(qc(n))throw Uh(),Error(t(418));for(;i;)Ih(n,i),i=kr(i.nextSibling)}if(zh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){gi=kr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}gi=null}}else gi=mi?kr(n.stateNode.nextSibling):null;return!0}function Uh(){for(var n=gi;n;)n=kr(n.nextSibling)}function js(){gi=mi=null,xn=!1}function Zc(n){Ii===null?Ii=[n]:Ii.push(n)}var sv=D.ReactCurrentBatchConfig;function Fa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var p=c,x=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===x?i.ref:(i=function(C){var V=p.refs;C===null?delete V[x]:V[x]=C},i._stringRef=x,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function $o(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Fh(n){var i=n._init;return i(n._payload)}function Oh(n){function i(pe,re){if(n){var xe=pe.deletions;xe===null?(pe.deletions=[re],pe.flags|=16):xe.push(re)}}function a(pe,re){if(!n)return null;for(;re!==null;)i(pe,re),re=re.sibling;return null}function c(pe,re){for(pe=new Map;re!==null;)re.key!==null?pe.set(re.key,re):pe.set(re.index,re),re=re.sibling;return pe}function p(pe,re){return pe=$r(pe,re),pe.index=0,pe.sibling=null,pe}function x(pe,re,xe){return pe.index=xe,n?(xe=pe.alternate,xe!==null?(xe=xe.index,xe<re?(pe.flags|=2,re):xe):(pe.flags|=2,re)):(pe.flags|=1048576,re)}function C(pe){return n&&pe.alternate===null&&(pe.flags|=2),pe}function V(pe,re,xe,We){return re===null||re.tag!==6?(re=Gu(xe,pe.mode,We),re.return=pe,re):(re=p(re,xe),re.return=pe,re)}function J(pe,re,xe,We){var ht=xe.type;return ht===E?Fe(pe,re,xe.props.children,We,xe.key):re!==null&&(re.elementType===ht||typeof ht=="object"&&ht!==null&&ht.$$typeof===ue&&Fh(ht)===re.type)?(We=p(re,xe.props),We.ref=Fa(pe,re,xe),We.return=pe,We):(We=gl(xe.type,xe.key,xe.props,null,pe.mode,We),We.ref=Fa(pe,re,xe),We.return=pe,We)}function be(pe,re,xe,We){return re===null||re.tag!==4||re.stateNode.containerInfo!==xe.containerInfo||re.stateNode.implementation!==xe.implementation?(re=ju(xe,pe.mode,We),re.return=pe,re):(re=p(re,xe.children||[]),re.return=pe,re)}function Fe(pe,re,xe,We,ht){return re===null||re.tag!==7?(re=_s(xe,pe.mode,We,ht),re.return=pe,re):(re=p(re,xe),re.return=pe,re)}function Be(pe,re,xe){if(typeof re=="string"&&re!==""||typeof re=="number")return re=Gu(""+re,pe.mode,xe),re.return=pe,re;if(typeof re=="object"&&re!==null){switch(re.$$typeof){case U:return xe=gl(re.type,re.key,re.props,null,pe.mode,xe),xe.ref=Fa(pe,null,re),xe.return=pe,xe;case R:return re=ju(re,pe.mode,xe),re.return=pe,re;case ue:var We=re._init;return Be(pe,We(re._payload),xe)}if(_e(re)||G(re))return re=_s(re,pe.mode,xe,null),re.return=pe,re;$o(pe,re)}return null}function Ue(pe,re,xe,We){var ht=re!==null?re.key:null;if(typeof xe=="string"&&xe!==""||typeof xe=="number")return ht!==null?null:V(pe,re,""+xe,We);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case U:return xe.key===ht?J(pe,re,xe,We):null;case R:return xe.key===ht?be(pe,re,xe,We):null;case ue:return ht=xe._init,Ue(pe,re,ht(xe._payload),We)}if(_e(xe)||G(xe))return ht!==null?null:Fe(pe,re,xe,We,null);$o(pe,xe)}return null}function it(pe,re,xe,We,ht){if(typeof We=="string"&&We!==""||typeof We=="number")return pe=pe.get(xe)||null,V(re,pe,""+We,ht);if(typeof We=="object"&&We!==null){switch(We.$$typeof){case U:return pe=pe.get(We.key===null?xe:We.key)||null,J(re,pe,We,ht);case R:return pe=pe.get(We.key===null?xe:We.key)||null,be(re,pe,We,ht);case ue:var vt=We._init;return it(pe,re,xe,vt(We._payload),ht)}if(_e(We)||G(We))return pe=pe.get(xe)||null,Fe(re,pe,We,ht,null);$o(re,We)}return null}function dt(pe,re,xe,We){for(var ht=null,vt=null,_t=re,Ct=re=0,Bn=null;_t!==null&&Ct<xe.length;Ct++){_t.index>Ct?(Bn=_t,_t=null):Bn=_t.sibling;var Zt=Ue(pe,_t,xe[Ct],We);if(Zt===null){_t===null&&(_t=Bn);break}n&&_t&&Zt.alternate===null&&i(pe,_t),re=x(Zt,re,Ct),vt===null?ht=Zt:vt.sibling=Zt,vt=Zt,_t=Bn}if(Ct===xe.length)return a(pe,_t),xn&&ds(pe,Ct),ht;if(_t===null){for(;Ct<xe.length;Ct++)_t=Be(pe,xe[Ct],We),_t!==null&&(re=x(_t,re,Ct),vt===null?ht=_t:vt.sibling=_t,vt=_t);return xn&&ds(pe,Ct),ht}for(_t=c(pe,_t);Ct<xe.length;Ct++)Bn=it(_t,pe,Ct,xe[Ct],We),Bn!==null&&(n&&Bn.alternate!==null&&_t.delete(Bn.key===null?Ct:Bn.key),re=x(Bn,re,Ct),vt===null?ht=Bn:vt.sibling=Bn,vt=Bn);return n&&_t.forEach(function(Xr){return i(pe,Xr)}),xn&&ds(pe,Ct),ht}function ft(pe,re,xe,We){var ht=G(xe);if(typeof ht!="function")throw Error(t(150));if(xe=ht.call(xe),xe==null)throw Error(t(151));for(var vt=ht=null,_t=re,Ct=re=0,Bn=null,Zt=xe.next();_t!==null&&!Zt.done;Ct++,Zt=xe.next()){_t.index>Ct?(Bn=_t,_t=null):Bn=_t.sibling;var Xr=Ue(pe,_t,Zt.value,We);if(Xr===null){_t===null&&(_t=Bn);break}n&&_t&&Xr.alternate===null&&i(pe,_t),re=x(Xr,re,Ct),vt===null?ht=Xr:vt.sibling=Xr,vt=Xr,_t=Bn}if(Zt.done)return a(pe,_t),xn&&ds(pe,Ct),ht;if(_t===null){for(;!Zt.done;Ct++,Zt=xe.next())Zt=Be(pe,Zt.value,We),Zt!==null&&(re=x(Zt,re,Ct),vt===null?ht=Zt:vt.sibling=Zt,vt=Zt);return xn&&ds(pe,Ct),ht}for(_t=c(pe,_t);!Zt.done;Ct++,Zt=xe.next())Zt=it(_t,pe,Ct,Zt.value,We),Zt!==null&&(n&&Zt.alternate!==null&&_t.delete(Zt.key===null?Ct:Zt.key),re=x(Zt,re,Ct),vt===null?ht=Zt:vt.sibling=Zt,vt=Zt);return n&&_t.forEach(function(Fv){return i(pe,Fv)}),xn&&ds(pe,Ct),ht}function Tn(pe,re,xe,We){if(typeof xe=="object"&&xe!==null&&xe.type===E&&xe.key===null&&(xe=xe.props.children),typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case U:e:{for(var ht=xe.key,vt=re;vt!==null;){if(vt.key===ht){if(ht=xe.type,ht===E){if(vt.tag===7){a(pe,vt.sibling),re=p(vt,xe.props.children),re.return=pe,pe=re;break e}}else if(vt.elementType===ht||typeof ht=="object"&&ht!==null&&ht.$$typeof===ue&&Fh(ht)===vt.type){a(pe,vt.sibling),re=p(vt,xe.props),re.ref=Fa(pe,vt,xe),re.return=pe,pe=re;break e}a(pe,vt);break}else i(pe,vt);vt=vt.sibling}xe.type===E?(re=_s(xe.props.children,pe.mode,We,xe.key),re.return=pe,pe=re):(We=gl(xe.type,xe.key,xe.props,null,pe.mode,We),We.ref=Fa(pe,re,xe),We.return=pe,pe=We)}return C(pe);case R:e:{for(vt=xe.key;re!==null;){if(re.key===vt)if(re.tag===4&&re.stateNode.containerInfo===xe.containerInfo&&re.stateNode.implementation===xe.implementation){a(pe,re.sibling),re=p(re,xe.children||[]),re.return=pe,pe=re;break e}else{a(pe,re);break}else i(pe,re);re=re.sibling}re=ju(xe,pe.mode,We),re.return=pe,pe=re}return C(pe);case ue:return vt=xe._init,Tn(pe,re,vt(xe._payload),We)}if(_e(xe))return dt(pe,re,xe,We);if(G(xe))return ft(pe,re,xe,We);$o(pe,xe)}return typeof xe=="string"&&xe!==""||typeof xe=="number"?(xe=""+xe,re!==null&&re.tag===6?(a(pe,re.sibling),re=p(re,xe),re.return=pe,pe=re):(a(pe,re),re=Gu(xe,pe.mode,We),re.return=pe,pe=re),C(pe)):a(pe,re)}return Tn}var Vs=Oh(!0),Bh=Oh(!1),Xo=zr(null),Yo=null,Ws=null,Jc=null;function Qc(){Jc=Ws=Yo=null}function eu(n){var i=Xo.current;mn(Xo),n._currentValue=i}function tu(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function $s(n,i){Yo=n,Jc=Ws=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(oi=!0),n.firstContext=null)}function Ti(n){var i=n._currentValue;if(Jc!==n)if(n={context:n,memoizedValue:i,next:null},Ws===null){if(Yo===null)throw Error(t(308));Ws=n,Yo.dependencies={lanes:0,firstContext:n}}else Ws=Ws.next=n;return i}var fs=null;function nu(n){fs===null?fs=[n]:fs.push(n)}function Hh(n,i,a,c){var p=i.interleaved;return p===null?(a.next=a,nu(i)):(a.next=p.next,p.next=a),i.interleaved=a,xr(n,c)}function xr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Or=!1;function iu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function vr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Br(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(qt&2)!==0){var p=c.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),c.pending=i,xr(n,a)}return p=c.interleaved,p===null?(i.next=i,nu(c)):(i.next=p.next,p.next=i),c.interleaved=i,xr(n,a)}function qo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,te(n,a)}}function jh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var p=null,x=null;if(a=a.firstBaseUpdate,a!==null){do{var C={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};x===null?p=x=C:x=x.next=C,a=a.next}while(a!==null);x===null?p=x=i:x=x.next=i}else p=x=i;a={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:x,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Ko(n,i,a,c){var p=n.updateQueue;Or=!1;var x=p.firstBaseUpdate,C=p.lastBaseUpdate,V=p.shared.pending;if(V!==null){p.shared.pending=null;var J=V,be=J.next;J.next=null,C===null?x=be:C.next=be,C=J;var Fe=n.alternate;Fe!==null&&(Fe=Fe.updateQueue,V=Fe.lastBaseUpdate,V!==C&&(V===null?Fe.firstBaseUpdate=be:V.next=be,Fe.lastBaseUpdate=J))}if(x!==null){var Be=p.baseState;C=0,Fe=be=J=null,V=x;do{var Ue=V.lane,it=V.eventTime;if((c&Ue)===Ue){Fe!==null&&(Fe=Fe.next={eventTime:it,lane:0,tag:V.tag,payload:V.payload,callback:V.callback,next:null});e:{var dt=n,ft=V;switch(Ue=i,it=a,ft.tag){case 1:if(dt=ft.payload,typeof dt=="function"){Be=dt.call(it,Be,Ue);break e}Be=dt;break e;case 3:dt.flags=dt.flags&-65537|128;case 0:if(dt=ft.payload,Ue=typeof dt=="function"?dt.call(it,Be,Ue):dt,Ue==null)break e;Be=Z({},Be,Ue);break e;case 2:Or=!0}}V.callback!==null&&V.lane!==0&&(n.flags|=64,Ue=p.effects,Ue===null?p.effects=[V]:Ue.push(V))}else it={eventTime:it,lane:Ue,tag:V.tag,payload:V.payload,callback:V.callback,next:null},Fe===null?(be=Fe=it,J=Be):Fe=Fe.next=it,C|=Ue;if(V=V.next,V===null){if(V=p.shared.pending,V===null)break;Ue=V,V=Ue.next,Ue.next=null,p.lastBaseUpdate=Ue,p.shared.pending=null}}while(!0);if(Fe===null&&(J=Be),p.baseState=J,p.firstBaseUpdate=be,p.lastBaseUpdate=Fe,i=p.shared.interleaved,i!==null){p=i;do C|=p.lane,p=p.next;while(p!==i)}else x===null&&(p.shared.lanes=0);ms|=C,n.lanes=C,n.memoizedState=Be}}function Vh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],p=c.callback;if(p!==null){if(c.callback=null,c=a,typeof p!="function")throw Error(t(191,p));p.call(c)}}}var Oa={},Zi=zr(Oa),Ba=zr(Oa),Ha=zr(Oa);function hs(n){if(n===Oa)throw Error(t(174));return n}function ru(n,i){switch(dn(Ha,i),dn(Ba,n),dn(Zi,Oa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Bt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Bt(i,n)}mn(Zi),dn(Zi,i)}function Xs(){mn(Zi),mn(Ba),mn(Ha)}function Wh(n){hs(Ha.current);var i=hs(Zi.current),a=Bt(i,n.type);i!==a&&(dn(Ba,n),dn(Zi,a))}function su(n){Ba.current===n&&(mn(Zi),mn(Ba))}var _n=zr(0);function Zo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var au=[];function ou(){for(var n=0;n<au.length;n++)au[n]._workInProgressVersionPrimary=null;au.length=0}var Jo=D.ReactCurrentDispatcher,lu=D.ReactCurrentBatchConfig,ps=0,yn=null,Pn=null,Fn=null,Qo=!1,Ga=!1,ja=0,av=0;function Yn(){throw Error(t(321))}function cu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Li(n[a],i[a]))return!1;return!0}function uu(n,i,a,c,p,x){if(ps=x,yn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Jo.current=n===null||n.memoizedState===null?uv:dv,n=a(c,p),Ga){x=0;do{if(Ga=!1,ja=0,25<=x)throw Error(t(301));x+=1,Fn=Pn=null,i.updateQueue=null,Jo.current=fv,n=a(c,p)}while(Ga)}if(Jo.current=nl,i=Pn!==null&&Pn.next!==null,ps=0,Fn=Pn=yn=null,Qo=!1,i)throw Error(t(300));return n}function du(){var n=ja!==0;return ja=0,n}function Ji(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fn===null?yn.memoizedState=Fn=n:Fn=Fn.next=n,Fn}function Ci(){if(Pn===null){var n=yn.alternate;n=n!==null?n.memoizedState:null}else n=Pn.next;var i=Fn===null?yn.memoizedState:Fn.next;if(i!==null)Fn=i,Pn=n;else{if(n===null)throw Error(t(310));Pn=n,n={memoizedState:Pn.memoizedState,baseState:Pn.baseState,baseQueue:Pn.baseQueue,queue:Pn.queue,next:null},Fn===null?yn.memoizedState=Fn=n:Fn=Fn.next=n}return Fn}function Va(n,i){return typeof i=="function"?i(n):i}function fu(n){var i=Ci(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Pn,p=c.baseQueue,x=a.pending;if(x!==null){if(p!==null){var C=p.next;p.next=x.next,x.next=C}c.baseQueue=p=x,a.pending=null}if(p!==null){x=p.next,c=c.baseState;var V=C=null,J=null,be=x;do{var Fe=be.lane;if((ps&Fe)===Fe)J!==null&&(J=J.next={lane:0,action:be.action,hasEagerState:be.hasEagerState,eagerState:be.eagerState,next:null}),c=be.hasEagerState?be.eagerState:n(c,be.action);else{var Be={lane:Fe,action:be.action,hasEagerState:be.hasEagerState,eagerState:be.eagerState,next:null};J===null?(V=J=Be,C=c):J=J.next=Be,yn.lanes|=Fe,ms|=Fe}be=be.next}while(be!==null&&be!==x);J===null?C=c:J.next=V,Li(c,i.memoizedState)||(oi=!0),i.memoizedState=c,i.baseState=C,i.baseQueue=J,a.lastRenderedState=c}if(n=a.interleaved,n!==null){p=n;do x=p.lane,yn.lanes|=x,ms|=x,p=p.next;while(p!==n)}else p===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function hu(n){var i=Ci(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,p=a.pending,x=i.memoizedState;if(p!==null){a.pending=null;var C=p=p.next;do x=n(x,C.action),C=C.next;while(C!==p);Li(x,i.memoizedState)||(oi=!0),i.memoizedState=x,i.baseQueue===null&&(i.baseState=x),a.lastRenderedState=x}return[x,c]}function $h(){}function Xh(n,i){var a=yn,c=Ci(),p=i(),x=!Li(c.memoizedState,p);if(x&&(c.memoizedState=p,oi=!0),c=c.queue,pu(Kh.bind(null,a,c,n),[n]),c.getSnapshot!==i||x||Fn!==null&&Fn.memoizedState.tag&1){if(a.flags|=2048,Wa(9,qh.bind(null,a,c,p,i),void 0,null),On===null)throw Error(t(349));(ps&30)!==0||Yh(a,i,p)}return p}function Yh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=yn.updateQueue,i===null?(i={lastEffect:null,stores:null},yn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function qh(n,i,a,c){i.value=a,i.getSnapshot=c,Zh(i)&&Jh(n)}function Kh(n,i,a){return a(function(){Zh(i)&&Jh(n)})}function Zh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Li(n,a)}catch{return!0}}function Jh(n){var i=xr(n,1);i!==null&&Fi(i,n,1,-1)}function Qh(n){var i=Ji();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:n},i.queue=n,n=n.dispatch=cv.bind(null,yn,n),[i.memoizedState,n]}function Wa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=yn.updateQueue,i===null?(i={lastEffect:null,stores:null},yn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function ep(){return Ci().memoizedState}function el(n,i,a,c){var p=Ji();yn.flags|=n,p.memoizedState=Wa(1|i,a,void 0,c===void 0?null:c)}function tl(n,i,a,c){var p=Ci();c=c===void 0?null:c;var x=void 0;if(Pn!==null){var C=Pn.memoizedState;if(x=C.destroy,c!==null&&cu(c,C.deps)){p.memoizedState=Wa(i,a,x,c);return}}yn.flags|=n,p.memoizedState=Wa(1|i,a,x,c)}function tp(n,i){return el(8390656,8,n,i)}function pu(n,i){return tl(2048,8,n,i)}function np(n,i){return tl(4,2,n,i)}function ip(n,i){return tl(4,4,n,i)}function rp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function sp(n,i,a){return a=a!=null?a.concat([n]):null,tl(4,4,rp.bind(null,i,n),a)}function mu(){}function ap(n,i){var a=Ci();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&cu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function op(n,i){var a=Ci();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&cu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function lp(n,i,a){return(ps&21)===0?(n.baseState&&(n.baseState=!1,oi=!0),n.memoizedState=a):(Li(a,i)||(a=jt(),yn.lanes|=a,ms|=a,n.baseState=!0),i)}function ov(n,i){var a=fe;fe=a!==0&&4>a?a:4,n(!0);var c=lu.transition;lu.transition={};try{n(!1),i()}finally{fe=a,lu.transition=c}}function cp(){return Ci().memoizedState}function lv(n,i,a){var c=Vr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},up(n))dp(i,a);else if(a=Hh(n,i,a,c),a!==null){var p=ni();Fi(a,n,c,p),fp(a,i,c)}}function cv(n,i,a){var c=Vr(n),p={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(up(n))dp(i,p);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=i.lastRenderedReducer,x!==null))try{var C=i.lastRenderedState,V=x(C,a);if(p.hasEagerState=!0,p.eagerState=V,Li(V,C)){var J=i.interleaved;J===null?(p.next=p,nu(i)):(p.next=J.next,J.next=p),i.interleaved=p;return}}catch{}finally{}a=Hh(n,i,p,c),a!==null&&(p=ni(),Fi(a,n,c,p),fp(a,i,c))}}function up(n){var i=n.alternate;return n===yn||i!==null&&i===yn}function dp(n,i){Ga=Qo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function fp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,te(n,a)}}var nl={readContext:Ti,useCallback:Yn,useContext:Yn,useEffect:Yn,useImperativeHandle:Yn,useInsertionEffect:Yn,useLayoutEffect:Yn,useMemo:Yn,useReducer:Yn,useRef:Yn,useState:Yn,useDebugValue:Yn,useDeferredValue:Yn,useTransition:Yn,useMutableSource:Yn,useSyncExternalStore:Yn,useId:Yn,unstable_isNewReconciler:!1},uv={readContext:Ti,useCallback:function(n,i){return Ji().memoizedState=[n,i===void 0?null:i],n},useContext:Ti,useEffect:tp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,el(4194308,4,rp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return el(4194308,4,n,i)},useInsertionEffect:function(n,i){return el(4,2,n,i)},useMemo:function(n,i){var a=Ji();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ji();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=lv.bind(null,yn,n),[c.memoizedState,n]},useRef:function(n){var i=Ji();return n={current:n},i.memoizedState=n},useState:Qh,useDebugValue:mu,useDeferredValue:function(n){return Ji().memoizedState=n},useTransition:function(){var n=Qh(!1),i=n[0];return n=ov.bind(null,n[1]),Ji().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=yn,p=Ji();if(xn){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),On===null)throw Error(t(349));(ps&30)!==0||Yh(c,i,a)}p.memoizedState=a;var x={value:a,getSnapshot:i};return p.queue=x,tp(Kh.bind(null,c,x,n),[n]),c.flags|=2048,Wa(9,qh.bind(null,c,x,a,i),void 0,null),a},useId:function(){var n=Ji(),i=On.identifierPrefix;if(xn){var a=gr,c=mr;a=(c&~(1<<32-ce(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=ja++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=av++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},dv={readContext:Ti,useCallback:ap,useContext:Ti,useEffect:pu,useImperativeHandle:sp,useInsertionEffect:np,useLayoutEffect:ip,useMemo:op,useReducer:fu,useRef:ep,useState:function(){return fu(Va)},useDebugValue:mu,useDeferredValue:function(n){var i=Ci();return lp(i,Pn.memoizedState,n)},useTransition:function(){var n=fu(Va)[0],i=Ci().memoizedState;return[n,i]},useMutableSource:$h,useSyncExternalStore:Xh,useId:cp,unstable_isNewReconciler:!1},fv={readContext:Ti,useCallback:ap,useContext:Ti,useEffect:pu,useImperativeHandle:sp,useInsertionEffect:np,useLayoutEffect:ip,useMemo:op,useReducer:hu,useRef:ep,useState:function(){return hu(Va)},useDebugValue:mu,useDeferredValue:function(n){var i=Ci();return Pn===null?i.memoizedState=n:lp(i,Pn.memoizedState,n)},useTransition:function(){var n=hu(Va)[0],i=Ci().memoizedState;return[n,i]},useMutableSource:$h,useSyncExternalStore:Xh,useId:cp,unstable_isNewReconciler:!1};function ki(n,i){if(n&&n.defaultProps){i=Z({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function gu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:Z({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var il={isMounted:function(n){return(n=n._reactInternals)?En(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=ni(),p=Vr(n),x=vr(c,p);x.payload=i,a!=null&&(x.callback=a),i=Br(n,x,p),i!==null&&(Fi(i,n,p,c),qo(i,n,p))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=ni(),p=Vr(n),x=vr(c,p);x.tag=1,x.payload=i,a!=null&&(x.callback=a),i=Br(n,x,p),i!==null&&(Fi(i,n,p,c),qo(i,n,p))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=ni(),c=Vr(n),p=vr(a,c);p.tag=2,i!=null&&(p.callback=i),i=Br(n,p,c),i!==null&&(Fi(i,n,c,a),qo(i,n,c))}};function hp(n,i,a,c,p,x,C){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,x,C):i.prototype&&i.prototype.isPureReactComponent?!Pa(a,c)||!Pa(p,x):!0}function pp(n,i,a){var c=!1,p=Ur,x=i.contextType;return typeof x=="object"&&x!==null?x=Ti(x):(p=ai(i)?cs:Xn.current,c=i.contextTypes,x=(c=c!=null)?Bs(n,p):Ur),i=new i(a,x),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=il,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=x),i}function mp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&il.enqueueReplaceState(i,i.state,null)}function xu(n,i,a,c){var p=n.stateNode;p.props=a,p.state=n.memoizedState,p.refs={},iu(n);var x=i.contextType;typeof x=="object"&&x!==null?p.context=Ti(x):(x=ai(i)?cs:Xn.current,p.context=Bs(n,x)),p.state=n.memoizedState,x=i.getDerivedStateFromProps,typeof x=="function"&&(gu(n,i,x,a),p.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(i=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),i!==p.state&&il.enqueueReplaceState(p,p.state,null),Ko(n,a,p,c),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Ys(n,i){try{var a="",c=i;do a+=ne(c),c=c.return;while(c);var p=a}catch(x){p=`
Error generating stack: `+x.message+`
`+x.stack}return{value:n,source:i,stack:p,digest:null}}function vu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function _u(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var hv=typeof WeakMap=="function"?WeakMap:Map;function gp(n,i,a){a=vr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){ul||(ul=!0,Iu=c),_u(n,i)},a}function xp(n,i,a){a=vr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var p=i.value;a.payload=function(){return c(p)},a.callback=function(){_u(n,i)}}var x=n.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(a.callback=function(){_u(n,i),typeof c!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var C=i.stack;this.componentDidCatch(i.value,{componentStack:C!==null?C:""})}),a}function vp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new hv;var p=new Set;c.set(i,p)}else p=c.get(i),p===void 0&&(p=new Set,c.set(i,p));p.has(a)||(p.add(a),n=Cv.bind(null,n,i,a),i.then(n,n))}function _p(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function yp(n,i,a,c,p){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=vr(-1,1),i.tag=2,Br(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var pv=D.ReactCurrentOwner,oi=!1;function ti(n,i,a,c){i.child=n===null?Bh(i,null,a,c):Vs(i,n.child,a,c)}function Sp(n,i,a,c,p){a=a.render;var x=i.ref;return $s(i,p),c=uu(n,i,a,c,x,p),a=du(),n!==null&&!oi?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,_r(n,i,p)):(xn&&a&&Xc(i),i.flags|=1,ti(n,i,c,p),i.child)}function bp(n,i,a,c,p){if(n===null){var x=a.type;return typeof x=="function"&&!Hu(x)&&x.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=x,wp(n,i,x,c,p)):(n=gl(a.type,null,c,i,i.mode,p),n.ref=i.ref,n.return=i,i.child=n)}if(x=n.child,(n.lanes&p)===0){var C=x.memoizedProps;if(a=a.compare,a=a!==null?a:Pa,a(C,c)&&n.ref===i.ref)return _r(n,i,p)}return i.flags|=1,n=$r(x,c),n.ref=i.ref,n.return=i,i.child=n}function wp(n,i,a,c,p){if(n!==null){var x=n.memoizedProps;if(Pa(x,c)&&n.ref===i.ref)if(oi=!1,i.pendingProps=c=x,(n.lanes&p)!==0)(n.flags&131072)!==0&&(oi=!0);else return i.lanes=n.lanes,_r(n,i,p)}return yu(n,i,a,c,p)}function Mp(n,i,a){var c=i.pendingProps,p=c.children,x=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},dn(Ks,xi),xi|=a;else{if((a&1073741824)===0)return n=x!==null?x.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,dn(Ks,xi),xi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=x!==null?x.baseLanes:a,dn(Ks,xi),xi|=c}else x!==null?(c=x.baseLanes|a,i.memoizedState=null):c=a,dn(Ks,xi),xi|=c;return ti(n,i,p,a),i.child}function Ep(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function yu(n,i,a,c,p){var x=ai(a)?cs:Xn.current;return x=Bs(i,x),$s(i,p),a=uu(n,i,a,c,x,p),c=du(),n!==null&&!oi?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,_r(n,i,p)):(xn&&c&&Xc(i),i.flags|=1,ti(n,i,a,p),i.child)}function Tp(n,i,a,c,p){if(ai(a)){var x=!0;Ho(i)}else x=!1;if($s(i,p),i.stateNode===null)sl(n,i),pp(i,a,c),xu(i,a,c,p),c=!0;else if(n===null){var C=i.stateNode,V=i.memoizedProps;C.props=V;var J=C.context,be=a.contextType;typeof be=="object"&&be!==null?be=Ti(be):(be=ai(a)?cs:Xn.current,be=Bs(i,be));var Fe=a.getDerivedStateFromProps,Be=typeof Fe=="function"||typeof C.getSnapshotBeforeUpdate=="function";Be||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(V!==c||J!==be)&&mp(i,C,c,be),Or=!1;var Ue=i.memoizedState;C.state=Ue,Ko(i,c,C,p),J=i.memoizedState,V!==c||Ue!==J||si.current||Or?(typeof Fe=="function"&&(gu(i,a,Fe,c),J=i.memoizedState),(V=Or||hp(i,a,V,c,Ue,J,be))?(Be||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(i.flags|=4194308)):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=J),C.props=c,C.state=J,C.context=be,c=V):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{C=i.stateNode,Gh(n,i),V=i.memoizedProps,be=i.type===i.elementType?V:ki(i.type,V),C.props=be,Be=i.pendingProps,Ue=C.context,J=a.contextType,typeof J=="object"&&J!==null?J=Ti(J):(J=ai(a)?cs:Xn.current,J=Bs(i,J));var it=a.getDerivedStateFromProps;(Fe=typeof it=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(V!==Be||Ue!==J)&&mp(i,C,c,J),Or=!1,Ue=i.memoizedState,C.state=Ue,Ko(i,c,C,p);var dt=i.memoizedState;V!==Be||Ue!==dt||si.current||Or?(typeof it=="function"&&(gu(i,a,it,c),dt=i.memoizedState),(be=Or||hp(i,a,be,c,Ue,dt,J)||!1)?(Fe||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(c,dt,J),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(c,dt,J)),typeof C.componentDidUpdate=="function"&&(i.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof C.componentDidUpdate!="function"||V===n.memoizedProps&&Ue===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||V===n.memoizedProps&&Ue===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=dt),C.props=c,C.state=dt,C.context=J,c=be):(typeof C.componentDidUpdate!="function"||V===n.memoizedProps&&Ue===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||V===n.memoizedProps&&Ue===n.memoizedState||(i.flags|=1024),c=!1)}return Su(n,i,a,c,x,p)}function Su(n,i,a,c,p,x){Ep(n,i);var C=(i.flags&128)!==0;if(!c&&!C)return p&&Ph(i,a,!1),_r(n,i,x);c=i.stateNode,pv.current=i;var V=C&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&C?(i.child=Vs(i,n.child,null,x),i.child=Vs(i,null,V,x)):ti(n,i,V,x),i.memoizedState=c.state,p&&Ph(i,a,!0),i.child}function Cp(n){var i=n.stateNode;i.pendingContext?Rh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Rh(n,i.context,!1),ru(n,i.containerInfo)}function Ap(n,i,a,c,p){return js(),Zc(p),i.flags|=256,ti(n,i,a,c),i.child}var bu={dehydrated:null,treeContext:null,retryLane:0};function wu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Rp(n,i,a){var c=i.pendingProps,p=_n.current,x=!1,C=(i.flags&128)!==0,V;if((V=C)||(V=n!==null&&n.memoizedState===null?!1:(p&2)!==0),V?(x=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),dn(_n,p&1),n===null)return Kc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(C=c.children,n=c.fallback,x?(c=i.mode,x=i.child,C={mode:"hidden",children:C},(c&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=C):x=xl(C,c,0,null),n=_s(n,c,a,null),x.return=i,n.return=i,x.sibling=n,i.child=x,i.child.memoizedState=wu(a),i.memoizedState=bu,n):Mu(i,C));if(p=n.memoizedState,p!==null&&(V=p.dehydrated,V!==null))return mv(n,i,C,c,V,p,a);if(x){x=c.fallback,C=i.mode,p=n.child,V=p.sibling;var J={mode:"hidden",children:c.children};return(C&1)===0&&i.child!==p?(c=i.child,c.childLanes=0,c.pendingProps=J,i.deletions=null):(c=$r(p,J),c.subtreeFlags=p.subtreeFlags&14680064),V!==null?x=$r(V,x):(x=_s(x,C,a,null),x.flags|=2),x.return=i,c.return=i,c.sibling=x,i.child=c,c=x,x=i.child,C=n.child.memoizedState,C=C===null?wu(a):{baseLanes:C.baseLanes|a,cachePool:null,transitions:C.transitions},x.memoizedState=C,x.childLanes=n.childLanes&~a,i.memoizedState=bu,c}return x=n.child,n=x.sibling,c=$r(x,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Mu(n,i){return i=xl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function rl(n,i,a,c){return c!==null&&Zc(c),Vs(i,n.child,null,a),n=Mu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function mv(n,i,a,c,p,x,C){if(a)return i.flags&256?(i.flags&=-257,c=vu(Error(t(422))),rl(n,i,C,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(x=c.fallback,p=i.mode,c=xl({mode:"visible",children:c.children},p,0,null),x=_s(x,p,C,null),x.flags|=2,c.return=i,x.return=i,c.sibling=x,i.child=c,(i.mode&1)!==0&&Vs(i,n.child,null,C),i.child.memoizedState=wu(C),i.memoizedState=bu,x);if((i.mode&1)===0)return rl(n,i,C,null);if(p.data==="$!"){if(c=p.nextSibling&&p.nextSibling.dataset,c)var V=c.dgst;return c=V,x=Error(t(419)),c=vu(x,c,void 0),rl(n,i,C,c)}if(V=(C&n.childLanes)!==0,oi||V){if(c=On,c!==null){switch(C&-C){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(c.suspendedLanes|C))!==0?0:p,p!==0&&p!==x.retryLane&&(x.retryLane=p,xr(n,p),Fi(c,n,p,-1))}return Bu(),c=vu(Error(t(421))),rl(n,i,C,c)}return p.data==="$?"?(i.flags|=128,i.child=n.child,i=Av.bind(null,n),p._reactRetry=i,null):(n=x.treeContext,gi=kr(p.nextSibling),mi=i,xn=!0,Ii=null,n!==null&&(Mi[Ei++]=mr,Mi[Ei++]=gr,Mi[Ei++]=us,mr=n.id,gr=n.overflow,us=i),i=Mu(i,c.children),i.flags|=4096,i)}function Np(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),tu(n.return,i,a)}function Eu(n,i,a,c,p){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:p}:(x.isBackwards=i,x.rendering=null,x.renderingStartTime=0,x.last=c,x.tail=a,x.tailMode=p)}function Pp(n,i,a){var c=i.pendingProps,p=c.revealOrder,x=c.tail;if(ti(n,i,c.children,a),c=_n.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Np(n,a,i);else if(n.tag===19)Np(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(dn(_n,c),(i.mode&1)===0)i.memoizedState=null;else switch(p){case"forwards":for(a=i.child,p=null;a!==null;)n=a.alternate,n!==null&&Zo(n)===null&&(p=a),a=a.sibling;a=p,a===null?(p=i.child,i.child=null):(p=a.sibling,a.sibling=null),Eu(i,!1,p,a,x);break;case"backwards":for(a=null,p=i.child,i.child=null;p!==null;){if(n=p.alternate,n!==null&&Zo(n)===null){i.child=p;break}n=p.sibling,p.sibling=a,a=p,p=n}Eu(i,!0,a,null,x);break;case"together":Eu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function sl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function _r(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ms|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=$r(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=$r(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function gv(n,i,a){switch(i.tag){case 3:Cp(i),js();break;case 5:Wh(i);break;case 1:ai(i.type)&&Ho(i);break;case 4:ru(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,p=i.memoizedProps.value;dn(Xo,c._currentValue),c._currentValue=p;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(dn(_n,_n.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Rp(n,i,a):(dn(_n,_n.current&1),n=_r(n,i,a),n!==null?n.sibling:null);dn(_n,_n.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Pp(n,i,a);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),dn(_n,_n.current),c)break;return null;case 22:case 23:return i.lanes=0,Mp(n,i,a)}return _r(n,i,a)}var Dp,Tu,Lp,Ip;Dp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Tu=function(){},Lp=function(n,i,a,c){var p=n.memoizedProps;if(p!==c){n=i.stateNode,hs(Zi.current);var x=null;switch(a){case"input":p=qe(n,p),c=qe(n,c),x=[];break;case"select":p=Z({},p,{value:void 0}),c=Z({},c,{value:void 0}),x=[];break;case"textarea":p=cn(n,p),c=cn(n,c),x=[];break;default:typeof p.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Fo)}Ee(a,c);var C;a=null;for(be in p)if(!c.hasOwnProperty(be)&&p.hasOwnProperty(be)&&p[be]!=null)if(be==="style"){var V=p[be];for(C in V)V.hasOwnProperty(C)&&(a||(a={}),a[C]="")}else be!=="dangerouslySetInnerHTML"&&be!=="children"&&be!=="suppressContentEditableWarning"&&be!=="suppressHydrationWarning"&&be!=="autoFocus"&&(o.hasOwnProperty(be)?x||(x=[]):(x=x||[]).push(be,null));for(be in c){var J=c[be];if(V=p!=null?p[be]:void 0,c.hasOwnProperty(be)&&J!==V&&(J!=null||V!=null))if(be==="style")if(V){for(C in V)!V.hasOwnProperty(C)||J&&J.hasOwnProperty(C)||(a||(a={}),a[C]="");for(C in J)J.hasOwnProperty(C)&&V[C]!==J[C]&&(a||(a={}),a[C]=J[C])}else a||(x||(x=[]),x.push(be,a)),a=J;else be==="dangerouslySetInnerHTML"?(J=J?J.__html:void 0,V=V?V.__html:void 0,J!=null&&V!==J&&(x=x||[]).push(be,J)):be==="children"?typeof J!="string"&&typeof J!="number"||(x=x||[]).push(be,""+J):be!=="suppressContentEditableWarning"&&be!=="suppressHydrationWarning"&&(o.hasOwnProperty(be)?(J!=null&&be==="onScroll"&&pn("scroll",n),x||V===J||(x=[])):(x=x||[]).push(be,J))}a&&(x=x||[]).push("style",a);var be=x;(i.updateQueue=be)&&(i.flags|=4)}},Ip=function(n,i,a,c){a!==c&&(i.flags|=4)};function $a(n,i){if(!xn)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function qn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var p=n.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags&14680064,c|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function xv(n,i,a){var c=i.pendingProps;switch(Yc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qn(i),null;case 1:return ai(i.type)&&Bo(),qn(i),null;case 3:return c=i.stateNode,Xs(),mn(si),mn(Xn),ou(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Wo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ii!==null&&(Uu(Ii),Ii=null))),Tu(n,i),qn(i),null;case 5:su(i);var p=hs(Ha.current);if(a=i.type,n!==null&&i.stateNode!=null)Lp(n,i,a,c,p),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return qn(i),null}if(n=hs(Zi.current),Wo(i)){c=i.stateNode,a=i.type;var x=i.memoizedProps;switch(c[Ki]=i,c[za]=x,n=(i.mode&1)!==0,a){case"dialog":pn("cancel",c),pn("close",c);break;case"iframe":case"object":case"embed":pn("load",c);break;case"video":case"audio":for(p=0;p<La.length;p++)pn(La[p],c);break;case"source":pn("error",c);break;case"img":case"image":case"link":pn("error",c),pn("load",c);break;case"details":pn("toggle",c);break;case"input":mt(c,x),pn("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!x.multiple},pn("invalid",c);break;case"textarea":gn(c,x),pn("invalid",c)}Ee(a,x),p=null;for(var C in x)if(x.hasOwnProperty(C)){var V=x[C];C==="children"?typeof V=="string"?c.textContent!==V&&(x.suppressHydrationWarning!==!0&&Uo(c.textContent,V,n),p=["children",V]):typeof V=="number"&&c.textContent!==""+V&&(x.suppressHydrationWarning!==!0&&Uo(c.textContent,V,n),p=["children",""+V]):o.hasOwnProperty(C)&&V!=null&&C==="onScroll"&&pn("scroll",c)}switch(a){case"input":$e(c),yt(c,x,!0);break;case"textarea":$e(c),vn(c);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(c.onclick=Fo)}c=p,i.updateQueue=c,c!==null&&(i.flags|=4)}else{C=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Et(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=C.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=C.createElement(a,{is:c.is}):(n=C.createElement(a),a==="select"&&(C=n,c.multiple?C.multiple=!0:c.size&&(C.size=c.size))):n=C.createElementNS(n,a),n[Ki]=i,n[za]=c,Dp(n,i,!1,!1),i.stateNode=n;e:{switch(C=ke(a,c),a){case"dialog":pn("cancel",n),pn("close",n),p=c;break;case"iframe":case"object":case"embed":pn("load",n),p=c;break;case"video":case"audio":for(p=0;p<La.length;p++)pn(La[p],n);p=c;break;case"source":pn("error",n),p=c;break;case"img":case"image":case"link":pn("error",n),pn("load",n),p=c;break;case"details":pn("toggle",n),p=c;break;case"input":mt(n,c),p=qe(n,c),pn("invalid",n);break;case"option":p=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},p=Z({},c,{value:void 0}),pn("invalid",n);break;case"textarea":gn(n,c),p=cn(n,c),pn("invalid",n);break;default:p=c}Ee(a,p),V=p;for(x in V)if(V.hasOwnProperty(x)){var J=V[x];x==="style"?ae(n,J):x==="dangerouslySetInnerHTML"?(J=J?J.__html:void 0,J!=null&&Kt(n,J)):x==="children"?typeof J=="string"?(a!=="textarea"||J!=="")&&ot(n,J):typeof J=="number"&&ot(n,""+J):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?J!=null&&x==="onScroll"&&pn("scroll",n):J!=null&&k(n,x,J,C))}switch(a){case"input":$e(n),yt(n,c,!1);break;case"textarea":$e(n),vn(n);break;case"option":c.value!=null&&n.setAttribute("value",""+me(c.value));break;case"select":n.multiple=!!c.multiple,x=c.value,x!=null?Lt(n,!!c.multiple,x,!1):c.defaultValue!=null&&Lt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=Fo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return qn(i),null;case 6:if(n&&i.stateNode!=null)Ip(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=hs(Ha.current),hs(Zi.current),Wo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ki]=i,(x=c.nodeValue!==a)&&(n=mi,n!==null))switch(n.tag){case 3:Uo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Uo(c.nodeValue,a,(n.mode&1)!==0)}x&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ki]=i,i.stateNode=c}return qn(i),null;case 13:if(mn(_n),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(xn&&gi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Uh(),js(),i.flags|=98560,x=!1;else if(x=Wo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!x)throw Error(t(318));if(x=i.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Ki]=i}else js(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;qn(i),x=!1}else Ii!==null&&(Uu(Ii),Ii=null),x=!0;if(!x)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(_n.current&1)!==0?Dn===0&&(Dn=3):Bu())),i.updateQueue!==null&&(i.flags|=4),qn(i),null);case 4:return Xs(),Tu(n,i),n===null&&Ia(i.stateNode.containerInfo),qn(i),null;case 10:return eu(i.type._context),qn(i),null;case 17:return ai(i.type)&&Bo(),qn(i),null;case 19:if(mn(_n),x=i.memoizedState,x===null)return qn(i),null;if(c=(i.flags&128)!==0,C=x.rendering,C===null)if(c)$a(x,!1);else{if(Dn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(C=Zo(n),C!==null){for(i.flags|=128,$a(x,!1),c=C.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)x=a,n=c,x.flags&=14680066,C=x.alternate,C===null?(x.childLanes=0,x.lanes=n,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=C.childLanes,x.lanes=C.lanes,x.child=C.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=C.memoizedProps,x.memoizedState=C.memoizedState,x.updateQueue=C.updateQueue,x.type=C.type,n=C.dependencies,x.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return dn(_n,_n.current&1|2),i.child}n=n.sibling}x.tail!==null&&At()>Zs&&(i.flags|=128,c=!0,$a(x,!1),i.lanes=4194304)}else{if(!c)if(n=Zo(C),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),$a(x,!0),x.tail===null&&x.tailMode==="hidden"&&!C.alternate&&!xn)return qn(i),null}else 2*At()-x.renderingStartTime>Zs&&a!==1073741824&&(i.flags|=128,c=!0,$a(x,!1),i.lanes=4194304);x.isBackwards?(C.sibling=i.child,i.child=C):(a=x.last,a!==null?a.sibling=C:i.child=C,x.last=C)}return x.tail!==null?(i=x.tail,x.rendering=i,x.tail=i.sibling,x.renderingStartTime=At(),i.sibling=null,a=_n.current,dn(_n,c?a&1|2:a&1),i):(qn(i),null);case 22:case 23:return Ou(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(xi&1073741824)!==0&&(qn(i),i.subtreeFlags&6&&(i.flags|=8192)):qn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function vv(n,i){switch(Yc(i),i.tag){case 1:return ai(i.type)&&Bo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Xs(),mn(si),mn(Xn),ou(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return su(i),null;case 13:if(mn(_n),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));js()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return mn(_n),null;case 4:return Xs(),null;case 10:return eu(i.type._context),null;case 22:case 23:return Ou(),null;case 24:return null;default:return null}}var al=!1,Kn=!1,_v=typeof WeakSet=="function"?WeakSet:Set,ct=null;function qs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Mn(n,i,c)}else a.current=null}function Cu(n,i,a){try{a()}catch(c){Mn(n,i,c)}}var kp=!1;function yv(n,i){if(Oc=To,n=hh(),Pc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var p=c.anchorOffset,x=c.focusNode;c=c.focusOffset;try{a.nodeType,x.nodeType}catch{a=null;break e}var C=0,V=-1,J=-1,be=0,Fe=0,Be=n,Ue=null;t:for(;;){for(var it;Be!==a||p!==0&&Be.nodeType!==3||(V=C+p),Be!==x||c!==0&&Be.nodeType!==3||(J=C+c),Be.nodeType===3&&(C+=Be.nodeValue.length),(it=Be.firstChild)!==null;)Ue=Be,Be=it;for(;;){if(Be===n)break t;if(Ue===a&&++be===p&&(V=C),Ue===x&&++Fe===c&&(J=C),(it=Be.nextSibling)!==null)break;Be=Ue,Ue=Be.parentNode}Be=it}a=V===-1||J===-1?null:{start:V,end:J}}else a=null}a=a||{start:0,end:0}}else a=null;for(Bc={focusedElem:n,selectionRange:a},To=!1,ct=i;ct!==null;)if(i=ct,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ct=n;else for(;ct!==null;){i=ct;try{var dt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(dt!==null){var ft=dt.memoizedProps,Tn=dt.memoizedState,pe=i.stateNode,re=pe.getSnapshotBeforeUpdate(i.elementType===i.type?ft:ki(i.type,ft),Tn);pe.__reactInternalSnapshotBeforeUpdate=re}break;case 3:var xe=i.stateNode.containerInfo;xe.nodeType===1?xe.textContent="":xe.nodeType===9&&xe.documentElement&&xe.removeChild(xe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(We){Mn(i,i.return,We)}if(n=i.sibling,n!==null){n.return=i.return,ct=n;break}ct=i.return}return dt=kp,kp=!1,dt}function Xa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var p=c=c.next;do{if((p.tag&n)===n){var x=p.destroy;p.destroy=void 0,x!==void 0&&Cu(i,a,x)}p=p.next}while(p!==c)}}function ol(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Au(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function zp(n){var i=n.alternate;i!==null&&(n.alternate=null,zp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ki],delete i[za],delete i[Vc],delete i[nv],delete i[iv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Up(n){return n.tag===5||n.tag===3||n.tag===4}function Fp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Up(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ru(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Fo));else if(c!==4&&(n=n.child,n!==null))for(Ru(n,i,a),n=n.sibling;n!==null;)Ru(n,i,a),n=n.sibling}function Nu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Nu(n,i,a),n=n.sibling;n!==null;)Nu(n,i,a),n=n.sibling}var jn=null,zi=!1;function Hr(n,i,a){for(a=a.child;a!==null;)Op(n,i,a),a=a.sibling}function Op(n,i,a){if(ge&&typeof ge.onCommitFiberUnmount=="function")try{ge.onCommitFiberUnmount(K,a)}catch{}switch(a.tag){case 5:Kn||qs(a,i);case 6:var c=jn,p=zi;jn=null,Hr(n,i,a),jn=c,zi=p,jn!==null&&(zi?(n=jn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):jn.removeChild(a.stateNode));break;case 18:jn!==null&&(zi?(n=jn,a=a.stateNode,n.nodeType===8?jc(n.parentNode,a):n.nodeType===1&&jc(n,a),Ea(n)):jc(jn,a.stateNode));break;case 4:c=jn,p=zi,jn=a.stateNode.containerInfo,zi=!0,Hr(n,i,a),jn=c,zi=p;break;case 0:case 11:case 14:case 15:if(!Kn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){p=c=c.next;do{var x=p,C=x.destroy;x=x.tag,C!==void 0&&((x&2)!==0||(x&4)!==0)&&Cu(a,i,C),p=p.next}while(p!==c)}Hr(n,i,a);break;case 1:if(!Kn&&(qs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(V){Mn(a,i,V)}Hr(n,i,a);break;case 21:Hr(n,i,a);break;case 22:a.mode&1?(Kn=(c=Kn)||a.memoizedState!==null,Hr(n,i,a),Kn=c):Hr(n,i,a);break;default:Hr(n,i,a)}}function Bp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new _v),i.forEach(function(c){var p=Rv.bind(null,n,c);a.has(c)||(a.add(c),c.then(p,p))})}}function Ui(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var p=a[c];try{var x=n,C=i,V=C;e:for(;V!==null;){switch(V.tag){case 5:jn=V.stateNode,zi=!1;break e;case 3:jn=V.stateNode.containerInfo,zi=!0;break e;case 4:jn=V.stateNode.containerInfo,zi=!0;break e}V=V.return}if(jn===null)throw Error(t(160));Op(x,C,p),jn=null,zi=!1;var J=p.alternate;J!==null&&(J.return=null),p.return=null}catch(be){Mn(p,i,be)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Hp(i,n),i=i.sibling}function Hp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ui(i,n),Qi(n),c&4){try{Xa(3,n,n.return),ol(3,n)}catch(ft){Mn(n,n.return,ft)}try{Xa(5,n,n.return)}catch(ft){Mn(n,n.return,ft)}}break;case 1:Ui(i,n),Qi(n),c&512&&a!==null&&qs(a,a.return);break;case 5:if(Ui(i,n),Qi(n),c&512&&a!==null&&qs(a,a.return),n.flags&32){var p=n.stateNode;try{ot(p,"")}catch(ft){Mn(n,n.return,ft)}}if(c&4&&(p=n.stateNode,p!=null)){var x=n.memoizedProps,C=a!==null?a.memoizedProps:x,V=n.type,J=n.updateQueue;if(n.updateQueue=null,J!==null)try{V==="input"&&x.type==="radio"&&x.name!=null&&xt(p,x),ke(V,C);var be=ke(V,x);for(C=0;C<J.length;C+=2){var Fe=J[C],Be=J[C+1];Fe==="style"?ae(p,Be):Fe==="dangerouslySetInnerHTML"?Kt(p,Be):Fe==="children"?ot(p,Be):k(p,Fe,Be,be)}switch(V){case"input":wt(p,x);break;case"textarea":ee(p,x);break;case"select":var Ue=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!x.multiple;var it=x.value;it!=null?Lt(p,!!x.multiple,it,!1):Ue!==!!x.multiple&&(x.defaultValue!=null?Lt(p,!!x.multiple,x.defaultValue,!0):Lt(p,!!x.multiple,x.multiple?[]:"",!1))}p[za]=x}catch(ft){Mn(n,n.return,ft)}}break;case 6:if(Ui(i,n),Qi(n),c&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,x=n.memoizedProps;try{p.nodeValue=x}catch(ft){Mn(n,n.return,ft)}}break;case 3:if(Ui(i,n),Qi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Ea(i.containerInfo)}catch(ft){Mn(n,n.return,ft)}break;case 4:Ui(i,n),Qi(n);break;case 13:Ui(i,n),Qi(n),p=n.child,p.flags&8192&&(x=p.memoizedState!==null,p.stateNode.isHidden=x,!x||p.alternate!==null&&p.alternate.memoizedState!==null||(Lu=At())),c&4&&Bp(n);break;case 22:if(Fe=a!==null&&a.memoizedState!==null,n.mode&1?(Kn=(be=Kn)||Fe,Ui(i,n),Kn=be):Ui(i,n),Qi(n),c&8192){if(be=n.memoizedState!==null,(n.stateNode.isHidden=be)&&!Fe&&(n.mode&1)!==0)for(ct=n,Fe=n.child;Fe!==null;){for(Be=ct=Fe;ct!==null;){switch(Ue=ct,it=Ue.child,Ue.tag){case 0:case 11:case 14:case 15:Xa(4,Ue,Ue.return);break;case 1:qs(Ue,Ue.return);var dt=Ue.stateNode;if(typeof dt.componentWillUnmount=="function"){c=Ue,a=Ue.return;try{i=c,dt.props=i.memoizedProps,dt.state=i.memoizedState,dt.componentWillUnmount()}catch(ft){Mn(c,a,ft)}}break;case 5:qs(Ue,Ue.return);break;case 22:if(Ue.memoizedState!==null){Vp(Be);continue}}it!==null?(it.return=Ue,ct=it):Vp(Be)}Fe=Fe.sibling}e:for(Fe=null,Be=n;;){if(Be.tag===5){if(Fe===null){Fe=Be;try{p=Be.stateNode,be?(x=p.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(V=Be.stateNode,J=Be.memoizedProps.style,C=J!=null&&J.hasOwnProperty("display")?J.display:null,V.style.display=T("display",C))}catch(ft){Mn(n,n.return,ft)}}}else if(Be.tag===6){if(Fe===null)try{Be.stateNode.nodeValue=be?"":Be.memoizedProps}catch(ft){Mn(n,n.return,ft)}}else if((Be.tag!==22&&Be.tag!==23||Be.memoizedState===null||Be===n)&&Be.child!==null){Be.child.return=Be,Be=Be.child;continue}if(Be===n)break e;for(;Be.sibling===null;){if(Be.return===null||Be.return===n)break e;Fe===Be&&(Fe=null),Be=Be.return}Fe===Be&&(Fe=null),Be.sibling.return=Be.return,Be=Be.sibling}}break;case 19:Ui(i,n),Qi(n),c&4&&Bp(n);break;case 21:break;default:Ui(i,n),Qi(n)}}function Qi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Up(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var p=c.stateNode;c.flags&32&&(ot(p,""),c.flags&=-33);var x=Fp(n);Nu(n,x,p);break;case 3:case 4:var C=c.stateNode.containerInfo,V=Fp(n);Ru(n,V,C);break;default:throw Error(t(161))}}catch(J){Mn(n,n.return,J)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Sv(n,i,a){ct=n,Gp(n)}function Gp(n,i,a){for(var c=(n.mode&1)!==0;ct!==null;){var p=ct,x=p.child;if(p.tag===22&&c){var C=p.memoizedState!==null||al;if(!C){var V=p.alternate,J=V!==null&&V.memoizedState!==null||Kn;V=al;var be=Kn;if(al=C,(Kn=J)&&!be)for(ct=p;ct!==null;)C=ct,J=C.child,C.tag===22&&C.memoizedState!==null?Wp(p):J!==null?(J.return=C,ct=J):Wp(p);for(;x!==null;)ct=x,Gp(x),x=x.sibling;ct=p,al=V,Kn=be}jp(n)}else(p.subtreeFlags&8772)!==0&&x!==null?(x.return=p,ct=x):jp(n)}}function jp(n){for(;ct!==null;){var i=ct;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Kn||ol(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Kn)if(a===null)c.componentDidMount();else{var p=i.elementType===i.type?a.memoizedProps:ki(i.type,a.memoizedProps);c.componentDidUpdate(p,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var x=i.updateQueue;x!==null&&Vh(i,x,c);break;case 3:var C=i.updateQueue;if(C!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Vh(i,C,a)}break;case 5:var V=i.stateNode;if(a===null&&i.flags&4){a=V;var J=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":J.autoFocus&&a.focus();break;case"img":J.src&&(a.src=J.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var be=i.alternate;if(be!==null){var Fe=be.memoizedState;if(Fe!==null){var Be=Fe.dehydrated;Be!==null&&Ea(Be)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Kn||i.flags&512&&Au(i)}catch(Ue){Mn(i,i.return,Ue)}}if(i===n){ct=null;break}if(a=i.sibling,a!==null){a.return=i.return,ct=a;break}ct=i.return}}function Vp(n){for(;ct!==null;){var i=ct;if(i===n){ct=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ct=a;break}ct=i.return}}function Wp(n){for(;ct!==null;){var i=ct;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{ol(4,i)}catch(J){Mn(i,a,J)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var p=i.return;try{c.componentDidMount()}catch(J){Mn(i,p,J)}}var x=i.return;try{Au(i)}catch(J){Mn(i,x,J)}break;case 5:var C=i.return;try{Au(i)}catch(J){Mn(i,C,J)}}}catch(J){Mn(i,i.return,J)}if(i===n){ct=null;break}var V=i.sibling;if(V!==null){V.return=i.return,ct=V;break}ct=i.return}}var bv=Math.ceil,ll=D.ReactCurrentDispatcher,Pu=D.ReactCurrentOwner,Ai=D.ReactCurrentBatchConfig,qt=0,On=null,Cn=null,Vn=0,xi=0,Ks=zr(0),Dn=0,Ya=null,ms=0,cl=0,Du=0,qa=null,li=null,Lu=0,Zs=1/0,yr=null,ul=!1,Iu=null,Gr=null,dl=!1,jr=null,fl=0,Ka=0,ku=null,hl=-1,pl=0;function ni(){return(qt&6)!==0?At():hl!==-1?hl:hl=At()}function Vr(n){return(n.mode&1)===0?1:(qt&2)!==0&&Vn!==0?Vn&-Vn:sv.transition!==null?(pl===0&&(pl=jt()),pl):(n=fe,n!==0||(n=window.event,n=n===void 0?16:Xf(n.type)),n)}function Fi(n,i,a,c){if(50<Ka)throw Ka=0,ku=null,Error(t(185));ln(n,a,c),((qt&2)===0||n!==On)&&(n===On&&((qt&2)===0&&(cl|=a),Dn===4&&Wr(n,Vn)),ci(n,c),a===1&&qt===0&&(i.mode&1)===0&&(Zs=At()+500,Go&&Fr()))}function ci(n,i){var a=n.callbackNode;Pt(n,i);var c=Mt(n,n===On?Vn:0);if(c===0)a!==null&&hi(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&hi(a),i===1)n.tag===0?rv(Xp.bind(null,n)):Dh(Xp.bind(null,n)),ev(function(){(qt&6)===0&&Fr()}),a=null;else{switch(B(c)){case 1:a=bi;break;case 4:a=wi;break;case 16:a=ri;break;case 536870912:a=A;break;default:a=ri}a=t0(a,$p.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function $p(n,i){if(hl=-1,pl=0,(qt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Js()&&n.callbackNode!==a)return null;var c=Mt(n,n===On?Vn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=ml(n,c);else{i=c;var p=qt;qt|=2;var x=qp();(On!==n||Vn!==i)&&(yr=null,Zs=At()+500,xs(n,i));do try{Ev();break}catch(V){Yp(n,V)}while(!0);Qc(),ll.current=x,qt=p,Cn!==null?i=0:(On=null,Vn=0,i=Dn)}if(i!==0){if(i===2&&(p=on(n),p!==0&&(c=p,i=zu(n,p))),i===1)throw a=Ya,xs(n,0),Wr(n,c),ci(n,At()),a;if(i===6)Wr(n,c);else{if(p=n.current.alternate,(c&30)===0&&!wv(p)&&(i=ml(n,c),i===2&&(x=on(n),x!==0&&(c=x,i=zu(n,x))),i===1))throw a=Ya,xs(n,0),Wr(n,c),ci(n,At()),a;switch(n.finishedWork=p,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:vs(n,li,yr);break;case 3:if(Wr(n,c),(c&130023424)===c&&(i=Lu+500-At(),10<i)){if(Mt(n,0)!==0)break;if(p=n.suspendedLanes,(p&c)!==c){ni(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Gc(vs.bind(null,n,li,yr),i);break}vs(n,li,yr);break;case 4:if(Wr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,p=-1;0<c;){var C=31-ce(c);x=1<<C,C=i[C],C>p&&(p=C),c&=~x}if(c=p,c=At()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*bv(c/1960))-c,10<c){n.timeoutHandle=Gc(vs.bind(null,n,li,yr),c);break}vs(n,li,yr);break;case 5:vs(n,li,yr);break;default:throw Error(t(329))}}}return ci(n,At()),n.callbackNode===a?$p.bind(null,n):null}function zu(n,i){var a=qa;return n.current.memoizedState.isDehydrated&&(xs(n,i).flags|=256),n=ml(n,i),n!==2&&(i=li,li=a,i!==null&&Uu(i)),n}function Uu(n){li===null?li=n:li.push.apply(li,n)}function wv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var p=a[c],x=p.getSnapshot;p=p.value;try{if(!Li(x(),p))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Wr(n,i){for(i&=~Du,i&=~cl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-ce(i),c=1<<a;n[a]=-1,i&=~c}}function Xp(n){if((qt&6)!==0)throw Error(t(327));Js();var i=Mt(n,0);if((i&1)===0)return ci(n,At()),null;var a=ml(n,i);if(n.tag!==0&&a===2){var c=on(n);c!==0&&(i=c,a=zu(n,c))}if(a===1)throw a=Ya,xs(n,0),Wr(n,i),ci(n,At()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,vs(n,li,yr),ci(n,At()),null}function Fu(n,i){var a=qt;qt|=1;try{return n(i)}finally{qt=a,qt===0&&(Zs=At()+500,Go&&Fr())}}function gs(n){jr!==null&&jr.tag===0&&(qt&6)===0&&Js();var i=qt;qt|=1;var a=Ai.transition,c=fe;try{if(Ai.transition=null,fe=1,n)return n()}finally{fe=c,Ai.transition=a,qt=i,(qt&6)===0&&Fr()}}function Ou(){xi=Ks.current,mn(Ks)}function xs(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Qx(a)),Cn!==null)for(a=Cn.return;a!==null;){var c=a;switch(Yc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Bo();break;case 3:Xs(),mn(si),mn(Xn),ou();break;case 5:su(c);break;case 4:Xs();break;case 13:mn(_n);break;case 19:mn(_n);break;case 10:eu(c.type._context);break;case 22:case 23:Ou()}a=a.return}if(On=n,Cn=n=$r(n.current,null),Vn=xi=i,Dn=0,Ya=null,Du=cl=ms=0,li=qa=null,fs!==null){for(i=0;i<fs.length;i++)if(a=fs[i],c=a.interleaved,c!==null){a.interleaved=null;var p=c.next,x=a.pending;if(x!==null){var C=x.next;x.next=p,c.next=C}a.pending=c}fs=null}return n}function Yp(n,i){do{var a=Cn;try{if(Qc(),Jo.current=nl,Qo){for(var c=yn.memoizedState;c!==null;){var p=c.queue;p!==null&&(p.pending=null),c=c.next}Qo=!1}if(ps=0,Fn=Pn=yn=null,Ga=!1,ja=0,Pu.current=null,a===null||a.return===null){Dn=1,Ya=i,Cn=null;break}e:{var x=n,C=a.return,V=a,J=i;if(i=Vn,V.flags|=32768,J!==null&&typeof J=="object"&&typeof J.then=="function"){var be=J,Fe=V,Be=Fe.tag;if((Fe.mode&1)===0&&(Be===0||Be===11||Be===15)){var Ue=Fe.alternate;Ue?(Fe.updateQueue=Ue.updateQueue,Fe.memoizedState=Ue.memoizedState,Fe.lanes=Ue.lanes):(Fe.updateQueue=null,Fe.memoizedState=null)}var it=_p(C);if(it!==null){it.flags&=-257,yp(it,C,V,x,i),it.mode&1&&vp(x,be,i),i=it,J=be;var dt=i.updateQueue;if(dt===null){var ft=new Set;ft.add(J),i.updateQueue=ft}else dt.add(J);break e}else{if((i&1)===0){vp(x,be,i),Bu();break e}J=Error(t(426))}}else if(xn&&V.mode&1){var Tn=_p(C);if(Tn!==null){(Tn.flags&65536)===0&&(Tn.flags|=256),yp(Tn,C,V,x,i),Zc(Ys(J,V));break e}}x=J=Ys(J,V),Dn!==4&&(Dn=2),qa===null?qa=[x]:qa.push(x),x=C;do{switch(x.tag){case 3:x.flags|=65536,i&=-i,x.lanes|=i;var pe=gp(x,J,i);jh(x,pe);break e;case 1:V=J;var re=x.type,xe=x.stateNode;if((x.flags&128)===0&&(typeof re.getDerivedStateFromError=="function"||xe!==null&&typeof xe.componentDidCatch=="function"&&(Gr===null||!Gr.has(xe)))){x.flags|=65536,i&=-i,x.lanes|=i;var We=xp(x,V,i);jh(x,We);break e}}x=x.return}while(x!==null)}Zp(a)}catch(ht){i=ht,Cn===a&&a!==null&&(Cn=a=a.return);continue}break}while(!0)}function qp(){var n=ll.current;return ll.current=nl,n===null?nl:n}function Bu(){(Dn===0||Dn===3||Dn===2)&&(Dn=4),On===null||(ms&268435455)===0&&(cl&268435455)===0||Wr(On,Vn)}function ml(n,i){var a=qt;qt|=2;var c=qp();(On!==n||Vn!==i)&&(yr=null,xs(n,i));do try{Mv();break}catch(p){Yp(n,p)}while(!0);if(Qc(),qt=a,ll.current=c,Cn!==null)throw Error(t(261));return On=null,Vn=0,Dn}function Mv(){for(;Cn!==null;)Kp(Cn)}function Ev(){for(;Cn!==null&&!kn();)Kp(Cn)}function Kp(n){var i=e0(n.alternate,n,xi);n.memoizedProps=n.pendingProps,i===null?Zp(n):Cn=i,Pu.current=null}function Zp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=xv(a,i,xi),a!==null){Cn=a;return}}else{if(a=vv(a,i),a!==null){a.flags&=32767,Cn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Dn=6,Cn=null;return}}if(i=i.sibling,i!==null){Cn=i;return}Cn=i=n}while(i!==null);Dn===0&&(Dn=5)}function vs(n,i,a){var c=fe,p=Ai.transition;try{Ai.transition=null,fe=1,Tv(n,i,a,c)}finally{Ai.transition=p,fe=c}return null}function Tv(n,i,a,c){do Js();while(jr!==null);if((qt&6)!==0)throw Error(t(327));a=n.finishedWork;var p=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var x=a.lanes|a.childLanes;if(at(n,x),n===On&&(Cn=On=null,Vn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||dl||(dl=!0,t0(ri,function(){return Js(),null})),x=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||x){x=Ai.transition,Ai.transition=null;var C=fe;fe=1;var V=qt;qt|=4,Pu.current=null,yv(n,a),Hp(a,n),$x(Bc),To=!!Oc,Bc=Oc=null,n.current=a,Sv(a),zn(),qt=V,fe=C,Ai.transition=x}else n.current=a;if(dl&&(dl=!1,jr=n,fl=p),x=n.pendingLanes,x===0&&(Gr=null),de(a.stateNode),ci(n,At()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)p=i[a],c(p.value,{componentStack:p.stack,digest:p.digest});if(ul)throw ul=!1,n=Iu,Iu=null,n;return(fl&1)!==0&&n.tag!==0&&Js(),x=n.pendingLanes,(x&1)!==0?n===ku?Ka++:(Ka=0,ku=n):Ka=0,Fr(),null}function Js(){if(jr!==null){var n=B(fl),i=Ai.transition,a=fe;try{if(Ai.transition=null,fe=16>n?16:n,jr===null)var c=!1;else{if(n=jr,jr=null,fl=0,(qt&6)!==0)throw Error(t(331));var p=qt;for(qt|=4,ct=n.current;ct!==null;){var x=ct,C=x.child;if((ct.flags&16)!==0){var V=x.deletions;if(V!==null){for(var J=0;J<V.length;J++){var be=V[J];for(ct=be;ct!==null;){var Fe=ct;switch(Fe.tag){case 0:case 11:case 15:Xa(8,Fe,x)}var Be=Fe.child;if(Be!==null)Be.return=Fe,ct=Be;else for(;ct!==null;){Fe=ct;var Ue=Fe.sibling,it=Fe.return;if(zp(Fe),Fe===be){ct=null;break}if(Ue!==null){Ue.return=it,ct=Ue;break}ct=it}}}var dt=x.alternate;if(dt!==null){var ft=dt.child;if(ft!==null){dt.child=null;do{var Tn=ft.sibling;ft.sibling=null,ft=Tn}while(ft!==null)}}ct=x}}if((x.subtreeFlags&2064)!==0&&C!==null)C.return=x,ct=C;else e:for(;ct!==null;){if(x=ct,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:Xa(9,x,x.return)}var pe=x.sibling;if(pe!==null){pe.return=x.return,ct=pe;break e}ct=x.return}}var re=n.current;for(ct=re;ct!==null;){C=ct;var xe=C.child;if((C.subtreeFlags&2064)!==0&&xe!==null)xe.return=C,ct=xe;else e:for(C=re;ct!==null;){if(V=ct,(V.flags&2048)!==0)try{switch(V.tag){case 0:case 11:case 15:ol(9,V)}}catch(ht){Mn(V,V.return,ht)}if(V===C){ct=null;break e}var We=V.sibling;if(We!==null){We.return=V.return,ct=We;break e}ct=V.return}}if(qt=p,Fr(),ge&&typeof ge.onPostCommitFiberRoot=="function")try{ge.onPostCommitFiberRoot(K,n)}catch{}c=!0}return c}finally{fe=a,Ai.transition=i}}return!1}function Jp(n,i,a){i=Ys(a,i),i=gp(n,i,1),n=Br(n,i,1),i=ni(),n!==null&&(ln(n,1,i),ci(n,i))}function Mn(n,i,a){if(n.tag===3)Jp(n,n,a);else for(;i!==null;){if(i.tag===3){Jp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Gr===null||!Gr.has(c))){n=Ys(a,n),n=xp(i,n,1),i=Br(i,n,1),n=ni(),i!==null&&(ln(i,1,n),ci(i,n));break}}i=i.return}}function Cv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=ni(),n.pingedLanes|=n.suspendedLanes&a,On===n&&(Vn&a)===a&&(Dn===4||Dn===3&&(Vn&130023424)===Vn&&500>At()-Lu?xs(n,0):Du|=a),ci(n,i)}function Qp(n,i){i===0&&((n.mode&1)===0?i=1:(i=rt,rt<<=1,(rt&130023424)===0&&(rt=4194304)));var a=ni();n=xr(n,i),n!==null&&(ln(n,i,a),ci(n,a))}function Av(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Qp(n,a)}function Rv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,p=n.memoizedState;p!==null&&(a=p.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Qp(n,a)}var e0;e0=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||si.current)oi=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return oi=!1,gv(n,i,a);oi=(n.flags&131072)!==0}else oi=!1,xn&&(i.flags&1048576)!==0&&Lh(i,Vo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;sl(n,i),n=i.pendingProps;var p=Bs(i,Xn.current);$s(i,a),p=uu(null,i,c,n,p,a);var x=du();return i.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ai(c)?(x=!0,Ho(i)):x=!1,i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,iu(i),p.updater=il,i.stateNode=p,p._reactInternals=i,xu(i,c,n,a),i=Su(null,i,c,!0,x,a)):(i.tag=0,xn&&x&&Xc(i),ti(null,i,p,a),i=i.child),i;case 16:c=i.elementType;e:{switch(sl(n,i),n=i.pendingProps,p=c._init,c=p(c._payload),i.type=c,p=i.tag=Pv(c),n=ki(c,n),p){case 0:i=yu(null,i,c,n,a);break e;case 1:i=Tp(null,i,c,n,a);break e;case 11:i=Sp(null,i,c,n,a);break e;case 14:i=bp(null,i,c,ki(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,p=i.pendingProps,p=i.elementType===c?p:ki(c,p),yu(n,i,c,p,a);case 1:return c=i.type,p=i.pendingProps,p=i.elementType===c?p:ki(c,p),Tp(n,i,c,p,a);case 3:e:{if(Cp(i),n===null)throw Error(t(387));c=i.pendingProps,x=i.memoizedState,p=x.element,Gh(n,i),Ko(i,c,null,a);var C=i.memoizedState;if(c=C.element,x.isDehydrated)if(x={element:c,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},i.updateQueue.baseState=x,i.memoizedState=x,i.flags&256){p=Ys(Error(t(423)),i),i=Ap(n,i,c,a,p);break e}else if(c!==p){p=Ys(Error(t(424)),i),i=Ap(n,i,c,a,p);break e}else for(gi=kr(i.stateNode.containerInfo.firstChild),mi=i,xn=!0,Ii=null,a=Bh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(js(),c===p){i=_r(n,i,a);break e}ti(n,i,c,a)}i=i.child}return i;case 5:return Wh(i),n===null&&Kc(i),c=i.type,p=i.pendingProps,x=n!==null?n.memoizedProps:null,C=p.children,Hc(c,p)?C=null:x!==null&&Hc(c,x)&&(i.flags|=32),Ep(n,i),ti(n,i,C,a),i.child;case 6:return n===null&&Kc(i),null;case 13:return Rp(n,i,a);case 4:return ru(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Vs(i,null,c,a):ti(n,i,c,a),i.child;case 11:return c=i.type,p=i.pendingProps,p=i.elementType===c?p:ki(c,p),Sp(n,i,c,p,a);case 7:return ti(n,i,i.pendingProps,a),i.child;case 8:return ti(n,i,i.pendingProps.children,a),i.child;case 12:return ti(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,p=i.pendingProps,x=i.memoizedProps,C=p.value,dn(Xo,c._currentValue),c._currentValue=C,x!==null)if(Li(x.value,C)){if(x.children===p.children&&!si.current){i=_r(n,i,a);break e}}else for(x=i.child,x!==null&&(x.return=i);x!==null;){var V=x.dependencies;if(V!==null){C=x.child;for(var J=V.firstContext;J!==null;){if(J.context===c){if(x.tag===1){J=vr(-1,a&-a),J.tag=2;var be=x.updateQueue;if(be!==null){be=be.shared;var Fe=be.pending;Fe===null?J.next=J:(J.next=Fe.next,Fe.next=J),be.pending=J}}x.lanes|=a,J=x.alternate,J!==null&&(J.lanes|=a),tu(x.return,a,i),V.lanes|=a;break}J=J.next}}else if(x.tag===10)C=x.type===i.type?null:x.child;else if(x.tag===18){if(C=x.return,C===null)throw Error(t(341));C.lanes|=a,V=C.alternate,V!==null&&(V.lanes|=a),tu(C,a,i),C=x.sibling}else C=x.child;if(C!==null)C.return=x;else for(C=x;C!==null;){if(C===i){C=null;break}if(x=C.sibling,x!==null){x.return=C.return,C=x;break}C=C.return}x=C}ti(n,i,p.children,a),i=i.child}return i;case 9:return p=i.type,c=i.pendingProps.children,$s(i,a),p=Ti(p),c=c(p),i.flags|=1,ti(n,i,c,a),i.child;case 14:return c=i.type,p=ki(c,i.pendingProps),p=ki(c.type,p),bp(n,i,c,p,a);case 15:return wp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,p=i.pendingProps,p=i.elementType===c?p:ki(c,p),sl(n,i),i.tag=1,ai(c)?(n=!0,Ho(i)):n=!1,$s(i,a),pp(i,c,p),xu(i,c,p,a),Su(null,i,c,!0,n,a);case 19:return Pp(n,i,a);case 22:return Mp(n,i,a)}throw Error(t(156,i.tag))};function t0(n,i){return un(n,i)}function Nv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ri(n,i,a,c){return new Nv(n,i,a,c)}function Hu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Pv(n){if(typeof n=="function")return Hu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===H)return 11;if(n===Q)return 14}return 2}function $r(n,i){var a=n.alternate;return a===null?(a=Ri(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function gl(n,i,a,c,p,x){var C=2;if(c=n,typeof n=="function")Hu(n)&&(C=1);else if(typeof n=="string")C=5;else e:switch(n){case E:return _s(a.children,p,x,i);case L:C=8,p|=8;break;case q:return n=Ri(12,a,i,p|2),n.elementType=q,n.lanes=x,n;case X:return n=Ri(13,a,i,p),n.elementType=X,n.lanes=x,n;case F:return n=Ri(19,a,i,p),n.elementType=F,n.lanes=x,n;case Y:return xl(a,p,x,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case W:C=10;break e;case j:C=9;break e;case H:C=11;break e;case Q:C=14;break e;case ue:C=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Ri(C,a,i,p),i.elementType=n,i.type=c,i.lanes=x,i}function _s(n,i,a,c){return n=Ri(7,n,c,i),n.lanes=a,n}function xl(n,i,a,c){return n=Ri(22,n,c,i),n.elementType=Y,n.lanes=a,n.stateNode={isHidden:!1},n}function Gu(n,i,a){return n=Ri(6,n,null,i),n.lanes=a,n}function ju(n,i,a){return i=Ri(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Dv(n,i,a,c,p){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yt(0),this.expirationTimes=Yt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yt(0),this.identifierPrefix=c,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Vu(n,i,a,c,p,x,C,V,J){return n=new Dv(n,i,a,V,J),i===1?(i=1,x===!0&&(i|=8)):i=0,x=Ri(3,null,null,i),n.current=x,x.stateNode=n,x.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},iu(x),n}function Lv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:R,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function n0(n){if(!n)return Ur;n=n._reactInternals;e:{if(En(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ai(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(ai(a))return Nh(n,a,i)}return i}function i0(n,i,a,c,p,x,C,V,J){return n=Vu(a,c,!0,n,p,x,C,V,J),n.context=n0(null),a=n.current,c=ni(),p=Vr(a),x=vr(c,p),x.callback=i??null,Br(a,x,p),n.current.lanes=p,ln(n,p,c),ci(n,c),n}function vl(n,i,a,c){var p=i.current,x=ni(),C=Vr(p);return a=n0(a),i.context===null?i.context=a:i.pendingContext=a,i=vr(x,C),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Br(p,i,C),n!==null&&(Fi(n,p,C,x),qo(n,p,C)),C}function _l(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function r0(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Wu(n,i){r0(n,i),(n=n.alternate)&&r0(n,i)}function Iv(){return null}var s0=typeof reportError=="function"?reportError:function(n){console.error(n)};function $u(n){this._internalRoot=n}yl.prototype.render=$u.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));vl(n,i,null,null)},yl.prototype.unmount=$u.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;gs(function(){vl(null,n,null,null)}),i[hr]=null}};function yl(n){this._internalRoot=n}yl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Vt();n={blockedOn:null,target:n,priority:i};for(var a=0;a<qi.length&&i!==0&&i<qi[a].priority;a++);qi.splice(a,0,n),a===0&&Wf(n)}};function Xu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Sl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function a0(){}function kv(n,i,a,c,p){if(p){if(typeof c=="function"){var x=c;c=function(){var be=_l(C);x.call(be)}}var C=i0(i,c,n,0,null,!1,!1,"",a0);return n._reactRootContainer=C,n[hr]=C.current,Ia(n.nodeType===8?n.parentNode:n),gs(),C}for(;p=n.lastChild;)n.removeChild(p);if(typeof c=="function"){var V=c;c=function(){var be=_l(J);V.call(be)}}var J=Vu(n,0,!1,null,null,!1,!1,"",a0);return n._reactRootContainer=J,n[hr]=J.current,Ia(n.nodeType===8?n.parentNode:n),gs(function(){vl(i,J,a,c)}),J}function bl(n,i,a,c,p){var x=a._reactRootContainer;if(x){var C=x;if(typeof p=="function"){var V=p;p=function(){var J=_l(C);V.call(J)}}vl(i,C,n,p)}else C=kv(a,i,n,p,c);return _l(C)}De=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=gt(i.pendingLanes);a!==0&&(te(i,a|1),ci(i,At()),(qt&6)===0&&(Zs=At()+500,Fr()))}break;case 13:gs(function(){var c=xr(n,1);if(c!==null){var p=ni();Fi(c,n,1,p)}}),Wu(n,1)}},Qe=function(n){if(n.tag===13){var i=xr(n,134217728);if(i!==null){var a=ni();Fi(i,n,134217728,a)}Wu(n,134217728)}},ut=function(n){if(n.tag===13){var i=Vr(n),a=xr(n,i);if(a!==null){var c=ni();Fi(a,n,i,c)}Wu(n,i)}},Vt=function(){return fe},pt=function(n,i){var a=fe;try{return fe=n,i()}finally{fe=a}},Te=function(n,i,a){switch(i){case"input":if(wt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var p=Oo(c);if(!p)throw Error(t(90));Ne(c),wt(c,p)}}}break;case"textarea":ee(n,a);break;case"select":i=a.value,i!=null&&Lt(n,!!a.multiple,i,!1)}},ve=Fu,Ce=gs;var zv={usingClientEntryPoint:!1,Events:[Ua,Fs,Oo,we,Re,Fu]},Za={findFiberByHostInstance:ls,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Uv={bundleType:Za.bundleType,version:Za.version,rendererPackageName:Za.rendererPackageName,rendererConfig:Za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=It(n),n===null?null:n.stateNode},findFiberByHostInstance:Za.findFiberByHostInstance||Iv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{K=wl.inject(Uv),ge=wl}catch{}}return ui.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zv,ui.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xu(i))throw Error(t(200));return Lv(n,i,null,a)},ui.createRoot=function(n,i){if(!Xu(n))throw Error(t(299));var a=!1,c="",p=s0;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(p=i.onRecoverableError)),i=Vu(n,1,!1,null,null,a,!1,c,p),n[hr]=i.current,Ia(n.nodeType===8?n.parentNode:n),new $u(i)},ui.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=It(i),n=n===null?null:n.stateNode,n},ui.flushSync=function(n){return gs(n)},ui.hydrate=function(n,i,a){if(!Sl(i))throw Error(t(200));return bl(null,n,i,!0,a)},ui.hydrateRoot=function(n,i,a){if(!Xu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,p=!1,x="",C=s0;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(x=a.identifierPrefix),a.onRecoverableError!==void 0&&(C=a.onRecoverableError)),i=i0(i,null,n,1,a??null,p,!1,x,C),n[hr]=i.current,Ia(n),c)for(n=0;n<c.length;n++)a=c[n],p=a._getVersion,p=p(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,p]:i.mutableSourceEagerHydrationData.push(a,p);return new yl(i)},ui.render=function(n,i,a){if(!Sl(i))throw Error(t(200));return bl(null,n,i,!1,a)},ui.unmountComponentAtNode=function(n){if(!Sl(n))throw Error(t(40));return n._reactRootContainer?(gs(function(){bl(null,null,n,!1,function(){n._reactRootContainer=null,n[hr]=null})}),!0):!1},ui.unstable_batchedUpdates=Fu,ui.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Sl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return bl(n,i,a,!1,c)},ui.version="18.3.1-next-f1338f8080-20240426",ui}var p0;function Yv(){if(p0)return Ku.exports;p0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ku.exports=Xv(),Ku.exports}var m0;function qv(){if(m0)return Ml;m0=1;var s=Yv();return Ml.createRoot=s.createRoot,Ml.hydrateRoot=s.hydrateRoot,Ml}var Kv=qv();const Zv=gm(Kv),pa=[{id:"brown-noise",title:"Brownian Deep Focus",category:"Deep Focus",tagline:"Warm sub-bass rumble for continuous coding & writing",description:"Mathematically integrated brownian spectrum with deep 450Hz low-pass rolloff. Proven to mask background distractions and alleviate cognitive fatigue.",frequency:"0 – 450 Hz Brown Spectrum",accentColor:"#f59e0b"},{id:"celestial-drone",title:"Celestial 432Hz Drone",category:"Mindfulness",tagline:"Harmonically tuned meditative Tibetan chords",description:"Multi-oscillator harmonic chord centered around the natural 432Hz tuning fork with gentle phase chorus and slow breathing resonance.",frequency:"432 Hz Pythagorean Fundamental",accentColor:"#a855f7"},{id:"binaural-gamma",title:"Gamma 40Hz Flow State",category:"Cognitive Flow",tagline:"High-cognition binaural carrier for intense problem-solving",description:"Stereo carrier tones (200Hz L / 240Hz R) inducing 40Hz gamma oscillations in the cerebral cortex, associated with high-level information processing and recall.",frequency:"40 Hz Gamma Difference Wave",accentColor:"#38bdf8"},{id:"binaural-alpha",title:"Alpha 10Hz Quiet Mind",category:"Mindfulness",tagline:"Calm relaxed alertness for reading and reflection",description:"Stereo carrier tones (210Hz L / 220Hz R) stimulating 10Hz alpha rhythms, optimal for sustained reading, journaling, and stress reduction.",frequency:"10 Hz Alpha Difference Wave",accentColor:"#34d399"},{id:"rain-storm",title:"Midnight Rain Sanctuary",category:"Deep Focus",tagline:"Gentle nocturnal rainfall with rolling thunder",description:"Procedurally shaped pink noise with gentle resonant filtering, simulating a peaceful rain shower against cabin windows in deep space.",frequency:"Pink Noise Spectrum & Low Rumble",accentColor:"#818cf8"}];class Jv{constructor(){Sr(this,"ctx",null);Sr(this,"masterGain",null);Sr(this,"analyser",null);Sr(this,"activeNodes",[]);Sr(this,"currentId",null);Sr(this,"_isPlaying",!1);Sr(this,"_volume",.65);Sr(this,"_isMuted",!1)}initContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this._isMuted?0:this._volume,this.ctx.currentTime),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=64,this.analyser.smoothingTimeConstant=.85,this.masterGain.connect(this.analyser),this.analyser.connect(this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume()}get isPlaying(){return this._isPlaying}get currentSoundscape(){return this.currentId}get volume(){return this._volume}get isMuted(){return this._isMuted}getAnalyser(){return this.analyser}setVolume(e){if(this._volume=Math.max(0,Math.min(1,e)),this.masterGain&&this.ctx){const t=this._isMuted?0:this._volume;this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime),this.masterGain.gain.linearRampToValueAtTime(t,this.ctx.currentTime+.05)}}toggleMute(){return this._isMuted=!this._isMuted,this.setVolume(this._volume),this._isMuted}stop(){!this.ctx||!this._isPlaying||(this.masterGain&&(this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime),this.masterGain.gain.linearRampToValueAtTime(.001,this.ctx.currentTime+.12)),setTimeout(()=>{this.cleanupNodes(),this._isPlaying=!1,this.currentId=null},130))}cleanupNodes(){for(const e of this.activeNodes)try{"stop"in e&&typeof e.stop=="function"&&e.stop(),e.disconnect()}catch{}this.activeNodes=[]}play(e){if(this.initContext(),!(!this.ctx||!this.masterGain)&&!(this._isPlaying&&this.currentId===e))switch(this.cleanupNodes(),this.currentId=e,this._isPlaying=!0,this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime),this.masterGain.gain.setValueAtTime(.001,this.ctx.currentTime),this.masterGain.gain.linearRampToValueAtTime(this._isMuted?0:this._volume,this.ctx.currentTime+.4),e){case"brown-noise":this.buildBrownNoise();break;case"celestial-drone":this.buildCelestialDrone();break;case"binaural-gamma":this.buildBinauralBeat(200,40);break;case"binaural-alpha":this.buildBinauralBeat(210,10);break;case"rain-storm":this.buildRainStorm();break}}buildBrownNoise(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.sampleRate*5,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),r=t.getChannelData(0);let o=0;for(let g=0;g<e;g++){const m=Math.random()*2-1;o=(o+.02*m)/1.02,r[g]=o*3.2}const l=2048;for(let g=0;g<l;g++){const m=g/l;r[g]=r[g]*m+r[e-l+g]*(1-m)}const d=this.ctx.createBufferSource();d.buffer=t,d.loop=!0;const f=this.ctx.createBiquadFilter();f.type="lowpass",f.frequency.setValueAtTime(450,this.ctx.currentTime),f.Q.setValueAtTime(.7,this.ctx.currentTime),d.connect(f),f.connect(this.masterGain),d.start(),this.activeNodes.push(d,f)}buildCelestialDrone(){if(!this.ctx||!this.masterGain)return;const e=216,t=[e,e*1.5,e*2,e*2.5],r=[-4,3,-2,5];t.forEach((o,l)=>{if(!this.ctx||!this.masterGain)return;const d=this.ctx.createOscillator();d.type=l%2===0?"sine":"triangle",d.frequency.setValueAtTime(o,this.ctx.currentTime),d.detune.setValueAtTime(r[l],this.ctx.currentTime);const f=this.ctx.createGain();f.gain.setValueAtTime(.18/(l+1),this.ctx.currentTime);const g=this.ctx.createOscillator();g.frequency.setValueAtTime(.08+l*.03,this.ctx.currentTime);const m=this.ctx.createGain();m.gain.setValueAtTime(.04,this.ctx.currentTime),g.connect(m),m.connect(f.gain),d.connect(f),f.connect(this.masterGain),d.start(),g.start(),this.activeNodes.push(d,g,f,m)})}buildBinauralBeat(e,t){if(!this.ctx||!this.masterGain)return;const r=this.ctx.createOscillator();r.type="sine",r.frequency.setValueAtTime(e,this.ctx.currentTime);const o=this.ctx.createGain();o.gain.setValueAtTime(.22,this.ctx.currentTime);const l=this.ctx.createOscillator();l.type="sine",l.frequency.setValueAtTime(e+t,this.ctx.currentTime);const d=this.ctx.createGain();d.gain.setValueAtTime(.22,this.ctx.currentTime);const f=this.ctx.createChannelMerger(2);r.connect(o),o.connect(f,0,0),l.connect(d),d.connect(f,0,1);const g=this.ctx.createOscillator();g.type="triangle",g.frequency.setValueAtTime(e/2,this.ctx.currentTime);const m=this.ctx.createGain();m.gain.setValueAtTime(.08,this.ctx.currentTime),g.connect(m),m.connect(this.masterGain),f.connect(this.masterGain),r.start(),l.start(),g.start(),this.activeNodes.push(r,l,g,o,d,m,f)}buildRainStorm(){if(!this.ctx||!this.masterGain)return;const e=this.ctx.sampleRate*4,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),r=t.getChannelData(0);let o=0,l=0,d=0,f=0,g=0,m=0,b=0;for(let w=0;w<e;w++){const S=Math.random()*2-1;o=.99886*o+S*.0555179,l=.99332*l+S*.0750759,d=.969*d+S*.153852,f=.8665*f+S*.3104856,g=.55*g+S*.5329522,m=-.7616*m-S*.016898,r[w]=(o+l+d+f+g+m+b+S*.5362)*.12,b=S*.115926}const y=this.ctx.createBufferSource();y.buffer=t,y.loop=!0;const h=this.ctx.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(1200,this.ctx.currentTime),y.connect(h),h.connect(this.masterGain),y.start(),this.activeNodes.push(y,h)}playFocusChime(){try{if(this.initContext(),!this.ctx)return;const e=this.ctx.currentTime,t=[528,1056,1584],r=[.28,.09,.03],o=this.ctx.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.45,e+.04),o.gain.exponentialRampToValueAtTime(1e-4,e+3.4),o.connect(this.ctx.destination),t.forEach((l,d)=>{if(!this.ctx)return;const f=this.ctx.createOscillator(),g=this.ctx.createGain();f.type="sine",f.frequency.setValueAtTime(l,e),g.gain.setValueAtTime(r[d],e),f.connect(g),g.connect(o),f.start(e),f.stop(e+3.5)})}catch(e){console.warn("Focus chime could not play:",e)}}playBreakChime(){try{if(this.initContext(),!this.ctx)return;const e=this.ctx.currentTime;[{freq:523.25,start:0,dur:1.8,vol:.22},{freq:659.25,start:.22,dur:1.8,vol:.2},{freq:783.99,start:.44,dur:2.2,vol:.25},{freq:1046.5,start:.66,dur:2.8,vol:.18}].forEach(({freq:r,start:o,dur:l,vol:d})=>{if(!this.ctx)return;const f=e+o,g=this.ctx.createOscillator(),m=this.ctx.createGain();g.type="sine",g.frequency.setValueAtTime(r,f),m.gain.setValueAtTime(0,f),m.gain.linearRampToValueAtTime(d,f+.04),m.gain.exponentialRampToValueAtTime(1e-4,f+l),g.connect(m),m.connect(this.ctx.destination),g.start(f),g.stop(f+l+.1)})}catch(e){console.warn("Break chime could not play:",e)}}}const Cr=new Jv;class Qv{startKeepAlive(){}stopKeepAlive(){}updateMetadata(e){if(!(typeof window>"u"||!("mediaSession"in navigator)))try{const t=e.artworkUrl?[{src:e.artworkUrl,sizes:"96x96",type:"image/jpeg"},{src:e.artworkUrl,sizes:"128x128",type:"image/jpeg"},{src:e.artworkUrl,sizes:"192x192",type:"image/jpeg"},{src:e.artworkUrl,sizes:"256x256",type:"image/jpeg"},{src:e.artworkUrl,sizes:"512x512",type:"image/jpeg"}]:[];navigator.mediaSession.metadata=new MediaMetadata({title:e.title||"FOR ME Sanctuary",artist:e.artist||"Private Life Ledger",album:e.album||"Sanctuary Audio",artwork:t}),navigator.mediaSession.playbackState="playing",navigator.mediaSession.setActionHandler("play",()=>{e.onPlay(),navigator.mediaSession.playbackState="playing"}),navigator.mediaSession.setActionHandler("pause",()=>{e.onPause(),navigator.mediaSession.playbackState="paused"}),e.onNext?navigator.mediaSession.setActionHandler("nexttrack",e.onNext):navigator.mediaSession.setActionHandler("nexttrack",null),e.onPrev?navigator.mediaSession.setActionHandler("previoustrack",e.onPrev):navigator.mediaSession.setActionHandler("previoustrack",null)}catch(t){console.warn("[MediaSession] Metadata update error:",t)}}setPlaybackState(e){if(!(typeof window>"u"||!("mediaSession"in navigator)))try{navigator.mediaSession.playbackState=e}catch{}}}const ji=new Qv;function e_(s){if(!s||typeof s!="string")return null;const e=s.trim();let t,r;const o=e.match(/[?&]list=([a-zA-Z0-9_-]+)/);o&&o[1]&&(r=o[1]);const l=e.match(/[?&]v=([a-zA-Z0-9_-]{11})/);if(l&&l[1]&&(t=l[1]),!t){const f=e.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);f&&f[1]&&(t=f[1])}if(!t){const f=e.match(/youtube\.com\/(?:live|embed|v|shorts)\/([a-zA-Z0-9_-]{11})/);f&&f[1]&&(t=f[1])}if(!t&&!r&&/^[a-zA-Z0-9_-]{11}$/.test(e)&&(t=e),!t&&!r&&/^(?:PL|RD|UU|FL|OLAK5uy_)[a-zA-Z0-9_-]+$/.test(e)&&(r=e),!t&&!r)return null;let d="video";return r&&t?d="video_in_playlist":r&&(d="playlist"),{type:d,videoId:t,playlistId:r,cleanUrl:e}}function t_(s){return s?`https://img.youtube.com/vi/${s}/hqdefault.jpg`:"https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=600&auto=format&fit=crop"}const rc=[{id:"lofi-girl-main",title:"Lofi Girl — Beats to Relax / Study to",type:"video",videoId:"jfKfPfyJRdk",url:"https://www.youtube.com/watch?v=jfKfPfyJRdk",channel:"Lofi Girl",thumbnailUrl:"https://img.youtube.com/vi/jfKfPfyJRdk/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"synthwave-chilledcow",title:"Synthwave Radio — Chill Beats to Code & Chill",type:"video",videoId:"4xDzrJKXOOY",url:"https://www.youtube.com/watch?v=4xDzrJKXOOY",channel:"Lofi Girl / Synthwave Boy",thumbnailUrl:"https://img.youtube.com/vi/4xDzrJKXOOY/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"deep-focus-ambient",title:"Deep Focus Ambient — Flow State Alpha Waves",type:"video",videoId:"lTRiuFIWV54",url:"https://www.youtube.com/watch?v=lTRiuFIWV54",channel:"Greenred Productions",thumbnailUrl:"https://img.youtube.com/vi/lTRiuFIWV54/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"peaceful-piano-solitude",title:"Peaceful Piano & Soft Rain — Gentle Solitude",type:"video",videoId:"1WUEk0R79_Q",url:"https://www.youtube.com/watch?v=1WUEk0R79_Q",channel:"Quiet Quest",thumbnailUrl:"https://img.youtube.com/vi/1WUEk0R79_Q/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"classical-focus-mozart",title:"Classical Focus — Mozart, Beethoven, Bach",type:"video",videoId:"WPni755-Krg",url:"https://www.youtube.com/watch?v=WPni755-Krg",channel:"HALIDONMUSIC",thumbnailUrl:"https://img.youtube.com/vi/WPni755-Krg/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()},{id:"cozy-coffee-shop-lofi",title:"Cozy Coffee Shop Lofi — Rainy Night Ambience",type:"video",videoId:"-5KAN9_CzSA",url:"https://www.youtube.com/watch?v=-5KAN9_CzSA",channel:"Calmed by Nature",thumbnailUrl:"https://img.youtube.com/vi/-5KAN9_CzSA/hqdefault.jpg",isCurated:!0,createdAt:new Date().toISOString()}],xm=le.createContext(void 0),Qs={palette:"cosmic-royal",speed:"balanced",amplitude:"majestic",waveGeometry:"dunes",waveLayerDensity:"deep",horizonHeight:"balanced",waveStrokeOpacity:.5,interactiveParallax:!0,celestialBody:"crescent-moon",celestialPosition:"default",celestialScaleMultiplier:1,rotationSpeed:"standard",showNebulaDust:!0,nebulaIntensity:"vivid",showConstellations:!0,showComet:!0,shootingStarMode:"occasional",showStars:!0,starDensity:"balanced",showCrossStars:!1,showOrbitalTrack:!1,showMeridian:!1,clockFontStyle:"tabular",clockSize:"standard",clockPosition:"center",clockDivider:"colon",clockColor:"palette",clockFormat:"12h",showSeconds:!0,showDate:!0,showGreeting:!0,clockHalo:"pulsar",ecoSleepMinutes:7.5},Qa={name:"Azan",motto:"Remember, you are here for you.",defaultFocusTopic:"Engineering",defaultFocusMode:"Deep Work"},g0=[{id:"subj_eng",name:"Engineering",color:"#8b5cf6"},{id:"subj_math",name:"Mathematics",color:"#06b6d4"},{id:"subj_code",name:"Coding",color:"#10b981"},{id:"subj_read",name:"Reading",color:"#f59e0b"},{id:"subj_deep",name:"Deep Work",color:"#f43f5e"}],Qu={focusDurationMinutes:25,breakDurationMinutes:5,displayMode:"telemetry",autoStartBreaks:!0,soundEnabled:!0},Ar=(s,e)=>{var d;if(!s)return e;const t=s.trim().match(/(\d+)(?::(\d+))?\s*(am|pm)?/i);if(!t)return e;let r=parseInt(t[1],10);const o=t[2]?parseInt(t[2],10):0,l=(d=t[3])==null?void 0:d.toLowerCase();return l==="pm"&&r<12&&(r+=12),l==="am"&&r===12&&(r=0),Math.min(24,Math.max(0,r+o/60))},ea=s=>{const e=Math.max(0,Math.min(24,s)),t=Math.floor(e)%24,r=Math.round((e-Math.floor(e))*60);return`${t.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`},El=(s,e)=>{if(!s)return e;const t=s.trim().split(":");if(t.length>=2){const r=parseInt(t[0],10),o=parseInt(t[1],10);if(!isNaN(r)&&!isNaN(o))return Math.min(24,Math.max(0,r+o/60))}return Ar(s,e)},Nd={student:[{id:"rt_stu_1",title:"Morning Priming & Review",timeRange:"06:30 – 08:00",startTime:"06:30",endTime:"08:00",startHour:6.5,endHour:8,category:"morning",iconType:"morning",colorTag:"#f59e0b",description:"Hydration, light stretch, review daily lecture notes & top priorities.",linkedSubject:"Reading",checklist:[{id:"c1",text:"Drink 500ml water + natural sunlight",completed:!1},{id:"c2",text:"Review day calendar & academic syllabus",completed:!1},{id:"c3",text:"15-min flashcard active recall",completed:!1}]},{id:"rt_stu_2",title:"Peak Focus: Core Problem Solving",timeRange:"08:30 – 12:30",startTime:"08:30",endTime:"12:30",startHour:8.5,endHour:12.5,category:"study",iconType:"study",colorTag:"#8b5cf6",description:"High-cognition study sprint on difficult mathematics & engineering proofs.",linkedSubject:"Mathematics",checklist:[{id:"c4",text:"Silence notifications & clear physical desk",completed:!1},{id:"c5",text:"Complete key problem set sprint",completed:!1},{id:"c6",text:"Synthesize formulas into summary notes",completed:!1}]},{id:"rt_stu_3",title:"Nourishment & Outdoor Reset",timeRange:"12:30 – 13:45",startTime:"12:30",endTime:"13:45",startHour:12.5,endHour:13.75,category:"break",iconType:"custom",colorTag:"#10b981",description:"Healthy meal, screen-free rest, and outdoor movement.",checklist:[{id:"c7",text:"Nutritious lunch away from desk",completed:!1},{id:"c8",text:"15-min outdoor sunlight walk",completed:!1}]},{id:"rt_stu_4",title:"Applied Engineering & Projects",timeRange:"14:00 – 17:30",startTime:"14:00",endTime:"17:30",startHour:14,endHour:17.5,category:"deep_work",iconType:"code",colorTag:"#06b6d4",description:"Hands-on programming, system architecture build, and lab assignments.",linkedSubject:"Engineering",checklist:[{id:"c9",text:"Implement scheduled feature / module",completed:!1},{id:"c10",text:"Run verification tests & git commit",completed:!1}]},{id:"rt_stu_5",title:"Physical Training & Health",timeRange:"17:45 – 19:15",startTime:"17:45",endTime:"19:15",startHour:17.75,endHour:19.25,category:"health",iconType:"workout",colorTag:"#ec4899",description:"High intensity movement, strength workout, or outdoor running session.",checklist:[{id:"c11",text:"Main workout routine & mobility",completed:!1},{id:"c12",text:"Hydration & protein refuel",completed:!1}]},{id:"rt_stu_6",title:"Evening Review & Next-Day Blueprint",timeRange:"20:00 – 21:45",startTime:"20:00",endTime:"21:45",startHour:20,endHour:21.75,category:"study",iconType:"reading",colorTag:"#a855f7",description:"Review notes, prepare bag and study desk for tomorrow morning.",linkedSubject:"Deep Work",checklist:[{id:"c13",text:"Log study hours in dashboard",completed:!1},{id:"c14",text:"Set top 3 priorities for tomorrow",completed:!1}]},{id:"rt_stu_7",title:"Digital Sunset & Sleep Sanctuary",timeRange:"22:00 – 23:30",startTime:"22:00",endTime:"23:30",startHour:22,endHour:23.5,category:"evening",iconType:"night",colorTag:"#3b82f6",description:"Dim lighting, paper book reading, and preparation for deep restorative sleep.",checklist:[{id:"c15",text:"Warm dim lighting, no glowing screens",completed:!1},{id:"c16",text:"15-min reading offline",completed:!1}]}],engineer:[{id:"rt_eng_1",title:"Morning Calibration & Tech Ingestion",timeRange:"07:00 – 08:30",startTime:"07:00",endTime:"08:30",startHour:7,endHour:8.5,category:"morning",iconType:"morning",colorTag:"#f59e0b",description:"Morning tea, system status check, and planning the critical path.",checklist:[{id:"ce1",text:"Cold water + light movement",completed:!1},{id:"ce2",text:"Review pull requests & daily roadmap",completed:!1}]},{id:"rt_eng_2",title:"Deep Architecture & Zero-Distraction Build",timeRange:"08:30 – 12:30",startTime:"08:30",endTime:"12:30",startHour:8.5,endHour:12.5,category:"deep_work",iconType:"code",colorTag:"#8b5cf6",description:"Deep engineering problem solving without notifications or meetings.",linkedSubject:"Coding",checklist:[{id:"ce3",text:"Close communication tabs / silence notifications",completed:!1},{id:"ce4",text:"Ship primary architectural change",completed:!1}]},{id:"rt_eng_3",title:"Lunch & Sunlight Reset",timeRange:"12:30 – 13:30",startTime:"12:30",endTime:"13:30",startHour:12.5,endHour:13.5,category:"break",iconType:"custom",colorTag:"#10b981",description:"Refuel and mental detachment away from the terminal.",checklist:[{id:"ce5",text:"Healthy meal away from monitors",completed:!1}]},{id:"rt_eng_4",title:"Feature Implementation & Code Reviews",timeRange:"13:30 – 17:00",startTime:"13:30",endTime:"17:00",startHour:13.5,endHour:17,category:"deep_work",iconType:"code",colorTag:"#06b6d4",description:"Secondary build sprint, bug fixes, integration testing.",linkedSubject:"Engineering",checklist:[{id:"ce6",text:"Review team PRs & resolve discussions",completed:!1},{id:"ce7",text:"Push verified commits to main branch",completed:!1}]},{id:"rt_eng_5",title:"Fitness & Physical Reset",timeRange:"17:30 – 19:00",startTime:"17:30",endTime:"19:00",startHour:17.5,endHour:19,category:"health",iconType:"workout",colorTag:"#ec4899",description:"Strength training, cardio, and physical counterbalance.",checklist:[{id:"ce8",text:"Gym workout or 5km run",completed:!1}]},{id:"rt_eng_6",title:"Personal Exploration & Deep Reading",timeRange:"20:30 – 22:30",startTime:"20:30",endTime:"22:30",startHour:20.5,endHour:22.5,category:"study",iconType:"reading",colorTag:"#a855f7",description:"Open source exploration, technical papers, and long-term skills.",linkedSubject:"Reading",checklist:[{id:"ce9",text:"Read 20 pages of architecture literature",completed:!1}]}],minimal:[{id:"rt_min_1",title:"Morning Focus Block",timeRange:"07:00 – 12:00",startTime:"07:00",endTime:"12:00",startHour:7,endHour:12,category:"deep_work",iconType:"morning",colorTag:"#f59e0b",description:"Peak cognitive energy reserved for highest priority tasks.",checklist:[{id:"cm1",text:"Clear top priority task of the day",completed:!1}]},{id:"rt_min_2",title:"Afternoon Creation Block",timeRange:"13:00 – 18:00",startTime:"13:00",endTime:"18:00",startHour:13,endHour:18,category:"deep_work",iconType:"code",colorTag:"#06b6d4",description:"Execution, communication, and secondary projects.",checklist:[{id:"cm2",text:"Wrap up project deliverables",completed:!1}]},{id:"rt_min_3",title:"Evening Recovery & Living",timeRange:"19:00 – 23:00",startTime:"19:00",endTime:"23:00",startHour:19,endHour:23,category:"evening",iconType:"night",colorTag:"#3b82f6",description:"Offline time, family, fitness, reading, and deep restorative sleep.",checklist:[{id:"cm3",text:"Unplug devices & relax",completed:!1}]}]},Tl=Nd.student,n_=({children:s})=>{const[e,t]=le.useState(()=>{try{const te=localStorage.getItem("for_me_profile");if(te){const fe=JSON.parse(te);return fe.name==="Viren"?{...Qa,name:"Azan"}:{...Qa,...fe}}return Qa}catch{return Qa}}),r=te=>{t(fe=>{const B={...fe,...te};return localStorage.setItem("for_me_profile",JSON.stringify(B)),B})};le.useEffect(()=>{localStorage.setItem("for_me_profile",JSON.stringify(e))},[e]);const[o,l]=le.useState(()=>{try{return localStorage.getItem("for_me_app_theme")==="light"?"light":"dark"}catch{return"dark"}}),d=()=>{l(te=>te==="light"?"dark":"light")};le.useEffect(()=>{localStorage.setItem("for_me_app_theme",o),o==="light"?(document.documentElement.classList.add("theme-light"),document.documentElement.classList.remove("theme-dark")):(document.documentElement.classList.add("theme-dark"),document.documentElement.classList.remove("theme-light"))},[o]);const[f,g]=le.useState(()=>{try{const te=localStorage.getItem("for_me_is_hud_hidden");return te?JSON.parse(te):!1}catch{return!1}}),m=()=>g(te=>!te);le.useEffect(()=>{localStorage.setItem("for_me_is_hud_hidden",JSON.stringify(f))},[f]);const[b,y]=le.useState(()=>{try{return localStorage.getItem("for_me_wallpaper_theme")||"cosmic-cliffs"}catch{return"cosmic-cliffs"}});le.useEffect(()=>{localStorage.setItem("for_me_wallpaper_theme",b)},[b]);const[h,w]=le.useState(()=>{try{const te=localStorage.getItem("for_me_wallpaper_settings_v3")||localStorage.getItem("for_me_wallpaper_settings_v2");return te?{...Qs,...JSON.parse(te)}:Qs}catch{return Qs}}),S=te=>{w(fe=>{const B={...fe,...te};return localStorage.setItem("for_me_wallpaper_settings_v3",JSON.stringify(B)),B})},M=()=>{w(Qs),localStorage.setItem("for_me_wallpaper_settings_v3",JSON.stringify(Qs))},[v,_]=le.useState(!1),P=le.useRef(!1);P.current=v,le.useEffect(()=>{const te=h.ecoSleepMinutes??7.5;if(te<=0){P.current&&_(!1);return}const fe=te*60*1e3;let B;const De=()=>{P.current&&_(!1),clearTimeout(B),B=setTimeout(()=>{_(!0)},fe)};B=setTimeout(()=>{_(!0)},fe);const Qe=["mousemove","mousedown","keydown","touchstart","scroll","pointerdown"];let ut=Date.now();const Vt=()=>{const pt=Date.now();if(P.current){_(!1),De(),ut=pt;return}pt-ut>2e3&&(ut=pt,De())};return Qe.forEach(pt=>{window.addEventListener(pt,Vt,{passive:!0})}),()=>{clearTimeout(B),Qe.forEach(pt=>{window.removeEventListener(pt,Vt)})}},[h.ecoSleepMinutes]);const[k,D]=le.useState(()=>{try{const te=localStorage.getItem("for_me_tasks");return te?JSON.parse(te):[{id:"1",text:"Core engineering deep focus sprint",completed:!1},{id:"2",text:"System architecture review & refinement",completed:!1},{id:"3",text:"Physical movement & hydration (8 glasses)",completed:!1}]}catch{return[{id:"1",text:"Core engineering deep focus sprint",completed:!1}]}});le.useEffect(()=>{localStorage.setItem("for_me_tasks",JSON.stringify(k))},[k]);const U=te=>{D(fe=>fe.map(B=>B.id===te?{...B,completed:!B.completed,completedAt:B.completed?void 0:new Date().toISOString()}:B))},R=te=>{if(!te.trim())return;const fe={id:`task_${Date.now()}`,text:te.trim(),completed:!1};D(B=>[fe,...B])},E=te=>{D(fe=>fe.filter(B=>B.id!==te))},[L,q]=le.useState(()=>{try{const te=localStorage.getItem("for_me_habits");return te?JSON.parse(te):[{id:"h1",name:"Deep Focus & Engineering Block",completed:!1,streak:3},{id:"h2",name:"Hydration Target (8 Glasses)",completed:!1,streak:5},{id:"h3",name:"Mindful Walk & Movement",completed:!1,streak:2}]}catch{return[{id:"h1",name:"Deep Focus & Engineering Block",completed:!1,streak:1}]}});le.useEffect(()=>{localStorage.setItem("for_me_habits",JSON.stringify(L))},[L]);const W=te=>{q(fe=>fe.map(B=>{if(B.id===te){const De=!B.completed;return{...B,completed:De,streak:De?B.streak+1:Math.max(0,B.streak-1)}}return B}))},j=te=>{if(!te.trim())return;const fe={id:`habit_${Date.now()}`,name:te.trim(),completed:!1,streak:0};q(B=>[...B,fe])},H=te=>{q(fe=>fe.filter(B=>B.id!==te))},[X,F]=le.useState(()=>{try{const te=localStorage.getItem("for_me_routines");return te?JSON.parse(te):Tl}catch{return Tl}});le.useEffect(()=>{localStorage.setItem("for_me_routines",JSON.stringify(X))},[X]);const Q=te=>{let fe=te.startHour,B=te.endHour,De=te.startTime,Qe=te.endTime,ut=te.timeRange;if(De&&Qe)fe=El(De,9),B=El(Qe,10),ut=`${De} – ${Qe}`;else if(ut){const pt=ut.split(/[-–—to]/i);fe=Ar(pt[0],9),B=Ar(pt[1],fe+1),De=ea(fe),Qe=ea(B)}else fe=fe!==void 0?fe:9,B=B!==void 0?B:10,De=ea(fe),Qe=ea(B),ut=`${De} – ${Qe}`;const Vt={id:`routine_${Date.now()}`,...te,timeRange:ut,startTime:De,endTime:Qe,startHour:fe,endHour:B,colorTag:te.colorTag||"#8b5cf6",checklist:te.checklist||[]};F(pt=>[...pt,Vt].sort((nn,hn)=>(nn.startHour??0)-(hn.startHour??0)))},ue=(te,fe)=>{F(B=>B.map(Qe=>{if(Qe.id!==te)return Qe;const ut={...Qe,...fe};if(fe.startTime&&fe.endTime)ut.startHour=El(fe.startTime,ut.startHour??9),ut.endHour=El(fe.endTime,ut.endHour??10),ut.timeRange=`${fe.startTime} – ${fe.endTime}`;else if(fe.timeRange&&(fe.startHour===void 0||fe.endHour===void 0)){const Vt=fe.timeRange.split(/[-–—to]/i);ut.startHour=Ar(Vt[0],ut.startHour||9),ut.endHour=Ar(Vt[1],ut.endHour||17),ut.startTime=ea(ut.startHour),ut.endTime=ea(ut.endHour)}return ut}).sort((Qe,ut)=>(Qe.startHour??0)-(ut.startHour??0)))},Y=te=>{F(fe=>fe.filter(B=>B.id!==te))},se=(te,fe)=>{F(B=>B.map(De=>{if(De.id!==te)return De;const Qe=(De.checklist||[]).map(ut=>ut.id===fe?{...ut,completed:!ut.completed}:ut);return{...De,checklist:Qe}}))},G=(te,fe,B)=>{B.trim()&&F(De=>De.map(Qe=>{if(Qe.id!==te)return Qe;const ut=(Qe.checklist||[]).map(Vt=>Vt.id===fe?{...Vt,text:B.trim()}:Vt);return{...Qe,checklist:ut}}))},Z=(te,fe)=>{fe.trim()&&F(B=>B.map(De=>{if(De.id!==te)return De;const Qe={id:`rc_${Date.now()}_${Math.random().toString(36).substring(2,6)}`,text:fe.trim(),completed:!1};return{...De,checklist:[...De.checklist||[],Qe]}}))},z=(te,fe)=>{F(B=>B.map(De=>De.id!==te?De:{...De,checklist:(De.checklist||[]).filter(Qe=>Qe.id!==fe)}))},I=te=>{const B=Nd[te==="default"?"student":te]||Nd.student;F(B)},oe=()=>{F(Tl)},[O,ne]=le.useState(null),[ie,Me]=le.useState(0),[me,he]=le.useState(null),[Ye,$e]=le.useState(0);le.useEffect(()=>{const te=()=>{const B=new Date,De=B.getHours()+B.getMinutes()/60,Qe=B.getHours()*60+B.getMinutes();let ut=null,Vt=0;for(const Tt of X){let zt=Tt.startHour,en=Tt.endHour;if(zt===void 0||en===void 0){const Un=Tt.timeRange.split(/[-–—to]/i);zt=Ar(Un[0],0),en=Ar(Un[1],24)}if(zt<=en){if(De>=zt&&De<en){ut=Tt;const Un=Math.round(en*60);Vt=Math.max(0,Un-Qe);break}}else if(De>=zt||De<en){ut=Tt;const Un=Math.round(en*60);De>=zt?Vt=Math.max(0,1440-Qe+Un):Vt=Math.max(0,Un-Qe);break}}let pt=null,nn=0;const hn=[...X].sort((Tt,zt)=>(Tt.startHour??0)-(zt.startHour??0));for(const Tt of hn){const zt=Tt.startHour??0;if(zt>De){pt=Tt;const en=Math.round(zt*60);nn=Math.max(0,en-Qe);break}}if(!pt&&hn.length>0){pt=hn[0];const Tt=Math.round((pt.startHour??0)*60);nn=Math.max(0,1440-Qe+Tt)}ne(ut),Me(Vt),he(pt),$e(nn)};te();const fe=setInterval(te,1e4);return()=>clearInterval(fe)},[X]);const[Ne,je]=le.useState(0),[qe,mt]=le.useState(!1),[xt,wt]=le.useState(e.defaultFocusTopic||"Engineering"),[yt,kt]=le.useState(()=>{try{const te=localStorage.getItem("for_me_study_subjects");return te?JSON.parse(te):g0}catch{return g0}}),_e=(te,fe)=>{if(!te.trim())return;const B=["#8b5cf6","#06b6d4","#10b981","#f59e0b","#f43f5e","#ec4899","#3b82f6"],De=fe||B[yt.length%B.length],Qe={id:`subj_${Date.now()}`,name:te.trim(),color:De};kt(ut=>{const Vt=[...ut,Qe];return localStorage.setItem("for_me_study_subjects",JSON.stringify(Vt)),Vt})},Lt=te=>{kt(fe=>{const B=fe.filter(De=>De.id!==te);return localStorage.setItem("for_me_study_subjects",JSON.stringify(B)),B})},[cn,gn]=le.useState(()=>{try{const te=localStorage.getItem("for_me_daily_study_target");return te?parseFloat(te):4}catch{return 4}}),ee=te=>{gn(te),localStorage.setItem("for_me_daily_study_target",String(te))},[vn,Et]=le.useState(()=>{try{const te=localStorage.getItem("for_me_study_sessions");return te?JSON.parse(te):[]}catch{return[]}});le.useEffect(()=>{let te=null;return qe?te=setInterval(()=>{je(fe=>fe+1)},1e3):!qe&&Ne!==0&&clearInterval(te),()=>clearInterval(te)},[qe,Ne]);const Bt=()=>mt(te=>!te),Ie=()=>{if(Ne>30){const te={id:`ses_${Date.now()}`,subject:xt,durationSeconds:Ne,timestamp:new Date().toISOString()};Et(fe=>{const B=[te,...fe];return localStorage.setItem("for_me_study_sessions",JSON.stringify(B)),B})}mt(!1),je(0)},Kt=(te,fe,B)=>{if(te<=0)return;const De={id:`ses_manual_${Date.now()}`,subject:(fe==null?void 0:fe.trim())||xt||"Engineering",mode:(B==null?void 0:B.trim())||"Manual Entry",durationSeconds:Math.round(te*60),timestamp:new Date().toISOString()};Et(Qe=>{const ut=[De,...Qe];return localStorage.setItem("for_me_study_sessions",JSON.stringify(ut)),ut})},ot=te=>{Et(fe=>{const B=fe.filter(De=>De.id!==te);return localStorage.setItem("for_me_study_sessions",JSON.stringify(B)),B})},[Ze,N]=le.useState(()=>{try{const te=localStorage.getItem("for_me_pomodoro_settings");return te?{...Qu,...JSON.parse(te)}:Qu}catch{return Qu}});le.useEffect(()=>{localStorage.setItem("for_me_pomodoro_settings",JSON.stringify(Ze))},[Ze]);const[T,ae]=le.useState("idle"),[Le,Ee]=le.useState(()=>Ze.focusDurationMinutes*60),[ke,ze]=le.useState(()=>Ze.focusDurationMinutes*60);le.useEffect(()=>{let te=null;return(T==="focus"||T==="break")&&(te=setInterval(()=>{Ee(fe=>{if(fe<=1)if(T==="focus"){Ze.soundEnabled&&Cr.playFocusChime();const B=ke,De={id:`ses_${Date.now()}`,subject:xt,mode:"Pomodoro Focus",durationSeconds:B,timestamp:new Date().toISOString()};if(Et(Qe=>{const ut=[De,...Qe];return localStorage.setItem("for_me_study_sessions",JSON.stringify(ut)),ut}),Ze.autoStartBreaks){ae("break");const Qe=Ze.breakDurationMinutes*60;return ze(Qe),Qe}else{ae("idle");const Qe=Ze.focusDurationMinutes*60;return ze(Qe),Qe}}else{Ze.soundEnabled&&Cr.playBreakChime(),ae("idle");const B=Ze.focusDurationMinutes*60;return ze(B),B}return fe-1})},1e3)),()=>{te&&clearInterval(te)}},[T,ke,Ze,xt]);const Se=te=>{const B=(te||Ze.focusDurationMinutes)*60;ze(B),Ee(B),ae("focus")},Te=()=>{(T==="focus"||T==="break")&&ae("paused")},Oe=()=>{T==="paused"&&ae("focus")},$=()=>{T==="focus"?ae("paused"):T==="paused"?ae("focus"):T==="break"?ae("paused"):Se()},Ae=()=>{ae("idle");const te=Ze.focusDurationMinutes*60;ze(te),Ee(te)},we=()=>{if(T==="focus"){ae("break");const te=Ze.breakDurationMinutes*60;ze(te),Ee(te)}else{ae("idle");const te=Ze.focusDurationMinutes*60;ze(te),Ee(te)}},Re=()=>{N(te=>({...te,displayMode:te.displayMode==="telemetry"?"numbers":"telemetry"}))},[ve,Ce]=le.useState(()=>{try{const te=localStorage.getItem("for_me_hydration");return te?JSON.parse(te):62.5}catch{return 62.5}});le.useEffect(()=>{localStorage.setItem("for_me_hydration",JSON.stringify(ve))},[ve]);const[He,nt]=le.useState(()=>{try{const te=localStorage.getItem("for_me_sleep_hours");return te?JSON.parse(te):8}catch{return 8}}),Pe=te=>{nt(te),localStorage.setItem("for_me_sleep_hours",JSON.stringify(te))},[Je,lt]=le.useState(()=>{try{const te=localStorage.getItem("for_me_daily_rating");return te?JSON.parse(te):8}catch{return 8}});le.useEffect(()=>{localStorage.setItem("for_me_daily_rating",JSON.stringify(Je))},[Je]);const Ge=()=>{const te=new Date,fe=te.getFullYear(),B=String(te.getMonth()+1).padStart(2,"0"),De=String(te.getDate()).padStart(2,"0");return`${fe}-${B}-${De}`},[St,Ht]=le.useState(()=>{try{return localStorage.getItem("for_me_last_active_date")||Ge()}catch{return Ge()}}),tn=te=>{if(D(fe=>{const B=fe.map(De=>({...De,completed:!1,completedAt:void 0}));return localStorage.setItem("for_me_tasks",JSON.stringify(B)),B}),q(fe=>{const B=fe.map(De=>({...De,completed:!1,streak:De.completed?De.streak:0}));return localStorage.setItem("for_me_habits",JSON.stringify(B)),B}),Ce(0),localStorage.setItem("for_me_hydration",JSON.stringify(0)),F(fe=>{const B=fe.map(De=>({...De,checklist:(De.checklist||[]).map(Qe=>({...Qe,completed:!1}))}));return localStorage.setItem("for_me_routines",JSON.stringify(B)),B}),Ne>30){const fe={id:`ses_${Date.now()}`,subject:xt,durationSeconds:Ne,timestamp:new Date().toISOString()};Et(B=>{const De=[fe,...B];return localStorage.setItem("for_me_study_sessions",JSON.stringify(De)),De})}mt(!1),je(0),Ht(te),localStorage.setItem("for_me_last_active_date",te)};le.useEffect(()=>{const te=()=>{const B=Ge(),De=localStorage.getItem("for_me_last_active_date");De?De!==B&&tn(B):(localStorage.setItem("for_me_last_active_date",B),Ht(B))};te();const fe=setInterval(te,1e4);return window.addEventListener("focus",te),()=>{clearInterval(fe),window.removeEventListener("focus",te)}},[Ne,xt]);const wn=()=>{const te=Ge();tn(te)},fn=()=>{["for_me_profile","for_me_tasks","for_me_habits","for_me_routines","for_me_hydration","for_me_sleep_hours","for_me_daily_rating","for_me_study_sessions","for_me_pomodoro_settings","for_me_wallpaper_settings_v3","for_me_wallpaper_theme","for_me_app_theme","for_me_is_hud_hidden","for_me_last_active_date","for_me_active_yt","for_me_saved_yt_library"].forEach(fe=>localStorage.removeItem(fe)),t(Qa),D([{id:"1",text:"Core engineering deep focus sprint",completed:!1},{id:"2",text:"System architecture review & refinement",completed:!1},{id:"3",text:"Physical movement & hydration (8 glasses)",completed:!1}]),q([{id:"h1",name:"Deep Focus & Engineering Block",completed:!1,streak:0},{id:"h2",name:"Hydration Target (8 Glasses)",completed:!1,streak:0},{id:"h3",name:"Mindful Walk & Movement",completed:!1,streak:0}]),F(Tl),Ce(0),nt(8),lt(8),je(0),mt(!1),Et([]),w(Qs),Ht(Ge())},[Qt,Nn]=le.useState("youtube"),[En,sn]=le.useState(!1),[bt,Xt]=le.useState("brown-noise"),[It,an]=le.useState(.65),[un,hi]=le.useState(!1),[kn,zn]=le.useState(!1),[At,Dr]=le.useState(!1),[bi,wi]=le.useState(()=>{try{const te=localStorage.getItem("for_me_active_yt");return te?JSON.parse(te):rc[0]}catch{return rc[0]}}),[ri,Yi]=le.useState(70),[A,K]=le.useState(!1),[ge,de]=le.useState(!1),[ce,Xe]=le.useState(()=>{try{const te=localStorage.getItem("for_me_saved_yt_library");return te?JSON.parse(te):[]}catch{return[]}});le.useEffect(()=>{bi&&localStorage.setItem("for_me_active_yt",JSON.stringify(bi))},[bi]),le.useEffect(()=>{localStorage.setItem("for_me_saved_yt_library",JSON.stringify(ce))},[ce]);const tt=te=>{if(kn){zn(!1);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("pauseVideo")}catch{}}Nn("ambient");const fe=te||bt;Xt(fe),Cr.play(fe),sn(!0);const B=pa.find(De=>De.id===fe);ji.startKeepAlive(),ji.updateMetadata({title:(B==null?void 0:B.title)||"Procedural Soundscape",artist:"FOR ME Sanctuary (Offline)",album:"Sound Sanctuary",onPlay:()=>tt(fe),onPause:Ve})},Ve=()=>{Cr.stop(),sn(!1),ji.stopKeepAlive(),ji.setPlaybackState("paused")},Ke=te=>{an(te),Cr.setVolume(te)},rt=()=>{const te=Cr.toggleMute();hi(te)},gt=te=>{Cr.stop(),sn(!1),wi(te),Nn("youtube"),zn(!0),K(!1);try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}},Mt=()=>{if(kn){zn(!1);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("pauseVideo")}catch{}}else{Cr.stop(),sn(!1),Nn("youtube"),zn(!0),K(!1);try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute(),typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("playVideo")}catch{}}},st=()=>{zn(!1);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("stopVideo")}catch{}},Pt=()=>{try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("nextVideo"),zn(!0)}catch{}},on=()=>{try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("previousVideo"),zn(!0)}catch{}},jt=te=>{Yi(te);try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand("setVolume",[te])}catch{}},Yt=()=>{K(te=>{const fe=!te;try{typeof window.__forMeSendYouTubeCommand=="function"&&window.__forMeSendYouTubeCommand(fe?"mute":"unMute")}catch{}return fe})},ln=(te,fe)=>{var ut;const B=e_(te);if(!B)return{success:!1,error:"Could not recognize a valid YouTube video or playlist link. Please check the URL format and try again."};const De=(fe==null?void 0:fe.trim())||(B.type==="playlist"?`Custom Playlist (${(ut=B.playlistId)==null?void 0:ut.slice(0,8)}...)`:`YouTube Audio (${B.videoId||"Stream"})`),Qe={id:`yt-${Date.now()}-${Math.random().toString(36).substr(2,5)}`,title:De,type:B.type,videoId:B.videoId,playlistId:B.playlistId,url:B.cleanUrl,thumbnailUrl:t_(B.videoId),channel:B.type==="playlist"?"Custom YouTube Playlist":"Custom YouTube Stream",createdAt:new Date().toISOString()};return Xe(Vt=>[Qe,...Vt]),gt(Qe),{success:!0,item:Qe}},at=te=>{Xe(fe=>fe.filter(B=>B.id!==te))};return u.jsx(xm.Provider,{value:{profile:e,setProfile:t,updateProfile:r,appTheme:o,setAppTheme:l,toggleAppTheme:d,isHUDHidden:f,setIsHUDHidden:g,toggleHUDHidden:m,tasks:k,toggleTask:U,addTask:R,deleteTask:E,wallpaperTheme:b,setWallpaperTheme:y,wallpaperSettings:h,updateWallpaperSettings:S,resetWallpaperSettings:M,habits:L,toggleHabit:W,addHabit:j,deleteHabit:H,routines:X,addRoutineBlock:Q,updateRoutineBlock:ue,deleteRoutineBlock:Y,toggleRoutineChecklistItem:se,updateRoutineChecklistItem:G,addRoutineChecklistItem:Z,deleteRoutineChecklistItem:z,loadRoutineTemplate:I,resetRoutines:oe,activeRoutineBlock:O,activeRoutineMinutesLeft:ie,nextRoutineBlock:me,nextRoutineMinutesUntil:Ye,studySeconds:Ne,isStudyActive:qe,studySubject:xt,setStudySubject:wt,studySubjects:yt,addStudySubject:_e,deleteStudySubject:Lt,dailyStudyTargetHours:cn,setDailyStudyTargetHours:ee,toggleStudyTimer:Bt,resetStudyTimer:Ie,studySessions:vn,logManualStudyTime:Kt,deleteStudySession:ot,pomodoroPhase:T,pomodoroSecondsLeft:Le,pomodoroTotalSeconds:ke,pomodoroSettings:Ze,setPomodoroSettings:N,startPomodoro:Se,pausePomodoro:Te,resumePomodoro:Oe,togglePomodoro:$,resetPomodoro:Ae,skipPomodoroPhase:we,togglePomodoroDisplayMode:Re,hydration:ve,setHydration:Ce,sleepHours:He,setSleep:Pe,dailyRating:Je,setDailyRating:lt,lastActiveDate:St,resetDayProgress:wn,factoryReset:fn,audioSource:Qt,setAudioSource:Nn,isAudioPlaying:En,activeSoundscapeId:bt,audioVolume:It,isAudioMuted:un,playSoundscape:tt,stopSoundscape:Ve,setAudioVolume:Ke,toggleAudioMute:rt,isYouTubePlaying:kn,setYouTubeIsPlaying:zn,isYouTubePlayerReady:At,setYouTubePlayerReady:Dr,activeYouTubeItem:bi,youtubeVolume:ri,isYouTubeMuted:A,savedYouTubeItems:ce,showYouTubePreview:ge,setShowYouTubePreview:de,playYouTubeItem:gt,toggleYouTubePlay:Mt,stopYouTube:st,nextYouTubeTrack:Pt,prevYouTubeTrack:on,setYouTubeVolume:jt,toggleYouTubeMute:Yt,addYouTubeToLibrary:ln,removeYouTubeFromLibrary:at,isEcoSleeping:v,setIsEcoSleeping:_},children:s})},dr=()=>{const s=le.useContext(xm);if(!s)throw new Error("useData must be used within a DataProvider");return s},i_=()=>{const s=le.useRef(null),{isHUDHidden:e,wallpaperSettings:t,appTheme:r,isEcoSleeping:o}=dr(),l=le.useRef(e),d=le.useRef(t),f=le.useRef(r),g=le.useRef(o);g.current=o;const m=le.useRef(!1),b=le.useRef(null);return le.useEffect(()=>{l.current=e},[e]),le.useEffect(()=>{d.current=t},[t]),le.useEffect(()=>{f.current=r},[r]),le.useEffect(()=>{!o&&!m.current&&b.current&&b.current()},[o]),le.useEffect(()=>{const y=s.current;if(!y)return;const h=y.getContext("2d");if(!h)return;let w,S=0,M=0;const v=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let _=[];const P=()=>{_=[];const Y=d.current.starDensity||"balanced",se=Y==="sparse"?.45:Y==="dense"?1.6:Y==="galaxy"?2.4:1,G=S<768?85:160,Z=Math.round(G*se);for(let z=0;z<Z;z++){const I=Math.random()>.85?2:Math.random()>.45?1:0,oe=Math.random()*.65+(I===2?.85:.35);_.push({x:Math.random()*S,y:Math.random()*M,z:I,radius:oe,alpha:Math.random()*.55+.25,alphaSpeed:Math.random()*.015+.005,alphaPhase:Math.random()*Math.PI*2,vx:(Math.random()-.5)*.06,vy:(Math.random()-.5)*.06})}},k=()=>{if(!y)return;const Y=Math.min(window.devicePixelRatio||1,1.25);S=window.innerWidth,M=window.innerHeight,y.width=S*Y,y.height=M*Y,y.style.width=`${S}px`,y.style.height=`${M}px`,h.scale(Y,Y),P()};k(),window.addEventListener("resize",k,{passive:!0});let D=S/2,U=M/2,R=S/2,E=M/2;const L=Y=>{d.current.interactiveParallax!==!1&&(D=Y.clientX,U=Y.clientY)};window.addEventListener("mousemove",L,{passive:!0});const q=(Y,se,G,Z)=>{h.save(),h.translate(Y,se);const z=f.current==="light",I=Math.max(.15,Math.min(.95,Z));h.globalAlpha=I;const oe=h.createRadialGradient(0,0,0,0,0,G*.9);z?(oe.addColorStop(0,"rgba(245, 158, 11, 0.75)"),oe.addColorStop(.3,"rgba(217, 119, 6, 0.28)"),oe.addColorStop(.7,"rgba(180, 83, 9, 0.06)"),oe.addColorStop(1,"rgba(255, 255, 255, 0)")):(oe.addColorStop(0,"rgba(255, 255, 255, 0.85)"),oe.addColorStop(.3,"rgba(216, 180, 254, 0.35)"),oe.addColorStop(.7,"rgba(147, 51, 234, 0.08)"),oe.addColorStop(1,"rgba(0, 0, 0, 0)")),h.fillStyle=oe,h.beginPath(),h.arc(0,0,G*.9,0,Math.PI*2),h.fill();const O=h.createLinearGradient(-G,0,G,0);z?(O.addColorStop(0,"rgba(245, 158, 11, 0)"),O.addColorStop(.35,"rgba(217, 119, 6, 0.45)"),O.addColorStop(.5,"#b45309"),O.addColorStop(.65,"rgba(217, 119, 6, 0.45)"),O.addColorStop(1,"rgba(245, 158, 11, 0)")):(O.addColorStop(0,"rgba(255, 255, 255, 0)"),O.addColorStop(.35,"rgba(233, 213, 255, 0.55)"),O.addColorStop(.5,"#ffffff"),O.addColorStop(.65,"rgba(233, 213, 255, 0.55)"),O.addColorStop(1,"rgba(255, 255, 255, 0)")),h.strokeStyle=O,h.lineWidth=.75,h.beginPath(),h.moveTo(-G,0),h.lineTo(G,0),h.stroke();const ne=h.createLinearGradient(0,-G,0,G);z?(ne.addColorStop(0,"rgba(245, 158, 11, 0)"),ne.addColorStop(.35,"rgba(217, 119, 6, 0.45)"),ne.addColorStop(.5,"#b45309"),ne.addColorStop(.65,"rgba(217, 119, 6, 0.45)"),ne.addColorStop(1,"rgba(245, 158, 11, 0)")):(ne.addColorStop(0,"rgba(255, 255, 255, 0)"),ne.addColorStop(.35,"rgba(233, 213, 255, 0.55)"),ne.addColorStop(.5,"#ffffff"),ne.addColorStop(.65,"rgba(233, 213, 255, 0.55)"),ne.addColorStop(1,"rgba(255, 255, 255, 0)")),h.strokeStyle=ne,h.lineWidth=.75,h.beginPath(),h.moveTo(0,-G),h.lineTo(0,G),h.stroke();const ie=G*.38;h.strokeStyle=z?"rgba(180, 83, 9, 0.35)":"rgba(255, 255, 255, 0.4)",h.lineWidth=.5,h.beginPath(),h.moveTo(-ie,-ie),h.lineTo(ie,ie),h.moveTo(-ie,ie),h.lineTo(ie,-ie),h.stroke(),h.fillStyle=z?"#d97706":"#ffffff",h.beginPath(),h.arc(0,0,1.2,0,Math.PI*2),h.fill(),h.restore()},W=[{x:-100,y:-100,length:100,speed:18,angle:Math.PI/4+.05,alpha:0,active:!1},{x:-100,y:-100,length:80,speed:16,angle:Math.PI/4-.08,alpha:0,active:!1},{x:-100,y:-100,length:110,speed:20,angle:Math.PI/4+.12,alpha:0,active:!1}];let j=120;const H=Y=>{if(Y==="off")return;j--;const se=Y==="meteor-shower"?40:180;if(j<=0&&!v){j=Math.random()*(Y==="meteor-shower"?60:200)+se;const G=W.find(Z=>!Z.active);G&&(G.active=!0,G.x=Math.random()*(S*.7),G.y=Math.random()*(M*.3),G.alpha=.95,G.length=Math.random()*50+70)}for(const G of W)if(G.active)if(G.x+=Math.cos(G.angle)*G.speed,G.y+=Math.sin(G.angle)*G.speed,G.alpha-=Y==="meteor-shower"?.022:.016,G.alpha<=0||G.x>S+100||G.y>M+100)G.active=!1;else{h.save();const Z=G.x-Math.cos(G.angle)*G.length,z=G.y-Math.sin(G.angle)*G.length,I=h.createLinearGradient(Z,z,G.x,G.y);I.addColorStop(0,"rgba(255, 255, 255, 0)"),I.addColorStop(.7,"rgba(216, 180, 254, "+G.alpha*.6+")"),I.addColorStop(1,"#ffffff"),h.strokeStyle=I,h.lineWidth=1.3,h.beginPath(),h.moveTo(Z,z),h.lineTo(G.x,G.y),h.stroke(),h.fillStyle="#ffffff",h.beginPath(),h.arc(G.x,G.y,1.8,0,Math.PI*2),h.fill(),h.restore()}};let X=0,F=!0;const Q=()=>{F=!document.hidden};document.addEventListener("visibilitychange",Q);const ue=()=>{if(!F){w=requestAnimationFrame(ue);return}const Y=d.current,se=l.current;let G=1;Y.speed==="frozen"?G=0:Y.speed==="calm"?G=.45:Y.speed==="dynamic"?G=1.45:G=.85,se&&G>0&&(G*=1.25),X+=v?.002:.014*G,h.clearRect(0,0,S,M),R+=(D-R)*.04,E+=(U-E)*.04;const Z=(R-S/2)/(S/2),z=(E-M/2)/(M/2);let I=1;Y.amplitude==="subtle"?I=.55:Y.amplitude==="dramatic"?I=1.6:I=1,se&&(I*=1.2);const oe=Y.palette,O=f.current==="light";let ne="#030208",ie="#0b061c",Me="#170a32",me="rgba(168, 85, 247, 0.22)",he="rgba(99, 102, 241, 0.16)",Ye="rgba(168, 85, 247, 0.30)",$e="rgba(192, 132, 252, 0.40)",Ne=["#05030e","#090518","#0e0824"],je="rgba(168, 85, 247, 0.25)",qe=["#0a051d","#110930","#190c42"],mt="rgba(168, 85, 247, 0.35)",xt=["#11082e","#1c0c4b","#261063"],wt="rgba(192, 132, 252, 0.45)",yt=["#180b3d","#260f64","#341584"],kt="rgba(216, 180, 254, 0.55)",_e=["#0c0620","#140833","#1e0c4a","#281061"],Lt="rgba(233, 213, 255, 0.65)";O?oe==="celestial-cyan"?(ne="#eef8ff",ie="#d7effe",Me="#b5e3fd",me="rgba(14, 165, 233, 0.16)",he="rgba(6, 182, 212, 0.12)",Ye="rgba(2, 132, 199, 0.12)",$e="rgba(3, 105, 161, 0.20)",Ne=["#93c5fd","#bfdbfe","#dbeafe"],je="rgba(29, 78, 216, 0.35)",qe=["#60a5fa","#93c5fd","#bfdbfe"],mt="rgba(2, 132, 199, 0.42)",xt=["#38bdf8","#7dd3fc","#bae6fd"],wt="rgba(14, 165, 233, 0.50)",yt=["#bae6fd","#d7f0fd","#f0f9ff"],kt="rgba(56, 189, 248, 0.58)",_e=["#f0f9ff","#f8fcff","#ffffff","#ffffff"],Lt="rgba(2, 132, 199, 0.68)"):oe==="supernova-sunset"?(ne="#fff1f2",ie="#fecdd3",Me="#fda4af",me="rgba(244, 63, 94, 0.16)",he="rgba(249, 115, 22, 0.12)",Ye="rgba(225, 29, 72, 0.12)",$e="rgba(190, 18, 60, 0.20)",Ne=["#f43f5e","#fb7185","#fda4af"],je="rgba(159, 18, 57, 0.35)",qe=["#fb7185","#fda4af","#fecdd3"],mt="rgba(225, 29, 72, 0.42)",xt=["#fda4af","#fecdd3","#ffe4e6"],wt="rgba(244, 63, 94, 0.50)",yt=["#fecdd3","#ffe4e6","#fff1f2"],kt="rgba(251, 113, 133, 0.58)",_e=["#fff5f6","#fffafb","#ffffff","#ffffff"],Lt="rgba(225, 29, 72, 0.68)"):oe==="nocturne-silver"?(ne="#fafafa",ie="#f4f4f6",Me="#e4e4e7",me="rgba(113, 113, 122, 0.14)",he="rgba(82, 82, 91, 0.10)",Ye="rgba(82, 82, 91, 0.12)",$e="rgba(63, 63, 70, 0.20)",Ne=["#a1a1aa","#d4d4d8","#e4e4e7"],je="rgba(63, 63, 70, 0.35)",qe=["#d4d4d8","#e4e4e7","#f1f1f3"],mt="rgba(82, 82, 91, 0.42)",xt=["#e4e4e7","#f1f1f3","#f4f4f6"],wt="rgba(113, 113, 122, 0.50)",yt=["#f1f1f3","#f6f6f8","#fafafa"],kt="rgba(161, 161, 170, 0.58)",_e=["#f6f6f8","#fcfcfc","#ffffff","#ffffff"],Lt="rgba(82, 82, 91, 0.68)"):oe==="cyberpunk-neon"?(ne="#fdf2f8",ie="#fae8ff",Me="#f5d0fe",me="rgba(236, 72, 153, 0.18)",he="rgba(6, 182, 212, 0.14)",Ye="rgba(168, 85, 247, 0.15)",$e="rgba(236, 72, 153, 0.22)",Ne=["#f472b6","#fbcfe8","#fdf2f8"],je="rgba(219, 39, 119, 0.35)",qe=["#c084fc","#e9d5ff","#fae8ff"],mt="rgba(147, 51, 234, 0.42)",xt=["#38bdf8","#bae6fd","#f0f9ff"],wt="rgba(2, 132, 199, 0.50)",yt=["#fbcfe8","#fce7f3","#ffffff"],kt="rgba(236, 72, 153, 0.58)",_e=["#fdf2f8","#ffffff","#ffffff","#ffffff"],Lt="rgba(168, 85, 247, 0.68)"):oe==="solar-gold"?(ne="#fffbeb",ie="#fef3c7",Me="#fde68a",me="rgba(245, 158, 11, 0.20)",he="rgba(234, 88, 12, 0.14)",Ye="rgba(217, 119, 6, 0.15)",$e="rgba(245, 158, 11, 0.22)",Ne=["#f59e0b","#fbbf24","#fef3c7"],je="rgba(180, 83, 9, 0.38)",qe=["#fbbf24","#fcd34d","#fef9c3"],mt="rgba(217, 119, 6, 0.45)",xt=["#fde047","#fef08a","#fefce8"],wt="rgba(234, 88, 12, 0.52)",yt=["#fef08a","#fefce8","#ffffff"],kt="rgba(245, 158, 11, 0.60)",_e=["#fefce8","#ffffff","#ffffff","#ffffff"],Lt="rgba(217, 119, 6, 0.70)"):oe==="emerald-aurora"?(ne="#f0fdf4",ie="#dcfce7",Me="#bbf7d0",me="rgba(16, 185, 129, 0.20)",he="rgba(34, 197, 94, 0.14)",Ye="rgba(22, 163, 74, 0.15)",$e="rgba(16, 185, 129, 0.22)",Ne=["#86efac","#bbf7d0","#dcfce7"],je="rgba(22, 163, 74, 0.38)",qe=["#4ade80","#86efac","#bbf7d0"],mt="rgba(21, 128, 61, 0.45)",xt=["#22c55e","#4ade80","#86efac"],wt="rgba(16, 185, 129, 0.52)",yt=["#86efac","#bbf7d0","#f0fdf4"],kt="rgba(22, 163, 74, 0.60)",_e=["#f0fdf4","#f8fafc","#ffffff","#ffffff"],Lt="rgba(16, 185, 129, 0.70)"):oe==="pure-pitch-black"?(ne="#ffffff",ie="#f8fafc",Me="#f1f5f9",me="rgba(148, 163, 184, 0.16)",he="rgba(100, 116, 139, 0.10)",Ye="rgba(71, 85, 105, 0.15)",$e="rgba(51, 65, 85, 0.22)",Ne=["#cbd5e1","#e2e8f0","#f1f5f9"],je="rgba(71, 85, 105, 0.38)",qe=["#94a3b8","#cbd5e1","#e2e8f0"],mt="rgba(51, 65, 85, 0.45)",xt=["#64748b","#94a3b8","#cbd5e1"],wt="rgba(30, 41, 59, 0.52)",yt=["#cbd5e1","#e2e8f0","#f8fafc"],kt="rgba(51, 65, 85, 0.60)",_e=["#f8fafc","#ffffff","#ffffff","#ffffff"],Lt="rgba(15, 23, 42, 0.70)"):(ne="#fffbf3",ie="#feeccd",Me="#fad4a0",me="rgba(245, 158, 11, 0.18)",he="rgba(217, 119, 6, 0.12)",Ye="rgba(180, 83, 9, 0.12)",$e="rgba(146, 64, 14, 0.20)",Ne=["#d4a373","#bc8a5f","#a47148"],je="rgba(146, 64, 14, 0.38)",qe=["#e6ba8f","#d4a373","#bc8a5f"],mt="rgba(180, 83, 9, 0.45)",xt=["#f3d5b5","#e6ba8f","#d4a373"],wt="rgba(217, 119, 6, 0.52)",yt=["#faedcd","#f3d5b5","#fefae0"],kt="rgba(245, 158, 11, 0.60)",_e=["#fefae0","#fffdfa","#ffffff","#ffffff"],Lt="rgba(217, 119, 6, 0.70)"):oe==="celestial-cyan"?(ne="#020712",ie="#041322",Me="#071f35",me="rgba(14, 165, 233, 0.18)",he="rgba(6, 182, 212, 0.12)",Ye="rgba(56, 189, 248, 0.12)",$e="rgba(103, 232, 249, 0.20)",Ne=["#030914","#051221","#071c31"],je="rgba(56, 189, 248, 0.22)",qe=["#040f1f","#071b33","#0a2646"],mt="rgba(56, 189, 248, 0.32)",xt=["#06152a","#0a2544","#0f345c"],wt="rgba(56, 189, 248, 0.42)",yt=["#081b34","#0d2e54","#134273"],kt="rgba(125, 211, 252, 0.52)",_e=["#051224","#091c36","#0e294d","#133866"],Lt="rgba(186, 230, 253, 0.65)"):oe==="supernova-sunset"?(ne="#0a0208",ie="#160412",Me="#24061c",me="rgba(244, 63, 94, 0.18)",he="rgba(249, 115, 22, 0.12)",Ye="rgba(251, 113, 133, 0.12)",$e="rgba(253, 186, 116, 0.20)",Ne=["#0d020a","#170412","#22061b"],je="rgba(244, 63, 94, 0.22)",qe=["#150311","#24061d","#340929"],mt="rgba(244, 63, 94, 0.32)",xt=["#1e0518","#320827","#470c38"],wt="rgba(251, 113, 133, 0.42)",yt=["#280620","#420b33","#5c0f47"],kt="rgba(251, 146, 60, 0.52)",_e=["#180314","#270620","#3b0930","#500d41"],Lt="rgba(254, 215, 170, 0.65)"):oe==="nocturne-silver"?(ne="#030306",ie="#08080d",Me="#101017",me="rgba(161, 161, 170, 0.16)",he="rgba(113, 113, 122, 0.10)",Ye="rgba(212, 212, 216, 0.12)",$e="rgba(228, 228, 231, 0.18)",Ne=["#060609","#0c0c12","#13131c"],je="rgba(161, 161, 170, 0.20)",qe=["#0a0a0f","#12121b","#1a1a27"],mt="rgba(161, 161, 170, 0.30)",xt=["#0e0e16","#181824","#232333"],wt="rgba(212, 212, 216, 0.40)",yt=["#13131e","#1f1f30","#2d2d42"],kt="rgba(228, 228, 231, 0.50)",_e=["#0c0c13","#14141f","#1d1d2b","#272738"],Lt="rgba(244, 244, 245, 0.65)"):oe==="cyberpunk-neon"?(ne="#06000e",ie="#120024",Me="#22003d",me="rgba(236, 72, 153, 0.22)",he="rgba(6, 182, 212, 0.18)",Ye="rgba(34, 211, 238, 0.15)",$e="rgba(244, 114, 182, 0.22)",Ne=["#0a0014","#150029","#24003d"],je="rgba(168, 85, 247, 0.25)",qe=["#120021","#1f0038","#310052"],mt="rgba(236, 72, 153, 0.35)",xt=["#1c0030","#2d004d","#42006e"],wt="rgba(6, 182, 212, 0.45)",yt=["#25003d","#3d0066","#59008f"],kt="rgba(244, 63, 94, 0.55)",_e=["#160029","#260045","#380062","#4e0085"],Lt="rgba(34, 211, 238, 0.70)"):oe==="solar-gold"?(ne="#080400",ie="#140900",Me="#241000",me="rgba(245, 158, 11, 0.22)",he="rgba(234, 88, 12, 0.16)",Ye="rgba(251, 191, 36, 0.15)",$e="rgba(252, 211, 77, 0.22)",Ne=["#0a0400","#170900","#261000"],je="rgba(217, 119, 6, 0.25)",qe=["#130700","#220e00","#361600"],mt="rgba(245, 158, 11, 0.35)",xt=["#1e0a00","#301300","#4a1e00"],wt="rgba(251, 191, 36, 0.45)",yt=["#290e00","#421a00","#612700"],kt="rgba(252, 211, 77, 0.55)",_e=["#190800","#2a0e00","#401500","#592000"],Lt="rgba(254, 240, 138, 0.70)"):oe==="emerald-aurora"?(ne="#010d05",ie="#021a0a",Me="#052e14",me="rgba(16, 185, 129, 0.22)",he="rgba(52, 211, 153, 0.16)",Ye="rgba(110, 231, 183, 0.15)",$e="rgba(52, 211, 153, 0.22)",Ne=["#021508","#04240f","#073918"],je="rgba(16, 185, 129, 0.25)",qe=["#031f0c","#063316","#0a4b22"],mt="rgba(52, 211, 153, 0.35)",xt=["#052b12","#09431e","#0e602c"],wt="rgba(110, 231, 183, 0.45)",yt=["#083818","#0d5426","#147738"],kt="rgba(167, 243, 208, 0.55)",_e=["#062e14","#0a4720","#10632d","#18863f"],Lt="rgba(110, 231, 183, 0.70)"):oe==="pure-pitch-black"&&(ne="#000000",ie="#020202",Me="#060606",me="rgba(255, 255, 255, 0.08)",he="rgba(161, 161, 170, 0.06)",Ye="rgba(161, 161, 170, 0.10)",$e="rgba(228, 228, 231, 0.15)",Ne=["#020202","#060606","#0a0a0a"],je="rgba(161, 161, 170, 0.20)",qe=["#050505","#0a0a0a","#101010"],mt="rgba(161, 161, 170, 0.30)",xt=["#080808","#0e0e0e","#161616"],wt="rgba(212, 212, 216, 0.40)",yt=["#0c0c0c","#141414","#1e1e1e"],kt="rgba(228, 228, 231, 0.50)",_e=["#080808","#101010","#181818","#222222"],Lt="rgba(255, 255, 255, 0.75)");const cn=h.createLinearGradient(0,0,0,M);cn.addColorStop(0,ne),cn.addColorStop(.45,ie),cn.addColorStop(1,Me),h.fillStyle=cn,h.fillRect(0,0,S,M);const gn=h.createRadialGradient(S*.8,M*.18,0,S*.8,M*.18,S*.5);gn.addColorStop(0,me),gn.addColorStop(.7,"rgba(0, 0, 0, 0.04)"),gn.addColorStop(1,"rgba(0, 0, 0, 0)"),h.fillStyle=gn,h.fillRect(0,0,S,M);const ee=h.createRadialGradient(S*.18,M*.82,0,S*.18,M*.82,S*.55);if(ee.addColorStop(0,he),ee.addColorStop(.65,"rgba(0, 0, 0, 0.03)"),ee.addColorStop(1,"rgba(0, 0, 0, 0)"),h.fillStyle=ee,h.fillRect(0,0,S,M),Y.showNebulaDust){h.save();const Re=h.createRadialGradient(S*.35,M*.2,0,S*.35,M*.2,S*.38);Re.addColorStop(0,me),Re.addColorStop(.5,"rgba(126, 34, 206, 0.04)"),Re.addColorStop(1,"rgba(0, 0, 0, 0)"),h.fillStyle=Re,h.fillRect(0,0,S,M);const ve=h.createRadialGradient(S*.7,M*.14,0,S*.7,M*.14,S*.32);ve.addColorStop(0,he),ve.addColorStop(.6,"rgba(14, 116, 144, 0.03)"),ve.addColorStop(1,"rgba(0, 0, 0, 0)"),h.fillStyle=ve,h.fillRect(0,0,S,M),h.restore()}if(Y.showConstellations){h.save(),h.strokeStyle=O?"rgba(180, 130, 80, 0.28)":"rgba(255, 255, 255, 0.14)",h.lineWidth=.75;const Re=[{x:S*.68,y:M*.1},{x:S*.72,y:M*.08},{x:S*.76,y:M*.09},{x:S*.78,y:M*.13},{x:S*.83,y:M*.14},{x:S*.84,y:M*.1},{x:S*.78,y:M*.09}];h.beginPath(),h.moveTo(Re[0].x,Re[0].y);for(let Ce=1;Ce<Re.length;Ce++)h.lineTo(Re[Ce].x,Re[Ce].y);h.stroke(),h.fillStyle=O?"#b45309":"#ffffff";for(const Ce of Re)h.beginPath(),h.arc(Ce.x,Ce.y,1.4,0,Math.PI*2),h.fill();const ve=[{x:S*.28,y:M*.08},{x:S*.31,y:M*.12},{x:S*.34,y:M*.09},{x:S*.37,y:M*.13},{x:S*.4,y:M*.1}];h.beginPath(),h.moveTo(ve[0].x,ve[0].y);for(let Ce=1;Ce<ve.length;Ce++)h.lineTo(ve[Ce].x,ve[Ce].y);h.stroke();for(const Ce of ve)h.beginPath(),h.arc(Ce.x,Ce.y,1.3,0,Math.PI*2),h.fill();h.restore()}if(Y.showComet){h.save();const Re=X*.04%1,ve=S*.75,Ce=M*.04,He=S*.25,nt=M*.22,Pe=ve+(He-ve)*Re,Je=Ce+(nt-Ce)*Re,lt=Math.atan2(nt-Ce,He-ve)+Math.PI,Ge=140,St=Pe+Math.cos(lt)*Ge,Ht=Je+Math.sin(lt)*Ge,tn=h.createLinearGradient(St,Ht,Pe,Je);tn.addColorStop(0,"rgba(56, 189, 248, 0)"),tn.addColorStop(.5,"rgba(168, 85, 247, 0.25)"),tn.addColorStop(.85,"rgba(233, 213, 255, 0.65)"),tn.addColorStop(1,"#ffffff"),h.strokeStyle=tn,h.lineWidth=1.8,h.beginPath(),h.moveTo(St,Ht),h.lineTo(Pe,Je),h.stroke(),h.fillStyle="#ffffff",h.shadowColor="#67e8f9",h.shadowBlur=8,h.beginPath(),h.arc(Pe,Je,2.2,0,Math.PI*2),h.fill(),h.restore()}if(Y.showMeridian){h.save();const Re=S*.91;h.strokeStyle=Ye,h.lineWidth=1,h.beginPath(),h.moveTo(Re,0),h.lineTo(Re,M),h.stroke(),h.strokeStyle="rgba(255, 255, 255, 0.18)",h.lineWidth=1;for(let ve=50;ve<M;ve+=70)h.beginPath(),h.moveTo(Re-4,ve),h.lineTo(Re+4,ve),h.stroke();h.restore()}if(Y.showOrbitalTrack){h.save();const Re=S*.78,ve=M*.18,Ce=Math.min(S,M)*.45,He=Math.min(S,M)*.22;h.shadowColor=$e,h.shadowBlur=6,h.strokeStyle=$e,h.lineWidth=1.2,h.beginPath(),h.ellipse(Re,ve,Ce,He,-.22,Math.PI*.1,Math.PI*1.3),h.stroke(),h.setLineDash([3,8]),h.strokeStyle="rgba(255, 255, 255, 0.22)",h.lineWidth=.8,h.beginPath(),h.ellipse(Re,ve,Ce*1.08,He*1.08,-.22,Math.PI*.05,Math.PI*1.25),h.stroke(),h.setLineDash([]),h.restore()}if(Y.showStars)for(let Re=0;Re<_.length;Re++){const ve=_[Re];!v&&G>0&&(ve.x+=ve.vx*G,ve.y+=ve.vy*G,ve.alphaPhase+=ve.alphaSpeed*G,ve.x<0&&(ve.x=S),ve.x>S&&(ve.x=0),ve.y<0&&(ve.y=M),ve.y>M&&(ve.y=0));const Ce=(ve.z+1)*.35,He=ve.x+Z*12*Ce,nt=ve.y+z*12*Ce,Pe=Math.max(.12,Math.min(.85,ve.alpha+Math.sin(ve.alphaPhase)*.22));h.beginPath(),h.arc(He,nt,ve.radius,0,Math.PI*2),h.fillStyle=O?`rgba(180, 130, 80, ${(Pe*.65).toFixed(3)})`:`rgba(255, 255, 255, ${Pe.toFixed(3)})`,h.fill()}const vn=Y.waveGeometry,Et=Y.waveLayerDensity,Bt=(Re,ve,Ce,He=2)=>{h.save(),h.translate(Re,ve);const nt=h.createRadialGradient(0,0,0,0,0,He*2.5);O?(nt.addColorStop(0,`rgba(245, 158, 11, ${Ce})`),nt.addColorStop(.35,`rgba(217, 119, 6, ${Ce*.7})`),nt.addColorStop(1,"rgba(255, 255, 255, 0)"),h.fillStyle=nt,h.beginPath(),h.arc(0,0,He*2.5,0,Math.PI*2),h.fill(),h.strokeStyle=`rgba(180, 83, 9, ${Ce*.8})`,h.lineWidth=.75,h.beginPath(),h.moveTo(-He*2,0),h.lineTo(He*2,0),h.moveTo(0,-He*2),h.lineTo(0,He*2),h.stroke()):(nt.addColorStop(0,`rgba(255, 255, 255, ${Ce})`),nt.addColorStop(.35,`rgba(233, 213, 255, ${Ce*.7})`),nt.addColorStop(1,"rgba(255, 255, 255, 0)"),h.fillStyle=nt,h.beginPath(),h.arc(0,0,He*2.5,0,Math.PI*2),h.fill(),h.strokeStyle=`rgba(255, 255, 255, ${Ce*.9})`,h.lineWidth=.75,h.beginPath(),h.moveTo(-He*2,0),h.lineTo(He*2,0),h.moveTo(0,-He*2),h.lineTo(0,He*2),h.stroke()),h.restore()},Ie=(Re,ve,Ce,He,nt,Pe,Je,lt,Ge,St,Ht=[])=>{const tn=[0,S*.32,S*.68,S],wn=[];for(let bt=0;bt<4;bt++){const Xt=Math.sin(X*Ce+He+bt*1.4)*(ve*.75)+Math.cos(X*Ce*.7+He*1.2+bt*2.1)*(ve*.35);wn.push({x:tn[bt],y:M*Re[bt]+Xt})}const fn=[wn[0],...wn,wn[wn.length-1]],Qt=[],Nn=.5;for(let bt=1;bt<fn.length-2;bt++){const Xt=fn[bt-1],It=fn[bt],an=fn[bt+1],un=fn[bt+2],hi=(an.x-Xt.x)*Nn,kn=(an.y-Xt.y)*Nn,zn=(un.x-It.x)*Nn,At=(un.y-It.y)*Nn;Qt.push({p1:It,cp1:{x:It.x+hi/3,y:It.y+kn/3},cp2:{x:an.x-zn/3,y:an.y-At/3},p2:an})}h.save(),h.beginPath(),h.moveTo(wn[0].x,wn[0].y);for(const bt of Qt)h.bezierCurveTo(bt.cp1.x,bt.cp1.y,bt.cp2.x,bt.cp2.y,bt.p2.x,bt.p2.y);h.lineTo(S,M),h.lineTo(0,M),h.closePath(),h.fillStyle=nt,h.fill(),h.save(),h.clip();const En=Math.min(...wn.map(bt=>bt.y)),sn=h.createLinearGradient(0,En,0,En+140);O?(sn.addColorStop(0,"rgba(255, 255, 255, 0.40)"),sn.addColorStop(.25,"rgba(251, 191, 36, 0.14)"),sn.addColorStop(.7,"rgba(217, 119, 6, 0.04)"),sn.addColorStop(1,"rgba(255, 255, 255, 0)")):(sn.addColorStop(0,"rgba(255, 255, 255, 0.26)"),sn.addColorStop(.25,"rgba(216, 180, 254, 0.16)"),sn.addColorStop(.7,"rgba(147, 51, 234, 0.05)"),sn.addColorStop(1,"rgba(0, 0, 0, 0)")),h.fillStyle=sn,h.fillRect(0,En,S,M),h.beginPath();for(let bt=0;bt<Qt.length;bt++){const Xt=Qt[bt],It=18+Math.sin(X*.75+bt*1.5)*4;bt===0&&h.moveTo(Xt.p1.x,Xt.p1.y+It),h.bezierCurveTo(Xt.cp1.x,Xt.cp1.y+It,Xt.cp2.x,Xt.cp2.y+It,Xt.p2.x,Xt.p2.y+It)}h.strokeStyle=O?"rgba(160, 90, 40, 0.16)":"rgba(255, 255, 255, 0.10)",h.lineWidth=1,h.stroke(),h.beginPath();for(let bt=0;bt<Qt.length;bt++){const Xt=Qt[bt],It=38+Math.cos(X*.65+bt*1.8)*5;bt===0&&h.moveTo(Xt.p1.x,Xt.p1.y+It),h.bezierCurveTo(Xt.cp1.x,Xt.cp1.y+It,Xt.cp2.x,Xt.cp2.y+It,Xt.p2.x,Xt.p2.y+It)}h.strokeStyle=O?"rgba(160, 90, 40, 0.10)":"rgba(255, 255, 255, 0.06)",h.lineWidth=.8,h.stroke(),h.restore(),h.strokeStyle=Pe,h.lineWidth=Je,h.stroke(),h.restore();for(const bt of Ht){const Xt=Math.min(Qt.length-1,Math.floor(bt*Qt.length)),It=bt*Qt.length-Xt,an=Qt[Xt],un=1-It,hi=un*un*un*an.p1.x+3*un*un*It*an.cp1.x+3*un*It*It*an.cp2.x+It*It*It*an.p2.x,kn=un*un*un*an.p1.y+3*un*un*It*an.cp1.y+3*un*It*It*an.cp2.y+It*It*It*an.p2.y,zn=.5+Math.sin(X*2+bt*8)*.35;Bt(hi,kn,zn,2)}},Kt=(Re,ve,Ce,He,nt,Pe,Je,lt,Ge,St,Ht,tn)=>{const wn=Math.sin(X*nt+Pe)*He,fn=[];fn.push({x:0,y:M*Re+wn});for(let Qt=0;Qt<ve.length;Qt++){const Nn=S*ve[Qt],En=M*(Re-Ce[Qt])+Math.cos(X*nt+Qt+Pe)*(He*.7);fn.push({x:Nn,y:En})}fn.push({x:S,y:M*(Re+.03)+wn}),h.save(),h.beginPath(),h.moveTo(fn[0].x,fn[0].y);for(let Qt=1;Qt<fn.length;Qt++)h.lineTo(fn[Qt].x,fn[Qt].y);h.lineTo(S,M),h.lineTo(0,M),h.closePath(),h.fillStyle=Je,h.fill(),h.strokeStyle=lt,h.lineWidth=Ge,h.stroke(),h.restore()},ot=(Re,ve,Ce,He,nt,Pe)=>{h.save(),h.globalCompositeOperation="screen",h.beginPath(),h.moveTo(0,M*Re);const Je=16;for(let lt=0;lt<=Je;lt++){const Ge=lt/Je*S,St=M*Re+Math.sin(lt/Je*Math.PI*2+X*Ce+He)*ve;lt===0?h.moveTo(Ge,St):h.lineTo(Ge,St)}h.lineTo(S,M),h.lineTo(0,M),h.closePath(),h.fillStyle=nt,h.fill(),h.strokeStyle=Pe,h.lineWidth=1.8,h.stroke(),h.restore()},Ze=Y.horizonHeight||"balanced",N=Ze==="low"?.08:Ze==="high"?-.08:0,T=Y.waveStrokeOpacity??1,ae=h.createLinearGradient(0,M*(.46+N),0,M*(.68+N));if(ae.addColorStop(0,"rgba(0, 0, 0, 0)"),O)ae.addColorStop(.5,"rgba(255, 255, 255, 0.25)");else{const Re=oe==="celestial-cyan"?"rgba(7, 31, 53, 0.45)":oe==="supernova-sunset"?"rgba(36, 6, 28, 0.45)":oe==="nocturne-silver"?"rgba(16, 16, 23, 0.45)":oe==="emerald-aurora"?"rgba(5, 46, 20, 0.45)":oe==="pure-pitch-black"?"rgba(6, 6, 6, 0.45)":"rgba(20, 10, 40, 0.45)";ae.addColorStop(.5,Re)}ae.addColorStop(1,"rgba(0, 0, 0, 0)"),h.fillStyle=ae,h.fillRect(0,M*(.46+N),S,M*.22);const Le=h.createLinearGradient(0,M*(.55+N),0,M);Le.addColorStop(0,Ne[0]),Le.addColorStop(.5,Ne[1]),Le.addColorStop(1,Ne[2]);const Ee=h.createLinearGradient(0,M*(.63+N),0,M);Ee.addColorStop(0,qe[0]),Ee.addColorStop(.5,qe[1]),Ee.addColorStop(1,qe[2]);const ke=h.createLinearGradient(0,M*(.71+N),0,M);ke.addColorStop(0,xt[0]),ke.addColorStop(.5,xt[1]),ke.addColorStop(1,xt[2]);const ze=h.createLinearGradient(0,M*(.79+N),0,M);ze.addColorStop(0,yt[0]),ze.addColorStop(.5,yt[1]),ze.addColorStop(1,yt[2]);const Se=h.createLinearGradient(0,M*(.86+N),0,M);Se.addColorStop(0,_e[0]),Se.addColorStop(.35,_e[1]),Se.addColorStop(.7,_e[2]),Se.addColorStop(1,_e[3]);const Te=O?"rgba(160, 140, 120, 0.12)":"rgba(0,0,0,0.55)",Oe=O?"rgba(160, 140, 120, 0.16)":"rgba(0,0,0,0.65)",$=O?"rgba(160, 140, 120, 0.20)":"rgba(0,0,0,0.70)",Ae=O?"rgba(160, 140, 120, 0.22)":"rgba(0,0,0,0.75)",we=O?"rgba(160, 140, 120, 0.26)":"rgba(0,0,0,0.80)";if(vn==="mountains"?(Kt(.48+N,[.18,.5,.82],[.14,.17,.12],12*I,.35,0,Le,je,.8*T),Et!=="airy"&&Kt(.58+N,[.32,.66,.9],[.12,.15,.11],14*I,.4,1.5,Ee,mt,.9*T),Kt(.68+N,[.15,.44,.75],[.11,.13,.1],15*I,.45,3.1,ke,wt,1*T),Et==="dense"&&Kt(.78+N,[.28,.6,.86],[.09,.11,.08],14*I,.4,4.4,ze,kt,1.1*T),Kt(.88+N,[.4,.74],[.08,.07],12*I,.35,5.8,Se,Lt,1.2*T)):vn==="aurora"?(ot(.28+N*.5,32*I,.45,0,Le,je),Et!=="airy"&&ot(.4+N*.5,30*I,.5,1.6,Ee,mt),ot(.54+N*.5,26*I,.55,3.2,ke,wt),Et==="dense"&&ot(.68+N*.5,22*I,.6,4.8,ze,kt),Ie([.86+N,.89+N,.85+N,.88+N],12*I,.35,6.2,Se,Lt,1.2*T)):vn==="ocean"?(Ie([.62+N,.58+N,.65+N,.6+N],16*I,.65,0,Le,je,.8*T,Te,16,-6,[.3]),Et!=="airy"&&Ie([.69+N,.73+N,.67+N,.71+N],18*I,.7,1.8,Ee,mt,.9*T,Oe,20,-7,[.55]),Ie([.76+N,.73+N,.79+N,.75+N],20*I,.75,3.4,ke,wt,1*T,$,24,-8,[.38,.82]),Et==="dense"&&Ie([.83+N,.86+N,.81+N,.85+N],16*I,.65,4.9,ze,kt,1.1*T,Ae,28,-9,[.65]),Ie([.89+N,.87+N,.92+N,.88+N],14*I,.55,6.2,Se,Lt,1.2*T,we,32,-10,[.5])):(Ie([.48+N,.56+N,.64+N,.68+N],16*I,.38,0,Le,je,.8*T,Te,16,-6,[.24,.68]),Et!=="airy"&&Ie([.66+N,.62+N,.55+N,.6+N],18*I,.42,1.8,Ee,mt,.9*T,Oe,20,-7,[.35,.82]),Ie([.69+N,.76+N,.72+N,.76+N],19*I,.46,3.4,ke,wt,1*T,$,24,-8,[.42,.78]),Et==="dense"&&Ie([.8+N,.77+N,.84+N,.8+N],16*I,.4,4.9,ze,kt,1.1*T,Ae,28,-9,[.18,.62]),Ie([.88+N,.91+N,.86+N,.9+N],13*I,.35,6.2,Se,Lt,1.2*T,we,32,-10,[.35,.8])),Y.showCrossStars){const Re=.68+Math.sin(X*1.8)*.22,ve=.6+Math.sin(X*1.5+1.2)*.24,Ce=.64+Math.sin(X*1.9+2.5)*.2,He=.58+Math.sin(X*1.4+3.8)*.25,nt=.52+Math.sin(X*1.7+4.6)*.22;q(S*.5,M*.08,11,Re),q(S*.18,M*.16,9.5,ve),q(S*.84,M*.2,10,Ce),q(S*.72,M*.34,8.5,He),q(S*.08,M*.28,8,nt)}if(H(Y.shootingStarMode||"occasional"),g.current){m.current=!1;return}m.current=!0,w=requestAnimationFrame(ue)};return b.current=()=>{m.current||(m.current=!0,ue())},w=requestAnimationFrame(ue),()=>{b.current=null,m.current=!1,cancelAnimationFrame(w),window.removeEventListener("resize",k),window.removeEventListener("mousemove",L),document.removeEventListener("visibilitychange",Q)}},[]),u.jsx("canvas",{ref:s,className:"fixed inset-0 pointer-events-none z-0 select-none","aria-hidden":"true"})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ef="187",r_=0,x0=1,s_=2,Kl=1,a_=2,so=3,As=0,$n=1,Wi=2,ma=0,lo=1,Es=2,v0=3,_0=4,o_=5,ha=100,l_=101,c_=102,u_=103,d_=104,f_=200,h_=201,p_=202,m_=203,vm=204,_m=205,g_=206,x_=207,v_=208,__=209,y_=210,S_=211,b_=212,w_=213,M_=214,Pd=0,Dd=1,Ld=2,uo=3,Id=4,kd=5,zd=6,Ud=7,ym=0,E_=1,T_=2,Nr=0,Sm=1,bm=2,wm=3,Mm=4,Em=5,Tm=6,Cm=7,Am=300,xa=301,fo=302,ed=303,td=304,va=1e3,di=1001,Fd=1002,Wn=1003,C_=1004,Cl=1005,fi=1006,nd=1007,ts=1008,Si=1009,Rm=1010,Nm=1011,ho=1012,Tf=1013,cr=1014,sr=1015,ur=1016,Cf=1017,Af=1018,_a=1020,Pm=35902,Dm=35899,Lm=1021,Im=1022,ar=1023,is=1026,ns=1027,km=1028,Rf=1029,Rs=1030,Nf=1031,Pf=1033,Zl=33776,Jl=33777,Ql=33778,ec=33779,Od=35840,Bd=35841,Hd=35842,Gd=35843,jd=36196,Vd=37492,Wd=37496,$d=37488,Xd=37489,sc=37490,Yd=37491,qd=37808,Kd=37809,Zd=37810,Jd=37811,Qd=37812,ef=37813,tf=37814,nf=37815,rf=37816,sf=37817,af=37818,of=37819,lf=37820,cf=37821,uf=36492,df=36494,ff=36495,hf=36283,pf=36284,ac=36285,mf=36286,A_=3200,gf=0,R_=1,es="",yi="srgb",oc="srgb-linear",lc="linear",rn="srgb",id=7680,N_=519,P_=512,D_=513,L_=514,zm=515,I_=516,k_=517,Um=518,Fm=519,z_=35044,y0="300 es",Xi=2e3,po=2001;function U_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function cc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function F_(){const s=cc("canvas");return s.style.display="block",s}const S0={};function b0(...s){const e="THREE."+s.shift();console.log(e,...s)}function Om(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Rt(...s){s=Om(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Jt(...s){s=Om(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function tc(...s){const e=s.join(" ");e in S0||(S0[e]=!0,Rt(...s))}function O_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const B_={[Pd]:Pd,[Ld]:zd,[Id]:Id,[uo]:kd,[Dd]:Dd,[zd]:Ld,[Ud]:Ud,[kd]:uo};class Ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,d=o.length;l<d;l++)o[l].call(this,e);e.target=null}}}const Zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rd=Math.PI/180,xf=180/Math.PI;function vo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Zn[s&255]+Zn[s>>8&255]+Zn[s>>16&255]+Zn[s>>24&255]+"-"+Zn[e&255]+Zn[e>>8&255]+"-"+Zn[e>>16&15|64]+Zn[e>>24&255]+"-"+Zn[t&63|128]+Zn[t>>8&255]+"-"+Zn[t>>16&255]+Zn[t>>24&255]+Zn[r&255]+Zn[r>>8&255]+Zn[r>>16&255]+Zn[r>>24&255]).toLowerCase()}function $t(s,e,t){return Math.max(e,Math.min(t,s))}function H_(s,e){return(s%e+e)%e}function sd(s,e,t){return(1-t)*s+t*e}function G_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Df(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function j_(s,e){if(e.constructor===Float32Array)return s;const t=Df(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function V_(s,e){if(e.constructor===Float32Array)return s;const t=Df(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const Hf=class Hf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$t(this.x,e.x,t.x),this.y=$t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$t(this.x,e,t),this.y=$t(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar($t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos($t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,d=this.y-e.y;return this.x=l*r-d*o+e.x,this.y=l*o+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hf.prototype.isVector2=!0;let Gt=Hf;class ba{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,d,f){let g=r[o+0],m=r[o+1],b=r[o+2],y=r[o+3],h=l[d+0],w=l[d+1],S=l[d+2],M=l[d+3];if(y!==M||g!==h||m!==w||b!==S){let v=g*h+m*w+b*S+y*M;v<0&&(h=-h,w=-w,S=-S,M=-M,v=-v);let _=1-f;if(v<.9995){const P=Math.acos(v),k=Math.sin(P);_=Math.sin(_*P)/k,f=Math.sin(f*P)/k,g=g*_+h*f,m=m*_+w*f,b=b*_+S*f,y=y*_+M*f}else{g=g*_+h*f,m=m*_+w*f,b=b*_+S*f,y=y*_+M*f;const P=1/Math.sqrt(g*g+m*m+b*b+y*y);g*=P,m*=P,b*=P,y*=P}}e[t]=g,e[t+1]=m,e[t+2]=b,e[t+3]=y}static multiplyQuaternionsFlat(e,t,r,o,l,d){const f=r[o],g=r[o+1],m=r[o+2],b=r[o+3],y=l[d],h=l[d+1],w=l[d+2],S=l[d+3];return e[t]=f*S+b*y+g*w-m*h,e[t+1]=g*S+b*h+m*y-f*w,e[t+2]=m*S+b*w+f*h-g*y,e[t+3]=b*S-f*y-g*h-m*w,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,d=e._order,f=Math.cos,g=Math.sin,m=f(r/2),b=f(o/2),y=f(l/2),h=g(r/2),w=g(o/2),S=g(l/2);switch(d){case"XYZ":this._x=h*b*y+m*w*S,this._y=m*w*y-h*b*S,this._z=m*b*S+h*w*y,this._w=m*b*y-h*w*S;break;case"YXZ":this._x=h*b*y+m*w*S,this._y=m*w*y-h*b*S,this._z=m*b*S-h*w*y,this._w=m*b*y+h*w*S;break;case"ZXY":this._x=h*b*y-m*w*S,this._y=m*w*y+h*b*S,this._z=m*b*S+h*w*y,this._w=m*b*y-h*w*S;break;case"ZYX":this._x=h*b*y-m*w*S,this._y=m*w*y+h*b*S,this._z=m*b*S-h*w*y,this._w=m*b*y+h*w*S;break;case"YZX":this._x=h*b*y+m*w*S,this._y=m*w*y+h*b*S,this._z=m*b*S-h*w*y,this._w=m*b*y-h*w*S;break;case"XZY":this._x=h*b*y-m*w*S,this._y=m*w*y-h*b*S,this._z=m*b*S+h*w*y,this._w=m*b*y+h*w*S;break;default:Rt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],d=t[1],f=t[5],g=t[9],m=t[2],b=t[6],y=t[10],h=r+f+y;if(h>0){const w=.5/Math.sqrt(h+1);this._w=.25/w,this._x=(b-g)*w,this._y=(l-m)*w,this._z=(d-o)*w}else if(r>f&&r>y){const w=2*Math.sqrt(1+r-f-y);this._w=(b-g)/w,this._x=.25*w,this._y=(o+d)/w,this._z=(l+m)/w}else if(f>y){const w=2*Math.sqrt(1+f-r-y);this._w=(l-m)/w,this._x=(o+d)/w,this._y=.25*w,this._z=(g+b)/w}else{const w=2*Math.sqrt(1+y-r-f);this._w=(d-o)/w,this._x=(l+m)/w,this._y=(g+b)/w,this._z=.25*w}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,d=e._w,f=t._x,g=t._y,m=t._z,b=t._w;return this._x=r*b+d*f+o*m-l*g,this._y=o*b+d*g+l*f-r*m,this._z=l*b+d*m+r*g-o*f,this._w=d*b-r*f-o*g-l*m,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,d=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,d=-d,f=-f);let g=1-t;if(f<.9995){const m=Math.acos(f),b=Math.sin(m);g=Math.sin(g*m)/b,t=Math.sin(t*m)/b,this._x=this._x*g+r*t,this._y=this._y*g+o*t,this._z=this._z*g+l*t,this._w=this._w*g+d*t,this._onChangeCallback()}else this._x=this._x*g+r*t,this._y=this._y*g+o*t,this._z=this._z*g+l*t,this._w=this._w*g+d*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Gf=class Gf{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(w0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(w0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,d=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*d,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*d,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*d,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,d=e.y,f=e.z,g=e.w,m=2*(d*o-f*r),b=2*(f*t-l*o),y=2*(l*r-d*t);return this.x=t+g*m+d*y-f*b,this.y=r+g*b+f*m-l*y,this.z=o+g*y+l*b-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$t(this.x,e.x,t.x),this.y=$t(this.y,e.y,t.y),this.z=$t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$t(this.x,e,t),this.y=$t(this.y,e,t),this.z=$t(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar($t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,d=t.x,f=t.y,g=t.z;return this.x=o*g-l*f,this.y=l*d-r*g,this.z=r*f-o*d,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ad.copy(this).projectOnVector(e),this.sub(ad)}reflect(e){return this.sub(ad.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos($t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gf.prototype.isVector3=!0;let ye=Gf;const ad=new ye,w0=new ba,jf=class jf{constructor(e,t,r,o,l,d,f,g,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,d,f,g,m)}set(e,t,r,o,l,d,f,g,m){const b=this.elements;return b[0]=e,b[1]=o,b[2]=f,b[3]=t,b[4]=l,b[5]=g,b[6]=r,b[7]=d,b[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,d=r[0],f=r[3],g=r[6],m=r[1],b=r[4],y=r[7],h=r[2],w=r[5],S=r[8],M=o[0],v=o[3],_=o[6],P=o[1],k=o[4],D=o[7],U=o[2],R=o[5],E=o[8];return l[0]=d*M+f*P+g*U,l[3]=d*v+f*k+g*R,l[6]=d*_+f*D+g*E,l[1]=m*M+b*P+y*U,l[4]=m*v+b*k+y*R,l[7]=m*_+b*D+y*E,l[2]=h*M+w*P+S*U,l[5]=h*v+w*k+S*R,l[8]=h*_+w*D+S*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],f=e[5],g=e[6],m=e[7],b=e[8];return t*d*b-t*f*m-r*l*b+r*f*g+o*l*m-o*d*g}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],f=e[5],g=e[6],m=e[7],b=e[8],y=b*d-f*m,h=f*g-b*l,w=m*l-d*g,S=t*y+r*h+o*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/S;return e[0]=y*M,e[1]=(o*m-b*r)*M,e[2]=(f*r-o*d)*M,e[3]=h*M,e[4]=(b*t-o*g)*M,e[5]=(o*l-f*t)*M,e[6]=w*M,e[7]=(r*g-m*t)*M,e[8]=(d*t-r*l)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,d,f){const g=Math.cos(l),m=Math.sin(l);return this.set(r*g,r*m,-r*(g*d+m*f)+d+e,-o*m,o*g,-o*(-m*d+g*f)+f+t,0,0,1),this}scale(e,t){return tc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(od.makeScale(e,t)),this}rotate(e){return tc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(od.makeRotation(-e)),this}translate(e,t){return tc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(od.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};jf.prototype.isMatrix3=!0;let Dt=jf;const od=new Dt,M0=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),E0=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function W_(){const s={enabled:!0,workingColorSpace:oc,spaces:{},convert:function(o,l,d){return this.enabled===!1||l===d||!l||!d||(this.spaces[l].transfer===rn&&(o.r=Pr(o.r),o.g=Pr(o.g),o.b=Pr(o.b)),this.spaces[l].primaries!==this.spaces[d].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===rn&&(o.r=ga(o.r),o.g=ga(o.g),o.b=ga(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===es?lc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,d){return o.copy(this.spaces[d].fromXYZ).multiply(this.spaces[l].toXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[oc]:{primaries:e,whitePoint:r,transfer:lc,toXYZ:M0,fromXYZ:E0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:e,whitePoint:r,transfer:rn,toXYZ:M0,fromXYZ:E0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),s}const Wt=W_();function Pr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ga(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ta;class $_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ta===void 0&&(ta=cc("canvas")),ta.width=e.width,ta.height=e.height;const o=ta.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=ta}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let d=0;d<l.length;d++)l[d]=Pr(l[d]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Pr(t[r]/255)*255):t[r]=Pr(t[r]);return{data:t,width:e.width,height:e.height}}else return Rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let X_=0;class Lf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=vo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let d=0,f=o.length;d<f;d++)o[d].isDataTexture?l.push(ld(o[d].image)):l.push(ld(o[d]))}else l=ld(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function ld(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?$_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Rt("Texture: Unable to serialize Texture."),{})}let Y_=0;const cd=new ye;class Qn extends Ns{constructor(e=Qn.DEFAULT_IMAGE,t=Qn.DEFAULT_MAPPING,r=di,o=di,l=fi,d=ts,f=ar,g=Si,m=Qn.DEFAULT_ANISOTROPY,b=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=vo(),this.name="",this.source=new Lf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=d,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=g,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=b,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(cd).x}get height(){return this.source.getSize(cd).y}get depth(){return this.source.getSize(cd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){Rt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){Rt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Am)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case va:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case Fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case va:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case Fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qn.DEFAULT_IMAGE=null;Qn.DEFAULT_MAPPING=Am;Qn.DEFAULT_ANISOTROPY=1;const Vf=class Vf{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,d=e.elements;return this.x=d[0]*t+d[4]*r+d[8]*o+d[12]*l,this.y=d[1]*t+d[5]*r+d[9]*o+d[13]*l,this.z=d[2]*t+d[6]*r+d[10]*o+d[14]*l,this.w=d[3]*t+d[7]*r+d[11]*o+d[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const g=e.elements,m=g[0],b=g[4],y=g[8],h=g[1],w=g[5],S=g[9],M=g[2],v=g[6],_=g[10];if(Math.abs(b-h)<.01&&Math.abs(y-M)<.01&&Math.abs(S-v)<.01){if(Math.abs(b+h)<.1&&Math.abs(y+M)<.1&&Math.abs(S+v)<.1&&Math.abs(m+w+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const k=(m+1)/2,D=(w+1)/2,U=(_+1)/2,R=(b+h)/4,E=(y+M)/4,L=(S+v)/4;return k>D&&k>U?k<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(k),o=R/r,l=E/r):D>U?D<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(D),r=R/o,l=L/o):U<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(U),r=E/l,o=L/l),this.set(r,o,l,t),this}let P=Math.sqrt((v-S)*(v-S)+(y-M)*(y-M)+(h-b)*(h-b));return Math.abs(P)<.001&&(P=1),this.x=(v-S)/P,this.y=(y-M)/P,this.z=(h-b)/P,this.w=Math.acos((m+w+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$t(this.x,e.x,t.x),this.y=$t(this.y,e.y,t.y),this.z=$t(this.z,e.z,t.z),this.w=$t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$t(this.x,e,t),this.y=$t(this.y,e,t),this.z=$t(this.z,e,t),this.w=$t(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar($t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Vf.prototype.isVector4=!0;let Sn=Vf;class q_ extends Ns{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Sn(0,0,e,t),this.scissorTest=!1,this.viewport=new Sn(0,0,e,t),this.textures=[];const o=r.count;for(let l=0;l<o;l++)this.textures[l]=new Qn({width:e,height:t,depth:r.depth}),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:fi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Lf(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lr extends q_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Bm extends Qn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class K_ extends Qn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const pc=class pc{constructor(e,t,r,o,l,d,f,g,m,b,y,h,w,S,M,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,d,f,g,m,b,y,h,w,S,M,v)}set(e,t,r,o,l,d,f,g,m,b,y,h,w,S,M,v){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=l,_[5]=d,_[9]=f,_[13]=g,_[2]=m,_[6]=b,_[10]=y,_[14]=h,_[3]=w,_[7]=S,_[11]=M,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/na.setFromMatrixColumn(e,0).length(),l=1/na.setFromMatrixColumn(e,1).length(),d=1/na.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*d,t[9]=r[9]*d,t[10]=r[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,d=Math.cos(r),f=Math.sin(r),g=Math.cos(o),m=Math.sin(o),b=Math.cos(l),y=Math.sin(l);if(e.order==="XYZ"){const h=d*b,w=d*y,S=f*b,M=f*y;t[0]=g*b,t[4]=-g*y,t[8]=m,t[1]=w+S*m,t[5]=h-M*m,t[9]=-f*g,t[2]=M-h*m,t[6]=S+w*m,t[10]=d*g}else if(e.order==="YXZ"){const h=g*b,w=g*y,S=m*b,M=m*y;t[0]=h+M*f,t[4]=S*f-w,t[8]=d*m,t[1]=d*y,t[5]=d*b,t[9]=-f,t[2]=w*f-S,t[6]=M+h*f,t[10]=d*g}else if(e.order==="ZXY"){const h=g*b,w=g*y,S=m*b,M=m*y;t[0]=h-M*f,t[4]=-d*y,t[8]=S+w*f,t[1]=w+S*f,t[5]=d*b,t[9]=M-h*f,t[2]=-d*m,t[6]=f,t[10]=d*g}else if(e.order==="ZYX"){const h=d*b,w=d*y,S=f*b,M=f*y;t[0]=g*b,t[4]=S*m-w,t[8]=h*m+M,t[1]=g*y,t[5]=M*m+h,t[9]=w*m-S,t[2]=-m,t[6]=f*g,t[10]=d*g}else if(e.order==="YZX"){const h=d*g,w=d*m,S=f*g,M=f*m;t[0]=g*b,t[4]=M-h*y,t[8]=S*y+w,t[1]=y,t[5]=d*b,t[9]=-f*b,t[2]=-m*b,t[6]=w*y+S,t[10]=h-M*y}else if(e.order==="XZY"){const h=d*g,w=d*m,S=f*g,M=f*m;t[0]=g*b,t[4]=-y,t[8]=m*b,t[1]=h*y+M,t[5]=d*b,t[9]=w*y-S,t[2]=S*y-w,t[6]=f*b,t[10]=M*y+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Z_,e,J_)}lookAt(e,t,r){const o=this.elements;return vi.subVectors(e,t),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),Yr.crossVectors(r,vi),Yr.lengthSq()===0&&(Math.abs(r.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),Yr.crossVectors(r,vi)),Yr.normalize(),Al.crossVectors(vi,Yr),o[0]=Yr.x,o[4]=Al.x,o[8]=vi.x,o[1]=Yr.y,o[5]=Al.y,o[9]=vi.y,o[2]=Yr.z,o[6]=Al.z,o[10]=vi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,d=r[0],f=r[4],g=r[8],m=r[12],b=r[1],y=r[5],h=r[9],w=r[13],S=r[2],M=r[6],v=r[10],_=r[14],P=r[3],k=r[7],D=r[11],U=r[15],R=o[0],E=o[4],L=o[8],q=o[12],W=o[1],j=o[5],H=o[9],X=o[13],F=o[2],Q=o[6],ue=o[10],Y=o[14],se=o[3],G=o[7],Z=o[11],z=o[15];return l[0]=d*R+f*W+g*F+m*se,l[4]=d*E+f*j+g*Q+m*G,l[8]=d*L+f*H+g*ue+m*Z,l[12]=d*q+f*X+g*Y+m*z,l[1]=b*R+y*W+h*F+w*se,l[5]=b*E+y*j+h*Q+w*G,l[9]=b*L+y*H+h*ue+w*Z,l[13]=b*q+y*X+h*Y+w*z,l[2]=S*R+M*W+v*F+_*se,l[6]=S*E+M*j+v*Q+_*G,l[10]=S*L+M*H+v*ue+_*Z,l[14]=S*q+M*X+v*Y+_*z,l[3]=P*R+k*W+D*F+U*se,l[7]=P*E+k*j+D*Q+U*G,l[11]=P*L+k*H+D*ue+U*Z,l[15]=P*q+k*X+D*Y+U*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],d=e[1],f=e[5],g=e[9],m=e[13],b=e[2],y=e[6],h=e[10],w=e[14],S=e[3],M=e[7],v=e[11],_=e[15],P=g*w-m*h,k=f*w-m*y,D=f*h-g*y,U=d*w-m*b,R=d*h-g*b,E=d*y-f*b;return t*(M*P-v*k+_*D)-r*(S*P-v*U+_*R)+o*(S*k-M*U+_*E)-l*(S*D-M*R+v*E)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],d=e[5],f=e[9],g=e[2],m=e[6],b=e[10];return t*(d*b-f*m)-r*(l*b-f*g)+o*(l*m-d*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],f=e[5],g=e[6],m=e[7],b=e[8],y=e[9],h=e[10],w=e[11],S=e[12],M=e[13],v=e[14],_=e[15],P=t*f-r*d,k=t*g-o*d,D=t*m-l*d,U=r*g-o*f,R=r*m-l*f,E=o*m-l*g,L=b*M-y*S,q=b*v-h*S,W=b*_-w*S,j=y*v-h*M,H=y*_-w*M,X=h*_-w*v,F=P*X-k*H+D*j+U*W-R*q+E*L;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/F;return e[0]=(f*X-g*H+m*j)*Q,e[1]=(o*H-r*X-l*j)*Q,e[2]=(M*E-v*R+_*U)*Q,e[3]=(h*R-y*E-w*U)*Q,e[4]=(g*W-d*X-m*q)*Q,e[5]=(t*X-o*W+l*q)*Q,e[6]=(v*D-S*E-_*k)*Q,e[7]=(b*E-h*D+w*k)*Q,e[8]=(d*H-f*W+m*L)*Q,e[9]=(r*W-t*H-l*L)*Q,e[10]=(S*R-M*D+_*P)*Q,e[11]=(y*D-b*R-w*P)*Q,e[12]=(f*q-d*j-g*L)*Q,e[13]=(t*j-r*q+o*L)*Q,e[14]=(M*k-S*U-v*P)*Q,e[15]=(b*U-y*k+h*P)*Q,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,d=e.x,f=e.y,g=e.z,m=l*d,b=l*f;return this.set(m*d+r,m*f-o*g,m*g+o*f,0,m*f+o*g,b*f+r,b*g-o*d,0,m*g-o*f,b*g+o*d,l*g*g+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,d){return this.set(1,r,l,0,e,1,d,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,d=t._y,f=t._z,g=t._w,m=l+l,b=d+d,y=f+f,h=l*m,w=l*b,S=l*y,M=d*b,v=d*y,_=f*y,P=g*m,k=g*b,D=g*y,U=r.x,R=r.y,E=r.z;return o[0]=(1-(M+_))*U,o[1]=(w+D)*U,o[2]=(S-k)*U,o[3]=0,o[4]=(w-D)*R,o[5]=(1-(h+_))*R,o[6]=(v+P)*R,o[7]=0,o[8]=(S+k)*E,o[9]=(v-P)*E,o[10]=(1-(h+M))*E,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let d=na.set(o[0],o[1],o[2]).length();const f=na.set(o[4],o[5],o[6]).length(),g=na.set(o[8],o[9],o[10]).length();l<0&&(d=-d),Oi.copy(this);const m=1/d,b=1/f,y=1/g;return Oi.elements[0]*=m,Oi.elements[1]*=m,Oi.elements[2]*=m,Oi.elements[4]*=b,Oi.elements[5]*=b,Oi.elements[6]*=b,Oi.elements[8]*=y,Oi.elements[9]*=y,Oi.elements[10]*=y,t.setFromRotationMatrix(Oi),r.x=d,r.y=f,r.z=g,this}makePerspective(e,t,r,o,l,d,f=Xi,g=!1){const m=this.elements,b=2*l/(t-e),y=2*l/(r-o),h=(t+e)/(t-e),w=(r+o)/(r-o);let S,M;if(g)S=l/(d-l),M=d*l/(d-l);else if(f===Xi)S=-(d+l)/(d-l),M=-2*d*l/(d-l);else if(f===po)S=-d/(d-l),M=-d*l/(d-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=b,m[4]=0,m[8]=h,m[12]=0,m[1]=0,m[5]=y,m[9]=w,m[13]=0,m[2]=0,m[6]=0,m[10]=S,m[14]=M,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,o,l,d,f=Xi,g=!1){const m=this.elements,b=2/(t-e),y=2/(r-o),h=-(t+e)/(t-e),w=-(r+o)/(r-o);let S,M;if(g)S=1/(d-l),M=d/(d-l);else if(f===Xi)S=-2/(d-l),M=-(d+l)/(d-l);else if(f===po)S=-1/(d-l),M=-l/(d-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=b,m[4]=0,m[8]=0,m[12]=h,m[1]=0,m[5]=y,m[9]=0,m[13]=w,m[2]=0,m[6]=0,m[10]=S,m[14]=M,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};pc.prototype.isMatrix4=!0;let bn=pc;const na=new ye,Oi=new bn,Z_=new ye(0,0,0),J_=new ye(1,1,1),Yr=new ye,Al=new ye,vi=new ye,T0=new bn,C0=new ba;class rs{constructor(e=0,t=0,r=0,o=rs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],d=o[4],f=o[8],g=o[1],m=o[5],b=o[9],y=o[2],h=o[6],w=o[10];switch(t){case"XYZ":this._y=Math.asin($t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-b,w),this._z=Math.atan2(-d,l)):(this._x=Math.atan2(h,m),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(b,-1,1)),Math.abs(b)<.9999999?(this._y=Math.atan2(f,w),this._z=Math.atan2(g,m)):(this._y=Math.atan2(-y,l),this._z=0);break;case"ZXY":this._x=Math.asin($t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-y,w),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(g,l));break;case"ZYX":this._y=Math.asin(-$t(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(h,w),this._z=Math.atan2(g,l)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin($t(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-b,m),this._y=Math.atan2(-y,l)):(this._x=0,this._y=Math.atan2(f,w));break;case"XZY":this._z=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-b,w),this._y=0);break;default:Rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return T0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(T0,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return C0.setFromEuler(this),this.setFromQuaternion(C0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rs.DEFAULT_ORDER="XYZ";class Hm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Q_=0;const A0=new ye,ia=new ba,br=new bn,Rl=new ye,eo=new ye,ey=new ye,ty=new ba,R0=new ye(1,0,0),N0=new ye(0,1,0),P0=new ye(0,0,1),D0={type:"added"},ny={type:"removed"},ra={type:"childadded",child:null},ud={type:"childremoved",child:null};class ei extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ei.DEFAULT_UP.clone();const e=new ye,t=new rs,r=new ba,o=new ye(1,1,1);function l(){r.setFromEuler(t,!1)}function d(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new bn},normalMatrix:{value:new Dt}}),this.matrix=new bn,this.matrixWorld=new bn,this.matrixAutoUpdate=ei.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ia.setFromAxisAngle(e,t),this.quaternion.multiply(ia),this}rotateOnWorldAxis(e,t){return ia.setFromAxisAngle(e,t),this.quaternion.premultiply(ia),this}rotateX(e){return this.rotateOnAxis(R0,e)}rotateY(e){return this.rotateOnAxis(N0,e)}rotateZ(e){return this.rotateOnAxis(P0,e)}translateOnAxis(e,t){return A0.copy(e).applyQuaternion(this.quaternion),this.position.add(A0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(R0,e)}translateY(e){return this.translateOnAxis(N0,e)}translateZ(e){return this.translateOnAxis(P0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(br.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Rl.copy(e):Rl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?br.lookAt(eo,Rl,this.up):br.lookAt(Rl,eo,this.up),this.quaternion.setFromRotationMatrix(br),o&&(br.extractRotation(o.matrixWorld),ia.setFromRotationMatrix(br),this.quaternion.premultiply(ia.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Jt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(D0),ra.child=e,this.dispatchEvent(ra),ra.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ny),ud.child=e,this.dispatchEvent(ud),ud.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),br.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),br.multiply(e.parent.matrixWorld)),e.applyMatrix4(br),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(D0),ra.child=e,this.dispatchEvent(ra),ra.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectByProperty(e,t);if(d!==void 0)return d}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,d=o.length;l<d;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,ey),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,ty,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let d=0,f=l.length;d<f;d++)l[d].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,g){return f[g.uuid]===void 0&&(f[g.uuid]=g.toJSON(e)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const g=f.shapes;if(Array.isArray(g))for(let m=0,b=g.length;m<b;m++){const y=g[m];l(e.shapes,y)}else l(e.shapes,g)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let g=0,m=this.material.length;g<m;g++)f.push(l(e.materials,this.material[g]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const g=this.animations[f];o.animations.push(l(e.animations,g))}}if(t){const f=d(e.geometries),g=d(e.materials),m=d(e.textures),b=d(e.images),y=d(e.shapes),h=d(e.skeletons),w=d(e.animations),S=d(e.nodes);f.length>0&&(r.geometries=f),g.length>0&&(r.materials=g),m.length>0&&(r.textures=m),b.length>0&&(r.images=b),y.length>0&&(r.shapes=y),h.length>0&&(r.skeletons=h),w.length>0&&(r.animations=w),S.length>0&&(r.nodes=S)}return r.object=o,r;function d(f){const g=[];for(const m in f){const b=f[m];delete b.metadata,g.push(b)}return g}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ei.DEFAULT_UP=new ye(0,1,0);ei.DEFAULT_MATRIX_AUTO_UPDATE=!0;ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ao extends ei{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iy={type:"move"};class dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ao,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ao,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ye,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ye),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ao,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ye,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ye,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,d=null;const f=this._targetRay,g=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const M of e.hand.values()){const v=t.getJointPose(M,r),_=this._getHandJoint(m,M);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const b=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],h=b.position.distanceTo(y.position),w=.02,S=.005;m.inputState.pinching&&h>w+S?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&h<=w-S&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else g!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(g.matrix.fromArray(l.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,l.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(l.linearVelocity)):g.hasLinearVelocity=!1,l.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(l.angularVelocity)):g.hasAngularVelocity=!1,g.eventsEnabled&&g.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(iy)))}return f!==null&&(f.visible=o!==null),g!==null&&(g.visible=l!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ao;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Gm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qr={h:0,s:0,l:0},Nl={h:0,s:0,l:0};function fd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ot{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Wt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Wt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Wt.workingColorSpace){if(e=H_(e,1),t=$t(t,0,1),r=$t(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,d=2*r-l;this.r=fd(d,l,e+1/3),this.g=fd(d,l,e),this.b=fd(d,l,e-1/3)}return Wt.colorSpaceToWorking(this,o),this}setStyle(e,t=yi){function r(l){l!==void 0&&parseFloat(l)<1&&Rt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const d=o[1],f=o[2];switch(d){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseFloat(l[1]))/100,Math.min(100,parseFloat(l[2]))/100,Math.min(100,parseFloat(l[3]))/100,t);break;case"hsl":case"hsla":if(l=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:Rt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],d=l.length;if(d===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(d===6)return this.setHex(parseInt(l,16),t);Rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yi){const r=Gm[e.toLowerCase()];return r!==void 0?this.setHex(r,t):Rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}copyLinearToSRGB(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yi){return Wt.workingToColorSpace(Jn.copy(this),e),Math.round($t(Jn.r*255,0,255))*65536+Math.round($t(Jn.g*255,0,255))*256+Math.round($t(Jn.b*255,0,255))}getHexString(e=yi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Wt.workingColorSpace){Wt.workingToColorSpace(Jn.copy(this),t);const r=Jn.r,o=Jn.g,l=Jn.b,d=Math.max(r,o,l),f=Math.min(r,o,l);let g,m;const b=(f+d)/2;if(f===d)g=0,m=0;else{const y=d-f;switch(m=b<=.5?y/(d+f):y/(2-d-f),d){case r:g=(o-l)/y+(o<l?6:0);break;case o:g=(l-r)/y+2;break;case l:g=(r-o)/y+4;break}g/=6}return e.h=g,e.s=m,e.l=b,e}getRGB(e,t=Wt.workingColorSpace){return Wt.workingToColorSpace(Jn.copy(this),t),e.r=Jn.r,e.g=Jn.g,e.b=Jn.b,e}getStyle(e=yi){Wt.workingToColorSpace(Jn.copy(this),e);const t=Jn.r,r=Jn.g,o=Jn.b;return e!==yi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(qr),this.setHSL(qr.h+e,qr.s+t,qr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(qr),e.getHSL(Nl);const r=sd(qr.h,Nl.h,t),o=sd(qr.s,Nl.s,t),l=sd(qr.l,Nl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jn=new Ot;Ot.NAMES=Gm;class ry extends ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rs,this.environmentIntensity=1,this.environmentRotation=new rs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Bi=new ye,wr=new ye,hd=new ye,Mr=new ye,sa=new ye,aa=new ye,L0=new ye,pd=new ye,md=new ye,gd=new ye,xd=new Sn,vd=new Sn,_d=new Sn;class $i{constructor(e=new ye,t=new ye,r=new ye){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Bi.subVectors(e,t),o.cross(Bi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Bi.subVectors(o,t),wr.subVectors(r,t),hd.subVectors(e,t);const d=Bi.dot(Bi),f=Bi.dot(wr),g=Bi.dot(hd),m=wr.dot(wr),b=wr.dot(hd),y=d*m-f*f;if(y===0)return l.set(0,0,0),null;const h=1/y,w=(m*g-f*b)*h,S=(d*b-f*g)*h;return l.set(1-w-S,S,w)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Mr)===null?!1:Mr.x>=0&&Mr.y>=0&&Mr.x+Mr.y<=1}static getInterpolation(e,t,r,o,l,d,f,g){return this.getBarycoord(e,t,r,o,Mr)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(l,Mr.x),g.addScaledVector(d,Mr.y),g.addScaledVector(f,Mr.z),g)}static getInterpolatedAttribute(e,t,r,o,l,d){return xd.setScalar(0),vd.setScalar(0),_d.setScalar(0),xd.fromBufferAttribute(e,t),vd.fromBufferAttribute(e,r),_d.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(xd,l.x),d.addScaledVector(vd,l.y),d.addScaledVector(_d,l.z),d}static isFrontFacing(e,t,r,o){return Bi.subVectors(r,t),wr.subVectors(e,t),Bi.cross(wr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),wr.subVectors(this.a,this.b),Bi.cross(wr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return $i.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return $i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let d,f;sa.subVectors(o,r),aa.subVectors(l,r),pd.subVectors(e,r);const g=sa.dot(pd),m=aa.dot(pd);if(g<=0&&m<=0)return t.copy(r);md.subVectors(e,o);const b=sa.dot(md),y=aa.dot(md);if(b>=0&&y<=b)return t.copy(o);const h=g*y-b*m;if(h<=0&&g>=0&&b<=0&&g-b>0)return d=g/(g-b),t.copy(r).addScaledVector(sa,d);gd.subVectors(e,l);const w=sa.dot(gd),S=aa.dot(gd);if(S>=0&&w<=S)return t.copy(l);const M=w*m-g*S;if(M<=0&&m>=0&&S<=0)return f=m/(m-S),t.copy(r).addScaledVector(aa,f);const v=b*S-w*y;if(v<=0&&y-b>=0&&w-S>=0)return L0.subVectors(l,o),f=(y-b)/(y-b+(w-S)),t.copy(o).addScaledVector(L0,f);const _=1/(v+M+h);return d=M*_,f=h*_,t.copy(r).addScaledVector(sa,d).addScaledVector(aa,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class _o{constructor(e=new ye(1/0,1/0,1/0),t=new ye(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let d=0,f=l.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,Hi):Hi.fromBufferAttribute(l,d),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Pl.copy(r.boundingBox)),Pl.applyMatrix4(e.matrixWorld),this.union(Pl)}const o=e.children;for(let l=0,d=o.length;l<d;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(to),Dl.subVectors(this.max,to),oa.subVectors(e.a,to),la.subVectors(e.b,to),ca.subVectors(e.c,to),Kr.subVectors(la,oa),Zr.subVectors(ca,la),ys.subVectors(oa,ca);let t=[0,-Kr.z,Kr.y,0,-Zr.z,Zr.y,0,-ys.z,ys.y,Kr.z,0,-Kr.x,Zr.z,0,-Zr.x,ys.z,0,-ys.x,-Kr.y,Kr.x,0,-Zr.y,Zr.x,0,-ys.y,ys.x,0];return!yd(t,oa,la,ca,Dl)||(t=[1,0,0,0,1,0,0,0,1],!yd(t,oa,la,ca,Dl))?!1:(Ll.crossVectors(Kr,Zr),t=[Ll.x,Ll.y,Ll.z],yd(t,oa,la,ca,Dl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Er),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Er=[new ye,new ye,new ye,new ye,new ye,new ye,new ye,new ye],Hi=new ye,Pl=new _o,oa=new ye,la=new ye,ca=new ye,Kr=new ye,Zr=new ye,ys=new ye,to=new ye,Dl=new ye,Ll=new ye,Ss=new ye;function yd(s,e,t,r,o){for(let l=0,d=s.length-3;l<=d;l+=3){Ss.fromArray(s,l);const f=o.x*Math.abs(Ss.x)+o.y*Math.abs(Ss.y)+o.z*Math.abs(Ss.z),g=e.dot(Ss),m=t.dot(Ss),b=r.dot(Ss);if(Math.max(-Math.max(g,m,b),Math.min(g,m,b))>f)return!1}return!0}const An=new ye,Il=new Gt;let sy=0;class Ts extends Ns{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=z_,this.updateRanges=[],this.gpuType=sr,this.version=0,this._normalizationScale=e!==void 0?Df(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Il.fromBufferAttribute(this,t),Il.applyMatrix3(e),this.setXY(t,Il.x,Il.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)An.fromBufferAttribute(this,t),An.applyMatrix3(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),o=this._normalize(o),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):j_(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):V_(e,this.array)}}class jm extends Ts{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Vm extends Ts{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Gn extends Ts{constructor(e,t,r){super(new Float32Array(e),t,r)}}const ay=new _o,no=new ye,Sd=new ye;class If{constructor(e=new ye,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):ay.setFromPoints(e).getCenter(r);let o=0;for(let l=0,d=e.length;l<d;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);const t=no.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(no,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add(Sd)),this.expandByPoint(no.copy(e.center).sub(Sd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let oy=0;const Ni=new bn,bd=new ei,ua=new ye,_i=new _o,io=new _o,Hn=new ye;class fr extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(U_(e)?Vm:jm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new Dt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ni.makeRotationFromQuaternion(e),this.applyMatrix4(Ni),this}rotateX(e){return Ni.makeRotationX(e),this.applyMatrix4(Ni),this}rotateY(e){return Ni.makeRotationY(e),this.applyMatrix4(Ni),this}rotateZ(e){return Ni.makeRotationZ(e),this.applyMatrix4(Ni),this}translate(e,t,r){return Ni.makeTranslation(e,t,r),this.applyMatrix4(Ni),this}scale(e,t,r){return Ni.makeScale(e,t,r),this.applyMatrix4(Ni),this}lookAt(e){return bd.lookAt(e),bd.updateMatrix(),this.applyMatrix4(bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ua).negate(),this.translate(ua.x,ua.y,ua.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const d=e[o];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Gn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&Rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _o);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ye(-1/0,-1/0,-1/0),new ye(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];_i.setFromBufferAttribute(l),this.morphTargetsRelative?(Hn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(Hn),Hn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(Hn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new If);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ye,1/0);return}if(e){const r=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),t)for(let l=0,d=t.length;l<d;l++){const f=t[l];io.setFromBufferAttribute(f),this.morphTargetsRelative?(Hn.addVectors(_i.min,io.min),_i.expandByPoint(Hn),Hn.addVectors(_i.max,io.max),_i.expandByPoint(Hn)):(_i.expandByPoint(io.min),_i.expandByPoint(io.max))}_i.getCenter(r);let o=0;for(let l=0,d=e.count;l<d;l++)Hn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Hn));if(t)for(let l=0,d=t.length;l<d;l++){const f=t[l],g=this.morphTargetsRelative;for(let m=0,b=f.count;m<b;m++)Hn.fromBufferAttribute(f,m),g&&(ua.fromBufferAttribute(e,m),Hn.add(ua)),o=Math.max(o,r.distanceToSquared(Hn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new Ts(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const f=[],g=[],m=new Uint8Array(r.count);for(let q=0;q<r.count;q++)f[q]=new ye,g[q]=new ye;const b=new ye,y=new ye,h=new ye,w=new Gt,S=new Gt,M=new Gt,v=new ye,_=new ye;function P(q,W,j){m[q]=m[W]=m[j]=1,b.fromBufferAttribute(r,q),y.fromBufferAttribute(r,W),h.fromBufferAttribute(r,j),w.fromBufferAttribute(l,q),S.fromBufferAttribute(l,W),M.fromBufferAttribute(l,j),y.sub(b),h.sub(b),S.sub(w),M.sub(w);const H=1/(S.x*M.y-M.x*S.y);isFinite(H)&&(v.copy(y).multiplyScalar(M.y).addScaledVector(h,-S.y).multiplyScalar(H),_.copy(h).multiplyScalar(S.x).addScaledVector(y,-M.x).multiplyScalar(H),f[q].add(v),f[W].add(v),f[j].add(v),g[q].add(_),g[W].add(_),g[j].add(_))}let k=this.groups;k.length===0&&(k=[{start:0,count:e.count}]);for(let q=0,W=k.length;q<W;++q){const j=k[q],H=j.start,X=j.count;for(let F=H,Q=H+X;F<Q;F+=3)P(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const D=new ye,U=new ye,R=new ye,E=new ye;function L(q){R.fromBufferAttribute(o,q),E.copy(R);const W=f[q];D.copy(W),D.sub(R.multiplyScalar(R.dot(W))).normalize(),U.crossVectors(E,W);const H=U.dot(g[q])<0?-1:1;d.setXYZW(q,D.x,D.y,D.z,H)}for(let q=0,W=r.count;q<W;++q)m[q]&&L(q);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new Ts(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let h=0,w=r.count;h<w;h++)r.setXYZ(h,0,0,0);const o=new ye,l=new ye,d=new ye,f=new ye,g=new ye,m=new ye,b=new ye,y=new ye;if(e)for(let h=0,w=e.count;h<w;h+=3){const S=e.getX(h+0),M=e.getX(h+1),v=e.getX(h+2);o.fromBufferAttribute(t,S),l.fromBufferAttribute(t,M),d.fromBufferAttribute(t,v),b.subVectors(d,l),y.subVectors(o,l),b.cross(y),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),m.fromBufferAttribute(r,v),f.add(b),g.add(b),m.add(b),r.setXYZ(S,f.x,f.y,f.z),r.setXYZ(M,g.x,g.y,g.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let h=0,w=t.count;h<w;h+=3)o.fromBufferAttribute(t,h+0),l.fromBufferAttribute(t,h+1),d.fromBufferAttribute(t,h+2),b.subVectors(d,l),y.subVectors(o,l),b.cross(y),r.setXYZ(h+0,b.x,b.y,b.z),r.setXYZ(h+1,b.x,b.y,b.z),r.setXYZ(h+2,b.x,b.y,b.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Hn.fromBufferAttribute(e,t),Hn.normalize(),e.setXYZ(t,Hn.x,Hn.y,Hn.z)}toNonIndexed(){function e(f,g){const m=f.array,b=f.itemSize,y=f.normalized,h=new m.constructor(g.length*b);let w=0,S=0;for(let M=0,v=g.length;M<v;M++){f.isInterleavedBufferAttribute?w=g[M]*f.data.stride+f.offset:w=g[M]*b;for(let _=0;_<b;_++)h[S++]=m[w++]}return new Ts(h,b,y)}if(this.index===null)return Rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fr,r=this.index.array,o=this.attributes;for(const f in o){const g=o[f],m=e(g,r);t.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const g=[],m=l[f];for(let b=0,y=m.length;b<y;b++){const h=m[b],w=e(h,r);g.push(w)}t.morphAttributes[f]=g}t.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,g=d.length;f<g;f++){const m=d[f];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const g=this.parameters;for(const m in g)g[m]!==void 0&&(e[m]=g[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const g in r){const m=r[g];e.data.attributes[g]=m.toJSON(e.data)}const o={};let l=!1;for(const g in this.morphAttributes){const m=this.morphAttributes[g],b=[];for(let y=0,h=m.length;y<h;y++){const w=m[y];b.push(w.toJSON(e.data))}b.length>0&&(o[g]=b,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const b=o[m];this.setAttribute(m,b.clone(t))}const l=e.morphAttributes;for(const m in l){const b=[],y=l[m];for(let h=0,w=y.length;h<w;h++)b.push(y[h].clone(t));this.morphAttributes[m]=b}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,b=d.length;m<b;m++){const y=d[m];this.addGroup(y.start,y.count,y.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const g=e.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wd=new ye,ly=new ye,cy=new Dt;class Qr{constructor(e=new ye(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=wd.subVectors(r,t).cross(ly.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(wd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(d<0||d>1)?null:t.copy(e.start).addScaledVector(o,d)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||cy.getNormalMatrix(e),o=this.coplanarPoint(wd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let uy=0;class yo extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=vo(),this.name="",this.type="Material",this.blending=lo,this.side=As,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vm,this.blendDst=_m,this.blendEquation=ha,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=N_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=id,this.stencilZFail=id,this.stencilZPass=id,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){Rt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){Rt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const d=[];for(const f in l){const g=l[f];delete g.metadata,d.push(g)}return d}if(t){const l=o(e.textures),d=o(e.images);l.length>0&&(r.textures=l),d.length>0&&(r.images=d)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ot().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Qr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Gt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Gt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Tr=new ye,Md=new ye,kl=new ye,zl=new ye;class dy{constructor(e=new ye,t=new ye(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tr.copy(this.origin).addScaledVector(this.direction,t),Tr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Md.copy(e).add(t).multiplyScalar(.5),kl.copy(t).sub(e).normalize(),zl.copy(this.origin).sub(Md);const l=e.distanceTo(t)*.5,d=-this.direction.dot(kl),f=zl.dot(this.direction),g=-zl.dot(kl),m=zl.lengthSq(),b=Math.abs(1-d*d);let y,h,w,S;if(b>0)if(y=d*g-f,h=d*f-g,S=l*b,y>=0)if(h>=-S)if(h<=S){const M=1/b;y*=M,h*=M,w=y*(y+d*h+2*f)+h*(d*y+h+2*g)+m}else h=l,y=Math.max(0,-(d*h+f)),w=-y*y+h*(h+2*g)+m;else h=-l,y=Math.max(0,-(d*h+f)),w=-y*y+h*(h+2*g)+m;else h<=-S?(y=Math.max(0,-(-d*l+f)),h=y>0?-l:Math.min(Math.max(-l,-g),l),w=-y*y+h*(h+2*g)+m):h<=S?(y=0,h=Math.min(Math.max(-l,-g),l),w=h*(h+2*g)+m):(y=Math.max(0,-(d*l+f)),h=y>0?l:Math.min(Math.max(-l,-g),l),w=-y*y+h*(h+2*g)+m);else h=d>0?-l:l,y=Math.max(0,-(d*h+f)),w=-y*y+h*(h+2*g)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(Md).addScaledVector(kl,h),w}intersectSphere(e,t){if(e.radius<0)return null;Tr.subVectors(e.center,this.origin);const r=Tr.dot(this.direction),o=Tr.dot(Tr)-r*r,l=e.radius*e.radius;if(o>l)return null;const d=Math.sqrt(l-o),f=r-d,g=r+d;return g<0?null:f<0?this.at(g,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,d,f,g;const m=1/this.direction.x,b=1/this.direction.y,y=1/this.direction.z,h=this.origin;return m>=0?(r=(e.min.x-h.x)*m,o=(e.max.x-h.x)*m):(r=(e.max.x-h.x)*m,o=(e.min.x-h.x)*m),b>=0?(l=(e.min.y-h.y)*b,d=(e.max.y-h.y)*b):(l=(e.max.y-h.y)*b,d=(e.min.y-h.y)*b),r>d||l>o||((l>r||isNaN(r))&&(r=l),(d<o||isNaN(o))&&(o=d),y>=0?(f=(e.min.z-h.z)*y,g=(e.max.z-h.z)*y):(f=(e.max.z-h.z)*y,g=(e.min.z-h.z)*y),r>g||f>o)||((f>r||r!==r)&&(r=f),(g<o||o!==o)&&(o=g),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Tr)!==null}intersectTriangle(e,t,r,o,l){const d=this.origin,f=this.direction,g=f.x,m=f.y,b=f.z,y=e.x-d.x,h=e.y-d.y,w=e.z-d.z,S=t.x-d.x,M=t.y-d.y,v=t.z-d.z,_=r.x-d.x,P=r.y-d.y,k=r.z-d.z,D=Math.abs(g),U=Math.abs(m),R=Math.abs(b);let E,L,q,W,j,H,X,F,Q,ue,Y,se;if(D>=U&&D>=R?(q=g,H=y,Q=S,se=_,g>=0?(E=m,L=b,W=h,j=w,X=M,F=v,ue=P,Y=k):(E=b,L=m,W=w,j=h,X=v,F=M,ue=k,Y=P)):U>=R?(q=m,H=h,Q=M,se=P,m>=0?(E=b,L=g,W=w,j=y,X=v,F=S,ue=k,Y=_):(E=g,L=b,W=y,j=w,X=S,F=v,ue=_,Y=k)):(q=b,H=w,Q=v,se=k,b>=0?(E=g,L=m,W=y,j=h,X=S,F=M,ue=_,Y=P):(E=m,L=g,W=h,j=y,X=M,F=S,ue=P,Y=_)),q===0)return null;const G=E/q,Z=L/q,z=1/q,I=W-G*H,oe=j-Z*H,O=X-G*Q,ne=F-Z*Q,ie=ue-G*se,Me=Y-Z*se,me=ie*ne-Me*O,he=I*Me-oe*ie,Ye=O*oe-ne*I;if(o){if(me<0||he<0||Ye<0)return null}else if((me<0||he<0||Ye<0)&&(me>0||he>0||Ye>0))return null;const $e=me+he+Ye;if($e===0)return null;const Ne=z*(me*H+he*Q+Ye*se);return($e>0?Ne<0:Ne>0)?null:this.at(Ne/$e,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nc extends yo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rs,this.combine=ym,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const I0=new bn,bs=new dy,Ul=new If,k0=new ye,Fl=new ye,Ol=new ye,Bl=new ye,Ed=new ye,Hl=new ye,z0=new ye,Gl=new ye;class Rn extends ei{constructor(e=new fr,t=new nc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=o.length;l<d;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,d=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Hl.set(0,0,0);for(let g=0,m=l.length;g<m;g++){const b=f[g],y=l[g];b!==0&&(Ed.fromBufferAttribute(y,e),d?Hl.addScaledVector(Ed,b):Hl.addScaledVector(Ed.sub(t),b))}t.add(Hl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ul.copy(r.boundingSphere),Ul.applyMatrix4(l),bs.copy(e.ray).recast(e.near),!(Ul.containsPoint(bs.origin)===!1&&(bs.intersectSphere(Ul,k0)===null||bs.origin.distanceToSquared(k0)>(e.far-e.near)**2))&&(I0.copy(l).invert(),bs.copy(e.ray).applyMatrix4(I0),!(r.boundingBox!==null&&bs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,bs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,d=this.material,f=l.index,g=l.attributes.position,m=l.attributes.uv,b=l.attributes.uv1,y=l.attributes.normal,h=l.groups,w=l.drawRange;if(f!==null)if(Array.isArray(d))for(let S=0,M=h.length;S<M;S++){const v=h[S],_=d[v.materialIndex],P=Math.max(v.start,w.start),k=Math.min(f.count,Math.min(v.start+v.count,w.start+w.count));for(let D=P,U=k;D<U;D+=3){const R=f.getX(D),E=f.getX(D+1),L=f.getX(D+2);o=jl(this,_,e,r,m,b,y,R,E,L),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const S=Math.max(0,w.start),M=Math.min(f.count,w.start+w.count);for(let v=S,_=M;v<_;v+=3){const P=f.getX(v),k=f.getX(v+1),D=f.getX(v+2);o=jl(this,d,e,r,m,b,y,P,k,D),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(g!==void 0)if(Array.isArray(d))for(let S=0,M=h.length;S<M;S++){const v=h[S],_=d[v.materialIndex],P=Math.max(v.start,w.start),k=Math.min(g.count,Math.min(v.start+v.count,w.start+w.count));for(let D=P,U=k;D<U;D+=3){const R=D,E=D+1,L=D+2;o=jl(this,_,e,r,m,b,y,R,E,L),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const S=Math.max(0,w.start),M=Math.min(g.count,w.start+w.count);for(let v=S,_=M;v<_;v+=3){const P=v,k=v+1,D=v+2;o=jl(this,d,e,r,m,b,y,P,k,D),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function fy(s,e,t,r,o,l,d,f){let g;if(e.side===$n?g=r.intersectTriangle(d,l,o,!0,f):g=r.intersectTriangle(o,l,d,e.side===As,f),g===null)return null;Gl.copy(f),Gl.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(Gl);return m<t.near||m>t.far?null:{distance:m,point:Gl.clone(),object:s}}function jl(s,e,t,r,o,l,d,f,g,m){s.getVertexPosition(f,Fl),s.getVertexPosition(g,Ol),s.getVertexPosition(m,Bl);const b=fy(s,e,t,r,Fl,Ol,Bl,z0);if(b){const y=new ye;$i.getBarycoord(z0,Fl,Ol,Bl,y),o&&(b.uv=$i.getInterpolatedAttribute(o,f,g,m,y,new Gt)),l&&(b.uv1=$i.getInterpolatedAttribute(l,f,g,m,y,new Gt)),d&&(b.normal=$i.getInterpolatedAttribute(d,f,g,m,y,new ye),b.normal.dot(r.direction)>0&&b.normal.multiplyScalar(-1));const h={a:f,b:g,c:m,normal:new ye,materialIndex:0};$i.getNormal(Fl,Ol,Bl,h.normal),b.face=h,b.barycoord=y}return b}class hy extends Qn{constructor(e=null,t=1,r=1,o,l,d,f,g,m=Wn,b=Wn,y,h){super(null,d,f,g,m,b,o,l,y,h),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ws=new If,py=new Gt(.5,.5),Vl=new ye;class mo{constructor(e=new Qr,t=new Qr,r=new Qr,o=new Qr,l=new Qr,d=new Qr){this.planes=[e,t,r,o,l,d]}set(e,t,r,o,l,d){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(d),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Xi,r=!1){const o=this.planes,l=e.elements,d=l[0],f=l[1],g=l[2],m=l[3],b=l[4],y=l[5],h=l[6],w=l[7],S=l[8],M=l[9],v=l[10],_=l[11],P=l[12],k=l[13],D=l[14],U=l[15];if(o[0].setComponents(m-d,w-b,_-S,U-P).normalize(),o[1].setComponents(m+d,w+b,_+S,U+P).normalize(),o[2].setComponents(m+f,w+y,_+M,U+k).normalize(),o[3].setComponents(m-f,w-y,_-M,U-k).normalize(),r)o[4].setComponents(g,h,v,D).normalize(),o[5].setComponents(m-g,w-h,_-v,U-D).normalize();else if(o[4].setComponents(m-g,w-h,_-v,U-D).normalize(),t===Xi)o[5].setComponents(m+g,w+h,_+v,U+D).normalize();else if(t===po)o[5].setComponents(g,h,v,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){ws.center.set(0,0,0);const t=py.distanceTo(e.center);return ws.radius=.7071067811865476+t,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Vl.x=o.normal.x>0?e.max.x:e.min.x,Vl.y=o.normal.y>0?e.max.y:e.min.y,Vl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Vl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const U0=new bn;class kf{constructor(){this.coordinateSystem=Xi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let o=0;o<t.length;o++){const l=t[o];U0.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),r[o]===void 0&&(r[o]=new mo),r[o].setFromProjectionMatrix(U0,l.coordinateSystem,l.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let o=0;o<e._count;o++)t[o]===void 0&&(t[o]=new mo),t[o].copy(r[o]);return this._count=e._count,this}clone(){return new kf().copy(this)}}class Wm extends Qn{constructor(e=[],t=xa,r,o,l,d,f,g,m,b){super(e,t,r,o,l,d,f,g,m,b),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mc extends Qn{constructor(e,t,r,o,l,d,f,g,m){super(e,t,r,o,l,d,f,g,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ya extends Qn{constructor(e,t,r=cr,o,l,d,f=Wn,g=Wn,m,b=is,y=1){if(b!==is&&b!==ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:y};super(h,o,l,d,f,g,b,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class $m extends ya{constructor(e,t=cr,r=xa,o,l,d=Wn,f=Wn,g,m=is){const b={width:e,height:e,depth:1},y=[b,b,b,b,b,b];super(e,e,t,r,o,l,d,f,g,m),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Xm extends Qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class So extends fr{constructor(e=1,t=1,r=1,o=1,l=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:d};const f=this;o=Math.floor(o),l=Math.floor(l),d=Math.floor(d);const g=[],m=[],b=[],y=[];let h=0,w=0;S("z","y","x",-1,-1,r,t,e,d,l,0),S("z","y","x",1,-1,r,t,-e,d,l,1),S("x","z","y",1,1,e,r,t,o,d,2),S("x","z","y",1,-1,e,r,-t,o,d,3),S("x","y","z",1,-1,e,t,r,o,l,4),S("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(g),this.setAttribute("position",new Gn(m,3)),this.setAttribute("normal",new Gn(b,3)),this.setAttribute("uv",new Gn(y,2));function S(M,v,_,P,k,D,U,R,E,L,q){const W=D/E,j=U/L,H=D/2,X=U/2,F=R/2,Q=E+1,ue=L+1;let Y=0,se=0;const G=new ye;for(let Z=0;Z<ue;Z++){const z=Z*j-X;for(let I=0;I<Q;I++){const oe=I*W-H;G[M]=oe*P,G[v]=z*k,G[_]=F,m.push(G.x,G.y,G.z),G[M]=0,G[v]=0,G[_]=R>0?1:-1,b.push(G.x,G.y,G.z),y.push(I/E),y.push(1-Z/L),Y+=1}}for(let Z=0;Z<L;Z++)for(let z=0;z<E;z++){const I=h+z+Q*Z,oe=h+z+Q*(Z+1),O=h+(z+1)+Q*(Z+1),ne=h+(z+1)+Q*Z;g.push(I,oe,ne),g.push(oe,O,ne),se+=6}f.addGroup(w,se,q),w+=se,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class zf extends fr{constructor(e=1,t=1,r=1,o=32,l=1,d=!1,f=0,g=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:d,thetaStart:f,thetaLength:g};const m=this;o=Math.floor(o),l=Math.floor(l);const b=[],y=[],h=[],w=[];let S=0;const M=[],v=r/2;let _=0;P(),d===!1&&(e>0&&k(!0),t>0&&k(!1)),this.setIndex(b),this.setAttribute("position",new Gn(y,3)),this.setAttribute("normal",new Gn(h,3)),this.setAttribute("uv",new Gn(w,2));function P(){const D=new ye,U=new ye;let R=0;const E=(t-e)/r;for(let L=0;L<=l;L++){const q=[],W=L/l,j=W*(t-e)+e;for(let H=0;H<=o;H++){const X=H/o,F=X*g+f,Q=Math.sin(F),ue=Math.cos(F);U.x=j*Q,U.y=-W*r+v,U.z=j*ue,y.push(U.x,U.y,U.z),D.set(Q,E,ue).normalize(),h.push(D.x,D.y,D.z),w.push(X,1-W),q.push(S++)}M.push(q)}for(let L=0;L<o;L++)for(let q=0;q<l;q++){const W=M[q][L],j=M[q+1][L],H=M[q+1][L+1],X=M[q][L+1];(e>0||q!==0)&&(b.push(W,j,X),R+=3),(t>0||q!==l-1)&&(b.push(j,H,X),R+=3)}m.addGroup(_,R,0),_+=R}function k(D){const U=S,R=new Gt,E=new ye;let L=0;const q=D===!0?e:t,W=D===!0?1:-1;for(let H=1;H<=o;H++)y.push(0,v*W,0),h.push(0,W,0),w.push(.5,.5),S++;const j=S;for(let H=0;H<=o;H++){const F=H/o*g+f,Q=Math.cos(F),ue=Math.sin(F);E.x=q*ue,E.y=v*W,E.z=q*Q,y.push(E.x,E.y,E.z),h.push(0,W,0),R.x=Q*.5+.5,R.y=ue*.5*W+.5,w.push(R.x,R.y),S++}for(let H=0;H<o;H++){const X=U+H,F=j+H;D===!0?b.push(F,F+1,X):b.push(F+1,F,X),L+=3}m.addGroup(_,L,D===!0?1:2),_+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Uf extends zf{constructor(e=1,t=1,r=32,o=1,l=!1,d=0,f=Math.PI*2){super(0,e,t,r,o,l,d,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:d,thetaLength:f}}static fromJSON(e){return new Uf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bo extends fr{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,d=t/2,f=Math.floor(r),g=Math.floor(o),m=f+1,b=g+1,y=e/f,h=t/g,w=[],S=[],M=[],v=[];for(let _=0;_<b;_++){const P=_*h-d;for(let k=0;k<m;k++){const D=k*y-l;S.push(D,-P,0),M.push(0,0,1),v.push(k/f),v.push(1-_/g)}}for(let _=0;_<g;_++)for(let P=0;P<f;P++){const k=P+m*_,D=P+m*(_+1),U=P+1+m*(_+1),R=P+1+m*_;w.push(k,D,R),w.push(D,U,R)}this.setIndex(w),this.setAttribute("position",new Gn(S,3)),this.setAttribute("normal",new Gn(M,3)),this.setAttribute("uv",new Gn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ff extends fr{constructor(e=.5,t=1,r=32,o=1,l=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:d},r=Math.max(3,r),o=Math.max(1,o);const f=[],g=[],m=[],b=[];let y=e;const h=(t-e)/o,w=new ye,S=new Gt;for(let M=0;M<=o;M++){for(let v=0;v<=r;v++){const _=l+v/r*d;w.x=y*Math.cos(_),w.y=y*Math.sin(_),g.push(w.x,w.y,w.z),m.push(0,0,1),S.x=(w.x/t+1)/2,S.y=(w.y/t+1)/2,b.push(S.x,S.y)}y+=h}for(let M=0;M<o;M++){const v=M*(r+1);for(let _=0;_<r;_++){const P=_+v,k=P,D=P+r+1,U=P+r+2,R=P+1;f.push(k,D,R),f.push(D,U,R)}}this.setIndex(f),this.setAttribute("position",new Gn(g,3)),this.setAttribute("normal",new Gn(m,3)),this.setAttribute("uv",new Gn(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ff(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Gi extends fr{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,d=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:d,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const g=Math.min(d+f,Math.PI);let m=0;const b=[],y=new ye,h=new ye,w=[],S=[],M=[],v=[];for(let _=0;_<=r;_++){const P=[],k=_/r,D=d+k*f,U=e*Math.cos(D),R=Math.sqrt(e*e-U*U);let E=0;_===0&&d===0?E=.5/t:_===r&&g===Math.PI&&(E=-.5/t);for(let L=0;L<=t;L++){const q=L/t,W=o+q*l;y.x=-R*Math.cos(W),y.y=U,y.z=R*Math.sin(W),S.push(y.x,y.y,y.z),h.copy(y).normalize(),M.push(h.x,h.y,h.z),v.push(q+E,1-k),P.push(m++)}b.push(P)}for(let _=0;_<r;_++)for(let P=0;P<t;P++){const k=b[_][P+1],D=b[_][P],U=b[_+1][P],R=b[_+1][P+1];(_!==0||d>0)&&w.push(k,D,R),(_!==r-1||g<Math.PI)&&w.push(D,U,R)}this.setIndex(w),this.setAttribute("position",new Gn(S,3)),this.setAttribute("normal",new Gn(M,3)),this.setAttribute("uv",new Gn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Sa(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(F0(o))o.isRenderTargetTexture?(Rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(F0(o[0])){const l=[];for(let d=0,f=o.length;d<f;d++)l[d]=o[d].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function ii(s){const e={};for(let t=0;t<s.length;t++){const r=Sa(s[t]);for(const o in r)e[o]=r[o]}return e}function F0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function my(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ym(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Wt.workingColorSpace}const gy={clone:Sa,merge:ii};var xy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends yo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xy,this.fragmentShader=vy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sa(e.uniforms),this.uniformsGroups=my(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?t.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[o]={type:"m4",value:d.toArray()}:t.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new Ot().setHex(o.value);break;case"v2":this.uniforms[r].value=new Gt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ye().fromArray(o.value);break;case"v4":this.uniforms[r].value=new Sn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new Dt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new bn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class _y extends Di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wl extends yo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gf,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yy extends yo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=A_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sy extends yo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class qm extends ei{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Td=new bn,O0=new ye,B0=new ye;class by{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.mapType=Si,this.map=null,this.mapPass=null,this.matrix=new bn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mo,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new Sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;O0.setFromMatrixPosition(e.matrixWorld),t.position.copy(O0),B0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(B0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,o){Td.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(Td,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,d=o?o.z/l.x:1,f=o?o.w/l.y:1,g=o?o.x/l.x:0,m=o?o.y/l.y:0;e.coordinateSystem===po||e.reversedDepth?t.set(.5*d,0,0,.5*d+g,0,.5*f,0,.5*f+m,0,0,1,0,0,0,0,1):t.set(.5*d,0,0,.5*d+g,0,.5*f,0,.5*f+m,0,0,.5,.5,0,0,0,1),t.multiply(Td)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const $l=new ye,Xl=new ba,er=new ye;class Km extends ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bn,this.projectionMatrix=new bn,this.projectionMatrixInverse=new bn,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose($l,Xl,er),er.x===1&&er.y===1&&er.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($l,Xl,er.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose($l,Xl,er),er.x===1&&er.y===1&&er.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($l,Xl,er.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Jr=new ye,H0=new Gt,G0=new Gt;class Vi extends Km{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xf*2*Math.atan(Math.tan(rd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jr.x,Jr.y).multiplyScalar(-e/Jr.z),Jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Jr.x,Jr.y).multiplyScalar(-e/Jr.z)}getViewSize(e,t){return this.getViewBounds(e,H0,G0),t.subVectors(G0,H0)}setViewOffset(e,t,r,o,l,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rd*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const g=d.fullWidth,m=d.fullHeight;l+=d.offsetX*o/g,t-=d.offsetY*r/m,o*=d.width/g,r*=d.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Zm extends Km{constructor(e=-1,t=1,r=1,o=-1,l=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,d=r+e,f=o+t,g=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,b=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,d=l+m*this.view.width,f-=b*this.view.offsetY,g=f-b*this.view.height}this.projectionMatrix.makeOrthographic(l,d,f,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wy extends by{constructor(){super(new Zm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class My extends qm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ei.DEFAULT_UP),this.updateMatrix(),this.target=new ei,this.shadow=new wy}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Ey extends qm{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const da=-90,fa=1;class vf extends ei{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Vi(da,fa,e,t);o.layers=this.layers,this.add(o);const l=new Vi(da,fa,e,t);l.layers=this.layers,this.add(l);const d=new Vi(da,fa,e,t);d.layers=this.layers,this.add(d);const f=new Vi(da,fa,e,t);f.layers=this.layers,this.add(f);const g=new Vi(da,fa,e,t);g.layers=this.layers,this.add(g);const m=new Vi(da,fa,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,d,f,g]=t;for(const m of t)this.remove(m);if(e===Xi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(e===po)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,d,f,g,m,b]=this.children,y=e.getRenderTarget(),h=e.getActiveCubeFace(),w=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const M=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,2,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(r,4,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),r.texture.mipmapsAutoUpdate=M,e.setRenderTarget(r,5,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,b),e.setRenderTarget(y,h,w),e.xr.enabled=S,r.texture.needsPMREMUpdate=!0}}class Ty extends Vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function j0(s,e,t,r){const o=Cy(r);switch(t){case Lm:return s*e;case km:return s*e/o.components*o.byteLength;case Rf:return s*e/o.components*o.byteLength;case Rs:return s*e*2/o.components*o.byteLength;case Nf:return s*e*2/o.components*o.byteLength;case Im:return s*e*3/o.components*o.byteLength;case ar:return s*e*4/o.components*o.byteLength;case Pf:return s*e*4/o.components*o.byteLength;case Zl:case Jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ql:case ec:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bd:case Gd:return Math.max(s,16)*Math.max(e,8)/4;case Od:case Hd:return Math.max(s,8)*Math.max(e,8)/2;case jd:case Vd:case $d:case Xd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Wd:case sc:case Yd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ef:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case tf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case nf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case rf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case sf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case af:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case of:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case lf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case cf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case uf:case df:case ff:return Math.ceil(s/4)*Math.ceil(e/4)*16;case hf:case pf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ac:case mf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Cy(s){switch(s){case Si:case Rm:return{byteLength:1,components:1};case ho:case Nm:case ur:return{byteLength:2,components:1};case Cf:case Af:return{byteLength:2,components:4};case cr:case Tf:case sr:return{byteLength:4,components:1};case Pm:case Dm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ef}}));typeof window<"u"&&(window.__THREE__?Rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ef);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Jm(){let s=null,e=!1,t=null,r=null;function o(l,d){r=s.requestAnimationFrame(o),t(l,d)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Ay(s){const e=new WeakMap;function t(f,g){const m=f.array,b=f.usage,y=m.byteLength,h=s.createBuffer();s.bindBuffer(g,h),s.bufferData(g,m,b),f.onUploadCallback();let w;if(m instanceof Float32Array)w=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)w=s.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?w=s.HALF_FLOAT:w=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)w=s.SHORT;else if(m instanceof Uint32Array)w=s.UNSIGNED_INT;else if(m instanceof Int32Array)w=s.INT;else if(m instanceof Int8Array)w=s.BYTE;else if(m instanceof Uint8Array)w=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)w=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:h,type:w,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:y}}function r(f,g,m){const b=g.array,y=g.updateRanges;if(s.bindBuffer(m,f),y.length===0)s.bufferSubData(m,0,b);else{y.sort((w,S)=>w.start-S.start);let h=0;for(let w=1;w<y.length;w++){const S=y[h],M=y[w];M.start<=S.start+S.count+1?S.count=Math.max(S.count,M.start+M.count-S.start):(++h,y[h]=M)}y.length=h+1;for(let w=0,S=y.length;w<S;w++){const M=y[w];s.bufferSubData(m,M.start*b.BYTES_PER_ELEMENT,b,M.start,M.count)}g.clearUpdateRanges()}g.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const g=e.get(f);g&&(s.deleteBuffer(g.buffer),e.delete(f))}function d(f,g){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const b=e.get(f);(!b||b.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,t(f,g));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,g),m.version=f.version}}return{get:o,remove:l,update:d}}var Ry=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ny=`#ifdef USE_ALPHAHASH
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
#endif`,Py=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ly=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Iy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ky=`#ifdef USE_AOMAP
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
#endif`,zy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uy=`#ifdef USE_BATCHING
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
#endif`,Fy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Oy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,By=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gy=`#ifdef USE_IRIDESCENCE
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
#endif`,jy=`#ifdef USE_BUMPMAP
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
#endif`,Vy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ky=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Jy=`#define PI 3.141592653589793
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
} // validated`,Qy=`vec3 transformedNormal = objectNormal;
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
#endif`,e1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r1="gl_FragColor = linearToOutputTexel( gl_FragColor );",s1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,a1=`#ifdef USE_ENVMAP
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
#endif`,o1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,l1=`#ifdef USE_ENVMAP
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
#endif`,c1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,u1=`#ifdef USE_ENVMAP
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
#endif`,d1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m1=`#ifdef USE_GRADIENTMAP
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
}`,g1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,v1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,y1=`#ifdef USE_ENVMAP
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
#endif`,S1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,b1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,w1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,M1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E1=`PhysicalMaterial material;
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
#endif`,T1=`uniform sampler2D dfgLUT;
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
}`,C1=`
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
#endif`,A1=`#if defined( RE_IndirectDiffuse )
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
#endif`,R1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,N1=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,P1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,D1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,k1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,z1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,U1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,F1=`#if defined( USE_POINTS_UV )
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
#endif`,O1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,B1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,G1=`#if defined( USE_MORPHCOLORS )
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
#endif`,j1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V1=`#ifdef USE_MORPHTARGETS
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
#endif`,W1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,X1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Y1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Z1=`#ifdef USE_NORMALMAP
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
#endif`,J1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Q1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hS=`float getShadowMask() {
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
}`,pS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mS=`#ifdef USE_SKINNING
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
#endif`,gS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xS=`#ifdef USE_SKINNING
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
#endif`,vS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_S=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bS=`#ifdef USE_TRANSMISSION
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
#endif`,wS=`#ifdef USE_TRANSMISSION
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
#endif`,MS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ES=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RS=`uniform sampler2D t2D;
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
}`,NS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PS=`uniform float backgroundBlurriness;
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
}`,DS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IS=`#include <common>
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
}`,kS=`#if DEPTH_PACKING == 3200
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
}`,zS=`#define DISTANCE
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
}`,US=`#define DISTANCE
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
}`,FS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BS=`uniform float scale;
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
}`,HS=`uniform vec3 diffuse;
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
}`,GS=`#include <common>
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
}`,jS=`uniform vec3 diffuse;
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
}`,VS=`#define LAMBERT
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
}`,WS=`#define LAMBERT
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
}`,$S=`#define MATCAP
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
}`,XS=`#define MATCAP
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
}`,YS=`#define NORMAL
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
}`,qS=`#define NORMAL
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
}`,KS=`#define PHONG
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
}`,ZS=`#define PHONG
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
}`,JS=`#define STANDARD
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
}`,QS=`#define STANDARD
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
}`,eb=`#define TOON
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
}`,tb=`#define TOON
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
}`,nb=`uniform float size;
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
}`,ib=`uniform vec3 diffuse;
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
}`,rb=`#include <common>
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
}`,sb=`uniform vec3 color;
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
}`,ab=`uniform float rotation;
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
}`,ob=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:Ry,alphahash_pars_fragment:Ny,alphamap_fragment:Py,alphamap_pars_fragment:Dy,alphatest_fragment:Ly,alphatest_pars_fragment:Iy,aomap_fragment:ky,aomap_pars_fragment:zy,batching_pars_vertex:Uy,batching_vertex:Fy,begin_vertex:Oy,beginnormal_vertex:By,bsdfs:Hy,iridescence_fragment:Gy,bumpmap_pars_fragment:jy,clipping_planes_fragment:Vy,clipping_planes_pars_fragment:Wy,clipping_planes_pars_vertex:$y,clipping_planes_vertex:Xy,color_fragment:Yy,color_pars_fragment:qy,color_pars_vertex:Ky,color_vertex:Zy,common:Jy,defaultnormal_vertex:Qy,displacementmap_pars_vertex:e1,displacementmap_vertex:t1,emissivemap_fragment:n1,emissivemap_pars_fragment:i1,colorspace_fragment:r1,colorspace_pars_fragment:s1,envmap_fragment:a1,envmap_common_pars_fragment:o1,envmap_pars_fragment:l1,envmap_pars_vertex:c1,envmap_physical_pars_fragment:y1,envmap_vertex:u1,fog_vertex:d1,fog_pars_vertex:f1,fog_fragment:h1,fog_pars_fragment:p1,gradientmap_pars_fragment:m1,lightmap_pars_fragment:g1,lights_lambert_fragment:x1,lights_lambert_pars_fragment:v1,lights_pars_begin:_1,lights_toon_fragment:S1,lights_toon_pars_fragment:b1,lights_phong_fragment:w1,lights_phong_pars_fragment:M1,lights_physical_fragment:E1,lights_physical_pars_fragment:T1,lights_fragment_begin:C1,lights_fragment_maps:A1,lights_fragment_end:R1,lightprobes_pars_fragment:N1,logdepthbuf_fragment:P1,logdepthbuf_pars_fragment:D1,logdepthbuf_pars_vertex:L1,logdepthbuf_vertex:I1,map_fragment:k1,map_pars_fragment:z1,map_particle_fragment:U1,map_particle_pars_fragment:F1,metalnessmap_fragment:O1,metalnessmap_pars_fragment:B1,morphinstance_vertex:H1,morphcolor_vertex:G1,morphnormal_vertex:j1,morphtarget_pars_vertex:V1,morphtarget_vertex:W1,normal_fragment_begin:$1,normal_fragment_maps:X1,normal_pars_fragment:Y1,normal_pars_vertex:q1,normal_vertex:K1,normalmap_pars_fragment:Z1,clearcoat_normal_fragment_begin:J1,clearcoat_normal_fragment_maps:Q1,clearcoat_pars_fragment:eS,iridescence_pars_fragment:tS,opaque_fragment:nS,packing:iS,premultiplied_alpha_fragment:rS,project_vertex:sS,dithering_fragment:aS,dithering_pars_fragment:oS,roughnessmap_fragment:lS,roughnessmap_pars_fragment:cS,shadowmap_pars_fragment:uS,shadowmap_pars_vertex:dS,shadowmap_vertex:fS,shadowmask_pars_fragment:hS,skinbase_vertex:pS,skinning_pars_vertex:mS,skinning_vertex:gS,skinnormal_vertex:xS,specularmap_fragment:vS,specularmap_pars_fragment:_S,tonemapping_fragment:yS,tonemapping_pars_fragment:SS,transmission_fragment:bS,transmission_pars_fragment:wS,uv_pars_fragment:MS,uv_pars_vertex:ES,uv_vertex:TS,worldpos_vertex:CS,background_vert:AS,background_frag:RS,backgroundCube_vert:NS,backgroundCube_frag:PS,cube_vert:DS,cube_frag:LS,depth_vert:IS,depth_frag:kS,distance_vert:zS,distance_frag:US,equirect_vert:FS,equirect_frag:OS,linedashed_vert:BS,linedashed_frag:HS,meshbasic_vert:GS,meshbasic_frag:jS,meshlambert_vert:VS,meshlambert_frag:WS,meshmatcap_vert:$S,meshmatcap_frag:XS,meshnormal_vert:YS,meshnormal_frag:qS,meshphong_vert:KS,meshphong_frag:ZS,meshphysical_vert:JS,meshphysical_frag:QS,meshtoon_vert:eb,meshtoon_frag:tb,points_vert:nb,points_frag:ib,shadow_vert:rb,shadow_frag:sb,sprite_vert:ab,sprite_frag:ob},et={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},nr={basic:{uniforms:ii([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:ii([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:ii([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:ii([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:ii([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:ii([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:ii([et.points,et.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:ii([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:ii([et.common,et.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:ii([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:ii([et.sprite,et.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distance:{uniforms:ii([et.common,et.displacementmap,{referencePosition:{value:new ye},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distance_vert,fragmentShader:Ut.distance_frag},shadow:{uniforms:ii([et.lights,et.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};nr.physical={uniforms:ii([nr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const Yl={r:0,b:0,g:0},lb=new bn,Qm=new Dt;Qm.set(-1,0,0,0,1,0,0,0,1);function cb(s,e,t,r,o,l){const d=new Ot(0);let f=o===!0?0:1,g,m,b=null,y=0,h=null;function w(P){let k=P.isScene===!0?P.background:null;if(k&&k.isTexture){const D=P.backgroundBlurriness>0;k=e.get(k,D)}return k}function S(P){let k=!1;const D=w(P);D===null?v(d,f):D&&D.isColor&&(v(D,1),k=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?t.buffers.color.setClear(0,0,0,1,l):U==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||k)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(P,k){const D=w(k);D&&D.isCubeTexture?(m===void 0&&(m=new Rn(new So(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:Sa(nr.backgroundCube.uniforms),vertexShader:nr.backgroundCube.vertexShader,fragmentShader:nr.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(U,R,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=D,m.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(lb.makeRotationFromEuler(k.backgroundRotation)).transpose(),D.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(Qm),m.material.toneMapped=Wt.getTransfer(D.colorSpace)!==rn,(b!==D||y!==D.version||h!==s.toneMapping)&&(m.material.needsUpdate=!0,b=D,y=D.version,h=s.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null)):D&&D.isTexture&&(g===void 0&&(g=new Rn(new bo(2,2),new Di({name:"BackgroundMaterial",uniforms:Sa(nr.background.uniforms),vertexShader:nr.background.vertexShader,fragmentShader:nr.background.fragmentShader,side:As,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(g)),g.material.uniforms.t2D.value=D,g.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,g.material.toneMapped=Wt.getTransfer(D.colorSpace)!==rn,D.matrixAutoUpdate===!0&&D.updateMatrix(),g.material.uniforms.uvTransform.value.copy(D.matrix),(b!==D||y!==D.version||h!==s.toneMapping)&&(g.material.needsUpdate=!0,b=D,y=D.version,h=s.toneMapping),g.layers.enableAll(),P.unshift(g,g.geometry,g.material,0,0,null))}function v(P,k){P.getRGB(Yl,Ym(s)),t.buffers.color.setClear(Yl.r,Yl.g,Yl.b,k,l)}function _(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,k=1){d.set(P),f=k,v(d,f)},getClearAlpha:function(){return f},setClearAlpha:function(P){f=P,v(d,f)},render:S,addToRenderList:M,dispose:_}}function ub(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=h(null);let l=o,d=!1;function f(j,H,X,F,Q){let ue=!1;const Y=y(j,F,X,H);l!==Y&&(l=Y,m(l.object)),ue=w(j,F,X,Q),ue&&S(j,F,X,Q),Q!==null&&e.update(Q,s.ELEMENT_ARRAY_BUFFER),(ue||d)&&(d=!1,D(j,H,X,F),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function g(){return s.createVertexArray()}function m(j){return s.bindVertexArray(j)}function b(j){return s.deleteVertexArray(j)}function y(j,H,X,F){const Q=F.wireframe===!0;let ue=r[H.id];ue===void 0&&(ue={},r[H.id]=ue);const Y=j.isInstancedMesh===!0?j.id:0;let se=ue[Y];se===void 0&&(se={},ue[Y]=se);let G=se[X.id];G===void 0&&(G={},se[X.id]=G);let Z=G[Q];return Z===void 0&&(Z=h(g()),G[Q]=Z),Z}function h(j){const H=[],X=[],F=[];for(let Q=0;Q<t;Q++)H[Q]=0,X[Q]=0,F[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:X,attributeDivisors:F,object:j,attributes:{},index:null}}function w(j,H,X,F){const Q=l.attributes,ue=H.attributes;let Y=0;const se=X.getAttributes();for(const G in se)if(se[G].location>=0){const z=Q[G];let I=ue[G];if(I===void 0&&(G==="instanceMatrix"&&j.instanceMatrix&&(I=j.instanceMatrix),G==="instanceColor"&&j.instanceColor&&(I=j.instanceColor)),z===void 0||z.attribute!==I||I&&z.data!==I.data)return!0;Y++}return l.attributesNum!==Y||l.index!==F}function S(j,H,X,F){const Q={},ue=H.attributes;let Y=0;const se=X.getAttributes();for(const G in se)if(se[G].location>=0){let z=ue[G];z===void 0&&(G==="instanceMatrix"&&j.instanceMatrix&&(z=j.instanceMatrix),G==="instanceColor"&&j.instanceColor&&(z=j.instanceColor));const I={};I.attribute=z,z&&z.data&&(I.data=z.data),Q[G]=I,Y++}l.attributes=Q,l.attributesNum=Y,l.index=F}function M(){const j=l.newAttributes;for(let H=0,X=j.length;H<X;H++)j[H]=0}function v(j){_(j,0)}function _(j,H){const X=l.newAttributes,F=l.enabledAttributes,Q=l.attributeDivisors;X[j]=1,F[j]===0&&(s.enableVertexAttribArray(j),F[j]=1),Q[j]!==H&&(s.vertexAttribDivisor(j,H),Q[j]=H)}function P(){const j=l.newAttributes,H=l.enabledAttributes;for(let X=0,F=H.length;X<F;X++)H[X]!==j[X]&&(s.disableVertexAttribArray(X),H[X]=0)}function k(j,H,X,F,Q,ue,Y){Y===!0?s.vertexAttribIPointer(j,H,X,Q,ue):s.vertexAttribPointer(j,H,X,F,Q,ue)}function D(j,H,X,F){M();const Q=F.attributes,ue=X.getAttributes(),Y=H.defaultAttributeValues;for(const se in ue){const G=ue[se];if(G.location>=0){let Z=Q[se];if(Z===void 0&&(se==="instanceMatrix"&&j.instanceMatrix&&(Z=j.instanceMatrix),se==="instanceColor"&&j.instanceColor&&(Z=j.instanceColor)),Z!==void 0){const z=Z.normalized,I=Z.itemSize,oe=e.get(Z);if(oe===void 0)continue;const O=oe.buffer,ne=oe.type,ie=oe.bytesPerElement,Me=ne===s.INT||ne===s.UNSIGNED_INT||Z.gpuType===Tf;if(Z.isInterleavedBufferAttribute){const me=Z.data,he=me.isInterleavedBuffer===!0?me.stride:me.itemSize,Ye=Z.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let $e=0;$e<G.locationSize;$e++)_(G.location+$e,me.meshPerAttribute);j.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let $e=0;$e<G.locationSize;$e++)v(G.location+$e);s.bindBuffer(s.ARRAY_BUFFER,O);for(let $e=0;$e<G.locationSize;$e++)k(G.location+$e,I/G.locationSize,ne,z,he*ie,(Ye+I/G.locationSize*$e)*ie,Me)}else{if(Z.isInstancedBufferAttribute){for(let me=0;me<G.locationSize;me++)_(G.location+me,Z.meshPerAttribute);j.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let me=0;me<G.locationSize;me++)v(G.location+me);s.bindBuffer(s.ARRAY_BUFFER,O);for(let me=0;me<G.locationSize;me++)k(G.location+me,I/G.locationSize,ne,z,I*ie,I/G.locationSize*me*ie,Me)}}else if(Y!==void 0){const z=Y[se];if(z!==void 0)switch(z.length){case 2:s.vertexAttrib2fv(G.location,z);break;case 3:s.vertexAttrib3fv(G.location,z);break;case 4:s.vertexAttrib4fv(G.location,z);break;default:s.vertexAttrib1fv(G.location,z)}}}}P()}function U(){q();for(const j in r){const H=r[j];for(const X in H){const F=H[X];for(const Q in F){const ue=F[Q];for(const Y in ue)b(ue[Y].object),delete ue[Y];delete F[Q]}}delete r[j]}}function R(j){if(r[j.id]===void 0)return;const H=r[j.id];for(const X in H){const F=H[X];for(const Q in F){const ue=F[Q];for(const Y in ue)b(ue[Y].object),delete ue[Y];delete F[Q]}}delete r[j.id]}function E(j){for(const H in r){const X=r[H];for(const F in X){const Q=X[F];if(Q[j.id]===void 0)continue;const ue=Q[j.id];for(const Y in ue)b(ue[Y].object),delete ue[Y];delete Q[j.id]}}}function L(j){for(const H in r){const X=r[H],F=j.isInstancedMesh===!0?j.id:0,Q=X[F];if(Q!==void 0){for(const ue in Q){const Y=Q[ue];for(const se in Y)b(Y[se].object),delete Y[se];delete Q[ue]}delete X[F],Object.keys(X).length===0&&delete r[H]}}}function q(){W(),d=!0,l!==o&&(l=o,m(l.object))}function W(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:q,resetDefaultState:W,dispose:U,releaseStatesOfGeometry:R,releaseStatesOfObject:L,releaseStatesOfProgram:E,initAttributes:M,enableAttribute:v,disableUnusedAttributes:P}}function db(s,e,t){let r;function o(g){r=g}function l(g,m){s.drawArrays(r,g,m),t.update(m,r,1)}function d(g,m,b){b!==0&&(s.drawArraysInstanced(r,g,m,b),t.update(m,r,b))}function f(g,m,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,m,0,b);let h=0;for(let w=0;w<b;w++)h+=m[w];t.update(h,r,1)}this.setMode=o,this.render=l,this.renderInstances=d,this.renderMultiDraw=f}function fb(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(E){return!(E!==ar&&r.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(E){const L=E===ur&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Si&&E!==sr&&!L&&r.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function g(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const b=g(m);b!==m&&(Rt("WebGLRenderer:",m,"not supported, using",b,"instead."),m=b);const y=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&y===!1;t.reversedDepthBuffer===!0&&y===!1&&Rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&y===!0&&Rt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const w=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),k=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=s.getParameter(s.MAX_SAMPLES),R=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:g,textureFormatReadable:d,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:h,reversedDepthBuffer:y,maxTextures:w,maxVertexTextures:S,maxTextureSize:M,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:P,maxVaryings:k,maxFragmentUniforms:D,maxSamples:U,samples:R}}function hb(s){const e=this;let t=null,r=0,o=!1,l=!1;const d=new Qr,f=new Dt,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(y,h){const w=y.length!==0||h||r!==0||o;return o=h,r=y.length,w},this.beginShadows=function(){l=!0,b(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(y,h){t=b(y,h,0)},this.setState=function(y,h,w){const S=y.clippingPlanes,M=y.clipIntersection,v=y.clipShadows,_=s.get(y);if(!o||S===null||S.length===0||l&&!v)l?b(null):m();else{const P=l?0:r,k=P*4;let D=_.clippingState||null;g.value=D,D=b(S,h,k,w);for(let U=0;U!==k;++U)D[U]=t[U];_.clippingState=D,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=P}};function m(){g.value!==t&&(g.value=t,g.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function b(y,h,w,S){const M=y!==null?y.length:0;let v=null;if(M!==0){if(v=g.value,S!==!0||v===null){const _=w+M*4,P=h.matrixWorldInverse;f.getNormalMatrix(P),(v===null||v.length<_)&&(v=new Float32Array(_));for(let k=0,D=w;k!==M;++k,D+=4)d.copy(y[k]).applyMatrix4(P,f),d.normal.toArray(v,D),v[D+3]=d.constant}g.value=v,g.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,v}}class Of extends lr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Wm(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new So(5,5,5),l=new Di({name:"CubemapFromEquirect",uniforms:Sa(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:$n,blending:ma});l.uniforms.tEquirect.value=t;const d=new Rn(o,l),f=t.minFilter;return t.minFilter===ts&&(t.minFilter=fi),new vf(1,10,this).update(e,d),t.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,r,o);e.setRenderTarget(l)}}const V0=256,pb=3,mb=20,eg=256,tg=16,gb=3,xb=new ye,vb=new Ot;class uc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new vf(1,10,null),this._boxMesh=new Rn(new So(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:d=256,position:f=xb}=l,g=this._renderer;this._setSize(d);const m=this._allocateTarget(),b=this._getSourceTarget(!0);t>0&&(b.texture.mipmapsAutoUpdate=!1);const y=g.autoClear,h=g.autoClearColor,w=g.autoClearDepth,S=g.autoClearStencil,M=e.background;g.autoClear=!0,g.autoClearColor=!0,g.autoClearDepth=!0,g.autoClearStencil=!0,M===null&&(e.background=g.getClearColor(vb));const v=new vf(r,o,b);return v.position.copy(f),v.update(g,e),g.autoClear=y,g.autoClearColor=h,g.autoClearDepth=w,g.autoClearStencil=S,e.background=M,t>0&&(b.texture.mipmapsAutoUpdate=!0,this._blur(m,t)),this._applyPMREM(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=X0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(V0,G_(e))}_fromTexture(e,t){e.mapping===xa||e.mapping===fo?this._setSize(e.image.length===0?V0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=W0(e,!1,!1),r=Math.log2(e)-pb;for(let o=0;o<=r;o++)t.texture.mipmaps.push({width:e>>o,height:e>>o});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=W0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const o=this._boxMesh,l=this._cubeCamera;o.material=r,l.renderTarget=e,l.activeMipmapLevel=t;const d=e.width>>t;e.viewport.set(0,0,d,d),l.update(this._renderer,o),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===xa||e.mapping===fo?(this._cubemapMaterial===null&&(this._cubemapMaterial=X0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=$0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=_b(),this._integrationMaterial=yb());const t=this._cubeSize,r=e.texture.mipmaps.length-1,o=this._ggxMaterial.uniforms;o.envMap.value=this._sourceTarget.texture;const l=this._integrationMaterial.uniforms;l.envMap.value=this._sourceTarget.texture,l.sourceLod.value=Math.log2(t/tg);for(let d=0;d<=r;d++){const f=uc.lodToRoughness(d,r);if(d>r-gb)l.roughness.value=f,this._renderCube(e,d,this._integrationMaterial);else{const g=f>0?Math.log2(t)+.5*Math.log2(6/(eg*Math.pow(f,4)))+.5:0;o.roughness.value=f,o.lodBias.value=g,this._renderCube(e,d,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Sb());const r=this._blurMaterial,o=r.uniforms,l=this._sourceTarget;o.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,o.envMap.value=l.texture,this._renderCube(e,0,r),o.envMap.value=e.texture,this._renderCube(l,0,r)}}function W0(s,e,t){return new Of(s,{minFilter:ts,generateMipmaps:e,type:ur,colorSpace:oc,depthBuffer:t})}function wo(s,e,t){return new Di({name:s,uniforms:e,vertexShader:Ut.cube_vert,fragmentShader:t,side:$n,blending:ma,depthTest:!1,depthWrite:!1})}function _b(){return wo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${eg}u

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
	`)}function yb(){return wo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:tg}},`

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
	`)}function Sb(){return wo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${mb}
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
	`)}function $0(){return wo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function X0(){return wo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function bb(s){let e=new WeakMap,t=new WeakMap,r=null;function o(h,w=!1){return h==null?null:w?d(h):l(h)}function l(h){if(h&&h.isTexture){const w=h.mapping;if(w===ed||w===td)if(e.has(h)){const S=e.get(h).texture;return f(S,h.mapping)}else{const S=h.image;if(S&&S.height>0){const M=new Of(S.height);return M.fromEquirectangularTexture(s,h),e.set(h,M),h.addEventListener("dispose",m),f(M.texture,h.mapping)}else return null}}return h}function d(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const w=h.mapping,S=w===ed||w===td,M=w===xa||w===fo;if(S||M){let v=t.get(h);const _=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return r===null&&(r=new uc(s)),v=S?r.fromEquirectangular(h,v):r.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),v.texture;if(v!==void 0)return v.texture;{const P=h.image;return S&&P&&P.height>0||M&&P&&g(P)?(r===null&&(r=new uc(s)),v=S?r.fromEquirectangular(h):r.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,t.set(h,v),h.addEventListener("dispose",b),v.texture):null}}}return h}function f(h,w){return w===ed?h.mapping=xa:w===td&&(h.mapping=fo),h}function g(h){let w=0;const S=6;for(let M=0;M<S;M++)h[M]!==void 0&&w++;return w===S}function m(h){const w=h.target;w.removeEventListener("dispose",m);const S=e.get(w);S!==void 0&&(e.delete(w),S.dispose())}function b(h){const w=h.target;w.removeEventListener("dispose",b);const S=t.get(w);S!==void 0&&(t.delete(w),S.dispose())}function y(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:y}}function wb(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&tc("WebGLRenderer: "+r+" extension not supported."),o}}}function Mb(s,e,t,r){const o={},l=new WeakMap,d=new FinalizationRegistry(S=>delete o[S]);function f(S){g(S.target)}function g(S){S.index!==null&&e.remove(S.index);for(const v in S.attributes)e.remove(S.attributes[v]);S.removeEventListener("dispose",f),delete o[S.id],d.unregister(S);const M=l.get(S);M&&(e.remove(M),l.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,t.memory.geometries--}function m(S,M){return o[M.id]!==void 0||(M.addEventListener("dispose",f),o[M.id]=new WeakRef(M),d.register(M,M.id,M),t.memory.geometries++),M}function b(S){const M=S.attributes;for(const v in M)e.update(M[v],s.ARRAY_BUFFER)}function y(S){const M=S.index,v=S.attributes.position;let _=0;if(v===void 0)return;const P=M!==null?M.array.length:v.array.length/3-1,k=v.count>=65535?Vm:jm,D=new k(Math.ceil(P/3)*6,1),U=D.array;if(M!==null){const E=M.array;_=M.version;for(let L=0,q=0;L<P;L+=3){const W=E[L+0],j=E[L+1],H=E[L+2];U[q++]=W,U[q++]=j,U[q++]=j,U[q++]=H,U[q++]=H,U[q++]=W}}else{_=v.version;for(let E=0,L=0;E<P;E+=3){const q=E+0,W=E+1,j=E+2;U[L++]=q,U[L++]=W,U[L++]=W,U[L++]=j,U[L++]=j,U[L++]=q}}D.version=_;const R=l.get(S);R&&e.remove(R),l.set(S,D)}function h(S){const M=l.get(S);if(M){const v=S.index;v!==null&&M.version<v.version&&y(S)}else y(S);return l.get(S)}function w(){for(const S in o){const M=o[S].deref();M!==void 0&&g(M)}}return{get:m,update:b,getWireframeAttribute:h,dispose:w}}function Eb(s,e,t){let r;function o(y){r=y}let l,d;function f(y){l=y.type,d=y.bytesPerElement}function g(y,h){s.drawElements(r,h,l,y*d),t.update(h,r,1)}function m(y,h,w){w!==0&&(s.drawElementsInstanced(r,h,l,y*d,w),t.update(h,r,w))}function b(y,h,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,h,0,l,y,0,w);let M=0;for(let v=0;v<w;v++)M+=h[v];t.update(M,r,1)}this.setMode=o,this.setIndex=f,this.render=g,this.renderInstances=m,this.renderMultiDraw=b}function Tb(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,d,f){switch(t.calls++,d){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Jt("WebGLInfo: Unknown draw mode:",d);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function Cb(s,e,t){const r=new WeakMap,o=new Sn;function l(d,f,g){const m=d.morphTargetInfluences,b=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=b!==void 0?b.length:0;let h=r.get(f);if(h===void 0||h.count!==y){let W=function(){L.dispose(),r.delete(f),f.removeEventListener("dispose",W)};var w=W;h!==void 0&&h.texture.dispose();const S=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,v=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],P=f.morphAttributes.normal||[],k=f.morphAttributes.color||[];let D=0;S===!0&&(D=1),M===!0&&(D=2),v===!0&&(D=3);let U=f.attributes.position.count*D,R=1;U>e.maxTextureSize&&(R=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const E=new Float32Array(U*R*4*y),L=new Bm(E,U,R,y);L.type=sr,L.needsUpdate=!0;const q=D*4;for(let j=0;j<y;j++){const H=_[j],X=P[j],F=k[j],Q=U*R*4*j;for(let ue=0;ue<H.count;ue++){const Y=ue*q;S===!0&&(o.fromBufferAttribute(H,ue),E[Q+Y+0]=o.x,E[Q+Y+1]=o.y,E[Q+Y+2]=o.z,E[Q+Y+3]=0),M===!0&&(o.fromBufferAttribute(X,ue),E[Q+Y+4]=o.x,E[Q+Y+5]=o.y,E[Q+Y+6]=o.z,E[Q+Y+7]=0),v===!0&&(o.fromBufferAttribute(F,ue),E[Q+Y+8]=o.x,E[Q+Y+9]=o.y,E[Q+Y+10]=o.z,E[Q+Y+11]=F.itemSize===4?o.w:1)}}h={count:y,texture:L,size:new Gt(U,R)},r.set(f,h),f.addEventListener("dispose",W)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)g.getUniforms().setValue(s,"morphTexture",d.morphTexture,t);else{let S=0;for(let v=0;v<m.length;v++)S+=m[v];const M=f.morphTargetsRelative?1:1-S;g.getUniforms().setValue(s,"morphTargetBaseInfluence",M),g.getUniforms().setValue(s,"morphTargetInfluences",m)}g.getUniforms().setValue(s,"morphTargetsTexture",h.texture,t),g.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:l}}function Ab(s,e,t,r,o){let l=new WeakMap;function d(m){const b=o.render.frame,y=m.geometry,h=e.get(m,y);if(l.get(h)!==b&&(e.update(h),l.set(h,b)),m.isInstancedMesh&&(m.hasEventListener("dispose",g)===!1&&m.addEventListener("dispose",g),l.get(m)!==b&&(t.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,b))),m.isSkinnedMesh){const w=m.skeleton;l.get(w)!==b&&(w.update(),l.set(w,b))}return h}function f(){l=new WeakMap}function g(m){const b=m.target;b.removeEventListener("dispose",g),r.releaseStatesOfObject(b),t.remove(b.instanceMatrix),b.instanceColor!==null&&t.remove(b.instanceColor)}return{update:d,dispose:f}}const Rb={[Sm]:"LINEAR_TONE_MAPPING",[bm]:"REINHARD_TONE_MAPPING",[wm]:"CINEON_TONE_MAPPING",[Mm]:"ACES_FILMIC_TONE_MAPPING",[Tm]:"AGX_TONE_MAPPING",[Cm]:"NEUTRAL_TONE_MAPPING",[Em]:"CUSTOM_TONE_MAPPING"};function Nb(s,e,t,r,o,l){const d=new lr(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,g=null,m=null;const b=new fr;b.setAttribute("position",new Gn([-1,3,0,-1,-1,0,3,-1,0],3)),b.setAttribute("uv",new Gn([0,2,0,0,2,0],2));const y=new _y({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Rn(b,y),w=new Zm(-1,1,1,-1,0,1);let S=null,M=null,v=!1,_,P=null,k=[],D=!1;this.setSize=function(U,R){d.setSize(U,R),f!==null&&f.setSize(U,R),g!==null&&g.setSize(U,R);for(let E=0;E<k.length;E++){const L=k[E];L.setSize&&L.setSize(U,R)}},this.setEffects=function(U){k=U,D=k.length>0&&k[0].isRenderPass===!0;const R=d.width,E=d.height;k.length>0&&f===null&&(f=new lr(R,E,{type:ur,depthBuffer:!1,stencilBuffer:!1}),g=new lr(R,E,{type:ur,depthBuffer:!1,stencilBuffer:!1}));const L=o===!0&&k.some(q=>q.needsDepthTexture===!0);L!==(d.depthTexture!==null)&&(L===!0&&m===null&&(m=new ya(R,E),l===!0&&(m.format=ns,m.type=_a)),d.dispose(),d.depthTexture=L?m:null,d.resolveDepthBuffer=L,d.storeMultisampledDepthBuffer=L);for(let q=0;q<k.length;q++){const W=k[q];W.setSize&&W.setSize(R,E),L&&W.needsDepthTexture===!0&&W.setDepthTexture&&W.setDepthTexture(m)}},this.begin=function(U,R){if(v||U.toneMapping===Nr&&k.length===0)return!1;if(P=R,R!==null){const E=R.width,L=R.height;(d.width!==E||d.height!==L)&&this.setSize(E,L)}return D===!1&&U.setRenderTarget(d),_=U.toneMapping,U.toneMapping=Nr,!0},this.hasRenderPass=function(){return D},this.end=function(U,R){U.toneMapping=_,v=!0;let E=d,L=f;for(let q=0;q<k.length;q++){const W=k[q];W.enabled!==!1&&(W.render(U,L,E,R),W.needsSwap!==!1&&(E=L,L=L===f?g:f))}if(S!==U.outputColorSpace||M!==U.toneMapping){S=U.outputColorSpace,M=U.toneMapping,y.defines={},Wt.getTransfer(S)===rn&&(y.defines.SRGB_TRANSFER="");const q=Rb[M];q&&(y.defines[q]=""),y.needsUpdate=!0}y.uniforms.tDiffuse.value=E.texture,U.setRenderTarget(P),U.render(h,w),P=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){d.dispose(),f!==null&&f.dispose(),g!==null&&g.dispose(),b.dispose(),y.dispose()}}const ng=new Qn,ig=new ya(1,1),rg=new $m(1),sg=new Bm,ag=new K_,og=new Wm,Y0=[],q0=[],K0=new Float32Array(16),Z0=new Float32Array(9),J0=new Float32Array(4);function wa(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=Y0[o];if(l===void 0&&(l=new Float32Array(o),Y0[o]=l),e!==0){r.toArray(l,0);for(let d=1,f=0;d!==e;++d)f+=t,s[d].toArray(l,f)}return l}function Ln(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function In(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function gc(s,e){let t=q0[e];t===void 0&&(t=new Int32Array(e),q0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function Pb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Db(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ln(t,e))return;s.uniform2fv(this.addr,e),In(t,e)}}function Lb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ln(t,e))return;s.uniform3fv(this.addr,e),In(t,e)}}function Ib(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ln(t,e))return;s.uniform4fv(this.addr,e),In(t,e)}}function kb(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Ln(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),In(t,e)}else{if(Ln(t,r))return;J0.set(r),s.uniformMatrix2fv(this.addr,!1,J0),In(t,r)}}function zb(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Ln(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),In(t,e)}else{if(Ln(t,r))return;Z0.set(r),s.uniformMatrix3fv(this.addr,!1,Z0),In(t,r)}}function Ub(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Ln(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),In(t,e)}else{if(Ln(t,r))return;K0.set(r),s.uniformMatrix4fv(this.addr,!1,K0),In(t,r)}}function Fb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Ob(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ln(t,e))return;s.uniform2iv(this.addr,e),In(t,e)}}function Bb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ln(t,e))return;s.uniform3iv(this.addr,e),In(t,e)}}function Hb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ln(t,e))return;s.uniform4iv(this.addr,e),In(t,e)}}function Gb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function jb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ln(t,e))return;s.uniform2uiv(this.addr,e),In(t,e)}}function Vb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ln(t,e))return;s.uniform3uiv(this.addr,e),In(t,e)}}function Wb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ln(t,e))return;s.uniform4uiv(this.addr,e),In(t,e)}}function xc(s){return s.version===0&&(s.compareFunction=Fm,s.needsUpdate=!0),s}function $b(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?l=xc(ig):l=ng,t.setTexture2D(e||l,o)}function Xb(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||ag,o)}function Yb(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_CUBE_SHADOW?l=xc(rg):l=og,t.setTextureCube(e||l,o)}function qb(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||sg,o)}function Kb(s){switch(s){case 5126:return Pb;case 35664:return Db;case 35665:return Lb;case 35666:return Ib;case 35674:return kb;case 35675:return zb;case 35676:return Ub;case 5124:case 35670:return Fb;case 35667:case 35671:return Ob;case 35668:case 35672:return Bb;case 35669:case 35673:return Hb;case 5125:return Gb;case 36294:return jb;case 36295:return Vb;case 36296:return Wb;case 35678:case 36198:case 36298:case 36306:case 35682:return $b;case 35679:case 36299:case 36307:return Xb;case 35680:case 36300:case 36308:case 36293:return Yb;case 36289:case 36303:case 36311:case 36292:return qb}}function Zb(s,e){s.uniform1fv(this.addr,e)}function Jb(s,e){const t=wa(e,this.size,2);s.uniform2fv(this.addr,t)}function Qb(s,e){const t=wa(e,this.size,3);s.uniform3fv(this.addr,t)}function ew(s,e){const t=wa(e,this.size,4);s.uniform4fv(this.addr,t)}function tw(s,e){const t=wa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function nw(s,e){const t=wa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function iw(s,e){const t=wa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function rw(s,e){s.uniform1iv(this.addr,e)}function sw(s,e){s.uniform2iv(this.addr,e)}function aw(s,e){s.uniform3iv(this.addr,e)}function ow(s,e){s.uniform4iv(this.addr,e)}function lw(s,e){s.uniform1uiv(this.addr,e)}function cw(s,e){s.uniform2uiv(this.addr,e)}function uw(s,e){s.uniform3uiv(this.addr,e)}function dw(s,e){s.uniform4uiv(this.addr,e)}function fw(s,e,t){const r=this.cache,o=e.length,l=gc(t,o);Ln(r,l)||(s.uniform1iv(this.addr,l),In(r,l));let d;this.type===s.SAMPLER_2D_SHADOW?d=xc(ig):d=ng;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||d,l[f])}function hw(s,e,t){const r=this.cache,o=e.length,l=gc(t,o);Ln(r,l)||(s.uniform1iv(this.addr,l),In(r,l));for(let d=0;d!==o;++d)t.setTexture3D(e[d]||ag,l[d])}function pw(s,e,t){const r=this.cache,o=e.length,l=gc(t,o);Ln(r,l)||(s.uniform1iv(this.addr,l),In(r,l));let d;this.type===s.SAMPLER_CUBE_SHADOW?d=xc(rg):d=og;for(let f=0;f!==o;++f)t.setTextureCube(e[f]||d,l[f])}function mw(s,e,t){const r=this.cache,o=e.length,l=gc(t,o);Ln(r,l)||(s.uniform1iv(this.addr,l),In(r,l));for(let d=0;d!==o;++d)t.setTexture2DArray(e[d]||sg,l[d])}function gw(s){switch(s){case 5126:return Zb;case 35664:return Jb;case 35665:return Qb;case 35666:return ew;case 35674:return tw;case 35675:return nw;case 35676:return iw;case 5124:case 35670:return rw;case 35667:case 35671:return sw;case 35668:case 35672:return aw;case 35669:case 35673:return ow;case 5125:return lw;case 36294:return cw;case 36295:return uw;case 36296:return dw;case 35678:case 36198:case 36298:case 36306:case 35682:return fw;case 35679:case 36299:case 36307:return hw;case 35680:case 36300:case 36308:case 36293:return pw;case 36289:case 36303:case 36311:case 36292:return mw}}class xw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Kb(t.type)}}class vw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gw(t.type)}}class _w{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,d=o.length;l!==d;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Cd=/(\w+)(\])?(\[|\.)?/g;function Q0(s,e){s.seq.push(e),s.map[e.id]=e}function yw(s,e,t){const r=s.name,o=r.length;for(Cd.lastIndex=0;;){const l=Cd.exec(r),d=Cd.lastIndex;let f=l[1];const g=l[2]==="]",m=l[3];if(g&&(f=f|0),m===void 0||m==="["&&d+2===o){Q0(t,m===void 0?new xw(f,s,e):new vw(f,s,e));break}else{let y=t.map[f];y===void 0&&(y=new _w(f),Q0(t,y)),t=y}}}class ic{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const f=e.getActiveUniform(t,d),g=e.getUniformLocation(t,f.name);yw(f,g,this)}const o=[],l=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(d):l.push(d);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,d=t.length;l!==d;++l){const f=t[l],g=r[f.id];g.needsUpdate!==!1&&f.setValue(e,g.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const d=e[o];d.id in t&&r.push(d)}return r}}function em(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const Sw=37297;let bw=0;function ww(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let d=o;d<l;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${t[d]}`)}return r.join(`
`)}const tm=new Dt;function Mw(s){Wt._getMatrix(tm,Wt.workingColorSpace,s);const e=`mat3( ${tm.elements.map(t=>t.toFixed(4))} )`;switch(Wt.getTransfer(s)){case lc:return[e,"LinearTransferOETF"];case rn:return[e,"sRGBTransferOETF"];default:return Rt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function nm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const d=/ERROR: 0:(\d+)/.exec(l);if(d){const f=parseInt(d[1]);return t.toUpperCase()+`

`+l+`

`+ww(s.getShaderSource(e),f)}else return l}function Ew(s,e){const t=Mw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Tw={[Sm]:"Linear",[bm]:"Reinhard",[wm]:"Cineon",[Mm]:"ACESFilmic",[Tm]:"AgX",[Cm]:"Neutral",[Em]:"Custom"};function Cw(s,e){const t=Tw[e];return t===void 0?(Rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ql=new ye;function Aw(){Wt.getLuminanceCoefficients(ql);const s=ql.x.toFixed(4),e=ql.y.toFixed(4),t=ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oo).join(`
`)}function Nw(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Pw(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),d=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[d]={type:l.type,location:s.getAttribLocation(e,d),locationSize:f}}return t}function oo(s){return s!==""}function im(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function rm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Dw=/^[ \t]*#include +<([\w\d./]+)>/gm;function _f(s){return s.replace(Dw,Lw)}function Lw(s,e){const t=Ut[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return _f(t)}const Iw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sm(s){return s.replace(Iw,kw)}function kw(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function am(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const zw={[Kl]:"SHADOWMAP_TYPE_PCF",[so]:"SHADOWMAP_TYPE_VSM"};function Uw(s){return zw[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Fw={[fo]:"ENVMAP_MODE_REFRACTION"};function Ow(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Fw[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Bw={[ym]:"ENVMAP_BLENDING_MULTIPLY",[E_]:"ENVMAP_BLENDING_MIX",[T_]:"ENVMAP_BLENDING_ADD"};function Hw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Bw[s.combine]||"ENVMAP_BLENDING_NONE"}function Gw(s,e,t,r){const o=s.getContext(),l=t.defines;let d=t.vertexShader,f=t.fragmentShader;const g=Uw(t),m=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",b=Ow(t),y=Hw(t),h=Rw(t),w=Nw(l),S=o.createProgram();let M,v,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(oo).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(oo).join(`
`),v.length>0&&(v+=`
`)):(M=[am(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+b:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+g:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),v=[am(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+b:"",t.envMap?"#define "+y:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+g:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nr?"#define TONE_MAPPING":"",t.toneMapping!==Nr?Ut.tonemapping_pars_fragment:"",t.toneMapping!==Nr?Cw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,Ew("linearToOutputTexel",t.outputColorSpace),Aw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oo).join(`
`)),d=_f(d),d=im(d,t),d=rm(d,t),f=_f(f),f=im(f,t),f=rm(f,t),d=sm(d),f=sm(f),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,M=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",t.glslVersion===y0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===y0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const P=_+M+d,k=_+v+f,D=em(o,o.VERTEX_SHADER,P),U=em(o,o.FRAGMENT_SHADER,k);o.attachShader(S,D),o.attachShader(S,U),t.index0AttributeName!==void 0?o.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(S,0,"position"),o.linkProgram(S);function R(W){if(s.debug.checkShaderErrors){const j=o.getProgramInfoLog(S)||"",H=o.getShaderInfoLog(D)||"",X=o.getShaderInfoLog(U)||"",F=j.trim(),Q=H.trim(),ue=X.trim();let Y=!0,se=!0;if(o.getProgramParameter(S,o.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,S,D,U);else{const G=nm(o,D,"vertex"),Z=nm(o,U,"fragment");Jt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(S,o.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+F+`
`+G+`
`+Z)}else F!==""?Rt("WebGLProgram: Program Info Log:",F):(Q===""||ue==="")&&(se=!1);se&&(W.diagnostics={runnable:Y,programLog:F,vertexShader:{log:Q,prefix:M},fragmentShader:{log:ue,prefix:v}})}o.deleteShader(D),o.deleteShader(U),E=new ic(o,S),L=Pw(o,S)}let E;this.getUniforms=function(){return E===void 0&&R(this),E};let L;this.getAttributes=function(){return L===void 0&&R(this),L};let q=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=o.getProgramParameter(S,Sw)),q},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bw++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=D,this.fragmentShader=U,this}let jw=0;class Vw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Ww(e),t.set(e,r)),r}}class Ww{constructor(e){this.id=jw++,this.code=e,this.usedTimes=0}}function $w(s){return s===Rs||s===sc||s===ac}function Xw(s,e,t,r,o,l){const d=new Hm,f=new Vw,g=new Set,m=[],b=new Map,y=r.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(E){return g.add(E),E===0?"uv":`uv${E}`}function S(E,L,q,W,j,H){const X=W.fog,F=j.geometry,Q=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?W.environment:null,ue=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,Y=e.get(E.envMap||Q,ue),se=h[E.type];let G=r.precision;E.precision!==null&&(G=r.getMaxPrecision(E.precision),G!==E.precision&&Rt("WebGLProgram.getParameters:",E.precision,"not supported, using",G,"instead."));const Z=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,z=Z!==void 0?Z.length:0;let I=0;F.morphAttributes.position!==void 0&&(I=1),F.morphAttributes.normal!==void 0&&(I=2),F.morphAttributes.color!==void 0&&(I=3);let oe,O,ne,ie;if(se){const Ge=nr[se];oe=Ge.vertexShader,O=Ge.fragmentShader}else{oe=E.vertexShader,O=E.fragmentShader;const Ge=f.getVertexShaderStage(E),St=f.getFragmentShaderStage(E);f.update(E,Ge,St),ne=Ge.id,ie=St.id}const Me=s.getRenderTarget(),me=s.state.buffers.depth.getReversed(),he=j.isInstancedMesh===!0,Ye=j.isBatchedMesh===!0,$e=!!E.map,Ne=!!E.matcap,je=!!Y,qe=je&&Y.isPMREMTexture===!0,mt=!!E.aoMap,xt=!!E.lightMap,wt=!!E.bumpMap&&E.wireframe===!1,yt=!!E.normalMap,kt=!!E.displacementMap,_e=!!E.emissiveMap,Lt=!!E.metalnessMap,cn=!!E.roughnessMap,gn=E.anisotropy>0,ee=E.clearcoat>0,vn=E.diffuseRoughness>0,Et=E.dispersion>0,Bt=E.retroreflectivity>0,Ie=E.iridescence>0,Kt=E.sheen>0,ot=E.transmission>0,Ze=gn&&!!E.anisotropyMap,N=ee&&!!E.clearcoatMap,T=ee&&!!E.clearcoatNormalMap,ae=ee&&!!E.clearcoatRoughnessMap,Le=vn&&!!E.diffuseRoughnessMap,Ee=Ie&&!!E.iridescenceMap,ke=Ie&&!!E.iridescenceThicknessMap,ze=Kt&&!!E.sheenColorMap,Se=Kt&&!!E.sheenRoughnessMap,Te=!!E.specularMap,Oe=!!E.specularColorMap,$=!!E.specularIntensityMap,Ae=ot&&!!E.transmissionMap,we=ot&&!!E.thicknessMap,Re=!!E.gradientMap,ve=!!E.alphaMap,Ce=E.alphaTest>0,He=!!E.alphaHash,nt=!!E.extensions;let Pe=Nr;E.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(Pe=s.toneMapping);const Je=qe?Y.isCompressedCubeTexture?Y.image[0].mipmaps:Y.mipmaps:null,lt={shaderID:se,shaderType:E.type,shaderName:E.name,vertexShader:oe,fragmentShader:O,defines:E.defines,customVertexShaderID:ne,customFragmentShaderID:ie,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:G,batching:Ye,batchingColor:Ye&&j._colorsTexture!==null,instancing:he,instancingColor:he&&j.instanceColor!==null,instancingMorph:he&&j.morphTexture!==null,outputColorSpace:Me===null?s.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Wt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:$e,matcap:Ne,envMap:je,envMapMode:je&&Y.mapping,envMapPMREM:qe,envMapMaxLod:qe?Je.length-1:null,envMapSize:qe?Je[0].width:null,aoMap:mt,lightMap:xt,bumpMap:wt,normalMap:yt,displacementMap:kt,emissiveMap:_e,normalMapObjectSpace:yt&&E.normalMapType===R_,normalMapTangentSpace:yt&&E.normalMapType===gf,packedNormalMap:yt&&E.normalMapType===gf&&$w(E.normalMap.format),metalnessMap:Lt,roughnessMap:cn,anisotropy:gn,anisotropyMap:Ze,clearcoat:ee,clearcoatMap:N,clearcoatNormalMap:T,clearcoatRoughnessMap:ae,diffuseRoughness:vn,diffuseRoughnessMap:Le,dispersion:Et,retroreflection:Bt,iridescence:Ie,iridescenceMap:Ee,iridescenceThicknessMap:ke,sheen:Kt,sheenColorMap:ze,sheenRoughnessMap:Se,specularMap:Te,specularColorMap:Oe,specularIntensityMap:$,transmission:ot,transmissionMap:Ae,thicknessMap:we,gradientMap:Re,opaque:E.transparent===!1&&E.blending===lo&&E.alphaToCoverage===!1,alphaMap:ve,alphaTest:Ce,alphaHash:He,combine:E.combine,mapUv:$e&&w(E.map.channel),aoMapUv:mt&&w(E.aoMap.channel),lightMapUv:xt&&w(E.lightMap.channel),bumpMapUv:wt&&w(E.bumpMap.channel),normalMapUv:yt&&w(E.normalMap.channel),displacementMapUv:kt&&w(E.displacementMap.channel),emissiveMapUv:_e&&w(E.emissiveMap.channel),metalnessMapUv:Lt&&w(E.metalnessMap.channel),roughnessMapUv:cn&&w(E.roughnessMap.channel),anisotropyMapUv:Ze&&w(E.anisotropyMap.channel),clearcoatMapUv:N&&w(E.clearcoatMap.channel),clearcoatNormalMapUv:T&&w(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&w(E.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Le&&w(E.diffuseRoughnessMap.channel),iridescenceMapUv:Ee&&w(E.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&w(E.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&w(E.sheenColorMap.channel),sheenRoughnessMapUv:Se&&w(E.sheenRoughnessMap.channel),specularMapUv:Te&&w(E.specularMap.channel),specularColorMapUv:Oe&&w(E.specularColorMap.channel),specularIntensityMapUv:$&&w(E.specularIntensityMap.channel),transmissionMapUv:Ae&&w(E.transmissionMap.channel),thicknessMapUv:we&&w(E.thicknessMap.channel),alphaMapUv:ve&&w(E.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(yt||gn),vertexNormals:!!F.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!F.attributes.uv&&($e||ve),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||F.attributes.normal===void 0&&yt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:me,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:I,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:H.filter(Ge=>Ge.texture!==null).length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&q.length>0,shadowMapType:s.shadowMap.type,toneMapping:Pe,decodeVideoTexture:$e&&E.map.isVideoTexture===!0&&Wt.getTransfer(E.map.colorSpace)===rn,decodeVideoTextureEmissive:_e&&E.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(E.emissiveMap.colorSpace)===rn,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Wi,flipSided:E.side===$n,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:nt&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&E.extensions.multiDraw===!0||Ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return lt.vertexUv1s=g.has(1),lt.vertexUv2s=g.has(2),lt.vertexUv3s=g.has(3),g.clear(),lt}function M(E){const L=[];if(E.shaderID?L.push(E.shaderID):(L.push(E.customVertexShaderID),L.push(E.customFragmentShaderID)),E.defines!==void 0)for(const q in E.defines)L.push(q),L.push(E.defines[q]);return E.isRawShaderMaterial===!1&&(v(L,E),_(L,E),L.push(s.outputColorSpace)),L.push(E.customProgramCacheKey),L.join()}function v(E,L){E.push(L.precision),E.push(L.outputColorSpace),E.push(L.envMapMode),E.push(L.envMapPMREM),E.push(L.envMapMaxLod),E.push(L.envMapSize),E.push(L.mapUv),E.push(L.alphaMapUv),E.push(L.lightMapUv),E.push(L.aoMapUv),E.push(L.bumpMapUv),E.push(L.normalMapUv),E.push(L.displacementMapUv),E.push(L.emissiveMapUv),E.push(L.metalnessMapUv),E.push(L.roughnessMapUv),E.push(L.anisotropyMapUv),E.push(L.clearcoatMapUv),E.push(L.clearcoatNormalMapUv),E.push(L.clearcoatRoughnessMapUv),E.push(L.diffuseRoughnessMapUv),E.push(L.iridescenceMapUv),E.push(L.iridescenceThicknessMapUv),E.push(L.sheenColorMapUv),E.push(L.sheenRoughnessMapUv),E.push(L.specularMapUv),E.push(L.specularColorMapUv),E.push(L.specularIntensityMapUv),E.push(L.transmissionMapUv),E.push(L.thicknessMapUv),E.push(L.combine),E.push(L.fogExp2),E.push(L.sizeAttenuation),E.push(L.morphTargetsCount),E.push(L.numSunLights),E.push(L.numDirLights),E.push(L.numPointLights),E.push(L.numSpotLights),E.push(L.numSpotLightMaps),E.push(L.numHemiLights),E.push(L.numRectAreaLights),E.push(L.numSunLightShadows),E.push(L.numDirLightShadows),E.push(L.numPointLightShadows),E.push(L.numSpotLightShadows),E.push(L.numSpotLightShadowsWithMaps),E.push(L.numLightProbes),E.push(L.numLightProbeGrids),E.push(L.shadowMapType),E.push(L.toneMapping),E.push(L.numClippingPlanes),E.push(L.numClipIntersection),E.push(L.depthPacking)}function _(E,L){d.disableAll(),L.instancing&&d.enable(0),L.instancingColor&&d.enable(1),L.instancingMorph&&d.enable(2),L.matcap&&d.enable(3),L.envMap&&d.enable(4),L.normalMapObjectSpace&&d.enable(5),L.normalMapTangentSpace&&d.enable(6),L.clearcoat&&d.enable(7),L.iridescence&&d.enable(8),L.alphaTest&&d.enable(9),L.vertexColors&&d.enable(10),L.vertexAlphas&&d.enable(11),L.vertexUv1s&&d.enable(12),L.vertexUv2s&&d.enable(13),L.vertexUv3s&&d.enable(14),L.vertexTangents&&d.enable(15),L.anisotropy&&d.enable(16),L.alphaHash&&d.enable(17),L.batching&&d.enable(18),L.dispersion&&d.enable(19),L.retroreflection&&d.enable(24),L.diffuseRoughness&&d.enable(25),L.batchingColor&&d.enable(20),L.gradientMap&&d.enable(21),L.packedNormalMap&&d.enable(22),L.vertexNormals&&d.enable(23),E.push(d.mask),d.disableAll(),L.fog&&d.enable(0),L.useFog&&d.enable(1),L.flatShading&&d.enable(2),L.logarithmicDepthBuffer&&d.enable(3),L.reversedDepthBuffer&&d.enable(4),L.skinning&&d.enable(5),L.morphTargets&&d.enable(6),L.morphNormals&&d.enable(7),L.morphColors&&d.enable(8),L.premultipliedAlpha&&d.enable(9),L.shadowMapEnabled&&d.enable(10),L.doubleSided&&d.enable(11),L.flipSided&&d.enable(12),L.useDepthPacking&&d.enable(13),L.dithering&&d.enable(14),L.transmission&&d.enable(15),L.sheen&&d.enable(16),L.opaque&&d.enable(17),L.pointsUvs&&d.enable(18),L.decodeVideoTexture&&d.enable(19),L.decodeVideoTextureEmissive&&d.enable(20),L.alphaToCoverage&&d.enable(21),L.numLightProbeGrids>0&&d.enable(22),L.hasPositionAttribute&&d.enable(23),E.push(d.mask)}function P(E){const L=h[E.type];let q;if(L){const W=nr[L];q=gy.clone(W.uniforms)}else q=E.uniforms;return q}function k(E,L){let q=b.get(L);return q!==void 0?++q.usedTimes:(q=new Gw(s,L,E,o),m.push(q),b.set(L,q)),q}function D(E){if(--E.usedTimes===0){const L=m.indexOf(E);m[L]=m[m.length-1],m.pop(),b.delete(E.cacheKey),E.destroy()}}function U(E){f.remove(E)}function R(){f.dispose()}return{getParameters:S,getProgramCacheKey:M,getUniforms:P,acquireProgram:k,releaseProgram:D,releaseShaderCache:U,programs:m,dispose:R}}function Yw(){let s=new WeakMap;function e(d){return s.has(d)}function t(d){let f=s.get(d);return f===void 0&&(f={},s.set(d,f)),f}function r(d){s.delete(d)}function o(d,f,g){s.get(d)[f]=g}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function qw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function om(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function lm(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function d(h){let w=0;return h.isInstancedMesh&&(w+=2),h.isSkinnedMesh&&(w+=1),w}function f(h,w,S,M,v,_){let P=s[e];return P===void 0?(P={id:h.id,object:h,geometry:w,material:S,materialVariant:d(h),groupOrder:M,renderOrder:h.renderOrder,z:v,group:_},s[e]=P):(P.id=h.id,P.object=h,P.geometry=w,P.material=S,P.materialVariant=d(h),P.groupOrder=M,P.renderOrder=h.renderOrder,P.z=v,P.group=_),e++,P}function g(h,w,S,M,v,_,P){P.reversedDepth===!0&&(v=-v);const k=f(h,w,S,M,v,_);S.transmission>0?r.push(k):S.transparent===!0?o.push(k):t.push(k)}function m(h,w,S,M,v,_){const P=f(h,w,S,M,v,_);S.transmission>0?r.unshift(P):S.transparent===!0?o.unshift(P):t.unshift(P)}function b(h,w){t.length>1&&t.sort(h||qw),r.length>1&&r.sort(w||om),o.length>1&&o.sort(w||om)}function y(){for(let h=e,w=s.length;h<w;h++){const S=s[h];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:g,unshift:m,finish:y,sort:b}}function Kw(){let s=new WeakMap;function e(r,o){const l=s.get(r);let d;return l===void 0?(d=new lm,s.set(r,[d])):o>=l.length?(d=new lm,l.push(d)):d=l[o],d}function t(){s=new WeakMap}return{get:e,dispose:t}}function Zw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ye,color:new Ot};break;case"SpotLight":t={position:new ye,direction:new ye,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ye,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ye,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":t={color:new Ot,position:new ye,halfWidth:new ye,halfHeight:new ye};break}return s[e.id]=t,t}}}function Jw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Qw=0;function eM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function tM(s){const e=new Zw,t=Jw(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ye);const o=new ye,l=new bn,d=new bn;function f(m){let b=0,y=0,h=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let w=0,S=0,M=0,v=0,_=0,P=0,k=0,D=0,U=0,R=0,E=0,L=0,q=0,W=0;m.sort(eM);for(let H=0,X=m.length;H<X;H++){const F=m[H],Q=F.color,ue=F.intensity,Y=F.distance;let se=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Rs?se=F.shadow.map.texture:se=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)b+=Q.r*ue,y+=Q.g*ue,h+=Q.b*ue;else if(F.isLightProbe){for(let G=0;G<9;G++)r.probe[G].addScaledVector(F.sh.coefficients[G],ue);W++}else if(F.isSunLight){const G=e.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const Z=F.shadow,z=t.get(F);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),r.sunShadow[S]=z,r.sunShadowMap[S]=se;const I=Z.getViewportCount();for(let oe=0;oe<I;oe++)r.sunShadowMatrix[M+oe]=Z.getMatrix(oe),r.sunShadowCascade[M+oe]=Z._cascadeData[oe];M+=I,S++}r.sun[w]=G,w++}else if(F.isDirectionalLight){const G=e.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const Z=F.shadow,z=t.get(F);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,r.directionalShadow[v]=z,r.directionalShadowMap[v]=se,r.directionalShadowMatrix[v]=F.shadow.matrix,U++}r.directional[v]=G,v++}else if(F.isSpotLight){const G=e.get(F);G.position.setFromMatrixPosition(F.matrixWorld),G.color.copy(Q).multiplyScalar(ue),G.distance=Y,G.coneCos=Math.cos(F.angle),G.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),G.decay=F.decay,r.spot[P]=G;const Z=F.shadow;if(F.map&&(r.spotLightMap[L]=F.map,L++,Z.updateMatrices(F),F.castShadow&&q++),r.spotLightMatrix[P]=Z.matrix,F.castShadow){const z=t.get(F);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,r.spotShadow[P]=z,r.spotShadowMap[P]=se,E++}P++}else if(F.isRectAreaLight){const G=e.get(F);G.color.copy(Q).multiplyScalar(ue),G.halfWidth.set(F.width*.5,0,0),G.halfHeight.set(0,F.height*.5,0),r.rectArea[k]=G,k++}else if(F.isPointLight){const G=e.get(F);if(G.color.copy(F.color).multiplyScalar(F.intensity),G.distance=F.distance,G.decay=F.decay,F.castShadow){const Z=F.shadow,z=t.get(F);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,z.shadowCameraNear=Z.camera.near,z.shadowCameraFar=Z.camera.far,r.pointShadow[_]=z,r.pointShadowMap[_]=se,r.pointShadowMatrix[_]=F.shadow.matrix,R++}r.point[_]=G,_++}else if(F.isHemisphereLight){const G=e.get(F);G.skyColor.copy(F.color).multiplyScalar(ue),G.groundColor.copy(F.groundColor).multiplyScalar(ue),r.hemi[D]=G,D++}}k>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=et.LTC_FLOAT_1,r.rectAreaLTC2=et.LTC_FLOAT_2):(r.rectAreaLTC1=et.LTC_HALF_1,r.rectAreaLTC2=et.LTC_HALF_2)),r.ambient[0]=b,r.ambient[1]=y,r.ambient[2]=h;const j=r.hash;(j.sunLength!==w||j.directionalLength!==v||j.pointLength!==_||j.spotLength!==P||j.rectAreaLength!==k||j.hemiLength!==D||j.numSunShadows!==S||j.numDirectionalShadows!==U||j.numPointShadows!==R||j.numSpotShadows!==E||j.numSpotMaps!==L||j.numLightProbes!==W)&&(r.sun.length=w,r.directional.length=v,r.spot.length=P,r.rectArea.length=k,r.point.length=_,r.hemi.length=D,r.sunShadow.length=S,r.sunShadowMap.length=S,r.sunShadowMatrix.length=M,r.sunShadowCascade.length=M,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.directionalShadowMatrix.length=U,r.pointShadow.length=R,r.pointShadowMap.length=R,r.pointShadowMatrix.length=R,r.spotShadow.length=E,r.spotShadowMap.length=E,r.spotLightMatrix.length=E+L-q,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=q,r.numLightProbes=W,j.sunLength=w,j.directionalLength=v,j.pointLength=_,j.spotLength=P,j.rectAreaLength=k,j.hemiLength=D,j.numSunShadows=S,j.numDirectionalShadows=U,j.numPointShadows=R,j.numSpotShadows=E,j.numSpotMaps=L,j.numLightProbes=W,r.version=Qw++)}function g(m,b){let y=0,h=0,w=0,S=0,M=0,v=0;const _=b.matrixWorldInverse;for(let P=0,k=m.length;P<k;P++){const D=m[P];if(D.isSunLight){const U=r.sun[y];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(_),y++}else if(D.isDirectionalLight){const U=r.directional[h];U.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(_),h++}else if(D.isSpotLight){const U=r.spot[S];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(_),U.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(_),S++}else if(D.isRectAreaLight){const U=r.rectArea[M];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(_),d.identity(),l.copy(D.matrixWorld),l.premultiply(_),d.extractRotation(l),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),M++}else if(D.isPointLight){const U=r.point[w];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(_),w++}else if(D.isHemisphereLight){const U=r.hemi[v];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(_),v++}}}return{setup:f,setupView:g,state:r}}function cm(s){const e=new tM(s),t=[],r=[],o=[];function l(y){b.camera=y,t.length=0,r.length=0,o.length=0}function d(y){y.isLightProbeGrid?o.push(y):t.push(y)}function f(y){r.push(y)}function g(){e.setup(t),o.sort((y,h)=>y.priority-h.priority||y.id-h.id)}function m(y){e.setupView(t,y)}const b={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:b,setupLights:g,setupLightsView:m,pushLight:d,pushShadow:f}}function nM(s){let e=new WeakMap;function t(o,l=0){const d=e.get(o);let f;return d===void 0?(f=new cm(s),e.set(o,[f])):l>=d.length?(f=new cm(s),d.push(f)):f=d[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const iM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rM=`uniform sampler2D shadow_pass;
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
}`,sM=[new ye(1,0,0),new ye(-1,0,0),new ye(0,1,0),new ye(0,-1,0),new ye(0,0,1),new ye(0,0,-1)],aM=[new ye(0,-1,0),new ye(0,-1,0),new ye(0,0,1),new ye(0,0,-1),new ye(0,-1,0),new ye(0,-1,0)],um=new bn,ro=new ye,Ad=new ye;function oM(s,e,t){let r=new mo;const o=new Gt,l=new Gt,d=new Sn,f=new yy,g=new Sy,m={},b=t.maxTextureSize,y={[As]:$n,[$n]:As,[Wi]:Wi},h=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:iM,fragmentShader:rM}),w=h.clone();w.defines.HORIZONTAL_PASS=1;const S=new fr;S.setAttribute("position",new Ts(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Rn(S,h),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kl;let _=this.type;this.render=function(R,E,L){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||R.length===0)return;this.type===a_&&(Rt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Kl);const q=s.getRenderTarget(),W=s.getActiveCubeFace(),j=s.getActiveMipmapLevel(),H=s.state;H.setBlending(ma),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const X=_!==this.type;X&&E.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(Q=>Q.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,Q=R.length;F<Q;F++){const ue=R[F],Y=ue.shadow;if(Y===void 0){Rt("WebGLShadowMap:",ue,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;o.copy(Y.mapSize);const se=Y.getFrameExtents();o.multiply(se),l.copy(Y.mapSize),(o.x>b||o.y>b)&&(o.x>b&&(l.x=Math.floor(b/se.x),o.x=l.x*se.x,Y.mapSize.x=l.x),o.y>b&&(l.y=Math.floor(b/se.y),o.y=l.y*se.y,Y.mapSize.y=l.y));const G=s.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=G,Y.map===null||X===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===so){if(ue.isPointLight){Rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new lr(o.x,o.y,{format:Rs,type:ur,minFilter:fi,magFilter:fi,generateMipmaps:!1}),Y.map.texture.name=ue.name+".shadowMap",Y.map.depthTexture=new ya(o.x,o.y,sr),Y.map.depthTexture.name=ue.name+".shadowMapDepth",Y.map.depthTexture.format=is,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Wn,Y.map.depthTexture.magFilter=Wn}else ue.isPointLight?(Y.map=new Of(o.x),Y.map.depthTexture=new $m(o.x,cr)):(Y.map=new lr(o.x,o.y),Y.map.depthTexture=new ya(o.x,o.y,cr)),Y.map.depthTexture.name=ue.name+".shadowMap",Y.map.depthTexture.format=is,this.type===Kl?(Y.map.depthTexture.compareFunction=G?Um:zm,Y.map.depthTexture.minFilter=fi,Y.map.depthTexture.magFilter=fi):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Wn,Y.map.depthTexture.magFilter=Wn);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==o.x||Y.map.height!==o.y)&&Y.map.setSize(o.x,o.y);const Z=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();ue.isPointLight!==!0&&Y.updateMatrices(ue,L);const z=(Y.camera.layers.mask&4294967294)!==0?Y.camera.layers:L.layers;for(let I=0;I<Z;I++){const oe=Y.getCamera(I);if(ue.isPointLight){const O=Y.camera,ne=Y.matrix,ie=ue.distance||O.far;ie!==O.far&&(O.far=ie,O.updateProjectionMatrix()),ro.setFromMatrixPosition(ue.matrixWorld),O.position.copy(ro),Ad.copy(O.position),Ad.add(sM[I]),O.up.copy(aM[I]),O.lookAt(Ad),O.updateMatrixWorld(),ne.makeTranslation(-ro.x,-ro.y,-ro.z),um.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(um,O.coordinateSystem,O.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)s.setRenderTarget(Y.map,I),s.clear();else{I===0&&(s.setRenderTarget(Y.map),s.clear());const O=Y.getViewport(I);d.set(l.x*O.x,l.y*O.y,l.x*O.z,l.y*O.w),H.viewport(d)}r=Y.getFrustum(I),D(E,L,oe,ue,z,this.type)}Y.isPointLightShadow!==!0&&this.type===so&&P(Y,L),Y.needsUpdate=!1}_=this.type,v.needsUpdate=!1,s.setRenderTarget(q,W,j)};function P(R,E){const L=e.update(M);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,w.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,w.needsUpdate=!0),R.mapPass===null?R.mapPass=new lr(o.x,o.y,{format:Rs,type:ur}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),h.uniforms.shadow_pass.value=R.map.depthTexture,h.uniforms.resolution.value.set(R.map.width,R.map.height),h.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(E,null,L,h,M,null),w.uniforms.shadow_pass.value=R.mapPass.texture,w.uniforms.resolution.value.set(R.map.width,R.map.height),w.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(E,null,L,w,M,null)}function k(R,E,L,q){let W=null;const j=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(j!==void 0)W=j;else if(W=L.isPointLight===!0?g:f,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const H=W.uuid,X=E.uuid;let F=m[H];F===void 0&&(F={},m[H]=F);let Q=F[X];Q===void 0&&(Q=W.clone(),F[X]=Q,E.addEventListener("dispose",U)),W=Q}if(W.visible=E.visible,W.wireframe=E.wireframe,q===so?W.side=E.shadowSide!==null?E.shadowSide:E.side:W.side=E.shadowSide!==null?E.shadowSide:y[E.side],W.alphaMap=E.alphaMap,W.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,W.map=E.map,W.clipShadows=E.clipShadows,W.clippingPlanes=E.clippingPlanes,W.clipIntersection=E.clipIntersection,W.displacementMap=E.displacementMap,W.displacementScale=E.displacementScale,W.displacementBias=E.displacementBias,W.wireframeLinewidth=E.wireframeLinewidth,W.linewidth=E.linewidth,L.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const H=s.properties.get(W);H.light=L}return W}function D(R,E,L,q,W,j){if(R.visible===!1)return;if(R.layers.test(W)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&j===so)&&(!R.frustumCulled||R.intersectsFrustum(r))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const F=e.update(R),Q=R.material;if(Array.isArray(Q)){const ue=F.groups;for(let Y=0,se=ue.length;Y<se;Y++){const G=ue[Y],Z=Q[G.materialIndex];if(Z&&Z.visible){const z=k(R,Z,q,j);R.onBeforeShadow(s,R,E,L,F,z,G),s.renderBufferDirect(L,null,F,z,R,G),R.onAfterShadow(s,R,E,L,F,z,G)}}}else if(Q.visible){const ue=k(R,Q,q,j);R.onBeforeShadow(s,R,E,L,F,ue,null),s.renderBufferDirect(L,null,F,ue,R,null),R.onAfterShadow(s,R,E,L,F,ue,null)}}const X=R.children;for(let F=0,Q=X.length;F<Q;F++)D(X[F],E,L,q,W,j)}function U(R){R.target.removeEventListener("dispose",U);for(const L in m){const q=m[L],W=R.target.uuid;W in q&&(q[W].dispose(),delete q[W])}}}function lM(s,e){function t(){let $=!1;const Ae=new Sn;let we=null;const Re=new Sn(0,0,0,0);return{setMask:function(ve){we!==ve&&!$&&(s.colorMask(ve,ve,ve,ve),we=ve)},setLocked:function(ve){$=ve},setClear:function(ve,Ce,He,nt,Pe){Pe===!0&&(ve*=nt,Ce*=nt,He*=nt),Ae.set(ve,Ce,He,nt),Re.equals(Ae)===!1&&(s.clearColor(ve,Ce,He,nt),Re.copy(Ae))},reset:function(){$=!1,we=null,Re.set(-1,0,0,0)}}}function r(){let $=!1,Ae=!1,we=null,Re=null,ve=null;return{setReversed:function(Ce){if(Ae!==Ce){const He=e.get("EXT_clip_control");Ce?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Ae=Ce;const nt=ve;ve=null,this.setClear(nt)}},getReversed:function(){return Ae},setTest:function(Ce){Ce?me(s.DEPTH_TEST):he(s.DEPTH_TEST)},setMask:function(Ce){we!==Ce&&!$&&(s.depthMask(Ce),we=Ce)},setFunc:function(Ce){if(Ae&&(Ce=B_[Ce]),Re!==Ce){switch(Ce){case Pd:s.depthFunc(s.NEVER);break;case Dd:s.depthFunc(s.ALWAYS);break;case Ld:s.depthFunc(s.LESS);break;case uo:s.depthFunc(s.LEQUAL);break;case Id:s.depthFunc(s.EQUAL);break;case kd:s.depthFunc(s.GEQUAL);break;case zd:s.depthFunc(s.GREATER);break;case Ud:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Re=Ce}},setLocked:function(Ce){$=Ce},setClear:function(Ce){ve!==Ce&&(ve=Ce,Ae&&(Ce=1-Ce),s.clearDepth(Ce))},reset:function(){$=!1,we=null,Re=null,ve=null,Ae=!1}}}function o(){let $=!1,Ae=null,we=null,Re=null,ve=null,Ce=null,He=null,nt=null,Pe=null;return{setTest:function(Je){$||(Je?me(s.STENCIL_TEST):he(s.STENCIL_TEST))},setMask:function(Je){Ae!==Je&&!$&&(s.stencilMask(Je),Ae=Je)},setFunc:function(Je,lt,Ge){(we!==Je||Re!==lt||ve!==Ge)&&(s.stencilFunc(Je,lt,Ge),we=Je,Re=lt,ve=Ge)},setOp:function(Je,lt,Ge){(Ce!==Je||He!==lt||nt!==Ge)&&(s.stencilOp(Je,lt,Ge),Ce=Je,He=lt,nt=Ge)},setLocked:function(Je){$=Je},setClear:function(Je){Pe!==Je&&(s.clearStencil(Je),Pe=Je)},reset:function(){$=!1,Ae=null,we=null,Re=null,ve=null,Ce=null,He=null,nt=null,Pe=null}}}const l=new t,d=new r,f=new o;let g={};const m=new WeakMap;let b={},y={},h={},w=new WeakMap,S=[],M=null,v=!1,_=null,P=null,k=null,D=null,U=null,R=null,E=null,L=new Ot(0,0,0),q=0,W=!1,j=null,H=null,X=null,F=null,Q=null;const ue=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,se=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(G)[1]),Y=se>=1):G.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),Y=se>=2);let Z=null,z={};const I=s.getParameter(s.SCISSOR_BOX),oe=s.getParameter(s.VIEWPORT),O=new Sn().fromArray(I),ne=new Sn().fromArray(oe);function ie($,Ae,we,Re){const ve=new Uint8Array(4),Ce=s.createTexture();s.bindTexture($,Ce),s.texParameteri($,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri($,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<we;He++)$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,Re,0,s.RGBA,s.UNSIGNED_BYTE,ve):s.texImage2D(Ae+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ve);return Ce}const Me={};Me[s.TEXTURE_2D]=ie(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=ie(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[s.TEXTURE_2D_ARRAY]=ie(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=ie(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),d.setClear(1),f.setClear(0),me(s.DEPTH_TEST),d.setFunc(uo),wt(!1),yt(x0),me(s.CULL_FACE),mt(ma);function me($){b[$]!==!0&&(s.enable($),b[$]=!0)}function he($){b[$]!==!1&&(s.disable($),b[$]=!1)}function Ye($,Ae){return h[$]!==Ae?(s.bindFramebuffer($,Ae),h[$]=Ae,$===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=Ae),$===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function $e($,Ae){let we=S,Re=!1;if($){we=w.get(Ae),we===void 0&&(we=[],w.set(Ae,we));const ve=$.textures;if(we.length!==ve.length||we[0]!==s.COLOR_ATTACHMENT0){for(let Ce=0,He=ve.length;Ce<He;Ce++)we[Ce]=s.COLOR_ATTACHMENT0+Ce;we.length=ve.length,Re=!0}}else we[0]!==s.BACK&&(we[0]=s.BACK,Re=!0);Re&&s.drawBuffers(we)}function Ne($){return M!==$?(s.useProgram($),M=$,!0):!1}const je={[ha]:s.FUNC_ADD,[l_]:s.FUNC_SUBTRACT,[c_]:s.FUNC_REVERSE_SUBTRACT};je[u_]=s.MIN,je[d_]=s.MAX;const qe={[f_]:s.ZERO,[h_]:s.ONE,[p_]:s.SRC_COLOR,[vm]:s.SRC_ALPHA,[y_]:s.SRC_ALPHA_SATURATE,[v_]:s.DST_COLOR,[g_]:s.DST_ALPHA,[m_]:s.ONE_MINUS_SRC_COLOR,[_m]:s.ONE_MINUS_SRC_ALPHA,[__]:s.ONE_MINUS_DST_COLOR,[x_]:s.ONE_MINUS_DST_ALPHA,[S_]:s.CONSTANT_COLOR,[b_]:s.ONE_MINUS_CONSTANT_COLOR,[w_]:s.CONSTANT_ALPHA,[M_]:s.ONE_MINUS_CONSTANT_ALPHA};function mt($,Ae,we,Re,ve,Ce,He,nt,Pe,Je){if($===ma){v===!0&&(he(s.BLEND),v=!1);return}if(v===!1&&(me(s.BLEND),v=!0),$!==o_){if($!==_||Je!==W){if((P!==ha||U!==ha)&&(s.blendEquation(s.FUNC_ADD),P=ha,U=ha),Je)switch($){case lo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Es:s.blendFunc(s.ONE,s.ONE);break;case v0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case _0:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Jt("WebGLState: Invalid blending: ",$);break}else switch($){case lo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case v0:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _0:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",$);break}k=null,D=null,R=null,E=null,L.set(0,0,0),q=0,_=$,W=Je}return}ve=ve||Ae,Ce=Ce||we,He=He||Re,(Ae!==P||ve!==U)&&(s.blendEquationSeparate(je[Ae],je[ve]),P=Ae,U=ve),(we!==k||Re!==D||Ce!==R||He!==E)&&(s.blendFuncSeparate(qe[we],qe[Re],qe[Ce],qe[He]),k=we,D=Re,R=Ce,E=He),(nt.equals(L)===!1||Pe!==q)&&(s.blendColor(nt.r,nt.g,nt.b,Pe),L.copy(nt),q=Pe),_=$,W=!1}function xt($,Ae){$.side===Wi?he(s.CULL_FACE):me(s.CULL_FACE);let we=$.side===$n;Ae&&(we=!we),wt(we),$.blending===lo&&$.transparent===!1?mt(ma):mt($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),d.setFunc($.depthFunc),d.setTest($.depthTest),d.setMask($.depthWrite),l.setMask($.colorWrite);const Re=$.stencilWrite;f.setTest(Re),Re&&(f.setMask($.stencilWriteMask),f.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),f.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),_e($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):he(s.SAMPLE_ALPHA_TO_COVERAGE)}function wt($){j!==$&&($?s.frontFace(s.CW):s.frontFace(s.CCW),j=$)}function yt($){$!==r_?(me(s.CULL_FACE),$!==H&&($===x0?s.cullFace(s.BACK):$===s_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):he(s.CULL_FACE),H=$}function kt($){$!==X&&(Y&&s.lineWidth($),X=$)}function _e($,Ae,we){$?(me(s.POLYGON_OFFSET_FILL),(F!==Ae||Q!==we)&&(F=Ae,Q=we,d.getReversed()&&(Ae=-Ae,we=-we),s.polygonOffset(Ae,we))):he(s.POLYGON_OFFSET_FILL)}function Lt($){$?me(s.SCISSOR_TEST):he(s.SCISSOR_TEST)}function cn($){$===void 0&&($=s.TEXTURE0+ue-1),Z!==$&&(s.activeTexture($),Z=$)}function gn($,Ae,we){we===void 0&&(Z===null?we=s.TEXTURE0+ue-1:we=Z);let Re=z[we];Re===void 0&&(Re={type:void 0,texture:void 0},z[we]=Re),(Re.type!==$||Re.texture!==Ae)&&(Z!==we&&(s.activeTexture(we),Z=we),s.bindTexture($,Ae||Me[$]),Re.type=$,Re.texture=Ae)}function ee(){const $=z[Z];$!==void 0&&$.type!==void 0&&(s.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function vn(){try{s.compressedTexImage2D(...arguments)}catch($){Jt("WebGLState:",$)}}function Et(){try{s.compressedTexImage3D(...arguments)}catch($){Jt("WebGLState:",$)}}function Bt(){try{s.texSubImage2D(...arguments)}catch($){Jt("WebGLState:",$)}}function Ie(){try{s.texSubImage3D(...arguments)}catch($){Jt("WebGLState:",$)}}function Kt(){try{s.compressedTexSubImage2D(...arguments)}catch($){Jt("WebGLState:",$)}}function ot(){try{s.compressedTexSubImage3D(...arguments)}catch($){Jt("WebGLState:",$)}}function Ze(){try{s.texStorage2D(...arguments)}catch($){Jt("WebGLState:",$)}}function N(){try{s.texStorage3D(...arguments)}catch($){Jt("WebGLState:",$)}}function T(){try{s.texImage2D(...arguments)}catch($){Jt("WebGLState:",$)}}function ae(){try{s.texImage3D(...arguments)}catch($){Jt("WebGLState:",$)}}function Le($){return y[$]!==void 0?y[$]:s.getParameter($)}function Ee($,Ae){y[$]!==Ae&&(s.pixelStorei($,Ae),y[$]=Ae)}function ke($){O.equals($)===!1&&(s.scissor($.x,$.y,$.z,$.w),O.copy($))}function ze($){ne.equals($)===!1&&(s.viewport($.x,$.y,$.z,$.w),ne.copy($))}function Se($,Ae){let we=m.get(Ae);we===void 0&&(we=new WeakMap,m.set(Ae,we));let Re=we.get($);Re===void 0&&(Re=s.getUniformBlockIndex(Ae,$.name),s.uniformBlockBinding(Ae,Re,Re),we.set($,Re))}function Te($,Ae,we){const ve=m.get(Ae).get($);g[ve]!==we&&(s.bindBufferBase(s.UNIFORM_BUFFER,ve,we),g[ve]=we)}function Oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),b={},y={},Z=null,z={},h={},g={},w=new WeakMap,S=[],M=null,v=!1,_=null,P=null,k=null,D=null,U=null,R=null,E=null,L=new Ot(0,0,0),q=0,W=!1,j=null,H=null,X=null,F=null,Q=null,O.set(0,0,s.canvas.width,s.canvas.height),ne.set(0,0,s.canvas.width,s.canvas.height),l.reset(),d.reset(),f.reset()}return{buffers:{color:l,depth:d,stencil:f},enable:me,disable:he,bindFramebuffer:Ye,drawBuffers:$e,useProgram:Ne,setBlending:mt,setMaterial:xt,setFlipSided:wt,setCullFace:yt,setLineWidth:kt,setPolygonOffset:_e,setScissorTest:Lt,activeTexture:cn,bindTexture:gn,unbindTexture:ee,compressedTexImage2D:vn,compressedTexImage3D:Et,texImage2D:T,texImage3D:ae,pixelStorei:Ee,getParameter:Le,updateUBOMapping:Se,uniformBlockBinding:Te,texStorage2D:Ze,texStorage3D:N,texSubImage2D:Bt,texSubImage3D:Ie,compressedTexSubImage2D:Kt,compressedTexSubImage3D:ot,scissor:ke,viewport:ze,reset:Oe}}function cM(s,e,t,r,o,l,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Gt,b=new WeakMap,y=new Set;let h;const w=new WeakMap,S=new Set,M=new FinalizationRegistry(N=>S.delete(N));let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(N,T){return v?new OffscreenCanvas(N,T):cc("canvas")}function P(N,T,ae){let Le=1;const Ee=Ze(N);if((Ee.width>ae||Ee.height>ae)&&(Le=ae/Math.max(Ee.width,Ee.height)),Le<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ke=Math.floor(Le*Ee.width),ze=Math.floor(Le*Ee.height);h===void 0&&(h=_(ke,ze));const Se=T?_(ke,ze):h;return Se.width=ke,Se.height=ze,Se.getContext("2d").drawImage(N,0,0,ke,ze),Rt("WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+ke+"x"+ze+")."),Se}else return"data"in N&&Rt("WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),N;return N}function k(N){return N.generateMipmaps}function D(N){s.generateMipmap(N)}function U(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function R(N,T,ae,Le,Ee,ke=!1){if(N!==null){if(s[N]!==void 0)return s[N];Rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ze;Le&&(ze=e.get("EXT_texture_norm16"),ze||Rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Se=T;if(T===s.RED&&(ae===s.FLOAT&&(Se=s.R32F),ae===s.HALF_FLOAT&&(Se=s.R16F),ae===s.UNSIGNED_BYTE&&(Se=s.R8),ae===s.UNSIGNED_SHORT&&ze&&(Se=ze.R16_EXT),ae===s.SHORT&&ze&&(Se=ze.R16_SNORM_EXT)),T===s.RED_INTEGER&&(ae===s.UNSIGNED_BYTE&&(Se=s.R8UI),ae===s.UNSIGNED_SHORT&&(Se=s.R16UI),ae===s.UNSIGNED_INT&&(Se=s.R32UI),ae===s.BYTE&&(Se=s.R8I),ae===s.SHORT&&(Se=s.R16I),ae===s.INT&&(Se=s.R32I)),T===s.RG&&(ae===s.FLOAT&&(Se=s.RG32F),ae===s.HALF_FLOAT&&(Se=s.RG16F),ae===s.UNSIGNED_BYTE&&(Se=s.RG8),ae===s.UNSIGNED_SHORT&&ze&&(Se=ze.RG16_EXT),ae===s.SHORT&&ze&&(Se=ze.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(ae===s.UNSIGNED_BYTE&&(Se=s.RG8UI),ae===s.UNSIGNED_SHORT&&(Se=s.RG16UI),ae===s.UNSIGNED_INT&&(Se=s.RG32UI),ae===s.BYTE&&(Se=s.RG8I),ae===s.SHORT&&(Se=s.RG16I),ae===s.INT&&(Se=s.RG32I)),T===s.RGB_INTEGER&&(ae===s.UNSIGNED_BYTE&&(Se=s.RGB8UI),ae===s.UNSIGNED_SHORT&&(Se=s.RGB16UI),ae===s.UNSIGNED_INT&&(Se=s.RGB32UI),ae===s.BYTE&&(Se=s.RGB8I),ae===s.SHORT&&(Se=s.RGB16I),ae===s.INT&&(Se=s.RGB32I)),T===s.RGBA_INTEGER&&(ae===s.UNSIGNED_BYTE&&(Se=s.RGBA8UI),ae===s.UNSIGNED_SHORT&&(Se=s.RGBA16UI),ae===s.UNSIGNED_INT&&(Se=s.RGBA32UI),ae===s.BYTE&&(Se=s.RGBA8I),ae===s.SHORT&&(Se=s.RGBA16I),ae===s.INT&&(Se=s.RGBA32I)),T===s.RGB&&(ae===s.UNSIGNED_SHORT&&ze&&(Se=ze.RGB16_EXT),ae===s.SHORT&&ze&&(Se=ze.RGB16_SNORM_EXT),ae===s.UNSIGNED_INT_5_9_9_9_REV&&(Se=s.RGB9_E5),ae===s.UNSIGNED_INT_10F_11F_11F_REV&&(Se=s.R11F_G11F_B10F)),T===s.RGBA){const Te=ke?lc:Wt.getTransfer(Ee);ae===s.FLOAT&&(Se=s.RGBA32F),ae===s.HALF_FLOAT&&(Se=s.RGBA16F),ae===s.UNSIGNED_BYTE&&(Se=Te===rn?s.SRGB8_ALPHA8:s.RGBA8),ae===s.UNSIGNED_SHORT&&ze&&(Se=ze.RGBA16_EXT),ae===s.SHORT&&ze&&(Se=ze.RGBA16_SNORM_EXT),ae===s.UNSIGNED_SHORT_4_4_4_4&&(Se=s.RGBA4),ae===s.UNSIGNED_SHORT_5_5_5_1&&(Se=s.RGB5_A1)}return(Se===s.R16F||Se===s.R32F||Se===s.RG16F||Se===s.RG32F||Se===s.RGBA16F||Se===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Se}function E(N,T){let ae;return N?T===null||T===cr||T===_a?ae=s.DEPTH24_STENCIL8:T===sr?ae=s.DEPTH32F_STENCIL8:T===ho&&(ae=s.DEPTH24_STENCIL8,Rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===cr||T===_a?ae=s.DEPTH_COMPONENT24:T===sr?ae=s.DEPTH_COMPONENT32F:T===ho&&(ae=s.DEPTH_COMPONENT16),ae}function L(N,T){return k(N)===!0||N.isFramebufferTexture&&N.minFilter!==Wn&&N.minFilter!==fi?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function q(N){const T=new WeakRef(N);r.get(N).__ref=T,S.add(T),M.register(N,T,T)}function W(N){const T=r.get(N).__ref;T!==void 0&&(S.delete(T),M.unregister(T))}function j(N){X(N.target)}function H(N){F(N.target)}function X(N){N.removeEventListener("dispose",j),W(N),ue(N),N.isVideoTexture&&b.delete(N),N.isHTMLTexture&&y.delete(N)}function F(N){N.removeEventListener("dispose",H),W(N),se(N)}function Q(){for(const N of S){const T=N.deref();T!==void 0&&(T.isRenderTarget===!0?F(T):X(T))}S.clear(),y.clear()}function ue(N){const T=r.get(N);if(T.__webglInit===void 0)return;const ae=N.source,Le=w.get(ae);if(Le){const Ee=Le[T.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&Y(N),Object.keys(Le).length===0&&w.delete(ae)}r.remove(N)}function Y(N){const T=r.get(N);s.deleteTexture(T.__webglTexture);const ae=N.source,Le=w.get(ae);delete Le[T.__cacheKey],d.memory.textures--}function se(N){const T=r.get(N);T.__depthDisposeCallback&&T.__depthDisposeCallback();const ae=N.depthTexture;if(ae&&ae.renderTarget===N&&X(ae),N.isWebGLCubeRenderTarget)for(let Ee=0;Ee<6;Ee++){if(Array.isArray(T.__webglFramebuffer[Ee]))for(let ke=0;ke<T.__webglFramebuffer[Ee].length;ke++)s.deleteFramebuffer(T.__webglFramebuffer[Ee][ke]);else s.deleteFramebuffer(T.__webglFramebuffer[Ee]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[Ee])}else{if(Array.isArray(T.__webglFramebuffer))for(let Ee=0;Ee<T.__webglFramebuffer.length;Ee++)s.deleteFramebuffer(T.__webglFramebuffer[Ee]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Ee=0;Ee<T.__webglColorRenderbuffer.length;Ee++)T.__webglColorRenderbuffer[Ee]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[Ee]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Le=N.textures;for(let Ee=0,ke=Le.length;Ee<ke;Ee++){const ze=r.get(Le[Ee]);ze.__webglTexture&&(s.deleteTexture(ze.__webglTexture),d.memory.textures--),r.remove(Le[Ee])}r.remove(N)}let G=0;function Z(){G=0}function z(){return G}function I(N){G=N}function oe(){const N=G;return N>=o.maxTextures&&Rt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+o.maxTextures),G+=1,N}function O(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.mipmapsAutoUpdate),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function ne(N,T){const ae=r.get(N);if(N.isVideoTexture&&Kt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&ae.__version!==N.version){const Le=N.image;if(Le===null)Rt("WebGLRenderer: Texture marked for update but no image data found.");else if(Le.complete===!1)Rt("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(ae,N,T);return}}else N.isExternalTexture&&(ae.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ae.__webglTexture,s.TEXTURE0+T)}function ie(N,T){const ae=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&ae.__version!==N.version){xt(ae,N,T);return}else N.isExternalTexture&&(ae.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ae.__webglTexture,s.TEXTURE0+T)}function Me(N,T){const ae=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&ae.__version!==N.version){xt(ae,N,T);return}t.bindTexture(s.TEXTURE_3D,ae.__webglTexture,s.TEXTURE0+T)}function me(N,T){const ae=r.get(N);if(N.version>0&&ae.__version!==N.version){wt(ae,N,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture,s.TEXTURE0+T)}const he={[va]:s.REPEAT,[di]:s.CLAMP_TO_EDGE,[Fd]:s.MIRRORED_REPEAT},Ye={[Wn]:s.NEAREST,[C_]:s.NEAREST_MIPMAP_NEAREST,[Cl]:s.NEAREST_MIPMAP_LINEAR,[fi]:s.LINEAR,[nd]:s.LINEAR_MIPMAP_NEAREST,[ts]:s.LINEAR_MIPMAP_LINEAR},$e={[P_]:s.NEVER,[Fm]:s.ALWAYS,[D_]:s.LESS,[zm]:s.LEQUAL,[L_]:s.EQUAL,[Um]:s.GEQUAL,[I_]:s.GREATER,[k_]:s.NOTEQUAL};function Ne(N,T){if(T.type===sr&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===fi||T.magFilter===nd||T.magFilter===Cl||T.magFilter===ts||T.minFilter===fi||T.minFilter===nd||T.minFilter===Cl||T.minFilter===ts)&&Rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,he[T.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,he[T.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,he[T.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,Ye[T.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,Ye[T.minFilter]),T.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,$e[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Wn||T.minFilter!==Cl&&T.minFilter!==ts||T.type===sr&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const ae=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function je(N,T){let ae=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",j),q(T));const Le=T.source;let Ee=w.get(Le);Ee===void 0&&(Ee={},w.set(Le,Ee));const ke=O(T);if(ke!==N.__cacheKey){Ee[ke]===void 0&&(Ee[ke]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,ae=!0),Ee[ke].usedTimes++;const ze=Ee[N.__cacheKey];ze!==void 0&&(Ee[N.__cacheKey].usedTimes--,ze.usedTimes===0&&Y(T)),N.__cacheKey=ke,N.__webglTexture=Ee[ke].texture}return ae}function qe(N,T,ae){return Math.floor(Math.floor(N/ae)/T)}function mt(N,T,ae,Le){const ke=N.updateRanges;if(ke.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,ae,Le,T.data);else{ke.sort(($,Ae)=>$.start-Ae.start);let ze=0;for(let $=1;$<ke.length;$++){const Ae=ke[ze],we=ke[$],Re=Ae.start+Ae.count,ve=qe(we.start,T.width,4),Ce=qe(Ae.start,T.width,4);we.start<=Re+1&&ve===Ce&&qe(we.start+we.count-1,T.width,4)===ve?Ae.count=Math.max(Ae.count,we.start+we.count-Ae.start):(++ze,ke[ze]=we)}ke.length=ze+1;const Se=t.getParameter(s.UNPACK_ROW_LENGTH),Te=t.getParameter(s.UNPACK_SKIP_PIXELS),Oe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let $=0,Ae=ke.length;$<Ae;$++){const we=ke[$],Re=Math.floor(we.start/4),ve=Math.ceil(we.count/4),Ce=Re%T.width,He=Math.floor(Re/T.width),nt=ve,Pe=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ce),t.pixelStorei(s.UNPACK_SKIP_ROWS,He),t.texSubImage2D(s.TEXTURE_2D,0,Ce,He,nt,Pe,ae,Le,T.data)}N.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,Se),t.pixelStorei(s.UNPACK_SKIP_PIXELS,Te),t.pixelStorei(s.UNPACK_SKIP_ROWS,Oe)}}function xt(N,T,ae){let Le=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Le=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Le=s.TEXTURE_3D);const Ee=je(N,T),ke=T.source;t.bindTexture(Le,N.__webglTexture,s.TEXTURE0+ae);const ze=r.get(ke);if(ke.version!==ze.__version||Ee===!0){if(t.activeTexture(s.TEXTURE0+ae),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const Pe=Wt.getPrimaries(Wt.workingColorSpace),Je=T.colorSpace===es?null:Wt.getPrimaries(T.colorSpace),lt=T.colorSpace===es||Pe===Je?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt)}t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let Te=P(T.image,!1,o.maxTextureSize);Te=ot(T,Te);const Oe=l.convert(T.format,T.colorSpace),$=l.convert(T.type);let Ae=R(T.internalFormat,Oe,$,T.normalized,T.colorSpace,T.isVideoTexture);Ne(Le,T);let we;const Re=T.mipmaps,ve=T.isVideoTexture!==!0,Ce=ze.__version===void 0||Ee===!0,He=ke.dataReady,nt=L(T,Te);if(T.isDepthTexture)Ae=E(T.format===ns,T.type),Ce&&(ve?t.texStorage2D(s.TEXTURE_2D,1,Ae,Te.width,Te.height):t.texImage2D(s.TEXTURE_2D,0,Ae,Te.width,Te.height,0,Oe,$,null));else if(T.isDataTexture)if(Re.length>0){ve&&Ce&&t.texStorage2D(s.TEXTURE_2D,nt,Ae,Re[0].width,Re[0].height);for(let Pe=0,Je=Re.length;Pe<Je;Pe++)we=Re[Pe],ve?He&&t.texSubImage2D(s.TEXTURE_2D,Pe,0,0,we.width,we.height,Oe,$,we.data):t.texImage2D(s.TEXTURE_2D,Pe,Ae,we.width,we.height,0,Oe,$,we.data);T.generateMipmaps=!1}else ve?(Ce&&t.texStorage2D(s.TEXTURE_2D,nt,Ae,Te.width,Te.height),He&&mt(T,Te,Oe,$)):t.texImage2D(s.TEXTURE_2D,0,Ae,Te.width,Te.height,0,Oe,$,Te.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ve&&Ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,nt,Ae,Re[0].width,Re[0].height,Te.depth);for(let Pe=0,Je=Re.length;Pe<Je;Pe++)if(we=Re[Pe],T.format!==ar)if(Oe!==null)if(ve){if(He)if(T.layerUpdates.size>0){const lt=j0(we.width,we.height,T.format,T.type);for(const Ge of T.layerUpdates){const St=we.data.subarray(Ge*lt/we.data.BYTES_PER_ELEMENT,(Ge+1)*lt/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Pe,0,0,Ge,we.width,we.height,1,Oe,St)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Pe,0,0,0,we.width,we.height,Te.depth,Oe,we.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Pe,Ae,we.width,we.height,Te.depth,0,we.data,0,0);else Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ve?He&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Pe,0,0,0,we.width,we.height,Te.depth,Oe,$,we.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Pe,Ae,we.width,we.height,Te.depth,0,Oe,$,we.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{ve&&Ce&&t.texStorage2D(s.TEXTURE_2D,nt,Ae,Re[0].width,Re[0].height);for(let Pe=0,Je=Re.length;Pe<Je;Pe++)we=Re[Pe],T.format!==ar?Oe!==null?ve?He&&t.compressedTexSubImage2D(s.TEXTURE_2D,Pe,0,0,we.width,we.height,Oe,we.data):t.compressedTexImage2D(s.TEXTURE_2D,Pe,Ae,we.width,we.height,0,we.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ve?He&&t.texSubImage2D(s.TEXTURE_2D,Pe,0,0,we.width,we.height,Oe,$,we.data):t.texImage2D(s.TEXTURE_2D,Pe,Ae,we.width,we.height,0,Oe,$,we.data)}else if(T.isDataArrayTexture)if(ve){if(Ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,nt,Ae,Te.width,Te.height,Te.depth),He)if(T.layerUpdates.size>0){const Pe=j0(Te.width,Te.height,T.format,T.type);for(const Je of T.layerUpdates){const lt=Te.data.subarray(Je*Pe/Te.data.BYTES_PER_ELEMENT,(Je+1)*Pe/Te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Je,Te.width,Te.height,1,Oe,$,lt)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Oe,$,Te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ae,Te.width,Te.height,Te.depth,0,Oe,$,Te.data);else if(T.isData3DTexture)ve?(Ce&&t.texStorage3D(s.TEXTURE_3D,nt,Ae,Te.width,Te.height,Te.depth),He&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Oe,$,Te.data)):t.texImage3D(s.TEXTURE_3D,0,Ae,Te.width,Te.height,Te.depth,0,Oe,$,Te.data);else if(T.isFramebufferTexture){if(Ce)if(ve)t.texStorage2D(s.TEXTURE_2D,nt,Ae,Te.width,Te.height);else{let Pe=Te.width,Je=Te.height;for(let lt=0;lt<nt;lt++)t.texImage2D(s.TEXTURE_2D,lt,Ae,Pe,Je,0,Oe,$,null),Pe>>=1,Je>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){const Pe=s.canvas;if(Pe.hasAttribute("layoutsubtree")||Pe.setAttribute("layoutsubtree","true"),Te.parentNode!==Pe){Pe.appendChild(Te),y.add(T),Pe.onpaint=Je=>{const lt=Je.changedElements;for(const Ge of y)lt.includes(Ge.image)&&(Ge.needsUpdate=!0)},Pe.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Te);else{const lt=s.RGBA,Ge=s.RGBA,St=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,lt,Ge,St,Te)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Re.length>0){if(ve&&Ce){const Pe=Ze(Re[0]);t.texStorage2D(s.TEXTURE_2D,nt,Ae,Pe.width,Pe.height)}for(let Pe=0,Je=Re.length;Pe<Je;Pe++)we=Re[Pe],ve?He&&t.texSubImage2D(s.TEXTURE_2D,Pe,0,0,Oe,$,we):t.texImage2D(s.TEXTURE_2D,Pe,Ae,Oe,$,we);T.generateMipmaps=!1}else if(ve){if(Ce){const Pe=Ze(Te);t.texStorage2D(s.TEXTURE_2D,nt,Ae,Pe.width,Pe.height)}He&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,$,Te)}else t.texImage2D(s.TEXTURE_2D,0,Ae,Oe,$,Te);k(T)&&T.mipmapsAutoUpdate===!0&&D(Le),ze.__version=ke.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function wt(N,T,ae){if(T.image.length!==6)return;const Le=je(N,T),Ee=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+ae);const ke=r.get(Ee);if(Ee.version!==ke.__version||Le===!0){t.activeTexture(s.TEXTURE0+ae);const ze=Wt.getPrimaries(Wt.workingColorSpace),Se=T.colorSpace===es?null:Wt.getPrimaries(T.colorSpace),Te=T.colorSpace===es||ze===Se?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Oe=T.isCompressedTexture||T.image[0].isCompressedTexture,$=T.image[0]&&T.image[0].isDataTexture,Ae=[];for(let Ge=0;Ge<6;Ge++)!Oe&&!$?Ae[Ge]=P(T.image[Ge],!0,o.maxCubemapSize):Ae[Ge]=$?T.image[Ge].image:T.image[Ge],Ae[Ge]=ot(T,Ae[Ge]);const we=Ae[0],Re=l.convert(T.format,T.colorSpace),ve=l.convert(T.type);let Ce=R(T.internalFormat,Re,ve,T.normalized,T.colorSpace);const He=T.isVideoTexture!==!0,nt=ke.__version===void 0||Le===!0,Pe=Ee.dataReady;let Je=L(T,we);Ne(s.TEXTURE_CUBE_MAP,T);let lt;if(T.isDepthTexture){if(Ce=E(T.format===ns,T.type),nt)if(He)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Ce,we.width,we.height);else for(let Ge=0;Ge<6;Ge++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,Ce,we.width,we.height,0,Re,ve,null)}else if(Oe){He&&nt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Je,Ce,we.width,we.height);for(let Ge=0;Ge<6;Ge++){lt=Ae[Ge].mipmaps;for(let St=0;St<lt.length;St++){const Ht=lt[St];T.format!==ar?Re!==null?He?Pe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,St,0,0,Ht.width,Ht.height,Re,Ht.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,St,Ce,Ht.width,Ht.height,0,Ht.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?Pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,St,0,0,Ht.width,Ht.height,Re,ve,Ht.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,St,Ce,Ht.width,Ht.height,0,Re,ve,Ht.data)}}}else{if(lt=T.mipmaps,He&&nt){lt.length>0&&Je++;const Ge=Ze(Ae[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Je,Ce,Ge.width,Ge.height)}for(let Ge=0;Ge<6;Ge++)if($){He?Pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,0,0,Ae[Ge].width,Ae[Ge].height,Re,ve,Ae[Ge].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,Ce,Ae[Ge].width,Ae[Ge].height,0,Re,ve,Ae[Ge].data);for(let St=0;St<lt.length;St++){const tn=lt[St].image[Ge].image;He?Pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,St+1,0,0,tn.width,tn.height,Re,ve,tn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,St+1,Ce,tn.width,tn.height,0,Re,ve,tn.data)}}else{He?Pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,0,0,Re,ve,Ae[Ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,Ce,Re,ve,Ae[Ge]);for(let St=0;St<lt.length;St++){const Ht=lt[St];He?Pe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,St+1,0,0,Re,ve,Ht.image[Ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,St+1,Ce,Re,ve,Ht.image[Ge])}}}k(T)&&T.mipmapsAutoUpdate===!0&&D(s.TEXTURE_CUBE_MAP),ke.__version=Ee.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function yt(N,T,ae,Le,Ee,ke){const ze=l.convert(ae.format,ae.colorSpace),Se=l.convert(ae.type),Te=R(ae.internalFormat,ze,Se,ae.normalized,ae.colorSpace),Oe=r.get(T),$=r.get(ae);if($.__renderTarget=T,!Oe.__hasExternalTextures){const Ae=Math.max(1,T.width>>ke),we=Math.max(1,T.height>>ke);Ee===s.TEXTURE_3D||Ee===s.TEXTURE_2D_ARRAY?t.texImage3D(Ee,ke,Te,Ae,we,T.depth,0,ze,Se,null):t.texImage2D(Ee,ke,Te,Ae,we,0,ze,Se,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),Ie(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Le,Ee,$.__webglTexture,0,Bt(T)):(Ee===s.TEXTURE_2D||Ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Le,Ee,$.__webglTexture,ke),t.bindFramebuffer(s.FRAMEBUFFER,null)}function kt(N,T,ae){if(s.bindRenderbuffer(s.RENDERBUFFER,N),T.depthBuffer){const Le=T.depthTexture,Ee=Le&&Le.isDepthTexture?Le.type:null,ke=E(T.stencilBuffer,Ee),ze=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ie(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Bt(T),ke,T.width,T.height):ae?s.renderbufferStorageMultisample(s.RENDERBUFFER,Bt(T),ke,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ke,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ze,s.RENDERBUFFER,N)}else{const Le=T.textures;for(let Ee=0;Ee<Le.length;Ee++){const ke=Le[Ee],ze=l.convert(ke.format,ke.colorSpace),Se=l.convert(ke.type),Te=R(ke.internalFormat,ze,Se,ke.normalized,ke.colorSpace);Ie(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Bt(T),Te,T.width,T.height):ae?s.renderbufferStorageMultisample(s.RENDERBUFFER,Bt(T),Te,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Te,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function _e(N,T,ae){const Le=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Ee=r.get(T.depthTexture);Ee.__renderTarget=T;const ke=Le?T.depthTexture.image[0]:T.depthTexture.image;(!Ee.__webglTexture||ke.width!==T.width||ke.height!==T.height)&&(ke.width=T.width,ke.height=T.height,T.depthTexture.needsUpdate=!0),Le?me(T.depthTexture,0):ne(T.depthTexture,0);const ze=Ee.__webglTexture,Se=Bt(T),Te=Le?s.TEXTURE_CUBE_MAP_POSITIVE_X+ae:s.TEXTURE_2D,Oe=T.depthTexture.format===ns?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===is)Ie(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Oe,Te,ze,0,Se):s.framebufferTexture2D(s.FRAMEBUFFER,Oe,Te,ze,0);else if(T.depthTexture.format===ns)Ie(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Oe,Te,ze,0,Se):s.framebufferTexture2D(s.FRAMEBUFFER,Oe,Te,ze,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Lt(N){const T=r.get(N),ae=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const Le=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Le){const Ee=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Le.removeEventListener("dispose",Ee)};Le.addEventListener("dispose",Ee),T.__depthDisposeCallback=Ee}T.__boundDepthTexture=Le}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(ae)for(let Le=0;Le<6;Le++)_e(T.__webglFramebuffer[Le],N,Le);else N.texture.mipmaps.length>0?_e(T.__webglFramebuffer[0],N,0):_e(T.__webglFramebuffer,N,0);else if(ae){T.__webglDepthbuffer=[];for(let Le=0;Le<6;Le++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[Le]),T.__webglDepthbuffer[Le]===void 0)T.__webglDepthbuffer[Le]=s.createRenderbuffer(),kt(T.__webglDepthbuffer[Le],N,!1);else{const Ee=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ke=T.__webglDepthbuffer[Le];s.bindRenderbuffer(s.RENDERBUFFER,ke),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,ke)}}else if(N.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),kt(T.__webglDepthbuffer,N,!1);else{const Ee=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ke=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ke),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ee,s.RENDERBUFFER,ke)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function cn(N,T,ae){const Le=r.get(N);T!==void 0&&yt(Le.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ae!==void 0&&Lt(N)}function gn(N){const T=N.texture,ae=r.get(N),Le=r.get(T);N.addEventListener("dispose",H),q(N);const Ee=N.textures,ke=N.isWebGLCubeRenderTarget===!0,ze=Ee.length>1;if(ze||(Le.__webglTexture===void 0&&(Le.__webglTexture=s.createTexture()),Le.__version=T.version,d.memory.textures++),ke){ae.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(T.mipmaps.length>0){ae.__webglFramebuffer[Se]=[];for(let Te=0;Te<T.mipmaps.length;Te++)ae.__webglFramebuffer[Se][Te]=s.createFramebuffer()}else ae.__webglFramebuffer[Se]=s.createFramebuffer()}else{if(T.mipmaps.length>0){ae.__webglFramebuffer=[];for(let Se=0;Se<T.mipmaps.length;Se++)ae.__webglFramebuffer[Se]=s.createFramebuffer()}else ae.__webglFramebuffer=s.createFramebuffer();if(ze)for(let Se=0,Te=Ee.length;Se<Te;Se++){const Oe=r.get(Ee[Se]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=s.createTexture(),d.memory.textures++)}if(N.samples>0&&Ie(N)===!1){ae.__webglMultisampledFramebuffer=s.createFramebuffer(),ae.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let Se=0;Se<Ee.length;Se++){const Te=Ee[Se];ae.__webglColorRenderbuffer[Se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ae.__webglColorRenderbuffer[Se]);const Oe=l.convert(Te.format,Te.colorSpace),$=l.convert(Te.type),Ae=R(Te.internalFormat,Oe,$,Te.normalized,Te.colorSpace,N.isXRRenderTarget===!0),we=Bt(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,we,Ae,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Se,s.RENDERBUFFER,ae.__webglColorRenderbuffer[Se])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(ae.__webglDepthRenderbuffer=s.createRenderbuffer(),kt(ae.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ke){t.bindTexture(s.TEXTURE_CUBE_MAP,Le.__webglTexture),Ne(s.TEXTURE_CUBE_MAP,T);for(let Se=0;Se<6;Se++)if(T.mipmaps.length>0)for(let Te=0;Te<T.mipmaps.length;Te++)yt(ae.__webglFramebuffer[Se][Te],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Te);else yt(ae.__webglFramebuffer[Se],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);k(T)?D(s.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(ze){for(let Se=0,Te=Ee.length;Se<Te;Se++){const Oe=Ee[Se],$=r.get(Oe);let Ae=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ae=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ae,$.__webglTexture),Ne(Ae,Oe),yt(ae.__webglFramebuffer,N,Oe,s.COLOR_ATTACHMENT0+Se,Ae,0),k(Oe)&&D(Ae)}t.unbindTexture()}else{let Se=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Se=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Se,Le.__webglTexture),Ne(Se,T),T.mipmaps.length>0)for(let Te=0;Te<T.mipmaps.length;Te++)yt(ae.__webglFramebuffer[Te],N,T,s.COLOR_ATTACHMENT0,Se,Te);else yt(ae.__webglFramebuffer,N,T,s.COLOR_ATTACHMENT0,Se,0);k(T)?D(Se):T.mipmaps.length>0&&s.texParameteri(Se,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}N.depthBuffer&&Lt(N)}function ee(N){const T=N.textures;for(let ae=0,Le=T.length;ae<Le;ae++){const Ee=T[ae];if(k(Ee)&&Ee.mipmapsAutoUpdate===!0){const ke=U(N),ze=r.get(Ee).__webglTexture;t.bindTexture(ke,ze),D(ke),t.unbindTexture()}}}const vn=[];function Et(N){if(N.samples>0){if(Ie(N)===!1){const T=N.textures,ae=N.width,Le=N.height;let Ee=s.COLOR_BUFFER_BIT;const ke=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ze=r.get(N),Se=T.length>1;if(Se)for(let Oe=0;Oe<T.length;Oe++)t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer),N.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Oe=0;Oe<T.length;Oe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Ee|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Ee|=s.STENCIL_BUFFER_BIT)),Se){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ze.__webglColorRenderbuffer[Oe]);const $=r.get(T[Oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$,0)}s.blitFramebuffer(0,0,ae,Le,0,0,ae,Le,Ee,s.NEAREST),g===!0&&(vn.length=0,vn.push(s.COLOR_ATTACHMENT0+Oe),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&vn.push(ke),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,vn))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Se)for(let Oe=0;Oe<T.length;Oe++){t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,ze.__webglColorRenderbuffer[Oe]);const $=r.get(T[Oe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,$,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&g){const T=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Bt(N){return Math.min(o.maxSamples,N.samples)}function Ie(N){const T=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Kt(N){const T=d.render.frame;b.get(N)!==T&&(b.set(N,T),N.update())}function ot(N,T){const ae=N.colorSpace,Le=N.format,Ee=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||ae!==oc&&ae!==es&&(Wt.getTransfer(ae)===rn?(Le!==ar||Ee!==Si)&&Rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",ae)),T}function Ze(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(m.width=N.naturalWidth||N.width,m.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(m.width=N.displayWidth,m.height=N.displayHeight):(m.width=N.width,m.height=N.height),m}this.allocateTextureUnit=oe,this.resetTextureUnits=Z,this.getTextureUnits=z,this.setTextureUnits=I,this.setTexture2D=ne,this.setTexture2DArray=ie,this.setTexture3D=Me,this.setTextureCube=me,this.rebindTextures=cn,this.setupRenderTarget=gn,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Ie,this.dispose=Q}function uM(s,e){function t(r,o=es){let l;const d=Wt.getTransfer(o);if(r===Si)return s.UNSIGNED_BYTE;if(r===Cf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Af)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Pm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Dm)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Rm)return s.BYTE;if(r===Nm)return s.SHORT;if(r===ho)return s.UNSIGNED_SHORT;if(r===Tf)return s.INT;if(r===cr)return s.UNSIGNED_INT;if(r===sr)return s.FLOAT;if(r===ur)return s.HALF_FLOAT;if(r===Lm)return s.ALPHA;if(r===Im)return s.RGB;if(r===ar)return s.RGBA;if(r===is)return s.DEPTH_COMPONENT;if(r===ns)return s.DEPTH_STENCIL;if(r===km)return s.RED;if(r===Rf)return s.RED_INTEGER;if(r===Rs)return s.RG;if(r===Nf)return s.RG_INTEGER;if(r===Pf)return s.RGBA_INTEGER;if(r===Zl||r===Jl||r===Ql||r===ec)if(d===rn)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Zl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ec)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Zl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Jl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ql)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ec)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Od||r===Bd||r===Hd||r===Gd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Od)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Bd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Hd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===jd||r===Vd||r===Wd||r===$d||r===Xd||r===sc||r===Yd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===jd||r===Vd)return d===rn?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Wd)return d===rn?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===$d)return l.COMPRESSED_R11_EAC;if(r===Xd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===sc)return l.COMPRESSED_RG11_EAC;if(r===Yd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===qd||r===Kd||r===Zd||r===Jd||r===Qd||r===ef||r===tf||r===nf||r===rf||r===sf||r===af||r===of||r===lf||r===cf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===qd)return d===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Kd)return d===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Zd)return d===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Jd)return d===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qd)return d===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ef)return d===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===tf)return d===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===nf)return d===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===rf)return d===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===sf)return d===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===af)return d===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===of)return d===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lf)return d===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===cf)return d===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===uf||r===df||r===ff)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===uf)return d===rn?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===df)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ff)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===hf||r===pf||r===ac||r===mf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===hf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===pf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ac)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===mf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===_a?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const dM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fM=`
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

}`;class hM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Xm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Di({vertexShader:dM,fragmentShader:fM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rn(new bo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pM extends Ns{constructor(e,t){super();const r=this;let o=null,l=1,d=null,f="local-floor",g=1,m=null,b=null,y=null,h=null,w=null,S=null;const M=typeof XRWebGLBinding<"u",v=new hM,_={},P=t.getContextAttributes();let k=null,D=null;const U=[],R=[],E=new Gt;let L=null,q=null;const W=new Vi;W.viewport=new Sn;const j=new Vi;j.viewport=new Sn;const H=[W,j],X=new Ty;let F=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let ne=U[O];return ne===void 0&&(ne=new dd,U[O]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(O){let ne=U[O];return ne===void 0&&(ne=new dd,U[O]=ne),ne.getGripSpace()},this.getHand=function(O){let ne=U[O];return ne===void 0&&(ne=new dd,U[O]=ne),ne.getHandSpace()};function ue(O){const ne=R.indexOf(O.inputSource);if(ne===-1)return;const ie=U[ne];ie!==void 0&&(ie.update(O.inputSource,O.frame,m||d),ie.dispatchEvent({type:O.type,data:O.inputSource}))}function Y(){o.removeEventListener("select",ue),o.removeEventListener("selectstart",ue),o.removeEventListener("selectend",ue),o.removeEventListener("squeeze",ue),o.removeEventListener("squeezestart",ue),o.removeEventListener("squeezeend",ue),o.removeEventListener("end",Y),o.removeEventListener("inputsourceschange",se);for(let O=0;O<U.length;O++){const ne=R[O];ne!==null&&(R[O]=null,U[O].disconnect(ne))}F=null,Q=null,v.reset();for(const O in _)delete _[O];if(e.setRenderTarget(k),w=null,h=null,y=null,o=null,D=null,oe.stop(),r.isPresenting=!1,e.setPixelRatio(L),e.setSize(E.width,E.height,!1),q!==null){const O=q.camera;O.fov=q.fov,O.zoom=q.zoom,O.updateProjectionMatrix(),q=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){l=O,r.isPresenting===!0&&Rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){f=O,r.isPresenting===!0&&Rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(O){m=O},this.getBaseLayer=function(){return h!==null?h:w},this.getBinding=function(){return y===null&&M&&(y=new XRWebGLBinding(o,t)),y},this.getFrame=function(){return S},this.getSession=function(){return o},this.setSession=async function(O){if(o=O,o!==null){if(k=e.getRenderTarget(),o.addEventListener("select",ue),o.addEventListener("selectstart",ue),o.addEventListener("selectend",ue),o.addEventListener("squeeze",ue),o.addEventListener("squeezestart",ue),o.addEventListener("squeezeend",ue),o.addEventListener("end",Y),o.addEventListener("inputsourceschange",se),P.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(E),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Me=null,me=null;P.depth&&(me=P.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=P.stencil?ns:is,Me=P.stencil?_a:cr);const he={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:l};y=this.getBinding(),h=y.createProjectionLayer(he),o.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),D=new lr(h.textureWidth,h.textureHeight,{format:ar,type:Si,depthTexture:new ya(h.textureWidth,h.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const ie={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:l};w=new XRWebGLLayer(o,t,ie),o.updateRenderState({baseLayer:w}),e.setPixelRatio(1),e.setSize(w.framebufferWidth,w.framebufferHeight,!1),D=new lr(w.framebufferWidth,w.framebufferHeight,{format:ar,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:w.ignoreDepthValues===!1,resolveStencilBuffer:w.ignoreDepthValues===!1,storeMultisampledDepthBuffer:w.ignoreDepthValues===!1,storeMultisampledStencilBuffer:w.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(g),m=null,d=await o.requestReferenceSpace(f),oe.setContext(o),oe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function se(O){for(let ne=0;ne<O.removed.length;ne++){const ie=O.removed[ne],Me=R.indexOf(ie);Me>=0&&(R[Me]=null,U[Me].disconnect(ie))}for(let ne=0;ne<O.added.length;ne++){const ie=O.added[ne];let Me=R.indexOf(ie);if(Me===-1){for(let he=0;he<U.length;he++)if(he>=R.length){R.push(ie),Me=he;break}else if(R[he]===null){R[he]=ie,Me=he;break}if(Me===-1)break}const me=U[Me];me&&me.connect(ie)}}function G(O,ne){ne===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(ne.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(o===null)return;let ne=O.near,ie=O.far;v.texture!==null&&(v.depthNear>0&&(ne=v.depthNear),v.depthFar>0&&(ie=v.depthFar)),X.near=j.near=W.near=ne,X.far=j.far=W.far=ie,(F!==X.near||Q!==X.far)&&(o.updateRenderState({depthNear:X.near,depthFar:X.far}),F=X.near,Q=X.far),X.layers.mask=O.layers.mask|6,W.layers.mask=X.layers.mask&-5,j.layers.mask=X.layers.mask&-3;const Me=O.parent,me=X.cameras;G(X,Me);for(let he=0;he<me.length;he++)G(me[he],Me);X.projectionMatrix.copy(W.projectionMatrix),X.projectionMatrixInverse.copy(W.projectionMatrixInverse),q===null&&O.isPerspectiveCamera&&(q={camera:O,fov:O.fov,zoom:O.zoom}),Z(O,X,Me)};function Z(O,ne,ie){ie===null?O.matrix.copy(ne.matrixWorld):(O.matrix.copy(ie.matrixWorld),O.matrix.invert(),O.matrix.multiply(ne.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(ne.projectionMatrix),O.projectionMatrixInverse.copy(ne.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=xf*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(h===null&&w===null))return g},this.setFoveation=function(O){g=O,h!==null&&(h.fixedFoveation=O),w!==null&&w.fixedFoveation!==void 0&&(w.fixedFoveation=O)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(X)},this.getCameraTexture=function(O){return _[O]};let z=null;function I(O,ne){if(b=ne.getViewerPose(m||d),S=ne,b!==null){const ie=b.views;w!==null&&(e.setRenderTargetFramebuffer(D,w.framebuffer),e.setRenderTarget(D));let Me=!1;ie.length!==X.cameras.length&&(X.cameras.length=0,Me=!0);for(let $e=0;$e<ie.length;$e++){const Ne=ie[$e];let je=null;if(w!==null)je=w.getViewport(Ne);else{const mt=y.getViewSubImage(h,Ne);je=mt.viewport,$e===0&&(e.setRenderTargetTextures(D,mt.colorTexture,mt.depthStencilTexture),e.setRenderTarget(D))}let qe=H[$e];qe===void 0&&(qe=new Vi,qe.layers.enable($e),qe.viewport=new Sn,H[$e]=qe),qe.matrix.fromArray(Ne.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(Ne.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(je.x,je.y,je.width,je.height),$e===0&&(X.matrix.copy(qe.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Me===!0&&X.cameras.push(qe)}const me=o.enabledFeatures;if(me&&me.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&M){y=r.getBinding();const $e=y.getDepthInformation(ie[0]);$e&&$e.isValid&&$e.texture&&v.init($e,o.renderState)}if(me&&me.includes("camera-access")&&M){e.state.unbindTexture(),y=r.getBinding();for(let $e=0;$e<ie.length;$e++){const Ne=ie[$e].camera;if(Ne){let je=_[Ne];je||(je=new Xm,_[Ne]=je);const qe=y.getCameraImage(Ne);je.sourceTexture=qe}}}}for(let ie=0;ie<U.length;ie++){const Me=R[ie],me=U[ie];Me!==null&&me!==void 0&&me.update(Me,ne,m||d)}z&&z(O,ne),ne.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ne}),S=null}const oe=new Jm;oe.setAnimationLoop(I),this.setAnimationLoop=function(O){z=O},this.dispose=function(){}}}const mM=new bn,lg=new Dt;lg.set(-1,0,0,0,1,0,0,0,1);function gM(s,e){function t(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function r(v,_){_.color.getRGB(v.fogColor.value,Ym(s)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function o(v,_,P,k,D){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?l(v,_):_.isMeshLambertMaterial?(l(v,_),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(l(v,_),y(v,_)):_.isMeshPhongMaterial?(l(v,_),b(v,_),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(l(v,_),h(v,_),_.isMeshPhysicalMaterial&&w(v,_,D)):_.isMeshMatcapMaterial?(l(v,_),S(v,_)):_.isMeshDepthMaterial?l(v,_):_.isMeshDistanceMaterial?(l(v,_),M(v,_)):_.isMeshNormalMaterial?l(v,_):_.isLineBasicMaterial?(d(v,_),_.isLineDashedMaterial&&f(v,_)):_.isPointsMaterial?g(v,_,P,k):_.isSpriteMaterial?m(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,t(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,t(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===$n&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,t(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===$n&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,t(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,t(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const P=e.get(_),k=P.envMap,D=P.envMapRotation;k&&(v.envMap.value=k,v.envMapRotation.value.setFromMatrix4(mM.makeRotationFromEuler(D)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(lg),v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,v.aoMapTransform))}function d(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,t(_.map,v.mapTransform))}function f(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function g(v,_,P,k){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*P,v.scale.value=k*.5,_.map&&(v.map.value=_.map,t(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function m(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,t(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function b(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function y(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function h(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function w(v,_,P){v.ior.value=_.ior,_.diffuseRoughness>0&&(v.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(v.diffuseRoughnessMap.value=_.diffuseRoughnessMap,t(_.diffuseRoughnessMap,v.diffuseRoughnessMapTransform))),_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===$n&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.retroreflectivity>0&&(v.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,v.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=P.texture,v.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,v.specularIntensityMapTransform))}function S(v,_){_.matcap&&(v.matcap.value=_.matcap)}function M(v,_){const P=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(P.matrixWorld),v.nearDistance.value=P.shadow.camera.near,v.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function xM(s,e,t,r){let o={},l={};function d(P,k){const D=k.program;r.uniformBlockBinding(P,D,o[P.id])}function f(P,k){let D=o[P.id];D===void 0&&(S(P),D=g(P),o[P.id]=D,P.addEventListener("dispose",v));const U=k.program;r.updateUBOMapping(P,U);const R=e.render.frame;l[P.id]!==R&&(m(P),l[P.id]=R)}function g(P){const k=s.createBuffer(),D=P.__size,U=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,k),s.bufferData(s.UNIFORM_BUFFER,D,U),s.bindBuffer(s.UNIFORM_BUFFER,null),k}function m(P){const k=o[P.id],D=P.uniforms,U=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,k);for(let R=0,E=D.length;R<E;R++){const L=D[R];if(Array.isArray(L))for(let q=0,W=L.length;q<W;q++)b(L[q],R,q,U);else b(L,R,0,U)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function b(P,k,D,U){if(h(P,k,D,U)===!0){const R=P.__offset,E=P.value;if(Array.isArray(E)){let L=0;for(let q=0;q<E.length;q++){const W=E[q],j=M(W,!0);y(W,P.__data,L),L+=j.storage/Float32Array.BYTES_PER_ELEMENT}}else y(E,P.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,R,P.__data)}}function y(P,k,D){typeof P=="number"||typeof P=="boolean"?k[D]=P:P.isMatrix3?(k[D]=P.elements[0],k[D+1]=P.elements[1],k[D+2]=P.elements[2],k[D+3]=0,k[D+4]=P.elements[3],k[D+5]=P.elements[4],k[D+6]=P.elements[5],k[D+7]=0,k[D+8]=P.elements[6],k[D+9]=P.elements[7],k[D+10]=P.elements[8],k[D+11]=0):ArrayBuffer.isView(P)?k.set(P.subarray(0,k.length-D),D):P.toArray(k,D)}function h(P,k,D,U){const R=P.value,E=k+"_"+D;if(Array.isArray(R)){U[E]===void 0&&(U[E]=[]);const L=U[E];let q=!1;for(let W=0;W<R.length;W++)w(R[W],L,W)===!0&&(q=!0);return q}return w(R,U,E)}function w(P,k,D){if(k[D]===void 0)return typeof P=="number"||typeof P=="boolean"?k[D]=P:ArrayBuffer.isView(P)?k[D]=P.slice():k[D]=P.clone(),!0;{const U=k[D];if(typeof P=="number"||typeof P=="boolean"){if(U!==P)return k[D]=P,!0}else{if(ArrayBuffer.isView(P))return!0;if(U.equals(P)===!1)return U.copy(P),!0}}return!1}function S(P){const k=P.uniforms;let D=0;const U=16;for(let E=0,L=k.length;E<L;E++){const q=Array.isArray(k[E])?k[E]:[k[E]];for(let W=0,j=q.length;W<j;W++){const H=q[W],X=Array.isArray(H.value)?H.value:[H.value],F=Array.isArray(k[E])||Array.isArray(H.value);let Q=D;for(let Y=0,se=X.length;Y<se;Y++){const G=X[Y],Z=M(G,F),z=D%U,I=z%Z.boundary,oe=z+I;D+=I,oe!==0&&U-oe<Z.storage&&(D+=U-oe),Y===0&&(Q=D),D+=Z.storage}const ue=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new ue((D-Q)/Float32Array.BYTES_PER_ELEMENT),H.__offset=Q}}const R=D%U;return R>0&&(D+=U-R),P.__size=D,P.__cache={},this}function M(P,k){const D={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(D.boundary=4,D.storage=4):P.isVector2?(D.boundary=8,D.storage=8):P.isVector3||P.isColor?(D.boundary=16,D.storage=12):P.isVector4?(D.boundary=16,D.storage=16):P.isMatrix3?(D.boundary=16,D.storage=48):P.isMatrix4?(D.boundary=16,D.storage=64):P.isTexture?Rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(P)?(D.boundary=16,D.storage=P.byteLength):Rt("WebGLRenderer: Unsupported uniform value type.",P),k===!0&&(D.boundary=16,D.storage=Math.ceil(D.storage/16)*16),D}function v(P){const k=P.target;k.removeEventListener("dispose",v),s.deleteBuffer(o[k.id]),delete o[k.id],delete l[k.id]}function _(){for(const P in o)s.deleteBuffer(o[P]);o={},l={}}return{bind:d,update:f,dispose:_}}const vM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let tr=null;function _M(){return tr===null&&(tr=new hy(vM,16,16,Rs,ur),tr.name="DFG_LUT",tr.minFilter=fi,tr.magFilter=fi,tr.wrapS=di,tr.wrapT=di,tr.generateMipmaps=!1,tr.needsUpdate=!0),tr}class yM{constructor(e={}){const{canvas:t=F_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:m=!1,powerPreference:b="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:h=!1,outputBufferType:w=Si}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=d;const M=w,v=new Set([Pf,Nf,Rf]),_=new Set([Si,cr,ho,_a,Cf,Af]),P=new Uint32Array(4),k=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]};let U=null,R=null;const E=[],L=[];let q=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const W=this;let j=!1,H=null,X=null,F=null,Q=null;this._outputColorSpace=yi;let ue=0,Y=0,se=null,G=-1,Z=null;const z=new Sn,I=new Sn;let oe=null;const O=new Ot(0);let ne=0,ie=t.width,Me=t.height,me=1,he=null,Ye=null;const $e=new Sn(0,0,ie,Me),Ne=new Sn(0,0,ie,Me);let je=!1;const qe=new mo,mt=new kf;let xt=!1,wt=!1;const yt=new bn,kt=new ye,_e=new Sn,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let cn=!1;function gn(){return se===null?me:1}let ee=r;function vn(A,K){return t.getContext(A,K)}let Et,Bt,Ie,Kt,ot,Ze,N,T,ae,Le,Ee,ke,ze,Se,Te,Oe,$,Ae,we,Re,ve,Ce,He;try{const A={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:g,preserveDrawingBuffer:m,powerPreference:b,failIfMajorPerformanceCaveat:y};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ef}`),t.addEventListener("webglcontextlost",Je,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",Ge,!1),ee===null){const K="webgl2";if(ee=vn(K,A),ee===null)throw vn(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(A){throw t.removeEventListener("webglcontextlost",Je,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",Ge,!1),Jt("WebGLRenderer: "+A.message),A}function nt(){Et=new wb(ee),Et.init(),ve=new uM(ee,Et),Bt=new fb(ee,Et,e,ve),Ie=new lM(ee,Et),Bt.reversedDepthBuffer&&h&&Ie.buffers.depth.setReversed(!0),X=ee.createFramebuffer(),F=ee.createFramebuffer(),Q=ee.createFramebuffer(),Kt=new Tb(ee),ot=new Yw,Ze=new cM(ee,Et,Ie,ot,Bt,ve,Kt),N=new bb(W),T=new Ay(ee),Ce=new ub(ee,T),ae=new Mb(ee,T,Kt,Ce),Le=new Ab(ee,ae,T,Ce,Kt),Ae=new Cb(ee,Bt,Ze),Te=new hb(ot),Ee=new Xw(W,N,Et,Bt,Ce,Te),ke=new gM(W,ot),ze=new Kw,Se=new nM(Et),$=new cb(W,N,Ie,Le,S,g),Oe=new oM(W,Le,Bt),He=new xM(ee,Kt,Bt,Ie),we=new db(ee,Et,Kt),Re=new Eb(ee,Et,Kt),Kt.programs=Ee.programs,W.capabilities=Bt,W.extensions=Et,W.properties=ot,W.renderLists=ze,W.shadowMap=Oe,W.state=Ie,W.info=Kt}M!==Si&&(q=new Nb(M,t.width,t.height,f,o,l));const Pe=new pM(W,ee);this.xr=Pe,this.getContext=function(){return ee},this.getContextAttributes=function(){return ee.getContextAttributes()},this.forceContextLoss=function(){const A=Et.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Et.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(A){A!==void 0&&(me=A,this.setSize(ie,Me,!1))},this.getSize=function(A){return A.set(ie,Me)},this.setSize=function(A,K,ge=!0){if(Pe.isPresenting){Rt("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=A,Me=K,t.width=Math.floor(A*me),t.height=Math.floor(K*me),ge===!0&&(t.style.width=A+"px",t.style.height=K+"px"),q!==null&&q.setSize(t.width,t.height),this.setViewport(0,0,A,K)},this.getDrawingBufferSize=function(A){return A.set(ie*me,Me*me).floor()},this.setDrawingBufferSize=function(A,K,ge){ie=A,Me=K,me=ge,t.width=Math.floor(A*ge),t.height=Math.floor(K*ge),this.setViewport(0,0,A,K)},this.setEffects=function(A){if(M===Si){Jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let K=0;K<A.length;K++)if(A[K].isOutputPass===!0){Rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}q.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy($e)},this.setViewport=function(A,K,ge,de){A.isVector4?$e.set(A.x,A.y,A.z,A.w):$e.set(A,K,ge,de),Ie.viewport(z.copy($e).multiplyScalar(gn()).round())},this.getScissor=function(A){return A.copy(Ne)},this.setScissor=function(A,K,ge,de){A.isVector4?Ne.set(A.x,A.y,A.z,A.w):Ne.set(A,K,ge,de),Ie.scissor(I.copy(Ne).multiplyScalar(gn()).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(A){Ie.setScissorTest(je=A)},this.setOpaqueSort=function(A){he=A},this.setTransparentSort=function(A){Ye=A},this.getClearColor=function(A){return A.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor(...arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha(...arguments)},this.clear=function(A=!0,K=!0,ge=!0){let de=0;if(A){let ce=!1;if(se!==null){const Xe=se.texture.format;ce=v.has(Xe)}if(ce){const Xe=se.texture.type,tt=_.has(Xe),Ve=$.getClearColor(),Ke=$.getClearAlpha(),rt=Ve.r,gt=Ve.g,Mt=Ve.b;tt?(P[0]=rt,P[1]=gt,P[2]=Mt,P[3]=Ke,ee.clearBufferuiv(ee.COLOR,0,P)):(k[0]=rt,k[1]=gt,k[2]=Mt,k[3]=Ke,ee.clearBufferiv(ee.COLOR,0,k))}else de|=ee.COLOR_BUFFER_BIT}K&&(de|=ee.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ge&&(de|=ee.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),de!==0&&ee.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),H=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Je,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",Ge,!1),$.dispose(),ze.dispose(),Se.dispose(),Ze.dispose(),ot.dispose(),N.dispose(),Le.dispose(),ae.dispose(),Ce.dispose(),He.dispose(),Ee.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",Nn),Pe.removeEventListener("sessionend",En),sn.stop()};function Je(A){A.preventDefault(),b0("WebGLRenderer: Context Lost."),j=!0}function lt(){b0("WebGLRenderer: Context Restored."),j=!1;const A=Kt.autoReset,K=Oe.enabled,ge=Oe.autoUpdate,de=Oe.needsUpdate,ce=Oe.type;nt(),Kt.autoReset=A,Oe.enabled=K,Oe.autoUpdate=ge,Oe.needsUpdate=de,Oe.type=ce}function Ge(A){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function St(A){const K=A.target;K.removeEventListener("dispose",St),Ht(K)}function Ht(A){tn(A),ot.remove(A)}function tn(A){const K=ot.get(A).programs;K!==void 0&&(K.forEach(function(ge){Ee.releaseProgram(ge)}),A.isShaderMaterial&&Ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,K,ge,de,ce,Xe){K===null&&(K=Lt);const tt=ce.isMesh&&ce.matrixWorld.determinantAffine()<0,Ve=bi(A,K,ge,de,ce);Ie.setMaterial(de,tt);let Ke=ge.index,rt=1;if(de.wireframe===!0){if(Ke=ae.getWireframeAttribute(ge),Ke===void 0)return;rt=2}const gt=ge.drawRange,Mt=ge.attributes.position;let st=gt.start*rt,Pt=(gt.start+gt.count)*rt;Xe!==null&&(st=Math.max(st,Xe.start*rt),Pt=Math.min(Pt,(Xe.start+Xe.count)*rt)),Ke!==null?(st=Math.max(st,0),Pt=Math.min(Pt,Ke.count)):Mt!=null&&(st=Math.max(st,0),Pt=Math.min(Pt,Mt.count));const on=Pt-st;if(on<0||on===1/0)return;Ce.setup(ce,de,Ve,ge,Ke);let jt,Yt=we;if(Ke!==null&&(jt=T.get(Ke),Yt=Re,Yt.setIndex(jt)),ce.isMesh)de.wireframe===!0?(Ie.setLineWidth(de.wireframeLinewidth*gn()),Yt.setMode(ee.LINES)):Yt.setMode(ee.TRIANGLES);else if(ce.isLine){let ln=de.linewidth;ln===void 0&&(ln=1),Ie.setLineWidth(ln*gn()),ce.isLineSegments?Yt.setMode(ee.LINES):ce.isLineLoop?Yt.setMode(ee.LINE_LOOP):Yt.setMode(ee.LINE_STRIP)}else ce.isPoints?Yt.setMode(ee.POINTS):ce.isSprite&&Yt.setMode(ee.TRIANGLES);if(ce.isBatchedMesh)if(Et.get("WEBGL_multi_draw"))Yt.renderMultiDraw(ce._multiDrawStarts,ce._multiDrawCounts,ce._multiDrawCount);else{const ln=ce._multiDrawStarts,at=ce._multiDrawCounts,te=ce._multiDrawCount,fe=Ke?T.get(Ke).bytesPerElement:1,B=ot.get(de).currentProgram.getUniforms();for(let De=0;De<te;De++)B.setValue(ee,"_gl_DrawID",De),Yt.render(ln[De]/fe,at[De])}else if(ce.isInstancedMesh)Yt.renderInstances(st,on,ce.count);else if(ge.isInstancedBufferGeometry){const ln=ge._maxInstanceCount!==void 0?ge._maxInstanceCount:1/0,at=Math.min(ge.instanceCount,ln);Yt.renderInstances(st,on,at)}else Yt.render(st,on)};function wn(A,K,ge,de){H!==null&&A.isNodeMaterial&&H.setObject(de,A),xt===!0&&Te.setState(A,ge,!1),A.transparent===!0&&A.side===Wi&&A.forceSinglePass===!1?(A.side=$n,A.needsUpdate=!0,kn(A,K,de),A.side=As,A.needsUpdate=!0,kn(A,K,de),A.side=Wi):kn(A,K,de)}this.compile=function(A,K,ge=null){ge===null&&(ge=A),H!==null&&H.renderStart(A,K,ge),R=Se.get(ge),R.init(K),L.push(R),ge.traverseVisible(function(ce){ce.isLight&&ce.layers.test(K.layers)&&(R.pushLight(ce),ce.castShadow&&R.pushShadow(ce))}),A!==ge&&A.traverseVisible(function(ce){ce.isLight&&ce.layers.test(K.layers)&&(R.pushLight(ce),ce.castShadow&&R.pushShadow(ce))}),R.setupLights(),H!==null&&H.updateLights(R.state.lightsArray),wt=this.localClippingEnabled,xt=Te.init(this.clippingPlanes,wt),xt===!0&&Te.setGlobalState(this.clippingPlanes,K),H!==null&&Oe.render(R.state.shadowsArray,ge,K);const de=new Set;return A.traverse(function(ce){if(!(ce.isMesh||ce.isPoints||ce.isLine||ce.isSprite))return;const Xe=ce.material;if(Xe)if(Array.isArray(Xe))for(let tt=0;tt<Xe.length;tt++){const Ve=Xe[tt];wn(Ve,ge,K,ce),de.add(Ve)}else wn(Xe,ge,K,ce),de.add(Xe)}),R=L.pop(),H!==null&&H.renderEnd(),de},this.compileAsync=function(A,K,ge=null){const de=this.compile(A,K,ge);return new Promise(ce=>{function Xe(){if(de.forEach(function(tt){const Ke=ot.get(tt).currentProgram;(Ke===void 0||Ke.isReady())&&de.delete(tt)}),de.size===0){ce(A);return}setTimeout(Xe,10)}Et.get("KHR_parallel_shader_compile")!==null?Xe():setTimeout(Xe,10)})};let fn=null;function Qt(A){fn&&fn(A)}function Nn(){sn.stop()}function En(){sn.start()}const sn=new Jm;sn.setAnimationLoop(Qt),typeof self<"u"&&sn.setContext(self),this.setAnimationLoop=function(A){fn=A,Pe.setAnimationLoop(A),A===null?sn.stop():sn.start()},Pe.addEventListener("sessionstart",Nn),Pe.addEventListener("sessionend",En),this.render=function(A,K){if(K!==void 0&&K.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;H!==null&&H.renderStart(A,K);const ge=Pe.enabled===!0&&Pe.isPresenting===!0,de=q!==null&&(se===null||ge)&&q.begin(W,se);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(q===null||q.isCompositing()===!1)&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(K),K=Pe.getCamera()),A.isScene===!0&&A.onBeforeRender(W,A,K,se),R=Se.get(A,L.length),R.init(K),R.state.textureUnits=Ze.getTextureUnits(),L.push(R),yt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),K.isArrayCamera?mt.setFromArrayCamera(K):qe.setFromProjectionMatrix(yt,Xi,K.reversedDepth),wt=this.localClippingEnabled,xt=Te.init(this.clippingPlanes,wt),U=ze.get(A,E.length),U.init(),E.push(U),this.info.render.frame++,Pe.enabled===!0&&Pe.isPresenting===!0){const tt=W.xr.getDepthSensingMesh();tt!==null&&bt(tt,K,-1/0,W.sortObjects)}bt(A,K,0,W.sortObjects),U.finish(),H!==null&&H.updateLights(R.state.lightsArray),W.sortObjects===!0&&U.sort(he,Ye),cn=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,cn&&$.addToRenderList(U,A),this.info.autoReset===!0&&this.info.reset(),xt===!0&&Te.beginShadows();const ce=R.state.shadowsArray;if(Oe.render(ce,A,K),xt===!0&&Te.endShadows(),(de&&q.hasRenderPass())===!1){const tt=U.opaque,Ve=U.transmissive;if(R.setupLights(),K.isArrayCamera){const Ke=K.cameras;if(Ve.length>0)for(let rt=0,gt=Ke.length;rt<gt;rt++){const Mt=Ke[rt];It(tt,Ve,A,Mt)}cn&&$.render(A);for(let rt=0,gt=Ke.length;rt<gt;rt++){const Mt=Ke[rt];Xt(U,A,Mt,Mt.viewport)}}else Ve.length>0&&It(tt,Ve,A,K),cn&&$.render(A),Xt(U,A,K)}se!==null&&Y===0&&(Ze.updateMultisampleRenderTarget(se),Ze.updateRenderTargetMipmap(se)),de&&q.end(W),A.isScene===!0&&A.onAfterRender(W,A,K),Ce.resetDefaultState(),G=-1,Z=null,L.pop(),L.length>0?(R=L[L.length-1],Ze.setTextureUnits(R.state.textureUnits),xt===!0&&Te.setGlobalState(W.clippingPlanes,R.state.camera)):R=null,E.pop(),E.length>0?U=E[E.length-1]:U=null,H!==null&&H.renderEnd()};function bt(A,K,ge,de){if(A.visible===!1)return;if(A.layers.test(K.layers)){if(A.isGroup)ge=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(K);else if(A.isLight)R.pushLight(A),A.castShadow&&R.pushShadow(A);else if(A.isSprite){const tt=K.isArrayCamera?mt:qe;if(!A.frustumCulled||A.intersectsFrustum(tt)){de&&_e.setFromMatrixPosition(A.matrixWorld).applyMatrix4(yt);const Ve=Le.update(A),Ke=A.material;Ke.visible&&U.push(A,Ve,Ke,ge,_e.z,null,K)}}else if(A.isMesh||A.isLine||A.isPoints){const tt=K.isArrayCamera?mt:qe;if(!A.frustumCulled||A.intersectsFrustum(tt)){const Ve=Le.update(A),Ke=A.material;if(de&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),_e.copy(A.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),_e.copy(Ve.boundingSphere.center)),_e.applyMatrix4(A.matrixWorld).applyMatrix4(yt)),Array.isArray(Ke)){const rt=Ve.groups;for(let gt=0,Mt=rt.length;gt<Mt;gt++){const st=rt[gt],Pt=Ke[st.materialIndex];Pt&&Pt.visible&&U.push(A,Ve,Pt,ge,_e.z,st,K)}}else Ke.visible&&U.push(A,Ve,Ke,ge,_e.z,null,K)}}}const Xe=A.children;for(let tt=0,Ve=Xe.length;tt<Ve;tt++)bt(Xe[tt],K,ge,de)}function Xt(A,K,ge,de){const{opaque:ce,transmissive:Xe,transparent:tt}=A;R.setupLightsView(ge),xt===!0&&Te.setGlobalState(W.clippingPlanes,ge),de&&Ie.viewport(z.copy(de)),ce.length>0&&an(ce,K,ge),Xe.length>0&&an(Xe,K,ge),tt.length>0&&an(tt,K,ge),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function It(A,K,ge,de){if((ge.isScene===!0?ge.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[de.id]===void 0){const st=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[de.id]=new lr(1,1,{generateMipmaps:!0,type:st?ur:Si,minFilter:ts,samples:Math.max(4,Bt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Wt.workingColorSpace})}const Xe=R.state.transmissionRenderTarget[de.id],tt=de.viewport||z;Xe.setSize(tt.z*W.transmissionResolutionScale,tt.w*W.transmissionResolutionScale);const Ve=W.getRenderTarget(),Ke=W.getActiveCubeFace(),rt=W.getActiveMipmapLevel();W.setRenderTarget(Xe),W.getClearColor(O),ne=W.getClearAlpha(),ne<1&&W.setClearColor(16777215,.5),W.clear(),cn&&$.render(ge);const gt=W.toneMapping;W.toneMapping=Nr;const Mt=de.viewport;if(de.viewport!==void 0&&(de.viewport=void 0),R.setupLightsView(de),xt===!0&&Te.setGlobalState(W.clippingPlanes,de),an(A,ge,de),Ze.updateMultisampleRenderTarget(Xe),Ze.updateRenderTargetMipmap(Xe),Et.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Pt=0,on=K.length;Pt<on;Pt++){const jt=K[Pt],{object:Yt,geometry:ln,material:at,group:te}=jt;if(at.side===Wi&&Yt.layers.test(de.layers)){const fe=at.side;at.side=$n,at.needsUpdate=!0,un(Yt,ge,de,ln,at,te),at.side=fe,at.needsUpdate=!0,st=!0}}st===!0&&(Ze.updateMultisampleRenderTarget(Xe),Ze.updateRenderTargetMipmap(Xe))}W.setRenderTarget(Ve,Ke,rt),W.setClearColor(O,ne),Mt!==void 0&&(de.viewport=Mt),W.toneMapping=gt}function an(A,K,ge){const de=K.isScene===!0?K.overrideMaterial:null;for(let ce=0,Xe=A.length;ce<Xe;ce++){const tt=A[ce],{object:Ve,geometry:Ke,group:rt}=tt;let gt=tt.material;gt.allowOverride===!0&&de!==null&&(gt=de),Ve.layers.test(ge.layers)&&un(Ve,K,ge,Ke,gt,rt)}}function un(A,K,ge,de,ce,Xe){H!==null&&ce.isNodeMaterial&&H.setObject(A,ce),A.onBeforeRender(W,K,ge,de,ce,Xe),A.modelViewMatrix.multiplyMatrices(ge.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ce.onBeforeRender(W,K,ge,de,A,Xe),ce.transparent===!0&&ce.side===Wi&&ce.forceSinglePass===!1?(ce.side=$n,ce.needsUpdate=!0,W.renderBufferDirect(ge,K,de,ce,A,Xe),ce.side=As,ce.needsUpdate=!0,W.renderBufferDirect(ge,K,de,ce,A,Xe),ce.side=Wi):W.renderBufferDirect(ge,K,de,ce,A,Xe),A.onAfterRender(W,K,ge,de,ce,Xe)}function hi(A){let K=0;for(const ge of A)ge.texture!==null&&K++;return K}function kn(A,K,ge){K.isScene!==!0&&(K=Lt);const de=ot.get(A),ce=R.state.lights,Xe=R.state.shadowsArray,tt=ce.state.version,Ve=Ee.getParameters(A,ce.state,Xe,K,ge,R.state.lightProbeGridArray),Ke=Ee.getProgramCacheKey(Ve);let rt=de.programs;de.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?K.environment:null,de.fog=K.fog;const gt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;de.envMap=N.get(A.envMap||de.environment,gt),de.envMapRotation=de.environment!==null&&A.envMap===null?K.environmentRotation:A.envMapRotation,rt===void 0&&(A.addEventListener("dispose",St),rt=new Map,de.programs=rt,de.programVariants=new Map);let Mt=rt.get(Ke);if(Mt!==void 0){if(de.currentProgram===Mt&&de.lightsStateVersion===tt)return Dr(A,Ve),Mt}else Ve.uniforms=Ee.getUniforms(A),H!==null&&A.isNodeMaterial&&H.build(A,ge,Ve),A.onBeforeCompile(Ve,W),Mt=Ee.acquireProgram(Ve,Ke),rt.set(Ke,Mt),de.uniforms=Ve.uniforms;const st=de.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(st.clippingPlanes=Te.uniform),Dr(A,Ve),de.needsLights=ri(A),de.lightsStateVersion=tt,de.needsLights&&(st.ambientLightColor.value=ce.state.ambient,st.lightProbe.value=ce.state.probe,st.sunLights.value=ce.state.sun,st.sunLightShadows.value=ce.state.sunShadow,st.directionalLights.value=ce.state.directional,st.directionalLightShadows.value=ce.state.directionalShadow,st.spotLights.value=ce.state.spot,st.spotLightShadows.value=ce.state.spotShadow,st.rectAreaLights.value=ce.state.rectArea,st.ltc_1.value=ce.state.rectAreaLTC1,st.ltc_2.value=ce.state.rectAreaLTC2,st.pointLights.value=ce.state.point,st.pointLightShadows.value=ce.state.pointShadow,st.hemisphereLights.value=ce.state.hemi,st.sunShadowMatrix.value=ce.state.sunShadowMatrix,st.sunShadowCascade.value=ce.state.sunShadowCascade,st.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,st.spotLightMatrix.value=ce.state.spotLightMatrix,st.spotLightMap.value=ce.state.spotLightMap,st.pointShadowMatrix.value=ce.state.pointShadowMatrix),de.numLightProbeGrids=hi(R.state.lightProbeGridArray),de.currentProgram=Mt,de.uniformsList=null,Mt}function zn(A,K,ge,de,ce){const Xe=ot.get(A),tt=Xe.currentProgram.id+","+de+","+ce;let Ve=Xe.programVariants.get(tt);return Ve===void 0?(Ve=kn(A,K,ge),Xe.programVariants.set(tt,Ve)):(Xe.currentProgram=Ve,Xe.uniformsList=null,Xe.outputColorSpace=de,Xe.toneMapping=ce),Ve}function At(A){if(A.uniformsList===null){const K=A.currentProgram.getUniforms();A.uniformsList=ic.seqWithValue(K.seq,A.uniforms)}return A.uniformsList}function Dr(A,K){const ge=ot.get(A);ge.outputColorSpace=K.outputColorSpace,ge.batching=K.batching,ge.batchingColor=K.batchingColor,ge.instancing=K.instancing,ge.instancingColor=K.instancingColor,ge.instancingMorph=K.instancingMorph,ge.skinning=K.skinning,ge.morphTargets=K.morphTargets,ge.morphNormals=K.morphNormals,ge.morphColors=K.morphColors,ge.morphTargetsCount=K.morphTargetsCount,ge.numClippingPlanes=K.numClippingPlanes,ge.numIntersection=K.numClipIntersection,ge.vertexAlphas=K.vertexAlphas,ge.vertexTangents=K.vertexTangents,ge.toneMapping=K.toneMapping}function bi(A,K,ge,de,ce){K.isScene!==!0&&(K=Lt),Ze.resetTextureUnits();const Xe=K.fog,tt=de.isMeshStandardMaterial||de.isMeshLambertMaterial||de.isMeshPhongMaterial?K.environment:null,Ve=se===null?W.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Wt.workingColorSpace,Ke=de.isMeshStandardMaterial||de.isMeshLambertMaterial&&!de.envMap||de.isMeshPhongMaterial&&!de.envMap,rt=N.get(de.envMap||tt,Ke),gt=de.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,Mt=!!ge.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),st=!!ge.morphAttributes.position,Pt=!!ge.morphAttributes.normal,on=!!ge.morphAttributes.color;let jt=Nr;de.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(jt=W.toneMapping);const Yt=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,ln=Yt!==void 0?Yt.length:0,at=ot.get(de),te=R.state.lights;if(xt===!0&&(wt===!0||A!==Z)){const Tt=A===Z&&de.id===G;Te.setState(de,A,Tt)}let fe=!1,B=!1;de.version===at.__version?at.needsLights&&at.lightsStateVersion!==te.state.version||ce.isBatchedMesh&&at.batching===!1||!ce.isBatchedMesh&&at.batching===!0||ce.isBatchedMesh&&at.batchingColor===!0&&ce._colorsTexture===null||ce.isBatchedMesh&&at.batchingColor===!1&&ce._colorsTexture!==null||ce.isInstancedMesh&&at.instancing===!1||!ce.isInstancedMesh&&at.instancing===!0||ce.isSkinnedMesh&&at.skinning===!1||!ce.isSkinnedMesh&&at.skinning===!0||ce.isInstancedMesh&&at.instancingColor===!0&&ce.instanceColor===null||ce.isInstancedMesh&&at.instancingColor===!1&&ce.instanceColor!==null||ce.isInstancedMesh&&at.instancingMorph===!0&&ce.morphTexture===null||ce.isInstancedMesh&&at.instancingMorph===!1&&ce.morphTexture!==null||at.envMap!==rt||de.fog===!0&&at.fog!==Xe||at.numClippingPlanes!==void 0&&(at.numClippingPlanes!==Te.numPlanes||at.numIntersection!==Te.numIntersection)||at.vertexAlphas!==gt||at.vertexTangents!==Mt||at.morphTargets!==st||at.morphNormals!==Pt||at.morphColors!==on||at.morphTargetsCount!==ln||at.numLightProbeGrids!==hi(R.state.lightProbeGridArray)?fe=!0:(at.outputColorSpace!==Ve||at.toneMapping!==jt)&&(B=!0):(fe=!0,at.__version=de.version);let De=at.currentProgram;(fe===!0||B===!0)&&(De=B===!0?zn(de,K,ce,Ve,jt):kn(de,K,ce),H&&de.isNodeMaterial&&H.onUpdateProgram(de,De,at));let Qe=!1,ut=!1,Vt=!1;const pt=De.getUniforms(),nn=at.uniforms;if(Ie.useProgram(De.program)&&(Qe=!0,ut=!0,Vt=!0),de.id!==G&&(G=de.id,ut=!0),Qe||Z!==A){Ie.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),pt.setValue(ee,"projectionMatrix",A.projectionMatrix),pt.setValue(ee,"viewMatrix",A.matrixWorldInverse);const zt=pt.map.cameraPosition;zt!==void 0&&zt.setValue(ee,kt.setFromMatrixPosition(A.matrixWorld)),Bt.logarithmicDepthBuffer&&pt.setValue(ee,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&pt.setValue(ee,"isOrthographic",A.isOrthographicCamera===!0),Z!==A&&(Z=A,ut=!0,Vt=!0)}if(at.needsLights&&(te.state.sunShadowMap.length>0&&pt.setValue(ee,"sunShadowMap",te.state.sunShadowMap,Ze),te.state.directionalShadowMap.length>0&&pt.setValue(ee,"directionalShadowMap",te.state.directionalShadowMap,Ze),te.state.spotShadowMap.length>0&&pt.setValue(ee,"spotShadowMap",te.state.spotShadowMap,Ze),te.state.pointShadowMap.length>0&&pt.setValue(ee,"pointShadowMap",te.state.pointShadowMap,Ze)),ce.isSkinnedMesh){pt.setOptional(ee,ce,"bindMatrix"),pt.setOptional(ee,ce,"bindMatrixInverse");const Tt=ce.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),pt.setValue(ee,"boneTexture",Tt.boneTexture,Ze))}ce.isBatchedMesh&&(pt.setOptional(ee,ce,"batchingTexture"),pt.setValue(ee,"batchingTexture",ce._matricesTexture,Ze),pt.setOptional(ee,ce,"batchingIdTexture"),pt.setValue(ee,"batchingIdTexture",ce._indirectTexture,Ze),pt.setOptional(ee,ce,"batchingColorTexture"),ce._colorsTexture!==null&&pt.setValue(ee,"batchingColorTexture",ce._colorsTexture,Ze));const hn=ge.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Ae.update(ce,ge,De),(ut||at.receiveShadow!==ce.receiveShadow)&&(at.receiveShadow=ce.receiveShadow,pt.setValue(ee,"receiveShadow",ce.receiveShadow)),(de.isMeshStandardMaterial||de.isMeshLambertMaterial||de.isMeshPhongMaterial)&&de.envMap===null&&K.environment!==null&&(nn.envMapIntensity.value=K.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=_M()),ut){if(pt.setValue(ee,"toneMappingExposure",W.toneMappingExposure),at.needsLights&&wi(nn,Vt),Xe&&de.fog===!0&&ke.refreshFogUniforms(nn,Xe),ke.refreshMaterialUniforms(nn,de,me,Me,R.state.transmissionRenderTarget[A.id]),at.needsLights&&at.numLightProbeGrids>0){const Tt=D;let zt=0;for(const en of R.state.lightProbeGridArray)en.texture!==null&&(Tt.textures[zt]=en.texture,Tt.min[zt]=en.boundingBox.min,Tt.max[zt]=en.boundingBox.max,Tt.resolution[zt]=en.resolution,zt++);for(const en in Tt)Tt[en].length=zt;nn.probesSH.value=Tt.textures,nn.probesMin.value=Tt.min,nn.probesMax.value=Tt.max,nn.probesResolution.value=Tt.resolution}ic.upload(ee,At(at),nn,Ze)}if(de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(ic.upload(ee,At(at),nn,Ze),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&pt.setValue(ee,"center",ce.center),pt.setValue(ee,"modelViewMatrix",ce.modelViewMatrix),pt.setValue(ee,"normalMatrix",ce.normalMatrix),pt.setValue(ee,"modelMatrix",ce.matrixWorld),de.uniformsGroups!==void 0){const Tt=de.uniformsGroups;for(let zt=0,en=Tt.length;zt<en;zt++){const Un=Tt[zt];He.update(Un,De),He.bind(Un,De)}}return De}function wi(A,K){A.ambientLightColor.needsUpdate=K,A.lightProbe.needsUpdate=K,A.sunLights.needsUpdate=K,A.sunLightShadows.needsUpdate=K,A.directionalLights.needsUpdate=K,A.directionalLightShadows.needsUpdate=K,A.pointLights.needsUpdate=K,A.pointLightShadows.needsUpdate=K,A.spotLights.needsUpdate=K,A.spotLightShadows.needsUpdate=K,A.rectAreaLights.needsUpdate=K,A.hemisphereLights.needsUpdate=K}function ri(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(A,K,ge){const de=ot.get(A);de.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,de.__autoAllocateDepthBuffer===!1&&(de.__useRenderToTexture=!1),ot.get(A.texture).__webglTexture=K,ot.get(A.depthTexture).__webglTexture=de.__autoAllocateDepthBuffer?void 0:ge,de.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,K){const ge=ot.get(A);ge.__webglFramebuffer=K,ge.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(A,K=0,ge=0){se=A,ue=K,Y=ge;let de=null,ce=!1,Xe=!1;if(A){const Ve=ot.get(A);if(Ve.__useDefaultFramebuffer!==void 0){Ie.bindFramebuffer(ee.FRAMEBUFFER,Ve.__webglFramebuffer),z.copy(A.viewport),I.copy(A.scissor),oe=A.scissorTest,Ie.viewport(z),Ie.scissor(I),Ie.setScissorTest(oe),G=-1;return}else if(Ve.__webglFramebuffer===void 0)Ze.setupRenderTarget(A);else if(Ve.__hasExternalTextures)Ze.rebindTextures(A,ot.get(A.texture).__webglTexture,ot.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const gt=A.depthTexture;if(Ve.__boundDepthTexture!==gt){if(gt!==null&&ot.has(gt)&&(A.width!==gt.image.width||A.height!==gt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ze.setupDepthRenderbuffer(A)}}const Ke=A.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Xe=!0);const rt=ot.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(rt[K])?de=rt[K][ge]:de=rt[K],ce=!0):A.samples>0&&Ze.useMultisampledRTT(A)===!1?de=ot.get(A).__webglMultisampledFramebuffer:Array.isArray(rt)?de=rt[ge]:de=rt,z.copy(A.viewport),I.copy(A.scissor),oe=A.scissorTest}else z.copy($e).multiplyScalar(me).floor(),I.copy(Ne).multiplyScalar(me).floor(),oe=je;if(ge!==0&&(de=X),Ie.bindFramebuffer(ee.FRAMEBUFFER,de)&&Ie.drawBuffers(A,de),Ie.viewport(z),Ie.scissor(I),Ie.setScissorTest(oe),ce){const Ve=ot.get(A.texture);ee.framebufferTexture2D(ee.FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ve.__webglTexture,ge)}else if(Xe){const Ve=K;for(let Ke=0;Ke<A.textures.length;Ke++){const rt=ot.get(A.textures[Ke]);ee.framebufferTextureLayer(ee.FRAMEBUFFER,ee.COLOR_ATTACHMENT0+Ke,rt.__webglTexture,ge,Ve)}}else if(A!==null&&ge!==0){const Ve=ot.get(A.texture);ee.framebufferTexture2D(ee.FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_2D,Ve.__webglTexture,ge)}G=-1};function Yi(A){const K=ot.get(A);return(K.__readFormat!==A.format||K.__readType!==A.type)&&(K.__readFormat=A.format,K.__readType=A.type,K.__formatReadable=Bt.textureFormatReadable(A.format),K.__typeReadable=Bt.textureTypeReadable(A.type)),K}this.readRenderTargetPixels=function(A,K,ge,de,ce,Xe,tt,Ve=0){if(!(A&&A.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=ot.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&tt!==void 0&&(Ke=Ke[tt],Array.isArray(Ke)&&(Ke=Ke[0])),Ke){Ie.bindFramebuffer(ee.FRAMEBUFFER,Ke);try{const rt=A.textures[Ve],gt=rt.format,Mt=rt.type;A.textures.length>1&&ee.readBuffer(ee.COLOR_ATTACHMENT0+Ve);const st=Yi(rt);if(st.__formatReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(st.__typeReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=A.width-de&&ge>=0&&ge<=A.height-ce&&ee.readPixels(K,ge,de,ce,ve.convert(gt),ve.convert(Mt),Xe)}finally{const rt=se!==null?ot.get(se).__webglFramebuffer:null;Ie.bindFramebuffer(ee.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(A,K,ge,de,ce,Xe,tt,Ve=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=ot.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&tt!==void 0&&(Ke=Ke[tt],Array.isArray(Ke)&&(Ke=Ke[0])),Ke)if(K>=0&&K<=A.width-de&&ge>=0&&ge<=A.height-ce){Ie.bindFramebuffer(ee.FRAMEBUFFER,Ke);const rt=A.textures[Ve],gt=rt.format,Mt=rt.type;A.textures.length>1&&ee.readBuffer(ee.COLOR_ATTACHMENT0+Ve);const st=Yi(rt);if(st.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(st.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pt=ee.createBuffer();ee.bindBuffer(ee.PIXEL_PACK_BUFFER,Pt),ee.bufferData(ee.PIXEL_PACK_BUFFER,Xe.byteLength,ee.STREAM_READ),ee.readPixels(K,ge,de,ce,ve.convert(gt),ve.convert(Mt),0),ee.bindBuffer(ee.PIXEL_PACK_BUFFER,null);const on=se!==null?ot.get(se).__webglFramebuffer:null;Ie.bindFramebuffer(ee.FRAMEBUFFER,on);const jt=ee.fenceSync(ee.SYNC_GPU_COMMANDS_COMPLETE,0);return ee.flush(),await O_(ee,jt,4),ee.bindBuffer(ee.PIXEL_PACK_BUFFER,Pt),ee.getBufferSubData(ee.PIXEL_PACK_BUFFER,0,Xe),ee.bindBuffer(ee.PIXEL_PACK_BUFFER,null),ee.deleteBuffer(Pt),ee.deleteSync(jt),Xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,K=null,ge=0){const de=Math.pow(2,-ge),ce=Math.floor(A.image.width*de),Xe=Math.floor(A.image.height*de),tt=K!==null?K.x:0,Ve=K!==null?K.y:0;Ze.setTexture2D(A,0),ee.copyTexSubImage2D(ee.TEXTURE_2D,ge,0,0,tt,Ve,ce,Xe),Ie.unbindTexture()},this.copyTextureToTexture=function(A,K,ge=null,de=null,ce=0,Xe=0){let tt,Ve,Ke,rt,gt,Mt,st,Pt,on;const jt=A.isCompressedTexture?A.mipmaps[Xe]:A.image;if(ge!==null)tt=ge.max.x-ge.min.x,Ve=ge.max.y-ge.min.y,Ke=ge.isBox3?ge.max.z-ge.min.z:1,rt=ge.min.x,gt=ge.min.y,Mt=ge.isBox3?ge.min.z:0;else{const pt=Math.pow(2,-ce);tt=Math.floor(jt.width*pt),Ve=Math.floor(jt.height*pt),A.isDataArrayTexture?Ke=jt.depth:A.isData3DTexture?Ke=Math.floor(jt.depth*pt):Ke=1,rt=0,gt=0,Mt=0}de!==null?(st=de.x,Pt=de.y,on=de.z):(st=0,Pt=0,on=0);const Yt=ve.convert(K.format),ln=ve.convert(K.type);let at;K.isData3DTexture?(Ze.setTexture3D(K,0),at=ee.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(Ze.setTexture2DArray(K,0),at=ee.TEXTURE_2D_ARRAY):(Ze.setTexture2D(K,0),at=ee.TEXTURE_2D),Ie.activeTexture(ee.TEXTURE0),Ie.pixelStorei(ee.UNPACK_FLIP_Y_WEBGL,K.flipY),Ie.pixelStorei(ee.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),Ie.pixelStorei(ee.UNPACK_ALIGNMENT,K.unpackAlignment);const te=Ie.getParameter(ee.UNPACK_ROW_LENGTH),fe=Ie.getParameter(ee.UNPACK_IMAGE_HEIGHT),B=Ie.getParameter(ee.UNPACK_SKIP_PIXELS),De=Ie.getParameter(ee.UNPACK_SKIP_ROWS),Qe=Ie.getParameter(ee.UNPACK_SKIP_IMAGES);Ie.pixelStorei(ee.UNPACK_ROW_LENGTH,jt.width),Ie.pixelStorei(ee.UNPACK_IMAGE_HEIGHT,jt.height),Ie.pixelStorei(ee.UNPACK_SKIP_PIXELS,rt),Ie.pixelStorei(ee.UNPACK_SKIP_ROWS,gt),Ie.pixelStorei(ee.UNPACK_SKIP_IMAGES,Mt);const ut=A.isDataArrayTexture||A.isData3DTexture,Vt=K.isDataArrayTexture||K.isData3DTexture;if(A.isDepthTexture){const pt=ot.get(A),nn=ot.get(K),hn=ot.get(pt.__renderTarget),Tt=ot.get(nn.__renderTarget);Ie.bindFramebuffer(ee.READ_FRAMEBUFFER,hn.__webglFramebuffer),Ie.bindFramebuffer(ee.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let zt=0;zt<Ke;zt++)ut&&(ee.framebufferTextureLayer(ee.READ_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ot.get(A).__webglTexture,ce,Mt+zt),ee.framebufferTextureLayer(ee.DRAW_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ot.get(K).__webglTexture,Xe,on+zt)),ee.blitFramebuffer(rt,gt,rt+tt,gt+Ve,st,Pt,st+tt,Pt+Ve,ee.DEPTH_BUFFER_BIT,ee.NEAREST);Ie.bindFramebuffer(ee.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(ee.DRAW_FRAMEBUFFER,null)}else if(ce!==0||A.isRenderTargetTexture||ot.has(A)){const pt=ot.get(A),nn=ot.get(K);Ie.bindFramebuffer(ee.READ_FRAMEBUFFER,F),Ie.bindFramebuffer(ee.DRAW_FRAMEBUFFER,Q);for(let hn=0;hn<Ke;hn++)ut?ee.framebufferTextureLayer(ee.READ_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,pt.__webglTexture,ce,Mt+hn):ee.framebufferTexture2D(ee.READ_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_2D,pt.__webglTexture,ce),Vt?ee.framebufferTextureLayer(ee.DRAW_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,nn.__webglTexture,Xe,on+hn):ee.framebufferTexture2D(ee.DRAW_FRAMEBUFFER,ee.COLOR_ATTACHMENT0,ee.TEXTURE_2D,nn.__webglTexture,Xe),ce!==0?ee.blitFramebuffer(rt,gt,rt+tt,gt+Ve,st,Pt,st+tt,Pt+Ve,ee.COLOR_BUFFER_BIT,ee.NEAREST):Vt?ee.copyTexSubImage3D(at,Xe,st,Pt,on+hn,rt,gt,tt,Ve):ee.copyTexSubImage2D(at,Xe,st,Pt,rt,gt,tt,Ve);Ie.bindFramebuffer(ee.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(ee.DRAW_FRAMEBUFFER,null)}else Vt?A.isDataTexture||A.isData3DTexture?ee.texSubImage3D(at,Xe,st,Pt,on,tt,Ve,Ke,Yt,ln,jt.data):K.isCompressedArrayTexture?ee.compressedTexSubImage3D(at,Xe,st,Pt,on,tt,Ve,Ke,Yt,jt.data):ee.texSubImage3D(at,Xe,st,Pt,on,tt,Ve,Ke,Yt,ln,jt):A.isDataTexture?ee.texSubImage2D(ee.TEXTURE_2D,Xe,st,Pt,tt,Ve,Yt,ln,jt.data):A.isCompressedTexture?ee.compressedTexSubImage2D(ee.TEXTURE_2D,Xe,st,Pt,jt.width,jt.height,Yt,jt.data):ee.texSubImage2D(ee.TEXTURE_2D,Xe,st,Pt,tt,Ve,Yt,ln,jt);Ie.pixelStorei(ee.UNPACK_ROW_LENGTH,te),Ie.pixelStorei(ee.UNPACK_IMAGE_HEIGHT,fe),Ie.pixelStorei(ee.UNPACK_SKIP_PIXELS,B),Ie.pixelStorei(ee.UNPACK_SKIP_ROWS,De),Ie.pixelStorei(ee.UNPACK_SKIP_IMAGES,Qe),Xe===0&&K.generateMipmaps===!0&&K.mipmapsAutoUpdate===!0&&ee.generateMipmap(at),Ie.unbindTexture()},this.initRenderTarget=function(A){ot.get(A).__webglFramebuffer===void 0&&Ze.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ze.setTextureCube(A,0):A.isData3DTexture?Ze.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ze.setTexture2DArray(A,0):Ze.setTexture2D(A,0),Ie.unbindTexture()},this.resetState=function(){ue=0,Y=0,se=null,Ie.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Wt._getUnpackColorSpace()}}function SM(s,e){const t=document.createElement("canvas");t.width=2048,t.height=1024;const r=t.getContext("2d");let o;e?s==="celestial-cyan"?o=["#e0f2fe","#bae6fd","#7dd3fc","#38bdf8","#0284c7","#0369a1","#f0f9ff","#dbeafe"]:s==="supernova-sunset"?o=["#fff1f2","#fecdd3","#fda4af","#fb7185","#e11d48","#9f1239","#fff7ed","#fed7aa"]:s==="nocturne-silver"?o=["#fafafa","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#71717a","#ffffff","#e4e4e7"]:s==="cyberpunk-neon"?o=["#fdf4ff","#fae8ff","#f5d0fe","#f0abfc","#e879f9","#d946ef","#c026d3","#a21caf"]:s==="solar-gold"?o=["#fffbeb","#fef3c7","#fde68a","#fcd34d","#f59e0b","#d97706","#b45309","#78350f"]:s==="emerald-aurora"?o=["#f0fdf4","#dcfce7","#bbf7d0","#86efac","#4ade80","#22c55e","#16a34a","#15803d"]:s==="pure-pitch-black"?o=["#ffffff","#f4f4f5","#e4e4e7","#d4d4d8","#a1a1aa","#71717a","#3f3f46","#18181b"]:o=["#fffbeb","#fef3c7","#fde68a","#fcd34d","#f59e0b","#d97706","#fff7ed","#ffedd5"]:s==="celestial-cyan"?o=["#020b14","#041d33","#083358","#0e4a7d","#0284c7","#38bdf8","#075985","#0c4a6e","#06b6d4"]:s==="supernova-sunset"?o=["#12040d","#2b061c","#4a0a2f","#771146","#be123c","#f43f5e","#ea580c","#fb923c","#450a22"]:s==="nocturne-silver"?o=["#060609","#111119","#1e1e2d","#2f2f45","#4d4d6e","#7b7b9e","#a6a6c7","#252538","#d4d4e8"]:s==="cyberpunk-neon"?o=["#080014","#16002c","#2c004d","#550080","#9333ea","#db2777","#f43f5e","#06b6d4","#22d3ee"]:s==="solar-gold"?o=["#0d0500","#1f0c00","#3b1700","#5e2500","#92400e","#d97706","#f59e0b","#fbbf24","#fef08a"]:s==="emerald-aurora"?o=["#020d06","#052110","#0a381d","#14532d","#16a34a","#22c55e","#4ade80","#10b981","#34d399"]:s==="pure-pitch-black"?o=["#000000","#050505","#0a0a0a","#121212","#1a1a1a","#262626","#404040","#737373","#a3a3a3"]:o=["#080415","#150933","#270e59","#3e1785","#5b21b6","#7c3aed","#a855f7","#c084fc","#2e1065","#d8b4fe"];const l=r.createLinearGradient(0,0,0,t.height);o.forEach((h,w)=>{l.addColorStop(w/(o.length-1),h)}),r.fillStyle=l,r.fillRect(0,0,t.width,t.height);const d=72;for(let h=0;h<d;h++){const S=h/d*t.height,M=t.height/d*(1.2+Math.sin(h*.7)*.5),v=o[h*3%o.length];r.fillStyle=v,r.globalAlpha=.25+Math.sin(h*.9)*.2,r.beginPath(),r.moveTo(0,S);const _=32;for(let P=0;P<=_;P++){const k=P/_*t.width,D=Math.sin(P*.8+h*1.5)*7+Math.cos(P*1.6+h*2.1)*4;r.lineTo(k,S+D)}r.lineTo(t.width,S+M),r.lineTo(0,S+M),r.closePath(),r.fill()}r.globalAlpha=e?.25:.4,r.fillStyle="#ffffff";for(let h=0;h<48;h++){const w=Math.random()*t.width,S=Math.random()*t.height,M=60+Math.random()*180,v=1.5+Math.random()*3.5;r.beginPath(),r.ellipse(w,S,M,v,Math.sin(S*.05)*.15,0,Math.PI*2),r.fill()}const f=t.width*.62,g=t.height*.58,m=85,b=r.createRadialGradient(f,g,5,f,g,m);e?(b.addColorStop(0,"#ffffff"),b.addColorStop(.4,o[o.length-2]),b.addColorStop(.8,o[o.length-1]),b.addColorStop(1,"rgba(255,255,255,0)")):(b.addColorStop(0,"#ffffff"),b.addColorStop(.3,o[o.length-3]||"#c084fc"),b.addColorStop(.7,o[o.length-1]||"#7c3aed"),b.addColorStop(1,"rgba(0,0,0,0)")),r.globalAlpha=.85,r.fillStyle=b,r.beginPath(),r.ellipse(f,g,m*1.6,m*.8,-.15,0,Math.PI*2),r.fill(),r.strokeStyle=e?"rgba(200, 150, 100, 0.45)":"rgba(255, 255, 255, 0.60)",r.lineWidth=2.5;for(let h=0;h<3;h++){r.beginPath();for(let w=0;w<Math.PI*2;w+=.2){const S=w/(Math.PI*2)*m*.7,M=f+Math.cos(w+h*2.1)*S*1.5,v=g+Math.sin(w+h*2.1)*S*.7;w===0?r.moveTo(M,v):r.lineTo(M,v)}r.stroke()}const y=new mc(t);return y.wrapS=va,y.wrapT=di,y}function bM(s,e){const t=document.createElement("canvas");t.width=1024,t.height=64;const r=t.getContext("2d");r.clearRect(0,0,t.width,t.height);let o,l;e?(o="rgba(217, 119, 6, 0.45)",l="rgba(245, 158, 11, 0.85)"):s==="celestial-cyan"?(o="rgba(56, 189, 248, 0.45)",l="rgba(186, 230, 253, 0.90)"):s==="supernova-sunset"?(o="rgba(251, 146, 60, 0.45)",l="rgba(254, 205, 211, 0.90)"):s==="nocturne-silver"?(o="rgba(212, 212, 216, 0.45)",l="rgba(255, 255, 255, 0.90)"):s==="cyberpunk-neon"?(o="rgba(6, 182, 212, 0.50)",l="rgba(244, 63, 94, 0.95)"):s==="solar-gold"?(o="rgba(245, 158, 11, 0.50)",l="rgba(254, 240, 138, 0.95)"):s==="emerald-aurora"?(o="rgba(16, 185, 129, 0.45)",l="rgba(110, 231, 183, 0.90)"):s==="pure-pitch-black"?(o="rgba(115, 115, 115, 0.35)",l="rgba(245, 245, 245, 0.90)"):(o="rgba(192, 132, 252, 0.50)",l="rgba(243, 232, 255, 0.92)");for(let f=0;f<t.width;f++){const g=f/t.width;let m=0;g<.22?m=.12+Math.sin(g*60)*.08:g>=.22&&g<.65?m=.75+Math.sin(g*120)*.18+Math.cos(g*240)*.06:g>=.65&&g<.72?m=.02:g>=.72&&g<.95?g>.85&&g<.87?m=.05:m=.55+Math.sin(g*100)*.15:m=.2+Math.sin(g*200)*.15,r.fillStyle=m>.6?l:o,r.globalAlpha=Math.max(0,Math.min(1,m)),r.fillRect(f,0,1,t.height)}const d=new mc(t);return d.wrapS=di,d.wrapT=di,d}function wM(s){const e=document.createElement("canvas");e.width=2048,e.height=1024;const t=e.getContext("2d");t.fillStyle=s?"#d6d3d1":"#888899",t.fillRect(0,0,e.width,e.height),t.fillStyle=s?"#a8a29e":"#474755",[{x:.35,y:.4,rx:240,ry:160},{x:.55,y:.35,rx:280,ry:190},{x:.7,y:.45,rx:200,ry:140},{x:.4,y:.65,rx:220,ry:150},{x:.6,y:.6,rx:260,ry:180}].forEach(d=>{t.globalAlpha=.65,t.beginPath(),t.ellipse(d.x*e.width,d.y*e.height,d.rx,d.ry,.2,0,Math.PI*2),t.fill()});const o=320;for(let d=0;d<o;d++){const f=Math.random()*e.width,g=Math.random()*e.height,m=4+Math.random()*32;if(t.globalAlpha=.55,t.fillStyle=s?"#57534e":"#22222a",t.beginPath(),t.arc(f,g,m,0,Math.PI*2),t.fill(),t.globalAlpha=.7,t.strokeStyle=s?"#ffffff":"#e2e8f0",t.lineWidth=Math.max(1,m*.2),t.beginPath(),t.arc(f,g,m,Math.PI*.75,Math.PI*1.75),t.stroke(),m>24){t.globalAlpha=.25,t.strokeStyle=s?"#ffffff":"#cbd5e1",t.lineWidth=1;for(let b=0;b<8;b++){const y=b/8*Math.PI*2,h=m*(3+Math.random()*5);t.beginPath(),t.moveTo(f+Math.cos(y)*m,g+Math.sin(y)*m),t.lineTo(f+Math.cos(y)*h,g+Math.sin(y)*h),t.stroke()}}}const l=new mc(e);return l.wrapS=va,l.wrapT=di,l}function MM(s){const e=document.createElement("canvas");e.width=2048,e.height=1024;const t=e.getContext("2d");t.fillStyle=s?"#991b1b":"#450a0a",t.fillRect(0,0,e.width,e.height),t.fillStyle=s?"#7f1d1d":"#1c0404",[{x:.35,y:.4,rx:240,ry:160},{x:.55,y:.35,rx:280,ry:190},{x:.7,y:.45,rx:200,ry:140},{x:.4,y:.65,rx:220,ry:150},{x:.6,y:.6,rx:260,ry:180}].forEach(d=>{t.globalAlpha=.75,t.beginPath(),t.ellipse(d.x*e.width,d.y*e.height,d.rx,d.ry,.2,0,Math.PI*2),t.fill()});const o=280;for(let d=0;d<o;d++){const f=Math.random()*e.width,g=Math.random()*e.height,m=4+Math.random()*30;t.globalAlpha=.6,t.fillStyle="#1c0404",t.beginPath(),t.arc(f,g,m,0,Math.PI*2),t.fill(),t.globalAlpha=.85,t.strokeStyle="#f87171",t.lineWidth=Math.max(1,m*.2),t.beginPath(),t.arc(f,g,m,Math.PI*.75,Math.PI*1.75),t.stroke()}const l=new mc(e);return l.wrapS=va,l.wrapT=di,l}const EM=()=>{const s=le.useRef(null),{wallpaperSettings:e,appTheme:t,isEcoSleeping:r}=dr(),o=le.useRef(r);o.current=r;const l=le.useRef(!1),d=le.useRef(null);le.useEffect(()=>{!r&&!l.current&&d.current&&d.current()},[r]);const f=e.celestialBody||"ringed-planet",g=e.palette||"cosmic-royal",m=t==="light";return le.useEffect(()=>{if(!s.current)return;if(f==="none"){s.current.innerHTML="";return}const b=s.current;b.innerHTML="";const y=b.clientWidth||window.innerWidth,h=b.clientHeight||window.innerHeight,w=y<768,S=new ry,M=new Vi(45,y/h,.1,100);M.position.set(0,0,10);const v=new yM({alpha:!0,antialias:!0,powerPreference:"high-performance"});v.setSize(y,h),v.setPixelRatio(Math.min(window.devicePixelRatio||1,1.25)),v.outputColorSpace=yi,b.appendChild(v.domElement);const _=new My(m?16775149:16777215,m?2.8:2.5);S.add(_);const P=new Ey(m?14870768:g==="celestial-cyan"?662832:g==="cyberpunk-neon"?2031672:g==="solar-gold"?2363651:g==="emerald-aurora"?270096:g==="pure-pitch-black"?197379:1577516,m?.7:.4);S.add(P);const k=new ao;S.add(k);let D=3.4,U=1.8,R=.65;const E=e.celestialPosition||"default";E==="upper-right"?(D=w?1.2:3.4,U=w?2.3:1.8,_.position.set(-8,5,4)):E==="upper-left"?(D=w?-1.2:-3.3,U=w?2.5:2,_.position.set(-8,2,-2)):E==="zenith-center"?(D=0,U=w?2.5:2.4,_.position.set(0,0,4)):f==="ringed-planet"||f==="pulsar-star"?(D=w?1.2:3.4,U=w?2.3:1.8,R=w?.48:.68,_.position.set(-8,5,4)):f==="crescent-moon"||f==="blood-moon"?(D=w?-1.2:-3.3,U=w?2.5:2,R=w?.42:.6,_.position.set(-8,2,-2)):f==="eclipse-corona"&&(D=0,U=w?2.5:2.4,R=w?.45:.64,_.position.set(0,0,4));const L=e.celestialScaleMultiplier||1;R*=L,k.position.set(D,U,0),k.scale.set(R,R,R);let q=0,W=0,j=0,H=0;const X=I=>{const oe=I.clientX/window.innerWidth*2-1;q=(-(I.clientY/window.innerHeight)*2+1)*.18,W=oe*.25};window.addEventListener("mousemove",X,{passive:!0});let F=null,Q=null,ue=null,Y=null;if(f==="ringed-planet"){const I=new Gi(1,64,64),oe=SM(g,m),O=new Wl({map:oe,roughness:.55,metalness:.08});F=new Rn(I,O),k.add(F);const ne=new Gi(1.04,48,48),ie=new Di({vertexShader:`
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
        `,uniforms:{glowColor:{value:new Ot(m?g==="celestial-cyan"?165063:14251782:g==="celestial-cyan"?3718648:g==="supernova-sunset"?16007006:11032055)}},transparent:!0,blending:Es,side:$n}),Me=new Rn(ne,ie);k.add(Me);const me=new Ff(1.35,2.85,128),he=me.attributes.position,Ye=me.attributes.uv;for(let mt=0;mt<he.count;mt++){const xt=he.getX(mt),wt=he.getY(mt),kt=(Math.sqrt(xt*xt+wt*wt)-1.35)/(2.85-1.35);Ye.setXY(mt,kt,.5)}Ye.needsUpdate=!0;const $e=bM(g,m),Ne=new Wl({map:$e,side:Wi,transparent:!0,opacity:.92,roughness:.45,metalness:.05});Q=new Rn(me,Ne),Q.rotation.x=Math.PI*.48,Q.rotation.y=-.15,k.add(Q);const je=new Gi(.11,24,24),qe=new Wl({color:m?14078929:13095678,roughness:.8});ue=new Rn(je,qe),k.add(ue),k.rotation.z=-.42}else if(f==="crescent-moon"){const I=new Gi(1,64,64),oe=wM(m),O=new Di({vertexShader:`
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
        `,uniforms:{moonTexture:{value:oe},sunDir:{value:new ye(-1.6,.35,-.65).normalize()},sunlitColor:{value:new Ot(m?16776171:16710083)},earthshineColor:{value:new Ot(m?9741240:6583435)},earthshineAlpha:{value:m?.07:.05}},transparent:!0});F=new Rn(I,O),k.add(F);const ne=new Gi(1.04,48,48),ie=new Di({vertexShader:`
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
        `,uniforms:{sunDir:{value:new ye(-1.6,.35,-.65).normalize()},glowColor:{value:new Ot(m?16096779:16707722)}},transparent:!0,blending:Es,side:$n}),Me=new Rn(ne,ie);k.add(Me),k.rotation.y=.45,k.rotation.z=-.22}else if(f==="eclipse-corona"){const I=new bo(3.8,3.8),oe=new Di({vertexShader:`
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
        `,uniforms:{uTime:{value:0},uColor:{value:new Ot(m?14251782:16638023)}},transparent:!0,blending:Es,depthWrite:!1});Y=new Rn(I,oe),k.add(Y);const O=new Gi(.96,48,48),ne=new nc({color:m?1579035:328970});F=new Rn(O,ne),k.add(F)}else if(f==="blood-moon"){const I=new Gi(1,64,64),oe=MM(m),O=new Wl({map:oe,roughness:.7,metalness:.05});F=new Rn(I,O),k.add(F);const ne=new Gi(1.05,48,48),ie=new Di({vertexShader:`
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
        `,transparent:!0,blending:Es,side:$n}),Me=new Rn(ne,ie);k.add(Me),k.rotation.y=.5,k.rotation.z=-.2}else if(f==="pulsar-star"){const I=new Gi(.72,48,48),oe=new nc({color:m?165063:14742270});F=new Rn(I,oe),k.add(F);const O=new Uf(1.4,5,32,1,!0),ne=new nc({color:m?223649:3718648,transparent:!0,opacity:.5,side:Wi,blending:Es}),ie=new Rn(O,ne);ie.position.y=2.6,k.add(ie);const Me=new Rn(O,ne);Me.position.y=-2.6,Me.rotation.x=Math.PI,k.add(Me),Y=ie}let se;const G=performance.now(),Z=()=>{if(o.current){v.render(S,M),l.current=!1;return}if(l.current=!0,se=requestAnimationFrame(Z),document.hidden)return;const I=(performance.now()-G)*.001;j+=(q-j)*.06,H+=(W-H)*.06,k.position.x=D+H*.8,k.position.y=U+j*.8;const oe=e.rotationSpeed||"standard",O=oe==="static"?0:oe==="slow"?.35:oe==="fast"?2.4:1;if(F&&(F.rotation.y+=.0012*O),ue){const ie=I*.35*O;ue.position.x=Math.cos(ie)*4.8,ue.position.z=Math.sin(ie)*4.8*.4,ue.position.y=Math.sin(ie*1.5)*.6}Y&&Y.material.uniforms&&(Y.material.uniforms.uTime.value=I),v.render(S,M)};d.current=()=>{l.current||(l.current=!0,Z())},Z();const z=()=>{if(!b||!v||!M)return;const I=b.clientWidth||window.innerWidth,oe=b.clientHeight||window.innerHeight;M.aspect=I/oe,M.updateProjectionMatrix(),v.setSize(I,oe),v.setPixelRatio(Math.min(window.devicePixelRatio||1,1.25));const O=I<768,ne=e.celestialPosition||"default";ne==="upper-right"?(D=O?1.2:3.4,U=O?2.3:1.8):ne==="upper-left"?(D=O?-1.2:-3.3,U=O?2.5:2):ne==="zenith-center"?(D=0,U=O?2.5:2.4):f==="ringed-planet"||f==="pulsar-star"?(D=O?1.2:3.4,U=O?2.3:1.8,R=O?.48:.68):f==="crescent-moon"||f==="blood-moon"?(D=O?-1.2:-3.3,U=O?2.5:2,R=O?.42:.6):f==="eclipse-corona"&&(D=0,U=O?2.5:2.4,R=O?.45:.64),R*=e.celestialScaleMultiplier||1,k.position.set(D,U,0),k.scale.set(R,R,R)};return window.addEventListener("resize",z,{passive:!0}),()=>{d.current=null,l.current=!1,cancelAnimationFrame(se),window.removeEventListener("mousemove",X),window.removeEventListener("resize",z),v.dispose(),b&&v.domElement&&b.contains(v.domElement)&&b.removeChild(v.domElement)}},[f,g,m,e.celestialPosition,e.celestialScaleMultiplier,e.rotationSpeed]),u.jsx("div",{ref:s,className:"fixed inset-0 pointer-events-none z-[1] select-none overflow-hidden","aria-hidden":"true"})};/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=s=>s==null?void 0:s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function CM(s,e,t=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:TM(s),size:24,node:e,...t.length>0?{aliases:t}:{}}}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=s=>{let e="",t=!1;for(const r of s){if(r==="-"||r==="_"||r<=" "){t=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=t?r.toUpperCase():r,t=!1}return e};/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=s=>{const e=AM(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
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
 */function Rd(s){return s!=null}function NM(s,e={}){var h,w;const t=e.attributeNames??{},r=S=>t[S]??S,o=s.size??s.width??Ms.width,l=s.size??s.height??Ms.height,d=((h=s.aliases)==null?void 0:h.filter(S=>typeof S=="string"&&S.trim()!=="").map(S=>`lucide-${S}`))??[],f=[...s.name?[`lucide-${s.name}`]:[],...d],g=((w=e.className)==null?void 0:w.split(" ").filter(Boolean))??[],m=e.includeDefaultClasses===!1?yf(...g):yf("lucide",...f,...g),b=e.absoluteStrokeWidth?Number(e.strokeWidth??Ms["stroke-width"])*Number(s.size??s.width??Ms.width)/Number(e.size??e.width??Ms.width):e.strokeWidth??Ms["stroke-width"];return["svg",{...Object.entries(Ms).reduce((S,[M,v])=>(S[r(M)]=v,S),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&Rd(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&Rd(e.width)&&{[r("width")]:e.width},..."height"in e&&Rd(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:b,...m&&{[r("class")]:m},[r("viewBox")]:`0 0 ${o} ${l}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},s.node.map(S=>{const[M,v,_]=S,P=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...v}:v;return _?[M,P,_]:[M,P]})]}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function PM(s,e={}){return NM(s,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},LM=le.createContext({}),IM=()=>le.useContext(LM),kM=le.forwardRef(({color:s,size:e,width:t,height:r,strokeWidth:o,absoluteStrokeWidth:l,nonScalingStroke:d,className:f="",children:g,iconNode:m=[],icon:b={node:m,aliases:[],size:24},...y},h)=>{const{size:w=24,strokeWidth:S=2,absoluteStrokeWidth:M=!1,nonScalingStroke:v=!1,color:_="currentColor",className:P=""}=IM()??{},k=!!g||DM(y),[D,U,R=[]]=PM(b,{color:s??_,width:t??e??w,height:r??e??w,strokeWidth:o??S,absoluteStrokeWidth:l??M,nonScalingStroke:d??v,className:yf(P,f),hasA11yProp:k,attributes:y});return le.createElement(D,{ref:h,...U},[...R.map(([E,L])=>le.createElement(E,L)),...Array.isArray(g)?g:[g]])});/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Nt(s,e=[],t=[]){const r=typeof s=="string"?CM(s,e,t):s,o=le.forwardRef(({className:l,...d},f)=>le.createElement(kM,{ref:f,icon:r,className:l,...d}));return r.name&&(o.displayName=RM(r.name)),o}/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg={name:"bell",size:24,node:[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]};cg.node;const zM=Nt(cg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug={name:"book-open",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]]};ug.node;const UM=Nt(ug);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg={name:"calendar-clock",size:24,node:[["path",{d:"M16 14v2.2l1.6 1",key:"fo4ql5"}],["path",{d:"M16 2v3",key:"otl347"}],["path",{d:"M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338",key:"7hb8p4"}],["path",{d:"M3 9h5.859",key:"numkqi"}],["path",{d:"M8 2v3",key:"1ioesn"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]};dg.node;const FM=Nt(dg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg={name:"calendar",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]]};fg.node;const hg=Nt(fg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg={name:"chart-no-axes-column",size:24,node:[["path",{d:"M5 21v-6",key:"1hz6c0"}],["path",{d:"M12 21V3",key:"1lcnhd"}],["path",{d:"M19 21V9",key:"unv183"}]],aliases:["bar-chart-2"]};pg.node;const Sf=Nt(pg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};mg.node;const ir=Nt(mg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};gg.node;const OM=Nt(gg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};xg.node;const vg=Nt(xg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};_g.node;const BM=Nt(_g);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};yg.node;const go=Nt(yg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg={name:"coffee",size:24,node:[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]};Sg.node;const HM=Nt(Sg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg={name:"droplets",size:24,node:[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]};bg.node;const GM=Nt(bg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg={name:"external-link",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]};wg.node;const jM=Nt(wg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg={name:"eye-off",size:24,node:[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]};Mg.node;const VM=Nt(Mg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg={name:"face-slightly-smiling",size:24,node:[["path",{d:"M15 10V9",key:"4dkmfx"}],["path",{d:"M16.472 15a6 6 0 01-8.943 0",key:"7qomzy"}],["path",{d:"M9 10V9",key:"1lazqi"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["smile"]};Eg.node;const WM=Nt(Eg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg={name:"flame",size:24,node:[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]]};Tg.node;const Bf=Nt(Tg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg={name:"headphones",size:24,node:[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]};Cg.node;const dc=Nt(Cg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag={name:"leaf",size:24,node:[["path",{d:"M11 20a10 10 0 0010-10 25.9 25.9 0 00-1.04-7.281 1 1 0 00-1.755-.325C15.833 5.5 13 5.5 9.8 6.1A7 7 0 0011 20",key:"1wjnjv"}],["path",{d:"M2 21a5 5 0 012.911-4.544C7.613 15.212 8.351 15.24 11 13",key:"c1ejpn"}]]};Ag.node;const $M=Nt(Ag);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg={name:"list-music",size:24,node:[["path",{d:"M16 5H3",key:"m91uny"}],["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M11 19H3",key:"zflm78"}],["path",{d:"M21 16V5",key:"yxg4q8"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]};Rg.node;const dm=Nt(Rg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng={name:"maximize-2",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]};Ng.node;const fm=Nt(Ng);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg={name:"minimize-2",size:24,node:[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]]};Pg.node;const Dg=Nt(Pg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};Lg.node;const fc=Nt(Lg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};Ig.node;const rr=Nt(Ig);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg={name:"pen",size:24,node:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],aliases:["edit-2"]};kg.node;const hm=Nt(kg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};zg.node;const Pi=Nt(zg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};Ug.node;const xo=Nt(Ug);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg={name:"quote",size:24,node:[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]};Fg.node;const XM=Nt(Fg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og={name:"radio",size:24,node:[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};Og.node;const pm=Nt(Og);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};Bg.node;const Rr=Nt(Bg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg={name:"skip-back",size:24,node:[["path",{d:"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",key:"15892j"}],["path",{d:"M3 20V4",key:"1ptbpl"}]]};Hg.node;const bf=Nt(Hg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg={name:"skip-forward",size:24,node:[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]]};Gg.node;const hc=Nt(Gg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};jg.node;const Vg=Nt(jg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Wg.node;const Cs=Nt(Wg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g={name:"square-check-big",size:24,node:[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-square"]};$g.node;const YM=Nt($g);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg={name:"star",size:24,node:[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]};Xg.node;const qM=Nt(Xg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};Yg.node;const qg=Nt(Yg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg={name:"tag",size:24,node:[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]};Kg.node;const KM=Nt(Kg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg={name:"target",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};Zg.node;const ZM=Nt(Zg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg={name:"timer",size:24,node:[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]};Jg.node;const JM=Nt(Jg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};Qg.node;const ss=Nt(Qg);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex={name:"trending-up",size:24,node:[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]};ex.node;const QM=Nt(ex);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx={name:"tv",size:24,node:[["path",{d:"m17 2-5 5-5-5",key:"16satq"}],["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",key:"1e6viu"}]]};tx.node;const e2=Nt(tx);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx={name:"user",size:24,node:[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]};nx.node;const ix=Nt(nx);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx={name:"volume-2",size:24,node:[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]};rx.node;const wf=Nt(rx);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx={name:"volume-x",size:24,node:[["path",{d:"M11 4.702a.7.7 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.7.7 0 0 0 11 19.298z",key:"1p7khw"}],["path",{d:"m16.5 14.5 5-5",key:"cul3yw"}],["path",{d:"m16.5 9.5 5 5",key:"1akey5"}]]};sx.node;const ax=Nt(sx);/**
 * @license lucide-react v1.67.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};ox.node;const or=Nt(ox),t2=()=>{const{activeYouTubeItem:s,isYouTubePlaying:e,youtubeVolume:t,isYouTubeMuted:r,setYouTubeIsPlaying:o,setYouTubePlayerReady:l,showYouTubePreview:d,setShowYouTubePreview:f,toggleYouTubePlay:g,nextYouTubeTrack:m,prevYouTubeTrack:b,toggleYouTubeMute:y,setYouTubeVolume:h,audioSource:w}=dr(),S=le.useRef(null),[M,v]=le.useState(null),_=le.useRef((s==null?void 0:s.id)||null),P=le.useRef(null),[k,D]=le.useState(!1),U=le.useRef(!1),R=le.useCallback((X,F="")=>{try{S.current&&S.current.contentWindow&&S.current.contentWindow.postMessage(JSON.stringify({event:"command",func:X,args:F}),"*")}catch(Q){console.warn("[YouTube Audio] Command error:",Q)}},[]),E=le.useCallback((X,F)=>{const Q=F?"1":"0",ue=typeof window<"u"&&window.location.origin?`&origin=${encodeURIComponent(window.location.origin)}`:"";if(!X)return`https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=${Q}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${ue}`;if(X.type==="playlist"&&X.playlistId)return`https://www.youtube.com/embed/videoseries?list=${encodeURIComponent(X.playlistId)}&autoplay=${Q}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${ue}`;if(X.type==="video_in_playlist"&&X.videoId&&X.playlistId)return`https://www.youtube.com/embed/${encodeURIComponent(X.videoId)}?list=${encodeURIComponent(X.playlistId)}&autoplay=${Q}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${ue}`;const Y=X.videoId||"jfKfPfyJRdk";return`https://www.youtube.com/embed/${encodeURIComponent(Y)}?autoplay=${Q}&controls=1&enablejsapi=1&playsinline=1&rel=0&modestbranding=1${ue}`},[]),[L,q]=le.useState(()=>E(s,!1)),W=le.useCallback(()=>{R("unMute",""),R("setVolume",[t||75]),r&&y()},[R,t,r,y]);le.useEffect(()=>(window.__forMeSendYouTubeCommand=R,window.__forMeForceUnmute=W,l(!0),()=>{delete window.__forMeSendYouTubeCommand,delete window.__forMeForceUnmute}),[R,W,l]),le.useEffect(()=>{if(!s||_.current===s.id)return;_.current=s.id,v(null);const X=E(s,e);P.current=X,q(X),ji.updateMetadata({title:s.title,artist:s.channel||"FOR ME Sanctuary",album:s.type==="playlist"?"YouTube Playlist":"YouTube Stream",artworkUrl:s.thumbnailUrl,onPlay:()=>{o(!0),R("playVideo",""),W()},onPause:()=>{o(!1),R("pauseVideo","")},onNext:s.type==="playlist"||s.type==="video_in_playlist"?m:void 0,onPrev:s.type==="playlist"||s.type==="video_in_playlist"?b:void 0})},[s,E,e,m,b,R,o,W]),le.useEffect(()=>{if(U.current){U.current=!1;return}e?(R("playVideo",""),setTimeout(()=>{R("unMute",""),R("setVolume",[t||75])},50),ji.setPlaybackState("playing")):(R("pauseVideo",""),ji.setPlaybackState("paused"))},[e,R,t]),le.useEffect(()=>{R("setVolume",[t||75])},[t,R]),le.useEffect(()=>{r?R("mute",""):(R("unMute",""),R("setVolume",[t||75]))},[r,t,R]),le.useEffect(()=>{const X=F=>{if(!(!F.data||typeof F.data!="string"))try{const Q=JSON.parse(F.data);Q.event==="onStateChange"?Q.info===1?(U.current=!0,o(!0),v(null),ji.setPlaybackState("playing"),r||(R("unMute",""),R("setVolume",[t||75]))):Q.info===2?document.hidden||(U.current=!0,o(!1),ji.setPlaybackState("paused")):Q.info===0&&((s==null?void 0:s.type)==="playlist"||(s==null?void 0:s.type)==="video_in_playlist"?ji.setPlaybackState("playing"):(U.current=!0,o(!1),ji.setPlaybackState("none"))):Q.event==="infoDelivery"&&Q.info?typeof Q.info.muted=="boolean"&&Q.info.muted&&!r&&e&&(R("unMute",""),R("setVolume",[t||75])):Q.event==="onError"&&(console.warn("[YouTube Audio Player Error]",Q.info),(Q.info===101||Q.info===150)&&v("The owner of this video restricts playback outside of YouTube."))}catch{}};return window.addEventListener("message",X),()=>window.removeEventListener("message",X)},[o,r,t,R,s,e]);const j=w==="youtube"&&e||d,H=(s==null?void 0:s.type)==="playlist"||(s==null?void 0:s.type)==="video_in_playlist";return u.jsxs(u.Fragment,{children:[u.jsxs("div",{role:"region","aria-label":"YouTube Audio Player",style:{position:"fixed",bottom:!j||k?"0px":d?"84px":"16px",right:!j||k?"0px":d?"24px":"16px",width:!j||k?"2px":d?"380px":"250px",height:!j||k?"2px":d?"285px":"150px",zIndex:!j||k?-1:d?50:30,opacity:!j||k?.01:1,pointerEvents:!j||k?"none":"auto",borderRadius:"1.25rem",overflow:"hidden",boxShadow:d?"0 30px 70px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.18)":"0 15px 35px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.12)",transition:"all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"},className:"backdrop-blur-2xl bg-[#090b14]/95 flex flex-col border border-white/15",children:[u.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-black/60 shrink-0 select-none",children:[u.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[u.jsx("span",{className:`w-2 h-2 rounded-full shrink-0 ${e?"bg-red-500 animate-pulse":"bg-zinc-500"}`}),u.jsx("span",{className:"text-white text-xs font-display font-semibold truncate max-w-[110px] sm:max-w-[160px]",title:s==null?void 0:s.title,children:(s==null?void 0:s.title)||"YouTube Audio"})]}),u.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[u.jsxs("button",{type:"button",onClick:W,className:`px-1.5 py-0.5 rounded-md text-[10px] font-sans font-bold flex items-center gap-1 transition-colors cursor-pointer ${r?"bg-amber-500 text-black hover:bg-amber-400 animate-pulse":"bg-emerald-600/80 text-white hover:bg-emerald-500"}`,title:"Force Unmute & Restore Volume",children:[r?u.jsx(ax,{className:"w-3 h-3"}):u.jsx(wf,{className:"w-3 h-3"}),u.jsx("span",{className:"hidden sm:inline",children:r?"UNMUTE":`${t}%`})]}),u.jsx("button",{type:"button",onClick:()=>D(!0),className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer",title:"Audio Only (Hide Video Frame)",children:u.jsx(dc,{className:"w-3 h-3"})}),u.jsx("button",{type:"button",onClick:()=>f(!d),className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer",title:d?"Collapse to Mini Player":"Expand Video Preview",children:d?u.jsx(Dg,{className:"w-3 h-3"}):u.jsx(fm,{className:"w-3 h-3"})}),u.jsx("button",{type:"button",onClick:()=>{o(!1),f(!1),R("pauseVideo","")},className:"p-1 rounded-md bg-white/10 hover:bg-red-500/80 text-zinc-300 hover:text-white text-[10px] transition-colors cursor-pointer",title:"Stop playback & close",children:u.jsx(or,{className:"w-3 h-3"})})]})]}),M&&u.jsxs("div",{className:"absolute inset-0 z-30 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 text-center space-y-2 pointer-events-auto",children:[u.jsx(vg,{className:"w-6 h-6 text-amber-400"}),u.jsx("p",{className:"text-xs text-white/95 font-sans leading-relaxed max-w-xs",children:M}),(s==null?void 0:s.url)&&u.jsxs("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold transition-colors shadow-md",children:[u.jsx(jM,{className:"w-3 h-3"}),u.jsx("span",{children:"Open in YouTube"})]})]}),u.jsx("div",{className:"flex-1 w-full bg-black relative min-h-0",children:u.jsx("iframe",{ref:S,id:"global-youtube-audio-iframe",title:"FOR ME Sanctuary Audio Stream",src:L,className:"w-full h-full border-0 absolute inset-0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),u.jsxs("div",{className:"flex items-center justify-between px-3 py-1.5 border-t border-white/10 bg-black/60 shrink-0 text-xs",children:[d?u.jsxs("div",{className:"flex items-center gap-1",children:[u.jsx("span",{className:"text-[10px] font-sans text-zinc-400 mr-1",children:"Vol:"}),[25,50,75,100].map(X=>u.jsxs("button",{type:"button",onClick:()=>{h(X),R("setVolume",[X]),W()},className:`px-1.5 py-0.5 rounded text-[10px] font-mono transition-colors cursor-pointer ${t===X?"bg-red-600 text-white font-bold":"bg-white/10 text-zinc-300 hover:bg-white/20"}`,children:[X,"%"]},X))]}):u.jsxs("div",{className:"flex items-center gap-1",children:[H&&u.jsxs(u.Fragment,{children:[u.jsx("button",{type:"button",onClick:b,className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer",title:"Previous track in playlist",children:u.jsx(bf,{className:"w-3 h-3"})}),u.jsx("button",{type:"button",onClick:m,className:"p-1 rounded-md bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer",title:"Next track in playlist",children:u.jsx(hc,{className:"w-3 h-3"})})]}),u.jsx("span",{className:"text-[10px] font-mono text-zinc-400",children:r?"Muted":`${t}%`})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[d&&H&&u.jsxs(u.Fragment,{children:[u.jsx("button",{type:"button",onClick:b,className:"p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white transition-colors cursor-pointer",title:"Previous track",children:u.jsx(bf,{className:"w-3.5 h-3.5"})}),u.jsx("button",{type:"button",onClick:m,className:"p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white transition-colors cursor-pointer",title:"Next track",children:u.jsx(hc,{className:"w-3.5 h-3.5"})})]}),u.jsx("button",{type:"button",onClick:()=>{g(),W()},className:`px-3 py-1 rounded-lg text-white text-[11px] font-display font-semibold flex items-center gap-1 shadow-sm transition-all cursor-pointer ${e?"bg-red-600 hover:bg-red-500":"bg-emerald-600 hover:bg-emerald-500"}`,children:e?u.jsxs(u.Fragment,{children:[u.jsx(rr,{className:"w-3 h-3 fill-current"}),u.jsx("span",{children:"Pause"})]}):u.jsxs(u.Fragment,{children:[u.jsx(Pi,{className:"w-3 h-3 fill-current ml-0.5"}),u.jsx("span",{children:"Play"})]})})]})]})]}),j&&k&&u.jsxs("button",{type:"button",onClick:()=>D(!1),className:"fixed bottom-4 right-4 z-40 px-3 py-1.5 rounded-xl cosmic-dock text-xs flex items-center gap-2 border border-white/15 text-white hover:border-violet-400/50 shadow-xl cursor-pointer transition-all animate-fadeIn",title:"Restore Video Frame",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-red-500 animate-pulse"}),u.jsx("span",{className:"font-display text-[11px] font-medium",children:"Show Video"}),u.jsx(fm,{className:"w-3 h-3 text-zinc-400"})]})]})},n2=[{id:"deep-space-obsidian",name:"Deep Space Obsidian",tagline:"Luminous Lavender & Crescent Moon",accent:"#a855f7",gradient:["#060814","#2d1252","#7c3aed","#ede9fe"],settings:{palette:"cosmic-royal",celestialBody:"crescent-moon",celestialPosition:"default",celestialScaleMultiplier:1,rotationSpeed:"standard",waveGeometry:"dunes",speed:"balanced",amplitude:"majestic",waveLayerDensity:"deep",horizonHeight:"balanced",clockFontStyle:"tabular",clockHalo:"pulsar",clockColor:"palette",clockPosition:"center",clockDivider:"colon",showConstellations:!0,showComet:!0,showNebulaDust:!0,starDensity:"balanced",shootingStarMode:"occasional"}},{id:"cyberpunk-neon",name:"Cyberpunk Neon",tagline:"High-Voltage Cyan & Ringed Gas Giant",accent:"#06b6d4",gradient:["#06000e","#3b0764","#06b6d4","#f43f5e"],settings:{palette:"cyberpunk-neon",celestialBody:"ringed-planet",celestialPosition:"upper-right",celestialScaleMultiplier:1.15,rotationSpeed:"fast",waveGeometry:"aurora",speed:"dynamic",amplitude:"dramatic",waveLayerDensity:"dense",horizonHeight:"balanced",clockFontStyle:"mono",clockHalo:"pulsar",clockColor:"cyan",clockPosition:"center",clockDivider:"colon",showCrossStars:!0,showOrbitalTrack:!0,starDensity:"dense",shootingStarMode:"meteor-shower"}},{id:"emerald-borealis",name:"Emerald Borealis",tagline:"Northern Aurora Ribbons & Pulsar Star",accent:"#10b981",gradient:["#010d05","#064e3b","#10b981","#a7f3d0"],settings:{palette:"emerald-aurora",celestialBody:"pulsar-star",celestialPosition:"zenith-center",celestialScaleMultiplier:1.1,rotationSpeed:"fast",waveGeometry:"aurora",speed:"balanced",amplitude:"majestic",waveLayerDensity:"dense",horizonHeight:"balanced",clockFontStyle:"minimal",clockHalo:"pulsar",clockColor:"cyan",clockPosition:"center",clockDivider:"dot",showConstellations:!0,showComet:!0,starDensity:"galaxy",shootingStarMode:"occasional"}},{id:"sunset-dunes",name:"Sunset Dunes",tagline:"Velvet Crimson & Solar Eclipse Corona",accent:"#f43f5e",gradient:["#0a0208","#771146","#e11d48","#f59e0b"],settings:{palette:"supernova-sunset",celestialBody:"eclipse-corona",celestialPosition:"zenith-center",celestialScaleMultiplier:1,rotationSpeed:"standard",waveGeometry:"dunes",speed:"balanced",amplitude:"majestic",waveLayerDensity:"deep",horizonHeight:"balanced",clockFontStyle:"serif",clockHalo:"subtle",clockColor:"gold",clockPosition:"center",clockDivider:"space",showConstellations:!1,showComet:!0,starDensity:"balanced",shootingStarMode:"off"}},{id:"blood-moon-totality",name:"Blood Moon Totality",tagline:"Crimson Eclipse & Ruby Stardust",accent:"#ef4444",gradient:["#0d0202","#450a0a","#b91c1c","#f87171"],settings:{palette:"supernova-sunset",celestialBody:"blood-moon",celestialPosition:"upper-left",celestialScaleMultiplier:1.25,rotationSpeed:"slow",waveGeometry:"mountains",speed:"calm",amplitude:"dramatic",waveLayerDensity:"deep",horizonHeight:"balanced",clockFontStyle:"serif",clockHalo:"pulsar",clockColor:"rose",clockPosition:"center",clockDivider:"colon",showConstellations:!0,showCrossStars:!0,starDensity:"dense",shootingStarMode:"meteor-shower"}},{id:"nord-frost",name:"Nord Frost",tagline:"Sub-Zero Arctic & Crystalline Torus",accent:"#38bdf8",gradient:["#020b14","#0c2e4e","#0284c7","#e0f2fe"],settings:{palette:"celestial-cyan",celestialBody:"crescent-moon",celestialPosition:"upper-right",celestialScaleMultiplier:1.1,rotationSpeed:"standard",waveGeometry:"ocean",speed:"balanced",amplitude:"majestic",waveLayerDensity:"dense",horizonHeight:"low",clockFontStyle:"minimal",clockHalo:"none",clockColor:"white",clockPosition:"center",clockDivider:"colon",showConstellations:!0,showCrossStars:!0,starDensity:"dense",shootingStarMode:"occasional"}},{id:"monochrome-mineral",name:"Monochrome Mineral",tagline:"Architectural Platinum & Deep Void",accent:"#a1a1aa",gradient:["#030306","#181824","#71717a","#ffffff"],settings:{palette:"nocturne-silver",celestialBody:"none",celestialPosition:"default",celestialScaleMultiplier:1,rotationSpeed:"static",waveGeometry:"mountains",speed:"calm",amplitude:"subtle",waveLayerDensity:"airy",horizonHeight:"balanced",clockFontStyle:"tabular",clockHalo:"none",clockColor:"white",clockPosition:"center",clockDivider:"space",showConstellations:!1,showComet:!1,showNebulaDust:!1,starDensity:"sparse",shootingStarMode:"off"}},{id:"pure-pitch-black",name:"Pitch Black Void",tagline:"OLED Zero-Light Battery Sanctuary",accent:"#71717a",gradient:["#000000","#050505","#171717","#e5e5e5"],settings:{palette:"pure-pitch-black",celestialBody:"crescent-moon",celestialPosition:"upper-right",celestialScaleMultiplier:.8,rotationSpeed:"slow",waveGeometry:"dunes",speed:"frozen",amplitude:"subtle",waveLayerDensity:"airy",horizonHeight:"low",clockFontStyle:"tabular",clockHalo:"none",clockColor:"white",clockPosition:"center",clockDivider:"colon",showConstellations:!1,showComet:!1,showNebulaDust:!1,starDensity:"sparse",shootingStarMode:"off"}}],i2=[{id:"cosmic-royal",name:"Cosmic Royal",previewColors:["#060814","#2d1252","#7c3aed","#ede9fe"]},{id:"cyberpunk-neon",name:"Cyber Neon",previewColors:["#06000e","#3b0764","#06b6d4","#f43f5e"]},{id:"emerald-aurora",name:"Emerald Aurora",previewColors:["#010d05","#064e3b","#10b981","#a7f3d0"]},{id:"supernova-sunset",name:"Sunset Supernova",previewColors:["#12050e","#6e133e","#e11d48","#fffbeb"]},{id:"celestial-cyan",name:"Celestial Cyan",previewColors:["#030b14","#0c2e4e","#0284c7","#e0f2fe"]},{id:"solar-gold",name:"Solar Gold",previewColors:["#140d02","#523405","#f59e0b","#fef3c7"]},{id:"nocturne-silver",name:"Nocturne Silver",previewColors:["#050508","#1e1e24","#71717a","#f4f4f5"]},{id:"pure-pitch-black",name:"Pitch Black OLED",previewColors:["#000000","#09090b","#27272a","#fafafa"]}],r2=({isOpen:s,onClose:e})=>{const{wallpaperSettings:t,updateWallpaperSettings:r,appTheme:o,toggleAppTheme:l,setIsEcoSleeping:d}=dr(),f=o==="light",[g,m]=le.useState("realms"),[b,y]=le.useState(String(t.ecoSleepMinutes??7.5)),[h,w]=le.useState(!1);if(!s)return null;const S=()=>{r({palette:"cosmic-royal",speed:"balanced",amplitude:"majestic",waveGeometry:"dunes",waveLayerDensity:"deep",horizonHeight:"balanced",waveStrokeOpacity:.8,interactiveParallax:!0,celestialBody:"crescent-moon",celestialPosition:"default",celestialScaleMultiplier:1,rotationSpeed:"standard",showNebulaDust:!0,nebulaIntensity:"vivid",showConstellations:!0,showComet:!0,shootingStarMode:"occasional",showStars:!0,starDensity:"balanced",showCrossStars:!1,showOrbitalTrack:!1,showMeridian:!1,clockFontStyle:"tabular",clockSize:"standard",clockPosition:"center",clockDivider:"colon",clockColor:"palette",clockFormat:"12h",showSeconds:!0,showDate:!0,showGreeting:!0,clockHalo:"pulsar"})};return u.jsxs("div",{className:"fixed inset-0 z-50 pointer-events-none select-none",children:[u.jsx("div",{className:"absolute inset-0 bg-black/20 backdrop-blur-[2px] pointer-events-auto transition-opacity",onClick:e,"aria-hidden":"true"}),u.jsxs("aside",{role:"dialog","aria-modal":"true","aria-label":"Wallpaper Studio Inspector",className:`absolute top-8 sm:top-10 bottom-3 sm:bottom-6 right-2 sm:right-6 w-[calc(100%-1rem)] sm:w-[440px] rounded-3xl border shadow-[0_24px_80px_rgba(0,0,0,0.85)] backdrop-blur-3xl flex flex-col z-10 pointer-events-auto transition-all animate-fadeIn overflow-hidden ${f?"bg-white/95 border-zinc-200/90 text-zinc-900":"bg-[#090b16]/95 border-white/[0.12] text-white"}`,children:[u.jsxs("div",{className:`flex items-center justify-between p-4 px-5 border-b shrink-0 ${f?"border-zinc-200/80 bg-white/70":"border-white/[0.08] bg-white/[0.02]"}`,children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:`w-8 h-8 rounded-xl border flex items-center justify-center shadow-sm ${f?"bg-zinc-100 border-zinc-200 text-zinc-800":"bg-white/[0.08] border-white/15 text-zinc-200"}`,children:u.jsx(Vg,{className:"w-3.5 h-3.5"})}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("h2",{className:"text-xs font-display uppercase tracking-widest font-bold",children:"Studio"}),u.jsx("span",{className:`text-[9px] font-mono font-medium px-2 py-0.5 rounded-full border ${f?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-emerald-500/15 text-emerald-300 border-emerald-400/30"}`,children:"Live"})]}),u.jsx("p",{className:`text-[10px] font-sans ${f?"text-zinc-500":"text-zinc-400"}`,children:"Sanctuary customization"})]})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("button",{type:"button",onClick:S,"aria-label":"Reset to default settings",title:"Reset to Defaults",className:`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${f?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.06] hover:bg-white/[0.12] text-zinc-400 hover:text-white"}`,children:u.jsx(Rr,{className:"w-3.5 h-3.5"})}),u.jsx("button",{type:"button",onClick:e,"aria-label":"Close Studio",className:`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${f?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.06] hover:bg-white/[0.12] text-zinc-400 hover:text-white"}`,children:u.jsx(or,{className:"w-4 h-4"})})]})]}),u.jsx("div",{className:`p-2.5 border-b shrink-0 ${f?"border-zinc-200/90 bg-zinc-50/70":"border-white/[0.06] bg-black/25"}`,children:u.jsx("div",{className:`grid grid-cols-3 gap-1.5 p-1 rounded-2xl ${f?"bg-zinc-200/60":"bg-white/[0.04]"}`,children:[{id:"realms",label:"Realms",desc:"1-Tap Themes",icon:Cs},{id:"cosmos",label:"Cosmos",desc:"Planet & Waves",icon:fc},{id:"timepiece",label:"Timepiece",desc:"Clock Style",icon:go}].map(M=>{const v=M.icon,_=g===M.id;return u.jsxs("button",{type:"button",onClick:()=>m(M.id),className:`flex items-center justify-center gap-2 py-2 px-2 rounded-xl text-xs font-sans font-medium transition-all cursor-pointer ${_?f?"bg-white text-zinc-950 font-bold shadow-sm":"bg-white text-zinc-950 font-bold shadow-[0_2px_12px_rgba(255,255,255,0.18)]":f?"hover:bg-white/60 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.06] text-zinc-400 hover:text-white"}`,children:[u.jsx(v,{className:"w-3.5 h-3.5 shrink-0"}),u.jsx("span",{children:M.label})]},M.id)})})}),u.jsxs("div",{className:"flex-1 overflow-y-auto p-5 space-y-6",children:[g==="realms"&&u.jsxs("div",{className:"space-y-4 animate-fadeIn",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold ${f?"text-zinc-700":"text-zinc-300"}`,children:"Curated Aesthetic Realms"}),u.jsx("span",{className:`text-[10px] font-mono ${f?"text-zinc-500":"text-zinc-400"}`,children:"Instant Harmony"})]}),u.jsx("div",{className:"grid grid-cols-1 gap-2",children:n2.map(M=>{const v=t.palette===M.settings.palette&&t.celestialBody===M.settings.celestialBody;return u.jsxs("button",{type:"button",onClick:()=>r(M.settings),className:`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between group ${v?f?"bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900 shadow-md":"bg-white/[0.08] border-white/40 shadow-lg":f?"bg-white hover:bg-zinc-50 border-zinc-200/90":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08]"}`,children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:"w-10 h-10 rounded-xl border border-white/20 shrink-0 shadow-sm flex items-center justify-center overflow-hidden",style:{background:`linear-gradient(135deg, ${M.gradient.join(", ")})`},children:v&&u.jsx(ir,{className:"w-4 h-4 text-white drop-shadow-md stroke-[3]"})}),u.jsxs("div",{children:[u.jsx("div",{className:`text-xs font-display font-bold ${v?f?"text-zinc-950 font-bold":"text-white":f?"text-zinc-800":"text-zinc-200"}`,children:M.name}),u.jsx("div",{className:`text-[10px] font-sans ${f?"text-zinc-500":"text-zinc-400"}`,children:M.tagline})]})]}),u.jsx("div",{className:"flex items-center gap-1 shrink-0 pl-2",children:M.gradient.map((_,P)=>u.jsx("div",{className:"w-2.5 h-2.5 rounded-full border border-black/20",style:{backgroundColor:_}},P))})]},M.id)})})]}),g==="cosmos"&&u.jsxs("div",{className:"space-y-5 animate-fadeIn",children:[u.jsxs("div",{className:"space-y-2",children:[u.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${f?"text-zinc-700":"text-zinc-300"}`,children:"3D Celestial Object"}),u.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:[{id:"crescent-moon",label:"Crescent Moon"},{id:"ringed-planet",label:"Saturn Rings"},{id:"blood-moon",label:"Blood Moon"},{id:"pulsar-star",label:"Pulsar Star"},{id:"eclipse-corona",label:"Eclipse Corona"},{id:"none",label:"No Planet (Pure Waves)"}].map(M=>{const v=t.celestialBody===M.id;return u.jsxs("button",{type:"button",onClick:()=>r({celestialBody:M.id}),className:`p-2.5 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer flex items-center justify-between ${v?f?"bg-zinc-900 text-white font-semibold":"bg-white text-zinc-950 font-semibold shadow-sm":f?"bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300"}`,children:[u.jsx("span",{className:"truncate",children:M.label}),v&&u.jsx(ir,{className:"w-3.5 h-3.5 shrink-0 ml-1"})]},M.id)})})]}),u.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[u.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${f?"text-zinc-700":"text-zinc-300"}`,children:"Atmospheric Palette"}),u.jsx("div",{className:"grid grid-cols-2 gap-2",children:i2.map(M=>{const v=t.palette===M.id;return u.jsxs("button",{type:"button",onClick:()=>r({palette:M.id}),className:`p-2 rounded-xl border text-left transition-all cursor-pointer flex flex-col gap-1.5 ${v?f?"bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900 shadow-sm":"bg-white/[0.08] border-white/40 shadow-sm":f?"bg-white hover:bg-zinc-50 border-zinc-200":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]"}`,children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:`text-[11px] font-semibold ${v?f?"text-zinc-950":"text-white":f?"text-zinc-700":"text-zinc-300"}`,children:M.name}),v&&u.jsx(ir,{className:"w-3 h-3 text-emerald-400"})]}),u.jsx("div",{className:"flex items-center gap-1",children:M.previewColors.map((_,P)=>u.jsx("span",{className:"w-3 h-3 rounded-full border border-black/20",style:{backgroundColor:_}},P))})]},M.id)})})]}),u.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[u.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${f?"text-zinc-700":"text-zinc-300"}`,children:"Wave Topography"}),u.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{id:"dunes",label:"Cosmic Dunes"},{id:"aurora",label:"Aurora Ribbon"},{id:"mountains",label:"Ridge Peaks"},{id:"ocean",label:"Ocean Swell"}].map(M=>{const v=t.waveGeometry===M.id;return u.jsx("button",{type:"button",onClick:()=>r({waveGeometry:M.id}),className:`p-2.5 rounded-xl border text-center text-xs font-medium transition-all cursor-pointer ${v?f?"bg-zinc-900 text-white font-semibold":"bg-white text-zinc-950 font-semibold shadow-sm":f?"bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300"}`,children:M.label},M.id)})})]}),u.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[u.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${f?"text-zinc-700":"text-zinc-300"}`,children:"Motion Speed"}),u.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:[{id:"calm",label:"Calm Drift"},{id:"balanced",label:"Balanced"},{id:"dynamic",label:"Dynamic"}].map(M=>{const v=t.speed===M.id;return u.jsx("button",{type:"button",onClick:()=>r({speed:M.id}),className:`p-2 rounded-xl border text-center text-xs font-medium transition-all cursor-pointer ${v?f?"bg-zinc-900 text-white font-semibold":"bg-white text-zinc-950 font-semibold shadow-sm":f?"bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300"}`,children:M.label},M.id)})})]}),u.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${f?"text-zinc-700":"text-zinc-300"}`,children:"Battery Saver (Eco Sleep)"}),u.jsx("span",{className:`text-[10px] ${f?"text-zinc-500":"text-zinc-400"}`,children:"0% GPU when idle"})]}),u.jsx("div",{className:"grid grid-cols-4 gap-1.5",children:[{val:7.5,label:"7.5m"},{val:5,label:"5 min"},{val:10,label:"10 min"},{val:0,label:"Off"}].map(M=>{const v=(t.ecoSleepMinutes??7.5)===M.val;return u.jsx("button",{type:"button",onClick:()=>{r({ecoSleepMinutes:M.val}),y(String(M.val))},className:`p-2 rounded-xl border text-center text-xs font-medium transition-all cursor-pointer ${v?f?"bg-zinc-900 text-white font-semibold":"bg-white text-zinc-950 font-semibold shadow-sm":f?"bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300"}`,children:M.label},M.val)})}),u.jsxs("div",{className:"flex items-center gap-2 pt-1",children:[u.jsxs("div",{className:`flex items-center flex-1 px-3 py-1.5 rounded-xl border transition-all ${f?"bg-zinc-50 border-zinc-200":"bg-white/[0.04] border-white/10"}`,children:[u.jsx("span",{className:`text-[11px] font-sans mr-2 shrink-0 ${f?"text-zinc-500":"text-zinc-400"}`,children:"Custom idle:"}),u.jsx("input",{type:"number",min:"0.5",max:"180",step:"0.5",value:b,onChange:M=>y(M.target.value),placeholder:"e.g. 8",className:`w-14 bg-transparent text-xs font-mono font-medium outline-none text-center ${f?"text-zinc-900":"text-white"}`}),u.jsx("span",{className:`text-[11px] font-mono ml-1 ${f?"text-zinc-500":"text-zinc-400"}`,children:"min"})]}),u.jsx("button",{type:"button",onClick:()=>{const M=parseFloat(b);!isNaN(M)&&M>0&&(r({ecoSleepMinutes:M}),w(!0),setTimeout(()=>w(!1),2500))},className:`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${f?"bg-zinc-900 text-white hover:bg-zinc-800 border-zinc-900":"bg-white text-zinc-950 hover:bg-zinc-200 border-white"}`,children:"Set Custom"})]}),h&&u.jsxs("p",{className:"text-[10px] font-mono text-emerald-400 animate-fadeIn font-semibold",children:["✓ Custom sleep timer set to ",t.ecoSleepMinutes," minutes"]}),u.jsx("p",{className:`text-[11px] leading-relaxed ${f?"text-zinc-500":"text-zinc-400"}`,children:"Auto-pauses heavy 3D celestial motion and wave loops after inactivity to eliminate battery drain while preserving the tranquil wallpaper aesthetic."}),u.jsxs("button",{type:"button",onClick:()=>{d(!0),e()},className:`w-full py-2 px-3 rounded-xl border text-xs font-medium transition-all cursor-pointer flex items-center justify-center gap-2 ${f?"bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100":"bg-emerald-950/40 text-emerald-300 border-emerald-500/30 hover:bg-emerald-900/50"}`,children:[u.jsx($M,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Preview Eco Sleep Mode"})]})]}),u.jsx("div",{className:"pt-2 border-t border-white/[0.06]",children:u.jsxs("button",{type:"button",onClick:l,className:`w-full p-2.5 rounded-xl border text-xs font-medium transition-all cursor-pointer flex items-center justify-center gap-2 ${f?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-white"}`,children:[f?u.jsx(fc,{className:"w-4 h-4 text-zinc-700"}):u.jsx(qg,{className:"w-4 h-4 text-amber-300"}),u.jsxs("span",{children:["Switch to ",f?"Obsidian Dark":"Creamy Light"," Theme"]})]})})]}),g==="timepiece"&&u.jsxs("div",{className:"space-y-5 animate-fadeIn",children:[u.jsxs("div",{className:"space-y-2",children:[u.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${f?"text-zinc-700":"text-zinc-300"}`,children:"Clock Typography Face"}),u.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{id:"tabular",label:"Tabular Modern",preview:"12:00"},{id:"serif",label:"Editorial Luxury",preview:"12:00"},{id:"mono",label:"Tech Monospace",preview:"12:00"},{id:"minimal",label:"Minimalist Light",preview:"12:00"}].map(M=>{const v=t.clockFontStyle===M.id;return u.jsxs("button",{type:"button",onClick:()=>r({clockFontStyle:M.id}),className:`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${v?f?"bg-zinc-900 text-white font-semibold":"bg-white text-zinc-950 font-semibold shadow-sm":f?"bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-zinc-300"}`,children:[u.jsx("span",{className:"text-xs",children:M.label}),v&&u.jsx(ir,{className:"w-3.5 h-3.5"})]},M.id)})})]}),u.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[u.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${f?"text-zinc-700":"text-zinc-300"}`,children:"Dial Accent Tint"}),u.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{id:"palette",label:"Palette Match",dot:"#a855f7"},{id:"white",label:"Pure White",dot:"#ffffff"},{id:"gold",label:"Stardust Gold",dot:"#fbbf24"},{id:"cyan",label:"Cyber Cyan",dot:"#22d3ee"},{id:"rose",label:"Rose Quartz",dot:"#f43f5e"}].map(M=>{const v=t.clockColor===M.id;return u.jsxs("button",{type:"button",onClick:()=>r({clockColor:M.id}),className:`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${v?f?"bg-zinc-100 border-zinc-900 ring-1 ring-zinc-900":"bg-white/[0.08] border-white/40":f?"bg-white hover:bg-zinc-50 border-zinc-200":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]"}`,children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-3 h-3 rounded-full border border-black/20",style:{backgroundColor:M.dot}}),u.jsx("span",{className:`text-xs ${v?"font-bold":""}`,children:M.label})]}),v&&u.jsx(ir,{className:"w-3.5 h-3.5 text-emerald-400"})]},M.id)})})]}),u.jsxs("div",{className:"space-y-2 pt-2 border-t border-white/[0.06]",children:[u.jsx("span",{className:`text-[11px] font-display uppercase tracking-wider font-semibold block ${f?"text-zinc-700":"text-zinc-300"}`,children:"Display Options"}),u.jsxs("div",{className:"space-y-2",children:[u.jsxs("div",{className:`p-3 rounded-xl border flex items-center justify-between ${f?"bg-white border-zinc-200":"bg-white/[0.03] border-white/[0.06]"}`,children:[u.jsxs("div",{children:[u.jsx("div",{className:"text-xs font-semibold",children:"Orbital Seconds Capsule"}),u.jsx("div",{className:`text-[10px] ${f?"text-zinc-500":"text-zinc-400"}`,children:"Show live orbiting seconds gauge"})]}),u.jsx("button",{type:"button",onClick:()=>r({showSeconds:!t.showSeconds}),className:`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${t.showSeconds?"bg-violet-600":f?"bg-zinc-300":"bg-white/20"}`,children:u.jsx("span",{className:`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${t.showSeconds?"left-6":"left-1"}`})})]}),u.jsxs("div",{className:`p-3 rounded-xl border flex items-center justify-between ${f?"bg-white border-zinc-200":"bg-white/[0.03] border-white/[0.06]"}`,children:[u.jsxs("div",{children:[u.jsx("div",{className:"text-xs font-semibold",children:"Breathing Atmospheric Aura"}),u.jsx("div",{className:`text-[10px] ${f?"text-zinc-500":"text-zinc-400"}`,children:"Ambient radial glow behind timepiece"})]}),u.jsx("button",{type:"button",onClick:()=>r({clockHalo:t.clockHalo==="none"?"pulsar":"none"}),className:`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${t.clockHalo!=="none"?"bg-violet-600":f?"bg-zinc-300":"bg-white/20"}`,children:u.jsx("span",{className:`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${t.clockHalo!=="none"?"left-6":"left-1"}`})})]})]})]})]})]})]})]})},co=({className:s="w-4 h-4"})=>u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:s,"aria-hidden":"true",children:u.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})}),lx=({isPlaying:s,color:e="#a855f7",className:t="w-16 h-5",barCount:r=10})=>{const o=le.useRef(null);return le.useEffect(()=>{const l=o.current;if(!l)return;const d=l.getContext("2d");if(!d)return;let f;const g=Cr.getAnalyser(),m=g?new Uint8Array(g.frequencyBinCount):null,b=()=>{if(d.clearRect(0,0,l.width,l.height),s&&g&&m){g.getByteFrequencyData(m);const y=l.width,h=l.height,w=2,S=w*(r-1),M=Math.max(2,(y-S)/r);for(let v=0;v<r;v++){const _=Math.min(m.length-1,Math.floor(v*(m.length/r)*.7)),P=m[_]/255,k=Math.max(3,P*(h-2)),D=v*(M+w),U=h-k;d.fillStyle=e,d.beginPath(),d.roundRect(D,U,M,k,1.5),d.fill()}}else{const y=l.width,h=l.height,w=2,S=w*(r-1),M=Math.max(2,(y-S)/r);for(let v=0;v<r;v++){const _=v*(M+w),P=h-2.5;d.fillStyle="rgba(255, 255, 255, 0.2)",d.beginPath(),d.roundRect(_,P,M,2.5,1),d.fill()}}f=requestAnimationFrame(b)};return b(),()=>{cancelAnimationFrame(f)}},[s,e,r]),u.jsx("canvas",{ref:o,width:64,height:20,className:t,"aria-hidden":"true"})},s2=({isOpen:s,onClose:e})=>{const{appTheme:t,audioSource:r,isAudioPlaying:o,activeSoundscapeId:l,audioVolume:d,isAudioMuted:f,playSoundscape:g,stopSoundscape:m,setAudioVolume:b,toggleAudioMute:y,isYouTubePlaying:h,activeYouTubeItem:w,youtubeVolume:S,isYouTubeMuted:M,savedYouTubeItems:v,showYouTubePreview:_,setShowYouTubePreview:P,playYouTubeItem:k,toggleYouTubePlay:D,stopYouTube:U,nextYouTubeTrack:R,prevYouTubeTrack:E,setYouTubeVolume:L,toggleYouTubeMute:q,addYouTubeToLibrary:W,removeYouTubeFromLibrary:j}=dr(),H=t==="light",[X,F]=le.useState(r||"youtube"),[Q,ue]=le.useState(""),[Y,se]=le.useState(""),[G,Z]=le.useState(null),[z,I]=le.useState(null),[oe,O]=le.useState(null),[ne,ie]=le.useState(null);if(le.useEffect(()=>{if(!oe){ie(null);return}ie(oe*60);const Ne=setInterval(()=>{ie(je=>je===null||je<=1?(m(),U(),O(null),null):je-1)},1e3);return()=>clearInterval(Ne)},[oe,m,U]),le.useEffect(()=>{const Ne=je=>{je.key==="Escape"&&s&&e()};return window.addEventListener("keydown",Ne),()=>window.removeEventListener("keydown",Ne)},[s,e]),!s)return null;const Me=pa.find(Ne=>Ne.id===l)||pa[0],me=Ne=>{const je=Math.floor(Ne/60),qe=Ne%60;return`${je}:${qe.toString().padStart(2,"0")}`},he=Ne=>{if(Ne.preventDefault(),Z(null),I(null),!Q.trim()){Z("Please enter a YouTube video or playlist link.");return}const je=W(Q.trim(),Y.trim()||void 0);if(!je.success||!je.item){Z(je.error||"Failed to parse YouTube link.");return}k(je.item),ue(""),se(""),I(`Playing: ${je.item.title}`),setTimeout(()=>I(null),4e3)},Ye=X==="youtube"?w?w.title:"No YouTube stream selected":Me.title,$e=X==="youtube"?h:o;return u.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 backdrop-blur-xl animate-fadeIn select-none ${H?"bg-black/45":"bg-black/85"}`,role:"dialog","aria-modal":"true","aria-labelledby":"audio-modal-title",children:[u.jsx("div",{className:"fixed inset-0",onClick:e,"aria-hidden":"true"}),u.jsxs("div",{className:`relative z-10 w-full max-w-2xl border rounded-3xl shadow-[0_20px_70px_rgba(0,0,0,0.85)] flex flex-col max-h-[90vh] overflow-hidden ${H?"bg-white/95 border-zinc-200 text-zinc-900 shadow-2xl":"bg-[#0b0d1e] border-white/[0.12] text-white shadow-2xl"}`,children:[u.jsxs("div",{className:`flex items-center justify-between px-6 py-4 border-b shrink-0 ${H?"border-zinc-200 bg-zinc-50/80":"border-white/[0.08] bg-white/[0.02]"}`,children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:`w-9 h-9 rounded-2xl border flex items-center justify-center ${H?"bg-rose-50 border-rose-200 text-red-600":"bg-red-500/20 border-red-400/40 text-red-400"}`,children:u.jsx(dc,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsxs("h2",{id:"audio-modal-title",className:`text-sm sm:text-base font-display font-semibold tracking-wide flex items-center gap-2 ${H?"text-zinc-900":"text-white"}`,children:["Focus Audio Sanctuary",u.jsx("span",{className:`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border ${X==="youtube"?H?"bg-red-50 text-red-700 border-red-200":"bg-red-500/15 text-red-300 border-red-500/30":H?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-emerald-500/15 text-emerald-300 border-emerald-500/30"}`,children:X==="youtube"?"YouTube Online • Infinite Audio":"Web Audio • Offline"})]}),u.jsx("p",{className:`text-xs font-sans mt-0.5 ${H?"text-zinc-500":"text-zinc-400"}`,children:X==="youtube"?"Paste any YouTube video or playlist link or choose curated study streams":"Procedurally synthesized ambient soundscapes. Zero network required."})]})]}),u.jsx("button",{type:"button",onClick:e,className:`w-8 h-8 rounded-xl flex items-center justify-center transition-colors cursor-pointer border ${H?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600 border-zinc-200":"bg-white/[0.05] hover:bg-white/[0.12] text-zinc-400 hover:text-white border-white/[0.08]"}`,"aria-label":"Close sound sanctuary",children:u.jsx(or,{className:"w-4 h-4"})})]}),u.jsxs("div",{className:`flex items-center gap-2 px-6 pt-3 border-b shrink-0 ${H?"border-zinc-200 bg-zinc-50/50":"border-white/[0.06] bg-black/20"}`,children:[u.jsxs("button",{type:"button",onClick:()=>F("youtube"),className:`flex items-center gap-2 px-4 py-2.5 text-xs font-display font-semibold border-b-2 transition-all cursor-pointer ${X==="youtube"?H?"border-red-600 text-red-700":"border-red-500 text-white":H?"border-transparent text-zinc-500 hover:text-zinc-900":"border-transparent text-zinc-400 hover:text-zinc-200"}`,children:[u.jsx(co,{className:"w-4 h-4 text-red-500"}),u.jsx("span",{children:"YouTube Audio & Playlists"})]}),u.jsxs("button",{type:"button",onClick:()=>F("ambient"),className:`flex items-center gap-2 px-4 py-2.5 text-xs font-display font-semibold border-b-2 transition-all cursor-pointer ${X==="ambient"?H?"border-violet-600 text-violet-700":"border-violet-400 text-white":H?"border-transparent text-zinc-500 hover:text-zinc-900":"border-transparent text-zinc-400 hover:text-zinc-200"}`,children:[u.jsx(pm,{className:"w-4 h-4 text-violet-500"}),u.jsx("span",{children:"Procedural Soundscapes (Offline)"})]})]}),X==="youtube"&&u.jsxs("div",{className:"flex-1 overflow-y-auto p-5 sm:p-6 space-y-5 animate-fadeIn",children:[u.jsxs("form",{onSubmit:he,className:"space-y-2",children:[u.jsxs("div",{className:"flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold",children:[u.jsx("span",{className:H?"text-zinc-800":"text-zinc-300",children:"Play YouTube Link or Playlist"}),u.jsx("span",{className:`text-[10px] font-sans font-normal ${H?"text-zinc-500":"text-zinc-400"}`,children:"Supports videos, live streams & playlists"})]}),u.jsxs("div",{className:"flex flex-col sm:flex-row gap-2",children:[u.jsx("input",{type:"text",placeholder:"Paste YouTube link (e.g. https://www.youtube.com/watch?v=... or playlist?list=...)",value:Q,onChange:Ne=>{ue(Ne.target.value),G&&Z(null)},className:`flex-1 px-3.5 py-2.5 text-xs rounded-xl border focus:outline-none focus:ring-2 ${H?"bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:ring-red-500/20 focus:border-red-500":"bg-white/[0.04] border-white/[0.1] text-white placeholder-zinc-500 focus:ring-red-400/30 focus:border-red-400"}`}),u.jsxs("button",{type:"submit",className:"px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-display font-semibold flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer shrink-0",children:[u.jsx(xo,{className:"w-4 h-4"}),u.jsx("span",{children:"Load & Play"})]})]}),G&&u.jsxs("div",{className:"flex items-center gap-2 p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-sans",children:[u.jsx(vg,{className:"w-4 h-4 shrink-0"}),u.jsx("span",{children:G})]}),z&&u.jsxs("div",{className:"flex items-center gap-2 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-sans",children:[u.jsx(Cs,{className:"w-4 h-4 shrink-0"}),u.jsx("span",{children:z})]})]}),w&&u.jsxs("div",{className:`p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${H?"bg-red-50/70 border-red-200 text-zinc-900 shadow-sm":"bg-red-950/20 border-red-500/30 text-white"}`,children:[u.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[u.jsxs("div",{className:"w-12 h-12 rounded-xl overflow-hidden bg-black/40 shrink-0 border border-white/10 relative",children:[u.jsx("img",{src:w.thumbnailUrl||rc[0].thumbnailUrl,alt:"",className:"w-full h-full object-cover"}),h&&u.jsx("div",{className:"absolute inset-0 bg-black/35 flex items-center justify-center",children:u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"})})]}),u.jsxs("div",{className:"min-w-0",children:[u.jsx("div",{className:"flex items-center gap-1.5",children:u.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-red-600 font-bold",children:w.type==="playlist"?"PLAYLIST":"NOW STREAMING"})}),u.jsx("h3",{className:`text-xs sm:text-sm font-display font-semibold truncate ${H?"text-zinc-900":"text-white"}`,children:w.title}),u.jsx("p",{className:`text-[11px] font-sans truncate ${H?"text-zinc-600":"text-zinc-400"}`,children:w.channel||"YouTube"})]})]}),u.jsxs("div",{className:"flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end",children:[w.type==="playlist"&&u.jsxs(u.Fragment,{children:[u.jsx("button",{type:"button",onClick:E,className:`p-2 rounded-xl border transition-colors cursor-pointer ${H?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-white"}`,title:"Previous Track in Playlist",children:u.jsx(bf,{className:"w-3.5 h-3.5"})}),u.jsx("button",{type:"button",onClick:R,className:`p-2 rounded-xl border transition-colors cursor-pointer ${H?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-white"}`,title:"Next Track in Playlist",children:u.jsx(hc,{className:"w-3.5 h-3.5"})})]}),u.jsxs("button",{type:"button",onClick:()=>{try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}},className:"px-2.5 py-1.5 rounded-xl border border-emerald-500/40 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-sans font-bold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer",title:"Force Unmute & Max Volume",children:[u.jsx(wf,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Unmute"})]}),u.jsxs("button",{type:"button",onClick:()=>P(!_),className:`px-3 py-1.5 rounded-xl border text-xs font-sans flex items-center gap-1.5 transition-colors cursor-pointer ${_?"bg-red-600 text-white border-red-600 font-medium":H?"bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-zinc-300"}`,title:"Toggle Floating Video Preview",children:[u.jsx(e2,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:_?"Hide Video":"View Video"})]})]})]}),u.jsxs("div",{className:"space-y-2.5",children:[u.jsxs("div",{className:`flex items-center gap-2 text-xs font-display uppercase tracking-wider font-semibold ${H?"text-zinc-800":"text-zinc-300"}`,children:[u.jsx(Cs,{className:"w-3.5 h-3.5 text-amber-500"}),u.jsx("span",{children:"Curated Focus & Lo-Fi Streams"})]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:rc.map(Ne=>{const je=(w==null?void 0:w.id)===Ne.id||(w==null?void 0:w.videoId)===Ne.videoId&&Ne.videoId,qe=je&&h;return u.jsxs("button",{type:"button",onClick:()=>{qe?D():k(Ne)},className:`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${je?H?"bg-red-50 border-red-500 ring-2 ring-red-500/20 shadow-sm":"bg-red-500/15 border-red-400 shadow-[0_0_20px_rgba(239,68,68,0.2)]":H?"bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90 text-zinc-900":"bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]"}`,children:[u.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[u.jsx("div",{className:"w-9 h-9 rounded-xl overflow-hidden bg-black/40 shrink-0 border border-white/10",children:u.jsx("img",{src:Ne.thumbnailUrl,alt:"",onError:mt=>{mt.currentTarget.src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=400&auto=format&fit=crop"},className:"w-full h-full object-cover"})}),u.jsxs("div",{className:"min-w-0",children:[u.jsx("div",{className:`text-xs font-display font-semibold truncate ${je?H?"text-red-950 font-bold":"text-white":H?"text-zinc-900":"text-zinc-200"}`,children:Ne.title}),u.jsx("div",{className:`text-[10px] font-sans truncate ${H?"text-zinc-500":"text-zinc-400"}`,children:Ne.channel})]})]}),u.jsx("div",{className:`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all ${qe?"bg-red-600 text-white shadow-sm":H?"bg-zinc-200 text-zinc-700":"bg-white/10 text-white"}`,children:qe?u.jsx(rr,{className:"w-3.5 h-3.5 fill-current"}):u.jsx(Pi,{className:"w-3.5 h-3.5 ml-0.5 fill-current"})})]},Ne.id)})})]}),v.filter(Ne=>!Ne.isCurated).length>0&&u.jsxs("div",{className:"space-y-2.5",children:[u.jsx("div",{className:`flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold ${H?"text-zinc-800":"text-zinc-300"}`,children:u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(dm,{className:"w-3.5 h-3.5 text-red-500"}),u.jsx("span",{children:"My Saved YouTube Library"})]})}),u.jsx("div",{className:"space-y-2",children:v.filter(Ne=>!Ne.isCurated).map(Ne=>{const je=(w==null?void 0:w.id)===Ne.id,qe=je&&h;return u.jsxs("div",{className:`p-3 rounded-2xl border flex items-center justify-between gap-3 transition-all ${je?H?"bg-red-50 border-red-500 ring-2 ring-red-500/20":"bg-red-500/15 border-red-400":H?"bg-zinc-50 border-zinc-200":"bg-white/[0.03] border-white/[0.06]"}`,children:[u.jsxs("div",{onClick:()=>k(Ne),className:"flex items-center gap-3 min-w-0 flex-1 cursor-pointer",children:[u.jsx("div",{className:`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${Ne.type==="playlist"?"bg-purple-600/20 text-purple-400":"bg-red-600/20 text-red-400"}`,children:Ne.type==="playlist"?u.jsx(dm,{className:"w-4 h-4"}):u.jsx(co,{className:"w-4 h-4"})}),u.jsxs("div",{className:"min-w-0",children:[u.jsx("div",{className:`text-xs font-display font-semibold truncate ${H?"text-zinc-900":"text-white"}`,children:Ne.title}),u.jsxs("div",{className:`text-[10px] font-sans truncate ${H?"text-zinc-500":"text-zinc-400"}`,children:[Ne.type==="playlist"?"Playlist":"Single Stream"," • ",Ne.url]})]})]}),u.jsxs("div",{className:"flex items-center gap-1.5 shrink-0",children:[u.jsx("button",{type:"button",onClick:()=>{qe?D():k(Ne)},className:`p-2 rounded-xl transition-colors cursor-pointer ${qe?"bg-red-600 text-white":H?"bg-zinc-200 text-zinc-800 hover:bg-zinc-300":"bg-white/10 text-white hover:bg-white/20"}`,children:qe?u.jsx(rr,{className:"w-3.5 h-3.5 fill-current"}):u.jsx(Pi,{className:"w-3.5 h-3.5 fill-current"})}),u.jsx("button",{type:"button",onClick:()=>j(Ne.id),className:`p-2 rounded-xl transition-colors cursor-pointer ${H?"text-zinc-400 hover:text-red-600":"text-zinc-500 hover:text-red-400"}`,title:"Remove from library",children:u.jsx(ss,{className:"w-3.5 h-3.5"})})]})]},Ne.id)})})]})]}),X==="ambient"&&u.jsx("div",{className:"flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 animate-fadeIn",children:u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3.5",children:pa.map(Ne=>{const je=l===Ne.id,qe=je&&o;return u.jsxs("div",{onClick:()=>{qe?m():g(Ne.id)},className:`relative p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between select-none group ${je?H?"bg-violet-50 border-violet-500 ring-2 ring-violet-500/20 shadow-sm":"bg-violet-950/35 border-violet-500/50 shadow-[0_0_25px_rgba(168,85,247,0.18)]":H?"bg-zinc-50 hover:bg-zinc-100 border-zinc-200/90 text-zinc-900":"bg-white/[0.025] hover:bg-white/[0.05] border-white/[0.08] hover:border-white/[0.18]"}`,children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-2",children:[u.jsx("span",{className:`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md border ${H?"bg-zinc-200/60 text-zinc-700 border-zinc-300":"text-zinc-400 bg-white/[0.05] border-white/[0.06]"}`,children:Ne.category}),u.jsx("div",{className:`w-7 h-7 rounded-full flex items-center justify-center transition-all ${qe?"bg-violet-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.6)]":H?"bg-zinc-200 text-zinc-700 group-hover:bg-zinc-300":"bg-white/[0.06] text-zinc-300 group-hover:bg-white/[0.15] group-hover:text-white"}`,children:qe?u.jsx(rr,{className:"w-3.5 h-3.5 fill-current"}):u.jsx(Pi,{className:"w-3.5 h-3.5 ml-0.5 fill-current"})})]}),u.jsx("h3",{className:`text-sm font-display font-semibold tracking-wide transition-colors ${H?"text-zinc-900":"text-white"}`,children:Ne.title}),u.jsx("p",{className:`text-xs font-sans mt-1 leading-snug line-clamp-2 ${H?"text-zinc-600":"text-zinc-400"}`,children:Ne.tagline})]}),u.jsxs("div",{className:`mt-3 pt-2.5 border-t flex items-center justify-between text-[10px] font-mono ${H?"border-zinc-200 text-zinc-500":"border-white/[0.06] text-zinc-400"}`,children:[u.jsx("span",{className:"truncate pr-2",children:Ne.frequency}),qe&&u.jsxs("span",{className:"flex items-center gap-1 text-emerald-500 font-semibold shrink-0",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"}),"PLAYING"]})]})]},Ne.id)})})}),u.jsxs("div",{className:`px-5 py-3 border-t flex flex-wrap items-center justify-between gap-3 shrink-0 ${H?"border-zinc-200 bg-zinc-50/60":"border-white/[0.06] bg-white/[0.01]"}`,children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(go,{className:`w-4 h-4 ${H?"text-zinc-600":"text-violet-400"}`}),u.jsx("span",{className:`text-xs font-display font-medium ${H?"text-zinc-800":"text-zinc-300"}`,children:"Auto-Stop Timer:"}),ne!==null&&u.jsxs("span",{className:`text-xs font-mono font-bold px-2 py-0.5 rounded-md border ${H?"bg-amber-100 text-amber-900 border-amber-300":"text-amber-300 bg-amber-500/15 border-amber-500/30"}`,children:[me(ne)," left"]})]}),u.jsx("div",{className:"flex items-center gap-1.5",children:[{label:"Off",val:null},{label:"15m",val:15},{label:"25m",val:25},{label:"45m",val:45},{label:"60m",val:60}].map(Ne=>u.jsx("button",{type:"button",onClick:()=>O(Ne.val),className:`px-2.5 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${oe===Ne.val?H?"bg-zinc-900 text-white font-bold shadow-sm":"bg-violet-600 text-white font-bold shadow-sm":H?"bg-zinc-200/80 text-zinc-700 hover:bg-zinc-300":"bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08]"}`,children:Ne.label},Ne.label))})]}),u.jsxs("div",{className:`p-4 sm:p-5 border-t flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 ${H?"border-zinc-200 bg-zinc-100/90":"border-white/[0.08] bg-[#070914]/90 backdrop-blur-xl"}`,children:[u.jsxs("div",{className:"flex items-center gap-3 w-full sm:w-auto",children:[u.jsx("div",{className:`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${X==="youtube"?H?"bg-red-50 border-red-200 text-red-600":"bg-red-500/20 border-red-400/40 text-red-300":H?"bg-violet-50 border-violet-200 text-violet-700":"bg-violet-600/30 border-violet-400/40 text-violet-200"}`,children:X==="youtube"?u.jsx(co,{className:`w-5 h-5 ${h?"animate-pulse text-red-500":"text-zinc-400"}`}):u.jsx(pm,{className:`w-5 h-5 ${o?"text-violet-500 animate-pulse":"text-zinc-400"}`})}),u.jsxs("div",{className:"min-w-0 flex-1",children:[u.jsx("p",{className:`text-xs font-display font-medium truncate ${H?"text-zinc-900":"text-white"}`,children:Ye}),u.jsxs("div",{className:"flex items-center gap-2 mt-0.5",children:[u.jsx(lx,{isPlaying:$e,color:X==="youtube"?"#ef4444":H?"#7c3aed":Me.accentColor,className:"w-16 h-4"}),u.jsx("span",{className:`text-[10px] font-mono ${H?"text-zinc-500":"text-zinc-400"}`,children:$e?X==="youtube"?"Streaming YouTube...":"Synthesizing...":"Audio Paused"})]})]})]}),u.jsxs("div",{className:"flex items-center gap-4 w-full sm:w-auto justify-end",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("button",{type:"button",onClick:X==="youtube"?q:y,className:`transition-colors cursor-pointer ${H?"text-zinc-600 hover:text-black":"text-zinc-400 hover:text-white"}`,title:"Toggle Mute",children:(X==="youtube"?M:f)?u.jsx(ax,{className:"w-4 h-4 text-red-500"}):u.jsx(wf,{className:"w-4 h-4"})}),u.jsx("input",{type:"range",min:"0",max:X==="youtube"?100:1,step:X==="youtube"?1:.01,value:X==="youtube"?M?0:S:f?0:d,onChange:Ne=>{const je=parseFloat(Ne.target.value);if(X==="youtube"){L(je),M&&q();try{typeof window.__forMeForceUnmute=="function"&&window.__forMeForceUnmute()}catch{}}else b(je)},className:"w-20 sm:w-24 h-1.5 bg-zinc-300 rounded-lg appearance-none cursor-pointer accent-red-600","aria-label":"Volume slider"}),u.jsx("span",{className:`text-[10px] font-mono w-8 tabular-nums ${H?"text-zinc-600":"text-zinc-400"}`,children:X==="youtube"?`${M?0:Math.round(S)}%`:`${f?0:Math.round(d*100)}%`})]}),u.jsx("button",{type:"button",onClick:()=>{X==="youtube"?D():o?m():g(l)},className:`px-5 py-2.5 rounded-xl text-white text-xs font-display font-semibold tracking-wider uppercase flex items-center gap-2 shadow-md transition-all cursor-pointer ${X==="youtube"?"bg-red-600 hover:bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.35)]":"bg-violet-600 hover:bg-violet-500 shadow-[0_0_20px_rgba(147,51,234,0.35)]"}`,children:$e?u.jsxs(u.Fragment,{children:[u.jsx(rr,{className:"w-3.5 h-3.5 fill-current"}),u.jsx("span",{children:"Pause"})]}):u.jsxs(u.Fragment,{children:[u.jsx(Pi,{className:"w-3.5 h-3.5 fill-current"}),u.jsx("span",{children:"Play"})]})})]})]})]})]})},a2=({isOpen:s,onClose:e})=>{const{profile:t,updateProfile:r,appTheme:o,setStudySubject:l,lastActiveDate:d,resetDayProgress:f,factoryReset:g}=dr(),m=o==="light",[b,y]=le.useState(t.name||"Azan"),[h,w]=le.useState(t.motto||"Remember, you are here for you."),[S,M]=le.useState(t.defaultFocusTopic||"Engineering"),[v,_]=le.useState(t.defaultFocusMode||"Deep Work"),[P,k]=le.useState(!1),[D,U]=le.useState(null);if(le.useEffect(()=>{y(t.name||"Azan"),w(t.motto||"Remember, you are here for you."),M(t.defaultFocusTopic||"Engineering"),_(t.defaultFocusMode||"Deep Work")},[t,s]),le.useEffect(()=>{const j=H=>{H.key==="Escape"&&s&&e()};return window.addEventListener("keydown",j),()=>window.removeEventListener("keydown",j)},[s,e]),!s)return null;const R=j=>{j.preventDefault();const H=b.trim()||"Azan",X=h.trim()||"Remember, you are here for you.",F=S.trim()||"Engineering",Q=v.trim()||"Deep Work";r({name:H,motto:X,defaultFocusTopic:F,defaultFocusMode:Q}),l(F),k(!0),setTimeout(()=>{k(!1),e()},500)},E=()=>{y("Azan"),w("Remember, you are here for you."),M("Engineering"),_("Deep Work"),r({name:"Azan",motto:"Remember, you are here for you.",defaultFocusTopic:"Engineering",defaultFocusMode:"Deep Work"}),l("Engineering")},L=()=>{window.confirm("Start a fresh day? This will uncheck today's tasks & habits, reset hydration to 0%, and reset focus timer.")&&(f(),U("Today's progress has been reset!"),setTimeout(()=>U(null),3e3))},q=()=>{window.confirm("WARNING: Are you sure you want to perform a factory reset? All saved tasks, habits, focus history, and settings will be permanently wiped and restored to default.")&&(g(),U("All app data restored to factory defaults."),setTimeout(()=>{U(null),e()},1500))},W=()=>{const j=new Date().getHours();return j>=5&&j<12?"Good morning":j>=12&&j<17?"Good afternoon":j>=17&&j<22?"Good evening":"Late night focus"};return u.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-fadeIn select-none ${m?"bg-black/35":"bg-black/80"}`,children:[u.jsx("div",{className:"fixed inset-0",onClick:e,"aria-hidden":"true"}),u.jsxs("div",{role:"dialog","aria-modal":"true","aria-labelledby":"profile-modal-title",className:`relative w-full max-w-lg overflow-hidden rounded-3xl border shadow-2xl flex flex-col z-10 ${m?"bg-white/95 border-zinc-200 text-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)]":"cosmic-card border-white/[0.14] text-white shadow-2xl"}`,children:[u.jsxs("div",{className:`flex items-center justify-between p-5 pb-3 border-b shrink-0 ${m?"border-zinc-200":"border-white/[0.08]"}`,children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:`w-8 h-8 rounded-xl border flex items-center justify-center ${m?"bg-amber-50 border-amber-200 text-amber-700":"bg-amber-500/20 border-amber-400/30 text-amber-300"}`,children:u.jsx(ix,{className:"w-4 h-4"})}),u.jsxs("div",{children:[u.jsx("h2",{id:"profile-modal-title",className:`text-sm font-display uppercase tracking-widest font-bold ${m?"text-zinc-900":"text-white"}`,children:"Personal Sanctuary Profile"}),u.jsx("p",{className:`text-[11px] font-sans ${m?"text-zinc-500":"text-zinc-400"}`,children:"Tailor your name, daily motto & focus targets"})]})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("button",{type:"button",onClick:E,"aria-label":"Reset profile to defaults",title:"Reset to defaults",className:`p-2 rounded-xl transition-colors cursor-pointer ${m?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white"}`,children:u.jsx(Rr,{className:"w-3.5 h-3.5"})}),u.jsx("button",{type:"button",onClick:e,"aria-label":"Close Profile Modal",className:`p-2 rounded-xl transition-colors cursor-pointer ${m?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white"}`,children:u.jsx(or,{className:"w-4 h-4"})})]})]}),u.jsxs("form",{onSubmit:R,className:"p-6 space-y-4",children:[u.jsxs("div",{className:`p-4 rounded-2xl border text-center space-y-1 transition-all ${m?"bg-zinc-50 border-zinc-200 text-zinc-800":"bg-white/[0.03] border-white/[0.08] text-zinc-200"}`,children:[u.jsx("span",{className:`text-[10px] font-mono uppercase tracking-widest ${m?"text-zinc-500":"text-zinc-400"}`,children:"Live Greeting Preview"}),u.jsxs("p",{className:"text-xs sm:text-sm font-sans leading-relaxed",children:[W(),","," ",u.jsx("strong",{className:m?"text-zinc-950":"text-white",children:b.trim()||"Azan"}),". •"," ",u.jsxs("span",{className:`italic ${m?"text-zinc-700 font-medium":"text-zinc-300"}`,children:["“",h.trim()||"Remember, you are here for you.","”"]})]})]}),u.jsxs("div",{className:"space-y-1.5",children:[u.jsxs("label",{className:`text-xs font-semibold flex items-center justify-between ${m?"text-zinc-800":"text-zinc-200"}`,children:[u.jsxs("span",{className:"flex items-center gap-1.5",children:[u.jsx(WM,{className:"w-3.5 h-3.5 text-amber-500"}),u.jsx("span",{children:"Your Name"})]}),u.jsx("span",{className:`text-[10px] font-normal ${m?"text-zinc-500":"text-zinc-400"}`,children:"Used in greetings & daily focus"})]}),u.jsx("input",{type:"text",value:b,onChange:j=>y(j.target.value),placeholder:"e.g. Azan",className:"w-full cosmic-input rounded-xl px-3.5 py-2.5 text-xs font-medium"})]}),u.jsxs("div",{className:"space-y-1.5",children:[u.jsxs("label",{className:`text-xs font-semibold flex items-center justify-between ${m?"text-zinc-800":"text-zinc-200"}`,children:[u.jsxs("span",{className:"flex items-center gap-1.5",children:[u.jsx(XM,{className:"w-3.5 h-3.5 text-violet-400"}),u.jsx("span",{children:"Daily Mantra / Motto"})]}),u.jsx("span",{className:`text-[10px] font-normal ${m?"text-zinc-500":"text-zinc-400"}`,children:"Displayed on your wallpaper"})]}),u.jsx("input",{type:"text",value:h,onChange:j=>w(j.target.value),placeholder:"e.g. Remember, you are here for you.",className:"w-full cosmic-input rounded-xl px-3.5 py-2.5 text-xs font-medium"})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-3 pt-1",children:[u.jsxs("div",{className:"space-y-1.5",children:[u.jsxs("label",{className:`text-xs font-semibold flex items-center gap-1.5 ${m?"text-zinc-800":"text-zinc-200"}`,children:[u.jsx(ZM,{className:"w-3.5 h-3.5 text-emerald-400"}),u.jsx("span",{children:"Primary Focus Topic"})]}),u.jsx("input",{type:"text",value:S,onChange:j=>M(j.target.value),placeholder:"e.g. Engineering",className:"w-full cosmic-input rounded-xl px-3.5 py-2 text-xs"})]}),u.jsxs("div",{className:"space-y-1.5",children:[u.jsxs("label",{className:`text-xs font-semibold flex items-center gap-1.5 ${m?"text-zinc-800":"text-zinc-200"}`,children:[u.jsx(Bf,{className:"w-3.5 h-3.5 text-amber-500"}),u.jsx("span",{children:"Default Focus Mode"})]}),u.jsx("input",{type:"text",value:v,onChange:j=>_(j.target.value),placeholder:"e.g. Deep Work",className:"w-full cosmic-input rounded-xl px-3.5 py-2 text-xs"})]})]}),u.jsxs("div",{className:"pt-2",children:[u.jsx("span",{className:`text-[10px] font-mono uppercase tracking-wider block mb-1.5 ${m?"text-zinc-500":"text-zinc-400"}`,children:"Quick Mantras"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:["Remember, you are here for you.","Discipline equals true freedom.","Deep focus over scattered noise.","Build with relentless craft."].map(j=>u.jsxs("button",{type:"button",onClick:()=>w(j),className:`text-[11px] px-2.5 py-1 rounded-lg border transition-all text-left cursor-pointer ${h===j?m?"bg-violet-100 border-violet-300 text-violet-900 font-medium":"bg-violet-600/30 border-violet-400/50 text-violet-200 font-medium":m?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300"}`,children:["“",j,"”"]},j))})]}),u.jsxs("div",{className:`p-3.5 rounded-2xl border space-y-2.5 ${m?"bg-zinc-50 border-zinc-200":"bg-white/[0.02] border-white/[0.08]"}`,children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx(hg,{className:`w-3.5 h-3.5 ${m?"text-violet-700":"text-violet-400"}`}),u.jsx("span",{className:`text-xs font-semibold ${m?"text-zinc-800":"text-zinc-200"}`,children:"Daily Rollover & Data Control"})]}),u.jsxs("span",{className:`text-[10px] font-mono ${m?"text-zinc-500":"text-zinc-400"}`,children:["Date: ",d]})]}),D&&u.jsxs("div",{className:"p-2 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs flex items-center gap-2",children:[u.jsx(ir,{className:"w-3.5 h-3.5 shrink-0"}),u.jsx("span",{children:D})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1",children:[u.jsxs("button",{type:"button",onClick:L,className:`px-3 py-2 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${m?"bg-white hover:bg-zinc-100 text-zinc-800 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-200 border-white/[0.10]"}`,title:"Uncheck today's tasks & habits, reset hydration",children:[u.jsx(Rr,{className:"w-3.5 h-3.5 text-violet-400"}),u.jsx("span",{children:"Start Fresh Day"})]}),u.jsxs("button",{type:"button",onClick:q,className:`px-3 py-2 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${m?"bg-rose-50 hover:bg-rose-100 text-rose-700 border-rose-200":"bg-rose-950/20 hover:bg-rose-900/40 text-rose-300 border-rose-500/20 hover:border-rose-500/40"}`,title:"Wipe data and restore factory defaults",children:[u.jsx(ss,{className:"w-3.5 h-3.5 text-rose-400"}),u.jsx("span",{children:"Factory Reset"})]})]})]}),u.jsxs("div",{className:"pt-4 flex items-center justify-end gap-2.5",children:[u.jsx("button",{type:"button",onClick:e,className:`px-4 py-2.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${m?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300"}`,children:"Cancel"}),u.jsx("button",{type:"submit",className:`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all cursor-pointer ${P?"bg-emerald-500 text-white":m?"bg-zinc-900 hover:bg-zinc-800 text-white":"bg-violet-600 hover:bg-violet-500 text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]"}`,children:P?u.jsxs(u.Fragment,{children:[u.jsx(ir,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Saved!"})]}):u.jsxs(u.Fragment,{children:[u.jsx(Cs,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Save Profile"})]})})]})]})]})]})},o2=({isOpen:s,onClose:e})=>{const{studySessions:t,deleteStudySession:r,studySubjects:o,addStudySubject:l,deleteStudySubject:d,dailyStudyTargetHours:f,setDailyStudyTargetHours:g,setStudySubject:m,appTheme:b}=dr(),y=b==="light",[h,w]=le.useState("analytics"),[S,M]=le.useState("7d"),[v,_]=le.useState("all"),[P,k]=le.useState(""),[D,U]=le.useState("#8b5cf6"),[R,E]=le.useState(!1);le.useEffect(()=>{const I=oe=>{oe.key==="Escape"&&s&&e()};return window.addEventListener("keydown",I),()=>window.removeEventListener("keydown",I)},[s,e]);const L=["#8b5cf6","#06b6d4","#10b981","#f59e0b","#f43f5e","#3b82f6","#ec4899","#a855f7"],q=le.useMemo(()=>new Date().toISOString().slice(0,10),[]),W=I=>{const oe=Math.round(I),O=Math.floor(oe/60),ne=oe%60;return O===0?`${ne}m`:ne===0?`${O}h`:`${O}h ${ne}m`},j=le.useMemo(()=>t.filter(I=>I.timestamp.slice(0,10)===q).reduce((I,oe)=>I+oe.durationSeconds/60,0),[t,q]),H=f*60,X=Math.min(100,Math.round(j/Math.max(1,H)*100)),F=Math.max(0,H-j),Q=le.useMemo(()=>{const I=[],oe=new Date;for(let O=6;O>=0;O--){const ne=new Date(oe);ne.setDate(ne.getDate()-O);const ie=ne.toISOString().slice(0,10),Me=ne.toLocaleDateString("en-US",{weekday:"short"}),me=ne.toLocaleDateString("en-US",{month:"numeric",day:"numeric"}),he=t.filter(Ye=>Ye.timestamp.slice(0,10)===ie).reduce((Ye,$e)=>Ye+$e.durationSeconds/60,0);I.push({dateStr:ie,label:me,dayName:Me,minutes:he,isToday:ie===q})}return I},[t,q]),ue=le.useMemo(()=>{const I=[],oe=new Date;for(let O=29;O>=0;O--){const ne=new Date(oe);ne.setDate(ne.getDate()-O);const ie=ne.toISOString().slice(0,10),Me=ne.toLocaleDateString("en-US",{month:"numeric",day:"numeric"}),me=t.filter(he=>he.timestamp.slice(0,10)===ie).reduce((he,Ye)=>he+Ye.durationSeconds/60,0);I.push({dateStr:ie,label:Me,minutes:me,isToday:ie===q})}return I},[t,q]),Y=le.useMemo(()=>(S==="7d"?Q:ue).reduce((oe,O)=>oe+O.minutes,0),[S,Q,ue]),se=le.useMemo(()=>{let I=0;const oe=new Date;let O=new Date(oe);t.some(ie=>ie.timestamp.slice(0,10)===q&&ie.durationSeconds>=60)||O.setDate(O.getDate()-1);for(let ie=0;ie<90;ie++){const Me=O.toISOString().slice(0,10);if(t.filter(he=>he.timestamp.slice(0,10)===Me).reduce((he,Ye)=>he+Ye.durationSeconds/60,0)>0)I++,O.setDate(O.getDate()-1);else break}return I},[t,q]),G=le.useMemo(()=>{const I=new Date;I.setDate(I.getDate()-(S==="7d"?7:30));const oe=I.toISOString().slice(0,10),O=t.filter(Me=>Me.timestamp.slice(0,10)>=oe),ne={};O.forEach(Me=>{const me=Me.subject||"Engineering";ne[me]=(ne[me]||0)+Me.durationSeconds/60});const ie=Object.values(ne).reduce((Me,me)=>Me+me,0);return Object.entries(ne).map(([Me,me])=>{const he=o.find(Ne=>Ne.name.toLowerCase()===Me.toLowerCase()),Ye=(he==null?void 0:he.color)||"#8b5cf6",$e=ie>0?Math.round(me/ie*100):0;return{name:Me,minutes:me,color:Ye,percentage:$e}}).sort((Me,me)=>me.minutes-Me.minutes)},[t,o,S]),Z=le.useMemo(()=>{let I=[...t];return v!=="all"&&(I=I.filter(oe=>(oe.subject||"Engineering").toLowerCase()===v.toLowerCase())),I.sort((oe,O)=>new Date(O.timestamp).getTime()-new Date(oe.timestamp).getTime())},[t,v]),z=I=>{I.preventDefault(),P.trim()&&(l(P.trim(),D),k(""),E(!1))};return s?u.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto backdrop-blur-2xl bg-black/75 animate-fadeIn select-none",role:"dialog","aria-modal":"true","aria-label":"Study & Focus Analytics Dashboard",children:[u.jsx("div",{className:"fixed inset-0",onClick:e}),u.jsxs("div",{className:`relative w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col rounded-3xl border shadow-2xl z-10 transition-all ${y?"bg-white/95 border-zinc-200/90 text-zinc-900 shadow-[0_25px_70px_rgba(0,0,0,0.15)]":"bg-[#0b0d18]/95 border-white/[0.12] text-zinc-100 shadow-[0_30px_90px_rgba(0,0,0,0.9)]"}`,children:[u.jsxs("div",{className:`flex items-center justify-between px-6 py-4 border-b shrink-0 ${y?"border-zinc-200/90 bg-zinc-50/70":"border-white/[0.06] bg-black/25"}`,children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("div",{className:`w-9 h-9 rounded-2xl flex items-center justify-center border shadow-xs ${y?"bg-violet-100 border-violet-200 text-violet-700":"bg-violet-600/20 border-violet-500/40 text-violet-400"}`,children:u.jsx(Sf,{className:"w-4 h-4"})}),u.jsxs("div",{children:[u.jsx("h2",{className:"text-sm font-sans font-bold tracking-tight",children:"Study & Focus Analytics"}),u.jsx("p",{className:`text-[11px] font-sans ${y?"text-zinc-500":"text-zinc-400"}`,children:"Clear daily follow-through, weekly trajectories, and subject logs"})]})]}),u.jsx("button",{type:"button",onClick:e,"aria-label":"Close Analytics Dashboard",className:`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${y?"bg-zinc-100 hover:bg-zinc-200 text-zinc-600":"bg-white/[0.06] hover:bg-white/[0.12] text-zinc-400 hover:text-white"}`,children:u.jsx(or,{className:"w-4 h-4"})})]}),u.jsxs("div",{className:`px-6 py-2.5 border-b shrink-0 flex items-center justify-between gap-3 ${y?"border-zinc-200/80 bg-zinc-50/40":"border-white/[0.04] bg-white/[0.015]"}`,children:[u.jsx("div",{className:`grid grid-cols-3 gap-1 p-1 rounded-2xl ${y?"bg-zinc-200/60":"bg-white/[0.04]"}`,children:[{id:"analytics",label:"Analytics & Trajectory",icon:QM},{id:"history",label:`Session Ledger (${t.length})`,icon:go},{id:"subjects",label:`Subjects (${o.length})`,icon:KM}].map(I=>{const oe=I.icon,O=h===I.id;return u.jsxs("button",{type:"button",onClick:()=>w(I.id),className:`flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl text-xs font-sans font-medium transition-all cursor-pointer ${O?y?"bg-white text-zinc-950 font-bold shadow-xs":"bg-white text-zinc-950 font-bold shadow-[0_2px_10px_rgba(255,255,255,0.15)]":y?"text-zinc-600 hover:text-zinc-950 hover:bg-white/60":"text-zinc-400 hover:text-white hover:bg-white/[0.06]"}`,children:[u.jsx(oe,{className:"w-3.5 h-3.5 shrink-0"}),u.jsx("span",{className:"truncate",children:I.label})]},I.id)})}),h==="analytics"&&u.jsxs("div",{className:`flex items-center gap-1 p-0.5 rounded-xl border ${y?"bg-zinc-100 border-zinc-200":"bg-white/[0.04] border-white/10"}`,children:[u.jsx("button",{type:"button",onClick:()=>M("7d"),className:`px-2.5 py-1 rounded-lg text-[10px] font-mono font-medium transition-all cursor-pointer ${S==="7d"?y?"bg-white text-zinc-900 shadow-xs font-bold":"bg-white/15 text-white font-bold":y?"text-zinc-500 hover:text-zinc-900":"text-zinc-400 hover:text-white"}`,children:"7 Days"}),u.jsx("button",{type:"button",onClick:()=>M("30d"),className:`px-2.5 py-1 rounded-lg text-[10px] font-mono font-medium transition-all cursor-pointer ${S==="30d"?y?"bg-white text-zinc-900 shadow-xs font-bold":"bg-white/15 text-white font-bold":y?"text-zinc-500 hover:text-zinc-900":"text-zinc-400 hover:text-white"}`,children:"30 Days"})]})]}),u.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-6",children:[h==="analytics"&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:`p-5 rounded-3xl border transition-all ${y?"bg-zinc-50/90 border-zinc-200 shadow-xs":"bg-white/[0.03] border-white/[0.08]"}`,children:[u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4",children:[u.jsxs("div",{children:[u.jsx("span",{className:`text-[10px] font-mono uppercase tracking-widest font-semibold block ${y?"text-zinc-500":"text-zinc-400"}`,children:"Today's Study Follow-Through"}),u.jsxs("div",{className:"flex items-baseline gap-2 mt-1",children:[u.jsx("span",{className:"text-3xl font-display font-bold tabular-nums",children:W(j)}),u.jsxs("span",{className:`text-xs font-mono ${y?"text-zinc-500":"text-zinc-400"}`,children:["/ ",f,"h target (",X,"%)"]})]})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs("div",{className:`flex items-center gap-1.5 px-3 py-1.5 rounded-2xl border ${se>0?y?"bg-amber-50 border-amber-200 text-amber-800":"bg-amber-500/15 border-amber-500/30 text-amber-300":y?"bg-zinc-100 border-zinc-200 text-zinc-600":"bg-white/[0.04] border-white/[0.08] text-zinc-400"}`,children:[u.jsx(Bf,{className:"w-4 h-4 text-amber-400 fill-amber-400"}),u.jsxs("span",{className:"text-xs font-mono font-bold",children:[se," Day Streak"]})]}),u.jsxs("div",{className:`flex items-center gap-1.5 px-3 py-1.5 rounded-2xl border ${y?"bg-zinc-100 border-zinc-200 text-zinc-700":"bg-white/[0.04] border-white/[0.08] text-zinc-300"}`,children:[u.jsx(hg,{className:"w-3.5 h-3.5 text-cyan-400"}),u.jsxs("span",{className:"text-xs font-mono",children:[W(Y)," total (",S,")"]})]})]})]}),u.jsx("div",{className:"w-full bg-white/[0.08] h-2.5 rounded-full overflow-hidden p-0.5",children:u.jsx("div",{className:`h-full rounded-full transition-all duration-1000 ${X>=100?"bg-gradient-to-r from-emerald-500 to-emerald-400":"bg-gradient-to-r from-violet-500 to-cyan-400"}`,style:{width:`${X}%`}})}),u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mt-3 pt-3 border-t border-white/[0.06] text-xs",children:[u.jsx("div",{className:"flex items-center gap-1.5",children:X>=100?u.jsxs("span",{className:"text-emerald-400 font-sans font-medium flex items-center gap-1",children:[u.jsx(BM,{className:"w-3.5 h-3.5"}),"Target reached for today! Great dedication."]}):u.jsxs("span",{className:y?"text-zinc-600":"text-zinc-400",children:[W(F)," remaining to hit your daily goal."]})}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:`text-[11px] font-sans ${y?"text-zinc-500":"text-zinc-400"}`,children:"Daily Goal:"}),[2,3,4,5,6].map(I=>u.jsxs("button",{type:"button",onClick:()=>g(I),className:`px-2 py-0.5 rounded-lg text-[10px] font-mono transition-all cursor-pointer ${f===I?y?"bg-zinc-900 text-white font-bold":"bg-white text-zinc-950 font-bold":y?"bg-zinc-200/70 hover:bg-zinc-200 text-zinc-700":"bg-white/[0.06] hover:bg-white/[0.1] text-zinc-300"}`,children:[I,"h"]},I))]})]})]}),u.jsxs("div",{className:`p-5 rounded-3xl border transition-all ${y?"bg-zinc-50/70 border-zinc-200":"bg-white/[0.025] border-white/[0.08]"}`,children:[u.jsx("div",{className:"flex items-center justify-between mb-4",children:u.jsxs("div",{children:[u.jsx("h3",{className:"text-xs font-sans font-bold uppercase tracking-wider",children:S==="7d"?"7-Day Focus Distribution":"30-Day Focus Activity"}),u.jsxs("p",{className:`text-[11px] font-sans mt-0.5 ${y?"text-zinc-500":"text-zinc-400"}`,children:["Visualizing hours invested per day vs. ",f,"h daily target"]})]})}),S==="7d"?u.jsx("div",{className:"grid grid-cols-7 gap-2 pt-6 pb-2 items-end min-h-[160px]",children:Q.map(I=>{const oe=Math.max(f*1.4,6),O=I.minutes/60,ne=Math.min(100,Math.round(O/oe*100)),ie=O>=f;return u.jsxs("div",{className:"flex flex-col items-center gap-2 group",children:[u.jsx("span",{className:`text-[10px] font-mono transition-opacity ${I.minutes>0?y?"text-zinc-700 font-semibold":"text-zinc-300 font-semibold":"opacity-40 text-zinc-500"}`,children:I.minutes>0?W(I.minutes):"—"}),u.jsxs("div",{className:"w-full max-w-[42px] h-28 bg-white/[0.04] rounded-xl flex items-end p-1 overflow-hidden relative",children:[u.jsx("div",{className:"absolute inset-x-0 border-b border-dashed border-white/20 pointer-events-none z-10",style:{bottom:`${Math.round(f/oe*100)}%`},title:`Target: ${f}h`}),u.jsx("div",{className:`w-full rounded-lg transition-all duration-700 ${ie?"bg-gradient-to-t from-emerald-500 to-emerald-400":I.minutes>0?"bg-gradient-to-t from-violet-600 to-cyan-400":"bg-transparent"} ${I.isToday?"ring-2 ring-white/50":""}`,style:{height:`${Math.max(I.minutes>0?8:0,ne)}%`}})]}),u.jsxs("div",{className:"text-center",children:[u.jsx("span",{className:`text-xs font-sans font-bold block ${I.isToday?"text-violet-400":y?"text-zinc-800":"text-zinc-200"}`,children:I.dayName}),u.jsx("span",{className:`text-[10px] font-mono block ${y?"text-zinc-500":"text-zinc-400"}`,children:I.label})]})]},I.dateStr)})}):u.jsxs("div",{className:"space-y-2 pt-2",children:[u.jsx("div",{className:"grid grid-cols-10 sm:grid-cols-15 gap-1.5 pt-2",children:ue.map(I=>{const oe=I.minutes/60,O=oe>=f,ne=oe===0?"bg-white/[0.04]":oe<1?"bg-violet-600/30":oe<2.5?"bg-violet-500/60":O?"bg-emerald-400":"bg-cyan-400";return u.jsxs("div",{title:`${I.dateStr}: ${W(I.minutes)} studied`,className:`h-9 rounded-lg flex flex-col items-center justify-center text-[10px] font-mono cursor-pointer transition-transform hover:scale-105 border ${I.isToday?"border-white/80 ring-1 ring-white/40":"border-transparent"} ${ne}`,children:[u.jsx("span",{className:"text-[9px] opacity-70 leading-none",children:I.label.split("/")[1]}),I.minutes>0&&u.jsxs("span",{className:"text-[9px] font-bold leading-none mt-0.5",children:[Math.round(oe*10)/10,"h"]})]},I.dateStr)})}),u.jsxs("div",{className:"flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-2",children:[u.jsx("span",{children:"30 days ago"}),u.jsxs("div",{className:"flex items-center gap-1.5 text-[10px]",children:[u.jsx("span",{children:"0h"}),u.jsx("div",{className:"w-2.5 h-2.5 rounded bg-white/[0.04]"}),u.jsx("div",{className:"w-2.5 h-2.5 rounded bg-violet-600/40"}),u.jsx("div",{className:"w-2.5 h-2.5 rounded bg-violet-500/70"}),u.jsx("div",{className:"w-2.5 h-2.5 rounded bg-emerald-400"}),u.jsx("span",{children:"Target hit"})]}),u.jsx("span",{children:"Today"})]})]})]}),u.jsxs("div",{className:`p-5 rounded-3xl border transition-all ${y?"bg-zinc-50/70 border-zinc-200":"bg-white/[0.025] border-white/[0.08]"}`,children:[u.jsxs("div",{className:"flex items-center justify-between mb-3",children:[u.jsxs("div",{children:[u.jsxs("h3",{className:"text-xs font-sans font-bold uppercase tracking-wider",children:["Subject Distribution (",S,")"]}),u.jsx("p",{className:`text-[11px] font-sans ${y?"text-zinc-500":"text-zinc-400"}`,children:"Proportion of time invested across different subjects"})]}),u.jsxs("button",{type:"button",onClick:()=>w("subjects"),className:"text-xs text-violet-400 hover:text-violet-300 font-sans flex items-center gap-1 cursor-pointer",children:["Manage Subjects",u.jsx(OM,{className:"w-3.5 h-3.5"})]})]}),G.length===0?u.jsx("div",{className:"py-6 text-center text-xs text-zinc-500",children:"No focus sessions logged in this timeframe yet. Start a timer or log past study!"}):u.jsxs("div",{className:"space-y-3",children:[u.jsx("div",{className:"w-full h-3 rounded-full overflow-hidden flex bg-white/[0.05]",children:G.map(I=>u.jsx("div",{style:{width:`${I.percentage}%`,backgroundColor:I.color},title:`${I.name}: ${I.percentage}% (${W(I.minutes)})`,className:"h-full transition-all duration-500"},I.name))}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-2",children:G.map(I=>u.jsxs("div",{className:`p-2.5 rounded-2xl border flex items-center justify-between gap-2 ${y?"bg-white border-zinc-200":"bg-white/[0.03] border-white/[0.06]"}`,children:[u.jsxs("div",{className:"flex items-center gap-2 truncate",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full shrink-0",style:{backgroundColor:I.color}}),u.jsx("span",{className:"text-xs font-sans font-medium truncate",children:I.name})]}),u.jsxs("div",{className:"text-right shrink-0",children:[u.jsx("span",{className:"text-xs font-mono font-bold block",children:W(I.minutes)}),u.jsxs("span",{className:"text-[10px] font-mono text-zinc-500",children:[I.percentage,"%"]})]})]},I.name))})]})]})]}),h==="history"&&u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-xs font-sans font-bold uppercase tracking-wider",children:"Focus Session History"}),u.jsx("p",{className:`text-[11px] font-sans ${y?"text-zinc-500":"text-zinc-400"}`,children:"Chronological record of completed stopwatch, pomodoro, and manual logs"})]}),u.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[u.jsx("span",{className:`text-[11px] font-sans ${y?"text-zinc-500":"text-zinc-400"}`,children:"Filter:"}),u.jsx("button",{type:"button",onClick:()=>_("all"),className:`px-2.5 py-1 rounded-xl text-xs font-sans transition-all cursor-pointer ${v==="all"?y?"bg-zinc-900 text-white font-bold":"bg-white text-zinc-950 font-bold":y?"bg-zinc-100 text-zinc-700":"bg-white/[0.05] text-zinc-300"}`,children:"All"}),o.map(I=>u.jsxs("button",{type:"button",onClick:()=>_(I.name),className:`px-2.5 py-1 rounded-xl text-xs font-sans transition-all cursor-pointer flex items-center gap-1.5 ${v.toLowerCase()===I.name.toLowerCase()?y?"bg-zinc-900 text-white font-bold":"bg-white text-zinc-950 font-bold":y?"bg-zinc-100 text-zinc-700":"bg-white/[0.05] text-zinc-300"}`,children:[u.jsx("span",{className:"w-2 h-2 rounded-full",style:{backgroundColor:I.color}}),u.jsx("span",{children:I.name})]},I.id))]})]}),Z.length===0?u.jsxs("div",{className:`p-8 rounded-3xl border text-center ${y?"bg-zinc-50 border-zinc-200 text-zinc-500":"bg-white/[0.02] border-white/10 text-zinc-400"}`,children:[u.jsx(UM,{className:"w-8 h-8 mx-auto mb-2 opacity-50 text-violet-400"}),u.jsx("p",{className:"text-sm font-sans font-medium",children:"No sessions found."}),u.jsx("p",{className:"text-xs mt-1",children:"Start a timer or log past study to record your focus history."})]}):u.jsx("div",{className:"space-y-2",children:Z.map(I=>{const oe=new Date(I.timestamp),ne=I.timestamp.slice(0,10)===q?"Today":oe.toLocaleDateString("en-US",{month:"short",day:"numeric",weekday:"short"}),ie=oe.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"}),Me=Math.round(I.durationSeconds/60),me=o.find(Ye=>Ye.name.toLowerCase()===(I.subject||"").toLowerCase()),he=(me==null?void 0:me.color)||"#8b5cf6";return u.jsxs("div",{className:`p-3 sm:p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 ${y?"bg-white hover:bg-zinc-50 border-zinc-200/90 shadow-xs":"bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.06]"}`,children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("span",{className:"w-3 h-3 rounded-full shrink-0 shadow-xs",style:{backgroundColor:he}}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"text-xs font-sans font-bold",children:I.subject||"Engineering"}),u.jsx("span",{className:`text-[10px] font-mono px-2 py-0.5 rounded-full border ${y?"bg-zinc-100 border-zinc-200 text-zinc-600":"bg-white/[0.04] border-white/10 text-zinc-400"}`,children:I.mode||"Stopwatch"})]}),u.jsxs("span",{className:`text-[11px] font-mono ${y?"text-zinc-500":"text-zinc-400"}`,children:[ne," at ",ie]})]})]}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsxs("span",{className:"text-sm font-mono font-bold text-violet-400",children:["+",W(Me)]}),u.jsx("button",{type:"button",onClick:()=>r(I.id),className:"p-1.5 rounded-lg text-zinc-500 hover:text-rose-400 transition-colors cursor-pointer",title:"Delete this session record",children:u.jsx(ss,{className:"w-3.5 h-3.5"})})]})]},I.id)})})]}),h==="subjects"&&u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-xs font-sans font-bold uppercase tracking-wider",children:"Study Subjects & Categories"}),u.jsx("p",{className:`text-[11px] font-sans ${y?"text-zinc-500":"text-zinc-400"}`,children:"Customize the subjects you tag when running focus sprints or logging study"})]}),!R&&u.jsxs("button",{type:"button",onClick:()=>E(!0),className:"flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-violet-600 hover:bg-violet-500 text-white cursor-pointer shadow-xs transition-colors",children:[u.jsx(xo,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Add Subject"})]})]}),R&&u.jsxs("form",{onSubmit:z,className:`p-4 rounded-2xl border space-y-3 animate-fadeIn ${y?"bg-zinc-50 border-zinc-200":"bg-white/[0.03] border-white/10"}`,children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:"text-xs font-sans font-bold",children:"New Subject Tag"}),u.jsx("button",{type:"button",onClick:()=>E(!1),className:"text-xs text-zinc-500 hover:text-zinc-300 cursor-pointer",children:"Cancel"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("input",{type:"text",required:!0,placeholder:"e.g. Neuroscience, Physics, Design",value:P,onChange:I=>k(I.target.value),className:`flex-1 px-3 py-2 rounded-xl border text-xs outline-none ${y?"bg-white border-zinc-300 text-zinc-900":"bg-black/50 border-white/15 text-white"}`}),u.jsx("div",{className:"flex items-center gap-1",children:L.map(I=>u.jsx("button",{type:"button",onClick:()=>U(I),style:{backgroundColor:I},className:`w-6 h-6 rounded-full cursor-pointer transition-transform ${D===I?"scale-125 ring-2 ring-white ring-offset-2":"hover:scale-110"}`},I))}),u.jsx("button",{type:"submit",className:"px-4 py-2 rounded-xl text-xs font-bold bg-violet-600 hover:bg-violet-500 text-white cursor-pointer",children:"Save"})]})]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5",children:o.map(I=>u.jsxs("div",{className:`p-3.5 rounded-2xl border flex items-center justify-between transition-all ${y?"bg-white border-zinc-200 shadow-xs":"bg-white/[0.03] border-white/[0.08]"}`,children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("span",{className:"w-3.5 h-3.5 rounded-full",style:{backgroundColor:I.color}}),u.jsx("span",{className:"text-xs font-sans font-bold",children:I.name})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("button",{type:"button",onClick:()=>{m(I.name),e()},className:`px-2.5 py-1 rounded-xl text-[10px] font-sans font-medium border transition-colors cursor-pointer ${y?"bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border-zinc-200":"bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 border-white/10"}`,title:"Set as current active focus subject",children:"Set Active"}),o.length>1&&u.jsx("button",{type:"button",onClick:()=>d(I.id),className:"p-1 text-zinc-500 hover:text-rose-400 cursor-pointer",title:"Delete subject",children:u.jsx(ss,{className:"w-3.5 h-3.5"})})]})]},I.id))})]})]})]})]}):null},l2=({isOpen:s,onClose:e,onStartFocusForRoutine:t})=>{const{routines:r,activeRoutineBlock:o,activeRoutineMinutesLeft:l,toggleRoutineChecklistItem:d,updateRoutineChecklistItem:f,addRoutineChecklistItem:g,deleteRoutineChecklistItem:m,updateRoutineBlock:b,addRoutineBlock:y,deleteRoutineBlock:h,appTheme:w}=dr(),S=w==="light",[M,v]=le.useState("");le.useEffect(()=>{o?v(o.id):r.length>0&&!M&&v(r[0].id)},[o,r]);const _=r.find(he=>he.id===M)||o||r[0],[P,k]=le.useState(null),[D,U]=le.useState(""),[R,E]=le.useState(""),[L,q]=le.useState(!1),[W,j]=le.useState(""),[H,X]=le.useState(""),[F,Q]=le.useState(!1),[ue,Y]=le.useState(""),[se,G]=le.useState("14:00"),[Z,z]=le.useState("16:00");if(le.useEffect(()=>{const he=Ye=>{Ye.key==="Escape"&&s&&e()};return window.addEventListener("keydown",he),()=>window.removeEventListener("keydown",he)},[s,e]),!s)return null;const I=(_==null?void 0:_.checklist)||[],oe=I.filter(he=>he.completed).length,O=(he,Ye)=>{k(he),U(Ye)},ne=he=>{D.trim()&&_&&f(_.id,he,D.trim()),k(null)},ie=he=>{he.preventDefault(),R.trim()&&_&&(g(_.id,R.trim()),E(""))},Me=()=>{_&&W&&H&&(b(_.id,{startTime:W,endTime:H,timeRange:`${W} – ${H}`}),q(!1))},me=he=>{he.preventDefault(),ue.trim()&&(y({title:ue.trim(),startTime:se,endTime:Z,timeRange:`${se} – ${Z}`,description:"Personal focus rhythm",iconType:"custom",colorTag:"#06b6d4",checklist:[]}),Y(""),Q(!1))};return u.jsxs("div",{className:"fixed inset-x-0 bottom-24 z-40 flex justify-center px-4 animate-fadeIn pointer-events-auto select-none",children:[u.jsx("div",{className:"fixed inset-0 -z-10",onClick:e}),u.jsxs("div",{className:`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 transition-all ${S?"bg-white/95 border-zinc-200 text-zinc-900 shadow-zinc-900/10":"cosmic-card border-white/[0.15] text-white shadow-black/80"}`,children:[u.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${S?"border-zinc-200":"border-white/[0.08]"}`,children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full animate-pulse shrink-0",style:{backgroundColor:(_==null?void 0:_.colorTag)||"#fbbf24"}}),u.jsx("h2",{className:"text-xs font-display uppercase tracking-[0.16em] font-semibold truncate max-w-[200px]",children:_?_.title:"Routine Protocol"}),(_==null?void 0:_.id)===(o==null?void 0:o.id)&&l>0&&u.jsxs("span",{className:`text-[10px] font-mono tabular-nums px-1.5 py-0.2 rounded-md ${S?"bg-amber-100 text-amber-800":"bg-amber-400/10 text-amber-300 border border-amber-400/20"}`,children:[l,"m left"]})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[t&&_&&u.jsxs("button",{type:"button",onClick:()=>{t(_),e()},className:"px-2.5 py-1 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold text-[11px] flex items-center gap-1 transition-all shadow-xs cursor-pointer",title:"Start focus timer with this routine block",children:[u.jsx(Pi,{className:"w-3 h-3 fill-current"}),u.jsx("span",{children:"Focus"})]}),u.jsx("button",{type:"button",onClick:e,className:"p-1 text-zinc-400 hover:text-white transition-colors cursor-pointer",title:"Close Routine Checklist",children:u.jsx(or,{className:"w-3.5 h-3.5"})})]})]}),u.jsxs("div",{className:"flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none shrink-0",children:[r.map(he=>{const Ye=he.id===(_==null?void 0:_.id),$e=he.id===(o==null?void 0:o.id),Ne=he.colorTag||"#8b5cf6";return u.jsxs("button",{type:"button",onClick:()=>{v(he.id),Q(!1),q(!1)},className:`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-sans whitespace-nowrap transition-all border cursor-pointer ${Ye?S?"bg-zinc-900 text-white border-zinc-900 shadow-xs":"bg-white/20 text-white border-white/30 shadow-xs":S?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-400 hover:text-zinc-200"}`,children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full",style:{backgroundColor:Ne}}),u.jsx("span",{children:he.title}),$e&&u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping ml-0.5"})]},he.id)}),u.jsx("button",{type:"button",onClick:()=>Q(he=>!he),className:`p-1 rounded-xl border transition-colors cursor-pointer shrink-0 ${S?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-600":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Add a new routine block",children:u.jsx(xo,{className:"w-3.5 h-3.5"})})]}),_&&u.jsx("div",{className:"flex items-center justify-between text-[11px] font-mono text-zinc-400 px-1 shrink-0",children:L?u.jsxs("div",{className:"flex items-center gap-2 w-full animate-fadeIn",children:[u.jsx("input",{type:"time",value:W,onChange:he=>j(he.target.value),className:"cosmic-input rounded-lg px-2 py-1 text-xs font-mono"}),u.jsx("span",{children:"–"}),u.jsx("input",{type:"time",value:H,onChange:he=>X(he.target.value),className:"cosmic-input rounded-lg px-2 py-1 text-xs font-mono"}),u.jsx("button",{type:"button",onClick:Me,className:"px-2 py-1 rounded-lg bg-amber-400 text-black font-semibold text-[10px] cursor-pointer",children:"Save"}),u.jsx("button",{type:"button",onClick:()=>q(!1),className:"text-zinc-400 hover:text-white cursor-pointer text-[10px]",children:"Cancel"})]}):u.jsxs(u.Fragment,{children:[u.jsxs("button",{type:"button",onClick:()=>{j(_.startTime||"09:00"),X(_.endTime||"11:00"),q(!0)},className:"hover:underline flex items-center gap-1 cursor-pointer",title:"Click to adjust routine hours",children:[u.jsx("span",{children:_.timeRange}),u.jsx(hm,{className:"w-2.5 h-2.5 opacity-60"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs("span",{children:[oe,"/",I.length," completed"]}),r.length>1&&u.jsx("button",{type:"button",onClick:()=>{window.confirm(`Delete routine block "${_.title}"?`)&&h(_.id)},className:"hover:text-red-400 transition-colors cursor-pointer",title:"Delete this routine block",children:u.jsx(ss,{className:"w-3 h-3"})})]})]})}),F&&u.jsxs("form",{onSubmit:me,className:"p-3 rounded-2xl border space-y-2 animate-fadeIn bg-white/[0.03] border-white/10",children:[u.jsx("input",{type:"text",placeholder:"Block title (e.g. Creative Flow)...",value:ue,onChange:he=>Y(he.target.value),className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs",autoFocus:!0,required:!0}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("input",{type:"time",value:se,onChange:he=>G(he.target.value),className:"flex-1 cosmic-input rounded-xl px-2.5 py-1 text-xs font-mono"}),u.jsx("span",{children:"–"}),u.jsx("input",{type:"time",value:Z,onChange:he=>z(he.target.value),className:"flex-1 cosmic-input rounded-xl px-2.5 py-1 text-xs font-mono"}),u.jsx("button",{type:"submit",className:"px-3 py-1.5 rounded-xl bg-amber-400 text-black font-semibold text-xs cursor-pointer",children:"Add"})]})]}),u.jsx("div",{className:"space-y-1.5 overflow-y-auto max-h-[40vh] pr-0.5",children:I.length===0?u.jsxs("div",{className:"py-6 text-center text-xs text-zinc-500 italic space-y-1",children:[u.jsx("div",{children:"No routine checklist items yet."}),u.jsx("div",{className:"text-[11px] opacity-75",children:"Add daily anchors below (e.g. 500ml water, review formula sheet)."})]}):I.map(he=>u.jsxs("div",{className:`flex items-center justify-between p-2.5 rounded-2xl border transition-all group ${he.completed?S?"bg-zinc-100/70 border-zinc-200 text-zinc-400 line-through":"bg-white/[0.02] border-white/[0.04] text-zinc-500 line-through":S?"bg-white/90 border-zinc-200 text-zinc-800 hover:border-zinc-300":"bg-white/[0.04] border-white/[0.08] text-zinc-200 hover:border-white/[0.18]"}`,children:[u.jsxs("div",{className:"flex items-center gap-2.5 flex-1 min-w-0 mr-2",children:[u.jsx("button",{type:"button",onClick:()=>_&&d(_.id,he.id),className:`w-4.5 h-4.5 rounded-lg flex items-center justify-center shrink-0 border transition-all cursor-pointer ${he.completed?"bg-amber-400 border-amber-400 text-black":S?"border-zinc-300 hover:border-amber-500 bg-white":"border-white/20 hover:border-amber-400 bg-white/5"}`,children:he.completed&&u.jsx(ir,{className:"w-3 h-3 stroke-[3]"})}),P===he.id?u.jsx("input",{type:"text",value:D,onChange:Ye=>U(Ye.target.value),onBlur:()=>ne(he.id),onKeyDown:Ye=>{Ye.key==="Enter"&&ne(he.id),Ye.key==="Escape"&&k(null)},autoFocus:!0,className:"flex-1 bg-transparent border-b border-amber-400 text-xs py-0.5 outline-none font-sans text-white"}):u.jsx("span",{onClick:()=>O(he.id,he.text),className:"text-xs truncate cursor-text hover:text-amber-300 transition-colors flex-1",title:"Click to edit text",children:he.text})]}),u.jsxs("div",{className:"flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0",children:[u.jsx("button",{type:"button",onClick:()=>O(he.id,he.text),className:"p-1 text-zinc-400 hover:text-white transition-colors cursor-pointer",title:"Edit text",children:u.jsx(hm,{className:"w-3 h-3"})}),u.jsx("button",{type:"button",onClick:()=>_&&m(_.id,he.id),className:"p-1 text-zinc-400 hover:text-red-400 transition-colors cursor-pointer",title:"Delete item",children:u.jsx(ss,{className:"w-3 h-3"})})]})]},he.id))}),u.jsxs("form",{onSubmit:ie,className:"flex items-center gap-2 pt-1 border-t shrink-0",children:[u.jsx("input",{type:"text",placeholder:`Add checklist item for ${(_==null?void 0:_.title)||"routine"}...`,value:R,onChange:he=>E(he.target.value),className:"flex-1 cosmic-input rounded-xl px-3.5 py-2 text-xs placeholder-zinc-500"}),u.jsx("button",{type:"submit",className:"px-3 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold text-xs transition-colors cursor-pointer shrink-0",children:"+ Add"})]})]})]})},c2=({routines:s,activeBlock:e,activeMinutesLeft:t,onOpenChecklist:r,isLight:o=!1})=>{const[l,d]=le.useState(12);le.useEffect(()=>{const v=()=>{const P=new Date;d(P.getHours()+P.getMinutes()/60+P.getSeconds()/3600)};v();const _=setInterval(v,1e3);return()=>clearInterval(_)},[]);const f=250,g=250,m=230,b=v=>(v-12)/24*360,y=(v,_)=>{const P=v*Math.PI/180;return{x:f+_*Math.sin(P),y:g-_*Math.cos(P)}},h=(v,_,P)=>{let k=_>=v?_-v:24-v+_;k=Math.min(23.99,Math.max(.1,k));const D=b(v),U=D+k/24*360,R=y(D,P),E=y(U,P),L=k>12?1:0;return`M ${R.x} ${R.y} A ${P} ${P} 0 ${L} 1 ${E.x} ${E.y}`},w=b(l),S=y(w,m),M=le.useMemo(()=>s.map(v=>{let _=v.startHour,P=v.endHour;if(_===void 0||P===void 0){const R=v.timeRange.split(/[-–—to]/i);_=Ar(R[0],0),P=Ar(R[1],24)}const k=(e==null?void 0:e.id)===v.id,D=v.colorTag||"#8b5cf6",U=h(_,P,m);return{...v,start:_,end:P,isActive:k,color:D,pathD:U}}),[s,e]);return u.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-auto cursor-pointer group",onClick:r,title:e?`${e.title} (${t}m left) • Click to open routine checklist`:"Click to open daily routine checklist",children:u.jsxs("svg",{viewBox:"0 0 500 500",className:"w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] md:w-[640px] md:h-[640px] overflow-visible transition-all duration-500 group-hover:scale-[1.01]",children:[u.jsxs("defs",{children:[u.jsxs("filter",{id:"glow-ambient",x:"-20%",y:"-20%",width:"140%",height:"140%",children:[u.jsx("feGaussianBlur",{stdDeviation:"6",result:"blur"}),u.jsx("feComposite",{in:"SourceGraphic",in2:"blur",operator:"over"})]}),u.jsxs("filter",{id:"glow-active",x:"-30%",y:"-30%",width:"160%",height:"160%",children:[u.jsx("feGaussianBlur",{stdDeviation:"10",result:"blur"}),u.jsx("feComposite",{in:"SourceGraphic",in2:"blur",operator:"over"})]})]}),u.jsx("circle",{cx:f,cy:g,r:m,fill:"none",stroke:o?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.06)",strokeWidth:"1.5",strokeDasharray:"3 6"}),M.map(v=>u.jsxs("g",{children:[v.isActive&&u.jsx("path",{d:v.pathD,fill:"none",stroke:v.color,strokeWidth:"8",strokeLinecap:"round",className:"opacity-40 animate-pulse",filter:"url(#glow-active)"}),u.jsx("path",{d:v.pathD,fill:"none",stroke:v.color,strokeWidth:v.isActive?4:2,strokeLinecap:"round",className:`transition-all duration-300 ${v.isActive?"opacity-90":o?"opacity-35 hover:opacity-80":"opacity-40 hover:opacity-90"}`})]},v.id)),u.jsx("circle",{cx:f,cy:g-m,r:"2.5",fill:o?"#71717a":"#ffffff",opacity:"0.6"}),u.jsx("circle",{cx:f,cy:g+m,r:"2",fill:o?"#a1a1aa":"#ffffff",opacity:"0.3"}),u.jsx("circle",{cx:f-m,cy:g,r:"2",fill:o?"#a1a1aa":"#ffffff",opacity:"0.3"}),u.jsx("circle",{cx:f+m,cy:g,r:"2",fill:o?"#a1a1aa":"#ffffff",opacity:"0.3"}),u.jsxs("g",{children:[u.jsx("circle",{cx:S.x,cy:S.y,r:"8",fill:(e==null?void 0:e.colorTag)||"#fbbf24",className:"animate-ping opacity-60"}),u.jsx("circle",{cx:S.x,cy:S.y,r:"4.5",fill:"#ffffff",stroke:(e==null?void 0:e.colorTag)||"#fbbf24",strokeWidth:"2.5",filter:"url(#glow-ambient)"})]})]})})},u2=()=>{const{profile:s,tasks:e,toggleTask:t,addTask:r,deleteTask:o,habits:l,toggleHabit:d,addHabit:f,routines:g,activeRoutineBlock:m,activeRoutineMinutesLeft:b,nextRoutineBlock:y,nextRoutineMinutesUntil:h,studySeconds:w,isStudyActive:S,studySubject:M,setStudySubject:v,toggleStudyTimer:_,resetStudyTimer:P,studySessions:k,logManualStudyTime:D,deleteStudySession:U,pomodoroPhase:R,pomodoroSecondsLeft:E,pomodoroTotalSeconds:L,pomodoroSettings:q,setPomodoroSettings:W,startPomodoro:j,togglePomodoro:H,resetPomodoro:X,skipPomodoroPhase:F,togglePomodoroDisplayMode:Q,hydration:ue,setHydration:Y,sleepHours:se,setSleep:G,dailyRating:Z,setDailyRating:z,lastActiveDate:I,resetDayProgress:oe,isHUDHidden:O,setIsHUDHidden:ne,wallpaperSettings:ie,audioSource:Me,isAudioPlaying:me,activeSoundscapeId:he,playSoundscape:Ye,stopSoundscape:$e,isYouTubePlaying:Ne,activeYouTubeItem:je,toggleYouTubePlay:qe,appTheme:mt,toggleAppTheme:xt,isEcoSleeping:wt,setIsEcoSleeping:yt,studySubjects:kt}=dr(),_e=mt==="light",[Lt,cn]=le.useState(!1),[gn,ee]=le.useState(!1),[vn,Et]=le.useState(!1),[Bt,Ie]=le.useState(!1),[Kt,ot]=le.useState(!1),[Ze,N]=le.useState("none"),[T,ae]=le.useState("pomodoro"),[Le,Ee]=le.useState("12"),[ke,ze]=le.useState("00"),[Se,Te]=le.useState("00"),[Oe,$]=le.useState(0),[Ae,we]=le.useState("PM"),[Re,ve]=le.useState(""),[Ce,He]=le.useState(322),[nt,Pe]=le.useState(80),Je=`${Le}:${ke}:${Se}`,[lt,Ge]=le.useState(""),[St,Ht]=le.useState(s.defaultFocusTopic||"Engineering"),[tn,wn]=le.useState(s.defaultFocusMode||"Deep Work"),[fn,Qt]=le.useState("60"),[Nn,En]=le.useState(""),sn=B=>{D(B,St||M||"Engineering",tn||"Manual Entry");const De=B>=60?`${(B/60).toFixed(1)}h`:`${B}m`;En(`+${De} recorded to ${St||M}!`),setTimeout(()=>En(""),3e3)},bt=B=>{B.preventDefault();const De=parseFloat(fn);!isNaN(De)&&De>0&&(sn(De),Qt(""))},Xt=B=>{const De=B.linkedSubject||B.title||"Engineering";Ht(De),v(De),N("timer"),ae("pomodoro"),j()},[It,an]=le.useState(!1),[un,hi]=le.useState("30"),[kn,zn]=le.useState("5"),At=R==="focus"||R==="break"||R==="paused",Dr=Math.floor(E/60),bi=E%60,wi=Dr.toString().padStart(2,"0"),ri=bi.toString().padStart(2,"0"),Yi=L>0?1-E/L:0,A=At?Yi*360:Oe*360,K=At&&q.displayMode==="numbers",ge=K?wi:Le,de=K?ri:ke,ce=()=>{const B=new Date().getHours();return B>=5&&B<12?"Good morning":B>=12&&B<17?"Good afternoon":B>=17&&B<22?"Good evening":"Late night focus"};le.useEffect(()=>{const B=()=>{const Qe=new Date,ut=Qe.getHours(),Vt=Qe.getMinutes(),pt=Qe.getSeconds(),nn=ut>=12?"PM":"AM",hn=ie.clockFormat==="24h",Tt=hn?ut.toString().padStart(2,"0"):(ut%12||12).toString().padStart(2,"0"),zt=Vt.toString().padStart(2,"0"),en=pt.toString().padStart(2,"0");Ee(Tt),ze(zt),Te(en),$(pt/60),we(hn?"":nn);const Un=new Date(Qe.getFullYear(),0,0),as=Qe.getTime()-Un.getTime(),qi=1e3*60*60*24,vc=Math.floor(as/qi);He(vc);const Mo=Math.round((ut*60+Vt)/1440*100);Pe(Mo);const os=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],_c=["January","February","March","April","May","June","July","August","September","October","November","December"];ve(`${os[Qe.getDay()]}, ${_c[Qe.getMonth()]} ${Qe.getDate()}, ${Qe.getFullYear()}`)};B();const De=setInterval(B,1e3);return()=>clearInterval(De)},[ie.clockFormat,ie.showSeconds,ie.clockDivider]);const Xe=ie.clockFontStyle==="serif"?"font-serif font-bold tracking-tight":ie.clockFontStyle==="mono"?"font-mono font-bold tracking-tight":ie.clockFontStyle==="minimal"?"font-sans font-light tracking-[0.06em]":"font-display font-extrabold tracking-tight",tt=ie.clockSize==="compact"?"text-6xl sm:text-7xl md:text-8xl lg:text-[110px]":ie.clockSize==="heroic"?"text-7xl sm:text-9xl md:text-[11rem] lg:text-[160px]":"text-7xl sm:text-8xl md:text-9xl lg:text-[136px]",Ve=ie.clockHalo==="none"?"opacity-0":ie.clockHalo==="subtle"?"bg-[radial-gradient(circle,rgba(139,92,246,0.14)_0%,rgba(139,92,246,0.03)_50%,transparent_70%)]":"bg-[radial-gradient(circle,rgba(139,92,246,0.22)_0%,rgba(139,92,246,0.06)_50%,transparent_75%)]",Ke=ie.clockColor==="white"?_e?"text-zinc-950 [text-shadow:0_2px_12px_rgba(0,0,0,0.1)]":"text-white [text-shadow:0_8px_32px_rgba(0,0,0,0.85)]":ie.clockColor==="gold"?"text-amber-300 [text-shadow:0_4px_24px_rgba(245,158,11,0.5)]":ie.clockColor==="cyan"?"text-cyan-300 [text-shadow:0_4px_24px_rgba(6,182,212,0.5)]":ie.clockColor==="rose"?"text-rose-300 [text-shadow:0_4px_24px_rgba(244,63,94,0.5)]":_e?"text-zinc-900 [text-shadow:0_2px_12px_rgba(200,180,160,0.25)]":"text-white [text-shadow:0_8px_32px_rgba(0,0,0,0.85)]",rt=ie.clockPosition==="zenith"?"mt-6 sm:mt-12 mb-auto":ie.clockPosition==="bottom"?"mt-auto mb-16 sm:mb-20":"my-auto";le.useEffect(()=>{const B=De=>{De.key==="Escape"&&(Ze!=="none"?N("none"):O?ne(!1):Bt&&Ie(!1))};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[Ze,O,Bt,ne]);const gt=B=>{B.preventDefault(),lt.trim()&&(r(lt.trim()),Ge(""))},Mt=e.filter(B=>B.completed).length,st=e.length>0?Math.round(Mt/e.length*100):0,Pt=l.filter(B=>B.completed).length,on=l.length>0?Math.round(Pt/l.length*100):0,jt=new Date;jt.setDate(jt.getDate()-7);const ln=+((k||[]).filter(B=>new Date(B.timestamp)>=jt).reduce((B,De)=>B+De.durationSeconds,0)/3600).toFixed(1),at=Math.min(100,Math.round(ln/15*100)),te=B=>{const De=Math.floor(B/60),Qe=B%60;return`${De.toString().padStart(2,"0")}:${Qe.toString().padStart(2,"0")}`},fe=pa.find(B=>B.id===he)||pa[0];return u.jsxs("div",{className:"relative w-screen h-screen max-h-screen overflow-hidden flex flex-col justify-between pt-safe-top pt-8 sm:pt-10 px-4 sm:px-8 pb-safe-bottom pb-6 select-none z-10 animate-fadeIn",children:[u.jsx("h1",{className:"sr-only",children:"FOR ME — Living Wallpaper & Focus Sanctuary"}),u.jsxs("header",{className:`relative flex items-center justify-between w-full min-h-12 shrink-0 z-20 gap-3 transition-opacity duration-700 ${O||wt?"opacity-0 pointer-events-none":"opacity-100"}`,children:[u.jsxs("button",{type:"button",onClick:()=>ne(!0),className:"flex items-center gap-2.5 cursor-pointer group shrink-0 text-left",title:"Enter Zen Wallpaper Mode",children:[u.jsx("div",{className:`w-8 h-8 rounded-full border flex items-center justify-center text-[11px] font-mono font-medium tracking-tight shadow-sm transition-all ${_e?"border-zinc-300/80 bg-white/80 text-zinc-900 group-hover:bg-white group-hover:border-zinc-400":"border-white/15 bg-white/[0.04] text-zinc-200 group-hover:bg-white/[0.1] group-hover:border-white/30"}`,children:"FM"}),u.jsx("span",{className:`font-sans font-bold text-[11px] tracking-[0.22em] uppercase group-hover:opacity-85 transition-opacity ${_e?"text-zinc-900":"text-zinc-200"}`,children:"FOR ME"})]}),u.jsx("div",{className:"hidden md:flex absolute left-1/2 -translate-x-1/2 items-center pointer-events-none",children:u.jsxs("div",{className:`pointer-events-auto flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-2xl border text-[11px] font-sans font-medium shadow-sm transition-all ${_e?"bg-white/85 border-zinc-200/90 text-zinc-700":"bg-[#090b16]/75 border-white/[0.08] text-zinc-300"}`,children:[u.jsx(Cs,{className:"w-3 h-3 text-amber-400"}),u.jsx("span",{children:Re}),m?u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"opacity-25",children:"•"}),u.jsxs("button",{type:"button",onClick:()=>Ie(!0),className:"hover:underline flex items-center gap-1.5 font-mono text-[10px] text-amber-400 cursor-pointer",title:"Open Daily Routine Protocols & 24h Timeline",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"}),u.jsx("span",{className:"font-semibold",children:m.title}),b>0&&u.jsxs("span",{className:"opacity-75 tabular-nums",children:["(",b,"m left)"]})]})]}):y?u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"opacity-25",children:"•"}),u.jsxs("button",{type:"button",onClick:()=>Ie(!0),className:"hover:underline flex items-center gap-1.5 font-mono text-[10px] text-zinc-400 hover:text-zinc-200 cursor-pointer",title:"Open Daily Routine Protocols & 24h Timeline",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-sky-400"}),u.jsxs("span",{children:["Next: ",y.title]}),u.jsxs("span",{className:"text-zinc-400 tabular-nums",children:["(",h,"m)"]})]})]}):u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"opacity-25",children:"•"}),u.jsxs("button",{type:"button",onClick:()=>Ie(!0),className:"hover:underline flex items-center gap-1.5 font-mono text-[10px] text-zinc-400 hover:text-zinc-200 cursor-pointer",title:"Open Daily Routine Protocols & 24h Timeline",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-zinc-500"}),u.jsx("span",{children:"Free Rhythm"})]})]})]})}),u.jsxs("nav",{"aria-label":"Wallpaper Quick Controls",className:`flex items-center gap-0.5 p-1 rounded-full backdrop-blur-2xl border transition-all ${_e?"bg-white/90 border-zinc-200/90 text-zinc-700 shadow-[0_8px_24px_rgba(0,0,0,0.06)]":"bg-[#090b16]/75 border-white/[0.12] text-zinc-300 shadow-[0_12px_32px_rgba(0,0,0,0.6)]"}`,children:[u.jsx("button",{type:"button",onClick:()=>cn(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${_e?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Wallpaper Studio (Celestial Objects, Waves & Lighting)","aria-label":"Wallpaper Studio",children:u.jsx(Vg,{className:"w-3.5 h-3.5"})}),u.jsx("button",{type:"button",onClick:()=>Ie(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${_e?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Daily Routine Protocols","aria-label":"Daily Routine Protocols",children:u.jsx(FM,{className:"w-3.5 h-3.5"})}),u.jsx("button",{type:"button",onClick:()=>ot(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${_e?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Study & Focus Analytics Dashboard (7-Day & 30-Day Trajectories)","aria-label":"Study & Focus Analytics Dashboard",children:u.jsx(Sf,{className:"w-3.5 h-3.5 text-violet-400"})}),u.jsxs("button",{type:"button",onClick:()=>ee(!0),className:`relative w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${me||Ne?_e?"text-violet-600 bg-violet-50":"text-violet-300 bg-violet-600/20":_e?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Focus Audio Sanctuary (YouTube Streams & Ambient Soundscapes)","aria-label":"Focus Audio Sanctuary",children:[Me==="youtube"&&Ne?u.jsx(co,{className:"w-3.5 h-3.5 text-red-500 animate-pulse"}):u.jsx(dc,{className:`w-3.5 h-3.5 ${me||Ne?"animate-pulse":""}`}),(me||Ne)&&u.jsx("span",{className:"absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse"})]}),u.jsx("button",{type:"button",onClick:()=>Et(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${_e?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:`Profile & Motto (${s.name})`,"aria-label":"Profile and Daily Mantra",children:u.jsx(ix,{className:"w-3.5 h-3.5"})}),u.jsx("div",{className:`w-px h-3.5 mx-0.5 ${_e?"bg-zinc-200":"bg-white/10"}`}),u.jsx("button",{type:"button",onClick:xt,className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${_e?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:`Switch to ${_e?"Obsidian Dark":"Creamy Light"} Theme`,"aria-label":"Toggle Light/Dark Theme",children:_e?u.jsx(fc,{className:"w-3.5 h-3.5"}):u.jsx(qg,{className:"w-3.5 h-3.5"})}),u.jsx("button",{type:"button",onClick:()=>ne(!0),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all cursor-pointer ${_e?"hover:bg-zinc-100 text-zinc-600 hover:text-zinc-950":"hover:bg-white/[0.08] text-zinc-400 hover:text-white"}`,title:"Zen Mode (Hide all controls)","aria-label":"Enter Zen Mode",children:u.jsx(VM,{className:"w-3.5 h-3.5"})})]})]}),u.jsxs("main",{"aria-label":`Current time ${Je}`,className:`${rt} text-center flex flex-col items-center justify-center relative z-20 py-4 select-none transition-all duration-300`,children:[u.jsx("div",{className:`absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[780px] lg:h-[780px] rounded-full ${Ve} pointer-events-none -z-10`}),u.jsxs("div",{className:"relative flex flex-col items-center group",children:[u.jsxs("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none -z-10",children:[u.jsx(c2,{routines:g,activeBlock:m,activeMinutesLeft:b,onOpenChecklist:()=>Ie(!0),isLight:_e}),u.jsxs("div",{className:"relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] md:w-[640px] md:h-[640px] pointer-events-none",children:[At&&u.jsx("div",{className:"absolute inset-0 transition-transform duration-1000 ease-linear pointer-events-none",style:{transform:`rotate(${A}deg)`},children:u.jsxs("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center",children:[u.jsx("div",{className:`w-3.5 h-3.5 rounded-full animate-ping opacity-75 ${R==="break"?"bg-cyan-400":"bg-violet-400"}`}),u.jsx("div",{className:`absolute w-3 h-3 rounded-full shadow-lg ${R==="break"?"bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,1)]":"bg-violet-300 shadow-[0_0_20px_rgba(168,85,247,1)]"}`})]})}),u.jsx("div",{className:`absolute inset-8 sm:inset-12 md:inset-16 rounded-full border transition-all ${_e?"border-zinc-200/50":"border-white/[0.04]"}`})]})]}),At?u.jsxs("button",{type:"button",onClick:Q,className:`flex items-center gap-2 sm:gap-2.5 mb-2 sm:mb-3 px-4 py-1.5 rounded-full border backdrop-blur-2xl text-[10px] sm:text-[11px] font-mono tracking-widest uppercase transition-all shadow-md cursor-pointer group ${R==="break"?_e?"bg-cyan-50/90 border-cyan-200 text-cyan-900 shadow-sm":"bg-cyan-950/60 border-cyan-500/40 text-cyan-300 shadow-[0_4px_24px_rgba(6,182,212,0.3)]":_e?"bg-violet-50/90 border-violet-200 text-violet-900 shadow-sm":"bg-[#090b16]/85 border-violet-500/40 text-violet-300 shadow-[0_4px_24px_rgba(139,92,246,0.35)]"}`,title:"Click to toggle countdown digits vs wall clock digits",children:[u.jsxs("span",{className:"flex items-center gap-1.5 font-bold",children:[u.jsxs("span",{className:"relative flex h-2 w-2",children:[u.jsx("span",{className:`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${R==="break"?"bg-cyan-400":"bg-violet-400"}`}),u.jsx("span",{className:`relative inline-flex rounded-full h-2 w-2 ${R==="break"?"bg-cyan-500":"bg-violet-500"}`})]}),R==="break"?"RECOVERY BREAK":"FOCUS SPRINT"]}),u.jsx("span",{className:"opacity-25",children:"•"}),u.jsxs("span",{className:"tabular-nums font-bold",children:[wi,":",ri," REMAINING"]}),u.jsx("span",{className:"opacity-25 hidden sm:inline",children:"•"}),u.jsx("span",{className:"hidden sm:inline opacity-80 uppercase",children:M}),u.jsx("span",{className:"opacity-25 hidden md:inline",children:"•"}),u.jsx("span",{className:"hidden md:inline text-[9px] opacity-60 group-hover:text-amber-400 transition-colors",children:K?"SHOW CLOCK":"SHOW COUNTDOWN"})]}):u.jsxs("div",{className:`flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3 px-4 py-1 rounded-full border backdrop-blur-2xl text-[10px] sm:text-[11px] font-mono tracking-widest uppercase transition-all shadow-md ${_e?"bg-white/80 border-zinc-200 text-zinc-700":"bg-[#090b16]/75 border-white/[0.12] text-zinc-300 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"}`,children:[u.jsxs("span",{className:"flex items-center gap-1.5 text-emerald-400 font-semibold",children:[u.jsxs("span",{className:"relative flex h-2 w-2",children:[u.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),u.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-emerald-500"})]}),"EPHEMERIS"]}),u.jsx("span",{className:"opacity-25",children:"•"}),u.jsxs("span",{className:"tabular-nums",children:["DAY ",Ce]}),u.jsx("span",{className:"opacity-25",children:"•"}),u.jsxs("span",{className:"tabular-nums text-violet-400 font-semibold",children:[nt,"% SOLAR"]}),u.jsx("span",{className:"opacity-25 hidden sm:inline",children:"•"}),u.jsx("span",{className:"hidden sm:inline opacity-70",children:"AZAN ZENITH"})]}),u.jsxs("div",{onClick:At?Q:void 0,className:`inline-flex items-center justify-center max-w-[95vw] px-2 select-none leading-none flex-nowrap transition-all ${At?"cursor-pointer":""} ${Xe} ${Ke}`,title:At?"Click to toggle countdown / real time digits":void 0,children:[u.jsx("span",{className:`${tt} tracking-tight tabular-nums transition-all ${_e?"text-zinc-950 font-bold":"bg-gradient-to-b from-white via-white/95 to-zinc-400/90 bg-clip-text text-transparent font-bold"}`,children:ge}),u.jsx("span",{className:`inline-flex items-center justify-center px-1.5 sm:px-3 text-3xl sm:text-5xl md:text-6xl lg:text-7xl select-none transition-colors ${At?R==="break"?"text-cyan-400":"text-violet-400":ie.clockColor==="gold"?"text-amber-400":ie.clockColor==="cyan"?"text-cyan-400":ie.clockColor==="rose"?"text-rose-400":_e?"text-zinc-600":"text-violet-400"}`,children:ie.clockDivider==="dot"?"·":ie.clockDivider==="space"?" ":":"}),u.jsx("span",{className:`${tt} tracking-tight tabular-nums transition-all ${_e?"text-zinc-950 font-bold":"bg-gradient-to-b from-white via-white/95 to-zinc-400/90 bg-clip-text text-transparent font-bold"}`,children:de}),u.jsxs("div",{className:"flex flex-col items-center justify-center ml-3 sm:ml-5 md:ml-7 gap-2 self-center",children:[At?u.jsxs("button",{type:"button",onClick:B=>{B.stopPropagation(),H()},className:`relative flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl border backdrop-blur-3xl transition-all shadow-2xl cursor-pointer group/pod ${_e?"bg-white/95 border-violet-200 text-zinc-950 shadow-md hover:border-violet-400":"bg-[#090b16]/95 border-violet-500/30 text-white shadow-[0_12px_40px_rgba(0,0,0,0.8)] hover:border-violet-400/60"}`,title:R==="paused"?"Resume focus":"Pause focus (Tap to toggle)",children:[u.jsxs("svg",{className:"absolute inset-1.5 w-[calc(100%-12px)] h-[calc(100%-12px)] -rotate-90 pointer-events-none",viewBox:"0 0 36 36",children:[u.jsx("circle",{cx:"18",cy:"18",r:"15",stroke:"currentColor",strokeWidth:"2.5",className:"opacity-15",fill:"none"}),u.jsx("circle",{cx:"18",cy:"18",r:"15",stroke:"currentColor",strokeWidth:"2.8",className:`transition-all duration-300 ${R==="break"?"text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]":"text-violet-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]"}`,strokeDasharray:"94.25",strokeDashoffset:94.25*(1-Yi),strokeLinecap:"round",fill:"none"})]}),u.jsx("span",{className:"font-mono text-xs sm:text-sm md:text-base font-extrabold tabular-nums tracking-wider leading-none z-10 drop-shadow-sm",children:K?`${Le}:${ke}`:`${wi}:${ri}`}),u.jsx("span",{className:`text-[7px] sm:text-[8px] font-mono tracking-widest uppercase mt-1 z-10 font-bold ${R==="paused"?"text-amber-400":R==="break"?"text-cyan-400":"text-violet-400"}`,children:R==="paused"?"PAUSED":K?"CLOCK":R==="break"?"BREAK":"FOCUS"})]}):ie.showSeconds&&u.jsxs("div",{className:`relative flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl border backdrop-blur-3xl transition-all shadow-2xl ${_e?"bg-white/95 border-zinc-300 text-zinc-950 shadow-md":"bg-[#090b16]/90 border-white/20 text-white shadow-[0_12px_40px_rgba(0,0,0,0.8)]"}`,children:[u.jsxs("svg",{className:"absolute inset-1.5 w-[calc(100%-12px)] h-[calc(100%-12px)] -rotate-90 pointer-events-none",viewBox:"0 0 36 36",children:[u.jsx("circle",{cx:"18",cy:"18",r:"15",stroke:"currentColor",strokeWidth:"2.5",className:"opacity-15",fill:"none"}),u.jsx("circle",{cx:"18",cy:"18",r:"15",stroke:"currentColor",strokeWidth:"2.8",className:`transition-all duration-300 ${ie.clockColor==="gold"?"text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]":ie.clockColor==="cyan"?"text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]":ie.clockColor==="rose"?"text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.9)]":"text-violet-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]"}`,strokeDasharray:"94.25",strokeDashoffset:94.25*(1-Oe),strokeLinecap:"round",fill:"none"})]}),u.jsx("span",{className:"font-mono text-base sm:text-xl md:text-2xl font-extrabold tabular-nums tracking-wider leading-none z-10 drop-shadow-sm",children:Se}),u.jsx("span",{className:"text-[7px] sm:text-[8px] font-mono tracking-widest uppercase opacity-60 mt-1 z-10 font-bold",children:"SEC"})]}),At?u.jsxs("div",{className:"flex items-center gap-1 z-10",children:[u.jsx("button",{type:"button",onClick:B=>{B.stopPropagation(),F()},className:`text-[9px] font-mono px-2 py-0.5 rounded-lg border backdrop-blur-xl transition-all cursor-pointer ${_e?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/10 hover:bg-white/20 border-white/15 text-zinc-300"}`,title:"Skip to next phase",children:"SKIP"}),u.jsx("button",{type:"button",onClick:B=>{B.stopPropagation(),X()},className:`text-[9px] font-mono px-2 py-0.5 rounded-lg border backdrop-blur-xl transition-all cursor-pointer ${_e?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/10 hover:bg-white/20 border-white/15 text-zinc-300"}`,title:"Reset Pomodoro",children:"RESET"})]}):Ae?u.jsx("span",{className:`text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase px-3 py-1 rounded-xl border backdrop-blur-2xl transition-all ${_e?"bg-zinc-100 border-zinc-200 text-zinc-800 shadow-sm":"bg-white/[0.08] border-white/15 text-zinc-200 shadow-md"}`,children:Ae}):null]})]})]}),ie.showGreeting!==!1&&u.jsx("div",{className:"mt-7 sm:mt-9 flex justify-center w-full px-3",children:u.jsx("button",{type:"button",onClick:()=>Et(!0),className:`group relative text-xs sm:text-sm font-sans tracking-wide px-6 sm:px-8 py-3 rounded-2xl sm:rounded-full backdrop-blur-3xl max-w-xl text-center leading-relaxed shadow-xl cursor-pointer transition-all hover:scale-[1.01] border ${_e?"bg-white/95 text-zinc-900 border-zinc-300/90 shadow-md hover:bg-white hover:border-zinc-400":"bg-[#0a0618]/90 text-zinc-200 border-white/[0.18] shadow-[0_16px_50px_rgba(0,0,0,0.7)] hover:border-violet-400/50 hover:shadow-[0_16px_60px_rgba(168,85,247,0.25)]"}`,title:"Click to personalize name & daily mantra",children:u.jsxs("div",{className:"flex items-center justify-center gap-2 flex-wrap",children:[u.jsxs("span",{className:`font-bold tracking-normal ${_e?"text-zinc-950":"text-white"}`,children:[ce(),", ",s.name]}),u.jsx("span",{className:"opacity-30",children:"•"}),u.jsxs("span",{className:`italic font-medium ${_e?"text-zinc-800":"text-zinc-200"}`,children:["“",s.motto||"Discipline equals true freedom.","”"]})]})})}),wt?u.jsxs("button",{type:"button",onClick:()=>yt(!1),className:"mt-8 flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs transition-all border shadow-2xl cursor-pointer bg-black/60 text-white/80 border-white/15 hover:bg-black/80 hover:text-white backdrop-blur-xl",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),u.jsx("span",{className:"font-sans tracking-widest text-[11px] uppercase",children:"Eco Sleep Active • Move cursor or tap to wake"})]}):O?u.jsxs("button",{type:"button",onClick:()=>ne(!1),className:`mt-8 flex items-center gap-2 px-5 py-2.5 rounded-full text-xs transition-all border shadow-xl cursor-pointer ${_e?"bg-white/90 text-zinc-800 border-zinc-300/80 hover:bg-white":"cosmic-dock text-zinc-300 hover:text-white border-white/[0.12] hover:border-violet-400/40"}`,children:[u.jsx(Dg,{className:"w-3.5 h-3.5 text-amber-400"}),u.jsx("span",{className:"font-display tracking-wider",children:"Tap anywhere to restore controls"})]}):null]}),Ze!=="none"&&!O&&!wt&&u.jsxs("div",{className:"fixed inset-x-0 bottom-24 z-30 flex justify-center px-4 animate-fadeIn pointer-events-auto",children:[u.jsx("div",{className:"fixed inset-0 -z-10",onClick:()=>N("none")}),Ze==="tasks"&&u.jsxs("div",{className:`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${_e?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[u.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${_e?"border-zinc-200":"border-white/[0.08]"}`,children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("h2",{className:"text-xs font-display uppercase tracking-[0.18em] font-semibold",children:"Tasks for the Day"}),u.jsxs("div",{className:"flex items-center gap-1 p-0.5 rounded-lg border bg-black/10 border-white/10",children:[u.jsxs("button",{type:"button",onClick:()=>N("tasks"),className:"px-2 py-0.5 rounded text-[10px] font-semibold bg-violet-600 text-white",children:["Tasks (",Mt,"/",e.length,")"]}),u.jsxs("button",{type:"button",onClick:()=>N("habits"),className:"px-2 py-0.5 rounded text-[10px] font-medium text-zinc-400 hover:text-white",children:["Habits (",Pt,"/",l.length,")"]})]})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("button",{type:"button",onClick:()=>{window.confirm("Reset and uncheck all tasks for today?")&&e.forEach(B=>{B.completed&&t(B.id)})},className:`p-1 rounded-md border transition-colors cursor-pointer ${_e?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-600":"bg-white/10 hover:bg-white/20 border-white/10 text-zinc-300 hover:text-white"}`,title:"Reset today's tasks","aria-label":"Reset tasks for today",children:u.jsx(Rr,{className:"w-3.5 h-3.5"})}),u.jsx("button",{type:"button",onClick:()=>N("none"),className:"p-1 text-zinc-400 hover:text-white cursor-pointer","aria-label":"Close Tasks Panel",children:u.jsx(or,{className:"w-3.5 h-3.5"})})]})]}),u.jsxs("form",{onSubmit:gt,className:"flex items-center gap-2 shrink-0",children:[u.jsx("input",{type:"text",placeholder:"Add task for today...",value:lt,onChange:B=>Ge(B.target.value),className:"flex-1 cosmic-input rounded-xl px-3.5 py-2 text-xs placeholder-zinc-500",autoFocus:!0}),u.jsx("button",{type:"submit",disabled:!lt.trim(),className:"w-8 h-8 rounded-xl bg-violet-600 hover:bg-violet-500 text-white disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center transition-all shrink-0 cursor-pointer shadow-sm",children:u.jsx(xo,{className:"w-4 h-4"})})]}),u.jsx("div",{className:"max-h-56 overflow-y-auto space-y-1.5 pr-1",children:e.map(B=>u.jsxs("div",{className:`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs select-none group ${B.completed?_e?"bg-zinc-100/60 border-zinc-200/60 text-zinc-400":"bg-white/[0.015] border-white/[0.04] text-zinc-500":_e?"bg-white/80 hover:bg-white border-zinc-200/80 text-zinc-800":"bg-white/[0.035] hover:bg-white/[0.07] border-white/[0.08] hover:border-violet-400/20 text-zinc-200"}`,children:[u.jsxs("div",{className:"flex items-center gap-2.5 truncate flex-1 cursor-pointer pr-2",onClick:()=>t(B.id),children:[u.jsx("div",{className:`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border transition-all ${B.completed?"bg-emerald-500 border-emerald-400 text-white shadow-sm":_e?"border-zinc-300 group-hover:border-violet-500":"border-white/[0.25] group-hover:border-violet-400"}`,children:B.completed&&u.jsx(ir,{className:"w-2.5 h-2.5 stroke-[3]"})}),u.jsx("span",{className:`font-sans truncate ${B.completed?"line-through text-zinc-400":_e?"text-zinc-800 font-medium":"text-zinc-200"}`,children:B.text})]}),u.jsx("button",{type:"button",onClick:()=>o(B.id),className:"opacity-0 group-hover:opacity-100 text-zinc-400 hover:text-red-400 transition-opacity p-1 cursor-pointer",children:u.jsx(ss,{className:"w-3.5 h-3.5"})})]},B.id))}),u.jsxs("div",{className:`pt-2.5 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${_e?"border-zinc-200 text-zinc-600":"border-white/[0.08] text-zinc-400"}`,children:[u.jsxs("span",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400"}),"Day Progress"]}),u.jsxs("span",{className:`font-display font-medium tabular-nums ${_e?"text-zinc-900":"text-zinc-200"}`,children:[st,"% done"]})]})]}),Ze==="habits"&&u.jsxs("div",{className:`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${_e?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[u.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${_e?"border-zinc-200":"border-white/[0.08]"}`,children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("h2",{className:"text-xs font-display uppercase tracking-[0.18em] font-semibold",children:"Daily Rhythm Pulse"}),u.jsxs("div",{className:"flex items-center gap-1 p-0.5 rounded-lg border bg-black/10 border-white/10",children:[u.jsxs("button",{type:"button",onClick:()=>N("tasks"),className:"px-2 py-0.5 rounded text-[10px] font-medium text-zinc-400 hover:text-white",children:["Tasks (",Mt,"/",e.length,")"]}),u.jsxs("button",{type:"button",onClick:()=>N("habits"),className:"px-2 py-0.5 rounded text-[10px] font-semibold bg-violet-600 text-white",children:["Habits (",Pt,"/",l.length,")"]})]})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("button",{type:"button",onClick:()=>{window.confirm("Reset today's habit checkmarks?")&&l.forEach(B=>{B.completed&&d(B.id)})},className:`p-1 rounded-md border transition-colors cursor-pointer ${_e?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-600":"bg-white/10 hover:bg-white/20 border-white/10 text-zinc-300 hover:text-white"}`,title:"Reset today's habits","aria-label":"Reset habits for today",children:u.jsx(Rr,{className:"w-3.5 h-3.5"})}),u.jsx("button",{type:"button",onClick:()=>{const B=prompt("Add new daily habit:");B&&f(B)},className:`p-1 rounded-md border transition-colors cursor-pointer ${_e?"bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700":"bg-white/10 hover:bg-white/20 border-white/10 text-white"}`,title:"Add habit","aria-label":"Add new daily habit",children:u.jsx(xo,{className:"w-3.5 h-3.5"})}),u.jsx("button",{type:"button",onClick:()=>N("none"),className:"p-1 text-zinc-400 hover:text-white cursor-pointer","aria-label":"Close Habits Panel",children:u.jsx(or,{className:"w-3.5 h-3.5"})})]})]}),u.jsx("div",{className:"max-h-56 overflow-y-auto space-y-1.5 pr-1",children:l.map(B=>u.jsxs("div",{onClick:()=>d(B.id),className:`p-2.5 rounded-xl border transition-all flex items-center justify-between text-xs cursor-pointer select-none group ${B.completed?_e?"bg-zinc-100/60 border-zinc-200/60 text-zinc-400":"bg-white/[0.015] border-white/[0.04] text-zinc-400":_e?"bg-white/80 hover:bg-white border-zinc-200/80 text-zinc-800":"bg-white/[0.035] hover:bg-white/[0.07] border-white/[0.08] hover:border-violet-400/20 text-zinc-200"}`,children:[u.jsxs("div",{className:"flex flex-col gap-0.5 truncate pr-2",children:[u.jsx("span",{className:`font-sans truncate ${B.completed?"line-through text-zinc-400":_e?"text-zinc-800 font-medium":"text-zinc-200"}`,children:B.name}),u.jsx("div",{className:"flex items-center gap-1.5 text-[10px] font-mono",children:B.streak>0?u.jsxs("span",{className:"text-amber-500 flex items-center gap-0.5 font-medium",children:[u.jsx(Bf,{className:"w-3 h-3 fill-amber-500"})," ",B.streak," day streak"]}):u.jsx("span",{className:_e?"text-zinc-500":"text-zinc-400",children:"Ready today"})})]}),u.jsx("div",{className:`w-4 h-4 rounded-full flex items-center justify-center shrink-0 border transition-all ${B.completed?"bg-emerald-500 border-emerald-400 text-white shadow-sm":_e?"border-zinc-300 group-hover:border-violet-500":"border-white/[0.25] group-hover:border-violet-400"}`,children:B.completed&&u.jsx(ir,{className:"w-2.5 h-2.5 stroke-[3]"})})]},B.id))}),u.jsxs("div",{className:`pt-2.5 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${_e?"border-zinc-200 text-zinc-600":"border-white/[0.08] text-zinc-400"}`,children:[u.jsxs("div",{className:`flex items-center gap-1.5 ${_e?"text-zinc-700":"text-zinc-400"}`,children:[u.jsx(Cs,{className:`w-3.5 h-3.5 ${_e?"text-amber-500":"text-violet-300"}`}),u.jsx("span",{children:"Daily Consistency"})]}),u.jsxs("span",{className:`font-display font-medium tabular-nums ${_e?"text-zinc-900":"text-zinc-200"}`,children:[on,"% kept"]})]})]}),Ze==="timer"&&u.jsxs("div",{className:`w-full max-w-md p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${_e?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[u.jsxs("div",{className:`flex items-center justify-between pb-3 border-b shrink-0 ${_e?"border-zinc-200":"border-white/[0.08]"}`,children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(go,{className:`w-4 h-4 ${_e?"text-violet-700":"text-violet-300"}`}),u.jsx("h2",{className:"text-xs font-display uppercase tracking-[0.18em] font-semibold",children:"Deep Study Console"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs("div",{className:"flex items-center gap-1 p-0.5 rounded-lg border bg-black/10 border-white/10",children:[u.jsx("button",{type:"button",onClick:()=>ae("pomodoro"),className:`px-2 py-0.5 rounded text-[10px] font-semibold transition-all cursor-pointer ${T==="pomodoro"?"bg-violet-600 text-white":_e?"text-zinc-600 hover:text-zinc-950":"text-zinc-400 hover:text-white"}`,children:"Pomodoro Sprint"}),u.jsx("button",{type:"button",onClick:()=>ae("stopwatch"),className:`px-2 py-0.5 rounded text-[10px] font-medium transition-all cursor-pointer ${T==="stopwatch"?"bg-violet-600 text-white":_e?"text-zinc-600 hover:text-zinc-950":"text-zinc-400 hover:text-white"}`,children:"Open Stopwatch"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsxs("button",{type:"button",onClick:()=>{ot(!0),N("none")},className:"flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-sans font-medium text-violet-400 hover:text-violet-300 border border-violet-500/20 hover:border-violet-500/40 cursor-pointer",title:"Open Full Study Analytics Dashboard",children:[u.jsx(Sf,{className:"w-3 h-3"}),u.jsx("span",{children:"Analytics"})]}),u.jsx("button",{type:"button",onClick:()=>N("none"),className:"p-1 text-zinc-400 hover:text-white cursor-pointer",children:u.jsx(or,{className:"w-3.5 h-3.5"})})]})]}),u.jsxs("div",{className:"flex items-center justify-between gap-1.5 px-0.5 pt-0.5",children:[u.jsx("span",{className:`text-[10px] font-sans shrink-0 ${_e?"text-zinc-500":"text-zinc-400"}`,children:"Subject:"}),u.jsx("div",{className:"flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5 flex-1",children:kt.map(B=>{const De=(M||"").toLowerCase()===B.name.toLowerCase();return u.jsxs("button",{type:"button",onClick:()=>v(B.name),className:`px-2 py-0.5 rounded-full text-[10px] font-sans font-medium transition-all shrink-0 cursor-pointer flex items-center gap-1 border ${De?_e?"bg-zinc-900 text-white border-zinc-900 shadow-xs":"bg-white text-zinc-950 border-white shadow-xs font-bold":_e?"bg-zinc-100 border-zinc-200 text-zinc-700 hover:bg-zinc-200":"bg-white/[0.04] border-white/10 text-zinc-300 hover:bg-white/[0.08]"}`,children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full",style:{backgroundColor:B.color}}),u.jsx("span",{children:B.name})]},B.id)})})]})]}),T==="pomodoro"?u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{className:"flex items-center justify-between gap-1.5",children:[[{label:"25m / 5m",focus:25,brk:5},{label:"50m / 10m",focus:50,brk:10},{label:"15m Rapid",focus:15,brk:3}].map(B=>{const De=!It&&q.focusDurationMinutes===B.focus&&q.breakDurationMinutes===B.brk;return u.jsx("button",{type:"button",onClick:()=>{an(!1),W(Qe=>({...Qe,focusDurationMinutes:B.focus,breakDurationMinutes:B.brk})),R==="idle"&&j(B.focus)},className:`flex-1 py-1 px-2 rounded-xl text-[10px] font-mono font-medium border transition-all cursor-pointer ${De?"bg-violet-600 text-white border-violet-400/50 shadow-sm":_e?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 border-white/[0.08]"}`,children:B.label},B.label)}),u.jsx("button",{type:"button",onClick:()=>an(!It),className:`flex-1 py-1 px-2 rounded-xl text-[10px] font-mono font-medium border transition-all cursor-pointer ${It||![25,50,15].includes(q.focusDurationMinutes)?"bg-violet-600 text-white border-violet-400/50 shadow-sm":_e?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 border-white/[0.08]"}`,children:"Custom"})]}),It&&u.jsxs("div",{className:`p-2.5 rounded-xl border flex items-center justify-between gap-2 animate-fadeIn ${_e?"bg-zinc-50 border-zinc-200":"bg-white/[0.03] border-white/10"}`,children:[u.jsxs("div",{className:"flex items-center gap-1 text-[11px] font-mono",children:[u.jsx("span",{className:_e?"text-zinc-600":"text-zinc-400",children:"Focus:"}),u.jsx("input",{type:"number",min:"1",max:"180",value:un,onChange:B=>hi(B.target.value),className:`w-12 px-1.5 py-0.5 rounded border text-center text-xs font-mono outline-none ${_e?"bg-white border-zinc-300 text-zinc-900":"bg-black/40 border-white/15 text-white"}`}),u.jsx("span",{className:_e?"text-zinc-500":"text-zinc-400",children:"m"})]}),u.jsxs("div",{className:"flex items-center gap-1 text-[11px] font-mono",children:[u.jsx("span",{className:_e?"text-zinc-600":"text-zinc-400",children:"Break:"}),u.jsx("input",{type:"number",min:"1",max:"60",value:kn,onChange:B=>zn(B.target.value),className:`w-12 px-1.5 py-0.5 rounded border text-center text-xs font-mono outline-none ${_e?"bg-white border-zinc-300 text-zinc-900":"bg-black/40 border-white/15 text-white"}`}),u.jsx("span",{className:_e?"text-zinc-500":"text-zinc-400",children:"m"})]}),u.jsx("button",{type:"button",onClick:()=>{const B=parseInt(un,10),De=parseInt(kn,10);!isNaN(B)&&B>0&&(W(Qe=>({...Qe,focusDurationMinutes:B,breakDurationMinutes:isNaN(De)||De<=0?5:De})),R==="idle"&&j(B),an(!1))},className:"px-2.5 py-1 rounded-lg text-[10px] font-bold bg-violet-600 hover:bg-violet-500 text-white cursor-pointer shadow-xs transition-colors",children:"Set Sprint"})]}),u.jsxs("div",{className:"text-center py-2 relative",children:[u.jsxs("div",{className:`text-5xl font-display font-bold tracking-tight leading-none tabular-nums ${_e?"text-zinc-950":"text-white"}`,children:[wi,":",ri]}),u.jsx("div",{className:"flex items-center justify-center gap-2 mt-2",children:u.jsx("span",{className:`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${R==="break"?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 animate-pulse":R==="focus"?"bg-violet-500/20 text-violet-300 border border-violet-500/30 animate-pulse":R==="paused"?"bg-amber-500/20 text-amber-300 border border-amber-500/30":_e?"bg-zinc-100 text-zinc-600 border border-zinc-200":"bg-white/[0.06] text-zinc-400 border border-white/[0.08]"}`,children:R==="break"?"RECOVERY BREAK":R==="focus"?"FOCUS SPRINT":R==="paused"?"PAUSED":"READY TO SPRINT"})}),u.jsx("div",{className:"w-full bg-white/[0.06] h-1.5 rounded-full mt-3 overflow-hidden",children:u.jsx("div",{className:`h-full transition-all duration-1000 ${R==="break"?"bg-cyan-400":"bg-violet-500"}`,style:{width:`${Math.round(Yi*100)}%`}})})]}),u.jsxs("div",{className:"flex items-center justify-between text-[11px] px-1 font-mono",children:[u.jsxs("button",{type:"button",onClick:Q,className:`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${q.displayMode==="numbers"?"bg-violet-500/20 border-violet-500/40 text-violet-300":_e?"bg-zinc-100 border-zinc-200 text-zinc-600":"bg-white/[0.04] border-white/[0.08] text-zinc-400"}`,children:[u.jsx(JM,{className:"w-3.5 h-3.5"}),u.jsxs("span",{children:["Clock: ",q.displayMode==="numbers"?"Countdown Digits":"Wall Clock"]})]}),u.jsxs("button",{type:"button",onClick:()=>W(B=>({...B,soundEnabled:!B.soundEnabled})),className:`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${q.soundEnabled?"bg-emerald-500/20 border-emerald-500/40 text-emerald-300":_e?"bg-zinc-100 border-zinc-200 text-zinc-600":"bg-white/[0.04] border-white/[0.08] text-zinc-400"}`,children:[u.jsx(zM,{className:"w-3.5 h-3.5"}),u.jsxs("span",{children:["Chime: ",q.soundEnabled?"ON":"OFF"]})]})]}),u.jsxs("div",{className:"flex gap-2",children:[u.jsx("button",{type:"button",onClick:H,className:`flex-1 py-2.5 rounded-xl font-display text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 border transition-all cursor-pointer ${_e?"bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-800":"bg-violet-600 hover:bg-violet-500 text-white border-violet-400/30"}`,children:R==="focus"?u.jsxs(u.Fragment,{children:[u.jsx(rr,{className:"w-4 h-4"}),u.jsx("span",{children:"Pause Focus"})]}):R==="paused"?u.jsxs(u.Fragment,{children:[u.jsx(Pi,{className:"w-4 h-4 fill-current"}),u.jsx("span",{children:"Resume Focus"})]}):R==="break"?u.jsxs(u.Fragment,{children:[u.jsx(HM,{className:"w-4 h-4"}),u.jsx("span",{children:"Pause Break"})]}):u.jsxs(u.Fragment,{children:[u.jsx(Pi,{className:"w-4 h-4 ml-0.5 fill-current"}),u.jsxs("span",{children:["Start Focus (",q.focusDurationMinutes,"m)"]})]})}),u.jsx("button",{type:"button",onClick:F,className:`px-3 py-2.5 rounded-xl border text-xs font-medium transition-colors cursor-pointer ${_e?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white border-white/[0.08]"}`,title:R==="focus"?"Skip directly to break":"Skip back to focus",children:u.jsx(hc,{className:"w-4 h-4"})}),u.jsx("button",{type:"button",onClick:X,className:`px-3 py-2.5 rounded-xl border transition-colors cursor-pointer ${_e?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white border-white/[0.08]"}`,title:"Reset Pomodoro",children:u.jsx(Rr,{className:"w-3.5 h-3.5"})})]})]}):u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{className:"text-center py-2",children:[u.jsx("div",{className:`text-5xl font-display font-light tracking-widest leading-none tabular-nums ${_e?"text-zinc-900":"text-white"}`,children:te(w)}),u.jsxs("p",{className:`text-[10px] font-display tracking-[0.2em] uppercase mt-2 ${_e?"text-zinc-500":"text-zinc-400"}`,children:[M," • ",tn]})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[u.jsx("input",{type:"text",value:tn,onChange:B=>wn(B.target.value),placeholder:"Mode (e.g. Deep Work)",className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"}),u.jsx("input",{type:"text",value:St,onChange:B=>{Ht(B.target.value),v(B.target.value)},placeholder:"Subject (e.g. Engineering)",className:"w-full cosmic-input rounded-xl px-3 py-1.5 text-xs"})]}),u.jsxs("div",{className:"flex gap-2",children:[u.jsxs("button",{type:"button",onClick:_,className:`flex-1 py-2.5 rounded-xl font-display text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 border transition-all cursor-pointer ${_e?"bg-zinc-900 hover:bg-zinc-800 text-white border-zinc-800":"bg-violet-600 hover:bg-violet-500 text-white border-violet-400/30"}`,children:[S?u.jsx(rr,{className:"w-4 h-4"}):u.jsx(Pi,{className:"w-4 h-4 ml-0.5 fill-current"}),u.jsx("span",{children:S?"Pause Focus":"Start Focus"})]}),u.jsx("button",{type:"button",onClick:P,className:`px-3 py-2.5 rounded-xl border transition-colors cursor-pointer ${_e?"bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-200":"bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white border-white/[0.08]"}`,title:"Reset stopwatch",children:u.jsx(Rr,{className:"w-3.5 h-3.5"})})]})]}),u.jsxs("div",{className:`p-3 rounded-2xl border transition-all ${_e?"bg-zinc-50 border-zinc-200":"bg-white/[0.025] border-white/[0.08]"}`,children:[u.jsxs("div",{className:"flex items-center justify-between text-[11px] mb-2",children:[u.jsxs("span",{className:`font-sans font-medium flex items-center gap-1.5 ${_e?"text-zinc-800":"text-zinc-200"}`,children:[u.jsx(go,{className:"w-3.5 h-3.5 text-amber-400"}),u.jsx("span",{children:"Forgot to start timer? Log past focus:"})]}),Nn&&u.jsx("span",{className:"text-[10px] font-mono text-emerald-400 animate-fadeIn font-semibold",children:Nn})]}),u.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[[30,45,60,90,120].map(B=>u.jsxs("button",{type:"button",onClick:()=>sn(B),className:`px-2.5 py-1 rounded-xl text-[10px] font-mono font-medium border transition-all cursor-pointer ${_e?"bg-white hover:bg-zinc-100 text-zinc-800 border-zinc-200 shadow-xs":"bg-white/[0.05] hover:bg-white/[0.12] text-zinc-300 hover:text-white border-white/[0.1]"}`,title:`Log ${B>=60?B/60+" hours":B+" minutes"} past study`,children:["+",B>=60?`${B/60}h`:`${B}m`]},B)),u.jsxs("form",{onSubmit:bt,className:"flex items-center gap-1 ml-auto",children:[u.jsx("input",{type:"number",min:"1",max:"720",value:fn,onChange:B=>Qt(B.target.value),placeholder:"Mins",className:"w-14 cosmic-input rounded-lg px-2 py-0.5 text-[10px] font-mono text-center"}),u.jsx("button",{type:"submit",className:"px-2.5 py-0.5 rounded-lg text-[10px] font-medium bg-amber-400 hover:bg-amber-300 text-black font-semibold cursor-pointer transition-colors",children:"+ Add"})]})]}),k.length>0&&u.jsxs("div",{className:"pt-2 mt-2 border-t border-white/[0.06] space-y-1",children:[u.jsx("span",{className:`text-[10px] font-mono uppercase tracking-wider block ${_e?"text-zinc-500":"text-zinc-400"}`,children:"Recent Focus Logs:"}),u.jsx("div",{className:"max-h-20 overflow-y-auto space-y-1 pr-1 text-[11px] font-mono",children:k.slice(0,3).map(B=>u.jsxs("div",{className:`flex items-center justify-between px-2 py-1 rounded-lg ${_e?"bg-zinc-100 text-zinc-800":"bg-white/[0.03] text-zinc-300"}`,children:[u.jsxs("span",{className:"truncate",children:[B.subject," · ",Math.round(B.durationSeconds/60),"m"]}),u.jsx("button",{type:"button",onClick:()=>U(B.id),className:"text-zinc-500 hover:text-red-400 p-0.5 transition-colors cursor-pointer",title:"Remove logged entry",children:u.jsx(ss,{className:"w-3 h-3"})})]},B.id))})]})]}),u.jsxs("div",{className:`pt-2.5 border-t flex items-center justify-between text-[11px] font-sans shrink-0 ${_e?"border-zinc-200 text-zinc-600":"border-white/[0.08] text-zinc-400"}`,children:[u.jsxs("span",{children:["Weekly: ",u.jsxs("strong",{className:`font-display ${_e?"text-zinc-900":"text-zinc-200"}`,children:[ln,"h"]})," / 15h"]}),u.jsxs("span",{className:`font-display font-medium tabular-nums ${_e?"text-zinc-900":"text-zinc-200"}`,children:[at,"% quota"]})]})]}),Ze==="wellness"&&u.jsxs("div",{className:`w-full max-w-sm p-5 rounded-3xl border shadow-2xl backdrop-blur-2xl flex flex-col space-y-3.5 ${_e?"bg-white/95 border-zinc-200 text-zinc-900":"cosmic-card border-white/[0.15] text-white"}`,children:[u.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-white/10",children:[u.jsxs("span",{className:"text-xs font-display uppercase tracking-widest font-semibold flex items-center gap-1.5",children:[u.jsx(Cs,{className:"w-3.5 h-3.5 text-amber-400"}),"Daily Wellness Pulse"]}),u.jsx("button",{onClick:()=>N("none"),className:"p-1 text-zinc-400 hover:text-white",children:u.jsx(or,{className:"w-3.5 h-3.5"})})]}),u.jsxs("div",{className:"flex items-center justify-between py-1 text-xs",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(GM,{className:"w-4 h-4 text-sky-400"}),u.jsx("span",{children:"Hydration Target"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("button",{type:"button",onClick:()=>Y(B=>Math.max(0,B-12.5)),className:"w-6 h-6 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center font-bold",children:"-"}),u.jsxs("span",{className:"font-mono font-bold w-12 text-center",children:[Math.round(ue/100*8)," / 8"]}),u.jsx("button",{type:"button",onClick:()=>Y(B=>Math.min(100,B+12.5)),className:"w-6 h-6 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center font-bold",children:"+"})]})]}),u.jsxs("div",{className:"flex items-center justify-between py-1 text-xs",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(fc,{className:"w-4 h-4 text-violet-400"}),u.jsx("span",{children:"Sleep Duration"})]}),u.jsxs("button",{type:"button",onClick:()=>G(se%12+1),className:"px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 font-mono font-bold text-xs",children:[se," Hours (Click to Cycle)"]})]}),u.jsxs("div",{className:"flex items-center justify-between py-1 text-xs",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(qM,{className:"w-4 h-4 text-amber-400"}),u.jsx("span",{children:"Day Score"})]}),u.jsxs("button",{type:"button",onClick:()=>z(Z>=10?1:Z+1),className:"px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 font-mono font-bold text-xs text-amber-400",children:[Z," / 10 ★"]})]}),u.jsxs("div",{className:`pt-3 mt-1 border-t flex items-center justify-between ${_e?"border-zinc-200":"border-white/10"}`,children:[u.jsxs("div",{className:"flex flex-col",children:[u.jsxs("span",{className:"text-[11px] font-medium flex items-center gap-1",children:[u.jsx(Rr,{className:"w-3 h-3 text-violet-400"}),"Day Reset"]}),u.jsxs("span",{className:`text-[9px] font-mono ${_e?"text-zinc-500":"text-zinc-400"}`,children:["Active: ",I]})]}),u.jsxs("button",{type:"button",onClick:()=>{window.confirm("Start a fresh day? This will uncheck today's tasks & habits and reset hydration to 0%.")&&oe()},className:`px-3 py-1.5 rounded-xl border text-[11px] font-display uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${_e?"bg-violet-50 hover:bg-violet-100 text-violet-700 border-violet-200":"bg-violet-600/30 hover:bg-violet-600/50 text-violet-200 border-violet-400/40 hover:border-violet-400"}`,title:"Reset daily progress for a fresh day",children:[u.jsx(Rr,{className:"w-3 h-3"}),u.jsx("span",{children:"Start Fresh Day"})]})]})]})]}),!O&&!wt&&u.jsx("footer",{className:"relative shrink-0 flex items-center justify-center w-full z-20 pb-2",children:u.jsxs("nav",{"aria-label":"Sanctuary Focus Dock",className:`flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-full backdrop-blur-2xl border shadow-2xl transition-all ${_e?"bg-white/85 border-zinc-200/90 text-zinc-800 shadow-[0_15px_40px_rgba(0,0,0,0.1)]":"bg-[#090b16]/80 border-white/[0.12] text-zinc-200 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"}`,children:[u.jsxs("div",{className:`flex items-center rounded-full border transition-all ${At?R==="break"?"bg-cyan-500/20 border-cyan-500/40 text-cyan-300":"bg-violet-600/25 border-violet-500/40 text-violet-300":S?"bg-emerald-500/20 border-emerald-500/40 text-emerald-300":_e?"bg-zinc-100/90 border-zinc-200 text-zinc-800":"bg-white/[0.04] border-white/[0.08] text-zinc-300"}`,children:[u.jsxs("button",{type:"button",onClick:At?H:S?_:()=>j(),className:"pl-3 pr-1.5 py-1.5 flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity",title:At?R==="paused"?"Resume Pomodoro":"Pause Pomodoro":S?"Pause focus timer":"Start Pomodoro Focus",children:[At?R==="paused"?u.jsx(Pi,{className:"w-3.5 h-3.5 text-amber-400 fill-current"}):u.jsx(rr,{className:"w-3.5 h-3.5 text-violet-400 animate-pulse"}):S?u.jsx(rr,{className:"w-3.5 h-3.5 text-emerald-400 animate-pulse"}):u.jsx(Pi,{className:"w-3.5 h-3.5 text-zinc-400 fill-current"}),u.jsx("span",{className:"font-mono text-xs font-semibold tabular-nums",children:At?`${wi}:${ri}`:te(w)})]}),u.jsx("button",{type:"button",onClick:()=>{ae(At?"pomodoro":"stopwatch"),N(B=>B==="timer"?"none":"timer")},className:`pr-3 pl-1.5 py-1.5 text-[11px] font-sans border-l transition-colors cursor-pointer ${_e?"border-zinc-200 hover:text-black":"border-white/10 hover:text-white"}`,title:"Expand Deep Study Console",children:u.jsx("span",{children:At?R==="break"?"Break":"Sprint":St})})]}),u.jsxs("button",{type:"button",onClick:()=>N(B=>B==="tasks"?"none":"tasks"),className:`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-sans transition-all cursor-pointer ${Ze==="tasks"||Ze==="habits"?"bg-violet-600 text-white border-violet-400":_e?"bg-zinc-100/90 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300 hover:text-white"}`,title:"Daily Flow (Tasks & Habits)",children:[u.jsx(YM,{className:"w-3.5 h-3.5 text-violet-400"}),u.jsx("span",{children:"Flow"}),u.jsxs("span",{className:`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${_e?"bg-zinc-200/90 text-zinc-800":"bg-white/10 text-violet-200"}`,children:[Mt+Pt,"/",e.length+l.length]})]}),u.jsxs("button",{type:"button",onClick:()=>Ie(B=>!B),className:`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-sans transition-all cursor-pointer ${Bt?"bg-amber-400 text-zinc-950 border-amber-300 font-semibold shadow-xs":_e?"bg-zinc-100/90 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300 hover:text-white"}`,title:"Daily Routine Protocol Checklist",children:[u.jsx("span",{className:"w-2 h-2 rounded-full animate-pulse",style:{backgroundColor:(m==null?void 0:m.colorTag)||"#fbbf24"}}),u.jsx("span",{children:"Rhythm"}),m&&u.jsx("span",{className:`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${_e?"bg-zinc-200/90 text-zinc-800":"bg-white/10 text-amber-200"}`,children:b>0?`${b}m`:"Flow"})]}),u.jsxs("div",{onClick:()=>ee(!0),className:`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs cursor-pointer group transition-all ${me||Ne?Me==="youtube"?"bg-red-600/30 border-red-500/40 text-red-200":"bg-violet-600/30 border-violet-500/40 text-violet-200":_e?"bg-zinc-100/90 hover:bg-zinc-200 border-zinc-200 text-zinc-800":"bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.08] text-zinc-300 hover:text-white"}`,title:"Open Audio Sanctuary",children:[Me==="youtube"&&Ne?u.jsx(co,{className:"w-3.5 h-3.5 text-red-500 animate-pulse"}):u.jsx(dc,{className:`w-3.5 h-3.5 ${me||Ne?"text-violet-300 animate-pulse":"text-zinc-400"}`}),u.jsx("span",{className:"max-w-[80px] sm:max-w-[120px] truncate text-[11px] font-medium",children:Me==="youtube"?je?je.title:"YouTube":fe.title}),u.jsx(lx,{isPlaying:Me==="youtube"?Ne:me,color:Me==="youtube"?"#ef4444":_e?"#7c3aed":fe.accentColor,className:"w-8 h-2.5",barCount:4}),u.jsx("button",{type:"button",onClick:B=>{B.stopPropagation(),Me==="youtube"?qe():me?$e():Ye(he)},className:"w-5 h-5 rounded-md flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors",title:(Me==="youtube"?Ne:me)?"Pause audio":"Play audio",children:(Me==="youtube"?Ne:me)?u.jsx(rr,{className:"w-2.5 h-2.5 fill-current"}):u.jsx(Pi,{className:"w-2.5 h-2.5 fill-current ml-0.5"})})]})]})}),u.jsx(l2,{isOpen:Bt,onClose:()=>Ie(!1),onStartFocusForRoutine:Xt}),u.jsx(a2,{isOpen:vn,onClose:()=>Et(!1)}),u.jsx(r2,{isOpen:Lt,onClose:()=>cn(!1)}),u.jsx(s2,{isOpen:gn,onClose:()=>ee(!1)}),u.jsx(o2,{isOpen:Kt,onClose:()=>ot(!1)})]})},d2=()=>{const{wallpaperTheme:s,appTheme:e}=dr(),t=e==="light";return u.jsxs("div",{"data-theme":s,className:`theme-${e} relative w-screen h-screen max-h-screen overflow-hidden text-[var(--text-primary)] font-sans transition-colors duration-200 ${t?"bg-[#f7f5f0]/95":"bg-[#060814]"}`,children:[u.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--card-bg-elevated)] focus:text-[var(--text-primary)] focus:rounded-xl focus:border focus:border-[var(--card-border)] focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-violet-400 font-sans text-xs font-semibold",children:"Skip to main content"}),u.jsx(i_,{}),u.jsx(EM,{}),u.jsx(t2,{}),u.jsx("div",{className:"pointer-events-none fixed inset-0 z-20 dreamy-grain opacity-15"}),u.jsx("main",{id:"main-content",className:"w-full h-full overflow-y-auto lg:overflow-hidden relative z-10",children:u.jsx(u2,{})})]})};function f2(){return u.jsx(n_,{children:u.jsx(d2,{})})}const mm=document.getElementById("root");mm&&Zv.createRoot(mm).render(u.jsx(Vv.StrictMode,{children:u.jsx(f2,{})}));
