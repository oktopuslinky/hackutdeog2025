(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function G1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Jv={exports:{}},fu={},e_={exports:{}},Qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qa=Symbol.for("react.element"),W1=Symbol.for("react.portal"),j1=Symbol.for("react.fragment"),X1=Symbol.for("react.strict_mode"),$1=Symbol.for("react.profiler"),Y1=Symbol.for("react.provider"),q1=Symbol.for("react.context"),K1=Symbol.for("react.forward_ref"),Z1=Symbol.for("react.suspense"),Q1=Symbol.for("react.memo"),J1=Symbol.for("react.lazy"),h0=Symbol.iterator;function eE(t){return t===null||typeof t!="object"?null:(t=h0&&t[h0]||t["@@iterator"],typeof t=="function"?t:null)}var t_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},n_=Object.assign,i_={};function To(t,e,n){this.props=t,this.context=e,this.refs=i_,this.updater=n||t_}To.prototype.isReactComponent={};To.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};To.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function r_(){}r_.prototype=To.prototype;function _p(t,e,n){this.props=t,this.context=e,this.refs=i_,this.updater=n||t_}var yp=_p.prototype=new r_;yp.constructor=_p;n_(yp,To.prototype);yp.isPureReactComponent=!0;var p0=Array.isArray,s_=Object.prototype.hasOwnProperty,Sp={current:null},o_={key:!0,ref:!0,__self:!0,__source:!0};function a_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)s_.call(e,i)&&!o_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:qa,type:t,key:s,ref:o,props:r,_owner:Sp.current}}function tE(t,e){return{$$typeof:qa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mp(t){return typeof t=="object"&&t!==null&&t.$$typeof===qa}function nE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var m0=/\/+/g;function ku(t,e){return typeof t=="object"&&t!==null&&t.key!=null?nE(""+t.key):e.toString(36)}function ac(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case qa:case W1:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+ku(o,0):i,p0(r)?(n="",t!=null&&(n=t.replace(m0,"$&/")+"/"),ac(r,e,n,"",function(c){return c})):r!=null&&(Mp(r)&&(r=tE(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(m0,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",p0(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+ku(s,a);o+=ac(s,e,n,l,r)}else if(l=eE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+ku(s,a++),o+=ac(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function fl(t,e,n){if(t==null)return t;var i=[],r=0;return ac(t,i,"","",function(s){return e.call(n,s,r++)}),i}function iE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dn={current:null},lc={transition:null},rE={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:lc,ReactCurrentOwner:Sp};function l_(){throw Error("act(...) is not supported in production builds of React.")}Qe.Children={map:fl,forEach:function(t,e,n){fl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fl(t,function(){e++}),e},toArray:function(t){return fl(t,function(e){return e})||[]},only:function(t){if(!Mp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Qe.Component=To;Qe.Fragment=j1;Qe.Profiler=$1;Qe.PureComponent=_p;Qe.StrictMode=X1;Qe.Suspense=Z1;Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rE;Qe.act=l_;Qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=n_({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Sp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)s_.call(e,l)&&!o_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:qa,type:t.type,key:r,ref:s,props:i,_owner:o}};Qe.createContext=function(t){return t={$$typeof:q1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Y1,_context:t},t.Consumer=t};Qe.createElement=a_;Qe.createFactory=function(t){var e=a_.bind(null,t);return e.type=t,e};Qe.createRef=function(){return{current:null}};Qe.forwardRef=function(t){return{$$typeof:K1,render:t}};Qe.isValidElement=Mp;Qe.lazy=function(t){return{$$typeof:J1,_payload:{_status:-1,_result:t},_init:iE}};Qe.memo=function(t,e){return{$$typeof:Q1,type:t,compare:e===void 0?null:e}};Qe.startTransition=function(t){var e=lc.transition;lc.transition={};try{t()}finally{lc.transition=e}};Qe.unstable_act=l_;Qe.useCallback=function(t,e){return dn.current.useCallback(t,e)};Qe.useContext=function(t){return dn.current.useContext(t)};Qe.useDebugValue=function(){};Qe.useDeferredValue=function(t){return dn.current.useDeferredValue(t)};Qe.useEffect=function(t,e){return dn.current.useEffect(t,e)};Qe.useId=function(){return dn.current.useId()};Qe.useImperativeHandle=function(t,e,n){return dn.current.useImperativeHandle(t,e,n)};Qe.useInsertionEffect=function(t,e){return dn.current.useInsertionEffect(t,e)};Qe.useLayoutEffect=function(t,e){return dn.current.useLayoutEffect(t,e)};Qe.useMemo=function(t,e){return dn.current.useMemo(t,e)};Qe.useReducer=function(t,e,n){return dn.current.useReducer(t,e,n)};Qe.useRef=function(t){return dn.current.useRef(t)};Qe.useState=function(t){return dn.current.useState(t)};Qe.useSyncExternalStore=function(t,e,n){return dn.current.useSyncExternalStore(t,e,n)};Qe.useTransition=function(){return dn.current.useTransition()};Qe.version="18.3.1";e_.exports=Qe;var te=e_.exports;const sE=G1(te);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oE=te,aE=Symbol.for("react.element"),lE=Symbol.for("react.fragment"),cE=Object.prototype.hasOwnProperty,uE=oE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fE={key:!0,ref:!0,__self:!0,__source:!0};function c_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)cE.call(e,i)&&!fE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:aE,type:t,key:s,ref:o,props:r,_owner:uE.current}}fu.Fragment=lE;fu.jsx=c_;fu.jsxs=c_;Jv.exports=fu;var O=Jv.exports,fd={},u_={exports:{}},Fn={},f_={exports:{}},d_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,W){var q=P.length;P.push(W);e:for(;0<q;){var oe=q-1>>>1,we=P[oe];if(0<r(we,W))P[oe]=W,P[q]=we,q=oe;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var W=P[0],q=P.pop();if(q!==W){P[0]=q;e:for(var oe=0,we=P.length,Pe=we>>>1;oe<Pe;){var Le=2*(oe+1)-1,Ze=P[Le],J=Le+1,K=P[J];if(0>r(Ze,q))J<we&&0>r(K,Ze)?(P[oe]=K,P[J]=q,oe=J):(P[oe]=Ze,P[Le]=q,oe=Le);else if(J<we&&0>r(K,q))P[oe]=K,P[J]=q,oe=J;else break e}}return W}function r(P,W){var q=P.sortIndex-W.sortIndex;return q!==0?q:P.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,d=3,p=!1,x=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(P){for(var W=n(c);W!==null;){if(W.callback===null)i(c);else if(W.startTime<=P)i(c),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(c)}}function M(P){if(y=!1,_(P),!x)if(n(l)!==null)x=!0,X(b);else{var W=n(c);W!==null&&Q(M,W.startTime-P)}}function b(P,W){x=!1,y&&(y=!1,h(R),R=-1),p=!0;var q=d;try{for(_(W),f=n(l);f!==null&&(!(f.expirationTime>W)||P&&!D());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,d=f.priorityLevel;var we=oe(f.expirationTime<=W);W=t.unstable_now(),typeof we=="function"?f.callback=we:f===n(l)&&i(l),_(W)}else i(l);f=n(l)}if(f!==null)var Pe=!0;else{var Le=n(c);Le!==null&&Q(M,Le.startTime-W),Pe=!1}return Pe}finally{f=null,d=q,p=!1}}var S=!1,A=null,R=-1,T=5,E=-1;function D(){return!(t.unstable_now()-E<T)}function k(){if(A!==null){var P=t.unstable_now();E=P;var W=!0;try{W=A(!0,P)}finally{W?H():(S=!1,A=null)}}else S=!1}var H;if(typeof m=="function")H=function(){m(k)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,Z=Y.port2;Y.port1.onmessage=k,H=function(){Z.postMessage(null)}}else H=function(){g(k,0)};function X(P){A=P,S||(S=!0,H())}function Q(P,W){R=g(function(){P(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,X(b))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(d){case 1:case 2:case 3:var W=3;break;default:W=d}var q=d;d=W;try{return P()}finally{d=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,W){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var q=d;d=P;try{return W()}finally{d=q}},t.unstable_scheduleCallback=function(P,W,q){var oe=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?oe+q:oe):q=oe,P){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=q+we,P={id:u++,callback:W,priorityLevel:P,startTime:q,expirationTime:we,sortIndex:-1},q>oe?(P.sortIndex=q,e(c,P),n(l)===null&&P===n(c)&&(y?(h(R),R=-1):y=!0,Q(M,q-oe))):(P.sortIndex=we,e(l,P),x||p||(x=!0,X(b))),P},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(P){var W=d;return function(){var q=d;d=W;try{return P.apply(this,arguments)}finally{d=q}}}})(d_);f_.exports=d_;var dE=f_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hE=te,Un=dE;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h_=new Set,Sa={};function xs(t,e){uo(t,e),uo(t+"Capture",e)}function uo(t,e){for(Sa[t]=e,t=0;t<e.length;t++)h_.add(e[t])}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dd=Object.prototype.hasOwnProperty,pE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g0={},x0={};function mE(t){return dd.call(x0,t)?!0:dd.call(g0,t)?!1:pE.test(t)?x0[t]=!0:(g0[t]=!0,!1)}function gE(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function xE(t,e,n,i){if(e===null||typeof e>"u"||gE(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Kt[t]=new hn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Kt[e]=new hn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Kt[t]=new hn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Kt[t]=new hn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Kt[t]=new hn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Kt[t]=new hn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Kt[t]=new hn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Kt[t]=new hn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Kt[t]=new hn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ep=/[\-:]([a-z])/g;function bp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ep,bp);Kt[e]=new hn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ep,bp);Kt[e]=new hn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ep,bp);Kt[e]=new hn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Kt[t]=new hn(t,1,!1,t.toLowerCase(),null,!1,!1)});Kt.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Kt[t]=new hn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Tp(t,e,n,i){var r=Kt.hasOwnProperty(e)?Kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(xE(e,n,r,i)&&(n=null),i||r===null?mE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ji=hE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,dl=Symbol.for("react.element"),Os=Symbol.for("react.portal"),ks=Symbol.for("react.fragment"),wp=Symbol.for("react.strict_mode"),hd=Symbol.for("react.profiler"),p_=Symbol.for("react.provider"),m_=Symbol.for("react.context"),Ap=Symbol.for("react.forward_ref"),pd=Symbol.for("react.suspense"),md=Symbol.for("react.suspense_list"),Cp=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),g_=Symbol.for("react.offscreen"),v0=Symbol.iterator;function Fo(t){return t===null||typeof t!="object"?null:(t=v0&&t[v0]||t["@@iterator"],typeof t=="function"?t:null)}var wt=Object.assign,Bu;function ta(t){if(Bu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Bu=e&&e[1]||""}return`
`+Bu+t}var zu=!1;function Vu(t,e){if(!t||zu)return"";zu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{zu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ta(t):""}function vE(t){switch(t.tag){case 5:return ta(t.type);case 16:return ta("Lazy");case 13:return ta("Suspense");case 19:return ta("SuspenseList");case 0:case 2:case 15:return t=Vu(t.type,!1),t;case 11:return t=Vu(t.type.render,!1),t;case 1:return t=Vu(t.type,!0),t;default:return""}}function gd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ks:return"Fragment";case Os:return"Portal";case hd:return"Profiler";case wp:return"StrictMode";case pd:return"Suspense";case md:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case m_:return(t.displayName||"Context")+".Consumer";case p_:return(t._context.displayName||"Context")+".Provider";case Ap:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Cp:return e=t.displayName||null,e!==null?e:gd(t.type)||"Memo";case ur:e=t._payload,t=t._init;try{return gd(t(e))}catch{}}return null}function _E(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gd(e);case 8:return e===wp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function x_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function yE(t){var e=x_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function hl(t){t._valueTracker||(t._valueTracker=yE(t))}function v_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=x_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Pc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xd(t,e){var n=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function _0(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function __(t,e){e=e.checked,e!=null&&Tp(t,"checked",e,!1)}function vd(t,e){__(t,e);var n=Ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_d(t,e.type,n):e.hasOwnProperty("defaultValue")&&_d(t,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function y0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _d(t,e,n){(e!=="number"||Pc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var na=Array.isArray;function to(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function yd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function S0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(na(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ar(n)}}function y_(t,e){var n=Ar(e.value),i=Ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function M0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function S_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?S_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var pl,M_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(pl=pl||document.createElement("div"),pl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=pl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ma(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var aa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},SE=["Webkit","ms","Moz","O"];Object.keys(aa).forEach(function(t){SE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),aa[e]=aa[t]})});function E_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||aa.hasOwnProperty(t)&&aa[t]?(""+e).trim():e+"px"}function b_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=E_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ME=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Md(t,e){if(e){if(ME[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function Ed(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bd=null;function Rp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Td=null,no=null,io=null;function E0(t){if(t=Qa(t)){if(typeof Td!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=gu(e),Td(t.stateNode,t.type,e))}}function T_(t){no?io?io.push(t):io=[t]:no=t}function w_(){if(no){var t=no,e=io;if(io=no=null,E0(t),e)for(t=0;t<e.length;t++)E0(e[t])}}function A_(t,e){return t(e)}function C_(){}var Hu=!1;function R_(t,e,n){if(Hu)return t(e,n);Hu=!0;try{return A_(t,e,n)}finally{Hu=!1,(no!==null||io!==null)&&(C_(),w_())}}function Ea(t,e){var n=t.stateNode;if(n===null)return null;var i=gu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var wd=!1;if(Xi)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){wd=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{wd=!1}function EE(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var la=!1,Dc=null,Lc=!1,Ad=null,bE={onError:function(t){la=!0,Dc=t}};function TE(t,e,n,i,r,s,o,a,l){la=!1,Dc=null,EE.apply(bE,arguments)}function wE(t,e,n,i,r,s,o,a,l){if(TE.apply(this,arguments),la){if(la){var c=Dc;la=!1,Dc=null}else throw Error(ie(198));Lc||(Lc=!0,Ad=c)}}function vs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function P_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function b0(t){if(vs(t)!==t)throw Error(ie(188))}function AE(t){var e=t.alternate;if(!e){if(e=vs(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return b0(r),t;if(s===i)return b0(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function D_(t){return t=AE(t),t!==null?L_(t):null}function L_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=L_(t);if(e!==null)return e;t=t.sibling}return null}var I_=Un.unstable_scheduleCallback,T0=Un.unstable_cancelCallback,CE=Un.unstable_shouldYield,RE=Un.unstable_requestPaint,It=Un.unstable_now,PE=Un.unstable_getCurrentPriorityLevel,Pp=Un.unstable_ImmediatePriority,N_=Un.unstable_UserBlockingPriority,Ic=Un.unstable_NormalPriority,DE=Un.unstable_LowPriority,U_=Un.unstable_IdlePriority,du=null,Si=null;function LE(t){if(Si&&typeof Si.onCommitFiberRoot=="function")try{Si.onCommitFiberRoot(du,t,void 0,(t.current.flags&128)===128)}catch{}}var li=Math.clz32?Math.clz32:UE,IE=Math.log,NE=Math.LN2;function UE(t){return t>>>=0,t===0?32:31-(IE(t)/NE|0)|0}var ml=64,gl=4194304;function ia(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Nc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ia(a):(s&=o,s!==0&&(i=ia(s)))}else o=n&~r,o!==0?i=ia(o):s!==0&&(i=ia(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-li(e),r=1<<n,i|=t[n],e&=~r;return i}function FE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function OE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-li(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=FE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Cd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function F_(){var t=ml;return ml<<=1,!(ml&4194240)&&(ml=64),t}function Gu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ka(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-li(e),t[e]=n}function kE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-li(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Dp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-li(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function O_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var k_,Lp,B_,z_,V_,Rd=!1,xl=[],vr=null,_r=null,yr=null,ba=new Map,Ta=new Map,dr=[],BE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function w0(t,e){switch(t){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":ba.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ta.delete(e.pointerId)}}function ko(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Qa(e),e!==null&&Lp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function zE(t,e,n,i,r){switch(e){case"focusin":return vr=ko(vr,t,e,n,i,r),!0;case"dragenter":return _r=ko(_r,t,e,n,i,r),!0;case"mouseover":return yr=ko(yr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ba.set(s,ko(ba.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ta.set(s,ko(Ta.get(s)||null,t,e,n,i,r)),!0}return!1}function H_(t){var e=es(t.target);if(e!==null){var n=vs(e);if(n!==null){if(e=n.tag,e===13){if(e=P_(n),e!==null){t.blockedOn=e,V_(t.priority,function(){B_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Pd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);bd=i,n.target.dispatchEvent(i),bd=null}else return e=Qa(n),e!==null&&Lp(e),t.blockedOn=n,!1;e.shift()}return!0}function A0(t,e,n){cc(t)&&n.delete(e)}function VE(){Rd=!1,vr!==null&&cc(vr)&&(vr=null),_r!==null&&cc(_r)&&(_r=null),yr!==null&&cc(yr)&&(yr=null),ba.forEach(A0),Ta.forEach(A0)}function Bo(t,e){t.blockedOn===e&&(t.blockedOn=null,Rd||(Rd=!0,Un.unstable_scheduleCallback(Un.unstable_NormalPriority,VE)))}function wa(t){function e(r){return Bo(r,t)}if(0<xl.length){Bo(xl[0],t);for(var n=1;n<xl.length;n++){var i=xl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(vr!==null&&Bo(vr,t),_r!==null&&Bo(_r,t),yr!==null&&Bo(yr,t),ba.forEach(e),Ta.forEach(e),n=0;n<dr.length;n++)i=dr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<dr.length&&(n=dr[0],n.blockedOn===null);)H_(n),n.blockedOn===null&&dr.shift()}var ro=Ji.ReactCurrentBatchConfig,Uc=!0;function HE(t,e,n,i){var r=ot,s=ro.transition;ro.transition=null;try{ot=1,Ip(t,e,n,i)}finally{ot=r,ro.transition=s}}function GE(t,e,n,i){var r=ot,s=ro.transition;ro.transition=null;try{ot=4,Ip(t,e,n,i)}finally{ot=r,ro.transition=s}}function Ip(t,e,n,i){if(Uc){var r=Pd(t,e,n,i);if(r===null)Ju(t,e,i,Fc,n),w0(t,i);else if(zE(r,t,e,n,i))i.stopPropagation();else if(w0(t,i),e&4&&-1<BE.indexOf(t)){for(;r!==null;){var s=Qa(r);if(s!==null&&k_(s),s=Pd(t,e,n,i),s===null&&Ju(t,e,i,Fc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ju(t,e,i,null,n)}}var Fc=null;function Pd(t,e,n,i){if(Fc=null,t=Rp(i),t=es(t),t!==null)if(e=vs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=P_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fc=t,null}function G_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(PE()){case Pp:return 1;case N_:return 4;case Ic:case DE:return 16;case U_:return 536870912;default:return 16}default:return 16}}var mr=null,Np=null,uc=null;function W_(){if(uc)return uc;var t,e=Np,n=e.length,i,r="value"in mr?mr.value:mr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return uc=r.slice(t,1<i?1-i:void 0)}function fc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function vl(){return!0}function C0(){return!1}function On(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?vl:C0,this.isPropagationStopped=C0,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),e}var wo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Up=On(wo),Za=wt({},wo,{view:0,detail:0}),WE=On(Za),Wu,ju,zo,hu=wt({},Za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zo&&(zo&&t.type==="mousemove"?(Wu=t.screenX-zo.screenX,ju=t.screenY-zo.screenY):ju=Wu=0,zo=t),Wu)},movementY:function(t){return"movementY"in t?t.movementY:ju}}),R0=On(hu),jE=wt({},hu,{dataTransfer:0}),XE=On(jE),$E=wt({},Za,{relatedTarget:0}),Xu=On($E),YE=wt({},wo,{animationName:0,elapsedTime:0,pseudoElement:0}),qE=On(YE),KE=wt({},wo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ZE=On(KE),QE=wt({},wo,{data:0}),P0=On(QE),JE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=tb[t])?!!e[t]:!1}function Fp(){return nb}var ib=wt({},Za,{key:function(t){if(t.key){var e=JE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=fc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?eb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fp,charCode:function(t){return t.type==="keypress"?fc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rb=On(ib),sb=wt({},hu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),D0=On(sb),ob=wt({},Za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fp}),ab=On(ob),lb=wt({},wo,{propertyName:0,elapsedTime:0,pseudoElement:0}),cb=On(lb),ub=wt({},hu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fb=On(ub),db=[9,13,27,32],Op=Xi&&"CompositionEvent"in window,ca=null;Xi&&"documentMode"in document&&(ca=document.documentMode);var hb=Xi&&"TextEvent"in window&&!ca,j_=Xi&&(!Op||ca&&8<ca&&11>=ca),L0=" ",I0=!1;function X_(t,e){switch(t){case"keyup":return db.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bs=!1;function pb(t,e){switch(t){case"compositionend":return $_(e);case"keypress":return e.which!==32?null:(I0=!0,L0);case"textInput":return t=e.data,t===L0&&I0?null:t;default:return null}}function mb(t,e){if(Bs)return t==="compositionend"||!Op&&X_(t,e)?(t=W_(),uc=Np=mr=null,Bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return j_&&e.locale!=="ko"?null:e.data;default:return null}}var gb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function N0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!gb[t.type]:e==="textarea"}function Y_(t,e,n,i){T_(i),e=Oc(e,"onChange"),0<e.length&&(n=new Up("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ua=null,Aa=null;function xb(t){sy(t,0)}function pu(t){var e=Hs(t);if(v_(e))return t}function vb(t,e){if(t==="change")return e}var q_=!1;if(Xi){var $u;if(Xi){var Yu="oninput"in document;if(!Yu){var U0=document.createElement("div");U0.setAttribute("oninput","return;"),Yu=typeof U0.oninput=="function"}$u=Yu}else $u=!1;q_=$u&&(!document.documentMode||9<document.documentMode)}function F0(){ua&&(ua.detachEvent("onpropertychange",K_),Aa=ua=null)}function K_(t){if(t.propertyName==="value"&&pu(Aa)){var e=[];Y_(e,Aa,t,Rp(t)),R_(xb,e)}}function _b(t,e,n){t==="focusin"?(F0(),ua=e,Aa=n,ua.attachEvent("onpropertychange",K_)):t==="focusout"&&F0()}function yb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pu(Aa)}function Sb(t,e){if(t==="click")return pu(e)}function Mb(t,e){if(t==="input"||t==="change")return pu(e)}function Eb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var di=typeof Object.is=="function"?Object.is:Eb;function Ca(t,e){if(di(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!dd.call(e,r)||!di(t[r],e[r]))return!1}return!0}function O0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function k0(t,e){var n=O0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=O0(n)}}function Z_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Z_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Q_(){for(var t=window,e=Pc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Pc(t.document)}return e}function kp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function bb(t){var e=Q_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Z_(n.ownerDocument.documentElement,n)){if(i!==null&&kp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=k0(n,s);var o=k0(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Tb=Xi&&"documentMode"in document&&11>=document.documentMode,zs=null,Dd=null,fa=null,Ld=!1;function B0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ld||zs==null||zs!==Pc(i)||(i=zs,"selectionStart"in i&&kp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),fa&&Ca(fa,i)||(fa=i,i=Oc(Dd,"onSelect"),0<i.length&&(e=new Up("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=zs)))}function _l(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Vs={animationend:_l("Animation","AnimationEnd"),animationiteration:_l("Animation","AnimationIteration"),animationstart:_l("Animation","AnimationStart"),transitionend:_l("Transition","TransitionEnd")},qu={},J_={};Xi&&(J_=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function mu(t){if(qu[t])return qu[t];if(!Vs[t])return t;var e=Vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in J_)return qu[t]=e[n];return t}var ey=mu("animationend"),ty=mu("animationiteration"),ny=mu("animationstart"),iy=mu("transitionend"),ry=new Map,z0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(t,e){ry.set(t,e),xs(e,[t])}for(var Ku=0;Ku<z0.length;Ku++){var Zu=z0[Ku],wb=Zu.toLowerCase(),Ab=Zu[0].toUpperCase()+Zu.slice(1);Lr(wb,"on"+Ab)}Lr(ey,"onAnimationEnd");Lr(ty,"onAnimationIteration");Lr(ny,"onAnimationStart");Lr("dblclick","onDoubleClick");Lr("focusin","onFocus");Lr("focusout","onBlur");Lr(iy,"onTransitionEnd");uo("onMouseEnter",["mouseout","mouseover"]);uo("onMouseLeave",["mouseout","mouseover"]);uo("onPointerEnter",["pointerout","pointerover"]);uo("onPointerLeave",["pointerout","pointerover"]);xs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xs("onBeforeInput",["compositionend","keypress","textInput","paste"]);xs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cb=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function V0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,wE(i,e,void 0,t),t.currentTarget=null}function sy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;V0(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;V0(r,a,c),s=l}}}if(Lc)throw t=Ad,Lc=!1,Ad=null,t}function mt(t,e){var n=e[Od];n===void 0&&(n=e[Od]=new Set);var i=t+"__bubble";n.has(i)||(oy(e,t,2,!1),n.add(i))}function Qu(t,e,n){var i=0;e&&(i|=4),oy(n,t,i,e)}var yl="_reactListening"+Math.random().toString(36).slice(2);function Ra(t){if(!t[yl]){t[yl]=!0,h_.forEach(function(n){n!=="selectionchange"&&(Cb.has(n)||Qu(n,!1,t),Qu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[yl]||(e[yl]=!0,Qu("selectionchange",!1,e))}}function oy(t,e,n,i){switch(G_(e)){case 1:var r=HE;break;case 4:r=GE;break;default:r=Ip}n=r.bind(null,e,n,t),r=void 0,!wd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ju(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=es(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}R_(function(){var c=s,u=Rp(n),f=[];e:{var d=ry.get(t);if(d!==void 0){var p=Up,x=t;switch(t){case"keypress":if(fc(n)===0)break e;case"keydown":case"keyup":p=rb;break;case"focusin":x="focus",p=Xu;break;case"focusout":x="blur",p=Xu;break;case"beforeblur":case"afterblur":p=Xu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=R0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=XE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=ab;break;case ey:case ty:case ny:p=qE;break;case iy:p=cb;break;case"scroll":p=WE;break;case"wheel":p=fb;break;case"copy":case"cut":case"paste":p=ZE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=D0}var y=(e&4)!==0,g=!y&&t==="scroll",h=y?d!==null?d+"Capture":null:d;y=[];for(var m=c,_;m!==null;){_=m;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,h!==null&&(M=Ea(m,h),M!=null&&y.push(Pa(m,M,_)))),g)break;m=m.return}0<y.length&&(d=new p(d,x,null,n,u),f.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==bd&&(x=n.relatedTarget||n.fromElement)&&(es(x)||x[$i]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?es(x):null,x!==null&&(g=vs(x),x!==g||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=c),p!==x)){if(y=R0,M="onMouseLeave",h="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=D0,M="onPointerLeave",h="onPointerEnter",m="pointer"),g=p==null?d:Hs(p),_=x==null?d:Hs(x),d=new y(M,m+"leave",p,n,u),d.target=g,d.relatedTarget=_,M=null,es(u)===c&&(y=new y(h,m+"enter",x,n,u),y.target=_,y.relatedTarget=g,M=y),g=M,p&&x)t:{for(y=p,h=x,m=0,_=y;_;_=Ss(_))m++;for(_=0,M=h;M;M=Ss(M))_++;for(;0<m-_;)y=Ss(y),m--;for(;0<_-m;)h=Ss(h),_--;for(;m--;){if(y===h||h!==null&&y===h.alternate)break t;y=Ss(y),h=Ss(h)}y=null}else y=null;p!==null&&H0(f,d,p,y,!1),x!==null&&g!==null&&H0(f,g,x,y,!0)}}e:{if(d=c?Hs(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var b=vb;else if(N0(d))if(q_)b=Mb;else{b=yb;var S=_b}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=Sb);if(b&&(b=b(t,c))){Y_(f,b,n,u);break e}S&&S(t,d,c),t==="focusout"&&(S=d._wrapperState)&&S.controlled&&d.type==="number"&&_d(d,"number",d.value)}switch(S=c?Hs(c):window,t){case"focusin":(N0(S)||S.contentEditable==="true")&&(zs=S,Dd=c,fa=null);break;case"focusout":fa=Dd=zs=null;break;case"mousedown":Ld=!0;break;case"contextmenu":case"mouseup":case"dragend":Ld=!1,B0(f,n,u);break;case"selectionchange":if(Tb)break;case"keydown":case"keyup":B0(f,n,u)}var A;if(Op)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Bs?X_(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(j_&&n.locale!=="ko"&&(Bs||R!=="onCompositionStart"?R==="onCompositionEnd"&&Bs&&(A=W_()):(mr=u,Np="value"in mr?mr.value:mr.textContent,Bs=!0)),S=Oc(c,R),0<S.length&&(R=new P0(R,t,null,n,u),f.push({event:R,listeners:S}),A?R.data=A:(A=$_(n),A!==null&&(R.data=A)))),(A=hb?pb(t,n):mb(t,n))&&(c=Oc(c,"onBeforeInput"),0<c.length&&(u=new P0("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=A))}sy(f,e)})}function Pa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Oc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ea(t,n),s!=null&&i.unshift(Pa(t,s,r)),s=Ea(t,e),s!=null&&i.push(Pa(t,s,r))),t=t.return}return i}function Ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function H0(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ea(n,s),l!=null&&o.unshift(Pa(n,l,a))):r||(l=Ea(n,s),l!=null&&o.push(Pa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Rb=/\r\n?/g,Pb=/\u0000|\uFFFD/g;function G0(t){return(typeof t=="string"?t:""+t).replace(Rb,`
`).replace(Pb,"")}function Sl(t,e,n){if(e=G0(e),G0(t)!==e&&n)throw Error(ie(425))}function kc(){}var Id=null,Nd=null;function Ud(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Fd=typeof setTimeout=="function"?setTimeout:void 0,Db=typeof clearTimeout=="function"?clearTimeout:void 0,W0=typeof Promise=="function"?Promise:void 0,Lb=typeof queueMicrotask=="function"?queueMicrotask:typeof W0<"u"?function(t){return W0.resolve(null).then(t).catch(Ib)}:Fd;function Ib(t){setTimeout(function(){throw t})}function ef(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),wa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);wa(e)}function Sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function j0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ao=Math.random().toString(36).slice(2),xi="__reactFiber$"+Ao,Da="__reactProps$"+Ao,$i="__reactContainer$"+Ao,Od="__reactEvents$"+Ao,Nb="__reactListeners$"+Ao,Ub="__reactHandles$"+Ao;function es(t){var e=t[xi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$i]||n[xi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=j0(t);t!==null;){if(n=t[xi])return n;t=j0(t)}return e}t=n,n=t.parentNode}return null}function Qa(t){return t=t[xi]||t[$i],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function gu(t){return t[Da]||null}var kd=[],Gs=-1;function Ir(t){return{current:t}}function gt(t){0>Gs||(t.current=kd[Gs],kd[Gs]=null,Gs--)}function ht(t,e){Gs++,kd[Gs]=t.current,t.current=e}var Cr={},sn=Ir(Cr),yn=Ir(!1),fs=Cr;function fo(t,e){var n=t.type.contextTypes;if(!n)return Cr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Sn(t){return t=t.childContextTypes,t!=null}function Bc(){gt(yn),gt(sn)}function X0(t,e,n){if(sn.current!==Cr)throw Error(ie(168));ht(sn,e),ht(yn,n)}function ay(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,_E(t)||"Unknown",r));return wt({},n,i)}function zc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Cr,fs=sn.current,ht(sn,t),ht(yn,yn.current),!0}function $0(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=ay(t,e,fs),i.__reactInternalMemoizedMergedChildContext=t,gt(yn),gt(sn),ht(sn,t)):gt(yn),ht(yn,n)}var ki=null,xu=!1,tf=!1;function ly(t){ki===null?ki=[t]:ki.push(t)}function Fb(t){xu=!0,ly(t)}function Nr(){if(!tf&&ki!==null){tf=!0;var t=0,e=ot;try{var n=ki;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ki=null,xu=!1}catch(r){throw ki!==null&&(ki=ki.slice(t+1)),I_(Pp,Nr),r}finally{ot=e,tf=!1}}return null}var Ws=[],js=0,Vc=null,Hc=0,Gn=[],Wn=0,ds=null,zi=1,Vi="";function $r(t,e){Ws[js++]=Hc,Ws[js++]=Vc,Vc=t,Hc=e}function cy(t,e,n){Gn[Wn++]=zi,Gn[Wn++]=Vi,Gn[Wn++]=ds,ds=t;var i=zi;t=Vi;var r=32-li(i)-1;i&=~(1<<r),n+=1;var s=32-li(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,zi=1<<32-li(e)+r|n<<r|i,Vi=s+t}else zi=1<<s|n<<r|i,Vi=t}function Bp(t){t.return!==null&&($r(t,1),cy(t,1,0))}function zp(t){for(;t===Vc;)Vc=Ws[--js],Ws[js]=null,Hc=Ws[--js],Ws[js]=null;for(;t===ds;)ds=Gn[--Wn],Gn[Wn]=null,Vi=Gn[--Wn],Gn[Wn]=null,zi=Gn[--Wn],Gn[Wn]=null}var In=null,Dn=null,yt=!1,si=null;function uy(t,e){var n=jn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Y0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,In=t,Dn=Sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,In=t,Dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ds!==null?{id:zi,overflow:Vi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,In=t,Dn=null,!0):!1;default:return!1}}function Bd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zd(t){if(yt){var e=Dn;if(e){var n=e;if(!Y0(t,e)){if(Bd(t))throw Error(ie(418));e=Sr(n.nextSibling);var i=In;e&&Y0(t,e)?uy(i,n):(t.flags=t.flags&-4097|2,yt=!1,In=t)}}else{if(Bd(t))throw Error(ie(418));t.flags=t.flags&-4097|2,yt=!1,In=t}}}function q0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function Ml(t){if(t!==In)return!1;if(!yt)return q0(t),yt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ud(t.type,t.memoizedProps)),e&&(e=Dn)){if(Bd(t))throw fy(),Error(ie(418));for(;e;)uy(t,e),e=Sr(e.nextSibling)}if(q0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Dn=Sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Dn=null}}else Dn=In?Sr(t.stateNode.nextSibling):null;return!0}function fy(){for(var t=Dn;t;)t=Sr(t.nextSibling)}function ho(){Dn=In=null,yt=!1}function Vp(t){si===null?si=[t]:si.push(t)}var Ob=Ji.ReactCurrentBatchConfig;function Vo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function El(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function K0(t){var e=t._init;return e(t._payload)}function dy(t){function e(h,m){if(t){var _=h.deletions;_===null?(h.deletions=[m],h.flags|=16):_.push(m)}}function n(h,m){if(!t)return null;for(;m!==null;)e(h,m),m=m.sibling;return null}function i(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function r(h,m){return h=Tr(h,m),h.index=0,h.sibling=null,h}function s(h,m,_){return h.index=_,t?(_=h.alternate,_!==null?(_=_.index,_<m?(h.flags|=2,m):_):(h.flags|=2,m)):(h.flags|=1048576,m)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,m,_,M){return m===null||m.tag!==6?(m=cf(_,h.mode,M),m.return=h,m):(m=r(m,_),m.return=h,m)}function l(h,m,_,M){var b=_.type;return b===ks?u(h,m,_.props.children,M,_.key):m!==null&&(m.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ur&&K0(b)===m.type)?(M=r(m,_.props),M.ref=Vo(h,m,_),M.return=h,M):(M=vc(_.type,_.key,_.props,null,h.mode,M),M.ref=Vo(h,m,_),M.return=h,M)}function c(h,m,_,M){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=uf(_,h.mode,M),m.return=h,m):(m=r(m,_.children||[]),m.return=h,m)}function u(h,m,_,M,b){return m===null||m.tag!==7?(m=as(_,h.mode,M,b),m.return=h,m):(m=r(m,_),m.return=h,m)}function f(h,m,_){if(typeof m=="string"&&m!==""||typeof m=="number")return m=cf(""+m,h.mode,_),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case dl:return _=vc(m.type,m.key,m.props,null,h.mode,_),_.ref=Vo(h,null,m),_.return=h,_;case Os:return m=uf(m,h.mode,_),m.return=h,m;case ur:var M=m._init;return f(h,M(m._payload),_)}if(na(m)||Fo(m))return m=as(m,h.mode,_,null),m.return=h,m;El(h,m)}return null}function d(h,m,_,M){var b=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return b!==null?null:a(h,m,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case dl:return _.key===b?l(h,m,_,M):null;case Os:return _.key===b?c(h,m,_,M):null;case ur:return b=_._init,d(h,m,b(_._payload),M)}if(na(_)||Fo(_))return b!==null?null:u(h,m,_,M,null);El(h,_)}return null}function p(h,m,_,M,b){if(typeof M=="string"&&M!==""||typeof M=="number")return h=h.get(_)||null,a(m,h,""+M,b);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case dl:return h=h.get(M.key===null?_:M.key)||null,l(m,h,M,b);case Os:return h=h.get(M.key===null?_:M.key)||null,c(m,h,M,b);case ur:var S=M._init;return p(h,m,_,S(M._payload),b)}if(na(M)||Fo(M))return h=h.get(_)||null,u(m,h,M,b,null);El(m,M)}return null}function x(h,m,_,M){for(var b=null,S=null,A=m,R=m=0,T=null;A!==null&&R<_.length;R++){A.index>R?(T=A,A=null):T=A.sibling;var E=d(h,A,_[R],M);if(E===null){A===null&&(A=T);break}t&&A&&E.alternate===null&&e(h,A),m=s(E,m,R),S===null?b=E:S.sibling=E,S=E,A=T}if(R===_.length)return n(h,A),yt&&$r(h,R),b;if(A===null){for(;R<_.length;R++)A=f(h,_[R],M),A!==null&&(m=s(A,m,R),S===null?b=A:S.sibling=A,S=A);return yt&&$r(h,R),b}for(A=i(h,A);R<_.length;R++)T=p(A,h,R,_[R],M),T!==null&&(t&&T.alternate!==null&&A.delete(T.key===null?R:T.key),m=s(T,m,R),S===null?b=T:S.sibling=T,S=T);return t&&A.forEach(function(D){return e(h,D)}),yt&&$r(h,R),b}function y(h,m,_,M){var b=Fo(_);if(typeof b!="function")throw Error(ie(150));if(_=b.call(_),_==null)throw Error(ie(151));for(var S=b=null,A=m,R=m=0,T=null,E=_.next();A!==null&&!E.done;R++,E=_.next()){A.index>R?(T=A,A=null):T=A.sibling;var D=d(h,A,E.value,M);if(D===null){A===null&&(A=T);break}t&&A&&D.alternate===null&&e(h,A),m=s(D,m,R),S===null?b=D:S.sibling=D,S=D,A=T}if(E.done)return n(h,A),yt&&$r(h,R),b;if(A===null){for(;!E.done;R++,E=_.next())E=f(h,E.value,M),E!==null&&(m=s(E,m,R),S===null?b=E:S.sibling=E,S=E);return yt&&$r(h,R),b}for(A=i(h,A);!E.done;R++,E=_.next())E=p(A,h,R,E.value,M),E!==null&&(t&&E.alternate!==null&&A.delete(E.key===null?R:E.key),m=s(E,m,R),S===null?b=E:S.sibling=E,S=E);return t&&A.forEach(function(k){return e(h,k)}),yt&&$r(h,R),b}function g(h,m,_,M){if(typeof _=="object"&&_!==null&&_.type===ks&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case dl:e:{for(var b=_.key,S=m;S!==null;){if(S.key===b){if(b=_.type,b===ks){if(S.tag===7){n(h,S.sibling),m=r(S,_.props.children),m.return=h,h=m;break e}}else if(S.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ur&&K0(b)===S.type){n(h,S.sibling),m=r(S,_.props),m.ref=Vo(h,S,_),m.return=h,h=m;break e}n(h,S);break}else e(h,S);S=S.sibling}_.type===ks?(m=as(_.props.children,h.mode,M,_.key),m.return=h,h=m):(M=vc(_.type,_.key,_.props,null,h.mode,M),M.ref=Vo(h,m,_),M.return=h,h=M)}return o(h);case Os:e:{for(S=_.key;m!==null;){if(m.key===S)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(h,m.sibling),m=r(m,_.children||[]),m.return=h,h=m;break e}else{n(h,m);break}else e(h,m);m=m.sibling}m=uf(_,h.mode,M),m.return=h,h=m}return o(h);case ur:return S=_._init,g(h,m,S(_._payload),M)}if(na(_))return x(h,m,_,M);if(Fo(_))return y(h,m,_,M);El(h,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,m!==null&&m.tag===6?(n(h,m.sibling),m=r(m,_),m.return=h,h=m):(n(h,m),m=cf(_,h.mode,M),m.return=h,h=m),o(h)):n(h,m)}return g}var po=dy(!0),hy=dy(!1),Gc=Ir(null),Wc=null,Xs=null,Hp=null;function Gp(){Hp=Xs=Wc=null}function Wp(t){var e=Gc.current;gt(Gc),t._currentValue=e}function Vd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function so(t,e){Wc=t,Hp=Xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vn=!0),t.firstContext=null)}function qn(t){var e=t._currentValue;if(Hp!==t)if(t={context:t,memoizedValue:e,next:null},Xs===null){if(Wc===null)throw Error(ie(308));Xs=t,Wc.dependencies={lanes:0,firstContext:t}}else Xs=Xs.next=t;return e}var ts=null;function jp(t){ts===null?ts=[t]:ts.push(t)}function py(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,jp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Yi(t,i)}function Yi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var fr=!1;function Xp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function my(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Hi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Mr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,nt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Yi(t,n)}return r=i.interleaved,r===null?(e.next=e,jp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Yi(t,n)}function dc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Dp(t,n)}}function Z0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function jc(t,e,n,i){var r=t.updateQueue;fr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,y=a;switch(d=e,p=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){f=x.call(p,f,d);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,d=typeof x=="function"?x.call(p,f,d):x,d==null)break e;f=wt({},f,d);break e;case 2:fr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ps|=o,t.lanes=o,t.memoizedState=f}}function Q0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Ja={},Mi=Ir(Ja),La=Ir(Ja),Ia=Ir(Ja);function ns(t){if(t===Ja)throw Error(ie(174));return t}function $p(t,e){switch(ht(Ia,e),ht(La,t),ht(Mi,Ja),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sd(e,t)}gt(Mi),ht(Mi,e)}function mo(){gt(Mi),gt(La),gt(Ia)}function gy(t){ns(Ia.current);var e=ns(Mi.current),n=Sd(e,t.type);e!==n&&(ht(La,t),ht(Mi,n))}function Yp(t){La.current===t&&(gt(Mi),gt(La))}var Et=Ir(0);function Xc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nf=[];function qp(){for(var t=0;t<nf.length;t++)nf[t]._workInProgressVersionPrimary=null;nf.length=0}var hc=Ji.ReactCurrentDispatcher,rf=Ji.ReactCurrentBatchConfig,hs=0,Tt=null,zt=null,Xt=null,$c=!1,da=!1,Na=0,kb=0;function Zt(){throw Error(ie(321))}function Kp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!di(t[n],e[n]))return!1;return!0}function Zp(t,e,n,i,r,s){if(hs=s,Tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,hc.current=t===null||t.memoizedState===null?Hb:Gb,t=n(i,r),da){s=0;do{if(da=!1,Na=0,25<=s)throw Error(ie(301));s+=1,Xt=zt=null,e.updateQueue=null,hc.current=Wb,t=n(i,r)}while(da)}if(hc.current=Yc,e=zt!==null&&zt.next!==null,hs=0,Xt=zt=Tt=null,$c=!1,e)throw Error(ie(300));return t}function Qp(){var t=Na!==0;return Na=0,t}function mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?Tt.memoizedState=Xt=t:Xt=Xt.next=t,Xt}function Kn(){if(zt===null){var t=Tt.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var e=Xt===null?Tt.memoizedState:Xt.next;if(e!==null)Xt=e,zt=t;else{if(t===null)throw Error(ie(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},Xt===null?Tt.memoizedState=Xt=t:Xt=Xt.next=t}return Xt}function Ua(t,e){return typeof e=="function"?e(t):e}function sf(t){var e=Kn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=zt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((hs&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Tt.lanes|=u,ps|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,di(i,e.memoizedState)||(vn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Tt.lanes|=s,ps|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function of(t){var e=Kn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);di(s,e.memoizedState)||(vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function xy(){}function vy(t,e){var n=Tt,i=Kn(),r=e(),s=!di(i.memoizedState,r);if(s&&(i.memoizedState=r,vn=!0),i=i.queue,Jp(Sy.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Xt!==null&&Xt.memoizedState.tag&1){if(n.flags|=2048,Fa(9,yy.bind(null,n,i,r,e),void 0,null),$t===null)throw Error(ie(349));hs&30||_y(n,e,r)}return r}function _y(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function yy(t,e,n,i){e.value=n,e.getSnapshot=i,My(e)&&Ey(t)}function Sy(t,e,n){return n(function(){My(e)&&Ey(t)})}function My(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!di(t,n)}catch{return!0}}function Ey(t){var e=Yi(t,1);e!==null&&ci(e,t,1,-1)}function J0(t){var e=mi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:t},e.queue=t,t=t.dispatch=Vb.bind(null,Tt,t),[e.memoizedState,t]}function Fa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function by(){return Kn().memoizedState}function pc(t,e,n,i){var r=mi();Tt.flags|=t,r.memoizedState=Fa(1|e,n,void 0,i===void 0?null:i)}function vu(t,e,n,i){var r=Kn();i=i===void 0?null:i;var s=void 0;if(zt!==null){var o=zt.memoizedState;if(s=o.destroy,i!==null&&Kp(i,o.deps)){r.memoizedState=Fa(e,n,s,i);return}}Tt.flags|=t,r.memoizedState=Fa(1|e,n,s,i)}function eg(t,e){return pc(8390656,8,t,e)}function Jp(t,e){return vu(2048,8,t,e)}function Ty(t,e){return vu(4,2,t,e)}function wy(t,e){return vu(4,4,t,e)}function Ay(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Cy(t,e,n){return n=n!=null?n.concat([t]):null,vu(4,4,Ay.bind(null,e,t),n)}function em(){}function Ry(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Py(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Dy(t,e,n){return hs&21?(di(n,e)||(n=F_(),Tt.lanes|=n,ps|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vn=!0),t.memoizedState=n)}function Bb(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=rf.transition;rf.transition={};try{t(!1),e()}finally{ot=n,rf.transition=i}}function Ly(){return Kn().memoizedState}function zb(t,e,n){var i=br(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Iy(t))Ny(e,n);else if(n=py(t,e,n,i),n!==null){var r=un();ci(n,t,i,r),Uy(n,e,i)}}function Vb(t,e,n){var i=br(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Iy(t))Ny(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,di(a,o)){var l=e.interleaved;l===null?(r.next=r,jp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=py(t,e,r,i),n!==null&&(r=un(),ci(n,t,i,r),Uy(n,e,i))}}function Iy(t){var e=t.alternate;return t===Tt||e!==null&&e===Tt}function Ny(t,e){da=$c=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Uy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Dp(t,n)}}var Yc={readContext:qn,useCallback:Zt,useContext:Zt,useEffect:Zt,useImperativeHandle:Zt,useInsertionEffect:Zt,useLayoutEffect:Zt,useMemo:Zt,useReducer:Zt,useRef:Zt,useState:Zt,useDebugValue:Zt,useDeferredValue:Zt,useTransition:Zt,useMutableSource:Zt,useSyncExternalStore:Zt,useId:Zt,unstable_isNewReconciler:!1},Hb={readContext:qn,useCallback:function(t,e){return mi().memoizedState=[t,e===void 0?null:e],t},useContext:qn,useEffect:eg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,pc(4194308,4,Ay.bind(null,e,t),n)},useLayoutEffect:function(t,e){return pc(4194308,4,t,e)},useInsertionEffect:function(t,e){return pc(4,2,t,e)},useMemo:function(t,e){var n=mi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=mi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=zb.bind(null,Tt,t),[i.memoizedState,t]},useRef:function(t){var e=mi();return t={current:t},e.memoizedState=t},useState:J0,useDebugValue:em,useDeferredValue:function(t){return mi().memoizedState=t},useTransition:function(){var t=J0(!1),e=t[0];return t=Bb.bind(null,t[1]),mi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Tt,r=mi();if(yt){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),$t===null)throw Error(ie(349));hs&30||_y(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,eg(Sy.bind(null,i,s,t),[t]),i.flags|=2048,Fa(9,yy.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=mi(),e=$t.identifierPrefix;if(yt){var n=Vi,i=zi;n=(i&~(1<<32-li(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Na++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=kb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Gb={readContext:qn,useCallback:Ry,useContext:qn,useEffect:Jp,useImperativeHandle:Cy,useInsertionEffect:Ty,useLayoutEffect:wy,useMemo:Py,useReducer:sf,useRef:by,useState:function(){return sf(Ua)},useDebugValue:em,useDeferredValue:function(t){var e=Kn();return Dy(e,zt.memoizedState,t)},useTransition:function(){var t=sf(Ua)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:xy,useSyncExternalStore:vy,useId:Ly,unstable_isNewReconciler:!1},Wb={readContext:qn,useCallback:Ry,useContext:qn,useEffect:Jp,useImperativeHandle:Cy,useInsertionEffect:Ty,useLayoutEffect:wy,useMemo:Py,useReducer:of,useRef:by,useState:function(){return of(Ua)},useDebugValue:em,useDeferredValue:function(t){var e=Kn();return zt===null?e.memoizedState=t:Dy(e,zt.memoizedState,t)},useTransition:function(){var t=of(Ua)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:xy,useSyncExternalStore:vy,useId:Ly,unstable_isNewReconciler:!1};function ii(t,e){if(t&&t.defaultProps){e=wt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Hd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:wt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _u={isMounted:function(t){return(t=t._reactInternals)?vs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=un(),r=br(t),s=Hi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Mr(t,s,r),e!==null&&(ci(e,t,r,i),dc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=un(),r=br(t),s=Hi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Mr(t,s,r),e!==null&&(ci(e,t,r,i),dc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=un(),i=br(t),r=Hi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Mr(t,r,i),e!==null&&(ci(e,t,i,n),dc(e,t,i))}};function tg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ca(n,i)||!Ca(r,s):!0}function Fy(t,e,n){var i=!1,r=Cr,s=e.contextType;return typeof s=="object"&&s!==null?s=qn(s):(r=Sn(e)?fs:sn.current,i=e.contextTypes,s=(i=i!=null)?fo(t,r):Cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_u,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function ng(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&_u.enqueueReplaceState(e,e.state,null)}function Gd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Xp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=qn(s):(s=Sn(e)?fs:sn.current,r.context=fo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&_u.enqueueReplaceState(r,r.state,null),jc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function go(t,e){try{var n="",i=e;do n+=vE(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function af(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Wd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var jb=typeof WeakMap=="function"?WeakMap:Map;function Oy(t,e,n){n=Hi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Kc||(Kc=!0,eh=i),Wd(t,e)},n}function ky(t,e,n){n=Hi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Wd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Wd(t,e),typeof i!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ig(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new jb;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=sT.bind(null,t,e,n),e.then(t,t))}function rg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function sg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Hi(-1,1),e.tag=2,Mr(n,e,1))),n.lanes|=1),t)}var Xb=Ji.ReactCurrentOwner,vn=!1;function ln(t,e,n,i){e.child=t===null?hy(e,null,n,i):po(e,t.child,n,i)}function og(t,e,n,i,r){n=n.render;var s=e.ref;return so(e,r),i=Zp(t,e,n,i,s,r),n=Qp(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,qi(t,e,r)):(yt&&n&&Bp(e),e.flags|=1,ln(t,e,i,r),e.child)}function ag(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!lm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,By(t,e,s,i,r)):(t=vc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ca,n(o,i)&&t.ref===e.ref)return qi(t,e,r)}return e.flags|=1,t=Tr(s,i),t.ref=e.ref,t.return=e,e.child=t}function By(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ca(s,i)&&t.ref===e.ref)if(vn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(vn=!0);else return e.lanes=t.lanes,qi(t,e,r)}return jd(t,e,n,i,r)}function zy(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(Ys,Pn),Pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(Ys,Pn),Pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht(Ys,Pn),Pn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht(Ys,Pn),Pn|=i;return ln(t,e,r,n),e.child}function Vy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function jd(t,e,n,i,r){var s=Sn(n)?fs:sn.current;return s=fo(e,s),so(e,r),n=Zp(t,e,n,i,s,r),i=Qp(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,qi(t,e,r)):(yt&&i&&Bp(e),e.flags|=1,ln(t,e,n,r),e.child)}function lg(t,e,n,i,r){if(Sn(n)){var s=!0;zc(e)}else s=!1;if(so(e,r),e.stateNode===null)mc(t,e),Fy(e,n,i),Gd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=qn(c):(c=Sn(n)?fs:sn.current,c=fo(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&ng(e,o,i,c),fr=!1;var d=e.memoizedState;o.state=d,jc(e,i,o,r),l=e.memoizedState,a!==i||d!==l||yn.current||fr?(typeof u=="function"&&(Hd(e,n,u,i),l=e.memoizedState),(a=fr||tg(e,n,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,my(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ii(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=qn(l):(l=Sn(n)?fs:sn.current,l=fo(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&ng(e,o,i,l),fr=!1,d=e.memoizedState,o.state=d,jc(e,i,o,r);var x=e.memoizedState;a!==f||d!==x||yn.current||fr?(typeof p=="function"&&(Hd(e,n,p,i),x=e.memoizedState),(c=fr||tg(e,n,c,i,d,x,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Xd(t,e,n,i,s,r)}function Xd(t,e,n,i,r,s){Vy(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&$0(e,n,!1),qi(t,e,s);i=e.stateNode,Xb.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=po(e,t.child,null,s),e.child=po(e,null,a,s)):ln(t,e,a,s),e.memoizedState=i.state,r&&$0(e,n,!0),e.child}function Hy(t){var e=t.stateNode;e.pendingContext?X0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&X0(t,e.context,!1),$p(t,e.containerInfo)}function cg(t,e,n,i,r){return ho(),Vp(r),e.flags|=256,ln(t,e,n,i),e.child}var $d={dehydrated:null,treeContext:null,retryLane:0};function Yd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Gy(t,e,n){var i=e.pendingProps,r=Et.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(Et,r&1),t===null)return zd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Mu(o,i,0,null),t=as(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Yd(n),e.memoizedState=$d,t):tm(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return $b(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Tr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Tr(a,s):(s=as(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Yd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=$d,i}return s=t.child,t=s.sibling,i=Tr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function tm(t,e){return e=Mu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function bl(t,e,n,i){return i!==null&&Vp(i),po(e,t.child,null,n),t=tm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $b(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=af(Error(ie(422))),bl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Mu({mode:"visible",children:i.children},r,0,null),s=as(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&po(e,t.child,null,o),e.child.memoizedState=Yd(o),e.memoizedState=$d,s);if(!(e.mode&1))return bl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=af(s,i,void 0),bl(t,e,o,i)}if(a=(o&t.childLanes)!==0,vn||a){if(i=$t,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Yi(t,r),ci(i,t,r,-1))}return am(),i=af(Error(ie(421))),bl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=oT.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Dn=Sr(r.nextSibling),In=e,yt=!0,si=null,t!==null&&(Gn[Wn++]=zi,Gn[Wn++]=Vi,Gn[Wn++]=ds,zi=t.id,Vi=t.overflow,ds=e),e=tm(e,i.children),e.flags|=4096,e)}function ug(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Vd(t.return,e,n)}function lf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Wy(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ln(t,e,i.children,n),i=Et.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ug(t,n,e);else if(t.tag===19)ug(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(Et,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Xc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),lf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Xc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}lf(e,!0,n,null,s);break;case"together":lf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function mc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function qi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ps|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Yb(t,e,n){switch(e.tag){case 3:Hy(e),ho();break;case 5:gy(e);break;case 1:Sn(e.type)&&zc(e);break;case 4:$p(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(Gc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(Et,Et.current&1),e.flags|=128,null):n&e.child.childLanes?Gy(t,e,n):(ht(Et,Et.current&1),t=qi(t,e,n),t!==null?t.sibling:null);ht(Et,Et.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Wy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(Et,Et.current),i)break;return null;case 22:case 23:return e.lanes=0,zy(t,e,n)}return qi(t,e,n)}var jy,qd,Xy,$y;jy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qd=function(){};Xy=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ns(Mi.current);var s=null;switch(n){case"input":r=xd(t,r),i=xd(t,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=yd(t,r),i=yd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=kc)}Md(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Sa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Sa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&mt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};$y=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ho(t,e){if(!yt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function qb(t,e,n){var i=e.pendingProps;switch(zp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(e),null;case 1:return Sn(e.type)&&Bc(),Qt(e),null;case 3:return i=e.stateNode,mo(),gt(yn),gt(sn),qp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ml(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,si!==null&&(ih(si),si=null))),qd(t,e),Qt(e),null;case 5:Yp(e);var r=ns(Ia.current);if(n=e.type,t!==null&&e.stateNode!=null)Xy(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Qt(e),null}if(t=ns(Mi.current),Ml(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[xi]=e,i[Da]=s,t=(e.mode&1)!==0,n){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(r=0;r<ra.length;r++)mt(ra[r],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":_0(i,s),mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},mt("invalid",i);break;case"textarea":S0(i,s),mt("invalid",i)}Md(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Sl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Sl(i.textContent,a,t),r=["children",""+a]):Sa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&mt("scroll",i)}switch(n){case"input":hl(i),y0(i,s,!0);break;case"textarea":hl(i),M0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=kc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=S_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[xi]=e,t[Da]=i,jy(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ed(n,i),n){case"dialog":mt("cancel",t),mt("close",t),r=i;break;case"iframe":case"object":case"embed":mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ra.length;r++)mt(ra[r],t);r=i;break;case"source":mt("error",t),r=i;break;case"img":case"image":case"link":mt("error",t),mt("load",t),r=i;break;case"details":mt("toggle",t),r=i;break;case"input":_0(t,i),r=xd(t,i),mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),mt("invalid",t);break;case"textarea":S0(t,i),r=yd(t,i),mt("invalid",t);break;default:r=i}Md(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?b_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&M_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ma(t,l):typeof l=="number"&&Ma(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Sa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&mt("scroll",t):l!=null&&Tp(t,s,l,o))}switch(n){case"input":hl(t),y0(t,i,!1);break;case"textarea":hl(t),M0(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ar(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?to(t,!!i.multiple,s,!1):i.defaultValue!=null&&to(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=kc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qt(e),null;case 6:if(t&&e.stateNode!=null)$y(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=ns(Ia.current),ns(Mi.current),Ml(e)){if(i=e.stateNode,n=e.memoizedProps,i[xi]=e,(s=i.nodeValue!==n)&&(t=In,t!==null))switch(t.tag){case 3:Sl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Sl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[xi]=e,e.stateNode=i}return Qt(e),null;case 13:if(gt(Et),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(yt&&Dn!==null&&e.mode&1&&!(e.flags&128))fy(),ho(),e.flags|=98560,s=!1;else if(s=Ml(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[xi]=e}else ho(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qt(e),s=!1}else si!==null&&(ih(si),si=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Et.current&1?Vt===0&&(Vt=3):am())),e.updateQueue!==null&&(e.flags|=4),Qt(e),null);case 4:return mo(),qd(t,e),t===null&&Ra(e.stateNode.containerInfo),Qt(e),null;case 10:return Wp(e.type._context),Qt(e),null;case 17:return Sn(e.type)&&Bc(),Qt(e),null;case 19:if(gt(Et),s=e.memoizedState,s===null)return Qt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ho(s,!1);else{if(Vt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Xc(t),o!==null){for(e.flags|=128,Ho(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(Et,Et.current&1|2),e.child}t=t.sibling}s.tail!==null&&It()>xo&&(e.flags|=128,i=!0,Ho(s,!1),e.lanes=4194304)}else{if(!i)if(t=Xc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ho(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!yt)return Qt(e),null}else 2*It()-s.renderingStartTime>xo&&n!==1073741824&&(e.flags|=128,i=!0,Ho(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=It(),e.sibling=null,n=Et.current,ht(Et,i?n&1|2:n&1),e):(Qt(e),null);case 22:case 23:return om(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Pn&1073741824&&(Qt(e),e.subtreeFlags&6&&(e.flags|=8192)):Qt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function Kb(t,e){switch(zp(e),e.tag){case 1:return Sn(e.type)&&Bc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return mo(),gt(yn),gt(sn),qp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Yp(e),null;case 13:if(gt(Et),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));ho()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gt(Et),null;case 4:return mo(),null;case 10:return Wp(e.type._context),null;case 22:case 23:return om(),null;case 24:return null;default:return null}}var Tl=!1,tn=!1,Zb=typeof WeakSet=="function"?WeakSet:Set,xe=null;function $s(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Pt(t,e,i)}else n.current=null}function Kd(t,e,n){try{n()}catch(i){Pt(t,e,i)}}var fg=!1;function Qb(t,e){if(Id=Uc,t=Q_(),kp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nd={focusedElem:t,selectionRange:n},Uc=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,g=x.memoizedState,h=e.stateNode,m=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:ii(e.type,y),g);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(M){Pt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return x=fg,fg=!1,x}function ha(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Kd(e,n,s)}r=r.next}while(r!==i)}}function yu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Zd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Yy(t){var e=t.alternate;e!==null&&(t.alternate=null,Yy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xi],delete e[Da],delete e[Od],delete e[Nb],delete e[Ub])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function qy(t){return t.tag===5||t.tag===3||t.tag===4}function dg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||qy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=kc));else if(i!==4&&(t=t.child,t!==null))for(Qd(t,e,n),t=t.sibling;t!==null;)Qd(t,e,n),t=t.sibling}function Jd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Jd(t,e,n),t=t.sibling;t!==null;)Jd(t,e,n),t=t.sibling}var Yt=null,ri=!1;function er(t,e,n){for(n=n.child;n!==null;)Ky(t,e,n),n=n.sibling}function Ky(t,e,n){if(Si&&typeof Si.onCommitFiberUnmount=="function")try{Si.onCommitFiberUnmount(du,n)}catch{}switch(n.tag){case 5:tn||$s(n,e);case 6:var i=Yt,r=ri;Yt=null,er(t,e,n),Yt=i,ri=r,Yt!==null&&(ri?(t=Yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Yt.removeChild(n.stateNode));break;case 18:Yt!==null&&(ri?(t=Yt,n=n.stateNode,t.nodeType===8?ef(t.parentNode,n):t.nodeType===1&&ef(t,n),wa(t)):ef(Yt,n.stateNode));break;case 4:i=Yt,r=ri,Yt=n.stateNode.containerInfo,ri=!0,er(t,e,n),Yt=i,ri=r;break;case 0:case 11:case 14:case 15:if(!tn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Kd(n,e,o),r=r.next}while(r!==i)}er(t,e,n);break;case 1:if(!tn&&($s(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Pt(n,e,a)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(tn=(i=tn)||n.memoizedState!==null,er(t,e,n),tn=i):er(t,e,n);break;default:er(t,e,n)}}function hg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Zb),e.forEach(function(i){var r=aT.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Qn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Yt=a.stateNode,ri=!1;break e;case 3:Yt=a.stateNode.containerInfo,ri=!0;break e;case 4:Yt=a.stateNode.containerInfo,ri=!0;break e}a=a.return}if(Yt===null)throw Error(ie(160));Ky(s,o,r),Yt=null,ri=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Pt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Zy(e,t),e=e.sibling}function Zy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qn(e,t),pi(t),i&4){try{ha(3,t,t.return),yu(3,t)}catch(y){Pt(t,t.return,y)}try{ha(5,t,t.return)}catch(y){Pt(t,t.return,y)}}break;case 1:Qn(e,t),pi(t),i&512&&n!==null&&$s(n,n.return);break;case 5:if(Qn(e,t),pi(t),i&512&&n!==null&&$s(n,n.return),t.flags&32){var r=t.stateNode;try{Ma(r,"")}catch(y){Pt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&__(r,s),Ed(a,o);var c=Ed(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?b_(r,f):u==="dangerouslySetInnerHTML"?M_(r,f):u==="children"?Ma(r,f):Tp(r,u,f,c)}switch(a){case"input":vd(r,s);break;case"textarea":y_(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?to(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?to(r,!!s.multiple,s.defaultValue,!0):to(r,!!s.multiple,s.multiple?[]:"",!1))}r[Da]=s}catch(y){Pt(t,t.return,y)}}break;case 6:if(Qn(e,t),pi(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Pt(t,t.return,y)}}break;case 3:if(Qn(e,t),pi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{wa(e.containerInfo)}catch(y){Pt(t,t.return,y)}break;case 4:Qn(e,t),pi(t);break;case 13:Qn(e,t),pi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(rm=It())),i&4&&hg(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(tn=(c=tn)||u,Qn(e,t),tn=c):Qn(e,t),pi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(xe=t,u=t.child;u!==null;){for(f=xe=u;xe!==null;){switch(d=xe,p=d.child,d.tag){case 0:case 11:case 14:case 15:ha(4,d,d.return);break;case 1:$s(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(y){Pt(i,n,y)}}break;case 5:$s(d,d.return);break;case 22:if(d.memoizedState!==null){mg(f);continue}}p!==null?(p.return=d,xe=p):mg(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=E_("display",o))}catch(y){Pt(t,t.return,y)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){Pt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Qn(e,t),pi(t),i&4&&hg(t);break;case 21:break;default:Qn(e,t),pi(t)}}function pi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(qy(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ma(r,""),i.flags&=-33);var s=dg(t);Jd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=dg(t);Qd(t,a,o);break;default:throw Error(ie(161))}}catch(l){Pt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Jb(t,e,n){xe=t,Qy(t)}function Qy(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Tl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||tn;a=Tl;var c=tn;if(Tl=o,(tn=l)&&!c)for(xe=r;xe!==null;)o=xe,l=o.child,o.tag===22&&o.memoizedState!==null?gg(r):l!==null?(l.return=o,xe=l):gg(r);for(;s!==null;)xe=s,Qy(s),s=s.sibling;xe=r,Tl=a,tn=c}pg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,xe=s):pg(t)}}function pg(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tn||yu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!tn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ii(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Q0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Q0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&wa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}tn||e.flags&512&&Zd(e)}catch(d){Pt(e,e.return,d)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function mg(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function gg(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yu(4,e)}catch(l){Pt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Pt(e,r,l)}}var s=e.return;try{Zd(e)}catch(l){Pt(e,s,l)}break;case 5:var o=e.return;try{Zd(e)}catch(l){Pt(e,o,l)}}}catch(l){Pt(e,e.return,l)}if(e===t){xe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,xe=a;break}xe=e.return}}var eT=Math.ceil,qc=Ji.ReactCurrentDispatcher,nm=Ji.ReactCurrentOwner,Yn=Ji.ReactCurrentBatchConfig,nt=0,$t=null,Ot=null,qt=0,Pn=0,Ys=Ir(0),Vt=0,Oa=null,ps=0,Su=0,im=0,pa=null,xn=null,rm=0,xo=1/0,Oi=null,Kc=!1,eh=null,Er=null,wl=!1,gr=null,Zc=0,ma=0,th=null,gc=-1,xc=0;function un(){return nt&6?It():gc!==-1?gc:gc=It()}function br(t){return t.mode&1?nt&2&&qt!==0?qt&-qt:Ob.transition!==null?(xc===0&&(xc=F_()),xc):(t=ot,t!==0||(t=window.event,t=t===void 0?16:G_(t.type)),t):1}function ci(t,e,n,i){if(50<ma)throw ma=0,th=null,Error(ie(185));Ka(t,n,i),(!(nt&2)||t!==$t)&&(t===$t&&(!(nt&2)&&(Su|=n),Vt===4&&hr(t,qt)),Mn(t,i),n===1&&nt===0&&!(e.mode&1)&&(xo=It()+500,xu&&Nr()))}function Mn(t,e){var n=t.callbackNode;OE(t,e);var i=Nc(t,t===$t?qt:0);if(i===0)n!==null&&T0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&T0(n),e===1)t.tag===0?Fb(xg.bind(null,t)):ly(xg.bind(null,t)),Lb(function(){!(nt&6)&&Nr()}),n=null;else{switch(O_(i)){case 1:n=Pp;break;case 4:n=N_;break;case 16:n=Ic;break;case 536870912:n=U_;break;default:n=Ic}n=oS(n,Jy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Jy(t,e){if(gc=-1,xc=0,nt&6)throw Error(ie(327));var n=t.callbackNode;if(oo()&&t.callbackNode!==n)return null;var i=Nc(t,t===$t?qt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Qc(t,i);else{e=i;var r=nt;nt|=2;var s=tS();($t!==t||qt!==e)&&(Oi=null,xo=It()+500,os(t,e));do try{iT();break}catch(a){eS(t,a)}while(!0);Gp(),qc.current=s,nt=r,Ot!==null?e=0:($t=null,qt=0,e=Vt)}if(e!==0){if(e===2&&(r=Cd(t),r!==0&&(i=r,e=nh(t,r))),e===1)throw n=Oa,os(t,0),hr(t,i),Mn(t,It()),n;if(e===6)hr(t,i);else{if(r=t.current.alternate,!(i&30)&&!tT(r)&&(e=Qc(t,i),e===2&&(s=Cd(t),s!==0&&(i=s,e=nh(t,s))),e===1))throw n=Oa,os(t,0),hr(t,i),Mn(t,It()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:Yr(t,xn,Oi);break;case 3:if(hr(t,i),(i&130023424)===i&&(e=rm+500-It(),10<e)){if(Nc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){un(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Fd(Yr.bind(null,t,xn,Oi),e);break}Yr(t,xn,Oi);break;case 4:if(hr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-li(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=It()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*eT(i/1960))-i,10<i){t.timeoutHandle=Fd(Yr.bind(null,t,xn,Oi),i);break}Yr(t,xn,Oi);break;case 5:Yr(t,xn,Oi);break;default:throw Error(ie(329))}}}return Mn(t,It()),t.callbackNode===n?Jy.bind(null,t):null}function nh(t,e){var n=pa;return t.current.memoizedState.isDehydrated&&(os(t,e).flags|=256),t=Qc(t,e),t!==2&&(e=xn,xn=n,e!==null&&ih(e)),t}function ih(t){xn===null?xn=t:xn.push.apply(xn,t)}function tT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!di(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hr(t,e){for(e&=~im,e&=~Su,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-li(e),i=1<<n;t[n]=-1,e&=~i}}function xg(t){if(nt&6)throw Error(ie(327));oo();var e=Nc(t,0);if(!(e&1))return Mn(t,It()),null;var n=Qc(t,e);if(t.tag!==0&&n===2){var i=Cd(t);i!==0&&(e=i,n=nh(t,i))}if(n===1)throw n=Oa,os(t,0),hr(t,e),Mn(t,It()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Yr(t,xn,Oi),Mn(t,It()),null}function sm(t,e){var n=nt;nt|=1;try{return t(e)}finally{nt=n,nt===0&&(xo=It()+500,xu&&Nr())}}function ms(t){gr!==null&&gr.tag===0&&!(nt&6)&&oo();var e=nt;nt|=1;var n=Yn.transition,i=ot;try{if(Yn.transition=null,ot=1,t)return t()}finally{ot=i,Yn.transition=n,nt=e,!(nt&6)&&Nr()}}function om(){Pn=Ys.current,gt(Ys)}function os(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Db(n)),Ot!==null)for(n=Ot.return;n!==null;){var i=n;switch(zp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Bc();break;case 3:mo(),gt(yn),gt(sn),qp();break;case 5:Yp(i);break;case 4:mo();break;case 13:gt(Et);break;case 19:gt(Et);break;case 10:Wp(i.type._context);break;case 22:case 23:om()}n=n.return}if($t=t,Ot=t=Tr(t.current,null),qt=Pn=e,Vt=0,Oa=null,im=Su=ps=0,xn=pa=null,ts!==null){for(e=0;e<ts.length;e++)if(n=ts[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}ts=null}return t}function eS(t,e){do{var n=Ot;try{if(Gp(),hc.current=Yc,$c){for(var i=Tt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}$c=!1}if(hs=0,Xt=zt=Tt=null,da=!1,Na=0,nm.current=null,n===null||n.return===null){Vt=1,Oa=e,Ot=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=qt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=rg(o);if(p!==null){p.flags&=-257,sg(p,o,a,s,e),p.mode&1&&ig(s,c,e),e=p,l=c;var x=e.updateQueue;if(x===null){var y=new Set;y.add(l),e.updateQueue=y}else x.add(l);break e}else{if(!(e&1)){ig(s,c,e),am();break e}l=Error(ie(426))}}else if(yt&&a.mode&1){var g=rg(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),sg(g,o,a,s,e),Vp(go(l,a));break e}}s=l=go(l,a),Vt!==4&&(Vt=2),pa===null?pa=[s]:pa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Oy(s,l,e);Z0(s,h);break e;case 1:a=l;var m=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Er===null||!Er.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=ky(s,a,e);Z0(s,M);break e}}s=s.return}while(s!==null)}iS(n)}catch(b){e=b,Ot===n&&n!==null&&(Ot=n=n.return);continue}break}while(!0)}function tS(){var t=qc.current;return qc.current=Yc,t===null?Yc:t}function am(){(Vt===0||Vt===3||Vt===2)&&(Vt=4),$t===null||!(ps&268435455)&&!(Su&268435455)||hr($t,qt)}function Qc(t,e){var n=nt;nt|=2;var i=tS();($t!==t||qt!==e)&&(Oi=null,os(t,e));do try{nT();break}catch(r){eS(t,r)}while(!0);if(Gp(),nt=n,qc.current=i,Ot!==null)throw Error(ie(261));return $t=null,qt=0,Vt}function nT(){for(;Ot!==null;)nS(Ot)}function iT(){for(;Ot!==null&&!CE();)nS(Ot)}function nS(t){var e=sS(t.alternate,t,Pn);t.memoizedProps=t.pendingProps,e===null?iS(t):Ot=e,nm.current=null}function iS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Kb(n,e),n!==null){n.flags&=32767,Ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Vt=6,Ot=null;return}}else if(n=qb(n,e,Pn),n!==null){Ot=n;return}if(e=e.sibling,e!==null){Ot=e;return}Ot=e=t}while(e!==null);Vt===0&&(Vt=5)}function Yr(t,e,n){var i=ot,r=Yn.transition;try{Yn.transition=null,ot=1,rT(t,e,n,i)}finally{Yn.transition=r,ot=i}return null}function rT(t,e,n,i){do oo();while(gr!==null);if(nt&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(kE(t,s),t===$t&&(Ot=$t=null,qt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wl||(wl=!0,oS(Ic,function(){return oo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Yn.transition,Yn.transition=null;var o=ot;ot=1;var a=nt;nt|=4,nm.current=null,Qb(t,n),Zy(n,t),bb(Nd),Uc=!!Id,Nd=Id=null,t.current=n,Jb(n),RE(),nt=a,ot=o,Yn.transition=s}else t.current=n;if(wl&&(wl=!1,gr=t,Zc=r),s=t.pendingLanes,s===0&&(Er=null),LE(n.stateNode),Mn(t,It()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Kc)throw Kc=!1,t=eh,eh=null,t;return Zc&1&&t.tag!==0&&oo(),s=t.pendingLanes,s&1?t===th?ma++:(ma=0,th=t):ma=0,Nr(),null}function oo(){if(gr!==null){var t=O_(Zc),e=Yn.transition,n=ot;try{if(Yn.transition=null,ot=16>t?16:t,gr===null)var i=!1;else{if(t=gr,gr=null,Zc=0,nt&6)throw Error(ie(331));var r=nt;for(nt|=4,xe=t.current;xe!==null;){var s=xe,o=s.child;if(xe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(xe=c;xe!==null;){var u=xe;switch(u.tag){case 0:case 11:case 15:ha(8,u,s)}var f=u.child;if(f!==null)f.return=u,xe=f;else for(;xe!==null;){u=xe;var d=u.sibling,p=u.return;if(Yy(u),u===c){xe=null;break}if(d!==null){d.return=p,xe=d;break}xe=p}}}var x=s.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}xe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,xe=o;else e:for(;xe!==null;){if(s=xe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ha(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,xe=h;break e}xe=s.return}}var m=t.current;for(xe=m;xe!==null;){o=xe;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,xe=_;else e:for(o=m;xe!==null;){if(a=xe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:yu(9,a)}}catch(b){Pt(a,a.return,b)}if(a===o){xe=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,xe=M;break e}xe=a.return}}if(nt=r,Nr(),Si&&typeof Si.onPostCommitFiberRoot=="function")try{Si.onPostCommitFiberRoot(du,t)}catch{}i=!0}return i}finally{ot=n,Yn.transition=e}}return!1}function vg(t,e,n){e=go(n,e),e=Oy(t,e,1),t=Mr(t,e,1),e=un(),t!==null&&(Ka(t,1,e),Mn(t,e))}function Pt(t,e,n){if(t.tag===3)vg(t,t,n);else for(;e!==null;){if(e.tag===3){vg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Er===null||!Er.has(i))){t=go(n,t),t=ky(e,t,1),e=Mr(e,t,1),t=un(),e!==null&&(Ka(e,1,t),Mn(e,t));break}}e=e.return}}function sT(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=un(),t.pingedLanes|=t.suspendedLanes&n,$t===t&&(qt&n)===n&&(Vt===4||Vt===3&&(qt&130023424)===qt&&500>It()-rm?os(t,0):im|=n),Mn(t,e)}function rS(t,e){e===0&&(t.mode&1?(e=gl,gl<<=1,!(gl&130023424)&&(gl=4194304)):e=1);var n=un();t=Yi(t,e),t!==null&&(Ka(t,e,n),Mn(t,n))}function oT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),rS(t,n)}function aT(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),rS(t,n)}var sS;sS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yn.current)vn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vn=!1,Yb(t,e,n);vn=!!(t.flags&131072)}else vn=!1,yt&&e.flags&1048576&&cy(e,Hc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;mc(t,e),t=e.pendingProps;var r=fo(e,sn.current);so(e,n),r=Zp(null,e,i,t,r,n);var s=Qp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Sn(i)?(s=!0,zc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Xp(e),r.updater=_u,e.stateNode=r,r._reactInternals=e,Gd(e,i,t,n),e=Xd(null,e,i,!0,s,n)):(e.tag=0,yt&&s&&Bp(e),ln(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(mc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=cT(i),t=ii(i,t),r){case 0:e=jd(null,e,i,t,n);break e;case 1:e=lg(null,e,i,t,n);break e;case 11:e=og(null,e,i,t,n);break e;case 14:e=ag(null,e,i,ii(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),jd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),lg(t,e,i,r,n);case 3:e:{if(Hy(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,my(t,e),jc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=go(Error(ie(423)),e),e=cg(t,e,i,n,r);break e}else if(i!==r){r=go(Error(ie(424)),e),e=cg(t,e,i,n,r);break e}else for(Dn=Sr(e.stateNode.containerInfo.firstChild),In=e,yt=!0,si=null,n=hy(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ho(),i===r){e=qi(t,e,n);break e}ln(t,e,i,n)}e=e.child}return e;case 5:return gy(e),t===null&&zd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Ud(i,r)?o=null:s!==null&&Ud(i,s)&&(e.flags|=32),Vy(t,e),ln(t,e,o,n),e.child;case 6:return t===null&&zd(e),null;case 13:return Gy(t,e,n);case 4:return $p(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=po(e,null,i,n):ln(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),og(t,e,i,r,n);case 7:return ln(t,e,e.pendingProps,n),e.child;case 8:return ln(t,e,e.pendingProps.children,n),e.child;case 12:return ln(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ht(Gc,i._currentValue),i._currentValue=o,s!==null)if(di(s.value,o)){if(s.children===r.children&&!yn.current){e=qi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Hi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Vd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Vd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ln(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,so(e,n),r=qn(r),i=i(r),e.flags|=1,ln(t,e,i,n),e.child;case 14:return i=e.type,r=ii(i,e.pendingProps),r=ii(i.type,r),ag(t,e,i,r,n);case 15:return By(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),mc(t,e),e.tag=1,Sn(i)?(t=!0,zc(e)):t=!1,so(e,n),Fy(e,i,r),Gd(e,i,r,n),Xd(null,e,i,!0,t,n);case 19:return Wy(t,e,n);case 22:return zy(t,e,n)}throw Error(ie(156,e.tag))};function oS(t,e){return I_(t,e)}function lT(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,e,n,i){return new lT(t,e,n,i)}function lm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cT(t){if(typeof t=="function")return lm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ap)return 11;if(t===Cp)return 14}return 2}function Tr(t,e){var n=t.alternate;return n===null?(n=jn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function vc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")lm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ks:return as(n.children,r,s,e);case wp:o=8,r|=8;break;case hd:return t=jn(12,n,e,r|2),t.elementType=hd,t.lanes=s,t;case pd:return t=jn(13,n,e,r),t.elementType=pd,t.lanes=s,t;case md:return t=jn(19,n,e,r),t.elementType=md,t.lanes=s,t;case g_:return Mu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case p_:o=10;break e;case m_:o=9;break e;case Ap:o=11;break e;case Cp:o=14;break e;case ur:o=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=jn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function as(t,e,n,i){return t=jn(7,t,i,e),t.lanes=n,t}function Mu(t,e,n,i){return t=jn(22,t,i,e),t.elementType=g_,t.lanes=n,t.stateNode={isHidden:!1},t}function cf(t,e,n){return t=jn(6,t,null,e),t.lanes=n,t}function uf(t,e,n){return e=jn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function uT(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gu(0),this.expirationTimes=Gu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function cm(t,e,n,i,r,s,o,a,l){return t=new uT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xp(s),t}function fT(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Os,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function aS(t){if(!t)return Cr;t=t._reactInternals;e:{if(vs(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(Sn(n))return ay(t,n,e)}return e}function lS(t,e,n,i,r,s,o,a,l){return t=cm(n,i,!0,t,r,s,o,a,l),t.context=aS(null),n=t.current,i=un(),r=br(n),s=Hi(i,r),s.callback=e??null,Mr(n,s,r),t.current.lanes=r,Ka(t,r,i),Mn(t,i),t}function Eu(t,e,n,i){var r=e.current,s=un(),o=br(r);return n=aS(n),e.context===null?e.context=n:e.pendingContext=n,e=Hi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Mr(r,e,o),t!==null&&(ci(t,r,o,s),dc(t,r,o)),o}function Jc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _g(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function um(t,e){_g(t,e),(t=t.alternate)&&_g(t,e)}function dT(){return null}var cS=typeof reportError=="function"?reportError:function(t){console.error(t)};function fm(t){this._internalRoot=t}bu.prototype.render=fm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));Eu(t,e,null,null)};bu.prototype.unmount=fm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ms(function(){Eu(null,t,null,null)}),e[$i]=null}};function bu(t){this._internalRoot=t}bu.prototype.unstable_scheduleHydration=function(t){if(t){var e=z_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<dr.length&&e!==0&&e<dr[n].priority;n++);dr.splice(n,0,t),n===0&&H_(t)}};function dm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function yg(){}function hT(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Jc(o);s.call(c)}}var o=lS(e,i,t,0,null,!1,!1,"",yg);return t._reactRootContainer=o,t[$i]=o.current,Ra(t.nodeType===8?t.parentNode:t),ms(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Jc(l);a.call(c)}}var l=cm(t,0,!1,null,null,!1,!1,"",yg);return t._reactRootContainer=l,t[$i]=l.current,Ra(t.nodeType===8?t.parentNode:t),ms(function(){Eu(e,l,n,i)}),l}function wu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Jc(o);a.call(l)}}Eu(e,o,t,r)}else o=hT(n,e,t,r,i);return Jc(o)}k_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ia(e.pendingLanes);n!==0&&(Dp(e,n|1),Mn(e,It()),!(nt&6)&&(xo=It()+500,Nr()))}break;case 13:ms(function(){var i=Yi(t,1);if(i!==null){var r=un();ci(i,t,1,r)}}),um(t,1)}};Lp=function(t){if(t.tag===13){var e=Yi(t,134217728);if(e!==null){var n=un();ci(e,t,134217728,n)}um(t,134217728)}};B_=function(t){if(t.tag===13){var e=br(t),n=Yi(t,e);if(n!==null){var i=un();ci(n,t,e,i)}um(t,e)}};z_=function(){return ot};V_=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};Td=function(t,e,n){switch(e){case"input":if(vd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=gu(i);if(!r)throw Error(ie(90));v_(i),vd(i,r)}}}break;case"textarea":y_(t,n);break;case"select":e=n.value,e!=null&&to(t,!!n.multiple,e,!1)}};A_=sm;C_=ms;var pT={usingClientEntryPoint:!1,Events:[Qa,Hs,gu,T_,w_,sm]},Go={findFiberByHostInstance:es,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mT={bundleType:Go.bundleType,version:Go.version,rendererPackageName:Go.rendererPackageName,rendererConfig:Go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ji.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=D_(t),t===null?null:t.stateNode},findFiberByHostInstance:Go.findFiberByHostInstance||dT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Al.isDisabled&&Al.supportsFiber)try{du=Al.inject(mT),Si=Al}catch{}}Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pT;Fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dm(e))throw Error(ie(200));return fT(t,e,null,n)};Fn.createRoot=function(t,e){if(!dm(t))throw Error(ie(299));var n=!1,i="",r=cS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=cm(t,1,!1,null,null,n,!1,i,r),t[$i]=e.current,Ra(t.nodeType===8?t.parentNode:t),new fm(e)};Fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=D_(e),t=t===null?null:t.stateNode,t};Fn.flushSync=function(t){return ms(t)};Fn.hydrate=function(t,e,n){if(!Tu(e))throw Error(ie(200));return wu(null,t,e,!0,n)};Fn.hydrateRoot=function(t,e,n){if(!dm(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=cS;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=lS(e,null,t,1,n??null,r,!1,s,o),t[$i]=e.current,Ra(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new bu(e)};Fn.render=function(t,e,n){if(!Tu(e))throw Error(ie(200));return wu(null,t,e,!1,n)};Fn.unmountComponentAtNode=function(t){if(!Tu(t))throw Error(ie(40));return t._reactRootContainer?(ms(function(){wu(null,null,t,!1,function(){t._reactRootContainer=null,t[$i]=null})}),!0):!1};Fn.unstable_batchedUpdates=sm;Fn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Tu(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return wu(t,e,n,!1,i)};Fn.version="18.3.1-next-f1338f8080-20240426";function uS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uS)}catch(t){console.error(t)}}uS(),u_.exports=Fn;var gT=u_.exports,Sg=gT;fd.createRoot=Sg.createRoot,fd.hydrateRoot=Sg.hydrateRoot;/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vT=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase()),Mg=t=>{const e=vT(t);return e.charAt(0).toUpperCase()+e.slice(1)},fS=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim(),_T=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ST=te.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>te.createElement("svg",{ref:l,...yT,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:fS("lucide",r),...!s&&!_T(a)&&{"aria-hidden":"true"},...a},[...o.map(([c,u])=>te.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=(t,e)=>{const n=te.forwardRef(({className:i,...r},s)=>te.createElement(ST,{ref:s,iconNode:e,className:fS(`lucide-${xT(Mg(t))}`,`lucide-${t}`,i),...r}));return n.displayName=Mg(t),n};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MT=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],ET=Ur("chart-column",MT);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bT=[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]],TT=Ur("droplet",bT);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wT=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],Eg=Ur("flame",wT);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AT=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],CT=Ur("house",AT);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RT=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],PT=Ur("refresh-cw",RT);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DT=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],ff=Ur("sparkles",DT);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LT=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],bg=Ur("trending-up",LT);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IT=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],NT=Ur("triangle-alert",IT);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hm="181",UT=0,Tg=1,FT=2,dS=1,OT=2,Fi=3,Rr=0,En=1,Bi=2,Gi=0,ao=1,rh=2,wg=3,Ag=4,kT=5,Zr=100,BT=101,zT=102,VT=103,HT=104,GT=200,WT=201,jT=202,XT=203,sh=204,oh=205,$T=206,YT=207,qT=208,KT=209,ZT=210,QT=211,JT=212,ew=213,tw=214,ah=0,lh=1,ch=2,vo=3,uh=4,fh=5,dh=6,hh=7,hS=0,nw=1,iw=2,wr=0,rw=1,sw=2,ow=3,aw=4,lw=5,cw=6,uw=7,pS=300,_o=301,yo=302,ph=303,mh=304,Au=306,gh=1e3,Ln=1001,xh=1002,Nn=1003,fw=1004,Cl=1005,nn=1006,df=1007,is=1008,Ki=1009,mS=1010,gS=1011,ka=1012,pm=1013,gs=1014,vi=1015,_s=1016,mm=1017,gm=1018,Ba=1020,xS=35902,vS=35899,_S=1021,yS=1022,Xn=1023,za=1026,Va=1027,SS=1028,xm=1029,vm=1030,_m=1031,ym=1033,_c=33776,yc=33777,Sc=33778,Mc=33779,vh=35840,_h=35841,yh=35842,Sh=35843,Mh=36196,Eh=37492,bh=37496,Th=37808,wh=37809,Ah=37810,Ch=37811,Rh=37812,Ph=37813,Dh=37814,Lh=37815,Ih=37816,Nh=37817,Uh=37818,Fh=37819,Oh=37820,kh=37821,Bh=36492,zh=36494,Vh=36495,Hh=36283,Gh=36284,Wh=36285,jh=36286,dw=3200,hw=3201,pw=0,mw=1,pr="",Hn="srgb",So="srgb-linear",eu="linear",ct="srgb",Ms=7680,Cg=519,gw=512,xw=513,vw=514,MS=515,_w=516,yw=517,Sw=518,Mw=519,Rg=35044,Pg="300 es",_i=2e3,tu=2001;function ES(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function nu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Ew(){const t=nu("canvas");return t.style.display="block",t}const Dg={};function Lg(...t){const e="THREE."+t.shift();console.log(e,...t)}function He(...t){const e="THREE."+t.shift();console.warn(e,...t)}function Nt(...t){const e="THREE."+t.shift();console.error(e,...t)}function Ha(...t){const e=t.join(" ");e in Dg||(Dg[e]=!0,He(...t))}function bw(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}class Co{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hf=Math.PI/180,Xh=180/Math.PI;function el(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[t&255]+Jt[t>>8&255]+Jt[t>>16&255]+Jt[t>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[n&63|128]+Jt[n>>8&255]+"-"+Jt[n>>16&255]+Jt[n>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function et(t,e,n){return Math.max(e,Math.min(n,t))}function Tw(t,e){return(t%e+e)%e}function pf(t,e,n){return(1-n)*t+n*e}function Wo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function gn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,n=0){Ge.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tl{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[o+0],p=s[o+1],x=s[o+2],y=s[o+3];if(a<=0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a>=1){e[n+0]=d,e[n+1]=p,e[n+2]=x,e[n+3]=y;return}if(f!==y||l!==d||c!==p||u!==x){let g=l*d+c*p+u*x+f*y;g<0&&(d=-d,p=-p,x=-x,y=-y,g=-g);let h=1-a;if(g<.9995){const m=Math.acos(g),_=Math.sin(m);h=Math.sin(h*m)/_,a=Math.sin(a*m)/_,l=l*h+d*a,c=c*h+p*a,u=u*h+x*a,f=f*h+y*a}else{l=l*h+d*a,c=c*h+p*a,u=u*h+x*a,f=f*h+y*a;const m=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=m,c*=m,u*=m,f*=m}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],x=s[o+3];return e[n]=a*x+u*f+l*p-c*d,e[n+1]=l*x+u*d+c*f-a*p,e[n+2]=c*x+u*p+a*d-l*f,e[n+3]=u*x-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*x,this._y=c*p*f-d*u*x,this._z=c*u*x+d*p*f,this._w=c*u*f-d*p*x;break;case"YXZ":this._x=d*u*f+c*p*x,this._y=c*p*f-d*u*x,this._z=c*u*x-d*p*f,this._w=c*u*f+d*p*x;break;case"ZXY":this._x=d*u*f-c*p*x,this._y=c*p*f+d*u*x,this._z=c*u*x+d*p*f,this._w=c*u*f-d*p*x;break;case"ZYX":this._x=d*u*f-c*p*x,this._y=c*p*f+d*u*x,this._z=c*u*x-d*p*f,this._w=c*u*f+d*p*x;break;case"YZX":this._x=d*u*f+c*p*x,this._y=c*p*f+d*u*x,this._z=c*u*x-d*p*f,this._w=c*u*f-d*p*x;break;case"XZY":this._x=d*u*f-c*p*x,this._y=c*p*f-d*u*x,this._z=c*u*x+d*p*f,this._w=c*u*f+d*p*x;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ig.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ig.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mf.copy(this).projectOnVector(e),this.sub(mf)}reflect(e){return this.sub(mf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mf=new j,Ig=new tl;class je{constructor(e,n,i,r,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],x=i[8],y=r[0],g=r[3],h=r[6],m=r[1],_=r[4],M=r[7],b=r[2],S=r[5],A=r[8];return s[0]=o*y+a*m+l*b,s[3]=o*g+a*_+l*S,s[6]=o*h+a*M+l*A,s[1]=c*y+u*m+f*b,s[4]=c*g+u*_+f*S,s[7]=c*h+u*M+f*A,s[2]=d*y+p*m+x*b,s[5]=d*g+p*_+x*S,s[8]=d*h+p*M+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,x=n*f+i*d+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=f*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(gf.makeScale(e,n)),this}rotate(e){return this.premultiply(gf.makeRotation(-e)),this}translate(e,n){return this.premultiply(gf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gf=new je,Ng=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ug=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ww(){const t={enabled:!0,workingColorSpace:So,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ct&&(r.r=Wi(r.r),r.g=Wi(r.g),r.b=Wi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(r.r=lo(r.r),r.g=lo(r.g),r.b=lo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===pr?eu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ha("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ha("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[So]:{primaries:e,whitePoint:i,transfer:eu,toXYZ:Ng,fromXYZ:Ug,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Hn},outputColorSpaceConfig:{drawingBufferColorSpace:Hn}},[Hn]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:Ng,fromXYZ:Ug,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Hn}}}),t}const rt=ww();function Wi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function lo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Es;class Aw{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Es===void 0&&(Es=nu("canvas")),Es.width=e.width,Es.height=e.height;const r=Es.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Es}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=nu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Wi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Wi(n[i]/255)*255):n[i]=Wi(n[i]);return{data:n,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Cw=0;class Sm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cw++}),this.uuid=el(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(xf(r[o].image)):s.push(xf(r[o]))}else s=xf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function xf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Aw.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}let Rw=0;const vf=new j;class fn extends Co{constructor(e=fn.DEFAULT_IMAGE,n=fn.DEFAULT_MAPPING,i=Ln,r=Ln,s=nn,o=is,a=Xn,l=Ki,c=fn.DEFAULT_ANISOTROPY,u=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rw++}),this.uuid=el(),this.name="",this.source=new Sm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vf).x}get height(){return this.source.getSize(vf).y}get depth(){return this.source.getSize(vf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){He(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){He(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gh:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case xh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gh:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case xh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=pS;fn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,n=0,i=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],x=l[9],y=l[2],g=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-y)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+y)<.1&&Math.abs(x+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,M=(p+1)/2,b=(h+1)/2,S=(u+d)/4,A=(f+y)/4,R=(x+g)/4;return _>M&&_>b?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=S/i,s=A/i):M>b?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=S/r,s=R/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=A/s,r=R/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-x)*(g-x)+(f-y)*(f-y)+(d-u)*(d-u));return Math.abs(m)<.001&&(m=1),this.x=(g-x)/m,this.y=(f-y)/m,this.z=(d-u)/m,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this.w=et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this.w=et(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pw extends Co{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Dt(0,0,e,n),this.scissorTest=!1,this.viewport=new Dt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new fn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Sm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr extends Pw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class bS extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dw extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nl{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jn):Jn.fromBufferAttribute(s,o),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rl.copy(i.boundingBox)),Rl.applyMatrix4(e.matrixWorld),this.union(Rl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jo),Pl.subVectors(this.max,jo),bs.subVectors(e.a,jo),Ts.subVectors(e.b,jo),ws.subVectors(e.c,jo),tr.subVectors(Ts,bs),nr.subVectors(ws,Ts),Br.subVectors(bs,ws);let n=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-Br.z,Br.y,tr.z,0,-tr.x,nr.z,0,-nr.x,Br.z,0,-Br.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-Br.y,Br.x,0];return!_f(n,bs,Ts,ws,Pl)||(n=[1,0,0,0,1,0,0,0,1],!_f(n,bs,Ts,ws,Pl))?!1:(Dl.crossVectors(tr,nr),n=[Dl.x,Dl.y,Dl.z],_f(n,bs,Ts,ws,Pl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ri=[new j,new j,new j,new j,new j,new j,new j,new j],Jn=new j,Rl=new nl,bs=new j,Ts=new j,ws=new j,tr=new j,nr=new j,Br=new j,jo=new j,Pl=new j,Dl=new j,zr=new j;function _f(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){zr.fromArray(t,s);const a=r.x*Math.abs(zr.x)+r.y*Math.abs(zr.y)+r.z*Math.abs(zr.z),l=e.dot(zr),c=n.dot(zr),u=i.dot(zr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Lw=new nl,Xo=new j,yf=new j;class Cu{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Lw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);const n=Xo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Xo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(yf)),this.expandByPoint(Xo.copy(e.center).sub(yf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Pi=new j,Sf=new j,Ll=new j,ir=new j,Mf=new j,Il=new j,Ef=new j;class TS{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,n),Pi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Sf.copy(e).add(n).multiplyScalar(.5),Ll.copy(n).sub(e).normalize(),ir.copy(this.origin).sub(Sf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ll),a=ir.dot(this.direction),l=-ir.dot(Ll),c=ir.lengthSq(),u=Math.abs(1-o*o);let f,d,p,x;if(u>0)if(f=o*l-a,d=o*a-l,x=s*u,f>=0)if(d>=-x)if(d<=x){const y=1/u;f*=y,d*=y,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Sf).addScaledVector(Ll,d),p}intersectSphere(e,n){Pi.subVectors(e.center,this.origin);const i=Pi.dot(this.direction),r=Pi.dot(Pi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,n,i,r,s){Mf.subVectors(n,e),Il.subVectors(i,e),Ef.crossVectors(Mf,Il);let o=this.direction.dot(Ef),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ir.subVectors(this.origin,e);const l=a*this.direction.dot(Il.crossVectors(ir,Il));if(l<0)return null;const c=a*this.direction.dot(Mf.cross(ir));if(c<0||l+c>o)return null;const u=-a*ir.dot(Ef);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(e,n,i,r,s,o,a,l,c,u,f,d,p,x,y,g){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,p,x,y,g)}set(e,n,i,r,s,o,a,l,c,u,f,d,p,x,y,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=x,h[11]=y,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/As.setFromMatrixColumn(e,0).length(),s=1/As.setFromMatrixColumn(e,1).length(),o=1/As.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,x=a*u,y=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+x*c,n[5]=d-y*c,n[9]=-a*l,n[2]=y-d*c,n[6]=x+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,x=c*u,y=c*f;n[0]=d+y*a,n[4]=x*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-x,n[6]=y+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,x=c*u,y=c*f;n[0]=d-y*a,n[4]=-o*f,n[8]=x+p*a,n[1]=p+x*a,n[5]=o*u,n[9]=y-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,x=a*u,y=a*f;n[0]=l*u,n[4]=x*c-p,n[8]=d*c+y,n[1]=l*f,n[5]=y*c+d,n[9]=p*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,x=a*l,y=a*c;n[0]=l*u,n[4]=y-d*f,n[8]=x*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+x,n[10]=d-y*f}else if(e.order==="XZY"){const d=o*l,p=o*c,x=a*l,y=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+y,n[5]=o*u,n[9]=p*f-x,n[2]=x*f-p,n[6]=a*u,n[10]=y*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Iw,e,Nw)}lookAt(e,n,i){const r=this.elements;return Cn.subVectors(e,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),rr.crossVectors(i,Cn),rr.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),rr.crossVectors(i,Cn)),rr.normalize(),Nl.crossVectors(Cn,rr),r[0]=rr.x,r[4]=Nl.x,r[8]=Cn.x,r[1]=rr.y,r[5]=Nl.y,r[9]=Cn.y,r[2]=rr.z,r[6]=Nl.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],x=i[2],y=i[6],g=i[10],h=i[14],m=i[3],_=i[7],M=i[11],b=i[15],S=r[0],A=r[4],R=r[8],T=r[12],E=r[1],D=r[5],k=r[9],H=r[13],Y=r[2],Z=r[6],X=r[10],Q=r[14],P=r[3],W=r[7],q=r[11],oe=r[15];return s[0]=o*S+a*E+l*Y+c*P,s[4]=o*A+a*D+l*Z+c*W,s[8]=o*R+a*k+l*X+c*q,s[12]=o*T+a*H+l*Q+c*oe,s[1]=u*S+f*E+d*Y+p*P,s[5]=u*A+f*D+d*Z+p*W,s[9]=u*R+f*k+d*X+p*q,s[13]=u*T+f*H+d*Q+p*oe,s[2]=x*S+y*E+g*Y+h*P,s[6]=x*A+y*D+g*Z+h*W,s[10]=x*R+y*k+g*X+h*q,s[14]=x*T+y*H+g*Q+h*oe,s[3]=m*S+_*E+M*Y+b*P,s[7]=m*A+_*D+M*Z+b*W,s[11]=m*R+_*k+M*X+b*q,s[15]=m*T+_*H+M*Q+b*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],x=e[3],y=e[7],g=e[11],h=e[15];return x*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+y*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+g*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],x=e[12],y=e[13],g=e[14],h=e[15],m=f*g*c-y*d*c+y*l*p-a*g*p-f*l*h+a*d*h,_=x*d*c-u*g*c-x*l*p+o*g*p+u*l*h-o*d*h,M=u*y*c-x*f*c+x*a*p-o*y*p-u*a*h+o*f*h,b=x*f*l-u*y*l-x*a*d+o*y*d+u*a*g-o*f*g,S=n*m+i*_+r*M+s*b;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/S;return e[0]=m*A,e[1]=(y*d*s-f*g*s-y*r*p+i*g*p+f*r*h-i*d*h)*A,e[2]=(a*g*s-y*l*s+y*r*c-i*g*c-a*r*h+i*l*h)*A,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*A,e[4]=_*A,e[5]=(u*g*s-x*d*s+x*r*p-n*g*p-u*r*h+n*d*h)*A,e[6]=(x*l*s-o*g*s-x*r*c+n*g*c+o*r*h-n*l*h)*A,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*p+n*l*p)*A,e[8]=M*A,e[9]=(x*f*s-u*y*s-x*i*p+n*y*p+u*i*h-n*f*h)*A,e[10]=(o*y*s-x*a*s+x*i*c-n*y*c-o*i*h+n*a*h)*A,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*A,e[12]=b*A,e[13]=(u*y*r-x*f*r+x*i*d-n*y*d-u*i*g+n*f*g)*A,e[14]=(x*a*r-o*y*r-x*i*l+n*y*l+o*i*g-n*a*g)*A,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,x=s*f,y=o*u,g=o*f,h=a*f,m=l*c,_=l*u,M=l*f,b=i.x,S=i.y,A=i.z;return r[0]=(1-(y+h))*b,r[1]=(p+M)*b,r[2]=(x-_)*b,r[3]=0,r[4]=(p-M)*S,r[5]=(1-(d+h))*S,r[6]=(g+m)*S,r[7]=0,r[8]=(x+_)*A,r[9]=(g-m)*A,r[10]=(1-(d+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=As.set(r[0],r[1],r[2]).length();const o=As.set(r[4],r[5],r[6]).length(),a=As.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ei.copy(this);const c=1/s,u=1/o,f=1/a;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=f,ei.elements[9]*=f,ei.elements[10]*=f,n.setFromRotationMatrix(ei),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=_i,l=!1){const c=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let x,y;if(l)x=s/(o-s),y=o*s/(o-s);else if(a===_i)x=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===tu)x=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=_i,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),p=-(i+r)/(i-r);let x,y;if(l)x=1/(o-s),y=o/(o-s);else if(a===_i)x=-2/(o-s),y=-(o+s)/(o-s);else if(a===tu)x=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const As=new j,ei=new kt,Iw=new j(0,0,0),Nw=new j(1,1,1),rr=new j,Nl=new j,Cn=new j,Fg=new kt,Og=new tl;class Zi{constructor(e=0,n=0,i=0,r=Zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Fg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Og.setFromEuler(this),this.setFromQuaternion(Og,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zi.DEFAULT_ORDER="XYZ";class wS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Uw=0;const kg=new j,Cs=new tl,Di=new kt,Ul=new j,$o=new j,Fw=new j,Ow=new tl,Bg=new j(1,0,0),zg=new j(0,1,0),Vg=new j(0,0,1),Hg={type:"added"},kw={type:"removed"},Rs={type:"childadded",child:null},bf={type:"childremoved",child:null};class bn extends Co{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uw++}),this.uuid=el(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new j,n=new Zi,i=new tl,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new kt},normalMatrix:{value:new je}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(Bg,e)}rotateY(e){return this.rotateOnAxis(zg,e)}rotateZ(e){return this.rotateOnAxis(Vg,e)}translateOnAxis(e,n){return kg.copy(e).applyQuaternion(this.quaternion),this.position.add(kg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Bg,e)}translateY(e){return this.translateOnAxis(zg,e)}translateZ(e){return this.translateOnAxis(Vg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ul.copy(e):Ul.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt($o,Ul,this.up):Di.lookAt(Ul,$o,this.up),this.quaternion.setFromRotationMatrix(Di),r&&(Di.extractRotation(r.matrixWorld),Cs.setFromRotationMatrix(Di),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hg),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(kw),bf.child=e,this.dispatchEvent(bf),bf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hg),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,e,Fw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,Ow,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}bn.DEFAULT_UP=new j(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new j,Li=new j,Tf=new j,Ii=new j,Ps=new j,Ds=new j,Gg=new j,wf=new j,Af=new j,Cf=new j,Rf=new Dt,Pf=new Dt,Df=new Dt;class ai{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ti.subVectors(e,n),r.cross(ti);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ti.subVectors(r,n),Li.subVectors(i,n),Tf.subVectors(e,n);const o=ti.dot(ti),a=ti.dot(Li),l=ti.dot(Tf),c=Li.dot(Li),u=Li.dot(Tf),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,x=(o*u-a*l)*d;return s.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Rf.setScalar(0),Pf.setScalar(0),Df.setScalar(0),Rf.fromBufferAttribute(e,n),Pf.fromBufferAttribute(e,i),Df.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Rf,s.x),o.addScaledVector(Pf,s.y),o.addScaledVector(Df,s.z),o}static isFrontFacing(e,n,i,r){return ti.subVectors(i,n),Li.subVectors(e,n),ti.cross(Li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ti.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ai.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ai.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ps.subVectors(r,i),Ds.subVectors(s,i),wf.subVectors(e,i);const l=Ps.dot(wf),c=Ds.dot(wf);if(l<=0&&c<=0)return n.copy(i);Af.subVectors(e,r);const u=Ps.dot(Af),f=Ds.dot(Af);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Ps,o);Cf.subVectors(e,s);const p=Ps.dot(Cf),x=Ds.dot(Cf);if(x>=0&&p<=x)return n.copy(s);const y=p*c-l*x;if(y<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(Ds,a);const g=u*x-p*f;if(g<=0&&f-u>=0&&p-x>=0)return Gg.subVectors(s,r),a=(f-u)/(f-u+(p-x)),n.copy(r).addScaledVector(Gg,a);const h=1/(g+y+d);return o=y*h,a=d*h,n.copy(i).addScaledVector(Ps,o).addScaledVector(Ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const AS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},Fl={h:0,s:0,l:0};function Lf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class st{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=rt.workingColorSpace){return this.r=e,this.g=n,this.b=i,rt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=rt.workingColorSpace){if(e=Tw(e,1),n=et(n,0,1),i=et(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Lf(o,s,e+1/3),this.g=Lf(o,s,e),this.b=Lf(o,s,e-1/3)}return rt.colorSpaceToWorking(this,r),this}setStyle(e,n=Hn){function i(s){s!==void 0&&parseFloat(s)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:He("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Hn){const i=AS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=lo(e.r),this.g=lo(e.g),this.b=lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return rt.workingToColorSpace(en.copy(this),e),Math.round(et(en.r*255,0,255))*65536+Math.round(et(en.g*255,0,255))*256+Math.round(et(en.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=rt.workingColorSpace){rt.workingToColorSpace(en.copy(this),n);const i=en.r,r=en.g,s=en.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=rt.workingColorSpace){return rt.workingToColorSpace(en.copy(this),n),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Hn){rt.workingToColorSpace(en.copy(this),e);const n=en.r,i=en.g,r=en.b;return e!==Hn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+n,sr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(sr),e.getHSL(Fl);const i=pf(sr.h,Fl.h,n),r=pf(sr.s,Fl.s,n),s=pf(sr.l,Fl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new st;st.NAMES=AS;let Bw=0;class il extends Co{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bw++}),this.uuid=el(),this.name="",this.type="Material",this.blending=ao,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sh,this.blendDst=oh,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){He(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){He(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ao&&(i.blending=this.blending),this.side!==Rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sh&&(i.blendSrc=this.blendSrc),this.blendDst!==oh&&(i.blendDst=this.blendDst),this.blendEquation!==Zr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class CS extends il{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=hS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new j,Ol=new Ge;let zw=0;class ui{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zw++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Rg,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ol.fromBufferAttribute(this,n),Ol.applyMatrix3(e),this.setXY(n,Ol.x,Ol.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix3(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix4(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyNormalMatrix(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.transformDirection(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Wo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=gn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Wo(n,this.array)),n}setX(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Wo(n,this.array)),n}setY(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Wo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Wo(n,this.array)),n}setW(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array),s=gn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rg&&(e.usage=this.usage),e}}class RS extends ui{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class PS extends ui{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ji extends ui{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Vw=0;const Bn=new kt,If=new bn,Ls=new j,Rn=new nl,Yo=new nl,Wt=new j;class Ci extends Co{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vw++}),this.uuid=el(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ES(e)?PS:RS)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,n,i){return Bn.makeTranslation(e,n,i),this.applyMatrix4(Bn),this}scale(e,n,i){return Bn.makeScale(e,n,i),this.applyMatrix4(Bn),this}lookAt(e){return If.lookAt(e),If.updateMatrix(),this.applyMatrix4(If.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ji(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Yo.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(Rn.min,Yo.min),Rn.expandByPoint(Wt),Wt.addVectors(Rn.max,Yo.max),Rn.expandByPoint(Wt)):(Rn.expandByPoint(Yo.min),Rn.expandByPoint(Yo.max))}Rn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Wt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Wt.fromBufferAttribute(a,c),l&&(Ls.fromBufferAttribute(e,c),Wt.add(Ls)),r=Math.max(r,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new j,l[R]=new j;const c=new j,u=new j,f=new j,d=new Ge,p=new Ge,x=new Ge,y=new j,g=new j;function h(R,T,E){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,E),d.fromBufferAttribute(s,R),p.fromBufferAttribute(s,T),x.fromBufferAttribute(s,E),u.sub(c),f.sub(c),p.sub(d),x.sub(d);const D=1/(p.x*x.y-x.x*p.y);isFinite(D)&&(y.copy(u).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(D),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(D),a[R].add(y),a[T].add(y),a[E].add(y),l[R].add(g),l[T].add(g),l[E].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let R=0,T=m.length;R<T;++R){const E=m[R],D=E.start,k=E.count;for(let H=D,Y=D+k;H<Y;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const _=new j,M=new j,b=new j,S=new j;function A(R){b.fromBufferAttribute(r,R),S.copy(b);const T=a[R];_.copy(T),_.sub(b.multiplyScalar(b.dot(T))).normalize(),M.crossVectors(S,T);const D=M.dot(l[R])<0?-1:1;o.setXYZW(R,_.x,_.y,_.z,D)}for(let R=0,T=m.length;R<T;++R){const E=m[R],D=E.start,k=E.count;for(let H=D,Y=D+k;H<Y;H+=3)A(e.getX(H+0)),A(e.getX(H+1)),A(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ui(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new j,s=new j,o=new j,a=new j,l=new j,c=new j,u=new j,f=new j;if(e)for(let d=0,p=e.count;d<p;d+=3){const x=e.getX(d+0),y=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Wt.fromBufferAttribute(e,n),Wt.normalize(),e.setXYZ(n,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,x=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let h=0;h<u;h++)d[x++]=c[p++]}return new ui(d,u,f)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ci,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wg=new kt,Vr=new TS,kl=new Cu,jg=new j,Bl=new j,zl=new j,Vl=new j,Nf=new j,Hl=new j,Xg=new j,Gl=new j;class fi extends bn{constructor(e=new Ci,n=new CS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Hl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Nf.fromBufferAttribute(f,e),o?Hl.addScaledVector(Nf,u):Hl.addScaledVector(Nf.sub(n),u))}n.add(Hl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),kl.copy(i.boundingSphere),kl.applyMatrix4(s),Vr.copy(e.ray).recast(e.near),!(kl.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(kl,jg)===null||Vr.origin.distanceToSquared(jg)>(e.far-e.near)**2))&&(Wg.copy(s).invert(),Vr.copy(e.ray).applyMatrix4(Wg),!(i.boundingBox!==null&&Vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Vr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=d.length;x<y;x++){const g=d[x],h=o[g.materialIndex],m=Math.max(g.start,p.start),_=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let M=m,b=_;M<b;M+=3){const S=a.getX(M),A=a.getX(M+1),R=a.getX(M+2);r=Wl(this,h,e,i,c,u,f,S,A,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let g=x,h=y;g<h;g+=3){const m=a.getX(g),_=a.getX(g+1),M=a.getX(g+2);r=Wl(this,o,e,i,c,u,f,m,_,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,y=d.length;x<y;x++){const g=d[x],h=o[g.materialIndex],m=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let M=m,b=_;M<b;M+=3){const S=M,A=M+1,R=M+2;r=Wl(this,h,e,i,c,u,f,S,A,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=x,h=y;g<h;g+=3){const m=g,_=g+1,M=g+2;r=Wl(this,o,e,i,c,u,f,m,_,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function Hw(t,e,n,i,r,s,o,a){let l;if(e.side===En?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Rr,a),l===null)return null;Gl.copy(a),Gl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Gl);return c<n.near||c>n.far?null:{distance:c,point:Gl.clone(),object:t}}function Wl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Bl),t.getVertexPosition(l,zl),t.getVertexPosition(c,Vl);const u=Hw(t,e,n,i,Bl,zl,Vl,Xg);if(u){const f=new j;ai.getBarycoord(Xg,Bl,zl,Vl,f),r&&(u.uv=ai.getInterpolatedAttribute(r,a,l,c,f,new Ge)),s&&(u.uv1=ai.getInterpolatedAttribute(s,a,l,c,f,new Ge)),o&&(u.normal=ai.getInterpolatedAttribute(o,a,l,c,f,new j),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new j,materialIndex:0};ai.getNormal(Bl,zl,Vl,d.normal),u.face=d,u.barycoord=f}return u}class rl extends Ci{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ji(c,3)),this.setAttribute("normal",new ji(u,3)),this.setAttribute("uv",new ji(f,2));function x(y,g,h,m,_,M,b,S,A,R,T){const E=M/A,D=b/R,k=M/2,H=b/2,Y=S/2,Z=A+1,X=R+1;let Q=0,P=0;const W=new j;for(let q=0;q<X;q++){const oe=q*D-H;for(let we=0;we<Z;we++){const Pe=we*E-k;W[y]=Pe*m,W[g]=oe*_,W[h]=Y,c.push(W.x,W.y,W.z),W[y]=0,W[g]=0,W[h]=S>0?1:-1,u.push(W.x,W.y,W.z),f.push(we/A),f.push(1-q/R),Q+=1}}for(let q=0;q<R;q++)for(let oe=0;oe<A;oe++){const we=d+oe+Z*q,Pe=d+oe+Z*(q+1),Le=d+(oe+1)+Z*(q+1),Ze=d+(oe+1)+Z*q;l.push(we,Pe,Ze),l.push(Pe,Le,Ze),P+=6}a.addGroup(p,P,T),p+=P,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function an(t){const e={};for(let n=0;n<t.length;n++){const i=Mo(t[n]);for(const r in i)e[r]=i[r]}return e}function Gw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function DS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Ww={clone:Mo,merge:an};var jw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends il{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jw,this.fragmentShader=Xw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mo(e.uniforms),this.uniformsGroups=Gw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class iu extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const or=new j,$g=new Ge,Yg=new Ge;class oi extends iu{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Xh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xh*2*Math.atan(Math.tan(hf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(or.x,or.y).multiplyScalar(-e/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(or.x,or.y).multiplyScalar(-e/or.z)}getViewSize(e,n){return this.getViewBounds(e,$g,Yg),n.subVectors(Yg,$g)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(hf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Is=-90,Ns=1;class $w extends bn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new oi(Is,Ns,e,n);r.layers=this.layers,this.add(r);const s=new oi(Is,Ns,e,n);s.layers=this.layers,this.add(s);const o=new oi(Is,Ns,e,n);o.layers=this.layers,this.add(o);const a=new oi(Is,Ns,e,n);a.layers=this.layers,this.add(a);const l=new oi(Is,Ns,e,n);l.layers=this.layers,this.add(l);const c=new oi(Is,Ns,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===tu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class LS extends fn{constructor(e=[],n=_o,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yw extends Pr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new LS(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new rl(5,5,5),s=new Ti({name:"CubemapFromEquirect",uniforms:Mo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Gi});s.uniforms.tEquirect.value=n;const o=new fi(r,s),a=n.minFilter;return n.minFilter===is&&(n.minFilter=nn),new $w(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class jl extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qw={type:"move"};class Uf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),h=this._getHandJoint(c,y);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new jl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class qg extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class IS extends fn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Nn,u=Nn,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ff=new j,Kw=new j,Zw=new je;class qr{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ff.subVectors(i,n).cross(Kw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ff),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Zw.getNormalMatrix(e),r=this.coplanarPoint(Ff).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new Cu,Qw=new Ge(.5,.5),Xl=new j;class NS{constructor(e=new qr,n=new qr,i=new qr,r=new qr,s=new qr,o=new qr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=_i,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],p=s[7],x=s[8],y=s[9],g=s[10],h=s[11],m=s[12],_=s[13],M=s[14],b=s[15];if(r[0].setComponents(c-o,p-u,h-x,b-m).normalize(),r[1].setComponents(c+o,p+u,h+x,b+m).normalize(),r[2].setComponents(c+a,p+f,h+y,b+_).normalize(),r[3].setComponents(c-a,p-f,h-y,b-_).normalize(),i)r[4].setComponents(l,d,g,M).normalize(),r[5].setComponents(c-l,p-d,h-g,b-M).normalize();else if(r[4].setComponents(c-l,p-d,h-g,b-M).normalize(),n===_i)r[5].setComponents(c+l,p+d,h+g,b+M).normalize();else if(n===tu)r[5].setComponents(l,d,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){Hr.center.set(0,0,0);const n=Qw.distanceTo(e.center);return Hr.radius=.7071067811865476+n,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Xl.x=r.normal.x>0?e.max.x:e.min.x,Xl.y=r.normal.y>0?e.max.y:e.min.y,Xl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jw extends il{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ru=new j,su=new j,Kg=new kt,qo=new TS,$l=new Cu,Of=new j,Zg=new j;class e3 extends bn{constructor(e=new Ci,n=new Jw){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)ru.fromBufferAttribute(n,r-1),su.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ru.distanceTo(su);e.setAttribute("lineDistance",new ji(i,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$l.copy(i.boundingSphere),$l.applyMatrix4(r),$l.radius+=s,e.ray.intersectsSphere($l)===!1)return;Kg.copy(r).invert(),qo.copy(e.ray).applyMatrix4(Kg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let y=p,g=x-1;y<g;y+=c){const h=u.getX(y),m=u.getX(y+1),_=Yl(this,e,qo,l,h,m,y);_&&n.push(_)}if(this.isLineLoop){const y=u.getX(x-1),g=u.getX(p),h=Yl(this,e,qo,l,y,g,x-1);h&&n.push(h)}}else{const p=Math.max(0,o.start),x=Math.min(d.count,o.start+o.count);for(let y=p,g=x-1;y<g;y+=c){const h=Yl(this,e,qo,l,y,y+1,y);h&&n.push(h)}if(this.isLineLoop){const y=Yl(this,e,qo,l,x-1,p,x-1);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Yl(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(ru.fromBufferAttribute(a,r),su.fromBufferAttribute(a,s),n.distanceSqToSegment(ru,su,Of,Zg)>i)return;Of.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Of);if(!(c<e.near||c>e.far))return{distance:c,point:Zg.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const Qg=new j,Jg=new j;class t3 extends e3{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Qg.fromBufferAttribute(n,r),Jg.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Qg.distanceTo(Jg);e.setAttribute("lineDistance",new ji(i,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class US extends fn{constructor(e,n,i=gs,r,s,o,a=Nn,l=Nn,c,u=za,f=1){if(u!==za&&u!==Va)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class FS extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ls extends Ci{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,p=[],x=[],y=[],g=[];for(let h=0;h<u;h++){const m=h*d-o;for(let _=0;_<c;_++){const M=_*f-s;x.push(M,-m,0),y.push(0,0,1),g.push(_/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let m=0;m<a;m++){const _=m+c*h,M=m+c*(h+1),b=m+1+c*(h+1),S=m+1+c*h;p.push(_,M,S),p.push(M,b,S)}this.setIndex(p),this.setAttribute("position",new ji(x,3)),this.setAttribute("normal",new ji(y,3)),this.setAttribute("uv",new ji(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.width,e.height,e.widthSegments,e.heightSegments)}}class ql extends Ti{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class n3 extends il{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class i3 extends il{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class r3 extends iu{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class s3 extends oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class o3{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function ex(t,e,n,i){const r=a3(i);switch(n){case _S:return t*e;case SS:return t*e/r.components*r.byteLength;case xm:return t*e/r.components*r.byteLength;case vm:return t*e*2/r.components*r.byteLength;case _m:return t*e*2/r.components*r.byteLength;case yS:return t*e*3/r.components*r.byteLength;case Xn:return t*e*4/r.components*r.byteLength;case ym:return t*e*4/r.components*r.byteLength;case _c:case yc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Sc:case Mc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _h:case Sh:return Math.max(t,16)*Math.max(e,8)/4;case vh:case yh:return Math.max(t,8)*Math.max(e,8)/2;case Mh:case Eh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case bh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Th:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Uh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Fh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Oh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case kh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Bh:case zh:case Vh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Hh:case Gh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Wh:case jh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function a3(t){switch(t){case Ki:case mS:return{byteLength:1,components:1};case ka:case gS:case _s:return{byteLength:2,components:1};case mm:case gm:return{byteLength:2,components:4};case gs:case pm:case vi:return{byteLength:4,components:1};case xS:case vS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hm}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function OS(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function l3(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<f.length;p++){const x=f[d],y=f[p];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++d,f[d]=y)}f.length=d+1;for(let p=0,x=f.length;p<x;p++){const y=f[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var c3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,u3=`#ifdef USE_ALPHAHASH
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
#endif`,f3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,p3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,m3=`#ifdef USE_AOMAP
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
#endif`,g3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x3=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,v3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S3=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,M3=`#ifdef USE_IRIDESCENCE
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
#endif`,E3=`#ifdef USE_BUMPMAP
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
#endif`,b3=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,T3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,R3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,P3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,D3=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,L3=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,I3=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,N3=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,U3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,O3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,k3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B3="gl_FragColor = linearToOutputTexel( gl_FragColor );",z3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,V3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,H3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,G3=`#ifdef USE_ENVMAP
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
#endif`,W3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,j3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,X3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K3=`#ifdef USE_GRADIENTMAP
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
}`,Z3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,J3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e2=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,t2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,n2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,a2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,l2=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,c2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,u2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,x2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,v2=`#if defined( USE_POINTS_UV )
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
#endif`,_2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b2=`#ifdef USE_MORPHTARGETS
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
#endif`,T2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,A2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,C2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D2=`#ifdef USE_NORMALMAP
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
#endif`,L2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,k2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,j2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,X2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,$2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Y2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q2=`#ifdef USE_SKINNING
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
#endif`,K2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z2=`#ifdef USE_SKINNING
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
#endif`,Q2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nA=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iA=`#ifdef USE_TRANSMISSION
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
#endif`,rA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cA=`uniform sampler2D t2D;
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
}`,uA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pA=`#include <common>
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
}`,mA=`#if DEPTH_PACKING == 3200
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
}`,gA=`#define DISTANCE
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
}`,xA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_A=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yA=`uniform float scale;
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
}`,SA=`uniform vec3 diffuse;
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
}`,MA=`#include <common>
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
}`,EA=`uniform vec3 diffuse;
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
}`,bA=`#define LAMBERT
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
}`,TA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,wA=`#define MATCAP
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
}`,AA=`#define MATCAP
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
}`,CA=`#define NORMAL
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
}`,RA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,PA=`#define PHONG
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
}`,DA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,LA=`#define STANDARD
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
}`,IA=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,NA=`#define TOON
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
}`,UA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,FA=`uniform float size;
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
}`,OA=`uniform vec3 diffuse;
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
}`,kA=`#include <common>
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
}`,BA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,zA=`uniform float rotation;
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
}`,VA=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:c3,alphahash_pars_fragment:u3,alphamap_fragment:f3,alphamap_pars_fragment:d3,alphatest_fragment:h3,alphatest_pars_fragment:p3,aomap_fragment:m3,aomap_pars_fragment:g3,batching_pars_vertex:x3,batching_vertex:v3,begin_vertex:_3,beginnormal_vertex:y3,bsdfs:S3,iridescence_fragment:M3,bumpmap_pars_fragment:E3,clipping_planes_fragment:b3,clipping_planes_pars_fragment:T3,clipping_planes_pars_vertex:w3,clipping_planes_vertex:A3,color_fragment:C3,color_pars_fragment:R3,color_pars_vertex:P3,color_vertex:D3,common:L3,cube_uv_reflection_fragment:I3,defaultnormal_vertex:N3,displacementmap_pars_vertex:U3,displacementmap_vertex:F3,emissivemap_fragment:O3,emissivemap_pars_fragment:k3,colorspace_fragment:B3,colorspace_pars_fragment:z3,envmap_fragment:V3,envmap_common_pars_fragment:H3,envmap_pars_fragment:G3,envmap_pars_vertex:W3,envmap_physical_pars_fragment:t2,envmap_vertex:j3,fog_vertex:X3,fog_pars_vertex:$3,fog_fragment:Y3,fog_pars_fragment:q3,gradientmap_pars_fragment:K3,lightmap_pars_fragment:Z3,lights_lambert_fragment:Q3,lights_lambert_pars_fragment:J3,lights_pars_begin:e2,lights_toon_fragment:n2,lights_toon_pars_fragment:i2,lights_phong_fragment:r2,lights_phong_pars_fragment:s2,lights_physical_fragment:o2,lights_physical_pars_fragment:a2,lights_fragment_begin:l2,lights_fragment_maps:c2,lights_fragment_end:u2,logdepthbuf_fragment:f2,logdepthbuf_pars_fragment:d2,logdepthbuf_pars_vertex:h2,logdepthbuf_vertex:p2,map_fragment:m2,map_pars_fragment:g2,map_particle_fragment:x2,map_particle_pars_fragment:v2,metalnessmap_fragment:_2,metalnessmap_pars_fragment:y2,morphinstance_vertex:S2,morphcolor_vertex:M2,morphnormal_vertex:E2,morphtarget_pars_vertex:b2,morphtarget_vertex:T2,normal_fragment_begin:w2,normal_fragment_maps:A2,normal_pars_fragment:C2,normal_pars_vertex:R2,normal_vertex:P2,normalmap_pars_fragment:D2,clearcoat_normal_fragment_begin:L2,clearcoat_normal_fragment_maps:I2,clearcoat_pars_fragment:N2,iridescence_pars_fragment:U2,opaque_fragment:F2,packing:O2,premultiplied_alpha_fragment:k2,project_vertex:B2,dithering_fragment:z2,dithering_pars_fragment:V2,roughnessmap_fragment:H2,roughnessmap_pars_fragment:G2,shadowmap_pars_fragment:W2,shadowmap_pars_vertex:j2,shadowmap_vertex:X2,shadowmask_pars_fragment:$2,skinbase_vertex:Y2,skinning_pars_vertex:q2,skinning_vertex:K2,skinnormal_vertex:Z2,specularmap_fragment:Q2,specularmap_pars_fragment:J2,tonemapping_fragment:eA,tonemapping_pars_fragment:tA,transmission_fragment:nA,transmission_pars_fragment:iA,uv_pars_fragment:rA,uv_pars_vertex:sA,uv_vertex:oA,worldpos_vertex:aA,background_vert:lA,background_frag:cA,backgroundCube_vert:uA,backgroundCube_frag:fA,cube_vert:dA,cube_frag:hA,depth_vert:pA,depth_frag:mA,distanceRGBA_vert:gA,distanceRGBA_frag:xA,equirect_vert:vA,equirect_frag:_A,linedashed_vert:yA,linedashed_frag:SA,meshbasic_vert:MA,meshbasic_frag:EA,meshlambert_vert:bA,meshlambert_frag:TA,meshmatcap_vert:wA,meshmatcap_frag:AA,meshnormal_vert:CA,meshnormal_frag:RA,meshphong_vert:PA,meshphong_frag:DA,meshphysical_vert:LA,meshphysical_frag:IA,meshtoon_vert:NA,meshtoon_frag:UA,points_vert:FA,points_frag:OA,shadow_vert:kA,shadow_frag:BA,sprite_vert:zA,sprite_frag:VA},fe={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},gi={basic:{uniforms:an([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:an([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new st(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:an([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:an([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:an([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new st(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:an([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:an([fe.points,fe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:an([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:an([fe.common,fe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:an([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:an([fe.sprite,fe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:an([fe.common,fe.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:an([fe.lights,fe.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};gi.physical={uniforms:an([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Kl={r:0,b:0,g:0},Gr=new Zi,HA=new kt;function GA(t,e,n,i,r,s,o){const a=new st(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function x(_){let M=_.isScene===!0?_.background:null;return M&&M.isTexture&&(M=(_.backgroundBlurriness>0?n:e).get(M)),M}function y(_){let M=!1;const b=x(_);b===null?h(a,l):b&&b.isColor&&(h(b,1),M=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(_,M){const b=x(M);b&&(b.isCubeTexture||b.mapping===Au)?(u===void 0&&(u=new fi(new rl(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:Mo(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Gr.copy(M.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(HA.makeRotationFromEuler(Gr)),u.material.toneMapped=rt.getTransfer(b.colorSpace)!==ct,(f!==b||d!==b.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=b,d=b.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new fi(new ls(2,2),new Ti({name:"BackgroundMaterial",uniforms:Mo(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=rt.getTransfer(b.colorSpace)!==ct,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||d!==b.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=b,d=b.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function h(_,M){_.getRGB(Kl,DS(t)),i.buffers.color.setClear(Kl.r,Kl.g,Kl.b,M,o)}function m(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),l=M,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,h(a,l)},render:y,addToRenderList:g,dispose:m}}function WA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(E,D,k,H,Y){let Z=!1;const X=f(H,k,D);s!==X&&(s=X,c(s.object)),Z=p(E,H,k,Y),Z&&x(E,H,k,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,M(E,D,k,H),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function c(E){return t.bindVertexArray(E)}function u(E){return t.deleteVertexArray(E)}function f(E,D,k){const H=k.wireframe===!0;let Y=i[E.id];Y===void 0&&(Y={},i[E.id]=Y);let Z=Y[D.id];Z===void 0&&(Z={},Y[D.id]=Z);let X=Z[H];return X===void 0&&(X=d(l()),Z[H]=X),X}function d(E){const D=[],k=[],H=[];for(let Y=0;Y<n;Y++)D[Y]=0,k[Y]=0,H[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:H,object:E,attributes:{},index:null}}function p(E,D,k,H){const Y=s.attributes,Z=D.attributes;let X=0;const Q=k.getAttributes();for(const P in Q)if(Q[P].location>=0){const q=Y[P];let oe=Z[P];if(oe===void 0&&(P==="instanceMatrix"&&E.instanceMatrix&&(oe=E.instanceMatrix),P==="instanceColor"&&E.instanceColor&&(oe=E.instanceColor)),q===void 0||q.attribute!==oe||oe&&q.data!==oe.data)return!0;X++}return s.attributesNum!==X||s.index!==H}function x(E,D,k,H){const Y={},Z=D.attributes;let X=0;const Q=k.getAttributes();for(const P in Q)if(Q[P].location>=0){let q=Z[P];q===void 0&&(P==="instanceMatrix"&&E.instanceMatrix&&(q=E.instanceMatrix),P==="instanceColor"&&E.instanceColor&&(q=E.instanceColor));const oe={};oe.attribute=q,q&&q.data&&(oe.data=q.data),Y[P]=oe,X++}s.attributes=Y,s.attributesNum=X,s.index=H}function y(){const E=s.newAttributes;for(let D=0,k=E.length;D<k;D++)E[D]=0}function g(E){h(E,0)}function h(E,D){const k=s.newAttributes,H=s.enabledAttributes,Y=s.attributeDivisors;k[E]=1,H[E]===0&&(t.enableVertexAttribArray(E),H[E]=1),Y[E]!==D&&(t.vertexAttribDivisor(E,D),Y[E]=D)}function m(){const E=s.newAttributes,D=s.enabledAttributes;for(let k=0,H=D.length;k<H;k++)D[k]!==E[k]&&(t.disableVertexAttribArray(k),D[k]=0)}function _(E,D,k,H,Y,Z,X){X===!0?t.vertexAttribIPointer(E,D,k,Y,Z):t.vertexAttribPointer(E,D,k,H,Y,Z)}function M(E,D,k,H){y();const Y=H.attributes,Z=k.getAttributes(),X=D.defaultAttributeValues;for(const Q in Z){const P=Z[Q];if(P.location>=0){let W=Y[Q];if(W===void 0&&(Q==="instanceMatrix"&&E.instanceMatrix&&(W=E.instanceMatrix),Q==="instanceColor"&&E.instanceColor&&(W=E.instanceColor)),W!==void 0){const q=W.normalized,oe=W.itemSize,we=e.get(W);if(we===void 0)continue;const Pe=we.buffer,Le=we.type,Ze=we.bytesPerElement,J=Le===t.INT||Le===t.UNSIGNED_INT||W.gpuType===pm;if(W.isInterleavedBufferAttribute){const K=W.data,he=K.stride,Ne=W.offset;if(K.isInstancedInterleavedBuffer){for(let Te=0;Te<P.locationSize;Te++)h(P.location+Te,K.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Te=0;Te<P.locationSize;Te++)g(P.location+Te);t.bindBuffer(t.ARRAY_BUFFER,Pe);for(let Te=0;Te<P.locationSize;Te++)_(P.location+Te,oe/P.locationSize,Le,q,he*Ze,(Ne+oe/P.locationSize*Te)*Ze,J)}else{if(W.isInstancedBufferAttribute){for(let K=0;K<P.locationSize;K++)h(P.location+K,W.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let K=0;K<P.locationSize;K++)g(P.location+K);t.bindBuffer(t.ARRAY_BUFFER,Pe);for(let K=0;K<P.locationSize;K++)_(P.location+K,oe/P.locationSize,Le,q,oe*Ze,oe/P.locationSize*K*Ze,J)}}else if(X!==void 0){const q=X[Q];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(P.location,q);break;case 3:t.vertexAttrib3fv(P.location,q);break;case 4:t.vertexAttrib4fv(P.location,q);break;default:t.vertexAttrib1fv(P.location,q)}}}}m()}function b(){R();for(const E in i){const D=i[E];for(const k in D){const H=D[k];for(const Y in H)u(H[Y].object),delete H[Y];delete D[k]}delete i[E]}}function S(E){if(i[E.id]===void 0)return;const D=i[E.id];for(const k in D){const H=D[k];for(const Y in H)u(H[Y].object),delete H[Y];delete D[k]}delete i[E.id]}function A(E){for(const D in i){const k=i[D];if(k[E.id]===void 0)continue;const H=k[E.id];for(const Y in H)u(H[Y].object),delete H[Y];delete k[E.id]}}function R(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:T,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:g,disableUnusedAttributes:m}}function jA(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let x=0;x<f;x++)p+=u[x];n.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)o(c[x],u[x],d[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let x=0;for(let y=0;y<f;y++)x+=u[y]*d[y];n.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function XA(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Xn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const R=A===_s&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ki&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==vi&&!R)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(He("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=x>0,S=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:b,maxSamples:S}}function $A(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new qr,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const x=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,h=t.get(f);if(!r||x===null||x.length===0||s&&!g)s?u(null):c();else{const m=s?0:i,_=m*4;let M=h.clippingState||null;l.value=M,M=u(x,d,_,p);for(let b=0;b!==_;++b)M[b]=n[b];h.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,x){const y=f!==null?f.length:0;let g=null;if(y!==0){if(g=l.value,x!==!0||g===null){const h=p+y*4,m=d.matrixWorldInverse;a.getNormalMatrix(m),(g===null||g.length<h)&&(g=new Float32Array(h));for(let _=0,M=p;_!==y;++_,M+=4)o.copy(f[_]).applyMatrix4(m,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function YA(t){let e=new WeakMap;function n(o,a){return a===ph?o.mapping=_o:a===mh&&(o.mapping=yo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ph||a===mh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Yw(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const xr=4,tx=[.125,.215,.35,.446,.526,.582],Qr=20,qA=512,Ko=new r3,nx=new st;let kf=null,Bf=0,zf=0,Vf=!1;const KA=new j;class ix{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=KA}=s;kf=this._renderer.getRenderTarget(),Bf=this._renderer.getActiveCubeFace(),zf=this._renderer.getActiveMipmapLevel(),Vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ox(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(kf,Bf,zf),this._renderer.xr.enabled=Vf,e.scissorTest=!1,Us(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===_o||e.mapping===yo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kf=this._renderer.getRenderTarget(),Bf=this._renderer.getActiveCubeFace(),zf=this._renderer.getActiveMipmapLevel(),Vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:_s,format:Xn,colorSpace:So,depthBuffer:!1},r=rx(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rx(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ZA(s)),this._blurMaterial=JA(s,e,n)}return r}_compileMaterial(e){const n=new fi(new Ci,e);this._renderer.compile(n,Ko)}_sceneToCubeUV(e,n,i,r,s){const l=new oi(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(nx),f.toneMapping=wr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fi(new rl,new CS({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,g=y.material;let h=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,h=!0):(g.color.copy(nx),h=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[_],s.y,s.z)):M===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[_]));const b=this._cubeSize;Us(r,M*b,_>2?b:0,b,b),f.setRenderTarget(r),h&&f.render(y,l),f.render(e,l)}f.toneMapping=p,f.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===_o||e.mapping===yo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ox()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sx());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Us(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ko)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget;if(this._ggxMaterial===null){const m=3*Math.max(this._cubeSize,16),_=4*this._cubeSize;this._ggxMaterial=QA(this._lodMax,m,_)}const o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=.05+c*.95,p=f*d,{_lodMax:x}=this,y=this._sizeLods[i],g=3*y*(i>x-xr?i-x+xr:0),h=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=x-n,Us(s,g,h,3*y,2*y),r.setRenderTarget(s),r.render(a,Ko),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,Us(e,g,h,3*y,2*y),r.setRenderTarget(e),r.render(a,Ko)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Nt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Qr-1),y=s/x,g=isFinite(s)?1+Math.floor(u*y):Qr;g>Qr&&He(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Qr}`);const h=[];let m=0;for(let A=0;A<Qr;++A){const R=A/y,T=Math.exp(-R*R/2);h.push(T),A===0?m+=T:A<g&&(m+=2*T)}for(let A=0;A<h.length;A++)h[A]=h[A]/m;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=x,d.mipInt.value=_-i;const M=this._sizeLods[r],b=3*M*(r>_-xr?r-_+xr:0),S=4*(this._cubeSize-M);Us(n,b,S,3*M,2*M),l.setRenderTarget(n),l.render(f,Ko)}}function ZA(t){const e=[],n=[],i=[];let r=t;const s=t-xr+1+tx.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-xr?l=tx[o-t+xr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,x=6,y=3,g=2,h=1,m=new Float32Array(y*x*p),_=new Float32Array(g*x*p),M=new Float32Array(h*x*p);for(let S=0;S<p;S++){const A=S%3*2/3-1,R=S>2?0:-1,T=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];m.set(T,y*x*S),_.set(d,g*x*S);const E=[S,S,S,S,S,S];M.set(E,h*x*S)}const b=new Ci;b.setAttribute("position",new ui(m,y)),b.setAttribute("uv",new ui(_,g)),b.setAttribute("faceIndex",new ui(M,h)),i.push(new fi(b,null)),r>xr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function rx(t,e,n){const i=new Pr(t,e,n);return i.texture.mapping=Au,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Us(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function QA(t,e,n){return new Ti({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function JA(t,e,n){const i=new Float32Array(Qr),r=new j(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:Qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function sx(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function ox(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Ru(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function eC(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ph||l===mh,u=l===_o||l===yo;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new ix(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new ix(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function tC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ha("WebGLRenderer: "+i+" extension not supported."),r}}}function nC(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,x=f.attributes.position;let y=0;if(p!==null){const m=p.array;y=p.version;for(let _=0,M=m.length;_<M;_+=3){const b=m[_+0],S=m[_+1],A=m[_+2];d.push(b,S,S,A,A,b)}}else if(x!==void 0){const m=x.array;y=x.version;for(let _=0,M=m.length/3-1;_<M;_+=3){const b=_+0,S=_+1,A=_+2;d.push(b,S,S,A,A,b)}}else return;const g=new(ES(d)?PS:RS)(d,1);g.version=y;const h=s.get(f);h&&e.remove(h),s.set(f,g)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function iC(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,x){x!==0&&(t.drawElementsInstanced(i,p,s,d*o,x),n.update(p,i,x))}function u(d,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,x);let g=0;for(let h=0;h<x;h++)g+=p[h];n.update(g,i,1)}function f(d,p,x,y){if(x===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],y[h]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,y,0,x);let h=0;for(let m=0;m<x;m++)h+=p[m]*y[m];n.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function rC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:Nt("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function sC(t,e,n){const i=new WeakMap,r=new Dt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let E=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var p=E;d!==void 0&&d.texture.dispose();const x=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let M=0;x===!0&&(M=1),y===!0&&(M=2),g===!0&&(M=3);let b=a.attributes.position.count*M,S=1;b>e.maxTextureSize&&(S=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*S*4*f),R=new bS(A,b,S,f);R.type=vi,R.needsUpdate=!0;const T=M*4;for(let D=0;D<f;D++){const k=h[D],H=m[D],Y=_[D],Z=b*S*4*D;for(let X=0;X<k.count;X++){const Q=X*T;x===!0&&(r.fromBufferAttribute(k,X),A[Z+Q+0]=r.x,A[Z+Q+1]=r.y,A[Z+Q+2]=r.z,A[Z+Q+3]=0),y===!0&&(r.fromBufferAttribute(H,X),A[Z+Q+4]=r.x,A[Z+Q+5]=r.y,A[Z+Q+6]=r.z,A[Z+Q+7]=0),g===!0&&(r.fromBufferAttribute(Y,X),A[Z+Q+8]=r.x,A[Z+Q+9]=r.y,A[Z+Q+10]=r.z,A[Z+Q+11]=Y.itemSize===4?r.w:1)}}d={count:f,texture:R,size:new Ge(b,S)},i.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let x=0;for(let g=0;g<c.length;g++)x+=c[g];const y=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function oC(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const kS=new fn,ax=new US(1,1),BS=new bS,zS=new Dw,VS=new LS,lx=[],cx=[],ux=new Float32Array(16),fx=new Float32Array(9),dx=new Float32Array(4);function Ro(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=lx[r];if(s===void 0&&(s=new Float32Array(r),lx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ht(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Gt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Pu(t,e){let n=cx[e];n===void 0&&(n=new Int32Array(e),cx[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function aC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function lC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2fv(this.addr,e),Gt(n,e)}}function cC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ht(n,e))return;t.uniform3fv(this.addr,e),Gt(n,e)}}function uC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4fv(this.addr,e),Gt(n,e)}}function fC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;dx.set(i),t.uniformMatrix2fv(this.addr,!1,dx),Gt(n,i)}}function dC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;fx.set(i),t.uniformMatrix3fv(this.addr,!1,fx),Gt(n,i)}}function hC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ht(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Gt(n,e)}else{if(Ht(n,i))return;ux.set(i),t.uniformMatrix4fv(this.addr,!1,ux),Gt(n,i)}}function pC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function mC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2iv(this.addr,e),Gt(n,e)}}function gC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3iv(this.addr,e),Gt(n,e)}}function xC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4iv(this.addr,e),Gt(n,e)}}function vC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function _C(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ht(n,e))return;t.uniform2uiv(this.addr,e),Gt(n,e)}}function yC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ht(n,e))return;t.uniform3uiv(this.addr,e),Gt(n,e)}}function SC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ht(n,e))return;t.uniform4uiv(this.addr,e),Gt(n,e)}}function MC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(ax.compareFunction=MS,s=ax):s=kS,n.setTexture2D(e||s,r)}function EC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||zS,r)}function bC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||VS,r)}function TC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||BS,r)}function wC(t){switch(t){case 5126:return aC;case 35664:return lC;case 35665:return cC;case 35666:return uC;case 35674:return fC;case 35675:return dC;case 35676:return hC;case 5124:case 35670:return pC;case 35667:case 35671:return mC;case 35668:case 35672:return gC;case 35669:case 35673:return xC;case 5125:return vC;case 36294:return _C;case 36295:return yC;case 36296:return SC;case 35678:case 36198:case 36298:case 36306:case 35682:return MC;case 35679:case 36299:case 36307:return EC;case 35680:case 36300:case 36308:case 36293:return bC;case 36289:case 36303:case 36311:case 36292:return TC}}function AC(t,e){t.uniform1fv(this.addr,e)}function CC(t,e){const n=Ro(e,this.size,2);t.uniform2fv(this.addr,n)}function RC(t,e){const n=Ro(e,this.size,3);t.uniform3fv(this.addr,n)}function PC(t,e){const n=Ro(e,this.size,4);t.uniform4fv(this.addr,n)}function DC(t,e){const n=Ro(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function LC(t,e){const n=Ro(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function IC(t,e){const n=Ro(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function NC(t,e){t.uniform1iv(this.addr,e)}function UC(t,e){t.uniform2iv(this.addr,e)}function FC(t,e){t.uniform3iv(this.addr,e)}function OC(t,e){t.uniform4iv(this.addr,e)}function kC(t,e){t.uniform1uiv(this.addr,e)}function BC(t,e){t.uniform2uiv(this.addr,e)}function zC(t,e){t.uniform3uiv(this.addr,e)}function VC(t,e){t.uniform4uiv(this.addr,e)}function HC(t,e,n){const i=this.cache,r=e.length,s=Pu(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||kS,s[o])}function GC(t,e,n){const i=this.cache,r=e.length,s=Pu(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||zS,s[o])}function WC(t,e,n){const i=this.cache,r=e.length,s=Pu(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||VS,s[o])}function jC(t,e,n){const i=this.cache,r=e.length,s=Pu(n,r);Ht(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||BS,s[o])}function XC(t){switch(t){case 5126:return AC;case 35664:return CC;case 35665:return RC;case 35666:return PC;case 35674:return DC;case 35675:return LC;case 35676:return IC;case 5124:case 35670:return NC;case 35667:case 35671:return UC;case 35668:case 35672:return FC;case 35669:case 35673:return OC;case 5125:return kC;case 36294:return BC;case 36295:return zC;case 36296:return VC;case 35678:case 36198:case 36298:case 36306:case 35682:return HC;case 35679:case 36299:case 36307:return GC;case 35680:case 36300:case 36308:case 36293:return WC;case 36289:case 36303:case 36311:case 36292:return jC}}class $C{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=wC(n.type)}}class YC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=XC(n.type)}}class qC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Hf=/(\w+)(\])?(\[|\.)?/g;function hx(t,e){t.seq.push(e),t.map[e.id]=e}function KC(t,e,n){const i=t.name,r=i.length;for(Hf.lastIndex=0;;){const s=Hf.exec(i),o=Hf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){hx(n,c===void 0?new $C(a,t,e):new YC(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new qC(a),hx(n,f)),n=f}}}class Ec{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);KC(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function px(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const ZC=37297;let QC=0;function JC(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const mx=new je;function eR(t){rt._getMatrix(mx,rt.workingColorSpace,t);const e=`mat3( ${mx.elements.map(n=>n.toFixed(4))} )`;switch(rt.getTransfer(t)){case eu:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function gx(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+JC(t.getShaderSource(e),a)}else return s}function tR(t,e){const n=eR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function nR(t,e){let n;switch(e){case rw:n="Linear";break;case sw:n="Reinhard";break;case ow:n="Cineon";break;case aw:n="ACESFilmic";break;case cw:n="AgX";break;case uw:n="Neutral";break;case lw:n="Custom";break;default:He("WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Zl=new j;function iR(){rt.getLuminanceCoefficients(Zl);const t=Zl.x.toFixed(4),e=Zl.y.toFixed(4),n=Zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function sR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function oR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function sa(t){return t!==""}function xx(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vx(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aR=/^[ \t]*#include +<([\w\d./]+)>/gm;function $h(t){return t.replace(aR,cR)}const lR=new Map;function cR(t,e){let n=Xe[e];if(n===void 0){const i=lR.get(e);if(i!==void 0)n=Xe[i],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $h(n)}const uR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _x(t){return t.replace(uR,fR)}function fR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yx(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===dS?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===OT?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function hR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case _o:case yo:e="ENVMAP_TYPE_CUBE";break;case Au:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case yo:e="ENVMAP_MODE_REFRACTION";break}return e}function mR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case hS:e="ENVMAP_BLENDING_MULTIPLY";break;case nw:e="ENVMAP_BLENDING_MIX";break;case iw:e="ENVMAP_BLENDING_ADD";break}return e}function gR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function xR(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=dR(n),c=hR(n),u=pR(n),f=mR(n),d=gR(n),p=rR(n),x=sR(s),y=r.createProgram();let g,h,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(sa).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(sa).join(`
`),h.length>0&&(h+=`
`)):(g=[yx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),h=[yx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wr?"#define TONE_MAPPING":"",n.toneMapping!==wr?Xe.tonemapping_pars_fragment:"",n.toneMapping!==wr?nR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,tR("linearToOutputTexel",n.outputColorSpace),iR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(sa).join(`
`)),o=$h(o),o=xx(o,n),o=vx(o,n),a=$h(a),a=xx(a,n),a=vx(a,n),o=_x(o),a=_x(a),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===Pg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Pg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=m+g+o,M=m+h+a,b=px(r,r.VERTEX_SHADER,_),S=px(r,r.FRAGMENT_SHADER,M);r.attachShader(y,b),r.attachShader(y,S),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(D){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(y)||"",H=r.getShaderInfoLog(b)||"",Y=r.getShaderInfoLog(S)||"",Z=k.trim(),X=H.trim(),Q=Y.trim();let P=!0,W=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(P=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,b,S);else{const q=gx(r,b,"vertex"),oe=gx(r,S,"fragment");Nt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Z+`
`+q+`
`+oe)}else Z!==""?He("WebGLProgram: Program Info Log:",Z):(X===""||Q==="")&&(W=!1);W&&(D.diagnostics={runnable:P,programLog:Z,vertexShader:{log:X,prefix:g},fragmentShader:{log:Q,prefix:h}})}r.deleteShader(b),r.deleteShader(S),R=new Ec(r,y),T=oR(r,y)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(y,ZC)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=QC++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=S,this}let vR=0;class _R{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new yR(e),n.set(e,i)),i}}class yR{constructor(e){this.id=vR++,this.code=e,this.usedTimes=0}}function SR(t,e,n,i,r,s,o){const a=new wS,l=new _R,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return c.add(T),T===0?"uv":`uv${T}`}function g(T,E,D,k,H){const Y=k.fog,Z=H.geometry,X=T.isMeshStandardMaterial?k.environment:null,Q=(T.isMeshStandardMaterial?n:e).get(T.envMap||X),P=Q&&Q.mapping===Au?Q.image.height:null,W=x[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&He("WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const q=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,oe=q!==void 0?q.length:0;let we=0;Z.morphAttributes.position!==void 0&&(we=1),Z.morphAttributes.normal!==void 0&&(we=2),Z.morphAttributes.color!==void 0&&(we=3);let Pe,Le,Ze,J;if(W){const at=gi[W];Pe=at.vertexShader,Le=at.fragmentShader}else Pe=T.vertexShader,Le=T.fragmentShader,l.update(T),Ze=l.getVertexShaderID(T),J=l.getFragmentShaderID(T);const K=t.getRenderTarget(),he=t.state.buffers.depth.getReversed(),Ne=H.isInstancedMesh===!0,Te=H.isBatchedMesh===!0,We=!!T.map,xt=!!T.matcap,$e=!!Q,dt=!!T.aoMap,L=!!T.lightMap,qe=!!T.bumpMap,Ke=!!T.normalMap,tt=!!T.displacementMap,Se=!!T.emissiveMap,vt=!!T.metalnessMap,Ce=!!T.roughnessMap,Be=T.anisotropy>0,C=T.clearcoat>0,v=T.dispersion>0,I=T.iridescence>0,B=T.sheen>0,$=T.transmission>0,z=Be&&!!T.anisotropyMap,me=C&&!!T.clearcoatMap,ue=C&&!!T.clearcoatNormalMap,Ae=C&&!!T.clearcoatRoughnessMap,Me=I&&!!T.iridescenceMap,ne=I&&!!T.iridescenceThicknessMap,ae=B&&!!T.sheenColorMap,Fe=B&&!!T.sheenRoughnessMap,Ie=!!T.specularMap,ge=!!T.specularColorMap,ze=!!T.specularIntensityMap,N=$&&!!T.transmissionMap,de=$&&!!T.thicknessMap,le=!!T.gradientMap,ce=!!T.alphaMap,re=T.alphaTest>0,ee=!!T.alphaHash,Ee=!!T.extensions;let Ve=wr;T.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ve=t.toneMapping);const pt={shaderID:W,shaderType:T.type,shaderName:T.name,vertexShader:Pe,fragmentShader:Le,defines:T.defines,customVertexShaderID:Ze,customFragmentShaderID:J,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Te,batchingColor:Te&&H._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&H.instanceColor!==null,instancingMorph:Ne&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?t.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:So,alphaToCoverage:!!T.alphaToCoverage,map:We,matcap:xt,envMap:$e,envMapMode:$e&&Q.mapping,envMapCubeUVHeight:P,aoMap:dt,lightMap:L,bumpMap:qe,normalMap:Ke,displacementMap:d&&tt,emissiveMap:Se,normalMapObjectSpace:Ke&&T.normalMapType===mw,normalMapTangentSpace:Ke&&T.normalMapType===pw,metalnessMap:vt,roughnessMap:Ce,anisotropy:Be,anisotropyMap:z,clearcoat:C,clearcoatMap:me,clearcoatNormalMap:ue,clearcoatRoughnessMap:Ae,dispersion:v,iridescence:I,iridescenceMap:Me,iridescenceThicknessMap:ne,sheen:B,sheenColorMap:ae,sheenRoughnessMap:Fe,specularMap:Ie,specularColorMap:ge,specularIntensityMap:ze,transmission:$,transmissionMap:N,thicknessMap:de,gradientMap:le,opaque:T.transparent===!1&&T.blending===ao&&T.alphaToCoverage===!1,alphaMap:ce,alphaTest:re,alphaHash:ee,combine:T.combine,mapUv:We&&y(T.map.channel),aoMapUv:dt&&y(T.aoMap.channel),lightMapUv:L&&y(T.lightMap.channel),bumpMapUv:qe&&y(T.bumpMap.channel),normalMapUv:Ke&&y(T.normalMap.channel),displacementMapUv:tt&&y(T.displacementMap.channel),emissiveMapUv:Se&&y(T.emissiveMap.channel),metalnessMapUv:vt&&y(T.metalnessMap.channel),roughnessMapUv:Ce&&y(T.roughnessMap.channel),anisotropyMapUv:z&&y(T.anisotropyMap.channel),clearcoatMapUv:me&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:ue&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&y(T.sheenRoughnessMap.channel),specularMapUv:Ie&&y(T.specularMap.channel),specularColorMapUv:ge&&y(T.specularColorMap.channel),specularIntensityMapUv:ze&&y(T.specularIntensityMap.channel),transmissionMapUv:N&&y(T.transmissionMap.channel),thicknessMapUv:de&&y(T.thicknessMap.channel),alphaMapUv:ce&&y(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Ke||Be),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Z.attributes.uv&&(We||ce),fog:!!Y,useFog:T.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:he,skinning:H.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:we,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ve,decodeVideoTexture:We&&T.map.isVideoTexture===!0&&rt.getTransfer(T.map.colorSpace)===ct,decodeVideoTextureEmissive:Se&&T.emissiveMap.isVideoTexture===!0&&rt.getTransfer(T.emissiveMap.colorSpace)===ct,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Bi,flipSided:T.side===En,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ee&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&T.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function h(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)E.push(D),E.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(m(E,T),_(E,T),E.push(t.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function m(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function _(T,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),T.push(a.mask)}function M(T){const E=x[T.type];let D;if(E){const k=gi[E];D=Ww.clone(k.uniforms)}else D=T.uniforms;return D}function b(T,E){let D;for(let k=0,H=u.length;k<H;k++){const Y=u[k];if(Y.cacheKey===E){D=Y,++D.usedTimes;break}}return D===void 0&&(D=new xR(t,E,T,s),u.push(D)),D}function S(T){if(--T.usedTimes===0){const E=u.indexOf(T);u[E]=u[u.length-1],u.pop(),T.destroy()}}function A(T){l.remove(T)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:M,acquireProgram:b,releaseProgram:S,releaseShaderCache:A,programs:u,dispose:R}}function MR(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function ER(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Sx(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Mx(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,x,y,g){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:x,renderOrder:f.renderOrder,z:y,group:g},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=x,h.renderOrder=f.renderOrder,h.z=y,h.group=g),e++,h}function a(f,d,p,x,y,g){const h=o(f,d,p,x,y,g);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,x,y,g){const h=o(f,d,p,x,y,g);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||ER),i.length>1&&i.sort(d||Sx),r.length>1&&r.sort(d||Sx)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function bR(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Mx,t.set(i,[o])):r>=s.length?(o=new Mx,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function TR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new st};break;case"SpotLight":n={position:new j,direction:new j,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new st,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new st,groundColor:new st};break;case"RectAreaLight":n={color:new st,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function wR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let AR=0;function CR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function RR(t){const e=new TR,n=wR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const r=new j,s=new kt,o=new kt;function a(c){let u=0,f=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,x=0,y=0,g=0,h=0,m=0,_=0,M=0,b=0,S=0,A=0;c.sort(CR);for(let T=0,E=c.length;T<E;T++){const D=c[T],k=D.color,H=D.intensity,Y=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=k.r*H,f+=k.g*H,d+=k.b*H;else if(D.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],H);A++}else if(D.isDirectionalLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,P=n.get(D);P.shadowIntensity=Q.intensity,P.shadowBias=Q.bias,P.shadowNormalBias=Q.normalBias,P.shadowRadius=Q.radius,P.shadowMapSize=Q.mapSize,i.directionalShadow[p]=P,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=D.shadow.matrix,m++}i.directional[p]=X,p++}else if(D.isSpotLight){const X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(k).multiplyScalar(H),X.distance=Y,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[y]=X;const Q=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,Q.updateMatrices(D),D.castShadow&&S++),i.spotLightMatrix[y]=Q.matrix,D.castShadow){const P=n.get(D);P.shadowIntensity=Q.intensity,P.shadowBias=Q.bias,P.shadowNormalBias=Q.normalBias,P.shadowRadius=Q.radius,P.shadowMapSize=Q.mapSize,i.spotShadow[y]=P,i.spotShadowMap[y]=Z,M++}y++}else if(D.isRectAreaLight){const X=e.get(D);X.color.copy(k).multiplyScalar(H),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=X,g++}else if(D.isPointLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const Q=D.shadow,P=n.get(D);P.shadowIntensity=Q.intensity,P.shadowBias=Q.bias,P.shadowNormalBias=Q.normalBias,P.shadowRadius=Q.radius,P.shadowMapSize=Q.mapSize,P.shadowCameraNear=Q.camera.near,P.shadowCameraFar=Q.camera.far,i.pointShadow[x]=P,i.pointShadowMap[x]=Z,i.pointShadowMatrix[x]=D.shadow.matrix,_++}i.point[x]=X,x++}else if(D.isHemisphereLight){const X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(H),X.groundColor.copy(D.groundColor).multiplyScalar(H),i.hemi[h]=X,h++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==p||R.pointLength!==x||R.spotLength!==y||R.rectAreaLength!==g||R.hemiLength!==h||R.numDirectionalShadows!==m||R.numPointShadows!==_||R.numSpotShadows!==M||R.numSpotMaps!==b||R.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=g,i.point.length=x,i.hemi.length=h,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+b-S,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=A,R.directionalLength=p,R.pointLength=x,R.spotLength=y,R.rectAreaLength=g,R.hemiLength=h,R.numDirectionalShadows=m,R.numPointShadows=_,R.numSpotShadows=M,R.numSpotMaps=b,R.numLightProbes=A,i.version=AR++)}function l(c,u){let f=0,d=0,p=0,x=0,y=0;const g=u.matrixWorldInverse;for(let h=0,m=c.length;h<m;h++){const _=c[h];if(_.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),f++}else if(_.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),p++}else if(_.isRectAreaLight){const M=i.rectArea[x];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),o.identity(),s.copy(_.matrixWorld),s.premultiply(g),o.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:i}}function Ex(t){const e=new RR(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function PR(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ex(t),e.set(r,[a])):s>=o.length?(a=new Ex(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const DR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function IR(t,e,n){let i=new NS;const r=new Ge,s=new Ge,o=new Dt,a=new n3({depthPacking:hw}),l=new i3,c={},u=n.maxTextureSize,f={[Rr]:En,[En]:Rr,[Bi]:Bi},d=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:DR,fragmentShader:LR}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new Ci;x.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new fi(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dS;let h=this.type;this.render=function(S,A,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;const T=t.getRenderTarget(),E=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Gi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const H=h!==Fi&&this.type===Fi,Y=h===Fi&&this.type!==Fi;for(let Z=0,X=S.length;Z<X;Z++){const Q=S[Z],P=Q.shadow;if(P===void 0){He("WebGLShadowMap:",Q,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const W=P.getFrameExtents();if(r.multiply(W),s.copy(P.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,P.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,P.mapSize.y=s.y)),P.map===null||H===!0||Y===!0){const oe=this.type!==Fi?{minFilter:Nn,magFilter:Nn}:{};P.map!==null&&P.map.dispose(),P.map=new Pr(r.x,r.y,oe),P.map.texture.name=Q.name+".shadowMap",P.camera.updateProjectionMatrix()}t.setRenderTarget(P.map),t.clear();const q=P.getViewportCount();for(let oe=0;oe<q;oe++){const we=P.getViewport(oe);o.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),k.viewport(o),P.updateMatrices(Q,oe),i=P.getFrustum(),M(A,R,P.camera,Q,this.type)}P.isPointLightShadow!==!0&&this.type===Fi&&m(P,R),P.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(T,E,D)};function m(S,A){const R=e.update(y);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Pr(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(A,null,R,d,y,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(A,null,R,p,y,null)}function _(S,A,R,T){let E=null;const D=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(D!==void 0)E=D;else if(E=R.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const k=E.uuid,H=A.uuid;let Y=c[k];Y===void 0&&(Y={},c[k]=Y);let Z=Y[H];Z===void 0&&(Z=E.clone(),Y[H]=Z,A.addEventListener("dispose",b)),E=Z}if(E.visible=A.visible,E.wireframe=A.wireframe,T===Fi?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:f[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,R.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const k=t.properties.get(E);k.light=R}return E}function M(S,A,R,T,E){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&E===Fi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);const H=e.update(S),Y=S.material;if(Array.isArray(Y)){const Z=H.groups;for(let X=0,Q=Z.length;X<Q;X++){const P=Z[X],W=Y[P.materialIndex];if(W&&W.visible){const q=_(S,W,T,E);S.onBeforeShadow(t,S,A,R,H,q,P),t.renderBufferDirect(R,null,H,q,S,P),S.onAfterShadow(t,S,A,R,H,q,P)}}}else if(Y.visible){const Z=_(S,Y,T,E);S.onBeforeShadow(t,S,A,R,H,Z,null),t.renderBufferDirect(R,null,H,Z,S,null),S.onAfterShadow(t,S,A,R,H,Z,null)}}const k=S.children;for(let H=0,Y=k.length;H<Y;H++)M(k[H],A,R,T,E)}function b(S){S.target.removeEventListener("dispose",b);for(const R in c){const T=c[R],E=S.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const NR={[ah]:lh,[ch]:dh,[uh]:hh,[vo]:fh,[lh]:ah,[dh]:ch,[hh]:uh,[fh]:vo};function UR(t,e){function n(){let N=!1;const de=new Dt;let le=null;const ce=new Dt(0,0,0,0);return{setMask:function(re){le!==re&&!N&&(t.colorMask(re,re,re,re),le=re)},setLocked:function(re){N=re},setClear:function(re,ee,Ee,Ve,pt){pt===!0&&(re*=Ve,ee*=Ve,Ee*=Ve),de.set(re,ee,Ee,Ve),ce.equals(de)===!1&&(t.clearColor(re,ee,Ee,Ve),ce.copy(de))},reset:function(){N=!1,le=null,ce.set(-1,0,0,0)}}}function i(){let N=!1,de=!1,le=null,ce=null,re=null;return{setReversed:function(ee){if(de!==ee){const Ee=e.get("EXT_clip_control");ee?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),de=ee;const Ve=re;re=null,this.setClear(Ve)}},getReversed:function(){return de},setTest:function(ee){ee?K(t.DEPTH_TEST):he(t.DEPTH_TEST)},setMask:function(ee){le!==ee&&!N&&(t.depthMask(ee),le=ee)},setFunc:function(ee){if(de&&(ee=NR[ee]),ce!==ee){switch(ee){case ah:t.depthFunc(t.NEVER);break;case lh:t.depthFunc(t.ALWAYS);break;case ch:t.depthFunc(t.LESS);break;case vo:t.depthFunc(t.LEQUAL);break;case uh:t.depthFunc(t.EQUAL);break;case fh:t.depthFunc(t.GEQUAL);break;case dh:t.depthFunc(t.GREATER);break;case hh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ce=ee}},setLocked:function(ee){N=ee},setClear:function(ee){re!==ee&&(de&&(ee=1-ee),t.clearDepth(ee),re=ee)},reset:function(){N=!1,le=null,ce=null,re=null,de=!1}}}function r(){let N=!1,de=null,le=null,ce=null,re=null,ee=null,Ee=null,Ve=null,pt=null;return{setTest:function(at){N||(at?K(t.STENCIL_TEST):he(t.STENCIL_TEST))},setMask:function(at){de!==at&&!N&&(t.stencilMask(at),de=at)},setFunc:function(at,hi,Zn){(le!==at||ce!==hi||re!==Zn)&&(t.stencilFunc(at,hi,Zn),le=at,ce=hi,re=Zn)},setOp:function(at,hi,Zn){(ee!==at||Ee!==hi||Ve!==Zn)&&(t.stencilOp(at,hi,Zn),ee=at,Ee=hi,Ve=Zn)},setLocked:function(at){N=at},setClear:function(at){pt!==at&&(t.clearStencil(at),pt=at)},reset:function(){N=!1,de=null,le=null,ce=null,re=null,ee=null,Ee=null,Ve=null,pt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],x=null,y=!1,g=null,h=null,m=null,_=null,M=null,b=null,S=null,A=new st(0,0,0),R=0,T=!1,E=null,D=null,k=null,H=null,Y=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Q=0;const P=t.getParameter(t.VERSION);P.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(P)[1]),X=Q>=1):P.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),X=Q>=2);let W=null,q={};const oe=t.getParameter(t.SCISSOR_BOX),we=t.getParameter(t.VIEWPORT),Pe=new Dt().fromArray(oe),Le=new Dt().fromArray(we);function Ze(N,de,le,ce){const re=new Uint8Array(4),ee=t.createTexture();t.bindTexture(N,ee),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ee=0;Ee<le;Ee++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,ce,0,t.RGBA,t.UNSIGNED_BYTE,re):t.texImage2D(de+Ee,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,re);return ee}const J={};J[t.TEXTURE_2D]=Ze(t.TEXTURE_2D,t.TEXTURE_2D,1),J[t.TEXTURE_CUBE_MAP]=Ze(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[t.TEXTURE_2D_ARRAY]=Ze(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),J[t.TEXTURE_3D]=Ze(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(t.DEPTH_TEST),o.setFunc(vo),qe(!1),Ke(Tg),K(t.CULL_FACE),dt(Gi);function K(N){u[N]!==!0&&(t.enable(N),u[N]=!0)}function he(N){u[N]!==!1&&(t.disable(N),u[N]=!1)}function Ne(N,de){return f[N]!==de?(t.bindFramebuffer(N,de),f[N]=de,N===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=de),N===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=de),!0):!1}function Te(N,de){let le=p,ce=!1;if(N){le=d.get(de),le===void 0&&(le=[],d.set(de,le));const re=N.textures;if(le.length!==re.length||le[0]!==t.COLOR_ATTACHMENT0){for(let ee=0,Ee=re.length;ee<Ee;ee++)le[ee]=t.COLOR_ATTACHMENT0+ee;le.length=re.length,ce=!0}}else le[0]!==t.BACK&&(le[0]=t.BACK,ce=!0);ce&&t.drawBuffers(le)}function We(N){return x!==N?(t.useProgram(N),x=N,!0):!1}const xt={[Zr]:t.FUNC_ADD,[BT]:t.FUNC_SUBTRACT,[zT]:t.FUNC_REVERSE_SUBTRACT};xt[VT]=t.MIN,xt[HT]=t.MAX;const $e={[GT]:t.ZERO,[WT]:t.ONE,[jT]:t.SRC_COLOR,[sh]:t.SRC_ALPHA,[ZT]:t.SRC_ALPHA_SATURATE,[qT]:t.DST_COLOR,[$T]:t.DST_ALPHA,[XT]:t.ONE_MINUS_SRC_COLOR,[oh]:t.ONE_MINUS_SRC_ALPHA,[KT]:t.ONE_MINUS_DST_COLOR,[YT]:t.ONE_MINUS_DST_ALPHA,[QT]:t.CONSTANT_COLOR,[JT]:t.ONE_MINUS_CONSTANT_COLOR,[ew]:t.CONSTANT_ALPHA,[tw]:t.ONE_MINUS_CONSTANT_ALPHA};function dt(N,de,le,ce,re,ee,Ee,Ve,pt,at){if(N===Gi){y===!0&&(he(t.BLEND),y=!1);return}if(y===!1&&(K(t.BLEND),y=!0),N!==kT){if(N!==g||at!==T){if((h!==Zr||M!==Zr)&&(t.blendEquation(t.FUNC_ADD),h=Zr,M=Zr),at)switch(N){case ao:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case rh:t.blendFunc(t.ONE,t.ONE);break;case wg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ag:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Nt("WebGLState: Invalid blending: ",N);break}else switch(N){case ao:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case rh:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case wg:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ag:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",N);break}m=null,_=null,b=null,S=null,A.set(0,0,0),R=0,g=N,T=at}return}re=re||de,ee=ee||le,Ee=Ee||ce,(de!==h||re!==M)&&(t.blendEquationSeparate(xt[de],xt[re]),h=de,M=re),(le!==m||ce!==_||ee!==b||Ee!==S)&&(t.blendFuncSeparate($e[le],$e[ce],$e[ee],$e[Ee]),m=le,_=ce,b=ee,S=Ee),(Ve.equals(A)===!1||pt!==R)&&(t.blendColor(Ve.r,Ve.g,Ve.b,pt),A.copy(Ve),R=pt),g=N,T=!1}function L(N,de){N.side===Bi?he(t.CULL_FACE):K(t.CULL_FACE);let le=N.side===En;de&&(le=!le),qe(le),N.blending===ao&&N.transparent===!1?dt(Gi):dt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const ce=N.stencilWrite;a.setTest(ce),ce&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Se(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?K(t.SAMPLE_ALPHA_TO_COVERAGE):he(t.SAMPLE_ALPHA_TO_COVERAGE)}function qe(N){E!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),E=N)}function Ke(N){N!==UT?(K(t.CULL_FACE),N!==D&&(N===Tg?t.cullFace(t.BACK):N===FT?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):he(t.CULL_FACE),D=N}function tt(N){N!==k&&(X&&t.lineWidth(N),k=N)}function Se(N,de,le){N?(K(t.POLYGON_OFFSET_FILL),(H!==de||Y!==le)&&(t.polygonOffset(de,le),H=de,Y=le)):he(t.POLYGON_OFFSET_FILL)}function vt(N){N?K(t.SCISSOR_TEST):he(t.SCISSOR_TEST)}function Ce(N){N===void 0&&(N=t.TEXTURE0+Z-1),W!==N&&(t.activeTexture(N),W=N)}function Be(N,de,le){le===void 0&&(W===null?le=t.TEXTURE0+Z-1:le=W);let ce=q[le];ce===void 0&&(ce={type:void 0,texture:void 0},q[le]=ce),(ce.type!==N||ce.texture!==de)&&(W!==le&&(t.activeTexture(le),W=le),t.bindTexture(N,de||J[N]),ce.type=N,ce.texture=de)}function C(){const N=q[W];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function v(){try{t.compressedTexImage2D(...arguments)}catch(N){N("WebGLState:",N)}}function I(){try{t.compressedTexImage3D(...arguments)}catch(N){N("WebGLState:",N)}}function B(){try{t.texSubImage2D(...arguments)}catch(N){N("WebGLState:",N)}}function $(){try{t.texSubImage3D(...arguments)}catch(N){N("WebGLState:",N)}}function z(){try{t.compressedTexSubImage2D(...arguments)}catch(N){N("WebGLState:",N)}}function me(){try{t.compressedTexSubImage3D(...arguments)}catch(N){N("WebGLState:",N)}}function ue(){try{t.texStorage2D(...arguments)}catch(N){N("WebGLState:",N)}}function Ae(){try{t.texStorage3D(...arguments)}catch(N){N("WebGLState:",N)}}function Me(){try{t.texImage2D(...arguments)}catch(N){N("WebGLState:",N)}}function ne(){try{t.texImage3D(...arguments)}catch(N){N("WebGLState:",N)}}function ae(N){Pe.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Pe.copy(N))}function Fe(N){Le.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),Le.copy(N))}function Ie(N,de){let le=c.get(de);le===void 0&&(le=new WeakMap,c.set(de,le));let ce=le.get(N);ce===void 0&&(ce=t.getUniformBlockIndex(de,N.name),le.set(N,ce))}function ge(N,de){const ce=c.get(de).get(N);l.get(de)!==ce&&(t.uniformBlockBinding(de,ce,N.__bindingPointIndex),l.set(de,ce))}function ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},W=null,q={},f={},d=new WeakMap,p=[],x=null,y=!1,g=null,h=null,m=null,_=null,M=null,b=null,S=null,A=new st(0,0,0),R=0,T=!1,E=null,D=null,k=null,H=null,Y=null,Pe.set(0,0,t.canvas.width,t.canvas.height),Le.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:K,disable:he,bindFramebuffer:Ne,drawBuffers:Te,useProgram:We,setBlending:dt,setMaterial:L,setFlipSided:qe,setCullFace:Ke,setLineWidth:tt,setPolygonOffset:Se,setScissorTest:vt,activeTexture:Ce,bindTexture:Be,unbindTexture:C,compressedTexImage2D:v,compressedTexImage3D:I,texImage2D:Me,texImage3D:ne,updateUBOMapping:Ie,uniformBlockBinding:ge,texStorage2D:ue,texStorage3D:Ae,texSubImage2D:B,texSubImage3D:$,compressedTexSubImage2D:z,compressedTexSubImage3D:me,scissor:ae,viewport:Fe,reset:ze}}function FR(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,v){return p?new OffscreenCanvas(C,v):nu("canvas")}function y(C,v,I){let B=1;const $=Be(C);if(($.width>I||$.height>I)&&(B=I/Math.max($.width,$.height)),B<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const z=Math.floor(B*$.width),me=Math.floor(B*$.height);f===void 0&&(f=x(z,me));const ue=v?x(z,me):f;return ue.width=z,ue.height=me,ue.getContext("2d").drawImage(C,0,0,z,me),He("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+z+"x"+me+")."),ue}else return"data"in C&&He("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function g(C){return C.generateMipmaps}function h(C){t.generateMipmap(C)}function m(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(C,v,I,B,$=!1){if(C!==null){if(t[C]!==void 0)return t[C];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let z=v;if(v===t.RED&&(I===t.FLOAT&&(z=t.R32F),I===t.HALF_FLOAT&&(z=t.R16F),I===t.UNSIGNED_BYTE&&(z=t.R8)),v===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&(z=t.R8UI),I===t.UNSIGNED_SHORT&&(z=t.R16UI),I===t.UNSIGNED_INT&&(z=t.R32UI),I===t.BYTE&&(z=t.R8I),I===t.SHORT&&(z=t.R16I),I===t.INT&&(z=t.R32I)),v===t.RG&&(I===t.FLOAT&&(z=t.RG32F),I===t.HALF_FLOAT&&(z=t.RG16F),I===t.UNSIGNED_BYTE&&(z=t.RG8)),v===t.RG_INTEGER&&(I===t.UNSIGNED_BYTE&&(z=t.RG8UI),I===t.UNSIGNED_SHORT&&(z=t.RG16UI),I===t.UNSIGNED_INT&&(z=t.RG32UI),I===t.BYTE&&(z=t.RG8I),I===t.SHORT&&(z=t.RG16I),I===t.INT&&(z=t.RG32I)),v===t.RGB_INTEGER&&(I===t.UNSIGNED_BYTE&&(z=t.RGB8UI),I===t.UNSIGNED_SHORT&&(z=t.RGB16UI),I===t.UNSIGNED_INT&&(z=t.RGB32UI),I===t.BYTE&&(z=t.RGB8I),I===t.SHORT&&(z=t.RGB16I),I===t.INT&&(z=t.RGB32I)),v===t.RGBA_INTEGER&&(I===t.UNSIGNED_BYTE&&(z=t.RGBA8UI),I===t.UNSIGNED_SHORT&&(z=t.RGBA16UI),I===t.UNSIGNED_INT&&(z=t.RGBA32UI),I===t.BYTE&&(z=t.RGBA8I),I===t.SHORT&&(z=t.RGBA16I),I===t.INT&&(z=t.RGBA32I)),v===t.RGB&&(I===t.UNSIGNED_INT_5_9_9_9_REV&&(z=t.RGB9_E5),I===t.UNSIGNED_INT_10F_11F_11F_REV&&(z=t.R11F_G11F_B10F)),v===t.RGBA){const me=$?eu:rt.getTransfer(B);I===t.FLOAT&&(z=t.RGBA32F),I===t.HALF_FLOAT&&(z=t.RGBA16F),I===t.UNSIGNED_BYTE&&(z=me===ct?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT_4_4_4_4&&(z=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&(z=t.RGB5_A1)}return(z===t.R16F||z===t.R32F||z===t.RG16F||z===t.RG32F||z===t.RGBA16F||z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function M(C,v){let I;return C?v===null||v===gs||v===Ba?I=t.DEPTH24_STENCIL8:v===vi?I=t.DEPTH32F_STENCIL8:v===ka&&(I=t.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===gs||v===Ba?I=t.DEPTH_COMPONENT24:v===vi?I=t.DEPTH_COMPONENT32F:v===ka&&(I=t.DEPTH_COMPONENT16),I}function b(C,v){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Nn&&C.minFilter!==nn?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function S(C){const v=C.target;v.removeEventListener("dispose",S),R(v),v.isVideoTexture&&u.delete(v)}function A(C){const v=C.target;v.removeEventListener("dispose",A),E(v)}function R(C){const v=i.get(C);if(v.__webglInit===void 0)return;const I=C.source,B=d.get(I);if(B){const $=B[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&T(C),Object.keys(B).length===0&&d.delete(I)}i.remove(C)}function T(C){const v=i.get(C);t.deleteTexture(v.__webglTexture);const I=C.source,B=d.get(I);delete B[v.__cacheKey],o.memory.textures--}function E(C){const v=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(v.__webglFramebuffer[B]))for(let $=0;$<v.__webglFramebuffer[B].length;$++)t.deleteFramebuffer(v.__webglFramebuffer[B][$]);else t.deleteFramebuffer(v.__webglFramebuffer[B]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[B])}else{if(Array.isArray(v.__webglFramebuffer))for(let B=0;B<v.__webglFramebuffer.length;B++)t.deleteFramebuffer(v.__webglFramebuffer[B]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let B=0;B<v.__webglColorRenderbuffer.length;B++)v.__webglColorRenderbuffer[B]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[B]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const I=C.textures;for(let B=0,$=I.length;B<$;B++){const z=i.get(I[B]);z.__webglTexture&&(t.deleteTexture(z.__webglTexture),o.memory.textures--),i.remove(I[B])}i.remove(C)}let D=0;function k(){D=0}function H(){const C=D;return C>=r.maxTextures&&He("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),D+=1,C}function Y(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function Z(C,v){const I=i.get(C);if(C.isVideoTexture&&vt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&I.__version!==C.version){const B=C.image;if(B===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{J(I,C,v);return}}else C.isExternalTexture&&(I.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+v)}function X(C,v){const I=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&I.__version!==C.version){J(I,C,v);return}else C.isExternalTexture&&(I.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+v)}function Q(C,v){const I=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&I.__version!==C.version){J(I,C,v);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+v)}function P(C,v){const I=i.get(C);if(C.version>0&&I.__version!==C.version){K(I,C,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+v)}const W={[gh]:t.REPEAT,[Ln]:t.CLAMP_TO_EDGE,[xh]:t.MIRRORED_REPEAT},q={[Nn]:t.NEAREST,[fw]:t.NEAREST_MIPMAP_NEAREST,[Cl]:t.NEAREST_MIPMAP_LINEAR,[nn]:t.LINEAR,[df]:t.LINEAR_MIPMAP_NEAREST,[is]:t.LINEAR_MIPMAP_LINEAR},oe={[gw]:t.NEVER,[Mw]:t.ALWAYS,[xw]:t.LESS,[MS]:t.LEQUAL,[vw]:t.EQUAL,[Sw]:t.GEQUAL,[_w]:t.GREATER,[yw]:t.NOTEQUAL};function we(C,v){if(v.type===vi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===nn||v.magFilter===df||v.magFilter===Cl||v.magFilter===is||v.minFilter===nn||v.minFilter===df||v.minFilter===Cl||v.minFilter===is)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,W[v.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,W[v.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,W[v.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,q[v.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,q[v.minFilter]),v.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,oe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Nn||v.minFilter!==Cl&&v.minFilter!==is||v.type===vi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Pe(C,v){let I=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",S));const B=v.source;let $=d.get(B);$===void 0&&($={},d.set(B,$));const z=Y(v);if(z!==C.__cacheKey){$[z]===void 0&&($[z]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,I=!0),$[z].usedTimes++;const me=$[C.__cacheKey];me!==void 0&&($[C.__cacheKey].usedTimes--,me.usedTimes===0&&T(v)),C.__cacheKey=z,C.__webglTexture=$[z].texture}return I}function Le(C,v,I){return Math.floor(Math.floor(C/I)/v)}function Ze(C,v,I,B){const z=C.updateRanges;if(z.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,v.width,v.height,I,B,v.data);else{z.sort((ne,ae)=>ne.start-ae.start);let me=0;for(let ne=1;ne<z.length;ne++){const ae=z[me],Fe=z[ne],Ie=ae.start+ae.count,ge=Le(Fe.start,v.width,4),ze=Le(ae.start,v.width,4);Fe.start<=Ie+1&&ge===ze&&Le(Fe.start+Fe.count-1,v.width,4)===ge?ae.count=Math.max(ae.count,Fe.start+Fe.count-ae.start):(++me,z[me]=Fe)}z.length=me+1;const ue=t.getParameter(t.UNPACK_ROW_LENGTH),Ae=t.getParameter(t.UNPACK_SKIP_PIXELS),Me=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,v.width);for(let ne=0,ae=z.length;ne<ae;ne++){const Fe=z[ne],Ie=Math.floor(Fe.start/4),ge=Math.ceil(Fe.count/4),ze=Ie%v.width,N=Math.floor(Ie/v.width),de=ge,le=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,ze,N,de,le,I,B,v.data)}C.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ue),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ae),t.pixelStorei(t.UNPACK_SKIP_ROWS,Me)}}function J(C,v,I){let B=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(B=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(B=t.TEXTURE_3D);const $=Pe(C,v),z=v.source;n.bindTexture(B,C.__webglTexture,t.TEXTURE0+I);const me=i.get(z);if(z.version!==me.__version||$===!0){n.activeTexture(t.TEXTURE0+I);const ue=rt.getPrimaries(rt.workingColorSpace),Ae=v.colorSpace===pr?null:rt.getPrimaries(v.colorSpace),Me=v.colorSpace===pr||ue===Ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let ne=y(v.image,!1,r.maxTextureSize);ne=Ce(v,ne);const ae=s.convert(v.format,v.colorSpace),Fe=s.convert(v.type);let Ie=_(v.internalFormat,ae,Fe,v.colorSpace,v.isVideoTexture);we(B,v);let ge;const ze=v.mipmaps,N=v.isVideoTexture!==!0,de=me.__version===void 0||$===!0,le=z.dataReady,ce=b(v,ne);if(v.isDepthTexture)Ie=M(v.format===Va,v.type),de&&(N?n.texStorage2D(t.TEXTURE_2D,1,Ie,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,Ie,ne.width,ne.height,0,ae,Fe,null));else if(v.isDataTexture)if(ze.length>0){N&&de&&n.texStorage2D(t.TEXTURE_2D,ce,Ie,ze[0].width,ze[0].height);for(let re=0,ee=ze.length;re<ee;re++)ge=ze[re],N?le&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,ge.width,ge.height,ae,Fe,ge.data):n.texImage2D(t.TEXTURE_2D,re,Ie,ge.width,ge.height,0,ae,Fe,ge.data);v.generateMipmaps=!1}else N?(de&&n.texStorage2D(t.TEXTURE_2D,ce,Ie,ne.width,ne.height),le&&Ze(v,ne,ae,Fe)):n.texImage2D(t.TEXTURE_2D,0,Ie,ne.width,ne.height,0,ae,Fe,ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){N&&de&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,Ie,ze[0].width,ze[0].height,ne.depth);for(let re=0,ee=ze.length;re<ee;re++)if(ge=ze[re],v.format!==Xn)if(ae!==null)if(N){if(le)if(v.layerUpdates.size>0){const Ee=ex(ge.width,ge.height,v.format,v.type);for(const Ve of v.layerUpdates){const pt=ge.data.subarray(Ve*Ee/ge.data.BYTES_PER_ELEMENT,(Ve+1)*Ee/ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,Ve,ge.width,ge.height,1,ae,pt)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,ne.depth,ae,ge.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,re,Ie,ge.width,ge.height,ne.depth,0,ge.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?le&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,ne.depth,ae,Fe,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,re,Ie,ge.width,ge.height,ne.depth,0,ae,Fe,ge.data)}else{N&&de&&n.texStorage2D(t.TEXTURE_2D,ce,Ie,ze[0].width,ze[0].height);for(let re=0,ee=ze.length;re<ee;re++)ge=ze[re],v.format!==Xn?ae!==null?N?le&&n.compressedTexSubImage2D(t.TEXTURE_2D,re,0,0,ge.width,ge.height,ae,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,re,Ie,ge.width,ge.height,0,ge.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?le&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,ge.width,ge.height,ae,Fe,ge.data):n.texImage2D(t.TEXTURE_2D,re,Ie,ge.width,ge.height,0,ae,Fe,ge.data)}else if(v.isDataArrayTexture)if(N){if(de&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,Ie,ne.width,ne.height,ne.depth),le)if(v.layerUpdates.size>0){const re=ex(ne.width,ne.height,v.format,v.type);for(const ee of v.layerUpdates){const Ee=ne.data.subarray(ee*re/ne.data.BYTES_PER_ELEMENT,(ee+1)*re/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,ne.width,ne.height,1,ae,Fe,Ee)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ae,Fe,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,ne.width,ne.height,ne.depth,0,ae,Fe,ne.data);else if(v.isData3DTexture)N?(de&&n.texStorage3D(t.TEXTURE_3D,ce,Ie,ne.width,ne.height,ne.depth),le&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ae,Fe,ne.data)):n.texImage3D(t.TEXTURE_3D,0,Ie,ne.width,ne.height,ne.depth,0,ae,Fe,ne.data);else if(v.isFramebufferTexture){if(de)if(N)n.texStorage2D(t.TEXTURE_2D,ce,Ie,ne.width,ne.height);else{let re=ne.width,ee=ne.height;for(let Ee=0;Ee<ce;Ee++)n.texImage2D(t.TEXTURE_2D,Ee,Ie,re,ee,0,ae,Fe,null),re>>=1,ee>>=1}}else if(ze.length>0){if(N&&de){const re=Be(ze[0]);n.texStorage2D(t.TEXTURE_2D,ce,Ie,re.width,re.height)}for(let re=0,ee=ze.length;re<ee;re++)ge=ze[re],N?le&&n.texSubImage2D(t.TEXTURE_2D,re,0,0,ae,Fe,ge):n.texImage2D(t.TEXTURE_2D,re,Ie,ae,Fe,ge);v.generateMipmaps=!1}else if(N){if(de){const re=Be(ne);n.texStorage2D(t.TEXTURE_2D,ce,Ie,re.width,re.height)}le&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae,Fe,ne)}else n.texImage2D(t.TEXTURE_2D,0,Ie,ae,Fe,ne);g(v)&&h(B),me.__version=z.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function K(C,v,I){if(v.image.length!==6)return;const B=Pe(C,v),$=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+I);const z=i.get($);if($.version!==z.__version||B===!0){n.activeTexture(t.TEXTURE0+I);const me=rt.getPrimaries(rt.workingColorSpace),ue=v.colorSpace===pr?null:rt.getPrimaries(v.colorSpace),Ae=v.colorSpace===pr||me===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Me=v.isCompressedTexture||v.image[0].isCompressedTexture,ne=v.image[0]&&v.image[0].isDataTexture,ae=[];for(let ee=0;ee<6;ee++)!Me&&!ne?ae[ee]=y(v.image[ee],!0,r.maxCubemapSize):ae[ee]=ne?v.image[ee].image:v.image[ee],ae[ee]=Ce(v,ae[ee]);const Fe=ae[0],Ie=s.convert(v.format,v.colorSpace),ge=s.convert(v.type),ze=_(v.internalFormat,Ie,ge,v.colorSpace),N=v.isVideoTexture!==!0,de=z.__version===void 0||B===!0,le=$.dataReady;let ce=b(v,Fe);we(t.TEXTURE_CUBE_MAP,v);let re;if(Me){N&&de&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,ze,Fe.width,Fe.height);for(let ee=0;ee<6;ee++){re=ae[ee].mipmaps;for(let Ee=0;Ee<re.length;Ee++){const Ve=re[Ee];v.format!==Xn?Ie!==null?N?le&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee,0,0,Ve.width,Ve.height,Ie,Ve.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee,ze,Ve.width,Ve.height,0,Ve.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee,0,0,Ve.width,Ve.height,Ie,ge,Ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee,ze,Ve.width,Ve.height,0,Ie,ge,Ve.data)}}}else{if(re=v.mipmaps,N&&de){re.length>0&&ce++;const ee=Be(ae[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,ze,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ne){N?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ae[ee].width,ae[ee].height,Ie,ge,ae[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ze,ae[ee].width,ae[ee].height,0,Ie,ge,ae[ee].data);for(let Ee=0;Ee<re.length;Ee++){const pt=re[Ee].image[ee].image;N?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee+1,0,0,pt.width,pt.height,Ie,ge,pt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee+1,ze,pt.width,pt.height,0,Ie,ge,pt.data)}}else{N?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ie,ge,ae[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ze,Ie,ge,ae[ee]);for(let Ee=0;Ee<re.length;Ee++){const Ve=re[Ee];N?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee+1,0,0,Ie,ge,Ve.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee+1,ze,Ie,ge,Ve.image[ee])}}}g(v)&&h(t.TEXTURE_CUBE_MAP),z.__version=$.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function he(C,v,I,B,$,z){const me=s.convert(I.format,I.colorSpace),ue=s.convert(I.type),Ae=_(I.internalFormat,me,ue,I.colorSpace),Me=i.get(v),ne=i.get(I);if(ne.__renderTarget=v,!Me.__hasExternalTextures){const ae=Math.max(1,v.width>>z),Fe=Math.max(1,v.height>>z);$===t.TEXTURE_3D||$===t.TEXTURE_2D_ARRAY?n.texImage3D($,z,Ae,ae,Fe,v.depth,0,me,ue,null):n.texImage2D($,z,Ae,ae,Fe,0,me,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Se(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,B,$,ne.__webglTexture,0,tt(v)):($===t.TEXTURE_2D||$>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,B,$,ne.__webglTexture,z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(C,v,I){if(t.bindRenderbuffer(t.RENDERBUFFER,C),v.depthBuffer){const B=v.depthTexture,$=B&&B.isDepthTexture?B.type:null,z=M(v.stencilBuffer,$),me=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=tt(v);Se(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,z,v.width,v.height):I?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,z,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,z,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,me,t.RENDERBUFFER,C)}else{const B=v.textures;for(let $=0;$<B.length;$++){const z=B[$],me=s.convert(z.format,z.colorSpace),ue=s.convert(z.type),Ae=_(z.internalFormat,me,ue,z.colorSpace),Me=tt(v);I&&Se(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,Ae,v.width,v.height):Se(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Me,Ae,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,Ae,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Te(C,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const B=i.get(v.depthTexture);B.__renderTarget=v,(!B.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const $=B.__webglTexture,z=tt(v);if(v.depthTexture.format===za)Se(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0,z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0);else if(v.depthTexture.format===Va)Se(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0,z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function We(C){const v=i.get(C),I=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){const B=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),B){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,B.removeEventListener("dispose",$)};B.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=B}if(C.depthTexture&&!v.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const B=C.texture.mipmaps;B&&B.length>0?Te(v.__webglFramebuffer[0],C):Te(v.__webglFramebuffer,C)}else if(I){v.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[B]),v.__webglDepthbuffer[B]===void 0)v.__webglDepthbuffer[B]=t.createRenderbuffer(),Ne(v.__webglDepthbuffer[B],C,!1);else{const $=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer[B];t.bindRenderbuffer(t.RENDERBUFFER,z),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,z)}}else{const B=C.texture.mipmaps;if(B&&B.length>0?n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),Ne(v.__webglDepthbuffer,C,!1);else{const $=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,z=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,z),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,z)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function xt(C,v,I){const B=i.get(C);v!==void 0&&he(B.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&We(C)}function $e(C){const v=C.texture,I=i.get(C),B=i.get(v);C.addEventListener("dispose",A);const $=C.textures,z=C.isWebGLCubeRenderTarget===!0,me=$.length>1;if(me||(B.__webglTexture===void 0&&(B.__webglTexture=t.createTexture()),B.__version=v.version,o.memory.textures++),z){I.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer[ue]=[];for(let Ae=0;Ae<v.mipmaps.length;Ae++)I.__webglFramebuffer[ue][Ae]=t.createFramebuffer()}else I.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer=[];for(let ue=0;ue<v.mipmaps.length;ue++)I.__webglFramebuffer[ue]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(me)for(let ue=0,Ae=$.length;ue<Ae;ue++){const Me=i.get($[ue]);Me.__webglTexture===void 0&&(Me.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&Se(C)===!1){I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ue=0;ue<$.length;ue++){const Ae=$[ue];I.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[ue]);const Me=s.convert(Ae.format,Ae.colorSpace),ne=s.convert(Ae.type),ae=_(Ae.internalFormat,Me,ne,Ae.colorSpace,C.isXRRenderTarget===!0),Fe=tt(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,ae,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,I.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),Ne(I.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(z){n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture),we(t.TEXTURE_CUBE_MAP,v);for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ae=0;Ae<v.mipmaps.length;Ae++)he(I.__webglFramebuffer[ue][Ae],C,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ae);else he(I.__webglFramebuffer[ue],C,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(v)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(me){for(let ue=0,Ae=$.length;ue<Ae;ue++){const Me=$[ue],ne=i.get(Me);let ae=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ae=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ae,ne.__webglTexture),we(ae,Me),he(I.__webglFramebuffer,C,Me,t.COLOR_ATTACHMENT0+ue,ae,0),g(Me)&&h(ae)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ue=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,B.__webglTexture),we(ue,v),v.mipmaps&&v.mipmaps.length>0)for(let Ae=0;Ae<v.mipmaps.length;Ae++)he(I.__webglFramebuffer[Ae],C,v,t.COLOR_ATTACHMENT0,ue,Ae);else he(I.__webglFramebuffer,C,v,t.COLOR_ATTACHMENT0,ue,0);g(v)&&h(ue),n.unbindTexture()}C.depthBuffer&&We(C)}function dt(C){const v=C.textures;for(let I=0,B=v.length;I<B;I++){const $=v[I];if(g($)){const z=m(C),me=i.get($).__webglTexture;n.bindTexture(z,me),h(z),n.unbindTexture()}}}const L=[],qe=[];function Ke(C){if(C.samples>0){if(Se(C)===!1){const v=C.textures,I=C.width,B=C.height;let $=t.COLOR_BUFFER_BIT;const z=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=i.get(C),ue=v.length>1;if(ue)for(let Me=0;Me<v.length;Me++)n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const Ae=C.texture.mipmaps;Ae&&Ae.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Me=0;Me<v.length;Me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,me.__webglColorRenderbuffer[Me]);const ne=i.get(v[Me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ne,0)}t.blitFramebuffer(0,0,I,B,0,0,I,B,$,t.NEAREST),l===!0&&(L.length=0,qe.length=0,L.push(t.COLOR_ATTACHMENT0+Me),C.depthBuffer&&C.resolveDepthBuffer===!1&&(L.push(z),qe.push(z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,qe)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,L))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let Me=0;Me<v.length;Me++){n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,me.__webglColorRenderbuffer[Me]);const ne=i.get(v[Me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,ne,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const v=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function tt(C){return Math.min(r.maxSamples,C.samples)}function Se(C){const v=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function vt(C){const v=o.render.frame;u.get(C)!==v&&(u.set(C,v),C.update())}function Ce(C,v){const I=C.colorSpace,B=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||I!==So&&I!==pr&&(rt.getTransfer(I)===ct?(B!==Xn||$!==Ki)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",I)),v}function Be(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=k,this.setTexture2D=Z,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=P,this.rebindTextures=xt,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Se}function OR(t,e){function n(i,r=pr){let s;const o=rt.getTransfer(r);if(i===Ki)return t.UNSIGNED_BYTE;if(i===mm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===gm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===xS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===vS)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===mS)return t.BYTE;if(i===gS)return t.SHORT;if(i===ka)return t.UNSIGNED_SHORT;if(i===pm)return t.INT;if(i===gs)return t.UNSIGNED_INT;if(i===vi)return t.FLOAT;if(i===_s)return t.HALF_FLOAT;if(i===_S)return t.ALPHA;if(i===yS)return t.RGB;if(i===Xn)return t.RGBA;if(i===za)return t.DEPTH_COMPONENT;if(i===Va)return t.DEPTH_STENCIL;if(i===SS)return t.RED;if(i===xm)return t.RED_INTEGER;if(i===vm)return t.RG;if(i===_m)return t.RG_INTEGER;if(i===ym)return t.RGBA_INTEGER;if(i===_c||i===yc||i===Sc||i===Mc)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===_c)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===_c)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Mc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vh||i===_h||i===yh||i===Sh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===vh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_h)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Mh||i===Eh||i===bh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Mh||i===Eh)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===bh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Th||i===wh||i===Ah||i===Ch||i===Rh||i===Ph||i===Dh||i===Lh||i===Ih||i===Nh||i===Uh||i===Fh||i===Oh||i===kh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Th)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ah)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ch)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Rh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ph)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Lh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ih)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Nh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Uh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Oh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kh)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Bh||i===zh||i===Vh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Bh)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hh||i===Gh||i===Wh||i===jh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Hh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Gh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ba?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const kR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BR=`
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

}`;class zR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new FS(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ti({vertexShader:kR,fragmentShader:BR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new fi(new ls(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VR extends Co{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,x=null;const y=typeof XRWebGLBinding<"u",g=new zR,h={},m=n.getContextAttributes();let _=null,M=null;const b=[],S=[],A=new Ge;let R=null;const T=new oi;T.viewport=new Dt;const E=new oi;E.viewport=new Dt;const D=[T,E],k=new s3;let H=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let K=b[J];return K===void 0&&(K=new Uf,b[J]=K),K.getTargetRaySpace()},this.getControllerGrip=function(J){let K=b[J];return K===void 0&&(K=new Uf,b[J]=K),K.getGripSpace()},this.getHand=function(J){let K=b[J];return K===void 0&&(K=new Uf,b[J]=K),K.getHandSpace()};function Z(J){const K=S.indexOf(J.inputSource);if(K===-1)return;const he=b[K];he!==void 0&&(he.update(J.inputSource,J.frame,c||o),he.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",Q);for(let J=0;J<b.length;J++){const K=S[J];K!==null&&(S[J]=null,b[J].disconnect(K))}H=null,Y=null,g.reset();for(const J in h)delete h[J];e.setRenderTarget(_),p=null,d=null,f=null,r=null,M=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",X),r.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Ne=null,Te=null;m.depth&&(Te=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,he=m.stencil?Va:za,Ne=m.stencil?Ba:gs);const We={colorFormat:n.RGBA8,depthFormat:Te,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(We),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Pr(d.textureWidth,d.textureHeight,{format:Xn,type:Ki,depthTexture:new US(d.textureWidth,d.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const he={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,he),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Pr(p.framebufferWidth,p.framebufferHeight,{format:Xn,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Q(J){for(let K=0;K<J.removed.length;K++){const he=J.removed[K],Ne=S.indexOf(he);Ne>=0&&(S[Ne]=null,b[Ne].disconnect(he))}for(let K=0;K<J.added.length;K++){const he=J.added[K];let Ne=S.indexOf(he);if(Ne===-1){for(let We=0;We<b.length;We++)if(We>=S.length){S.push(he),Ne=We;break}else if(S[We]===null){S[We]=he,Ne=We;break}if(Ne===-1)break}const Te=b[Ne];Te&&Te.connect(he)}}const P=new j,W=new j;function q(J,K,he){P.setFromMatrixPosition(K.matrixWorld),W.setFromMatrixPosition(he.matrixWorld);const Ne=P.distanceTo(W),Te=K.projectionMatrix.elements,We=he.projectionMatrix.elements,xt=Te[14]/(Te[10]-1),$e=Te[14]/(Te[10]+1),dt=(Te[9]+1)/Te[5],L=(Te[9]-1)/Te[5],qe=(Te[8]-1)/Te[0],Ke=(We[8]+1)/We[0],tt=xt*qe,Se=xt*Ke,vt=Ne/(-qe+Ke),Ce=vt*-qe;if(K.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ce),J.translateZ(vt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Te[10]===-1)J.projectionMatrix.copy(K.projectionMatrix),J.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Be=xt+vt,C=$e+vt,v=tt-Ce,I=Se+(Ne-Ce),B=dt*$e/C*Be,$=L*$e/C*Be;J.projectionMatrix.makePerspective(v,I,B,$,Be,C),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function oe(J,K){K===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(K.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let K=J.near,he=J.far;g.texture!==null&&(g.depthNear>0&&(K=g.depthNear),g.depthFar>0&&(he=g.depthFar)),k.near=E.near=T.near=K,k.far=E.far=T.far=he,(H!==k.near||Y!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),H=k.near,Y=k.far),k.layers.mask=J.layers.mask|6,T.layers.mask=k.layers.mask&3,E.layers.mask=k.layers.mask&5;const Ne=J.parent,Te=k.cameras;oe(k,Ne);for(let We=0;We<Te.length;We++)oe(Te[We],Ne);Te.length===2?q(k,T,E):k.projectionMatrix.copy(T.projectionMatrix),we(J,k,Ne)};function we(J,K,he){he===null?J.matrix.copy(K.matrixWorld):(J.matrix.copy(he.matrixWorld),J.matrix.invert(),J.matrix.multiply(K.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(K.projectionMatrix),J.projectionMatrixInverse.copy(K.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Xh*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(J){return h[J]};let Pe=null;function Le(J,K){if(u=K.getViewerPose(c||o),x=K,u!==null){const he=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Ne=!1;he.length!==k.cameras.length&&(k.cameras.length=0,Ne=!0);for(let $e=0;$e<he.length;$e++){const dt=he[$e];let L=null;if(p!==null)L=p.getViewport(dt);else{const Ke=f.getViewSubImage(d,dt);L=Ke.viewport,$e===0&&(e.setRenderTargetTextures(M,Ke.colorTexture,Ke.depthStencilTexture),e.setRenderTarget(M))}let qe=D[$e];qe===void 0&&(qe=new oi,qe.layers.enable($e),qe.viewport=new Dt,D[$e]=qe),qe.matrix.fromArray(dt.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(dt.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(L.x,L.y,L.width,L.height),$e===0&&(k.matrix.copy(qe.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ne===!0&&k.cameras.push(qe)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){f=i.getBinding();const $e=f.getDepthInformation(he[0]);$e&&$e.isValid&&$e.texture&&g.init($e,r.renderState)}if(Te&&Te.includes("camera-access")&&y){e.state.unbindTexture(),f=i.getBinding();for(let $e=0;$e<he.length;$e++){const dt=he[$e].camera;if(dt){let L=h[dt];L||(L=new FS,h[dt]=L);const qe=f.getCameraImage(dt);L.sourceTexture=qe}}}}for(let he=0;he<b.length;he++){const Ne=S[he],Te=b[he];Ne!==null&&Te!==void 0&&Te.update(Ne,K,c||o)}Pe&&Pe(J,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),x=null}const Ze=new OS;Ze.setAnimationLoop(Le),this.setAnimationLoop=function(J){Pe=J},this.dispose=function(){}}}const Wr=new Zi,HR=new kt;function GR(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,DS(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,m,_,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(g,h):h.isMeshToonMaterial?(s(g,h),f(g,h)):h.isMeshPhongMaterial?(s(g,h),u(g,h)):h.isMeshStandardMaterial?(s(g,h),d(g,h),h.isMeshPhysicalMaterial&&p(g,h,M)):h.isMeshMatcapMaterial?(s(g,h),x(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),y(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,m,_):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===En&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===En&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const m=e.get(h),_=m.envMap,M=m.envMapRotation;_&&(g.envMap.value=_,Wr.copy(M),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),g.envMapRotation.value.setFromMatrix4(HR.makeRotationFromEuler(Wr)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,m,_){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*m,g.scale.value=_*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function f(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function d(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,m){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===En&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,h){h.matcap&&(g.matcap.value=h.matcap)}function y(g,h){const m=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function WR(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,_){const M=_.program;i.uniformBlockBinding(m,M)}function c(m,_){let M=r[m.id];M===void 0&&(x(m),M=u(m),r[m.id]=M,m.addEventListener("dispose",g));const b=_.program;i.updateUBOMapping(m,b);const S=e.render.frame;s[m.id]!==S&&(d(m),s[m.id]=S)}function u(m){const _=f();m.__bindingPointIndex=_;const M=t.createBuffer(),b=m.__size,S=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,b,S),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,M),M}function f(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(m){const _=r[m.id],M=m.uniforms,b=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let S=0,A=M.length;S<A;S++){const R=Array.isArray(M[S])?M[S]:[M[S]];for(let T=0,E=R.length;T<E;T++){const D=R[T];if(p(D,S,T,b)===!0){const k=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let Y=0;for(let Z=0;Z<H.length;Z++){const X=H[Z],Q=y(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,k+Y,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,Y),Y+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,_,M,b){const S=m.value,A=_+"_"+M;if(b[A]===void 0)return typeof S=="number"||typeof S=="boolean"?b[A]=S:b[A]=S.clone(),!0;{const R=b[A];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return b[A]=S,!0}else if(R.equals(S)===!1)return R.copy(S),!0}return!1}function x(m){const _=m.uniforms;let M=0;const b=16;for(let A=0,R=_.length;A<R;A++){const T=Array.isArray(_[A])?_[A]:[_[A]];for(let E=0,D=T.length;E<D;E++){const k=T[E],H=Array.isArray(k.value)?k.value:[k.value];for(let Y=0,Z=H.length;Y<Z;Y++){const X=H[Y],Q=y(X),P=M%b,W=P%Q.boundary,q=P+W;M+=W,q!==0&&b-q<Q.storage&&(M+=b-q),k.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=M,M+=Q.storage}}}const S=M%b;return S>0&&(M+=b-S),m.__size=M,m.__cache={},this}function y(m){const _={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=48,_.storage=48):m.isMatrix4?(_.boundary=64,_.storage=64):m.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):He("WebGLRenderer: Unsupported uniform value type.",m),_}function g(m){const _=m.target;_.removeEventListener("dispose",g);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}const jR=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Ni=null;function XR(){return Ni===null&&(Ni=new IS(jR,32,32,vm,_s),Ni.minFilter=nn,Ni.magFilter=nn,Ni.wrapS=Ln,Ni.wrapT=Ln,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}class $R{constructor(e={}){const{canvas:n=Ew(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const x=new Set([ym,_m,xm]),y=new Set([Ki,gs,ka,Ba,mm,gm]),g=new Uint32Array(4),h=new Int32Array(4);let m=null,_=null;const M=[],b=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let A=!1;this._outputColorSpace=Hn;let R=0,T=0,E=null,D=-1,k=null;const H=new Dt,Y=new Dt;let Z=null;const X=new st(0);let Q=0,P=n.width,W=n.height,q=1,oe=null,we=null;const Pe=new Dt(0,0,P,W),Le=new Dt(0,0,P,W);let Ze=!1;const J=new NS;let K=!1,he=!1;const Ne=new kt,Te=new j,We=new Dt,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function dt(){return E===null?q:1}let L=i;function qe(w,U){return n.getContext(w,U)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${hm}`),n.addEventListener("webglcontextlost",re,!1),n.addEventListener("webglcontextrestored",ee,!1),n.addEventListener("webglcontextcreationerror",Ee,!1),L===null){const U="webgl2";if(L=qe(U,w),L===null)throw qe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw w("WebGLRenderer: "+w.message),w}let Ke,tt,Se,vt,Ce,Be,C,v,I,B,$,z,me,ue,Ae,Me,ne,ae,Fe,Ie,ge,ze,N,de;function le(){Ke=new tC(L),Ke.init(),ze=new OR(L,Ke),tt=new XA(L,Ke,e,ze),Se=new UR(L,Ke),tt.reversedDepthBuffer&&d&&Se.buffers.depth.setReversed(!0),vt=new rC(L),Ce=new MR,Be=new FR(L,Ke,Se,Ce,tt,ze,vt),C=new YA(S),v=new eC(S),I=new l3(L),N=new WA(L,I),B=new nC(L,I,vt,N),$=new oC(L,B,I,vt),Fe=new sC(L,tt,Be),Me=new $A(Ce),z=new SR(S,C,v,Ke,tt,N,Me),me=new GR(S,Ce),ue=new bR,Ae=new PR(Ke),ae=new GA(S,C,v,Se,$,p,l),ne=new IR(S,$,tt),de=new WR(L,vt,tt,Se),Ie=new jA(L,Ke,vt),ge=new iC(L,Ke,vt),vt.programs=z.programs,S.capabilities=tt,S.extensions=Ke,S.properties=Ce,S.renderLists=ue,S.shadowMap=ne,S.state=Se,S.info=vt}le();const ce=new VR(S,L);this.xr=ce,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=Ke.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ke.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(P,W,!1))},this.getSize=function(w){return w.set(P,W)},this.setSize=function(w,U,V=!0){if(ce.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}P=w,W=U,n.width=Math.floor(w*q),n.height=Math.floor(U*q),V===!0&&(n.style.width=w+"px",n.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(P*q,W*q).floor()},this.setDrawingBufferSize=function(w,U,V){P=w,W=U,q=V,n.width=Math.floor(w*V),n.height=Math.floor(U*V),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(H)},this.getViewport=function(w){return w.copy(Pe)},this.setViewport=function(w,U,V,G){w.isVector4?Pe.set(w.x,w.y,w.z,w.w):Pe.set(w,U,V,G),Se.viewport(H.copy(Pe).multiplyScalar(q).round())},this.getScissor=function(w){return w.copy(Le)},this.setScissor=function(w,U,V,G){w.isVector4?Le.set(w.x,w.y,w.z,w.w):Le.set(w,U,V,G),Se.scissor(Y.copy(Le).multiplyScalar(q).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(w){Se.setScissorTest(Ze=w)},this.setOpaqueSort=function(w){oe=w},this.setTransparentSort=function(w){we=w},this.getClearColor=function(w){return w.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,V=!0){let G=0;if(w){let F=!1;if(E!==null){const se=E.texture.format;F=x.has(se)}if(F){const se=E.texture.type,pe=y.has(se),be=ae.getClearColor(),ve=ae.getClearAlpha(),Ue=be.r,ke=be.g,Re=be.b;pe?(g[0]=Ue,g[1]=ke,g[2]=Re,g[3]=ve,L.clearBufferuiv(L.COLOR,0,g)):(h[0]=Ue,h[1]=ke,h[2]=Re,h[3]=ve,L.clearBufferiv(L.COLOR,0,h))}else G|=L.COLOR_BUFFER_BIT}U&&(G|=L.DEPTH_BUFFER_BIT),V&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",re,!1),n.removeEventListener("webglcontextrestored",ee,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),ae.dispose(),ue.dispose(),Ae.dispose(),Ce.dispose(),C.dispose(),v.dispose(),$.dispose(),N.dispose(),de.dispose(),z.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",o0),ce.removeEventListener("sessionend",a0),Or.stop()};function re(w){w.preventDefault(),Lg("WebGLRenderer: Context Lost."),A=!0}function ee(){Lg("WebGLRenderer: Context Restored."),A=!1;const w=vt.autoReset,U=ne.enabled,V=ne.autoUpdate,G=ne.needsUpdate,F=ne.type;le(),vt.autoReset=w,ne.enabled=U,ne.autoUpdate=V,ne.needsUpdate=G,ne.type=F}function Ee(w){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ve(w){const U=w.target;U.removeEventListener("dispose",Ve),pt(U)}function pt(w){at(w),Ce.remove(w)}function at(w){const U=Ce.get(w).programs;U!==void 0&&(U.forEach(function(V){z.releaseProgram(V)}),w.isShaderMaterial&&z.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,V,G,F,se){U===null&&(U=xt);const pe=F.isMesh&&F.matrixWorld.determinant()<0,be=O1(w,U,V,G,F);Se.setMaterial(G,pe);let ve=V.index,Ue=1;if(G.wireframe===!0){if(ve=B.getWireframeAttribute(V),ve===void 0)return;Ue=2}const ke=V.drawRange,Re=V.attributes.position;let Je=ke.start*Ue,lt=(ke.start+ke.count)*Ue;se!==null&&(Je=Math.max(Je,se.start*Ue),lt=Math.min(lt,(se.start+se.count)*Ue)),ve!==null?(Je=Math.max(Je,0),lt=Math.min(lt,ve.count)):Re!=null&&(Je=Math.max(Je,0),lt=Math.min(lt,Re.count));const At=lt-Je;if(At<0||At===1/0)return;N.setup(F,G,be,V,ve);let Ct,ft=Ie;if(ve!==null&&(Ct=I.get(ve),ft=ge,ft.setIndex(Ct)),F.isMesh)G.wireframe===!0?(Se.setLineWidth(G.wireframeLinewidth*dt()),ft.setMode(L.LINES)):ft.setMode(L.TRIANGLES);else if(F.isLine){let De=G.linewidth;De===void 0&&(De=1),Se.setLineWidth(De*dt()),F.isLineSegments?ft.setMode(L.LINES):F.isLineLoop?ft.setMode(L.LINE_LOOP):ft.setMode(L.LINE_STRIP)}else F.isPoints?ft.setMode(L.POINTS):F.isSprite&&ft.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ha("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))ft.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const De=F._multiDrawStarts,St=F._multiDrawCounts,it=F._multiDrawCount,wn=ve?I.get(ve).bytesPerElement:1,ys=Ce.get(G).currentProgram.getUniforms();for(let An=0;An<it;An++)ys.setValue(L,"_gl_DrawID",An),ft.render(De[An]/wn,St[An])}else if(F.isInstancedMesh)ft.renderInstances(Je,At,F.count);else if(V.isInstancedBufferGeometry){const De=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,St=Math.min(V.instanceCount,De);ft.renderInstances(Je,At,St)}else ft.render(Je,At)};function hi(w,U,V){w.transparent===!0&&w.side===Bi&&w.forceSinglePass===!1?(w.side=En,w.needsUpdate=!0,ul(w,U,V),w.side=Rr,w.needsUpdate=!0,ul(w,U,V),w.side=Bi):ul(w,U,V)}this.compile=function(w,U,V=null){V===null&&(V=w),_=Ae.get(V),_.init(U),b.push(_),V.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(_.pushLight(F),F.castShadow&&_.pushShadow(F))}),w!==V&&w.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(_.pushLight(F),F.castShadow&&_.pushShadow(F))}),_.setupLights();const G=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const se=F.material;if(se)if(Array.isArray(se))for(let pe=0;pe<se.length;pe++){const be=se[pe];hi(be,V,F),G.add(be)}else hi(se,V,F),G.add(se)}),_=b.pop(),G},this.compileAsync=function(w,U,V=null){const G=this.compile(w,U,V);return new Promise(F=>{function se(){if(G.forEach(function(pe){Ce.get(pe).currentProgram.isReady()&&G.delete(pe)}),G.size===0){F(w);return}setTimeout(se,10)}Ke.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Zn=null;function F1(w){Zn&&Zn(w)}function o0(){Or.stop()}function a0(){Or.start()}const Or=new OS;Or.setAnimationLoop(F1),typeof self<"u"&&Or.setContext(self),this.setAnimationLoop=function(w){Zn=w,ce.setAnimationLoop(w),w===null?Or.stop():Or.start()},ce.addEventListener("sessionstart",o0),ce.addEventListener("sessionend",a0),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(U),U=ce.getCamera()),w.isScene===!0&&w.onBeforeRender(S,w,U,E),_=Ae.get(w,b.length),_.init(U),b.push(_),Ne.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),J.setFromProjectionMatrix(Ne,_i,U.reversedDepth),he=this.localClippingEnabled,K=Me.init(this.clippingPlanes,he),m=ue.get(w,M.length),m.init(),M.push(m),ce.enabled===!0&&ce.isPresenting===!0){const se=S.xr.getDepthSensingMesh();se!==null&&Fu(se,U,-1/0,S.sortObjects)}Fu(w,U,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(oe,we),$e=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,$e&&ae.addToRenderList(m,w),this.info.render.frame++,K===!0&&Me.beginShadows();const V=_.state.shadowsArray;ne.render(V,w,U),K===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,F=m.transmissive;if(_.setupLights(),U.isArrayCamera){const se=U.cameras;if(F.length>0)for(let pe=0,be=se.length;pe<be;pe++){const ve=se[pe];c0(G,F,w,ve)}$e&&ae.render(w);for(let pe=0,be=se.length;pe<be;pe++){const ve=se[pe];l0(m,w,ve,ve.viewport)}}else F.length>0&&c0(G,F,w,U),$e&&ae.render(w),l0(m,w,U);E!==null&&T===0&&(Be.updateMultisampleRenderTarget(E),Be.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(S,w,U),N.resetDefaultState(),D=-1,k=null,b.pop(),b.length>0?(_=b[b.length-1],K===!0&&Me.setGlobalState(S.clippingPlanes,_.state.camera)):_=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Fu(w,U,V,G){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)_.pushLight(w),w.castShadow&&_.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||J.intersectsSprite(w)){G&&We.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ne);const pe=$.update(w),be=w.material;be.visible&&m.push(w,pe,be,V,We.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||J.intersectsObject(w))){const pe=$.update(w),be=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),We.copy(w.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),We.copy(pe.boundingSphere.center)),We.applyMatrix4(w.matrixWorld).applyMatrix4(Ne)),Array.isArray(be)){const ve=pe.groups;for(let Ue=0,ke=ve.length;Ue<ke;Ue++){const Re=ve[Ue],Je=be[Re.materialIndex];Je&&Je.visible&&m.push(w,pe,Je,V,We.z,Re)}}else be.visible&&m.push(w,pe,be,V,We.z,null)}}const se=w.children;for(let pe=0,be=se.length;pe<be;pe++)Fu(se[pe],U,V,G)}function l0(w,U,V,G){const{opaque:F,transmissive:se,transparent:pe}=w;_.setupLightsView(V),K===!0&&Me.setGlobalState(S.clippingPlanes,V),G&&Se.viewport(H.copy(G)),F.length>0&&cl(F,U,V),se.length>0&&cl(se,U,V),pe.length>0&&cl(pe,U,V),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function c0(w,U,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[G.id]===void 0&&(_.state.transmissionRenderTarget[G.id]=new Pr(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?_s:Ki,minFilter:is,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const se=_.state.transmissionRenderTarget[G.id],pe=G.viewport||H;se.setSize(pe.z*S.transmissionResolutionScale,pe.w*S.transmissionResolutionScale);const be=S.getRenderTarget(),ve=S.getActiveCubeFace(),Ue=S.getActiveMipmapLevel();S.setRenderTarget(se),S.getClearColor(X),Q=S.getClearAlpha(),Q<1&&S.setClearColor(16777215,.5),S.clear(),$e&&ae.render(V);const ke=S.toneMapping;S.toneMapping=wr;const Re=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),_.setupLightsView(G),K===!0&&Me.setGlobalState(S.clippingPlanes,G),cl(w,V,G),Be.updateMultisampleRenderTarget(se),Be.updateRenderTargetMipmap(se),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let lt=0,At=U.length;lt<At;lt++){const Ct=U[lt],{object:ft,geometry:De,material:St,group:it}=Ct;if(St.side===Bi&&ft.layers.test(G.layers)){const wn=St.side;St.side=En,St.needsUpdate=!0,u0(ft,V,G,De,St,it),St.side=wn,St.needsUpdate=!0,Je=!0}}Je===!0&&(Be.updateMultisampleRenderTarget(se),Be.updateRenderTargetMipmap(se))}S.setRenderTarget(be,ve,Ue),S.setClearColor(X,Q),Re!==void 0&&(G.viewport=Re),S.toneMapping=ke}function cl(w,U,V){const G=U.isScene===!0?U.overrideMaterial:null;for(let F=0,se=w.length;F<se;F++){const pe=w[F],{object:be,geometry:ve,group:Ue}=pe;let ke=pe.material;ke.allowOverride===!0&&G!==null&&(ke=G),be.layers.test(V.layers)&&u0(be,U,V,ve,ke,Ue)}}function u0(w,U,V,G,F,se){w.onBeforeRender(S,U,V,G,F,se),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(S,U,V,G,w,se),F.transparent===!0&&F.side===Bi&&F.forceSinglePass===!1?(F.side=En,F.needsUpdate=!0,S.renderBufferDirect(V,U,G,F,w,se),F.side=Rr,F.needsUpdate=!0,S.renderBufferDirect(V,U,G,F,w,se),F.side=Bi):S.renderBufferDirect(V,U,G,F,w,se),w.onAfterRender(S,U,V,G,F,se)}function ul(w,U,V){U.isScene!==!0&&(U=xt);const G=Ce.get(w),F=_.state.lights,se=_.state.shadowsArray,pe=F.state.version,be=z.getParameters(w,F.state,se,U,V),ve=z.getProgramCacheKey(be);let Ue=G.programs;G.environment=w.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(w.isMeshStandardMaterial?v:C).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Ue===void 0&&(w.addEventListener("dispose",Ve),Ue=new Map,G.programs=Ue);let ke=Ue.get(ve);if(ke!==void 0){if(G.currentProgram===ke&&G.lightsStateVersion===pe)return d0(w,be),ke}else be.uniforms=z.getUniforms(w),w.onBeforeCompile(be,S),ke=z.acquireProgram(be,ve),Ue.set(ve,ke),G.uniforms=be.uniforms;const Re=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Re.clippingPlanes=Me.uniform),d0(w,be),G.needsLights=B1(w),G.lightsStateVersion=pe,G.needsLights&&(Re.ambientLightColor.value=F.state.ambient,Re.lightProbe.value=F.state.probe,Re.directionalLights.value=F.state.directional,Re.directionalLightShadows.value=F.state.directionalShadow,Re.spotLights.value=F.state.spot,Re.spotLightShadows.value=F.state.spotShadow,Re.rectAreaLights.value=F.state.rectArea,Re.ltc_1.value=F.state.rectAreaLTC1,Re.ltc_2.value=F.state.rectAreaLTC2,Re.pointLights.value=F.state.point,Re.pointLightShadows.value=F.state.pointShadow,Re.hemisphereLights.value=F.state.hemi,Re.directionalShadowMap.value=F.state.directionalShadowMap,Re.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Re.spotShadowMap.value=F.state.spotShadowMap,Re.spotLightMatrix.value=F.state.spotLightMatrix,Re.spotLightMap.value=F.state.spotLightMap,Re.pointShadowMap.value=F.state.pointShadowMap,Re.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=ke,G.uniformsList=null,ke}function f0(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=Ec.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function d0(w,U){const V=Ce.get(w);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function O1(w,U,V,G,F){U.isScene!==!0&&(U=xt),Be.resetTextureUnits();const se=U.fog,pe=G.isMeshStandardMaterial?U.environment:null,be=E===null?S.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:So,ve=(G.isMeshStandardMaterial?v:C).get(G.envMap||pe),Ue=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ke=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Re=!!V.morphAttributes.position,Je=!!V.morphAttributes.normal,lt=!!V.morphAttributes.color;let At=wr;G.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(At=S.toneMapping);const Ct=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ft=Ct!==void 0?Ct.length:0,De=Ce.get(G),St=_.state.lights;if(K===!0&&(he===!0||w!==k)){const on=w===k&&G.id===D;Me.setState(G,w,on)}let it=!1;G.version===De.__version?(De.needsLights&&De.lightsStateVersion!==St.state.version||De.outputColorSpace!==be||F.isBatchedMesh&&De.batching===!1||!F.isBatchedMesh&&De.batching===!0||F.isBatchedMesh&&De.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&De.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&De.instancing===!1||!F.isInstancedMesh&&De.instancing===!0||F.isSkinnedMesh&&De.skinning===!1||!F.isSkinnedMesh&&De.skinning===!0||F.isInstancedMesh&&De.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&De.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&De.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&De.instancingMorph===!1&&F.morphTexture!==null||De.envMap!==ve||G.fog===!0&&De.fog!==se||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Me.numPlanes||De.numIntersection!==Me.numIntersection)||De.vertexAlphas!==Ue||De.vertexTangents!==ke||De.morphTargets!==Re||De.morphNormals!==Je||De.morphColors!==lt||De.toneMapping!==At||De.morphTargetsCount!==ft)&&(it=!0):(it=!0,De.__version=G.version);let wn=De.currentProgram;it===!0&&(wn=ul(G,U,F));let ys=!1,An=!1,Uo=!1;const Mt=wn.getUniforms(),pn=De.uniforms;if(Se.useProgram(wn.program)&&(ys=!0,An=!0,Uo=!0),G.id!==D&&(D=G.id,An=!0),ys||k!==w){Se.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Mt.setValue(L,"projectionMatrix",w.projectionMatrix),Mt.setValue(L,"viewMatrix",w.matrixWorldInverse);const mn=Mt.map.cameraPosition;mn!==void 0&&mn.setValue(L,Te.setFromMatrixPosition(w.matrixWorld)),tt.logarithmicDepthBuffer&&Mt.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Mt.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),k!==w&&(k=w,An=!0,Uo=!0)}if(F.isSkinnedMesh){Mt.setOptional(L,F,"bindMatrix"),Mt.setOptional(L,F,"bindMatrixInverse");const on=F.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Mt.setValue(L,"boneTexture",on.boneTexture,Be))}F.isBatchedMesh&&(Mt.setOptional(L,F,"batchingTexture"),Mt.setValue(L,"batchingTexture",F._matricesTexture,Be),Mt.setOptional(L,F,"batchingIdTexture"),Mt.setValue(L,"batchingIdTexture",F._indirectTexture,Be),Mt.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&Mt.setValue(L,"batchingColorTexture",F._colorsTexture,Be));const kn=V.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&Fe.update(F,V,wn),(An||De.receiveShadow!==F.receiveShadow)&&(De.receiveShadow=F.receiveShadow,Mt.setValue(L,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(pn.envMap.value=ve,pn.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(pn.envMapIntensity.value=U.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=XR()),An&&(Mt.setValue(L,"toneMappingExposure",S.toneMappingExposure),De.needsLights&&k1(pn,Uo),se&&G.fog===!0&&me.refreshFogUniforms(pn,se),me.refreshMaterialUniforms(pn,G,q,W,_.state.transmissionRenderTarget[w.id]),Ec.upload(L,f0(De),pn,Be)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ec.upload(L,f0(De),pn,Be),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Mt.setValue(L,"center",F.center),Mt.setValue(L,"modelViewMatrix",F.modelViewMatrix),Mt.setValue(L,"normalMatrix",F.normalMatrix),Mt.setValue(L,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const on=G.uniformsGroups;for(let mn=0,Ou=on.length;mn<Ou;mn++){const kr=on[mn];de.update(kr,wn),de.bind(kr,wn)}}return wn}function k1(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function B1(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,U,V){const G=Ce.get(w);G.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Ce.get(w.texture).__webglTexture=U,Ce.get(w.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:V,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){const V=Ce.get(w);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0};const z1=L.createFramebuffer();this.setRenderTarget=function(w,U=0,V=0){E=w,R=U,T=V;let G=!0,F=null,se=!1,pe=!1;if(w){const ve=Ce.get(w);if(ve.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(ve.__webglFramebuffer===void 0)Be.setupRenderTarget(w);else if(ve.__hasExternalTextures)Be.rebindTextures(w,Ce.get(w.texture).__webglTexture,Ce.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Re=w.depthTexture;if(ve.__boundDepthTexture!==Re){if(Re!==null&&Ce.has(Re)&&(w.width!==Re.image.width||w.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(w)}}const Ue=w.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(pe=!0);const ke=Ce.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ke[U])?F=ke[U][V]:F=ke[U],se=!0):w.samples>0&&Be.useMultisampledRTT(w)===!1?F=Ce.get(w).__webglMultisampledFramebuffer:Array.isArray(ke)?F=ke[V]:F=ke,H.copy(w.viewport),Y.copy(w.scissor),Z=w.scissorTest}else H.copy(Pe).multiplyScalar(q).floor(),Y.copy(Le).multiplyScalar(q).floor(),Z=Ze;if(V!==0&&(F=z1),Se.bindFramebuffer(L.FRAMEBUFFER,F)&&G&&Se.drawBuffers(w,F),Se.viewport(H),Se.scissor(Y),Se.setScissorTest(Z),se){const ve=Ce.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,ve.__webglTexture,V)}else if(pe){const ve=U;for(let Ue=0;Ue<w.textures.length;Ue++){const ke=Ce.get(w.textures[Ue]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ue,ke.__webglTexture,V,ve)}}else if(w!==null&&V!==0){const ve=Ce.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ve.__webglTexture,V)}D=-1},this.readRenderTargetPixels=function(w,U,V,G,F,se,pe,be=0){if(!(w&&w.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Ce.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(ve=ve[pe]),ve){Se.bindFramebuffer(L.FRAMEBUFFER,ve);try{const Ue=w.textures[be],ke=Ue.format,Re=Ue.type;if(!tt.textureFormatReadable(ke)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Re)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-G&&V>=0&&V<=w.height-F&&(w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+be),L.readPixels(U,V,G,F,ze.convert(ke),ze.convert(Re),se))}finally{const Ue=E!==null?Ce.get(E).__webglFramebuffer:null;Se.bindFramebuffer(L.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(w,U,V,G,F,se,pe,be=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Ce.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(ve=ve[pe]),ve)if(U>=0&&U<=w.width-G&&V>=0&&V<=w.height-F){Se.bindFramebuffer(L.FRAMEBUFFER,ve);const Ue=w.textures[be],ke=Ue.format,Re=Ue.type;if(!tt.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Je),L.bufferData(L.PIXEL_PACK_BUFFER,se.byteLength,L.STREAM_READ),w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+be),L.readPixels(U,V,G,F,ze.convert(ke),ze.convert(Re),0);const lt=E!==null?Ce.get(E).__webglFramebuffer:null;Se.bindFramebuffer(L.FRAMEBUFFER,lt);const At=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await bw(L,At,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Je),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,se),L.deleteBuffer(Je),L.deleteSync(At),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,V=0){const G=Math.pow(2,-V),F=Math.floor(w.image.width*G),se=Math.floor(w.image.height*G),pe=U!==null?U.x:0,be=U!==null?U.y:0;Be.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,pe,be,F,se),Se.unbindTexture()};const V1=L.createFramebuffer(),H1=L.createFramebuffer();this.copyTextureToTexture=function(w,U,V=null,G=null,F=0,se=null){se===null&&(F!==0?(Ha("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=F,F=0):se=0);let pe,be,ve,Ue,ke,Re,Je,lt,At;const Ct=w.isCompressedTexture?w.mipmaps[se]:w.image;if(V!==null)pe=V.max.x-V.min.x,be=V.max.y-V.min.y,ve=V.isBox3?V.max.z-V.min.z:1,Ue=V.min.x,ke=V.min.y,Re=V.isBox3?V.min.z:0;else{const kn=Math.pow(2,-F);pe=Math.floor(Ct.width*kn),be=Math.floor(Ct.height*kn),w.isDataArrayTexture?ve=Ct.depth:w.isData3DTexture?ve=Math.floor(Ct.depth*kn):ve=1,Ue=0,ke=0,Re=0}G!==null?(Je=G.x,lt=G.y,At=G.z):(Je=0,lt=0,At=0);const ft=ze.convert(U.format),De=ze.convert(U.type);let St;U.isData3DTexture?(Be.setTexture3D(U,0),St=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Be.setTexture2DArray(U,0),St=L.TEXTURE_2D_ARRAY):(Be.setTexture2D(U,0),St=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const it=L.getParameter(L.UNPACK_ROW_LENGTH),wn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ys=L.getParameter(L.UNPACK_SKIP_PIXELS),An=L.getParameter(L.UNPACK_SKIP_ROWS),Uo=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ct.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ct.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ue),L.pixelStorei(L.UNPACK_SKIP_ROWS,ke),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Re);const Mt=w.isDataArrayTexture||w.isData3DTexture,pn=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){const kn=Ce.get(w),on=Ce.get(U),mn=Ce.get(kn.__renderTarget),Ou=Ce.get(on.__renderTarget);Se.bindFramebuffer(L.READ_FRAMEBUFFER,mn.__webglFramebuffer),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ou.__webglFramebuffer);for(let kr=0;kr<ve;kr++)Mt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ce.get(w).__webglTexture,F,Re+kr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ce.get(U).__webglTexture,se,At+kr)),L.blitFramebuffer(Ue,ke,pe,be,Je,lt,pe,be,L.DEPTH_BUFFER_BIT,L.NEAREST);Se.bindFramebuffer(L.READ_FRAMEBUFFER,null),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(F!==0||w.isRenderTargetTexture||Ce.has(w)){const kn=Ce.get(w),on=Ce.get(U);Se.bindFramebuffer(L.READ_FRAMEBUFFER,V1),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,H1);for(let mn=0;mn<ve;mn++)Mt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,kn.__webglTexture,F,Re+mn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,kn.__webglTexture,F),pn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,on.__webglTexture,se,At+mn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,on.__webglTexture,se),F!==0?L.blitFramebuffer(Ue,ke,pe,be,Je,lt,pe,be,L.COLOR_BUFFER_BIT,L.NEAREST):pn?L.copyTexSubImage3D(St,se,Je,lt,At+mn,Ue,ke,pe,be):L.copyTexSubImage2D(St,se,Je,lt,Ue,ke,pe,be);Se.bindFramebuffer(L.READ_FRAMEBUFFER,null),Se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else pn?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(St,se,Je,lt,At,pe,be,ve,ft,De,Ct.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(St,se,Je,lt,At,pe,be,ve,ft,Ct.data):L.texSubImage3D(St,se,Je,lt,At,pe,be,ve,ft,De,Ct):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,se,Je,lt,pe,be,ft,De,Ct.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,se,Je,lt,Ct.width,Ct.height,ft,Ct.data):L.texSubImage2D(L.TEXTURE_2D,se,Je,lt,pe,be,ft,De,Ct);L.pixelStorei(L.UNPACK_ROW_LENGTH,it),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,wn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ys),L.pixelStorei(L.UNPACK_SKIP_ROWS,An),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Uo),se===0&&U.generateMipmaps&&L.generateMipmap(St),Se.unbindTexture()},this.initRenderTarget=function(w){Ce.get(w).__webglFramebuffer===void 0&&Be.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Be.setTextureCube(w,0):w.isData3DTexture?Be.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Be.setTexture2DArray(w,0):Be.setTexture2D(w,0),Se.unbindTexture()},this.resetState=function(){R=0,T=0,E=null,Se.reset(),N.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),n.unpackColorSpace=rt._getUnpackColorSpace()}}function YR({mouseForce:t=20,cursorSize:e=100,isViscous:n=!1,viscous:i=30,iterationsViscous:r=32,iterationsPoisson:s=32,dt:o=.014,BFECC:a=!0,resolution:l=.5,isBounce:c=!1,colors:u=["#5227FF","#FF9FFC","#B19EEF"],style:f={},className:d="",autoDemo:p=!0,autoSpeed:x=.5,autoIntensity:y=2.2,takeoverDuration:g=.25,autoResumeDelay:h=1e3,autoRampDuration:m=.6}){const _=te.useRef(null),M=te.useRef(null),b=te.useRef(null),S=te.useRef(null),A=te.useRef(null),R=te.useRef(!0),T=te.useRef(null);return te.useEffect(()=>{if(!_.current)return;function E(C){let v;Array.isArray(C)&&C.length>0?C.length===1?v=[C[0],C[0]]:v=C:v=["#ffffff","#ffffff"];const I=v.length,B=new Uint8Array(I*4);for(let z=0;z<I;z++){const me=new st(v[z]);B[z*4+0]=Math.round(me.r*255),B[z*4+1]=Math.round(me.g*255),B[z*4+2]=Math.round(me.b*255),B[z*4+3]=255}const $=new IS(B,I,1,Xn);return $.magFilter=nn,$.minFilter=nn,$.wrapS=Ln,$.wrapT=Ln,$.generateMipmaps=!1,$.needsUpdate=!0,$}const D=E(u),k=new Dt(0,0,0,0);class H{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(v){this.container=v,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new $R({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new st(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new o3,this.clock.start()}resize(){if(!this.container)return;const v=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(v.width)),this.height=Math.max(1,Math.floor(v.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const Y=new H;class Z{constructor(){this.mouseMoved=!1,this.coords=new Ge,this.coords_old=new Ge,this.diff=new Ge,this.timer=null,this.container=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onMouseEnter=this.onMouseEnter.bind(this),this._onMouseLeave=this.onMouseLeave.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new Ge,this.takeoverTo=new Ge,this.onInteract=null}init(v){this.container=v,v.addEventListener("mousemove",this._onMouseMove,!1),v.addEventListener("touchstart",this._onTouchStart,!1),v.addEventListener("touchmove",this._onTouchMove,!1),v.addEventListener("mouseenter",this._onMouseEnter,!1),v.addEventListener("mouseleave",this._onMouseLeave,!1),v.addEventListener("touchend",this._onTouchEnd,!1)}dispose(){this.container&&(this.container.removeEventListener("mousemove",this._onMouseMove,!1),this.container.removeEventListener("touchstart",this._onTouchStart,!1),this.container.removeEventListener("touchmove",this._onTouchMove,!1),this.container.removeEventListener("mouseenter",this._onMouseEnter,!1),this.container.removeEventListener("mouseleave",this._onMouseLeave,!1),this.container.removeEventListener("touchend",this._onTouchEnd,!1))}setCoords(v,I){if(!this.container)return;this.timer&&clearTimeout(this.timer);const B=this.container.getBoundingClientRect(),$=(v-B.left)/B.width,z=(I-B.top)/B.height;this.coords.set($*2-1,-(z*2-1)),this.mouseMoved=!0,this.timer=setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(v,I){this.coords.set(v,I),this.mouseMoved=!0}onDocumentMouseMove(v){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){const I=this.container.getBoundingClientRect(),B=(v.clientX-I.left)/I.width,$=(v.clientY-I.top)/I.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(B*2-1,-($*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(v.clientX,v.clientY),this.hasUserControl=!0}onDocumentTouchStart(v){if(v.touches.length===1){const I=v.touches[0];this.onInteract&&this.onInteract(),this.setCoords(I.pageX,I.pageY),this.hasUserControl=!0}}onDocumentTouchMove(v){if(v.touches.length===1){const I=v.touches[0];this.onInteract&&this.onInteract(),this.setCoords(I.pageX,I.pageY)}}onTouchEnd(){this.isHoverInside=!1}onMouseEnter(){this.isHoverInside=!0}onMouseLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const v=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(v>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const I=v*v*(3-2*v);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,I)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const X=new Z;class Q{constructor(v,I,B){this.mouse=v,this.manager=I,this.enabled=B.enabled,this.speed=B.speed,this.resumeDelay=B.resumeDelay||3e3,this.rampDurationMs=(B.rampDuration||0)*1e3,this.active=!1,this.current=new Ge(0,0),this.target=new Ge,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new Ge,this.pickNewTarget()}pickNewTarget(){const v=Math.random;this.target.set((v()*2-1)*(1-this.margin),(v()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const v=performance.now();if(v-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=v,this.activationTime=v),!this.active)return;this.mouse.isAutoActive=!0;let B=(v-this.lastTime)/1e3;this.lastTime=v,B>.2&&(B=.016);const $=this._tmpDir.subVectors(this.target,this.current),z=$.length();if(z<.01){this.pickNewTarget();return}$.normalize();let me=1;if(this.rampDurationMs>0){const Me=Math.min(1,(v-this.activationTime)/this.rampDurationMs);me=Me*Me*(3-2*Me)}const ue=this.speed*B*me,Ae=Math.min(ue,z);this.current.addScaledVector($,Ae),this.mouse.setNormalized(this.current.x,this.current.y)}}const P=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,W=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,q=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,oe=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,we=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,Pe=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,Le=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,Ze=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,J=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,K=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class he{constructor(v){var I;this.props=v||{},this.uniforms=(I=this.props.material)==null?void 0:I.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new qg,this.camera=new iu,this.uniforms&&(this.material=new ql(this.props.material),this.geometry=new ls(2,2),this.plane=new fi(this.geometry,this.material),this.scene.add(this.plane))}update(){Y.renderer.setRenderTarget(this.props.output||null),Y.renderer.render(this.scene,this.camera),Y.renderer.setRenderTarget(null)}}class Ne extends he{constructor(v){super({material:{vertexShader:P,fragmentShader:oe,uniforms:{boundarySpace:{value:v.cellScale},px:{value:v.cellScale},fboSize:{value:v.fboSize},velocity:{value:v.src.texture},dt:{value:v.dt},isBFECC:{value:!0}}},output:v.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const v=new Ci,I=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);v.setAttribute("position",new ui(I,3));const B=new ql({vertexShader:W,fragmentShader:oe,uniforms:this.uniforms});this.line=new t3(v,B),this.scene.add(this.line)}update({dt:v,isBounce:I,BFECC:B}){this.uniforms.dt.value=v,this.line.visible=I,this.uniforms.isBFECC.value=B,super.update()}}class Te extends he{constructor(v){super({output:v.dst}),this.init(v)}init(v){super.init();const I=new ls(1,1),B=new ql({vertexShader:q,fragmentShader:Le,blending:rh,depthWrite:!1,uniforms:{px:{value:v.cellScale},force:{value:new Ge(0,0)},center:{value:new Ge(0,0)},scale:{value:new Ge(v.cursor_size,v.cursor_size)}}});this.mouse=new fi(I,B),this.scene.add(this.mouse)}update(v){const I=X.diff.x/2*v.mouse_force,B=X.diff.y/2*v.mouse_force,$=v.cursor_size*v.cellScale.x,z=v.cursor_size*v.cellScale.y,me=Math.min(Math.max(X.coords.x,-1+$+v.cellScale.x*2),1-$-v.cellScale.x*2),ue=Math.min(Math.max(X.coords.y,-1+z+v.cellScale.y*2),1-z-v.cellScale.y*2),Ae=this.mouse.material.uniforms;Ae.force.value.set(I,B),Ae.center.value.set(me,ue),Ae.scale.value.set(v.cursor_size,v.cursor_size),super.update()}}class We extends he{constructor(v){super({material:{vertexShader:P,fragmentShader:K,uniforms:{boundarySpace:{value:v.boundarySpace},velocity:{value:v.src.texture},velocity_new:{value:v.dst_.texture},v:{value:v.viscous},px:{value:v.cellScale},dt:{value:v.dt}}},output:v.dst,output0:v.dst_,output1:v.dst}),this.init()}update({viscous:v,iterations:I,dt:B}){let $,z;this.uniforms.v.value=v;for(let me=0;me<I;me++)me%2===0?($=this.props.output0,z=this.props.output1):($=this.props.output1,z=this.props.output0),this.uniforms.velocity_new.value=$.texture,this.props.output=z,this.uniforms.dt.value=B,super.update();return z}}class xt extends he{constructor(v){super({material:{vertexShader:P,fragmentShader:Pe,uniforms:{boundarySpace:{value:v.boundarySpace},velocity:{value:v.src.texture},px:{value:v.cellScale},dt:{value:v.dt}}},output:v.dst}),this.init()}update({vel:v}){this.uniforms.velocity.value=v.texture,super.update()}}class $e extends he{constructor(v){super({material:{vertexShader:P,fragmentShader:Ze,uniforms:{boundarySpace:{value:v.boundarySpace},pressure:{value:v.dst_.texture},divergence:{value:v.src.texture},px:{value:v.cellScale}}},output:v.dst,output0:v.dst_,output1:v.dst}),this.init()}update({iterations:v}){let I,B;for(let $=0;$<v;$++)$%2===0?(I=this.props.output0,B=this.props.output1):(I=this.props.output1,B=this.props.output0),this.uniforms.pressure.value=I.texture,this.props.output=B,super.update();return B}}class dt extends he{constructor(v){super({material:{vertexShader:P,fragmentShader:J,uniforms:{boundarySpace:{value:v.boundarySpace},pressure:{value:v.src_p.texture},velocity:{value:v.src_v.texture},px:{value:v.cellScale},dt:{value:v.dt}}},output:v.dst}),this.init()}update({vel:v,pressure:I}){this.uniforms.velocity.value=v.texture,this.uniforms.pressure.value=I.texture,super.update()}}class L{constructor(v){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...v},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new Ge,this.cellScale=new Ge,this.boundarySpace=new Ge,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?_s:vi}createAllFBO(){const I={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:nn,magFilter:nn,wrapS:Ln,wrapT:Ln};for(let B in this.fbos)this.fbos[B]=new Pr(this.fboSize.x,this.fboSize.y,I)}createShaderPass(){this.advection=new Ne({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Te({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new We({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new xt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new $e({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new dt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const v=Math.max(1,Math.round(this.options.resolution*Y.width)),I=Math.max(1,Math.round(this.options.resolution*Y.height)),B=1/v,$=1/I;this.cellScale.set(B,$),this.fboSize.set(v,I)}resize(){this.calcSize();for(let v in this.fbos)this.fbos[v].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let v=this.fbos.vel_1;this.options.isViscous&&(v=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:v});const I=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:v,pressure:I})}}class qe{constructor(){this.init()}init(){this.simulation=new L,this.scene=new qg,this.camera=new iu,this.output=new fi(new ls(2,2),new ql({vertexShader:P,fragmentShader:we,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new Ge},palette:{value:D},bgColor:{value:k}}})),this.scene.add(this.output)}addScene(v){this.scene.add(v)}resize(){this.simulation.resize()}render(){Y.renderer.setRenderTarget(null),Y.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class Ke{constructor(v){this.props=v,Y.init(v.$wrapper),X.init(v.$wrapper),X.autoIntensity=v.autoIntensity,X.takeoverDuration=v.takeoverDuration,this.lastUserInteraction=performance.now(),X.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new Q(X,this,{enabled:v.autoDemo,speed:v.autoSpeed,resumeDelay:v.autoResumeDelay,rampDuration:v.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():R.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(Y.renderer.domElement),this.output=new qe}resize(){Y.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),X.update(),Y.update(),this.output.update()}loop(){this.running&&(this.render(),S.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,S.current&&(cancelAnimationFrame(S.current),S.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),X.dispose(),Y.renderer){const v=Y.renderer.domElement;v&&v.parentNode&&v.parentNode.removeChild(v),Y.renderer.dispose()}}catch{}}}const tt=_.current;tt.style.position=tt.style.position||"relative",tt.style.overflow=tt.style.overflow||"hidden";const Se=new Ke({$wrapper:tt,autoDemo:p,autoSpeed:x,autoIntensity:y,takeoverDuration:g,autoResumeDelay:h,autoRampDuration:m});M.current=Se,(()=>{var I;if(!M.current)return;const C=(I=M.current.output)==null?void 0:I.simulation;if(!C)return;const v=C.options.resolution;Object.assign(C.options,{mouse_force:t,cursor_size:e,isViscous:n,viscous:i,iterations_viscous:r,iterations_poisson:s,dt:o,BFECC:a,resolution:l,isBounce:c}),l!==v&&C.resize()})(),Se.start();const Ce=new IntersectionObserver(C=>{const v=C[0],I=v.isIntersecting&&v.intersectionRatio>0;R.current=I,M.current&&(I&&!document.hidden?M.current.start():M.current.pause())},{threshold:[0,.01,.1]});Ce.observe(tt),A.current=Ce;const Be=new ResizeObserver(()=>{M.current&&(T.current&&cancelAnimationFrame(T.current),T.current=requestAnimationFrame(()=>{M.current&&M.current.resize()}))});return Be.observe(tt),b.current=Be,()=>{if(S.current&&cancelAnimationFrame(S.current),b.current)try{b.current.disconnect()}catch{}if(A.current)try{A.current.disconnect()}catch{}M.current&&M.current.dispose(),M.current=null}},[a,e,o,c,n,s,r,t,l,i,u,p,x,y,g,h,m]),te.useEffect(()=>{var H;const E=M.current;if(!E)return;const D=(H=E.output)==null?void 0:H.simulation;if(!D)return;const k=D.options.resolution;Object.assign(D.options,{mouse_force:t,cursor_size:e,isViscous:n,viscous:i,iterations_viscous:r,iterations_poisson:s,dt:o,BFECC:a,resolution:l,isBounce:c}),E.autoDriver&&(E.autoDriver.enabled=p,E.autoDriver.speed=x,E.autoDriver.resumeDelay=h,E.autoDriver.rampDurationMs=m*1e3,E.autoDriver.mouse&&(E.autoDriver.mouse.autoIntensity=y,E.autoDriver.mouse.takeoverDuration=g)),l!==k&&D.resize()},[t,e,n,i,r,s,o,a,l,c,p,x,y,g,h,m]),O.jsx("div",{ref:_,className:`liquid-ether-container ${d||""}`,style:f})}function qR({text:t,radius:e=150,maxFontSize:n=1.8,minFontSize:i=1,className:r=""}){const s=te.useRef(null),[o,a]=te.useState({x:-1e3,y:-1e3}),[l,c]=te.useState([]),u=te.useRef([]);te.useEffect(()=>{const p=()=>{const x=u.current.filter(Boolean).map(y=>y.getBoundingClientRect());c(x)};return p(),window.addEventListener("resize",p),()=>window.removeEventListener("resize",p)},[t]),te.useEffect(()=>{const p=y=>{a({x:y.clientX,y:y.clientY})},x=()=>{a({x:-1e3,y:-1e3})};return window.addEventListener("mousemove",p),window.addEventListener("mouseleave",x),()=>{window.removeEventListener("mousemove",p),window.removeEventListener("mouseleave",x)}},[]);const f=p=>{if(l.length===0)return i;const x=l[p];if(!x)return i;const y=x.left+x.width/2,g=x.top+x.height/2,h=Math.sqrt(Math.pow(o.x-y,2)+Math.pow(o.y-g,2));if(h>e)return i;const m=1-h/e;return i+(n-i)*m},d=t.split("");return O.jsx("div",{ref:s,className:`inline-flex ${r}`,style:{whiteSpace:"pre",lineHeight:1.2,pointerEvents:"none"},children:d.map((p,x)=>{const y=f(x);return O.jsx("span",{ref:g=>u.current[x]=g,style:{display:"inline-block",fontSize:`${y}em`,transition:"font-size 0.2s ease-out",transformOrigin:"center",fontWeight:y>1.3?"900":"inherit"},children:p},x)})})}function HS(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=HS(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function GS(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=HS(t))&&(i&&(i+=" "),i+=e);return i}const bx=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,Tx=GS,Mm=(t,e)=>n=>{var i;if((e==null?void 0:e.variants)==null)return Tx(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:r,defaultVariants:s}=e,o=Object.keys(r).map(c=>{const u=n==null?void 0:n[c],f=s==null?void 0:s[c];if(u===null)return null;const d=bx(u)||bx(f);return r[c][d]}),a=n&&Object.entries(n).reduce((c,u)=>{let[f,d]=u;return d===void 0||(c[f]=d),c},{}),l=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((c,u)=>{let{class:f,className:d,...p}=u;return Object.entries(p).every(x=>{let[y,g]=x;return Array.isArray(g)?g.includes({...s,...a}[y]):{...s,...a}[y]===g})?[...c,f,d]:c},[]);return Tx(t,o,l,n==null?void 0:n.class,n==null?void 0:n.className)};function Gf(...t){return t.filter(Boolean).join(" ")}const KR=Mm("relative isolate all-unset cursor-pointer rounded-full transition-all",{variants:{size:{default:"text-base font-medium",sm:"text-sm font-medium",lg:"text-lg font-medium",icon:"h-10 w-10"}},defaultVariants:{size:"default"}}),ZR=Mm("glass-button-text relative block select-none tracking-tighter",{variants:{size:{default:"px-6 py-3.5",sm:"px-4 py-2",lg:"px-8 py-4",icon:"flex h-10 w-10 items-center justify-center"}},defaultVariants:{size:"default"}}),Jr=te.forwardRef(({className:t,children:e,size:n,contentClassName:i,...r},s)=>O.jsxs("div",{className:Gf("glass-button-wrap cursor-pointer rounded-full",t),children:[O.jsx("button",{className:Gf("glass-button",KR({size:n})),ref:s,...r,children:O.jsx("span",{className:Gf(ZR({size:n}),i),children:e})}),O.jsx("div",{className:"glass-button-shadow rounded-full"})]}));Jr.displayName="GlassButton";const Em=te.createContext({});function Du(t){const e=te.useRef(null);return e.current===null&&(e.current=t()),e.current}const bm=typeof window<"u",Tm=bm?te.useLayoutEffect:te.useEffect,Lu=te.createContext(null);function wm(t,e){t.indexOf(e)===-1&&t.push(e)}function Am(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const wi=(t,e,n)=>n>e?e:n<t?t:n;let Ga=()=>{};const Qi={},WS=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function jS(t){return typeof t=="object"&&t!==null}const XS=t=>/^0[^.\s]+$/u.test(t);function Cm(t){let e;return()=>(e===void 0&&(e=t()),e)}const Tn=t=>t,QR=(t,e)=>n=>e(t(n)),sl=(...t)=>t.reduce(QR),Eo=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i};class Rm{constructor(){this.subscriptions=[]}add(e){return wm(this.subscriptions,e),()=>Am(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ei=t=>t*1e3,$n=t=>t/1e3;function Pm(t,e){return e?t*(1e3/e):0}const $S=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,JR=1e-7,eP=12;function tP(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=$S(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>JR&&++a<eP);return o}function ol(t,e,n,i){if(t===e&&n===i)return Tn;const r=s=>tP(s,0,1,t,n);return s=>s===0||s===1?s:$S(r(s),e,i)}const YS=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,qS=t=>e=>1-t(1-e),KS=ol(.33,1.53,.69,.99),Dm=qS(KS),ZS=YS(Dm),QS=t=>(t*=2)<1?.5*Dm(t):.5*(2-Math.pow(2,-10*(t-1))),Lm=t=>1-Math.sin(Math.acos(t)),JS=qS(Lm),eM=YS(Lm),nP=ol(.42,0,1,1),iP=ol(0,0,.58,1),tM=ol(.42,0,.58,1),rP=t=>Array.isArray(t)&&typeof t[0]!="number",nM=t=>Array.isArray(t)&&typeof t[0]=="number",sP={linear:Tn,easeIn:nP,easeInOut:tM,easeOut:iP,circIn:Lm,circInOut:eM,circOut:JS,backIn:Dm,backInOut:ZS,backOut:KS,anticipate:QS},oP=t=>typeof t=="string",wx=t=>{if(nM(t)){Ga(t.length===4);const[e,n,i,r]=t;return ol(e,n,i,r)}else if(oP(t))return sP[t];return t},Ql=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function aP(t,e){let n=new Set,i=new Set,r=!1,s=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function l(u){o.has(u)&&(c.schedule(u),t()),u(a)}const c={schedule:(u,f=!1,d=!1)=>{const x=d&&r?n:i;return f&&o.add(u),x.has(u)||x.add(u),u},cancel:u=>{i.delete(u),o.delete(u)},process:u=>{if(a=u,r){s=!0;return}r=!0,[n,i]=[i,n],n.forEach(l),n.clear(),r=!1,s&&(s=!1,c.process(u))}};return c}const lP=40;function iM(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Ql.reduce((_,M)=>(_[M]=aP(s),_),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:u,update:f,preRender:d,render:p,postRender:x}=o,y=()=>{const _=Qi.useManualTiming?r.timestamp:performance.now();n=!1,Qi.useManualTiming||(r.delta=i?1e3/60:Math.max(Math.min(_-r.timestamp,lP),1)),r.timestamp=_,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),f.process(r),d.process(r),p.process(r),x.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(y))},g=()=>{n=!0,i=!0,r.isProcessing||t(y)};return{schedule:Ql.reduce((_,M)=>{const b=o[M];return _[M]=(S,A=!1,R=!1)=>(n||g(),b.schedule(S,A,R)),_},{}),cancel:_=>{for(let M=0;M<Ql.length;M++)o[Ql[M]].cancel(_)},state:r,steps:o}}const{schedule:ut,cancel:Ai,state:jt,steps:Wf}=iM(typeof requestAnimationFrame<"u"?requestAnimationFrame:Tn,!0);let bc;function cP(){bc=void 0}const _n={now:()=>(bc===void 0&&_n.set(jt.isProcessing||Qi.useManualTiming?jt.timestamp:performance.now()),bc),set:t=>{bc=t,queueMicrotask(cP)}},rM=t=>e=>typeof e=="string"&&e.startsWith(t),Im=rM("--"),uP=rM("var(--"),Nm=t=>uP(t)?fP.test(t.split("/*")[0].trim()):!1,fP=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Po={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Wa={...Po,transform:t=>wi(0,1,t)},Jl={...Po,default:1},ga=t=>Math.round(t*1e5)/1e5,Um=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function dP(t){return t==null}const hP=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Fm=(t,e)=>n=>!!(typeof n=="string"&&hP.test(n)&&n.startsWith(t)||e&&!dP(n)&&Object.prototype.hasOwnProperty.call(n,e)),sM=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(Um);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},pP=t=>wi(0,255,t),jf={...Po,transform:t=>Math.round(pP(t))},rs={test:Fm("rgb","red"),parse:sM("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+jf.transform(t)+", "+jf.transform(e)+", "+jf.transform(n)+", "+ga(Wa.transform(i))+")"};function mP(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Yh={test:Fm("#"),parse:mP,transform:rs.transform},al=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),lr=al("deg"),bi=al("%"),Oe=al("px"),gP=al("vh"),xP=al("vw"),Ax={...bi,parse:t=>bi.parse(t)/100,transform:t=>bi.transform(t*100)},qs={test:Fm("hsl","hue"),parse:sM("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+bi.transform(ga(e))+", "+bi.transform(ga(n))+", "+ga(Wa.transform(i))+")"},Ft={test:t=>rs.test(t)||Yh.test(t)||qs.test(t),parse:t=>rs.test(t)?rs.parse(t):qs.test(t)?qs.parse(t):Yh.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?rs.transform(t):qs.transform(t),getAnimatableNone:t=>{const e=Ft.parse(t);return e.alpha=0,Ft.transform(e)}},vP=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function _P(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Um))==null?void 0:e.length)||0)+(((n=t.match(vP))==null?void 0:n.length)||0)>0}const oM="number",aM="color",yP="var",SP="var(",Cx="${}",MP=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ja(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(MP,l=>(Ft.test(l)?(i.color.push(s),r.push(aM),n.push(Ft.parse(l))):l.startsWith(SP)?(i.var.push(s),r.push(yP),n.push(l)):(i.number.push(s),r.push(oM),n.push(parseFloat(l))),++s,Cx)).split(Cx);return{values:n,split:a,indexes:i,types:r}}function lM(t){return ja(t).values}function cM(t){const{split:e,types:n}=ja(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===oM?s+=ga(r[o]):a===aM?s+=Ft.transform(r[o]):s+=r[o]}return s}}const EP=t=>typeof t=="number"?0:Ft.test(t)?Ft.getAnimatableNone(t):t;function bP(t){const e=lM(t);return cM(t)(e.map(EP))}const Dr={test:_P,parse:lM,createTransformer:cM,getAnimatableNone:bP};function Xf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function TP({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=Xf(l,a,t+1/3),s=Xf(l,a,t),o=Xf(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function ou(t,e){return n=>n>0?e:t}const bt=(t,e,n)=>t+(e-t)*n,$f=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},wP=[Yh,rs,qs],AP=t=>wP.find(e=>e.test(t));function Rx(t){const e=AP(t);if(!e)return!1;let n=e.parse(t);return e===qs&&(n=TP(n)),n}const Px=(t,e)=>{const n=Rx(t),i=Rx(e);if(!n||!i)return ou(t,e);const r={...n};return s=>(r.red=$f(n.red,i.red,s),r.green=$f(n.green,i.green,s),r.blue=$f(n.blue,i.blue,s),r.alpha=bt(n.alpha,i.alpha,s),rs.transform(r))},qh=new Set(["none","hidden"]);function CP(t,e){return qh.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function RP(t,e){return n=>bt(t,e,n)}function Om(t){return typeof t=="number"?RP:typeof t=="string"?Nm(t)?ou:Ft.test(t)?Px:LP:Array.isArray(t)?uM:typeof t=="object"?Ft.test(t)?Px:PP:ou}function uM(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>Om(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function PP(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Om(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function DP(t,e){const n=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const s=e.types[r],o=t.indexes[s][i[s]],a=t.values[o]??0;n[r]=a,i[s]++}return n}const LP=(t,e)=>{const n=Dr.createTransformer(e),i=ja(t),r=ja(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?qh.has(t)&&!r.values.length||qh.has(e)&&!i.values.length?CP(t,e):sl(uM(DP(i,r),r.values),n):ou(t,e)};function fM(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?bt(t,e,n):Om(t)(t,e)}const IP=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>ut.update(e,n),stop:()=>Ai(e),now:()=>jt.isProcessing?jt.timestamp:_n.now()}},dM=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=Math.round(t(s/(r-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},au=2e4;function km(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<au;)e+=n,i=t.next(e);return e>=au?1/0:e}function NP(t,e=100,n){const i=n({...t,keyframes:[0,e]}),r=Math.min(km(i),au);return{type:"keyframes",ease:s=>i.next(r*s).value/e,duration:$n(r)}}const UP=5;function hM(t,e,n){const i=Math.max(e-UP,0);return Pm(n-t(i),e-i)}const Rt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Yf=.001;function FP({duration:t=Rt.duration,bounce:e=Rt.bounce,velocity:n=Rt.velocity,mass:i=Rt.mass}){let r,s,o=1-e;o=wi(Rt.minDamping,Rt.maxDamping,o),t=wi(Rt.minDuration,Rt.maxDuration,$n(t)),o<1?(r=c=>{const u=c*o,f=u*t,d=u-n,p=Kh(c,o),x=Math.exp(-f);return Yf-d/p*x},s=c=>{const f=c*o*t,d=f*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,x=Math.exp(-f),y=Kh(Math.pow(c,2),o);return(-r(c)+Yf>0?-1:1)*((d-p)*x)/y}):(r=c=>{const u=Math.exp(-c*t),f=(c-n)*t+1;return-Yf+u*f},s=c=>{const u=Math.exp(-c*t),f=(n-c)*(t*t);return u*f});const a=5/t,l=kP(r,s,a);if(t=Ei(t),isNaN(l))return{stiffness:Rt.stiffness,damping:Rt.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const OP=12;function kP(t,e,n){let i=n;for(let r=1;r<OP;r++)i=i-t(i)/e(i);return i}function Kh(t,e){return t*Math.sqrt(1-e*e)}const BP=["duration","bounce"],zP=["stiffness","damping","mass"];function Dx(t,e){return e.some(n=>t[n]!==void 0)}function VP(t){let e={velocity:Rt.velocity,stiffness:Rt.stiffness,damping:Rt.damping,mass:Rt.mass,isResolvedFromDuration:!1,...t};if(!Dx(t,zP)&&Dx(t,BP))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*wi(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:Rt.mass,stiffness:r,damping:s}}else{const n=FP(t);e={...e,...n,mass:Rt.mass},e.isResolvedFromDuration=!0}return e}function lu(t=Rt.visualDuration,e=Rt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:f,velocity:d,isResolvedFromDuration:p}=VP({...n,velocity:-$n(n.velocity||0)}),x=d||0,y=c/(2*Math.sqrt(l*u)),g=o-s,h=$n(Math.sqrt(l/u)),m=Math.abs(g)<5;i||(i=m?Rt.restSpeed.granular:Rt.restSpeed.default),r||(r=m?Rt.restDelta.granular:Rt.restDelta.default);let _;if(y<1){const b=Kh(h,y);_=S=>{const A=Math.exp(-y*h*S);return o-A*((x+y*h*g)/b*Math.sin(b*S)+g*Math.cos(b*S))}}else if(y===1)_=b=>o-Math.exp(-h*b)*(g+(x+h*g)*b);else{const b=h*Math.sqrt(y*y-1);_=S=>{const A=Math.exp(-y*h*S),R=Math.min(b*S,300);return o-A*((x+y*h*g)*Math.sinh(R)+b*g*Math.cosh(R))/b}}const M={calculatedDuration:p&&f||null,next:b=>{const S=_(b);if(p)a.done=b>=f;else{let A=b===0?x:0;y<1&&(A=b===0?Ei(x):hM(_,b,S));const R=Math.abs(A)<=i,T=Math.abs(o-S)<=r;a.done=R&&T}return a.value=a.done?o:S,a},toString:()=>{const b=Math.min(km(M),au),S=dM(A=>M.next(b*A).value,b,30);return b+"ms "+S},toTransition:()=>{}};return M}lu.applyToOptions=t=>{const e=NP(t,100,lu);return t.ease=e.ease,t.duration=Ei(e.duration),t.type="keyframes",t};function Zh({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const f=t[0],d={done:!1,value:f},p=R=>a!==void 0&&R<a||l!==void 0&&R>l,x=R=>a===void 0?l:l===void 0||Math.abs(a-R)<Math.abs(l-R)?a:l;let y=n*e;const g=f+y,h=o===void 0?g:o(g);h!==g&&(y=h-f);const m=R=>-y*Math.exp(-R/i),_=R=>h+m(R),M=R=>{const T=m(R),E=_(R);d.done=Math.abs(T)<=c,d.value=d.done?h:E};let b,S;const A=R=>{p(d.value)&&(b=R,S=lu({keyframes:[d.value,x(d.value)],velocity:hM(_,R,d.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return A(0),{calculatedDuration:null,next:R=>{let T=!1;return!S&&b===void 0&&(T=!0,M(R),A(R)),b!==void 0&&R>=b?S.next(R-b):(!T&&M(R),d)}}}function HP(t,e,n){const i=[],r=n||Qi.mix||fM,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Tn:e;a=sl(l,a)}i.push(a)}return i}function pM(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(Ga(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=HP(e,i,r),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let f=0;if(l>1)for(;f<t.length-2&&!(u<t[f+1]);f++);const d=Eo(t[f],t[f+1],u);return a[f](d)};return n?u=>c(wi(t[0],t[s-1],u)):c}function GP(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=Eo(0,e,i);t.push(bt(n,1,r))}}function mM(t){const e=[0];return GP(e,t.length-1),e}function WP(t,e){return t.map(n=>n*e)}function jP(t,e){return t.map(()=>e||tM).splice(0,t.length-1)}function xa({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=rP(i)?i.map(wx):wx(i),s={done:!1,value:e[0]},o=WP(n&&n.length===e.length?n:mM(e),t),a=pM(o,e,{ease:Array.isArray(r)?r:jP(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const XP=t=>t!==null;function Bm(t,{repeat:e,repeatType:n="loop"},i,r=1){const s=t.filter(XP),a=r<0||e&&n!=="loop"&&e%2===1?0:s.length-1;return!a||i===void 0?s[a]:i}const $P={decay:Zh,inertia:Zh,tween:xa,keyframes:xa,spring:lu};function gM(t){typeof t.type=="string"&&(t.type=$P[t.type])}class zm{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const YP=t=>t/100;class Vm extends zm{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var i,r;const{motionValue:n}=this.options;n&&n.updatedAt!==_n.now()&&this.tick(_n.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(r=(i=this.options).onStop)==null||r.call(i))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;gM(e);const{type:n=xa,repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=e;let{keyframes:a}=e;const l=n||xa;l!==xa&&typeof a[0]!="number"&&(this.mixKeyframes=sl(YP,fM(a[0],a[1])),a=[0,100]);const c=l({...e,keyframes:a});s==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...a].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=km(c));const{calculatedDuration:u}=c;this.calculatedDuration=u,this.resolvedDuration=u+r,this.totalDuration=this.resolvedDuration*(i+1)-r,this.generator=c}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:i,totalDuration:r,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return i.next(0);const{delay:c=0,keyframes:u,repeat:f,repeatType:d,repeatDelay:p,type:x,onUpdate:y,finalKeyframe:g}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const h=this.currentTime-c*(this.playbackSpeed>=0?1:-1),m=this.playbackSpeed>=0?h<0:h>r;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let _=this.currentTime,M=i;if(f){const R=Math.min(this.currentTime,r)/a;let T=Math.floor(R),E=R%1;!E&&R>=1&&(E=1),E===1&&T--,T=Math.min(T,f+1),!!(T%2)&&(d==="reverse"?(E=1-E,p&&(E-=p/a)):d==="mirror"&&(M=o)),_=wi(0,1,E)*a}const b=m?{done:!1,value:u[0]}:M.next(_);s&&(b.value=s(b.value));let{done:S}=b;!m&&l!==null&&(S=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const A=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&S);return A&&x!==Zh&&(b.value=Bm(u,this.options,g,this.speed)),y&&y(b.value),A&&this.finish(),b}then(e,n){return this.finished.then(e,n)}get duration(){return $n(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+$n(e)}get time(){return $n(this.currentTime)}set time(e){var n;e=Ei(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(_n.now());const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=$n(this.currentTime))}play(){var r,s;if(this.isStopped)return;const{driver:e=IP,startTime:n}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),(s=(r=this.options).onPlay)==null||s.call(r);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=n??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(_n.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function qP(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const ss=t=>t*180/Math.PI,Qh=t=>{const e=ss(Math.atan2(t[1],t[0]));return Jh(e)},KP={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Qh,rotateZ:Qh,skewX:t=>ss(Math.atan(t[1])),skewY:t=>ss(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Jh=t=>(t=t%360,t<0&&(t+=360),t),Lx=Qh,Ix=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),Nx=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),ZP={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Ix,scaleY:Nx,scale:t=>(Ix(t)+Nx(t))/2,rotateX:t=>Jh(ss(Math.atan2(t[6],t[5]))),rotateY:t=>Jh(ss(Math.atan2(-t[2],t[0]))),rotateZ:Lx,rotate:Lx,skewX:t=>ss(Math.atan(t[4])),skewY:t=>ss(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function ep(t){return t.includes("scale")?1:0}function tp(t,e){if(!t||t==="none")return ep(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(n)i=ZP,r=n;else{const a=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=KP,r=a}if(!r)return ep(e);const s=i[e],o=r[1].split(",").map(JP);return typeof s=="function"?s(o):o[s]}const QP=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return tp(n,e)};function JP(t){return parseFloat(t.trim())}const Do=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Lo=new Set(Do),Ux=t=>t===Po||t===Oe,eD=new Set(["x","y","z"]),tD=Do.filter(t=>!eD.has(t));function nD(t){const e=[];return tD.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const cs={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>tp(e,"x"),y:(t,{transform:e})=>tp(e,"y")};cs.translateX=cs.x;cs.translateY=cs.y;const us=new Set;let np=!1,ip=!1,rp=!1;function xM(){if(ip){const t=Array.from(us).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=nD(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))==null||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}ip=!1,np=!1,us.forEach(t=>t.complete(rp)),us.clear()}function vM(){us.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(ip=!0)})}function iD(){rp=!0,vM(),xM(),rp=!1}class Hm{constructor(e,n,i,r,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(us.add(this),np||(np=!0,ut.read(vM),ut.resolveKeyframes(xM))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;if(e[0]===null){const s=r==null?void 0:r.get(),o=e[e.length-1];if(s!==void 0)e[0]=s;else if(i&&n){const a=i.readValue(n,o);a!=null&&(e[0]=a)}e[0]===void 0&&(e[0]=o),r&&s===void 0&&r.set(e[0])}qP(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),us.delete(this)}cancel(){this.state==="scheduled"&&(us.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const rD=t=>t.startsWith("--");function sD(t,e,n){rD(e)?t.style.setProperty(e,n):t.style[e]=n}const _M=Cm(()=>window.ScrollTimeline!==void 0),oD={};function aD(t,e){const n=Cm(t);return()=>oD[e]??n()}const yM=aD(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),oa=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Fx={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:oa([0,.65,.55,1]),circOut:oa([.55,0,1,.45]),backIn:oa([.31,.01,.66,-.59]),backOut:oa([.33,1.53,.69,.99])};function SM(t,e){if(t)return typeof t=="function"?yM()?dM(t,e):"ease-out":nM(t)?oa(t):Array.isArray(t)?t.map(n=>SM(n,e)||Fx.easeOut):Fx[t]}function lD(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:l}={},c=void 0){const u={[e]:n};l&&(u.offset=l);const f=SM(a,r);Array.isArray(f)&&(u.easing=f);const d={delay:i,duration:r,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return c&&(d.pseudoElement=c),t.animate(u,d)}function MM(t){return typeof t=="function"&&"applyToOptions"in t}function cD({type:t,...e}){return MM(t)&&yM()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class uD extends zm{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:n,name:i,keyframes:r,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=e;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=e,Ga(typeof e.type!="string");const c=cD(e);this.animation=lD(n,i,r,c,s),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const u=Bm(r,this.options,a,this.speed);this.updateMotionValue?this.updateMotionValue(u):sD(n,i,u),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var e,n;this.isPseudoElement||(n=(e=this.animation).commitStyles)==null||n.call(e)}get duration(){var n,i;const e=((i=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:i.call(n).duration)||0;return $n(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+$n(e)}get time(){return $n(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=Ei(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:n}){var i;return this.allowFlatten&&((i=this.animation.effect)==null||i.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&_M()?(this.animation.timeline=e,Tn):n(this)}}const EM={anticipate:QS,backInOut:ZS,circInOut:eM};function fD(t){return t in EM}function dD(t){typeof t.ease=="string"&&fD(t.ease)&&(t.ease=EM[t.ease])}const Ox=10;class hD extends uD{constructor(e){dD(e),gM(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:i,onComplete:r,element:s,...o}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const a=new Vm({...o,autoplay:!1}),l=Ei(this.finishedTime??this.time);n.setWithVelocity(a.sample(l-Ox).value,a.sample(l).value,Ox),a.stop()}}const kx=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Dr.test(t)||t==="0")&&!t.startsWith("url("));function pD(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function mD(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=kx(r,e),a=kx(s,e);return!o||!a?!1:pD(t)||(n==="spring"||MM(n))&&i}function sp(t){t.duration=0,t.type="keyframes"}const gD=new Set(["opacity","clipPath","filter","transform"]),xD=Cm(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function vD(t){var u;const{motionValue:e,name:n,repeatDelay:i,repeatType:r,damping:s,type:o}=t;if(!(((u=e==null?void 0:e.owner)==null?void 0:u.current)instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=e.owner.getProps();return xD()&&n&&gD.has(n)&&(n!=="transform"||!c)&&!l&&!i&&r!=="mirror"&&s!==0&&o!=="inertia"}const _D=40;class yD extends zm{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",keyframes:a,name:l,motionValue:c,element:u,...f}){var x;super(),this.stop=()=>{var y,g;this._animation&&(this._animation.stop(),(y=this.stopTimeline)==null||y.call(this)),(g=this.keyframeResolver)==null||g.cancel()},this.createdAt=_n.now();const d={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,name:l,motionValue:c,element:u,...f},p=(u==null?void 0:u.KeyframeResolver)||Hm;this.keyframeResolver=new p(a,(y,g,h)=>this.onKeyframesResolved(y,g,d,!h),l,c,u),(x=this.keyframeResolver)==null||x.scheduleResolve()}onKeyframesResolved(e,n,i,r){this.keyframeResolver=void 0;const{name:s,type:o,velocity:a,delay:l,isHandoff:c,onUpdate:u}=i;this.resolvedAt=_n.now(),mD(e,s,o,a)||((Qi.instantAnimations||!l)&&(u==null||u(Bm(e,i,n))),e[0]=e[e.length-1],sp(i),i.repeat=0);const d={startTime:r?this.resolvedAt?this.resolvedAt-this.createdAt>_D?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...i,keyframes:e},p=!c&&vD(d)?new hD({...d,element:d.motionValue.owner.current}):new Vm(d);p.finished.then(()=>this.notifyFinished()).catch(Tn),this.pendingTimeline&&(this.stopTimeline=p.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=p}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),iD()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}const SD=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function MD(t){const e=SD.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function bM(t,e,n=1){const[i,r]=MD(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return WS(o)?parseFloat(o):o}return Nm(r)?bM(r,e,n+1):r}function Gm(t,e){return(t==null?void 0:t[e])??(t==null?void 0:t.default)??t}const TM=new Set(["width","height","top","left","right","bottom",...Do]),ED={test:t=>t==="auto",parse:t=>t},wM=t=>e=>e.test(t),AM=[Po,Oe,bi,lr,xP,gP,ED],Bx=t=>AM.find(wM(t));function bD(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||XS(t):!0}const TD=new Set(["brightness","contrast","saturate","opacity"]);function wD(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Um)||[];if(!i)return t;const r=n.replace(i,"");let s=TD.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const AD=/\b([a-z-]*)\(.*?\)/gu,op={...Dr,getAnimatableNone:t=>{const e=t.match(AD);return e?e.map(wD).join(" "):t}},zx={...Po,transform:Math.round},CD={rotate:lr,rotateX:lr,rotateY:lr,rotateZ:lr,scale:Jl,scaleX:Jl,scaleY:Jl,scaleZ:Jl,skew:lr,skewX:lr,skewY:lr,distance:Oe,translateX:Oe,translateY:Oe,translateZ:Oe,x:Oe,y:Oe,z:Oe,perspective:Oe,transformPerspective:Oe,opacity:Wa,originX:Ax,originY:Ax,originZ:Oe},Wm={borderWidth:Oe,borderTopWidth:Oe,borderRightWidth:Oe,borderBottomWidth:Oe,borderLeftWidth:Oe,borderRadius:Oe,radius:Oe,borderTopLeftRadius:Oe,borderTopRightRadius:Oe,borderBottomRightRadius:Oe,borderBottomLeftRadius:Oe,width:Oe,maxWidth:Oe,height:Oe,maxHeight:Oe,top:Oe,right:Oe,bottom:Oe,left:Oe,padding:Oe,paddingTop:Oe,paddingRight:Oe,paddingBottom:Oe,paddingLeft:Oe,margin:Oe,marginTop:Oe,marginRight:Oe,marginBottom:Oe,marginLeft:Oe,backgroundPositionX:Oe,backgroundPositionY:Oe,...CD,zIndex:zx,fillOpacity:Wa,strokeOpacity:Wa,numOctaves:zx},RD={...Wm,color:Ft,backgroundColor:Ft,outlineColor:Ft,fill:Ft,stroke:Ft,borderColor:Ft,borderTopColor:Ft,borderRightColor:Ft,borderBottomColor:Ft,borderLeftColor:Ft,filter:op,WebkitFilter:op},CM=t=>RD[t];function RM(t,e){let n=CM(t);return n!==op&&(n=Dr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const PD=new Set(["auto","none","0"]);function DD(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!PD.has(s)&&ja(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=RM(n,r)}class LD extends Hm{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),Nm(c))){const u=bM(c,n.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!TM.has(i)||e.length!==2)return;const[r,s]=e,o=Bx(r),a=Bx(s);if(o!==a)if(Ux(o)&&Ux(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else cs[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)(e[r]===null||bD(e[r]))&&i.push(r);i.length&&DD(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=cs[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var a;const{element:e,name:n,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const r=e.getValue(n);r&&r.jump(this.measuredOrigin,!1);const s=i.length-1,o=i[s];i[s]=cs[n](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,c])=>{e.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function PM(t,e,n){if(t instanceof EventTarget)return[t];if(typeof t=="string"){const r=document.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t)}const DM=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function jm(t){return jS(t)&&"offsetHeight"in t}const Vx=30,ID=t=>!isNaN(parseFloat(t));class ND{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var s;const r=_n.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=_n.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=ID(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Rm);const i=this.events[e].add(n);return e==="change"?()=>{i(),ut.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=_n.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Vx)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Vx);return Pm(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function yi(t,e){return new ND(t,e)}const{schedule:Xm}=iM(queueMicrotask,!1),ni={x:!1,y:!1};function LM(){return ni.x||ni.y}function UD(t){return t==="x"||t==="y"?ni[t]?null:(ni[t]=!0,()=>{ni[t]=!1}):ni.x||ni.y?null:(ni.x=ni.y=!0,()=>{ni.x=ni.y=!1})}function IM(t,e){const n=PM(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function Hx(t){return!(t.pointerType==="touch"||LM())}function FD(t,e,n={}){const[i,r,s]=IM(t,n),o=a=>{if(!Hx(a))return;const{target:l}=a,c=e(l,a);if(typeof c!="function"||!l)return;const u=f=>{Hx(f)&&(c(f),l.removeEventListener("pointerleave",u))};l.addEventListener("pointerleave",u,r)};return i.forEach(a=>{a.addEventListener("pointerenter",o,r)}),s}const NM=(t,e)=>e?t===e?!0:NM(t,e.parentElement):!1,$m=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,OD=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function kD(t){return OD.has(t.tagName)||t.tabIndex!==-1}const Tc=new WeakSet;function Gx(t){return e=>{e.key==="Enter"&&t(e)}}function qf(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const BD=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=Gx(()=>{if(Tc.has(n))return;qf(n,"down");const r=Gx(()=>{qf(n,"up")}),s=()=>qf(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function Wx(t){return $m(t)&&!LM()}function zD(t,e,n={}){const[i,r,s]=IM(t,n),o=a=>{const l=a.currentTarget;if(!Wx(a))return;Tc.add(l);const c=e(l,a),u=(p,x)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",d),Tc.has(l)&&Tc.delete(l),Wx(p)&&typeof c=="function"&&c(p,{success:x})},f=p=>{u(p,l===window||l===document||n.useGlobalTarget||NM(l,p.target))},d=p=>{u(p,!1)};window.addEventListener("pointerup",f,r),window.addEventListener("pointercancel",d,r)};return i.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),jm(a)&&(a.addEventListener("focus",c=>BD(c,r)),!kD(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),s}function Ym(t){return jS(t)&&"ownerSVGElement"in t}const wc=new WeakMap;let cr;const UM=(t,e,n)=>(i,r)=>r&&r[0]?r[0][t+"Size"]:Ym(i)&&"getBBox"in i?i.getBBox()[e]:i[n],VD=UM("inline","width","offsetWidth"),HD=UM("block","height","offsetHeight");function GD({target:t,borderBoxSize:e}){var n;(n=wc.get(t))==null||n.forEach(i=>{i(t,{get width(){return VD(t,e)},get height(){return HD(t,e)}})})}function WD(t){t.forEach(GD)}function jD(){typeof ResizeObserver>"u"||(cr=new ResizeObserver(WD))}function XD(t,e){cr||jD();const n=PM(t);return n.forEach(i=>{let r=wc.get(i);r||(r=new Set,wc.set(i,r)),r.add(e),cr==null||cr.observe(i)}),()=>{n.forEach(i=>{const r=wc.get(i);r==null||r.delete(e),r!=null&&r.size||cr==null||cr.unobserve(i)})}}const Ac=new Set;let Ks;function $D(){Ks=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};Ac.forEach(e=>e(t))},window.addEventListener("resize",Ks)}function YD(t){return Ac.add(t),Ks||$D(),()=>{Ac.delete(t),!Ac.size&&typeof Ks=="function"&&(window.removeEventListener("resize",Ks),Ks=void 0)}}function qD(t,e){return typeof t=="function"?YD(t):XD(t,e)}function FM(t,e){let n;const i=()=>{const{currentTime:r}=e,o=(r===null?0:r.value)/100;n!==o&&t(o),n=o};return ut.preUpdate(i,!0),()=>Ai(i)}function KD(t){return Ym(t)&&t.tagName==="svg"}const rn=t=>!!(t&&t.getVelocity),ZD=[...AM,Ft,Dr],QD=t=>ZD.find(wM(t)),qm=te.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function jx(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function JD(...t){return e=>{let n=!1;const i=t.map(r=>{const s=jx(r,e);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let r=0;r<i.length;r++){const s=i[r];typeof s=="function"?s():jx(t[r],null)}}}}function eL(...t){return te.useCallback(JD(...t),t)}class tL extends te.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=n.offsetParent,r=jm(i)&&i.offsetWidth||0,s=this.props.sizeRef.current;s.height=n.offsetHeight||0,s.width=n.offsetWidth||0,s.top=n.offsetTop,s.left=n.offsetLeft,s.right=r-s.width-s.left}return null}componentDidUpdate(){}render(){return this.props.children}}function nL({children:t,isPresent:e,anchorX:n,root:i}){const r=te.useId(),s=te.useRef(null),o=te.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:a}=te.useContext(qm),l=eL(s,t==null?void 0:t.ref);return te.useInsertionEffect(()=>{const{width:c,height:u,top:f,left:d,right:p}=o.current;if(e||!s.current||!c||!u)return;const x=n==="left"?`left: ${d}`:`right: ${p}`;s.current.dataset.motionPopId=r;const y=document.createElement("style");a&&(y.nonce=a);const g=i??document.head;return g.appendChild(y),y.sheet&&y.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${u}px !important;
            ${x}px !important;
            top: ${f}px !important;
          }
        `),()=>{g.contains(y)&&g.removeChild(y)}},[e]),O.jsx(tL,{isPresent:e,childRef:s,sizeRef:o,children:te.cloneElement(t,{ref:l})})}const iL=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o,anchorX:a,root:l})=>{const c=Du(rL),u=te.useId();let f=!0,d=te.useMemo(()=>(f=!1,{id:u,initial:e,isPresent:n,custom:r,onExitComplete:p=>{c.set(p,!0);for(const x of c.values())if(!x)return;i&&i()},register:p=>(c.set(p,!1),()=>c.delete(p))}),[n,c,i]);return s&&f&&(d={...d}),te.useMemo(()=>{c.forEach((p,x)=>c.set(x,!1))},[n]),te.useEffect(()=>{!n&&!c.size&&i&&i()},[n]),o==="popLayout"&&(t=O.jsx(nL,{isPresent:n,anchorX:a,root:l,children:t})),O.jsx(Lu.Provider,{value:d,children:t})};function rL(){return new Map}function OM(t=!0){const e=te.useContext(Lu);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=te.useId();te.useEffect(()=>{if(t)return r(s)},[t]);const o=te.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const ec=t=>t.key||"";function Xx(t){const e=[];return te.Children.forEach(t,n=>{te.isValidElement(n)&&e.push(n)}),e}const sL=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1,anchorX:a="left",root:l})=>{const[c,u]=OM(o),f=te.useMemo(()=>Xx(t),[t]),d=o&&!c?[]:f.map(ec),p=te.useRef(!0),x=te.useRef(f),y=Du(()=>new Map),[g,h]=te.useState(f),[m,_]=te.useState(f);Tm(()=>{p.current=!1,x.current=f;for(let S=0;S<m.length;S++){const A=ec(m[S]);d.includes(A)?y.delete(A):y.get(A)!==!0&&y.set(A,!1)}},[m,d.length,d.join("-")]);const M=[];if(f!==g){let S=[...f];for(let A=0;A<m.length;A++){const R=m[A],T=ec(R);d.includes(T)||(S.splice(A,0,R),M.push(R))}return s==="wait"&&M.length&&(S=M),_(Xx(S)),h(f),null}const{forceRender:b}=te.useContext(Em);return O.jsx(O.Fragment,{children:m.map(S=>{const A=ec(S),R=o&&!c?!1:f===m||d.includes(A),T=()=>{if(y.has(A))y.set(A,!0);else return;let E=!0;y.forEach(D=>{D||(E=!1)}),E&&(b==null||b(),_(x.current),o&&(u==null||u()),i&&i())};return O.jsx(iL,{isPresent:R,initial:!p.current||n?void 0:!1,custom:e,presenceAffectsLayout:r,mode:s,root:l,onExitComplete:R?void 0:T,anchorX:a,children:S},A)})})},kM=te.createContext({strict:!1}),$x={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},bo={};for(const t in $x)bo[t]={isEnabled:e=>$x[t].some(n=>!!e[n])};function oL(t){for(const e in t)bo[e]={...bo[e],...t[e]}}const aL=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function cu(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||aL.has(t)}let BM=t=>!cu(t);function lL(t){typeof t=="function"&&(BM=e=>e.startsWith("on")?!cu(e):t(e))}try{lL(require("@emotion/is-prop-valid").default)}catch{}function cL(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(BM(r)||n===!0&&cu(r)||!e&&!cu(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}const Iu=te.createContext({});function Nu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Xa(t){return typeof t=="string"||Array.isArray(t)}const Km=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Zm=["initial",...Km];function Uu(t){return Nu(t.animate)||Zm.some(e=>Xa(t[e]))}function zM(t){return!!(Uu(t)||t.variants)}function uL(t,e){if(Uu(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Xa(n)?n:void 0,animate:Xa(i)?i:void 0}}return t.inherit!==!1?e:{}}function fL(t){const{initial:e,animate:n}=uL(t,te.useContext(Iu));return te.useMemo(()=>({initial:e,animate:n}),[Yx(e),Yx(n)])}function Yx(t){return Array.isArray(t)?t.join(" "):t}const $a={};function dL(t){for(const e in t)$a[e]=t[e],Im(e)&&($a[e].isCSSVariable=!0)}function VM(t,{layout:e,layoutId:n}){return Lo.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!$a[t]||t==="opacity")}const hL={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},pL=Do.length;function mL(t,e,n){let i="",r=!0;for(let s=0;s<pL;s++){const o=Do[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=DM(a,Wm[o]);if(!l){r=!1;const u=hL[o]||o;i+=`${u}(${c}) `}n&&(e[o]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function Qm(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(Lo.has(l)){o=!0;continue}else if(Im(l)){r[l]=c;continue}else{const u=DM(c,Wm[l]);l.startsWith("origin")?(a=!0,s[l]=u):i[l]=u}}if(e.transform||(o||n?i.transform=mL(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;i.transformOrigin=`${l} ${c} ${u}`}}const Jm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function HM(t,e,n){for(const i in e)!rn(e[i])&&!VM(i,n)&&(t[i]=e[i])}function gL({transformTemplate:t},e){return te.useMemo(()=>{const n=Jm();return Qm(n,e,t),Object.assign({},n.vars,n.style)},[e])}function xL(t,e){const n=t.style||{},i={};return HM(i,n,t),Object.assign(i,gL(t,e)),i}function vL(t,e){const n={},i=xL(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}const _L={offset:"stroke-dashoffset",array:"stroke-dasharray"},yL={offset:"strokeDashoffset",array:"strokeDasharray"};function SL(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?_L:yL;t[s.offset]=Oe.transform(-i);const o=Oe.transform(e),a=Oe.transform(n);t[s.array]=`${o} ${a}`}function GM(t,{attrX:e,attrY:n,attrScale:i,pathLength:r,pathSpacing:s=1,pathOffset:o=0,...a},l,c,u){if(Qm(t,a,c),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:f,style:d}=t;f.transform&&(d.transform=f.transform,delete f.transform),(d.transform||f.transformOrigin)&&(d.transformOrigin=f.transformOrigin??"50% 50%",delete f.transformOrigin),d.transform&&(d.transformBox=(u==null?void 0:u.transformBox)??"fill-box",delete f.transformBox),e!==void 0&&(f.x=e),n!==void 0&&(f.y=n),i!==void 0&&(f.scale=i),r!==void 0&&SL(f,r,s,o,!1)}const WM=()=>({...Jm(),attrs:{}}),jM=t=>typeof t=="string"&&t.toLowerCase()==="svg";function ML(t,e,n,i){const r=te.useMemo(()=>{const s=WM();return GM(s,e,jM(i),t.transformTemplate,t.style),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};HM(s,t.style,t),r.style={...s,...r.style}}return r}const EL=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function e0(t){return typeof t!="string"||t.includes("-")?!1:!!(EL.indexOf(t)>-1||/[A-Z]/u.test(t))}function bL(t,e,n,{latestValues:i},r,s=!1){const a=(e0(t)?ML:vL)(e,i,r,t),l=cL(e,typeof t=="string",s),c=t!==te.Fragment?{...l,...a,ref:n}:{},{children:u}=e,f=te.useMemo(()=>rn(u)?u.get():u,[u]);return te.createElement(t,{...c,children:f})}function qx(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function t0(t,e,n,i){if(typeof e=="function"){const[r,s]=qx(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=qx(i);e=e(n!==void 0?n:t.custom,r,s)}return e}function Cc(t){return rn(t)?t.get():t}function TL({scrapeMotionValuesFromProps:t,createRenderState:e},n,i,r){return{latestValues:wL(n,i,r,t),renderState:e()}}function wL(t,e,n,i){const r={},s=i(t,{});for(const d in s)r[d]=Cc(s[d]);let{initial:o,animate:a}=t;const l=Uu(t),c=zM(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const f=u?a:o;if(f&&typeof f!="boolean"&&!Nu(f)){const d=Array.isArray(f)?f:[f];for(let p=0;p<d.length;p++){const x=t0(t,d[p]);if(x){const{transitionEnd:y,transition:g,...h}=x;for(const m in h){let _=h[m];if(Array.isArray(_)){const M=u?_.length-1:0;_=_[M]}_!==null&&(r[m]=_)}for(const m in y)r[m]=y[m]}}}return r}const XM=t=>(e,n)=>{const i=te.useContext(Iu),r=te.useContext(Lu),s=()=>TL(t,e,i,r);return n?s():Du(s)};function n0(t,e,n){var s;const{style:i}=t,r={};for(const o in i)(rn(i[o])||e.style&&rn(e.style[o])||VM(o,t)||((s=n==null?void 0:n.getValue(o))==null?void 0:s.liveStyle)!==void 0)&&(r[o]=i[o]);return r}const AL=XM({scrapeMotionValuesFromProps:n0,createRenderState:Jm});function $M(t,e,n){const i=n0(t,e,n);for(const r in t)if(rn(t[r])||rn(e[r])){const s=Do.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}const CL=XM({scrapeMotionValuesFromProps:$M,createRenderState:WM}),RL=Symbol.for("motionComponentSymbol");function Zs(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function PL(t,e,n){return te.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Zs(n)&&(n.current=i))},[e])}const i0=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),DL="framerAppearId",YM="data-"+i0(DL),qM=te.createContext({});function LL(t,e,n,i,r){var y,g;const{visualElement:s}=te.useContext(Iu),o=te.useContext(kM),a=te.useContext(Lu),l=te.useContext(qm).reducedMotion,c=te.useRef(null);i=i||o.renderer,!c.current&&i&&(c.current=i(t,{visualState:e,parent:s,props:n,presenceContext:a,blockInitialAnimation:a?a.initial===!1:!1,reducedMotionConfig:l}));const u=c.current,f=te.useContext(qM);u&&!u.projection&&r&&(u.type==="html"||u.type==="svg")&&IL(c.current,n,r,f);const d=te.useRef(!1);te.useInsertionEffect(()=>{u&&d.current&&u.update(n,a)});const p=n[YM],x=te.useRef(!!p&&!((y=window.MotionHandoffIsComplete)!=null&&y.call(window,p))&&((g=window.MotionHasOptimisedAnimation)==null?void 0:g.call(window,p)));return Tm(()=>{u&&(d.current=!0,window.MotionIsMounted=!0,u.updateFeatures(),u.scheduleRenderMicrotask(),x.current&&u.animationState&&u.animationState.animateChanges())}),te.useEffect(()=>{u&&(!x.current&&u.animationState&&u.animationState.animateChanges(),x.current&&(queueMicrotask(()=>{var h;(h=window.MotionHandoffMarkAsComplete)==null||h.call(window,p)}),x.current=!1),u.enteringChildren=void 0)}),u}function IL(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutCrossfade:u}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:KM(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&Zs(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,crossfade:u,layoutScroll:l,layoutRoot:c})}function KM(t){if(t)return t.options.allowProjection!==!1?t.projection:KM(t.parent)}function Kf(t,{forwardMotionProps:e=!1}={},n,i){n&&oL(n);const r=e0(t)?CL:AL;function s(a,l){let c;const u={...te.useContext(qm),...a,layoutId:NL(a)},{isStatic:f}=u,d=fL(a),p=r(a,f);if(!f&&bm){UL();const x=FL(u);c=x.MeasureLayout,d.visualElement=LL(t,p,u,i,x.ProjectionNode)}return O.jsxs(Iu.Provider,{value:d,children:[c&&d.visualElement?O.jsx(c,{visualElement:d.visualElement,...u}):null,bL(t,a,PL(p,d.visualElement,l),p,f,e)]})}s.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const o=te.forwardRef(s);return o[RL]=t,o}function NL({layoutId:t}){const e=te.useContext(Em).id;return e&&t!==void 0?e+"-"+t:t}function UL(t,e){te.useContext(kM).strict}function FL(t){const{drag:e,layout:n}=bo;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function OL(t,e){if(typeof Proxy>"u")return Kf;const n=new Map,i=(s,o)=>Kf(s,o,t,e),r=(s,o)=>i(s,o);return new Proxy(r,{get:(s,o)=>o==="create"?i:(n.has(o)||n.set(o,Kf(o,void 0,t,e)),n.get(o))})}function ZM({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function kL({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function BL(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Zf(t){return t===void 0||t===1}function ap({scale:t,scaleX:e,scaleY:n}){return!Zf(t)||!Zf(e)||!Zf(n)}function Kr(t){return ap(t)||QM(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function QM(t){return Kx(t.x)||Kx(t.y)}function Kx(t){return t&&t!=="0%"}function uu(t,e,n){const i=t-n,r=e*i;return n+r}function Zx(t,e,n,i,r){return r!==void 0&&(t=uu(t,r,i)),uu(t,n,i)+e}function lp(t,e=0,n=1,i,r){t.min=Zx(t.min,e,n,i,r),t.max=Zx(t.max,e,n,i,r)}function JM(t,{x:e,y:n}){lp(t.x,e.translate,e.scale,e.originPoint),lp(t.y,n.translate,n.scale,n.originPoint)}const Qx=.999999999999,Jx=1.0000000000001;function zL(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Js(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,JM(t,o)),i&&Kr(s.latestValues)&&Js(t,s.latestValues))}e.x<Jx&&e.x>Qx&&(e.x=1),e.y<Jx&&e.y>Qx&&(e.y=1)}function Qs(t,e){t.min=t.min+e,t.max=t.max+e}function ev(t,e,n,i,r=.5){const s=bt(t.min,t.max,r);lp(t,e,n,s,i)}function Js(t,e){ev(t.x,e.x,e.scaleX,e.scale,e.originX),ev(t.y,e.y,e.scaleY,e.scale,e.originY)}function e1(t,e){return ZM(BL(t.getBoundingClientRect(),e))}function VL(t,e,n){const i=e1(t,n),{scroll:r}=e;return r&&(Qs(i.x,r.offset.x),Qs(i.y,r.offset.y)),i}const tv=()=>({translate:0,scale:1,origin:0,originPoint:0}),eo=()=>({x:tv(),y:tv()}),nv=()=>({min:0,max:0}),Lt=()=>({x:nv(),y:nv()}),cp={current:null},t1={current:!1};function HL(){if(t1.current=!0,!!bm)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>cp.current=t.matches;t.addEventListener("change",e),e()}else cp.current=!1}const GL=new WeakMap;function WL(t,e,n){for(const i in e){const r=e[i],s=n[i];if(rn(r))t.addValue(i,r);else if(rn(s))t.addValue(i,yi(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,yi(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const iv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class jL{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Hm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const d=_n.now();this.renderScheduledAt<d&&(this.renderScheduledAt=d,ut.render(this.render,!1,!0))};const{latestValues:l,renderState:c}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=Uu(n),this.isVariantNode=zM(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:u,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const d in f){const p=f[d];l[d]!==void 0&&rn(p)&&p.set(l[d])}}mount(e){var n;this.current=e,GL.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,r)=>this.bindToMotionValue(r,i)),t1.current||HL(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:cp.current,(n=this.parent)==null||n.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var e;this.projection&&this.projection.unmount(),Ai(this.notifyUpdate),Ai(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const i=this.features[n];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=Lo.has(e);i&&this.onBindTransform&&this.onBindTransform();const r=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&ut.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s&&s(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in bo){const n=bo[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Lt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<iv.length;i++){const r=iv[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=WL(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=yi(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(WS(i)||XS(i))?i=parseFloat(i):!QD(i)&&Dr.test(n)&&(i=RM(e,n)),this.setBaseTarget(e,rn(i)?i.get():i)),rn(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var s;const{initial:n}=this.props;let i;if(typeof n=="string"||typeof n=="object"){const o=t0(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);o&&(i=o[e])}if(n&&i!==void 0)return i;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!rn(r)?r:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Rm),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){Xm.render(this.render)}}class n1 extends jL{constructor(){super(...arguments),this.KeyframeResolver=LD}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;rn(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function i1(t,{style:e,vars:n},i,r){const s=t.style;let o;for(o in e)s[o]=e[o];r==null||r.applyProjectionStyles(s,i);for(o in n)s.setProperty(o,n[o])}function XL(t){return window.getComputedStyle(t)}class $L extends n1{constructor(){super(...arguments),this.type="html",this.renderInstance=i1}readValueFromInstance(e,n){var i;if(Lo.has(n))return(i=this.projection)!=null&&i.isProjecting?ep(n):QP(e,n);{const r=XL(e),s=(Im(n)?r.getPropertyValue(n):r[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return e1(e,n)}build(e,n,i){Qm(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return n0(e,n,i)}}const r1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function YL(t,e,n,i){i1(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(r1.has(r)?r:i0(r),e.attrs[r])}class qL extends n1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Lt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Lo.has(n)){const i=CM(n);return i&&i.default||0}return n=r1.has(n)?n:i0(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return $M(e,n,i)}build(e,n,i){GM(e,n,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,n,i,r){YL(e,n,i,r)}mount(e){this.isSVGTag=jM(e.tagName),super.mount(e)}}const KL=(t,e)=>e0(t)?new qL(e):new $L(e,{allowProjection:t!==te.Fragment});function co(t,e,n){const i=t.getProps();return t0(i,e,n!==void 0?n:i.custom,t)}const up=t=>Array.isArray(t);function ZL(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,yi(n))}function QL(t){return up(t)?t[t.length-1]||0:t}function JL(t,e){const n=co(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=QL(s[o]);ZL(t,o,a)}}function eI(t){return!!(rn(t)&&t.add)}function fp(t,e){const n=t.getValue("willChange");if(eI(n))return n.add(e);if(!n&&Qi.WillChange){const i=new Qi.WillChange("auto");t.addValue("willChange",i),i.add(e)}}function s1(t){return t.props[YM]}const tI=t=>t!==null;function nI(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(tI),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return r[s]}const iI={type:"spring",stiffness:500,damping:25,restSpeed:10},rI=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),sI={type:"keyframes",duration:.8},oI={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},aI=(t,{keyframes:e})=>e.length>2?sI:Lo.has(t)?t.startsWith("scale")?rI(e[1]):iI:oI;function lI({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const r0=(t,e,n,i={},r,s)=>o=>{const a=Gm(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Ei(l);const u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:d=>{e.set(d),a.onUpdate&&a.onUpdate(d)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};lI(a)||Object.assign(u,aI(t,u)),u.duration&&(u.duration=Ei(u.duration)),u.repeatDelay&&(u.repeatDelay=Ei(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let f=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(sp(u),u.delay===0&&(f=!0)),(Qi.instantAnimations||Qi.skipAnimations)&&(f=!0,sp(u),u.delay=0),u.allowFlatten=!a.type&&!a.ease,f&&!s&&e.get()!==void 0){const d=nI(u.keyframes,a);if(d!==void 0){ut.update(()=>{u.onUpdate(d),u.onComplete()});return}}return a.isSync?new Vm(u):new yD(u)};function cI({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function o1(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:s=t.getDefaultTransition(),transitionEnd:o,...a}=e;i&&(s=i);const l=[],c=r&&t.animationState&&t.animationState.getState()[r];for(const u in a){const f=t.getValue(u,t.latestValues[u]??null),d=a[u];if(d===void 0||c&&cI(c,u))continue;const p={delay:n,...Gm(s||{},u)},x=f.get();if(x!==void 0&&!f.isAnimating&&!Array.isArray(d)&&d===x&&!p.velocity)continue;let y=!1;if(window.MotionHandoffAnimation){const h=s1(t);if(h){const m=window.MotionHandoffAnimation(h,u,ut);m!==null&&(p.startTime=m,y=!0)}}fp(t,u),f.start(r0(u,f,d,t.shouldReduceMotion&&TM.has(u)?{type:!1}:p,t,y));const g=f.animation;g&&l.push(g)}return o&&Promise.all(l).then(()=>{ut.update(()=>{o&&JL(t,o)})}),l}function a1(t,e,n,i=0,r=1){const s=Array.from(t).sort((c,u)=>c.sortNodePosition(u)).indexOf(e),o=t.size,a=(o-1)*i;return typeof n=="function"?n(s,o):r===1?s*i:a-s*i}function dp(t,e,n={}){var l;const i=co(t,e,n.type==="exit"?(l=t.presenceContext)==null?void 0:l.custom:void 0);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const s=i?()=>Promise.all(o1(t,i,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:f,staggerDirection:d}=r;return uI(t,e,c,u,f,d,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[c,u]=a==="beforeChildren"?[s,o]:[o,s];return c().then(()=>u())}else return Promise.all([s(),o(n.delay)])}function uI(t,e,n=0,i=0,r=0,s=1,o){const a=[];for(const l of t.variantChildren)l.notify("AnimationStart",e),a.push(dp(l,e,{...o,delay:n+(typeof i=="function"?0:i)+a1(t.variantChildren,l,i,r,s)}).then(()=>l.notify("AnimationComplete",e)));return Promise.all(a)}function fI(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>dp(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=dp(t,e,n);else{const r=typeof e=="function"?co(t,e,n.custom):e;i=Promise.all(o1(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}function l1(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}const dI=Zm.length;function c1(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?c1(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<dI;n++){const i=Zm[n],r=t.props[i];(Xa(r)||r===!1)&&(e[i]=r)}return e}const hI=[...Km].reverse(),pI=Km.length;function mI(t){return e=>Promise.all(e.map(({animation:n,options:i})=>fI(t,n,i)))}function gI(t){let e=mI(t),n=rv(),i=!0;const r=l=>(c,u)=>{var d;const f=co(t,u,l==="exit"?(d=t.presenceContext)==null?void 0:d.custom:void 0);if(f){const{transition:p,transitionEnd:x,...y}=f;c={...c,...y,...x}}return c};function s(l){e=l(t)}function o(l){const{props:c}=t,u=c1(t.parent)||{},f=[],d=new Set;let p={},x=1/0;for(let g=0;g<pI;g++){const h=hI[g],m=n[h],_=c[h]!==void 0?c[h]:u[h],M=Xa(_),b=h===l?m.isActive:null;b===!1&&(x=g);let S=_===u[h]&&_!==c[h]&&M;if(S&&i&&t.manuallyAnimateOnMount&&(S=!1),m.protectedKeys={...p},!m.isActive&&b===null||!_&&!m.prevProp||Nu(_)||typeof _=="boolean")continue;const A=xI(m.prevProp,_);let R=A||h===l&&m.isActive&&!S&&M||g>x&&M,T=!1;const E=Array.isArray(_)?_:[_];let D=E.reduce(r(h),{});b===!1&&(D={});const{prevResolvedValues:k={}}=m,H={...k,...D},Y=Q=>{R=!0,d.has(Q)&&(T=!0,d.delete(Q)),m.needsAnimating[Q]=!0;const P=t.getValue(Q);P&&(P.liveStyle=!1)};for(const Q in H){const P=D[Q],W=k[Q];if(p.hasOwnProperty(Q))continue;let q=!1;up(P)&&up(W)?q=!l1(P,W):q=P!==W,q?P!=null?Y(Q):d.add(Q):P!==void 0&&d.has(Q)?Y(Q):m.protectedKeys[Q]=!0}m.prevProp=_,m.prevResolvedValues=D,m.isActive&&(p={...p,...D}),i&&t.blockInitialAnimation&&(R=!1);const Z=S&&A;R&&(!Z||T)&&f.push(...E.map(Q=>{const P={type:h};if(typeof Q=="string"&&i&&!Z&&t.manuallyAnimateOnMount&&t.parent){const{parent:W}=t,q=co(W,Q);if(W.enteringChildren&&q){const{delayChildren:oe}=q.transition||{};P.delay=a1(W.enteringChildren,t,oe)}}return{animation:Q,options:P}}))}if(d.size){const g={};if(typeof c.initial!="boolean"){const h=co(t,Array.isArray(c.initial)?c.initial[0]:c.initial);h&&h.transition&&(g.transition=h.transition)}d.forEach(h=>{const m=t.getBaseTarget(h),_=t.getValue(h);_&&(_.liveStyle=!0),g[h]=m??null}),f.push({animation:g})}let y=!!f.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(y=!1),i=!1,y?e(f):Promise.resolve()}function a(l,c){var f;if(n[l].isActive===c)return Promise.resolve();(f=t.variantChildren)==null||f.forEach(d=>{var p;return(p=d.animationState)==null?void 0:p.setActive(l,c)}),n[l].isActive=c;const u=o(l);for(const d in n)n[d].protectedKeys={};return u}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=rv()}}}function xI(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!l1(e,t):!1}function jr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function rv(){return{animate:jr(!0),whileInView:jr(),whileHover:jr(),whileTap:jr(),whileDrag:jr(),whileFocus:jr(),exit:jr()}}class Fr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class vI extends Fr{constructor(e){super(e),e.animationState||(e.animationState=gI(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Nu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let _I=0;class yI extends Fr{constructor(){super(...arguments),this.id=_I++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>{n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const SI={animation:{Feature:vI},exit:{Feature:yI}};function Ya(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function ll(t){return{point:{x:t.pageX,y:t.pageY}}}const MI=t=>e=>$m(e)&&t(e,ll(e));function va(t,e,n,i){return Ya(t,e,MI(n),i)}const u1=1e-4,EI=1-u1,bI=1+u1,f1=.01,TI=0-f1,wI=0+f1;function cn(t){return t.max-t.min}function AI(t,e,n){return Math.abs(t-e)<=n}function sv(t,e,n,i=.5){t.origin=i,t.originPoint=bt(e.min,e.max,t.origin),t.scale=cn(n)/cn(e),t.translate=bt(n.min,n.max,t.origin)-t.originPoint,(t.scale>=EI&&t.scale<=bI||isNaN(t.scale))&&(t.scale=1),(t.translate>=TI&&t.translate<=wI||isNaN(t.translate))&&(t.translate=0)}function _a(t,e,n,i){sv(t.x,e.x,n.x,i?i.originX:void 0),sv(t.y,e.y,n.y,i?i.originY:void 0)}function ov(t,e,n){t.min=n.min+e.min,t.max=t.min+cn(e)}function CI(t,e,n){ov(t.x,e.x,n.x),ov(t.y,e.y,n.y)}function av(t,e,n){t.min=e.min-n.min,t.max=t.min+cn(e)}function ya(t,e,n){av(t.x,e.x,n.x),av(t.y,e.y,n.y)}function Vn(t){return[t("x"),t("y")]}const d1=({current:t})=>t?t.ownerDocument.defaultView:null,lv=(t,e)=>Math.abs(t-e);function RI(t,e){const n=lv(t.x,e.x),i=lv(t.y,e.y);return Math.sqrt(n**2+i**2)}class h1{constructor(e,n,{transformPagePoint:i,contextWindow:r=window,dragSnapToOrigin:s=!1,distanceThreshold:o=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=Jf(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,x=RI(d.offset,{x:0,y:0})>=this.distanceThreshold;if(!p&&!x)return;const{point:y}=d,{timestamp:g}=jt;this.history.push({...y,timestamp:g});const{onStart:h,onMove:m}=this.handlers;p||(h&&h(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),m&&m(this.lastMoveEvent,d)},this.handlePointerMove=(d,p)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=Qf(p,this.transformPagePoint),ut.update(this.updatePoint,!0)},this.handlePointerUp=(d,p)=>{this.end();const{onEnd:x,onSessionEnd:y,resumeAnimation:g}=this.handlers;if(this.dragSnapToOrigin&&g&&g(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=Jf(d.type==="pointercancel"?this.lastMoveEventInfo:Qf(p,this.transformPagePoint),this.history);this.startEvent&&x&&x(d,h),y&&y(d,h)},!$m(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.distanceThreshold=o,this.contextWindow=r||window;const a=ll(e),l=Qf(a,this.transformPagePoint),{point:c}=l,{timestamp:u}=jt;this.history=[{...c,timestamp:u}];const{onSessionStart:f}=n;f&&f(e,Jf(l,this.history)),this.removeListeners=sl(va(this.contextWindow,"pointermove",this.handlePointerMove),va(this.contextWindow,"pointerup",this.handlePointerUp),va(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Ai(this.updatePoint)}}function Qf(t,e){return e?{point:e(t.point)}:t}function cv(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Jf({point:t},e){return{point:t,delta:cv(t,p1(e)),offset:cv(t,PI(e)),velocity:DI(e,.1)}}function PI(t){return t[0]}function p1(t){return t[t.length-1]}function DI(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=p1(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Ei(e)));)n--;if(!i)return{x:0,y:0};const s=$n(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function LI(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?bt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?bt(n,t,i.max):Math.min(t,n)),t}function uv(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function II(t,{top:e,left:n,bottom:i,right:r}){return{x:uv(t.x,n,r),y:uv(t.y,e,i)}}function fv(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function NI(t,e){return{x:fv(t.x,e.x),y:fv(t.y,e.y)}}function UI(t,e){let n=.5;const i=cn(t),r=cn(e);return r>i?n=Eo(e.min,e.max-i,t.min):i>r&&(n=Eo(t.min,t.max-r,e.min)),wi(0,1,n)}function FI(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const hp=.35;function OI(t=hp){return t===!1?t=0:t===!0&&(t=hp),{x:dv(t,"left","right"),y:dv(t,"top","bottom")}}function dv(t,e,n){return{min:hv(t,e),max:hv(t,n)}}function hv(t,e){return typeof t=="number"?t:t[e]||0}const kI=new WeakMap;class BI{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Lt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:i}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const s=f=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(ll(f).point)},o=(f,d)=>{const{drag:p,dragPropagation:x,onDragStart:y}=this.getProps();if(p&&!x&&(this.openDragLock&&this.openDragLock(),this.openDragLock=UD(p),!this.openDragLock))return;this.latestPointerEvent=f,this.latestPanInfo=d,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Vn(h=>{let m=this.getAxisMotionValue(h).get()||0;if(bi.test(m)){const{projection:_}=this.visualElement;if(_&&_.layout){const M=_.layout.layoutBox[h];M&&(m=cn(M)*(parseFloat(m)/100))}}this.originPoint[h]=m}),y&&ut.postRender(()=>y(f,d)),fp(this.visualElement,"transform");const{animationState:g}=this.visualElement;g&&g.setActive("whileDrag",!0)},a=(f,d)=>{this.latestPointerEvent=f,this.latestPanInfo=d;const{dragPropagation:p,dragDirectionLock:x,onDirectionLock:y,onDrag:g}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:h}=d;if(x&&this.currentDirection===null){this.currentDirection=zI(h),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",d.point,h),this.updateAxis("y",d.point,h),this.visualElement.render(),g&&g(f,d)},l=(f,d)=>{this.latestPointerEvent=f,this.latestPanInfo=d,this.stop(f,d),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>Vn(f=>{var d;return this.getAnimationState(f)==="paused"&&((d=this.getAxisMotionValue(f).animation)==null?void 0:d.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new h1(e,{onSessionStart:s,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,distanceThreshold:i,contextWindow:d1(this.visualElement)})}stop(e,n){const i=e||this.latestPointerEvent,r=n||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!r||!i)return;const{velocity:o}=r;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&ut.postRender(()=>a(i,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!tc(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=LI(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var s;const{dragConstraints:e,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,r=this.constraints;e&&Zs(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=II(i.layoutBox,e):this.constraints=!1,this.elastic=OI(n),r!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Vn(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=FI(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Zs(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=VL(i,r.root,this.visualElement.getTransformPagePoint());let o=NI(r.layout.layoutBox,s);if(n){const a=n(kL(o));this.hasMutatedConstraints=!!a,a&&(o=ZM(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Vn(u=>{if(!tc(u,n,this.currentDirection))return;let f=l&&l[u]||{};o&&(f={min:0,max:0});const d=r?200:1e6,p=r?40:1e7,x={type:"inertia",velocity:i?e[u]:0,bounceStiffness:d,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(u,x)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return fp(this.visualElement,e),i.start(r0(e,i,0,n,this.visualElement,!1))}stopAnimation(){Vn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Vn(e=>{var n;return(n=this.getAxisMotionValue(e).animation)==null?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)==null?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Vn(n=>{const{drag:i}=this.getProps();if(!tc(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-bt(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Zs(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Vn(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=UI({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Vn(o=>{if(!tc(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(bt(l,c,r[o]))})}addListeners(){if(!this.visualElement.current)return;kI.set(this.visualElement,this);const e=this.visualElement.current,n=va(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Zs(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),ut.read(i);const o=Ya(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Vn(u=>{const f=this.getAxisMotionValue(u);f&&(this.originPoint[u]+=l[u].translate,f.set(f.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=hp,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function tc(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function zI(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class VI extends Fr{constructor(e){super(e),this.removeGroupControls=Tn,this.removeListeners=Tn,this.controls=new BI(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Tn}unmount(){this.removeGroupControls(),this.removeListeners()}}const pv=t=>(e,n)=>{t&&ut.postRender(()=>t(e,n))};class HI extends Fr{constructor(){super(...arguments),this.removePointerDownListener=Tn}onPointerDown(e){this.session=new h1(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:d1(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:pv(e),onStart:pv(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&ut.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=va(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Rc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function mv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Zo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Oe.test(t))t=parseFloat(t);else return t;const n=mv(t,e.target.x),i=mv(t,e.target.y);return`${n}% ${i}%`}},GI={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=Dr.parse(t);if(r.length>5)return i;const s=Dr.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=bt(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}};let ed=!1;class WI extends te.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;dL(jI),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),ed&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Rc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,{projection:o}=i;return o&&(o.isPresent=s,ed=!0,r||e.layoutDependency!==n||n===void 0||e.isPresent!==s?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||ut.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Xm.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;ed=!0,r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function m1(t){const[e,n]=OM(),i=te.useContext(Em);return O.jsx(WI,{...t,layoutGroup:i,switchLayoutGroup:te.useContext(qM),isPresent:e,safeToRemove:n})}const jI={borderRadius:{...Zo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Zo,borderTopRightRadius:Zo,borderBottomLeftRadius:Zo,borderBottomRightRadius:Zo,boxShadow:GI};function XI(t,e,n){const i=rn(t)?t:yi(t);return i.start(r0("",i,e,n)),i.animation}const $I=(t,e)=>t.depth-e.depth;class YI{constructor(){this.children=[],this.isDirty=!1}add(e){wm(this.children,e),this.isDirty=!0}remove(e){Am(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort($I),this.isDirty=!1,this.children.forEach(e)}}function qI(t,e){const n=_n.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Ai(i),t(s-e))};return ut.setup(i,!0),()=>Ai(i)}const g1=["TopLeft","TopRight","BottomLeft","BottomRight"],KI=g1.length,gv=t=>typeof t=="string"?parseFloat(t):t,xv=t=>typeof t=="number"||Oe.test(t);function ZI(t,e,n,i,r,s){r?(t.opacity=bt(0,n.opacity??1,QI(i)),t.opacityExit=bt(e.opacity??1,0,JI(i))):s&&(t.opacity=bt(e.opacity??1,n.opacity??1,i));for(let o=0;o<KI;o++){const a=`border${g1[o]}Radius`;let l=vv(e,a),c=vv(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||xv(l)===xv(c)?(t[a]=Math.max(bt(gv(l),gv(c),i),0),(bi.test(c)||bi.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=bt(e.rotate||0,n.rotate||0,i))}function vv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const QI=x1(0,.5,JS),JI=x1(.5,.95,Tn);function x1(t,e,n){return i=>i<t?0:i>e?1:n(Eo(t,e,i))}function _v(t,e){t.min=e.min,t.max=e.max}function zn(t,e){_v(t.x,e.x),_v(t.y,e.y)}function yv(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function Sv(t,e,n,i,r){return t-=e,t=uu(t,1/n,i),r!==void 0&&(t=uu(t,1/r,i)),t}function eN(t,e=0,n=1,i=.5,r,s=t,o=t){if(bi.test(e)&&(e=parseFloat(e),e=bt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=bt(s.min,s.max,i);t===s&&(a-=e),t.min=Sv(t.min,e,n,a,r),t.max=Sv(t.max,e,n,a,r)}function Mv(t,e,[n,i,r],s,o){eN(t,e[n],e[i],e[r],e.scale,s,o)}const tN=["x","scaleX","originX"],nN=["y","scaleY","originY"];function Ev(t,e,n,i){Mv(t.x,e,tN,n?n.x:void 0,i?i.x:void 0),Mv(t.y,e,nN,n?n.y:void 0,i?i.y:void 0)}function bv(t){return t.translate===0&&t.scale===1}function v1(t){return bv(t.x)&&bv(t.y)}function Tv(t,e){return t.min===e.min&&t.max===e.max}function iN(t,e){return Tv(t.x,e.x)&&Tv(t.y,e.y)}function wv(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function _1(t,e){return wv(t.x,e.x)&&wv(t.y,e.y)}function Av(t){return cn(t.x)/cn(t.y)}function Cv(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class rN{constructor(){this.members=[]}add(e){wm(this.members,e),e.scheduleRender()}remove(e){if(Am(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function sN(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:f,rotateY:d,skewX:p,skewY:x}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),f&&(i+=`rotateX(${f}deg) `),d&&(i+=`rotateY(${d}deg) `),p&&(i+=`skewX(${p}deg) `),x&&(i+=`skewY(${x}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const td=["","X","Y","Z"],oN=1e3;let aN=0;function nd(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function y1(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=s1(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",ut,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&y1(i)}function S1({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=aN++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(uN),this.nodes.forEach(pN),this.nodes.forEach(mN),this.nodes.forEach(fN)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new YI)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Rm),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=Ym(o)&&!KD(o),this.instance=o;const{layoutId:a,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),t){let u,f=0;const d=()=>this.root.updateBlockedByResize=!1;ut.read(()=>{f=window.innerWidth}),t(o,()=>{const p=window.innerWidth;p!==f&&(f=p,this.root.updateBlockedByResize=!0,u&&u(),u=qI(d,250),Rc.hasAnimatedSinceResize&&(Rc.hasAnimatedSinceResize=!1,this.nodes.forEach(Dv)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&c&&(a||l)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:f,hasRelativeLayoutChanged:d,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||c.getDefaultTransition()||yN,{onLayoutAnimationStart:y,onLayoutAnimationComplete:g}=c.getProps(),h=!this.targetLayout||!_1(this.targetLayout,p),m=!f&&d;if(this.options.layoutRoot||this.resumeFrom||m||f&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const _={...Gm(x,"layout"),onPlay:y,onComplete:g};(c.shouldReduceMotion||this.options.layoutRoot)&&(_.delay=0,_.type=!1),this.startAnimation(_),this.setAnimationOrigin(u,m)}else f||Dv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ai(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(gN),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&y1(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const f=this.path[u];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Rv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Pv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(hN),this.nodes.forEach(lN),this.nodes.forEach(cN)):this.nodes.forEach(Pv),this.clearAllSnapshots();const a=_n.now();jt.delta=wi(0,1e3/60,a-jt.timestamp),jt.timestamp=a,jt.isProcessing=!0,Wf.update.process(jt),Wf.preRender.process(jt),Wf.render.process(jt),jt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Xm.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(dN),this.sharedNodes.forEach(xN)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ut.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ut.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!cn(this.snapshot.measuredBox.x)&&!cn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Lt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!v1(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&this.instance&&(a||Kr(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),SN(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:o}=this.options;if(!o)return Lt();const a=o.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(MN))){const{scroll:u}=this.root;u&&(Qs(a.x,u.offset.x),Qs(a.y,u.offset.y))}return a}removeElementScroll(o){var l;const a=Lt();if(zn(a,o),(l=this.scroll)!=null&&l.wasRoot)return a;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:f,options:d}=u;u!==this.root&&f&&d.layoutScroll&&(f.wasRoot&&zn(a,o),Qs(a.x,f.offset.x),Qs(a.y,f.offset.y))}return a}applyTransform(o,a=!1){const l=Lt();zn(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Js(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Kr(u.latestValues)&&Js(l,u.latestValues)}return Kr(this.latestValues)&&Js(l,this.latestValues),l}removeTransform(o){const a=Lt();zn(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Kr(c.latestValues))continue;ap(c.latestValues)&&c.updateSnapshot();const u=Lt(),f=c.measurePageBox();zn(u,f),Ev(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return Kr(this.latestValues)&&Ev(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==jt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var d;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(d=this.parent)!=null&&d.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:u,layoutId:f}=this.options;if(!(!this.layout||!(u||f))){if(this.resolvedRelativeTargetAt=jt.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Lt(),this.relativeTargetOrigin=Lt(),ya(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),zn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Lt(),this.targetWithTransforms=Lt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),CI(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):zn(this.target,this.layout.layoutBox),JM(this.target,this.targetDelta)):zn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Lt(),this.relativeTargetOrigin=Lt(),ya(this.relativeTargetOrigin,this.target,p.target),zn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||ap(this.parent.latestValues)||QM(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var x;const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(x=this.parent)!=null&&x.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===jt.timestamp&&(l=!1),l)return;const{layout:c,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||u))return;zn(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,d=this.treeScale.y;zL(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=Lt());const{target:p}=o;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(yv(this.prevProjectionDelta.x,this.projectionDelta.x),yv(this.prevProjectionDelta.y,this.projectionDelta.y)),_a(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==d||!Cv(this.projectionDelta.x,this.prevProjectionDelta.x)||!Cv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=eo(),this.projectionDelta=eo(),this.projectionDeltaWithTransform=eo()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},f=eo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=Lt(),p=l?l.source:void 0,x=this.layout?this.layout.source:void 0,y=p!==x,g=this.getStack(),h=!g||g.members.length<=1,m=!!(y&&!h&&this.options.crossfade===!0&&!this.path.some(_N));this.animationProgress=0;let _;this.mixTargetDelta=M=>{const b=M/1e3;Lv(f.x,o.x,b),Lv(f.y,o.y,b),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ya(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),vN(this.relativeTarget,this.relativeTargetOrigin,d,b),_&&iN(this.relativeTarget,_)&&(this.isProjectionDirty=!1),_||(_=Lt()),zn(_,this.relativeTarget)),y&&(this.animationValues=u,ZI(u,c,this.latestValues,b,m,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=b},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var a,l,c;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(c=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||c.stop(),this.pendingAnimation&&(Ai(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ut.update(()=>{Rc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=yi(0)),this.currentAnimation=XI(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:u=>{this.mixTargetDelta(u),o.onUpdate&&o.onUpdate(u)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(oN),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&M1(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Lt();const f=cn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const d=cn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+d}zn(a,l),Js(a,u),_a(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new rN),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&nd("z",o,c,this.animationValues);for(let u=0;u<td.length;u++)nd(`rotate${td[u]}`,o,c,this.animationValues),nd(`skew${td[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=Cc(a==null?void 0:a.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=Cc(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!Kr(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const u=c.animationValues||c.latestValues;this.applyTransformsToTarget();let f=sN(this.projectionDeltaWithTransform,this.treeScale,u);l&&(f=l(u,f)),o.transform=f;const{x:d,y:p}=this.projectionDelta;o.transformOrigin=`${d.origin*100}% ${p.origin*100}% 0`,c.animationValues?o.opacity=c===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:o.opacity=c===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const x in $a){if(u[x]===void 0)continue;const{correct:y,applyTo:g,isCSSVariable:h}=$a[x],m=f==="none"?u[x]:y(u[x],c);if(g){const _=g.length;for(let M=0;M<_;M++)o[g[M]]=m}else h?this.options.visualElement.renderState.vars[x]=m:o[x]=m}this.options.layoutId&&(o.pointerEvents=c===this?Cc(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(Rv),this.root.sharedNodes.clear()}}}function lN(t){t.updateLayout()}function cN(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=e.source!==t.layout.source;s==="size"?Vn(f=>{const d=o?e.measuredBox[f]:e.layoutBox[f],p=cn(d);d.min=i[f].min,d.max=d.min+p}):M1(s,e.layoutBox,i)&&Vn(f=>{const d=o?e.measuredBox[f]:e.layoutBox[f],p=cn(i[f]);d.max=d.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+p)});const a=eo();_a(a,i,e.layoutBox);const l=eo();o?_a(l,t.applyTransform(r,!0),e.measuredBox):_a(l,i,e.layoutBox);const c=!v1(a);let u=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:d,layout:p}=f;if(d&&p){const x=Lt();ya(x,e.layoutBox,d.layoutBox);const y=Lt();ya(y,i,p.layoutBox),_1(x,y)||(u=!0),f.options.layoutRoot&&(t.relativeTarget=y,t.relativeTargetOrigin=x,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeLayoutChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function uN(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function fN(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function dN(t){t.clearSnapshot()}function Rv(t){t.clearMeasurements()}function Pv(t){t.isLayoutDirty=!1}function hN(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Dv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function pN(t){t.resolveTargetDelta()}function mN(t){t.calcProjection()}function gN(t){t.resetSkewAndRotation()}function xN(t){t.removeLeadSnapshot()}function Lv(t,e,n){t.translate=bt(e.translate,0,n),t.scale=bt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Iv(t,e,n,i){t.min=bt(e.min,n.min,i),t.max=bt(e.max,n.max,i)}function vN(t,e,n,i){Iv(t.x,e.x,n.x,i),Iv(t.y,e.y,n.y,i)}function _N(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const yN={duration:.45,ease:[.4,0,.1,1]},Nv=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Uv=Nv("applewebkit/")&&!Nv("chrome/")?Math.round:Tn;function Fv(t){t.min=Uv(t.min),t.max=Uv(t.max)}function SN(t){Fv(t.x),Fv(t.y)}function M1(t,e,n){return t==="position"||t==="preserve-aspect"&&!AI(Av(e),Av(n),.2)}function MN(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const EN=S1({attachResizeListener:(t,e)=>Ya(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),id={current:void 0},E1=S1({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!id.current){const t=new EN({});t.mount(window),t.setOptions({layoutScroll:!0}),id.current=t}return id.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),bN={pan:{Feature:HI},drag:{Feature:VI,ProjectionNode:E1,MeasureLayout:m1}};function Ov(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&ut.postRender(()=>s(e,ll(e)))}class TN extends Fr{mount(){const{current:e}=this.node;e&&(this.unmount=FD(e,(n,i)=>(Ov(this.node,i,"Start"),r=>Ov(this.node,r,"End"))))}unmount(){}}class wN extends Fr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=sl(Ya(this.node.current,"focus",()=>this.onFocus()),Ya(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function kv(t,e,n){const{props:i}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&ut.postRender(()=>s(e,ll(e)))}class AN extends Fr{mount(){const{current:e}=this.node;e&&(this.unmount=zD(e,(n,i)=>(kv(this.node,i,"Start"),(r,{success:s})=>kv(this.node,r,s?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const pp=new WeakMap,rd=new WeakMap,CN=t=>{const e=pp.get(t.target);e&&e(t)},RN=t=>{t.forEach(CN)};function PN({root:t,...e}){const n=t||document;rd.has(n)||rd.set(n,{});const i=rd.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(RN,{root:t,...e})),i[r]}function DN(t,e,n){const i=PN(e);return pp.set(t,n),i.observe(t),()=>{pp.delete(t),i.unobserve(t)}}const LN={some:0,all:1};class IN extends Fr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:LN[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:f}=this.node.getProps(),d=c?u:f;d&&d(l)};return DN(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(NN(e,n))&&this.startObserver()}unmount(){}}function NN({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const UN={inView:{Feature:IN},tap:{Feature:AN},focus:{Feature:wN},hover:{Feature:TN}},FN={layout:{ProjectionNode:E1,MeasureLayout:m1}},ON={...SI,...UN,...bN,...FN},_t=OL(ON,KL),kN=50,Bv=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),BN=()=>({time:0,x:Bv(),y:Bv()}),zN={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function zv(t,e,n,i){const r=n[e],{length:s,position:o}=zN[e],a=r.current,l=n.time;r.current=t[`scroll${o}`],r.scrollLength=t[`scroll${s}`]-t[`client${s}`],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=Eo(0,r.scrollLength,r.current);const c=i-l;r.velocity=c>kN?0:Pm(r.current-a,c)}function VN(t,e,n){zv(t,"x",e,n),zv(t,"y",e,n),e.time=n}function HN(t,e){const n={x:0,y:0};let i=t;for(;i&&i!==e;)if(jm(i))n.x+=i.offsetLeft,n.y+=i.offsetTop,i=i.offsetParent;else if(i.tagName==="svg"){const r=i.getBoundingClientRect();i=i.parentElement;const s=i.getBoundingClientRect();n.x+=r.left-s.left,n.y+=r.top-s.top}else if(i instanceof SVGGraphicsElement){const{x:r,y:s}=i.getBBox();n.x+=r,n.y+=s;let o=null,a=i.parentNode;for(;!o;)a.tagName==="svg"&&(o=a),a=i.parentNode;i=o}else break;return n}const mp={start:0,center:.5,end:1};function Vv(t,e,n=0){let i=0;if(t in mp&&(t=mp[t]),typeof t=="string"){const r=parseFloat(t);t.endsWith("px")?i=r:t.endsWith("%")?t=r/100:t.endsWith("vw")?i=r/100*document.documentElement.clientWidth:t.endsWith("vh")?i=r/100*document.documentElement.clientHeight:t=r}return typeof t=="number"&&(i=e*t),n+i}const GN=[0,0];function WN(t,e,n,i){let r=Array.isArray(t)?t:GN,s=0,o=0;return typeof t=="number"?r=[t,t]:typeof t=="string"&&(t=t.trim(),t.includes(" ")?r=t.split(" "):r=[t,mp[t]?t:"0"]),s=Vv(r[0],n,i),o=Vv(r[1],e),s-o}const jN={All:[[0,0],[1,1]]},XN={x:0,y:0};function $N(t){return"getBBox"in t&&t.tagName!=="svg"?t.getBBox():{width:t.clientWidth,height:t.clientHeight}}function YN(t,e,n){const{offset:i=jN.All}=n,{target:r=t,axis:s="y"}=n,o=s==="y"?"height":"width",a=r!==t?HN(r,t):XN,l=r===t?{width:t.scrollWidth,height:t.scrollHeight}:$N(r),c={width:t.clientWidth,height:t.clientHeight};e[s].offset.length=0;let u=!e[s].interpolate;const f=i.length;for(let d=0;d<f;d++){const p=WN(i[d],c[o],l[o],a[s]);!u&&p!==e[s].interpolatorOffsets[d]&&(u=!0),e[s].offset[d]=p}u&&(e[s].interpolate=pM(e[s].offset,mM(i),{clamp:!1}),e[s].interpolatorOffsets=[...e[s].offset]),e[s].progress=wi(0,1,e[s].interpolate(e[s].current))}function qN(t,e=t,n){if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let i=e;for(;i&&i!==t;)n.x.targetOffset+=i.offsetLeft,n.y.targetOffset+=i.offsetTop,i=i.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight}function KN(t,e,n,i={}){return{measure:r=>{qN(t,i.target,n),VN(t,n,r),(i.offset||i.target)&&YN(t,n,i)},notify:()=>e(n)}}const Qo=new WeakMap,Hv=new WeakMap,sd=new WeakMap,Gv=t=>t===document.scrollingElement?window:t;function b1(t,{container:e=document.scrollingElement,...n}={}){if(!e)return Tn;let i=sd.get(e);i||(i=new Set,sd.set(e,i));const r=BN(),s=KN(e,t,r,n);if(i.add(s),!Qo.has(e)){const a=()=>{for(const f of i)f.measure(jt.timestamp);ut.preUpdate(l)},l=()=>{for(const f of i)f.notify()},c=()=>ut.read(a);Qo.set(e,c);const u=Gv(e);window.addEventListener("resize",c,{passive:!0}),e!==document.documentElement&&Hv.set(e,qD(e,c)),u.addEventListener("scroll",c,{passive:!0}),c()}const o=Qo.get(e);return ut.read(o,!1,!0),()=>{var c;Ai(o);const a=sd.get(e);if(!a||(a.delete(s),a.size))return;const l=Qo.get(e);Qo.delete(e),l&&(Gv(e).removeEventListener("scroll",l),(c=Hv.get(e))==null||c(),window.removeEventListener("resize",l))}}const Wv=new Map;function ZN(t){const e={value:0},n=b1(i=>{e.value=i[t.axis].progress*100},t);return{currentTime:e,cancel:n}}function T1({source:t,container:e,...n}){const{axis:i}=n;t&&(e=t);const r=Wv.get(e)??new Map;Wv.set(e,r);const s=n.target??"self",o=r.get(s)??{},a=i+(n.offset??[]).join(",");return o[a]||(o[a]=!n.target&&_M()?new ScrollTimeline({source:e,axis:i}):ZN({container:e,...n})),o[a]}function QN(t,e){const n=T1(e);return t.attachTimeline({timeline:e.target?void 0:n,observe:i=>(i.pause(),FM(r=>{i.time=i.iterationDuration*r},n))})}function JN(t){return t.length===2}function eU(t,e){return JN(t)?b1(n=>{t(n[e.axis].progress,n)},e):FM(t,T1(e))}function tU(t,{axis:e="y",container:n=document.scrollingElement,...i}={}){if(!n)return Tn;const r={axis:e,container:n,...i};return typeof t=="function"?eU(t,r):QN(t,r)}const nU=()=>({scrollX:yi(0),scrollY:yi(0),scrollXProgress:yi(0),scrollYProgress:yi(0)}),nc=t=>t?!t.current:!1;function iU({container:t,target:e,...n}={}){const i=Du(nU),r=te.useRef(null),s=te.useRef(!1),o=te.useCallback(()=>(r.current=tU((a,{x:l,y:c})=>{i.scrollX.set(l.current),i.scrollXProgress.set(l.progress),i.scrollY.set(c.current),i.scrollYProgress.set(c.progress)},{...n,container:(t==null?void 0:t.current)||void 0,target:(e==null?void 0:e.current)||void 0}),()=>{var a;(a=r.current)==null||a.call(r)}),[t,e,JSON.stringify(n.offset)]);return Tm(()=>{if(s.current=!1,nc(t)||nc(e)){s.current=!0;return}else return o()},[o]),te.useEffect(()=>{if(s.current)return Ga(!nc(t)),Ga(!nc(e)),o()},[o]),i}const ic=()=>O.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[...Array(20)].map((t,e)=>O.jsx(_t.div,{className:"absolute w-1 h-1 bg-green-400/30 rounded-full",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`},animate:{y:[0,-30,0],x:[0,Math.random()*20-10,0],opacity:[.2,.6,.2]},transition:{duration:3+Math.random()*2,repeat:1/0,delay:Math.random()*2}},e))}),rc=({children:t})=>O.jsx(_t.h2,{className:"relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#E8C14B] via-[#46E2A1] to-[#9B4CC2] bg-[length:200%_100%] text-3xl font-bold",animate:{backgroundPosition:["0% 50%","100% 50%","0% 50%"]},transition:{duration:3,repeat:1/0,ease:"linear"},children:t}),od=({text:t,delay:e=0})=>O.jsxs(_t.div,{initial:{opacity:0,y:20,scale:.9},animate:{opacity:1,y:0,scale:1},transition:{delay:e,duration:.5},className:"relative group",children:[O.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#9B4CC2]/20 to-[#46E2A1]/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300"}),O.jsxs("div",{className:"relative bg-[#1B0F1F]/60 backdrop-blur-sm border border-[#9B4CC2]/30 rounded-2xl px-6 py-4 hover:border-[#E8C14B]/50 transition-all duration-300",children:[O.jsx("p",{className:"text-white/80 text-sm font-light tracking-wide",children:t}),O.jsx("div",{className:"absolute top-2 right-2 w-2 h-2 bg-[#46E2A1] rounded-full animate-pulse"})]})]}),s0="-",rU=t=>{const e=oU(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=t;return{getClassGroupId:o=>{const a=o.split(s0);return a[0]===""&&a.length!==1&&a.shift(),w1(a,e)||sU(o)},getConflictingClassGroupIds:(o,a)=>{const l=n[o]||[];return a&&i[o]?[...l,...i[o]]:l}}},w1=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],i=e.nextPart.get(n),r=i?w1(t.slice(1),i):void 0;if(r)return r;if(e.validators.length===0)return;const s=t.join(s0);return(o=e.validators.find(({validator:a})=>a(s)))==null?void 0:o.classGroupId},jv=/^\[(.+)\]$/,sU=t=>{if(jv.test(t)){const e=jv.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},oU=t=>{const{theme:e,classGroups:n}=t,i={nextPart:new Map,validators:[]};for(const r in n)gp(n[r],i,r,e);return i},gp=(t,e,n,i)=>{t.forEach(r=>{if(typeof r=="string"){const s=r===""?e:Xv(e,r);s.classGroupId=n;return}if(typeof r=="function"){if(aU(r)){gp(r(i),e,n,i);return}e.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([s,o])=>{gp(o,Xv(e,s),n,i)})})},Xv=(t,e)=>{let n=t;return e.split(s0).forEach(i=>{n.nextPart.has(i)||n.nextPart.set(i,{nextPart:new Map,validators:[]}),n=n.nextPart.get(i)}),n},aU=t=>t.isThemeGetter,lU=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,i=new Map;const r=(s,o)=>{n.set(s,o),e++,e>t&&(e=0,i=n,n=new Map)};return{get(s){let o=n.get(s);if(o!==void 0)return o;if((o=i.get(s))!==void 0)return r(s,o),o},set(s,o){n.has(s)?n.set(s,o):r(s,o)}}},xp="!",vp=":",cU=vp.length,uU=t=>{const{prefix:e,experimentalParseClassName:n}=t;let i=r=>{const s=[];let o=0,a=0,l=0,c;for(let x=0;x<r.length;x++){let y=r[x];if(o===0&&a===0){if(y===vp){s.push(r.slice(l,x)),l=x+cU;continue}if(y==="/"){c=x;continue}}y==="["?o++:y==="]"?o--:y==="("?a++:y===")"&&a--}const u=s.length===0?r:r.substring(l),f=fU(u),d=f!==u,p=c&&c>l?c-l:void 0;return{modifiers:s,hasImportantModifier:d,baseClassName:f,maybePostfixModifierPosition:p}};if(e){const r=e+vp,s=i;i=o=>o.startsWith(r)?s(o.substring(r.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:o,maybePostfixModifierPosition:void 0}}if(n){const r=i;i=s=>n({className:s,parseClassName:r})}return i},fU=t=>t.endsWith(xp)?t.substring(0,t.length-1):t.startsWith(xp)?t.substring(1):t,dU=t=>{const e=Object.fromEntries(t.orderSensitiveModifiers.map(i=>[i,!0]));return i=>{if(i.length<=1)return i;const r=[];let s=[];return i.forEach(o=>{o[0]==="["||e[o]?(r.push(...s.sort(),o),s=[]):s.push(o)}),r.push(...s.sort()),r}},hU=t=>({cache:lU(t.cacheSize),parseClassName:uU(t),sortModifiers:dU(t),...rU(t)}),pU=/\s+/,mU=(t,e)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:r,sortModifiers:s}=e,o=[],a=t.trim().split(pU);let l="";for(let c=a.length-1;c>=0;c-=1){const u=a[c],{isExternal:f,modifiers:d,hasImportantModifier:p,baseClassName:x,maybePostfixModifierPosition:y}=n(u);if(f){l=u+(l.length>0?" "+l:l);continue}let g=!!y,h=i(g?x.substring(0,y):x);if(!h){if(!g){l=u+(l.length>0?" "+l:l);continue}if(h=i(x),!h){l=u+(l.length>0?" "+l:l);continue}g=!1}const m=s(d).join(":"),_=p?m+xp:m,M=_+h;if(o.includes(M))continue;o.push(M);const b=r(h,g);for(let S=0;S<b.length;++S){const A=b[S];o.push(_+A)}l=u+(l.length>0?" "+l:l)}return l};function gU(){let t=0,e,n,i="";for(;t<arguments.length;)(e=arguments[t++])&&(n=A1(e))&&(i&&(i+=" "),i+=n);return i}const A1=t=>{if(typeof t=="string")return t;let e,n="";for(let i=0;i<t.length;i++)t[i]&&(e=A1(t[i]))&&(n&&(n+=" "),n+=e);return n};function xU(t,...e){let n,i,r,s=o;function o(l){const c=e.reduce((u,f)=>f(u),t());return n=hU(c),i=n.cache.get,r=n.cache.set,s=a,a(l)}function a(l){const c=i(l);if(c)return c;const u=mU(l,n);return r(l,u),u}return function(){return s(gU.apply(null,arguments))}}const Bt=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},C1=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,R1=/^\((?:(\w[\w-]*):)?(.+)\)$/i,vU=/^\d+\/\d+$/,_U=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,yU=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,SU=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,MU=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,EU=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Fs=t=>vU.test(t),Ye=t=>!!t&&!Number.isNaN(Number(t)),ar=t=>!!t&&Number.isInteger(Number(t)),ad=t=>t.endsWith("%")&&Ye(t.slice(0,-1)),Ui=t=>_U.test(t),bU=()=>!0,TU=t=>yU.test(t)&&!SU.test(t),P1=()=>!1,wU=t=>MU.test(t),AU=t=>EU.test(t),CU=t=>!_e(t)&&!ye(t),RU=t=>Io(t,I1,P1),_e=t=>C1.test(t),Xr=t=>Io(t,N1,TU),ld=t=>Io(t,NU,Ye),$v=t=>Io(t,D1,P1),PU=t=>Io(t,L1,AU),sc=t=>Io(t,U1,wU),ye=t=>R1.test(t),Jo=t=>No(t,N1),DU=t=>No(t,UU),Yv=t=>No(t,D1),LU=t=>No(t,I1),IU=t=>No(t,L1),oc=t=>No(t,U1,!0),Io=(t,e,n)=>{const i=C1.exec(t);return i?i[1]?e(i[1]):n(i[2]):!1},No=(t,e,n=!1)=>{const i=R1.exec(t);return i?i[1]?e(i[1]):n:!1},D1=t=>t==="position"||t==="percentage",L1=t=>t==="image"||t==="url",I1=t=>t==="length"||t==="size"||t==="bg-size",N1=t=>t==="length",NU=t=>t==="number",UU=t=>t==="family-name",U1=t=>t==="shadow",FU=()=>{const t=Bt("color"),e=Bt("font"),n=Bt("text"),i=Bt("font-weight"),r=Bt("tracking"),s=Bt("leading"),o=Bt("breakpoint"),a=Bt("container"),l=Bt("spacing"),c=Bt("radius"),u=Bt("shadow"),f=Bt("inset-shadow"),d=Bt("text-shadow"),p=Bt("drop-shadow"),x=Bt("blur"),y=Bt("perspective"),g=Bt("aspect"),h=Bt("ease"),m=Bt("animate"),_=()=>["auto","avoid","all","avoid-page","page","left","right","column"],M=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],b=()=>[...M(),ye,_e],S=()=>["auto","hidden","clip","visible","scroll"],A=()=>["auto","contain","none"],R=()=>[ye,_e,l],T=()=>[Fs,"full","auto",...R()],E=()=>[ar,"none","subgrid",ye,_e],D=()=>["auto",{span:["full",ar,ye,_e]},ar,ye,_e],k=()=>[ar,"auto",ye,_e],H=()=>["auto","min","max","fr",ye,_e],Y=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Z=()=>["start","end","center","stretch","center-safe","end-safe"],X=()=>["auto",...R()],Q=()=>[Fs,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...R()],P=()=>[t,ye,_e],W=()=>[...M(),Yv,$v,{position:[ye,_e]}],q=()=>["no-repeat",{repeat:["","x","y","space","round"]}],oe=()=>["auto","cover","contain",LU,RU,{size:[ye,_e]}],we=()=>[ad,Jo,Xr],Pe=()=>["","none","full",c,ye,_e],Le=()=>["",Ye,Jo,Xr],Ze=()=>["solid","dashed","dotted","double"],J=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],K=()=>[Ye,ad,Yv,$v],he=()=>["","none",x,ye,_e],Ne=()=>["none",Ye,ye,_e],Te=()=>["none",Ye,ye,_e],We=()=>[Ye,ye,_e],xt=()=>[Fs,"full",...R()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Ui],breakpoint:[Ui],color:[bU],container:[Ui],"drop-shadow":[Ui],ease:["in","out","in-out"],font:[CU],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Ui],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Ui],shadow:[Ui],spacing:["px",Ye],text:[Ui],"text-shadow":[Ui],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Fs,_e,ye,g]}],container:["container"],columns:[{columns:[Ye,_e,ye,a]}],"break-after":[{"break-after":_()}],"break-before":[{"break-before":_()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:b()}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:A()}],"overscroll-x":[{"overscroll-x":A()}],"overscroll-y":[{"overscroll-y":A()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:T()}],"inset-x":[{"inset-x":T()}],"inset-y":[{"inset-y":T()}],start:[{start:T()}],end:[{end:T()}],top:[{top:T()}],right:[{right:T()}],bottom:[{bottom:T()}],left:[{left:T()}],visibility:["visible","invisible","collapse"],z:[{z:[ar,"auto",ye,_e]}],basis:[{basis:[Fs,"full","auto",a,...R()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Ye,Fs,"auto","initial","none",_e]}],grow:[{grow:["",Ye,ye,_e]}],shrink:[{shrink:["",Ye,ye,_e]}],order:[{order:[ar,"first","last","none",ye,_e]}],"grid-cols":[{"grid-cols":E()}],"col-start-end":[{col:D()}],"col-start":[{"col-start":k()}],"col-end":[{"col-end":k()}],"grid-rows":[{"grid-rows":E()}],"row-start-end":[{row:D()}],"row-start":[{"row-start":k()}],"row-end":[{"row-end":k()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":H()}],"auto-rows":[{"auto-rows":H()}],gap:[{gap:R()}],"gap-x":[{"gap-x":R()}],"gap-y":[{"gap-y":R()}],"justify-content":[{justify:[...Y(),"normal"]}],"justify-items":[{"justify-items":[...Z(),"normal"]}],"justify-self":[{"justify-self":["auto",...Z()]}],"align-content":[{content:["normal",...Y()]}],"align-items":[{items:[...Z(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Z(),{baseline:["","last"]}]}],"place-content":[{"place-content":Y()}],"place-items":[{"place-items":[...Z(),"baseline"]}],"place-self":[{"place-self":["auto",...Z()]}],p:[{p:R()}],px:[{px:R()}],py:[{py:R()}],ps:[{ps:R()}],pe:[{pe:R()}],pt:[{pt:R()}],pr:[{pr:R()}],pb:[{pb:R()}],pl:[{pl:R()}],m:[{m:X()}],mx:[{mx:X()}],my:[{my:X()}],ms:[{ms:X()}],me:[{me:X()}],mt:[{mt:X()}],mr:[{mr:X()}],mb:[{mb:X()}],ml:[{ml:X()}],"space-x":[{"space-x":R()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":R()}],"space-y-reverse":["space-y-reverse"],size:[{size:Q()}],w:[{w:[a,"screen",...Q()]}],"min-w":[{"min-w":[a,"screen","none",...Q()]}],"max-w":[{"max-w":[a,"screen","none","prose",{screen:[o]},...Q()]}],h:[{h:["screen","lh",...Q()]}],"min-h":[{"min-h":["screen","lh","none",...Q()]}],"max-h":[{"max-h":["screen","lh",...Q()]}],"font-size":[{text:["base",n,Jo,Xr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[i,ye,ld]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",ad,_e]}],"font-family":[{font:[DU,_e,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[r,ye,_e]}],"line-clamp":[{"line-clamp":[Ye,"none",ye,ld]}],leading:[{leading:[s,...R()]}],"list-image":[{"list-image":["none",ye,_e]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",ye,_e]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:P()}],"text-color":[{text:P()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Ze(),"wavy"]}],"text-decoration-thickness":[{decoration:[Ye,"from-font","auto",ye,Xr]}],"text-decoration-color":[{decoration:P()}],"underline-offset":[{"underline-offset":[Ye,"auto",ye,_e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:R()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ye,_e]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ye,_e]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:W()}],"bg-repeat":[{bg:q()}],"bg-size":[{bg:oe()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},ar,ye,_e],radial:["",ye,_e],conic:[ar,ye,_e]},IU,PU]}],"bg-color":[{bg:P()}],"gradient-from-pos":[{from:we()}],"gradient-via-pos":[{via:we()}],"gradient-to-pos":[{to:we()}],"gradient-from":[{from:P()}],"gradient-via":[{via:P()}],"gradient-to":[{to:P()}],rounded:[{rounded:Pe()}],"rounded-s":[{"rounded-s":Pe()}],"rounded-e":[{"rounded-e":Pe()}],"rounded-t":[{"rounded-t":Pe()}],"rounded-r":[{"rounded-r":Pe()}],"rounded-b":[{"rounded-b":Pe()}],"rounded-l":[{"rounded-l":Pe()}],"rounded-ss":[{"rounded-ss":Pe()}],"rounded-se":[{"rounded-se":Pe()}],"rounded-ee":[{"rounded-ee":Pe()}],"rounded-es":[{"rounded-es":Pe()}],"rounded-tl":[{"rounded-tl":Pe()}],"rounded-tr":[{"rounded-tr":Pe()}],"rounded-br":[{"rounded-br":Pe()}],"rounded-bl":[{"rounded-bl":Pe()}],"border-w":[{border:Le()}],"border-w-x":[{"border-x":Le()}],"border-w-y":[{"border-y":Le()}],"border-w-s":[{"border-s":Le()}],"border-w-e":[{"border-e":Le()}],"border-w-t":[{"border-t":Le()}],"border-w-r":[{"border-r":Le()}],"border-w-b":[{"border-b":Le()}],"border-w-l":[{"border-l":Le()}],"divide-x":[{"divide-x":Le()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Le()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Ze(),"hidden","none"]}],"divide-style":[{divide:[...Ze(),"hidden","none"]}],"border-color":[{border:P()}],"border-color-x":[{"border-x":P()}],"border-color-y":[{"border-y":P()}],"border-color-s":[{"border-s":P()}],"border-color-e":[{"border-e":P()}],"border-color-t":[{"border-t":P()}],"border-color-r":[{"border-r":P()}],"border-color-b":[{"border-b":P()}],"border-color-l":[{"border-l":P()}],"divide-color":[{divide:P()}],"outline-style":[{outline:[...Ze(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Ye,ye,_e]}],"outline-w":[{outline:["",Ye,Jo,Xr]}],"outline-color":[{outline:P()}],shadow:[{shadow:["","none",u,oc,sc]}],"shadow-color":[{shadow:P()}],"inset-shadow":[{"inset-shadow":["none",f,oc,sc]}],"inset-shadow-color":[{"inset-shadow":P()}],"ring-w":[{ring:Le()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:P()}],"ring-offset-w":[{"ring-offset":[Ye,Xr]}],"ring-offset-color":[{"ring-offset":P()}],"inset-ring-w":[{"inset-ring":Le()}],"inset-ring-color":[{"inset-ring":P()}],"text-shadow":[{"text-shadow":["none",d,oc,sc]}],"text-shadow-color":[{"text-shadow":P()}],opacity:[{opacity:[Ye,ye,_e]}],"mix-blend":[{"mix-blend":[...J(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":J()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Ye]}],"mask-image-linear-from-pos":[{"mask-linear-from":K()}],"mask-image-linear-to-pos":[{"mask-linear-to":K()}],"mask-image-linear-from-color":[{"mask-linear-from":P()}],"mask-image-linear-to-color":[{"mask-linear-to":P()}],"mask-image-t-from-pos":[{"mask-t-from":K()}],"mask-image-t-to-pos":[{"mask-t-to":K()}],"mask-image-t-from-color":[{"mask-t-from":P()}],"mask-image-t-to-color":[{"mask-t-to":P()}],"mask-image-r-from-pos":[{"mask-r-from":K()}],"mask-image-r-to-pos":[{"mask-r-to":K()}],"mask-image-r-from-color":[{"mask-r-from":P()}],"mask-image-r-to-color":[{"mask-r-to":P()}],"mask-image-b-from-pos":[{"mask-b-from":K()}],"mask-image-b-to-pos":[{"mask-b-to":K()}],"mask-image-b-from-color":[{"mask-b-from":P()}],"mask-image-b-to-color":[{"mask-b-to":P()}],"mask-image-l-from-pos":[{"mask-l-from":K()}],"mask-image-l-to-pos":[{"mask-l-to":K()}],"mask-image-l-from-color":[{"mask-l-from":P()}],"mask-image-l-to-color":[{"mask-l-to":P()}],"mask-image-x-from-pos":[{"mask-x-from":K()}],"mask-image-x-to-pos":[{"mask-x-to":K()}],"mask-image-x-from-color":[{"mask-x-from":P()}],"mask-image-x-to-color":[{"mask-x-to":P()}],"mask-image-y-from-pos":[{"mask-y-from":K()}],"mask-image-y-to-pos":[{"mask-y-to":K()}],"mask-image-y-from-color":[{"mask-y-from":P()}],"mask-image-y-to-color":[{"mask-y-to":P()}],"mask-image-radial":[{"mask-radial":[ye,_e]}],"mask-image-radial-from-pos":[{"mask-radial-from":K()}],"mask-image-radial-to-pos":[{"mask-radial-to":K()}],"mask-image-radial-from-color":[{"mask-radial-from":P()}],"mask-image-radial-to-color":[{"mask-radial-to":P()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":M()}],"mask-image-conic-pos":[{"mask-conic":[Ye]}],"mask-image-conic-from-pos":[{"mask-conic-from":K()}],"mask-image-conic-to-pos":[{"mask-conic-to":K()}],"mask-image-conic-from-color":[{"mask-conic-from":P()}],"mask-image-conic-to-color":[{"mask-conic-to":P()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:W()}],"mask-repeat":[{mask:q()}],"mask-size":[{mask:oe()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",ye,_e]}],filter:[{filter:["","none",ye,_e]}],blur:[{blur:he()}],brightness:[{brightness:[Ye,ye,_e]}],contrast:[{contrast:[Ye,ye,_e]}],"drop-shadow":[{"drop-shadow":["","none",p,oc,sc]}],"drop-shadow-color":[{"drop-shadow":P()}],grayscale:[{grayscale:["",Ye,ye,_e]}],"hue-rotate":[{"hue-rotate":[Ye,ye,_e]}],invert:[{invert:["",Ye,ye,_e]}],saturate:[{saturate:[Ye,ye,_e]}],sepia:[{sepia:["",Ye,ye,_e]}],"backdrop-filter":[{"backdrop-filter":["","none",ye,_e]}],"backdrop-blur":[{"backdrop-blur":he()}],"backdrop-brightness":[{"backdrop-brightness":[Ye,ye,_e]}],"backdrop-contrast":[{"backdrop-contrast":[Ye,ye,_e]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Ye,ye,_e]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Ye,ye,_e]}],"backdrop-invert":[{"backdrop-invert":["",Ye,ye,_e]}],"backdrop-opacity":[{"backdrop-opacity":[Ye,ye,_e]}],"backdrop-saturate":[{"backdrop-saturate":[Ye,ye,_e]}],"backdrop-sepia":[{"backdrop-sepia":["",Ye,ye,_e]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":R()}],"border-spacing-x":[{"border-spacing-x":R()}],"border-spacing-y":[{"border-spacing-y":R()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",ye,_e]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Ye,"initial",ye,_e]}],ease:[{ease:["linear","initial",h,ye,_e]}],delay:[{delay:[Ye,ye,_e]}],animate:[{animate:["none",m,ye,_e]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[y,ye,_e]}],"perspective-origin":[{"perspective-origin":b()}],rotate:[{rotate:Ne()}],"rotate-x":[{"rotate-x":Ne()}],"rotate-y":[{"rotate-y":Ne()}],"rotate-z":[{"rotate-z":Ne()}],scale:[{scale:Te()}],"scale-x":[{"scale-x":Te()}],"scale-y":[{"scale-y":Te()}],"scale-z":[{"scale-z":Te()}],"scale-3d":["scale-3d"],skew:[{skew:We()}],"skew-x":[{"skew-x":We()}],"skew-y":[{"skew-y":We()}],transform:[{transform:[ye,_e,"","none","gpu","cpu"]}],"transform-origin":[{origin:b()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:xt()}],"translate-x":[{"translate-x":xt()}],"translate-y":[{"translate-y":xt()}],"translate-z":[{"translate-z":xt()}],"translate-none":["translate-none"],accent:[{accent:P()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:P()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ye,_e]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":R()}],"scroll-mx":[{"scroll-mx":R()}],"scroll-my":[{"scroll-my":R()}],"scroll-ms":[{"scroll-ms":R()}],"scroll-me":[{"scroll-me":R()}],"scroll-mt":[{"scroll-mt":R()}],"scroll-mr":[{"scroll-mr":R()}],"scroll-mb":[{"scroll-mb":R()}],"scroll-ml":[{"scroll-ml":R()}],"scroll-p":[{"scroll-p":R()}],"scroll-px":[{"scroll-px":R()}],"scroll-py":[{"scroll-py":R()}],"scroll-ps":[{"scroll-ps":R()}],"scroll-pe":[{"scroll-pe":R()}],"scroll-pt":[{"scroll-pt":R()}],"scroll-pr":[{"scroll-pr":R()}],"scroll-pb":[{"scroll-pb":R()}],"scroll-pl":[{"scroll-pl":R()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ye,_e]}],fill:[{fill:["none",...P()]}],"stroke-w":[{stroke:[Ye,Jo,Xr,ld]}],stroke:[{stroke:["none",...P()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},OU=xU(FU);function qv(...t){return OU(GS(t))}const kU=Mm("flex gap-2 items-center justify-center",{variants:{messagePlacement:{bottom:"flex-col",top:"flex-col-reverse",right:"flex-row",left:"flex-row-reverse"}},defaultVariants:{messagePlacement:"bottom"}});function ea({className:t,message:e,messagePlacement:n,...i}){return O.jsxs("div",{className:qv(kU({messagePlacement:n})),children:[O.jsxs("div",{className:qv("relative w-16 h-16",t),...i,children:[O.jsx(_t.div,{className:"absolute inset-0 border-2 border-transparent border-t-[#9B4CC2] rounded-full",animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"}}),O.jsx(_t.div,{className:"absolute inset-2 border-2 border-transparent border-t-[#46E2A1] rounded-full",animate:{rotate:-360},transition:{duration:1.5,repeat:1/0,ease:"linear"}}),O.jsx(_t.div,{className:"absolute inset-4 border-2 border-transparent border-t-[#E8C14B] rounded-full",animate:{rotate:360},transition:{duration:.8,repeat:1/0,ease:"linear"}})]}),e&&O.jsx("div",{className:"text-white/80 text-sm",children:e})]})}const BU="https://hackutd2025.eog.systems/api/Data",cd="http://localhost:5001/api/overflow-intervals";function Kv(t){if(!t)return;const e=t.trim();if(!(!e||e.toLowerCase()==="all"))return/^\d+$/.test(e)?`cauldron_${e.padStart(3,"0")}`.toLowerCase():(e.toLowerCase().startsWith("cauldron_"),e.toLowerCase())}function ud(t){return t.trim().toLowerCase()}async function zU(){try{const t=await fetch(BU,{method:"GET",headers:{"Content-Type":"application/json"}});if(!t.ok)throw new Error(`API request failed: ${t.status}`);return await t.json()}catch(t){throw console.error("Error fetching cauldron data:",t),t}}function VU(t){const e=[];return t.forEach(n=>{const i=n.timestamp,r=n.cauldron_levels||{};Object.entries(r).forEach(([s,o])=>{e.push({Time:i,Cauldron_ID:s,Oil_Level:o})})}),e}function HU(t,e=10){const n={};t.forEach(r=>{n[r.Cauldron_ID]||(n[r.Cauldron_ID]=[]),n[r.Cauldron_ID].push(r)}),Object.values(n).forEach(r=>{r.sort((s,o)=>new Date(s.Time).getTime()-new Date(o.Time).getTime())});const i=[];return Object.entries(n).forEach(([r,s])=>{s.forEach((o,a)=>{if(a<e)return;const c=s.slice(a-e,a).map(y=>y.Oil_Level),u=c.reduce((y,g)=>y+g,0)/c.length,d=o.Oil_Level-s[a-1].Oil_Level<0,p=o.Oil_Level<u,x=d&&p?.7+Math.random()*.3:Math.random()*.3;i.push({...o,Prob_Down:x})})}),i}function GU(t,e=.7){const n=[],i={};return t.forEach(r=>{i[r.Cauldron_ID]||(i[r.Cauldron_ID]=[]),i[r.Cauldron_ID].push(r)}),Object.entries(i).forEach(([r,s])=>{s.sort((l,c)=>new Date(l.Time).getTime()-new Date(c.Time).getTime());let o=!1,a=-1;s.forEach((l,c)=>{const u=l.Prob_Down||0;if(!o&&u>=e)o=!0,a=c;else if(o&&u<e){if(a>=0){const f=s[a],d=l,p=new Date(f.Time),y=(new Date(d.Time).getTime()-p.getTime())/(1e3*60),g=d.Oil_Level-f.Oil_Level,h=y>0?g/y:0,m=s.slice(a,c+1),_=m.reduce((b,S)=>b+(S.Prob_Down||0),0)/m.length,M=Math.max(...m.map(b=>b.Prob_Down||0));n.push({cauldron_id:r,start_time:f.Time,end_time:d.Time,duration_mins:y,oil_change:g,rate_of_change:h,avg_probability:_,max_probability:M,potion_removed:Math.abs(g)})}o=!1,a=-1}})}),n}async function WU(){console.log("FETCHING OVERFLOW DATA from:",cd);try{const t=await fetch(cd,{method:"GET",mode:"cors",headers:{Accept:"application/json"}});if(console.log("📡 Overflow API response status:",t.status,t.statusText),!t.ok){console.error(`Overflow API failed: ${t.status} ${t.statusText}`);const n=await t.text();return console.error("Response body:",n),[]}const e=await t.json();return console.log("Overflow API response data:",e),Array.isArray(e)?(console.log(`Received ${e.length} overflow intervals (array format)`),e):e!=null&&e.intervals&&Array.isArray(e.intervals)?(console.log(`Received ${e.intervals.length} overflow intervals (object format)`),e.intervals):(console.warn("Unexpected response format:",e),[])}catch(t){return console.error("Error fetching overflow:",t),t instanceof TypeError&&t.message.includes("fetch")&&console.error("Network error - is the backend running on",cd,"?"),[]}}function jU(t){const e=new Set;return t.forEach(n=>{e.add(n.Cauldron_ID)}),Array.from(e).sort()}async function XU(t){var n;console.log("About to fetch overflow intervals...");let e=[];try{e=await WU(),console.log("Overflow intervals received:",e.length,"items")}catch(i){console.error("Overflow fetch failed but continuing:",i)}try{const i=await zU(),r=VU(i),s=HU(r),o=jU(s),a=Kv(t),l=a?s.filter(m=>ud(m.Cauldron_ID)===a):s,c=GU(l);let u=e;a&&(console.log("Filtering overflow for cauldron:",t,"-> normalized:",a),console.log("Available overflow intervals:",e.map(m=>m.Cauldron_ID)),u=e.filter(m=>{var A,R;const M=(A=ud(m.Cauldron_ID).match(/\d+/))==null?void 0:A[0],b=(R=a.match(/\d+/))==null?void 0:R[0],S=M===b;return console.log(`  Checking ${m.Cauldron_ID} (num: ${M}) vs ${a} (num: ${b}): ${S}`),S}),console.log(`Filtered overflow intervals: ${u.length} out of ${e.length}`),console.log("Filtered IDs:",u.map(m=>m.Cauldron_ID)));const f=c.filter(m=>m.max_probability>.85).slice(0,6).map(m=>`Suspicious drain in ${m.cauldron_id} — ${Math.round(m.avg_probability*100)}% probability detected`),d=c.filter(m=>m.potion_removed&&m.potion_removed>5).slice(0,6).map(m=>{var _;return`${m.cauldron_id}: ${(_=m.potion_removed)==null?void 0:_.toFixed(1)} units removed unexpectedly`}),p=[];u.length>0?u.sort((m,_)=>_.max_probability-m.max_probability).forEach(m=>{var T;const _=((T=m.Cauldron_ID.match(/\d+/))==null?void 0:T[0])||"?",M=new Date(m.start_time).toLocaleString([],{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),b=new Date(m.end_time).toLocaleString([],{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),S=(new Date(m.end_time).getTime()-new Date(m.start_time).getTime())/6e4,A=Math.floor(S/60),R=Math.round(S%60);p.push(`Cauldron ${_}: Overflow at ${m.flat_value.toFixed(1)} units | ${Math.round(m.max_probability*100)}% certainty | ${M} - ${b} | Duration: ${A}h ${R}m`)}):p.push("No overflow currently detected");const x={Mon:[],Tue:[],Wed:[],Thu:[],Fri:[],Sat:[],Sun:[]};l.forEach(m=>{const _=new Date(m.Time),b=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][_.getDay()];x[b].push(m.Oil_Level)});const y=Object.entries(x).map(([m,_])=>({day:m,energy:_.length>0?Math.round(_.reduce((M,b)=>M+b,0)/_.length*100)/100:50})),h=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(m=>y.find(M=>M.day===m)||{day:m,energy:50});return{fraudTickets:f.length>0?f:[t?`No suspicious drains detected in ${t}`:"No suspicious drains detected","System operating normally",t?`${t} monitored`:"All cauldrons monitored","Security protocols active"],missingPotions:d.length>0?d:["Inventory levels stable","No missing potions detected","Stock management optimal","Supply chain secure"],overflowAlerts:p.length>0?p:["No overflow currently detected"],energyData:h,availableCauldrons:o,selectedCauldron:a,overflowDebug:[]}}catch(i){console.error("Error getting dashboard stats:",i);const r=Kv(t);let s=e;if(r){const a=(n=r.match(/\d+/))==null?void 0:n[0];s=e.filter(l=>{var f;return((f=ud(l.Cauldron_ID).match(/\d+/))==null?void 0:f[0])===a})}const o=[];return s.length>0?s.sort((a,l)=>l.max_probability-a.max_probability).forEach(a=>{var x;const l=((x=a.Cauldron_ID.match(/\d+/))==null?void 0:x[0])||"?",c=new Date(a.start_time).toLocaleString([],{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),u=new Date(a.end_time).toLocaleString([],{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),f=(new Date(a.end_time).getTime()-new Date(a.start_time).getTime())/6e4,d=Math.floor(f/60),p=Math.round(f%60);o.push(`Cauldron ${l}: Overflow at ${a.flat_value.toFixed(1)} units | ${Math.round(a.max_probability*100)}% certainty | ${c} - ${u} | Duration: ${d}h ${p}m`)}):o.push("No overflow currently detected"),{fraudTickets:["API connection unavailable","Retrying connection...","Please check network status","System in fallback mode"],missingPotions:["Data sync pending","Awaiting API response","Historical data available","Real-time sync interrupted"],overflowAlerts:o,energyData:[{day:"Mon",energy:45},{day:"Tue",energy:72},{day:"Wed",energy:58},{day:"Thu",energy:85},{day:"Fri",energy:91},{day:"Sat",energy:68},{day:"Sun",energy:77}],availableCauldrons:[],selectedCauldron:t,overflowDebug:[]}}}const $U=({onBack:t})=>{const e=te.useRef(null),{scrollYProgress:n}=iU({target:e,offset:["start start","end end"]}),[i,r]=te.useState(0),[s,o]=te.useState(null),[a,l]=te.useState(!0),[c,u]=te.useState(null),[f,d]=te.useState("1"),p=async b=>{l(!0);try{console.log("Dashboard fetchData called with cauldron:",b);const S=await XU(b);console.log("Dashboard data received:",S),o(S),u(new Date)}catch(S){console.error("Error fetching dashboard data:",S)}finally{l(!1)}},x=async()=>{var b;console.log("Testing overflow endpoint directly...");try{const S=await fetch("http://localhost:5001/api/overflow-intervals");console.log("Direct test response:",S.status,S.statusText);const A=await S.json();console.log("📦 Direct test data:",A),alert(`Overflow test: ${S.status} - Found ${((b=A==null?void 0:A.intervals)==null?void 0:b.length)||0} intervals`)}catch(S){console.error("Direct test error:",S),alert(`Overflow test failed: ${S}`)}},y=b=>{d(b),p(b)};te.useEffect(()=>{p(f);const b=setInterval(()=>p(f),3e4);return()=>clearInterval(b)},[f]),te.useEffect(()=>{const b=setInterval(()=>{r(S=>(S+1)%100)},50);return()=>clearInterval(b)},[]);const g=(s==null?void 0:s.fraudTickets)||["Loading cauldron data...","Connecting to sensors...","Initializing monitoring...","Please wait..."],h=(s==null?void 0:s.missingPotions)||["Loading inventory data...","Syncing with database...","Fetching records...","Please wait..."],m=(s==null?void 0:s.overflowAlerts)||["Loading alert system...","Checking cauldron levels...","Monitoring overflow...","Please wait..."],_=(s==null?void 0:s.energyData)||[{day:"Mon",energy:45},{day:"Tue",energy:72},{day:"Wed",energy:58},{day:"Thu",energy:85},{day:"Fri",energy:91},{day:"Sat",energy:68},{day:"Sun",energy:77}],M=Math.max(..._.map(b=>b.energy));return O.jsxs("div",{ref:e,className:"min-h-[300vh] bg-gradient-to-b from-[#1B0F1F] via-[#3A1F3D] to-[#1B0F1F] relative overflow-x-hidden",children:[O.jsxs(_t.header,{className:"fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#1B0F1F]/40 border-b border-[#9B4CC2]/20",initial:{y:-100},animate:{y:0},transition:{duration:.8,ease:"easeOut"},children:[O.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-4 flex items-center justify-between",children:[O.jsxs(_t.div,{className:"flex items-center gap-6",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.3},children:[O.jsxs("div",{className:"flex items-center gap-3",children:[O.jsx(ff,{className:"w-6 h-6 text-[#46E2A1]"}),O.jsx("h1",{className:"text-2xl text-white tracking-wide",children:"Cauldron Control Center 🪄"})]}),O.jsx("div",{className:"relative",children:O.jsx("select",{value:f,onChange:b=>y(b.target.value),className:"bg-[#1B0F1F]/60 border border-[#9B4CC2]/40 text-white px-4 py-2 rounded-lg text-sm font-medium tracking-wide cursor-pointer hover:border-[#E8C14B]/60 focus:outline-none focus:border-[#46E2A1]/60 transition-all backdrop-blur-sm",disabled:a,children:[1,2,3,4,5,6,7,8,9,10,11,12].map(b=>O.jsxs("option",{value:b.toString(),children:["Cauldron ",b]},b))})})]}),O.jsxs(_t.div,{className:"flex items-center gap-3",initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.3},children:[O.jsx(Jr,{size:"sm",contentClassName:"flex items-center gap-2",onClick:()=>p(f),disabled:a,children:a?O.jsxs(O.Fragment,{children:[O.jsx(ea,{className:"w-4 h-4"}),O.jsx("span",{children:"Refreshing..."})]}):O.jsxs(O.Fragment,{children:[O.jsx(PT,{className:"w-4 h-4"}),O.jsx("span",{children:"Refresh"})]})}),O.jsxs(Jr,{size:"sm",contentClassName:"flex items-center gap-2",onClick:x,children:[O.jsx(Eg,{className:"w-4 h-4"}),O.jsx("span",{children:"Test Overflow"})]}),t&&O.jsxs(Jr,{size:"sm",contentClassName:"flex items-center gap-2",onClick:t,children:[O.jsx(CT,{className:"w-4 h-4"}),O.jsx("span",{children:"Home"})]}),O.jsxs(Jr,{size:"sm",contentClassName:"flex items-center gap-2",onClick:()=>console.log("Settings clicked"),children:[O.jsx(ff,{className:"w-4 h-4"}),O.jsx("span",{children:"Settings"})]}),O.jsxs(Jr,{size:"sm",contentClassName:"flex items-center gap-2",onClick:()=>console.log("Profile clicked"),children:[O.jsx(bg,{className:"w-4 h-4"}),O.jsx("span",{children:"Profile"})]})]})]}),O.jsx(_t.div,{className:"absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#E8C14B] to-transparent",style:{width:"30%",left:`${i}%`},animate:{opacity:[.3,1,.3]},transition:{duration:2,repeat:1/0}})]}),O.jsx("div",{className:"relative pt-32 pb-20",children:O.jsxs("div",{className:"max-w-7xl mx-auto px-6 space-y-32",children:[O.jsxs(_t.section,{className:"relative",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:1,delay:.5},children:[O.jsx(ic,{}),O.jsxs("div",{className:"relative bg-gradient-to-br from-[#5C2E7E]/30 to-[#3A1F3D]/20 backdrop-blur-xl border border-[#9B4CC2]/40 rounded-3xl p-10 shadow-2xl",children:[O.jsx("div",{className:"absolute -top-5 -right-5",children:O.jsx(_t.div,{animate:{rotate:360},transition:{duration:20,repeat:1/0,ease:"linear"},children:O.jsx(bg,{className:"w-14 h-14 text-[#46E2A1]"})})}),O.jsxs("div",{className:"mb-10",children:[O.jsx(rc,{children:`Cauldron ${f} Energy Levels`}),O.jsxs("p",{className:"text-[#E8C14B]/60 text-sm mt-2 font-light tracking-widest",children:["Weekly arcane power levels for Cauldron ",f,c&&O.jsxs("span",{className:"ml-4 text-[#46E2A1]/50 text-xs",children:["Last updated: ",c.toLocaleTimeString()]})]})]}),O.jsx("div",{className:"relative h-[500px] bg-[#1B0F1F]/50 rounded-2xl border border-[#9B4CC2]/20 p-8",children:a?O.jsx("div",{className:"flex items-center justify-center h-full",children:O.jsx(ea,{message:"Loading energy data..."})}):O.jsxs(O.Fragment,{children:[O.jsxs("div",{className:"absolute left-2 top-6 bottom-6 flex flex-col justify-between text-xs text-[#9B4CC2]/50",children:[O.jsx("span",{children:"100"}),O.jsx("span",{children:"75"}),O.jsx("span",{children:"50"}),O.jsx("span",{children:"25"}),O.jsx("span",{children:"0"})]}),O.jsx("div",{className:"ml-8 h-full flex items-end justify-around gap-4",children:_.map((b,S)=>{const A=b.energy/M*100;return O.jsxs("div",{className:"flex-1 flex flex-col items-center gap-3",children:[O.jsxs(_t.div,{className:"w-full relative group cursor-pointer",style:{height:`${A}%`},initial:{height:0},animate:{height:`${A}%`},transition:{duration:1.5,delay:S*.1},children:[O.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#46E2A1]/40 via-[#9B4CC2]/40 to-[#E8C14B]/60 rounded-t-lg blur-sm group-hover:blur-md transition-all"}),O.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#46E2A1]/80 via-[#9B4CC2]/70 to-[#E8C14B]/90 rounded-t-lg border border-[#46E2A1]/30"}),O.jsx(_t.div,{className:"absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity",initial:{y:10},whileHover:{y:0},children:O.jsxs("div",{className:"bg-[#1B0F1F]/90 border border-[#E8C14B]/50 rounded-lg px-3 py-1 text-[#E8C14B] text-xs font-semibold whitespace-nowrap",children:[b.energy,"%"]})}),O.jsx(_t.div,{className:"absolute -top-2 left-1/2 -translate-x-1/2",animate:{scale:[1,1.3,1],opacity:[.5,1,.5]},transition:{duration:2,repeat:1/0,delay:S*.2},children:O.jsx(ff,{className:"w-4 h-4 text-[#E8C14B]"})})]}),O.jsx("span",{className:"text-[#E8C14B]/70 text-sm tracking-wider",children:b.day})]},b.day)})}),O.jsx("div",{className:"absolute left-8 right-0 top-6 bottom-16 pointer-events-none",children:[0,1,2,3,4].map(b=>O.jsx("div",{className:"absolute w-full border-t border-[#9B4CC2]/10",style:{top:`${b*25}%`}},b))})]})}),O.jsxs("div",{className:"mt-6 flex items-center justify-center gap-6 text-xs",children:[O.jsxs("div",{className:"flex items-center gap-2",children:[O.jsx("div",{className:"w-4 h-4 rounded bg-gradient-to-t from-[#46E2A1] to-[#E8C14B] border border-[#46E2A1]/50"}),O.jsx("span",{className:"text-[#E8C14B]/70",children:"Active Brewing Energy"})]}),O.jsxs("div",{className:"flex items-center gap-2",children:[O.jsx("div",{className:"w-4 h-4 rounded bg-gradient-to-t from-[#9B4CC2] to-[#5C2E7E] border border-[#9B4CC2]/50"}),O.jsx("span",{className:"text-[#E8C14B]/70",children:"Dormant Reserve"})]})]}),O.jsx(_t.div,{className:"absolute -right-8 top-1/4 text-3xl text-[#46E2A1]/20",animate:{rotate:[0,360],scale:[1,1.2,1]},transition:{duration:8,repeat:1/0},children:"✨"}),O.jsx(_t.div,{className:"absolute -left-8 bottom-1/4 text-2xl text-[#9B4CC2]/20",animate:{rotate:[360,0],y:[-10,10,-10]},transition:{duration:6,repeat:1/0},children:"⭐"})]})]}),O.jsxs("div",{className:"grid grid-cols-3 gap-6",children:[O.jsxs(_t.section,{className:"relative",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},children:[O.jsx(ic,{}),O.jsxs("div",{className:"relative bg-gradient-to-br from-[#5C2E7E]/20 to-[#1B0F1F]/40 backdrop-blur-xl border border-[#9B4CC2]/30 rounded-3xl p-6 shadow-2xl h-full flex flex-col",children:[O.jsx("div",{className:"absolute -top-4 -right-4",children:O.jsx(NT,{className:"w-10 h-10 text-red-400 animate-pulse"})}),O.jsx("div",{className:"mb-6",children:O.jsx(rc,{children:"Fraud Tickets"})}),O.jsx("div",{className:"space-y-3 overflow-y-auto max-h-96 pr-2 custom-scrollbar",children:a?O.jsx("div",{className:"flex items-center justify-center py-12",children:O.jsx(ea,{message:"Loading fraud tickets..."})}):g.map((b,S)=>O.jsx(od,{text:b,delay:S*.1},S))}),O.jsx(_t.div,{className:"absolute -left-6 top-1/2 w-8 h-8 text-[#9B4CC2]/30 text-2xl",animate:{y:[-10,10,-10],rotate:[0,360]},transition:{duration:4,repeat:1/0},children:"✦"})]})]}),O.jsxs(_t.section,{className:"relative",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.1},children:[O.jsx(ic,{}),O.jsxs("div",{className:"relative bg-gradient-to-br from-[#46E2A1]/10 to-[#1B0F1F]/40 backdrop-blur-xl border border-[#46E2A1]/30 rounded-3xl p-6 shadow-2xl h-full flex flex-col",children:[O.jsx("div",{className:"absolute -top-4 -right-4",children:O.jsx(TT,{className:"w-10 h-10 text-blue-400 animate-bounce"})}),O.jsx("div",{className:"mb-6",children:O.jsx(rc,{children:"Missing Potions"})}),O.jsx("div",{className:"space-y-3 overflow-y-auto max-h-96 pr-2 custom-scrollbar",children:a?O.jsx("div",{className:"flex items-center justify-center py-12",children:O.jsx(ea,{message:"Loading potions..."})}):h.map((b,S)=>O.jsx(od,{text:b,delay:S*.1},S))}),O.jsx(_t.div,{className:"absolute -right-6 top-1/3 w-8 h-8 text-[#46E2A1]/30 text-2xl",animate:{x:[-10,10,-10],rotate:[0,-360]},transition:{duration:5,repeat:1/0},children:"✧"})]})]}),O.jsxs(_t.section,{className:"relative",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.2},children:[O.jsx(ic,{}),O.jsxs("div",{className:"relative bg-gradient-to-br from-[#E8C14B]/15 to-[#1B0F1F]/40 backdrop-blur-xl border border-[#E8C14B]/30 rounded-3xl p-6 shadow-2xl h-full flex flex-col",children:[O.jsx("div",{className:"absolute -top-4 -right-4",children:O.jsx(Eg,{className:"w-10 h-10 text-orange-400 animate-pulse"})}),O.jsx("div",{className:"mb-6",children:O.jsx(rc,{children:"Overflow Alerts"})}),O.jsx("div",{className:"space-y-3 overflow-y-auto max-h-96 pr-2 custom-scrollbar",children:a?O.jsx("div",{className:"flex items-center justify-center py-12",children:O.jsx(ea,{message:"Loading overflow alerts..."})}):m.map((b,S)=>O.jsx(od,{text:b,delay:S*.1},S))}),O.jsx(_t.div,{className:"absolute -left-6 bottom-1/4 w-8 h-8 text-[#E8C14B]/30 text-2xl",animate:{y:[-15,15,-15],scale:[1,1.2,1]},transition:{duration:3,repeat:1/0},children:"✵"})]})]})]})]})}),O.jsx("div",{className:"fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1B0F1F]/80 to-transparent pointer-events-none"})]})},Zv=()=>{const t=te.useRef(null),e=te.useRef({x:0,y:0}),n=te.useRef(0),i=te.useRef(0),r=50;return te.useEffect(()=>{if(!window.matchMedia("(pointer: fine)").matches)return;const a=t.current;if(!a)return;let l=Date.now();const c=16,u=d=>{const p=Date.now(),x=d.clientX,y=d.clientY;a.style.left=`${x}px`,a.style.top=`${y}px`;const g=x-e.current.x,h=y-e.current.y;if(Math.abs(g)>1||Math.abs(h)>1){const m=Math.atan2(h,g)*(180/Math.PI);n.current=m;const _=g<0?"scaleX(-1)":"scaleX(1)";a.style.transform=`translate(-50%, -50%) ${_} rotate(${m+45}deg)`}p-l>c&&i.current<r&&(f(x,y,g,h),l=p),e.current={x,y}},f=(d,p,x,y)=>{const g=document.createElement("div");g.className="broom-spark";const h=x!==0?-x*.5:(Math.random()-.5)*10,m=y!==0?-y*.5:(Math.random()-.5)*10;g.style.left=`${d+h}px`,g.style.top=`${p+m}px`;const _=6+Math.random()*6;g.style.width=`${_}px`,g.style.height=`${_}px`,document.body.appendChild(g),i.current++,setTimeout(()=>{g.remove(),i.current--},500)};return window.addEventListener("pointermove",u),()=>{window.removeEventListener("pointermove",u),document.querySelectorAll(".broom-spark").forEach(d=>d.remove())}},[]),typeof window<"u"&&window.matchMedia("(pointer: fine)").matches?O.jsx("div",{ref:t,className:"broom-cursor","aria-hidden":"true"}):null},Qv=()=>{const[t,e]=te.useState([]);return te.useEffect(()=>{const n=["#E8C14B","#9B4CC2","#46E2A1","#E8C14B","#9B4CC2"],i=r=>{const o=[];for(let a=0;a<8;a++)o.push({id:Date.now()+a,x:r.clientX,y:r.clientY,angle:45*a,color:n[Math.floor(Math.random()*n.length)],size:4+Math.random()*4});e(a=>[...a,...o]),setTimeout(()=>{e(a=>a.filter(l=>!o.includes(l)))},600)};return window.addEventListener("click",i),()=>window.removeEventListener("click",i)},[]),O.jsx("div",{className:"fixed inset-0 pointer-events-none z-[10000]",children:O.jsx(sL,{children:t.map(n=>O.jsx(_t.div,{className:"absolute rounded-full",style:{left:n.x,top:n.y,width:n.size,height:n.size,backgroundColor:n.color,boxShadow:`0 0 ${n.size*2}px ${n.color}`},initial:{x:0,y:0,scale:0,opacity:1},animate:{x:Math.cos(n.angle*Math.PI/180)*(40+Math.random()*20),y:Math.sin(n.angle*Math.PI/180)*(40+Math.random()*20),scale:[0,1,.8,0],opacity:[1,1,.5,0]},exit:{opacity:0,scale:0},transition:{duration:.6,ease:"easeOut"}},n.id))})})};function YU(){const[t,e]=te.useState(!1);return t?O.jsxs(O.Fragment,{children:[O.jsx(Zv,{}),O.jsx(Qv,{}),O.jsx($U,{onBack:()=>e(!1)})]}):O.jsxs(O.Fragment,{children:[O.jsx(Zv,{}),O.jsx(Qv,{}),O.jsxs("div",{className:"relative min-h-screen text-white overflow-hidden",style:{backgroundColor:"#1B0F1F"},children:[O.jsx(YR,{className:"absolute inset-0 z-0",style:{width:"100%",height:"100%",position:"fixed"},colors:["#3A1F3D","#9B4CC2","#5C2E7E"],mouseForce:20,cursorSize:100,isViscous:!1,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6}),O.jsx("div",{className:"relative z-10 flex items-center justify-center min-h-screen px-4 pointer-events-none",children:O.jsx("h1",{className:"text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E8C14B] via-[#9B4CC2] to-[#46E2A1] drop-shadow-[0_0_30px_rgba(155,76,194,0.6)]",children:O.jsx(qR,{text:"WhitchWatch",radius:120,maxFontSize:1.15,minFontSize:1})})}),O.jsx("div",{className:"fixed bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none",children:O.jsxs(Jr,{size:"default",contentClassName:"flex items-center gap-2",onClick:()=>e(!0),children:[O.jsx(ET,{className:"w-5 h-5"}),O.jsx("span",{children:"Dashboard"})]})})]})]})}fd.createRoot(document.getElementById("root")).render(O.jsx(sE.StrictMode,{children:O.jsx(YU,{})}));
